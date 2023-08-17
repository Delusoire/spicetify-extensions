import { SettingsSection } from "../../shared/settings"
import { backup, restore } from "./app"

const settings = new SettingsSection("Vaultify", "vaultify")
    .addButton("backup", "Backup Playlists and Settings", "Backup to clipboard", backup)
    .addButton("restorePlaylists", "Restore Playlists", "Restore from clipboard", restore("playlists"))
    .addButton("restoreExtensions", "Restore Extensions", "Restore from clipboard", restore("extensions"))
    .addButton("restoreSettings", "Restore Settings", "Restore from clipboard", restore("settings"))

settings.pushSettings()
