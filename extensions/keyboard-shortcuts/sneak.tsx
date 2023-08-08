import { array as a } from "fp-ts"
import { flow, pipe } from "fp-ts/function"
import { MousetrapInstance } from "mousetrap"
import { tapAny } from "../../shared/fp"

export const mousetrap: MousetrapInstance = Spicetify.Mousetrap() as any

export const keyList = "abcdefghijklmnopqrstuvwxyz".split("")

const getSneakKeys = () =>
    Array.from(
        sneakOverlay.getElementsByClassName("sneak-key"),
    ) as HTMLDivElement[]

const clearSomeSneakKeys = (sneakKeys: HTMLDivElement[]) => {
    if (sneakKeys.length === 0) return false

    sneakOverlay.remove()
    pipe(sneakKeys, a.map(tapAny(e => e.remove())))
    document.body.append(sneakOverlay)
    return true
}
const clearSneakKeys = flow(getSneakKeys, clearSomeSneakKeys)

export const enterSneak = (event: KeyboardEvent) => {
    sneakOverlay.style.display = "block"

    if (clearSneakKeys()) return

    const isElementVisible = ({ style }: HTMLElement) =>
        style.opacity !== "0" &&
        style.display !== "none" &&
        style.visibility !== "hidden"
    const isElementInViewPort = (e: Element) => {
        const bound = e.getBoundingClientRect()
        const { clientHeight, clientWidth } = document.body
        const mid = (a: number, b: number) => (a + b) / 2
        const clamp = (m: number, M: number) => (x: number) =>
            Math.max(Math.min(x, M), m)
        const within = (m: number, M: number) => (x: number) =>
            x === clamp(m, M)(x)
        return (
            pipe(mid(bound.top, bound.bottom), within(0, clientHeight)) &&
            pipe(mid(bound.left, bound.right), within(0, clientWidth))
        )
    }

    const createSneakKey = (
        target: Element,
        key: string,
        top: string | number,
        left: string | number,
    ) => {
        const div = document.createElement("span")
        {
            div.classList.add("sneak-key")
            div.innerText = key
            div.style.top = top + "px"
            div.style.left = left + "px"
            div.target = target
            return div
        }
    }

    const sneakKeysFragment = document.createDocumentFragment()
    const linkSelector = "[href],button"

    shouldListenToSneakBinds = pipe(
        document.querySelectorAll(linkSelector),
        x => Array.from(x) as HTMLElement[],
        a.filter(isElementVisible),
        a.filter(isElementInViewPort),
        a.reduce<HTMLElement, [number, number]>([0, 0], ([k1, k2], e) => {
            const { x, y } = e.getBoundingClientRect()
            sneakKeysFragment.append(
                createSneakKey(e, keyList[k1] + keyList[k2++], y, x),
            )
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
    if (
        element.hasAttribute("href") ||
        element.tagName === "BUTTON" ||
        element.getAttribute("role") === "button"
    )
        return void element.click()

    // pipe(
    //     [],
    //     a.reduce(
    //         null as Element | null,
    //         (e, sel) => e ?? element.querySelector(sel),
    //     ),
    //     altBtn =>
    //         altBtn instanceof HTMLButtonElement
    //             ? altBtn.click()
    //             : alert(
    //                   "Let me know where you found this button, please. I can't click this for you without that information.",
    //               ),
    // )
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
{
    sneakOverlay.id = "sneak-overlay"
    sneakOverlay.style.zIndex = `${Number.MAX_SAFE_INTEGER}`
    sneakOverlay.style.position = "absolute"
    sneakOverlay.style.width = "100%"
    sneakOverlay.style.height = "100%"
    sneakOverlay.style.display = "none"
    sneakOverlay.innerHTML = `<style>
.sneak-key {
position: fixed;
padding: 3px 6px;
background-color: black;
border-radius: 3px;
border: solid 2px white;
color: white;
text-transform: lowercase;
line-height: normal;
font-size: 14px;
font-weight: 500;
}
</style>`
    document.body.append(sneakOverlay)
}
