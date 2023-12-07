import { fetchRootFolder } from "../../shared/platformApi.ts"

import {
    LibraryBackup,
    LocalStorageBackup,
    SettingBackup,
    extractLikedPlaylistTreeRecur,
    getLibraryAlbumUris,
    getLibraryArtistUris,
    getLibraryTrackUris,
    getLocalStorage,
    getLocalStoreAPI,
    getSettings,
} from "./backup.ts"
import { restoreExtensions, restoreLibrary, restoreSettings } from "./restore.ts"

const { ClipboardAPI } = Spicetify.Platform

export const backup = async (silent = false) => {
    const libraryTracks = await getLibraryTrackUris()
    const libraryAlbums = await getLibraryAlbumUris()
    const libraryArtists = await getLibraryArtistUris()
    const playlists = await fetchRootFolder().then(extractLikedPlaylistTreeRecur)
    const localStore = getLocalStorage()
    const localStoreAPI = getLocalStoreAPI()

    const settings = getSettings()

    await ClipboardAPI.copy(
        JSON.stringify({
            libraryTracks,
            libraryAlbums,
            libraryArtists,
            playlists,
            localStore,
            localStoreAPI,
            settings,
        } as Vault),
    )

    !silent && Spicetify.showNotification("Backed up Playlists, Extensions and Settings")
}

type Vault = LibraryBackup & LocalStorageBackup & SettingBackup
export enum RestoreScope {
    LIBRARY = "library",
    EXTENSIONS = "extensions",
    SETTINGS = "settings",
}

export const restoreFactory = (mode: RestoreScope) => async () => {
    const vault = JSON.parse(await ClipboardAPI.paste()) as Vault

    switch (mode) {
        case RestoreScope.LIBRARY:
            return restoreLibrary(vault, true)
        case RestoreScope.EXTENSIONS:
            return restoreExtensions(vault, true)
        case RestoreScope.SETTINGS:
            return restoreSettings(vault, true)
    }
}

import("./settings.ts")
