import { consume, createContext, provide } from "https://esm.sh/@lit/context"
import { Task } from "https://esm.sh/@lit/task"
// import { hermite } from "https://esm.sh/@thi.ng/ramp"
import { LitElement, css, html } from "https://esm.sh/lit"
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js"
import { map } from "https://esm.sh/lit/directives/map.js"
import { PropertyValueMap } from "https://esm.sh/v133/@lit/reactive-element@2.0.1/development/reactive-element.js"

import { _ } from "../../shared/deps.ts"
import { Spring } from "./pkgs/spring.ts"
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

// const createInterpolator = (...stops: number[][]) => {
//     const spline = hermite(stops)
//     return (t: number) => spline.at(t)
// }

const globalRSPSpringCtx = createContext<Spring>("globalRSPSpring")
const scrollTimeoutCtx = createContext<number>("scrollTimeout")
const spotifyContainerCtx = createContext<HTMLElement | undefined>("spotifyContainer")
const loadedLyricsTypeCtx = createContext<LyricsType>("loadedLyricsType")

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
    content = [] as Array<SyncedContent>
    @property({ type: Number })
    tsrAbsolute = 0
    @property({ type: Number })
    tsr = 0
    @property({ type: Number })
    ter = 1

    @queryAll("*:not(br)")
    // @ts-expect-error only has a getter
    childs: NodeListOf<AnimatedContentContainer | AnimatedContent | AnimatedFiller>

    updateProgress(rsp: number, index: number, depthToActiveAncestor: number) {
        const childs = Array.from(this.childs)
        const rsps = childs.map(child => (rsp - child.tsr) / (child.ter - child.tsr))

        const activeIndex = rsps.findIndex(rsp => Math.floor(rsp) === 0)

        childs.forEach((child, i) => {
            index = child.updateProgress(rsps[i], index, depthToActiveAncestor + (i === activeIndex ? 0 : 1))
        })

        return index
    }

    render() {
        return html`${map(this.content, part => {
                const tsrAbsolute = this.tsrAbsolute + part.tsr * (this.ter - this.tsr)

                if (Array.isArray(part.content)) {
                    return html`<animated-content-container
                        .content=${part.content}
                        tsrAbsolute=${tsrAbsolute}
                        tsr=${part.tsr}
                        ter=${part.ter}
                    />`
                }

                if (part.content === Filler) {
                    const filler = part as SyncedFiller
                    return html`<animated-filler
                        content=${filler.content}
                        tsrAbsolute=${tsrAbsolute}
                        tsr=${filler.tsr}
                        ter=${filler.ter}
                        duration=${filler.duration}
                    />`
                }

                return html` <animated-content
                    content=${part.content}
                    tsrAbsolute=${tsrAbsolute}
                    tsr=${part.tsr}
                    ter=${part.ter}
                />`
            })}<br />`
    }
}

export abstract class SyncedScrolledContent extends LitElement {
    @property()
    content = ""
    @property({ type: Number })
    tsrAbsolute = 0
    @property({ type: Number })
    tsr = 0
    @property({ type: Number })
    ter = 1

    @consume({ context: globalRSPSpringCtx })
    globalRSPSpring?: Spring
    @consume({ context: scrollTimeoutCtx, subscribe: true })
    scrollTimeout = 0
    @consume({ context: spotifyContainerCtx })
    spotifyContainer?: HTMLElement

