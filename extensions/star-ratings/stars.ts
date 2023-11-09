import { array as ar, nonEmptyArray, function as f } from "https://esm.sh/fp-ts"
import {
    addPlatPlaylistTracks,
    createPlatPlaylist,
    removeWebPlaylistTracks,
    setPlatPlaylistVisibility,
} from "../../shared/api.ts"
import { SpotifyLoc, SpotifyURI, isLiked, toggleLiked } from "../../shared/util.ts"
import { updateNowPlayingStars } from "./app.ts"
import { playlistUris, tracksRatings } from "./ratings.ts"
import { CONFIG } from "./settings.ts"
import {
    HALF_STAR_LENGTH,
    getStarsContainer,
    setStarsGradientFromContainerByRating,
    starsN2S,
    starsS2N,
} from "./util.ts"

const { URI } = Spicetify

export type StarStops = [SVGStopElement, SVGStopElement]

const createStar = (starsId: string, nth: number, size: number) => {
    const xmlns = "http://www.w3.org/2000/svg"
    const star = document.createElementNS(xmlns, "svg")
    const id = `${starsId}-${nth}`
    star.id = id
    star.style.minHeight = `${size}px`
    star.style.minWidth = `${size}px`
    star.setAttributeNS(null, "width", `${size}px`)
    star.setAttributeNS(null, "height", `${size}px`)
    star.setAttributeNS(null, "viewBox", `0 0 32 32`)

    const defs = document.createElementNS(xmlns, "defs")
    star.append(defs)

    const gradient = document.createElementNS(xmlns, "linearGradient")
    defs.append(gradient)
    gradient.id = `${id}-gradient`

    const stop1 = document.createElementNS(xmlns, "stop")
    gradient.append(stop1)
    stop1.id = `${id}-gradient-left`
    stop1.setAttributeNS(null, "offset", "50%")
    stop1.setAttributeNS(null, "stop-color", "var(--spice-button-disabled)")

    const stop2 = document.createElementNS(xmlns, "stop")
    gradient.append(stop2)
    stop2.id = `${id}-gradient-right`
    stop2.setAttributeNS(null, "offset", "50%")
    stop2.setAttributeNS(null, "stop-color", "var(--spice-button-disabled)")

    const path = document.createElementNS(xmlns, "path")
    star.append(path)
    path.setAttributeNS(null, "fill", `url(#${gradient.id})`)
    path.setAttributeNS(
        null,
        "d",
        "M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118l11.547-1.2L16.026,0.6L20.388,10.918z",
    )

    return [star, [stop1, stop2]] as [SVGElement, StarStops]
}
export const createStars = (idSuffix: string, size: number) => {
    const id = `stars-${idSuffix}`
    const starsContainer = document.createElement("span")
    {
        starsContainer.className = "stars"
        starsContainer.id = id
        starsContainer.style.whiteSpace = "nowrap"
        starsContainer.style.alignItems = "center"
        starsContainer.style.display = "flex"
    }

    const starsConstructs = nonEmptyArray.range(1, 5).map(i => createStar(id, i, size))
    f.pipe(
        starsConstructs,
        ar.unzip,
        ([starElements]) => starElements,
        ar.map(starElement => starsContainer.append(starElement)),
    )
    return [starsContainer, starsConstructs] as [HTMLSpanElement, ReturnType<typeof createStar>[]]
}

export const setStarsGradientByRating = (rating: number) => (starsSVGStops: StarStops[]) => {
    const setHalfStarLit = (lit: boolean) => (nth: number) =>
        starsSVGStops[Math.floor(nth / 2)][nth % 2].setAttributeNS(
            null,
            "stop-color",
            `var(--spice-button${lit ? "" : "-disabled"})`,
        )

    f.pipe(
        nonEmptyArray.range(0, 9),
        ar.spanLeft(hi => hi < rating),
        ({ init, rest }) => {
            init.map(setHalfStarLit(true))
            rest.map(setHalfStarLit(false))
        },
    )
}

export const calculateRatingFromMouseEvent = (starElement: SVGSVGElement, nth: number) => (e: MouseEvent) => {
    const rect = starElement.getBoundingClientRect()
    const leftOffsetFromHeart = e.clientX - rect.left
    const isHalf = CONFIG.halfStarRatings && leftOffsetFromHeart < HALF_STAR_LENGTH
    return 2 * (nth + 1) - Number(isHalf)
}

export const onStarClick =
    (nth: number, starElement: SVGSVGElement, getTrackUri: () => SpotifyURI) => async (e: MouseEvent) => {
        const trackUri = getTrackUri()
        const oldRating = tracksRatings[trackUri]
        let newRating = calculateRatingFromMouseEvent(starElement, nth)(e)

        const heartThreshold = starsS2N(CONFIG.heartThreshold)
        if (heartThreshold) {
            const shouldBeHearted = newRating >= heartThreshold
            const [isHearted] = await isLiked([trackUri])

            if (isHearted !== shouldBeHearted) toggleLiked([trackUri])
        }

        if (oldRating === newRating) newRating = 0

        if (oldRating)
            f.pipe(
                playlistUris.slice(0, oldRating + 1),
                ar.filter(Boolean),
                ar.map(playlistUri => URI.from(playlistUri)!.id!),
                ar.map(playlistId => removeWebPlaylistTracks(playlistId, [trackUri])),
            )

        tracksRatings[trackUri] = newRating

        if (newRating) {
            let playlistUri = playlistUris[newRating]
            if (!playlistUri) {
                playlistUri = await createPlatPlaylist(
                    starsN2S(newRating),
                    SpotifyLoc.after.fromUri(CONFIG.ratingsFolderUri),
                )
                setPlatPlaylistVisibility(playlistUri, false)
                playlistUris[newRating] = playlistUri
            }

            addPlatPlaylistTracks(playlistUri, [trackUri])
        }

        updateNowPlayingStars()
        const trackStarsContainer = getStarsContainer(`${URI.fromString(trackUri)!.id}`)
        if (trackStarsContainer) {
            f.pipe(trackStarsContainer, setStarsGradientFromContainerByRating(newRating))
            trackStarsContainer.style.visibility = newRating ? "visible" : "hidden"
        }
    }