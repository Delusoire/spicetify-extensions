debugger
import {
    array as ar,
    eq,
    function as f,
    nonEmptyArray as nea,
    number as num,
    option as o,
    ord,
    record as rec,
    string as str,
    task,
} from "https://esm.sh/fp-ts"
import { guard } from "https://esm.sh/fp-ts-std/Function"
import { anyPass } from "https://esm.sh/fp-ts-std/Predicate"
import { values } from "https://esm.sh/fp-ts-std/Record"
import { LastFMTrack } from "https://esm.sh/lastfm-ts-api"

import {
    fetchGQLAlbum,
    fetchGQLArtistDiscography,
    fetchGQLArtistOverview,
    fetchLastFMTrack,
    spotifyApi,
} from "../../shared/api.ts"
import {
    createPlaylistFromTracks,
    fetchArtistLikedTracks,
    fetchFolder,
    fetchLikedTracks,
    fetchPlaylistContents,
    fetchRootFolder,
    movePlaylistTracks,
    setPlaylistVisibility,
} from "../../shared/platformApi.ts"
import { objConcat, pMchain, tapAny, withProgress } from "../../shared/fp.ts"
import {
    TrackData,
    TracksPopulater,
    parse1,
    parseAPITrack,
    parsePlatLikedTracks,
    parsePlatTrackFromArtistLikedTracks,
    parseTopTrackFromArtist,
    parseTrackFromAlbum,
} from "../../shared/parse.ts"
import { SpotifyLoc, SpotifyURI, createQueueItem, setPlayingContext, setQueue } from "../../shared/util.ts"
import { CONFIG } from "./settings.ts"

const { URI, ContextMenu, Topbar } = Spicetify
const { PlayerAPI } = Spicetify.Platform

enum SortBy {
    SPOTIFY_PLAYCOUNT = "Spotify - Play Count",
    SPOTIFY_POPULARITY = "Spotify - Popularity",
    SPOTIFY_RELEASEDATE = "Spotify - Release Date",
    LASTFM_SCROBBLES = "LastFM - Scrobbles",
    LASTFM_PERSONALSCROBBLES = "LastFM - My Scrobbles",
    LASTFM_PLAYCOUNT = "LastFM - Play Count",
}

enum SortProp {
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

    const filler = {
        albumUri: albumRes.uri,
        albumName: albumRes.name,
        releaseDate,
    }

    return f.pipe(albumRes.tracks.items, ar.map(f.flow(parseTrackFromAlbum, track => Object.assign(track, filler))))
}

const getPlaylistTracks = f.flow(fetchPlaylistContents, pMchain(ar.map(parse1)))

async function getArtistTracks(uri: SpotifyURI) {
    const extractUriFromReleases = (x: { releases: { items: Array<{ uri: SpotifyURI }> } }) => x.releases.items[0].uri
    const getTracksFromAlbums = f.flow(ar.map(getAlbumTracks), ps => Promise.all(ps), pMchain(ar.flatten))

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
            const likedTracks = await fetchArtistLikedTracks(uri)
            f.pipe(likedTracks, ar.map(parsePlatTrackFromArtistLikedTracks), add)
        }

        if (CONFIG.artistTopTracks)
            f.pipe(
                disc.topTracks.items,
                ar.map(i => i.track),
                ar.map(parseTopTrackFromArtist),
                add,
            )

        if (CONFIG.artistPopularReleases) albumsLike.push(...disc.popularReleasesAlbums.items.map(r => r.uri))
        if (CONFIG.artistSingles) albumsLikeReleases.push(...disc.singles.items)
        if (CONFIG.artistAlbums) albumsLikeReleases.push(...disc.albums.items)
        if (CONFIG.artistCompilations) albumsLikeReleases.push(...disc.compilations.items)
    }

    albumsLike.push(...albumsLikeReleases.map(extractUriFromReleases))
    await f.pipe(albumsLike, getTracksFromAlbums, pMchain(add))

    return await Promise.all(allTracks)
}

// ------------- For populateTracksSpot -------------
const fetchAPITracksFromTracks: TracksPopulater = f.flow(
    ar.map(track => URI.fromString(track.uri)!.id!),
    spotifyApi.tracks.get,
    pMchain(ar.map(parseAPITrack)),
)

