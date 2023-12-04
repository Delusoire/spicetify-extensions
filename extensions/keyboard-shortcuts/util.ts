import { function as f, number as n, ord } from "https://esm.sh/fp-ts"
import { mean } from "https://esm.sh/fp-ts-std/Array"
import { mod } from "https://esm.sh/fp-ts-std/Number"
import { listeningToSneakBinds } from "./sneak.ts"

const SCROLL_STEP = 25

const focusOnApp = () => document.querySelector<Element>(".Root__main-view .os-viewport")!

export const appScroll = (s: number) => {
    const app = focusOnApp()
    const scrollIntervalId = setInterval(() => (app.scrollTop += s * SCROLL_STEP), 10)
    document.addEventListener("keyup", () => clearInterval(scrollIntervalId))
}

export const appScrollY = (y: number) => focusOnApp().scroll(0, y)

export const openPage = (page: string) => Spicetify.Platform.History.push({ pathname: page })

export const rotateSidebar = (offset: number) => {
    const navLinks = Array.from(
        Array.from(document.querySelectorAll<HTMLElement>(".main-yourLibraryX-navLink")).values(),
    )

    f.pipe(
        document.querySelector(".main-yourLibraryX-navLinkActive"),
        active => navLinks.findIndex(e => e === active),
        curr => mod(navLinks.length)(curr === -1 && offset <= 0 ? offset : curr + offset),
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
        Spicetify.Keyboard.registerShortcut(
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
        f.pipe(mean([bound.top, bound.bottom]), within(0, c.clientHeight)) &&
        f.pipe(mean([bound.left, bound.right]), within(0, c.clientWidth))
    )
}

export const CLICKABLE_ELEMENT_SELECTOR = `.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]`
