import { consume, provide } from "https://esm.sh/@lit/context"
import { Task } from "https://esm.sh/@lit/task"
import { LitElement, css, html } from "https://esm.sh/lit"
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js"
import { map } from "https://esm.sh/lit/directives/map.js"
import { when } from "https://esm.sh/lit/directives/when.js"
import { PropertyValueMap } from "https://esm.sh/v133/@lit/reactive-element@2.0.1/development/reactive-element.js"
// import { hermite } from "https://esm.sh/@thi.ng/ramp"

import { _ } from "../../../shared/deps.ts"
import { remapScalar, vectorLerp } from "../../../shared/math.ts"
import { MonotoneNormalSpline } from "../splines/monotoneNormalSpline.ts"
import { LyricsType } from "../utils/LyricsProvider.ts"
import { PlayerW } from "../utils/PlayerW.ts"
import { Song } from "../utils/Song.ts"
import { loadedLyricsTypeCtx, scrollTimeoutCtx, spotifyContainerCtx } from "./contexts.ts"
import { AnimatedMixin, ScrolledMixin, SyncedContainerMixin, SyncedMixin } from "./mixins.ts"

declare global {
    interface HTMLElementTagNameMap {
        ["lyrics-wrapper"]: LyricsWrapper
        ["lyrics-container"]: LyricsContainer
        ["timeline-provider"]: TimelineProvider
        ["animated-text"]: AnimatedText
    }
}

const opacityInterpolator = new MonotoneNormalSpline([
    [0, 0],
    [0.1, 0.1],
    [0.2, 0.3],
    [0.5, 0.55],
    [0.7, 0.8],
    [1, 1],
    [1.2, 0.8],
    [1.5, 0.7],
])
const glowRadiusInterpolator = new MonotoneNormalSpline([
    [0, 100],
    [0.2, 7],
    [0.4, 5],
    [0.6, 3],
    [0.7, 2],
    [0.9, 1],
    [1, 3],
    [1.1, 7],
    [1.25, 100],
])
const glowAlphaInterpolator = new MonotoneNormalSpline([
    [0, 0],
    [0.1, 0.2],
    [0.2, 0.35],
    [0.5, 0.65],
    [0.7, 0.9],
    [1, 1],
    [1.2, 0.6],
    [1.5, 0],
])
const scaleInterpolator = new MonotoneNormalSpline([
    [-0.5, 1],
    [-0.2, 0.99],
    [-0.1, 0.98],
    [0, 0.94],
    [0.1, 0.99],
    [0.2, 1],
    [0.5, 1.02],
    [0.7, 1.06],
    [0.9, 1.04],
    [1, 1.02],
    [1.2, 1.01],
    [1.5, 1],
])

@customElement(AnimatedText.NAME)
export class AnimatedText extends AnimatedMixin(ScrolledMixin(SyncedMixin(LitElement))) {
    static readonly NAME = "animated-text" as string

    @property({ type: Boolean })
    split!: boolean

    static styles = css`
        :host {
            cursor: pointer;
            background-color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            text-shadow: 0 0 var(--glow-radius, 0) rgba(255, 255, 255, var(--glow-alpha, 0));
            transform: translateY(var(--y-offset, 0));
            background-image: linear-gradient(
                var(--gradient-angle),
                rgba(255, 255, 255, var(--gradient-alpha)) var(--gradient-start),
                rgba(255, 255, 255, 0) var(--gradient-end)
            );
        }
    `

    @consume({ context: loadedLyricsTypeCtx })
    loadedLyricsType?: LyricsType

    @queryAll("span")
    cs!: NodeListOf<HTMLSpanElement>

    intermediatePositions?: number[]
    lastPosition?: number
    timelineSpline?: Spline<number>

    animateContent(depthToActiveAncestor: number) {
        const nextGradientOpacity = (opacityInterpolator.at(this.csp) * 0.9 ** depthToActiveAncestor).toFixed(5)
        const nextGlowRadius = `${glowRadiusInterpolator.at(this.csp)}px`
        const nextGlowAlpha = glowAlphaInterpolator.at(this.csp)
        const nextGradientStart = `${this.csp * 95}%`
        const nextGradientEnd = `${this.csp * 105}%`

        this.style.setProperty("--gradient-alpha", nextGradientOpacity)
        this.style.setProperty("--glow-radius", nextGlowRadius)
        this.style.setProperty("--glow-alpha", nextGlowAlpha)
        this.style.setProperty("--gradient-start", nextGradientStart)
        this.style.setProperty("--gradient-end", nextGradientEnd)

        if (this.split) {
            if (!this.timelineSpline) {
                const childs = Array.from(this.cs)
                const partialWidths = childs.reduce(
                    (partialWidths, child) => (
                        partialWidths.push(partialWidths.at(-1)! + child.offsetWidth), partialWidths
                    ),
                    [0],
                )
                this.lastPosition = partialWidths.at(-1)!
                this.intermediatePositions = partialWidths.map(pw => pw / this.lastPosition!)
            }

            const sip = this.csp

            this.cs.forEach((c, i) => {
                const csp = _.clamp(
                    remapScalar(this.intermediatePositions![i], this.intermediatePositions![i + 1], sip),
                    -0.5,
                    1.5,
                )
                const nextYOffset = `-${this.offsetHeight * 0.12 * csp}px`
                const nextScale = scaleInterpolator.at(csp).toFixed(5)

                c.style.setProperty("--y-offset", nextYOffset)
                c.style.scale = nextScale
            })
        } else {
            const nextYOffset = `-${this.offsetHeight * 0.12 * this.csp}px`
            const nextScale = scaleInterpolator.at(this.csp).toFixed(5)

            this.style.setProperty("--y-offset", nextYOffset)
            this.style.scale = nextScale
        }
    }

