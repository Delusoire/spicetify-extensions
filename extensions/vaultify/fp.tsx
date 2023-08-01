import { guard } from "fp-ts-std/Function"
import { Refinement } from "fp-ts/Refinement"

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
