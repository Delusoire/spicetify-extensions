import { Track } from "https://esm.sh/v135/@fostertheweb/spotify-web-api-ts-sdk/dist/mjs/types.js"

import { searchGQL } from "../../shared/GraphQL/searchModalResults.ts"
import { spotifyApi } from "../../shared/api.ts"
import { chunkify50 } from "../../shared/fp.ts"

const { URI } = Spicetify

const SEP = ":"
const LS_PREFIX = ["extensions", "detect-duplicates"]
const LS_KEY_INDEX = LS_PREFIX.join(SEP).length + 1

const uriToISRC = new Map(
    Object.values<[string, string]>(localStorage)
        .filter(([key]) => key.startsWith(LS_PREFIX.join(SEP)))
        .flatMap(([key, value]) => {
            const isrc = key.slice(LS_KEY_INDEX)
            const uris = JSON.parse(value) as string[]
            return uris.map(uri => [uri, isrc])
        }),
)

const getLSKey = (isrc: string) => [...LS_PREFIX, isrc].join(SEP)

const getISRCUris = (isrc: string) => {
    const key = getLSKey(isrc)
    const urisAsJson = localStorage.getItem(key)
    return urisAsJson ? (JSON.parse(urisAsJson) as string[]) : null
}

const setISRCUris = async (isrc: string, uris: string[]) => {
    const getTrackReleaseDate = (a: Track) => new Date(a.album.release_date)

    const key = getLSKey(isrc)
    const ids = uris.map(uri => URI.fromString(uri)!.id!)
    const tracks = await spotifyApi.tracks.get(ids)
    //@ts-expect-error: ts dumb, ts can't substract dates
    const sortedTracks = tracks.sort((a, b) => getTrackReleaseDate(b) - getTrackReleaseDate(a))
    const sortedUris = sortedTracks.map(track => track.uri)
    const value = JSON.stringify(sortedUris)
    localStorage.setItem(key, value)
    return sortedUris
}

export const getUrisFromISRC = async (isrc: string) => {
    const cachedUris = getISRCUris(isrc)
    if (!cachedUris) {
        const results = await searchGQL(`isrc:${isrc}`)
        const uris = results.map(i => i.item.data.uri)
        return await setISRCUris(isrc, uris)
    }
    return cachedUris
}

export const getISRCsForUris = async (uris: string[]) => {
    const indicesForCacheMiss = new Array<number>()
    const isrcs = uris.map((uri, i) => (uriToISRC.has(uri) ? uriToISRC.get(uri) : void indicesForCacheMiss.push(i)))

    const urisForCacheMiss = indicesForCacheMiss.map(i => uris[i])
    const idsForCacheMiss = urisForCacheMiss.map(uri => URI.fromString(uri)!.id!)
    const tracksForCacheMiss = await chunkify50(spotifyApi.tracks.get)(idsForCacheMiss)
    const isrcsForCacheMiss = tracksForCacheMiss.map(track => track.external_ids.isrc)

    isrcsForCacheMiss.forEach((isrc, i) => (isrcs[indicesForCacheMiss[i]] = isrc))

    return isrcs as string[]
}

export const isUriOutdatedDuplicate = async (uri: string) => {
    const isrc = uriToISRC.get(uri)
    if (!isrc) return null // cache miss, shouldn't happen as we have made a pass to load the cache
    const [mostRecentUri] = await getUrisFromISRC(isrc)
    return uri !== mostRecentUri
}
