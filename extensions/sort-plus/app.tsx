export default {}
import { array as a, eq, number, option as o, ord, string, task } from "fp-ts"
import { guard } from "fp-ts-std/Function"
import { anyPass } from "fp-ts-std/Predicate"
import { values } from "fp-ts-std/Record"
import { groupBy } from "fp-ts/NonEmptyArray"
import { mapWithIndex } from "fp-ts/Record"
import { constTrue, constant, flow as f, identity, pipe as p, tupled } from "fp-ts/function"
import { startsWith } from "fp-ts/string"
import { Lens, Optional } from "monocle-ts"
import {
    createPlatFolder,
    createSPPlaylistFromTracks,
    fetchGQLAlbum,
    fetchGQLArtistDiscography,
    fetchGQLArtistOverview,
    fetchPlatArtistLikedTracks,
    fetchPlatLikedTracks,
    fetchPlatPlaylistContents,
    fetchPlatRootFolder,
    fetchTrackLFMAPI,
    fetchWebAlbumsSpot,
    fetchWebArtistsSpot,
    fetchWebPlaylistsSpot,
    fetchWebTracksSpot,
    movePlatPlaylistTracks,
} from "../../shared/api"
import { objConcat, pMchain, tapAny, withProgress } from "../../shared/fp"
import {
    TrackData,
    TracksPopulater,
    UnparsedTrack,
    parseAPITrackFromPlaylist,
    parseAPITrackFromSpotify,
    parsePlatLikedTracks,
    parsePlatTrackFromArtistLikedTracks,
    parseTopTrackFromArtist,
    parseTrackFromAlbum,
} from "../../shared/parse"
import { SpotifyID, SpotifyLoc, SpotifyURI, addToContextQueue, setPlayingContext } from "../../shared/util"
import { CONFIG } from "./settings"

const { URI } = Spicetify

export enum SortBy {
    SPOTIFY_PLAYCOUNT = "Spotify - Play Count",
    SPOTIFY_POPULARITY = "Spotify - Popularity",
    SPOTIFY_RELEASEDATE = "Spotify - Release Date",
    LASTFM_SCROBBLES = "LastFM - Scrobbles",
    LASTFM_PERSONALSCROBBLES = "LastFM - My Scrobbles",
    LASTFM_PLAYCOUNT = "LastFM - Play Count",
}

export enum SortProp {
    "Spotify - Play Count" = "playcount",
    "Spotify - Popularity" = "popularity",
    "Spotify - Release Date" = "releaseDate",
    "LastFM - Scrobbles" = "scrobbles",
    "LastFM - My Scrobbles" = "personalScrobbles",
    "LastFM - Play Count" = "lastfmPlaycount",
}

// Fetching Tracks

const getAlbumTracks = async (uri: SpotifyURI) => {
    const albumRes = await fetchGQLAlbum(uri)
    const releaseDate = new Date(albumRes.date.isoString).getTime()

    return p(
        albumRes.tracks.items,
        a.map(
            f(
                parseTrackFromAlbum,
                Lens.fromProp<TrackData>()("albumUri").set(albumRes.uri),
                Lens.fromProp<TrackData>()("albumName").set(albumRes.name),
                Lens.fromProp<TrackData>()("releaseDate").set(releaseDate),
            ),
        ),
    )
}

export const getPlaylistTracks = f(fetchPlatPlaylistContents, pMchain(a.map(parseAPITrackFromPlaylist)))

async function getArtistTracks(uri: SpotifyURI) {
    const extractUriFromReleases = (x: any) => x.releases.items[0].uri
    const getTracksFromAlbum = f(a.map(getAlbumTracks), ps => Promise.all(ps), pMchain(a.flatten))

    const allTracks = new Array<TrackData>()

    const add = (tracks: TrackData[]): void => void Array.prototype.push.apply(allTracks, tracks)

    if (CONFIG.artistAllDiscography) {
        const allDisc = await fetchGQLArtistDiscography(uri)
        await p(allDisc, a.map(extractUriFromReleases), getTracksFromAlbum, pMchain(add))
    } else {
        const disc = (await fetchGQLArtistOverview(uri)).discography

        const artistTopTracks: UnparsedTrack[] = disc.topTracks.items
        const artistPopularReleases: UnparsedTrack[] = disc.popularReleasesAlbums.items
        const artistAlbums: UnparsedTrack[] = disc.albums.items
        const artistSingles: UnparsedTrack[] = disc.singles.items
        const artistCompilations: UnparsedTrack[] = disc.compilations.items

        if (CONFIG.artistTopTracks)
            await p(
                artistTopTracks,
                a.map(i => i.track),
                a.map(parseTopTrackFromArtist),
                add,
            )
        if (CONFIG.artistPopularReleases)
            await p(
                artistPopularReleases,
                a.map(r => r.uri),
                getTracksFromAlbum,
                pMchain(add),
            )
        if (CONFIG.artistSingles)
            await p(artistSingles, a.map(extractUriFromReleases), getTracksFromAlbum, pMchain(add))
        if (CONFIG.artistAlbums) await p(artistAlbums, a.map(extractUriFromReleases), getTracksFromAlbum, pMchain(add))
        if (CONFIG.artistCompilations)
            await p(artistCompilations, a.map(extractUriFromReleases), getTracksFromAlbum, pMchain(add))
        if (CONFIG.artistLikedTracks)
            await p(uri, fetchPlatArtistLikedTracks, pMchain(a.map(parsePlatTrackFromArtistLikedTracks)), pMchain(add))
    }

    return allTracks
}

