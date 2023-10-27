import { array as a, record } from "fp-ts"
import { range } from "fp-ts/NonEmptyArray"
import { pipe as p } from "fp-ts/function"
import { fetchPlatFolder, fetchPlatPlaylistContents } from "../../shared/api"
import { pMchain } from "../../shared/fp"
import { SpotifyURI } from "../../shared/util"
import { CONFIG } from "./settings"

export const loadRatings = async () => {
    const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri)

    playlistUris = p(
        ratingsFolder!.items!,
        a.map(p => [p.uri, Number(p.name!)] as [SpotifyURI, number]),
        a.reduce([] as SpotifyURI[], (uris, [uri, rating]) => ((uris[rating] = uri), uris)),
    )

    console.log(playlistUris)

    debugger

    // @ts-ignore
    globalThis.tracksRatings = tracksRatings = await p(
        playlistUris,
        a.map(fetchPlatPlaylistContents),
        ps => Promise.all(ps), // Promise.all flips empty to undefined
        pMchain(a.map(tracks => tracks ?? [])),
        pMchain(a.map(a.map(t => t.uri))),
        pMchain(a.flatMap((trackUris, rating) => trackUris.map(trackUri => [trackUri, rating] as const))),
        pMchain(
            a.reduce({} as Record<string, number>, (acc, [trackUri, rating]) =>
                Object.assign(acc, {
                    [trackUri]: Math.max(rating, acc[trackUri] ?? 0),
                }),
            ),
        ),
    )
}

export let playlistUris: SpotifyURI[] = []
export let tracksRatings: Record<SpotifyURI, number> = {}
