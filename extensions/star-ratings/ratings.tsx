import { array as a, array, nonEmptyArray, readonlyArray, record } from "fp-ts"
import { flip, identity, pipe as p, flow as f } from "fp-ts/function"
import { fetchGQLAlbumRes, fetchPlatPlaylistContents, movePlatPlaylistTracks } from "../../shared/api"
import { SpotifyLoc, SpotifyURI } from "../../shared/util"
import { groupBy } from "fp-ts/lib/NonEmptyArray"
import { tracksRatings } from "./app"
import { StarStops, calculateRatingFromMouseEvent, createStars, onStarClick, setStarsGradientByRating } from "./stars"

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
    const trackUri = getTrackUri()
    const [starsElements, starsSVGStops] = p(starsConstructs, readonlyArray.unzip) as [SVGSVGElement[], StarStops[]]

    starsContainer.addEventListener("mouseout", () =>
        setStarsGradientByRating(tracksRatings[trackUri] ?? 0)(starsSVGStops),
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
