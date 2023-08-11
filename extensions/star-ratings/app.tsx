export default {}

import { array as a, record } from "fp-ts"
import { anyPass } from "fp-ts-std/Predicate"
import { range } from "fp-ts/lib/NonEmptyArray"
import { flow as f, identity, pipe as p } from "fp-ts/lib/function"
import { get } from "spectacles-ts"
import {
    fetchGQLAlbum,
    fetchPlatArtistLikedTracks,
    fetchPlatPlaylistContents,
    fetchWebPlaylistRes,
} from "../../shared/api"
import { pMchain } from "../../shared/fp"
import { SpotifyURI } from "../../shared/util"
import { addRatingsListenersToStars, aggregateRatings } from "./ratings"
import { CONFIG } from "./settings"
import { StarStops, createStars, setStarsGradientByRating } from "./stars"
import {
    getFirstHeart,
    getLastColIndex,
    getNowPlayingHeart,
    getRatingsFolder,
    getStarStopsFromStar,
    getStarsContainer,
    getStarsFromStarsContainer,
    getStarsStops,
    getTrackListHeader,
    getTrackListTrackUri,
    getTrackListTracks,
    getTrackLists,
    starsN2S,
    starsS2N,
} from "./util"

const { URI } = Spicetify

export const RATINGS_FOLDER_NAME = "Ratings"

export const STAR_SIZE = 16
export const HALF_STAR_LENGTH = STAR_SIZE / 2

export let playlistUris: SpotifyURI[] = []

const customTrackListColCss = [
    null,
    null,
    null,
    null,
    "[index] 16px [first] 4fr [var1] 2fr [var2] 1fr [last] minmax(120px,1fr)",
    "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] 2fr [last] minmax(120px,1fr)",
    "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] minmax(120px,2fr) [var3] 2fr [last] minmax(120px,1fr)",
]

// TODO: read ratedFolderURI from settings, if not available, create a new folder
// TODO: get playlistUris by reading contents of ratedFolder
export const loadRatings = async () => {
    const ratingsFolder = await getRatingsFolder()

    const starsS2Narray = p(
        range(0, 10),
        a.map(s => [starsN2S(s), s] as [string, number]),
        record.fromEntries,
    )

    const playlistUris = p(
        ratingsFolder!.items!,
        a.map(p => [p.type, p.uri, starsS2Narray[p.name as string]] as [string, SpotifyURI, number]),
        a.reduce(
            [] as SpotifyURI[],
            (acc, [type, uri, starsN]) => (type === "playlis" && starsN ? (acc[starsN] = uri) : [], acc),
        ),
    )

    tracksRatings = await p(
        playlistUris,
        a.map<string, Promise<fetchWebPlaylistRes>>(fetchPlatPlaylistContents),
        ps => Promise.all(ps),
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

export let tracksRatings: Record<SpotifyURI, number> = {}
loadRatings()
// TRACKLISTS

export const updateTrackList = f(
    getTrackLists,
    a.map(trackList => {
        const trackListHeader = getTrackListHeader(trackList)
        const trackListTracks = getTrackListTracks(trackList)
        let lastColIndex: number
        if (trackListHeader) {
            ;[lastColIndex] = getLastColIndex(trackListHeader)

            const newTrackListColCss = customTrackListColCss[lastColIndex]
            if (newTrackListColCss) trackListHeader.style.gridTemplateColumns = newTrackListColCss
        } else {
            ;[lastColIndex] = getLastColIndex(trackListTracks[0])
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

                if (!URI.isTrack(uri!)) Spicetify.showNotification("me out the streets")

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
const mainElementObserver = new MutationObserver(() => (CONFIG.showInTrackLists ? updateTrackList : undefined))

new MutationObserver(() => {
    const oldMainElement = mainElement
    mainElement = document.querySelector("main") as HTMLElement
    if (mainElement && !mainElement.isEqualNode(oldMainElement)) {
        Spicetify.showNotification("mainElement got replaced?!")
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
    else return void Spicetify.showNotification("me out the window")

    setStarsGradientByRating(aggregateRatings(uris))(starsStops)
}

Spicetify.Platform.History.listen(async ({ pathname }: { pathname: string }) => {
    const pageHasHeart = anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2])
    if (!pageHasHeart(pathname)) return

    const generalCollectionPlayButton = document.querySelector(".main-actionBar-ActionBar .main-playButton-PlayButton")
    const [collectionStarsContainer, collectionStarsConstructs] = createStars("collection", STAR_SIZE * 2)
    generalCollectionPlayButton?.after(collectionStarsContainer)

    updateCollectionStars(
        pathname,
        p(collectionStarsConstructs, a.unzip, ([_, starsStops]) => starsStops),
    )
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

    p(
        nowPlayingStarsContainer,
        getStarsFromStarsContainer,
        a.map(getStarStopsFromStar),
        setStarsGradientByRating(tracksRatings[trackUri] ?? 0),
    )
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
