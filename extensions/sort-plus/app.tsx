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
import { set } from "spectacles-ts"
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
    parseAPITrackFromPlaylist,
    parseAPITrackFromSpotify,
    parsePlatLikedTracks,
    parsePlatTrackFromArtistLikedTracks,
    parseTopTrackFromArtist,
    parseTrackFromAlbum,
} from "../../shared/parse"
import {
    SpotifyID,
    SpotifyLoc,
    SpotifyURI,
    createQueueItem,
    setPlayingContext,
    setQueue,
    sleep,
} from "../../shared/util"
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
                set("albumUri", albumRes.uri),
                set("albumName", albumRes.name),
                set("releaseDate", releaseDate),
            ),
        ),
    )
}

export const getPlaylistTracks = f(fetchPlatPlaylistContents, pMchain(a.map(parseAPITrackFromPlaylist)))

async function getArtistTracks(uri: SpotifyURI) {
    const extractUriFromReleases = (x: { releases: { items: Array<{ uri: SpotifyURI }> } }) => x.releases.items[0].uri
    const getTracksFromAlbums = f(a.map(getAlbumTracks), ps => Promise.all(ps), pMchain(a.flatten))

    const allTracks = new Array<TrackData | Promise<TrackData>>()

    const add = (tracks: TrackData[]) => {
        allTracks.push(...tracks)
    }

    const albumsLike = []
    const albumsLikeReleases = []

    if (CONFIG.artistAllDiscography) {
        const disc = await fetchGQLArtistDiscography(uri)
        albumsLikeReleases.push(...disc)
    } else {
        const disc = (await fetchGQLArtistOverview(uri)).discography

        if (CONFIG.artistLikedTracks) {
            const likedTracks = await fetchPlatArtistLikedTracks(uri)
            p(likedTracks, a.map(parsePlatTrackFromArtistLikedTracks), add)
        }

        if (CONFIG.artistTopTracks)
            p(
                disc.topTracks.items,
                a.map(i => i.track),
                a.map(parseTopTrackFromArtist),
                add,
            )

        if (CONFIG.artistPopularReleases) albumsLike.push(...disc.popularReleasesAlbums.items.map(r => r.uri))
        if (CONFIG.artistSingles) albumsLikeReleases.push(...disc.singles.items)
        if (CONFIG.artistAlbums) albumsLikeReleases.push(...disc.albums.items)
        if (CONFIG.artistCompilations) albumsLikeReleases.push(...disc.compilations.items)
    }

    albumsLike.push(...albumsLikeReleases.map(extractUriFromReleases))
    await p(albumsLike, getTracksFromAlbums, pMchain(add))

    return await Promise.all(allTracks)
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

export const fetchTracks = f(
    tapAny(uri => void (lastFetchedUri = uri)),
    guard<SpotifyURI, Promise<TrackData[]>>([
        [URI.isAlbum, getAlbumTracks],
        [URI.isArtist, getArtistTracks],
        [URI.isPlaylistV1OrV2, getPlaylistTracks],
        [startsWith("spotify:collection:tracks"), f(fetchPlatLikedTracks, pMchain(a.map(parsePlatLikedTracks)))],
    ])(task.of([])),
)

export const populateTracks = guard<keyof typeof SortProp, TracksPopulater>([
    [startsWith("Spotify"), populateTracksSpot],
    [
        startsWith("LastFM"),
        constant(f(p(withProgress(a.map<TrackData, Promise<TrackData>>)(populateTrackLastFM)), ps => Promise.all(ps))),
    ],
])(constant(task.of([])))

let lastSortedQueue: TrackData[] = []
;(globalThis as any).lastSortedQueue = lastSortedQueue
const _setQueue = async (queue: TrackData[]) => {
    if (Spicetify.Platform.PlayerAPI._queue._queue === null) return void Spicetify.showNotification("Qeueue is null!")

    const uriOrd = p(
        string.Ord,
        ord.contramap((t: TrackData) => t.uri),
    )

    console.log(invertAscending)
    console.log(invertAscending ^ Number(CONFIG.ascending))
    lastSortedQueue = p(queue, a.uniq(uriOrd), invertAscending ^ Number(CONFIG.ascending) ? identity : a.reverse)
    ;(globalThis as any).lastSortedQueue = lastSortedQueue

    await setPlayingContext(lastFetchedUri)
    await sleep(150)
    await p(
        lastSortedQueue,
        a.map(t => t.uri),
        a.map(createQueueItem(false)),
        setQueue,
    )
    await Spicetify.Platform.PlayerAPI.skipToNext()
}

const toOptProp = (prop: keyof typeof SortProp) => Optional.fromNullableProp<TrackData>()(SortProp[prop]).getOption

let lastFetchedUri: SpotifyURI
let lastActionName: keyof typeof SortProp | "True Shuffle" | "Stars"
export const sortByProp = (name: keyof typeof SortProp) => async (uri: SpotifyURI) => {
    lastActionName = name
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
        pMchain(o.map(_setQueue)),
    )
}

let invertAscending = 0
window.addEventListener("keydown", event => {
    if (!event.repeat && event.key == "Control") invertAscending = 1
})

window.addEventListener("keyup", event => {
    if (!event.repeat && event.key == "Control") invertAscending = 0
})

// Menu

const fetchSortQueue =
    (name: typeof lastActionName, sortFn: (tracksIn: TrackData[]) => TrackData[]) =>
    ([uri]: [SpotifyURI]) => {
        lastActionName = name
        p(uri, fetchTracks, pMchain(sortFn), pMchain(_setQueue))
    }

const shuffle = <A,>(array: A[], l = array.length): A[] =>
    l == 0 ? [] : [array.splice(Math.floor(Math.random() * l), 1)[0], ...shuffle(array)]
const shuffleSubmenu = new Spicetify.ContextMenu.Item(
    "True Shuffle",
    fetchSortQueue("True Shuffle", shuffle) as any,
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
    fetchSortQueue("Stars", a.sort(starsOrd)) as any,
    () => (globalThis as any).tracksRatings !== undefined,
    "heart-active",
    false,
)

const createSortByPropSubmenu = (name: keyof typeof SortProp, icon: any) =>
    new Spicetify.ContextMenu.Item(name, tupled(sortByProp(name)) as any, constTrue, icon, false)

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

// Topbar

const generatePlaylistName = async () => {
    const uriToId = (uri: SpotifyURI) => URI.fromString(uri)!.id!
    const getName = (fn: Function) => async (id: SpotifyID) => (await fn([id]))[0].name

    const collectionName = await guard([
        [URI.isAlbum, f(uriToId, getName(fetchWebAlbumsSpot))],
        [URI.isArtist, f(uriToId, getName(fetchWebArtistsSpot))],
        [URI.isPlaylistV1OrV2, f(uriToId, getName(fetchWebPlaylistsSpot))],
        [startsWith("spotify:collection:tracks"), task.of("Liked Tracks")],
    ])(task.of("Unresolved"))(lastFetchedUri)

    return `${collectionName} - ${lastActionName}`
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
    if (!URI.isPlaylistV1OrV2(lastFetchedUri))
        return void Spicetify.showNotification("Last sorted queue must be a playlist")

    p(
        lastSortedQueue as unknown as Array<{ uid: string }>,
        withProgress(a.map<{ uid: string }, void>)(
            t => void movePlatPlaylistTracks(lastFetchedUri, [t], SpotifyLoc.after.end()),
        ),
    )
})

//TODO: add sort inside playlist's custom order
