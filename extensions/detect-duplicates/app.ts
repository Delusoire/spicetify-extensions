import { onTrackListMutationListeners } from "../../shared/listeners.ts"

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

export const getMainUrisForIsrcs = async (isrcs: string[]) => {
    const tracks = (await db.isrcs.bulkGet(isrcs)).map((track, i) => track ?? ({ isrc: isrcs[i] } as IsrcObject))
    const missedTracks = tracks.filter(track => !track.isrc)

    if (missedTracks.length) {
        const missedIsrcs = missedTracks.map(track => track.isrc)
        const results = await Promise.all(missedIsrcs.map(isrc => searchTracks(`isrc:${isrc}`)))
        const uris = results.map(results => results[0].item.data.uri)
        missedTracks.forEach((missedTrack, i) => {
            missedTrack.uri = uris[i]
        })
        db.isrcs.bulkAdd(missedTracks)
    }

    return tracks.map(track => track.uri)
}

export const getISRCsForUris = async (uris: string[]) => {
    const tracks = (await db.tracks.bulkGet(uris)).map((track, i) => track ?? ({ uri: uris[i] } as TrackObject))
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
        db.tracks.bulkAdd(missedTracks)
    }

    return tracks.map(track => track.isrc)
}

const greyOutTrack = (track: HTMLDivElement) => {
    track.style.backgroundColor = "gray"
    track.style.opacity = "0.3"
}

onTrackListMutationListeners.push(async (_, tracks) => {
    const uris = tracks.map(track => track.props.uri)
    const isrcs = await getISRCsForUris(uris)
    const isrcUris = await getMainUrisForIsrcs(isrcs)
    tracks.map((track, i) => uris[i] === isrcUris[i] || greyOutTrack(track))
})
