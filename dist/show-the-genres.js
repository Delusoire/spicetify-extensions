var $$ = Object.create
var { defineProperty: I1, getPrototypeOf: X$, getOwnPropertyNames: Q$ } = Object
var Y$ = Object.prototype.hasOwnProperty
var k1 = ($, X, Q) => {
    Q = $ != null ? $$(X$($)) : {}
    const Y = X || !$ || !$.__esModule ? I1(Q, "default", { value: $, enumerable: !0 }) : Q
    for (let H of Q$($)) if (!Y$.call(Y, H)) I1(Y, H, { get: () => $[H], enumerable: !0 })
    return Y
}
var s4 = ($, X) => () => (X || $((X = { exports: {} }).exports, X), X.exports)
var s0 = ($, X) => {
    for (var Q in X) I1($, Q, { get: X[Q], enumerable: !0, configurable: !0, set: Y => (X[Q] = () => Y) })
}
var n4 = s4((DJ, r9) => {
    r9.exports = Spicetify.React
})
var s9 = s4((BJ, f9) => {
    f9.exports = Spicetify.ReactDOM
})
function C($) {
    return $
}
function d($) {
    return function () {
        return $
    }
}
function H0($) {
    return function () {
        var X = []
        for (var Q = 0; Q < arguments.length; Q++) X[Q] = arguments[Q]
        if (X.length > 1) return $(X[1], X[0])
        return function (Y) {
            return $(Y)(X[0])
        }
    }
}
function D($, X, Q, Y, H, J, j, P, O) {
    switch (arguments.length) {
        case 1:
            return $
        case 2:
            return function () {
                return X($.apply(this, arguments))
            }
        case 3:
            return function () {
                return Q(X($.apply(this, arguments)))
            }
        case 4:
            return function () {
                return Y(Q(X($.apply(this, arguments))))
            }
        case 5:
            return function () {
                return H(Y(Q(X($.apply(this, arguments)))))
            }
        case 6:
            return function () {
                return J(H(Y(Q(X($.apply(this, arguments))))))
            }
        case 7:
            return function () {
                return j(J(H(Y(Q(X($.apply(this, arguments)))))))
            }
        case 8:
            return function () {
                return P(j(J(H(Y(Q(X($.apply(this, arguments))))))))
            }
        case 9:
            return function () {
                return O(P(j(J(H(Y(Q(X($.apply(this, arguments)))))))))
            }
    }
    return
}
function t0($) {
    return function (X) {
        return $.apply(void 0, X)
    }
}
function $5($) {
    return function () {
        var X = []
        for (var Q = 0; Q < arguments.length; Q++) X[Q] = arguments[Q]
        return $(X)
    }
}
function Z($, X, Q, Y, H, J, j, P, O) {
    switch (arguments.length) {
        case 1:
            return $
        case 2:
            return X($)
        case 3:
            return Q(X($))
        case 4:
            return Y(Q(X($)))
        case 5:
            return H(Y(Q(X($))))
        case 6:
            return J(H(Y(Q(X($)))))
        case 7:
            return j(J(H(Y(Q(X($))))))
        case 8:
            return P(j(J(H(Y(Q(X($)))))))
        case 9:
            return O(P(j(J(H(Y(Q(X($))))))))
        default: {
            var A = arguments[0]
            for (var E0 = 1; E0 < arguments.length; E0++) A = arguments[E0](A)
            return A
        }
    }
}
var H$ = function ($, X, Q) {
    if (Q || arguments.length === 2) {
        for (var Y = 0, H = X.length, J; Y < H; Y++)
            if (J || !(Y in X)) {
                if (!J) J = Array.prototype.slice.call(X, 0, Y)
                J[Y] = X[Y]
            }
    }
    return $.concat(J || Array.prototype.slice.call(X))
}
var t4 = function ($) {
        return function () {
            return {
                concat: function (X, Q) {
                    return function (Y) {
                        return $.concat(X(Y), Q(Y))
                    }
                },
            }
        }
    },
    i4 = function ($) {
        var X = t4($)
        return function () {
            return {
                concat: X().concat,
                empty: function () {
                    return $.empty
                },
            }
        }
    }
var e4 = function ($) {
    return function (X) {
        return X($)
    }
}
var a4 = d(void 0),
    I0 = a4
var v = function ($, X) {
    var Q =
        typeof $ === "number"
            ? function (Y) {
                  return Y.length >= $
              }
            : $
    return function () {
        var Y = Array.from(arguments)
        if (Q(arguments)) return X.apply(this, Y)
        return function (H) {
            return X.apply(void 0, H$([H], Y, !1))
        }
    }
}
var J$ = function ($, X, Q) {
        if (Q || arguments.length === 2) {
            for (var Y = 0, H = X.length, J; Y < H; Y++)
                if (J || !(Y in X)) {
                    if (!J) J = Array.prototype.slice.call(X, 0, Y)
                    J[Y] = X[Y]
                }
        }
        return $.concat(J || Array.prototype.slice.call(X))
    },
    i0 = function ($) {
        return $._tag === "None"
    },
    k = function ($) {
        return $._tag === "Some"
    },
    G = { _tag: "None" },
    L = function ($) {
        return { _tag: "Some", value: $ }
    },
    J0 = function ($) {
        return $._tag === "Left"
    }
var b1 = function ($) {
        return [$]
    },
    Z0 = function ($) {
        return $.length > 0
    },
    k0 = function ($) {
        return $[0]
    },
    e0 = function ($) {
        return $.slice(1)
    },
    b0 = [],
    u = {}
var a0 = function ($) {
    return J$([$[0]], $.slice(1), !0)
}
var X5 = function ($, X) {
    return v(2, function (Q, Y) {
        return X.flatMap(Q, function (H) {
            return $.fromIO(Y(H))
        })
    })
}
function j0($) {
    return function (X) {
        return function (Q) {
            return $.ap(
                $.map(Q, function (Y) {
                    return function () {
                        return Y
                    }
                }),
                X,
            )
        }
    }
}
function D0($) {
    return function (X) {
        return function (Q) {
            return $.ap(
                $.map(Q, function () {
                    return function (Y) {
                        return Y
                    }
                }),
                X,
            )
        }
    }
}
function P0($) {
    return function (X, Q) {
        return function (Y) {
            return $.ap(
                $.map(Y, function (H) {
                    return function (J) {
                        var j
                        return Object.assign({}, H, ((j = {}), (j[X] = J), j))
                    }
                }),
                Q,
            )
        }
    }
}
function $1($) {
    return function (X) {
        return {
            concat: function (Q, Y) {
                return $.ap(
                    $.map(Q, function (H) {
                        return function (J) {
                            return X.concat(H, J)
                        }
                    }),
                    Y,
                )
            },
        }
    }
}
function x0($) {
    return function (X) {
        return function (Q) {
            return $.map(Q, function (Y) {
                return Y(X)
            })
        }
    }
}
function p($) {
    return function (X) {
        return function (Q) {
            return $.map(Q, function (Y) {
                var H
                return (H = {}), (H[X] = Y), H
            })
        }
    }
}
var o = function ($) {
    return function (X, Q) {
        return function (Y) {
            return $.map(Y, function (H) {
                var J
                return Object.assign({}, H, ((J = {}), (J[X] = Q(H)), J))
            })
        }
    }
}
function h0($) {
    return function (X, Q) {
        return $.map(X, function () {
            return Q
        })
    }
}
function X1($) {
    var X = h0($)
    return function (Q) {
        return X(Q, void 0)
    }
}
function Q5($) {
    var X = $1($)
    return function (Q) {
        return { concat: X(Q).concat, empty: $.of(Q.empty) }
    }
}
var B = {}
s0(B, {
    zipWith: () => {
        {
            return W7
        }
    },
    zip: () => {
        {
            return g7
        }
    },
    zero: () => {
        {
            return C0
        }
    },
    wither: () => {
        {
            return E3
        }
    },
    wilt: () => {
        {
            return I3
        }
    },
    updateAt: () => {
        {
            return V3
        }
    },
    unzip: () => {
        {
            return v3
        }
    },
    unsafeUpdateAt: () => {
        {
            return H9
        }
    },
    unsafeInsertAt: () => {
        {
            return Y9
        }
    },
    unsafeDeleteAt: () => {
        {
            return J9
        }
    },
    uniq: () => {
        {
            return U3
        }
    },
    union: () => {
        {
            return L4
        }
    },
    unfold: () => {
        {
            return W4
        }
    },
    traverseWithIndex: () => {
        {
            return S4
        }
    },
    traverse: () => {
        {
            return t7
        }
    },
    takeRight: () => {
        {
            return e$
        }
    },
    takeLeftWhile: () => {
        {
            return a$
        }
    },
    takeLeft: () => {
        {
            return i$
        }
    },
    tail: () => {
        {
            return s$
        }
    },
    splitAt: () => {
        {
            return M7
        }
    },
    spanLeft: () => {
        {
            return $3
        }
    },
    sortBy: () => {
        {
            return N3
        }
    },
    sort: () => {
        {
            return q3
        }
    },
    some: () => {
        {
            return Z9
        }
    },
    snoc: () => {
        {
            return NX
        }
    },
    size: () => {
        {
            return o$
        }
    },
    sequence: () => {
        {
            return d0
        }
    },
    separate: () => {
        {
            return U0
        }
    },
    scanRight: () => {
        {
            return p$
        }
    },
    scanLeft: () => {
        {
            return d$
        }
    },
    rotate: () => {
        {
            return w3
        }
    },
    rights: () => {
        {
            return B3
        }
    },
    reverse: () => {
        {
            return z3
        }
    },
    replicate: () => {
        {
            return q7
        }
    },
    reduceWithIndex: () => {
        {
            return R4
        }
    },
    reduceRightWithIndex: () => {
        {
            return s7
        }
    },
    reduceRight: () => {
        {
            return f7
        }
    },
    reduce: () => {
        {
            return O4
        }
    },
    range: () => {
        {
            return CX
        }
    },
    prependW: () => {
        {
            return y$
        }
    },
    prependToAll: () => {
        {
            return TX
        }
    },
    prependAll: () => {
        {
            return F7
        }
    },
    prepend: () => {
        {
            return h$
        }
    },
    partitionWithIndex: () => {
        {
            return N4
        }
    },
    partitionMapWithIndex: () => {
        {
            return T4
        }
    },
    partitionMap: () => {
        {
            return _7
        }
    },
    partition: () => {
        {
            return l7
        }
    },
    of: () => {
        {
            return e
        }
    },
    modifyAt: () => {
        {
            return S7
        }
    },
    matchW: () => {
        {
            return w7
        }
    },
    matchRightW: () => {
        {
            return T7
        }
    },
    matchRight: () => {
        {
            return A7
        }
    },
    matchLeftW: () => {
        {
            return U7
        }
    },
    matchLeft: () => {
        {
            return N7
        }
    },
    match: () => {
        {
            return m$
        }
    },
    mapWithIndex: () => {
        {
            return c7
        }
    },
    map: () => {
        {
            return _0
        }
    },
    makeBy: () => {
        {
            return K7
        }
    },
    lookup: () => {
        {
            return r$
        }
    },
    let: () => {
        {
            return BX
        }
    },
    lefts: () => {
        {
            return K3
        }
    },
    last: () => {
        {
            return f$
        }
    },
    isOutOfBound: () => {
        {
            return l0
        }
    },
    isNonEmpty: () => {
        {
            return q
        }
    },
    isEmpty: () => {
        {
            return t
        }
    },
    intersperse: () => {
        {
            return C3
        }
    },
    intersection: () => {
        {
            return z4
        }
    },
    intercalate: () => {
        {
            return VX
        }
    },
    insertAt: () => {
        {
            return G3
        }
    },
    init: () => {
        {
            return t$
        }
    },
    head: () => {
        {
            return n$
        }
    },
    guard: () => {
        {
            return s3
        }
    },
    getUnionSemigroup: () => {
        {
            return e7
        }
    },
    getUnionMonoid: () => {
        {
            return y3
        }
    },
    getShow: () => {
        {
            return k3
        }
    },
    getSemigroup: () => {
        {
            return i7
        }
    },
    getOrd: () => {
        {
            return h3
        }
    },
    getMonoid: () => {
        {
            return b3
        }
    },
    getIntersectionSemigroup: () => {
        {
            return u3
        }
    },
    getEq: () => {
        {
            return x3
        }
    },
    getDifferenceMagma: () => {
        {
            return c3
        }
    },
    fromPredicate: () => {
        {
            return c$
        }
    },
    fromOptionK: () => {
        {
            return O3
        }
    },
    fromOption: () => {
        {
            return v7
        }
    },
    fromEitherK: () => {
        {
            return DX
        }
    },
    fromEither: () => {
        {
            return C7
        }
    },
    foldRight: () => {
        {
            return _$
        }
    },
    foldMapWithIndex: () => {
        {
            return n7
        }
    },
    foldMap: () => {
        {
            return r7
        }
    },
    foldLeft: () => {
        {
            return l$
        }
    },
    flatten: () => {
        {
            return F3
        }
    },
    flatMap: () => {
        {
            return E
        }
    },
    flap: () => {
        {
            return m3
        }
    },
    findLastMap: () => {
        {
            return D3
        }
    },
    findLastIndex: () => {
        {
            return P3
        }
    },
    findLast: () => {
        {
            return j3
        }
    },
    findIndex: () => {
        {
            return H3
        }
    },
    findFirstMap: () => {
        {
            return Z3
        }
    },
    findFirst: () => {
        {
            return J3
        }
    },
    filterWithIndex: () => {
        {
            return o7
        }
    },
    filterMapWithIndex: () => {
        {
            return w4
        }
    },
    filterMap: () => {
        {
            return U4
        }
    },
    filterE: () => {
        {
            return jX
        }
    },
    filter: () => {
        {
            return m7
        }
    },
    extend: () => {
        {
            return A4
        }
    },
    exists: () => {
        {
            return GX
        }
    },
    every: () => {
        {
            return PX
        }
    },
    empty: () => {
        {
            return wX
        }
    },
    elem: () => {
        {
            return V4
        }
    },
    duplicate: () => {
        {
            return M3
        }
    },
    dropRight: () => {
        {
            return Q3
        }
    },
    dropLeftWhile: () => {
        {
            return Y3
        }
    },
    dropLeft: () => {
        {
            return X3
        }
    },
    difference: () => {
        {
            return B4
        }
    },
    deleteAt: () => {
        {
            return L3
        }
    },
    copy: () => {
        {
            return U
        }
    },
    cons: () => {
        {
            return UX
        }
    },
    concatW: () => {
        {
            return E7
        }
    },
    concat: () => {
        {
            return S3
        }
    },
    comprehension: () => {
        {
            return R3
        }
    },
    compact: () => {
        {
            return w0
        }
    },
    chunksOf: () => {
        {
            return A3
        }
    },
    chop: () => {
        {
            return T3
        }
    },
    chainWithIndex: () => {
        {
            return O7
        }
    },
    chainRecDepthFirst: () => {
        {
            return YX
        }
    },
    chainRecBreadthFirst: () => {
        {
            return JX
        }
    },
    chainFirst: () => {
        {
            return o3
        }
    },
    chain: () => {
        {
            return vX
        }
    },
    bindTo: () => {
        {
            return zX
        }
    },
    bind: () => {
        {
            return KX
        }
    },
    array: () => {
        {
            return AX
        }
    },
    appendW: () => {
        {
            return u$
        }
    },
    append: () => {
        {
            return V1
        }
    },
    apSecond: () => {
        {
            return d3
        }
    },
    apS: () => {
        {
            return qX
        }
    },
    apFirst: () => {
        {
            return _3
        }
    },
    ap: () => {
        {
            return u7
        }
    },
    altW: () => {
        {
            return d7
        }
    },
    alt: () => {
        {
            return p7
        }
    },
    Zero: () => {
        {
            return $9
        }
    },
    Witherable: () => {
        {
            return X9
        }
    },
    Unfoldable: () => {
        {
            return n3
        }
    },
    URI: () => {
        {
            return V
        }
    },
    TraversableWithIndex: () => {
        {
            return QX
        }
    },
    Traversable: () => {
        {
            return M4
        }
    },
    Pointed: () => {
        {
            return a7
        }
    },
    Monad: () => {
        {
            return r3
        }
    },
    FunctorWithIndex: () => {
        {
            return l3
        }
    },
    Functor: () => {
        {
            return C1
        }
    },
    FromEither: () => {
        {
            return Q9
        }
    },
    FoldableWithIndex: () => {
        {
            return XX
        }
    },
    Foldable: () => {
        {
            return $X
        }
    },
    FilterableWithIndex: () => {
        {
            return a3
        }
    },
    Filterable: () => {
        {
            return e3
        }
    },
    Extend: () => {
        {
            return i3
        }
    },
    Do: () => {
        {
            return LX
        }
    },
    Compactable: () => {
        {
            return F4
        }
    },
    ChainRecDepthFirst: () => {
        {
            return HX
        }
    },
    ChainRecBreadthFirst: () => {
        {
            return ZX
        }
    },
    Chain: () => {
        {
            return g4
        }
    },
    Apply: () => {
        {
            return w1
        }
    },
    Applicative: () => {
        {
            return p3
        }
    },
    Alternative: () => {
        {
            return t3
        }
    },
    Alt: () => {
        {
            return f3
        }
    },
})
function Y5($) {
    var X = b($)
    return function (Q) {
        return function (Y) {
            return X(Y, Q)
        }
    }
}
function b($) {
    return function (X, Q) {
        return $.chain(X, function (Y) {
            return $.map(Q(Y), function () {
                return Y
            })
        })
    }
}
function r($) {
    return function (X, Q) {
        return function (Y) {
            return $.chain(Y, function (H) {
                return $.map(Q(H), function (J) {
                    var j
                    return Object.assign({}, H, ((j = {}), (j[X] = J), j))
                })
            })
        }
    }
}
function Q1($) {
    return function (X) {
        return D(X, $.fromEither)
    }
}
function J5($, X) {
    var Q = Q1($),
        Y = b(X)
    return function (H, J) {
        return Y(H, Q(J))
    }
}
var Y1 = {}
s0(Y1, {
    tuple: () => {
        {
            return j5
        }
    },
    struct: () => {
        {
            return Z5
        }
    },
    strictEqual: () => {
        {
            return V$
        }
    },
    getTupleEq: () => {
        {
            return P$
        }
    },
    getStructEq: () => {
        {
            return G$
        }
    },
    getSemigroup: () => {
        {
            return G5
        }
    },
    getMonoid: () => {
        {
            return D$
        }
    },
    fromEquals: () => {
        {
            return n
        }
    },
    eqString: () => {
        {
            return B$
        }
    },
    eqStrict: () => {
        {
            return f
        }
    },
    eqNumber: () => {
        {
            return K$
        }
    },
    eqDate: () => {
        {
            return q$
        }
    },
    eqBoolean: () => {
        {
            return z$
        }
    },
    eq: () => {
        {
            return L$
        }
    },
    contramap: () => {
        {
            return D5
        }
    },
    URI: () => {
        {
            return P5
        }
    },
    Contravariant: () => {
        {
            return V5
        }
    },
})
var n = function ($) {
        return {
            equals: function (X, Q) {
                return X === Q || $(X, Q)
            },
        }
    },
    Z5 = function ($) {
        return n(function (X, Q) {
            for (var Y in $) if (!$[Y].equals(X[Y], Q[Y])) return !1
            return !0
        })
    },
    j5 = function () {
        var $ = []
        for (var X = 0; X < arguments.length; X++) $[X] = arguments[X]
        return n(function (Q, Y) {
            return $.every(function (H, J) {
                return H.equals(Q[J], Y[J])
            })
        })
    },
    Z$ = function ($, X) {
        return Z($, D5(X))
    },
    D5 = function ($) {
        return function (X) {
            return n(function (Q, Y) {
                return X.equals($(Q), $(Y))
            })
        }
    },
    P5 = "Eq",
    f = {
        equals: function ($, X) {
            return $ === X
        },
    },
    j$ = {
        equals: function () {
            return !0
        },
    },
    G5 = function () {
        return {
            concat: function ($, X) {
                return n(function (Q, Y) {
                    return $.equals(Q, Y) && X.equals(Q, Y)
                })
            },
        }
    },
    D$ = function () {
        return { concat: G5().concat, empty: j$ }
    },
    V5 = { URI: P5, contramap: Z$ },
    P$ = j5,
    G$ = Z5,
    V$ = f.equals,
    L$ = V5,
    z$ = f,
    B$ = f,
    K$ = f,
    q$ = {
        equals: function ($, X) {
            return $.valueOf() === X.valueOf()
        },
    }
var w$ = function ($, X) {
        return $ < X ? -1 : $ > X ? 1 : 0
    },
    v$ = function ($) {
        return function (X, Q) {
            return X === Q || $(X, Q) === 0
        }
    },
    H1 = function ($) {
        return {
            equals: v$($),
            compare: function (X, Q) {
                return X === Q ? 0 : $(X, Q)
            },
        }
    }
var C$ = function () {
        return {
            concat: function ($, X) {
                return H1(function (Q, Y) {
                    var H = $.compare(Q, Y)
                    return H !== 0 ? H : X.compare(Q, Y)
                })
            },
        }
    },
    L5 = function () {
        return {
            concat: C$().concat,
            empty: H1(function () {
                return 0
            }),
        }
    }
var z5 = function ($) {
        return function (X, Q) {
            return X === Q || $.compare(X, Q) < 1 ? X : Q
        }
    },
    y0 = function ($) {
        return function (X, Q) {
            return X === Q || $.compare(X, Q) > -1 ? X : Q
        }
    }
var jQ = { equals: f.equals, compare: w$ }
var B5 = function ($) {
    return function (X) {
        return function (Q) {
            return Q.reduce(function (Y, H) {
                return $.concat(Y, H)
            }, X)
        }
    }
}
var x1 = function ($) {
        return { concat: z5($) }
    },
    h1 = function ($) {
        return { concat: y0($) }
    },
    T$ = function ($) {
        return {
            concat: function () {
                return $
            },
        }
    }
var K5 = function () {
    return { concat: C }
}
var q5 = B5,
    v5 = T$(void 0)
var C5 = {
        concat: function ($, X) {
            return $ && X
        },
    },
    w5 = {
        concat: function ($, X) {
            return $ || X
        },
    }
var U5 = {
        concat: function ($, X) {
            return $ + X
        },
    },
    N5 = {
        concat: function ($, X) {
            return $ + X
        },
    },
    T5 = {
        concat: function ($, X) {
            return $ * X
        },
    }
var S$ = function ($, X, Q) {
        if (Q || arguments.length === 2) {
            for (var Y = 0, H = X.length, J; Y < H; Y++)
                if (J || !(Y in X)) {
                    if (!J) J = Array.prototype.slice.call(X, 0, Y)
                    J[Y] = X[Y]
                }
        }
        return $.concat(J || Array.prototype.slice.call(X))
    },
    A5 = b0,
    G0 = Z0,
    O5 = function ($, X) {
        return $ < 0 || $ >= X.length
    },
    R5 = function ($) {
        return function (X) {
            return S$([$], X, !0)
        }
    },
    S5 = R5
var W5 = function ($, X, Q) {
    if (G0(Q)) {
        var Y = a0(Q)
        return Y.splice($, 0, X), Y
    }
    return [X]
}
var g5 = function ($) {
    return function (X) {
        return X.length === 1 ? X : X.slice().sort($.compare)
    }
}
var F5 = function ($) {
        return function (X) {
            var Q = [$, X[0]]
            for (var Y = 1; Y < X.length; Y++) Q.push($, X[Y])
            return Q
        }
    },
    M5 = function ($) {
        return function (X) {
            var Q = E5(X)
            return G0(Q) ? Z(Q, F5($), S5(V0(X))) : X
        }
    }
