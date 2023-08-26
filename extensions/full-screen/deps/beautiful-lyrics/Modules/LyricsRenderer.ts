import { string as str, array as a, readonlyArray } from "fp-ts"
import { pipe as p } from "fp-ts/function"
// Packages
import { Maid } from "../Packages/Maid"
import { OnNextFrame } from "../Packages/Scheduler"

// Modules
import { LyricsScroller, VocalGroup, VocalGroups } from "./LyricsRenderer/LyricsScroller"

// Components
import InterludeVisual from "./LyricsRenderer/Components/Interlude"
import LineVocals from "./LyricsRenderer/Components/LineVocals"
import StaticVocals from "./LyricsRenderer/Components/StaticVocals"
import SyllableVocals from "./LyricsRenderer/Components/SyllableVocals"

// Imported Types
import {
    Interlude,
    LineSynced,
    LineVocal,
    ParsedLyrics,
    StaticSynced,
    SyllableSynced,
    SyllableVocal,
} from "../Services/Player/LyricsParser"
import { Song } from "../Services/Player/Song"
import { SyncedVocals } from "./LyricsRenderer/Types"

// CSS
import "../Stylings/Lyrics.scss"
import { guard } from "fp-ts-std/Function"

const parseStaticLyrics = (parsedLyrics: StaticSynced) => {
    return p(
        parsedLyrics.Lyrics.map(l => {
            const lineContainer = document.createElement("div")
            lineContainer.classList.add("VocalsGroup")

            const line = {
                GroupContainer: lineContainer,
                Vocals: [new StaticVocals(lineContainer, l)],
            }

            return [lineContainer, line] as const
        }),
        readonlyArray.unzip,
    )
}

export type Destoryable<T> = T & { Destroy: () => void }

const parseNonStaticLyrics = (parsedLyrics: LineSynced | SyllableSynced) =>
    p(
        parsedLyrics.VocalGroups as Array<LineVocal | Interlude | SyllableVocal>,
        a.map(vocalGroup => {
            const vocalGroupContainer = document.createElement("button")
            vocalGroupContainer.classList.add("VocalsGroup")
            if ("OppositeAligned" in vocalGroup && vocalGroup.OppositeAligned)
                vocalGroupContainer.classList.add("AlignedOpposite")

            const vocals = guard<string, SyncedVocals[]>([
                [
                    str.startsWith("Interlude"),
                    () => [new InterludeVisual(vocalGroupContainer, vocalGroup as Interlude)],
                ],
                [str.startsWith("LineVocal"), () => [new LineVocals(vocalGroupContainer, vocalGroup as LineVocal)]],
                [
                    str.startsWith("SyllableVocal"),
                    () => {
                        vocalGroup = vocalGroup as SyllableVocal
                        const vocals = [new SyllableVocals(vocalGroupContainer, vocalGroup.Lead, false)]
                        if (vocalGroup.Background)
                            vocals.push(new SyllableVocals(vocalGroupContainer, vocalGroup.Background, true))
                        return vocals
                    },
                ],
            ])(() => [])(parsedLyrics.Type + vocalGroup.Type)

            return [
                {
                    GroupContainer: vocalGroupContainer,
                    Vocals: vocals as any,
                } as VocalGroup<SyncedVocals>,
                vocalGroup.StartTime,
            ] as const
        }),
        readonlyArray.unzip,
    )

export default (song: Song, parsedLyrics: ParsedLyrics) => {
    const maid = new Maid()

    const scrollContainer = maid.give(document.createElement("div")) as Destoryable<HTMLDivElement>
    scrollContainer.classList.add("LyricsScrollContainer")

    const lyricsContainer = document.createElement("div")
    lyricsContainer.classList.add("Lyrics")
    lyricsContainer.classList.add(`NaturallyAligned${parsedLyrics.NaturalAlignment}`)
    scrollContainer.appendChild(lyricsContainer)

    // Now handle creating our vocals
    if (parsedLyrics.Type === "Static") {
        const [lineContainers, lines] = parseStaticLyrics(parsedLyrics)
        lyricsContainer.append(...lineContainers)
        new LyricsScroller(scrollContainer, lyricsContainer, lines as VocalGroups<StaticVocals>, false)
    } else {
        const [vocalGroups, vocalGroupStartTimes] = parseNonStaticLyrics(parsedLyrics)
        lyricsContainer.append(...vocalGroups.map(vocalGroup => vocalGroup.GroupContainer))
        const scroller = new LyricsScroller(
            scrollContainer,
            lyricsContainer,
            vocalGroups as VocalGroups<SyncedVocals>,
            true,
        )

        const Update = (
            scroller: LyricsScroller<SyncedVocals>,
            vocalGroups: VocalGroups<SyncedVocals>,
            lyricsEndTime: number,
            timestamp: number,
            deltaTime: number,
            skipped?: true,
            skippedByVocal?: true,
        ) => {
            vocalGroups
                .flatMap(vocalGroup => vocalGroup.Vocals)
                .map(vocal => vocal.Animate(timestamp, deltaTime, skipped))

            scroller.SetLyricsEnded(timestamp >= lyricsEndTime)

            // If we did skip then we need to tell the scroller that
            if (skipped) scroller.ForceToActive(skippedByVocal)
        }

        // Handle our time-update
        let justSkippedByVocal = false
        maid.give(
            song.TimeStepped.connect((timestamp, deltaTime, skipped) => {
                Update(
                    scroller,
                    vocalGroups as VocalGroups<SyncedVocals>,
                    parsedLyrics.EndTime,
                    timestamp,
                    deltaTime,
                    skipped,
                    justSkippedByVocal || undefined,
                )

                if (skipped && justSkippedByVocal) {
                    justSkippedByVocal = false
                }
            }),
        )

        // Immediately update ourselves
        maid.give(
            OnNextFrame(() =>
                Update(
                    scroller,
                    vocalGroups as VocalGroups<SyncedVocals>,
                    parsedLyrics.EndTime,
                    song.GetTimestamp(),
                    1 / 60,
                    true,
                ),
            ),
        )

        // Handle time-skipping
        vocalGroups.map((vocalGroup, index) => {
            const startTime = vocalGroupStartTimes[index]

            vocalGroup.Vocals.map(vocal =>
                vocal.RequestedTimeSkip.connect(() => {
                    justSkippedByVocal = true
                    song.SetTimestamp(startTime)
                }),
            )
        })
    }

    scrollContainer.Destroy = () => maid.dispose()
    return scrollContainer
}
