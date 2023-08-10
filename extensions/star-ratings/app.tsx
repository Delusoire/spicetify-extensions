import { array as a, boolean, readonlyArray } from "fp-ts"
import { flow as f, flip, pipe as p } from "fp-ts/lib/function"
import {
    addPlatPlaylistTracks,
    createPlatPlaylist,
    fetchGQLAlbum,
    fetchPlatPlaylistContents,
    fetchWebPlaylistRes,
    removePlatPlaylistTracks,
    setPlatPlaylistVisibility,
} from "../../shared/api"
import { SpotifyLoc, SpotifyURI, SpotifyURIType, parseUri } from "../../shared/util"
import { getAlbumRating, sortPlaylistByRating } from "./ratings"
import { CONFIG } from "./settings"
import {
    STAR_SIZE,
    StarSVGStops,
    calculateRatingFromMouseEvent,
    createStars,
    findStarsContainer,
    getStarSVGStops,
    getStarsContainerStars,
    setStarsGradientByRating,
} from "./stars"
import { starsN2S, starsS2N } from "./util"

let ratedFolderUri: SpotifyURI = ""
export let tracksRatings: Record<SpotifyURI, number> = {}
let playlistUris: SpotifyURI[] = []

let mainElement = null
let tracklists: HTMLDivElement[] = []
let oldTracklists: HTMLDivElement[] = []

let nowPlayingElement = null

let albumPlayButton = null

let albumStarData = null
let nowPlayingWidgetStarData = null

const getNowPlayingHeart = () =>
    document.querySelector(".main-nowPlayingWidget-nowPlaying .control-button-heart") as HTMLButtonElement | null
const getAlbumStarsElement = () => document.getElementById("stars-album") as HTMLSpanElement
const getAlbumStars = () => Array.from(getAlbumStarsElement()?.children ?? []) as SVGSVGElement[]

const onStarClick =
    (nth: number, starElement: SVGSVGElement, getTrackUri: () => SpotifyURI, getHeart: () => HTMLButtonElement) =>
    async (e: MouseEvent) => {
        const trackUri = getTrackUri()
        const oldRating = tracksRatings[trackUri]
        let newRating = calculateRatingFromMouseEvent(starElement, nth)(e)

        const heart = getHeart()
        const heartThreshold = starsS2N(CONFIG.heartThreshold)
        if (heart && heartThreshold) {
            const shouldBeHearted = newRating >= heartThreshold
            const isHearted = heart.ariaChecked === "true"

            if (isHearted !== shouldBeHearted) heart.click()
        }

        if (oldRating === newRating) newRating = 0

        if (oldRating) {
            const playlistUri = playlistUris[oldRating]
            removePlatPlaylistTracks(playlistUri, [trackUri])
        }

        tracksRatings[trackUri] = newRating

        if (newRating) {
            let playlistUri = playlistUris[newRating]
            if (!playlistUri) {
                playlistUri = await createPlatPlaylist(starsN2S(newRating), SpotifyLoc.after(ratedFolderUri))
                setPlatPlaylistVisibility(playlistUri, false)
                playlistUris[newRating] = playlistUri
            }

            addPlatPlaylistTracks(playlistUri, [trackUri])
        }

        const starsContainer = findStarsContainer(parseUri(trackUri).id)
        const starsSVGStops = p(starsContainer, getStarsContainerStars, a.map(getStarSVGStops))
        setStarsGradientByRating(newRating)(starsSVGStops)
        starsContainer.style.visibility = newRating ? "visible" : "hidden"

        updateNowPlayingWidget()
        updateAlbumStars()
    }

