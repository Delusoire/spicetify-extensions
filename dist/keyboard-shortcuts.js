var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/fp-ts/es6/function.js
function identity(a) {
  return a;
}
function constant(a) {
  return function() {
    return a;
  };
}
function flip(f) {
  return function() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length > 1) {
      return f(args[1], args[0]);
    }
    return function(a) {
      return f(a)(args[0]);
    };
  };
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return ab;
    case 2:
      return function() {
        return bc(ab.apply(this, arguments));
      };
    case 3:
      return function() {
        return cd(bc(ab.apply(this, arguments)));
      };
    case 4:
      return function() {
        return de(cd(bc(ab.apply(this, arguments))));
      };
    case 5:
      return function() {
        return ef(de(cd(bc(ab.apply(this, arguments)))));
      };
    case 6:
      return function() {
        return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
      };
    case 7:
      return function() {
        return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
      };
    case 8:
      return function() {
        return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
      };
    case 9:
      return function() {
        return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
      };
  }
  return;
}
function tupled(f) {
  return function(a) {
    return f.apply(undefined, a);
  };
}
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;
    case 2:
      return ab(a);
    case 3:
      return bc(ab(a));
    case 4:
      return cd(bc(ab(a)));
    case 5:
      return de(cd(bc(ab(a))));
    case 6:
      return ef(de(cd(bc(ab(a)))));
    case 7:
      return fg(ef(de(cd(bc(ab(a))))));
    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));
    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
    default: {
      var ret = arguments[0];
      for (var i = 1;i < arguments.length; i++) {
        ret = arguments[i](ret);
      }
      return ret;
    }
  }
}
var __spreadArray, constNull, constUndefined, dual;
var init_function = __esm(() => {
  __spreadArray = function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  constNull = constant(null);
  constUndefined = constant(undefined);
  dual = function(arity, body) {
    var isDataFirst = typeof arity === "number" ? function(args) {
      return args.length >= arity;
    } : arity;
    return function() {
      var args = Array.from(arguments);
      if (isDataFirst(arguments)) {
        return body.apply(this, args);
      }
      return function(self) {
        return body.apply(undefined, __spreadArray([self], args, false));
      };
    };
  };
});

// node_modules/fp-ts/es6/internal.js
var __spreadArray2, isNone, isSome, none, some, isLeft, isNonEmpty, head, tail, emptyReadonlyArray, emptyRecord, has, fromReadonlyNonEmptyArray;
var init_internal = __esm(() => {
  __spreadArray2 = function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  isNone = function(fa) {
    return fa._tag === "None";
  };
  isSome = function(fa) {
    return fa._tag === "Some";
  };
  none = { _tag: "None" };
  some = function(a) {
    return { _tag: "Some", value: a };
  };
  isLeft = function(ma) {
    return ma._tag === "Left";
  };
  isNonEmpty = function(as) {
    return as.length > 0;
  };
  head = function(as) {
    return as[0];
  };
  tail = function(as) {
    return as.slice(1);
  };
  emptyReadonlyArray = [];
  emptyRecord = {};
  has = Object.prototype.hasOwnProperty;
  fromReadonlyNonEmptyArray = function(as) {
    return __spreadArray2([as[0]], as.slice(1), true);
  };
});

// node_modules/fp-ts/es6/Apply.js
function apFirst(A) {
  return function(second) {
    return function(first) {
      return A.ap(A.map(first, function(a) {
        return function() {
          return a;
        };
      }), second);
    };
  };
}
function apSecond(A) {
  return function(second) {
    return function(first) {
      return A.ap(A.map(first, function() {
        return function(b) {
          return b;
        };
      }), second);
    };
  };
}
function apS(F) {
  return function(name, fb) {
    return function(fa) {
      return F.ap(F.map(fa, function(a) {
        return function(b) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
        };
      }), fb);
    };
  };
}
function getApplySemigroup(F) {
  return function(S) {
    return {
      concat: function(first, second) {
        return F.ap(F.map(first, function(x) {
          return function(y) {
            return S.concat(x, y);
          };
        }), second);
      }
    };
  };
}
var init_Apply = __esm(() => {
});

// node_modules/fp-ts/es6/Functor.js
function flap(F) {
  return function(a) {
    return function(fab) {
      return F.map(fab, function(f) {
        return f(a);
      });
    };
  };
}
function bindTo(F) {
  return function(name) {
    return function(fa) {
      return F.map(fa, function(a) {
        var _a;
        return _a = {}, _a[name] = a, _a;
      });
    };
  };
}
function as(F) {
  return function(self, b) {
    return F.map(self, function() {
      return b;
    });
  };
}
function asUnit(F) {
  var asM = as(F);
  return function(self) {
    return asM(self, undefined);
  };
}
var let_;
var init_Functor = __esm(() => {
  let_ = function(F) {
    return function(name, f) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f(a), _a));
        });
      };
    };
  };
});

// node_modules/fp-ts/es6/Applicative.js
function getApplicativeMonoid(F) {
  var f = getApplySemigroup(F);
  return function(M) {
    return {
      concat: f(M).concat,
      empty: F.of(M.empty)
    };
  };
}
var init_Applicative = __esm(() => {
  init_Apply();
});

// node_modules/fp-ts/es6/Chain.js
function chainFirst(M) {
  var tapM = tap(M);
  return function(f) {
    return function(first) {
      return tapM(first, f);
    };
  };
}
function tap(M) {
  return function(first, f) {
    return M.chain(first, function(a) {
      return M.map(f(a), function() {
        return a;
      });
    });
  };
}
function bind(M) {
  return function(name, f) {
    return function(ma) {
      return M.chain(ma, function(a) {
        return M.map(f(a), function(b) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
        });
      });
    };
  };
}
var init_Chain = __esm(() => {
});

// node_modules/fp-ts/es6/FromEither.js
function fromEitherK(F) {
  return function(f) {
    return flow(f, F.fromEither);
  };
}
function chainEitherK(F, M) {
  var fromEitherKF = fromEitherK(F);
  return function(f) {
    return function(ma) {
      return M.chain(ma, fromEitherKF(f));
    };
  };
}
function tapEither(F, M) {
  var fromEither = fromEitherK(F);
  var tapM = tap(M);
  return function(self, f) {
    return tapM(self, fromEither(f));
  };
}
var init_FromEither = __esm(() => {
  init_Chain();
  init_function();
});

// node_modules/fp-ts/es6/Eq.js
var fromEquals, eqStrict, strictEqual;
var init_Eq = __esm(() => {
  fromEquals = function(equals) {
    return {
      equals: function(x, y) {
        return x === y || equals(x, y);
      }
    };
  };
  eqStrict = {
    equals: function(a, b) {
      return a === b;
    }
  };
  strictEqual = eqStrict.equals;
});

// node_modules/fp-ts/es6/Ord.js
var compare, equalsDefault, fromCompare, getSemigroup, getMonoid, min, max, clamp, strictOrd;
var init_Ord = __esm(() => {
  init_Eq();
  compare = function(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
  };
  equalsDefault = function(compare2) {
    return function(first, second) {
      return first === second || compare2(first, second) === 0;
    };
  };
  fromCompare = function(compare2) {
    return {
      equals: equalsDefault(compare2),
      compare: function(first, second) {
        return first === second ? 0 : compare2(first, second);
      }
    };
  };
  getSemigroup = function() {
    return {
      concat: function(first, second) {
        return fromCompare(function(a, b) {
          var ox = first.compare(a, b);
          return ox !== 0 ? ox : second.compare(a, b);
        });
      }
    };
  };
  getMonoid = function() {
    return {
      concat: getSemigroup().concat,
      empty: fromCompare(function() {
        return 0;
      })
    };
  };
  min = function(O) {
    return function(first, second) {
      return first === second || O.compare(first, second) < 1 ? first : second;
    };
  };
  max = function(O) {
    return function(first, second) {
      return first === second || O.compare(first, second) > -1 ? first : second;
    };
  };
  clamp = function(O) {
    var minO = min(O);
    var maxO = max(O);
    return function(low, hi) {
      return function(a) {
        return maxO(minO(a, hi), low);
      };
    };
  };
  strictOrd = {
    equals: eqStrict.equals,
    compare
  };
});

// node_modules/fp-ts/es6/Magma.js
var concatAll;
var init_Magma = __esm(() => {
  concatAll = function(M) {
    return function(startWith) {
      return function(as2) {
        return as2.reduce(function(a, acc) {
          return M.concat(a, acc);
        }, startWith);
      };
    };
  };
});

// node_modules/fp-ts/es6/Semigroup.js
var min2, max2, constant2, first, last, concatAll2, semigroupVoid, semigroupAll, semigroupAny, semigroupString, semigroupSum, semigroupProduct;
var init_Semigroup = __esm(() => {
  init_function();
  init_Magma();
  init_Ord();
  min2 = function(O) {
    return {
      concat: min(O)
    };
  };
  max2 = function(O) {
    return {
      concat: max(O)
    };
  };
  constant2 = function(a) {
    return {
      concat: function() {
        return a;
      }
    };
  };
  first = function() {
    return { concat: identity };
  };
  last = function() {
    return { concat: function(_, y) {
      return y;
    } };
  };
  concatAll2 = concatAll;
  semigroupVoid = constant2(undefined);
  semigroupAll = {
    concat: function(x, y) {
      return x && y;
    }
  };
  semigroupAny = {
    concat: function(x, y) {
      return x || y;
    }
  };
  semigroupString = {
    concat: function(x, y) {
      return x + y;
    }
  };
  semigroupSum = {
    concat: function(x, y) {
      return x + y;
    }
  };
  semigroupProduct = {
    concat: function(x, y) {
      return x * y;
    }
  };
});

// node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js
var __spreadArray3, isNonEmpty2, isOutOfBound, prependW, prepend, prependAll, intersperse, extract, head2, tail2, last2, concatAll3, intercalate;
var init_ReadonlyNonEmptyArray = __esm(() => {
  init_function();
  init_internal();
  __spreadArray3 = function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  isNonEmpty2 = isNonEmpty;
  isOutOfBound = function(i, as2) {
    return i < 0 || i >= as2.length;
  };
  prependW = function(head2) {
    return function(tail2) {
      return __spreadArray3([head2], tail2, true);
    };
  };
  prepend = prependW;
  prependAll = function(middle) {
    return function(as2) {
      var out = [middle, as2[0]];
      for (var i = 1;i < as2.length; i++) {
        out.push(middle, as2[i]);
      }
      return out;
    };
  };
  intersperse = function(middle) {
    return function(as2) {
      var rest = tail2(as2);
      return isNonEmpty2(rest) ? pipe(rest, prependAll(middle), prepend(head2(as2))) : as2;
    };
  };
  extract = head;
  head2 = extract;
  tail2 = tail;
  last2 = function(as2) {
    return as2[as2.length - 1];
  };
  concatAll3 = function(S) {
    return function(as2) {
      return as2.reduce(S.concat);
    };
  };
  intercalate = function(S) {
    var concatAllS = concatAll3(S);
    return function(middle) {
      return flow(intersperse(middle), concatAllS);
    };
  };
});

