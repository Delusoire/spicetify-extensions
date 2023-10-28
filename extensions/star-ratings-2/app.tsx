export default {}

debugger

import { array as a } from "fp-ts"
import { anyPass } from "fp-ts-std/Predicate"
import { pipe as p } from "fp-ts/function"
import { fetchGQLAlbum, fetchPlatArtistLikedTracks, fetchPlatPlaylistContents } from "../../shared/api"
import { SpotifyURI } from "../../shared/util"
import { Dropdown } from "./dropdown"
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

import React from "react"
import ReactDOM from "react-dom"
import "./assets/styles.scss"
import { constVoid } from "fp-ts/function"

const { URI } = Spicetify

loadRatings()

const colorByRating = [undefined, "#ED5564", "#FFCE54", "A0D568", "#4FC1E8", "#AC92EB"]

const colorizePlaylistButton = (btn: HTMLButtonElement, rating: number) => {
    if (btn.style.fill === colorByRating[rating]) return

    btn.style.opacity = rating > 0 ? "1" : (undefined as unknown as string)
    const svg = btn.querySelector<SVGElement>("svg")!
    svg.style.fill = colorByRating[rating] as string
}

const wrapDropdownInsidePlaylistButton = (pb: HTMLButtonElement, uri: SpotifyURI, forced = false) => {
    if (pb.hasAttribute("dropdown-enabled")) {
        if (!forced) return
    } else pb.setAttribute("dropdown-enabled", "")

    const div = document.createElement("div")
    pb.appendChild(div)
    ReactDOM.render(<Dropdown uri={uri} />, div)
    Spicetify.Tippy(pb, {
        ...Spicetify.TippyProps,
        content: div,
        interactive: true,
        animateFill: false,
        offset: [0, 7],
        placement: "left",
        animation: "fade",
        trigger: "mouseenter focus",
        zIndex: 10000,
        render(instance: any) {
            const popper = document.createElement("div")
            const box = document.createElement("div")

            popper.id = "context-menu"
            popper.appendChild(box)

            box.className = "main-contextMenu-tippy"
            box.appendChild(instance.props.content)

            return { popper, onUpdate: constVoid }
        },
    })
}

export const updateNowPlayingControls = (newTrack: SpotifyURI, updateDropdown = true) => {
    const npb = getNowPlayingBar()
    const pb = getPlaylistButton(npb)
    colorizePlaylistButton(pb, tracksRatings[newTrack])
    if (updateDropdown) wrapDropdownInsidePlaylistButton(pb, newTrack, true)
}

export const updateTrackListControls = (updateDropdown = true) => {
    const trackLists = getTrackLists()
    p(
        trackLists,
        a.map(trackList => {
            const trackListTracks = getTrackListTracks(trackList)

            trackListTracks.map(track => {
                const uri = URI.fromString(getTrackListTrackUri(track)).toURI()

                //TODO: Local Tracks support
                if (!URI.isTrack(uri!)) return

                const r = tracksRatings[uri]
                const pb = getPlaylistButton(track)

                colorizePlaylistButton(pb, r)
                if (updateDropdown) wrapDropdownInsidePlaylistButton(pb, uri)
            })
        }),
    )
}

export const updateCollectionControls = async (uri: Spicetify.URI) => {
    let uris
    if (URI.isAlbum(uri))
        uris = p(
            await fetchGQLAlbum(`${uri}`),
            x => x.tracks.items,
            a.map(x => x.track.uri),
        )
    else if (URI.isArtist(uri))
        uris = p(
            await fetchPlatArtistLikedTracks(`${uri}`),
            a.map(x => x.uri),
        )
    else if (URI.isPlaylistV1OrV2(uri))
        uris = p(
            await fetchPlatPlaylistContents(`${uri}`),
            a.map(x => x.uri),
        )
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
const mainElementObserver = new MutationObserver(() => updateTrackListControls())

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
