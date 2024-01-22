import { searchYoutube, spotifyApi } from "../../shared/api.ts"
import { _ } from "../../shared/deps.ts"
import { parseWebAPITrack } from "../../shared/parse.ts"
import { SpotifyID, SpotifyURI, normalizeStr } from "../../shared/util.ts"

import { CONFIG } from "./settings.ts"

const { URI, ContextMenu } = Spicetify

const YTVidIDCache = new Map<SpotifyID, string>()

const showOnYouTube = async (uri: SpotifyURI) => {
    const id = URI.fromString(uri)!.id!
    if (!YTVidIDCache.get(id)) {
        const track = parseWebAPITrack(await spotifyApi.tracks.get(id))
        const searchString = `${track.artistName} - ${track.name} music video`

        try {
            const videos = await searchYoutube(CONFIG.YouTubeApiKey, searchString).then(res => res.items)
            const normalizedTrackName = normalizeStr(track.name)

            const video =
                videos.find(video => {
                    normalizeStr(video.snippet.title).includes(normalizedTrackName)
                }) ?? videos[0]

            YTVidIDCache.set(id, video.id.videoId)

            window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`)
        } catch (_) {
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`)
        }
    }
}

const item = new ContextMenu.Item(
    "Search on YouTube",
    ([uri]) => showOnYouTube(uri),
    ([uri]) => _.overSome([URI.isTrack])(uri),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>`,
).register()
globalThis.item = item