const addRatingsListenersToStars = (
    [starsContainer, starsConstructs]: ReturnType<typeof createStars>,
    getTrackUri: () => SpotifyURI,
    getHeart: () => HTMLButtonElement,
) => {
    const trackUri = getTrackUri()
    const [starsElements, starsSVGStops] = p(starsConstructs, readonlyArray.unzip) as [SVGSVGElement[], StarSVGStops[]]

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

const updateTrackList = () => {
    if (!CONFIG.showInTrackList) return

    oldTracklists = tracklists
    tracklists = Array.from(document.querySelectorAll(".main-trackList-indexable"))
    const trackListChanged = p(
        tracklists,
        a.foldMapWithIndex(boolean.MonoidAll)((i, trackList) => trackList.isEqualNode(oldTracklists[i])),
        // a.reduceWithIndex(tracklists.length !== oldTracklists.length, (i, changed, trackList) => changed || !trackList.isEqualNode(oldTracklists[i])),
    )

    const newTrackListColumnCss = [
        null,
        null,
        null,
        null,
        "[index] 16px [first] 4fr [var1] 2fr [var2] 1fr [last] minmax(120px,1fr)",
        "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] 2fr [last] minmax(120px,1fr)",
        "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] minmax(120px,2fr) [var3] 2fr [last] minmax(120px,1fr)",
    ]

    const tracklistHeaders: HTMLDivElement[] = Array.from(
        document.querySelectorAll(".main-trackList-trackListHeaderRow"),
    )

    // No tracklist header on Artist page
    const [oldTrackListHeaderColumnCss, newTrackListHeaderColumnCss] = p(
        tracklistHeaders,
        a.map(trackListHeader => {
            const colIndex = Number(
                trackListHeader.querySelector(".main-trackList-rowSectionEnd")?.getAttribute("aria-colindex"),
            )

            const trackListHeaderColumnCss = getComputedStyle(trackListHeader).gridTemplateColumns
            const newTrackListHeaderColumnCss = newTrackListColumnCss[colIndex]

            if (newTrackListHeaderColumnCss) trackListHeader.style.gridTemplateColumns = newTrackListHeaderColumnCss

            return [trackListHeaderColumnCss, newTrackListHeaderColumnCss] as const
        }),
        readonlyArray.unzip,
    )

    p(
        tracklistHeaders,
        a.map(
            trackListHeader =>
                Array.from(
                    (trackListHeader.parentElement!.parentElement!.lastChild! as HTMLDivElement).children[1].children,
                ) as HTMLDivElement[],
        ),
        a.mapWithIndex((i, trackList) =>
            a.map((track: HTMLDivElement) => {
                const getHeart = () => track.getElementsByClassName("main-addButton-button")[0] as HTMLButtonElement
                const heart = getHeart()
                const alreadyHasStars = track.getElementsByClassName("stars").length > 0
                const trackUri = Object.values(track)[0].child.child.child.child.child.pendingProps.uri
                const isTrack = trackUri.includes("track")

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

                    if (!oldTrackListHeaderColumnCss[i])
                        /* @ts-ignore */
                        oldTrackListHeaderColumnCss[i] = getComputedStyle(track).gridTemplateColumns

                    const newTrackListTrackColumnCss = newTrackListColumnCss[colIndex]
                    if (newTrackListTrackColumnCss)
                        track.style.gridTemplateColumns = newTrackListHeaderColumnCss[i] ?? newTrackListTrackColumnCss
                }

                if (!heart || !trackUri || alreadyHasStars || !isTrack) return

                const [starsContainer, starConstruct] = createStars(parseUri(trackUri).id, STAR_SIZE)
                ratingColumn.appendChild(starsContainer)
                setStarsGradientByRating(tracksRatings[trackUri] ?? 0)(starConstruct)
                heart.style.display = CONFIG.hideHearts ? "none" : "flex"
                addRatingsListenersToStars([starsContainer, starConstruct], () => trackUri, getHeart)

                track.addEventListener("mouseover", () => (starsContainer.style.visibility = "visible"))
                track.addEventListener(
                    "mouseout",
                    () => (starsContainer.style.visibility = tracksRatings[trackUri] ? "visible" : "hidden"),
                )
                starsContainer.style.visibility = tracksRatings[trackUri] ? "visible" : "hidden"
            })(trackList),
        ),
    )
}

