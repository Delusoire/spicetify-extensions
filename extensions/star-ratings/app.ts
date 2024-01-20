import { html, render } from "https://esm.sh/lit"

import { onTrackListMutationListeners } from "../../shared/listeners.ts"

import { CONFIG } from "./settings.ts"
import { getLastCol, getTrackListHeader, getTracksPlaylists } from "./util.ts"

const customTrackListColCss = [
    null,
    null,
    null,
    null,
    "[index] 16px [first] 4fr [var1] 2fr [var2] 1fr [last] minmax(120px,1fr)",
    "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] 2fr [last] minmax(120px,1fr)",
    "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] minmax(120px,2fr) [var3] 2fr [last] minmax(120px,1fr)",
]

onTrackListMutationListeners.push((tracklist, tracks) => {
    if (!CONFIG.showInTrackLists) return
    if (tracks.length === 0) return

    const hasStars = (parent: HTMLElement) => parent.getElementsByClassName("stars").length > 0

    const trackListHeader = getTrackListHeader(tracklist)
    const firstElement = trackListHeader ?? tracks[0]

    const [lastColIndex] = getLastCol(firstElement)
    const lastColOffset = hasStars(firstElement) ? 1 : 0
    const newTrackListColCss = customTrackListColCss[lastColIndex - lastColOffset]

    if (!newTrackListColCss) return
    if (trackListHeader) {
        trackListHeader.style.gridTemplateColumns = newTrackListColCss
    }

    tracks.map(track => {
        if (hasStars(track)) return

        let addedColumnWrapper: HTMLDivElement | null = track.querySelector("div.ratings-column-wrapper")
        if (!addedColumnWrapper) {
            const [colIndex, lastColumn] = getLastCol(track)

            lastColumn?.setAttribute("aria-colindex", String(colIndex + 1))

            addedColumnWrapper = document.createElement("div")
            addedColumnWrapper.setAttribute("aria-colindex", String(colIndex))
            addedColumnWrapper.role = "gridcell"
            addedColumnWrapper.style.display = "flex"
            addedColumnWrapper.classList.add("ratings-column-wrapper", "main-trackList-rowSectionVariable")
            track.insertBefore(addedColumnWrapper, lastColumn)
            track.style.gridTemplateColumns = newTrackListColCss!

            const trackUri = track.props.uri

            render(html`<label-container .playlists=${TRACK_PLAYLISTS[trackUri] ?? []} />`, addedColumnWrapper)
        }
    })
})
const TRACK_PLAYLISTS = await getTracksPlaylists()
