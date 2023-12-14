import { onTrackListMutationListeners } from "../../shared/listeners.ts"

import { getISRCsForUris, isUriOutdatedDuplicate } from "./util.ts"

const greyOutTrack = (track: HTMLDivElement) => {
    track.style.backgroundColor = "gray"
    track.style.opacity = "0.3"
}

onTrackListMutationListeners.push(async (_, tracks) => {
    const trackUris = tracks.map(track => track.props.uri)
    await getISRCsForUris(trackUris)

    tracks.map(async track => {
        const isDuplicate = await isUriOutdatedDuplicate(track.props.uri)
        isDuplicate && greyOutTrack(track)
    })
})
