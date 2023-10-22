import { SettingsSection } from "../../shared/settings"
import { createPlatFolder } from "../../shared/api"
import { SpotifyURI } from "../../shared/util"

const SORTED_PLAYLISTS_FOLDER_NAME = "Anonymized Radios"

const settings = new SettingsSection("Spoqify-radios", "spoqify-radios").addInput(
    "anonymizedRadiosFolderUri",
    "Anonymized Radios folder uri",
    async () => (await createPlatFolder(SORTED_PLAYLISTS_FOLDER_NAME)).uri,
)

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    anonymizedRadiosFolderUri: SpotifyURI
}
