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
var __spreadArray = function(to, from, pack) {
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
var constFalse = constant(false);
var dual = function(arity, body) {
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

// node_modules/fp-ts/es6/Predicate.js
var getSemigroupAny = function() {
  return {
    concat: function(first, second) {
      return pipe(first, or(second));
    }
  };
};
var getMonoidAny = function() {
  return {
    concat: getSemigroupAny().concat,
    empty: constFalse
  };
};
var not = function(predicate) {
  return function(a) {
    return !predicate(a);
  };
};
var or = function(second) {
  return function(first) {
    return function(a) {
      return first(a) || second(a);
    };
  };
};

// node_modules/fp-ts/es6/internal.js
var __spreadArray2 = function(to, from, pack) {
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
var isNone = function(fa) {
  return fa._tag === "None";
};
var isSome = function(fa) {
  return fa._tag === "Some";
};
var none = { _tag: "None" };
var some = function(a) {
  return { _tag: "Some", value: a };
};
var isLeft = function(ma) {
  return ma._tag === "Left";
};
var isNonEmpty = function(as) {
  return as.length > 0;
};
var head = function(as) {
  return as[0];
};
var tail = function(as) {
  return as.slice(1);
};
var emptyRecord = {};
var fromReadonlyNonEmptyArray = function(as) {
  return __spreadArray2([as[0]], as.slice(1), true);
};

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
var let_ = function(F) {
  return function(name, f) {
    return function(fa) {
      return F.map(fa, function(a) {
        var _a;
        return Object.assign({}, a, (_a = {}, _a[name] = f(a), _a));
      });
    };
  };
};
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

// node_modules/fp-ts/es6/FromEither.js
function fromEitherK(F) {
  return function(f) {
    return flow(f, F.fromEither);
  };
}
function tapEither(F, M) {
  var fromEither = fromEitherK(F);
  var tapM = tap(M);
  return function(self, f) {
    return tapM(self, fromEither(f));
  };
}

// node_modules/fp-ts/es6/Magma.js
var concatAll = function(M) {
  return function(startWith) {
    return function(as2) {
      return as2.reduce(function(a, acc) {
        return M.concat(a, acc);
      }, startWith);
    };
  };
};

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
      return getSemigroup;
    }
  },
  getMonoid: () => {
    {
      return getMonoid;
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
var fromEquals = function(equals) {
  return {
    equals: function(x, y) {
      return x === y || equals(x, y);
    }
  };
};
var struct = function(eqs) {
  return fromEquals(function(first, second) {
    for (var key in eqs) {
      if (!eqs[key].equals(first[key], second[key])) {
        return false;
      }
    }
    return true;
  });
};
var tuple = function() {
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
var contramap_ = function(fa, f) {
  return pipe(fa, contramap(f));
};
var contramap = function(f) {
  return function(fa) {
    return fromEquals(function(x, y) {
      return fa.equals(f(x), f(y));
    });
  };
};
var URI = "Eq";
var eqStrict = {
  equals: function(a, b) {
    return a === b;
  }
};
var empty = {
  equals: function() {
    return true;
  }
};
var getSemigroup = function() {
  return {
    concat: function(x, y) {
      return fromEquals(function(a, b) {
        return x.equals(a, b) && y.equals(a, b);
      });
    }
  };
};
var getMonoid = function() {
  return {
    concat: getSemigroup().concat,
    empty
  };
};
var Contravariant = {
  URI,
  contramap: contramap_
};
var getTupleEq = tuple;
var getStructEq = struct;
var strictEqual = eqStrict.equals;
var eq = Contravariant;
var eqBoolean = eqStrict;
var eqString = eqStrict;
var eqNumber = eqStrict;
var eqDate = {
  equals: function(first, second) {
    return first.valueOf() === second.valueOf();
  }
};

// node_modules/fp-ts/es6/Ord.js
var compare = function(first, second) {
  return first < second ? -1 : first > second ? 1 : 0;
};
var equalsDefault = function(compare2) {
  return function(first, second) {
    return first === second || compare2(first, second) === 0;
  };
};
var fromCompare = function(compare2) {
  return {
    equals: equalsDefault(compare2),
    compare: function(first, second) {
      return first === second ? 0 : compare2(first, second);
    }
  };
};
var getSemigroup2 = function() {
  return {
    concat: function(first, second) {
      return fromCompare(function(a, b) {
        var ox = first.compare(a, b);
        return ox !== 0 ? ox : second.compare(a, b);
      });
    }
  };
};
var getMonoid2 = function() {
  return {
    concat: getSemigroup2().concat,
    empty: fromCompare(function() {
      return 0;
    })
  };
};
var strictOrd = {
  equals: eqStrict.equals,
  compare
};

// node_modules/fp-ts/es6/Semigroup.js
var constant2 = function(a) {
  return {
    concat: function() {
      return a;
    }
  };
};
var concatAll2 = concatAll;
var semigroupVoid = constant2(undefined);
var semigroupAll = {
  concat: function(x, y) {
    return x && y;
  }
};
var semigroupAny = {
  concat: function(x, y) {
    return x || y;
  }
};
var semigroupString = {
  concat: function(x, y) {
    return x + y;
  }
};
var semigroupSum = {
  concat: function(x, y) {
    return x + y;
  }
};
var semigroupProduct = {
  concat: function(x, y) {
    return x * y;
  }
};

// node_modules/fp-ts/es6/Separated.js
var separated = function(left, right) {
  return { left, right };
};

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

// node_modules/fp-ts/es6/Zero.js
function guard(F, P) {
  return function(b) {
    return b ? P.of(undefined) : F.zero();
  };
}

// node_modules/fp-ts/es6/Option.js
var none2 = none;
var some2 = some;
var getRight = function(ma) {
  return ma._tag === "Left" ? none2 : some2(ma.right);
};
var _map = function(fa, f) {
  return pipe(fa, map(f));
};
var _ap = function(fab, fa) {
  return pipe(fab, ap(fa));
};
var URI2 = "Option";
var map = function(f) {
  return function(fa) {
    return isNone2(fa) ? none2 : some2(f(fa.value));
  };
};
var Functor2 = {
  URI: URI2,
  map: _map
};
var as2 = dual(2, as(Functor2));
var asUnit2 = asUnit(Functor2);
var ap = function(fa) {
  return function(fab) {
    return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some2(fab.value(fa.value));
  };
};
var flatMap = dual(2, function(ma, f) {
  return isNone2(ma) ? none2 : f(ma.value);
});
var Chain2 = {
  URI: URI2,
  map: _map,
  ap: _ap,
  chain: flatMap
};
var orElse = dual(2, function(self, that) {
  return isNone2(self) ? that() : self;
});
var fromEither = getRight;
var FromEither2 = {
  URI: URI2,
  fromEither
};
var isSome2 = isSome;
var isNone2 = function(fa) {
  return fa._tag === "None";
};
var tap2 = dual(2, tap(Chain2));
var tapEither2 = dual(2, tapEither(FromEither2, Chain2));

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
function lookup(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function(k, m) {
    if (m === undefined) {
      var lookupE_1 = lookup(E);
      return function(m2) {
        return lookupE_1(k, m2);
      };
    }
    return pipe(lookupWithKeyE(k, m), map(function(_a) {
      var _ = _a[0], a = _a[1];
      return a;
    }));
  };
}
var empty2 = new Map;

// node_modules/fp-ts/es6/Map.js
var lookup2 = lookup;
var empty3 = new Map;

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
      return union4;
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
      return some3;
    }
  },
  snoc: () => {
    {
      return snoc3;
    }
  },
  size: () => {
    {
      return size2;
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
      return reduceWithIndex4;
    }
  },
  reduceRightWithIndex: () => {
    {
      return reduceRightWithIndex4;
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
      return map2;
    }
  },
  makeBy: () => {
    {
      return makeBy3;
    }
  },
  lookup: () => {
    {
      return lookup4;
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
      return last4;
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
      return isEmpty2;
    }
  },
  intersperse: () => {
    {
      return intersperse3;
    }
  },
  intersection: () => {
    {
      return intersection2;
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
      return getShow4;
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
      return getMonoid3;
    }
  },
  getIntersectionSemigroup: () => {
    {
      return getIntersectionSemigroup;
    }
  },
  getEq: () => {
    {
      return getEq4;
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
      return fromEither2;
    }
  },
  foldRight: () => {
    {
      return foldRight;
    }
  },
  foldMapWithIndex: () => {
    {
      return foldMapWithIndex4;
    }
  },
  foldMap: () => {
    {
      return foldMap4;
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
      return flatMap2;
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
      return empty5;
    }
  },
  elem: () => {
    {
      return elem3;
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
      return difference2;
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
      return URI3;
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
      return Functor4;
    }
  },
  FromEither: () => {
    {
      return FromEither4;
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
      return Chain4;
    }
  },
  Apply: () => {
    {
      return Apply2;
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

// node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js
var __spreadArray3 = function(to, from, pack) {
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
var isNonEmpty2 = isNonEmpty;
var isOutOfBound = function(i, as3) {
  return i < 0 || i >= as3.length;
};
var prependW = function(head2) {
  return function(tail2) {
    return __spreadArray3([head2], tail2, true);
  };
};
var prepend = prependW;
var prependAll = function(middle) {
  return function(as3) {
    var out = [middle, as3[0]];
    for (var i = 1;i < as3.length; i++) {
      out.push(middle, as3[i]);
    }
    return out;
  };
};
var intersperse = function(middle) {
  return function(as3) {
    var rest = tail2(as3);
    return isNonEmpty2(rest) ? pipe(rest, prependAll(middle), prepend(head2(as3))) : as3;
  };
};
var extract = head;
var head2 = extract;
var tail2 = tail;
var last = function(as3) {
  return as3[as3.length - 1];
};
var concatAll3 = function(S) {
  return function(as3) {
    return as3.reduce(S.concat);
  };
};
var intercalate = function(S) {
  var concatAllS = concatAll3(S);
  return function(middle) {
    return flow(intersperse(middle), concatAllS);
  };
};

// node_modules/fp-ts/es6/NonEmptyArray.js
function concat(x, y) {
  return y ? x.concat(y) : function(y2) {
    return y2.concat(x);
  };
}
function cons(head3, tail3) {
  return tail3 === undefined ? prepend2(head3) : pipe(tail3, prepend2(head3));
}
var __spreadArray4 = function(to, from, pack) {
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
var isNonEmpty3 = function(as3) {
  return as3.length > 0;
};
var isOutOfBound2 = function(i, as3) {
  return i < 0 || i >= as3.length;
};
var prependW2 = function(head3) {
  return function(tail3) {
    return __spreadArray4([head3], tail3, true);
  };
};
var prepend2 = prependW2;
var appendW = function(end) {
  return function(init) {
    return __spreadArray4(__spreadArray4([], init, true), [end], false);
  };
};
var append = appendW;
var unsafeInsertAt = function(i, a, as3) {
  if (isNonEmpty3(as3)) {
    var xs = fromReadonlyNonEmptyArray2(as3);
    xs.splice(i, 0, a);
    return xs;
  }
  return [a];
};
var unsafeUpdateAt = function(i, a, as3) {
  var xs = fromReadonlyNonEmptyArray2(as3);
  xs[i] = a;
  return xs;
};
var uniq = function(E) {
  return function(as3) {
    if (as3.length === 1) {
      return copy(as3);
    }
    var out = [head3(as3)];
    var rest = tail3(as3);
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
var sortBy = function(ords) {
  if (isNonEmpty3(ords)) {
    var M = getMonoid2();
    return sort(ords.reduce(M.concat, M.empty));
  }
  return copy;
};
var union2 = function(E) {
  var uniqE = uniq(E);
  return function(second) {
    return function(first) {
      return uniqE(pipe(first, concat(second)));
    };
  };
};
var rotate = function(n) {
  return function(as3) {
    var len = as3.length;
    var m = Math.round(n) % len;
    if (isOutOfBound2(Math.abs(m), as3) || m === 0) {
      return copy(as3);
    }
    if (m < 0) {
      var _a = splitAt(-m)(as3), f = _a[0], s = _a[1];
      return pipe(s, concat(f));
    } else {
      return rotate(m - len)(as3);
    }
  };
};
var fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
var makeBy = function(f) {
  return function(n) {
    var j = Math.max(0, Math.floor(n));
    var out = [f(0)];
    for (var i = 1;i < j; i++) {
      out.push(f(i));
    }
    return out;
  };
};
var range = function(start, end) {
  return start <= end ? makeBy(function(i) {
    return start + i;
  })(end - start + 1) : [start];
};
var sort = function(O) {
  return function(as3) {
    return as3.slice().sort(O.compare);
  };
};
var copy = fromReadonlyNonEmptyArray2;
var of = function(a) {
  return [a];
};
var prependAll2 = function(middle) {
  return function(as3) {
    var out = [middle, as3[0]];
    for (var i = 1;i < as3.length; i++) {
      out.push(middle, as3[i]);
    }
    return out;
  };
};
var intersperse2 = function(middle) {
  return function(as3) {
    var rest = tail3(as3);
    return isNonEmpty3(rest) ? pipe(rest, prependAll2(middle), prepend2(head3(as3))) : copy(as3);
  };
};
var chop = function(f) {
  return function(as3) {
    var _a = f(as3), b = _a[0], rest = _a[1];
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
var splitAt = function(n) {
  return function(as3) {
    var m = Math.max(1, n);
    return m >= as3.length ? [copy(as3), []] : [pipe(as3.slice(1, m), prepend2(head3(as3))), as3.slice(m)];
  };
};
var chunksOf = function(n) {
  return chop(splitAt(n));
};
var head3 = head2;
var tail3 = function(as3) {
  return as3.slice(1);
};
var last2 = last;
var init = function(as3) {
  return as3.slice(0, -1);
};
var snoc = function(init2, end) {
  return pipe(init2, append(end));
};

// node_modules/fp-ts/es6/number.js
var Eq2 = {
  equals: function(first, second) {
    return first === second;
  }
};
var Ord2 = {
  equals: Eq2.equals,
  compare: function(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
  }
};
var Bounded = {
  equals: Eq2.equals,
  compare: Ord2.compare,
  top: Infinity,
  bottom: (-Infinity)
};
var MagmaSub = {
  concat: function(first, second) {
    return first - second;
  }
};
var SemigroupSum = {
  concat: function(first, second) {
    return first + second;
  }
};
var SemigroupProduct = {
  concat: function(first, second) {
    return first * second;
  }
};
var MonoidSum = {
  concat: SemigroupSum.concat,
  empty: 0
};
var MonoidProduct = {
  concat: SemigroupProduct.concat,
  empty: 1
};
var Field = {
  add: SemigroupSum.concat,
  zero: 0,
  mul: SemigroupProduct.concat,
  one: 1,
  sub: MagmaSub.concat,
  degree: function(_) {
    return 1;
  },
  div: function(first, second) {
    return first / second;
  },
  mod: function(first, second) {
    return first % second;
  }
};

// node_modules/fp-ts/es6/ReadonlyArray.js
function lookup3(i, as3) {
  return as3 === undefined ? function(as4) {
    return lookup3(i, as4);
  } : isOutOfBound3(i, as3) ? none : some(as3[i]);
}
function findFirst(predicate) {
  return function(as3) {
    for (var i = 0;i < as3.length; i++) {
      if (predicate(as3[i])) {
        return some(as3[i]);
      }
    }
    return none;
  };
}
function findLast(predicate) {
  return function(as3) {
    for (var i = as3.length - 1;i >= 0; i--) {
      if (predicate(as3[i])) {
        return some(as3[i]);
      }
    }
    return none;
  };
}
function elem2(E) {
  return function(a, as3) {
    if (as3 === undefined) {
      var elemE_1 = elem2(E);
      return function(as4) {
        return elemE_1(a, as4);
      };
    }
    var predicate = function(element) {
      return E.equals(element, a);
    };
    var i = 0;
    for (;i < as3.length; i++) {
      if (predicate(as3[i])) {
        return true;
      }
    }
    return false;
  };
}
function every(predicate) {
  return function(as3) {
    return as3.every(predicate);
  };
}
var __spreadArray5 = function(to, from, pack) {
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
var isNonEmpty4 = isNonEmpty2;
var matchW = function(onEmpty, onNonEmpty) {
  return function(as3) {
    return isNonEmpty4(as3) ? onNonEmpty(as3) : onEmpty();
  };
};
var match = matchW;
var isOutOfBound3 = isOutOfBound;
var head4 = function(as3) {
  return isNonEmpty4(as3) ? some(head2(as3)) : none;
};
var last3 = function(as3) {
  return isNonEmpty4(as3) ? some(last(as3)) : none;
};
var findIndex = function(predicate) {
  return function(as3) {
    for (var i = 0;i < as3.length; i++) {
      if (predicate(as3[i])) {
        return some(i);
      }
    }
    return none;
  };
};
var findFirstMap = function(f) {
  return function(as3) {
    for (var i = 0;i < as3.length; i++) {
      var out = f(as3[i]);
      if (isSome(out)) {
        return out;
      }
    }
    return none;
  };
};
var findLastMap = function(f) {
  return function(as3) {
    for (var i = as3.length - 1;i >= 0; i--) {
      var out = f(as3[i]);
      if (isSome(out)) {
        return out;
      }
    }
    return none;
  };
};
var findLastIndex = function(predicate) {
  return function(as3) {
    for (var i = as3.length - 1;i >= 0; i--) {
      if (predicate(as3[i])) {
        return some(i);
      }
    }
    return none;
  };
};
var _chainRecDepthFirst = function(a, f) {
  return pipe(a, chainRecDepthFirst(f));
};
var _chainRecBreadthFirst = function(a, f) {
  return pipe(a, chainRecBreadthFirst(f));
};
var foldMapWithIndex3 = function(M) {
  return function(f) {
    return function(fa) {
      return fa.reduce(function(b, a, i) {
        return M.concat(b, f(i, a));
      }, M.empty);
    };
  };
};
var reduce3 = function(b, f) {
  return reduceWithIndex3(b, function(_, b2, a) {
    return f(b2, a);
  });
};
var foldMap3 = function(M) {
  var foldMapWithIndexM = foldMapWithIndex3(M);
  return function(f) {
    return foldMapWithIndexM(function(_, a) {
      return f(a);
    });
  };
};
var reduceWithIndex3 = function(b, f) {
  return function(fa) {
    var len = fa.length;
    var out = b;
    for (var i = 0;i < len; i++) {
      out = f(i, out, fa[i]);
    }
    return out;
  };
};
var reduceRight3 = function(b, f) {
  return reduceRightWithIndex3(b, function(_, a, b2) {
    return f(a, b2);
  });
};
var reduceRightWithIndex3 = function(b, f) {
  return function(fa) {
    return fa.reduceRight(function(b2, a, i) {
      return f(i, a, b2);
    }, b);
  };
};
var getShow3 = function(S) {
  return {
    show: function(as3) {
      return "[".concat(as3.map(S.show).join(", "), "]");
    }
  };
};
var getEq3 = function(E) {
  return fromEquals(function(xs, ys) {
    return xs.length === ys.length && xs.every(function(x, i) {
      return E.equals(x, ys[i]);
    });
  });
};
var getOrd = function(O) {
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
var chainRecDepthFirst = function(f) {
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
var chainRecBreadthFirst = function(f) {
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
var intercalate2 = function(M) {
  var intercalateM = intercalate(M);
  return function(middle) {
    return match(function() {
      return M.empty;
    }, intercalateM(middle));
  };
};

// node_modules/fp-ts/es6/Array.js
function fromPredicate(predicate) {
  return function(a) {
    return predicate(a) ? [a] : [];
  };
}
function takeLeftWhile(predicate) {
  return function(as3) {
    var out = [];
    for (var _i = 0, as_1 = as3;_i < as_1.length; _i++) {
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
  return function(as3) {
    var _a = splitAt3(spanLeftIndex(as3, predicate))(as3), init3 = _a[0], rest = _a[1];
    return { init: init3, rest };
  };
}
function dropLeftWhile(predicate) {
  return function(as3) {
    return as3.slice(spanLeftIndex(as3, predicate));
  };
}
function findFirst2(predicate) {
  return findFirst(predicate);
}
function findLast2(predicate) {
  return findLast(predicate);
}
function zip(as3, bs) {
  if (bs === undefined) {
    return function(bs2) {
      return zip(bs2, as3);
    };
  }
  return zipWith(as3, bs, function(a, b) {
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
    return isNonEmpty5(input2) ? flatMap2(head3(input2), function(a) {
      return go(pipe(scope, append3(a)), tail3(input2));
    }) : g.apply(undefined, scope) ? [f.apply(undefined, scope)] : [];
  };
  return go([], input);
}
function union4(E) {
  var unionE = union2(E);
  return function(first, second) {
    if (second === undefined) {
      var unionE_1 = union4(E);
      return function(second2) {
        return unionE_1(second2, first);
      };
    }
    return isNonEmpty5(first) && isNonEmpty5(second) ? unionE(second)(first) : isNonEmpty5(first) ? copy2(first) : copy2(second);
  };
}
function intersection2(E) {
  var elemE = elem3(E);
  return function(xs, ys) {
    if (ys === undefined) {
      var intersectionE_1 = intersection2(E);
      return function(ys2) {
        return intersectionE_1(ys2, xs);
      };
    }
    return xs.filter(function(a) {
      return elemE(a, ys);
    });
  };
}
function difference2(E) {
  var elemE = elem3(E);
  return function(xs, ys) {
    if (ys === undefined) {
      var differenceE_1 = difference2(E);
      return function(ys2) {
        return differenceE_1(ys2, xs);
      };
    }
    return xs.filter(function(a) {
      return !elemE(a, ys);
    });
  };
}
var isEmpty2 = function(as3) {
  return as3.length === 0;
};
var isNonEmpty5 = isNonEmpty3;
var prepend3 = prepend2;
var prependW3 = prependW2;
var append3 = append;
var appendW3 = appendW;
var makeBy3 = function(n, f) {
  return n <= 0 ? [] : makeBy(f)(n);
};
var replicate = function(n, a) {
  return makeBy3(n, function() {
    return a;
  });
};
var fromOption = function(ma) {
  return isNone(ma) ? [] : [ma.value];
};
var fromEither2 = function(e) {
  return isLeft(e) ? [] : [e.right];
};
var matchW2 = function(onEmpty, onNonEmpty) {
  return function(as3) {
    return isNonEmpty5(as3) ? onNonEmpty(as3) : onEmpty();
  };
};
var match2 = matchW2;
var matchLeftW = function(onEmpty, onNonEmpty) {
  return function(as3) {
    return isNonEmpty5(as3) ? onNonEmpty(head3(as3), tail3(as3)) : onEmpty();
  };
};
var matchLeft = matchLeftW;
var foldLeft = matchLeft;
var matchRightW = function(onEmpty, onNonEmpty) {
  return function(as3) {
    return isNonEmpty5(as3) ? onNonEmpty(init(as3), last2(as3)) : onEmpty();
  };
};
var matchRight = matchRightW;
var foldRight = matchRight;
var chainWithIndex = function(f) {
  return function(as3) {
    var out = [];
    for (var i = 0;i < as3.length; i++) {
      out.push.apply(out, f(i, as3[i]));
    }
    return out;
  };
};
var scanLeft = function(b, f) {
  return function(as3) {
    var len = as3.length;
    var out = new Array(len + 1);
    out[0] = b;
    for (var i = 0;i < len; i++) {
      out[i + 1] = f(out[i], as3[i]);
    }
    return out;
  };
};
var scanRight = function(b, f) {
  return function(as3) {
    var len = as3.length;
    var out = new Array(len + 1);
    out[len] = b;
    for (var i = len - 1;i >= 0; i--) {
      out[i] = f(as3[i], out[i + 1]);
    }
    return out;
  };
};
var size2 = function(as3) {
  return as3.length;
};
var isOutOfBound4 = isOutOfBound2;
var lookup4 = lookup3;
var head5 = head4;
var last4 = last3;
var tail4 = function(as3) {
  return isNonEmpty5(as3) ? some(tail3(as3)) : none;
};
var init3 = function(as3) {
  return isNonEmpty5(as3) ? some(init(as3)) : none;
};
var takeLeft = function(n) {
  return function(as3) {
    return isOutOfBound4(n, as3) ? copy2(as3) : as3.slice(0, n);
  };
};
var takeRight = function(n) {
  return function(as3) {
    return isOutOfBound4(n, as3) ? copy2(as3) : n === 0 ? [] : as3.slice(-n);
  };
};
var spanLeftIndex = function(as3, predicate) {
  var l = as3.length;
  var i = 0;
  for (;i < l; i++) {
    if (!predicate(as3[i])) {
      break;
    }
  }
  return i;
};
var dropLeft = function(n) {
  return function(as3) {
    return n <= 0 || isEmpty2(as3) ? copy2(as3) : n >= as3.length ? [] : as3.slice(n, as3.length);
  };
};
var dropRight = function(n) {
  return function(as3) {
    return n <= 0 || isEmpty2(as3) ? copy2(as3) : n >= as3.length ? [] : as3.slice(0, as3.length - n);
  };
};
var findIndex2 = findIndex;
var findFirstMap2 = findFirstMap;
var findLastMap2 = findLastMap;
var findLastIndex2 = findLastIndex;
var copy2 = function(as3) {
  return as3.slice();
};
var insertAt = function(i, a) {
  return function(as3) {
    return i < 0 || i > as3.length ? none : some(unsafeInsertAt3(i, a, as3));
  };
};
var updateAt = function(i, a) {
  return modifyAt(i, function() {
    return a;
  });
};
var deleteAt = function(i) {
  return function(as3) {
    return isOutOfBound4(i, as3) ? none : some(unsafeDeleteAt(i, as3));
  };
};
var modifyAt = function(i, f) {
  return function(as3) {
    return isOutOfBound4(i, as3) ? none : some(unsafeUpdateAt3(i, f(as3[i]), as3));
  };
};
var reverse2 = function(as3) {
  return isEmpty2(as3) ? [] : as3.slice().reverse();
};
var rights = function(as3) {
  var r = [];
  for (var i = 0;i < as3.length; i++) {
    var a = as3[i];
    if (a._tag === "Right") {
      r.push(a.right);
    }
  }
  return r;
};
var lefts = function(as3) {
  var r = [];
  for (var i = 0;i < as3.length; i++) {
    var a = as3[i];
    if (a._tag === "Left") {
      r.push(a.left);
    }
  }
  return r;
};
var sort2 = function(O) {
  return function(as3) {
    return as3.length <= 1 ? copy2(as3) : as3.slice().sort(O.compare);
  };
};
var zipWith = function(fa, fb, f) {
  var fc = [];
  var len = Math.min(fa.length, fb.length);
  for (var i = 0;i < len; i++) {
    fc[i] = f(fa[i], fb[i]);
  }
  return fc;
};
var unzip = function(as3) {
  var fa = [];
  var fb = [];
  for (var i = 0;i < as3.length; i++) {
    fa[i] = as3[i][0];
    fb[i] = as3[i][1];
  }
  return [fa, fb];
};
var prependAll3 = function(middle) {
  var f = prependAll2(middle);
  return function(as3) {
    return isNonEmpty5(as3) ? f(as3) : [];
  };
};
var intersperse3 = function(middle) {
  var f = intersperse2(middle);
  return function(as3) {
    return isNonEmpty5(as3) ? f(as3) : copy2(as3);
  };
};
var rotate3 = function(n) {
  var f = rotate(n);
  return function(as3) {
    return isNonEmpty5(as3) ? f(as3) : copy2(as3);
  };
};
var elem3 = elem2;
var uniq3 = function(E) {
  var f = uniq(E);
  return function(as3) {
    return isNonEmpty5(as3) ? f(as3) : copy2(as3);
  };
};
var sortBy3 = function(ords) {
  var f = sortBy(ords);
  return function(as3) {
    return isNonEmpty5(as3) ? f(as3) : copy2(as3);
  };
};
var chop3 = function(f) {
  var g = chop(f);
  return function(as3) {
    return isNonEmpty5(as3) ? g(as3) : [];
  };
};
var splitAt3 = function(n) {
  return function(as3) {
    return n >= 1 && isNonEmpty5(as3) ? splitAt(n)(as3) : isEmpty2(as3) ? [copy2(as3), []] : [[], copy2(as3)];
  };
};
var chunksOf3 = function(n) {
  var f = chunksOf(n);
  return function(as3) {
    return isNonEmpty5(as3) ? f(as3) : [];
  };
};
var fromOptionK = function(f) {
  return function() {
    var a = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      a[_i] = arguments[_i];
    }
    return fromOption(f.apply(undefined, a));
  };
};
var concatW = function(second) {
  return function(first) {
    return isEmpty2(first) ? copy2(second) : isEmpty2(second) ? copy2(first) : first.concat(second);
  };
};
var concat2 = concatW;
var _map2 = function(fa, f) {
  return pipe(fa, map2(f));
};
var _mapWithIndex = function(fa, f) {
  return pipe(fa, mapWithIndex(f));
};
var _ap2 = function(fab, fa) {
  return pipe(fab, ap2(fa));
};
var _filter = function(fa, predicate) {
  return pipe(fa, filter(predicate));
};
var _filterMap = function(fa, f) {
  return pipe(fa, filterMap(f));
};
var _partition = function(fa, predicate) {
  return pipe(fa, partition(predicate));
};
var _partitionMap = function(fa, f) {
  return pipe(fa, partitionMap(f));
};
var _partitionWithIndex = function(fa, predicateWithIndex) {
  return pipe(fa, partitionWithIndex(predicateWithIndex));
};
var _partitionMapWithIndex = function(fa, f) {
  return pipe(fa, partitionMapWithIndex(f));
};
var _alt = function(fa, that) {
  return pipe(fa, alt(that));
};
var _reduce = function(fa, b, f) {
  return pipe(fa, reduce4(b, f));
};
var _foldMap = function(M) {
  var foldMapM = foldMap4(M);
  return function(fa, f) {
    return pipe(fa, foldMapM(f));
  };
};
var _reduceRight = function(fa, b, f) {
  return pipe(fa, reduceRight4(b, f));
};
var _reduceWithIndex = function(fa, b, f) {
  return pipe(fa, reduceWithIndex4(b, f));
};
var _foldMapWithIndex = function(M) {
  var foldMapWithIndexM = foldMapWithIndex4(M);
  return function(fa, f) {
    return pipe(fa, foldMapWithIndexM(f));
  };
};
var _reduceRightWithIndex = function(fa, b, f) {
  return pipe(fa, reduceRightWithIndex4(b, f));
};
var _filterMapWithIndex = function(fa, f) {
  return pipe(fa, filterMapWithIndex(f));
};
var _filterWithIndex = function(fa, predicateWithIndex) {
  return pipe(fa, filterWithIndex(predicateWithIndex));
};
var _extend = function(fa, f) {
  return pipe(fa, extend(f));
};
var _traverse = function(F) {
  var traverseF = traverse(F);
  return function(ta, f) {
    return pipe(ta, traverseF(f));
  };
};
var _traverseWithIndex = function(F) {
  var traverseWithIndexF = traverseWithIndex(F);
  return function(ta, f) {
    return pipe(ta, traverseWithIndexF(f));
  };
};
var _chainRecDepthFirst2 = _chainRecDepthFirst;
var _chainRecBreadthFirst2 = _chainRecBreadthFirst;
var of3 = of;
var zero = function() {
  return [];
};
var map2 = function(f) {
  return function(fa) {
    return fa.map(function(a) {
      return f(a);
    });
  };
};
var ap2 = function(fa) {
  return flatMap2(function(f) {
    return pipe(fa, map2(f));
  });
};
var flatMap2 = dual(2, function(ma, f) {
  return pipe(ma, chainWithIndex(function(i, a) {
    return f(a, i);
  }));
});
var flatten = flatMap2(identity);
var mapWithIndex = function(f) {
  return function(fa) {
    return fa.map(function(a, i) {
      return f(i, a);
    });
  };
};
var filterMapWithIndex = function(f) {
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
var filterMap = function(f) {
  return filterMapWithIndex(function(_, a) {
    return f(a);
  });
};
var compact = filterMap(identity);
var separate = function(fa) {
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
var filter = function(predicate) {
  return function(as3) {
    return as3.filter(predicate);
  };
};
var partition = function(predicate) {
  return partitionWithIndex(function(_, a) {
    return predicate(a);
  });
};
var partitionWithIndex = function(predicateWithIndex) {
  return function(as3) {
    var left = [];
    var right = [];
    for (var i = 0;i < as3.length; i++) {
      var b = as3[i];
      if (predicateWithIndex(i, b)) {
        right.push(b);
      } else {
        left.push(b);
      }
    }
    return separated(left, right);
  };
};
var partitionMap = function(f) {
  return partitionMapWithIndex(function(_, a) {
    return f(a);
  });
};
var partitionMapWithIndex = function(f) {
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
var altW = function(that) {
  return function(fa) {
    return fa.concat(that());
  };
};
var alt = altW;
var filterWithIndex = function(predicateWithIndex) {
  return function(as3) {
    return as3.filter(function(b, i) {
      return predicateWithIndex(i, b);
    });
  };
};
var extend = function(f) {
  return function(wa) {
    return wa.map(function(_, i) {
      return f(wa.slice(i));
    });
  };
};
var duplicate = extend(identity);
var foldMap4 = foldMap3;
var foldMapWithIndex4 = foldMapWithIndex3;
var reduce4 = reduce3;
var reduceWithIndex4 = reduceWithIndex3;
var reduceRight4 = reduceRight3;
var reduceRightWithIndex4 = reduceRightWithIndex3;
var traverse = function(F) {
  var traverseWithIndexF = traverseWithIndex(F);
  return function(f) {
    return traverseWithIndexF(function(_, a) {
      return f(a);
    });
  };
};
var sequence = function(F) {
  return function(ta) {
    return _reduce(ta, F.of(zero()), function(fas, fa) {
      return F.ap(F.map(fas, function(as3) {
        return function(a) {
          return pipe(as3, append3(a));
        };
      }), fa);
    });
  };
};
var traverseWithIndex = function(F) {
  return function(f) {
    return reduceWithIndex4(F.of(zero()), function(i, fbs, a) {
      return F.ap(F.map(fbs, function(bs) {
        return function(b) {
          return pipe(bs, append3(b));
        };
      }), f(i, a));
    });
  };
};
var wither = function(F) {
  var _witherF = _wither(F);
  return function(f) {
    return function(fa) {
      return _witherF(fa, f);
    };
  };
};
var wilt = function(F) {
  var _wiltF = _wilt(F);
  return function(f) {
    return function(fa) {
      return _wiltF(fa, f);
    };
  };
};
var unfold = function(b, f) {
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
var URI3 = "Array";
var getShow4 = getShow3;
var getSemigroup3 = function() {
  return {
    concat: function(first, second) {
      return first.concat(second);
    }
  };
};
var getMonoid3 = function() {
  return {
    concat: getSemigroup3().concat,
    empty: []
  };
};
var getEq4 = getEq3;
var getOrd2 = getOrd;
var getUnionSemigroup = function(E) {
  var unionE = union4(E);
  return {
    concat: function(first, second) {
      return unionE(second)(first);
    }
  };
};
var getUnionMonoid = function(E) {
  return {
    concat: getUnionSemigroup(E).concat,
    empty: []
  };
};
var getIntersectionSemigroup = function(E) {
  var intersectionE = intersection2(E);
  return {
    concat: function(first, second) {
      return intersectionE(second)(first);
    }
  };
};
var getDifferenceMagma = function(E) {
  var differenceE = difference2(E);
  return {
    concat: function(first, second) {
      return differenceE(second)(first);
    }
  };
};
var Functor4 = {
  URI: URI3,
  map: _map2
};
var flap2 = flap(Functor4);
var Pointed = {
  URI: URI3,
  of: of3
};
var FunctorWithIndex = {
  URI: URI3,
  map: _map2,
  mapWithIndex: _mapWithIndex
};
var Apply2 = {
  URI: URI3,
  map: _map2,
  ap: _ap2
};
var apFirst2 = apFirst(Apply2);
var apSecond2 = apSecond(Apply2);
var Applicative = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  of: of3
};
var Chain4 = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  chain: flatMap2
};
var chainFirst2 = chainFirst(Chain4);
var Monad = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  of: of3,
  chain: flatMap2
};
var Unfoldable = {
  URI: URI3,
  unfold
};
var Alt = {
  URI: URI3,
  map: _map2,
  alt: _alt
};
var Zero2 = {
  URI: URI3,
  zero
};
var guard2 = guard(Zero2, Pointed);
var Alternative = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  of: of3,
  alt: _alt,
  zero
};
var Extend = {
  URI: URI3,
  map: _map2,
  extend: _extend
};
var Compactable = {
  URI: URI3,
  compact,
  separate
};
var Filterable = {
  URI: URI3,
  map: _map2,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap
};
var FilterableWithIndex = {
  URI: URI3,
  map: _map2,
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
var Foldable = {
  URI: URI3,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight
};
var FoldableWithIndex = {
  URI: URI3,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex
};
var Traversable = {
  URI: URI3,
  map: _map2,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence
};
var TraversableWithIndex = {
  URI: URI3,
  map: _map2,
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
var _wither = witherDefault(Traversable, Compactable);
var _wilt = wiltDefault(Traversable, Compactable);
var Witherable2 = {
  URI: URI3,
  map: _map2,
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
var chainRecDepthFirst2 = chainRecDepthFirst;
var ChainRecDepthFirst = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  chain: flatMap2,
  chainRec: _chainRecDepthFirst2
};
var chainRecBreadthFirst2 = chainRecBreadthFirst;
var ChainRecBreadthFirst = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  chain: flatMap2,
  chainRec: _chainRecBreadthFirst2
};
var filterE2 = filterE(Witherable2);
var FromEither4 = {
  URI: URI3,
  fromEither: fromEither2
};
var fromEitherK2 = fromEitherK(FromEither4);
var unsafeInsertAt3 = unsafeInsertAt;
var unsafeUpdateAt3 = function(i, a, as3) {
  return isNonEmpty5(as3) ? unsafeUpdateAt(i, a, as3) : [];
};
var unsafeDeleteAt = function(i, as3) {
  var xs = as3.slice();
  xs.splice(i, 1);
  return xs;
};
var every2 = every;
var some3 = function(predicate) {
  return function(as3) {
    return as3.some(predicate);
  };
};
var exists = some3;
var intercalate3 = intercalate2;
var Do = of3(emptyRecord);
var bindTo2 = bindTo(Functor4);
var let_2 = let_(Functor4);
var bind2 = bind(Chain4);
var apS2 = apS(Apply2);
var chain = flatMap2;
var range3 = range;
var empty5 = [];
var cons3 = cons;
var snoc3 = snoc;
var prependToAll = prependAll3;
var array = {
  URI: URI3,
  compact,
  separate,
  map: _map2,
  ap: _ap2,
  of: of3,
  chain: flatMap2,
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

// node_modules/fp-ts/es6/Endomorphism.js
var getSemigroup4 = function() {
  return {
    concat: function(first, second) {
      return flow(first, second);
    }
  };
};
var getMonoid4 = function() {
  return {
    concat: getSemigroup4().concat,
    empty: identity
  };
};

// node_modules/fp-ts/es6/Monoid.js
var concatAll4 = function(M) {
  return concatAll2(M)(M.empty);
};
var monoidVoid = {
  concat: semigroupVoid.concat,
  empty: undefined
};
var monoidAll = {
  concat: semigroupAll.concat,
  empty: true
};
var monoidAny = {
  concat: semigroupAny.concat,
  empty: false
};
var monoidString = {
  concat: semigroupString.concat,
  empty: ""
};
var monoidSum = {
  concat: semigroupSum.concat,
  empty: 0
};
var monoidProduct = {
  concat: semigroupProduct.concat,
  empty: 1
};

// node_modules/fp-ts-std/dist/esm/Function.js
var URI4 = "Function";
var map3 = (f) => (g) => flow(g, f);
var Functor6 = {
  URI: URI4,
  map: (f, g) => map3(g)(f)
};
var of4 = constant;
var ap3 = (f) => (g) => (x) => g(x)(f(x));
var Applicative2 = {
  ...Functor6,
  of: of4,
  ap: (f, g) => ap3(g)(f)
};
var apFirst3 = apFirst(Applicative2);
var apSecond3 = apSecond(Applicative2);
var chain2 = (f) => (g) => (x) => f(g(x))(x);
var Monad2 = {
  ...Applicative2,
  chain: (f, g) => chain2(g)(f)
};
var Do2 = of4({});
var bindTo3 = bindTo(Functor6);
var bind3 = bind(Monad2);
var apS3 = apS(Applicative2);
var let_3 = let_(Functor6);
var unary = tupled;
var unless = (f) => (onFalse) => (x) => f(x) ? x : onFalse(x);
var when = flow(not, unless);
var invoke = (x) => (ys) => (z) => z[x](...ys);
var invokeNullary = flip(invoke)([]);
var memoize = (eq2) => (f) => {
  const cache = new Map;
  return (k) => {
    const cached = lookup2(eq2)(k)(cache);
    if (isSome2(cached))
      return cached.value;
    const val = f(k);
    cache.set(k, val);
    return val;
  };
};
var curry2T = (f) => (a) => (b) => f([a, b]);
var curry2 = flow(unary, curry2T);
var curry3T = (f) => (a) => (b) => (c) => f([a, b, c]);
var curry3 = flow(unary, curry3T);
var curry4T = (f) => (a) => (b) => (c) => (d) => f([a, b, c, d]);
var curry4 = flow(unary, curry4T);
var curry5T = (f) => (a) => (b) => (c) => (d) => (e) => f([a, b, c, d, e]);
var curry5 = flow(unary, curry5T);
var applyEvery = concatAll4(getMonoid4());

// node_modules/fp-ts-std/dist/esm/Predicate.js
var anyPass = (fs) => concatAll4(getMonoidAny())(fs);

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
      return Semigroup;
    }
  },
  Ord: () => {
    {
      return Ord4;
    }
  },
  Monoid: () => {
    {
      return Monoid3;
    }
  },
  Eq: () => {
    {
      return Eq4;
    }
  }
});
var Eq4 = {
  equals: function(first, second) {
    return first === second;
  }
};
var Semigroup = {
  concat: function(first, second) {
    return first + second;
  }
};
var empty6 = "";
var Monoid3 = {
  concat: Semigroup.concat,
  empty: empty6
};
var Ord4 = {
  equals: Eq4.equals,
  compare: function(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
  }
};
var Show = {
  show: function(s) {
    return JSON.stringify(s);
  }
};
var isString = function(u) {
  return typeof u === "string";
};
var toUpperCase = function(s) {
  return s.toUpperCase();
};
var toLowerCase = function(s) {
  return s.toLowerCase();
};
var replace = function(searchValue, replaceValue) {
  return function(s) {
    return s.replace(searchValue, replaceValue);
  };
};
var trim = function(s) {
  return s.trim();
};
var trimLeft = function(s) {
  return s.trimLeft();
};
var trimRight = function(s) {
  return s.trimRight();
};
var slice = function(start, end) {
  return function(s) {
    return s.slice(start, end);
  };
};
var isEmpty3 = function(s) {
  return s.length === 0;
};
var size3 = function(s) {
  return s.length;
};
var split = function(separator) {
  return function(s) {
    var out = s.split(separator);
    return isNonEmpty2(out) ? out : [s];
  };
};
var includes = function(searchString, position) {
  return function(s) {
    return s.includes(searchString, position);
  };
};
var startsWith = function(searchString, position) {
  return function(s) {
    return s.startsWith(searchString, position);
  };
};
var endsWith = function(searchString, position) {
  return function(s) {
    return s.endsWith(searchString, position);
  };
};

// shared/fp.tsx
var pMchain = (f) => async (fa) => f(await fa);
var chunckify = (n) => (g) => flow(exports_Array.chunksOf(n), exports_Array.map(g), (ps) => Promise.all(ps), pMchain(exports_Array.flatten));
var memoize2 = (fn) => pipe(fn, tupled, memoize(exports_Eq.contramap(JSON.stringify)(exports_string.Eq)), untupled);

// shared/util.tsx
var SpotifyLoc;
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

// shared/api.tsx
var { URI: URI5 } = Spicetify;
var fetchWebArtistsSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists);
var fetchWebPlaylistsSpot = chunckify(1)(async ([id]) => [
  await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)
]);
var fetchWebAlbumsSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums);
var fetchWebTracksSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks);
var fetchPlatPlaylistEnhancedSongs300 = async (uri, offset = 0, limit = 300) => (await Spicetify.Platform.EnhanceAPI.getPage(uri, 0, 0, offset, limit)).enhancePage.pageItems;
var fetchPlatPlaylistEnhancedSongs = async (uri, offset = 0) => {
  const nextPageItems = await fetchPlatPlaylistEnhancedSongs300(uri, offset);
  if (nextPageItems?.length < 300)
    return nextPageItems;
  else
    return nextPageItems.concat(fetchPlatPlaylistEnhancedSongs(uri, offset + 300));
};
var fetchTrackLFMAPI = async (LFMApiKey, artist, trackName, lastFmUsername = "") => {
  const url = new URL("https://ws.audioscrobbler.com/2.0/");
  url.searchParams.append("method", "track.getInfo");
  url.searchParams.append("api_key", LFMApiKey);
  url.searchParams.append("artist", artist);
  url.searchParams.append("track", trackName);
  url.searchParams.append("format", "json");
  url.searchParams.append("username", lastFmUsername);
  return await fetch(url).then((res) => res.json());
};
var fetchTrackLFMAPIMemoized = memoize2(fetchTrackLFMAPI);

// extensions/play-enhanced-songs/app.tsx
var { URI: URI6 } = Spicetify;
var queue = new Array;
var playEnhancedSongs = async (uri) => {
  queue = await fetchPlatPlaylistEnhancedSongs(uri);
  Spicetify.Platform.PlayerAPI.clearQueue();
  Spicetify.Platform.PlayerAPI.addToQueue(queue);
};
new Spicetify.ContextMenu.Item("Play enhanced songs", tupled(playEnhancedSongs), tupled(anyPass([URI6.isPlaylistV1OrV2])), "enhance").register();

//# debugId=9E28595EA2C4DFF964756e2164756e21
