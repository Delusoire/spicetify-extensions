import {
    array as ar,
    eq,
    string as str,
    record as rec,
    refinement as ref,
    semigroup as sg,
    function as f,
} from "https://esm.sh/fp-ts"
import { guard, memoize } from "https://esm.sh/fp-ts-std/Function"

const { Snackbar } = Spicetify

type refineBranch<A, B extends A, R> = [ref.Refinement<A, B>, (x: B) => R]
export const guard2 = <A, A1 extends A, A2 extends A, R>(branches: [refineBranch<A, A1, R>, refineBranch<A, A2, R>]) =>
    guard(branches as unknown as [refineBranch<A, A, R>, refineBranch<A, A, R>])
export const guard3 = <A, A1 extends A, A2 extends A, A3 extends A, R>(
    branches: [refineBranch<A, A1, R>, refineBranch<A, A2, R>, refineBranch<A, A3, R>],
) => guard(branches as unknown as [refineBranch<A, A, R>, refineBranch<A, A, R>, refineBranch<A, A, R>])

export const objConcat2 = <A1, A2>() => rec.getUnionSemigroup(sg.first<any>()).concat as (x: A1, y: A2) => A1 & A2
export const objConcat = <A>() => ar.reduce({} as A, objConcat2<A, A>())

type async = {
    <A, B>(f: (a: A) => Promise<B>): (fa: Promise<A>) => Promise<B>
    <A, B>(f: (a: A) => B): (fa: Promise<A>) => Promise<B>
}
export const pMchain: async =
    <A, R>(f: (a: A) => R) =>
    async (fa: A) =>
        f(await fa)

export const is =
    <A>(c: keyof A) =>
    <B extends A>(a: A[typeof c]) =>
    (field: A): field is B =>
        field[c] === a

export const tapAny =
    <A>(f: (a: A) => void) =>
    (fa: A) => {
        f(fa)
        return fa
    }

export const chunckify =
    (n: number) =>
    <A, R>(g: (a: A[]) => Promise<R[]>) =>
        f.flow(ar.chunksOf(n)<A>, ar.map(g), ps => Promise.all(ps), pMchain(ar.flatten))

type JSFunc = (...a: any) => any
export const withProgress =
    <F extends (f: JSFunc) => (fa: any) => any>(map: F) =>
    (f: Parameters<F>[0]) =>
    (fa: Parameters<ReturnType<F>>[0]): ReturnType<ReturnType<F>> => {
        let i = 0
        let lastProgress = 0
        return map(async (...a: Parameters<Parameters<F>[0]>) => {
            // @ts-expect-error: Fuck me
            const ret = await f(...a)
            const progress = Math.round((i++ / Object.values(fa).length) * 100)
            // // This is an older alternative, always updates 5 times a second
            // Snackbar.enqueueSnackbar(`Loading: ${progress}%`, {
            //     variant: "default",
            //     autoHideDuration: 200,
            //     transitionDuration: {
            //         enter: 0,
            //         exit: 0,
            //     },
            //     preventDuplicate: true,
            //     key: "sort-progress",
            // })
            if (progress > lastProgress) {
                Snackbar.updater.enqueueSetState(Snackbar, () => ({
                    snacks: [],
                    queue: [],
                }))
                Snackbar.enqueueSnackbar(`Loading: ${progress}%`, {
                    variant: "default",
                    autoHideDuration: 200,
                    transitionDuration: {
                        enter: 0,
                        exit: 0,
                    },
                })
            }
            lastProgress = progress
            return ret
        })(fa)
    }

export const toMemoized = <A extends any[], R>(fn: (...args: A) => R) =>
    f.pipe(fn, f.tupled, memoize<A>(eq.contramap(JSON.stringify)(str.Eq)), f.untupled)
