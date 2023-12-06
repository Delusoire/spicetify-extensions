import { getTrackLists, getTrackListTrackUri, getTrackListTracks } from "../star-ratings-2/util.ts"
import { getISRCsForUris, isUriOutdatedDuplicate } from "./util.ts"

const { URI } = Spicetify

const greyOutTrack = (track: HTMLDivElement) => {
    track.style.backgroundColor = "gray"
    track.style.opacity = "0.3"
}

const onMutation = async () => {
    const trackLists = getTrackLists()

    // First pass to load the cache
    {
        const urisByTrackLists = trackLists.map(trackList => {
            const tracks = getTrackListTracks(trackList)

            return tracks.map(track => URI.fromString(getTrackListTrackUri(track)).toURI())
        })

        await getISRCsForUris(urisByTrackLists.flat())
    }

    trackLists.map(trackList => {
        const tracks = getTrackListTracks(trackList)

        tracks.map(async track => {
            const uri = URI.fromString(getTrackListTrackUri(track)).toURI()
            const isDuplicate = await isUriOutdatedDuplicate(uri)

            isDuplicate && greyOutTrack(track)
        })
    })
}

let mainElement: HTMLElement
const mainElementObserver = new MutationObserver(() => onMutation())

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
