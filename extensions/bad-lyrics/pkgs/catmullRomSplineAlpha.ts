import { _ } from "../../../shared/deps.ts"

type vector = number[]

const vectorDiff = (u: vector, v: vector) => _.zip(u, v).map(([xiu, xiv]) => xiu! - xiv!)
const vectorDist = (u: vector, v: vector) => Math.hypot(...vectorDiff(v, u))
const scalarLerp = (s: number, e: number, t: number) => s + (e - s) * t
const vectorLerp = (u: vector, v: vector, t: number) => _.zip(u, v).map(([xiu, xiv]) => scalarLerp(xiu!, xiv!, t))
const remapScalar = (s: number, e: number, x: number) => (x - s) / (e - s)

const slidingWindow = <E>(array: E[], slidingWindowSize: number) =>
    _.range(slidingWindowSize, array.length + 1).map(i => array.slice(i - slidingWindowSize, i))

type PointsQuadruplet = [vector, vector, vector, vector]
class CatmullRomCurve {
    private T

    constructor(private P: PointsQuadruplet, private alpha: number) {
        this.T = slidingWindow(P, 2)
            .map(([Pi, Pj]) => vectorDist(Pi, Pj) ** this.alpha)
            .map((ki, i, kis) => (i > 0 ? kis[i - 1] : 0) + ki)
    }

    at(t: number) {
        const X = (A: vector[], j: number) => (i: number) =>
            vectorLerp(A[i], A[i + 1], remapScalar(this.T[i], this.T[i + j], t))
        const A = _.range(3).map(X(this.P, 1))
        const B = _.range(2).map(X(A, 2))
        return X(B, 1)(1)
    }
}

export class CatmullRollSpline {
    private catnumRollCurves

    private constructor(private points: vector[], alpha = 0.5) {
        this.catnumRollCurves = slidingWindow(points, 4).map(P => new CatmullRomCurve(P as PointsQuadruplet, alpha))
    }

    at(t: number) {
        t = _.clamp(t, 0, this.points.length)
        const i = Math.floor(t)
        return this.catnumRollCurves[i].at(t - i)
    }

    fromPoints(points: vector[]) {
        if (points.length < 4) return null

        return new CatmullRollSpline(points)
    }

    fromPointsClamped(points: vector[]) {
        if (points.length < 2) return null

        return this.fromPoints([
            vectorLerp(points[0], points[1], -1),
            ...points,
            vectorLerp(points.at(-2)!, points.at(-1)!, 2),
        ])
    }
}
