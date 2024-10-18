import {
  S as M,
  k as y,
  j as C,
  l as R,
  a as _,
  m as w,
} from "./_baseFor-3fee30d6.js";
import { b as P } from "./_baseIsEqual-55697771.js";
import { i as L } from "./_MapCache-1fb5cc44.js";
import { i as o } from "./isArray-79a0be9c.js";
import { i as A } from "./isSymbol-269a4c68.js";
import { m as S } from "./memoize-4ea0c857.js";
import { t as D } from "./toString-968993ce.js";
var $ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  x = /^\w*$/;
function h(n, r) {
  if (o(n)) return !1;
  var i = typeof n;
  return i == "number" || i == "symbol" || i == "boolean" || n == null || A(n)
    ? !0
    : x.test(n) || !$.test(n) || (r != null && n in Object(r));
}
var F = 500;
function G(n) {
  var r = S(n, function (t) {
      return i.size === F && i.clear(), t;
    }),
    i = r.cache;
  return r;
}
var N =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  T = /\\(\\)?/g,
  K = G(function (n) {
    var r = [];
    return (
      n.charCodeAt(0) === 46 && r.push(""),
      n.replace(N, function (i, t, e, f) {
        r.push(e ? f.replace(T, "$1") : t || i);
      }),
      r
    );
  });
const U = K;
function I(n, r) {
  return o(n) ? n : h(n, r) ? [n] : U(D(n));
}
var Z = 1 / 0;
function a(n) {
  if (typeof n == "string" || A(n)) return n;
  var r = n + "";
  return r == "0" && 1 / n == -Z ? "-0" : r;
}
function E(n, r) {
  r = I(r, n);
  for (var i = 0, t = r.length; n != null && i < t; ) n = n[a(r[i++])];
  return i && i == t ? n : void 0;
}
function q(n, r, i) {
  var t = n == null ? void 0 : E(n, r);
  return t === void 0 ? i : t;
}
var v = 1,
  z = 2;
function H(n, r, i, t) {
  var e = i.length,
    f = e,
    s = !t;
  if (n == null) return !f;
  for (n = Object(n); e--; ) {
    var u = i[e];
    if (s && u[2] ? u[1] !== n[u[0]] : !(u[0] in n)) return !1;
  }
  for (; ++e < f; ) {
    u = i[e];
    var l = u[0],
      m = n[l],
      p = u[1];
    if (s && u[2]) {
      if (m === void 0 && !(l in n)) return !1;
    } else {
      var g = new M();
      if (t) var d = t(m, p, l, n, r, g);
      if (!(d === void 0 ? P(p, m, v | z, t, g) : d)) return !1;
    }
  }
  return !0;
}
function c(n) {
  return n === n && !L(n);
}
function X(n) {
  for (var r = y(n), i = r.length; i--; ) {
    var t = r[i],
      e = n[t];
    r[i] = [t, e, c(e)];
  }
  return r;
}
function O(n, r) {
  return function (i) {
    return i == null ? !1 : i[n] === r && (r !== void 0 || n in Object(i));
  };
}
function Y(n) {
  var r = X(n);
  return r.length == 1 && r[0][2]
    ? O(r[0][0], r[0][1])
    : function (i) {
        return i === n || H(i, n, r);
      };
}
function B(n, r) {
  return n != null && r in Object(n);
}
function J(n, r, i) {
  r = I(r, n);
  for (var t = -1, e = r.length, f = !1; ++t < e; ) {
    var s = a(r[t]);
    if (!(f = n != null && i(n, s))) break;
    n = n[s];
  }
  return f || ++t != e
    ? f
    : ((e = n == null ? 0 : n.length),
      !!e && C(e) && R(s, e) && (o(n) || _(n)));
}
function Q(n, r) {
  return n != null && J(n, r, B);
}
var W = 1,
  k = 2;
function b(n, r) {
  return h(n) && c(r)
    ? O(a(n), r)
    : function (i) {
        var t = q(i, n);
        return t === void 0 && t === r ? Q(i, n) : P(r, t, W | k);
      };
}
function V(n) {
  return function (r) {
    return r == null ? void 0 : r[n];
  };
}
function j(n) {
  return function (r) {
    return E(r, n);
  };
}
function nn(n) {
  return h(n) ? V(a(n)) : j(n);
}
function an(n) {
  return typeof n == "function"
    ? n
    : n == null
    ? w
    : typeof n == "object"
    ? o(n)
      ? b(n[0], n[1])
      : Y(n)
    : nn(n);
}
export { an as b };
