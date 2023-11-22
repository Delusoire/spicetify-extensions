import { anyPass } from "https://esm.sh/fp-ts-std/Predicate"
import { updateCollectionControls, updateNowPlayingControls, updateTrackListControls } from "./controls.tsx"
import { loadRatings, tracksRatings } from "./ratings.ts"
import { CONFIG } from "./settings.ts"

import "./assets/styles.scss"

const { URI } = Spicetify

loadRatings()

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

Spicetify.Platform.History.listen(({ pathname }: { pathname: string }) => {
    const pageHasHeart = anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2])
    if (!pageHasHeart(pathname)) return

    updateCollectionControls(URI.fromString(pathname))
})
