import { array as ar, function as f } from "https://esm.sh/fp-ts"
import {
    addPlatPlaylistTracks,
    createPlatPlaylist,
    fetchPlatFolder,
    fetchPlatPlaylistContents,
    removePlatPlaylistTracks,
    setPlatPlaylistVisibility,
} from "../../shared/api.ts"
import { pMchain } from "../../shared/fp.ts"
import { SpotifyLoc, SpotifyURI } from "../../shared/util.ts"
import { updateCollectionControls, updateNowPlayingControls, updateTrackListControls } from "./controls.tsx"
import { CONFIG } from "./settings.ts"
import { getNowPlayingBar } from "./util.ts"

export const loadRatings = async () => {
    const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri)

    playlistUris = f.pipe(
        ratingsFolder!.items!,
        ar.map(p => [p.uri, Number(p.name!)] as [SpotifyURI, number]),
        ar.reduce([] as SpotifyURI[], (uris, [uri, rating]) => ((uris[rating] = uri), uris)),
    )

    // @ts-ignore
    globalThis.tracksRatings = tracksRatings = await f.pipe(
        playlistUris,
        ar.map(fetchPlatPlaylistContents),
        ps => Promise.all(ps), // Promise.all flips empty to undefined
        pMchain(ar.map(tracks => tracks ?? [])),
        pMchain(ar.map(ar.map(t => t.uri))),
        pMchain(ar.flatMap((trackUris, rating) => trackUris.map(trackUri => [trackUri, rating] as const))),
        pMchain(
            ar.reduce({} as Record<string, number>, (acc, [trackUri, rating]) =>
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
        f.pipe(
            playlistUris.slice(0, currentRating + 1),
            ar.filter(Boolean),
            ar.map(playlistUri => Spicetify.URI.fromString(playlistUri).id!),
            ar.map(playlistId => removePlatPlaylistTracks(playlistId, [{ uri, uid: "" } as { uid: string }])),
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

    const npTrack = Spicetify.Player?.data.track?.currentTrackUri
    if (npTrack === uri) {
        updateNowPlayingControls(npTrack, false)

        {
            const npTrack = Spicetify.Player?.data.track?.currentTrackUri

            const nowPlaylingControlsObserver = new MutationObserver(() => {
                if (npTrack === uri) {
                    nowPlaylingControlsObserver.disconnect()
                }

                updateNowPlayingControls(npTrack, false)
            })
            nowPlaylingControlsObserver.observe(getNowPlayingBar(), {
                subtree: true,
            })
        }
    }

    //TODO: Optimize this, find a way to directly target the pbs for that uri
    updateTrackListControls()
    const { pathname } = Spicetify.Platform.History.location
    updateCollectionControls(Spicetify.URI.fromString(pathname))
}

export let playlistUris: SpotifyURI[] = []
export let tracksRatings: Record<SpotifyURI, number> = {}
