const TAU = Math.PI * 2

const SLEEPING_EPSILON = 1e-7

export class Spring {
    private W0: number
    private v: number

    private inEquilibrium = true

    private p_e: number

    // We allow consumers to specify their own timescales
    compute(time = Date.now()) {
        const current = this.inEquilibrium ? this.p : this.solve(time - this.lastUpdateTime)
        this.lastUpdateTime = time
        return current
    }

    constructor(
        private p: number,
        private dampingRatio: number,
        frequency: number,
        private lastUpdateTime = Date.now(),
    ) {
        if (dampingRatio * frequency < 0) {
            throw new Error("Spring does not converge.")
        }

        this.v = 0
        this.p_e = p
        this.W0 = frequency * TAU
    }

    private solve(dt: number): number {
        const offset = this.p - this.p_e
        const dp = this.v * dt
        const A = this.dampingRatio * this.W0
        const Adt = A * dt
        const decay = Math.exp(-Adt)

        let nextP, nextV

        if (this.dampingRatio == 1) {
            nextP = this.p_e + (offset * (1 + Adt) + dp) * decay
            nextV = (this.v * (1 - Adt) - offset * (A * Adt)) * decay
        } else if (this.dampingRatio < 1) {
            const W_W0 = Math.sqrt(1 - this.dampingRatio * this.dampingRatio)
            const W = this.W0 * W_W0

            const i = Math.cos(W * dt)
            const j = Math.sin(W * dt)

            nextP = this.p_e + (offset * i + (dp + Adt * offset) * (j / (W * dt))) * decay
            nextV = (this.v * (i - (A / W) * j) - offset * j * (this.W0 / W_W0)) * decay
        } else if (this.dampingRatio > 1) {
            const W_W0 = Math.sqrt(this.dampingRatio ** 2 - 1)
            const W = this.W0 * W_W0

            const r_average = -this.W0 * this.dampingRatio

            const r_1 = r_average + W
            const r_2 = r_average - W

            const c_2 = (offset * r_1 - this.v) / (r_1 - r_2)
            const c_1 = offset - c_2

            const e_1 = c_1 * Math.exp(r_1 * dt)
            const e_2 = c_2 * Math.exp(r_2 * dt)

            nextP = this.p_e + e_1 + e_2
            nextV = r_1 * e_1 + r_2 * e_2

            if (Number.isNaN(nextP) || Number.isNaN(nextV)) {
                debugger
            }
        } else {
            throw "Solar flare detected."
        }

        this.v = nextV

        this.inEquilibrium = Math.abs(this.v) <= SLEEPING_EPSILON

        this.p = this.inEquilibrium ? this.p_e : nextP

        return nextP
    }

    setEquilibrium(position: number) {
        if (this.p_e != position) {
            this.p_e = position
            this.inEquilibrium = false
        }
        return this.p_e
    }

    reset(position: number) {
        this.v = 0
        this.p = this.p_e = position
        this.inEquilibrium = true
    }

    isInEquilibrium = () => this.inEquilibrium
}
