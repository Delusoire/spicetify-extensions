import { SettingsSection } from "../../shared/settings.tsx"

import { RestoreScope, backup, restoreFactory } from "./app.ts"

const settings = new SettingsSection("Vaultify")
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
        onClick: restoreFactory(RestoreScope.LIBRARY),
    })
    .addButton({
        id: "restoreExtensions",
        desc: "Restore Extensions",
        text: "Restore from clipboard",
        onClick: restoreFactory(RestoreScope.EXTENSIONS),
    })
    .addButton({
        id: "restoreSettings",
        desc: "Restore Settings",
        text: "Restore from clipboard",
        onClick: restoreFactory(RestoreScope.SETTINGS),
    })

settings.pushSettings()
