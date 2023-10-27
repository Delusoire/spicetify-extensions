import { pipe } from "fp-ts/function"
import { listeningToSneakBinds } from "./sneak"
import * as Num from "fp-ts-std/Number"

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
    const navLinks = Array.from(document.querySelectorAll<Element>(".main-yourLibraryX-navLink").values())

    pipe(
        document.querySelector<HTMLElement>(".main-yourLibraryX-navLinkActive"),
        active => navLinks.findIndex(e => e === active),
        x => pipe(x === -1 && offset <= 0 ? offset : x + offset, Num.mod(navLinks.length)),
        x => (navLinks[x] as HTMLElement).click(),
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
