import { chunksOf, flatten, map } from "fp-ts/Array"
import { flow as f, pipe as p } from "fp-ts/function"
import { CONFIG } from "./settings"
import { SpotifyID, SpotifyURI } from "./util"
import { invokeNullary } from "fp-ts-std/Function"
import { async } from "./fp"

export const fetchAlbumGQL = async (uri: SpotifyURI, offset = 0, limit = 487) =>
    (
        await Spicetify.GraphQL.Request(
            Spicetify.GraphQL.Definitions.getAlbum,
            { uri, locale: Spicetify.Locale.getLocale(), offset, limit },
        )
    ).data.albumUnion as fetchAlbumGQLRes

export type fetchArtistGQLRes = any
export const fetchArtistGQL = async (uri: SpotifyURI) =>
    (
        await Spicetify.GraphQL.Request(
            Spicetify.GraphQL.Definitions.queryArtistOverview,
            {
                uri,
                locale: Spicetify.Locale.getLocale(),
                includePrerelease: true,
            },
        )
    ).data.artistUnion as fetchArtistGQLRes

export type fetchArtistLikedTracksSPRes = any[]
export const fetchArtistLikedTracksSP = async (id: SpotifyID) =>
    (
        await Spicetify.CosmosAsync.get(
            `sp://core-collection/unstable/@/list/tracks/artist/${id}`,
        )
    ).items as fetchArtistLikedTracksSPRes

export type fetchPlaylistAPIRes = any[]
export const fetchPlaylistAPI = async (uri: SpotifyURI) =>
    (await Spicetify.Platform.PlaylistAPI.getContents(uri))
        .items as fetchPlaylistAPIRes

export type fetchPlaylistSPRes = any[]
export const fetchPlaylistSP = async (uri: SpotifyURI) =>
    (await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/${uri}`))
        .items as fetchPlaylistSPRes

export type fetchTracksSpotAPI50Res = any[]
export const fetchTracksSpotAPI50 = async (ids: SpotifyID[]) =>
    (
        await Spicetify.CosmosAsync.get(
            `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`,
        )
    ).tracks as fetchTracksSpotAPI50Res

export const fetchTracksSpotAPI = f(
    chunksOf(50)<SpotifyID>,
    map(fetchTracksSpotAPI50),
    x => Promise.all(x),
    async(flatten<fetchTracksSpotAPI50Res>),
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
        async(invokeNullary("json")),
    )
/*
export const searchYoutube = async (searchString: string) =>
    (
        await (
            await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(
                    searchString,
                )}&type=video&key=${CONFIG.YouTubeApiKey}`,
            )
        ).json()
    ).items as any[]
*/
// HELL

export interface fetchAlbumGQLRes {
    __typename: string
    uri: string
    name: string
    artists: {
        totalCount: number
        items: Array<{
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
            sharingInfo: {
                shareUrl: string
            }
        }>
    }
    coverArt: {
        extractedColors: {
            colorRaw: {
                hex: string
            }
            colorLight: {
                hex: string
            }
            colorDark: {
                hex: string
            }
        }
        sources: Array<{
            url: string
            width: number
            height: number
        }>
    }
    discs: {
        totalCount: number
        items: Array<{
            number: number
            tracks: {
                totalCount: number
            }
        }>
    }
    releases: {
        totalCount: number
        items: Array<{
            uri: string
            name: string
        }>
    }
    type: string
    date: {
        isoString: string
        precision: string
    }
    playability: {
        playable: boolean
        reason: string
    }
    label: string
    copyright: {
        totalCount: number
        items: Array<{
            type: string
            text: string
        }>
    }
    courtesyLine: string
    saved: boolean
    sharingInfo: {
        shareUrl: string
        shareId: string
    }
    tracks: {
        totalCount: number
        items: Array<{
            uid: string
            track: {
                saved: boolean
                uri: string
                name: string
                playcount: string
                discNumber: number
                trackNumber: number
                contentRating: {
                    label: string
                }
                relinkingInformation: any
                duration: {
                    totalMilliseconds: number
                }
                playability: {
                    playable: boolean
                }
                artists: {
                    items: Array<{
                        uri: string
                        profile: {
                            name: string
                        }
                    }>
                }
            }
        }>
    }

    moreAlbumsByArtist: {
        items: Array<{
            discography: {
                popularReleasesAlbums: {
                    items: Array<{
                        id: string
                        uri: string
                        name: string
                        date: {
                            year: number
                        }
                        coverArt: {
                            sources: Array<{
                                url: string
                                width: number
                                height: number
                            }>
                        }
                        playability: {
                            playable: boolean
                            reason: string
                        }
                        sharingInfo: {
                            shareId: string
                            shareUrl: string
                        }
                        type: string
                    }>
                }
            }
        }>
    }
}

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
