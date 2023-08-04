import { SettingsSection } from "../../shared/settings"

const settings = new SettingsSection(
    "Show on youtube",
    "show-on-youtube",
).addInput(
    "YouTubeApiKey",
    "YouTube API Key",
    "000000000000000000000000000000000000000",
)

settings.pushSettings()

export const CONFIG = settings.toObject() as { YouTubeApiKey: string }
