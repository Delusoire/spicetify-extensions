import { Spring } from "./spring.ts"

export type Interpolator = (relativeTime: number) => number

export class Sprine extends Spring {
    constructor(position: number, dampingRatio: number, frequency: number, private interpolate: Interpolator) {
        super(position, dampingRatio, frequency)
    }

    updateEquilibrium(relativeTime: number) {
        const interpolatedPosition = this.interpolate(relativeTime)
        this.setEquilibrium(interpolatedPosition)
    }
}
