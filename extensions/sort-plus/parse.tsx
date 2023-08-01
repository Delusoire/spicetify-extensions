import { fetchAlbumGQLRes } from "./api"
import { SpotifyURI } from "./util"

export type TrackData = {
    albumName?: string
    albumUri?: SpotifyURI
    artistName: string
    artistUri: SpotifyURI
    durationMilis: number
    name: string
    playcount?: number
    popularity?: number
    releaseDate?: string
    uri: SpotifyURI
    lastfmPlaycount?: number
    scrobbles?: number
    personalScrobbles?: number
}

export type UnparsedTrack = any
export type TrackParser = (track: UnparsedTrack) => TrackData
export type TracksPopulater = (tracks: TrackData[]) => Promise<TrackData[]>

export type fetchAlbumGQLResTrack = fetchAlbumGQLRes["tracks"]["items"][0]
export const parseTrackFromAlbum = ({ track }: fetchAlbumGQLResTrack) =>
    ({
        albumName: undefined, // gets filled in later
        albumUri: undefined, // gets filled in later
        artistName: track.artists.items[0].profile.name,
        artistUri: track.artists.items[0].uri,
        durationMilis: track.duration.totalMilliseconds,
        name: track.name,
        playcount: Number(track.playcount),
        popularity: undefined,
        releaseDate: undefined, // gets filled in later
        uri: track.uri,
    } as TrackData)

export const parseTopTrackFromArtist: TrackParser = track => ({
    albumUri: track.albumOfTrack.uri,
    artistName: track.artists.items[0].profile.name,
    artistUri: track.artists.items[0].uri,
    durationMilis: track.duration.totalMilliseconds,
    name: track.name,
    playcount: Number(track.playcount),
    popularity: undefined,
    releaseDate: undefined,
    uri: track.uri,
})

export const parseTrackFromArtistLikedTracksSP: TrackParser = track => ({
    albumName: track.album.name,
    albumUri: track.album.link,
    artistName: track.artists[0].name,
    artistUri: track.artists[0].link,
    durationMilis: track.length * 1000,
    name: track.name,
    playcount: undefined,
    popularity: track.popularity,
    releaseDate: track.album.year,
    uri: track.link,
})

export const parseTrackFromPlaylistSP: TrackParser = track => ({
    albumName: track.album.name,
    albumUri: track.album.link,
    artistName: track.artists[0].name,
    artistUri: track.artists[0].link,
    durationMilis: track.length * 1000,
    name: track.name,
    playcount: undefined,
    popularity: track.popularity,
    releaseDate: undefined,
    uri: track.link,
})

export const parseTrackFromPlaylistAPI: TrackParser = track => ({
    albumName: track.album.name,
    albumUri: track.album.uri,
    artistName: track.artists[0].name,
    artistUri: track.artists[0].uri,
    durationMilis: track.duration.milliSeconds,
    name: track.name,
    playcount: undefined,
    popularity: undefined,
    releaseDate: undefined,
    uri: track.uri,
})

export const parseTrackFromSpotifyAPI: TrackParser = track => ({
    albumName: track.album.name,
    albumUri: track.album.uri,
    artistName: track.artists[0].name,
    artistUri: track.artists[0].uri,
    durationMilis: track.duration_ms,
    name: track.name,
    playcount: undefined,
    popularity: track.popularity,
    releaseDate: track.album.releaseDate,
    uri: track.uri,
})
