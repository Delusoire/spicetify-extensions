import { task } from "fp-ts"
import { SettingsSection } from "../../shared/settings"

const settings = new SettingsSection("Sort+", "sort-plus")
    .addToggle("ascending", "Ascending", task.of(false))
    .addToggle("artistTopTracks", "Top Tracks")
    .addToggle("artistPopularReleases", "Popular Releases", task.of(false))
    .addToggle("artistSingles", "Singles")
    .addToggle("artistAlbums", "Albums")
    .addToggle("artistCompilations", "Compilations")
    .addToggle("artistLikedTracks", "Liked Tracks", task.of(false))
    .addInput("lastFmUsername", "Last.fm Username", task.of("Delusoire"))
    .addInput("LFMApiKey", "Last.fm API Key", task.of("44654ea047786d90338c17331a5f5d95"))

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
