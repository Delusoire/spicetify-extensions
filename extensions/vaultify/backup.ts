import { _ } from "../../shared/deps.ts"
import { fetchPlaylistContents } from "../../shared/platformApi.ts"

import { LikedPlaylist, PersonalFolder, PersonalPlaylist, PoF, extractUrisWrapper } from "./util.ts"

const { LibraryAPI, LocalStorageAPI } = Spicetify.Platform

export type LibraryBackup = {
    libraryTracks: Array<string>
    libraryAlbums: Array<string>
    libraryArtists: Array<string>
    playlists: PersonalFolder
}
export type LocalStorageBackup = {
    localStore: Array<[string, string]>
    localStoreAPI: Array<[string, string]>
}

export type SettingBackup = {
    settings: Array<[string, string, any]>
}

const getLibraryTracks = () =>
    LibraryAPI.getTracks({
        limit: -1,
        sort: { field: "ADDED_AT", order: "ASC" },
    })

const getLibraryAlbums = () =>
    LibraryAPI.getAlbums({
        limit: 2 ** 30,
        sort: { field: "ADDED_AT" },
    })

const getLibraryArtists = () =>
    LibraryAPI.getArtists({
        limit: 2 ** 30,
        sort: {
            field: "ADDED_AT",
        },
    })

export const getLibraryTrackUris = extractUrisWrapper(getLibraryTracks)
export const getLibraryAlbumUris = extractUrisWrapper(getLibraryAlbums)
export const getLibraryArtistUris = extractUrisWrapper(getLibraryArtists)

enum SettingType {
    CHECKBOX = "checkbox",
    TEXT = "text",
    SELECT = "select",
}

type Setting =
    | [string, SettingType.CHECKBOX, boolean]
    | [string, SettingType.TEXT, string]
    | [string, SettingType.SELECT, string]
export const getSettings = () => {
    const SETTINGS_EL_SEL = `[id^="settings."],[id^="desktop."],[class^="network."]`
    const settingsEls = Array.from(document.querySelectorAll(SETTINGS_EL_SEL) as NodeListOf<HTMLElement>)
    const settings = settingsEls.map(settingEl => {
        const id = settingEl.getAttribute("id")

        if (!id) return null

        if (settingEl instanceof HTMLInputElement) {
            switch (settingEl.getAttribute("type")) {
                case "checkbox":
                    return [id, SettingType.CHECKBOX, settingEl.checked] as const
                case "text":
                    return [id, SettingType.TEXT, settingEl.value] as const
            }
        } else if (settingEl instanceof HTMLSelectElement) {
            return [id, SettingType.SELECT, settingEl.value] as const
        }
        return null
    })
    return _.compact(settings) as Setting[]
}

export const getLocalStorage = () => {
    const LS_ALLOW_REGEX = /^(?:marketplace:)|(?:extensions:)|(?:spicetify)/
    return Object.entries(localStorage).filter(([key]) => LS_ALLOW_REGEX.test(key))
}

export const getLocalStoreAPI = () => {
    return Object.entries(LocalStorageAPI.items)
        .filter(([key]) => key.startsWith(LocalStorageAPI.namespace))
        .map(([key, value]) => [key.split(":")[1], value] as const)
}

export const extractLikedPlaylistTreeRecur = async (
    leaf: PoF,
): Promise<PersonalFolder | PersonalPlaylist | LikedPlaylist> => {
    switch (leaf.type) {
        case "playlist": {
            const getPlaylistContents = (uri: string) =>
                fetchPlaylistContents(uri).then(tracks => tracks.map(track => track.uri))

            return {
                [leaf.name]: leaf.isOwnedBySelf ? await getPlaylistContents(leaf.uri) : leaf.uri,
            } as PersonalPlaylist | LikedPlaylist
        }
        case "folder": {
            const a = leaf.items.map(extractLikedPlaylistTreeRecur)
            return {
                [leaf.name]: await Promise.all(a),
            }
        }
    }
}
