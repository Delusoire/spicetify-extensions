"use strict";
var vaultify = (() => {
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
        return dual(2, function(self, f3) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f3(a));
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
        return F.map(fab, function(f3) {
          return f3(a);
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
    return function(name, f3) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f3(a), _a));
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
    var f3 = getApplySemigroup(F);
    return function(M) {
      return {
        concat: f3(M).concat,
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
    return function(f3) {
      return function(first3) {
        return tapM(first3, f3);
      };
    };
  }
  function tap(M) {
    return function(first3, f3) {
      return M.chain(first3, function(a) {
        return M.map(f3(a), function() {
          return a;
        });
      });
    };
  }
  function bind(M) {
    return function(name, f3) {
      return function(ma) {
        return M.chain(ma, function(a) {
          return M.map(f3(a), function(b) {
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
    return function(f3) {
      return flow(f3, F.fromEither);
    };
  }
  function chainEitherK(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function(f3) {
      return function(ma) {
        return M.chain(ma, fromEitherKF(f3));
      };
    };
  }
  function tapEither(F, M) {
    var fromEither3 = fromEitherK(F);
    var tapM = tap(M);
    return function(self, f3) {
      return tapM(self, fromEither3(f3));
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
  var __spreadArray3, isNonEmpty2, isOutOfBound, prependW, prepend, prependAll, intersperse, extract, head2, tail2, last2, concatAll3, intercalate;
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
      isNonEmpty2 = isNonEmpty;
      isOutOfBound = function(i, as4) {
        return i < 0 || i >= as4.length;
      };
      prependW = function(head6) {
        return function(tail5) {
          return __spreadArray3([head6], tail5, true);
        };
      };
      prepend = prependW;
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
  function cons(head6, tail5) {
    return tail5 === void 0 ? prepend2(head6) : pipe(tail5, prepend2(head6));
  }
  var __spreadArray4, isNonEmpty3, isOutOfBound2, prependW2, prepend2, appendW, append, unsafeInsertAt, unsafeUpdateAt, uniq, sortBy, union, rotate, fromReadonlyNonEmptyArray2, makeBy, range, sort, copy, of, prependAll2, intersperse2, chop, splitAt, chunksOf, head3, tail3, last3, init, snoc;
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
      prependW2 = function(head6) {
        return function(tail5) {
          return __spreadArray4([head6], tail5, true);
        };
      };
      prepend2 = prependW2;
      appendW = function(end) {
        return function(init4) {
          return __spreadArray4(__spreadArray4([], init4, true), [end], false);
        };
      };
      append = appendW;
      unsafeInsertAt = function(i, a, as4) {
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
          return sort(ords.reduce(M.concat, M.empty));
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
            var _a = splitAt(-m)(as4), f3 = _a[0], s = _a[1];
            return pipe(s, concat(f3));
          } else {
            return rotate(m - len)(as4);
          }
        };
      };
      fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
      makeBy = function(f3) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f3(0)];
          for (var i = 1; i < j; i++) {
            out.push(f3(i));
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
      chop = function(f3) {
        return function(as4) {
          var _a = f3(as4), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (isNonEmpty3(next)) {
            var _b = f3(next), b_1 = _b[0], rest_2 = _b[1];
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
      snoc = function(init4, end) {
        return pipe(init4, append(end));
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
      return function(wa, f3) {
        return F.map(traverseF(wa, f3), C.separate);
      };
    };
  }
  function witherDefault(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f3) {
        return F.map(traverseF(wa, f3), C.compact);
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
  var __spreadArray5, isNonEmpty4, matchW, match, isOutOfBound3, head4, last4, findIndex, findFirstMap, findLastMap, findLastIndex, _chainRecDepthFirst, _chainRecBreadthFirst, foldMapWithIndex2, reduce2, foldMap2, reduceWithIndex2, reduceRight2, reduceRightWithIndex2, getShow2, getEq2, getOrd, chainRecDepthFirst, chainRecBreadthFirst, intercalate2;
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
      findFirstMap = function(f3) {
        return function(as4) {
          for (var i = 0; i < as4.length; i++) {
            var out = f3(as4[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastMap = function(f3) {
        return function(as4) {
          for (var i = as4.length - 1; i >= 0; i--) {
            var out = f3(as4[i]);
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
      _chainRecDepthFirst = function(a, f3) {
        return pipe(a, chainRecDepthFirst(f3));
      };
      _chainRecBreadthFirst = function(a, f3) {
        return pipe(a, chainRecBreadthFirst(f3));
      };
      foldMapWithIndex2 = function(M) {
        return function(f3) {
          return function(fa) {
            return fa.reduce(function(b, a, i) {
              return M.concat(b, f3(i, a));
            }, M.empty);
          };
        };
      };
      reduce2 = function(b, f3) {
        return reduceWithIndex2(b, function(_, b2, a) {
          return f3(b2, a);
        });
      };
      foldMap2 = function(M) {
        var foldMapWithIndexM = foldMapWithIndex2(M);
        return function(f3) {
          return foldMapWithIndexM(function(_, a) {
            return f3(a);
          });
        };
      };
      reduceWithIndex2 = function(b, f3) {
        return function(fa) {
          var len = fa.length;
          var out = b;
          for (var i = 0; i < len; i++) {
            out = f3(i, out, fa[i]);
          }
          return out;
        };
      };
      reduceRight2 = function(b, f3) {
        return reduceRightWithIndex2(b, function(_, a, b2) {
          return f3(a, b2);
        });
      };
      reduceRightWithIndex2 = function(b, f3) {
        return function(fa) {
          return fa.reduceRight(function(b2, a, i) {
            return f3(i, a, b2);
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
      chainRecDepthFirst = function(f3) {
        return function(a) {
          var todo = __spreadArray5([], f3(a), true);
          var out = [];
          while (todo.length > 0) {
            var e = todo.shift();
            if (isLeft(e)) {
              todo.unshift.apply(todo, f3(e.left));
            } else {
              out.push(e.right);
            }
          }
          return out;
        };
      };
      chainRecBreadthFirst = function(f3) {
        return function(a) {
          var initial = f3(a);
          var todo = [];
          var out = [];
          function go(e2) {
            if (isLeft(e2)) {
              f3(e2.left).forEach(function(v) {
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
    deleteAt: () => deleteAt,
    difference: () => difference,
    dropLeft: () => dropLeft,
    dropLeftWhile: () => dropLeftWhile,
    dropRight: () => dropRight,
    duplicate: () => duplicate,
    elem: () => elem2,
    empty: () => empty2,
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
    insertAt: () => insertAt,
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
    reverse: () => reverse2,
    rights: () => rights,
    rotate: () => rotate3,
    scanLeft: () => scanLeft,
    scanRight: () => scanRight,
    separate: () => separate,
    sequence: () => sequence,
    size: () => size,
    snoc: () => snoc3,
    some: () => some2,
    sort: () => sort2,
    sortBy: () => sortBy3,
    spanLeft: () => spanLeft,
    splitAt: () => splitAt3,
    tail: () => tail4,
    takeLeft: () => takeLeft,
    takeLeftWhile: () => takeLeftWhile,
    takeRight: () => takeRight,
    traverse: () => traverse,
    traverseWithIndex: () => traverseWithIndex,
    unfold: () => unfold,
    union: () => union3,
    uniq: () => uniq3,
    unsafeDeleteAt: () => unsafeDeleteAt,
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
      return out;
    };
  }
  function spanLeft(predicate) {
    return function(as4) {
      var _a = splitAt3(spanLeftIndex(as4, predicate))(as4), init4 = _a[0], rest = _a[1];
      return { init: init4, rest };
    };
  }
  function dropLeftWhile(predicate) {
    return function(as4) {
      return as4.slice(spanLeftIndex(as4, predicate));
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
  function comprehension(input, f3, g) {
    if (g === void 0) {
      g = function() {
        return true;
      };
    }
    var go = function(scope, input2) {
      return isNonEmpty5(input2) ? flatMap(head3(input2), function(a) {
        return go(pipe(scope, append3(a)), tail3(input2));
      }) : g.apply(void 0, scope) ? [f3.apply(void 0, scope)] : [];
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
  var isEmpty, isNonEmpty5, prepend3, prependW3, append3, appendW3, makeBy3, replicate, fromOption, fromEither, matchW2, match2, matchLeftW, matchLeft, foldLeft, matchRightW, matchRight, foldRight, chainWithIndex, scanLeft, scanRight, size, isOutOfBound4, lookup2, head5, last5, tail4, init3, takeLeft, takeRight, spanLeftIndex, dropLeft, dropRight, findIndex2, findFirstMap2, findLastMap2, findLastIndex2, copy2, insertAt, updateAt, deleteAt, modifyAt, reverse2, rights, lefts, sort2, zipWith, unzip, prependAll3, intersperse3, rotate3, elem2, uniq3, sortBy3, chop3, splitAt3, chunksOf3, fromOptionK, concatW, concat2, _map, _mapWithIndex, _ap, _filter, _filterMap, _partition, _partitionMap, _partitionWithIndex, _partitionMapWithIndex, _alt, _reduce, _foldMap, _reduceRight, _reduceWithIndex, _foldMapWithIndex, _reduceRightWithIndex, _filterMapWithIndex, _filterWithIndex, _extend, _traverse, _traverseWithIndex, _chainRecDepthFirst2, _chainRecBreadthFirst2, of3, zero, map, ap2, flatMap, flatten, mapWithIndex, filterMapWithIndex, filterMap, compact, separate, filter, partition, partitionWithIndex, partitionMap, partitionMapWithIndex, altW, alt, filterWithIndex, extend, duplicate, foldMap3, foldMapWithIndex3, reduce3, reduceWithIndex3, reduceRight3, reduceRightWithIndex3, traverse, sequence, traverseWithIndex, wither, wilt, unfold, URI, getShow3, getSemigroup3, getMonoid2, getEq3, getOrd2, getUnionSemigroup, getUnionMonoid, getIntersectionSemigroup, getDifferenceMagma, Functor, flap2, Pointed, FunctorWithIndex, Apply, apFirst2, apSecond2, Applicative, Chain, chainFirst2, Monad, Unfoldable, Alt, Zero, guard2, Alternative, Extend, Compactable, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, Traversable, TraversableWithIndex, _wither, _wilt, Witherable, chainRecDepthFirst2, ChainRecDepthFirst, chainRecBreadthFirst2, ChainRecBreadthFirst, filterE2, FromEither, fromEitherK2, unsafeInsertAt3, unsafeUpdateAt3, unsafeDeleteAt, every2, some2, exists, intercalate3, Do, bindTo2, let_2, bind2, apS2, chain, range3, empty2, cons3, snoc3, prependToAll, array;
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
      makeBy3 = function(n, f3) {
        return n <= 0 ? [] : makeBy(f3)(n);
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
      chainWithIndex = function(f3) {
        return function(as4) {
          var out = [];
          for (var i = 0; i < as4.length; i++) {
            out.push.apply(out, f3(i, as4[i]));
          }
          return out;
        };
      };
      scanLeft = function(b, f3) {
        return function(as4) {
          var len = as4.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i = 0; i < len; i++) {
            out[i + 1] = f3(out[i], as4[i]);
          }
          return out;
        };
      };
      scanRight = function(b, f3) {
        return function(as4) {
          var len = as4.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i = len - 1; i >= 0; i--) {
            out[i] = f3(as4[i], out[i + 1]);
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
      insertAt = function(i, a) {
        return function(as4) {
          return i < 0 || i > as4.length ? none : some(unsafeInsertAt3(i, a, as4));
        };
      };
      updateAt = function(i, a) {
        return modifyAt(i, function() {
          return a;
        });
      };
      deleteAt = function(i) {
        return function(as4) {
          return isOutOfBound4(i, as4) ? none : some(unsafeDeleteAt(i, as4));
        };
      };
      modifyAt = function(i, f3) {
        return function(as4) {
          return isOutOfBound4(i, as4) ? none : some(unsafeUpdateAt3(i, f3(as4[i]), as4));
        };
      };
      reverse2 = function(as4) {
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
      sort2 = function(O) {
        return function(as4) {
          return as4.length <= 1 ? copy2(as4) : as4.slice().sort(O.compare);
        };
      };
      zipWith = function(fa, fb, f3) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i = 0; i < len; i++) {
          fc[i] = f3(fa[i], fb[i]);
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
        var f3 = prependAll2(middle);
        return function(as4) {
          return isNonEmpty5(as4) ? f3(as4) : [];
        };
      };
      intersperse3 = function(middle) {
        var f3 = intersperse2(middle);
        return function(as4) {
          return isNonEmpty5(as4) ? f3(as4) : copy2(as4);
        };
      };
      rotate3 = function(n) {
        var f3 = rotate(n);
        return function(as4) {
          return isNonEmpty5(as4) ? f3(as4) : copy2(as4);
        };
      };
      elem2 = elem;
      uniq3 = function(E) {
        var f3 = uniq(E);
        return function(as4) {
          return isNonEmpty5(as4) ? f3(as4) : copy2(as4);
        };
      };
      sortBy3 = function(ords) {
        var f3 = sortBy(ords);
        return function(as4) {
          return isNonEmpty5(as4) ? f3(as4) : copy2(as4);
        };
      };
      chop3 = function(f3) {
        var g = chop(f3);
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
        var f3 = chunksOf(n);
        return function(as4) {
          return isNonEmpty5(as4) ? f3(as4) : [];
        };
      };
      fromOptionK = function(f3) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return fromOption(f3.apply(void 0, a));
        };
      };
      concatW = function(second) {
        return function(first3) {
          return isEmpty(first3) ? copy2(second) : isEmpty(second) ? copy2(first3) : first3.concat(second);
        };
      };
      concat2 = concatW;
      _map = function(fa, f3) {
        return pipe(fa, map(f3));
      };
      _mapWithIndex = function(fa, f3) {
        return pipe(fa, mapWithIndex(f3));
      };
      _ap = function(fab, fa) {
        return pipe(fab, ap2(fa));
      };
      _filter = function(fa, predicate) {
        return pipe(fa, filter(predicate));
      };
      _filterMap = function(fa, f3) {
        return pipe(fa, filterMap(f3));
      };
      _partition = function(fa, predicate) {
        return pipe(fa, partition(predicate));
      };
      _partitionMap = function(fa, f3) {
        return pipe(fa, partitionMap(f3));
      };
      _partitionWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, partitionWithIndex(predicateWithIndex));
      };
      _partitionMapWithIndex = function(fa, f3) {
        return pipe(fa, partitionMapWithIndex(f3));
      };
      _alt = function(fa, that) {
        return pipe(fa, alt(that));
      };
      _reduce = function(fa, b, f3) {
        return pipe(fa, reduce3(b, f3));
      };
      _foldMap = function(M) {
        var foldMapM = foldMap3(M);
        return function(fa, f3) {
          return pipe(fa, foldMapM(f3));
        };
      };
      _reduceRight = function(fa, b, f3) {
        return pipe(fa, reduceRight3(b, f3));
      };
      _reduceWithIndex = function(fa, b, f3) {
        return pipe(fa, reduceWithIndex3(b, f3));
      };
      _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = foldMapWithIndex3(M);
        return function(fa, f3) {
          return pipe(fa, foldMapWithIndexM(f3));
        };
      };
      _reduceRightWithIndex = function(fa, b, f3) {
        return pipe(fa, reduceRightWithIndex3(b, f3));
      };
      _filterMapWithIndex = function(fa, f3) {
        return pipe(fa, filterMapWithIndex(f3));
      };
      _filterWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, filterWithIndex(predicateWithIndex));
      };
      _extend = function(fa, f3) {
        return pipe(fa, extend(f3));
      };
      _traverse = function(F) {
        var traverseF = traverse(F);
        return function(ta, f3) {
          return pipe(ta, traverseF(f3));
        };
      };
      _traverseWithIndex = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta, f3) {
          return pipe(ta, traverseWithIndexF(f3));
        };
      };
      _chainRecDepthFirst2 = _chainRecDepthFirst;
      _chainRecBreadthFirst2 = _chainRecBreadthFirst;
      of3 = of;
      zero = function() {
        return [];
      };
      map = function(f3) {
        return function(fa) {
          return fa.map(function(a) {
            return f3(a);
          });
        };
      };
      ap2 = function(fa) {
        return flatMap(function(f3) {
          return pipe(fa, map(f3));
        });
      };
      flatMap = /* @__PURE__ */ dual(2, function(ma, f3) {
        return pipe(ma, chainWithIndex(function(i, a) {
          return f3(a, i);
        }));
      });
      flatten = /* @__PURE__ */ flatMap(identity);
      mapWithIndex = function(f3) {
        return function(fa) {
          return fa.map(function(a, i) {
            return f3(i, a);
          });
        };
      };
      filterMapWithIndex = function(f3) {
        return function(fa) {
          var out = [];
          for (var i = 0; i < fa.length; i++) {
            var optionB = f3(i, fa[i]);
            if (isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      filterMap = function(f3) {
        return filterMapWithIndex(function(_, a) {
          return f3(a);
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
      partitionMap = function(f3) {
        return partitionMapWithIndex(function(_, a) {
          return f3(a);
        });
      };
      partitionMapWithIndex = function(f3) {
        return function(fa) {
          var left = [];
          var right = [];
          for (var i = 0; i < fa.length; i++) {
            var e = f3(i, fa[i]);
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
      extend = function(f3) {
        return function(wa) {
          return wa.map(function(_, i) {
            return f3(wa.slice(i));
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
        return function(f3) {
          return traverseWithIndexF(function(_, a) {
            return f3(a);
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
        return function(f3) {
          return reduceWithIndex3(F.of(zero()), function(i, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return pipe(bs, append3(b));
              };
            }), f3(i, a));
          });
        };
      };
      wither = function(F) {
        var _witherF = _wither(F);
        return function(f3) {
          return function(fa) {
            return _witherF(fa, f3);
          };
        };
      };
      wilt = function(F) {
        var _wiltF = _wilt(F);
        return function(f3) {
          return function(fa) {
            return _wiltF(fa, f3);
          };
        };
      };
      unfold = function(b, f3) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f3(bb);
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
      unsafeInsertAt3 = unsafeInsertAt;
      unsafeUpdateAt3 = function(i, a, as4) {
        return isNonEmpty5(as4) ? unsafeUpdateAt(i, a, as4) : [];
      };
      unsafeDeleteAt = function(i, as4) {
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
      _map2 = function(fa, f3) {
        return pipe(fa, map2(f3));
      };
      _ap2 = function(fab, fa) {
        return pipe(fab, ap3(fa));
      };
      _reduce2 = function(fa, b, f3) {
        return pipe(fa, reduce4(b, f3));
      };
      _foldMap2 = function(M) {
        var foldMapM = foldMap4(M);
        return function(fa, f3) {
          return pipe(fa, foldMapM(f3));
        };
      };
      _reduceRight2 = function(fa, b, f3) {
        return pipe(fa, reduceRight4(b, f3));
      };
      _traverse2 = function(F) {
        var traverseF = traverse2(F);
        return function(ta, f3) {
          return pipe(ta, traverseF(f3));
        };
      };
      _alt2 = function(fa, that) {
        return pipe(fa, alt2(that));
      };
      _filter2 = function(fa, predicate) {
        return pipe(fa, filter2(predicate));
      };
      _filterMap2 = function(fa, f3) {
        return pipe(fa, filterMap2(f3));
      };
      _extend2 = function(wa, f3) {
        return pipe(wa, extend2(f3));
      };
      _partition2 = function(fa, predicate) {
        return pipe(fa, partition2(predicate));
      };
      _partitionMap2 = function(fa, f3) {
        return pipe(fa, partitionMap2(f3));
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
      map2 = function(f3) {
        return function(fa) {
          return isNone2(fa) ? none2 : some3(f3(fa.value));
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
      flatMap2 = /* @__PURE__ */ dual(2, function(ma, f3) {
        return isNone2(ma) ? none2 : f3(ma.value);
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
      reduce4 = function(b, f3) {
        return function(fa) {
          return isNone2(fa) ? b : f3(b, fa.value);
        };
      };
      foldMap4 = function(M) {
        return function(f3) {
          return function(fa) {
            return isNone2(fa) ? M.empty : f3(fa.value);
          };
        };
      };
      reduceRight4 = function(b, f3) {
        return function(fa) {
          return isNone2(fa) ? b : f3(fa.value, b);
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
      extend2 = function(f3) {
        return function(wa) {
          return isNone2(wa) ? none2 : some3(f3(wa));
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
      filterMap2 = function(f3) {
        return function(fa) {
          return isNone2(fa) ? none2 : f3(fa.value);
        };
      };
      partition2 = function(predicate) {
        return function(fa) {
          return separated(_filter2(fa, not(predicate)), _filter2(fa, predicate));
        };
      };
      partitionMap2 = function(f3) {
        return flow(map2(f3), separate2);
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
        return function(f3) {
          return function(ta) {
            return isNone2(ta) ? F.of(none2) : F.map(f3(ta.value), some3);
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
        return function(f3) {
          return function(fa) {
            return _witherF(fa, f3);
          };
        };
      };
      wilt2 = function(F) {
        var _wiltF = _wilt2(F);
        return function(f3) {
          return function(fa) {
            return _wiltF(fa, f3);
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
      tryCatch = function(f3) {
        try {
          return some3(f3());
        } catch (e) {
          return none2;
        }
      };
      tryCatchK = function(f3) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return tryCatch(function() {
            return f3.apply(void 0, a);
          });
        };
      };
      fromNullableK = function(f3) {
        return flow(f3, fromNullable);
      };
      chainNullableK = function(f3) {
        return function(ma) {
          return isNone2(ma) ? none2 : fromNullable(f3(ma.value));
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
      traverseReadonlyNonEmptyArrayWithIndex = function(f3) {
        return function(as4) {
          var o = f3(0, head(as4));
          if (isNone2(o)) {
            return none2;
          }
          var out = [o.value];
          for (var i = 1; i < as4.length; i++) {
            var o_1 = f3(i, as4[i]);
            if (isNone2(o_1)) {
              return none2;
            }
            out.push(o_1.value);
          }
          return some3(out);
        };
      };
      traverseReadonlyArrayWithIndex = function(f3) {
        var g = traverseReadonlyNonEmptyArrayWithIndex(f3);
        return function(as4) {
          return isNonEmpty(as4) ? g(as4) : ApT;
        };
      };
      traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
      traverseArray = function(f3) {
        return traverseReadonlyArrayWithIndex(function(_, a) {
          return f3(a);
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
    return function(f3) {
      return flow(f3, F.fromIO);
    };
  }
  function tapIO(F, M) {
    var chainFirstM = tap(M);
    return function(self, f3) {
      return chainFirstM(self, flow(f3, F.fromIO));
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
      _map3 = function(fa, f3) {
        return pipe(fa, map3(f3));
      };
      _apPar = function(fab, fa) {
        return pipe(fab, ap4(fa));
      };
      _apSeq = function(fab, fa) {
        return flatMap3(fab, function(f3) {
          return pipe(fa, map3(f3));
        });
      };
      map3 = function(f3) {
        return function(fa) {
          return function() {
            return Promise.resolve().then(fa).then(f3);
          };
        };
      };
      ap4 = function(fa) {
        return function(fab) {
          return function() {
            return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function(_a) {
              var f3 = _a[0], a = _a[1];
              return f3(a);
            });
          };
        };
      };
      of5 = function(a) {
        return function() {
          return Promise.resolve(a);
        };
      };
      flatMap3 = /* @__PURE__ */ dual(2, function(ma, f3) {
        return function() {
          return Promise.resolve().then(ma).then(function(a) {
            return f3(a)();
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
      traverseReadonlyNonEmptyArrayWithIndex2 = function(f3) {
        return function(as4) {
          return function() {
            return Promise.all(as4.map(function(a, i) {
              return Promise.resolve().then(function() {
                return f3(i, a)();
              });
            }));
          };
        };
      };
      traverseReadonlyArrayWithIndex2 = function(f3) {
        var g = traverseReadonlyNonEmptyArrayWithIndex2(f3);
        return function(as4) {
          return isNonEmpty(as4) ? g(as4) : ApT2;
        };
      };
      traverseReadonlyNonEmptyArrayWithIndexSeq = function(f3) {
        return function(as4) {
          return function() {
            return tail(as4).reduce(function(acc, a, i) {
              return acc.then(function(bs) {
                return Promise.resolve().then(f3(i + 1, a)).then(function(b) {
                  bs.push(b);
                  return bs;
                });
              });
            }, Promise.resolve().then(f3(0, head(as4))).then(singleton));
          };
        };
      };
      traverseReadonlyArrayWithIndexSeq = function(f3) {
        var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f3);
        return function(as4) {
          return isNonEmpty(as4) ? g(as4) : ApT2;
        };
      };
      traverseArrayWithIndex2 = traverseReadonlyArrayWithIndex2;
      traverseArray2 = function(f3) {
        return traverseReadonlyArrayWithIndex2(function(_, a) {
          return f3(a);
        });
      };
      sequenceArray2 = /* @__PURE__ */ traverseArray2(identity);
      traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
      traverseSeqArray = function(f3) {
        return traverseReadonlyArrayWithIndexSeq(function(_, a) {
          return f3(a);
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
  var Eq2, Semigroup, empty3, Monoid, Ord2;
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
      empty3 = "";
      Monoid = {
        concat: Semigroup.concat,
        empty: empty3
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
  function collect(O) {
    if (typeof O === "function") {
      return collect(Ord2)(O);
    }
    var keysO = keys_(O);
    return function(f3) {
      return function(r) {
        var out = [];
        for (var _i = 0, _a = keysO(r); _i < _a.length; _i++) {
          var key = _a[_i];
          out.push(f3(key, r[key]));
        }
        return out;
      };
    };
  }
  function toUnfoldable(U) {
    return function(r) {
      var sas = toArray(r);
      var len = sas.length;
      return U.unfold(0, function(b) {
        return b < len ? some([sas[b], b + 1]) : none;
      });
    };
  }
  var keys_, toArray, lookup4;
  var init_Record = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js"() {
      init_internal();
      init_ReadonlyRecord();
      init_string();
      keys_ = function(O) {
        return function(r) {
          return Object.keys(r).sort(O.compare);
        };
      };
      toArray = /* @__PURE__ */ collect(Ord2)(function(k, a) {
        return [
          k,
          a
        ];
      });
      lookup4 = lookup3;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js
  var init_es6 = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js"() {
      init_Array();
      init_HKT();
      init_Option();
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
            concat: function(f3, g) {
              return function(a) {
                return S.concat(f3(a), g(a));
              };
            }
          };
        };
      };
      exports.getSemigroup = getSemigroup6;
      var getMonoid7 = function(M) {
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
      exports.getMonoid = getMonoid7;
      var getSemiring = function(S) {
        return {
          add: function(f3, g) {
            return function(x) {
              return S.add(f3(x), g(x));
            };
          },
          zero: function() {
            return S.zero;
          },
          mul: function(f3, g) {
            return function(x) {
              return S.mul(f3(x), g(x));
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
          sub: function(f3, g) {
            return function(x) {
              return R.sub(f3(x), g(x));
            };
          }
        };
      };
      exports.getRing = getRing;
      var apply2 = function(a) {
        return function(f3) {
          return f3(a);
        };
      };
      exports.apply = apply2;
      function identity2(a) {
        return a;
      }
      exports.identity = identity2;
      exports.unsafeCoerce = identity2;
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
      function flip3(f3) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (args.length > 1) {
            return f3(args[1], args[0]);
          }
          return function(a) {
            return f3(a)(args[0]);
          };
        };
      }
      exports.flip = flip3;
      function flow3(ab, bc, cd, de, ef, fg, gh, hi, ij) {
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
      exports.flow = flow3;
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
      function tupled3(f3) {
        return function(a) {
          return f3.apply(void 0, a);
        };
      }
      exports.tupled = tupled3;
      function untupled(f3) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return f3(a);
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
      function not2(predicate) {
        return function(a) {
          return !predicate(a);
        };
      }
      exports.not = not2;
      var getEndomorphismMonoid = function() {
        return {
          concat: function(first3, second) {
            return flow3(first3, second);
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
  var SpotifyLoc, sleep;
  var init_util = __esm({
    "shared/util.tsx"() {
      "use strict";
      ((SpotifyLoc3) => {
        SpotifyLoc3.before = (uri) => ({
          before: { uri }
        });
        SpotifyLoc3.after = (uri) => ({
          after: { uri }
        });
      })(SpotifyLoc || (SpotifyLoc = {}));
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
        return function(f3, onNullable) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f3.apply(void 0, a);
            return F.fromEither(o == null ? (0, exports.left)(onNullable.apply(void 0, a)) : (0, exports.right)(o));
          };
        };
      };
      exports.liftNullable = liftNullable;
      var liftOption = function(F) {
        return function(f3, onNone) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f3.apply(void 0, a);
            return F.fromEither((0, exports.isNone)(o) ? (0, exports.left)(onNone.apply(void 0, a)) : (0, exports.right)(o.value));
          };
        };
      };
      exports.liftOption = liftOption;
      var flatMapNullable = function(F, M) {
        return (0, function_1.dual)(3, function(self, f3, onNullable) {
          return M.flatMap(self, (0, exports.liftNullable)(F)(f3, onNullable));
        });
      };
      exports.flatMapNullable = flatMapNullable;
      var flatMapOption = function(F, M) {
        return (0, function_1.dual)(3, function(self, f3, onNone) {
          return M.flatMap(self, (0, exports.liftOption)(F)(f3, onNone));
        });
      };
      exports.flatMapOption = flatMapOption;
      var flatMapEither = function(F, M) {
        return (0, function_1.dual)(2, function(self, f3) {
          return M.flatMap(self, function(a) {
            return F.fromEither(f3(a));
          });
        });
      };
      exports.flatMapEither = flatMapEither;
      var flatMapIO3 = function(F, M) {
        return (0, function_1.dual)(2, function(self, f3) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f3(a));
          });
        });
      };
      exports.flatMapIO = flatMapIO3;
      var flatMapTask = function(F, M) {
        return (0, function_1.dual)(2, function(self, f3) {
          return M.flatMap(self, function(a) {
            return F.fromTask(f3(a));
          });
        });
      };
      exports.flatMapTask = flatMapTask;
      var flatMapReader = function(F, M) {
        return (0, function_1.dual)(2, function(self, f3) {
          return M.flatMap(self, function(a) {
            return F.fromReader(f3(a));
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
      var reverse4 = function(M) {
        return {
          concat: function(first3, second) {
            return M.concat(second, first3);
          }
        };
      };
      exports.reverse = reverse4;
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
      var endo = function(f3) {
        return function(M) {
          return {
            concat: function(first3, second) {
              return M.concat(f3(first3), f3(second));
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
      var contramap_ = function(fa, f3) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f3));
      };
      var contramap = function(f3) {
        return function(fa) {
          return (0, exports.fromEquals)(function(x, y) {
            return fa.equals(f3(x), f3(y));
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
      var empty4 = {
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
      var getMonoid7 = function() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: empty4
        };
      };
      exports.getMonoid = getMonoid7;
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
      var reverse4 = function(O) {
        return (0, exports.fromCompare)(function(first3, second) {
          return O.compare(second, first3);
        });
      };
      exports.reverse = reverse4;
      var contramap_ = function(fa, f3) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f3));
      };
      var contramap = function(f3) {
        return function(fa) {
          return (0, exports.fromCompare)(function(first3, second) {
            return fa.compare(f3(first3), f3(second));
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
      var getMonoid7 = function() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: (0, exports.fromCompare)(function() {
            return 0;
          })
        };
      };
      exports.getMonoid = getMonoid7;
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
      var min3 = function(O) {
        return function(first3, second) {
          return first3 === second || O.compare(first3, second) < 1 ? first3 : second;
        };
      };
      exports.min = min3;
      var max3 = function(O) {
        return function(first3, second) {
          return first3 === second || O.compare(first3, second) > -1 ? first3 : second;
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
      map5 = (f3) => (g) => (0, import_function12.flow)(g, f3);
      Functor4 = {
        URI: URI4,
        map: (f3, g) => map5(g)(f3)
      };
      of6 = import_function12.constant;
      ap5 = (f3) => (g) => (x) => g(x)(f3(x));
      Applicative3 = {
        ...Functor4,
        of: of6,
        ap: (f3, g) => ap5(g)(f3)
      };
      apFirst5 = apFirst(Applicative3);
      apSecond5 = apSecond(Applicative3);
      chain4 = (f3) => (g) => (x) => f3(g(x))(x);
      Monad4 = {
        ...Applicative3,
        chain: (f3, g) => chain4(g)(f3)
      };
      Do4 = of6({});
      bindTo5 = bindTo(Functor4);
      bind5 = bind(Monad4);
      apS5 = apS(Applicative3);
      let_5 = let_(Functor4);
      unary = import_function12.tupled;
      guard4 = (branches) => (fallback) => (input) => (0, import_function12.pipe)(branches, map(([f3, g]) => (0, import_function12.flow)(fromPredicate2(f3), map2(g))), concatAll4((0, import_function12.getMonoid)(getMonoid3((0, import_Semigroup2.first)()))()), (0, import_function12.apply)(input), getOrElse(() => fallback(input)));
      unless = (f3) => (onFalse) => (x) => f3(x) ? x : onFalse(x);
      when = (0, import_function12.flow)(not, unless);
      invoke = (x) => (ys) => (z) => z[x](...ys);
      invokeNullary = (0, import_function12.flip)(invoke)([]);
      curry2T = (f3) => (a) => (b) => f3([a, b]);
      curry2 = (0, import_function12.flow)(unary, curry2T);
      curry3T = (f3) => (a) => (b) => (c) => f3([a, b, c]);
      curry3 = (0, import_function12.flow)(unary, curry3T);
      curry4T = (f3) => (a) => (b) => (c) => (d) => f3([a, b, c, d]);
      curry4 = (0, import_function12.flow)(unary, curry4T);
      curry5T = (f3) => (a) => (b) => (c) => (d) => (e) => f3([a, b, c, d, e]);
      curry5 = (0, import_function12.flow)(unary, curry5T);
      applyEvery = concatAll4(getMonoid4());
    }
  });

  // shared/fp.tsx
  var import_function13, guard22, guard42, pMchain, is, chunckify;
  var init_fp = __esm({
    "shared/fp.tsx"() {
      "use strict";
      init_es6();
      import_function13 = __toESM(require_function(), 1);
      init_Function();
      guard22 = (branches) => guard4(branches);
      guard42 = (branches) => guard4(
        branches
      );
      pMchain = (f3) => async (fa) => f3(await fa);
      is = (c) => (a) => (field) => field[c] === a;
      chunckify = (n) => (g) => (0, import_function13.flow)(Array_exports.chunksOf(n), Array_exports.map(g), (ps) => Promise.all(ps), pMchain(Array_exports.flatten));
    }
  });

  // shared/api.tsx
  var URI5, fetchWebArtistsSpot, fetchWebTracksSpot, fetchPlatPlaylistContents, createPlatFolder, likePlatPlaylist, createSPPlaylistFromTracks, fetchPlatFolder, fetchPlatRootFolder;
  var init_api = __esm({
    "shared/api.tsx"() {
      "use strict";
      init_fp();
      init_util();
      ({ URI: URI5 } = Spicetify);
      fetchWebArtistsSpot = chunckify(50)(
        async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists
      );
      fetchWebTracksSpot = chunckify(50)(
        async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks
      );
      fetchPlatPlaylistContents = async (uri) => (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
      createPlatFolder = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createFolder(name, location);
      likePlatPlaylist = async (uri) => await Spicetify.Platform.RootlistAPI.add([uri]);
      createSPPlaylistFromTracks = (name, tracks) => Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist", {
        operation: "create",
        playlist: true,
        uris: tracks,
        name
      });
      fetchPlatFolder = async (folder) => await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder });
      fetchPlatRootFolder = () => fetchPlatFolder(void 0);
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
  var import_function14, import_react, import_react_dom, SettingsSection;
  var init_settings = __esm({
    "shared/settings.tsx"() {
      "use strict";
      init_es6();
      import_function14 = __toESM(require_function(), 1);
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
        addButton = (nameId, description, text, onClick = import_function14.constVoid, events = {}) => {
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
        addToggle = (nameId, description, defaultValue = Task_exports.of(true), onChange = import_function14.constVoid, events = {}) => {
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
        addInput = (nameId, description, defaultValue, onChange = import_function14.constVoid, inputType = "text", events = {}) => {
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
        addDropDown = (nameId, description, options, defaultValue = Task_exports.of(0), onChange = import_function14.constVoid, events = {}) => {
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
          const isType2 = is("type");
          return /* @__PURE__ */ import_react.default.createElement("div", { className: "x-settings-row" }, /* @__PURE__ */ import_react.default.createElement(this.SettingDescription, { id: field.id, description: field.description }), /* @__PURE__ */ import_react.default.createElement("div", { className: "x-settings-secondColumn" }, guard42([
            [isType2("input" /* INPUT */), this.SettingInputField],
            [isType2("button" /* BUTTON */), this.SettingButtonField],
            [isType2("toggle" /* TOGGLE */), this.SettingToggleField],
            [isType2("dropdown" /* DROPDOWN */), this.SettingDropdownField]
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

  // extensions/vaultify/settings.tsx
  var settings_exports = {};
  var settings;
  var init_settings2 = __esm({
    "extensions/vaultify/settings.tsx"() {
      "use strict";
      init_settings();
      init_app();
      settings = new SettingsSection("Vaultify", "vaultify").addButton(
        "backup",
        "Backup Playlists and Settings",
        "Backup to clipboard",
        backup
      ).addButton(
        "restorePlaylistData",
        "Restore Playlists",
        "Restore from clipboard",
        restore("playlistData")
      ).addButton(
        "restoreAppData",
        "Restore Settings",
        "Restore from clipboard",
        restore("appData")
      );
      settings.pushSettings();
    }
  });

  // extensions/vaultify/app.tsx
  var app_exports = {};
  __export(app_exports, {
    backup: () => backup,
    default: () => app_default,
    restore: () => restore
  });
  var import_function15, app_default, isType, extractLikedPlaylistTreeRecur, isContentOfPersonalPlaylist, restorePlaylistseRecur, backup, restore;
  var init_app = __esm({
    "extensions/vaultify/app.tsx"() {
      "use strict";
      init_es6();
      init_Array();
      init_Record();
      import_function15 = __toESM(require_function(), 1);
      init_api();
      init_fp();
      app_default = {};
      isType = is("type");
      extractLikedPlaylistTreeRecur = (leaf) => guard22([
        [
          isType("playlist"),
          async (playlist) => ({
            [playlist.name]: playlist.isOwnedBySelf ? await (0, import_function15.pipe)(playlist.uri, fetchPlatPlaylistContents, pMchain(Array_exports.map((x) => x.uri))) : playlist.uri
          })
        ],
        [
          isType("folder"),
          async (folder) => ({
            [folder.name]: await (0, import_function15.pipe)(folder.items, map(extractLikedPlaylistTreeRecur), (ps) => Promise.all(ps))
          })
        ]
      ])(Task_exports.of({}))(leaf);
      isContentOfPersonalPlaylist = (subleaf) => typeof subleaf[0] === "string" && Spicetify.URI.isTrack(subleaf[0]);
      restorePlaylistseRecur = async (leaf) => {
        Object.keys(leaf).forEach((name) => {
          const subleaf = leaf[name];
          if (!Array.isArray(subleaf))
            return void likePlatPlaylist(subleaf);
          if (subleaf.length === 0)
            return;
          if (isContentOfPersonalPlaylist(subleaf))
            return void createSPPlaylistFromTracks(name, subleaf);
          createPlatFolder(name);
          subleaf.forEach(restorePlaylistseRecur);
        });
      };
      backup = async () => {
        const playlistData = await (0, import_function15.pipe)(await fetchPlatRootFolder(), extractLikedPlaylistTreeRecur);
        const allowedAppDataRegex = /^(?:marketplace:)|(?:extensions:)/;
        const appData = toUnfoldable(Array_exports)(localStorage).filter(([key]) => allowedAppDataRegex.test(key));
        await Spicetify.Platform.ClipboardAPI.copy(JSON.stringify({ playlistData, appData }));
        Spicetify.showNotification("Backed up Playlists and Settings");
      };
      restore = (mode) => async () => {
        let vault = JSON.parse(await Spicetify.Platform.ClipboardAPI.paste());
        if (mode === "playlistData") {
          await restorePlaylistseRecur(vault.playlistData);
          Spicetify.showNotification("Restored Playlists");
        }
        if (mode === "appData") {
          map((0, import_function15.tupled)(Spicetify.LocalStorage.set))(vault.appData);
          Spicetify.showNotification("Restored Settings");
        }
      };
      Promise.resolve().then(() => init_settings2());
    }
  });

  // extensions/vaultify/entry.tsx
  init_es6();
  init_Record();
  var import_function16 = __toESM(require_function(), 1);
  init_util();
  (async () => {
    const mustLoad = [
      "CosmosAsync",
      "LocalStorage",
      "Platform",
      "React",
      "ReactDOM",
      "showNotification"
    ];
    let timer = 0;
    while (mustLoad.some(
      (0, import_function16.flow)(
        (0, import_function16.flip)(lookup4)(
          Spicetify
        ),
        Option_exports.isNone
      )
    ))
      await sleep(timer += 100);
    await Promise.resolve().then(() => (init_app(), app_exports));
  })();
})();
