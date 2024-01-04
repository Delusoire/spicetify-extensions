import { _, fp } from "./deps.ts"

export type vector = number[]
export type matrix = vector[]

export const oppositeVector = (u: vector) => scalarMultVector(-1, u)
export const vectorAddVector = (u: vector, v: vector) => _.zip(u, v).map(([uxi, vxi]) => uxi! + vxi!)
export const vectorMultVector = (u: vector, v: vector) => _.zip(u, v).map(([uix, vix]) => uix! * vix!)
export const vectorDotVector = (u: vector, v: vector) => fp.sum(vectorMultVector(u, v))
export const vectorSubVector = (u: vector, v: vector) => vectorAddVector(u, oppositeVector(v))
export const scalarMultVector = (x: number, u: vector) => u.map(uxi => x * uxi)
export const vectorDivScalar = (u: vector, x: number) => scalarMultVector(1 / x, u)
export const scalarAddVector = (x: number, u: vector) => u.map(uxi => x + uxi)
export const vectorDist = (u: vector, v: vector) => Math.hypot(...vectorSubVector(v, u))
export const scalarLerp = (s: number, e: number, t: number) => s + (e - s) * t
export const vectorLerp = (u: vector, v: vector, t: number) =>
    _.zip(u, v).map(([uxi, vxi]) => scalarLerp(uxi!, vxi!, t))
export const remapScalar = (s: number, e: number, x: number) => (x - s) / (e - s)

export const vectorCartesianVector = (u: vector, v: vector) => u.map(ux => v.map(vx => [ux, vx] as const))

export function matrixMultMatrix(m1: matrix, m2: matrix) {
    if (!m1.length !== !m2[0].length) {
        throw "Arguments should be compatible"
    }

    const atColumn = (m: matrix, column: number) => m.map(row => row[column])

    const ijs = vectorCartesianVector(_.range(m1.length), _.range(m2[0].length))
    return ijs.map(fp.map(([i, j]) => vectorDotVector(m1[i], atColumn(m2, j))))
}
