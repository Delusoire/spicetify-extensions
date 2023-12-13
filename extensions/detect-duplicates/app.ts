import { _, fp } from "../../shared/deps.ts"
import { getReactFiber } from "../../shared/util.ts"
import { getTrackLists, getTrackListTrackUri, getTrackListTracks } from "../star-ratings-2/util.ts"
import { getISRCsForUris, isUriOutdatedDuplicate } from "./util.ts"

const { URI } = Spicetify

const greyOutTrack = (track: HTMLDivElement) => {
    track.style.backgroundColor = "gray"
    track.style.opacity = "0.3"
}

const onMutation = async () => {
    const trackLists = getTrackLists() as Array<HTMLDivElement & { presentation?: HTMLDivElement }>

    const tracksByTrackLists = trackLists.map(trackList => {
        const tracks = getTrackListTracks(trackList) as Array<HTMLDivElement & { props?: Record<string, any> }>
        if (!trackList.presentation) {
            trackList.presentation = trackList.lastElementChild!.firstElementChild!
                .nextElementSibling! as HTMLDivElement
            const tracksProps = getReactFiber(trackList.presentation).pendingProps.children.map(
                (child: any) => child.props,
            )
            tracks.forEach((track, i) => (track.props = tracksProps[i]))
        }
        return tracks as Array<HTMLDivElement & { props: Record<string, any> }>
    })

    const allUris = tracksByTrackLists.flatMap(tracks => tracks.map(track => track.props.uri))
    await getISRCsForUris(allUris)
    tracksByTrackLists.map(tracks => {
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
