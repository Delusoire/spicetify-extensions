import { AccessToken, SpotifyApi } from "https://esm.sh/@fostertheweb/spotify-web-api-ts-sdk"
import { toMemoized } from "./fp.ts"
import { SpotifyURI, escapeRegex } from "./util.ts"

export const spotifyApi = SpotifyApi.withAccessToken("client-id", {} as AccessToken, {
    // @ts-ignore
    fetch(url, opts) {
        const { method } = opts!
        debugger
        // @ts-ignore
        return Spicetify.CosmosAsync.resolve(method, url)
    },
})

/*                          GraphQL                                           */

export const fetchGQLAlbum = async (uri: SpotifyURI, offset = 0, limit = 487) =>
    (
        await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
            uri,
            locale: Spicetify.Locale.getLocale(),
            offset,
            limit,
        })
    ).data.albumUnion as fetchGQLAlbumRes

type Date = (
    | {
          year: number
          month?: number
          day?: number
          hour?: number
          mintue?: number
          second?: number
          precision: "YEAR"
      }
    | {
          year: number
          month: number
          day?: number
          hour?: number
          mintue?: number
          second?: number
          precision: "MONTH"
      }
    | {
          year: number
          month: number
          day: number
          hour?: number
          mintue?: number
          second?: number
          precision: "DAY"
      }
    | {
          year: number
          month: number
          day: number
          hour: number
          mintue?: number
          second?: number
          precision: "HOUR"
      }
    | {
          year: number
          month: number
          day: number
          hour: number
          mintue: number
          second?: number
          precision: "MINUTE"
      }
    | {
          year: number
          month: number
          day: number
          hour: number
          mintue: number
          second: number
          precision: "SECOND"
      }
) & {
    isoString: string
}

type Playability = {
    playable: boolean
    reason: "PLAYABLE" | string
}

type Item = {
    id: string
    uri: string
    name: string
    type: "SINGLE" | "ALBUM" | "COMPILATION" | string
    copyright: {
        items: Array<{
            type: string
            text: string
        }>
    }
    date: Date
    coverArt: {
        sources: Array<Spicetify.Platform.ImageSized>
    }
    tracks: {
        totalCount: number
    }
    label: string
    playability: Playability
    sharingInfo: {
        shareId: string
        shareUrl: string
    }
}

type ArtistUnion = {
    __typename: "Artist"
    id: string
    uri: string
    saved: boolean
    stats: {
        followers: number
        monthlyListeners: number
        worldRank: number
        topCities: {
            items: Array<{
                numberOfListeners: number
                city: string
                country: string
                region: string
            }>
        }
    }
    profile: {
        name: string
        verified: boolean
        pinnedItem: {
            comment: string
            type: string
            backgroundImage: {
                sources: Array<{ url: string }>
            }
            itemV2: {}
            item: {
                uri: string
                name: string
                images: {
                    items: Array<{
                        sources: Array<{
                            url: string
                            width: null
                            height: null
                        }>
                    }>
                }
            }
        }
        biography: {
            type: string
            text: string
        }
        externalLinks: {
            items: Array<{
                name: string
                url: string
            }>
        }
        playlistV2: {
            totalCount: number
            items: Array<{
                data: {
                    __typename: "Playlist"
                    uri: string
                    name: string
                    description: string
                    ownerV2: {
                        data: {
                            __typename: "User"
                            name: string
                        }
                    }
                    images: {
                        items: Array<{
                            sources: Array<Spicetify.Platform.ImageSized>
                        }>
                    }
                }
            }>
        }
    }
    visuals: {
        gallery: {
            items: Array<{
                sources: Array<Spicetify.Platform.ImageSized>
            }>
        }
        avatarImage: {
            sources: Array<Spicetify.Platform.ImageSized>
            extractedColors: {
                colorRaw: {
                    hex: string
                }
            }
        }
        headerImage: {
            sources: Array<Spicetify.Platform.ImageSized>
            extractedColors: {
                colorRaw: {
                    hex: string
                }
            }
        }
    }
    discography: {
        latest: Item
        popularReleasesAlbums: {
            totalCount: number
            items: Array<Item>
        }
        singles: {
            totalCount: number
            items: Array<{
                releases: {
                    items: Array<Item>
                }
            }>
        }
        albums: {
            totalCount: number
            items: Array<{
                releases: {
                    items: Array<Item>
                }
            }>
        }
        compilations: {
            totalCount: number
            items: Array<{
                releases: {
                    items: Array<Item>
                }
            }>
        }
        topTracks: {
            items: Array<{
                uid: string
                track: {
                    id: string
                    uri: string
                    name: string
                    playcount: string
                    discNumber: number
                    duration: {
                        totalMilliseconds: number
                    }
                    playability: Playability
                    contentRating: {
                        label: "NONE" | "EXPLICIT"
                    }
                    artists: {
                        items: Array<{
                            uri: string
                            profile: {
                                name: string
                            }
                        }>
                    }
                    albumOfTrack: {
                        uri: string
                        coverArt: {
                            sources: Array<{ url: string }>
                        }
                    }
                }
            }>
        }
    }
    preRelease: any | null
    relatedContent: {
        appearsOn: {
            totalCount: number
            items: any[]
        }
        featuringV2: {
            totalCount: number
            items: any[]
        }
        discoveredOnV2: {
            totalCount: number
            items: any[]
        }
        relatedArtists: {
            totalCount: number
            items: any[]
        }
    }
    sharingInfo: {
        shareUrl: string
        shareId: string
    }
    goods: {
        events: {
            userLocation: {
                name: string
            }
            concerts: {
                totalCount: number
                items: Array<{
                    uri: string
                    id: string
                    title: string
                    category: "CONCERT"
                    festival: boolean
                    nearUser: boolean
                    venue: {
                        name: string
                        location: { name: string }
                        coordinates: {
                            latitude: number
                            longitude: number
                        }
                    }
                    partnerLinks: {
                        items: Array<{
                            partnerName: string
                            url: string
                        }>
                    }
                    date: Date
                }>
                pagingInfo: {
                    limit: number
                }
            }
        }
        merch: {
            items: Array<{
                image: {
                    sources: Array<{ url: string }>
                }
                name: string
                description: string
                price: string
                uri: string
                url: string
            }>
        }
    }
}
export const fetchGQLArtistOverview = async (uri: SpotifyURI) =>
    (
        await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistOverview, {
            uri,
            locale: Spicetify.Locale.getLocale(),
            includePrerelease: true,
        })
    ).data.artistUnion as ArtistUnion

type fetchGQLArtistDiscographyRes = any
export const fetchGQLArtistDiscography = async (uri: SpotifyURI, offset = 0, limit = 116) =>
    (
        await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistDiscographyAll, {
            uri,
            offset,
            limit,
        })
    ).data.artistUnion.discography.all.items as fetchGQLArtistDiscographyRes

export const fetchGQLArtistRelated = async (uri: SpotifyURI) =>
    (
        await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistRelated, {
            uri,
            locale: Spicetify.Locale.getLocale(),
        })
    ).data.artistUnion.relatedContent.relatedArtists.items as fetchGQLArtistRelatedRes

/*                          Spotify Web API                                   */

export const fetchWebSoundOfSpotifyPlaylist = async (genre: string) => {
    const name = `The Sound Of ${genre}`
    const re = new RegExp(`^${escapeRegex(name)}$`, "i")
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

    return (await fetch(url).then(res => res.json())) as fetchLastFMTrackResMinimal
}

export const fetchLastFMTrackMemo = toMemoized(fetchLastFMTrack)

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

export interface SpotApiImage {
    url: string
    width: number
    height: number
}
