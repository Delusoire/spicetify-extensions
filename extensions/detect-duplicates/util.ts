import Dexie, { Table } from "https://esm.sh/dexie"

interface TrackObject {
    uri: string
    albumReleaseDate: string | undefined
    isrc: string
    popularity: number | undefined
}

interface IsrcObject {
    isrc: string
    uri: string
}

const db = new (class extends Dexie {
    tracks!: Table<TrackObject>
    isrcs!: Table<IsrcObject>

    constructor() {
        super("library-data")
        this.version(1).stores({
            tracks: "&uri, albumReleaseDate, isrc, popularity",
            isrcs: "&isrc, uri",
        })
    }
})()

import { searchTracks } from "../../shared/GraphQL/searchTracks.ts"
import { spotifyApi } from "../../shared/api.ts"
import { chunkify50 } from "../../shared/fp.ts"

const { URI } = Spicetify

export const getFirstUriFromISRC = async (isrc: string) => {
    const track = await db.isrcs.get(isrc)

    if (!track) {
        try {
            const results = await searchTracks(`isrc:${isrc}`)
            const topResult = results[0]
            const { uri } = topResult.item.data
            db.isrcs.put({ isrc, uri })
            return uri
        } catch (_) {
            return null
        }
    }

    return track.uri

    // {
    //     const sortHeuristic = (a: TrackObject, b: TrackObject) => {
    //         const getTrackReleaseDate = (a: TrackObject) => new Date(a.albumReleaseDate!)
    //         //@ts-expect-error: ts dumb, ts can't substract dates
    //         const deltaTime = getTrackReleaseDate(b) - getTrackReleaseDate(a)
    //         return deltaTime || b.popularity! - a.popularity! || 0
    //     }
    //     return tracks.sort(sortHeuristic).map(track => track.uri)
    // }
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
    const candidate = await getFirstUriFromISRC(track.isrc)
    if (!candidate) return null
    return uri !== candidate
}
