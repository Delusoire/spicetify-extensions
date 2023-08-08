import { pipe } from "fp-ts/function"
import { listeningToSneakBinds } from "./sneak"
import * as Num from "fp-ts-std/Number"

const SCROLL_STEP = 25

const focusOnApp = () =>
    document.querySelector(".Root__main-view .os-viewport") as Element

export const appScroll = (s: number) => {
    const app = focusOnApp()
    const scrollIntervalId = setInterval(
        () => (app.scrollTop += s * SCROLL_STEP),
        10,
    )
    document.addEventListener("keyup", () => clearInterval(scrollIntervalId))
}

const appScrollY = (y: number) => focusOnApp().scroll(0, y)
export const appScrollTop = () => appScrollY(0)
export const appScrollBottom = () => appScrollY(Number.MAX_SAFE_INTEGER)

export const nextSong = Spicetify.Player.next

export const prevSong = Spicetify.Player.back

export const incVolume = Spicetify.Player.increaseVolume

export const decVolume = Spicetify.Player.decreaseVolume

export const openPage = (page: string) =>
    Spicetify.Platform.History.push({ pathname: page })

export const rotateSidebar = (offset: number) => {
    const navLinks = Array.from(
        document.querySelectorAll(".main-yourLibraryX-navLink").values(),
    ) as HTMLElement[]

    pipe(
        document.querySelector(".main-yourLibraryX-navLinkActive"),
        active => navLinks.findIndex(e => e === active),
        x =>
            pipe(
                x === -1 && offset <= 0 ? offset : x + offset,
                Num.mod(navLinks.length),
            ),
        x => (navLinks[x] as HTMLElement).click(),
    )
}

/**
 * Register your own keybind with function `registerBind`
 *
 * Syntax:
 *     registerBind(keyName, ctrl, shift, alt, callback)
 *
 * ctrl, shift and alt are boolean, true or false
 *
 * Valid keyName:
 * - BACKSPACE       - C               - Y               - F3
 * - TAB             - D               - Z               - F4
 * - ENTER           - E               - WINDOW_LEFT     - F5
 * - SHIFT           - F               - WINDOW_RIGHT    - F6
 * - CTRL            - G               - SELECT          - F7
 * - ALT             - H               - NUMPAD_0        - F8
 * - PAUSE/BREAK     - I               - NUMPAD_1        - F9
 * - CAPS            - J               - NUMPAD_2        - F10
 * - ESCAPE          - K               - NUMPAD_3        - F11
 * - SPACE           - L               - NUMPAD_4        - F12
 * - PAGE_UP         - M               - NUMPAD_5        - NUM_LOCK
 * - PAGE_DOWN       - N               - NUMPAD_6        - SCROLL_LOCK
 * - END             - O               - NUMPAD_7        - ;
 * - HOME            - P               - NUMPAD_8        - =
 * - ARROW_LEFT      - Q               - NUMPAD_9        - ,
 * - ARROW_UP        - R               - MULTIPLY        - -
 * - ARROW_RIGHT     - S               - ADD             - /
 * - ARROW_DOWN      - T               - SUBTRACT        - `
 * - INSERT          - U               - DECIMAL_POINT   - [
 * - DELETE          - V               - DIVIDE          - \
 * - A               - W               - F1              - ]
 * - B               - X               - F2              - "
 *
 * Use one of keyName as a string. If key that you want isn't in that list,
 * you can also put its keycode number in keyName as a number.
 *
 * callback is name of function you want your shortcut to bind to. It also
 * returns one KeyboardEvent parameter.
 *
 * Following are my default keybinds, use them as examples.
 */

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
