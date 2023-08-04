export type SpotifyID = string
export type SpotifyURI = string

export type SPoF = SPlaylist | SFolder

export interface SPlaylist {
    type: "playlist"
    name: string
    ownedBySelf: boolean
    link: SpotifyURI
}

export interface SFolder {
    type: "folder"
    name: string
    rows: SPoF[]
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
