import { array as a, function as f, string as str } from "https://esm.sh/fp-ts"
import { fetchTrackLFMAPI, fetchWebSoundOfSpotifyPlaylist } from "../../shared/api.ts"
import { pMchain } from "../../shared/fp.ts"
import { titleCase, waitForElement } from "../../shared/util.ts"
import { getArtistsGenresOrRelated, updateArtistPage } from "./artistPage.ts"
import { genrePopup } from "./popup.tsx"
import { CONFIG } from "./settings.ts"

import "./assets/styles.scss"

const searchPlaylist = (globalThis.searchPlaylist = (query: string) =>
    Spicetify.Platform.History.push(`/search/${query}/playlists`))

export let spotifyGenres = new Array<string>()
export let lastFmTags = new Array<string>()

const updateGenreContainer = async (genres: string[]) => {
    genreContainer.innerHTML = await f.pipe(
        genres,
        a.map(async genre => {
            const uri = (await fetchWebSoundOfSpotifyPlaylist(genre)) ?? "#"
            return `<a href="${uri}" style="color: var(--spice-subtext); font-size: 12px">${titleCase(genre)}</a>`
        }),
        ps => Promise.all(ps),
        pMchain(a.intercalate(str.Monoid)(`<span>, </span>`)),
    )
    return genreContainer
}

const updateGenresUI = async (genres: string[]) => {
    const trackInfoContainer = await waitForElement("div.main-trackInfo-container")

    const { uri, metadata } = Spicetify.Player.data.item!

    if (metadata && Spicetify.URI.isTrack(uri) && genres.length) {
        trackInfoContainer?.appendChild(await updateGenreContainer(genres))

        lastFmTags = f.pipe(
            await fetchTrackLFMAPI(CONFIG.LFMApiKey, metadata.artist_name!, metadata.title!),
            ({ track }) => track.toptags.tag,
            a.map(({ name }) => name),
        )
    } else trackInfoContainer?.removeChild(genreContainer)
}

const getArtistUrisFromCurrentTrack = () => {
    const metadata = Spicetify.Player.data?.item.metadata ?? {}

    return [...Array(10).keys()]
        .map(k => metadata[("artist_uri" + (k ? `:${k}` : "")) as keyof typeof metadata])
        .filter(Boolean) as string[]
}

const updateGenres = async () => {
    const artistUris = getArtistUrisFromCurrentTrack()
    spotifyGenres = await getArtistsGenresOrRelated(artistUris)

    await updateGenresUI(spotifyGenres.slice(0, 5))
}

const genreContainer = document.createElement("div")
genreContainer.className = "main-trackInfo-genres ellipsis-one-line main-type-finale"
genreContainer.style.gridArea = "genres"
genreContainer.addEventListener("contextmenu", genrePopup)

Spicetify.Player.addEventListener("songchange", updateGenres)
updateGenres()

Spicetify.Platform.History.listen(updateArtistPage)
updateArtistPage(Spicetify.Platform.History.location)
