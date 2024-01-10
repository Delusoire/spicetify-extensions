import { _ } from "../../shared/deps.ts"
import { progressify } from "../../shared/fp.ts"
import {
    createPlaylistFromTracks,
    fetchFolder,
    fetchPlaylistContents,
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
    const playlistName = `${await getNameFromUri(uri)} - ${lastSortAction}`

    const { success, uri: playlistUri } = await createPlaylistFromTracks(
        playlistName,
        lastSortedQueue.map(t => t.uri),
        sortedPlaylistsFolder.uri,
    )

    if (!success) {
        Spicetify.showNotification(`Failed to create Playlist ${playlistName}`, true)
        return
    }

    setPlaylistVisibility(playlistUri, false)
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

    const sortedUids = lastSortedQueue.map(track => track.uid!)
    const playlistUids = (await fetchPlaylistContents(lastFetchedUri)).map(item => item.uid)

    let i = sortedUids.length - 1
    let uidsByReqs = new Array<string[]>()
    while (i >= 0) {
        const uids = new Array<string>()

        _.forEachRight(playlistUids, (uid, j) => {
            if (uid === sortedUids[i]) {
                i--
                playlistUids.splice(j, 1)
                uids.push(uid)
            }
        })

        uidsByReqs.push(uids.reverse())
    }

    const fn = progressify(
        (uids: string[]) => movePlaylistTracks(lastFetchedUri, uids, SpotifyLoc.before.start()),
        uidsByReqs.length,
    )

    await Promise.all(uidsByReqs.map(fn))

    Spicetify.showNotification(`Reordered the sorted playlist`)
    if (playlistUids.length) {
        Spicetify.showNotification(`Left ${playlistUids.length} unordered at the bottom`)
    }
}
