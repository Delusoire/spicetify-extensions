import { SettingsSection } from "../../shared/settings"
import { backup, restore } from "./app"

const settings = new SettingsSection("Vaultify", "vaultify")
    .addButton(
        "backup",
        "Backup Playlists and Settings",
        "Backup to clipboard",
        backup,
    )
    .addButton(
        "restorePlaylistData",
        "Restore Playlists",
        "Restore from clipboard",
        restore("playlistData"),
    )
    .addButton(
        "restoreAppData",
        "Restore Settings",
        "Restore from clipboard",
        restore("appData"),
    )

settings.pushSettings()