var W$ = k0
var V0 = W$,
    E5 = e0,
    J1 = function ($) {
        return $[$.length - 1]
    }
var u0 = function ($) {
    return function (X) {
        return X.reduce($.concat)
    }
}
var y1 = function ($) {
    var X = u0($)
    return function (Q) {
        return D(M5(Q), X)
    }
}
function y5($, X) {
    return X
        ? $.concat(X)
        : function (Q) {
              return Q.concat($)
          }
}
function _5($, X) {
    return X === void 0 ? L0($) : Z(X, L0($))
}
var c1 = function ($, X, Q) {
        if (Q || arguments.length === 2) {
            for (var Y = 0, H = X.length, J; Y < H; Y++)
                if (J || !(Y in X)) {
                    if (!J) J = Array.prototype.slice.call(X, 0, Y)
                    J[Y] = X[Y]
                }
        }
        return $.concat(J || Array.prototype.slice.call(X))
    },
    z0 = function ($) {
        return $.length > 0
    },
    m1 = function ($, X) {
        return $ < 0 || $ >= X.length
    },
    l1 = function ($) {
        return function (X) {
            return c1([$], X, !0)
        }
    },
    L0 = l1,
    _1 = function ($) {
        return function (X) {
            return c1(c1([], X, !0), [$], !1)
        }
    },
    d1 = _1,
    I5 = function ($, X, Q) {
        if (z0(Q)) {
            var Y = r1(Q)
            return Y.splice($, 0, X), Y
        }
        return [X]
    },
    k5 = function ($, X, Q) {
        var Y = r1(Q)
        return (Y[$] = X), Y
    },
    p1 = function ($) {
        return function (X) {
            if (X.length === 1) return c0(X)
            var Q = [B0(X)],
                Y = K0(X),
                H = function (O) {
                    if (
                        Q.every(function (A) {
                            return !$.equals(A, O)
                        })
                    )
                        Q.push(O)
                }
            for (var J = 0, j = Y; J < j.length; J++) {
                var P = j[J]
                H(P)
            }
            return Q
        }
    },
    b5 = function ($) {
        if (z0($)) {
            var X = L5()
            return g$($.reduce(X.concat, X.empty))
        }
        return c0
    },
    x5 = function ($) {
        var X = p1($)
        return function (Q) {
            return function (Y) {
                return X(Z(Y, y5(Q)))
            }
        }
    },
    o1 = function ($) {
        return function (X) {
            var Q = X.length,
                Y = Math.round($) % Q
            if (m1(Math.abs(Y), X) || Y === 0) return c0(X)
            if (Y < 0) {
                var H = Z1(-Y)(X),
                    J = H[0],
                    j = H[1]
                return Z(j, y5(J))
            } else return o1(Y - Q)(X)
        }
    },
    r1 = a0
var n1 = function ($) {
    return function (X) {
        var Q = Math.max(0, Math.floor(X)),
            Y = [$(0)]
        for (var H = 1; H < Q; H++) Y.push($(H))
        return Y
    }
}
var h5 = function ($, X) {
    return $ <= X
        ? n1(function (Q) {
              return $ + Q
          })(X - $ + 1)
        : [$]
}
var g$ = function ($) {
    return function (X) {
        return X.slice().sort($.compare)
    }
}
var c0 = r1,
    u5 = function ($) {
        return [$]
    }
var f1 = function ($) {
        return function (X) {
            var Q = [$, X[0]]
            for (var Y = 1; Y < X.length; Y++) Q.push($, X[Y])
            return Q
        }
    },
    c5 = function ($) {
        return function (X) {
            var Q = K0(X)
            return z0(Q) ? Z(Q, f1($), L0(B0(X))) : c0(X)
        }
    }
var s1 = function ($) {
        return function (X) {
            var Q = $(X),
                Y = Q[0],
                H = Q[1],
                J = [Y],
                j = H
            while (z0(j)) {
                var P = $(j),
                    O = P[0],
                    A = P[1]
                J.push(O), (j = A)
            }
            return J
        }
    },
    Z1 = function ($) {
        return function (X) {
            var Q = Math.max(1, $)
            return Q >= X.length ? [c0(X), []] : [Z(X.slice(1, Q), L0(B0(X))), X.slice(Q)]
        }
    },
    m5 = function ($) {
        return s1(Z1($))
    }
var B0 = V0,
    K0 = function ($) {
        return $.slice(1)
    },
    l5 = J1,
    t1 = function ($) {
        return $.slice(0, -1)
    }
var d5 = function ($, X) {
    return Z($, d1(X))
}
var p5 = {
        equals: function ($, X) {
            return $ === X
        },
    },
    m = {
        equals: p5.equals,
        compare: function ($, X) {
            return $ < X ? -1 : $ > X ? 1 : 0
        },
    },
    AQ = { equals: p5.equals, compare: m.compare, top: Infinity, bottom: -Infinity }
var M$ = {
        concat: function ($, X) {
            return $ - X
        },
    },
    o5 = {
        concat: function ($, X) {
            return $ + X
        },
    },
    r5 = {
        concat: function ($, X) {
            return $ * X
        },
    },
    n5 = { concat: o5.concat, empty: 0 },
    f5 = { concat: r5.concat, empty: 1 },
    OQ = {
        add: o5.concat,
        zero: 0,
        mul: r5.concat,
        one: 1,
        sub: M$.concat,
        degree: function ($) {
            return 1
        },
        div: function ($, X) {
            return $ / X
        },
        mod: function ($, X) {
            return $ % X
        },
    }
var j1 = function ($, X) {
    return { left: $, right: X }
}
function s5($, X) {
    return function (Q) {
        var Y = $.traverse(Q)
        return function (H, J) {
            return Q.map(Y(H, J), X.separate)
        }
    }
}
function t5($, X) {
    return function (Q) {
        var Y = $.traverse(Q)
        return function (H, J) {
            return Q.map(Y(H, J), X.compact)
        }
    }
}
function i5($) {
    return function (X) {
        var Q = $.wither(X)
        return function (Y) {
            return function (H) {
                return Q(H, function (J) {
                    return X.map(Y(J), function (j) {
                        return j ? L(J) : G
                    })
                })
            }
        }
    }
}
function e5($, X) {
    return function (Q) {
        return Q ? X.of(void 0) : $.zero()
    }
}
function m0($, X) {
    return X === void 0
        ? function (Q) {
              return m0($, Q)
          }
        : e1($, X)
        ? G
        : L(X[$])
}
function D1($) {
    return function (X) {
        var Q = []
        for (var Y = 0, H = X; Y < H.length; Y++) {
            var J = H[Y]
            if (!$(J)) break
            Q.push(J)
        }
        var j = Q.length
        return j === X.length ? X : j === 0 ? P4 : Q
    }
}
function $4($) {
    return function (X) {
        var Q = x$(X, $)
        return Q === 0 ? X : Q === X.length ? P4 : X.slice(Q)
    }
}
function $7($) {
    return function (X) {
        for (var Q = 0; Q < X.length; Q++) if ($(X[Q])) return L(X[Q])
        return G
    }
}
function Q7($) {
    return function (X) {
        for (var Q = X.length - 1; Q >= 0; Q--) if ($(X[Q])) return L(X[Q])
        return G
    }
}
function P1($) {
    return function (X, Q) {
        if (Q === void 0) {
            var Y = P1($)
            return function (j) {
                return Y(X, j)
            }
        }
        var H = function (j) {
                return $.equals(j, X)
            },
            J = 0
        for (; J < Q.length; J++) if (H(Q[J])) return !0
        return !1
    }
}
function G1($) {
    return function (X) {
        return X.every($)
    }
}
var I$ = function ($, X, Q) {
    if (Q || arguments.length === 2) {
        for (var Y = 0, H = X.length, J; Y < H; Y++)
            if (J || !(Y in X)) {
                if (!J) J = Array.prototype.slice.call(X, 0, Y)
                J[Y] = X[Y]
            }
    }
    return $.concat(J || Array.prototype.slice.call(X))
}
var i1 = G0
var k$ = function ($, X) {
        return function (Q) {
            return i1(Q) ? X(Q) : $()
        }
    },
    b$ = k$
var e1 = O5,
    a1 = function ($) {
        return i1($) ? L(V0($)) : G
    },
    a5 = function ($) {
        return i1($) ? L(J1($)) : G
    }
var x$ = function ($, X) {
    var Q = $.length,
        Y = 0
    for (; Y < Q; Y++) if (!X($[Y])) break
    return Y
}
var X4 = function ($) {
        return function (X) {
            for (var Q = 0; Q < X.length; Q++) if ($(X[Q])) return L(Q)
            return G
        }
    },
    X7 = function ($) {
        return function (X) {
            for (var Q = 0; Q < X.length; Q++) {
                var Y = $(X[Q])
                if (k(Y)) return Y
            }
            return G
        }
    },
    Y7 = function ($) {
        return function (X) {
            for (var Q = X.length - 1; Q >= 0; Q--) {
                var Y = $(X[Q])
                if (k(Y)) return Y
            }
            return G
        }
    },
    H7 = function ($) {
        return function (X) {
            for (var Q = X.length - 1; Q >= 0; Q--) if ($(X[Q])) return L(Q)
            return G
        }
    },
    J7 = function ($, X) {
        return function (Q) {
            return $ < 0 || $ > Q.length ? G : L(W5($, X, Q))
        }
    }
var Z7 = function ($) {
    return function (X) {
        return e1($, X) ? G : L(z7($, X))
    }
}
var s = function ($) {
    return $.length <= 1 ? $ : $.slice().reverse()
}
var j7 = function ($, X) {
        return Z($, j4(X))
    },
    D7 = function ($, X) {
        return Z($, D4(X))
    }
var Q4 = function ($) {
        return function (X) {
            return function (Q) {
                return Q.reduce(function (Y, H, J) {
                    return $.concat(Y, X(J, H))
                }, $.empty)
            }
        }
    },
    Y4 = function ($, X) {
        return H4($, function (Q, Y, H) {
            return X(Y, H)
        })
    },
    P7 = function ($) {
        var X = Q4($)
        return function (Q) {
            return X(function (Y, H) {
                return Q(H)
            })
        }
    },
    H4 = function ($, X) {
        return function (Q) {
            var Y = Q.length,
                H = $
            for (var J = 0; J < Y; J++) H = X(J, H, Q[J])
            return H
        }
    },
    G7 = function ($, X) {
        return J4($, function (Q, Y, H) {
            return X(Y, H)
        })
    },
    J4 = function ($, X) {
        return function (Q) {
            return Q.reduceRight(function (Y, H, J) {
                return X(J, H, Y)
            }, $)
        }
    }
var V7 = function ($) {
    return {
        show: function (X) {
            return "[".concat(X.map($.show).join(", "), "]")
        },
    }
}
var Z4 = function ($) {
        return n(function (X, Q) {
            return (
                X.length === Q.length &&
                X.every(function (Y, H) {
                    return $.equals(Y, Q[H])
                })
            )
        })
    },
    L7 = function ($) {
        return H1(function (X, Q) {
            var Y = X.length,
                H = Q.length,
                J = Math.min(Y, H)
            for (var j = 0; j < J; j++) {
                var P = $.compare(X[j], Q[j])
                if (P !== 0) return P
            }
            return m.compare(Y, H)
        })
    }
var j4 = function ($) {
    return function (X) {
        var Q = I$([], $(X), !0),
            Y = []
        while (Q.length > 0) {
            var H = Q.shift()
            if (J0(H)) Q.unshift.apply(Q, $(H.left))
            else Y.push(H.right)
        }
        return Y
    }
}
var D4 = function ($) {
    return function (X) {
        var Q = $(X),
            Y = [],
            H = []
        function J(A) {
            if (J0(A))
                $(A.left).forEach(function (E0) {
                    return Y.push(E0)
                })
            else H.push(A.right)
        }
        for (var j = 0, P = Q; j < P.length; j++) {
            var O = P[j]
            J(O)
        }
        while (Y.length > 0) J(Y.shift())
        return H
    }
}
var z7 = function ($, X) {
    var Q = X.slice()
    return Q.splice($, 1), Q
}
var P4 = A5
var B7 = function ($) {
    var X = y1($)
    return function (Q) {
        return b$(function () {
            return $.empty
        }, X(Q))
    }
}
function c$($) {
    return function (X) {
        return $(X) ? [X] : []
    }
}
function a$($) {
    return function (X) {
        var Q = []
        for (var Y = 0, H = X; Y < H.length; Y++) {
            var J = H[Y]
            if (!$(J)) break
            Q.push(J)
        }
        return Q
    }
}
function $3($) {
    return function (X) {
        var Q = M7(R7(X, $))(X),
            Y = Q[0],
            H = Q[1]
        return { init: Y, rest: H }
    }
}
function Y3($) {
    return function (X) {
        return X.slice(R7(X, $))
    }
}
function J3($) {
    return $7($)
}
function j3($) {
    return Q7($)
}
function g7($, X) {
    if (X === void 0)
        return function (Q) {
            return g7(Q, $)
        }
    return W7($, X, function (Q, Y) {
        return [Q, Y]
    })
}
function R3($, X, Q) {
    if (Q === void 0)
        Q = function () {
            return !0
        }
    var Y = function (H, J) {
        return q(J)
            ? E(B0(J), function (j) {
                  return Y(Z(H, V1(j)), K0(J))
              })
            : Q.apply(void 0, H)
            ? [X.apply(void 0, H)]
            : []
    }
    return Y([], $)
}
function L4($) {
    var X = x5($)
    return function (Q, Y) {
        if (Y === void 0) {
            var H = L4($)
            return function (J) {
                return H(J, Q)
            }
        }
        return q(Q) && q(Y) ? X(Y)(Q) : q(Q) ? U(Q) : U(Y)
    }
}
function z4($) {
    var X = V4($)
    return function (Q, Y) {
        if (Y === void 0) {
            var H = z4($)
            return function (J) {
                return H(J, Q)
            }
        }
        return Q.filter(function (J) {
            return X(J, Y)
        })
    }
}
function B4($) {
    var X = V4($)
    return function (Q, Y) {
        if (Y === void 0) {
            var H = B4($)
            return function (J) {
                return H(J, Q)
            }
        }
        return Q.filter(function (J) {
            return !X(J, Y)
        })
    }
}
var t = function ($) {
        return $.length === 0
    },
    q = z0,
    h$ = L0,
    y$ = l1,
    V1 = d1,
    u$ = _1,
    K7 = function ($, X) {
        return $ <= 0 ? [] : n1(X)($)
    },
    q7 = function ($, X) {
        return K7($, function () {
            return X
        })
    },
    v7 = function ($) {
        return i0($) ? [] : [$.value]
    },
    C7 = function ($) {
        return J0($) ? [] : [$.right]
    },
    w7 = function ($, X) {
        return function (Q) {
            return q(Q) ? X(Q) : $()
        }
    },
    m$ = w7,
    U7 = function ($, X) {
        return function (Q) {
            return q(Q) ? X(B0(Q), K0(Q)) : $()
        }
    },
    N7 = U7,
    l$ = N7,
    T7 = function ($, X) {
        return function (Q) {
            return q(Q) ? X(t1(Q), l5(Q)) : $()
        }
    },
    A7 = T7,
    _$ = A7,
    O7 = function ($) {
        return function (X) {
            var Q = []
            for (var Y = 0; Y < X.length; Y++) Q.push.apply(Q, $(Y, X[Y]))
            return Q
        }
    },
    d$ = function ($, X) {
        return function (Q) {
            var Y = Q.length,
                H = new Array(Y + 1)
            H[0] = $
            for (var J = 0; J < Y; J++) H[J + 1] = X(H[J], Q[J])
            return H
        }
    },
    p$ = function ($, X) {
        return function (Q) {
            var Y = Q.length,
                H = new Array(Y + 1)
            H[Y] = $
            for (var J = Y - 1; J >= 0; J--) H[J] = X(Q[J], H[J + 1])
            return H
        }
    },
    o$ = function ($) {
        return $.length
    },
    l0 = m1,
    r$ = m0,
    n$ = a1,
    f$ = a5,
    s$ = function ($) {
        return q($) ? L(K0($)) : G
    },
    t$ = function ($) {
        return q($) ? L(t1($)) : G
    },
    i$ = function ($) {
        return function (X) {
            return l0($, X) ? U(X) : X.slice(0, $)
        }
    },
    e$ = function ($) {
        return function (X) {
            return l0($, X) ? U(X) : $ === 0 ? [] : X.slice(-$)
        }
    },
    R7 = function ($, X) {
        var Q = $.length,
            Y = 0
        for (; Y < Q; Y++) if (!X($[Y])) break
        return Y
    },
    X3 = function ($) {
        return function (X) {
            return $ <= 0 || t(X) ? U(X) : $ >= X.length ? [] : X.slice($, X.length)
        }
    },
    Q3 = function ($) {
        return function (X) {
            return $ <= 0 || t(X) ? U(X) : $ >= X.length ? [] : X.slice(0, X.length - $)
        }
    },
    H3 = X4,
    Z3 = X7,
    D3 = Y7,
    P3 = H7,
    U = function ($) {
        return $.slice()
    },
    G3 = function ($, X) {
        return function (Q) {
            return $ < 0 || $ > Q.length ? G : L(Y9($, X, Q))
        }
    },
    V3 = function ($, X) {
        return S7($, function () {
            return X
        })
    },
    L3 = function ($) {
        return function (X) {
            return l0($, X) ? G : L(J9($, X))
        }
    },
    S7 = function ($, X) {
        return function (Q) {
            return l0($, Q) ? G : L(H9($, X(Q[$]), Q))
        }
    },
    z3 = function ($) {
        return t($) ? [] : $.slice().reverse()
    },
    B3 = function ($) {
        var X = []
        for (var Q = 0; Q < $.length; Q++) {
            var Y = $[Q]
            if (Y._tag === "Right") X.push(Y.right)
        }
        return X
    },
    K3 = function ($) {
        var X = []
        for (var Q = 0; Q < $.length; Q++) {
            var Y = $[Q]
            if (Y._tag === "Left") X.push(Y.left)
        }
        return X
    },
    q3 = function ($) {
        return function (X) {
            return X.length <= 1 ? U(X) : X.slice().sort($.compare)
        }
    },
    W7 = function ($, X, Q) {
        var Y = [],
            H = Math.min($.length, X.length)
        for (var J = 0; J < H; J++) Y[J] = Q($[J], X[J])
        return Y
    },
    v3 = function ($) {
        var X = [],
            Q = []
        for (var Y = 0; Y < $.length; Y++) (X[Y] = $[Y][0]), (Q[Y] = $[Y][1])
        return [X, Q]
    },
    F7 = function ($) {
        var X = f1($)
        return function (Q) {
            return q(Q) ? X(Q) : []
        }
    },
    C3 = function ($) {
        var X = c5($)
        return function (Q) {
            return q(Q) ? X(Q) : U(Q)
        }
    },
    w3 = function ($) {
        var X = o1($)
        return function (Q) {
            return q(Q) ? X(Q) : U(Q)
        }
    },
    V4 = P1,
    U3 = function ($) {
        var X = p1($)
        return function (Q) {
            return q(Q) ? X(Q) : U(Q)
        }
    },
    N3 = function ($) {
        var X = b5($)
        return function (Q) {
            return q(Q) ? X(Q) : U(Q)
        }
    },
    T3 = function ($) {
        var X = s1($)
        return function (Q) {
            return q(Q) ? X(Q) : []
        }
    },
    M7 = function ($) {
        return function (X) {
            return $ >= 1 && q(X) ? Z1($)(X) : t(X) ? [U(X), []] : [[], U(X)]
        }
    },
    A3 = function ($) {
        var X = m5($)
        return function (Q) {
            return q(Q) ? X(Q) : []
        }
    },
    O3 = function ($) {
        return function () {
            var X = []
            for (var Q = 0; Q < arguments.length; Q++) X[Q] = arguments[Q]
            return v7($.apply(void 0, X))
        }
    },
    E7 = function ($) {
        return function (X) {
            return t(X) ? U($) : t($) ? U(X) : X.concat($)
        }
    },
    S3 = E7,
    w = function ($, X) {
        return Z($, _0(X))
    },
    L1 = function ($, X) {
        return Z($, c7(X))
    },
    l = function ($, X) {
        return Z($, u7(X))
    },
    z1 = function ($, X) {
        return Z($, m7(X))
    },
    B1 = function ($, X) {
        return Z($, U4(X))
    },
    K1 = function ($, X) {
        return Z($, l7(X))
    },
    q1 = function ($, X) {
        return Z($, _7(X))
    },
    I7 = function ($, X) {
        return Z($, N4(X))
    },
    k7 = function ($, X) {
        return Z($, T4(X))
    },
    K4 = function ($, X) {
        return Z($, p7(X))
    },
    i = function ($, X, Q) {
        return Z($, O4(X, Q))
    },
    q0 = function ($) {
        var X = r7($)
        return function (Q, Y) {
            return Z(Q, X(Y))
        }
    },
    v0 = function ($, X, Q) {
        return Z($, f7(X, Q))
    },
    q4 = function ($, X, Q) {
        return Z($, R4(X, Q))
    },
    v4 = function ($) {
        var X = n7($)
        return function (Q, Y) {
            return Z(Q, X(Y))
        }
    },
    C4 = function ($, X, Q) {
        return Z($, s7(X, Q))
    },
    b7 = function ($, X) {
        return Z($, w4(X))
    },
    x7 = function ($, X) {
        return Z($, o7(X))
    },
    h7 = function ($, X) {
        return Z($, A4(X))
    },
    v1 = function ($) {
        var X = t7($)
        return function (Q, Y) {
            return Z(Q, X(Y))
        }
    },
    y7 = function ($) {
        var X = S4($)
        return function (Q, Y) {
            return Z(Q, X(Y))
        }
    },
    W3 = j7,
    g3 = D7,
    e = u5,
    C0 = function () {
        return []
    },
    _0 = function ($) {
        return function (X) {
            return X.map(function (Q) {
                return $(Q)
            })
        }
    },
    u7 = function ($) {
        return E(function (X) {
            return Z($, _0(X))
        })
    },
    E = v(2, function ($, X) {
        return Z(
            $,
            O7(function (Q, Y) {
                return X(Y, Q)
            }),
        )
    }),
    F3 = E(C),
    c7 = function ($) {
        return function (X) {
            return X.map(function (Q, Y) {
                return $(Y, Q)
            })
        }
    },
    w4 = function ($) {
        return function (X) {
            var Q = []
            for (var Y = 0; Y < X.length; Y++) {
                var H = $(Y, X[Y])
                if (k(H)) Q.push(H.value)
            }
            return Q
        }
    },
    U4 = function ($) {
        return w4(function (X, Q) {
            return $(Q)
        })
    },
    w0 = U4(C),
    U0 = function ($) {
        var X = [],
            Q = []
        for (var Y = 0, H = $; Y < H.length; Y++) {
            var J = H[Y]
            if (J._tag === "Left") X.push(J.left)
            else Q.push(J.right)
        }
        return j1(X, Q)
    },
    m7 = function ($) {
        return function (X) {
            return X.filter($)
        }
    },
    l7 = function ($) {
        return N4(function (X, Q) {
            return $(Q)
        })
    },
    N4 = function ($) {
        return function (X) {
            var Q = [],
                Y = []
            for (var H = 0; H < X.length; H++) {
                var J = X[H]
                if ($(H, J)) Y.push(J)
                else Q.push(J)
            }
            return j1(Q, Y)
        }
    },
    _7 = function ($) {
        return T4(function (X, Q) {
            return $(Q)
        })
    },
    T4 = function ($) {
        return function (X) {
            var Q = [],
                Y = []
            for (var H = 0; H < X.length; H++) {
                var J = $(H, X[H])
                if (J._tag === "Left") Q.push(J.left)
                else Y.push(J.right)
            }
            return j1(Q, Y)
        }
    },
    d7 = function ($) {
        return function (X) {
            return X.concat($())
        }
    },
    p7 = d7,
    o7 = function ($) {
        return function (X) {
            return X.filter(function (Q, Y) {
                return $(Y, Q)
            })
        }
    },
    A4 = function ($) {
        return function (X) {
            return X.map(function (Q, Y) {
                return $(X.slice(Y))
            })
        }
    },
    M3 = A4(C),
    r7 = P7,
    n7 = Q4,
    O4 = Y4,
    R4 = H4,
    f7 = G7,
    s7 = J4,
    t7 = function ($) {
        var X = S4($)
        return function (Q) {
            return X(function (Y, H) {
                return Q(H)
            })
        }
    },
    d0 = function ($) {
        return function (X) {
            return i(X, $.of(C0()), function (Q, Y) {
                return $.ap(
                    $.map(Q, function (H) {
                        return function (J) {
                            return Z(H, V1(J))
                        }
                    }),
                    Y,
                )
            })
        }
    },
    S4 = function ($) {
        return function (X) {
            return R4($.of(C0()), function (Q, Y, H) {
                return $.ap(
                    $.map(Y, function (J) {
                        return function (j) {
                            return Z(J, V1(j))
                        }
                    }),
                    X(Q, H),
                )
            })
        }
    },
    E3 = function ($) {
        var X = E4($)
        return function (Q) {
            return function (Y) {
                return X(Y, Q)
            }
        }
    },
    I3 = function ($) {
        var X = I4($)
        return function (Q) {
            return function (Y) {
                return X(Y, Q)
            }
        }
    },
    W4 = function ($, X) {
        var Q = [],
            Y = $
        while (!0) {
            var H = X(Y)
            if (k(H)) {
                var J = H.value,
                    j = J[0],
                    P = J[1]
                Q.push(j), (Y = P)
            } else break
        }
        return Q
    },
    V = "Array",
    k3 = V7,
    i7 = function () {
        return {
            concat: function ($, X) {
                return $.concat(X)
            },
        }
    },
    b3 = function () {
        return { concat: i7().concat, empty: [] }
    },
    x3 = Z4,
    h3 = L7,
    e7 = function ($) {
        var X = L4($)
        return {
            concat: function (Q, Y) {
                return X(Y)(Q)
            },
        }
    },
    y3 = function ($) {
        return { concat: e7($).concat, empty: [] }
    },
    u3 = function ($) {
        var X = z4($)
        return {
            concat: function (Q, Y) {
                return X(Y)(Q)
            },
        }
    },
    c3 = function ($) {
        var X = B4($)
        return {
            concat: function (Q, Y) {
                return X(Y)(Q)
            },
        }
    },
    C1 = { URI: V, map: w },
    m3 = x0(C1),
    a7 = { URI: V, of: e },
    l3 = { URI: V, map: w, mapWithIndex: L1 },
    w1 = { URI: V, map: w, ap: l },
    _3 = j0(w1),
    d3 = D0(w1),
    p3 = { URI: V, map: w, ap: l, of: e },
    g4 = { URI: V, map: w, ap: l, chain: E },
    o3 = Y5(g4),
    r3 = { URI: V, map: w, ap: l, of: e, chain: E },
    n3 = { URI: V, unfold: W4 },
    f3 = { URI: V, map: w, alt: K4 },
    $9 = { URI: V, zero: C0 },
    s3 = e5($9, a7),
    t3 = { URI: V, map: w, ap: l, of: e, alt: K4, zero: C0 },
    i3 = { URI: V, map: w, extend: h7 },
    F4 = { URI: V, compact: w0, separate: U0 },
    e3 = { URI: V, map: w, compact: w0, separate: U0, filter: z1, filterMap: B1, partition: K1, partitionMap: q1 },
    a3 = {
        URI: V,
        map: w,
        mapWithIndex: L1,
        compact: w0,
        separate: U0,
        filter: z1,
        filterMap: B1,
        partition: K1,
        partitionMap: q1,
        partitionMapWithIndex: k7,
        partitionWithIndex: I7,
        filterMapWithIndex: b7,
        filterWithIndex: x7,
    },
    $X = { URI: V, reduce: i, foldMap: q0, reduceRight: v0 },
    XX = {
        URI: V,
        reduce: i,
        foldMap: q0,
        reduceRight: v0,
        reduceWithIndex: q4,
        foldMapWithIndex: v4,
        reduceRightWithIndex: C4,
    },
    M4 = { URI: V, map: w, reduce: i, foldMap: q0, reduceRight: v0, traverse: v1, sequence: d0 },
    QX = {
        URI: V,
        map: w,
        mapWithIndex: L1,
        reduce: i,
        foldMap: q0,
        reduceRight: v0,
        reduceWithIndex: q4,
        foldMapWithIndex: v4,
        reduceRightWithIndex: C4,
        traverse: v1,
        sequence: d0,
        traverseWithIndex: y7,
    },
    E4 = t5(M4, F4),
    I4 = s5(M4, F4),
    X9 = {
        URI: V,
        map: w,
        compact: w0,
        separate: U0,
        filter: z1,
        filterMap: B1,
        partition: K1,
        partitionMap: q1,
        reduce: i,
        foldMap: q0,
        reduceRight: v0,
        traverse: v1,
        sequence: d0,
        wither: E4,
        wilt: I4,
    },
    YX = j4,
    HX = { URI: V, map: w, ap: l, chain: E, chainRec: W3 },
    JX = D4,
    ZX = { URI: V, map: w, ap: l, chain: E, chainRec: g3 },
    jX = i5(X9),
    Q9 = { URI: V, fromEither: C7 },
    DX = Q1(Q9),
    Y9 = I5,
    H9 = function ($, X, Q) {
        return q(Q) ? k5($, X, Q) : []
    },
    J9 = function ($, X) {
        var Q = X.slice()
        return Q.splice($, 1), Q
    },
    PX = G1,
    Z9 = function ($) {
        return function (X) {
            return X.some($)
        }
    },
    GX = Z9,
    VX = B7,
    LX = e(u),
    zX = p(C1),
    BX = o(C1)
