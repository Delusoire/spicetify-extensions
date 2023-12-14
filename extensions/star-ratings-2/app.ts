import { PermanentMutationObserver } from "../../shared/util.ts"

import { updateCollectionControls, updateNowPlayingControls, updateTrackListControls } from "./controls.tsx"
import { loadRatings, tracksRatings } from "./ratings.ts"
import { CONFIG } from "./settings.ts"

import "./assets/styles.scss"
import { _ } from "../../shared/deps.ts"
import { onHistoryChanged, onSongChanged } from "../../shared/listeners.ts"
const { URI, Player } = Spicetify

loadRatings()

onSongChanged(state => {
    if (!state) return
    const { uri } = state.item ?? {}
    if (!uri) return

    if (Number(CONFIG.skipThreshold)) {
        const currentTrackRating = tracksRatings[uri] ?? Number.MAX_SAFE_INTEGER
        if (currentTrackRating <= Number(CONFIG.skipThreshold)) return void Player.next()
    }

    updateNowPlayingControls(uri)
})

new PermanentMutationObserver("main", () => updateTrackListControls())

onHistoryChanged(_.overSome([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2]), uri => updateCollectionControls(uri))
