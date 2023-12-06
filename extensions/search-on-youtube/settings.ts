import { task } from "https://esm.sh/fp-ts"

import { SettingsSection } from "../../shared/settings.tsx"

const settings = new SettingsSection("Search On YouTube", "search-on-youtube").addInput(
    {
        id: "YouTubeApiKey",
        desc: "YouTube API Key",
        inputType: "text",
    },
    task.of("***************************************"),
)

settings.pushSettings()

export const CONFIG = settings.toObject() as { YouTubeApiKey: string }
