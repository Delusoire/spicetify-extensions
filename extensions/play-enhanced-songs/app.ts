import { fetchPlaylistEnhancedSongs } from "../../shared/platformApi.ts"
import { SpotifyURI } from "../../shared/util.ts"

const { URI } = Spicetify

const playEnhancedSongs = async (uri: SpotifyURI) => {
    const queue = await fetchPlaylistEnhancedSongs(uri)
    Spicetify.Platform.PlayerAPI.clearQueue()
    Spicetify.Platform.PlayerAPI.addToQueue(queue)
}

// Menu

new Spicetify.ContextMenu.Item(
    "Play enhanced songs",
    ([uri]) => playEnhancedSongs(uri),
    ([uri]) => URI.isPlaylistV1OrV2(uri),
    "enhance",
).register()
