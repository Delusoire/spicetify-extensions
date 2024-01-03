import { consume, createContext, provide } from "https://esm.sh/@lit/context"
import { Task } from "https://esm.sh/@lit/task"
// import { hermite } from "https://esm.sh/@thi.ng/ramp"
import { LitElement, css, html } from "https://esm.sh/lit"
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js"
import { map } from "https://esm.sh/lit/directives/map.js"
import { PropertyValueMap } from "https://esm.sh/v133/@lit/reactive-element@2.0.1/development/reactive-element.js"

import { _ } from "../../shared/deps.ts"
import { KochanekBartels, remapScalar } from "./pkgs/splines.ts"
import { Filler, LyricsType, SyncedContent, SyncedFiller } from "./utils/LyricsProvider.ts"
import { PlayerW } from "./utils/PlayerW.ts"
import { Song } from "./utils/Song.ts"

declare global {
    interface HTMLElementTagNameMap {
        ["lyrics-container"]: LyricsContainer
        ["animated-content-container"]: AnimatedContentContainer
        ["animated-content"]: AnimatedContent
        ["animated-filler"]: AnimatedFiller
    }
}

const scrollTimeoutCtx = createContext<number>("scrollTimeout")
const spotifyContainerCtx = createContext<HTMLElement | undefined>("spotifyContainer")
const loadedLyricsTypeCtx = createContext<LyricsType>("loadedLyricsType")

interface Interpolator<A> {
    at(t: number): A
}

@customElement(AnimatedContentContainer.NAME)
export class AnimatedContentContainer extends LitElement {
    static readonly NAME = "animated-content-container" as const

    static styles = css`
        :host {
            /* border: 0;
            background-color: transparent; */
        }
    `

    @property({ type: Array })
    content = new Array<SyncedContent>()
    @property({ type: Number })
    tss = 0
    @property({ type: Number })
    tes = 1

    @queryAll("*:not(br)")
    childs!: NodeListOf<AnimatedContentContainer | AnimatedContent | AnimatedFiller>

    relativePartialWidths: number[] | undefined
    sharedRelativePartialWidthSpline: Interpolator<number[]> | undefined

    updateProgress(rsp: number, index: number, depthToActiveAncestor: number) {
        const childs = Array.from(this.childs)
        if (childs.length === 0) return index

        if (!this.relativePartialWidths || !this.sharedRelativePartialWidthSpline) {
            const partialWidths = childs.reduce(
                (partialWidths, child) => [...partialWidths, partialWidths.at(-1)! + child.offsetWidth || 4], // 4 is the width for " "
                [0],
            )
            const totalWidth = partialWidths.at(-1)!
            this.relativePartialWidths = partialWidths.map(pw => pw / totalWidth)
            this.sharedRelativePartialWidthSpline = KochanekBartels.fromGrid(
                this.relativePartialWidths.map(rpw => [rpw]),
                [0, 0, 0],
                childs.map(child => child.tss).concat(childs.at(-1)!.tes),
                [[0], [0]],
            )
        }

        childs.forEach((child, i) => {
            const progress =
                child instanceof AnimatedContentContainer
                    ? rsp
                    : _.clamp(
                          remapScalar(
                              this.relativePartialWidths![i],
                              this.relativePartialWidths![i + 1],
                              this.sharedRelativePartialWidthSpline!.at(rsp)[0],
                          ),
                          0,
                          1,
                      )
            index = child.updateProgress(
                progress,
                index,
                depthToActiveAncestor + Number(!_.inRange(rsp, child.tss, child.tes)),
            )
        })

        return index
    }

    render() {
        return html`${map(this.content, part => {
                if (Array.isArray(part.content)) {
                    return html`<animated-content-container .content=${part.content} tss=${part.tss} tes=${part.tes} />`
                }

                if (part.content === Filler) {
                    const filler = part as SyncedFiller
                    return html`<animated-filler
                        content=${filler.content}
                        tss=${filler.tss}
                        tes=${filler.tes}
                        duration=${filler.duration}
                    />`
                }

                return html` <animated-content content=${part.content} tss=${part.tss} tes=${part.tes} />`
            })}<br />`
    }
}

export abstract class SyncedScrolledContent extends LitElement {
    @property()
    content = ""
    @property({ type: Number })
    tss = 0
    @property({ type: Number })
    tes = 1

    @consume({ context: scrollTimeoutCtx, subscribe: true })
    scrollTimeout = 0
    @consume({ context: spotifyContainerCtx })
    spotifyContainer?: HTMLElement

    updateProgress(scaledProgress: number, index: number, depthToActiveAncestor: number) {
        const isActive = depthToActiveAncestor === 0

        if (isActive) {
            if (Date.now() > this.scrollTimeout && this.spotifyContainer) {
                const lineHeightHeuristic = this.offsetHeight
                const scrollTop = this.offsetTop - this.spotifyContainer.offsetTop - lineHeightHeuristic
                const verticalLinesToActive =
                    Math.abs(scrollTop - this.spotifyContainer.scrollTop) / this.spotifyContainer.offsetHeight

                if (_.inRange(verticalLinesToActive, 0.1, 0.75)) {
                    this.spotifyContainer.scrollTo({
                        top: scrollTop,
                        behavior: "smooth",
                    })
                }
            }
        }

        const csp = _.clamp(scaledProgress, -0.5, 1.5)
        this.animateContent(csp, depthToActiveAncestor)

        return index + 1
    }

