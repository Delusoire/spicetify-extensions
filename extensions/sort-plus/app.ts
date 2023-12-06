debugger
import { function as f } from "https://esm.sh/fp-ts"

import { spotifyApi } from "../../shared/api.ts"
import { _, fp } from "../../shared/deps.ts"
import { TrackData } from "../../shared/parse.ts"
import { SpotifyURI, createQueueItem, setPlayingContext, setQueue } from "../../shared/util.ts"

import { getLikedTracks, getTracksFromAlbum, getTracksFromArtist, getTracksFromPlaylist } from "./fetch.ts"
import { createPlaylistFromLastSortedQueue, reordedPlaylistLikeSortedQueue } from "./playlistsInterop.ts"
import { fillTracksFromLastFM, fillTracksFromSpotify } from "./populate.ts"
import { CONFIG } from "./settings.ts"
import { AsyncTracksOperation, SEPARATOR_URI, SortAction, SortActionProp, URI_isLikedTracks } from "./util.ts"

const { URI, ContextMenu, Topbar } = Spicetify
const { PlayerAPI } = Spicetify.Platform

export let lastFetchedUri: SpotifyURI
export let lastSortAction: SortAction | "True Shuffle" | "Stars"
export let lastSortedQueue: TrackData[] = []

let invertOrder = 0
addEventListener("keydown", event => {
    if (!event.repeat && event.key === "Control") invertOrder = 1
})

addEventListener("keyup", event => {
    if (!event.repeat && event.key === "Control") invertOrder = 0
})

const getTracksFromUri = _.flow(
    fp.tap((uri: string) => (lastFetchedUri = uri)),
    _.cond([
        [URI.isAlbum, getTracksFromAlbum],
        [URI.isArtist, getTracksFromArtist],
        [URI_isLikedTracks, getLikedTracks],
        [URI.isPlaylistV1OrV2, getTracksFromPlaylist],
    ]),
)

const populateTracks: (sortProp: SortAction) => AsyncTracksOperation = _.cond([
    [fp.startsWith("Spotify"), fillTracksFromSpotify],
    [fp.startsWith("LastFM"), () => fillTracksFromLastFM],
])

const _setQueue = (reverse: boolean) => async (tracks: TrackData[]) => {
    if (PlayerAPI?._state?.item?.uid == undefined) return void Spicetify.showNotification("Queue is null!", true)

    const dedupedQueue = _.uniqBy(tracks, track => track.uri)
    reverse && dedupedQueue.reverse()

    global.lastSortedQueue = lastSortedQueue = dedupedQueue

    const isLikedTracks = URI_isLikedTracks(lastFetchedUri)

    const queue = _(lastSortedQueue)
        .map(track => track.uri)
        .concat([SEPARATOR_URI])
        .map(createQueueItem(isLikedTracks))
        .value()

    setQueue(queue, isLikedTracks ? undefined : lastFetchedUri)
    if (!isLikedTracks) await setPlayingContext(lastFetchedUri)
    return await PlayerAPI.skipToNext()
}

// Menu

const sortTracksBy = (sortAction: typeof lastSortAction, sortFn: AsyncTracksOperation) => async (uri: SpotifyURI) => {
    lastSortAction = sortAction
    const descending = invertOrder ^ Number(CONFIG.descending)

    const tracks = await getTracksFromUri(uri)
    const sortedTracks = await sortFn(tracks)
    return await _setQueue(!!descending)(sortedTracks)
}

const shuffle = <A>(array: A[], l = array.length): A[] =>
    l == 0 ? [] : [array.splice(Math.floor(Math.random() * l), 1)[0], ...shuffle(array)]
const sortTracksByShuffle = sortTracksBy("True Shuffle", shuffle)
const shuffleSubmenu = new ContextMenu.Item(
    "True Shuffle",
    ([uri]) => sortTracksByShuffle(uri),
    f.constTrue,
    "shuffle",
    false,
)

const sortTracksByStars = sortTracksBy(
    "Stars",
    fp.sortBy((track: TrackData) => tracksRatings[track.uri] ?? 0),
)
const starsSubmenu = new ContextMenu.Item(
    "Stars",
    ([uri]) => sortTracksByStars(uri),
    () => tracksRatings !== undefined,
    "heart-active",
    false,
)

const createSubMenuForSortProp = (name: SortAction, icon: string) =>
    new ContextMenu.Item(
        name,
        ([uri]) => {
            const sortActionProp = SortActionProp[name]
            const sortFn = async (tracks: TrackData[]) => {
                const filledTracks = await populateTracks(name)(tracks)
                const filteredTracks = filledTracks.filter(track => track[sortActionProp] != null)
                return _.sortBy(filteredTracks, sortActionProp)
            }
            sortTracksBy(name, sortFn)(uri)
        },
        _.stubTrue,
        icon,
        false,
    )

new ContextMenu.SubMenu(
    "Sort by",
    _.zipWith(
        Object.values(SortAction),
        ["play", "heart", "list-view", "volume", "artist", "subtitles"],
        createSubMenuForSortProp,
    ).concat([shuffleSubmenu, starsSubmenu]),
    ([uri]) => _.overEvery([URI.isAlbum, URI.isArtist, URI_isLikedTracks, URI.isTrack, URI.isPlaylistV1OrV2])(uri),
).register()

// Topbar

new Topbar.Button("Create a Playlist from Sorted Queue", "plus2px", createPlaylistFromLastSortedQueue)

new Topbar.Button("Reorder current Playlist like Sorted Queue", "chart-down", reordedPlaylistLikeSortedQueue)
