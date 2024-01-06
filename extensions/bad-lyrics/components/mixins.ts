import { consume } from "https://esm.sh/@lit/context"
import { LitElement } from "https://esm.sh/lit"
import { property } from "https://esm.sh/lit/decorators.js"

import { _ } from "../../../shared/deps.ts"

import { scrollTimeoutCtx, spotifyContainerCtx } from "./contexts.ts"

type Constructor<T = {}> = new (...args: any[]) => T

export declare class SyncedMixinI {
    content: string
    tss: number
    tes: number

    updateProgress(scaledProgress: number, depthToActiveAncestor: number): void
}

export const SyncedMixin = <T extends Constructor<LitElement>>(superClass: T) => {
    class mixedClass extends superClass {
        @property()
        content = ""
        @property({ type: Number })
        tss = 0
        @property({ type: Number })
        tes = 1

        updateProgress(scaledProgress: number, depthToActiveAncestor: number) {}
    }

    return mixedClass as Constructor<SyncedMixinI> & T
}

export const AnimatedMixin = <T extends Constructor<LitElement & SyncedMixinI>>(superClass: T) => {
    class mixedClass extends superClass {
        csp!: number
        updateProgress(scaledProgress: number, depthToActiveAncestor: number) {
            super.updateProgress(scaledProgress, depthToActiveAncestor)
            const csp = _.clamp(scaledProgress, -0.5, 1.5)
            if (this.csp !== csp) {
                this.csp = csp
                this.animateContent(depthToActiveAncestor)
            }
        }
        animateContent(depthToActiveAncestor: number) {}
    }

    return mixedClass
}

export const ScrolledMixin = <T extends Constructor<LitElement & SyncedMixinI>>(superClass: T) => {
    class mixedClass extends superClass {
        @consume({ context: scrollTimeoutCtx, subscribe: true })
        scrollTimeout = 0
        @consume({ context: spotifyContainerCtx })
        spotifyContainer?: HTMLElement

        updateProgress(scaledProgress: number, depthToActiveAncestor: number) {
            super.updateProgress(scaledProgress, depthToActiveAncestor)
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
                            behavior: document.visibilityState === "visible" ? "smooth" : "auto",
                        })
                    }
                }
            }
        }
    }

    return mixedClass
}
