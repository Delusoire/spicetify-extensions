import {
    addPlaylistTracks,
    createPlaylist,
    fetchFolder,
    fetchPlaylistContents,
    removePlaylistTracks,
    setPlaylistVisibility,
    setTracksLiked,
} from "../../shared/platformApi.ts"
import { SpotifyLoc, SpotifyURI } from "../../shared/util.ts"

import { updateCollectionControls, updateNowPlayingControls, updateTrackListControls } from "./controls.tsx"
import { CONFIG } from "./settings.ts"
import { getNowPlayingBar } from "./util.ts"
import { _, fp } from "../../shared/deps.ts"

const { URI } = Spicetify
const { History, PlayerAPI } = Spicetify.Platform

export const loadRatings = async () => {
    const ratingsFolder = await fetchFolder(CONFIG.ratingsFolderUri)

    playlistUris = ratingsFolder.items
        .map(p => [p.uri, Number(p.name)] as const)
        .reduce((uris, [uri, rating]) => {
            uris[rating] = uri
            return uris
        }, [] as string[])

    const playlists = await Promise.all(playlistUris.map(fetchPlaylistContents))
    global.tracksRatings = tracksRatings = playlists
        .flatMap((tracks, rating) => tracks?.map(t => [t.uri, rating] as const) ?? [])
        .reduce(
            (acc, [trackUri, rating]) =>
                Object.assign(acc, {
                    [trackUri]: Math.max(rating, acc[trackUri] ?? 0),
                }),
            {} as Record<string, number>,
        )
}

export const toggleRating = async (uri: SpotifyURI, rating: number) => {
    const currentRating = tracksRatings[uri]

    if (currentRating === rating) rating = 0

    if (currentRating) {
        const playlistIds = _.compact(playlistUris.slice(0, currentRating + 1)).map<string>(
            playlistUri => URI.fromString(playlistUri).id,
        )

        for (const playlistId of playlistIds) {
            removePlaylistTracks(playlistId, [{ uri, uid: "" } as { uid: string }])
        }
    }

    tracksRatings[uri] = rating

    if (rating > 0) {
        let playlistUri = playlistUris[rating] as string | undefined | null

        if (!playlistUri) {
            playlistUri = (await createPlaylist(
                rating.toFixed(0),
                SpotifyLoc.after.fromUri(CONFIG.ratingsFolderUri),
            )) as string
            setPlaylistVisibility(playlistUri, false)
            playlistUris[rating] = playlistUri
        }

        addPlaylistTracks(playlistUri, [uri])

        if (rating >= Number(CONFIG.heartThreshold)) {
            setTracksLiked([uri], true)
        }
    }

    const npTrack = PlayerAPI._state.item?.uri
    if (npTrack === uri) {
        updateNowPlayingControls(npTrack, false)

        //TODO: clean this
        {
            new MutationObserver((_, observer) => {
                observer.disconnect()
                if (npTrack !== uri) return
                updateNowPlayingControls(npTrack, false)
            }).observe(getNowPlayingBar(), {
                subtree: true,
            })
        }
    }

    //TODO: Optimize this, find a way to directly target the pbs for that uri
    updateTrackListControls()
    const { pathname } = History.location
    updateCollectionControls(URI.fromString(pathname).toString())
}

export let playlistUris: SpotifyURI[] = []
export let tracksRatings: Record<SpotifyURI, number> = {}
