export default {}
import { array as a, array, task } from "fp-ts"
import { map } from "fp-ts/Array"
import { toUnfoldable } from "fp-ts/Record"
import { pipe as p, tupled } from "fp-ts/function"
import {
    createPlatFolder,
    createSPPlaylistFromTracks,
    fetchPlatPlaylistContents,
    fetchPlatRootFolder,
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
                [folder.name]: await p(folder.items, map(extractLikedPlaylistTreeRecur), ps => Promise.all(ps)),
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

export const backup = async () => {
    const playlistData = await p((await fetchPlatRootFolder()) as any, extractLikedPlaylistTreeRecur)

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
