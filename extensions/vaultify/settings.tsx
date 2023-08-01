import { SettingsSection } from "spcr-settings"
import { backup, restore } from "./app"

const settings = new SettingsSection("Vaultify", "vaultify")

settings.addButton(
    "backup",
    "Backup Playlists and Settings",
    "Backup to clipboard",
    backup,
)
settings.addButton(
    "restorePlaylistData",
    "Restore Playlists",
    "Restore from clipboard",
    restore("playlistData"),
)
settings.addButton(
    "restoreAppData",
    "Restore Settings",
    "Restore from clipboard",
    restore("appData"),
)

settings.pushSettings()
