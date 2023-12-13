import { PermanentMutationObserver, getReactFiber } from "../../shared/util.ts"
import { getTrackListTracks, getTrackLists } from "../star-ratings-2/util.ts"

import { getISRCsForUris, isUriOutdatedDuplicate } from "./util.ts"

const greyOutTrack = (track: HTMLDivElement) => {
    track.style.backgroundColor = "gray"
    track.style.opacity = "0.3"
}

const onTrackListMutation = async (
    trackList: HTMLDivElement & { presentation: HTMLDivElement },
    record: MutationRecord[],
    observer: MutationObserver,
) => {
    const tracks = getTrackListTracks(trackList.presentation) as Array<HTMLDivElement & { props: Record<string, any> }>
    const reactTracks = getReactFiber(trackList.presentation).pendingProps.children as any[]
    const tracksProps = reactTracks.map((child: any) => child.props as Record<string, any>)
    if (tracks.length !== tracksProps.length) {
        debugger
    }
    tracks.forEach((track, i) => (track.props = tracksProps[i]))

    const trackUris = tracks.map(track => track.props.uri)
    await getISRCsForUris(trackUris)

    tracks.map(async track => {
        const isDuplicate = await isUriOutdatedDuplicate(track.props.uri)
        isDuplicate && greyOutTrack(track)
    })
}

new PermanentMutationObserver("main", () => {
    const trackLists = getTrackLists() as Array<HTMLDivElement & { presentation?: HTMLDivElement }>
    trackLists
        .filter(trackList => !trackList.presentation)
        .forEach(trackList => {
            trackList.presentation = trackList.lastElementChild!.firstElementChild!
                .nextElementSibling! as HTMLDivElement

            new MutationObserver((record, observer) =>
                onTrackListMutation(trackList as HTMLDivElement & { presentation: HTMLDivElement }, record, observer),
            ).observe(trackList.presentation, { childList: true })
        })
})
