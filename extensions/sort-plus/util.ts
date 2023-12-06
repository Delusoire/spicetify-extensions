import { spotifyApi } from "../../shared/api.ts"
import { TrackData } from "../../shared/parse.ts"

const { URI } = Spicetify

export const SEPARATOR_URI = "spotify:separator"

export enum ERROR {
    LAST_SORTED_QUEUE_EMPTY = "Must sort to queue beforehand",
    LAST_SORTED_QUEUE_NOT_A_PLAYLIST = "Last sorted queue must be a playlist",
}

export type AsyncTracksOperation = (tracks: TrackData[]) => Promise<TrackData[]> | TrackData[]

export enum SortAction {
    SPOTIFY_PLAYCOUNT = "Spotify - Play Count",
    SPOTIFY_POPULARITY = "Spotify - Popularity",
    SPOTIFY_RELEASEDATE = "Spotify - Release Date",
    LASTFM_SCROBBLES = "LastFM - Scrobbles",
    LASTFM_PERSONALSCROBBLES = "LastFM - My Scrobbles",
    LASTFM_PLAYCOUNT = "LastFM - Play Count",
}

export enum SortActionIcon {
    "Spotify - Play Count" = "play",
    "Spotify - Popularity" = "heart",
    "Spotify - Release Date" = "list-view",
    "LastFM - Scrobbles" = "volume",
    "LastFM - My Scrobbles" = "artist",
    "LastFM - Play Count" = "subtitles",
}

export enum SortActionProp {
    "Spotify - Play Count" = "playcount",
    "Spotify - Popularity" = "popularity",
    "Spotify - Release Date" = "releaseDate",
    "LastFM - Scrobbles" = "scrobbles",
    "LastFM - My Scrobbles" = "personalScrobbles",
    "LastFM - Play Count" = "lastfmPlaycount",
}

export const joinByUri = (...trackss: TrackData[][]) => {
    const tracks = [...trackss].flat()
    const uriTrackPairs = tracks.map(track => [track.uri, track] as const)
    return Array.from(new Map(uriTrackPairs).values())
}

export const URI_isLikedTracks = (uri: string) => {
    const uriObj = URI.fromString(uri)
    return uriObj.type === URI.Type.COLLECTION && uriObj.category === "tracks"
}

export const getNameFromUri = async (uri: Spicetify.URI) => {
    switch (uri.type) {
        case URI.Type.ALBUM: {
            const album = await spotifyApi.albums.get(uri.id!)
            return album.name
        }

        case URI.Type.ARTIST: {
            const artist = await spotifyApi.artists.get(uri.id!)
            return artist.name
        }

        case URI.Type.COLLECTION:
            if (uri.category === "tracks") return "Liked Tracks"
            else break

        case URI.Type.PLAYLIST:
        case URI.Type.PLAYLIST_V2: {
            const playlist = await spotifyApi.playlists.getPlaylist(uri.id!)
            return playlist.name
        }
    }
}
