import { fetchLastFMTrack, spotifyApi } from "../../shared/api.ts"
import { _, fp } from "../../shared/deps.ts"
import { progressify } from "../../shared/fp.ts"
import { TrackData, parseWebAPITrack } from "../../shared/parse.ts"

import { getTracksFromAlbum } from "./fetch.ts"
import { CONFIG } from "./settings.ts"
import { SortAction, SortActionProp, joinByUri } from "./util.ts"

const { URI } = Spicetify

const fillTracksFromWebAPI = async (tracks: TrackData[]) => {
    const ids = tracks.map(track => URI.fromString(track.uri)!.id!)
    const fetchedTracks = (await spotifyApi.tracks.get(ids)).map(parseWebAPITrack)
    return joinByUri(tracks, fetchedTracks)
}

const fillTracksFromAlbumTracks = async (tracks: TrackData[]) => {
    const tracksByAlbumUri = Object.groupBy(tracks, track => track.albumUri)
    const passes = Object.keys(tracksByAlbumUri).length
    const fn = progressify(async (tracks: TrackData[], albumUri: string) => {
        const albumTracks = await getTracksFromAlbum(albumUri)
        return _.intersectionBy(tracks, albumTracks, track => track.uri)
    }, passes)

    const albumsTracks = await Promise.all(Object.values(_.mapValues(tracksByAlbumUri, fn)))
    return albumsTracks.flat()
}

export const fillTracksFromSpotify = (propName: SortAction) => async (tracks: TrackData[]) => {
    const tracksMissing = tracks.filter(track => track[SortActionProp[propName]] == null)
    const tracksPopulater = _.cond([
        [fp.startsWith(SortAction.SPOTIFY_PLAYCOUNT), () => fillTracksFromAlbumTracks],
        [_.stubTrue, () => fillTracksFromWebAPI],
    ])(propName)
    const filledTracks = await tracksPopulater(tracksMissing)
    return joinByUri(tracks, filledTracks)
}

const fillTrackFromLastFM = async (track: TrackData) => {
    const lastfmTrack = await fetchLastFMTrack(CONFIG.LFMApiKey, track.artistName, track.name, CONFIG.lastFmUsername)
    track.lastfmPlaycount = Number(lastfmTrack.listeners)
    track.scrobbles = Number(lastfmTrack.playcount)
    track.personalScrobbles = Number(lastfmTrack.userplaycount)
    return track
}

export const fillTracksFromLastFM = (tracks: TrackData[]) => {
    const fn = progressify(fillTrackFromLastFM, tracks.length)
    return Promise.all(tracks.map(fn))
}