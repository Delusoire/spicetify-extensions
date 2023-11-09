import { anyPass } from "https://esm.sh/fp-ts-std/Predicate"
import { tupled } from "https://esm.sh/fp-ts/function"
import { fetchPlatPlaylistEnhancedSongs } from "../../shared/api.ts"
import { SpotifyURI } from "../../shared/util.ts"

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
