import { fetchPlaylistEnhancedSongs } from "../../shared/platformApi.ts"
import { SpotifyURI } from "../../shared/util.ts"

const { URI, ContextMenu } = Spicetify
const { PlayerAPI } = Spicetify.Platform

const playEnhancedSongs = async (uri: SpotifyURI) => {
    const queue = await fetchPlaylistEnhancedSongs(uri)
    PlayerAPI.clearQueue()
    PlayerAPI.addToQueue(queue)
}

// Menu

new ContextMenu.Item(
    "Play enhanced songs",
    ([uri]) => playEnhancedSongs(uri),
    ([uri]) => URI.isPlaylistV1OrV2(uri),
    "enhance",
).register()
