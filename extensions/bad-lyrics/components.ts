import { createContext, provide, consume } from "https://esm.sh/@lit/context"
import { Task } from "https://esm.sh/@lit/task"
import { hermite } from "https://esm.sh/@thi.ng/ramp"
import { LitElement, css, html } from "https://esm.sh/lit"
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js"
import { map } from "https://esm.sh/lit/directives/map.js"
import { when } from "https://esm.sh/lit/directives/when.js"

import { _ } from "../../shared/deps.ts"
import { Sprine } from "./pkgs/sprine.ts"
import { Spring } from "./pkgs/spring.ts"
import { SyncedPart } from "./utils/LyricsProvider.ts"
import { PlayerW } from "./utils/PlayerW.ts"
import { Song } from "./utils/Song.ts"

declare global {
    interface HTMLElementTagNameMap {
        "lyrics-container": LyricsContainer
        "animated-text-container": AnimatedTextContainer
        "animated-text": AnimatedText
    }
}

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

const globalRSPSpringCtx = createContext<Spring>("grsp")

@customElement("lyrics-container")
export class LyricsContainer extends LitElement {
    static styles = css`
        :host {
        }
    `

    @property({ attribute: false })
    song: Song | null = null

    private lyricsTask = new Task(this, {
        task: ([song]) => song?.lyrics,
        args: () => [this.song],
    })

    @state()
    hasLyrics = false

    public updateProgress(progress: number) {
        if (!this.hasLyrics) return
        this.firstContainer.updateProgress(progress, 0)
    }

    @query("animated-text-container")
    // @ts-expect-error only has a getter
    firstContainer: AnimatedTextContainer

    @provide({ context: globalRSPSpringCtx })
    globalRSPSpring = new Spring(0, 1, 1)

    render() {
        return this.lyricsTask.render({
            pending: () => {
                this.hasLyrics = false
                return html`<div class="fetching">Fetching Lyrics...</div>`
            },
            complete: lyrics => {
                const wordSynced = lyrics?.wordSynced
                if (!wordSynced) {
                    this.hasLyrics = false
                    return html`<div class="noLyrics">No Lyrics</div>`
                }
                this.hasLyrics = true

                return html`
                    <animated-text-container style="display: unset;" .text=${wordSynced.part}></animated-text-container>
                `
            },
            error: () => {
                this.hasLyrics = false
                return html`<div class="error">Error</div>`
            },
        })
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

    updateProgress(rsp: number, index: number) {
        const calculateRSPForChild = (child: AnimatedText | AnimatedTextContainer) =>
            (rsp - child.tsr) / (child.ter - child.tsr)

        this.childs.forEach(child => {
            index = child.updateProgress(calculateRSPForChild(child), index)
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
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    `
    opacitySprine

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

    constructor(interpolators = DefaultInterpolators) {
        super()
        // set sprines
        this.opacitySprine = new Sprine(1, 0.5, 1, interpolators.opacity)
    }

    updateProgress(rsp: number, index: number) {
        // update sprines
        // update styles if sprine not in equilibrium
        if (!this.globalRSPSpring) return index + 1

        rsp = _.clamp(rsp, 0, 1)

        if (0 < rsp && rsp < 1) {
            this.globalRSPSpring.setEquilibrium(index + rsp)
            rsp = this.globalRSPSpring.current - index
        }

        if (rsp < 0) {
            this.style.textShadow = "0 0 var(3.75px,0) rgba(255,255,255,0.5)"
            this.style.backgroundColor = "black"
            this.style.backgroundImage = "unset"
        } else {
            if (rsp < 1) {
                this.style.textShadow = "0 0 var(1.25px,0) rgba(255,255,255,0.85)"
            } else {
                const textShadowBlurRadiusPx = rsp * 5
                const textShadowOpacityPercent = rsp * 100
                this.style.textShadow = `0 0 ${textShadowBlurRadiusPx}px ${textShadowOpacityPercent}%}`
            }
            this.style.backgroundImage = `linear-gradient(90deg, rgba(255,255,255,0.85) ${
                rsp * 100
            }%, rgba(255,255,255,0) ${rsp * 100}%)`
        }

        if (0 <= rsp && rsp <= 1) {
            const container = document.querySelector<HTMLDivElement>("div.main-nowPlayingView-lyricsContent.injected")
            if (container) {
                container.scrollTo({ top: this.offsetTop - container.offsetTop - 20, behavior: "smooth" })
            }
        }

        return index + 1
    }

    render() {
        return html`<span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tsrAbsolute)}
            >${this.text}</span
        >`
    }
}
