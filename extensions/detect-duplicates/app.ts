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
import { _ } from "../../shared/deps.ts"

const { URI } = Spicetify

export const getMainUrisForIsrcs = async (isrcs: string[]) => {
    const tracks = await db.isrcs.bulkGet(isrcs)
    const missedTracks = tracks.reduce((missed, track, i) => {
        track || missed.push(i)
        return missed
    }, [] as number[])

    if (missedTracks.length) {
        const missedIsrcs = missedTracks.map(i => isrcs[i])
        const resultsIsrcs = await Promise.allSettled(missedIsrcs.map(isrc => searchTracks(`isrc:${isrc}`, 0, 1)))
        const filledTracks = _.compact(
            resultsIsrcs.map((resultsIsrc, i) => {
                const isrc = isrcs[i]
                if (resultsIsrc.status === "fulfilled") {
                    const uri = resultsIsrc.value[0]?.item.data.uri
                    if (!uri) {
                        console.error("Couldn't get matching track for isrc:", isrc)
                        return
                    }
                    return { isrc, uri }
                }
                console.error("Failed searching track for isrc:", isrc)
            }),
        )
        db.isrcs.bulkAdd(filledTracks)
        missedTracks.forEach((missedTrack, i) => {
            tracks[missedTrack] = filledTracks[i]
        })
    }

    return tracks.map(track => track?.uri)
}

export const getISRCsForUris = async (uris: string[]) => {
    const tracks = await db.webTracks.bulkGet(uris)
    const missedTracks = tracks.reduce((missed, track, i) => {
        track || missed.push(i)
        return missed
    }, [] as number[])

    if (missedTracks.length) {
        const missedIds = _.compact(missedTracks.map(i => URI.fromString(uris[i]).id))
        const filledTracks = await chunkify50(is => spotifyApi.tracks.get(is))(missedIds)
        db.webTracks.bulkAdd(filledTracks)
        missedTracks.forEach((missedTrack, i) => {
            tracks[missedTrack] = filledTracks[i]
        })
    }

    return tracks.map(track => (track as Track).external_ids.isrc)
}

const greyOutTrack = (track: HTMLDivElement) => {
    track.style.backgroundColor = "gray"
    track.style.opacity = "0.3"
}

onTrackListMutationListeners.push(async (_, tracks) => {
    const uris = tracks.map(track => track.props.uri)
    const isrcs = await getISRCsForUris(uris)
    const isrcUris = await getMainUrisForIsrcs(isrcs)
    tracks.map((track, i) => {
        const isrcUri = isrcUris[i]
        if (isrcUri && uris[i] !== isrcUri) {
            greyOutTrack(track)
        }
    })
})