// node_modules/fp-ts/es6/NonEmptyArray.js
function concat(x, y) {
  return y ? x.concat(y) : function(y2) {
    return y2.concat(x);
  };
}
function cons(head3, tail3) {
  return tail3 === undefined ? prepend2(head3) : pipe(tail3, prepend2(head3));
}
var __spreadArray4, isNonEmpty3, isOutOfBound2, prependW2, prepend2, appendW, append, unsafeInsertAt, unsafeUpdateAt, uniq, sortBy, union, rotate, fromReadonlyNonEmptyArray2, makeBy, range, sort, copy, of, prependAll2, intersperse2, chop, splitAt, chunksOf, head3, tail3, last3, init, concatAll4, snoc;
var init_NonEmptyArray = __esm(() => {
  init_function();
  init_internal();
  init_Ord();
  init_ReadonlyNonEmptyArray();
  __spreadArray4 = function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  isNonEmpty3 = function(as2) {
    return as2.length > 0;
  };
  isOutOfBound2 = function(i, as2) {
    return i < 0 || i >= as2.length;
  };
  prependW2 = function(head3) {
    return function(tail3) {
      return __spreadArray4([head3], tail3, true);
    };
  };
  prepend2 = prependW2;
  appendW = function(end) {
    return function(init) {
      return __spreadArray4(__spreadArray4([], init, true), [end], false);
    };
  };
  append = appendW;
  unsafeInsertAt = function(i, a, as2) {
    if (isNonEmpty3(as2)) {
      var xs = fromReadonlyNonEmptyArray2(as2);
      xs.splice(i, 0, a);
      return xs;
    }
    return [a];
  };
  unsafeUpdateAt = function(i, a, as2) {
    var xs = fromReadonlyNonEmptyArray2(as2);
    xs[i] = a;
    return xs;
  };
  uniq = function(E) {
    return function(as2) {
      if (as2.length === 1) {
        return copy(as2);
      }
      var out = [head3(as2)];
      var rest = tail3(as2);
      var _loop_1 = function(a2) {
        if (out.every(function(o) {
          return !E.equals(o, a2);
        })) {
          out.push(a2);
        }
      };
      for (var _i = 0, rest_1 = rest;_i < rest_1.length; _i++) {
        var a = rest_1[_i];
        _loop_1(a);
      }
      return out;
    };
  };
  sortBy = function(ords) {
    if (isNonEmpty3(ords)) {
      var M = getMonoid();
      return sort(ords.reduce(M.concat, M.empty));
    }
    return copy;
  };
  union = function(E) {
    var uniqE = uniq(E);
    return function(second) {
      return function(first2) {
        return uniqE(pipe(first2, concat(second)));
      };
    };
  };
  rotate = function(n) {
    return function(as2) {
      var len = as2.length;
      var m = Math.round(n) % len;
      if (isOutOfBound2(Math.abs(m), as2) || m === 0) {
        return copy(as2);
      }
      if (m < 0) {
        var _a = splitAt(-m)(as2), f = _a[0], s = _a[1];
        return pipe(s, concat(f));
      } else {
        return rotate(m - len)(as2);
      }
    };
  };
  fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
  makeBy = function(f) {
    return function(n) {
      var j = Math.max(0, Math.floor(n));
      var out = [f(0)];
      for (var i = 1;i < j; i++) {
        out.push(f(i));
      }
      return out;
    };
  };
  range = function(start, end) {
    return start <= end ? makeBy(function(i) {
      return start + i;
    })(end - start + 1) : [start];
  };
  sort = function(O) {
    return function(as2) {
      return as2.slice().sort(O.compare);
    };
  };
  copy = fromReadonlyNonEmptyArray2;
  of = function(a) {
    return [a];
  };
  prependAll2 = function(middle) {
    return function(as2) {
      var out = [middle, as2[0]];
      for (var i = 1;i < as2.length; i++) {
        out.push(middle, as2[i]);
      }
      return out;
    };
  };
  intersperse2 = function(middle) {
    return function(as2) {
      var rest = tail3(as2);
      return isNonEmpty3(rest) ? pipe(rest, prependAll2(middle), prepend2(head3(as2))) : copy(as2);
    };
  };
  chop = function(f) {
    return function(as2) {
      var _a = f(as2), b = _a[0], rest = _a[1];
      var out = [b];
      var next = rest;
      while (isNonEmpty3(next)) {
        var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
        out.push(b_1);
        next = rest_2;
      }
      return out;
    };
  };
  splitAt = function(n) {
    return function(as2) {
      var m = Math.max(1, n);
      return m >= as2.length ? [copy(as2), []] : [pipe(as2.slice(1, m), prepend2(head3(as2))), as2.slice(m)];
    };
  };
  chunksOf = function(n) {
    return chop(splitAt(n));
  };
  head3 = head2;
  tail3 = function(as2) {
    return as2.slice(1);
  };
  last3 = last2;
  init = function(as2) {
    return as2.slice(0, -1);
  };
  concatAll4 = function(S) {
    return function(as2) {
      return as2.reduce(S.concat);
    };
  };
  snoc = function(init2, end) {
    return pipe(init2, append(end));
  };
});

// node_modules/fp-ts/es6/number.js
var exports_number = {};
__export(exports_number, {
  isNumber: () => {
    {
      return isNumber;
    }
  },
  Show: () => {
    {
      return Show;
    }
  },
  SemigroupSum: () => {
    {
      return SemigroupSum;
    }
  },
  SemigroupProduct: () => {
    {
      return SemigroupProduct;
    }
  },
  Ord: () => {
    {
      return Ord2;
    }
  },
  MonoidSum: () => {
    {
      return MonoidSum;
    }
  },
  MonoidProduct: () => {
    {
      return MonoidProduct;
    }
  },
  MagmaSub: () => {
    {
      return MagmaSub;
    }
  },
  Field: () => {
    {
      return Field;
    }
  },
  Eq: () => {
    {
      return Eq2;
    }
  },
  Bounded: () => {
    {
      return Bounded;
    }
  }
});
var isNumber, Eq2, Ord2, Bounded, Show, MagmaSub, SemigroupSum, SemigroupProduct, MonoidSum, MonoidProduct, Field;
var init_number = __esm(() => {
  isNumber = function(u) {
    return typeof u === "number";
  };
  Eq2 = {
    equals: function(first2, second) {
      return first2 === second;
    }
  };
  Ord2 = {
    equals: Eq2.equals,
    compare: function(first2, second) {
      return first2 < second ? -1 : first2 > second ? 1 : 0;
    }
  };
  Bounded = {
    equals: Eq2.equals,
    compare: Ord2.compare,
    top: Infinity,
    bottom: (-Infinity)
  };
  Show = {
    show: function(n) {
      return JSON.stringify(n);
    }
  };
  MagmaSub = {
    concat: function(first2, second) {
      return first2 - second;
    }
  };
  SemigroupSum = {
    concat: function(first2, second) {
      return first2 + second;
    }
  };
  SemigroupProduct = {
    concat: function(first2, second) {
      return first2 * second;
    }
  };
  MonoidSum = {
    concat: SemigroupSum.concat,
    empty: 0
  };
  MonoidProduct = {
    concat: SemigroupProduct.concat,
    empty: 1
  };
  Field = {
    add: SemigroupSum.concat,
    zero: 0,
    mul: SemigroupProduct.concat,
    one: 1,
    sub: MagmaSub.concat,
    degree: function(_) {
      return 1;
    },
    div: function(first2, second) {
      return first2 / second;
    },
    mod: function(first2, second) {
      return first2 % second;
    }
  };
});

// node_modules/fp-ts/es6/Separated.js
var separated;
var init_Separated = __esm(() => {
  separated = function(left, right) {
    return { left, right };
  };
});

// node_modules/fp-ts/es6/Witherable.js
function wiltDefault(T, C) {
  return function(F) {
    var traverseF = T.traverse(F);
    return function(wa, f) {
      return F.map(traverseF(wa, f), C.separate);
    };
  };
}
function witherDefault(T, C) {
  return function(F) {
    var traverseF = T.traverse(F);
    return function(wa, f) {
      return F.map(traverseF(wa, f), C.compact);
    };
  };
}
function filterE(W) {
  return function(F) {
    var witherF = W.wither(F);
    return function(predicate) {
      return function(ga) {
        return witherF(ga, function(a) {
          return F.map(predicate(a), function(b) {
            return b ? some(a) : none;
          });
        });
      };
    };
  };
}
var init_Witherable = __esm(() => {
  init_internal();
});

// node_modules/fp-ts/es6/Zero.js
function guard(F, P) {
  return function(b) {
    return b ? P.of(undefined) : F.zero();
  };
}
var init_Zero = __esm(() => {
});

// node_modules/fp-ts/es6/ReadonlyArray.js
function lookup(i, as2) {
  return as2 === undefined ? function(as3) {
    return lookup(i, as3);
  } : isOutOfBound3(i, as2) ? none : some(as2[i]);
}
function findFirst(predicate) {
  return function(as2) {
    for (var i = 0;i < as2.length; i++) {
      if (predicate(as2[i])) {
        return some(as2[i]);
      }
    }
    return none;
  };
}
function findLast(predicate) {
  return function(as2) {
    for (var i = as2.length - 1;i >= 0; i--) {
      if (predicate(as2[i])) {
        return some(as2[i]);
      }
    }
    return none;
  };
}
function elem(E) {
  return function(a, as2) {
    if (as2 === undefined) {
      var elemE_1 = elem(E);
      return function(as3) {
        return elemE_1(a, as3);
      };
    }
    var predicate = function(element) {
      return E.equals(element, a);
    };
    var i = 0;
    for (;i < as2.length; i++) {
      if (predicate(as2[i])) {
        return true;
      }
    }
    return false;
  };
}
function every(predicate) {
  return function(as2) {
    return as2.every(predicate);
  };
}
var __spreadArray5, isNonEmpty4, matchW, match, isOutOfBound3, head4, last4, findIndex, findFirstMap, findLastMap, findLastIndex, _chainRecDepthFirst, _chainRecBreadthFirst, foldMapWithIndex2, reduce2, foldMap2, reduceWithIndex2, reduceRight2, reduceRightWithIndex2, getShow2, getEq2, getOrd, chainRecDepthFirst, chainRecBreadthFirst, intercalate2;
var init_ReadonlyArray = __esm(() => {
  init_Eq();
  init_function();
  init_internal();
  init_number();
  init_Ord();
  init_ReadonlyNonEmptyArray();
  __spreadArray5 = function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  isNonEmpty4 = isNonEmpty2;
  matchW = function(onEmpty, onNonEmpty) {
    return function(as2) {
      return isNonEmpty4(as2) ? onNonEmpty(as2) : onEmpty();
    };
  };
  match = matchW;
  isOutOfBound3 = isOutOfBound;
  head4 = function(as2) {
    return isNonEmpty4(as2) ? some(head2(as2)) : none;
  };
  last4 = function(as2) {
    return isNonEmpty4(as2) ? some(last2(as2)) : none;
  };
  findIndex = function(predicate) {
    return function(as2) {
      for (var i = 0;i < as2.length; i++) {
        if (predicate(as2[i])) {
          return some(i);
        }
      }
      return none;
    };
  };
  findFirstMap = function(f) {
    return function(as2) {
      for (var i = 0;i < as2.length; i++) {
        var out = f(as2[i]);
        if (isSome(out)) {
          return out;
        }
      }
      return none;
    };
  };
  findLastMap = function(f) {
    return function(as2) {
      for (var i = as2.length - 1;i >= 0; i--) {
        var out = f(as2[i]);
        if (isSome(out)) {
          return out;
        }
      }
      return none;
    };
  };
  findLastIndex = function(predicate) {
    return function(as2) {
      for (var i = as2.length - 1;i >= 0; i--) {
        if (predicate(as2[i])) {
          return some(i);
        }
      }
      return none;
    };
  };
  _chainRecDepthFirst = function(a, f) {
    return pipe(a, chainRecDepthFirst(f));
  };
  _chainRecBreadthFirst = function(a, f) {
    return pipe(a, chainRecBreadthFirst(f));
  };
  foldMapWithIndex2 = function(M) {
    return function(f) {
      return function(fa) {
        return fa.reduce(function(b, a, i) {
          return M.concat(b, f(i, a));
        }, M.empty);
      };
    };
  };
  reduce2 = function(b, f) {
    return reduceWithIndex2(b, function(_, b2, a) {
      return f(b2, a);
    });
  };
  foldMap2 = function(M) {
    var foldMapWithIndexM = foldMapWithIndex2(M);
    return function(f) {
      return foldMapWithIndexM(function(_, a) {
        return f(a);
      });
    };
  };
  reduceWithIndex2 = function(b, f) {
    return function(fa) {
      var len = fa.length;
      var out = b;
      for (var i = 0;i < len; i++) {
        out = f(i, out, fa[i]);
      }
      return out;
    };
  };
  reduceRight2 = function(b, f) {
    return reduceRightWithIndex2(b, function(_, a, b2) {
      return f(a, b2);
    });
  };
  reduceRightWithIndex2 = function(b, f) {
    return function(fa) {
      return fa.reduceRight(function(b2, a, i) {
        return f(i, a, b2);
      }, b);
    };
  };
  getShow2 = function(S) {
    return {
      show: function(as2) {
        return "[".concat(as2.map(S.show).join(", "), "]");
      }
    };
  };
  getEq2 = function(E) {
    return fromEquals(function(xs, ys) {
      return xs.length === ys.length && xs.every(function(x, i) {
        return E.equals(x, ys[i]);
      });
    });
  };
  getOrd = function(O) {
    return fromCompare(function(a, b) {
      var aLen = a.length;
      var bLen = b.length;
      var len = Math.min(aLen, bLen);
      for (var i = 0;i < len; i++) {
        var ordering = O.compare(a[i], b[i]);
        if (ordering !== 0) {
          return ordering;
        }
      }
      return Ord2.compare(aLen, bLen);
    });
  };
  chainRecDepthFirst = function(f) {
    return function(a) {
      var todo = __spreadArray5([], f(a), true);
      var out = [];
      while (todo.length > 0) {
        var e = todo.shift();
        if (isLeft(e)) {
          todo.unshift.apply(todo, f(e.left));
        } else {
          out.push(e.right);
        }
      }
      return out;
    };
  };
  chainRecBreadthFirst = function(f) {
    return function(a) {
      var initial = f(a);
      var todo = [];
      var out = [];
      function go(e2) {
        if (isLeft(e2)) {
          f(e2.left).forEach(function(v) {
            return todo.push(v);
          });
        } else {
          out.push(e2.right);
        }
      }
      for (var _i = 0, initial_1 = initial;_i < initial_1.length; _i++) {
        var e = initial_1[_i];
        go(e);
      }
      while (todo.length > 0) {
        go(todo.shift());
      }
      return out;
    };
  };
  intercalate2 = function(M) {
    var intercalateM = intercalate(M);
    return function(middle) {
      return match(function() {
        return M.empty;
      }, intercalateM(middle));
    };
  };
});

