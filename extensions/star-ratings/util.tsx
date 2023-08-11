import { array as a, task, taskOption } from "fp-ts"
import { playlistUris, tracksRatings } from "./app"
import { fetchPlatFolder, fetchPlatPlaylistContents, fetchWebPlaylistRes } from "../../shared/api"
import { flow, pipe as p } from "fp-ts/lib/function"
import { StarStops } from "./stars"
import { CONFIG } from "./settings"

export const starsS2N = (S: string) => Number(S) * 2
export const starsN2S = (N: number) => (N * 2).toFixed(1)

export const getNowPlayingHeart = () =>
    document.querySelector(".main-nowPlayingWidget-nowPlaying .control-button-heart") as HTMLButtonElement | null
export const getGeneralCollectionHeart = () =>
    document.querySelector(".main-actionBar-ActionBar .main-addButton-button") as HTMLButtonElement | null

export const getStarsFromStarsContainer = (starsElement: HTMLSpanElement) =>
    Array.from(starsElement.children) as SVGSVGElement[]
export const getStarStopsFromStar = (star: SVGSVGElement) =>
    Array.from(star.firstChild!.firstChild!.childNodes) as StarStops

export const getStarsContainer = (idSuffix: string) => document.getElementById(`stars-${idSuffix}`) as HTMLSpanElement
export const getStars = flow(getStarsContainer, getStarsFromStarsContainer)
export const getStarsStops = flow(getStars, a.map(getStarStopsFromStar))

export const getTrackLists = () =>
    Array.from(document.querySelectorAll(".main-trackList-indexable")) as HTMLDivElement[]
export const getTrackListHeader = (trackList: HTMLDivElement) => trackList.firstChild as HTMLDivElement
export const getTrackListTracks = (trackList: HTMLDivElement) =>
    Array.from(trackList.lastChild!.childNodes[1].childNodes) as HTMLDivElement[]

export const getLastColIndex = (parent: HTMLElement) => {
    const lastCol = parent.querySelector(".main-trackList-rowSectionEnd") as HTMLDivElement
    const lastColIndex = Number(lastCol.getAttribute("aria-colindex"))
    return [lastColIndex, lastCol] as [number, HTMLDivElement]
}

export const getFirstHeart = (parent: HTMLElement) =>
    parent.getElementsByClassName("main-addButton-button")[0] as HTMLButtonElement

export const getTrackListTrackUri = (track: HTMLDivElement) =>
    Object.values(track)[0].child.child.child.child.child.pendingProps.uri

export const getRatingsFolder = () =>
    flow(
        () => () => fetchPlatFolder(CONFIG.ratingsFolderUri),
        taskOption.tryCatch,
        taskOption.getOrElse(() => fetchPlatFolder),
    )()()
