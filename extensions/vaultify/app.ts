import { array as ar, function as f, record as rec, task } from "https://esm.sh/fp-ts"
import {
    createPlatFolder,
    createSPPlaylistFromTracks,
    fetchPlatPlaylistContents,
    fetchPlatRootFolder,
    likePlatPlaylist,
} from "../../shared/api.ts"
import { guard2, is, pMchain } from "../../shared/fp.ts"
import { SpotifyURI, getReactProps, setLiked } from "../../shared/util.ts"
import { Folder, Playlist, PoF } from "./util.ts"

const isType = is<PoF>("type")
const extractLikedPlaylistTreeRecur = (leaf: PoF) =>
    guard2<PoF, Playlist, Folder, Promise<{}>>([
        [
            isType("playlist"),
            async playlist => ({
                [playlist.name]: playlist.isOwnedBySelf
                    ? await f.pipe(playlist.uri, fetchPlatPlaylistContents, pMchain(ar.map(x => x.uri)))
                    : playlist.uri,
            }),
        ],
        [
            isType("folder"),
            async (folder): Promise<{}> => ({
                [folder.name]: await f.pipe(folder.items, ar.map(extractLikedPlaylistTreeRecur), ps => Promise.all(ps)),
            }),
        ],
    ])(task.of({}))(leaf)

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

const restorePlaylistseRecur = async (leaf: PersonalFolder | PersonalPlaylist | LikedPlaylist) => {
    Object.keys(leaf).forEach(name => {
        const subleaf = leaf[name]

        if (!Array.isArray(subleaf)) return void likePlatPlaylist(subleaf)
        if (subleaf.length === 0) return

        if (isContentOfPersonalPlaylist(subleaf)) return void createSPPlaylistFromTracks(name, subleaf)

        createPlatFolder(name)
        subleaf.forEach(restorePlaylistseRecur)
    })
}

const allowedExtDataRegex = /^(?:marketplace:)|(?:extensions:)|(?:spicetify)/
export const backup = async () => {
    const extractItemsUris = (a: any) => a.items.map((item: any) => item.uri)

    const rawLibraryTracks = await Spicetify.Platform.LibraryAPI.getTracks({
        limit: -1,
        sort: { field: "ADDED_AT", order: "ASC" },
    })
    const libraryTracks = extractItemsUris(rawLibraryTracks)

    const rawLibraryAlbums = await Spicetify.Platform.LibraryAPI.getAlbums({
        limit: 2 ** 30,
        sort: { field: "ADDED_AT" },
    })
    const libraryAlbums = extractItemsUris(rawLibraryAlbums)

    const rawLibraryArtists = await Spicetify.Platform.LibraryAPI.getArtists({
        limit: 2 ** 30,
        sort: {
            field: "ADDED_AT",
        },
    })
    const libraryArtists = extractItemsUris(rawLibraryArtists)

    const playlists = await f.pipe((await fetchPlatRootFolder()) as any, extractLikedPlaylistTreeRecur)

    const localStore = f.pipe(
        localStorage,
        rec.toUnfoldable(ar),
        ar.filter<[string, string]>(([key]) => allowedExtDataRegex.test(key)),
    )

    const { items, namespace } = Spicetify.Platform.LocalStorageAPI

    const localStoreAPI = f.pipe(
        items,
        rec.toUnfoldable(ar),
        ar.filter<[string, string]>(([key]) => key.startsWith(namespace)),
        ar.map(([key, value]) => [key.split(":")[1], value]),
    )

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

    await Spicetify.Platform.ClipboardAPI.copy(
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
    let vault = JSON.parse(await Spicetify.Platform.ClipboardAPI.paste()) as Vault

    if (mode === "library") {
        setLiked(vault.libraryTracks, true)
        setLiked(vault.libraryAlbums, true)
        setLiked(vault.libraryArtists, true)
        await restorePlaylistseRecur(vault.playlists)
        Spicetify.showNotification("Restored Library")
    }
    if (mode === "extensions") {
        ar.map(f.tupled(Spicetify.LocalStorage.set))(vault.localStore)
        ar.map(f.tupled(Spicetify.Platform.LocalStorageAPI.setItem))(vault.localStoreAPI)
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

            const settingReactProps = getReactProps(setting) as any
            settingReactProps.onChange({ target: setting })
        })
        Spicetify.showNotification("Restored Settings")
    }
}

import("./settings.ts")
