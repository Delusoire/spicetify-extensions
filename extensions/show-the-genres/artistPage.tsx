import { array as a, string as str } from "fp-ts"
import { prepend } from "fp-ts-std/String"
import { pipe as p } from "fp-ts/function"
import {
    fetchArtistRelatedGQL,
    fetchArtistsSpotAPI50,
    fetchSoundOfSpotifyPlaylist,
} from "../../shared/api"
import { async } from "../../shared/fp"
import {
    SpotifyURI,
    SpotifyURIType,
    isUri,
    parseUri,
    titleCase,
    waitForElement,
} from "../../shared/util"
import "./popup.css"

export const updateArtistPage = async ({ pathname }: { pathname: string }) => {
    const uri = pathname.replaceAll("/", ":")

    if (!isUri(uri)) return

    let { type, id } = parseUri(uri)

    if (type !== SpotifyURIType.ARTIST) return

    // prepare new genreContainer
    const genreContainer = document.createElement("div")
    genreContainer.className = "main-entityHeader-detailsText genre-container"
    genreContainer.innerHTML = await p(
        await getArtistsGenres([uri]),
        a.takeLeft(5),
        a.map(async genre => {
            const uri = await fetchSoundOfSpotifyPlaylist(genre)
            return `<a class="main-entityHeader-genreLink" ${
                uri === null
                    ? `href="#" data-value="${genre}" onclick="searchPlaylist(this.getAttribute('data-value'))`
                    : `href="${uri}"`
            } style="color: var(--spice-subtext); font-size: 1rem">${titleCase(
                genre,
            )}</a>`
        }),
        x => Promise.all(x),
        async(a.intercalate(str.Monoid)(`<span>, </span>`)),
        async(prepend(`<span>Artist Genres : </span>`)),
    )

    // remove old genreContainer
    document.querySelector(".genre-container")?.remove()

    // insert new genreContainer
    const entityHeaderText = await waitForElement(
        "div.main-entityHeader-headerText",
    )

    entityHeaderText?.insertBefore(
        genreContainer,
        await waitForElement("span.main-entityHeader-detailsText"),
    )
}

export const getArtistsGenres = async (
    artistsUris: SpotifyURI[],
    src = null,
) => {
    const rec = async (artistsUris: SpotifyURI[]) =>
        p(
            artistsUris,
            a.map(uri => parseUri(uri).id),
            fetchArtistsSpotAPI50,
            async(a.flatMap(artist => artist.genres)),
            async(a.uniq(str.Eq)),
        )

    const allGenres = await rec(artistsUris)

    return allGenres.length
        ? allGenres
        : await p(
              await fetchArtistRelatedGQL(artistsUris[0]),
              a.map(a => a.uri),
              a.chunksOf(5),
              a.reduce(Promise.resolve([] as string[]), async (acc, arr5uris) =>
                  (await acc).length ? await acc : await rec(arr5uris),
              ),
          )
}
