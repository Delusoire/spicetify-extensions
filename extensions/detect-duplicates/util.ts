import Dexie, { Table } from "https://esm.sh/dexie"

interface TrackObject {
    uri: string
    albumReleaseDate: string | undefined
    isrc: string
    popularity: number | undefined
}

const db = new (class extends Dexie {
    tracks!: Table<TrackObject>

    constructor() {
        super("library-data")
        this.version(1).stores({
            tracks: "&uri, albumReleaseDate, isrc, popularity",
        })
    }
})()

import { searchModalResults } from "../../shared/GraphQL/searchModalResults.ts"
import { spotifyApi } from "../../shared/api.ts"
import { chunkify50 } from "../../shared/fp.ts"

const { URI } = Spicetify

export const getUrisFromISRC = async (isrc: string) => {
    let tracks = await db.tracks.where({ isrc }).toArray()

    if (!tracks) {
        try {
            const results = await searchModalResults(`isrc:${isrc}`)
            const ts = results.map(i => i.item.data)
            tracks = ts.map(t => ({ uri: t.uri, albumReleaseDate: undefined, isrc, popularity: undefined }))
            db.tracks.bulkPut(tracks)
            return tracks.map(track => track.uri)
        } catch (_) {
            return null
        }
    }

    {
        const sortHeuristic = (a: TrackObject, b: TrackObject) => {
            const getTrackReleaseDate = (a: TrackObject) => new Date(a.albumReleaseDate!)
            //@ts-expect-error: ts dumb, ts can't substract dates
            const deltaTime = getTrackReleaseDate(b) - getTrackReleaseDate(a)
            return deltaTime || b.popularity! - a.popularity! || 0
        }
        return tracks.sort(sortHeuristic).map(track => track.uri)
    }
}

export const getISRCsForUris = async (uris: string[]) => {
    const tracks = (await db.tracks.bulkGet(uris)).map(
        (track, i) => track ?? { uri: uris[i], isrc: undefined, albumReleaseDate: undefined, popularity: undefined },
    )
    const missedTracks = tracks.filter(track => !track.isrc)
    if (missedTracks.length) {
        const missedIds = missedTracks.map(track => URI.fromString(track.uri).id!)
        const fillerTracks = await chunkify50(is => spotifyApi.tracks.get(is))(missedIds)
        missedTracks.forEach((missedTrack, i) => {
            const fillerTrack = fillerTracks[i]
            missedTrack.albumReleaseDate = fillerTrack.album.release_date
            missedTrack.isrc = fillerTrack.external_ids.isrc
            missedTrack.popularity = fillerTrack.popularity
        })
        db.tracks.bulkAdd(missedTracks as TrackObject[])
    }

    return tracks.map(track => track.isrc)
}

export const isUriOutdatedDuplicate = async (uri: string) => {
    const track = await db.tracks.get(uri)

    if (!track?.isrc) return null // cache miss, should never happen as we have made a pass to load the cache
    const uris = await getUrisFromISRC(track.isrc)
    if (!uris) return null
    return uri !== uris[0]
}
