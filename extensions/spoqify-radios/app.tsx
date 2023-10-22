export default {}
import { tupled } from "fp-ts/function"
import { SpotifyLoc, SpotifyURI } from "../../shared/util"
import { CONFIG } from "./settings"
import { anyPass } from "fp-ts-std/Predicate"

const { URI } = Spicetify

const createAnonRadio = (uri: SpotifyURI) => {
    const sse = new EventSource(`https://open.spoqify.com/anonymize?url=${uri.substring(8)}`)
    sse.addEventListener("done", e => {
        sse.close()
        const anonUri = URI.fromString(e.data)

        Spicetify.Platform.History.push(anonUri.toURLPath(true))
        Spicetify.Platform.PlaylistAPI.add(anonUri.toURI(), SpotifyLoc.after.fromUri(CONFIG.anonymizedRadiosFolderUri))
    })
}

new Spicetify.ContextMenu.Item(
    "Create anonymized radio",
    tupled(createAnonRadio) as any,
    tupled(anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2, URI.isTrack])) as any,
    "podcasts",
).register()