var KX = r(g4),
    qX = P0(w1),
    vX = E,
    CX = h5,
    wX = [],
    UX = _5,
    NX = d5,
    TX = F7,
    AX = {
        URI: V,
        compact: w0,
        separate: U0,
        map: w,
        ap: l,
        of: e,
        chain: E,
        filter: z1,
        filterMap: B1,
        partition: K1,
        partitionMap: q1,
        mapWithIndex: L1,
        partitionMapWithIndex: k7,
        partitionWithIndex: I7,
        filterMapWithIndex: b7,
        filterWithIndex: x7,
        alt: K4,
        zero: C0,
        unfold: W4,
        reduce: i,
        foldMap: q0,
        reduceRight: v0,
        traverse: v1,
        sequence: d0,
        reduceWithIndex: q4,
        foldMapWithIndex: v4,
        reduceRightWithIndex: C4,
        traverseWithIndex: y7,
        extend: h7,
        wither: E4,
        wilt: I4,
    }
var x = function ($) {
    return function (X) {
        return !$(X)
    }
}
function $0($) {
    return function (X) {
        return $(X) ? a(X) : h
    }
}
var h = G,
    a = L
var OX = function ($) {
        return $._tag === "Left" ? h : a($.right)
    },
    j9 = function ($, X) {
        return Z($, R(X))
    },
    RX = function ($, X) {
        return Z($, SX(X))
    }
var k4 = "Option"
var D9 = function ($) {
        return {
            concat: function (X, Q) {
                return _(X) ? Q : _(Q) ? X : a($.concat(X.value, Q.value))
            },
            empty: h,
        }
    },
    R = function ($) {
        return function (X) {
            return _(X) ? h : a($(X.value))
        }
    },
    P9 = { URI: k4, map: j9 },
    jY = v(2, h0(P9)),
    DY = X1(P9)
var SX = function ($) {
    return function (X) {
        return _(X) ? h : _($) ? h : a(X.value($.value))
    }
}
var G9 = v(2, function ($, X) {
        return _($) ? h : X($.value)
    }),
    V9 = { URI: k4, map: j9, ap: RX, chain: G9 }
var PY = v(2, function ($, X) {
    return _($) ? X() : $
})
var WX = OX,
    gX = { URI: k4, fromEither: WX },
    L9 = k,
    _ = function ($) {
        return $._tag === "None"
    }
var FX = function ($) {
        return function (X) {
            return _(X) ? $() : X.value
        }
    },
    b4 = FX
var GY = v(2, b(V9)),
    VY = v(2, J5(gX, V9))
var U1 = G9
var MX = function () {
        return {
            concat: function ($, X) {
                return D($, X)
            },
        }
    },
    z9 = function () {
        return { concat: MX().concat, empty: C }
    }
function B9($) {
    return function (X) {
        return D(X, $.fromIO)
    }
}
function K9($, X) {
    var Q = b(X)
    return function (Y, H) {
        return Q(Y, D(H, $.fromIO))
    }
}
function q9($) {
    return function (X, Q) {
        if (Q === void 0) {
            var Y = q9($)
            return function (A) {
                return Y(X, A)
            }
        }
        var H = Q.entries(),
            J
        while (!(J = H.next()).done) {
            var j = J.value,
                P = j[0],
                O = j[1]
            if ($.equals(P, X)) return L([P, O])
        }
        return G
    }
}
function x4($) {
    var X = q9($)
    return function (Q, Y) {
        if (Y === void 0) {
            var H = x4($)
            return function (J) {
                return H(Q, J)
            }
        }
        return Z(
            X(Q, Y),
            R(function (J) {
                var j = J[0],
                    P = J[1]
                return P
            }),
        )
    }
}
var v9 = x4
var N0 = function ($) {
        return q5($)($.empty)
    },
    cY = { concat: v5.concat, empty: void 0 }
var mY = { concat: C5.concat, empty: !0 },
    lY = { concat: w5.concat, empty: !1 }
var _Y = { concat: U5.concat, empty: "" },
    dY = { concat: N5.concat, empty: 0 },
    pY = { concat: T5.concat, empty: 1 }
var y = {}
s0(y, {
    traverseSeqArrayWithIndex: () => {
        {
            return J8
        }
    },
    traverseSeqArray: () => {
        {
            return g9
        }
    },
    traverseReadonlyNonEmptyArrayWithIndexSeq: () => {
        {
            return S9
        }
    },
    traverseReadonlyNonEmptyArrayWithIndex: () => {
        {
            return R9
        }
    },
    traverseReadonlyArrayWithIndexSeq: () => {
        {
            return m4
        }
    },
    traverseReadonlyArrayWithIndex: () => {
        {
            return c4
        }
    },
    traverseArrayWithIndex: () => {
        {
            return Y8
        }
    },
    traverseArray: () => {
        {
            return W9
        }
    },
    taskSeq: () => {
        {
            return G8
        }
    },
    task: () => {
        {
            return P8
        }
    },
    tapIO: () => {
        {
            return A9
        }
    },
    tap: () => {
        {
            return T9
        }
    },
    sequenceSeqArray: () => {
        {
            return Z8
        }
    },
    sequenceArray: () => {
        {
            return H8
        }
    },
    of: () => {
        {
            return W
        }
    },
    never: () => {
        {
            return O9
        }
    },
    map: () => {
        {
            return y4
        }
    },
    let: () => {
        {
            return $8
        }
    },
    getSemigroup: () => {
        {
            return V8
        }
    },
    getRaceMonoid: () => {
        {
            return xX
        }
    },
    getMonoid: () => {
        {
            return L8
        }
    },
    fromTask: () => {
        {
            return p0
        }
    },
    fromIOK: () => {
        {
            return fX
        }
    },
    fromIO: () => {
        {
            return X0
        }
    },
    flatten: () => {
        {
            return bX
        }
    },
    flatMapIO: () => {
        {
            return N9
        }
    },
    flatMap: () => {
        {
            return g
        }
    },
    flap: () => {
        {
            return uX
        }
    },
    delay: () => {
        {
            return kX
        }
    },
    chainIOK: () => {
        {
            return sX
        }
    },
    chainFirstIOK: () => {
        {
            return tX
        }
    },
    chainFirst: () => {
        {
            return D8
        }
    },
    chain: () => {
        {
            return j8
        }
    },
    bindTo: () => {
        {
            return aX
        }
    },
    bind: () => {
        {
            return X8
        }
    },
    asUnit: () => {
        {
            return yX
        }
    },
    as: () => {
        {
            return hX
        }
    },
    apSecond: () => {
        {
            return lX
        }
    },
    apS: () => {
        {
            return Q8
        }
    },
    apFirst: () => {
        {
            return mX
        }
    },
    ap: () => {
        {
            return C9
        }
    },
    URI: () => {
        {
            return N
        }
    },
    Pointed: () => {
        {
            return cX
        }
    },
    MonadTask: () => {
        {
            return oX
        }
    },
    MonadIO: () => {
        {
            return pX
        }
    },
    Monad: () => {
        {
            return dX
        }
    },
    Functor: () => {
        {
            return T0
        }
    },
    FromTask: () => {
        {
            return iX
        }
    },
    FromIO: () => {
        {
            return O1
        }
    },
    Do: () => {
        {
            return eX
        }
    },
    Chain: () => {
        {
            return A1
        }
    },
    ApplySeq: () => {
        {
            return w9
        }
    },
    ApplyPar: () => {
        {
            return T1
        }
    },
    ApplicativeSeq: () => {
        {
            return U9
        }
    },
    ApplicativePar: () => {
        {
            return _X
        }
    },
    ApT: () => {
        {
            return u4
        }
    },
})
function kX($) {
    return function (X) {
        return function () {
            return new Promise(function (Q) {
                setTimeout(function () {
                    Promise.resolve().then(X).then(Q)
                }, $)
            })
        }
    }
}
function xX() {
    return {
        concat: function ($, X) {
            return function () {
                return Promise.race([Promise.resolve().then($), Promise.resolve().then(X)])
            }
        },
        empty: O9,
    }
}
var X0 = function ($) {
        return function () {
            return Promise.resolve().then($)
        }
    },
    S = function ($, X) {
        return Z($, y4(X))
    },
    Q0 = function ($, X) {
        return Z($, C9(X))
    },
    h4 = function ($, X) {
        return g($, function (Q) {
            return Z(X, y4(Q))
        })
    },
    y4 = function ($) {
        return function (X) {
            return function () {
                return Promise.resolve().then(X).then($)
            }
        }
    },
    C9 = function ($) {
        return function (X) {
            return function () {
                return Promise.all([Promise.resolve().then(X), Promise.resolve().then($)]).then(function (Q) {
                    var Y = Q[0],
                        H = Q[1]
                    return Y(H)
                })
            }
        }
    },
    W = function ($) {
        return function () {
            return Promise.resolve($)
        }
    },
    g = v(2, function ($, X) {
        return function () {
            return Promise.resolve()
                .then($)
                .then(function (Q) {
                    return X(Q)()
                })
        }
    }),
    bX = g(C),
    N = "Task",
    T0 = { URI: N, map: S },
    hX = v(2, h0(T0)),
    yX = X1(T0),
    uX = x0(T0),
    cX = { URI: N, of: W },
    T1 = { URI: N, map: S, ap: Q0 },
    mX = j0(T1),
    lX = D0(T1),
    _X = { URI: N, map: S, ap: Q0, of: W },
    w9 = { URI: N, map: S, ap: h4 },
    U9 = { URI: N, map: S, ap: h4, of: W },
    A1 = { URI: N, map: S, ap: Q0, chain: g },
    dX = { URI: N, map: S, of: W, ap: Q0, chain: g },
    pX = { URI: N, map: S, of: W, ap: Q0, chain: g, fromIO: X0 },
    p0 = C,
    oX = { URI: N, map: S, of: W, ap: Q0, chain: g, fromIO: X0, fromTask: p0 },
    O1 = { URI: N, fromIO: X0 },
    rX = { flatMap: g },
    nX = { fromIO: O1.fromIO },
    N9 = X5(nX, rX),
    T9 = v(2, b(A1)),
    A9 = v(2, K9(O1, A1)),
    fX = B9(O1),
    sX = N9,
    tX = A9,
    iX = { URI: N, fromIO: X0, fromTask: p0 },
    O9 = function () {
        return new Promise(function ($) {
            return
        })
    },
    eX = W(u),
    aX = p(T0),
    $8 = o(T0)
var X8 = r(A1),
    Q8 = P0(T1),
    u4 = W(b0),
    R9 = function ($) {
        return function (X) {
            return function () {
                return Promise.all(
                    X.map(function (Q, Y) {
                        return Promise.resolve().then(function () {
                            return $(Y, Q)()
                        })
                    }),
                )
            }
        }
    },
    c4 = function ($) {
        var X = R9($)
        return function (Q) {
            return Z0(Q) ? X(Q) : u4
        }
    },
    S9 = function ($) {
        return function (X) {
            return function () {
                return e0(X).reduce(
                    function (Q, Y, H) {
                        return Q.then(function (J) {
                            return Promise.resolve()
                                .then($(H + 1, Y))
                                .then(function (j) {
                                    return J.push(j), J
                                })
                        })
                    },
                    Promise.resolve()
                        .then($(0, k0(X)))
                        .then(b1),
                )
            }
        }
    },
    m4 = function ($) {
        var X = S9($)
        return function (Q) {
            return Z0(Q) ? X(Q) : u4
        }
    },
    Y8 = c4,
    W9 = function ($) {
        return c4(function (X, Q) {
            return $(Q)
        })
    },
    H8 = W9(C),
    J8 = m4,
    g9 = function ($) {
        return m4(function (X, Q) {
            return $(Q)
        })
    },
    Z8 = g9(C),
    j8 = g,
    D8 = T9,
    P8 = { URI: N, map: S, of: W, ap: Q0, chain: g, fromIO: X0, fromTask: p0 },
    G8 = { URI: N, map: S, of: W, ap: h4, chain: g, fromIO: X0, fromTask: p0 },
    V8 = $1(w9),
    L8 = Q5(U9)
var I = {}
s0(I, {
    trimRight: () => {
        {
            return T8
        }
    },
    trimLeft: () => {
        {
            return N8
        }
    },
    trim: () => {
        {
            return U8
        }
    },
    toUpperCase: () => {
        {
            return v8
        }
    },
    toLowerCase: () => {
        {
            return C8
        }
    },
    startsWith: () => {
        {
            return I9
        }
    },
    split: () => {
        {
            return o0
        }
    },
    slice: () => {
        {
            return R1
        }
    },
    size: () => {
        {
            return A8
        }
    },
    replace: () => {
        {
            return w8
        }
    },
    isString: () => {
        {
            return q8
        }
    },
    isEmpty: () => {
        {
            return A0
        }
    },
    includes: () => {
        {
            return O8
        }
    },
    endsWith: () => {
        {
            return k9
        }
    },
    empty: () => {
        {
            return E9
        }
    },
    Show: () => {
        {
            return K8
        }
    },
    Semigroup: () => {
        {
            return M9
        }
    },
    Ord: () => {
        {
            return B8
        }
    },
    Monoid: () => {
        {
            return z8
        }
    },
    Eq: () => {
        {
            return F9
        }
    },
})
var F9 = {
        equals: function ($, X) {
            return $ === X
        },
    },
    M9 = {
        concat: function ($, X) {
            return $ + X
        },
    },
    E9 = "",
    z8 = { concat: M9.concat, empty: E9 },
    B8 = {
        equals: F9.equals,
        compare: function ($, X) {
            return $ < X ? -1 : $ > X ? 1 : 0
        },
    },
    K8 = {
        show: function ($) {
            return JSON.stringify($)
        },
    },
    q8 = function ($) {
        return typeof $ === "string"
    },
    v8 = function ($) {
        return $.toUpperCase()
    },
    C8 = function ($) {
        return $.toLowerCase()
    },
    w8 = function ($, X) {
        return function (Q) {
            return Q.replace($, X)
        }
    },
    U8 = function ($) {
        return $.trim()
    },
    N8 = function ($) {
        return $.trimLeft()
    },
    T8 = function ($) {
        return $.trimRight()
    },
    R1 = function ($, X) {
        return function (Q) {
            return Q.slice($, X)
        }
    },
    A0 = function ($) {
        return $.length === 0
    },
    A8 = function ($) {
        return $.length
    },
    o0 = function ($) {
        return function (X) {
            var Q = X.split($)
            return G0(Q) ? Q : [X]
        }
    },
    O8 = function ($, X) {
        return function (Q) {
            return Q.includes($, X)
        }
    },
    I9 = function ($, X) {
        return function (Q) {
            return Q.startsWith($, X)
        }
    },
    k9 = function ($, X) {
        return function (Q) {
            return Q.endsWith($, X)
        }
    }
var R8 = "Function",
    S8 = $ => X => D(X, $),
    l4 = { URI: R8, map: ($, X) => S8(X)($) },
    b9 = d,
    W8 = $ => X => Q => X(Q)($(Q)),
    S1 = { ...l4, of: b9, ap: ($, X) => W8(X)($) },
    D6 = j0(S1),
    P6 = D0(S1),
    g8 = $ => X => Q => $(X(Q))(Q)
var F8 = { ...S1, chain: ($, X) => g8(X)($) },
    G6 = b9({}),
    V6 = p(l4),
    L6 = r(F8),
    z6 = P0(S1),
    B6 = o(l4)
var W1 = t0,
    x9 = $ => X => Q =>
        Z(
            $,
            _0(([Y, H]) => D($0(Y), R(H))),
            N0(i4(D9(K5()))()),
            e4(Q),
            b4(() => X(Q)),
        )
var M8 = $ => X => Q => $(Q) ? Q : X(Q),
    E8 = D(x, M8)
var O0 = $ => X => Q => Q[$](...X),
    K6 = H0(O0)([])
var h9 = $ => X => {
        const Q = new Map()
        return Y => {
            const H = v9($)(Y)(Q)
            if (L9(H)) return H.value
            const J = X(Y)
            return Q.set(Y, J), J
        }
    },
    I8 = $ => X => Q => $([X, Q]),
    q6 = D(W1, I8),
    k8 = $ => X => Q => Y => $([X, Q, Y]),
    v6 = D(W1, k8),
    b8 = $ => X => Q => Y => H => $([X, Q, Y, H]),
    C6 = D(W1, b8),
    x8 = $ => X => Q => Y => H => J => $([X, Q, Y, H, J]),
    w6 = D(W1, x8)
var U6 = N0(z9())
var y9 = $ => x9($)
var F = $ => async X => $(await X),
    u9 = $ => X => Q => Q[$] === X
var r0 = $ => X => D(B.chunksOf($), B.map(X), Q => Promise.all(Q), F(B.flatten))
var c9 = $ => Z($, t0, h9(Y1.contramap(JSON.stringify)(I.Eq)), $5)
var m9
;(function (g1) {
    let $
    ;(function (R0) {
        ;(R0.start = d({ before: "start" })),
            (R0.fromUri = J => ({ before: { uri: J } })),
            (R0.fromUid = J => ({ before: { uid: J } }))
    })(($ = g1.before || (g1.before = {})))
    let X
    ;(function (S0) {
        ;(S0.end = d({ after: "end" })),
            (S0.fromUri = J => ({ before: { uri: J } })),
            (S0.fromUid = J => ({ before: { uid: J } }))
    })((X = g1.after || (g1.after = {})))
})(m9 || (m9 = {}))
var l9 = $ => $.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    Y0 = $ => $.replace(/\b\w/g, X => X.toUpperCase()) //! Does location actually point to document.body?
var n0 = ($, X = 1000, Q = document.body, Y) =>
    new Promise(H => {
        const J = P => {
                j.disconnect(), H(P)
            },
            j = new MutationObserver(() => {
                const P = document.querySelector($)
                if (P && (!Y || P !== Y)) return J(P)
            })
        if ((j.observe(Q, { childList: !0, subtree: !0 }), X)) setTimeout(() => J(null), X)
    })
