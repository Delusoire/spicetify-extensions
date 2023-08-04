import { SettingsSection } from "../../shared/settings"

const settings = new SettingsSection("Sort+", "sort-plus")

settings.addToggle("ascending", "Ascending", false)
settings.addToggle("artist", "Ascending", false)
settings.addToggle("artistTopTracks", "Top Tracks", true)
settings.addToggle("artistPopularReleases", "Popular Releases", false)
settings.addToggle("artistSingles", "Singles", true)
settings.addToggle("artistAlbums", "Albums", true)
settings.addToggle("artistCompilations", "Compilations", true)
settings.addToggle("artistLikedTracks", "Liked Tracks", false)
settings.addInput("lastFmUsername", "Last.fm Username", "Delusoire")
settings.addInput(
    "LFMApiKey",
    "Last.fm API Key",
    "44654ea047786d90338c17331a5f5d95",
)

settings.pushSettings()

export const CONFIG = new Proxy(settings, {
    get: (target, prop) => target.getFieldValue(prop.toString()),
}) as unknown as {
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
