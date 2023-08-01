export type SpotifyID = string

export type SpotifyURI = string

export const enum SpotifyURIType {
    TRACK = "spotify:track",
    ALBUM = "spotify:album",
    ARTIST = "spotify:artist",
    PLAYLIST = "spotify:playlist",
}

const spotUriRe =
    /^(?<type>spotify:(?:artist|track|album|playlist))(?:_v2)?:(?<id>[a-zA-Z0-9_]{22})$/

export const isUri = (possibleUri: string): possibleUri is SpotifyURI =>
    spotUriRe.test(possibleUri)

export const parseUri = (uri: SpotifyURI) =>
    uri.match(spotUriRe)?.groups as { type: SpotifyURIType; id: SpotifyID }

export const escapeRegex = (str: string) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)

export const titleCase = (str: string) =>
    str.replace(/\b\w/g, l => l.toUpperCase())

export const normalizeStr = (str: string) =>
    str
        .replace(/\(.*\)/g, "")
        .replace(/\[.*\]/g, "")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .toLowerCase()

export const waitForElement = (
    selector: string,
    timeout = 1000,
    location = document.body,
) =>
    new Promise((resolve: (value: Element | null) => void) => {
        if (document.querySelector(selector))
            return resolve(document.querySelector(selector))

        const res = (v: any) => {
            observer.disconnect()
            resolve(v)
        }

        let observer = new MutationObserver(async () => {
            if (document.querySelector(selector))
                return res(document.querySelector(selector))
        })

        observer.observe(location, {
            childList: true,
            subtree: true,
        })

        if (timeout) setTimeout(() => res(null), timeout)
    })
