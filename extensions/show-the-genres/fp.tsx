import { guard } from "fp-ts-std/Function"
import { Refinement } from "fp-ts/Refinement"
import { getUnionSemigroup } from "fp-ts/Record"
import { array as a } from "fp-ts"

type refineBranch<A, B extends A, R> = [Refinement<A, B>, (x: B) => R]
export const guard2 = <A, A1 extends A, A2 extends A, R>(
    branches: [refineBranch<A, A1, R>, refineBranch<A, A2, R>],
) =>
    guard(branches as unknown as [refineBranch<A, A, R>, refineBranch<A, A, R>])

export const guard3 = <A, A1 extends A, A2 extends A, A3 extends A, R>(
    branches: [
        refineBranch<A, A1, R>,
        refineBranch<A, A2, R>,
        refineBranch<A, A3, R>,
    ],
) =>
    guard(
        branches as unknown as [
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
        ],
    )

export const objConcat2 = <A1, A2>() =>
    getUnionSemigroup({ concat: (x: any, y: any) => x }).concat as (
        x: A1,
        y: A2,
    ) => A1 & A2
export const objConcat = <A,>() => a.reduce({} as A, objConcat2<A, A>())

type async = {
    <A, B>(f: (a: A) => Promise<B>): (fa: Promise<A>) => Promise<B>
    <A, B>(f: (a: A) => B): (fa: Promise<A>) => Promise<B>
}
export const async: async = (f: any) => async (fa: any) => f(await fa)
