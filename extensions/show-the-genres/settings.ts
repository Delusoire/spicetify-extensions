import { SettingsSection } from "../../shared/settings.tsx"

const settings = new SettingsSection("Show The Genres").addInput(
    {
        id: "LFMApiKey",
        desc: "Last.fm API Key",
        inputType: "text",
    },
    () => "********************************",
)

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    LFMApiKey: string
}
