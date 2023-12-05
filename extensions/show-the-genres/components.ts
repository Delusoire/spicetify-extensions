import { LitElement, PropertyValues, css, html } from "https://esm.sh/lit"
import { customElement, property, state } from "https://esm.sh/lit/decorators.js"
import { join } from "https://esm.sh/lit/directives/join.js"
import { map } from "https://esm.sh/lit/directives/map.js"

import { SpotifyURI } from "../../shared/util.ts"
import { _ } from "../../shared/deps.ts"

const { History } = Spicetify.Platform

declare global {
    interface HTMLElementTagNameMap {
        "genre-container": _ArtistGenreContainer
        "genre-link": _GenreLink
    }
}

@customElement("genre-link")
class _GenreLink extends LitElement {
    static styles = css`
        :host > a {
            color: var(--spice-subtext);
            font-size: var(--genre-link-size);
        }
    `

    @property()
    genre = "Default"

    private openPlaylistsSearch() {
        History.push({ pathname: `/search/${this.genre}/playlists` })
    }

    protected render() {
        return html`<a href="#" @click=${this.openPlaylistsSearch}>${_.startCase(this.genre)}</a>`
    }
}

@customElement("genre-container")
class _ArtistGenreContainer extends LitElement {
    @property()
    name?: string = undefined

    @property()
    uri?: SpotifyURI = undefined

    @state()
    genres: string[] = []

    @property()
    isSmall = true

    @property()
    fetchGenres = (uri: SpotifyURI) => Promise.resolve([uri])

    protected willUpdate(changedProperties: PropertyValues<this>) {
        if (changedProperties.has("uri")) {
            this.uri && this.fetchGenres(this.uri).then(genres => (this.genres = genres))
        }
    }

    protected render() {
        const artistGenreLinks = map(this.genres, genre => html`<genre-link genre=${genre} />`)
        const divider = html`<span>, </span>`

        return html`<style>
                a {
                    --genre-link-size: ${this.isSmall ? "12px" : "1rem"};
                }
            </style>
            <div className="main-entityHeader-detailsText genre-container">
                ${this.name ? html`<span>${this.name} : </span>` : []} ${join(artistGenreLinks, () => divider)}
            </div>`
    }
}
