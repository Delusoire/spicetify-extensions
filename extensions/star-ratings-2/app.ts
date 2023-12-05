import { anyPass } from "https://esm.sh/fp-ts-std/Predicate"

import { onHistoryChanged, onSongChanged } from "../../shared/util.ts"

import { updateCollectionControls, updateNowPlayingControls, updateTrackListControls } from "./controls.tsx"
import { loadRatings, tracksRatings } from "./ratings.ts"
import { CONFIG } from "./settings.ts"

import "./assets/styles.scss"
const { URI, Player } = Spicetify

loadRatings()

onSongChanged(data => {
    if (!data) return
    const { uri } = data.item

    if (Number(CONFIG.skipThreshold)) {
        const currentTrackRating = tracksRatings[uri] ?? Number.MAX_SAFE_INTEGER
        if (currentTrackRating <= Number(CONFIG.skipThreshold)) return void Player.next()
    }

    updateNowPlayingControls(uri)
})

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

onHistoryChanged(anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2]), uri =>
    updateCollectionControls(URI.fromString(uri)),
)