// node_modules/fp-ts/es6/Array.js
var exports_Array = {};
__export(exports_Array, {
  zipWith: () => {
    {
      return zipWith;
    }
  },
  zip: () => {
    {
      return zip;
    }
  },
  zero: () => {
    {
      return zero;
    }
  },
  wither: () => {
    {
      return wither;
    }
  },
  wilt: () => {
    {
      return wilt;
    }
  },
  updateAt: () => {
    {
      return updateAt;
    }
  },
  unzip: () => {
    {
      return unzip;
    }
  },
  unsafeUpdateAt: () => {
    {
      return unsafeUpdateAt3;
    }
  },
  unsafeInsertAt: () => {
    {
      return unsafeInsertAt3;
    }
  },
  unsafeDeleteAt: () => {
    {
      return unsafeDeleteAt;
    }
  },
  uniq: () => {
    {
      return uniq3;
    }
  },
  union: () => {
    {
      return union3;
    }
  },
  unfold: () => {
    {
      return unfold;
    }
  },
  traverseWithIndex: () => {
    {
      return traverseWithIndex;
    }
  },
  traverse: () => {
    {
      return traverse;
    }
  },
  takeRight: () => {
    {
      return takeRight;
    }
  },
  takeLeftWhile: () => {
    {
      return takeLeftWhile;
    }
  },
  takeLeft: () => {
    {
      return takeLeft;
    }
  },
  tail: () => {
    {
      return tail4;
    }
  },
  splitAt: () => {
    {
      return splitAt3;
    }
  },
  spanLeft: () => {
    {
      return spanLeft;
    }
  },
  sortBy: () => {
    {
      return sortBy3;
    }
  },
  sort: () => {
    {
      return sort2;
    }
  },
  some: () => {
    {
      return some2;
    }
  },
  snoc: () => {
    {
      return snoc3;
    }
  },
  size: () => {
    {
      return size;
    }
  },
  sequence: () => {
    {
      return sequence;
    }
  },
  separate: () => {
    {
      return separate;
    }
  },
  scanRight: () => {
    {
      return scanRight;
    }
  },
  scanLeft: () => {
    {
      return scanLeft;
    }
  },
  rotate: () => {
    {
      return rotate3;
    }
  },
  rights: () => {
    {
      return rights;
    }
  },
  reverse: () => {
    {
      return reverse2;
    }
  },
  replicate: () => {
    {
      return replicate;
    }
  },
  reduceWithIndex: () => {
    {
      return reduceWithIndex3;
    }
  },
  reduceRightWithIndex: () => {
    {
      return reduceRightWithIndex3;
    }
  },
  reduceRight: () => {
    {
      return reduceRight3;
    }
  },
  reduce: () => {
    {
      return reduce3;
    }
  },
  range: () => {
    {
      return range3;
    }
  },
  prependW: () => {
    {
      return prependW3;
    }
  },
  prependToAll: () => {
    {
      return prependToAll;
    }
  },
  prependAll: () => {
    {
      return prependAll3;
    }
  },
  prepend: () => {
    {
      return prepend3;
    }
  },
  partitionWithIndex: () => {
    {
      return partitionWithIndex;
    }
  },
  partitionMapWithIndex: () => {
    {
      return partitionMapWithIndex;
    }
  },
  partitionMap: () => {
    {
      return partitionMap;
    }
  },
  partition: () => {
    {
      return partition;
    }
  },
  of: () => {
    {
      return of3;
    }
  },
  modifyAt: () => {
    {
      return modifyAt;
    }
  },
  matchW: () => {
    {
      return matchW2;
    }
  },
  matchRightW: () => {
    {
      return matchRightW;
    }
  },
  matchRight: () => {
    {
      return matchRight;
    }
  },
  matchLeftW: () => {
    {
      return matchLeftW;
    }
  },
  matchLeft: () => {
    {
      return matchLeft;
    }
  },
  match: () => {
    {
      return match2;
    }
  },
  mapWithIndex: () => {
    {
      return mapWithIndex;
    }
  },
  map: () => {
    {
      return map;
    }
  },
  makeBy: () => {
    {
      return makeBy3;
    }
  },
  lookup: () => {
    {
      return lookup2;
    }
  },
  let: () => {
    {
      return let_2;
    }
  },
  lefts: () => {
    {
      return lefts;
    }
  },
  last: () => {
    {
      return last5;
    }
  },
  isOutOfBound: () => {
    {
      return isOutOfBound4;
    }
  },
  isNonEmpty: () => {
    {
      return isNonEmpty5;
    }
  },
  isEmpty: () => {
    {
      return isEmpty;
    }
  },
  intersperse: () => {
    {
      return intersperse3;
    }
  },
  intersection: () => {
    {
      return intersection;
    }
  },
  intercalate: () => {
    {
      return intercalate3;
    }
  },
  insertAt: () => {
    {
      return insertAt;
    }
  },
  init: () => {
    {
      return init3;
    }
  },
  head: () => {
    {
      return head5;
    }
  },
  guard: () => {
    {
      return guard2;
    }
  },
  getUnionSemigroup: () => {
    {
      return getUnionSemigroup;
    }
  },
  getUnionMonoid: () => {
    {
      return getUnionMonoid;
    }
  },
  getShow: () => {
    {
      return getShow3;
    }
  },
  getSemigroup: () => {
    {
      return getSemigroup3;
    }
  },
  getOrd: () => {
    {
      return getOrd2;
    }
  },
  getMonoid: () => {
    {
      return getMonoid2;
    }
  },
  getIntersectionSemigroup: () => {
    {
      return getIntersectionSemigroup;
    }
  },
  getEq: () => {
    {
      return getEq3;
    }
  },
  getDifferenceMagma: () => {
    {
      return getDifferenceMagma;
    }
  },
  fromPredicate: () => {
    {
      return fromPredicate;
    }
  },
  fromOptionK: () => {
    {
      return fromOptionK;
    }
  },
  fromOption: () => {
    {
      return fromOption;
    }
  },
  fromEitherK: () => {
    {
      return fromEitherK2;
    }
  },
  fromEither: () => {
    {
      return fromEither;
    }
  },
  foldRight: () => {
    {
      return foldRight;
    }
  },
  foldMapWithIndex: () => {
    {
      return foldMapWithIndex3;
    }
  },
  foldMap: () => {
    {
      return foldMap3;
    }
  },
  foldLeft: () => {
    {
      return foldLeft;
    }
  },
  flatten: () => {
    {
      return flatten;
    }
  },
  flatMap: () => {
    {
      return flatMap;
    }
  },
  flap: () => {
    {
      return flap2;
    }
  },
  findLastMap: () => {
    {
      return findLastMap2;
    }
  },
  findLastIndex: () => {
    {
      return findLastIndex2;
    }
  },
  findLast: () => {
    {
      return findLast2;
    }
  },
  findIndex: () => {
    {
      return findIndex2;
    }
  },
  findFirstMap: () => {
    {
      return findFirstMap2;
    }
  },
  findFirst: () => {
    {
      return findFirst2;
    }
  },
  filterWithIndex: () => {
    {
      return filterWithIndex;
    }
  },
  filterMapWithIndex: () => {
    {
      return filterMapWithIndex;
    }
  },
  filterMap: () => {
    {
      return filterMap;
    }
  },
  filterE: () => {
    {
      return filterE2;
    }
  },
  filter: () => {
    {
      return filter;
    }
  },
  extend: () => {
    {
      return extend;
    }
  },
  exists: () => {
    {
      return exists;
    }
  },
  every: () => {
    {
      return every2;
    }
  },
  empty: () => {
    {
      return empty2;
    }
  },
  elem: () => {
    {
      return elem2;
    }
  },
  duplicate: () => {
    {
      return duplicate;
    }
  },
  dropRight: () => {
    {
      return dropRight;
    }
  },
  dropLeftWhile: () => {
    {
      return dropLeftWhile;
    }
  },
  dropLeft: () => {
    {
      return dropLeft;
    }
  },
  difference: () => {
    {
      return difference;
    }
  },
  deleteAt: () => {
    {
      return deleteAt;
    }
  },
  copy: () => {
    {
      return copy2;
    }
  },
  cons: () => {
    {
      return cons3;
    }
  },
  concatW: () => {
    {
      return concatW;
    }
  },
  concat: () => {
    {
      return concat2;
    }
  },
  comprehension: () => {
    {
      return comprehension;
    }
  },
  compact: () => {
    {
      return compact;
    }
  },
  chunksOf: () => {
    {
      return chunksOf3;
    }
  },
  chop: () => {
    {
      return chop3;
    }
  },
  chainWithIndex: () => {
    {
      return chainWithIndex;
    }
  },
  chainRecDepthFirst: () => {
    {
      return chainRecDepthFirst2;
    }
  },
  chainRecBreadthFirst: () => {
    {
      return chainRecBreadthFirst2;
    }
  },
  chainFirst: () => {
    {
      return chainFirst2;
    }
  },
  chain: () => {
    {
      return chain;
    }
  },
  bindTo: () => {
    {
      return bindTo2;
    }
  },
  bind: () => {
    {
      return bind2;
    }
  },
  array: () => {
    {
      return array;
    }
  },
  appendW: () => {
    {
      return appendW3;
    }
  },
  append: () => {
    {
      return append3;
    }
  },
  apSecond: () => {
    {
      return apSecond2;
    }
  },
  apS: () => {
    {
      return apS2;
    }
  },
  apFirst: () => {
    {
      return apFirst2;
    }
  },
  ap: () => {
    {
      return ap2;
    }
  },
  altW: () => {
    {
      return altW;
    }
  },
  alt: () => {
    {
      return alt;
    }
  },
  Zero: () => {
    {
      return Zero2;
    }
  },
  Witherable: () => {
    {
      return Witherable2;
    }
  },
  Unfoldable: () => {
    {
      return Unfoldable;
    }
  },
  URI: () => {
    {
      return URI;
    }
  },
  TraversableWithIndex: () => {
    {
      return TraversableWithIndex;
    }
  },
  Traversable: () => {
    {
      return Traversable;
    }
  },
  Pointed: () => {
    {
      return Pointed;
    }
  },
  Monad: () => {
    {
      return Monad;
    }
  },
  FunctorWithIndex: () => {
    {
      return FunctorWithIndex;
    }
  },
  Functor: () => {
    {
      return Functor2;
    }
  },
  FromEither: () => {
    {
      return FromEither2;
    }
  },
  FoldableWithIndex: () => {
    {
      return FoldableWithIndex;
    }
  },
  Foldable: () => {
    {
      return Foldable;
    }
  },
  FilterableWithIndex: () => {
    {
      return FilterableWithIndex;
    }
  },
  Filterable: () => {
    {
      return Filterable;
    }
  },
  Extend: () => {
    {
      return Extend;
    }
  },
  Do: () => {
    {
      return Do;
    }
  },
  Compactable: () => {
    {
      return Compactable;
    }
  },
  ChainRecDepthFirst: () => {
    {
      return ChainRecDepthFirst;
    }
  },
  ChainRecBreadthFirst: () => {
    {
      return ChainRecBreadthFirst;
    }
  },
  Chain: () => {
    {
      return Chain3;
    }
  },
  Apply: () => {
    {
      return Apply3;
    }
  },
  Applicative: () => {
    {
      return Applicative;
    }
  },
  Alternative: () => {
    {
      return Alternative;
    }
  },
  Alt: () => {
    {
      return Alt;
    }
  }
});
function fromPredicate(predicate) {
  return function(a) {
    return predicate(a) ? [a] : [];
  };
}
function takeLeftWhile(predicate) {
  return function(as2) {
    var out = [];
    for (var _i = 0, as_1 = as2;_i < as_1.length; _i++) {
      var a = as_1[_i];
      if (!predicate(a)) {
        break;
      }
      out.push(a);
    }
    return out;
  };
}
function spanLeft(predicate) {
  return function(as2) {
    var _a = splitAt3(spanLeftIndex(as2, predicate))(as2), init3 = _a[0], rest = _a[1];
    return { init: init3, rest };
  };
}
function dropLeftWhile(predicate) {
  return function(as2) {
    return as2.slice(spanLeftIndex(as2, predicate));
  };
}
function findFirst2(predicate) {
  return findFirst(predicate);
}
function findLast2(predicate) {
  return findLast(predicate);
}
function zip(as2, bs) {
  if (bs === undefined) {
    return function(bs2) {
      return zip(bs2, as2);
    };
  }
  return zipWith(as2, bs, function(a, b) {
    return [a, b];
  });
}
function comprehension(input, f, g) {
  if (g === undefined) {
    g = function() {
      return true;
    };
  }
  var go = function(scope, input2) {
    return isNonEmpty5(input2) ? flatMap(head3(input2), function(a) {
      return go(pipe(scope, append3(a)), tail3(input2));
    }) : g.apply(undefined, scope) ? [f.apply(undefined, scope)] : [];
  };
  return go([], input);
}
function union3(E) {
  var unionE = union(E);
  return function(first2, second) {
    if (second === undefined) {
      var unionE_1 = union3(E);
      return function(second2) {
        return unionE_1(second2, first2);
      };
    }
    return isNonEmpty5(first2) && isNonEmpty5(second) ? unionE(second)(first2) : isNonEmpty5(first2) ? copy2(first2) : copy2(second);
  };
}
function intersection(E) {
  var elemE = elem2(E);
  return function(xs, ys) {
    if (ys === undefined) {
      var intersectionE_1 = intersection(E);
      return function(ys2) {
        return intersectionE_1(ys2, xs);
      };
    }
    return xs.filter(function(a) {
      return elemE(a, ys);
    });
  };
}
function difference(E) {
  var elemE = elem2(E);
  return function(xs, ys) {
    if (ys === undefined) {
      var differenceE_1 = difference(E);
      return function(ys2) {
        return differenceE_1(ys2, xs);
      };
    }
    return xs.filter(function(a) {
      return !elemE(a, ys);
    });
  };
}
var isEmpty, isNonEmpty5, prepend3, prependW3, append3, appendW3, makeBy3, replicate, fromOption, fromEither, matchW2, match2, matchLeftW, matchLeft, foldLeft, matchRightW, matchRight, foldRight, chainWithIndex, scanLeft, scanRight, size, isOutOfBound4, lookup2, head5, last5, tail4, init3, takeLeft, takeRight, spanLeftIndex, dropLeft, dropRight, findIndex2, findFirstMap2, findLastMap2, findLastIndex2, copy2, insertAt, updateAt, deleteAt, modifyAt, reverse2, rights, lefts, sort2, zipWith, unzip, prependAll3, intersperse3, rotate3, elem2, uniq3, sortBy3, chop3, splitAt3, chunksOf3, fromOptionK, concatW, concat2, _map, _mapWithIndex, _ap, _filter, _filterMap, _partition, _partitionMap, _partitionWithIndex, _partitionMapWithIndex, _alt, _reduce, _foldMap, _reduceRight, _reduceWithIndex, _foldMapWithIndex, _reduceRightWithIndex, _filterMapWithIndex, _filterWithIndex, _extend, _traverse, _traverseWithIndex, _chainRecDepthFirst2, _chainRecBreadthFirst2, of3, zero, map, ap2, flatMap, flatten, mapWithIndex, filterMapWithIndex, filterMap, compact, separate, filter, partition, partitionWithIndex, partitionMap, partitionMapWithIndex, altW, alt, filterWithIndex, extend, duplicate, foldMap3, foldMapWithIndex3, reduce3, reduceWithIndex3, reduceRight3, reduceRightWithIndex3, traverse, sequence, traverseWithIndex, wither, wilt, unfold, URI, getShow3, getSemigroup3, getMonoid2, getEq3, getOrd2, getUnionSemigroup, getUnionMonoid, getIntersectionSemigroup, getDifferenceMagma, Functor2, flap2, Pointed, FunctorWithIndex, Apply3, apFirst2, apSecond2, Applicative, Chain3, chainFirst2, Monad, Unfoldable, Alt, Zero2, guard2, Alternative, Extend, Compactable, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, Traversable, TraversableWithIndex, _wither, _wilt, Witherable2, chainRecDepthFirst2, ChainRecDepthFirst, chainRecBreadthFirst2, ChainRecBreadthFirst, filterE2, FromEither2, fromEitherK2, unsafeInsertAt3, unsafeUpdateAt3, unsafeDeleteAt, every2, some2, exists, intercalate3, Do, bindTo2, let_2, bind2, apS2, chain, range3, empty2, cons3, snoc3, prependToAll, array;
var init_Array = __esm(() => {
  init_Apply();
  init_Chain();
  init_FromEither();
  init_function();
  init_Functor();
  init_internal();
  init_NonEmptyArray();
  init_ReadonlyArray();
  init_Separated();
  init_Witherable();
  init_Zero();
  isEmpty = function(as2) {
    return as2.length === 0;
  };
  isNonEmpty5 = isNonEmpty3;
  prepend3 = prepend2;
  prependW3 = prependW2;
  append3 = append;
  appendW3 = appendW;
  makeBy3 = function(n, f) {
    return n <= 0 ? [] : makeBy(f)(n);
  };
  replicate = function(n, a) {
    return makeBy3(n, function() {
      return a;
    });
  };
  fromOption = function(ma) {
    return isNone(ma) ? [] : [ma.value];
  };
  fromEither = function(e) {
    return isLeft(e) ? [] : [e.right];
  };
  matchW2 = function(onEmpty, onNonEmpty) {
    return function(as2) {
      return isNonEmpty5(as2) ? onNonEmpty(as2) : onEmpty();
    };
  };
  match2 = matchW2;
  matchLeftW = function(onEmpty, onNonEmpty) {
    return function(as2) {
      return isNonEmpty5(as2) ? onNonEmpty(head3(as2), tail3(as2)) : onEmpty();
    };
  };
  matchLeft = matchLeftW;
  foldLeft = matchLeft;
  matchRightW = function(onEmpty, onNonEmpty) {
    return function(as2) {
      return isNonEmpty5(as2) ? onNonEmpty(init(as2), last3(as2)) : onEmpty();
    };
  };
  matchRight = matchRightW;
  foldRight = matchRight;
  chainWithIndex = function(f) {
    return function(as2) {
      var out = [];
      for (var i = 0;i < as2.length; i++) {
        out.push.apply(out, f(i, as2[i]));
      }
      return out;
    };
  };
  scanLeft = function(b, f) {
    return function(as2) {
      var len = as2.length;
      var out = new Array(len + 1);
      out[0] = b;
      for (var i = 0;i < len; i++) {
        out[i + 1] = f(out[i], as2[i]);
      }
      return out;
    };
  };
  scanRight = function(b, f) {
    return function(as2) {
      var len = as2.length;
      var out = new Array(len + 1);
      out[len] = b;
      for (var i = len - 1;i >= 0; i--) {
        out[i] = f(as2[i], out[i + 1]);
      }
      return out;
    };
  };
  size = function(as2) {
    return as2.length;
  };
  isOutOfBound4 = isOutOfBound2;
  lookup2 = lookup;
  head5 = head4;
  last5 = last4;
  tail4 = function(as2) {
    return isNonEmpty5(as2) ? some(tail3(as2)) : none;
  };
  init3 = function(as2) {
    return isNonEmpty5(as2) ? some(init(as2)) : none;
  };
  takeLeft = function(n) {
    return function(as2) {
      return isOutOfBound4(n, as2) ? copy2(as2) : as2.slice(0, n);
    };
  };
  takeRight = function(n) {
    return function(as2) {
      return isOutOfBound4(n, as2) ? copy2(as2) : n === 0 ? [] : as2.slice(-n);
    };
  };
  spanLeftIndex = function(as2, predicate) {
    var l = as2.length;
    var i = 0;
    for (;i < l; i++) {
      if (!predicate(as2[i])) {
        break;
      }
    }
    return i;
  };
  dropLeft = function(n) {
    return function(as2) {
      return n <= 0 || isEmpty(as2) ? copy2(as2) : n >= as2.length ? [] : as2.slice(n, as2.length);
    };
  };
  dropRight = function(n) {
    return function(as2) {
      return n <= 0 || isEmpty(as2) ? copy2(as2) : n >= as2.length ? [] : as2.slice(0, as2.length - n);
    };
  };
  findIndex2 = findIndex;
  findFirstMap2 = findFirstMap;
  findLastMap2 = findLastMap;
  findLastIndex2 = findLastIndex;
  copy2 = function(as2) {
    return as2.slice();
  };
  insertAt = function(i, a) {
    return function(as2) {
      return i < 0 || i > as2.length ? none : some(unsafeInsertAt3(i, a, as2));
    };
  };
  updateAt = function(i, a) {
    return modifyAt(i, function() {
      return a;
    });
  };
  deleteAt = function(i) {
    return function(as2) {
      return isOutOfBound4(i, as2) ? none : some(unsafeDeleteAt(i, as2));
    };
  };
  modifyAt = function(i, f) {
    return function(as2) {
      return isOutOfBound4(i, as2) ? none : some(unsafeUpdateAt3(i, f(as2[i]), as2));
    };
  };
  reverse2 = function(as2) {
    return isEmpty(as2) ? [] : as2.slice().reverse();
  };
  rights = function(as2) {
    var r = [];
    for (var i = 0;i < as2.length; i++) {
      var a = as2[i];
      if (a._tag === "Right") {
        r.push(a.right);
      }
    }
    return r;
  };
  lefts = function(as2) {
    var r = [];
    for (var i = 0;i < as2.length; i++) {
      var a = as2[i];
      if (a._tag === "Left") {
        r.push(a.left);
      }
    }
    return r;
  };
  sort2 = function(O) {
    return function(as2) {
      return as2.length <= 1 ? copy2(as2) : as2.slice().sort(O.compare);
    };
  };
  zipWith = function(fa, fb, f) {
    var fc = [];
    var len = Math.min(fa.length, fb.length);
    for (var i = 0;i < len; i++) {
      fc[i] = f(fa[i], fb[i]);
    }
    return fc;
  };
  unzip = function(as2) {
    var fa = [];
    var fb = [];
    for (var i = 0;i < as2.length; i++) {
      fa[i] = as2[i][0];
      fb[i] = as2[i][1];
    }
    return [fa, fb];
  };
  prependAll3 = function(middle) {
    var f = prependAll2(middle);
    return function(as2) {
      return isNonEmpty5(as2) ? f(as2) : [];
    };
  };
  intersperse3 = function(middle) {
    var f = intersperse2(middle);
    return function(as2) {
      return isNonEmpty5(as2) ? f(as2) : copy2(as2);
    };
  };
  rotate3 = function(n) {
    var f = rotate(n);
    return function(as2) {
      return isNonEmpty5(as2) ? f(as2) : copy2(as2);
    };
  };
  elem2 = elem;
  uniq3 = function(E) {
    var f = uniq(E);
    return function(as2) {
      return isNonEmpty5(as2) ? f(as2) : copy2(as2);
    };
  };
  sortBy3 = function(ords) {
    var f = sortBy(ords);
    return function(as2) {
      return isNonEmpty5(as2) ? f(as2) : copy2(as2);
    };
  };
  chop3 = function(f) {
    var g = chop(f);
    return function(as2) {
      return isNonEmpty5(as2) ? g(as2) : [];
    };
  };
  splitAt3 = function(n) {
    return function(as2) {
      return n >= 1 && isNonEmpty5(as2) ? splitAt(n)(as2) : isEmpty(as2) ? [copy2(as2), []] : [[], copy2(as2)];
    };
  };
  chunksOf3 = function(n) {
    var f = chunksOf(n);
    return function(as2) {
      return isNonEmpty5(as2) ? f(as2) : [];
    };
  };
  fromOptionK = function(f) {
    return function() {
      var a = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return fromOption(f.apply(undefined, a));
    };
  };
  concatW = function(second) {
    return function(first2) {
      return isEmpty(first2) ? copy2(second) : isEmpty(second) ? copy2(first2) : first2.concat(second);
    };
  };
  concat2 = concatW;
  _map = function(fa, f) {
    return pipe(fa, map(f));
  };
  _mapWithIndex = function(fa, f) {
    return pipe(fa, mapWithIndex(f));
  };
  _ap = function(fab, fa) {
    return pipe(fab, ap2(fa));
  };
  _filter = function(fa, predicate) {
    return pipe(fa, filter(predicate));
  };
  _filterMap = function(fa, f) {
    return pipe(fa, filterMap(f));
  };
  _partition = function(fa, predicate) {
    return pipe(fa, partition(predicate));
  };
  _partitionMap = function(fa, f) {
    return pipe(fa, partitionMap(f));
  };
  _partitionWithIndex = function(fa, predicateWithIndex) {
    return pipe(fa, partitionWithIndex(predicateWithIndex));
  };
  _partitionMapWithIndex = function(fa, f) {
    return pipe(fa, partitionMapWithIndex(f));
  };
  _alt = function(fa, that) {
    return pipe(fa, alt(that));
  };
  _reduce = function(fa, b, f) {
    return pipe(fa, reduce3(b, f));
  };
  _foldMap = function(M) {
    var foldMapM = foldMap3(M);
    return function(fa, f) {
      return pipe(fa, foldMapM(f));
    };
  };
  _reduceRight = function(fa, b, f) {
    return pipe(fa, reduceRight3(b, f));
  };
  _reduceWithIndex = function(fa, b, f) {
    return pipe(fa, reduceWithIndex3(b, f));
  };
  _foldMapWithIndex = function(M) {
    var foldMapWithIndexM = foldMapWithIndex3(M);
    return function(fa, f) {
      return pipe(fa, foldMapWithIndexM(f));
    };
  };
  _reduceRightWithIndex = function(fa, b, f) {
    return pipe(fa, reduceRightWithIndex3(b, f));
  };
  _filterMapWithIndex = function(fa, f) {
    return pipe(fa, filterMapWithIndex(f));
  };
  _filterWithIndex = function(fa, predicateWithIndex) {
    return pipe(fa, filterWithIndex(predicateWithIndex));
  };
  _extend = function(fa, f) {
    return pipe(fa, extend(f));
  };
  _traverse = function(F) {
    var traverseF = traverse(F);
    return function(ta, f) {
      return pipe(ta, traverseF(f));
    };
  };
  _traverseWithIndex = function(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function(ta, f) {
      return pipe(ta, traverseWithIndexF(f));
    };
  };
  _chainRecDepthFirst2 = _chainRecDepthFirst;
  _chainRecBreadthFirst2 = _chainRecBreadthFirst;
  of3 = of;
  zero = function() {
    return [];
  };
  map = function(f) {
    return function(fa) {
      return fa.map(function(a) {
        return f(a);
      });
    };
  };
  ap2 = function(fa) {
    return flatMap(function(f) {
      return pipe(fa, map(f));
    });
  };
  flatMap = dual(2, function(ma, f) {
    return pipe(ma, chainWithIndex(function(i, a) {
      return f(a, i);
    }));
  });
  flatten = flatMap(identity);
  mapWithIndex = function(f) {
    return function(fa) {
      return fa.map(function(a, i) {
        return f(i, a);
      });
    };
  };
  filterMapWithIndex = function(f) {
    return function(fa) {
      var out = [];
      for (var i = 0;i < fa.length; i++) {
        var optionB = f(i, fa[i]);
        if (isSome(optionB)) {
          out.push(optionB.value);
        }
      }
      return out;
    };
  };
  filterMap = function(f) {
    return filterMapWithIndex(function(_, a) {
      return f(a);
    });
  };
  compact = filterMap(identity);
  separate = function(fa) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_1 = fa;_i < fa_1.length; _i++) {
      var e = fa_1[_i];
      if (e._tag === "Left") {
        left.push(e.left);
      } else {
        right.push(e.right);
      }
    }
    return separated(left, right);
  };
  filter = function(predicate) {
    return function(as2) {
      return as2.filter(predicate);
    };
  };
  partition = function(predicate) {
    return partitionWithIndex(function(_, a) {
      return predicate(a);
    });
  };
  partitionWithIndex = function(predicateWithIndex) {
    return function(as2) {
      var left = [];
      var right = [];
      for (var i = 0;i < as2.length; i++) {
        var b = as2[i];
        if (predicateWithIndex(i, b)) {
          right.push(b);
        } else {
          left.push(b);
        }
      }
      return separated(left, right);
    };
  };
  partitionMap = function(f) {
    return partitionMapWithIndex(function(_, a) {
      return f(a);
    });
  };
  partitionMapWithIndex = function(f) {
    return function(fa) {
      var left = [];
      var right = [];
      for (var i = 0;i < fa.length; i++) {
        var e = f(i, fa[i]);
        if (e._tag === "Left") {
          left.push(e.left);
        } else {
          right.push(e.right);
        }
      }
      return separated(left, right);
    };
  };
  altW = function(that) {
    return function(fa) {
      return fa.concat(that());
    };
  };
  alt = altW;
  filterWithIndex = function(predicateWithIndex) {
    return function(as2) {
      return as2.filter(function(b, i) {
        return predicateWithIndex(i, b);
      });
    };
  };
  extend = function(f) {
    return function(wa) {
      return wa.map(function(_, i) {
        return f(wa.slice(i));
      });
    };
  };
  duplicate = extend(identity);
  foldMap3 = foldMap2;
  foldMapWithIndex3 = foldMapWithIndex2;
  reduce3 = reduce2;
  reduceWithIndex3 = reduceWithIndex2;
  reduceRight3 = reduceRight2;
  reduceRightWithIndex3 = reduceRightWithIndex2;
  traverse = function(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function(f) {
      return traverseWithIndexF(function(_, a) {
        return f(a);
      });
    };
  };
  sequence = function(F) {
    return function(ta) {
      return _reduce(ta, F.of(zero()), function(fas, fa) {
        return F.ap(F.map(fas, function(as2) {
          return function(a) {
            return pipe(as2, append3(a));
          };
        }), fa);
      });
    };
  };
  traverseWithIndex = function(F) {
    return function(f) {
      return reduceWithIndex3(F.of(zero()), function(i, fbs, a) {
        return F.ap(F.map(fbs, function(bs) {
          return function(b) {
            return pipe(bs, append3(b));
          };
        }), f(i, a));
      });
    };
  };
  wither = function(F) {
    var _witherF = _wither(F);
    return function(f) {
      return function(fa) {
        return _witherF(fa, f);
      };
    };
  };
  wilt = function(F) {
    var _wiltF = _wilt(F);
    return function(f) {
      return function(fa) {
        return _wiltF(fa, f);
      };
    };
  };
  unfold = function(b, f) {
    var out = [];
    var bb = b;
    while (true) {
      var mt = f(bb);
      if (isSome(mt)) {
        var _a = mt.value, a = _a[0], b_1 = _a[1];
        out.push(a);
        bb = b_1;
      } else {
        break;
      }
    }
    return out;
  };
  URI = "Array";
  getShow3 = getShow2;
  getSemigroup3 = function() {
    return {
      concat: function(first2, second) {
        return first2.concat(second);
      }
    };
  };
  getMonoid2 = function() {
    return {
      concat: getSemigroup3().concat,
      empty: []
    };
  };
  getEq3 = getEq2;
  getOrd2 = getOrd;
  getUnionSemigroup = function(E) {
    var unionE = union3(E);
    return {
      concat: function(first2, second) {
        return unionE(second)(first2);
      }
    };
  };
  getUnionMonoid = function(E) {
    return {
      concat: getUnionSemigroup(E).concat,
      empty: []
    };
  };
  getIntersectionSemigroup = function(E) {
    var intersectionE = intersection(E);
    return {
      concat: function(first2, second) {
        return intersectionE(second)(first2);
      }
    };
  };
  getDifferenceMagma = function(E) {
    var differenceE = difference(E);
    return {
      concat: function(first2, second) {
        return differenceE(second)(first2);
      }
    };
  };
  Functor2 = {
    URI,
    map: _map
  };
  flap2 = flap(Functor2);
  Pointed = {
    URI,
    of: of3
  };
  FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
  };
  Apply3 = {
    URI,
    map: _map,
    ap: _ap
  };
  apFirst2 = apFirst(Apply3);
  apSecond2 = apSecond(Apply3);
  Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of: of3
  };
  Chain3 = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
  };
  chainFirst2 = chainFirst(Chain3);
  Monad = {
    URI,
    map: _map,
    ap: _ap,
    of: of3,
    chain: flatMap
  };
  Unfoldable = {
    URI,
    unfold
  };
  Alt = {
    URI,
    map: _map,
    alt: _alt
  };
  Zero2 = {
    URI,
    zero
  };
  guard2 = guard(Zero2, Pointed);
  Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of: of3,
    alt: _alt,
    zero
  };
  Extend = {
    URI,
    map: _map,
    extend: _extend
  };
  Compactable = {
    URI,
    compact,
    separate
  };
  Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
  };
  FilterableWithIndex = {
    URI,
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
    filterWithIndex: _filterWithIndex
  };
  Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
  };
  FoldableWithIndex = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
  };
  Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
  };
  TraversableWithIndex = {
    URI,
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
    traverseWithIndex: _traverseWithIndex
  };
  _wither = witherDefault(Traversable, Compactable);
  _wilt = wiltDefault(Traversable, Compactable);
  Witherable2 = {
    URI,
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
    wilt: _wilt
  };
  chainRecDepthFirst2 = chainRecDepthFirst;
  ChainRecDepthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecDepthFirst2
  };
  chainRecBreadthFirst2 = chainRecBreadthFirst;
  ChainRecBreadthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecBreadthFirst2
  };
  filterE2 = filterE(Witherable2);
  FromEither2 = {
    URI,
    fromEither
  };
  fromEitherK2 = fromEitherK(FromEither2);
  unsafeInsertAt3 = unsafeInsertAt;
  unsafeUpdateAt3 = function(i, a, as2) {
    return isNonEmpty5(as2) ? unsafeUpdateAt(i, a, as2) : [];
  };
  unsafeDeleteAt = function(i, as2) {
    var xs = as2.slice();
    xs.splice(i, 1);
    return xs;
  };
  every2 = every;
  some2 = function(predicate) {
    return function(as2) {
      return as2.some(predicate);
    };
  };
  exists = some2;
  intercalate3 = intercalate2;
  Do = of3(emptyRecord);
  bindTo2 = bindTo(Functor2);
  let_2 = let_(Functor2);
  bind2 = bind(Chain3);
  apS2 = apS(Apply3);
  chain = flatMap;
  range3 = range;
  empty2 = [];
  cons3 = cons;
  snoc3 = snoc;
  prependToAll = prependAll3;
  array = {
    URI,
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
    wilt: _wilt
  };
});

