var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
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
function untupled(f) {
  return function() {
    var a = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      a[_i] = arguments[_i];
    }
    return f(a);
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
var __spreadArray, getSemigroup, getMonoid, apply, constFalse, constNull, constUndefined, constVoid, dual;
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
  getSemigroup = function(S) {
    return function() {
      return {
        concat: function(f, g) {
          return function(a) {
            return S.concat(f(a), g(a));
          };
        }
      };
    };
  };
  getMonoid = function(M) {
    var getSemigroupM = getSemigroup(M);
    return function() {
      return {
        concat: getSemigroupM().concat,
        empty: function() {
          return M.empty;
        }
      };
    };
  };
  apply = function(a) {
    return function(f) {
      return f(a);
    };
  };
  constFalse = constant(false);
  constNull = constant(null);
  constUndefined = constant(undefined);
  constVoid = constUndefined;
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
var __spreadArray2, isNone, isSome, none, some, isLeft, singleton, isNonEmpty, head, tail, emptyReadonlyArray, emptyRecord, has, fromReadonlyNonEmptyArray, flatMapIO;
var init_internal = __esm(() => {
  init_function();
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
  singleton = function(a) {
    return [a];
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
  flatMapIO = function(F, M) {
    return dual(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromIO(f(a));
      });
    });
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
var exports_Eq = {};
__export(exports_Eq, {
  tuple: () => {
    {
      return tuple;
    }
  },
  struct: () => {
    {
      return struct;
    }
  },
  strictEqual: () => {
    {
      return strictEqual;
    }
  },
  getTupleEq: () => {
    {
      return getTupleEq;
    }
  },
  getStructEq: () => {
    {
      return getStructEq;
    }
  },
  getSemigroup: () => {
    {
      return getSemigroup2;
    }
  },
  getMonoid: () => {
    {
      return getMonoid2;
    }
  },
  fromEquals: () => {
    {
      return fromEquals;
    }
  },
  eqString: () => {
    {
      return eqString;
    }
  },
  eqStrict: () => {
    {
      return eqStrict;
    }
  },
  eqNumber: () => {
    {
      return eqNumber;
    }
  },
  eqDate: () => {
    {
      return eqDate;
    }
  },
  eqBoolean: () => {
    {
      return eqBoolean;
    }
  },
  eq: () => {
    {
      return eq;
    }
  },
  contramap: () => {
    {
      return contramap;
    }
  },
  URI: () => {
    {
      return URI;
    }
  },
  Contravariant: () => {
    {
      return Contravariant;
    }
  }
});
var fromEquals, struct, tuple, contramap_, contramap, URI, eqStrict, empty, getSemigroup2, getMonoid2, Contravariant, getTupleEq, getStructEq, strictEqual, eq, eqBoolean, eqString, eqNumber, eqDate;
var init_Eq = __esm(() => {
  init_function();
  fromEquals = function(equals) {
    return {
      equals: function(x, y) {
        return x === y || equals(x, y);
      }
    };
  };
  struct = function(eqs) {
    return fromEquals(function(first, second) {
      for (var key in eqs) {
        if (!eqs[key].equals(first[key], second[key])) {
          return false;
        }
      }
      return true;
    });
  };
  tuple = function() {
    var eqs = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      eqs[_i] = arguments[_i];
    }
    return fromEquals(function(first, second) {
      return eqs.every(function(E, i) {
        return E.equals(first[i], second[i]);
      });
    });
  };
  contramap_ = function(fa, f) {
    return pipe(fa, contramap(f));
  };
  contramap = function(f) {
    return function(fa) {
      return fromEquals(function(x, y) {
        return fa.equals(f(x), f(y));
      });
    };
  };
  URI = "Eq";
  eqStrict = {
    equals: function(a, b) {
      return a === b;
    }
  };
  empty = {
    equals: function() {
      return true;
    }
  };
  getSemigroup2 = function() {
    return {
      concat: function(x, y) {
        return fromEquals(function(a, b) {
          return x.equals(a, b) && y.equals(a, b);
        });
      }
    };
  };
  getMonoid2 = function() {
    return {
      concat: getSemigroup2().concat,
      empty
    };
  };
  Contravariant = {
    URI,
    contramap: contramap_
  };
  getTupleEq = tuple;
  getStructEq = struct;
  strictEqual = eqStrict.equals;
  eq = Contravariant;
  eqBoolean = eqStrict;
  eqString = eqStrict;
  eqNumber = eqStrict;
  eqDate = {
    equals: function(first, second) {
      return first.valueOf() === second.valueOf();
    }
  };
});

// node_modules/fp-ts/es6/Ord.js
var compare, equalsDefault, fromCompare, getSemigroup3, getMonoid3, strictOrd;
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
  getSemigroup3 = function() {
    return {
      concat: function(first, second) {
        return fromCompare(function(a, b) {
          var ox = first.compare(a, b);
          return ox !== 0 ? ox : second.compare(a, b);
        });
      }
    };
  };
  getMonoid3 = function() {
    return {
      concat: getSemigroup3().concat,
      empty: fromCompare(function() {
        return 0;
      })
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
var constant2, first, last, concatAll2, semigroupVoid, semigroupAll, semigroupAny, semigroupString, semigroupSum, semigroupProduct;
var init_Semigroup = __esm(() => {
  init_function();
  init_Magma();
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
var __spreadArray4, isNonEmpty3, isOutOfBound2, prependW2, prepend2, appendW, append, unsafeInsertAt, unsafeUpdateAt, uniq, sortBy, union, rotate, fromReadonlyNonEmptyArray2, makeBy, range, sort, copy, of, prependAll2, intersperse2, chop, splitAt, chunksOf, head3, tail3, last3, init, snoc;
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
      var M = getMonoid3();
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
  snoc = function(init2, end) {
    return pipe(init2, append(end));
  };
});

// node_modules/fp-ts/es6/number.js
var Eq2, Ord2, Bounded, MagmaSub, SemigroupSum, SemigroupProduct, MonoidSum, MonoidProduct, Field;
var init_number = __esm(() => {
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
      return getSemigroup4;
    }
  },
  getOrd: () => {
    {
      return getOrd2;
    }
  },
  getMonoid: () => {
    {
      return getMonoid4;
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
      return empty3;
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
      return URI2;
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
var isEmpty, isNonEmpty5, prepend3, prependW3, append3, appendW3, makeBy3, replicate, fromOption, fromEither, matchW2, match2, matchLeftW, matchLeft, foldLeft, matchRightW, matchRight, foldRight, chainWithIndex, scanLeft, scanRight, size, isOutOfBound4, lookup2, head5, last5, tail4, init3, takeLeft, takeRight, spanLeftIndex, dropLeft, dropRight, findIndex2, findFirstMap2, findLastMap2, findLastIndex2, copy2, insertAt, updateAt, deleteAt, modifyAt, reverse2, rights, lefts, sort2, zipWith, unzip, prependAll3, intersperse3, rotate3, elem2, uniq3, sortBy3, chop3, splitAt3, chunksOf3, fromOptionK, concatW, concat2, _map, _mapWithIndex, _ap, _filter, _filterMap, _partition, _partitionMap, _partitionWithIndex, _partitionMapWithIndex, _alt, _reduce, _foldMap, _reduceRight, _reduceWithIndex, _foldMapWithIndex, _reduceRightWithIndex, _filterMapWithIndex, _filterWithIndex, _extend, _traverse, _traverseWithIndex, _chainRecDepthFirst2, _chainRecBreadthFirst2, of3, zero, map, ap2, flatMap, flatten, mapWithIndex, filterMapWithIndex, filterMap, compact, separate, filter, partition, partitionWithIndex, partitionMap, partitionMapWithIndex, altW, alt, filterWithIndex, extend, duplicate, foldMap3, foldMapWithIndex3, reduce3, reduceWithIndex3, reduceRight3, reduceRightWithIndex3, traverse, sequence, traverseWithIndex, wither, wilt, unfold, URI2, getShow3, getSemigroup4, getMonoid4, getEq3, getOrd2, getUnionSemigroup, getUnionMonoid, getIntersectionSemigroup, getDifferenceMagma, Functor2, flap2, Pointed, FunctorWithIndex, Apply3, apFirst2, apSecond2, Applicative, Chain3, chainFirst2, Monad, Unfoldable, Alt, Zero2, guard2, Alternative, Extend, Compactable, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, Traversable, TraversableWithIndex, _wither, _wilt, Witherable2, chainRecDepthFirst2, ChainRecDepthFirst, chainRecBreadthFirst2, ChainRecBreadthFirst, filterE2, FromEither2, fromEitherK2, unsafeInsertAt3, unsafeUpdateAt3, unsafeDeleteAt, every2, some2, exists, intercalate3, Do, bindTo2, let_2, bind2, apS2, chain, range3, empty3, cons3, snoc3, prependToAll, array;
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
  URI2 = "Array";
  getShow3 = getShow2;
  getSemigroup4 = function() {
    return {
      concat: function(first2, second) {
        return first2.concat(second);
      }
    };
  };
  getMonoid4 = function() {
    return {
      concat: getSemigroup4().concat,
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
    URI: URI2,
    map: _map
  };
  flap2 = flap(Functor2);
  Pointed = {
    URI: URI2,
    of: of3
  };
  FunctorWithIndex = {
    URI: URI2,
    map: _map,
    mapWithIndex: _mapWithIndex
  };
  Apply3 = {
    URI: URI2,
    map: _map,
    ap: _ap
  };
  apFirst2 = apFirst(Apply3);
  apSecond2 = apSecond(Apply3);
  Applicative = {
    URI: URI2,
    map: _map,
    ap: _ap,
    of: of3
  };
  Chain3 = {
    URI: URI2,
    map: _map,
    ap: _ap,
    chain: flatMap
  };
  chainFirst2 = chainFirst(Chain3);
  Monad = {
    URI: URI2,
    map: _map,
    ap: _ap,
    of: of3,
    chain: flatMap
  };
  Unfoldable = {
    URI: URI2,
    unfold
  };
  Alt = {
    URI: URI2,
    map: _map,
    alt: _alt
  };
  Zero2 = {
    URI: URI2,
    zero
  };
  guard2 = guard(Zero2, Pointed);
  Alternative = {
    URI: URI2,
    map: _map,
    ap: _ap,
    of: of3,
    alt: _alt,
    zero
  };
  Extend = {
    URI: URI2,
    map: _map,
    extend: _extend
  };
  Compactable = {
    URI: URI2,
    compact,
    separate
  };
  Filterable = {
    URI: URI2,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
  };
  FilterableWithIndex = {
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
    filterWithIndex: _filterWithIndex
  };
  Foldable = {
    URI: URI2,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
  };
  FoldableWithIndex = {
    URI: URI2,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
  };
  Traversable = {
    URI: URI2,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
  };
  TraversableWithIndex = {
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
    traverseWithIndex: _traverseWithIndex
  };
  _wither = witherDefault(Traversable, Compactable);
  _wilt = wiltDefault(Traversable, Compactable);
  Witherable2 = {
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
    wilt: _wilt
  };
  chainRecDepthFirst2 = chainRecDepthFirst;
  ChainRecDepthFirst = {
    URI: URI2,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecDepthFirst2
  };
  chainRecBreadthFirst2 = chainRecBreadthFirst;
  ChainRecBreadthFirst = {
    URI: URI2,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecBreadthFirst2
  };
  filterE2 = filterE(Witherable2);
  FromEither2 = {
    URI: URI2,
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
  empty3 = [];
  cons3 = cons;
  snoc3 = snoc;
  prependToAll = prependAll3;
  array = {
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
    wilt: _wilt
  };
});

// node_modules/fp-ts/es6/Predicate.js
var getSemigroupAny, getMonoidAny, not, or;
var init_Predicate = __esm(() => {
  init_function();
  getSemigroupAny = function() {
    return {
      concat: function(first2, second) {
        return pipe(first2, or(second));
      }
    };
  };
  getMonoidAny = function() {
    return {
      concat: getSemigroupAny().concat,
      empty: constFalse
    };
  };
  not = function(predicate) {
    return function(a) {
      return !predicate(a);
    };
  };
  or = function(second) {
    return function(first2) {
      return function(a) {
        return first2(a) || second(a);
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
      return getMonoid5;
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
      return URI3;
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
var none2, some3, getLeft, getRight, _map2, _ap2, _reduce2, _foldMap2, _reduceRight2, _traverse2, _alt2, _filter2, _filterMap2, _extend2, _partition2, _partitionMap2, URI3, getShow4, getEq4, getOrd3, getMonoid5, map2, Functor4, as2, asUnit2, of4, Pointed2, ap3, Apply5, Applicative3, flatMap2, Chain4, Monad2, reduce4, foldMap4, reduceRight4, Foldable2, orElse, altW2, alt2, Alt2, zero2, Zero4, guard3, Alternative2, extend2, Extend2, compact2, defaultSeparated, separate2, Compactable2, filter2, filterMap2, partition2, partitionMap2, Filterable2, traverse2, sequence2, Traversable2, _wither2, _wilt2, wither2, wilt2, Witherable4, throwError, MonadThrow, fromEither2, FromEither4, isSome2, isNone2, matchW3, foldW, match3, fold, getOrElseW, getOrElse, flap3, apFirst3, apSecond3, flatten2, tap2, tapEither2, duplicate2, fromEitherK3, chainEitherK2, chainFirstEitherK, fromNullable, tryCatch, tryCatchK, fromNullableK, chainNullableK, toNullable, toUndefined, exists2, Do2, bindTo3, let_3, bind3, apS3, ApT, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyArrayWithIndex, traverseArrayWithIndex, traverseArray, sequenceArray, chain2, chainFirst3, mapNullable, option, getApplySemigroup2, getApplyMonoid, getFirstMonoid, getLastMonoid;
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
  URI3 = "Option";
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
  getMonoid5 = function(S) {
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
    URI: URI3,
    map: _map2
  };
  as2 = dual(2, as(Functor4));
  asUnit2 = asUnit(Functor4);
  of4 = some3;
  Pointed2 = {
    URI: URI3,
    of: of4
  };
  ap3 = function(fa) {
    return function(fab) {
      return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some3(fab.value(fa.value));
    };
  };
  Apply5 = {
    URI: URI3,
    map: _map2,
    ap: _ap2
  };
  Applicative3 = {
    URI: URI3,
    map: _map2,
    ap: _ap2,
    of: of4
  };
  flatMap2 = dual(2, function(ma, f) {
    return isNone2(ma) ? none2 : f(ma.value);
  });
  Chain4 = {
    URI: URI3,
    map: _map2,
    ap: _ap2,
    chain: flatMap2
  };
  Monad2 = {
    URI: URI3,
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
    URI: URI3,
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
    URI: URI3,
    map: _map2,
    alt: _alt2
  };
  zero2 = function() {
    return none2;
  };
  Zero4 = {
    URI: URI3,
    zero: zero2
  };
  guard3 = guard(Zero4, Pointed2);
  Alternative2 = {
    URI: URI3,
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
    URI: URI3,
    map: _map2,
    extend: _extend2
  };
  compact2 = flatMap2(identity);
  defaultSeparated = separated(none2, none2);
  separate2 = function(ma) {
    return isNone2(ma) ? defaultSeparated : separated(getLeft(ma.value), getRight(ma.value));
  };
  Compactable2 = {
    URI: URI3,
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
    URI: URI3,
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
    URI: URI3,
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
    URI: URI3,
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
    URI: URI3,
    map: _map2,
    ap: _ap2,
    of: of4,
    chain: flatMap2,
    throwError
  };
  fromEither2 = getRight;
  FromEither4 = {
    URI: URI3,
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
    URI: URI3,
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
    return getMonoid5(first());
  };
  getLastMonoid = function() {
    return getMonoid5(last());
  };
});

// node_modules/fp-ts/es6/Endomorphism.js
var getSemigroup5, getMonoid6;
var init_Endomorphism = __esm(() => {
  init_function();
  getSemigroup5 = function() {
    return {
      concat: function(first2, second) {
        return flow(first2, second);
      }
    };
  };
  getMonoid6 = function() {
    return {
      concat: getSemigroup5().concat,
      empty: identity
    };
  };
});

// node_modules/fp-ts/es6/FromIO.js
function fromIOK(F) {
  return function(f) {
    return flow(f, F.fromIO);
  };
}
function tapIO(F, M) {
  var chainFirstM = tap(M);
  return function(self, f) {
    return chainFirstM(self, flow(f, F.fromIO));
  };
}
var init_FromIO = __esm(() => {
  init_Chain();
  init_function();
});

// node_modules/fp-ts/es6/ReadonlyMap.js
function lookupWithKey(E) {
  return function(k, m) {
    if (m === undefined) {
      var lookupWithKeyE_1 = lookupWithKey(E);
      return function(m2) {
        return lookupWithKeyE_1(k, m2);
      };
    }
    var entries = m.entries();
    var e;
    while (!(e = entries.next()).done) {
      var _a = e.value, ka = _a[0], a = _a[1];
      if (E.equals(ka, k)) {
        return some([ka, a]);
      }
    }
    return none;
  };
}
function lookup3(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function(k, m) {
    if (m === undefined) {
      var lookupE_1 = lookup3(E);
      return function(m2) {
        return lookupE_1(k, m2);
      };
    }
    return pipe(lookupWithKeyE(k, m), map2(function(_a) {
      var _ = _a[0], a = _a[1];
      return a;
    }));
  };
}
var empty4;
var init_ReadonlyMap = __esm(() => {
  init_function();
  init_internal();
  init_Option();
  empty4 = new Map;
});

// node_modules/fp-ts/es6/Map.js
var lookup4, empty5;
var init_Map = __esm(() => {
  init_ReadonlyMap();
  lookup4 = lookup3;
  empty5 = new Map;
});

// node_modules/fp-ts/es6/Monoid.js
var concatAll4, monoidVoid, monoidAll, monoidAny, monoidString, monoidSum, monoidProduct;
var init_Monoid = __esm(() => {
  init_Semigroup();
  concatAll4 = function(M) {
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

// node_modules/fp-ts/es6/Task.js
var exports_Task = {};
__export(exports_Task, {
  traverseSeqArrayWithIndex: () => {
    {
      return traverseSeqArrayWithIndex;
    }
  },
  traverseSeqArray: () => {
    {
      return traverseSeqArray;
    }
  },
  traverseReadonlyNonEmptyArrayWithIndexSeq: () => {
    {
      return traverseReadonlyNonEmptyArrayWithIndexSeq;
    }
  },
  traverseReadonlyNonEmptyArrayWithIndex: () => {
    {
      return traverseReadonlyNonEmptyArrayWithIndex2;
    }
  },
  traverseReadonlyArrayWithIndexSeq: () => {
    {
      return traverseReadonlyArrayWithIndexSeq;
    }
  },
  traverseReadonlyArrayWithIndex: () => {
    {
      return traverseReadonlyArrayWithIndex2;
    }
  },
  traverseArrayWithIndex: () => {
    {
      return traverseArrayWithIndex2;
    }
  },
  traverseArray: () => {
    {
      return traverseArray2;
    }
  },
  taskSeq: () => {
    {
      return taskSeq;
    }
  },
  task: () => {
    {
      return task;
    }
  },
  tapIO: () => {
    {
      return tapIO2;
    }
  },
  tap: () => {
    {
      return tap3;
    }
  },
  sequenceSeqArray: () => {
    {
      return sequenceSeqArray;
    }
  },
  sequenceArray: () => {
    {
      return sequenceArray2;
    }
  },
  of: () => {
    {
      return of5;
    }
  },
  never: () => {
    {
      return never;
    }
  },
  map: () => {
    {
      return map3;
    }
  },
  let: () => {
    {
      return let_4;
    }
  },
  getSemigroup: () => {
    {
      return getSemigroup6;
    }
  },
  getRaceMonoid: () => {
    {
      return getRaceMonoid;
    }
  },
  getMonoid: () => {
    {
      return getMonoid7;
    }
  },
  fromTask: () => {
    {
      return fromTask;
    }
  },
  fromIOK: () => {
    {
      return fromIOK2;
    }
  },
  fromIO: () => {
    {
      return fromIO;
    }
  },
  flatten: () => {
    {
      return flatten3;
    }
  },
  flatMapIO: () => {
    {
      return flatMapIO2;
    }
  },
  flatMap: () => {
    {
      return flatMap3;
    }
  },
  flap: () => {
    {
      return flap4;
    }
  },
  delay: () => {
    {
      return delay;
    }
  },
  chainIOK: () => {
    {
      return chainIOK;
    }
  },
  chainFirstIOK: () => {
    {
      return chainFirstIOK;
    }
  },
  chainFirst: () => {
    {
      return chainFirst4;
    }
  },
  chain: () => {
    {
      return chain3;
    }
  },
  bindTo: () => {
    {
      return bindTo4;
    }
  },
  bind: () => {
    {
      return bind4;
    }
  },
  asUnit: () => {
    {
      return asUnit3;
    }
  },
  as: () => {
    {
      return as3;
    }
  },
  apSecond: () => {
    {
      return apSecond4;
    }
  },
  apS: () => {
    {
      return apS4;
    }
  },
  apFirst: () => {
    {
      return apFirst4;
    }
  },
  ap: () => {
    {
      return ap4;
    }
  },
  URI: () => {
    {
      return URI4;
    }
  },
  Pointed: () => {
    {
      return Pointed3;
    }
  },
  MonadTask: () => {
    {
      return MonadTask;
    }
  },
  MonadIO: () => {
    {
      return MonadIO;
    }
  },
  Monad: () => {
    {
      return Monad3;
    }
  },
  Functor: () => {
    {
      return Functor6;
    }
  },
  FromTask: () => {
    {
      return FromTask;
    }
  },
  FromIO: () => {
    {
      return FromIO2;
    }
  },
  Do: () => {
    {
      return Do3;
    }
  },
  Chain: () => {
    {
      return Chain6;
    }
  },
  ApplySeq: () => {
    {
      return ApplySeq;
    }
  },
  ApplyPar: () => {
    {
      return ApplyPar;
    }
  },
  ApplicativeSeq: () => {
    {
      return ApplicativeSeq;
    }
  },
  ApplicativePar: () => {
    {
      return ApplicativePar;
    }
  },
  ApT: () => {
    {
      return ApT2;
    }
  }
});
function delay(millis) {
  return function(ma) {
    return function() {
      return new Promise(function(resolve) {
        setTimeout(function() {
          Promise.resolve().then(ma).then(resolve);
        }, millis);
      });
    };
  };
}
function getRaceMonoid() {
  return {
    concat: function(x, y) {
      return function() {
        return Promise.race([Promise.resolve().then(x), Promise.resolve().then(y)]);
      };
    },
    empty: never
  };
}
var fromIO, _map3, _apPar, _apSeq, map3, ap4, of5, flatMap3, flatten3, URI4, Functor6, as3, asUnit3, flap4, Pointed3, ApplyPar, apFirst4, apSecond4, ApplicativePar, ApplySeq, ApplicativeSeq, Chain6, Monad3, MonadIO, fromTask, MonadTask, FromIO2, _FlatMap, _FromIO, flatMapIO2, tap3, tapIO2, fromIOK2, chainIOK, chainFirstIOK, FromTask, never, Do3, bindTo4, let_4, bind4, apS4, ApT2, traverseReadonlyNonEmptyArrayWithIndex2, traverseReadonlyArrayWithIndex2, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseReadonlyArrayWithIndexSeq, traverseArrayWithIndex2, traverseArray2, sequenceArray2, traverseSeqArrayWithIndex, traverseSeqArray, sequenceSeqArray, chain3, chainFirst4, task, taskSeq, getSemigroup6, getMonoid7;
var init_Task = __esm(() => {
  init_Applicative();
  init_Apply();
  init_Chain();
  init_FromIO();
  init_function();
  init_Functor();
  init_internal();
  fromIO = function(ma) {
    return function() {
      return Promise.resolve().then(ma);
    };
  };
  _map3 = function(fa, f) {
    return pipe(fa, map3(f));
  };
  _apPar = function(fab, fa) {
    return pipe(fab, ap4(fa));
  };
  _apSeq = function(fab, fa) {
    return flatMap3(fab, function(f) {
      return pipe(fa, map3(f));
    });
  };
  map3 = function(f) {
    return function(fa) {
      return function() {
        return Promise.resolve().then(fa).then(f);
      };
    };
  };
  ap4 = function(fa) {
    return function(fab) {
      return function() {
        return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function(_a) {
          var f = _a[0], a = _a[1];
          return f(a);
        });
      };
    };
  };
  of5 = function(a) {
    return function() {
      return Promise.resolve(a);
    };
  };
  flatMap3 = dual(2, function(ma, f) {
    return function() {
      return Promise.resolve().then(ma).then(function(a) {
        return f(a)();
      });
    };
  });
  flatten3 = flatMap3(identity);
  URI4 = "Task";
  Functor6 = {
    URI: URI4,
    map: _map3
  };
  as3 = dual(2, as(Functor6));
  asUnit3 = asUnit(Functor6);
  flap4 = flap(Functor6);
  Pointed3 = {
    URI: URI4,
    of: of5
  };
  ApplyPar = {
    URI: URI4,
    map: _map3,
    ap: _apPar
  };
  apFirst4 = apFirst(ApplyPar);
  apSecond4 = apSecond(ApplyPar);
  ApplicativePar = {
    URI: URI4,
    map: _map3,
    ap: _apPar,
    of: of5
  };
  ApplySeq = {
    URI: URI4,
    map: _map3,
    ap: _apSeq
  };
  ApplicativeSeq = {
    URI: URI4,
    map: _map3,
    ap: _apSeq,
    of: of5
  };
  Chain6 = {
    URI: URI4,
    map: _map3,
    ap: _apPar,
    chain: flatMap3
  };
  Monad3 = {
    URI: URI4,
    map: _map3,
    of: of5,
    ap: _apPar,
    chain: flatMap3
  };
  MonadIO = {
    URI: URI4,
    map: _map3,
    of: of5,
    ap: _apPar,
    chain: flatMap3,
    fromIO
  };
  fromTask = identity;
  MonadTask = {
    URI: URI4,
    map: _map3,
    of: of5,
    ap: _apPar,
    chain: flatMap3,
    fromIO,
    fromTask
  };
  FromIO2 = {
    URI: URI4,
    fromIO
  };
  _FlatMap = {
    flatMap: flatMap3
  };
  _FromIO = {
    fromIO: FromIO2.fromIO
  };
  flatMapIO2 = flatMapIO(_FromIO, _FlatMap);
  tap3 = dual(2, tap(Chain6));
  tapIO2 = dual(2, tapIO(FromIO2, Chain6));
  fromIOK2 = fromIOK(FromIO2);
  chainIOK = flatMapIO2;
  chainFirstIOK = tapIO2;
  FromTask = {
    URI: URI4,
    fromIO,
    fromTask
  };
  never = function() {
    return new Promise(function(_) {
      return;
    });
  };
  Do3 = of5(emptyRecord);
  bindTo4 = bindTo(Functor6);
  let_4 = let_(Functor6);
  bind4 = bind(Chain6);
  apS4 = apS(ApplyPar);
  ApT2 = of5(emptyReadonlyArray);
  traverseReadonlyNonEmptyArrayWithIndex2 = function(f) {
    return function(as4) {
      return function() {
        return Promise.all(as4.map(function(a, i) {
          return Promise.resolve().then(function() {
            return f(i, a)();
          });
        }));
      };
    };
  };
  traverseReadonlyArrayWithIndex2 = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex2(f);
    return function(as4) {
      return isNonEmpty(as4) ? g(as4) : ApT2;
    };
  };
  traverseReadonlyNonEmptyArrayWithIndexSeq = function(f) {
    return function(as4) {
      return function() {
        return tail(as4).reduce(function(acc, a, i) {
          return acc.then(function(bs) {
            return Promise.resolve().then(f(i + 1, a)).then(function(b) {
              bs.push(b);
              return bs;
            });
          });
        }, Promise.resolve().then(f(0, head(as4))).then(singleton));
      };
    };
  };
  traverseReadonlyArrayWithIndexSeq = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
    return function(as4) {
      return isNonEmpty(as4) ? g(as4) : ApT2;
    };
  };
  traverseArrayWithIndex2 = traverseReadonlyArrayWithIndex2;
  traverseArray2 = function(f) {
    return traverseReadonlyArrayWithIndex2(function(_, a) {
      return f(a);
    });
  };
  sequenceArray2 = traverseArray2(identity);
  traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
  traverseSeqArray = function(f) {
    return traverseReadonlyArrayWithIndexSeq(function(_, a) {
      return f(a);
    });
  };
  sequenceSeqArray = traverseSeqArray(identity);
  chain3 = flatMap3;
  chainFirst4 = tap3;
  task = {
    URI: URI4,
    map: _map3,
    of: of5,
    ap: _apPar,
    chain: flatMap3,
    fromIO,
    fromTask
  };
  taskSeq = {
    URI: URI4,
    map: _map3,
    of: of5,
    ap: _apSeq,
    chain: flatMap3,
    fromIO,
    fromTask
  };
  getSemigroup6 = getApplySemigroup(ApplySeq);
  getMonoid7 = getApplicativeMonoid(ApplicativeSeq);
});

// node_modules/fp-ts/es6/string.js
var exports_string = {};
__export(exports_string, {
  trimRight: () => {
    {
      return trimRight;
    }
  },
  trimLeft: () => {
    {
      return trimLeft;
    }
  },
  trim: () => {
    {
      return trim;
    }
  },
  toUpperCase: () => {
    {
      return toUpperCase;
    }
  },
  toLowerCase: () => {
    {
      return toLowerCase;
    }
  },
  startsWith: () => {
    {
      return startsWith;
    }
  },
  split: () => {
    {
      return split;
    }
  },
  slice: () => {
    {
      return slice;
    }
  },
  size: () => {
    {
      return size3;
    }
  },
  replace: () => {
    {
      return replace;
    }
  },
  isString: () => {
    {
      return isString;
    }
  },
  isEmpty: () => {
    {
      return isEmpty3;
    }
  },
  includes: () => {
    {
      return includes;
    }
  },
  endsWith: () => {
    {
      return endsWith;
    }
  },
  empty: () => {
    {
      return empty6;
    }
  },
  Show: () => {
    {
      return Show;
    }
  },
  Semigroup: () => {
    {
      return Semigroup2;
    }
  },
  Ord: () => {
    {
      return Ord4;
    }
  },
  Monoid: () => {
    {
      return Monoid;
    }
  },
  Eq: () => {
    {
      return Eq4;
    }
  }
});
var Eq4, Semigroup2, empty6, Monoid, Ord4, Show, isString, toUpperCase, toLowerCase, replace, trim, trimLeft, trimRight, slice, isEmpty3, size3, split, includes, startsWith, endsWith;
var init_string = __esm(() => {
  init_ReadonlyNonEmptyArray();
  Eq4 = {
    equals: function(first2, second) {
      return first2 === second;
    }
  };
  Semigroup2 = {
    concat: function(first2, second) {
      return first2 + second;
    }
  };
  empty6 = "";
  Monoid = {
    concat: Semigroup2.concat,
    empty: empty6
  };
  Ord4 = {
    equals: Eq4.equals,
    compare: function(first2, second) {
      return first2 < second ? -1 : first2 > second ? 1 : 0;
    }
  };
  Show = {
    show: function(s) {
      return JSON.stringify(s);
    }
  };
  isString = function(u) {
    return typeof u === "string";
  };
  toUpperCase = function(s) {
    return s.toUpperCase();
  };
  toLowerCase = function(s) {
    return s.toLowerCase();
  };
  replace = function(searchValue, replaceValue) {
    return function(s) {
      return s.replace(searchValue, replaceValue);
    };
  };
  trim = function(s) {
    return s.trim();
  };
  trimLeft = function(s) {
    return s.trimLeft();
  };
  trimRight = function(s) {
    return s.trimRight();
  };
  slice = function(start, end) {
    return function(s) {
      return s.slice(start, end);
    };
  };
  isEmpty3 = function(s) {
    return s.length === 0;
  };
  size3 = function(s) {
    return s.length;
  };
  split = function(separator) {
    return function(s) {
      var out = s.split(separator);
      return isNonEmpty2(out) ? out : [s];
    };
  };
  includes = function(searchString, position) {
    return function(s) {
      return s.includes(searchString, position);
    };
  };
  startsWith = function(searchString, position) {
    return function(s) {
      return s.startsWith(searchString, position);
    };
  };
  endsWith = function(searchString, position) {
    return function(s) {
      return s.endsWith(searchString, position);
    };
  };
});

// node_modules/fp-ts/es6/ReadonlyRecord.js
function lookup5(k, r) {
  if (r === undefined) {
    return function(r2) {
      return lookup5(k, r2);
    };
  }
  return has.call(r, k) ? some(r[k]) : none;
}
var init_ReadonlyRecord = __esm(() => {
  init_internal();
});

// node_modules/fp-ts/es6/Record.js
var lookup6;
var init_Record = __esm(() => {
  init_ReadonlyRecord();
  lookup6 = lookup5;
});

// node_modules/fp-ts/es6/index.js
var init_es6 = __esm(() => {
  init_Array();
  init_Eq();
  init_Option();
  init_string();
  init_Task();
});

// shared/util.tsx
var mustLoadForApi, mustLoadForUtil, mustLoadForSettings, SpotifyLoc, sleep;
var init_util = __esm(() => {
  init_function();
  mustLoadForApi = ["CosmosAsync", "GraphQL", "Platform"];
  mustLoadForUtil = ["URI"];
  mustLoadForSettings = ["React", "ReactDOM"];
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
});

// node_modules/fp-ts-std/dist/esm/Function.js
var URI5, map5, Functor8, of6, ap5, Applicative5, apFirst5, apSecond5, chain4, Monad4, Do4, bindTo5, bind5, apS5, let_5, unary, guard4, unless, when, invoke, invokeNullary, memoize, curry2T, curry2, curry3T, curry3, curry4T, curry4, curry5T, curry5, applyEvery;
var init_Function = __esm(() => {
  init_Option();
  init_Map();
  init_Array();
  init_function();
  init_Predicate();
  init_Endomorphism();
  init_Monoid();
  init_Semigroup();
  init_Functor();
  init_Apply();
  init_Chain();
  URI5 = "Function";
  map5 = (f) => (g) => flow(g, f);
  Functor8 = {
    URI: URI5,
    map: (f, g) => map5(g)(f)
  };
  of6 = constant;
  ap5 = (f) => (g) => (x) => g(x)(f(x));
  Applicative5 = {
    ...Functor8,
    of: of6,
    ap: (f, g) => ap5(g)(f)
  };
  apFirst5 = apFirst(Applicative5);
  apSecond5 = apSecond(Applicative5);
  chain4 = (f) => (g) => (x) => f(g(x))(x);
  Monad4 = {
    ...Applicative5,
    chain: (f, g) => chain4(g)(f)
  };
  Do4 = of6({});
  bindTo5 = bindTo(Functor8);
  bind5 = bind(Monad4);
  apS5 = apS(Applicative5);
  let_5 = let_(Functor8);
  unary = tupled;
  guard4 = (branches) => (fallback) => (input) => pipe(branches, map(([f, g]) => flow(fromPredicate2(f), map2(g))), concatAll4(getMonoid(getMonoid5(first()))()), apply(input), getOrElse(() => fallback(input)));
  unless = (f) => (onFalse) => (x) => f(x) ? x : onFalse(x);
  when = flow(not, unless);
  invoke = (x) => (ys) => (z) => z[x](...ys);
  invokeNullary = flip(invoke)([]);
  memoize = (eq2) => (f) => {
    const cache = new Map;
    return (k) => {
      const cached = lookup4(eq2)(k)(cache);
      if (isSome2(cached))
        return cached.value;
      const val = f(k);
      cache.set(k, val);
      return val;
    };
  };
  curry2T = (f) => (a) => (b) => f([a, b]);
  curry2 = flow(unary, curry2T);
  curry3T = (f) => (a) => (b) => (c) => f([a, b, c]);
  curry3 = flow(unary, curry3T);
  curry4T = (f) => (a) => (b) => (c) => (d) => f([a, b, c, d]);
  curry4 = flow(unary, curry4T);
  curry5T = (f) => (a) => (b) => (c) => (d) => (e) => f([a, b, c, d, e]);
  curry5 = flow(unary, curry5T);
  applyEvery = concatAll4(getMonoid6());
});

// node_modules/fp-ts-std/dist/esm/Predicate.js
var anyPass;
var init_Predicate2 = __esm(() => {
  init_Predicate();
  init_Monoid();
  anyPass = (fs) => concatAll4(getMonoidAny())(fs);
});

// shared/fp.tsx
var guard42, pMchain, is, chunckify, memoize2;
var init_fp = __esm(() => {
  init_es6();
  init_Function();
  init_function();
  guard42 = (branches) => guard4(branches);
  pMchain = (f) => async (fa) => f(await fa);
  is = (c) => (a) => (field) => field[c] === a;
  chunckify = (n) => (g) => flow(exports_Array.chunksOf(n), exports_Array.map(g), (ps) => Promise.all(ps), pMchain(exports_Array.flatten));
  memoize2 = (fn) => pipe(fn, tupled, memoize(exports_Eq.contramap(JSON.stringify)(exports_string.Eq)), untupled);
});

// shared/api.tsx
var URI6, fetchGQLAlbum, removeWebPlaylistTracks, fetchWebArtistsSpot, fetchWebPlaylistsSpot, fetchWebAlbumsSpot, fetchWebTracksSpot, fetchPlatArtistLikedTracks, fetchPlatPlaylistContents, createPlatFolder, createPlatPlaylist, setPlatPlaylistVisibility, fetchPlatFolder, addPlatPlaylistTracks, fetchTrackLFMAPI, fetchTrackLFMAPIMemoized;
var init_api = __esm(() => {
  init_fp();
  init_util();
  ({ URI: URI6 } = Spicetify);
  fetchGQLAlbum = async (uri, offset = 0, limit = 487) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
    uri,
    locale: Spicetify.Locale.getLocale(),
    offset,
    limit
  })).data.albumUnion;
  removeWebPlaylistTracks = async (playlist, tracks) => Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/playlists/${playlist}/tracks`, {
    tracks: tracks.map((uri) => ({ uri }))
  });
  fetchWebArtistsSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists);
  fetchWebPlaylistsSpot = chunckify(1)(async ([id]) => [
    await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)
  ]);
  fetchWebAlbumsSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums);
  fetchWebTracksSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks);
  fetchPlatArtistLikedTracks = async (uri, offset = 0, limit = 100) => (await Spicetify.Platform.LibraryAPI.getTracks({ uri, offset, limit })).items;
  fetchPlatPlaylistContents = async (uri) => (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
  createPlatFolder = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createFolder(name, location);
  createPlatPlaylist = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createPlaylist(name, location);
  setPlatPlaylistVisibility = async (playlist, visibleForAll) => await Spicetify.Platform.PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED");
  fetchPlatFolder = async (folder) => await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder });
  addPlatPlaylistTracks = async (playlist, tracks, location = {}) => await Spicetify.Platform.PlaylistAPI.add(playlist, tracks, location);
  fetchTrackLFMAPI = async (LFMApiKey, artist, trackName, lastFmUsername = "") => {
    const url = new URL("https://ws.audioscrobbler.com/2.0/");
    url.searchParams.append("method", "track.getInfo");
    url.searchParams.append("api_key", LFMApiKey);
    url.searchParams.append("artist", artist);
    url.searchParams.append("track", trackName);
    url.searchParams.append("format", "json");
    url.searchParams.append("username", lastFmUsername);
    return await fetch(url).then((res) => res.json());
  };
  fetchTrackLFMAPIMemoized = memoize2(fetchTrackLFMAPI);
});

// node_modules/fp-ts/lib/function.js
var require_function = __commonJS((exports) => {
  var identity2 = function(a) {
    return a;
  };
  var constant3 = function(a) {
    return function() {
      return a;
    };
  };
  var flip2 = function(f) {
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
  };
  var flow2 = function(ab, bc, cd, de, ef, fg, gh, hi, ij) {
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
  };
  var tuple3 = function() {
    var t = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      t[_i] = arguments[_i];
    }
    return t;
  };
  var increment = function(n) {
    return n + 1;
  };
  var decrement = function(n) {
    return n - 1;
  };
  var absurd = function(_) {
    throw new Error("Called `absurd` function which should be uncallable");
  };
  var tupled2 = function(f) {
    return function(a) {
      return f.apply(undefined, a);
    };
  };
  var untupled2 = function(f) {
    return function() {
      var a = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return f(a);
    };
  };
  var pipe2 = function(a, ab, bc, cd, de, ef, fg, gh, hi) {
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
  };
  var not2 = function(predicate) {
    return function(a) {
      return !predicate(a);
    };
  };
  var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.dual = exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = undefined;
  var getBooleanAlgebra = function(B) {
    return function() {
      return {
        meet: function(x, y) {
          return function(a) {
            return B.meet(x(a), y(a));
          };
        },
        join: function(x, y) {
          return function(a) {
            return B.join(x(a), y(a));
          };
        },
        zero: function() {
          return B.zero;
        },
        one: function() {
          return B.one;
        },
        implies: function(x, y) {
          return function(a) {
            return B.implies(x(a), y(a));
          };
        },
        not: function(x) {
          return function(a) {
            return B.not(x(a));
          };
        }
      };
    };
  };
  exports.getBooleanAlgebra = getBooleanAlgebra;
  var getSemigroup7 = function(S) {
    return function() {
      return {
        concat: function(f, g) {
          return function(a) {
            return S.concat(f(a), g(a));
          };
        }
      };
    };
  };
  exports.getSemigroup = getSemigroup7;
  var getMonoid9 = function(M) {
    var getSemigroupM = (0, exports.getSemigroup)(M);
    return function() {
      return {
        concat: getSemigroupM().concat,
        empty: function() {
          return M.empty;
        }
      };
    };
  };
  exports.getMonoid = getMonoid9;
  var getSemiring = function(S) {
    return {
      add: function(f, g) {
        return function(x) {
          return S.add(f(x), g(x));
        };
      },
      zero: function() {
        return S.zero;
      },
      mul: function(f, g) {
        return function(x) {
          return S.mul(f(x), g(x));
        };
      },
      one: function() {
        return S.one;
      }
    };
  };
  exports.getSemiring = getSemiring;
  var getRing = function(R) {
    var S = (0, exports.getSemiring)(R);
    return {
      add: S.add,
      mul: S.mul,
      one: S.one,
      zero: S.zero,
      sub: function(f, g) {
        return function(x) {
          return R.sub(f(x), g(x));
        };
      }
    };
  };
  exports.getRing = getRing;
  var apply2 = function(a) {
    return function(f) {
      return f(a);
    };
  };
  exports.apply = apply2;
  exports.identity = identity2;
  exports.unsafeCoerce = identity2;
  exports.constant = constant3;
  exports.constTrue = constant3(true);
  exports.constFalse = constant3(false);
  exports.constNull = constant3(null);
  exports.constUndefined = constant3(undefined);
  exports.constVoid = exports.constUndefined;
  exports.flip = flip2;
  exports.flow = flow2;
  exports.tuple = tuple3;
  exports.increment = increment;
  exports.decrement = decrement;
  exports.absurd = absurd;
  exports.tupled = tupled2;
  exports.untupled = untupled2;
  exports.pipe = pipe2;
  exports.hole = absurd;
  var SK2 = function(_, b) {
    return b;
  };
  exports.SK = SK2;
  exports.not = not2;
  var getEndomorphismMonoid = function() {
    return {
      concat: function(first2, second) {
        return flow2(first2, second);
      },
      empty: identity2
    };
  };
  exports.getEndomorphismMonoid = getEndomorphismMonoid;
  var dual2 = function(arity, body) {
    var isDataFirst = typeof arity === "number" ? function(args) {
      return args.length >= arity;
    } : arity;
    return function() {
      var args = Array.from(arguments);
      if (isDataFirst(arguments)) {
        return body.apply(this, args);
      }
      return function(self) {
        return body.apply(undefined, __spreadArray6([self], args, false));
      };
    };
  };
  exports.dual = dual2;
});

// node_modules/fp-ts/lib/internal.js
var require_internal = __commonJS((exports) => {
  var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.flatMapReader = exports.flatMapTask = exports.flatMapIO = exports.flatMapEither = exports.flatMapOption = exports.flatMapNullable = exports.liftOption = exports.liftNullable = exports.fromReadonlyNonEmptyArray = exports.has = exports.emptyRecord = exports.emptyReadonlyArray = exports.tail = exports.head = exports.isNonEmpty = exports.singleton = exports.right = exports.left = exports.isRight = exports.isLeft = exports.some = exports.none = exports.isSome = exports.isNone = undefined;
  var function_1 = require_function();
  var isNone3 = function(fa) {
    return fa._tag === "None";
  };
  exports.isNone = isNone3;
  var isSome3 = function(fa) {
    return fa._tag === "Some";
  };
  exports.isSome = isSome3;
  exports.none = { _tag: "None" };
  var some5 = function(a) {
    return { _tag: "Some", value: a };
  };
  exports.some = some5;
  var isLeft2 = function(ma) {
    return ma._tag === "Left";
  };
  exports.isLeft = isLeft2;
  var isRight = function(ma) {
    return ma._tag === "Right";
  };
  exports.isRight = isRight;
  var left = function(e) {
    return { _tag: "Left", left: e };
  };
  exports.left = left;
  var right = function(a) {
    return { _tag: "Right", right: a };
  };
  exports.right = right;
  var singleton3 = function(a) {
    return [a];
  };
  exports.singleton = singleton3;
  var isNonEmpty6 = function(as4) {
    return as4.length > 0;
  };
  exports.isNonEmpty = isNonEmpty6;
  var head6 = function(as4) {
    return as4[0];
  };
  exports.head = head6;
  var tail5 = function(as4) {
    return as4.slice(1);
  };
  exports.tail = tail5;
  exports.emptyReadonlyArray = [];
  exports.emptyRecord = {};
  exports.has = Object.prototype.hasOwnProperty;
  var fromReadonlyNonEmptyArray3 = function(as4) {
    return __spreadArray6([as4[0]], as4.slice(1), true);
  };
  exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray3;
  var liftNullable = function(F) {
    return function(f, onNullable) {
      return function() {
        var a = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          a[_i] = arguments[_i];
        }
        var o = f.apply(undefined, a);
        return F.fromEither(o == null ? (0, exports.left)(onNullable.apply(undefined, a)) : (0, exports.right)(o));
      };
    };
  };
  exports.liftNullable = liftNullable;
  var liftOption = function(F) {
    return function(f, onNone) {
      return function() {
        var a = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          a[_i] = arguments[_i];
        }
        var o = f.apply(undefined, a);
        return F.fromEither((0, exports.isNone)(o) ? (0, exports.left)(onNone.apply(undefined, a)) : (0, exports.right)(o.value));
      };
    };
  };
  exports.liftOption = liftOption;
  var flatMapNullable = function(F, M) {
    return (0, function_1.dual)(3, function(self, f, onNullable) {
      return M.flatMap(self, (0, exports.liftNullable)(F)(f, onNullable));
    });
  };
  exports.flatMapNullable = flatMapNullable;
  var flatMapOption = function(F, M) {
    return (0, function_1.dual)(3, function(self, f, onNone) {
      return M.flatMap(self, (0, exports.liftOption)(F)(f, onNone));
    });
  };
  exports.flatMapOption = flatMapOption;
  var flatMapEither = function(F, M) {
    return (0, function_1.dual)(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromEither(f(a));
      });
    });
  };
  exports.flatMapEither = flatMapEither;
  var flatMapIO3 = function(F, M) {
    return (0, function_1.dual)(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromIO(f(a));
      });
    });
  };
  exports.flatMapIO = flatMapIO3;
  var flatMapTask = function(F, M) {
    return (0, function_1.dual)(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromTask(f(a));
      });
    });
  };
  exports.flatMapTask = flatMapTask;
  var flatMapReader = function(F, M) {
    return (0, function_1.dual)(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromReader(f(a));
      });
    });
  };
  exports.flatMapReader = flatMapReader;
});

// node_modules/fp-ts/lib/Apply.js
var require_Apply = __commonJS((exports) => {
  var ap6 = function(F, G) {
    return function(fa) {
      return function(fab) {
        return F.ap(F.map(fab, function(gab) {
          return function(ga) {
            return G.ap(gab, ga);
          };
        }), fa);
      };
    };
  };
  var apFirst6 = function(A) {
    return function(second) {
      return function(first2) {
        return A.ap(A.map(first2, function(a) {
          return function() {
            return a;
          };
        }), second);
      };
    };
  };
  var apSecond6 = function(A) {
    return function(second) {
      return function(first2) {
        return A.ap(A.map(first2, function() {
          return function(b) {
            return b;
          };
        }), second);
      };
    };
  };
  var apS6 = function(F) {
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
  };
  var getApplySemigroup3 = function(F) {
    return function(S) {
      return {
        concat: function(first2, second) {
          return F.ap(F.map(first2, function(x) {
            return function(y) {
              return S.concat(x, y);
            };
          }), second);
        }
      };
    };
  };
  var curried = function(f, n, acc) {
    return function(x) {
      var combined = Array(acc.length + 1);
      for (var i = 0;i < acc.length; i++) {
        combined[i] = acc[i];
      }
      combined[acc.length] = x;
      return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
    };
  };
  var getTupleConstructor = function(len) {
    if (!_.has.call(tupleConstructors, len)) {
      tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
    }
    return tupleConstructors[len];
  };
  var sequenceT = function(F) {
    return function() {
      var args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var len = args.length;
      var f = getTupleConstructor(len);
      var fas = F.map(args[0], f);
      for (var i = 1;i < len; i++) {
        fas = F.ap(fas, args[i]);
      }
      return fas;
    };
  };
  var getRecordConstructor = function(keys) {
    var len = keys.length;
    switch (len) {
      case 1:
        return function(a) {
          var _a;
          return _a = {}, _a[keys[0]] = a, _a;
        };
      case 2:
        return function(a) {
          return function(b) {
            var _a;
            return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a;
          };
        };
      case 3:
        return function(a) {
          return function(b) {
            return function(c) {
              var _a;
              return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a;
            };
          };
        };
      case 4:
        return function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                var _a;
                return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a[keys[3]] = d, _a;
              };
            };
          };
        };
      case 5:
        return function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  var _a;
                  return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a[keys[3]] = d, _a[keys[4]] = e, _a;
                };
              };
            };
          };
        };
      default:
        return curried(function() {
          var args = [];
          for (var _i = 0;_i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var r = {};
          for (var i = 0;i < len; i++) {
            r[keys[i]] = args[i];
          }
          return r;
        }, len - 1, []);
    }
  };
  var sequenceS = function(F) {
    return function(r) {
      var keys = Object.keys(r);
      var len = keys.length;
      var f = getRecordConstructor(keys);
      var fr = F.map(r[keys[0]], f);
      for (var i = 1;i < len; i++) {
        fr = F.ap(fr, r[keys[i]]);
      }
      return fr;
    };
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = undefined;
  var function_1 = require_function();
  var _ = __importStar(require_internal());
  exports.ap = ap6;
  exports.apFirst = apFirst6;
  exports.apSecond = apSecond6;
  exports.apS = apS6;
  exports.getApplySemigroup = getApplySemigroup3;
  var tupleConstructors = {
    1: function(a) {
      return [a];
    },
    2: function(a) {
      return function(b) {
        return [a, b];
      };
    },
    3: function(a) {
      return function(b) {
        return function(c) {
          return [a, b, c];
        };
      };
    },
    4: function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return [a, b, c, d];
          };
        };
      };
    },
    5: function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return [a, b, c, d, e];
            };
          };
        };
      };
    }
  };
  exports.sequenceT = sequenceT;
  exports.sequenceS = sequenceS;
});

// node_modules/fp-ts/lib/Chain.js
var require_Chain = __commonJS((exports) => {
  var chainFirst5 = function(M) {
    var tapM = tap4(M);
    return function(f) {
      return function(first2) {
        return tapM(first2, f);
      };
    };
  };
  var tap4 = function(M) {
    return function(first2, f) {
      return M.chain(first2, function(a) {
        return M.map(f(a), function() {
          return a;
        });
      });
    };
  };
  var bind6 = function(M) {
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
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bind = exports.tap = exports.chainFirst = undefined;
  exports.chainFirst = chainFirst5;
  exports.tap = tap4;
  exports.bind = bind6;
});

// node_modules/fp-ts/lib/Eq.js
var require_Eq = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.eqDate = exports.eqNumber = exports.eqString = exports.eqBoolean = exports.eq = exports.strictEqual = exports.getStructEq = exports.getTupleEq = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.eqStrict = exports.URI = exports.contramap = exports.tuple = exports.struct = exports.fromEquals = undefined;
  var function_1 = require_function();
  var fromEquals2 = function(equals) {
    return {
      equals: function(x, y) {
        return x === y || equals(x, y);
      }
    };
  };
  exports.fromEquals = fromEquals2;
  var struct3 = function(eqs) {
    return (0, exports.fromEquals)(function(first2, second) {
      for (var key in eqs) {
        if (!eqs[key].equals(first2[key], second[key])) {
          return false;
        }
      }
      return true;
    });
  };
  exports.struct = struct3;
  var tuple3 = function() {
    var eqs = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      eqs[_i] = arguments[_i];
    }
    return (0, exports.fromEquals)(function(first2, second) {
      return eqs.every(function(E, i) {
        return E.equals(first2[i], second[i]);
      });
    });
  };
  exports.tuple = tuple3;
  var contramap_2 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.contramap)(f));
  };
  var contramap2 = function(f) {
    return function(fa) {
      return (0, exports.fromEquals)(function(x, y) {
        return fa.equals(f(x), f(y));
      });
    };
  };
  exports.contramap = contramap2;
  exports.URI = "Eq";
  exports.eqStrict = {
    equals: function(a, b) {
      return a === b;
    }
  };
  var empty7 = {
    equals: function() {
      return true;
    }
  };
  var getSemigroup7 = function() {
    return {
      concat: function(x, y) {
        return (0, exports.fromEquals)(function(a, b) {
          return x.equals(a, b) && y.equals(a, b);
        });
      }
    };
  };
  exports.getSemigroup = getSemigroup7;
  var getMonoid9 = function() {
    return {
      concat: (0, exports.getSemigroup)().concat,
      empty: empty7
    };
  };
  exports.getMonoid = getMonoid9;
  exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_2
  };
  exports.getTupleEq = exports.tuple;
  exports.getStructEq = exports.struct;
  exports.strictEqual = exports.eqStrict.equals;
  exports.eq = exports.Contravariant;
  exports.eqBoolean = exports.eqStrict;
  exports.eqString = exports.eqStrict;
  exports.eqNumber = exports.eqStrict;
  exports.eqDate = {
    equals: function(first2, second) {
      return first2.valueOf() === second.valueOf();
    }
  };
});

// node_modules/fp-ts/lib/Functor.js
var require_Functor = __commonJS((exports) => {
  var map6 = function(F, G) {
    return function(f) {
      return function(fa) {
        return F.map(fa, function(ga) {
          return G.map(ga, f);
        });
      };
    };
  };
  var flap5 = function(F) {
    return function(a) {
      return function(fab) {
        return F.map(fab, function(f) {
          return f(a);
        });
      };
    };
  };
  var bindTo6 = function(F) {
    return function(name) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return _a = {}, _a[name] = a, _a;
        });
      };
    };
  };
  var let_6 = function(F) {
    return function(name, f) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f(a), _a));
        });
      };
    };
  };
  var getFunctorComposition = function(F, G) {
    var _map5 = map6(F, G);
    return {
      map: function(fga, f) {
        return (0, function_1.pipe)(fga, _map5(f));
      }
    };
  };
  var as4 = function(F) {
    return function(self, b) {
      return F.map(self, function() {
        return b;
      });
    };
  };
  var asUnit4 = function(F) {
    var asM = as4(F);
    return function(self) {
      return asM(self, undefined);
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.asUnit = exports.as = exports.getFunctorComposition = exports.let = exports.bindTo = exports.flap = exports.map = undefined;
  var function_1 = require_function();
  exports.map = map6;
  exports.flap = flap5;
  exports.bindTo = bindTo6;
  exports.let = let_6;
  exports.getFunctorComposition = getFunctorComposition;
  exports.as = as4;
  exports.asUnit = asUnit4;
});

// node_modules/fp-ts/lib/Ord.js
var require_Ord = __commonJS((exports) => {
  var compare2 = function(first2, second) {
    return first2 < second ? -1 : first2 > second ? 1 : 0;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ordDate = exports.ordNumber = exports.ordString = exports.ordBoolean = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.equals = exports.trivial = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.URI = exports.contramap = exports.reverse = exports.tuple = exports.fromCompare = exports.equalsDefault = undefined;
  var Eq_1 = require_Eq();
  var function_1 = require_function();
  var equalsDefault2 = function(compare3) {
    return function(first2, second) {
      return first2 === second || compare3(first2, second) === 0;
    };
  };
  exports.equalsDefault = equalsDefault2;
  var fromCompare2 = function(compare3) {
    return {
      equals: (0, exports.equalsDefault)(compare3),
      compare: function(first2, second) {
        return first2 === second ? 0 : compare3(first2, second);
      }
    };
  };
  exports.fromCompare = fromCompare2;
  var tuple3 = function() {
    var ords = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      ords[_i] = arguments[_i];
    }
    return (0, exports.fromCompare)(function(first2, second) {
      var i = 0;
      for (;i < ords.length - 1; i++) {
        var r = ords[i].compare(first2[i], second[i]);
        if (r !== 0) {
          return r;
        }
      }
      return ords[i].compare(first2[i], second[i]);
    });
  };
  exports.tuple = tuple3;
  var reverse4 = function(O) {
    return (0, exports.fromCompare)(function(first2, second) {
      return O.compare(second, first2);
    });
  };
  exports.reverse = reverse4;
  var contramap_2 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.contramap)(f));
  };
  var contramap2 = function(f) {
    return function(fa) {
      return (0, exports.fromCompare)(function(first2, second) {
        return fa.compare(f(first2), f(second));
      });
    };
  };
  exports.contramap = contramap2;
  exports.URI = "Ord";
  var getSemigroup7 = function() {
    return {
      concat: function(first2, second) {
        return (0, exports.fromCompare)(function(a, b) {
          var ox = first2.compare(a, b);
          return ox !== 0 ? ox : second.compare(a, b);
        });
      }
    };
  };
  exports.getSemigroup = getSemigroup7;
  var getMonoid9 = function() {
    return {
      concat: (0, exports.getSemigroup)().concat,
      empty: (0, exports.fromCompare)(function() {
        return 0;
      })
    };
  };
  exports.getMonoid = getMonoid9;
  exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_2
  };
  exports.trivial = {
    equals: function_1.constTrue,
    compare: (0, function_1.constant)(0)
  };
  var equals = function(O) {
    return function(second) {
      return function(first2) {
        return first2 === second || O.compare(first2, second) === 0;
      };
    };
  };
  exports.equals = equals;
  var lt = function(O) {
    return function(first2, second) {
      return O.compare(first2, second) === -1;
    };
  };
  exports.lt = lt;
  var gt = function(O) {
    return function(first2, second) {
      return O.compare(first2, second) === 1;
    };
  };
  exports.gt = gt;
  var leq = function(O) {
    return function(first2, second) {
      return O.compare(first2, second) !== 1;
    };
  };
  exports.leq = leq;
  var geq = function(O) {
    return function(first2, second) {
      return O.compare(first2, second) !== -1;
    };
  };
  exports.geq = geq;
  var min3 = function(O) {
    return function(first2, second) {
      return first2 === second || O.compare(first2, second) < 1 ? first2 : second;
    };
  };
  exports.min = min3;
  var max3 = function(O) {
    return function(first2, second) {
      return first2 === second || O.compare(first2, second) > -1 ? first2 : second;
    };
  };
  exports.max = max3;
  var clamp = function(O) {
    var minO = (0, exports.min)(O);
    var maxO = (0, exports.max)(O);
    return function(low, hi) {
      return function(a) {
        return maxO(minO(a, hi), low);
      };
    };
  };
  exports.clamp = clamp;
  var between = function(O) {
    var ltO = (0, exports.lt)(O);
    var gtO = (0, exports.gt)(O);
    return function(low, hi) {
      return function(a) {
        return ltO(a, low) || gtO(a, hi) ? false : true;
      };
    };
  };
  exports.between = between;
  exports.getTupleOrd = exports.tuple;
  exports.getDualOrd = exports.reverse;
  exports.ord = exports.Contravariant;
  var strictOrd2 = {
    equals: Eq_1.eqStrict.equals,
    compare: compare2
  };
  exports.ordBoolean = strictOrd2;
  exports.ordString = strictOrd2;
  exports.ordNumber = strictOrd2;
  exports.ordDate = (0, function_1.pipe)(exports.ordNumber, (0, exports.contramap)(function(date) {
    return date.valueOf();
  }));
});

// node_modules/fp-ts/lib/Magma.js
var require_Magma = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.concatAll = exports.endo = exports.filterSecond = exports.filterFirst = exports.reverse = undefined;
  var reverse4 = function(M) {
    return {
      concat: function(first2, second) {
        return M.concat(second, first2);
      }
    };
  };
  exports.reverse = reverse4;
  var filterFirst = function(predicate) {
    return function(M) {
      return {
        concat: function(first2, second) {
          return predicate(first2) ? M.concat(first2, second) : second;
        }
      };
    };
  };
  exports.filterFirst = filterFirst;
  var filterSecond = function(predicate) {
    return function(M) {
      return {
        concat: function(first2, second) {
          return predicate(second) ? M.concat(first2, second) : first2;
        }
      };
    };
  };
  exports.filterSecond = filterSecond;
  var endo = function(f) {
    return function(M) {
      return {
        concat: function(first2, second) {
          return M.concat(f(first2), f(second));
        }
      };
    };
  };
  exports.endo = endo;
  var concatAll5 = function(M) {
    return function(startWith) {
      return function(as4) {
        return as4.reduce(function(a, acc) {
          return M.concat(a, acc);
        }, startWith);
      };
    };
  };
  exports.concatAll = concatAll5;
});

// node_modules/fp-ts/lib/Semigroup.js
var require_Semigroup = __commonJS((exports) => {
  var fold2 = function(S) {
    var concatAllS = (0, exports.concatAll)(S);
    return function(startWith, as4) {
      return as4 === undefined ? concatAllS(startWith) : concatAllS(startWith)(as4);
    };
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.semigroupProduct = exports.semigroupSum = exports.semigroupString = exports.getFunctionSemigroup = exports.semigroupAny = exports.semigroupAll = exports.fold = exports.getIntercalateSemigroup = exports.getMeetSemigroup = exports.getJoinSemigroup = exports.getDualSemigroup = exports.getStructSemigroup = exports.getTupleSemigroup = exports.getFirstSemigroup = exports.getLastSemigroup = exports.getObjectSemigroup = exports.semigroupVoid = exports.concatAll = exports.last = exports.first = exports.intercalate = exports.tuple = exports.struct = exports.reverse = exports.constant = exports.max = exports.min = undefined;
  var function_1 = require_function();
  var _ = __importStar(require_internal());
  var M = __importStar(require_Magma());
  var Or = __importStar(require_Ord());
  var min3 = function(O) {
    return {
      concat: Or.min(O)
    };
  };
  exports.min = min3;
  var max3 = function(O) {
    return {
      concat: Or.max(O)
    };
  };
  exports.max = max3;
  var constant3 = function(a) {
    return {
      concat: function() {
        return a;
      }
    };
  };
  exports.constant = constant3;
  exports.reverse = M.reverse;
  var struct3 = function(semigroups) {
    return {
      concat: function(first3, second) {
        var r = {};
        for (var k in semigroups) {
          if (_.has.call(semigroups, k)) {
            r[k] = semigroups[k].concat(first3[k], second[k]);
          }
        }
        return r;
      }
    };
  };
  exports.struct = struct3;
  var tuple3 = function() {
    var semigroups = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      semigroups[_i] = arguments[_i];
    }
    return {
      concat: function(first3, second) {
        return semigroups.map(function(s, i) {
          return s.concat(first3[i], second[i]);
        });
      }
    };
  };
  exports.tuple = tuple3;
  var intercalate4 = function(middle) {
    return function(S) {
      return {
        concat: function(x, y) {
          return S.concat(x, S.concat(middle, y));
        }
      };
    };
  };
  exports.intercalate = intercalate4;
  var first2 = function() {
    return { concat: function_1.identity };
  };
  exports.first = first2;
  var last6 = function() {
    return { concat: function(_2, y) {
      return y;
    } };
  };
  exports.last = last6;
  exports.concatAll = M.concatAll;
  exports.semigroupVoid = (0, exports.constant)(undefined);
  var getObjectSemigroup = function() {
    return {
      concat: function(first3, second) {
        return Object.assign({}, first3, second);
      }
    };
  };
  exports.getObjectSemigroup = getObjectSemigroup;
  exports.getLastSemigroup = exports.last;
  exports.getFirstSemigroup = exports.first;
  exports.getTupleSemigroup = exports.tuple;
  exports.getStructSemigroup = exports.struct;
  exports.getDualSemigroup = exports.reverse;
  exports.getJoinSemigroup = exports.max;
  exports.getMeetSemigroup = exports.min;
  exports.getIntercalateSemigroup = exports.intercalate;
  exports.fold = fold2;
  exports.semigroupAll = {
    concat: function(x, y) {
      return x && y;
    }
  };
  exports.semigroupAny = {
    concat: function(x, y) {
      return x || y;
    }
  };
  exports.getFunctionSemigroup = function_1.getSemigroup;
  exports.semigroupString = {
    concat: function(x, y) {
      return x + y;
    }
  };
  exports.semigroupSum = {
    concat: function(x, y) {
      return x + y;
    }
  };
  exports.semigroupProduct = {
    concat: function(x, y) {
      return x * y;
    }
  };
});

// node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js
var require_ReadonlyNonEmptyArray = __commonJS((exports) => {
  var concatW2 = function(second) {
    return function(first2) {
      return first2.concat(second);
    };
  };
  var concat3 = function(x, y) {
    return y ? x.concat(y) : function(y2) {
      return y2.concat(x);
    };
  };
  var group = function(E) {
    return function(as4) {
      var len = as4.length;
      if (len === 0) {
        return exports.empty;
      }
      var out = [];
      var head6 = as4[0];
      var nea = [head6];
      for (var i = 1;i < len; i++) {
        var a = as4[i];
        if (E.equals(a, head6)) {
          nea.push(a);
        } else {
          out.push(nea);
          head6 = a;
          nea = [head6];
        }
      }
      out.push(nea);
      return out;
    };
  };
  var zip2 = function(as4, bs) {
    if (bs === undefined) {
      return function(bs2) {
        return zip2(bs2, as4);
      };
    }
    return (0, exports.zipWith)(as4, bs, function(a, b) {
      return [a, b];
    });
  };
  var groupSort = function(O) {
    var sortO = (0, exports.sort)(O);
    var groupO = group(O);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? groupO(sortO(as4)) : exports.empty;
    };
  };
  var filter4 = function(predicate) {
    return (0, exports.filterWithIndex)(function(_2, a) {
      return predicate(a);
    });
  };
  var cons4 = function(head6, tail5) {
    return tail5 === undefined ? (0, exports.prepend)(head6) : (0, function_1.pipe)(tail5, (0, exports.prepend)(head6));
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.reduceRight = exports.foldMap = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.flatMap = exports.ap = exports.alt = exports.altW = exports.of = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.modifyAt = exports.updateAt = exports.sort = exports.groupBy = exports.group = exports.reverse = exports.concat = exports.concatW = exports.fromArray = exports.unappend = exports.unprepend = exports.range = exports.replicate = exports.makeBy = exports.fromReadonlyArray = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.appendW = exports.prepend = exports.prependW = exports.isOutOfBound = exports.isNonEmpty = exports.empty = undefined;
  exports.groupSort = exports.chain = exports.intercalate = exports.updateLast = exports.modifyLast = exports.updateHead = exports.modifyHead = exports.matchRight = exports.matchLeft = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getUnionSemigroup = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = undefined;
  exports.readonlyNonEmptyArray = exports.fold = exports.prependToAll = exports.insertAt = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = undefined;
  var Apply_1 = require_Apply();
  var Chain_1 = require_Chain();
  var Eq_1 = require_Eq();
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  var _ = __importStar(require_internal());
  var Ord_1 = require_Ord();
  var Se = __importStar(require_Semigroup());
  exports.empty = _.emptyReadonlyArray;
  exports.isNonEmpty = _.isNonEmpty;
  var isOutOfBound5 = function(i, as4) {
    return i < 0 || i >= as4.length;
  };
  exports.isOutOfBound = isOutOfBound5;
  var prependW4 = function(head6) {
    return function(tail5) {
      return __spreadArray6([head6], tail5, true);
    };
  };
  exports.prependW = prependW4;
  exports.prepend = exports.prependW;
  var appendW4 = function(end) {
    return function(init5) {
      return __spreadArray6(__spreadArray6([], init5, true), [end], false);
    };
  };
  exports.appendW = appendW4;
  exports.append = exports.appendW;
  var unsafeInsertAt4 = function(i, a, as4) {
    if ((0, exports.isNonEmpty)(as4)) {
      var xs = _.fromReadonlyNonEmptyArray(as4);
      xs.splice(i, 0, a);
      return xs;
    }
    return [a];
  };
  exports.unsafeInsertAt = unsafeInsertAt4;
  var unsafeUpdateAt4 = function(i, a, as4) {
    if (as4[i] === a) {
      return as4;
    } else {
      var xs = _.fromReadonlyNonEmptyArray(as4);
      xs[i] = a;
      return xs;
    }
  };
  exports.unsafeUpdateAt = unsafeUpdateAt4;
  var uniq4 = function(E) {
    return function(as4) {
      if (as4.length === 1) {
        return as4;
      }
      var out = [(0, exports.head)(as4)];
      var rest = (0, exports.tail)(as4);
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
  exports.uniq = uniq4;
  var sortBy4 = function(ords) {
    if ((0, exports.isNonEmpty)(ords)) {
      var M = (0, Ord_1.getMonoid)();
      return (0, exports.sort)(ords.reduce(M.concat, M.empty));
    }
    return function_1.identity;
  };
  exports.sortBy = sortBy4;
  var union6 = function(E) {
    var uniqE = (0, exports.uniq)(E);
    return function(second) {
      return function(first2) {
        return uniqE((0, function_1.pipe)(first2, concat3(second)));
      };
    };
  };
  exports.union = union6;
  var rotate4 = function(n) {
    return function(as4) {
      var len = as4.length;
      var m = Math.round(n) % len;
      if ((0, exports.isOutOfBound)(Math.abs(m), as4) || m === 0) {
        return as4;
      }
      if (m < 0) {
        var _a = (0, exports.splitAt)(-m)(as4), f = _a[0], s = _a[1];
        return (0, function_1.pipe)(s, concat3(f));
      } else {
        return (0, exports.rotate)(m - len)(as4);
      }
    };
  };
  exports.rotate = rotate4;
  var fromReadonlyArray = function(as4) {
    return (0, exports.isNonEmpty)(as4) ? _.some(as4) : _.none;
  };
  exports.fromReadonlyArray = fromReadonlyArray;
  var makeBy4 = function(f) {
    return function(n) {
      var j = Math.max(0, Math.floor(n));
      var out = [f(0)];
      for (var i = 1;i < j; i++) {
        out.push(f(i));
      }
      return out;
    };
  };
  exports.makeBy = makeBy4;
  var replicate2 = function(a) {
    return (0, exports.makeBy)(function() {
      return a;
    });
  };
  exports.replicate = replicate2;
  var range4 = function(start, end) {
    return start <= end ? (0, exports.makeBy)(function(i) {
      return start + i;
    })(end - start + 1) : [start];
  };
  exports.range = range4;
  var unprepend = function(as4) {
    return [(0, exports.head)(as4), (0, exports.tail)(as4)];
  };
  exports.unprepend = unprepend;
  var unappend = function(as4) {
    return [(0, exports.init)(as4), (0, exports.last)(as4)];
  };
  exports.unappend = unappend;
  var fromArray = function(as4) {
    return (0, exports.fromReadonlyArray)(as4.slice());
  };
  exports.fromArray = fromArray;
  exports.concatW = concatW2;
  exports.concat = concat3;
  var reverse4 = function(as4) {
    return as4.length === 1 ? as4 : __spreadArray6([(0, exports.last)(as4)], as4.slice(0, -1).reverse(), true);
  };
  exports.reverse = reverse4;
  exports.group = group;
  var groupBy = function(f) {
    return function(as4) {
      var out = {};
      for (var _i = 0, as_1 = as4;_i < as_1.length; _i++) {
        var a = as_1[_i];
        var k = f(a);
        if (_.has.call(out, k)) {
          out[k].push(a);
        } else {
          out[k] = [a];
        }
      }
      return out;
    };
  };
  exports.groupBy = groupBy;
  var sort3 = function(O) {
    return function(as4) {
      return as4.length === 1 ? as4 : as4.slice().sort(O.compare);
    };
  };
  exports.sort = sort3;
  var updateAt2 = function(i, a) {
    return (0, exports.modifyAt)(i, function() {
      return a;
    });
  };
  exports.updateAt = updateAt2;
  var modifyAt2 = function(i, f) {
    return function(as4) {
      return (0, exports.isOutOfBound)(i, as4) ? _.none : _.some((0, exports.unsafeUpdateAt)(i, f(as4[i]), as4));
    };
  };
  exports.modifyAt = modifyAt2;
  var zipWith2 = function(as4, bs, f) {
    var cs = [f(as4[0], bs[0])];
    var len = Math.min(as4.length, bs.length);
    for (var i = 1;i < len; i++) {
      cs[i] = f(as4[i], bs[i]);
    }
    return cs;
  };
  exports.zipWith = zipWith2;
  exports.zip = zip2;
  var unzip2 = function(abs) {
    var fa = [abs[0][0]];
    var fb = [abs[0][1]];
    for (var i = 1;i < abs.length; i++) {
      fa[i] = abs[i][0];
      fb[i] = abs[i][1];
    }
    return [fa, fb];
  };
  exports.unzip = unzip2;
  var prependAll4 = function(middle) {
    return function(as4) {
      var out = [middle, as4[0]];
      for (var i = 1;i < as4.length; i++) {
        out.push(middle, as4[i]);
      }
      return out;
    };
  };
  exports.prependAll = prependAll4;
  var intersperse4 = function(middle) {
    return function(as4) {
      var rest = (0, exports.tail)(as4);
      return (0, exports.isNonEmpty)(rest) ? (0, function_1.pipe)(rest, (0, exports.prependAll)(middle), (0, exports.prepend)((0, exports.head)(as4))) : as4;
    };
  };
  exports.intersperse = intersperse4;
  var chainWithIndex2 = function(f) {
    return function(as4) {
      var out = _.fromReadonlyNonEmptyArray(f(0, (0, exports.head)(as4)));
      for (var i = 1;i < as4.length; i++) {
        out.push.apply(out, f(i, as4[i]));
      }
      return out;
    };
  };
  exports.chainWithIndex = chainWithIndex2;
  var chop4 = function(f) {
    return function(as4) {
      var _a = f(as4), b = _a[0], rest = _a[1];
      var out = [b];
      var next = rest;
      while ((0, exports.isNonEmpty)(next)) {
        var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
        out.push(b_1);
        next = rest_2;
      }
      return out;
    };
  };
  exports.chop = chop4;
  var splitAt4 = function(n) {
    return function(as4) {
      var m = Math.max(1, n);
      return m >= as4.length ? [as4, exports.empty] : [(0, function_1.pipe)(as4.slice(1, m), (0, exports.prepend)((0, exports.head)(as4))), as4.slice(m)];
    };
  };
  exports.splitAt = splitAt4;
  var chunksOf4 = function(n) {
    return (0, exports.chop)((0, exports.splitAt)(n));
  };
  exports.chunksOf = chunksOf4;
  var _map5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _mapWithIndex3 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f));
  };
  var _ap3 = function(fab, fa) {
    return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
  };
  var _extend3 = function(wa, f) {
    return (0, function_1.pipe)(wa, (0, exports.extend)(f));
  };
  var _reduce4 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f));
  };
  var _foldMap4 = function(M) {
    var foldMapM = (0, exports.foldMap)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapM(f));
    };
  };
  var _reduceRight4 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f));
  };
  var _traverse4 = function(F) {
    var traverseF = (0, exports.traverse)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseF(f));
    };
  };
  var _alt3 = function(fa, that) {
    return (0, function_1.pipe)(fa, (0, exports.alt)(that));
  };
  var _reduceWithIndex3 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f));
  };
  var _foldMapWithIndex3 = function(M) {
    var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapWithIndexM(f));
    };
  };
  var _reduceRightWithIndex3 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f));
  };
  var _traverseWithIndex2 = function(F) {
    var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseWithIndexF(f));
    };
  };
  exports.of = _.singleton;
  var altW3 = function(that) {
    return function(as4) {
      return (0, function_1.pipe)(as4, concatW2(that()));
    };
  };
  exports.altW = altW3;
  exports.alt = exports.altW;
  var ap6 = function(as4) {
    return (0, exports.flatMap)(function(f) {
      return (0, function_1.pipe)(as4, (0, exports.map)(f));
    });
  };
  exports.ap = ap6;
  exports.flatMap = (0, function_1.dual)(2, function(ma, f) {
    return (0, function_1.pipe)(ma, (0, exports.chainWithIndex)(function(i, a) {
      return f(a, i);
    }));
  });
  var extend3 = function(f) {
    return function(as4) {
      var next = (0, exports.tail)(as4);
      var out = [f(as4)];
      while ((0, exports.isNonEmpty)(next)) {
        out.push(f(next));
        next = (0, exports.tail)(next);
      }
      return out;
    };
  };
  exports.extend = extend3;
  exports.duplicate = (0, exports.extend)(function_1.identity);
  exports.flatten = (0, exports.flatMap)(function_1.identity);
  var map6 = function(f) {
    return (0, exports.mapWithIndex)(function(_2, a) {
      return f(a);
    });
  };
  exports.map = map6;
  var mapWithIndex3 = function(f) {
    return function(as4) {
      var out = [f(0, (0, exports.head)(as4))];
      for (var i = 1;i < as4.length; i++) {
        out.push(f(i, as4[i]));
      }
      return out;
    };
  };
  exports.mapWithIndex = mapWithIndex3;
  var reduce7 = function(b, f) {
    return (0, exports.reduceWithIndex)(b, function(_2, b2, a) {
      return f(b2, a);
    });
  };
  exports.reduce = reduce7;
  var foldMap7 = function(S) {
    return function(f) {
      return function(as4) {
        return as4.slice(1).reduce(function(s, a) {
          return S.concat(s, f(a));
        }, f(as4[0]));
      };
    };
  };
  exports.foldMap = foldMap7;
  var reduceRight7 = function(b, f) {
    return (0, exports.reduceRightWithIndex)(b, function(_2, b2, a) {
      return f(b2, a);
    });
  };
  exports.reduceRight = reduceRight7;
  var reduceWithIndex6 = function(b, f) {
    return function(as4) {
      return as4.reduce(function(b2, a, i) {
        return f(i, b2, a);
      }, b);
    };
  };
  exports.reduceWithIndex = reduceWithIndex6;
  var foldMapWithIndex6 = function(S) {
    return function(f) {
      return function(as4) {
        return as4.slice(1).reduce(function(s, a, i) {
          return S.concat(s, f(i + 1, a));
        }, f(0, as4[0]));
      };
    };
  };
  exports.foldMapWithIndex = foldMapWithIndex6;
  var reduceRightWithIndex6 = function(b, f) {
    return function(as4) {
      return as4.reduceRight(function(b2, a, i) {
        return f(i, a, b2);
      }, b);
    };
  };
  exports.reduceRightWithIndex = reduceRightWithIndex6;
  var traverse4 = function(F) {
    var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
    return function(f) {
      return traverseWithIndexF(function(_2, a) {
        return f(a);
      });
    };
  };
  exports.traverse = traverse4;
  var sequence4 = function(F) {
    return (0, exports.traverseWithIndex)(F)(function_1.SK);
  };
  exports.sequence = sequence4;
  var traverseWithIndex3 = function(F) {
    return function(f) {
      return function(as4) {
        var out = F.map(f(0, (0, exports.head)(as4)), exports.of);
        for (var i = 1;i < as4.length; i++) {
          out = F.ap(F.map(out, function(bs) {
            return function(b) {
              return (0, function_1.pipe)(bs, (0, exports.append)(b));
            };
          }), f(i, as4[i]));
        }
        return out;
      };
    };
  };
  exports.traverseWithIndex = traverseWithIndex3;
  exports.extract = _.head;
  exports.URI = "ReadonlyNonEmptyArray";
  var getShow7 = function(S) {
    return {
      show: function(as4) {
        return "[".concat(as4.map(S.show).join(", "), "]");
      }
    };
  };
  exports.getShow = getShow7;
  var getSemigroup7 = function() {
    return {
      concat: concat3
    };
  };
  exports.getSemigroup = getSemigroup7;
  var getEq7 = function(E) {
    return (0, Eq_1.fromEquals)(function(xs, ys) {
      return xs.length === ys.length && xs.every(function(x, i) {
        return E.equals(x, ys[i]);
      });
    });
  };
  exports.getEq = getEq7;
  var getUnionSemigroup2 = function(E) {
    var unionE = (0, exports.union)(E);
    return {
      concat: function(first2, second) {
        return unionE(second)(first2);
      }
    };
  };
  exports.getUnionSemigroup = getUnionSemigroup2;
  exports.Functor = {
    URI: exports.URI,
    map: _map5
  };
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.Pointed = {
    URI: exports.URI,
    of: exports.of
  };
  exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map5,
    mapWithIndex: _mapWithIndex3
  };
  exports.Apply = {
    URI: exports.URI,
    map: _map5,
    ap: _ap3
  };
  exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
  exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
  exports.Applicative = {
    URI: exports.URI,
    map: _map5,
    ap: _ap3,
    of: exports.of
  };
  exports.Chain = {
    URI: exports.URI,
    map: _map5,
    ap: _ap3,
    chain: exports.flatMap
  };
  exports.chainFirst = (0, Chain_1.chainFirst)(exports.Chain);
  exports.Monad = {
    URI: exports.URI,
    map: _map5,
    ap: _ap3,
    of: exports.of,
    chain: exports.flatMap
  };
  exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce4,
    foldMap: _foldMap4,
    reduceRight: _reduceRight4
  };
  exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce4,
    foldMap: _foldMap4,
    reduceRight: _reduceRight4,
    reduceWithIndex: _reduceWithIndex3,
    foldMapWithIndex: _foldMapWithIndex3,
    reduceRightWithIndex: _reduceRightWithIndex3
  };
  exports.Traversable = {
    URI: exports.URI,
    map: _map5,
    reduce: _reduce4,
    foldMap: _foldMap4,
    reduceRight: _reduceRight4,
    traverse: _traverse4,
    sequence: exports.sequence
  };
  exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map5,
    mapWithIndex: _mapWithIndex3,
    reduce: _reduce4,
    foldMap: _foldMap4,
    reduceRight: _reduceRight4,
    traverse: _traverse4,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex3,
    foldMapWithIndex: _foldMapWithIndex3,
    reduceRightWithIndex: _reduceRightWithIndex3,
    traverseWithIndex: _traverseWithIndex2
  };
  exports.Alt = {
    URI: exports.URI,
    map: _map5,
    alt: _alt3
  };
  exports.Comonad = {
    URI: exports.URI,
    map: _map5,
    extend: _extend3,
    extract: exports.extract
  };
  exports.Do = (0, exports.of)(_.emptyRecord);
  exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
  var let_6 = (0, Functor_1.let)(exports.Functor);
  exports.let = let_6;
  exports.bind = (0, Chain_1.bind)(exports.Chain);
  exports.apS = (0, Apply_1.apS)(exports.Apply);
  exports.head = exports.extract;
  exports.tail = _.tail;
  var last6 = function(as4) {
    return as4[as4.length - 1];
  };
  exports.last = last6;
  var init4 = function(as4) {
    return as4.slice(0, -1);
  };
  exports.init = init4;
  var min3 = function(O) {
    var S = Se.min(O);
    return function(as4) {
      return as4.reduce(S.concat);
    };
  };
  exports.min = min3;
  var max3 = function(O) {
    var S = Se.max(O);
    return function(as4) {
      return as4.reduce(S.concat);
    };
  };
  exports.max = max3;
  var concatAll5 = function(S) {
    return function(as4) {
      return as4.reduce(S.concat);
    };
  };
  exports.concatAll = concatAll5;
  var matchLeft2 = function(f) {
    return function(as4) {
      return f((0, exports.head)(as4), (0, exports.tail)(as4));
    };
  };
  exports.matchLeft = matchLeft2;
  var matchRight2 = function(f) {
    return function(as4) {
      return f((0, exports.init)(as4), (0, exports.last)(as4));
    };
  };
  exports.matchRight = matchRight2;
  var modifyHead = function(f) {
    return function(as4) {
      return __spreadArray6([f((0, exports.head)(as4))], (0, exports.tail)(as4), true);
    };
  };
  exports.modifyHead = modifyHead;
  var updateHead = function(a) {
    return (0, exports.modifyHead)(function() {
      return a;
    });
  };
  exports.updateHead = updateHead;
  var modifyLast = function(f) {
    return function(as4) {
      return (0, function_1.pipe)((0, exports.init)(as4), (0, exports.append)(f((0, exports.last)(as4))));
    };
  };
  exports.modifyLast = modifyLast;
  var updateLast = function(a) {
    return (0, exports.modifyLast)(function() {
      return a;
    });
  };
  exports.updateLast = updateLast;
  var intercalate4 = function(S) {
    var concatAllS = (0, exports.concatAll)(S);
    return function(middle) {
      return (0, function_1.flow)((0, exports.intersperse)(middle), concatAllS);
    };
  };
  exports.intercalate = intercalate4;
  exports.chain = exports.flatMap;
  exports.groupSort = groupSort;
  exports.filter = filter4;
  var filterWithIndex3 = function(predicate) {
    return function(as4) {
      return (0, exports.fromReadonlyArray)(as4.filter(function(a, i) {
        return predicate(i, a);
      }));
    };
  };
  exports.filterWithIndex = filterWithIndex3;
  exports.uncons = exports.unprepend;
  exports.unsnoc = exports.unappend;
  exports.cons = cons4;
  var snoc4 = function(init5, end) {
    return (0, function_1.pipe)(init5, concat3([end]));
  };
  exports.snoc = snoc4;
  var insertAt2 = function(i, a) {
    return function(as4) {
      return i < 0 || i > as4.length ? _.none : _.some((0, exports.unsafeInsertAt)(i, a, as4));
    };
  };
  exports.insertAt = insertAt2;
  exports.prependToAll = exports.prependAll;
  exports.fold = exports.concatAll;
  exports.readonlyNonEmptyArray = {
    URI: exports.URI,
    of: exports.of,
    map: _map5,
    mapWithIndex: _mapWithIndex3,
    ap: _ap3,
    chain: exports.flatMap,
    extend: _extend3,
    extract: exports.extract,
    reduce: _reduce4,
    foldMap: _foldMap4,
    reduceRight: _reduceRight4,
    traverse: _traverse4,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex3,
    foldMapWithIndex: _foldMapWithIndex3,
    reduceRightWithIndex: _reduceRightWithIndex3,
    traverseWithIndex: _traverseWithIndex2,
    alt: _alt3
  };
});

// react
var require_react = __commonJS((exports, module) => {
  module.exports = Spicetify.React;
});

// react-dom
var require_react_dom = __commonJS((exports, module) => {
  module.exports = Spicetify.ReactDOM;
});

// shared/settings.tsx
class SettingsSection {
  name;
  sectionId;
  sectionFields;
  stopHistoryListener;
  setRerender = null;
  constructor(name, sectionId, sectionFields = {}) {
    this.name = name;
    this.sectionId = sectionId;
    this.sectionFields = sectionFields;
  }
  static waitForReact = async () => {
    while (!(Spicetify.React && Spicetify.ReactDOM))
      sleep(100);
    return this;
  };
  pushSettings = async () => {
    while (!Spicetify?.Platform?.History?.listen)
      await sleep(100);
    if (this.stopHistoryListener)
      this.stopHistoryListener();
    this.stopHistoryListener = Spicetify.Platform.History.listen(({ pathname = "" }) => {
      if (pathname === "/preferences")
        this.render();
    });
    if (Spicetify.Platform.History.location.pathname === "/preferences")
      await this.render();
  };
  toObject = () => new Proxy({}, {
    get: (target, prop) => SettingsSection.getFieldValue(this.getId(prop.toString()))
  });
  rerender = () => {
    if (this.setRerender)
      this.setRerender(Math.random());
  };
  render = async () => {
    while (!document.getElementById("desktop.settings.selectLanguage")) {
      if (Spicetify.Platform.History.location.pathname !== "/preferences")
        return;
      await sleep(100);
    }
    const allSettingsContainer = document.querySelector(".x-settings-container");
    let pluginSettingsContainer = Array.from(allSettingsContainer.children).find(({ id }) => id === this.sectionId);
    if (!pluginSettingsContainer) {
      pluginSettingsContainer = document.createElement("div");
      pluginSettingsContainer.id = this.sectionId;
      pluginSettingsContainer.className = "settingsContainer";
      allSettingsContainer.appendChild(pluginSettingsContainer);
    }
    import_react_dom.default.render(import_react.default.createElement(this.FieldsContainer, null), pluginSettingsContainer);
  };
  addButton = (nameId, description, text, onClick = constVoid, events = {}) => {
    const id = this.getId(nameId);
    events.onClick = onClick;
    this.sectionFields[nameId] = {
      id,
      type: FieldType.BUTTON,
      description,
      text,
      events
    };
    return this;
  };
  addToggle = (nameId, description, defaultValue = exports_Task.of(true), onChange = constVoid, events = {}) => {
    const id = this.getId(nameId);
    SettingsSection.setDefaultFieldValue(id, defaultValue);
    events.onChange = onChange;
    this.sectionFields[nameId] = {
      id,
      type: FieldType.TOGGLE,
      description,
      events
    };
    return this;
  };
  addInput = (nameId, description, defaultValue, onChange = constVoid, inputType = "text", events = {}) => {
    const id = this.getId(nameId);
    SettingsSection.setDefaultFieldValue(id, defaultValue);
    events.onChange = onChange;
    this.sectionFields[nameId] = {
      id,
      type: FieldType.INPUT,
      description,
      inputType,
      events
    };
    return this;
  };
  addDropDown = (nameId, description, options, defaultValue = exports_Task.of(0), onChange = constVoid, events = {}) => {
    const id = this.getId(nameId);
    SettingsSection.setDefaultFieldValue(id, defaultValue);
    events.onChange = onChange;
    this.sectionFields[nameId] = {
      id,
      type: FieldType.DROPDOWN,
      description,
      options,
      events
    };
    return this;
  };
  addHidden = (nameId, defaultValue) => {
    const id = this.getId(nameId);
    SettingsSection.setDefaultFieldValue(id, defaultValue);
    this.sectionFields[nameId] = {
      id,
      type: FieldType.HIDDEN,
      description: ""
    };
    return this;
  };
  getId = (nameId) => `extensions:${this.sectionId}:${nameId}`;
  useStateFor = (id) => {
    const [value, setValueState] = import_react.useState(SettingsSection.getFieldValue(id));
    return [
      value,
      (newValue) => {
        if (newValue !== undefined) {
          setValueState(newValue);
          SettingsSection.setFieldValue(id, newValue);
        }
      }
    ];
  };
  static getFieldValue = (id) => {
    return JSON.parse(Spicetify.LocalStorage.get(id) ?? "null");
  };
  static setFieldValue = (id, newValue) => {
    Spicetify.LocalStorage.set(id, JSON.stringify(newValue));
  };
  static setDefaultFieldValue = async (id, defaultValue) => {
    if (SettingsSection.getFieldValue(id) === null)
      SettingsSection.setFieldValue(id, await defaultValue());
  };
  FieldsContainer = () => {
    const [rerender, setRerender] = import_react.useState(0);
    this.setRerender = setRerender;
    return import_react.default.createElement("div", {
      className: "x-settings-section",
      key: rerender
    }, import_react.default.createElement("h2", {
      className: "Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type"
    }, this.name), Object.entries(this.sectionFields).map(([nameId, field]) => {
      return import_react.default.createElement(this.Field, {
        field
      });
    }));
  };
  Field = ({ field }) => {
    const isType = is("type");
    return import_react.default.createElement("div", {
      className: "x-settings-row"
    }, import_react.default.createElement(this.SettingDescription, {
      id: field.id,
      description: field.description
    }), import_react.default.createElement("div", {
      className: "x-settings-secondColumn"
    }, guard42([
      [isType(FieldType.INPUT), this.SettingInputField],
      [isType(FieldType.BUTTON), this.SettingButtonField],
      [isType(FieldType.TOGGLE), this.SettingToggleField],
      [isType(FieldType.DROPDOWN), this.SettingDropdownField]
    ])(this.SettingHidden)(field)));
  };
  SettingDescription = ({ id, description }) => import_react.default.createElement("div", {
    className: "x-settings-firstColumn"
  }, import_react.default.createElement("label", {
    className: "Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type",
    htmlFor: id
  }, description));
  SettingButtonField = (field) => import_react.default.createElement("span", {
    className: ""
  }, import_react.default.createElement("button", {
    id: field.id,
    className: "Button-sc-y0gtbx-0 Button-sm-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",
    ...field.events,
    type: field.type
  }, field.text));
  SettingToggleField = (field) => {
    const [value, setValue] = this.useStateFor(field.id);
    return import_react.default.createElement("label", {
      className: "x-settings-secondColumn x-toggle-wrapper"
    }, import_react.default.createElement("input", {
      id: field.id,
      className: "x-toggle-input",
      type: "checkbox",
      checked: SettingsSection.getFieldValue(field.id),
      ...field.events,
      onChange: (e) => {
        setValue(e.currentTarget.checked);
        field.events.onChange?.(e);
      }
    }), import_react.default.createElement("span", {
      className: "x-toggle-indicatorWrapper"
    }, import_react.default.createElement("span", {
      className: "x-toggle-indicator"
    })));
  };
  SettingInputField = (field) => {
    const [value, setValue] = this.useStateFor(field.id);
    return import_react.default.createElement("input", {
      className: "x-settings-input",
      id: field.id,
      dir: "ltr",
      value: SettingsSection.getFieldValue(field.id),
      type: field.inputType,
      ...field.events,
      onChange: (e) => {
        setValue(e.currentTarget.value);
        field.events.onChange?.(e);
      }
    });
  };
  SettingDropdownField = (field) => {
    const [value, setValue] = this.useStateFor(field.id);
    return import_react.default.createElement("select", {
      className: "main-dropDown-dropDown",
      id: field.id,
      ...field.events,
      onChange: (e) => {
        setValue(e.currentTarget.selectedIndex);
        field.events.onChange?.(e);
      }
    }, field.options.map((option2, i) => import_react.default.createElement("option", {
      selected: i === SettingsSection.getFieldValue(field.id),
      value: i + 1
    }, option2)));
  };
  SettingHidden = () => import_react.default.createElement(import_react.default.Fragment, null);
}
var import_react, import_react_dom, FieldType;
var init_settings = __esm(() => {
  init_es6();
  init_function();
  import_react = __toESM(require_react(), 1);
  import_react_dom = __toESM(require_react_dom(), 1);
  init_fp();
  init_util();
  (function(FieldType2) {
    FieldType2["HIDDEN"] = "hidden";
    FieldType2["INPUT"] = "input";
    FieldType2["DROPDOWN"] = "dropdown";
    FieldType2["BUTTON"] = "button";
    FieldType2["TOGGLE"] = "toggle";
  })(FieldType || (FieldType = {}));
});

// extensions/star-ratings-2/settings.tsx
var RATINGS_FOLDER_NAME, settings2, CONFIG;
var init_settings2 = __esm(() => {
  init_es6();
  init_api();
  init_settings();
  init_ratings();
  RATINGS_FOLDER_NAME = "Ratings";
  settings2 = new SettingsSection("Star Ratings 2", "star-ratings-2").addInput("heartThreshold", "Threshold for liking trakcs", exports_Task.of("3")).addInput("skipThreshold", "Threshold for skipping trakcs", exports_Task.of("1")).addInput("ratingsFolderUri", "Ratings folder uri", async () => (await createPlatFolder(RATINGS_FOLDER_NAME)).uri, loadRatings);
  settings2.pushSettings();
  CONFIG = settings2.toObject();
});

// extensions/star-ratings-2/ratings.tsx
var loadRatings, toggleRating, playlistUris, tracksRatings;
var init_ratings = __esm(() => {
  init_es6();
  init_function();
  init_api();
  init_fp();
  init_util();
  init_settings2();
  init_app();
  loadRatings = async () => {
    const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri);
    playlistUris = pipe(ratingsFolder.items, exports_Array.map((p) => [p.uri, Number(p.name)]), exports_Array.reduce([], (uris, [uri, rating]) => (uris[rating] = uri, uris)));
    globalThis.tracksRatings = tracksRatings = await pipe(playlistUris, exports_Array.map(fetchPlatPlaylistContents), (ps) => Promise.all(ps), pMchain(exports_Array.map((tracks) => tracks ?? [])), pMchain(exports_Array.map(exports_Array.map((t) => t.uri))), pMchain(exports_Array.flatMap((trackUris, rating) => trackUris.map((trackUri) => [trackUri, rating]))), pMchain(exports_Array.reduce({}, (acc, [trackUri, rating]) => Object.assign(acc, {
      [trackUri]: Math.max(rating, acc[trackUri] ?? 0)
    }))));
  };
  toggleRating = async (uri, rating) => {
    const currentRating = tracksRatings[uri];
    if (currentRating === rating)
      rating = 0;
    if (currentRating) {
      pipe(playlistUris.slice(0, currentRating + 1), exports_Array.filter(Boolean), exports_Array.map((playlistUri) => Spicetify.URI.fromString(playlistUri).id), exports_Array.map((playlistId) => removeWebPlaylistTracks(playlistId, [uri])));
    }
    tracksRatings[uri] = rating;
    if (rating > 0) {
      let playlistUri = playlistUris[rating];
      if (!playlistUri) {
        playlistUri = await createPlatPlaylist(rating.toFixed(0), SpotifyLoc.after.fromUri(CONFIG.ratingsFolderUri));
        setPlatPlaylistVisibility(playlistUri, false);
        playlistUris[rating] = playlistUri;
      }
      addPlatPlaylistTracks(playlistUri, [uri]);
    }
    const npTrack = Spicetify.Player.data.track?.uri;
    if (npTrack === uri)
      updateNowPlayingControls(npTrack, false);
    updateTrackListControls();
  };
  playlistUris = [];
  tracksRatings = {};
});

// extensions/star-ratings-2/dropdown.tsx
var ReadonlyNonEmptyArray2, import_react2, RatingButton, Dropdown;
var init_dropdown = __esm(() => {
  ReadonlyNonEmptyArray2 = __toESM(require_ReadonlyNonEmptyArray(), 1);
  import_react2 = __toESM(require_react(), 1);
  init_ratings();
  RatingButton = ({ i, uri }) => import_react2.default.createElement("button", {
    className: "Button-sc-1dqy6lx-0 Button-textBrightAccent-sm-16-buttonTertiary-iconOnly-condensed-isUsingKeyboard-useBrowserDefaultFocusStyle rating-button",
    onClick: () => toggleRating(uri, i)
  }, import_react2.default.createElement("svg", {
    role: "img",
    height: 16,
    width: 16,
    viewBox: "0 0 16 16",
    className: `Svg-sc-ytk21e-0 Svg-img-icon rating-${i}`
  }, import_react2.default.createElement("path", {
    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
  })));
  Dropdown = ({ uri }) => import_react2.default.createElement("div", {
    className: "rating-dropdown"
  }, ReadonlyNonEmptyArray2.range(1, 5).map((i) => import_react2.default.createElement(RatingButton, {
    i,
    uri
  })));
});

// extensions/star-ratings-2/util.tsx
var getTrackLists, getTrackListTracks, getTrackListTrackUri, getNowPlayingBar, getCollectionActionBarRow, playlistButtonSelector, getPlaylistButton, getCollectionPlaylistButton;
var init_util2 = __esm(() => {
  getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-indexable"));
  getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll("div.main-trackList-trackListRow"));
  getTrackListTrackUri = (track) => (track = Object.values(track)[0].child.child.child.child, track.pendingProps.uri ?? track.child.pendingProps.uri);
  getNowPlayingBar = () => document.querySelector("div.main-nowPlayingBar-nowPlayingBar");
  getCollectionActionBarRow = () => document.querySelector(`div.main-actionBar-ActionBarRow`);
  playlistButtonSelector = `button[aria-label="Add to Liked Songs"], button[aria-label="Add to playlist"]`;
  getPlaylistButton = (parent) => parent.querySelector(playlistButtonSelector);
  getCollectionPlaylistButton = () => {
    const ab = getCollectionActionBarRow();
    return ab.querySelector(`button[aria-label="Remove from Your Library"], button[aria-label="Save to Your Library"]`);
  };
});

// /home/delusoire/dev/spicetify-extensions/extensions/star-ratings-2/assets/styles.scss
var init_styles = __esm(() => {
  (async () => {
    const id = "6llbIQb5F1nCYOd_rbhkc02PHZDmzF7fdok0_Ih97Wk";
    if (!document.getElementById(id)) {
      const el = document.createElement("style");
      el.id = id;
      el.textContent = "svg.rating-1 {\n  fill: #ed5564 !important;\n}\n\nsvg.rating-2 {\n  fill: #ffce54 !important;\n}\n\nsvg.rating-3 {\n  fill: #a0d568 !important;\n}\n\nsvg.rating-4 {\n  fill: #4fc1e8 !important;\n}\n\nsvg.rating-5 {\n  fill: #ac92eb !important;\n}";
      document.head.appendChild(el);
    }
  })();
});

// extensions/star-ratings-2/app.tsx
var exports_app = {};
__export(exports_app, {
  updateTrackListControls: () => {
    {
      return updateTrackListControls;
    }
  },
  updateNowPlayingControls: () => {
    {
      return updateNowPlayingControls;
    }
  },
  updateCollectionControls: () => {
    {
      return updateCollectionControls2;
    }
  },
  default: () => {
    {
      return app_default;
    }
  }
});
var import_react3, import_react_dom2, app_default, URI7, colorByRating, colorizePlaylistButton, wrapDropdownInsidePlaylistButton, updateNowPlayingControls, updateTrackListControls, updateCollectionControls2, mainElement, mainElementObserver;
var init_app = __esm(() => {
  init_es6();
  init_Predicate2();
  init_function();
  init_api();
  init_dropdown();
  init_ratings();
  init_settings2();
  init_util2();
  import_react3 = __toESM(require_react(), 1);
  import_react_dom2 = __toESM(require_react_dom(), 1);
  init_styles();
  init_function();
  app_default = {};
  debugger;
  ({ URI: URI7 } = Spicetify);
  loadRatings();
  colorByRating = [undefined, "#ED5564", "#FFCE54", "A0D568", "#4FC1E8", "#AC92EB"];
  colorizePlaylistButton = (btn, rating) => {
    if (btn.style.fill === colorByRating[rating])
      return;
    btn.style.opacity = rating > 0 ? "1" : undefined;
    const svg = btn.querySelector("svg");
    svg.style.fill = colorByRating[rating];
  };
  wrapDropdownInsidePlaylistButton = (pb, uri) => {
    if (pb.hasAttribute("dropdown-enabled"))
      return;
    pb.setAttribute("dropdown-enabled", "");
    const div = document.createElement("div");
    pb.appendChild(div);
    import_react_dom2.default.render(import_react3.default.createElement(Dropdown, {
      uri
    }), div);
    Spicetify.Tippy(pb, {
      ...Spicetify.TippyProps,
      content: div,
      interactive: true,
      animateFill: false,
      offset: [0, 7],
      placement: "left",
      animation: "fade",
      trigger: "mouseenter focus",
      zIndex: 1e4,
      render(instance) {
        const popper = document.createElement("div");
        const box = document.createElement("div");
        popper.id = "context-menu";
        popper.appendChild(box);
        box.className = "main-contextMenu-tippy";
        box.appendChild(instance.props.content);
        return { popper, onUpdate: constVoid };
      }
    });
  };
  updateNowPlayingControls = (newTrack, updateDropdown = true) => {
    const npb = getNowPlayingBar();
    const pb = getPlaylistButton(npb);
    colorizePlaylistButton(pb, tracksRatings[newTrack]);
    if (updateDropdown)
      wrapDropdownInsidePlaylistButton(pb, newTrack);
  };
  updateTrackListControls = (updateDropdown = true) => {
    const trackLists = getTrackLists();
    pipe(trackLists, exports_Array.map((trackList) => {
      const trackListTracks = getTrackListTracks(trackList);
      trackListTracks.map((track) => {
        const uri = URI7.fromString(getTrackListTrackUri(track)).toURI();
        if (!URI7.isTrack(uri))
          return;
        const r = tracksRatings[uri];
        const pb = getPlaylistButton(track);
        colorizePlaylistButton(pb, r);
        if (updateDropdown)
          wrapDropdownInsidePlaylistButton(pb, uri);
      });
    }));
  };
  updateCollectionControls2 = async (uri) => {
    let uris;
    if (URI7.isAlbum(uri))
      uris = pipe(await fetchGQLAlbum(`${uri}`), (x) => x.tracks.items, exports_Array.map((x) => x.track.uri));
    else if (URI7.isArtist(uri))
      uris = pipe(await fetchPlatArtistLikedTracks(`${uri}`), exports_Array.map((x) => x.uri));
    else if (URI7.isPlaylistV1OrV2(uri))
      uris = pipe(await fetchPlatPlaylistContents(`${uri}`), exports_Array.map((x) => x.uri));
    else
      throw "me out the window";
    const ratings4 = uris.map((uri2) => tracksRatings[uri2]).filter(Boolean);
    const rating = Math.round(ratings4.reduce((acc, r) => acc + r) / ratings4.length);
    const pb = getCollectionPlaylistButton();
    colorizePlaylistButton(pb, rating);
  };
  Spicetify.Player.addEventListener("songchange", () => {
    const npTrack = Spicetify.Player.data.track?.uri;
    if (Number(CONFIG.skipThreshold) && (tracksRatings[npTrack] || Number.MAX_SAFE_INTEGER) <= Number(CONFIG.skipThreshold))
      return void Spicetify.Player.next();
    updateNowPlayingControls(npTrack);
  });
  updateNowPlayingControls(Spicetify.Player.data.track?.uri);
  mainElementObserver = new MutationObserver(() => updateTrackListControls());
  new MutationObserver(() => {
    const nextMainElement = document.querySelector("main");
    if (nextMainElement && !nextMainElement.isEqualNode(mainElement)) {
      if (mainElement)
        mainElementObserver.disconnect();
      mainElement = nextMainElement;
      mainElementObserver.observe(mainElement, {
        childList: true,
        subtree: true
      });
    }
  }).observe(document.body, {
    childList: true,
    subtree: true
  });
  Spicetify.Platform.History.listen(async ({ pathname }) => {
    const pageHasHeart = anyPass([URI7.isAlbum, URI7.isArtist, URI7.isPlaylistV1OrV2]);
    if (!pageHasHeart(pathname))
      return;
    updateCollectionControls2(URI7.fromString(pathname));
  });
});

// extensions/star-ratings-2/entry.tsx
init_es6();
init_Record();
init_function();
init_util();
(async () => {
  const mustLoad = ["Player", "showNotification", ...mustLoadForApi, ...mustLoadForSettings, ...mustLoadForUtil];
  let timer = 0;
  while (mustLoad.some(flow(flip(lookup6)(Spicetify), exports_Option.isNone)))
    await sleep(timer += 100);
  await Promise.resolve().then(() => (init_app(), exports_app));
})();
