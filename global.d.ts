import { TrackData } from "./shared/parse.ts"

declare global {
    let lastSortedQueue: TrackData[]
    let tracksRatings: Record<string, number>
}
