import { fetchFolder, fetchPlaylistContents } from "../../shared/platformApi.ts"
import { onSongChanged } from "../../shared/listeners.ts"

import { CONFIG } from "./settings.ts"

export const trashedTrackUris = [] as string[]
global.trashedTrackUris = trashedTrackUris

const loadTrash = async () => {
    const trashFolder = await fetchFolder(CONFIG.trashFolderUri)

    const playlistUris = trashFolder.items
        .map(p => [p.uri, Number(p.name)] as const)
        .reduce((uris, [uri, rating]) => {
            uris[rating] = uri
            return uris
        }, [] as string[])

    const playlists = await Promise.all(playlistUris.map(fetchPlaylistContents))
    trashedTrackUris.concat(playlists.flatMap(tracks => tracks.map(t => t.uri)))
}

loadTrash()

onSongChanged(state => {
    trashedTrackUris.includes(state.item.uri) && Spicetify.Platform.PlayerAPI.skipToNext()
})
