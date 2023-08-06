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
  var __spreadArray, constNull, constUndefined, dual;
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
        return dual(2, function(self, f4) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f4(a));
          });
        });
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Apply.js
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
  function flap(F) {
    return function(a) {
      return function(fab) {
        return F.map(fab, function(f4) {
          return f4(a);
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
    return function(name, f4) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f4(a), _a));
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
    var f4 = getApplySemigroup(F);
    return function(M) {
      return {
        concat: f4(M).concat,
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
    return function(f4) {
      return function(first3) {
        return tapM(first3, f4);
      };
    };
  }
  function tap(M) {
    return function(first3, f4) {
      return M.chain(first3, function(a) {
        return M.map(f4(a), function() {
          return a;
        });
      });
    };
  }
  function bind(M) {
    return function(name, f4) {
      return function(ma) {
        return M.chain(ma, function(a) {
          return M.map(f4(a), function(b) {
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
    return function(f4) {
      return flow(f4, F.fromEither);
    };
  }
  function chainEitherK(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function(f4) {
      return function(ma) {
        return M.chain(ma, fromEitherKF(f4));
      };
    };
  }
  function tapEither(F, M) {
    var fromEither3 = fromEitherK(F);
    var tapM = tap(M);
    return function(self, f4) {
      return tapM(self, fromEither3(f4));
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
  var equalsDefault, fromCompare, getSemigroup, getMonoid, strictOrd;
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
  var constant2, first, last, concatAll2, semigroupVoid, semigroupAll, semigroupAny, semigroupString, semigroupSum, semigroupProduct;
  var init_Semigroup = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Semigroup.js"() {
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
  var __spreadArray3, empty, isNonEmpty2, isOutOfBound, prependW, prepend, unsafeInsertAt, sort, prependAll, intersperse, extract, head2, tail2, last2, concatAll3, intercalate;
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
      empty = emptyReadonlyArray;
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
          var M = getMonoid();
          return sort2(ords.reduce(M.concat, M.empty));
        }
        return copy;
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
        return function(as4) {
          var len = as4.length;
          var m = Math.round(n) % len;
          if (isOutOfBound2(Math.abs(m), as4) || m === 0) {
            return copy(as4);
          }
          if (m < 0) {
            var _a = splitAt(-m)(as4), f4 = _a[0], s = _a[1];
            return pipe(s, concat(f4));
          } else {
            return rotate(m - len)(as4);
          }
        };
      };
      fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
      makeBy = function(f4) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f4(0)];
          for (var i = 1; i < j; i++) {
            out.push(f4(i));
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
      chop = function(f4) {
        return function(as4) {
          var _a = f4(as4), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (isNonEmpty3(next)) {
            var _b = f4(next), b_1 = _b[0], rest_2 = _b[1];
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
      return function(wa, f4) {
        return F.map(traverseF(wa, f4), C.separate);
      };
    };
  }
  function witherDefault(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f4) {
        return F.map(traverseF(wa, f4), C.compact);
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
      return len === as4.length ? as4 : len === 0 ? empty2 : out;
    };
  }
  function dropLeftWhile(predicate) {
    return function(as4) {
      var i = spanLeftIndex(as4, predicate);
      return i === 0 ? as4 : i === as4.length ? empty2 : as4.slice(i);
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
  var __spreadArray5, isNonEmpty4, matchW, match, isOutOfBound3, head4, last4, spanLeftIndex, findIndex, findFirstMap, findLastMap, findLastIndex, insertAt, deleteAt, reverse2, _chainRecDepthFirst, _chainRecBreadthFirst, foldMapWithIndex2, reduce2, foldMap2, reduceWithIndex2, reduceRight2, reduceRightWithIndex2, getShow2, getEq2, getOrd, chainRecDepthFirst, chainRecBreadthFirst, unsafeDeleteAt, empty2, intercalate2;
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
      findFirstMap = function(f4) {
        return function(as4) {
          for (var i = 0; i < as4.length; i++) {
            var out = f4(as4[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastMap = function(f4) {
        return function(as4) {
          for (var i = as4.length - 1; i >= 0; i--) {
            var out = f4(as4[i]);
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
      _chainRecDepthFirst = function(a, f4) {
        return pipe(a, chainRecDepthFirst(f4));
      };
      _chainRecBreadthFirst = function(a, f4) {
        return pipe(a, chainRecBreadthFirst(f4));
      };
      foldMapWithIndex2 = function(M) {
        return function(f4) {
          return function(fa) {
            return fa.reduce(function(b, a, i) {
              return M.concat(b, f4(i, a));
            }, M.empty);
          };
        };
      };
      reduce2 = function(b, f4) {
        return reduceWithIndex2(b, function(_, b2, a) {
          return f4(b2, a);
        });
      };
      foldMap2 = function(M) {
        var foldMapWithIndexM = foldMapWithIndex2(M);
        return function(f4) {
          return foldMapWithIndexM(function(_, a) {
            return f4(a);
          });
        };
      };
      reduceWithIndex2 = function(b, f4) {
        return function(fa) {
          var len = fa.length;
          var out = b;
          for (var i = 0; i < len; i++) {
            out = f4(i, out, fa[i]);
          }
          return out;
        };
      };
      reduceRight2 = function(b, f4) {
        return reduceRightWithIndex2(b, function(_, a, b2) {
          return f4(a, b2);
        });
      };
      reduceRightWithIndex2 = function(b, f4) {
        return function(fa) {
          return fa.reduceRight(function(b2, a, i) {
            return f4(i, a, b2);
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
      chainRecDepthFirst = function(f4) {
        return function(a) {
          var todo = __spreadArray5([], f4(a), true);
          var out = [];
          while (todo.length > 0) {
            var e = todo.shift();
            if (isLeft(e)) {
              todo.unshift.apply(todo, f4(e.left));
            } else {
              out.push(e.right);
            }
          }
          return out;
        };
      };
      chainRecBreadthFirst = function(f4) {
        return function(a) {
          var initial = f4(a);
          var todo = [];
          var out = [];
          function go(e2) {
            if (isLeft(e2)) {
              f4(e2.left).forEach(function(v) {
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
      empty2 = empty;
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
    URI: () => URI,
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
    empty: () => empty3,
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
    getMonoid: () => getMonoid2,
    getOrd: () => getOrd2,
    getSemigroup: () => getSemigroup3,
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
  function comprehension(input, f4, g) {
    if (g === void 0) {
      g = function() {
        return true;
      };
    }
    var go = function(scope, input2) {
      return isNonEmpty5(input2) ? flatMap(head3(input2), function(a) {
        return go(pipe(scope, append3(a)), tail3(input2));
      }) : g.apply(void 0, scope) ? [f4.apply(void 0, scope)] : [];
    };
    return go([], input);
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
      return isNonEmpty5(first3) && isNonEmpty5(second) ? unionE(second)(first3) : isNonEmpty5(first3) ? copy2(first3) : copy2(second);
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
  var isEmpty, isNonEmpty5, prepend3, prependW3, append3, appendW3, makeBy3, replicate, fromOption, fromEither, matchW2, match2, matchLeftW, matchLeft, foldLeft, matchRightW, matchRight, foldRight, chainWithIndex, scanLeft, scanRight, size, isOutOfBound4, lookup2, head5, last5, tail4, init3, takeLeft, takeRight, spanLeftIndex2, dropLeft, dropRight, findIndex2, findFirstMap2, findLastMap2, findLastIndex2, copy2, insertAt2, updateAt, deleteAt2, modifyAt, reverse3, rights, lefts, sort3, zipWith, unzip, prependAll3, intersperse3, rotate3, elem2, uniq3, sortBy3, chop3, splitAt3, chunksOf3, fromOptionK, concatW, concat2, _map, _mapWithIndex, _ap, _filter, _filterMap, _partition, _partitionMap, _partitionWithIndex, _partitionMapWithIndex, _alt, _reduce, _foldMap, _reduceRight, _reduceWithIndex, _foldMapWithIndex, _reduceRightWithIndex, _filterMapWithIndex, _filterWithIndex, _extend, _traverse, _traverseWithIndex, _chainRecDepthFirst2, _chainRecBreadthFirst2, of3, zero, map, ap2, flatMap, flatten, mapWithIndex, filterMapWithIndex, filterMap, compact, separate, filter, partition, partitionWithIndex, partitionMap, partitionMapWithIndex, altW, alt, filterWithIndex, extend, duplicate, foldMap3, foldMapWithIndex3, reduce3, reduceWithIndex3, reduceRight3, reduceRightWithIndex3, traverse, sequence, traverseWithIndex, wither, wilt, unfold, URI, getShow3, getSemigroup3, getMonoid2, getEq3, getOrd2, getUnionSemigroup, getUnionMonoid, getIntersectionSemigroup, getDifferenceMagma, Functor, flap2, Pointed, FunctorWithIndex, Apply, apFirst2, apSecond2, Applicative, Chain, chainFirst2, Monad, Unfoldable, Alt, Zero, guard2, Alternative, Extend, Compactable, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, Traversable, TraversableWithIndex, _wither, _wilt, Witherable, chainRecDepthFirst2, ChainRecDepthFirst, chainRecBreadthFirst2, ChainRecBreadthFirst, filterE2, FromEither, fromEitherK2, unsafeInsertAt3, unsafeUpdateAt3, unsafeDeleteAt2, every2, some2, exists, intercalate3, Do, bindTo2, let_2, bind2, apS2, chain, range3, empty3, cons3, snoc3, prependToAll, array;
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
      makeBy3 = function(n, f4) {
        return n <= 0 ? [] : makeBy(f4)(n);
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
      chainWithIndex = function(f4) {
        return function(as4) {
          var out = [];
          for (var i = 0; i < as4.length; i++) {
            out.push.apply(out, f4(i, as4[i]));
          }
          return out;
        };
      };
      scanLeft = function(b, f4) {
        return function(as4) {
          var len = as4.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i = 0; i < len; i++) {
            out[i + 1] = f4(out[i], as4[i]);
          }
          return out;
        };
      };
      scanRight = function(b, f4) {
        return function(as4) {
          var len = as4.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i = len - 1; i >= 0; i--) {
            out[i] = f4(as4[i], out[i + 1]);
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
      modifyAt = function(i, f4) {
        return function(as4) {
          return isOutOfBound4(i, as4) ? none : some(unsafeUpdateAt3(i, f4(as4[i]), as4));
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
      zipWith = function(fa, fb, f4) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i = 0; i < len; i++) {
          fc[i] = f4(fa[i], fb[i]);
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
        var f4 = prependAll2(middle);
        return function(as4) {
          return isNonEmpty5(as4) ? f4(as4) : [];
        };
      };
      intersperse3 = function(middle) {
        var f4 = intersperse2(middle);
        return function(as4) {
          return isNonEmpty5(as4) ? f4(as4) : copy2(as4);
        };
      };
      rotate3 = function(n) {
        var f4 = rotate(n);
        return function(as4) {
          return isNonEmpty5(as4) ? f4(as4) : copy2(as4);
        };
      };
      elem2 = elem;
      uniq3 = function(E) {
        var f4 = uniq(E);
        return function(as4) {
          return isNonEmpty5(as4) ? f4(as4) : copy2(as4);
        };
      };
      sortBy3 = function(ords) {
        var f4 = sortBy(ords);
        return function(as4) {
          return isNonEmpty5(as4) ? f4(as4) : copy2(as4);
        };
      };
      chop3 = function(f4) {
        var g = chop(f4);
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
        var f4 = chunksOf(n);
        return function(as4) {
          return isNonEmpty5(as4) ? f4(as4) : [];
        };
      };
      fromOptionK = function(f4) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return fromOption(f4.apply(void 0, a));
        };
      };
      concatW = function(second) {
        return function(first3) {
          return isEmpty(first3) ? copy2(second) : isEmpty(second) ? copy2(first3) : first3.concat(second);
        };
      };
      concat2 = concatW;
      _map = function(fa, f4) {
        return pipe(fa, map(f4));
      };
      _mapWithIndex = function(fa, f4) {
        return pipe(fa, mapWithIndex(f4));
      };
      _ap = function(fab, fa) {
        return pipe(fab, ap2(fa));
      };
      _filter = function(fa, predicate) {
        return pipe(fa, filter(predicate));
      };
      _filterMap = function(fa, f4) {
        return pipe(fa, filterMap(f4));
      };
      _partition = function(fa, predicate) {
        return pipe(fa, partition(predicate));
      };
      _partitionMap = function(fa, f4) {
        return pipe(fa, partitionMap(f4));
      };
      _partitionWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, partitionWithIndex(predicateWithIndex));
      };
      _partitionMapWithIndex = function(fa, f4) {
        return pipe(fa, partitionMapWithIndex(f4));
      };
      _alt = function(fa, that) {
        return pipe(fa, alt(that));
      };
      _reduce = function(fa, b, f4) {
        return pipe(fa, reduce3(b, f4));
      };
      _foldMap = function(M) {
        var foldMapM = foldMap3(M);
        return function(fa, f4) {
          return pipe(fa, foldMapM(f4));
        };
      };
      _reduceRight = function(fa, b, f4) {
        return pipe(fa, reduceRight3(b, f4));
      };
      _reduceWithIndex = function(fa, b, f4) {
        return pipe(fa, reduceWithIndex3(b, f4));
      };
      _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = foldMapWithIndex3(M);
        return function(fa, f4) {
          return pipe(fa, foldMapWithIndexM(f4));
        };
      };
      _reduceRightWithIndex = function(fa, b, f4) {
        return pipe(fa, reduceRightWithIndex3(b, f4));
      };
      _filterMapWithIndex = function(fa, f4) {
        return pipe(fa, filterMapWithIndex(f4));
      };
      _filterWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, filterWithIndex(predicateWithIndex));
      };
      _extend = function(fa, f4) {
        return pipe(fa, extend(f4));
      };
      _traverse = function(F) {
        var traverseF = traverse(F);
        return function(ta, f4) {
          return pipe(ta, traverseF(f4));
        };
      };
      _traverseWithIndex = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta, f4) {
          return pipe(ta, traverseWithIndexF(f4));
        };
      };
      _chainRecDepthFirst2 = _chainRecDepthFirst;
      _chainRecBreadthFirst2 = _chainRecBreadthFirst;
      of3 = of;
      zero = function() {
        return [];
      };
      map = function(f4) {
        return function(fa) {
          return fa.map(function(a) {
            return f4(a);
          });
        };
      };
      ap2 = function(fa) {
        return flatMap(function(f4) {
          return pipe(fa, map(f4));
        });
      };
      flatMap = /* @__PURE__ */ dual(2, function(ma, f4) {
        return pipe(ma, chainWithIndex(function(i, a) {
          return f4(a, i);
        }));
      });
      flatten = /* @__PURE__ */ flatMap(identity);
      mapWithIndex = function(f4) {
        return function(fa) {
          return fa.map(function(a, i) {
            return f4(i, a);
          });
        };
      };
      filterMapWithIndex = function(f4) {
        return function(fa) {
          var out = [];
          for (var i = 0; i < fa.length; i++) {
            var optionB = f4(i, fa[i]);
            if (isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      filterMap = function(f4) {
        return filterMapWithIndex(function(_, a) {
          return f4(a);
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
      partitionMap = function(f4) {
        return partitionMapWithIndex(function(_, a) {
          return f4(a);
        });
      };
      partitionMapWithIndex = function(f4) {
        return function(fa) {
          var left = [];
          var right = [];
          for (var i = 0; i < fa.length; i++) {
            var e = f4(i, fa[i]);
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
      extend = function(f4) {
        return function(wa) {
          return wa.map(function(_, i) {
            return f4(wa.slice(i));
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
        return function(f4) {
          return traverseWithIndexF(function(_, a) {
            return f4(a);
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
        return function(f4) {
          return reduceWithIndex3(F.of(zero()), function(i, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return pipe(bs, append3(b));
              };
            }), f4(i, a));
          });
        };
      };
      wither = function(F) {
        var _witherF = _wither(F);
        return function(f4) {
          return function(fa) {
            return _witherF(fa, f4);
          };
        };
      };
      wilt = function(F) {
        var _wiltF = _wilt(F);
        return function(f4) {
          return function(fa) {
            return _wiltF(fa, f4);
          };
        };
      };
      unfold = function(b, f4) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f4(bb);
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
          concat: function(first3, second) {
            return first3.concat(second);
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
          concat: function(first3, second) {
            return unionE(second)(first3);
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
      Functor = {
        URI,
        map: _map
      };
      flap2 = /* @__PURE__ */ flap(Functor);
      Pointed = {
        URI,
        of: of3
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
        of: of3
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
      Zero = {
        URI,
        zero
      };
      guard2 = /* @__PURE__ */ guard(Zero, Pointed);
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
      _wither = /* @__PURE__ */ witherDefault(Traversable, Compactable);
      _wilt = /* @__PURE__ */ wiltDefault(Traversable, Compactable);
      Witherable = {
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
      filterE2 = /* @__PURE__ */ filterE(Witherable);
      FromEither = {
        URI,
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
      empty3 = [];
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
    URI: () => URI2,
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
    getMonoid: () => getMonoid3,
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
  var none2, some3, getLeft, getRight, _map2, _ap2, _reduce2, _foldMap2, _reduceRight2, _traverse2, _alt2, _filter2, _filterMap2, _extend2, _partition2, _partitionMap2, URI2, getShow4, getEq4, getOrd3, getMonoid3, map2, Functor2, as2, asUnit2, of4, Pointed2, ap3, Apply2, Applicative2, flatMap2, Chain2, Monad2, reduce4, foldMap4, reduceRight4, Foldable2, orElse, altW2, alt2, Alt2, zero2, Zero2, guard3, Alternative2, extend2, Extend2, compact2, defaultSeparated, separate2, Compactable2, filter2, filterMap2, partition2, partitionMap2, Filterable2, traverse2, sequence2, Traversable2, _wither2, _wilt2, wither2, wilt2, Witherable2, throwError, MonadThrow, fromEither2, FromEither2, isSome2, isNone2, matchW3, foldW, match3, fold, getOrElseW, getOrElse, flap3, apFirst3, apSecond3, flatten2, tap2, tapEither2, duplicate2, fromEitherK3, chainEitherK2, chainFirstEitherK, fromNullable, tryCatch, tryCatchK, fromNullableK, chainNullableK, toNullable, toUndefined, exists2, Do2, bindTo3, let_3, bind3, apS3, ApT, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyArrayWithIndex, traverseArrayWithIndex, traverseArray, sequenceArray, chain2, chainFirst3, mapNullable, option, getApplySemigroup2, getApplyMonoid, getFirstMonoid, getLastMonoid;
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
      _map2 = function(fa, f4) {
        return pipe(fa, map2(f4));
      };
      _ap2 = function(fab, fa) {
        return pipe(fab, ap3(fa));
      };
      _reduce2 = function(fa, b, f4) {
        return pipe(fa, reduce4(b, f4));
      };
      _foldMap2 = function(M) {
        var foldMapM = foldMap4(M);
        return function(fa, f4) {
          return pipe(fa, foldMapM(f4));
        };
      };
      _reduceRight2 = function(fa, b, f4) {
        return pipe(fa, reduceRight4(b, f4));
      };
      _traverse2 = function(F) {
        var traverseF = traverse2(F);
        return function(ta, f4) {
          return pipe(ta, traverseF(f4));
        };
      };
      _alt2 = function(fa, that) {
        return pipe(fa, alt2(that));
      };
      _filter2 = function(fa, predicate) {
        return pipe(fa, filter2(predicate));
      };
      _filterMap2 = function(fa, f4) {
        return pipe(fa, filterMap2(f4));
      };
      _extend2 = function(wa, f4) {
        return pipe(wa, extend2(f4));
      };
      _partition2 = function(fa, predicate) {
        return pipe(fa, partition2(predicate));
      };
      _partitionMap2 = function(fa, f4) {
        return pipe(fa, partitionMap2(f4));
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
      map2 = function(f4) {
        return function(fa) {
          return isNone2(fa) ? none2 : some3(f4(fa.value));
        };
      };
      Functor2 = {
        URI: URI2,
        map: _map2
      };
      as2 = dual(2, as(Functor2));
      asUnit2 = asUnit(Functor2);
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
      Apply2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2
      };
      Applicative2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of4
      };
      flatMap2 = /* @__PURE__ */ dual(2, function(ma, f4) {
        return isNone2(ma) ? none2 : f4(ma.value);
      });
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
        of: of4,
        chain: flatMap2
      };
      reduce4 = function(b, f4) {
        return function(fa) {
          return isNone2(fa) ? b : f4(b, fa.value);
        };
      };
      foldMap4 = function(M) {
        return function(f4) {
          return function(fa) {
            return isNone2(fa) ? M.empty : f4(fa.value);
          };
        };
      };
      reduceRight4 = function(b, f4) {
        return function(fa) {
          return isNone2(fa) ? b : f4(fa.value, b);
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
      Zero2 = {
        URI: URI2,
        zero: zero2
      };
      guard3 = /* @__PURE__ */ guard(Zero2, Pointed2);
      Alternative2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of4,
        alt: _alt2,
        zero: zero2
      };
      extend2 = function(f4) {
        return function(wa) {
          return isNone2(wa) ? none2 : some3(f4(wa));
        };
      };
      Extend2 = {
        URI: URI2,
        map: _map2,
        extend: _extend2
      };
      compact2 = /* @__PURE__ */ flatMap2(identity);
      defaultSeparated = /* @__PURE__ */ separated(none2, none2);
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
      filterMap2 = function(f4) {
        return function(fa) {
          return isNone2(fa) ? none2 : f4(fa.value);
        };
      };
      partition2 = function(predicate) {
        return function(fa) {
          return separated(_filter2(fa, not(predicate)), _filter2(fa, predicate));
        };
      };
      partitionMap2 = function(f4) {
        return flow(map2(f4), separate2);
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
        return function(f4) {
          return function(ta) {
            return isNone2(ta) ? F.of(none2) : F.map(f4(ta.value), some3);
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
      _wither2 = /* @__PURE__ */ witherDefault(Traversable2, Compactable2);
      _wilt2 = /* @__PURE__ */ wiltDefault(Traversable2, Compactable2);
      wither2 = function(F) {
        var _witherF = _wither2(F);
        return function(f4) {
          return function(fa) {
            return _witherF(fa, f4);
          };
        };
      };
      wilt2 = function(F) {
        var _wiltF = _wilt2(F);
        return function(f4) {
          return function(fa) {
            return _wiltF(fa, f4);
          };
        };
      };
      Witherable2 = {
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
      FromEither2 = {
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
      tryCatch = function(f4) {
        try {
          return some3(f4());
        } catch (e) {
          return none2;
        }
      };
      tryCatchK = function(f4) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return tryCatch(function() {
            return f4.apply(void 0, a);
          });
        };
      };
      fromNullableK = function(f4) {
        return flow(f4, fromNullable);
      };
      chainNullableK = function(f4) {
        return function(ma) {
          return isNone2(ma) ? none2 : fromNullable(f4(ma.value));
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
      traverseReadonlyNonEmptyArrayWithIndex = function(f4) {
        return function(as4) {
          var o = f4(0, head(as4));
          if (isNone2(o)) {
            return none2;
          }
          var out = [o.value];
          for (var i = 1; i < as4.length; i++) {
            var o_1 = f4(i, as4[i]);
            if (isNone2(o_1)) {
              return none2;
            }
            out.push(o_1.value);
          }
          return some3(out);
        };
      };
      traverseReadonlyArrayWithIndex = function(f4) {
        var g = traverseReadonlyNonEmptyArrayWithIndex(f4);
        return function(as4) {
          return isNonEmpty(as4) ? g(as4) : ApT;
        };
      };
      traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
      traverseArray = function(f4) {
        return traverseReadonlyArrayWithIndex(function(_, a) {
          return f4(a);
        });
      };
      sequenceArray = /* @__PURE__ */ traverseArray(identity);
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
      getApplySemigroup2 = /* @__PURE__ */ getApplySemigroup(Apply2);
      getApplyMonoid = /* @__PURE__ */ getApplicativeMonoid(Applicative2);
      getFirstMonoid = function() {
        return getMonoid3(first());
      };
      getLastMonoid = function() {
        return getMonoid3(last());
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js
  var getSemigroup4, getMonoid4;
  var init_Endomorphism = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js"() {
      init_function();
      getSemigroup4 = function() {
        return {
          concat: function(first3, second) {
            return flow(first3, second);
          }
        };
      };
      getMonoid4 = function() {
        return {
          concat: getSemigroup4().concat,
          empty: identity
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromIO.js
  function fromIOK(F) {
    return function(f4) {
      return flow(f4, F.fromIO);
    };
  }
  function tapIO(F, M) {
    var chainFirstM = tap(M);
    return function(self, f4) {
      return chainFirstM(self, flow(f4, F.fromIO));
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
    URI: () => URI3,
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
    getMonoid: () => getMonoid5,
    getRaceMonoid: () => getRaceMonoid,
    getSemigroup: () => getSemigroup5,
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
  var fromIO, _map3, _apPar, _apSeq, map3, ap4, of5, flatMap3, flatten3, URI3, Functor3, as3, asUnit3, flap4, Pointed3, ApplyPar, apFirst4, apSecond4, ApplicativePar, ApplySeq, ApplicativeSeq, Chain3, Monad3, MonadIO, fromTask, MonadTask, FromIO, _FlatMap, _FromIO, flatMapIO2, tap3, tapIO2, fromIOK2, chainIOK, chainFirstIOK, FromTask, never, Do3, bindTo4, let_4, bind4, apS4, ApT2, traverseReadonlyNonEmptyArrayWithIndex2, traverseReadonlyArrayWithIndex2, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseReadonlyArrayWithIndexSeq, traverseArrayWithIndex2, traverseArray2, sequenceArray2, traverseSeqArrayWithIndex, traverseSeqArray, sequenceSeqArray, chain3, chainFirst4, task, taskSeq, getSemigroup5, getMonoid5;
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
      _map3 = function(fa, f4) {
        return pipe(fa, map3(f4));
      };
      _apPar = function(fab, fa) {
        return pipe(fab, ap4(fa));
      };
      _apSeq = function(fab, fa) {
        return flatMap3(fab, function(f4) {
          return pipe(fa, map3(f4));
        });
      };
      map3 = function(f4) {
        return function(fa) {
          return function() {
            return Promise.resolve().then(fa).then(f4);
          };
        };
      };
      ap4 = function(fa) {
        return function(fab) {
          return function() {
            return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function(_a) {
              var f4 = _a[0], a = _a[1];
              return f4(a);
            });
          };
        };
      };
      of5 = function(a) {
        return function() {
          return Promise.resolve(a);
        };
      };
      flatMap3 = /* @__PURE__ */ dual(2, function(ma, f4) {
        return function() {
          return Promise.resolve().then(ma).then(function(a) {
            return f4(a)();
          });
        };
      });
      flatten3 = /* @__PURE__ */ flatMap3(identity);
      URI3 = "Task";
      Functor3 = {
        URI: URI3,
        map: _map3
      };
      as3 = dual(2, as(Functor3));
      asUnit3 = asUnit(Functor3);
      flap4 = /* @__PURE__ */ flap(Functor3);
      Pointed3 = {
        URI: URI3,
        of: of5
      };
      ApplyPar = {
        URI: URI3,
        map: _map3,
        ap: _apPar
      };
      apFirst4 = /* @__PURE__ */ apFirst(ApplyPar);
      apSecond4 = /* @__PURE__ */ apSecond(ApplyPar);
      ApplicativePar = {
        URI: URI3,
        map: _map3,
        ap: _apPar,
        of: of5
      };
      ApplySeq = {
        URI: URI3,
        map: _map3,
        ap: _apSeq
      };
      ApplicativeSeq = {
        URI: URI3,
        map: _map3,
        ap: _apSeq,
        of: of5
      };
      Chain3 = {
        URI: URI3,
        map: _map3,
        ap: _apPar,
        chain: flatMap3
      };
      Monad3 = {
        URI: URI3,
        map: _map3,
        of: of5,
        ap: _apPar,
        chain: flatMap3
      };
      MonadIO = {
        URI: URI3,
        map: _map3,
        of: of5,
        ap: _apPar,
        chain: flatMap3,
        fromIO
      };
      fromTask = identity;
      MonadTask = {
        URI: URI3,
        map: _map3,
        of: of5,
        ap: _apPar,
        chain: flatMap3,
        fromIO,
        fromTask
      };
      FromIO = {
        URI: URI3,
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
        URI: URI3,
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
      traverseReadonlyNonEmptyArrayWithIndex2 = function(f4) {
        return function(as4) {
          return function() {
            return Promise.all(as4.map(function(a, i) {
              return Promise.resolve().then(function() {
                return f4(i, a)();
              });
            }));
          };
        };
      };
      traverseReadonlyArrayWithIndex2 = function(f4) {
        var g = traverseReadonlyNonEmptyArrayWithIndex2(f4);
        return function(as4) {
          return isNonEmpty(as4) ? g(as4) : ApT2;
        };
      };
      traverseReadonlyNonEmptyArrayWithIndexSeq = function(f4) {
        return function(as4) {
          return function() {
            return tail(as4).reduce(function(acc, a, i) {
              return acc.then(function(bs) {
                return Promise.resolve().then(f4(i + 1, a)).then(function(b) {
                  bs.push(b);
                  return bs;
                });
              });
            }, Promise.resolve().then(f4(0, head(as4))).then(singleton));
          };
        };
      };
      traverseReadonlyArrayWithIndexSeq = function(f4) {
        var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f4);
        return function(as4) {
          return isNonEmpty(as4) ? g(as4) : ApT2;
        };
      };
      traverseArrayWithIndex2 = traverseReadonlyArrayWithIndex2;
      traverseArray2 = function(f4) {
        return traverseReadonlyArrayWithIndex2(function(_, a) {
          return f4(a);
        });
      };
      sequenceArray2 = /* @__PURE__ */ traverseArray2(identity);
      traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
      traverseSeqArray = function(f4) {
        return traverseReadonlyArrayWithIndexSeq(function(_, a) {
          return f4(a);
        });
      };
      sequenceSeqArray = /* @__PURE__ */ traverseSeqArray(identity);
      chain3 = flatMap3;
      chainFirst4 = tap3;
      task = {
        URI: URI3,
        map: _map3,
        of: of5,
        ap: _apPar,
        chain: flatMap3,
        fromIO,
        fromTask
      };
      taskSeq = {
        URI: URI3,
        map: _map3,
        of: of5,
        ap: _apSeq,
        chain: flatMap3,
        fromIO,
        fromTask
      };
      getSemigroup5 = /* @__PURE__ */ getApplySemigroup(ApplySeq);
      getMonoid5 = /* @__PURE__ */ getApplicativeMonoid(ApplicativeSeq);
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
    empty: () => empty4,
    endsWith: () => endsWith,
    includes: () => includes,
    isEmpty: () => isEmpty2,
    isString: () => isString,
    replace: () => replace,
    size: () => size2,
    slice: () => slice,
    split: () => split,
    startsWith: () => startsWith,
    toLowerCase: () => toLowerCase,
    toUpperCase: () => toUpperCase,
    trim: () => trim,
    trimLeft: () => trimLeft,
    trimRight: () => trimRight
  });
  var Eq2, Semigroup, empty4, Monoid, Ord2, Show, isString, toUpperCase, toLowerCase, replace, trim, trimLeft, trimRight, slice, isEmpty2, size2, split, includes, startsWith, endsWith;
  var init_string = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js"() {
      init_ReadonlyNonEmptyArray();
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
      isEmpty2 = function(s) {
        return s.length === 0;
      };
      size2 = function(s) {
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
  function lookup3(k, r) {
    if (r === void 0) {
      return function(r2) {
        return lookup3(k, r2);
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
  var lookup4;
  var init_Record = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js"() {
      init_ReadonlyRecord();
      lookup4 = lookup3;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js
  var init_es6 = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js"() {
      init_Array();
      init_HKT();
      init_Option();
      init_string();
      init_Task();
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
      var getSemigroup6 = function(S) {
        return function() {
          return {
            concat: function(f4, g) {
              return function(a) {
                return S.concat(f4(a), g(a));
              };
            }
          };
        };
      };
      exports.getSemigroup = getSemigroup6;
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
          add: function(f4, g) {
            return function(x) {
              return S.add(f4(x), g(x));
            };
          },
          zero: function() {
            return S.zero;
          },
          mul: function(f4, g) {
            return function(x) {
              return S.mul(f4(x), g(x));
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
          sub: function(f4, g) {
            return function(x) {
              return R.sub(f4(x), g(x));
            };
          }
        };
      };
      exports.getRing = getRing;
      var apply2 = function(a) {
        return function(f4) {
          return f4(a);
        };
      };
      exports.apply = apply2;
      function identity2(a) {
        return a;
      }
      exports.identity = identity2;
      exports.unsafeCoerce = identity2;
      function constant5(a) {
        return function() {
          return a;
        };
      }
      exports.constant = constant5;
      exports.constTrue = constant5(true);
      exports.constFalse = constant5(false);
      exports.constNull = constant5(null);
      exports.constUndefined = constant5(void 0);
      exports.constVoid = exports.constUndefined;
      function flip5(f4) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (args.length > 1) {
            return f4(args[1], args[0]);
          }
          return function(a) {
            return f4(a)(args[0]);
          };
        };
      }
      exports.flip = flip5;
      function flow5(ab, bc, cd, de, ef, fg, gh, hi, ij) {
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
      exports.flow = flow5;
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
      function tupled2(f4) {
        return function(a) {
          return f4.apply(void 0, a);
        };
      }
      exports.tupled = tupled2;
      function untupled(f4) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return f4(a);
        };
      }
      exports.untupled = untupled;
      function pipe5(a, ab, bc, cd, de, ef, fg, gh, hi) {
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
      exports.pipe = pipe5;
      exports.hole = absurd;
      var SK2 = function(_, b) {
        return b;
      };
      exports.SK = SK2;
      function not2(predicate) {
        return function(a) {
          return !predicate(a);
        };
      }
      exports.not = not2;
      var getEndomorphismMonoid = function() {
        return {
          concat: function(first3, second) {
            return flow5(first3, second);
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
            return body.apply(void 0, __spreadArray6([self], args, false));
          };
        };
      };
      exports.dual = dual2;
    }
  });

  // shared/util.tsx
  var spotUriRe, isUri, parseUri, escapeRegex, titleCase, normalizeStr, waitForElement, sleep;
  var init_util = __esm({
    "shared/util.tsx"() {
      "use strict";
      spotUriRe = /^(?<type>spotify:(?:artist|track|album|playlist))(?:_v2)?:(?<id>[a-zA-Z0-9_]{22})$/;
      isUri = (possibleUri) => spotUriRe.test(possibleUri);
      parseUri = (uri) => uri.match(spotUriRe)?.groups;
      escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
      titleCase = (str) => str.replace(/\b\w/g, (l) => l.toUpperCase());
      normalizeStr = (str) => str.replace(/\(.*\)/g, "").replace(/\[.*\]/g, "").replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().trim();
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
      var head7 = function(as4) {
        return as4[0];
      };
      exports.head = head7;
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
        return function(f4, onNullable) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f4.apply(void 0, a);
            return F.fromEither(o == null ? (0, exports.left)(onNullable.apply(void 0, a)) : (0, exports.right)(o));
          };
        };
      };
      exports.liftNullable = liftNullable;
      var liftOption = function(F) {
        return function(f4, onNone) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f4.apply(void 0, a);
            return F.fromEither((0, exports.isNone)(o) ? (0, exports.left)(onNone.apply(void 0, a)) : (0, exports.right)(o.value));
          };
        };
      };
      exports.liftOption = liftOption;
      var flatMapNullable = function(F, M) {
        return (0, function_1.dual)(3, function(self, f4, onNullable) {
          return M.flatMap(self, (0, exports.liftNullable)(F)(f4, onNullable));
        });
      };
      exports.flatMapNullable = flatMapNullable;
      var flatMapOption = function(F, M) {
        return (0, function_1.dual)(3, function(self, f4, onNone) {
          return M.flatMap(self, (0, exports.liftOption)(F)(f4, onNone));
        });
      };
      exports.flatMapOption = flatMapOption;
      var flatMapEither = function(F, M) {
        return (0, function_1.dual)(2, function(self, f4) {
          return M.flatMap(self, function(a) {
            return F.fromEither(f4(a));
          });
        });
      };
      exports.flatMapEither = flatMapEither;
      var flatMapIO3 = function(F, M) {
        return (0, function_1.dual)(2, function(self, f4) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f4(a));
          });
        });
      };
      exports.flatMapIO = flatMapIO3;
      var flatMapTask = function(F, M) {
        return (0, function_1.dual)(2, function(self, f4) {
          return M.flatMap(self, function(a) {
            return F.fromTask(f4(a));
          });
        });
      };
      exports.flatMapTask = flatMapTask;
      var flatMapReader = function(F, M) {
        return (0, function_1.dual)(2, function(self, f4) {
          return M.flatMap(self, function(a) {
            return F.fromReader(f4(a));
          });
        });
      };
      exports.flatMapReader = flatMapReader;
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
      var endo = function(f4) {
        return function(M) {
          return {
            concat: function(first3, second) {
              return M.concat(f4(first3), f4(second));
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
      var contramap_ = function(fa, f4) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f4));
      };
      var contramap = function(f4) {
        return function(fa) {
          return (0, exports.fromEquals)(function(x, y) {
            return fa.equals(f4(x), f4(y));
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
      var empty5 = {
        equals: function() {
          return true;
        }
      };
      var getSemigroup6 = function() {
        return {
          concat: function(x, y) {
            return (0, exports.fromEquals)(function(a, b) {
              return x.equals(a, b) && y.equals(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup6;
      var getMonoid8 = function() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: empty5
        };
      };
      exports.getMonoid = getMonoid8;
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
      var reverse6 = function(O) {
        return (0, exports.fromCompare)(function(first3, second) {
          return O.compare(second, first3);
        });
      };
      exports.reverse = reverse6;
      var contramap_ = function(fa, f4) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f4));
      };
      var contramap = function(f4) {
        return function(fa) {
          return (0, exports.fromCompare)(function(first3, second) {
            return fa.compare(f4(first3), f4(second));
          });
        };
      };
      exports.contramap = contramap;
      exports.URI = "Ord";
      var getSemigroup6 = function() {
        return {
          concat: function(first3, second) {
            return (0, exports.fromCompare)(function(a, b) {
              var ox = first3.compare(a, b);
              return ox !== 0 ? ox : second.compare(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup6;
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
        contramap: contramap_
      };
      exports.trivial = {
        equals: function_1.constTrue,
        compare: /* @__PURE__ */ (0, function_1.constant)(0)
      };
      var equals = function(O) {
        return function(second) {
          return function(first3) {
            return first3 === second || O.compare(first3, second) === 0;
          };
        };
      };
      exports.equals = equals;
      var lt = function(O) {
        return function(first3, second) {
          return O.compare(first3, second) === -1;
        };
      };
      exports.lt = lt;
      var gt = function(O) {
        return function(first3, second) {
          return O.compare(first3, second) === 1;
        };
      };
      exports.gt = gt;
      var leq = function(O) {
        return function(first3, second) {
          return O.compare(first3, second) !== 1;
        };
      };
      exports.leq = leq;
      var geq = function(O) {
        return function(first3, second) {
          return O.compare(first3, second) !== -1;
        };
      };
      exports.geq = geq;
      var min4 = function(O) {
        return function(first3, second) {
          return first3 === second || O.compare(first3, second) < 1 ? first3 : second;
        };
      };
      exports.min = min4;
      var max5 = function(O) {
        return function(first3, second) {
          return first3 === second || O.compare(first3, second) > -1 ? first3 : second;
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
      var min4 = function(O) {
        return {
          concat: Or.min(O)
        };
      };
      exports.min = min4;
      var max5 = function(O) {
        return {
          concat: Or.max(O)
        };
      };
      exports.max = max5;
      var constant5 = function(a) {
        return {
          concat: function() {
            return a;
          }
        };
      };
      exports.constant = constant5;
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
      var first3 = function() {
        return { concat: function_1.identity };
      };
      exports.first = first3;
      var last7 = function() {
        return { concat: function(_2, y) {
          return y;
        } };
      };
      exports.last = last7;
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
      function fold2(S) {
        var concatAllS = (0, exports.concatAll)(S);
        return function(startWith, as4) {
          return as4 === void 0 ? concatAllS(startWith) : concatAllS(startWith)(as4);
        };
      }
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
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js
  var import_function12, import_Semigroup2, URI4, map5, Functor4, of6, ap5, Applicative3, apFirst5, apSecond5, chain4, Monad4, Do4, bindTo5, bind5, apS5, let_5, unary, guard4, unless, when, invoke, invokeNullary, curry2T, curry2, curry3T, curry3, curry4T, curry4, curry5T, curry5, applyEvery;
  var init_Function = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js"() {
      init_Option();
      init_Array();
      import_function12 = __toESM(require_function());
      init_Predicate();
      init_Endomorphism();
      init_Monoid();
      import_Semigroup2 = __toESM(require_Semigroup());
      init_Functor();
      init_Apply();
      init_Chain();
      URI4 = "Function";
      map5 = (f4) => (g) => (0, import_function12.flow)(g, f4);
      Functor4 = {
        URI: URI4,
        map: (f4, g) => map5(g)(f4)
      };
      of6 = import_function12.constant;
      ap5 = (f4) => (g) => (x) => g(x)(f4(x));
      Applicative3 = {
        ...Functor4,
        of: of6,
        ap: (f4, g) => ap5(g)(f4)
      };
      apFirst5 = apFirst(Applicative3);
      apSecond5 = apSecond(Applicative3);
      chain4 = (f4) => (g) => (x) => f4(g(x))(x);
      Monad4 = {
        ...Applicative3,
        chain: (f4, g) => chain4(g)(f4)
      };
      Do4 = of6({});
      bindTo5 = bindTo(Functor4);
      bind5 = bind(Monad4);
      apS5 = apS(Applicative3);
      let_5 = let_(Functor4);
      unary = import_function12.tupled;
      guard4 = (branches) => (fallback) => (input) => (0, import_function12.pipe)(branches, map(([f4, g]) => (0, import_function12.flow)(fromPredicate2(f4), map2(g))), concatAll4((0, import_function12.getMonoid)(getMonoid3((0, import_Semigroup2.first)()))()), (0, import_function12.apply)(input), getOrElse(() => fallback(input)));
      unless = (f4) => (onFalse) => (x) => f4(x) ? x : onFalse(x);
      when = (0, import_function12.flow)(not, unless);
      invoke = (x) => (ys) => (z) => z[x](...ys);
      invokeNullary = (0, import_function12.flip)(invoke)([]);
      curry2T = (f4) => (a) => (b) => f4([a, b]);
      curry2 = (0, import_function12.flow)(unary, curry2T);
      curry3T = (f4) => (a) => (b) => (c) => f4([a, b, c]);
      curry3 = (0, import_function12.flow)(unary, curry3T);
      curry4T = (f4) => (a) => (b) => (c) => (d) => f4([a, b, c, d]);
      curry4 = (0, import_function12.flow)(unary, curry4T);
      curry5T = (f4) => (a) => (b) => (c) => (d) => (e) => f4([a, b, c, d, e]);
      curry5 = (0, import_function12.flow)(unary, curry5T);
      applyEvery = concatAll4(getMonoid4());
    }
  });

  // shared/fp.tsx
  var guard42, PromiseMchain, is;
  var init_fp = __esm({
    "shared/fp.tsx"() {
      "use strict";
      init_Function();
      guard42 = (branches) => guard4(
        branches
      );
      PromiseMchain = (f4) => async (fa) => f4(await fa);
      is = (c) => (a) => (field) => field[c] === a;
    }
  });

  // shared/api.tsx
  var import_function13, fetchArtistRelatedGQL, fetchArtistsSpotAPI50, fetchTracksSpotAPI50, fetchTracksSpotAPI, searchItemSpotAPI, fetchSoundOfSpotifyPlaylist, fetchTrackLFMAPI;
  var init_api = __esm({
    "shared/api.tsx"() {
      "use strict";
      init_Function();
      init_Array();
      import_function13 = __toESM(require_function(), 1);
      init_fp();
      init_util();
      fetchArtistRelatedGQL = async (uri) => (await Spicetify.GraphQL.Request(
        Spicetify.GraphQL.Definitions.queryArtistRelated,
        {
          uri,
          locale: Spicetify.Locale.getLocale()
        }
      )).data.artistUnion.relatedContent.relatedArtists.items;
      fetchArtistsSpotAPI50 = async (ids) => (await Spicetify.CosmosAsync.get(
        `https://api.spotify.com/v1/artists?ids=${ids.join(",")}`
      )).artists;
      fetchTracksSpotAPI50 = async (ids) => (await Spicetify.CosmosAsync.get(
        `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`
      )).tracks;
      fetchTracksSpotAPI = (0, import_function13.flow)(
        chunksOf3(50),
        map(fetchTracksSpotAPI50),
        (x) => Promise.all(x),
        PromiseMchain(flatten)
      );
      searchItemSpotAPI = async (q, type) => Spicetify.CosmosAsync.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          q
        )}&type=${type.join(",")}`
      );
      fetchSoundOfSpotifyPlaylist = async (genre) => {
        const name = `The Sound Of ${genre}`;
        const re = new RegExp(`^${escapeRegex(name)}$`, "i");
        const res = await searchItemSpotAPI(name, ["playlist"]);
        const item = res.playlists.items[0];
        return item?.owner.id === "thesoundsofspotify" && re.test(item.name) ? item.uri : null;
      };
      fetchTrackLFMAPI = async (LFMApiKey, artist, trackName, lastFmUsername = "") => (0, import_function13.pipe)(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LFMApiKey}&artist=${encodeURIComponent(
          artist
        )}&track=${encodeURIComponent(
          trackName
        )}&format=json&username=${encodeURIComponent(lastFmUsername)}`,
        fetch,
        PromiseMchain(invokeNullary("json"))
      );
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/ReadonlyArray.js
  var import_function14, import_Semigroup3, none3, join, sum, product, median, moveFrom, moveTo, dropRightWhile, takeRightWhile, minimum, maximum, fromIterable;
  var init_ReadonlyArray2 = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/ReadonlyArray.js"() {
      import_function14 = __toESM(require_function());
      init_Predicate();
      init_number();
      init_ReadonlyNonEmptyArray();
      init_ReadonlyArray();
      init_Option();
      init_Monoid();
      import_Semigroup3 = __toESM(require_Semigroup());
      init_Function();
      none3 = (0, import_function14.flow)(not, (p4) => every(p4));
      join = (x) => invoke("join")([x]);
      sum = concatAll4(MonoidSum);
      product = concatAll4(MonoidProduct);
      median = (0, import_function14.flow)(sort(Ord), (xs) => {
        const i = xs.length / 2;
        return i % 1 === 0 ? (xs[i - 1] + xs[i]) / 2 : xs[Math.floor(i)];
      });
      moveFrom = (from) => (to) => (xs) => from >= xs.length || to >= xs.length ? none2 : from === to ? some3(xs) : (0, import_function14.pipe)(xs, lookup(from), chain2((x) => (0, import_function14.pipe)(deleteAt(from)(xs), chain2(insertAt(to, x)))));
      moveTo = (0, import_function14.flip)(moveFrom);
      dropRightWhile = (f4) => (0, import_function14.flow)(reverse2, dropLeftWhile(f4), reverse2);
      takeRightWhile = (f4) => (0, import_function14.flow)(reverse2, takeLeftWhile(f4), reverse2);
      minimum = (0, import_function14.flow)(import_Semigroup3.min, concatAll3);
      maximum = (0, import_function14.flow)(import_Semigroup3.max, concatAll3);
      fromIterable = Array.from;
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/String.js
  var import_function15, import_Ord3, prepend4, append5, takeLeft3, takeRight3, under, reverse5, lines, unlines, test, dropLeft3, dropRight2, dropRightWhile2, head6, tail5, last6, init4, takeLeftWhile3, takeRightWhile2, isAlpha, isAlphaNum, isLower, isUpper, isSpace, words, unwords;
  var init_String = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-08a4b07b6e/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/String.js"() {
      import_function15 = __toESM(require_function());
      init_Predicate();
      init_Option();
      init_ReadonlyArray();
      init_string();
      init_ReadonlyArray2();
      import_Ord3 = __toESM(require_Ord());
      init_number();
      init_Function();
      prepend4 = (prepended) => (rest) => prepended + rest;
      append5 = (0, import_function15.flip)(prepend4);
      takeLeft3 = (n) => slice(0, (0, import_Ord3.max)(Ord)(0, n));
      takeRight3 = (n) => (x) => slice((0, import_Ord3.max)(Ord)(0, x.length - Math.floor(n)), Infinity)(x);
      under = (f4) => (0, import_function15.flow)(split(""), f4, join(""));
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
      dropRight2 = (n) => (x) => (0, import_function15.pipe)(x, invoke("substring")([0, x.length - Math.floor(n)]));
      dropRightWhile2 = (0, import_function15.flow)(dropRightWhile, under);
      head6 = (0, import_function15.flow)(fromPredicate2(not(isEmpty2)), map2(takeLeft3(1)));
      tail5 = (0, import_function15.flow)(fromPredicate2(not(isEmpty2)), map2(dropLeft3(1)));
      last6 = (0, import_function15.flow)(fromPredicate2(not(isEmpty2)), map2(takeRight3(1)));
      init4 = (0, import_function15.flow)(fromPredicate2(not(isEmpty2)), map2(dropRight2(1)));
      takeLeftWhile3 = (0, import_function15.flow)((f4) => takeLeftWhile(f4), under);
      takeRightWhile2 = (0, import_function15.flow)(takeRightWhile, under);
      isAlpha = test(/^\p{Alpha}+$/u);
      isAlphaNum = test(/^(\p{Alpha}|\p{Number})+$/u);
      isLower = test(/^\p{Lower}+$/u);
      isUpper = test(/^\p{Upper}+$/u);
      isSpace = test(/^\s+$/);
      words = split(/\s/);
      unwords = join(" ");
    }
  });

  // extensions/show-the-genres/popup.css
  var init_popup = __esm({
    "extensions/show-the-genres/popup.css"() {
    }
  });

  // extensions/show-the-genres/artistPage.tsx
  var import_function16, updateArtistPage, getArtistsGenresOrRelated;
  var init_artistPage = __esm({
    "extensions/show-the-genres/artistPage.tsx"() {
      "use strict";
      init_es6();
      init_String();
      import_function16 = __toESM(require_function(), 1);
      init_api();
      init_fp();
      init_util();
      init_popup();
      updateArtistPage = async ({ pathname }) => {
        const uri = pathname.replaceAll("/", ":");
        if (!isUri(uri))
          return;
        let { type, id } = parseUri(uri);
        if (type !== "spotify:artist" /* ARTIST */)
          return;
        const genreContainer2 = document.createElement("div");
        genreContainer2.className = "main-entityHeader-detailsText genre-container";
        genreContainer2.innerHTML = await (0, import_function16.pipe)(
          await getArtistsGenresOrRelated([uri]),
          Array_exports.takeLeft(5),
          Array_exports.map(async (genre) => {
            const uri2 = await fetchSoundOfSpotifyPlaylist(genre);
            return `<a class="main-entityHeader-genreLink" ${uri2 === null ? `href="#" data-value="${genre}" onclick="searchPlaylist(this.getAttribute('data-value'))` : `href="${uri2}"`} style="color: var(--spice-subtext); font-size: 1rem">${titleCase(
              genre
            )}</a>`;
          }),
          (x) => Promise.all(x),
          PromiseMchain(Array_exports.intercalate(string_exports.Monoid)(`<span>, </span>`)),
          PromiseMchain(prepend4(`<span>Artist Genres : </span>`))
        );
        document.querySelector(".genre-container")?.remove();
        const entityHeaderText = await waitForElement(
          "div.main-entityHeader-headerText"
        );
        entityHeaderText?.insertBefore(
          genreContainer2,
          await waitForElement("span.main-entityHeader-detailsText")
        );
      };
      getArtistsGenresOrRelated = async (artistsUris, src = null) => {
        const getArtistsGenres = (0, import_function16.flow)(
          Array_exports.map((uri) => parseUri(uri).id),
          fetchArtistsSpotAPI50,
          PromiseMchain(Array_exports.flatMap((artist) => artist.genres)),
          PromiseMchain(Array_exports.uniq(string_exports.Eq))
        );
        const allGenres = await getArtistsGenres(artistsUris);
        return allGenres.length ? allGenres : await (0, import_function16.pipe)(
          artistsUris[0],
          fetchArtistRelatedGQL,
          PromiseMchain(Array_exports.map((a) => a.uri)),
          PromiseMchain(Array_exports.chunksOf(5)),
          PromiseMchain(
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
  var import_react, genrePopup, ButtonElement, GenreItem, LastFmTagItem;
  var init_popup2 = __esm({
    "extensions/show-the-genres/popup.tsx"() {
      "use strict";
      init_es6();
      import_react = __toESM(require_react(), 1);
      init_api();
      init_util();
      init_app();
      init_popup();
      genrePopup = () => {
        Spicetify.PopupModal.display({
          title: `Genres of "${normalizeStr(
            Spicetify.Player.data.track?.metadata?.title
          )}"`,
          //<style>{css}</style>
          content: /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", { className: "popup-row" }, /* @__PURE__ */ import_react.default.createElement("hr", { className: "space" })), /* @__PURE__ */ import_react.default.createElement(GenreItem, null), /* @__PURE__ */ import_react.default.createElement(LastFmTagItem, null)),
          isLarge: true
        });
        const container = document.createElement("div");
        const titleGenresOf = document.querySelector("h1.main-type-alto");
        if (titleGenresOf) {
          container.appendChild(titleGenresOf);
          const headerSection = document.querySelector(
            ".main-trackCreditsModal-header"
          );
          headerSection?.prepend(container);
        }
      };
      window.genrePopup = genrePopup;
      ButtonElement = ({
        name = "",
        color = "",
        onClick = Task_exports.of(void 0)
      }) => /* @__PURE__ */ import_react.default.createElement("button", { className: `login-button${color}`, onClick }, name);
      GenreItem = () => {
        let [value, setValue] = (0, import_react.useState)(spotifyGenres);
        Spicetify.Player.addEventListener("songchange", () => {
          setTimeout(() => {
            setValue(spotifyGenres);
          }, 500);
        });
        const onClick = (query) => async () => {
          let uri = await fetchSoundOfSpotifyPlaylist(query);
          if (uri === null)
            Spicetify.Platform.History.push(`/search/${query}/playlists`);
          else
            Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`);
          Spicetify.PopupModal.hide();
        };
        return value.map((n) => /* @__PURE__ */ import_react.default.createElement(ButtonElement, { name: titleCase(n), onClick: onClick(n) }));
      };
      LastFmTagItem = () => {
        if (lastFmTags.length == 0)
          return /* @__PURE__ */ import_react.default.createElement("div", null);
        let [value, setValue] = (0, import_react.useState)(lastFmTags);
        Spicetify.Player.addEventListener("songchange", () => {
          setTimeout(() => {
            setValue(lastFmTags);
          }, 100);
        });
        const onClick = (query) => async () => {
          Spicetify.Platform.History.push(`/search/${query}/playlists`);
          Spicetify.PopupModal.hide();
        };
        return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", { className: "popup-row" }, /* @__PURE__ */ import_react.default.createElement("hr", { className: "space" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "popup-row" }, /* @__PURE__ */ import_react.default.createElement("h1", { className: "div-title" }, "Last FM Tags")), value.map((n) => /* @__PURE__ */ import_react.default.createElement(ButtonElement, { name: titleCase(n), onClick: onClick(n) })));
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
  var import_function17, import_react2, import_react_dom, SettingsSection;
  var init_settings = __esm({
    "shared/settings.tsx"() {
      "use strict";
      import_function17 = __toESM(require_function(), 1);
      import_react2 = __toESM(require_react(), 1);
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
          this.stopHistoryListener = Spicetify.Platform.History.listen(
            ({ pathname = "" }) => {
              if (pathname === "/preferences")
                this.render();
            }
          );
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
          const allSettingsContainer = document.querySelector(
            ".main-view-container__scroll-node-child main div"
          );
          if (!allSettingsContainer)
            return console.error("[spcr-settings] settings container not found");
          let pluginSettingsContainer = Array.from(
            allSettingsContainer.children
          ).find(({ id }) => id === this.sectionId);
          if (!pluginSettingsContainer) {
            pluginSettingsContainer = document.createElement("div");
            pluginSettingsContainer.id = this.sectionId;
            pluginSettingsContainer.className = "settingsContainer";
            allSettingsContainer.appendChild(pluginSettingsContainer);
          }
          import_react_dom.default.render(/* @__PURE__ */ import_react2.default.createElement(this.FieldsContainer, null), pluginSettingsContainer);
        };
        addButton = (nameId, description, text, onClick = import_function17.constVoid, events = {}) => {
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
        addToggle = (nameId, description, defaultValue, onChange = import_function17.constVoid, events = {}) => {
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
        addInput = (nameId, description, defaultValue, onChange = import_function17.constVoid, inputType = "text", events = {}) => {
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
        addDropDown = (nameId, description, options, defaultValue = 0, onChange = import_function17.constVoid, events = {}) => {
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
          const [value, setValueState] = (0, import_react2.useState)(
            _SettingsSection.getFieldValue(id)
          );
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
          return JSON.parse(Spicetify.LocalStorage.get(id) ?? "{}");
        };
        static setFieldValue = (id, newValue) => {
          Spicetify.LocalStorage.set(id, JSON.stringify(newValue));
        };
        static setDefaultFieldValue = (id, defaultValue) => {
          if (_SettingsSection.getFieldValue(id) === void 0)
            _SettingsSection.setFieldValue(id, defaultValue);
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
          return /* @__PURE__ */ import_react2.default.createElement("div", { className: "x-settings-row" }, /* @__PURE__ */ import_react2.default.createElement(
            this.SettingDescription,
            {
              id: field.id,
              description: field.description
            }
          ), /* @__PURE__ */ import_react2.default.createElement("div", { className: "x-settings-secondColumn" }, guard42([
            [
              isType("input" /* INPUT */),
              this.SettingInputField
            ],
            [isType("button" /* BUTTON */), this.SettingButtonField],
            [isType("toggle" /* TOGGLE */), this.SettingToggleField],
            [isType("dropdown" /* DROPDOWN */), this.SettingDropdownField]
          ])(this.SettingHidden)(field)));
        };
        SettingDescription = ({
          id,
          description
        }) => /* @__PURE__ */ import_react2.default.createElement("div", { className: "x-settings-firstColumn" }, /* @__PURE__ */ import_react2.default.createElement(
          "label",
          {
            className: "Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type",
            htmlFor: id
          },
          description
        ));
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
            field.options.map((option2, i) => /* @__PURE__ */ import_react2.default.createElement(
              "option",
              {
                selected: i === _SettingsSection.getFieldValue(field.id),
                value: i + 1
              },
              option2
            ))
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
      init_settings();
      settings = new SettingsSection(
        "Show The Genre",
        "show-the-genre"
      ).addInput("LFMApiKey", "Last.fm API Key", "44654ea047786d90338c17331a5f5d95");
      settings.pushSettings();
      CONFIG = settings.toObject();
    }
  });

  // extensions/show-the-genres/app.tsx
  var app_exports = {};
  __export(app_exports, {
    default: () => app_default,
    lastFmTags: () => lastFmTags,
    spotifyGenres: () => spotifyGenres
  });
  var import_function18, app_default, searchPlaylist, spotifyGenres, lastFmTags, updateGenreContainer, updateGenresUI, getArtistUrisFromCurrentTrack, updateGenres, genreContainer;
  var init_app = __esm({
    "extensions/show-the-genres/app.tsx"() {
      "use strict";
      init_es6();
      import_function18 = __toESM(require_function(), 1);
      init_api();
      init_fp();
      init_util();
      init_artistPage();
      init_popup2();
      init_popup();
      init_settings2();
      app_default = {};
      searchPlaylist = (query) => Spicetify.Platform.History.push(`/search/${query}/playlists`);
      window.searchPlaylist = searchPlaylist;
      spotifyGenres = new Array();
      lastFmTags = new Array();
      updateGenreContainer = async (genres) => {
        genreContainer.innerHTML = await (0, import_function18.pipe)(
          genres,
          Array_exports.map(async (genre) => {
            const uri = await fetchSoundOfSpotifyPlaylist(genre);
            return `<a ${uri === null ? `href="#" onclick="genrePopup()"` : `href="${uri}"`} style="color: var(--spice-subtext); font-size: 12px">${titleCase(
              genre
            )}</a>`;
          }),
          (x) => Promise.all(x),
          PromiseMchain(Array_exports.intercalate(string_exports.Monoid)(`<span>, </span>`))
        );
        return genreContainer;
      };
      updateGenresUI = async (genres) => {
        const trackInfoContainer = await waitForElement(
          "div.main-trackInfo-container"
        );
        const { uri, metadata } = Spicetify.Player.data.track;
        if (metadata && !metadata.is_local && isUri(uri) && parseUri(uri).type === "spotify:track" /* TRACK */ && genres.length) {
          trackInfoContainer?.appendChild(await updateGenreContainer(genres));
          lastFmTags = (0, import_function18.pipe)(
            await fetchTrackLFMAPI(
              CONFIG.LFMApiKey,
              metadata.artist_name,
              metadata.title
            ),
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
  var import_function19 = __toESM(require_function(), 1);
  init_util();
  (async () => {
    const mustLoad = [
      "CosmosAsync",
      "GraphQL",
      "Locale",
      "Platform",
      "Player",
      "PopupModal",
      "React",
      "ReactDOM"
    ];
    let timer = 0;
    while (mustLoad.some((0, import_function19.flow)((0, import_function19.flip)(lookup4)(Spicetify), Option_exports.isNone)))
      await sleep(timer += 100);
    await Promise.resolve().then(() => (init_app(), app_exports));
  })();
})();
(async () => {
                    if (!document.getElementById(`show-the-genres`)) {
                        var el = document.createElement("style")
                        el.id = `show-the-genres`
                        el.textContent = String.raw`/* extensions/show-the-genres/popup.css */
.popup-row::after {
  content: "";
  display: table;
  clear: both;
}
.popup-row .col {
  display: flex;
  padding: 10px 0;
  align-items: center;
}
.popup-row .col.description {
  float: left;
  padding-right: 15px;
}
.popup-row .col.action {
  float: right;
  text-align: right;
}
.popup-row .div-title {
  color: var(--spice-text);
}
.popup-row .divider {
  height: 2px;
  border-width: 0;
  background-color: var(--spice-button-disabled);
}
.popup-row .space {
  margin-bottom: 20px;
  visibility: hidden;
}
.popup-row .info {
}
.popup-row .red {
  font-size: 13px;
  color: #59CE8F;
}
.popup-row .demo {
  font-size: 13px;
  color: #59CE8F;
}
.popup-row .little-space {
  margin-bottom: 10px;
}
.popup-row .inputbox {
  padding: 10px;
  border-radius: 15px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
}
button.checkbox {
  align-items: center;
  color: var(--spice-text);
  cursor: pointer;
  display: flex;
  margin-inline-start: 12px;
}
button.checkbox.disabled {
  color: rgba(var(--spice-rgb-text), 0.3);
}
select {
  color: var(--spice-text);
  background: rgba(var(--spice-rgb-shadow), 0.7);
  border: 0;
  height: 32px;
}
::-webkit-scrollbar {
  width: 8px;
}
.login-button {
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
.green {
  background-color: #76ba99;
  color: #25316D;
}
.red {
  background-color: #A9555E;
}
.small-button.red {
  background-color: #A9555E !important;
}
input.small-input {
  padding: 5px !important;
  border-radius: 6px !important;
  right: 0px !important;
  margin: 5px;
}
.small-button {
  margin-right: 20px;
}
.popup-row .inputbox[type=color] {
  background-color: var(--spice-custom-main-secondary) !important;
  padding: 0px;
  border-radius: 5px !important;
  border: none;
  margin-right: 10px;
}
.popup-row .inputbox[type=color]::-webkit-color-swatch {
  border-radius: 5px !important;
  border: none;
}
.popup-row.search-div .col {
  position: relative;
}
.popup-row .nord-search-container {
  width: 100%;
}
.popup-row .nord-search-icon {
  position: absolute;
  margin: 10px;
}
.popup-row .nord-search {
  padding: 10px 36px !important;
  width: 100%;
}
.popup-row .display-none {
  display: none !important;
}
.GenericModal[aria-label*="Genres of"] .main-trackCreditsModal-header .tetrax-settings-discord-link {
  color: var(--spice-custom-success);
}
.GenericModal[aria-label*="Genres of"] .main-trackCreditsModal-header .tetrax-settings-discord-link:hover {
  color: var(--spice-custom-link-hover);
}
`.trim()
                        document.head.appendChild(el)
                    }
                })()