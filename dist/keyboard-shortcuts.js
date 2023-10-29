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
      return getSemigroup2;
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
      return ap;
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
var fromEquals = function(equals) {
  return {
    equals: function(x, y) {
      return x === y || equals(x, y);
    }
  };
};
var eqStrict = {
  equals: function(a, b) {
    return a === b;
  }
};
var strictEqual = eqStrict.equals;

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
var getSemigroup = function() {
  return {
    concat: function(first, second) {
      return fromCompare(function(a, b) {
        var ox = first.compare(a, b);
        return ox !== 0 ? ox : second.compare(a, b);
      });
    }
  };
};
var getMonoid = function() {
  return {
    concat: getSemigroup().concat,
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
var clamp = function(O) {
  var minO = min(O);
  var maxO = max(O);
  return function(low, hi) {
    return function(a) {
      return maxO(minO(a, hi), low);
    };
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
var unsafeInsertAt = function(i, a, as2) {
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
    var M = getMonoid();
    return sort(ords.reduce(M.concat, M.empty));
  }
  return copy;
};
var union = function(E) {
  var uniqE = uniq(E);
  return function(second) {
    return function(first) {
      return uniqE(pipe(first, concat(second)));
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
var sort = function(O) {
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
var concatAll4 = function(S) {
  return function(as2) {
    return as2.reduce(S.concat);
  };
};
var snoc = function(init2, end) {
  return pipe(init2, append(end));
};

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
var isNumber = function(u) {
  return typeof u === "number";
};
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
var Show = {
  show: function(n) {
    return JSON.stringify(n);
  }
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
  return function(first, second) {
    if (second === undefined) {
      var unionE_1 = union3(E);
      return function(second2) {
        return unionE_1(second2, first);
      };
    }
    return isNonEmpty5(first) && isNonEmpty5(second) ? unionE(second)(first) : isNonEmpty5(first) ? copy2(first) : copy2(second);
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
var insertAt = function(i, a) {
  return function(as2) {
    return i < 0 || i > as2.length ? none : some(unsafeInsertAt3(i, a, as2));
  };
};
var updateAt = function(i, a) {
  return modifyAt(i, function() {
    return a;
  });
};
var deleteAt = function(i) {
  return function(as2) {
    return isOutOfBound4(i, as2) ? none : some(unsafeDeleteAt(i, as2));
  };
};
var modifyAt = function(i, f) {
  return function(as2) {
    return isOutOfBound4(i, as2) ? none : some(unsafeUpdateAt3(i, f(as2[i]), as2));
  };
};
var reverse2 = function(as2) {
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
var sort2 = function(O) {
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
  return function(first) {
    return isEmpty(first) ? copy2(second) : isEmpty(second) ? copy2(first) : first.concat(second);
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
  return pipe(fab, ap(fa));
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
var ap = function(fa) {
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
var URI = "Array";
var getShow3 = getShow2;
var getSemigroup2 = function() {
  return {
    concat: function(first, second) {
      return first.concat(second);
    }
  };
};
var getMonoid2 = function() {
  return {
    concat: getSemigroup2().concat,
    empty: []
  };
};
var getEq3 = getEq2;
var getOrd2 = getOrd;
var getUnionSemigroup = function(E) {
  var unionE = union3(E);
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
  var intersectionE = intersection(E);
  return {
    concat: function(first, second) {
      return intersectionE(second)(first);
    }
  };
};
var getDifferenceMagma = function(E) {
  var differenceE = difference(E);
  return {
    concat: function(first, second) {
      return differenceE(second)(first);
    }
  };
};
var Functor2 = {
  URI,
  map: _map
};
var flap2 = flap(Functor2);
var Pointed = {
  URI,
  of: of3
};
var FunctorWithIndex = {
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex
};
var Apply2 = {
  URI,
  map: _map,
  ap: _ap
};
var apFirst2 = apFirst(Apply2);
var apSecond2 = apSecond(Apply2);
var Applicative = {
  URI,
  map: _map,
  ap: _ap,
  of: of3
};
var Chain3 = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap
};
var chainFirst2 = chainFirst(Chain3);
var Monad = {
  URI,
  map: _map,
  ap: _ap,
  of: of3,
  chain: flatMap
};
var Unfoldable = {
  URI,
  unfold
};
var Alt = {
  URI,
  map: _map,
  alt: _alt
};
var Zero2 = {
  URI,
  zero
};
var guard2 = guard(Zero2, Pointed);
var Alternative = {
  URI,
  map: _map,
  ap: _ap,
  of: of3,
  alt: _alt,
  zero
};
var Extend = {
  URI,
  map: _map,
  extend: _extend
};
var Compactable = {
  URI,
  compact,
  separate
};
var Filterable = {
  URI,
  map: _map,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap
};
var FilterableWithIndex = {
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
var Foldable = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight
};
var FoldableWithIndex = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex
};
var Traversable = {
  URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence
};
var TraversableWithIndex = {
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
var _wither = witherDefault(Traversable, Compactable);
var _wilt = wiltDefault(Traversable, Compactable);
var Witherable2 = {
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
var chainRecDepthFirst2 = chainRecDepthFirst;
var ChainRecDepthFirst = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
  chainRec: _chainRecDepthFirst2
};
var chainRecBreadthFirst2 = chainRecBreadthFirst;
var ChainRecBreadthFirst = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
  chainRec: _chainRecBreadthFirst2
};
var filterE2 = filterE(Witherable2);
var FromEither2 = {
  URI,
  fromEither
};
var fromEitherK2 = fromEitherK(FromEither2);
var unsafeInsertAt3 = unsafeInsertAt;
var unsafeUpdateAt3 = function(i, a, as2) {
  return isNonEmpty5(as2) ? unsafeUpdateAt(i, a, as2) : [];
};
var unsafeDeleteAt = function(i, as2) {
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
var apS2 = apS(Apply2);
var chain = flatMap;
var range3 = range;
var empty2 = [];
var cons3 = cons;
var snoc3 = snoc;
var prependToAll = prependAll3;
var array = {
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

// node_modules/fp-ts/es6/Predicate.js
var not = function(predicate) {
  return function(a) {
    return !predicate(a);
  };
};
var and = function(second) {
  return function(first) {
    return function(a) {
      return first(a) && second(a);
    };
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
  return pipe(fab, ap2(fa));
};
var URI2 = "Option";
var map2 = function(f) {
  return function(fa) {
    return isNone2(fa) ? none2 : some3(f(fa.value));
  };
};
var Functor4 = {
  URI: URI2,
  map: _map2
};
var as2 = dual(2, as(Functor4));
var asUnit2 = asUnit(Functor4);
var ap2 = function(fa) {
  return function(fab) {
    return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some3(fab.value(fa.value));
  };
};
var flatMap2 = dual(2, function(ma, f) {
  return isNone2(ma) ? none2 : f(ma.value);
});
var Chain4 = {
  URI: URI2,
  map: _map2,
  ap: _ap2,
  chain: flatMap2
};
var orElse = dual(2, function(self, that) {
  return isNone2(self) ? that() : self;
});
var fromEither2 = getRight;
var FromEither4 = {
  URI: URI2,
  fromEither: fromEither2
};
var isNone2 = function(fa) {
  return fa._tag === "None";
};
var tap2 = dual(2, tap(Chain4));
var tapEither2 = dual(2, tapEither(FromEither4, Chain4));
var chain2 = flatMap2;

// node_modules/fp-ts/es6/Endomorphism.js
var getSemigroup3 = function() {
  return {
    concat: function(first, second) {
      return flow(first, second);
    }
  };
};
var getMonoid3 = function() {
  return {
    concat: getSemigroup3().concat,
    empty: identity
  };
};

// node_modules/fp-ts/es6/Monoid.js
var concatAll5 = function(M) {
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
var URI3 = "Function";
var map3 = (f) => (g) => flow(g, f);
var Functor6 = {
  URI: URI3,
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
var chain3 = (f) => (g) => (x) => f(g(x))(x);
var Monad2 = {
  ...Applicative2,
  chain: (f, g) => chain3(g)(f)
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
var curry2T = (f) => (a) => (b) => f([a, b]);
var curry2 = flow(unary, curry2T);
var curry3T = (f) => (a) => (b) => (c) => f([a, b, c]);
var curry3 = flow(unary, curry3T);
var curry4T = (f) => (a) => (b) => (c) => (d) => f([a, b, c, d]);
var curry4 = flow(unary, curry4T);
var curry5T = (f) => (a) => (b) => (c) => (d) => (e) => f([a, b, c, d, e]);
var curry5 = flow(unary, curry5T);
var applyEvery = concatAll5(getMonoid3());

// node_modules/fp-ts-std/dist/esm/Array.js
var none3 = flow(not, (p) => every2(p));
var sum = concatAll5(MonoidSum);
var product = concatAll5(MonoidProduct);
var mean = (xs) => sum(xs) / xs.length;
var median = flow(sort(Ord2), (xs) => {
  const i = xs.length / 2;
  return i % 1 === 0 ? (xs[i - 1] + xs[i]) / 2 : xs[Math.floor(i)];
});
var moveFrom = (from) => (to) => (xs) => from >= xs.length || to >= xs.length ? none2 : from === to ? some3(xs) : pipe(xs, lookup2(from), chain2((x) => pipe(deleteAt(from)(xs), chain2(insertAt(to, x)))));
var moveTo = flip(moveFrom);
var minimum = flow(min2, concatAll4);
var maximum = flow(max2, concatAll4);
var fromIterable = Array.from;

// extensions/keyboard-shortcuts/sneak.tsx
var mousetrap = Spicetify.Mousetrap();
var keyList = "abcdefghijklmnopqrstuvwxyz".split("");
var getSneakKeys = () => Array.from(sneakOverlay.getElementsByClassName("sneak-key"));
var clearSomeSneakKeys = (sneakKeys) => {
  if (sneakKeys.length === 0)
    return false;
  sneakOverlay.remove();
  pipe(sneakKeys, exports_Array.map((e) => e.remove()));
  document.body.append(sneakOverlay);
  return true;
};
var clearSneakKeys = flow(getSneakKeys, clearSomeSneakKeys);
var enterSneak = () => {
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
var quitSneak = () => {
  sneakOverlay.style.display = "none";
  clearSneakKeys();
  listeningToSneakBinds = false;
};
var listenSneakKeys = ({ key }) => {
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
var shouldListenToSneakBinds = false;
var listeningToSneakBinds = false;
var sneakOverlay = document.createElement("div");
sneakOverlay.id = "sneak-overlay";
document.body.append(sneakOverlay);

// node_modules/fp-ts-std/dist/esm/Lazy.js
var URI4 = "Lazy";
var _map3 = (f, g) => () => g(f());
var _ap3 = (f, g) => () => f()(g());
var _chain = (f, g) => g(f());
var of5 = constant;
var chain4 = (f) => (ma) => _chain(ma, f);
var flatten2 = chain4(identity);
var Functor8 = {
  URI: URI4,
  map: _map3
};
var flap3 = flap(Functor8);
var Apply5 = {
  URI: URI4,
  map: _map3,
  ap: _ap3
};
var apFirst4 = apFirst(Apply5);
var apSecond4 = apSecond(Apply5);
var Chain7 = {
  URI: URI4,
  map: _map3,
  ap: _ap3,
  chain: _chain
};
var chainFirst3 = chainFirst(Chain7);
var Do3 = of5({});
var bindTo4 = bindTo(Functor8);
var bind4 = bind(Chain7);
var apS4 = apS(Apply5);
var let_4 = let_(Functor8);
var ApT = of5([]);
var traverseReadonlyNonEmptyArrayWithIndex = (f) => (as3) => () => {
  const out = [f(0, head2(as3))()];
  for (let i = 1;i < as3.length; i++) {
    out.push(f(i, as3[i])());
  }
  return out;
};
var traverseReadonlyArrayWithIndex = (f) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f);
  return (as3) => isNonEmpty4(as3) ? g(as3) : ApT;
};
var traverseArray = (f) => traverseReadonlyArrayWithIndex((_, a) => f(a));
var sequenceArray = traverseArray(identity);

// node_modules/fp-ts-std/dist/esm/Number.js
var isValid = not(Number.isNaN);
var fromStringWithRadix = (radix) => (string) => pipe(Number.parseInt(string, radix), fromPredicate2(isValid));
var fromString = fromStringWithRadix(10);
var floatFromString = flow(Number.parseFloat, fromPredicate2(isValid));
var increment = (x) => x + 1;
var decrement = (x) => x - 1;
var mod = (divisor) => (dividend) => (dividend % divisor + divisor) % divisor;
var isFinite = (n) => Math.abs(n) !== Infinity;
var toFinite = unless(isFinite)((n) => Math.sign(n) * Number.MAX_SAFE_INTEGER);
var BoundedSafe = {
  ...Bounded,
  top: Number.MAX_SAFE_INTEGER,
  bottom: Number.MIN_SAFE_INTEGER
};
var EnumInt = {
  ...BoundedSafe,
  succ: flow(fromPredicate2(and((n) => n < Number.MAX_SAFE_INTEGER)(Number.isInteger)), map2(increment)),
  pred: flow(fromPredicate2(and((n) => n > Number.MIN_SAFE_INTEGER)(Number.isInteger)), map2(decrement)),
  toEnum: some3,
  fromEnum: identity,
  cardinality: of5(Infinity)
};

// extensions/keyboard-shortcuts/util.tsx
var SCROLL_STEP = 25;
var focusOnApp = () => document.querySelector(".Root__main-view .os-viewport");
var appScroll = (s) => {
  const app = focusOnApp();
  const scrollIntervalId = setInterval(() => app.scrollTop += s * SCROLL_STEP, 10);
  document.addEventListener("keyup", () => clearInterval(scrollIntervalId));
};
var appScrollY = (y) => focusOnApp().scroll(0, y);
var openPage = (page) => Spicetify.Platform.History.push({ pathname: page });
var rotateSidebar = (offset) => {
  const navLinks = Array.from(document.querySelectorAll(".main-yourLibraryX-navLink").values());
  pipe(document.querySelector(".main-yourLibraryX-navLinkActive"), (active) => navLinks.findIndex((e) => e === active), (x) => pipe(x === -1 && offset <= 0 ? offset : x + offset, mod(navLinks.length)), (x) => navLinks[x].click());
};
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
var isLiked = (uris) => Spicetify.Platform.LibraryAPI.contains(...uris);
var setLiked = (uris, liked) => Spicetify.Platform.LibraryAPI[liked ? "add" : "remove"](...uris);
var toggleLiked = async (uris) => {
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

// /home/delusoire/dev/spicetify-extensions/extensions/keyboard-shortcuts/assets/styles.scss
(async () => {
  const id = "QL9DDk7W4Cvd3SZxYVftCFUYJ34OOOMYJhq3PLAu-LA";
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = "#sneak-overlay {\n  z-index: 100000;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n#sneak-overlay > .sneak-key {\n  position: fixed;\n  padding: 3px 6px;\n  background-color: black;\n  border-radius: 3px;\n  border: solid 2px white;\n  color: white;\n  text-transform: lowercase;\n  line-height: normal;\n  font-size: 14px;\n  font-weight: 500;\n}";
    document.head.appendChild(el);
  }
})();

// extensions/keyboard-shortcuts/app.tsx
var { KEYS } = Spicetify.Keyboard;
var binds = [
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
binds.map((bind5) => bind5.register());
mousetrap.bind(keyList, listenSneakKeys, "keypress");
mousetrap.bind(KEYS.ESCAPE, quitSneak);
