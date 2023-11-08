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

// react
var require_react = __commonJS((exports, module) => {
  module.exports = Spicetify.React;
});

// react-dom
var require_react_dom = __commonJS((exports, module) => {
  module.exports = Spicetify.ReactDOM;
});

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
var getSemigroup = function(S) {
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
var getMonoid = function(M) {
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
var apply = function(a) {
  return function(f) {
    return f(a);
  };
};
var constUndefined = constant(undefined);
var constVoid = constUndefined;
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
var singleton = function(a) {
  return [a];
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
var emptyReadonlyArray = [];
var emptyRecord = {};
var fromReadonlyNonEmptyArray = function(as) {
  return __spreadArray2([as[0]], as.slice(1), true);
};
var flatMapIO = function(F, M) {
  return dual(2, function(self, f) {
    return M.flatMap(self, function(a) {
      return F.fromIO(f(a));
    });
  });
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
      return unsafeDeleteAt2;
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
      return takeLeftWhile2;
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
      return sort3;
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
      return reverse3;
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
      return insertAt2;
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
      return empty4;
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
      return dropLeftWhile2;
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
      return deleteAt2;
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
var getSemigroup2 = function() {
  return {
    concat: function(x, y) {
      return fromEquals(function(a, b) {
        return x.equals(a, b) && y.equals(a, b);
      });
    }
  };
};
var getMonoid2 = function() {
  return {
    concat: getSemigroup2().concat,
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
var getSemigroup3 = function() {
  return {
    concat: function(first, second) {
      return fromCompare(function(a, b) {
        var ox = first.compare(a, b);
        return ox !== 0 ? ox : second.compare(a, b);
      });
    }
  };
};
var getMonoid3 = function() {
  return {
    concat: getSemigroup3().concat,
    empty: fromCompare(function() {
      return 0;
    })
  };
};
var min = function(O) {
  return function(first, second) {
    return first === second || O.compare(first, second) < 1 ? first : second;
  };
};
var max = function(O) {
  return function(first, second) {
    return first === second || O.compare(first, second) > -1 ? first : second;
  };
};
var strictOrd = {
  equals: eqStrict.equals,
  compare
};

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

// node_modules/fp-ts/es6/Semigroup.js
var min2 = function(O) {
  return {
    concat: min(O)
  };
};
var max2 = function(O) {
  return {
    concat: max(O)
  };
};
var constant2 = function(a) {
  return {
    concat: function() {
      return a;
    }
  };
};
var first = function() {
  return { concat: identity };
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
var empty2 = emptyReadonlyArray;
var isNonEmpty2 = isNonEmpty;
var isOutOfBound = function(i, as2) {
  return i < 0 || i >= as2.length;
};
var prependW = function(head2) {
  return function(tail2) {
    return __spreadArray3([head2], tail2, true);
  };
};
var prepend = prependW;
var unsafeInsertAt = function(i, a, as2) {
  if (isNonEmpty2(as2)) {
    var xs = fromReadonlyNonEmptyArray(as2);
    xs.splice(i, 0, a);
    return xs;
  }
  return [a];
};
var sort = function(O) {
  return function(as2) {
    return as2.length === 1 ? as2 : as2.slice().sort(O.compare);
  };
};
var prependAll = function(middle) {
  return function(as2) {
    var out = [middle, as2[0]];
    for (var i = 1;i < as2.length; i++) {
      out.push(middle, as2[i]);
    }
    return out;
  };
};
var intersperse = function(middle) {
  return function(as2) {
    var rest = tail2(as2);
    return isNonEmpty2(rest) ? pipe(rest, prependAll(middle), prepend(head2(as2))) : as2;
  };
};
var extract = head;
var head2 = extract;
var tail2 = tail;
var last = function(as2) {
  return as2[as2.length - 1];
};
var concatAll3 = function(S) {
  return function(as2) {
    return as2.reduce(S.concat);
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
var isNonEmpty3 = function(as2) {
  return as2.length > 0;
};
var isOutOfBound2 = function(i, as2) {
  return i < 0 || i >= as2.length;
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
var unsafeInsertAt2 = function(i, a, as2) {
  if (isNonEmpty3(as2)) {
    var xs = fromReadonlyNonEmptyArray2(as2);
    xs.splice(i, 0, a);
    return xs;
  }
  return [a];
};
var unsafeUpdateAt = function(i, a, as2) {
  var xs = fromReadonlyNonEmptyArray2(as2);
  xs[i] = a;
  return xs;
};
var uniq = function(E) {
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
var sortBy = function(ords) {
  if (isNonEmpty3(ords)) {
    var M = getMonoid3();
    return sort2(ords.reduce(M.concat, M.empty));
  }
  return copy;
};
var union = function(E) {
  var uniqE = uniq(E);
  return function(second) {
    return function(first2) {
      return uniqE(pipe(first2, concat(second)));
    };
  };
};
var rotate = function(n) {
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
var sort2 = function(O) {
  return function(as2) {
    return as2.slice().sort(O.compare);
  };
};
var copy = fromReadonlyNonEmptyArray2;
var of = function(a) {
  return [a];
};
var prependAll2 = function(middle) {
  return function(as2) {
    var out = [middle, as2[0]];
    for (var i = 1;i < as2.length; i++) {
      out.push(middle, as2[i]);
    }
    return out;
  };
};
var intersperse2 = function(middle) {
  return function(as2) {
    var rest = tail3(as2);
    return isNonEmpty3(rest) ? pipe(rest, prependAll2(middle), prepend2(head3(as2))) : copy(as2);
  };
};
var chop = function(f) {
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
var splitAt = function(n) {
  return function(as2) {
    var m = Math.max(1, n);
    return m >= as2.length ? [copy(as2), []] : [pipe(as2.slice(1, m), prepend2(head3(as2))), as2.slice(m)];
  };
};
var chunksOf = function(n) {
  return chop(splitAt(n));
};
var head3 = head2;
var tail3 = function(as2) {
  return as2.slice(1);
};
var last2 = last;
var init = function(as2) {
  return as2.slice(0, -1);
};
var snoc = function(init2, end) {
  return pipe(init2, append(end));
};

// node_modules/fp-ts/es6/number.js
var Eq2 = {
  equals: function(first2, second) {
    return first2 === second;
  }
};
var Ord2 = {
  equals: Eq2.equals,
  compare: function(first2, second) {
    return first2 < second ? -1 : first2 > second ? 1 : 0;
  }
};
var Bounded = {
  equals: Eq2.equals,
  compare: Ord2.compare,
  top: Infinity,
  bottom: (-Infinity)
};
var MagmaSub = {
  concat: function(first2, second) {
    return first2 - second;
  }
};
var SemigroupSum = {
  concat: function(first2, second) {
    return first2 + second;
  }
};
var SemigroupProduct = {
  concat: function(first2, second) {
    return first2 * second;
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
  div: function(first2, second) {
    return first2 / second;
  },
  mod: function(first2, second) {
    return first2 % second;
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

// node_modules/fp-ts/es6/ReadonlyArray.js
function lookup(i, as2) {
  return as2 === undefined ? function(as3) {
    return lookup(i, as3);
  } : isOutOfBound3(i, as2) ? none : some(as2[i]);
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
    var len = out.length;
    return len === as2.length ? as2 : len === 0 ? empty3 : out;
  };
}
function dropLeftWhile(predicate) {
  return function(as2) {
    var i = spanLeftIndex(as2, predicate);
    return i === 0 ? as2 : i === as2.length ? empty3 : as2.slice(i);
  };
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
  return function(as2) {
    return isNonEmpty4(as2) ? onNonEmpty(as2) : onEmpty();
  };
};
var match = matchW;
var isOutOfBound3 = isOutOfBound;
var head4 = function(as2) {
  return isNonEmpty4(as2) ? some(head2(as2)) : none;
};
var last3 = function(as2) {
  return isNonEmpty4(as2) ? some(last(as2)) : none;
};
var spanLeftIndex = function(as2, predicate) {
  var l = as2.length;
  var i = 0;
  for (;i < l; i++) {
    if (!predicate(as2[i])) {
      break;
    }
  }
  return i;
};
var findIndex = function(predicate) {
  return function(as2) {
    for (var i = 0;i < as2.length; i++) {
      if (predicate(as2[i])) {
        return some(i);
      }
    }
    return none;
  };
};
var findFirstMap = function(f) {
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
var findLastMap = function(f) {
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
var findLastIndex = function(predicate) {
  return function(as2) {
    for (var i = as2.length - 1;i >= 0; i--) {
      if (predicate(as2[i])) {
        return some(i);
      }
    }
    return none;
  };
};
var insertAt = function(i, a) {
  return function(as2) {
    return i < 0 || i > as2.length ? none : some(unsafeInsertAt(i, a, as2));
  };
};
var deleteAt = function(i) {
  return function(as2) {
    return isOutOfBound3(i, as2) ? none : some(unsafeDeleteAt(i, as2));
  };
};
var reverse2 = function(as2) {
  return as2.length <= 1 ? as2 : as2.slice().reverse();
};
var _chainRecDepthFirst = function(a, f) {
  return pipe(a, chainRecDepthFirst(f));
};
var _chainRecBreadthFirst = function(a, f) {
  return pipe(a, chainRecBreadthFirst(f));
};
var foldMapWithIndex2 = function(M) {
  return function(f) {
    return function(fa) {
      return fa.reduce(function(b, a, i) {
        return M.concat(b, f(i, a));
      }, M.empty);
    };
  };
};
var reduce2 = function(b, f) {
  return reduceWithIndex2(b, function(_, b2, a) {
    return f(b2, a);
  });
};
var foldMap2 = function(M) {
  var foldMapWithIndexM = foldMapWithIndex2(M);
  return function(f) {
    return foldMapWithIndexM(function(_, a) {
      return f(a);
    });
  };
};
var reduceWithIndex2 = function(b, f) {
  return function(fa) {
    var len = fa.length;
    var out = b;
    for (var i = 0;i < len; i++) {
      out = f(i, out, fa[i]);
    }
    return out;
  };
};
var reduceRight2 = function(b, f) {
  return reduceRightWithIndex2(b, function(_, a, b2) {
    return f(a, b2);
  });
};
var reduceRightWithIndex2 = function(b, f) {
  return function(fa) {
    return fa.reduceRight(function(b2, a, i) {
      return f(i, a, b2);
    }, b);
  };
};
var getShow2 = function(S) {
  return {
    show: function(as2) {
      return "[".concat(as2.map(S.show).join(", "), "]");
    }
  };
};
var getEq2 = function(E) {
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
var unsafeDeleteAt = function(i, as2) {
  var xs = as2.slice();
  xs.splice(i, 1);
  return xs;
};
var empty3 = empty2;
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
function takeLeftWhile2(predicate) {
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
    var _a = splitAt3(spanLeftIndex2(as2, predicate))(as2), init3 = _a[0], rest = _a[1];
    return { init: init3, rest };
  };
}
function dropLeftWhile2(predicate) {
  return function(as2) {
    return as2.slice(spanLeftIndex2(as2, predicate));
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
var isEmpty = function(as2) {
  return as2.length === 0;
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
var fromEither = function(e) {
  return isLeft(e) ? [] : [e.right];
};
var matchW2 = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty5(as2) ? onNonEmpty(as2) : onEmpty();
  };
};
var match2 = matchW2;
var matchLeftW = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty5(as2) ? onNonEmpty(head3(as2), tail3(as2)) : onEmpty();
  };
};
var matchLeft = matchLeftW;
var foldLeft = matchLeft;
var matchRightW = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty5(as2) ? onNonEmpty(init(as2), last2(as2)) : onEmpty();
  };
};
var matchRight = matchRightW;
var foldRight = matchRight;
var chainWithIndex = function(f) {
  return function(as2) {
    var out = [];
    for (var i = 0;i < as2.length; i++) {
      out.push.apply(out, f(i, as2[i]));
    }
    return out;
  };
};
var scanLeft = function(b, f) {
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
var scanRight = function(b, f) {
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
var size = function(as2) {
  return as2.length;
};
var isOutOfBound4 = isOutOfBound2;
var lookup2 = lookup;
var head5 = head4;
var last4 = last3;
var tail4 = function(as2) {
  return isNonEmpty5(as2) ? some(tail3(as2)) : none;
};
var init3 = function(as2) {
  return isNonEmpty5(as2) ? some(init(as2)) : none;
};
var takeLeft = function(n) {
  return function(as2) {
    return isOutOfBound4(n, as2) ? copy2(as2) : as2.slice(0, n);
  };
};
var takeRight = function(n) {
  return function(as2) {
    return isOutOfBound4(n, as2) ? copy2(as2) : n === 0 ? [] : as2.slice(-n);
  };
};
var spanLeftIndex2 = function(as2, predicate) {
  var l = as2.length;
  var i = 0;
  for (;i < l; i++) {
    if (!predicate(as2[i])) {
      break;
    }
  }
  return i;
};
var dropLeft = function(n) {
  return function(as2) {
    return n <= 0 || isEmpty(as2) ? copy2(as2) : n >= as2.length ? [] : as2.slice(n, as2.length);
  };
};
var dropRight = function(n) {
  return function(as2) {
    return n <= 0 || isEmpty(as2) ? copy2(as2) : n >= as2.length ? [] : as2.slice(0, as2.length - n);
  };
};
var findIndex2 = findIndex;
var findFirstMap2 = findFirstMap;
var findLastMap2 = findLastMap;
var findLastIndex2 = findLastIndex;
var copy2 = function(as2) {
  return as2.slice();
};
var insertAt2 = function(i, a) {
  return function(as2) {
    return i < 0 || i > as2.length ? none : some(unsafeInsertAt3(i, a, as2));
  };
};
var updateAt = function(i, a) {
  return modifyAt(i, function() {
    return a;
  });
};
var deleteAt2 = function(i) {
  return function(as2) {
    return isOutOfBound4(i, as2) ? none : some(unsafeDeleteAt2(i, as2));
  };
};
var modifyAt = function(i, f) {
  return function(as2) {
    return isOutOfBound4(i, as2) ? none : some(unsafeUpdateAt3(i, f(as2[i]), as2));
  };
};
var reverse3 = function(as2) {
  return isEmpty(as2) ? [] : as2.slice().reverse();
};
var rights = function(as2) {
  var r = [];
  for (var i = 0;i < as2.length; i++) {
    var a = as2[i];
    if (a._tag === "Right") {
      r.push(a.right);
    }
  }
  return r;
};
var lefts = function(as2) {
  var r = [];
  for (var i = 0;i < as2.length; i++) {
    var a = as2[i];
    if (a._tag === "Left") {
      r.push(a.left);
    }
  }
  return r;
};
var sort3 = function(O) {
  return function(as2) {
    return as2.length <= 1 ? copy2(as2) : as2.slice().sort(O.compare);
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
var unzip = function(as2) {
  var fa = [];
  var fb = [];
  for (var i = 0;i < as2.length; i++) {
    fa[i] = as2[i][0];
    fb[i] = as2[i][1];
  }
  return [fa, fb];
};
var prependAll3 = function(middle) {
  var f = prependAll2(middle);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : [];
  };
};
var intersperse3 = function(middle) {
  var f = intersperse2(middle);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : copy2(as2);
  };
};
var rotate3 = function(n) {
  var f = rotate(n);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : copy2(as2);
  };
};
var elem2 = elem;
var uniq3 = function(E) {
  var f = uniq(E);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : copy2(as2);
  };
};
var sortBy3 = function(ords) {
  var f = sortBy(ords);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : copy2(as2);
  };
};
var chop3 = function(f) {
  var g = chop(f);
  return function(as2) {
    return isNonEmpty5(as2) ? g(as2) : [];
  };
};
var splitAt3 = function(n) {
  return function(as2) {
    return n >= 1 && isNonEmpty5(as2) ? splitAt(n)(as2) : isEmpty(as2) ? [copy2(as2), []] : [[], copy2(as2)];
  };
};
var chunksOf3 = function(n) {
  var f = chunksOf(n);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : [];
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
  return function(first2) {
    return isEmpty(first2) ? copy2(second) : isEmpty(second) ? copy2(first2) : first2.concat(second);
  };
};
var concat2 = concatW;
var _map = function(fa, f) {
  return pipe(fa, map(f));
};
var _mapWithIndex = function(fa, f) {
  return pipe(fa, mapWithIndex(f));
};
var _ap = function(fab, fa) {
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
  return pipe(fa, reduce3(b, f));
};
var _foldMap = function(M) {
  var foldMapM = foldMap3(M);
  return function(fa, f) {
    return pipe(fa, foldMapM(f));
  };
};
var _reduceRight = function(fa, b, f) {
  return pipe(fa, reduceRight3(b, f));
};
var _reduceWithIndex = function(fa, b, f) {
  return pipe(fa, reduceWithIndex3(b, f));
};
var _foldMapWithIndex = function(M) {
  var foldMapWithIndexM = foldMapWithIndex3(M);
  return function(fa, f) {
    return pipe(fa, foldMapWithIndexM(f));
  };
};
var _reduceRightWithIndex = function(fa, b, f) {
  return pipe(fa, reduceRightWithIndex3(b, f));
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
var map = function(f) {
  return function(fa) {
    return fa.map(function(a) {
      return f(a);
    });
  };
};
var ap2 = function(fa) {
  return flatMap(function(f) {
    return pipe(fa, map(f));
  });
};
var flatMap = dual(2, function(ma, f) {
  return pipe(ma, chainWithIndex(function(i, a) {
    return f(a, i);
  }));
});
var flatten = flatMap(identity);
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
  return function(as2) {
    return as2.filter(predicate);
  };
};
var partition = function(predicate) {
  return partitionWithIndex(function(_, a) {
    return predicate(a);
  });
};
var partitionWithIndex = function(predicateWithIndex) {
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
  return function(as2) {
    return as2.filter(function(b, i) {
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
var foldMap3 = foldMap2;
var foldMapWithIndex3 = foldMapWithIndex2;
var reduce3 = reduce2;
var reduceWithIndex3 = reduceWithIndex2;
var reduceRight3 = reduceRight2;
var reduceRightWithIndex3 = reduceRightWithIndex2;
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
      return F.ap(F.map(fas, function(as2) {
        return function(a) {
          return pipe(as2, append3(a));
        };
      }), fa);
    });
  };
};
var traverseWithIndex = function(F) {
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
var URI2 = "Array";
var getShow3 = getShow2;
var getSemigroup4 = function() {
  return {
    concat: function(first2, second) {
      return first2.concat(second);
    }
  };
};
var getMonoid4 = function() {
  return {
    concat: getSemigroup4().concat,
    empty: []
  };
};
var getEq3 = getEq2;
var getOrd2 = getOrd;
var getUnionSemigroup = function(E) {
  var unionE = union3(E);
  return {
    concat: function(first2, second) {
      return unionE(second)(first2);
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
  var intersectionE = intersection(E);
  return {
    concat: function(first2, second) {
      return intersectionE(second)(first2);
    }
  };
};
var getDifferenceMagma = function(E) {
  var differenceE = difference(E);
  return {
    concat: function(first2, second) {
      return differenceE(second)(first2);
    }
  };
};
var Functor2 = {
  URI: URI2,
  map: _map
};
var flap2 = flap(Functor2);
var Pointed = {
  URI: URI2,
  of: of3
};
var FunctorWithIndex = {
  URI: URI2,
  map: _map,
  mapWithIndex: _mapWithIndex
};
var Apply3 = {
  URI: URI2,
  map: _map,
  ap: _ap
};
var apFirst2 = apFirst(Apply3);
var apSecond2 = apSecond(Apply3);
var Applicative = {
  URI: URI2,
  map: _map,
  ap: _ap,
  of: of3
};
var Chain3 = {
  URI: URI2,
  map: _map,
  ap: _ap,
  chain: flatMap
};
var chainFirst2 = chainFirst(Chain3);
var Monad = {
  URI: URI2,
  map: _map,
  ap: _ap,
  of: of3,
  chain: flatMap
};
var Unfoldable = {
  URI: URI2,
  unfold
};
var Alt = {
  URI: URI2,
  map: _map,
  alt: _alt
};
var Zero2 = {
  URI: URI2,
  zero
};
var guard2 = guard(Zero2, Pointed);
var Alternative = {
  URI: URI2,
  map: _map,
  ap: _ap,
  of: of3,
  alt: _alt,
  zero
};
var Extend = {
  URI: URI2,
  map: _map,
  extend: _extend
};
var Compactable = {
  URI: URI2,
  compact,
  separate
};
var Filterable = {
  URI: URI2,
  map: _map,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap
};
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
  filterWithIndex: _filterWithIndex
};
var Foldable = {
  URI: URI2,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight
};
var FoldableWithIndex = {
  URI: URI2,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex
};
var Traversable = {
  URI: URI2,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence
};
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
  traverseWithIndex: _traverseWithIndex
};
var _wither = witherDefault(Traversable, Compactable);
var _wilt = wiltDefault(Traversable, Compactable);
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
  wilt: _wilt
};
var chainRecDepthFirst2 = chainRecDepthFirst;
var ChainRecDepthFirst = {
  URI: URI2,
  map: _map,
  ap: _ap,
  chain: flatMap,
  chainRec: _chainRecDepthFirst2
};
var chainRecBreadthFirst2 = chainRecBreadthFirst;
var ChainRecBreadthFirst = {
  URI: URI2,
  map: _map,
  ap: _ap,
  chain: flatMap,
  chainRec: _chainRecBreadthFirst2
};
var filterE2 = filterE(Witherable2);
var FromEither2 = {
  URI: URI2,
  fromEither
};
var fromEitherK2 = fromEitherK(FromEither2);
var unsafeInsertAt3 = unsafeInsertAt2;
var unsafeUpdateAt3 = function(i, a, as2) {
  return isNonEmpty5(as2) ? unsafeUpdateAt(i, a, as2) : [];
};
var unsafeDeleteAt2 = function(i, as2) {
  var xs = as2.slice();
  xs.splice(i, 1);
  return xs;
};
var every2 = every;
var some2 = function(predicate) {
  return function(as2) {
    return as2.some(predicate);
  };
};
var exists = some2;
var intercalate3 = intercalate2;
var Do = of3(emptyRecord);
var bindTo2 = bindTo(Functor2);
var let_2 = let_(Functor2);
var bind2 = bind(Chain3);
var apS2 = apS(Apply3);
var chain = flatMap;
var range3 = range;
var empty4 = [];
var cons3 = cons;
var snoc3 = snoc;
var prependToAll = prependAll3;
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
  wilt: _wilt
};

// node_modules/fp-ts/es6/Predicate.js
var not = function(predicate) {
  return function(a) {
    return !predicate(a);
  };
};

// node_modules/fp-ts/es6/Option.js
function fromPredicate2(predicate) {
  return function(a) {
    return predicate(a) ? some3(a) : none2;
  };
}
var none2 = none;
var some3 = some;
var getRight = function(ma) {
  return ma._tag === "Left" ? none2 : some3(ma.right);
};
var _map2 = function(fa, f) {
  return pipe(fa, map2(f));
};
var _ap2 = function(fab, fa) {
  return pipe(fab, ap3(fa));
};
var URI3 = "Option";
var getMonoid5 = function(S) {
  return {
    concat: function(x, y) {
      return isNone2(x) ? y : isNone2(y) ? x : some3(S.concat(x.value, y.value));
    },
    empty: none2
  };
};
var map2 = function(f) {
  return function(fa) {
    return isNone2(fa) ? none2 : some3(f(fa.value));
  };
};
var Functor4 = {
  URI: URI3,
  map: _map2
};
var as2 = dual(2, as(Functor4));
var asUnit2 = asUnit(Functor4);
var ap3 = function(fa) {
  return function(fab) {
    return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some3(fab.value(fa.value));
  };
};
var flatMap2 = dual(2, function(ma, f) {
  return isNone2(ma) ? none2 : f(ma.value);
});
var Chain4 = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  chain: flatMap2
};
var orElse = dual(2, function(self, that) {
  return isNone2(self) ? that() : self;
});
var fromEither2 = getRight;
var FromEither4 = {
  URI: URI3,
  fromEither: fromEither2
};
var isSome2 = isSome;
var isNone2 = function(fa) {
  return fa._tag === "None";
};
var getOrElseW = function(onNone) {
  return function(ma) {
    return isNone2(ma) ? onNone() : ma.value;
  };
};
var getOrElse = getOrElseW;
var tap2 = dual(2, tap(Chain4));
var tapEither2 = dual(2, tapEither(FromEither4, Chain4));
var chain2 = flatMap2;

// node_modules/fp-ts/es6/Endomorphism.js
var getSemigroup5 = function() {
  return {
    concat: function(first2, second) {
      return flow(first2, second);
    }
  };
};
var getMonoid6 = function() {
  return {
    concat: getSemigroup5().concat,
    empty: identity
  };
};

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
var empty5 = new Map;

// node_modules/fp-ts/es6/Map.js
var lookup4 = lookup3;
var empty6 = new Map;

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
      return traverseReadonlyNonEmptyArrayWithIndex;
    }
  },
  traverseReadonlyArrayWithIndexSeq: () => {
    {
      return traverseReadonlyArrayWithIndexSeq;
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
      return sequenceArray;
    }
  },
  of: () => {
    {
      return of4;
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
      return let_3;
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
      return flatten2;
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
      return flap3;
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
      return chainFirst3;
    }
  },
  chain: () => {
    {
      return chain3;
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
      return Pointed2;
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
      return Monad2;
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
      return Do2;
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
      return ApT;
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
var fromIO = function(ma) {
  return function() {
    return Promise.resolve().then(ma);
  };
};
var _map3 = function(fa, f) {
  return pipe(fa, map3(f));
};
var _apPar = function(fab, fa) {
  return pipe(fab, ap4(fa));
};
var _apSeq = function(fab, fa) {
  return flatMap3(fab, function(f) {
    return pipe(fa, map3(f));
  });
};
var map3 = function(f) {
  return function(fa) {
    return function() {
      return Promise.resolve().then(fa).then(f);
    };
  };
};
var ap4 = function(fa) {
  return function(fab) {
    return function() {
      return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function(_a) {
        var f = _a[0], a = _a[1];
        return f(a);
      });
    };
  };
};
var of4 = function(a) {
  return function() {
    return Promise.resolve(a);
  };
};
var flatMap3 = dual(2, function(ma, f) {
  return function() {
    return Promise.resolve().then(ma).then(function(a) {
      return f(a)();
    });
  };
});
var flatten2 = flatMap3(identity);
var URI4 = "Task";
var Functor6 = {
  URI: URI4,
  map: _map3
};
var as3 = dual(2, as(Functor6));
var asUnit3 = asUnit(Functor6);
var flap3 = flap(Functor6);
var Pointed2 = {
  URI: URI4,
  of: of4
};
var ApplyPar = {
  URI: URI4,
  map: _map3,
  ap: _apPar
};
var apFirst3 = apFirst(ApplyPar);
var apSecond3 = apSecond(ApplyPar);
var ApplicativePar = {
  URI: URI4,
  map: _map3,
  ap: _apPar,
  of: of4
};
var ApplySeq = {
  URI: URI4,
  map: _map3,
  ap: _apSeq
};
var ApplicativeSeq = {
  URI: URI4,
  map: _map3,
  ap: _apSeq,
  of: of4
};
var Chain6 = {
  URI: URI4,
  map: _map3,
  ap: _apPar,
  chain: flatMap3
};
var Monad2 = {
  URI: URI4,
  map: _map3,
  of: of4,
  ap: _apPar,
  chain: flatMap3
};
var MonadIO = {
  URI: URI4,
  map: _map3,
  of: of4,
  ap: _apPar,
  chain: flatMap3,
  fromIO
};
var fromTask = identity;
var MonadTask = {
  URI: URI4,
  map: _map3,
  of: of4,
  ap: _apPar,
  chain: flatMap3,
  fromIO,
  fromTask
};
var FromIO2 = {
  URI: URI4,
  fromIO
};
var _FlatMap = {
  flatMap: flatMap3
};
var _FromIO = {
  fromIO: FromIO2.fromIO
};
var flatMapIO2 = flatMapIO(_FromIO, _FlatMap);
var tap3 = dual(2, tap(Chain6));
var tapIO2 = dual(2, tapIO(FromIO2, Chain6));
var fromIOK2 = fromIOK(FromIO2);
var chainIOK = flatMapIO2;
var chainFirstIOK = tapIO2;
var FromTask = {
  URI: URI4,
  fromIO,
  fromTask
};
var never = function() {
  return new Promise(function(_) {
    return;
  });
};
var Do2 = of4(emptyRecord);
var bindTo3 = bindTo(Functor6);
var let_3 = let_(Functor6);
var bind3 = bind(Chain6);
var apS3 = apS(ApplyPar);
var ApT = of4(emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
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
var traverseReadonlyArrayWithIndex = function(f) {
  var g = traverseReadonlyNonEmptyArrayWithIndex(f);
  return function(as4) {
    return isNonEmpty(as4) ? g(as4) : ApT;
  };
};
var traverseReadonlyNonEmptyArrayWithIndexSeq = function(f) {
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
var traverseReadonlyArrayWithIndexSeq = function(f) {
  var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
  return function(as4) {
    return isNonEmpty(as4) ? g(as4) : ApT;
  };
};
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
var traverseArray = function(f) {
  return traverseReadonlyArrayWithIndex(function(_, a) {
    return f(a);
  });
};
var sequenceArray = traverseArray(identity);
var traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
var traverseSeqArray = function(f) {
  return traverseReadonlyArrayWithIndexSeq(function(_, a) {
    return f(a);
  });
};
var sequenceSeqArray = traverseSeqArray(identity);
var chain3 = flatMap3;
var chainFirst3 = tap3;
var task = {
  URI: URI4,
  map: _map3,
  of: of4,
  ap: _apPar,
  chain: flatMap3,
  fromIO,
  fromTask
};
var taskSeq = {
  URI: URI4,
  map: _map3,
  of: of4,
  ap: _apSeq,
  chain: flatMap3,
  fromIO,
  fromTask
};
var getSemigroup6 = getApplySemigroup(ApplySeq);
var getMonoid7 = getApplicativeMonoid(ApplicativeSeq);

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
      return empty7;
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
      return Monoid;
    }
  },
  Eq: () => {
    {
      return Eq4;
    }
  }
});
var Eq4 = {
  equals: function(first2, second) {
    return first2 === second;
  }
};
var Semigroup = {
  concat: function(first2, second) {
    return first2 + second;
  }
};
var empty7 = "";
var Monoid = {
  concat: Semigroup.concat,
  empty: empty7
};
var Ord4 = {
  equals: Eq4.equals,
  compare: function(first2, second) {
    return first2 < second ? -1 : first2 > second ? 1 : 0;
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

// node_modules/fp-ts-std/dist/esm/Function.js
var URI5 = "Function";
var map4 = (f) => (g) => flow(g, f);
var Functor8 = {
  URI: URI5,
  map: (f, g) => map4(g)(f)
};
var of5 = constant;
var ap5 = (f) => (g) => (x) => g(x)(f(x));
var Applicative3 = {
  ...Functor8,
  of: of5,
  ap: (f, g) => ap5(g)(f)
};
var apFirst4 = apFirst(Applicative3);
var apSecond4 = apSecond(Applicative3);
var chain4 = (f) => (g) => (x) => f(g(x))(x);
var Monad3 = {
  ...Applicative3,
  chain: (f, g) => chain4(g)(f)
};
var Do3 = of5({});
var bindTo4 = bindTo(Functor8);
var bind4 = bind(Monad3);
var apS4 = apS(Applicative3);
var let_4 = let_(Functor8);
var unary = tupled;
var guard3 = (branches) => (fallback) => (input) => pipe(branches, map(([f, g]) => flow(fromPredicate2(f), map2(g))), concatAll4(getMonoid(getMonoid5(first()))()), apply(input), getOrElse(() => fallback(input)));
var unless = (f) => (onFalse) => (x) => f(x) ? x : onFalse(x);
var when = flow(not, unless);
var invoke = (x) => (ys) => (z) => z[x](...ys);
var invokeNullary = flip(invoke)([]);
var memoize = (eq2) => (f) => {
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
var curry2T = (f) => (a) => (b) => f([a, b]);
var curry2 = flow(unary, curry2T);
var curry3T = (f) => (a) => (b) => (c) => f([a, b, c]);
var curry3 = flow(unary, curry3T);
var curry4T = (f) => (a) => (b) => (c) => (d) => f([a, b, c, d]);
var curry4 = flow(unary, curry4T);
var curry5T = (f) => (a) => (b) => (c) => (d) => (e) => f([a, b, c, d, e]);
var curry5 = flow(unary, curry5T);
var applyEvery = concatAll4(getMonoid6());

// shared/fp.tsx
var guard4 = (branches) => guard3(branches);
var pMchain = (f) => async (fa) => f(await fa);
var is = (c) => (a) => (field) => field[c] === a;
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
var escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\\$&`);
var titleCase = (str) => str.replace(/\b\w/g, (l) => l.toUpperCase());
//! Does location actually point to document.body?
var waitForElement = (selector, timeout = 1000, location = document.body, notEl) => new Promise((resolve) => {
  const res = (v) => {
    observer.disconnect();
    resolve(v);
  };
  const observer = new MutationObserver(() => {
    const el = document.querySelector(selector);
    if (el && (!notEl || el !== notEl))
      return res(el);
  });
  observer.observe(location, {
    childList: true,
    subtree: true
  });
  if (timeout)
    setTimeout(() => res(null), timeout);
});
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// shared/api.tsx
var { URI: URI6 } = Spicetify;
var fetchGQLArtistRelated = async (uri) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistRelated, {
  uri,
  locale: Spicetify.Locale.getLocale()
})).data.artistUnion.relatedContent.relatedArtists.items;
var fetchWebArtistsSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists);
var fetchWebPlaylistsSpot = chunckify(1)(async ([id]) => [
  await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)
]);
var fetchWebAlbumsSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums);
var fetchWebTracksSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks);
var searchWebItemSpot = async (q, type) => Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=${type.join(",")}`);
var fetchWebSoundOfSpotifyPlaylist = async (genre) => {
  const name = `The Sound Of ${genre}`;
  const re = new RegExp(`^${escapeRegex(name)}\$`, "i");
  const res = await searchWebItemSpot(name, ["playlist"]);
  const item = res.playlists.items[0];
  return item?.owner.id === "thesoundsofspotify" && re.test(item.name) ? item.uri : null;
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

// node_modules/fp-ts-std/dist/esm/ReadonlyArray.js
var none3 = flow(not, (p) => every(p));
var join = (x) => invoke("join")([x]);
var sum = concatAll4(MonoidSum);
var product = concatAll4(MonoidProduct);
var median = flow(sort(Ord2), (xs) => {
  const i = xs.length / 2;
  return i % 1 === 0 ? (xs[i - 1] + xs[i]) / 2 : xs[Math.floor(i)];
});
var moveFrom = (from) => (to) => (xs) => from >= xs.length || to >= xs.length ? none2 : from === to ? some3(xs) : pipe(xs, lookup(from), chain2((x) => pipe(deleteAt(from)(xs), chain2(insertAt(to, x)))));
var moveTo = flip(moveFrom);
var dropRightWhile = (f) => flow(reverse2, dropLeftWhile(f), reverse2);
var takeRightWhile = (f) => flow(reverse2, takeLeftWhile(f), reverse2);
var minimum = flow(min2, concatAll3);
var maximum = flow(max2, concatAll3);
var fromIterable = Array.from;

// node_modules/fp-ts-std/dist/esm/String.js
var prepend4 = (prepended) => (rest) => prepended + rest;
var append5 = flip(prepend4);
var takeLeft3 = (n) => slice(0, max(Ord2)(0, n));
var takeRight3 = (n) => (x) => slice(max(Ord2)(0, x.length - Math.floor(n)), Infinity)(x);
var under = (f) => flow(split(""), f, join(""));
var reverse5 = under(reverse2);
var lines = split(/\r\n|\r|\n/);
var unlines = join("\n");
var test = (r) => (x) => {
  const lastIndex = r.lastIndex;
  const res = r.test(x);
  r.lastIndex = lastIndex;
  return res;
};
var dropLeft3 = (n) => invoke("substring")([n]);
var dropRight2 = (n) => (x) => pipe(x, invoke("substring")([0, x.length - Math.floor(n)]));
var dropRightWhile2 = flow(dropRightWhile, under);
var head6 = flow(fromPredicate2(not(isEmpty3)), map2(takeLeft3(1)));
var tail5 = flow(fromPredicate2(not(isEmpty3)), map2(dropLeft3(1)));
var last5 = flow(fromPredicate2(not(isEmpty3)), map2(takeRight3(1)));
var init4 = flow(fromPredicate2(not(isEmpty3)), map2(dropRight2(1)));
var takeLeftWhile3 = flow((f) => takeLeftWhile(f), under);
var takeRightWhile2 = flow(takeRightWhile, under);
var isAlpha = test(/^\p{Alpha}+$/u);
var isAlphaNum = test(/^(\p{Alpha}|\p{Number})+$/u);
var isLower = test(/^\p{Lower}+$/u);
var isUpper = test(/^\p{Upper}+$/u);
var isSpace = test(/^\s+$/);
var words = split(/\s/);
var unwords = join(" ");

// extensions/show-the-genres/artistPage.tsx
var { URI: URI7 } = Spicetify;
var updateArtistPage = async ({ pathname }) => {
  const uri = URI7.fromString(pathname);
  if (!URI7.isArtist(uri))
    return;
  const genreContainer = document.createElement("div");
  genreContainer.className = "main-entityHeader-detailsText genre-container";
  genreContainer.innerHTML = await pipe(await getArtistsGenresOrRelated([`${uri}`]), exports_Array.takeLeft(5), exports_Array.map(async (genre) => {
    const uri2 = await fetchWebSoundOfSpotifyPlaylist(genre);
    return `<a class="main-entityHeader-genreLink" ${uri2 === null ? `href="#" data-value="${genre}" onclick="searchPlaylist(this.getAttribute('data-value'))` : `href="${uri2}"`} style="color: var(--spice-subtext); font-size: 1rem">${titleCase(genre)}</a>`;
  }), (ps) => Promise.all(ps), pMchain(exports_Array.intercalate(exports_string.Monoid)(`<span>, </span>`)), pMchain(prepend4(`<span>Artist Genres : </span>`)));
  document.querySelector(".genre-container")?.remove();
  const entityHeaderText = await waitForElement("div.main-entityHeader-headerText");
  entityHeaderText?.insertBefore(genreContainer, await waitForElement("span.main-entityHeader-detailsText"));
};
var getArtistsGenresOrRelated = async (artistsUris, src = null) => {
  const getArtistsGenres = flow(exports_Array.map((uri) => URI7.fromString(uri).id), fetchWebArtistsSpot, pMchain(exports_Array.flatMap((artist) => artist.genres)), pMchain(exports_Array.uniq(exports_string.Eq)));
  const allGenres = await getArtistsGenres(artistsUris);
  return allGenres.length ? allGenres : await pipe(artistsUris[0], fetchGQLArtistRelated, pMchain(exports_Array.map((a) => a.uri)), pMchain(exports_Array.chunksOf(5)), pMchain(exports_Array.reduce(Promise.resolve([]), async (acc, arr5uris) => (await acc).length ? await acc : await getArtistsGenres(arr5uris))));
};

// extensions/show-the-genres/popup.tsx
var import_react = __toESM(require_react(), 1);
var genrePopup = () => {
  Spicetify.PopupModal.display({
    title: `Genres of: ${Spicetify.Player.data.track?.metadata?.title}`,
    content: import_react.default.createElement("div", {
      className: "genres-popup"
    }, spotifyGenres.length === 0 ? import_react.default.createElement(import_react.default.Fragment, null) : import_react.default.createElement(SpotifyGenresContainer, null), lastFmTags.length === 0 ? import_react.default.createElement(import_react.default.Fragment, null) : import_react.default.createElement(LastFmTagsContainer, null)),
    isLarge: true
  });
};
globalThis.genrePopup = genrePopup;
var ButtonElement = ({ name = "", color = "", onClick = exports_Task.of(undefined) }) => import_react.default.createElement("button", {
  className: `login-button${color}`,
  onClick
}, name);
var SpotifyGenresContainer = () => {
  let [value, setValue] = import_react.useState(spotifyGenres);
  Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(spotifyGenres), 500));
  const openSoundOfPlaylistOrSearchResults = (query) => async () => {
    let uri = await fetchWebSoundOfSpotifyPlaylist(query);
    if (uri === null)
      Spicetify.Platform.History.push(`/search/${query}/playlists`);
    else
      Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`);
    Spicetify.PopupModal.hide();
  };
  return import_react.default.createElement("div", {
    className: "spaced-down"
  }, import_react.default.createElement("h1", {
    className: "title"
  }, "Spotify Genres"), value.map((n) => import_react.default.createElement(ButtonElement, {
    name: titleCase(n),
    onClick: openSoundOfPlaylistOrSearchResults(n)
  })));
};
var LastFmTagsContainer = () => {
  if (lastFmTags.length == 0)
    return import_react.default.createElement(import_react.default.Fragment, null);
  let [value, setValue] = import_react.useState(lastFmTags);
  Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(lastFmTags), 100));
  const openPlaylistSearchResults = (query) => async () => {
    Spicetify.Platform.History.push(`/search/${query}/playlists`);
    Spicetify.PopupModal.hide();
  };
  return import_react.default.createElement("div", {
    className: "spaced-down"
  }, import_react.default.createElement("h1", {
    className: "title"
  }, "Last FM Tags"), value.map((n) => import_react.default.createElement(ButtonElement, {
    name: titleCase(n),
    onClick: openPlaylistSearchResults(n)
  })));
};

// shared/settings.tsx
var import_react2 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
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
    import_react_dom.default.render(import_react2.default.createElement(this.FieldsContainer, null), pluginSettingsContainer);
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
    const [value, setValueState] = import_react2.useState(SettingsSection.getFieldValue(id));
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
    const [rerender, setRerender] = import_react2.useState(0);
    this.setRerender = setRerender;
    return import_react2.default.createElement("div", {
      className: "x-settings-section",
      key: rerender
    }, import_react2.default.createElement("h2", {
      className: "Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type"
    }, this.name), Object.entries(this.sectionFields).map(([nameId, field]) => {
      return import_react2.default.createElement(this.Field, {
        field
      });
    }));
  };
  Field = ({ field }) => {
    const isType = is("type");
    return import_react2.default.createElement("div", {
      className: "x-settings-row"
    }, import_react2.default.createElement(this.SettingDescription, {
      id: field.id,
      description: field.description
    }), import_react2.default.createElement("div", {
      className: "x-settings-secondColumn"
    }, guard4([
      [isType(FieldType.INPUT), this.SettingInputField],
      [isType(FieldType.BUTTON), this.SettingButtonField],
      [isType(FieldType.TOGGLE), this.SettingToggleField],
      [isType(FieldType.DROPDOWN), this.SettingDropdownField]
    ])(this.SettingHidden)(field)));
  };
  SettingDescription = ({ id, description }) => import_react2.default.createElement("div", {
    className: "x-settings-firstColumn"
  }, import_react2.default.createElement("label", {
    className: "Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type",
    htmlFor: id
  }, description));
  SettingButtonField = (field) => import_react2.default.createElement("span", {
    className: ""
  }, import_react2.default.createElement("button", {
    id: field.id,
    className: "Button-sc-y0gtbx-0 Button-sm-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",
    ...field.events,
    type: field.type
  }, field.text));
  SettingToggleField = (field) => {
    const [value, setValue] = this.useStateFor(field.id);
    return import_react2.default.createElement("label", {
      className: "x-settings-secondColumn x-toggle-wrapper"
    }, import_react2.default.createElement("input", {
      id: field.id,
      className: "x-toggle-input",
      type: "checkbox",
      checked: SettingsSection.getFieldValue(field.id),
      ...field.events,
      onChange: (e) => {
        setValue(e.currentTarget.checked);
        field.events.onChange?.(e);
      }
    }), import_react2.default.createElement("span", {
      className: "x-toggle-indicatorWrapper"
    }, import_react2.default.createElement("span", {
      className: "x-toggle-indicator"
    })));
  };
  SettingInputField = (field) => {
    const [value, setValue] = this.useStateFor(field.id);
    return import_react2.default.createElement("input", {
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
    return import_react2.default.createElement("select", {
      className: "main-dropDown-dropDown",
      id: field.id,
      ...field.events,
      onChange: (e) => {
        setValue(e.currentTarget.selectedIndex);
        field.events.onChange?.(e);
      }
    }, field.options.map((option, i) => import_react2.default.createElement("option", {
      selected: i === SettingsSection.getFieldValue(field.id),
      value: i + 1
    }, option)));
  };
  SettingHidden = () => import_react2.default.createElement(import_react2.default.Fragment, null);
}
var FieldType;
(function(FieldType2) {
  FieldType2["HIDDEN"] = "hidden";
  FieldType2["INPUT"] = "input";
  FieldType2["DROPDOWN"] = "dropdown";
  FieldType2["BUTTON"] = "button";
  FieldType2["TOGGLE"] = "toggle";
})(FieldType || (FieldType = {}));

// extensions/show-the-genres/settings.tsx
var settings2 = new SettingsSection("Show The Genres", "show-the-genres").addInput("LFMApiKey", "Last.fm API Key", exports_Task.of("44654ea047786d90338c17331a5f5d95"));
settings2.pushSettings();
var CONFIG = settings2.toObject();

// extensions/show-the-genres/app.tsx
var searchPlaylist = (query) => Spicetify.Platform.History.push(`/search/${query}/playlists`);
globalThis.searchPlaylist = searchPlaylist;
var spotifyGenres = new Array;
var lastFmTags = new Array;
var updateGenreContainer = async (genres) => {
  genreContainer.innerHTML = await pipe(genres, exports_Array.map(async (genre) => {
    const uri = await fetchWebSoundOfSpotifyPlaylist(genre) ?? "#";
    return `<a href="${uri}" style="color: var(--spice-subtext); font-size: 12px">${titleCase(genre)}</a>`;
  }), (ps) => Promise.all(ps), pMchain(exports_Array.intercalate(exports_string.Monoid)(`<span>, </span>`)));
  return genreContainer;
};
var updateGenresUI = async (genres) => {
  const trackInfoContainer = await waitForElement("div.main-trackInfo-container");
  const { uri, metadata } = Spicetify.Player.data.track;
  if (metadata && !metadata.is_local && Spicetify.URI.isTrack(uri) && genres.length) {
    trackInfoContainer?.appendChild(await updateGenreContainer(genres));
    lastFmTags = pipe(await fetchTrackLFMAPI(CONFIG.LFMApiKey, metadata.artist_name, metadata.title), ({ track }) => track.toptags.tag, exports_Array.map(({ name }) => name));
  } else
    trackInfoContainer?.removeChild(genreContainer);
};
var getArtistUrisFromCurrentTrack = () => {
  let metadata = Spicetify.Player.data?.track?.metadata ?? {};
  return [...Array(10).keys()].map((k) => metadata["artist_uri" + (k ? `:${k}` : "")]).filter(Boolean);
};
var updateGenres = async () => {
  const artistUris = getArtistUrisFromCurrentTrack();
  spotifyGenres = await getArtistsGenresOrRelated(artistUris);
  await updateGenresUI(spotifyGenres.slice(0, 5));
};
var genreContainer = document.createElement("div");
genreContainer.className = "main-trackInfo-genres ellipsis-one-line main-type-finale";
genreContainer.style.gridArea = "genres";
genreContainer.addEventListener("contextmenu", genrePopup);
Spicetify.Player.addEventListener("songchange", updateGenres);
updateGenres();
Spicetify.Platform.History.listen(updateArtistPage);
updateArtistPage(Spicetify.Platform.History.location);
export {
  spotifyGenres,
  lastFmTags
};

//# debugId=09117A419FA1D33664756e2164756e21
