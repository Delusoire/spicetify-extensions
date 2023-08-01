export type SpotifyID = string
export type SpotifyURI = string

export type PoF = Playlist | Folder

export interface Playlist {
    type: "playlist"
    name: string
    ownedBySelf: boolean
    link: SpotifyURI
}

export interface Folder {
    type: "folder"
    name: string
    rows: PoF[]
}

export type EPoF = EPlaylistPersonal | EPlaylistLiked | EFolder

export interface EPlaylistPersonal {
    type: "playlist personal"
    name: string
    uris: SpotifyURI[]
}

export interface EPlaylistLiked {
    type: "playlist liked"
    name: string
    uri: SpotifyURI
}

export interface EFolder {
    type: "folder"
    name: string
    uris: EPoF[]
}
