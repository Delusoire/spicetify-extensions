import { chunckify, memoize2 } from "./fp.ts"
import { SpotifyID, SpotifyLocObj, SpotifyURI, escapeRegex } from "./util.ts"

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

type fetchArtistGQLRes = any
export const fetchGQLArtistOverview = async (uri: SpotifyURI) =>
    (
        await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistOverview, {
            uri,
            locale: Spicetify.Locale.getLocale(),
            includePrerelease: true,
        })
    ).data.artistUnion as fetchArtistGQLRes

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

export const removeWebPlaylistTracks = async (playlist: SpotifyID, tracks: SpotifyURI[]) =>
    Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/playlists/${playlist}/tracks`, {
        tracks: tracks.map(uri => ({ uri })),
    })

export const fetchWebArtistsSpot = chunckify(50)(
    async (ids: SpotifyID[]) =>
        (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`))
            .artists as SpotApiArtist[],
)

export const fetchWebPlaylistsSpot = chunckify(1)(
    // @ts-ignore chunkify will never call with empty array
    async ([id]: [SpotifyID]) => [
        (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)) as SpotApiPlaylist,
    ],
)
export const fetchWebAlbumsSpot = chunckify(50)(
    async (ids: SpotifyID[]) =>
        (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`))
            .albums as SpotApiAlbum[],
)

export const fetchWebTracksSpot = chunckify(50)(
    async (ids: SpotifyID[]) =>
        (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`))
            .tracks as SpotApiTrack[],
)

