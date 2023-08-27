// Packages
import Spring from "../../Packages/Spring"
import { Event } from "../../Packages/Signal"

// General Types
type TimeValue = {
    Time: number
    Value: number
}
export type TimeValueRange = TimeValue[]
type Springs = {
    Scale: Spring
    YOffset: Spring
    Glow: Spring
}
export type LiveText = {
    Object: HTMLSpanElement
    Springs: Springs
}
export type LyricState = "Idle" | "Active" | "Sung"

export interface BaseVocals {}
export interface SyncedVocals extends BaseVocals {
    ActivityChanged: Event<(isActive: boolean) => void>
    RequestedTimeSkip: Event<() => void>

    Animate(songTimestamp: number, deltaTime: number, isImmediate?: true): void
    SetBlur(blurDistance: number): void
    IsActive(): boolean
}
