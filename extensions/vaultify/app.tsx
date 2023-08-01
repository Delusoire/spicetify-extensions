export default {}
import { array as a, array, option as o } from "fp-ts"
import { map } from "fp-ts/Array"
import { getOrElse } from "fp-ts/Option"
import { lookup, toUnfoldable } from "fp-ts/Record"
import { constant, flow as f, pipe as p, tupled } from "fp-ts/function"
import {
    createFolder,
    createPlaylist,
    fetchLikedPlaylistsSP,
    fetchPlaylistAPI,
    likePlaylist,
} from "../../shared/api"
import { guard2, guard3 } from "../../shared/fp"
import { SpotifyURI } from "../../shared/util"
import {
    EFolder,
    EPlaylistLiked,
    EPlaylistPersonal,
    EPoF,
    Folder,
    Playlist,
    PoF,
} from "./util"

const extractLikedPlaylistTreeRecur = (leaf: PoF): Promise<EPoF> =>
    guard2<PoF, Playlist, Folder, Promise<EPoF>>([
        [
            (leaf): leaf is Playlist => leaf.type === "playlist",
            async (playlist: Playlist) =>
                playlist.ownedBySelf
                    ? {
                          type: "playlist personal",
                          name: playlist.name,
                          uris: await p(
                              playlist.link,
                              fetchPlaylistAPI,
                              async x =>
                                  p(
                                      await x,
                                      map(f(lookup("uri")<SpotifyURI>)),
                                      a.sequence(o.Applicative),
                                      getOrElse<SpotifyURI[]>(() => []),
                                  ),
                          ),
                      }
                    : {
                          type: "playlist liked",
                          name: playlist.name,
                          uri: playlist.link as SpotifyURI,
                      },
        ],
        [
            (leaf): leaf is Folder => leaf.type === "folder",
            async (folder: Folder) => ({
                type: folder.type,
                name: folder.name,
                uris: folder.rows
                    ? await p(
                          folder.rows,
                          map(extractLikedPlaylistTreeRecur),
                          x => Promise.all(x),
                      )
                    : [],
            }),
        ],
    ])(constant(Promise.resolve({} as EPoF)))(leaf)

const restorePlaylistseRecur = async (leaf: EPoF) => {
    guard3<EPoF, EPlaylistPersonal, EPlaylistLiked, EFolder, any>([
        [
            (leaf): leaf is EPlaylistPersonal =>
                leaf.type === "playlist personal",
            playlist => createPlaylist(playlist.name, playlist.uris),
        ],
        [
            (leaf): leaf is EPlaylistLiked => leaf.type === "playlist liked",
            playlist => likePlaylist(playlist.uri),
        ],
        [
            (leaf): leaf is EFolder => leaf.type === "folder",
            (folder: EFolder) =>
                createFolder(folder.name) &&
                map(restorePlaylistseRecur)(folder.uris),
        ],
    ])(constant(void 0))(leaf)
}

export const backup = async () => {
    const playlistData = await p(
        await fetchLikedPlaylistsSP(),
        extractLikedPlaylistTreeRecur,
    )

    const appData = toUnfoldable(array)(localStorage)

    await Spicetify.Platform.ClipboardAPI.copy(
        JSON.stringify({ playlistData, appData }),
    )
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
