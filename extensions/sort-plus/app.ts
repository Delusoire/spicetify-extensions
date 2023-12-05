debugger
import { array as ar, function as f, number as num, option as o, ord, string as str } from "https://esm.sh/fp-ts"

import {
    ItemBase,
    ItemsReleases,
    ItemsWithCount,
    fetchGQLAlbum,
    fetchGQLArtistDiscography,
    fetchGQLArtistOverview,
    fetchLastFMTrack,
    spotifyApi,
} from "../../shared/api.ts"
import { _, fp } from "../../shared/deps.ts"
import { pMchain, progressify, tapAny, withProgress } from "../../shared/fp.ts"
import {
    TrackData,
    parseAlbumTrack,
    parseArtistLikedTrack,
    parseLibraryAPILikedTracks,
    parsePlaylistAPITrack,
    parseTopTrackFromArtist,
    parseWebAPITrack,
} from "../../shared/parse.ts"
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

const joinByUri = (...trackss: TrackData[][]) => {
    const tracks = [...trackss].flat()
    const uriTrackPairs = tracks.map(track => [track.uri, track] as const)
    return Array.from(new Map(uriTrackPairs).values())
}

// Fetching Tracks

const getTracksFromAlbum = async (uri: string) => {
    const albumRes = await fetchGQLAlbum(uri)
    const releaseDate = new Date(albumRes.date.isoString).getTime()

    const filler = {
        albumUri: albumRes.uri,
        albumName: albumRes.name,
        releaseDate,
    }

    return Promise.all(
        albumRes.tracks.items.map(async track => {
            const parsedTrack = await parseAlbumTrack(track)
            return Object.assign(parsedTrack, filler) as TrackData
        }),
    )
}

const getTracksFromPlaylist = f.flow(fetchPlaylistContents, pMchain(ar.map(parsePlaylistAPITrack)))

async function getTracksFromArtist(uri: SpotifyURI) {
    const allTracks = new Array<TrackData>()

    const itemsWithCountAr = new Array<ItemsWithCount<ItemBase>>()
    const itemsReleasesAr = new Array<ItemsReleases<ItemBase>>()

    if (CONFIG.artistAllDiscography) {
        const { discography } = await fetchGQLArtistDiscography(uri)
        itemsReleasesAr.push(discography.all)
    } else {
        const { discography } = await fetchGQLArtistOverview(uri)

        CONFIG.artistLikedTracks && allTracks.push(...(await fetchArtistLikedTracks(uri)).map(parseArtistLikedTrack))
        CONFIG.artistTopTracks && allTracks.push(...discography.topTracks.items.map(parseTopTrackFromArtist))
        CONFIG.artistPopularReleases && itemsWithCountAr.push(discography.popularReleasesAlbums)
        CONFIG.artistSingles && itemsReleasesAr.push(discography.singles)
        CONFIG.artistAlbums && itemsReleasesAr.push(discography.albums)
        CONFIG.artistCompilations && itemsReleasesAr.push(discography.compilations)
    }

    const items1 = itemsWithCountAr.flatMap(iwc => iwc.items)
    const items2 = itemsReleasesAr.flatMap(ir => ir.items.flatMap(i => i.releases.items))
    const albumLikeUris = items1.concat(items2).map(item => item.uri)
    const albumsTracks = await Promise.all(albumLikeUris.map(getTracksFromAlbum))
    allTracks.push(...albumsTracks.flat())
    return await Promise.all(allTracks)
}

// ------------- For populateTracksSpot -------------
const fillTracksFromWebAPI = async (tracks: TrackData[]) => {
    const ids = tracks.map(track => URI.fromString(track.uri)!.id!)
    const fetchedTracks = (await spotifyApi.tracks.get(ids)).map(parseWebAPITrack)
    return joinByUri(tracks, fetchedTracks)
}

