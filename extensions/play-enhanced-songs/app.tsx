export default {}

import { anyPass } from "fp-ts-std/Predicate"
import { tupled } from "fp-ts/function"
import { fetchPlatPlaylistEnhancedSongs } from "../../shared/api"
import { SpotifyURI } from "../../shared/util"

const { URI } = Spicetify

let queue = new Array<any>()
const playEnhancedSongs = async (uri: SpotifyURI) => {
    queue = await fetchPlatPlaylistEnhancedSongs(uri)
    Spicetify.Platform.PlayerAPI.clearQueue()
    Spicetify.Platform.PlayerAPI.addToQueue(queue)
}

// Menu

new Spicetify.ContextMenu.Item(
    "Play enhanced songs",
    tupled(playEnhancedSongs) as any,
    tupled(anyPass([URI.isPlaylistV1OrV2])) as any,
    "enhance",
).register()
