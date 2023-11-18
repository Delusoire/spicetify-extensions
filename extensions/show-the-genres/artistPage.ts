import { array as a, function as f, string as str } from "https://esm.sh/fp-ts"
import { prepend } from "https://esm.sh/fp-ts-std/String"
import { fetchGQLArtistRelated, fetchWebArtistsSpot, fetchWebSoundOfSpotifyPlaylist } from "../../shared/api.ts"
import { pMchain } from "../../shared/fp.ts"
import { SpotifyURI, titleCase, waitForElement } from "../../shared/util.ts"

const { URI } = Spicetify

export const updateArtistPage = async ({ pathname }: { pathname: string }) => {
    const uri = URI.fromString(pathname)

    if (!URI.isArtist(uri!)) return

    // prepare new genreContainer
    const genreContainer = document.createElement("div")
    genreContainer.className = "main-entityHeader-detailsText genre-container"
    genreContainer.innerHTML = await f.pipe(
        await getArtistsGenresOrRelated([`${uri}`]),
        a.takeLeft(5),
        a.map(async genre => {
            const uri = await fetchWebSoundOfSpotifyPlaylist(genre)
            return `<a class="main-entityHeader-genreLink" ${
                uri === null
                    ? `href="#" data-value="${genre}" onclick="searchPlaylist(this.getAttribute('data-value'))`
                    : `href="${uri}"`
            } style="color: var(--spice-subtext); font-size: 1rem">${titleCase(genre)}</a>`
        }),
        ps => Promise.all(ps),
        pMchain(a.intercalate(str.Monoid)(`<span>, </span>`)),
        pMchain(prepend(`<span>Artist Genres : </span>`)),
    )

    document.querySelector(".genre-container")?.remove()

    const entityHeaderText = await waitForElement("div.main-entityHeader-headerText")
    entityHeaderText?.insertBefore(genreContainer, await waitForElement("span.main-entityHeader-detailsText"))
}

export const getArtistsGenresOrRelated = async (artistsUris: SpotifyURI[], src = null) => {
    const getArtistsGenres: (artistsUris: SpotifyURI[]) => Promise<string[]> = f.flow(
        a.map(uri => URI.fromString(uri)!.id!),
        fetchWebArtistsSpot,
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
