export default {}

import { array as a } from "fp-ts"
import { anyPass } from "fp-ts-std/Predicate"
import { flow as f, identity, pipe as p } from "fp-ts/lib/function"
import { get } from "spectacles-ts"
import { fetchGQLAlbum, fetchPlatArtistLikedTracks, fetchPlatPlaylistContents } from "../../shared/api"
import { SpotifyURI, sleep, waitForElement } from "../../shared/util"
import { addRatingsListenersToStars, aggregateRatings, loadRatings, tracksRatings } from "./ratings"
import { CONFIG } from "./settings"
import { StarStops, createStars, setStarsGradientByRating } from "./stars"
import {
    STAR_SIZE,
    getFirstHeart,
    getLastColIndex,
    getNowPlayingHeart,
    getStarStopsFromStar,
    getStarsContainer,
    getStarsFromStarsContainer,
    getStarsStops,
    getStarsStopsFromStarsContainer,
    getTrackListHeader,
    getTrackListTrackUri,
    getTrackListTracks,
    getTrackLists,
    setStarsGradientFromContainerByRating,
    starsS2N,
} from "./util"

const { URI } = Spicetify

const customTrackListColCss = [
    null,
    null,
    null,
    null,
    "[index] 16px [first] 4fr [var1] 2fr [var2] 1fr [last] minmax(120px,1fr)",
    "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] 2fr [last] minmax(120px,1fr)",
    "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] minmax(120px,2fr) [var3] 2fr [last] minmax(120px,1fr)",
]

loadRatings()

// TRACKLISTS

export const updateTrackListStars = f(
    getTrackLists,
    a.map(trackList => {
        const trackListTracks = getTrackListTracks(trackList)
        const locationUri = URI.from(Spicetify.Platform.History.location.pathname)

        let lastColIndex: number
        if (URI.isArtist(locationUri!)) {
            ;[lastColIndex] = getLastColIndex(trackListTracks[0])
        } else {
            const trackListHeader = getTrackListHeader(trackList)
            ;[lastColIndex] = getLastColIndex(trackListHeader)

            const newTrackListColCss = customTrackListColCss[lastColIndex]
            if (newTrackListColCss) trackListHeader.style.gridTemplateColumns = newTrackListColCss
        }

        p(
            trackListTracks,
            a.map(track => {
                getFirstHeart(track).style.display = CONFIG.hideHearts ? "none" : "flex"
                const alreadyHasStars = track.getElementsByClassName("stars").length > 0

                if (alreadyHasStars) return

                let ratingColumn: HTMLDivElement | null = track.querySelector(".starRatings")
                if (!ratingColumn) {
                    const lastColumn = track.querySelector(".main-trackList-rowSectionEnd")
                    const colIndex = Number(lastColumn?.getAttribute("aria-colindex"))

                    ratingColumn = document.createElement("div")
                    ratingColumn.setAttribute("aria-colindex", String(colIndex))
                    lastColumn?.setAttribute("aria-colindex", String(colIndex + 1))
                    ratingColumn.role = "gridcell"
                    ratingColumn.style.display = "flex"
                    ratingColumn.classList.add("main-trackList-rowSectionVariable")
                    ratingColumn.classList.add("starRatings")
                    track.insertBefore(ratingColumn, lastColumn)

                    const newTrackListTrackColumnCss = customTrackListColCss[colIndex]
                    if (newTrackListTrackColumnCss)
                        track.style.gridTemplateColumns =
                            customTrackListColCss[lastColIndex] ?? newTrackListTrackColumnCss
                }

                const trackUri = getTrackListTrackUri(track)
                const uri = URI.from(trackUri)

                if (!URI.isTrack(uri!)) {
                    Spicetify.showNotification(`${trackUri} is an invalid track uri`)
                    debugger
                }

                const [starsContainer, starsConstructs] = createStars(uri!.id!, STAR_SIZE)
                ratingColumn.appendChild(starsContainer)
                p(
                    starsConstructs,
                    a.unzip,
                    ([_, starsStops]) => starsStops,
                    setStarsGradientByRating(tracksRatings[trackUri] ?? 0),
                )
                addRatingsListenersToStars(
                    [starsContainer, starsConstructs],
                    () => trackUri,
                    () => getFirstHeart(track),
                )

                const setVisibleCond = () =>
                    (starsContainer.style.visibility = tracksRatings[trackUri] ? "visible" : "hidden")

                track.addEventListener("mouseover", () => (starsContainer.style.visibility = "visible"))
                track.addEventListener("mouseout", setVisibleCond)
                setVisibleCond()
            }),
        )
    }),
)

