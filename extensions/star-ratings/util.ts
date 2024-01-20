import { _ } from "../../shared/deps.ts"
import { fetchRootFolder } from "../../shared/platformApi.ts"

export type Playlist = Spicetify.Platform.RootlistAPI.Playlist
export type Folder = Spicetify.Platform.RootlistAPI.Folder

const { PlaylistAPI } = Spicetify.Platform

export const getTrackListHeader = (trackList: HTMLDivElement) =>
    trackList.querySelector(".main-trackList-trackListHeader")?.firstChild as HTMLDivElement

export const getLastCol = (parent: HTMLElement) => {
    const lastCol = parent.querySelector<HTMLDivElement>("div.main-trackList-rowSectionEnd")!
    const lastColIndex = Number(lastCol.getAttribute("aria-colindex"))
    return [lastColIndex, lastCol] as [number, HTMLDivElement]
}

export const getOwnedPlaylists = async () => {
    const rootFolder = await fetchRootFolder()

    const traverse = (item: Folder | Playlist): Playlist[] => {
        switch (item.type) {
            case "folder":
                return item.items.flatMap(traverse)
            case "playlist":
                return item.isOwnedBySelf ? [item] : []
        }
    }

    return traverse(rootFolder)
}

export const getTracksPlaylists = async () => {
    const ownedPlaylists = await getOwnedPlaylists()
    const tracks = await Promise.all(ownedPlaylists.map(playlist => PlaylistAPI.getContents(playlist.uri)))
    const [playlists, uris] = _.unzip(
        tracks.flatMap((tracks, i) => tracks.items.map(track => [ownedPlaylists[i], track.uri] as const)),
    ) as [Playlist[], string[]]

    return Object.groupBy(playlists, (_, i) => uris[i]) as Record<string, Playlist[]>
}
