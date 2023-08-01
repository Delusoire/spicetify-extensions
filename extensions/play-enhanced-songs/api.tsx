import { SpotifyURI } from "./util"

export const fetchPlaylistEnhancedSongs100 = async (uri: SpotifyURI, offset = 0) =>
    (await Spicetify.CosmosAsync.get(`https://spclient.wg.spotify.com/enhanced-view/v1/context/${uri}?&offset=${offset}&format=json`))
        .pageItems as any[]

export const fetchPlaylistEnhancedSongs = async (uri: SpotifyURI, offset = 0) => {
    const nextPageItems = await fetchPlaylistEnhancedSongs100(uri, offset)
    if (nextPageItems?.length < 100) return nextPageItems
    else return nextPageItems.concat(fetch)
}
