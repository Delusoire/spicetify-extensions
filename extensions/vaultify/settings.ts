import { SettingsSection } from "../../shared/settings.tsx"
import { backup, restore } from "./app.ts"

const settings = new SettingsSection("Vaultify", "vaultify")
    .addButton("backup", "Backup Library, Extensions and Settings", "Backup to clipboard", backup)
    .addButton("restoreLibrary", "Restore Library", "Restore from clipboard", restore("library"))
    .addButton("restoreExtensions", "Restore Extensions", "Restore from clipboard", restore("extensions"))
    .addButton("restoreSettings", "Restore Settings", "Restore from clipboard", restore("settings"))

settings.pushSettings()
