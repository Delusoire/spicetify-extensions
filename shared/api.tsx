import { invokeNullary } from "fp-ts-std/Function"
import { chunksOf, flatten, map } from "fp-ts/Array"
import { flow as f, pipe as p } from "fp-ts/function"
import { async as as, async } from "./fp"
import { SpotifyID, SpotifyURI, escapeRegex } from "./util"

/*                          GraphQL                                           */

export const fetchAlbumGQL = async (uri: SpotifyURI, offset = 0, limit = 487) =>
    (
        await Spicetify.GraphQL.Request(
            Spicetify.GraphQL.Definitions.getAlbum,
            { uri, locale: Spicetify.Locale.getLocale(), offset, limit },
        )
    ).data.albumUnion as fetchAlbumGQLRes

type fetchArtistGQLRes = any
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

/*                          Spotify Web API                                   */

export const fetchArtistsSpotAPI50 = async (ids: SpotifyID[]) =>
    (
        await Spicetify.CosmosAsync.get(
            `https://api.spotify.com/v1/artists?ids=${ids.join(",")}`,
        )
    ).artists as fetchArtistsSpotAPI50Res

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

export const searchItemSpotAPI = async (q: string, type: string[]) =>
    Spicetify.CosmosAsync.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            q,
        )}&type=${type.join(",")}`,
    )

export const fetchSoundOfSpotifyPlaylist = async (genre: string) => {
    const name = `The Sound Of ${genre}`
    const re = new RegExp(`^${escapeRegex(name)}$`, "i")
    const res = await searchItemSpotAPI(name, ["playlist"])
    const item = res.playlists.items[0]
    return item?.owner.id === "thesoundsofspotify" && re.test(item.name)
        ? item.uri
        : null
}

/*                          Platform                                          */

export type fetchPlaylistAPIRes = any[]
export const fetchPlaylistAPI = async (uri: SpotifyURI) =>
    (await Spicetify.Platform.PlaylistAPI.getContents(uri))
        .items as fetchPlaylistAPIRes

export const createFolder = (name: string) =>
    Spicetify.Platform.RootlistAPI.createFolder(name)

export const likePlaylist = (uri: SpotifyURI) =>
    Spicetify.Platform.RootlistAPI.add([uri])

/*                          Other                                             */

type fetchArtistLikedTracksSPRes = any[]
export const fetchArtistLikedTracksSP = async (id: SpotifyID) =>
    (
        await Spicetify.CosmosAsync.get(
            `sp://core-collection/unstable/@/list/tracks/artist/${id}`,
        )
    ).items as fetchArtistLikedTracksSPRes

export type fetchPlaylistSPRes = any[]
export const fetchPlaylistSP = async (uri: SpotifyURI) =>
    (await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/${uri}`))
        .items as fetchPlaylistSPRes

export const fetchLikedPlaylistsSP = () =>
    Spicetify.CosmosAsync.get("sp://core-playlist/v1/rootlist")

export const createPlaylist = (name: string, uris: SpotifyURI[]) =>
    Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist", {
        operation: "create",
        playlist: true,
        uris,
        name,
    })

export const fetchPlaylistEnhancedSongs100 = async (
    uri: SpotifyURI,
    offset = 0,
) =>
    (
        await Spicetify.CosmosAsync.get(
            `https://spclient.wg.spotify.com/enhanced-view/v1/context/${uri}?&offset=${offset}&format=json`,
        )
    ).pageItems as any[]
export const fetchPlaylistEnhancedSongs = async (
    uri: SpotifyURI,
    offset = 0,
) => {
    const nextPageItems = await fetchPlaylistEnhancedSongs100(uri, offset)
    if (nextPageItems?.length < 100) return nextPageItems
    else return nextPageItems.concat(fetch)
}

/*                          Non Spotify                                       */

export const fetchTrackLFMAPI = async (
    LFMApiKey: string,
    artist: string,
    trackName: string,
    lastFmUsername = "",
) =>
    p(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LFMApiKey}&artist=${encodeURIComponent(
            artist,
        )}&track=${encodeURIComponent(
            trackName,
        )}&format=json&username=${encodeURIComponent(lastFmUsername)}`,
        fetch,
        as<Response, fetchTrackLFMAPIRes>(invokeNullary("json")),
    )

export const searchYoutube = async (
    YouTubeApiKey: string,
    searchString: string,
) =>
    (
        await (
            await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(
                    searchString,
                )}&type=video&key=${YouTubeApiKey}`,
            )
        ).json()
    ).items as any[]

/*                          Types                                             */

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
        mbid: string
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
            mbid: string
            url: string
            image: Array<{
                "#text": string
                size: string
            }>
            "@attr": {
                position: string
            }
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
