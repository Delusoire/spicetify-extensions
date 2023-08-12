"use strict";
var star;
(star ||= {}).ratings = (() => {
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
  var __spreadArray, constNull, constUndefined, SK, dual;
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
      constNull = /* @__PURE__ */ constant(null);
      constUndefined = /* @__PURE__ */ constant(void 0);
      SK = function(_, b) {
        return b;
      };
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
  var __spreadArray2, isNone, isSome, none, some, isLeft, singleton, isNonEmpty, head, tail, emptyReadonlyArray, emptyRecord, has, fromReadonlyNonEmptyArray, flatMapIO, flatMapTask;
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
      isNonEmpty = function(as5) {
        return as5.length > 0;
      };
      head = function(as5) {
        return as5[0];
      };
      tail = function(as5) {
        return as5.slice(1);
      };
      emptyReadonlyArray = [];
      emptyRecord = {};
      has = Object.prototype.hasOwnProperty;
      fromReadonlyNonEmptyArray = function(as5) {
        return __spreadArray2([as5[0]], as5.slice(1), true);
      };
      flatMapIO = function(F, M) {
        return dual(2, function(self, f5) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f5(a));
          });
        });
      };
      flatMapTask = function(F, M) {
        return dual(2, function(self, f5) {
          return M.flatMap(self, function(a) {
            return F.fromTask(f5(a));
          });
        });
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Apply.js
  function ap(F, G) {
    return function(fa) {
      return function(fab) {
        return F.ap(F.map(fab, function(gab) {
          return function(ga) {
            return G.ap(gab, ga);
          };
        }), fa);
      };
    };
  }
  function apFirst(A) {
    return function(second) {
      return function(first3) {
        return A.ap(A.map(first3, function(a) {
          return function() {
            return a;
          };
        }), second);
      };
    };
  }
  function apSecond(A) {
    return function(second) {
      return function(first3) {
        return A.ap(A.map(first3, function() {
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
        concat: function(first3, second) {
          return F.ap(F.map(first3, function(x) {
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
  function map(F, G) {
    return function(f5) {
      return function(fa) {
        return F.map(fa, function(ga) {
          return G.map(ga, f5);
        });
      };
    };
  }
  function flap(F) {
    return function(a) {
      return function(fab) {
        return F.map(fab, function(f5) {
          return f5(a);
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
    return function(name, f5) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f5(a), _a));
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
    var f5 = getApplySemigroup(F);
    return function(M) {
      return {
        concat: f5(M).concat,
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
    return function(f5) {
      return function(first3) {
        return tapM(first3, f5);
      };
    };
  }
  function tap(M) {
    return function(first3, f5) {
      return M.chain(first3, function(a) {
        return M.map(f5(a), function() {
          return a;
        });
      });
    };
  }
  function bind(M) {
    return function(name, f5) {
      return function(ma) {
        return M.chain(ma, function(a) {
          return M.map(f5(a), function(b) {
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
    return function(f5) {
      return flow(f5, F.fromEither);
    };
  }
  function chainEitherK(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function(f5) {
      return function(ma) {
        return M.chain(ma, fromEitherKF(f5));
      };
    };
  }
  function tapEither(F, M) {
    var fromEither6 = fromEitherK(F);
    var tapM = tap(M);
    return function(self, f5) {
      return tapM(self, fromEither6(f5));
    };
  }
  var init_FromEither = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromEither.js"() {
      init_Chain();
      init_function();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Eq.js
  var fromEquals, eqStrict, strictEqual;
  var init_Eq = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Eq.js"() {
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Ord.js
  function compare(first3, second) {
    return first3 < second ? -1 : first3 > second ? 1 : 0;
  }
  var equalsDefault, fromCompare, getSemigroup, getMonoid, min, max, strictOrd;
  var init_Ord = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Ord.js"() {
      init_Eq();
      equalsDefault = function(compare2) {
        return function(first3, second) {
          return first3 === second || compare2(first3, second) === 0;
        };
      };
      fromCompare = function(compare2) {
        return {
          equals: equalsDefault(compare2),
          compare: function(first3, second) {
            return first3 === second ? 0 : compare2(first3, second);
          }
        };
      };
      getSemigroup = function() {
        return {
          concat: function(first3, second) {
            return fromCompare(function(a, b) {
              var ox = first3.compare(a, b);
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
      min = function(O2) {
        return function(first3, second) {
          return first3 === second || O2.compare(first3, second) < 1 ? first3 : second;
        };
      };
      max = function(O2) {
        return function(first3, second) {
          return first3 === second || O2.compare(first3, second) > -1 ? first3 : second;
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
          return function(as5) {
            return as5.reduce(function(a, acc) {
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
      min2 = function(O2) {
        return {
          concat: min(O2)
        };
      };
      max2 = function(O2) {
        return {
          concat: max(O2)
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
  function concat(x, y) {
    return y ? x.concat(y) : function(y2) {
      return y2.concat(x);
    };
  }
  function cons(head6, tail6) {
    return tail6 === void 0 ? prepend(head6) : pipe(tail6, prepend(head6));
  }
  var __spreadArray3, empty, isNonEmpty2, isOutOfBound, prependW, prepend, appendW, append, unsafeInsertAt, unsafeUpdateAt, uniq, sortBy, union, rotate, makeBy, range, sort, prependAll, intersperse, chop, splitAt, chunksOf, of, reduce, foldMap, reduceRight, reduceWithIndex, foldMapWithIndex, reduceRightWithIndex, extract, getShow, getEq, head2, tail2, last2, init, min3, max3, concatAll3, intercalate, snoc;
  var init_ReadonlyNonEmptyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js"() {
      init_Eq();
      init_function();
      init_internal();
      init_Ord();
      init_Semigroup();
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
      empty = emptyReadonlyArray;
      isNonEmpty2 = isNonEmpty;
      isOutOfBound = function(i, as5) {
        return i < 0 || i >= as5.length;
      };
      prependW = function(head6) {
        return function(tail6) {
          return __spreadArray3([head6], tail6, true);
        };
      };
      prepend = prependW;
      appendW = function(end) {
        return function(init5) {
          return __spreadArray3(__spreadArray3([], init5, true), [end], false);
        };
      };
      append = appendW;
      unsafeInsertAt = function(i, a, as5) {
        if (isNonEmpty2(as5)) {
          var xs = fromReadonlyNonEmptyArray(as5);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      unsafeUpdateAt = function(i, a, as5) {
        if (as5[i] === a) {
          return as5;
        } else {
          var xs = fromReadonlyNonEmptyArray(as5);
          xs[i] = a;
          return xs;
        }
      };
      uniq = function(E) {
        return function(as5) {
          if (as5.length === 1) {
            return as5;
          }
          var out = [head2(as5)];
          var rest = tail2(as5);
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
        if (isNonEmpty2(ords)) {
          var M = getMonoid();
          return sort(ords.reduce(M.concat, M.empty));
        }
        return identity;
      };
      union = function(E) {
        var uniqE = uniq(E);
        return function(second) {
          return function(first3) {
            return uniqE(pipe(first3, concat(second)));
          };
        };
      };
      rotate = function(n) {
        return function(as5) {
          var len = as5.length;
          var m = Math.round(n) % len;
          if (isOutOfBound(Math.abs(m), as5) || m === 0) {
            return as5;
          }
          if (m < 0) {
            var _a = splitAt(-m)(as5), f5 = _a[0], s = _a[1];
            return pipe(s, concat(f5));
          } else {
            return rotate(m - len)(as5);
          }
        };
      };
      makeBy = function(f5) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f5(0)];
          for (var i = 1; i < j; i++) {
            out.push(f5(i));
          }
          return out;
        };
      };
      range = function(start, end) {
        return start <= end ? makeBy(function(i) {
          return start + i;
        })(end - start + 1) : [start];
      };
      sort = function(O2) {
        return function(as5) {
          return as5.length === 1 ? as5 : as5.slice().sort(O2.compare);
        };
      };
      prependAll = function(middle) {
        return function(as5) {
          var out = [middle, as5[0]];
          for (var i = 1; i < as5.length; i++) {
            out.push(middle, as5[i]);
          }
          return out;
        };
      };
      intersperse = function(middle) {
        return function(as5) {
          var rest = tail2(as5);
          return isNonEmpty2(rest) ? pipe(rest, prependAll(middle), prepend(head2(as5))) : as5;
        };
      };
      chop = function(f5) {
        return function(as5) {
          var _a = f5(as5), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (isNonEmpty2(next)) {
            var _b = f5(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      splitAt = function(n) {
        return function(as5) {
          var m = Math.max(1, n);
          return m >= as5.length ? [as5, empty] : [pipe(as5.slice(1, m), prepend(head2(as5))), as5.slice(m)];
        };
      };
      chunksOf = function(n) {
        return chop(splitAt(n));
      };
      of = singleton;
      reduce = function(b, f5) {
        return reduceWithIndex(b, function(_, b2, a) {
          return f5(b2, a);
        });
      };
      foldMap = function(S) {
        return function(f5) {
          return function(as5) {
            return as5.slice(1).reduce(function(s, a) {
              return S.concat(s, f5(a));
            }, f5(as5[0]));
          };
        };
      };
      reduceRight = function(b, f5) {
        return reduceRightWithIndex(b, function(_, b2, a) {
          return f5(b2, a);
        });
      };
      reduceWithIndex = function(b, f5) {
        return function(as5) {
          return as5.reduce(function(b2, a, i) {
            return f5(i, b2, a);
          }, b);
        };
      };
      foldMapWithIndex = function(S) {
        return function(f5) {
          return function(as5) {
            return as5.slice(1).reduce(function(s, a, i) {
              return S.concat(s, f5(i + 1, a));
            }, f5(0, as5[0]));
          };
        };
      };
      reduceRightWithIndex = function(b, f5) {
        return function(as5) {
          return as5.reduceRight(function(b2, a, i) {
            return f5(i, a, b2);
          }, b);
        };
      };
      extract = head;
      getShow = function(S) {
        return {
          show: function(as5) {
            return "[".concat(as5.map(S.show).join(", "), "]");
          }
        };
      };
      getEq = function(E) {
        return fromEquals(function(xs, ys) {
          return xs.length === ys.length && xs.every(function(x, i) {
            return E.equals(x, ys[i]);
          });
        });
      };
      head2 = extract;
      tail2 = tail;
      last2 = function(as5) {
        return as5[as5.length - 1];
      };
      init = function(as5) {
        return as5.slice(0, -1);
      };
      min3 = function(O2) {
        var S = min2(O2);
        return function(as5) {
          return as5.reduce(S.concat);
        };
      };
      max3 = function(O2) {
        var S = max2(O2);
        return function(as5) {
          return as5.reduce(S.concat);
        };
      };
      concatAll3 = function(S) {
        return function(as5) {
          return as5.reduce(S.concat);
        };
      };
      intercalate = function(S) {
        var concatAllS = concatAll3(S);
        return function(middle) {
          return flow(intersperse(middle), concatAllS);
        };
      };
      snoc = function(init5, end) {
        return pipe(init5, concat([end]));
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/NonEmptyArray.js
  var NonEmptyArray_exports = {};
  __export(NonEmptyArray_exports, {
    Alt: () => Alt,
    Applicative: () => Applicative,
    Apply: () => Apply,
    Chain: () => Chain,
    Comonad: () => Comonad,
    Do: () => Do,
    Foldable: () => Foldable,
    FoldableWithIndex: () => FoldableWithIndex,
    Functor: () => Functor,
    FunctorWithIndex: () => FunctorWithIndex,
    Monad: () => Monad,
    Pointed: () => Pointed,
    Traversable: () => Traversable,
    TraversableWithIndex: () => TraversableWithIndex,
    URI: () => URI,
    alt: () => alt,
    altW: () => altW,
    ap: () => ap2,
    apFirst: () => apFirst2,
    apS: () => apS2,
    apSecond: () => apSecond2,
    append: () => append2,
    appendW: () => appendW2,
    bind: () => bind2,
    bindTo: () => bindTo2,
    chain: () => chain,
    chainFirst: () => chainFirst2,
    chainWithIndex: () => chainWithIndex,
    chop: () => chop2,
    chunksOf: () => chunksOf2,
    concat: () => concat2,
    concatAll: () => concatAll4,
    concatW: () => concatW,
    cons: () => cons2,
    copy: () => copy,
    duplicate: () => duplicate,
    extend: () => extend,
    extract: () => extract2,
    filter: () => filter,
    filterWithIndex: () => filterWithIndex,
    flap: () => flap2,
    flatMap: () => flatMap,
    flatten: () => flatten,
    fold: () => fold,
    foldMap: () => foldMap2,
    foldMapWithIndex: () => foldMapWithIndex2,
    fromArray: () => fromArray,
    fromReadonlyNonEmptyArray: () => fromReadonlyNonEmptyArray2,
    getEq: () => getEq2,
    getSemigroup: () => getSemigroup3,
    getShow: () => getShow2,
    getUnionSemigroup: () => getUnionSemigroup,
    group: () => group,
    groupBy: () => groupBy,
    groupSort: () => groupSort,
    head: () => head3,
    init: () => init2,
    insertAt: () => insertAt,
    intercalate: () => intercalate2,
    intersperse: () => intersperse2,
    isNonEmpty: () => isNonEmpty3,
    isOutOfBound: () => isOutOfBound2,
    last: () => last3,
    let: () => let_2,
    makeBy: () => makeBy2,
    map: () => map2,
    mapWithIndex: () => mapWithIndex,
    matchLeft: () => matchLeft,
    matchRight: () => matchRight,
    max: () => max4,
    min: () => min4,
    modifyAt: () => modifyAt,
    modifyHead: () => modifyHead,
    modifyLast: () => modifyLast,
    nonEmptyArray: () => nonEmptyArray,
    of: () => of2,
    prepend: () => prepend2,
    prependAll: () => prependAll2,
    prependToAll: () => prependToAll,
    prependW: () => prependW2,
    range: () => range2,
    reduce: () => reduce2,
    reduceRight: () => reduceRight2,
    reduceRightWithIndex: () => reduceRightWithIndex2,
    reduceWithIndex: () => reduceWithIndex2,
    replicate: () => replicate,
    reverse: () => reverse2,
    rotate: () => rotate2,
    sequence: () => sequence,
    snoc: () => snoc2,
    sort: () => sort2,
    sortBy: () => sortBy2,
    splitAt: () => splitAt2,
    tail: () => tail3,
    traverse: () => traverse,
    traverseWithIndex: () => traverseWithIndex,
    unappend: () => unappend,
    uncons: () => uncons,
    union: () => union2,
    uniq: () => uniq2,
    unprepend: () => unprepend,
    unsafeInsertAt: () => unsafeInsertAt2,
    unsafeUpdateAt: () => unsafeUpdateAt2,
    unsnoc: () => unsnoc,
    unzip: () => unzip,
    updateAt: () => updateAt,
    updateHead: () => updateHead,
    updateLast: () => updateLast,
    zip: () => zip,
    zipWith: () => zipWith
  });
  function concatW(second) {
    return function(first3) {
      return first3.concat(second);
    };
  }
  function concat2(x, y) {
    return y ? x.concat(y) : function(y2) {
      return y2.concat(x);
    };
  }
  function group(E) {
    return function(as5) {
      var len = as5.length;
      if (len === 0) {
        return [];
      }
      var out = [];
      var head6 = as5[0];
      var nea = [head6];
      for (var i = 1; i < len; i++) {
        var a = as5[i];
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
  }
  function zip(as5, bs) {
    if (bs === void 0) {
      return function(bs2) {
        return zip(bs2, as5);
      };
    }
    return zipWith(as5, bs, function(a, b) {
      return [a, b];
    });
  }
  function groupSort(O2) {
    var sortO = sort2(O2);
    var groupO = group(O2);
    return function(as5) {
      return isNonEmpty3(as5) ? groupO(sortO(as5)) : [];
    };
  }
  function filter(predicate) {
    return filterWithIndex(function(_, a) {
      return predicate(a);
    });
  }
  function cons2(head6, tail6) {
    return tail6 === void 0 ? prepend2(head6) : pipe(tail6, prepend2(head6));
  }
  var __spreadArray4, isNonEmpty3, isOutOfBound2, prependW2, prepend2, appendW2, append2, unsafeInsertAt2, unsafeUpdateAt2, uniq2, sortBy2, union2, rotate2, fromReadonlyNonEmptyArray2, fromArray, makeBy2, replicate, range2, unprepend, unappend, reverse2, groupBy, sort2, insertAt, updateAt, modifyAt, copy, of2, zipWith, unzip, prependAll2, intersperse2, foldMapWithIndex2, foldMap2, chainWithIndex, chop2, splitAt2, chunksOf2, _map, _mapWithIndex, _ap, _extend, _reduce, _foldMap, _reduceRight, _traverse, _alt, _reduceWithIndex, _foldMapWithIndex, _reduceRightWithIndex, _traverseWithIndex, altW, alt, ap2, flatMap, extend, duplicate, flatten, map2, mapWithIndex, reduce2, reduceWithIndex2, reduceRight2, reduceRightWithIndex2, traverse, sequence, traverseWithIndex, extract2, URI, getShow2, getSemigroup3, getEq2, getUnionSemigroup, Functor, flap2, Pointed, FunctorWithIndex, Apply, apFirst2, apSecond2, Applicative, Chain, chainFirst2, Monad, Foldable, FoldableWithIndex, Traversable, TraversableWithIndex, Alt, Comonad, Do, bindTo2, let_2, bind2, apS2, head3, tail3, last3, init2, min4, max4, concatAll4, matchLeft, matchRight, modifyHead, updateHead, modifyLast, updateLast, intercalate2, chain, filterWithIndex, uncons, unsnoc, snoc2, prependToAll, fold, nonEmptyArray;
  var init_NonEmptyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/NonEmptyArray.js"() {
      init_Apply();
      init_Chain();
      init_function();
      init_Functor();
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
      isNonEmpty3 = function(as5) {
        return as5.length > 0;
      };
      isOutOfBound2 = function(i, as5) {
        return i < 0 || i >= as5.length;
      };
      prependW2 = function(head6) {
        return function(tail6) {
          return __spreadArray4([head6], tail6, true);
        };
      };
      prepend2 = prependW2;
      appendW2 = function(end) {
        return function(init5) {
          return __spreadArray4(__spreadArray4([], init5, true), [end], false);
        };
      };
      append2 = appendW2;
      unsafeInsertAt2 = function(i, a, as5) {
        if (isNonEmpty3(as5)) {
          var xs = fromReadonlyNonEmptyArray2(as5);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      unsafeUpdateAt2 = function(i, a, as5) {
        var xs = fromReadonlyNonEmptyArray2(as5);
        xs[i] = a;
        return xs;
      };
      uniq2 = function(E) {
        return function(as5) {
          if (as5.length === 1) {
            return copy(as5);
          }
          var out = [head3(as5)];
          var rest = tail3(as5);
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
      sortBy2 = function(ords) {
        if (isNonEmpty3(ords)) {
          var M = getMonoid();
          return sort2(ords.reduce(M.concat, M.empty));
        }
        return copy;
      };
      union2 = function(E) {
        var uniqE = uniq2(E);
        return function(second) {
          return function(first3) {
            return uniqE(pipe(first3, concat2(second)));
          };
        };
      };
      rotate2 = function(n) {
        return function(as5) {
          var len = as5.length;
          var m = Math.round(n) % len;
          if (isOutOfBound2(Math.abs(m), as5) || m === 0) {
            return copy(as5);
          }
          if (m < 0) {
            var _a = splitAt2(-m)(as5), f5 = _a[0], s = _a[1];
            return pipe(s, concat2(f5));
          } else {
            return rotate2(m - len)(as5);
          }
        };
      };
      fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
      fromArray = function(as5) {
        return isNonEmpty3(as5) ? some(as5) : none;
      };
      makeBy2 = function(f5) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f5(0)];
          for (var i = 1; i < j; i++) {
            out.push(f5(i));
          }
          return out;
        };
      };
      replicate = function(a) {
        return makeBy2(function() {
          return a;
        });
      };
      range2 = function(start, end) {
        return start <= end ? makeBy2(function(i) {
          return start + i;
        })(end - start + 1) : [start];
      };
      unprepend = function(as5) {
        return [head3(as5), tail3(as5)];
      };
      unappend = function(as5) {
        return [init2(as5), last3(as5)];
      };
      reverse2 = function(as5) {
        return __spreadArray4([last3(as5)], as5.slice(0, -1).reverse(), true);
      };
      groupBy = function(f5) {
        return function(as5) {
          var out = {};
          for (var _i = 0, as_1 = as5; _i < as_1.length; _i++) {
            var a = as_1[_i];
            var k = f5(a);
            if (has.call(out, k)) {
              out[k].push(a);
            } else {
              out[k] = [a];
            }
          }
          return out;
        };
      };
      sort2 = function(O2) {
        return function(as5) {
          return as5.slice().sort(O2.compare);
        };
      };
      insertAt = function(i, a) {
        return function(as5) {
          return i < 0 || i > as5.length ? none : some(unsafeInsertAt2(i, a, as5));
        };
      };
      updateAt = function(i, a) {
        return modifyAt(i, function() {
          return a;
        });
      };
      modifyAt = function(i, f5) {
        return function(as5) {
          return isOutOfBound2(i, as5) ? none : some(unsafeUpdateAt2(i, f5(as5[i]), as5));
        };
      };
      copy = fromReadonlyNonEmptyArray2;
      of2 = function(a) {
        return [a];
      };
      zipWith = function(as5, bs, f5) {
        var cs = [f5(as5[0], bs[0])];
        var len = Math.min(as5.length, bs.length);
        for (var i = 1; i < len; i++) {
          cs[i] = f5(as5[i], bs[i]);
        }
        return cs;
      };
      unzip = function(abs) {
        var fa = [abs[0][0]];
        var fb = [abs[0][1]];
        for (var i = 1; i < abs.length; i++) {
          fa[i] = abs[i][0];
          fb[i] = abs[i][1];
        }
        return [fa, fb];
      };
      prependAll2 = function(middle) {
        return function(as5) {
          var out = [middle, as5[0]];
          for (var i = 1; i < as5.length; i++) {
            out.push(middle, as5[i]);
          }
          return out;
        };
      };
      intersperse2 = function(middle) {
        return function(as5) {
          var rest = tail3(as5);
          return isNonEmpty3(rest) ? pipe(rest, prependAll2(middle), prepend2(head3(as5))) : copy(as5);
        };
      };
      foldMapWithIndex2 = foldMapWithIndex;
      foldMap2 = foldMap;
      chainWithIndex = function(f5) {
        return function(as5) {
          var out = fromReadonlyNonEmptyArray2(f5(0, head3(as5)));
          for (var i = 1; i < as5.length; i++) {
            out.push.apply(out, f5(i, as5[i]));
          }
          return out;
        };
      };
      chop2 = function(f5) {
        return function(as5) {
          var _a = f5(as5), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (isNonEmpty3(next)) {
            var _b = f5(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      splitAt2 = function(n) {
        return function(as5) {
          var m = Math.max(1, n);
          return m >= as5.length ? [copy(as5), []] : [pipe(as5.slice(1, m), prepend2(head3(as5))), as5.slice(m)];
        };
      };
      chunksOf2 = function(n) {
        return chop2(splitAt2(n));
      };
      _map = function(fa, f5) {
        return pipe(fa, map2(f5));
      };
      _mapWithIndex = function(fa, f5) {
        return pipe(fa, mapWithIndex(f5));
      };
      _ap = function(fab, fa) {
        return pipe(fab, ap2(fa));
      };
      _extend = function(wa, f5) {
        return pipe(wa, extend(f5));
      };
      _reduce = function(fa, b, f5) {
        return pipe(fa, reduce2(b, f5));
      };
      _foldMap = function(M) {
        var foldMapM = foldMap2(M);
        return function(fa, f5) {
          return pipe(fa, foldMapM(f5));
        };
      };
      _reduceRight = function(fa, b, f5) {
        return pipe(fa, reduceRight2(b, f5));
      };
      _traverse = function(F) {
        var traverseF = traverse(F);
        return function(ta, f5) {
          return pipe(ta, traverseF(f5));
        };
      };
      _alt = function(fa, that) {
        return pipe(fa, alt(that));
      };
      _reduceWithIndex = function(fa, b, f5) {
        return pipe(fa, reduceWithIndex2(b, f5));
      };
      _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = foldMapWithIndex2(M);
        return function(fa, f5) {
          return pipe(fa, foldMapWithIndexM(f5));
        };
      };
      _reduceRightWithIndex = function(fa, b, f5) {
        return pipe(fa, reduceRightWithIndex2(b, f5));
      };
      _traverseWithIndex = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta, f5) {
          return pipe(ta, traverseWithIndexF(f5));
        };
      };
      altW = function(that) {
        return function(as5) {
          return pipe(as5, concatW(that()));
        };
      };
      alt = altW;
      ap2 = function(as5) {
        return flatMap(function(f5) {
          return pipe(as5, map2(f5));
        });
      };
      flatMap = /* @__PURE__ */ dual(2, function(ma, f5) {
        return pipe(ma, chainWithIndex(function(i, a) {
          return f5(a, i);
        }));
      });
      extend = function(f5) {
        return function(as5) {
          var next = tail3(as5);
          var out = [f5(as5)];
          while (isNonEmpty3(next)) {
            out.push(f5(next));
            next = tail3(next);
          }
          return out;
        };
      };
      duplicate = /* @__PURE__ */ extend(identity);
      flatten = /* @__PURE__ */ flatMap(identity);
      map2 = function(f5) {
        return mapWithIndex(function(_, a) {
          return f5(a);
        });
      };
      mapWithIndex = function(f5) {
        return function(as5) {
          var out = [f5(0, head3(as5))];
          for (var i = 1; i < as5.length; i++) {
            out.push(f5(i, as5[i]));
          }
          return out;
        };
      };
      reduce2 = reduce;
      reduceWithIndex2 = reduceWithIndex;
      reduceRight2 = reduceRight;
      reduceRightWithIndex2 = reduceRightWithIndex;
      traverse = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(f5) {
          return traverseWithIndexF(function(_, a) {
            return f5(a);
          });
        };
      };
      sequence = function(F) {
        return traverseWithIndex(F)(function(_, a) {
          return a;
        });
      };
      traverseWithIndex = function(F) {
        return function(f5) {
          return function(as5) {
            var out = F.map(f5(0, head3(as5)), of2);
            for (var i = 1; i < as5.length; i++) {
              out = F.ap(F.map(out, function(bs) {
                return function(b) {
                  return pipe(bs, append2(b));
                };
              }), f5(i, as5[i]));
            }
            return out;
          };
        };
      };
      extract2 = head2;
      URI = "NonEmptyArray";
      getShow2 = getShow;
      getSemigroup3 = function() {
        return {
          concat: concat2
        };
      };
      getEq2 = getEq;
      getUnionSemigroup = function(E) {
        var unionE = union2(E);
        return {
          concat: function(first3, second) {
            return unionE(second)(first3);
          }
        };
      };
      Functor = {
        URI,
        map: _map
      };
      flap2 = /* @__PURE__ */ flap(Functor);
      Pointed = {
        URI,
        of: of2
      };
      FunctorWithIndex = {
        URI,
        map: _map,
        mapWithIndex: _mapWithIndex
      };
      Apply = {
        URI,
        map: _map,
        ap: _ap
      };
      apFirst2 = /* @__PURE__ */ apFirst(Apply);
      apSecond2 = /* @__PURE__ */ apSecond(Apply);
      Applicative = {
        URI,
        map: _map,
        ap: _ap,
        of: of2
      };
      Chain = {
        URI,
        map: _map,
        ap: _ap,
        chain: flatMap
      };
      chainFirst2 = /* @__PURE__ */ chainFirst(Chain);
      Monad = {
        URI,
        map: _map,
        ap: _ap,
        of: of2,
        chain: flatMap
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
        traverse: _traverse,
        sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex
      };
      Alt = {
        URI,
        map: _map,
        alt: _alt
      };
      Comonad = {
        URI,
        map: _map,
        extend: _extend,
        extract: extract2
      };
      Do = /* @__PURE__ */ of2(emptyRecord);
      bindTo2 = /* @__PURE__ */ bindTo(Functor);
      let_2 = /* @__PURE__ */ let_(Functor);
      bind2 = /* @__PURE__ */ bind(Chain);
      apS2 = /* @__PURE__ */ apS(Apply);
      head3 = head2;
      tail3 = function(as5) {
        return as5.slice(1);
      };
      last3 = last2;
      init2 = function(as5) {
        return as5.slice(0, -1);
      };
      min4 = min3;
      max4 = max3;
      concatAll4 = function(S) {
        return function(as5) {
          return as5.reduce(S.concat);
        };
      };
      matchLeft = function(f5) {
        return function(as5) {
          return f5(head3(as5), tail3(as5));
        };
      };
      matchRight = function(f5) {
        return function(as5) {
          return f5(init2(as5), last3(as5));
        };
      };
      modifyHead = function(f5) {
        return function(as5) {
          return __spreadArray4([f5(head3(as5))], tail3(as5), true);
        };
      };
      updateHead = function(a) {
        return modifyHead(function() {
          return a;
        });
      };
      modifyLast = function(f5) {
        return function(as5) {
          return pipe(init2(as5), append2(f5(last3(as5))));
        };
      };
      updateLast = function(a) {
        return modifyLast(function() {
          return a;
        });
      };
      intercalate2 = intercalate;
      chain = flatMap;
      filterWithIndex = function(predicate) {
        return function(as5) {
          return fromArray(as5.filter(function(a, i) {
            return predicate(i, a);
          }));
        };
      };
      uncons = unprepend;
      unsnoc = unappend;
      snoc2 = function(init5, end) {
        return pipe(init5, append2(end));
      };
      prependToAll = prependAll2;
      fold = concatAll3;
      nonEmptyArray = {
        URI,
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/number.js
  var Eq, Ord, Bounded, MagmaSub, SemigroupSum, SemigroupProduct, MonoidSum, MonoidProduct, Field;
  var init_number = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/number.js"() {
      Eq = {
        equals: function(first3, second) {
          return first3 === second;
        }
      };
      Ord = {
        equals: Eq.equals,
        compare: function(first3, second) {
          return first3 < second ? -1 : first3 > second ? 1 : 0;
        }
      };
      Bounded = {
        equals: Eq.equals,
        compare: Ord.compare,
        top: Infinity,
        bottom: -Infinity
      };
      MagmaSub = {
        concat: function(first3, second) {
          return first3 - second;
        }
      };
      SemigroupSum = {
        concat: function(first3, second) {
          return first3 + second;
        }
      };
      SemigroupProduct = {
        concat: function(first3, second) {
          return first3 * second;
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
        div: function(first3, second) {
          return first3 / second;
        },
        mod: function(first3, second) {
          return first3 % second;
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
      return function(wa, f5) {
        return F.map(traverseF(wa, f5), C.separate);
      };
    };
  }
  function witherDefault(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f5) {
        return F.map(traverseF(wa, f5), C.compact);
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
  var ReadonlyArray_exports = {};
  __export(ReadonlyArray_exports, {
    Alt: () => Alt2,
    Alternative: () => Alternative,
    Applicative: () => Applicative2,
    Apply: () => Apply2,
    Chain: () => Chain2,
    ChainRecBreadthFirst: () => ChainRecBreadthFirst,
    ChainRecDepthFirst: () => ChainRecDepthFirst,
    Compactable: () => Compactable,
    Do: () => Do2,
    Extend: () => Extend,
    Filterable: () => Filterable,
    FilterableWithIndex: () => FilterableWithIndex,
    Foldable: () => Foldable2,
    FoldableWithIndex: () => FoldableWithIndex2,
    FromEither: () => FromEither,
    Functor: () => Functor2,
    FunctorWithIndex: () => FunctorWithIndex2,
    Monad: () => Monad2,
    Pointed: () => Pointed2,
    Traversable: () => Traversable2,
    TraversableWithIndex: () => TraversableWithIndex2,
    URI: () => URI2,
    Unfoldable: () => Unfoldable,
    Witherable: () => Witherable,
    Zero: () => Zero,
    _chainRecBreadthFirst: () => _chainRecBreadthFirst,
    _chainRecDepthFirst: () => _chainRecDepthFirst,
    alt: () => alt2,
    altW: () => altW2,
    ap: () => ap3,
    apFirst: () => apFirst3,
    apS: () => apS3,
    apSecond: () => apSecond3,
    append: () => append3,
    appendW: () => appendW3,
    bind: () => bind3,
    bindTo: () => bindTo3,
    chain: () => chain2,
    chainFirst: () => chainFirst3,
    chainRecBreadthFirst: () => chainRecBreadthFirst,
    chainRecDepthFirst: () => chainRecDepthFirst,
    chainWithIndex: () => chainWithIndex2,
    chop: () => chop3,
    chunksOf: () => chunksOf3,
    compact: () => compact,
    comprehension: () => comprehension,
    concat: () => concat3,
    concatW: () => concatW2,
    cons: () => cons3,
    deleteAt: () => deleteAt,
    difference: () => difference,
    dropLeft: () => dropLeft,
    dropLeftWhile: () => dropLeftWhile,
    dropRight: () => dropRight,
    duplicate: () => duplicate2,
    elem: () => elem,
    empty: () => empty2,
    every: () => every,
    exists: () => exists,
    extend: () => extend2,
    filter: () => filter2,
    filterE: () => filterE2,
    filterMap: () => filterMap,
    filterMapWithIndex: () => filterMapWithIndex,
    filterWithIndex: () => filterWithIndex2,
    findFirst: () => findFirst,
    findFirstMap: () => findFirstMap,
    findIndex: () => findIndex,
    findLast: () => findLast,
    findLastIndex: () => findLastIndex,
    findLastMap: () => findLastMap,
    flap: () => flap3,
    flatMap: () => flatMap2,
    flatten: () => flatten2,
    foldLeft: () => foldLeft,
    foldMap: () => foldMap3,
    foldMapWithIndex: () => foldMapWithIndex3,
    foldRight: () => foldRight,
    fromArray: () => fromArray2,
    fromEither: () => fromEither,
    fromEitherK: () => fromEitherK2,
    fromOption: () => fromOption,
    fromOptionK: () => fromOptionK,
    fromPredicate: () => fromPredicate,
    getDifferenceMagma: () => getDifferenceMagma,
    getEq: () => getEq3,
    getIntersectionSemigroup: () => getIntersectionSemigroup,
    getMonoid: () => getMonoid2,
    getOrd: () => getOrd,
    getSemigroup: () => getSemigroup4,
    getShow: () => getShow3,
    getUnionMonoid: () => getUnionMonoid,
    getUnionSemigroup: () => getUnionSemigroup2,
    guard: () => guard2,
    head: () => head4,
    init: () => init3,
    insertAt: () => insertAt2,
    intercalate: () => intercalate3,
    intersection: () => intersection,
    intersperse: () => intersperse3,
    isEmpty: () => isEmpty,
    isNonEmpty: () => isNonEmpty4,
    isOutOfBound: () => isOutOfBound3,
    last: () => last4,
    lefts: () => lefts,
    let: () => let_3,
    lookup: () => lookup,
    makeBy: () => makeBy3,
    map: () => map3,
    mapWithIndex: () => mapWithIndex2,
    match: () => match,
    matchLeft: () => matchLeft2,
    matchLeftW: () => matchLeftW,
    matchRight: () => matchRight2,
    matchRightW: () => matchRightW,
    matchW: () => matchW,
    modifyAt: () => modifyAt2,
    of: () => of3,
    partition: () => partition,
    partitionMap: () => partitionMap,
    partitionMapWithIndex: () => partitionMapWithIndex,
    partitionWithIndex: () => partitionWithIndex,
    prepend: () => prepend3,
    prependAll: () => prependAll3,
    prependToAll: () => prependToAll2,
    prependW: () => prependW3,
    range: () => range3,
    readonlyArray: () => readonlyArray,
    reduce: () => reduce3,
    reduceRight: () => reduceRight3,
    reduceRightWithIndex: () => reduceRightWithIndex3,
    reduceWithIndex: () => reduceWithIndex3,
    replicate: () => replicate2,
    reverse: () => reverse3,
    rights: () => rights,
    rotate: () => rotate3,
    scanLeft: () => scanLeft,
    scanRight: () => scanRight,
    separate: () => separate,
    sequence: () => sequence2,
    size: () => size,
    snoc: () => snoc3,
    some: () => some2,
    sort: () => sort3,
    sortBy: () => sortBy3,
    spanLeft: () => spanLeft,
    splitAt: () => splitAt3,
    tail: () => tail4,
    takeLeft: () => takeLeft,
    takeLeftWhile: () => takeLeftWhile,
    takeRight: () => takeRight,
    toArray: () => toArray,
    traverse: () => traverse2,
    traverseWithIndex: () => traverseWithIndex2,
    unfold: () => unfold,
    union: () => union3,
    uniq: () => uniq3,
    unsafeDeleteAt: () => unsafeDeleteAt,
    unsafeInsertAt: () => unsafeInsertAt3,
    unsafeUpdateAt: () => unsafeUpdateAt3,
    unzip: () => unzip2,
    updateAt: () => updateAt2,
    wilt: () => wilt,
    wither: () => wither,
    zero: () => zero,
    zip: () => zip2,
    zipWith: () => zipWith2
  });
  function fromPredicate(predicate) {
    return function(a) {
      return predicate(a) ? [a] : empty2;
    };
  }
  function lookup(i, as5) {
    return as5 === void 0 ? function(as6) {
      return lookup(i, as6);
    } : isOutOfBound3(i, as5) ? none : some(as5[i]);
  }
  function takeLeftWhile(predicate) {
    return function(as5) {
      var out = [];
      for (var _i = 0, as_1 = as5; _i < as_1.length; _i++) {
        var a = as_1[_i];
        if (!predicate(a)) {
          break;
        }
        out.push(a);
      }
      var len = out.length;
      return len === as5.length ? as5 : len === 0 ? empty2 : out;
    };
  }
  function spanLeft(predicate) {
    return function(as5) {
      var _a = splitAt3(spanLeftIndex(as5, predicate))(as5), init5 = _a[0], rest = _a[1];
      return { init: init5, rest };
    };
  }
  function dropLeftWhile(predicate) {
    return function(as5) {
      var i = spanLeftIndex(as5, predicate);
      return i === 0 ? as5 : i === as5.length ? empty2 : as5.slice(i);
    };
  }
  function findFirst(predicate) {
    return function(as5) {
      for (var i = 0; i < as5.length; i++) {
        if (predicate(as5[i])) {
          return some(as5[i]);
        }
      }
      return none;
    };
  }
  function findLast(predicate) {
    return function(as5) {
      for (var i = as5.length - 1; i >= 0; i--) {
        if (predicate(as5[i])) {
          return some(as5[i]);
        }
      }
      return none;
    };
  }
  function zip2(as5, bs) {
    if (bs === void 0) {
      return function(bs2) {
        return zip2(bs2, as5);
      };
    }
    return zipWith2(as5, bs, function(a, b) {
      return [a, b];
    });
  }
  function elem(E) {
    return function(a, as5) {
      if (as5 === void 0) {
        var elemE_1 = elem(E);
        return function(as6) {
          return elemE_1(a, as6);
        };
      }
      var predicate = function(element) {
        return E.equals(element, a);
      };
      var i = 0;
      for (; i < as5.length; i++) {
        if (predicate(as5[i])) {
          return true;
        }
      }
      return false;
    };
  }
  function comprehension(input, f5, g) {
    if (g === void 0) {
      g = function() {
        return true;
      };
    }
    var go = function(scope, input2) {
      return isNonEmpty4(input2) ? flatMap2(head2(input2), function(a) {
        return go(pipe(scope, append3(a)), tail2(input2));
      }) : g.apply(void 0, scope) ? [f5.apply(void 0, scope)] : empty2;
    };
    return go(empty2, input);
  }
  function union3(E) {
    var unionE = union(E);
    return function(first3, second) {
      if (second === void 0) {
        var unionE_1 = union3(E);
        return function(second2) {
          return unionE_1(second2, first3);
        };
      }
      return isNonEmpty4(first3) && isNonEmpty4(second) ? unionE(second)(first3) : isNonEmpty4(first3) ? first3 : second;
    };
  }
  function intersection(E) {
    var elemE = elem(E);
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
    var elemE = elem(E);
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
  function every(predicate) {
    return function(as5) {
      return as5.every(predicate);
    };
  }
  var __spreadArray5, isEmpty, isNonEmpty4, prepend3, prependW3, append3, appendW3, makeBy3, replicate2, fromOption, fromEither, matchW, match, matchLeftW, matchLeft2, foldLeft, matchRightW, matchRight2, foldRight, chainWithIndex2, scanLeft, scanRight, size, isOutOfBound3, head4, last4, tail4, init3, takeLeft, takeRight, spanLeftIndex, dropLeft, dropRight, findIndex, findFirstMap, findLastMap, findLastIndex, insertAt2, updateAt2, deleteAt, modifyAt2, reverse3, rights, lefts, sort3, zipWith2, unzip2, prependAll3, intersperse3, rotate3, uniq3, sortBy3, chop3, splitAt3, chunksOf3, fromOptionK, concatW2, concat3, _map2, _mapWithIndex2, _ap2, _filter, _filterMap, _partition, _partitionMap, _partitionWithIndex, _partitionMapWithIndex, _alt2, _reduce2, _foldMap2, _reduceRight2, _reduceWithIndex2, _foldMapWithIndex2, _reduceRightWithIndex2, _filterMapWithIndex, _filterWithIndex, _extend2, _traverse2, _traverseWithIndex2, _chainRecDepthFirst, _chainRecBreadthFirst, of3, zero, altW2, alt2, ap3, flatMap2, flatten2, map3, mapWithIndex2, separate, filter2, filterMapWithIndex, filterMap, compact, partition, partitionWithIndex, partitionMap, partitionMapWithIndex, filterWithIndex2, extend2, duplicate2, foldMapWithIndex3, reduce3, foldMap3, reduceWithIndex3, reduceRight3, reduceRightWithIndex3, traverse2, sequence2, traverseWithIndex2, wither, wilt, unfold, URI2, getShow3, getSemigroup4, getMonoid2, getEq3, getOrd, getUnionSemigroup2, getUnionMonoid, getIntersectionSemigroup, getDifferenceMagma, Functor2, flap3, Pointed2, FunctorWithIndex2, Apply2, apFirst3, apSecond3, Applicative2, Chain2, Monad2, chainFirst3, Unfoldable, Alt2, Zero, guard2, Alternative, Extend, Compactable, Filterable, FilterableWithIndex, Foldable2, FoldableWithIndex2, Traversable2, TraversableWithIndex2, chainRecDepthFirst, ChainRecDepthFirst, chainRecBreadthFirst, ChainRecBreadthFirst, _wither, _wilt, Witherable, filterE2, FromEither, fromEitherK2, unsafeInsertAt3, unsafeUpdateAt3, unsafeDeleteAt, toArray, fromArray2, empty2, some2, exists, intercalate3, Do2, bindTo3, let_3, bind3, apS3, chain2, range3, cons3, snoc3, prependToAll2, readonlyArray;
  var init_ReadonlyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyArray.js"() {
      init_Apply();
      init_Chain();
      init_Eq();
      init_FromEither();
      init_function();
      init_Functor();
      init_internal();
      init_number();
      init_Ord();
      init_ReadonlyNonEmptyArray();
      init_Separated();
      init_Witherable();
      init_Zero();
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
      isEmpty = function(as5) {
        return as5.length === 0;
      };
      isNonEmpty4 = isNonEmpty2;
      prepend3 = prepend;
      prependW3 = prependW;
      append3 = append;
      appendW3 = appendW;
      makeBy3 = function(n, f5) {
        return n <= 0 ? empty2 : makeBy(f5)(n);
      };
      replicate2 = function(n, a) {
        return makeBy3(n, function() {
          return a;
        });
      };
      fromOption = function(ma) {
        return isNone(ma) ? empty2 : [ma.value];
      };
      fromEither = function(e) {
        return isLeft(e) ? empty2 : [e.right];
      };
      matchW = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return isNonEmpty4(as5) ? onNonEmpty(as5) : onEmpty();
        };
      };
      match = matchW;
      matchLeftW = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return isNonEmpty4(as5) ? onNonEmpty(head2(as5), tail2(as5)) : onEmpty();
        };
      };
      matchLeft2 = matchLeftW;
      foldLeft = matchLeft2;
      matchRightW = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return isNonEmpty4(as5) ? onNonEmpty(init(as5), last2(as5)) : onEmpty();
        };
      };
      matchRight2 = matchRightW;
      foldRight = matchRight2;
      chainWithIndex2 = function(f5) {
        return function(as5) {
          if (isEmpty(as5)) {
            return empty2;
          }
          var out = [];
          for (var i = 0; i < as5.length; i++) {
            out.push.apply(out, f5(i, as5[i]));
          }
          return out;
        };
      };
      scanLeft = function(b, f5) {
        return function(as5) {
          var len = as5.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i = 0; i < len; i++) {
            out[i + 1] = f5(out[i], as5[i]);
          }
          return out;
        };
      };
      scanRight = function(b, f5) {
        return function(as5) {
          var len = as5.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i = len - 1; i >= 0; i--) {
            out[i] = f5(as5[i], out[i + 1]);
          }
          return out;
        };
      };
      size = function(as5) {
        return as5.length;
      };
      isOutOfBound3 = isOutOfBound;
      head4 = function(as5) {
        return isNonEmpty4(as5) ? some(head2(as5)) : none;
      };
      last4 = function(as5) {
        return isNonEmpty4(as5) ? some(last2(as5)) : none;
      };
      tail4 = function(as5) {
        return isNonEmpty4(as5) ? some(tail2(as5)) : none;
      };
      init3 = function(as5) {
        return isNonEmpty4(as5) ? some(init(as5)) : none;
      };
      takeLeft = function(n) {
        return function(as5) {
          return isOutOfBound3(n, as5) ? as5 : n === 0 ? empty2 : as5.slice(0, n);
        };
      };
      takeRight = function(n) {
        return function(as5) {
          return isOutOfBound3(n, as5) ? as5 : n === 0 ? empty2 : as5.slice(-n);
        };
      };
      spanLeftIndex = function(as5, predicate) {
        var l = as5.length;
        var i = 0;
        for (; i < l; i++) {
          if (!predicate(as5[i])) {
            break;
          }
        }
        return i;
      };
      dropLeft = function(n) {
        return function(as5) {
          return n <= 0 || isEmpty(as5) ? as5 : n >= as5.length ? empty2 : as5.slice(n, as5.length);
        };
      };
      dropRight = function(n) {
        return function(as5) {
          return n <= 0 || isEmpty(as5) ? as5 : n >= as5.length ? empty2 : as5.slice(0, as5.length - n);
        };
      };
      findIndex = function(predicate) {
        return function(as5) {
          for (var i = 0; i < as5.length; i++) {
            if (predicate(as5[i])) {
              return some(i);
            }
          }
          return none;
        };
      };
      findFirstMap = function(f5) {
        return function(as5) {
          for (var i = 0; i < as5.length; i++) {
            var out = f5(as5[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastMap = function(f5) {
        return function(as5) {
          for (var i = as5.length - 1; i >= 0; i--) {
            var out = f5(as5[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastIndex = function(predicate) {
        return function(as5) {
          for (var i = as5.length - 1; i >= 0; i--) {
            if (predicate(as5[i])) {
              return some(i);
            }
          }
          return none;
        };
      };
      insertAt2 = function(i, a) {
        return function(as5) {
          return i < 0 || i > as5.length ? none : some(unsafeInsertAt(i, a, as5));
        };
      };
      updateAt2 = function(i, a) {
        return modifyAt2(i, function() {
          return a;
        });
      };
      deleteAt = function(i) {
        return function(as5) {
          return isOutOfBound3(i, as5) ? none : some(unsafeDeleteAt(i, as5));
        };
      };
      modifyAt2 = function(i, f5) {
        return function(as5) {
          return isOutOfBound3(i, as5) ? none : some(unsafeUpdateAt3(i, f5(as5[i]), as5));
        };
      };
      reverse3 = function(as5) {
        return as5.length <= 1 ? as5 : as5.slice().reverse();
      };
      rights = function(as5) {
        var r = [];
        for (var i = 0; i < as5.length; i++) {
          var a = as5[i];
          if (a._tag === "Right") {
            r.push(a.right);
          }
        }
        return r;
      };
      lefts = function(as5) {
        var r = [];
        for (var i = 0; i < as5.length; i++) {
          var a = as5[i];
          if (a._tag === "Left") {
            r.push(a.left);
          }
        }
        return r;
      };
      sort3 = function(O2) {
        return function(as5) {
          return as5.length <= 1 ? as5 : as5.slice().sort(O2.compare);
        };
      };
      zipWith2 = function(fa, fb, f5) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i = 0; i < len; i++) {
          fc[i] = f5(fa[i], fb[i]);
        }
        return fc;
      };
      unzip2 = function(as5) {
        var fa = [];
        var fb = [];
        for (var i = 0; i < as5.length; i++) {
          fa[i] = as5[i][0];
          fb[i] = as5[i][1];
        }
        return [fa, fb];
      };
      prependAll3 = function(middle) {
        var f5 = prependAll(middle);
        return function(as5) {
          return isNonEmpty4(as5) ? f5(as5) : as5;
        };
      };
      intersperse3 = function(middle) {
        var f5 = intersperse(middle);
        return function(as5) {
          return isNonEmpty4(as5) ? f5(as5) : as5;
        };
      };
      rotate3 = function(n) {
        var f5 = rotate(n);
        return function(as5) {
          return isNonEmpty4(as5) ? f5(as5) : as5;
        };
      };
      uniq3 = function(E) {
        var f5 = uniq(E);
        return function(as5) {
          return isNonEmpty4(as5) ? f5(as5) : as5;
        };
      };
      sortBy3 = function(ords) {
        var f5 = sortBy(ords);
        return function(as5) {
          return isNonEmpty4(as5) ? f5(as5) : as5;
        };
      };
      chop3 = function(f5) {
        var g = chop(f5);
        return function(as5) {
          return isNonEmpty4(as5) ? g(as5) : empty2;
        };
      };
      splitAt3 = function(n) {
        return function(as5) {
          return n >= 1 && isNonEmpty4(as5) ? splitAt(n)(as5) : isEmpty(as5) ? [as5, empty2] : [empty2, as5];
        };
      };
      chunksOf3 = function(n) {
        var f5 = chunksOf(n);
        return function(as5) {
          return isNonEmpty4(as5) ? f5(as5) : empty2;
        };
      };
      fromOptionK = function(f5) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return fromOption(f5.apply(void 0, a));
        };
      };
      concatW2 = function(second) {
        return function(first3) {
          return isEmpty(first3) ? second : isEmpty(second) ? first3 : first3.concat(second);
        };
      };
      concat3 = concatW2;
      _map2 = function(fa, f5) {
        return pipe(fa, map3(f5));
      };
      _mapWithIndex2 = function(fa, f5) {
        return pipe(fa, mapWithIndex2(f5));
      };
      _ap2 = function(fab, fa) {
        return pipe(fab, ap3(fa));
      };
      _filter = function(fa, predicate) {
        return pipe(fa, filter2(predicate));
      };
      _filterMap = function(fa, f5) {
        return pipe(fa, filterMap(f5));
      };
      _partition = function(fa, predicate) {
        return pipe(fa, partition(predicate));
      };
      _partitionMap = function(fa, f5) {
        return pipe(fa, partitionMap(f5));
      };
      _partitionWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, partitionWithIndex(predicateWithIndex));
      };
      _partitionMapWithIndex = function(fa, f5) {
        return pipe(fa, partitionMapWithIndex(f5));
      };
      _alt2 = function(fa, that) {
        return pipe(fa, alt2(that));
      };
      _reduce2 = function(fa, b, f5) {
        return pipe(fa, reduce3(b, f5));
      };
      _foldMap2 = function(M) {
        var foldMapM = foldMap3(M);
        return function(fa, f5) {
          return pipe(fa, foldMapM(f5));
        };
      };
      _reduceRight2 = function(fa, b, f5) {
        return pipe(fa, reduceRight3(b, f5));
      };
      _reduceWithIndex2 = function(fa, b, f5) {
        return pipe(fa, reduceWithIndex3(b, f5));
      };
      _foldMapWithIndex2 = function(M) {
        var foldMapWithIndexM = foldMapWithIndex3(M);
        return function(fa, f5) {
          return pipe(fa, foldMapWithIndexM(f5));
        };
      };
      _reduceRightWithIndex2 = function(fa, b, f5) {
        return pipe(fa, reduceRightWithIndex3(b, f5));
      };
      _filterMapWithIndex = function(fa, f5) {
        return pipe(fa, filterMapWithIndex(f5));
      };
      _filterWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, filterWithIndex2(predicateWithIndex));
      };
      _extend2 = function(fa, f5) {
        return pipe(fa, extend2(f5));
      };
      _traverse2 = function(F) {
        var traverseF = traverse2(F);
        return function(ta, f5) {
          return pipe(ta, traverseF(f5));
        };
      };
      _traverseWithIndex2 = function(F) {
        var traverseWithIndexF = traverseWithIndex2(F);
        return function(ta, f5) {
          return pipe(ta, traverseWithIndexF(f5));
        };
      };
      _chainRecDepthFirst = function(a, f5) {
        return pipe(a, chainRecDepthFirst(f5));
      };
      _chainRecBreadthFirst = function(a, f5) {
        return pipe(a, chainRecBreadthFirst(f5));
      };
      of3 = of;
      zero = function() {
        return empty2;
      };
      altW2 = function(that) {
        return function(fa) {
          return fa.concat(that());
        };
      };
      alt2 = altW2;
      ap3 = function(fa) {
        return flatMap2(function(f5) {
          return pipe(fa, map3(f5));
        });
      };
      flatMap2 = /* @__PURE__ */ dual(2, function(ma, f5) {
        return pipe(ma, chainWithIndex2(function(i, a) {
          return f5(a, i);
        }));
      });
      flatten2 = /* @__PURE__ */ flatMap2(identity);
      map3 = function(f5) {
        return function(fa) {
          return fa.map(function(a) {
            return f5(a);
          });
        };
      };
      mapWithIndex2 = function(f5) {
        return function(fa) {
          return fa.map(function(a, i) {
            return f5(i, a);
          });
        };
      };
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
      filter2 = function(predicate) {
        return function(as5) {
          return as5.filter(predicate);
        };
      };
      filterMapWithIndex = function(f5) {
        return function(fa) {
          var out = [];
          for (var i = 0; i < fa.length; i++) {
            var optionB = f5(i, fa[i]);
            if (isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      filterMap = function(f5) {
        return filterMapWithIndex(function(_, a) {
          return f5(a);
        });
      };
      compact = /* @__PURE__ */ filterMap(identity);
      partition = function(predicate) {
        return partitionWithIndex(function(_, a) {
          return predicate(a);
        });
      };
      partitionWithIndex = function(predicateWithIndex) {
        return function(as5) {
          var left = [];
          var right = [];
          for (var i = 0; i < as5.length; i++) {
            var a = as5[i];
            if (predicateWithIndex(i, a)) {
              right.push(a);
            } else {
              left.push(a);
            }
          }
          return separated(left, right);
        };
      };
      partitionMap = function(f5) {
        return partitionMapWithIndex(function(_, a) {
          return f5(a);
        });
      };
      partitionMapWithIndex = function(f5) {
        return function(fa) {
          var left = [];
          var right = [];
          for (var i = 0; i < fa.length; i++) {
            var e = f5(i, fa[i]);
            if (e._tag === "Left") {
              left.push(e.left);
            } else {
              right.push(e.right);
            }
          }
          return separated(left, right);
        };
      };
      filterWithIndex2 = function(predicateWithIndex) {
        return function(as5) {
          return as5.filter(function(a, i) {
            return predicateWithIndex(i, a);
          });
        };
      };
      extend2 = function(f5) {
        return function(wa) {
          return wa.map(function(_, i) {
            return f5(wa.slice(i));
          });
        };
      };
      duplicate2 = /* @__PURE__ */ extend2(identity);
      foldMapWithIndex3 = function(M) {
        return function(f5) {
          return function(fa) {
            return fa.reduce(function(b, a, i) {
              return M.concat(b, f5(i, a));
            }, M.empty);
          };
        };
      };
      reduce3 = function(b, f5) {
        return reduceWithIndex3(b, function(_, b2, a) {
          return f5(b2, a);
        });
      };
      foldMap3 = function(M) {
        var foldMapWithIndexM = foldMapWithIndex3(M);
        return function(f5) {
          return foldMapWithIndexM(function(_, a) {
            return f5(a);
          });
        };
      };
      reduceWithIndex3 = function(b, f5) {
        return function(fa) {
          var len = fa.length;
          var out = b;
          for (var i = 0; i < len; i++) {
            out = f5(i, out, fa[i]);
          }
          return out;
        };
      };
      reduceRight3 = function(b, f5) {
        return reduceRightWithIndex3(b, function(_, a, b2) {
          return f5(a, b2);
        });
      };
      reduceRightWithIndex3 = function(b, f5) {
        return function(fa) {
          return fa.reduceRight(function(b2, a, i) {
            return f5(i, a, b2);
          }, b);
        };
      };
      traverse2 = function(F) {
        var traverseWithIndexF = traverseWithIndex2(F);
        return function(f5) {
          return traverseWithIndexF(function(_, a) {
            return f5(a);
          });
        };
      };
      sequence2 = function(F) {
        return function(ta) {
          return _reduce2(ta, F.of(zero()), function(fas, fa) {
            return F.ap(F.map(fas, function(as5) {
              return function(a) {
                return pipe(as5, append3(a));
              };
            }), fa);
          });
        };
      };
      traverseWithIndex2 = function(F) {
        return function(f5) {
          return reduceWithIndex3(F.of(zero()), function(i, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return pipe(bs, append3(b));
              };
            }), f5(i, a));
          });
        };
      };
      wither = function(F) {
        var _witherF = _wither(F);
        return function(f5) {
          return function(fa) {
            return _witherF(fa, f5);
          };
        };
      };
      wilt = function(F) {
        var _wiltF = _wilt(F);
        return function(f5) {
          return function(fa) {
            return _wiltF(fa, f5);
          };
        };
      };
      unfold = function(b, f5) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f5(bb);
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
      URI2 = "ReadonlyArray";
      getShow3 = function(S) {
        return {
          show: function(as5) {
            return "[".concat(as5.map(S.show).join(", "), "]");
          }
        };
      };
      getSemigroup4 = function() {
        return {
          concat: function(first3, second) {
            return isEmpty(first3) ? second : isEmpty(second) ? first3 : first3.concat(second);
          }
        };
      };
      getMonoid2 = function() {
        return {
          concat: getSemigroup4().concat,
          empty: empty2
        };
      };
      getEq3 = function(E) {
        return fromEquals(function(xs, ys) {
          return xs.length === ys.length && xs.every(function(x, i) {
            return E.equals(x, ys[i]);
          });
        });
      };
      getOrd = function(O2) {
        return fromCompare(function(a, b) {
          var aLen = a.length;
          var bLen = b.length;
          var len = Math.min(aLen, bLen);
          for (var i = 0; i < len; i++) {
            var ordering = O2.compare(a[i], b[i]);
            if (ordering !== 0) {
              return ordering;
            }
          }
          return Ord.compare(aLen, bLen);
        });
      };
      getUnionSemigroup2 = function(E) {
        var unionE = union3(E);
        return {
          concat: function(first3, second) {
            return unionE(second)(first3);
          }
        };
      };
      getUnionMonoid = function(E) {
        return {
          concat: getUnionSemigroup2(E).concat,
          empty: empty2
        };
      };
      getIntersectionSemigroup = function(E) {
        var intersectionE = intersection(E);
        return {
          concat: function(first3, second) {
            return intersectionE(second)(first3);
          }
        };
      };
      getDifferenceMagma = function(E) {
        var differenceE = difference(E);
        return {
          concat: function(first3, second) {
            return differenceE(second)(first3);
          }
        };
      };
      Functor2 = {
        URI: URI2,
        map: _map2
      };
      flap3 = /* @__PURE__ */ flap(Functor2);
      Pointed2 = {
        URI: URI2,
        of: of3
      };
      FunctorWithIndex2 = {
        URI: URI2,
        map: _map2,
        mapWithIndex: _mapWithIndex2
      };
      Apply2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2
      };
      apFirst3 = /* @__PURE__ */ apFirst(Apply2);
      apSecond3 = /* @__PURE__ */ apSecond(Apply2);
      Applicative2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of3
      };
      Chain2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        chain: flatMap2
      };
      Monad2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of3,
        chain: flatMap2
      };
      chainFirst3 = /* @__PURE__ */ chainFirst(Chain2);
      Unfoldable = {
        URI: URI2,
        unfold
      };
      Alt2 = {
        URI: URI2,
        map: _map2,
        alt: _alt2
      };
      Zero = {
        URI: URI2,
        zero
      };
      guard2 = /* @__PURE__ */ guard(Zero, Pointed2);
      Alternative = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of3,
        alt: _alt2,
        zero
      };
      Extend = {
        URI: URI2,
        map: _map2,
        extend: _extend2
      };
      Compactable = {
        URI: URI2,
        compact,
        separate
      };
      Filterable = {
        URI: URI2,
        map: _map2,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      FilterableWithIndex = {
        URI: URI2,
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
      Foldable2 = {
        URI: URI2,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2
      };
      FoldableWithIndex2 = {
        URI: URI2,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2,
        reduceWithIndex: _reduceWithIndex2,
        foldMapWithIndex: _foldMapWithIndex2,
        reduceRightWithIndex: _reduceRightWithIndex2
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
      TraversableWithIndex2 = {
        URI: URI2,
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
      chainRecDepthFirst = function(f5) {
        return function(a) {
          var todo = __spreadArray5([], f5(a), true);
          var out = [];
          while (todo.length > 0) {
            var e = todo.shift();
            if (isLeft(e)) {
              todo.unshift.apply(todo, f5(e.left));
            } else {
              out.push(e.right);
            }
          }
          return out;
        };
      };
      ChainRecDepthFirst = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        chain: flatMap2,
        chainRec: _chainRecDepthFirst
      };
      chainRecBreadthFirst = function(f5) {
        return function(a) {
          var initial = f5(a);
          var todo = [];
          var out = [];
          function go(e2) {
            if (isLeft(e2)) {
              f5(e2.left).forEach(function(v) {
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
      ChainRecBreadthFirst = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        chain: flatMap2,
        chainRec: _chainRecBreadthFirst
      };
      _wither = /* @__PURE__ */ witherDefault(Traversable2, Compactable);
      _wilt = /* @__PURE__ */ wiltDefault(Traversable2, Compactable);
      Witherable = {
        URI: URI2,
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
      filterE2 = /* @__PURE__ */ filterE(Witherable);
      FromEither = {
        URI: URI2,
        fromEither
      };
      fromEitherK2 = /* @__PURE__ */ fromEitherK(FromEither);
      unsafeInsertAt3 = unsafeInsertAt;
      unsafeUpdateAt3 = function(i, a, as5) {
        return isNonEmpty4(as5) ? unsafeUpdateAt(i, a, as5) : as5;
      };
      unsafeDeleteAt = function(i, as5) {
        var xs = as5.slice();
        xs.splice(i, 1);
        return xs;
      };
      toArray = function(as5) {
        return as5.slice();
      };
      fromArray2 = function(as5) {
        return isEmpty(as5) ? empty2 : as5.slice();
      };
      empty2 = empty;
      some2 = function(predicate) {
        return function(as5) {
          return as5.some(predicate);
        };
      };
      exists = some2;
      intercalate3 = function(M) {
        var intercalateM = intercalate(M);
        return function(middle) {
          return match(function() {
            return M.empty;
          }, intercalateM(middle));
        };
      };
      Do2 = /* @__PURE__ */ of3(emptyRecord);
      bindTo3 = /* @__PURE__ */ bindTo(Functor2);
      let_3 = /* @__PURE__ */ let_(Functor2);
      bind3 = /* @__PURE__ */ bind(Chain2);
      apS3 = /* @__PURE__ */ apS(Apply2);
      chain2 = flatMap2;
      range3 = range;
      cons3 = cons;
      snoc3 = snoc;
      prependToAll2 = prependAll3;
      readonlyArray = {
        URI: URI2,
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Array.js
  var Array_exports = {};
  __export(Array_exports, {
    Alt: () => Alt3,
    Alternative: () => Alternative2,
    Applicative: () => Applicative3,
    Apply: () => Apply3,
    Chain: () => Chain3,
    ChainRecBreadthFirst: () => ChainRecBreadthFirst2,
    ChainRecDepthFirst: () => ChainRecDepthFirst2,
    Compactable: () => Compactable2,
    Do: () => Do3,
    Extend: () => Extend2,
    Filterable: () => Filterable2,
    FilterableWithIndex: () => FilterableWithIndex2,
    Foldable: () => Foldable3,
    FoldableWithIndex: () => FoldableWithIndex3,
    FromEither: () => FromEither2,
    Functor: () => Functor3,
    FunctorWithIndex: () => FunctorWithIndex3,
    Monad: () => Monad3,
    Pointed: () => Pointed3,
    Traversable: () => Traversable3,
    TraversableWithIndex: () => TraversableWithIndex3,
    URI: () => URI3,
    Unfoldable: () => Unfoldable2,
    Witherable: () => Witherable2,
    Zero: () => Zero2,
    alt: () => alt3,
    altW: () => altW3,
    ap: () => ap4,
    apFirst: () => apFirst4,
    apS: () => apS4,
    apSecond: () => apSecond4,
    append: () => append4,
    appendW: () => appendW4,
    array: () => array,
    bind: () => bind4,
    bindTo: () => bindTo4,
    chain: () => chain3,
    chainFirst: () => chainFirst4,
    chainRecBreadthFirst: () => chainRecBreadthFirst2,
    chainRecDepthFirst: () => chainRecDepthFirst2,
    chainWithIndex: () => chainWithIndex3,
    chop: () => chop4,
    chunksOf: () => chunksOf4,
    compact: () => compact2,
    comprehension: () => comprehension2,
    concat: () => concat4,
    concatW: () => concatW3,
    cons: () => cons4,
    copy: () => copy2,
    deleteAt: () => deleteAt2,
    difference: () => difference2,
    dropLeft: () => dropLeft2,
    dropLeftWhile: () => dropLeftWhile2,
    dropRight: () => dropRight2,
    duplicate: () => duplicate3,
    elem: () => elem2,
    empty: () => empty3,
    every: () => every2,
    exists: () => exists2,
    extend: () => extend3,
    filter: () => filter3,
    filterE: () => filterE3,
    filterMap: () => filterMap2,
    filterMapWithIndex: () => filterMapWithIndex2,
    filterWithIndex: () => filterWithIndex3,
    findFirst: () => findFirst2,
    findFirstMap: () => findFirstMap2,
    findIndex: () => findIndex2,
    findLast: () => findLast2,
    findLastIndex: () => findLastIndex2,
    findLastMap: () => findLastMap2,
    flap: () => flap4,
    flatMap: () => flatMap3,
    flatten: () => flatten3,
    foldLeft: () => foldLeft2,
    foldMap: () => foldMap4,
    foldMapWithIndex: () => foldMapWithIndex4,
    foldRight: () => foldRight2,
    fromEither: () => fromEither2,
    fromEitherK: () => fromEitherK3,
    fromOption: () => fromOption2,
    fromOptionK: () => fromOptionK2,
    fromPredicate: () => fromPredicate2,
    getDifferenceMagma: () => getDifferenceMagma2,
    getEq: () => getEq4,
    getIntersectionSemigroup: () => getIntersectionSemigroup2,
    getMonoid: () => getMonoid3,
    getOrd: () => getOrd2,
    getSemigroup: () => getSemigroup5,
    getShow: () => getShow4,
    getUnionMonoid: () => getUnionMonoid2,
    getUnionSemigroup: () => getUnionSemigroup3,
    guard: () => guard3,
    head: () => head5,
    init: () => init4,
    insertAt: () => insertAt3,
    intercalate: () => intercalate4,
    intersection: () => intersection2,
    intersperse: () => intersperse4,
    isEmpty: () => isEmpty2,
    isNonEmpty: () => isNonEmpty5,
    isOutOfBound: () => isOutOfBound4,
    last: () => last5,
    lefts: () => lefts2,
    let: () => let_4,
    lookup: () => lookup2,
    makeBy: () => makeBy4,
    map: () => map4,
    mapWithIndex: () => mapWithIndex3,
    match: () => match2,
    matchLeft: () => matchLeft3,
    matchLeftW: () => matchLeftW2,
    matchRight: () => matchRight3,
    matchRightW: () => matchRightW2,
    matchW: () => matchW2,
    modifyAt: () => modifyAt3,
    of: () => of4,
    partition: () => partition2,
    partitionMap: () => partitionMap2,
    partitionMapWithIndex: () => partitionMapWithIndex2,
    partitionWithIndex: () => partitionWithIndex2,
    prepend: () => prepend4,
    prependAll: () => prependAll4,
    prependToAll: () => prependToAll3,
    prependW: () => prependW4,
    range: () => range4,
    reduce: () => reduce4,
    reduceRight: () => reduceRight4,
    reduceRightWithIndex: () => reduceRightWithIndex4,
    reduceWithIndex: () => reduceWithIndex4,
    replicate: () => replicate3,
    reverse: () => reverse4,
    rights: () => rights2,
    rotate: () => rotate4,
    scanLeft: () => scanLeft2,
    scanRight: () => scanRight2,
    separate: () => separate2,
    sequence: () => sequence3,
    size: () => size2,
    snoc: () => snoc4,
    some: () => some3,
    sort: () => sort4,
    sortBy: () => sortBy4,
    spanLeft: () => spanLeft2,
    splitAt: () => splitAt4,
    tail: () => tail5,
    takeLeft: () => takeLeft2,
    takeLeftWhile: () => takeLeftWhile2,
    takeRight: () => takeRight2,
    traverse: () => traverse3,
    traverseWithIndex: () => traverseWithIndex3,
    unfold: () => unfold2,
    union: () => union4,
    uniq: () => uniq4,
    unsafeDeleteAt: () => unsafeDeleteAt2,
    unsafeInsertAt: () => unsafeInsertAt4,
    unsafeUpdateAt: () => unsafeUpdateAt4,
    unzip: () => unzip3,
    updateAt: () => updateAt3,
    wilt: () => wilt2,
    wither: () => wither2,
    zero: () => zero2,
    zip: () => zip3,
    zipWith: () => zipWith3
  });
  function fromPredicate2(predicate) {
    return function(a) {
      return predicate(a) ? [a] : [];
    };
  }
  function takeLeftWhile2(predicate) {
    return function(as5) {
      var out = [];
      for (var _i = 0, as_1 = as5; _i < as_1.length; _i++) {
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
    return function(as5) {
      var _a = splitAt4(spanLeftIndex2(as5, predicate))(as5), init5 = _a[0], rest = _a[1];
      return { init: init5, rest };
    };
  }
  function dropLeftWhile2(predicate) {
    return function(as5) {
      return as5.slice(spanLeftIndex2(as5, predicate));
    };
  }
  function findFirst2(predicate) {
    return findFirst(predicate);
  }
  function findLast2(predicate) {
    return findLast(predicate);
  }
  function zip3(as5, bs) {
    if (bs === void 0) {
      return function(bs2) {
        return zip3(bs2, as5);
      };
    }
    return zipWith3(as5, bs, function(a, b) {
      return [a, b];
    });
  }
  function comprehension2(input, f5, g) {
    if (g === void 0) {
      g = function() {
        return true;
      };
    }
    var go = function(scope, input2) {
      return isNonEmpty5(input2) ? flatMap3(head3(input2), function(a) {
        return go(pipe(scope, append4(a)), tail3(input2));
      }) : g.apply(void 0, scope) ? [f5.apply(void 0, scope)] : [];
    };
    return go([], input);
  }
  function union4(E) {
    var unionE = union2(E);
    return function(first3, second) {
      if (second === void 0) {
        var unionE_1 = union4(E);
        return function(second2) {
          return unionE_1(second2, first3);
        };
      }
      return isNonEmpty5(first3) && isNonEmpty5(second) ? unionE(second)(first3) : isNonEmpty5(first3) ? copy2(first3) : copy2(second);
    };
  }
  function intersection2(E) {
    var elemE = elem2(E);
    return function(xs, ys) {
      if (ys === void 0) {
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
      if (ys === void 0) {
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
  var isEmpty2, isNonEmpty5, prepend4, prependW4, append4, appendW4, makeBy4, replicate3, fromOption2, fromEither2, matchW2, match2, matchLeftW2, matchLeft3, foldLeft2, matchRightW2, matchRight3, foldRight2, chainWithIndex3, scanLeft2, scanRight2, size2, isOutOfBound4, lookup2, head5, last5, tail5, init4, takeLeft2, takeRight2, spanLeftIndex2, dropLeft2, dropRight2, findIndex2, findFirstMap2, findLastMap2, findLastIndex2, copy2, insertAt3, updateAt3, deleteAt2, modifyAt3, reverse4, rights2, lefts2, sort4, zipWith3, unzip3, prependAll4, intersperse4, rotate4, elem2, uniq4, sortBy4, chop4, splitAt4, chunksOf4, fromOptionK2, concatW3, concat4, _map3, _mapWithIndex3, _ap3, _filter2, _filterMap2, _partition2, _partitionMap2, _partitionWithIndex2, _partitionMapWithIndex2, _alt3, _reduce3, _foldMap3, _reduceRight3, _reduceWithIndex3, _foldMapWithIndex3, _reduceRightWithIndex3, _filterMapWithIndex2, _filterWithIndex2, _extend3, _traverse3, _traverseWithIndex3, _chainRecDepthFirst2, _chainRecBreadthFirst2, of4, zero2, map4, ap4, flatMap3, flatten3, mapWithIndex3, filterMapWithIndex2, filterMap2, compact2, separate2, filter3, partition2, partitionWithIndex2, partitionMap2, partitionMapWithIndex2, altW3, alt3, filterWithIndex3, extend3, duplicate3, foldMap4, foldMapWithIndex4, reduce4, reduceWithIndex4, reduceRight4, reduceRightWithIndex4, traverse3, sequence3, traverseWithIndex3, wither2, wilt2, unfold2, URI3, getShow4, getSemigroup5, getMonoid3, getEq4, getOrd2, getUnionSemigroup3, getUnionMonoid2, getIntersectionSemigroup2, getDifferenceMagma2, Functor3, flap4, Pointed3, FunctorWithIndex3, Apply3, apFirst4, apSecond4, Applicative3, Chain3, chainFirst4, Monad3, Unfoldable2, Alt3, Zero2, guard3, Alternative2, Extend2, Compactable2, Filterable2, FilterableWithIndex2, Foldable3, FoldableWithIndex3, Traversable3, TraversableWithIndex3, _wither2, _wilt2, Witherable2, chainRecDepthFirst2, ChainRecDepthFirst2, chainRecBreadthFirst2, ChainRecBreadthFirst2, filterE3, FromEither2, fromEitherK3, unsafeInsertAt4, unsafeUpdateAt4, unsafeDeleteAt2, every2, some3, exists2, intercalate4, Do3, bindTo4, let_4, bind4, apS4, chain3, range4, empty3, cons4, snoc4, prependToAll3, array;
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
      isEmpty2 = function(as5) {
        return as5.length === 0;
      };
      isNonEmpty5 = isNonEmpty3;
      prepend4 = prepend2;
      prependW4 = prependW2;
      append4 = append2;
      appendW4 = appendW2;
      makeBy4 = function(n, f5) {
        return n <= 0 ? [] : makeBy2(f5)(n);
      };
      replicate3 = function(n, a) {
        return makeBy4(n, function() {
          return a;
        });
      };
      fromOption2 = function(ma) {
        return isNone(ma) ? [] : [ma.value];
      };
      fromEither2 = function(e) {
        return isLeft(e) ? [] : [e.right];
      };
      matchW2 = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return isNonEmpty5(as5) ? onNonEmpty(as5) : onEmpty();
        };
      };
      match2 = matchW2;
      matchLeftW2 = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return isNonEmpty5(as5) ? onNonEmpty(head3(as5), tail3(as5)) : onEmpty();
        };
      };
      matchLeft3 = matchLeftW2;
      foldLeft2 = matchLeft3;
      matchRightW2 = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return isNonEmpty5(as5) ? onNonEmpty(init2(as5), last3(as5)) : onEmpty();
        };
      };
      matchRight3 = matchRightW2;
      foldRight2 = matchRight3;
      chainWithIndex3 = function(f5) {
        return function(as5) {
          var out = [];
          for (var i = 0; i < as5.length; i++) {
            out.push.apply(out, f5(i, as5[i]));
          }
          return out;
        };
      };
      scanLeft2 = function(b, f5) {
        return function(as5) {
          var len = as5.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i = 0; i < len; i++) {
            out[i + 1] = f5(out[i], as5[i]);
          }
          return out;
        };
      };
      scanRight2 = function(b, f5) {
        return function(as5) {
          var len = as5.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i = len - 1; i >= 0; i--) {
            out[i] = f5(as5[i], out[i + 1]);
          }
          return out;
        };
      };
      size2 = function(as5) {
        return as5.length;
      };
      isOutOfBound4 = isOutOfBound2;
      lookup2 = lookup;
      head5 = head4;
      last5 = last4;
      tail5 = function(as5) {
        return isNonEmpty5(as5) ? some(tail3(as5)) : none;
      };
      init4 = function(as5) {
        return isNonEmpty5(as5) ? some(init2(as5)) : none;
      };
      takeLeft2 = function(n) {
        return function(as5) {
          return isOutOfBound4(n, as5) ? copy2(as5) : as5.slice(0, n);
        };
      };
      takeRight2 = function(n) {
        return function(as5) {
          return isOutOfBound4(n, as5) ? copy2(as5) : n === 0 ? [] : as5.slice(-n);
        };
      };
      spanLeftIndex2 = function(as5, predicate) {
        var l = as5.length;
        var i = 0;
        for (; i < l; i++) {
          if (!predicate(as5[i])) {
            break;
          }
        }
        return i;
      };
      dropLeft2 = function(n) {
        return function(as5) {
          return n <= 0 || isEmpty2(as5) ? copy2(as5) : n >= as5.length ? [] : as5.slice(n, as5.length);
        };
      };
      dropRight2 = function(n) {
        return function(as5) {
          return n <= 0 || isEmpty2(as5) ? copy2(as5) : n >= as5.length ? [] : as5.slice(0, as5.length - n);
        };
      };
      findIndex2 = findIndex;
      findFirstMap2 = findFirstMap;
      findLastMap2 = findLastMap;
      findLastIndex2 = findLastIndex;
      copy2 = function(as5) {
        return as5.slice();
      };
      insertAt3 = function(i, a) {
        return function(as5) {
          return i < 0 || i > as5.length ? none : some(unsafeInsertAt4(i, a, as5));
        };
      };
      updateAt3 = function(i, a) {
        return modifyAt3(i, function() {
          return a;
        });
      };
      deleteAt2 = function(i) {
        return function(as5) {
          return isOutOfBound4(i, as5) ? none : some(unsafeDeleteAt2(i, as5));
        };
      };
      modifyAt3 = function(i, f5) {
        return function(as5) {
          return isOutOfBound4(i, as5) ? none : some(unsafeUpdateAt4(i, f5(as5[i]), as5));
        };
      };
      reverse4 = function(as5) {
        return isEmpty2(as5) ? [] : as5.slice().reverse();
      };
      rights2 = function(as5) {
        var r = [];
        for (var i = 0; i < as5.length; i++) {
          var a = as5[i];
          if (a._tag === "Right") {
            r.push(a.right);
          }
        }
        return r;
      };
      lefts2 = function(as5) {
        var r = [];
        for (var i = 0; i < as5.length; i++) {
          var a = as5[i];
          if (a._tag === "Left") {
            r.push(a.left);
          }
        }
        return r;
      };
      sort4 = function(O2) {
        return function(as5) {
          return as5.length <= 1 ? copy2(as5) : as5.slice().sort(O2.compare);
        };
      };
      zipWith3 = function(fa, fb, f5) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i = 0; i < len; i++) {
          fc[i] = f5(fa[i], fb[i]);
        }
        return fc;
      };
      unzip3 = function(as5) {
        var fa = [];
        var fb = [];
        for (var i = 0; i < as5.length; i++) {
          fa[i] = as5[i][0];
          fb[i] = as5[i][1];
        }
        return [fa, fb];
      };
      prependAll4 = function(middle) {
        var f5 = prependAll2(middle);
        return function(as5) {
          return isNonEmpty5(as5) ? f5(as5) : [];
        };
      };
      intersperse4 = function(middle) {
        var f5 = intersperse2(middle);
        return function(as5) {
          return isNonEmpty5(as5) ? f5(as5) : copy2(as5);
        };
      };
      rotate4 = function(n) {
        var f5 = rotate2(n);
        return function(as5) {
          return isNonEmpty5(as5) ? f5(as5) : copy2(as5);
        };
      };
      elem2 = elem;
      uniq4 = function(E) {
        var f5 = uniq2(E);
        return function(as5) {
          return isNonEmpty5(as5) ? f5(as5) : copy2(as5);
        };
      };
      sortBy4 = function(ords) {
        var f5 = sortBy2(ords);
        return function(as5) {
          return isNonEmpty5(as5) ? f5(as5) : copy2(as5);
        };
      };
      chop4 = function(f5) {
        var g = chop2(f5);
        return function(as5) {
          return isNonEmpty5(as5) ? g(as5) : [];
        };
      };
      splitAt4 = function(n) {
        return function(as5) {
          return n >= 1 && isNonEmpty5(as5) ? splitAt2(n)(as5) : isEmpty2(as5) ? [copy2(as5), []] : [[], copy2(as5)];
        };
      };
      chunksOf4 = function(n) {
        var f5 = chunksOf2(n);
        return function(as5) {
          return isNonEmpty5(as5) ? f5(as5) : [];
        };
      };
      fromOptionK2 = function(f5) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return fromOption2(f5.apply(void 0, a));
        };
      };
      concatW3 = function(second) {
        return function(first3) {
          return isEmpty2(first3) ? copy2(second) : isEmpty2(second) ? copy2(first3) : first3.concat(second);
        };
      };
      concat4 = concatW3;
      _map3 = function(fa, f5) {
        return pipe(fa, map4(f5));
      };
      _mapWithIndex3 = function(fa, f5) {
        return pipe(fa, mapWithIndex3(f5));
      };
      _ap3 = function(fab, fa) {
        return pipe(fab, ap4(fa));
      };
      _filter2 = function(fa, predicate) {
        return pipe(fa, filter3(predicate));
      };
      _filterMap2 = function(fa, f5) {
        return pipe(fa, filterMap2(f5));
      };
      _partition2 = function(fa, predicate) {
        return pipe(fa, partition2(predicate));
      };
      _partitionMap2 = function(fa, f5) {
        return pipe(fa, partitionMap2(f5));
      };
      _partitionWithIndex2 = function(fa, predicateWithIndex) {
        return pipe(fa, partitionWithIndex2(predicateWithIndex));
      };
      _partitionMapWithIndex2 = function(fa, f5) {
        return pipe(fa, partitionMapWithIndex2(f5));
      };
      _alt3 = function(fa, that) {
        return pipe(fa, alt3(that));
      };
      _reduce3 = function(fa, b, f5) {
        return pipe(fa, reduce4(b, f5));
      };
      _foldMap3 = function(M) {
        var foldMapM = foldMap4(M);
        return function(fa, f5) {
          return pipe(fa, foldMapM(f5));
        };
      };
      _reduceRight3 = function(fa, b, f5) {
        return pipe(fa, reduceRight4(b, f5));
      };
      _reduceWithIndex3 = function(fa, b, f5) {
        return pipe(fa, reduceWithIndex4(b, f5));
      };
      _foldMapWithIndex3 = function(M) {
        var foldMapWithIndexM = foldMapWithIndex4(M);
        return function(fa, f5) {
          return pipe(fa, foldMapWithIndexM(f5));
        };
      };
      _reduceRightWithIndex3 = function(fa, b, f5) {
        return pipe(fa, reduceRightWithIndex4(b, f5));
      };
      _filterMapWithIndex2 = function(fa, f5) {
        return pipe(fa, filterMapWithIndex2(f5));
      };
      _filterWithIndex2 = function(fa, predicateWithIndex) {
        return pipe(fa, filterWithIndex3(predicateWithIndex));
      };
      _extend3 = function(fa, f5) {
        return pipe(fa, extend3(f5));
      };
      _traverse3 = function(F) {
        var traverseF = traverse3(F);
        return function(ta, f5) {
          return pipe(ta, traverseF(f5));
        };
      };
      _traverseWithIndex3 = function(F) {
        var traverseWithIndexF = traverseWithIndex3(F);
        return function(ta, f5) {
          return pipe(ta, traverseWithIndexF(f5));
        };
      };
      _chainRecDepthFirst2 = _chainRecDepthFirst;
      _chainRecBreadthFirst2 = _chainRecBreadthFirst;
      of4 = of2;
      zero2 = function() {
        return [];
      };
      map4 = function(f5) {
        return function(fa) {
          return fa.map(function(a) {
            return f5(a);
          });
        };
      };
      ap4 = function(fa) {
        return flatMap3(function(f5) {
          return pipe(fa, map4(f5));
        });
      };
      flatMap3 = /* @__PURE__ */ dual(2, function(ma, f5) {
        return pipe(ma, chainWithIndex3(function(i, a) {
          return f5(a, i);
        }));
      });
      flatten3 = /* @__PURE__ */ flatMap3(identity);
      mapWithIndex3 = function(f5) {
        return function(fa) {
          return fa.map(function(a, i) {
            return f5(i, a);
          });
        };
      };
      filterMapWithIndex2 = function(f5) {
        return function(fa) {
          var out = [];
          for (var i = 0; i < fa.length; i++) {
            var optionB = f5(i, fa[i]);
            if (isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      filterMap2 = function(f5) {
        return filterMapWithIndex2(function(_, a) {
          return f5(a);
        });
      };
      compact2 = /* @__PURE__ */ filterMap2(identity);
      separate2 = function(fa) {
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
      filter3 = function(predicate) {
        return function(as5) {
          return as5.filter(predicate);
        };
      };
      partition2 = function(predicate) {
        return partitionWithIndex2(function(_, a) {
          return predicate(a);
        });
      };
      partitionWithIndex2 = function(predicateWithIndex) {
        return function(as5) {
          var left = [];
          var right = [];
          for (var i = 0; i < as5.length; i++) {
            var b = as5[i];
            if (predicateWithIndex(i, b)) {
              right.push(b);
            } else {
              left.push(b);
            }
          }
          return separated(left, right);
        };
      };
      partitionMap2 = function(f5) {
        return partitionMapWithIndex2(function(_, a) {
          return f5(a);
        });
      };
      partitionMapWithIndex2 = function(f5) {
        return function(fa) {
          var left = [];
          var right = [];
          for (var i = 0; i < fa.length; i++) {
            var e = f5(i, fa[i]);
            if (e._tag === "Left") {
              left.push(e.left);
            } else {
              right.push(e.right);
            }
          }
          return separated(left, right);
        };
      };
      altW3 = function(that) {
        return function(fa) {
          return fa.concat(that());
        };
      };
      alt3 = altW3;
      filterWithIndex3 = function(predicateWithIndex) {
        return function(as5) {
          return as5.filter(function(b, i) {
            return predicateWithIndex(i, b);
          });
        };
      };
      extend3 = function(f5) {
        return function(wa) {
          return wa.map(function(_, i) {
            return f5(wa.slice(i));
          });
        };
      };
      duplicate3 = /* @__PURE__ */ extend3(identity);
      foldMap4 = foldMap3;
      foldMapWithIndex4 = foldMapWithIndex3;
      reduce4 = reduce3;
      reduceWithIndex4 = reduceWithIndex3;
      reduceRight4 = reduceRight3;
      reduceRightWithIndex4 = reduceRightWithIndex3;
      traverse3 = function(F) {
        var traverseWithIndexF = traverseWithIndex3(F);
        return function(f5) {
          return traverseWithIndexF(function(_, a) {
            return f5(a);
          });
        };
      };
      sequence3 = function(F) {
        return function(ta) {
          return _reduce3(ta, F.of(zero2()), function(fas, fa) {
            return F.ap(F.map(fas, function(as5) {
              return function(a) {
                return pipe(as5, append4(a));
              };
            }), fa);
          });
        };
      };
      traverseWithIndex3 = function(F) {
        return function(f5) {
          return reduceWithIndex4(F.of(zero2()), function(i, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return pipe(bs, append4(b));
              };
            }), f5(i, a));
          });
        };
      };
      wither2 = function(F) {
        var _witherF = _wither2(F);
        return function(f5) {
          return function(fa) {
            return _witherF(fa, f5);
          };
        };
      };
      wilt2 = function(F) {
        var _wiltF = _wilt2(F);
        return function(f5) {
          return function(fa) {
            return _wiltF(fa, f5);
          };
        };
      };
      unfold2 = function(b, f5) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f5(bb);
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
      URI3 = "Array";
      getShow4 = getShow3;
      getSemigroup5 = function() {
        return {
          concat: function(first3, second) {
            return first3.concat(second);
          }
        };
      };
      getMonoid3 = function() {
        return {
          concat: getSemigroup5().concat,
          empty: []
        };
      };
      getEq4 = getEq3;
      getOrd2 = getOrd;
      getUnionSemigroup3 = function(E) {
        var unionE = union4(E);
        return {
          concat: function(first3, second) {
            return unionE(second)(first3);
          }
        };
      };
      getUnionMonoid2 = function(E) {
        return {
          concat: getUnionSemigroup3(E).concat,
          empty: []
        };
      };
      getIntersectionSemigroup2 = function(E) {
        var intersectionE = intersection2(E);
        return {
          concat: function(first3, second) {
            return intersectionE(second)(first3);
          }
        };
      };
      getDifferenceMagma2 = function(E) {
        var differenceE = difference2(E);
        return {
          concat: function(first3, second) {
            return differenceE(second)(first3);
          }
        };
      };
      Functor3 = {
        URI: URI3,
        map: _map3
      };
      flap4 = /* @__PURE__ */ flap(Functor3);
      Pointed3 = {
        URI: URI3,
        of: of4
      };
      FunctorWithIndex3 = {
        URI: URI3,
        map: _map3,
        mapWithIndex: _mapWithIndex3
      };
      Apply3 = {
        URI: URI3,
        map: _map3,
        ap: _ap3
      };
      apFirst4 = /* @__PURE__ */ apFirst(Apply3);
      apSecond4 = /* @__PURE__ */ apSecond(Apply3);
      Applicative3 = {
        URI: URI3,
        map: _map3,
        ap: _ap3,
        of: of4
      };
      Chain3 = {
        URI: URI3,
        map: _map3,
        ap: _ap3,
        chain: flatMap3
      };
      chainFirst4 = /* @__PURE__ */ chainFirst(Chain3);
      Monad3 = {
        URI: URI3,
        map: _map3,
        ap: _ap3,
        of: of4,
        chain: flatMap3
      };
      Unfoldable2 = {
        URI: URI3,
        unfold: unfold2
      };
      Alt3 = {
        URI: URI3,
        map: _map3,
        alt: _alt3
      };
      Zero2 = {
        URI: URI3,
        zero: zero2
      };
      guard3 = /* @__PURE__ */ guard(Zero2, Pointed3);
      Alternative2 = {
        URI: URI3,
        map: _map3,
        ap: _ap3,
        of: of4,
        alt: _alt3,
        zero: zero2
      };
      Extend2 = {
        URI: URI3,
        map: _map3,
        extend: _extend3
      };
      Compactable2 = {
        URI: URI3,
        compact: compact2,
        separate: separate2
      };
      Filterable2 = {
        URI: URI3,
        map: _map3,
        compact: compact2,
        separate: separate2,
        filter: _filter2,
        filterMap: _filterMap2,
        partition: _partition2,
        partitionMap: _partitionMap2
      };
      FilterableWithIndex2 = {
        URI: URI3,
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
      Foldable3 = {
        URI: URI3,
        reduce: _reduce3,
        foldMap: _foldMap3,
        reduceRight: _reduceRight3
      };
      FoldableWithIndex3 = {
        URI: URI3,
        reduce: _reduce3,
        foldMap: _foldMap3,
        reduceRight: _reduceRight3,
        reduceWithIndex: _reduceWithIndex3,
        foldMapWithIndex: _foldMapWithIndex3,
        reduceRightWithIndex: _reduceRightWithIndex3
      };
      Traversable3 = {
        URI: URI3,
        map: _map3,
        reduce: _reduce3,
        foldMap: _foldMap3,
        reduceRight: _reduceRight3,
        traverse: _traverse3,
        sequence: sequence3
      };
      TraversableWithIndex3 = {
        URI: URI3,
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
      _wither2 = /* @__PURE__ */ witherDefault(Traversable3, Compactable2);
      _wilt2 = /* @__PURE__ */ wiltDefault(Traversable3, Compactable2);
      Witherable2 = {
        URI: URI3,
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
      chainRecDepthFirst2 = chainRecDepthFirst;
      ChainRecDepthFirst2 = {
        URI: URI3,
        map: _map3,
        ap: _ap3,
        chain: flatMap3,
        chainRec: _chainRecDepthFirst2
      };
      chainRecBreadthFirst2 = chainRecBreadthFirst;
      ChainRecBreadthFirst2 = {
        URI: URI3,
        map: _map3,
        ap: _ap3,
        chain: flatMap3,
        chainRec: _chainRecBreadthFirst2
      };
      filterE3 = /* @__PURE__ */ filterE(Witherable2);
      FromEither2 = {
        URI: URI3,
        fromEither: fromEither2
      };
      fromEitherK3 = /* @__PURE__ */ fromEitherK(FromEither2);
      unsafeInsertAt4 = unsafeInsertAt2;
      unsafeUpdateAt4 = function(i, a, as5) {
        return isNonEmpty5(as5) ? unsafeUpdateAt2(i, a, as5) : [];
      };
      unsafeDeleteAt2 = function(i, as5) {
        var xs = as5.slice();
        xs.splice(i, 1);
        return xs;
      };
      every2 = every;
      some3 = function(predicate) {
        return function(as5) {
          return as5.some(predicate);
        };
      };
      exists2 = some3;
      intercalate4 = intercalate3;
      Do3 = /* @__PURE__ */ of4(emptyRecord);
      bindTo4 = /* @__PURE__ */ bindTo(Functor3);
      let_4 = /* @__PURE__ */ let_(Functor3);
      bind4 = /* @__PURE__ */ bind(Chain3);
      apS4 = /* @__PURE__ */ apS(Apply3);
      chain3 = flatMap3;
      range4 = range2;
      empty3 = [];
      cons4 = cons2;
      snoc4 = snoc2;
      prependToAll3 = prependAll4;
      array = {
        URI: URI3,
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
    Alt: () => Alt4,
    Alternative: () => Alternative3,
    ApT: () => ApT,
    Applicative: () => Applicative4,
    Apply: () => Apply4,
    Chain: () => Chain4,
    Compactable: () => Compactable3,
    Do: () => Do4,
    Extend: () => Extend3,
    Filterable: () => Filterable3,
    Foldable: () => Foldable4,
    FromEither: () => FromEither3,
    Functor: () => Functor4,
    Monad: () => Monad4,
    MonadThrow: () => MonadThrow,
    Pointed: () => Pointed4,
    Traversable: () => Traversable4,
    URI: () => URI4,
    Witherable: () => Witherable3,
    Zero: () => Zero3,
    alt: () => alt4,
    altW: () => altW4,
    ap: () => ap5,
    apFirst: () => apFirst5,
    apS: () => apS5,
    apSecond: () => apSecond5,
    as: () => as2,
    asUnit: () => asUnit2,
    bind: () => bind5,
    bindTo: () => bindTo5,
    chain: () => chain4,
    chainEitherK: () => chainEitherK2,
    chainFirst: () => chainFirst5,
    chainFirstEitherK: () => chainFirstEitherK,
    chainNullableK: () => chainNullableK,
    compact: () => compact3,
    duplicate: () => duplicate4,
    elem: () => elem3,
    exists: () => exists3,
    extend: () => extend4,
    filter: () => filter4,
    filterMap: () => filterMap3,
    flap: () => flap5,
    flatMap: () => flatMap4,
    flatten: () => flatten4,
    fold: () => fold2,
    foldMap: () => foldMap5,
    foldW: () => foldW,
    fromEither: () => fromEither3,
    fromEitherK: () => fromEitherK4,
    fromNullable: () => fromNullable,
    fromNullableK: () => fromNullableK,
    fromPredicate: () => fromPredicate3,
    getApplyMonoid: () => getApplyMonoid,
    getApplySemigroup: () => getApplySemigroup2,
    getEq: () => getEq5,
    getFirstMonoid: () => getFirstMonoid,
    getLastMonoid: () => getLastMonoid,
    getLeft: () => getLeft,
    getMonoid: () => getMonoid4,
    getOrElse: () => getOrElse,
    getOrElseW: () => getOrElseW,
    getOrd: () => getOrd3,
    getRefinement: () => getRefinement,
    getRight: () => getRight,
    getShow: () => getShow5,
    guard: () => guard4,
    isNone: () => isNone2,
    isSome: () => isSome2,
    let: () => let_5,
    map: () => map5,
    mapNullable: () => mapNullable,
    match: () => match3,
    matchW: () => matchW3,
    none: () => none2,
    of: () => of5,
    option: () => option,
    orElse: () => orElse,
    partition: () => partition3,
    partitionMap: () => partitionMap3,
    reduce: () => reduce5,
    reduceRight: () => reduceRight5,
    separate: () => separate3,
    sequence: () => sequence4,
    sequenceArray: () => sequenceArray,
    some: () => some4,
    tap: () => tap2,
    tapEither: () => tapEither2,
    throwError: () => throwError,
    toNullable: () => toNullable,
    toUndefined: () => toUndefined,
    traverse: () => traverse4,
    traverseArray: () => traverseArray,
    traverseArrayWithIndex: () => traverseArrayWithIndex,
    traverseReadonlyArrayWithIndex: () => traverseReadonlyArrayWithIndex,
    traverseReadonlyNonEmptyArrayWithIndex: () => traverseReadonlyNonEmptyArrayWithIndex,
    tryCatch: () => tryCatch,
    tryCatchK: () => tryCatchK,
    wilt: () => wilt3,
    wither: () => wither3,
    zero: () => zero3
  });
  function fromPredicate3(predicate) {
    return function(a) {
      return predicate(a) ? some4(a) : none2;
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
  var none2, some4, getLeft, getRight, _map4, _ap4, _reduce4, _foldMap4, _reduceRight4, _traverse4, _alt4, _filter3, _filterMap3, _extend4, _partition3, _partitionMap3, URI4, getShow5, getEq5, getOrd3, getMonoid4, map5, Functor4, as2, asUnit2, of5, Pointed4, ap5, Apply4, Applicative4, flatMap4, Chain4, Monad4, reduce5, foldMap5, reduceRight5, Foldable4, orElse, altW4, alt4, Alt4, zero3, Zero3, guard4, Alternative3, extend4, Extend3, compact3, defaultSeparated, separate3, Compactable3, filter4, filterMap3, partition3, partitionMap3, Filterable3, traverse4, sequence4, Traversable4, _wither3, _wilt3, wither3, wilt3, Witherable3, throwError, MonadThrow, fromEither3, FromEither3, isSome2, isNone2, matchW3, foldW, match3, fold2, getOrElseW, getOrElse, flap5, apFirst5, apSecond5, flatten4, tap2, tapEither2, duplicate4, fromEitherK4, chainEitherK2, chainFirstEitherK, fromNullable, tryCatch, tryCatchK, fromNullableK, chainNullableK, toNullable, toUndefined, exists3, Do4, bindTo5, let_5, bind5, apS5, ApT, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyArrayWithIndex, traverseArrayWithIndex, traverseArray, sequenceArray, chain4, chainFirst5, mapNullable, option, getApplySemigroup2, getApplyMonoid, getFirstMonoid, getLastMonoid;
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
      some4 = some;
      getLeft = function(ma) {
        return ma._tag === "Right" ? none2 : some4(ma.left);
      };
      getRight = function(ma) {
        return ma._tag === "Left" ? none2 : some4(ma.right);
      };
      _map4 = function(fa, f5) {
        return pipe(fa, map5(f5));
      };
      _ap4 = function(fab, fa) {
        return pipe(fab, ap5(fa));
      };
      _reduce4 = function(fa, b, f5) {
        return pipe(fa, reduce5(b, f5));
      };
      _foldMap4 = function(M) {
        var foldMapM = foldMap5(M);
        return function(fa, f5) {
          return pipe(fa, foldMapM(f5));
        };
      };
      _reduceRight4 = function(fa, b, f5) {
        return pipe(fa, reduceRight5(b, f5));
      };
      _traverse4 = function(F) {
        var traverseF = traverse4(F);
        return function(ta, f5) {
          return pipe(ta, traverseF(f5));
        };
      };
      _alt4 = function(fa, that) {
        return pipe(fa, alt4(that));
      };
      _filter3 = function(fa, predicate) {
        return pipe(fa, filter4(predicate));
      };
      _filterMap3 = function(fa, f5) {
        return pipe(fa, filterMap3(f5));
      };
      _extend4 = function(wa, f5) {
        return pipe(wa, extend4(f5));
      };
      _partition3 = function(fa, predicate) {
        return pipe(fa, partition3(predicate));
      };
      _partitionMap3 = function(fa, f5) {
        return pipe(fa, partitionMap3(f5));
      };
      URI4 = "Option";
      getShow5 = function(S) {
        return {
          show: function(ma) {
            return isNone2(ma) ? "none" : "some(".concat(S.show(ma.value), ")");
          }
        };
      };
      getEq5 = function(E) {
        return {
          equals: function(x, y) {
            return x === y || (isNone2(x) ? isNone2(y) : isNone2(y) ? false : E.equals(x.value, y.value));
          }
        };
      };
      getOrd3 = function(O2) {
        return {
          equals: getEq5(O2).equals,
          compare: function(x, y) {
            return x === y ? 0 : isSome2(x) ? isSome2(y) ? O2.compare(x.value, y.value) : 1 : -1;
          }
        };
      };
      getMonoid4 = function(S) {
        return {
          concat: function(x, y) {
            return isNone2(x) ? y : isNone2(y) ? x : some4(S.concat(x.value, y.value));
          },
          empty: none2
        };
      };
      map5 = function(f5) {
        return function(fa) {
          return isNone2(fa) ? none2 : some4(f5(fa.value));
        };
      };
      Functor4 = {
        URI: URI4,
        map: _map4
      };
      as2 = dual(2, as(Functor4));
      asUnit2 = asUnit(Functor4);
      of5 = some4;
      Pointed4 = {
        URI: URI4,
        of: of5
      };
      ap5 = function(fa) {
        return function(fab) {
          return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some4(fab.value(fa.value));
        };
      };
      Apply4 = {
        URI: URI4,
        map: _map4,
        ap: _ap4
      };
      Applicative4 = {
        URI: URI4,
        map: _map4,
        ap: _ap4,
        of: of5
      };
      flatMap4 = /* @__PURE__ */ dual(2, function(ma, f5) {
        return isNone2(ma) ? none2 : f5(ma.value);
      });
      Chain4 = {
        URI: URI4,
        map: _map4,
        ap: _ap4,
        chain: flatMap4
      };
      Monad4 = {
        URI: URI4,
        map: _map4,
        ap: _ap4,
        of: of5,
        chain: flatMap4
      };
      reduce5 = function(b, f5) {
        return function(fa) {
          return isNone2(fa) ? b : f5(b, fa.value);
        };
      };
      foldMap5 = function(M) {
        return function(f5) {
          return function(fa) {
            return isNone2(fa) ? M.empty : f5(fa.value);
          };
        };
      };
      reduceRight5 = function(b, f5) {
        return function(fa) {
          return isNone2(fa) ? b : f5(fa.value, b);
        };
      };
      Foldable4 = {
        URI: URI4,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4
      };
      orElse = dual(2, function(self, that) {
        return isNone2(self) ? that() : self;
      });
      altW4 = orElse;
      alt4 = orElse;
      Alt4 = {
        URI: URI4,
        map: _map4,
        alt: _alt4
      };
      zero3 = function() {
        return none2;
      };
      Zero3 = {
        URI: URI4,
        zero: zero3
      };
      guard4 = /* @__PURE__ */ guard(Zero3, Pointed4);
      Alternative3 = {
        URI: URI4,
        map: _map4,
        ap: _ap4,
        of: of5,
        alt: _alt4,
        zero: zero3
      };
      extend4 = function(f5) {
        return function(wa) {
          return isNone2(wa) ? none2 : some4(f5(wa));
        };
      };
      Extend3 = {
        URI: URI4,
        map: _map4,
        extend: _extend4
      };
      compact3 = /* @__PURE__ */ flatMap4(identity);
      defaultSeparated = /* @__PURE__ */ separated(none2, none2);
      separate3 = function(ma) {
        return isNone2(ma) ? defaultSeparated : separated(getLeft(ma.value), getRight(ma.value));
      };
      Compactable3 = {
        URI: URI4,
        compact: compact3,
        separate: separate3
      };
      filter4 = function(predicate) {
        return function(fa) {
          return isNone2(fa) ? none2 : predicate(fa.value) ? fa : none2;
        };
      };
      filterMap3 = function(f5) {
        return function(fa) {
          return isNone2(fa) ? none2 : f5(fa.value);
        };
      };
      partition3 = function(predicate) {
        return function(fa) {
          return separated(_filter3(fa, not(predicate)), _filter3(fa, predicate));
        };
      };
      partitionMap3 = function(f5) {
        return flow(map5(f5), separate3);
      };
      Filterable3 = {
        URI: URI4,
        map: _map4,
        compact: compact3,
        separate: separate3,
        filter: _filter3,
        filterMap: _filterMap3,
        partition: _partition3,
        partitionMap: _partitionMap3
      };
      traverse4 = function(F) {
        return function(f5) {
          return function(ta) {
            return isNone2(ta) ? F.of(none2) : F.map(f5(ta.value), some4);
          };
        };
      };
      sequence4 = function(F) {
        return function(ta) {
          return isNone2(ta) ? F.of(none2) : F.map(ta.value, some4);
        };
      };
      Traversable4 = {
        URI: URI4,
        map: _map4,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: sequence4
      };
      _wither3 = /* @__PURE__ */ witherDefault(Traversable4, Compactable3);
      _wilt3 = /* @__PURE__ */ wiltDefault(Traversable4, Compactable3);
      wither3 = function(F) {
        var _witherF = _wither3(F);
        return function(f5) {
          return function(fa) {
            return _witherF(fa, f5);
          };
        };
      };
      wilt3 = function(F) {
        var _wiltF = _wilt3(F);
        return function(f5) {
          return function(fa) {
            return _wiltF(fa, f5);
          };
        };
      };
      Witherable3 = {
        URI: URI4,
        map: _map4,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: sequence4,
        compact: compact3,
        separate: separate3,
        filter: _filter3,
        filterMap: _filterMap3,
        partition: _partition3,
        partitionMap: _partitionMap3,
        wither: _wither3,
        wilt: _wilt3
      };
      throwError = function() {
        return none2;
      };
      MonadThrow = {
        URI: URI4,
        map: _map4,
        ap: _ap4,
        of: of5,
        chain: flatMap4,
        throwError
      };
      fromEither3 = getRight;
      FromEither3 = {
        URI: URI4,
        fromEither: fromEither3
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
      fold2 = match3;
      getOrElseW = function(onNone) {
        return function(ma) {
          return isNone2(ma) ? onNone() : ma.value;
        };
      };
      getOrElse = getOrElseW;
      flap5 = /* @__PURE__ */ flap(Functor4);
      apFirst5 = /* @__PURE__ */ apFirst(Apply4);
      apSecond5 = /* @__PURE__ */ apSecond(Apply4);
      flatten4 = compact3;
      tap2 = /* @__PURE__ */ dual(2, tap(Chain4));
      tapEither2 = /* @__PURE__ */ dual(2, tapEither(FromEither3, Chain4));
      duplicate4 = /* @__PURE__ */ extend4(identity);
      fromEitherK4 = /* @__PURE__ */ fromEitherK(FromEither3);
      chainEitherK2 = /* @__PURE__ */ chainEitherK(FromEither3, Chain4);
      chainFirstEitherK = tapEither2;
      fromNullable = function(a) {
        return a == null ? none2 : some4(a);
      };
      tryCatch = function(f5) {
        try {
          return some4(f5());
        } catch (e) {
          return none2;
        }
      };
      tryCatchK = function(f5) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return tryCatch(function() {
            return f5.apply(void 0, a);
          });
        };
      };
      fromNullableK = function(f5) {
        return flow(f5, fromNullable);
      };
      chainNullableK = function(f5) {
        return function(ma) {
          return isNone2(ma) ? none2 : fromNullable(f5(ma.value));
        };
      };
      toNullable = /* @__PURE__ */ match3(constNull, identity);
      toUndefined = /* @__PURE__ */ match3(constUndefined, identity);
      exists3 = function(predicate) {
        return function(ma) {
          return isNone2(ma) ? false : predicate(ma.value);
        };
      };
      Do4 = /* @__PURE__ */ of5(emptyRecord);
      bindTo5 = /* @__PURE__ */ bindTo(Functor4);
      let_5 = /* @__PURE__ */ let_(Functor4);
      bind5 = /* @__PURE__ */ bind(Chain4);
      apS5 = /* @__PURE__ */ apS(Apply4);
      ApT = /* @__PURE__ */ of5(emptyReadonlyArray);
      traverseReadonlyNonEmptyArrayWithIndex = function(f5) {
        return function(as5) {
          var o = f5(0, head(as5));
          if (isNone2(o)) {
            return none2;
          }
          var out = [o.value];
          for (var i = 1; i < as5.length; i++) {
            var o_1 = f5(i, as5[i]);
            if (isNone2(o_1)) {
              return none2;
            }
            out.push(o_1.value);
          }
          return some4(out);
        };
      };
      traverseReadonlyArrayWithIndex = function(f5) {
        var g = traverseReadonlyNonEmptyArrayWithIndex(f5);
        return function(as5) {
          return isNonEmpty(as5) ? g(as5) : ApT;
        };
      };
      traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
      traverseArray = function(f5) {
        return traverseReadonlyArrayWithIndex(function(_, a) {
          return f5(a);
        });
      };
      sequenceArray = /* @__PURE__ */ traverseArray(identity);
      chain4 = flatMap4;
      chainFirst5 = tap2;
      mapNullable = chainNullableK;
      option = {
        URI: URI4,
        map: _map4,
        of: of5,
        ap: _ap4,
        chain: flatMap4,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: sequence4,
        zero: zero3,
        alt: _alt4,
        extend: _extend4,
        compact: compact3,
        separate: separate3,
        filter: _filter3,
        filterMap: _filterMap3,
        partition: _partition3,
        partitionMap: _partitionMap3,
        wither: _wither3,
        wilt: _wilt3,
        throwError
      };
      getApplySemigroup2 = /* @__PURE__ */ getApplySemigroup(Apply4);
      getApplyMonoid = /* @__PURE__ */ getApplicativeMonoid(Applicative4);
      getFirstMonoid = function() {
        return getMonoid4(first());
      };
      getLastMonoid = function() {
        return getMonoid4(last());
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Compactable.js
  function compact4(F, G) {
    return function(fga) {
      return F.map(fga, G.compact);
    };
  }
  function separate4(F, C, G) {
    var _compact = compact4(F, C);
    var _map9 = map(F, G);
    return function(fge) {
      return separated(_compact(pipe(fge, _map9(getLeft))), _compact(pipe(fge, _map9(getRight))));
    };
  }
  var init_Compactable = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Compactable.js"() {
      init_function();
      init_Functor();
      init_Option();
      init_Separated();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js
  var getSemigroup6, getMonoid5;
  var init_Endomorphism = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js"() {
      init_function();
      getSemigroup6 = function() {
        return {
          concat: function(first3, second) {
            return flow(first3, second);
          }
        };
      };
      getMonoid5 = function() {
        return {
          concat: getSemigroup6().concat,
          empty: identity
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Filterable.js
  function filter5(F, G) {
    return function(predicate) {
      return function(fga) {
        return F.map(fga, function(ga) {
          return G.filter(ga, predicate);
        });
      };
    };
  }
  function filterMap4(F, G) {
    return function(f5) {
      return function(fga) {
        return F.map(fga, function(ga) {
          return G.filterMap(ga, f5);
        });
      };
    };
  }
  function partition4(F, G) {
    var _filter7 = filter5(F, G);
    return function(predicate) {
      var left = _filter7(not(predicate));
      var right = _filter7(predicate);
      return function(fgb) {
        return separated(left(fgb), right(fgb));
      };
    };
  }
  function partitionMap4(F, G) {
    var _filterMap7 = filterMap4(F, G);
    return function(f5) {
      return function(fga) {
        return separated(pipe(fga, _filterMap7(function(a) {
          return getLeft(f5(a));
        })), pipe(fga, _filterMap7(function(a) {
          return getRight(f5(a));
        })));
      };
    };
  }
  var init_Filterable = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Filterable.js"() {
      init_function();
      init_Option();
      init_Predicate();
      init_Separated();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromIO.js
  function fromIOK(F) {
    return function(f5) {
      return flow(f5, F.fromIO);
    };
  }
  function tapIO(F, M) {
    var chainFirstM = tap(M);
    return function(self, f5) {
      return chainFirstM(self, flow(f5, F.fromIO));
    };
  }
  var init_FromIO = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromIO.js"() {
      init_Chain();
      init_function();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromTask.js
  function fromTaskK(F) {
    return function(f5) {
      return flow(f5, F.fromTask);
    };
  }
  function tapTask(F, M) {
    var tapM = tap(M);
    return function(self, f5) {
      return tapM(self, flow(f5, F.fromTask));
    };
  }
  var init_FromTask = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromTask.js"() {
      init_Chain();
      init_function();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/HKT/index.js
  var init_HKT = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/HKT/index.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/OptionT.js
  function some5(F) {
    return flow(some4, F.of);
  }
  function zero4(F) {
    return constant(F.of(none2));
  }
  function fromF(F) {
    return function(ma) {
      return F.map(ma, some4);
    };
  }
  function fromNullable2(F) {
    return flow(fromNullable, F.of);
  }
  function fromNullableK2(F) {
    var fromNullableF = fromNullable2(F);
    return function(f5) {
      return flow(f5, fromNullableF);
    };
  }
  function chainNullableK2(M) {
    var chainM = chain5(M);
    var fromNullableKM = fromNullableK2(M);
    return function(f5) {
      return chainM(fromNullableKM(f5));
    };
  }
  function fromOptionK3(F) {
    return function(f5) {
      return flow(f5, F.of);
    };
  }
  function chainOptionK(M) {
    var chainM = chain5(M);
    var fromOptionKM = fromOptionK3(M);
    return function(f5) {
      return chainM(fromOptionKM(f5));
    };
  }
  function fromPredicate4(F) {
    return function(predicate) {
      return function(a) {
        return F.of(fromPredicate3(predicate)(a));
      };
    };
  }
  function fromEither4(F) {
    return flow(fromEither3, F.of);
  }
  function match4(F) {
    return function(onNone, onSome) {
      return function(ma) {
        return F.map(ma, match3(onNone, onSome));
      };
    };
  }
  function matchE(M) {
    return function(onNone, onSome) {
      return function(ma) {
        return M.chain(ma, match3(onNone, onSome));
      };
    };
  }
  function getOrElse2(M) {
    return function(onNone) {
      return function(fa) {
        return M.chain(fa, match3(onNone, M.of));
      };
    };
  }
  function map6(F) {
    return map(F, Functor4);
  }
  function ap6(F) {
    return ap(F, Apply4);
  }
  function chain5(M) {
    var flatMapM = flatMap5(M);
    return function(f5) {
      return function(ma) {
        return flatMapM(ma, f5);
      };
    };
  }
  function flatMap5(M) {
    var zeroM = zero4(M);
    return function(ma, f5) {
      return M.chain(ma, match3(function() {
        return zeroM();
      }, f5));
    };
  }
  function alt5(M) {
    var _some = some5(M);
    return function(second) {
      return function(first3) {
        return M.chain(first3, match3(second, _some));
      };
    };
  }
  var init_OptionT = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/OptionT.js"() {
      init_Apply();
      init_function();
      init_Functor();
      init_Option();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Monoid.js
  var concatAll5, monoidVoid, monoidAll, monoidAny, monoidString, monoidSum, monoidProduct;
  var init_Monoid = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Monoid.js"() {
      init_Semigroup();
      concatAll5 = function(M) {
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
    Chain: () => Chain5,
    Do: () => Do5,
    FromIO: () => FromIO,
    FromTask: () => FromTask,
    Functor: () => Functor5,
    Monad: () => Monad5,
    MonadIO: () => MonadIO,
    MonadTask: () => MonadTask,
    Pointed: () => Pointed5,
    URI: () => URI5,
    ap: () => ap7,
    apFirst: () => apFirst6,
    apS: () => apS6,
    apSecond: () => apSecond6,
    as: () => as3,
    asUnit: () => asUnit3,
    bind: () => bind6,
    bindTo: () => bindTo6,
    chain: () => chain6,
    chainFirst: () => chainFirst6,
    chainFirstIOK: () => chainFirstIOK,
    chainIOK: () => chainIOK,
    delay: () => delay,
    flap: () => flap6,
    flatMap: () => flatMap6,
    flatMapIO: () => flatMapIO2,
    flatten: () => flatten5,
    fromIO: () => fromIO,
    fromIOK: () => fromIOK2,
    fromTask: () => fromTask,
    getMonoid: () => getMonoid6,
    getRaceMonoid: () => getRaceMonoid,
    getSemigroup: () => getSemigroup7,
    let: () => let_6,
    map: () => map7,
    never: () => never,
    of: () => of6,
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
  var fromIO, _map5, _apPar, _apSeq, map7, ap7, of6, flatMap6, flatten5, URI5, Functor5, as3, asUnit3, flap6, Pointed5, ApplyPar, apFirst6, apSecond6, ApplicativePar, ApplySeq, ApplicativeSeq, Chain5, Monad5, MonadIO, fromTask, MonadTask, FromIO, _FlatMap, _FromIO, flatMapIO2, tap3, tapIO2, fromIOK2, chainIOK, chainFirstIOK, FromTask, never, Do5, bindTo6, let_6, bind6, apS6, ApT2, traverseReadonlyNonEmptyArrayWithIndex2, traverseReadonlyArrayWithIndex2, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseReadonlyArrayWithIndexSeq, traverseArrayWithIndex2, traverseArray2, sequenceArray2, traverseSeqArrayWithIndex, traverseSeqArray, sequenceSeqArray, chain6, chainFirst6, task, taskSeq, getSemigroup7, getMonoid6;
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
      _map5 = function(fa, f5) {
        return pipe(fa, map7(f5));
      };
      _apPar = function(fab, fa) {
        return pipe(fab, ap7(fa));
      };
      _apSeq = function(fab, fa) {
        return flatMap6(fab, function(f5) {
          return pipe(fa, map7(f5));
        });
      };
      map7 = function(f5) {
        return function(fa) {
          return function() {
            return Promise.resolve().then(fa).then(f5);
          };
        };
      };
      ap7 = function(fa) {
        return function(fab) {
          return function() {
            return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function(_a) {
              var f5 = _a[0], a = _a[1];
              return f5(a);
            });
          };
        };
      };
      of6 = function(a) {
        return function() {
          return Promise.resolve(a);
        };
      };
      flatMap6 = /* @__PURE__ */ dual(2, function(ma, f5) {
        return function() {
          return Promise.resolve().then(ma).then(function(a) {
            return f5(a)();
          });
        };
      });
      flatten5 = /* @__PURE__ */ flatMap6(identity);
      URI5 = "Task";
      Functor5 = {
        URI: URI5,
        map: _map5
      };
      as3 = dual(2, as(Functor5));
      asUnit3 = asUnit(Functor5);
      flap6 = /* @__PURE__ */ flap(Functor5);
      Pointed5 = {
        URI: URI5,
        of: of6
      };
      ApplyPar = {
        URI: URI5,
        map: _map5,
        ap: _apPar
      };
      apFirst6 = /* @__PURE__ */ apFirst(ApplyPar);
      apSecond6 = /* @__PURE__ */ apSecond(ApplyPar);
      ApplicativePar = {
        URI: URI5,
        map: _map5,
        ap: _apPar,
        of: of6
      };
      ApplySeq = {
        URI: URI5,
        map: _map5,
        ap: _apSeq
      };
      ApplicativeSeq = {
        URI: URI5,
        map: _map5,
        ap: _apSeq,
        of: of6
      };
      Chain5 = {
        URI: URI5,
        map: _map5,
        ap: _apPar,
        chain: flatMap6
      };
      Monad5 = {
        URI: URI5,
        map: _map5,
        of: of6,
        ap: _apPar,
        chain: flatMap6
      };
      MonadIO = {
        URI: URI5,
        map: _map5,
        of: of6,
        ap: _apPar,
        chain: flatMap6,
        fromIO
      };
      fromTask = identity;
      MonadTask = {
        URI: URI5,
        map: _map5,
        of: of6,
        ap: _apPar,
        chain: flatMap6,
        fromIO,
        fromTask
      };
      FromIO = {
        URI: URI5,
        fromIO
      };
      _FlatMap = {
        flatMap: flatMap6
      };
      _FromIO = {
        fromIO: FromIO.fromIO
      };
      flatMapIO2 = flatMapIO(_FromIO, _FlatMap);
      tap3 = /* @__PURE__ */ dual(2, tap(Chain5));
      tapIO2 = /* @__PURE__ */ dual(2, tapIO(FromIO, Chain5));
      fromIOK2 = /* @__PURE__ */ fromIOK(FromIO);
      chainIOK = flatMapIO2;
      chainFirstIOK = tapIO2;
      FromTask = {
        URI: URI5,
        fromIO,
        fromTask
      };
      never = function() {
        return new Promise(function(_) {
          return void 0;
        });
      };
      Do5 = /* @__PURE__ */ of6(emptyRecord);
      bindTo6 = /* @__PURE__ */ bindTo(Functor5);
      let_6 = /* @__PURE__ */ let_(Functor5);
      bind6 = /* @__PURE__ */ bind(Chain5);
      apS6 = /* @__PURE__ */ apS(ApplyPar);
      ApT2 = /* @__PURE__ */ of6(emptyReadonlyArray);
      traverseReadonlyNonEmptyArrayWithIndex2 = function(f5) {
        return function(as5) {
          return function() {
            return Promise.all(as5.map(function(a, i) {
              return Promise.resolve().then(function() {
                return f5(i, a)();
              });
            }));
          };
        };
      };
      traverseReadonlyArrayWithIndex2 = function(f5) {
        var g = traverseReadonlyNonEmptyArrayWithIndex2(f5);
        return function(as5) {
          return isNonEmpty(as5) ? g(as5) : ApT2;
        };
      };
      traverseReadonlyNonEmptyArrayWithIndexSeq = function(f5) {
        return function(as5) {
          return function() {
            return tail(as5).reduce(function(acc, a, i) {
              return acc.then(function(bs) {
                return Promise.resolve().then(f5(i + 1, a)).then(function(b) {
                  bs.push(b);
                  return bs;
                });
              });
            }, Promise.resolve().then(f5(0, head(as5))).then(singleton));
          };
        };
      };
      traverseReadonlyArrayWithIndexSeq = function(f5) {
        var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f5);
        return function(as5) {
          return isNonEmpty(as5) ? g(as5) : ApT2;
        };
      };
      traverseArrayWithIndex2 = traverseReadonlyArrayWithIndex2;
      traverseArray2 = function(f5) {
        return traverseReadonlyArrayWithIndex2(function(_, a) {
          return f5(a);
        });
      };
      sequenceArray2 = /* @__PURE__ */ traverseArray2(identity);
      traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
      traverseSeqArray = function(f5) {
        return traverseReadonlyArrayWithIndexSeq(function(_, a) {
          return f5(a);
        });
      };
      sequenceSeqArray = /* @__PURE__ */ traverseSeqArray(identity);
      chain6 = flatMap6;
      chainFirst6 = tap3;
      task = {
        URI: URI5,
        map: _map5,
        of: of6,
        ap: _apPar,
        chain: flatMap6,
        fromIO,
        fromTask
      };
      taskSeq = {
        URI: URI5,
        map: _map5,
        of: of6,
        ap: _apSeq,
        chain: flatMap6,
        fromIO,
        fromTask
      };
      getSemigroup7 = /* @__PURE__ */ getApplySemigroup(ApplySeq);
      getMonoid6 = /* @__PURE__ */ getApplicativeMonoid(ApplicativeSeq);
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js
  var Eq2, Semigroup, empty4, Monoid, Ord2;
  var init_string = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js"() {
      Eq2 = {
        equals: function(first3, second) {
          return first3 === second;
        }
      };
      Semigroup = {
        concat: function(first3, second) {
          return first3 + second;
        }
      };
      empty4 = "";
      Monoid = {
        concat: Semigroup.concat,
        empty: empty4
      };
      Ord2 = {
        equals: Eq2.equals,
        compare: function(first3, second) {
          return first3 < second ? -1 : first3 > second ? 1 : 0;
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js
  function collect(O2) {
    if (typeof O2 === "function") {
      return collect(Ord2)(O2);
    }
    var keysO = keys_(O2);
    return function(f5) {
      return function(r) {
        var out = [];
        for (var _i = 0, _a = keysO(r); _i < _a.length; _i++) {
          var key = _a[_i];
          out.push(f5(key, r[key]));
        }
        return out;
      };
    };
  }
  function isSubrecord(E) {
    return function(me, that) {
      if (that === void 0) {
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
  function lookup3(k, r) {
    if (r === void 0) {
      return function(r2) {
        return lookup3(k, r2);
      };
    }
    return has.call(r, k) ? some(r[k]) : none;
  }
  function mapWithIndex4(f5) {
    return function(r) {
      var out = {};
      for (var k in r) {
        if (has.call(r, k)) {
          out[k] = f5(k, r[k]);
        }
      }
      return out;
    };
  }
  function map8(f5) {
    return mapWithIndex4(function(_, a) {
      return f5(a);
    });
  }
  function reduceWithIndex5() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length === 2) {
      return reduceWithIndex5(Ord2).apply(void 0, args);
    }
    var keysO = keys_(args[0]);
    return function(b, f5) {
      return function(fa) {
        var out = b;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
          var k = ks[i];
          out = f5(k, out, fa[k]);
        }
        return out;
      };
    };
  }
  function foldMapWithIndex5(O2) {
    if ("compare" in O2) {
      var keysO_1 = keys_(O2);
      return function(M) {
        return function(f5) {
          return function(fa) {
            var out = M.empty;
            var ks = keysO_1(fa);
            var len = ks.length;
            for (var i = 0; i < len; i++) {
              var k = ks[i];
              out = M.concat(out, f5(k, fa[k]));
            }
            return out;
          };
        };
      };
    }
    return foldMapWithIndex5(Ord2)(O2);
  }
  function reduceRightWithIndex5() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length === 2) {
      return reduceRightWithIndex5(Ord2).apply(void 0, args);
    }
    var keysO = keys_(args[0]);
    return function(b, f5) {
      return function(fa) {
        var out = b;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = len - 1; i >= 0; i--) {
          var k = ks[i];
          out = f5(k, fa[k], out);
        }
        return out;
      };
    };
  }
  function traverseWithIndex4(F) {
    var traverseWithIndexOF = _traverseWithIndex4(Ord2)(F);
    return function(f5) {
      return function(ta) {
        return traverseWithIndexOF(ta, f5);
      };
    };
  }
  function traverse5(F) {
    var traverseOF = _traverse5(Ord2)(F);
    return function(f5) {
      return function(ta) {
        return traverseOF(ta, f5);
      };
    };
  }
  function sequence5(F) {
    return _sequence(Ord2)(F);
  }
  function partitionMapWithIndex3(f5) {
    return function(r) {
      var left = {};
      var right = {};
      for (var k in r) {
        if (has.call(r, k)) {
          var e = f5(k, r[k]);
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
  function filterMapWithIndex3(f5) {
    return function(r) {
      var out = {};
      for (var k in r) {
        if (has.call(r, k)) {
          var ob = f5(k, r[k]);
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
    return function(ta, f5) {
      return F.reduce(ta, {}, function(r, a) {
        var _a = f5(a), k = _a[0], b = _a[1];
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
  function some6(predicate) {
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
      if (fa === void 0) {
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
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length === 1) {
      var reduceWithIndexO_1 = reduceWithIndex5(args[0]);
      return function(b, f5) {
        return reduceWithIndexO_1(b, function(_, b2, a) {
          return f5(b2, a);
        });
      };
    }
    return reduce6(Ord2).apply(void 0, args);
  }
  function foldMap6(O2) {
    if ("compare" in O2) {
      var foldMapWithIndexO_1 = foldMapWithIndex5(O2);
      return function(M) {
        var foldMapWithIndexM = foldMapWithIndexO_1(M);
        return function(f5) {
          return foldMapWithIndexM(function(_, a) {
            return f5(a);
          });
        };
      };
    }
    return foldMap6(Ord2)(O2);
  }
  function reduceRight6() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length === 1) {
      var reduceRightWithIndexO_1 = reduceRightWithIndex5(args[0]);
      return function(b, f5) {
        return reduceRightWithIndexO_1(b, function(_, b2, a) {
          return f5(b2, a);
        });
      };
    }
    return reduceRight6(Ord2).apply(void 0, args);
  }
  function getShow6(O2) {
    if ("compare" in O2) {
      return function(S) {
        return {
          show: function(r) {
            var elements = collect(O2)(function(k, a) {
              return "".concat(JSON.stringify(k), ": ").concat(S.show(a));
            })(r).join(", ");
            return elements === "" ? "{}" : "{ ".concat(elements, " }");
          }
        };
      };
    }
    return getShow6(Ord2)(O2);
  }
  function getEq6(E) {
    var isSubrecordE = isSubrecord(E);
    return fromEquals(function(x, y) {
      return isSubrecordE(x)(y) && isSubrecordE(y)(x);
    });
  }
  function getMonoid7(S) {
    return {
      concat: function(first3, second) {
        if (isEmpty3(first3)) {
          return second;
        }
        if (isEmpty3(second)) {
          return first3;
        }
        var r = Object.assign({}, first3);
        for (var k in second) {
          if (has.call(second, k)) {
            r[k] = has.call(first3, k) ? S.concat(first3[k], second[k]) : second[k];
          }
        }
        return r;
      },
      empty: empty5
    };
  }
  function hasOwnProperty(k, r) {
    return has.call(r === void 0 ? this : r, k);
  }
  var size3, isEmpty3, keys_, upsertAt, has2, empty5, singleton2, union5, intersection3, difference3, _map6, _mapWithIndex4, _reduce5, _foldMap5, _reduceRight5, _filter4, _filterMap4, _partition4, _partitionMap4, _reduceWithIndex4, _foldMapWithIndex4, _reduceRightWithIndex4, _partitionMapWithIndex3, _partitionWithIndex3, _filterMapWithIndex3, _filterWithIndex3, _traverse5, _sequence, _traverseWithIndex4, filter6, filterMap5, partition5, partitionMap5, compact5, separate5;
  var init_ReadonlyRecord = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js"() {
      init_Eq();
      init_function();
      init_internal();
      init_Separated();
      init_string();
      size3 = function(r) {
        return Object.keys(r).length;
      };
      isEmpty3 = function(r) {
        for (var k in r) {
          if (has.call(r, k)) {
            return false;
          }
        }
        return true;
      };
      keys_ = function(O2) {
        return function(r) {
          return Object.keys(r).sort(O2.compare);
        };
      };
      upsertAt = function(k, a) {
        return function(r) {
          if (has.call(r, k) && r[k] === a) {
            return r;
          }
          var out = Object.assign({}, r);
          out[k] = a;
          return out;
        };
      };
      has2 = function(k, r) {
        return has.call(r, k);
      };
      empty5 = {};
      singleton2 = function(k, a) {
        var _a;
        return _a = {}, _a[k] = a, _a;
      };
      union5 = function(M) {
        return function(second) {
          return function(first3) {
            if (isEmpty3(first3)) {
              return second;
            }
            if (isEmpty3(second)) {
              return first3;
            }
            var out = {};
            for (var k in first3) {
              if (has2(k, second)) {
                out[k] = M.concat(first3[k], second[k]);
              } else {
                out[k] = first3[k];
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
      intersection3 = function(M) {
        return function(second) {
          return function(first3) {
            if (isEmpty3(first3) || isEmpty3(second)) {
              return empty5;
            }
            var out = {};
            for (var k in first3) {
              if (has2(k, second)) {
                out[k] = M.concat(first3[k], second[k]);
              }
            }
            return out;
          };
        };
      };
      difference3 = function(second) {
        return function(first3) {
          if (isEmpty3(first3)) {
            return second;
          }
          if (isEmpty3(second)) {
            return first3;
          }
          var out = {};
          for (var k in first3) {
            if (!has2(k, second)) {
              out[k] = first3[k];
            }
          }
          for (var k in second) {
            if (!has2(k, first3)) {
              out[k] = second[k];
            }
          }
          return out;
        };
      };
      _map6 = function(fa, f5) {
        return pipe(fa, map8(f5));
      };
      _mapWithIndex4 = function(fa, f5) {
        return pipe(fa, mapWithIndex4(f5));
      };
      _reduce5 = function(O2) {
        var reduceO = reduce6(O2);
        return function(fa, b, f5) {
          return pipe(fa, reduceO(b, f5));
        };
      };
      _foldMap5 = function(O2) {
        return function(M) {
          var foldMapM = foldMap6(O2)(M);
          return function(fa, f5) {
            return pipe(fa, foldMapM(f5));
          };
        };
      };
      _reduceRight5 = function(O2) {
        var reduceRightO = reduceRight6(O2);
        return function(fa, b, f5) {
          return pipe(fa, reduceRightO(b, f5));
        };
      };
      _filter4 = function(fa, predicate) {
        return pipe(fa, filter6(predicate));
      };
      _filterMap4 = function(fa, f5) {
        return pipe(fa, filterMap5(f5));
      };
      _partition4 = function(fa, predicate) {
        return pipe(fa, partition5(predicate));
      };
      _partitionMap4 = function(fa, f5) {
        return pipe(fa, partitionMap5(f5));
      };
      _reduceWithIndex4 = function(O2) {
        var reduceWithIndexO = reduceWithIndex5(O2);
        return function(fa, b, f5) {
          return pipe(fa, reduceWithIndexO(b, f5));
        };
      };
      _foldMapWithIndex4 = function(O2) {
        var foldMapWithIndexO = foldMapWithIndex5(O2);
        return function(M) {
          var foldMapWithIndexM = foldMapWithIndexO(M);
          return function(fa, f5) {
            return pipe(fa, foldMapWithIndexM(f5));
          };
        };
      };
      _reduceRightWithIndex4 = function(O2) {
        var reduceRightWithIndexO = reduceRightWithIndex5(O2);
        return function(fa, b, f5) {
          return pipe(fa, reduceRightWithIndexO(b, f5));
        };
      };
      _partitionMapWithIndex3 = function(fa, f5) {
        return pipe(fa, partitionMapWithIndex3(f5));
      };
      _partitionWithIndex3 = function(fa, predicateWithIndex) {
        return pipe(fa, partitionWithIndex3(predicateWithIndex));
      };
      _filterMapWithIndex3 = function(fa, f5) {
        return pipe(fa, filterMapWithIndex3(f5));
      };
      _filterWithIndex3 = function(fa, predicateWithIndex) {
        return pipe(fa, filterWithIndex4(predicateWithIndex));
      };
      _traverse5 = function(O2) {
        var traverseWithIndexO = _traverseWithIndex4(O2);
        return function(F) {
          var traverseWithIndexOF = traverseWithIndexO(F);
          return function(ta, f5) {
            return traverseWithIndexOF(ta, flow(SK, f5));
          };
        };
      };
      _sequence = function(O2) {
        var traverseO = _traverse5(O2);
        return function(F) {
          var traverseOF = traverseO(F);
          return function(ta) {
            return traverseOF(ta, identity);
          };
        };
      };
      _traverseWithIndex4 = function(O2) {
        return function(F) {
          var keysO = keys_(O2);
          return function(ta, f5) {
            var ks = keysO(ta);
            if (ks.length === 0) {
              return F.of(empty5);
            }
            var fr = F.of({});
            var _loop_1 = function(key2) {
              fr = F.ap(F.map(fr, function(r) {
                return function(b) {
                  var _a;
                  return Object.assign({}, r, (_a = {}, _a[key2] = b, _a));
                };
              }), f5(key2, ta[key2]));
            };
            for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
              var key = ks_1[_i];
              _loop_1(key);
            }
            return fr;
          };
        };
      };
      filter6 = function(predicate) {
        return filterWithIndex4(function(_, a) {
          return predicate(a);
        });
      };
      filterMap5 = function(f5) {
        return filterMapWithIndex3(function(_, a) {
          return f5(a);
        });
      };
      partition5 = function(predicate) {
        return partitionWithIndex3(function(_, a) {
          return predicate(a);
        });
      };
      partitionMap5 = function(f5) {
        return partitionMapWithIndex3(function(_, a) {
          return f5(a);
        });
      };
      compact5 = function(r) {
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
      separate5 = function(r) {
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js
  var Record_exports = {};
  __export(Record_exports, {
    Compactable: () => Compactable4,
    Filterable: () => Filterable4,
    FilterableWithIndex: () => FilterableWithIndex3,
    Foldable: () => Foldable5,
    FoldableWithIndex: () => FoldableWithIndex4,
    Functor: () => Functor6,
    FunctorWithIndex: () => FunctorWithIndex4,
    Traversable: () => Traversable5,
    TraversableWithIndex: () => TraversableWithIndex4,
    URI: () => URI6,
    Witherable: () => Witherable4,
    collect: () => collect2,
    compact: () => compact6,
    deleteAt: () => deleteAt3,
    difference: () => difference4,
    elem: () => elem5,
    empty: () => empty6,
    every: () => every4,
    filter: () => filter7,
    filterMap: () => filterMap6,
    filterMapWithIndex: () => filterMapWithIndex4,
    filterWithIndex: () => filterWithIndex5,
    flap: () => flap7,
    foldMap: () => foldMap7,
    foldMapWithIndex: () => foldMapWithIndex6,
    fromEntries: () => fromEntries,
    fromFoldable: () => fromFoldable2,
    fromFoldableMap: () => fromFoldableMap2,
    getDifferenceMagma: () => getDifferenceMagma3,
    getEq: () => getEq7,
    getFoldable: () => getFoldable,
    getFoldableWithIndex: () => getFoldableWithIndex,
    getIntersectionSemigroup: () => getIntersectionSemigroup3,
    getMonoid: () => getMonoid8,
    getShow: () => getShow7,
    getTraversable: () => getTraversable,
    getTraversableWithIndex: () => getTraversableWithIndex,
    getUnionMonoid: () => getUnionMonoid3,
    getUnionSemigroup: () => getUnionSemigroup4,
    getWitherable: () => getWitherable,
    has: () => has3,
    hasOwnProperty: () => hasOwnProperty2,
    insertAt: () => insertAt4,
    intersection: () => intersection4,
    isEmpty: () => isEmpty4,
    isSubrecord: () => isSubrecord2,
    keys: () => keys,
    lookup: () => lookup4,
    map: () => map9,
    mapWithIndex: () => mapWithIndex5,
    modifyAt: () => modifyAt4,
    partition: () => partition6,
    partitionMap: () => partitionMap6,
    partitionMapWithIndex: () => partitionMapWithIndex4,
    partitionWithIndex: () => partitionWithIndex4,
    pop: () => pop,
    record: () => record,
    reduce: () => reduce7,
    reduceRight: () => reduceRight7,
    reduceRightWithIndex: () => reduceRightWithIndex6,
    reduceWithIndex: () => reduceWithIndex6,
    separate: () => separate6,
    sequence: () => sequence6,
    singleton: () => singleton3,
    size: () => size4,
    some: () => some7,
    toArray: () => toArray2,
    toEntries: () => toEntries,
    toUnfoldable: () => toUnfoldable,
    traverse: () => traverse6,
    traverseWithIndex: () => traverseWithIndex5,
    union: () => union6,
    updateAt: () => updateAt4,
    upsertAt: () => upsertAt2,
    wilt: () => wilt4,
    wither: () => wither4
  });
  function collect2(O2) {
    if (typeof O2 === "function") {
      return collect2(Ord2)(O2);
    }
    var keysO = keys_2(O2);
    return function(f5) {
      return function(r) {
        var out = [];
        for (var _i = 0, _a = keysO(r); _i < _a.length; _i++) {
          var key = _a[_i];
          out.push(f5(key, r[key]));
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
      var oa = lookup4(k, r);
      return isNone(oa) ? none : some([oa.value, deleteAtk(r)]);
    };
  }
  function reduceWithIndex6() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return args.length === 1 ? reduceWithIndex5(args[0]) : reduceWithIndex5(Ord2).apply(void 0, args);
  }
  function foldMapWithIndex6(O2) {
    return "compare" in O2 ? foldMapWithIndex5(O2) : foldMapWithIndex5(Ord2)(O2);
  }
  function reduceRightWithIndex6() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return args.length === 1 ? reduceRightWithIndex5(args[0]) : reduceRightWithIndex5(Ord2).apply(void 0, args);
  }
  function traverseWithIndex5(F) {
    return traverseWithIndex4(F);
  }
  function traverse6(F) {
    return traverse5(F);
  }
  function sequence6(F) {
    return sequence5(F);
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
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return args.length === 1 ? reduce6(args[0]) : reduce6(Ord2).apply(void 0, args);
  }
  function foldMap7(O2) {
    return "compare" in O2 ? foldMap6(O2) : foldMap6(Ord2)(O2);
  }
  function reduceRight7() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return args.length === 1 ? reduceRight6(args[0]) : reduceRight6(Ord2).apply(void 0, args);
  }
  function getShow7(O2) {
    return "compare" in O2 ? getShow6(O2) : getShow6(Ord2)(O2);
  }
  var __assign, size4, isEmpty4, keys_2, keys, toArray2, upsertAt2, has3, updateAt4, modifyAt4, isSubrecord2, lookup4, mapWithIndex5, map9, singleton3, wither4, wilt4, partitionMapWithIndex4, filterMapWithIndex4, toEntries, fromEntries, every4, some7, elem5, union6, intersection4, difference4, _map7, _mapWithIndex5, _reduce6, _foldMap6, _reduceRight6, _filter5, _filterMap5, _partition5, _partitionMap5, _reduceWithIndex5, _foldMapWithIndex5, _reduceRightWithIndex5, _partitionMapWithIndex4, _partitionWithIndex4, _filterMapWithIndex4, _filterWithIndex4, _traverse6, _sequence2, _traverseWithIndex5, filter7, filterMap6, partition6, partitionMap6, compact6, separate6, URI6, getEq7, getMonoid8, Functor6, flap7, FunctorWithIndex4, getFoldable, getFoldableWithIndex, Compactable4, Filterable4, FilterableWithIndex3, getTraversable, getTraversableWithIndex, getWitherable, getUnionSemigroup4, getUnionMonoid3, getIntersectionSemigroup3, getDifferenceMagma3, Foldable5, FoldableWithIndex4, Traversable5, TraversableWithIndex4, _wither4, _wilt4, Witherable4, empty6, insertAt4, hasOwnProperty2, record;
  var init_Record = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js"() {
      init_Array();
      init_function();
      init_Functor();
      init_internal();
      init_ReadonlyRecord();
      init_Semigroup();
      init_string();
      init_Witherable();
      __assign = function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p4 in s)
              if (Object.prototype.hasOwnProperty.call(s, p4))
                t[p4] = s[p4];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      size4 = size3;
      isEmpty4 = isEmpty3;
      keys_2 = function(O2) {
        return function(r) {
          return Object.keys(r).sort(O2.compare);
        };
      };
      keys = /* @__PURE__ */ keys_2(Ord2);
      toArray2 = /* @__PURE__ */ collect2(Ord2)(function(k, a) {
        return [
          k,
          a
        ];
      });
      upsertAt2 = upsertAt;
      has3 = has2;
      updateAt4 = function(k, a) {
        return modifyAt4(k, function() {
          return a;
        });
      };
      modifyAt4 = function(k, f5) {
        return function(r) {
          if (!has3(k, r)) {
            return none;
          }
          var out = Object.assign({}, r);
          out[k] = f5(r[k]);
          return some(out);
        };
      };
      isSubrecord2 = isSubrecord;
      lookup4 = lookup3;
      mapWithIndex5 = mapWithIndex4;
      map9 = map8;
      singleton3 = singleton2;
      wither4 = function(F) {
        var traverseF = traverse6(F);
        return function(f5) {
          return function(fa) {
            return F.map(pipe(fa, traverseF(f5)), compact6);
          };
        };
      };
      wilt4 = function(F) {
        var traverseF = traverse6(F);
        return function(f5) {
          return function(fa) {
            return F.map(pipe(fa, traverseF(f5)), separate6);
          };
        };
      };
      partitionMapWithIndex4 = partitionMapWithIndex3;
      filterMapWithIndex4 = filterMapWithIndex3;
      toEntries = toArray2;
      fromEntries = function(fa) {
        return fromFoldable2(last(), Foldable3)(fa);
      };
      every4 = every3;
      some7 = some6;
      elem5 = elem4;
      union6 = function(M) {
        var unionM = union5(M);
        return function(second) {
          return function(first3) {
            if (isEmpty4(first3)) {
              return __assign({}, second);
            }
            if (isEmpty4(second)) {
              return __assign({}, first3);
            }
            return unionM(second)(first3);
          };
        };
      };
      intersection4 = function(M) {
        return function(second) {
          return function(first3) {
            if (isEmpty4(first3) || isEmpty4(second)) {
              return {};
            }
            return intersection3(M)(second)(first3);
          };
        };
      };
      difference4 = function(second) {
        return function(first3) {
          if (isEmpty4(first3)) {
            return __assign({}, second);
          }
          if (isEmpty4(second)) {
            return __assign({}, first3);
          }
          return difference3(second)(first3);
        };
      };
      _map7 = _map6;
      _mapWithIndex5 = _mapWithIndex4;
      _reduce6 = _reduce5;
      _foldMap6 = _foldMap5;
      _reduceRight6 = _reduceRight5;
      _filter5 = _filter4;
      _filterMap5 = _filterMap4;
      _partition5 = _partition4;
      _partitionMap5 = _partitionMap4;
      _reduceWithIndex5 = _reduceWithIndex4;
      _foldMapWithIndex5 = _foldMapWithIndex4;
      _reduceRightWithIndex5 = _reduceRightWithIndex4;
      _partitionMapWithIndex4 = _partitionMapWithIndex3;
      _partitionWithIndex4 = _partitionWithIndex3;
      _filterMapWithIndex4 = _filterMapWithIndex3;
      _filterWithIndex4 = _filterWithIndex3;
      _traverse6 = _traverse5;
      _sequence2 = _sequence;
      _traverseWithIndex5 = function(O2) {
        return function(F) {
          var keysO = keys_2(O2);
          return function(ta, f5) {
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
              }), f5(key2, ta[key2]));
            };
            for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
              var key = ks_1[_i];
              _loop_1(key);
            }
            return fr;
          };
        };
      };
      filter7 = filter6;
      filterMap6 = filterMap5;
      partition6 = partition5;
      partitionMap6 = partitionMap5;
      compact6 = compact5;
      separate6 = separate5;
      URI6 = "Record";
      getEq7 = getEq6;
      getMonoid8 = getMonoid7;
      Functor6 = {
        URI: URI6,
        map: _map7
      };
      flap7 = /* @__PURE__ */ flap(Functor6);
      FunctorWithIndex4 = {
        URI: URI6,
        map: _map7,
        mapWithIndex: _mapWithIndex5
      };
      getFoldable = function(O2) {
        return {
          URI: URI6,
          reduce: _reduce6(O2),
          foldMap: _foldMap6(O2),
          reduceRight: _reduceRight6(O2)
        };
      };
      getFoldableWithIndex = function(O2) {
        return {
          URI: URI6,
          reduce: _reduce6(O2),
          foldMap: _foldMap6(O2),
          reduceRight: _reduceRight6(O2),
          reduceWithIndex: _reduceWithIndex5(O2),
          foldMapWithIndex: _foldMapWithIndex5(O2),
          reduceRightWithIndex: _reduceRightWithIndex5(O2)
        };
      };
      Compactable4 = {
        URI: URI6,
        compact: compact6,
        separate: separate6
      };
      Filterable4 = {
        URI: URI6,
        map: _map7,
        compact: compact6,
        separate: separate6,
        filter: _filter5,
        filterMap: _filterMap5,
        partition: _partition5,
        partitionMap: _partitionMap5
      };
      FilterableWithIndex3 = {
        URI: URI6,
        map: _map7,
        mapWithIndex: _mapWithIndex5,
        compact: compact6,
        separate: separate6,
        filter: _filter5,
        filterMap: _filterMap5,
        partition: _partition5,
        partitionMap: _partitionMap5,
        filterMapWithIndex: _filterMapWithIndex4,
        filterWithIndex: _filterWithIndex4,
        partitionMapWithIndex: _partitionMapWithIndex4,
        partitionWithIndex: _partitionWithIndex4
      };
      getTraversable = function(O2) {
        return {
          URI: URI6,
          map: _map7,
          reduce: _reduce6(O2),
          foldMap: _foldMap6(O2),
          reduceRight: _reduceRight6(O2),
          traverse: _traverse6(O2),
          sequence: _sequence2(O2)
        };
      };
      getTraversableWithIndex = function(O2) {
        return {
          URI: URI6,
          map: _map7,
          mapWithIndex: _mapWithIndex5,
          reduce: _reduce6(O2),
          foldMap: _foldMap6(O2),
          reduceRight: _reduceRight6(O2),
          reduceWithIndex: _reduceWithIndex5(O2),
          foldMapWithIndex: _foldMapWithIndex5(O2),
          reduceRightWithIndex: _reduceRightWithIndex5(O2),
          traverse: _traverse6(O2),
          sequence: _sequence2(O2),
          traverseWithIndex: _traverseWithIndex5(O2)
        };
      };
      getWitherable = function(O2) {
        var T = getTraversable(O2);
        return {
          URI: URI6,
          map: _map7,
          reduce: _reduce6(O2),
          foldMap: _foldMap6(O2),
          reduceRight: _reduceRight6(O2),
          traverse: T.traverse,
          sequence: T.sequence,
          compact: compact6,
          separate: separate6,
          filter: _filter5,
          filterMap: _filterMap5,
          partition: _partition5,
          partitionMap: _partitionMap5,
          wither: witherDefault(T, Compactable4),
          wilt: wiltDefault(T, Compactable4)
        };
      };
      getUnionSemigroup4 = function(S) {
        var unionS = union6(S);
        return {
          concat: function(first3, second) {
            return unionS(second)(first3);
          }
        };
      };
      getUnionMonoid3 = function(S) {
        return {
          concat: getUnionSemigroup4(S).concat,
          empty: {}
        };
      };
      getIntersectionSemigroup3 = function(S) {
        var intersectionS = intersection4(S);
        return {
          concat: function(first3, second) {
            return intersectionS(second)(first3);
          }
        };
      };
      getDifferenceMagma3 = function() {
        return {
          concat: function(first3, second) {
            return difference4(second)(first3);
          }
        };
      };
      Foldable5 = {
        URI: URI6,
        reduce: /* @__PURE__ */ _reduce6(Ord2),
        foldMap: /* @__PURE__ */ _foldMap6(Ord2),
        reduceRight: /* @__PURE__ */ _reduceRight6(Ord2)
      };
      FoldableWithIndex4 = {
        URI: URI6,
        reduce: /* @__PURE__ */ _reduce6(Ord2),
        foldMap: /* @__PURE__ */ _foldMap6(Ord2),
        reduceRight: /* @__PURE__ */ _reduceRight6(Ord2),
        reduceWithIndex: /* @__PURE__ */ _reduceWithIndex5(Ord2),
        foldMapWithIndex: /* @__PURE__ */ _foldMapWithIndex5(Ord2),
        reduceRightWithIndex: /* @__PURE__ */ _reduceRightWithIndex5(Ord2)
      };
      Traversable5 = {
        URI: URI6,
        map: _map7,
        reduce: /* @__PURE__ */ _reduce6(Ord2),
        foldMap: /* @__PURE__ */ _foldMap6(Ord2),
        reduceRight: /* @__PURE__ */ _reduceRight6(Ord2),
        traverse: /* @__PURE__ */ _traverse6(Ord2),
        sequence: sequence6
      };
      TraversableWithIndex4 = {
        URI: URI6,
        map: _map7,
        mapWithIndex: _mapWithIndex5,
        reduce: /* @__PURE__ */ _reduce6(Ord2),
        foldMap: /* @__PURE__ */ _foldMap6(Ord2),
        reduceRight: /* @__PURE__ */ _reduceRight6(Ord2),
        reduceWithIndex: /* @__PURE__ */ _reduceWithIndex5(Ord2),
        foldMapWithIndex: /* @__PURE__ */ _foldMapWithIndex5(Ord2),
        reduceRightWithIndex: /* @__PURE__ */ _reduceRightWithIndex5(Ord2),
        traverse: /* @__PURE__ */ _traverse6(Ord2),
        sequence: sequence6,
        traverseWithIndex: /* @__PURE__ */ _traverseWithIndex5(Ord2)
      };
      _wither4 = /* @__PURE__ */ witherDefault(Traversable5, Compactable4);
      _wilt4 = /* @__PURE__ */ wiltDefault(Traversable5, Compactable4);
      Witherable4 = {
        URI: URI6,
        map: _map7,
        reduce: /* @__PURE__ */ _reduce6(Ord2),
        foldMap: /* @__PURE__ */ _foldMap6(Ord2),
        reduceRight: /* @__PURE__ */ _reduceRight6(Ord2),
        traverse: /* @__PURE__ */ _traverse6(Ord2),
        sequence: sequence6,
        compact: compact6,
        separate: separate6,
        filter: _filter5,
        filterMap: _filterMap5,
        partition: _partition5,
        partitionMap: _partitionMap5,
        wither: _wither4,
        wilt: _wilt4
      };
      empty6 = {};
      insertAt4 = upsertAt2;
      hasOwnProperty2 = hasOwnProperty;
      record = {
        URI: URI6,
        map: _map7,
        reduce: /* @__PURE__ */ _reduce6(Ord2),
        foldMap: /* @__PURE__ */ _foldMap6(Ord2),
        reduceRight: /* @__PURE__ */ _reduceRight6(Ord2),
        traverse: /* @__PURE__ */ _traverse6(Ord2),
        sequence: sequence6,
        compact: compact6,
        separate: separate6,
        filter: _filter5,
        filterMap: _filterMap5,
        partition: _partition5,
        partitionMap: _partitionMap5,
        mapWithIndex: _mapWithIndex5,
        reduceWithIndex: /* @__PURE__ */ _reduceWithIndex5(Ord2),
        foldMapWithIndex: /* @__PURE__ */ _foldMapWithIndex5(Ord2),
        reduceRightWithIndex: /* @__PURE__ */ _reduceRightWithIndex5(Ord2),
        filterMapWithIndex: _filterMapWithIndex4,
        filterWithIndex: _filterWithIndex4,
        partitionMapWithIndex: _partitionMapWithIndex4,
        partitionWithIndex: _partitionWithIndex4,
        traverseWithIndex: /* @__PURE__ */ _traverseWithIndex5(Ord2),
        wither: _wither4,
        wilt: _wilt4
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/TaskOption.js
  var TaskOption_exports = {};
  __export(TaskOption_exports, {
    Alt: () => Alt5,
    Alternative: () => Alternative4,
    ApT: () => ApT3,
    ApplicativePar: () => ApplicativePar2,
    ApplicativeSeq: () => ApplicativeSeq2,
    ApplyPar: () => ApplyPar2,
    ApplySeq: () => ApplySeq2,
    Chain: () => Chain6,
    Compactable: () => Compactable5,
    Do: () => Do6,
    Filterable: () => Filterable5,
    FromEither: () => FromEither4,
    FromIO: () => FromIO2,
    FromTask: () => FromTask2,
    Functor: () => Functor7,
    Monad: () => Monad6,
    MonadIO: () => MonadIO2,
    MonadTask: () => MonadTask2,
    Pointed: () => Pointed6,
    URI: () => URI7,
    Zero: () => Zero4,
    alt: () => alt6,
    altW: () => altW5,
    ap: () => ap8,
    apFirst: () => apFirst7,
    apS: () => apS7,
    apSecond: () => apSecond7,
    as: () => as4,
    asUnit: () => asUnit4,
    bind: () => bind7,
    bindTo: () => bindTo7,
    chain: () => chain7,
    chainEitherK: () => chainEitherK3,
    chainFirst: () => chainFirst7,
    chainFirstEitherK: () => chainFirstEitherK2,
    chainFirstIOK: () => chainFirstIOK2,
    chainFirstTaskK: () => chainFirstTaskK,
    chainIOK: () => chainIOK2,
    chainNullableK: () => chainNullableK3,
    chainOptionK: () => chainOptionK2,
    chainTaskK: () => chainTaskK,
    compact: () => compact7,
    filter: () => filter8,
    filterMap: () => filterMap7,
    flap: () => flap8,
    flatMap: () => flatMap7,
    flatMapIO: () => flatMapIO3,
    flatMapTask: () => flatMapTask2,
    flatten: () => flatten6,
    fold: () => fold3,
    foldW: () => foldW2,
    fromEither: () => fromEither5,
    fromEitherK: () => fromEitherK5,
    fromIO: () => fromIO2,
    fromIOK: () => fromIOK3,
    fromNullable: () => fromNullable3,
    fromNullableK: () => fromNullableK3,
    fromOption: () => fromOption3,
    fromOptionK: () => fromOptionK4,
    fromPredicate: () => fromPredicate5,
    fromTask: () => fromTask2,
    fromTaskEither: () => fromTaskEither,
    fromTaskK: () => fromTaskK2,
    getOrElse: () => getOrElse3,
    getOrElseW: () => getOrElseW2,
    guard: () => guard5,
    let: () => let_7,
    map: () => map10,
    match: () => match5,
    matchE: () => matchE2,
    matchEW: () => matchEW,
    matchW: () => matchW4,
    none: () => none3,
    of: () => of7,
    partition: () => partition7,
    partitionMap: () => partitionMap7,
    separate: () => separate7,
    sequenceArray: () => sequenceArray3,
    sequenceSeqArray: () => sequenceSeqArray2,
    some: () => some8,
    tap: () => tap4,
    tapEither: () => tapEither3,
    tapIO: () => tapIO3,
    tapTask: () => tapTask2,
    traverseArray: () => traverseArray3,
    traverseArrayWithIndex: () => traverseArrayWithIndex3,
    traverseReadonlyArrayWithIndex: () => traverseReadonlyArrayWithIndex3,
    traverseReadonlyArrayWithIndexSeq: () => traverseReadonlyArrayWithIndexSeq2,
    traverseReadonlyNonEmptyArrayWithIndex: () => traverseReadonlyNonEmptyArrayWithIndex3,
    traverseReadonlyNonEmptyArrayWithIndexSeq: () => traverseReadonlyNonEmptyArrayWithIndexSeq2,
    traverseSeqArray: () => traverseSeqArray2,
    traverseSeqArrayWithIndex: () => traverseSeqArrayWithIndex2,
    tryCatch: () => tryCatch2,
    tryCatchK: () => tryCatchK2,
    zero: () => zero5
  });
  var __awaiter, __generator, some8, fromPredicate5, fromOption3, fromEither5, fromIO2, fromTask2, fromTaskEither, match5, matchW4, matchE2, fold3, matchEW, foldW2, getOrElse3, getOrElseW2, fromNullable3, tryCatch2, tryCatchK2, fromNullableK3, chainNullableK3, fromOptionK4, chainOptionK2, map10, ap8, of7, _FromIO2, _FromTask, flatMap7, _FlatMap2, flatMapIO3, flatMapTask2, flatten6, alt6, altW5, zero5, none3, compact7, separate7, filter8, filterMap7, partition7, partitionMap7, _map8, _ap5, _alt5, _filter6, _filterMap6, _partition6, _partitionMap6, URI7, Functor7, as4, asUnit4, flap8, Pointed6, ApplyPar2, apFirst7, apSecond7, ApplicativePar2, _apSeq2, ApplySeq2, ApplicativeSeq2, Chain6, FromEither4, FromIO2, FromTask2, tap4, tapEither3, tapIO3, tapTask2, Alt5, Zero4, guard5, Alternative4, Monad6, MonadIO2, MonadTask2, Compactable5, Filterable5, fromIOK3, chainIOK2, chainFirstIOK2, fromEitherK5, chainEitherK3, chainFirstEitherK2, fromTaskK2, chainTaskK, chainFirstTaskK, Do6, bindTo7, let_7, bind7, apS7, ApT3, traverseReadonlyNonEmptyArrayWithIndex3, traverseReadonlyArrayWithIndex3, traverseReadonlyNonEmptyArrayWithIndexSeq2, traverseReadonlyArrayWithIndexSeq2, traverseArrayWithIndex3, traverseArray3, sequenceArray3, traverseSeqArrayWithIndex2, traverseSeqArray2, sequenceSeqArray2, chain7, chainFirst7;
  var init_TaskOption = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/TaskOption.js"() {
      init_Apply();
      init_Chain();
      init_Compactable();
      init_Filterable();
      init_FromEither();
      init_FromIO();
      init_FromTask();
      init_function();
      init_Functor();
      init_internal();
      init_Option();
      init_OptionT();
      init_Task();
      init_Zero();
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f5, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f5)
            throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
              if (f5 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f5 = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      some8 = /* @__PURE__ */ some5(Pointed5);
      fromPredicate5 = /* @__PURE__ */ fromPredicate4(Pointed5);
      fromOption3 = of6;
      fromEither5 = /* @__PURE__ */ fromEither4(Pointed5);
      fromIO2 = function(ma) {
        return fromTask2(fromIO(ma));
      };
      fromTask2 = /* @__PURE__ */ fromF(Functor5);
      fromTaskEither = /* @__PURE__ */ map7(fromEither3);
      match5 = /* @__PURE__ */ match4(Functor5);
      matchW4 = match5;
      matchE2 = /* @__PURE__ */ matchE(Chain5);
      fold3 = matchE2;
      matchEW = matchE2;
      foldW2 = matchEW;
      getOrElse3 = /* @__PURE__ */ getOrElse2(Monad5);
      getOrElseW2 = getOrElse3;
      fromNullable3 = /* @__PURE__ */ fromNullable2(Pointed5);
      tryCatch2 = function(f5) {
        return function() {
          return __awaiter(void 0, void 0, void 0, function() {
            var reason_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3]);
                  return [4, f5().then(some)];
                case 1:
                  return [2, _a.sent()];
                case 2:
                  reason_1 = _a.sent();
                  return [2, none];
                case 3:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
      };
      tryCatchK2 = function(f5) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return tryCatch2(function() {
            return f5.apply(void 0, a);
          });
        };
      };
      fromNullableK3 = /* @__PURE__ */ fromNullableK2(Pointed5);
      chainNullableK3 = /* @__PURE__ */ chainNullableK2(Monad5);
      fromOptionK4 = /* @__PURE__ */ fromOptionK3(Pointed5);
      chainOptionK2 = /* @__PURE__ */ chainOptionK(Monad5);
      map10 = /* @__PURE__ */ map6(Functor5);
      ap8 = /* @__PURE__ */ ap6(ApplyPar);
      of7 = some8;
      _FromIO2 = {
        fromIO: fromIO2
      };
      _FromTask = {
        fromTask: fromTask2
      };
      flatMap7 = /* @__PURE__ */ dual(2, flatMap5(Monad5));
      _FlatMap2 = {
        flatMap: flatMap7
      };
      flatMapIO3 = /* @__PURE__ */ flatMapIO(_FromIO2, _FlatMap2);
      flatMapTask2 = /* @__PURE__ */ flatMapTask(_FromTask, _FlatMap2);
      flatten6 = /* @__PURE__ */ flatMap7(identity);
      alt6 = /* @__PURE__ */ alt5(Monad5);
      altW5 = alt6;
      zero5 = /* @__PURE__ */ zero4(Pointed5);
      none3 = /* @__PURE__ */ zero5();
      compact7 = /* @__PURE__ */ compact4(Functor5, Compactable3);
      separate7 = /* @__PURE__ */ separate4(Functor5, Compactable3, Functor4);
      filter8 = /* @__PURE__ */ filter5(Functor5, Filterable3);
      filterMap7 = /* @__PURE__ */ filterMap4(Functor5, Filterable3);
      partition7 = /* @__PURE__ */ partition4(Functor5, Filterable3);
      partitionMap7 = /* @__PURE__ */ partitionMap4(Functor5, Filterable3);
      _map8 = function(fa, f5) {
        return pipe(fa, map10(f5));
      };
      _ap5 = function(fab, fa) {
        return pipe(fab, ap8(fa));
      };
      _alt5 = function(fa, that) {
        return pipe(fa, alt6(that));
      };
      _filter6 = function(fa, predicate) {
        return pipe(fa, filter8(predicate));
      };
      _filterMap6 = function(fa, f5) {
        return pipe(fa, filterMap7(f5));
      };
      _partition6 = function(fa, predicate) {
        return pipe(fa, partition7(predicate));
      };
      _partitionMap6 = function(fa, f5) {
        return pipe(fa, partitionMap7(f5));
      };
      URI7 = "TaskOption";
      Functor7 = {
        URI: URI7,
        map: _map8
      };
      as4 = dual(2, as(Functor7));
      asUnit4 = asUnit(Functor7);
      flap8 = /* @__PURE__ */ flap(Functor7);
      Pointed6 = {
        URI: URI7,
        of: of7
      };
      ApplyPar2 = {
        URI: URI7,
        map: _map8,
        ap: _ap5
      };
      apFirst7 = /* @__PURE__ */ apFirst(ApplyPar2);
      apSecond7 = /* @__PURE__ */ apSecond(ApplyPar2);
      ApplicativePar2 = {
        URI: URI7,
        map: _map8,
        ap: _ap5,
        of: of7
      };
      _apSeq2 = function(fab, fa) {
        return flatMap7(fab, function(f5) {
          return pipe(fa, map10(f5));
        });
      };
      ApplySeq2 = {
        URI: URI7,
        map: _map8,
        ap: _apSeq2
      };
      ApplicativeSeq2 = {
        URI: URI7,
        map: _map8,
        ap: _apSeq2,
        of: of7
      };
      Chain6 = {
        URI: URI7,
        map: _map8,
        ap: _ap5,
        chain: flatMap7
      };
      FromEither4 = {
        URI: URI7,
        fromEither: fromEither5
      };
      FromIO2 = {
        URI: URI7,
        fromIO: fromIO2
      };
      FromTask2 = {
        URI: URI7,
        fromIO: fromIO2,
        fromTask: fromTask2
      };
      tap4 = /* @__PURE__ */ dual(2, tap(Chain6));
      tapEither3 = /* @__PURE__ */ dual(2, tapEither(FromEither4, Chain6));
      tapIO3 = /* @__PURE__ */ dual(2, tapIO(FromIO2, Chain6));
      tapTask2 = /* @__PURE__ */ dual(2, tapTask(FromTask2, Chain6));
      Alt5 = {
        URI: URI7,
        map: _map8,
        alt: _alt5
      };
      Zero4 = {
        URI: URI7,
        zero: zero5
      };
      guard5 = /* @__PURE__ */ guard(Zero4, Pointed6);
      Alternative4 = {
        URI: URI7,
        map: _map8,
        ap: _ap5,
        of: of7,
        alt: _alt5,
        zero: zero5
      };
      Monad6 = {
        URI: URI7,
        map: _map8,
        ap: _ap5,
        of: of7,
        chain: flatMap7
      };
      MonadIO2 = {
        URI: URI7,
        map: _map8,
        ap: _ap5,
        of: of7,
        chain: flatMap7,
        fromIO: fromIO2
      };
      MonadTask2 = {
        URI: URI7,
        map: _map8,
        ap: _ap5,
        of: of7,
        chain: flatMap7,
        fromIO: fromIO2,
        fromTask: fromTask2
      };
      Compactable5 = {
        URI: URI7,
        compact: compact7,
        separate: separate7
      };
      Filterable5 = {
        URI: URI7,
        map: _map8,
        compact: compact7,
        separate: separate7,
        filter: _filter6,
        filterMap: _filterMap6,
        partition: _partition6,
        partitionMap: _partitionMap6
      };
      fromIOK3 = /* @__PURE__ */ fromIOK(FromIO2);
      chainIOK2 = flatMapIO3;
      chainFirstIOK2 = tapIO3;
      fromEitherK5 = /* @__PURE__ */ fromEitherK(FromEither4);
      chainEitherK3 = /* @__PURE__ */ chainEitherK(FromEither4, Chain6);
      chainFirstEitherK2 = tapEither3;
      fromTaskK2 = /* @__PURE__ */ fromTaskK(FromTask2);
      chainTaskK = flatMapTask2;
      chainFirstTaskK = tapTask2;
      Do6 = /* @__PURE__ */ of7(emptyRecord);
      bindTo7 = /* @__PURE__ */ bindTo(Functor7);
      let_7 = /* @__PURE__ */ let_(Functor7);
      bind7 = /* @__PURE__ */ bind(Chain6);
      apS7 = /* @__PURE__ */ apS(ApplyPar2);
      ApT3 = /* @__PURE__ */ of7(emptyReadonlyArray);
      traverseReadonlyNonEmptyArrayWithIndex3 = function(f5) {
        return flow(traverseReadonlyNonEmptyArrayWithIndex2(f5), map7(traverseReadonlyNonEmptyArrayWithIndex(SK)));
      };
      traverseReadonlyArrayWithIndex3 = function(f5) {
        var g = traverseReadonlyNonEmptyArrayWithIndex3(f5);
        return function(as5) {
          return isNonEmpty(as5) ? g(as5) : ApT3;
        };
      };
      traverseReadonlyNonEmptyArrayWithIndexSeq2 = function(f5) {
        return function(as5) {
          return function() {
            return tail(as5).reduce(function(acc, a, i) {
              return acc.then(function(obs) {
                return isNone(obs) ? acc : f5(i + 1, a)().then(function(ob) {
                  if (isNone(ob)) {
                    return ob;
                  }
                  obs.value.push(ob.value);
                  return obs;
                });
              });
            }, f5(0, head(as5))().then(map5(singleton)));
          };
        };
      };
      traverseReadonlyArrayWithIndexSeq2 = function(f5) {
        var g = traverseReadonlyNonEmptyArrayWithIndexSeq2(f5);
        return function(as5) {
          return isNonEmpty(as5) ? g(as5) : ApT3;
        };
      };
      traverseArrayWithIndex3 = traverseReadonlyArrayWithIndex3;
      traverseArray3 = function(f5) {
        return traverseReadonlyArrayWithIndex3(function(_, a) {
          return f5(a);
        });
      };
      sequenceArray3 = /* @__PURE__ */ traverseArray3(identity);
      traverseSeqArrayWithIndex2 = traverseReadonlyArrayWithIndexSeq2;
      traverseSeqArray2 = function(f5) {
        return traverseReadonlyArrayWithIndexSeq2(function(_, a) {
          return f5(a);
        });
      };
      sequenceSeqArray2 = /* @__PURE__ */ traverseSeqArray2(identity);
      chain7 = flatMap7;
      chainFirst7 = tap4;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js
  var init_es6 = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js"() {
      init_Array();
      init_HKT();
      init_NonEmptyArray();
      init_Option();
      init_ReadonlyArray();
      init_Record();
      init_Task();
      init_TaskOption();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/function.js
  var require_function = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/function.js"(exports) {
      "use strict";
      var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.dual = exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
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
      var getSemigroup8 = function(S) {
        return function() {
          return {
            concat: function(f5, g) {
              return function(a) {
                return S.concat(f5(a), g(a));
              };
            }
          };
        };
      };
      exports.getSemigroup = getSemigroup8;
      var getMonoid10 = function(M) {
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
      exports.getMonoid = getMonoid10;
      var getSemiring = function(S) {
        return {
          add: function(f5, g) {
            return function(x) {
              return S.add(f5(x), g(x));
            };
          },
          zero: function() {
            return S.zero;
          },
          mul: function(f5, g) {
            return function(x) {
              return S.mul(f5(x), g(x));
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
          sub: function(f5, g) {
            return function(x) {
              return R.sub(f5(x), g(x));
            };
          }
        };
      };
      exports.getRing = getRing;
      var apply2 = function(a) {
        return function(f5) {
          return f5(a);
        };
      };
      exports.apply = apply2;
      function identity3(a) {
        return a;
      }
      exports.identity = identity3;
      exports.unsafeCoerce = identity3;
      function constant4(a) {
        return function() {
          return a;
        };
      }
      exports.constant = constant4;
      exports.constTrue = constant4(true);
      exports.constFalse = constant4(false);
      exports.constNull = constant4(null);
      exports.constUndefined = constant4(void 0);
      exports.constVoid = exports.constUndefined;
      function flip4(f5) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (args.length > 1) {
            return f5(args[1], args[0]);
          }
          return function(a) {
            return f5(a)(args[0]);
          };
        };
      }
      exports.flip = flip4;
      function flow4(ab, bc, cd, de, ef, fg, gh, hi, ij) {
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
      exports.flow = flow4;
      function tuple2() {
        var t = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          t[_i] = arguments[_i];
        }
        return t;
      }
      exports.tuple = tuple2;
      function increment(n) {
        return n + 1;
      }
      exports.increment = increment;
      function decrement(n) {
        return n - 1;
      }
      exports.decrement = decrement;
      function absurd(_) {
        throw new Error("Called `absurd` function which should be uncallable");
      }
      exports.absurd = absurd;
      function tupled2(f5) {
        return function(a) {
          return f5.apply(void 0, a);
        };
      }
      exports.tupled = tupled2;
      function untupled(f5) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return f5(a);
        };
      }
      exports.untupled = untupled;
      function pipe3(a, ab, bc, cd, de, ef, fg, gh, hi) {
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
      exports.pipe = pipe3;
      exports.hole = absurd;
      var SK2 = function(_, b) {
        return b;
      };
      exports.SK = SK2;
      function not3(predicate) {
        return function(a) {
          return !predicate(a);
        };
      }
      exports.not = not3;
      var getEndomorphismMonoid = function() {
        return {
          concat: function(first3, second) {
            return flow4(first3, second);
          },
          empty: identity3
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
            return body.apply(void 0, __spreadArray6([self], args, false));
          };
        };
      };
      exports.dual = dual2;
    }
  });

  // shared/util.tsx
  var mustLoadForApi, mustLoadForUtil, mustLoadForSettings, SpotifyLoc, waitForElement, sleep;
  var init_util = __esm({
    "shared/util.tsx"() {
      "use strict";
      mustLoadForApi = ["CosmosAsync", "GraphQL", "Platform"];
      mustLoadForUtil = ["URI"];
      mustLoadForSettings = ["React", "ReactDOM"];
      ((SpotifyLoc3) => {
        SpotifyLoc3.before = (uri) => ({
          before: { uri }
        });
        SpotifyLoc3.after = (uri) => ({
          after: { uri }
        });
      })(SpotifyLoc || (SpotifyLoc = {}));
      waitForElement = (selector, timeout = 1e3, location = document.body) => new Promise((resolve) => {
        if (document.querySelector(selector))
          return resolve(document.querySelector(selector));
        const res = (v) => {
          observer.disconnect();
          resolve(v);
        };
        let observer = new MutationObserver(async () => {
          if (document.querySelector(selector))
            return res(document.querySelector(selector));
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

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Predicate.js
  var require_Predicate = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Predicate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.and = exports.or = exports.not = exports.Contravariant = exports.getMonoidAll = exports.getSemigroupAll = exports.getMonoidAny = exports.getSemigroupAny = exports.URI = exports.contramap = void 0;
      var function_1 = require_function();
      var contramap_ = function(predicate, f5) {
        return (0, function_1.pipe)(predicate, (0, exports.contramap)(f5));
      };
      var contramap = function(f5) {
        return function(predicate) {
          return (0, function_1.flow)(f5, predicate);
        };
      };
      exports.contramap = contramap;
      exports.URI = "Predicate";
      var getSemigroupAny = function() {
        return {
          concat: function(first3, second) {
            return (0, function_1.pipe)(first3, (0, exports.or)(second));
          }
        };
      };
      exports.getSemigroupAny = getSemigroupAny;
      var getMonoidAny2 = function() {
        return {
          concat: (0, exports.getSemigroupAny)().concat,
          empty: function_1.constFalse
        };
      };
      exports.getMonoidAny = getMonoidAny2;
      var getSemigroupAll = function() {
        return {
          concat: function(first3, second) {
            return (0, function_1.pipe)(first3, (0, exports.and)(second));
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
        contramap: contramap_
      };
      var not3 = function(predicate) {
        return function(a) {
          return !predicate(a);
        };
      };
      exports.not = not3;
      var or = function(second) {
        return function(first3) {
          return function(a) {
            return first3(a) || second(a);
          };
        };
      };
      exports.or = or;
      var and = function(second) {
        return function(first3) {
          return function(a) {
            return first3(a) && second(a);
          };
        };
      };
      exports.and = and;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/internal.js
  var require_internal = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/internal.js"(exports) {
      "use strict";
      var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.flatMapReader = exports.flatMapTask = exports.flatMapIO = exports.flatMapEither = exports.flatMapOption = exports.flatMapNullable = exports.liftOption = exports.liftNullable = exports.fromReadonlyNonEmptyArray = exports.has = exports.emptyRecord = exports.emptyReadonlyArray = exports.tail = exports.head = exports.isNonEmpty = exports.singleton = exports.right = exports.left = exports.isRight = exports.isLeft = exports.some = exports.none = exports.isSome = exports.isNone = void 0;
      var function_1 = require_function();
      var isNone3 = function(fa) {
        return fa._tag === "None";
      };
      exports.isNone = isNone3;
      var isSome4 = function(fa) {
        return fa._tag === "Some";
      };
      exports.isSome = isSome4;
      exports.none = { _tag: "None" };
      var some9 = function(a) {
        return { _tag: "Some", value: a };
      };
      exports.some = some9;
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
      var isNonEmpty6 = function(as5) {
        return as5.length > 0;
      };
      exports.isNonEmpty = isNonEmpty6;
      var head6 = function(as5) {
        return as5[0];
      };
      exports.head = head6;
      var tail6 = function(as5) {
        return as5.slice(1);
      };
      exports.tail = tail6;
      exports.emptyReadonlyArray = [];
      exports.emptyRecord = {};
      exports.has = Object.prototype.hasOwnProperty;
      var fromReadonlyNonEmptyArray3 = function(as5) {
        return __spreadArray6([as5[0]], as5.slice(1), true);
      };
      exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray3;
      var liftNullable = function(F) {
        return function(f5, onNullable) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f5.apply(void 0, a);
            return F.fromEither(o == null ? (0, exports.left)(onNullable.apply(void 0, a)) : (0, exports.right)(o));
          };
        };
      };
      exports.liftNullable = liftNullable;
      var liftOption = function(F) {
        return function(f5, onNone) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f5.apply(void 0, a);
            return F.fromEither((0, exports.isNone)(o) ? (0, exports.left)(onNone.apply(void 0, a)) : (0, exports.right)(o.value));
          };
        };
      };
      exports.liftOption = liftOption;
      var flatMapNullable = function(F, M) {
        return (0, function_1.dual)(3, function(self, f5, onNullable) {
          return M.flatMap(self, (0, exports.liftNullable)(F)(f5, onNullable));
        });
      };
      exports.flatMapNullable = flatMapNullable;
      var flatMapOption = function(F, M) {
        return (0, function_1.dual)(3, function(self, f5, onNone) {
          return M.flatMap(self, (0, exports.liftOption)(F)(f5, onNone));
        });
      };
      exports.flatMapOption = flatMapOption;
      var flatMapEither = function(F, M) {
        return (0, function_1.dual)(2, function(self, f5) {
          return M.flatMap(self, function(a) {
            return F.fromEither(f5(a));
          });
        });
      };
      exports.flatMapEither = flatMapEither;
      var flatMapIO4 = function(F, M) {
        return (0, function_1.dual)(2, function(self, f5) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f5(a));
          });
        });
      };
      exports.flatMapIO = flatMapIO4;
      var flatMapTask3 = function(F, M) {
        return (0, function_1.dual)(2, function(self, f5) {
          return M.flatMap(self, function(a) {
            return F.fromTask(f5(a));
          });
        });
      };
      exports.flatMapTask = flatMapTask3;
      var flatMapReader = function(F, M) {
        return (0, function_1.dual)(2, function(self, f5) {
          return M.flatMap(self, function(a) {
            return F.fromReader(f5(a));
          });
        });
      };
      exports.flatMapReader = flatMapReader;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Apply.js
  var require_Apply = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Apply.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      function ap10(F, G) {
        return function(fa) {
          return function(fab) {
            return F.ap(F.map(fab, function(gab) {
              return function(ga) {
                return G.ap(gab, ga);
              };
            }), fa);
          };
        };
      }
      exports.ap = ap10;
      function apFirst9(A) {
        return function(second) {
          return function(first3) {
            return A.ap(A.map(first3, function(a) {
              return function() {
                return a;
              };
            }), second);
          };
        };
      }
      exports.apFirst = apFirst9;
      function apSecond9(A) {
        return function(second) {
          return function(first3) {
            return A.ap(A.map(first3, function() {
              return function(b) {
                return b;
              };
            }), second);
          };
        };
      }
      exports.apSecond = apSecond9;
      function apS9(F) {
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
      exports.apS = apS9;
      function getApplySemigroup3(F) {
        return function(S) {
          return {
            concat: function(first3, second) {
              return F.ap(F.map(first3, function(x) {
                return function(y) {
                  return S.concat(x, y);
                };
              }), second);
            }
          };
        };
      }
      exports.getApplySemigroup = getApplySemigroup3;
      function curried(f5, n, acc) {
        return function(x) {
          var combined = Array(acc.length + 1);
          for (var i = 0; i < acc.length; i++) {
            combined[i] = acc[i];
          }
          combined[acc.length] = x;
          return n === 0 ? f5.apply(null, combined) : curried(f5, n - 1, combined);
        };
      }
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
      function getTupleConstructor(len) {
        if (!_.has.call(tupleConstructors, len)) {
          tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
        }
        return tupleConstructors[len];
      }
      function sequenceT(F) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var len = args.length;
          var f5 = getTupleConstructor(len);
          var fas = F.map(args[0], f5);
          for (var i = 1; i < len; i++) {
            fas = F.ap(fas, args[i]);
          }
          return fas;
        };
      }
      exports.sequenceT = sequenceT;
      function getRecordConstructor(keys2) {
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
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var r = {};
              for (var i = 0; i < len; i++) {
                r[keys2[i]] = args[i];
              }
              return r;
            }, len - 1, []);
        }
      }
      function sequenceS(F) {
        return function(r) {
          var keys2 = Object.keys(r);
          var len = keys2.length;
          var f5 = getRecordConstructor(keys2);
          var fr = F.map(r[keys2[0]], f5);
          for (var i = 1; i < len; i++) {
            fr = F.ap(fr, r[keys2[i]]);
          }
          return fr;
        };
      }
      exports.sequenceS = sequenceS;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Functor.js
  var require_Functor = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Functor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.asUnit = exports.as = exports.getFunctorComposition = exports.let = exports.bindTo = exports.flap = exports.map = void 0;
      var function_1 = require_function();
      function map13(F, G) {
        return function(f5) {
          return function(fa) {
            return F.map(fa, function(ga) {
              return G.map(ga, f5);
            });
          };
        };
      }
      exports.map = map13;
      function flap9(F) {
        return function(a) {
          return function(fab) {
            return F.map(fab, function(f5) {
              return f5(a);
            });
          };
        };
      }
      exports.flap = flap9;
      function bindTo9(F) {
        return function(name) {
          return function(fa) {
            return F.map(fa, function(a) {
              var _a;
              return _a = {}, _a[name] = a, _a;
            });
          };
        };
      }
      exports.bindTo = bindTo9;
      function let_9(F) {
        return function(name, f5) {
          return function(fa) {
            return F.map(fa, function(a) {
              var _a;
              return Object.assign({}, a, (_a = {}, _a[name] = f5(a), _a));
            });
          };
        };
      }
      exports.let = let_9;
      function getFunctorComposition2(F, G) {
        var _map9 = map13(F, G);
        return {
          map: function(fga, f5) {
            return (0, function_1.pipe)(fga, _map9(f5));
          }
        };
      }
      exports.getFunctorComposition = getFunctorComposition2;
      function as5(F) {
        return function(self, b) {
          return F.map(self, function() {
            return b;
          });
        };
      }
      exports.as = as5;
      function asUnit5(F) {
        var asM = as5(F);
        return function(self) {
          return asM(self, void 0);
        };
      }
      exports.asUnit = asUnit5;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Applicative.js
  var require_Applicative = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Applicative.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getApplicativeComposition = exports.getApplicativeMonoid = void 0;
      var Apply_1 = require_Apply();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      function getApplicativeMonoid2(F) {
        var f5 = (0, Apply_1.getApplySemigroup)(F);
        return function(M) {
          return {
            concat: f5(M).concat,
            empty: F.of(M.empty)
          };
        };
      }
      exports.getApplicativeMonoid = getApplicativeMonoid2;
      function getApplicativeComposition(F, G) {
        var map13 = (0, Functor_1.getFunctorComposition)(F, G).map;
        var _ap6 = (0, Apply_1.ap)(F, G);
        return {
          map: map13,
          of: function(a) {
            return F.of(G.of(a));
          },
          ap: function(fgab, fga) {
            return (0, function_1.pipe)(fgab, _ap6(fga));
          }
        };
      }
      exports.getApplicativeComposition = getApplicativeComposition;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Chain.js
  var require_Chain = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Chain.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bind = exports.tap = exports.chainFirst = void 0;
      function chainFirst8(M) {
        var tapM = tap5(M);
        return function(f5) {
          return function(first3) {
            return tapM(first3, f5);
          };
        };
      }
      exports.chainFirst = chainFirst8;
      function tap5(M) {
        return function(first3, f5) {
          return M.chain(first3, function(a) {
            return M.map(f5(a), function() {
              return a;
            });
          });
        };
      }
      exports.tap = tap5;
      function bind9(M) {
        return function(name, f5) {
          return function(ma) {
            return M.chain(ma, function(a) {
              return M.map(f5(a), function(b) {
                var _a;
                return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
              });
            });
          };
        };
      }
      exports.bind = bind9;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/FromEither.js
  var require_FromEither = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/FromEither.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.tapEither = exports.filterOrElse = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromPredicate = exports.fromOption = void 0;
      var Chain_1 = require_Chain();
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      function fromOption4(F) {
        return function(onNone) {
          return function(ma) {
            return F.fromEither(_.isNone(ma) ? _.left(onNone()) : _.right(ma.value));
          };
        };
      }
      exports.fromOption = fromOption4;
      function fromPredicate7(F) {
        return function(predicate, onFalse) {
          return function(a) {
            return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
          };
        };
      }
      exports.fromPredicate = fromPredicate7;
      function fromOptionK5(F) {
        var fromOptionF = fromOption4(F);
        return function(onNone) {
          var from = fromOptionF(onNone);
          return function(f5) {
            return (0, function_1.flow)(f5, from);
          };
        };
      }
      exports.fromOptionK = fromOptionK5;
      function chainOptionK3(F, M) {
        var fromOptionKF = fromOptionK5(F);
        return function(onNone) {
          var from = fromOptionKF(onNone);
          return function(f5) {
            return function(ma) {
              return M.chain(ma, from(f5));
            };
          };
        };
      }
      exports.chainOptionK = chainOptionK3;
      function fromEitherK6(F) {
        return function(f5) {
          return (0, function_1.flow)(f5, F.fromEither);
        };
      }
      exports.fromEitherK = fromEitherK6;
      function chainEitherK4(F, M) {
        var fromEitherKF = fromEitherK6(F);
        return function(f5) {
          return function(ma) {
            return M.chain(ma, fromEitherKF(f5));
          };
        };
      }
      exports.chainEitherK = chainEitherK4;
      function chainFirstEitherK3(F, M) {
        var tapEitherM = tapEither4(F, M);
        return function(f5) {
          return function(ma) {
            return tapEitherM(ma, f5);
          };
        };
      }
      exports.chainFirstEitherK = chainFirstEitherK3;
      function filterOrElse(F, M) {
        return function(predicate, onFalse) {
          return function(ma) {
            return M.chain(ma, function(a) {
              return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
            });
          };
        };
      }
      exports.filterOrElse = filterOrElse;
      function tapEither4(F, M) {
        var fromEither6 = fromEitherK6(F);
        var tapM = (0, Chain_1.tap)(M);
        return function(self, f5) {
          return tapM(self, fromEither6(f5));
        };
      }
      exports.tapEither = tapEither4;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Magma.js
  var require_Magma = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Magma.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.concatAll = exports.endo = exports.filterSecond = exports.filterFirst = exports.reverse = void 0;
      var reverse6 = function(M) {
        return {
          concat: function(first3, second) {
            return M.concat(second, first3);
          }
        };
      };
      exports.reverse = reverse6;
      var filterFirst = function(predicate) {
        return function(M) {
          return {
            concat: function(first3, second) {
              return predicate(first3) ? M.concat(first3, second) : second;
            }
          };
        };
      };
      exports.filterFirst = filterFirst;
      var filterSecond = function(predicate) {
        return function(M) {
          return {
            concat: function(first3, second) {
              return predicate(second) ? M.concat(first3, second) : first3;
            }
          };
        };
      };
      exports.filterSecond = filterSecond;
      var endo = function(f5) {
        return function(M) {
          return {
            concat: function(first3, second) {
              return M.concat(f5(first3), f5(second));
            }
          };
        };
      };
      exports.endo = endo;
      var concatAll6 = function(M) {
        return function(startWith) {
          return function(as5) {
            return as5.reduce(function(a, acc) {
              return M.concat(a, acc);
            }, startWith);
          };
        };
      };
      exports.concatAll = concatAll6;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Eq.js
  var require_Eq = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Eq.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.eqDate = exports.eqNumber = exports.eqString = exports.eqBoolean = exports.eq = exports.strictEqual = exports.getStructEq = exports.getTupleEq = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.eqStrict = exports.URI = exports.contramap = exports.tuple = exports.struct = exports.fromEquals = void 0;
      var function_1 = require_function();
      var fromEquals2 = function(equals) {
        return {
          equals: function(x, y) {
            return x === y || equals(x, y);
          }
        };
      };
      exports.fromEquals = fromEquals2;
      var struct2 = function(eqs) {
        return (0, exports.fromEquals)(function(first3, second) {
          for (var key in eqs) {
            if (!eqs[key].equals(first3[key], second[key])) {
              return false;
            }
          }
          return true;
        });
      };
      exports.struct = struct2;
      var tuple2 = function() {
        var eqs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          eqs[_i] = arguments[_i];
        }
        return (0, exports.fromEquals)(function(first3, second) {
          return eqs.every(function(E, i) {
            return E.equals(first3[i], second[i]);
          });
        });
      };
      exports.tuple = tuple2;
      var contramap_ = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f5));
      };
      var contramap = function(f5) {
        return function(fa) {
          return (0, exports.fromEquals)(function(x, y) {
            return fa.equals(f5(x), f5(y));
          });
        };
      };
      exports.contramap = contramap;
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
      var getSemigroup8 = function() {
        return {
          concat: function(x, y) {
            return (0, exports.fromEquals)(function(a, b) {
              return x.equals(a, b) && y.equals(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup8;
      var getMonoid10 = function() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: empty7
        };
      };
      exports.getMonoid = getMonoid10;
      exports.Contravariant = {
        URI: exports.URI,
        contramap: contramap_
      };
      exports.getTupleEq = exports.tuple;
      exports.getStructEq = exports.struct;
      exports.strictEqual = exports.eqStrict.equals;
      exports.eq = exports.Contravariant;
      exports.eqBoolean = exports.eqStrict;
      exports.eqString = exports.eqStrict;
      exports.eqNumber = exports.eqStrict;
      exports.eqDate = {
        equals: function(first3, second) {
          return first3.valueOf() === second.valueOf();
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Ord.js
  var require_Ord = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Ord.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ordDate = exports.ordNumber = exports.ordString = exports.ordBoolean = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.equals = exports.trivial = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.URI = exports.contramap = exports.reverse = exports.tuple = exports.fromCompare = exports.equalsDefault = void 0;
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var equalsDefault2 = function(compare3) {
        return function(first3, second) {
          return first3 === second || compare3(first3, second) === 0;
        };
      };
      exports.equalsDefault = equalsDefault2;
      var fromCompare2 = function(compare3) {
        return {
          equals: (0, exports.equalsDefault)(compare3),
          compare: function(first3, second) {
            return first3 === second ? 0 : compare3(first3, second);
          }
        };
      };
      exports.fromCompare = fromCompare2;
      var tuple2 = function() {
        var ords = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          ords[_i] = arguments[_i];
        }
        return (0, exports.fromCompare)(function(first3, second) {
          var i = 0;
          for (; i < ords.length - 1; i++) {
            var r = ords[i].compare(first3[i], second[i]);
            if (r !== 0) {
              return r;
            }
          }
          return ords[i].compare(first3[i], second[i]);
        });
      };
      exports.tuple = tuple2;
      var reverse6 = function(O2) {
        return (0, exports.fromCompare)(function(first3, second) {
          return O2.compare(second, first3);
        });
      };
      exports.reverse = reverse6;
      var contramap_ = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f5));
      };
      var contramap = function(f5) {
        return function(fa) {
          return (0, exports.fromCompare)(function(first3, second) {
            return fa.compare(f5(first3), f5(second));
          });
        };
      };
      exports.contramap = contramap;
      exports.URI = "Ord";
      var getSemigroup8 = function() {
        return {
          concat: function(first3, second) {
            return (0, exports.fromCompare)(function(a, b) {
              var ox = first3.compare(a, b);
              return ox !== 0 ? ox : second.compare(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup8;
      var getMonoid10 = function() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: (0, exports.fromCompare)(function() {
            return 0;
          })
        };
      };
      exports.getMonoid = getMonoid10;
      exports.Contravariant = {
        URI: exports.URI,
        contramap: contramap_
      };
      exports.trivial = {
        equals: function_1.constTrue,
        compare: /* @__PURE__ */ (0, function_1.constant)(0)
      };
      var equals = function(O2) {
        return function(second) {
          return function(first3) {
            return first3 === second || O2.compare(first3, second) === 0;
          };
        };
      };
      exports.equals = equals;
      var lt = function(O2) {
        return function(first3, second) {
          return O2.compare(first3, second) === -1;
        };
      };
      exports.lt = lt;
      var gt = function(O2) {
        return function(first3, second) {
          return O2.compare(first3, second) === 1;
        };
      };
      exports.gt = gt;
      var leq = function(O2) {
        return function(first3, second) {
          return O2.compare(first3, second) !== 1;
        };
      };
      exports.leq = leq;
      var geq = function(O2) {
        return function(first3, second) {
          return O2.compare(first3, second) !== -1;
        };
      };
      exports.geq = geq;
      var min5 = function(O2) {
        return function(first3, second) {
          return first3 === second || O2.compare(first3, second) < 1 ? first3 : second;
        };
      };
      exports.min = min5;
      var max5 = function(O2) {
        return function(first3, second) {
          return first3 === second || O2.compare(first3, second) > -1 ? first3 : second;
        };
      };
      exports.max = max5;
      var clamp = function(O2) {
        var minO = (0, exports.min)(O2);
        var maxO = (0, exports.max)(O2);
        return function(low, hi) {
          return function(a) {
            return maxO(minO(a, hi), low);
          };
        };
      };
      exports.clamp = clamp;
      var between = function(O2) {
        var ltO = (0, exports.lt)(O2);
        var gtO = (0, exports.gt)(O2);
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
      function compare2(first3, second) {
        return first3 < second ? -1 : first3 > second ? 1 : 0;
      }
      var strictOrd2 = {
        equals: Eq_1.eqStrict.equals,
        compare: compare2
      };
      exports.ordBoolean = strictOrd2;
      exports.ordString = strictOrd2;
      exports.ordNumber = strictOrd2;
      exports.ordDate = (0, function_1.pipe)(
        exports.ordNumber,
        /* @__PURE__ */ (0, exports.contramap)(function(date) {
          return date.valueOf();
        })
      );
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Semigroup.js
  var require_Semigroup = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Semigroup.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.semigroupProduct = exports.semigroupSum = exports.semigroupString = exports.getFunctionSemigroup = exports.semigroupAny = exports.semigroupAll = exports.fold = exports.getIntercalateSemigroup = exports.getMeetSemigroup = exports.getJoinSemigroup = exports.getDualSemigroup = exports.getStructSemigroup = exports.getTupleSemigroup = exports.getFirstSemigroup = exports.getLastSemigroup = exports.getObjectSemigroup = exports.semigroupVoid = exports.concatAll = exports.last = exports.first = exports.intercalate = exports.tuple = exports.struct = exports.reverse = exports.constant = exports.max = exports.min = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      var M = __importStar(require_Magma());
      var Or = __importStar(require_Ord());
      var min5 = function(O2) {
        return {
          concat: Or.min(O2)
        };
      };
      exports.min = min5;
      var max5 = function(O2) {
        return {
          concat: Or.max(O2)
        };
      };
      exports.max = max5;
      var constant4 = function(a) {
        return {
          concat: function() {
            return a;
          }
        };
      };
      exports.constant = constant4;
      exports.reverse = M.reverse;
      var struct2 = function(semigroups) {
        return {
          concat: function(first4, second) {
            var r = {};
            for (var k in semigroups) {
              if (_.has.call(semigroups, k)) {
                r[k] = semigroups[k].concat(first4[k], second[k]);
              }
            }
            return r;
          }
        };
      };
      exports.struct = struct2;
      var tuple2 = function() {
        var semigroups = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          semigroups[_i] = arguments[_i];
        }
        return {
          concat: function(first4, second) {
            return semigroups.map(function(s, i) {
              return s.concat(first4[i], second[i]);
            });
          }
        };
      };
      exports.tuple = tuple2;
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
      var first3 = function() {
        return { concat: function_1.identity };
      };
      exports.first = first3;
      var last6 = function() {
        return { concat: function(_2, y) {
          return y;
        } };
      };
      exports.last = last6;
      exports.concatAll = M.concatAll;
      exports.semigroupVoid = (0, exports.constant)(void 0);
      var getObjectSemigroup = function() {
        return {
          concat: function(first4, second) {
            return Object.assign({}, first4, second);
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
      function fold4(S) {
        var concatAllS = (0, exports.concatAll)(S);
        return function(startWith, as5) {
          return as5 === void 0 ? concatAllS(startWith) : concatAllS(startWith)(as5);
        };
      }
      exports.fold = fold4;
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Separated.js
  var require_Separated = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Separated.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = void 0;
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var separated2 = function(left2, right2) {
        return { left: left2, right: right2 };
      };
      exports.separated = separated2;
      var _map9 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f5));
      };
      var _mapLeft = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f5));
      };
      var _bimap = function(fa, g, f5) {
        return (0, function_1.pipe)(fa, (0, exports.bimap)(g, f5));
      };
      var map13 = function(f5) {
        return function(fa) {
          return (0, exports.separated)((0, exports.left)(fa), f5((0, exports.right)(fa)));
        };
      };
      exports.map = map13;
      var mapLeft = function(f5) {
        return function(fa) {
          return (0, exports.separated)(f5((0, exports.left)(fa)), (0, exports.right)(fa));
        };
      };
      exports.mapLeft = mapLeft;
      var bimap = function(f5, g) {
        return function(fa) {
          return (0, exports.separated)(f5((0, exports.left)(fa)), g((0, exports.right)(fa)));
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
        map: _map9
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Witherable.js
  var require_Witherable = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Witherable.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.filterE = exports.witherDefault = exports.wiltDefault = void 0;
      var _ = __importStar(require_internal());
      function wiltDefault2(T, C) {
        return function(F) {
          var traverseF = T.traverse(F);
          return function(wa, f5) {
            return F.map(traverseF(wa, f5), C.separate);
          };
        };
      }
      exports.wiltDefault = wiltDefault2;
      function witherDefault2(T, C) {
        return function(F) {
          var traverseF = T.traverse(F);
          return function(wa, f5) {
            return F.map(traverseF(wa, f5), C.compact);
          };
        };
      }
      exports.witherDefault = witherDefault2;
      function filterE4(W) {
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
      }
      exports.filterE = filterE4;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Zero.js
  var require_Zero = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Zero.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.guard = void 0;
      function guard7(F, P) {
        return function(b) {
          return b ? P.of(void 0) : F.zero();
        };
      }
      exports.guard = guard7;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Option.js
  var require_Option = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Option.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.Witherable = exports.wilt = exports.wither = exports.Traversable = exports.sequence = exports.traverse = exports.Filterable = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.Compactable = exports.separate = exports.compact = exports.Extend = exports.extend = exports.Alternative = exports.guard = exports.Zero = exports.zero = exports.Alt = exports.alt = exports.altW = exports.orElse = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.flatMap = exports.Applicative = exports.Apply = exports.ap = exports.Pointed = exports.of = exports.asUnit = exports.as = exports.Functor = exports.map = exports.getMonoid = exports.getOrd = exports.getEq = exports.getShow = exports.URI = exports.getRight = exports.getLeft = exports.fromPredicate = exports.some = exports.none = void 0;
      exports.getFirstMonoid = exports.getApplyMonoid = exports.getApplySemigroup = exports.option = exports.mapNullable = exports.getRefinement = exports.chainFirst = exports.chain = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toUndefined = exports.toNullable = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.duplicate = exports.tapEither = exports.tap = exports.flatten = exports.apSecond = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.isNone = exports.isSome = exports.FromEither = exports.fromEither = exports.MonadThrow = exports.throwError = void 0;
      exports.getLastMonoid = void 0;
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
      function fromPredicate7(predicate) {
        return function(a) {
          return predicate(a) ? (0, exports.some)(a) : exports.none;
        };
      }
      exports.fromPredicate = fromPredicate7;
      var getLeft2 = function(ma) {
        return ma._tag === "Right" ? exports.none : (0, exports.some)(ma.left);
      };
      exports.getLeft = getLeft2;
      var getRight2 = function(ma) {
        return ma._tag === "Left" ? exports.none : (0, exports.some)(ma.right);
      };
      exports.getRight = getRight2;
      var _map9 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f5));
      };
      var _ap6 = function(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _reduce7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f5));
      };
      var _foldMap7 = function(M) {
        var foldMapM = (0, exports.foldMap)(M);
        return function(fa, f5) {
          return (0, function_1.pipe)(fa, foldMapM(f5));
        };
      };
      var _reduceRight7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f5));
      };
      var _traverse7 = function(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f5) {
          return (0, function_1.pipe)(ta, traverseF(f5));
        };
      };
      var _alt6 = function(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _filter7 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
      };
      var _filterMap7 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.filterMap)(f5));
      };
      var _extend5 = function(wa, f5) {
        return (0, function_1.pipe)(wa, (0, exports.extend)(f5));
      };
      var _partition7 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
      };
      var _partitionMap7 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f5));
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
      var getOrd4 = function(O2) {
        return {
          equals: (0, exports.getEq)(O2).equals,
          compare: function(x, y) {
            return x === y ? 0 : (0, exports.isSome)(x) ? (0, exports.isSome)(y) ? O2.compare(x.value, y.value) : 1 : -1;
          }
        };
      };
      exports.getOrd = getOrd4;
      var getMonoid10 = function(S) {
        return {
          concat: function(x, y) {
            return (0, exports.isNone)(x) ? y : (0, exports.isNone)(y) ? x : (0, exports.some)(S.concat(x.value, y.value));
          },
          empty: exports.none
        };
      };
      exports.getMonoid = getMonoid10;
      var map13 = function(f5) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : (0, exports.some)(f5(fa.value));
        };
      };
      exports.map = map13;
      exports.Functor = {
        URI: exports.URI,
        map: _map9
      };
      exports.as = (0, function_1.dual)(2, (0, Functor_1.as)(exports.Functor));
      exports.asUnit = (0, Functor_1.asUnit)(exports.Functor);
      exports.of = exports.some;
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      var ap10 = function(fa) {
        return function(fab) {
          return (0, exports.isNone)(fab) ? exports.none : (0, exports.isNone)(fa) ? exports.none : (0, exports.some)(fab.value(fa.value));
        };
      };
      exports.ap = ap10;
      exports.Apply = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6
      };
      exports.Applicative = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of
      };
      exports.flatMap = (0, function_1.dual)(2, function(ma, f5) {
        return (0, exports.isNone)(ma) ? exports.none : f5(ma.value);
      });
      exports.Chain = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        chain: exports.flatMap
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of,
        chain: exports.flatMap
      };
      var reduce8 = function(b, f5) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? b : f5(b, fa.value);
        };
      };
      exports.reduce = reduce8;
      var foldMap8 = function(M) {
        return function(f5) {
          return function(fa) {
            return (0, exports.isNone)(fa) ? M.empty : f5(fa.value);
          };
        };
      };
      exports.foldMap = foldMap8;
      var reduceRight8 = function(b, f5) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? b : f5(fa.value, b);
        };
      };
      exports.reduceRight = reduceRight8;
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7
      };
      exports.orElse = (0, function_1.dual)(2, function(self, that) {
        return (0, exports.isNone)(self) ? that() : self;
      });
      exports.altW = exports.orElse;
      exports.alt = exports.orElse;
      exports.Alt = {
        URI: exports.URI,
        map: _map9,
        alt: _alt6
      };
      var zero6 = function() {
        return exports.none;
      };
      exports.zero = zero6;
      exports.Zero = {
        URI: exports.URI,
        zero: exports.zero
      };
      exports.guard = (0, Zero_1.guard)(exports.Zero, exports.Pointed);
      exports.Alternative = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of,
        alt: _alt6,
        zero: exports.zero
      };
      var extend5 = function(f5) {
        return function(wa) {
          return (0, exports.isNone)(wa) ? exports.none : (0, exports.some)(f5(wa));
        };
      };
      exports.extend = extend5;
      exports.Extend = {
        URI: exports.URI,
        map: _map9,
        extend: _extend5
      };
      exports.compact = (0, exports.flatMap)(function_1.identity);
      var defaultSeparated2 = /* @__PURE__ */ (0, Separated_1.separated)(exports.none, exports.none);
      var separate8 = function(ma) {
        return (0, exports.isNone)(ma) ? defaultSeparated2 : (0, Separated_1.separated)((0, exports.getLeft)(ma.value), (0, exports.getRight)(ma.value));
      };
      exports.separate = separate8;
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      var filter9 = function(predicate) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : predicate(fa.value) ? fa : exports.none;
        };
      };
      exports.filter = filter9;
      var filterMap8 = function(f5) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : f5(fa.value);
        };
      };
      exports.filterMap = filterMap8;
      var partition8 = function(predicate) {
        return function(fa) {
          return (0, Separated_1.separated)(_filter7(fa, (0, Predicate_1.not)(predicate)), _filter7(fa, predicate));
        };
      };
      exports.partition = partition8;
      var partitionMap8 = function(f5) {
        return (0, function_1.flow)((0, exports.map)(f5), exports.separate);
      };
      exports.partitionMap = partitionMap8;
      exports.Filterable = {
        URI: exports.URI,
        map: _map9,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter7,
        filterMap: _filterMap7,
        partition: _partition7,
        partitionMap: _partitionMap7
      };
      var traverse7 = function(F) {
        return function(f5) {
          return function(ta) {
            return (0, exports.isNone)(ta) ? F.of(exports.none) : F.map(f5(ta.value), exports.some);
          };
        };
      };
      exports.traverse = traverse7;
      var sequence7 = function(F) {
        return function(ta) {
          return (0, exports.isNone)(ta) ? F.of(exports.none) : F.map(ta.value, exports.some);
        };
      };
      exports.sequence = sequence7;
      exports.Traversable = {
        URI: exports.URI,
        map: _map9,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence
      };
      var _wither5 = /* @__PURE__ */ (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
      var _wilt5 = /* @__PURE__ */ (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
      var wither5 = function(F) {
        var _witherF = _wither5(F);
        return function(f5) {
          return function(fa) {
            return _witherF(fa, f5);
          };
        };
      };
      exports.wither = wither5;
      var wilt5 = function(F) {
        var _wiltF = _wilt5(F);
        return function(f5) {
          return function(fa) {
            return _wiltF(fa, f5);
          };
        };
      };
      exports.wilt = wilt5;
      exports.Witherable = {
        URI: exports.URI,
        map: _map9,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter7,
        filterMap: _filterMap7,
        partition: _partition7,
        partitionMap: _partitionMap7,
        wither: _wither5,
        wilt: _wilt5
      };
      var throwError2 = function() {
        return exports.none;
      };
      exports.throwError = throwError2;
      exports.MonadThrow = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
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
      var matchW5 = function(onNone, onSome) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? onNone() : onSome(ma.value);
        };
      };
      exports.matchW = matchW5;
      exports.foldW = exports.matchW;
      exports.match = exports.matchW;
      exports.fold = exports.match;
      var getOrElseW3 = function(onNone) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? onNone() : ma.value;
        };
      };
      exports.getOrElseW = getOrElseW3;
      exports.getOrElse = exports.getOrElseW;
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
      exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
      exports.flatten = exports.compact;
      exports.tap = (0, function_1.dual)(2, chainable.tap(exports.Chain));
      exports.tapEither = (0, function_1.dual)(2, (0, FromEither_1.tapEither)(exports.FromEither, exports.Chain));
      exports.duplicate = (0, exports.extend)(function_1.identity);
      exports.fromEitherK = (0, FromEither_1.fromEitherK)(exports.FromEither);
      exports.chainEitherK = /* @__PURE__ */ (0, FromEither_1.chainEitherK)(exports.FromEither, exports.Chain);
      exports.chainFirstEitherK = exports.tapEither;
      var fromNullable4 = function(a) {
        return a == null ? exports.none : (0, exports.some)(a);
      };
      exports.fromNullable = fromNullable4;
      var tryCatch3 = function(f5) {
        try {
          return (0, exports.some)(f5());
        } catch (e) {
          return exports.none;
        }
      };
      exports.tryCatch = tryCatch3;
      var tryCatchK3 = function(f5) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return (0, exports.tryCatch)(function() {
            return f5.apply(void 0, a);
          });
        };
      };
      exports.tryCatchK = tryCatchK3;
      var fromNullableK4 = function(f5) {
        return (0, function_1.flow)(f5, exports.fromNullable);
      };
      exports.fromNullableK = fromNullableK4;
      var chainNullableK4 = function(f5) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? exports.none : (0, exports.fromNullable)(f5(ma.value));
        };
      };
      exports.chainNullableK = chainNullableK4;
      exports.toNullable = (0, exports.match)(function_1.constNull, function_1.identity);
      exports.toUndefined = (0, exports.match)(function_1.constUndefined, function_1.identity);
      function elem6(E) {
        return function(a, ma) {
          if (ma === void 0) {
            var elemE_1 = elem6(E);
            return function(ma2) {
              return elemE_1(a, ma2);
            };
          }
          return (0, exports.isNone)(ma) ? false : E.equals(a, ma.value);
        };
      }
      exports.elem = elem6;
      var exists4 = function(predicate) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? false : predicate(ma.value);
        };
      };
      exports.exists = exists4;
      exports.Do = (0, exports.of)(_.emptyRecord);
      exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
      var let_9 = /* @__PURE__ */ (0, Functor_1.let)(exports.Functor);
      exports.let = let_9;
      exports.bind = chainable.bind(exports.Chain);
      exports.apS = (0, Apply_1.apS)(exports.Apply);
      exports.ApT = (0, exports.of)(_.emptyReadonlyArray);
      var traverseReadonlyNonEmptyArrayWithIndex4 = function(f5) {
        return function(as5) {
          var o = f5(0, _.head(as5));
          if ((0, exports.isNone)(o)) {
            return exports.none;
          }
          var out = [o.value];
          for (var i = 1; i < as5.length; i++) {
            var o_1 = f5(i, as5[i]);
            if ((0, exports.isNone)(o_1)) {
              return exports.none;
            }
            out.push(o_1.value);
          }
          return (0, exports.some)(out);
        };
      };
      exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex4;
      var traverseReadonlyArrayWithIndex4 = function(f5) {
        var g = (0, exports.traverseReadonlyNonEmptyArrayWithIndex)(f5);
        return function(as5) {
          return _.isNonEmpty(as5) ? g(as5) : exports.ApT;
        };
      };
      exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex4;
      exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
      var traverseArray4 = function(f5) {
        return (0, exports.traverseReadonlyArrayWithIndex)(function(_2, a) {
          return f5(a);
        });
      };
      exports.traverseArray = traverseArray4;
      exports.sequenceArray = /* @__PURE__ */ (0, exports.traverseArray)(function_1.identity);
      exports.chain = exports.flatMap;
      exports.chainFirst = exports.tap;
      function getRefinement2(getOption) {
        return function(a) {
          return (0, exports.isSome)(getOption(a));
        };
      }
      exports.getRefinement = getRefinement2;
      exports.mapNullable = exports.chainNullableK;
      exports.option = {
        URI: exports.URI,
        map: _map9,
        of: exports.of,
        ap: _ap6,
        chain: exports.flatMap,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        zero: exports.zero,
        alt: _alt6,
        extend: _extend5,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter7,
        filterMap: _filterMap7,
        partition: _partition7,
        partitionMap: _partitionMap7,
        wither: _wither5,
        wilt: _wilt5,
        throwError: exports.throwError
      };
      exports.getApplySemigroup = (0, Apply_1.getApplySemigroup)(exports.Apply);
      exports.getApplyMonoid = (0, Applicative_1.getApplicativeMonoid)(exports.Applicative);
      var getFirstMonoid2 = function() {
        return (0, exports.getMonoid)((0, Semigroup_1.first)());
      };
      exports.getFirstMonoid = getFirstMonoid2;
      var getLastMonoid2 = function() {
        return (0, exports.getMonoid)((0, Semigroup_1.last)());
      };
      exports.getLastMonoid = getLastMonoid2;
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js
  var O, import_function19, import_Predicate3, import_Semigroup2, import_Functor10, import_Apply9, import_Chain7, URI8, map12, Functor8, of8, ap9, Applicative5, apFirst8, apSecond8, chain8, Monad7, Do7, bindTo8, bind8, apS8, let_8, unary, guard6, unless, when, invoke, invokeNullary, curry2T, curry2, curry3T, curry3, curry4T, curry4, curry5T, curry5, applyEvery;
  var init_Function = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js"() {
      O = __toESM(require_Option());
      init_Array();
      import_function19 = __toESM(require_function());
      import_Predicate3 = __toESM(require_Predicate());
      init_Endomorphism();
      init_Monoid();
      import_Semigroup2 = __toESM(require_Semigroup());
      import_Functor10 = __toESM(require_Functor());
      import_Apply9 = __toESM(require_Apply());
      import_Chain7 = __toESM(require_Chain());
      URI8 = "Function";
      map12 = (f5) => (g) => (0, import_function19.flow)(g, f5);
      Functor8 = {
        URI: URI8,
        map: (f5, g) => map12(g)(f5)
      };
      of8 = import_function19.constant;
      ap9 = (f5) => (g) => (x) => g(x)(f5(x));
      Applicative5 = {
        ...Functor8,
        of: of8,
        ap: (f5, g) => ap9(g)(f5)
      };
      apFirst8 = (0, import_Apply9.apFirst)(Applicative5);
      apSecond8 = (0, import_Apply9.apSecond)(Applicative5);
      chain8 = (f5) => (g) => (x) => f5(g(x))(x);
      Monad7 = {
        ...Applicative5,
        chain: (f5, g) => chain8(g)(f5)
      };
      Do7 = of8({});
      bindTo8 = (0, import_Functor10.bindTo)(Functor8);
      bind8 = (0, import_Chain7.bind)(Monad7);
      apS8 = (0, import_Apply9.apS)(Applicative5);
      let_8 = (0, import_Functor10.let)(Functor8);
      unary = import_function19.tupled;
      guard6 = (branches) => (fallback) => (input) => (0, import_function19.pipe)(branches, map4(([f5, g]) => (0, import_function19.flow)(O.fromPredicate(f5), O.map(g))), concatAll5((0, import_function19.getMonoid)(O.getMonoid((0, import_Semigroup2.first)()))()), (0, import_function19.apply)(input), O.getOrElse(() => fallback(input)));
      unless = (f5) => (onFalse) => (x) => f5(x) ? x : onFalse(x);
      when = (0, import_function19.flow)(import_Predicate3.not, unless);
      invoke = (x) => (ys) => (z) => z[x](...ys);
      invokeNullary = (0, import_function19.flip)(invoke)([]);
      curry2T = (f5) => (a) => (b) => f5([a, b]);
      curry2 = (0, import_function19.flow)(unary, curry2T);
      curry3T = (f5) => (a) => (b) => (c) => f5([a, b, c]);
      curry3 = (0, import_function19.flow)(unary, curry3T);
      curry4T = (f5) => (a) => (b) => (c) => (d) => f5([a, b, c, d]);
      curry4 = (0, import_function19.flow)(unary, curry4T);
      curry5T = (f5) => (a) => (b) => (c) => (d) => (e) => f5([a, b, c, d, e]);
      curry5 = (0, import_function19.flow)(unary, curry5T);
      applyEvery = concatAll5(getMonoid5());
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js
  var require_ReadonlyNonEmptyArray = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reduceRight = exports.foldMap = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.flatMap = exports.ap = exports.alt = exports.altW = exports.of = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.modifyAt = exports.updateAt = exports.sort = exports.groupBy = exports.group = exports.reverse = exports.concat = exports.concatW = exports.fromArray = exports.unappend = exports.unprepend = exports.range = exports.replicate = exports.makeBy = exports.fromReadonlyArray = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.appendW = exports.prepend = exports.prependW = exports.isOutOfBound = exports.isNonEmpty = exports.empty = void 0;
      exports.groupSort = exports.chain = exports.intercalate = exports.updateLast = exports.modifyLast = exports.updateHead = exports.modifyHead = exports.matchRight = exports.matchLeft = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getUnionSemigroup = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = void 0;
      exports.readonlyNonEmptyArray = exports.fold = exports.prependToAll = exports.insertAt = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = void 0;
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
      var isOutOfBound5 = function(i, as5) {
        return i < 0 || i >= as5.length;
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
      var unsafeInsertAt5 = function(i, a, as5) {
        if ((0, exports.isNonEmpty)(as5)) {
          var xs = _.fromReadonlyNonEmptyArray(as5);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      exports.unsafeInsertAt = unsafeInsertAt5;
      var unsafeUpdateAt5 = function(i, a, as5) {
        if (as5[i] === a) {
          return as5;
        } else {
          var xs = _.fromReadonlyNonEmptyArray(as5);
          xs[i] = a;
          return xs;
        }
      };
      exports.unsafeUpdateAt = unsafeUpdateAt5;
      var uniq5 = function(E) {
        return function(as5) {
          if (as5.length === 1) {
            return as5;
          }
          var out = [(0, exports.head)(as5)];
          var rest = (0, exports.tail)(as5);
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
      exports.uniq = uniq5;
      var sortBy5 = function(ords) {
        if ((0, exports.isNonEmpty)(ords)) {
          var M = (0, Ord_1.getMonoid)();
          return (0, exports.sort)(ords.reduce(M.concat, M.empty));
        }
        return function_1.identity;
      };
      exports.sortBy = sortBy5;
      var union7 = function(E) {
        var uniqE = (0, exports.uniq)(E);
        return function(second) {
          return function(first3) {
            return uniqE((0, function_1.pipe)(first3, concat5(second)));
          };
        };
      };
      exports.union = union7;
      var rotate5 = function(n) {
        return function(as5) {
          var len = as5.length;
          var m = Math.round(n) % len;
          if ((0, exports.isOutOfBound)(Math.abs(m), as5) || m === 0) {
            return as5;
          }
          if (m < 0) {
            var _a = (0, exports.splitAt)(-m)(as5), f5 = _a[0], s = _a[1];
            return (0, function_1.pipe)(s, concat5(f5));
          } else {
            return (0, exports.rotate)(m - len)(as5);
          }
        };
      };
      exports.rotate = rotate5;
      var fromReadonlyArray = function(as5) {
        return (0, exports.isNonEmpty)(as5) ? _.some(as5) : _.none;
      };
      exports.fromReadonlyArray = fromReadonlyArray;
      var makeBy5 = function(f5) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f5(0)];
          for (var i = 1; i < j; i++) {
            out.push(f5(i));
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
      var range6 = function(start, end) {
        return start <= end ? (0, exports.makeBy)(function(i) {
          return start + i;
        })(end - start + 1) : [start];
      };
      exports.range = range6;
      var unprepend2 = function(as5) {
        return [(0, exports.head)(as5), (0, exports.tail)(as5)];
      };
      exports.unprepend = unprepend2;
      var unappend2 = function(as5) {
        return [(0, exports.init)(as5), (0, exports.last)(as5)];
      };
      exports.unappend = unappend2;
      var fromArray3 = function(as5) {
        return (0, exports.fromReadonlyArray)(as5.slice());
      };
      exports.fromArray = fromArray3;
      function concatW4(second) {
        return function(first3) {
          return first3.concat(second);
        };
      }
      exports.concatW = concatW4;
      function concat5(x, y) {
        return y ? x.concat(y) : function(y2) {
          return y2.concat(x);
        };
      }
      exports.concat = concat5;
      var reverse6 = function(as5) {
        return as5.length === 1 ? as5 : __spreadArray6([(0, exports.last)(as5)], as5.slice(0, -1).reverse(), true);
      };
      exports.reverse = reverse6;
      function group2(E) {
        return function(as5) {
          var len = as5.length;
          if (len === 0) {
            return exports.empty;
          }
          var out = [];
          var head6 = as5[0];
          var nea = [head6];
          for (var i = 1; i < len; i++) {
            var a = as5[i];
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
      }
      exports.group = group2;
      var groupBy3 = function(f5) {
        return function(as5) {
          var out = {};
          for (var _i = 0, as_1 = as5; _i < as_1.length; _i++) {
            var a = as_1[_i];
            var k = f5(a);
            if (_.has.call(out, k)) {
              out[k].push(a);
            } else {
              out[k] = [a];
            }
          }
          return out;
        };
      };
      exports.groupBy = groupBy3;
      var sort5 = function(O2) {
        return function(as5) {
          return as5.length === 1 ? as5 : as5.slice().sort(O2.compare);
        };
      };
      exports.sort = sort5;
      var updateAt5 = function(i, a) {
        return (0, exports.modifyAt)(i, function() {
          return a;
        });
      };
      exports.updateAt = updateAt5;
      var modifyAt5 = function(i, f5) {
        return function(as5) {
          return (0, exports.isOutOfBound)(i, as5) ? _.none : _.some((0, exports.unsafeUpdateAt)(i, f5(as5[i]), as5));
        };
      };
      exports.modifyAt = modifyAt5;
      var zipWith4 = function(as5, bs, f5) {
        var cs = [f5(as5[0], bs[0])];
        var len = Math.min(as5.length, bs.length);
        for (var i = 1; i < len; i++) {
          cs[i] = f5(as5[i], bs[i]);
        }
        return cs;
      };
      exports.zipWith = zipWith4;
      function zip4(as5, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip4(bs2, as5);
          };
        }
        return (0, exports.zipWith)(as5, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip4;
      var unzip4 = function(abs) {
        var fa = [abs[0][0]];
        var fb = [abs[0][1]];
        for (var i = 1; i < abs.length; i++) {
          fa[i] = abs[i][0];
          fb[i] = abs[i][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip4;
      var prependAll5 = function(middle) {
        return function(as5) {
          var out = [middle, as5[0]];
          for (var i = 1; i < as5.length; i++) {
            out.push(middle, as5[i]);
          }
          return out;
        };
      };
      exports.prependAll = prependAll5;
      var intersperse5 = function(middle) {
        return function(as5) {
          var rest = (0, exports.tail)(as5);
          return (0, exports.isNonEmpty)(rest) ? (0, function_1.pipe)(rest, (0, exports.prependAll)(middle), (0, exports.prepend)((0, exports.head)(as5))) : as5;
        };
      };
      exports.intersperse = intersperse5;
      var chainWithIndex4 = function(f5) {
        return function(as5) {
          var out = _.fromReadonlyNonEmptyArray(f5(0, (0, exports.head)(as5)));
          for (var i = 1; i < as5.length; i++) {
            out.push.apply(out, f5(i, as5[i]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex4;
      var chop5 = function(f5) {
        return function(as5) {
          var _a = f5(as5), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while ((0, exports.isNonEmpty)(next)) {
            var _b = f5(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      exports.chop = chop5;
      var splitAt5 = function(n) {
        return function(as5) {
          var m = Math.max(1, n);
          return m >= as5.length ? [as5, exports.empty] : [(0, function_1.pipe)(as5.slice(1, m), (0, exports.prepend)((0, exports.head)(as5))), as5.slice(m)];
        };
      };
      exports.splitAt = splitAt5;
      var chunksOf5 = function(n) {
        return (0, exports.chop)((0, exports.splitAt)(n));
      };
      exports.chunksOf = chunksOf5;
      var _map9 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f5));
      };
      var _mapWithIndex6 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f5));
      };
      var _ap6 = function(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _extend5 = function(wa, f5) {
        return (0, function_1.pipe)(wa, (0, exports.extend)(f5));
      };
      var _reduce7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f5));
      };
      var _foldMap7 = function(M) {
        var foldMapM = (0, exports.foldMap)(M);
        return function(fa, f5) {
          return (0, function_1.pipe)(fa, foldMapM(f5));
        };
      };
      var _reduceRight7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f5));
      };
      var _traverse7 = function(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f5) {
          return (0, function_1.pipe)(ta, traverseF(f5));
        };
      };
      var _alt6 = function(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _reduceWithIndex6 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f5));
      };
      var _foldMapWithIndex6 = function(M) {
        var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
        return function(fa, f5) {
          return (0, function_1.pipe)(fa, foldMapWithIndexM(f5));
        };
      };
      var _reduceRightWithIndex6 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f5));
      };
      var _traverseWithIndex6 = function(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(ta, f5) {
          return (0, function_1.pipe)(ta, traverseWithIndexF(f5));
        };
      };
      exports.of = _.singleton;
      var altW6 = function(that) {
        return function(as5) {
          return (0, function_1.pipe)(as5, concatW4(that()));
        };
      };
      exports.altW = altW6;
      exports.alt = exports.altW;
      var ap10 = function(as5) {
        return (0, exports.flatMap)(function(f5) {
          return (0, function_1.pipe)(as5, (0, exports.map)(f5));
        });
      };
      exports.ap = ap10;
      exports.flatMap = (0, function_1.dual)(2, function(ma, f5) {
        return (0, function_1.pipe)(ma, (0, exports.chainWithIndex)(function(i, a) {
          return f5(a, i);
        }));
      });
      var extend5 = function(f5) {
        return function(as5) {
          var next = (0, exports.tail)(as5);
          var out = [f5(as5)];
          while ((0, exports.isNonEmpty)(next)) {
            out.push(f5(next));
            next = (0, exports.tail)(next);
          }
          return out;
        };
      };
      exports.extend = extend5;
      exports.duplicate = /* @__PURE__ */ (0, exports.extend)(function_1.identity);
      exports.flatten = /* @__PURE__ */ (0, exports.flatMap)(function_1.identity);
      var map13 = function(f5) {
        return (0, exports.mapWithIndex)(function(_2, a) {
          return f5(a);
        });
      };
      exports.map = map13;
      var mapWithIndex6 = function(f5) {
        return function(as5) {
          var out = [f5(0, (0, exports.head)(as5))];
          for (var i = 1; i < as5.length; i++) {
            out.push(f5(i, as5[i]));
          }
          return out;
        };
      };
      exports.mapWithIndex = mapWithIndex6;
      var reduce8 = function(b, f5) {
        return (0, exports.reduceWithIndex)(b, function(_2, b2, a) {
          return f5(b2, a);
        });
      };
      exports.reduce = reduce8;
      var foldMap8 = function(S) {
        return function(f5) {
          return function(as5) {
            return as5.slice(1).reduce(function(s, a) {
              return S.concat(s, f5(a));
            }, f5(as5[0]));
          };
        };
      };
      exports.foldMap = foldMap8;
      var reduceRight8 = function(b, f5) {
        return (0, exports.reduceRightWithIndex)(b, function(_2, b2, a) {
          return f5(b2, a);
        });
      };
      exports.reduceRight = reduceRight8;
      var reduceWithIndex7 = function(b, f5) {
        return function(as5) {
          return as5.reduce(function(b2, a, i) {
            return f5(i, b2, a);
          }, b);
        };
      };
      exports.reduceWithIndex = reduceWithIndex7;
      var foldMapWithIndex7 = function(S) {
        return function(f5) {
          return function(as5) {
            return as5.slice(1).reduce(function(s, a, i) {
              return S.concat(s, f5(i + 1, a));
            }, f5(0, as5[0]));
          };
        };
      };
      exports.foldMapWithIndex = foldMapWithIndex7;
      var reduceRightWithIndex7 = function(b, f5) {
        return function(as5) {
          return as5.reduceRight(function(b2, a, i) {
            return f5(i, a, b2);
          }, b);
        };
      };
      exports.reduceRightWithIndex = reduceRightWithIndex7;
      var traverse7 = function(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(f5) {
          return traverseWithIndexF(function(_2, a) {
            return f5(a);
          });
        };
      };
      exports.traverse = traverse7;
      var sequence7 = function(F) {
        return (0, exports.traverseWithIndex)(F)(function_1.SK);
      };
      exports.sequence = sequence7;
      var traverseWithIndex6 = function(F) {
        return function(f5) {
          return function(as5) {
            var out = F.map(f5(0, (0, exports.head)(as5)), exports.of);
            for (var i = 1; i < as5.length; i++) {
              out = F.ap(F.map(out, function(bs) {
                return function(b) {
                  return (0, function_1.pipe)(bs, (0, exports.append)(b));
                };
              }), f5(i, as5[i]));
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
          show: function(as5) {
            return "[".concat(as5.map(S.show).join(", "), "]");
          }
        };
      };
      exports.getShow = getShow8;
      var getSemigroup8 = function() {
        return {
          concat: concat5
        };
      };
      exports.getSemigroup = getSemigroup8;
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
          concat: function(first3, second) {
            return unionE(second)(first3);
          }
        };
      };
      exports.getUnionSemigroup = getUnionSemigroup5;
      exports.Functor = {
        URI: exports.URI,
        map: _map9
      };
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map9,
        mapWithIndex: _mapWithIndex6
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6
      };
      exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
      exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        chain: exports.flatMap
      };
      exports.chainFirst = (0, Chain_1.chainFirst)(exports.Chain);
      exports.Monad = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of,
        chain: exports.flatMap
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map9,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map9,
        mapWithIndex: _mapWithIndex6,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6,
        traverseWithIndex: _traverseWithIndex6
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map9,
        alt: _alt6
      };
      exports.Comonad = {
        URI: exports.URI,
        map: _map9,
        extend: _extend5,
        extract: exports.extract
      };
      exports.Do = (0, exports.of)(_.emptyRecord);
      exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
      var let_9 = /* @__PURE__ */ (0, Functor_1.let)(exports.Functor);
      exports.let = let_9;
      exports.bind = (0, Chain_1.bind)(exports.Chain);
      exports.apS = (0, Apply_1.apS)(exports.Apply);
      exports.head = exports.extract;
      exports.tail = _.tail;
      var last6 = function(as5) {
        return as5[as5.length - 1];
      };
      exports.last = last6;
      var init5 = function(as5) {
        return as5.slice(0, -1);
      };
      exports.init = init5;
      var min5 = function(O2) {
        var S = Se.min(O2);
        return function(as5) {
          return as5.reduce(S.concat);
        };
      };
      exports.min = min5;
      var max5 = function(O2) {
        var S = Se.max(O2);
        return function(as5) {
          return as5.reduce(S.concat);
        };
      };
      exports.max = max5;
      var concatAll6 = function(S) {
        return function(as5) {
          return as5.reduce(S.concat);
        };
      };
      exports.concatAll = concatAll6;
      var matchLeft4 = function(f5) {
        return function(as5) {
          return f5((0, exports.head)(as5), (0, exports.tail)(as5));
        };
      };
      exports.matchLeft = matchLeft4;
      var matchRight4 = function(f5) {
        return function(as5) {
          return f5((0, exports.init)(as5), (0, exports.last)(as5));
        };
      };
      exports.matchRight = matchRight4;
      var modifyHead2 = function(f5) {
        return function(as5) {
          return __spreadArray6([f5((0, exports.head)(as5))], (0, exports.tail)(as5), true);
        };
      };
      exports.modifyHead = modifyHead2;
      var updateHead2 = function(a) {
        return (0, exports.modifyHead)(function() {
          return a;
        });
      };
      exports.updateHead = updateHead2;
      var modifyLast2 = function(f5) {
        return function(as5) {
          return (0, function_1.pipe)((0, exports.init)(as5), (0, exports.append)(f5((0, exports.last)(as5))));
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
      function groupSort2(O2) {
        var sortO = (0, exports.sort)(O2);
        var groupO = group2(O2);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? groupO(sortO(as5)) : exports.empty;
        };
      }
      exports.groupSort = groupSort2;
      function filter9(predicate) {
        return (0, exports.filterWithIndex)(function(_2, a) {
          return predicate(a);
        });
      }
      exports.filter = filter9;
      var filterWithIndex6 = function(predicate) {
        return function(as5) {
          return (0, exports.fromReadonlyArray)(as5.filter(function(a, i) {
            return predicate(i, a);
          }));
        };
      };
      exports.filterWithIndex = filterWithIndex6;
      exports.uncons = exports.unprepend;
      exports.unsnoc = exports.unappend;
      function cons5(head6, tail6) {
        return tail6 === void 0 ? (0, exports.prepend)(head6) : (0, function_1.pipe)(tail6, (0, exports.prepend)(head6));
      }
      exports.cons = cons5;
      var snoc5 = function(init6, end) {
        return (0, function_1.pipe)(init6, concat5([end]));
      };
      exports.snoc = snoc5;
      var insertAt5 = function(i, a) {
        return function(as5) {
          return i < 0 || i > as5.length ? _.none : _.some((0, exports.unsafeInsertAt)(i, a, as5));
        };
      };
      exports.insertAt = insertAt5;
      exports.prependToAll = exports.prependAll;
      exports.fold = exports.concatAll;
      exports.readonlyNonEmptyArray = {
        URI: exports.URI,
        of: exports.of,
        map: _map9,
        mapWithIndex: _mapWithIndex6,
        ap: _ap6,
        chain: exports.flatMap,
        extend: _extend5,
        extract: exports.extract,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6,
        traverseWithIndex: _traverseWithIndex6,
        alt: _alt6
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/number.js
  var require_number = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/number.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Field = exports.MonoidProduct = exports.MonoidSum = exports.SemigroupProduct = exports.SemigroupSum = exports.MagmaSub = exports.Show = exports.Bounded = exports.Ord = exports.Eq = exports.isNumber = void 0;
      var isNumber = function(u) {
        return typeof u === "number";
      };
      exports.isNumber = isNumber;
      exports.Eq = {
        equals: function(first3, second) {
          return first3 === second;
        }
      };
      exports.Ord = {
        equals: exports.Eq.equals,
        compare: function(first3, second) {
          return first3 < second ? -1 : first3 > second ? 1 : 0;
        }
      };
      exports.Bounded = {
        equals: exports.Eq.equals,
        compare: exports.Ord.compare,
        top: Infinity,
        bottom: -Infinity
      };
      exports.Show = {
        show: function(n) {
          return JSON.stringify(n);
        }
      };
      exports.MagmaSub = {
        concat: function(first3, second) {
          return first3 - second;
        }
      };
      exports.SemigroupSum = {
        concat: function(first3, second) {
          return first3 + second;
        }
      };
      exports.SemigroupProduct = {
        concat: function(first3, second) {
          return first3 * second;
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
        div: function(first3, second) {
          return first3 / second;
        },
        mod: function(first3, second) {
          return first3 % second;
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyArray.js
  var require_ReadonlyArray = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyArray.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.updateAt = exports.insertAt = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.lookup = exports.isOutOfBound = exports.size = exports.scanRight = exports.scanLeft = exports.chainWithIndex = exports.foldRight = exports.matchRight = exports.matchRightW = exports.foldLeft = exports.matchLeft = exports.matchLeftW = exports.match = exports.matchW = exports.fromEither = exports.fromOption = exports.fromPredicate = exports.replicate = exports.makeBy = exports.appendW = exports.append = exports.prependW = exports.prepend = exports.isNonEmpty = exports.isEmpty = void 0;
      exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.foldMap = exports.reduce = exports.foldMapWithIndex = exports.duplicate = exports.extend = exports.filterWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partitionWithIndex = exports.partition = exports.compact = exports.filterMap = exports.filterMapWithIndex = exports.filter = exports.separate = exports.mapWithIndex = exports.map = exports.flatten = exports.flatMap = exports.ap = exports.alt = exports.altW = exports.zero = exports.of = exports._chainRecBreadthFirst = exports._chainRecDepthFirst = exports.difference = exports.intersection = exports.union = exports.concat = exports.concatW = exports.comprehension = exports.fromOptionK = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = exports.uniq = exports.elem = exports.rotate = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = void 0;
      exports.toArray = exports.unsafeDeleteAt = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.fromEitherK = exports.FromEither = exports.filterE = exports.Witherable = exports.ChainRecBreadthFirst = exports.chainRecBreadthFirst = exports.ChainRecDepthFirst = exports.chainRecDepthFirst = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.guard = exports.Zero = exports.Alt = exports.Unfoldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getDifferenceMagma = exports.getIntersectionSemigroup = exports.getUnionMonoid = exports.getUnionSemigroup = exports.getOrd = exports.getEq = exports.getMonoid = exports.getSemigroup = exports.getShow = exports.URI = exports.unfold = exports.wilt = exports.wither = exports.traverseWithIndex = void 0;
      exports.readonlyArray = exports.prependToAll = exports.snoc = exports.cons = exports.range = exports.chain = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.intercalate = exports.exists = exports.some = exports.every = exports.empty = exports.fromArray = void 0;
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
      var isEmpty5 = function(as5) {
        return as5.length === 0;
      };
      exports.isEmpty = isEmpty5;
      exports.isNonEmpty = RNEA.isNonEmpty;
      exports.prepend = RNEA.prepend;
      exports.prependW = RNEA.prependW;
      exports.append = RNEA.append;
      exports.appendW = RNEA.appendW;
      var makeBy5 = function(n, f5) {
        return n <= 0 ? exports.empty : RNEA.makeBy(f5)(n);
      };
      exports.makeBy = makeBy5;
      var replicate4 = function(n, a) {
        return (0, exports.makeBy)(n, function() {
          return a;
        });
      };
      exports.replicate = replicate4;
      function fromPredicate7(predicate) {
        return function(a) {
          return predicate(a) ? [a] : exports.empty;
        };
      }
      exports.fromPredicate = fromPredicate7;
      var fromOption4 = function(ma) {
        return _.isNone(ma) ? exports.empty : [ma.value];
      };
      exports.fromOption = fromOption4;
      var fromEither6 = function(e) {
        return _.isLeft(e) ? exports.empty : [e.right];
      };
      exports.fromEither = fromEither6;
      var matchW5 = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? onNonEmpty(as5) : onEmpty();
        };
      };
      exports.matchW = matchW5;
      exports.match = exports.matchW;
      var matchLeftW3 = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? onNonEmpty(RNEA.head(as5), RNEA.tail(as5)) : onEmpty();
        };
      };
      exports.matchLeftW = matchLeftW3;
      exports.matchLeft = exports.matchLeftW;
      exports.foldLeft = exports.matchLeft;
      var matchRightW3 = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? onNonEmpty(RNEA.init(as5), RNEA.last(as5)) : onEmpty();
        };
      };
      exports.matchRightW = matchRightW3;
      exports.matchRight = exports.matchRightW;
      exports.foldRight = exports.matchRight;
      var chainWithIndex4 = function(f5) {
        return function(as5) {
          if ((0, exports.isEmpty)(as5)) {
            return exports.empty;
          }
          var out = [];
          for (var i = 0; i < as5.length; i++) {
            out.push.apply(out, f5(i, as5[i]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex4;
      var scanLeft3 = function(b, f5) {
        return function(as5) {
          var len = as5.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i = 0; i < len; i++) {
            out[i + 1] = f5(out[i], as5[i]);
          }
          return out;
        };
      };
      exports.scanLeft = scanLeft3;
      var scanRight3 = function(b, f5) {
        return function(as5) {
          var len = as5.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i = len - 1; i >= 0; i--) {
            out[i] = f5(as5[i], out[i + 1]);
          }
          return out;
        };
      };
      exports.scanRight = scanRight3;
      var size5 = function(as5) {
        return as5.length;
      };
      exports.size = size5;
      exports.isOutOfBound = RNEA.isOutOfBound;
      function lookup5(i, as5) {
        return as5 === void 0 ? function(as6) {
          return lookup5(i, as6);
        } : (0, exports.isOutOfBound)(i, as5) ? _.none : _.some(as5[i]);
      }
      exports.lookup = lookup5;
      var head6 = function(as5) {
        return (0, exports.isNonEmpty)(as5) ? _.some(RNEA.head(as5)) : _.none;
      };
      exports.head = head6;
      var last6 = function(as5) {
        return (0, exports.isNonEmpty)(as5) ? _.some(RNEA.last(as5)) : _.none;
      };
      exports.last = last6;
      var tail6 = function(as5) {
        return (0, exports.isNonEmpty)(as5) ? _.some(RNEA.tail(as5)) : _.none;
      };
      exports.tail = tail6;
      var init5 = function(as5) {
        return (0, exports.isNonEmpty)(as5) ? _.some(RNEA.init(as5)) : _.none;
      };
      exports.init = init5;
      var takeLeft3 = function(n) {
        return function(as5) {
          return (0, exports.isOutOfBound)(n, as5) ? as5 : n === 0 ? exports.empty : as5.slice(0, n);
        };
      };
      exports.takeLeft = takeLeft3;
      var takeRight3 = function(n) {
        return function(as5) {
          return (0, exports.isOutOfBound)(n, as5) ? as5 : n === 0 ? exports.empty : as5.slice(-n);
        };
      };
      exports.takeRight = takeRight3;
      function takeLeftWhile3(predicate) {
        return function(as5) {
          var out = [];
          for (var _i = 0, as_1 = as5; _i < as_1.length; _i++) {
            var a = as_1[_i];
            if (!predicate(a)) {
              break;
            }
            out.push(a);
          }
          var len = out.length;
          return len === as5.length ? as5 : len === 0 ? exports.empty : out;
        };
      }
      exports.takeLeftWhile = takeLeftWhile3;
      var spanLeftIndex3 = function(as5, predicate) {
        var l = as5.length;
        var i = 0;
        for (; i < l; i++) {
          if (!predicate(as5[i])) {
            break;
          }
        }
        return i;
      };
      function spanLeft3(predicate) {
        return function(as5) {
          var _a = (0, exports.splitAt)(spanLeftIndex3(as5, predicate))(as5), init6 = _a[0], rest = _a[1];
          return { init: init6, rest };
        };
      }
      exports.spanLeft = spanLeft3;
      var dropLeft3 = function(n) {
        return function(as5) {
          return n <= 0 || (0, exports.isEmpty)(as5) ? as5 : n >= as5.length ? exports.empty : as5.slice(n, as5.length);
        };
      };
      exports.dropLeft = dropLeft3;
      var dropRight3 = function(n) {
        return function(as5) {
          return n <= 0 || (0, exports.isEmpty)(as5) ? as5 : n >= as5.length ? exports.empty : as5.slice(0, as5.length - n);
        };
      };
      exports.dropRight = dropRight3;
      function dropLeftWhile3(predicate) {
        return function(as5) {
          var i = spanLeftIndex3(as5, predicate);
          return i === 0 ? as5 : i === as5.length ? exports.empty : as5.slice(i);
        };
      }
      exports.dropLeftWhile = dropLeftWhile3;
      var findIndex3 = function(predicate) {
        return function(as5) {
          for (var i = 0; i < as5.length; i++) {
            if (predicate(as5[i])) {
              return _.some(i);
            }
          }
          return _.none;
        };
      };
      exports.findIndex = findIndex3;
      function findFirst3(predicate) {
        return function(as5) {
          for (var i = 0; i < as5.length; i++) {
            if (predicate(as5[i])) {
              return _.some(as5[i]);
            }
          }
          return _.none;
        };
      }
      exports.findFirst = findFirst3;
      var findFirstMap3 = function(f5) {
        return function(as5) {
          for (var i = 0; i < as5.length; i++) {
            var out = f5(as5[i]);
            if (_.isSome(out)) {
              return out;
            }
          }
          return _.none;
        };
      };
      exports.findFirstMap = findFirstMap3;
      function findLast3(predicate) {
        return function(as5) {
          for (var i = as5.length - 1; i >= 0; i--) {
            if (predicate(as5[i])) {
              return _.some(as5[i]);
            }
          }
          return _.none;
        };
      }
      exports.findLast = findLast3;
      var findLastMap3 = function(f5) {
        return function(as5) {
          for (var i = as5.length - 1; i >= 0; i--) {
            var out = f5(as5[i]);
            if (_.isSome(out)) {
              return out;
            }
          }
          return _.none;
        };
      };
      exports.findLastMap = findLastMap3;
      var findLastIndex3 = function(predicate) {
        return function(as5) {
          for (var i = as5.length - 1; i >= 0; i--) {
            if (predicate(as5[i])) {
              return _.some(i);
            }
          }
          return _.none;
        };
      };
      exports.findLastIndex = findLastIndex3;
      var insertAt5 = function(i, a) {
        return function(as5) {
          return i < 0 || i > as5.length ? _.none : _.some(RNEA.unsafeInsertAt(i, a, as5));
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
        return function(as5) {
          return (0, exports.isOutOfBound)(i, as5) ? _.none : _.some((0, exports.unsafeDeleteAt)(i, as5));
        };
      };
      exports.deleteAt = deleteAt4;
      var modifyAt5 = function(i, f5) {
        return function(as5) {
          return (0, exports.isOutOfBound)(i, as5) ? _.none : _.some((0, exports.unsafeUpdateAt)(i, f5(as5[i]), as5));
        };
      };
      exports.modifyAt = modifyAt5;
      var reverse6 = function(as5) {
        return as5.length <= 1 ? as5 : as5.slice().reverse();
      };
      exports.reverse = reverse6;
      var rights3 = function(as5) {
        var r = [];
        for (var i = 0; i < as5.length; i++) {
          var a = as5[i];
          if (a._tag === "Right") {
            r.push(a.right);
          }
        }
        return r;
      };
      exports.rights = rights3;
      var lefts3 = function(as5) {
        var r = [];
        for (var i = 0; i < as5.length; i++) {
          var a = as5[i];
          if (a._tag === "Left") {
            r.push(a.left);
          }
        }
        return r;
      };
      exports.lefts = lefts3;
      var sort5 = function(O2) {
        return function(as5) {
          return as5.length <= 1 ? as5 : as5.slice().sort(O2.compare);
        };
      };
      exports.sort = sort5;
      var zipWith4 = function(fa, fb, f5) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i = 0; i < len; i++) {
          fc[i] = f5(fa[i], fb[i]);
        }
        return fc;
      };
      exports.zipWith = zipWith4;
      function zip4(as5, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip4(bs2, as5);
          };
        }
        return (0, exports.zipWith)(as5, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip4;
      var unzip4 = function(as5) {
        var fa = [];
        var fb = [];
        for (var i = 0; i < as5.length; i++) {
          fa[i] = as5[i][0];
          fb[i] = as5[i][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip4;
      var prependAll5 = function(middle) {
        var f5 = RNEA.prependAll(middle);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? f5(as5) : as5;
        };
      };
      exports.prependAll = prependAll5;
      var intersperse5 = function(middle) {
        var f5 = RNEA.intersperse(middle);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? f5(as5) : as5;
        };
      };
      exports.intersperse = intersperse5;
      var rotate5 = function(n) {
        var f5 = RNEA.rotate(n);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? f5(as5) : as5;
        };
      };
      exports.rotate = rotate5;
      function elem6(E) {
        return function(a, as5) {
          if (as5 === void 0) {
            var elemE_1 = elem6(E);
            return function(as6) {
              return elemE_1(a, as6);
            };
          }
          var predicate = function(element) {
            return E.equals(element, a);
          };
          var i = 0;
          for (; i < as5.length; i++) {
            if (predicate(as5[i])) {
              return true;
            }
          }
          return false;
        };
      }
      exports.elem = elem6;
      var uniq5 = function(E) {
        var f5 = RNEA.uniq(E);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? f5(as5) : as5;
        };
      };
      exports.uniq = uniq5;
      var sortBy5 = function(ords) {
        var f5 = RNEA.sortBy(ords);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? f5(as5) : as5;
        };
      };
      exports.sortBy = sortBy5;
      var chop5 = function(f5) {
        var g = RNEA.chop(f5);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? g(as5) : exports.empty;
        };
      };
      exports.chop = chop5;
      var splitAt5 = function(n) {
        return function(as5) {
          return n >= 1 && (0, exports.isNonEmpty)(as5) ? RNEA.splitAt(n)(as5) : (0, exports.isEmpty)(as5) ? [as5, exports.empty] : [exports.empty, as5];
        };
      };
      exports.splitAt = splitAt5;
      var chunksOf5 = function(n) {
        var f5 = RNEA.chunksOf(n);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? f5(as5) : exports.empty;
        };
      };
      exports.chunksOf = chunksOf5;
      var fromOptionK5 = function(f5) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return (0, exports.fromOption)(f5.apply(void 0, a));
        };
      };
      exports.fromOptionK = fromOptionK5;
      function comprehension3(input, f5, g) {
        if (g === void 0) {
          g = function() {
            return true;
          };
        }
        var go = function(scope, input2) {
          return (0, exports.isNonEmpty)(input2) ? (0, exports.flatMap)(RNEA.head(input2), function(a) {
            return go((0, function_1.pipe)(scope, (0, exports.append)(a)), RNEA.tail(input2));
          }) : g.apply(void 0, scope) ? [f5.apply(void 0, scope)] : exports.empty;
        };
        return go(exports.empty, input);
      }
      exports.comprehension = comprehension3;
      var concatW4 = function(second) {
        return function(first3) {
          return (0, exports.isEmpty)(first3) ? second : (0, exports.isEmpty)(second) ? first3 : first3.concat(second);
        };
      };
      exports.concatW = concatW4;
      exports.concat = exports.concatW;
      function union7(E) {
        var unionE = RNEA.union(E);
        return function(first3, second) {
          if (second === void 0) {
            var unionE_1 = union7(E);
            return function(second2) {
              return unionE_1(second2, first3);
            };
          }
          return (0, exports.isNonEmpty)(first3) && (0, exports.isNonEmpty)(second) ? unionE(second)(first3) : (0, exports.isNonEmpty)(first3) ? first3 : second;
        };
      }
      exports.union = union7;
      function intersection5(E) {
        var elemE = elem6(E);
        return function(xs, ys) {
          if (ys === void 0) {
            var intersectionE_1 = intersection5(E);
            return function(ys2) {
              return intersectionE_1(ys2, xs);
            };
          }
          return xs.filter(function(a) {
            return elemE(a, ys);
          });
        };
      }
      exports.intersection = intersection5;
      function difference5(E) {
        var elemE = elem6(E);
        return function(xs, ys) {
          if (ys === void 0) {
            var differenceE_1 = difference5(E);
            return function(ys2) {
              return differenceE_1(ys2, xs);
            };
          }
          return xs.filter(function(a) {
            return !elemE(a, ys);
          });
        };
      }
      exports.difference = difference5;
      var _map9 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f5));
      };
      var _mapWithIndex6 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f5));
      };
      var _ap6 = function(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _filter7 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
      };
      var _filterMap7 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.filterMap)(f5));
      };
      var _partition7 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
      };
      var _partitionMap7 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f5));
      };
      var _partitionWithIndex5 = function(fa, predicateWithIndex) {
        return (0, function_1.pipe)(fa, (0, exports.partitionWithIndex)(predicateWithIndex));
      };
      var _partitionMapWithIndex5 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.partitionMapWithIndex)(f5));
      };
      var _alt6 = function(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _reduce7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f5));
      };
      var _foldMap7 = function(M) {
        var foldMapM = (0, exports.foldMap)(M);
        return function(fa, f5) {
          return (0, function_1.pipe)(fa, foldMapM(f5));
        };
      };
      var _reduceRight7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f5));
      };
      var _reduceWithIndex6 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f5));
      };
      var _foldMapWithIndex6 = function(M) {
        var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
        return function(fa, f5) {
          return (0, function_1.pipe)(fa, foldMapWithIndexM(f5));
        };
      };
      var _reduceRightWithIndex6 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f5));
      };
      var _filterMapWithIndex5 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.filterMapWithIndex)(f5));
      };
      var _filterWithIndex5 = function(fa, predicateWithIndex) {
        return (0, function_1.pipe)(fa, (0, exports.filterWithIndex)(predicateWithIndex));
      };
      var _extend5 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.extend)(f5));
      };
      var _traverse7 = function(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f5) {
          return (0, function_1.pipe)(ta, traverseF(f5));
        };
      };
      var _traverseWithIndex6 = function(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(ta, f5) {
          return (0, function_1.pipe)(ta, traverseWithIndexF(f5));
        };
      };
      var _chainRecDepthFirst3 = function(a, f5) {
        return (0, function_1.pipe)(a, (0, exports.chainRecDepthFirst)(f5));
      };
      exports._chainRecDepthFirst = _chainRecDepthFirst3;
      var _chainRecBreadthFirst3 = function(a, f5) {
        return (0, function_1.pipe)(a, (0, exports.chainRecBreadthFirst)(f5));
      };
      exports._chainRecBreadthFirst = _chainRecBreadthFirst3;
      exports.of = RNEA.of;
      var zero6 = function() {
        return exports.empty;
      };
      exports.zero = zero6;
      var altW6 = function(that) {
        return function(fa) {
          return fa.concat(that());
        };
      };
      exports.altW = altW6;
      exports.alt = exports.altW;
      var ap10 = function(fa) {
        return (0, exports.flatMap)(function(f5) {
          return (0, function_1.pipe)(fa, (0, exports.map)(f5));
        });
      };
      exports.ap = ap10;
      exports.flatMap = (0, function_1.dual)(2, function(ma, f5) {
        return (0, function_1.pipe)(ma, (0, exports.chainWithIndex)(function(i, a) {
          return f5(a, i);
        }));
      });
      exports.flatten = (0, exports.flatMap)(function_1.identity);
      var map13 = function(f5) {
        return function(fa) {
          return fa.map(function(a) {
            return f5(a);
          });
        };
      };
      exports.map = map13;
      var mapWithIndex6 = function(f5) {
        return function(fa) {
          return fa.map(function(a, i) {
            return f5(i, a);
          });
        };
      };
      exports.mapWithIndex = mapWithIndex6;
      var separate8 = function(fa) {
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
        return (0, Separated_1.separated)(left, right);
      };
      exports.separate = separate8;
      var filter9 = function(predicate) {
        return function(as5) {
          return as5.filter(predicate);
        };
      };
      exports.filter = filter9;
      var filterMapWithIndex5 = function(f5) {
        return function(fa) {
          var out = [];
          for (var i = 0; i < fa.length; i++) {
            var optionB = f5(i, fa[i]);
            if (_.isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      exports.filterMapWithIndex = filterMapWithIndex5;
      var filterMap8 = function(f5) {
        return (0, exports.filterMapWithIndex)(function(_2, a) {
          return f5(a);
        });
      };
      exports.filterMap = filterMap8;
      exports.compact = (0, exports.filterMap)(function_1.identity);
      var partition8 = function(predicate) {
        return (0, exports.partitionWithIndex)(function(_2, a) {
          return predicate(a);
        });
      };
      exports.partition = partition8;
      var partitionWithIndex5 = function(predicateWithIndex) {
        return function(as5) {
          var left = [];
          var right = [];
          for (var i = 0; i < as5.length; i++) {
            var a = as5[i];
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
      var partitionMap8 = function(f5) {
        return (0, exports.partitionMapWithIndex)(function(_2, a) {
          return f5(a);
        });
      };
      exports.partitionMap = partitionMap8;
      var partitionMapWithIndex5 = function(f5) {
        return function(fa) {
          var left = [];
          var right = [];
          for (var i = 0; i < fa.length; i++) {
            var e = f5(i, fa[i]);
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
        return function(as5) {
          return as5.filter(function(a, i) {
            return predicateWithIndex(i, a);
          });
        };
      };
      exports.filterWithIndex = filterWithIndex6;
      var extend5 = function(f5) {
        return function(wa) {
          return wa.map(function(_2, i) {
            return f5(wa.slice(i));
          });
        };
      };
      exports.extend = extend5;
      exports.duplicate = (0, exports.extend)(function_1.identity);
      var foldMapWithIndex7 = function(M) {
        return function(f5) {
          return function(fa) {
            return fa.reduce(function(b, a, i) {
              return M.concat(b, f5(i, a));
            }, M.empty);
          };
        };
      };
      exports.foldMapWithIndex = foldMapWithIndex7;
      var reduce8 = function(b, f5) {
        return (0, exports.reduceWithIndex)(b, function(_2, b2, a) {
          return f5(b2, a);
        });
      };
      exports.reduce = reduce8;
      var foldMap8 = function(M) {
        var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
        return function(f5) {
          return foldMapWithIndexM(function(_2, a) {
            return f5(a);
          });
        };
      };
      exports.foldMap = foldMap8;
      var reduceWithIndex7 = function(b, f5) {
        return function(fa) {
          var len = fa.length;
          var out = b;
          for (var i = 0; i < len; i++) {
            out = f5(i, out, fa[i]);
          }
          return out;
        };
      };
      exports.reduceWithIndex = reduceWithIndex7;
      var reduceRight8 = function(b, f5) {
        return (0, exports.reduceRightWithIndex)(b, function(_2, a, b2) {
          return f5(a, b2);
        });
      };
      exports.reduceRight = reduceRight8;
      var reduceRightWithIndex7 = function(b, f5) {
        return function(fa) {
          return fa.reduceRight(function(b2, a, i) {
            return f5(i, a, b2);
          }, b);
        };
      };
      exports.reduceRightWithIndex = reduceRightWithIndex7;
      var traverse7 = function(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(f5) {
          return traverseWithIndexF(function(_2, a) {
            return f5(a);
          });
        };
      };
      exports.traverse = traverse7;
      var sequence7 = function(F) {
        return function(ta) {
          return _reduce7(ta, F.of((0, exports.zero)()), function(fas, fa) {
            return F.ap(F.map(fas, function(as5) {
              return function(a) {
                return (0, function_1.pipe)(as5, (0, exports.append)(a));
              };
            }), fa);
          });
        };
      };
      exports.sequence = sequence7;
      var traverseWithIndex6 = function(F) {
        return function(f5) {
          return (0, exports.reduceWithIndex)(F.of((0, exports.zero)()), function(i, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return (0, function_1.pipe)(bs, (0, exports.append)(b));
              };
            }), f5(i, a));
          });
        };
      };
      exports.traverseWithIndex = traverseWithIndex6;
      var wither5 = function(F) {
        var _witherF = _wither5(F);
        return function(f5) {
          return function(fa) {
            return _witherF(fa, f5);
          };
        };
      };
      exports.wither = wither5;
      var wilt5 = function(F) {
        var _wiltF = _wilt5(F);
        return function(f5) {
          return function(fa) {
            return _wiltF(fa, f5);
          };
        };
      };
      exports.wilt = wilt5;
      var unfold3 = function(b, f5) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f5(bb);
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
          show: function(as5) {
            return "[".concat(as5.map(S.show).join(", "), "]");
          }
        };
      };
      exports.getShow = getShow8;
      var getSemigroup8 = function() {
        return {
          concat: function(first3, second) {
            return (0, exports.isEmpty)(first3) ? second : (0, exports.isEmpty)(second) ? first3 : first3.concat(second);
          }
        };
      };
      exports.getSemigroup = getSemigroup8;
      var getMonoid10 = function() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: exports.empty
        };
      };
      exports.getMonoid = getMonoid10;
      var getEq8 = function(E) {
        return (0, Eq_1.fromEquals)(function(xs, ys) {
          return xs.length === ys.length && xs.every(function(x, i) {
            return E.equals(x, ys[i]);
          });
        });
      };
      exports.getEq = getEq8;
      var getOrd4 = function(O2) {
        return (0, Ord_1.fromCompare)(function(a, b) {
          var aLen = a.length;
          var bLen = b.length;
          var len = Math.min(aLen, bLen);
          for (var i = 0; i < len; i++) {
            var ordering = O2.compare(a[i], b[i]);
            if (ordering !== 0) {
              return ordering;
            }
          }
          return N.Ord.compare(aLen, bLen);
        });
      };
      exports.getOrd = getOrd4;
      var getUnionSemigroup5 = function(E) {
        var unionE = union7(E);
        return {
          concat: function(first3, second) {
            return unionE(second)(first3);
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
        var intersectionE = intersection5(E);
        return {
          concat: function(first3, second) {
            return intersectionE(second)(first3);
          }
        };
      };
      exports.getIntersectionSemigroup = getIntersectionSemigroup4;
      var getDifferenceMagma4 = function(E) {
        var differenceE = difference5(E);
        return {
          concat: function(first3, second) {
            return differenceE(second)(first3);
          }
        };
      };
      exports.getDifferenceMagma = getDifferenceMagma4;
      exports.Functor = {
        URI: exports.URI,
        map: _map9
      };
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map9,
        mapWithIndex: _mapWithIndex6
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6
      };
      exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
      exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        chain: exports.flatMap
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of,
        chain: exports.flatMap
      };
      exports.chainFirst = /* @__PURE__ */ (0, Chain_1.chainFirst)(exports.Chain);
      exports.Unfoldable = {
        URI: exports.URI,
        unfold: exports.unfold
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map9,
        alt: _alt6
      };
      exports.Zero = {
        URI: exports.URI,
        zero: exports.zero
      };
      exports.guard = (0, Zero_1.guard)(exports.Zero, exports.Pointed);
      exports.Alternative = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of,
        alt: _alt6,
        zero: exports.zero
      };
      exports.Extend = {
        URI: exports.URI,
        map: _map9,
        extend: _extend5
      };
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      exports.Filterable = {
        URI: exports.URI,
        map: _map9,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter7,
        filterMap: _filterMap7,
        partition: _partition7,
        partitionMap: _partitionMap7
      };
      exports.FilterableWithIndex = {
        URI: exports.URI,
        map: _map9,
        mapWithIndex: _mapWithIndex6,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter7,
        filterMap: _filterMap7,
        partition: _partition7,
        partitionMap: _partitionMap7,
        partitionMapWithIndex: _partitionMapWithIndex5,
        partitionWithIndex: _partitionWithIndex5,
        filterMapWithIndex: _filterMapWithIndex5,
        filterWithIndex: _filterWithIndex5
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map9,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map9,
        mapWithIndex: _mapWithIndex6,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6,
        traverse: _traverse7,
        sequence: exports.sequence,
        traverseWithIndex: _traverseWithIndex6
      };
      var chainRecDepthFirst3 = function(f5) {
        return function(a) {
          var todo = __spreadArray6([], f5(a), true);
          var out = [];
          while (todo.length > 0) {
            var e = todo.shift();
            if (_.isLeft(e)) {
              todo.unshift.apply(todo, f5(e.left));
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
        map: _map9,
        ap: _ap6,
        chain: exports.flatMap,
        chainRec: exports._chainRecDepthFirst
      };
      var chainRecBreadthFirst3 = function(f5) {
        return function(a) {
          var initial = f5(a);
          var todo = [];
          var out = [];
          function go(e2) {
            if (_.isLeft(e2)) {
              f5(e2.left).forEach(function(v) {
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
      exports.chainRecBreadthFirst = chainRecBreadthFirst3;
      exports.ChainRecBreadthFirst = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        chain: exports.flatMap,
        chainRec: exports._chainRecBreadthFirst
      };
      var _wither5 = /* @__PURE__ */ (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
      var _wilt5 = /* @__PURE__ */ (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
      exports.Witherable = {
        URI: exports.URI,
        map: _map9,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter7,
        filterMap: _filterMap7,
        partition: _partition7,
        partitionMap: _partitionMap7,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        wither: _wither5,
        wilt: _wilt5
      };
      exports.filterE = (0, Witherable_1.filterE)(exports.Witherable);
      exports.FromEither = {
        URI: exports.URI,
        fromEither: exports.fromEither
      };
      exports.fromEitherK = (0, FromEither_1.fromEitherK)(exports.FromEither);
      exports.unsafeInsertAt = RNEA.unsafeInsertAt;
      var unsafeUpdateAt5 = function(i, a, as5) {
        return (0, exports.isNonEmpty)(as5) ? RNEA.unsafeUpdateAt(i, a, as5) : as5;
      };
      exports.unsafeUpdateAt = unsafeUpdateAt5;
      var unsafeDeleteAt3 = function(i, as5) {
        var xs = as5.slice();
        xs.splice(i, 1);
        return xs;
      };
      exports.unsafeDeleteAt = unsafeDeleteAt3;
      var toArray3 = function(as5) {
        return as5.slice();
      };
      exports.toArray = toArray3;
      var fromArray3 = function(as5) {
        return (0, exports.isEmpty)(as5) ? exports.empty : as5.slice();
      };
      exports.fromArray = fromArray3;
      exports.empty = RNEA.empty;
      function every5(predicate) {
        return function(as5) {
          return as5.every(predicate);
        };
      }
      exports.every = every5;
      var some9 = function(predicate) {
        return function(as5) {
          return as5.some(predicate);
        };
      };
      exports.some = some9;
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
      var let_9 = /* @__PURE__ */ (0, Functor_1.let)(exports.Functor);
      exports.let = let_9;
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
        map: _map9,
        ap: _ap6,
        of: exports.of,
        chain: exports.flatMap,
        filter: _filter7,
        filterMap: _filterMap7,
        partition: _partition7,
        partitionMap: _partitionMap7,
        mapWithIndex: _mapWithIndex6,
        partitionMapWithIndex: _partitionMapWithIndex5,
        partitionWithIndex: _partitionWithIndex5,
        filterMapWithIndex: _filterMapWithIndex5,
        filterWithIndex: _filterWithIndex5,
        alt: _alt6,
        zero: exports.zero,
        unfold: exports.unfold,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6,
        traverseWithIndex: _traverseWithIndex6,
        extend: _extend5,
        wither: _wither5,
        wilt: _wilt5
      };
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Predicate.js
  var Pred, anyPass;
  var init_Predicate2 = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Predicate.js"() {
      Pred = __toESM(require_Predicate());
      init_Monoid();
      anyPass = (fs) => concatAll5(Pred.getMonoidAny())(fs);
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Const.js
  var require_Const = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Const.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.const_ = exports.Bifunctor = exports.Contravariant = exports.flap = exports.Functor = exports.URI = exports.mapLeft = exports.bimap = exports.map = exports.contramap = exports.getApplicative = exports.getApply = exports.getBooleanAlgebra = exports.getHeytingAlgebra = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBounded = exports.getOrd = exports.getEq = exports.getShow = exports.make = void 0;
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      exports.make = function_1.unsafeCoerce;
      function getShow8(S) {
        return {
          show: function(c) {
            return "make(".concat(S.show(c), ")");
          }
        };
      }
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
      function getApply(S) {
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map9,
          ap: function(fab, fa) {
            return (0, exports.make)(S.concat(fab, fa));
          }
        };
      }
      exports.getApply = getApply;
      function getApplicative(M) {
        var A = getApply(M);
        return {
          URI: exports.URI,
          _E: void 0,
          map: A.map,
          ap: A.ap,
          of: function() {
            return (0, exports.make)(M.empty);
          }
        };
      }
      exports.getApplicative = getApplicative;
      var _contramap = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f5));
      };
      var _map9 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f5));
      };
      var _bimap = function(fa, f5, g) {
        return (0, function_1.pipe)(fa, (0, exports.bimap)(f5, g));
      };
      var _mapLeft = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f5));
      };
      var contramap = function() {
        return function_1.unsafeCoerce;
      };
      exports.contramap = contramap;
      var map13 = function() {
        return function_1.unsafeCoerce;
      };
      exports.map = map13;
      var bimap = function(f5) {
        return function(fa) {
          return (0, exports.make)(f5(fa));
        };
      };
      exports.bimap = bimap;
      var mapLeft = function(f5) {
        return function(fa) {
          return (0, exports.make)(f5(fa));
        };
      };
      exports.mapLeft = mapLeft;
      exports.URI = "Const";
      exports.Functor = {
        URI: exports.URI,
        map: _map9
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
        map: _map9,
        contramap: _contramap,
        bimap: _bimap,
        mapLeft: _mapLeft
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/pipeable.js
  var require_pipeable = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/pipeable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.pipe = exports.pipeable = exports.compose = exports.promap = exports.partitionMapWithIndex = exports.partitionWithIndex = exports.filterMapWithIndex = exports.filterWithIndex = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.alt = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.reduceRight = exports.foldMap = exports.reduce = exports.extend = exports.mapLeft = exports.bimap = exports.chain = exports.ap = exports.mapWithIndex = exports.contramap = exports.map = void 0;
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var function_1 = require_function();
      function map13(F) {
        return function(f5) {
          return function(fa) {
            return F.map(fa, f5);
          };
        };
      }
      exports.map = map13;
      function contramap(F) {
        return function(f5) {
          return function(fa) {
            return F.contramap(fa, f5);
          };
        };
      }
      exports.contramap = contramap;
      function mapWithIndex6(F) {
        return function(f5) {
          return function(fa) {
            return F.mapWithIndex(fa, f5);
          };
        };
      }
      exports.mapWithIndex = mapWithIndex6;
      function ap10(F) {
        return function(fa) {
          return function(fab) {
            return F.ap(fab, fa);
          };
        };
      }
      exports.ap = ap10;
      function chain9(F) {
        return function(f5) {
          return function(fa) {
            return F.chain(fa, f5);
          };
        };
      }
      exports.chain = chain9;
      function bimap(F) {
        return function(f5, g) {
          return function(fea) {
            return F.bimap(fea, f5, g);
          };
        };
      }
      exports.bimap = bimap;
      function mapLeft(F) {
        return function(f5) {
          return function(fea) {
            return F.mapLeft(fea, f5);
          };
        };
      }
      exports.mapLeft = mapLeft;
      function extend5(F) {
        return function(f5) {
          return function(wa) {
            return F.extend(wa, f5);
          };
        };
      }
      exports.extend = extend5;
      function reduce8(F) {
        return function(b, f5) {
          return function(fa) {
            return F.reduce(fa, b, f5);
          };
        };
      }
      exports.reduce = reduce8;
      function foldMap8(F) {
        return function(M) {
          var foldMapM = F.foldMap(M);
          return function(f5) {
            return function(fa) {
              return foldMapM(fa, f5);
            };
          };
        };
      }
      exports.foldMap = foldMap8;
      function reduceRight8(F) {
        return function(b, f5) {
          return function(fa) {
            return F.reduceRight(fa, b, f5);
          };
        };
      }
      exports.reduceRight = reduceRight8;
      function reduceWithIndex7(F) {
        return function(b, f5) {
          return function(fa) {
            return F.reduceWithIndex(fa, b, f5);
          };
        };
      }
      exports.reduceWithIndex = reduceWithIndex7;
      function foldMapWithIndex7(F) {
        return function(M) {
          var foldMapWithIndexM = F.foldMapWithIndex(M);
          return function(f5) {
            return function(fa) {
              return foldMapWithIndexM(fa, f5);
            };
          };
        };
      }
      exports.foldMapWithIndex = foldMapWithIndex7;
      function reduceRightWithIndex7(F) {
        return function(b, f5) {
          return function(fa) {
            return F.reduceRightWithIndex(fa, b, f5);
          };
        };
      }
      exports.reduceRightWithIndex = reduceRightWithIndex7;
      function alt7(F) {
        return function(that) {
          return function(fa) {
            return F.alt(fa, that);
          };
        };
      }
      exports.alt = alt7;
      function filter9(F) {
        return function(predicate) {
          return function(fa) {
            return F.filter(fa, predicate);
          };
        };
      }
      exports.filter = filter9;
      function filterMap8(F) {
        return function(f5) {
          return function(fa) {
            return F.filterMap(fa, f5);
          };
        };
      }
      exports.filterMap = filterMap8;
      function partition8(F) {
        return function(f5) {
          return function(fa) {
            return F.partition(fa, f5);
          };
        };
      }
      exports.partition = partition8;
      function partitionMap8(F) {
        return function(f5) {
          return function(fa) {
            return F.partitionMap(fa, f5);
          };
        };
      }
      exports.partitionMap = partitionMap8;
      function filterWithIndex6(F) {
        return function(predicate) {
          return function(fa) {
            return F.filterWithIndex(fa, predicate);
          };
        };
      }
      exports.filterWithIndex = filterWithIndex6;
      function filterMapWithIndex5(F) {
        return function(f5) {
          return function(fa) {
            return F.filterMapWithIndex(fa, f5);
          };
        };
      }
      exports.filterMapWithIndex = filterMapWithIndex5;
      function partitionWithIndex5(F) {
        return function(f5) {
          return function(fa) {
            return F.partitionWithIndex(fa, f5);
          };
        };
      }
      exports.partitionWithIndex = partitionWithIndex5;
      function partitionMapWithIndex5(F) {
        return function(f5) {
          return function(fa) {
            return F.partitionMapWithIndex(fa, f5);
          };
        };
      }
      exports.partitionMapWithIndex = partitionMapWithIndex5;
      function promap(F) {
        return function(f5, g) {
          return function(fbc) {
            return F.promap(fbc, f5, g);
          };
        };
      }
      exports.promap = promap;
      function compose(F) {
        return function(ea) {
          return function(ab) {
            return F.compose(ab, ea);
          };
        };
      }
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
      function pipeable(I) {
        var r = {};
        if (isFunctor(I)) {
          r.map = map13(I);
        }
        if (isContravariant(I)) {
          r.contramap = contramap(I);
        }
        if (isFunctorWithIndex(I)) {
          r.mapWithIndex = mapWithIndex6(I);
        }
        if (isApply(I)) {
          r.ap = ap10(I);
          r.apFirst = (0, Apply_1.apFirst)(I);
          r.apSecond = (0, Apply_1.apSecond)(I);
        }
        if (isChain(I)) {
          r.chain = chain9(I);
          r.chainFirst = (0, Chain_1.chainFirst)(I);
          r.flatten = r.chain(function_1.identity);
        }
        if (isBifunctor(I)) {
          r.bimap = bimap(I);
          r.mapLeft = mapLeft(I);
        }
        if (isExtend(I)) {
          r.extend = extend5(I);
          r.duplicate = r.extend(function_1.identity);
        }
        if (isFoldable(I)) {
          r.reduce = reduce8(I);
          r.foldMap = foldMap8(I);
          r.reduceRight = reduceRight8(I);
        }
        if (isFoldableWithIndex(I)) {
          r.reduceWithIndex = reduceWithIndex7(I);
          r.foldMapWithIndex = foldMapWithIndex7(I);
          r.reduceRightWithIndex = reduceRightWithIndex7(I);
        }
        if (isAlt(I)) {
          r.alt = alt7(I);
        }
        if (isCompactable(I)) {
          r.compact = I.compact;
          r.separate = I.separate;
        }
        if (isFilterable(I)) {
          r.filter = filter9(I);
          r.filterMap = filterMap8(I);
          r.partition = partition8(I);
          r.partitionMap = partitionMap8(I);
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
          var fromOption4 = function(onNone) {
            return function(ma) {
              return ma._tag === "None" ? I.throwError(onNone()) : I.of(ma.value);
            };
          };
          var fromEither6 = function(ma) {
            return ma._tag === "Left" ? I.throwError(ma.left) : I.of(ma.right);
          };
          var fromPredicate7 = function(predicate, onFalse) {
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
          r.fromOption = fromOption4;
          r.fromEither = fromEither6;
          r.fromPredicate = fromPredicate7;
          r.filterOrElse = filterOrElse;
        }
        return r;
      }
      exports.pipeable = pipeable;
      exports.pipe = function_1.pipe;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/string.js
  var require_string = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.endsWith = exports.startsWith = exports.includes = exports.split = exports.size = exports.isEmpty = exports.slice = exports.trimRight = exports.trimLeft = exports.trim = exports.replace = exports.toLowerCase = exports.toUpperCase = exports.isString = exports.Show = exports.Ord = exports.Monoid = exports.empty = exports.Semigroup = exports.Eq = void 0;
      var ReadonlyNonEmptyArray_1 = require_ReadonlyNonEmptyArray();
      exports.Eq = {
        equals: function(first3, second) {
          return first3 === second;
        }
      };
      exports.Semigroup = {
        concat: function(first3, second) {
          return first3 + second;
        }
      };
      exports.empty = "";
      exports.Monoid = {
        concat: exports.Semigroup.concat,
        empty: exports.empty
      };
      exports.Ord = {
        equals: exports.Eq.equals,
        compare: function(first3, second) {
          return first3 < second ? -1 : first3 > second ? 1 : 0;
        }
      };
      exports.Show = {
        show: function(s) {
          return JSON.stringify(s);
        }
      };
      var isString = function(u) {
        return typeof u === "string";
      };
      exports.isString = isString;
      var toUpperCase = function(s) {
        return s.toUpperCase();
      };
      exports.toUpperCase = toUpperCase;
      var toLowerCase = function(s) {
        return s.toLowerCase();
      };
      exports.toLowerCase = toLowerCase;
      var replace = function(searchValue, replaceValue) {
        return function(s) {
          return s.replace(searchValue, replaceValue);
        };
      };
      exports.replace = replace;
      var trim = function(s) {
        return s.trim();
      };
      exports.trim = trim;
      var trimLeft = function(s) {
        return s.trimLeft();
      };
      exports.trimLeft = trimLeft;
      var trimRight = function(s) {
        return s.trimRight();
      };
      exports.trimRight = trimRight;
      var slice = function(start, end) {
        return function(s) {
          return s.slice(start, end);
        };
      };
      exports.slice = slice;
      var isEmpty5 = function(s) {
        return s.length === 0;
      };
      exports.isEmpty = isEmpty5;
      var size5 = function(s) {
        return s.length;
      };
      exports.size = size5;
      var split = function(separator) {
        return function(s) {
          var out = s.split(separator);
          return (0, ReadonlyNonEmptyArray_1.isNonEmpty)(out) ? out : [s];
        };
      };
      exports.split = split;
      var includes = function(searchString, position) {
        return function(s) {
          return s.includes(searchString, position);
        };
      };
      exports.includes = includes;
      var startsWith = function(searchString, position) {
        return function(s) {
          return s.startsWith(searchString, position);
        };
      };
      exports.startsWith = startsWith;
      var endsWith = function(searchString, position) {
        return function(s) {
          return s.endsWith(searchString, position);
        };
      };
      exports.endsWith = endsWith;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyRecord.js
  var require_ReadonlyRecord = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyRecord.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports._partition = exports._filterMap = exports._filter = exports._reduceRight = exports._foldMap = exports._reduce = exports._mapWithIndex = exports._map = exports.difference = exports.intersection = exports.union = exports.elem = exports.some = exports.every = exports.fromEntries = exports.toEntries = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.toRecord = exports.fromRecord = void 0;
      exports.readonlyRecord = exports.hasOwnProperty = exports.insertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.getDifferenceMagma = exports.getIntersectionSemigroup = exports.getUnionMonoid = exports.getUnionSemigroup = exports.getWitherable = exports.getTraversableWithIndex = exports.getTraversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.getFoldableWithIndex = exports.getFoldable = exports.FunctorWithIndex = exports.flap = exports.Functor = exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports._sequence = exports._traverse = exports._filterWithIndex = exports._filterMapWithIndex = exports._partitionWithIndex = exports._partitionMapWithIndex = exports._reduceRightWithIndex = exports._foldMapWithIndex = exports._reduceWithIndex = exports._partitionMap = void 0;
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
      var size5 = function(r) {
        return Object.keys(r).length;
      };
      exports.size = size5;
      var isEmpty5 = function(r) {
        for (var k in r) {
          if (_.has.call(r, k)) {
            return false;
          }
        }
        return true;
      };
      exports.isEmpty = isEmpty5;
      var keys_3 = function(O2) {
        return function(r) {
          return Object.keys(r).sort(O2.compare);
        };
      };
      exports.keys = keys_3(S.Ord);
      function collect3(O2) {
        if (typeof O2 === "function") {
          return collect3(S.Ord)(O2);
        }
        var keysO = keys_3(O2);
        return function(f5) {
          return function(r) {
            var out = [];
            for (var _i = 0, _a = keysO(r); _i < _a.length; _i++) {
              var key = _a[_i];
              out.push(f5(key, r[key]));
            }
            return out;
          };
        };
      }
      exports.collect = collect3;
      exports.toReadonlyArray = /* @__PURE__ */ collect3(S.Ord)(function(k, a) {
        return [k, a];
      });
      function toUnfoldable2(U) {
        return function(r) {
          var sas = (0, exports.toReadonlyArray)(r);
          var len = sas.length;
          return U.unfold(0, function(b) {
            return b < len ? _.some([sas[b], b + 1]) : _.none;
          });
        };
      }
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
      function deleteAt4(k) {
        return function(r) {
          if (!_.has.call(r, k)) {
            return r;
          }
          var out = Object.assign({}, r);
          delete out[k];
          return out;
        };
      }
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
      var modifyAt5 = function(k, f5) {
        return function(r) {
          if (!(0, exports.has)(k, r)) {
            return _.none;
          }
          var next = f5(r[k]);
          if (next === r[k]) {
            return _.some(r);
          }
          var out = Object.assign({}, r);
          out[k] = next;
          return _.some(out);
        };
      };
      exports.modifyAt = modifyAt5;
      function pop2(k) {
        var deleteAtk = deleteAt4(k);
        return function(r) {
          var oa = lookup5(k, r);
          return _.isNone(oa) ? _.none : _.some([oa.value, deleteAtk(r)]);
        };
      }
      exports.pop = pop2;
      function isSubrecord3(E) {
        return function(me, that) {
          if (that === void 0) {
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
      }
      exports.isSubrecord = isSubrecord3;
      function lookup5(k, r) {
        if (r === void 0) {
          return function(r2) {
            return lookup5(k, r2);
          };
        }
        return _.has.call(r, k) ? _.some(r[k]) : _.none;
      }
      exports.lookup = lookup5;
      exports.empty = {};
      function mapWithIndex6(f5) {
        return function(r) {
          var out = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              out[k] = f5(k, r[k]);
            }
          }
          return out;
        };
      }
      exports.mapWithIndex = mapWithIndex6;
      function map13(f5) {
        return mapWithIndex6(function(_2, a) {
          return f5(a);
        });
      }
      exports.map = map13;
      function reduceWithIndex7() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 2) {
          return reduceWithIndex7(S.Ord).apply(void 0, args);
        }
        var keysO = keys_3(args[0]);
        return function(b, f5) {
          return function(fa) {
            var out = b;
            var ks = keysO(fa);
            var len = ks.length;
            for (var i = 0; i < len; i++) {
              var k = ks[i];
              out = f5(k, out, fa[k]);
            }
            return out;
          };
        };
      }
      exports.reduceWithIndex = reduceWithIndex7;
      function foldMapWithIndex7(O2) {
        if ("compare" in O2) {
          var keysO_1 = keys_3(O2);
          return function(M) {
            return function(f5) {
              return function(fa) {
                var out = M.empty;
                var ks = keysO_1(fa);
                var len = ks.length;
                for (var i = 0; i < len; i++) {
                  var k = ks[i];
                  out = M.concat(out, f5(k, fa[k]));
                }
                return out;
              };
            };
          };
        }
        return foldMapWithIndex7(S.Ord)(O2);
      }
      exports.foldMapWithIndex = foldMapWithIndex7;
      function reduceRightWithIndex7() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 2) {
          return reduceRightWithIndex7(S.Ord).apply(void 0, args);
        }
        var keysO = keys_3(args[0]);
        return function(b, f5) {
          return function(fa) {
            var out = b;
            var ks = keysO(fa);
            var len = ks.length;
            for (var i = len - 1; i >= 0; i--) {
              var k = ks[i];
              out = f5(k, fa[k], out);
            }
            return out;
          };
        };
      }
      exports.reduceRightWithIndex = reduceRightWithIndex7;
      var singleton4 = function(k, a) {
        var _a;
        return _a = {}, _a[k] = a, _a;
      };
      exports.singleton = singleton4;
      function traverseWithIndex6(F) {
        var traverseWithIndexOF = _traverseWithIndex6(S.Ord)(F);
        return function(f5) {
          return function(ta) {
            return traverseWithIndexOF(ta, f5);
          };
        };
      }
      exports.traverseWithIndex = traverseWithIndex6;
      function traverse7(F) {
        var traverseOF = (0, exports._traverse)(S.Ord)(F);
        return function(f5) {
          return function(ta) {
            return traverseOF(ta, f5);
          };
        };
      }
      exports.traverse = traverse7;
      function sequence7(F) {
        return (0, exports._sequence)(S.Ord)(F);
      }
      exports.sequence = sequence7;
      var wither5 = function(F) {
        var traverseF = traverse7(F);
        return function(f5) {
          return function(fa) {
            return F.map((0, function_1.pipe)(fa, traverseF(f5)), exports.compact);
          };
        };
      };
      exports.wither = wither5;
      var wilt5 = function(F) {
        var traverseF = traverse7(F);
        return function(f5) {
          return function(fa) {
            return F.map((0, function_1.pipe)(fa, traverseF(f5)), exports.separate);
          };
        };
      };
      exports.wilt = wilt5;
      function partitionMapWithIndex5(f5) {
        return function(r) {
          var left = {};
          var right = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var e = f5(k, r[k]);
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
      }
      exports.partitionMapWithIndex = partitionMapWithIndex5;
      function partitionWithIndex5(predicateWithIndex) {
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
      }
      exports.partitionWithIndex = partitionWithIndex5;
      function filterMapWithIndex5(f5) {
        return function(r) {
          var out = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var ob = f5(k, r[k]);
              if (_.isSome(ob)) {
                out[k] = ob.value;
              }
            }
          }
          return out;
        };
      }
      exports.filterMapWithIndex = filterMapWithIndex5;
      function filterWithIndex6(predicateWithIndex) {
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
      }
      exports.filterWithIndex = filterWithIndex6;
      function fromFoldable3(M, F) {
        var fromFoldableMapM = fromFoldableMap3(M, F);
        return function(fka) {
          return fromFoldableMapM(fka, function_1.identity);
        };
      }
      exports.fromFoldable = fromFoldable3;
      function fromFoldableMap3(M, F) {
        return function(ta, f5) {
          return F.reduce(ta, {}, function(r, a) {
            var _a = f5(a), k = _a[0], b = _a[1];
            r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b;
            return r;
          });
        };
      }
      exports.fromFoldableMap = fromFoldableMap3;
      exports.toEntries = exports.toReadonlyArray;
      var fromEntries2 = function(fa) {
        var out = {};
        for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
          var a = fa_1[_i];
          out[a[0]] = a[1];
        }
        return out;
      };
      exports.fromEntries = fromEntries2;
      function every5(predicate) {
        return function(r) {
          for (var k in r) {
            if (!predicate(r[k])) {
              return false;
            }
          }
          return true;
        };
      }
      exports.every = every5;
      function some9(predicate) {
        return function(r) {
          for (var k in r) {
            if (predicate(r[k])) {
              return true;
            }
          }
          return false;
        };
      }
      exports.some = some9;
      function elem6(E) {
        return function(a, fa) {
          if (fa === void 0) {
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
      }
      exports.elem = elem6;
      var union7 = function(M) {
        return function(second) {
          return function(first3) {
            if ((0, exports.isEmpty)(first3)) {
              return second;
            }
            if ((0, exports.isEmpty)(second)) {
              return first3;
            }
            var out = {};
            for (var k in first3) {
              if ((0, exports.has)(k, second)) {
                out[k] = M.concat(first3[k], second[k]);
              } else {
                out[k] = first3[k];
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
      exports.union = union7;
      var intersection5 = function(M) {
        return function(second) {
          return function(first3) {
            if ((0, exports.isEmpty)(first3) || (0, exports.isEmpty)(second)) {
              return exports.empty;
            }
            var out = {};
            for (var k in first3) {
              if ((0, exports.has)(k, second)) {
                out[k] = M.concat(first3[k], second[k]);
              }
            }
            return out;
          };
        };
      };
      exports.intersection = intersection5;
      var difference5 = function(second) {
        return function(first3) {
          if ((0, exports.isEmpty)(first3)) {
            return second;
          }
          if ((0, exports.isEmpty)(second)) {
            return first3;
          }
          var out = {};
          for (var k in first3) {
            if (!(0, exports.has)(k, second)) {
              out[k] = first3[k];
            }
          }
          for (var k in second) {
            if (!(0, exports.has)(k, first3)) {
              out[k] = second[k];
            }
          }
          return out;
        };
      };
      exports.difference = difference5;
      var _map9 = function(fa, f5) {
        return (0, function_1.pipe)(fa, map13(f5));
      };
      exports._map = _map9;
      var _mapWithIndex6 = function(fa, f5) {
        return (0, function_1.pipe)(fa, mapWithIndex6(f5));
      };
      exports._mapWithIndex = _mapWithIndex6;
      var _reduce7 = function(O2) {
        var reduceO = reduce8(O2);
        return function(fa, b, f5) {
          return (0, function_1.pipe)(fa, reduceO(b, f5));
        };
      };
      exports._reduce = _reduce7;
      var _foldMap7 = function(O2) {
        return function(M) {
          var foldMapM = foldMap8(O2)(M);
          return function(fa, f5) {
            return (0, function_1.pipe)(fa, foldMapM(f5));
          };
        };
      };
      exports._foldMap = _foldMap7;
      var _reduceRight7 = function(O2) {
        var reduceRightO = reduceRight8(O2);
        return function(fa, b, f5) {
          return (0, function_1.pipe)(fa, reduceRightO(b, f5));
        };
      };
      exports._reduceRight = _reduceRight7;
      var _filter7 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
      };
      exports._filter = _filter7;
      var _filterMap7 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.filterMap)(f5));
      };
      exports._filterMap = _filterMap7;
      var _partition7 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
      };
      exports._partition = _partition7;
      var _partitionMap7 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f5));
      };
      exports._partitionMap = _partitionMap7;
      var _reduceWithIndex6 = function(O2) {
        var reduceWithIndexO = reduceWithIndex7(O2);
        return function(fa, b, f5) {
          return (0, function_1.pipe)(fa, reduceWithIndexO(b, f5));
        };
      };
      exports._reduceWithIndex = _reduceWithIndex6;
      var _foldMapWithIndex6 = function(O2) {
        var foldMapWithIndexO = foldMapWithIndex7(O2);
        return function(M) {
          var foldMapWithIndexM = foldMapWithIndexO(M);
          return function(fa, f5) {
            return (0, function_1.pipe)(fa, foldMapWithIndexM(f5));
          };
        };
      };
      exports._foldMapWithIndex = _foldMapWithIndex6;
      var _reduceRightWithIndex6 = function(O2) {
        var reduceRightWithIndexO = reduceRightWithIndex7(O2);
        return function(fa, b, f5) {
          return (0, function_1.pipe)(fa, reduceRightWithIndexO(b, f5));
        };
      };
      exports._reduceRightWithIndex = _reduceRightWithIndex6;
      var _partitionMapWithIndex5 = function(fa, f5) {
        return (0, function_1.pipe)(fa, partitionMapWithIndex5(f5));
      };
      exports._partitionMapWithIndex = _partitionMapWithIndex5;
      var _partitionWithIndex5 = function(fa, predicateWithIndex) {
        return (0, function_1.pipe)(fa, partitionWithIndex5(predicateWithIndex));
      };
      exports._partitionWithIndex = _partitionWithIndex5;
      var _filterMapWithIndex5 = function(fa, f5) {
        return (0, function_1.pipe)(fa, filterMapWithIndex5(f5));
      };
      exports._filterMapWithIndex = _filterMapWithIndex5;
      var _filterWithIndex5 = function(fa, predicateWithIndex) {
        return (0, function_1.pipe)(fa, filterWithIndex6(predicateWithIndex));
      };
      exports._filterWithIndex = _filterWithIndex5;
      var _traverse7 = function(O2) {
        var traverseWithIndexO = _traverseWithIndex6(O2);
        return function(F) {
          var traverseWithIndexOF = traverseWithIndexO(F);
          return function(ta, f5) {
            return traverseWithIndexOF(ta, (0, function_1.flow)(function_1.SK, f5));
          };
        };
      };
      exports._traverse = _traverse7;
      var _sequence3 = function(O2) {
        var traverseO = (0, exports._traverse)(O2);
        return function(F) {
          var traverseOF = traverseO(F);
          return function(ta) {
            return traverseOF(ta, function_1.identity);
          };
        };
      };
      exports._sequence = _sequence3;
      var _traverseWithIndex6 = function(O2) {
        return function(F) {
          var keysO = keys_3(O2);
          return function(ta, f5) {
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
              }), f5(key2, ta[key2]));
            };
            for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
              var key = ks_1[_i];
              _loop_1(key);
            }
            return fr;
          };
        };
      };
      var filter9 = function(predicate) {
        return filterWithIndex6(function(_2, a) {
          return predicate(a);
        });
      };
      exports.filter = filter9;
      var filterMap8 = function(f5) {
        return filterMapWithIndex5(function(_2, a) {
          return f5(a);
        });
      };
      exports.filterMap = filterMap8;
      var partition8 = function(predicate) {
        return partitionWithIndex5(function(_2, a) {
          return predicate(a);
        });
      };
      exports.partition = partition8;
      var partitionMap8 = function(f5) {
        return partitionMapWithIndex5(function(_2, a) {
          return f5(a);
        });
      };
      exports.partitionMap = partitionMap8;
      function reduce8() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 1) {
          var reduceWithIndexO_1 = reduceWithIndex7(args[0]);
          return function(b, f5) {
            return reduceWithIndexO_1(b, function(_2, b2, a) {
              return f5(b2, a);
            });
          };
        }
        return reduce8(S.Ord).apply(void 0, args);
      }
      exports.reduce = reduce8;
      function foldMap8(O2) {
        if ("compare" in O2) {
          var foldMapWithIndexO_1 = foldMapWithIndex7(O2);
          return function(M) {
            var foldMapWithIndexM = foldMapWithIndexO_1(M);
            return function(f5) {
              return foldMapWithIndexM(function(_2, a) {
                return f5(a);
              });
            };
          };
        }
        return foldMap8(S.Ord)(O2);
      }
      exports.foldMap = foldMap8;
      function reduceRight8() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 1) {
          var reduceRightWithIndexO_1 = reduceRightWithIndex7(args[0]);
          return function(b, f5) {
            return reduceRightWithIndexO_1(b, function(_2, b2, a) {
              return f5(b2, a);
            });
          };
        }
        return reduceRight8(S.Ord).apply(void 0, args);
      }
      exports.reduceRight = reduceRight8;
      var compact8 = function(r) {
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
      exports.compact = compact8;
      var separate8 = function(r) {
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
      exports.separate = separate8;
      exports.URI = "ReadonlyRecord";
      function getShow8(O2) {
        if ("compare" in O2) {
          return function(S2) {
            return {
              show: function(r) {
                var elements = collect3(O2)(function(k, a) {
                  return "".concat(JSON.stringify(k), ": ").concat(S2.show(a));
                })(r).join(", ");
                return elements === "" ? "{}" : "{ ".concat(elements, " }");
              }
            };
          };
        }
        return getShow8(S.Ord)(O2);
      }
      exports.getShow = getShow8;
      function getEq8(E) {
        var isSubrecordE = isSubrecord3(E);
        return (0, Eq_1.fromEquals)(function(x, y) {
          return isSubrecordE(x)(y) && isSubrecordE(y)(x);
        });
      }
      exports.getEq = getEq8;
      function getMonoid10(S2) {
        return {
          concat: function(first3, second) {
            if ((0, exports.isEmpty)(first3)) {
              return second;
            }
            if ((0, exports.isEmpty)(second)) {
              return first3;
            }
            var r = Object.assign({}, first3);
            for (var k in second) {
              if (_.has.call(second, k)) {
                r[k] = _.has.call(first3, k) ? S2.concat(first3[k], second[k]) : second[k];
              }
            }
            return r;
          },
          empty: exports.empty
        };
      }
      exports.getMonoid = getMonoid10;
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
      var getFoldable2 = function(O2) {
        return {
          URI: exports.URI,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2)
        };
      };
      exports.getFoldable = getFoldable2;
      var getFoldableWithIndex2 = function(O2) {
        return {
          URI: exports.URI,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2),
          reduceWithIndex: (0, exports._reduceWithIndex)(O2),
          foldMapWithIndex: (0, exports._foldMapWithIndex)(O2),
          reduceRightWithIndex: (0, exports._reduceRightWithIndex)(O2)
        };
      };
      exports.getFoldableWithIndex = getFoldableWithIndex2;
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
      var getTraversable2 = function(O2) {
        return {
          URI: exports.URI,
          map: exports._map,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2),
          traverse: (0, exports._traverse)(O2),
          sequence: (0, exports._sequence)(O2)
        };
      };
      exports.getTraversable = getTraversable2;
      var getTraversableWithIndex2 = function(O2) {
        return {
          URI: exports.URI,
          map: exports._map,
          mapWithIndex: exports._mapWithIndex,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2),
          reduceWithIndex: (0, exports._reduceWithIndex)(O2),
          foldMapWithIndex: (0, exports._foldMapWithIndex)(O2),
          reduceRightWithIndex: (0, exports._reduceRightWithIndex)(O2),
          traverse: (0, exports._traverse)(O2),
          sequence: (0, exports._sequence)(O2),
          traverseWithIndex: _traverseWithIndex6(O2)
        };
      };
      exports.getTraversableWithIndex = getTraversableWithIndex2;
      var getWitherable2 = function(O2) {
        var T = (0, exports.getTraversable)(O2);
        return {
          URI: exports.URI,
          map: exports._map,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2),
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
          concat: function(first3, second) {
            return unionS(second)(first3);
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
          concat: function(first3, second) {
            return intersectionS(second)(first3);
          }
        };
      };
      exports.getIntersectionSemigroup = getIntersectionSemigroup4;
      var getDifferenceMagma4 = function() {
        return {
          concat: function(first3, second) {
            return (0, exports.difference)(second)(first3);
          }
        };
      };
      exports.getDifferenceMagma = getDifferenceMagma4;
      exports.Foldable = {
        URI: exports.URI,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord)
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        reduceWithIndex: /* @__PURE__ */ (0, exports._reduceWithIndex)(S.Ord),
        foldMapWithIndex: /* @__PURE__ */ (0, exports._foldMapWithIndex)(S.Ord),
        reduceRightWithIndex: /* @__PURE__ */ (0, exports._reduceRightWithIndex)(S.Ord)
      };
      exports.Traversable = {
        URI: exports.URI,
        map: exports._map,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence: sequence7
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: exports._map,
        mapWithIndex: exports._mapWithIndex,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        reduceWithIndex: /* @__PURE__ */ (0, exports._reduceWithIndex)(S.Ord),
        foldMapWithIndex: /* @__PURE__ */ (0, exports._foldMapWithIndex)(S.Ord),
        reduceRightWithIndex: /* @__PURE__ */ (0, exports._reduceRightWithIndex)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence: sequence7,
        traverseWithIndex: /* @__PURE__ */ _traverseWithIndex6(S.Ord)
      };
      var _wither5 = /* @__PURE__ */ (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
      var _wilt5 = /* @__PURE__ */ (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
      exports.Witherable = {
        URI: exports.URI,
        map: exports._map,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence: sequence7,
        compact: exports.compact,
        separate: exports.separate,
        filter: exports._filter,
        filterMap: exports._filterMap,
        partition: exports._partition,
        partitionMap: exports._partitionMap,
        wither: _wither5,
        wilt: _wilt5
      };
      exports.insertAt = exports.upsertAt;
      function hasOwnProperty3(k, r) {
        return _.has.call(r === void 0 ? this : r, k);
      }
      exports.hasOwnProperty = hasOwnProperty3;
      exports.readonlyRecord = {
        URI: exports.URI,
        map: exports._map,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence: sequence7,
        compact: exports.compact,
        separate: exports.separate,
        filter: exports._filter,
        filterMap: exports._filterMap,
        partition: exports._partition,
        partitionMap: exports._partitionMap,
        mapWithIndex: exports._mapWithIndex,
        reduceWithIndex: /* @__PURE__ */ (0, exports._reduceWithIndex)(S.Ord),
        foldMapWithIndex: /* @__PURE__ */ (0, exports._foldMapWithIndex)(S.Ord),
        reduceRightWithIndex: /* @__PURE__ */ (0, exports._reduceRightWithIndex)(S.Ord),
        filterMapWithIndex: exports._filterMapWithIndex,
        filterWithIndex: exports._filterWithIndex,
        partitionMapWithIndex: exports._partitionMapWithIndex,
        partitionWithIndex: exports._partitionWithIndex,
        traverseWithIndex: /* @__PURE__ */ _traverseWithIndex6(S.Ord),
        wither: _wither5,
        wilt: _wilt5
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ChainRec.js
  var require_ChainRec = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ChainRec.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.tailRec = void 0;
      var tailRec = function(startWith, f5) {
        var ab = f5(startWith);
        while (ab._tag === "Left") {
          ab = f5(ab.left);
        }
        return ab.right;
      };
      exports.tailRec = tailRec;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Either.js
  var require_Either = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Either.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.match = exports.foldW = exports.matchW = exports.isRight = exports.isLeft = exports.fromOption = exports.fromPredicate = exports.FromEither = exports.MonadThrow = exports.throwError = exports.ChainRec = exports.Extend = exports.extend = exports.Alt = exports.alt = exports.altW = exports.Bifunctor = exports.mapLeft = exports.bimap = exports.Traversable = exports.sequence = exports.traverse = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.Applicative = exports.Apply = exports.ap = exports.apW = exports.Pointed = exports.of = exports.asUnit = exports.as = exports.Functor = exports.map = exports.getAltValidation = exports.getApplicativeValidation = exports.getWitherable = exports.getFilterable = exports.getCompactable = exports.getSemigroup = exports.getEq = exports.getShow = exports.URI = exports.flatMap = exports.right = exports.left = void 0;
      exports.chainFirstW = exports.chainFirst = exports.chain = exports.chainW = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.let = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toError = exports.toUnion = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.orElse = exports.orElseW = exports.swap = exports.filterOrElseW = exports.filterOrElse = exports.flatMapOption = exports.flatMapNullable = exports.liftOption = exports.liftNullable = exports.chainOptionKW = exports.chainOptionK = exports.fromOptionK = exports.duplicate = exports.flatten = exports.flattenW = exports.tap = exports.apSecondW = exports.apSecond = exports.apFirstW = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = exports.fold = void 0;
      exports.getValidation = exports.getValidationMonoid = exports.getValidationSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.either = exports.stringifyJSON = exports.parseJSON = void 0;
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
      exports.flatMap = (0, function_1.dual)(2, function(ma, f5) {
        return (0, exports.isLeft)(ma) ? ma : f5(ma.right);
      });
      var _map9 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f5));
      };
      var _ap6 = function(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _reduce7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f5));
      };
      var _foldMap7 = function(M) {
        return function(fa, f5) {
          var foldMapM = (0, exports.foldMap)(M);
          return (0, function_1.pipe)(fa, foldMapM(f5));
        };
      };
      var _reduceRight7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f5));
      };
      var _traverse7 = function(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f5) {
          return (0, function_1.pipe)(ta, traverseF(f5));
        };
      };
      var _bimap = function(fa, f5, g) {
        return (0, function_1.pipe)(fa, (0, exports.bimap)(f5, g));
      };
      var _mapLeft = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f5));
      };
      var _alt6 = function(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _extend5 = function(wa, f5) {
        return (0, function_1.pipe)(wa, (0, exports.extend)(f5));
      };
      var _chainRec = function(a, f5) {
        return (0, ChainRec_1.tailRec)(f5(a), function(e) {
          return (0, exports.isLeft)(e) ? (0, exports.right)((0, exports.left)(e.left)) : (0, exports.isLeft)(e.right) ? (0, exports.left)(f5(e.right.left)) : (0, exports.right)((0, exports.right)(e.right.right));
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
      var getSemigroup8 = function(S) {
        return {
          concat: function(x, y) {
            return (0, exports.isLeft)(y) ? x : (0, exports.isLeft)(x) ? y : (0, exports.right)(S.concat(x.right, y.right));
          }
        };
      };
      exports.getSemigroup = getSemigroup8;
      var getCompactable = function(M) {
        var empty7 = (0, exports.left)(M.empty);
        return {
          URI: exports.URI,
          _E: void 0,
          compact: function(ma) {
            return (0, exports.isLeft)(ma) ? ma : ma.right._tag === "None" ? empty7 : (0, exports.right)(ma.right.value);
          },
          separate: function(ma) {
            return (0, exports.isLeft)(ma) ? (0, Separated_1.separated)(ma, ma) : (0, exports.isLeft)(ma.right) ? (0, Separated_1.separated)((0, exports.right)(ma.right.left), empty7) : (0, Separated_1.separated)(empty7, (0, exports.right)(ma.right.right));
          }
        };
      };
      exports.getCompactable = getCompactable;
      var getFilterable = function(M) {
        var empty7 = (0, exports.left)(M.empty);
        var _a = (0, exports.getCompactable)(M), compact8 = _a.compact, separate8 = _a.separate;
        var filter9 = function(ma, predicate) {
          return (0, exports.isLeft)(ma) ? ma : predicate(ma.right) ? ma : empty7;
        };
        var partition8 = function(ma, p4) {
          return (0, exports.isLeft)(ma) ? (0, Separated_1.separated)(ma, ma) : p4(ma.right) ? (0, Separated_1.separated)(empty7, (0, exports.right)(ma.right)) : (0, Separated_1.separated)((0, exports.right)(ma.right), empty7);
        };
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map9,
          compact: compact8,
          separate: separate8,
          filter: filter9,
          filterMap: function(ma, f5) {
            if ((0, exports.isLeft)(ma)) {
              return ma;
            }
            var ob = f5(ma.right);
            return ob._tag === "None" ? empty7 : (0, exports.right)(ob.value);
          },
          partition: partition8,
          partitionMap: function(ma, f5) {
            if ((0, exports.isLeft)(ma)) {
              return (0, Separated_1.separated)(ma, ma);
            }
            var e = f5(ma.right);
            return (0, exports.isLeft)(e) ? (0, Separated_1.separated)((0, exports.right)(e.left), empty7) : (0, Separated_1.separated)(empty7, (0, exports.right)(e.right));
          }
        };
      };
      exports.getFilterable = getFilterable;
      var getWitherable2 = function(M) {
        var F_ = (0, exports.getFilterable)(M);
        var C = (0, exports.getCompactable)(M);
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map9,
          compact: F_.compact,
          separate: F_.separate,
          filter: F_.filter,
          filterMap: F_.filterMap,
          partition: F_.partition,
          partitionMap: F_.partitionMap,
          traverse: _traverse7,
          sequence: exports.sequence,
          reduce: _reduce7,
          foldMap: _foldMap7,
          reduceRight: _reduceRight7,
          wither: (0, Witherable_1.witherDefault)(exports.Traversable, C),
          wilt: (0, Witherable_1.wiltDefault)(exports.Traversable, C)
        };
      };
      exports.getWitherable = getWitherable2;
      var getApplicativeValidation = function(SE) {
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map9,
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
          _E: void 0,
          map: _map9,
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
      var map13 = function(f5) {
        return function(fa) {
          return (0, exports.isLeft)(fa) ? fa : (0, exports.right)(f5(fa.right));
        };
      };
      exports.map = map13;
      exports.Functor = {
        URI: exports.URI,
        map: _map9
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
        map: _map9,
        ap: _ap6
      };
      exports.Applicative = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        chain: exports.flatMap
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of,
        chain: exports.flatMap
      };
      var reduce8 = function(b, f5) {
        return function(fa) {
          return (0, exports.isLeft)(fa) ? b : f5(b, fa.right);
        };
      };
      exports.reduce = reduce8;
      var foldMap8 = function(M) {
        return function(f5) {
          return function(fa) {
            return (0, exports.isLeft)(fa) ? M.empty : f5(fa.right);
          };
        };
      };
      exports.foldMap = foldMap8;
      var reduceRight8 = function(b, f5) {
        return function(fa) {
          return (0, exports.isLeft)(fa) ? b : f5(fa.right, b);
        };
      };
      exports.reduceRight = reduceRight8;
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7
      };
      var traverse7 = function(F) {
        return function(f5) {
          return function(ta) {
            return (0, exports.isLeft)(ta) ? F.of((0, exports.left)(ta.left)) : F.map(f5(ta.right), exports.right);
          };
        };
      };
      exports.traverse = traverse7;
      var sequence7 = function(F) {
        return function(ma) {
          return (0, exports.isLeft)(ma) ? F.of((0, exports.left)(ma.left)) : F.map(ma.right, exports.right);
        };
      };
      exports.sequence = sequence7;
      exports.Traversable = {
        URI: exports.URI,
        map: _map9,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence
      };
      var bimap = function(f5, g) {
        return function(fa) {
          return (0, exports.isLeft)(fa) ? (0, exports.left)(f5(fa.left)) : (0, exports.right)(g(fa.right));
        };
      };
      exports.bimap = bimap;
      var mapLeft = function(f5) {
        return function(fa) {
          return (0, exports.isLeft)(fa) ? (0, exports.left)(f5(fa.left)) : fa;
        };
      };
      exports.mapLeft = mapLeft;
      exports.Bifunctor = {
        URI: exports.URI,
        bimap: _bimap,
        mapLeft: _mapLeft
      };
      var altW6 = function(that) {
        return function(fa) {
          return (0, exports.isLeft)(fa) ? that() : fa;
        };
      };
      exports.altW = altW6;
      exports.alt = exports.altW;
      exports.Alt = {
        URI: exports.URI,
        map: _map9,
        alt: _alt6
      };
      var extend5 = function(f5) {
        return function(wa) {
          return (0, exports.isLeft)(wa) ? wa : (0, exports.right)(f5(wa));
        };
      };
      exports.extend = extend5;
      exports.Extend = {
        URI: exports.URI,
        map: _map9,
        extend: _extend5
      };
      exports.ChainRec = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        chain: exports.flatMap,
        chainRec: _chainRec
      };
      exports.throwError = exports.left;
      exports.MonadThrow = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of,
        chain: exports.flatMap,
        throwError: exports.throwError
      };
      exports.FromEither = {
        URI: exports.URI,
        fromEither: function_1.identity
      };
      exports.fromPredicate = (0, FromEither_1.fromPredicate)(exports.FromEither);
      exports.fromOption = /* @__PURE__ */ (0, FromEither_1.fromOption)(exports.FromEither);
      exports.isLeft = _.isLeft;
      exports.isRight = _.isRight;
      var matchW5 = function(onLeft, onRight) {
        return function(ma) {
          return (0, exports.isLeft)(ma) ? onLeft(ma.left) : onRight(ma.right);
        };
      };
      exports.matchW = matchW5;
      exports.foldW = exports.matchW;
      exports.match = exports.matchW;
      exports.fold = exports.match;
      var getOrElseW3 = function(onLeft) {
        return function(ma) {
          return (0, exports.isLeft)(ma) ? onLeft(ma.left) : ma.right;
        };
      };
      exports.getOrElseW = getOrElseW3;
      exports.getOrElse = exports.getOrElseW;
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
      exports.apFirstW = exports.apFirst;
      exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
      exports.apSecondW = exports.apSecond;
      exports.tap = (0, function_1.dual)(2, chainable.tap(exports.Chain));
      exports.flattenW = /* @__PURE__ */ (0, exports.flatMap)(function_1.identity);
      exports.flatten = exports.flattenW;
      exports.duplicate = (0, exports.extend)(function_1.identity);
      exports.fromOptionK = /* @__PURE__ */ (0, FromEither_1.fromOptionK)(exports.FromEither);
      exports.chainOptionK = (0, FromEither_1.chainOptionK)(exports.FromEither, exports.Chain);
      exports.chainOptionKW = exports.chainOptionK;
      var _FromEither = {
        fromEither: exports.FromEither.fromEither
      };
      exports.liftNullable = _.liftNullable(_FromEither);
      exports.liftOption = _.liftOption(_FromEither);
      var _FlatMap3 = {
        flatMap: exports.flatMap
      };
      exports.flatMapNullable = _.flatMapNullable(_FromEither, _FlatMap3);
      exports.flatMapOption = _.flatMapOption(_FromEither, _FlatMap3);
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
      var fromNullable4 = function(e) {
        return function(a) {
          return a == null ? (0, exports.left)(e) : (0, exports.right)(a);
        };
      };
      exports.fromNullable = fromNullable4;
      var tryCatch3 = function(f5, onThrow) {
        try {
          return (0, exports.right)(f5());
        } catch (e) {
          return (0, exports.left)(onThrow(e));
        }
      };
      exports.tryCatch = tryCatch3;
      var tryCatchK3 = function(f5, onThrow) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return (0, exports.tryCatch)(function() {
            return f5.apply(void 0, a);
          }, onThrow);
        };
      };
      exports.tryCatchK = tryCatchK3;
      var fromNullableK4 = function(e) {
        var from = (0, exports.fromNullable)(e);
        return function(f5) {
          return (0, function_1.flow)(f5, from);
        };
      };
      exports.fromNullableK = fromNullableK4;
      var chainNullableK4 = function(e) {
        var from = (0, exports.fromNullableK)(e);
        return function(f5) {
          return (0, exports.flatMap)(from(f5));
        };
      };
      exports.chainNullableK = chainNullableK4;
      exports.toUnion = (0, exports.foldW)(function_1.identity, function_1.identity);
      function toError(e) {
        return e instanceof Error ? e : new Error(String(e));
      }
      exports.toError = toError;
      function elem6(E) {
        return function(a, ma) {
          if (ma === void 0) {
            var elemE_1 = elem6(E);
            return function(ma2) {
              return elemE_1(a, ma2);
            };
          }
          return (0, exports.isLeft)(ma) ? false : E.equals(a, ma.right);
        };
      }
      exports.elem = elem6;
      var exists4 = function(predicate) {
        return function(ma) {
          return (0, exports.isLeft)(ma) ? false : predicate(ma.right);
        };
      };
      exports.exists = exists4;
      exports.Do = (0, exports.of)(_.emptyRecord);
      exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
      var let_9 = /* @__PURE__ */ (0, Functor_1.let)(exports.Functor);
      exports.let = let_9;
      exports.bind = chainable.bind(exports.Chain);
      exports.bindW = exports.bind;
      exports.apS = (0, Apply_1.apS)(exports.Apply);
      exports.apSW = exports.apS;
      exports.ApT = (0, exports.of)(_.emptyReadonlyArray);
      var traverseReadonlyNonEmptyArrayWithIndex4 = function(f5) {
        return function(as5) {
          var e = f5(0, _.head(as5));
          if ((0, exports.isLeft)(e)) {
            return e;
          }
          var out = [e.right];
          for (var i = 1; i < as5.length; i++) {
            var e_1 = f5(i, as5[i]);
            if ((0, exports.isLeft)(e_1)) {
              return e_1;
            }
            out.push(e_1.right);
          }
          return (0, exports.right)(out);
        };
      };
      exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex4;
      var traverseReadonlyArrayWithIndex4 = function(f5) {
        var g = (0, exports.traverseReadonlyNonEmptyArrayWithIndex)(f5);
        return function(as5) {
          return _.isNonEmpty(as5) ? g(as5) : exports.ApT;
        };
      };
      exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex4;
      exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
      var traverseArray4 = function(f5) {
        return (0, exports.traverseReadonlyArrayWithIndex)(function(_2, a) {
          return f5(a);
        });
      };
      exports.traverseArray = traverseArray4;
      exports.sequenceArray = /* @__PURE__ */ (0, exports.traverseArray)(function_1.identity);
      exports.chainW = exports.flatMap;
      exports.chain = exports.flatMap;
      exports.chainFirst = exports.tap;
      exports.chainFirstW = exports.tap;
      function parseJSON(s, onError) {
        return (0, exports.tryCatch)(function() {
          return JSON.parse(s);
        }, onError);
      }
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
        map: _map9,
        of: exports.of,
        ap: _ap6,
        chain: exports.flatMap,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        bimap: _bimap,
        mapLeft: _mapLeft,
        alt: _alt6,
        extend: _extend5,
        chainRec: _chainRec,
        throwError: exports.throwError
      };
      exports.getApplySemigroup = /* @__PURE__ */ (0, Apply_1.getApplySemigroup)(exports.Apply);
      exports.getApplyMonoid = /* @__PURE__ */ (0, Applicative_1.getApplicativeMonoid)(exports.Applicative);
      var getValidationSemigroup = function(SE, SA) {
        return (0, Apply_1.getApplySemigroup)((0, exports.getApplicativeValidation)(SE))(SA);
      };
      exports.getValidationSemigroup = getValidationSemigroup;
      var getValidationMonoid = function(SE, MA) {
        return (0, Applicative_1.getApplicativeMonoid)((0, exports.getApplicativeValidation)(SE))(MA);
      };
      exports.getValidationMonoid = getValidationMonoid;
      function getValidation(SE) {
        var ap10 = (0, exports.getApplicativeValidation)(SE).ap;
        var alt7 = (0, exports.getAltValidation)(SE).alt;
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map9,
          of: exports.of,
          chain: exports.flatMap,
          bimap: _bimap,
          mapLeft: _mapLeft,
          reduce: _reduce7,
          foldMap: _foldMap7,
          reduceRight: _reduceRight7,
          extend: _extend5,
          traverse: _traverse7,
          sequence: exports.sequence,
          chainRec: _chainRec,
          throwError: exports.throwError,
          ap: ap10,
          alt: alt7
        };
      }
      exports.getValidation = getValidation;
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-c3196f52a2/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/lib/internal.js
  var require_internal2 = __commonJS({
    ".yarn/__virtual__/monocle-ts-virtual-c3196f52a2/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/lib/internal.js"(exports) {
      "use strict";
      var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.atReadonlyRecord = exports.at = exports.indexReadonlyRecord = exports.indexReadonlyNonEmptyArray = exports.indexReadonlyArray = exports.index = exports.traversalTraverse = exports.fromTraversable = exports.ApplicativeIdentity = exports.traversalComposeTraversal = exports.traversal = exports.optionalFindFirstNonEmpty = exports.optionalFindFirst = exports.optionalKey = exports.optionalIndexNonEmpty = exports.optionalIndex = exports.optionalComposeOptional = exports.optionalModify = exports.optionalModifyOption = exports.optionalAsTraversal = exports.optional = exports.prismLeft = exports.prismRight = exports.prismSome = exports.prismFromPredicate = exports.prismFromNullable = exports.prismComposeLens = exports.prismSet = exports.prismModify = exports.prismModifyOption = exports.prismAsTraversal = exports.prismAsOptional = exports.prism = exports.lensAtKey = exports.lensComponent = exports.lensProps = exports.lensProp = exports.lensId = exports.lensComposePrism = exports.prismComposePrism = exports.lensComposeLens = exports.lensAsTraversal = exports.lensAsOptional = exports.lens = exports.isoAsTraversal = exports.isoAsOptional = exports.isoAsPrism = exports.isoAsLens = exports.iso = void 0;
      var RA = require_ReadonlyArray();
      var RR = require_ReadonlyRecord();
      var function_1 = require_function();
      var O2 = require_Option();
      var E = require_Either();
      var pipeable_1 = require_pipeable();
      var iso = function(get2, reverseGet) {
        return {
          get: get2,
          reverseGet
        };
      };
      exports.iso = iso;
      var isoAsLens = function(sa) {
        return (0, exports.lens)(sa.get, (0, function_1.flow)(sa.reverseGet, function_1.constant));
      };
      exports.isoAsLens = isoAsLens;
      var isoAsPrism = function(sa) {
        return (0, exports.prism)((0, function_1.flow)(sa.get, O2.some), sa.reverseGet);
      };
      exports.isoAsPrism = isoAsPrism;
      var isoAsOptional = function(sa) {
        return (0, exports.optional)((0, function_1.flow)(sa.get, O2.some), (0, function_1.flow)(sa.reverseGet, function_1.constant));
      };
      exports.isoAsOptional = isoAsOptional;
      var isoAsTraversal = function(sa) {
        return (0, exports.traversal)(function(F) {
          return function(f5) {
            return function(s) {
              return F.map(f5(sa.get(s)), function(a) {
                return sa.reverseGet(a);
              });
            };
          };
        });
      };
      exports.isoAsTraversal = isoAsTraversal;
      var lens = function(get2, set) {
        return { get: get2, set };
      };
      exports.lens = lens;
      var lensAsOptional = function(sa) {
        return (0, exports.optional)((0, function_1.flow)(sa.get, O2.some), sa.set);
      };
      exports.lensAsOptional = lensAsOptional;
      var lensAsTraversal = function(sa) {
        return (0, exports.traversal)(function(F) {
          return function(f5) {
            return function(s) {
              return F.map(f5(sa.get(s)), function(a) {
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
          return (0, exports.prism)((0, function_1.flow)(sa.getOption, O2.chain(ab.getOption)), (0, function_1.flow)(ab.reverseGet, sa.reverseGet));
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
          }, function(ap10) {
            return function(s) {
              var _a;
              var oa = sa.get(s);
              if (ap10 === oa[prop]) {
                return s;
              }
              return sa.set(Object.assign({}, oa, (_a = {}, _a[prop] = ap10, _a)))(s);
            };
          });
        };
      };
      exports.lensProp = lensProp;
      var lensProps = function() {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          props[_i] = arguments[_i];
        }
        return function(sa) {
          return (0, exports.lens)(function(s) {
            var a = sa.get(s);
            var r = {};
            for (var _i2 = 0, props_1 = props; _i2 < props_1.length; _i2++) {
              var k = props_1[_i2];
              r[k] = a[k];
            }
            return r;
          }, function(a) {
            return function(s) {
              var oa = sa.get(s);
              for (var _i2 = 0, props_2 = props; _i2 < props_2.length; _i2++) {
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
          }, function(ap10) {
            return function(s) {
              var oa = sa.get(s);
              if (ap10 === oa[prop]) {
                return s;
              }
              var copy3 = oa.slice();
              copy3[prop] = ap10;
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
          return function(f5) {
            return function(s) {
              return (0, pipeable_1.pipe)(sa.getOption(s), O2.fold(function() {
                return F.of(s);
              }, function(a) {
                return F.map(f5(a), function(a2) {
                  return (0, exports.prismSet)(a2)(sa)(s);
                });
              }));
            };
          };
        });
      };
      exports.prismAsTraversal = prismAsTraversal;
      var prismModifyOption = function(f5) {
        return function(sa) {
          return function(s) {
            return (0, pipeable_1.pipe)(sa.getOption(s), O2.map(function(o) {
              var n = f5(o);
              return n === o ? s : sa.reverseGet(n);
            }));
          };
        };
      };
      exports.prismModifyOption = prismModifyOption;
      var prismModify = function(f5) {
        return function(sa) {
          var g = (0, exports.prismModifyOption)(f5)(sa);
          return function(s) {
            return (0, pipeable_1.pipe)(g(s), O2.getOrElse(function() {
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
        return (0, exports.prism)(O2.fromNullable, function_1.identity);
      };
      exports.prismFromNullable = prismFromNullable;
      var prismFromPredicate = function(predicate) {
        return (0, exports.prism)(O2.fromPredicate(predicate), function_1.identity);
      };
      exports.prismFromPredicate = prismFromPredicate;
      var prismSome = function() {
        return (0, exports.prism)(function_1.identity, O2.some);
      };
      exports.prismSome = prismSome;
      var prismRight = function() {
        return (0, exports.prism)(O2.fromEither, E.right);
      };
      exports.prismRight = prismRight;
      var prismLeft = function() {
        return (0, exports.prism)(
          function(s) {
            return E.isLeft(s) ? O2.some(s.left) : O2.none;
          },
          // TODO: replace with E.getLeft in v3
          E.left
        );
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
          return function(f5) {
            return function(s) {
              return (0, pipeable_1.pipe)(sa.getOption(s), O2.fold(function() {
                return F.of(s);
              }, function(a) {
                return F.map(f5(a), function(a2) {
                  return sa.set(a2)(s);
                });
              }));
            };
          };
        });
      };
      exports.optionalAsTraversal = optionalAsTraversal;
      var optionalModifyOption = function(f5) {
        return function(optional2) {
          return function(s) {
            return (0, pipeable_1.pipe)(optional2.getOption(s), O2.map(function(a) {
              var n = f5(a);
              return n === a ? s : optional2.set(n)(s);
            }));
          };
        };
      };
      exports.optionalModifyOption = optionalModifyOption;
      var optionalModify = function(f5) {
        return function(optional2) {
          var g = (0, exports.optionalModifyOption)(f5)(optional2);
          return function(s) {
            return (0, pipeable_1.pipe)(g(s), O2.getOrElse(function() {
              return s;
            }));
          };
        };
      };
      exports.optionalModify = optionalModify;
      var optionalComposeOptional = function(ab) {
        return function(sa) {
          return (0, exports.optional)((0, function_1.flow)(sa.getOption, O2.chain(ab.getOption)), function(b) {
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
            return (0, pipeable_1.pipe)(RA.findIndex(predicate)(s), O2.fold(function() {
              return s;
            }, function(i) {
              return RA.unsafeUpdateAt(i, a, s);
            }));
          };
        });
      };
      exports.optionalFindFirst = optionalFindFirst;
      var unsafeUpdateAt5 = function(i, a, as5) {
        if (as5[i] === a) {
          return as5;
        } else {
          var xs = __spreadArray6([as5[0]], as5.slice(1), true);
          xs[i] = a;
          return xs;
        }
      };
      var optionalFindFirstNonEmpty = function(predicate) {
        return (0, exports.optional)(RA.findFirst(predicate), function(a) {
          return function(as5) {
            return (0, pipeable_1.pipe)(RA.findIndex(predicate)(as5), O2.fold(function() {
              return as5;
            }, function(i) {
              return unsafeUpdateAt5(i, a, as5);
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
      function traversalComposeTraversal(ab) {
        return function(sa) {
          return (0, exports.traversal)(function(F) {
            return function(f5) {
              return sa.modifyF(F)(ab.modifyF(F)(f5));
            };
          });
        };
      }
      exports.traversalComposeTraversal = traversalComposeTraversal;
      exports.ApplicativeIdentity = {
        URI: "Identity",
        map: function(fa, f5) {
          return f5(fa);
        },
        of: function_1.identity,
        ap: (
          /* istanbul ignore next */
          function(fab, fa) {
            return fab(fa);
          }
        )
      };
      var isIdentity = function(F) {
        return F.URI === "Identity";
      };
      function fromTraversable(T) {
        return function() {
          return (0, exports.traversal)(function(F) {
            var traverseF = isIdentity(F) ? T.map : T.traverse(F);
            return function(f5) {
              return function(s) {
                return traverseF(s, f5);
              };
            };
          });
        };
      }
      exports.fromTraversable = fromTraversable;
      function traversalTraverse(T) {
        return traversalComposeTraversal(fromTraversable(T)());
      }
      exports.traversalTraverse = traversalTraverse;
      var index = function(index2) {
        return { index: index2 };
      };
      exports.index = index;
      var indexReadonlyArray = function() {
        return (0, exports.index)(function(i) {
          return (0, exports.optional)(function(as5) {
            return RA.lookup(i, as5);
          }, function(a) {
            return function(as5) {
              return (0, pipeable_1.pipe)(RA.lookup(i, as5), O2.fold(function() {
                return as5;
              }, function() {
                return RA.unsafeUpdateAt(i, a, as5);
              }));
            };
          });
        });
      };
      exports.indexReadonlyArray = indexReadonlyArray;
      var indexReadonlyNonEmptyArray = function() {
        return (0, exports.index)(function(i) {
          return (0, exports.optional)(function(as5) {
            return RA.lookup(i, as5);
          }, function(a) {
            return function(as5) {
              return (0, pipeable_1.pipe)(RA.lookup(i, as5), O2.fold(function() {
                return as5;
              }, function() {
                return unsafeUpdateAt5(i, a, as5);
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
              if (r[k] === a || O2.isNone(RR.lookup(k, r))) {
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
      function atReadonlyRecord() {
        return (0, exports.at)(function(key) {
          return (0, exports.lens)(function(r) {
            return RR.lookup(key, r);
          }, O2.fold(function() {
            return RR.deleteAt(key);
          }, function(a) {
            return RR.insertAt(key, a);
          }));
        });
      }
      exports.atReadonlyRecord = atReadonlyRecord;
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-c3196f52a2/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/lib/Traversal.js
  var require_Traversal = __commonJS({
    ".yarn/__virtual__/monocle-ts-virtual-c3196f52a2/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/lib/Traversal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Category = exports.Semigroupoid = exports.URI = exports.getAll = exports.fold = exports.foldMap = exports.findFirstNonEmpty = exports.findFirst = exports.traverse = exports.left = exports.right = exports.some = exports.atKey = exports.key = exports.indexNonEmpty = exports.index = exports.component = exports.props = exports.prop = exports.filter = exports.fromNullable = exports.set = exports.modify = exports.composeOptional = exports.composePrism = exports.composeLens = exports.composeIso = exports.composeTraversal = exports.compose = exports.fromTraversable = exports.id = exports.traversal = void 0;
      var C = require_Const();
      var function_1 = require_function();
      var pipeable_1 = require_pipeable();
      var RA = require_ReadonlyArray();
      var _ = require_internal2();
      exports.traversal = _.traversal;
      var id = function() {
        return (0, exports.traversal)(function(_2) {
          return function(f5) {
            return f5;
          };
        });
      };
      exports.id = id;
      exports.fromTraversable = _.fromTraversable;
      exports.compose = _.traversalComposeTraversal;
      exports.composeTraversal = exports.compose;
      exports.composeIso = /* @__PURE__ */ (0, function_1.flow)(_.isoAsTraversal, exports.compose);
      exports.composeLens = /* @__PURE__ */ (0, function_1.flow)(_.lensAsTraversal, _.traversalComposeTraversal);
      exports.composePrism = /* @__PURE__ */ (0, function_1.flow)(_.prismAsTraversal, _.traversalComposeTraversal);
      exports.composeOptional = /* @__PURE__ */ (0, function_1.flow)(_.optionalAsTraversal, _.traversalComposeTraversal);
      var modify = function(f5) {
        return function(sa) {
          return sa.modifyF(_.ApplicativeIdentity)(f5);
        };
      };
      exports.modify = modify;
      var set = function(a) {
        return (0, exports.modify)(function() {
          return a;
        });
      };
      exports.set = set;
      var fromNullable4 = function(sa) {
        return (0, exports.composePrism)(_.prismFromNullable())(sa);
      };
      exports.fromNullable = fromNullable4;
      function filter9(predicate) {
        return (0, exports.compose)(_.prismAsTraversal(_.prismFromPredicate(predicate)));
      }
      exports.filter = filter9;
      var prop = function(prop2) {
        return (0, exports.compose)((0, pipeable_1.pipe)(_.lensId(), _.lensProp(prop2), _.lensAsTraversal));
      };
      exports.prop = prop;
      var props = function() {
        var props2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
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
      exports.some = /* @__PURE__ */ (0, exports.compose)(/* @__PURE__ */ _.prismAsTraversal(/* @__PURE__ */ _.prismSome()));
      exports.right = /* @__PURE__ */ (0, exports.compose)(/* @__PURE__ */ _.prismAsTraversal(/* @__PURE__ */ _.prismRight()));
      exports.left = /* @__PURE__ */ (0, exports.compose)(/* @__PURE__ */ _.prismAsTraversal(/* @__PURE__ */ _.prismLeft()));
      exports.traverse = _.traversalTraverse;
      function findFirst3(predicate) {
        return (0, exports.composeOptional)(_.optionalFindFirst(predicate));
      }
      exports.findFirst = findFirst3;
      function findFirstNonEmpty(predicate) {
        return (0, exports.composeOptional)(_.optionalFindFirstNonEmpty(predicate));
      }
      exports.findFirstNonEmpty = findFirstNonEmpty;
      var foldMap8 = function(M) {
        return function(f5) {
          return function(sa) {
            return sa.modifyF(C.getApplicative(M))(function(a) {
              return C.make(f5(a));
            });
          };
        };
      };
      exports.foldMap = foldMap8;
      var fold4 = function(M) {
        return (0, exports.foldMap)(M)(function_1.identity);
      };
      exports.fold = fold4;
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
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-c3196f52a2/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/lib/Lens.js
  var require_Lens = __commonJS({
    ".yarn/__virtual__/monocle-ts-virtual-c3196f52a2/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/lib/Lens.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Category = exports.Semigroupoid = exports.Invariant = exports.URI = exports.imap = exports.findFirstNonEmpty = exports.findFirst = exports.traverse = exports.left = exports.right = exports.some = exports.atKey = exports.key = exports.indexNonEmpty = exports.index = exports.component = exports.props = exports.prop = exports.filter = exports.fromNullable = exports.modifyF = exports.modify = exports.composeTraversal = exports.composeOptional = exports.composePrism = exports.composeIso = exports.composeLens = exports.compose = exports.asTraversal = exports.asOptional = exports.id = exports.lens = void 0;
      var function_1 = require_function();
      var pipeable_1 = require_pipeable();
      var _ = require_internal2();
      exports.lens = _.lens;
      exports.id = _.lensId;
      exports.asOptional = _.lensAsOptional;
      exports.asTraversal = _.lensAsTraversal;
      exports.compose = _.lensComposeLens;
      exports.composeLens = exports.compose;
      exports.composeIso = /* @__PURE__ */ (0, function_1.flow)(_.isoAsLens, exports.compose);
      exports.composePrism = _.lensComposePrism;
      var composeOptional = function(ab) {
        return (0, function_1.flow)(exports.asOptional, _.optionalComposeOptional(ab));
      };
      exports.composeOptional = composeOptional;
      var composeTraversal = function(ab) {
        return (0, function_1.flow)(exports.asTraversal, _.traversalComposeTraversal(ab));
      };
      exports.composeTraversal = composeTraversal;
      var modify = function(f5) {
        return function(sa) {
          return function(s) {
            var o = sa.get(s);
            var n = f5(o);
            return o === n ? s : sa.set(n)(s);
          };
        };
      };
      exports.modify = modify;
      function modifyF(F) {
        return function(f5) {
          return function(sa) {
            return function(s) {
              return (0, pipeable_1.pipe)(sa.get(s), f5, function(fa) {
                return F.map(fa, function(a) {
                  return sa.set(a)(s);
                });
              });
            };
          };
        };
      }
      exports.modifyF = modifyF;
      var fromNullable4 = function(sa) {
        return (0, exports.composePrism)(_.prismFromNullable())(sa);
      };
      exports.fromNullable = fromNullable4;
      function filter9(predicate) {
        return (0, exports.composePrism)(_.prismFromPredicate(predicate));
      }
      exports.filter = filter9;
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
      exports.some = /* @__PURE__ */ (0, exports.composePrism)(/* @__PURE__ */ _.prismSome());
      exports.right = /* @__PURE__ */ (0, exports.composePrism)(/* @__PURE__ */ _.prismRight());
      exports.left = /* @__PURE__ */ (0, exports.composePrism)(/* @__PURE__ */ _.prismLeft());
      function traverse7(T) {
        return (0, function_1.flow)(exports.asTraversal, _.traversalTraverse(T));
      }
      exports.traverse = traverse7;
      function findFirst3(predicate) {
        return (0, exports.composeOptional)(_.optionalFindFirst(predicate));
      }
      exports.findFirst = findFirst3;
      function findFirstNonEmpty(predicate) {
        return (0, exports.composeOptional)(_.optionalFindFirstNonEmpty(predicate));
      }
      exports.findFirstNonEmpty = findFirstNonEmpty;
      var imap = function(f5, g) {
        return function(ea) {
          return imap_(ea, f5, g);
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
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-c3196f52a2/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/lib/Optional.js
  var require_Optional = __commonJS({
    ".yarn/__virtual__/monocle-ts-virtual-c3196f52a2/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/lib/Optional.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Category = exports.Semigroupoid = exports.Invariant = exports.URI = exports.imap = exports.findFirstNonEmpty = exports.findFirst = exports.traverse = exports.left = exports.right = exports.some = exports.atKey = exports.key = exports.indexNonEmpty = exports.index = exports.component = exports.props = exports.prop = exports.filter = exports.fromNullable = exports.modifyF = exports.modify = exports.setOption = exports.modifyOption = exports.composeTraversal = exports.composePrism = exports.composeLens = exports.composeIso = exports.composeOptional = exports.compose = exports.asTraversal = exports.id = exports.optional = void 0;
      var function_1 = require_function();
      var O2 = require_Option();
      var pipeable_1 = require_pipeable();
      var _ = require_internal2();
      exports.optional = _.optional;
      var id = function() {
        return (0, exports.optional)(O2.some, function_1.constant);
      };
      exports.id = id;
      exports.asTraversal = _.optionalAsTraversal;
      exports.compose = _.optionalComposeOptional;
      exports.composeOptional = exports.compose;
      exports.composeIso = /* @__PURE__ */ (0, function_1.flow)(_.isoAsOptional, exports.compose);
      exports.composeLens = /* @__PURE__ */ (0, function_1.flow)(_.lensAsOptional, _.optionalComposeOptional);
      exports.composePrism = /* @__PURE__ */ (0, function_1.flow)(_.prismAsOptional, _.optionalComposeOptional);
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
      function modifyF(F) {
        return function(f5) {
          return function(sa) {
            return function(s) {
              return (0, pipeable_1.pipe)(sa.getOption(s), O2.fold(function() {
                return F.of(s);
              }, function(a) {
                return F.map(f5(a), function(a2) {
                  return sa.set(a2)(s);
                });
              }));
            };
          };
        };
      }
      exports.modifyF = modifyF;
      exports.fromNullable = /* @__PURE__ */ (0, exports.compose)(/* @__PURE__ */ _.prismAsOptional(/* @__PURE__ */ _.prismFromNullable()));
      function filter9(predicate) {
        return (0, exports.compose)(_.prismAsOptional(_.prismFromPredicate(predicate)));
      }
      exports.filter = filter9;
      var prop = function(prop2) {
        return (0, exports.compose)((0, pipeable_1.pipe)(_.lensId(), _.lensProp(prop2), _.lensAsOptional));
      };
      exports.prop = prop;
      var props = function() {
        var props2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
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
      exports.some = /* @__PURE__ */ (0, exports.compose)(/* @__PURE__ */ _.prismAsOptional(/* @__PURE__ */ _.prismSome()));
      exports.right = /* @__PURE__ */ (0, exports.compose)(/* @__PURE__ */ _.prismAsOptional(/* @__PURE__ */ _.prismRight()));
      exports.left = /* @__PURE__ */ (0, exports.compose)(/* @__PURE__ */ _.prismAsOptional(/* @__PURE__ */ _.prismLeft()));
      function traverse7(T) {
        return (0, function_1.flow)(exports.asTraversal, _.traversalTraverse(T));
      }
      exports.traverse = traverse7;
      function findFirst3(predicate) {
        return (0, exports.compose)(_.optionalFindFirst(predicate));
      }
      exports.findFirst = findFirst3;
      function findFirstNonEmpty(predicate) {
        return (0, exports.compose)(_.optionalFindFirstNonEmpty(predicate));
      }
      exports.findFirstNonEmpty = findFirstNonEmpty;
      var imap = function(f5, g) {
        return function(ea) {
          return imap_(ea, f5, g);
        };
      };
      exports.imap = imap;
      var imap_ = function(ea, ab, ba) {
        return (0, exports.optional)((0, function_1.flow)(ea.getOption, O2.map(ab)), (0, function_1.flow)(ba, ea.set));
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/util/monocle.js
  var require_monocle = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/util/monocle.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.lensFromPath = exports.traversalFromPath = exports.optionalFromPath = exports.isPathTraversal = exports.isPathLens = void 0;
      var function_1 = require_function();
      var A = __importStar(require_ReadonlyArray());
      var R = __importStar(require_ReadonlyRecord());
      var string_1 = require_string();
      var L = __importStar(require_Lens());
      var Op = __importStar(require_Optional());
      var Tr = __importStar(require_Traversal());
      var isPathLens = (path) => !split(path).some((s) => ["?", "?some", "?left", "right", "[]>", "{}>", "[number]", "[string]"].includes(s) || !s.startsWith("(") && s.includes(":"));
      exports.isPathLens = isPathLens;
      var isPathTraversal = (path) => split(path).some((s) => ["[]>", "{}>"].includes(s));
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
      var split = (path) => {
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
        const opt = split(path).reduce((acc, cur) => {
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
            const member = cur.substring(i + 1, cur.length);
            return (0, function_1.pipe)(acc, Op.filter((a) => a[discriminant] === member));
          }
          return (0, function_1.pipe)(acc, Op.prop(cur));
        }, Op.id());
        return opt;
      };
      exports.optionalFromPath = optionalFromPath;
      var traversalFromPath = (path, _indicies) => {
        const indicies = [..._indicies];
        const opt = split(path).reduce((acc, cur) => {
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
            const member = cur.substring(i + 1, cur.length);
            return (0, function_1.pipe)(acc, Tr.filter((a) => a[discriminant] === member));
          }
          return (0, function_1.pipe)(acc, Tr.prop(cur));
        }, Tr.id());
        return opt;
      };
      exports.traversalFromPath = traversalFromPath;
      var lensFromPath = (path) => {
        const lens = split(path).reduce((acc, cur) => {
          if (cur.includes("[") && cur.includes("]") && cur.indexOf("[") < cur.indexOf("]")) {
            const component = cur.substring(cur.indexOf("[") + 1, cur.indexOf("]"));
            return (0, function_1.pipe)(acc, L.component(Number.parseInt(component, 10)));
          }
          return (0, function_1.pipe)(acc, L.prop(cur));
        }, L.id());
        return lens;
      };
      exports.lensFromPath = lensFromPath;
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/get.js
  var require_get = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/get.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.get = void 0;
      var function_1 = require_function();
      var Tr = __importStar(require_Traversal());
      var monocle_1 = require_monocle();
      var get2 = (path, ...indicies) => {
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
      exports.get = get2;
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/set.js
  var require_set = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/set.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.set = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/setOption.js
  var require_setOption = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/setOption.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.setOption = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modify.js
  var require_modify = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modify.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.modify = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modifyOption.js
  var require_modifyOption = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modifyOption.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.modifyOption = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modifyW.js
  var require_modifyW = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modifyW.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.modifyW = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modifyOptionW.js
  var require_modifyOptionW = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modifyOptionW.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.modifyOptionW = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modifyF.js
  var require_modifyF = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/modifyF.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.modifyF = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/upsert.js
  var require_upsert = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/upsert.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.upsert = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/remove.js
  var require_remove = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/remove.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.remove = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/rename.js
  var require_rename = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/values/rename.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
      exports.rename = void 0;
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
    }
  });

  // .yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/index.js
  var require_dist = __commonJS({
    ".yarn/__virtual__/spectacles-ts-virtual-994f3979b0/0/cache/spectacles-ts-npm-1.0.7-6deaba5185-690b8ad9c2.zip/node_modules/spectacles-ts/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.rename = exports.remove = exports.upsert = exports.modifyF = exports.modifyOptionW = exports.modifyW = exports.modifyOption = exports.modify = exports.setOption = exports.set = exports.get = void 0;
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
    }
  });

  // shared/fp.tsx
  var import_function20, guard42, pMchain, is, chunckify;
  var init_fp = __esm({
    "shared/fp.tsx"() {
      "use strict";
      init_es6();
      import_function20 = __toESM(require_function(), 1);
      init_Function();
      guard42 = (branches) => guard6(
        branches
      );
      pMchain = (f5) => async (fa) => f5(await fa);
      is = (c) => (a) => (field) => field[c] === a;
      chunckify = (n) => (g) => (0, import_function20.flow)(Array_exports.chunksOf(n), Array_exports.map(g), (ps) => Promise.all(ps), pMchain(Array_exports.flatten));
    }
  });

  // shared/api.tsx
  var fetchGQLAlbum, fetchWebArtistsSpot, fetchWebTracksSpot, fetchPlatArtistLikedTracks, fetchPlatPlaylistContents, createPlatFolder, createPlatPlaylist, setPlatPlaylistVisibility, fetchPlatFolder, addPlatPlaylistTracks, removePlatPlaylistTracks;
  var init_api = __esm({
    "shared/api.tsx"() {
      "use strict";
      init_fp();
      init_util();
      fetchGQLAlbum = async (uri, offset = 0, limit = 487) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
        uri,
        locale: Spicetify.Locale.getLocale(),
        offset,
        limit
      })).data.albumUnion;
      fetchWebArtistsSpot = chunckify(50)(
        async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists
      );
      fetchWebTracksSpot = chunckify(50)(
        async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks
      );
      fetchPlatArtistLikedTracks = async (uri, offset = 0, limit = 100) => (await Spicetify.Platform.LibraryAPI.getTracks({ uri, offset, limit })).items;
      fetchPlatPlaylistContents = async (uri) => (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
      createPlatFolder = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createFolder(name, location);
      createPlatPlaylist = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createPlaylist(name, location);
      setPlatPlaylistVisibility = async (playlist, visibleForAll) => await Spicetify.Platform.PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED");
      fetchPlatFolder = async (folder) => await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder });
      addPlatPlaylistTracks = async (playlist, tracks, location = {}) => await Spicetify.Platform.PlaylistAPI.add(playlist, tracks, location);
      removePlatPlaylistTracks = async (playlist, tracks) => await Spicetify.Platform.PlaylistAPI.move(playlist, tracks);
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/NonEmptyArray.js
  var require_NonEmptyArray = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/NonEmptyArray.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
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
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.flatMap = exports.ap = exports.alt = exports.altW = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.foldMap = exports.foldMapWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.of = exports.copy = exports.modifyAt = exports.updateAt = exports.insertAt = exports.sort = exports.groupBy = exports.group = exports.reverse = exports.concat = exports.concatW = exports.unappend = exports.unprepend = exports.range = exports.replicate = exports.makeBy = exports.fromArray = exports.fromReadonlyNonEmptyArray = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.appendW = exports.prepend = exports.prependW = exports.isOutOfBound = exports.isNonEmpty = void 0;
      exports.chain = exports.intercalate = exports.updateLast = exports.modifyLast = exports.updateHead = exports.modifyHead = exports.matchRight = exports.matchLeft = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getUnionSemigroup = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.reduce = void 0;
      exports.nonEmptyArray = exports.fold = exports.prependToAll = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = exports.groupSort = void 0;
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var Ord_1 = require_Ord();
      var RNEA = __importStar(require_ReadonlyNonEmptyArray());
      var isNonEmpty6 = function(as5) {
        return as5.length > 0;
      };
      exports.isNonEmpty = isNonEmpty6;
      var isOutOfBound5 = function(i, as5) {
        return i < 0 || i >= as5.length;
      };
      exports.isOutOfBound = isOutOfBound5;
      var prependW5 = function(head6) {
        return function(tail7) {
          return __spreadArray6([head6], tail7, true);
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
      var unsafeInsertAt5 = function(i, a, as5) {
        if ((0, exports.isNonEmpty)(as5)) {
          var xs = (0, exports.fromReadonlyNonEmptyArray)(as5);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      exports.unsafeInsertAt = unsafeInsertAt5;
      var unsafeUpdateAt5 = function(i, a, as5) {
        var xs = (0, exports.fromReadonlyNonEmptyArray)(as5);
        xs[i] = a;
        return xs;
      };
      exports.unsafeUpdateAt = unsafeUpdateAt5;
      var uniq5 = function(E) {
        return function(as5) {
          if (as5.length === 1) {
            return (0, exports.copy)(as5);
          }
          var out = [(0, exports.head)(as5)];
          var rest = (0, exports.tail)(as5);
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
      exports.uniq = uniq5;
      var sortBy5 = function(ords) {
        if ((0, exports.isNonEmpty)(ords)) {
          var M = (0, Ord_1.getMonoid)();
          return (0, exports.sort)(ords.reduce(M.concat, M.empty));
        }
        return exports.copy;
      };
      exports.sortBy = sortBy5;
      var union7 = function(E) {
        var uniqE = (0, exports.uniq)(E);
        return function(second) {
          return function(first3) {
            return uniqE((0, function_1.pipe)(first3, concat5(second)));
          };
        };
      };
      exports.union = union7;
      var rotate5 = function(n) {
        return function(as5) {
          var len = as5.length;
          var m = Math.round(n) % len;
          if ((0, exports.isOutOfBound)(Math.abs(m), as5) || m === 0) {
            return (0, exports.copy)(as5);
          }
          if (m < 0) {
            var _a = (0, exports.splitAt)(-m)(as5), f5 = _a[0], s = _a[1];
            return (0, function_1.pipe)(s, concat5(f5));
          } else {
            return (0, exports.rotate)(m - len)(as5);
          }
        };
      };
      exports.rotate = rotate5;
      exports.fromReadonlyNonEmptyArray = _.fromReadonlyNonEmptyArray;
      var fromArray3 = function(as5) {
        return (0, exports.isNonEmpty)(as5) ? _.some(as5) : _.none;
      };
      exports.fromArray = fromArray3;
      var makeBy5 = function(f5) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f5(0)];
          for (var i = 1; i < j; i++) {
            out.push(f5(i));
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
      var range6 = function(start, end) {
        return start <= end ? (0, exports.makeBy)(function(i) {
          return start + i;
        })(end - start + 1) : [start];
      };
      exports.range = range6;
      var unprepend2 = function(as5) {
        return [(0, exports.head)(as5), (0, exports.tail)(as5)];
      };
      exports.unprepend = unprepend2;
      var unappend2 = function(as5) {
        return [(0, exports.init)(as5), (0, exports.last)(as5)];
      };
      exports.unappend = unappend2;
      function concatW4(second) {
        return function(first3) {
          return first3.concat(second);
        };
      }
      exports.concatW = concatW4;
      function concat5(x, y) {
        return y ? x.concat(y) : function(y2) {
          return y2.concat(x);
        };
      }
      exports.concat = concat5;
      var reverse6 = function(as5) {
        return __spreadArray6([(0, exports.last)(as5)], as5.slice(0, -1).reverse(), true);
      };
      exports.reverse = reverse6;
      function group2(E) {
        return function(as5) {
          var len = as5.length;
          if (len === 0) {
            return [];
          }
          var out = [];
          var head6 = as5[0];
          var nea = [head6];
          for (var i = 1; i < len; i++) {
            var a = as5[i];
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
      }
      exports.group = group2;
      var groupBy3 = function(f5) {
        return function(as5) {
          var out = {};
          for (var _i = 0, as_1 = as5; _i < as_1.length; _i++) {
            var a = as_1[_i];
            var k = f5(a);
            if (_.has.call(out, k)) {
              out[k].push(a);
            } else {
              out[k] = [a];
            }
          }
          return out;
        };
      };
      exports.groupBy = groupBy3;
      var sort5 = function(O2) {
        return function(as5) {
          return as5.slice().sort(O2.compare);
        };
      };
      exports.sort = sort5;
      var insertAt5 = function(i, a) {
        return function(as5) {
          return i < 0 || i > as5.length ? _.none : _.some((0, exports.unsafeInsertAt)(i, a, as5));
        };
      };
      exports.insertAt = insertAt5;
      var updateAt5 = function(i, a) {
        return (0, exports.modifyAt)(i, function() {
          return a;
        });
      };
      exports.updateAt = updateAt5;
      var modifyAt5 = function(i, f5) {
        return function(as5) {
          return (0, exports.isOutOfBound)(i, as5) ? _.none : _.some((0, exports.unsafeUpdateAt)(i, f5(as5[i]), as5));
        };
      };
      exports.modifyAt = modifyAt5;
      exports.copy = exports.fromReadonlyNonEmptyArray;
      var of9 = function(a) {
        return [a];
      };
      exports.of = of9;
      var zipWith4 = function(as5, bs, f5) {
        var cs = [f5(as5[0], bs[0])];
        var len = Math.min(as5.length, bs.length);
        for (var i = 1; i < len; i++) {
          cs[i] = f5(as5[i], bs[i]);
        }
        return cs;
      };
      exports.zipWith = zipWith4;
      function zip4(as5, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip4(bs2, as5);
          };
        }
        return (0, exports.zipWith)(as5, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip4;
      var unzip4 = function(abs) {
        var fa = [abs[0][0]];
        var fb = [abs[0][1]];
        for (var i = 1; i < abs.length; i++) {
          fa[i] = abs[i][0];
          fb[i] = abs[i][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip4;
      var prependAll5 = function(middle) {
        return function(as5) {
          var out = [middle, as5[0]];
          for (var i = 1; i < as5.length; i++) {
            out.push(middle, as5[i]);
          }
          return out;
        };
      };
      exports.prependAll = prependAll5;
      var intersperse5 = function(middle) {
        return function(as5) {
          var rest = (0, exports.tail)(as5);
          return (0, exports.isNonEmpty)(rest) ? (0, function_1.pipe)(rest, (0, exports.prependAll)(middle), (0, exports.prepend)((0, exports.head)(as5))) : (0, exports.copy)(as5);
        };
      };
      exports.intersperse = intersperse5;
      exports.foldMapWithIndex = RNEA.foldMapWithIndex;
      exports.foldMap = RNEA.foldMap;
      var chainWithIndex4 = function(f5) {
        return function(as5) {
          var out = (0, exports.fromReadonlyNonEmptyArray)(f5(0, (0, exports.head)(as5)));
          for (var i = 1; i < as5.length; i++) {
            out.push.apply(out, f5(i, as5[i]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex4;
      var chop5 = function(f5) {
        return function(as5) {
          var _a = f5(as5), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while ((0, exports.isNonEmpty)(next)) {
            var _b = f5(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      exports.chop = chop5;
      var splitAt5 = function(n) {
        return function(as5) {
          var m = Math.max(1, n);
          return m >= as5.length ? [(0, exports.copy)(as5), []] : [(0, function_1.pipe)(as5.slice(1, m), (0, exports.prepend)((0, exports.head)(as5))), as5.slice(m)];
        };
      };
      exports.splitAt = splitAt5;
      var chunksOf5 = function(n) {
        return (0, exports.chop)((0, exports.splitAt)(n));
      };
      exports.chunksOf = chunksOf5;
      var _map9 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f5));
      };
      var _mapWithIndex6 = function(fa, f5) {
        return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f5));
      };
      var _ap6 = function(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _extend5 = function(wa, f5) {
        return (0, function_1.pipe)(wa, (0, exports.extend)(f5));
      };
      var _reduce7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f5));
      };
      var _foldMap7 = function(M) {
        var foldMapM = (0, exports.foldMap)(M);
        return function(fa, f5) {
          return (0, function_1.pipe)(fa, foldMapM(f5));
        };
      };
      var _reduceRight7 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f5));
      };
      var _traverse7 = function(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f5) {
          return (0, function_1.pipe)(ta, traverseF(f5));
        };
      };
      var _alt6 = function(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _reduceWithIndex6 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f5));
      };
      var _foldMapWithIndex6 = function(M) {
        var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
        return function(fa, f5) {
          return (0, function_1.pipe)(fa, foldMapWithIndexM(f5));
        };
      };
      var _reduceRightWithIndex6 = function(fa, b, f5) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f5));
      };
      var _traverseWithIndex6 = function(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(ta, f5) {
          return (0, function_1.pipe)(ta, traverseWithIndexF(f5));
        };
      };
      var altW6 = function(that) {
        return function(as5) {
          return (0, function_1.pipe)(as5, concatW4(that()));
        };
      };
      exports.altW = altW6;
      exports.alt = exports.altW;
      var ap10 = function(as5) {
        return (0, exports.flatMap)(function(f5) {
          return (0, function_1.pipe)(as5, (0, exports.map)(f5));
        });
      };
      exports.ap = ap10;
      exports.flatMap = (0, function_1.dual)(2, function(ma, f5) {
        return (0, function_1.pipe)(ma, (0, exports.chainWithIndex)(function(i, a) {
          return f5(a, i);
        }));
      });
      var extend5 = function(f5) {
        return function(as5) {
          var next = (0, exports.tail)(as5);
          var out = [f5(as5)];
          while ((0, exports.isNonEmpty)(next)) {
            out.push(f5(next));
            next = (0, exports.tail)(next);
          }
          return out;
        };
      };
      exports.extend = extend5;
      exports.duplicate = (0, exports.extend)(function_1.identity);
      exports.flatten = (0, exports.flatMap)(function_1.identity);
      var map13 = function(f5) {
        return (0, exports.mapWithIndex)(function(_2, a) {
          return f5(a);
        });
      };
      exports.map = map13;
      var mapWithIndex6 = function(f5) {
        return function(as5) {
          var out = [f5(0, (0, exports.head)(as5))];
          for (var i = 1; i < as5.length; i++) {
            out.push(f5(i, as5[i]));
          }
          return out;
        };
      };
      exports.mapWithIndex = mapWithIndex6;
      exports.reduce = RNEA.reduce;
      exports.reduceWithIndex = RNEA.reduceWithIndex;
      exports.reduceRight = RNEA.reduceRight;
      exports.reduceRightWithIndex = RNEA.reduceRightWithIndex;
      var traverse7 = function(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(f5) {
          return traverseWithIndexF(function(_2, a) {
            return f5(a);
          });
        };
      };
      exports.traverse = traverse7;
      var sequence7 = function(F) {
        return (0, exports.traverseWithIndex)(F)(function(_2, a) {
          return a;
        });
      };
      exports.sequence = sequence7;
      var traverseWithIndex6 = function(F) {
        return function(f5) {
          return function(as5) {
            var out = F.map(f5(0, (0, exports.head)(as5)), exports.of);
            for (var i = 1; i < as5.length; i++) {
              out = F.ap(F.map(out, function(bs) {
                return function(b) {
                  return (0, function_1.pipe)(bs, (0, exports.append)(b));
                };
              }), f5(i, as5[i]));
            }
            return out;
          };
        };
      };
      exports.traverseWithIndex = traverseWithIndex6;
      exports.extract = RNEA.head;
      exports.URI = "NonEmptyArray";
      exports.getShow = RNEA.getShow;
      var getSemigroup8 = function() {
        return {
          concat: concat5
        };
      };
      exports.getSemigroup = getSemigroup8;
      exports.getEq = RNEA.getEq;
      var getUnionSemigroup5 = function(E) {
        var unionE = (0, exports.union)(E);
        return {
          concat: function(first3, second) {
            return unionE(second)(first3);
          }
        };
      };
      exports.getUnionSemigroup = getUnionSemigroup5;
      exports.Functor = {
        URI: exports.URI,
        map: _map9
      };
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map9,
        mapWithIndex: _mapWithIndex6
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6
      };
      exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
      exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        chain: exports.flatMap
      };
      exports.chainFirst = /* @__PURE__ */ (0, Chain_1.chainFirst)(exports.Chain);
      exports.Monad = {
        URI: exports.URI,
        map: _map9,
        ap: _ap6,
        of: exports.of,
        chain: exports.flatMap
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map9,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map9,
        mapWithIndex: _mapWithIndex6,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6,
        traverseWithIndex: _traverseWithIndex6
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map9,
        alt: _alt6
      };
      exports.Comonad = {
        URI: exports.URI,
        map: _map9,
        extend: _extend5,
        extract: exports.extract
      };
      exports.Do = (0, exports.of)(_.emptyRecord);
      exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
      var let_9 = /* @__PURE__ */ (0, Functor_1.let)(exports.Functor);
      exports.let = let_9;
      exports.bind = (0, Chain_1.bind)(exports.Chain);
      exports.apS = (0, Apply_1.apS)(exports.Apply);
      exports.head = RNEA.head;
      var tail6 = function(as5) {
        return as5.slice(1);
      };
      exports.tail = tail6;
      exports.last = RNEA.last;
      var init5 = function(as5) {
        return as5.slice(0, -1);
      };
      exports.init = init5;
      exports.min = RNEA.min;
      exports.max = RNEA.max;
      var concatAll6 = function(S) {
        return function(as5) {
          return as5.reduce(S.concat);
        };
      };
      exports.concatAll = concatAll6;
      var matchLeft4 = function(f5) {
        return function(as5) {
          return f5((0, exports.head)(as5), (0, exports.tail)(as5));
        };
      };
      exports.matchLeft = matchLeft4;
      var matchRight4 = function(f5) {
        return function(as5) {
          return f5((0, exports.init)(as5), (0, exports.last)(as5));
        };
      };
      exports.matchRight = matchRight4;
      var modifyHead2 = function(f5) {
        return function(as5) {
          return __spreadArray6([f5((0, exports.head)(as5))], (0, exports.tail)(as5), true);
        };
      };
      exports.modifyHead = modifyHead2;
      var updateHead2 = function(a) {
        return (0, exports.modifyHead)(function() {
          return a;
        });
      };
      exports.updateHead = updateHead2;
      var modifyLast2 = function(f5) {
        return function(as5) {
          return (0, function_1.pipe)((0, exports.init)(as5), (0, exports.append)(f5((0, exports.last)(as5))));
        };
      };
      exports.modifyLast = modifyLast2;
      var updateLast2 = function(a) {
        return (0, exports.modifyLast)(function() {
          return a;
        });
      };
      exports.updateLast = updateLast2;
      exports.intercalate = RNEA.intercalate;
      exports.chain = exports.flatMap;
      function groupSort2(O2) {
        var sortO = (0, exports.sort)(O2);
        var groupO = group2(O2);
        return function(as5) {
          return (0, exports.isNonEmpty)(as5) ? groupO(sortO(as5)) : [];
        };
      }
      exports.groupSort = groupSort2;
      function filter9(predicate) {
        return (0, exports.filterWithIndex)(function(_2, a) {
          return predicate(a);
        });
      }
      exports.filter = filter9;
      var filterWithIndex6 = function(predicate) {
        return function(as5) {
          return (0, exports.fromArray)(as5.filter(function(a, i) {
            return predicate(i, a);
          }));
        };
      };
      exports.filterWithIndex = filterWithIndex6;
      exports.uncons = exports.unprepend;
      exports.unsnoc = exports.unappend;
      function cons5(head6, tail7) {
        return tail7 === void 0 ? (0, exports.prepend)(head6) : (0, function_1.pipe)(tail7, (0, exports.prepend)(head6));
      }
      exports.cons = cons5;
      var snoc5 = function(init6, end) {
        return (0, function_1.pipe)(init6, (0, exports.append)(end));
      };
      exports.snoc = snoc5;
      exports.prependToAll = exports.prependAll;
      exports.fold = RNEA.concatAll;
      exports.nonEmptyArray = {
        URI: exports.URI,
        of: exports.of,
        map: _map9,
        mapWithIndex: _mapWithIndex6,
        ap: _ap6,
        chain: exports.flatMap,
        extend: _extend5,
        extract: exports.extract,
        reduce: _reduce7,
        foldMap: _foldMap7,
        reduceRight: _reduceRight7,
        traverse: _traverse7,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex6,
        foldMapWithIndex: _foldMapWithIndex6,
        reduceRightWithIndex: _reduceRightWithIndex6,
        traverseWithIndex: _traverseWithIndex6,
        alt: _alt6
      };
    }
  });

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = Spicetify.ReactDOM;
    }
  });

  // shared/settings.tsx
  var import_function21, import_react, import_react_dom, SettingsSection;
  var init_settings = __esm({
    "shared/settings.tsx"() {
      "use strict";
      init_es6();
      import_function21 = __toESM(require_function(), 1);
      import_react = __toESM(require_react(), 1);
      import_react_dom = __toESM(require_react_dom(), 1);
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
          const allSettingsContainer = document.querySelector(".main-view-container__scroll-node-child main div");
          if (!allSettingsContainer)
            return console.error("[settings] container not found");
          let pluginSettingsContainer = Array.from(allSettingsContainer.children).find(({ id }) => id === this.sectionId);
          if (!pluginSettingsContainer) {
            pluginSettingsContainer = document.createElement("div");
            pluginSettingsContainer.id = this.sectionId;
            pluginSettingsContainer.className = "settingsContainer";
            allSettingsContainer.appendChild(pluginSettingsContainer);
          }
          import_react_dom.default.render(/* @__PURE__ */ import_react.default.createElement(this.FieldsContainer, null), pluginSettingsContainer);
        };
        addButton = (nameId, description, text, onClick = import_function21.constVoid, events = {}) => {
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
        addToggle = (nameId, description, defaultValue = Task_exports.of(true), onChange = import_function21.constVoid, events = {}) => {
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
        addInput = (nameId, description, defaultValue, onChange = import_function21.constVoid, inputType = "text", events = {}) => {
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
        addDropDown = (nameId, description, options, defaultValue = Task_exports.of(0), onChange = import_function21.constVoid, events = {}) => {
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
          const [value, setValueState] = (0, import_react.useState)(_SettingsSection.getFieldValue(id));
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
          const [rerender, setRerender] = (0, import_react.useState)(0);
          this.setRerender = setRerender;
          return /* @__PURE__ */ import_react.default.createElement("div", { className: "x-settings-section", key: rerender }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type" }, this.name), Object.entries(this.sectionFields).map(([nameId, field]) => {
            return /* @__PURE__ */ import_react.default.createElement(this.Field, { field });
          }));
        };
        Field = ({ field }) => {
          const isType = is("type");
          return /* @__PURE__ */ import_react.default.createElement("div", { className: "x-settings-row" }, /* @__PURE__ */ import_react.default.createElement(this.SettingDescription, { id: field.id, description: field.description }), /* @__PURE__ */ import_react.default.createElement("div", { className: "x-settings-secondColumn" }, guard42([
            [isType("input" /* INPUT */), this.SettingInputField],
            [isType("button" /* BUTTON */), this.SettingButtonField],
            [isType("toggle" /* TOGGLE */), this.SettingToggleField],
            [isType("dropdown" /* DROPDOWN */), this.SettingDropdownField]
          ])(this.SettingHidden)(field)));
        };
        SettingDescription = ({ id, description }) => /* @__PURE__ */ import_react.default.createElement("div", { className: "x-settings-firstColumn" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type", htmlFor: id }, description));
        SettingButtonField = (field) => /* @__PURE__ */ import_react.default.createElement("span", { className: "" }, /* @__PURE__ */ import_react.default.createElement(
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
          return /* @__PURE__ */ import_react.default.createElement("label", { className: "x-settings-secondColumn x-toggle-wrapper" }, /* @__PURE__ */ import_react.default.createElement(
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
          ), /* @__PURE__ */ import_react.default.createElement("span", { className: "x-toggle-indicatorWrapper" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "x-toggle-indicator" })));
        };
        SettingInputField = (field) => {
          const [value, setValue] = this.useStateFor(field.id);
          return /* @__PURE__ */ import_react.default.createElement(
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
          return /* @__PURE__ */ import_react.default.createElement(
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
            field.options.map((option2, i) => /* @__PURE__ */ import_react.default.createElement("option", { selected: i === _SettingsSection.getFieldValue(field.id), value: i + 1 }, option2))
          );
        };
        SettingHidden = () => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
      };
    }
  });

  // extensions/star-ratings/util.tsx
  var import_function22, RATINGS_FOLDER_NAME, STAR_SIZE, HALF_STAR_LENGTH, starsS2N, starsN2S, getNowPlayingHeart, getStarsFromStarsContainer, getStarStopsFromStar, getStarsStopsFromStarsContainer, setStarsGradientFromContainerByRating, getStarsContainer, getStars, getStarsStops, getTrackLists, getTrackListHeader, getTrackListTracks, getLastColIndex, getFirstHeart, getTrackListTrackUri, getRatingsFolder;
  var init_util2 = __esm({
    "extensions/star-ratings/util.tsx"() {
      "use strict";
      init_es6();
      import_function22 = __toESM(require_function(), 1);
      init_api();
      init_settings2();
      init_stars();
      RATINGS_FOLDER_NAME = "Ratings";
      STAR_SIZE = 16;
      HALF_STAR_LENGTH = STAR_SIZE / 2;
      starsS2N = (S) => Number(S) * 2;
      starsN2S = (N) => (N / 2).toFixed(1);
      getNowPlayingHeart = () => document.querySelector(".main-nowPlayingWidget-nowPlaying .control-button-heart");
      getStarsFromStarsContainer = (starsElement) => Array.from(starsElement.children);
      getStarStopsFromStar = (star) => Array.from(star.firstChild.firstChild.childNodes);
      getStarsStopsFromStarsContainer = (0, import_function22.flow)(getStarsFromStarsContainer, Array_exports.map(getStarStopsFromStar));
      setStarsGradientFromContainerByRating = (rating) => (0, import_function22.flow)(getStarsStopsFromStarsContainer, setStarsGradientByRating(rating));
      getStarsContainer = (idSuffix) => document.getElementById(`stars-${idSuffix}`);
      getStars = (0, import_function22.flow)(getStarsContainer, getStarsFromStarsContainer);
      getStarsStops = (0, import_function22.flow)(getStarsContainer, getStarsStopsFromStarsContainer);
      getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-indexable"));
      getTrackListHeader = (trackList) => trackList.querySelector(".main-trackList-trackListHeader").firstChild;
      getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll(".main-trackList-trackListRow"));
      getLastColIndex = (parent) => {
        const lastCol = parent.querySelector(".main-trackList-rowSectionEnd");
        const lastColIndex = Number(lastCol.getAttribute("aria-colindex"));
        return [lastColIndex, lastCol];
      };
      getFirstHeart = (parent) => parent.getElementsByClassName("main-addButton-button")[0];
      getTrackListTrackUri = (track) => (track = Object.values(track)[0].child.child.child.child, track.pendingProps.uri ?? track.child.pendingProps.uri);
      getRatingsFolder = () => (0, import_function22.flow)(
        () => () => fetchPlatFolder(CONFIG.ratingsFolderUri),
        TaskOption_exports.tryCatch,
        TaskOption_exports.getOrElse(() => fetchPlatFolder)
      )()();
    }
  });

  // extensions/star-ratings/settings.tsx
  var settings, CONFIG;
  var init_settings2 = __esm({
    "extensions/star-ratings/settings.tsx"() {
      "use strict";
      init_es6();
      init_api();
      init_settings();
      init_ratings();
      init_util2();
      settings = new SettingsSection("Star Ratings", "star-ratings").addToggle("hideHearts", "Hide Hearts").addToggle("halfStarRatings", "Half star ratings").addToggle("showInTrackLists", "Show in tracklists").addToggle("nowPlayingStarsOnRight", "Place the stars for now playing track on the right").addInput("heartThreshold", "Threshold for liking trakcs", Task_exports.of("3.5")).addInput("skipThreshold", "Threshold for skipping trakcs", Task_exports.of("1.5")).addInput(
        "ratingsFolderUri",
        "Ratings folder uri",
        async () => (await createPlatFolder(RATINGS_FOLDER_NAME)).uri,
        loadRatings
      );
      settings.pushSettings();
      CONFIG = settings.toObject();
    }
  });

  // extensions/star-ratings/stars.tsx
  var import_function23, URI9, createStar, createStars, setStarsGradientByRating, calculateRatingFromMouseEvent, onStarClick;
  var init_stars = __esm({
    "extensions/star-ratings/stars.tsx"() {
      "use strict";
      init_es6();
      import_function23 = __toESM(require_function(), 1);
      init_api();
      init_util();
      init_ratings();
      init_settings2();
      init_util2();
      init_app();
      ({ URI: URI9 } = Spicetify);
      createStar = (starsId, nth, size5) => {
        const xmlns = "http://www.w3.org/2000/svg";
        const star = document.createElementNS(xmlns, "svg");
        const id = `${starsId}-${nth}`;
        star.id = id;
        star.style.minHeight = `${size5}px`;
        star.style.minWidth = `${size5}px`;
        star.setAttributeNS(null, "width", `${size5}px`);
        star.setAttributeNS(null, "height", `${size5}px`);
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
        path.setAttributeNS(
          null,
          "d",
          "M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
        );
        return [star, [stop1, stop2]];
      };
      createStars = (idSuffix, size5) => {
        const id = `stars-${idSuffix}`;
        const starsContainer = document.createElement("span");
        {
          starsContainer.className = "stars";
          starsContainer.id = id;
          starsContainer.style.whiteSpace = "nowrap";
          starsContainer.style.alignItems = "center";
          starsContainer.style.display = "flex";
        }
        const starsConstructs = NonEmptyArray_exports.range(1, 5).map((i) => createStar(id, i, size5));
        (0, import_function23.pipe)(
          starsConstructs,
          Array_exports.unzip,
          ([starElements]) => starElements,
          Array_exports.map((starElement) => starsContainer.append(starElement))
        );
        return [starsContainer, starsConstructs];
      };
      setStarsGradientByRating = (rating) => (starsSVGStops) => {
        const setHalfStarLit = (lit) => (nth) => starsSVGStops[Math.floor(nth / 2)][nth % 2].setAttributeNS(
          null,
          "stop-color",
          `var(--spice-button${lit ? "" : "-disabled"})`
        );
        (0, import_function23.pipe)(
          NonEmptyArray_exports.range(0, 9),
          Array_exports.spanLeft((hi) => hi < rating),
          ({ init: init5, rest }) => {
            init5.map(setHalfStarLit(true));
            rest.map(setHalfStarLit(false));
          }
        );
      };
      calculateRatingFromMouseEvent = (starElement, nth) => (e) => {
        const rect = starElement.getBoundingClientRect();
        const leftOffsetFromHeart = e.clientX - rect.left;
        const isHalf = CONFIG.halfStarRatings && leftOffsetFromHeart < HALF_STAR_LENGTH;
        return 2 * (nth + 1) - Number(isHalf);
      };
      onStarClick = (nth, starElement, getTrackUri, getHeart) => async (e) => {
        const trackUri = getTrackUri();
        const oldRating = tracksRatings[trackUri];
        let newRating = calculateRatingFromMouseEvent(starElement, nth)(e);
        const heart = getHeart();
        const heartThreshold = starsS2N(CONFIG.heartThreshold);
        if (heartThreshold) {
          const shouldBeHearted = newRating >= heartThreshold;
          const isHearted = heart.ariaChecked === "true";
          if (isHearted !== shouldBeHearted)
            heart.click();
        }
        if (oldRating === newRating)
          newRating = 0;
        if (oldRating)
          (0, import_function23.pipe)(
            playlistUris.slice(0, oldRating + 1),
            Array_exports.filter(Boolean),
            Array_exports.map((playlistUri) => removePlatPlaylistTracks(playlistUri, [trackUri]))
          );
        tracksRatings[trackUri] = newRating;
        if (newRating) {
          let playlistUri = playlistUris[newRating];
          if (!playlistUri) {
            playlistUri = await createPlatPlaylist(starsN2S(newRating), SpotifyLoc.after(CONFIG.ratingsFolderUri));
            setPlatPlaylistVisibility(playlistUri, false);
            playlistUris[newRating] = playlistUri;
          }
          addPlatPlaylistTracks(playlistUri, [trackUri]);
        }
        updateNowPlayingStars();
        const trackStarsContainer = getStarsContainer(`${URI9.from(trackUri).id}`);
        if (trackStarsContainer) {
          (0, import_function23.pipe)(trackStarsContainer, setStarsGradientFromContainerByRating(newRating));
          trackStarsContainer.style.visibility = newRating ? "visible" : "hidden";
        }
      };
    }
  });

  // extensions/star-ratings/ratings.tsx
  var import_function24, import_NonEmptyArray, w, aggregateRatings, addRatingsListenersToStars, loadRatings, playlistUris, tracksRatings;
  var init_ratings = __esm({
    "extensions/star-ratings/ratings.tsx"() {
      "use strict";
      init_es6();
      import_function24 = __toESM(require_function(), 1);
      import_NonEmptyArray = __toESM(require_NonEmptyArray(), 1);
      init_api();
      init_fp();
      init_util();
      init_stars();
      init_util2();
      w = (n) => Math.exp(n);
      aggregateRatings = (uris) => (0, import_function24.pipe)(
        uris,
        Array_exports.map((uri) => tracksRatings[uri]),
        Array_exports.filter(Boolean),
        Array_exports.map((r) => [r, w(r)]),
        ReadonlyArray_exports.unzip,
        ([rs, wrs]) => ReadonlyArray_exports.reduceWithIndex(0, (i, s, r) => s + r * wrs[i])(rs) / ReadonlyArray_exports.reduce(0, (s, wr) => s + wr)(wrs) || 0
      );
      addRatingsListenersToStars = ([starsContainer, starsConstructs], getTrackUri, getHeart) => {
        const [starsElements, starsSVGStops] = (0, import_function24.pipe)(starsConstructs, ReadonlyArray_exports.unzip);
        starsContainer.addEventListener(
          "mouseout",
          () => setStarsGradientByRating(tracksRatings[getTrackUri()] ?? 0)(starsSVGStops)
        );
        (0, import_function24.pipe)(
          starsElements,
          ReadonlyArray_exports.mapWithIndex((nth, starElement) => {
            starElement.addEventListener(
              "mousemove",
              (0, import_function24.flow)(calculateRatingFromMouseEvent(starElement, nth), (0, import_function24.flip)(setStarsGradientByRating)(starsSVGStops))
            );
            starElement.addEventListener("click", onStarClick(nth, starsElements[nth], getTrackUri, getHeart));
          })
        );
      };
      loadRatings = async () => {
        const ratingsFolder = await getRatingsFolder();
        const starsS2Narray = (0, import_function24.pipe)(
          (0, import_NonEmptyArray.range)(0, 10),
          Array_exports.map((s) => [starsN2S(s), s]),
          Record_exports.fromEntries
        );
        playlistUris = (0, import_function24.pipe)(
          ratingsFolder.items,
          Array_exports.map((p4) => [p4.type, p4.uri, starsS2Narray[p4.name]]),
          Array_exports.reduce(
            [],
            (acc, [type, uri, starsN]) => (type === "playlist" && starsN ? acc[starsN] = uri : [], acc)
          )
        );
        tracksRatings = await (0, import_function24.pipe)(
          playlistUris,
          Array_exports.map(fetchPlatPlaylistContents),
          (ps) => Promise.all(ps),
          // Promise.all flips empty to undefined
          pMchain(Array_exports.map((tracks) => tracks ?? [])),
          pMchain(Array_exports.map(Array_exports.map((t) => t.uri))),
          pMchain(Array_exports.flatMap((trackUris, rating) => trackUris.map((trackUri) => [trackUri, rating]))),
          pMchain(
            Array_exports.reduce(
              {},
              (acc, [trackUri, rating]) => Object.assign(acc, {
                [trackUri]: Math.max(rating, acc[trackUri] ?? 0)
              })
            )
          )
        );
        globalThis.tracksRatings = tracksRatings;
      };
      playlistUris = [];
      tracksRatings = {};
    }
  });

  // extensions/star-ratings/app.tsx
  var app_exports = {};
  __export(app_exports, {
    createNowPlayingStars: () => createNowPlayingStars,
    default: () => app_default,
    updateCollectionStars: () => updateCollectionStars,
    updateNowPlayingStars: () => updateNowPlayingStars,
    updateTrackListStars: () => updateTrackListStars
  });
  var import_function25, import_spectacles_ts, app_default, URI10, customTrackListColCss, updateTrackListStars, mainElement, mainElementObserver, updateCollectionStars, createNowPlayingStars, nowPlayingHeart, updateNowPlayingStars;
  var init_app = __esm({
    "extensions/star-ratings/app.tsx"() {
      "use strict";
      init_es6();
      init_Predicate2();
      import_function25 = __toESM(require_function(), 1);
      import_spectacles_ts = __toESM(require_dist(), 1);
      init_api();
      init_util();
      init_ratings();
      init_settings2();
      init_stars();
      init_util2();
      app_default = {};
      ({ URI: URI10 } = Spicetify);
      customTrackListColCss = [
        null,
        null,
        null,
        null,
        "[index] 16px [first] 4fr [var1] 2fr [var2] 1fr [last] minmax(120px,1fr)",
        "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] 2fr [last] minmax(120px,1fr)",
        "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] minmax(120px,2fr) [var3] 2fr [last] minmax(120px,1fr)"
      ];
      loadRatings();
      updateTrackListStars = (0, import_function25.flow)(
        getTrackLists,
        Array_exports.map((trackList) => {
          const trackListTracks = getTrackListTracks(trackList);
          const locationUri = URI10.from(Spicetify.Platform.History.location.pathname);
          let lastColIndex;
          if (URI10.isArtist(locationUri)) {
            ;
            [lastColIndex] = getLastColIndex(trackListTracks[0]);
          } else {
            const trackListHeader = getTrackListHeader(trackList);
            [lastColIndex] = getLastColIndex(trackListHeader);
            const newTrackListColCss = customTrackListColCss[lastColIndex];
            if (newTrackListColCss)
              trackListHeader.style.gridTemplateColumns = newTrackListColCss;
          }
          (0, import_function25.pipe)(
            trackListTracks,
            Array_exports.map((track) => {
              const heart = getFirstHeart(track);
              if (heart)
                heart.style.display = CONFIG.hideHearts ? "none" : "flex";
              const alreadyHasStars = track.getElementsByClassName("stars").length > 0;
              if (alreadyHasStars)
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
                const newTrackListTrackColumnCss = customTrackListColCss[colIndex];
                if (newTrackListTrackColumnCss)
                  track.style.gridTemplateColumns = customTrackListColCss[lastColIndex] ?? newTrackListTrackColumnCss;
              }
              const trackUri = getTrackListTrackUri(track);
              const uri = URI10.from(trackUri);
              if (!URI10.isTrack(uri)) {
                Spicetify.showNotification(`${trackUri} is an invalid track uri`);
                debugger;
              }
              const [starsContainer, starsConstructs] = createStars(uri.id, STAR_SIZE);
              ratingColumn.appendChild(starsContainer);
              (0, import_function25.pipe)(
                starsConstructs,
                Array_exports.unzip,
                ([_, starsStops]) => starsStops,
                setStarsGradientByRating(tracksRatings[trackUri] ?? 0)
              );
              addRatingsListenersToStars(
                [starsContainer, starsConstructs],
                () => trackUri,
                () => getFirstHeart(track)
              );
              const setVisibleCond = () => starsContainer.style.visibility = tracksRatings[trackUri] ? "visible" : "hidden";
              track.addEventListener("mouseover", () => starsContainer.style.visibility = "visible");
              track.addEventListener("mouseout", setVisibleCond);
              setVisibleCond();
            })
          );
        })
      );
      mainElementObserver = new MutationObserver(() => CONFIG.showInTrackLists ? updateTrackListStars() : void 0);
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
      updateCollectionStars = async (pathname, starsStops) => {
        const uri = URI10.from(pathname);
        if (!starsStops)
          starsStops = getStarsStops("collection");
        let uris;
        if (URI10.isAlbum(uri))
          uris = (0, import_function25.pipe)(await fetchGQLAlbum(`${uri}`), import_function25.identity, (0, import_spectacles_ts.get)("tracks.items"), Array_exports.map((0, import_function25.flow)(import_function25.identity, (0, import_spectacles_ts.get)("track.uri"))));
        else if (URI10.isArtist(uri))
          uris = (0, import_function25.pipe)(await fetchPlatArtistLikedTracks(`${uri}`), Array_exports.map((0, import_spectacles_ts.get)("uri")));
        else if (URI10.isPlaylistV1OrV2(uri))
          uris = (0, import_function25.pipe)(await fetchPlatPlaylistContents(`${uri}`), Array_exports.map((0, import_spectacles_ts.get)("uri")));
        else
          throw "me out the window";
        setStarsGradientByRating(aggregateRatings(uris))(starsStops);
      };
      Spicetify.Platform.History.listen(async ({ pathname }) => {
        const pageHasHeart = anyPass([URI10.isAlbum, URI10.isArtist, URI10.isPlaylistV1OrV2]);
        if (!pageHasHeart(pathname))
          return;
        await sleep(300);
        let collectionStarsContainer = getStarsContainer("collection"), collectionStarsStops;
        if (!collectionStarsContainer) {
          const collectionPlayButton = await waitForElement(".main-actionBar-ActionBar .main-playButton-PlayButton");
          const [collectionStarsContainer2, collectionStarsConstructs] = createStars("collection", STAR_SIZE * 2);
          collectionPlayButton?.after(collectionStarsContainer2);
          collectionStarsStops = (0, import_function25.pipe)(collectionStarsConstructs, Array_exports.unzip, ([_, starsStops]) => starsStops);
        } else {
          collectionStarsStops = (0, import_function25.pipe)(collectionStarsContainer, getStarsStopsFromStarsContainer);
        }
        updateCollectionStars(pathname, collectionStarsStops);
      });
      createNowPlayingStars = () => {
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
        addRatingsListenersToStars(
          [nowPlayingStarsContainer, nowPlayingStarConstruct],
          () => Spicetify.Player.data.track?.uri,
          getNowPlayingHeart
        );
      };
      createNowPlayingStars();
      nowPlayingHeart = getNowPlayingHeart();
      if (nowPlayingHeart)
        nowPlayingHeart.style.display = CONFIG.hideHearts ? "none" : "flex";
      updateNowPlayingStars = () => {
        const trackUri = Spicetify.Player.data.track?.uri;
        const nowPlayingStarsContainer = getStarsContainer("now-playing");
        nowPlayingStarsContainer.style.display = Spicetify.URI.isTrack(trackUri) ? "flex" : "none";
        (0, import_function25.pipe)(nowPlayingStarsContainer, setStarsGradientFromContainerByRating(tracksRatings[trackUri] ?? 0));
      };
      Spicetify.Player.addEventListener("songchange", () => {
        const trackUri = Spicetify.Player.data.track?.uri;
        if (Number(CONFIG.skipThreshold) && (tracksRatings[trackUri] || Number.MAX_SAFE_INTEGER) <= starsS2N(CONFIG.skipThreshold))
          return Spicetify.Player.next();
        updateNowPlayingStars();
      });
      updateNowPlayingStars();
    }
  });

  // extensions/star-ratings/entry.tsx
  init_es6();
  init_Record();
  var import_function26 = __toESM(require_function(), 1);
  init_util();
  (async () => {
    const mustLoad = ["Player", "showNotification", ...mustLoadForApi, ...mustLoadForSettings, ...mustLoadForUtil];
    let timer = 0;
    while (mustLoad.some((0, import_function26.flow)((0, import_function26.flip)(lookup4)(Spicetify), Option_exports.isNone)))
      await sleep(timer += 100);
    await Promise.resolve().then(() => (init_app(), app_exports));
  })();
})();
