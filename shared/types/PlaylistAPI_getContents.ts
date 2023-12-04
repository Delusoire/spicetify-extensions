export interface PlaylistAPI_getContents_res {
    items: Item[]
    offset: number
    limit: number
    totalLength: number
}

interface Item {
    uid: string
    playIndex: null
    addedAt: string
    addedBy: AddedBy
    formatListAttributes: FormatListAttributes
    type: ItemType
    uri: string
    name: string
    album: Album
    artists: Artist[]
    discNumber: number
    trackNumber: number
    duration: Duration
    isExplicit: boolean
    isLocal: boolean
    isPlayable: boolean
    is19PlusOnly: boolean
}

interface AddedBy {
    type: AddedByType
    uri: URI
    username: Username
    displayName: DisplayName
    images: Image[]
}

enum DisplayName {
    Spotify = "Spotify",
}

interface Image {
    url: string
    label: Label
}

enum Label {
    Large = "large",
    Small = "small",
    Standard = "standard",
    Xlarge = "xlarge",
}

enum AddedByType {
    User = "user",
}

enum URI {
    SpotifyUserSpotify = "spotify:user:spotify",
}

enum Username {
    Spotify = "spotify",
}

interface Album {
    type: AlbumType
    uri: string
    name: string
    artist: Artist
    images: Image[]
}

interface Artist {
    type: ArtistType
    uri: string
    name: string
}

enum ArtistType {
    Artist = "artist",
}

enum AlbumType {
    Album = "album",
}

interface Duration {
    milliseconds: number
}

interface FormatListAttributes {
    "shuffle.average_position": string
    decision_id: DecisionID
}

enum DecisionID {
    SSP060Bb0852303F98D02Cbec1B7D0524C2A46E = "ssp|060bb0852303f98d02cbec1b7d0524c2a46e",
}

enum ItemType {
    Track = "track",
}