export const searchWebItemSpot = async (q: string, type: string[]) =>
    Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=${type.join(",")}`)

export const fetchWebSoundOfSpotifyPlaylist = async (genre: string) => {
    const name = `The Sound Of ${genre}`
    const re = new RegExp(`^${escapeRegex(name)}$`, "i")
    const res = await searchWebItemSpot(name, ["playlist"])
    const item = res.playlists.items[0]
    return item?.owner.id === "thesoundsofspotify" && re.test(item.name) ? item.uri : null
}

/*                          Platform                                          */

export const fetchPlatLikedTracks = async () =>
    (
        await Spicetify.Platform.LibraryAPI.getTracks({
            limit: Number.MAX_SAFE_INTEGER,
        })
    ).items as fetchPlatArtistLikedTracksRes
export const fetchPlatArtistLikedTracks = async (uri: SpotifyURI, offset = 0, limit = 100) =>
    (await Spicetify.Platform.LibraryAPI.getTracks({ uri, offset, limit })).items as fetchPlatArtistLikedTracksRes

export const fetchPlatPlaylistContents = async (uri: SpotifyURI) =>
    (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items as fetchWebPlaylistRes

export const createPlatFolder = async (name: string, location: SpotifyLocObj = {}) =>
    await Spicetify.Platform.RootlistAPI.createFolder(name, location)

export const likePlatPlaylist = async (uri: SpotifyURI) => await Spicetify.Platform.RootlistAPI.add([uri])

/* Replaced by createSPPlaylistFromTracks */
export const createPlatPlaylist = async (name: string, location: SpotifyLocObj = {}) =>
    await Spicetify.Platform.RootlistAPI.createPlaylist(name, location)

export const createSPPlaylistFromTracks = (name: string, tracks: SpotifyURI[], folder?: SpotifyURI) =>
    Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist?responseFormat=protobufJson", {
        operation: "create",
        ...(folder ? { after: folder } : {}),
        name,
        playlist: true,
        uris: tracks,
    })

export const setPlatPlaylistVisibility = async (playlist: SpotifyURI, visibleForAll: boolean) =>
    await Spicetify.Platform.PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED")
export const setPlatPlaylistPublished = async (playlist: SpotifyURI, published: boolean) =>
    await Spicetify.Platform.RootlistAPI.setPublishedState(playlist, published)

export const fetchPlatFolder = async (folder?: SpotifyURI) =>
    (await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder })) as fetchPlatFolderRes
export const fetchPlatRootFolder = () => fetchPlatFolder(undefined)

export const addPlatPlaylistTracks = async (playlist: SpotifyURI, tracks: SpotifyURI[], location: SpotifyLocObj = {}) =>
    await Spicetify.Platform.PlaylistAPI.add(playlist, tracks, location)

export const movePlatPlaylistTracks = async (
    playlist: SpotifyURI,
    tracks: Array<{ uid: string }>,
    location: SpotifyLocObj = {},
) => await Spicetify.Platform.PlaylistAPI.move(playlist, tracks, location)

export const fetchPlatPlaylistEnhancedSongs300 = async (uri: SpotifyURI, offset = 0, limit = 300) =>
    (await Spicetify.Platform.EnhanceAPI.getPage(uri, /* iteration */ 0, /* sessionId */ 0, offset, limit)).enhancePage
        .pageItems as any[]
export const fetchPlatPlaylistEnhancedSongs = async (uri: SpotifyURI, offset = 0): Promise<any[]> => {
    const nextPageItems = await fetchPlatPlaylistEnhancedSongs300(uri, offset)
    if (nextPageItems?.length < 300) return nextPageItems
    else return nextPageItems.concat(fetchPlatPlaylistEnhancedSongs(uri, offset + 300))
}

export const fetchLocalTracks = async () => await Spicetify.Platform.LocalFilesAPI.getTracks()

/*                          Non Spotify                                       */

export const fetchTrackLFMAPI = async (LFMApiKey: string, artist: string, trackName: string, lastFmUsername = "") => {
    const url = new URL("https://ws.audioscrobbler.com/2.0/")
    url.searchParams.append("method", "track.getInfo")
    url.searchParams.append("api_key", LFMApiKey)
    url.searchParams.append("artist", artist)
    url.searchParams.append("track", trackName)
    url.searchParams.append("format", "json")
    url.searchParams.append("username", lastFmUsername)

    return (await fetch(url).then(res => res.json())) as fetchTrackLFMAPIRes
}

export const fetchTrackLFMAPIMemoized = memoize2(fetchTrackLFMAPI)

export const searchYoutube = async (YouTubeApiKey: string, searchString: string) => {
    const url = new URL("https://www.googleapis.com/youtube/v3/search")
    url.searchParams.append("part", "snippet")
    url.searchParams.append("maxResults", "10")
    url.searchParams.append("q", searchString)
    url.searchParams.append("type", "video")
    url.searchParams.append("key", YouTubeApiKey)

    return (await fetch(url).then(res => res.json())) as any[]
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

export type fetchWebPlaylistRes = Array<{
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
export interface SpotApiPlaylist {
    collaborative: boolean
    description: string
    external_urls: SpotApiEUrls
    followers: {
        href: string
        total: number
    }
    href: string
    id: SpotifyID
    images: SpotApiImage[]
    name: string
    owner: SpotApiOwner
    public: boolean
    snapshot_id: string
    tracks: {
        href: string
        limit: number
        next: string
        offset: number
        previous: string
        total: number
        items: Array<{
            added_at: string
            added_by: SpotApiOwner
            is_local: boolean
            track: SpotApiTrack
        }>
    }
    type: string
    uri: SpotifyURI
}

export interface SpotApiOwner {
    external_urls: SpotApiEUrls
    followers?: {
        href: string
        total: number
    }
    href: string
    id: SpotifyID
    type: string
    uri: SpotifyURI
    display_name?: string
    name?: string
}

//TODO: Better TS interface for recursive fetchPlatFolderRes
export interface fetchPlatFolderRes {
    type: "folder" | "placeholder" | "playlist"
    addedAt: string
    items?: Array<fetchPlatFolderRes>
    name?: string
    uri: string
    description?: string
    images?: SpotApiImage2[]
    madeFor?: null
    owner?: {
        type: "user"
        uri: string
        username: string
        displayName: string
        images: any[]
    }
    totalLength?: number
    unfilteredTotalLength?: number
    totalLikes?: null
    duration?: null
    isCollaborative?: boolean
    isLoaded?: boolean
    isOwnedBySelf?: boolean
    isPublished?: boolean
    hasEpisodes?: null
    hasSpotifyTracks?: null
    hasSpotifyAudiobooks?: null
    canAdd?: boolean
    canRemove?: boolean
    canPlay?: null
    formatListData?: {
        type: string
        attributes: { [key: string]: string }
    } | null
    canReportAnnotationAbuse?: boolean
    hasDateAdded?: boolean
    permissions?: null
    collaborators?: {
        count: number
        items: any[]
    }
    isNotFound?: boolean
    isForbidden?: boolean
}