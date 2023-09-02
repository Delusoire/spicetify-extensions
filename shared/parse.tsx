import { SpotApiTrack, fetchGQLAlbumRes, fetchPlatArtistLikedTracksRes, fetchWebPlaylistRes } from "./api"
import { SpotifyURI } from "./util"

export type TrackData = {
    albumName?: string
    albumUri: SpotifyURI
    artistName: string
    artistUri: SpotifyURI
    durationMilis: number
    name: string
    playcount?: number
    popularity?: number
    releaseDate?: number
    uri: SpotifyURI
    lastfmPlaycount?: number
    scrobbles?: number
    personalScrobbles?: number
}

export type UnparsedTrack = any
export type TrackParser = (track: UnparsedTrack) => TrackData
export type TracksPopulater = (tracks: TrackData[]) => Promise<TrackData[]>

export const parseTrackFromAlbum = ({ track }: fetchGQLAlbumRes["tracks"]["items"][0]) => ({
    albumName: "", // gets filled in later
    albumUri: "", // gets filled in later
    artistName: track.artists.items[0].profile.name,
    artistUri: track.artists.items[0].uri,
    durationMilis: track.duration.totalMilliseconds,
    name: track.name,
    playcount: Number(track.playcount),
    popularity: undefined,
    releaseDate: -1, // gets filled in later
    uri: track.uri,
})

export const parseTopTrackFromArtist = (track: UnparsedTrack) => ({
    albumName: undefined,
    albumUri: track.albumOfTrack.uri as SpotifyURI,
    artistName: track.artists.items[0].profile.name as string,
    artistUri: track.artists.items[0].uri as SpotifyURI,
    durationMilis: track.duration.totalMilliseconds as number,
    name: track.name as string,
    playcount: Number(track.playcount) as number,
    popularity: undefined,
    releaseDate: undefined,
    uri: track.uri as SpotifyURI,
})

export const parsePlatTrackFromArtistLikedTracks = (track: fetchPlatArtistLikedTracksRes[0]) => ({
    albumName: track.album.name,
    albumUri: track.album.uri,
    artistName: track.artists[0].name,
    artistUri: track.artists[0].uri,
    durationMilis: track.duration.milliseconds,
    name: track.name,
    playcount: undefined,
    popularity: undefined,
    releaseDate: undefined,
    uri: track.uri,
})

// NOT USED
// export const parseTrackFromPlaylistSP = (track: UnparsedTrack) => ({
//     albumName: track.album.name,
//     albumUri: track.album.link,
//     artistName: track.artists[0].name,
//     artistUri: track.artists[0].link,
//     durationMilis: track.length * 1000,
//     name: track.name,
//     playcount: undefined,
//     popularity: track.popularity,
//     releaseDate: undefined,
//     uri: track.link,
// })

export const parseAPITrackFromPlaylist = (track: fetchWebPlaylistRes[0]) => ({
    albumName: track.album.name,
    albumUri: track.album.uri,
    artistName: track.artists[0].name,
    artistUri: track.artists[0].uri,
    durationMilis: track.duration.milliseconds,
    name: track.name,
    playcount: undefined,
    popularity: undefined,
    releaseDate: undefined,
    uid: track.uid,
    uri: track.uri,
})

export const parseAPITrackFromSpotify = (track: SpotApiTrack) => ({
    albumName: track.album.name,
    albumUri: track.album.uri,
    artistName: track.artists[0].name,
    artistUri: track.artists[0].uri,
    durationMilis: track.duration_ms,
    name: track.name,
    playcount: undefined,
    popularity: track.popularity,
    releaseDate: new Date(track.album.release_date).getTime(),
    uri: track.uri,
})

export const parsePlatLikedTracks = (track: UnparsedTrack) => ({
    albumName: track.album.name as string,
    albumUri: track.album.uri as SpotifyURI,
    artistName: track.artists[0].name as string,
    artistUri: track.artists[0].uri as SpotifyURI,
    durationMilis: track.duration.milliseconds as number,
    name: track.name as string,
    playcount: undefined,
    popularity: undefined,
    releaseDate: undefined,
    uri: track.uri as SpotifyURI,
})
