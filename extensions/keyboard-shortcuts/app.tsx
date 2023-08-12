import { enterSneak, keyList, listenSneakKeys, mousetrap, quitSneak } from "./sneak"
import { appScroll, appScrollY, openPage, registerBind, rotateSidebar } from "./util"

const { KEYS } = Spicetify.Keyboard

// Ctrl + Tab and Ctrl + Shift + Tab to switch sidebar items
registerBind("TAB", true, false, false, () => rotateSidebar(1))
registerBind("TAB", true, true, false, () => rotateSidebar(-1))

// Ctrl + Q to open Queue page
// registerBind("Q", true, false, false, clickQueueButton)

const { History } = Spicetify.Platform
// Shift + H and Shift + L to go back and forward page
registerBind("H", false, true, false, History.goBack)
registerBind("L", false, true, false, History.goForward)

// J and K to vertically scroll app
registerBind("J", false, false, false, () => appScroll(1))
registerBind("K", false, false, false, () => appScroll(-1))

// G and Shift + G to scroll to top and to bottom
registerBind("G", false, false, false, () => appScrollY(0))
registerBind("G", false, true, false, () => appScrollY(Number.MAX_SAFE_INTEGER))

// M to Like/Unlike track
registerBind("M", false, false, false, Spicetify.Player.toggleHeart)

// Forward Slash to open search page
registerBind("/", false, false, false, e => {
    e.preventDefault()
    openPage("/search")
})

if (window.navigator.userAgent.indexOf("Win") === -1) {
    // CTRL + Arrow Left Next and CTRL + Arrow Right  Previous Song
    registerBind("ARROW_RIGHT", true, false, false, Spicetify.Player.next)
    registerBind("ARROW_LEFT", true, false, false, Spicetify.Player.back)

    // CTRL + Arrow Up Increase Volume CTRL + Arrow Down Decrease Volume
    registerBind("ARROW_UP", true, false, false, Spicetify.Player.increaseVolume)
    registerBind("ARROW_DOWN", true, false, false, Spicetify.Player.decreaseVolume)
}

mousetrap.bind(keyList, listenSneakKeys, "keypress")
registerBind("S", false, false, false, enterSneak)
mousetrap.bind(KEYS.ESCAPE, quitSneak)
