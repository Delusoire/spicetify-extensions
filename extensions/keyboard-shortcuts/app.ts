import { togglePlatTrackLiked } from "../../shared/api.ts"
import { KEY_LIST, _SneakOverlay, mousetrapInst } from "./sneak.ts"
import { Bind, appScroll, appScrollY, openPage, rotateSidebar } from "./util.ts"

const { KEYS } = Spicetify.Keyboard

let sneakOverlay: _SneakOverlay

const binds = [
    new Bind("s", () => {
        sneakOverlay = document.createElement("sneak-overlay")
        document.body.append(sneakOverlay)
    }),
    new Bind("s", async () => {
        // product_state was renamed to product_state_service in Spotify 1.2.21
        const productState =
            Spicetify.Platform.UserAPI._product_state || Spicetify.Platform.UserAPI._product_state_service
        await productState.putValues({ pairs: { "app-developer": "2" } })
        Spicetify.Platform.UpdateAPI.applyUpdate()
    }).setShift(true),
    new Bind("tab", () => rotateSidebar(1)),
    new Bind("tab", () => rotateSidebar(-1)).setShift(true),
    new Bind("h", Spicetify.Platform.History.goBack).setShift(true),
    new Bind("l", Spicetify.Platform.History.goForward).setShift(true),
    new Bind("j", () => appScroll(1)),
    new Bind("k", () => appScroll(-1)),
    new Bind("g", () => appScrollY(0)),
    new Bind("g", () => appScrollY(Number.MAX_SAFE_INTEGER)).setShift(true),
    new Bind("m", () => Spicetify.Player.data?.item.uri && togglePlatTrackLiked([Spicetify.Player.data?.item.uri])),
    new Bind("/", e => {
        e.preventDefault()
        openPage("/search")
    }),
]

binds.map(bind => bind.register())

mousetrapInst.bind(KEY_LIST, (e: KeyboardEvent) => sneakOverlay.updateProps(e.key), "keypress")
mousetrapInst.bind(KEYS.ESCAPE, () => sneakOverlay?.remove())