let mainElement: HTMLElement
const mainElementObserver = new MutationObserver(() => (CONFIG.showInTrackLists ? updateTrackListStars() : undefined))

new MutationObserver(() => {
    const oldMainElement = mainElement
    mainElement = document.querySelector("main") as HTMLElement
    if (mainElement && !mainElement.isEqualNode(oldMainElement)) {
        if (oldMainElement) mainElementObserver.disconnect()
        mainElementObserver.observe(mainElement, {
            childList: true,
            subtree: true,
        })
    }
}).observe(document.body, {
    childList: true,
    subtree: true,
})

// COLLECTION

export const updateCollectionStars = async (pathname: SpotifyURI, starsStops?: StarStops[]) => {
    const uri = URI.from(pathname) as Required<Spicetify.URI>

    if (!starsStops) starsStops = getStarsStops("collection")

    let uris
    if (URI.isAlbum(uri))
        uris = p(await fetchGQLAlbum(`${uri}`), identity, get("tracks.items"), a.map(f(identity, get("track.uri"))))
    else if (URI.isArtist(uri)) uris = p(await fetchPlatArtistLikedTracks(`${uri}`), a.map(get("uri")))
    else if (URI.isPlaylistV1OrV2(uri)) uris = p(await fetchPlatPlaylistContents(`${uri}`), a.map(get("uri")))
    else throw "me out the window"

    setStarsGradientByRating(aggregateRatings(uris))(starsStops)
}

Spicetify.Platform.History.listen(async ({ pathname }: { pathname: string }) => {
    const pageHasHeart = anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2])
    if (!pageHasHeart(pathname)) return

    await sleep(300)
    let collectionStarsContainer = getStarsContainer("collection"),
        collectionStarsStops: StarStops[]
    if (!collectionStarsContainer) {
        const collectionPlayButton = await waitForElement(".main-actionBar-ActionBar .main-playButton-PlayButton")
        const [collectionStarsContainer, collectionStarsConstructs] = createStars("collection", STAR_SIZE * 2)
        collectionPlayButton?.after(collectionStarsContainer)

        collectionStarsStops = p(collectionStarsConstructs, a.unzip, ([_, starsStops]) => starsStops)
    } else {
        collectionStarsStops = p(collectionStarsContainer, getStarsStopsFromStarsContainer)
    }

    updateCollectionStars(pathname, collectionStarsStops)
})

// NOW PLAYING

export const createNowPlayingStars = () => {
    if (document.querySelectorAll(".stars-now-playing").length !== 0) return

    const nowPlayingElementSelector = CONFIG.nowPlayingStarsOnRight
        ? ".main-nowPlayingBar-extraControls"
        : ".main-nowPlayingWidget-trackInfo"
    const nowPlayingElement = document.querySelector(nowPlayingElementSelector)
    if (!nowPlayingElement) return

    const [nowPlayingStarsContainer, nowPlayingStarConstruct] = createStars("now-playing", STAR_SIZE)
    nowPlayingStarsContainer.style.display = "none"
    nowPlayingStarsContainer.style.marginLeft = "8px"
    nowPlayingStarsContainer.style.marginRight = "8px"

    if (!CONFIG.nowPlayingStarsOnRight) nowPlayingElement.after(nowPlayingStarsContainer)
    else nowPlayingElement.prepend(nowPlayingStarsContainer)

    addRatingsListenersToStars(
        [nowPlayingStarsContainer, nowPlayingStarConstruct],
        () => Spicetify.Player.data.track?.uri!,
        getNowPlayingHeart as () => HTMLButtonElement,
    )
}

createNowPlayingStars()
const nowPlayingHeart = getNowPlayingHeart()
if (nowPlayingHeart) nowPlayingHeart.style.display = CONFIG.hideHearts ? "none" : "flex"

export const updateNowPlayingStars = () => {
    const trackUri = Spicetify.Player.data.track?.uri as string
    const nowPlayingStarsContainer = getStarsContainer("now-playing")

    nowPlayingStarsContainer.style.display = Spicetify.URI.isTrack(trackUri) ? "flex" : "none"

    p(nowPlayingStarsContainer, setStarsGradientFromContainerByRating(tracksRatings[trackUri] ?? 0))
}

Spicetify.Player.addEventListener("songchange", () => {
    const trackUri = Spicetify.Player.data.track?.uri as string
    if (
        Number(CONFIG.skipThreshold) &&
        (tracksRatings[trackUri] || Number.MAX_SAFE_INTEGER) <= starsS2N(CONFIG.skipThreshold)
    )
        return Spicetify.Player.next()

    updateNowPlayingStars()
})
updateNowPlayingStars()
