import { invokeNullary } from "fp-ts-std/Function"
import { pipe as p } from "fp-ts/function"
import { async as as } from "./fp"
import { CONFIG } from "./settings"
import { SpotifyID, SpotifyURI } from "./util"
import { escapeRegex } from "./util"

export const fetchSoundOfSpotifyPlaylist = async (genre: string) => {
    const name = `The Sound Of ${genre}`
    const re = new RegExp(`^${escapeRegex(name)}$`, "i")
    const res = await searchItemSpotAPI(name, ["playlist"])
    const item = res.playlists.items[0]
    return item?.owner.id === "thesoundsofspotify" && re.test(item.name)
        ? item.uri
        : null
}

export const fetchArtistRelatedGQL = async (uri: SpotifyURI) =>
    (
        await Spicetify.GraphQL.Request(
            Spicetify.GraphQL.Definitions.queryArtistRelated,
            {
                uri,
                locale: Spicetify.Locale.getLocale(),
            },
        )
    ).data.artistUnion.relatedContent.relatedArtists
        .items as fetchArtistRelatedGQLRes

export const fetchArtistsSpotAPI50 = async (ids: SpotifyID[]) =>
    (
        await Spicetify.CosmosAsync.get(
            `https://api.spotify.com/v1/artists?ids=${ids.join(",")}`,
        )
    ).artists as fetchArtistsSpotAPI50Res

export const searchItemSpotAPI = async (q: string, type: string[]) =>
    Spicetify.CosmosAsync.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            q,
        )}&type=${type.join(",")}`,
    )

export const fetchTrackLFMAPI = async (
    artist: string,
    trackName: string,
    lastFmUsername = "",
) =>
    p(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${
            CONFIG.LFMApiKey
        }&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(
            trackName,
        )}&format=json&username=${encodeURIComponent(lastFmUsername)}`,
        fetch,
        as<Response, fetchTrackLFMAPIRes>(invokeNullary("json")),
    )

// HELL

export type fetchArtistRelatedGQLRes = Array<{
    id: string
    uri: string
    profile: {
        name: string
    }
    visuals: {
        avatarImage: {
            sources: Array<{
                url: string
                width: number
                height: number
            }>
        }
    }
}>

export type fetchArtistsSpotAPI50Res = Array<{
    external_urls: {
        spotify: string
    }
    followers: {
        href: null
        total: number
    }
    genres: string[]
    href: string
    id: string
    images: {
        height: number
        url: string
        width: number
    }[]
    name: string
    popularity: number
    type: string
    uri: string
}>

export interface fetchTrackLFMAPIRes {
    track: {
        name: string
        url: string
        duration: string
        streamable: {
            "#text": string
            fulltrack: string
        }
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
            url: string
            image: {
                "#text": string
                size: string
            }[]
        }
        toptags: {
            tag: Array<{
                name: string
                url: string
            }>
        }
    }
}
