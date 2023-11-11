import { SettingsSection } from "../../shared/settings.tsx"
import { backup, restore } from "./app.ts"

const settings = new SettingsSection("Vaultify", "vaultify")
    .addButton({
        id: "backup",
        desc: "Backup Library, Extensions and Settings",
        text: "Backup to clipboard",
        onClick: backup,
    })
    .addButton({
        id: "restoreLibrary",
        desc: "Restore Library",
        text: "Restore from clipboard",
        onClick: restore("library"),
    })
    .addButton({
        id: "restoreExtensions",
        desc: "Restore Extensions",
        text: "Restore from clipboard",
        onClick: restore("extensions"),
    })
    .addButton({
        id: "restoreSettings",
        desc: "Restore Settings",
        text: "Restore from clipboard",
        onClick: restore("settings"),
    })

settings.pushSettings()
