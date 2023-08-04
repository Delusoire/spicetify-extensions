import { SettingsSection } from "../../shared/settings"

const settings = new SettingsSection("Show on youtube", "show-on-youtube")

settings.addInput(
    "YouTubeApiKey",
    "YouTube API Key",
    "000000000000000000000000000000000000000",
)

settings.pushSettings()

export const CONFIG = new Proxy(settings, {
    get: (target, prop) => target.getFieldValue(prop.toString()),
}) as unknown as {
    YouTubeApiKey: string
}
