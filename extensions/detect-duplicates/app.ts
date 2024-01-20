import { onTrackListMutationListeners } from "../../shared/listeners.ts"

import Dexie, { Table } from "https://esm.sh/dexie"

interface IsrcObject {
    isrc: string
    uri: string
}

const db = new (class extends Dexie {
    webTracks!: Table<Track>
    isrcs!: Table<IsrcObject>

    constructor() {
        super("library-data")
        this.version(1).stores({
            webTracks: "&uri",
            isrcs: "&isrc, uri",
        })
    }
})()

import { searchTracks } from "../../shared/GraphQL/searchTracks.ts"
import { spotifyApi } from "../../shared/api.ts"
import { chunkify50 } from "../../shared/fp.ts"
import { Track } from "https://esm.sh/v135/@fostertheweb/spotify-web-api-ts-sdk@1.2.1/dist/mjs/types.js"

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
    const tracks = await db.webTracks.bulkGet(uris)
    const missedTracks = tracks.reduce((missed, track, i) => (track || missed.push(i), missed), [] as number[])

    if (missedTracks.length) {
        const missedIds = missedTracks.map(i => URI.fromString(uris[i]).id!)
        const fillerTracks = await chunkify50(is => spotifyApi.tracks.get(is))(missedIds)
        missedTracks.forEach((i, j) => {
            tracks[i] = fillerTracks[j]
        })
        db.webTracks.bulkAdd(fillerTracks)
    }

    return tracks.map(track => track!.external_ids.isrc)
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
