import { SettingsSection } from "../../shared/settings"

const settings = new SettingsSection("Sort+", "sort-plus")
    .addToggle("ascending", "Ascending", false)
    .addToggle("artist", "Ascending", false)
    .addToggle("artistTopTracks", "Top Tracks", true)
    .addToggle("artistPopularReleases", "Popular Releases", false)
    .addToggle("artistSingles", "Singles", true)
    .addToggle("artistAlbums", "Albums", true)
    .addToggle("artistCompilations", "Compilations", true)
    .addToggle("artistLikedTracks", "Liked Tracks", false)
    .addInput("lastFmUsername", "Last.fm Username", "Delusoire")
    .addInput(
        "LFMApiKey",
        "Last.fm API Key",
        "44654ea047786d90338c17331a5f5d95",
    )

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    ascending: boolean
    artistTopTracks: boolean
    artistPopularReleases: boolean
    artistSingles: boolean
    artistAlbums: boolean
    artistCompilations: boolean
    artistLikedTracks: boolean
    lastFmUserName: string
    LFMApiKey: string
}
