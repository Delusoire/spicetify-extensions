import { _, fp } from "../../shared/deps.ts"
import { TrackData } from "../../shared/parse.ts"
import { SpotifyURI, createQueueItem, setPlayingContext, setQueue as _setQueue } from "../../shared/util.ts"

import { createPlaylistFromLastSortedQueue, reordedPlaylistLikeSortedQueue } from "./playlistsInterop.ts"
import { fillTracksFromLastFM, fillTracksFromSpotify } from "./populate.ts"
import { CONFIG } from "./settings.ts"
import {
    AsyncTracksOperation,
    SEPARATOR_URI,
    SortAction,
    SortActionIcon,
    SortActionProp,
    URI_isLikedTracks,
    getTracksFromUri,
} from "./util.ts"

const { URI, ContextMenu, Topbar } = Spicetify
const { PlayerAPI } = Spicetify.Platform

export let lastFetchedUri: SpotifyURI
export let lastSortAction: SortAction | "True Shuffle" | "Stars"
export let lastSortedQueue: TrackData[] = []

let invertOrder = 0
addEventListener("keydown", event => {
    if (!event.repeat && event.key === "Shift") invertOrder = 1
})

addEventListener("keyup", event => {
    if (!event.repeat && event.key === "Shift") invertOrder = 0
})

const populateTracks: (sortProp: SortAction) => AsyncTracksOperation = _.cond([
    [fp.startsWith("Spotify"), fillTracksFromSpotify],
    [fp.startsWith("LastFM"), () => fillTracksFromLastFM],
])

const setQueue = (tracks: TrackData[]) => {
    if (PlayerAPI._state.item?.uid == null) return void Spicetify.showNotification("Queue is null!", true)

    const dedupedQueue = _.uniqBy(tracks, "uri")

    global.lastSortedQueue = lastSortedQueue = dedupedQueue

    const isLikedTracks = URI_isLikedTracks(lastFetchedUri)

    const queue = lastSortedQueue.concat({ uri: SEPARATOR_URI } as TrackData).map(createQueueItem(isLikedTracks))

    return _setQueue(queue, isLikedTracks ? undefined : lastFetchedUri)
}

// Menu

const sortTracksBy = (sortAction: typeof lastSortAction, sortFn: AsyncTracksOperation) => async (uri: SpotifyURI) => {
    lastSortAction = sortAction
    const descending = invertOrder ^ Number(CONFIG.descending)
    lastFetchedUri = uri
    const tracks = await getTracksFromUri(uri)
    let sortedTracks = await sortFn(tracks)
    if (CONFIG.preventDuplicates) {
        sortedTracks = _.uniqBy(sortedTracks, "name")
    }
    descending && sortedTracks.reverse()
    return await setQueue(sortedTracks)
}

const createSubMenuForSortProp = (sortAction: SortAction) =>
    new ContextMenu.Item(
        sortAction,
        ([uri]) => {
            const sortActionProp = SortActionProp[sortAction]
            const sortFn = async (tracks: TrackData[]) => {
                const filledTracks = await populateTracks(sortAction)(tracks)
                const filteredTracks = filledTracks.filter(track => track[sortActionProp] != null)
                return _.sortBy(filteredTracks, sortActionProp)
            }
            sortTracksBy(sortAction, sortFn)(uri)
        },
        _.stubTrue,
        SortActionIcon[sortAction],
        false,
    )
const sortTracksByShuffle = sortTracksBy("True Shuffle", _.shuffle)
const sortTracksByStars = sortTracksBy(
    "Stars",
    fp.sortBy((track: TrackData) => tracksRatings[track.uri] ?? 0),
)

const SubMenuItems = Object.values(SortAction).map(createSubMenuForSortProp)
const SubMenuItemShuffle = new ContextMenu.Item(
    "True Shuffle",
    ([uri]) => sortTracksByShuffle(uri),
    _.stubTrue,
    "shuffle",
    false,
)
const SubMenuItemStars = new ContextMenu.Item(
    "Stars",
    ([uri]) => sortTracksByStars(uri),
    () => global.tracksRatings !== undefined,
    "heart-active",
    false,
)
SubMenuItems.push(SubMenuItemShuffle, SubMenuItemStars)

const SortBySubMenu = new ContextMenu.SubMenu("Sort by", SubMenuItems, ([uri]) =>
    _.overSome([URI.isAlbum, URI.isArtist, URI_isLikedTracks, URI.isTrack, URI.isPlaylistV1OrV2])(uri),
)
SortBySubMenu.register()

// Topbar

new Topbar.Button("Create a Playlist from Sorted Queue", "plus2px", createPlaylistFromLastSortedQueue)
new Topbar.Button("Reorder current Playlist like Sorted Queue", "chart-down", reordedPlaylistLikeSortedQueue)

// Other

new ContextMenu.Item(
    "Choose for Sorted Playlists",
    ([uri]) => (CONFIG.sortedPlaylistsFolderUri = uri),
    ([uri]) => URI.isFolder(uri),
    "playlist-folder",
).register()
