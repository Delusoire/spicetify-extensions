import { task } from "fp-ts"
import { SettingsSection } from "../../shared/settings"
import { createPlatFolder } from "../../shared/api"
import { SpotifyURI } from "../../shared/util"

const SORTED_PLAYLISTS_FOLDER_NAME = "Sorted Playlists"

const settings = new SettingsSection("Sort+", "sort-plus")
    .addToggle("descending", "Descending", task.of(true))
    .addToggle("artistAllDiscography", "All of the artist's Discography", task.of(false))
    .addToggle("artistTopTracks", "Top Tracks")
    .addToggle("artistPopularReleases", "Popular Releases", task.of(false))
    .addToggle("artistSingles", "Singles")
    .addToggle("artistAlbums", "Albums")
    .addToggle("artistCompilations", "Compilations")
    .addToggle("artistLikedTracks", "Liked Tracks", task.of(false))
    .addInput("lastFmUsername", "Last.fm Username", task.of("Delusoire"))
    .addInput("LFMApiKey", "Last.fm API Key", task.of("44654ea047786d90338c17331a5f5d95"))
    .addInput(
        "sortedPlaylistsFolderUri",
        "Sorted Playlists folder uri",
        async () => (await createPlatFolder(SORTED_PLAYLISTS_FOLDER_NAME)).uri,
    )

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    artistAllDiscography: boolean
    artistTopTracks: boolean
    artistPopularReleases: boolean
    artistSingles: boolean
    artistAlbums: boolean
    artistCompilations: boolean
    artistLikedTracks: boolean
    descending: boolean
    lastFmUsername: string
    LFMApiKey: string
    sortedPlaylistsFolderUri: SpotifyURI
}
