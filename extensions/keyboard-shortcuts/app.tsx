import { enterSneak, keyList, listenSneakKeys, mousetrap, quitSneak } from "./sneak"
import { Bind, appScroll, appScrollY, openPage, rotateSidebar } from "./util"

import "./assets/styles.scss"
import { toggleLiked } from "../../shared/util"

const { KEYS } = Spicetify.Keyboard

const binds = [
    new Bind("S", enterSneak),
    new Bind("S", async () => {
        await Spicetify.Platform.UserAPI._product_state.putValues({ pairs: { "app-developer": "2" } })
        Spicetify.Platform.UpdateAPI.applyUpdate()
    }).setShift(true),
    new Bind("TAB", () => rotateSidebar(1)),
    new Bind("TAB", () => rotateSidebar(-1)).setShift(true),
    new Bind("H", Spicetify.Platform.History.goBack).setShift(true),
    new Bind("L", Spicetify.Platform.History.goForward).setShift(true),
    new Bind("J", () => appScroll(1)),
    new Bind("K", () => appScroll(-1)),
    new Bind("G", () => appScrollY(0)),
    new Bind("G", () => appScrollY(Number.MAX_SAFE_INTEGER)).setShift(true),
    new Bind("M", () => toggleLiked([Spicetify.Player.data.item.uri])),
    new Bind("/", e => {
        e.preventDefault()
        openPage("/search")
    }),
]

binds.map(bind => bind.register())

mousetrap.bind(keyList, listenSneakKeys, "keypress")
mousetrap.bind(KEYS.ESCAPE, quitSneak)
