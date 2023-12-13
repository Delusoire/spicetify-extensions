import { formatUri, getReactProps } from "../../shared/util.ts"

export const RATINGS_FOLDER_NAME = "Ratings"

export const getTrackLists = () =>
    Array.from(document.querySelectorAll<HTMLDivElement>(".main-trackList-trackList.main-trackList-indexable"))
export const getTrackListTracks = (trackList: HTMLDivElement) =>
    Array.from(trackList.querySelectorAll<HTMLDivElement>(".main-trackList-trackListRow"))

export const getTrackListTrackUri = (track: HTMLDivElement) => {
    const rowSectionEnd = track.querySelector<HTMLDivElement>(".main-trackList-rowSectionEnd")!
    const reactProps = getReactProps(rowSectionEnd)
    const { props } =
        // artist & local tracks & albums
        reactProps.children.at?.(-1).props.menu ??
        // playlists
        reactProps.children.props.children.at(-1).props.menu

    return props.uri
}

export const getNowPlayingBar = () => document.querySelector<HTMLDivElement>("div.main-nowPlayingBar-nowPlayingBar")!
export const getCollectionActionBarRow = () => document.querySelector<HTMLDivElement>(`div.main-actionBar-ActionBarRow`)

export const playlistButtonSelector = `button[aria-label="Add to Liked Songs"], button[aria-label="Add to playlist"], button[aria-label="Remove recommendation"]`
export const getPlaylistButton = (parent: HTMLElement) =>
    parent.querySelector<HTMLButtonElement>(playlistButtonSelector)!
export const getCollectionPlaylistButton = () => {
    const ab = getCollectionActionBarRow()
    return ab?.querySelector<HTMLButtonElement>(
        `button[aria-label="Remove from Your Library"], button[aria-label="Save to Your Library"]`,
    )
}
