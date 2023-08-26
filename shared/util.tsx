// export interface SpotifyID
//     extends Newtype<{ readonly SpotifyID: unique symbol }, string> {}
// export interface SpotifyURI
//     extends Newtype<{ readonly SpotifyURI: unique symbol }, string> {}

import { constant } from "fp-ts/lib/function"

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
export const waitForElement = <E extends Element>(selector: string, timeout = 1000, location = document.body) =>
    new Promise((resolve: (value: Element | null) => void) => {
        const res = (v: any) => {
            observer.disconnect()
            resolve(v)
        }

        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector)
            if (el) return res(el as E)
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
