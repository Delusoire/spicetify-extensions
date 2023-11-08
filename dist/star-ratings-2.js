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
  var getMonoid8 = function(M) {
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
  exports.getMonoid = getMonoid8;
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
  var some4 = function(a) {
    return { _tag: "Some", value: a };
  };
  exports.some = some4;
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
  var singleton2 = function(a) {
    return [a];
  };
  exports.singleton = singleton2;
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
  var apFirst5 = function(A) {
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
  var apSecond5 = function(A) {
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
  var apS5 = function(F) {
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
  exports.apFirst = apFirst5;
  exports.apSecond = apSecond5;
  exports.apS = apS5;
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
  var chainFirst4 = function(M) {
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
  var bind5 = function(M) {
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
  exports.chainFirst = chainFirst4;
  exports.tap = tap4;
  exports.bind = bind5;
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
  var getMonoid8 = function() {
    return {
      concat: (0, exports.getSemigroup)().concat,
      empty: empty7
    };
  };
  exports.getMonoid = getMonoid8;
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
  var map5 = function(F, G) {
    return function(f) {
      return function(fa) {
        return F.map(fa, function(ga) {
          return G.map(ga, f);
        });
      };
    };
  };
  var flap4 = function(F) {
    return function(a) {
      return function(fab) {
        return F.map(fab, function(f) {
          return f(a);
        });
      };
    };
  };
  var bindTo5 = function(F) {
    return function(name) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return _a = {}, _a[name] = a, _a;
        });
      };
    };
  };
  var let_5 = function(F) {
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
    var _map4 = map5(F, G);
    return {
      map: function(fga, f) {
        return (0, function_1.pipe)(fga, _map4(f));
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
  exports.map = map5;
  exports.flap = flap4;
  exports.bindTo = bindTo5;
  exports.let = let_5;
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
  var getMonoid8 = function() {
    return {
      concat: (0, exports.getSemigroup)().concat,
      empty: (0, exports.fromCompare)(function() {
        return 0;
      })
    };
  };
  exports.getMonoid = getMonoid8;
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
  var fold = function(S) {
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
  var last5 = function() {
    return { concat: function(_2, y) {
      return y;
    } };
  };
  exports.last = last5;
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
  exports.fold = fold;
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
  var filter2 = function(predicate) {
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
  var union5 = function(E) {
    var uniqE = (0, exports.uniq)(E);
    return function(second) {
      return function(first2) {
        return uniqE((0, function_1.pipe)(first2, concat3(second)));
      };
    };
  };
  exports.union = union5;
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
  var _map4 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _mapWithIndex2 = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f));
  };
  var _ap3 = function(fab, fa) {
    return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
  };
  var _extend2 = function(wa, f) {
    return (0, function_1.pipe)(wa, (0, exports.extend)(f));
  };
  var _reduce2 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f));
  };
  var _foldMap2 = function(M) {
    var foldMapM = (0, exports.foldMap)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapM(f));
    };
  };
  var _reduceRight2 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f));
  };
  var _traverse2 = function(F) {
    var traverseF = (0, exports.traverse)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseF(f));
    };
  };
  var _alt2 = function(fa, that) {
    return (0, function_1.pipe)(fa, (0, exports.alt)(that));
  };
  var _reduceWithIndex2 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f));
  };
  var _foldMapWithIndex2 = function(M) {
    var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
    return function(fa, f) {
      return (0, function_1.pipe)(fa, foldMapWithIndexM(f));
    };
  };
  var _reduceRightWithIndex2 = function(fa, b, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f));
  };
  var _traverseWithIndex2 = function(F) {
    var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseWithIndexF(f));
    };
  };
  exports.of = _.singleton;
  var altW2 = function(that) {
    return function(as4) {
      return (0, function_1.pipe)(as4, concatW2(that()));
    };
  };
  exports.altW = altW2;
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
  var extend2 = function(f) {
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
  exports.extend = extend2;
  exports.duplicate = (0, exports.extend)(function_1.identity);
  exports.flatten = (0, exports.flatMap)(function_1.identity);
  var map5 = function(f) {
    return (0, exports.mapWithIndex)(function(_2, a) {
      return f(a);
    });
  };
  exports.map = map5;
  var mapWithIndex2 = function(f) {
    return function(as4) {
      var out = [f(0, (0, exports.head)(as4))];
      for (var i = 1;i < as4.length; i++) {
        out.push(f(i, as4[i]));
      }
      return out;
    };
  };
  exports.mapWithIndex = mapWithIndex2;
  var reduce5 = function(b, f) {
    return (0, exports.reduceWithIndex)(b, function(_2, b2, a) {
      return f(b2, a);
    });
  };
  exports.reduce = reduce5;
  var foldMap5 = function(S) {
    return function(f) {
      return function(as4) {
        return as4.slice(1).reduce(function(s, a) {
          return S.concat(s, f(a));
        }, f(as4[0]));
      };
    };
  };
  exports.foldMap = foldMap5;
  var reduceRight5 = function(b, f) {
    return (0, exports.reduceRightWithIndex)(b, function(_2, b2, a) {
      return f(b2, a);
    });
  };
  exports.reduceRight = reduceRight5;
  var reduceWithIndex5 = function(b, f) {
    return function(as4) {
      return as4.reduce(function(b2, a, i) {
        return f(i, b2, a);
      }, b);
    };
  };
  exports.reduceWithIndex = reduceWithIndex5;
  var foldMapWithIndex5 = function(S) {
    return function(f) {
      return function(as4) {
        return as4.slice(1).reduce(function(s, a, i) {
          return S.concat(s, f(i + 1, a));
        }, f(0, as4[0]));
      };
    };
  };
  exports.foldMapWithIndex = foldMapWithIndex5;
  var reduceRightWithIndex5 = function(b, f) {
    return function(as4) {
      return as4.reduceRight(function(b2, a, i) {
        return f(i, a, b2);
      }, b);
    };
  };
  exports.reduceRightWithIndex = reduceRightWithIndex5;
  var traverse2 = function(F) {
    var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
    return function(f) {
      return traverseWithIndexF(function(_2, a) {
        return f(a);
      });
    };
  };
  exports.traverse = traverse2;
  var sequence2 = function(F) {
    return (0, exports.traverseWithIndex)(F)(function_1.SK);
  };
  exports.sequence = sequence2;
  var traverseWithIndex2 = function(F) {
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
  exports.traverseWithIndex = traverseWithIndex2;
  exports.extract = _.head;
  exports.URI = "ReadonlyNonEmptyArray";
  var getShow5 = function(S) {
    return {
      show: function(as4) {
        return "[".concat(as4.map(S.show).join(", "), "]");
      }
    };
  };
  exports.getShow = getShow5;
  var getSemigroup7 = function() {
    return {
      concat: concat3
    };
  };
  exports.getSemigroup = getSemigroup7;
  var getEq5 = function(E) {
    return (0, Eq_1.fromEquals)(function(xs, ys) {
      return xs.length === ys.length && xs.every(function(x, i) {
        return E.equals(x, ys[i]);
      });
    });
  };
  exports.getEq = getEq5;
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
    map: _map4
  };
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.Pointed = {
    URI: exports.URI,
    of: exports.of
  };
  exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map4,
    mapWithIndex: _mapWithIndex2
  };
  exports.Apply = {
    URI: exports.URI,
    map: _map4,
    ap: _ap3
  };
  exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
  exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
  exports.Applicative = {
    URI: exports.URI,
    map: _map4,
    ap: _ap3,
    of: exports.of
  };
  exports.Chain = {
    URI: exports.URI,
    map: _map4,
    ap: _ap3,
    chain: exports.flatMap
  };
  exports.chainFirst = (0, Chain_1.chainFirst)(exports.Chain);
  exports.Monad = {
    URI: exports.URI,
    map: _map4,
    ap: _ap3,
    of: exports.of,
    chain: exports.flatMap
  };
  exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2
  };
  exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2,
    reduceWithIndex: _reduceWithIndex2,
    foldMapWithIndex: _foldMapWithIndex2,
    reduceRightWithIndex: _reduceRightWithIndex2
  };
  exports.Traversable = {
    URI: exports.URI,
    map: _map4,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2,
    traverse: _traverse2,
    sequence: exports.sequence
  };
  exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map4,
    mapWithIndex: _mapWithIndex2,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2,
    traverse: _traverse2,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex2,
    foldMapWithIndex: _foldMapWithIndex2,
    reduceRightWithIndex: _reduceRightWithIndex2,
    traverseWithIndex: _traverseWithIndex2
  };
  exports.Alt = {
    URI: exports.URI,
    map: _map4,
    alt: _alt2
  };
  exports.Comonad = {
    URI: exports.URI,
    map: _map4,
    extend: _extend2,
    extract: exports.extract
  };
  exports.Do = (0, exports.of)(_.emptyRecord);
  exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
  var let_5 = (0, Functor_1.let)(exports.Functor);
  exports.let = let_5;
  exports.bind = (0, Chain_1.bind)(exports.Chain);
  exports.apS = (0, Apply_1.apS)(exports.Apply);
  exports.head = exports.extract;
  exports.tail = _.tail;
  var last5 = function(as4) {
    return as4[as4.length - 1];
  };
  exports.last = last5;
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
  exports.filter = filter2;
  var filterWithIndex2 = function(predicate) {
    return function(as4) {
      return (0, exports.fromReadonlyArray)(as4.filter(function(a, i) {
        return predicate(i, a);
      }));
    };
  };
  exports.filterWithIndex = filterWithIndex2;
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
    map: _map4,
    mapWithIndex: _mapWithIndex2,
    ap: _ap3,
    chain: exports.flatMap,
    extend: _extend2,
    extract: exports.extract,
    reduce: _reduce2,
    foldMap: _foldMap2,
    reduceRight: _reduceRight2,
    traverse: _traverse2,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex2,
    foldMapWithIndex: _foldMapWithIndex2,
    reduceRightWithIndex: _reduceRightWithIndex2,
    traverseWithIndex: _traverseWithIndex2,
    alt: _alt2
  };
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
function fromPredicate(predicate) {
  return function(a) {
    return predicate(a) ? some2(a) : none2;
  };
}
var none2 = none;
var some2 = some;
var getRight = function(ma) {
  return ma._tag === "Left" ? none2 : some2(ma.right);
};
var _map = function(fa, f) {
  return pipe(fa, map(f));
};
var _ap = function(fab, fa) {
  return pipe(fab, ap2(fa));
};
var URI2 = "Option";
var getMonoid4 = function(S) {
  return {
    concat: function(x, y) {
      return isNone2(x) ? y : isNone2(y) ? x : some2(S.concat(x.value, y.value));
    },
    empty: none2
  };
};
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
var ap2 = function(fa) {
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
var getOrElseW = function(onNone) {
  return function(ma) {
    return isNone2(ma) ? onNone() : ma.value;
  };
};
var getOrElse = getOrElseW;
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
      return getMonoid5;
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
      return fromPredicate2;
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
      return ap3;
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
    var M = getMonoid3();
    return sort(ords.reduce(M.concat, M.empty));
  }
  return copy;
};
var union2 = function(E) {
  var uniqE = uniq(E);
  return function(second) {
    return function(first2) {
      return uniqE(pipe(first2, concat(second)));
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
function fromPredicate2(predicate) {
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
  return function(first2) {
    return isEmpty2(first2) ? copy2(second) : isEmpty2(second) ? copy2(first2) : first2.concat(second);
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
  return pipe(fab, ap3(fa));
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
var ap3 = function(fa) {
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
var getSemigroup4 = function() {
  return {
    concat: function(first2, second) {
      return first2.concat(second);
    }
  };
};
var getMonoid5 = function() {
  return {
    concat: getSemigroup4().concat,
    empty: []
  };
};
var getEq4 = getEq3;
var getOrd2 = getOrd;
var getUnionSemigroup = function(E) {
  var unionE = union4(E);
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
  var intersectionE = intersection2(E);
  return {
    concat: function(first2, second) {
      return intersectionE(second)(first2);
    }
  };
};
var getDifferenceMagma = function(E) {
  var differenceE = difference2(E);
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
var Apply3 = {
  URI: URI3,
  map: _map2,
  ap: _ap2
};
var apFirst2 = apFirst(Apply3);
var apSecond2 = apSecond(Apply3);
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
var apS2 = apS(Apply3);
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
var ap4 = (f) => (g) => (x) => g(x)(f(x));
var Applicative2 = {
  ...Functor6,
  of: of4,
  ap: (f, g) => ap4(g)(f)
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
var guard3 = (branches) => (fallback) => (input) => pipe(branches, map2(([f, g]) => flow(fromPredicate(f), map(g))), concatAll4(getMonoid(getMonoid4(first()))()), apply(input), getOrElse(() => fallback(input)));
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
var applyEvery = concatAll4(getMonoid6());

// node_modules/fp-ts-std/dist/esm/Predicate.js
var anyPass = (fs) => concatAll4(getMonoidAny())(fs);

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
      return map4;
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
      return ap5;
    }
  },
  URI: () => {
    {
      return URI5;
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
      return Monad3;
    }
  },
  Functor: () => {
    {
      return Functor8;
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
      return Chain7;
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
  return pipe(fa, map4(f));
};
var _apPar = function(fab, fa) {
  return pipe(fab, ap5(fa));
};
var _apSeq = function(fab, fa) {
  return flatMap3(fab, function(f) {
    return pipe(fa, map4(f));
  });
};
var map4 = function(f) {
  return function(fa) {
    return function() {
      return Promise.resolve().then(fa).then(f);
    };
  };
};
var ap5 = function(fa) {
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
var flatMap3 = dual(2, function(ma, f) {
  return function() {
    return Promise.resolve().then(ma).then(function(a) {
      return f(a)();
    });
  };
});
var flatten2 = flatMap3(identity);
var URI5 = "Task";
var Functor8 = {
  URI: URI5,
  map: _map3
};
var as3 = dual(2, as(Functor8));
var asUnit3 = asUnit(Functor8);
var flap3 = flap(Functor8);
var Pointed2 = {
  URI: URI5,
  of: of5
};
var ApplyPar = {
  URI: URI5,
  map: _map3,
  ap: _apPar
};
var apFirst4 = apFirst(ApplyPar);
var apSecond4 = apSecond(ApplyPar);
var ApplicativePar = {
  URI: URI5,
  map: _map3,
  ap: _apPar,
  of: of5
};
var ApplySeq = {
  URI: URI5,
  map: _map3,
  ap: _apSeq
};
var ApplicativeSeq = {
  URI: URI5,
  map: _map3,
  ap: _apSeq,
  of: of5
};
var Chain7 = {
  URI: URI5,
  map: _map3,
  ap: _apPar,
  chain: flatMap3
};
var Monad3 = {
  URI: URI5,
  map: _map3,
  of: of5,
  ap: _apPar,
  chain: flatMap3
};
var MonadIO = {
  URI: URI5,
  map: _map3,
  of: of5,
  ap: _apPar,
  chain: flatMap3,
  fromIO
};
var fromTask = identity;
var MonadTask = {
  URI: URI5,
  map: _map3,
  of: of5,
  ap: _apPar,
  chain: flatMap3,
  fromIO,
  fromTask
};
var FromIO2 = {
  URI: URI5,
  fromIO
};
var _FlatMap = {
  flatMap: flatMap3
};
var _FromIO = {
  fromIO: FromIO2.fromIO
};
var flatMapIO2 = flatMapIO(_FromIO, _FlatMap);
var tap3 = dual(2, tap(Chain7));
var tapIO2 = dual(2, tapIO(FromIO2, Chain7));
var fromIOK2 = fromIOK(FromIO2);
var chainIOK = flatMapIO2;
var chainFirstIOK = tapIO2;
var FromTask = {
  URI: URI5,
  fromIO,
  fromTask
};
var never = function() {
  return new Promise(function(_) {
    return;
  });
};
var Do3 = of5(emptyRecord);
var bindTo4 = bindTo(Functor8);
var let_4 = let_(Functor8);
var bind4 = bind(Chain7);
var apS4 = apS(ApplyPar);
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
var chain3 = flatMap3;
var chainFirst3 = tap3;
var task = {
  URI: URI5,
  map: _map3,
  of: of5,
  ap: _apPar,
  chain: flatMap3,
  fromIO,
  fromTask
};
var taskSeq = {
  URI: URI5,
  map: _map3,
  of: of5,
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
  equals: function(first2, second) {
    return first2 === second;
  }
};
var Semigroup2 = {
  concat: function(first2, second) {
    return first2 + second;
  }
};
var empty6 = "";
var Monoid3 = {
  concat: Semigroup2.concat,
  empty: empty6
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

// extensions/star-ratings-2/controls.tsx
var import_react3 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);

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
//! Does location actually point to document.body?
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// shared/api.tsx
var { URI: URI6 } = Spicetify;
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

// extensions/star-ratings-2/dropdown.tsx
var ReadonlyNonEmptyArray2 = __toESM(require_ReadonlyNonEmptyArray(), 1);
var import_react2 = __toESM(require_react(), 1);

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
    }, guard4([
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

// extensions/star-ratings-2/settings.tsx
var RATINGS_FOLDER_NAME = "Ratings";
var settings2 = new SettingsSection("Star Ratings 2", "star-ratings-2").addInput("heartThreshold", "Threshold for liking trakcs", exports_Task.of("3")).addInput("skipThreshold", "Threshold for skipping trakcs", exports_Task.of("1")).addInput("ratingsFolderUri", "Ratings folder uri", async () => (await createPlatFolder(RATINGS_FOLDER_NAME)).uri, loadRatings);
settings2.pushSettings();
var CONFIG = settings2.toObject();

// extensions/star-ratings-2/ratings.tsx
var loadRatings = async () => {
  const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri);
  playlistUris = pipe(ratingsFolder.items, exports_Array.map((p) => [p.uri, Number(p.name)]), exports_Array.reduce([], (uris, [uri, rating]) => (uris[rating] = uri, uris)));
  globalThis.tracksRatings = tracksRatings = await pipe(playlistUris, exports_Array.map(fetchPlatPlaylistContents), (ps) => Promise.all(ps), pMchain(exports_Array.map((tracks) => tracks ?? [])), pMchain(exports_Array.map(exports_Array.map((t) => t.uri))), pMchain(exports_Array.flatMap((trackUris, rating) => trackUris.map((trackUri) => [trackUri, rating]))), pMchain(exports_Array.reduce({}, (acc, [trackUri, rating]) => Object.assign(acc, {
    [trackUri]: Math.max(rating, acc[trackUri] ?? 0)
  }))));
};
var toggleRating = async (uri, rating) => {
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
  const { pathname } = Spicetify.Platform.History.location;
  updateCollectionControls(Spicetify.URI.fromString(pathname));
};
var playlistUris = [];
var tracksRatings = {};

// extensions/star-ratings-2/dropdown.tsx
var RatingButton = ({ i, uri }) => import_react2.default.createElement("button", {
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
var Dropdown = ({ uri }) => import_react2.default.createElement("div", {
  className: "rating-dropdown"
}, ReadonlyNonEmptyArray2.range(1, 5).map((i) => import_react2.default.createElement(RatingButton, {
  i,
  uri
})));

// extensions/star-ratings-2/util.tsx
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-indexable"));
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll("div.main-trackList-trackListRow"));
var getTrackListTrackUri = (track) => (track = Object.values(track)[0].child.child.child.child, track.pendingProps.uri ?? track.child.pendingProps.uri);
var getNowPlayingBar = () => document.querySelector("div.main-nowPlayingBar-nowPlayingBar");
var getCollectionActionBarRow = () => document.querySelector(`div.main-actionBar-ActionBarRow`);
var playlistButtonSelector = `button[aria-label="Add to Liked Songs"], button[aria-label="Add to playlist"]`;
var getPlaylistButton = (parent) => parent.querySelector(playlistButtonSelector);
var getCollectionPlaylistButton = () => {
  const ab = getCollectionActionBarRow();
  return ab.querySelector(`button[aria-label="Remove from Your Library"], button[aria-label="Save to Your Library"]`);
};

// extensions/star-ratings-2/controls.tsx
var { URI: URI7 } = Spicetify;
var colorByRating = ["unset", "#ED5564", "#FFCE54", "A0D568", "#4FC1E8", "#AC92EB"];
var colorizePlaylistButton = (btn, rating) => {
  if (btn.style.fill === colorByRating[rating])
    return;
  btn.style.opacity = rating > 0 ? "1" : "unset";
  const svg = btn.querySelector("svg");
  svg.style.fill = colorByRating[rating];
};
var wrapDropdownInsidePlaylistButton = (pb, uri, forced = false) => {
  if (pb.hasAttribute("dropdown-enabled")) {
    if (!forced)
      return;
  } else
    pb.setAttribute("dropdown-enabled", "");
  const div = document.createElement("div");
  pb.appendChild(div);
  import_react_dom2.default.render(import_react3.default.createElement(Dropdown, {
    uri
  }), div);
  Spicetify.Tippy(pb, {
    content: div,
    interactive: true,
    animateFill: false,
    placement: "left",
    animation: "fade",
    zIndex: 1e4,
    delay: [200, 0],
    render(instance) {
      const popper = document.createElement("div");
      const box = document.createElement("div");
      popper.id = "context-menu";
      popper.appendChild(box);
      box.className = "main-contextMenu-tippy";
      box.appendChild(instance.props.content);
      return { popper, onUpdate: constVoid };
    },
    onShow(instance) {
      instance.popper.firstChild.classList.add("main-contextMenu-tippyEnter");
      const children = instance.reference.parentElement.children;
      const element = children.item(children.length - 1);
      element.style.marginRight = "0px";
    },
    onMount(instance) {
      requestAnimationFrame(() => {
        instance.popper.firstChild.classList.remove("main-contextMenu-tippyEnter");
        instance.popper.firstChild.classList.add("main-contextMenu-tippyEnterActive");
      });
    },
    onHide(instance) {
      requestAnimationFrame(() => {
        instance.popper.firstChild.classList.remove("main-contextMenu-tippyEnterActive");
        const children = instance.reference.parentElement.children;
        const element = children.item(children.length - 2);
        element.style.marginRight = "unset";
        instance.unmount();
      });
    }
  });
};
var updateNowPlayingControls = (newTrack, updateDropdown = true) => {
  const npb = getNowPlayingBar();
  const pb = getPlaylistButton(npb);
  colorizePlaylistButton(pb, tracksRatings[newTrack]);
  if (updateDropdown)
    wrapDropdownInsidePlaylistButton(pb, newTrack, true);
};
var updateTrackListControls = (updateDropdown = true) => {
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
var updateCollectionControls = async (uri) => {
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

// extensions/star-ratings-2/app.tsx
debugger;
var { URI: URI8 } = Spicetify;
loadRatings();
Spicetify.Player.addEventListener("songchange", () => {
  const npTrack = Spicetify.Player.data.track?.uri;
  if (Number(CONFIG.skipThreshold) && (tracksRatings[npTrack] || Number.MAX_SAFE_INTEGER) <= Number(CONFIG.skipThreshold))
    return void Spicetify.Player.next();
  updateNowPlayingControls(npTrack);
});
updateNowPlayingControls(Spicetify.Player.data.track?.uri);
var mainElement;
var mainElementObserver = new MutationObserver(() => updateTrackListControls());
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
  const pageHasHeart = anyPass([URI8.isAlbum, URI8.isArtist, URI8.isPlaylistV1OrV2]);
  if (!pageHasHeart(pathname))
    return;
  updateCollectionControls(URI8.fromString(pathname));
});

//# debugId=3BC785EEE017F13464756e2164756e21
