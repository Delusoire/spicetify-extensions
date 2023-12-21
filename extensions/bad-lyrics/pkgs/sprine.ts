import { Spring } from "./spring.ts"

export type Interpolator = (relativeTime: number) => number

export class Sprine extends Spring {
    private updatedTime = Date.now()

    constructor(position: number, dampingRatio: number, frequency: number, private interpolate: Interpolator) {
        super(position, dampingRatio, frequency)
    }

    updateEquilibrium(relativeTime: number) {
        const interpolatedPosition = this.interpolate(relativeTime)
        this.setEquilibrium(interpolatedPosition)
    }

    get current() {
        const nextUpdatedTime = Date.now()
        const current = this.update(nextUpdatedTime - this.updatedTime)
        this.updatedTime = nextUpdatedTime
        return current
    }
}
