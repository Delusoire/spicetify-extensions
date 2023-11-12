import { array as ar, function as f } from "https://esm.sh/fp-ts"

import { fetchGQLAlbum, fetchPlatArtistLikedTracks, fetchPlatPlaylistContents } from "../../shared/api.ts"
import { SpotifyURI } from "../../shared/util.ts"
import { Dropdown } from "./dropdown.tsx"
import { tracksRatings } from "./ratings.ts"
import {
    getCollectionPlaylistButton,
    getNowPlayingBar,
    getPlaylistButton,
    getTrackListTrackUri,
    getTrackListTracks,
    getTrackLists,
} from "./util.ts"
import { Instance, Props } from "npm:tippy.js"

const { URI } = Spicetify
const { React, ReactDOM } = Spicetify

const colorByRating = ["unset", "#ED5564", "#FFCE54", "A0D568", "#4FC1E8", "#AC92EB"]

const colorizePlaylistButton = (btn: HTMLButtonElement, rating: number) => {
    if (btn.style.fill === colorByRating[rating]) return

    btn.style.opacity = rating > 0 ? "1" : "unset"
    const svg = btn.querySelector<SVGElement>("svg")!
    svg.style.fill = colorByRating[rating]
}

let lastNPTippyInstance: Instance<Props>
const wrapDropdownInsidePlaylistButton = (pb: HTMLButtonElement, uri: SpotifyURI, forced = false) => {
    if (pb.hasAttribute("dropdown-enabled")) {
        if (!forced) return
    } else pb.setAttribute("dropdown-enabled", "")

    const div = document.createElement("div")

    pb.appendChild(div)
    ReactDOM.render(<Dropdown uri={uri} />, div)
    const tippyInstance = Spicetify.Tippy(pb, {
        content: div,
        interactive: true,
        animateFill: false,
        //offset: [0, 7],
        placement: "left",
        animation: "fade",
        //trigger: "mouseenter focus",
        zIndex: 10000,
        delay: [200, 0],
        render(instance: any) {
            const popper = document.createElement("div")
            const box = document.createElement("div")

            popper.id = "context-menu"
            popper.appendChild(box)

            box.className = "main-contextMenu-tippy"
            box.appendChild(instance.props.content)

            return { popper, onUpdate: f.constVoid }
        },
        onShow(instance: any) {
            instance.popper.firstChild.classList.add("main-contextMenu-tippyEnter")

            const children = (instance.reference.parentElement as HTMLDivElement).children
            const element = children.item(children.length - 1) as HTMLButtonElement
            element.style.marginRight = "0px"
        },
        onMount(instance: any) {
            requestAnimationFrame(() => {
                instance.popper.firstChild.classList.remove("main-contextMenu-tippyEnter")
                instance.popper.firstChild.classList.add("main-contextMenu-tippyEnterActive")
            })
        },
        onHide(instance: any) {
            requestAnimationFrame(() => {
                instance.popper.firstChild.classList.remove("main-contextMenu-tippyEnterActive")

                const children = (instance.reference.parentElement as HTMLDivElement).children
                const element = children.item(children.length - 2) as HTMLButtonElement
                element.style.marginRight = "unset"

                instance.unmount()
            })
        },
    })

    if (forced) {
        lastNPTippyInstance?.destroy()
        lastNPTippyInstance = tippyInstance
    }
}

export const updateNowPlayingControls = (newTrack: SpotifyURI, updateDropdown = true) => {
    const npb = getNowPlayingBar()
    const pb = getPlaylistButton(npb)
    colorizePlaylistButton(pb, tracksRatings[newTrack])
    if (updateDropdown) wrapDropdownInsidePlaylistButton(pb, newTrack, true)
}

export const updateTrackListControls = (updateDropdown = true) => {
    const trackLists = getTrackLists()
    f.pipe(
        trackLists,
        ar.map(trackList => {
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

    const ratings = uris.map(uri => tracksRatings[uri]).filter(Boolean)
    const rating = Math.round(ratings.reduce((acc, r) => acc + r) / ratings.length)

    const pb = getCollectionPlaylistButton()
    colorizePlaylistButton(pb, rating)
}
