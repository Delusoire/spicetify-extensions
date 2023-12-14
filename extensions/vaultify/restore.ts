import { addPlaylist, createFolder, createPlaylistFromTracks, setTracksLiked } from "../../shared/platformApi.ts"
import { REACT_PROPS, SpotifyLoc } from "../../shared/util.ts"

import { LibraryBackup, LocalStorageBackup, SettingBackup } from "./backup.ts"
import { LikedPlaylist, PersonalFolder, PersonalPlaylist, isContentOfPersonalPlaylist } from "./util.ts"

const { LocalStorageAPI } = Spicetify.Platform

export const restoreLibrary = async (data: LibraryBackup, silent = true) => {
    setTracksLiked(data.libraryTracks, true)
    setTracksLiked(data.libraryAlbums, true)
    setTracksLiked(data.libraryArtists, true)
    await restorePlaylistseRecur(data.playlists)
    !silent && Spicetify.showNotification("Restored Library")
}

export const restoreExtensions = (vault: LocalStorageBackup, silent = true) => {
    vault.localStore.forEach(([k, v]) => localStorage.setItem(k, v))
    vault.localStoreAPI.forEach(([k, v]) => LocalStorageAPI.setItem(k, v))
    !silent && Spicetify.showNotification("Restored Extensions")
}

export const restoreSettings = (data: SettingBackup, silent = true) => {
    data.settings.map(([id, type, value]) => {
        const setting = document.querySelector<any>(`[id="${id}"]`)
        if (!setting) return console.warn(`Setting for ${id} wasn't found`)

        if (type === "text") setting.value = value
        else if (type === "checkbox") setting.checked = value
        else if (type === "select") setting.value = value
        else return

        const settingReactProps = setting[REACT_PROPS]
        settingReactProps.onChange({ target: setting })
    })
    !silent && Spicetify.showNotification("Restored Settings")
}

const restorePlaylistseRecur = async (leaf: PersonalFolder | PersonalPlaylist | LikedPlaylist, folder = "") =>
    await Promise.all(
        Object.keys(leaf).map(async name => {
            const subleaf = leaf[name]

            // isPlaylist
            if (!Array.isArray(subleaf)) return void addPlaylist(subleaf, folder)
            if (subleaf.length === 0) return

            //isCollectionOfTracks
            if (isContentOfPersonalPlaylist(subleaf)) return void createPlaylistFromTracks(name, subleaf, folder)

            //isFolder
            const { success, uri } = await createFolder(name, SpotifyLoc.after.fromUri(folder))
            if (!success) return

            subleaf.forEach(leaf => restorePlaylistseRecur(leaf, uri))
        }),
    )
