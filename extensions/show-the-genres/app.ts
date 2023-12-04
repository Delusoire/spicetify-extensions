import { array as a, function as f, string as str } from "https://esm.sh/fp-ts"

import { fetchGQLArtistRelated, fetchLastFMTrack, spotifyApi } from "../../shared/api.ts"
import { pMchain } from "../../shared/fp.ts"
import { SpotifyURI, onHistoryChanged, onSongChanged, waitForElement } from "../../shared/util.ts"

import { CONFIG } from "./settings.ts"

import "./assets/styles.scss"
import "./components.ts"

const fetchLastFMTags = async (uri: SpotifyURI) => {
    const uid = Spicetify.URI.fromString(uri).id!
    const { name, artists } = await spotifyApi.tracks.get(uid)
    const artistNames = artists.map(artist => artist.name)
    const { track } = await fetchLastFMTrack(CONFIG.LFMApiKey, artistNames[0], name)
    const tags = track.toptags.tag.map(tag => tag.name)

    const deletedTagRegex = /-\d{13}/
    const blacklistedTags = ["MySpotigramBot"]
    return tags.filter(tag => !deletedTagRegex.test(tag) && !blacklistedTags.includes(tag))
}

const nowPlayingGenreContainerEl = document.createElement("genre-container")
nowPlayingGenreContainerEl.fetchGenres = fetchLastFMTags
nowPlayingGenreContainerEl.className += " ellipsis-one-line main-type-finale"
nowPlayingGenreContainerEl.style.gridArea = "genres"
;(async () => {
    const trackInfoContainer = await waitForElement("div.main-trackInfo-container")
    trackInfoContainer!.appendChild(nowPlayingGenreContainerEl)
})()

onSongChanged(state => (nowPlayingGenreContainerEl.uri = state?.item.uri))

const getArtistsGenresOrRelated = async (artistsUris: SpotifyURI[]) => {
    const getArtistsGenres: (artistsUris: SpotifyURI[]) => Promise<string[]> = f.flow(
        a.map(uri => Spicetify.URI.fromString(uri)!.id!),
        spotifyApi.artists.get,
        pMchain(a.flatMap(artist => artist.genres)),
        pMchain(a.uniq(str.Eq)),
    )

    const allGenres = await getArtistsGenres(artistsUris)

    return allGenres.length
        ? allGenres
        : await f.pipe(
              artistsUris[0],
              fetchGQLArtistRelated,
              pMchain(a.map(a => a.uri)),
              pMchain(a.chunksOf(5)),
              pMchain(
                  a.reduce(Promise.resolve([] as string[]), async (acc, arr5uris) =>
                      (await acc).length ? await acc : await getArtistsGenres(arr5uris),
                  ),
              ),
          )
}

const updateArtistPage = async (uri: SpotifyURI) => {
    const artistGenreContainerEl = document.createElement("genre-container")
    artistGenreContainerEl.name = "Artist Genres"
    artistGenreContainerEl.uri = uri.toString()
    artistGenreContainerEl.fetchGenres = uri => getArtistsGenresOrRelated([uri])

    const lastHeaderTextEl = document.querySelector("div.main-entityHeader-headerText")
    const headerTextEl = await waitForElement(
        "div.main-entityHeader-headerText",
        undefined,
        undefined,
        lastHeaderTextEl,
    )
    const headerTextDetailsEl = await waitForElement("span.main-entityHeader-detailsText")
    headerTextEl?.insertBefore(artistGenreContainerEl, headerTextDetailsEl)
}

onHistoryChanged(uri => Spicetify.URI.isArtist(uri), updateArtistPage)
