export default {}

import { array as a } from "fp-ts"
import { anyPass } from "fp-ts-std/Predicate"
import { flow as f, identity, pipe as p } from "fp-ts/function"
import { get } from "spectacles-ts"
import { fetchGQLAlbum, fetchPlatArtistLikedTracks, fetchPlatPlaylistContents } from "../../shared/api"
import { waitForElement } from "../../shared/util"
import { loadRatings, tracksRatings } from "./ratings"
import { CONFIG } from "./settings"
import { getNowPlayingBar, getTrackListTrackUri, getTrackListTracks, getTrackLists } from "./util"

const { URI } = Spicetify

loadRatings()

const colorByRating = ["#ED5564", "#FFCE54", "A0D568", "#4FC1E8", "#AC92EB"]

const colorizePlaylistButton = (svg: SVGElement, rating: number) => {
    svg.style.fill = colorByRating[rating]
}

export const updateTrackListControls = f(
    getTrackLists,
    a.map(trackList => {
        const trackListTracks = getTrackListTracks(trackList)

        trackListTracks.map(track => {
            const uri = URI.fromString(getTrackListTrackUri(track)).toURI()

            //TODO: Local Tracks support
            if (!URI.isTrack(uri!)) return

            const trackPlaylistButtonSVG = track.querySelector(
                `button[aria-label="Add to Liked Songs"] svg, button[aria-label="Add to playlist"] svg`,
            ) as SVGElement
            colorizePlaylistButton(trackPlaylistButtonSVG, tracksRatings[uri])
        })
    }),
)

export const updateCollectionControls = async (uri: Spicetify.URI) => {
    let uris
    if (URI.isAlbum(uri))
        uris = p(await fetchGQLAlbum(`${uri}`), identity, get("tracks.items"), a.map(f(identity, get("track.uri"))))
    else if (URI.isArtist(uri)) uris = p(await fetchPlatArtistLikedTracks(`${uri}`), a.map(get("uri")))
    else if (URI.isPlaylistV1OrV2(uri)) uris = p(await fetchPlatPlaylistContents(`${uri}`), a.map(get("uri")))
    else throw "me out the window"

    const ratings = uris.map(uri => tracksRatings[uri]).filter(Boolean)
    const rating = Math.floor(ratings.reduce((acc, r) => acc + r) / ratings.length)

    const ab = document.querySelector(`div.main-actionBar-ActionBarRow`) as HTMLDivElement
    const abPlaylistButtonSVG = ab.querySelector(
        `button[aria-label="Remove from Your Library"] svg, button[aria-label="Save to Your Library"] svg`,
    ) as SVGElement
    colorizePlaylistButton(abPlaylistButtonSVG, rating)
}

export const updateNowPlayingControls = () => {
    const currentTrackUri = Spicetify.Player.data.track?.uri!

    const npb = getNowPlayingBar()
    const npbPlaylistButtonSVG = npb.querySelector(
        `button[aria-label="Add to Liked Songs"] svg, button[aria-label="Add to playlist"] svg`,
    ) as SVGElement
    colorizePlaylistButton(npbPlaylistButtonSVG, tracksRatings[currentTrackUri])
}

let mainElement: HTMLElement
const mainElementObserver = new MutationObserver(updateTrackListControls)

new MutationObserver(() => {
    const nextMainElement = document.querySelector("main") as HTMLElement
    if (nextMainElement && !nextMainElement.isEqualNode(mainElement)) {
        if (mainElement) mainElementObserver.disconnect()
        mainElement = nextMainElement
        mainElementObserver.observe(mainElement, {
            childList: true,
            subtree: true,
        })
    }
}).observe(document.body, {
    childList: true,
    subtree: true,
})

let lastCollectionPlayButton: Element
Spicetify.Platform.History.listen(async ({ pathname }: { pathname: string }) => {
    const pageHasHeart = anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2])
    if (!pageHasHeart(pathname)) return

    const collectionPlayButton = await waitForElement(
        ".main-actionBar-ActionBar .main-playButton-PlayButton",
        0,
        document.body,
        lastCollectionPlayButton,
    )

    if (!collectionPlayButton) return void Spicetify.showNotification("Error grabbing play button element", true)

    lastCollectionPlayButton = collectionPlayButton

    updateCollectionControls(URI.fromString(pathname))
})

Spicetify.Player.addEventListener("songchange", () => {
    const trackUri = Spicetify.Player.data.track?.uri!
    if (
        Number(CONFIG.skipThreshold) &&
        (tracksRatings[trackUri] || Number.MAX_SAFE_INTEGER) <= Number(CONFIG.skipThreshold)
    )
        return void Spicetify.Player.next()

    updateNowPlayingControls()
})
updateNowPlayingControls()
