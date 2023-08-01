export type SpotifyID = string

export type SpotifyURI = string

export const enum SpotifyURIType {
    TRACK = "spotify:track",
    ALBUM = "spotify:album",
    ARTIST = "spotify:artist",
    PLAYLIST = "spotify:playlist",
}

export const parseUri = (uri: SpotifyURI) =>
    uri.match(
        /^(?<type>spotify:(?:artist|track|album|playlist))(?:_v2)?:(?<id>[a-zA-Z0-9_]{22})$/,
    )?.groups as {
        type: SpotifyURIType
        id: SpotifyID
    }

export const normalizeStr = (str: string) =>
    str
        .replace(/\(.*\)/g, "")
        .replace(/\[.*\]/g, "")
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
