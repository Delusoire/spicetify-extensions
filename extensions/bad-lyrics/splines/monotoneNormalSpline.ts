import { MonotoneCubicHermitInterpolation } from "https://esm.sh/v135/@adaskothebeast/splines@4.0.0/es2022/splines.mjs"

import { _ } from "../../../shared/deps.ts"

export class MonotoneNormalSpline extends MonotoneCubicHermitInterpolation {
    at(t: number) {
        const t0 = this.xs[0],
            tf = this.xs.at(-1)!
        const ct = _.clamp(t, t0, tf)
        return super.interpolate(ct)
    }
}
