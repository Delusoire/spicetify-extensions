// export interface SpotifyID
//     extends Newtype<{ readonly SpotifyID: unique symbol }, string> {}
// export interface SpotifyURI
//     extends Newtype<{ readonly SpotifyURI: unique symbol }, string> {}

export const mustLoadForApi = ["CosmosAsync", "GraphQL", "Platform"]
export const mustLoadForUtil = ["URI"]
export const mustLoadForSettings = ["React", "ReactDOM"]

export type SpotifyID = string
export type SpotifyURI = string

export type SpotifyLoc = {
    before?: "start" | { uri: SpotifyURI }
    after?: "end" | { uri: SpotifyURI }
}

export namespace SpotifyLoc {
    export const before = (uri: SpotifyURI) => ({
        before: { uri },
    })
    export const after = (uri: SpotifyURI) => ({
        after: { uri },
    })
}

export const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)

export const titleCase = (str: string) => str.replace(/\b\w/g, l => l.toUpperCase())

export const normalizeStr = (str: string) =>
    str
        .replace(/\(.*\)/g, "")
        .replace(/\[.*\]/g, "")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .toLowerCase()
        .trim()

export const waitForElement = (selector: string, timeout = 1000, location = document.body) =>
    new Promise((resolve: (value: Element | null) => void) => {
        if (document.querySelector(selector)) return resolve(document.querySelector(selector))

        const res = (v: any) => {
            observer.disconnect()
            resolve(v)
        }

        let observer = new MutationObserver(async () => {
            if (document.querySelector(selector)) return res(document.querySelector(selector))
        })

        observer.observe(location, {
            childList: true,
            subtree: true,
        })

        if (timeout) setTimeout(() => res(null), timeout)
    })

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
