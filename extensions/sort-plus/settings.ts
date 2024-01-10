import { task } from "https://esm.sh/fp-ts"

import { createFolder } from "../../shared/platformApi.ts"
import { SettingsSection } from "../../shared/settings.tsx"
import { SpotifyURI } from "../../shared/util.ts"

const SORTED_PLAYLISTS_FOLDER_NAME = "📀 Sorted Playlists"

const settings = new SettingsSection("Sort Plus")
    .addToggle({ id: "preventDuplicates", desc: "Prevent Duplicates" }, task.of(true))
    .addToggle({ id: "descending", desc: "Descending" }, task.of(true))
    .addToggle({ id: "artistAllDiscography", desc: "All of the artist's Discography" })
    .addToggle({ id: "artistTopTracks", desc: "Top Tracks" }, task.of(true))
    .addToggle({ id: "artistPopularReleases", desc: "Popular Releases" }, task.of(true))
    .addToggle({ id: "artistSingles", desc: "Singles" })
    .addToggle({ id: "artistAlbums", desc: "Albums" })
    .addToggle({ id: "artistCompilations", desc: "Compilations" })
    .addToggle({ id: "artistLikedTracks", desc: "Liked Tracks" }, task.of(true))
    .addToggle({ id: "artistAppearsOn", desc: "Appears On" }, task.of(false))
    .addInput({ id: "lastFmUsername", desc: "Last.fm Username", inputType: "text" }, task.of("Username"))
    .addInput(
        { id: "LFMApiKey", desc: "Last.fm API Key", inputType: "text" },
        task.of("********************************"),
    )
    .addInput(
        {
            id: "sortedPlaylistsFolderUri",
            desc: "Sorted Playlists folder uri",
            inputType: "text",
        },
        async () => (await createFolder(SORTED_PLAYLISTS_FOLDER_NAME)).uri,
    )

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    preventDuplicates: boolean
    artistAllDiscography: boolean
    artistTopTracks: boolean
    artistPopularReleases: boolean
    artistSingles: boolean
    artistAlbums: boolean
    artistCompilations: boolean
    artistLikedTracks: boolean
    artistAppearsOn: boolean
    descending: boolean
    lastFmUsername: string
    LFMApiKey: string
    sortedPlaylistsFolderUri: SpotifyURI
}