// ------------- For populateTracksSpot -------------
const fetchAPITracksFromTracks: TracksPopulater = f(
    a.map(({ uri }) => URI.fromString(uri)!.id!),
    fetchWebTracksSpot,
    pMchain(a.map(parseAPITrackFromSpotify)),
)

const fetchAlbumTracksFromTracks: TracksPopulater = f(
    groupBy(track => track.albumUri!),
    withProgress(mapWithIndex<SpotifyURI, TrackData[], Promise<TrackData[]>>)(async (albumUri, tracks) => {
        const uriEq = p(
            string.Eq,
            eq.contramap((t: TrackData) => t.uri),
        )

        const albumTracks = await getAlbumTracks(albumUri)

        return a.intersection(uriEq)(albumTracks, tracks)
    }),
    values,
    ps => Promise.all(ps),
    pMchain(a.flatten),
)
// --------------------------------------------------

const populateTracksSpot = (propName: keyof typeof SortProp) => (tracks: TrackData[]) =>
    p(
        tracks,
        a.filter(f(toOptProp(propName), o.isNone)),
        guard([[startsWith(SortBy.SPOTIFY_PLAYCOUNT), constant(fetchAlbumTracksFromTracks)]])(
            constant(fetchAPITracksFromTracks),
        )(propName),
        pMchain(a.concat(tracks)),
        pMchain(groupBy(Lens.fromProp<TrackData>()("uri").get)),
        pMchain(values<TrackData[]>),
        pMchain(a.map(objConcat<TrackData>())),
    )

const populateTrackLastFM = async (track: TrackData) => {
    const lastfmTrack = (await fetchTrackLFMAPI(CONFIG.LFMApiKey, track.artistName, track.name, CONFIG.lastFmUserName))
        .track
    track.lastfmPlaycount = Number(lastfmTrack.listeners)
    track.scrobbles = Number(lastfmTrack.playcount)
    track.personalScrobbles = Number(lastfmTrack.userplaycount)
    return track
}

// Fetching, Sorting and Playing

export const fetchTracks = guard([
    [URI.isAlbum, getAlbumTracks],
    [URI.isArtist, getArtistTracks],
    [URI.isPlaylistV1OrV2, getPlaylistTracks],
    [startsWith("spotify:collection:tracks"), f(fetchPlatLikedTracks, pMchain(a.map(parsePlatLikedTracks)))],
])(task.of([]))

export const populateTracks = guard<keyof typeof SortProp, TracksPopulater>([
    [startsWith("Spotify"), populateTracksSpot],
    [
        startsWith("LastFM"),
        constant(f(p(withProgress(a.map<TrackData, Promise<TrackData>>)(populateTrackLastFM)), ps => Promise.all(ps))),
    ],
])(constant(task.of([])))

let lastSortedQueue: TrackData[] = []
const setQueue = async (queue: TrackData[]) => {
    const uriOrd = p(
        string.Ord,
        ord.contramap((t: TrackData) => t.uri),
    )

    lastSortedQueue = p(queue, a.uniq(uriOrd), invertAscending ^ Number(CONFIG.ascending) ? identity : a.reverse)

    await Spicetify.Platform.PlayerAPI.clearQueue()
    addToContextQueue(lastSortedQueue.map(t => t.uri))
    setPlayingContext(lastSortedUri)
    Spicetify.Player.next()
}

const toOptProp = (prop: keyof typeof SortProp) => Optional.fromNullableProp<TrackData>()(SortProp[prop]).getOption

