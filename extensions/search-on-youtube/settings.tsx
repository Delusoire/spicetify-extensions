import { task } from "fp-ts"
import { SettingsSection } from "../../shared/settings"

const settings = new SettingsSection("Search On YouTube", "search-on-youtube").addInput(
    "YouTubeApiKey",
    "YouTube API Key",
    task.of("000000000000000000000000000000000000000"),
)

settings.pushSettings()

export const CONFIG = settings.toObject() as { YouTubeApiKey: string }
