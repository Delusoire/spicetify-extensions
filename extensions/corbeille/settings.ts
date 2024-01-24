import { createFolder } from "../../shared/platformApi.ts"
import { SettingsSection } from "../../shared/settings.tsx"
import { SpotifyURI } from "../../shared/util.ts"

const TRASH_FOLDER_NAME = "🗑️ Trash"

const settings = new SettingsSection("Sort Plus").addInput(
    {
        id: "trashFolderUri",
        desc: "Trash folder uri",
        inputType: "text",
    },
    async () => (await createFolder(TRASH_FOLDER_NAME)).uri,
)

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    trashFolderUri: SpotifyURI
}
