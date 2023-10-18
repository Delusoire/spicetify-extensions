import { array as a, number } from "fp-ts"
import { flow, pipe } from "fp-ts/function"
import { MousetrapInstance } from "mousetrap"
import { mean } from "fp-ts-std/Array"
import { clamp } from "fp-ts/Ord"

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

export const enterSneak = () => {
    sneakOverlay.style.display = "block"

    if (clearSneakKeys()) return

    const isElementVisible = (e: HTMLElement) => e.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })
    const isElementInViewPort = (e: HTMLElement) => {
        const c = document.body
        const bound = e.getBoundingClientRect()
        const within = (m: number, M: number) => (x: number) => x === clamp(number.Ord)(m, M)(x)
        return (
            pipe(mean([bound.top, bound.bottom]), within(0, c.clientHeight)) &&
            pipe(mean([bound.left, bound.right]), within(0, c.clientWidth))
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
    const linkSelector = `.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]`

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
        ([k1, k2]) => k1 + k2 > 0,
    )

    if (shouldListenToSneakBinds) sneakOverlay.append(sneakKeysFragment)
}

export const quitSneak = () => {
    sneakOverlay.style.display = "none"
    clearSneakKeys()
    listeningToSneakBinds = false
}

export const listenSneakKeys = ({ key }: KeyboardEvent) => {
    if (!listeningToSneakBinds) {
        if (shouldListenToSneakBinds) {
            shouldListenToSneakBinds = false
            listeningToSneakBinds = true
        }
        return
    }
    const sneakKeys = getSneakKeys()

    if (sneakKeys.length === 0) return void quitSneak()

    {
        sneakOverlay.remove()

        sneakKeys.map(sneakKey => {
            const [k1, ...ks] = sneakKey.innerText.toLowerCase()
            if (k1 !== key) return void sneakKey.remove()

            if (ks.length === 0) {
                sneakKey.target.click()
                quitSneak()
            } else {
                sneakKey.innerText = ks.join("")
            }
        })

        document.body.append(sneakOverlay)
    }

    if (sneakOverlay.childNodes.length === 1) quitSneak()
}

let shouldListenToSneakBinds = false
export let listeningToSneakBinds = false

const sneakOverlay = document.createElement("div")
sneakOverlay.id = "sneak-overlay"
document.body.append(sneakOverlay)
