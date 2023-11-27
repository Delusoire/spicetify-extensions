import { anyPass } from "https://esm.sh/fp-ts-std/Predicate"
import { fetchWebTracksSpot, searchYoutube as searchYouTube } from "../../shared/api.ts"
import { parseAPITrackFromSpotify } from "../../shared/parse.ts"
import { SpotifyID, SpotifyURI, normalizeStr } from "../../shared/util.ts"
import { CONFIG } from "./settings.ts"

const { URI } = Spicetify

const YTVidIDCache = new Map<SpotifyID, string>()

const showOnYouTube = async (uri: SpotifyURI) => {
    const id = URI.fromString(uri)!.id!
    if (!YTVidIDCache.get(id)) {
        const track = parseAPITrackFromSpotify((await fetchWebTracksSpot([id]))[0])
        const searchString = `${track.artistName} - ${track.name} music video`

        let videos = []
        if (CONFIG.YouTubeApiKey)
            try {
                debugger
                videos = await searchYouTube(CONFIG.YouTubeApiKey, searchString)
            } catch (_) {}

        if (!videos?.length)
            return void window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`)

        const normalizedTrackName = normalizeStr(track.name)
        YTVidIDCache.set(
            id,
            videos.find(video => {
                normalizeStr(video.snippet.title).includes(normalizedTrackName)
            })?.id.videoId ?? videos[0].id.videoId,
        )
    }

    window.open(`https://www.youtube.com/watch?v=${YTVidIDCache.get(id)}`)
}

new Spicetify.ContextMenu.Item(
    "Search on YouTube",
    ([uri]) => showOnYouTube(uri),
    ([uri]) => anyPass([URI.isTrack])(uri),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>`,
).register()
