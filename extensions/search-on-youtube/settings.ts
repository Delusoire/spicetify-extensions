import { SettingsSection } from "../../shared/settings.tsx"

const settings = new SettingsSection("Search On YouTube").addInput(
    {
        id: "YouTubeApiKey",
        desc: "YouTube API Key",
        inputType: "text",
    },
    () => "***************************************",
)

settings.pushSettings()

export const CONFIG = settings.toObject() as { YouTubeApiKey: string }
