import { array as a, function as f } from "https://esm.sh/fp-ts"

export type SpotifyID = string
export type SpotifyURI = string

export type SpotifyLocObj = {
    before?: "start" | { uri: SpotifyURI } | { uid: string }
    after?: "end" | { uri: SpotifyURI } | { uid: string }
}

export const SpotifyLoc = {
    before: {
        start: f.constant({ before: "start" } as SpotifyLocObj),
        fromUri: (uri: SpotifyURI) => ({ before: { uri } }),
        fromUid: (uid: string) => ({ before: { uid } }),
    },
    after: {
        end: f.constant({ after: "end" } as SpotifyLocObj),
        fromUri: (uri: SpotifyURI) => ({ after: { uri } }),
        fromUid: (uid: string) => ({ after: { uid } }),
    },
}

export const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)

export const titleCase = (str: string) => str.replace(/\b\w/g, l => l.toUpperCase())

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

export const trapElement = <E extends Element>(
    selector: string,
    callback: (el: E | null, lastEl: E | null) => void,
    location = document.body,
) => {
    let lastEl: E | null = null

    const observer = new MutationObserver(() => {
        const el = document.querySelector<E>(selector)
        if (el !== lastEl) callback(el, lastEl)
        lastEl = el
    })

    observer.observe(location, {
        childList: true,
        subtree: true,
    })
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getReactProps = (element: Element) =>
    element[Object.keys(element).find(k => k.startsWith("__reactProps$")) as keyof typeof element]

export const createQueueItem = (queued: boolean) => (uri: SpotifyURI) => ({
    contextTrack: {
        uri,
        uid: "",
        metadata: {
            is_queued: queued.toString(),
        },
    },
    removed: [],
    blocked: [],
    provider: queued ? "queue" : "context",
})

export const setQueue = async (nextTracks: Array<ReturnType<ReturnType<typeof createQueueItem>>>) => {
    const { _queue, _client } = Spicetify.Platform.PlayerAPI._queue
    const { prevTracks, queueRevision } = _queue

    return _client.setQueue({
        nextTracks,
        prevTracks,
        queueRevision,
    }) as Promise<{ error: number; reasons: string }>
}

export const setPlayingContext = (uri: SpotifyURI) => {
    const { sessionId } = Spicetify.Platform.PlayerAPI.getState()
    return Spicetify.Platform.PlayerAPI.updateContext(sessionId, { uri, url: "context://" + uri }) as Promise<undefined>
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
            } else callback(Spicetify.URI.fromString(pathname).toString())
        }
        lastPathname = pathname
    }

    historyChanged(Spicetify.Platform.History.location ?? {})
    Spicetify.Platform.History.listen(historyChanged)
}

export const onSongChanged = (callback: (state?: Spicetify.PlayerState) => void) => {
    callback(Spicetify.Player.data)
    Spicetify.Player.addEventListener("songchange", event => callback(event!.data))
}
