import { array as a, string as str } from "fp-ts"
import { prepend } from "fp-ts-std/String"
import { flow as f, pipe as p } from "fp-ts/function"
import {
    fetchArtistRelatedGQL,
    fetchArtistsSpotAPI50,
    fetchSoundOfSpotifyPlaylist,
} from "../../shared/api"
import { PromiseMchain } from "../../shared/fp"
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
        await getArtistsGenresOrRelated([uri]),
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
        PromiseMchain(a.intercalate(str.Monoid)(`<span>, </span>`)),
        PromiseMchain(prepend(`<span>Artist Genres : </span>`)),
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

export const getArtistsGenresOrRelated = async (
    artistsUris: SpotifyURI[],
    src = null,
) => {
    const getArtistsGenres: (artistsUris: SpotifyURI[]) => Promise<string[]> =
        f(
            a.map(uri => parseUri(uri).id),
            fetchArtistsSpotAPI50,
            PromiseMchain(a.flatMap(artist => artist.genres)),
            PromiseMchain(a.uniq(str.Eq)),
        )

    const allGenres = await getArtistsGenres(artistsUris)

    return allGenres.length
        ? allGenres
        : await p(
              artistsUris[0],
              fetchArtistRelatedGQL,
              PromiseMchain(a.map(a => a.uri)),
              PromiseMchain(a.chunksOf(5)),
              PromiseMchain(
                  a.reduce(
                      Promise.resolve([] as string[]),
                      async (acc, arr5uris) =>
                          (
                              await acc
                          ).length
                              ? await acc
                              : await getArtistsGenres(arr5uris),
                  ),
              ),
          )
}
