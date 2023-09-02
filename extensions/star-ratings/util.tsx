import { array as a, taskOption } from "fp-ts"
import { flow } from "fp-ts/function"
import { fetchPlatFolder } from "../../shared/api"
import { CONFIG } from "./settings"
import { StarStops, setStarsGradientByRating } from "./stars"

export const RATINGS_FOLDER_NAME = "Ratings"

export const STAR_SIZE = 16
export const HALF_STAR_LENGTH = STAR_SIZE / 2

export const starsS2N = (S: string) => Number(S) * 2
export const starsN2S = (N: number) => (N / 2).toFixed(1)

export const getStarsFromStarsContainer = (starsElement: HTMLSpanElement) =>
    Array.from(starsElement.children) as SVGSVGElement[]
export const getStarStopsFromStar = (star: SVGSVGElement) =>
    Array.from(star.firstChild!.firstChild!.childNodes) as StarStops
export const getStarsStopsFromStarsContainer = flow(getStarsFromStarsContainer, a.map(getStarStopsFromStar))

export const setStarsGradientFromContainerByRating = (rating: number) =>
    flow(getStarsStopsFromStarsContainer, setStarsGradientByRating(rating))

export const getStarsContainer = (idSuffix: string) => document.getElementById(`stars-${idSuffix}`) as HTMLSpanElement
export const getStars = flow(getStarsContainer, getStarsFromStarsContainer)
export const getStarsStops = flow(getStarsContainer, getStarsStopsFromStarsContainer)

export const getTrackLists = () => Array.from(document.querySelectorAll<HTMLDivElement>(".main-trackList-indexable"))
export const getTrackListHeader = (trackList: HTMLDivElement) =>
    trackList.querySelector(".main-trackList-trackListHeader")?.firstChild as HTMLDivElement
export const getTrackListTracks = (trackList: HTMLDivElement) =>
    Array.from(trackList.querySelectorAll<HTMLDivElement>("div.main-trackList-trackListRow"))

export const getLastColIndex = (parent: HTMLElement) => {
    const lastCol = parent.querySelector<HTMLDivElement>("div.main-trackList-rowSectionEnd")!
    const lastColIndex = Number(lastCol.getAttribute("aria-colindex"))
    return [lastColIndex, lastCol] as [number, HTMLDivElement]
}

export const getFirstPlus = (parent: HTMLElement) =>
    parent.querySelector<HTMLButtonElement>(
        ".Button-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle, .Button-textBrightAccent-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle",
    )!

export const getTrackListTrackUri = (track: HTMLDivElement) => (
    (track = Object.values(track)[0].child.child.child.child),
    (track as any).pendingProps.uri ?? (track as any).child.pendingProps.uri
)

export const getRatingsFolder = () =>
    flow(
        () => () => fetchPlatFolder(CONFIG.ratingsFolderUri),
        taskOption.tryCatch,
        taskOption.getOrElse(() => fetchPlatFolder),
    )()()
