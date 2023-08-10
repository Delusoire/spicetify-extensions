import { array as a, option as o, readonlyArray } from "fp-ts"
import { CONFIG } from "./settings"
import { increment, pipe as p } from "fp-ts/lib/function"

export const STAR_SIZE = 16
export const HALF_STAR_LENGTH = STAR_SIZE / 2

export type StarSVGStops = [SVGStopElement, SVGStopElement]

export const findStarsContainer = (idSuffix: string) => document.getElementById(`stars-${idSuffix}`) as HTMLSpanElement
export const getStarsContainerStars = (starsContainer: HTMLSpanElement) =>
    Array.from(starsContainer.children) as SVGSVGElement[]
export const getStarSVGStops = (star: SVGSVGElement) =>
    Array.from((star?.firstChild?.firstChild as SVGLinearGradientElement).children) as StarSVGStops

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

    return [star, [stop1, stop2]] as const
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

    const starConstruct = a.makeBy(5, increment).map(i => createStar(id, i, size))
    p(
        starConstruct,
        readonlyArray.unzip,
        readonlyArray.lookup(0),
        o.map(star => starsContainer.append(star as unknown as SVGSVGElement)),
    )
    return [starsContainer, starConstruct] as const
}

export const setStarsGradientByRating = (rating: number) => (starsSVGStops: StarSVGStops[]) => {
    const setHalfStarLit = (lit: boolean) => (nth: number) =>
        starsSVGStops[Math.floor(nth / 2)][nth % 2].setAttributeNS(
            null,
            "stop-color",
            `var(--spice-button${lit ? "" : "-disabled"})`,
        )

    p(
        a.makeBy(10, increment),
        a.spanLeft(hi => hi <= rating),
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
