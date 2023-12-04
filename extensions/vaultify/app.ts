import { array as ar, function as f } from "https://esm.sh/fp-ts"

import {
    addPlaylist,
    createFolder,
    createPlaylistFromTracks,
    fetchPlaylistContents,
    fetchRootFolder,
    setTrackLiked,
} from "../../shared/platformApi.ts"
import { SpotifyLoc, SpotifyURI, getReactProps } from "../../shared/util.ts"

const { LocalStorage } = Spicetify
const { ClipboardAPI, LibraryAPI, LocalStorageAPI } = Spicetify.Platform

export type PoF = Playlist | Folder

export interface Playlist {
    type: "playlist"
    name: string
    isOwnedBySelf: boolean
    uri: SpotifyURI
}

export interface Folder {
    type: "folder"
    name: string
    items: PoF[]
}

const extractLikedPlaylistTreeRecur = async (leaf: PoF): Promise<PersonalFolder | PersonalPlaylist | LikedPlaylist> => {
    switch (leaf.type) {
        case "playlist": {
            const getPlaylistContents = (uri: SpotifyURI) =>
                fetchPlaylistContents(uri).then(tracks => tracks.map(track => track.uri as SpotifyTrackUri))

            return {
                [leaf.name]: leaf.isOwnedBySelf
                    ? await getPlaylistContents(leaf.uri)
                    : (leaf.uri as SpotifyPlaylistUri),
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

type SpotifyTrackUri = SpotifyURI & { _: "track" }
type SpotifyPlaylistUri = SpotifyURI & { _: "playlist" }

type name = string
type namedProp<A> = Record<name, A>
type LikedPlaylist = namedProp<SpotifyPlaylistUri>
type PersonalPlaylist = namedProp<SpotifyTrackUri[]>
type PersonalFolder = namedProp<Array<LikedPlaylist | PersonalPlaylist | PersonalFolder>>

const isContentOfPersonalPlaylist = (
    subleaf: PersonalFolder[""] | PersonalPlaylist[""],
): subleaf is PersonalPlaylist[""] => typeof subleaf[0] === "string" && Spicetify.URI.isTrack(subleaf[0])

const restorePlaylistseRecur = async (
    leaf: PersonalFolder | PersonalPlaylist | LikedPlaylist,
    folder: SpotifyURI = "",
) =>
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

const allowedExtDataRegex = /^(?:marketplace:)|(?:extensions:)|(?:spicetify)/
export const backup = async () => {
    const extractItemsUris = (a: Spicetify.Platform.LibraryAPI.Paged<{ uri: string }>) => a.items.map(item => item.uri)

    const rawLibraryTracks = await LibraryAPI.getTracks({
        limit: -1,
        sort: { field: "ADDED_AT", order: "ASC" },
    })
    const libraryTracks = extractItemsUris(rawLibraryTracks)

    const rawLibraryAlbums = await LibraryAPI.getAlbums({
        limit: 2 ** 30,
        sort: { field: "ADDED_AT" },
    })
    const libraryAlbums = extractItemsUris(rawLibraryAlbums)

    const rawLibraryArtists = await LibraryAPI.getArtists({
        limit: 2 ** 30,
        sort: {
            field: "ADDED_AT",
        },
    })
    const libraryArtists = extractItemsUris(rawLibraryArtists)

    const playlists = await f.pipe(await fetchRootFolder(), extractLikedPlaylistTreeRecur)

    const localStore = Object.entries(localStorage).filter(([key]) => allowedExtDataRegex.test(key))

    const { items, namespace } = LocalStorageAPI

    const localStoreAPI = Object.entries(items)
        .filter(([key]) => key.startsWith(namespace))
        .map(([key, value]) => [key.split(":")[1], value])

    const settings = f.pipe(
        document.querySelectorAll(`[id^="settings."],[id^="desktop."],[class^="network."]`) as NodeListOf<HTMLElement>,
        Array.from<HTMLElement>,
        ar.flatMap(setting => {
            const id = setting.getAttribute("id")

            if (setting instanceof HTMLInputElement) {
                const type = setting.getAttribute("type")

                if (type === "checkbox") return [[id, "checkbox", setting.checked]]
                else if (type === "text") return [[id, "text", setting.value]]
            } else if (setting instanceof HTMLSelectElement) return [[id, "select", setting.value]]

            return []
        }),
    )

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
    Spicetify.showNotification("Backed up Playlists, Extensions and Settings")
}

type Vault = {
    libraryTracks: Array<SpotifyURI>
    libraryAlbums: Array<SpotifyURI>
    libraryArtists: Array<SpotifyURI>
    playlists: PersonalFolder
    localStore: Array<[string, string]>
    localStoreAPI: Array<[string, string]>
    settings: Array<[string, string, any]>
}
export const restore = (mode: "library" | "extensions" | "settings") => async () => {
    const vault = JSON.parse(await ClipboardAPI.paste()) as Vault

    if (mode === "library") {
        setTrackLiked(vault.libraryTracks, true)
        setTrackLiked(vault.libraryAlbums, true)
        setTrackLiked(vault.libraryArtists, true)
        await restorePlaylistseRecur(vault.playlists)
        Spicetify.showNotification("Restored Library")
    }
    if (mode === "extensions") {
        f.pipe(
            vault.localStore,
            ar.map(([a, b]) => LocalStorage.set(a, b)),
        )
        f.pipe(
            vault.localStoreAPI,
            ar.map(([a, b]) => LocalStorageAPI.setItem(a, b)),
        )
        Spicetify.showNotification("Restored Extensions")
    }
    if (mode === "settings") {
        vault.settings.map(([id, type, value]) => {
            const setting = document.querySelector<any>(`[id="${id}"]`)
            if (!setting) return console.warn(`Setting for ${id} wasn't found`)

            if (type === "text") setting.value = value
            else if (type === "checkbox") setting.checked = value
            else if (type === "select") setting.value = value
            else return

            const settingReactProps = getReactProps(setting)
            settingReactProps.onChange({ target: setting })
        })
        Spicetify.showNotification("Restored Settings")
    }
}

import("./settings.ts")
