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
export const getCollectionActionBarRow = () =>
    document.querySelector<HTMLDivElement>(`div.main-actionBar-ActionBarRow`)!

export const getPlaylistButton = (parent: HTMLElement) =>
    parent.querySelector<HTMLButtonElement>(
        `button[aria-label="Add to Liked Songs"], button[aria-label="Add to playlist"]`,
    )!
export const getCollectionPlaylistButton = () => {
    const ab = getCollectionActionBarRow()
    return ab.querySelector<HTMLButtonElement>(
        `button[aria-label="Remove from Your Library"], button[aria-label="Save to Your Library"]`,
    )!
}
