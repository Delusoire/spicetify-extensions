import {
    createPlaylistFromTracks,
    fetchFolder,
    fetchRootFolder,
    movePlaylistTracks,
    setPlaylistVisibility,
} from "../../shared/platformApi.ts"
import { SpotifyLoc } from "../../shared/util.ts"

import { lastFetchedUri, lastSortAction } from "./app.ts"
import { CONFIG } from "./settings.ts"
import { ERROR, getNameFromUri } from "./util.ts"

const { URI } = Spicetify

export const createPlaylistFromLastSortedQueue = async () => {
    if (lastSortedQueue.length === 0) {
        Spicetify.showNotification(ERROR.LAST_SORTED_QUEUE_EMPTY)
        return
    }

    const sortedPlaylistsFolder = await fetchFolder(CONFIG.sortedPlaylistsFolderUri).catch(fetchRootFolder)

    const uri = URI.fromString(lastFetchedUri)
    const playlistName = `${getNameFromUri(uri)} - ${lastSortAction}`

    const { palylistUri } = await createPlaylistFromTracks(
        playlistName,
        lastSortedQueue.map(t => t.uri),
        sortedPlaylistsFolder.uri,
    )

    setPlaylistVisibility(palylistUri, false)

    Spicetify.showNotification(`Playlist ${playlistName} created`)
}

export const reordedPlaylistLikeSortedQueue = async () => {
    if (lastSortedQueue.length === 0) {
        Spicetify.showNotification(ERROR.LAST_SORTED_QUEUE_EMPTY)
        return
    }

    if (!URI.isPlaylistV1OrV2(lastFetchedUri)) {
        Spicetify.showNotification(ERROR.LAST_SORTED_QUEUE_NOT_A_PLAYLIST)
        return
    }

    const fn = (uid: string) => movePlaylistTracks(lastFetchedUri, [uid], SpotifyLoc.after.end())
    await Promise.all(lastSortedQueue.map(track => track.uid!).map(fn))
}