var F1 = $ => new Promise(X => setTimeout(X, $))
var { URI: b6 } = Spicetify
var _9 = async $ =>
    (
        await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistRelated, {
            uri: $,
            locale: Spicetify.Locale.getLocale(),
        })
    ).data.artistUnion.relatedContent.relatedArtists.items
var d9 = r0(50)(
        async $ => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${$.join(",")}`)).artists,
    ),
    x6 = r0(1)(async ([$]) => [await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${$}`)]),
    h6 = r0(50)(
        async $ => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${$.join(",")}`)).albums,
    ),
    y6 = r0(50)(
        async $ => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${$.join(",")}`)).tracks,
    ),
    h8 = async ($, X) =>
        Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent($)}&type=${X.join(",")}`),
    W0 = async $ => {
        const X = `The Sound Of ${$}`,
            Q = new RegExp(`^${l9(X)}\$`, "i"),
            H = (await h8(X, ["playlist"])).playlists.items[0]
        return H?.owner.id === "thesoundsofspotify" && Q.test(H.name) ? H.uri : null
    }
var _4 = async ($, X, Q, Y = "") => {
        const H = new URL("https://ws.audioscrobbler.com/2.0/")
        return (
            H.searchParams.append("method", "track.getInfo"),
            H.searchParams.append("api_key", $),
            H.searchParams.append("artist", X),
            H.searchParams.append("track", Q),
            H.searchParams.append("format", "json"),
            H.searchParams.append("username", Y),
            await fetch(H).then(J => J.json())
        )
    },
    u6 = c9(_4)
var vH = D(x, $ => G1($)),
    M1 = $ => O0("join")([$])
var CH = N0(n5),
    wH = N0(f5)
var UH = D(g5(m), $ => {
    const X = $.length / 2
    return X % 1 === 0 ? ($[X - 1] + $[X]) / 2 : $[Math.floor(X)]
})
var y8 = $ => X => Q =>
        $ >= Q.length || X >= Q.length
            ? h
            : $ === X
            ? a(Q)
            : Z(
                  Q,
                  m0($),
                  U1(Y => Z(Z7($)(Q), U1(J7(X, Y)))),
              ),
    NH = H0(y8)
var p9 = $ => D(s, $4($), s)
var o9 = $ => D(s, D1($), s)
var TH = D(x1, u0),
    AH = D(h1, u0)
var OH = Array.from
var d4 = $ => X => $ + X
var xH = H0(d4)
var u8 = $ => R1(0, y0(m)(0, $)),
    c8 = $ => X => R1(y0(m)(0, X.length - Math.floor($)), Infinity)(X)
var E1 = $ => D(o0(""), $, M1("")),
    hH = E1(s),
    yH = o0(/\r\n|\r|\n/),
    uH = M1("\n"),
    f0 = $ => X => {
        const Q = $.lastIndex,
            Y = $.test(X)
        return ($.lastIndex = Q), Y
    }
var m8 = $ => O0("substring")([$]),
    l8 = $ => X => Z(X, O0("substring")([0, X.length - Math.floor($)]))
var cH = D(p9, E1),
    mH = D($0(x(A0)), R(u8(1))),
    lH = D($0(x(A0)), R(m8(1))),
    _H = D($0(x(A0)), R(c8(1))),
    dH = D($0(x(A0)), R(l8(1)))
var pH = D($ => D1($), E1),
    oH = D(o9, E1)
var rH = f0(/^\p{Alpha}+$/u),
    nH = f0(/^(\p{Alpha}|\p{Number})+$/u),
    fH = f0(/^\p{Lower}+$/u),
    sH = f0(/^\p{Upper}+$/u),
    tH = f0(/^\s+$/),
    iH = o0(/\s/),
    eH = M1(" ")
var { URI: p4 } = Spicetify,
    o4 = async ({ pathname: $ }) => {
        const X = p4.fromString($)
        if (!p4.isArtist(X)) return
        const Q = document.createElement("div")
        ;(Q.className = "main-entityHeader-detailsText genre-container"),
            (Q.innerHTML = await Z(
                await r4([`${X}`]),
                B.takeLeft(5),
                B.map(async H => {
                    const J = await W0(H)
                    return `<a class="main-entityHeader-genreLink" ${
                        J === null
                            ? `href="#" data-value="${H}" onclick="searchPlaylist(this.getAttribute('data-value'))`
                            : `href="${J}"`
                    } style="color: var(--spice-subtext); font-size: 1rem">${Y0(H)}</a>`
                }),
                H => Promise.all(H),
                F(B.intercalate(I.Monoid)("<span>, </span>")),
                F(d4("<span>Artist Genres : </span>")),
            )),
            document.querySelector(".genre-container")?.remove(),
            (await n0("div.main-entityHeader-headerText"))?.insertBefore(
                Q,
                await n0("span.main-entityHeader-detailsText"),
            )
    },
    r4 = async ($, X = null) => {
        const Q = D(
                B.map(H => p4.fromString(H).id),
                d9,
                F(B.flatMap(H => H.genres)),
                F(B.uniq(I.Eq)),
            ),
            Y = await Q($)
        return Y.length
            ? Y
            : await Z(
                  $[0],
                  _9,
                  F(B.map(H => H.uri)),
                  F(B.chunksOf(5)),
                  F(B.reduce(Promise.resolve([]), async (H, J) => ((await H).length ? await H : await Q(J)))),
              )
    }
var K = k1(n4(), 1)
var f4 = () => {
    Spicetify.PopupModal.display({
        title: `Genres of: ${Spicetify.Player.data.track?.metadata?.title}`,
        content: K.default.createElement(
            "div",
            { className: "genres-popup" },
            F0.length === 0 ? K.default.createElement(K.default.Fragment, null) : K.default.createElement(_8, null),
            g0.length === 0 ? K.default.createElement(K.default.Fragment, null) : K.default.createElement(d8, null),
        ),
        isLarge: !0,
    })
}
globalThis.genrePopup = f4
var n9 = ({ name: $ = "", color: X = "", onClick: Q = y.of(void 0) }) =>
        K.default.createElement("button", { className: `login-button${X}`, onClick: Q }, $),
    _8 = () => {
        let [$, X] = K.useState(F0)
        Spicetify.Player.addEventListener("songchange", () => setTimeout(() => X(F0), 500))
        const Q = Y => async () => {
            let H = await W0(Y)
            if (H === null) Spicetify.Platform.History.push(`/search/${Y}/playlists`)
            else Spicetify.Platform.History.push(`/playlist/${H.split(":")[2]}`)
            Spicetify.PopupModal.hide()
        }
        return K.default.createElement(
            "div",
            { className: "spaced-down" },
            K.default.createElement("h1", { className: "title" }, "Spotify Genres"),
            $.map(Y => K.default.createElement(n9, { name: Y0(Y), onClick: Q(Y) })),
        )
    },
    d8 = () => {
        if (g0.length == 0) return K.default.createElement(K.default.Fragment, null)
        let [$, X] = K.useState(g0)
        Spicetify.Player.addEventListener("songchange", () => setTimeout(() => X(g0), 100))
        const Q = Y => async () => {
            Spicetify.Platform.History.push(`/search/${Y}/playlists`), Spicetify.PopupModal.hide()
        }
        return K.default.createElement(
            "div",
            { className: "spaced-down" },
            K.default.createElement("h1", { className: "title" }, "Last FM Tags"),
            $.map(Y => K.default.createElement(n9, { name: Y0(Y), onClick: Q(Y) })),
        )
    }
var z = k1(n4(), 1),
    t9 = k1(s9(), 1)
class T {
    $
    X
    Q
    stopHistoryListener
    setRerender = null
    constructor($, X, Q = {}) {
        this.name = $
        this.sectionId = X
        this.sectionFields = Q
    }
    static waitForReact = async () => {
        while (!(Spicetify.React && Spicetify.ReactDOM)) F1(100)
        return this
    }
    pushSettings = async () => {
        while (!Spicetify?.Platform?.History?.listen) await F1(100)
        if (this.stopHistoryListener) this.stopHistoryListener()
        if (
            ((this.stopHistoryListener = Spicetify.Platform.History.listen(({ pathname: $ = "" }) => {
                if ($ === "/preferences") this.render()
            })),
            Spicetify.Platform.History.location.pathname === "/preferences")
        )
            await this.render()
    }
    toObject = () => new Proxy({}, { get: ($, X) => T.getFieldValue(this.getId(X.toString())) })
    rerender = () => {
        if (this.setRerender) this.setRerender(Math.random())
    }
    render = async () => {
        while (!document.getElementById("desktop.settings.selectLanguage")) {
            if (Spicetify.Platform.History.location.pathname !== "/preferences") return
            await F1(100)
        }
        const $ = document.querySelector(".x-settings-container")
        let X = Array.from($.children).find(({ id: Q }) => Q === this.sectionId)
        if (!X)
            (X = document.createElement("div")),
                (X.id = this.sectionId),
                (X.className = "settingsContainer"),
                $.appendChild(X)
        t9.default.render(z.default.createElement(this.FieldsContainer, null), X)
    }
    addButton = ($, X, Q, Y = I0, H = {}) => {
        const J = this.getId($)
        return (
            (H.onClick = Y),
            (this.sectionFields[$] = { id: J, type: M.BUTTON, description: X, text: Q, events: H }),
            this
        )
    }
    addToggle = ($, X, Q = y.of(!0), Y = I0, H = {}) => {
        const J = this.getId($)
        return (
            T.setDefaultFieldValue(J, Q),
            (H.onChange = Y),
            (this.sectionFields[$] = { id: J, type: M.TOGGLE, description: X, events: H }),
            this
        )
    }
    addInput = ($, X, Q, Y = I0, H = "text", J = {}) => {
        const j = this.getId($)
        return (
            T.setDefaultFieldValue(j, Q),
            (J.onChange = Y),
            (this.sectionFields[$] = { id: j, type: M.INPUT, description: X, inputType: H, events: J }),
            this
        )
    }
    addDropDown = ($, X, Q, Y = y.of(0), H = I0, J = {}) => {
        const j = this.getId($)
        return (
            T.setDefaultFieldValue(j, Y),
            (J.onChange = H),
            (this.sectionFields[$] = { id: j, type: M.DROPDOWN, description: X, options: Q, events: J }),
            this
        )
    }
    addHidden = ($, X) => {
        const Q = this.getId($)
        return T.setDefaultFieldValue(Q, X), (this.sectionFields[$] = { id: Q, type: M.HIDDEN, description: "" }), this
    }
    getId = $ => `extensions:${this.sectionId}:${$}`
    useStateFor = $ => {
        const [X, Q] = z.useState(T.getFieldValue($))
        return [
            X,
            Y => {
                if (Y !== void 0) Q(Y), T.setFieldValue($, Y)
            },
        ]
    }
    static getFieldValue = $ => {
        return JSON.parse(Spicetify.LocalStorage.get($) ?? "null")
    }
    static setFieldValue = ($, X) => {
        Spicetify.LocalStorage.set($, JSON.stringify(X))
    }
    static setDefaultFieldValue = async ($, X) => {
        if (T.getFieldValue($) === null) T.setFieldValue($, await X())
    }
    FieldsContainer = () => {
        const [$, X] = z.useState(0)
        return (
            (this.setRerender = X),
            z.default.createElement(
                "div",
                { className: "x-settings-section", key: $ },
                z.default.createElement(
                    "h2",
                    { className: "Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type" },
                    this.name,
                ),
                Object.entries(this.sectionFields).map(([Q, Y]) => {
                    return z.default.createElement(this.Field, { field: Y })
                }),
            )
        )
    }
    Field = ({ field: $ }) => {
        const X = u9("type")
        return z.default.createElement(
            "div",
            { className: "x-settings-row" },
            z.default.createElement(this.SettingDescription, { id: $.id, description: $.description }),
            z.default.createElement(
                "div",
                { className: "x-settings-secondColumn" },
                y9([
                    [X(M.INPUT), this.SettingInputField],
                    [X(M.BUTTON), this.SettingButtonField],
                    [X(M.TOGGLE), this.SettingToggleField],
                    [X(M.DROPDOWN), this.SettingDropdownField],
                ])(this.SettingHidden)($),
            ),
        )
    }
    SettingDescription = ({ id: $, description: X }) =>
        z.default.createElement(
            "div",
            { className: "x-settings-firstColumn" },
            z.default.createElement(
                "label",
                { className: "Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type", htmlFor: $ },
                X,
            ),
        )
    SettingButtonField = $ =>
        z.default.createElement(
            "span",
            { className: "" },
            z.default.createElement(
                "button",
                {
                    id: $.id,
                    className:
                        "Button-sc-y0gtbx-0 Button-sm-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",
                    ...$.events,
                    type: $.type,
                },
                $.text,
            ),
        )
    SettingToggleField = $ => {
        const [X, Q] = this.useStateFor($.id)
        return z.default.createElement(
            "label",
            { className: "x-settings-secondColumn x-toggle-wrapper" },
            z.default.createElement("input", {
                id: $.id,
                className: "x-toggle-input",
                type: "checkbox",
                checked: T.getFieldValue($.id),
                ...$.events,
                onChange: Y => {
                    Q(Y.currentTarget.checked), $.events.onChange?.(Y)
                },
            }),
            z.default.createElement(
                "span",
                { className: "x-toggle-indicatorWrapper" },
                z.default.createElement("span", { className: "x-toggle-indicator" }),
            ),
        )
    }
    SettingInputField = $ => {
        const [X, Q] = this.useStateFor($.id)
        return z.default.createElement("input", {
            className: "x-settings-input",
            id: $.id,
            dir: "ltr",
            value: T.getFieldValue($.id),
            type: $.inputType,
            ...$.events,
            onChange: Y => {
                Q(Y.currentTarget.value), $.events.onChange?.(Y)
            },
        })
    }
    SettingDropdownField = $ => {
        const [X, Q] = this.useStateFor($.id)
        return z.default.createElement(
            "select",
            {
                className: "main-dropDown-dropDown",
                id: $.id,
                ...$.events,
                onChange: Y => {
                    Q(Y.currentTarget.selectedIndex), $.events.onChange?.(Y)
                },
            },
            $.options.map((Y, H) =>
                z.default.createElement("option", { selected: H === T.getFieldValue($.id), value: H + 1 }, Y),
            ),
        )
    }
    SettingHidden = () => z.default.createElement(z.default.Fragment, null)
}
var M
;(function (J) {
    J["HIDDEN"] = "hidden"
    J["INPUT"] = "input"
    J["DROPDOWN"] = "dropdown"
    J["BUTTON"] = "button"
    J["TOGGLE"] = "toggle"
})(M || (M = {}))
var i9 = new T("Show The Genres", "show-the-genres").addInput(
    "LFMApiKey",
    "Last.fm API Key",
    y.of("44654ea047786d90338c17331a5f5d95"),
)
i9.pushSettings()
var e9 = i9.toObject()
;(async () => {
    if (!document.getElementById("F3zgswjydEILy2a_6lHDIyhG7Flt8-wqcPTy_caaMyI")) {
        const X = document.createElement("style")
        ;(X.id = "F3zgswjydEILy2a_6lHDIyhG7Flt8-wqcPTy_caaMyI"),
            (X.textContent =
                '.genres-popup::after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.genres-popup .title {\n  color: var(--spice-text);\n}\n.genres-popup .spaced-down {\n  margin-bottom: 20px;\n}\n.genres-popup .login-button {\n  background-color: var(--spice-button);\n  border-radius: 8px;\n  border-style: none;\n  color: var(--spice-text);\n  cursor: pointer;\n  font-size: 14px;\n  height: 40px;\n  margin: 10px;\n  padding: 5px 10px;\n  text-align: center;\n}\n.genres-popup .login-button:hover {\n  background-color: var(--spice-button-active);\n}\n\n.main-nowPlayingWidget-trackInfo.main-trackInfo-container {\n  grid-template: "title title" "badges subtitle" "genres genres"/auto 1fr auto;\n}'),
            document.head.appendChild(X)
    }
})()
var p8 = $ => Spicetify.Platform.History.push(`/search/${$}/playlists`)
globalThis.searchPlaylist = p8
var F0 = new Array(),
    g0 = new Array(),
    o8 = async $ => {
        return (
            (M0.innerHTML = await Z(
                $,
                B.map(async X => {
                    return `<a href="${(await W0(X)) ?? "#"}" style="color: var(--spice-subtext); font-size: 12px">${Y0(
                        X,
                    )}</a>`
                }),
                X => Promise.all(X),
                F(B.intercalate(I.Monoid)("<span>, </span>")),
            )),
            M0
        )
    },
    r8 = async $ => {
        const X = await n0("div.main-trackInfo-container"),
            { uri: Q, metadata: Y } = Spicetify.Player.data.track
        if (Y && !Y.is_local && Spicetify.URI.isTrack(Q) && $.length)
            X?.appendChild(await o8($)),
                (g0 = Z(
                    await _4(e9.LFMApiKey, Y.artist_name, Y.title),
                    ({ track: H }) => H.toptags.tag,
                    B.map(({ name: H }) => H),
                ))
        else X?.removeChild(M0)
    },
    n8 = () => {
        let $ = Spicetify.Player.data?.track?.metadata ?? {}
        return [...Array(10).keys()].map(X => $["artist_uri" + (X ? `:${X}` : "")]).filter(Boolean)
    },
    a9 = async () => {
        const $ = n8()
        ;(F0 = await r4($)), await r8(F0.slice(0, 5))
    },
    M0 = document.createElement("div")
M0.className = "main-trackInfo-genres ellipsis-one-line main-type-finale"
M0.style.gridArea = "genres"
M0.addEventListener("contextmenu", f4)
Spicetify.Player.addEventListener("songchange", a9)
a9()
Spicetify.Platform.History.listen(o4)
o4(Spicetify.Platform.History.location)

// react
var require_react = __commonJS((exports, module) => {
    module.exports = Spicetify.React
})

// react-dom
var require_react_dom = __commonJS((exports, module) => {
    module.exports = Spicetify.ReactDOM
})

// node_modules/fp-ts/es6/function.js
function identity(a) {
    return a
}
function constant(a) {
    return function () {
        return a
    }
}
function flip(f) {
    return function () {
        var args = []
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i]
        }
        if (args.length > 1) {
            return f(args[1], args[0])
        }
        return function (a) {
            return f(a)(args[0])
        }
    }
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab
        case 2:
            return function () {
                return bc(ab.apply(this, arguments))
            }
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)))
            }
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))))
            }
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))))
            }
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))))
            }
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))
            }
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))))
            }
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))))
            }
    }
    return
}
function tupled(f) {
    return function (a) {
        return f.apply(undefined, a)
    }
}
function untupled(f) {
    return function () {
        var a = []
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i]
        }
        return f(a)
    }
}
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
    switch (arguments.length) {
        case 1:
            return a
        case 2:
            return ab(a)
        case 3:
            return bc(ab(a))
        case 4:
            return cd(bc(ab(a)))
        case 5:
            return de(cd(bc(ab(a))))
        case 6:
            return ef(de(cd(bc(ab(a)))))
        case 7:
            return fg(ef(de(cd(bc(ab(a))))))
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))))
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))))
        default: {
            var ret = arguments[0]
            for (var i = 1; i < arguments.length; i++) {
                ret = arguments[i](ret)
            }
            return ret
        }
    }
}
var __spreadArray = function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                ar[i] = from[i]
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from))
}
var getSemigroup = function (S) {
    return function () {
        return {
            concat: function (f, g) {
                return function (a) {
                    return S.concat(f(a), g(a))
                }
            },
        }
    }
}
var getMonoid = function (M) {
    var getSemigroupM = getSemigroup(M)
    return function () {
        return {
            concat: getSemigroupM().concat,
            empty: function () {
                return M.empty
            },
        }
    }
}
var apply = function (a) {
    return function (f) {
        return f(a)
    }
}
var constUndefined = constant(undefined)
var constVoid = constUndefined
var dual = function (arity, body) {
    var isDataFirst =
        typeof arity === "number"
            ? function (args) {
                  return args.length >= arity
              }
            : arity
    return function () {
        var args = Array.from(arguments)
        if (isDataFirst(arguments)) {
            return body.apply(this, args)
        }
        return function (self) {
            return body.apply(undefined, __spreadArray([self], args, false))
        }
    }
}

// node_modules/fp-ts/es6/internal.js
var __spreadArray2 = function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                ar[i] = from[i]
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from))
}
var isNone = function (fa) {
    return fa._tag === "None"
}
var isSome = function (fa) {
    return fa._tag === "Some"
}
var none = { _tag: "None" }
var some = function (a) {
    return { _tag: "Some", value: a }
}
var isLeft = function (ma) {
    return ma._tag === "Left"
}
var singleton = function (a) {
    return [a]
}
var isNonEmpty = function (as) {
    return as.length > 0
}
var head = function (as) {
    return as[0]
}
var tail = function (as) {
    return as.slice(1)
}
var emptyReadonlyArray = []
var emptyRecord = {}
var fromReadonlyNonEmptyArray = function (as) {
    return __spreadArray2([as[0]], as.slice(1), true)
}
var flatMapIO = function (F, M) {
    return dual(2, function (self, f) {
        return M.flatMap(self, function (a) {
            return F.fromIO(f(a))
        })
    })
}

// node_modules/fp-ts/es6/Apply.js
function apFirst(A) {
    return function (second) {
        return function (first) {
            return A.ap(
                A.map(first, function (a) {
                    return function () {
                        return a
                    }
                }),
                second,
            )
        }
    }
}
function apSecond(A) {
    return function (second) {
        return function (first) {
            return A.ap(
                A.map(first, function () {
                    return function (b) {
                        return b
                    }
                }),
                second,
            )
        }
    }
}
function apS(F) {
    return function (name, fb) {
        return function (fa) {
            return F.ap(
                F.map(fa, function (a) {
                    return function (b) {
                        var _a
                        return Object.assign({}, a, ((_a = {}), (_a[name] = b), _a))
                    }
                }),
                fb,
            )
        }
    }
}
function getApplySemigroup(F) {
    return function (S) {
        return {
            concat: function (first, second) {
                return F.ap(
                    F.map(first, function (x) {
                        return function (y) {
                            return S.concat(x, y)
                        }
                    }),
                    second,
                )
            },
        }
    }
}

// node_modules/fp-ts/es6/Functor.js
function flap(F) {
    return function (a) {
        return function (fab) {
            return F.map(fab, function (f) {
                return f(a)
            })
        }
    }
}
function bindTo(F) {
    return function (name) {
        return function (fa) {
            return F.map(fa, function (a) {
                var _a
                return (_a = {}), (_a[name] = a), _a
            })
        }
    }
}
var let_ = function (F) {
    return function (name, f) {
        return function (fa) {
            return F.map(fa, function (a) {
                var _a
                return Object.assign({}, a, ((_a = {}), (_a[name] = f(a)), _a))
            })
        }
    }
}
function as(F) {
    return function (self, b) {
        return F.map(self, function () {
            return b
        })
    }
}
function asUnit(F) {
    var asM = as(F)
    return function (self) {
        return asM(self, undefined)
    }
}

// node_modules/fp-ts/es6/Applicative.js
function getApplicativeMonoid(F) {
    var f = getApplySemigroup(F)
    return function (M) {
        return {
            concat: f(M).concat,
            empty: F.of(M.empty),
        }
    }
}

// node_modules/fp-ts/es6/Array.js
var exports_Array = {}
__export(exports_Array, {
    zipWith: () => {
        {
            return zipWith
        }
    },
    zip: () => {
        {
            return zip
        }
    },
    zero: () => {
        {
            return zero
        }
    },
    wither: () => {
        {
            return wither
        }
    },
    wilt: () => {
        {
            return wilt
        }
    },
    updateAt: () => {
        {
            return updateAt
        }
    },
    unzip: () => {
        {
            return unzip
        }
    },
    unsafeUpdateAt: () => {
        {
            return unsafeUpdateAt3
        }
    },
    unsafeInsertAt: () => {
        {
            return unsafeInsertAt3
        }
    },
    unsafeDeleteAt: () => {
        {
            return unsafeDeleteAt2
        }
    },
    uniq: () => {
        {
            return uniq3
        }
    },
    union: () => {
        {
            return union3
        }
    },
    unfold: () => {
        {
            return unfold
        }
    },
    traverseWithIndex: () => {
        {
            return traverseWithIndex
        }
    },
    traverse: () => {
        {
            return traverse
        }
    },
    takeRight: () => {
        {
            return takeRight
        }
    },
    takeLeftWhile: () => {
        {
            return takeLeftWhile2
        }
    },
    takeLeft: () => {
        {
            return takeLeft
        }
    },
    tail: () => {
        {
            return tail4
        }
    },
    splitAt: () => {
        {
            return splitAt3
        }
    },
    spanLeft: () => {
        {
            return spanLeft
        }
    },
    sortBy: () => {
        {
            return sortBy3
        }
    },
    sort: () => {
        {
            return sort3
        }
    },
    some: () => {
        {
            return some2
        }
    },
    snoc: () => {
        {
            return snoc3
        }
    },
    size: () => {
        {
            return size
        }
    },
    sequence: () => {
        {
            return sequence
        }
    },
    separate: () => {
        {
            return separate
        }
    },
    scanRight: () => {
        {
            return scanRight
        }
    },
    scanLeft: () => {
        {
            return scanLeft
        }
    },
    rotate: () => {
        {
            return rotate3
        }
    },
    rights: () => {
        {
            return rights
        }
    },
    reverse: () => {
        {
            return reverse3
        }
    },
    replicate: () => {
        {
            return replicate
        }
    },
    reduceWithIndex: () => {
        {
            return reduceWithIndex3
        }
    },
    reduceRightWithIndex: () => {
        {
            return reduceRightWithIndex3
        }
    },
    reduceRight: () => {
        {
            return reduceRight3
        }
    },
    reduce: () => {
        {
            return reduce3
        }
    },
    range: () => {
        {
            return range3
        }
    },
    prependW: () => {
        {
            return prependW3
        }
    },
    prependToAll: () => {
        {
            return prependToAll
        }
    },
    prependAll: () => {
        {
            return prependAll3
        }
    },
    prepend: () => {
        {
            return prepend3
        }
    },
    partitionWithIndex: () => {
        {
            return partitionWithIndex
        }
    },
    partitionMapWithIndex: () => {
        {
            return partitionMapWithIndex
        }
    },
    partitionMap: () => {
        {
            return partitionMap
        }
    },
    partition: () => {
        {
            return partition
        }
    },
    of: () => {
        {
            return of3
        }
    },
    modifyAt: () => {
        {
            return modifyAt
        }
    },
    matchW: () => {
        {
            return matchW2
        }
    },
    matchRightW: () => {
        {
            return matchRightW
        }
    },
    matchRight: () => {
        {
            return matchRight
        }
    },
    matchLeftW: () => {
        {
            return matchLeftW
        }
    },
    matchLeft: () => {
        {
            return matchLeft
        }
    },
    match: () => {
        {
            return match2
        }
    },
    mapWithIndex: () => {
        {
            return mapWithIndex
        }
    },
    map: () => {
        {
            return map
        }
    },
    makeBy: () => {
        {
            return makeBy3
        }
    },
    lookup: () => {
        {
            return lookup2
        }
    },
    let: () => {
        {
            return let_2
        }
    },
    lefts: () => {
        {
            return lefts
        }
    },
    last: () => {
        {
            return last4
        }
    },
    isOutOfBound: () => {
        {
            return isOutOfBound4
        }
    },
    isNonEmpty: () => {
        {
            return isNonEmpty5
        }
    },
    isEmpty: () => {
        {
            return isEmpty
        }
    },
    intersperse: () => {
        {
            return intersperse3
        }
    },
    intersection: () => {
        {
            return intersection
        }
    },
    intercalate: () => {
        {
            return intercalate3
        }
    },
    insertAt: () => {
        {
            return insertAt2
        }
    },
    init: () => {
        {
            return init3
        }
    },
    head: () => {
        {
            return head5
        }
    },
    guard: () => {
        {
            return guard2
        }
    },
    getUnionSemigroup: () => {
        {
            return getUnionSemigroup
        }
    },
    getUnionMonoid: () => {
        {
            return getUnionMonoid
        }
    },
    getShow: () => {
        {
            return getShow3
        }
    },
    getSemigroup: () => {
        {
            return getSemigroup4
        }
    },
    getOrd: () => {
        {
            return getOrd2
        }
    },
    getMonoid: () => {
        {
            return getMonoid4
        }
    },
    getIntersectionSemigroup: () => {
        {
            return getIntersectionSemigroup
        }
    },
    getEq: () => {
        {
            return getEq3
        }
    },
    getDifferenceMagma: () => {
        {
            return getDifferenceMagma
        }
    },
    fromPredicate: () => {
        {
            return fromPredicate
        }
    },
    fromOptionK: () => {
        {
            return fromOptionK
        }
    },
    fromOption: () => {
        {
            return fromOption
        }
    },
    fromEitherK: () => {
        {
            return fromEitherK2
        }
    },
    fromEither: () => {
        {
            return fromEither
        }
    },
    foldRight: () => {
        {
            return foldRight
        }
    },
    foldMapWithIndex: () => {
        {
            return foldMapWithIndex3
        }
    },
    foldMap: () => {
        {
            return foldMap3
        }
    },
    foldLeft: () => {
        {
            return foldLeft
        }
    },
    flatten: () => {
        {
            return flatten
        }
    },
    flatMap: () => {
        {
            return flatMap
        }
    },
    flap: () => {
        {
            return flap2
        }
    },
    findLastMap: () => {
        {
            return findLastMap2
        }
    },
    findLastIndex: () => {
        {
            return findLastIndex2
        }
    },
    findLast: () => {
        {
            return findLast2
        }
    },
    findIndex: () => {
        {
            return findIndex2
        }
    },
    findFirstMap: () => {
        {
            return findFirstMap2
        }
    },
    findFirst: () => {
        {
            return findFirst2
        }
    },
    filterWithIndex: () => {
        {
            return filterWithIndex
        }
    },
    filterMapWithIndex: () => {
        {
            return filterMapWithIndex
        }
    },
    filterMap: () => {
        {
            return filterMap
        }
    },
    filterE: () => {
        {
            return filterE2
        }
    },
    filter: () => {
        {
            return filter
        }
    },
    extend: () => {
        {
            return extend
        }
    },
    exists: () => {
        {
            return exists
        }
    },
    every: () => {
        {
            return every2
        }
    },
    empty: () => {
        {
            return empty4
        }
    },
    elem: () => {
        {
            return elem2
        }
    },
    duplicate: () => {
        {
            return duplicate
        }
    },
    dropRight: () => {
        {
            return dropRight
        }
    },
    dropLeftWhile: () => {
        {
            return dropLeftWhile2
        }
    },
    dropLeft: () => {
        {
            return dropLeft
        }
    },
    difference: () => {
        {
            return difference
        }
    },
    deleteAt: () => {
        {
            return deleteAt2
        }
    },
    copy: () => {
        {
            return copy2
        }
    },
    cons: () => {
        {
            return cons3
        }
    },
    concatW: () => {
        {
            return concatW
        }
    },
    concat: () => {
        {
            return concat2
        }
    },
    comprehension: () => {
        {
            return comprehension
        }
    },
    compact: () => {
        {
            return compact
        }
    },
    chunksOf: () => {
        {
            return chunksOf3
        }
    },
    chop: () => {
        {
            return chop3
        }
    },
    chainWithIndex: () => {
        {
            return chainWithIndex
        }
    },
    chainRecDepthFirst: () => {
        {
            return chainRecDepthFirst2
        }
    },
    chainRecBreadthFirst: () => {
        {
            return chainRecBreadthFirst2
        }
    },
    chainFirst: () => {
        {
            return chainFirst2
        }
    },
    chain: () => {
        {
            return chain
        }
    },
    bindTo: () => {
        {
            return bindTo2
        }
    },
    bind: () => {
        {
            return bind2
        }
    },
    array: () => {
        {
            return array
        }
    },
    appendW: () => {
        {
            return appendW3
        }
    },
    append: () => {
        {
            return append3
        }
    },
    apSecond: () => {
        {
            return apSecond2
        }
    },
    apS: () => {
        {
            return apS2
        }
    },
    apFirst: () => {
        {
            return apFirst2
        }
    },
    ap: () => {
        {
            return ap2
        }
    },
    altW: () => {
        {
            return altW
        }
    },
    alt: () => {
        {
            return alt
        }
    },
    Zero: () => {
        {
            return Zero2
        }
    },
    Witherable: () => {
        {
            return Witherable2
        }
    },
    Unfoldable: () => {
        {
            return Unfoldable
        }
    },
    URI: () => {
        {
            return URI2
        }
    },
    TraversableWithIndex: () => {
        {
            return TraversableWithIndex
        }
    },
    Traversable: () => {
        {
            return Traversable
        }
    },
    Pointed: () => {
        {
            return Pointed
        }
    },
    Monad: () => {
        {
            return Monad
        }
    },
    FunctorWithIndex: () => {
        {
            return FunctorWithIndex
        }
    },
    Functor: () => {
        {
            return Functor2
        }
    },
    FromEither: () => {
        {
            return FromEither2
        }
    },
    FoldableWithIndex: () => {
        {
            return FoldableWithIndex
        }
    },
    Foldable: () => {
        {
            return Foldable
        }
    },
    FilterableWithIndex: () => {
        {
            return FilterableWithIndex
        }
    },
    Filterable: () => {
        {
            return Filterable
        }
    },
    Extend: () => {
        {
            return Extend
        }
    },
    Do: () => {
        {
            return Do
        }
    },
    Compactable: () => {
        {
            return Compactable
        }
    },
    ChainRecDepthFirst: () => {
        {
            return ChainRecDepthFirst
        }
    },
    ChainRecBreadthFirst: () => {
        {
            return ChainRecBreadthFirst
        }
    },
    Chain: () => {
        {
            return Chain3
        }
    },
    Apply: () => {
        {
            return Apply3
        }
    },
    Applicative: () => {
        {
            return Applicative
        }
    },
    Alternative: () => {
        {
            return Alternative
        }
    },
    Alt: () => {
        {
            return Alt
        }
    },
})

// node_modules/fp-ts/es6/Chain.js
function chainFirst(M) {
    var tapM = tap(M)
    return function (f) {
        return function (first) {
            return tapM(first, f)
        }
    }
}
function tap(M) {
    return function (first, f) {
        return M.chain(first, function (a) {
            return M.map(f(a), function () {
                return a
            })
        })
    }
}
function bind(M) {
    return function (name, f) {
        return function (ma) {
            return M.chain(ma, function (a) {
                return M.map(f(a), function (b) {
                    var _a
                    return Object.assign({}, a, ((_a = {}), (_a[name] = b), _a))
                })
            })
        }
    }
}

// node_modules/fp-ts/es6/FromEither.js
function fromEitherK(F) {
    return function (f) {
        return flow(f, F.fromEither)
    }
}
function tapEither(F, M) {
    var fromEither = fromEitherK(F)
    var tapM = tap(M)
    return function (self, f) {
        return tapM(self, fromEither(f))
    }
}

// node_modules/fp-ts/es6/Eq.js
var exports_Eq = {}
__export(exports_Eq, {
    tuple: () => {
        {
            return tuple
        }
    },
    struct: () => {
        {
            return struct
        }
    },
    strictEqual: () => {
        {
            return strictEqual
        }
    },
    getTupleEq: () => {
        {
            return getTupleEq
        }
    },
    getStructEq: () => {
        {
            return getStructEq
        }
    },
    getSemigroup: () => {
        {
            return getSemigroup2
        }
    },
    getMonoid: () => {
        {
            return getMonoid2
        }
    },
    fromEquals: () => {
        {
            return fromEquals
        }
    },
    eqString: () => {
        {
            return eqString
        }
    },
    eqStrict: () => {
        {
            return eqStrict
        }
    },
    eqNumber: () => {
        {
            return eqNumber
        }
    },
    eqDate: () => {
        {
            return eqDate
        }
    },
    eqBoolean: () => {
        {
            return eqBoolean
        }
    },
    eq: () => {
        {
            return eq
        }
    },
    contramap: () => {
        {
            return contramap
        }
    },
    URI: () => {
        {
            return URI
        }
    },
    Contravariant: () => {
        {
            return Contravariant
        }
    },
})
var fromEquals = function (equals) {
    return {
        equals: function (x, y) {
            return x === y || equals(x, y)
        },
    }
}
var struct = function (eqs) {
    return fromEquals(function (first, second) {
        for (var key in eqs) {
            if (!eqs[key].equals(first[key], second[key])) {
                return false
            }
        }
        return true
    })
}
var tuple = function () {
    var eqs = []
    for (var _i = 0; _i < arguments.length; _i++) {
        eqs[_i] = arguments[_i]
    }
    return fromEquals(function (first, second) {
        return eqs.every(function (E, i) {
            return E.equals(first[i], second[i])
        })
    })
}
var contramap_ = function (fa, f) {
    return pipe(fa, contramap(f))
}
var contramap = function (f) {
    return function (fa) {
        return fromEquals(function (x, y) {
            return fa.equals(f(x), f(y))
        })
    }
}
var URI = "Eq"
var eqStrict = {
    equals: function (a, b) {
        return a === b
    },
}
var empty = {
    equals: function () {
        return true
    },
}
var getSemigroup2 = function () {
    return {
        concat: function (x, y) {
            return fromEquals(function (a, b) {
                return x.equals(a, b) && y.equals(a, b)
            })
        },
    }
}
var getMonoid2 = function () {
    return {
        concat: getSemigroup2().concat,
        empty,
    }
}
var Contravariant = {
    URI,
    contramap: contramap_,
}
var getTupleEq = tuple
var getStructEq = struct
var strictEqual = eqStrict.equals
var eq = Contravariant
var eqBoolean = eqStrict
var eqString = eqStrict
var eqNumber = eqStrict
var eqDate = {
    equals: function (first, second) {
        return first.valueOf() === second.valueOf()
    },
}

// node_modules/fp-ts/es6/Ord.js
var compare = function (first, second) {
    return first < second ? -1 : first > second ? 1 : 0
}
var equalsDefault = function (compare2) {
    return function (first, second) {
        return first === second || compare2(first, second) === 0
    }
}
var fromCompare = function (compare2) {
    return {
        equals: equalsDefault(compare2),
        compare: function (first, second) {
            return first === second ? 0 : compare2(first, second)
        },
    }
}
var getSemigroup3 = function () {
    return {
        concat: function (first, second) {
            return fromCompare(function (a, b) {
                var ox = first.compare(a, b)
                return ox !== 0 ? ox : second.compare(a, b)
            })
        },
    }
}
var getMonoid3 = function () {
    return {
        concat: getSemigroup3().concat,
        empty: fromCompare(function () {
            return 0
        }),
    }
}
var min = function (O) {
    return function (first, second) {
        return first === second || O.compare(first, second) < 1 ? first : second
    }
}
var max = function (O) {
    return function (first, second) {
        return first === second || O.compare(first, second) > -1 ? first : second
    }
}
var strictOrd = {
    equals: eqStrict.equals,
    compare,
}

// node_modules/fp-ts/es6/Magma.js
var concatAll = function (M) {
    return function (startWith) {
        return function (as2) {
            return as2.reduce(function (a, acc) {
                return M.concat(a, acc)
            }, startWith)
        }
    }
}

// node_modules/fp-ts/es6/Semigroup.js
var min2 = function (O) {
    return {
        concat: min(O),
    }
}
var max2 = function (O) {
    return {
        concat: max(O),
    }
}
var constant2 = function (a) {
    return {
        concat: function () {
            return a
        },
    }
}
var first = function () {
    return { concat: identity }
}
var concatAll2 = concatAll
var semigroupVoid = constant2(undefined)
var semigroupAll = {
    concat: function (x, y) {
        return x && y
    },
}
var semigroupAny = {
    concat: function (x, y) {
        return x || y
    },
}
var semigroupString = {
    concat: function (x, y) {
        return x + y
    },
}
var semigroupSum = {
    concat: function (x, y) {
        return x + y
    },
}
var semigroupProduct = {
    concat: function (x, y) {
        return x * y
    },
}

// node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js
var __spreadArray3 = function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                ar[i] = from[i]
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from))
}
var empty2 = emptyReadonlyArray
var isNonEmpty2 = isNonEmpty
var isOutOfBound = function (i, as2) {
    return i < 0 || i >= as2.length
}
var prependW = function (head2) {
    return function (tail2) {
        return __spreadArray3([head2], tail2, true)
    }
}
var prepend = prependW
var unsafeInsertAt = function (i, a, as2) {
    if (isNonEmpty2(as2)) {
        var xs = fromReadonlyNonEmptyArray(as2)
        xs.splice(i, 0, a)
        return xs
    }
    return [a]
}
var sort = function (O) {
    return function (as2) {
        return as2.length === 1 ? as2 : as2.slice().sort(O.compare)
    }
}
var prependAll = function (middle) {
    return function (as2) {
        var out = [middle, as2[0]]
        for (var i = 1; i < as2.length; i++) {
            out.push(middle, as2[i])
        }
        return out
    }
}
var intersperse = function (middle) {
    return function (as2) {
        var rest = tail2(as2)
        return isNonEmpty2(rest) ? pipe(rest, prependAll(middle), prepend(head2(as2))) : as2
    }
}
var extract = head
var head2 = extract
var tail2 = tail
var last = function (as2) {
    return as2[as2.length - 1]
}
var concatAll3 = function (S) {
    return function (as2) {
        return as2.reduce(S.concat)
    }
}
var intercalate = function (S) {
    var concatAllS = concatAll3(S)
    return function (middle) {
        return flow(intersperse(middle), concatAllS)
    }
}

// node_modules/fp-ts/es6/NonEmptyArray.js
function concat(x, y) {
    return y
        ? x.concat(y)
        : function (y2) {
              return y2.concat(x)
          }
}
function cons(head3, tail3) {
    return tail3 === undefined ? prepend2(head3) : pipe(tail3, prepend2(head3))
}
var __spreadArray4 = function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                ar[i] = from[i]
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from))
}
var isNonEmpty3 = function (as2) {
    return as2.length > 0
}
var isOutOfBound2 = function (i, as2) {
    return i < 0 || i >= as2.length
}
var prependW2 = function (head3) {
    return function (tail3) {
        return __spreadArray4([head3], tail3, true)
    }
}
var prepend2 = prependW2
var appendW = function (end) {
    return function (init) {
        return __spreadArray4(__spreadArray4([], init, true), [end], false)
    }
}
var append = appendW
var unsafeInsertAt2 = function (i, a, as2) {
    if (isNonEmpty3(as2)) {
        var xs = fromReadonlyNonEmptyArray2(as2)
        xs.splice(i, 0, a)
        return xs
    }
    return [a]
}
var unsafeUpdateAt = function (i, a, as2) {
    var xs = fromReadonlyNonEmptyArray2(as2)
    xs[i] = a
    return xs
}
var uniq = function (E) {
    return function (as2) {
        if (as2.length === 1) {
            return copy(as2)
        }
        var out = [head3(as2)]
        var rest = tail3(as2)
        var _loop_1 = function (a2) {
            if (
                out.every(function (o) {
                    return !E.equals(o, a2)
                })
            ) {
                out.push(a2)
            }
        }
        for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
            var a = rest_1[_i]
            _loop_1(a)
        }
        return out
    }
}
var sortBy = function (ords) {
    if (isNonEmpty3(ords)) {
        var M = getMonoid3()
        return sort2(ords.reduce(M.concat, M.empty))
    }
    return copy
}
var union = function (E) {
    var uniqE = uniq(E)
    return function (second) {
        return function (first2) {
            return uniqE(pipe(first2, concat(second)))
        }
    }
}
var rotate = function (n) {
    return function (as2) {
        var len = as2.length
        var m = Math.round(n) % len
        if (isOutOfBound2(Math.abs(m), as2) || m === 0) {
            return copy(as2)
        }
        if (m < 0) {
            var _a = splitAt(-m)(as2),
                f = _a[0],
                s = _a[1]
            return pipe(s, concat(f))
        } else {
            return rotate(m - len)(as2)
        }
    }
}
var fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray
var makeBy = function (f) {
    return function (n) {
        var j = Math.max(0, Math.floor(n))
        var out = [f(0)]
        for (var i = 1; i < j; i++) {
            out.push(f(i))
        }
        return out
    }
}
var range = function (start, end) {
    return start <= end
        ? makeBy(function (i) {
              return start + i
          })(end - start + 1)
        : [start]
}
var sort2 = function (O) {
    return function (as2) {
        return as2.slice().sort(O.compare)
    }
}
var copy = fromReadonlyNonEmptyArray2
var of = function (a) {
    return [a]
}
var prependAll2 = function (middle) {
    return function (as2) {
        var out = [middle, as2[0]]
        for (var i = 1; i < as2.length; i++) {
            out.push(middle, as2[i])
        }
        return out
    }
}
var intersperse2 = function (middle) {
    return function (as2) {
        var rest = tail3(as2)
        return isNonEmpty3(rest) ? pipe(rest, prependAll2(middle), prepend2(head3(as2))) : copy(as2)
    }
}
var chop = function (f) {
    return function (as2) {
        var _a = f(as2),
            b = _a[0],
            rest = _a[1]
        var out = [b]
        var next = rest
        while (isNonEmpty3(next)) {
            var _b = f(next),
                b_1 = _b[0],
                rest_2 = _b[1]
            out.push(b_1)
            next = rest_2
        }
        return out
    }
}
var splitAt = function (n) {
    return function (as2) {
        var m = Math.max(1, n)
        return m >= as2.length ? [copy(as2), []] : [pipe(as2.slice(1, m), prepend2(head3(as2))), as2.slice(m)]
    }
}
var chunksOf = function (n) {
    return chop(splitAt(n))
}
var head3 = head2
var tail3 = function (as2) {
    return as2.slice(1)
}
var last2 = last
var init = function (as2) {
    return as2.slice(0, -1)
}
var snoc = function (init2, end) {
    return pipe(init2, append(end))
}

// node_modules/fp-ts/es6/number.js
var Eq2 = {
    equals: function (first2, second) {
        return first2 === second
    },
}
var Ord2 = {
    equals: Eq2.equals,
    compare: function (first2, second) {
        return first2 < second ? -1 : first2 > second ? 1 : 0
    },
}
var Bounded = {
    equals: Eq2.equals,
    compare: Ord2.compare,
    top: Infinity,
    bottom: -Infinity,
}
var MagmaSub = {
    concat: function (first2, second) {
        return first2 - second
    },
}
var SemigroupSum = {
    concat: function (first2, second) {
        return first2 + second
    },
}
var SemigroupProduct = {
    concat: function (first2, second) {
        return first2 * second
    },
}
var MonoidSum = {
    concat: SemigroupSum.concat,
    empty: 0,
}
var MonoidProduct = {
    concat: SemigroupProduct.concat,
    empty: 1,
}
var Field = {
    add: SemigroupSum.concat,
    zero: 0,
    mul: SemigroupProduct.concat,
    one: 1,
    sub: MagmaSub.concat,
    degree: function (_) {
        return 1
    },
    div: function (first2, second) {
        return first2 / second
    },
    mod: function (first2, second) {
        return first2 % second
    },
}

// node_modules/fp-ts/es6/Separated.js
var separated = function (left, right) {
    return { left, right }
}

// node_modules/fp-ts/es6/Witherable.js
function wiltDefault(T, C) {
    return function (F) {
        var traverseF = T.traverse(F)
        return function (wa, f) {
            return F.map(traverseF(wa, f), C.separate)
        }
    }
}
function witherDefault(T, C) {
    return function (F) {
        var traverseF = T.traverse(F)
        return function (wa, f) {
            return F.map(traverseF(wa, f), C.compact)
        }
    }
}
function filterE(W) {
    return function (F) {
        var witherF = W.wither(F)
        return function (predicate) {
            return function (ga) {
                return witherF(ga, function (a) {
                    return F.map(predicate(a), function (b) {
                        return b ? some(a) : none
                    })
                })
            }
        }
    }
}

// node_modules/fp-ts/es6/Zero.js
function guard(F, P) {
    return function (b) {
        return b ? P.of(undefined) : F.zero()
    }
}

// node_modules/fp-ts/es6/ReadonlyArray.js
function lookup(i, as2) {
    return as2 === undefined
        ? function (as3) {
              return lookup(i, as3)
          }
        : isOutOfBound3(i, as2)
        ? none
        : some(as2[i])
}
function takeLeftWhile(predicate) {
    return function (as2) {
        var out = []
        for (var _i = 0, as_1 = as2; _i < as_1.length; _i++) {
            var a = as_1[_i]
            if (!predicate(a)) {
                break
            }
            out.push(a)
        }
        var len = out.length
        return len === as2.length ? as2 : len === 0 ? empty3 : out
    }
}
function dropLeftWhile(predicate) {
    return function (as2) {
        var i = spanLeftIndex(as2, predicate)
        return i === 0 ? as2 : i === as2.length ? empty3 : as2.slice(i)
    }
}
function findFirst(predicate) {
    return function (as2) {
        for (var i = 0; i < as2.length; i++) {
            if (predicate(as2[i])) {
                return some(as2[i])
            }
        }
        return none
    }
}
function findLast(predicate) {
    return function (as2) {
        for (var i = as2.length - 1; i >= 0; i--) {
            if (predicate(as2[i])) {
                return some(as2[i])
            }
        }
        return none
    }
}
function elem(E) {
    return function (a, as2) {
        if (as2 === undefined) {
            var elemE_1 = elem(E)
            return function (as3) {
                return elemE_1(a, as3)
            }
        }
        var predicate = function (element) {
            return E.equals(element, a)
        }
        var i = 0
        for (; i < as2.length; i++) {
            if (predicate(as2[i])) {
                return true
            }
        }
        return false
    }
}
function every(predicate) {
    return function (as2) {
        return as2.every(predicate)
    }
}
var __spreadArray5 = function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                ar[i] = from[i]
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from))
}
var isNonEmpty4 = isNonEmpty2
var matchW = function (onEmpty, onNonEmpty) {
    return function (as2) {
        return isNonEmpty4(as2) ? onNonEmpty(as2) : onEmpty()
    }
}
var match = matchW
var isOutOfBound3 = isOutOfBound
var head4 = function (as2) {
    return isNonEmpty4(as2) ? some(head2(as2)) : none
}
var last3 = function (as2) {
    return isNonEmpty4(as2) ? some(last(as2)) : none
}
var spanLeftIndex = function (as2, predicate) {
    var l = as2.length
    var i = 0
    for (; i < l; i++) {
        if (!predicate(as2[i])) {
            break
        }
    }
    return i
}
var findIndex = function (predicate) {
    return function (as2) {
        for (var i = 0; i < as2.length; i++) {
            if (predicate(as2[i])) {
                return some(i)
            }
        }
        return none
    }
}
var findFirstMap = function (f) {
    return function (as2) {
        for (var i = 0; i < as2.length; i++) {
            var out = f(as2[i])
            if (isSome(out)) {
                return out
            }
        }
        return none
    }
}
var findLastMap = function (f) {
    return function (as2) {
        for (var i = as2.length - 1; i >= 0; i--) {
            var out = f(as2[i])
            if (isSome(out)) {
                return out
            }
        }
        return none
    }
}
var findLastIndex = function (predicate) {
    return function (as2) {
        for (var i = as2.length - 1; i >= 0; i--) {
            if (predicate(as2[i])) {
                return some(i)
            }
        }
        return none
    }
}
var insertAt = function (i, a) {
    return function (as2) {
        return i < 0 || i > as2.length ? none : some(unsafeInsertAt(i, a, as2))
    }
}
var deleteAt = function (i) {
    return function (as2) {
        return isOutOfBound3(i, as2) ? none : some(unsafeDeleteAt(i, as2))
    }
}
var reverse2 = function (as2) {
    return as2.length <= 1 ? as2 : as2.slice().reverse()
}
var _chainRecDepthFirst = function (a, f) {
    return pipe(a, chainRecDepthFirst(f))
}
var _chainRecBreadthFirst = function (a, f) {
    return pipe(a, chainRecBreadthFirst(f))
}
var foldMapWithIndex2 = function (M) {
    return function (f) {
        return function (fa) {
            return fa.reduce(function (b, a, i) {
                return M.concat(b, f(i, a))
            }, M.empty)
        }
    }
}
var reduce2 = function (b, f) {
    return reduceWithIndex2(b, function (_, b2, a) {
        return f(b2, a)
    })
}
var foldMap2 = function (M) {
    var foldMapWithIndexM = foldMapWithIndex2(M)
    return function (f) {
        return foldMapWithIndexM(function (_, a) {
            return f(a)
        })
    }
}
var reduceWithIndex2 = function (b, f) {
    return function (fa) {
        var len = fa.length
        var out = b
        for (var i = 0; i < len; i++) {
            out = f(i, out, fa[i])
        }
        return out
    }
}
var reduceRight2 = function (b, f) {
    return reduceRightWithIndex2(b, function (_, a, b2) {
        return f(a, b2)
    })
}
var reduceRightWithIndex2 = function (b, f) {
    return function (fa) {
        return fa.reduceRight(function (b2, a, i) {
            return f(i, a, b2)
        }, b)
    }
}
var getShow2 = function (S) {
    return {
        show: function (as2) {
            return "[".concat(as2.map(S.show).join(", "), "]")
        },
    }
}
var getEq2 = function (E) {
    return fromEquals(function (xs, ys) {
        return (
            xs.length === ys.length &&
            xs.every(function (x, i) {
                return E.equals(x, ys[i])
            })
        )
    })
}
var getOrd = function (O) {
    return fromCompare(function (a, b) {
        var aLen = a.length
        var bLen = b.length
        var len = Math.min(aLen, bLen)
        for (var i = 0; i < len; i++) {
            var ordering = O.compare(a[i], b[i])
            if (ordering !== 0) {
                return ordering
            }
        }
        return Ord2.compare(aLen, bLen)
    })
}
var chainRecDepthFirst = function (f) {
    return function (a) {
        var todo = __spreadArray5([], f(a), true)
        var out = []
        while (todo.length > 0) {
            var e = todo.shift()
            if (isLeft(e)) {
                todo.unshift.apply(todo, f(e.left))
            } else {
                out.push(e.right)
            }
        }
        return out
    }
}
var chainRecBreadthFirst = function (f) {
    return function (a) {
        var initial = f(a)
        var todo = []
        var out = []
        function go(e2) {
            if (isLeft(e2)) {
                f(e2.left).forEach(function (v) {
                    return todo.push(v)
                })
            } else {
                out.push(e2.right)
            }
        }
        for (var _i = 0, initial_1 = initial; _i < initial_1.length; _i++) {
            var e = initial_1[_i]
            go(e)
        }
        while (todo.length > 0) {
            go(todo.shift())
        }
        return out
    }
}
var unsafeDeleteAt = function (i, as2) {
    var xs = as2.slice()
    xs.splice(i, 1)
    return xs
}
var empty3 = empty2
var intercalate2 = function (M) {
    var intercalateM = intercalate(M)
    return function (middle) {
        return match(function () {
            return M.empty
        }, intercalateM(middle))
    }
}

// node_modules/fp-ts/es6/Array.js
function fromPredicate(predicate) {
    return function (a) {
        return predicate(a) ? [a] : []
    }
}
function takeLeftWhile2(predicate) {
    return function (as2) {
        var out = []
        for (var _i = 0, as_1 = as2; _i < as_1.length; _i++) {
            var a = as_1[_i]
            if (!predicate(a)) {
                break
            }
            out.push(a)
        }
        return out
    }
}
function spanLeft(predicate) {
    return function (as2) {
        var _a = splitAt3(spanLeftIndex2(as2, predicate))(as2),
            init3 = _a[0],
            rest = _a[1]
        return { init: init3, rest }
    }
}
function dropLeftWhile2(predicate) {
    return function (as2) {
        return as2.slice(spanLeftIndex2(as2, predicate))
    }
}
function findFirst2(predicate) {
    return findFirst(predicate)
}
function findLast2(predicate) {
    return findLast(predicate)
}
function zip(as2, bs) {
    if (bs === undefined) {
        return function (bs2) {
            return zip(bs2, as2)
        }
    }
    return zipWith(as2, bs, function (a, b) {
        return [a, b]
    })
}
function comprehension(input, f, g) {
    if (g === undefined) {
        g = function () {
            return true
        }
    }
    var go = function (scope, input2) {
        return isNonEmpty5(input2)
            ? flatMap(head3(input2), function (a) {
                  return go(pipe(scope, append3(a)), tail3(input2))
              })
            : g.apply(undefined, scope)
            ? [f.apply(undefined, scope)]
            : []
    }
    return go([], input)
}
function union3(E) {
    var unionE = union(E)
    return function (first2, second) {
        if (second === undefined) {
            var unionE_1 = union3(E)
            return function (second2) {
                return unionE_1(second2, first2)
            }
        }
        return isNonEmpty5(first2) && isNonEmpty5(second)
            ? unionE(second)(first2)
            : isNonEmpty5(first2)
            ? copy2(first2)
            : copy2(second)
    }
}
function intersection(E) {
    var elemE = elem2(E)
    return function (xs, ys) {
        if (ys === undefined) {
            var intersectionE_1 = intersection(E)
            return function (ys2) {
                return intersectionE_1(ys2, xs)
            }
        }
        return xs.filter(function (a) {
            return elemE(a, ys)
        })
    }
}
function difference(E) {
    var elemE = elem2(E)
    return function (xs, ys) {
        if (ys === undefined) {
            var differenceE_1 = difference(E)
            return function (ys2) {
                return differenceE_1(ys2, xs)
            }
        }
        return xs.filter(function (a) {
            return !elemE(a, ys)
        })
    }
}
var isEmpty = function (as2) {
    return as2.length === 0
}
var isNonEmpty5 = isNonEmpty3
var prepend3 = prepend2
var prependW3 = prependW2
var append3 = append
var appendW3 = appendW
var makeBy3 = function (n, f) {
    return n <= 0 ? [] : makeBy(f)(n)
}
var replicate = function (n, a) {
    return makeBy3(n, function () {
        return a
    })
}
var fromOption = function (ma) {
    return isNone(ma) ? [] : [ma.value]
}
var fromEither = function (e) {
    return isLeft(e) ? [] : [e.right]
}
var matchW2 = function (onEmpty, onNonEmpty) {
    return function (as2) {
        return isNonEmpty5(as2) ? onNonEmpty(as2) : onEmpty()
    }
}
var match2 = matchW2
var matchLeftW = function (onEmpty, onNonEmpty) {
    return function (as2) {
        return isNonEmpty5(as2) ? onNonEmpty(head3(as2), tail3(as2)) : onEmpty()
    }
}
var matchLeft = matchLeftW
var foldLeft = matchLeft
var matchRightW = function (onEmpty, onNonEmpty) {
    return function (as2) {
        return isNonEmpty5(as2) ? onNonEmpty(init(as2), last2(as2)) : onEmpty()
    }
}
var matchRight = matchRightW
var foldRight = matchRight
var chainWithIndex = function (f) {
    return function (as2) {
        var out = []
        for (var i = 0; i < as2.length; i++) {
            out.push.apply(out, f(i, as2[i]))
        }
        return out
    }
}
var scanLeft = function (b, f) {
    return function (as2) {
        var len = as2.length
        var out = new Array(len + 1)
        out[0] = b
        for (var i = 0; i < len; i++) {
            out[i + 1] = f(out[i], as2[i])
        }
        return out
    }
}
var scanRight = function (b, f) {
    return function (as2) {
        var len = as2.length
        var out = new Array(len + 1)
        out[len] = b
        for (var i = len - 1; i >= 0; i--) {
            out[i] = f(as2[i], out[i + 1])
        }
        return out
    }
}
var size = function (as2) {
    return as2.length
}
var isOutOfBound4 = isOutOfBound2
var lookup2 = lookup
var head5 = head4
var last4 = last3
var tail4 = function (as2) {
    return isNonEmpty5(as2) ? some(tail3(as2)) : none
}
var init3 = function (as2) {
    return isNonEmpty5(as2) ? some(init(as2)) : none
}
var takeLeft = function (n) {
    return function (as2) {
        return isOutOfBound4(n, as2) ? copy2(as2) : as2.slice(0, n)
    }
}
var takeRight = function (n) {
    return function (as2) {
        return isOutOfBound4(n, as2) ? copy2(as2) : n === 0 ? [] : as2.slice(-n)
    }
}
var spanLeftIndex2 = function (as2, predicate) {
    var l = as2.length
    var i = 0
    for (; i < l; i++) {
        if (!predicate(as2[i])) {
            break
        }
    }
    return i
}
var dropLeft = function (n) {
    return function (as2) {
        return n <= 0 || isEmpty(as2) ? copy2(as2) : n >= as2.length ? [] : as2.slice(n, as2.length)
    }
}
var dropRight = function (n) {
    return function (as2) {
        return n <= 0 || isEmpty(as2) ? copy2(as2) : n >= as2.length ? [] : as2.slice(0, as2.length - n)
    }
}
var findIndex2 = findIndex
var findFirstMap2 = findFirstMap
var findLastMap2 = findLastMap
var findLastIndex2 = findLastIndex
var copy2 = function (as2) {
    return as2.slice()
}
var insertAt2 = function (i, a) {
    return function (as2) {
        return i < 0 || i > as2.length ? none : some(unsafeInsertAt3(i, a, as2))
    }
}
var updateAt = function (i, a) {
    return modifyAt(i, function () {
        return a
    })
}
var deleteAt2 = function (i) {
    return function (as2) {
        return isOutOfBound4(i, as2) ? none : some(unsafeDeleteAt2(i, as2))
    }
}
var modifyAt = function (i, f) {
    return function (as2) {
        return isOutOfBound4(i, as2) ? none : some(unsafeUpdateAt3(i, f(as2[i]), as2))
    }
}
var reverse3 = function (as2) {
    return isEmpty(as2) ? [] : as2.slice().reverse()
}
var rights = function (as2) {
    var r = []
    for (var i = 0; i < as2.length; i++) {
        var a = as2[i]
        if (a._tag === "Right") {
            r.push(a.right)
        }
    }
    return r
}
var lefts = function (as2) {
    var r = []
    for (var i = 0; i < as2.length; i++) {
        var a = as2[i]
        if (a._tag === "Left") {
            r.push(a.left)
        }
    }
    return r
}
var sort3 = function (O) {
    return function (as2) {
        return as2.length <= 1 ? copy2(as2) : as2.slice().sort(O.compare)
    }
}
var zipWith = function (fa, fb, f) {
    var fc = []
    var len = Math.min(fa.length, fb.length)
    for (var i = 0; i < len; i++) {
        fc[i] = f(fa[i], fb[i])
    }
    return fc
}
var unzip = function (as2) {
    var fa = []
    var fb = []
    for (var i = 0; i < as2.length; i++) {
        fa[i] = as2[i][0]
        fb[i] = as2[i][1]
    }
    return [fa, fb]
}
var prependAll3 = function (middle) {
    var f = prependAll2(middle)
    return function (as2) {
        return isNonEmpty5(as2) ? f(as2) : []
    }
}
var intersperse3 = function (middle) {
    var f = intersperse2(middle)
    return function (as2) {
        return isNonEmpty5(as2) ? f(as2) : copy2(as2)
    }
}
var rotate3 = function (n) {
    var f = rotate(n)
    return function (as2) {
        return isNonEmpty5(as2) ? f(as2) : copy2(as2)
    }
}
var elem2 = elem
var uniq3 = function (E) {
    var f = uniq(E)
    return function (as2) {
        return isNonEmpty5(as2) ? f(as2) : copy2(as2)
    }
}
var sortBy3 = function (ords) {
    var f = sortBy(ords)
    return function (as2) {
        return isNonEmpty5(as2) ? f(as2) : copy2(as2)
    }
}
var chop3 = function (f) {
    var g = chop(f)
    return function (as2) {
        return isNonEmpty5(as2) ? g(as2) : []
    }
}
var splitAt3 = function (n) {
    return function (as2) {
        return n >= 1 && isNonEmpty5(as2) ? splitAt(n)(as2) : isEmpty(as2) ? [copy2(as2), []] : [[], copy2(as2)]
    }
}
var chunksOf3 = function (n) {
    var f = chunksOf(n)
    return function (as2) {
        return isNonEmpty5(as2) ? f(as2) : []
    }
}
var fromOptionK = function (f) {
    return function () {
        var a = []
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i]
        }
        return fromOption(f.apply(undefined, a))
    }
}
var concatW = function (second) {
    return function (first2) {
        return isEmpty(first2) ? copy2(second) : isEmpty(second) ? copy2(first2) : first2.concat(second)
    }
}
var concat2 = concatW
var _map = function (fa, f) {
    return pipe(fa, map(f))
}
var _mapWithIndex = function (fa, f) {
    return pipe(fa, mapWithIndex(f))
}
var _ap = function (fab, fa) {
    return pipe(fab, ap2(fa))
}
var _filter = function (fa, predicate) {
    return pipe(fa, filter(predicate))
}
var _filterMap = function (fa, f) {
    return pipe(fa, filterMap(f))
}
var _partition = function (fa, predicate) {
    return pipe(fa, partition(predicate))
}
var _partitionMap = function (fa, f) {
    return pipe(fa, partitionMap(f))
}
var _partitionWithIndex = function (fa, predicateWithIndex) {
    return pipe(fa, partitionWithIndex(predicateWithIndex))
}
var _partitionMapWithIndex = function (fa, f) {
    return pipe(fa, partitionMapWithIndex(f))
}
var _alt = function (fa, that) {
    return pipe(fa, alt(that))
}
var _reduce = function (fa, b, f) {
    return pipe(fa, reduce3(b, f))
}
var _foldMap = function (M) {
    var foldMapM = foldMap3(M)
    return function (fa, f) {
        return pipe(fa, foldMapM(f))
    }
}
var _reduceRight = function (fa, b, f) {
    return pipe(fa, reduceRight3(b, f))
}
var _reduceWithIndex = function (fa, b, f) {
    return pipe(fa, reduceWithIndex3(b, f))
}
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = foldMapWithIndex3(M)
    return function (fa, f) {
        return pipe(fa, foldMapWithIndexM(f))
    }
}
var _reduceRightWithIndex = function (fa, b, f) {
    return pipe(fa, reduceRightWithIndex3(b, f))
}
var _filterMapWithIndex = function (fa, f) {
    return pipe(fa, filterMapWithIndex(f))
}
var _filterWithIndex = function (fa, predicateWithIndex) {
    return pipe(fa, filterWithIndex(predicateWithIndex))
}
var _extend = function (fa, f) {
    return pipe(fa, extend(f))
}
var _traverse = function (F) {
    var traverseF = traverse(F)
    return function (ta, f) {
        return pipe(ta, traverseF(f))
    }
}
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = traverseWithIndex(F)
    return function (ta, f) {
        return pipe(ta, traverseWithIndexF(f))
    }
}
var _chainRecDepthFirst2 = _chainRecDepthFirst
var _chainRecBreadthFirst2 = _chainRecBreadthFirst
var of3 = of
var zero = function () {
    return []
}
var map = function (f) {
    return function (fa) {
        return fa.map(function (a) {
            return f(a)
        })
    }
}
var ap2 = function (fa) {
    return flatMap(function (f) {
        return pipe(fa, map(f))
    })
}
var flatMap = dual(2, function (ma, f) {
    return pipe(
        ma,
        chainWithIndex(function (i, a) {
            return f(a, i)
        }),
    )
})
var flatten = flatMap(identity)
var mapWithIndex = function (f) {
    return function (fa) {
        return fa.map(function (a, i) {
            return f(i, a)
        })
    }
}
var filterMapWithIndex = function (f) {
    return function (fa) {
        var out = []
        for (var i = 0; i < fa.length; i++) {
            var optionB = f(i, fa[i])
            if (isSome(optionB)) {
                out.push(optionB.value)
            }
        }
        return out
    }
}
var filterMap = function (f) {
    return filterMapWithIndex(function (_, a) {
        return f(a)
    })
}
var compact = filterMap(identity)
var separate = function (fa) {
    var left = []
    var right = []
    for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
        var e = fa_1[_i]
        if (e._tag === "Left") {
            left.push(e.left)
        } else {
            right.push(e.right)
        }
    }
    return separated(left, right)
}
var filter = function (predicate) {
    return function (as2) {
        return as2.filter(predicate)
    }
}
var partition = function (predicate) {
    return partitionWithIndex(function (_, a) {
        return predicate(a)
    })
}
var partitionWithIndex = function (predicateWithIndex) {
    return function (as2) {
        var left = []
        var right = []
        for (var i = 0; i < as2.length; i++) {
            var b = as2[i]
            if (predicateWithIndex(i, b)) {
                right.push(b)
            } else {
                left.push(b)
            }
        }
        return separated(left, right)
    }
}
var partitionMap = function (f) {
    return partitionMapWithIndex(function (_, a) {
        return f(a)
    })
}
var partitionMapWithIndex = function (f) {
    return function (fa) {
        var left = []
        var right = []
        for (var i = 0; i < fa.length; i++) {
            var e = f(i, fa[i])
            if (e._tag === "Left") {
                left.push(e.left)
            } else {
                right.push(e.right)
            }
        }
        return separated(left, right)
    }
}
var altW = function (that) {
    return function (fa) {
        return fa.concat(that())
    }
}
var alt = altW
var filterWithIndex = function (predicateWithIndex) {
    return function (as2) {
        return as2.filter(function (b, i) {
            return predicateWithIndex(i, b)
        })
    }
}
var extend = function (f) {
    return function (wa) {
        return wa.map(function (_, i) {
            return f(wa.slice(i))
        })
    }
}
var duplicate = extend(identity)
var foldMap3 = foldMap2
var foldMapWithIndex3 = foldMapWithIndex2
var reduce3 = reduce2
var reduceWithIndex3 = reduceWithIndex2
var reduceRight3 = reduceRight2
var reduceRightWithIndex3 = reduceRightWithIndex2
var traverse = function (F) {
    var traverseWithIndexF = traverseWithIndex(F)
    return function (f) {
        return traverseWithIndexF(function (_, a) {
            return f(a)
        })
    }
}
var sequence = function (F) {
    return function (ta) {
        return _reduce(ta, F.of(zero()), function (fas, fa) {
            return F.ap(
                F.map(fas, function (as2) {
                    return function (a) {
                        return pipe(as2, append3(a))
                    }
                }),
                fa,
            )
        })
    }
}
var traverseWithIndex = function (F) {
    return function (f) {
        return reduceWithIndex3(F.of(zero()), function (i, fbs, a) {
            return F.ap(
                F.map(fbs, function (bs) {
                    return function (b) {
                        return pipe(bs, append3(b))
                    }
                }),
                f(i, a),
            )
        })
    }
}
var wither = function (F) {
    var _witherF = _wither(F)
    return function (f) {
        return function (fa) {
            return _witherF(fa, f)
        }
    }
}
var wilt = function (F) {
    var _wiltF = _wilt(F)
    return function (f) {
        return function (fa) {
            return _wiltF(fa, f)
        }
    }
}
var unfold = function (b, f) {
    var out = []
    var bb = b
    while (true) {
        var mt = f(bb)
        if (isSome(mt)) {
            var _a = mt.value,
                a = _a[0],
                b_1 = _a[1]
            out.push(a)
            bb = b_1
        } else {
            break
        }
    }
    return out
}
var URI2 = "Array"
var getShow3 = getShow2
var getSemigroup4 = function () {
    return {
        concat: function (first2, second) {
            return first2.concat(second)
        },
    }
}
var getMonoid4 = function () {
    return {
        concat: getSemigroup4().concat,
        empty: [],
    }
}
var getEq3 = getEq2
var getOrd2 = getOrd
var getUnionSemigroup = function (E) {
    var unionE = union3(E)
    return {
        concat: function (first2, second) {
            return unionE(second)(first2)
        },
    }
}
var getUnionMonoid = function (E) {
    return {
        concat: getUnionSemigroup(E).concat,
        empty: [],
    }
}
var getIntersectionSemigroup = function (E) {
    var intersectionE = intersection(E)
    return {
        concat: function (first2, second) {
            return intersectionE(second)(first2)
        },
    }
}
var getDifferenceMagma = function (E) {
    var differenceE = difference(E)
    return {
        concat: function (first2, second) {
            return differenceE(second)(first2)
        },
    }
}
var Functor2 = {
    URI: URI2,
    map: _map,
}
var flap2 = flap(Functor2)
var Pointed = {
    URI: URI2,
    of: of3,
}
var FunctorWithIndex = {
    URI: URI2,
    map: _map,
    mapWithIndex: _mapWithIndex,
}
var Apply3 = {
    URI: URI2,
    map: _map,
    ap: _ap,
}
var apFirst2 = apFirst(Apply3)
var apSecond2 = apSecond(Apply3)
var Applicative = {
    URI: URI2,
    map: _map,
    ap: _ap,
    of: of3,
}
var Chain3 = {
    URI: URI2,
    map: _map,
    ap: _ap,
    chain: flatMap,
}
var chainFirst2 = chainFirst(Chain3)
var Monad = {
    URI: URI2,
    map: _map,
    ap: _ap,
    of: of3,
    chain: flatMap,
}
var Unfoldable = {
    URI: URI2,
    unfold,
}
var Alt = {
    URI: URI2,
    map: _map,
    alt: _alt,
}
var Zero2 = {
    URI: URI2,
    zero,
}
var guard2 = guard(Zero2, Pointed)
var Alternative = {
    URI: URI2,
    map: _map,
    ap: _ap,
    of: of3,
    alt: _alt,
    zero,
}
var Extend = {
    URI: URI2,
    map: _map,
    extend: _extend,
}
var Compactable = {
    URI: URI2,
    compact,
    separate,
}
var Filterable = {
    URI: URI2,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
}
var FilterableWithIndex = {
    URI: URI2,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
}
var Foldable = {
    URI: URI2,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
}
var FoldableWithIndex = {
    URI: URI2,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
}
var Traversable = {
    URI: URI2,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
}
var TraversableWithIndex = {
    URI: URI2,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence,
    traverseWithIndex: _traverseWithIndex,
}
var _wither = witherDefault(Traversable, Compactable)
var _wilt = wiltDefault(Traversable, Compactable)
var Witherable2 = {
    URI: URI2,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    wither: _wither,
    wilt: _wilt,
}
var chainRecDepthFirst2 = chainRecDepthFirst
var ChainRecDepthFirst = {
    URI: URI2,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecDepthFirst2,
}
var chainRecBreadthFirst2 = chainRecBreadthFirst
var ChainRecBreadthFirst = {
    URI: URI2,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecBreadthFirst2,
}
var filterE2 = filterE(Witherable2)
var FromEither2 = {
    URI: URI2,
    fromEither,
}
var fromEitherK2 = fromEitherK(FromEither2)
var unsafeInsertAt3 = unsafeInsertAt2
var unsafeUpdateAt3 = function (i, a, as2) {
    return isNonEmpty5(as2) ? unsafeUpdateAt(i, a, as2) : []
}
var unsafeDeleteAt2 = function (i, as2) {
    var xs = as2.slice()
    xs.splice(i, 1)
    return xs
}
var every2 = every
var some2 = function (predicate) {
    return function (as2) {
        return as2.some(predicate)
    }
}
var exists = some2
var intercalate3 = intercalate2
var Do = of3(emptyRecord)
var bindTo2 = bindTo(Functor2)
var let_2 = let_(Functor2)
var bind2 = bind(Chain3)
var apS2 = apS(Apply3)
var chain = flatMap
var range3 = range
var empty4 = []
var cons3 = cons
var snoc3 = snoc
var prependToAll = prependAll3
var array = {
    URI: URI2,
    compact,
    separate,
    map: _map,
    ap: _ap,
    of: of3,
    chain: flatMap,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero,
    unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt,
}

// node_modules/fp-ts/es6/Predicate.js
var not = function (predicate) {
    return function (a) {
        return !predicate(a)
    }
}

// node_modules/fp-ts/es6/Option.js
function fromPredicate2(predicate) {
    return function (a) {
        return predicate(a) ? some3(a) : none2
    }
}
var none2 = none
var some3 = some
var getRight = function (ma) {
    return ma._tag === "Left" ? none2 : some3(ma.right)
}
var _map2 = function (fa, f) {
    return pipe(fa, map2(f))
}
var _ap2 = function (fab, fa) {
    return pipe(fab, ap3(fa))
}
var URI3 = "Option"
var getMonoid5 = function (S) {
    return {
        concat: function (x, y) {
            return isNone2(x) ? y : isNone2(y) ? x : some3(S.concat(x.value, y.value))
        },
        empty: none2,
    }
}
var map2 = function (f) {
    return function (fa) {
        return isNone2(fa) ? none2 : some3(f(fa.value))
    }
}
var Functor4 = {
    URI: URI3,
    map: _map2,
}
var as2 = dual(2, as(Functor4))
var asUnit2 = asUnit(Functor4)
var ap3 = function (fa) {
    return function (fab) {
        return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some3(fab.value(fa.value))
    }
}
var flatMap2 = dual(2, function (ma, f) {
    return isNone2(ma) ? none2 : f(ma.value)
})
var Chain4 = {
    URI: URI3,
    map: _map2,
    ap: _ap2,
    chain: flatMap2,
}
var orElse = dual(2, function (self, that) {
    return isNone2(self) ? that() : self
})
var fromEither2 = getRight
var FromEither4 = {
    URI: URI3,
    fromEither: fromEither2,
}
var isSome2 = isSome
var isNone2 = function (fa) {
    return fa._tag === "None"
}
var getOrElseW = function (onNone) {
    return function (ma) {
        return isNone2(ma) ? onNone() : ma.value
    }
}
var getOrElse = getOrElseW
var tap2 = dual(2, tap(Chain4))
var tapEither2 = dual(2, tapEither(FromEither4, Chain4))
var chain2 = flatMap2

// node_modules/fp-ts/es6/Endomorphism.js
var getSemigroup5 = function () {
    return {
        concat: function (first2, second) {
            return flow(first2, second)
        },
    }
}
var getMonoid6 = function () {
    return {
        concat: getSemigroup5().concat,
        empty: identity,
    }
}

// node_modules/fp-ts/es6/FromIO.js
function fromIOK(F) {
    return function (f) {
        return flow(f, F.fromIO)
    }
}
function tapIO(F, M) {
    var chainFirstM = tap(M)
    return function (self, f) {
        return chainFirstM(self, flow(f, F.fromIO))
    }
}

// node_modules/fp-ts/es6/ReadonlyMap.js
function lookupWithKey(E) {
    return function (k, m) {
        if (m === undefined) {
            var lookupWithKeyE_1 = lookupWithKey(E)
            return function (m2) {
                return lookupWithKeyE_1(k, m2)
            }
        }
        var entries = m.entries()
        var e
        while (!(e = entries.next()).done) {
            var _a = e.value,
                ka = _a[0],
                a = _a[1]
            if (E.equals(ka, k)) {
                return some([ka, a])
            }
        }
        return none
    }
}
function lookup3(E) {
    var lookupWithKeyE = lookupWithKey(E)
    return function (k, m) {
        if (m === undefined) {
            var lookupE_1 = lookup3(E)
            return function (m2) {
                return lookupE_1(k, m2)
            }
        }
        return pipe(
            lookupWithKeyE(k, m),
            map2(function (_a) {
                var _ = _a[0],
                    a = _a[1]
                return a
            }),
        )
    }
}
var empty5 = new Map()

// node_modules/fp-ts/es6/Map.js
var lookup4 = lookup3
var empty6 = new Map()

// node_modules/fp-ts/es6/Monoid.js
var concatAll4 = function (M) {
    return concatAll2(M)(M.empty)
}
var monoidVoid = {
    concat: semigroupVoid.concat,
    empty: undefined,
}
var monoidAll = {
    concat: semigroupAll.concat,
    empty: true,
}
var monoidAny = {
    concat: semigroupAny.concat,
    empty: false,
}
var monoidString = {
    concat: semigroupString.concat,
    empty: "",
}
var monoidSum = {
    concat: semigroupSum.concat,
    empty: 0,
}
var monoidProduct = {
    concat: semigroupProduct.concat,
    empty: 1,
}

// node_modules/fp-ts/es6/Task.js
var exports_Task = {}
__export(exports_Task, {
    traverseSeqArrayWithIndex: () => {
        {
            return traverseSeqArrayWithIndex
        }
    },
    traverseSeqArray: () => {
        {
            return traverseSeqArray
        }
    },
    traverseReadonlyNonEmptyArrayWithIndexSeq: () => {
        {
            return traverseReadonlyNonEmptyArrayWithIndexSeq
        }
    },
    traverseReadonlyNonEmptyArrayWithIndex: () => {
        {
            return traverseReadonlyNonEmptyArrayWithIndex
        }
    },
    traverseReadonlyArrayWithIndexSeq: () => {
        {
            return traverseReadonlyArrayWithIndexSeq
        }
    },
    traverseReadonlyArrayWithIndex: () => {
        {
            return traverseReadonlyArrayWithIndex
        }
    },
    traverseArrayWithIndex: () => {
        {
            return traverseArrayWithIndex
        }
    },
    traverseArray: () => {
        {
            return traverseArray
        }
    },
    taskSeq: () => {
        {
            return taskSeq
        }
    },
    task: () => {
        {
            return task
        }
    },
    tapIO: () => {
        {
            return tapIO2
        }
    },
    tap: () => {
        {
            return tap3
        }
    },
    sequenceSeqArray: () => {
        {
            return sequenceSeqArray
        }
    },
    sequenceArray: () => {
        {
            return sequenceArray
        }
    },
    of: () => {
        {
            return of4
        }
    },
    never: () => {
        {
            return never
        }
    },
    map: () => {
        {
            return map3
        }
    },
    let: () => {
        {
            return let_3
        }
    },
    getSemigroup: () => {
        {
            return getSemigroup6
        }
    },
    getRaceMonoid: () => {
        {
            return getRaceMonoid
        }
    },
    getMonoid: () => {
        {
            return getMonoid7
        }
    },
    fromTask: () => {
        {
            return fromTask
        }
    },
    fromIOK: () => {
        {
            return fromIOK2
        }
    },
    fromIO: () => {
        {
            return fromIO
        }
    },
    flatten: () => {
        {
            return flatten2
        }
    },
    flatMapIO: () => {
        {
            return flatMapIO2
        }
    },
    flatMap: () => {
        {
            return flatMap3
        }
    },
    flap: () => {
        {
            return flap3
        }
    },
    delay: () => {
        {
            return delay
        }
    },
    chainIOK: () => {
        {
            return chainIOK
        }
    },
    chainFirstIOK: () => {
        {
            return chainFirstIOK
        }
    },
    chainFirst: () => {
        {
            return chainFirst3
        }
    },
    chain: () => {
        {
            return chain3
        }
    },
    bindTo: () => {
        {
            return bindTo3
        }
    },
    bind: () => {
        {
            return bind3
        }
    },
    asUnit: () => {
        {
            return asUnit3
        }
    },
    as: () => {
        {
            return as3
        }
    },
    apSecond: () => {
        {
            return apSecond3
        }
    },
    apS: () => {
        {
            return apS3
        }
    },
    apFirst: () => {
        {
            return apFirst3
        }
    },
    ap: () => {
        {
            return ap4
        }
    },
    URI: () => {
        {
            return URI4
        }
    },
    Pointed: () => {
        {
            return Pointed2
        }
    },
    MonadTask: () => {
        {
            return MonadTask
        }
    },
    MonadIO: () => {
        {
            return MonadIO
        }
    },
    Monad: () => {
        {
            return Monad2
        }
    },
    Functor: () => {
        {
            return Functor6
        }
    },
    FromTask: () => {
        {
            return FromTask
        }
    },
    FromIO: () => {
        {
            return FromIO2
        }
    },
    Do: () => {
        {
            return Do2
        }
    },
    Chain: () => {
        {
            return Chain6
        }
    },
    ApplySeq: () => {
        {
            return ApplySeq
        }
    },
    ApplyPar: () => {
        {
            return ApplyPar
        }
    },
    ApplicativeSeq: () => {
        {
            return ApplicativeSeq
        }
    },
    ApplicativePar: () => {
        {
            return ApplicativePar
        }
    },
    ApT: () => {
        {
            return ApT
        }
    },
})
function delay(millis) {
    return function (ma) {
        return function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    Promise.resolve().then(ma).then(resolve)
                }, millis)
            })
        }
    }
}
function getRaceMonoid() {
    return {
        concat: function (x, y) {
            return function () {
                return Promise.race([Promise.resolve().then(x), Promise.resolve().then(y)])
            }
        },
        empty: never,
    }
}
var fromIO = function (ma) {
    return function () {
        return Promise.resolve().then(ma)
    }
}
var _map3 = function (fa, f) {
    return pipe(fa, map3(f))
}
var _apPar = function (fab, fa) {
    return pipe(fab, ap4(fa))
}
var _apSeq = function (fab, fa) {
    return flatMap3(fab, function (f) {
        return pipe(fa, map3(f))
    })
}
var map3 = function (f) {
    return function (fa) {
        return function () {
            return Promise.resolve().then(fa).then(f)
        }
    }
}
var ap4 = function (fa) {
    return function (fab) {
        return function () {
            return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function (_a) {
                var f = _a[0],
                    a = _a[1]
                return f(a)
            })
        }
    }
}
var of4 = function (a) {
    return function () {
        return Promise.resolve(a)
    }
}
var flatMap3 = dual(2, function (ma, f) {
    return function () {
        return Promise.resolve()
            .then(ma)
            .then(function (a) {
                return f(a)()
            })
    }
})
var flatten2 = flatMap3(identity)
var URI4 = "Task"
var Functor6 = {
    URI: URI4,
    map: _map3,
}
var as3 = dual(2, as(Functor6))
var asUnit3 = asUnit(Functor6)
var flap3 = flap(Functor6)
var Pointed2 = {
    URI: URI4,
    of: of4,
}
var ApplyPar = {
    URI: URI4,
    map: _map3,
    ap: _apPar,
}
var apFirst3 = apFirst(ApplyPar)
var apSecond3 = apSecond(ApplyPar)
var ApplicativePar = {
    URI: URI4,
    map: _map3,
    ap: _apPar,
    of: of4,
}
var ApplySeq = {
    URI: URI4,
    map: _map3,
    ap: _apSeq,
}
var ApplicativeSeq = {
    URI: URI4,
    map: _map3,
    ap: _apSeq,
    of: of4,
}
var Chain6 = {
    URI: URI4,
    map: _map3,
    ap: _apPar,
    chain: flatMap3,
}
var Monad2 = {
    URI: URI4,
    map: _map3,
    of: of4,
    ap: _apPar,
    chain: flatMap3,
}
var MonadIO = {
    URI: URI4,
    map: _map3,
    of: of4,
    ap: _apPar,
    chain: flatMap3,
    fromIO,
}
var fromTask = identity
var MonadTask = {
    URI: URI4,
    map: _map3,
    of: of4,
    ap: _apPar,
    chain: flatMap3,
    fromIO,
    fromTask,
}
var FromIO2 = {
    URI: URI4,
    fromIO,
}
var _FlatMap = {
    flatMap: flatMap3,
}
var _FromIO = {
    fromIO: FromIO2.fromIO,
}
var flatMapIO2 = flatMapIO(_FromIO, _FlatMap)
var tap3 = dual(2, tap(Chain6))
var tapIO2 = dual(2, tapIO(FromIO2, Chain6))
var fromIOK2 = fromIOK(FromIO2)
var chainIOK = flatMapIO2
var chainFirstIOK = tapIO2
var FromTask = {
    URI: URI4,
    fromIO,
    fromTask,
}
var never = function () {
    return new Promise(function (_) {
        return
    })
}
var Do2 = of4(emptyRecord)
var bindTo3 = bindTo(Functor6)
var let_3 = let_(Functor6)
var bind3 = bind(Chain6)
var apS3 = apS(ApplyPar)
var ApT = of4(emptyReadonlyArray)
var traverseReadonlyNonEmptyArrayWithIndex = function (f) {
    return function (as4) {
        return function () {
            return Promise.all(
                as4.map(function (a, i) {
                    return Promise.resolve().then(function () {
                        return f(i, a)()
                    })
                }),
            )
        }
    }
}
var traverseReadonlyArrayWithIndex = function (f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f)
    return function (as4) {
        return isNonEmpty(as4) ? g(as4) : ApT
    }
}
var traverseReadonlyNonEmptyArrayWithIndexSeq = function (f) {
    return function (as4) {
        return function () {
            return tail(as4).reduce(
                function (acc, a, i) {
                    return acc.then(function (bs) {
                        return Promise.resolve()
                            .then(f(i + 1, a))
                            .then(function (b) {
                                bs.push(b)
                                return bs
                            })
                    })
                },
                Promise.resolve()
                    .then(f(0, head(as4)))
                    .then(singleton),
            )
        }
    }
}
var traverseReadonlyArrayWithIndexSeq = function (f) {
    var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f)
    return function (as4) {
        return isNonEmpty(as4) ? g(as4) : ApT
    }
}
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex
var traverseArray = function (f) {
    return traverseReadonlyArrayWithIndex(function (_, a) {
        return f(a)
    })
}
var sequenceArray = traverseArray(identity)
var traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq
var traverseSeqArray = function (f) {
    return traverseReadonlyArrayWithIndexSeq(function (_, a) {
        return f(a)
    })
}
var sequenceSeqArray = traverseSeqArray(identity)
var chain3 = flatMap3
var chainFirst3 = tap3
var task = {
    URI: URI4,
    map: _map3,
    of: of4,
    ap: _apPar,
    chain: flatMap3,
    fromIO,
    fromTask,
}
var taskSeq = {
    URI: URI4,
    map: _map3,
    of: of4,
    ap: _apSeq,
    chain: flatMap3,
    fromIO,
    fromTask,
}
var getSemigroup6 = getApplySemigroup(ApplySeq)
var getMonoid7 = getApplicativeMonoid(ApplicativeSeq)

// node_modules/fp-ts/es6/string.js
var exports_string = {}
__export(exports_string, {
    trimRight: () => {
        {
            return trimRight
        }
    },
    trimLeft: () => {
        {
            return trimLeft
        }
    },
    trim: () => {
        {
            return trim
        }
    },
    toUpperCase: () => {
        {
            return toUpperCase
        }
    },
    toLowerCase: () => {
        {
            return toLowerCase
        }
    },
    startsWith: () => {
        {
            return startsWith
        }
    },
    split: () => {
        {
            return split
        }
    },
    slice: () => {
        {
            return slice
        }
    },
    size: () => {
        {
            return size3
        }
    },
    replace: () => {
        {
            return replace
        }
    },
    isString: () => {
        {
            return isString
        }
    },
    isEmpty: () => {
        {
            return isEmpty3
        }
    },
    includes: () => {
        {
            return includes
        }
    },
    endsWith: () => {
        {
            return endsWith
        }
    },
    empty: () => {
        {
            return empty7
        }
    },
    Show: () => {
        {
            return Show
        }
    },
    Semigroup: () => {
        {
            return Semigroup
        }
    },
    Ord: () => {
        {
            return Ord4
        }
    },
    Monoid: () => {
        {
            return Monoid
        }
    },
    Eq: () => {
        {
            return Eq4
        }
    },
})
var Eq4 = {
    equals: function (first2, second) {
        return first2 === second
    },
}
var Semigroup = {
    concat: function (first2, second) {
        return first2 + second
    },
}
var empty7 = ""
var Monoid = {
    concat: Semigroup.concat,
    empty: empty7,
}
var Ord4 = {
    equals: Eq4.equals,
    compare: function (first2, second) {
        return first2 < second ? -1 : first2 > second ? 1 : 0
    },
}
var Show = {
    show: function (s) {
        return JSON.stringify(s)
    },
}
var isString = function (u) {
    return typeof u === "string"
}
var toUpperCase = function (s) {
    return s.toUpperCase()
}
var toLowerCase = function (s) {
    return s.toLowerCase()
}
var replace = function (searchValue, replaceValue) {
    return function (s) {
        return s.replace(searchValue, replaceValue)
    }
}
var trim = function (s) {
    return s.trim()
}
var trimLeft = function (s) {
    return s.trimLeft()
}
var trimRight = function (s) {
    return s.trimRight()
}
var slice = function (start, end) {
    return function (s) {
        return s.slice(start, end)
    }
}
var isEmpty3 = function (s) {
    return s.length === 0
}
var size3 = function (s) {
    return s.length
}
var split = function (separator) {
    return function (s) {
        var out = s.split(separator)
        return isNonEmpty2(out) ? out : [s]
    }
}
var includes = function (searchString, position) {
    return function (s) {
        return s.includes(searchString, position)
    }
}
var startsWith = function (searchString, position) {
    return function (s) {
        return s.startsWith(searchString, position)
    }
}
var endsWith = function (searchString, position) {
    return function (s) {
        return s.endsWith(searchString, position)
    }
}

// node_modules/fp-ts-std/dist/esm/Function.js
var URI5 = "Function"
var map4 = f => g => flow(g, f)
var Functor8 = {
    URI: URI5,
    map: (f, g) => map4(g)(f),
}
var of5 = constant
var ap5 = f => g => x => g(x)(f(x))
var Applicative3 = {
    ...Functor8,
    of: of5,
    ap: (f, g) => ap5(g)(f),
}
var apFirst4 = apFirst(Applicative3)
var apSecond4 = apSecond(Applicative3)
var chain4 = f => g => x => f(g(x))(x)
var Monad3 = {
    ...Applicative3,
    chain: (f, g) => chain4(g)(f),
}
var Do3 = of5({})
var bindTo4 = bindTo(Functor8)
var bind4 = bind(Monad3)
var apS4 = apS(Applicative3)
var let_4 = let_(Functor8)
var unary = tupled
var guard3 = branches => fallback => input =>
    pipe(
        branches,
        map(([f, g]) => flow(fromPredicate2(f), map2(g))),
        concatAll4(getMonoid(getMonoid5(first()))()),
        apply(input),
        getOrElse(() => fallback(input)),
    )
var unless = f => onFalse => x => f(x) ? x : onFalse(x)
var when = flow(not, unless)
var invoke = x => ys => z => z[x](...ys)
var invokeNullary = flip(invoke)([])
var memoize = eq2 => f => {
    const cache = new Map()
    return k => {
        const cached = lookup4(eq2)(k)(cache)
        if (isSome2(cached)) return cached.value
        const val = f(k)
        cache.set(k, val)
        return val
    }
}
var curry2T = f => a => b => f([a, b])
var curry2 = flow(unary, curry2T)
var curry3T = f => a => b => c => f([a, b, c])
var curry3 = flow(unary, curry3T)
var curry4T = f => a => b => c => d => f([a, b, c, d])
var curry4 = flow(unary, curry4T)
var curry5T = f => a => b => c => d => e => f([a, b, c, d, e])
var curry5 = flow(unary, curry5T)
var applyEvery = concatAll4(getMonoid6())

// shared/fp.tsx
var guard4 = branches => guard3(branches)
var pMchain = f => async fa => f(await fa)
var is = c => a => field => field[c] === a
var chunckify = n => g =>
    flow(exports_Array.chunksOf(n), exports_Array.map(g), ps => Promise.all(ps), pMchain(exports_Array.flatten))
var memoize2 = fn => pipe(fn, tupled, memoize(exports_Eq.contramap(JSON.stringify)(exports_string.Eq)), untupled)

// shared/util.tsx
var SpotifyLoc
;(function (SpotifyLoc) {
    let before
    ;(function (before) {
        before.start = constant({ before: "start" })
        before.fromUri = uri => ({
            before: { uri },
        })
        before.fromUid = uid => ({
            before: { uid },
        })
    })((before = SpotifyLoc.before || (SpotifyLoc.before = {})))
    let after
    ;(function (after) {
        after.end = constant({ after: "end" })
        after.fromUri = uri => ({
            before: { uri },
        })
        after.fromUid = uid => ({
            before: { uid },
        })
    })((after = SpotifyLoc.after || (SpotifyLoc.after = {})))
})(SpotifyLoc || (SpotifyLoc = {}))
var escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, `\\\$&`)
var titleCase = str => str.replace(/\b\w/g, l => l.toUpperCase())
//! Does location actually point to document.body?
var waitForElement = (selector, timeout = 1000, location = document.body, notEl) =>
    new Promise(resolve => {
        const res = v => {
            observer.disconnect()
            resolve(v)
        }
        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector)
            if (el && (!notEl || el !== notEl)) return res(el)
        })
        observer.observe(location, {
            childList: true,
            subtree: true,
        })
        if (timeout) setTimeout(() => res(null), timeout)
    })
var sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// shared/api.tsx
var { URI: URI6 } = Spicetify
var fetchGQLArtistRelated = async uri =>
    (
        await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistRelated, {
            uri,
            locale: Spicetify.Locale.getLocale(),
        })
    ).data.artistUnion.relatedContent.relatedArtists.items
var fetchWebArtistsSpot = chunckify(50)(
    async ids => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists,
)
var fetchWebPlaylistsSpot = chunckify(1)(async ([id]) => [
    await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`),
])
var fetchWebAlbumsSpot = chunckify(50)(
    async ids => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums,
)
var fetchWebTracksSpot = chunckify(50)(
    async ids => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks,
)
var searchWebItemSpot = async (q, type) =>
    Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=${type.join(",")}`)
var fetchWebSoundOfSpotifyPlaylist = async genre => {
    const name = `The Sound Of ${genre}`
    const re = new RegExp(`^${escapeRegex(name)}\$`, "i")
    const res = await searchWebItemSpot(name, ["playlist"])
    const item = res.playlists.items[0]
    return item?.owner.id === "thesoundsofspotify" && re.test(item.name) ? item.uri : null
}
var fetchTrackLFMAPI = async (LFMApiKey, artist, trackName, lastFmUsername = "") => {
    const url = new URL("https://ws.audioscrobbler.com/2.0/")
    url.searchParams.append("method", "track.getInfo")
    url.searchParams.append("api_key", LFMApiKey)
    url.searchParams.append("artist", artist)
    url.searchParams.append("track", trackName)
    url.searchParams.append("format", "json")
    url.searchParams.append("username", lastFmUsername)
    return await fetch(url).then(res => res.json())
}
var fetchTrackLFMAPIMemoized = memoize2(fetchTrackLFMAPI)

// node_modules/fp-ts-std/dist/esm/ReadonlyArray.js
var none3 = flow(not, p => every(p))
var join = x => invoke("join")([x])
var sum = concatAll4(MonoidSum)
var product = concatAll4(MonoidProduct)
var median = flow(sort(Ord2), xs => {
    const i = xs.length / 2
    return i % 1 === 0 ? (xs[i - 1] + xs[i]) / 2 : xs[Math.floor(i)]
})
var moveFrom = from => to => xs =>
    from >= xs.length || to >= xs.length
        ? none2
        : from === to
        ? some3(xs)
        : pipe(
              xs,
              lookup(from),
              chain2(x => pipe(deleteAt(from)(xs), chain2(insertAt(to, x)))),
          )
var moveTo = flip(moveFrom)
var dropRightWhile = f => flow(reverse2, dropLeftWhile(f), reverse2)
var takeRightWhile = f => flow(reverse2, takeLeftWhile(f), reverse2)
var minimum = flow(min2, concatAll3)
var maximum = flow(max2, concatAll3)
var fromIterable = Array.from

// node_modules/fp-ts-std/dist/esm/String.js
var prepend4 = prepended => rest => prepended + rest
var append5 = flip(prepend4)
var takeLeft3 = n => slice(0, max(Ord2)(0, n))
var takeRight3 = n => x => slice(max(Ord2)(0, x.length - Math.floor(n)), Infinity)(x)
var under = f => flow(split(""), f, join(""))
var reverse5 = under(reverse2)
var lines = split(/\r\n|\r|\n/)
var unlines = join("\n")
var test = r => x => {
    const lastIndex = r.lastIndex
    const res = r.test(x)
    r.lastIndex = lastIndex
    return res
}
var dropLeft3 = n => invoke("substring")([n])
var dropRight2 = n => x => pipe(x, invoke("substring")([0, x.length - Math.floor(n)]))
var dropRightWhile2 = flow(dropRightWhile, under)
var head6 = flow(fromPredicate2(not(isEmpty3)), map2(takeLeft3(1)))
var tail5 = flow(fromPredicate2(not(isEmpty3)), map2(dropLeft3(1)))
var last5 = flow(fromPredicate2(not(isEmpty3)), map2(takeRight3(1)))
var init4 = flow(fromPredicate2(not(isEmpty3)), map2(dropRight2(1)))
var takeLeftWhile3 = flow(f => takeLeftWhile(f), under)
var takeRightWhile2 = flow(takeRightWhile, under)
var isAlpha = test(/^\p{Alpha}+$/u)
var isAlphaNum = test(/^(\p{Alpha}|\p{Number})+$/u)
var isLower = test(/^\p{Lower}+$/u)
var isUpper = test(/^\p{Upper}+$/u)
var isSpace = test(/^\s+$/)
var words = split(/\s/)
var unwords = join(" ")

// extensions/show-the-genres/artistPage.tsx
var { URI: URI7 } = Spicetify
var updateArtistPage = async ({ pathname }) => {
    const uri = URI7.fromString(pathname)
    if (!URI7.isArtist(uri)) return
    const genreContainer = document.createElement("div")
    genreContainer.className = "main-entityHeader-detailsText genre-container"
    genreContainer.innerHTML = await pipe(
        await getArtistsGenresOrRelated([`${uri}`]),
        exports_Array.takeLeft(5),
        exports_Array.map(async genre => {
            const uri2 = await fetchWebSoundOfSpotifyPlaylist(genre)
            return `<a class="main-entityHeader-genreLink" ${
                uri2 === null
                    ? `href="#" data-value="${genre}" onclick="searchPlaylist(this.getAttribute('data-value'))`
                    : `href="${uri2}"`
            } style="color: var(--spice-subtext); font-size: 1rem">${titleCase(genre)}</a>`
        }),
        ps => Promise.all(ps),
        pMchain(exports_Array.intercalate(exports_string.Monoid)(`<span>, </span>`)),
        pMchain(prepend4(`<span>Artist Genres : </span>`)),
    )
    document.querySelector(".genre-container")?.remove()
    const entityHeaderText = await waitForElement("div.main-entityHeader-headerText")
    entityHeaderText?.insertBefore(genreContainer, await waitForElement("span.main-entityHeader-detailsText"))
}
var getArtistsGenresOrRelated = async (artistsUris, src = null) => {
    const getArtistsGenres = flow(
        exports_Array.map(uri => URI7.fromString(uri).id),
        fetchWebArtistsSpot,
        pMchain(exports_Array.flatMap(artist => artist.genres)),
        pMchain(exports_Array.uniq(exports_string.Eq)),
    )
    const allGenres = await getArtistsGenres(artistsUris)
    return allGenres.length
        ? allGenres
        : await pipe(
              artistsUris[0],
              fetchGQLArtistRelated,
              pMchain(exports_Array.map(a => a.uri)),
              pMchain(exports_Array.chunksOf(5)),
              pMchain(
                  exports_Array.reduce(Promise.resolve([]), async (acc, arr5uris) =>
                      (await acc).length ? await acc : await getArtistsGenres(arr5uris),
                  ),
              ),
          )
}

// extensions/show-the-genres/popup.tsx
var import_react = __toESM(require_react(), 1)
var genrePopup = () => {
    Spicetify.PopupModal.display({
        title: `Genres of: ${Spicetify.Player.data.track?.metadata?.title}`,
        content: import_react.default.createElement(
            "div",
            {
                className: "genres-popup",
            },
            spotifyGenres.length === 0
                ? import_react.default.createElement(import_react.default.Fragment, null)
                : import_react.default.createElement(SpotifyGenresContainer, null),
            lastFmTags.length === 0
                ? import_react.default.createElement(import_react.default.Fragment, null)
                : import_react.default.createElement(LastFmTagsContainer, null),
        ),
        isLarge: true,
    })
}
globalThis.genrePopup = genrePopup
var ButtonElement = ({ name = "", color = "", onClick = exports_Task.of(undefined) }) =>
    import_react.default.createElement(
        "button",
        {
            className: `login-button${color}`,
            onClick,
        },
        name,
    )
var SpotifyGenresContainer = () => {
    let [value, setValue] = import_react.useState(spotifyGenres)
    Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(spotifyGenres), 500))
    const openSoundOfPlaylistOrSearchResults = query => async () => {
        let uri = await fetchWebSoundOfSpotifyPlaylist(query)
        if (uri === null) Spicetify.Platform.History.push(`/search/${query}/playlists`)
        else Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`)
        Spicetify.PopupModal.hide()
    }
    return import_react.default.createElement(
        "div",
        {
            className: "spaced-down",
        },
        import_react.default.createElement(
            "h1",
            {
                className: "title",
            },
            "Spotify Genres",
        ),
        value.map(n =>
            import_react.default.createElement(ButtonElement, {
                name: titleCase(n),
                onClick: openSoundOfPlaylistOrSearchResults(n),
            }),
        ),
    )
}
var LastFmTagsContainer = () => {
    if (lastFmTags.length == 0) return import_react.default.createElement(import_react.default.Fragment, null)
    let [value, setValue] = import_react.useState(lastFmTags)
    Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(lastFmTags), 100))
    const openPlaylistSearchResults = query => async () => {
        Spicetify.Platform.History.push(`/search/${query}/playlists`)
        Spicetify.PopupModal.hide()
    }
    return import_react.default.createElement(
        "div",
        {
            className: "spaced-down",
        },
        import_react.default.createElement(
            "h1",
            {
                className: "title",
            },
            "Last FM Tags",
        ),
        value.map(n =>
            import_react.default.createElement(ButtonElement, {
                name: titleCase(n),
                onClick: openPlaylistSearchResults(n),
            }),
        ),
    )
}

