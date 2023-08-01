import { EPlaylistPersonal, SpotifyURI } from "./util"

export const fetchPlaylistAPI = async (uri: SpotifyURI) =>
    (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items as any[]

export const fetchLikedPlaylistsSP = () =>
    Spicetify.CosmosAsync.get("sp://core-playlist/v1/rootlist")

export const likePlaylist = (uri: SpotifyURI) =>
    Spicetify.Platform.RootlistAPI.add([uri])

export const createPlaylist = (playlist: EPlaylistPersonal) =>
    Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist", {
        operation: "create",
        playlist: true,
        uris: playlist.uris,
        name: playlist.name,
    })

export const createFolder = Spicetify.Platform.RootlistAPI.createFolder
