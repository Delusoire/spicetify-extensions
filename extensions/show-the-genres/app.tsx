export default {}

import { array as a, string as str } from "fp-ts"
import { pipe as p } from "fp-ts/function"
import { fetchSoundOfSpotifyPlaylist, fetchTrackLFMAPI } from "./api"
import { getArtistsGenres, updateArtistPage } from "./artistPage"
import { async } from "./fp"
import { genrePopup } from "./popup"
import "./popup.css"
import {
    SpotifyURI,
    SpotifyURIType,
    isUri,
    parseUri,
    titleCase,
    waitForElement,
} from "./util"

const searchPlaylist = (query: string) =>
    Spicetify.Platform.History.push(`/search/${query}/playlists`)
// @ts-ignore
window.searchPlaylist = searchPlaylist

export let spotifyGenres = new Array<string>()
export let lastFmTags = new Array<string>()

const updateGenreContainer = async (genres: string[]) => {
    genreContainer.innerHTML = await p(
        genres,
        a.map(async genre => {
            const uri = await fetchSoundOfSpotifyPlaylist(genre)
            return `<a ${
                uri === null
                    ? `href="#" onclick="genrePopup()"`
                    : `href="${uri}"`
            } style="color: var(--spice-subtext); font-size: 12px">${titleCase(
                genre,
            )}</a>`
        }),
        x => Promise.all(x),
        async(a.intercalate(str.Monoid)(`<span>, </span>`)),
    )
    return genreContainer
}

const updateGenresUI = async (genres: string[]) => {
    const trackInfoContainer = await waitForElement(
        "div.main-trackInfo-container",
    )

    const { uri, metadata } = Spicetify.Player.data
        .track as Spicetify.ProvidedTrack

    if (
        metadata &&
        !metadata.is_local &&
        isUri(uri) &&
        parseUri(uri).type === SpotifyURIType.TRACK &&
        genres.length
    ) {
        trackInfoContainer?.appendChild(await updateGenreContainer(genres))

        lastFmTags = p(
            await fetchTrackLFMAPI(
                metadata.artist_name as string,
                metadata.title as string,
            ),
            ({ track }) => track.toptags.tag,
            a.map(({ name }) => name),
        )
    } else trackInfoContainer?.removeChild(genreContainer)
}

const getArtistUrisFromCurrentTrack = () => {
    let metadata = Spicetify.Player.data?.track?.metadata ?? {}

    return [...Array(10).keys()]
        .map(k => metadata["artist_uri" + (k ? `:${k}` : "")])
        .filter(Boolean) as string[]
}

const updateGenres = async () => {
    const artistUris = getArtistUrisFromCurrentTrack()
    spotifyGenres = await getArtistsGenres(artistUris)

    await updateGenresUI(spotifyGenres.slice(0, 5))
}

const genreContainer = document.createElement("div")
genreContainer.className =
    "main-trackInfo-genres ellipsis-one-line main-type-finale"
genreContainer.addEventListener("contextmenu", genrePopup)

Spicetify.Player.addEventListener("songchange", updateGenres)
updateGenres()

Spicetify.Platform.History.listen(updateArtistPage)
updateArtistPage(Spicetify.Platform.History.location)