// node_modules/fp-ts/es6/Predicate.js
var not, and;
var init_Predicate = __esm(() => {
  not = function(predicate) {
    return function(a) {
      return !predicate(a);
    };
  };
  and = function(second) {
    return function(first2) {
      return function(a) {
        return first2(a) && second(a);
      };
    };
  };
});

// node_modules/fp-ts/es6/Option.js
var exports_Option = {};
__export(exports_Option, {
  zero: () => {
    {
      return zero2;
    }
  },
  wither: () => {
    {
      return wither2;
    }
  },
  wilt: () => {
    {
      return wilt2;
    }
  },
  tryCatchK: () => {
    {
      return tryCatchK;
    }
  },
  tryCatch: () => {
    {
      return tryCatch;
    }
  },
  traverseReadonlyNonEmptyArrayWithIndex: () => {
    {
      return traverseReadonlyNonEmptyArrayWithIndex;
    }
  },
  traverseReadonlyArrayWithIndex: () => {
    {
      return traverseReadonlyArrayWithIndex;
    }
  },
  traverseArrayWithIndex: () => {
    {
      return traverseArrayWithIndex;
    }
  },
  traverseArray: () => {
    {
      return traverseArray;
    }
  },
  traverse: () => {
    {
      return traverse2;
    }
  },
  toUndefined: () => {
    {
      return toUndefined;
    }
  },
  toNullable: () => {
    {
      return toNullable;
    }
  },
  throwError: () => {
    {
      return throwError;
    }
  },
  tapEither: () => {
    {
      return tapEither2;
    }
  },
  tap: () => {
    {
      return tap2;
    }
  },
  some: () => {
    {
      return some3;
    }
  },
  sequenceArray: () => {
    {
      return sequenceArray;
    }
  },
  sequence: () => {
    {
      return sequence2;
    }
  },
  separate: () => {
    {
      return separate2;
    }
  },
  reduceRight: () => {
    {
      return reduceRight4;
    }
  },
  reduce: () => {
    {
      return reduce4;
    }
  },
  partitionMap: () => {
    {
      return partitionMap2;
    }
  },
  partition: () => {
    {
      return partition2;
    }
  },
  orElse: () => {
    {
      return orElse;
    }
  },
  option: () => {
    {
      return option;
    }
  },
  of: () => {
    {
      return of4;
    }
  },
  none: () => {
    {
      return none2;
    }
  },
  matchW: () => {
    {
      return matchW3;
    }
  },
  match: () => {
    {
      return match3;
    }
  },
  mapNullable: () => {
    {
      return mapNullable;
    }
  },
  map: () => {
    {
      return map2;
    }
  },
  let: () => {
    {
      return let_3;
    }
  },
  isSome: () => {
    {
      return isSome2;
    }
  },
  isNone: () => {
    {
      return isNone2;
    }
  },
  guard: () => {
    {
      return guard3;
    }
  },
  getShow: () => {
    {
      return getShow4;
    }
  },
  getRight: () => {
    {
      return getRight;
    }
  },
  getRefinement: () => {
    {
      return getRefinement;
    }
  },
  getOrd: () => {
    {
      return getOrd3;
    }
  },
  getOrElseW: () => {
    {
      return getOrElseW;
    }
  },
  getOrElse: () => {
    {
      return getOrElse;
    }
  },
  getMonoid: () => {
    {
      return getMonoid3;
    }
  },
  getLeft: () => {
    {
      return getLeft;
    }
  },
  getLastMonoid: () => {
    {
      return getLastMonoid;
    }
  },
  getFirstMonoid: () => {
    {
      return getFirstMonoid;
    }
  },
  getEq: () => {
    {
      return getEq4;
    }
  },
  getApplySemigroup: () => {
    {
      return getApplySemigroup2;
    }
  },
  getApplyMonoid: () => {
    {
      return getApplyMonoid;
    }
  },
  fromPredicate: () => {
    {
      return fromPredicate2;
    }
  },
  fromNullableK: () => {
    {
      return fromNullableK;
    }
  },
  fromNullable: () => {
    {
      return fromNullable;
    }
  },
  fromEitherK: () => {
    {
      return fromEitherK3;
    }
  },
  fromEither: () => {
    {
      return fromEither2;
    }
  },
  foldW: () => {
    {
      return foldW;
    }
  },
  foldMap: () => {
    {
      return foldMap4;
    }
  },
  fold: () => {
    {
      return fold;
    }
  },
  flatten: () => {
    {
      return flatten2;
    }
  },
  flatMap: () => {
    {
      return flatMap2;
    }
  },
  flap: () => {
    {
      return flap3;
    }
  },
  filterMap: () => {
    {
      return filterMap2;
    }
  },
  filter: () => {
    {
      return filter2;
    }
  },
  extend: () => {
    {
      return extend2;
    }
  },
  exists: () => {
    {
      return exists2;
    }
  },
  elem: () => {
    {
      return elem3;
    }
  },
  duplicate: () => {
    {
      return duplicate2;
    }
  },
  compact: () => {
    {
      return compact2;
    }
  },
  chainNullableK: () => {
    {
      return chainNullableK;
    }
  },
  chainFirstEitherK: () => {
    {
      return chainFirstEitherK;
    }
  },
  chainFirst: () => {
    {
      return chainFirst3;
    }
  },
  chainEitherK: () => {
    {
      return chainEitherK2;
    }
  },
  chain: () => {
    {
      return chain2;
    }
  },
  bindTo: () => {
    {
      return bindTo3;
    }
  },
  bind: () => {
    {
      return bind3;
    }
  },
  asUnit: () => {
    {
      return asUnit2;
    }
  },
  as: () => {
    {
      return as2;
    }
  },
  apSecond: () => {
    {
      return apSecond3;
    }
  },
  apS: () => {
    {
      return apS3;
    }
  },
  apFirst: () => {
    {
      return apFirst3;
    }
  },
  ap: () => {
    {
      return ap3;
    }
  },
  altW: () => {
    {
      return altW2;
    }
  },
  alt: () => {
    {
      return alt2;
    }
  },
  Zero: () => {
    {
      return Zero4;
    }
  },
  Witherable: () => {
    {
      return Witherable4;
    }
  },
  URI: () => {
    {
      return URI2;
    }
  },
  Traversable: () => {
    {
      return Traversable2;
    }
  },
  Pointed: () => {
    {
      return Pointed2;
    }
  },
  MonadThrow: () => {
    {
      return MonadThrow;
    }
  },
  Monad: () => {
    {
      return Monad2;
    }
  },
  Functor: () => {
    {
      return Functor4;
    }
  },
  FromEither: () => {
    {
      return FromEither4;
    }
  },
  Foldable: () => {
    {
      return Foldable2;
    }
  },
  Filterable: () => {
    {
      return Filterable2;
    }
  },
  Extend: () => {
    {
      return Extend2;
    }
  },
  Do: () => {
    {
      return Do2;
    }
  },
  Compactable: () => {
    {
      return Compactable2;
    }
  },
  Chain: () => {
    {
      return Chain4;
    }
  },
  Apply: () => {
    {
      return Apply5;
    }
  },
  Applicative: () => {
    {
      return Applicative3;
    }
  },
  ApT: () => {
    {
      return ApT;
    }
  },
  Alternative: () => {
    {
      return Alternative2;
    }
  },
  Alt: () => {
    {
      return Alt2;
    }
  }
});
function fromPredicate2(predicate) {
  return function(a) {
    return predicate(a) ? some3(a) : none2;
  };
}
function elem3(E) {
  return function(a, ma) {
    if (ma === undefined) {
      var elemE_1 = elem3(E);
      return function(ma2) {
        return elemE_1(a, ma2);
      };
    }
    return isNone2(ma) ? false : E.equals(a, ma.value);
  };
}
function getRefinement(getOption) {
  return function(a) {
    return isSome2(getOption(a));
  };
}
var none2, some3, getLeft, getRight, _map2, _ap2, _reduce2, _foldMap2, _reduceRight2, _traverse2, _alt2, _filter2, _filterMap2, _extend2, _partition2, _partitionMap2, URI2, getShow4, getEq4, getOrd3, getMonoid3, map2, Functor4, as2, asUnit2, of4, Pointed2, ap3, Apply5, Applicative3, flatMap2, Chain4, Monad2, reduce4, foldMap4, reduceRight4, Foldable2, orElse, altW2, alt2, Alt2, zero2, Zero4, guard3, Alternative2, extend2, Extend2, compact2, defaultSeparated, separate2, Compactable2, filter2, filterMap2, partition2, partitionMap2, Filterable2, traverse2, sequence2, Traversable2, _wither2, _wilt2, wither2, wilt2, Witherable4, throwError, MonadThrow, fromEither2, FromEither4, isSome2, isNone2, matchW3, foldW, match3, fold, getOrElseW, getOrElse, flap3, apFirst3, apSecond3, flatten2, tap2, tapEither2, duplicate2, fromEitherK3, chainEitherK2, chainFirstEitherK, fromNullable, tryCatch, tryCatchK, fromNullableK, chainNullableK, toNullable, toUndefined, exists2, Do2, bindTo3, let_3, bind3, apS3, ApT, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyArrayWithIndex, traverseArrayWithIndex, traverseArray, sequenceArray, chain2, chainFirst3, mapNullable, option, getApplySemigroup2, getApplyMonoid, getFirstMonoid, getLastMonoid;
var init_Option = __esm(() => {
  init_Applicative();
  init_Apply();
  init_Chain();
  init_FromEither();
  init_function();
  init_Functor();
  init_internal();
  init_Predicate();
  init_Semigroup();
  init_Separated();
  init_Witherable();
  init_Zero();
  none2 = none;
  some3 = some;
  getLeft = function(ma) {
    return ma._tag === "Right" ? none2 : some3(ma.left);
  };
  getRight = function(ma) {
    return ma._tag === "Left" ? none2 : some3(ma.right);
  };
  _map2 = function(fa, f) {
    return pipe(fa, map2(f));
  };
  _ap2 = function(fab, fa) {
    return pipe(fab, ap3(fa));
  };
  _reduce2 = function(fa, b, f) {
    return pipe(fa, reduce4(b, f));
  };
  _foldMap2 = function(M) {
    var foldMapM = foldMap4(M);
    return function(fa, f) {
      return pipe(fa, foldMapM(f));
    };
  };
  _reduceRight2 = function(fa, b, f) {
    return pipe(fa, reduceRight4(b, f));
  };
  _traverse2 = function(F) {
    var traverseF = traverse2(F);
    return function(ta, f) {
      return pipe(ta, traverseF(f));
    };
  };
  _alt2 = function(fa, that) {
    return pipe(fa, alt2(that));
  };
  _filter2 = function(fa, predicate) {
    return pipe(fa, filter2(predicate));
  };
  _filterMap2 = function(fa, f) {
    return pipe(fa, filterMap2(f));
  };
  _extend2 = function(wa, f) {
    return pipe(wa, extend2(f));
  };
  _partition2 = function(fa, predicate) {
    return pipe(fa, partition2(predicate));
  };
  _partitionMap2 = function(fa, f) {
    return pipe(fa, partitionMap2(f));
  };
  URI2 = "Option";
  getShow4 = function(S) {
    return {
      show: function(ma) {
        return isNone2(ma) ? "none" : "some(".concat(S.show(ma.value), ")");
      }
    };
  };
  getEq4 = function(E) {
    return {
      equals: function(x, y) {
        return x === y || (isNone2(x) ? isNone2(y) : isNone2(y) ? false : E.equals(x.value, y.value));
      }
    };
  };
  getOrd3 = function(O) {
    return {
      equals: getEq4(O).equals,
      compare: function(x, y) {
        return x === y ? 0 : isSome2(x) ? isSome2(y) ? O.compare(x.value, y.value) : 1 : -1;
      }
    };
  };
  getMonoid3 = function(S) {
    return {
      concat: function(x, y) {
        return isNone2(x) ? y : isNone2(y) ? x : some3(S.concat(x.value, y.value));
      },
      empty: none2
    };
  };
  map2 = function(f) {
    return function(fa) {
      return isNone2(fa) ? none2 : some3(f(fa.value));
    };
  };
  Functor4 = {
    URI: URI2,
    map: _map2
  };
  as2 = dual(2, as(Functor4));
  asUnit2 = asUnit(Functor4);
  of4 = some3;
  Pointed2 = {
    URI: URI2,
    of: of4
  };
  ap3 = function(fa) {
    return function(fab) {
      return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some3(fab.value(fa.value));
    };
  };
  Apply5 = {
    URI: URI2,
    map: _map2,
    ap: _ap2
  };
  Applicative3 = {
    URI: URI2,
    map: _map2,
    ap: _ap2,
    of: of4
  };
  flatMap2 = dual(2, function(ma, f) {
    return isNone2(ma) ? none2 : f(ma.value);
  });
  Chain4 = {
    URI: URI2,
    map: _map2,
    ap: _ap2,
    chain: flatMap2
  };
  Monad2 = {
    URI: URI2,
    map: _map2,
    ap: _ap2,
    of: of4,
    chain: flatMap2
  };
  reduce4 = function(b, f) {
    return function(fa) {
      return isNone2(fa) ? b : f(b, fa.value);
    };
  };
  foldMap4 = function(M) {
    return function(f) {
      return function(fa) {
        return isNone2(fa) ? M.empty : f(fa.value);
      };
    };
  };
  reduceRight4 = function(b, f) {
    return function(fa) {
      return isNone2(fa) ? b : f(fa.value, b);
    };
  };
  Foldable2 = {
    URI: URI2,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2
  };
  orElse = dual(2, function(self, that) {
    return isNone2(self) ? that() : self;
  });
  altW2 = orElse;
  alt2 = orElse;
  Alt2 = {
    URI: URI2,
    map: _map2,
    alt: _alt2
  };
  zero2 = function() {
    return none2;
  };
  Zero4 = {
    URI: URI2,
    zero: zero2
  };
  guard3 = guard(Zero4, Pointed2);
  Alternative2 = {
    URI: URI2,
    map: _map2,
    ap: _ap2,
    of: of4,
    alt: _alt2,
    zero: zero2
  };
  extend2 = function(f) {
    return function(wa) {
      return isNone2(wa) ? none2 : some3(f(wa));
    };
  };
  Extend2 = {
    URI: URI2,
    map: _map2,
    extend: _extend2
  };
  compact2 = flatMap2(identity);
  defaultSeparated = separated(none2, none2);
  separate2 = function(ma) {
    return isNone2(ma) ? defaultSeparated : separated(getLeft(ma.value), getRight(ma.value));
  };
  Compactable2 = {
    URI: URI2,
    compact: compact2,
    separate: separate2
  };
  filter2 = function(predicate) {
    return function(fa) {
      return isNone2(fa) ? none2 : predicate(fa.value) ? fa : none2;
    };
  };
  filterMap2 = function(f) {
    return function(fa) {
      return isNone2(fa) ? none2 : f(fa.value);
    };
  };
  partition2 = function(predicate) {
    return function(fa) {
      return separated(_filter2(fa, not(predicate)), _filter2(fa, predicate));
    };
  };
  partitionMap2 = function(f) {
    return flow(map2(f), separate2);
  };
  Filterable2 = {
    URI: URI2,
    map: _map2,
    compact: compact2,
    separate: separate2,
    filter: _filter2,
    filterMap: _filterMap2,
    partition: _partition2,
    partitionMap: _partitionMap2
  };
  traverse2 = function(F) {
    return function(f) {
      return function(ta) {
        return isNone2(ta) ? F.of(none2) : F.map(f(ta.value), some3);
      };
    };
  };
  sequence2 = function(F) {
    return function(ta) {
      return isNone2(ta) ? F.of(none2) : F.map(ta.value, some3);
    };
  };
  Traversable2 = {
    URI: URI2,
    map: _map2,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2,
    traverse: _traverse2,
    sequence: sequence2
  };
  _wither2 = witherDefault(Traversable2, Compactable2);
  _wilt2 = wiltDefault(Traversable2, Compactable2);
  wither2 = function(F) {
    var _witherF = _wither2(F);
    return function(f) {
      return function(fa) {
        return _witherF(fa, f);
      };
    };
  };
  wilt2 = function(F) {
    var _wiltF = _wilt2(F);
    return function(f) {
      return function(fa) {
        return _wiltF(fa, f);
      };
    };
  };
  Witherable4 = {
    URI: URI2,
    map: _map2,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2,
    traverse: _traverse2,
    sequence: sequence2,
    compact: compact2,
    separate: separate2,
    filter: _filter2,
    filterMap: _filterMap2,
    partition: _partition2,
    partitionMap: _partitionMap2,
    wither: _wither2,
    wilt: _wilt2
  };
  throwError = function() {
    return none2;
  };
  MonadThrow = {
    URI: URI2,
    map: _map2,
    ap: _ap2,
    of: of4,
    chain: flatMap2,
    throwError
  };
  fromEither2 = getRight;
  FromEither4 = {
    URI: URI2,
    fromEither: fromEither2
  };
  isSome2 = isSome;
  isNone2 = function(fa) {
    return fa._tag === "None";
  };
  matchW3 = function(onNone, onSome) {
    return function(ma) {
      return isNone2(ma) ? onNone() : onSome(ma.value);
    };
  };
  foldW = matchW3;
  match3 = matchW3;
  fold = match3;
  getOrElseW = function(onNone) {
    return function(ma) {
      return isNone2(ma) ? onNone() : ma.value;
    };
  };
  getOrElse = getOrElseW;
  flap3 = flap(Functor4);
  apFirst3 = apFirst(Apply5);
  apSecond3 = apSecond(Apply5);
  flatten2 = compact2;
  tap2 = dual(2, tap(Chain4));
  tapEither2 = dual(2, tapEither(FromEither4, Chain4));
  duplicate2 = extend2(identity);
  fromEitherK3 = fromEitherK(FromEither4);
  chainEitherK2 = chainEitherK(FromEither4, Chain4);
  chainFirstEitherK = tapEither2;
  fromNullable = function(a) {
    return a == null ? none2 : some3(a);
  };
  tryCatch = function(f) {
    try {
      return some3(f());
    } catch (e) {
      return none2;
    }
  };
  tryCatchK = function(f) {
    return function() {
      var a = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return tryCatch(function() {
        return f.apply(undefined, a);
      });
    };
  };
  fromNullableK = function(f) {
    return flow(f, fromNullable);
  };
  chainNullableK = function(f) {
    return function(ma) {
      return isNone2(ma) ? none2 : fromNullable(f(ma.value));
    };
  };
  toNullable = match3(constNull, identity);
  toUndefined = match3(constUndefined, identity);
  exists2 = function(predicate) {
    return function(ma) {
      return isNone2(ma) ? false : predicate(ma.value);
    };
  };
  Do2 = of4(emptyRecord);
  bindTo3 = bindTo(Functor4);
  let_3 = let_(Functor4);
  bind3 = bind(Chain4);
  apS3 = apS(Apply5);
  ApT = of4(emptyReadonlyArray);
  traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as3) {
      var o = f(0, head(as3));
      if (isNone2(o)) {
        return none2;
      }
      var out = [o.value];
      for (var i = 1;i < as3.length; i++) {
        var o_1 = f(i, as3[i]);
        if (isNone2(o_1)) {
          return none2;
        }
        out.push(o_1.value);
      }
      return some3(out);
    };
  };
  traverseReadonlyArrayWithIndex = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return function(as3) {
      return isNonEmpty(as3) ? g(as3) : ApT;
    };
  };
  traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
  traverseArray = function(f) {
    return traverseReadonlyArrayWithIndex(function(_, a) {
      return f(a);
    });
  };
  sequenceArray = traverseArray(identity);
  chain2 = flatMap2;
  chainFirst3 = tap2;
  mapNullable = chainNullableK;
  option = {
    URI: URI2,
    map: _map2,
    of: of4,
    ap: _ap2,
    chain: flatMap2,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2,
    traverse: _traverse2,
    sequence: sequence2,
    zero: zero2,
    alt: _alt2,
    extend: _extend2,
    compact: compact2,
    separate: separate2,
    filter: _filter2,
    filterMap: _filterMap2,
    partition: _partition2,
    partitionMap: _partitionMap2,
    wither: _wither2,
    wilt: _wilt2,
    throwError
  };
  getApplySemigroup2 = getApplySemigroup(Apply5);
  getApplyMonoid = getApplicativeMonoid(Applicative3);
  getFirstMonoid = function() {
    return getMonoid3(first());
  };
  getLastMonoid = function() {
    return getMonoid3(last());
  };
});