let lastSortedUri: SpotifyURI = ""
let lastSortedName: keyof typeof SortProp
export const sortByProp = (name: keyof typeof SortProp) => async (uri: SpotifyURI) => {
    lastSortedUri = uri
    lastSortedName = name
    const propOrd = p(
        number.Ord,
        ord.contramap((t: Required<TrackData>) => t[SortProp[name]]),
    )

    p(
        uri,
        fetchTracks,
        pMchain(populateTracks(name)),
        pMchain(a.map(x => (p(x, toOptProp(name), o.isSome) ? o.some(x as Required<TrackData>) : o.none))),
        pMchain(a.sequence(o.Applicative)),
        pMchain(o.map(a.sort(propOrd))),
        pMchain(o.map(setQueue)),
    )
}

// Menu

const createSortByPropSubmenu = (name: keyof typeof SortProp, icon: any) =>
    new Spicetify.ContextMenu.Item(name, tupled(sortByProp(name)) as any, constTrue, icon, false)

const shuffle = <A,>(array: A[], l = array.length): A[] =>
    l == 0 ? [] : [array.splice(Math.floor(Math.random() * l), 1)[0], ...shuffle(array)]
const shuffleSubmenu = new Spicetify.ContextMenu.Item(
    "True Shuffle",
    tupled(f(fetchTracks, pMchain(shuffle), pMchain(setQueue))) as any,
    constTrue,
    "shuffle",
    false,
)

const starsOrd = p(
    number.Ord,
    ord.contramap((t: { uri: SpotifyURI }) => (globalThis as any).tracksRatings[t.uri] ?? 0),
)
const starsSubmenu = new Spicetify.ContextMenu.Item(
    "Stars",
    tupled(f(fetchTracks, pMchain(a.sort(starsOrd)), pMchain(tapAny(x => console.log(x))), pMchain(setQueue))) as any,
    // @ts-ignore
    () => globalThis.tracksRatings !== undefined,
    "heart-active",
    false,
)

new Spicetify.ContextMenu.SubMenu(
    "Sort by",
    a
        .zipWith(
            values(SortBy),
            ["play", "heart", "list-view", "volume", "artist", "subtitles"],
            createSortByPropSubmenu,
        )
        .concat([shuffleSubmenu, starsSubmenu]),
    tupled(anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2, startsWith("spotify:collection:tracks")])) as any,
).register()

const generatePlaylistName = async () => {
    const uriToId = (uri: SpotifyURI) => URI.fromString(uri)!.id!
    const getName = (fn: Function) => async (id: SpotifyID) => (await fn([id]))[0].name

    const collectionName = await guard([
        [URI.isAlbum, f(uriToId, getName(fetchWebAlbumsSpot))],
        [URI.isArtist, f(uriToId, getName(fetchWebArtistsSpot))],
        [URI.isPlaylistV1OrV2, f(uriToId, getName(fetchWebPlaylistsSpot))],
        [startsWith("spotify:collection:tracks"), task.of("Liked Tracks")],
    ])(task.of("Unresolved"))(lastSortedUri)

    return `${collectionName} - ${lastSortedName}`
}
new Spicetify.Topbar.Button("Add Sorted Queue to Sorted Playlists", "plus2px", async () => {
    if (lastSortedQueue.length === 0) return void Spicetify.showNotification("Must sort to queue beforehand")

    const rootFolder = await fetchPlatRootFolder()
    const sortedPlaylistsFolderUri = await p(
        rootFolder.items!,
        a.findFirst(item => item.type === "folder" && item.name === "Sorted Playlists"),
        o.getOrElseW<any>(() => createPlatFolder("Sorted Playlists")),
        pMchain((x: any) => x.uri),
    )
    const playlistName = await generatePlaylistName()

    await createSPPlaylistFromTracks(
        playlistName,
        lastSortedQueue.map(t => t.uri),
        sortedPlaylistsFolderUri,
    )

    Spicetify.showNotification(`Playlist ${playlistName} created`)
})

new Spicetify.Topbar.Button("Reorder Playlist with Sorted Queue", "chart-down", async () => {
    if (lastSortedQueue.length === 0) return void Spicetify.showNotification("Must sort to queue beforehand")
    if (!URI.isPlaylistV1OrV2(lastSortedUri))
        return void Spicetify.showNotification("Last sorted queue must be a playlist")

    p(
        lastSortedQueue as unknown as Array<{ uid: string }>,
        withProgress(a.map<{ uid: string }, void>)(
            t => void movePlatPlaylistTracks(lastSortedUri, [t], SpotifyLoc.after.end()),
        ),
    )
})

let invertAscending = 0
window.addEventListener("keydown", event => {
    if (!event.repeat && event.key == "Control") invertAscending = 1
})

window.addEventListener("keyup", event => {
    if (!event.repeat && event.key == "Control") invertAscending = 0
})

//TODO: add sort inside playlist's custom order
