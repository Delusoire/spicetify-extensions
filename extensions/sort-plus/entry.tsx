import { option as o } from "fp-ts"
import { lookup } from "fp-ts/Record"
import { flow as f, flip } from "fp-ts/function"
import { sleep } from "../../shared/util"
;(async () => {
    const mustLoad = [
        "ContextMenu",
        "CosmosAsync",
        "GraphQL",
        "Locale",
        "Platform",
        "Player",
        "React",
        "ReactDOM",
        "showNotification",
    ]

    let timer = 0
    while (mustLoad.some(f(flip(lookup)(Spicetify), o.isNone)))
        await sleep((timer += 100))

    await import("./app")
})()
