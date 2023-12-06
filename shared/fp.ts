import { array as ar, function as f, record as rec, refinement as ref, semigroup as sg } from "https://esm.sh/fp-ts"

const { Snackbar } = Spicetify

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

export const chunckify =
    (n: number) =>
    <A, R>(g: (a: A[]) => Promise<R[]>) =>
        f.flow(ar.chunksOf(n)<A>, ar.map(g), ps => Promise.all(ps), pMchain(ar.flatten))

export const progressify = <F extends (...args: any) => any>(f: F, n: number) => {
    let i = n,
        lastProgress = 0
    return async function (..._: Parameters<F>): Promise<Awaited<ReturnType<F>>> {
        const res = (await f(arguments)) as Awaited<ReturnType<F>>,
            progress = Math.round((1 - --i / n) * 100)
        if (progress > lastProgress) {
            ;(Snackbar as any).updater.enqueueSetState(Snackbar, () => ({
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
        return res
    }
}