// node_modules/fp-ts/es6/Endomorphism.js
var getSemigroup4, getMonoid4;
var init_Endomorphism = __esm(() => {
  init_function();
  getSemigroup4 = function() {
    return {
      concat: function(first2, second) {
        return flow(first2, second);
      }
    };
  };
  getMonoid4 = function() {
    return {
      concat: getSemigroup4().concat,
      empty: identity
    };
  };
});

// node_modules/fp-ts/es6/Monoid.js
var concatAll5, monoidVoid, monoidAll, monoidAny, monoidString, monoidSum, monoidProduct;
var init_Monoid = __esm(() => {
  init_Semigroup();
  concatAll5 = function(M) {
    return concatAll2(M)(M.empty);
  };
  monoidVoid = {
    concat: semigroupVoid.concat,
    empty: undefined
  };
  monoidAll = {
    concat: semigroupAll.concat,
    empty: true
  };
  monoidAny = {
    concat: semigroupAny.concat,
    empty: false
  };
  monoidString = {
    concat: semigroupString.concat,
    empty: ""
  };
  monoidSum = {
    concat: semigroupSum.concat,
    empty: 0
  };
  monoidProduct = {
    concat: semigroupProduct.concat,
    empty: 1
  };
});

// node_modules/fp-ts/es6/ReadonlyRecord.js
function lookup3(k, r) {
  if (r === undefined) {
    return function(r2) {
      return lookup3(k, r2);
    };
  }
  return has.call(r, k) ? some(r[k]) : none;
}
var init_ReadonlyRecord = __esm(() => {
  init_internal();
});

