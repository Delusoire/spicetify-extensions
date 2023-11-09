import { array as ar, readonlyArray, record, function as f, nonEmptyArray as nea } from "https://esm.sh/fp-ts"
import { fetchPlatFolder, fetchPlatPlaylistContents } from "../../shared/api.ts"
import { pMchain } from "../../shared/fp.ts"
import { SpotifyURI } from "../../shared/util.ts"
import { CONFIG } from "./settings.ts"
import {
    StarStops,
    calculateRatingFromMouseEvent,
    createStars,
    onStarClick,
    setStarsGradientByRating,
} from "./stars.ts"
import { starsN2S } from "./util.ts"

const w = (n: number) => Math.exp(n)
export const aggregateRatings = (uris: SpotifyURI[]) =>
    f.pipe(
        uris,
        ar.map(uri => tracksRatings[uri]),
        ar.filter(Boolean),
        ar.map(r => [r, w(r)] as const),
        readonlyArray.unzip<number, number>,
        ([rs, wrs]) =>
            readonlyArray.reduceWithIndex(0, (i, s, r: number) => s + r * wrs[i])(rs) /
                readonlyArray.reduce(0, (s, wr: number) => s + wr)(wrs) || 0,
    )

export const addRatingsListenersToStars = (
    [starsContainer, starsConstructs]: ReturnType<typeof createStars>,
    getTrackUri: () => SpotifyURI,
) => {
    const [starsElements, starsSVGStops] = f.pipe(starsConstructs, readonlyArray.unzip) as [
        SVGSVGElement[],
        StarStops[],
    ]

    starsContainer.addEventListener("mouseout", () =>
        setStarsGradientByRating(tracksRatings[getTrackUri()] ?? 0)(starsSVGStops),
    )

    f.pipe(
        starsElements,
        readonlyArray.mapWithIndex((nth, starElement) => {
            starElement.addEventListener(
                "mousemove",
                f.flow(
                    calculateRatingFromMouseEvent(starElement, nth),
                    f.flip(setStarsGradientByRating)(starsSVGStops),
                ),
            )

            starElement.addEventListener("click", onStarClick(nth, starsElements[nth], getTrackUri))
        }),
    )
}

export const loadRatings = async () => {
    const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri)

    const starsS2Narray = f.pipe(
        nea.range(0, 10),
        ar.map(s => [starsN2S(s), s] as [string, number]),
        record.fromEntries,
    )

    playlistUris = f.pipe(
        ratingsFolder!.items!,
        ar.map(p => [p.type, p.uri, starsS2Narray[p.name!]] as [string, SpotifyURI, number]),
        ar.reduce(
            [] as SpotifyURI[],
            (acc, [type, uri, starsN]) => (type === "playlist" && starsN ? (acc[starsN] = uri) : [], acc),
        ),
    )

    // @ts-ignore
    globalThis.tracksRatings = tracksRatings = await f.pipe(
        playlistUris,
        ar.map(fetchPlatPlaylistContents),
        ps => Promise.all(ps), // Promise.all flips empty to undefined
        pMchain(ar.map(tracks => tracks ?? [])),
        pMchain(ar.map(ar.map(t => t.uri))),
        pMchain(ar.flatMap((trackUris, rating) => trackUris.map(trackUri => [trackUri, rating] as const))),
        pMchain(
            ar.reduce({} as Record<string, number>, (acc, [trackUri, rating]) =>
                Object.assign(acc, {
                    [trackUri]: Math.max(rating, acc[trackUri] ?? 0),
                }),
            ),
        ),
    )
}

export let playlistUris: SpotifyURI[] = []
export let tracksRatings: Record<SpotifyURI, number> = {}