const fillTracksFromAlbumTracks = async (tracks: TrackData[]) => {
    const tracksByAlbumUri = Object.groupBy(tracks, track => track.albumUri)
    const passes = Object.keys(tracksByAlbumUri).length
    const fn = progressify(async (tracks: TrackData[], albumUri: string) => {
        const albumTracks = await getTracksFromAlbum(albumUri)
        return _.intersectionBy(tracks, albumTracks, track => track.uri)
    }, passes)

    const albumsTracks = await Promise.all(Object.values(_.mapValues(tracksByAlbumUri, fn)))
    return albumsTracks.flat()
}

// --------------------------------------------------

const fillTracksFromSpotify = (propName: keyof typeof SortProp) => async (tracks: TrackData[]) => {
    const tracksMissing = tracks.filter(track => track[SortProp[propName]] == null)
    const tracksPopulater = _.cond([
        [fp.startsWith(SortBy.SPOTIFY_PLAYCOUNT), () => fillTracksFromAlbumTracks],
        [_.stubTrue, () => fillTracksFromWebAPI],
    ])(propName)
    const filledTracks = await tracksPopulater(tracksMissing)
    return joinByUri(tracks, filledTracks)
}

const fillTracksFromLastFM = async (track: TrackData) => {
    const lastfmTrack = await fetchLastFMTrack(CONFIG.LFMApiKey, track.artistName, track.name, CONFIG.lastFmUsername)
    track.lastfmPlaycount = Number(lastfmTrack.listeners)
    track.scrobbles = Number(lastfmTrack.playcount)
    track.personalScrobbles = Number(lastfmTrack.userplaycount)
    return track
}

// Fetching, Sorting and Playing

const fetchTracks = f.flow(
    tapAny((uri: string) => void (lastFetchedUri = uri)),
    _.cond([
        [URI.isAlbum, getTracksFromAlbum],
        [URI.isArtist, getTracksFromArtist],
        [URI.isCollection, () => fetchLikedTracks().then(tracks => tracks.map(parseLibraryAPILikedTracks))],
        [URI.isPlaylistV1OrV2, getTracksFromPlaylist],
    ]),
)

const populateTracksLastFM = (tracks: TrackData[]) => {
    const fn = progressify(fillTracksFromLastFM, tracks.length)
    return Promise.all(tracks.map(fn))
}

type TracksPopulater = (tracks: TrackData[]) => Promise<TrackData[]>
const populateTracks: (sortProp: keyof typeof SortProp) => TracksPopulater = _.cond([
    [fp.startsWith("Spotify"), fillTracksFromSpotify],
    [fp.startsWith("LastFM"), () => populateTracksLastFM],
])

let lastSortedQueue: TrackData[] = []
const _setQueue = (inverted: boolean) => async (queue: TrackData[]) => {
    if (PlayerAPI._queue._queue === null) return void Spicetify.showNotification("Queue is null!", true)

    const uriOrd = f.pipe(
        str.Ord,
        ord.contramap((t: TrackData) => t.uri),
    )

    lastSortedQueue = f.pipe(queue, ar.uniq(uriOrd), inverted ? ar.reverse : f.identity)
    global.lastSortedQueue = lastSortedQueue

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
    ord.contramap((t: { uri: SpotifyURI }) => tracksRatings[t.uri] ?? 0),
)
const starsSubmenu = new ContextMenu.Item(
    "Stars",
    ([uri]) => sortTracksWith("Stars", ar.sort(starsOrd))(uri),
    () => tracksRatings !== undefined,
    "heart-active",
    false,
)

const createSortByPropSubmenu = (name: keyof typeof SortProp, icon: any) =>
    new ContextMenu.Item(name, ([uri]) => sortByProp(name)(uri), f.constTrue, icon, false)

new ContextMenu.SubMenu(
    "Sort by",
    ar
        .zipWith(
            Object.values(SortBy),
            ["play", "heart", "list-view", "volume", "artist", "subtitles"],
            createSortByPropSubmenu,
        )
        .concat([shuffleSubmenu, starsSubmenu]),
    ([uri]) => _.overEvery([URI.isAlbum, URI.isArtist, URI.isCollection, URI.isTrack, URI.isPlaylistV1OrV2])(uri),
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