// node_modules/fp-ts/es6/Record.js
var lookup4;
var init_Record = __esm(() => {
  init_ReadonlyRecord();
  lookup4 = lookup3;
});

// node_modules/fp-ts/es6/index.js
var init_es6 = __esm(() => {
  init_Array();
  init_number();
  init_Option();
});

// shared/util.tsx
var SpotifyLoc, sleep, isLiked, setLiked, toggleLiked;
var init_util = __esm(() => {
  init_es6();
  init_function();
  (function(SpotifyLoc) {
    let before;
    (function(before) {
      before.start = constant({ before: "start" });
      before.fromUri = (uri) => ({
        before: { uri }
      });
      before.fromUid = (uid) => ({
        before: { uid }
      });
    })(before = SpotifyLoc.before || (SpotifyLoc.before = {}));
    let after;
    (function(after) {
      after.end = constant({ after: "end" });
      after.fromUri = (uri) => ({
        before: { uri }
      });
      after.fromUid = (uid) => ({
        before: { uid }
      });
    })(after = SpotifyLoc.after || (SpotifyLoc.after = {}));
  })(SpotifyLoc || (SpotifyLoc = {}));
  //! Does location actually point to document.body?
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  isLiked = (uris) => Spicetify.Platform.LibraryAPI.contains(...uris);
  setLiked = (uris, liked) => Spicetify.Platform.LibraryAPI[liked ? "add" : "remove"](...uris);
  toggleLiked = async (uris) => {
    const liked = await isLiked(uris);
    return await pipe(uris, exports_Array.reduceWithIndex([[], []], (i, acc, uri) => (acc[Number(liked[i])].push(uri), acc)), ([toAdd, toRem]) => {
      const ps = [];
      if (toAdd.length)
        ps.push(setLiked(toAdd, true));
      if (toRem.length)
        ps.push(setLiked(toRem, false));
      return Promise.all(ps);
    });
  };
});

