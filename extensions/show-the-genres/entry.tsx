import { option as o } from "fp-ts"
import { lookup } from "fp-ts/Record"
import { flow as f, flip } from "fp-ts/function"
;(async () => {
    const mustLoad = [
        "CosmosAsync",
        "GraphQL",
        "Locale",
        "Platform",
        "Player",
        "PopupModal",
    ]

    const sleep = (ms: number) =>
        new Promise(resolve => setTimeout(resolve, ms))

    let timer = 0
    while (mustLoad.some(f(flip(lookup)(Spicetify), o.isNone)))
        await sleep((timer += 100))

    await import("./app")
})()