const fetchAlbumTracksFromTracks: TracksPopulater = f.flow(
    nea.groupBy(track => track.albumUri!),
    withProgress(rec.mapWithIndex<SpotifyURI, TrackData[], Promise<TrackData[]>>)(async (albumUri, tracks) => {
        const uriEq = f.pipe(
            str.Eq,
            eq.contramap((t: TrackData) => t.uri),
        )

        const albumTracks = await getAlbumTracks(albumUri)

        return ar.intersection(uriEq)(albumTracks, tracks)
    }),
    o => Promise.all(Object.values(o)),
    pMchain(ar.flatten),
)
// --------------------------------------------------

const populateTracksSpot = (propName: keyof typeof SortProp) => (tracks: TrackData[]) =>
    f.pipe(
        tracks,
        ar.filter(x => x[SortProp[propName]] == null),
        guard([[str.startsWith(SortBy.SPOTIFY_PLAYCOUNT), f.constant(fetchAlbumTracksFromTracks)]])(
            f.constant(fetchAPITracksFromTracks),
        )(propName),
        pMchain(ar.concat(tracks)),
        pMchain(nea.groupBy(x => x.uri)),
        pMchain(values<TrackData[]>),
        pMchain(ar.map(objConcat<TrackData>())),
    )

const populateTrackLastFM = async (track: TrackData) => {
    LastFMTrack

    const lastfmTrack = (await fetchLastFMTrack(CONFIG.LFMApiKey, track.artistName, track.name, CONFIG.lastFmUsername))
        .track
    track.lastfmPlaycount = Number(lastfmTrack.listeners)
    track.scrobbles = Number(lastfmTrack.playcount)
    track.personalScrobbles = Number(lastfmTrack.userplaycount)
    return track
}

// Fetching, Sorting and Playing

const fetchTracks = f.flow(
    tapAny(uri => void (lastFetchedUri = uri)),
    guard<SpotifyURI, Promise<TrackData[]>>([
        [URI.isAlbum, getAlbumTracks],
        [URI.isArtist, getArtistTracks],
        [URI.isPlaylistV1OrV2, getPlaylistTracks],
        [URI.isCollection, f.flow(fetchLikedTracks, pMchain(ar.map(parsePlatLikedTracks)))],
    ])(task.of([])),
)

const populateTracks = guard<keyof typeof SortProp, TracksPopulater>([
    [str.startsWith("Spotify"), populateTracksSpot],
    [
        str.startsWith("LastFM"),
        f.constant(
            f.flow(f.pipe(withProgress(ar.map<TrackData, Promise<TrackData>>)(populateTrackLastFM)), ps =>
                Promise.all(ps),
            ),
        ),
    ],
])(f.constant(task.of([])))

let lastSortedQueue: TrackData[] = []
const _setQueue = (inverted: boolean) => async (queue: TrackData[]) => {
    if (PlayerAPI._queue._queue === null) return void Spicetify.showNotification("Queue is null!", true)

    const uriOrd = f.pipe(
        str.Ord,
        ord.contramap((t: TrackData) => t.uri),
    )

    lastSortedQueue = f.pipe(queue, ar.uniq(uriOrd), inverted ? ar.reverse : f.identity)
    globalThis.lastSortedQueue = lastSortedQueue

    const isQueued = URI.isCollection(lastFetchedUri)

    await f.pipe(
        lastSortedQueue,
        ar.map(t => t.uri),
        ar.concat(["spotify:separator"]),
        ar.map(createQueueItem(isQueued)),
        setQueue,
    )
    if (!isQueued) await setPlayingContext(lastFetchedUri)
    await PlayerAPI.skipToNext()
}

let lastFetchedUri: SpotifyURI
let lastActionName: keyof typeof SortProp | "True Shuffle" | "Stars"
const sortByProp = (name: keyof typeof SortProp) => async (uri: SpotifyURI) => {
    lastActionName = name
    const descending = invertOrder ^ Number(CONFIG.descending)

    const propOrd = f.pipe(
        num.Ord,
        ord.contramap((t: Required<TrackData>) => t[SortProp[name]]),
    )

    f.pipe(
        uri,
        fetchTracks,
        pMchain(populateTracks(name)),
        pMchain(ar.map(x => (x[SortProp[name]] != null ? o.some(x as Required<TrackData>) : o.none))),
        pMchain(ar.sequence(o.Applicative)),
        pMchain(o.map(ar.sort(propOrd))),
        pMchain(o.map(_setQueue(!!descending))),
    )
}

