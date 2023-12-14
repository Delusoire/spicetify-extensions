export type SpotifyID = string
export type SpotifyURI = string

const { Player, URI } = Spicetify
const { PlayerAPI, History } = Spicetify.Platform

export const SpotifyLoc = {
    before: {
        start: () => ({ before: "start" as const }),
        fromUri: (uri: SpotifyURI) => ({ before: { uri } }),
        fromUid: (uid: string) => ({ before: { uid } }),
    },
    after: {
        end: () => ({ after: "end" as const }),
        fromUri: (uri: SpotifyURI) => ({ after: { uri } }),
        fromUid: (uid: string) => ({ after: { uid } }),
    },
}

export const normalizeStr = (str: string) =>
    str
        .normalize("NFKD")
        .replace(/\(.*\)/g, "")
        .replace(/\[.*\]/g, "")
        .replace(/-_,/g, " ")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, " ")
        .toLowerCase()
        .trim()

export class PermanentMutationObserver extends MutationObserver {
    target: HTMLElement | null = null

    constructor(targetSelector: string, callback: MutationCallback) {
        super(callback)
        new MutationObserver(() => {
            const nextTarget = document.querySelector<HTMLElement>(targetSelector)
            if (nextTarget && !nextTarget.isEqualNode(this.target)) {
                this.target && this.disconnect()
                this.target = nextTarget
                this.observe(this.target, {
                    childList: true,
                    subtree: true,
                })
            }
        }).observe(document.body, {
            childList: true,
            subtree: true,
        })
    }
}

export const waitForElement = <E extends Element>(
    selector: string,
    timeout = 1000,
    location = document.body,
    notEl?: E | null,
) =>
    new Promise((resolve: (value: Element) => void, reject) => {
        const onMutation = () => {
            const el = document.querySelector<E>(selector)
            if (el) {
                if (notEl && el === notEl) {
                } else {
                    observer.disconnect()
                    return resolve(el)
                }
            }
        }

        const observer = new MutationObserver(onMutation)
        onMutation()

        observer.observe(location, {
            childList: true,
            subtree: true,
        })

        if (timeout)
            setTimeout(() => {
                observer.disconnect()
                reject()
            }, timeout)
    })

export const formatUri = (uri: string) => URI.fromString(uri).toURI()

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mainElement = document.querySelector("main")!
export const [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement)

export const createQueueItem =
    (queued: boolean) =>
    ({ uri, uid = "" }: { uri: string; uid?: string }) => ({
        contextTrack: {
            uri,
            uid,
            metadata: {
                is_queued: queued.toString(),
            },
        },
        removed: [],
        blocked: [],
        provider: queued ? ("queue" as const) : ("context" as const),
    })

export const setQueue = async (
    nextTracks: Array<ReturnType<ReturnType<typeof createQueueItem>>>,
    contextUri?: string,
) => {
    const { _queue, _client } = PlayerAPI._queue
    const { prevTracks, queueRevision } = _queue

    const res = await _client.setQueue({
        nextTracks,
        prevTracks,
        queueRevision,
    })

    await PlayerAPI.skipToNext()

    if (contextUri) {
        await new Promise<void>(resolve => {
            PlayerAPI._events.addListener("queue_update", () => resolve(), { once: true })
        })
        await setPlayingContext(contextUri)
    }

    return res
}

export const setPlayingContext = (uri: string) => {
    const { sessionId } = PlayerAPI._state
    return PlayerAPI.updateContext(sessionId, { uri, url: "context://" + uri })
}

export const onHistoryChanged = (
    toMatchTo: string | RegExp | ((location: string) => boolean),
    callback: (uri: SpotifyURI) => void,
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

export const onSongChanged = (callback: (state?: Spicetify.PlayerState) => void) => {
    callback(Player.data)
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
