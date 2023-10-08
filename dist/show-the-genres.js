"use strict";
var show;
((show ||= {}).the ||= {}).genres = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/function.js
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
      for (var _i = 0; _i < arguments.length; _i++) {
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
      return f.apply(void 0, a);
    };
  }
  function untupled(f) {
    return function() {
      var a = [];
      for (var _i = 0; _i < arguments.length; _i++) {
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
        for (var i = 1; i < arguments.length; i++) {
          ret = arguments[i](ret);
        }
        return ret;
      }
    }
  }
  var __spreadArray, getSemigroup, getMonoid, apply, constNull, constUndefined, constVoid, dual;
  var init_function = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/function.js"() {
      __spreadArray = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
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
      constNull = /* @__PURE__ */ constant(null);
      constUndefined = /* @__PURE__ */ constant(void 0);
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
            return body.apply(void 0, __spreadArray([self], args, false));
          };
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/internal.js
  var __spreadArray2, isNone, isSome, none, some, isLeft, singleton, isNonEmpty, head, tail, emptyReadonlyArray, emptyRecord, has, fromReadonlyNonEmptyArray, flatMapIO;
  var init_internal = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/internal.js"() {
      init_function();
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
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
      isNonEmpty = function(as4) {
        return as4.length > 0;
      };
      head = function(as4) {
        return as4[0];
      };
      tail = function(as4) {
        return as4.slice(1);
      };
      emptyReadonlyArray = [];
      emptyRecord = {};
      has = Object.prototype.hasOwnProperty;
      fromReadonlyNonEmptyArray = function(as4) {
        return __spreadArray2([as4[0]], as4.slice(1), true);
      };
      flatMapIO = function(F, M) {
        return dual(2, function(self, f) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f(a));
          });
        });
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Apply.js
  function apFirst(A) {
    return function(second) {
      return function(first2) {
        return A.ap(A.map(first2, function(a) {
          return function() {
            return a;
          };
        }), second);
      };
    };
  }
  function apSecond(A) {
    return function(second) {
      return function(first2) {
        return A.ap(A.map(first2, function() {
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
        concat: function(first2, second) {
          return F.ap(F.map(first2, function(x) {
            return function(y) {
              return S.concat(x, y);
            };
          }), second);
        }
      };
    };
  }
  var init_Apply = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Apply.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Functor.js
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
  function let_(F) {
    return function(name, f) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f(a), _a));
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
      return asM(self, void 0);
    };
  }
  var init_Functor = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Functor.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Applicative.js
  function getApplicativeMonoid(F) {
    var f = getApplySemigroup(F);
    return function(M) {
      return {
        concat: f(M).concat,
        empty: F.of(M.empty)
      };
    };
  }
  var init_Applicative = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Applicative.js"() {
      init_Apply();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Chain.js
  function chainFirst(M) {
    var tapM = tap(M);
    return function(f) {
      return function(first2) {
        return tapM(first2, f);
      };
    };
  }
  function tap(M) {
    return function(first2, f) {
      return M.chain(first2, function(a) {
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
  var init_Chain = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Chain.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromEither.js
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
    var fromEither3 = fromEitherK(F);
    var tapM = tap(M);
    return function(self, f) {
      return tapM(self, fromEither3(f));
    };
  }
  var init_FromEither = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromEither.js"() {
      init_Chain();
      init_function();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Eq.js
  var Eq_exports = {};
  __export(Eq_exports, {
    Contravariant: () => Contravariant,
    URI: () => URI,
    contramap: () => contramap,
    eq: () => eq,
    eqBoolean: () => eqBoolean,
    eqDate: () => eqDate,
    eqNumber: () => eqNumber,
    eqStrict: () => eqStrict,
    eqString: () => eqString,
    fromEquals: () => fromEquals,
    getMonoid: () => getMonoid2,
    getSemigroup: () => getSemigroup2,
    getStructEq: () => getStructEq,
    getTupleEq: () => getTupleEq,
    strictEqual: () => strictEqual,
    struct: () => struct,
    tuple: () => tuple
  });
  var fromEquals, struct, tuple, contramap_, contramap, URI, eqStrict, empty, getSemigroup2, getMonoid2, Contravariant, getTupleEq, getStructEq, strictEqual, eq, eqBoolean, eqString, eqNumber, eqDate;
  var init_Eq = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Eq.js"() {
      init_function();
      fromEquals = function(equals) {
        return {
          equals: function(x, y) {
            return x === y || equals(x, y);
          }
        };
      };
      struct = function(eqs) {
        return fromEquals(function(first2, second) {
          for (var key in eqs) {
            if (!eqs[key].equals(first2[key], second[key])) {
              return false;
            }
          }
          return true;
        });
      };
      tuple = function() {
        var eqs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          eqs[_i] = arguments[_i];
        }
        return fromEquals(function(first2, second) {
          return eqs.every(function(E, i) {
            return E.equals(first2[i], second[i]);
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
        equals: function(first2, second) {
          return first2.valueOf() === second.valueOf();
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Ord.js
  function compare(first2, second) {
    return first2 < second ? -1 : first2 > second ? 1 : 0;
  }
  var equalsDefault, fromCompare, getSemigroup3, getMonoid3, min, max, strictOrd;
  var init_Ord = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Ord.js"() {
      init_Eq();
      equalsDefault = function(compare2) {
        return function(first2, second) {
          return first2 === second || compare2(first2, second) === 0;
        };
      };
      fromCompare = function(compare2) {
        return {
          equals: equalsDefault(compare2),
          compare: function(first2, second) {
            return first2 === second ? 0 : compare2(first2, second);
          }
        };
      };
      getSemigroup3 = function() {
        return {
          concat: function(first2, second) {
            return fromCompare(function(a, b) {
              var ox = first2.compare(a, b);
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
      min = function(O) {
        return function(first2, second) {
          return first2 === second || O.compare(first2, second) < 1 ? first2 : second;
        };
      };
      max = function(O) {
        return function(first2, second) {
          return first2 === second || O.compare(first2, second) > -1 ? first2 : second;
        };
      };
      strictOrd = {
        equals: eqStrict.equals,
        compare
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Magma.js
  var concatAll;
  var init_Magma = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Magma.js"() {
      concatAll = function(M) {
        return function(startWith) {
          return function(as4) {
            return as4.reduce(function(a, acc) {
              return M.concat(a, acc);
            }, startWith);
          };
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Semigroup.js
  var min2, max2, constant2, first, last, concatAll2, semigroupVoid, semigroupAll, semigroupAny, semigroupString, semigroupSum, semigroupProduct;
  var init_Semigroup = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Semigroup.js"() {
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
      semigroupVoid = constant2(void 0);
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js
  var __spreadArray3, empty2, isNonEmpty2, isOutOfBound, prependW, prepend, unsafeInsertAt, sort, prependAll, intersperse, extract, head2, tail2, last2, concatAll3, intercalate;
  var init_ReadonlyNonEmptyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js"() {
      init_function();
      init_internal();
      __spreadArray3 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      empty2 = emptyReadonlyArray;
      isNonEmpty2 = isNonEmpty;
      isOutOfBound = function(i, as4) {
        return i < 0 || i >= as4.length;
      };
      prependW = function(head7) {
        return function(tail6) {
          return __spreadArray3([head7], tail6, true);
        };
      };
      prepend = prependW;
      unsafeInsertAt = function(i, a, as4) {
        if (isNonEmpty2(as4)) {
          var xs = fromReadonlyNonEmptyArray(as4);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      sort = function(O) {
        return function(as4) {
          return as4.length === 1 ? as4 : as4.slice().sort(O.compare);
        };
      };
      prependAll = function(middle) {
        return function(as4) {
          var out = [middle, as4[0]];
          for (var i = 1; i < as4.length; i++) {
            out.push(middle, as4[i]);
          }
          return out;
        };
      };
      intersperse = function(middle) {
        return function(as4) {
          var rest = tail2(as4);
          return isNonEmpty2(rest) ? pipe(rest, prependAll(middle), prepend(head2(as4))) : as4;
        };
      };
      extract = head;
      head2 = extract;
      tail2 = tail;
      last2 = function(as4) {
        return as4[as4.length - 1];
      };
      concatAll3 = function(S) {
        return function(as4) {
          return as4.reduce(S.concat);
        };
      };
      intercalate = function(S) {
        var concatAllS = concatAll3(S);
        return function(middle) {
          return flow(intersperse(middle), concatAllS);
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/NonEmptyArray.js
  function concat(x, y) {
    return y ? x.concat(y) : function(y2) {
      return y2.concat(x);
    };
  }
  function cons(head7, tail6) {
    return tail6 === void 0 ? prepend2(head7) : pipe(tail6, prepend2(head7));
  }
  var __spreadArray4, isNonEmpty3, isOutOfBound2, prependW2, prepend2, appendW, append, unsafeInsertAt2, unsafeUpdateAt, uniq, sortBy, union, rotate, fromReadonlyNonEmptyArray2, makeBy, range, sort2, copy, of, prependAll2, intersperse2, chop, splitAt, chunksOf, head3, tail3, last3, init, snoc;
  var init_NonEmptyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/NonEmptyArray.js"() {
      init_function();
      init_internal();
      init_Ord();
      init_ReadonlyNonEmptyArray();
      __spreadArray4 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      isNonEmpty3 = function(as4) {
        return as4.length > 0;
      };
      isOutOfBound2 = function(i, as4) {
        return i < 0 || i >= as4.length;
      };
      prependW2 = function(head7) {
        return function(tail6) {
          return __spreadArray4([head7], tail6, true);
        };
      };
      prepend2 = prependW2;
      appendW = function(end) {
        return function(init5) {
          return __spreadArray4(__spreadArray4([], init5, true), [end], false);
        };
      };
      append = appendW;
      unsafeInsertAt2 = function(i, a, as4) {
        if (isNonEmpty3(as4)) {
          var xs = fromReadonlyNonEmptyArray2(as4);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      unsafeUpdateAt = function(i, a, as4) {
        var xs = fromReadonlyNonEmptyArray2(as4);
        xs[i] = a;
        return xs;
      };
      uniq = function(E) {
        return function(as4) {
          if (as4.length === 1) {
            return copy(as4);
          }
          var out = [head3(as4)];
          var rest = tail3(as4);
          var _loop_1 = function(a2) {
            if (out.every(function(o) {
              return !E.equals(o, a2);
            })) {
              out.push(a2);
            }
          };
          for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
            var a = rest_1[_i];
            _loop_1(a);
          }
          return out;
        };
      };
      sortBy = function(ords) {
        if (isNonEmpty3(ords)) {
          var M = getMonoid3();
          return sort2(ords.reduce(M.concat, M.empty));
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
        return function(as4) {
          var len = as4.length;
          var m = Math.round(n) % len;
          if (isOutOfBound2(Math.abs(m), as4) || m === 0) {
            return copy(as4);
          }
          if (m < 0) {
            var _a = splitAt(-m)(as4), f = _a[0], s = _a[1];
            return pipe(s, concat(f));
          } else {
            return rotate(m - len)(as4);
          }
        };
      };
      fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
      makeBy = function(f) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f(0)];
          for (var i = 1; i < j; i++) {
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
      sort2 = function(O) {
        return function(as4) {
          return as4.slice().sort(O.compare);
        };
      };
      copy = fromReadonlyNonEmptyArray2;
      of = function(a) {
        return [a];
      };
      prependAll2 = function(middle) {
        return function(as4) {
          var out = [middle, as4[0]];
          for (var i = 1; i < as4.length; i++) {
            out.push(middle, as4[i]);
          }
          return out;
        };
      };
      intersperse2 = function(middle) {
        return function(as4) {
          var rest = tail3(as4);
          return isNonEmpty3(rest) ? pipe(rest, prependAll2(middle), prepend2(head3(as4))) : copy(as4);
        };
      };
      chop = function(f) {
        return function(as4) {
          var _a = f(as4), b = _a[0], rest = _a[1];
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
        return function(as4) {
          var m = Math.max(1, n);
          return m >= as4.length ? [copy(as4), []] : [pipe(as4.slice(1, m), prepend2(head3(as4))), as4.slice(m)];
        };
      };
      chunksOf = function(n) {
        return chop(splitAt(n));
      };
      head3 = head2;
      tail3 = function(as4) {
        return as4.slice(1);
      };
      last3 = last2;
      init = function(as4) {
        return as4.slice(0, -1);
      };
      snoc = function(init5, end) {
        return pipe(init5, append(end));
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/number.js
  var Eq, Ord, Bounded, MagmaSub, SemigroupSum, SemigroupProduct, MonoidSum, MonoidProduct, Field;
  var init_number = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/number.js"() {
      Eq = {
        equals: function(first2, second) {
          return first2 === second;
        }
      };
      Ord = {
        equals: Eq.equals,
        compare: function(first2, second) {
          return first2 < second ? -1 : first2 > second ? 1 : 0;
        }
      };
      Bounded = {
        equals: Eq.equals,
        compare: Ord.compare,
        top: Infinity,
        bottom: -Infinity
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Separated.js
  var separated;
  var init_Separated = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Separated.js"() {
      separated = function(left, right) {
        return { left, right };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Witherable.js
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
  var init_Witherable = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Witherable.js"() {
      init_internal();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Zero.js
  function guard(F, P) {
    return function(b) {
      return b ? P.of(void 0) : F.zero();
    };
  }
  var init_Zero = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Zero.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyArray.js
  function lookup(i, as4) {
    return as4 === void 0 ? function(as5) {
      return lookup(i, as5);
    } : isOutOfBound3(i, as4) ? none : some(as4[i]);
  }
  function takeLeftWhile(predicate) {
    return function(as4) {
      var out = [];
      for (var _i = 0, as_1 = as4; _i < as_1.length; _i++) {
        var a = as_1[_i];
        if (!predicate(a)) {
          break;
        }
        out.push(a);
      }
      var len = out.length;
      return len === as4.length ? as4 : len === 0 ? empty3 : out;
    };
  }
  function dropLeftWhile(predicate) {
    return function(as4) {
      var i = spanLeftIndex(as4, predicate);
      return i === 0 ? as4 : i === as4.length ? empty3 : as4.slice(i);
    };
  }
  function findFirst(predicate) {
    return function(as4) {
      for (var i = 0; i < as4.length; i++) {
        if (predicate(as4[i])) {
          return some(as4[i]);
        }
      }
      return none;
    };
  }
  function findLast(predicate) {
    return function(as4) {
      for (var i = as4.length - 1; i >= 0; i--) {
        if (predicate(as4[i])) {
          return some(as4[i]);
        }
      }
      return none;
    };
  }
  function elem(E) {
    return function(a, as4) {
      if (as4 === void 0) {
        var elemE_1 = elem(E);
        return function(as5) {
          return elemE_1(a, as5);
        };
      }
      var predicate = function(element) {
        return E.equals(element, a);
      };
      var i = 0;
      for (; i < as4.length; i++) {
        if (predicate(as4[i])) {
          return true;
        }
      }
      return false;
    };
  }
  function every(predicate) {
    return function(as4) {
      return as4.every(predicate);
    };
  }
  var __spreadArray5, isNonEmpty4, matchW, match, isOutOfBound3, head4, last4, spanLeftIndex, findIndex, findFirstMap, findLastMap, findLastIndex, insertAt, deleteAt, reverse2, _chainRecDepthFirst, _chainRecBreadthFirst, foldMapWithIndex2, reduce2, foldMap2, reduceWithIndex2, reduceRight2, reduceRightWithIndex2, getShow2, getEq2, getOrd, chainRecDepthFirst, chainRecBreadthFirst, unsafeDeleteAt, empty3, intercalate2;
  var init_ReadonlyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyArray.js"() {
      init_Eq();
      init_function();
      init_internal();
      init_number();
      init_Ord();
      init_ReadonlyNonEmptyArray();
      __spreadArray5 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
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
        return function(as4) {
          return isNonEmpty4(as4) ? onNonEmpty(as4) : onEmpty();
        };
      };
      match = matchW;
      isOutOfBound3 = isOutOfBound;
      head4 = function(as4) {
        return isNonEmpty4(as4) ? some(head2(as4)) : none;
      };
      last4 = function(as4) {
        return isNonEmpty4(as4) ? some(last2(as4)) : none;
      };
      spanLeftIndex = function(as4, predicate) {
        var l = as4.length;
        var i = 0;
        for (; i < l; i++) {
          if (!predicate(as4[i])) {
            break;
          }
        }
        return i;
      };
      findIndex = function(predicate) {
        return function(as4) {
          for (var i = 0; i < as4.length; i++) {
            if (predicate(as4[i])) {
              return some(i);
            }
          }
          return none;
        };
      };
      findFirstMap = function(f) {
        return function(as4) {
          for (var i = 0; i < as4.length; i++) {
            var out = f(as4[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastMap = function(f) {
        return function(as4) {
          for (var i = as4.length - 1; i >= 0; i--) {
            var out = f(as4[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastIndex = function(predicate) {
        return function(as4) {
          for (var i = as4.length - 1; i >= 0; i--) {
            if (predicate(as4[i])) {
              return some(i);
            }
          }
          return none;
        };
      };
      insertAt = function(i, a) {
        return function(as4) {
          return i < 0 || i > as4.length ? none : some(unsafeInsertAt(i, a, as4));
        };
      };
      deleteAt = function(i) {
        return function(as4) {
          return isOutOfBound3(i, as4) ? none : some(unsafeDeleteAt(i, as4));
        };
      };
      reverse2 = function(as4) {
        return as4.length <= 1 ? as4 : as4.slice().reverse();
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
          for (var i = 0; i < len; i++) {
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
          show: function(as4) {
            return "[".concat(as4.map(S.show).join(", "), "]");
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
          for (var i = 0; i < len; i++) {
            var ordering = O.compare(a[i], b[i]);
            if (ordering !== 0) {
              return ordering;
            }
          }
          return Ord.compare(aLen, bLen);
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
          for (var _i = 0, initial_1 = initial; _i < initial_1.length; _i++) {
            var e = initial_1[_i];
            go(e);
          }
          while (todo.length > 0) {
            go(todo.shift());
          }
          return out;
        };
      };
      unsafeDeleteAt = function(i, as4) {
        var xs = as4.slice();
        xs.splice(i, 1);
        return xs;
      };
      empty3 = empty2;
      intercalate2 = function(M) {
        var intercalateM = intercalate(M);
        return function(middle) {
          return match(function() {
            return M.empty;
          }, intercalateM(middle));
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Array.js
  var Array_exports = {};
  __export(Array_exports, {
    Alt: () => Alt,
    Alternative: () => Alternative,
    Applicative: () => Applicative,
    Apply: () => Apply,
    Chain: () => Chain,
    ChainRecBreadthFirst: () => ChainRecBreadthFirst,
    ChainRecDepthFirst: () => ChainRecDepthFirst,
    Compactable: () => Compactable,
    Do: () => Do,
    Extend: () => Extend,
    Filterable: () => Filterable,
    FilterableWithIndex: () => FilterableWithIndex,
    Foldable: () => Foldable,
    FoldableWithIndex: () => FoldableWithIndex,
    FromEither: () => FromEither,
    Functor: () => Functor,
    FunctorWithIndex: () => FunctorWithIndex,
    Monad: () => Monad,
    Pointed: () => Pointed,
    Traversable: () => Traversable,
    TraversableWithIndex: () => TraversableWithIndex,
    URI: () => URI2,
    Unfoldable: () => Unfoldable,
    Witherable: () => Witherable,
    Zero: () => Zero,
    alt: () => alt,
    altW: () => altW,
    ap: () => ap2,
    apFirst: () => apFirst2,
    apS: () => apS2,
    apSecond: () => apSecond2,
    append: () => append3,
    appendW: () => appendW3,
    array: () => array,
    bind: () => bind2,
    bindTo: () => bindTo2,
    chain: () => chain,
    chainFirst: () => chainFirst2,
    chainRecBreadthFirst: () => chainRecBreadthFirst2,
    chainRecDepthFirst: () => chainRecDepthFirst2,
    chainWithIndex: () => chainWithIndex,
    chop: () => chop3,
    chunksOf: () => chunksOf3,
    compact: () => compact,
    comprehension: () => comprehension,
    concat: () => concat2,
    concatW: () => concatW,
    cons: () => cons3,
    copy: () => copy2,
    deleteAt: () => deleteAt2,
    difference: () => difference,
    dropLeft: () => dropLeft,
    dropLeftWhile: () => dropLeftWhile2,
    dropRight: () => dropRight,
    duplicate: () => duplicate,
    elem: () => elem2,
    empty: () => empty4,
    every: () => every2,
    exists: () => exists,
    extend: () => extend,
    filter: () => filter,
    filterE: () => filterE2,
    filterMap: () => filterMap,
    filterMapWithIndex: () => filterMapWithIndex,
    filterWithIndex: () => filterWithIndex,
    findFirst: () => findFirst2,
    findFirstMap: () => findFirstMap2,
    findIndex: () => findIndex2,
    findLast: () => findLast2,
    findLastIndex: () => findLastIndex2,
    findLastMap: () => findLastMap2,
    flap: () => flap2,
    flatMap: () => flatMap,
    flatten: () => flatten,
    foldLeft: () => foldLeft,
    foldMap: () => foldMap3,
    foldMapWithIndex: () => foldMapWithIndex3,
    foldRight: () => foldRight,
    fromEither: () => fromEither,
    fromEitherK: () => fromEitherK2,
    fromOption: () => fromOption,
    fromOptionK: () => fromOptionK,
    fromPredicate: () => fromPredicate,
    getDifferenceMagma: () => getDifferenceMagma,
    getEq: () => getEq3,
    getIntersectionSemigroup: () => getIntersectionSemigroup,
    getMonoid: () => getMonoid4,
    getOrd: () => getOrd2,
    getSemigroup: () => getSemigroup4,
    getShow: () => getShow3,
    getUnionMonoid: () => getUnionMonoid,
    getUnionSemigroup: () => getUnionSemigroup,
    guard: () => guard2,
    head: () => head5,
    init: () => init3,
    insertAt: () => insertAt2,
    intercalate: () => intercalate3,
    intersection: () => intersection,
    intersperse: () => intersperse3,
    isEmpty: () => isEmpty,
    isNonEmpty: () => isNonEmpty5,
    isOutOfBound: () => isOutOfBound4,
    last: () => last5,
    lefts: () => lefts,
    let: () => let_2,
    lookup: () => lookup2,
    makeBy: () => makeBy3,
    map: () => map,
    mapWithIndex: () => mapWithIndex,
    match: () => match2,
    matchLeft: () => matchLeft,
    matchLeftW: () => matchLeftW,
    matchRight: () => matchRight,
    matchRightW: () => matchRightW,
    matchW: () => matchW2,
    modifyAt: () => modifyAt,
    of: () => of3,
    partition: () => partition,
    partitionMap: () => partitionMap,
    partitionMapWithIndex: () => partitionMapWithIndex,
    partitionWithIndex: () => partitionWithIndex,
    prepend: () => prepend3,
    prependAll: () => prependAll3,
    prependToAll: () => prependToAll,
    prependW: () => prependW3,
    range: () => range3,
    reduce: () => reduce3,
    reduceRight: () => reduceRight3,
    reduceRightWithIndex: () => reduceRightWithIndex3,
    reduceWithIndex: () => reduceWithIndex3,
    replicate: () => replicate,
    reverse: () => reverse3,
    rights: () => rights,
    rotate: () => rotate3,
    scanLeft: () => scanLeft,
    scanRight: () => scanRight,
    separate: () => separate,
    sequence: () => sequence,
    size: () => size,
    snoc: () => snoc3,
    some: () => some2,
    sort: () => sort3,
    sortBy: () => sortBy3,
    spanLeft: () => spanLeft,
    splitAt: () => splitAt3,
    tail: () => tail4,
    takeLeft: () => takeLeft,
    takeLeftWhile: () => takeLeftWhile2,
    takeRight: () => takeRight,
    traverse: () => traverse,
    traverseWithIndex: () => traverseWithIndex,
    unfold: () => unfold,
    union: () => union3,
    uniq: () => uniq3,
    unsafeDeleteAt: () => unsafeDeleteAt2,
    unsafeInsertAt: () => unsafeInsertAt3,
    unsafeUpdateAt: () => unsafeUpdateAt3,
    unzip: () => unzip,
    updateAt: () => updateAt,
    wilt: () => wilt,
    wither: () => wither,
    zero: () => zero,
    zip: () => zip,
    zipWith: () => zipWith
  });
  function fromPredicate(predicate) {
    return function(a) {
      return predicate(a) ? [a] : [];
    };
  }
  function takeLeftWhile2(predicate) {
    return function(as4) {
      var out = [];
      for (var _i = 0, as_1 = as4; _i < as_1.length; _i++) {
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
    return function(as4) {
      var _a = splitAt3(spanLeftIndex2(as4, predicate))(as4), init5 = _a[0], rest = _a[1];
      return { init: init5, rest };
    };
  }
  function dropLeftWhile2(predicate) {
    return function(as4) {
      return as4.slice(spanLeftIndex2(as4, predicate));
    };
  }
  function findFirst2(predicate) {
    return findFirst(predicate);
  }
  function findLast2(predicate) {
    return findLast(predicate);
  }
  function zip(as4, bs) {
    if (bs === void 0) {
      return function(bs2) {
        return zip(bs2, as4);
      };
    }
    return zipWith(as4, bs, function(a, b) {
      return [a, b];
    });
  }
  function comprehension(input, f, g) {
    if (g === void 0) {
      g = function() {
        return true;
      };
    }
    var go = function(scope, input2) {
      return isNonEmpty5(input2) ? flatMap(head3(input2), function(a) {
        return go(pipe(scope, append3(a)), tail3(input2));
      }) : g.apply(void 0, scope) ? [f.apply(void 0, scope)] : [];
    };
    return go([], input);
  }
  function union3(E) {
    var unionE = union(E);
    return function(first2, second) {
      if (second === void 0) {
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
      if (ys === void 0) {
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
      if (ys === void 0) {
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
  var isEmpty, isNonEmpty5, prepend3, prependW3, append3, appendW3, makeBy3, replicate, fromOption, fromEither, matchW2, match2, matchLeftW, matchLeft, foldLeft, matchRightW, matchRight, foldRight, chainWithIndex, scanLeft, scanRight, size, isOutOfBound4, lookup2, head5, last5, tail4, init3, takeLeft, takeRight, spanLeftIndex2, dropLeft, dropRight, findIndex2, findFirstMap2, findLastMap2, findLastIndex2, copy2, insertAt2, updateAt, deleteAt2, modifyAt, reverse3, rights, lefts, sort3, zipWith, unzip, prependAll3, intersperse3, rotate3, elem2, uniq3, sortBy3, chop3, splitAt3, chunksOf3, fromOptionK, concatW, concat2, _map, _mapWithIndex, _ap, _filter, _filterMap, _partition, _partitionMap, _partitionWithIndex, _partitionMapWithIndex, _alt, _reduce, _foldMap, _reduceRight, _reduceWithIndex, _foldMapWithIndex, _reduceRightWithIndex, _filterMapWithIndex, _filterWithIndex, _extend, _traverse, _traverseWithIndex, _chainRecDepthFirst2, _chainRecBreadthFirst2, of3, zero, map, ap2, flatMap, flatten, mapWithIndex, filterMapWithIndex, filterMap, compact, separate, filter, partition, partitionWithIndex, partitionMap, partitionMapWithIndex, altW, alt, filterWithIndex, extend, duplicate, foldMap3, foldMapWithIndex3, reduce3, reduceWithIndex3, reduceRight3, reduceRightWithIndex3, traverse, sequence, traverseWithIndex, wither, wilt, unfold, URI2, getShow3, getSemigroup4, getMonoid4, getEq3, getOrd2, getUnionSemigroup, getUnionMonoid, getIntersectionSemigroup, getDifferenceMagma, Functor, flap2, Pointed, FunctorWithIndex, Apply, apFirst2, apSecond2, Applicative, Chain, chainFirst2, Monad, Unfoldable, Alt, Zero, guard2, Alternative, Extend, Compactable, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, Traversable, TraversableWithIndex, _wither, _wilt, Witherable, chainRecDepthFirst2, ChainRecDepthFirst, chainRecBreadthFirst2, ChainRecBreadthFirst, filterE2, FromEither, fromEitherK2, unsafeInsertAt3, unsafeUpdateAt3, unsafeDeleteAt2, every2, some2, exists, intercalate3, Do, bindTo2, let_2, bind2, apS2, chain, range3, empty4, cons3, snoc3, prependToAll, array;
  var init_Array = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Array.js"() {
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
      isEmpty = function(as4) {
        return as4.length === 0;
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
        return function(as4) {
          return isNonEmpty5(as4) ? onNonEmpty(as4) : onEmpty();
        };
      };
      match2 = matchW2;
      matchLeftW = function(onEmpty, onNonEmpty) {
        return function(as4) {
          return isNonEmpty5(as4) ? onNonEmpty(head3(as4), tail3(as4)) : onEmpty();
        };
      };
      matchLeft = matchLeftW;
      foldLeft = matchLeft;
      matchRightW = function(onEmpty, onNonEmpty) {
        return function(as4) {
          return isNonEmpty5(as4) ? onNonEmpty(init(as4), last3(as4)) : onEmpty();
        };
      };
      matchRight = matchRightW;
      foldRight = matchRight;
      chainWithIndex = function(f) {
        return function(as4) {
          var out = [];
          for (var i = 0; i < as4.length; i++) {
            out.push.apply(out, f(i, as4[i]));
          }
          return out;
        };
      };
      scanLeft = function(b, f) {
        return function(as4) {
          var len = as4.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i = 0; i < len; i++) {
            out[i + 1] = f(out[i], as4[i]);
          }
          return out;
        };
      };
      scanRight = function(b, f) {
        return function(as4) {
          var len = as4.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i = len - 1; i >= 0; i--) {
            out[i] = f(as4[i], out[i + 1]);
          }
          return out;
        };
      };
      size = function(as4) {
        return as4.length;
      };
      isOutOfBound4 = isOutOfBound2;
      lookup2 = lookup;
      head5 = head4;
      last5 = last4;
      tail4 = function(as4) {
        return isNonEmpty5(as4) ? some(tail3(as4)) : none;
      };
      init3 = function(as4) {
        return isNonEmpty5(as4) ? some(init(as4)) : none;
      };
      takeLeft = function(n) {
        return function(as4) {
          return isOutOfBound4(n, as4) ? copy2(as4) : as4.slice(0, n);
        };
      };
      takeRight = function(n) {
        return function(as4) {
          return isOutOfBound4(n, as4) ? copy2(as4) : n === 0 ? [] : as4.slice(-n);
        };
      };
      spanLeftIndex2 = function(as4, predicate) {
        var l = as4.length;
        var i = 0;
        for (; i < l; i++) {
          if (!predicate(as4[i])) {
            break;
          }
        }
        return i;
      };
      dropLeft = function(n) {
        return function(as4) {
          return n <= 0 || isEmpty(as4) ? copy2(as4) : n >= as4.length ? [] : as4.slice(n, as4.length);
        };
      };
      dropRight = function(n) {
        return function(as4) {
          return n <= 0 || isEmpty(as4) ? copy2(as4) : n >= as4.length ? [] : as4.slice(0, as4.length - n);
        };
      };
      findIndex2 = findIndex;
      findFirstMap2 = findFirstMap;
      findLastMap2 = findLastMap;
      findLastIndex2 = findLastIndex;
      copy2 = function(as4) {
        return as4.slice();
      };
      insertAt2 = function(i, a) {
        return function(as4) {
          return i < 0 || i > as4.length ? none : some(unsafeInsertAt3(i, a, as4));
        };
      };
      updateAt = function(i, a) {
        return modifyAt(i, function() {
          return a;
        });
      };
      deleteAt2 = function(i) {
        return function(as4) {
          return isOutOfBound4(i, as4) ? none : some(unsafeDeleteAt2(i, as4));
        };
      };
      modifyAt = function(i, f) {
        return function(as4) {
          return isOutOfBound4(i, as4) ? none : some(unsafeUpdateAt3(i, f(as4[i]), as4));
        };
      };
      reverse3 = function(as4) {
        return isEmpty(as4) ? [] : as4.slice().reverse();
      };
      rights = function(as4) {
        var r = [];
        for (var i = 0; i < as4.length; i++) {
          var a = as4[i];
          if (a._tag === "Right") {
            r.push(a.right);
          }
        }
        return r;
      };
      lefts = function(as4) {
        var r = [];
        for (var i = 0; i < as4.length; i++) {
          var a = as4[i];
          if (a._tag === "Left") {
            r.push(a.left);
          }
        }
        return r;
      };
      sort3 = function(O) {
        return function(as4) {
          return as4.length <= 1 ? copy2(as4) : as4.slice().sort(O.compare);
        };
      };
      zipWith = function(fa, fb, f) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i = 0; i < len; i++) {
          fc[i] = f(fa[i], fb[i]);
        }
        return fc;
      };
      unzip = function(as4) {
        var fa = [];
        var fb = [];
        for (var i = 0; i < as4.length; i++) {
          fa[i] = as4[i][0];
          fb[i] = as4[i][1];
        }
        return [fa, fb];
      };
      prependAll3 = function(middle) {
        var f = prependAll2(middle);
        return function(as4) {
          return isNonEmpty5(as4) ? f(as4) : [];
        };
      };
      intersperse3 = function(middle) {
        var f = intersperse2(middle);
        return function(as4) {
          return isNonEmpty5(as4) ? f(as4) : copy2(as4);
        };
      };
      rotate3 = function(n) {
        var f = rotate(n);
        return function(as4) {
          return isNonEmpty5(as4) ? f(as4) : copy2(as4);
        };
      };
      elem2 = elem;
      uniq3 = function(E) {
        var f = uniq(E);
        return function(as4) {
          return isNonEmpty5(as4) ? f(as4) : copy2(as4);
        };
      };
      sortBy3 = function(ords) {
        var f = sortBy(ords);
        return function(as4) {
          return isNonEmpty5(as4) ? f(as4) : copy2(as4);
        };
      };
      chop3 = function(f) {
        var g = chop(f);
        return function(as4) {
          return isNonEmpty5(as4) ? g(as4) : [];
        };
      };
      splitAt3 = function(n) {
        return function(as4) {
          return n >= 1 && isNonEmpty5(as4) ? splitAt(n)(as4) : isEmpty(as4) ? [copy2(as4), []] : [[], copy2(as4)];
        };
      };
      chunksOf3 = function(n) {
        var f = chunksOf(n);
        return function(as4) {
          return isNonEmpty5(as4) ? f(as4) : [];
        };
      };
      fromOptionK = function(f) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return fromOption(f.apply(void 0, a));
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
      flatMap = /* @__PURE__ */ dual(2, function(ma, f) {
        return pipe(ma, chainWithIndex(function(i, a) {
          return f(a, i);
        }));
      });
      flatten = /* @__PURE__ */ flatMap(identity);
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
          for (var i = 0; i < fa.length; i++) {
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
      compact = /* @__PURE__ */ filterMap(identity);
      separate = function(fa) {
        var left = [];
        var right = [];
        for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
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
        return function(as4) {
          return as4.filter(predicate);
        };
      };
      partition = function(predicate) {
        return partitionWithIndex(function(_, a) {
          return predicate(a);
        });
      };
      partitionWithIndex = function(predicateWithIndex) {
        return function(as4) {
          var left = [];
          var right = [];
          for (var i = 0; i < as4.length; i++) {
            var b = as4[i];
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
          for (var i = 0; i < fa.length; i++) {
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
        return function(as4) {
          return as4.filter(function(b, i) {
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
      duplicate = /* @__PURE__ */ extend(identity);
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
            return F.ap(F.map(fas, function(as4) {
              return function(a) {
                return pipe(as4, append3(a));
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
      Functor = {
        URI: URI2,
        map: _map
      };
      flap2 = /* @__PURE__ */ flap(Functor);
      Pointed = {
        URI: URI2,
        of: of3
      };
      FunctorWithIndex = {
        URI: URI2,
        map: _map,
        mapWithIndex: _mapWithIndex
      };
      Apply = {
        URI: URI2,
        map: _map,
        ap: _ap
      };
      apFirst2 = /* @__PURE__ */ apFirst(Apply);
      apSecond2 = /* @__PURE__ */ apSecond(Apply);
      Applicative = {
        URI: URI2,
        map: _map,
        ap: _ap,
        of: of3
      };
      Chain = {
        URI: URI2,
        map: _map,
        ap: _ap,
        chain: flatMap
      };
      chainFirst2 = /* @__PURE__ */ chainFirst(Chain);
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
      Zero = {
        URI: URI2,
        zero
      };
      guard2 = /* @__PURE__ */ guard(Zero, Pointed);
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
      _wither = /* @__PURE__ */ witherDefault(Traversable, Compactable);
      _wilt = /* @__PURE__ */ wiltDefault(Traversable, Compactable);
      Witherable = {
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
      filterE2 = /* @__PURE__ */ filterE(Witherable);
      FromEither = {
        URI: URI2,
        fromEither
      };
      fromEitherK2 = /* @__PURE__ */ fromEitherK(FromEither);
      unsafeInsertAt3 = unsafeInsertAt2;
      unsafeUpdateAt3 = function(i, a, as4) {
        return isNonEmpty5(as4) ? unsafeUpdateAt(i, a, as4) : [];
      };
      unsafeDeleteAt2 = function(i, as4) {
        var xs = as4.slice();
        xs.splice(i, 1);
        return xs;
      };
      every2 = every;
      some2 = function(predicate) {
        return function(as4) {
          return as4.some(predicate);
        };
      };
      exists = some2;
      intercalate3 = intercalate2;
      Do = /* @__PURE__ */ of3(emptyRecord);
      bindTo2 = /* @__PURE__ */ bindTo(Functor);
      let_2 = /* @__PURE__ */ let_(Functor);
      bind2 = /* @__PURE__ */ bind(Chain);
      apS2 = /* @__PURE__ */ apS(Apply);
      chain = flatMap;
      range3 = range;
      empty4 = [];
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Predicate.js
  var not;
  var init_Predicate = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Predicate.js"() {
      not = function(predicate) {
        return function(a) {
          return !predicate(a);
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Option.js
  var Option_exports = {};
  __export(Option_exports, {
    Alt: () => Alt2,
    Alternative: () => Alternative2,
    ApT: () => ApT,
    Applicative: () => Applicative2,
    Apply: () => Apply2,
    Chain: () => Chain2,
    Compactable: () => Compactable2,
    Do: () => Do2,
    Extend: () => Extend2,
    Filterable: () => Filterable2,
    Foldable: () => Foldable2,
    FromEither: () => FromEither2,
    Functor: () => Functor2,
    Monad: () => Monad2,
    MonadThrow: () => MonadThrow,
    Pointed: () => Pointed2,
    Traversable: () => Traversable2,
    URI: () => URI3,
    Witherable: () => Witherable2,
    Zero: () => Zero2,
    alt: () => alt2,
    altW: () => altW2,
    ap: () => ap3,
    apFirst: () => apFirst3,
    apS: () => apS3,
    apSecond: () => apSecond3,
    as: () => as2,
    asUnit: () => asUnit2,
    bind: () => bind3,
    bindTo: () => bindTo3,
    chain: () => chain2,
    chainEitherK: () => chainEitherK2,
    chainFirst: () => chainFirst3,
    chainFirstEitherK: () => chainFirstEitherK,
    chainNullableK: () => chainNullableK,
    compact: () => compact2,
    duplicate: () => duplicate2,
    elem: () => elem3,
    exists: () => exists2,
    extend: () => extend2,
    filter: () => filter2,
    filterMap: () => filterMap2,
    flap: () => flap3,
    flatMap: () => flatMap2,
    flatten: () => flatten2,
    fold: () => fold,
    foldMap: () => foldMap4,
    foldW: () => foldW,
    fromEither: () => fromEither2,
    fromEitherK: () => fromEitherK3,
    fromNullable: () => fromNullable,
    fromNullableK: () => fromNullableK,
    fromPredicate: () => fromPredicate2,
    getApplyMonoid: () => getApplyMonoid,
    getApplySemigroup: () => getApplySemigroup2,
    getEq: () => getEq4,
    getFirstMonoid: () => getFirstMonoid,
    getLastMonoid: () => getLastMonoid,
    getLeft: () => getLeft,
    getMonoid: () => getMonoid5,
    getOrElse: () => getOrElse,
    getOrElseW: () => getOrElseW,
    getOrd: () => getOrd3,
    getRefinement: () => getRefinement,
    getRight: () => getRight,
    getShow: () => getShow4,
    guard: () => guard3,
    isNone: () => isNone2,
    isSome: () => isSome2,
    let: () => let_3,
    map: () => map2,
    mapNullable: () => mapNullable,
    match: () => match3,
    matchW: () => matchW3,
    none: () => none2,
    of: () => of4,
    option: () => option,
    orElse: () => orElse,
    partition: () => partition2,
    partitionMap: () => partitionMap2,
    reduce: () => reduce4,
    reduceRight: () => reduceRight4,
    separate: () => separate2,
    sequence: () => sequence2,
    sequenceArray: () => sequenceArray,
    some: () => some3,
    tap: () => tap2,
    tapEither: () => tapEither2,
    throwError: () => throwError,
    toNullable: () => toNullable,
    toUndefined: () => toUndefined,
    traverse: () => traverse2,
    traverseArray: () => traverseArray,
    traverseArrayWithIndex: () => traverseArrayWithIndex,
    traverseReadonlyArrayWithIndex: () => traverseReadonlyArrayWithIndex,
    traverseReadonlyNonEmptyArrayWithIndex: () => traverseReadonlyNonEmptyArrayWithIndex,
    tryCatch: () => tryCatch,
    tryCatchK: () => tryCatchK,
    wilt: () => wilt2,
    wither: () => wither2,
    zero: () => zero2
  });
  function fromPredicate2(predicate) {
    return function(a) {
      return predicate(a) ? some3(a) : none2;
    };
  }
  function elem3(E) {
    return function(a, ma) {
      if (ma === void 0) {
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
  var none2, some3, getLeft, getRight, _map2, _ap2, _reduce2, _foldMap2, _reduceRight2, _traverse2, _alt2, _filter2, _filterMap2, _extend2, _partition2, _partitionMap2, URI3, getShow4, getEq4, getOrd3, getMonoid5, map2, Functor2, as2, asUnit2, of4, Pointed2, ap3, Apply2, Applicative2, flatMap2, Chain2, Monad2, reduce4, foldMap4, reduceRight4, Foldable2, orElse, altW2, alt2, Alt2, zero2, Zero2, guard3, Alternative2, extend2, Extend2, compact2, defaultSeparated, separate2, Compactable2, filter2, filterMap2, partition2, partitionMap2, Filterable2, traverse2, sequence2, Traversable2, _wither2, _wilt2, wither2, wilt2, Witherable2, throwError, MonadThrow, fromEither2, FromEither2, isSome2, isNone2, matchW3, foldW, match3, fold, getOrElseW, getOrElse, flap3, apFirst3, apSecond3, flatten2, tap2, tapEither2, duplicate2, fromEitherK3, chainEitherK2, chainFirstEitherK, fromNullable, tryCatch, tryCatchK, fromNullableK, chainNullableK, toNullable, toUndefined, exists2, Do2, bindTo3, let_3, bind3, apS3, ApT, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyArrayWithIndex, traverseArrayWithIndex, traverseArray, sequenceArray, chain2, chainFirst3, mapNullable, option, getApplySemigroup2, getApplyMonoid, getFirstMonoid, getLastMonoid;
  var init_Option = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Option.js"() {
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
      Functor2 = {
        URI: URI3,
        map: _map2
      };
      as2 = dual(2, as(Functor2));
      asUnit2 = asUnit(Functor2);
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
      Apply2 = {
        URI: URI3,
        map: _map2,
        ap: _ap2
      };
      Applicative2 = {
        URI: URI3,
        map: _map2,
        ap: _ap2,
        of: of4
      };
      flatMap2 = /* @__PURE__ */ dual(2, function(ma, f) {
        return isNone2(ma) ? none2 : f(ma.value);
      });
      Chain2 = {
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
      Zero2 = {
        URI: URI3,
        zero: zero2
      };
      guard3 = /* @__PURE__ */ guard(Zero2, Pointed2);
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
      compact2 = /* @__PURE__ */ flatMap2(identity);
      defaultSeparated = /* @__PURE__ */ separated(none2, none2);
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
      _wither2 = /* @__PURE__ */ witherDefault(Traversable2, Compactable2);
      _wilt2 = /* @__PURE__ */ wiltDefault(Traversable2, Compactable2);
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
      Witherable2 = {
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
      FromEither2 = {
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
      flap3 = /* @__PURE__ */ flap(Functor2);
      apFirst3 = /* @__PURE__ */ apFirst(Apply2);
      apSecond3 = /* @__PURE__ */ apSecond(Apply2);
      flatten2 = compact2;
      tap2 = /* @__PURE__ */ dual(2, tap(Chain2));
      tapEither2 = /* @__PURE__ */ dual(2, tapEither(FromEither2, Chain2));
      duplicate2 = /* @__PURE__ */ extend2(identity);
      fromEitherK3 = /* @__PURE__ */ fromEitherK(FromEither2);
      chainEitherK2 = /* @__PURE__ */ chainEitherK(FromEither2, Chain2);
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
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return tryCatch(function() {
            return f.apply(void 0, a);
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
      toNullable = /* @__PURE__ */ match3(constNull, identity);
      toUndefined = /* @__PURE__ */ match3(constUndefined, identity);
      exists2 = function(predicate) {
        return function(ma) {
          return isNone2(ma) ? false : predicate(ma.value);
        };
      };
      Do2 = /* @__PURE__ */ of4(emptyRecord);
      bindTo3 = /* @__PURE__ */ bindTo(Functor2);
      let_3 = /* @__PURE__ */ let_(Functor2);
      bind3 = /* @__PURE__ */ bind(Chain2);
      apS3 = /* @__PURE__ */ apS(Apply2);
      ApT = /* @__PURE__ */ of4(emptyReadonlyArray);
      traverseReadonlyNonEmptyArrayWithIndex = function(f) {
        return function(as4) {
          var o = f(0, head(as4));
          if (isNone2(o)) {
            return none2;
          }
          var out = [o.value];
          for (var i = 1; i < as4.length; i++) {
            var o_1 = f(i, as4[i]);
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
        return function(as4) {
          return isNonEmpty(as4) ? g(as4) : ApT;
        };
      };
      traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
      traverseArray = function(f) {
        return traverseReadonlyArrayWithIndex(function(_, a) {
          return f(a);
        });
      };
      sequenceArray = /* @__PURE__ */ traverseArray(identity);
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
      getApplySemigroup2 = /* @__PURE__ */ getApplySemigroup(Apply2);
      getApplyMonoid = /* @__PURE__ */ getApplicativeMonoid(Applicative2);
      getFirstMonoid = function() {
        return getMonoid5(first());
      };
      getLastMonoid = function() {
        return getMonoid5(last());
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js
  var getSemigroup5, getMonoid6;
  var init_Endomorphism = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js"() {
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromIO.js
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
  var init_FromIO = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromIO.js"() {
      init_Chain();
      init_function();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/HKT/index.js
  var init_HKT = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/HKT/index.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyMap.js
  function lookupWithKey(E) {
    return function(k, m) {
      if (m === void 0) {
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
      if (m === void 0) {
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
  var init_ReadonlyMap = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyMap.js"() {
      init_function();
      init_internal();
      init_Option();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Map.js
  var lookup4;
  var init_Map = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Map.js"() {
      init_ReadonlyMap();
      lookup4 = lookup3;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Monoid.js
  var concatAll4, monoidVoid, monoidAll, monoidAny, monoidString, monoidSum, monoidProduct;
  var init_Monoid = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Monoid.js"() {
      init_Semigroup();
      concatAll4 = function(M) {
        return concatAll2(M)(M.empty);
      };
      monoidVoid = {
        concat: semigroupVoid.concat,
        empty: void 0
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Task.js
  var Task_exports = {};
  __export(Task_exports, {
    ApT: () => ApT2,
    ApplicativePar: () => ApplicativePar,
    ApplicativeSeq: () => ApplicativeSeq,
    ApplyPar: () => ApplyPar,
    ApplySeq: () => ApplySeq,
    Chain: () => Chain3,
    Do: () => Do3,
    FromIO: () => FromIO,
    FromTask: () => FromTask,
    Functor: () => Functor3,
    Monad: () => Monad3,
    MonadIO: () => MonadIO,
    MonadTask: () => MonadTask,
    Pointed: () => Pointed3,
    URI: () => URI4,
    ap: () => ap4,
    apFirst: () => apFirst4,
    apS: () => apS4,
    apSecond: () => apSecond4,
    as: () => as3,
    asUnit: () => asUnit3,
    bind: () => bind4,
    bindTo: () => bindTo4,
    chain: () => chain3,
    chainFirst: () => chainFirst4,
    chainFirstIOK: () => chainFirstIOK,
    chainIOK: () => chainIOK,
    delay: () => delay,
    flap: () => flap4,
    flatMap: () => flatMap3,
    flatMapIO: () => flatMapIO2,
    flatten: () => flatten3,
    fromIO: () => fromIO,
    fromIOK: () => fromIOK2,
    fromTask: () => fromTask,
    getMonoid: () => getMonoid7,
    getRaceMonoid: () => getRaceMonoid,
    getSemigroup: () => getSemigroup6,
    let: () => let_4,
    map: () => map3,
    never: () => never,
    of: () => of5,
    sequenceArray: () => sequenceArray2,
    sequenceSeqArray: () => sequenceSeqArray,
    tap: () => tap3,
    tapIO: () => tapIO2,
    task: () => task,
    taskSeq: () => taskSeq,
    traverseArray: () => traverseArray2,
    traverseArrayWithIndex: () => traverseArrayWithIndex2,
    traverseReadonlyArrayWithIndex: () => traverseReadonlyArrayWithIndex2,
    traverseReadonlyArrayWithIndexSeq: () => traverseReadonlyArrayWithIndexSeq,
    traverseReadonlyNonEmptyArrayWithIndex: () => traverseReadonlyNonEmptyArrayWithIndex2,
    traverseReadonlyNonEmptyArrayWithIndexSeq: () => traverseReadonlyNonEmptyArrayWithIndexSeq,
    traverseSeqArray: () => traverseSeqArray,
    traverseSeqArrayWithIndex: () => traverseSeqArrayWithIndex
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
  var fromIO, _map3, _apPar, _apSeq, map3, ap4, of5, flatMap3, flatten3, URI4, Functor3, as3, asUnit3, flap4, Pointed3, ApplyPar, apFirst4, apSecond4, ApplicativePar, ApplySeq, ApplicativeSeq, Chain3, Monad3, MonadIO, fromTask, MonadTask, FromIO, _FlatMap, _FromIO, flatMapIO2, tap3, tapIO2, fromIOK2, chainIOK, chainFirstIOK, FromTask, never, Do3, bindTo4, let_4, bind4, apS4, ApT2, traverseReadonlyNonEmptyArrayWithIndex2, traverseReadonlyArrayWithIndex2, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseReadonlyArrayWithIndexSeq, traverseArrayWithIndex2, traverseArray2, sequenceArray2, traverseSeqArrayWithIndex, traverseSeqArray, sequenceSeqArray, chain3, chainFirst4, task, taskSeq, getSemigroup6, getMonoid7;
  var init_Task = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Task.js"() {
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
      flatMap3 = /* @__PURE__ */ dual(2, function(ma, f) {
        return function() {
          return Promise.resolve().then(ma).then(function(a) {
            return f(a)();
          });
        };
      });
      flatten3 = /* @__PURE__ */ flatMap3(identity);
      URI4 = "Task";
      Functor3 = {
        URI: URI4,
        map: _map3
      };
      as3 = dual(2, as(Functor3));
      asUnit3 = asUnit(Functor3);
      flap4 = /* @__PURE__ */ flap(Functor3);
      Pointed3 = {
        URI: URI4,
        of: of5
      };
      ApplyPar = {
        URI: URI4,
        map: _map3,
        ap: _apPar
      };
      apFirst4 = /* @__PURE__ */ apFirst(ApplyPar);
      apSecond4 = /* @__PURE__ */ apSecond(ApplyPar);
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
      Chain3 = {
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
      FromIO = {
        URI: URI4,
        fromIO
      };
      _FlatMap = {
        flatMap: flatMap3
      };
      _FromIO = {
        fromIO: FromIO.fromIO
      };
      flatMapIO2 = flatMapIO(_FromIO, _FlatMap);
      tap3 = /* @__PURE__ */ dual(2, tap(Chain3));
      tapIO2 = /* @__PURE__ */ dual(2, tapIO(FromIO, Chain3));
      fromIOK2 = /* @__PURE__ */ fromIOK(FromIO);
      chainIOK = flatMapIO2;
      chainFirstIOK = tapIO2;
      FromTask = {
        URI: URI4,
        fromIO,
        fromTask
      };
      never = function() {
        return new Promise(function(_) {
          return void 0;
        });
      };
      Do3 = /* @__PURE__ */ of5(emptyRecord);
      bindTo4 = /* @__PURE__ */ bindTo(Functor3);
      let_4 = /* @__PURE__ */ let_(Functor3);
      bind4 = /* @__PURE__ */ bind(Chain3);
      apS4 = /* @__PURE__ */ apS(ApplyPar);
      ApT2 = /* @__PURE__ */ of5(emptyReadonlyArray);
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
      sequenceArray2 = /* @__PURE__ */ traverseArray2(identity);
      traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
      traverseSeqArray = function(f) {
        return traverseReadonlyArrayWithIndexSeq(function(_, a) {
          return f(a);
        });
      };
      sequenceSeqArray = /* @__PURE__ */ traverseSeqArray(identity);
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
      getSemigroup6 = /* @__PURE__ */ getApplySemigroup(ApplySeq);
      getMonoid7 = /* @__PURE__ */ getApplicativeMonoid(ApplicativeSeq);
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js
  var string_exports = {};
  __export(string_exports, {
    Eq: () => Eq2,
    Monoid: () => Monoid,
    Ord: () => Ord2,
    Semigroup: () => Semigroup,
    Show: () => Show,
    empty: () => empty5,
    endsWith: () => endsWith,
    includes: () => includes,
    isEmpty: () => isEmpty3,
    isString: () => isString,
    replace: () => replace,
    size: () => size3,
    slice: () => slice,
    split: () => split,
    startsWith: () => startsWith,
    toLowerCase: () => toLowerCase,
    toUpperCase: () => toUpperCase,
    trim: () => trim,
    trimLeft: () => trimLeft,
    trimRight: () => trimRight
  });
  var Eq2, Semigroup, empty5, Monoid, Ord2, Show, isString, toUpperCase, toLowerCase, replace, trim, trimLeft, trimRight, slice, isEmpty3, size3, split, includes, startsWith, endsWith;
  var init_string = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js"() {
      init_ReadonlyNonEmptyArray();
      Eq2 = {
        equals: function(first2, second) {
          return first2 === second;
        }
      };
      Semigroup = {
        concat: function(first2, second) {
          return first2 + second;
        }
      };
      empty5 = "";
      Monoid = {
        concat: Semigroup.concat,
        empty: empty5
      };
      Ord2 = {
        equals: Eq2.equals,
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js
  function lookup5(k, r) {
    if (r === void 0) {
      return function(r2) {
        return lookup5(k, r2);
      };
    }
    return has.call(r, k) ? some(r[k]) : none;
  }
  var init_ReadonlyRecord = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js"() {
      init_internal();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js
  var lookup6;
  var init_Record = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js"() {
      init_ReadonlyRecord();
      lookup6 = lookup5;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js
  var init_es6 = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js"() {
      init_Array();
      init_Eq();
      init_HKT();
      init_Option();
      init_string();
      init_Task();
    }
  });

  // shared/util.tsx
  var SpotifyLoc, escapeRegex, titleCase, waitForElement, sleep;
  var init_util = __esm({
    "shared/util.tsx"() {
      "use strict";
      init_function();
      ((SpotifyLoc3) => {
        let before;
        ((before2) => {
          before2.start = constant({ before: "start" });
          before2.fromUri = (uri) => ({
            before: { uri }
          });
          before2.fromUid = (uid) => ({
            before: { uid }
          });
        })(before = SpotifyLoc3.before || (SpotifyLoc3.before = {}));
        let after;
        ((after2) => {
          after2.end = constant({ after: "end" });
          after2.fromUri = (uri) => ({
            before: { uri }
          });
          after2.fromUid = (uid) => ({
            before: { uid }
          });
        })(after = SpotifyLoc3.after || (SpotifyLoc3.after = {}));
      })(SpotifyLoc || (SpotifyLoc = {}));
      escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
      titleCase = (str) => str.replace(/\b\w/g, (l) => l.toUpperCase());
      waitForElement = (selector, timeout = 1e3, location = document.body, notEl) => new Promise((resolve) => {
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
      sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js
  var URI5, map5, Functor4, of6, ap5, Applicative3, apFirst5, apSecond5, chain4, Monad4, Do4, bindTo5, bind5, apS5, let_5, unary, guard4, unless, when, invoke, invokeNullary, memoize, curry2T, curry2, curry3T, curry3, curry4T, curry4, curry5T, curry5, applyEvery;
  var init_Function = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js"() {
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
      Functor4 = {
        URI: URI5,
        map: (f, g) => map5(g)(f)
      };
      of6 = constant;
      ap5 = (f) => (g) => (x) => g(x)(f(x));
      Applicative3 = {
        ...Functor4,
        of: of6,
        ap: (f, g) => ap5(g)(f)
      };
      apFirst5 = apFirst(Applicative3);
      apSecond5 = apSecond(Applicative3);
      chain4 = (f) => (g) => (x) => f(g(x))(x);
      Monad4 = {
        ...Applicative3,
        chain: (f, g) => chain4(g)(f)
      };
      Do4 = of6({});
      bindTo5 = bindTo(Functor4);
      bind5 = bind(Monad4);
      apS5 = apS(Applicative3);
      let_5 = let_(Functor4);
      unary = tupled;
      guard4 = (branches) => (fallback) => (input) => pipe(branches, map(([f, g]) => flow(fromPredicate2(f), map2(g))), concatAll4(getMonoid(getMonoid5(first()))()), apply(input), getOrElse(() => fallback(input)));
      unless = (f) => (onFalse) => (x) => f(x) ? x : onFalse(x);
      when = flow(not, unless);
      invoke = (x) => (ys) => (z) => z[x](...ys);
      invokeNullary = flip(invoke)([]);
      memoize = (eq2) => (f) => {
        const cache = /* @__PURE__ */ new Map();
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
    }
  });

  // shared/fp.tsx
  var guard42, pMchain, is, chunckify, memoize2;
  var init_fp = __esm({
    "shared/fp.tsx"() {
      "use strict";
      init_es6();
      init_Function();
      init_function();
      guard42 = (branches) => guard4(
        branches
      );
      pMchain = (f) => async (fa) => f(await fa);
      is = (c) => (a) => (field) => field[c] === a;
      chunckify = (n) => (g) => flow(Array_exports.chunksOf(n), Array_exports.map(g), (ps) => Promise.all(ps), pMchain(Array_exports.flatten));
      memoize2 = (fn) => pipe(fn, tupled, memoize(Eq_exports.contramap(JSON.stringify)(string_exports.Eq)), untupled);
    }
  });

  // shared/api.tsx
  var URI6, fetchGQLArtistRelated, fetchWebArtistsSpot, fetchWebPlaylistsSpot, fetchWebAlbumsSpot, fetchWebTracksSpot, searchWebItemSpot, fetchWebSoundOfSpotifyPlaylist, fetchTrackLFMAPI, fetchTrackLFMAPIMemoized;
  var init_api = __esm({
    "shared/api.tsx"() {
      "use strict";
      init_Function();
      init_function();
      init_fp();
      init_util();
      ({ URI: URI6 } = Spicetify);
      fetchGQLArtistRelated = async (uri) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistRelated, {
        uri,
        locale: Spicetify.Locale.getLocale()
      })).data.artistUnion.relatedContent.relatedArtists.items;
      fetchWebArtistsSpot = chunckify(50)(
        async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists
      );
      fetchWebPlaylistsSpot = chunckify(1)(
        // @ts-ignore chunkify will never call with empty array
        async ([id]) => [
          await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)
        ]
      );
      fetchWebAlbumsSpot = chunckify(50)(
        async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums
      );
      fetchWebTracksSpot = chunckify(50)(
        async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks
      );
      searchWebItemSpot = async (q, type) => Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=${type.join(",")}`);
      fetchWebSoundOfSpotifyPlaylist = async (genre) => {
        const name = `The Sound Of ${genre}`;
        const re = new RegExp(`^${escapeRegex(name)}$`, "i");
        const res = await searchWebItemSpot(name, ["playlist"]);
        const item = res.playlists.items[0];
        return item?.owner.id === "thesoundsofspotify" && re.test(item.name) ? item.uri : null;
      };
      fetchTrackLFMAPI = async (LFMApiKey, artist, trackName, lastFmUsername = "") => pipe(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LFMApiKey}&artist=${encodeURIComponent(
          artist
        )}&track=${encodeURIComponent(trackName)}&format=json&username=${encodeURIComponent(lastFmUsername)}`,
        fetch,
        pMchain(invokeNullary("json"))
      );
      fetchTrackLFMAPIMemoized = memoize2(fetchTrackLFMAPI);
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/ReadonlyArray.js
  var none3, join, sum, product, median, moveFrom, moveTo, dropRightWhile, takeRightWhile, minimum, maximum, fromIterable;
  var init_ReadonlyArray2 = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/ReadonlyArray.js"() {
      init_function();
      init_Predicate();
      init_number();
      init_ReadonlyNonEmptyArray();
      init_ReadonlyArray();
      init_Option();
      init_Monoid();
      init_Semigroup();
      init_Function();
      none3 = flow(not, (p) => every(p));
      join = (x) => invoke("join")([x]);
      sum = concatAll4(MonoidSum);
      product = concatAll4(MonoidProduct);
      median = flow(sort(Ord), (xs) => {
        const i = xs.length / 2;
        return i % 1 === 0 ? (xs[i - 1] + xs[i]) / 2 : xs[Math.floor(i)];
      });
      moveFrom = (from) => (to) => (xs) => from >= xs.length || to >= xs.length ? none2 : from === to ? some3(xs) : pipe(xs, lookup(from), chain2((x) => pipe(deleteAt(from)(xs), chain2(insertAt(to, x)))));
      moveTo = flip(moveFrom);
      dropRightWhile = (f) => flow(reverse2, dropLeftWhile(f), reverse2);
      takeRightWhile = (f) => flow(reverse2, takeLeftWhile(f), reverse2);
      minimum = flow(min2, concatAll3);
      maximum = flow(max2, concatAll3);
      fromIterable = Array.from;
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/String.js
  var prepend4, append5, takeLeft3, takeRight3, under, reverse5, lines, unlines, test, dropLeft3, dropRight2, dropRightWhile2, head6, tail5, last6, init4, takeLeftWhile3, takeRightWhile2, isAlpha, isAlphaNum, isLower, isUpper, isSpace, words, unwords;
  var init_String = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/String.js"() {
      init_function();
      init_Predicate();
      init_Option();
      init_ReadonlyArray();
      init_string();
      init_ReadonlyArray2();
      init_Ord();
      init_number();
      init_Function();
      prepend4 = (prepended) => (rest) => prepended + rest;
      append5 = flip(prepend4);
      takeLeft3 = (n) => slice(0, max(Ord)(0, n));
      takeRight3 = (n) => (x) => slice(max(Ord)(0, x.length - Math.floor(n)), Infinity)(x);
      under = (f) => flow(split(""), f, join(""));
      reverse5 = under(reverse2);
      lines = split(/\r\n|\r|\n/);
      unlines = join("\n");
      test = (r) => (x) => {
        const lastIndex = r.lastIndex;
        const res = r.test(x);
        r.lastIndex = lastIndex;
        return res;
      };
      dropLeft3 = (n) => invoke("substring")([n]);
      dropRight2 = (n) => (x) => pipe(x, invoke("substring")([0, x.length - Math.floor(n)]));
      dropRightWhile2 = flow(dropRightWhile, under);
      head6 = flow(fromPredicate2(not(isEmpty3)), map2(takeLeft3(1)));
      tail5 = flow(fromPredicate2(not(isEmpty3)), map2(dropLeft3(1)));
      last6 = flow(fromPredicate2(not(isEmpty3)), map2(takeRight3(1)));
      init4 = flow(fromPredicate2(not(isEmpty3)), map2(dropRight2(1)));
      takeLeftWhile3 = flow((f) => takeLeftWhile(f), under);
      takeRightWhile2 = flow(takeRightWhile, under);
      isAlpha = test(/^\p{Alpha}+$/u);
      isAlphaNum = test(/^(\p{Alpha}|\p{Number})+$/u);
      isLower = test(/^\p{Lower}+$/u);
      isUpper = test(/^\p{Upper}+$/u);
      isSpace = test(/^\s+$/);
      words = split(/\s/);
      unwords = join(" ");
    }
  });

  // extensions/show-the-genres/artistPage.tsx
  var URI7, updateArtistPage, getArtistsGenresOrRelated;
  var init_artistPage = __esm({
    "extensions/show-the-genres/artistPage.tsx"() {
      "use strict";
      init_es6();
      init_String();
      init_function();
      init_api();
      init_fp();
      init_util();
      ({ URI: URI7 } = Spicetify);
      updateArtistPage = async ({ pathname }) => {
        const uri = URI7.fromString(pathname);
        if (!URI7.isArtist(uri))
          return;
        const genreContainer2 = document.createElement("div");
        genreContainer2.className = "main-entityHeader-detailsText genre-container";
        genreContainer2.innerHTML = await pipe(
          await getArtistsGenresOrRelated([`${uri}`]),
          Array_exports.takeLeft(5),
          Array_exports.map(async (genre) => {
            const uri2 = await fetchWebSoundOfSpotifyPlaylist(genre);
            return `<a class="main-entityHeader-genreLink" ${uri2 === null ? `href="#" data-value="${genre}" onclick="searchPlaylist(this.getAttribute('data-value'))` : `href="${uri2}"`} style="color: var(--spice-subtext); font-size: 1rem">${titleCase(genre)}</a>`;
          }),
          (ps) => Promise.all(ps),
          pMchain(Array_exports.intercalate(string_exports.Monoid)(`<span>, </span>`)),
          pMchain(prepend4(`<span>Artist Genres : </span>`))
        );
        document.querySelector(".genre-container")?.remove();
        const entityHeaderText = await waitForElement("div.main-entityHeader-headerText");
        entityHeaderText?.insertBefore(genreContainer2, await waitForElement("span.main-entityHeader-detailsText"));
      };
      getArtistsGenresOrRelated = async (artistsUris, src = null) => {
        const getArtistsGenres = flow(
          Array_exports.map((uri) => URI7.fromString(uri).id),
          fetchWebArtistsSpot,
          pMchain(Array_exports.flatMap((artist) => artist.genres)),
          pMchain(Array_exports.uniq(string_exports.Eq))
        );
        const allGenres = await getArtistsGenres(artistsUris);
        return allGenres.length ? allGenres : await pipe(
          artistsUris[0],
          fetchGQLArtistRelated,
          pMchain(Array_exports.map((a) => a.uri)),
          pMchain(Array_exports.chunksOf(5)),
          pMchain(
            Array_exports.reduce(
              Promise.resolve([]),
              async (acc, arr5uris) => (await acc).length ? await acc : await getArtistsGenres(arr5uris)
            )
          )
        );
      };
    }
  });

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // extensions/show-the-genres/popup.tsx
  var import_react, genrePopup, ButtonElement, SpotifyGenresContainer, LastFmTagsContainer;
  var init_popup = __esm({
    "extensions/show-the-genres/popup.tsx"() {
      "use strict";
      init_es6();
      import_react = __toESM(require_react());
      init_api();
      init_util();
      init_app();
      genrePopup = () => {
        Spicetify.PopupModal.display({
          title: `Genres of: ${Spicetify.Player.data.track?.metadata?.title}`,
          content: /* @__PURE__ */ import_react.default.createElement("div", { className: "genres-popup" }, spotifyGenres.length === 0 ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null) : /* @__PURE__ */ import_react.default.createElement(SpotifyGenresContainer, null), lastFmTags.length === 0 ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null) : /* @__PURE__ */ import_react.default.createElement(LastFmTagsContainer, null)),
          isLarge: true
        });
      };
      globalThis.genrePopup = genrePopup;
      ButtonElement = ({ name = "", color = "", onClick = Task_exports.of(void 0) }) => /* @__PURE__ */ import_react.default.createElement("button", { className: `login-button${color}`, onClick }, name);
      SpotifyGenresContainer = () => {
        let [value, setValue] = (0, import_react.useState)(spotifyGenres);
        Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(spotifyGenres), 500));
        const openSoundOfPlaylistOrSearchResults = (query) => async () => {
          let uri = await fetchWebSoundOfSpotifyPlaylist(query);
          if (uri === null)
            Spicetify.Platform.History.push(`/search/${query}/playlists`);
          else
            Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`);
          Spicetify.PopupModal.hide();
        };
        return /* @__PURE__ */ import_react.default.createElement("div", { className: "spaced-down" }, /* @__PURE__ */ import_react.default.createElement("h1", { className: "title" }, "Spotify Genres"), value.map((n) => /* @__PURE__ */ import_react.default.createElement(ButtonElement, { name: titleCase(n), onClick: openSoundOfPlaylistOrSearchResults(n) })));
      };
      LastFmTagsContainer = () => {
        if (lastFmTags.length == 0)
          return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
        let [value, setValue] = (0, import_react.useState)(lastFmTags);
        Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(lastFmTags), 100));
        const openPlaylistSearchResults = (query) => async () => {
          Spicetify.Platform.History.push(`/search/${query}/playlists`);
          Spicetify.PopupModal.hide();
        };
        return /* @__PURE__ */ import_react.default.createElement("div", { className: "spaced-down" }, /* @__PURE__ */ import_react.default.createElement("h1", { className: "title" }, "Last FM Tags"), value.map((n) => /* @__PURE__ */ import_react.default.createElement(ButtonElement, { name: titleCase(n), onClick: openPlaylistSearchResults(n) })));
      };
    }
  });

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = Spicetify.ReactDOM;
    }
  });

  // shared/settings.tsx
  var import_react2, import_react_dom, SettingsSection;
  var init_settings = __esm({
    "shared/settings.tsx"() {
      "use strict";
      init_es6();
      init_function();
      import_react2 = __toESM(require_react());
      import_react_dom = __toESM(require_react_dom());
      init_fp();
      init_util();
      SettingsSection = class _SettingsSection {
        constructor(name, sectionId, sectionFields = {}) {
          this.name = name;
          this.sectionId = sectionId;
          this.sectionFields = sectionFields;
        }
        stopHistoryListener;
        setRerender = null;
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
        toObject = () => new Proxy(
          {},
          {
            get: (target, prop) => _SettingsSection.getFieldValue(this.getId(prop.toString()))
          }
        );
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
          import_react_dom.default.render(/* @__PURE__ */ import_react2.default.createElement(this.FieldsContainer, null), pluginSettingsContainer);
        };
        addButton = (nameId, description, text, onClick = constVoid, events = {}) => {
          const id = this.getId(nameId);
          events.onClick = onClick;
          this.sectionFields[nameId] = {
            id,
            type: "button" /* BUTTON */,
            description,
            text,
            events
          };
          return this;
        };
        addToggle = (nameId, description, defaultValue = Task_exports.of(true), onChange = constVoid, events = {}) => {
          const id = this.getId(nameId);
          _SettingsSection.setDefaultFieldValue(id, defaultValue);
          events.onChange = onChange;
          this.sectionFields[nameId] = {
            id,
            type: "toggle" /* TOGGLE */,
            description,
            events
          };
          return this;
        };
        addInput = (nameId, description, defaultValue, onChange = constVoid, inputType = "text", events = {}) => {
          const id = this.getId(nameId);
          _SettingsSection.setDefaultFieldValue(id, defaultValue);
          events.onChange = onChange;
          this.sectionFields[nameId] = {
            id,
            type: "input" /* INPUT */,
            description,
            inputType,
            events
          };
          return this;
        };
        addDropDown = (nameId, description, options, defaultValue = Task_exports.of(0), onChange = constVoid, events = {}) => {
          const id = this.getId(nameId);
          _SettingsSection.setDefaultFieldValue(id, defaultValue);
          events.onChange = onChange;
          this.sectionFields[nameId] = {
            id,
            type: "dropdown" /* DROPDOWN */,
            description,
            options,
            events
          };
          return this;
        };
        addHidden = (nameId, defaultValue) => {
          const id = this.getId(nameId);
          _SettingsSection.setDefaultFieldValue(id, defaultValue);
          this.sectionFields[nameId] = {
            id,
            type: "hidden" /* HIDDEN */,
            description: ""
          };
          return this;
        };
        getId = (nameId) => `extensions:${this.sectionId}:${nameId}`;
        useStateFor = (id) => {
          const [value, setValueState] = (0, import_react2.useState)(_SettingsSection.getFieldValue(id));
          return [
            value,
            (newValue) => {
              if (newValue !== void 0) {
                setValueState(newValue);
                _SettingsSection.setFieldValue(id, newValue);
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
          if (_SettingsSection.getFieldValue(id) === null)
            _SettingsSection.setFieldValue(id, await defaultValue());
        };
        FieldsContainer = () => {
          const [rerender, setRerender] = (0, import_react2.useState)(0);
          this.setRerender = setRerender;
          return /* @__PURE__ */ import_react2.default.createElement("div", { className: "x-settings-section", key: rerender }, /* @__PURE__ */ import_react2.default.createElement("h2", { className: "Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type" }, this.name), Object.entries(this.sectionFields).map(([nameId, field]) => {
            return /* @__PURE__ */ import_react2.default.createElement(this.Field, { field });
          }));
        };
        Field = ({ field }) => {
          const isType = is("type");
          return /* @__PURE__ */ import_react2.default.createElement("div", { className: "x-settings-row" }, /* @__PURE__ */ import_react2.default.createElement(this.SettingDescription, { id: field.id, description: field.description }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "x-settings-secondColumn" }, guard42([
            [isType("input" /* INPUT */), this.SettingInputField],
            [isType("button" /* BUTTON */), this.SettingButtonField],
            [isType("toggle" /* TOGGLE */), this.SettingToggleField],
            [isType("dropdown" /* DROPDOWN */), this.SettingDropdownField]
          ])(this.SettingHidden)(field)));
        };
        SettingDescription = ({ id, description }) => /* @__PURE__ */ import_react2.default.createElement("div", { className: "x-settings-firstColumn" }, /* @__PURE__ */ import_react2.default.createElement("label", { className: "Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type", htmlFor: id }, description));
        SettingButtonField = (field) => /* @__PURE__ */ import_react2.default.createElement("span", { className: "" }, /* @__PURE__ */ import_react2.default.createElement(
          "button",
          {
            id: field.id,
            className: "Button-sc-y0gtbx-0 Button-sm-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",
            ...field.events,
            type: field.type
          },
          field.text
        ));
        SettingToggleField = (field) => {
          const [value, setValue] = this.useStateFor(field.id);
          return /* @__PURE__ */ import_react2.default.createElement("label", { className: "x-settings-secondColumn x-toggle-wrapper" }, /* @__PURE__ */ import_react2.default.createElement(
            "input",
            {
              id: field.id,
              className: "x-toggle-input",
              type: "checkbox",
              checked: _SettingsSection.getFieldValue(field.id),
              ...field.events,
              onChange: (e) => {
                setValue(e.currentTarget.checked);
                field.events.onChange?.(e);
              }
            }
          ), /* @__PURE__ */ import_react2.default.createElement("span", { className: "x-toggle-indicatorWrapper" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "x-toggle-indicator" })));
        };
        SettingInputField = (field) => {
          const [value, setValue] = this.useStateFor(field.id);
          return /* @__PURE__ */ import_react2.default.createElement(
            "input",
            {
              className: "x-settings-input",
              id: field.id,
              dir: "ltr",
              value: _SettingsSection.getFieldValue(field.id),
              type: field.inputType,
              ...field.events,
              onChange: (e) => {
                setValue(e.currentTarget.value);
                field.events.onChange?.(e);
              }
            }
          );
        };
        SettingDropdownField = (field) => {
          const [value, setValue] = this.useStateFor(field.id);
          return /* @__PURE__ */ import_react2.default.createElement(
            "select",
            {
              className: "main-dropDown-dropDown",
              id: field.id,
              ...field.events,
              onChange: (e) => {
                setValue(e.currentTarget.selectedIndex);
                field.events.onChange?.(e);
              }
            },
            field.options.map((option2, i) => /* @__PURE__ */ import_react2.default.createElement("option", { selected: i === _SettingsSection.getFieldValue(field.id), value: i + 1 }, option2))
          );
        };
        SettingHidden = () => /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null);
      };
    }
  });

  // extensions/show-the-genres/settings.tsx
  var settings, CONFIG;
  var init_settings2 = __esm({
    "extensions/show-the-genres/settings.tsx"() {
      "use strict";
      init_es6();
      init_settings();
      settings = new SettingsSection("Show The Genres", "show-the-genres").addInput(
        "LFMApiKey",
        "Last.fm API Key",
        Task_exports.of("44654ea047786d90338c17331a5f5d95")
      );
      settings.pushSettings();
      CONFIG = settings.toObject();
    }
  });

  // temp_stylePlugin:ni:sha-256;F3zgswjydEILy2a_6lHDIyhG7Flt8-wqcPTy_caaMyI
  var init_ni_sha_256_F3zgswjydEILy2a_6lHDIyhG7Flt8_wqcPTy_caaMyI = __esm({
    "temp_stylePlugin:ni:sha-256;F3zgswjydEILy2a_6lHDIyhG7Flt8-wqcPTy_caaMyI"() {
    }
  });

  // stylePlugin:C:\Users\delus\DevDrives\Unsupported\spicetify-extensions\extensions\show-the-genres\assets\styles.scss
  var init_styles = __esm({
    "stylePlugin:C:\\Users\\delus\\DevDrives\\Unsupported\\spicetify-extensions\\extensions\\show-the-genres\\assets\\styles.scss"() {
      init_ni_sha_256_F3zgswjydEILy2a_6lHDIyhG7Flt8_wqcPTy_caaMyI();
    }
  });

  // extensions/show-the-genres/app.tsx
  var app_exports = {};
  __export(app_exports, {
    default: () => app_default,
    lastFmTags: () => lastFmTags,
    spotifyGenres: () => spotifyGenres
  });
  var app_default, searchPlaylist, spotifyGenres, lastFmTags, updateGenreContainer, updateGenresUI, getArtistUrisFromCurrentTrack, updateGenres, genreContainer;
  var init_app = __esm({
    "extensions/show-the-genres/app.tsx"() {
      "use strict";
      init_es6();
      init_function();
      init_api();
      init_fp();
      init_util();
      init_artistPage();
      init_popup();
      init_settings2();
      init_styles();
      app_default = {};
      searchPlaylist = (query) => Spicetify.Platform.History.push(`/search/${query}/playlists`);
      globalThis.searchPlaylist = searchPlaylist;
      spotifyGenres = new Array();
      lastFmTags = new Array();
      updateGenreContainer = async (genres) => {
        genreContainer.innerHTML = await pipe(
          genres,
          Array_exports.map(async (genre) => {
            const uri = await fetchWebSoundOfSpotifyPlaylist(genre) ?? "#";
            return `<a href="${uri}" style="color: var(--spice-subtext); font-size: 12px">${titleCase(genre)}</a>`;
          }),
          (ps) => Promise.all(ps),
          pMchain(Array_exports.intercalate(string_exports.Monoid)(`<span>, </span>`))
        );
        return genreContainer;
      };
      updateGenresUI = async (genres) => {
        const trackInfoContainer = await waitForElement("div.main-trackInfo-container");
        const { uri, metadata } = Spicetify.Player.data.track;
        if (metadata && !metadata.is_local && Spicetify.URI.isTrack(uri) && genres.length) {
          trackInfoContainer?.appendChild(await updateGenreContainer(genres));
          lastFmTags = pipe(
            await fetchTrackLFMAPI(CONFIG.LFMApiKey, metadata.artist_name, metadata.title),
            ({ track }) => track.toptags.tag,
            Array_exports.map(({ name }) => name)
          );
        } else
          trackInfoContainer?.removeChild(genreContainer);
      };
      getArtistUrisFromCurrentTrack = () => {
        let metadata = Spicetify.Player.data?.track?.metadata ?? {};
        return [...Array(10).keys()].map((k) => metadata["artist_uri" + (k ? `:${k}` : "")]).filter(Boolean);
      };
      updateGenres = async () => {
        const artistUris = getArtistUrisFromCurrentTrack();
        spotifyGenres = await getArtistsGenresOrRelated(artistUris);
        await updateGenresUI(spotifyGenres.slice(0, 5));
      };
      genreContainer = document.createElement("div");
      genreContainer.className = "main-trackInfo-genres ellipsis-one-line main-type-finale";
      genreContainer.style.gridArea = "genres";
      genreContainer.addEventListener("contextmenu", genrePopup);
      Spicetify.Player.addEventListener("songchange", updateGenres);
      updateGenres();
      Spicetify.Platform.History.listen(updateArtistPage);
      updateArtistPage(Spicetify.Platform.History.location);
    }
  });

  // extensions/show-the-genres/entry.tsx
  init_es6();
  init_Record();
  init_function();
  init_util();
  (async () => {
    const mustLoad = ["CosmosAsync", "GraphQL", "Locale", "Platform", "Player", "PopupModal", "React", "ReactDOM"];
    let timer = 0;
    while (mustLoad.some(flow(flip(lookup6)(Spicetify), Option_exports.isNone)))
      await sleep(timer += 100);
    await Promise.resolve().then(() => (init_app(), app_exports));
  })();
})();
//! Does location actually point to document.body?
(async () => {
    if (!document.getElementById(`show-the-genres-css`)) {
        const el = document.createElement("style")
        el.id = `show-the-genres-css`
        el.textContent = `/* temp_stylePlugin:ni:sha-256;F3zgswjydEILy2a_6lHDIyhG7Flt8-wqcPTy_caaMyI */
.genres-popup::after {
  content: "";
  display: table;
  clear: both;
}
.genres-popup .title {
  color: var(--spice-text);
}
.genres-popup .spaced-down {
  margin-bottom: 20px;
}
.genres-popup .login-button {
  background-color: var(--spice-button);
  border-radius: 8px;
  border-style: none;
  color: var(--spice-text);
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  margin: 10px;
  padding: 5px 10px;
  text-align: center;
}
.genres-popup .login-button:hover {
  background-color: var(--spice-button-active);
}
.main-nowPlayingWidget-trackInfo.main-trackInfo-container {
  grid-template: "title title" "badges subtitle" "genres genres"/auto 1fr auto;
}`
        document.head.appendChild(el)
    }
})()