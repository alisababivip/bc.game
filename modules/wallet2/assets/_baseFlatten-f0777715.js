import { e as m, d as b, g as h, h as y } from "./_setToArray-f7a05dc1.js";
import { d as u } from "./_defineProperty-3c705e3e.js";
import { S as f } from "./memoize-ff109130.js";
function S(n, e, r) {
  switch (r.length) {
    case 0:
      return n.call(e);
    case 1:
      return n.call(e, r[0]);
    case 2:
      return n.call(e, r[0], r[1]);
    case 3:
      return n.call(e, r[0], r[1], r[2]);
  }
  return n.apply(e, r);
}
var d = 800,
  g = 16,
  v = Date.now;
function p(n) {
  var e = 0,
    r = 0;
  return function () {
    var a = v(),
      t = g - (a - r);
    if (((r = a), t > 0)) {
      if (++e >= d) return arguments[0];
    } else e = 0;
    return n.apply(void 0, arguments);
  };
}
function w(n) {
  return function () {
    return n;
  };
}
var T = u
  ? function (n, e) {
      return u(n, "toString", {
        configurable: !0,
        enumerable: !1,
        value: w(e),
        writable: !0,
      });
    }
  : m;
const x = T;
var O = p(x);
const C = O;
var s = Math.max;
function N(n, e, r) {
  return (
    (e = s(e === void 0 ? n.length - 1 : e, 0)),
    function () {
      for (
        var a = arguments, t = -1, o = s(a.length - e, 0), l = Array(o);
        ++t < o;

      )
        l[t] = a[e + t];
      t = -1;
      for (var i = Array(e + 1); ++t < e; ) i[t] = a[t];
      return (i[e] = r(l)), S(n, this, i);
    }
  );
}
function M(n, e) {
  return C(N(n, e, m), n + "");
}
var c = f ? f.isConcatSpreadable : void 0;
function P(n) {
  return b(n) || h(n) || !!(c && n && n[c]);
}
function $(n, e, r, a, t) {
  var o = -1,
    l = n.length;
  for (r || (r = P), t || (t = []); ++o < l; ) {
    var i = n[o];
    e > 0 && r(i)
      ? e > 1
        ? $(i, e - 1, r, a, t)
        : y(t, i)
      : a || (t[t.length] = i);
  }
  return t;
}
export { $ as a, M as b };
