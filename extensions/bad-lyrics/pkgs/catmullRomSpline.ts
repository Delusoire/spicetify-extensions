import { _ } from "../../../shared/deps.ts"

// https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline

type vector = readonly number[]
export type vectorWithTime = readonly [number, vector]

export const scalarLerp = (s: number, e: number, t: number) => s + (e - s) * t
const vectorLerp = (u: vector, v: vector, t: number) => _.zip(u, v).map(([xiu, xiv]) => scalarLerp(xiu!, xiv!, t))
export const remapScalar = (s: number, e: number, x: number) => (x - s) / (e - s)

const slidingWindow = <E>(array: E[], slidingWindowSize: number) =>
    _.range(slidingWindowSize, array.length + 1).map(i => array.slice(i - slidingWindowSize, i))

type Quadruplet<A> = readonly [A, A, A, A]
type PointQuadruplet = Quadruplet<vector>
type TimeQuadruplet = Quadruplet<number>
export type PointInTimeQuadruplet = Quadruplet<vectorWithTime>
class CatmullRomCurve {
    private P
    private T

    constructor(points: PointInTimeQuadruplet) {
        ;[this.T, this.P] = _.unzip(points) as unknown as [TimeQuadruplet, PointQuadruplet]
    }

    at(t: number) {
        t = _.clamp(t, this.T[1], this.T[2])
        const vectorLerpWithRemapedScalar = (s: vectorWithTime, e: vectorWithTime, x: number) =>
            vectorLerp(s[1], e[1], remapScalar(s[0], e[0], x))

        const A = [
            vectorLerpWithRemapedScalar([this.T[0], this.P[0]], [this.T[1], this.P[1]], t),
            vectorLerpWithRemapedScalar([this.T[1], this.P[1]], [this.T[2], this.P[2]], t),
            vectorLerpWithRemapedScalar([this.T[2], this.P[2]], [this.T[3], this.P[3]], t),
        ]
        const B = [
            vectorLerpWithRemapedScalar([this.T[0], A[0]], [this.T[2], A[1]], t),
            vectorLerpWithRemapedScalar([this.T[1], A[1]], [this.T[3], A[2]], t),
        ]
        return vectorLerpWithRemapedScalar([this.T[1], B[0]], [this.T[2], B[1]], t)
    }
}

export class CatmullRollSpline {
    private points
    private catnumRollCurves

    private constructor(points: Array<vectorWithTime>) {
        this.points = _.sortBy(points, p => p[0])
        this.catnumRollCurves = slidingWindow(this.points, 4).map(
            P => new CatmullRomCurve(P as unknown as PointInTimeQuadruplet),
        )
    }

    at(t: number) {
        const point = [t, []] as vectorWithTime
        const i = _.clamp(_.sortedLastIndexBy(this.points, point, p => p[0]) - 2, 0, this.catnumRollCurves.length - 1)
        return this.catnumRollCurves[i].at(t)
    }

    static fromPoints(points: Array<vectorWithTime>) {
        if (points.length < 4) return null

        return new CatmullRollSpline(points)
    }

    static fromPointsClamped(points: Array<vectorWithTime>) {
        if (points.length < 2) return null

        const [P1, P2] = _.take(points, 2)
        const [P3, P4] = _.takeRight(points, 2)
        const P0 = [scalarLerp(P1[0], P2[0], -1), vectorLerp(P1[1], P2[1], -1)] as const
        const P5 = [scalarLerp(P3[0], P4[0], 2), vectorLerp(P3[1], P4[1], 2)] as const

        return this.fromPoints([P0, ...points, P5])
    }
}

function deCasteljau(points: vector[], position: number) {
    if (points.length < 2) return points[0]
    return deCasteljau(
        slidingWindow(points, 2).map(([Pi, Pj]) => vectorLerp(Pi, Pj, position)),
        position,
    )
}