// node_modules/fp-ts-std/dist/esm/Function.js
var URI3, map4, Functor6, of5, ap4, Applicative4, apFirst4, apSecond4, chain3, Monad3, Do3, bindTo4, bind4, apS4, let_4, unary, unless, when, invoke, invokeNullary, curry2T, curry2, curry3T, curry3, curry4T, curry4, curry5T, curry5, applyEvery;
var init_Function = __esm(() => {
  init_function();
  init_Predicate();
  init_Endomorphism();
  init_Monoid();
  init_Functor();
  init_Apply();
  init_Chain();
  URI3 = "Function";
  map4 = (f) => (g) => flow(g, f);
  Functor6 = {
    URI: URI3,
    map: (f, g) => map4(g)(f)
  };
  of5 = constant;
  ap4 = (f) => (g) => (x) => g(x)(f(x));
  Applicative4 = {
    ...Functor6,
    of: of5,
    ap: (f, g) => ap4(g)(f)
  };
  apFirst4 = apFirst(Applicative4);
  apSecond4 = apSecond(Applicative4);
  chain3 = (f) => (g) => (x) => f(g(x))(x);
  Monad3 = {
    ...Applicative4,
    chain: (f, g) => chain3(g)(f)
  };
  Do3 = of5({});
  bindTo4 = bindTo(Functor6);
  bind4 = bind(Monad3);
  apS4 = apS(Applicative4);
  let_4 = let_(Functor6);
  unary = tupled;
  unless = (f) => (onFalse) => (x) => f(x) ? x : onFalse(x);
  when = flow(not, unless);
  invoke = (x) => (ys) => (z) => z[x](...ys);
  invokeNullary = flip(invoke)([]);
  curry2T = (f) => (a) => (b) => f([a, b]);
  curry2 = flow(unary, curry2T);
  curry3T = (f) => (a) => (b) => (c) => f([a, b, c]);
  curry3 = flow(unary, curry3T);
  curry4T = (f) => (a) => (b) => (c) => (d) => f([a, b, c, d]);
  curry4 = flow(unary, curry4T);
  curry5T = (f) => (a) => (b) => (c) => (d) => (e) => f([a, b, c, d, e]);
  curry5 = flow(unary, curry5T);
  applyEvery = concatAll5(getMonoid4());
});

// node_modules/fp-ts-std/dist/esm/Array.js
var none3, sum, product, mean, median, moveFrom, moveTo, minimum, maximum, fromIterable;
var init_Array2 = __esm(() => {
  init_function();
  init_Predicate();
  init_number();
  init_NonEmptyArray();
  init_Array();
  init_Option();
  init_Monoid();
  init_Semigroup();
  none3 = flow(not, (p) => every2(p));
  sum = concatAll5(MonoidSum);
  product = concatAll5(MonoidProduct);
  mean = (xs) => sum(xs) / xs.length;
  median = flow(sort(Ord2), (xs) => {
    const i = xs.length / 2;
    return i % 1 === 0 ? (xs[i - 1] + xs[i]) / 2 : xs[Math.floor(i)];
  });
  moveFrom = (from) => (to) => (xs) => from >= xs.length || to >= xs.length ? none2 : from === to ? some3(xs) : pipe(xs, lookup2(from), chain2((x) => pipe(deleteAt(from)(xs), chain2(insertAt(to, x)))));
  moveTo = flip(moveFrom);
  minimum = flow(min2, concatAll4);
  maximum = flow(max2, concatAll4);
  fromIterable = Array.from;
});