    updateProgress(rsp: number, index: number, depthToActiveAncestor: number) {
        const crsp = _.clamp(rsp, 0, 1) // clamped rsp
        const isActive = depthToActiveAncestor === 0

        if (isActive) {
            this.globalRSPSpring!.setEquilibrium(index + crsp)

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

        // smoothed rsp (not clamped)
        this.animateContent(this.globalRSPSpring!.compute() - index, depthToActiveAncestor)

        return index + 1
    }

    abstract animateContent(srsp: number, depthToActiveAncestor: number): void
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

    // @ts-expect-error gets initialized in firstUpdated
    gradientAlphaSpring: Spring

    @property()
    duration = 0

    private springsInitialized = false

    private tryInitializeSprings(srsp: number) {
        if (this.springsInitialized) return
        this.gradientAlphaSpring = new Spring(0, 1, 1, srsp)
        this.springsInitialized = true
    }

    animateContent(srsp: number, depthToActiveAncestor: number) {
        this.tryInitializeSprings(srsp)
        this.gradientAlphaSpring.setEquilibrium(0.9 ** (1 + depthToActiveAncestor))
        const gradientAlpha = this.gradientAlphaSpring.compute(srsp)
        if (!this.gradientAlphaSpring.isInEquilibrium()) {
            this.style.setProperty("--gradient-alpha", gradientAlpha.toFixed(2))
        }

        this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${
            srsp * 100
        }%, rgba(255,255,255,0) ${srsp * 110}%)`
    }

    render() {
        if (this.duration < LyricsContainer.MINIMUM_FILL_DURATION_MS) return
        return html`
            <span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tsrAbsolute)}>${this.content}</span
            ><br />
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

    // @ts-expect-error gets initialized in firstUpdated
    gradientAlphaSpring: Spring

    @consume({ context: loadedLyricsTypeCtx })
    loadedLyricsType = LyricsType.NONE

    private springsInitialized = false

    private tryInitializeSprings(srsp: number) {
        if (this.springsInitialized) return
        this.gradientAlphaSpring = new Spring(0, 1, 1, srsp)
        this.springsInitialized = true
    }

    animateContent(srsp: number, depthToActiveAncestor: number) {
        this.tryInitializeSprings(srsp)
        this.gradientAlphaSpring.setEquilibrium(0.9 ** (1 + depthToActiveAncestor))
        const gradientAlpha = this.gradientAlphaSpring.compute(srsp)
        if (!this.gradientAlphaSpring.isInEquilibrium()) {
            this.style.setProperty("--gradient-alpha", gradientAlpha.toFixed(2))
        }

        this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${
            srsp * 100
        }%, rgba(255,255,255,0) ${srsp * 110}%)`
    }

    render() {
        return html`<span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tsrAbsolute)}
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

    private lyricsTask = new Task(this, {
        task: ([song]) => song?.lyrics,
        args: () => [this.song],
    })

    @provide({ context: loadedLyricsTypeCtx })
    @state()
    loadedLyricsType = LyricsType.NONE

    public updateProgress(progress: number) {
        if (this.loadedLyricsType === LyricsType.NONE || this.loadedLyricsType === LyricsType.NOT_SYNCED) return
        this.firstContainer.updateProgress(progress, 0, 0)
    }

    @query(AnimatedContentContainer.NAME)
    // @ts-expect-error only has a getter
    firstContainer: AnimatedContentContainer

    @provide({ context: globalRSPSpringCtx })
    globalRSPSpring = new Spring(0, 5, 1)

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
                      this.loadedLyricsType = LyricsType.NONE
                      return html`<div class="fetching">Fetching Lyrics...</div>`
                  },
                  complete: availableLyrics => {
                      const lyrics = Object.values(availableLyrics!)[0]
                      if (!lyrics) {
                          this.loadedLyricsType = LyricsType.NONE
                          return html`<div class="noLyrics">No Lyrics Found</div>`
                      }
                      this.loadedLyricsType = lyrics.__type
                      const isSynced = this.loadedLyricsType === LyricsType.WORD_SYNCED

                      const style = [
                          ["--gradient-angle", `${isSynced ? 90 : 180}deg`],
                          ["--animated-text-bg-color", isSynced ? "black" : "white"],
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
                      this.loadedLyricsType = LyricsType.NONE
                      console.error(e)
                      return html`<div class="error">Error</div>`
                  },
              })
            : html`<div class="error">No Song Loaded</div>`
    }
}