let invertOrder = 0
addEventListener("keydown", event => {
    if (!event.repeat && event.key === "Control") invertOrder = 1
})

addEventListener("keyup", event => {
    if (!event.repeat && event.key === "Control") invertOrder = 0
})

// Menu

const sortTracksWith =
    (name: typeof lastActionName, sortFn: (tracksIn: TrackData[]) => TrackData[]) => (uri: SpotifyURI) => {
        lastActionName = name
        const descending = invertOrder ^ Number(CONFIG.descending)
        f.pipe(uri, fetchTracks, pMchain(sortFn), pMchain(_setQueue(!!descending)))
    }

const shuffle = <A>(array: A[], l = array.length): A[] =>
    l == 0 ? [] : [array.splice(Math.floor(Math.random() * l), 1)[0], ...shuffle(array)]
const shuffleSubmenu = new ContextMenu.Item(
    "True Shuffle",
    ([uri]) => sortTracksWith("True Shuffle", shuffle)(uri),
    f.constTrue,
    "shuffle",
    false,
)

const starsOrd = f.pipe(
    num.Ord,
    ord.contramap((t: { uri: SpotifyURI }) => globalThis.tracksRatings[t.uri] ?? 0),
)
const starsSubmenu = new ContextMenu.Item(
    "Stars",
    ([uri]) => sortTracksWith("Stars", ar.sort(starsOrd))(uri),
    () => globalThis.tracksRatings !== undefined,
    "heart-active",
    false,
)

const createSortByPropSubmenu = (name: keyof typeof SortProp, icon: any) =>
    new ContextMenu.Item(name, ([uri]) => sortByProp(name)(uri), f.constTrue, icon, false)

new ContextMenu.SubMenu(
    "Sort by",
    ar
        .zipWith(
            values(SortBy),
            ["play", "heart", "list-view", "volume", "artist", "subtitles"],
            createSortByPropSubmenu,
        )
        .concat([shuffleSubmenu, starsSubmenu]),
    ([uri]) => anyPass([URI.isAlbum, URI.isArtist, URI.isCollection, URI.isTrack, URI.isPlaylistV1OrV2])(uri),
).register()

// Topbar

const getNameFromUri = async (uri: Spicetify.URI) => {
    switch (uri.type) {
        case URI.Type.ALBUM: {
            const album = await spotifyApi.albums.get(uri.id!)
            return album.name
        }

        case URI.Type.ARTIST: {
            const artist = await spotifyApi.artists.get(uri.id!)
            return artist.name
        }

        case URI.Type.COLLECTION:
            return "Liked Tracks"

        case URI.Type.PLAYLIST:
        case URI.Type.PLAYLIST_V2: {
            const playlist = await spotifyApi.playlists.getPlaylist(uri.id!)
            return playlist.name
        }
    }
}

new Topbar.Button("Add Sorted Queue to Sorted Playlists", "plus2px", async () => {
    if (lastSortedQueue.length === 0) {
        Spicetify.showNotification("Must sort to queue beforehand")
        return
    }

    const sortedPlaylistsFolder = await fetchFolder(CONFIG.sortedPlaylistsFolderUri).catch(fetchRootFolder)

    const uri = URI.fromString(lastFetchedUri)
    const playlistName = `${getNameFromUri(uri) ?? "Error"} - ${lastActionName}`

    const { palylistUri } = await createPlaylistFromTracks(
        playlistName,
        lastSortedQueue.map(t => t.uri),
        sortedPlaylistsFolder.uri,
    )

    setPlaylistVisibility(palylistUri, false)

    Spicetify.showNotification(`Playlist ${playlistName} created`)
})

new Topbar.Button("Reorder Playlist with Sorted Queue", "chart-down", async () => {
    if (lastSortedQueue.length === 0) {
        Spicetify.showNotification("Must sort to queue beforehand")
        return
    }

    if (!URI.isPlaylistV1OrV2(lastFetchedUri)) {
        Spicetify.showNotification("Last sorted queue must be a playlist")
        return
    }

    f.pipe(
        lastSortedQueue.map(t => ({ uid: t.uid as string })),
        withProgress(ar.map<{ uid: string }, void>)(
            t => void movePlaylistTracks(lastFetchedUri, [t], SpotifyLoc.after.end()),
        ),
    )
})
