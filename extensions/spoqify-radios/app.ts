import { anyPass } from "https://esm.sh/fp-ts-std/Predicate"
import { SpotifyLoc, SpotifyURI } from "../../shared/util.ts"
import { CONFIG } from "./settings.ts"

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
    ([uri]) => createAnonRadio(uri),
    ([uri]) => anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2, URI.isTrack])(uri),
    "podcasts",
).register()
