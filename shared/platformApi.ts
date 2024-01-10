import { SpotifyLoc, SpotifyURI } from "./util.ts"

const { CosmosAsync } = Spicetify
const { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform

export const areTracksLiked = (uris: SpotifyURI[]) => LibraryAPI.contains(...uris)

export const setTracksLiked = (uris: SpotifyURI[], liked: boolean) => LibraryAPI[liked ? "add" : "remove"]({ uris })

export const toggleTracksLiked = async (uris: SpotifyURI[]) => {
    const liked = await areTracksLiked(uris)

    const urisByLiked = Object.groupBy(uris, (_, index) => (liked[index] ? "liked" : "notLiked"))

    const ps = []
    urisByLiked.liked?.length && ps.push(setTracksLiked(urisByLiked.liked, false))
    urisByLiked.notLiked?.length && ps.push(setTracksLiked(urisByLiked.notLiked, true))

    return Promise.all(ps)
}

export const fetchLikedTracks = async () =>
    (
        await LibraryAPI.getTracks({
            limit: Number.MAX_SAFE_INTEGER,
        })
    ).items
export const fetchArtistLikedTracks = async (uri: SpotifyURI, offset = 0, limit = 100) =>
    (await LibraryAPI.getTracks({ uri, offset, limit })).items

export const fetchPlaylistContents = async (uri: SpotifyURI) => (await PlaylistAPI.getContents(uri)).items

export const createFolder = async (name: string, location: Spicetify.Platform.RootlistAPI.Location = {}) =>
    await RootlistAPI.createFolder(name, location)

export const addPlaylist = async (playlist: SpotifyURI, folder?: SpotifyURI) =>
    await RootlistAPI.add([playlist], folder ? SpotifyLoc.after.fromUri(folder) : {})

/* Replaced by createPlaylistFromTracks */
export const createPlaylist = async (name: string, location: Spicetify.Platform.RootlistAPI.Location = {}) =>
    await RootlistAPI.createPlaylist(name, location)

export const createPlaylistFromTracks = (name: string, tracks: SpotifyURI[], folder?: SpotifyURI) =>
    CosmosAsync.post("sp://core-playlist/v1/rootlist?responseFormat=protobufJson", {
        operation: "create",
        ...(folder ? { after: folder } : {}),
        name,
        playlist: true,
        uris: tracks,
    })

export const setPlaylistVisibility = async (playlist: SpotifyURI, visibleForAll: boolean) =>
    await PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED")
export const setPlaylistPublished = async (playlist: SpotifyURI, published: boolean) =>
    await RootlistAPI.setPublishedState(playlist, published)

export const fetchFolder = async (folder?: SpotifyURI) => await RootlistAPI.getContents({ folderUri: folder })
export const fetchRootFolder = () => fetchFolder(undefined)

export const addPlaylistTracks = async (
    playlist: SpotifyURI,
    tracks: SpotifyURI[],
    location: Spicetify.Platform.RootlistAPI.Location = {},
) => await PlaylistAPI.add(playlist, tracks, location)

export const movePlaylistTracks = async (
    playlist: SpotifyURI,
    uids: string[],
    location: Spicetify.Platform.RootlistAPI.Location = {},
) =>
    await PlaylistAPI.move(
        playlist,
        uids.map(uid => ({ uid })),
        location,
    )

export const removePlaylistTracks = (playlist: SpotifyURI, tracks: Array<{ uid: string }>) =>
    PlaylistAPI.remove(playlist, tracks)

export const fetchPlaylistEnhancedSongs300 = async (uri: SpotifyURI, offset = 0, limit = 300) =>
    (await EnhanceAPI.getPage(uri, /* iteration */ 0, /* sessionId */ 0, offset, limit)).enhancePage.pageItems
export const fetchPlaylistEnhancedSongs = async (
    uri: SpotifyURI,
    offset = 0,
): Promise<Array<Spicetify.Platform.EnhanceAPI.EnhanceItem>> => {
    const nextPageItems = await fetchPlaylistEnhancedSongs300(uri, offset)
    if (nextPageItems?.length < 300) return nextPageItems
    else return nextPageItems.concat(await fetchPlaylistEnhancedSongs(uri, offset + 300))
}

export const fetchLocalTracks = async () => await LocalFilesAPI.getTracks()
