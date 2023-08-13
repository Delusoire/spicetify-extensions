import { array as a, nonEmptyArray, readonlyArray, record } from "fp-ts"
import { flow as f, flip, pipe as p } from "fp-ts/function"
import { groupBy, range } from "fp-ts/lib/NonEmptyArray"
import { fetchPlatPlaylistContents, movePlatPlaylistTracks } from "../../shared/api"
import { pMchain } from "../../shared/fp"
import { SpotifyLoc, SpotifyURI } from "../../shared/util"
import { StarStops, calculateRatingFromMouseEvent, createStars, onStarClick, setStarsGradientByRating } from "./stars"
import { getRatingsFolder, starsN2S } from "./util"

const w = (n: number) => Math.exp(n)
export const aggregateRatings = (uris: SpotifyURI[]) =>
    p(
        uris,
        a.map(uri => tracksRatings[uri]),
        a.filter(Boolean),
        a.map(r => [r, w(r)] as const),
        readonlyArray.unzip<number, number>,
        ([rs, wrs]) =>
            readonlyArray.reduceWithIndex(0, (i, s, r: number) => s + r * wrs[i])(rs) /
                readonlyArray.reduce(0, (s, wr: number) => s + wr)(wrs) || 0,
    )

export const sortPlaylistByRating = async (playlist: SpotifyURI) => {
    const items = await fetchPlatPlaylistContents(playlist)

    if (items.length === 0) return

    const urisGroupedByRating = p(
        items,
        a.map(t => t.uri),
        groupBy(uri => String(tracksRatings[uri] ?? 0)),
    )

    p(
        nonEmptyArray.range(0, 10),
        a.map(i => urisGroupedByRating[i] ?? []),
        a.reduce(["first" as SpotifyURI], (lastUris, currUris) => {
            if (currUris.length) movePlatPlaylistTracks(playlist, currUris, SpotifyLoc.before(lastUris[0]))
            return currUris
        }),
    )
}

export const addRatingsListenersToStars = (
    [starsContainer, starsConstructs]: ReturnType<typeof createStars>,
    getTrackUri: () => SpotifyURI,
    getHeart: () => HTMLButtonElement,
) => {
    const [starsElements, starsSVGStops] = p(starsConstructs, readonlyArray.unzip) as [SVGSVGElement[], StarStops[]]

    starsContainer.addEventListener("mouseout", () =>
        setStarsGradientByRating(tracksRatings[getTrackUri()] ?? 0)(starsSVGStops),
    )

    p(
        starsElements,
        readonlyArray.mapWithIndex((nth, starElement) => {
            starElement.addEventListener(
                "mousemove",
                f(calculateRatingFromMouseEvent(starElement, nth), flip(setStarsGradientByRating)(starsSVGStops)),
            )

            starElement.addEventListener("click", onStarClick(nth, starsElements[nth], getTrackUri, getHeart))
        }),
    )
}

export const loadRatings = async () => {
    const ratingsFolder = await getRatingsFolder()

    const starsS2Narray = p(
        range(0, 10),
        a.map(s => [starsN2S(s), s] as [string, number]),
        record.fromEntries,
    )

    playlistUris = p(
        ratingsFolder!.items!,
        a.map(p => [p.type, p.uri, starsS2Narray[p.name!]] as [string, SpotifyURI, number]),
        a.reduce(
            [] as SpotifyURI[],
            (acc, [type, uri, starsN]) => (type === "playlist" && starsN ? (acc[starsN] = uri) : [], acc),
        ),
    )

    tracksRatings = await p(
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

    // @ts-ignore
    globalThis.tracksRatings = tracksRatings
}

export let playlistUris: SpotifyURI[] = []
export let tracksRatings: Record<SpotifyURI, number> = {}
