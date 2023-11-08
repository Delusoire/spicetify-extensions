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
  var getSemigroup9 = function(S) {
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
  exports.getSemigroup = getSemigroup9;
  var getMonoid11 = function(M) {
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
  exports.getMonoid = getMonoid11;
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

// node_modules/fp-ts/lib/Functor.js
var require_Functor = __commonJS((exports) => {
  var map9 = function(F, G) {
    return function(f) {
      return function(fa) {
        return F.map(fa, function(ga) {
          return G.map(ga, f);
        });
      };
    };
  };
  var flap7 = function(F) {
    return function(a) {
      return function(fab) {
        return F.map(fab, function(f) {
          return f(a);
        });
      };
    };
  };
  var bindTo7 = function(F) {
    return function(name) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return _a = {}, _a[name] = a, _a;
        });
      };
    };
  };
  var let_7 = function(F) {
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
    var _map8 = map9(F, G);
    return {
      map: function(fga, f) {
        return (0, function_1.pipe)(fga, _map8(f));
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
  exports.map = map9;
  exports.flap = flap7;
  exports.bindTo = bindTo7;
  exports.let = let_7;
  exports.getFunctorComposition = getFunctorComposition;
  exports.as = as4;
  exports.asUnit = asUnit4;
});

// node_modules/fp-ts/lib/Const.js
var require_Const = __commonJS((exports) => {
  var getShow8 = function(S) {
    return {
      show: function(c) {
        return "make(".concat(S.show(c), ")");
      }
    };
  };
  var getApply = function(S) {
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map8,
      ap: function(fab, fa) {
        return (0, exports.make)(S.concat(fab, fa));
      }
    };
  };
  var getApplicative = function(M) {
    var A = getApply(M);
    return {
      URI: exports.URI,
      _E: undefined,
      map: A.map,
      ap: A.ap,
      of: function() {
        return (0, exports.make)(M.empty);
      }
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.const_ = exports.Bifunctor = exports.Contravariant = exports.flap = exports.Functor = exports.URI = exports.mapLeft = exports.bimap = exports.map = exports.contramap = exports.getApplicative = exports.getApply = exports.getBooleanAlgebra = exports.getHeytingAlgebra = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBounded = exports.getOrd = exports.getEq = exports.getShow = exports.make = undefined;
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  exports.make = function_1.unsafeCoerce;
  exports.getShow = getShow8;
  exports.getEq = function_1.identity;
  exports.getOrd = function_1.identity;
  exports.getBounded = function_1.identity;
  exports.getSemigroup = function_1.identity;
  exports.getMonoid = function_1.identity;
  exports.getSemiring = function_1.identity;
  exports.getRing = function_1.identity;
  exports.getHeytingAlgebra = function_1.identity;
  exports.getBooleanAlgebra = function_1.identity;
  exports.getApply = getApply;
  exports.getApplicative = getApplicative;
  var _contramap = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.contramap)(f));
  };
  var _map8 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _bimap = function(fa, f, g) {
    return (0, function_1.pipe)(fa, (0, exports.bimap)(f, g));
  };
  var _mapLeft = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f));
  };
  var contramap2 = function() {
    return function_1.unsafeCoerce;
  };
  exports.contramap = contramap2;
  var map9 = function() {
    return function_1.unsafeCoerce;
  };
  exports.map = map9;
  var bimap = function(f) {
    return function(fa) {
      return (0, exports.make)(f(fa));
    };
  };
  exports.bimap = bimap;
  var mapLeft = function(f) {
    return function(fa) {
      return (0, exports.make)(f(fa));
    };
  };
  exports.mapLeft = mapLeft;
  exports.URI = "Const";
  exports.Functor = {
    URI: exports.URI,
    map: _map8
  };
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.Contravariant = {
    URI: exports.URI,
    contramap: _contramap
  };
  exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
  };
  exports.const_ = {
    URI: exports.URI,
    map: _map8,
    contramap: _contramap,
    bimap: _bimap,
    mapLeft: _mapLeft
  };
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
  var some7 = function(a) {
    return { _tag: "Some", value: a };
  };
  exports.some = some7;
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
  var singleton4 = function(a) {
    return [a];
  };
  exports.singleton = singleton4;
  var isNonEmpty6 = function(as4) {
    return as4.length > 0;
  };
  exports.isNonEmpty = isNonEmpty6;
  var head6 = function(as4) {
    return as4[0];
  };
  exports.head = head6;
  var tail6 = function(as4) {
    return as4.slice(1);
  };
  exports.tail = tail6;
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
  var ap8 = function(F, G) {
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
  var apFirst7 = function(A) {
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
  var apSecond7 = function(A) {
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
  var apS7 = function(F) {
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
  var getApplySemigroup2 = function(F) {
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
  var getRecordConstructor = function(keys2) {
    var len = keys2.length;
    switch (len) {
      case 1:
        return function(a) {
          var _a;
          return _a = {}, _a[keys2[0]] = a, _a;
        };
      case 2:
        return function(a) {
          return function(b) {
            var _a;
            return _a = {}, _a[keys2[0]] = a, _a[keys2[1]] = b, _a;
          };
        };
      case 3:
        return function(a) {
          return function(b) {
            return function(c) {
              var _a;
              return _a = {}, _a[keys2[0]] = a, _a[keys2[1]] = b, _a[keys2[2]] = c, _a;
            };
          };
        };
      case 4:
        return function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                var _a;
                return _a = {}, _a[keys2[0]] = a, _a[keys2[1]] = b, _a[keys2[2]] = c, _a[keys2[3]] = d, _a;
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
                  return _a = {}, _a[keys2[0]] = a, _a[keys2[1]] = b, _a[keys2[2]] = c, _a[keys2[3]] = d, _a[keys2[4]] = e, _a;
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
            r[keys2[i]] = args[i];
          }
          return r;
        }, len - 1, []);
    }
  };
  var sequenceS = function(F) {
    return function(r) {
      var keys2 = Object.keys(r);
      var len = keys2.length;
      var f = getRecordConstructor(keys2);
      var fr = F.map(r[keys2[0]], f);
      for (var i = 1;i < len; i++) {
        fr = F.ap(fr, r[keys2[i]]);
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
  exports.ap = ap8;
  exports.apFirst = apFirst7;
  exports.apSecond = apSecond7;
  exports.apS = apS7;
  exports.getApplySemigroup = getApplySemigroup2;
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
  var chainFirst6 = function(M) {
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
  var bind7 = function(M) {
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
  exports.chainFirst = chainFirst6;
  exports.tap = tap4;
  exports.bind = bind7;
});

// node_modules/fp-ts/lib/pipeable.js
var require_pipeable = __commonJS((exports) => {
  var map9 = function(F) {
    return function(f) {
      return function(fa) {
        return F.map(fa, f);
      };
    };
  };
  var contramap2 = function(F) {
    return function(f) {
      return function(fa) {
        return F.contramap(fa, f);
      };
    };
  };
  var mapWithIndex6 = function(F) {
    return function(f) {
      return function(fa) {
        return F.mapWithIndex(fa, f);
      };
    };
  };
  var ap8 = function(F) {
    return function(fa) {
      return function(fab) {
        return F.ap(fab, fa);
      };
    };
  };
  var chain6 = function(F) {
    return function(f) {
      return function(fa) {
        return F.chain(fa, f);
      };
    };
  };
  var bimap = function(F) {
    return function(f, g) {
      return function(fea) {
        return F.bimap(fea, f, g);
      };
    };
  };
  var mapLeft = function(F) {
    return function(f) {
      return function(fea) {
        return F.mapLeft(fea, f);
      };
    };
  };
  var extend4 = function(F) {
    return function(f) {
      return function(wa) {
        return F.extend(wa, f);
      };
    };
  };
  var reduce8 = function(F) {
    return function(b, f) {
      return function(fa) {
        return F.reduce(fa, b, f);
      };
    };
  };
  var foldMap8 = function(F) {
    return function(M) {
      var foldMapM = F.foldMap(M);
      return function(f) {
        return function(fa) {
          return foldMapM(fa, f);
        };
      };
    };
  };
  var reduceRight8 = function(F) {
    return function(b, f) {
      return function(fa) {
        return F.reduceRight(fa, b, f);
      };
    };
  };
  var reduceWithIndex8 = function(F) {
    return function(b, f) {
      return function(fa) {
        return F.reduceWithIndex(fa, b, f);
      };
    };
  };
  var foldMapWithIndex8 = function(F) {
    return function(M) {
      var foldMapWithIndexM = F.foldMapWithIndex(M);
      return function(f) {
        return function(fa) {
          return foldMapWithIndexM(fa, f);
        };
      };
    };
  };
  var reduceRightWithIndex8 = function(F) {
    return function(b, f) {
      return function(fa) {
        return F.reduceRightWithIndex(fa, b, f);
      };
    };
  };
  var alt4 = function(F) {
    return function(that) {
      return function(fa) {
        return F.alt(fa, that);
      };
    };
  };
  var filter6 = function(F) {
    return function(predicate) {
      return function(fa) {
        return F.filter(fa, predicate);
      };
    };
  };
  var filterMap5 = function(F) {
    return function(f) {
      return function(fa) {
        return F.filterMap(fa, f);
      };
    };
  };
  var partition5 = function(F) {
    return function(f) {
      return function(fa) {
        return F.partition(fa, f);
      };
    };
  };
  var partitionMap5 = function(F) {
    return function(f) {
      return function(fa) {
        return F.partitionMap(fa, f);
      };
    };
  };
  var filterWithIndex6 = function(F) {
    return function(predicate) {
      return function(fa) {
        return F.filterWithIndex(fa, predicate);
      };
    };
  };
  var filterMapWithIndex5 = function(F) {
    return function(f) {
      return function(fa) {
        return F.filterMapWithIndex(fa, f);
      };
    };
  };
  var partitionWithIndex5 = function(F) {
    return function(f) {
      return function(fa) {
        return F.partitionWithIndex(fa, f);
      };
    };
  };
  var partitionMapWithIndex5 = function(F) {
    return function(f) {
      return function(fa) {
        return F.partitionMapWithIndex(fa, f);
      };
    };
  };
  var promap = function(F) {
    return function(f, g) {
      return function(fbc) {
        return F.promap(fbc, f, g);
      };
    };
  };
  var compose = function(F) {
    return function(ea) {
      return function(ab) {
        return F.compose(ab, ea);
      };
    };
  };
  var pipeable = function(I) {
    var r = {};
    if (isFunctor(I)) {
      r.map = map9(I);
    }
    if (isContravariant(I)) {
      r.contramap = contramap2(I);
    }
    if (isFunctorWithIndex(I)) {
      r.mapWithIndex = mapWithIndex6(I);
    }
    if (isApply(I)) {
      r.ap = ap8(I);
      r.apFirst = (0, Apply_1.apFirst)(I);
      r.apSecond = (0, Apply_1.apSecond)(I);
    }
    if (isChain(I)) {
      r.chain = chain6(I);
      r.chainFirst = (0, Chain_1.chainFirst)(I);
      r.flatten = r.chain(function_1.identity);
    }
    if (isBifunctor(I)) {
      r.bimap = bimap(I);
      r.mapLeft = mapLeft(I);
    }
    if (isExtend(I)) {
      r.extend = extend4(I);
      r.duplicate = r.extend(function_1.identity);
    }
    if (isFoldable(I)) {
      r.reduce = reduce8(I);
      r.foldMap = foldMap8(I);
      r.reduceRight = reduceRight8(I);
    }
    if (isFoldableWithIndex(I)) {
      r.reduceWithIndex = reduceWithIndex8(I);
      r.foldMapWithIndex = foldMapWithIndex8(I);
      r.reduceRightWithIndex = reduceRightWithIndex8(I);
    }
    if (isAlt(I)) {
      r.alt = alt4(I);
    }
    if (isCompactable(I)) {
      r.compact = I.compact;
      r.separate = I.separate;
    }
    if (isFilterable(I)) {
      r.filter = filter6(I);
      r.filterMap = filterMap5(I);
      r.partition = partition5(I);
      r.partitionMap = partitionMap5(I);
    }
    if (isFilterableWithIndex(I)) {
      r.filterWithIndex = filterWithIndex6(I);
      r.filterMapWithIndex = filterMapWithIndex5(I);
      r.partitionWithIndex = partitionWithIndex5(I);
      r.partitionMapWithIndex = partitionMapWithIndex5(I);
    }
    if (isProfunctor(I)) {
      r.promap = promap(I);
    }
    if (isSemigroupoid(I)) {
      r.compose = compose(I);
    }
    if (isMonadThrow(I)) {
      var fromOption3 = function(onNone) {
        return function(ma) {
          return ma._tag === "None" ? I.throwError(onNone()) : I.of(ma.value);
        };
      };
      var fromEither4 = function(ma) {
        return ma._tag === "Left" ? I.throwError(ma.left) : I.of(ma.right);
      };
      var fromPredicate4 = function(predicate, onFalse) {
        return function(a) {
          return predicate(a) ? I.of(a) : I.throwError(onFalse(a));
        };
      };
      var filterOrElse = function(predicate, onFalse) {
        return function(ma) {
          return I.chain(ma, function(a) {
            return predicate(a) ? I.of(a) : I.throwError(onFalse(a));
          });
        };
      };
      r.fromOption = fromOption3;
      r.fromEither = fromEither4;
      r.fromPredicate = fromPredicate4;
      r.filterOrElse = filterOrElse;
    }
    return r;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.pipe = exports.pipeable = exports.compose = exports.promap = exports.partitionMapWithIndex = exports.partitionWithIndex = exports.filterMapWithIndex = exports.filterWithIndex = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.alt = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.reduceRight = exports.foldMap = exports.reduce = exports.extend = exports.mapLeft = exports.bimap = exports.chain = exports.ap = exports.mapWithIndex = exports.contramap = exports.map = undefined;
  var Apply_1 = require_Apply();
  var Chain_1 = require_Chain();
  var function_1 = require_function();
  exports.map = map9;
  exports.contramap = contramap2;
  exports.mapWithIndex = mapWithIndex6;
  exports.ap = ap8;
  exports.chain = chain6;
  exports.bimap = bimap;
  exports.mapLeft = mapLeft;
  exports.extend = extend4;
  exports.reduce = reduce8;
  exports.foldMap = foldMap8;
  exports.reduceRight = reduceRight8;
  exports.reduceWithIndex = reduceWithIndex8;
  exports.foldMapWithIndex = foldMapWithIndex8;
  exports.reduceRightWithIndex = reduceRightWithIndex8;
  exports.alt = alt4;
  exports.filter = filter6;
  exports.filterMap = filterMap5;
  exports.partition = partition5;
  exports.partitionMap = partitionMap5;
  exports.filterWithIndex = filterWithIndex6;
  exports.filterMapWithIndex = filterMapWithIndex5;
  exports.partitionWithIndex = partitionWithIndex5;
  exports.partitionMapWithIndex = partitionMapWithIndex5;
  exports.promap = promap;
  exports.compose = compose;
  var isFunctor = function(I) {
    return typeof I.map === "function";
  };
  var isContravariant = function(I) {
    return typeof I.contramap === "function";
  };
  var isFunctorWithIndex = function(I) {
    return typeof I.mapWithIndex === "function";
  };
  var isApply = function(I) {
    return typeof I.ap === "function";
  };
  var isChain = function(I) {
    return typeof I.chain === "function";
  };
  var isBifunctor = function(I) {
    return typeof I.bimap === "function";
  };
  var isExtend = function(I) {
    return typeof I.extend === "function";
  };
  var isFoldable = function(I) {
    return typeof I.reduce === "function";
  };
  var isFoldableWithIndex = function(I) {
    return typeof I.reduceWithIndex === "function";
  };
  var isAlt = function(I) {
    return typeof I.alt === "function";
  };
  var isCompactable = function(I) {
    return typeof I.compact === "function";
  };
  var isFilterable = function(I) {
    return typeof I.filter === "function";
  };
  var isFilterableWithIndex = function(I) {
    return typeof I.filterWithIndex === "function";
  };
  var isProfunctor = function(I) {
    return typeof I.promap === "function";
  };
  var isSemigroupoid = function(I) {
    return typeof I.compose === "function";
  };
  var isMonadThrow = function(I) {
    return typeof I.throwError === "function";
  };
  exports.pipeable = pipeable;
  exports.pipe = function_1.pipe;
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
  var empty10 = {
    equals: function() {
      return true;
    }
  };
  var getSemigroup9 = function() {
    return {
      concat: function(x, y) {
        return (0, exports.fromEquals)(function(a, b) {
          return x.equals(a, b) && y.equals(a, b);
        });
      }
    };
  };
  exports.getSemigroup = getSemigroup9;
  var getMonoid11 = function() {
    return {
      concat: (0, exports.getSemigroup)().concat,
      empty: empty10
    };
  };
  exports.getMonoid = getMonoid11;
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

// node_modules/fp-ts/lib/FromEither.js
var require_FromEither = __commonJS((exports) => {
  var fromOption3 = function(F) {
    return function(onNone) {
      return function(ma) {
        return F.fromEither(_.isNone(ma) ? _.left(onNone()) : _.right(ma.value));
      };
    };
  };
  var fromPredicate4 = function(F) {
    return function(predicate, onFalse) {
      return function(a) {
        return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
      };
    };
  };
  var fromOptionK3 = function(F) {
    var fromOptionF = fromOption3(F);
    return function(onNone) {
      var from = fromOptionF(onNone);
      return function(f) {
        return (0, function_1.flow)(f, from);
      };
    };
  };
  var chainOptionK = function(F, M) {
    var fromOptionKF = fromOptionK3(F);
    return function(onNone) {
      var from = fromOptionKF(onNone);
      return function(f) {
        return function(ma) {
          return M.chain(ma, from(f));
        };
      };
    };
  };
  var fromEitherK4 = function(F) {
    return function(f) {
      return (0, function_1.flow)(f, F.fromEither);
    };
  };
  var chainEitherK2 = function(F, M) {
    var fromEitherKF = fromEitherK4(F);
    return function(f) {
      return function(ma) {
        return M.chain(ma, fromEitherKF(f));
      };
    };
  };
  var chainFirstEitherK = function(F, M) {
    var tapEitherM = tapEither3(F, M);
    return function(f) {
      return function(ma) {
        return tapEitherM(ma, f);
      };
    };
  };
  var filterOrElse = function(F, M) {
    return function(predicate, onFalse) {
      return function(ma) {
        return M.chain(ma, function(a) {
          return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
        });
      };
    };
  };
  var tapEither3 = function(F, M) {
    var fromEither4 = fromEitherK4(F);
    var tapM = (0, Chain_1.tap)(M);
    return function(self, f) {
      return tapM(self, fromEither4(f));
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
  exports.tapEither = exports.filterOrElse = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromPredicate = exports.fromOption = undefined;
  var Chain_1 = require_Chain();
  var function_1 = require_function();
  var _ = __importStar(require_internal());
  exports.fromOption = fromOption3;
  exports.fromPredicate = fromPredicate4;
  exports.fromOptionK = fromOptionK3;
  exports.chainOptionK = chainOptionK;
  exports.fromEitherK = fromEitherK4;
  exports.chainEitherK = chainEitherK2;
  exports.chainFirstEitherK = chainFirstEitherK;
  exports.filterOrElse = filterOrElse;
  exports.tapEither = tapEither3;
});

// node_modules/fp-ts/lib/number.js
var require_number = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Field = exports.MonoidProduct = exports.MonoidSum = exports.SemigroupProduct = exports.SemigroupSum = exports.MagmaSub = exports.Show = exports.Bounded = exports.Ord = exports.Eq = exports.isNumber = undefined;
  var isNumber = function(u) {
    return typeof u === "number";
  };
  exports.isNumber = isNumber;
  exports.Eq = {
    equals: function(first2, second) {
      return first2 === second;
    }
  };
  exports.Ord = {
    equals: exports.Eq.equals,
    compare: function(first2, second) {
      return first2 < second ? -1 : first2 > second ? 1 : 0;
    }
  };
  exports.Bounded = {
    equals: exports.Eq.equals,
    compare: exports.Ord.compare,
    top: Infinity,
    bottom: (-Infinity)
  };
  exports.Show = {
    show: function(n) {
      return JSON.stringify(n);
    }
  };
  exports.MagmaSub = {
    concat: function(first2, second) {
      return first2 - second;
    }
  };
  exports.SemigroupSum = {
    concat: function(first2, second) {
      return first2 + second;
    }
  };
  exports.SemigroupProduct = {
    concat: function(first2, second) {
      return first2 * second;
    }
  };
  exports.MonoidSum = {
    concat: exports.SemigroupSum.concat,
    empty: 0
  };
  exports.MonoidProduct = {
    concat: exports.SemigroupProduct.concat,
    empty: 1
  };
  exports.Field = {
    add: exports.SemigroupSum.concat,
    zero: 0,
    mul: exports.SemigroupProduct.concat,
    one: 1,
    sub: exports.MagmaSub.concat,
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
  var reverse6 = function(O) {
    return (0, exports.fromCompare)(function(first2, second) {
      return O.compare(second, first2);
    });
  };
  exports.reverse = reverse6;
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
  var getSemigroup9 = function() {
    return {
      concat: function(first2, second) {
        return (0, exports.fromCompare)(function(a, b) {
          var ox = first2.compare(a, b);
          return ox !== 0 ? ox : second.compare(a, b);
        });
      }
    };
  };
  exports.getSemigroup = getSemigroup9;
  var getMonoid11 = function() {
    return {
      concat: (0, exports.getSemigroup)().concat,
      empty: (0, exports.fromCompare)(function() {
        return 0;
      })
    };
  };
  exports.getMonoid = getMonoid11;
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
  var min5 = function(O) {
    return function(first2, second) {
      return first2 === second || O.compare(first2, second) < 1 ? first2 : second;
    };
  };
  exports.min = min5;
  var max5 = function(O) {
    return function(first2, second) {
      return first2 === second || O.compare(first2, second) > -1 ? first2 : second;
    };
  };
  exports.max = max5;
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
  var reverse6 = function(M) {
    return {
      concat: function(first2, second) {
        return M.concat(second, first2);
      }
    };
  };
  exports.reverse = reverse6;
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
  var concatAll6 = function(M) {
    return function(startWith) {
      return function(as4) {
        return as4.reduce(function(a, acc) {
          return M.concat(a, acc);
        }, startWith);
      };
    };
  };
  exports.concatAll = concatAll6;
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
  var min5 = function(O) {
    return {
      concat: Or.min(O)
    };
  };
  exports.min = min5;
  var max5 = function(O) {
    return {
      concat: Or.max(O)
    };
  };
  exports.max = max5;
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
  var intercalate5 = function(middle) {
    return function(S) {
      return {
        concat: function(x, y) {
          return S.concat(x, S.concat(middle, y));
        }
      };
    };
  };
  exports.intercalate = intercalate5;
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
  var concatW4 = function(second) {
    return function(first2) {
      return first2.concat(second);
    };
  };
  var concat5 = function(x, y) {
    return y ? x.concat(y) : function(y2) {
      return y2.concat(x);
    };
  };
  var group2 = function(E) {
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
  var zip4 = function(as4, bs) {
    if (bs === undefined) {
      return function(bs2) {
        return zip4(bs2, as4);
      };
    }
    return (0, exports.zipWith)(as4, bs, function(a, b) {
      return [a, b];
    });
  };
  var groupSort2 = function(O) {
    var sortO = (0, exports.sort)(O);
    var groupO = group2(O);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? groupO(sortO(as4)) : exports.empty;
    };
  };
  var filter6 = function(predicate) {
    return (0, exports.filterWithIndex)(function(_2, a) {
      return predicate(a);
    });
  };
  var cons5 = function(head6, tail6) {
    return tail6 === undefined ? (0, exports.prepend)(head6) : (0, function_1.pipe)(tail6, (0, exports.prepend)(head6));
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
  var prependW5 = function(head6) {
    return function(tail6) {
      return __spreadArray6([head6], tail6, true);
    };
  };
  exports.prependW = prependW5;
  exports.prepend = exports.prependW;
  var appendW5 = function(end) {
    return function(init6) {
      return __spreadArray6(__spreadArray6([], init6, true), [end], false);
    };
  };
  exports.appendW = appendW5;
  exports.append = exports.appendW;
  var unsafeInsertAt5 = function(i, a, as4) {
    if ((0, exports.isNonEmpty)(as4)) {
      var xs = _.fromReadonlyNonEmptyArray(as4);
      xs.splice(i, 0, a);
      return xs;
    }
    return [a];
  };
  exports.unsafeInsertAt = unsafeInsertAt5;
  var unsafeUpdateAt5 = function(i, a, as4) {
    if (as4[i] === a) {
      return as4;
    } else {
      var xs = _.fromReadonlyNonEmptyArray(as4);
      xs[i] = a;
      return xs;
    }
  };
  exports.unsafeUpdateAt = unsafeUpdateAt5;
  var uniq5 = function(E) {
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
  exports.uniq = uniq5;
  var sortBy5 = function(ords) {
    if ((0, exports.isNonEmpty)(ords)) {
      var M = (0, Ord_1.getMonoid)();
      return (0, exports.sort)(ords.reduce(M.concat, M.empty));
    }
    return function_1.identity;
  };
  exports.sortBy = sortBy5;
  var union8 = function(E) {
    var uniqE = (0, exports.uniq)(E);
    return function(second) {
      return function(first2) {
        return uniqE((0, function_1.pipe)(first2, concat5(second)));
      };
    };
  };
  exports.union = union8;
  var rotate5 = function(n) {
    return function(as4) {
      var len = as4.length;
      var m = Math.round(n) % len;
      if ((0, exports.isOutOfBound)(Math.abs(m), as4) || m === 0) {
        return as4;
      }
      if (m < 0) {
        var _a = (0, exports.splitAt)(-m)(as4), f = _a[0], s = _a[1];
        return (0, function_1.pipe)(s, concat5(f));
      } else {
        return (0, exports.rotate)(m - len)(as4);
      }
    };
  };
  exports.rotate = rotate5;
  var fromReadonlyArray = function(as4) {
    return (0, exports.isNonEmpty)(as4) ? _.some(as4) : _.none;
  };
  exports.fromReadonlyArray = fromReadonlyArray;
  var makeBy5 = function(f) {
    return function(n) {
      var j = Math.max(0, Math.floor(n));
      var out = [f(0)];
      for (var i = 1;i < j; i++) {
        out.push(f(i));
      }
      return out;
    };
  };
  exports.makeBy = makeBy5;
  var replicate4 = function(a) {
    return (0, exports.makeBy)(function() {
      return a;
    });
  };
  exports.replicate = replicate4;
  var range5 = function(start, end) {
    return start <= end ? (0, exports.makeBy)(function(i) {
      return start + i;
    })(end - start + 1) : [start];
  };
  exports.range = range5;
  var unprepend2 = function(as4) {
    return [(0, exports.head)(as4), (0, exports.tail)(as4)];
  };
  exports.unprepend = unprepend2;
  var unappend2 = function(as4) {
    return [(0, exports.init)(as4), (0, exports.last)(as4)];
  };
  exports.unappend = unappend2;
  var fromArray3 = function(as4) {
    return (0, exports.fromReadonlyArray)(as4.slice());
  };
  exports.fromArray = fromArray3;
  exports.concatW = concatW4;
  exports.concat = concat5;
  var reverse6 = function(as4) {
    return as4.length === 1 ? as4 : __spreadArray6([(0, exports.last)(as4)], as4.slice(0, -1).reverse(), true);
  };
  exports.reverse = reverse6;
  exports.group = group2;
  var groupBy2 = function(f) {
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
  exports.groupBy = groupBy2;
  var sort5 = function(O) {
    return function(as4) {
      return as4.length === 1 ? as4 : as4.slice().sort(O.compare);
    };
  };
  exports.sort = sort5;
  var updateAt5 = function(i, a) {
    return (0, exports.modifyAt)(i, function() {
      return a;
    });
  };
  exports.updateAt = updateAt5;
  var modifyAt5 = function(i, f) {
    return function(as4) {
      return (0, exports.isOutOfBound)(i, as4) ? _.none : _.some((0, exports.unsafeUpdateAt)(i, f(as4[i]), as4));
    };
  };
  exports.modifyAt = modifyAt5;
  var zipWith4 = function(as4, bs, f) {
    var cs = [f(as4[0], bs[0])];
    var len = Math.min(as4.length, bs.length);
    for (var i = 1;i < len; i++) {
      cs[i] = f(as4[i], bs[i]);
    }
    return cs;
  };
  exports.zipWith = zipWith4;
  exports.zip = zip4;
  var unzip4 = function(abs) {
    var fa = [abs[0][0]];
    var fb = [abs[0][1]];
    for (var i = 1;i < abs.length; i++) {
      fa[i] = abs[i][0];
      fb[i] = abs[i][1];
    }
    return [fa, fb];
  };
  exports.unzip = unzip4;
  var prependAll5 = function(middle) {
    return function(as4) {
      var out = [middle, as4[0]];
      for (var i = 1;i < as4.length; i++) {
        out.push(middle, as4[i]);
      }
      return out;
    };
  };
  exports.prependAll = prependAll5;
  var intersperse5 = function(middle) {
    return function(as4) {
      var rest = (0, exports.tail)(as4);
      return (0, exports.isNonEmpty)(rest) ? (0, function_1.pipe)(rest, (0, exports.prependAll)(middle), (0, exports.prepend)((0, exports.head)(as4))) : as4;
    };
  };
  exports.intersperse = intersperse5;
  var chainWithIndex4 = function(f) {
    return function(as4) {
      var out = _.fromReadonlyNonEmptyArray(f(0, (0, exports.head)(as4)));
      for (var i = 1;i < as4.length; i++) {
        out.push.apply(out, f(i, as4[i]));
      }
      return out;
    };
  };
  exports.chainWithIndex = chainWithIndex4;
  var chop5 = function(f) {
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
  exports.chop = chop5;
  var splitAt5 = function(n) {
    return function(as4) {
      var m = Math.max(1, n);
      return m >= as4.length ? [as4, exports.empty] : [(0, function_1.pipe)(as4.slice(1, m), (0, exports.prepend)((0, exports.head)(as4))), as4.slice(m)];
    };
  };
  exports.splitAt = splitAt5;
  var chunksOf5 = function(n) {
    return (0, exports.chop)((0, exports.splitAt)(n));
  };
  exports.chunksOf = chunksOf5;
  var _map8 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _mapWithIndex6 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f));
  };
  var _ap5 = function(fab, fa) {
    return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
  };
  var _extend4 = function(wa, f) {
    return (0, function_1.pipe)(wa, (0, exports.extend)(f));
  };
  var _reduce6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f));
  };
  var _foldMap6 = function(M) {
    var foldMapM = (0, exports.foldMap)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapM(f));
    };
  };
  var _reduceRight6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f));
  };
  var _traverse6 = function(F) {
    var traverseF = (0, exports.traverse)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseF(f));
    };
  };
  var _alt4 = function(fa, that) {
    return (0, function_1.pipe)(fa, (0, exports.alt)(that));
  };
  var _reduceWithIndex6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f));
  };
  var _foldMapWithIndex6 = function(M) {
    var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapWithIndexM(f));
    };
  };
  var _reduceRightWithIndex6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f));
  };
  var _traverseWithIndex6 = function(F) {
    var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseWithIndexF(f));
    };
  };
  exports.of = _.singleton;
  var altW4 = function(that) {
    return function(as4) {
      return (0, function_1.pipe)(as4, concatW4(that()));
    };
  };
  exports.altW = altW4;
  exports.alt = exports.altW;
  var ap8 = function(as4) {
    return (0, exports.flatMap)(function(f) {
      return (0, function_1.pipe)(as4, (0, exports.map)(f));
    });
  };
  exports.ap = ap8;
  exports.flatMap = (0, function_1.dual)(2, function(ma, f) {
    return (0, function_1.pipe)(ma, (0, exports.chainWithIndex)(function(i, a) {
      return f(a, i);
    }));
  });
  var extend4 = function(f) {
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
  exports.extend = extend4;
  exports.duplicate = (0, exports.extend)(function_1.identity);
  exports.flatten = (0, exports.flatMap)(function_1.identity);
  var map9 = function(f) {
    return (0, exports.mapWithIndex)(function(_2, a) {
      return f(a);
    });
  };
  exports.map = map9;
  var mapWithIndex6 = function(f) {
    return function(as4) {
      var out = [f(0, (0, exports.head)(as4))];
      for (var i = 1;i < as4.length; i++) {
        out.push(f(i, as4[i]));
      }
      return out;
    };
  };
  exports.mapWithIndex = mapWithIndex6;
  var reduce8 = function(b, f) {
    return (0, exports.reduceWithIndex)(b, function(_2, b2, a) {
      return f(b2, a);
    });
  };
  exports.reduce = reduce8;
  var foldMap8 = function(S) {
    return function(f) {
      return function(as4) {
        return as4.slice(1).reduce(function(s, a) {
          return S.concat(s, f(a));
        }, f(as4[0]));
      };
    };
  };
  exports.foldMap = foldMap8;
  var reduceRight8 = function(b, f) {
    return (0, exports.reduceRightWithIndex)(b, function(_2, b2, a) {
      return f(b2, a);
    });
  };
  exports.reduceRight = reduceRight8;
  var reduceWithIndex8 = function(b, f) {
    return function(as4) {
      return as4.reduce(function(b2, a, i) {
        return f(i, b2, a);
      }, b);
    };
  };
  exports.reduceWithIndex = reduceWithIndex8;
  var foldMapWithIndex8 = function(S) {
    return function(f) {
      return function(as4) {
        return as4.slice(1).reduce(function(s, a, i) {
          return S.concat(s, f(i + 1, a));
        }, f(0, as4[0]));
      };
    };
  };
  exports.foldMapWithIndex = foldMapWithIndex8;
  var reduceRightWithIndex8 = function(b, f) {
    return function(as4) {
      return as4.reduceRight(function(b2, a, i) {
        return f(i, a, b2);
      }, b);
    };
  };
  exports.reduceRightWithIndex = reduceRightWithIndex8;
  var traverse6 = function(F) {
    var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
    return function(f) {
      return traverseWithIndexF(function(_2, a) {
        return f(a);
      });
    };
  };
  exports.traverse = traverse6;
  var sequence6 = function(F) {
    return (0, exports.traverseWithIndex)(F)(function_1.SK);
  };
  exports.sequence = sequence6;
  var traverseWithIndex6 = function(F) {
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
  exports.traverseWithIndex = traverseWithIndex6;
  exports.extract = _.head;
  exports.URI = "ReadonlyNonEmptyArray";
  var getShow8 = function(S) {
    return {
      show: function(as4) {
        return "[".concat(as4.map(S.show).join(", "), "]");
      }
    };
  };
  exports.getShow = getShow8;
  var getSemigroup9 = function() {
    return {
      concat: concat5
    };
  };
  exports.getSemigroup = getSemigroup9;
  var getEq8 = function(E) {
    return (0, Eq_1.fromEquals)(function(xs, ys) {
      return xs.length === ys.length && xs.every(function(x, i) {
        return E.equals(x, ys[i]);
      });
    });
  };
  exports.getEq = getEq8;
  var getUnionSemigroup5 = function(E) {
    var unionE = (0, exports.union)(E);
    return {
      concat: function(first2, second) {
        return unionE(second)(first2);
      }
    };
  };
  exports.getUnionSemigroup = getUnionSemigroup5;
  exports.Functor = {
    URI: exports.URI,
    map: _map8
  };
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.Pointed = {
    URI: exports.URI,
    of: exports.of
  };
  exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map8,
    mapWithIndex: _mapWithIndex6
  };
  exports.Apply = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5
  };
  exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
  exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
  exports.Applicative = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of
  };
  exports.Chain = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    chain: exports.flatMap
  };
  exports.chainFirst = (0, Chain_1.chainFirst)(exports.Chain);
  exports.Monad = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    chain: exports.flatMap
  };
  exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6
  };
  exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    reduceWithIndex: _reduceWithIndex6,
    foldMapWithIndex: _foldMapWithIndex6,
    reduceRightWithIndex: _reduceRightWithIndex6
  };
  exports.Traversable = {
    URI: exports.URI,
    map: _map8,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence
  };
  exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map8,
    mapWithIndex: _mapWithIndex6,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex6,
    foldMapWithIndex: _foldMapWithIndex6,
    reduceRightWithIndex: _reduceRightWithIndex6,
    traverseWithIndex: _traverseWithIndex6
  };
  exports.Alt = {
    URI: exports.URI,
    map: _map8,
    alt: _alt4
  };
  exports.Comonad = {
    URI: exports.URI,
    map: _map8,
    extend: _extend4,
    extract: exports.extract
  };
  exports.Do = (0, exports.of)(_.emptyRecord);
  exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
  var let_7 = (0, Functor_1.let)(exports.Functor);
  exports.let = let_7;
  exports.bind = (0, Chain_1.bind)(exports.Chain);
  exports.apS = (0, Apply_1.apS)(exports.Apply);
  exports.head = exports.extract;
  exports.tail = _.tail;
  var last6 = function(as4) {
    return as4[as4.length - 1];
  };
  exports.last = last6;
  var init5 = function(as4) {
    return as4.slice(0, -1);
  };
  exports.init = init5;
  var min5 = function(O) {
    var S = Se.min(O);
    return function(as4) {
      return as4.reduce(S.concat);
    };
  };
  exports.min = min5;
  var max5 = function(O) {
    var S = Se.max(O);
    return function(as4) {
      return as4.reduce(S.concat);
    };
  };
  exports.max = max5;
  var concatAll6 = function(S) {
    return function(as4) {
      return as4.reduce(S.concat);
    };
  };
  exports.concatAll = concatAll6;
  var matchLeft4 = function(f) {
    return function(as4) {
      return f((0, exports.head)(as4), (0, exports.tail)(as4));
    };
  };
  exports.matchLeft = matchLeft4;
  var matchRight4 = function(f) {
    return function(as4) {
      return f((0, exports.init)(as4), (0, exports.last)(as4));
    };
  };
  exports.matchRight = matchRight4;
  var modifyHead2 = function(f) {
    return function(as4) {
      return __spreadArray6([f((0, exports.head)(as4))], (0, exports.tail)(as4), true);
    };
  };
  exports.modifyHead = modifyHead2;
  var updateHead2 = function(a) {
    return (0, exports.modifyHead)(function() {
      return a;
    });
  };
  exports.updateHead = updateHead2;
  var modifyLast2 = function(f) {
    return function(as4) {
      return (0, function_1.pipe)((0, exports.init)(as4), (0, exports.append)(f((0, exports.last)(as4))));
    };
  };
  exports.modifyLast = modifyLast2;
  var updateLast2 = function(a) {
    return (0, exports.modifyLast)(function() {
      return a;
    });
  };
  exports.updateLast = updateLast2;
  var intercalate5 = function(S) {
    var concatAllS = (0, exports.concatAll)(S);
    return function(middle) {
      return (0, function_1.flow)((0, exports.intersperse)(middle), concatAllS);
    };
  };
  exports.intercalate = intercalate5;
  exports.chain = exports.flatMap;
  exports.groupSort = groupSort2;
  exports.filter = filter6;
  var filterWithIndex6 = function(predicate) {
    return function(as4) {
      return (0, exports.fromReadonlyArray)(as4.filter(function(a, i) {
        return predicate(i, a);
      }));
    };
  };
  exports.filterWithIndex = filterWithIndex6;
  exports.uncons = exports.unprepend;
  exports.unsnoc = exports.unappend;
  exports.cons = cons5;
  var snoc5 = function(init6, end) {
    return (0, function_1.pipe)(init6, concat5([end]));
  };
  exports.snoc = snoc5;
  var insertAt5 = function(i, a) {
    return function(as4) {
      return i < 0 || i > as4.length ? _.none : _.some((0, exports.unsafeInsertAt)(i, a, as4));
    };
  };
  exports.insertAt = insertAt5;
  exports.prependToAll = exports.prependAll;
  exports.fold = exports.concatAll;
  exports.readonlyNonEmptyArray = {
    URI: exports.URI,
    of: exports.of,
    map: _map8,
    mapWithIndex: _mapWithIndex6,
    ap: _ap5,
    chain: exports.flatMap,
    extend: _extend4,
    extract: exports.extract,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex6,
    foldMapWithIndex: _foldMapWithIndex6,
    reduceRightWithIndex: _reduceRightWithIndex6,
    traverseWithIndex: _traverseWithIndex6,
    alt: _alt4
  };
});

// node_modules/fp-ts/lib/Separated.js
var require_Separated = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = undefined;
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  var separated2 = function(left2, right2) {
    return { left: left2, right: right2 };
  };
  exports.separated = separated2;
  var _map8 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _mapLeft = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f));
  };
  var _bimap = function(fa, g, f) {
    return (0, function_1.pipe)(fa, (0, exports.bimap)(g, f));
  };
  var map9 = function(f) {
    return function(fa) {
      return (0, exports.separated)((0, exports.left)(fa), f((0, exports.right)(fa)));
    };
  };
  exports.map = map9;
  var mapLeft = function(f) {
    return function(fa) {
      return (0, exports.separated)(f((0, exports.left)(fa)), (0, exports.right)(fa));
    };
  };
  exports.mapLeft = mapLeft;
  var bimap = function(f, g) {
    return function(fa) {
      return (0, exports.separated)(f((0, exports.left)(fa)), g((0, exports.right)(fa)));
    };
  };
  exports.bimap = bimap;
  exports.URI = "Separated";
  exports.Bifunctor = {
    URI: exports.URI,
    mapLeft: _mapLeft,
    bimap: _bimap
  };
  exports.Functor = {
    URI: exports.URI,
    map: _map8
  };
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  var left = function(s) {
    return s.left;
  };
  exports.left = left;
  var right = function(s) {
    return s.right;
  };
  exports.right = right;
});

// node_modules/fp-ts/lib/Witherable.js
var require_Witherable = __commonJS((exports) => {
  var wiltDefault2 = function(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f) {
        return F.map(traverseF(wa, f), C.separate);
      };
    };
  };
  var witherDefault2 = function(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f) {
        return F.map(traverseF(wa, f), C.compact);
      };
    };
  };
  var filterE4 = function(W) {
    return function(F) {
      var witherF = W.wither(F);
      return function(predicate) {
        return function(ga) {
          return witherF(ga, function(a) {
            return F.map(predicate(a), function(b) {
              return b ? _.some(a) : _.none;
            });
          });
        };
      };
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
  exports.filterE = exports.witherDefault = exports.wiltDefault = undefined;
  var _ = __importStar(require_internal());
  exports.wiltDefault = wiltDefault2;
  exports.witherDefault = witherDefault2;
  exports.filterE = filterE4;
});

// node_modules/fp-ts/lib/Zero.js
var require_Zero = __commonJS((exports) => {
  var guard5 = function(F, P) {
    return function(b) {
      return b ? P.of(undefined) : F.zero();
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.guard = undefined;
  exports.guard = guard5;
});

// node_modules/fp-ts/lib/ReadonlyArray.js
var require_ReadonlyArray = __commonJS((exports) => {
  var fromPredicate4 = function(predicate) {
    return function(a) {
      return predicate(a) ? [a] : exports.empty;
    };
  };
  var lookup7 = function(i, as4) {
    return as4 === undefined ? function(as5) {
      return lookup7(i, as5);
    } : (0, exports.isOutOfBound)(i, as4) ? _.none : _.some(as4[i]);
  };
  var takeLeftWhile3 = function(predicate) {
    return function(as4) {
      var out = [];
      for (var _i = 0, as_1 = as4;_i < as_1.length; _i++) {
        var a = as_1[_i];
        if (!predicate(a)) {
          break;
        }
        out.push(a);
      }
      var len = out.length;
      return len === as4.length ? as4 : len === 0 ? exports.empty : out;
    };
  };
  var spanLeft3 = function(predicate) {
    return function(as4) {
      var _a = (0, exports.splitAt)(spanLeftIndex3(as4, predicate))(as4), init6 = _a[0], rest = _a[1];
      return { init: init6, rest };
    };
  };
  var dropLeftWhile3 = function(predicate) {
    return function(as4) {
      var i = spanLeftIndex3(as4, predicate);
      return i === 0 ? as4 : i === as4.length ? exports.empty : as4.slice(i);
    };
  };
  var findFirst3 = function(predicate) {
    return function(as4) {
      for (var i = 0;i < as4.length; i++) {
        if (predicate(as4[i])) {
          return _.some(as4[i]);
        }
      }
      return _.none;
    };
  };
  var findLast3 = function(predicate) {
    return function(as4) {
      for (var i = as4.length - 1;i >= 0; i--) {
        if (predicate(as4[i])) {
          return _.some(as4[i]);
        }
      }
      return _.none;
    };
  };
  var zip4 = function(as4, bs) {
    if (bs === undefined) {
      return function(bs2) {
        return zip4(bs2, as4);
      };
    }
    return (0, exports.zipWith)(as4, bs, function(a, b) {
      return [a, b];
    });
  };
  var elem6 = function(E) {
    return function(a, as4) {
      if (as4 === undefined) {
        var elemE_1 = elem6(E);
        return function(as5) {
          return elemE_1(a, as5);
        };
      }
      var predicate = function(element) {
        return E.equals(element, a);
      };
      var i = 0;
      for (;i < as4.length; i++) {
        if (predicate(as4[i])) {
          return true;
        }
      }
      return false;
    };
  };
  var comprehension3 = function(input, f, g) {
    if (g === undefined) {
      g = function() {
        return true;
      };
    }
    var go = function(scope, input2) {
      return (0, exports.isNonEmpty)(input2) ? (0, exports.flatMap)(RNEA.head(input2), function(a) {
        return go((0, function_1.pipe)(scope, (0, exports.append)(a)), RNEA.tail(input2));
      }) : g.apply(undefined, scope) ? [f.apply(undefined, scope)] : exports.empty;
    };
    return go(exports.empty, input);
  };
  var union8 = function(E) {
    var unionE = RNEA.union(E);
    return function(first2, second) {
      if (second === undefined) {
        var unionE_1 = union8(E);
        return function(second2) {
          return unionE_1(second2, first2);
        };
      }
      return (0, exports.isNonEmpty)(first2) && (0, exports.isNonEmpty)(second) ? unionE(second)(first2) : (0, exports.isNonEmpty)(first2) ? first2 : second;
    };
  };
  var intersection6 = function(E) {
    var elemE = elem6(E);
    return function(xs, ys) {
      if (ys === undefined) {
        var intersectionE_1 = intersection6(E);
        return function(ys2) {
          return intersectionE_1(ys2, xs);
        };
      }
      return xs.filter(function(a) {
        return elemE(a, ys);
      });
    };
  };
  var difference6 = function(E) {
    var elemE = elem6(E);
    return function(xs, ys) {
      if (ys === undefined) {
        var differenceE_1 = difference6(E);
        return function(ys2) {
          return differenceE_1(ys2, xs);
        };
      }
      return xs.filter(function(a) {
        return !elemE(a, ys);
      });
    };
  };
  var every5 = function(predicate) {
    return function(as4) {
      return as4.every(predicate);
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
  exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.updateAt = exports.insertAt = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.lookup = exports.isOutOfBound = exports.size = exports.scanRight = exports.scanLeft = exports.chainWithIndex = exports.foldRight = exports.matchRight = exports.matchRightW = exports.foldLeft = exports.matchLeft = exports.matchLeftW = exports.match = exports.matchW = exports.fromEither = exports.fromOption = exports.fromPredicate = exports.replicate = exports.makeBy = exports.appendW = exports.append = exports.prependW = exports.prepend = exports.isNonEmpty = exports.isEmpty = undefined;
  exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.foldMap = exports.reduce = exports.foldMapWithIndex = exports.duplicate = exports.extend = exports.filterWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partitionWithIndex = exports.partition = exports.compact = exports.filterMap = exports.filterMapWithIndex = exports.filter = exports.separate = exports.mapWithIndex = exports.map = exports.flatten = exports.flatMap = exports.ap = exports.alt = exports.altW = exports.zero = exports.of = exports._chainRecBreadthFirst = exports._chainRecDepthFirst = exports.difference = exports.intersection = exports.union = exports.concat = exports.concatW = exports.comprehension = exports.fromOptionK = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = exports.uniq = exports.elem = exports.rotate = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = undefined;
  exports.toArray = exports.unsafeDeleteAt = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.fromEitherK = exports.FromEither = exports.filterE = exports.Witherable = exports.ChainRecBreadthFirst = exports.chainRecBreadthFirst = exports.ChainRecDepthFirst = exports.chainRecDepthFirst = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.guard = exports.Zero = exports.Alt = exports.Unfoldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getDifferenceMagma = exports.getIntersectionSemigroup = exports.getUnionMonoid = exports.getUnionSemigroup = exports.getOrd = exports.getEq = exports.getMonoid = exports.getSemigroup = exports.getShow = exports.URI = exports.unfold = exports.wilt = exports.wither = exports.traverseWithIndex = undefined;
  exports.readonlyArray = exports.prependToAll = exports.snoc = exports.cons = exports.range = exports.chain = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.intercalate = exports.exists = exports.some = exports.every = exports.empty = exports.fromArray = undefined;
  var Apply_1 = require_Apply();
  var Chain_1 = require_Chain();
  var Eq_1 = require_Eq();
  var FromEither_1 = require_FromEither();
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  var _ = __importStar(require_internal());
  var N = __importStar(require_number());
  var Ord_1 = require_Ord();
  var RNEA = __importStar(require_ReadonlyNonEmptyArray());
  var Separated_1 = require_Separated();
  var Witherable_1 = require_Witherable();
  var Zero_1 = require_Zero();
  var isEmpty7 = function(as4) {
    return as4.length === 0;
  };
  exports.isEmpty = isEmpty7;
  exports.isNonEmpty = RNEA.isNonEmpty;
  exports.prepend = RNEA.prepend;
  exports.prependW = RNEA.prependW;
  exports.append = RNEA.append;
  exports.appendW = RNEA.appendW;
  var makeBy5 = function(n, f) {
    return n <= 0 ? exports.empty : RNEA.makeBy(f)(n);
  };
  exports.makeBy = makeBy5;
  var replicate4 = function(n, a) {
    return (0, exports.makeBy)(n, function() {
      return a;
    });
  };
  exports.replicate = replicate4;
  exports.fromPredicate = fromPredicate4;
  var fromOption3 = function(ma) {
    return _.isNone(ma) ? exports.empty : [ma.value];
  };
  exports.fromOption = fromOption3;
  var fromEither4 = function(e) {
    return _.isLeft(e) ? exports.empty : [e.right];
  };
  exports.fromEither = fromEither4;
  var matchW3 = function(onEmpty, onNonEmpty) {
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? onNonEmpty(as4) : onEmpty();
    };
  };
  exports.matchW = matchW3;
  exports.match = exports.matchW;
  var matchLeftW3 = function(onEmpty, onNonEmpty) {
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? onNonEmpty(RNEA.head(as4), RNEA.tail(as4)) : onEmpty();
    };
  };
  exports.matchLeftW = matchLeftW3;
  exports.matchLeft = exports.matchLeftW;
  exports.foldLeft = exports.matchLeft;
  var matchRightW3 = function(onEmpty, onNonEmpty) {
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? onNonEmpty(RNEA.init(as4), RNEA.last(as4)) : onEmpty();
    };
  };
  exports.matchRightW = matchRightW3;
  exports.matchRight = exports.matchRightW;
  exports.foldRight = exports.matchRight;
  var chainWithIndex4 = function(f) {
    return function(as4) {
      if ((0, exports.isEmpty)(as4)) {
        return exports.empty;
      }
      var out = [];
      for (var i = 0;i < as4.length; i++) {
        out.push.apply(out, f(i, as4[i]));
      }
      return out;
    };
  };
  exports.chainWithIndex = chainWithIndex4;
  var scanLeft3 = function(b, f) {
    return function(as4) {
      var len = as4.length;
      var out = new Array(len + 1);
      out[0] = b;
      for (var i = 0;i < len; i++) {
        out[i + 1] = f(out[i], as4[i]);
      }
      return out;
    };
  };
  exports.scanLeft = scanLeft3;
  var scanRight3 = function(b, f) {
    return function(as4) {
      var len = as4.length;
      var out = new Array(len + 1);
      out[len] = b;
      for (var i = len - 1;i >= 0; i--) {
        out[i] = f(as4[i], out[i + 1]);
      }
      return out;
    };
  };
  exports.scanRight = scanRight3;
  var size7 = function(as4) {
    return as4.length;
  };
  exports.size = size7;
  exports.isOutOfBound = RNEA.isOutOfBound;
  exports.lookup = lookup7;
  var head6 = function(as4) {
    return (0, exports.isNonEmpty)(as4) ? _.some(RNEA.head(as4)) : _.none;
  };
  exports.head = head6;
  var last6 = function(as4) {
    return (0, exports.isNonEmpty)(as4) ? _.some(RNEA.last(as4)) : _.none;
  };
  exports.last = last6;
  var tail6 = function(as4) {
    return (0, exports.isNonEmpty)(as4) ? _.some(RNEA.tail(as4)) : _.none;
  };
  exports.tail = tail6;
  var init5 = function(as4) {
    return (0, exports.isNonEmpty)(as4) ? _.some(RNEA.init(as4)) : _.none;
  };
  exports.init = init5;
  var takeLeft3 = function(n) {
    return function(as4) {
      return (0, exports.isOutOfBound)(n, as4) ? as4 : n === 0 ? exports.empty : as4.slice(0, n);
    };
  };
  exports.takeLeft = takeLeft3;
  var takeRight3 = function(n) {
    return function(as4) {
      return (0, exports.isOutOfBound)(n, as4) ? as4 : n === 0 ? exports.empty : as4.slice(-n);
    };
  };
  exports.takeRight = takeRight3;
  exports.takeLeftWhile = takeLeftWhile3;
  var spanLeftIndex3 = function(as4, predicate) {
    var l = as4.length;
    var i = 0;
    for (;i < l; i++) {
      if (!predicate(as4[i])) {
        break;
      }
    }
    return i;
  };
  exports.spanLeft = spanLeft3;
  var dropLeft3 = function(n) {
    return function(as4) {
      return n <= 0 || (0, exports.isEmpty)(as4) ? as4 : n >= as4.length ? exports.empty : as4.slice(n, as4.length);
    };
  };
  exports.dropLeft = dropLeft3;
  var dropRight3 = function(n) {
    return function(as4) {
      return n <= 0 || (0, exports.isEmpty)(as4) ? as4 : n >= as4.length ? exports.empty : as4.slice(0, as4.length - n);
    };
  };
  exports.dropRight = dropRight3;
  exports.dropLeftWhile = dropLeftWhile3;
  var findIndex3 = function(predicate) {
    return function(as4) {
      for (var i = 0;i < as4.length; i++) {
        if (predicate(as4[i])) {
          return _.some(i);
        }
      }
      return _.none;
    };
  };
  exports.findIndex = findIndex3;
  exports.findFirst = findFirst3;
  var findFirstMap3 = function(f) {
    return function(as4) {
      for (var i = 0;i < as4.length; i++) {
        var out = f(as4[i]);
        if (_.isSome(out)) {
          return out;
        }
      }
      return _.none;
    };
  };
  exports.findFirstMap = findFirstMap3;
  exports.findLast = findLast3;
  var findLastMap3 = function(f) {
    return function(as4) {
      for (var i = as4.length - 1;i >= 0; i--) {
        var out = f(as4[i]);
        if (_.isSome(out)) {
          return out;
        }
      }
      return _.none;
    };
  };
  exports.findLastMap = findLastMap3;
  var findLastIndex3 = function(predicate) {
    return function(as4) {
      for (var i = as4.length - 1;i >= 0; i--) {
        if (predicate(as4[i])) {
          return _.some(i);
        }
      }
      return _.none;
    };
  };
  exports.findLastIndex = findLastIndex3;
  var insertAt5 = function(i, a) {
    return function(as4) {
      return i < 0 || i > as4.length ? _.none : _.some(RNEA.unsafeInsertAt(i, a, as4));
    };
  };
  exports.insertAt = insertAt5;
  var updateAt5 = function(i, a) {
    return (0, exports.modifyAt)(i, function() {
      return a;
    });
  };
  exports.updateAt = updateAt5;
  var deleteAt4 = function(i) {
    return function(as4) {
      return (0, exports.isOutOfBound)(i, as4) ? _.none : _.some((0, exports.unsafeDeleteAt)(i, as4));
    };
  };
  exports.deleteAt = deleteAt4;
  var modifyAt5 = function(i, f) {
    return function(as4) {
      return (0, exports.isOutOfBound)(i, as4) ? _.none : _.some((0, exports.unsafeUpdateAt)(i, f(as4[i]), as4));
    };
  };
  exports.modifyAt = modifyAt5;
  var reverse6 = function(as4) {
    return as4.length <= 1 ? as4 : as4.slice().reverse();
  };
  exports.reverse = reverse6;
  var rights3 = function(as4) {
    var r = [];
    for (var i = 0;i < as4.length; i++) {
      var a = as4[i];
      if (a._tag === "Right") {
        r.push(a.right);
      }
    }
    return r;
  };
  exports.rights = rights3;
  var lefts3 = function(as4) {
    var r = [];
    for (var i = 0;i < as4.length; i++) {
      var a = as4[i];
      if (a._tag === "Left") {
        r.push(a.left);
      }
    }
    return r;
  };
  exports.lefts = lefts3;
  var sort5 = function(O) {
    return function(as4) {
      return as4.length <= 1 ? as4 : as4.slice().sort(O.compare);
    };
  };
  exports.sort = sort5;
  var zipWith4 = function(fa, fb, f) {
    var fc = [];
    var len = Math.min(fa.length, fb.length);
    for (var i = 0;i < len; i++) {
      fc[i] = f(fa[i], fb[i]);
    }
    return fc;
  };
  exports.zipWith = zipWith4;
  exports.zip = zip4;
  var unzip4 = function(as4) {
    var fa = [];
    var fb = [];
    for (var i = 0;i < as4.length; i++) {
      fa[i] = as4[i][0];
      fb[i] = as4[i][1];
    }
    return [fa, fb];
  };
  exports.unzip = unzip4;
  var prependAll5 = function(middle) {
    var f = RNEA.prependAll(middle);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? f(as4) : as4;
    };
  };
  exports.prependAll = prependAll5;
  var intersperse5 = function(middle) {
    var f = RNEA.intersperse(middle);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? f(as4) : as4;
    };
  };
  exports.intersperse = intersperse5;
  var rotate5 = function(n) {
    var f = RNEA.rotate(n);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? f(as4) : as4;
    };
  };
  exports.rotate = rotate5;
  exports.elem = elem6;
  var uniq5 = function(E) {
    var f = RNEA.uniq(E);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? f(as4) : as4;
    };
  };
  exports.uniq = uniq5;
  var sortBy5 = function(ords) {
    var f = RNEA.sortBy(ords);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? f(as4) : as4;
    };
  };
  exports.sortBy = sortBy5;
  var chop5 = function(f) {
    var g = RNEA.chop(f);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? g(as4) : exports.empty;
    };
  };
  exports.chop = chop5;
  var splitAt5 = function(n) {
    return function(as4) {
      return n >= 1 && (0, exports.isNonEmpty)(as4) ? RNEA.splitAt(n)(as4) : (0, exports.isEmpty)(as4) ? [as4, exports.empty] : [exports.empty, as4];
    };
  };
  exports.splitAt = splitAt5;
  var chunksOf5 = function(n) {
    var f = RNEA.chunksOf(n);
    return function(as4) {
      return (0, exports.isNonEmpty)(as4) ? f(as4) : exports.empty;
    };
  };
  exports.chunksOf = chunksOf5;
  var fromOptionK3 = function(f) {
    return function() {
      var a = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return (0, exports.fromOption)(f.apply(undefined, a));
    };
  };
  exports.fromOptionK = fromOptionK3;
  exports.comprehension = comprehension3;
  var concatW4 = function(second) {
    return function(first2) {
      return (0, exports.isEmpty)(first2) ? second : (0, exports.isEmpty)(second) ? first2 : first2.concat(second);
    };
  };
  exports.concatW = concatW4;
  exports.concat = exports.concatW;
  exports.union = union8;
  exports.intersection = intersection6;
  exports.difference = difference6;
  var _map8 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _mapWithIndex6 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f));
  };
  var _ap5 = function(fab, fa) {
    return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
  };
  var _filter5 = function(fa, predicate) {
    return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
  };
  var _filterMap5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.filterMap)(f));
  };
  var _partition5 = function(fa, predicate) {
    return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
  };
  var _partitionMap5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f));
  };
  var _partitionWithIndex5 = function(fa, predicateWithIndex) {
    return (0, function_1.pipe)(fa, (0, exports.partitionWithIndex)(predicateWithIndex));
  };
  var _partitionMapWithIndex5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.partitionMapWithIndex)(f));
  };
  var _alt4 = function(fa, that) {
    return (0, function_1.pipe)(fa, (0, exports.alt)(that));
  };
  var _reduce6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f));
  };
  var _foldMap6 = function(M) {
    var foldMapM = (0, exports.foldMap)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapM(f));
    };
  };
  var _reduceRight6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f));
  };
  var _reduceWithIndex6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f));
  };
  var _foldMapWithIndex6 = function(M) {
    var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapWithIndexM(f));
    };
  };
  var _reduceRightWithIndex6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f));
  };
  var _filterMapWithIndex5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.filterMapWithIndex)(f));
  };
  var _filterWithIndex5 = function(fa, predicateWithIndex) {
    return (0, function_1.pipe)(fa, (0, exports.filterWithIndex)(predicateWithIndex));
  };
  var _extend4 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.extend)(f));
  };
  var _traverse6 = function(F) {
    var traverseF = (0, exports.traverse)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseF(f));
    };
  };
  var _traverseWithIndex6 = function(F) {
    var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseWithIndexF(f));
    };
  };
  var _chainRecDepthFirst3 = function(a, f) {
    return (0, function_1.pipe)(a, (0, exports.chainRecDepthFirst)(f));
  };
  exports._chainRecDepthFirst = _chainRecDepthFirst3;
  var _chainRecBreadthFirst3 = function(a, f) {
    return (0, function_1.pipe)(a, (0, exports.chainRecBreadthFirst)(f));
  };
  exports._chainRecBreadthFirst = _chainRecBreadthFirst3;
  exports.of = RNEA.of;
  var zero3 = function() {
    return exports.empty;
  };
  exports.zero = zero3;
  var altW4 = function(that) {
    return function(fa) {
      return fa.concat(that());
    };
  };
  exports.altW = altW4;
  exports.alt = exports.altW;
  var ap8 = function(fa) {
    return (0, exports.flatMap)(function(f) {
      return (0, function_1.pipe)(fa, (0, exports.map)(f));
    });
  };
  exports.ap = ap8;
  exports.flatMap = (0, function_1.dual)(2, function(ma, f) {
    return (0, function_1.pipe)(ma, (0, exports.chainWithIndex)(function(i, a) {
      return f(a, i);
    }));
  });
  exports.flatten = (0, exports.flatMap)(function_1.identity);
  var map9 = function(f) {
    return function(fa) {
      return fa.map(function(a) {
        return f(a);
      });
    };
  };
  exports.map = map9;
  var mapWithIndex6 = function(f) {
    return function(fa) {
      return fa.map(function(a, i) {
        return f(i, a);
      });
    };
  };
  exports.mapWithIndex = mapWithIndex6;
  var separate5 = function(fa) {
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
    return (0, Separated_1.separated)(left, right);
  };
  exports.separate = separate5;
  var filter6 = function(predicate) {
    return function(as4) {
      return as4.filter(predicate);
    };
  };
  exports.filter = filter6;
  var filterMapWithIndex5 = function(f) {
    return function(fa) {
      var out = [];
      for (var i = 0;i < fa.length; i++) {
        var optionB = f(i, fa[i]);
        if (_.isSome(optionB)) {
          out.push(optionB.value);
        }
      }
      return out;
    };
  };
  exports.filterMapWithIndex = filterMapWithIndex5;
  var filterMap5 = function(f) {
    return (0, exports.filterMapWithIndex)(function(_2, a) {
      return f(a);
    });
  };
  exports.filterMap = filterMap5;
  exports.compact = (0, exports.filterMap)(function_1.identity);
  var partition5 = function(predicate) {
    return (0, exports.partitionWithIndex)(function(_2, a) {
      return predicate(a);
    });
  };
  exports.partition = partition5;
  var partitionWithIndex5 = function(predicateWithIndex) {
    return function(as4) {
      var left = [];
      var right = [];
      for (var i = 0;i < as4.length; i++) {
        var a = as4[i];
        if (predicateWithIndex(i, a)) {
          right.push(a);
        } else {
          left.push(a);
        }
      }
      return (0, Separated_1.separated)(left, right);
    };
  };
  exports.partitionWithIndex = partitionWithIndex5;
  var partitionMap5 = function(f) {
    return (0, exports.partitionMapWithIndex)(function(_2, a) {
      return f(a);
    });
  };
  exports.partitionMap = partitionMap5;
  var partitionMapWithIndex5 = function(f) {
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
      return (0, Separated_1.separated)(left, right);
    };
  };
  exports.partitionMapWithIndex = partitionMapWithIndex5;
  var filterWithIndex6 = function(predicateWithIndex) {
    return function(as4) {
      return as4.filter(function(a, i) {
        return predicateWithIndex(i, a);
      });
    };
  };
  exports.filterWithIndex = filterWithIndex6;
  var extend4 = function(f) {
    return function(wa) {
      return wa.map(function(_2, i) {
        return f(wa.slice(i));
      });
    };
  };
  exports.extend = extend4;
  exports.duplicate = (0, exports.extend)(function_1.identity);
  var foldMapWithIndex8 = function(M) {
    return function(f) {
      return function(fa) {
        return fa.reduce(function(b, a, i) {
          return M.concat(b, f(i, a));
        }, M.empty);
      };
    };
  };
  exports.foldMapWithIndex = foldMapWithIndex8;
  var reduce8 = function(b, f) {
    return (0, exports.reduceWithIndex)(b, function(_2, b2, a) {
      return f(b2, a);
    });
  };
  exports.reduce = reduce8;
  var foldMap8 = function(M) {
    var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
    return function(f) {
      return foldMapWithIndexM(function(_2, a) {
        return f(a);
      });
    };
  };
  exports.foldMap = foldMap8;
  var reduceWithIndex8 = function(b, f) {
    return function(fa) {
      var len = fa.length;
      var out = b;
      for (var i = 0;i < len; i++) {
        out = f(i, out, fa[i]);
      }
      return out;
    };
  };
  exports.reduceWithIndex = reduceWithIndex8;
  var reduceRight8 = function(b, f) {
    return (0, exports.reduceRightWithIndex)(b, function(_2, a, b2) {
      return f(a, b2);
    });
  };
  exports.reduceRight = reduceRight8;
  var reduceRightWithIndex8 = function(b, f) {
    return function(fa) {
      return fa.reduceRight(function(b2, a, i) {
        return f(i, a, b2);
      }, b);
    };
  };
  exports.reduceRightWithIndex = reduceRightWithIndex8;
  var traverse6 = function(F) {
    var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
    return function(f) {
      return traverseWithIndexF(function(_2, a) {
        return f(a);
      });
    };
  };
  exports.traverse = traverse6;
  var sequence6 = function(F) {
    return function(ta) {
      return _reduce6(ta, F.of((0, exports.zero)()), function(fas, fa) {
        return F.ap(F.map(fas, function(as4) {
          return function(a) {
            return (0, function_1.pipe)(as4, (0, exports.append)(a));
          };
        }), fa);
      });
    };
  };
  exports.sequence = sequence6;
  var traverseWithIndex6 = function(F) {
    return function(f) {
      return (0, exports.reduceWithIndex)(F.of((0, exports.zero)()), function(i, fbs, a) {
        return F.ap(F.map(fbs, function(bs) {
          return function(b) {
            return (0, function_1.pipe)(bs, (0, exports.append)(b));
          };
        }), f(i, a));
      });
    };
  };
  exports.traverseWithIndex = traverseWithIndex6;
  var wither4 = function(F) {
    var _witherF = _wither4(F);
    return function(f) {
      return function(fa) {
        return _witherF(fa, f);
      };
    };
  };
  exports.wither = wither4;
  var wilt4 = function(F) {
    var _wiltF = _wilt4(F);
    return function(f) {
      return function(fa) {
        return _wiltF(fa, f);
      };
    };
  };
  exports.wilt = wilt4;
  var unfold3 = function(b, f) {
    var out = [];
    var bb = b;
    while (true) {
      var mt = f(bb);
      if (_.isSome(mt)) {
        var _a = mt.value, a = _a[0], b_1 = _a[1];
        out.push(a);
        bb = b_1;
      } else {
        break;
      }
    }
    return out;
  };
  exports.unfold = unfold3;
  exports.URI = "ReadonlyArray";
  var getShow8 = function(S) {
    return {
      show: function(as4) {
        return "[".concat(as4.map(S.show).join(", "), "]");
      }
    };
  };
  exports.getShow = getShow8;
  var getSemigroup9 = function() {
    return {
      concat: function(first2, second) {
        return (0, exports.isEmpty)(first2) ? second : (0, exports.isEmpty)(second) ? first2 : first2.concat(second);
      }
    };
  };
  exports.getSemigroup = getSemigroup9;
  var getMonoid11 = function() {
    return {
      concat: (0, exports.getSemigroup)().concat,
      empty: exports.empty
    };
  };
  exports.getMonoid = getMonoid11;
  var getEq8 = function(E) {
    return (0, Eq_1.fromEquals)(function(xs, ys) {
      return xs.length === ys.length && xs.every(function(x, i) {
        return E.equals(x, ys[i]);
      });
    });
  };
  exports.getEq = getEq8;
  var getOrd3 = function(O) {
    return (0, Ord_1.fromCompare)(function(a, b) {
      var aLen = a.length;
      var bLen = b.length;
      var len = Math.min(aLen, bLen);
      for (var i = 0;i < len; i++) {
        var ordering = O.compare(a[i], b[i]);
        if (ordering !== 0) {
          return ordering;
        }
      }
      return N.Ord.compare(aLen, bLen);
    });
  };
  exports.getOrd = getOrd3;
  var getUnionSemigroup5 = function(E) {
    var unionE = union8(E);
    return {
      concat: function(first2, second) {
        return unionE(second)(first2);
      }
    };
  };
  exports.getUnionSemigroup = getUnionSemigroup5;
  var getUnionMonoid4 = function(E) {
    return {
      concat: (0, exports.getUnionSemigroup)(E).concat,
      empty: exports.empty
    };
  };
  exports.getUnionMonoid = getUnionMonoid4;
  var getIntersectionSemigroup4 = function(E) {
    var intersectionE = intersection6(E);
    return {
      concat: function(first2, second) {
        return intersectionE(second)(first2);
      }
    };
  };
  exports.getIntersectionSemigroup = getIntersectionSemigroup4;
  var getDifferenceMagma4 = function(E) {
    var differenceE = difference6(E);
    return {
      concat: function(first2, second) {
        return differenceE(second)(first2);
      }
    };
  };
  exports.getDifferenceMagma = getDifferenceMagma4;
  exports.Functor = {
    URI: exports.URI,
    map: _map8
  };
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.Pointed = {
    URI: exports.URI,
    of: exports.of
  };
  exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map8,
    mapWithIndex: _mapWithIndex6
  };
  exports.Apply = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5
  };
  exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
  exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
  exports.Applicative = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of
  };
  exports.Chain = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    chain: exports.flatMap
  };
  exports.Monad = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    chain: exports.flatMap
  };
  exports.chainFirst = (0, Chain_1.chainFirst)(exports.Chain);
  exports.Unfoldable = {
    URI: exports.URI,
    unfold: exports.unfold
  };
  exports.Alt = {
    URI: exports.URI,
    map: _map8,
    alt: _alt4
  };
  exports.Zero = {
    URI: exports.URI,
    zero: exports.zero
  };
  exports.guard = (0, Zero_1.guard)(exports.Zero, exports.Pointed);
  exports.Alternative = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    alt: _alt4,
    zero: exports.zero
  };
  exports.Extend = {
    URI: exports.URI,
    map: _map8,
    extend: _extend4
  };
  exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
  };
  exports.Filterable = {
    URI: exports.URI,
    map: _map8,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter5,
    filterMap: _filterMap5,
    partition: _partition5,
    partitionMap: _partitionMap5
  };
  exports.FilterableWithIndex = {
    URI: exports.URI,
    map: _map8,
    mapWithIndex: _mapWithIndex6,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter5,
    filterMap: _filterMap5,
    partition: _partition5,
    partitionMap: _partitionMap5,
    partitionMapWithIndex: _partitionMapWithIndex5,
    partitionWithIndex: _partitionWithIndex5,
    filterMapWithIndex: _filterMapWithIndex5,
    filterWithIndex: _filterWithIndex5
  };
  exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6
  };
  exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    reduceWithIndex: _reduceWithIndex6,
    foldMapWithIndex: _foldMapWithIndex6,
    reduceRightWithIndex: _reduceRightWithIndex6
  };
  exports.Traversable = {
    URI: exports.URI,
    map: _map8,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence
  };
  exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map8,
    mapWithIndex: _mapWithIndex6,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    reduceWithIndex: _reduceWithIndex6,
    foldMapWithIndex: _foldMapWithIndex6,
    reduceRightWithIndex: _reduceRightWithIndex6,
    traverse: _traverse6,
    sequence: exports.sequence,
    traverseWithIndex: _traverseWithIndex6
  };
  var chainRecDepthFirst3 = function(f) {
    return function(a) {
      var todo = __spreadArray6([], f(a), true);
      var out = [];
      while (todo.length > 0) {
        var e = todo.shift();
        if (_.isLeft(e)) {
          todo.unshift.apply(todo, f(e.left));
        } else {
          out.push(e.right);
        }
      }
      return out;
    };
  };
  exports.chainRecDepthFirst = chainRecDepthFirst3;
  exports.ChainRecDepthFirst = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    chain: exports.flatMap,
    chainRec: exports._chainRecDepthFirst
  };
  var chainRecBreadthFirst3 = function(f) {
    return function(a) {
      var initial = f(a);
      var todo = [];
      var out = [];
      function go(e2) {
        if (_.isLeft(e2)) {
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
  exports.chainRecBreadthFirst = chainRecBreadthFirst3;
  exports.ChainRecBreadthFirst = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    chain: exports.flatMap,
    chainRec: exports._chainRecBreadthFirst
  };
  var _wither4 = (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
  var _wilt4 = (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
  exports.Witherable = {
    URI: exports.URI,
    map: _map8,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter5,
    filterMap: _filterMap5,
    partition: _partition5,
    partitionMap: _partitionMap5,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence,
    wither: _wither4,
    wilt: _wilt4
  };
  exports.filterE = (0, Witherable_1.filterE)(exports.Witherable);
  exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
  };
  exports.fromEitherK = (0, FromEither_1.fromEitherK)(exports.FromEither);
  exports.unsafeInsertAt = RNEA.unsafeInsertAt;
  var unsafeUpdateAt5 = function(i, a, as4) {
    return (0, exports.isNonEmpty)(as4) ? RNEA.unsafeUpdateAt(i, a, as4) : as4;
  };
  exports.unsafeUpdateAt = unsafeUpdateAt5;
  var unsafeDeleteAt3 = function(i, as4) {
    var xs = as4.slice();
    xs.splice(i, 1);
    return xs;
  };
  exports.unsafeDeleteAt = unsafeDeleteAt3;
  var toArray3 = function(as4) {
    return as4.slice();
  };
  exports.toArray = toArray3;
  var fromArray3 = function(as4) {
    return (0, exports.isEmpty)(as4) ? exports.empty : as4.slice();
  };
  exports.fromArray = fromArray3;
  exports.empty = RNEA.empty;
  exports.every = every5;
  var some7 = function(predicate) {
    return function(as4) {
      return as4.some(predicate);
    };
  };
  exports.some = some7;
  exports.exists = exports.some;
  var intercalate5 = function(M) {
    var intercalateM = RNEA.intercalate(M);
    return function(middle) {
      return (0, exports.match)(function() {
        return M.empty;
      }, intercalateM(middle));
    };
  };
  exports.intercalate = intercalate5;
  exports.Do = (0, exports.of)(_.emptyRecord);
  exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
  var let_7 = (0, Functor_1.let)(exports.Functor);
  exports.let = let_7;
  exports.bind = (0, Chain_1.bind)(exports.Chain);
  exports.apS = (0, Apply_1.apS)(exports.Apply);
  exports.chain = exports.flatMap;
  exports.range = RNEA.range;
  exports.cons = RNEA.cons;
  exports.snoc = RNEA.snoc;
  exports.prependToAll = exports.prependAll;
  exports.readonlyArray = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    chain: exports.flatMap,
    filter: _filter5,
    filterMap: _filterMap5,
    partition: _partition5,
    partitionMap: _partitionMap5,
    mapWithIndex: _mapWithIndex6,
    partitionMapWithIndex: _partitionMapWithIndex5,
    partitionWithIndex: _partitionWithIndex5,
    filterMapWithIndex: _filterMapWithIndex5,
    filterWithIndex: _filterWithIndex5,
    alt: _alt4,
    zero: exports.zero,
    unfold: exports.unfold,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex6,
    foldMapWithIndex: _foldMapWithIndex6,
    reduceRightWithIndex: _reduceRightWithIndex6,
    traverseWithIndex: _traverseWithIndex6,
    extend: _extend4,
    wither: _wither4,
    wilt: _wilt4
  };
});

// node_modules/fp-ts/lib/string.js
var require_string = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.endsWith = exports.startsWith = exports.includes = exports.split = exports.size = exports.isEmpty = exports.slice = exports.trimRight = exports.trimLeft = exports.trim = exports.replace = exports.toLowerCase = exports.toUpperCase = exports.isString = exports.Show = exports.Ord = exports.Monoid = exports.empty = exports.Semigroup = exports.Eq = undefined;
  var ReadonlyNonEmptyArray_1 = require_ReadonlyNonEmptyArray();
  exports.Eq = {
    equals: function(first2, second) {
      return first2 === second;
    }
  };
  exports.Semigroup = {
    concat: function(first2, second) {
      return first2 + second;
    }
  };
  exports.empty = "";
  exports.Monoid = {
    concat: exports.Semigroup.concat,
    empty: exports.empty
  };
  exports.Ord = {
    equals: exports.Eq.equals,
    compare: function(first2, second) {
      return first2 < second ? -1 : first2 > second ? 1 : 0;
    }
  };
  exports.Show = {
    show: function(s) {
      return JSON.stringify(s);
    }
  };
  var isString2 = function(u) {
    return typeof u === "string";
  };
  exports.isString = isString2;
  var toUpperCase2 = function(s) {
    return s.toUpperCase();
  };
  exports.toUpperCase = toUpperCase2;
  var toLowerCase2 = function(s) {
    return s.toLowerCase();
  };
  exports.toLowerCase = toLowerCase2;
  var replace2 = function(searchValue, replaceValue) {
    return function(s) {
      return s.replace(searchValue, replaceValue);
    };
  };
  exports.replace = replace2;
  var trim2 = function(s) {
    return s.trim();
  };
  exports.trim = trim2;
  var trimLeft2 = function(s) {
    return s.trimLeft();
  };
  exports.trimLeft = trimLeft2;
  var trimRight2 = function(s) {
    return s.trimRight();
  };
  exports.trimRight = trimRight2;
  var slice2 = function(start, end) {
    return function(s) {
      return s.slice(start, end);
    };
  };
  exports.slice = slice2;
  var isEmpty7 = function(s) {
    return s.length === 0;
  };
  exports.isEmpty = isEmpty7;
  var size7 = function(s) {
    return s.length;
  };
  exports.size = size7;
  var split2 = function(separator) {
    return function(s) {
      var out = s.split(separator);
      return (0, ReadonlyNonEmptyArray_1.isNonEmpty)(out) ? out : [s];
    };
  };
  exports.split = split2;
  var includes2 = function(searchString, position) {
    return function(s) {
      return s.includes(searchString, position);
    };
  };
  exports.includes = includes2;
  var startsWith2 = function(searchString, position) {
    return function(s) {
      return s.startsWith(searchString, position);
    };
  };
  exports.startsWith = startsWith2;
  var endsWith2 = function(searchString, position) {
    return function(s) {
      return s.endsWith(searchString, position);
    };
  };
  exports.endsWith = endsWith2;
});

// node_modules/fp-ts/lib/ReadonlyRecord.js
var require_ReadonlyRecord = __commonJS((exports) => {
  var collect3 = function(O) {
    if (typeof O === "function") {
      return collect3(S.Ord)(O);
    }
    var keysO = keys_3(O);
    return function(f) {
      return function(r) {
        var out = [];
        for (var _i = 0, _a = keysO(r);_i < _a.length; _i++) {
          var key = _a[_i];
          out.push(f(key, r[key]));
        }
        return out;
      };
    };
  };
  var toUnfoldable2 = function(U) {
    return function(r) {
      var sas = (0, exports.toReadonlyArray)(r);
      var len = sas.length;
      return U.unfold(0, function(b) {
        return b < len ? _.some([sas[b], b + 1]) : _.none;
      });
    };
  };
  var deleteAt4 = function(k) {
    return function(r) {
      if (!_.has.call(r, k)) {
        return r;
      }
      var out = Object.assign({}, r);
      delete out[k];
      return out;
    };
  };
  var pop2 = function(k) {
    var deleteAtk = deleteAt4(k);
    return function(r) {
      var oa = lookup7(k, r);
      return _.isNone(oa) ? _.none : _.some([oa.value, deleteAtk(r)]);
    };
  };
  var isSubrecord3 = function(E) {
    return function(me, that) {
      if (that === undefined) {
        var isSubrecordE_1 = isSubrecord3(E);
        return function(that2) {
          return isSubrecordE_1(that2, me);
        };
      }
      for (var k in me) {
        if (!_.has.call(that, k) || !E.equals(me[k], that[k])) {
          return false;
        }
      }
      return true;
    };
  };
  var lookup7 = function(k, r) {
    if (r === undefined) {
      return function(r2) {
        return lookup7(k, r2);
      };
    }
    return _.has.call(r, k) ? _.some(r[k]) : _.none;
  };
  var mapWithIndex6 = function(f) {
    return function(r) {
      var out = {};
      for (var k in r) {
        if (_.has.call(r, k)) {
          out[k] = f(k, r[k]);
        }
      }
      return out;
    };
  };
  var map9 = function(f) {
    return mapWithIndex6(function(_2, a) {
      return f(a);
    });
  };
  var reduceWithIndex8 = function() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length === 2) {
      return reduceWithIndex8(S.Ord).apply(undefined, args);
    }
    var keysO = keys_3(args[0]);
    return function(b, f) {
      return function(fa) {
        var out = b;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = 0;i < len; i++) {
          var k = ks[i];
          out = f(k, out, fa[k]);
        }
        return out;
      };
    };
  };
  var foldMapWithIndex8 = function(O) {
    if ("compare" in O) {
      var keysO_1 = keys_3(O);
      return function(M) {
        return function(f) {
          return function(fa) {
            var out = M.empty;
            var ks = keysO_1(fa);
            var len = ks.length;
            for (var i = 0;i < len; i++) {
              var k = ks[i];
              out = M.concat(out, f(k, fa[k]));
            }
            return out;
          };
        };
      };
    }
    return foldMapWithIndex8(S.Ord)(O);
  };
  var reduceRightWithIndex8 = function() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length === 2) {
      return reduceRightWithIndex8(S.Ord).apply(undefined, args);
    }
    var keysO = keys_3(args[0]);
    return function(b, f) {
      return function(fa) {
        var out = b;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = len - 1;i >= 0; i--) {
          var k = ks[i];
          out = f(k, fa[k], out);
        }
        return out;
      };
    };
  };
  var traverseWithIndex6 = function(F) {
    var traverseWithIndexOF = _traverseWithIndex6(S.Ord)(F);
    return function(f) {
      return function(ta) {
        return traverseWithIndexOF(ta, f);
      };
    };
  };
  var traverse6 = function(F) {
    var traverseOF = (0, exports._traverse)(S.Ord)(F);
    return function(f) {
      return function(ta) {
        return traverseOF(ta, f);
      };
    };
  };
  var sequence6 = function(F) {
    return (0, exports._sequence)(S.Ord)(F);
  };
  var partitionMapWithIndex5 = function(f) {
    return function(r) {
      var left = {};
      var right = {};
      for (var k in r) {
        if (_.has.call(r, k)) {
          var e = f(k, r[k]);
          switch (e._tag) {
            case "Left":
              left[k] = e.left;
              break;
            case "Right":
              right[k] = e.right;
              break;
          }
        }
      }
      return (0, Separated_1.separated)(left, right);
    };
  };
  var partitionWithIndex5 = function(predicateWithIndex) {
    return function(r) {
      var left = {};
      var right = {};
      for (var k in r) {
        if (_.has.call(r, k)) {
          var a = r[k];
          if (predicateWithIndex(k, a)) {
            right[k] = a;
          } else {
            left[k] = a;
          }
        }
      }
      return (0, Separated_1.separated)(left, right);
    };
  };
  var filterMapWithIndex5 = function(f) {
    return function(r) {
      var out = {};
      for (var k in r) {
        if (_.has.call(r, k)) {
          var ob = f(k, r[k]);
          if (_.isSome(ob)) {
            out[k] = ob.value;
          }
        }
      }
      return out;
    };
  };
  var filterWithIndex6 = function(predicateWithIndex) {
    return function(fa) {
      var out = {};
      var changed = false;
      for (var key in fa) {
        if (_.has.call(fa, key)) {
          var a = fa[key];
          if (predicateWithIndex(key, a)) {
            out[key] = a;
          } else {
            changed = true;
          }
        }
      }
      return changed ? out : fa;
    };
  };
  var fromFoldable3 = function(M, F) {
    var fromFoldableMapM = fromFoldableMap3(M, F);
    return function(fka) {
      return fromFoldableMapM(fka, function_1.identity);
    };
  };
  var fromFoldableMap3 = function(M, F) {
    return function(ta, f) {
      return F.reduce(ta, {}, function(r, a) {
        var _a = f(a), k = _a[0], b = _a[1];
        r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b;
        return r;
      });
    };
  };
  var every5 = function(predicate) {
    return function(r) {
      for (var k in r) {
        if (!predicate(r[k])) {
          return false;
        }
      }
      return true;
    };
  };
  var some7 = function(predicate) {
    return function(r) {
      for (var k in r) {
        if (predicate(r[k])) {
          return true;
        }
      }
      return false;
    };
  };
  var elem6 = function(E) {
    return function(a, fa) {
      if (fa === undefined) {
        var elemE_1 = elem6(E);
        return function(fa2) {
          return elemE_1(a, fa2);
        };
      }
      for (var k in fa) {
        if (E.equals(fa[k], a)) {
          return true;
        }
      }
      return false;
    };
  };
  var reduce8 = function() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length === 1) {
      var reduceWithIndexO_1 = reduceWithIndex8(args[0]);
      return function(b, f) {
        return reduceWithIndexO_1(b, function(_2, b2, a) {
          return f(b2, a);
        });
      };
    }
    return reduce8(S.Ord).apply(undefined, args);
  };
  var foldMap8 = function(O) {
    if ("compare" in O) {
      var foldMapWithIndexO_1 = foldMapWithIndex8(O);
      return function(M) {
        var foldMapWithIndexM = foldMapWithIndexO_1(M);
        return function(f) {
          return foldMapWithIndexM(function(_2, a) {
            return f(a);
          });
        };
      };
    }
    return foldMap8(S.Ord)(O);
  };
  var reduceRight8 = function() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length === 1) {
      var reduceRightWithIndexO_1 = reduceRightWithIndex8(args[0]);
      return function(b, f) {
        return reduceRightWithIndexO_1(b, function(_2, b2, a) {
          return f(b2, a);
        });
      };
    }
    return reduceRight8(S.Ord).apply(undefined, args);
  };
  var getShow8 = function(O) {
    if ("compare" in O) {
      return function(S2) {
        return {
          show: function(r) {
            var elements = collect3(O)(function(k, a) {
              return "".concat(JSON.stringify(k), ": ").concat(S2.show(a));
            })(r).join(", ");
            return elements === "" ? "{}" : "{ ".concat(elements, " }");
          }
        };
      };
    }
    return getShow8(S.Ord)(O);
  };
  var getEq8 = function(E) {
    var isSubrecordE = isSubrecord3(E);
    return (0, Eq_1.fromEquals)(function(x, y) {
      return isSubrecordE(x)(y) && isSubrecordE(y)(x);
    });
  };
  var getMonoid11 = function(S2) {
    return {
      concat: function(first2, second) {
        if ((0, exports.isEmpty)(first2)) {
          return second;
        }
        if ((0, exports.isEmpty)(second)) {
          return first2;
        }
        var r = Object.assign({}, first2);
        for (var k in second) {
          if (_.has.call(second, k)) {
            r[k] = _.has.call(first2, k) ? S2.concat(first2[k], second[k]) : second[k];
          }
        }
        return r;
      },
      empty: exports.empty
    };
  };
  var hasOwnProperty3 = function(k, r) {
    return _.has.call(r === undefined ? this : r, k);
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
  exports._partition = exports._filterMap = exports._filter = exports._reduceRight = exports._foldMap = exports._reduce = exports._mapWithIndex = exports._map = exports.difference = exports.intersection = exports.union = exports.elem = exports.some = exports.every = exports.fromEntries = exports.toEntries = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.toRecord = exports.fromRecord = undefined;
  exports.readonlyRecord = exports.hasOwnProperty = exports.insertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.getDifferenceMagma = exports.getIntersectionSemigroup = exports.getUnionMonoid = exports.getUnionSemigroup = exports.getWitherable = exports.getTraversableWithIndex = exports.getTraversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.getFoldableWithIndex = exports.getFoldable = exports.FunctorWithIndex = exports.flap = exports.Functor = exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports._sequence = exports._traverse = exports._filterWithIndex = exports._filterMapWithIndex = exports._partitionWithIndex = exports._partitionMapWithIndex = exports._reduceRightWithIndex = exports._foldMapWithIndex = exports._reduceWithIndex = exports._partitionMap = undefined;
  var Eq_1 = require_Eq();
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  var _ = __importStar(require_internal());
  var Separated_1 = require_Separated();
  var S = __importStar(require_string());
  var Witherable_1 = require_Witherable();
  var fromRecord = function(r) {
    return Object.assign({}, r);
  };
  exports.fromRecord = fromRecord;
  var toRecord = function(r) {
    return Object.assign({}, r);
  };
  exports.toRecord = toRecord;
  var size7 = function(r) {
    return Object.keys(r).length;
  };
  exports.size = size7;
  var isEmpty7 = function(r) {
    for (var k in r) {
      if (_.has.call(r, k)) {
        return false;
      }
    }
    return true;
  };
  exports.isEmpty = isEmpty7;
  var keys_3 = function(O) {
    return function(r) {
      return Object.keys(r).sort(O.compare);
    };
  };
  exports.keys = keys_3(S.Ord);
  exports.collect = collect3;
  exports.toReadonlyArray = collect3(S.Ord)(function(k, a) {
    return [k, a];
  });
  exports.toUnfoldable = toUnfoldable2;
  var upsertAt3 = function(k, a) {
    return function(r) {
      if (_.has.call(r, k) && r[k] === a) {
        return r;
      }
      var out = Object.assign({}, r);
      out[k] = a;
      return out;
    };
  };
  exports.upsertAt = upsertAt3;
  var has4 = function(k, r) {
    return _.has.call(r, k);
  };
  exports.has = has4;
  exports.deleteAt = deleteAt4;
  var updateAt5 = function(k, a) {
    return function(r) {
      if (!(0, exports.has)(k, r)) {
        return _.none;
      }
      if (r[k] === a) {
        return _.some(r);
      }
      var out = Object.assign({}, r);
      out[k] = a;
      return _.some(out);
    };
  };
  exports.updateAt = updateAt5;
  var modifyAt5 = function(k, f) {
    return function(r) {
      if (!(0, exports.has)(k, r)) {
        return _.none;
      }
      var next = f(r[k]);
      if (next === r[k]) {
        return _.some(r);
      }
      var out = Object.assign({}, r);
      out[k] = next;
      return _.some(out);
    };
  };
  exports.modifyAt = modifyAt5;
  exports.pop = pop2;
  exports.isSubrecord = isSubrecord3;
  exports.lookup = lookup7;
  exports.empty = {};
  exports.mapWithIndex = mapWithIndex6;
  exports.map = map9;
  exports.reduceWithIndex = reduceWithIndex8;
  exports.foldMapWithIndex = foldMapWithIndex8;
  exports.reduceRightWithIndex = reduceRightWithIndex8;
  var singleton4 = function(k, a) {
    var _a;
    return _a = {}, _a[k] = a, _a;
  };
  exports.singleton = singleton4;
  exports.traverseWithIndex = traverseWithIndex6;
  exports.traverse = traverse6;
  exports.sequence = sequence6;
  var wither4 = function(F) {
    var traverseF = traverse6(F);
    return function(f) {
      return function(fa) {
        return F.map((0, function_1.pipe)(fa, traverseF(f)), exports.compact);
      };
    };
  };
  exports.wither = wither4;
  var wilt4 = function(F) {
    var traverseF = traverse6(F);
    return function(f) {
      return function(fa) {
        return F.map((0, function_1.pipe)(fa, traverseF(f)), exports.separate);
      };
    };
  };
  exports.wilt = wilt4;
  exports.partitionMapWithIndex = partitionMapWithIndex5;
  exports.partitionWithIndex = partitionWithIndex5;
  exports.filterMapWithIndex = filterMapWithIndex5;
  exports.filterWithIndex = filterWithIndex6;
  exports.fromFoldable = fromFoldable3;
  exports.fromFoldableMap = fromFoldableMap3;
  exports.toEntries = exports.toReadonlyArray;
  var fromEntries2 = function(fa) {
    var out = {};
    for (var _i = 0, fa_1 = fa;_i < fa_1.length; _i++) {
      var a = fa_1[_i];
      out[a[0]] = a[1];
    }
    return out;
  };
  exports.fromEntries = fromEntries2;
  exports.every = every5;
  exports.some = some7;
  exports.elem = elem6;
  var union8 = function(M) {
    return function(second) {
      return function(first2) {
        if ((0, exports.isEmpty)(first2)) {
          return second;
        }
        if ((0, exports.isEmpty)(second)) {
          return first2;
        }
        var out = {};
        for (var k in first2) {
          if ((0, exports.has)(k, second)) {
            out[k] = M.concat(first2[k], second[k]);
          } else {
            out[k] = first2[k];
          }
        }
        for (var k in second) {
          if (!(0, exports.has)(k, out)) {
            out[k] = second[k];
          }
        }
        return out;
      };
    };
  };
  exports.union = union8;
  var intersection6 = function(M) {
    return function(second) {
      return function(first2) {
        if ((0, exports.isEmpty)(first2) || (0, exports.isEmpty)(second)) {
          return exports.empty;
        }
        var out = {};
        for (var k in first2) {
          if ((0, exports.has)(k, second)) {
            out[k] = M.concat(first2[k], second[k]);
          }
        }
        return out;
      };
    };
  };
  exports.intersection = intersection6;
  var difference6 = function(second) {
    return function(first2) {
      if ((0, exports.isEmpty)(first2)) {
        return second;
      }
      if ((0, exports.isEmpty)(second)) {
        return first2;
      }
      var out = {};
      for (var k in first2) {
        if (!(0, exports.has)(k, second)) {
          out[k] = first2[k];
        }
      }
      for (var k in second) {
        if (!(0, exports.has)(k, first2)) {
          out[k] = second[k];
        }
      }
      return out;
    };
  };
  exports.difference = difference6;
  var _map8 = function(fa, f) {
    return (0, function_1.pipe)(fa, map9(f));
  };
  exports._map = _map8;
  var _mapWithIndex6 = function(fa, f) {
    return (0, function_1.pipe)(fa, mapWithIndex6(f));
  };
  exports._mapWithIndex = _mapWithIndex6;
  var _reduce6 = function(O) {
    var reduceO = reduce8(O);
    return function(fa, b, f) {
      return (0, function_1.pipe)(fa, reduceO(b, f));
    };
  };
  exports._reduce = _reduce6;
  var _foldMap6 = function(O) {
    return function(M) {
      var foldMapM = foldMap8(O)(M);
      return function(fa, f) {
        return (0, function_1.pipe)(fa, foldMapM(f));
      };
    };
  };
  exports._foldMap = _foldMap6;
  var _reduceRight6 = function(O) {
    var reduceRightO = reduceRight8(O);
    return function(fa, b, f) {
      return (0, function_1.pipe)(fa, reduceRightO(b, f));
    };
  };
  exports._reduceRight = _reduceRight6;
  var _filter5 = function(fa, predicate) {
    return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
  };
  exports._filter = _filter5;
  var _filterMap5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.filterMap)(f));
  };
  exports._filterMap = _filterMap5;
  var _partition5 = function(fa, predicate) {
    return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
  };
  exports._partition = _partition5;
  var _partitionMap5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f));
  };
  exports._partitionMap = _partitionMap5;
  var _reduceWithIndex6 = function(O) {
    var reduceWithIndexO = reduceWithIndex8(O);
    return function(fa, b, f) {
      return (0, function_1.pipe)(fa, reduceWithIndexO(b, f));
    };
  };
  exports._reduceWithIndex = _reduceWithIndex6;
  var _foldMapWithIndex6 = function(O) {
    var foldMapWithIndexO = foldMapWithIndex8(O);
    return function(M) {
      var foldMapWithIndexM = foldMapWithIndexO(M);
      return function(fa, f) {
        return (0, function_1.pipe)(fa, foldMapWithIndexM(f));
      };
    };
  };
  exports._foldMapWithIndex = _foldMapWithIndex6;
  var _reduceRightWithIndex6 = function(O) {
    var reduceRightWithIndexO = reduceRightWithIndex8(O);
    return function(fa, b, f) {
      return (0, function_1.pipe)(fa, reduceRightWithIndexO(b, f));
    };
  };
  exports._reduceRightWithIndex = _reduceRightWithIndex6;
  var _partitionMapWithIndex5 = function(fa, f) {
    return (0, function_1.pipe)(fa, partitionMapWithIndex5(f));
  };
  exports._partitionMapWithIndex = _partitionMapWithIndex5;
  var _partitionWithIndex5 = function(fa, predicateWithIndex) {
    return (0, function_1.pipe)(fa, partitionWithIndex5(predicateWithIndex));
  };
  exports._partitionWithIndex = _partitionWithIndex5;
  var _filterMapWithIndex5 = function(fa, f) {
    return (0, function_1.pipe)(fa, filterMapWithIndex5(f));
  };
  exports._filterMapWithIndex = _filterMapWithIndex5;
  var _filterWithIndex5 = function(fa, predicateWithIndex) {
    return (0, function_1.pipe)(fa, filterWithIndex6(predicateWithIndex));
  };
  exports._filterWithIndex = _filterWithIndex5;
  var _traverse6 = function(O) {
    var traverseWithIndexO = _traverseWithIndex6(O);
    return function(F) {
      var traverseWithIndexOF = traverseWithIndexO(F);
      return function(ta, f) {
        return traverseWithIndexOF(ta, (0, function_1.flow)(function_1.SK, f));
      };
    };
  };
  exports._traverse = _traverse6;
  var _sequence3 = function(O) {
    var traverseO = (0, exports._traverse)(O);
    return function(F) {
      var traverseOF = traverseO(F);
      return function(ta) {
        return traverseOF(ta, function_1.identity);
      };
    };
  };
  exports._sequence = _sequence3;
  var _traverseWithIndex6 = function(O) {
    return function(F) {
      var keysO = keys_3(O);
      return function(ta, f) {
        var ks = keysO(ta);
        if (ks.length === 0) {
          return F.of(exports.empty);
        }
        var fr = F.of({});
        var _loop_1 = function(key2) {
          fr = F.ap(F.map(fr, function(r) {
            return function(b) {
              var _a;
              return Object.assign({}, r, (_a = {}, _a[key2] = b, _a));
            };
          }), f(key2, ta[key2]));
        };
        for (var _i = 0, ks_1 = ks;_i < ks_1.length; _i++) {
          var key = ks_1[_i];
          _loop_1(key);
        }
        return fr;
      };
    };
  };
  var filter6 = function(predicate) {
    return filterWithIndex6(function(_2, a) {
      return predicate(a);
    });
  };
  exports.filter = filter6;
  var filterMap5 = function(f) {
    return filterMapWithIndex5(function(_2, a) {
      return f(a);
    });
  };
  exports.filterMap = filterMap5;
  var partition5 = function(predicate) {
    return partitionWithIndex5(function(_2, a) {
      return predicate(a);
    });
  };
  exports.partition = partition5;
  var partitionMap5 = function(f) {
    return partitionMapWithIndex5(function(_2, a) {
      return f(a);
    });
  };
  exports.partitionMap = partitionMap5;
  exports.reduce = reduce8;
  exports.foldMap = foldMap8;
  exports.reduceRight = reduceRight8;
  var compact5 = function(r) {
    var out = {};
    for (var k in r) {
      if (_.has.call(r, k)) {
        var oa = r[k];
        if (_.isSome(oa)) {
          out[k] = oa.value;
        }
      }
    }
    return out;
  };
  exports.compact = compact5;
  var separate5 = function(r) {
    var left = {};
    var right = {};
    for (var k in r) {
      if (_.has.call(r, k)) {
        var e = r[k];
        if (_.isLeft(e)) {
          left[k] = e.left;
        } else {
          right[k] = e.right;
        }
      }
    }
    return (0, Separated_1.separated)(left, right);
  };
  exports.separate = separate5;
  exports.URI = "ReadonlyRecord";
  exports.getShow = getShow8;
  exports.getEq = getEq8;
  exports.getMonoid = getMonoid11;
  exports.Functor = {
    URI: exports.URI,
    map: exports._map
  };
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.FunctorWithIndex = {
    URI: exports.URI,
    map: exports._map,
    mapWithIndex: exports._mapWithIndex
  };
  var getFoldable3 = function(O) {
    return {
      URI: exports.URI,
      reduce: (0, exports._reduce)(O),
      foldMap: (0, exports._foldMap)(O),
      reduceRight: (0, exports._reduceRight)(O)
    };
  };
  exports.getFoldable = getFoldable3;
  var getFoldableWithIndex3 = function(O) {
    return {
      URI: exports.URI,
      reduce: (0, exports._reduce)(O),
      foldMap: (0, exports._foldMap)(O),
      reduceRight: (0, exports._reduceRight)(O),
      reduceWithIndex: (0, exports._reduceWithIndex)(O),
      foldMapWithIndex: (0, exports._foldMapWithIndex)(O),
      reduceRightWithIndex: (0, exports._reduceRightWithIndex)(O)
    };
  };
  exports.getFoldableWithIndex = getFoldableWithIndex3;
  exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
  };
  exports.Filterable = {
    URI: exports.URI,
    map: exports._map,
    compact: exports.compact,
    separate: exports.separate,
    filter: exports._filter,
    filterMap: exports._filterMap,
    partition: exports._partition,
    partitionMap: exports._partitionMap
  };
  exports.FilterableWithIndex = {
    URI: exports.URI,
    map: exports._map,
    mapWithIndex: exports._mapWithIndex,
    compact: exports.compact,
    separate: exports.separate,
    filter: exports._filter,
    filterMap: exports._filterMap,
    partition: exports._partition,
    partitionMap: exports._partitionMap,
    filterMapWithIndex: exports._filterMapWithIndex,
    filterWithIndex: exports._filterWithIndex,
    partitionMapWithIndex: exports._partitionMapWithIndex,
    partitionWithIndex: exports._partitionWithIndex
  };
  var getTraversable2 = function(O) {
    return {
      URI: exports.URI,
      map: exports._map,
      reduce: (0, exports._reduce)(O),
      foldMap: (0, exports._foldMap)(O),
      reduceRight: (0, exports._reduceRight)(O),
      traverse: (0, exports._traverse)(O),
      sequence: (0, exports._sequence)(O)
    };
  };
  exports.getTraversable = getTraversable2;
  var getTraversableWithIndex2 = function(O) {
    return {
      URI: exports.URI,
      map: exports._map,
      mapWithIndex: exports._mapWithIndex,
      reduce: (0, exports._reduce)(O),
      foldMap: (0, exports._foldMap)(O),
      reduceRight: (0, exports._reduceRight)(O),
      reduceWithIndex: (0, exports._reduceWithIndex)(O),
      foldMapWithIndex: (0, exports._foldMapWithIndex)(O),
      reduceRightWithIndex: (0, exports._reduceRightWithIndex)(O),
      traverse: (0, exports._traverse)(O),
      sequence: (0, exports._sequence)(O),
      traverseWithIndex: _traverseWithIndex6(O)
    };
  };
  exports.getTraversableWithIndex = getTraversableWithIndex2;
  var getWitherable2 = function(O) {
    var T = (0, exports.getTraversable)(O);
    return {
      URI: exports.URI,
      map: exports._map,
      reduce: (0, exports._reduce)(O),
      foldMap: (0, exports._foldMap)(O),
      reduceRight: (0, exports._reduceRight)(O),
      traverse: T.traverse,
      sequence: T.sequence,
      compact: exports.compact,
      separate: exports.separate,
      filter: exports._filter,
      filterMap: exports._filterMap,
      partition: exports._partition,
      partitionMap: exports._partitionMap,
      wither: (0, Witherable_1.witherDefault)(T, exports.Compactable),
      wilt: (0, Witherable_1.wiltDefault)(T, exports.Compactable)
    };
  };
  exports.getWitherable = getWitherable2;
  var getUnionSemigroup5 = function(S2) {
    var unionS = (0, exports.union)(S2);
    return {
      concat: function(first2, second) {
        return unionS(second)(first2);
      }
    };
  };
  exports.getUnionSemigroup = getUnionSemigroup5;
  var getUnionMonoid4 = function(S2) {
    return {
      concat: (0, exports.getUnionSemigroup)(S2).concat,
      empty: exports.empty
    };
  };
  exports.getUnionMonoid = getUnionMonoid4;
  var getIntersectionSemigroup4 = function(S2) {
    var intersectionS = (0, exports.intersection)(S2);
    return {
      concat: function(first2, second) {
        return intersectionS(second)(first2);
      }
    };
  };
  exports.getIntersectionSemigroup = getIntersectionSemigroup4;
  var getDifferenceMagma4 = function() {
    return {
      concat: function(first2, second) {
        return (0, exports.difference)(second)(first2);
      }
    };
  };
  exports.getDifferenceMagma = getDifferenceMagma4;
  exports.Foldable = {
    URI: exports.URI,
    reduce: (0, exports._reduce)(S.Ord),
    foldMap: (0, exports._foldMap)(S.Ord),
    reduceRight: (0, exports._reduceRight)(S.Ord)
  };
  exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: (0, exports._reduce)(S.Ord),
    foldMap: (0, exports._foldMap)(S.Ord),
    reduceRight: (0, exports._reduceRight)(S.Ord),
    reduceWithIndex: (0, exports._reduceWithIndex)(S.Ord),
    foldMapWithIndex: (0, exports._foldMapWithIndex)(S.Ord),
    reduceRightWithIndex: (0, exports._reduceRightWithIndex)(S.Ord)
  };
  exports.Traversable = {
    URI: exports.URI,
    map: exports._map,
    reduce: (0, exports._reduce)(S.Ord),
    foldMap: (0, exports._foldMap)(S.Ord),
    reduceRight: (0, exports._reduceRight)(S.Ord),
    traverse: (0, exports._traverse)(S.Ord),
    sequence: sequence6
  };
  exports.TraversableWithIndex = {
    URI: exports.URI,
    map: exports._map,
    mapWithIndex: exports._mapWithIndex,
    reduce: (0, exports._reduce)(S.Ord),
    foldMap: (0, exports._foldMap)(S.Ord),
    reduceRight: (0, exports._reduceRight)(S.Ord),
    reduceWithIndex: (0, exports._reduceWithIndex)(S.Ord),
    foldMapWithIndex: (0, exports._foldMapWithIndex)(S.Ord),
    reduceRightWithIndex: (0, exports._reduceRightWithIndex)(S.Ord),
    traverse: (0, exports._traverse)(S.Ord),
    sequence: sequence6,
    traverseWithIndex: _traverseWithIndex6(S.Ord)
  };
  var _wither4 = (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
  var _wilt4 = (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
  exports.Witherable = {
    URI: exports.URI,
    map: exports._map,
    reduce: (0, exports._reduce)(S.Ord),
    foldMap: (0, exports._foldMap)(S.Ord),
    reduceRight: (0, exports._reduceRight)(S.Ord),
    traverse: (0, exports._traverse)(S.Ord),
    sequence: sequence6,
    compact: exports.compact,
    separate: exports.separate,
    filter: exports._filter,
    filterMap: exports._filterMap,
    partition: exports._partition,
    partitionMap: exports._partitionMap,
    wither: _wither4,
    wilt: _wilt4
  };
  exports.insertAt = exports.upsertAt;
  exports.hasOwnProperty = hasOwnProperty3;
  exports.readonlyRecord = {
    URI: exports.URI,
    map: exports._map,
    reduce: (0, exports._reduce)(S.Ord),
    foldMap: (0, exports._foldMap)(S.Ord),
    reduceRight: (0, exports._reduceRight)(S.Ord),
    traverse: (0, exports._traverse)(S.Ord),
    sequence: sequence6,
    compact: exports.compact,
    separate: exports.separate,
    filter: exports._filter,
    filterMap: exports._filterMap,
    partition: exports._partition,
    partitionMap: exports._partitionMap,
    mapWithIndex: exports._mapWithIndex,
    reduceWithIndex: (0, exports._reduceWithIndex)(S.Ord),
    foldMapWithIndex: (0, exports._foldMapWithIndex)(S.Ord),
    reduceRightWithIndex: (0, exports._reduceRightWithIndex)(S.Ord),
    filterMapWithIndex: exports._filterMapWithIndex,
    filterWithIndex: exports._filterWithIndex,
    partitionMapWithIndex: exports._partitionMapWithIndex,
    partitionWithIndex: exports._partitionWithIndex,
    traverseWithIndex: _traverseWithIndex6(S.Ord),
    wither: _wither4,
    wilt: _wilt4
  };
});

// node_modules/fp-ts/lib/Applicative.js
var require_Applicative = __commonJS((exports) => {
  var getApplicativeMonoid2 = function(F) {
    var f = (0, Apply_1.getApplySemigroup)(F);
    return function(M) {
      return {
        concat: f(M).concat,
        empty: F.of(M.empty)
      };
    };
  };
  var getApplicativeComposition = function(F, G) {
    var map9 = (0, Functor_1.getFunctorComposition)(F, G).map;
    var _ap5 = (0, Apply_1.ap)(F, G);
    return {
      map: map9,
      of: function(a) {
        return F.of(G.of(a));
      },
      ap: function(fgab, fga) {
        return (0, function_1.pipe)(fgab, _ap5(fga));
      }
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getApplicativeComposition = exports.getApplicativeMonoid = undefined;
  var Apply_1 = require_Apply();
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  exports.getApplicativeMonoid = getApplicativeMonoid2;
  exports.getApplicativeComposition = getApplicativeComposition;
});

// node_modules/fp-ts/lib/Predicate.js
var require_Predicate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.and = exports.or = exports.not = exports.Contravariant = exports.getMonoidAll = exports.getSemigroupAll = exports.getMonoidAny = exports.getSemigroupAny = exports.URI = exports.contramap = undefined;
  var function_1 = require_function();
  var contramap_2 = function(predicate, f) {
    return (0, function_1.pipe)(predicate, (0, exports.contramap)(f));
  };
  var contramap2 = function(f) {
    return function(predicate) {
      return (0, function_1.flow)(f, predicate);
    };
  };
  exports.contramap = contramap2;
  exports.URI = "Predicate";
  var getSemigroupAny2 = function() {
    return {
      concat: function(first2, second) {
        return (0, function_1.pipe)(first2, (0, exports.or)(second));
      }
    };
  };
  exports.getSemigroupAny = getSemigroupAny2;
  var getMonoidAny2 = function() {
    return {
      concat: (0, exports.getSemigroupAny)().concat,
      empty: function_1.constFalse
    };
  };
  exports.getMonoidAny = getMonoidAny2;
  var getSemigroupAll = function() {
    return {
      concat: function(first2, second) {
        return (0, function_1.pipe)(first2, (0, exports.and)(second));
      }
    };
  };
  exports.getSemigroupAll = getSemigroupAll;
  var getMonoidAll2 = function() {
    return {
      concat: (0, exports.getSemigroupAll)().concat,
      empty: function_1.constTrue
    };
  };
  exports.getMonoidAll = getMonoidAll2;
  exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_2
  };
  var not2 = function(predicate) {
    return function(a) {
      return !predicate(a);
    };
  };
  exports.not = not2;
  var or2 = function(second) {
    return function(first2) {
      return function(a) {
        return first2(a) || second(a);
      };
    };
  };
  exports.or = or2;
  var and = function(second) {
    return function(first2) {
      return function(a) {
        return first2(a) && second(a);
      };
    };
  };
  exports.and = and;
});

// node_modules/fp-ts/lib/Option.js
var require_Option = __commonJS((exports) => {
  var fromPredicate4 = function(predicate) {
    return function(a) {
      return predicate(a) ? (0, exports.some)(a) : exports.none;
    };
  };
  var elem6 = function(E) {
    return function(a, ma) {
      if (ma === undefined) {
        var elemE_1 = elem6(E);
        return function(ma2) {
          return elemE_1(a, ma2);
        };
      }
      return (0, exports.isNone)(ma) ? false : E.equals(a, ma.value);
    };
  };
  var getRefinement = function(getOption) {
    return function(a) {
      return (0, exports.isSome)(getOption(a));
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
  exports.Witherable = exports.wilt = exports.wither = exports.Traversable = exports.sequence = exports.traverse = exports.Filterable = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.Compactable = exports.separate = exports.compact = exports.Extend = exports.extend = exports.Alternative = exports.guard = exports.Zero = exports.zero = exports.Alt = exports.alt = exports.altW = exports.orElse = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.flatMap = exports.Applicative = exports.Apply = exports.ap = exports.Pointed = exports.of = exports.asUnit = exports.as = exports.Functor = exports.map = exports.getMonoid = exports.getOrd = exports.getEq = exports.getShow = exports.URI = exports.getRight = exports.getLeft = exports.fromPredicate = exports.some = exports.none = undefined;
  exports.getFirstMonoid = exports.getApplyMonoid = exports.getApplySemigroup = exports.option = exports.mapNullable = exports.getRefinement = exports.chainFirst = exports.chain = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toUndefined = exports.toNullable = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.duplicate = exports.tapEither = exports.tap = exports.flatten = exports.apSecond = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.isNone = exports.isSome = exports.FromEither = exports.fromEither = exports.MonadThrow = exports.throwError = undefined;
  exports.getLastMonoid = undefined;
  var Applicative_1 = require_Applicative();
  var Apply_1 = require_Apply();
  var chainable = __importStar(require_Chain());
  var FromEither_1 = require_FromEither();
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  var _ = __importStar(require_internal());
  var Predicate_1 = require_Predicate();
  var Semigroup_1 = require_Semigroup();
  var Separated_1 = require_Separated();
  var Witherable_1 = require_Witherable();
  var Zero_1 = require_Zero();
  exports.none = _.none;
  exports.some = _.some;
  exports.fromPredicate = fromPredicate4;
  var getLeft = function(ma) {
    return ma._tag === "Right" ? exports.none : (0, exports.some)(ma.left);
  };
  exports.getLeft = getLeft;
  var getRight2 = function(ma) {
    return ma._tag === "Left" ? exports.none : (0, exports.some)(ma.right);
  };
  exports.getRight = getRight2;
  var _map8 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _ap5 = function(fab, fa) {
    return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
  };
  var _reduce6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f));
  };
  var _foldMap6 = function(M) {
    var foldMapM = (0, exports.foldMap)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapM(f));
    };
  };
  var _reduceRight6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f));
  };
  var _traverse6 = function(F) {
    var traverseF = (0, exports.traverse)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseF(f));
    };
  };
  var _alt4 = function(fa, that) {
    return (0, function_1.pipe)(fa, (0, exports.alt)(that));
  };
  var _filter5 = function(fa, predicate) {
    return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
  };
  var _filterMap5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.filterMap)(f));
  };
  var _extend4 = function(wa, f) {
    return (0, function_1.pipe)(wa, (0, exports.extend)(f));
  };
  var _partition5 = function(fa, predicate) {
    return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
  };
  var _partitionMap5 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f));
  };
  exports.URI = "Option";
  var getShow8 = function(S) {
    return {
      show: function(ma) {
        return (0, exports.isNone)(ma) ? "none" : "some(".concat(S.show(ma.value), ")");
      }
    };
  };
  exports.getShow = getShow8;
  var getEq8 = function(E) {
    return {
      equals: function(x, y) {
        return x === y || ((0, exports.isNone)(x) ? (0, exports.isNone)(y) : (0, exports.isNone)(y) ? false : E.equals(x.value, y.value));
      }
    };
  };
  exports.getEq = getEq8;
  var getOrd3 = function(O) {
    return {
      equals: (0, exports.getEq)(O).equals,
      compare: function(x, y) {
        return x === y ? 0 : (0, exports.isSome)(x) ? (0, exports.isSome)(y) ? O.compare(x.value, y.value) : 1 : -1;
      }
    };
  };
  exports.getOrd = getOrd3;
  var getMonoid11 = function(S) {
    return {
      concat: function(x, y) {
        return (0, exports.isNone)(x) ? y : (0, exports.isNone)(y) ? x : (0, exports.some)(S.concat(x.value, y.value));
      },
      empty: exports.none
    };
  };
  exports.getMonoid = getMonoid11;
  var map9 = function(f) {
    return function(fa) {
      return (0, exports.isNone)(fa) ? exports.none : (0, exports.some)(f(fa.value));
    };
  };
  exports.map = map9;
  exports.Functor = {
    URI: exports.URI,
    map: _map8
  };
  exports.as = (0, function_1.dual)(2, (0, Functor_1.as)(exports.Functor));
  exports.asUnit = (0, Functor_1.asUnit)(exports.Functor);
  exports.of = exports.some;
  exports.Pointed = {
    URI: exports.URI,
    of: exports.of
  };
  var ap8 = function(fa) {
    return function(fab) {
      return (0, exports.isNone)(fab) ? exports.none : (0, exports.isNone)(fa) ? exports.none : (0, exports.some)(fab.value(fa.value));
    };
  };
  exports.ap = ap8;
  exports.Apply = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5
  };
  exports.Applicative = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of
  };
  exports.flatMap = (0, function_1.dual)(2, function(ma, f) {
    return (0, exports.isNone)(ma) ? exports.none : f(ma.value);
  });
  exports.Chain = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    chain: exports.flatMap
  };
  exports.Monad = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    chain: exports.flatMap
  };
  var reduce8 = function(b, f) {
    return function(fa) {
      return (0, exports.isNone)(fa) ? b : f(b, fa.value);
    };
  };
  exports.reduce = reduce8;
  var foldMap8 = function(M) {
    return function(f) {
      return function(fa) {
        return (0, exports.isNone)(fa) ? M.empty : f(fa.value);
      };
    };
  };
  exports.foldMap = foldMap8;
  var reduceRight8 = function(b, f) {
    return function(fa) {
      return (0, exports.isNone)(fa) ? b : f(fa.value, b);
    };
  };
  exports.reduceRight = reduceRight8;
  exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6
  };
  exports.orElse = (0, function_1.dual)(2, function(self, that) {
    return (0, exports.isNone)(self) ? that() : self;
  });
  exports.altW = exports.orElse;
  exports.alt = exports.orElse;
  exports.Alt = {
    URI: exports.URI,
    map: _map8,
    alt: _alt4
  };
  var zero3 = function() {
    return exports.none;
  };
  exports.zero = zero3;
  exports.Zero = {
    URI: exports.URI,
    zero: exports.zero
  };
  exports.guard = (0, Zero_1.guard)(exports.Zero, exports.Pointed);
  exports.Alternative = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    alt: _alt4,
    zero: exports.zero
  };
  var extend4 = function(f) {
    return function(wa) {
      return (0, exports.isNone)(wa) ? exports.none : (0, exports.some)(f(wa));
    };
  };
  exports.extend = extend4;
  exports.Extend = {
    URI: exports.URI,
    map: _map8,
    extend: _extend4
  };
  exports.compact = (0, exports.flatMap)(function_1.identity);
  var defaultSeparated = (0, Separated_1.separated)(exports.none, exports.none);
  var separate5 = function(ma) {
    return (0, exports.isNone)(ma) ? defaultSeparated : (0, Separated_1.separated)((0, exports.getLeft)(ma.value), (0, exports.getRight)(ma.value));
  };
  exports.separate = separate5;
  exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
  };
  var filter6 = function(predicate) {
    return function(fa) {
      return (0, exports.isNone)(fa) ? exports.none : predicate(fa.value) ? fa : exports.none;
    };
  };
  exports.filter = filter6;
  var filterMap5 = function(f) {
    return function(fa) {
      return (0, exports.isNone)(fa) ? exports.none : f(fa.value);
    };
  };
  exports.filterMap = filterMap5;
  var partition5 = function(predicate) {
    return function(fa) {
      return (0, Separated_1.separated)(_filter5(fa, (0, Predicate_1.not)(predicate)), _filter5(fa, predicate));
    };
  };
  exports.partition = partition5;
  var partitionMap5 = function(f) {
    return (0, function_1.flow)((0, exports.map)(f), exports.separate);
  };
  exports.partitionMap = partitionMap5;
  exports.Filterable = {
    URI: exports.URI,
    map: _map8,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter5,
    filterMap: _filterMap5,
    partition: _partition5,
    partitionMap: _partitionMap5
  };
  var traverse6 = function(F) {
    return function(f) {
      return function(ta) {
        return (0, exports.isNone)(ta) ? F.of(exports.none) : F.map(f(ta.value), exports.some);
      };
    };
  };
  exports.traverse = traverse6;
  var sequence6 = function(F) {
    return function(ta) {
      return (0, exports.isNone)(ta) ? F.of(exports.none) : F.map(ta.value, exports.some);
    };
  };
  exports.sequence = sequence6;
  exports.Traversable = {
    URI: exports.URI,
    map: _map8,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence
  };
  var _wither4 = (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
  var _wilt4 = (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
  var wither4 = function(F) {
    var _witherF = _wither4(F);
    return function(f) {
      return function(fa) {
        return _witherF(fa, f);
      };
    };
  };
  exports.wither = wither4;
  var wilt4 = function(F) {
    var _wiltF = _wilt4(F);
    return function(f) {
      return function(fa) {
        return _wiltF(fa, f);
      };
    };
  };
  exports.wilt = wilt4;
  exports.Witherable = {
    URI: exports.URI,
    map: _map8,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter5,
    filterMap: _filterMap5,
    partition: _partition5,
    partitionMap: _partitionMap5,
    wither: _wither4,
    wilt: _wilt4
  };
  var throwError = function() {
    return exports.none;
  };
  exports.throwError = throwError;
  exports.MonadThrow = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    chain: exports.flatMap,
    throwError: exports.throwError
  };
  exports.fromEither = exports.getRight;
  exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
  };
  exports.isSome = _.isSome;
  var isNone3 = function(fa) {
    return fa._tag === "None";
  };
  exports.isNone = isNone3;
  var matchW3 = function(onNone, onSome) {
    return function(ma) {
      return (0, exports.isNone)(ma) ? onNone() : onSome(ma.value);
    };
  };
  exports.matchW = matchW3;
  exports.foldW = exports.matchW;
  exports.match = exports.matchW;
  exports.fold = exports.match;
  var getOrElseW2 = function(onNone) {
    return function(ma) {
      return (0, exports.isNone)(ma) ? onNone() : ma.value;
    };
  };
  exports.getOrElseW = getOrElseW2;
  exports.getOrElse = exports.getOrElseW;
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
  exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
  exports.flatten = exports.compact;
  exports.tap = (0, function_1.dual)(2, chainable.tap(exports.Chain));
  exports.tapEither = (0, function_1.dual)(2, (0, FromEither_1.tapEither)(exports.FromEither, exports.Chain));
  exports.duplicate = (0, exports.extend)(function_1.identity);
  exports.fromEitherK = (0, FromEither_1.fromEitherK)(exports.FromEither);
  exports.chainEitherK = (0, FromEither_1.chainEitherK)(exports.FromEither, exports.Chain);
  exports.chainFirstEitherK = exports.tapEither;
  var fromNullable = function(a) {
    return a == null ? exports.none : (0, exports.some)(a);
  };
  exports.fromNullable = fromNullable;
  var tryCatch = function(f) {
    try {
      return (0, exports.some)(f());
    } catch (e) {
      return exports.none;
    }
  };
  exports.tryCatch = tryCatch;
  var tryCatchK = function(f) {
    return function() {
      var a = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return (0, exports.tryCatch)(function() {
        return f.apply(undefined, a);
      });
    };
  };
  exports.tryCatchK = tryCatchK;
  var fromNullableK = function(f) {
    return (0, function_1.flow)(f, exports.fromNullable);
  };
  exports.fromNullableK = fromNullableK;
  var chainNullableK = function(f) {
    return function(ma) {
      return (0, exports.isNone)(ma) ? exports.none : (0, exports.fromNullable)(f(ma.value));
    };
  };
  exports.chainNullableK = chainNullableK;
  exports.toNullable = (0, exports.match)(function_1.constNull, function_1.identity);
  exports.toUndefined = (0, exports.match)(function_1.constUndefined, function_1.identity);
  exports.elem = elem6;
  var exists3 = function(predicate) {
    return function(ma) {
      return (0, exports.isNone)(ma) ? false : predicate(ma.value);
    };
  };
  exports.exists = exists3;
  exports.Do = (0, exports.of)(_.emptyRecord);
  exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
  var let_7 = (0, Functor_1.let)(exports.Functor);
  exports.let = let_7;
  exports.bind = chainable.bind(exports.Chain);
  exports.apS = (0, Apply_1.apS)(exports.Apply);
  exports.ApT = (0, exports.of)(_.emptyReadonlyArray);
  var traverseReadonlyNonEmptyArrayWithIndex2 = function(f) {
    return function(as4) {
      var o = f(0, _.head(as4));
      if ((0, exports.isNone)(o)) {
        return exports.none;
      }
      var out = [o.value];
      for (var i = 1;i < as4.length; i++) {
        var o_1 = f(i, as4[i]);
        if ((0, exports.isNone)(o_1)) {
          return exports.none;
        }
        out.push(o_1.value);
      }
      return (0, exports.some)(out);
    };
  };
  exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex2;
  var traverseReadonlyArrayWithIndex2 = function(f) {
    var g = (0, exports.traverseReadonlyNonEmptyArrayWithIndex)(f);
    return function(as4) {
      return _.isNonEmpty(as4) ? g(as4) : exports.ApT;
    };
  };
  exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex2;
  exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
  var traverseArray2 = function(f) {
    return (0, exports.traverseReadonlyArrayWithIndex)(function(_2, a) {
      return f(a);
    });
  };
  exports.traverseArray = traverseArray2;
  exports.sequenceArray = (0, exports.traverseArray)(function_1.identity);
  exports.chain = exports.flatMap;
  exports.chainFirst = exports.tap;
  exports.getRefinement = getRefinement;
  exports.mapNullable = exports.chainNullableK;
  exports.option = {
    URI: exports.URI,
    map: _map8,
    of: exports.of,
    ap: _ap5,
    chain: exports.flatMap,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence,
    zero: exports.zero,
    alt: _alt4,
    extend: _extend4,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter5,
    filterMap: _filterMap5,
    partition: _partition5,
    partitionMap: _partitionMap5,
    wither: _wither4,
    wilt: _wilt4,
    throwError: exports.throwError
  };
  exports.getApplySemigroup = (0, Apply_1.getApplySemigroup)(exports.Apply);
  exports.getApplyMonoid = (0, Applicative_1.getApplicativeMonoid)(exports.Applicative);
  var getFirstMonoid = function() {
    return (0, exports.getMonoid)((0, Semigroup_1.first)());
  };
  exports.getFirstMonoid = getFirstMonoid;
  var getLastMonoid = function() {
    return (0, exports.getMonoid)((0, Semigroup_1.last)());
  };
  exports.getLastMonoid = getLastMonoid;
});

// node_modules/fp-ts/lib/ChainRec.js
var require_ChainRec = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.tailRec = undefined;
  var tailRec = function(startWith, f) {
    var ab = f(startWith);
    while (ab._tag === "Left") {
      ab = f(ab.left);
    }
    return ab.right;
  };
  exports.tailRec = tailRec;
});

// node_modules/fp-ts/lib/Either.js
var require_Either = __commonJS((exports) => {
  var toError = function(e) {
    return e instanceof Error ? e : new Error(String(e));
  };
  var elem6 = function(E) {
    return function(a, ma) {
      if (ma === undefined) {
        var elemE_1 = elem6(E);
        return function(ma2) {
          return elemE_1(a, ma2);
        };
      }
      return (0, exports.isLeft)(ma) ? false : E.equals(a, ma.right);
    };
  };
  var parseJSON = function(s, onError) {
    return (0, exports.tryCatch)(function() {
      return JSON.parse(s);
    }, onError);
  };
  var getValidation = function(SE) {
    var ap8 = (0, exports.getApplicativeValidation)(SE).ap;
    var alt4 = (0, exports.getAltValidation)(SE).alt;
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map8,
      of: exports.of,
      chain: exports.flatMap,
      bimap: _bimap,
      mapLeft: _mapLeft,
      reduce: _reduce6,
      foldMap: _foldMap6,
      reduceRight: _reduceRight6,
      extend: _extend4,
      traverse: _traverse6,
      sequence: exports.sequence,
      chainRec: _chainRec,
      throwError: exports.throwError,
      ap: ap8,
      alt: alt4
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
  exports.match = exports.foldW = exports.matchW = exports.isRight = exports.isLeft = exports.fromOption = exports.fromPredicate = exports.FromEither = exports.MonadThrow = exports.throwError = exports.ChainRec = exports.Extend = exports.extend = exports.Alt = exports.alt = exports.altW = exports.Bifunctor = exports.mapLeft = exports.bimap = exports.Traversable = exports.sequence = exports.traverse = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.Applicative = exports.Apply = exports.ap = exports.apW = exports.Pointed = exports.of = exports.asUnit = exports.as = exports.Functor = exports.map = exports.getAltValidation = exports.getApplicativeValidation = exports.getWitherable = exports.getFilterable = exports.getCompactable = exports.getSemigroup = exports.getEq = exports.getShow = exports.URI = exports.flatMap = exports.right = exports.left = undefined;
  exports.chainFirstW = exports.chainFirst = exports.chain = exports.chainW = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.let = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toError = exports.toUnion = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.orElse = exports.orElseW = exports.swap = exports.filterOrElseW = exports.filterOrElse = exports.flatMapOption = exports.flatMapNullable = exports.liftOption = exports.liftNullable = exports.chainOptionKW = exports.chainOptionK = exports.fromOptionK = exports.duplicate = exports.flatten = exports.flattenW = exports.tap = exports.apSecondW = exports.apSecond = exports.apFirstW = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = exports.fold = undefined;
  exports.getValidation = exports.getValidationMonoid = exports.getValidationSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.either = exports.stringifyJSON = exports.parseJSON = undefined;
  var Applicative_1 = require_Applicative();
  var Apply_1 = require_Apply();
  var chainable = __importStar(require_Chain());
  var ChainRec_1 = require_ChainRec();
  var FromEither_1 = require_FromEither();
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  var _ = __importStar(require_internal());
  var Separated_1 = require_Separated();
  var Witherable_1 = require_Witherable();
  exports.left = _.left;
  exports.right = _.right;
  exports.flatMap = (0, function_1.dual)(2, function(ma, f) {
    return (0, exports.isLeft)(ma) ? ma : f(ma.right);
  });
  var _map8 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _ap5 = function(fab, fa) {
    return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
  };
  var _reduce6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f));
  };
  var _foldMap6 = function(M) {
    return function(fa, f) {
      var foldMapM = (0, exports.foldMap)(M);
      return (0, function_1.pipe)(fa, foldMapM(f));
    };
  };
  var _reduceRight6 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f));
  };
  var _traverse6 = function(F) {
    var traverseF = (0, exports.traverse)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseF(f));
    };
  };
  var _bimap = function(fa, f, g) {
    return (0, function_1.pipe)(fa, (0, exports.bimap)(f, g));
  };
  var _mapLeft = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f));
  };
  var _alt4 = function(fa, that) {
    return (0, function_1.pipe)(fa, (0, exports.alt)(that));
  };
  var _extend4 = function(wa, f) {
    return (0, function_1.pipe)(wa, (0, exports.extend)(f));
  };
  var _chainRec = function(a, f) {
    return (0, ChainRec_1.tailRec)(f(a), function(e) {
      return (0, exports.isLeft)(e) ? (0, exports.right)((0, exports.left)(e.left)) : (0, exports.isLeft)(e.right) ? (0, exports.left)(f(e.right.left)) : (0, exports.right)((0, exports.right)(e.right.right));
    });
  };
  exports.URI = "Either";
  var getShow8 = function(SE, SA) {
    return {
      show: function(ma) {
        return (0, exports.isLeft)(ma) ? "left(".concat(SE.show(ma.left), ")") : "right(".concat(SA.show(ma.right), ")");
      }
    };
  };
  exports.getShow = getShow8;
  var getEq8 = function(EL, EA) {
    return {
      equals: function(x, y) {
        return x === y || ((0, exports.isLeft)(x) ? (0, exports.isLeft)(y) && EL.equals(x.left, y.left) : (0, exports.isRight)(y) && EA.equals(x.right, y.right));
      }
    };
  };
  exports.getEq = getEq8;
  var getSemigroup9 = function(S) {
    return {
      concat: function(x, y) {
        return (0, exports.isLeft)(y) ? x : (0, exports.isLeft)(x) ? y : (0, exports.right)(S.concat(x.right, y.right));
      }
    };
  };
  exports.getSemigroup = getSemigroup9;
  var getCompactable = function(M) {
    var empty10 = (0, exports.left)(M.empty);
    return {
      URI: exports.URI,
      _E: undefined,
      compact: function(ma) {
        return (0, exports.isLeft)(ma) ? ma : ma.right._tag === "None" ? empty10 : (0, exports.right)(ma.right.value);
      },
      separate: function(ma) {
        return (0, exports.isLeft)(ma) ? (0, Separated_1.separated)(ma, ma) : (0, exports.isLeft)(ma.right) ? (0, Separated_1.separated)((0, exports.right)(ma.right.left), empty10) : (0, Separated_1.separated)(empty10, (0, exports.right)(ma.right.right));
      }
    };
  };
  exports.getCompactable = getCompactable;
  var getFilterable = function(M) {
    var empty10 = (0, exports.left)(M.empty);
    var _a = (0, exports.getCompactable)(M), compact5 = _a.compact, separate5 = _a.separate;
    var filter6 = function(ma, predicate) {
      return (0, exports.isLeft)(ma) ? ma : predicate(ma.right) ? ma : empty10;
    };
    var partition5 = function(ma, p) {
      return (0, exports.isLeft)(ma) ? (0, Separated_1.separated)(ma, ma) : p(ma.right) ? (0, Separated_1.separated)(empty10, (0, exports.right)(ma.right)) : (0, Separated_1.separated)((0, exports.right)(ma.right), empty10);
    };
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map8,
      compact: compact5,
      separate: separate5,
      filter: filter6,
      filterMap: function(ma, f) {
        if ((0, exports.isLeft)(ma)) {
          return ma;
        }
        var ob = f(ma.right);
        return ob._tag === "None" ? empty10 : (0, exports.right)(ob.value);
      },
      partition: partition5,
      partitionMap: function(ma, f) {
        if ((0, exports.isLeft)(ma)) {
          return (0, Separated_1.separated)(ma, ma);
        }
        var e = f(ma.right);
        return (0, exports.isLeft)(e) ? (0, Separated_1.separated)((0, exports.right)(e.left), empty10) : (0, Separated_1.separated)(empty10, (0, exports.right)(e.right));
      }
    };
  };
  exports.getFilterable = getFilterable;
  var getWitherable2 = function(M) {
    var F_ = (0, exports.getFilterable)(M);
    var C = (0, exports.getCompactable)(M);
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map8,
      compact: F_.compact,
      separate: F_.separate,
      filter: F_.filter,
      filterMap: F_.filterMap,
      partition: F_.partition,
      partitionMap: F_.partitionMap,
      traverse: _traverse6,
      sequence: exports.sequence,
      reduce: _reduce6,
      foldMap: _foldMap6,
      reduceRight: _reduceRight6,
      wither: (0, Witherable_1.witherDefault)(exports.Traversable, C),
      wilt: (0, Witherable_1.wiltDefault)(exports.Traversable, C)
    };
  };
  exports.getWitherable = getWitherable2;
  var getApplicativeValidation = function(SE) {
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map8,
      ap: function(fab, fa) {
        return (0, exports.isLeft)(fab) ? (0, exports.isLeft)(fa) ? (0, exports.left)(SE.concat(fab.left, fa.left)) : fab : (0, exports.isLeft)(fa) ? fa : (0, exports.right)(fab.right(fa.right));
      },
      of: exports.of
    };
  };
  exports.getApplicativeValidation = getApplicativeValidation;
  var getAltValidation = function(SE) {
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map8,
      alt: function(me, that) {
        if ((0, exports.isRight)(me)) {
          return me;
        }
        var ea = that();
        return (0, exports.isLeft)(ea) ? (0, exports.left)(SE.concat(me.left, ea.left)) : ea;
      }
    };
  };
  exports.getAltValidation = getAltValidation;
  var map9 = function(f) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? fa : (0, exports.right)(f(fa.right));
    };
  };
  exports.map = map9;
  exports.Functor = {
    URI: exports.URI,
    map: _map8
  };
  exports.as = (0, function_1.dual)(2, (0, Functor_1.as)(exports.Functor));
  exports.asUnit = (0, Functor_1.asUnit)(exports.Functor);
  exports.of = exports.right;
  exports.Pointed = {
    URI: exports.URI,
    of: exports.of
  };
  var apW = function(fa) {
    return function(fab) {
      return (0, exports.isLeft)(fab) ? fab : (0, exports.isLeft)(fa) ? fa : (0, exports.right)(fab.right(fa.right));
    };
  };
  exports.apW = apW;
  exports.ap = exports.apW;
  exports.Apply = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5
  };
  exports.Applicative = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of
  };
  exports.Chain = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    chain: exports.flatMap
  };
  exports.Monad = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    chain: exports.flatMap
  };
  var reduce8 = function(b, f) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? b : f(b, fa.right);
    };
  };
  exports.reduce = reduce8;
  var foldMap8 = function(M) {
    return function(f) {
      return function(fa) {
        return (0, exports.isLeft)(fa) ? M.empty : f(fa.right);
      };
    };
  };
  exports.foldMap = foldMap8;
  var reduceRight8 = function(b, f) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? b : f(fa.right, b);
    };
  };
  exports.reduceRight = reduceRight8;
  exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6
  };
  var traverse6 = function(F) {
    return function(f) {
      return function(ta) {
        return (0, exports.isLeft)(ta) ? F.of((0, exports.left)(ta.left)) : F.map(f(ta.right), exports.right);
      };
    };
  };
  exports.traverse = traverse6;
  var sequence6 = function(F) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? F.of((0, exports.left)(ma.left)) : F.map(ma.right, exports.right);
    };
  };
  exports.sequence = sequence6;
  exports.Traversable = {
    URI: exports.URI,
    map: _map8,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence
  };
  var bimap = function(f, g) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? (0, exports.left)(f(fa.left)) : (0, exports.right)(g(fa.right));
    };
  };
  exports.bimap = bimap;
  var mapLeft = function(f) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? (0, exports.left)(f(fa.left)) : fa;
    };
  };
  exports.mapLeft = mapLeft;
  exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
  };
  var altW4 = function(that) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? that() : fa;
    };
  };
  exports.altW = altW4;
  exports.alt = exports.altW;
  exports.Alt = {
    URI: exports.URI,
    map: _map8,
    alt: _alt4
  };
  var extend4 = function(f) {
    return function(wa) {
      return (0, exports.isLeft)(wa) ? wa : (0, exports.right)(f(wa));
    };
  };
  exports.extend = extend4;
  exports.Extend = {
    URI: exports.URI,
    map: _map8,
    extend: _extend4
  };
  exports.ChainRec = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    chain: exports.flatMap,
    chainRec: _chainRec
  };
  exports.throwError = exports.left;
  exports.MonadThrow = {
    URI: exports.URI,
    map: _map8,
    ap: _ap5,
    of: exports.of,
    chain: exports.flatMap,
    throwError: exports.throwError
  };
  exports.FromEither = {
    URI: exports.URI,
    fromEither: function_1.identity
  };
  exports.fromPredicate = (0, FromEither_1.fromPredicate)(exports.FromEither);
  exports.fromOption = (0, FromEither_1.fromOption)(exports.FromEither);
  exports.isLeft = _.isLeft;
  exports.isRight = _.isRight;
  var matchW3 = function(onLeft, onRight) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? onLeft(ma.left) : onRight(ma.right);
    };
  };
  exports.matchW = matchW3;
  exports.foldW = exports.matchW;
  exports.match = exports.matchW;
  exports.fold = exports.match;
  var getOrElseW2 = function(onLeft) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? onLeft(ma.left) : ma.right;
    };
  };
  exports.getOrElseW = getOrElseW2;
  exports.getOrElse = exports.getOrElseW;
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
  exports.apFirstW = exports.apFirst;
  exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
  exports.apSecondW = exports.apSecond;
  exports.tap = (0, function_1.dual)(2, chainable.tap(exports.Chain));
  exports.flattenW = (0, exports.flatMap)(function_1.identity);
  exports.flatten = exports.flattenW;
  exports.duplicate = (0, exports.extend)(function_1.identity);
  exports.fromOptionK = (0, FromEither_1.fromOptionK)(exports.FromEither);
  exports.chainOptionK = (0, FromEither_1.chainOptionK)(exports.FromEither, exports.Chain);
  exports.chainOptionKW = exports.chainOptionK;
  var _FromEither = {
    fromEither: exports.FromEither.fromEither
  };
  exports.liftNullable = _.liftNullable(_FromEither);
  exports.liftOption = _.liftOption(_FromEither);
  var _FlatMap2 = {
    flatMap: exports.flatMap
  };
  exports.flatMapNullable = _.flatMapNullable(_FromEither, _FlatMap2);
  exports.flatMapOption = _.flatMapOption(_FromEither, _FlatMap2);
  exports.filterOrElse = (0, FromEither_1.filterOrElse)(exports.FromEither, exports.Chain);
  exports.filterOrElseW = exports.filterOrElse;
  var swap = function(ma) {
    return (0, exports.isLeft)(ma) ? (0, exports.right)(ma.left) : (0, exports.left)(ma.right);
  };
  exports.swap = swap;
  var orElseW = function(onLeft) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? onLeft(ma.left) : ma;
    };
  };
  exports.orElseW = orElseW;
  exports.orElse = exports.orElseW;
  var fromNullable = function(e) {
    return function(a) {
      return a == null ? (0, exports.left)(e) : (0, exports.right)(a);
    };
  };
  exports.fromNullable = fromNullable;
  var tryCatch = function(f, onThrow) {
    try {
      return (0, exports.right)(f());
    } catch (e) {
      return (0, exports.left)(onThrow(e));
    }
  };
  exports.tryCatch = tryCatch;
  var tryCatchK = function(f, onThrow) {
    return function() {
      var a = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return (0, exports.tryCatch)(function() {
        return f.apply(undefined, a);
      }, onThrow);
    };
  };
  exports.tryCatchK = tryCatchK;
  var fromNullableK = function(e) {
    var from = (0, exports.fromNullable)(e);
    return function(f) {
      return (0, function_1.flow)(f, from);
    };
  };
  exports.fromNullableK = fromNullableK;
  var chainNullableK = function(e) {
    var from = (0, exports.fromNullableK)(e);
    return function(f) {
      return (0, exports.flatMap)(from(f));
    };
  };
  exports.chainNullableK = chainNullableK;
  exports.toUnion = (0, exports.foldW)(function_1.identity, function_1.identity);
  exports.toError = toError;
  exports.elem = elem6;
  var exists3 = function(predicate) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? false : predicate(ma.right);
    };
  };
  exports.exists = exists3;
  exports.Do = (0, exports.of)(_.emptyRecord);
  exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
  var let_7 = (0, Functor_1.let)(exports.Functor);
  exports.let = let_7;
  exports.bind = chainable.bind(exports.Chain);
  exports.bindW = exports.bind;
  exports.apS = (0, Apply_1.apS)(exports.Apply);
  exports.apSW = exports.apS;
  exports.ApT = (0, exports.of)(_.emptyReadonlyArray);
  var traverseReadonlyNonEmptyArrayWithIndex2 = function(f) {
    return function(as4) {
      var e = f(0, _.head(as4));
      if ((0, exports.isLeft)(e)) {
        return e;
      }
      var out = [e.right];
      for (var i = 1;i < as4.length; i++) {
        var e_1 = f(i, as4[i]);
        if ((0, exports.isLeft)(e_1)) {
          return e_1;
        }
        out.push(e_1.right);
      }
      return (0, exports.right)(out);
    };
  };
  exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex2;
  var traverseReadonlyArrayWithIndex2 = function(f) {
    var g = (0, exports.traverseReadonlyNonEmptyArrayWithIndex)(f);
    return function(as4) {
      return _.isNonEmpty(as4) ? g(as4) : exports.ApT;
    };
  };
  exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex2;
  exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
  var traverseArray2 = function(f) {
    return (0, exports.traverseReadonlyArrayWithIndex)(function(_2, a) {
      return f(a);
    });
  };
  exports.traverseArray = traverseArray2;
  exports.sequenceArray = (0, exports.traverseArray)(function_1.identity);
  exports.chainW = exports.flatMap;
  exports.chain = exports.flatMap;
  exports.chainFirst = exports.tap;
  exports.chainFirstW = exports.tap;
  exports.parseJSON = parseJSON;
  var stringifyJSON = function(u, onError) {
    return (0, exports.tryCatch)(function() {
      var s = JSON.stringify(u);
      if (typeof s !== "string") {
        throw new Error("Converting unsupported structure to JSON");
      }
      return s;
    }, onError);
  };
  exports.stringifyJSON = stringifyJSON;
  exports.either = {
    URI: exports.URI,
    map: _map8,
    of: exports.of,
    ap: _ap5,
    chain: exports.flatMap,
    reduce: _reduce6,
    foldMap: _foldMap6,
    reduceRight: _reduceRight6,
    traverse: _traverse6,
    sequence: exports.sequence,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt4,
    extend: _extend4,
    chainRec: _chainRec,
    throwError: exports.throwError
  };
  exports.getApplySemigroup = (0, Apply_1.getApplySemigroup)(exports.Apply);
  exports.getApplyMonoid = (0, Applicative_1.getApplicativeMonoid)(exports.Applicative);
  var getValidationSemigroup = function(SE, SA) {
    return (0, Apply_1.getApplySemigroup)((0, exports.getApplicativeValidation)(SE))(SA);
  };
  exports.getValidationSemigroup = getValidationSemigroup;
  var getValidationMonoid = function(SE, MA) {
    return (0, Applicative_1.getApplicativeMonoid)((0, exports.getApplicativeValidation)(SE))(MA);
  };
  exports.getValidationMonoid = getValidationMonoid;
  exports.getValidation = getValidation;
});

// node_modules/monocle-ts/lib/internal.js
var require_internal2 = __commonJS((exports) => {
  var traversalComposeTraversal = function(ab) {
    return function(sa) {
      return (0, exports.traversal)(function(F) {
        return function(f) {
          return sa.modifyF(F)(ab.modifyF(F)(f));
        };
      });
    };
  };
  var fromTraversable = function(T) {
    return function() {
      return (0, exports.traversal)(function(F) {
        var traverseF = isIdentity(F) ? T.map : T.traverse(F);
        return function(f) {
          return function(s) {
            return traverseF(s, f);
          };
        };
      });
    };
  };
  var traversalTraverse = function(T) {
    return traversalComposeTraversal(fromTraversable(T)());
  };
  var atReadonlyRecord = function() {
    return (0, exports.at)(function(key) {
      return (0, exports.lens)(function(r) {
        return RR.lookup(key, r);
      }, O.fold(function() {
        return RR.deleteAt(key);
      }, function(a) {
        return RR.insertAt(key, a);
      }));
    });
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
  exports.atReadonlyRecord = exports.at = exports.indexReadonlyRecord = exports.indexReadonlyNonEmptyArray = exports.indexReadonlyArray = exports.index = exports.traversalTraverse = exports.fromTraversable = exports.ApplicativeIdentity = exports.traversalComposeTraversal = exports.traversal = exports.optionalFindFirstNonEmpty = exports.optionalFindFirst = exports.optionalKey = exports.optionalIndexNonEmpty = exports.optionalIndex = exports.optionalComposeOptional = exports.optionalModify = exports.optionalModifyOption = exports.optionalAsTraversal = exports.optional = exports.prismLeft = exports.prismRight = exports.prismSome = exports.prismFromPredicate = exports.prismFromNullable = exports.prismComposeLens = exports.prismSet = exports.prismModify = exports.prismModifyOption = exports.prismAsTraversal = exports.prismAsOptional = exports.prism = exports.lensAtKey = exports.lensComponent = exports.lensProps = exports.lensProp = exports.lensId = exports.lensComposePrism = exports.prismComposePrism = exports.lensComposeLens = exports.lensAsTraversal = exports.lensAsOptional = exports.lens = exports.isoAsTraversal = exports.isoAsOptional = exports.isoAsPrism = exports.isoAsLens = exports.iso = undefined;
  var RA = require_ReadonlyArray();
  var RR = require_ReadonlyRecord();
  var function_1 = require_function();
  var O = require_Option();
  var E = require_Either();
  var pipeable_1 = require_pipeable();
  var iso = function(get, reverseGet) {
    return {
      get,
      reverseGet
    };
  };
  exports.iso = iso;
  var isoAsLens = function(sa) {
    return (0, exports.lens)(sa.get, (0, function_1.flow)(sa.reverseGet, function_1.constant));
  };
  exports.isoAsLens = isoAsLens;
  var isoAsPrism = function(sa) {
    return (0, exports.prism)((0, function_1.flow)(sa.get, O.some), sa.reverseGet);
  };
  exports.isoAsPrism = isoAsPrism;
  var isoAsOptional = function(sa) {
    return (0, exports.optional)((0, function_1.flow)(sa.get, O.some), (0, function_1.flow)(sa.reverseGet, function_1.constant));
  };
  exports.isoAsOptional = isoAsOptional;
  var isoAsTraversal = function(sa) {
    return (0, exports.traversal)(function(F) {
      return function(f) {
        return function(s) {
          return F.map(f(sa.get(s)), function(a) {
            return sa.reverseGet(a);
          });
        };
      };
    });
  };
  exports.isoAsTraversal = isoAsTraversal;
  var lens = function(get, set) {
    return { get, set };
  };
  exports.lens = lens;
  var lensAsOptional = function(sa) {
    return (0, exports.optional)((0, function_1.flow)(sa.get, O.some), sa.set);
  };
  exports.lensAsOptional = lensAsOptional;
  var lensAsTraversal = function(sa) {
    return (0, exports.traversal)(function(F) {
      return function(f) {
        return function(s) {
          return F.map(f(sa.get(s)), function(a) {
            return sa.set(a)(s);
          });
        };
      };
    });
  };
  exports.lensAsTraversal = lensAsTraversal;
  var lensComposeLens = function(ab) {
    return function(sa) {
      return (0, exports.lens)(function(s) {
        return ab.get(sa.get(s));
      }, function(b) {
        return function(s) {
          return sa.set(ab.set(b)(sa.get(s)))(s);
        };
      });
    };
  };
  exports.lensComposeLens = lensComposeLens;
  var prismComposePrism = function(ab) {
    return function(sa) {
      return (0, exports.prism)((0, function_1.flow)(sa.getOption, O.chain(ab.getOption)), (0, function_1.flow)(ab.reverseGet, sa.reverseGet));
    };
  };
  exports.prismComposePrism = prismComposePrism;
  var lensComposePrism = function(ab) {
    return function(sa) {
      return (0, exports.optionalComposeOptional)((0, exports.prismAsOptional)(ab))((0, exports.lensAsOptional)(sa));
    };
  };
  exports.lensComposePrism = lensComposePrism;
  var lensId = function() {
    return (0, exports.lens)(function_1.identity, function_1.constant);
  };
  exports.lensId = lensId;
  var lensProp = function(prop) {
    return function(sa) {
      return (0, exports.lens)(function(s) {
        return sa.get(s)[prop];
      }, function(ap8) {
        return function(s) {
          var _a;
          var oa = sa.get(s);
          if (ap8 === oa[prop]) {
            return s;
          }
          return sa.set(Object.assign({}, oa, (_a = {}, _a[prop] = ap8, _a)))(s);
        };
      });
    };
  };
  exports.lensProp = lensProp;
  var lensProps = function() {
    var props = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      props[_i] = arguments[_i];
    }
    return function(sa) {
      return (0, exports.lens)(function(s) {
        var a = sa.get(s);
        var r = {};
        for (var _i2 = 0, props_1 = props;_i2 < props_1.length; _i2++) {
          var k = props_1[_i2];
          r[k] = a[k];
        }
        return r;
      }, function(a) {
        return function(s) {
          var oa = sa.get(s);
          for (var _i2 = 0, props_2 = props;_i2 < props_2.length; _i2++) {
            var k = props_2[_i2];
            if (a[k] !== oa[k]) {
              return sa.set(Object.assign({}, oa, a))(s);
            }
          }
          return s;
        };
      });
    };
  };
  exports.lensProps = lensProps;
  var lensComponent = function(prop) {
    return function(sa) {
      return (0, exports.lens)(function(s) {
        return sa.get(s)[prop];
      }, function(ap8) {
        return function(s) {
          var oa = sa.get(s);
          if (ap8 === oa[prop]) {
            return s;
          }
          var copy3 = oa.slice();
          copy3[prop] = ap8;
          return sa.set(copy3)(s);
        };
      });
    };
  };
  exports.lensComponent = lensComponent;
  var lensAtKey = function(key) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.lensComposeLens)(atReadonlyRecord().at(key)));
    };
  };
  exports.lensAtKey = lensAtKey;
  var prism = function(getOption, reverseGet) {
    return { getOption, reverseGet };
  };
  exports.prism = prism;
  var prismAsOptional = function(sa) {
    return (0, exports.optional)(sa.getOption, function(a) {
      return (0, exports.prismSet)(a)(sa);
    });
  };
  exports.prismAsOptional = prismAsOptional;
  var prismAsTraversal = function(sa) {
    return (0, exports.traversal)(function(F) {
      return function(f) {
        return function(s) {
          return (0, pipeable_1.pipe)(sa.getOption(s), O.fold(function() {
            return F.of(s);
          }, function(a) {
            return F.map(f(a), function(a2) {
              return (0, exports.prismSet)(a2)(sa)(s);
            });
          }));
        };
      };
    });
  };
  exports.prismAsTraversal = prismAsTraversal;
  var prismModifyOption = function(f) {
    return function(sa) {
      return function(s) {
        return (0, pipeable_1.pipe)(sa.getOption(s), O.map(function(o) {
          var n = f(o);
          return n === o ? s : sa.reverseGet(n);
        }));
      };
    };
  };
  exports.prismModifyOption = prismModifyOption;
  var prismModify = function(f) {
    return function(sa) {
      var g = (0, exports.prismModifyOption)(f)(sa);
      return function(s) {
        return (0, pipeable_1.pipe)(g(s), O.getOrElse(function() {
          return s;
        }));
      };
    };
  };
  exports.prismModify = prismModify;
  var prismSet = function(a) {
    return (0, exports.prismModify)(function() {
      return a;
    });
  };
  exports.prismSet = prismSet;
  var prismComposeLens = function(ab) {
    return function(sa) {
      return (0, exports.optionalComposeOptional)((0, exports.lensAsOptional)(ab))((0, exports.prismAsOptional)(sa));
    };
  };
  exports.prismComposeLens = prismComposeLens;
  var prismFromNullable = function() {
    return (0, exports.prism)(O.fromNullable, function_1.identity);
  };
  exports.prismFromNullable = prismFromNullable;
  var prismFromPredicate = function(predicate) {
    return (0, exports.prism)(O.fromPredicate(predicate), function_1.identity);
  };
  exports.prismFromPredicate = prismFromPredicate;
  var prismSome = function() {
    return (0, exports.prism)(function_1.identity, O.some);
  };
  exports.prismSome = prismSome;
  var prismRight = function() {
    return (0, exports.prism)(O.fromEither, E.right);
  };
  exports.prismRight = prismRight;
  var prismLeft = function() {
    return (0, exports.prism)(function(s) {
      return E.isLeft(s) ? O.some(s.left) : O.none;
    }, E.left);
  };
  exports.prismLeft = prismLeft;
  var optional = function(getOption, set) {
    return {
      getOption,
      set
    };
  };
  exports.optional = optional;
  var optionalAsTraversal = function(sa) {
    return (0, exports.traversal)(function(F) {
      return function(f) {
        return function(s) {
          return (0, pipeable_1.pipe)(sa.getOption(s), O.fold(function() {
            return F.of(s);
          }, function(a) {
            return F.map(f(a), function(a2) {
              return sa.set(a2)(s);
            });
          }));
        };
      };
    });
  };
  exports.optionalAsTraversal = optionalAsTraversal;
  var optionalModifyOption = function(f) {
    return function(optional2) {
      return function(s) {
        return (0, pipeable_1.pipe)(optional2.getOption(s), O.map(function(a) {
          var n = f(a);
          return n === a ? s : optional2.set(n)(s);
        }));
      };
    };
  };
  exports.optionalModifyOption = optionalModifyOption;
  var optionalModify = function(f) {
    return function(optional2) {
      var g = (0, exports.optionalModifyOption)(f)(optional2);
      return function(s) {
        return (0, pipeable_1.pipe)(g(s), O.getOrElse(function() {
          return s;
        }));
      };
    };
  };
  exports.optionalModify = optionalModify;
  var optionalComposeOptional = function(ab) {
    return function(sa) {
      return (0, exports.optional)((0, function_1.flow)(sa.getOption, O.chain(ab.getOption)), function(b) {
        return (0, exports.optionalModify)(ab.set(b))(sa);
      });
    };
  };
  exports.optionalComposeOptional = optionalComposeOptional;
  var optionalIndex = function(i) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.optionalComposeOptional)((0, exports.indexReadonlyArray)().index(i)));
    };
  };
  exports.optionalIndex = optionalIndex;
  var optionalIndexNonEmpty = function(i) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.optionalComposeOptional)((0, exports.indexReadonlyNonEmptyArray)().index(i)));
    };
  };
  exports.optionalIndexNonEmpty = optionalIndexNonEmpty;
  var optionalKey = function(key) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.optionalComposeOptional)((0, exports.indexReadonlyRecord)().index(key)));
    };
  };
  exports.optionalKey = optionalKey;
  var optionalFindFirst = function(predicate) {
    return (0, exports.optional)(RA.findFirst(predicate), function(a) {
      return function(s) {
        return (0, pipeable_1.pipe)(RA.findIndex(predicate)(s), O.fold(function() {
          return s;
        }, function(i) {
          return RA.unsafeUpdateAt(i, a, s);
        }));
      };
    });
  };
  exports.optionalFindFirst = optionalFindFirst;
  var unsafeUpdateAt5 = function(i, a, as4) {
    if (as4[i] === a) {
      return as4;
    } else {
      var xs = __spreadArray6([as4[0]], as4.slice(1), true);
      xs[i] = a;
      return xs;
    }
  };
  var optionalFindFirstNonEmpty = function(predicate) {
    return (0, exports.optional)(RA.findFirst(predicate), function(a) {
      return function(as4) {
        return (0, pipeable_1.pipe)(RA.findIndex(predicate)(as4), O.fold(function() {
          return as4;
        }, function(i) {
          return unsafeUpdateAt5(i, a, as4);
        }));
      };
    });
  };
  exports.optionalFindFirstNonEmpty = optionalFindFirstNonEmpty;
  var traversal = function(modifyF) {
    return {
      modifyF
    };
  };
  exports.traversal = traversal;
  exports.traversalComposeTraversal = traversalComposeTraversal;
  exports.ApplicativeIdentity = {
    URI: "Identity",
    map: function(fa, f) {
      return f(fa);
    },
    of: function_1.identity,
    ap: function(fab, fa) {
      return fab(fa);
    }
  };
  var isIdentity = function(F) {
    return F.URI === "Identity";
  };
  exports.fromTraversable = fromTraversable;
  exports.traversalTraverse = traversalTraverse;
  var index = function(index2) {
    return { index: index2 };
  };
  exports.index = index;
  var indexReadonlyArray = function() {
    return (0, exports.index)(function(i) {
      return (0, exports.optional)(function(as4) {
        return RA.lookup(i, as4);
      }, function(a) {
        return function(as4) {
          return (0, pipeable_1.pipe)(RA.lookup(i, as4), O.fold(function() {
            return as4;
          }, function() {
            return RA.unsafeUpdateAt(i, a, as4);
          }));
        };
      });
    });
  };
  exports.indexReadonlyArray = indexReadonlyArray;
  var indexReadonlyNonEmptyArray = function() {
    return (0, exports.index)(function(i) {
      return (0, exports.optional)(function(as4) {
        return RA.lookup(i, as4);
      }, function(a) {
        return function(as4) {
          return (0, pipeable_1.pipe)(RA.lookup(i, as4), O.fold(function() {
            return as4;
          }, function() {
            return unsafeUpdateAt5(i, a, as4);
          }));
        };
      });
    });
  };
  exports.indexReadonlyNonEmptyArray = indexReadonlyNonEmptyArray;
  var indexReadonlyRecord = function() {
    return (0, exports.index)(function(k) {
      return (0, exports.optional)(function(r) {
        return RR.lookup(k, r);
      }, function(a) {
        return function(r) {
          if (r[k] === a || O.isNone(RR.lookup(k, r))) {
            return r;
          }
          return RR.insertAt(k, a)(r);
        };
      });
    });
  };
  exports.indexReadonlyRecord = indexReadonlyRecord;
  var at = function(at2) {
    return { at: at2 };
  };
  exports.at = at;
  exports.atReadonlyRecord = atReadonlyRecord;
});

// node_modules/monocle-ts/lib/Traversal.js
var require_Traversal = __commonJS((exports) => {
  var filter6 = function(predicate) {
    return (0, exports.compose)(_.prismAsTraversal(_.prismFromPredicate(predicate)));
  };
  var findFirst3 = function(predicate) {
    return (0, exports.composeOptional)(_.optionalFindFirst(predicate));
  };
  var findFirstNonEmpty = function(predicate) {
    return (0, exports.composeOptional)(_.optionalFindFirstNonEmpty(predicate));
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Category = exports.Semigroupoid = exports.URI = exports.getAll = exports.fold = exports.foldMap = exports.findFirstNonEmpty = exports.findFirst = exports.traverse = exports.left = exports.right = exports.some = exports.atKey = exports.key = exports.indexNonEmpty = exports.index = exports.component = exports.props = exports.prop = exports.filter = exports.fromNullable = exports.set = exports.modify = exports.composeOptional = exports.composePrism = exports.composeLens = exports.composeIso = exports.composeTraversal = exports.compose = exports.fromTraversable = exports.id = exports.traversal = undefined;
  var C = require_Const();
  var function_1 = require_function();
  var pipeable_1 = require_pipeable();
  var RA = require_ReadonlyArray();
  var _ = require_internal2();
  exports.traversal = _.traversal;
  var id = function() {
    return (0, exports.traversal)(function(_2) {
      return function(f) {
        return f;
      };
    });
  };
  exports.id = id;
  exports.fromTraversable = _.fromTraversable;
  exports.compose = _.traversalComposeTraversal;
  exports.composeTraversal = exports.compose;
  exports.composeIso = (0, function_1.flow)(_.isoAsTraversal, exports.compose);
  exports.composeLens = (0, function_1.flow)(_.lensAsTraversal, _.traversalComposeTraversal);
  exports.composePrism = (0, function_1.flow)(_.prismAsTraversal, _.traversalComposeTraversal);
  exports.composeOptional = (0, function_1.flow)(_.optionalAsTraversal, _.traversalComposeTraversal);
  var modify = function(f) {
    return function(sa) {
      return sa.modifyF(_.ApplicativeIdentity)(f);
    };
  };
  exports.modify = modify;
  var set = function(a) {
    return (0, exports.modify)(function() {
      return a;
    });
  };
  exports.set = set;
  var fromNullable = function(sa) {
    return (0, exports.composePrism)(_.prismFromNullable())(sa);
  };
  exports.fromNullable = fromNullable;
  exports.filter = filter6;
  var prop = function(prop2) {
    return (0, exports.compose)((0, pipeable_1.pipe)(_.lensId(), _.lensProp(prop2), _.lensAsTraversal));
  };
  exports.prop = prop;
  var props = function() {
    var props2 = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      props2[_i] = arguments[_i];
    }
    return (0, exports.compose)((0, pipeable_1.pipe)(_.lensId(), _.lensProps.apply(_, props2), _.lensAsTraversal));
  };
  exports.props = props;
  var component = function(prop2) {
    return (0, exports.compose)((0, pipeable_1.pipe)(_.lensId(), _.lensComponent(prop2), _.lensAsTraversal));
  };
  exports.component = component;
  var index = function(i) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.compose)(_.optionalAsTraversal(_.indexReadonlyArray().index(i))));
    };
  };
  exports.index = index;
  var indexNonEmpty = function(i) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.compose)(_.optionalAsTraversal(_.indexReadonlyNonEmptyArray().index(i))));
    };
  };
  exports.indexNonEmpty = indexNonEmpty;
  var key = function(key2) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.compose)(_.optionalAsTraversal(_.indexReadonlyRecord().index(key2))));
    };
  };
  exports.key = key;
  var atKey = function(key2) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.compose)(_.lensAsTraversal(_.atReadonlyRecord().at(key2))));
    };
  };
  exports.atKey = atKey;
  exports.some = (0, exports.compose)(_.prismAsTraversal(_.prismSome()));
  exports.right = (0, exports.compose)(_.prismAsTraversal(_.prismRight()));
  exports.left = (0, exports.compose)(_.prismAsTraversal(_.prismLeft()));
  exports.traverse = _.traversalTraverse;
  exports.findFirst = findFirst3;
  exports.findFirstNonEmpty = findFirstNonEmpty;
  var foldMap8 = function(M) {
    return function(f) {
      return function(sa) {
        return sa.modifyF(C.getApplicative(M))(function(a) {
          return C.make(f(a));
        });
      };
    };
  };
  exports.foldMap = foldMap8;
  var fold2 = function(M) {
    return (0, exports.foldMap)(M)(function_1.identity);
  };
  exports.fold = fold2;
  var getAll = function(s) {
    return function(sa) {
      return (0, exports.foldMap)(RA.getMonoid())(RA.of)(sa)(s);
    };
  };
  exports.getAll = getAll;
  exports.URI = "monocle-ts/Traversal";
  exports.Semigroupoid = {
    URI: exports.URI,
    compose: function(ab, ea) {
      return (0, exports.compose)(ab)(ea);
    }
  };
  exports.Category = {
    URI: exports.URI,
    compose: exports.Semigroupoid.compose,
    id: exports.id
  };
});

// node_modules/monocle-ts/lib/Lens.js
var require_Lens = __commonJS((exports) => {
  var modifyF = function(F) {
    return function(f) {
      return function(sa) {
        return function(s) {
          return (0, pipeable_1.pipe)(sa.get(s), f, function(fa) {
            return F.map(fa, function(a) {
              return sa.set(a)(s);
            });
          });
        };
      };
    };
  };
  var filter6 = function(predicate) {
    return (0, exports.composePrism)(_.prismFromPredicate(predicate));
  };
  var traverse6 = function(T) {
    return (0, function_1.flow)(exports.asTraversal, _.traversalTraverse(T));
  };
  var findFirst3 = function(predicate) {
    return (0, exports.composeOptional)(_.optionalFindFirst(predicate));
  };
  var findFirstNonEmpty = function(predicate) {
    return (0, exports.composeOptional)(_.optionalFindFirstNonEmpty(predicate));
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Category = exports.Semigroupoid = exports.Invariant = exports.URI = exports.imap = exports.findFirstNonEmpty = exports.findFirst = exports.traverse = exports.left = exports.right = exports.some = exports.atKey = exports.key = exports.indexNonEmpty = exports.index = exports.component = exports.props = exports.prop = exports.filter = exports.fromNullable = exports.modifyF = exports.modify = exports.composeTraversal = exports.composeOptional = exports.composePrism = exports.composeIso = exports.composeLens = exports.compose = exports.asTraversal = exports.asOptional = exports.id = exports.lens = undefined;
  var function_1 = require_function();
  var pipeable_1 = require_pipeable();
  var _ = require_internal2();
  exports.lens = _.lens;
  exports.id = _.lensId;
  exports.asOptional = _.lensAsOptional;
  exports.asTraversal = _.lensAsTraversal;
  exports.compose = _.lensComposeLens;
  exports.composeLens = exports.compose;
  exports.composeIso = (0, function_1.flow)(_.isoAsLens, exports.compose);
  exports.composePrism = _.lensComposePrism;
  var composeOptional = function(ab) {
    return (0, function_1.flow)(exports.asOptional, _.optionalComposeOptional(ab));
  };
  exports.composeOptional = composeOptional;
  var composeTraversal = function(ab) {
    return (0, function_1.flow)(exports.asTraversal, _.traversalComposeTraversal(ab));
  };
  exports.composeTraversal = composeTraversal;
  var modify = function(f) {
    return function(sa) {
      return function(s) {
        var o = sa.get(s);
        var n = f(o);
        return o === n ? s : sa.set(n)(s);
      };
    };
  };
  exports.modify = modify;
  exports.modifyF = modifyF;
  var fromNullable = function(sa) {
    return (0, exports.composePrism)(_.prismFromNullable())(sa);
  };
  exports.fromNullable = fromNullable;
  exports.filter = filter6;
  exports.prop = _.lensProp;
  exports.props = _.lensProps;
  exports.component = _.lensComponent;
  var index = function(i) {
    return (0, function_1.flow)(exports.asOptional, _.optionalIndex(i));
  };
  exports.index = index;
  var indexNonEmpty = function(i) {
    return (0, function_1.flow)(exports.asOptional, _.optionalIndexNonEmpty(i));
  };
  exports.indexNonEmpty = indexNonEmpty;
  var key = function(key2) {
    return (0, function_1.flow)(exports.asOptional, _.optionalKey(key2));
  };
  exports.key = key;
  exports.atKey = _.lensAtKey;
  exports.some = (0, exports.composePrism)(_.prismSome());
  exports.right = (0, exports.composePrism)(_.prismRight());
  exports.left = (0, exports.composePrism)(_.prismLeft());
  exports.traverse = traverse6;
  exports.findFirst = findFirst3;
  exports.findFirstNonEmpty = findFirstNonEmpty;
  var imap = function(f, g) {
    return function(ea) {
      return imap_(ea, f, g);
    };
  };
  exports.imap = imap;
  var imap_ = function(ea, ab, ba) {
    return (0, exports.lens)((0, function_1.flow)(ea.get, ab), (0, function_1.flow)(ba, ea.set));
  };
  exports.URI = "monocle-ts/Lens";
  exports.Invariant = {
    URI: exports.URI,
    imap: imap_
  };
  exports.Semigroupoid = {
    URI: exports.URI,
    compose: function(ab, ea) {
      return (0, exports.compose)(ab)(ea);
    }
  };
  exports.Category = {
    URI: exports.URI,
    compose: exports.Semigroupoid.compose,
    id: exports.id
  };
});

// node_modules/monocle-ts/lib/Optional.js
var require_Optional = __commonJS((exports) => {
  var modifyF = function(F) {
    return function(f) {
      return function(sa) {
        return function(s) {
          return (0, pipeable_1.pipe)(sa.getOption(s), O.fold(function() {
            return F.of(s);
          }, function(a) {
            return F.map(f(a), function(a2) {
              return sa.set(a2)(s);
            });
          }));
        };
      };
    };
  };
  var filter6 = function(predicate) {
    return (0, exports.compose)(_.prismAsOptional(_.prismFromPredicate(predicate)));
  };
  var traverse6 = function(T) {
    return (0, function_1.flow)(exports.asTraversal, _.traversalTraverse(T));
  };
  var findFirst3 = function(predicate) {
    return (0, exports.compose)(_.optionalFindFirst(predicate));
  };
  var findFirstNonEmpty = function(predicate) {
    return (0, exports.compose)(_.optionalFindFirstNonEmpty(predicate));
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Category = exports.Semigroupoid = exports.Invariant = exports.URI = exports.imap = exports.findFirstNonEmpty = exports.findFirst = exports.traverse = exports.left = exports.right = exports.some = exports.atKey = exports.key = exports.indexNonEmpty = exports.index = exports.component = exports.props = exports.prop = exports.filter = exports.fromNullable = exports.modifyF = exports.modify = exports.setOption = exports.modifyOption = exports.composeTraversal = exports.composePrism = exports.composeLens = exports.composeIso = exports.composeOptional = exports.compose = exports.asTraversal = exports.id = exports.optional = undefined;
  var function_1 = require_function();
  var O = require_Option();
  var pipeable_1 = require_pipeable();
  var _ = require_internal2();
  exports.optional = _.optional;
  var id = function() {
    return (0, exports.optional)(O.some, function_1.constant);
  };
  exports.id = id;
  exports.asTraversal = _.optionalAsTraversal;
  exports.compose = _.optionalComposeOptional;
  exports.composeOptional = exports.compose;
  exports.composeIso = (0, function_1.flow)(_.isoAsOptional, exports.compose);
  exports.composeLens = (0, function_1.flow)(_.lensAsOptional, _.optionalComposeOptional);
  exports.composePrism = (0, function_1.flow)(_.prismAsOptional, _.optionalComposeOptional);
  var composeTraversal = function(ab) {
    return (0, function_1.flow)(exports.asTraversal, _.traversalComposeTraversal(ab));
  };
  exports.composeTraversal = composeTraversal;
  exports.modifyOption = _.optionalModifyOption;
  var setOption = function(a) {
    return (0, exports.modifyOption)(function() {
      return a;
    });
  };
  exports.setOption = setOption;
  exports.modify = _.optionalModify;
  exports.modifyF = modifyF;
  exports.fromNullable = (0, exports.compose)(_.prismAsOptional(_.prismFromNullable()));
  exports.filter = filter6;
  var prop = function(prop2) {
    return (0, exports.compose)((0, pipeable_1.pipe)(_.lensId(), _.lensProp(prop2), _.lensAsOptional));
  };
  exports.prop = prop;
  var props = function() {
    var props2 = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      props2[_i] = arguments[_i];
    }
    return (0, exports.compose)((0, pipeable_1.pipe)(_.lensId(), _.lensProps.apply(_, props2), _.lensAsOptional));
  };
  exports.props = props;
  var component = function(prop2) {
    return (0, exports.compose)((0, pipeable_1.pipe)(_.lensId(), _.lensComponent(prop2), _.lensAsOptional));
  };
  exports.component = component;
  exports.index = _.optionalIndex;
  exports.indexNonEmpty = _.optionalIndexNonEmpty;
  exports.key = _.optionalKey;
  var atKey = function(key) {
    return function(sa) {
      return (0, pipeable_1.pipe)(sa, (0, exports.compose)(_.lensAsOptional(_.atReadonlyRecord().at(key))));
    };
  };
  exports.atKey = atKey;
  exports.some = (0, exports.compose)(_.prismAsOptional(_.prismSome()));
  exports.right = (0, exports.compose)(_.prismAsOptional(_.prismRight()));
  exports.left = (0, exports.compose)(_.prismAsOptional(_.prismLeft()));
  exports.traverse = traverse6;
  exports.findFirst = findFirst3;
  exports.findFirstNonEmpty = findFirstNonEmpty;
  var imap = function(f, g) {
    return function(ea) {
      return imap_(ea, f, g);
    };
  };
  exports.imap = imap;
  var imap_ = function(ea, ab, ba) {
    return (0, exports.optional)((0, function_1.flow)(ea.getOption, O.map(ab)), (0, function_1.flow)(ba, ea.set));
  };
  exports.URI = "monocle-ts/Optional";
  exports.Invariant = {
    URI: exports.URI,
    imap: imap_
  };
  exports.Semigroupoid = {
    URI: exports.URI,
    compose: function(ab, ea) {
      return (0, exports.compose)(ab)(ea);
    }
  };
  exports.Category = {
    URI: exports.URI,
    compose: exports.Semigroupoid.compose,
    id: exports.id
  };
});

// node_modules/spectacles-ts/dist/util/monocle.js
var require_monocle = __commonJS((exports) => {
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
  exports.lensFromPath = exports.traversalFromPath = exports.optionalFromPath = exports.isPathTraversal = exports.isPathLens = undefined;
  var function_1 = require_function();
  var A = __importStar(require_ReadonlyArray());
  var R = __importStar(require_ReadonlyRecord());
  var string_1 = require_string();
  var L = __importStar(require_Lens());
  var Op = __importStar(require_Optional());
  var Tr = __importStar(require_Traversal());
  var isPathLens = (path) => !split2(path).some((s) => ["?", "?some", "?left", "right", "[]>", "{}>", "[number]", "[string]"].includes(s) || !s.startsWith("(") && s.includes(":"));
  exports.isPathLens = isPathLens;
  var isPathTraversal = (path) => split2(path).some((s) => ["[]>", "{}>"].includes(s));
  exports.isPathTraversal = isPathTraversal;
  var lastSegment = (path) => {
    if (path === "") {
      return path;
    }
    const escapeable = path.match(/\((.*)\*(.*)\)$/);
    if (escapeable) {
      return escapeable[2];
    }
    const escapeable2 = path.match(/\((.*)\)$/);
    if (escapeable2) {
      return escapeable2[0];
    }
    const finalSegment = path.match(/(.*)\.(.*)/);
    if (finalSegment) {
      return finalSegment[2];
    }
    return path;
  };
  var initSegment = (path) => {
    if (path === "") {
      return path;
    }
    const escapeable = path.match(/(.*)\.\((.*)\*(.*)\)$/);
    if (escapeable) {
      return escapeable[1];
    }
    return path.substring(0, path.lastIndexOf(lastSegment(path)) - 1);
  };
  var splitIntoSegments = (path, acc = []) => {
    const init5 = initSegment(path);
    const last6 = lastSegment(path);
    if (init5 === "") {
      return [last6, ...acc];
    }
    return splitIntoSegments(init5, [last6, ...acc]);
  };
  var split2 = (path) => {
    const segments = splitIntoSegments(path, []);
    return segments.flatMap((segment) => {
      if (segment.includes("?some") || segment.includes("?left") || segment.includes("?right") || !segment.includes("?")) {
        return [segment];
      } else {
        const before = segment.substring(0, segment.length - 1);
        if (before.length > 0) {
          return [before, "?"];
        }
        return ["?"];
      }
    });
  };
  var optionalFromPath = (path, _indicies) => {
    const indicies = [..._indicies];
    const opt = split2(path).reduce((acc, cur) => {
      if (cur === "?") {
        return (0, function_1.pipe)(acc, Op.fromNullable);
      } else if (cur === "?some") {
        return (0, function_1.pipe)(acc, Op.some);
      } else if (cur === "?left") {
        return (0, function_1.pipe)(acc, Op.left);
      } else if (cur === "?right") {
        return (0, function_1.pipe)(acc, Op.left);
      } else if (cur === "[number]") {
        return (0, function_1.pipe)(acc, Op.index(indicies.shift()));
      } else if (cur === "[string]") {
        return (0, function_1.pipe)(acc, Op.key(indicies.shift()));
      } else if (cur.includes("[") && cur.includes("]") && cur.indexOf("[") < cur.indexOf("]")) {
        const component = Number.parseInt(cur.substring(cur.indexOf("[") + 1, cur.indexOf("]")), 10);
        return (0, function_1.pipe)(acc, Op.component(component));
      } else if (cur.includes(":")) {
        const i = cur.indexOf(":");
        const discriminant = cur.substring(0, i);
        const member2 = cur.substring(i + 1, cur.length);
        return (0, function_1.pipe)(acc, Op.filter((a) => a[discriminant] === member2));
      }
      return (0, function_1.pipe)(acc, Op.prop(cur));
    }, Op.id());
    return opt;
  };
  exports.optionalFromPath = optionalFromPath;
  var traversalFromPath = (path, _indicies) => {
    const indicies = [..._indicies];
    const opt = split2(path).reduce((acc, cur) => {
      if (cur === "?") {
        return (0, function_1.pipe)(acc, Tr.fromNullable);
      } else if (cur === "?some") {
        return (0, function_1.pipe)(acc, Tr.some);
      } else if (cur === "?left") {
        return (0, function_1.pipe)(acc, Tr.left);
      } else if (cur === "?right") {
        return (0, function_1.pipe)(acc, Tr.left);
      } else if (cur === "[number]") {
        return (0, function_1.pipe)(acc, Tr.index(indicies.shift()));
      } else if (cur === "[string]") {
        return (0, function_1.pipe)(acc, Tr.key(indicies.shift()));
      } else if (cur === "[]>") {
        const a = (0, function_1.pipe)(acc, Tr.traverse(A.Traversable));
        return a;
      } else if (cur === "{}>") {
        const a = (0, function_1.pipe)(acc, Tr.traverse(R.getTraversable(string_1.Ord)));
        return a;
      } else if (cur.includes("[") && cur.includes("]") && cur.indexOf("[") < cur.indexOf("]")) {
        const component = Number.parseInt(cur.substring(cur.indexOf("[") + 1, cur.indexOf("]")), 10);
        return (0, function_1.pipe)(acc, Tr.component(component));
      } else if (cur.includes(":")) {
        const i = cur.indexOf(":");
        const discriminant = cur.substring(0, i);
        const member2 = cur.substring(i + 1, cur.length);
        return (0, function_1.pipe)(acc, Tr.filter((a) => a[discriminant] === member2));
      }
      return (0, function_1.pipe)(acc, Tr.prop(cur));
    }, Tr.id());
    return opt;
  };
  exports.traversalFromPath = traversalFromPath;
  var lensFromPath = (path) => {
    const lens = split2(path).reduce((acc, cur) => {
      if (cur.includes("[") && cur.includes("]") && cur.indexOf("[") < cur.indexOf("]")) {
        const component = cur.substring(cur.indexOf("[") + 1, cur.indexOf("]"));
        return (0, function_1.pipe)(acc, L.component(Number.parseInt(component, 10)));
      }
      return (0, function_1.pipe)(acc, L.prop(cur));
    }, L.id());
    return lens;
  };
  exports.lensFromPath = lensFromPath;
});

// node_modules/spectacles-ts/dist/values/get.js
var require_get = __commonJS((exports) => {
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
  exports.get = undefined;
  var function_1 = require_function();
  var Tr = __importStar(require_Traversal());
  var monocle_1 = require_monocle();
  var get = (path, ...indicies) => {
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, monocle_1.lensFromPath)(path).get;
    }
    if ((0, monocle_1.isPathTraversal)(path)) {
      return (v) => {
        return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, indicies), Tr.getAll(v));
      };
    }
    return (0, monocle_1.optionalFromPath)(path, indicies).getOption;
  };
  exports.get = get;
});

// node_modules/spectacles-ts/dist/values/set.js
var require_set = __commonJS((exports) => {
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
  exports.set = undefined;
  var function_1 = require_function();
  var Tr = __importStar(require_Traversal());
  var monocle_1 = require_monocle();
  var set = (path, ...args) => (obj) => {
    const indicies = args.slice(0, args.length - 1);
    const val = args[args.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, monocle_1.lensFromPath)(path).set(val)(obj);
    }
    return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, indicies), Tr.set(val))(obj);
  };
  exports.set = set;
});

// node_modules/spectacles-ts/dist/values/setOption.js
var require_setOption = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.setOption = undefined;
  var function_1 = require_function();
  var Optional_1 = require_Optional();
  var Traversal_1 = require_Traversal();
  var monocle_1 = require_monocle();
  var setOption = (path, ...args) => (obj) => {
    const indicies = args.slice(0, args.length - 1);
    const val = args[args.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, monocle_1.lensFromPath)(path).set(val)(obj);
    }
    if ((0, monocle_1.isPathTraversal)(path)) {
      return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, indicies), (0, Traversal_1.set)(val))(obj);
    }
    return (0, function_1.pipe)((0, monocle_1.optionalFromPath)(path, indicies), (0, Optional_1.setOption)(val))(obj);
  };
  exports.setOption = setOption;
});

// node_modules/spectacles-ts/dist/values/modify.js
var require_modify = __commonJS((exports) => {
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
  exports.modify = undefined;
  var function_1 = require_function();
  var L = __importStar(require_Lens());
  var Traversal_1 = require_Traversal();
  var monocle_1 = require_monocle();
  var modify = (path, ...args) => (a) => {
    const indicies = args.slice(0, args.length - 1);
    const modFunc = args[args.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, function_1.pipe)((0, monocle_1.lensFromPath)(path), L.modify(modFunc))(a);
    }
    return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, indicies), (0, Traversal_1.modify)(modFunc))(a);
  };
  exports.modify = modify;
});

// node_modules/spectacles-ts/dist/values/modifyOption.js
var require_modifyOption = __commonJS((exports) => {
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
  exports.modifyOption = undefined;
  var function_1 = require_function();
  var L = __importStar(require_Lens());
  var Op = __importStar(require_Optional());
  var Tr = __importStar(require_Traversal());
  var monocle_1 = require_monocle();
  var modifyOption = (path, ...args) => (a) => {
    const indicies = args.slice(0, args.length - 1);
    const modFunc = args[args.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, function_1.pipe)((0, monocle_1.lensFromPath)(path), L.modify(modFunc))(a);
    }
    if ((0, monocle_1.isPathTraversal)(path)) {
      return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, indicies), Tr.modify(modFunc))(a);
    }
    return (0, function_1.pipe)((0, monocle_1.optionalFromPath)(path, indicies), Op.modifyOption(modFunc))(a);
  };
  exports.modifyOption = modifyOption;
});

// node_modules/spectacles-ts/dist/values/modifyW.js
var require_modifyW = __commonJS((exports) => {
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
  exports.modifyW = undefined;
  var function_1 = require_function();
  var L = __importStar(require_Lens());
  var Traversal_1 = require_Traversal();
  var monocle_1 = require_monocle();
  var modifyW = (path, ...args) => (a) => {
    const indicies = args.slice(0, args.length - 1);
    const modFunc = args[args.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, function_1.pipe)((0, monocle_1.lensFromPath)(path), L.modify(modFunc))(a);
    }
    return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, indicies), (0, Traversal_1.modify)(modFunc))(a);
  };
  exports.modifyW = modifyW;
});

// node_modules/spectacles-ts/dist/values/modifyOptionW.js
var require_modifyOptionW = __commonJS((exports) => {
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
  exports.modifyOptionW = undefined;
  var function_1 = require_function();
  var L = __importStar(require_Lens());
  var Op = __importStar(require_Optional());
  var Tr = __importStar(require_Traversal());
  var monocle_1 = require_monocle();
  var modifyOptionW = (path, ...args) => (a) => {
    const indicies = args.slice(0, args.length - 1);
    const modFunc = args[args.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, function_1.pipe)((0, monocle_1.lensFromPath)(path), L.modify(modFunc))(a);
    }
    if ((0, monocle_1.isPathTraversal)(path)) {
      return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, indicies), Tr.modify(modFunc))(a);
    }
    return (0, function_1.pipe)((0, monocle_1.optionalFromPath)(path, indicies), Op.modifyOption(modFunc))(a);
  };
  exports.modifyOptionW = modifyOptionW;
});

// node_modules/spectacles-ts/dist/values/modifyF.js
var require_modifyF = __commonJS((exports) => {
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
  exports.modifyF = undefined;
  var function_1 = require_function();
  var L = __importStar(require_Lens());
  var monocle_1 = require_monocle();
  var modifyF = (F) => (path, ...args) => (a) => {
    const indicies = args.slice(0, args.length - 1);
    const modFunc = args[args.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, function_1.pipe)((0, monocle_1.lensFromPath)(path), L.modifyF(F)(modFunc))(a);
    }
    return (0, monocle_1.traversalFromPath)(path, indicies).modifyF(F)(modFunc)(a);
  };
  exports.modifyF = modifyF;
});

// node_modules/spectacles-ts/dist/values/upsert.js
var require_upsert = __commonJS((exports) => {
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
  exports.upsert = undefined;
  var function_1 = require_function();
  var L = __importStar(require_Lens());
  var Tr = __importStar(require_Traversal());
  var monocle_1 = require_monocle();
  var upsert = (path, final, ...args) => (a) => {
    const indicies = args.slice(0, args.length - 1);
    const val = args[args.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, function_1.pipe)((0, monocle_1.lensFromPath)(path), L.modify((obj) => ({ ...obj, [final]: val })))(a);
    }
    return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, indicies), Tr.modify((obj) => ({ ...obj, [final]: val })))(a);
  };
  exports.upsert = upsert;
});

// node_modules/spectacles-ts/dist/values/remove.js
var require_remove = __commonJS((exports) => {
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
  exports.remove = undefined;
  var function_1 = require_function();
  var L = __importStar(require_Lens());
  var Tr = __importStar(require_Traversal());
  var monocle_1 = require_monocle();
  var remove = (fullPath) => (a) => {
    const segments = fullPath.split(".");
    const path = segments.slice(0, segments.length - 1).join(".");
    const final = segments[segments.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, function_1.pipe)((0, monocle_1.lensFromPath)(path), L.modify((obj) => {
        const omitted = { ...obj };
        delete omitted[final];
        return omitted;
      }))(a);
    }
    return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, []), Tr.modify((obj) => {
      const omitted = { ...obj };
      delete omitted[final];
      return omitted;
    }))(a);
  };
  exports.remove = remove;
});

// node_modules/spectacles-ts/dist/values/rename.js
var require_rename = __commonJS((exports) => {
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
  exports.rename = undefined;
  var function_1 = require_function();
  var L = __importStar(require_Lens());
  var Tr = __importStar(require_Traversal());
  var monocle_1 = require_monocle();
  var rename = (fullPath, newKey) => (a) => {
    const segments = fullPath.split(".");
    const path = segments.slice(0, segments.length - 1).join(".");
    const final = segments[segments.length - 1];
    if ((0, monocle_1.isPathLens)(path)) {
      return (0, function_1.pipe)((0, monocle_1.lensFromPath)(path), L.modify(({ [final]: val, ...rest }) => ({ ...rest, [newKey]: val })))(a);
    }
    return (0, function_1.pipe)((0, monocle_1.traversalFromPath)(path, []), Tr.modify(({ [final]: val, ...rest }) => ({ ...rest, [newKey]: val })))(a);
  };
  exports.rename = rename;
});

// node_modules/spectacles-ts/dist/index.js
var require_dist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.rename = exports.remove = exports.upsert = exports.modifyF = exports.modifyOptionW = exports.modifyW = exports.modifyOption = exports.modify = exports.setOption = exports.set = exports.get = undefined;
  var get_1 = require_get();
  Object.defineProperty(exports, "get", { enumerable: true, get: function() {
    return get_1.get;
  } });
  var set_1 = require_set();
  Object.defineProperty(exports, "set", { enumerable: true, get: function() {
    return set_1.set;
  } });
  var setOption_1 = require_setOption();
  Object.defineProperty(exports, "setOption", { enumerable: true, get: function() {
    return setOption_1.setOption;
  } });
  var modify_1 = require_modify();
  Object.defineProperty(exports, "modify", { enumerable: true, get: function() {
    return modify_1.modify;
  } });
  var modifyOption_1 = require_modifyOption();
  Object.defineProperty(exports, "modifyOption", { enumerable: true, get: function() {
    return modifyOption_1.modifyOption;
  } });
  var modifyW_1 = require_modifyW();
  Object.defineProperty(exports, "modifyW", { enumerable: true, get: function() {
    return modifyW_1.modifyW;
  } });
  var modifyOptionW_1 = require_modifyOptionW();
  Object.defineProperty(exports, "modifyOptionW", { enumerable: true, get: function() {
    return modifyOptionW_1.modifyOptionW;
  } });
  var modifyF_1 = require_modifyF();
  Object.defineProperty(exports, "modifyF", { enumerable: true, get: function() {
    return modifyF_1.modifyF;
  } });
  var upsert_1 = require_upsert();
  Object.defineProperty(exports, "upsert", { enumerable: true, get: function() {
    return upsert_1.upsert;
  } });
  var remove_1 = require_remove();
  Object.defineProperty(exports, "remove", { enumerable: true, get: function() {
    return remove_1.remove;
  } });
  var rename_1 = require_rename();
  Object.defineProperty(exports, "rename", { enumerable: true, get: function() {
    return rename_1.rename;
  } });
});

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
var constFalse = constant(false);
var constUndefined = constant(undefined);
var constVoid = constUndefined;
var SK = function(_, b) {
  return b;
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
var has = Object.prototype.hasOwnProperty;
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
      return zipWith3;
    }
  },
  zip: () => {
    {
      return zip3;
    }
  },
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
  updateAt: () => {
    {
      return updateAt3;
    }
  },
  unzip: () => {
    {
      return unzip3;
    }
  },
  unsafeUpdateAt: () => {
    {
      return unsafeUpdateAt4;
    }
  },
  unsafeInsertAt: () => {
    {
      return unsafeInsertAt4;
    }
  },
  unsafeDeleteAt: () => {
    {
      return unsafeDeleteAt2;
    }
  },
  uniq: () => {
    {
      return uniq4;
    }
  },
  union: () => {
    {
      return union4;
    }
  },
  unfold: () => {
    {
      return unfold2;
    }
  },
  traverseWithIndex: () => {
    {
      return traverseWithIndex3;
    }
  },
  traverse: () => {
    {
      return traverse3;
    }
  },
  takeRight: () => {
    {
      return takeRight2;
    }
  },
  takeLeftWhile: () => {
    {
      return takeLeftWhile2;
    }
  },
  takeLeft: () => {
    {
      return takeLeft2;
    }
  },
  tail: () => {
    {
      return tail5;
    }
  },
  splitAt: () => {
    {
      return splitAt4;
    }
  },
  spanLeft: () => {
    {
      return spanLeft2;
    }
  },
  sortBy: () => {
    {
      return sortBy4;
    }
  },
  sort: () => {
    {
      return sort4;
    }
  },
  some: () => {
    {
      return some3;
    }
  },
  snoc: () => {
    {
      return snoc4;
    }
  },
  size: () => {
    {
      return size2;
    }
  },
  sequence: () => {
    {
      return sequence3;
    }
  },
  separate: () => {
    {
      return separate2;
    }
  },
  scanRight: () => {
    {
      return scanRight2;
    }
  },
  scanLeft: () => {
    {
      return scanLeft2;
    }
  },
  rotate: () => {
    {
      return rotate4;
    }
  },
  rights: () => {
    {
      return rights2;
    }
  },
  reverse: () => {
    {
      return reverse4;
    }
  },
  replicate: () => {
    {
      return replicate3;
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
      return range4;
    }
  },
  prependW: () => {
    {
      return prependW4;
    }
  },
  prependToAll: () => {
    {
      return prependToAll3;
    }
  },
  prependAll: () => {
    {
      return prependAll4;
    }
  },
  prepend: () => {
    {
      return prepend4;
    }
  },
  partitionWithIndex: () => {
    {
      return partitionWithIndex2;
    }
  },
  partitionMapWithIndex: () => {
    {
      return partitionMapWithIndex2;
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
  of: () => {
    {
      return of4;
    }
  },
  modifyAt: () => {
    {
      return modifyAt3;
    }
  },
  matchW: () => {
    {
      return matchW2;
    }
  },
  matchRightW: () => {
    {
      return matchRightW2;
    }
  },
  matchRight: () => {
    {
      return matchRight3;
    }
  },
  matchLeftW: () => {
    {
      return matchLeftW2;
    }
  },
  matchLeft: () => {
    {
      return matchLeft3;
    }
  },
  match: () => {
    {
      return match2;
    }
  },
  mapWithIndex: () => {
    {
      return mapWithIndex3;
    }
  },
  map: () => {
    {
      return map3;
    }
  },
  makeBy: () => {
    {
      return makeBy4;
    }
  },
  lookup: () => {
    {
      return lookup2;
    }
  },
  let: () => {
    {
      return let_4;
    }
  },
  lefts: () => {
    {
      return lefts2;
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
      return isEmpty2;
    }
  },
  intersperse: () => {
    {
      return intersperse4;
    }
  },
  intersection: () => {
    {
      return intersection2;
    }
  },
  intercalate: () => {
    {
      return intercalate4;
    }
  },
  insertAt: () => {
    {
      return insertAt3;
    }
  },
  init: () => {
    {
      return init4;
    }
  },
  head: () => {
    {
      return head5;
    }
  },
  guard: () => {
    {
      return guard3;
    }
  },
  getUnionSemigroup: () => {
    {
      return getUnionSemigroup3;
    }
  },
  getUnionMonoid: () => {
    {
      return getUnionMonoid2;
    }
  },
  getShow: () => {
    {
      return getShow4;
    }
  },
  getSemigroup: () => {
    {
      return getSemigroup6;
    }
  },
  getOrd: () => {
    {
      return getOrd2;
    }
  },
  getMonoid: () => {
    {
      return getMonoid5;
    }
  },
  getIntersectionSemigroup: () => {
    {
      return getIntersectionSemigroup2;
    }
  },
  getEq: () => {
    {
      return getEq4;
    }
  },
  getDifferenceMagma: () => {
    {
      return getDifferenceMagma2;
    }
  },
  fromPredicate: () => {
    {
      return fromPredicate2;
    }
  },
  fromOptionK: () => {
    {
      return fromOptionK2;
    }
  },
  fromOption: () => {
    {
      return fromOption2;
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
  foldRight: () => {
    {
      return foldRight2;
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
      return foldLeft2;
    }
  },
  flatten: () => {
    {
      return flatten3;
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
      return filterWithIndex3;
    }
  },
  filterMapWithIndex: () => {
    {
      return filterMapWithIndex2;
    }
  },
  filterMap: () => {
    {
      return filterMap2;
    }
  },
  filterE: () => {
    {
      return filterE3;
    }
  },
  filter: () => {
    {
      return filter3;
    }
  },
  extend: () => {
    {
      return extend3;
    }
  },
  exists: () => {
    {
      return exists2;
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
      return duplicate3;
    }
  },
  dropRight: () => {
    {
      return dropRight2;
    }
  },
  dropLeftWhile: () => {
    {
      return dropLeftWhile2;
    }
  },
  dropLeft: () => {
    {
      return dropLeft2;
    }
  },
  difference: () => {
    {
      return difference2;
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
      return cons4;
    }
  },
  concatW: () => {
    {
      return concatW3;
    }
  },
  concat: () => {
    {
      return concat4;
    }
  },
  comprehension: () => {
    {
      return comprehension2;
    }
  },
  compact: () => {
    {
      return compact2;
    }
  },
  chunksOf: () => {
    {
      return chunksOf4;
    }
  },
  chop: () => {
    {
      return chop4;
    }
  },
  chainWithIndex: () => {
    {
      return chainWithIndex3;
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
  array: () => {
    {
      return array;
    }
  },
  appendW: () => {
    {
      return appendW4;
    }
  },
  append: () => {
    {
      return append4;
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
  altW: () => {
    {
      return altW3;
    }
  },
  alt: () => {
    {
      return alt3;
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
  Unfoldable: () => {
    {
      return Unfoldable2;
    }
  },
  URI: () => {
    {
      return URI4;
    }
  },
  TraversableWithIndex: () => {
    {
      return TraversableWithIndex3;
    }
  },
  Traversable: () => {
    {
      return Traversable3;
    }
  },
  Pointed: () => {
    {
      return Pointed3;
    }
  },
  Monad: () => {
    {
      return Monad3;
    }
  },
  FunctorWithIndex: () => {
    {
      return FunctorWithIndex3;
    }
  },
  Functor: () => {
    {
      return Functor6;
    }
  },
  FromEither: () => {
    {
      return FromEither4;
    }
  },
  FoldableWithIndex: () => {
    {
      return FoldableWithIndex3;
    }
  },
  Foldable: () => {
    {
      return Foldable3;
    }
  },
  FilterableWithIndex: () => {
    {
      return FilterableWithIndex2;
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
      return Do3;
    }
  },
  Compactable: () => {
    {
      return Compactable2;
    }
  },
  ChainRecDepthFirst: () => {
    {
      return ChainRecDepthFirst2;
    }
  },
  ChainRecBreadthFirst: () => {
    {
      return ChainRecBreadthFirst2;
    }
  },
  Chain: () => {
    {
      return Chain7;
    }
  },
  Apply: () => {
    {
      return Apply7;
    }
  },
  Applicative: () => {
    {
      return Applicative3;
    }
  },
  Alternative: () => {
    {
      return Alternative2;
    }
  },
  Alt: () => {
    {
      return Alt3;
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

// node_modules/fp-ts/es6/NonEmptyArray.js
var exports_NonEmptyArray = {};
__export(exports_NonEmptyArray, {
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
  updateLast: () => {
    {
      return updateLast;
    }
  },
  updateHead: () => {
    {
      return updateHead;
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
  unsnoc: () => {
    {
      return unsnoc;
    }
  },
  unsafeUpdateAt: () => {
    {
      return unsafeUpdateAt2;
    }
  },
  unsafeInsertAt: () => {
    {
      return unsafeInsertAt2;
    }
  },
  unprepend: () => {
    {
      return unprepend;
    }
  },
  uniq: () => {
    {
      return uniq2;
    }
  },
  union: () => {
    {
      return union2;
    }
  },
  uncons: () => {
    {
      return uncons;
    }
  },
  unappend: () => {
    {
      return unappend;
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
  tail: () => {
    {
      return tail3;
    }
  },
  splitAt: () => {
    {
      return splitAt2;
    }
  },
  sortBy: () => {
    {
      return sortBy2;
    }
  },
  sort: () => {
    {
      return sort2;
    }
  },
  snoc: () => {
    {
      return snoc2;
    }
  },
  sequence: () => {
    {
      return sequence;
    }
  },
  rotate: () => {
    {
      return rotate2;
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
      return reduceWithIndex2;
    }
  },
  reduceRightWithIndex: () => {
    {
      return reduceRightWithIndex2;
    }
  },
  reduceRight: () => {
    {
      return reduceRight2;
    }
  },
  reduce: () => {
    {
      return reduce2;
    }
  },
  range: () => {
    {
      return range2;
    }
  },
  prependW: () => {
    {
      return prependW2;
    }
  },
  prependToAll: () => {
    {
      return prependToAll;
    }
  },
  prependAll: () => {
    {
      return prependAll2;
    }
  },
  prepend: () => {
    {
      return prepend2;
    }
  },
  of: () => {
    {
      return of2;
    }
  },
  nonEmptyArray: () => {
    {
      return nonEmptyArray;
    }
  },
  modifyLast: () => {
    {
      return modifyLast;
    }
  },
  modifyHead: () => {
    {
      return modifyHead;
    }
  },
  modifyAt: () => {
    {
      return modifyAt;
    }
  },
  min: () => {
    {
      return min4;
    }
  },
  max: () => {
    {
      return max4;
    }
  },
  matchRight: () => {
    {
      return matchRight;
    }
  },
  matchLeft: () => {
    {
      return matchLeft;
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
      return makeBy2;
    }
  },
  let: () => {
    {
      return let_2;
    }
  },
  last: () => {
    {
      return last3;
    }
  },
  isOutOfBound: () => {
    {
      return isOutOfBound2;
    }
  },
  isNonEmpty: () => {
    {
      return isNonEmpty3;
    }
  },
  intersperse: () => {
    {
      return intersperse2;
    }
  },
  intercalate: () => {
    {
      return intercalate2;
    }
  },
  insertAt: () => {
    {
      return insertAt;
    }
  },
  init: () => {
    {
      return init2;
    }
  },
  head: () => {
    {
      return head3;
    }
  },
  groupSort: () => {
    {
      return groupSort;
    }
  },
  groupBy: () => {
    {
      return groupBy;
    }
  },
  group: () => {
    {
      return group;
    }
  },
  getUnionSemigroup: () => {
    {
      return getUnionSemigroup;
    }
  },
  getShow: () => {
    {
      return getShow2;
    }
  },
  getSemigroup: () => {
    {
      return getSemigroup4;
    }
  },
  getEq: () => {
    {
      return getEq2;
    }
  },
  fromReadonlyNonEmptyArray: () => {
    {
      return fromReadonlyNonEmptyArray2;
    }
  },
  fromArray: () => {
    {
      return fromArray;
    }
  },
  foldMapWithIndex: () => {
    {
      return foldMapWithIndex2;
    }
  },
  foldMap: () => {
    {
      return foldMap2;
    }
  },
  fold: () => {
    {
      return fold;
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
  filterWithIndex: () => {
    {
      return filterWithIndex;
    }
  },
  filter: () => {
    {
      return filter;
    }
  },
  extract: () => {
    {
      return extract2;
    }
  },
  extend: () => {
    {
      return extend;
    }
  },
  duplicate: () => {
    {
      return duplicate;
    }
  },
  copy: () => {
    {
      return copy;
    }
  },
  cons: () => {
    {
      return cons2;
    }
  },
  concatW: () => {
    {
      return concatW;
    }
  },
  concatAll: () => {
    {
      return concatAll4;
    }
  },
  concat: () => {
    {
      return concat2;
    }
  },
  chunksOf: () => {
    {
      return chunksOf2;
    }
  },
  chop: () => {
    {
      return chop2;
    }
  },
  chainWithIndex: () => {
    {
      return chainWithIndex;
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
  appendW: () => {
    {
      return appendW2;
    }
  },
  append: () => {
    {
      return append2;
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
  Do: () => {
    {
      return Do;
    }
  },
  Comonad: () => {
    {
      return Comonad;
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
  Alt: () => {
    {
      return Alt;
    }
  }
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
var last = function() {
  return { concat: function(_, y) {
    return y;
  } };
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
function concat(x, y) {
  return y ? x.concat(y) : function(y2) {
    return y2.concat(x);
  };
}
function cons(head2, tail2) {
  return tail2 === undefined ? prepend(head2) : pipe(tail2, prepend(head2));
}
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
var appendW = function(end) {
  return function(init) {
    return __spreadArray3(__spreadArray3([], init, true), [end], false);
  };
};
var append = appendW;
var unsafeInsertAt = function(i, a, as2) {
  if (isNonEmpty2(as2)) {
    var xs = fromReadonlyNonEmptyArray(as2);
    xs.splice(i, 0, a);
    return xs;
  }
  return [a];
};
var unsafeUpdateAt = function(i, a, as2) {
  if (as2[i] === a) {
    return as2;
  } else {
    var xs = fromReadonlyNonEmptyArray(as2);
    xs[i] = a;
    return xs;
  }
};
var uniq = function(E) {
  return function(as2) {
    if (as2.length === 1) {
      return as2;
    }
    var out = [head2(as2)];
    var rest = tail2(as2);
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
  if (isNonEmpty2(ords)) {
    var M = getMonoid3();
    return sort(ords.reduce(M.concat, M.empty));
  }
  return identity;
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
    if (isOutOfBound(Math.abs(m), as2) || m === 0) {
      return as2;
    }
    if (m < 0) {
      var _a = splitAt(-m)(as2), f = _a[0], s = _a[1];
      return pipe(s, concat(f));
    } else {
      return rotate(m - len)(as2);
    }
  };
};
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
var chop = function(f) {
  return function(as2) {
    var _a = f(as2), b = _a[0], rest = _a[1];
    var out = [b];
    var next = rest;
    while (isNonEmpty2(next)) {
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
    return m >= as2.length ? [as2, empty2] : [pipe(as2.slice(1, m), prepend(head2(as2))), as2.slice(m)];
  };
};
var chunksOf = function(n) {
  return chop(splitAt(n));
};
var of = singleton;
var reduce = function(b, f) {
  return reduceWithIndex(b, function(_, b2, a) {
    return f(b2, a);
  });
};
var foldMap = function(S) {
  return function(f) {
    return function(as2) {
      return as2.slice(1).reduce(function(s, a) {
        return S.concat(s, f(a));
      }, f(as2[0]));
    };
  };
};
var reduceRight = function(b, f) {
  return reduceRightWithIndex(b, function(_, b2, a) {
    return f(b2, a);
  });
};
var reduceWithIndex = function(b, f) {
  return function(as2) {
    return as2.reduce(function(b2, a, i) {
      return f(i, b2, a);
    }, b);
  };
};
var foldMapWithIndex = function(S) {
  return function(f) {
    return function(as2) {
      return as2.slice(1).reduce(function(s, a, i) {
        return S.concat(s, f(i + 1, a));
      }, f(0, as2[0]));
    };
  };
};
var reduceRightWithIndex = function(b, f) {
  return function(as2) {
    return as2.reduceRight(function(b2, a, i) {
      return f(i, a, b2);
    }, b);
  };
};
var extract = head;
var getShow = function(S) {
  return {
    show: function(as2) {
      return "[".concat(as2.map(S.show).join(", "), "]");
    }
  };
};
var getEq = function(E) {
  return fromEquals(function(xs, ys) {
    return xs.length === ys.length && xs.every(function(x, i) {
      return E.equals(x, ys[i]);
    });
  });
};
var head2 = extract;
var tail2 = tail;
var last2 = function(as2) {
  return as2[as2.length - 1];
};
var init = function(as2) {
  return as2.slice(0, -1);
};
var min3 = function(O) {
  var S = min2(O);
  return function(as2) {
    return as2.reduce(S.concat);
  };
};
var max3 = function(O) {
  var S = max2(O);
  return function(as2) {
    return as2.reduce(S.concat);
  };
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
var snoc = function(init2, end) {
  return pipe(init2, concat([end]));
};

// node_modules/fp-ts/es6/NonEmptyArray.js
function concatW(second) {
  return function(first2) {
    return first2.concat(second);
  };
}
function concat2(x, y) {
  return y ? x.concat(y) : function(y2) {
    return y2.concat(x);
  };
}
function group(E) {
  return function(as2) {
    var len = as2.length;
    if (len === 0) {
      return [];
    }
    var out = [];
    var head3 = as2[0];
    var nea = [head3];
    for (var i = 1;i < len; i++) {
      var a = as2[i];
      if (E.equals(a, head3)) {
        nea.push(a);
      } else {
        out.push(nea);
        head3 = a;
        nea = [head3];
      }
    }
    out.push(nea);
    return out;
  };
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
function groupSort(O) {
  var sortO = sort2(O);
  var groupO = group(O);
  return function(as2) {
    return isNonEmpty3(as2) ? groupO(sortO(as2)) : [];
  };
}
function filter(predicate) {
  return filterWithIndex(function(_, a) {
    return predicate(a);
  });
}
function cons2(head3, tail3) {
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
var appendW2 = function(end) {
  return function(init2) {
    return __spreadArray4(__spreadArray4([], init2, true), [end], false);
  };
};
var append2 = appendW2;
var unsafeInsertAt2 = function(i, a, as2) {
  if (isNonEmpty3(as2)) {
    var xs = fromReadonlyNonEmptyArray2(as2);
    xs.splice(i, 0, a);
    return xs;
  }
  return [a];
};
var unsafeUpdateAt2 = function(i, a, as2) {
  var xs = fromReadonlyNonEmptyArray2(as2);
  xs[i] = a;
  return xs;
};
var uniq2 = function(E) {
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
var sortBy2 = function(ords) {
  if (isNonEmpty3(ords)) {
    var M = getMonoid3();
    return sort2(ords.reduce(M.concat, M.empty));
  }
  return copy;
};
var union2 = function(E) {
  var uniqE = uniq2(E);
  return function(second) {
    return function(first2) {
      return uniqE(pipe(first2, concat2(second)));
    };
  };
};
var rotate2 = function(n) {
  return function(as2) {
    var len = as2.length;
    var m = Math.round(n) % len;
    if (isOutOfBound2(Math.abs(m), as2) || m === 0) {
      return copy(as2);
    }
    if (m < 0) {
      var _a = splitAt2(-m)(as2), f = _a[0], s = _a[1];
      return pipe(s, concat2(f));
    } else {
      return rotate2(m - len)(as2);
    }
  };
};
var fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
var fromArray = function(as2) {
  return isNonEmpty3(as2) ? some(as2) : none;
};
var makeBy2 = function(f) {
  return function(n) {
    var j = Math.max(0, Math.floor(n));
    var out = [f(0)];
    for (var i = 1;i < j; i++) {
      out.push(f(i));
    }
    return out;
  };
};
var replicate = function(a) {
  return makeBy2(function() {
    return a;
  });
};
var range2 = function(start, end) {
  return start <= end ? makeBy2(function(i) {
    return start + i;
  })(end - start + 1) : [start];
};
var unprepend = function(as2) {
  return [head3(as2), tail3(as2)];
};
var unappend = function(as2) {
  return [init2(as2), last3(as2)];
};
var reverse2 = function(as2) {
  return __spreadArray4([last3(as2)], as2.slice(0, -1).reverse(), true);
};
var groupBy = function(f) {
  return function(as2) {
    var out = {};
    for (var _i = 0, as_1 = as2;_i < as_1.length; _i++) {
      var a = as_1[_i];
      var k = f(a);
      if (has.call(out, k)) {
        out[k].push(a);
      } else {
        out[k] = [a];
      }
    }
    return out;
  };
};
var sort2 = function(O) {
  return function(as2) {
    return as2.slice().sort(O.compare);
  };
};
var insertAt = function(i, a) {
  return function(as2) {
    return i < 0 || i > as2.length ? none : some(unsafeInsertAt2(i, a, as2));
  };
};
var updateAt = function(i, a) {
  return modifyAt(i, function() {
    return a;
  });
};
var modifyAt = function(i, f) {
  return function(as2) {
    return isOutOfBound2(i, as2) ? none : some(unsafeUpdateAt2(i, f(as2[i]), as2));
  };
};
var copy = fromReadonlyNonEmptyArray2;
var of2 = function(a) {
  return [a];
};
var zipWith = function(as2, bs, f) {
  var cs = [f(as2[0], bs[0])];
  var len = Math.min(as2.length, bs.length);
  for (var i = 1;i < len; i++) {
    cs[i] = f(as2[i], bs[i]);
  }
  return cs;
};
var unzip = function(abs) {
  var fa = [abs[0][0]];
  var fb = [abs[0][1]];
  for (var i = 1;i < abs.length; i++) {
    fa[i] = abs[i][0];
    fb[i] = abs[i][1];
  }
  return [fa, fb];
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
var foldMapWithIndex2 = foldMapWithIndex;
var foldMap2 = foldMap;
var chainWithIndex = function(f) {
  return function(as2) {
    var out = fromReadonlyNonEmptyArray2(f(0, head3(as2)));
    for (var i = 1;i < as2.length; i++) {
      out.push.apply(out, f(i, as2[i]));
    }
    return out;
  };
};
var chop2 = function(f) {
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
var splitAt2 = function(n) {
  return function(as2) {
    var m = Math.max(1, n);
    return m >= as2.length ? [copy(as2), []] : [pipe(as2.slice(1, m), prepend2(head3(as2))), as2.slice(m)];
  };
};
var chunksOf2 = function(n) {
  return chop2(splitAt2(n));
};
var _map = function(fa, f) {
  return pipe(fa, map(f));
};
var _mapWithIndex = function(fa, f) {
  return pipe(fa, mapWithIndex(f));
};
var _ap = function(fab, fa) {
  return pipe(fab, ap2(fa));
};
var _extend = function(wa, f) {
  return pipe(wa, extend(f));
};
var _reduce = function(fa, b, f) {
  return pipe(fa, reduce2(b, f));
};
var _foldMap = function(M) {
  var foldMapM = foldMap2(M);
  return function(fa, f) {
    return pipe(fa, foldMapM(f));
  };
};
var _reduceRight = function(fa, b, f) {
  return pipe(fa, reduceRight2(b, f));
};
var _traverse = function(F) {
  var traverseF = traverse(F);
  return function(ta, f) {
    return pipe(ta, traverseF(f));
  };
};
var _alt = function(fa, that) {
  return pipe(fa, alt(that));
};
var _reduceWithIndex = function(fa, b, f) {
  return pipe(fa, reduceWithIndex2(b, f));
};
var _foldMapWithIndex = function(M) {
  var foldMapWithIndexM = foldMapWithIndex2(M);
  return function(fa, f) {
    return pipe(fa, foldMapWithIndexM(f));
  };
};
var _reduceRightWithIndex = function(fa, b, f) {
  return pipe(fa, reduceRightWithIndex2(b, f));
};
var _traverseWithIndex = function(F) {
  var traverseWithIndexF = traverseWithIndex(F);
  return function(ta, f) {
    return pipe(ta, traverseWithIndexF(f));
  };
};
var altW = function(that) {
  return function(as2) {
    return pipe(as2, concatW(that()));
  };
};
var alt = altW;
var ap2 = function(as2) {
  return flatMap(function(f) {
    return pipe(as2, map(f));
  });
};
var flatMap = dual(2, function(ma, f) {
  return pipe(ma, chainWithIndex(function(i, a) {
    return f(a, i);
  }));
});
var extend = function(f) {
  return function(as2) {
    var next = tail3(as2);
    var out = [f(as2)];
    while (isNonEmpty3(next)) {
      out.push(f(next));
      next = tail3(next);
    }
    return out;
  };
};
var duplicate = extend(identity);
var flatten = flatMap(identity);
var map = function(f) {
  return mapWithIndex(function(_, a) {
    return f(a);
  });
};
var mapWithIndex = function(f) {
  return function(as2) {
    var out = [f(0, head3(as2))];
    for (var i = 1;i < as2.length; i++) {
      out.push(f(i, as2[i]));
    }
    return out;
  };
};
var reduce2 = reduce;
var reduceWithIndex2 = reduceWithIndex;
var reduceRight2 = reduceRight;
var reduceRightWithIndex2 = reduceRightWithIndex;
var traverse = function(F) {
  var traverseWithIndexF = traverseWithIndex(F);
  return function(f) {
    return traverseWithIndexF(function(_, a) {
      return f(a);
    });
  };
};
var sequence = function(F) {
  return traverseWithIndex(F)(function(_, a) {
    return a;
  });
};
var traverseWithIndex = function(F) {
  return function(f) {
    return function(as2) {
      var out = F.map(f(0, head3(as2)), of2);
      for (var i = 1;i < as2.length; i++) {
        out = F.ap(F.map(out, function(bs) {
          return function(b) {
            return pipe(bs, append2(b));
          };
        }), f(i, as2[i]));
      }
      return out;
    };
  };
};
var extract2 = head2;
var URI2 = "NonEmptyArray";
var getShow2 = getShow;
var getSemigroup4 = function() {
  return {
    concat: concat2
  };
};
var getEq2 = getEq;
var getUnionSemigroup = function(E) {
  var unionE = union2(E);
  return {
    concat: function(first2, second) {
      return unionE(second)(first2);
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
  of: of2
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
  of: of2
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
  of: of2,
  chain: flatMap
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
  traverse: _traverse,
  sequence,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverseWithIndex: _traverseWithIndex
};
var Alt = {
  URI: URI2,
  map: _map,
  alt: _alt
};
var Comonad = {
  URI: URI2,
  map: _map,
  extend: _extend,
  extract: extract2
};
var Do = of2(emptyRecord);
var bindTo2 = bindTo(Functor2);
var let_2 = let_(Functor2);
var bind2 = bind(Chain3);
var apS2 = apS(Apply3);
var head3 = head2;
var tail3 = function(as2) {
  return as2.slice(1);
};
var last3 = last2;
var init2 = function(as2) {
  return as2.slice(0, -1);
};
var min4 = min3;
var max4 = max3;
var concatAll4 = function(S) {
  return function(as2) {
    return as2.reduce(S.concat);
  };
};
var matchLeft = function(f) {
  return function(as2) {
    return f(head3(as2), tail3(as2));
  };
};
var matchRight = function(f) {
  return function(as2) {
    return f(init2(as2), last3(as2));
  };
};
var modifyHead = function(f) {
  return function(as2) {
    return __spreadArray4([f(head3(as2))], tail3(as2), true);
  };
};
var updateHead = function(a) {
  return modifyHead(function() {
    return a;
  });
};
var modifyLast = function(f) {
  return function(as2) {
    return pipe(init2(as2), append2(f(last3(as2))));
  };
};
var updateLast = function(a) {
  return modifyLast(function() {
    return a;
  });
};
var intercalate2 = intercalate;
var chain = flatMap;
var filterWithIndex = function(predicate) {
  return function(as2) {
    return fromArray(as2.filter(function(a, i) {
      return predicate(i, a);
    }));
  };
};
var uncons = unprepend;
var unsnoc = unappend;
var snoc2 = function(init3, end) {
  return pipe(init3, append2(end));
};
var prependToAll = prependAll2;
var fold = concatAll3;
var nonEmptyArray = {
  URI: URI2,
  of: of2,
  map: _map,
  mapWithIndex: _mapWithIndex,
  ap: _ap,
  chain: flatMap,
  extend: _extend,
  extract: extract2,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverseWithIndex: _traverseWithIndex,
  alt: _alt
};

// node_modules/fp-ts/es6/ReadonlyArray.js
var exports_ReadonlyArray = {};
__export(exports_ReadonlyArray, {
  zipWith: () => {
    {
      return zipWith2;
    }
  },
  zip: () => {
    {
      return zip2;
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
      return updateAt2;
    }
  },
  unzip: () => {
    {
      return unzip2;
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
      return traverseWithIndex2;
    }
  },
  traverse: () => {
    {
      return traverse2;
    }
  },
  toArray: () => {
    {
      return toArray;
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
      return sequence2;
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
      return replicate2;
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
  readonlyArray: () => {
    {
      return readonlyArray;
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
      return prependToAll2;
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
      return modifyAt2;
    }
  },
  matchW: () => {
    {
      return matchW;
    }
  },
  matchRightW: () => {
    {
      return matchRightW;
    }
  },
  matchRight: () => {
    {
      return matchRight2;
    }
  },
  matchLeftW: () => {
    {
      return matchLeftW;
    }
  },
  matchLeft: () => {
    {
      return matchLeft2;
    }
  },
  match: () => {
    {
      return match;
    }
  },
  mapWithIndex: () => {
    {
      return mapWithIndex2;
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
      return lookup;
    }
  },
  let: () => {
    {
      return let_3;
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
      return isOutOfBound3;
    }
  },
  isNonEmpty: () => {
    {
      return isNonEmpty4;
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
      return head4;
    }
  },
  guard: () => {
    {
      return guard2;
    }
  },
  getUnionSemigroup: () => {
    {
      return getUnionSemigroup2;
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
      return getSemigroup5;
    }
  },
  getOrd: () => {
    {
      return getOrd;
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
  fromArray: () => {
    {
      return fromArray2;
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
  findLastMap: () => {
    {
      return findLastMap;
    }
  },
  findLastIndex: () => {
    {
      return findLastIndex;
    }
  },
  findLast: () => {
    {
      return findLast;
    }
  },
  findIndex: () => {
    {
      return findIndex;
    }
  },
  findFirstMap: () => {
    {
      return findFirstMap;
    }
  },
  findFirst: () => {
    {
      return findFirst;
    }
  },
  filterWithIndex: () => {
    {
      return filterWithIndex2;
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
      return exists;
    }
  },
  every: () => {
    {
      return every;
    }
  },
  empty: () => {
    {
      return empty3;
    }
  },
  elem: () => {
    {
      return elem;
    }
  },
  duplicate: () => {
    {
      return duplicate2;
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
  cons: () => {
    {
      return cons3;
    }
  },
  concatW: () => {
    {
      return concatW2;
    }
  },
  concat: () => {
    {
      return concat3;
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
      return chainWithIndex2;
    }
  },
  chainRecDepthFirst: () => {
    {
      return chainRecDepthFirst;
    }
  },
  chainRecBreadthFirst: () => {
    {
      return chainRecBreadthFirst;
    }
  },
  chainFirst: () => {
    {
      return chainFirst3;
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
  _chainRecDepthFirst: () => {
    {
      return _chainRecDepthFirst;
    }
  },
  _chainRecBreadthFirst: () => {
    {
      return _chainRecBreadthFirst;
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
      return TraversableWithIndex2;
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
  Monad: () => {
    {
      return Monad2;
    }
  },
  FunctorWithIndex: () => {
    {
      return FunctorWithIndex2;
    }
  },
  Functor: () => {
    {
      return Functor4;
    }
  },
  FromEither: () => {
    {
      return FromEither2;
    }
  },
  FoldableWithIndex: () => {
    {
      return FoldableWithIndex2;
    }
  },
  Foldable: () => {
    {
      return Foldable2;
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
      return Do2;
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
      return Chain5;
    }
  },
  Apply: () => {
    {
      return Apply5;
    }
  },
  Applicative: () => {
    {
      return Applicative2;
    }
  },
  Alternative: () => {
    {
      return Alternative;
    }
  },
  Alt: () => {
    {
      return Alt2;
    }
  }
});

// node_modules/fp-ts/es6/number.js
var Eq3 = {
  equals: function(first2, second) {
    return first2 === second;
  }
};
var Ord3 = {
  equals: Eq3.equals,
  compare: function(first2, second) {
    return first2 < second ? -1 : first2 > second ? 1 : 0;
  }
};
var Bounded = {
  equals: Eq3.equals,
  compare: Ord3.compare,
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
function fromPredicate(predicate) {
  return function(a) {
    return predicate(a) ? [a] : empty3;
  };
}
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
function spanLeft(predicate) {
  return function(as2) {
    var _a = splitAt3(spanLeftIndex(as2, predicate))(as2), init3 = _a[0], rest = _a[1];
    return { init: init3, rest };
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
function zip2(as2, bs) {
  if (bs === undefined) {
    return function(bs2) {
      return zip2(bs2, as2);
    };
  }
  return zipWith2(as2, bs, function(a, b) {
    return [a, b];
  });
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
function comprehension(input, f, g) {
  if (g === undefined) {
    g = function() {
      return true;
    };
  }
  var go = function(scope, input2) {
    return isNonEmpty4(input2) ? flatMap2(head2(input2), function(a) {
      return go(pipe(scope, append3(a)), tail2(input2));
    }) : g.apply(undefined, scope) ? [f.apply(undefined, scope)] : empty3;
  };
  return go(empty3, input);
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
    return isNonEmpty4(first2) && isNonEmpty4(second) ? unionE(second)(first2) : isNonEmpty4(first2) ? first2 : second;
  };
}
function intersection(E) {
  var elemE = elem(E);
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
  var elemE = elem(E);
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
var isEmpty = function(as2) {
  return as2.length === 0;
};
var isNonEmpty4 = isNonEmpty2;
var prepend3 = prepend;
var prependW3 = prependW;
var append3 = append;
var appendW3 = appendW;
var makeBy3 = function(n, f) {
  return n <= 0 ? empty3 : makeBy(f)(n);
};
var replicate2 = function(n, a) {
  return makeBy3(n, function() {
    return a;
  });
};
var fromOption = function(ma) {
  return isNone(ma) ? empty3 : [ma.value];
};
var fromEither = function(e) {
  return isLeft(e) ? empty3 : [e.right];
};
var matchW = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty4(as2) ? onNonEmpty(as2) : onEmpty();
  };
};
var match = matchW;
var matchLeftW = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty4(as2) ? onNonEmpty(head2(as2), tail2(as2)) : onEmpty();
  };
};
var matchLeft2 = matchLeftW;
var foldLeft = matchLeft2;
var matchRightW = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty4(as2) ? onNonEmpty(init(as2), last2(as2)) : onEmpty();
  };
};
var matchRight2 = matchRightW;
var foldRight = matchRight2;
var chainWithIndex2 = function(f) {
  return function(as2) {
    if (isEmpty(as2)) {
      return empty3;
    }
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
var isOutOfBound3 = isOutOfBound;
var head4 = function(as2) {
  return isNonEmpty4(as2) ? some(head2(as2)) : none;
};
var last4 = function(as2) {
  return isNonEmpty4(as2) ? some(last2(as2)) : none;
};
var tail4 = function(as2) {
  return isNonEmpty4(as2) ? some(tail2(as2)) : none;
};
var init3 = function(as2) {
  return isNonEmpty4(as2) ? some(init(as2)) : none;
};
var takeLeft = function(n) {
  return function(as2) {
    return isOutOfBound3(n, as2) ? as2 : n === 0 ? empty3 : as2.slice(0, n);
  };
};
var takeRight = function(n) {
  return function(as2) {
    return isOutOfBound3(n, as2) ? as2 : n === 0 ? empty3 : as2.slice(-n);
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
    return n <= 0 || isEmpty(as2) ? as2 : n >= as2.length ? empty3 : as2.slice(n, as2.length);
  };
};
var dropRight = function(n) {
  return function(as2) {
    return n <= 0 || isEmpty(as2) ? as2 : n >= as2.length ? empty3 : as2.slice(0, as2.length - n);
  };
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
var insertAt2 = function(i, a) {
  return function(as2) {
    return i < 0 || i > as2.length ? none : some(unsafeInsertAt(i, a, as2));
  };
};
var updateAt2 = function(i, a) {
  return modifyAt2(i, function() {
    return a;
  });
};
var deleteAt = function(i) {
  return function(as2) {
    return isOutOfBound3(i, as2) ? none : some(unsafeDeleteAt(i, as2));
  };
};
var modifyAt2 = function(i, f) {
  return function(as2) {
    return isOutOfBound3(i, as2) ? none : some(unsafeUpdateAt3(i, f(as2[i]), as2));
  };
};
var reverse3 = function(as2) {
  return as2.length <= 1 ? as2 : as2.slice().reverse();
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
    return as2.length <= 1 ? as2 : as2.slice().sort(O.compare);
  };
};
var zipWith2 = function(fa, fb, f) {
  var fc = [];
  var len = Math.min(fa.length, fb.length);
  for (var i = 0;i < len; i++) {
    fc[i] = f(fa[i], fb[i]);
  }
  return fc;
};
var unzip2 = function(as2) {
  var fa = [];
  var fb = [];
  for (var i = 0;i < as2.length; i++) {
    fa[i] = as2[i][0];
    fb[i] = as2[i][1];
  }
  return [fa, fb];
};
var prependAll3 = function(middle) {
  var f = prependAll(middle);
  return function(as2) {
    return isNonEmpty4(as2) ? f(as2) : as2;
  };
};
var intersperse3 = function(middle) {
  var f = intersperse(middle);
  return function(as2) {
    return isNonEmpty4(as2) ? f(as2) : as2;
  };
};
var rotate3 = function(n) {
  var f = rotate(n);
  return function(as2) {
    return isNonEmpty4(as2) ? f(as2) : as2;
  };
};
var uniq3 = function(E) {
  var f = uniq(E);
  return function(as2) {
    return isNonEmpty4(as2) ? f(as2) : as2;
  };
};
var sortBy3 = function(ords) {
  var f = sortBy(ords);
  return function(as2) {
    return isNonEmpty4(as2) ? f(as2) : as2;
  };
};
var chop3 = function(f) {
  var g = chop(f);
  return function(as2) {
    return isNonEmpty4(as2) ? g(as2) : empty3;
  };
};
var splitAt3 = function(n) {
  return function(as2) {
    return n >= 1 && isNonEmpty4(as2) ? splitAt(n)(as2) : isEmpty(as2) ? [as2, empty3] : [empty3, as2];
  };
};
var chunksOf3 = function(n) {
  var f = chunksOf(n);
  return function(as2) {
    return isNonEmpty4(as2) ? f(as2) : empty3;
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
var concatW2 = function(second) {
  return function(first2) {
    return isEmpty(first2) ? second : isEmpty(second) ? first2 : first2.concat(second);
  };
};
var concat3 = concatW2;
var _map2 = function(fa, f) {
  return pipe(fa, map2(f));
};
var _mapWithIndex2 = function(fa, f) {
  return pipe(fa, mapWithIndex2(f));
};
var _ap2 = function(fab, fa) {
  return pipe(fab, ap3(fa));
};
var _filter = function(fa, predicate) {
  return pipe(fa, filter2(predicate));
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
var _alt2 = function(fa, that) {
  return pipe(fa, alt2(that));
};
var _reduce2 = function(fa, b, f) {
  return pipe(fa, reduce3(b, f));
};
var _foldMap2 = function(M) {
  var foldMapM = foldMap3(M);
  return function(fa, f) {
    return pipe(fa, foldMapM(f));
  };
};
var _reduceRight2 = function(fa, b, f) {
  return pipe(fa, reduceRight3(b, f));
};
var _reduceWithIndex2 = function(fa, b, f) {
  return pipe(fa, reduceWithIndex3(b, f));
};
var _foldMapWithIndex2 = function(M) {
  var foldMapWithIndexM = foldMapWithIndex3(M);
  return function(fa, f) {
    return pipe(fa, foldMapWithIndexM(f));
  };
};
var _reduceRightWithIndex2 = function(fa, b, f) {
  return pipe(fa, reduceRightWithIndex3(b, f));
};
var _filterMapWithIndex = function(fa, f) {
  return pipe(fa, filterMapWithIndex(f));
};
var _filterWithIndex = function(fa, predicateWithIndex) {
  return pipe(fa, filterWithIndex2(predicateWithIndex));
};
var _extend2 = function(fa, f) {
  return pipe(fa, extend2(f));
};
var _traverse2 = function(F) {
  var traverseF = traverse2(F);
  return function(ta, f) {
    return pipe(ta, traverseF(f));
  };
};
var _traverseWithIndex2 = function(F) {
  var traverseWithIndexF = traverseWithIndex2(F);
  return function(ta, f) {
    return pipe(ta, traverseWithIndexF(f));
  };
};
var _chainRecDepthFirst = function(a, f) {
  return pipe(a, chainRecDepthFirst(f));
};
var _chainRecBreadthFirst = function(a, f) {
  return pipe(a, chainRecBreadthFirst(f));
};
var of3 = of;
var zero = function() {
  return empty3;
};
var altW2 = function(that) {
  return function(fa) {
    return fa.concat(that());
  };
};
var alt2 = altW2;
var ap3 = function(fa) {
  return flatMap2(function(f) {
    return pipe(fa, map2(f));
  });
};
var flatMap2 = dual(2, function(ma, f) {
  return pipe(ma, chainWithIndex2(function(i, a) {
    return f(a, i);
  }));
});
var flatten2 = flatMap2(identity);
var map2 = function(f) {
  return function(fa) {
    return fa.map(function(a) {
      return f(a);
    });
  };
};
var mapWithIndex2 = function(f) {
  return function(fa) {
    return fa.map(function(a, i) {
      return f(i, a);
    });
  };
};
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
var filter2 = function(predicate) {
  return function(as2) {
    return as2.filter(predicate);
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
      var a = as2[i];
      if (predicateWithIndex(i, a)) {
        right.push(a);
      } else {
        left.push(a);
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
var filterWithIndex2 = function(predicateWithIndex) {
  return function(as2) {
    return as2.filter(function(a, i) {
      return predicateWithIndex(i, a);
    });
  };
};
var extend2 = function(f) {
  return function(wa) {
    return wa.map(function(_, i) {
      return f(wa.slice(i));
    });
  };
};
var duplicate2 = extend2(identity);
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
var traverse2 = function(F) {
  var traverseWithIndexF = traverseWithIndex2(F);
  return function(f) {
    return traverseWithIndexF(function(_, a) {
      return f(a);
    });
  };
};
var sequence2 = function(F) {
  return function(ta) {
    return _reduce2(ta, F.of(zero()), function(fas, fa) {
      return F.ap(F.map(fas, function(as2) {
        return function(a) {
          return pipe(as2, append3(a));
        };
      }), fa);
    });
  };
};
var traverseWithIndex2 = function(F) {
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
var URI3 = "ReadonlyArray";
var getShow3 = function(S) {
  return {
    show: function(as2) {
      return "[".concat(as2.map(S.show).join(", "), "]");
    }
  };
};
var getSemigroup5 = function() {
  return {
    concat: function(first2, second) {
      return isEmpty(first2) ? second : isEmpty(second) ? first2 : first2.concat(second);
    }
  };
};
var getMonoid4 = function() {
  return {
    concat: getSemigroup5().concat,
    empty: empty3
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
    return Ord3.compare(aLen, bLen);
  });
};
var getUnionSemigroup2 = function(E) {
  var unionE = union3(E);
  return {
    concat: function(first2, second) {
      return unionE(second)(first2);
    }
  };
};
var getUnionMonoid = function(E) {
  return {
    concat: getUnionSemigroup2(E).concat,
    empty: empty3
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
var Functor4 = {
  URI: URI3,
  map: _map2
};
var flap3 = flap(Functor4);
var Pointed2 = {
  URI: URI3,
  of: of3
};
var FunctorWithIndex2 = {
  URI: URI3,
  map: _map2,
  mapWithIndex: _mapWithIndex2
};
var Apply5 = {
  URI: URI3,
  map: _map2,
  ap: _ap2
};
var apFirst3 = apFirst(Apply5);
var apSecond3 = apSecond(Apply5);
var Applicative2 = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  of: of3
};
var Chain5 = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  chain: flatMap2
};
var Monad2 = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  of: of3,
  chain: flatMap2
};
var chainFirst3 = chainFirst(Chain5);
var Unfoldable = {
  URI: URI3,
  unfold
};
var Alt2 = {
  URI: URI3,
  map: _map2,
  alt: _alt2
};
var Zero2 = {
  URI: URI3,
  zero
};
var guard2 = guard(Zero2, Pointed2);
var Alternative = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  of: of3,
  alt: _alt2,
  zero
};
var Extend = {
  URI: URI3,
  map: _map2,
  extend: _extend2
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
  mapWithIndex: _mapWithIndex2,
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
var Foldable2 = {
  URI: URI3,
  reduce: _reduce2,
  foldMap: _foldMap2,
  reduceRight: _reduceRight2
};
var FoldableWithIndex2 = {
  URI: URI3,
  reduce: _reduce2,
  foldMap: _foldMap2,
  reduceRight: _reduceRight2,
  reduceWithIndex: _reduceWithIndex2,
  foldMapWithIndex: _foldMapWithIndex2,
  reduceRightWithIndex: _reduceRightWithIndex2
};
var Traversable2 = {
  URI: URI3,
  map: _map2,
  reduce: _reduce2,
  foldMap: _foldMap2,
  reduceRight: _reduceRight2,
  traverse: _traverse2,
  sequence: sequence2
};
var TraversableWithIndex2 = {
  URI: URI3,
  map: _map2,
  mapWithIndex: _mapWithIndex2,
  reduce: _reduce2,
  foldMap: _foldMap2,
  reduceRight: _reduceRight2,
  reduceWithIndex: _reduceWithIndex2,
  foldMapWithIndex: _foldMapWithIndex2,
  reduceRightWithIndex: _reduceRightWithIndex2,
  traverse: _traverse2,
  sequence: sequence2,
  traverseWithIndex: _traverseWithIndex2
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
var ChainRecDepthFirst = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  chain: flatMap2,
  chainRec: _chainRecDepthFirst
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
var ChainRecBreadthFirst = {
  URI: URI3,
  map: _map2,
  ap: _ap2,
  chain: flatMap2,
  chainRec: _chainRecBreadthFirst
};
var _wither = witherDefault(Traversable2, Compactable);
var _wilt = wiltDefault(Traversable2, Compactable);
var Witherable2 = {
  URI: URI3,
  map: _map2,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  reduce: _reduce2,
  foldMap: _foldMap2,
  reduceRight: _reduceRight2,
  traverse: _traverse2,
  sequence: sequence2,
  wither: _wither,
  wilt: _wilt
};
var filterE2 = filterE(Witherable2);
var FromEither2 = {
  URI: URI3,
  fromEither
};
var fromEitherK2 = fromEitherK(FromEither2);
var unsafeInsertAt3 = unsafeInsertAt;
var unsafeUpdateAt3 = function(i, a, as2) {
  return isNonEmpty4(as2) ? unsafeUpdateAt(i, a, as2) : as2;
};
var unsafeDeleteAt = function(i, as2) {
  var xs = as2.slice();
  xs.splice(i, 1);
  return xs;
};
var toArray = function(as2) {
  return as2.slice();
};
var fromArray2 = function(as2) {
  return isEmpty(as2) ? empty3 : as2.slice();
};
var empty3 = empty2;
var some2 = function(predicate) {
  return function(as2) {
    return as2.some(predicate);
  };
};
var exists = some2;
var intercalate3 = function(M) {
  var intercalateM = intercalate(M);
  return function(middle) {
    return match(function() {
      return M.empty;
    }, intercalateM(middle));
  };
};
var Do2 = of3(emptyRecord);
var bindTo3 = bindTo(Functor4);
var let_3 = let_(Functor4);
var bind3 = bind(Chain5);
var apS3 = apS(Apply5);
var chain2 = flatMap2;
var range3 = range;
var cons3 = cons;
var snoc3 = snoc;
var prependToAll2 = prependAll3;
var readonlyArray = {
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
  mapWithIndex: _mapWithIndex2,
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex,
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex,
  alt: _alt2,
  zero,
  unfold,
  reduce: _reduce2,
  foldMap: _foldMap2,
  reduceRight: _reduceRight2,
  traverse: _traverse2,
  sequence: sequence2,
  reduceWithIndex: _reduceWithIndex2,
  foldMapWithIndex: _foldMapWithIndex2,
  reduceRightWithIndex: _reduceRightWithIndex2,
  traverseWithIndex: _traverseWithIndex2,
  extend: _extend2,
  wither: _wither,
  wilt: _wilt
};

// node_modules/fp-ts/es6/Array.js
function fromPredicate2(predicate) {
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
function spanLeft2(predicate) {
  return function(as2) {
    var _a = splitAt4(spanLeftIndex2(as2, predicate))(as2), init4 = _a[0], rest = _a[1];
    return { init: init4, rest };
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
function zip3(as2, bs) {
  if (bs === undefined) {
    return function(bs2) {
      return zip3(bs2, as2);
    };
  }
  return zipWith3(as2, bs, function(a, b) {
    return [a, b];
  });
}
function comprehension2(input, f, g) {
  if (g === undefined) {
    g = function() {
      return true;
    };
  }
  var go = function(scope, input2) {
    return isNonEmpty5(input2) ? flatMap3(head3(input2), function(a) {
      return go(pipe(scope, append4(a)), tail3(input2));
    }) : g.apply(undefined, scope) ? [f.apply(undefined, scope)] : [];
  };
  return go([], input);
}
function union4(E) {
  var unionE = union2(E);
  return function(first2, second) {
    if (second === undefined) {
      var unionE_1 = union4(E);
      return function(second2) {
        return unionE_1(second2, first2);
      };
    }
    return isNonEmpty5(first2) && isNonEmpty5(second) ? unionE(second)(first2) : isNonEmpty5(first2) ? copy2(first2) : copy2(second);
  };
}
function intersection2(E) {
  var elemE = elem2(E);
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
  var elemE = elem2(E);
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
var isEmpty2 = function(as2) {
  return as2.length === 0;
};
var isNonEmpty5 = isNonEmpty3;
var prepend4 = prepend2;
var prependW4 = prependW2;
var append4 = append2;
var appendW4 = appendW2;
var makeBy4 = function(n, f) {
  return n <= 0 ? [] : makeBy2(f)(n);
};
var replicate3 = function(n, a) {
  return makeBy4(n, function() {
    return a;
  });
};
var fromOption2 = function(ma) {
  return isNone(ma) ? [] : [ma.value];
};
var fromEither2 = function(e) {
  return isLeft(e) ? [] : [e.right];
};
var matchW2 = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty5(as2) ? onNonEmpty(as2) : onEmpty();
  };
};
var match2 = matchW2;
var matchLeftW2 = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty5(as2) ? onNonEmpty(head3(as2), tail3(as2)) : onEmpty();
  };
};
var matchLeft3 = matchLeftW2;
var foldLeft2 = matchLeft3;
var matchRightW2 = function(onEmpty, onNonEmpty) {
  return function(as2) {
    return isNonEmpty5(as2) ? onNonEmpty(init2(as2), last3(as2)) : onEmpty();
  };
};
var matchRight3 = matchRightW2;
var foldRight2 = matchRight3;
var chainWithIndex3 = function(f) {
  return function(as2) {
    var out = [];
    for (var i = 0;i < as2.length; i++) {
      out.push.apply(out, f(i, as2[i]));
    }
    return out;
  };
};
var scanLeft2 = function(b, f) {
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
var scanRight2 = function(b, f) {
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
var size2 = function(as2) {
  return as2.length;
};
var isOutOfBound4 = isOutOfBound2;
var lookup2 = lookup;
var head5 = head4;
var last5 = last4;
var tail5 = function(as2) {
  return isNonEmpty5(as2) ? some(tail3(as2)) : none;
};
var init4 = function(as2) {
  return isNonEmpty5(as2) ? some(init2(as2)) : none;
};
var takeLeft2 = function(n) {
  return function(as2) {
    return isOutOfBound4(n, as2) ? copy2(as2) : as2.slice(0, n);
  };
};
var takeRight2 = function(n) {
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
var dropLeft2 = function(n) {
  return function(as2) {
    return n <= 0 || isEmpty2(as2) ? copy2(as2) : n >= as2.length ? [] : as2.slice(n, as2.length);
  };
};
var dropRight2 = function(n) {
  return function(as2) {
    return n <= 0 || isEmpty2(as2) ? copy2(as2) : n >= as2.length ? [] : as2.slice(0, as2.length - n);
  };
};
var findIndex2 = findIndex;
var findFirstMap2 = findFirstMap;
var findLastMap2 = findLastMap;
var findLastIndex2 = findLastIndex;
var copy2 = function(as2) {
  return as2.slice();
};
var insertAt3 = function(i, a) {
  return function(as2) {
    return i < 0 || i > as2.length ? none : some(unsafeInsertAt4(i, a, as2));
  };
};
var updateAt3 = function(i, a) {
  return modifyAt3(i, function() {
    return a;
  });
};
var deleteAt2 = function(i) {
  return function(as2) {
    return isOutOfBound4(i, as2) ? none : some(unsafeDeleteAt2(i, as2));
  };
};
var modifyAt3 = function(i, f) {
  return function(as2) {
    return isOutOfBound4(i, as2) ? none : some(unsafeUpdateAt4(i, f(as2[i]), as2));
  };
};
var reverse4 = function(as2) {
  return isEmpty2(as2) ? [] : as2.slice().reverse();
};
var rights2 = function(as2) {
  var r = [];
  for (var i = 0;i < as2.length; i++) {
    var a = as2[i];
    if (a._tag === "Right") {
      r.push(a.right);
    }
  }
  return r;
};
var lefts2 = function(as2) {
  var r = [];
  for (var i = 0;i < as2.length; i++) {
    var a = as2[i];
    if (a._tag === "Left") {
      r.push(a.left);
    }
  }
  return r;
};
var sort4 = function(O) {
  return function(as2) {
    return as2.length <= 1 ? copy2(as2) : as2.slice().sort(O.compare);
  };
};
var zipWith3 = function(fa, fb, f) {
  var fc = [];
  var len = Math.min(fa.length, fb.length);
  for (var i = 0;i < len; i++) {
    fc[i] = f(fa[i], fb[i]);
  }
  return fc;
};
var unzip3 = function(as2) {
  var fa = [];
  var fb = [];
  for (var i = 0;i < as2.length; i++) {
    fa[i] = as2[i][0];
    fb[i] = as2[i][1];
  }
  return [fa, fb];
};
var prependAll4 = function(middle) {
  var f = prependAll2(middle);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : [];
  };
};
var intersperse4 = function(middle) {
  var f = intersperse2(middle);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : copy2(as2);
  };
};
var rotate4 = function(n) {
  var f = rotate2(n);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : copy2(as2);
  };
};
var elem2 = elem;
var uniq4 = function(E) {
  var f = uniq2(E);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : copy2(as2);
  };
};
var sortBy4 = function(ords) {
  var f = sortBy2(ords);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : copy2(as2);
  };
};
var chop4 = function(f) {
  var g = chop2(f);
  return function(as2) {
    return isNonEmpty5(as2) ? g(as2) : [];
  };
};
var splitAt4 = function(n) {
  return function(as2) {
    return n >= 1 && isNonEmpty5(as2) ? splitAt2(n)(as2) : isEmpty2(as2) ? [copy2(as2), []] : [[], copy2(as2)];
  };
};
var chunksOf4 = function(n) {
  var f = chunksOf2(n);
  return function(as2) {
    return isNonEmpty5(as2) ? f(as2) : [];
  };
};
var fromOptionK2 = function(f) {
  return function() {
    var a = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      a[_i] = arguments[_i];
    }
    return fromOption2(f.apply(undefined, a));
  };
};
var concatW3 = function(second) {
  return function(first2) {
    return isEmpty2(first2) ? copy2(second) : isEmpty2(second) ? copy2(first2) : first2.concat(second);
  };
};
var concat4 = concatW3;
var _map3 = function(fa, f) {
  return pipe(fa, map3(f));
};
var _mapWithIndex3 = function(fa, f) {
  return pipe(fa, mapWithIndex3(f));
};
var _ap3 = function(fab, fa) {
  return pipe(fab, ap4(fa));
};
var _filter2 = function(fa, predicate) {
  return pipe(fa, filter3(predicate));
};
var _filterMap2 = function(fa, f) {
  return pipe(fa, filterMap2(f));
};
var _partition2 = function(fa, predicate) {
  return pipe(fa, partition2(predicate));
};
var _partitionMap2 = function(fa, f) {
  return pipe(fa, partitionMap2(f));
};
var _partitionWithIndex2 = function(fa, predicateWithIndex) {
  return pipe(fa, partitionWithIndex2(predicateWithIndex));
};
var _partitionMapWithIndex2 = function(fa, f) {
  return pipe(fa, partitionMapWithIndex2(f));
};
var _alt3 = function(fa, that) {
  return pipe(fa, alt3(that));
};
var _reduce3 = function(fa, b, f) {
  return pipe(fa, reduce4(b, f));
};
var _foldMap3 = function(M) {
  var foldMapM = foldMap4(M);
  return function(fa, f) {
    return pipe(fa, foldMapM(f));
  };
};
var _reduceRight3 = function(fa, b, f) {
  return pipe(fa, reduceRight4(b, f));
};
var _reduceWithIndex3 = function(fa, b, f) {
  return pipe(fa, reduceWithIndex4(b, f));
};
var _foldMapWithIndex3 = function(M) {
  var foldMapWithIndexM = foldMapWithIndex4(M);
  return function(fa, f) {
    return pipe(fa, foldMapWithIndexM(f));
  };
};
var _reduceRightWithIndex3 = function(fa, b, f) {
  return pipe(fa, reduceRightWithIndex4(b, f));
};
var _filterMapWithIndex2 = function(fa, f) {
  return pipe(fa, filterMapWithIndex2(f));
};
var _filterWithIndex2 = function(fa, predicateWithIndex) {
  return pipe(fa, filterWithIndex3(predicateWithIndex));
};
var _extend3 = function(fa, f) {
  return pipe(fa, extend3(f));
};
var _traverse3 = function(F) {
  var traverseF = traverse3(F);
  return function(ta, f) {
    return pipe(ta, traverseF(f));
  };
};
var _traverseWithIndex3 = function(F) {
  var traverseWithIndexF = traverseWithIndex3(F);
  return function(ta, f) {
    return pipe(ta, traverseWithIndexF(f));
  };
};
var _chainRecDepthFirst2 = _chainRecDepthFirst;
var _chainRecBreadthFirst2 = _chainRecBreadthFirst;
var of4 = of2;
var zero2 = function() {
  return [];
};
var map3 = function(f) {
  return function(fa) {
    return fa.map(function(a) {
      return f(a);
    });
  };
};
var ap4 = function(fa) {
  return flatMap3(function(f) {
    return pipe(fa, map3(f));
  });
};
var flatMap3 = dual(2, function(ma, f) {
  return pipe(ma, chainWithIndex3(function(i, a) {
    return f(a, i);
  }));
});
var flatten3 = flatMap3(identity);
var mapWithIndex3 = function(f) {
  return function(fa) {
    return fa.map(function(a, i) {
      return f(i, a);
    });
  };
};
var filterMapWithIndex2 = function(f) {
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
var filterMap2 = function(f) {
  return filterMapWithIndex2(function(_, a) {
    return f(a);
  });
};
var compact2 = filterMap2(identity);
var separate2 = function(fa) {
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
var filter3 = function(predicate) {
  return function(as2) {
    return as2.filter(predicate);
  };
};
var partition2 = function(predicate) {
  return partitionWithIndex2(function(_, a) {
    return predicate(a);
  });
};
var partitionWithIndex2 = function(predicateWithIndex) {
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
var partitionMap2 = function(f) {
  return partitionMapWithIndex2(function(_, a) {
    return f(a);
  });
};
var partitionMapWithIndex2 = function(f) {
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
var altW3 = function(that) {
  return function(fa) {
    return fa.concat(that());
  };
};
var alt3 = altW3;
var filterWithIndex3 = function(predicateWithIndex) {
  return function(as2) {
    return as2.filter(function(b, i) {
      return predicateWithIndex(i, b);
    });
  };
};
var extend3 = function(f) {
  return function(wa) {
    return wa.map(function(_, i) {
      return f(wa.slice(i));
    });
  };
};
var duplicate3 = extend3(identity);
var foldMap4 = foldMap3;
var foldMapWithIndex4 = foldMapWithIndex3;
var reduce4 = reduce3;
var reduceWithIndex4 = reduceWithIndex3;
var reduceRight4 = reduceRight3;
var reduceRightWithIndex4 = reduceRightWithIndex3;
var traverse3 = function(F) {
  var traverseWithIndexF = traverseWithIndex3(F);
  return function(f) {
    return traverseWithIndexF(function(_, a) {
      return f(a);
    });
  };
};
var sequence3 = function(F) {
  return function(ta) {
    return _reduce3(ta, F.of(zero2()), function(fas, fa) {
      return F.ap(F.map(fas, function(as2) {
        return function(a) {
          return pipe(as2, append4(a));
        };
      }), fa);
    });
  };
};
var traverseWithIndex3 = function(F) {
  return function(f) {
    return reduceWithIndex4(F.of(zero2()), function(i, fbs, a) {
      return F.ap(F.map(fbs, function(bs) {
        return function(b) {
          return pipe(bs, append4(b));
        };
      }), f(i, a));
    });
  };
};
var wither2 = function(F) {
  var _witherF = _wither2(F);
  return function(f) {
    return function(fa) {
      return _witherF(fa, f);
    };
  };
};
var wilt2 = function(F) {
  var _wiltF = _wilt2(F);
  return function(f) {
    return function(fa) {
      return _wiltF(fa, f);
    };
  };
};
var unfold2 = function(b, f) {
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
var URI4 = "Array";
var getShow4 = getShow3;
var getSemigroup6 = function() {
  return {
    concat: function(first2, second) {
      return first2.concat(second);
    }
  };
};
var getMonoid5 = function() {
  return {
    concat: getSemigroup6().concat,
    empty: []
  };
};
var getEq4 = getEq3;
var getOrd2 = getOrd;
var getUnionSemigroup3 = function(E) {
  var unionE = union4(E);
  return {
    concat: function(first2, second) {
      return unionE(second)(first2);
    }
  };
};
var getUnionMonoid2 = function(E) {
  return {
    concat: getUnionSemigroup3(E).concat,
    empty: []
  };
};
var getIntersectionSemigroup2 = function(E) {
  var intersectionE = intersection2(E);
  return {
    concat: function(first2, second) {
      return intersectionE(second)(first2);
    }
  };
};
var getDifferenceMagma2 = function(E) {
  var differenceE = difference2(E);
  return {
    concat: function(first2, second) {
      return differenceE(second)(first2);
    }
  };
};
var Functor6 = {
  URI: URI4,
  map: _map3
};
var flap4 = flap(Functor6);
var Pointed3 = {
  URI: URI4,
  of: of4
};
var FunctorWithIndex3 = {
  URI: URI4,
  map: _map3,
  mapWithIndex: _mapWithIndex3
};
var Apply7 = {
  URI: URI4,
  map: _map3,
  ap: _ap3
};
var apFirst4 = apFirst(Apply7);
var apSecond4 = apSecond(Apply7);
var Applicative3 = {
  URI: URI4,
  map: _map3,
  ap: _ap3,
  of: of4
};
var Chain7 = {
  URI: URI4,
  map: _map3,
  ap: _ap3,
  chain: flatMap3
};
var chainFirst4 = chainFirst(Chain7);
var Monad3 = {
  URI: URI4,
  map: _map3,
  ap: _ap3,
  of: of4,
  chain: flatMap3
};
var Unfoldable2 = {
  URI: URI4,
  unfold: unfold2
};
var Alt3 = {
  URI: URI4,
  map: _map3,
  alt: _alt3
};
var Zero4 = {
  URI: URI4,
  zero: zero2
};
var guard3 = guard(Zero4, Pointed3);
var Alternative2 = {
  URI: URI4,
  map: _map3,
  ap: _ap3,
  of: of4,
  alt: _alt3,
  zero: zero2
};
var Extend2 = {
  URI: URI4,
  map: _map3,
  extend: _extend3
};
var Compactable2 = {
  URI: URI4,
  compact: compact2,
  separate: separate2
};
var Filterable2 = {
  URI: URI4,
  map: _map3,
  compact: compact2,
  separate: separate2,
  filter: _filter2,
  filterMap: _filterMap2,
  partition: _partition2,
  partitionMap: _partitionMap2
};
var FilterableWithIndex2 = {
  URI: URI4,
  map: _map3,
  mapWithIndex: _mapWithIndex3,
  compact: compact2,
  separate: separate2,
  filter: _filter2,
  filterMap: _filterMap2,
  partition: _partition2,
  partitionMap: _partitionMap2,
  partitionMapWithIndex: _partitionMapWithIndex2,
  partitionWithIndex: _partitionWithIndex2,
  filterMapWithIndex: _filterMapWithIndex2,
  filterWithIndex: _filterWithIndex2
};
var Foldable3 = {
  URI: URI4,
  reduce: _reduce3,
  foldMap: _foldMap3,
  reduceRight: _reduceRight3
};
var FoldableWithIndex3 = {
  URI: URI4,
  reduce: _reduce3,
  foldMap: _foldMap3,
  reduceRight: _reduceRight3,
  reduceWithIndex: _reduceWithIndex3,
  foldMapWithIndex: _foldMapWithIndex3,
  reduceRightWithIndex: _reduceRightWithIndex3
};
var Traversable3 = {
  URI: URI4,
  map: _map3,
  reduce: _reduce3,
  foldMap: _foldMap3,
  reduceRight: _reduceRight3,
  traverse: _traverse3,
  sequence: sequence3
};
var TraversableWithIndex3 = {
  URI: URI4,
  map: _map3,
  mapWithIndex: _mapWithIndex3,
  reduce: _reduce3,
  foldMap: _foldMap3,
  reduceRight: _reduceRight3,
  reduceWithIndex: _reduceWithIndex3,
  foldMapWithIndex: _foldMapWithIndex3,
  reduceRightWithIndex: _reduceRightWithIndex3,
  traverse: _traverse3,
  sequence: sequence3,
  traverseWithIndex: _traverseWithIndex3
};
var _wither2 = witherDefault(Traversable3, Compactable2);
var _wilt2 = wiltDefault(Traversable3, Compactable2);
var Witherable4 = {
  URI: URI4,
  map: _map3,
  compact: compact2,
  separate: separate2,
  filter: _filter2,
  filterMap: _filterMap2,
  partition: _partition2,
  partitionMap: _partitionMap2,
  reduce: _reduce3,
  foldMap: _foldMap3,
  reduceRight: _reduceRight3,
  traverse: _traverse3,
  sequence: sequence3,
  wither: _wither2,
  wilt: _wilt2
};
var chainRecDepthFirst2 = chainRecDepthFirst;
var ChainRecDepthFirst2 = {
  URI: URI4,
  map: _map3,
  ap: _ap3,
  chain: flatMap3,
  chainRec: _chainRecDepthFirst2
};
var chainRecBreadthFirst2 = chainRecBreadthFirst;
var ChainRecBreadthFirst2 = {
  URI: URI4,
  map: _map3,
  ap: _ap3,
  chain: flatMap3,
  chainRec: _chainRecBreadthFirst2
};
var filterE3 = filterE(Witherable4);
var FromEither4 = {
  URI: URI4,
  fromEither: fromEither2
};
var fromEitherK3 = fromEitherK(FromEither4);
var unsafeInsertAt4 = unsafeInsertAt2;
var unsafeUpdateAt4 = function(i, a, as2) {
  return isNonEmpty5(as2) ? unsafeUpdateAt2(i, a, as2) : [];
};
var unsafeDeleteAt2 = function(i, as2) {
  var xs = as2.slice();
  xs.splice(i, 1);
  return xs;
};
var every2 = every;
var some3 = function(predicate) {
  return function(as2) {
    return as2.some(predicate);
  };
};
var exists2 = some3;
var intercalate4 = intercalate3;
var Do3 = of4(emptyRecord);
var bindTo4 = bindTo(Functor6);
var let_4 = let_(Functor6);
var bind4 = bind(Chain7);
var apS4 = apS(Apply7);
var chain3 = flatMap3;
var range4 = range2;
var empty4 = [];
var cons4 = cons2;
var snoc4 = snoc2;
var prependToAll3 = prependAll4;
var array = {
  URI: URI4,
  compact: compact2,
  separate: separate2,
  map: _map3,
  ap: _ap3,
  of: of4,
  chain: flatMap3,
  filter: _filter2,
  filterMap: _filterMap2,
  partition: _partition2,
  partitionMap: _partitionMap2,
  mapWithIndex: _mapWithIndex3,
  partitionMapWithIndex: _partitionMapWithIndex2,
  partitionWithIndex: _partitionWithIndex2,
  filterMapWithIndex: _filterMapWithIndex2,
  filterWithIndex: _filterWithIndex2,
  alt: _alt3,
  zero: zero2,
  unfold: unfold2,
  reduce: _reduce3,
  foldMap: _foldMap3,
  reduceRight: _reduceRight3,
  traverse: _traverse3,
  sequence: sequence3,
  reduceWithIndex: _reduceWithIndex3,
  foldMapWithIndex: _foldMapWithIndex3,
  reduceRightWithIndex: _reduceRightWithIndex3,
  traverseWithIndex: _traverseWithIndex3,
  extend: _extend3,
  wither: _wither2,
  wilt: _wilt2
};

// node_modules/fp-ts/es6/Predicate.js
var getSemigroupAny = function() {
  return {
    concat: function(first2, second) {
      return pipe(first2, or(second));
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
  return function(first2) {
    return function(a) {
      return first2(a) || second(a);
    };
  };
};

// node_modules/fp-ts/es6/Option.js
function fromPredicate3(predicate) {
  return function(a) {
    return predicate(a) ? some4(a) : none2;
  };
}
var none2 = none;
var some4 = some;
var getRight = function(ma) {
  return ma._tag === "Left" ? none2 : some4(ma.right);
};
var _map4 = function(fa, f) {
  return pipe(fa, map4(f));
};
var _ap4 = function(fab, fa) {
  return pipe(fab, ap5(fa));
};
var URI5 = "Option";
var getMonoid6 = function(S) {
  return {
    concat: function(x, y) {
      return isNone2(x) ? y : isNone2(y) ? x : some4(S.concat(x.value, y.value));
    },
    empty: none2
  };
};
var map4 = function(f) {
  return function(fa) {
    return isNone2(fa) ? none2 : some4(f(fa.value));
  };
};
var Functor8 = {
  URI: URI5,
  map: _map4
};
var as2 = dual(2, as(Functor8));
var asUnit2 = asUnit(Functor8);
var ap5 = function(fa) {
  return function(fab) {
    return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some4(fab.value(fa.value));
  };
};
var flatMap4 = dual(2, function(ma, f) {
  return isNone2(ma) ? none2 : f(ma.value);
});
var Chain8 = {
  URI: URI5,
  map: _map4,
  ap: _ap4,
  chain: flatMap4
};
var orElse = dual(2, function(self, that) {
  return isNone2(self) ? that() : self;
});
var fromEither3 = getRight;
var FromEither6 = {
  URI: URI5,
  fromEither: fromEither3
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
var tap2 = dual(2, tap(Chain8));
var tapEither2 = dual(2, tapEither(FromEither6, Chain8));

// node_modules/fp-ts/es6/Endomorphism.js
var getSemigroup7 = function() {
  return {
    concat: function(first2, second) {
      return flow(first2, second);
    }
  };
};
var getMonoid7 = function() {
  return {
    concat: getSemigroup7().concat,
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
    return pipe(lookupWithKeyE(k, m), map4(function(_a) {
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
      return map5;
    }
  },
  let: () => {
    {
      return let_5;
    }
  },
  getSemigroup: () => {
    {
      return getSemigroup8;
    }
  },
  getRaceMonoid: () => {
    {
      return getRaceMonoid;
    }
  },
  getMonoid: () => {
    {
      return getMonoid8;
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
      return flatten4;
    }
  },
  flatMapIO: () => {
    {
      return flatMapIO2;
    }
  },
  flatMap: () => {
    {
      return flatMap5;
    }
  },
  flap: () => {
    {
      return flap5;
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
      return chainFirst5;
    }
  },
  chain: () => {
    {
      return chain4;
    }
  },
  bindTo: () => {
    {
      return bindTo5;
    }
  },
  bind: () => {
    {
      return bind5;
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
      return apSecond5;
    }
  },
  apS: () => {
    {
      return apS5;
    }
  },
  apFirst: () => {
    {
      return apFirst5;
    }
  },
  ap: () => {
    {
      return ap6;
    }
  },
  URI: () => {
    {
      return URI6;
    }
  },
  Pointed: () => {
    {
      return Pointed4;
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
      return Monad4;
    }
  },
  Functor: () => {
    {
      return Functor10;
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
      return Do4;
    }
  },
  Chain: () => {
    {
      return Chain10;
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
var _map5 = function(fa, f) {
  return pipe(fa, map5(f));
};
var _apPar = function(fab, fa) {
  return pipe(fab, ap6(fa));
};
var _apSeq = function(fab, fa) {
  return flatMap5(fab, function(f) {
    return pipe(fa, map5(f));
  });
};
var map5 = function(f) {
  return function(fa) {
    return function() {
      return Promise.resolve().then(fa).then(f);
    };
  };
};
var ap6 = function(fa) {
  return function(fab) {
    return function() {
      return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function(_a) {
        var f = _a[0], a = _a[1];
        return f(a);
      });
    };
  };
};
var of5 = function(a) {
  return function() {
    return Promise.resolve(a);
  };
};
var flatMap5 = dual(2, function(ma, f) {
  return function() {
    return Promise.resolve().then(ma).then(function(a) {
      return f(a)();
    });
  };
});
var flatten4 = flatMap5(identity);
var URI6 = "Task";
var Functor10 = {
  URI: URI6,
  map: _map5
};
var as3 = dual(2, as(Functor10));
var asUnit3 = asUnit(Functor10);
var flap5 = flap(Functor10);
var Pointed4 = {
  URI: URI6,
  of: of5
};
var ApplyPar = {
  URI: URI6,
  map: _map5,
  ap: _apPar
};
var apFirst5 = apFirst(ApplyPar);
var apSecond5 = apSecond(ApplyPar);
var ApplicativePar = {
  URI: URI6,
  map: _map5,
  ap: _apPar,
  of: of5
};
var ApplySeq = {
  URI: URI6,
  map: _map5,
  ap: _apSeq
};
var ApplicativeSeq = {
  URI: URI6,
  map: _map5,
  ap: _apSeq,
  of: of5
};
var Chain10 = {
  URI: URI6,
  map: _map5,
  ap: _apPar,
  chain: flatMap5
};
var Monad4 = {
  URI: URI6,
  map: _map5,
  of: of5,
  ap: _apPar,
  chain: flatMap5
};
var MonadIO = {
  URI: URI6,
  map: _map5,
  of: of5,
  ap: _apPar,
  chain: flatMap5,
  fromIO
};
var fromTask = identity;
var MonadTask = {
  URI: URI6,
  map: _map5,
  of: of5,
  ap: _apPar,
  chain: flatMap5,
  fromIO,
  fromTask
};
var FromIO2 = {
  URI: URI6,
  fromIO
};
var _FlatMap = {
  flatMap: flatMap5
};
var _FromIO = {
  fromIO: FromIO2.fromIO
};
var flatMapIO2 = flatMapIO(_FromIO, _FlatMap);
var tap3 = dual(2, tap(Chain10));
var tapIO2 = dual(2, tapIO(FromIO2, Chain10));
var fromIOK2 = fromIOK(FromIO2);
var chainIOK = flatMapIO2;
var chainFirstIOK = tapIO2;
var FromTask = {
  URI: URI6,
  fromIO,
  fromTask
};
var never = function() {
  return new Promise(function(_) {
    return;
  });
};
var Do4 = of5(emptyRecord);
var bindTo5 = bindTo(Functor10);
var let_5 = let_(Functor10);
var bind5 = bind(Chain10);
var apS5 = apS(ApplyPar);
var ApT = of5(emptyReadonlyArray);
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
var chain4 = flatMap5;
var chainFirst5 = tap3;
var task = {
  URI: URI6,
  map: _map5,
  of: of5,
  ap: _apPar,
  chain: flatMap5,
  fromIO,
  fromTask
};
var taskSeq = {
  URI: URI6,
  map: _map5,
  of: of5,
  ap: _apSeq,
  chain: flatMap5,
  fromIO,
  fromTask
};
var getSemigroup8 = getApplySemigroup(ApplySeq);
var getMonoid8 = getApplicativeMonoid(ApplicativeSeq);

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
      return size4;
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
      return isEmpty4;
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
      return Ord5;
    }
  },
  Monoid: () => {
    {
      return Monoid;
    }
  },
  Eq: () => {
    {
      return Eq5;
    }
  }
});
var Eq5 = {
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
var Ord5 = {
  equals: Eq5.equals,
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
var isEmpty4 = function(s) {
  return s.length === 0;
};
var size4 = function(s) {
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

// node_modules/fp-ts/es6/ReadonlyRecord.js
function collect(O) {
  if (typeof O === "function") {
    return collect(Ord5)(O);
  }
  var keysO = keys_(O);
  return function(f) {
    return function(r) {
      var out = [];
      for (var _i = 0, _a = keysO(r);_i < _a.length; _i++) {
        var key = _a[_i];
        out.push(f(key, r[key]));
      }
      return out;
    };
  };
}
function isSubrecord(E) {
  return function(me, that) {
    if (that === undefined) {
      var isSubrecordE_1 = isSubrecord(E);
      return function(that2) {
        return isSubrecordE_1(that2, me);
      };
    }
    for (var k in me) {
      if (!has.call(that, k) || !E.equals(me[k], that[k])) {
        return false;
      }
    }
    return true;
  };
}
function lookup5(k, r) {
  if (r === undefined) {
    return function(r2) {
      return lookup5(k, r2);
    };
  }
  return has.call(r, k) ? some(r[k]) : none;
}
function mapWithIndex4(f) {
  return function(r) {
    var out = {};
    for (var k in r) {
      if (has.call(r, k)) {
        out[k] = f(k, r[k]);
      }
    }
    return out;
  };
}
function map6(f) {
  return mapWithIndex4(function(_, a) {
    return f(a);
  });
}
function reduceWithIndex6() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (args.length === 2) {
    return reduceWithIndex6(Ord5).apply(undefined, args);
  }
  var keysO = keys_(args[0]);
  return function(b, f) {
    return function(fa) {
      var out = b;
      var ks = keysO(fa);
      var len = ks.length;
      for (var i = 0;i < len; i++) {
        var k = ks[i];
        out = f(k, out, fa[k]);
      }
      return out;
    };
  };
}
function foldMapWithIndex6(O) {
  if ("compare" in O) {
    var keysO_1 = keys_(O);
    return function(M) {
      return function(f) {
        return function(fa) {
          var out = M.empty;
          var ks = keysO_1(fa);
          var len = ks.length;
          for (var i = 0;i < len; i++) {
            var k = ks[i];
            out = M.concat(out, f(k, fa[k]));
          }
          return out;
        };
      };
    };
  }
  return foldMapWithIndex6(Ord5)(O);
}
function reduceRightWithIndex6() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (args.length === 2) {
    return reduceRightWithIndex6(Ord5).apply(undefined, args);
  }
  var keysO = keys_(args[0]);
  return function(b, f) {
    return function(fa) {
      var out = b;
      var ks = keysO(fa);
      var len = ks.length;
      for (var i = len - 1;i >= 0; i--) {
        var k = ks[i];
        out = f(k, fa[k], out);
      }
      return out;
    };
  };
}
function traverseWithIndex4(F) {
  var traverseWithIndexOF = _traverseWithIndex4(Ord5)(F);
  return function(f) {
    return function(ta) {
      return traverseWithIndexOF(ta, f);
    };
  };
}
function traverse4(F) {
  var traverseOF = _traverse4(Ord5)(F);
  return function(f) {
    return function(ta) {
      return traverseOF(ta, f);
    };
  };
}
function sequence4(F) {
  return _sequence(Ord5)(F);
}
function partitionMapWithIndex3(f) {
  return function(r) {
    var left = {};
    var right = {};
    for (var k in r) {
      if (has.call(r, k)) {
        var e = f(k, r[k]);
        switch (e._tag) {
          case "Left":
            left[k] = e.left;
            break;
          case "Right":
            right[k] = e.right;
            break;
        }
      }
    }
    return separated(left, right);
  };
}
function partitionWithIndex3(predicateWithIndex) {
  return function(r) {
    var left = {};
    var right = {};
    for (var k in r) {
      if (has.call(r, k)) {
        var a = r[k];
        if (predicateWithIndex(k, a)) {
          right[k] = a;
        } else {
          left[k] = a;
        }
      }
    }
    return separated(left, right);
  };
}
function filterMapWithIndex3(f) {
  return function(r) {
    var out = {};
    for (var k in r) {
      if (has.call(r, k)) {
        var ob = f(k, r[k]);
        if (isSome(ob)) {
          out[k] = ob.value;
        }
      }
    }
    return out;
  };
}
function filterWithIndex4(predicateWithIndex) {
  return function(fa) {
    var out = {};
    var changed = false;
    for (var key in fa) {
      if (has.call(fa, key)) {
        var a = fa[key];
        if (predicateWithIndex(key, a)) {
          out[key] = a;
        } else {
          changed = true;
        }
      }
    }
    return changed ? out : fa;
  };
}
function fromFoldable(M, F) {
  var fromFoldableMapM = fromFoldableMap(M, F);
  return function(fka) {
    return fromFoldableMapM(fka, identity);
  };
}
function fromFoldableMap(M, F) {
  return function(ta, f) {
    return F.reduce(ta, {}, function(r, a) {
      var _a = f(a), k = _a[0], b = _a[1];
      r[k] = has.call(r, k) ? M.concat(r[k], b) : b;
      return r;
    });
  };
}
function every3(predicate) {
  return function(r) {
    for (var k in r) {
      if (!predicate(r[k])) {
        return false;
      }
    }
    return true;
  };
}
function some5(predicate) {
  return function(r) {
    for (var k in r) {
      if (predicate(r[k])) {
        return true;
      }
    }
    return false;
  };
}
function elem4(E) {
  return function(a, fa) {
    if (fa === undefined) {
      var elemE_1 = elem4(E);
      return function(fa2) {
        return elemE_1(a, fa2);
      };
    }
    for (var k in fa) {
      if (E.equals(fa[k], a)) {
        return true;
      }
    }
    return false;
  };
}
function reduce6() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (args.length === 1) {
    var reduceWithIndexO_1 = reduceWithIndex6(args[0]);
    return function(b, f) {
      return reduceWithIndexO_1(b, function(_, b2, a) {
        return f(b2, a);
      });
    };
  }
  return reduce6(Ord5).apply(undefined, args);
}
function foldMap6(O) {
  if ("compare" in O) {
    var foldMapWithIndexO_1 = foldMapWithIndex6(O);
    return function(M) {
      var foldMapWithIndexM = foldMapWithIndexO_1(M);
      return function(f) {
        return foldMapWithIndexM(function(_, a) {
          return f(a);
        });
      };
    };
  }
  return foldMap6(Ord5)(O);
}
function reduceRight6() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (args.length === 1) {
    var reduceRightWithIndexO_1 = reduceRightWithIndex6(args[0]);
    return function(b, f) {
      return reduceRightWithIndexO_1(b, function(_, b2, a) {
        return f(b2, a);
      });
    };
  }
  return reduceRight6(Ord5).apply(undefined, args);
}
function getShow6(O) {
  if ("compare" in O) {
    return function(S) {
      return {
        show: function(r) {
          var elements = collect(O)(function(k, a) {
            return "".concat(JSON.stringify(k), ": ").concat(S.show(a));
          })(r).join(", ");
          return elements === "" ? "{}" : "{ ".concat(elements, " }");
        }
      };
    };
  }
  return getShow6(Ord5)(O);
}
function getEq6(E) {
  var isSubrecordE = isSubrecord(E);
  return fromEquals(function(x, y) {
    return isSubrecordE(x)(y) && isSubrecordE(y)(x);
  });
}
function getMonoid9(S) {
  return {
    concat: function(first2, second) {
      if (isEmpty5(first2)) {
        return second;
      }
      if (isEmpty5(second)) {
        return first2;
      }
      var r = Object.assign({}, first2);
      for (var k in second) {
        if (has.call(second, k)) {
          r[k] = has.call(first2, k) ? S.concat(first2[k], second[k]) : second[k];
        }
      }
      return r;
    },
    empty: empty8
  };
}
function hasOwnProperty(k, r) {
  return has.call(r === undefined ? this : r, k);
}
var size5 = function(r) {
  return Object.keys(r).length;
};
var isEmpty5 = function(r) {
  for (var k in r) {
    if (has.call(r, k)) {
      return false;
    }
  }
  return true;
};
var keys_ = function(O) {
  return function(r) {
    return Object.keys(r).sort(O.compare);
  };
};
var upsertAt = function(k, a) {
  return function(r) {
    if (has.call(r, k) && r[k] === a) {
      return r;
    }
    var out = Object.assign({}, r);
    out[k] = a;
    return out;
  };
};
var has2 = function(k, r) {
  return has.call(r, k);
};
var empty8 = {};
var singleton2 = function(k, a) {
  var _a;
  return _a = {}, _a[k] = a, _a;
};
var union6 = function(M) {
  return function(second) {
    return function(first2) {
      if (isEmpty5(first2)) {
        return second;
      }
      if (isEmpty5(second)) {
        return first2;
      }
      var out = {};
      for (var k in first2) {
        if (has2(k, second)) {
          out[k] = M.concat(first2[k], second[k]);
        } else {
          out[k] = first2[k];
        }
      }
      for (var k in second) {
        if (!has2(k, out)) {
          out[k] = second[k];
        }
      }
      return out;
    };
  };
};
var intersection4 = function(M) {
  return function(second) {
    return function(first2) {
      if (isEmpty5(first2) || isEmpty5(second)) {
        return empty8;
      }
      var out = {};
      for (var k in first2) {
        if (has2(k, second)) {
          out[k] = M.concat(first2[k], second[k]);
        }
      }
      return out;
    };
  };
};
var difference4 = function(second) {
  return function(first2) {
    if (isEmpty5(first2)) {
      return second;
    }
    if (isEmpty5(second)) {
      return first2;
    }
    var out = {};
    for (var k in first2) {
      if (!has2(k, second)) {
        out[k] = first2[k];
      }
    }
    for (var k in second) {
      if (!has2(k, first2)) {
        out[k] = second[k];
      }
    }
    return out;
  };
};
var _map6 = function(fa, f) {
  return pipe(fa, map6(f));
};
var _mapWithIndex4 = function(fa, f) {
  return pipe(fa, mapWithIndex4(f));
};
var _reduce4 = function(O) {
  var reduceO = reduce6(O);
  return function(fa, b, f) {
    return pipe(fa, reduceO(b, f));
  };
};
var _foldMap4 = function(O) {
  return function(M) {
    var foldMapM = foldMap6(O)(M);
    return function(fa, f) {
      return pipe(fa, foldMapM(f));
    };
  };
};
var _reduceRight4 = function(O) {
  var reduceRightO = reduceRight6(O);
  return function(fa, b, f) {
    return pipe(fa, reduceRightO(b, f));
  };
};
var _filter3 = function(fa, predicate) {
  return pipe(fa, filter4(predicate));
};
var _filterMap3 = function(fa, f) {
  return pipe(fa, filterMap3(f));
};
var _partition3 = function(fa, predicate) {
  return pipe(fa, partition3(predicate));
};
var _partitionMap3 = function(fa, f) {
  return pipe(fa, partitionMap3(f));
};
var _reduceWithIndex4 = function(O) {
  var reduceWithIndexO = reduceWithIndex6(O);
  return function(fa, b, f) {
    return pipe(fa, reduceWithIndexO(b, f));
  };
};
var _foldMapWithIndex4 = function(O) {
  var foldMapWithIndexO = foldMapWithIndex6(O);
  return function(M) {
    var foldMapWithIndexM = foldMapWithIndexO(M);
    return function(fa, f) {
      return pipe(fa, foldMapWithIndexM(f));
    };
  };
};
var _reduceRightWithIndex4 = function(O) {
  var reduceRightWithIndexO = reduceRightWithIndex6(O);
  return function(fa, b, f) {
    return pipe(fa, reduceRightWithIndexO(b, f));
  };
};
var _partitionMapWithIndex3 = function(fa, f) {
  return pipe(fa, partitionMapWithIndex3(f));
};
var _partitionWithIndex3 = function(fa, predicateWithIndex) {
  return pipe(fa, partitionWithIndex3(predicateWithIndex));
};
var _filterMapWithIndex3 = function(fa, f) {
  return pipe(fa, filterMapWithIndex3(f));
};
var _filterWithIndex3 = function(fa, predicateWithIndex) {
  return pipe(fa, filterWithIndex4(predicateWithIndex));
};
var _traverse4 = function(O) {
  var traverseWithIndexO = _traverseWithIndex4(O);
  return function(F) {
    var traverseWithIndexOF = traverseWithIndexO(F);
    return function(ta, f) {
      return traverseWithIndexOF(ta, flow(SK, f));
    };
  };
};
var _sequence = function(O) {
  var traverseO = _traverse4(O);
  return function(F) {
    var traverseOF = traverseO(F);
    return function(ta) {
      return traverseOF(ta, identity);
    };
  };
};
var _traverseWithIndex4 = function(O) {
  return function(F) {
    var keysO = keys_(O);
    return function(ta, f) {
      var ks = keysO(ta);
      if (ks.length === 0) {
        return F.of(empty8);
      }
      var fr = F.of({});
      var _loop_1 = function(key2) {
        fr = F.ap(F.map(fr, function(r) {
          return function(b) {
            var _a;
            return Object.assign({}, r, (_a = {}, _a[key2] = b, _a));
          };
        }), f(key2, ta[key2]));
      };
      for (var _i = 0, ks_1 = ks;_i < ks_1.length; _i++) {
        var key = ks_1[_i];
        _loop_1(key);
      }
      return fr;
    };
  };
};
var filter4 = function(predicate) {
  return filterWithIndex4(function(_, a) {
    return predicate(a);
  });
};
var filterMap3 = function(f) {
  return filterMapWithIndex3(function(_, a) {
    return f(a);
  });
};
var partition3 = function(predicate) {
  return partitionWithIndex3(function(_, a) {
    return predicate(a);
  });
};
var partitionMap3 = function(f) {
  return partitionMapWithIndex3(function(_, a) {
    return f(a);
  });
};
var compact3 = function(r) {
  var out = {};
  for (var k in r) {
    if (has.call(r, k)) {
      var oa = r[k];
      if (isSome(oa)) {
        out[k] = oa.value;
      }
    }
  }
  return out;
};
var separate3 = function(r) {
  var left = {};
  var right = {};
  for (var k in r) {
    if (has.call(r, k)) {
      var e = r[k];
      if (isLeft(e)) {
        left[k] = e.left;
      } else {
        right[k] = e.right;
      }
    }
  }
  return separated(left, right);
};

// node_modules/fp-ts/es6/Record.js
var exports_Record = {};
__export(exports_Record, {
  wither: () => {
    {
      return wither3;
    }
  },
  wilt: () => {
    {
      return wilt3;
    }
  },
  upsertAt: () => {
    {
      return upsertAt2;
    }
  },
  updateAt: () => {
    {
      return updateAt4;
    }
  },
  union: () => {
    {
      return union7;
    }
  },
  traverseWithIndex: () => {
    {
      return traverseWithIndex5;
    }
  },
  traverse: () => {
    {
      return traverse5;
    }
  },
  toUnfoldable: () => {
    {
      return toUnfoldable;
    }
  },
  toEntries: () => {
    {
      return toEntries;
    }
  },
  toArray: () => {
    {
      return toArray2;
    }
  },
  some: () => {
    {
      return some6;
    }
  },
  size: () => {
    {
      return size6;
    }
  },
  singleton: () => {
    {
      return singleton3;
    }
  },
  sequence: () => {
    {
      return sequence5;
    }
  },
  separate: () => {
    {
      return separate4;
    }
  },
  reduceWithIndex: () => {
    {
      return reduceWithIndex7;
    }
  },
  reduceRightWithIndex: () => {
    {
      return reduceRightWithIndex7;
    }
  },
  reduceRight: () => {
    {
      return reduceRight7;
    }
  },
  reduce: () => {
    {
      return reduce7;
    }
  },
  record: () => {
    {
      return record;
    }
  },
  pop: () => {
    {
      return pop;
    }
  },
  partitionWithIndex: () => {
    {
      return partitionWithIndex4;
    }
  },
  partitionMapWithIndex: () => {
    {
      return partitionMapWithIndex4;
    }
  },
  partitionMap: () => {
    {
      return partitionMap4;
    }
  },
  partition: () => {
    {
      return partition4;
    }
  },
  modifyAt: () => {
    {
      return modifyAt4;
    }
  },
  mapWithIndex: () => {
    {
      return mapWithIndex5;
    }
  },
  map: () => {
    {
      return map7;
    }
  },
  lookup: () => {
    {
      return lookup6;
    }
  },
  keys: () => {
    {
      return keys;
    }
  },
  isSubrecord: () => {
    {
      return isSubrecord2;
    }
  },
  isEmpty: () => {
    {
      return isEmpty6;
    }
  },
  intersection: () => {
    {
      return intersection5;
    }
  },
  insertAt: () => {
    {
      return insertAt4;
    }
  },
  hasOwnProperty: () => {
    {
      return hasOwnProperty2;
    }
  },
  has: () => {
    {
      return has3;
    }
  },
  getWitherable: () => {
    {
      return getWitherable;
    }
  },
  getUnionSemigroup: () => {
    {
      return getUnionSemigroup4;
    }
  },
  getUnionMonoid: () => {
    {
      return getUnionMonoid3;
    }
  },
  getTraversableWithIndex: () => {
    {
      return getTraversableWithIndex;
    }
  },
  getTraversable: () => {
    {
      return getTraversable;
    }
  },
  getShow: () => {
    {
      return getShow7;
    }
  },
  getMonoid: () => {
    {
      return getMonoid10;
    }
  },
  getIntersectionSemigroup: () => {
    {
      return getIntersectionSemigroup3;
    }
  },
  getFoldableWithIndex: () => {
    {
      return getFoldableWithIndex2;
    }
  },
  getFoldable: () => {
    {
      return getFoldable2;
    }
  },
  getEq: () => {
    {
      return getEq7;
    }
  },
  getDifferenceMagma: () => {
    {
      return getDifferenceMagma3;
    }
  },
  fromFoldableMap: () => {
    {
      return fromFoldableMap2;
    }
  },
  fromFoldable: () => {
    {
      return fromFoldable2;
    }
  },
  fromEntries: () => {
    {
      return fromEntries;
    }
  },
  foldMapWithIndex: () => {
    {
      return foldMapWithIndex7;
    }
  },
  foldMap: () => {
    {
      return foldMap7;
    }
  },
  flap: () => {
    {
      return flap6;
    }
  },
  filterWithIndex: () => {
    {
      return filterWithIndex5;
    }
  },
  filterMapWithIndex: () => {
    {
      return filterMapWithIndex4;
    }
  },
  filterMap: () => {
    {
      return filterMap4;
    }
  },
  filter: () => {
    {
      return filter5;
    }
  },
  every: () => {
    {
      return every4;
    }
  },
  empty: () => {
    {
      return empty9;
    }
  },
  elem: () => {
    {
      return elem5;
    }
  },
  difference: () => {
    {
      return difference5;
    }
  },
  deleteAt: () => {
    {
      return deleteAt3;
    }
  },
  compact: () => {
    {
      return compact4;
    }
  },
  collect: () => {
    {
      return collect2;
    }
  },
  Witherable: () => {
    {
      return Witherable6;
    }
  },
  URI: () => {
    {
      return URI7;
    }
  },
  TraversableWithIndex: () => {
    {
      return TraversableWithIndex4;
    }
  },
  Traversable: () => {
    {
      return Traversable4;
    }
  },
  FunctorWithIndex: () => {
    {
      return FunctorWithIndex4;
    }
  },
  Functor: () => {
    {
      return Functor12;
    }
  },
  FoldableWithIndex: () => {
    {
      return FoldableWithIndex4;
    }
  },
  Foldable: () => {
    {
      return Foldable4;
    }
  },
  FilterableWithIndex: () => {
    {
      return FilterableWithIndex3;
    }
  },
  Filterable: () => {
    {
      return Filterable3;
    }
  },
  Compactable: () => {
    {
      return Compactable3;
    }
  }
});
function collect2(O) {
  if (typeof O === "function") {
    return collect2(Ord5)(O);
  }
  var keysO = keys_2(O);
  return function(f) {
    return function(r) {
      var out = [];
      for (var _i = 0, _a = keysO(r);_i < _a.length; _i++) {
        var key = _a[_i];
        out.push(f(key, r[key]));
      }
      return out;
    };
  };
}
function toUnfoldable(U) {
  return function(r) {
    var sas = toArray2(r);
    var len = sas.length;
    return U.unfold(0, function(b) {
      return b < len ? some([sas[b], b + 1]) : none;
    });
  };
}
function deleteAt3(k) {
  return function(r) {
    if (!has.call(r, k)) {
      return r;
    }
    var out = Object.assign({}, r);
    delete out[k];
    return out;
  };
}
function pop(k) {
  var deleteAtk = deleteAt3(k);
  return function(r) {
    var oa = lookup6(k, r);
    return isNone(oa) ? none : some([oa.value, deleteAtk(r)]);
  };
}
function reduceWithIndex7() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.length === 1 ? reduceWithIndex6(args[0]) : reduceWithIndex6(Ord5).apply(undefined, args);
}
function foldMapWithIndex7(O) {
  return "compare" in O ? foldMapWithIndex6(O) : foldMapWithIndex6(Ord5)(O);
}
function reduceRightWithIndex7() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.length === 1 ? reduceRightWithIndex6(args[0]) : reduceRightWithIndex6(Ord5).apply(undefined, args);
}
function traverseWithIndex5(F) {
  return traverseWithIndex4(F);
}
function traverse5(F) {
  return traverse4(F);
}
function sequence5(F) {
  return sequence4(F);
}
function partitionWithIndex4(predicateWithIndex) {
  return partitionWithIndex3(predicateWithIndex);
}
function filterWithIndex5(predicateWithIndex) {
  return filterWithIndex4(predicateWithIndex);
}
function fromFoldable2(M, F) {
  return fromFoldable(M, F);
}
function fromFoldableMap2(M, F) {
  return fromFoldableMap(M, F);
}
function reduce7() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.length === 1 ? reduce6(args[0]) : reduce6(Ord5).apply(undefined, args);
}
function foldMap7(O) {
  return "compare" in O ? foldMap6(O) : foldMap6(Ord5)(O);
}
function reduceRight7() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.length === 1 ? reduceRight6(args[0]) : reduceRight6(Ord5).apply(undefined, args);
}
function getShow7(O) {
  return "compare" in O ? getShow6(O) : getShow6(Ord5)(O);
}
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length;i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var size6 = size5;
var isEmpty6 = isEmpty5;
var keys_2 = function(O) {
  return function(r) {
    return Object.keys(r).sort(O.compare);
  };
};
var keys = keys_2(Ord5);
var toArray2 = collect2(Ord5)(function(k, a) {
  return [
    k,
    a
  ];
});
var upsertAt2 = upsertAt;
var has3 = has2;
var updateAt4 = function(k, a) {
  return modifyAt4(k, function() {
    return a;
  });
};
var modifyAt4 = function(k, f) {
  return function(r) {
    if (!has3(k, r)) {
      return none;
    }
    var out = Object.assign({}, r);
    out[k] = f(r[k]);
    return some(out);
  };
};
var isSubrecord2 = isSubrecord;
var lookup6 = lookup5;
var mapWithIndex5 = mapWithIndex4;
var map7 = map6;
var singleton3 = singleton2;
var wither3 = function(F) {
  var traverseF = traverse5(F);
  return function(f) {
    return function(fa) {
      return F.map(pipe(fa, traverseF(f)), compact4);
    };
  };
};
var wilt3 = function(F) {
  var traverseF = traverse5(F);
  return function(f) {
    return function(fa) {
      return F.map(pipe(fa, traverseF(f)), separate4);
    };
  };
};
var partitionMapWithIndex4 = partitionMapWithIndex3;
var filterMapWithIndex4 = filterMapWithIndex3;
var toEntries = toArray2;
var fromEntries = function(fa) {
  return fromFoldable2(last(), Foldable3)(fa);
};
var every4 = every3;
var some6 = some5;
var elem5 = elem4;
var union7 = function(M) {
  var unionM = union6(M);
  return function(second) {
    return function(first2) {
      if (isEmpty6(first2)) {
        return __assign({}, second);
      }
      if (isEmpty6(second)) {
        return __assign({}, first2);
      }
      return unionM(second)(first2);
    };
  };
};
var intersection5 = function(M) {
  return function(second) {
    return function(first2) {
      if (isEmpty6(first2) || isEmpty6(second)) {
        return {};
      }
      return intersection4(M)(second)(first2);
    };
  };
};
var difference5 = function(second) {
  return function(first2) {
    if (isEmpty6(first2)) {
      return __assign({}, second);
    }
    if (isEmpty6(second)) {
      return __assign({}, first2);
    }
    return difference4(second)(first2);
  };
};
var _map7 = _map6;
var _mapWithIndex5 = _mapWithIndex4;
var _reduce5 = _reduce4;
var _foldMap5 = _foldMap4;
var _reduceRight5 = _reduceRight4;
var _filter4 = _filter3;
var _filterMap4 = _filterMap3;
var _partition4 = _partition3;
var _partitionMap4 = _partitionMap3;
var _reduceWithIndex5 = _reduceWithIndex4;
var _foldMapWithIndex5 = _foldMapWithIndex4;
var _reduceRightWithIndex5 = _reduceRightWithIndex4;
var _partitionMapWithIndex4 = _partitionMapWithIndex3;
var _partitionWithIndex4 = _partitionWithIndex3;
var _filterMapWithIndex4 = _filterMapWithIndex3;
var _filterWithIndex4 = _filterWithIndex3;
var _traverse5 = _traverse4;
var _sequence2 = _sequence;
var _traverseWithIndex5 = function(O) {
  return function(F) {
    var keysO = keys_2(O);
    return function(ta, f) {
      var ks = keysO(ta);
      if (ks.length === 0) {
        return F.of({});
      }
      var fr = F.of({});
      var _loop_1 = function(key2) {
        fr = F.ap(F.map(fr, function(r) {
          return function(b) {
            r[key2] = b;
            return r;
          };
        }), f(key2, ta[key2]));
      };
      for (var _i = 0, ks_1 = ks;_i < ks_1.length; _i++) {
        var key = ks_1[_i];
        _loop_1(key);
      }
      return fr;
    };
  };
};
var filter5 = filter4;
var filterMap4 = filterMap3;
var partition4 = partition3;
var partitionMap4 = partitionMap3;
var compact4 = compact3;
var separate4 = separate3;
var URI7 = "Record";
var getEq7 = getEq6;
var getMonoid10 = getMonoid9;
var Functor12 = {
  URI: URI7,
  map: _map7
};
var flap6 = flap(Functor12);
var FunctorWithIndex4 = {
  URI: URI7,
  map: _map7,
  mapWithIndex: _mapWithIndex5
};
var getFoldable2 = function(O) {
  return {
    URI: URI7,
    reduce: _reduce5(O),
    foldMap: _foldMap5(O),
    reduceRight: _reduceRight5(O)
  };
};
var getFoldableWithIndex2 = function(O) {
  return {
    URI: URI7,
    reduce: _reduce5(O),
    foldMap: _foldMap5(O),
    reduceRight: _reduceRight5(O),
    reduceWithIndex: _reduceWithIndex5(O),
    foldMapWithIndex: _foldMapWithIndex5(O),
    reduceRightWithIndex: _reduceRightWithIndex5(O)
  };
};
var Compactable3 = {
  URI: URI7,
  compact: compact4,
  separate: separate4
};
var Filterable3 = {
  URI: URI7,
  map: _map7,
  compact: compact4,
  separate: separate4,
  filter: _filter4,
  filterMap: _filterMap4,
  partition: _partition4,
  partitionMap: _partitionMap4
};
var FilterableWithIndex3 = {
  URI: URI7,
  map: _map7,
  mapWithIndex: _mapWithIndex5,
  compact: compact4,
  separate: separate4,
  filter: _filter4,
  filterMap: _filterMap4,
  partition: _partition4,
  partitionMap: _partitionMap4,
  filterMapWithIndex: _filterMapWithIndex4,
  filterWithIndex: _filterWithIndex4,
  partitionMapWithIndex: _partitionMapWithIndex4,
  partitionWithIndex: _partitionWithIndex4
};
var getTraversable = function(O) {
  return {
    URI: URI7,
    map: _map7,
    reduce: _reduce5(O),
    foldMap: _foldMap5(O),
    reduceRight: _reduceRight5(O),
    traverse: _traverse5(O),
    sequence: _sequence2(O)
  };
};
var getTraversableWithIndex = function(O) {
  return {
    URI: URI7,
    map: _map7,
    mapWithIndex: _mapWithIndex5,
    reduce: _reduce5(O),
    foldMap: _foldMap5(O),
    reduceRight: _reduceRight5(O),
    reduceWithIndex: _reduceWithIndex5(O),
    foldMapWithIndex: _foldMapWithIndex5(O),
    reduceRightWithIndex: _reduceRightWithIndex5(O),
    traverse: _traverse5(O),
    sequence: _sequence2(O),
    traverseWithIndex: _traverseWithIndex5(O)
  };
};
var getWitherable = function(O) {
  var T = getTraversable(O);
  return {
    URI: URI7,
    map: _map7,
    reduce: _reduce5(O),
    foldMap: _foldMap5(O),
    reduceRight: _reduceRight5(O),
    traverse: T.traverse,
    sequence: T.sequence,
    compact: compact4,
    separate: separate4,
    filter: _filter4,
    filterMap: _filterMap4,
    partition: _partition4,
    partitionMap: _partitionMap4,
    wither: witherDefault(T, Compactable3),
    wilt: wiltDefault(T, Compactable3)
  };
};
var getUnionSemigroup4 = function(S) {
  var unionS = union7(S);
  return {
    concat: function(first2, second) {
      return unionS(second)(first2);
    }
  };
};
var getUnionMonoid3 = function(S) {
  return {
    concat: getUnionSemigroup4(S).concat,
    empty: {}
  };
};
var getIntersectionSemigroup3 = function(S) {
  var intersectionS = intersection5(S);
  return {
    concat: function(first2, second) {
      return intersectionS(second)(first2);
    }
  };
};
var getDifferenceMagma3 = function() {
  return {
    concat: function(first2, second) {
      return difference5(second)(first2);
    }
  };
};
var Foldable4 = {
  URI: URI7,
  reduce: _reduce5(Ord5),
  foldMap: _foldMap5(Ord5),
  reduceRight: _reduceRight5(Ord5)
};
var FoldableWithIndex4 = {
  URI: URI7,
  reduce: _reduce5(Ord5),
  foldMap: _foldMap5(Ord5),
  reduceRight: _reduceRight5(Ord5),
  reduceWithIndex: _reduceWithIndex5(Ord5),
  foldMapWithIndex: _foldMapWithIndex5(Ord5),
  reduceRightWithIndex: _reduceRightWithIndex5(Ord5)
};
var Traversable4 = {
  URI: URI7,
  map: _map7,
  reduce: _reduce5(Ord5),
  foldMap: _foldMap5(Ord5),
  reduceRight: _reduceRight5(Ord5),
  traverse: _traverse5(Ord5),
  sequence: sequence5
};
var TraversableWithIndex4 = {
  URI: URI7,
  map: _map7,
  mapWithIndex: _mapWithIndex5,
  reduce: _reduce5(Ord5),
  foldMap: _foldMap5(Ord5),
  reduceRight: _reduceRight5(Ord5),
  reduceWithIndex: _reduceWithIndex5(Ord5),
  foldMapWithIndex: _foldMapWithIndex5(Ord5),
  reduceRightWithIndex: _reduceRightWithIndex5(Ord5),
  traverse: _traverse5(Ord5),
  sequence: sequence5,
  traverseWithIndex: _traverseWithIndex5(Ord5)
};
var _wither3 = witherDefault(Traversable4, Compactable3);
var _wilt3 = wiltDefault(Traversable4, Compactable3);
var Witherable6 = {
  URI: URI7,
  map: _map7,
  reduce: _reduce5(Ord5),
  foldMap: _foldMap5(Ord5),
  reduceRight: _reduceRight5(Ord5),
  traverse: _traverse5(Ord5),
  sequence: sequence5,
  compact: compact4,
  separate: separate4,
  filter: _filter4,
  filterMap: _filterMap4,
  partition: _partition4,
  partitionMap: _partitionMap4,
  wither: _wither3,
  wilt: _wilt3
};
var empty9 = {};
var insertAt4 = upsertAt2;
var hasOwnProperty2 = hasOwnProperty;
var record = {
  URI: URI7,
  map: _map7,
  reduce: _reduce5(Ord5),
  foldMap: _foldMap5(Ord5),
  reduceRight: _reduceRight5(Ord5),
  traverse: _traverse5(Ord5),
  sequence: sequence5,
  compact: compact4,
  separate: separate4,
  filter: _filter4,
  filterMap: _filterMap4,
  partition: _partition4,
  partitionMap: _partitionMap4,
  mapWithIndex: _mapWithIndex5,
  reduceWithIndex: _reduceWithIndex5(Ord5),
  foldMapWithIndex: _foldMapWithIndex5(Ord5),
  reduceRightWithIndex: _reduceRightWithIndex5(Ord5),
  filterMapWithIndex: _filterMapWithIndex4,
  filterWithIndex: _filterWithIndex4,
  partitionMapWithIndex: _partitionMapWithIndex4,
  partitionWithIndex: _partitionWithIndex4,
  traverseWithIndex: _traverseWithIndex5(Ord5),
  wither: _wither3,
  wilt: _wilt3
};

// node_modules/fp-ts-std/dist/esm/Function.js
var URI8 = "Function";
var map8 = (f) => (g) => flow(g, f);
var Functor14 = {
  URI: URI8,
  map: (f, g) => map8(g)(f)
};
var of6 = constant;
var ap7 = (f) => (g) => (x) => g(x)(f(x));
var Applicative5 = {
  ...Functor14,
  of: of6,
  ap: (f, g) => ap7(g)(f)
};
var apFirst6 = apFirst(Applicative5);
var apSecond6 = apSecond(Applicative5);
var chain5 = (f) => (g) => (x) => f(g(x))(x);
var Monad5 = {
  ...Applicative5,
  chain: (f, g) => chain5(g)(f)
};
var Do5 = of6({});
var bindTo6 = bindTo(Functor14);
var bind6 = bind(Monad5);
var apS6 = apS(Applicative5);
var let_6 = let_(Functor14);
var unary = tupled;
var guard4 = (branches) => (fallback) => (input) => pipe(branches, map3(([f, g]) => flow(fromPredicate3(f), map4(g))), concatAll5(getMonoid(getMonoid6(first()))()), apply(input), getOrElse(() => fallback(input)));
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
var applyEvery = concatAll5(getMonoid7());

// node_modules/fp-ts-std/dist/esm/Predicate.js
var anyPass = (fs) => concatAll5(getMonoidAny())(fs);

// extensions/star-ratings/app.tsx
var import_spectacles_ts = __toESM(require_dist(), 1);

// shared/fp.tsx
var guard42 = (branches) => guard4(branches);
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

// shared/api.tsx
var { URI: URI9 } = Spicetify;
var fetchGQLAlbum = async (uri, offset = 0, limit = 487) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
  uri,
  locale: Spicetify.Locale.getLocale(),
  offset,
  limit
})).data.albumUnion;
var removeWebPlaylistTracks = async (playlist, tracks) => Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/playlists/${playlist}/tracks`, {
  tracks: tracks.map((uri) => ({ uri }))
});
var fetchWebArtistsSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists);
var fetchWebPlaylistsSpot = chunckify(1)(async ([id]) => [
  await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)
]);
var fetchWebAlbumsSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums);
var fetchWebTracksSpot = chunckify(50)(async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks);
var fetchPlatArtistLikedTracks = async (uri, offset = 0, limit = 100) => (await Spicetify.Platform.LibraryAPI.getTracks({ uri, offset, limit })).items;
var fetchPlatPlaylistContents = async (uri) => (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
var createPlatFolder = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createFolder(name, location);
var createPlatPlaylist = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createPlaylist(name, location);
var setPlatPlaylistVisibility = async (playlist, visibleForAll) => await Spicetify.Platform.PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED");
var fetchPlatFolder = async (folder) => await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder });
var addPlatPlaylistTracks = async (playlist, tracks, location = {}) => await Spicetify.Platform.PlaylistAPI.add(playlist, tracks, location);
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

// shared/settings.tsx
var import_react = __toESM(require_react(), 1);
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
    }, field.options.map((option, i) => import_react.default.createElement("option", {
      selected: i === SettingsSection.getFieldValue(field.id),
      value: i + 1
    }, option)));
  };
  SettingHidden = () => import_react.default.createElement(import_react.default.Fragment, null);
}
var FieldType;
(function(FieldType2) {
  FieldType2["HIDDEN"] = "hidden";
  FieldType2["INPUT"] = "input";
  FieldType2["DROPDOWN"] = "dropdown";
  FieldType2["BUTTON"] = "button";
  FieldType2["TOGGLE"] = "toggle";
})(FieldType || (FieldType = {}));

// extensions/star-ratings/stars.tsx
var { URI: URI10 } = Spicetify;
var createStar = (starsId, nth, size7) => {
  const xmlns = "http://www.w3.org/2000/svg";
  const star = document.createElementNS(xmlns, "svg");
  const id = `${starsId}-${nth}`;
  star.id = id;
  star.style.minHeight = `${size7}px`;
  star.style.minWidth = `${size7}px`;
  star.setAttributeNS(null, "width", `${size7}px`);
  star.setAttributeNS(null, "height", `${size7}px`);
  star.setAttributeNS(null, "viewBox", `0 0 32 32`);
  const defs = document.createElementNS(xmlns, "defs");
  star.append(defs);
  const gradient = document.createElementNS(xmlns, "linearGradient");
  defs.append(gradient);
  gradient.id = `${id}-gradient`;
  const stop1 = document.createElementNS(xmlns, "stop");
  gradient.append(stop1);
  stop1.id = `${id}-gradient-left`;
  stop1.setAttributeNS(null, "offset", "50%");
  stop1.setAttributeNS(null, "stop-color", "var(--spice-button-disabled)");
  const stop2 = document.createElementNS(xmlns, "stop");
  gradient.append(stop2);
  stop2.id = `${id}-gradient-right`;
  stop2.setAttributeNS(null, "offset", "50%");
  stop2.setAttributeNS(null, "stop-color", "var(--spice-button-disabled)");
  const path = document.createElementNS(xmlns, "path");
  star.append(path);
  path.setAttributeNS(null, "fill", `url(#${gradient.id})`);
  path.setAttributeNS(null, "d", "M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118l11.547-1.2L16.026,0.6L20.388,10.918z");
  return [star, [stop1, stop2]];
};
var createStars = (idSuffix, size7) => {
  const id = `stars-${idSuffix}`;
  const starsContainer = document.createElement("span");
  {
    starsContainer.className = "stars";
    starsContainer.id = id;
    starsContainer.style.whiteSpace = "nowrap";
    starsContainer.style.alignItems = "center";
    starsContainer.style.display = "flex";
  }
  const starsConstructs = exports_NonEmptyArray.range(1, 5).map((i) => createStar(id, i, size7));
  pipe(starsConstructs, exports_Array.unzip, ([starElements]) => starElements, exports_Array.map((starElement) => starsContainer.append(starElement)));
  return [starsContainer, starsConstructs];
};
var setStarsGradientByRating = (rating) => (starsSVGStops) => {
  const setHalfStarLit = (lit) => (nth) => starsSVGStops[Math.floor(nth / 2)][nth % 2].setAttributeNS(null, "stop-color", `var(--spice-button${lit ? "" : "-disabled"})`);
  pipe(exports_NonEmptyArray.range(0, 9), exports_Array.spanLeft((hi) => hi < rating), ({ init: init5, rest }) => {
    init5.map(setHalfStarLit(true));
    rest.map(setHalfStarLit(false));
  });
};
var calculateRatingFromMouseEvent = (starElement, nth) => (e) => {
  const rect = starElement.getBoundingClientRect();
  const leftOffsetFromHeart = e.clientX - rect.left;
  const isHalf = CONFIG.halfStarRatings && leftOffsetFromHeart < HALF_STAR_LENGTH;
  return 2 * (nth + 1) - Number(isHalf);
};
var onStarClick = (nth, starElement, getTrackUri) => async (e) => {
  const trackUri = getTrackUri();
  const oldRating = tracksRatings[trackUri];
  let newRating = calculateRatingFromMouseEvent(starElement, nth)(e);
  const heartThreshold = starsS2N(CONFIG.heartThreshold);
  if (heartThreshold) {
    const shouldBeHearted = newRating >= heartThreshold;
    const [isHearted] = await isLiked([trackUri]);
    if (isHearted !== shouldBeHearted)
      toggleLiked([trackUri]);
  }
  if (oldRating === newRating)
    newRating = 0;
  if (oldRating)
    pipe(playlistUris.slice(0, oldRating + 1), exports_Array.filter(Boolean), exports_Array.map((playlistUri) => URI10.from(playlistUri).id), exports_Array.map((playlistId) => removeWebPlaylistTracks(playlistId, [trackUri])));
  tracksRatings[trackUri] = newRating;
  if (newRating) {
    let playlistUri = playlistUris[newRating];
    if (!playlistUri) {
      playlistUri = await createPlatPlaylist(starsN2S(newRating), SpotifyLoc.after.fromUri(CONFIG.ratingsFolderUri));
      setPlatPlaylistVisibility(playlistUri, false);
      playlistUris[newRating] = playlistUri;
    }
    addPlatPlaylistTracks(playlistUri, [trackUri]);
  }
  updateNowPlayingStars();
  const trackStarsContainer = getStarsContainer(`${URI10.fromString(trackUri).id}`);
  if (trackStarsContainer) {
    pipe(trackStarsContainer, setStarsGradientFromContainerByRating(newRating));
    trackStarsContainer.style.visibility = newRating ? "visible" : "hidden";
  }
};

// extensions/star-ratings/util.tsx
var RATINGS_FOLDER_NAME = "Ratings";
var STAR_SIZE = 16;
var HALF_STAR_LENGTH = STAR_SIZE / 2;
var starsS2N = (S) => Number(S) * 2;
var starsN2S = (N) => (N / 2).toFixed(1);
var getStarsFromStarsContainer = (starsElement) => Array.from(starsElement.children);
var getStarStopsFromStar = (star) => Array.from(star.firstChild.firstChild.childNodes);
var getStarsStopsFromStarsContainer = flow(getStarsFromStarsContainer, exports_Array.map(getStarStopsFromStar));
var setStarsGradientFromContainerByRating = (rating) => flow(getStarsStopsFromStarsContainer, setStarsGradientByRating(rating));
var getStarsContainer = (idSuffix) => document.getElementById(`stars-${idSuffix}`);
var getStars = flow(getStarsContainer, getStarsFromStarsContainer);
var getStarsStops = flow(getStarsContainer, getStarsStopsFromStarsContainer);
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-indexable"));
var getTrackListHeader = (trackList) => trackList.querySelector(".main-trackList-trackListHeader")?.firstChild;
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll("div.main-trackList-trackListRow"));
var getLastColIndex = (parent) => {
  const lastCol = parent.querySelector("div.main-trackList-rowSectionEnd");
  const lastColIndex = Number(lastCol.getAttribute("aria-colindex"));
  return [lastColIndex, lastCol];
};
var getFirstPlus = (parent) => parent.querySelector(".Button-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle, .Button-textBrightAccent-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle");
var getTrackListTrackUri = (track) => (track = Object.values(track)[0].child.child.child.child, track.pendingProps.uri ?? track.child.pendingProps.uri);

// extensions/star-ratings/settings.tsx
var settings3 = new SettingsSection("Star Ratings", "star-ratings").addToggle("hideHearts", "Hide Hearts").addToggle("halfStarRatings", "Half star ratings").addToggle("showInTrackLists", "Show in tracklists").addToggle("nowPlayingStarsOnRight", "Place the stars for now playing track on the right").addInput("heartThreshold", "Threshold for liking trakcs", exports_Task.of("3.5")).addInput("skipThreshold", "Threshold for skipping trakcs", exports_Task.of("1.5")).addInput("ratingsFolderUri", "Ratings folder uri", async () => (await createPlatFolder(RATINGS_FOLDER_NAME)).uri, loadRatings);
settings3.pushSettings();
var CONFIG = settings3.toObject();

// extensions/star-ratings/ratings.tsx
var w = (n) => Math.exp(n);
var aggregateRatings = (uris) => pipe(uris, exports_Array.map((uri) => tracksRatings[uri]), exports_Array.filter(Boolean), exports_Array.map((r) => [r, w(r)]), exports_ReadonlyArray.unzip, ([rs, wrs]) => exports_ReadonlyArray.reduceWithIndex(0, (i, s, r) => s + r * wrs[i])(rs) / exports_ReadonlyArray.reduce(0, (s, wr) => s + wr)(wrs) || 0);
var addRatingsListenersToStars = ([starsContainer, starsConstructs], getTrackUri) => {
  const [starsElements, starsSVGStops] = pipe(starsConstructs, exports_ReadonlyArray.unzip);
  starsContainer.addEventListener("mouseout", () => setStarsGradientByRating(tracksRatings[getTrackUri()] ?? 0)(starsSVGStops));
  pipe(starsElements, exports_ReadonlyArray.mapWithIndex((nth, starElement) => {
    starElement.addEventListener("mousemove", flow(calculateRatingFromMouseEvent(starElement, nth), flip(setStarsGradientByRating)(starsSVGStops)));
    starElement.addEventListener("click", onStarClick(nth, starsElements[nth], getTrackUri));
  }));
};
var loadRatings = async () => {
  const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri);
  const starsS2Narray = pipe(range2(0, 10), exports_Array.map((s) => [starsN2S(s), s]), exports_Record.fromEntries);
  playlistUris = pipe(ratingsFolder.items, exports_Array.map((p) => [p.type, p.uri, starsS2Narray[p.name]]), exports_Array.reduce([], (acc, [type, uri, starsN]) => (type === "playlist" && starsN ? acc[starsN] = uri : [], acc)));
  globalThis.tracksRatings = tracksRatings = await pipe(playlistUris, exports_Array.map(fetchPlatPlaylistContents), (ps) => Promise.all(ps), pMchain(exports_Array.map((tracks) => tracks ?? [])), pMchain(exports_Array.map(exports_Array.map((t) => t.uri))), pMchain(exports_Array.flatMap((trackUris, rating) => trackUris.map((trackUri) => [trackUri, rating]))), pMchain(exports_Array.reduce({}, (acc, [trackUri, rating]) => Object.assign(acc, {
    [trackUri]: Math.max(rating, acc[trackUri] ?? 0)
  }))));
};
var playlistUris = [];
var tracksRatings = {};

// extensions/star-ratings/app.tsx
var { URI: URI11 } = Spicetify;
var customTrackListColCss = [
  null,
  null,
  null,
  null,
  "[index] 16px [first] 4fr [var1] 2fr [var2] 1fr [last] minmax(120px,1fr)",
  "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] 2fr [last] minmax(120px,1fr)",
  "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] minmax(120px,2fr) [var3] 2fr [last] minmax(120px,1fr)"
];
loadRatings();
var updateTrackListStars = flow(getTrackLists, exports_Array.map((trackList) => {
  const trackListTracks = getTrackListTracks(trackList);
  if (trackListTracks.length === 0)
    return;
  const hasStars = (parent) => parent.getElementsByClassName("stars").length > 0;
  const locationUri = URI11.fromString(Spicetify.Platform.History.location.pathname);
  const firstElement = URI11.isArtist(locationUri) ? trackListTracks[0] : getTrackListHeader(trackList) ?? trackListTracks[0];
  const [lastColIndex] = getLastColIndex(firstElement);
  const newTrackListColCss = customTrackListColCss[lastColIndex - pipe(firstElement, hasStars, Number)];
  if (!newTrackListColCss)
    return;
  firstElement.style.gridTemplateColumns = newTrackListColCss;
  pipe(trackListTracks, exports_Array.map((track) => {
    const heart = getFirstPlus(track);
    if (heart)
      heart.style.display = CONFIG.hideHearts ? "none" : "flex";
    if (hasStars(track))
      return;
    let ratingColumn = track.querySelector(".starRatings");
    if (!ratingColumn) {
      const lastColumn = track.querySelector(".main-trackList-rowSectionEnd");
      const colIndex = Number(lastColumn?.getAttribute("aria-colindex"));
      ratingColumn = document.createElement("div");
      ratingColumn.setAttribute("aria-colindex", String(colIndex));
      lastColumn?.setAttribute("aria-colindex", String(colIndex + 1));
      ratingColumn.role = "gridcell";
      ratingColumn.style.display = "flex";
      ratingColumn.classList.add("main-trackList-rowSectionVariable");
      ratingColumn.classList.add("starRatings");
      track.insertBefore(ratingColumn, lastColumn);
      track.style.gridTemplateColumns = newTrackListColCss;
    }
    const trackUri = getTrackListTrackUri(track);
    const uri = URI11.fromString(trackUri);
    if (!URI11.isTrack(uri))
      return;
    const [starsContainer, starsConstructs] = createStars(uri.id, STAR_SIZE);
    ratingColumn.appendChild(starsContainer);
    pipe(starsConstructs, exports_Array.unzip, ([_, starsStops]) => starsStops, setStarsGradientByRating(tracksRatings[trackUri] ?? 0));
    addRatingsListenersToStars([starsContainer, starsConstructs], () => trackUri);
    const setVisibleCond = () => starsContainer.style.visibility = tracksRatings[trackUri] ? "visible" : "hidden";
    track.addEventListener("mouseover", () => starsContainer.style.visibility = "visible");
    track.addEventListener("mouseout", setVisibleCond);
    setVisibleCond();
  }));
}));
var mainElement;
var mainElementObserver = new MutationObserver(() => CONFIG.showInTrackLists ? updateTrackListStars() : undefined);
new MutationObserver(() => {
  const oldMainElement = mainElement;
  mainElement = document.querySelector("main");
  if (mainElement && !mainElement.isEqualNode(oldMainElement)) {
    if (oldMainElement)
      mainElementObserver.disconnect();
    mainElementObserver.observe(mainElement, {
      childList: true,
      subtree: true
    });
  }
}).observe(document.body, {
  childList: true,
  subtree: true
});
var updateCollectionStars = async (pathname, starsStops) => {
  const uri = URI11.fromString(pathname);
  if (!starsStops)
    starsStops = getStarsStops("collection");
  let uris;
  if (URI11.isAlbum(uri))
    uris = pipe(await fetchGQLAlbum(`${uri}`), identity, import_spectacles_ts.get("tracks.items"), exports_Array.map(flow(identity, import_spectacles_ts.get("track.uri"))));
  else if (URI11.isArtist(uri))
    uris = pipe(await fetchPlatArtistLikedTracks(`${uri}`), exports_Array.map(import_spectacles_ts.get("uri")));
  else if (URI11.isPlaylistV1OrV2(uri))
    uris = pipe(await fetchPlatPlaylistContents(`${uri}`), exports_Array.map(import_spectacles_ts.get("uri")));
  else
    throw "me out the window";
  setStarsGradientByRating(aggregateRatings(uris))(starsStops);
};
var lastCollectionPlayButton;
Spicetify.Platform.History.listen(async ({ pathname }) => {
  const pageHasHeart = anyPass([URI11.isAlbum, URI11.isArtist, URI11.isPlaylistV1OrV2]);
  if (!pageHasHeart(pathname))
    return;
  lastCollectionPlayButton = await waitForElement(".main-actionBar-ActionBar .main-playButton-PlayButton", 0, document.body, lastCollectionPlayButton);
  const [collectionStarsContainer, collectionStarsConstructs] = createStars("collection", STAR_SIZE * 2);
  getStarsContainer("collection")?.remove();
  lastCollectionPlayButton.after(collectionStarsContainer);
  const collectionStarsStops = pipe(collectionStarsConstructs, exports_Array.unzip, ([_, starsStops]) => starsStops);
  updateCollectionStars(pathname, collectionStarsStops);
});
var createNowPlayingStars = () => {
  if (document.querySelectorAll(".stars-now-playing").length !== 0)
    return;
  const nowPlayingElementSelector = CONFIG.nowPlayingStarsOnRight ? ".main-nowPlayingBar-extraControls" : ".main-nowPlayingWidget-trackInfo";
  const nowPlayingElement = document.querySelector(nowPlayingElementSelector);
  if (!nowPlayingElement)
    return;
  const [nowPlayingStarsContainer, nowPlayingStarConstruct] = createStars("now-playing", STAR_SIZE);
  nowPlayingStarsContainer.style.display = "none";
  nowPlayingStarsContainer.style.marginLeft = "8px";
  nowPlayingStarsContainer.style.marginRight = "8px";
  if (!CONFIG.nowPlayingStarsOnRight)
    nowPlayingElement.after(nowPlayingStarsContainer);
  else
    nowPlayingElement.prepend(nowPlayingStarsContainer);
  addRatingsListenersToStars([nowPlayingStarsContainer, nowPlayingStarConstruct], () => Spicetify.Player.data.track?.uri);
};
createNowPlayingStars();
var updateNowPlayingStars = () => {
  const trackUri = Spicetify.Player.data.track?.uri;
  const nowPlayingStarsContainer = getStarsContainer("now-playing");
  nowPlayingStarsContainer.style.display = Spicetify.URI.isTrack(trackUri) ? "flex" : "none";
  pipe(nowPlayingStarsContainer, setStarsGradientFromContainerByRating(tracksRatings[trackUri] ?? 0));
};
Spicetify.Player.addEventListener("songchange", () => {
  const trackUri = Spicetify.Player.data.track?.uri;
  if (Number(CONFIG.skipThreshold) && (tracksRatings[trackUri] || Number.MAX_SAFE_INTEGER) <= starsS2N(CONFIG.skipThreshold))
    return Spicetify.Player.next();
  updateNowPlayingStars();
});
updateNowPlayingStars();
export {
  updateNowPlayingStars
};

//# debugId=AA6BAC1C6A7C05D364756e2164756e21