// extensions/keyboard-shortcuts/sneak.tsx
var mousetrap, keyList, getSneakKeys, clearSomeSneakKeys, clearSneakKeys, enterSneak, quitSneak, listenSneakKeys, shouldListenToSneakBinds, listeningToSneakBinds, sneakOverlay;
var init_sneak = __esm(() => {
  init_es6();
  init_function();
  init_Array2();
  init_Ord();
  mousetrap = Spicetify.Mousetrap();
  keyList = "abcdefghijklmnopqrstuvwxyz".split("");
  getSneakKeys = () => Array.from(sneakOverlay.getElementsByClassName("sneak-key"));
  clearSomeSneakKeys = (sneakKeys) => {
    if (sneakKeys.length === 0)
      return false;
    sneakOverlay.remove();
    pipe(sneakKeys, exports_Array.map((e) => e.remove()));
    document.body.append(sneakOverlay);
    return true;
  };
  clearSneakKeys = flow(getSneakKeys, clearSomeSneakKeys);
  enterSneak = () => {
    sneakOverlay.style.display = "block";
    if (clearSneakKeys())
      return;
    const isElementVisible = (e) => e.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true });
    const isElementInViewPort = (e) => {
      const c = document.body;
      const bound = e.getBoundingClientRect();
      const within = (m, M) => (x) => x === clamp(exports_number.Ord)(m, M)(x);
      return pipe(mean([bound.top, bound.bottom]), within(0, c.clientHeight)) && pipe(mean([bound.left, bound.right]), within(0, c.clientWidth));
    };
    const createSneakKey = (target, key, top, left) => {
      const sneakKey = document.createElement("span");
      sneakKey.classList.add("sneak-key");
      sneakKey.innerText = key;
      sneakKey.style.top = top + "px";
      sneakKey.style.left = left + "px";
      sneakKey.target = target;
      return sneakKey;
    };
    const sneakKeysFragment = document.createDocumentFragment();
    const linkSelector = `.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]`;
    shouldListenToSneakBinds = pipe(document.querySelectorAll(linkSelector), (x) => Array.from(x), exports_Array.filter(isElementVisible), exports_Array.filter(isElementInViewPort), exports_Array.reduce([0, 0], ([k1, k2], e) => {
      const { x, y } = e.getBoundingClientRect();
      sneakKeysFragment.append(createSneakKey(e, keyList[k1] + keyList[k2++], y, x));
      return k2 >= keyList.length ? [++k1, 0] : [k1, k2];
    }), ([k1, k2]) => k1 + k2 > 0);
    if (shouldListenToSneakBinds)
      sneakOverlay.append(sneakKeysFragment);
  };
  quitSneak = () => {
    sneakOverlay.style.display = "none";
    clearSneakKeys();
    listeningToSneakBinds = false;
  };
  listenSneakKeys = ({ key }) => {
    if (!listeningToSneakBinds) {
      if (shouldListenToSneakBinds) {
        shouldListenToSneakBinds = false;
        listeningToSneakBinds = true;
      }
      return;
    }
    const sneakKeys = getSneakKeys();
    if (sneakKeys.length === 0)
      return void quitSneak();
    {
      sneakOverlay.remove();
      sneakKeys.map((sneakKey) => {
        const [k1, ...ks] = sneakKey.innerText.toLowerCase();
        if (k1 !== key)
          return void sneakKey.remove();
        if (ks.length === 0) {
          sneakKey.target.click();
          quitSneak();
        } else {
          sneakKey.innerText = ks.join("");
        }
      });
      document.body.append(sneakOverlay);
    }
    if (sneakOverlay.childNodes.length === 1)
      quitSneak();
  };
  shouldListenToSneakBinds = false;
  listeningToSneakBinds = false;
  sneakOverlay = document.createElement("div");
  sneakOverlay.id = "sneak-overlay";
  document.body.append(sneakOverlay);
});

// node_modules/fp-ts-std/dist/esm/Lazy.js
var URI4, _map4, _ap3, _chain, of6, chain4, flatten3, Functor8, flap4, Apply8, apFirst5, apSecond5, Chain7, chainFirst4, Do4, bindTo5, bind5, apS5, let_5, ApT2, traverseReadonlyNonEmptyArrayWithIndex2, traverseReadonlyArrayWithIndex2, traverseArray2, sequenceArray2;
var init_Lazy = __esm(() => {
  init_function();
  init_Functor();
  init_Apply();
  init_Chain();
  init_ReadonlyNonEmptyArray();
  init_ReadonlyArray();
  URI4 = "Lazy";
  _map4 = (f, g) => () => g(f());
  _ap3 = (f, g) => () => f()(g());
  _chain = (f, g) => g(f());
  of6 = constant;
  chain4 = (f) => (ma) => _chain(ma, f);
  flatten3 = chain4(identity);
  Functor8 = {
    URI: URI4,
    map: _map4
  };
  flap4 = flap(Functor8);
  Apply8 = {
    URI: URI4,
    map: _map4,
    ap: _ap3
  };
  apFirst5 = apFirst(Apply8);
  apSecond5 = apSecond(Apply8);
  Chain7 = {
    URI: URI4,
    map: _map4,
    ap: _ap3,
    chain: _chain
  };
  chainFirst4 = chainFirst(Chain7);
  Do4 = of6({});
  bindTo5 = bindTo(Functor8);
  bind5 = bind(Chain7);
  apS5 = apS(Apply8);
  let_5 = let_(Functor8);
  ApT2 = of6([]);
  traverseReadonlyNonEmptyArrayWithIndex2 = (f) => (as3) => () => {
    const out = [f(0, head2(as3))()];
    for (let i = 1;i < as3.length; i++) {
      out.push(f(i, as3[i])());
    }
    return out;
  };
  traverseReadonlyArrayWithIndex2 = (f) => {
    const g = traverseReadonlyNonEmptyArrayWithIndex2(f);
    return (as3) => isNonEmpty4(as3) ? g(as3) : ApT2;
  };
  traverseArray2 = (f) => traverseReadonlyArrayWithIndex2((_, a) => f(a));
  sequenceArray2 = traverseArray2(identity);
});

// node_modules/fp-ts-std/dist/esm/Number.js
var isValid, fromStringWithRadix, fromString, floatFromString, increment, decrement, mod, isFinite, toFinite, BoundedSafe, EnumInt;
var init_Number = __esm(() => {
  init_function();
  init_Predicate();
  init_Option();
  init_Function();
  init_number();
  init_Lazy();
  isValid = not(Number.isNaN);
  fromStringWithRadix = (radix) => (string) => pipe(Number.parseInt(string, radix), fromPredicate2(isValid));
  fromString = fromStringWithRadix(10);
  floatFromString = flow(Number.parseFloat, fromPredicate2(isValid));
  increment = (x) => x + 1;
  decrement = (x) => x - 1;
  mod = (divisor) => (dividend) => (dividend % divisor + divisor) % divisor;
  isFinite = (n) => Math.abs(n) !== Infinity;
  toFinite = unless(isFinite)((n) => Math.sign(n) * Number.MAX_SAFE_INTEGER);
  BoundedSafe = {
    ...Bounded,
    top: Number.MAX_SAFE_INTEGER,
    bottom: Number.MIN_SAFE_INTEGER
  };
  EnumInt = {
    ...BoundedSafe,
    succ: flow(fromPredicate2(and((n) => n < Number.MAX_SAFE_INTEGER)(Number.isInteger)), map2(increment)),
    pred: flow(fromPredicate2(and((n) => n > Number.MIN_SAFE_INTEGER)(Number.isInteger)), map2(decrement)),
    toEnum: some3,
    fromEnum: identity,
    cardinality: of6(Infinity)
  };
});

// extensions/keyboard-shortcuts/util.tsx
class Bind {
  key;
  callback;
  ctrl = false;
  shift = false;
  alt = false;
  constructor(key, callback) {
    this.key = key;
    this.callback = callback;
  }
  setCtrl = (required) => (this.ctrl = required, this);
  setShift = (required) => (this.shift = required, this);
  setAlt = (required) => (this.alt = required, this);
  register = () => Spicetify.Keyboard.registerShortcut({ key: this.key, ctrl: this.ctrl, shift: this.shift, alt: this.alt }, (event) => void (!listeningToSneakBinds && this.callback(event)));
}
var SCROLL_STEP, focusOnApp, appScroll, appScrollY, openPage, rotateSidebar;
var init_util2 = __esm(() => {
  init_function();
  init_sneak();
  init_Number();
  SCROLL_STEP = 25;
  focusOnApp = () => document.querySelector(".Root__main-view .os-viewport");
  appScroll = (s) => {
    const app = focusOnApp();
    const scrollIntervalId = setInterval(() => app.scrollTop += s * SCROLL_STEP, 10);
    document.addEventListener("keyup", () => clearInterval(scrollIntervalId));
  };
  appScrollY = (y) => focusOnApp().scroll(0, y);
  openPage = (page) => Spicetify.Platform.History.push({ pathname: page });
  rotateSidebar = (offset) => {
    const navLinks = Array.from(document.querySelectorAll(".main-yourLibraryX-navLink").values());
    pipe(document.querySelector(".main-yourLibraryX-navLinkActive"), (active) => navLinks.findIndex((e) => e === active), (x) => pipe(x === -1 && offset <= 0 ? offset : x + offset, mod(navLinks.length)), (x) => navLinks[x].click());
  };
});

// /home/delusoire/dev/spicetify-extensions/extensions/keyboard-shortcuts/assets/styles.scss
var init_styles = __esm(() => {
  (async () => {
    const id = "QL9DDk7W4Cvd3SZxYVftCFUYJ34OOOMYJhq3PLAu-LA";
    if (!document.getElementById(id)) {
      const el = document.createElement("style");
      el.id = id;
      el.textContent = "#sneak-overlay {\n  z-index: 100000;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n#sneak-overlay > .sneak-key {\n  position: fixed;\n  padding: 3px 6px;\n  background-color: black;\n  border-radius: 3px;\n  border: solid 2px white;\n  color: white;\n  text-transform: lowercase;\n  line-height: normal;\n  font-size: 14px;\n  font-weight: 500;\n}";
      document.head.appendChild(el);
    }
  })();
});

// extensions/keyboard-shortcuts/app.tsx
var exports_app = {};
var KEYS, binds;
var init_app = __esm(() => {
  init_sneak();
  init_util2();
  init_util();
  init_styles();
  ({ KEYS } = Spicetify.Keyboard);
  binds = [
    new Bind("s", enterSneak),
    new Bind("s", async () => {
      const productState = Spicetify.Platform.UserAPI._product_state || Spicetify.Platform.UserAPI._product_state_service;
      await productState.putValues({ pairs: { "app-developer": "2" } });
      Spicetify.Platform.UpdateAPI.applyUpdate();
    }).setShift(true),
    new Bind("tab", () => rotateSidebar(1)),
    new Bind("tab", () => rotateSidebar(-1)).setShift(true),
    new Bind("h", Spicetify.Platform.History.goBack).setShift(true),
    new Bind("l", Spicetify.Platform.History.goForward).setShift(true),
    new Bind("j", () => appScroll(1)),
    new Bind("k", () => appScroll(-1)),
    new Bind("g", () => appScrollY(0)),
    new Bind("g", () => appScrollY(Number.MAX_SAFE_INTEGER)).setShift(true),
    new Bind("m", () => toggleLiked([Spicetify.Player.data.item.uri])),
    new Bind("/", (e) => {
      e.preventDefault();
      openPage("/search");
    })
  ];
  binds.map((bind6) => bind6.register());
  mousetrap.bind(keyList, listenSneakKeys, "keypress");
  mousetrap.bind(KEYS.ESCAPE, quitSneak);
});

// extensions/keyboard-shortcuts/entry.tsx
init_es6();
init_Record();
init_function();
init_util();
(async () => {
  const mustLoad = ["Keyboard", "Mousetrap", "Platform", "Player"];
  let timer = 0;
  while (mustLoad.some(flow(flip(lookup4)(Spicetify), exports_Option.isNone)))
    await sleep(timer += 100);
  await Promise.resolve().then(() => (init_app(), exports_app));
})();