// shared/settings.tsx
var import_react2 = __toESM(require_react(), 1)
var import_react_dom = __toESM(require_react_dom(), 1)
class SettingsSection {
    name
    sectionId
    sectionFields
    stopHistoryListener
    setRerender = null
    constructor(name, sectionId, sectionFields = {}) {
        this.name = name
        this.sectionId = sectionId
        this.sectionFields = sectionFields
    }
    static waitForReact = async () => {
        while (!(Spicetify.React && Spicetify.ReactDOM)) sleep(100)
        return this
    }
    pushSettings = async () => {
        while (!Spicetify?.Platform?.History?.listen) await sleep(100)
        if (this.stopHistoryListener) this.stopHistoryListener()
        this.stopHistoryListener = Spicetify.Platform.History.listen(({ pathname = "" }) => {
            if (pathname === "/preferences") this.render()
        })
        if (Spicetify.Platform.History.location.pathname === "/preferences") await this.render()
    }
    toObject = () =>
        new Proxy(
            {},
            {
                get: (target, prop) => SettingsSection.getFieldValue(this.getId(prop.toString())),
            },
        )
    rerender = () => {
        if (this.setRerender) this.setRerender(Math.random())
    }
    render = async () => {
        while (!document.getElementById("desktop.settings.selectLanguage")) {
            if (Spicetify.Platform.History.location.pathname !== "/preferences") return
            await sleep(100)
        }
        const allSettingsContainer = document.querySelector(".x-settings-container")
        let pluginSettingsContainer = Array.from(allSettingsContainer.children).find(({ id }) => id === this.sectionId)
        if (!pluginSettingsContainer) {
            pluginSettingsContainer = document.createElement("div")
            pluginSettingsContainer.id = this.sectionId
            pluginSettingsContainer.className = "settingsContainer"
            allSettingsContainer.appendChild(pluginSettingsContainer)
        }
        import_react_dom.default.render(
            import_react2.default.createElement(this.FieldsContainer, null),
            pluginSettingsContainer,
        )
    }
    addButton = (nameId, description, text, onClick = constVoid, events = {}) => {
        const id = this.getId(nameId)
        events.onClick = onClick
        this.sectionFields[nameId] = {
            id,
            type: FieldType.BUTTON,
            description,
            text,
            events,
        }
        return this
    }
    addToggle = (nameId, description, defaultValue = exports_Task.of(true), onChange = constVoid, events = {}) => {
        const id = this.getId(nameId)
        SettingsSection.setDefaultFieldValue(id, defaultValue)
        events.onChange = onChange
        this.sectionFields[nameId] = {
            id,
            type: FieldType.TOGGLE,
            description,
            events,
        }
        return this
    }
    addInput = (nameId, description, defaultValue, onChange = constVoid, inputType = "text", events = {}) => {
        const id = this.getId(nameId)
        SettingsSection.setDefaultFieldValue(id, defaultValue)
        events.onChange = onChange
        this.sectionFields[nameId] = {
            id,
            type: FieldType.INPUT,
            description,
            inputType,
            events,
        }
        return this
    }
    addDropDown = (
        nameId,
        description,
        options,
        defaultValue = exports_Task.of(0),
        onChange = constVoid,
        events = {},
    ) => {
        const id = this.getId(nameId)
        SettingsSection.setDefaultFieldValue(id, defaultValue)
        events.onChange = onChange
        this.sectionFields[nameId] = {
            id,
            type: FieldType.DROPDOWN,
            description,
            options,
            events,
        }
        return this
    }
    addHidden = (nameId, defaultValue) => {
        const id = this.getId(nameId)
        SettingsSection.setDefaultFieldValue(id, defaultValue)
        this.sectionFields[nameId] = {
            id,
            type: FieldType.HIDDEN,
            description: "",
        }
        return this
    }
    getId = nameId => `extensions:${this.sectionId}:${nameId}`
    useStateFor = id => {
        const [value, setValueState] = import_react2.useState(SettingsSection.getFieldValue(id))
        return [
            value,
            newValue => {
                if (newValue !== undefined) {
                    setValueState(newValue)
                    SettingsSection.setFieldValue(id, newValue)
                }
            },
        ]
    }
    static getFieldValue = id => {
        return JSON.parse(Spicetify.LocalStorage.get(id) ?? "null")
    }
    static setFieldValue = (id, newValue) => {
        Spicetify.LocalStorage.set(id, JSON.stringify(newValue))
    }
    static setDefaultFieldValue = async (id, defaultValue) => {
        if (SettingsSection.getFieldValue(id) === null) SettingsSection.setFieldValue(id, await defaultValue())
    }
    FieldsContainer = () => {
        const [rerender, setRerender] = import_react2.useState(0)
        this.setRerender = setRerender
        return import_react2.default.createElement(
            "div",
            {
                className: "x-settings-section",
                key: rerender,
            },
            import_react2.default.createElement(
                "h2",
                {
                    className: "Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type",
                },
                this.name,
            ),
            Object.entries(this.sectionFields).map(([nameId, field]) => {
                return import_react2.default.createElement(this.Field, {
                    field,
                })
            }),
        )
    }
    Field = ({ field }) => {
        const isType = is("type")
        return import_react2.default.createElement(
            "div",
            {
                className: "x-settings-row",
            },
            import_react2.default.createElement(this.SettingDescription, {
                id: field.id,
                description: field.description,
            }),
            import_react2.default.createElement(
                "div",
                {
                    className: "x-settings-secondColumn",
                },
                guard4([
                    [isType(FieldType.INPUT), this.SettingInputField],
                    [isType(FieldType.BUTTON), this.SettingButtonField],
                    [isType(FieldType.TOGGLE), this.SettingToggleField],
                    [isType(FieldType.DROPDOWN), this.SettingDropdownField],
                ])(this.SettingHidden)(field),
            ),
        )
    }
    SettingDescription = ({ id, description }) =>
        import_react2.default.createElement(
            "div",
            {
                className: "x-settings-firstColumn",
            },
            import_react2.default.createElement(
                "label",
                {
                    className: "Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type",
                    htmlFor: id,
                },
                description,
            ),
        )
    SettingButtonField = field =>
        import_react2.default.createElement(
            "span",
            {
                className: "",
            },
            import_react2.default.createElement(
                "button",
                {
                    id: field.id,
                    className:
                        "Button-sc-y0gtbx-0 Button-sm-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",
                    ...field.events,
                    type: field.type,
                },
                field.text,
            ),
        )
    SettingToggleField = field => {
        const [value, setValue] = this.useStateFor(field.id)
        return import_react2.default.createElement(
            "label",
            {
                className: "x-settings-secondColumn x-toggle-wrapper",
            },
            import_react2.default.createElement("input", {
                id: field.id,
                className: "x-toggle-input",
                type: "checkbox",
                checked: SettingsSection.getFieldValue(field.id),
                ...field.events,
                onChange: e => {
                    setValue(e.currentTarget.checked)
                    field.events.onChange?.(e)
                },
            }),
            import_react2.default.createElement(
                "span",
                {
                    className: "x-toggle-indicatorWrapper",
                },
                import_react2.default.createElement("span", {
                    className: "x-toggle-indicator",
                }),
            ),
        )
    }
    SettingInputField = field => {
        const [value, setValue] = this.useStateFor(field.id)
        return import_react2.default.createElement("input", {
            className: "x-settings-input",
            id: field.id,
            dir: "ltr",
            value: SettingsSection.getFieldValue(field.id),
            type: field.inputType,
            ...field.events,
            onChange: e => {
                setValue(e.currentTarget.value)
                field.events.onChange?.(e)
            },
        })
    }
    SettingDropdownField = field => {
        const [value, setValue] = this.useStateFor(field.id)
        return import_react2.default.createElement(
            "select",
            {
                className: "main-dropDown-dropDown",
                id: field.id,
                ...field.events,
                onChange: e => {
                    setValue(e.currentTarget.selectedIndex)
                    field.events.onChange?.(e)
                },
            },
            field.options.map((option, i) =>
                import_react2.default.createElement(
                    "option",
                    {
                        selected: i === SettingsSection.getFieldValue(field.id),
                        value: i + 1,
                    },
                    option,
                ),
            ),
        )
    }
    SettingHidden = () => import_react2.default.createElement(import_react2.default.Fragment, null)
}
var FieldType
;(function (FieldType2) {
    FieldType2["HIDDEN"] = "hidden"
    FieldType2["INPUT"] = "input"
    FieldType2["DROPDOWN"] = "dropdown"
    FieldType2["BUTTON"] = "button"
    FieldType2["TOGGLE"] = "toggle"
})(FieldType || (FieldType = {}))

