import { array as a, eq, string } from "fp-ts"
import { flow as f, pipe as p, tupled, untupled } from "fp-ts/function"
import { guard, memoize } from "fp-ts-std/Function"
import { getUnionSemigroup } from "fp-ts/Record"
import { Refinement } from "fp-ts/Refinement"
import { first } from "fp-ts/lib/Semigroup"
import { HKT } from "fp-ts/HKT"

type refineBranch<A, B extends A, R> = [Refinement<A, B>, (x: B) => R]
export const guard2 = <A, A1 extends A, A2 extends A, R>(branches: [refineBranch<A, A1, R>, refineBranch<A, A2, R>]) =>
    guard(branches as unknown as [refineBranch<A, A, R>, refineBranch<A, A, R>])
export const guard3 = <A, A1 extends A, A2 extends A, A3 extends A, R>(
    branches: [refineBranch<A, A1, R>, refineBranch<A, A2, R>, refineBranch<A, A3, R>],
) => guard(branches as unknown as [refineBranch<A, A, R>, refineBranch<A, A, R>, refineBranch<A, A, R>])
export const guard4 = <A, A1 extends A, A2 extends A, A3 extends A, A4 extends A, R>(
    branches: [refineBranch<A, A1, R>, refineBranch<A, A2, R>, refineBranch<A, A3, R>, refineBranch<A, A4, R>],
) =>
    guard(
        branches as unknown as [
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
        ],
    )
export const guard5 = <A, A1 extends A, A2 extends A, A3 extends A, A4 extends A, A5 extends A, R>(
    branches: [
        refineBranch<A, A1, R>,
        refineBranch<A, A2, R>,
        refineBranch<A, A3, R>,
        refineBranch<A, A4, R>,
        refineBranch<A, A5, R>,
    ],
) =>
    guard(
        branches as unknown as [
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
            refineBranch<A, A, R>,
        ],
    )

export const objConcat2 = <A1, A2>() => getUnionSemigroup(first<any>()).concat as (x: A1, y: A2) => A1 & A2
export const objConcat = <A,>() => a.reduce({} as A, objConcat2<A, A>())

type async = {
    <A, B>(f: (a: A) => Promise<B>): (fa: Promise<A>) => Promise<B>
    <A, B>(f: (a: A) => B): (fa: Promise<A>) => Promise<B>
}
export const pMchain: async =
    <A, R>(f: (a: A) => R) =>
    async (fa: A) =>
        f(await fa)

export const is =
    <A,>(c: keyof A) =>
    <B extends A>(a: A[typeof c]) =>
    (field: A): field is B =>
        field[c] === a

export const tapAny =
    <A,>(f: (a: A) => void) =>
    (fa: A) => {
        f(fa)
        return fa
    }

export const chunckify =
    (n: number) =>
    <A, R>(g: (a: A[]) => Promise<R[]>) =>
        f(a.chunksOf(n)<A>, a.map(g), ps => Promise.all(ps), pMchain(a.flatten))

export const withProgress =
    <F extends (f: (...a: any) => any) => (fa: any) => any>(map: F) =>
    (f: Parameters<F>[0]) =>
    (fa: Parameters<ReturnType<F>>[0]): ReturnType<ReturnType<F>> => {
        let i = 0
        return map(async (...a: Parameters<Parameters<F>[0]>) => {
            // @ts-ignore
            const ret = await f(...a)
            const progress = Math.round((i++ / Object.values(fa).length) * 100)
            Spicetify.showNotification(`Loading: ${progress}%`, false, 200)
            return ret
        })(fa)
    }

export const memoize2 = <A extends any[], R>(fn: (...args: A) => R) =>
    p(fn, tupled, memoize<A>(eq.contramap(JSON.stringify)(string.Eq)), untupled)
