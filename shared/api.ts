import { AccessToken, SpotifyApi } from "https://esm.sh/@fostertheweb/spotify-web-api-ts-sdk"

import { _ } from "./deps.ts"

const { CosmosAsync } = Spicetify

export const spotifyApi = SpotifyApi.withAccessToken("client-id", {} as AccessToken, {
    // @ts-ignore
    fetch(url, opts) {
        const { method } = opts!
        // @ts-ignore
        return CosmosAsync.resolve(method, url)
    },
    deserializer: {
        deserialize(res) {
            return (res as unknown as Spicetify.CosmosAsync.Response).body
        },
    },
})

/*                          Spotify Web API                                   */

export const fetchWebSoundOfSpotifyPlaylist = async (genre: string) => {
    const name = `The Sound Of ${genre}`
    const re = new RegExp(`^${_.escapeRegExp(name)}$`, "i")
    const res = await spotifyApi.search(name, ["playlist"])
    const item = res.playlists.items.find(item => item?.owner.id === "thesoundsofspotify" && re.test(item.name))
    return item?.uri
}

/*                          Last FM                                       */

export interface fetchLastFMTrackResMinimal {
    track: {
        name: string
        mbid: string
        url: string
        duration: string
        listeners: string
        playcount: string
        artist: {
            name: string
            mbid: string
            url: string
        }
        album: {
            artist: string
            title: string
            mbid: string
            url: string
        }
        userplaycount: string
        userloved: string
        toptags: {
            tag: Array<{
                name: string
                url: string
            }>
        }
        wiki: {
            published: string
            summary: string
            content: string
        }
    }
}

export const fetchLastFMTrack = async (LFMApiKey: string, artist: string, trackName: string, lastFmUsername = "") => {
    const url = new URL("https://ws.audioscrobbler.com/2.0/")
    url.searchParams.append("method", "track.getInfo")
    url.searchParams.append("api_key", LFMApiKey)
    url.searchParams.append("artist", artist)
    url.searchParams.append("track", trackName)
    url.searchParams.append("format", "json")
    url.searchParams.append("username", lastFmUsername)

    const res = (await fetch(url).then(res => res.json())) as fetchLastFMTrackResMinimal

    return res.track
}

/*                          Youtube                                       */

export interface SearchYoutubeResMinimal {
    items: Array<{
        id: {
            videoId: string
        }
        snippet: {
            publishedAt: string
            channelId: string
            title: string
            description: string
            channelTitle: string
            publishTime: string
        }
    }>
}

export const searchYoutube = async (YouTubeApiKey: string, searchString: string) => {
    const url = new URL("https://www.googleapis.com/youtube/v3/search")
    url.searchParams.append("part", "snippet")
    url.searchParams.append("maxResults", "10")
    url.searchParams.append("q", searchString)
    url.searchParams.append("type", "video")
    url.searchParams.append("key", YouTubeApiKey)

    return (await fetch(url).then(res => res.json())) as SearchYoutubeResMinimal
}
