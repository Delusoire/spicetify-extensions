import { function as f, number as n, ord } from "https://esm.sh/fp-ts"

import { _ } from "../../shared/deps.ts"

import { listeningToSneakBinds } from "./sneak.ts"

const { Keyboard } = Spicetify
const { History } = Spicetify.Platform

const SCROLL_STEP = 25

const focusOnApp = () => document.querySelector<Element>(".Root__main-view .os-viewport")!

export const appScroll = (s: number) => {
    const app = focusOnApp()
    const scrollIntervalId = setInterval(() => (app.scrollTop += s * SCROLL_STEP), 10)
    document.addEventListener("keyup", () => clearInterval(scrollIntervalId))
}

export const appScrollY = (y: number) => focusOnApp().scroll(0, y)

export const openPage = (page: string) => History.push({ pathname: page })

export const rotateSidebar = (offset: number) => {
    if (offset === 0) return

    const navLinks = Array.from(
        Array.from(document.querySelectorAll<HTMLElement>(".main-yourLibraryX-navLink")).values(),
    )

    if (navLinks.length === 0) return

    f.pipe(
        document.querySelector(".main-yourLibraryX-navLinkActive"),
        active => navLinks.findIndex(e => e === active),
        curr => {
            if (curr === -1 && offset < 0) curr = navLinks.length
            let target = curr + (offset % navLinks.length)
            if (target < 0) target += navLinks.length
            return target
        },
        target => navLinks[target].click(),
    )
}

export const resizeLeftSidebar = (pxs: number) => {
    const html = document.firstElementChild! as HTMLHtmlElement,
        htmlStyle = html.style
    htmlStyle.cssText = htmlStyle.cssText.replace(/(--left-sidebar-width: )[^;]+/, `$1${pxs}px`)
}

export class Bind {
    private ctrl = false
    private shift = false
    private alt = false
    constructor(private key: string, private callback: (event: KeyboardEvent) => void) {}

    setCtrl = (required: boolean) => ((this.ctrl = required), this)
    setShift = (required: boolean) => ((this.shift = required), this)
    setAlt = (required: boolean) => ((this.alt = required), this)

    register = () =>
        Keyboard.registerShortcut(
            { key: this.key, ctrl: this.ctrl, shift: this.shift, alt: this.alt },
            event => void (!listeningToSneakBinds && this.callback(event)),
        )
}

export const isElementVisible = (e: HTMLElement) => e.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })
export const isElementInViewPort = (e: HTMLElement) => {
    const c = document.body
    const bound = e.getBoundingClientRect()
    const within = (m: number, M: number) => (x: number) => x === ord.clamp(n.Ord)(m, M)(x)
    return (
        f.pipe(_.mean([bound.top, bound.bottom]), within(0, c.clientHeight)) &&
        f.pipe(_.mean([bound.left, bound.right]), within(0, c.clientWidth))
    )
}

export const CLICKABLE_ELEMENT_SELECTOR = `.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]`
