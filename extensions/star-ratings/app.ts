import { array as ar, function as f } from "https://esm.sh/fp-ts"
import { anyPass } from "https://esm.sh/fp-ts-std/Predicate"
import { fetchGQLAlbum, fetchPlatArtistLikedTracks, fetchPlatPlaylistContents } from "../../shared/api.ts"
import { SpotifyURI, waitForElement } from "../../shared/util.ts"
import { addRatingsListenersToStars, aggregateRatings, loadRatings, tracksRatings } from "./ratings.ts"
import { CONFIG } from "./settings.ts"
import { StarStops, createStars, setStarsGradientByRating } from "./stars.ts"
import {
    STAR_SIZE,
    getFirstPlus,
    getLastColIndex,
    getStarsContainer,
    getStarsStops,
    getTrackListHeader,
    getTrackListTrackUri,
    getTrackListTracks,
    getTrackLists,
    setStarsGradientFromContainerByRating,
    starsS2N,
} from "./util.ts"

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

const updateTrackListStars = f.flow(
    getTrackLists,
    ar.map(trackList => {
        const trackListTracks = getTrackListTracks(trackList)
        if (trackListTracks.length === 0) return

        const hasStars = (parent: HTMLElement) => parent.getElementsByClassName("stars").length > 0
        const locationUri = URI.fromString(Spicetify.Platform.History.location.pathname)

        const firstElement = URI.isArtist(locationUri!)
            ? trackListTracks[0]
            : getTrackListHeader(trackList) ?? trackListTracks[0]

        const [lastColIndex] = getLastColIndex(firstElement)
        const newTrackListColCss = customTrackListColCss[lastColIndex - f.pipe(firstElement, hasStars, Number)]

        if (!newTrackListColCss) return
        firstElement.style.gridTemplateColumns = newTrackListColCss

        f.pipe(
            trackListTracks,
            ar.map(track => {
                const heart = getFirstPlus(track)
                if (heart) heart.style.display = CONFIG.hideHearts ? "none" : "flex"

                if (hasStars(track)) return

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
                    track.style.gridTemplateColumns = newTrackListColCss!
                }

                const trackUri = getTrackListTrackUri(track)
                const uri = URI.fromString(trackUri)

                //TODO: Local Tracks support
                if (!URI.isTrack(uri!)) return

                const [starsContainer, starsConstructs] = createStars(uri!.id!, STAR_SIZE)
                ratingColumn.appendChild(starsContainer)
                f.pipe(
                    starsConstructs,
                    ar.unzip,
                    ([_, starsStops]) => starsStops,
                    setStarsGradientByRating(tracksRatings[trackUri] ?? 0),
                )
                addRatingsListenersToStars([starsContainer, starsConstructs], () => trackUri)

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
    mainElement = document.querySelector<HTMLElement>("main")!
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

const updateCollectionStars = async (pathname: SpotifyURI, starsStops?: StarStops[]) => {
    const uri = URI.fromString(pathname) as Required<Spicetify.URI>

    if (!starsStops) starsStops = getStarsStops("collection")

    let uris
    if (URI.isAlbum(uri))
        uris = f.pipe(
            await fetchGQLAlbum(`${uri}`),
            x => x.tracks.items,
            ar.map(x => x.track.uri),
        )
    else if (URI.isArtist(uri))
        uris = f.pipe(
            await fetchPlatArtistLikedTracks(`${uri}`),
            ar.map(x => x.uri),
        )
    else if (URI.isPlaylistV1OrV2(uri))
        uris = f.pipe(
            await fetchPlatPlaylistContents(`${uri}`),
            ar.map(x => x.uri),
        )
    else throw "me out the window"

    setStarsGradientByRating(aggregateRatings(uris))(starsStops)
}

let lastCollectionPlayButton: Element
Spicetify.Platform.History.listen(async ({ pathname }: { pathname: string }) => {
    const pageHasHeart = anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2])
    if (!pageHasHeart(pathname)) return

    lastCollectionPlayButton = (await waitForElement(
        ".main-actionBar-ActionBar .main-playButton-PlayButton",
        0,
        document.body,
        lastCollectionPlayButton,
    ))!

    const [collectionStarsContainer, collectionStarsConstructs] = createStars("collection", STAR_SIZE * 2)
    getStarsContainer("collection")?.remove()
    lastCollectionPlayButton!.after(collectionStarsContainer)

    const collectionStarsStops = f.pipe(collectionStarsConstructs, ar.unzip, ([_, starsStops]) => starsStops)

    updateCollectionStars(pathname, collectionStarsStops)
})

// NOW PLAYING

const createNowPlayingStars = () => {
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
    )
}

createNowPlayingStars()

export const updateNowPlayingStars = () => {
    const trackUri = Spicetify.Player.data.track?.uri!
    const nowPlayingStarsContainer = getStarsContainer("now-playing")

    nowPlayingStarsContainer.style.display = Spicetify.URI.isTrack(trackUri) ? "flex" : "none"

    f.pipe(nowPlayingStarsContainer, setStarsGradientFromContainerByRating(tracksRatings[trackUri] ?? 0))
}

Spicetify.Player.addEventListener("songchange", () => {
    const trackUri = Spicetify.Player.data.item.uri!
    if (
        Number(CONFIG.skipThreshold) &&
        (tracksRatings[trackUri] || Number.MAX_SAFE_INTEGER) <= starsS2N(CONFIG.skipThreshold)
    )
        return Spicetify.Player.next()

    updateNowPlayingStars()
})
updateNowPlayingStars()