    abstract animateContent(scaledProgress: number, depthToActiveAncestor: number): void
}

@customElement(AnimatedFiller.NAME)
export class AnimatedFiller extends SyncedScrolledContent {
    static readonly NAME = "animated-filler" as const

    static styles = css`
        :host {
            cursor: pointer;
            background-color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    `

    @property({ type: Number })
    duration = 0

    private springsInitialized = false

    private tryInitializeSprings(scaledProgress: number) {
        if (this.springsInitialized) return
        this.springsInitialized = true
    }

    animateContent(scaledProgress: number, depthToActiveAncestor: number) {
        this.tryInitializeSprings(scaledProgress)
        this.style.setProperty("--gradient-alpha", scaledProgress.toFixed(2))

        this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${
            scaledProgress * 100
        }%, rgba(255,255,255,0) ${scaledProgress * 110}%)`
    }

    render() {
        if (this.duration < LyricsContainer.MINIMUM_FILL_DURATION_MS) return
        return html`
            <span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tss)}>${this.content}</span>
        `
    }
}

@customElement(AnimatedContent.NAME)
export class AnimatedContent extends SyncedScrolledContent {
    static readonly NAME = "animated-content" as const

    static styles = css`
        :host {
            cursor: pointer;
            background-color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    `

    @consume({ context: loadedLyricsTypeCtx })
    loadedLyricsType = LyricsType.NONE

    private springsInitialized = false

    private tryInitializeSprings(scaledProgress: number) {
        if (this.springsInitialized) return
        this.springsInitialized = true
    }

    animateContent(scaledProgress: number, depthToActiveAncestor: number) {
        this.tryInitializeSprings(scaledProgress)
        this.style.setProperty("--gradient-alpha", (scaledProgress * 0.9 ** depthToActiveAncestor).toFixed(2))

        this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${
            scaledProgress * 100
        }%, rgba(255,255,255,0) ${scaledProgress * 110}%)`
    }

    render() {
        return html`<span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tss)}
            >${this.content}</span
        >`
    }
}

@customElement(LyricsContainer.NAME)
export class LyricsContainer extends LitElement {
    static readonly NAME = "lyrics-container" as const

    static readonly MINIMUM_FILL_DURATION_MS = 300
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
    loadedLyricsType = LyricsType.NONE

    private updateSong = (song: Song | null) => {
        this.song = song
        this.loadedLyricsType = LyricsType.NONE
    }

    private lyricsTask = new Task(this, {
        task: async ([song]) => {
            const availableLyrics = await song?.lyrics
            const lyrics = Object.values(availableLyrics!)[0]
            this.loadedLyricsType = lyrics ? lyrics.__type : LyricsType.NONE
            return lyrics
        },
        args: () => [this.song],
    })

    public updateProgress(progress: number) {
        if (this.loadedLyricsType === LyricsType.NONE || this.loadedLyricsType === LyricsType.NOT_SYNCED) return
        this.firstContainer.updateProgress(progress, 0, 0)
    }

    @query(AnimatedContentContainer.NAME)
    firstContainer!: AnimatedContentContainer

    @provide({ context: scrollTimeoutCtx })
    scrollTimeout = 0

    @provide({ context: spotifyContainerCtx })
    spotifyContainer =
        document.querySelector<HTMLElement>("aside div.main-nowPlayingView-lyricsContent.injected") ?? undefined

    firstUpdated(changedProperties: PropertyValueMap<this>) {
        this.spotifyContainer?.addEventListener("scroll", e => {
            this.scrollTimeout = Date.now() + LyricsContainer.SCROLL_TIMEOUT_MS
        })
    }

    render() {
        return this.song
            ? this.lyricsTask.render({
                  pending: () => {
                      return html`<div class="fetching">Fetching Lyrics...</div>`
                  },
                  complete: lyrics => {
                      if (!lyrics) {
                          return html`<div class="noLyrics">No Lyrics Found</div>`
                      }
                      const isWordSynced = this.loadedLyricsType === LyricsType.WORD_SYNCED

                      const style = [
                          ["--gradient-angle", `${isWordSynced ? 90 : 180}deg`],
                          ["--animated-text-bg-color", isWordSynced ? "black" : "white"],
                          [""],
                      ]
                          .map(a => a.join(": "))
                          .join("; ")

                      return html`
                          <animated-content-container
                              style=${style}
                              .content=${lyrics.content}
                          ></animated-content-container>
                      `
                  },
                  error: e => {
                      console.error(e)
                      return html`<div class="error">Error</div>`
                  },
              })
            : html`<div class="error">No Song Loaded</div>`
    }
}
