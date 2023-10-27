import { array as a } from "fp-ts"
import { pipe as p } from "fp-ts/function"
import {
    addPlatPlaylistTracks,
    createPlatPlaylist,
    fetchPlatFolder,
    fetchPlatPlaylistContents,
    removeWebPlaylistTracks,
    setPlatPlaylistVisibility,
} from "../../shared/api"
import { pMchain } from "../../shared/fp"
import { SpotifyLoc, SpotifyURI } from "../../shared/util"
import { CONFIG } from "./settings"
import { updateCollectionControls, updateNowPlayingControls, updateTrackListControls } from "./app"

export const loadRatings = async () => {
    const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri)

    playlistUris = p(
        ratingsFolder!.items!,
        a.map(p => [p.uri, Number(p.name!)] as [SpotifyURI, number]),
        a.reduce([] as SpotifyURI[], (uris, [uri, rating]) => ((uris[rating] = uri), uris)),
    )

    // @ts-ignore
    globalThis.tracksRatings = tracksRatings = await p(
        playlistUris,
        a.map(fetchPlatPlaylistContents),
        ps => Promise.all(ps), // Promise.all flips empty to undefined
        pMchain(a.map(tracks => tracks ?? [])),
        pMchain(a.map(a.map(t => t.uri))),
        pMchain(a.flatMap((trackUris, rating) => trackUris.map(trackUri => [trackUri, rating] as const))),
        pMchain(
            a.reduce({} as Record<string, number>, (acc, [trackUri, rating]) =>
                Object.assign(acc, {
                    [trackUri]: Math.max(rating, acc[trackUri] ?? 0),
                }),
            ),
        ),
    )
}

export const toggleRating = async (uri: SpotifyURI, rating: number) => {
    const currentRating = tracksRatings[uri]

    if (currentRating === rating) rating = 0

    if (currentRating) {
        p(
            playlistUris.slice(0, currentRating + 1),
            a.filter(Boolean),
            a.map(playlistUri => Spicetify.URI.fromString(playlistUri).id!),
            a.map(playlistId => removeWebPlaylistTracks(playlistId, [uri])),
        )
    }

    tracksRatings[uri] = rating

    if (rating > 0) {
        let playlistUri = playlistUris[rating]

        if (!playlistUri) {
            playlistUri = await createPlatPlaylist(rating.toFixed(0), SpotifyLoc.after.fromUri(CONFIG.ratingsFolderUri))
            setPlatPlaylistVisibility(playlistUri, false)
            playlistUris[rating] = playlistUri
        }

        addPlatPlaylistTracks(playlistUri, [uri])
    }

    const npTrack = Spicetify.Player.data.track?.uri
    if (npTrack === uri) updateNowPlayingControls(npTrack)

    // TODO: Optimize this, find a way to directly target the pbs for that uri
    updateTrackListControls()
}

export let playlistUris: SpotifyURI[] = []
export let tracksRatings: Record<SpotifyURI, number> = {}
