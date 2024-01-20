import { SettingsSection } from "../../shared/settings.tsx"

const settings = new SettingsSection("Star Ratings").addToggle({ id: "showInTrackLists", desc: "Show in tracklists" })

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    showInTrackLists: boolean
}
