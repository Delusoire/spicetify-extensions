// export interface SpotifyID
//     extends Newtype<{ readonly SpotifyID: unique symbol }, string> {}
// export interface SpotifyURI
//     extends Newtype<{ readonly SpotifyURI: unique symbol }, string> {}

import { array as a } from "fp-ts"
import { constant, pipe as p } from "fp-ts/function"

export const mustLoadForApi = ["CosmosAsync", "GraphQL", "Platform"]
export const mustLoadForUtil = ["URI"]
export const mustLoadForSettings = ["React", "ReactDOM"]

export type SpotifyID = string
export type SpotifyURI = string

export type SpotifyLoc = {
    before?: "start" | { uri: SpotifyURI } | { uid: string }
    after?: "end" | { uri: SpotifyURI } | { uid: string }
}

export namespace SpotifyLoc {
    export namespace before {
        export const start = constant({ before: "start" } as SpotifyLoc)

        export const fromUri = (uri: SpotifyURI) => ({
            before: { uri },
        })

        export const fromUid = (uid: string) => ({
            before: { uid },
        })
    }

    export namespace after {
        export const end = constant({ after: "end" } as SpotifyLoc)

        export const fromUri = (uri: SpotifyURI) => ({
            before: { uri },
        })

        export const fromUid = (uid: string) => ({
            before: { uid },
        })
    }
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

//! Does location actually point to document.body?
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
    Spicetify.Platform.LibraryAPI[liked ? "add" : "remove"](...uris)

export const toggleLiked = async (uris: SpotifyURI[]) => {
    const liked = await isLiked(uris)

    return await p(
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

export const addToContextQueue = (queue: SpotifyURI[]) => {
    const { _queue, _client } = Spicetify.Platform.PlayerAPI._queue
    const { prevTracks, queueRevision } = _queue

    const nextTracks = queue.map(uri => ({
        contextTrack: {
            uri,
            uid: "",
            metadata: {
                is_queued: "false",
            },
        },
        removed: [],
        blocked: [],
        provider: "context",
    }))

    return _client.setQueue({
        nextTracks,
        prevTracks,
        queueRevision,
    })
}

export const setPlayingContext = async (uri: SpotifyURI) => {
    const { sessionId } = Spicetify.Platform.PlayerAPI.getState()
    return Spicetify.Platform.PlayerAPI.updateContext(sessionId, { uri, url: "context://" + uri })
}
