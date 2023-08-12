import { pipe } from "fp-ts/function"
import { listeningToSneakBinds } from "./sneak"
import * as Num from "fp-ts-std/Number"

const SCROLL_STEP = 25

const focusOnApp = () => document.querySelector(".Root__main-view .os-viewport") as Element

export const appScroll = (s: number) => {
    const app = focusOnApp()
    const scrollIntervalId = setInterval(() => (app.scrollTop += s * SCROLL_STEP), 10)
    document.addEventListener("keyup", () => clearInterval(scrollIntervalId))
}

export const appScrollY = (y: number) => focusOnApp().scroll(0, y)

export const openPage = (page: string) => Spicetify.Platform.History.push({ pathname: page })

export const rotateSidebar = (offset: number) => {
    const navLinks = Array.from(document.querySelectorAll(".main-yourLibraryX-navLink").values()) as HTMLElement[]

    pipe(
        document.querySelector(".main-yourLibraryX-navLinkActive"),
        active => navLinks.findIndex(e => e === active),
        x => pipe(x === -1 && offset <= 0 ? offset : x + offset, Num.mod(navLinks.length)),
        x => (navLinks[x] as HTMLElement).click(),
    )
}

export const registerBind = (
    keyName: Spicetify.Keyboard.ValidKey,
    ctrl: boolean,
    shift: boolean,
    alt: boolean,
    callback: (event: KeyboardEvent) => void,
) => {
    const key = Spicetify.Keyboard.KEYS[keyName]

    Spicetify.Keyboard.registerShortcut({ key, ctrl, shift, alt }, event => {
        if (!listeningToSneakBinds) callback(event)
    })
}
