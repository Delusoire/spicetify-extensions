export type SpotifyID = string
export type SpotifyURI = string

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
