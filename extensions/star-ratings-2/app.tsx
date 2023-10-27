export default {}

debugger

import { array as a } from "fp-ts"
import { anyPass } from "fp-ts-std/Predicate"
import { flow as f, identity, pipe as p } from "fp-ts/function"
import { get } from "spectacles-ts"
import { fetchGQLAlbum, fetchPlatArtistLikedTracks, fetchPlatPlaylistContents } from "../../shared/api"
import { SpotifyURI } from "../../shared/util"
import { loadRatings, tracksRatings } from "./ratings"
import { CONFIG } from "./settings"
import {
    getCollectionPlaylistButton,
    getNowPlayingBar,
    getPlaylistButton,
    getTrackListTrackUri,
    getTrackListTracks,
    getTrackLists,
} from "./util"
import { Dropdown } from "./dropdown"

import "./assets/styles.scss"
import React from "react"
import ReactDOM from "react-dom"

const { URI } = Spicetify

loadRatings()

const colorByRating = [undefined, "#ED5564", "#FFCE54", "A0D568", "#4FC1E8", "#AC92EB"]

const colorizePlaylistButton = (btn: HTMLButtonElement, rating: number) => {
    if (btn.style.fill === colorByRating[rating]) return

    btn.style.opacity = rating > 0 ? "1" : (undefined as unknown as string)
    const svg = btn.querySelector<SVGElement>("svg")!
    svg.style.fill = colorByRating[rating] as string
}

const wrapDropdownInsidePlaylistButton = (pb: HTMLButtonElement, uri: SpotifyURI) => {
    const div = document.createElement("div")
    pb.appendChild(div)
    ReactDOM.render(<Dropdown uri={uri} />, div)
}

export const updateNowPlayingControls = (newTrack: SpotifyURI) => {
    const npb = getNowPlayingBar()
    const pb = getPlaylistButton(npb)
    colorizePlaylistButton(pb, tracksRatings[newTrack])
    wrapDropdownInsidePlaylistButton(pb, newTrack)
}

export const updateTrackListControls = f(
    getTrackLists,
    a.map(trackList => {
        const trackListTracks = getTrackListTracks(trackList)

        trackListTracks.map(track => {
            const uri = URI.fromString(getTrackListTrackUri(track)).toURI()

            //TODO: Local Tracks support
            if (!URI.isTrack(uri!)) return

            const r = tracksRatings[uri]
            const pb = getPlaylistButton(track)

            colorizePlaylistButton(pb, r)
            wrapDropdownInsidePlaylistButton(pb, uri)
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
    const rating = Math.round(ratings.reduce((acc, r) => acc + r) / ratings.length)

    const pb = getCollectionPlaylistButton()
    colorizePlaylistButton(pb, rating)
}

Spicetify.Player.addEventListener("songchange", () => {
    const npTrack = Spicetify.Player.data.track?.uri!
    if (
        Number(CONFIG.skipThreshold) &&
        (tracksRatings[npTrack] || Number.MAX_SAFE_INTEGER) <= Number(CONFIG.skipThreshold)
    )
        return void Spicetify.Player.next()

    updateNowPlayingControls(npTrack)
})
updateNowPlayingControls(Spicetify.Player.data.track?.uri!)

let mainElement: HTMLElement
const mainElementObserver = new MutationObserver(updateTrackListControls)

new MutationObserver(() => {
    const nextMainElement = document.querySelector<HTMLElement>("main")
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

Spicetify.Platform.History.listen(async ({ pathname }: { pathname: string }) => {
    const pageHasHeart = anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2])
    if (!pageHasHeart(pathname)) return

    updateCollectionControls(URI.fromString(pathname))
})
