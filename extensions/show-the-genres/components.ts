import { LitElement, PropertyValues, css, html } from "https://esm.sh/lit"
import { customElement, property, state } from "https://esm.sh/lit/decorators.js"
import { join } from "https://esm.sh/lit/directives/join.js"
import { map } from "https://esm.sh/lit/directives/map.js"

import { SpotifyURI, titleCase } from "../../shared/util.ts"

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
            font-size: 1rem;
        }
    `

    @property()
    genre = "Default"

    private openPlaylistsSearch() {
        Spicetify.Platform.History.push({ pathname: `/search/${this.genre}/playlists` })
    }

    protected render() {
        return html`<a href="#" @click=${this.openPlaylistsSearch}>${titleCase(this.genre)}</a>`
    }
}

@customElement("genre-container")
class _ArtistGenreContainer extends LitElement {
    @property()
    name = undefined as string | undefined

    @property()
    uri = undefined as SpotifyURI | undefined

    @state()
    genres = [] as string[]

    @property()
    fetchGenres = (uri: SpotifyURI) => Promise.resolve([] as string[])

    protected willUpdate(changedProperties: PropertyValues<this>) {
        if (changedProperties.has("uri")) {
            this.uri && this.fetchGenres(this.uri).then(genres => (this.genres = genres))
        }
    }

    protected render() {
        const artistGenreLinks = map(this.genres, genre => html`<genre-link genre=${genre} />`)
        const divider = html`<span>, </span>`

        return html`<div className="main-entityHeader-detailsText genre-container">
            ${this.name ? html`<span>${this.name} : </span>` : []} ${join(artistGenreLinks, () => divider)}
        </div>`
    }
}