    onClick() {
        PlayerW.setTimestamp(this.tss)
    }

    render() {
        return html`<div role="button" , @click=${this.onClick}>
            ${when(
                this.split,
                () => {
                    const content = this.content.split("")
                    return html`${map(content, c => html`<span>${c === " " ? " " : c}</span>`)}`
                },
                () => html`<span>${this.content}</span>`,
            )}
        </div>`
    }
}

interface Spline<A> {
    at(t: number): A
}

@customElement(TimelineProvider.NAME)
export class TimelineProvider extends SyncedContainerMixin(SyncedMixin(LitElement)) {
    static readonly NAME = "timeline-provider"

    static styles = css`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `

    intermediatePositions?: number[]
    lastPosition?: number
    timelineSpline?: Spline<number>

    computeIntermediatePosition(rsp: number) {
        if (!this.timelineSpline) {
            const childs = Array.from(this.childs)
            const partialWidths = childs.reduce(
                (partialWidths, child) => (
                    partialWidths.push(partialWidths.at(-1)! + child.offsetWidth), partialWidths
                ),
                [0],
            )
            this.lastPosition = partialWidths.at(-1)!
            this.intermediatePositions = partialWidths.map(pw => pw / this.lastPosition!)

            const pairs = _.zip(
                childs.map(child => child.tss).concat(childs.at(-1)!.tes),
                this.intermediatePositions,
            ) as Array<[number, number]>
            const first = vectorLerp(pairs[0], pairs[1], -1)
            const last = vectorLerp(pairs.at(-2)!, pairs.at(-1)!, 2)
            this.timelineSpline = new MonotoneNormalSpline([first, ...pairs, last])
        }

        return this.timelineSpline.at(rsp)
    }

    computeChildProgress(rsp: number, child: number) {
        const sip = this.computeIntermediatePosition(rsp)
        return remapScalar(this.intermediatePositions![child], this.intermediatePositions![child + 1], sip)
    }

    render() {
        return html`<slot></slot><br />`
    }
}

@customElement(LyricsContainer.NAME)
export class LyricsContainer extends SyncedContainerMixin(SyncedMixin(LitElement)) {
    static readonly NAME = "lyrics-container"

    render() {
        return html`<slot></slot>`
    }
}

@customElement(LyricsWrapper.NAME)
export class LyricsWrapper extends LitElement {
    static readonly NAME = "lyrics-wrapper"
    static readonly SCROLL_TIMEOUT_MS = 500

    static styles = css`
        :host > animated-content-container {
            display: unset;
        }
    `

    @property({ attribute: false })
    song: Song | null = null

    @provide({ context: loadedLyricsTypeCtx })
    @state()
    loadedLyricsType?: LyricsType

    updateSong = (song: Song | null) => {
        this.song = song
        this.loadedLyricsType = undefined
    }

    private lyricsTask = new Task(this, {
        task: async ([song]) => {
            const availableLyrics = await song?.lyrics
            const lyrics = Object.values(availableLyrics!)[0]
            this.loadedLyricsType = lyrics?.__type
            return lyrics
        },
        args: () => [this.song],
    })

    @query(LyricsContainer.NAME)
    container?: LyricsContainer
    public updateProgress(progress: number) {
        if (this.loadedLyricsType === undefined || this.loadedLyricsType === LyricsType.NOT_SYNCED) return
        this.container?.updateProgress(progress, 0)
    }

    @provide({ context: scrollTimeoutCtx })
    scrollTimeout = 0

    @provide({ context: spotifyContainerCtx })
    spotifyContainer =
        document.querySelector<HTMLElement>("aside div.main-nowPlayingView-lyricsContent.injected") ?? undefined

    firstUpdated(changedProperties: PropertyValueMap<this>) {
        this.spotifyContainer?.addEventListener("scroll", e => {
            this.scrollTimeout = Date.now() + LyricsWrapper.SCROLL_TIMEOUT_MS
        })
    }

    render() {
        if (!this.song) {
            return html`<div class="info">No Song Loaded</div>`
        }

        return this.lyricsTask.render({
            pending: () => {
                return html`<div class="loading">Fetching Lyrics...</div>`
            },
            complete: lyrics => {
                if (!lyrics || lyrics.__type === LyricsType.NOT_SYNCED) {
                    return html`<div class="error">No Lyrics Found</div>`
                }

                const isWordSync = this.loadedLyricsType === LyricsType.WORD_SYNCED

                return html`
                    <style>
                        * {
                            --gradient-angle: ${this.loadedLyricsType === LyricsType.WORD_SYNCED ? 90 : 180}deg;
                        }
                    </style>
                    <lyrics-container
                        >${map(
                            lyrics.content,
                            l =>
                                html`<timeline-provider tss=${l.tss} tes=${l.tes}
                                    >${map(
                                        l.content,
                                        w =>
                                            html`<animated-text
                                                tss=${w.tss}
                                                tes=${w.tes}
                                                content=${w.content}
                                                split=${isWordSync}
                                            ></animated-text>`,
                                    )}</timeline-provider
                                >`,
                        )}</lyrics-container
                    >
                `
            },
            error: e => {
                console.error(e)
                return html`<div class="error">Error</div>`
            },
        })
    }
}
