var p7=Object.defineProperty;var w4=(X,$)=>{for(var Q in $)p7(X,Q,{get:$[Q],enumerable:!0,configurable:!0,set:(H)=>$[Q]=()=>H})};function B(X){return X}function O(X){return function(){return X}}function w0(X){return function(){var $=[];for(var Q=0;Q<arguments.length;Q++)$[Q]=arguments[Q];if($.length>1)return X($[1],$[0]);return function(H){return X(H)($[0])}}}function G(X,$,Q,H,Y,V,J,Z,C){switch(arguments.length){case 1:return X;case 2:return function(){return $(X.apply(this,arguments))};case 3:return function(){return Q($(X.apply(this,arguments)))};case 4:return function(){return H(Q($(X.apply(this,arguments))))};case 5:return function(){return Y(H(Q($(X.apply(this,arguments)))))};case 6:return function(){return V(Y(H(Q($(X.apply(this,arguments))))))};case 7:return function(){return J(V(Y(H(Q($(X.apply(this,arguments)))))))};case 8:return function(){return Z(J(V(Y(H(Q($(X.apply(this,arguments))))))))};case 9:return function(){return C(Z(J(V(Y(H(Q($(X.apply(this,arguments)))))))))}}return}function B4(X){return function($){return X.apply(void 0,$)}}function j(X,$,Q,H,Y,V,J,Z,C){switch(arguments.length){case 1:return X;case 2:return $(X);case 3:return Q($(X));case 4:return H(Q($(X)));case 5:return Y(H(Q($(X))));case 6:return V(Y(H(Q($(X)))));case 7:return J(V(Y(H(Q($(X))))));case 8:return Z(J(V(Y(H(Q($(X)))))));case 9:return C(Z(J(V(Y(H(Q($(X))))))));default:{var D=arguments[0];for(var g=1;g<arguments.length;g++)D=arguments[g](D);return D}}}var o7=function(X,$,Q){if(Q||arguments.length===2){for(var H=0,Y=$.length,V;H<Y;H++)if(V||!(H in $)){if(!V)V=Array.prototype.slice.call($,0,H);V[H]=$[H]}}return X.concat(V||Array.prototype.slice.call($))};var U=function(X,$){var Q=typeof X==="number"?function(H){return H.length>=X}:X;return function(){var H=Array.from(arguments);if(Q(arguments))return $.apply(this,H);return function(Y){return $.apply(void 0,o7([Y],H,!1))}}};var n7=function(X,$,Q){if(Q||arguments.length===2){for(var H=0,Y=$.length,V;H<Y;H++)if(V||!(H in $)){if(!V)V=Array.prototype.slice.call($,0,H);V[H]=$[H]}}return X.concat(V||Array.prototype.slice.call($))},c0=function(X){return X._tag==="None"},E=function(X){return X._tag==="Some"},z={_tag:"None"},K=function(X){return{_tag:"Some",value:X}},Q0=function(X){return X._tag==="Left"};var _0=function(X){return X.length>0},d0=function(X){return X[0]},T4=function(X){return X.slice(1)};var m={};var r0=function(X){return n7([X[0]],X.slice(1),!0)};function c(X){return function($){return function(Q){return X.ap(X.map(Q,function(H){return function(){return H}}),$)}}}function _(X){return function($){return function(Q){return X.ap(X.map(Q,function(){return function(H){return H}}),$)}}}function d(X){return function($,Q){return function(H){return X.ap(X.map(H,function(Y){return function(V){var J;return Object.assign({},Y,(J={},J[$]=V,J))}}),Q)}}}function H0(X){return function($){return function(Q){return X.map(Q,function(H){return H($)})}}}function I(X){return function($){return function(Q){return X.map(Q,function(H){var Y;return Y={},Y[$]=H,Y})}}}var F=function(X){return function($,Q){return function(H){return X.map(H,function(Y){var V;return Object.assign({},Y,(V={},V[$]=Q(Y),V))})}}};function p0(X){return function($,Q){return X.map($,function(){return Q})}}function U4(X){var $=p0(X);return function(Q){return $(Q,void 0)}}var N={};w4(N,{zipWith:()=>{{return r5}},zip:()=>{{return E1}},zero:()=>{{return i}},wither:()=>{{return t9}},wilt:()=>{{return s9}},updateAt:()=>{{return M9}},unzip:()=>{{return b9}},unsafeUpdateAt:()=>{{return a1}},unsafeInsertAt:()=>{{return U7}},unsafeDeleteAt:()=>{{return X4}},uniq:()=>{{return m9}},union:()=>{{return I1}},unfold:()=>{{return o1}},traverseWithIndex:()=>{{return p1}},traverse:()=>{{return D7}},takeRight:()=>{{return u5}},takeLeftWhile:()=>{{return b5}},takeLeft:()=>{{return h5}},tail:()=>{{return O9}},splitAt:()=>{{return o5}},spanLeft:()=>{{return R9}},sortBy:()=>{{return l9}},sort:()=>{{return d5}},some:()=>{{return v7}},snoc:()=>{{return MX}},size:()=>{{return F5}},sequence:()=>{{return G0}},separate:()=>{{return y}},scanRight:()=>{{return A9}},scanLeft:()=>{{return v9}},rotate:()=>{{return y9}},rights:()=>{{return h9}},reverse:()=>{{return _5}},replicate:()=>{{return q9}},reduceWithIndex:()=>{{return r1}},reduceRightWithIndex:()=>{{return P7}},reduceRight:()=>{{return G7}},reduce:()=>{{return d1}},range:()=>{{return IX}},prependW:()=>{{return L9}},prependToAll:()=>{{return hX}},prependAll:()=>{{return p5}},prepend:()=>{{return K9}},partitionWithIndex:()=>{{return m1}},partitionMapWithIndex:()=>{{return l1}},partitionMap:()=>{{return V7}},partition:()=>{{return H7}},of:()=>{{return x}},modifyAt:()=>{{return c5}},matchW:()=>{{return R5}},matchRightW:()=>{{return g5}},matchRight:()=>{{return E5}},matchLeftW:()=>{{return W5}},matchLeft:()=>{{return k5}},match:()=>{{return B9}},mapWithIndex:()=>{{return Q7}},map:()=>{{return F0}},makeBy:()=>{{return N5}},lookup:()=>{{return W1}},let:()=>{{return kX}},lefts:()=>{{return u9}},last:()=>{{return N9}},isOutOfBound:()=>{{return f}},isNonEmpty:()=>{{return L}},isEmpty:()=>{{return S}},intersperse:()=>{{return x9}},intersection:()=>{{return F1}},intercalate:()=>{{return SX}},insertAt:()=>{{return k1}},init:()=>{{return S9}},head:()=>{{return M5}},guard:()=>{{return DX}},getUnionSemigroup:()=>{{return C7}},getUnionMonoid:()=>{{return a9}},getShow:()=>{{return i9}},getSemigroup:()=>{{return z7}},getOrd:()=>{{return e9}},getMonoid:()=>{{return K7}},getIntersectionSemigroup:()=>{{return XX}},getEq:()=>{{return L7}},getDifferenceMagma:()=>{{return $X}},fromPredicate:()=>{{return w9}},fromOptionK:()=>{{return d9}},fromOption:()=>{{return O5}},fromEitherK:()=>{{return NX}},fromEither:()=>{{return S5}},foldRight:()=>{{return U9}},foldMapWithIndex:()=>{{return Z7}},foldMap:()=>{{return J7}},foldLeft:()=>{{return T9}},flatten:()=>{{return n9}},flatMap:()=>{{return A}},flap:()=>{{return QX}},findLastMap:()=>{{return I9}},findLastIndex:()=>{{return F9}},findLast:()=>{{return E9}},findIndex:()=>{{return l5}},findFirstMap:()=>{{return g9}},findFirst:()=>{{return k9}},filterWithIndex:()=>{{return c1}},filterMapWithIndex:()=>{{return x1}},filterMap:()=>{{return M0}},filterE:()=>{{return AX}},filter:()=>{{return y1}},extend:()=>{{return _1}},exists:()=>{{return OX}},every:()=>{{return $4}},empty:()=>{{return N7}},elem:()=>{{return O0}},duplicate:()=>{{return f9}},dropRight:()=>{{return W9}},dropLeftWhile:()=>{{return m5}},dropLeft:()=>{{return y5}},difference:()=>{{return S0}},deleteAt:()=>{{return g1}},copy:()=>{{return q}},cons:()=>{{return FX}},concatW:()=>{{return n5}},concat:()=>{{return f5}},comprehension:()=>{{return r9}},compact:()=>{{return e}},chunksOf:()=>{{return _9}},chop:()=>{{return c9}},chainWithIndex:()=>{{return I5}},chainRecDepthFirst:()=>{{return BX}},chainRecBreadthFirst:()=>{{return UX}},chainFirst:()=>{{return JX}},chain:()=>{{return A7}},bindTo:()=>{{return WX}},bind:()=>{{return gX}},array:()=>{{return uX}},appendW:()=>{{return C9}},append:()=>{{return Z0}},apSecond:()=>{{return YX}},apS:()=>{{return EX}},apFirst:()=>{{return VX}},ap:()=>{{return $7}},altW:()=>{{return Y7}},alt:()=>{{return j7}},Zero:()=>{{return w7}},Witherable:()=>{{return e1}},Unfoldable:()=>{{return GX}},URI:()=>{{return P}},TraversableWithIndex:()=>{{return wX}},Traversable:()=>{{return t1}},Pointed:()=>{{return q7}},Monad:()=>{{return ZX}},FunctorWithIndex:()=>{{return HX}},Functor:()=>{{return h0}},FromEither:()=>{{return T7}},FoldableWithIndex:()=>{{return qX}},Foldable:()=>{{return B7}},FilterableWithIndex:()=>{{return CX}},Filterable:()=>{{return LX}},Extend:()=>{{return KX}},Do:()=>{{return RX}},Compactable:()=>{{return f1}},ChainRecDepthFirst:()=>{{return TX}},ChainRecBreadthFirst:()=>{{return vX}},Chain:()=>{{return n1}},Apply:()=>{{return u0}},Applicative:()=>{{return jX}},Alternative:()=>{{return zX}},Alt:()=>{{return PX}}});function B0(X){var $=V0(X);return function(Q){return function(H){return $(H,Q)}}}function V0(X){return function($,Q){return X.chain($,function(H){return X.map(Q(H),function(){return H})})}}function M(X){return function($,Q){return function(H){return X.chain(H,function(Y){return X.map(Q(Y),function(V){var J;return Object.assign({},Y,(J={},J[$]=V,J))})})}}}function T0(X){return function($){return G($,X.fromEither)}}function v4(X,$){var Q=T0(X),H=V0($);return function(Y,V){return H(Y,Q(V))}}var A4=function(X){return{equals:function($,Q){return $===Q||X($,Q)}}};var o0={equals:function(X,$){return X===$}};var O$=o0.equals;var i7=function(X,$){return X<$?-1:X>$?1:0},t7=function(X){return function($,Q){return $===Q||X($,Q)===0}},U0=function(X){return{equals:t7(X),compare:function($,Q){return $===Q?0:X($,Q)}}};var s7=function(){return{concat:function(X,$){return U0(function(Q,H){var Y=X.compare(Q,H);return Y!==0?Y:$.compare(Q,H)})}}},N4=function(){return{concat:s7().concat,empty:U0(function(){return 0})}};var n0=function(X){return function($,Q){return $===Q||X.compare($,Q)<1?$:Q}},f0=function(X){return function($,Q){return $===Q||X.compare($,Q)>-1?$:Q}},O4=function(X){var $=n0(X),Q=f0(X);return function(H,Y){return function(V){return Q($(V,Y),H)}}};var W$={equals:o0.equals,compare:i7};var S4=function(X){return function($){return function(Q){return Q.reduce(function(H,Y){return X.concat(H,Y)},$)}}};var t0=function(X){return{concat:n0(X)}},s0=function(X){return{concat:f0(X)}},X9=function(X){return{concat:function(){return X}}};var R4=S4,W4=X9(void 0);var k4={concat:function(X,$){return X&&$}},g4={concat:function(X,$){return X||$}};var E4={concat:function(X,$){return X+$}},I4={concat:function(X,$){return X+$}},F4={concat:function(X,$){return X*$}};var V9=function(X,$,Q){if(Q||arguments.length===2){for(var H=0,Y=$.length,V;H<Y;H++)if(V||!(H in $)){if(!V)V=Array.prototype.slice.call($,0,H);V[H]=$[H]}}return X.concat(V||Array.prototype.slice.call($))};var i0=_0,M4=function(X,$){return X<0||X>=$.length},h4=function(X){return function($){return V9([X],$,!0)}},u4=h4;var b4=function(X){return function($){var Q=[X,$[0]];for(var H=1;H<$.length;H++)Q.push(X,$[H]);return Q}},x4=function(X){return function($){var Q=y4($);return i0(Q)?j(Q,b4(X),u4(h($))):$}};var Y9=d0;var h=Y9,y4=T4,v0=function(X){return X[X.length-1]};var m4=function(X){return function($){return $.reduce(X.concat)}};var e0=function(X){var $=m4(X);return function(Q){return G(x4(Q),$)}};function p4(X,$){return $?X.concat($):function(Q){return Q.concat(X)}}function s4(X,$){return $===void 0?r(X):j($,r(X))}var X1=function(X,$,Q){if(Q||arguments.length===2){for(var H=0,Y=$.length,V;H<Y;H++)if(V||!(H in $)){if(!V)V=Array.prototype.slice.call($,0,H);V[H]=$[H]}}return X.concat(V||Array.prototype.slice.call($))},p=function(X){return X.length>0},$1=function(X,$){return X<0||X>=$.length},Q1=function(X){return function($){return X1([X],$,!0)}},r=Q1,H1=function(X){return function($){return X1(X1([],$,!0),[X],!1)}},V1=H1,l4=function(X,$,Q){if(p(Q)){var H=J1(Q);return H.splice(X,0,$),H}return[$]},c4=function(X,$,Q){var H=J1(Q);return H[X]=$,H},Y1=function(X){return function($){if($.length===1)return Y0($);var Q=[u($)],H=o($),Y=function(C){if(Q.every(function(D){return!X.equals(D,C)}))Q.push(C)};for(var V=0,J=H;V<J.length;V++){var Z=J[V];Y(Z)}return Q}},_4=function(X){if(p(X)){var $=N4();return G1(X.reduce($.concat,$.empty))}return Y0},d4=function(X){var $=Y1(X);return function(Q){return function(H){return $(j(H,p4(Q)))}}},j1=function(X){return function($){var Q=$.length,H=Math.round(X)%Q;if($1(Math.abs(H),$)||H===0)return Y0($);if(H<0){var Y=A0(-H)($),V=Y[0],J=Y[1];return j(J,p4(V))}else return j1(H-Q)($)}},J1=r0;var Z1=function(X){return function($){var Q=Math.max(0,Math.floor($)),H=[X(0)];for(var Y=1;Y<Q;Y++)H.push(X(Y));return H}};var r4=function(X,$){return X<=$?Z1(function(Q){return X+Q})($-X+1):[X]};var G1=function(X){return function($){return $.slice().sort(X.compare)}};var Y0=J1,o4=function(X){return[X]};var P1=function(X){return function($){var Q=[X,$[0]];for(var H=1;H<$.length;H++)Q.push(X,$[H]);return Q}},n4=function(X){return function($){var Q=o($);return p(Q)?j(Q,P1(X),r(u($))):Y0($)}};var D1=function(X){return function($){var Q=X($),H=Q[0],Y=Q[1],V=[H],J=Y;while(p(J)){var Z=X(J),C=Z[0],D=Z[1];V.push(C),J=D}return V}},A0=function(X){return function($){var Q=Math.max(1,X);return Q>=$.length?[Y0($),[]]:[j($.slice(1,Q),r(u($))),$.slice(Q)]}},f4=function(X){return D1(A0(X))};var u=h,o=function(X){return X.slice(1)},t4=v0,z1=function(X){return X.slice(0,-1)};var K1=function(X){return function($){return $.reduce(X.concat)}};var i4=function(X,$){return j(X,V1($))};var j0={};w4(j0,{isNumber:()=>{{return j9}},Show:()=>{{return J9}},SemigroupSum:()=>{{return q1}},SemigroupProduct:()=>{{return w1}},Ord:()=>{{return n}},MonoidSum:()=>{{return B1}},MonoidProduct:()=>{{return T1}},MagmaSub:()=>{{return a4}},Field:()=>{{return Z9}},Eq:()=>{{return L1}},Bounded:()=>{{return C1}}});var j9=function(X){return typeof X==="number"},L1={equals:function(X,$){return X===$}},n={equals:L1.equals,compare:function(X,$){return X<$?-1:X>$?1:0}},C1={equals:L1.equals,compare:n.compare,top:Infinity,bottom:(-Infinity)},J9={show:function(X){return JSON.stringify(X)}},a4={concat:function(X,$){return X-$}},q1={concat:function(X,$){return X+$}},w1={concat:function(X,$){return X*$}},B1={concat:q1.concat,empty:0},T1={concat:w1.concat,empty:1},Z9={add:q1.concat,zero:0,mul:w1.concat,one:1,sub:a4.concat,degree:function(X){return 1},div:function(X,$){return X/$},mod:function(X,$){return X%$}};var N0=function(X,$){return{left:X,right:$}};function X5(X,$){return function(Q){var H=X.traverse(Q);return function(Y,V){return Q.map(H(Y,V),$.separate)}}}function $5(X,$){return function(Q){var H=X.traverse(Q);return function(Y,V){return Q.map(H(Y,V),$.compact)}}}function Q5(X){return function($){var Q=X.wither($);return function(H){return function(Y){return Q(Y,function(V){return $.map(H(V),function(J){return J?K(V):z})})}}}}function H5(X,$){return function(Q){return Q?$.of(void 0):X.zero()}}function U1(X,$){return $===void 0?function(Q){return U1(X,Q)}:z9(X,$)?z:K($[X])}function J5(X){return function($){for(var Q=0;Q<$.length;Q++)if(X($[Q]))return K($[Q]);return z}}function G5(X){return function($){for(var Q=$.length-1;Q>=0;Q--)if(X($[Q]))return K($[Q]);return z}}function v1(X){return function($,Q){if(Q===void 0){var H=v1(X);return function(J){return H($,J)}}var Y=function(J){return X.equals(J,$)},V=0;for(;V<Q.length;V++)if(Y(Q[V]))return!0;return!1}}function U5(X){return function($){return $.every(X)}}var G9=function(X,$,Q){if(Q||arguments.length===2){for(var H=0,Y=$.length,V;H<Y;H++)if(V||!(H in $)){if(!V)V=Array.prototype.slice.call($,0,H);V[H]=$[H]}}return X.concat(V||Array.prototype.slice.call($))};var J0=i0;var P9=function(X,$){return function(Q){return J0(Q)?$(Q):X()}},D9=P9;var z9=M4,V5=function(X){return J0(X)?K(h(X)):z},Y5=function(X){return J0(X)?K(v0(X)):z};var j5=function(X){return function($){for(var Q=0;Q<$.length;Q++)if(X($[Q]))return K(Q);return z}},Z5=function(X){return function($){for(var Q=0;Q<$.length;Q++){var H=X($[Q]);if(E(H))return H}return z}},P5=function(X){return function($){for(var Q=$.length-1;Q>=0;Q--){var H=X($[Q]);if(E(H))return H}return z}},D5=function(X){return function($){for(var Q=$.length-1;Q>=0;Q--)if(X($[Q]))return K(Q);return z}};var z5=function(X,$){return j(X,S1($))},K5=function(X,$){return j(X,R1($))};var A1=function(X){return function($){return function(Q){return Q.reduce(function(H,Y,V){return X.concat(H,$(V,Y))},X.empty)}}},L5=function(X,$){return N1(X,function(Q,H,Y){return $(H,Y)})},C5=function(X){var $=A1(X);return function(Q){return $(function(H,Y){return Q(Y)})}},N1=function(X,$){return function(Q){var H=Q.length,Y=X;for(var V=0;V<H;V++)Y=$(V,Y,Q[V]);return Y}},q5=function(X,$){return O1(X,function(Q,H,Y){return $(H,Y)})},O1=function(X,$){return function(Q){return Q.reduceRight(function(H,Y,V){return $(V,Y,H)},X)}};var w5=function(X){return{show:function($){return"[".concat($.map(X.show).join(", "),"]")}}};var B5=function(X){return A4(function($,Q){return $.length===Q.length&&$.every(function(H,Y){return X.equals(H,Q[Y])})})},T5=function(X){return U0(function($,Q){var H=$.length,Y=Q.length,V=Math.min(H,Y);for(var J=0;J<V;J++){var Z=X.compare($[J],Q[J]);if(Z!==0)return Z}return n.compare(H,Y)})};var S1=function(X){return function($){var Q=G9([],X($),!0),H=[];while(Q.length>0){var Y=Q.shift();if(Q0(Y))Q.unshift.apply(Q,X(Y.left));else H.push(Y.right)}return H}};var R1=function(X){return function($){var Q=X($),H=[],Y=[];function V(D){if(Q0(D))X(D.left).forEach(function(g){return H.push(g)});else Y.push(D.right)}for(var J=0,Z=Q;J<Z.length;J++){var C=Z[J];V(C)}while(H.length>0)V(H.shift());return Y}};var v5=function(X){var $=e0(X);return function(Q){return D9(function(){return X.empty},$(Q))}};function w9(X){return function($){return X($)?[$]:[]}}function b5(X){return function($){var Q=[];for(var H=0,Y=$;H<Y.length;H++){var V=Y[H];if(!X(V))break;Q.push(V)}return Q}}function R9(X){return function($){var Q=o5(x5($,X))($),H=Q[0],Y=Q[1];return{init:H,rest:Y}}}function m5(X){return function($){return $.slice(x5($,X))}}function k9(X){return J5(X)}function E9(X){return G5(X)}function E1(X,$){if($===void 0)return function(Q){return E1(Q,X)};return r5(X,$,function(Q,H){return[Q,H]})}function r9(X,$,Q){if(Q===void 0)Q=function(){return!0};var H=function(Y,V){return L(V)?A(u(V),function(J){return H(j(Y,Z0(J)),o(V))}):Q.apply(void 0,Y)?[$.apply(void 0,Y)]:[]};return H([],X)}function I1(X){var $=d4(X);return function(Q,H){if(H===void 0){var Y=I1(X);return function(V){return Y(V,Q)}}return L(Q)&&L(H)?$(H)(Q):L(Q)?q(Q):q(H)}}function F1(X){var $=O0(X);return function(Q,H){if(H===void 0){var Y=F1(X);return function(V){return Y(V,Q)}}return Q.filter(function(V){return $(V,H)})}}function S0(X){var $=O0(X);return function(Q,H){if(H===void 0){var Y=S0(X);return function(V){return Y(V,Q)}}return Q.filter(function(V){return!$(V,H)})}}var S=function(X){return X.length===0},L=p,K9=r,L9=Q1,Z0=V1,C9=H1,N5=function(X,$){return X<=0?[]:Z1($)(X)},q9=function(X,$){return N5(X,function(){return $})},O5=function(X){return c0(X)?[]:[X.value]},S5=function(X){return Q0(X)?[]:[X.right]},R5=function(X,$){return function(Q){return L(Q)?$(Q):X()}},B9=R5,W5=function(X,$){return function(Q){return L(Q)?$(u(Q),o(Q)):X()}},k5=W5,T9=k5,g5=function(X,$){return function(Q){return L(Q)?$(z1(Q),t4(Q)):X()}},E5=g5,U9=E5,I5=function(X){return function($){var Q=[];for(var H=0;H<$.length;H++)Q.push.apply(Q,X(H,$[H]));return Q}},v9=function(X,$){return function(Q){var H=Q.length,Y=new Array(H+1);Y[0]=X;for(var V=0;V<H;V++)Y[V+1]=$(Y[V],Q[V]);return Y}},A9=function(X,$){return function(Q){var H=Q.length,Y=new Array(H+1);Y[H]=X;for(var V=H-1;V>=0;V--)Y[V]=$(Q[V],Y[V+1]);return Y}},F5=function(X){return X.length},f=$1,W1=U1,M5=V5,N9=Y5,O9=function(X){return L(X)?K(o(X)):z},S9=function(X){return L(X)?K(z1(X)):z},h5=function(X){return function($){return f(X,$)?q($):$.slice(0,X)}},u5=function(X){return function($){return f(X,$)?q($):X===0?[]:$.slice(-X)}},x5=function(X,$){var Q=X.length,H=0;for(;H<Q;H++)if(!$(X[H]))break;return H},y5=function(X){return function($){return X<=0||S($)?q($):X>=$.length?[]:$.slice(X,$.length)}},W9=function(X){return function($){return X<=0||S($)?q($):X>=$.length?[]:$.slice(0,$.length-X)}},l5=j5,g9=Z5,I9=P5,F9=D5,q=function(X){return X.slice()},k1=function(X,$){return function(Q){return X<0||X>Q.length?z:K(U7(X,$,Q))}},M9=function(X,$){return c5(X,function(){return $})},g1=function(X){return function($){return f(X,$)?z:K(X4(X,$))}},c5=function(X,$){return function(Q){return f(X,Q)?z:K(a1(X,$(Q[X]),Q))}},_5=function(X){return S(X)?[]:X.slice().reverse()},h9=function(X){var $=[];for(var Q=0;Q<X.length;Q++){var H=X[Q];if(H._tag==="Right")$.push(H.right)}return $},u9=function(X){var $=[];for(var Q=0;Q<X.length;Q++){var H=X[Q];if(H._tag==="Left")$.push(H.left)}return $},d5=function(X){return function($){return $.length<=1?q($):$.slice().sort(X.compare)}},r5=function(X,$,Q){var H=[],Y=Math.min(X.length,$.length);for(var V=0;V<Y;V++)H[V]=Q(X[V],$[V]);return H},b9=function(X){var $=[],Q=[];for(var H=0;H<X.length;H++)$[H]=X[H][0],Q[H]=X[H][1];return[$,Q]},p5=function(X){var $=P1(X);return function(Q){return L(Q)?$(Q):[]}},x9=function(X){var $=n4(X);return function(Q){return L(Q)?$(Q):q(Q)}},y9=function(X){var $=j1(X);return function(Q){return L(Q)?$(Q):q(Q)}},O0=v1,m9=function(X){var $=Y1(X);return function(Q){return L(Q)?$(Q):q(Q)}},l9=function(X){var $=_4(X);return function(Q){return L(Q)?$(Q):q(Q)}},c9=function(X){var $=D1(X);return function(Q){return L(Q)?$(Q):[]}},o5=function(X){return function($){return X>=1&&L($)?A0(X)($):S($)?[q($),[]]:[[],q($)]}},_9=function(X){var $=f4(X);return function(Q){return L(Q)?$(Q):[]}},d9=function(X){return function(){var $=[];for(var Q=0;Q<arguments.length;Q++)$[Q]=arguments[Q];return O5(X.apply(void 0,$))}},n5=function(X){return function($){return S($)?q(X):S(X)?q($):$.concat(X)}},f5=n5,w=function(X,$){return j(X,F0($))},R0=function(X,$){return j(X,Q7($))},R=function(X,$){return j(X,$7($))},W0=function(X,$){return j(X,y1($))},k0=function(X,$){return j(X,M0($))},g0=function(X,$){return j(X,H7($))},E0=function(X,$){return j(X,V7($))},t5=function(X,$){return j(X,m1($))},s5=function(X,$){return j(X,l1($))},M1=function(X,$){return j(X,j7($))},b=function(X,$,Q){return j(X,d1($,Q))},t=function(X){var $=J7(X);return function(Q,H){return j(Q,$(H))}},s=function(X,$,Q){return j(X,G7($,Q))},h1=function(X,$,Q){return j(X,r1($,Q))},u1=function(X){var $=Z7(X);return function(Q,H){return j(Q,$(H))}},b1=function(X,$,Q){return j(X,P7($,Q))},i5=function(X,$){return j(X,x1($))},e5=function(X,$){return j(X,c1($))},a5=function(X,$){return j(X,_1($))},I0=function(X){var $=D7(X);return function(Q,H){return j(Q,$(H))}},X7=function(X){var $=p1(X);return function(Q,H){return j(Q,$(H))}},p9=z5,o9=K5,x=o4,i=function(){return[]},F0=function(X){return function($){return $.map(function(Q){return X(Q)})}},$7=function(X){return A(function($){return j(X,F0($))})},A=U(2,function(X,$){return j(X,I5(function(Q,H){return $(H,Q)}))}),n9=A(B),Q7=function(X){return function($){return $.map(function(Q,H){return X(H,Q)})}},x1=function(X){return function($){var Q=[];for(var H=0;H<$.length;H++){var Y=X(H,$[H]);if(E(Y))Q.push(Y.value)}return Q}},M0=function(X){return x1(function($,Q){return X(Q)})},e=M0(B),y=function(X){var $=[],Q=[];for(var H=0,Y=X;H<Y.length;H++){var V=Y[H];if(V._tag==="Left")$.push(V.left);else Q.push(V.right)}return N0($,Q)},y1=function(X){return function($){return $.filter(X)}},H7=function(X){return m1(function($,Q){return X(Q)})},m1=function(X){return function($){var Q=[],H=[];for(var Y=0;Y<$.length;Y++){var V=$[Y];if(X(Y,V))H.push(V);else Q.push(V)}return N0(Q,H)}},V7=function(X){return l1(function($,Q){return X(Q)})},l1=function(X){return function($){var Q=[],H=[];for(var Y=0;Y<$.length;Y++){var V=X(Y,$[Y]);if(V._tag==="Left")Q.push(V.left);else H.push(V.right)}return N0(Q,H)}},Y7=function(X){return function($){return $.concat(X())}},j7=Y7,c1=function(X){return function($){return $.filter(function(Q,H){return X(H,Q)})}},_1=function(X){return function($){return $.map(function(Q,H){return X($.slice(H))})}},f9=_1(B),J7=C5,Z7=A1,d1=L5,r1=N1,G7=q5,P7=O1,D7=function(X){var $=p1(X);return function(Q){return $(function(H,Y){return Q(Y)})}},G0=function(X){return function($){return b($,X.of(i()),function(Q,H){return X.ap(X.map(Q,function(Y){return function(V){return j(Y,Z0(V))}}),H)})}},p1=function(X){return function($){return r1(X.of(i()),function(Q,H,Y){return X.ap(X.map(H,function(V){return function(J){return j(V,Z0(J))}}),$(Q,Y))})}},t9=function(X){var $=s1(X);return function(Q){return function(H){return $(H,Q)}}},s9=function(X){var $=i1(X);return function(Q){return function(H){return $(H,Q)}}},o1=function(X,$){var Q=[],H=X;while(!0){var Y=$(H);if(E(Y)){var V=Y.value,J=V[0],Z=V[1];Q.push(J),H=Z}else break}return Q},P="Array",i9=w5,z7=function(){return{concat:function(X,$){return X.concat($)}}},K7=function(){return{concat:z7().concat,empty:[]}},L7=B5,e9=T5,C7=function(X){var $=I1(X);return{concat:function(Q,H){return $(H)(Q)}}},a9=function(X){return{concat:C7(X).concat,empty:[]}},XX=function(X){var $=F1(X);return{concat:function(Q,H){return $(H)(Q)}}},$X=function(X){var $=S0(X);return{concat:function(Q,H){return $(H)(Q)}}},h0={URI:P,map:w},QX=H0(h0),q7={URI:P,of:x},HX={URI:P,map:w,mapWithIndex:R0},u0={URI:P,map:w,ap:R},VX=c(u0),YX=_(u0),jX={URI:P,map:w,ap:R,of:x},n1={URI:P,map:w,ap:R,chain:A},JX=B0(n1),ZX={URI:P,map:w,ap:R,of:x,chain:A},GX={URI:P,unfold:o1},PX={URI:P,map:w,alt:M1},w7={URI:P,zero:i},DX=H5(w7,q7),zX={URI:P,map:w,ap:R,of:x,alt:M1,zero:i},KX={URI:P,map:w,extend:a5},f1={URI:P,compact:e,separate:y},LX={URI:P,map:w,compact:e,separate:y,filter:W0,filterMap:k0,partition:g0,partitionMap:E0},CX={URI:P,map:w,mapWithIndex:R0,compact:e,separate:y,filter:W0,filterMap:k0,partition:g0,partitionMap:E0,partitionMapWithIndex:s5,partitionWithIndex:t5,filterMapWithIndex:i5,filterWithIndex:e5},B7={URI:P,reduce:b,foldMap:t,reduceRight:s},qX={URI:P,reduce:b,foldMap:t,reduceRight:s,reduceWithIndex:h1,foldMapWithIndex:u1,reduceRightWithIndex:b1},t1={URI:P,map:w,reduce:b,foldMap:t,reduceRight:s,traverse:I0,sequence:G0},wX={URI:P,map:w,mapWithIndex:R0,reduce:b,foldMap:t,reduceRight:s,reduceWithIndex:h1,foldMapWithIndex:u1,reduceRightWithIndex:b1,traverse:I0,sequence:G0,traverseWithIndex:X7},s1=$5(t1,f1),i1=X5(t1,f1),e1={URI:P,map:w,compact:e,separate:y,filter:W0,filterMap:k0,partition:g0,partitionMap:E0,reduce:b,foldMap:t,reduceRight:s,traverse:I0,sequence:G0,wither:s1,wilt:i1},BX=S1,TX={URI:P,map:w,ap:R,chain:A,chainRec:p9},UX=R1,vX={URI:P,map:w,ap:R,chain:A,chainRec:o9},AX=Q5(e1),T7={URI:P,fromEither:S5},NX=T0(T7),U7=l4,a1=function(X,$,Q){return L(Q)?c4(X,$,Q):[]},X4=function(X,$){var Q=$.slice();return Q.splice(X,1),Q},$4=U5,v7=function(X){return function($){return $.some(X)}},OX=v7,SX=v5,RX=x(m),WX=I(h0),kX=F(h0);var gX=M(n1),EX=d(u0),A7=A,IX=r4,N7=[],FX=s4,MX=i4,hX=p5,uX={URI:P,compact:e,separate:y,map:w,ap:R,of:x,chain:A,filter:W0,filterMap:k0,partition:g0,partitionMap:E0,mapWithIndex:R0,partitionMapWithIndex:s5,partitionWithIndex:t5,filterMapWithIndex:i5,filterWithIndex:e5,alt:M1,zero:i,unfold:o1,reduce:b,foldMap:t,reduceRight:s,traverse:I0,sequence:G0,reduceWithIndex:h1,foldMapWithIndex:u1,reduceRightWithIndex:b1,traverseWithIndex:X7,extend:a5,wither:s1,wilt:i1};var a=function(X){return function($){return!X($)}};var Q4=function(X){return function($){return function(Q){return $(Q)&&X(Q)}}};function D0(X){return function($){return X($)?k($):W}}var W=z,k=K;var bX=function(X){return X._tag==="Left"?W:k(X.right)},O7=function(X,$){return j(X,z0($))},xX=function(X,$){return j(X,yX($))};var H4="Option";var z0=function(X){return function($){return P0($)?W:k(X($.value))}},S7={URI:H4,map:O7},gQ=U(2,p0(S7)),EQ=U4(S7);var yX=function(X){return function($){return P0($)?W:P0(X)?W:k($.value(X.value))}};var R7=U(2,function(X,$){return P0(X)?W:$(X.value)}),W7={URI:H4,map:O7,ap:xX,chain:R7};var IQ=U(2,function(X,$){return P0(X)?$():X});var mX=bX,lX={URI:H4,fromEither:mX};var P0=function(X){return X._tag==="None"};var FQ=U(2,V0(W7)),MQ=U(2,v4(lX,W7));var V4=R7;var cX=function(){return{concat:function(X,$){return G(X,$)}}},g7=function(){return{concat:cX().concat,empty:B}};var K0=function(X){return R4(X)(X.empty)},mQ={concat:W4.concat,empty:void 0};var lQ={concat:k4.concat,empty:!0},cQ={concat:g4.concat,empty:!1};var _Q={concat:E4.concat,empty:""},dQ={concat:I4.concat,empty:0},rQ={concat:F4.concat,empty:1};var _X="Function",dX=(X)=>($)=>G($,X),Y4={URI:_X,map:(X,$)=>dX($)(X)},E7=O,rX=(X)=>($)=>(Q)=>$(Q)(X(Q)),b0={...Y4,of:E7,ap:(X,$)=>rX($)(X)},Q6=c(b0),H6=_(b0),pX=(X)=>($)=>(Q)=>X($(Q))(Q);var oX={...b0,chain:(X,$)=>pX($)(X)},V6=E7({}),Y6=I(Y4),j6=M(oX),J6=d(b0),Z6=F(Y4);var x0=B4;var j4=(X)=>($)=>(Q)=>X(Q)?Q:$(Q),G6=G(a,j4);var nX=(X)=>($)=>(Q)=>Q[X](...$),P6=w0(nX)([]);var fX=(X)=>($)=>(Q)=>X([$,Q]),D6=G(x0,fX),tX=(X)=>($)=>(Q)=>(H)=>X([$,Q,H]),z6=G(x0,tX),sX=(X)=>($)=>(Q)=>(H)=>(Y)=>X([$,Q,H,Y]),K6=G(x0,sX),iX=(X)=>($)=>(Q)=>(H)=>(Y)=>(V)=>X([$,Q,H,Y,V]),L6=G(x0,iX);var C6=K0(g7());var k6=G(a,(X)=>$4(X));var eX=K0(B1),g6=K0(T1),J4=(X)=>eX(X)/X.length,E6=G(G1(n),(X)=>{const $=X.length/2;return $%1===0?(X[$-1]+X[$])/2:X[Math.floor($)]});var aX=(X)=>($)=>(Q)=>X>=Q.length||$>=Q.length?W:X===$?k(Q):j(Q,W1(X),V4((H)=>j(g1(X)(Q),V4(k1($,H))))),I6=w0(aX);var F6=G(t0,K1),M6=G(s0,K1);var h6=Array.from;var Z4=Spicetify.Mousetrap(),L0="abcdefghijklmnopqrstuvwxyz".split(""),I7=()=>Array.from(v.getElementsByClassName("sneak-key")),X$=(X)=>{if(X.length===0)return!1;return v.remove(),j(X,N.map(($)=>$.remove())),document.body.append(v),!0},F7=G(I7,X$),M7=()=>{if(v.style.display="block",F7())return;const X=(V)=>V.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}),$=(V)=>{const J=document.body,Z=V.getBoundingClientRect(),C=(D,g)=>(q4)=>q4===O4(j0.Ord)(D,g)(q4);return j(J4([Z.top,Z.bottom]),C(0,J.clientHeight))&&j(J4([Z.left,Z.right]),C(0,J.clientWidth))},Q=(V,J,Z,C)=>{const D=document.createElement("span");return D.classList.add("sneak-key"),D.innerText=J,D.style.top=Z+"px",D.style.left=C+"px",D.target=V,D},H=document.createDocumentFragment(),Y='.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]';if(y0=j(document.querySelectorAll(Y),(V)=>Array.from(V),N.filter(X),N.filter($),N.reduce([0,0],([V,J],Z)=>{const{x:C,y:D}=Z.getBoundingClientRect();return H.append(Q(Z,L0[V]+L0[J++],D,C)),J>=L0.length?[++V,0]:[V,J]}),([V,J])=>V+J>0),y0)v.append(H)},C0=()=>{v.style.display="none",F7(),q0=!1},h7=({key:X})=>{if(!q0){if(y0)y0=!1,q0=!0;return}const $=I7();if($.length===0)return void C0();if(v.remove(),$.map((Q)=>{const[H,...Y]=Q.innerText.toLowerCase();if(H!==X)return void Q.remove();if(Y.length===0)Q.target.click(),C0();else Q.innerText=Y.join("")}),document.body.append(v),v.childNodes.length===1)C0()},y0=!1,q0=!1,v=document.createElement("div");v.id="sneak-overlay";document.body.append(v);var G4="Lazy",P4=(X,$)=>()=>$(X()),u7=(X,$)=>()=>X()($()),b7=(X,$)=>$(X());var m0=O,$$=(X)=>($)=>b7($,X);var p6=$$(B),D4={URI:G4,map:P4},o6=H0(D4);var z4={URI:G4,map:P4,ap:u7},n6=c(z4),f6=_(z4);var x7={URI:G4,map:P4,ap:u7,chain:b7};var t6=B0(x7);var s6=m0({}),i6=I(D4),e6=M(x7),a6=d(z4),X8=F(D4);var Q$=m0([]),H$=(X)=>($)=>()=>{const Q=[X(0,h($))()];for(let H=1;H<$.length;H++)Q.push(X(H,$[H])());return Q},V$=(X)=>{const $=H$(X);return(Q)=>J0(Q)?$(Q):Q$};var Y$=(X)=>V$(($,Q)=>X(Q)),$8=Y$(B);var y7=a(Number.isNaN),J$=(X)=>($)=>j(Number.parseInt($,X),D0(y7)),j8=J$(10),J8=G(Number.parseFloat,D0(y7)),Z$=(X)=>X+1,G$=(X)=>X-1;var m7=(X)=>($)=>($%X+X)%X;var P$=(X)=>Math.abs(X)!==Infinity,Z8=j4(P$)((X)=>Math.sign(X)*Number.MAX_SAFE_INTEGER);var D$={...C1,top:Number.MAX_SAFE_INTEGER,bottom:Number.MIN_SAFE_INTEGER},G8={...D$,succ:G(D0(Q4((X)=>X<Number.MAX_SAFE_INTEGER)(Number.isInteger)),z0(Z$)),pred:G(D0(Q4((X)=>X>Number.MIN_SAFE_INTEGER)(Number.isInteger)),z0(G$)),toEnum:k,fromEnum:B,cardinality:m0(Infinity)};var K$=25,l7=()=>document.querySelector(".Root__main-view .os-viewport"),K4=(X)=>{const $=l7(),Q=setInterval(()=>$.scrollTop+=X*K$,10);document.addEventListener("keyup",()=>clearInterval(Q))},L4=(X)=>l7().scroll(0,X),c7=(X)=>Spicetify.Platform.History.push({pathname:X}),C4=(X)=>{const $=Array.from(document.querySelectorAll(".main-yourLibraryX-navLink").values());j(document.querySelector(".main-yourLibraryX-navLinkActive"),(Q)=>$.findIndex((H)=>H===Q),(Q)=>j(Q===-1&&X<=0?X:Q+X,m7($.length)),(Q)=>$[Q].click())};class T{X;$;ctrl=!1;shift=!1;alt=!1;constructor(X,$){this.key=X;this.callback=$}setCtrl=(X)=>(this.ctrl=X,this);setShift=(X)=>(this.shift=X,this);setAlt=(X)=>(this.alt=X,this);register=()=>Spicetify.Keyboard.registerShortcut({key:this.key,ctrl:this.ctrl,shift:this.shift,alt:this.alt},(X)=>void(!q0&&this.callback(X)))}var _7;(function(l0){let X;(function(X0){X0.start=O({before:"start"}),X0.fromUri=(V)=>({before:{uri:V}}),X0.fromUid=(V)=>({before:{uid:V}})})(X=l0.before||(l0.before={}));let $;(function($0){$0.end=O({after:"end"}),$0.fromUri=(V)=>({before:{uri:V}}),$0.fromUid=(V)=>({before:{uid:V}})})($=l0.after||(l0.after={}))})(_7||(_7={}));//! Does location actually point to document.body?
var L$=(X)=>Spicetify.Platform.LibraryAPI.contains(...X),d7=(X,$)=>Spicetify.Platform.LibraryAPI[$?"add":"remove"](...X),r7=async(X)=>{const $=await L$(X);return await j(X,N.reduceWithIndex([[],[]],(Q,H,Y)=>(H[Number($[Q])].push(Y),H)),([Q,H])=>{const Y=[];if(Q.length)Y.push(d7(Q,!0));if(H.length)Y.push(d7(H,!1));return Promise.all(Y)})};(async()=>{if(!document.getElementById("QL9DDk7W4Cvd3SZxYVftCFUYJ34OOOMYJhq3PLAu-LA")){const $=document.createElement("style");$.id="QL9DDk7W4Cvd3SZxYVftCFUYJ34OOOMYJhq3PLAu-LA",$.textContent="#sneak-overlay {\n  z-index: 100000;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n#sneak-overlay > .sneak-key {\n  position: fixed;\n  padding: 3px 6px;\n  background-color: black;\n  border-radius: 3px;\n  border: solid 2px white;\n  color: white;\n  text-transform: lowercase;\n  line-height: normal;\n  font-size: 14px;\n  font-weight: 500;\n}",document.head.appendChild($)}})();var{KEYS:C$}=Spicetify.Keyboard,q$=[new T("s",M7),new T("s",async()=>{await(Spicetify.Platform.UserAPI._product_state||Spicetify.Platform.UserAPI._product_state_service).putValues({pairs:{"app-developer":"2"}}),Spicetify.Platform.UpdateAPI.applyUpdate()}).setShift(!0),new T("tab",()=>C4(1)),new T("tab",()=>C4(-1)).setShift(!0),new T("h",Spicetify.Platform.History.goBack).setShift(!0),new T("l",Spicetify.Platform.History.goForward).setShift(!0),new T("j",()=>K4(1)),new T("k",()=>K4(-1)),new T("g",()=>L4(0)),new T("g",()=>L4(Number.MAX_SAFE_INTEGER)).setShift(!0),new T("m",()=>r7([Spicetify.Player.data.item.uri])),new T("/",(X)=>{X.preventDefault(),c7("/search")})];q$.map((X)=>X.register());Z4.bind(L0,h7,"keypress");Z4.bind(C$.ESCAPE,C0);

//# debugId=9A6342D15DB1FBEC64756e2164756e21
