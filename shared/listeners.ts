import { getTrackListTracks, getTrackLists } from "../extensions/star-ratings-2/util.ts"
import { _ } from "./deps.ts"

import { PermanentMutationObserver, REACT_FIBER } from "./util.ts"

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

export const onPlayedPaused = (callback: (state: Spicetify.Platform.PlayerAPI.PlayerState) => void) => {
    callback(PlayerAPI._state)
    Player.addEventListener("onplaypause", event => callback(event!.data))
}

const PRESENTATION_KEY = Symbol("presentation")

type TrackListElement = HTMLDivElement & { [PRESENTATION_KEY]?: HTMLDivElement }
type TrackElement = HTMLDivElement & { props?: Record<string, any> }

type TrackListMutationListener = (trackList: Required<TrackListElement>, tracks: Array<Required<TrackElement>>) => void
export const onTrackListMutationListeners = new Array<TrackListMutationListener>()

const _onTrackListMutation = (
    trackList: Required<TrackListElement>,
    record: MutationRecord[],
    observer: MutationObserver,
) => {
    const tracks = getTrackListTracks(trackList[PRESENTATION_KEY]) as Array<Required<TrackElement>>

    const reactFiber = trackList[PRESENTATION_KEY][REACT_FIBER].alternate
    const reactTracks = reactFiber.pendingProps.children as any[]
    const tracksProps = reactTracks.map((child: any) => child.props as Record<string, any>)

    tracks.forEach((track, i) => (track.props = tracksProps[i]))

    const fullyRenderedTracks = tracks.filter(track => track.props?.uri)

    onTrackListMutationListeners.map(listener => listener(trackList, fullyRenderedTracks))
}

new PermanentMutationObserver("main", () => {
    const trackLists = getTrackLists() as Array<TrackListElement>
    trackLists
        .filter(trackList => !trackList[PRESENTATION_KEY])
        .forEach(trackList => {
            trackList[PRESENTATION_KEY] = trackList.lastElementChild!.firstElementChild!
                .nextElementSibling! as HTMLDivElement

            new MutationObserver((record, observer) =>
                _onTrackListMutation(trackList as Required<TrackListElement>, record, observer),
            ).observe(trackList[PRESENTATION_KEY], { childList: true })
        })
})
