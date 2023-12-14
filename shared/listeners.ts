import { getTrackListTracks, getTrackLists } from "../extensions/star-ratings-2/util.ts"
import { PermanentMutationObserver } from "./util.ts"

const { Player, URI } = Spicetify
const { PlayerAPI, History } = Spicetify.Platform

export const onHistoryChanged = (
    toMatchTo: string | RegExp | ((location: string) => boolean),
    callback: (uri: string) => void,
    dropDuplicates = true,
) => {
    const createMatchFn = (toMatchTo: string | RegExp | ((input: string) => boolean)) => {
        switch (typeof toMatchTo) {
            case "string":
                return (input: string) => input?.startsWith(toMatchTo) ?? false

            case "function":
                return toMatchTo

            default:
                return (input: string) => toMatchTo.test(input)
        }
    }

    let lastPathname = ""
    const matchFn = createMatchFn(toMatchTo)

    const historyChanged = ({ pathname }: any) => {
        if (matchFn(pathname)) {
            if (dropDuplicates && lastPathname === pathname) {
            } else callback(URI.fromString(pathname).toURI())
        }
        lastPathname = pathname
    }

    historyChanged(History.location ?? {})
    return History.listen(historyChanged)
}

export const onSongChanged = (callback: (state: Spicetify.Platform.PlayerAPI.PlayerState) => void) => {
    callback(PlayerAPI._state)
    Player.addEventListener("songchange", event => callback(event!.data))
}

type TrackListElement = HTMLDivElement & { presentation?: HTMLDivElement }
type TrackElement = HTMLDivElement & { props?: Record<string, any> }

type TrackListMutationListener = (trackList: Required<TrackListElement>, tracks: Array<Required<TrackElement>>) => void
export const onTrackListMutationListeners = new Array<TrackListMutationListener>()

const _onTrackListMutation = (
    trackList: Required<TrackListElement>,
    record: MutationRecord[],
    observer: MutationObserver,
) => {
    const tracks = getTrackListTracks(trackList.presentation) as Array<Required<TrackElement>>

    const reactFiber = trackList.presentation[REACT_FIBER].alternate
    const reactTracks = reactFiber.pendingProps.children as any[]
    const tracksProps = reactTracks.map((child: any) => child.props as Record<string, any>)

    tracks.forEach((track, i) => (track.props = tracksProps[i]))

    onTrackListMutationListeners.map(listener => listener(trackList, tracks))
}

new PermanentMutationObserver("main", () => {
    const trackLists = getTrackLists() as Array<TrackListElement>
    trackLists
        .filter(trackList => !trackList.presentation)
        .forEach(trackList => {
            trackList.presentation = trackList.lastElementChild!.firstElementChild!
                .nextElementSibling! as HTMLDivElement

            new MutationObserver((record, observer) =>
                _onTrackListMutation(trackList as Required<TrackListElement>, record, observer),
            ).observe(trackList.presentation, { childList: true })
        })
})
