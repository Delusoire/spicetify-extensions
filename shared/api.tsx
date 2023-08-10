import { invokeNullary } from "fp-ts-std/Function"
import { pipe as p } from "fp-ts/function"
import { pMchain as as, chunckify } from "./fp"
import { SpotifyID, SpotifyLoc, SpotifyURI, escapeRegex } from "./util"

/*                          GraphQL                                           */

export const fetchAlbumGQL = async (uri: SpotifyURI, offset = 0, limit = 487) =>
    (
        await Spicetify.GraphQL.Request(
            Spicetify.GraphQL.Definitions.getAlbum,
            { uri, locale: Spicetify.Locale.getLocale(), offset, limit },
        )
    ).data.albumUnion as fetchGQLAlbumRes

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
        .items as fetchGQLArtistRelatedRes

/*                          Spotify Web API                                   */

export const fetchArtistsSpotAPI = chunckify(50)(
    async (ids: SpotifyID[]) =>
        (
            await Spicetify.CosmosAsync.get(
                `https://api.spotify.com/v1/artists?ids=${ids.join(",")}`,
            )
        ).artists as SpotApiArtist[],
)

export const fetchTracksSpotAPI = chunckify(50)(
    async (ids: SpotifyID[]) =>
        (
            await Spicetify.CosmosAsync.get(
                `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`,
            )
        ).tracks as SpotApiTrack[],
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

export const fetchPlatArtistLikedTracks = async (
    uri: SpotifyURI,
    offset = 0,
    limit = 100,
) =>
    (await Spicetify.Platform.LibraryAPI.getTracks({ uri, offset, limit }))
        .items as fetchPlatArtistLikedTracksRes

export const fetchRootlistContents = async (uri: SpotifyURI) =>
    (await Spicetify.Platform.PlaylistAPI.getContents(uri))
        .items as fetchPlaylistAPIRes

export const createFolder = (name: string, location: SpotifyLoc = {}) =>
    Spicetify.Platform.RootlistAPI.createFolder(name, location)

export const likePlaylist = (uri: SpotifyURI) =>
    Spicetify.Platform.RootlistAPI.add([uri])

/* Replaced by createPlaylistFromTracks
export const createPlaylist = (name: string) =>
    Spicetify.Platform.RootlistAPI.createPlaylist(name)
export const addTracksToPlaylist = (
    playlist: SpotifyURI,
    tracks: SpotifyURI[],
    location: SpotifyLoc = {},
) => Spicetify.Platform.PlaylistAPI.add(playlist, tracks, location)
*/
export const createPlaylistFromTracks = (name: string, tracks: SpotifyURI[]) =>
    Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist", {
        operation: "create",
        playlist: true,
        uris: tracks,
        name,
    })

export const setPlaylistVisibility = (
    playlist: SpotifyURI,
    visibleForAll: boolean,
) =>
    Spicetify.Platform.PlaylistPermissionsAPI.setBasePermission(
        playlist,
        visibleForAll ? "VIEWER" : "BLOCKED",
    )
export const setPlaylistPublished = (
    playlist: SpotifyURI,
    published: boolean,
) => Spicetify.Platform.RootlistAPI.setPublishedState(playlist, published)

export const fetchPlatLikedPlaylists = () =>
    Spicetify.Platform.RootlistAPI.getContents()

/*                          Other                                             */

export const fetchPlaylistEnhancedSongs300 = async (
    uri: SpotifyURI,
    offset = 0,
    limit = 300,
) =>
    (
        await Spicetify.Platform.EnhanceAPI.getPage(
            uri,
            /* iteration */ 0,
            /* sessionId */ 0,
            offset,
            limit,
        )
    ).enhancePage.pageItems as any[]
export const fetchPlaylistEnhancedSongs = async (
    uri: SpotifyURI,
    offset = 0,
) => {
    const nextPageItems = await fetchPlaylistEnhancedSongs300(uri, offset)
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

export interface fetchGQLAlbumRes {
    __typename: "album"
    uri: SpotifyURI
    name: string
    artists: {
        totalCount: number
        items: Array<{
            id: string
            uri: SpotifyURI
            profile: {
                name: string
            }
            visuals: {
                avatarImage: {
                    sources: SpotApiImage[]
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
        sources: SpotApiImage[]
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
            uri: SpotifyURI
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
                uri: SpotifyURI
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
                        uri: SpotifyURI
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
                        uri: SpotifyURI
                        name: string
                        date: {
                            year: number
                        }
                        coverArt: {
                            sources: SpotApiImage[]
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

export type fetchGQLArtistRelatedRes = Array<{
    id: string
    uri: SpotifyURI
    profile: {
        name: string
    }
    visuals: {
        avatarImage: {
            sources: SpotApiImage[]
        }
    }
}>

export type fetchPlatArtistLikedTracksRes = Array<{
    type: string
    uri: string
    name: string
    duration: SpotApiDuration
    album: SpotApiAlbumMin
    artists: SpotApiArtistMin[]
    discNumber: number
    trackNumber: number
    isExplicit: boolean
    isPlayable: boolean
    isLocal: boolean
    is19PlusOnly: boolean
    addedAt: string
}>

export type fetchPlaylistAPIRes = Array<{
    uid: string
    playIndex: null
    addedAt: string
    addedBy: {
        type: string
        uri: SpotifyURI
        username: string
        displayName: string
        images: SpotApiImage2[]
    }
    formatListAttributes: {}
    type: "track"
    uri: SpotifyURI
    name: string
    album: SpotApiAlbumMin
    artists: SpotApiArtistMin[]
    discNumber: number
    trackNumber: number
    duration: SpotApiDuration
    isExplicit: boolean
    isLocal: boolean
    isPlayable: boolean
    is19PlusOnly: boolean
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

//

export interface SpotApiAlbumMin {
    type: "album"
    uri: SpotifyURI
    name: string
    artist: SpotApiArtistMin
    images: SpotApiImage2[]
}

export interface SpotApiImage2 {
    url: string
    label: "small" | "standard" | "large" | "xlarge"
}

export interface SpotApiTrack {
    album: SpotApiAlbum
    artists: SpotApiArtist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: SpotApiEIDs
    external_urls: SpotApiEUrls
    href: string
    id: string
    is_playable: boolean
    linked_from: {}
    restrictions: SpotApiRestrictions
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: SpotifyURI
    is_local: boolean
}

export interface SpotApiArtist {
    external_urls: SpotApiEUrls
    followers: SpotApiFollowers
    genres: string[]
    href: string
    id: string
    images: SpotApiImage[]
    name: string
    popularity: number
    type: string
    uri: SpotifyURI
}

export interface SpotApiArtistMin {
    type: "artist"
    uri: SpotifyURI
    name: string
}

export interface SpotApiAlbum {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: SpotApiEUrls
    href: string
    id: string
    images: SpotApiImage[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: SpotApiRestrictions
    type: string
    uri: SpotifyURI
    copyrights: Array<{
        text: string
        type: string
    }>
    external_ids: SpotApiEIDs
    genres: string[]
    label: string
    popularity: number
    album_group: string
    artists: Array<{
        external_urls: SpotApiEUrls
        href: string
        id: string
        name: string
        type: string
        uri: SpotifyURI
    }>
}

export interface SpotApiEUrls {
    spotify: string
}

export interface SpotApiEIDs {
    isrc: string
    ean: string
    upc: string
}

export interface SpotApiImage {
    url: string
    width: number
    height: number
}

export interface SpotApiRestrictions {
    reason: string
}

export interface SpotApiFollowers {
    href: string
    total: number
}
export interface SpotApiDuration {
    milliseconds: number
}