// extensions/show-the-genres/settings.tsx
var settings2 = new SettingsSection("Show The Genres", "show-the-genres").addInput(
    "LFMApiKey",
    "Last.fm API Key",
    exports_Task.of("44654ea047786d90338c17331a5f5d95"),
)
settings2.pushSettings()
var CONFIG = settings2.toObject()

// extensions/show-the-genres/app.tsx
var searchPlaylist = query => Spicetify.Platform.History.push(`/search/${query}/playlists`)
globalThis.searchPlaylist = searchPlaylist
var spotifyGenres = new Array()
var lastFmTags = new Array()
var updateGenreContainer = async genres => {
    genreContainer.innerHTML = await pipe(
        genres,
        exports_Array.map(async genre => {
            const uri = (await fetchWebSoundOfSpotifyPlaylist(genre)) ?? "#"
            return `<a href="${uri}" style="color: var(--spice-subtext); font-size: 12px">${titleCase(genre)}</a>`
        }),
        ps => Promise.all(ps),
        pMchain(exports_Array.intercalate(exports_string.Monoid)(`<span>, </span>`)),
    )
    return genreContainer
}
var updateGenresUI = async genres => {
    const trackInfoContainer = await waitForElement("div.main-trackInfo-container")
    const { uri, metadata } = Spicetify.Player.data.track
    if (metadata && !metadata.is_local && Spicetify.URI.isTrack(uri) && genres.length) {
        trackInfoContainer?.appendChild(await updateGenreContainer(genres))
        lastFmTags = pipe(
            await fetchTrackLFMAPI(CONFIG.LFMApiKey, metadata.artist_name, metadata.title),
            ({ track }) => track.toptags.tag,
            exports_Array.map(({ name }) => name),
        )
    } else trackInfoContainer?.removeChild(genreContainer)
}
var getArtistUrisFromCurrentTrack = () => {
    let metadata = Spicetify.Player.data?.track?.metadata ?? {}
    return [...Array(10).keys()].map(k => metadata["artist_uri" + (k ? `:${k}` : "")]).filter(Boolean)
}
var updateGenres = async () => {
    const artistUris = getArtistUrisFromCurrentTrack()
    spotifyGenres = await getArtistsGenresOrRelated(artistUris)
    await updateGenresUI(spotifyGenres.slice(0, 5))
}
var genreContainer = document.createElement("div")
genreContainer.className = "main-trackInfo-genres ellipsis-one-line main-type-finale"
genreContainer.style.gridArea = "genres"
genreContainer.addEventListener("contextmenu", genrePopup)
Spicetify.Player.addEventListener("songchange", updateGenres)
updateGenres()
Spicetify.Platform.History.listen(updateArtistPage)
updateArtistPage(Spicetify.Platform.History.location)
export { spotifyGenres, lastFmTags }

//# debugId=09117A419FA1D33664756e2164756e21
