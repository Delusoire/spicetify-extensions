import { _ } from "./deps.ts"

const { Snackbar } = Spicetify

type async = {
    <A, B>(f: (a: A) => Promise<B>): (fa: Promise<A>) => Promise<B>
    <A, B>(f: (a: A) => B): (fa: Promise<A>) => Promise<B>
}
export const pMchain: async =
    <A, R>(f: (a: A) => R) =>
    async (fa: A) =>
        f(await fa)

export const chunkify50 =
    <A, R>(fn: (a: Array<A>) => R) =>
    async (args: Array<A>) => {
        const a = await Promise.all(_.chunk(args, 50).map(fn))
        return a.flat()
    }

export const progressify = <F extends (...args: any) => any>(f: F, n: number) => {
    let i = n,
        lastProgress = 0
    return async function (..._: Parameters<F>): Promise<Awaited<ReturnType<F>>> {
        const res = (await f(...arguments)) as Awaited<ReturnType<F>>,
            progress = Math.round((1 - --i / n) * 100)
        if (progress > lastProgress) {
            ;(Snackbar as any).SnackbarProvider.updater.enqueueSetState(Snackbar, () => ({
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