async function documentBodyMutated() {
    const oldMainElement = mainElement
    mainElement = document.querySelector("main")
    const mainElementChanged = !mainElement.isEqualNode(oldMainElement)

    if (mainElement && mainElementChanged) {
        if (oldMainElement) mainElementObserver.disconnect()

        updateTrackList()
        mainElementObserver.observe(mainElement, {
            childList: true,
            subtree: true,
        })
    }

    const heart = getNowPlayingHeart()
    if (heart) heart.style.display = CONFIG.hideHearts ? "none" : "flex"

    const oldNowPlayingWidget = nowPlayingElement
    const nowPlayingElementSelector = CONFIG.nowPlayingStarsOnRight
        ? ".main-nowPlayingBar-extraControls"
        : ".main-nowPlayingWidget-trackInfo"

    nowPlayingElement = document.querySelector(nowPlayingElementSelector)
    const nowPlayingWidgentChanged = !nowPlayingElement.isEqualNode(oldNowPlayingWidget)

    if (nowPlayingElement && nowPlayingWidgentChanged) {
        const [nowPlayingStarsContainer, nowPlayingStarConstruct] = createStars("now-playing", STAR_SIZE)
        nowPlayingStarsContainer.style.marginLeft = "8px"
        nowPlayingStarsContainer.style.marginRight = "8px"
        if (!CONFIG.nowPlayingStarsOnRight) nowPlayingElement.after(nowPlayingStarsContainer)
        else nowPlayingElement.prepend(nowPlayingStarsContainer)

        addRatingsListenersToStars(
            [nowPlayingStarsContainer, nowPlayingStarConstruct],
            () => Spicetify.Player.data.track?.uri,
            getNowPlayingHeart,
        )
        updateNowPlayingWidget()
    }

    const oldAlbumPlayButton = albumPlayButton
    albumPlayButton = document.querySelector(".main-actionBar-ActionBar .main-playButton-PlayButton")
    if (albumPlayButton && !albumPlayButton.isEqualNode(oldAlbumPlayButton)) {
        const [albumStarsContainer, albumStarConstruct] = createStars("album", STAR_SIZE * 2)
        albumPlayButton.after(albumStarsContainer)
        await updateAlbumStars()
    }
}

const updateAlbumStars = async () => {
    const albumPathnameRe = /^\/album\/(?<id>[a-zA-Z0-9_]{22})/
    const { id } = Spicetify.Platform.History.location.pathname.match(albumPathnameRe)?.groups
    getAlbumStarsElement().style.display = id ? "flex" : "none"
    if (!id) return

    const setStarsGradient = p(await fetchGQLAlbum(`spotify:album:${id}`), getAlbumRating, setStarsGradientByRating)
    p(getAlbumStars(), a.map(getStarSVGStops), setStarsGradient)
}

// TODO: nowPlayingWidgetStarData ??
function updateNowPlayingWidget() {
    if (!nowPlayingStarData) return

    const trackUri = Spicetify.Player.data.track?.uri as string

    nowPlayingWidgetStarData[0].style.display = parseUri(trackUri).type === SpotifyURIType.TRACK ? "flex" : "none"

    setStarsGradientByRating(tracksRatings[trackUri] ?? 0)(nowPlayingWidgetStarData[1])
}

// TODO: when removing a track from one of the rating playlists, check also if it exists in any lower rating playlist
const loadRatings = async () => {
    const ratingPlaylists = await p(
        playlistUris,
        a.map<string, Promise<fetchWebPlaylistRes>>(fetchPlatPlaylistContents),
        ps => Promise.all(ps),
    )

    tracksRatings = p(
        ratingPlaylists,
        a.map(a.map(t => t.uri)),
        a.flatMap((trackUris, rating) => trackUris.map(trackUri => [trackUri, rating] as const)),
        a.reduce({} as Record<string, number>, (acc, [trackUri, rating]) =>
            Object.assign(acc, {
                [trackUri]: Math.max(rating, acc[trackUri] ?? 0),
            }),
        ),
    )
}

loadRatings()

const mainElementObserver = new MutationObserver(updateTrackList)

Spicetify.Player.addEventListener("songchange", () => {
    const trackUri = Spicetify.Player.data.track?.uri
    if (
        trackUri &&
        trackUri in tracksRatings &&
        CONFIG.skipThreshold !== "disabled" &&
        tracksRatings[trackUri] <= starsS2N(CONFIG.skipThreshold)
    )
        return Spicetify.Player.next()

    updateNowPlayingWidget()
})

// Spicetify.Platform.History.listen(updateAlbumStars)

new MutationObserver(documentBodyMutated).observe(document.body, {
    childList: true,
    subtree: true,
})
documentBodyMutated()
