import { i as x, r as M } from "./isObject-d5c4896e.js";
import { a as N } from "./isSymbol-0edd6b24.js";
var O = /\s/,
  W = /^\s+/;
function j(t) {
  return (
    t &&
    t
      .slice(
        0,
        (function (n) {
          for (var e = n.length; e-- && O.test(n.charAt(e)); );
          return e;
        })(t) + 1
      )
      .replace(W, "")
  );
}
var $ = NaN,
  A = /^[-+]0x[0-9a-f]+$/i,
  D = /^0b[01]+$/i,
  I = /^0o[0-7]+$/i,
  k = parseInt;
function E(t) {
  if (typeof t == "number") return t;
  if (N(t)) return $;
  if (x(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = x(n) ? n + "" : n;
  }
  if (typeof t != "string") return t === 0 ? t : +t;
  t = j(t);
  var e = D.test(t);
  return e || I.test(t) ? k(t.slice(2), e ? 2 : 8) : A.test(t) ? $ : +t;
}
const g = function () {
  return M.Date.now();
};
var q = Math.max,
  z = Math.min;
function F(t, n, e) {
  var f,
    c,
    m,
    v,
    r,
    u,
    s = 0,
    y = !1,
    l = !1,
    d = !0;
  if (typeof t != "function") throw new TypeError("Expected a function");
  function h(i) {
    var o = f,
      a = c;
    return (f = c = void 0), (s = i), (v = t.apply(a, o));
  }
  function b(i) {
    var o = i - u;
    return u === void 0 || o >= n || o < 0 || (l && i - s >= m);
  }
  function p() {
    var i = g();
    if (b(i)) return w(i);
    r = setTimeout(
      p,
      (function (o) {
        var a = n - (o - u);
        return l ? z(a, m - (o - s)) : a;
      })(i)
    );
  }
  function w(i) {
    return (r = void 0), d && f ? h(i) : ((f = c = void 0), v);
  }
  function T() {
    var i = g(),
      o = b(i);
    if (((f = arguments), (c = this), (u = i), o)) {
      if (r === void 0)
        return (function (a) {
          return (s = a), (r = setTimeout(p, n)), y ? h(a) : v;
        })(u);
      if (l) return clearTimeout(r), (r = setTimeout(p, n)), h(u);
    }
    return r === void 0 && (r = setTimeout(p, n)), v;
  }
  return (
    (n = E(n) || 0),
    x(e) &&
      ((y = !!e.leading),
      (m = (l = "maxWait" in e) ? q(E(e.maxWait) || 0, n) : m),
      (d = "trailing" in e ? !!e.trailing : d)),
    (T.cancel = function () {
      r !== void 0 && clearTimeout(r), (s = 0), (f = u = c = r = void 0);
    }),
    (T.flush = function () {
      return r === void 0 ? v : w(g());
    }),
    T
  );
}
export { F as d, E as t };
