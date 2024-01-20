import { LitElement, css, html } from "https://esm.sh/lit"
import { customElement, property } from "https://esm.sh/lit/decorators.js"
import { map } from "https://esm.sh/lit/directives/map.js"

import { Playlist } from "./util.ts"

declare global {
    interface HTMLElementTagNameMap {
        ["label-container"]: LabelContainer
        ["label-wrapper"]: LabelWrapper
    }
}

@customElement("label-container")
class LabelContainer extends LitElement {
    static styles = css`
        .labels-container {
            height: var(--row-height);
            align-items: center;
            display: flex;
            overflow: hidden;
            gap: 5px;
        }
    `

    @property({ type: Array })
    playlists = new Array<Playlist>()

    render() {
        return html`<div class="labels-container">
            ${map(this.playlists, playlist => html`<label-wrapper playlist=${playlist} />`)}
        </div>`
    }
}

@customElement("label-wrapper")
class LabelWrapper extends LitElement {
    static styles = css`
        :host {
            position: relative;
            height: 24px;
        }
        img {
            width: 24px;
            height: 100%;
            object-fit: cover;
            border-radius: 2px;
        }
    `

    @property()
    playlist = {} as Playlist

    render() {
        return html`<img src=${this.playlist.images[0].url} />`
    }
}
