import { toggleTracksLiked } from "../../shared/platformApi.ts"
import { KEY_LIST, _SneakOverlay, mousetrapInst } from "./sneak.ts"
import { Bind, appScroll, appScrollY, openPage, rotateSidebar } from "./util.ts"

const { Keyboard, Player } = Spicetify
const { UserAPI, UpdateAPI, History } = Spicetify.Platform

let sneakOverlay: _SneakOverlay

const binds = [
    new Bind("s", () => {
        sneakOverlay = document.createElement("sneak-overlay")
        document.body.append(sneakOverlay)
    }),
    new Bind("s", async () => {
        await UserAPI._product_state_service.putValues({ pairs: { "app-developer": "2" } })
        UpdateAPI.applyUpdate()
    }).setShift(true),
    new Bind("tab", () => rotateSidebar(1)),
    new Bind("tab", () => rotateSidebar(-1)).setShift(true),
    new Bind("h", History.goBack).setShift(true),
    new Bind("l", History.goForward).setShift(true),
    new Bind("j", () => appScroll(1)),
    new Bind("k", () => appScroll(-1)),
    new Bind("g", () => appScrollY(0)),
    new Bind("g", () => appScrollY(Number.MAX_SAFE_INTEGER)).setShift(true),
    new Bind("m", () => Player.data?.item.uri && toggleTracksLiked([Player.data?.item.uri])),
    new Bind("/", e => {
        e.preventDefault()
        openPage("/search")
    }),
]

binds.map(bind => bind.register())

mousetrapInst.bind(KEY_LIST, (e: KeyboardEvent) => sneakOverlay.updateProps(e.key), "keypress")
mousetrapInst.bind(Keyboard.KEYS.ESCAPE, () => sneakOverlay?.remove())
