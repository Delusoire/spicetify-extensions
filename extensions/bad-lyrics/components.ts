import { consume, createContext, provide } from "https://esm.sh/@lit/context"
import { Task } from "https://esm.sh/@lit/task"
import { hermite } from "https://esm.sh/@thi.ng/ramp"
import { LitElement, css, html } from "https://esm.sh/lit"
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js"
import { map } from "https://esm.sh/lit/directives/map.js"
import { when } from "https://esm.sh/lit/directives/when.js"
import { PropertyValueMap } from "https://esm.sh/v133/@lit/reactive-element@2.0.1/development/reactive-element.js"

import { _ } from "../../shared/deps.ts"
import { Spring } from "./pkgs/spring.ts"
import { LyricsType, SyncedPart } from "./utils/LyricsProvider.ts"
import { PlayerW } from "./utils/PlayerW.ts"
import { Song } from "./utils/Song.ts"

declare global {
    interface HTMLElementTagNameMap {
        "lyrics-container": LyricsContainer
        "animated-text-container": AnimatedTextContainer
        "animated-text": AnimatedText
    }
}

const SCROLL_TIMEOUT_MS = 500

const createInterpolator = (...stops: number[][]) => {
    const spline = hermite(stops)
    return (t: number) => spline.at(t)
}

const DefaultInterpolators = {
    scale: createInterpolator([0, 0.7], [1, 1.3], [1.1, 1]),
    opacity: createInterpolator([0, 0], [0.3, 0.5], [1, 1], [1.2, 0.7]),
    yOffset: createInterpolator(
        [0, 0],
        [0.2, 0.03],
        [0.3, 0.07],
        [0.4, 0.14],
        [0.5, 0.2],
        [0.7, 0.25],
        [0.8, 0.27],
        [0.9, 0.13],
        [1, 0],
    ),
    glow: createInterpolator([0, 0.7], [1, 1.3], [1.2, 0.8]),
}

const globalRSPSpringCtx = createContext<Spring>("globalRSPSpring")
const scrollTimeoutCtx = createContext<number>("scrollTimeout")
const spotifyContainerCtx = createContext<HTMLElement | undefined>("spotifyContainer")
const loadedLyricsTypeCtx = createContext<LyricsType>("loadedLyricsType")

@customElement("lyrics-container")
export class LyricsContainer extends LitElement {
    static styles = css`
        :host > animated-text-container {
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

    @query("animated-text-container")
    // @ts-expect-error only has a getter
    firstContainer: AnimatedTextContainer

    @provide({ context: globalRSPSpringCtx })
    globalRSPSpring = new Spring(0, 5, 1)

    @provide({ context: scrollTimeoutCtx })
    scrollTimeout = 0

    @provide({ context: spotifyContainerCtx })
    spotifyContainer =
        document.querySelector<HTMLElement>("aside div.main-nowPlayingView-lyricsContent.injected") ?? undefined

    firstUpdated(changedProperties: PropertyValueMap<this>) {
        this.spotifyContainer?.addEventListener("scroll", e => {
            this.scrollTimeout = Date.now() + SCROLL_TIMEOUT_MS
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
                          <animated-text-container style=${style} .text=${lyrics.part}></animated-text-container>
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

@customElement("animated-text-container")
export class AnimatedTextContainer extends LitElement {
    static styles = css`
        :host {
            /* border: 0;
            background-color: transparent; */
        }
    `

    @property({ type: Array })
    text = [] as Array<SyncedPart>
    @property({ type: Number })
    tsrAbsolute = 0
    @property({ type: Number })
    tsr = 0
    @property({ type: Number })
    ter = 1

    @queryAll("animated-text-container, animated-text")
    // @ts-expect-error only has a getter
    childs: NodeListOf<AnimatedText | AnimatedTextContainer>

    updateProgress(rsp: number, index: number, depthToActiveAncestor: number) {
        const calculateRSPForChild = (child: AnimatedText | AnimatedTextContainer) =>
            (rsp - child.tsr) / (child.ter - child.tsr)

        const childs = Array.from(this.childs)
        const rsps = childs.map(calculateRSPForChild)

        const activeIndex = rsps.findIndex(rsp => Math.floor(rsp) === 0)

        childs.forEach((child, i) => {
            index = child.updateProgress(rsps[i], index, depthToActiveAncestor + (i === activeIndex ? 0 : 1))
        })

        return index
    }

    private calculateTSRAForPart(part: SyncedPart) {
        return this.tsrAbsolute + part.tsr * (this.ter - this.tsr)
    }

    render() {
        return html`${map(this.text, part =>
                when(
                    Array.isArray(part.part),
                    () =>
                        html`<animated-text-container
                            .text=${part.part}
                            tsrAbsolute=${this.calculateTSRAForPart(part)}
                            tsr=${part.tsr}
                            ter=${part.ter}
                        />`,
                    () =>
                        html`<animated-text
                            text=${part.part}
                            tsrAbsolute=${this.calculateTSRAForPart(part)}
                            tsr=${part.tsr}
                            ter=${part.ter}
                        />`,
                ),
            )}<br />`
    }
}

@customElement("animated-text")
export class AnimatedText extends LitElement {
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
    text = ""
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
    @consume({ context: loadedLyricsTypeCtx })
    loadedLyricsType = LyricsType.NONE

    updateProgress(rsp: number, index: number, depthToActiveAncestor: number) {
        const crsp = _.clamp(rsp, 0, 1) // clamped rsp
        const isActive = depthToActiveAncestor === 0

        if (isActive) {
            this.globalRSPSpring!.setEquilibrium(index + crsp)

            if (Date.now() > this.scrollTimeout && this.spotifyContainer) {
                const lineHeightHeuristic = this.offsetHeight
                const scrollTop = this.offsetTop - this.spotifyContainer.offsetTop - lineHeightHeuristic * 2
                const verticalLinesToActive =
                    Math.abs(scrollTop - this.spotifyContainer.scrollTop) / lineHeightHeuristic

                if (_.inRange(verticalLinesToActive, 1.5, 3.5)) {
                    this.spotifyContainer.scrollTo({
                        top: scrollTop,
                        behavior: "smooth",
                    })
                }
            }
        }

        // smoothed rsp (not clamped)
        this.animateText(this.globalRSPSpring!.compute() - index, depthToActiveAncestor)

        return index + 1
    }

    private springsInitialized = false

    private tryInitializeSprings(srsp: number) {
        if (this.springsInitialized) return
        this.gradientAlphaSpring = new Spring(0, 1, 1, srsp)
        this.springsInitialized = true
    }

    private animateText(srsp: number, depthToActiveAncestor: number) {
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
            >${this.text}</span
        >`
    }
}
