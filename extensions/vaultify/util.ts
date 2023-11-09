import { SpotifyURI } from "../../shared/util.ts"

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
