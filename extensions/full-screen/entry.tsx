import { option as o } from "fp-ts"
import { lookup } from "fp-ts/Record"
import { flow as f, flip } from "fp-ts/function"
import { sleep } from "../../shared/util"
;(async () => {
    const mustLoad = [
        "CosmosAsync",
        "LocalStorage",
        "Mousetrap",
        "Platform",
        "Playbar",
        "Player",
        "PopupModal",
        "showNotification",
        "SVGIcons",
        "URI",
    ]

    let timer = 0
    while (mustLoad.some(f(flip<string, typeof Spicetify, o.Option<any>>(lookup)(Spicetify), o.isNone)))
        await sleep((timer += 100))

    const app = await import("./src/app")
    app.default()
})()
