import { createFolder } from "../../shared/platformApi.ts"
import { SettingsSection } from "../../shared/settings.tsx"
import { SpotifyURI } from "../../shared/util.ts"

const ANONIMYZED_RADIOS_FOLDER_NAME = "Anonymized Radios"

const settings = new SettingsSection("Spoqify-radios", "spoqify-radios").addInput(
    {
        id: "anonymizedRadiosFolderUri",
        desc: "Anonymized Radios folder uri",
        inputType: "text",
    },
    async () => (await createFolder(ANONIMYZED_RADIOS_FOLDER_NAME)).uri,
)

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    anonymizedRadiosFolderUri: SpotifyURI
}
