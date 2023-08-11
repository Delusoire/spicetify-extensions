export default {}
import { array as a, array, task } from "fp-ts"
import { map } from "fp-ts/Array"
import { toUnfoldable } from "fp-ts/Record"
import { pipe as p, tupled } from "fp-ts/function"
import {
    createPlatFolder,
    createSPPlaylistFromTracks,
    fetchPlatPlaylistContents,
    fetchPlatPlaylists,
    likePlatPlaylist,
} from "../../shared/api"
import { guard2, is, pMchain } from "../../shared/fp"
import { SpotifyURI } from "../../shared/util"
import { Folder, Playlist, PoF } from "./util"

const isType = is<PoF>("type")
const extractLikedPlaylistTreeRecur = (leaf: PoF) =>
    guard2<PoF, Playlist, Folder, Promise<{}>>([
        [
            isType("playlist"),
            async playlist => ({
                [playlist.name]: playlist.isOwnedBySelf
                    ? ((await p(playlist.uri, fetchPlatPlaylistContents, pMchain(a.map(x => x.uri)))) as string[])
                    : (playlist.uri as string),
            }),
        ],
        [
            isType("folder"),
            async (folder): Promise<{}> => ({
                [folder.name]: await p(folder.items, map(extractLikedPlaylistTreeRecur), x => Promise.all(x)),
            }),
        ],
    ])(task.of({}))(leaf)

type LikedPlaylist = SpotifyURI
type PersonalPlaylist = SpotifyURI[]
type PersonalFolder = Array<LikedPlaylist | PersonalPlaylist | PersonalFolder>

const restorePlaylistseRecur = async (leaf: any) => {
    Object.keys(leaf).forEach(name => {
        const subleaf = leaf[name]

        if (!Array.isArray(subleaf)) return void likePlatPlaylist(subleaf as string)

        if (subleaf.length && Spicetify.URI.isTrack(subleaf[0])) return void createSPPlaylistFromTracks(name, subleaf)

        createPlatFolder(name)
        subleaf.forEach(restorePlaylistseRecur)
    })
}

export const backup = async () => {
    const playlistData = await p(await fetchPlatPlaylists(), extractLikedPlaylistTreeRecur)

    const allowedAppDataRegex = /^(?:marketplace:)|(?:extensions:)/
    const appData = toUnfoldable(array)(localStorage).filter(([key]) => allowedAppDataRegex.test(key))

    await Spicetify.Platform.ClipboardAPI.copy(JSON.stringify({ playlistData, appData }))
    Spicetify.showNotification("Backed up Playlists and Settings")
}

export const restore = (mode: "playlistData" | "appData") => async () => {
    let vault = JSON.parse(await Spicetify.Platform.ClipboardAPI.paste())

    if (mode === "playlistData") {
        await restorePlaylistseRecur(vault.playlistData)
        Spicetify.showNotification("Restored Playlists")
    }
    if (mode === "appData") {
        map(tupled(Spicetify.LocalStorage.set))(vault.appData)
        Spicetify.showNotification("Restored Settings")
    }
}

import("./settings")
