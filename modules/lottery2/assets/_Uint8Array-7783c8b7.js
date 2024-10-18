import {
  g as l,
  i as D,
  L as _,
  a as b,
  M as K,
  t as c,
} from "./_MapCache-9c96b8d5.js";
import { r as u, a as $, b as d, f as R } from "./isObject-909534d5.js";
var W = Array.isArray;
const k = W;
var N = l(u, "WeakMap");
const j = N;
var q = 9007199254740991,
  X = /^(?:0|[1-9]\d*)$/;
function H(t, e) {
  var r = typeof t;
  return (
    (e = e == null ? q : e),
    !!e &&
      (r == "number" || (r != "symbol" && X.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
  );
}
var Y = 9007199254740991;
function z(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Y;
}
function Z(t) {
  return t != null && z(t.length) && !D(t);
}
var J = Object.prototype;
function Q(t) {
  var e = t && t.constructor,
    r = (typeof e == "function" && e.prototype) || J;
  return t === r;
}
function tt(t, e) {
  for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
  return n;
}
var rt = "[object Arguments]";
function w(t) {
  return $(t) && d(t) == rt;
}
var F = Object.prototype,
  et = F.hasOwnProperty,
  at = F.propertyIsEnumerable,
  nt = w(
    (function () {
      return arguments;
    })()
  )
    ? w
    : function (t) {
        return $(t) && et.call(t, "callee") && !at.call(t, "callee");
      };
const ot = nt;
function st() {
  return !1;
}
var G = typeof exports == "object" && exports && !exports.nodeType && exports,
  S = G && typeof module == "object" && module && !module.nodeType && module,
  it = S && S.exports === G,
  x = it ? u.Buffer : void 0,
  ct = x ? x.isBuffer : void 0,
  ut = ct || st;
const pt = ut;
var ft = "[object Arguments]",
  gt = "[object Array]",
  yt = "[object Boolean]",
  bt = "[object Date]",
  lt = "[object Error]",
  dt = "[object Function]",
  Tt = "[object Map]",
  mt = "[object Number]",
  jt = "[object Object]",
  At = "[object RegExp]",
  ht = "[object Set]",
  vt = "[object String]",
  _t = "[object WeakMap]",
  $t = "[object ArrayBuffer]",
  wt = "[object DataView]",
  St = "[object Float32Array]",
  xt = "[object Float64Array]",
  Ot = "[object Int8Array]",
  Pt = "[object Int16Array]",
  Et = "[object Int32Array]",
  It = "[object Uint8Array]",
  Mt = "[object Uint8ClampedArray]",
  Ct = "[object Uint16Array]",
  Ut = "[object Uint32Array]",
  a = {};
a[St] = a[xt] = a[Ot] = a[Pt] = a[Et] = a[It] = a[Mt] = a[Ct] = a[Ut] = !0;
a[ft] =
  a[gt] =
  a[$t] =
  a[yt] =
  a[wt] =
  a[bt] =
  a[lt] =
  a[dt] =
  a[Tt] =
  a[mt] =
  a[jt] =
  a[At] =
  a[ht] =
  a[vt] =
  a[_t] =
    !1;
function Bt(t) {
  return $(t) && z(t.length) && !!a[d(t)];
}
function kt(t) {
  return function (e) {
    return t(e);
  };
}
var L = typeof exports == "object" && exports && !exports.nodeType && exports,
  g = L && typeof module == "object" && module && !module.nodeType && module,
  zt = g && g.exports === L,
  m = zt && R.process,
  Ft = (function () {
    try {
      var t = g && g.require && g.require("util").types;
      return t || (m && m.binding && m.binding("util"));
    } catch (e) {}
  })();
const O = Ft;
var P = O && O.isTypedArray,
  Gt = P ? kt(P) : Bt;
const Lt = Gt;
var Vt = Object.prototype,
  Dt = Vt.hasOwnProperty;
function Kt(t, e) {
  var r = k(t),
    n = !r && ot(t),
    s = !r && !n && pt(t),
    p = !r && !n && !s && Lt(t),
    f = r || n || s || p,
    T = f ? tt(t.length, String) : [],
    V = T.length;
  for (var o in t)
    (e || Dt.call(t, o)) &&
      !(
        f &&
        (o == "length" ||
          (s && (o == "offset" || o == "parent")) ||
          (p && (o == "buffer" || o == "byteLength" || o == "byteOffset")) ||
          H(o, V))
      ) &&
      T.push(o);
  return T;
}
function Rt(t, e) {
  return function (r) {
    return t(e(r));
  };
}
var Wt = Rt(Object.keys, Object);
const Nt = Wt;
var qt = Object.prototype,
  Xt = qt.hasOwnProperty;
function Ht(t) {
  if (!Q(t)) return Nt(t);
  var e = [];
  for (var r in Object(t)) Xt.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function Yt(t) {
  return Z(t) ? Kt(t) : Ht(t);
}
function Zt(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; ) t[s + r] = e[r];
  return t;
}
function Jt() {
  (this.__data__ = new _()), (this.size = 0);
}
function Qt(t) {
  var e = this.__data__,
    r = e.delete(t);
  return (this.size = e.size), r;
}
function tr(t) {
  return this.__data__.get(t);
}
function rr(t) {
  return this.__data__.has(t);
}
var er = 200;
function ar(t, e) {
  var r = this.__data__;
  if (r instanceof _) {
    var n = r.__data__;
    if (!b || n.length < er - 1)
      return n.push([t, e]), (this.size = ++r.size), this;
    r = this.__data__ = new K(n);
  }
  return r.set(t, e), (this.size = r.size), this;
}
function y(t) {
  var e = (this.__data__ = new _(t));
  this.size = e.size;
}
y.prototype.clear = Jt;
y.prototype.delete = Qt;
y.prototype.get = tr;
y.prototype.has = rr;
y.prototype.set = ar;
function nr(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, p = []; ++r < n; ) {
    var f = t[r];
    e(f, r, t) && (p[s++] = f);
  }
  return p;
}
function or() {
  return [];
}
var sr = Object.prototype,
  ir = sr.propertyIsEnumerable,
  E = Object.getOwnPropertySymbols,
  cr = E
    ? function (t) {
        return t == null
          ? []
          : ((t = Object(t)),
            nr(E(t), function (e) {
              return ir.call(t, e);
            }));
      }
    : or;
const ur = cr;
function pr(t, e, r) {
  var n = e(t);
  return k(t) ? n : Zt(n, r(t));
}
function _r(t) {
  return pr(t, Yt, ur);
}
var fr = l(u, "DataView");
const A = fr;
var gr = l(u, "Promise");
const h = gr;
var yr = l(u, "Set");
const v = yr;
var I = "[object Map]",
  br = "[object Object]",
  M = "[object Promise]",
  C = "[object Set]",
  U = "[object WeakMap]",
  B = "[object DataView]",
  lr = c(A),
  dr = c(b),
  Tr = c(h),
  mr = c(v),
  jr = c(j),
  i = d;
((A && i(new A(new ArrayBuffer(1))) != B) ||
  (b && i(new b()) != I) ||
  (h && i(h.resolve()) != M) ||
  (v && i(new v()) != C) ||
  (j && i(new j()) != U)) &&
  (i = function (t) {
    var e = d(t),
      r = e == br ? t.constructor : void 0,
      n = r ? c(r) : "";
    if (n)
      switch (n) {
        case lr:
          return B;
        case dr:
          return I;
        case Tr:
          return M;
        case mr:
          return C;
        case jr:
          return U;
      }
    return e;
  });
const $r = i;
var Ar = u.Uint8Array;
const wr = Ar;
export {
  y as S,
  wr as U,
  $r as a,
  pt as b,
  Lt as c,
  z as d,
  H as e,
  ot as f,
  _r as g,
  Z as h,
  k as i,
  kt as j,
  Yt as k,
  Q as l,
  Kt as m,
  ur as n,
  Rt as o,
  Zt as p,
  pr as q,
  O as r,
  or as s,
};
