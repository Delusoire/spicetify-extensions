import { array as a, function as f } from "https://esm.sh/fp-ts"

import { LitElement, html } from "https://esm.sh/lit"
import { customElement, property } from "https://esm.sh/lit/decorators.js"
import { styleMap } from "https://esm.sh/lit/directives/style-map.js"
import { map } from "https://esm.sh/lit/directives/map.js"

import { CLICKABLE_ELMENT_SELECTOR, isElementInViewPort, isElementVisible } from "./util.ts"

export const mousetrapInst = Spicetify.Mousetrap()
export const KEY_LIST = "abcdefghijklmnopqrstuvwxyz".split("")

let shouldListenToSneakBinds = false
export let listeningToSneakBinds = false

@customElement("sneak-key")
class SneakKey extends LitElement {
    @property()
    key = "None"

    @property()
    target = document.body

    protected render() {
        const { x, y } = this.target.getBoundingClientRect()
        const styles = { top: x + "px", left: y + "px" }
        return html`<span style=${styleMap(styles)}>${this.key}</span>`
    }
}

@customElement("sneak-overlay")
export class SneakOverlay extends LitElement {
    @property()
    props = [] as Array<{ key: string; target: HTMLElement }>

    constructor() {
        super()

        requestAnimationFrame(() => {
            let k1 = 0,
                k2 = 0

            this.props = f.pipe(
                Array.from(document.querySelectorAll<HTMLElement>(CLICKABLE_ELMENT_SELECTOR)),
                a.filter(isElementVisible),
                a.filter(isElementInViewPort),
                a.map(target => {
                    const key = KEY_LIST[k1] + KEY_LIST[k2++]
                    if (k2 >= KEY_LIST.length) k1++, (k2 = 0)
                    return { target, key }
                }),
            )

            if (k1 + k2 === 0) this.remove()
            else shouldListenToSneakBinds = true
        })
    }

    disconnectedCallback() {
        super.disconnectedCallback()
        listeningToSneakBinds = false
        shouldListenToSneakBinds = false
    }

    update_props(key: KeyboardEvent["key"]) {
        if (!listeningToSneakBinds) {
            if (shouldListenToSneakBinds) {
                shouldListenToSneakBinds = false
                listeningToSneakBinds = true
            }
            return
        }

        this.props = this.props.filter(prop => {
            const [k1, ...ks] = prop.key.toLowerCase()
            if (k1 !== key) return false
            prop.key = ks.join("")
            return true
        })
        if (this.props.length === 1) this.props[0].target.click()
        if (this.props.length < 2) this.remove()
    }

    protected render() {
        return html`${map(this.props, i => html`<sneak-key key=${i.key} .target=${i.target} />`)}`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "sneak-key": SneakKey
        "sneak-overlay": SneakOverlay
    }
}
