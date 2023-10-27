export const RATINGS_FOLDER_NAME = "Ratings"

export const getTrackLists = () => Array.from(document.querySelectorAll<HTMLDivElement>(".main-trackList-indexable"))
export const getTrackListTracks = (trackList: HTMLDivElement) =>
    Array.from(trackList.querySelectorAll<HTMLDivElement>("div.main-trackList-trackListRow"))

export const getTrackListTrackUri = (track: HTMLDivElement) => (
    (track = Object.values(track)[0].child.child.child.child),
    (track as any).pendingProps.uri ?? (track as any).child.pendingProps.uri
)

const playlistButtonSelector = `button[aria-label="Add to playlist"] svg, button[aria-label="Add to Liked Songs"] svg, button[aria-label="Remove from Your Library"] svg`
export const getPlaylistSVGButton = () => document.querySelector<SVGElement>(playlistButtonSelector)
export const getPlaylistSVGButtonFrom = (element: HTMLElement) =>
    element.querySelector<SVGElement>(playlistButtonSelector)

export const getNowPlayingBar = () => document.querySelector<HTMLDivElement>("div.main-nowPlayingBar-nowPlayingBar")!
