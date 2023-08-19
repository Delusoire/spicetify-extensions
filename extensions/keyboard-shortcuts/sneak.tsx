import { array as a } from "fp-ts"
import { flow, pipe } from "fp-ts/function"
import { MousetrapInstance } from "mousetrap"

type SneakKey = HTMLSpanElement & { target: HTMLElement }

export const mousetrap: MousetrapInstance = Spicetify.Mousetrap() as any

export const keyList = "abcdefghijklmnopqrstuvwxyz".split("")

const getSneakKeys = () => Array.from(sneakOverlay.getElementsByClassName("sneak-key")) as SneakKey[]

const clearSomeSneakKeys = (sneakKeys: SneakKey[]) => {
    if (sneakKeys.length === 0) return false

    sneakOverlay.remove()
    pipe(
        sneakKeys,
        a.map(e => e.remove()),
    )
    document.body.append(sneakOverlay)
    return true
}
const clearSneakKeys = flow(getSneakKeys, clearSomeSneakKeys)

export const enterSneak = (event: KeyboardEvent) => {
    sneakOverlay.style.display = "block"

    if (clearSneakKeys()) return

    const isElementVisible = ({ style }: HTMLElement) =>
        style.opacity !== "0" && style.display !== "none" && style.visibility !== "hidden"
    const isElementInViewPort = (e: HTMLElement, { clientHeight, clientWidth } = document.body) => {
        const bound = e.getBoundingClientRect()
        const mid = (a: number, b: number) => (a + b) / 2
        const clamp = (m: number, M: number) => (x: number) => Math.max(Math.min(x, M), m)
        const within = (m: number, M: number) => (x: number) => x === clamp(m, M)(x)
        return (
            pipe(mid(bound.top, bound.bottom), within(0, clientHeight)) &&
            pipe(mid(bound.left, bound.right), within(0, clientWidth))
        )
    }

    const createSneakKey = (target: HTMLElement, key: string, top: string | number, left: string | number) => {
        const sneakKey = document.createElement("span") as SneakKey
        sneakKey.classList.add("sneak-key")
        sneakKey.innerText = key
        sneakKey.style.top = top + "px"
        sneakKey.style.left = left + "px"
        sneakKey.target = target
        return sneakKey
    }

    const sneakKeysFragment = document.createDocumentFragment()
    const linkSelector = `[href],button,[role="button"]`

    shouldListenToSneakBinds = pipe(
        document.querySelectorAll(linkSelector),
        x => Array.from(x) as HTMLElement[],
        a.filter(isElementVisible),
        a.filter(isElementInViewPort),
        a.reduce<HTMLElement, [number, number]>([0, 0], ([k1, k2], e) => {
            const { x, y } = e.getBoundingClientRect()
            sneakKeysFragment.append(createSneakKey(e, keyList[k1] + keyList[k2++], y, x))
            return k2 >= keyList.length ? [++k1, 0] : [k1, k2]
        }),
        acc => acc[0] + acc[1] !== 0,
    )

    if (shouldListenToSneakBinds) sneakOverlay.append(sneakKeysFragment)
}

export const quitSneak = (event: KeyboardEvent) => {
    sneakOverlay.style.display = "none"
    clearSneakKeys()
    listeningToSneakBinds = false
}

export const clickElement = (element: HTMLElement) => {
    if (element.hasAttribute("href") || element.tagName === "BUTTON" || element.getAttribute("role") === "button")
        return void element.click()
}

export const listenSneakKeys = (event: KeyboardEvent) => {
    if (!listeningToSneakBinds) {
        if (shouldListenToSneakBinds) {
            shouldListenToSneakBinds = false
            listeningToSneakBinds = true
        }
        return
    }
    const sneakKeys = getSneakKeys()

    if (sneakKeys.length === 0) return void quitSneak(event)

    sneakOverlay.remove()
    sneakKeys.forEach(sneakKey => {
        const text = sneakKey.innerText.toLowerCase()
        if (text[0] === event.key) {
            sneakKey.innerText = text.slice(1)

            if (sneakKey.innerText === "") {
                clickElement(sneakKey.target)
                return void quitSneak(event)
            }
        } else sneakKey.remove()
    })
    document.body.append(sneakOverlay)

    if (sneakOverlay.childNodes.length === 1) quitSneak(event)
}

let shouldListenToSneakBinds = false
export let listeningToSneakBinds = false

const sneakOverlay = document.createElement("div")
sneakOverlay.id = "sneak-overlay"
document.body.append(sneakOverlay)
