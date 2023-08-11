import { task } from "fp-ts"
import { SettingsSection } from "../../shared/settings"

const settings = new SettingsSection("Show The Genre", "show-the-genre").addInput(
    "LFMApiKey",
    "Last.fm API Key",
    task.of("44654ea047786d90338c17331a5f5d95"),
)

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    LFMApiKey: string
}
