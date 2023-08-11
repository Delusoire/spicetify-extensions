import { option as o } from "fp-ts"
import { lookup } from "fp-ts/Record"
import { flow as f, flip } from "fp-ts/function"
import { mustLoadForApi } from "../../shared/api"
import { mustLoadForSettings } from "../../shared/settings"
import { mustLoadForUtil, sleep } from "../../shared/util"
;(async () => {
    const mustLoad = ["Player", "showNotification", ...mustLoadForApi, ...mustLoadForSettings, ...mustLoadForUtil]

    let timer = 0
    while (mustLoad.some(f(flip<string, typeof Spicetify, o.Option<any>>(lookup)(Spicetify), o.isNone)))
        await sleep((timer += 100))

    await import("./app")
})()
