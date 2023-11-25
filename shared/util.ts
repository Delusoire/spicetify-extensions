// export interface SpotifyID
//     extends Newtype<{ readonly SpotifyID: unique symbol }, string> {}
// export interface SpotifyURI
//     extends Newtype<{ readonly SpotifyURI: unique symbol }, string> {}

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
    notEl?: E,
) =>
    new Promise((resolve: (value: Element | null) => void) => {
        const res = (v: any) => {
            observer.disconnect()
            resolve(v)
        }

        const observer = new MutationObserver(() => {
            const el = document.querySelector<E>(selector)
            if (el && (!notEl || el !== notEl)) return res(el)
        })

        observer.observe(location, {
            childList: true,
            subtree: true,
        })

        if (timeout) setTimeout(() => res(null), timeout)
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

export const isLiked = (uris: SpotifyURI[]) => Spicetify.Platform.LibraryAPI.contains(...uris) as Promise<boolean[]>

export const setLiked = (uris: SpotifyURI[], liked: boolean) =>
    Spicetify.Platform.LibraryAPI[liked ? "add" : "remove"]({ uris })

export const toggleLiked = async (uris: SpotifyURI[]) => {
    const liked = await isLiked(uris)

    return await f.pipe(
        uris,
        a.reduceWithIndex(
            [[] as SpotifyURI[], [] as SpotifyURI[]] as const,
            (i, acc, uri) => (acc[Number(liked[i])].push(uri), acc),
        ),
        ([toAdd, toRem]) => {
            const ps = []
            if (toAdd.length) ps.push(setLiked(toAdd, true))
            if (toRem.length) ps.push(setLiked(toRem, false))
            return Promise.all(ps)
        },
    )
}

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
