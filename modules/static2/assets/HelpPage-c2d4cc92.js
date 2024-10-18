var U = (e, t, n) =>
  new Promise((r, i) => {
    var s = (o) => {
        try {
          l(n.next(o));
        } catch (c) {
          i(c);
        }
      },
      a = (o) => {
        try {
          l(n.throw(o));
        } catch (c) {
          i(c);
        }
      },
      l = (o) => (o.done ? r(o.value) : Promise.resolve(o.value).then(s, a));
    l((n = n.apply(e, t)).next());
  });
import {
  d as vt,
  i as u,
  c as y,
  t as w,
  e as Ne,
  a as xe,
  m as J,
  f as Wt,
  u as zt,
  s as $t,
} from "./web-5c332740.js";
import {
  g as Zt,
  i as le,
  j as Xt,
  w as ae,
  k as Se,
  l as wt,
  u as Be,
  e as C,
  a as Tt,
  m as H,
  h as Ce,
  n as Yt,
  S as Jt,
  C as Qt,
  p as We,
  P as en,
  B as tn,
  d as Y,
  t as q,
  _ as L,
  b as ce,
} from "./manifest-6dedd536.js";
import { h as re, A as oe } from "./files-02c31782.js";
import {
  d as F,
  S as V,
  a as W,
  c as ue,
  e as nn,
} from "./solid-js-9508438e.js";
import { I as rn } from "./LocalIcon-31e78911.js";
import { t as O, T as Ee } from "./i18n-2889c705.js";
import {
  b as ee,
  S as fe,
  i as de,
  g as ge,
  r as Z,
  a as sn,
  e as At,
  f as an,
  m as on,
  L as Re,
  M as me,
  c as xt,
  t as X,
  d as ln,
} from "./index-f52ccf1b.js";
import { a as St, b as cn } from "./router-d36109eb.js";
import { a as ze, b as ve } from "./request-a00594b6.js";
import un from "./OneDollarCheck-6dd4da0a.js";
var fn = w('<span class="bg-layer5 p-1.5 rounded-md center w-8 h-8">'),
  dn = w(
    '<div class="flex justify-between items-center text-primary text-sm font-semibold py-4">'
  ),
  mn = w("<div>");
const pn = function (t) {
  const [n, r] = F(t.open);
  console.log(t);
  const i = ["self_exclusion", "announcement"];
  return (() => {
    var s = mn();
    return (
      u(
        s,
        y(V, {
          get when() {
            return (
              (t == null ? void 0 : t.htmlName) !== "self_exclusion_dialog"
            );
          },
          get children() {
            var a = dn();
            return (
              (a.$$click = () => {
                r(!n()), t.cb(!n());
              }),
              u(a, () => t.labelNode, null),
              u(
                a,
                y(V, {
                  get when() {
                    return !i.includes(t.htmlName);
                  },
                  get children() {
                    var l = fn();
                    return (
                      u(
                        l,
                        y(Zt, {
                          get class() {
                            return le(
                              "w-5 h-5 fill-current",
                              n() ? "-rotate-90" : "rotate-180"
                            );
                          },
                          name: "Arrow",
                        })
                      ),
                      l
                    );
                  },
                }),
                null
              ),
              a
            );
          },
        }),
        null
      ),
      u(
        s,
        y(Xt, {
          get when() {
            return n();
          },
          get children() {
            return t.children;
          },
        }),
        null
      ),
      s
    );
  })();
};
vt(["click"]);
var gn = w(
    '<table class="w-full text-center font-semibold text-sm text-secondary"><thead><tr class="text-quarterary font-semibold text-sm"><th><span class="p-2 px-2 flex"></span></th><th><span class="p-2 flex justify-end"></span></th></tr></thead><tbody>'
  ),
  _n = w("<tr><td class=p-0><div></div></td><td class=p-0><div>");
const hn = function () {
  const t = (n) => {
    var i;
    const r =
      ((i = Se.getCurrency(n.currencyName)) == null
        ? void 0
        : i.precisionUnit) || 0;
    return new wt(10).pow(-r).toFixed(r);
  };
  return (() => {
    var n = gn(),
      r = n.firstChild,
      i = r.firstChild,
      s = i.firstChild,
      a = s.firstChild,
      l = s.nextSibling,
      o = l.firstChild,
      c = r.nextSibling;
    return (
      u(a, () => O("Currency")),
      u(o, () => O("Coin Accuracy Limit")),
      u(c, () =>
        Object.keys(ae).map((T, f) =>
          (() => {
            var h = _n(),
              g = h.firstChild,
              v = g.firstChild,
              x = g.nextSibling,
              P = x.firstChild;
            return (
              u(v, () => Se.getAlias(ae[T].currencyName)),
              u(P, () => t(ae[T]).toString()),
              Ne(
                (d) => {
                  var _ = le(
                      "rounded-l-xl text-left py-4 pl-2",
                      f % 2 === 0 && "bg-layer5"
                    ),
                    p = le(
                      "rounded-r-xl text-right py-4 pr-2",
                      f % 2 === 0 && "bg-layer5"
                    );
                  return (
                    _ !== d.e && xe(v, (d.e = _)),
                    p !== d.t && xe(P, (d.t = p)),
                    d
                  );
                },
                { e: void 0, t: void 0 }
              ),
              h
            );
          })()
        )
      ),
      n
    );
  })();
};
function z(e) {
  return e != null && typeof e == "object";
}
var yn = "[object Symbol]";
function _e(e) {
  return typeof e == "symbol" || (z(e) && ee(e) == yn);
}
function bn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var vn = Array.isArray;
const k = vn;
var $n = 1 / 0,
  Ze = fe ? fe.prototype : void 0,
  Xe = Ze ? Ze.toString : void 0;
function Ct(e) {
  if (typeof e == "string") return e;
  if (k(e)) return bn(e, Ct) + "";
  if (_e(e)) return Xe ? Xe.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -$n ? "-0" : t;
}
var wn = /\s/;
function Tn(e) {
  for (var t = e.length; t-- && wn.test(e.charAt(t)); );
  return t;
}
var An = /^\s+/;
function xn(e) {
  return e && e.slice(0, Tn(e) + 1).replace(An, "");
}
var Ye = 0 / 0,
  Sn = /^[-+]0x[0-9a-f]+$/i,
  Cn = /^0b[01]+$/i,
  En = /^0o[0-7]+$/i,
  Pn = parseInt;
function Ln(e) {
  if (typeof e == "number") return e;
  if (_e(e)) return Ye;
  if (de(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = de(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = xn(e);
  var n = Cn.test(e);
  return n || En.test(e) ? Pn(e.slice(2), n ? 2 : 8) : Sn.test(e) ? Ye : +e;
}
var Je = 1 / 0,
  On = 17976931348623157e292;
function In(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = Ln(e)), e === Je || e === -Je)) {
    var t = e < 0 ? -1 : 1;
    return t * On;
  }
  return e === e ? e : 0;
}
function Et(e) {
  var t = In(e),
    n = t % 1;
  return t === t ? (n ? t - n : t) : 0;
}
function Mn(e) {
  return e;
}
var Nn = ge(Z, "WeakMap");
const Pe = Nn;
var Bn = 9007199254740991,
  Rn = /^(?:0|[1-9]\d*)$/;
function He(e, t) {
  var n = typeof e;
  return (
    (t = t == null ? Bn : t),
    !!t &&
      (n == "number" || (n != "symbol" && Rn.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var Hn = 9007199254740991;
function De(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Hn;
}
function Pt(e) {
  return e != null && De(e.length) && !sn(e);
}
function Dn(e, t, n) {
  if (!de(n)) return !1;
  var r = typeof t;
  return (r == "number" ? Pt(n) && He(t, n.length) : r == "string" && t in n)
    ? At(n[t], e)
    : !1;
}
var kn = Object.prototype;
function Gn(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || kn;
  return e === n;
}
function Un(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var Fn = "[object Arguments]";
function Qe(e) {
  return z(e) && ee(e) == Fn;
}
var Lt = Object.prototype,
  qn = Lt.hasOwnProperty,
  jn = Lt.propertyIsEnumerable,
  Kn = Qe(
    (function () {
      return arguments;
    })()
  )
    ? Qe
    : function (e) {
        return z(e) && qn.call(e, "callee") && !jn.call(e, "callee");
      };
const Ot = Kn;
function Vn() {
  return !1;
}
var It = typeof exports == "object" && exports && !exports.nodeType && exports,
  et = It && typeof module == "object" && module && !module.nodeType && module,
  Wn = et && et.exports === It,
  tt = Wn ? Z.Buffer : void 0,
  zn = tt ? tt.isBuffer : void 0,
  Zn = zn || Vn;
const Le = Zn;
var Xn = "[object Arguments]",
  Yn = "[object Array]",
  Jn = "[object Boolean]",
  Qn = "[object Date]",
  er = "[object Error]",
  tr = "[object Function]",
  nr = "[object Map]",
  rr = "[object Number]",
  ir = "[object Object]",
  sr = "[object RegExp]",
  ar = "[object Set]",
  or = "[object String]",
  lr = "[object WeakMap]",
  cr = "[object ArrayBuffer]",
  ur = "[object DataView]",
  fr = "[object Float32Array]",
  dr = "[object Float64Array]",
  mr = "[object Int8Array]",
  pr = "[object Int16Array]",
  gr = "[object Int32Array]",
  _r = "[object Uint8Array]",
  hr = "[object Uint8ClampedArray]",
  yr = "[object Uint16Array]",
  br = "[object Uint32Array]",
  b = {};
b[fr] = b[dr] = b[mr] = b[pr] = b[gr] = b[_r] = b[hr] = b[yr] = b[br] = !0;
b[Xn] =
  b[Yn] =
  b[cr] =
  b[Jn] =
  b[ur] =
  b[Qn] =
  b[er] =
  b[tr] =
  b[nr] =
  b[rr] =
  b[ir] =
  b[sr] =
  b[ar] =
  b[or] =
  b[lr] =
    !1;
function vr(e) {
  return z(e) && De(e.length) && !!b[ee(e)];
}
function $r(e) {
  return function (t) {
    return e(t);
  };
}
var Mt = typeof exports == "object" && exports && !exports.nodeType && exports,
  Q = Mt && typeof module == "object" && module && !module.nodeType && module,
  wr = Q && Q.exports === Mt,
  $e = wr && an.process,
  Tr = (function () {
    try {
      var e = Q && Q.require && Q.require("util").types;
      return e || ($e && $e.binding && $e.binding("util"));
    } catch (t) {}
  })();
const nt = Tr;
var rt = nt && nt.isTypedArray,
  Ar = rt ? $r(rt) : vr;
const Nt = Ar;
var xr = Object.prototype,
  Sr = xr.hasOwnProperty;
function Cr(e, t) {
  var n = k(e),
    r = !n && Ot(e),
    i = !n && !r && Le(e),
    s = !n && !r && !i && Nt(e),
    a = n || r || i || s,
    l = a ? Un(e.length, String) : [],
    o = l.length;
  for (var c in e)
    (t || Sr.call(e, c)) &&
      !(
        a &&
        (c == "length" ||
          (i && (c == "offset" || c == "parent")) ||
          (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
          He(c, o))
      ) &&
      l.push(c);
  return l;
}
function Er(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var Pr = Er(Object.keys, Object);
const Lr = Pr;
var Or = Object.prototype,
  Ir = Or.hasOwnProperty;
function Mr(e) {
  if (!Gn(e)) return Lr(e);
  var t = [];
  for (var n in Object(e)) Ir.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Bt(e) {
  return Pt(e) ? Cr(e) : Mr(e);
}
var Nr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Br = /^\w*$/;
function ke(e, t) {
  if (k(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || _e(e)
    ? !0
    : Br.test(e) || !Nr.test(e) || (t != null && e in Object(t));
}
var Rr = 500;
function Hr(e) {
  var t = on(e, function (r) {
      return n.size === Rr && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var Dr =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  kr = /\\(\\)?/g,
  Gr = Hr(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(Dr, function (n, r, i, s) {
        t.push(i ? s.replace(kr, "$1") : r || n);
      }),
      t
    );
  });
const Ur = Gr;
function Fr(e) {
  return e == null ? "" : Ct(e);
}
function Rt(e, t) {
  return k(e) ? e : ke(e, t) ? [e] : Ur(Fr(e));
}
var qr = 1 / 0;
function he(e) {
  if (typeof e == "string" || _e(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -qr ? "-0" : t;
}
function Ht(e, t) {
  t = Rt(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[he(t[n++])];
  return n && n == r ? e : void 0;
}
function jr(e, t, n) {
  var r = e == null ? void 0 : Ht(e, t);
  return r === void 0 ? n : r;
}
function Kr(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
  return e;
}
var Vr = "Expected a function";
function Wr(e, t) {
  var n;
  if (typeof t != "function") throw new TypeError(Vr);
  return (
    (e = Et(e)),
    function () {
      return (
        --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
      );
    }
  );
}
function zr(e, t, n) {
  var r = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t),
    (n = n > i ? i : n),
    n < 0 && (n += i),
    (i = t > n ? 0 : (n - t) >>> 0),
    (t >>>= 0);
  for (var s = Array(i); ++r < i; ) s[r] = e[r + t];
  return s;
}
var Zr = Math.ceil,
  Xr = Math.max;
function Yr(e, t, n) {
  (n ? Dn(e, t, n) : t === void 0) ? (t = 1) : (t = Xr(Et(t), 0));
  var r = e == null ? 0 : e.length;
  if (!r || t < 1) return [];
  for (var i = 0, s = 0, a = Array(Zr(r / t)); i < r; )
    a[s++] = zr(e, i, (i += t));
  return a;
}
function Jr() {
  (this.__data__ = new Re()), (this.size = 0);
}
function Qr(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
function ei(e) {
  return this.__data__.get(e);
}
function ti(e) {
  return this.__data__.has(e);
}
var ni = 200;
function ri(e, t) {
  var n = this.__data__;
  if (n instanceof Re) {
    var r = n.__data__;
    if (!me || r.length < ni - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new xt(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
function D(e) {
  var t = (this.__data__ = new Re(e));
  this.size = t.size;
}
D.prototype.clear = Jr;
D.prototype.delete = Qr;
D.prototype.get = ei;
D.prototype.has = ti;
D.prototype.set = ri;
function ii(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (s[i++] = a);
  }
  return s;
}
function si() {
  return [];
}
var ai = Object.prototype,
  oi = ai.propertyIsEnumerable,
  it = Object.getOwnPropertySymbols,
  li = it
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            ii(it(e), function (t) {
              return oi.call(e, t);
            }));
      }
    : si;
const ci = li;
function ui(e, t, n) {
  var r = t(e);
  return k(e) ? r : Kr(r, n(e));
}
function st(e) {
  return ui(e, Bt, ci);
}
var fi = ge(Z, "DataView");
const Oe = fi;
var di = ge(Z, "Promise");
const Ie = di;
var mi = ge(Z, "Set");
const Me = mi;
var at = "[object Map]",
  pi = "[object Object]",
  ot = "[object Promise]",
  lt = "[object Set]",
  ct = "[object WeakMap]",
  ut = "[object DataView]",
  gi = X(Oe),
  _i = X(me),
  hi = X(Ie),
  yi = X(Me),
  bi = X(Pe),
  j = ee;
((Oe && j(new Oe(new ArrayBuffer(1))) != ut) ||
  (me && j(new me()) != at) ||
  (Ie && j(Ie.resolve()) != ot) ||
  (Me && j(new Me()) != lt) ||
  (Pe && j(new Pe()) != ct)) &&
  (j = function (e) {
    var t = ee(e),
      n = t == pi ? e.constructor : void 0,
      r = n ? X(n) : "";
    if (r)
      switch (r) {
        case gi:
          return ut;
        case _i:
          return at;
        case hi:
          return ot;
        case yi:
          return lt;
        case bi:
          return ct;
      }
    return t;
  });
const ft = j;
var vi = Z.Uint8Array;
const dt = vi;
var $i = "__lodash_hash_undefined__";
function wi(e) {
  return this.__data__.set(e, $i), this;
}
function Ti(e) {
  return this.__data__.has(e);
}
function pe(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new xt(); ++t < n; ) this.add(e[t]);
}
pe.prototype.add = pe.prototype.push = wi;
pe.prototype.has = Ti;
function Ai(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
function xi(e, t) {
  return e.has(t);
}
var Si = 1,
  Ci = 2;
function Dt(e, t, n, r, i, s) {
  var a = n & Si,
    l = e.length,
    o = t.length;
  if (l != o && !(a && o > l)) return !1;
  var c = s.get(e),
    T = s.get(t);
  if (c && T) return c == t && T == e;
  var f = -1,
    h = !0,
    g = n & Ci ? new pe() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < l; ) {
    var v = e[f],
      x = t[f];
    if (r) var P = a ? r(x, v, f, t, e, s) : r(v, x, f, e, t, s);
    if (P !== void 0) {
      if (P) continue;
      h = !1;
      break;
    }
    if (g) {
      if (
        !Ai(t, function (d, _) {
          if (!xi(g, _) && (v === d || i(v, d, n, r, s))) return g.push(_);
        })
      ) {
        h = !1;
        break;
      }
    } else if (!(v === x || i(v, x, n, r, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
function Ei(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, i) {
      n[++t] = [i, r];
    }),
    n
  );
}
function Pi(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var Li = 1,
  Oi = 2,
  Ii = "[object Boolean]",
  Mi = "[object Date]",
  Ni = "[object Error]",
  Bi = "[object Map]",
  Ri = "[object Number]",
  Hi = "[object RegExp]",
  Di = "[object Set]",
  ki = "[object String]",
  Gi = "[object Symbol]",
  Ui = "[object ArrayBuffer]",
  Fi = "[object DataView]",
  mt = fe ? fe.prototype : void 0,
  we = mt ? mt.valueOf : void 0;
function qi(e, t, n, r, i, s, a) {
  switch (n) {
    case Fi:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case Ui:
      return !(e.byteLength != t.byteLength || !s(new dt(e), new dt(t)));
    case Ii:
    case Mi:
    case Ri:
      return At(+e, +t);
    case Ni:
      return e.name == t.name && e.message == t.message;
    case Hi:
    case ki:
      return e == t + "";
    case Bi:
      var l = Ei;
    case Di:
      var o = r & Li;
      if ((l || (l = Pi), e.size != t.size && !o)) return !1;
      var c = a.get(e);
      if (c) return c == t;
      (r |= Oi), a.set(e, t);
      var T = Dt(l(e), l(t), r, i, s, a);
      return a.delete(e), T;
    case Gi:
      if (we) return we.call(e) == we.call(t);
  }
  return !1;
}
var ji = 1,
  Ki = Object.prototype,
  Vi = Ki.hasOwnProperty;
function Wi(e, t, n, r, i, s) {
  var a = n & ji,
    l = st(e),
    o = l.length,
    c = st(t),
    T = c.length;
  if (o != T && !a) return !1;
  for (var f = o; f--; ) {
    var h = l[f];
    if (!(a ? h in t : Vi.call(t, h))) return !1;
  }
  var g = s.get(e),
    v = s.get(t);
  if (g && v) return g == t && v == e;
  var x = !0;
  s.set(e, t), s.set(t, e);
  for (var P = a; ++f < o; ) {
    h = l[f];
    var d = e[h],
      _ = t[h];
    if (r) var p = a ? r(_, d, h, t, e, s) : r(d, _, h, e, t, s);
    if (!(p === void 0 ? d === _ || i(d, _, n, r, s) : p)) {
      x = !1;
      break;
    }
    P || (P = h == "constructor");
  }
  if (x && !P) {
    var A = e.constructor,
      $ = t.constructor;
    A != $ &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof A == "function" &&
        A instanceof A &&
        typeof $ == "function" &&
        $ instanceof $
      ) &&
      (x = !1);
  }
  return s.delete(e), s.delete(t), x;
}
var zi = 1,
  pt = "[object Arguments]",
  gt = "[object Array]",
  ie = "[object Object]",
  Zi = Object.prototype,
  _t = Zi.hasOwnProperty;
function Xi(e, t, n, r, i, s) {
  var a = k(e),
    l = k(t),
    o = a ? gt : ft(e),
    c = l ? gt : ft(t);
  (o = o == pt ? ie : o), (c = c == pt ? ie : c);
  var T = o == ie,
    f = c == ie,
    h = o == c;
  if (h && Le(e)) {
    if (!Le(t)) return !1;
    (a = !0), (T = !1);
  }
  if (h && !T)
    return (
      s || (s = new D()),
      a || Nt(e) ? Dt(e, t, n, r, i, s) : qi(e, t, o, n, r, i, s)
    );
  if (!(n & zi)) {
    var g = T && _t.call(e, "__wrapped__"),
      v = f && _t.call(t, "__wrapped__");
    if (g || v) {
      var x = g ? e.value() : e,
        P = v ? t.value() : t;
      return s || (s = new D()), i(x, P, n, r, s);
    }
  }
  return h ? (s || (s = new D()), Wi(e, t, n, r, i, s)) : !1;
}
function Ge(e, t, n, r, i) {
  return e === t
    ? !0
    : e == null || t == null || (!z(e) && !z(t))
    ? e !== e && t !== t
    : Xi(e, t, n, r, Ge, i);
}
var Yi = 1,
  Ji = 2;
function Qi(e, t, n, r) {
  var i = n.length,
    s = i,
    a = !r;
  if (e == null) return !s;
  for (e = Object(e); i--; ) {
    var l = n[i];
    if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
  }
  for (; ++i < s; ) {
    l = n[i];
    var o = l[0],
      c = e[o],
      T = l[1];
    if (a && l[2]) {
      if (c === void 0 && !(o in e)) return !1;
    } else {
      var f = new D();
      if (r) var h = r(c, T, o, e, t, f);
      if (!(h === void 0 ? Ge(T, c, Yi | Ji, r, f) : h)) return !1;
    }
  }
  return !0;
}
function kt(e) {
  return e === e && !de(e);
}
function es(e) {
  for (var t = Bt(e), n = t.length; n--; ) {
    var r = t[n],
      i = e[r];
    t[n] = [r, i, kt(i)];
  }
  return t;
}
function Gt(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function ts(e) {
  var t = es(e);
  return t.length == 1 && t[0][2]
    ? Gt(t[0][0], t[0][1])
    : function (n) {
        return n === e || Qi(n, e, t);
      };
}
function ns(e, t) {
  return e != null && t in Object(e);
}
function rs(e, t, n) {
  t = Rt(t, e);
  for (var r = -1, i = t.length, s = !1; ++r < i; ) {
    var a = he(t[r]);
    if (!(s = e != null && n(e, a))) break;
    e = e[a];
  }
  return s || ++r != i
    ? s
    : ((i = e == null ? 0 : e.length),
      !!i && De(i) && He(a, i) && (k(e) || Ot(e)));
}
function is(e, t) {
  return e != null && rs(e, t, ns);
}
var ss = 1,
  as = 2;
function os(e, t) {
  return ke(e) && kt(t)
    ? Gt(he(e), t)
    : function (n) {
        var r = jr(n, e);
        return r === void 0 && r === t ? is(n, e) : Ge(t, r, ss | as);
      };
}
function ls(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
function cs(e) {
  return function (t) {
    return Ht(t, e);
  };
}
function us(e) {
  return ke(e) ? ls(he(e)) : cs(e);
}
function fs(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? Mn
    : typeof e == "object"
    ? k(e)
      ? os(e[0], e[1])
      : ts(e)
    : us(e);
}
function ds(e, t) {
  for (var n, r = -1, i = e.length; ++r < i; ) {
    var s = t(e[r]);
    s !== void 0 && (n = n === void 0 ? s : n + s);
  }
  return n;
}
function ms(e) {
  return Wr(2, e);
}
function ps(e, t) {
  return e && e.length ? ds(e, fs(t)) : 0;
}
const gs = ms(() => Be.loadScript("https://accounts.google.com/gsi/client")),
  _s = () => {
    const e = document.createElement("div");
    (e.style.display = "none"),
      e.classList.add("custom-google-button"),
      document.body.appendChild(e),
      window.google &&
        window.google.accounts.id.renderButton(e, { theme: "filled_blue" });
    const t = e.querySelector("div[role=button]");
    return {
      click: () => {
        t && t.click();
      },
    };
  };
function hs(e) {
  return U(this, null, function* () {
    try {
      yield gs(),
        window.google &&
          window.google.accounts.id.initialize({
            client_id: C.GOOGLE_KEY,
            callback: (t) => {
              let n = t.credential.split(".");
              const r = JSON.parse(
                decodeURIComponent(
                  encodeURI(
                    window.atob(n[1].replace(/-/g, "+").replace(/_/g, "/"))
                  )
                )
              );
              e &&
                e({
                  fullName: r.name,
                  idToken: t.credential,
                  openUserId: r.sub,
                  picture: r.picture,
                });
            },
          });
    } catch (t) {
      console.log(t);
    }
  });
}
var ys = w("<span>By requesting self-exclusion, I acknowledge the "),
  bs = w("<span class=text-brand>rules of self-exclusion"),
  vs = w("<span>& and take full responsibility"),
  $s = w(
    '<div class="flex flex-col gap-2 py-4 text-secondary text-sm font-normal"><section class=top-section></section><div class=button-bar><div class="flex items-center mb-2"><div>'
  ),
  ws = w(
    '<div class="tips-bar p-3 bg-layer4 rounded-xl"><div class="text-box flex items-center"><span class="tip ml-1">'
  ),
  Ts = w(
    '<div class="tips-bar flex items-start p-3 bg-layer4 rounded-xl"><div class=ml-1><span class=tip></span><span class=count-dowm-time><span> <!>h: </span><span> <!>m: </span><span> <!>s '
  ),
  As = w(
    '<div class="tips-bar flex items-start p-3 bg-layer4 rounded-xl"><div class="text-box flex"><span class=ml-1>'
  ),
  xs = w(
    '<div class="select-bar flex flex-col gap-2 mt-1 sm:flex-row sm:items-center"><p class="text-primary text-sm font-semibold sm:!mb-0">'
  ),
  Ss = w("<label>"),
  Cs = w('<div class="bg-layer4 -m-4 pt-14">'),
  Es = w(
    '<svg class="w-5 h-5 fill-secondary"width=16 height=16 viewBox="0 0 16 16"xmlns=http://www.w3.org/2000/svg><path d="M8.94537 1.86446C9.24837 2.03596 9.49887 2.28646 9.67037 2.58946L14.7244 11.52C15.2464 12.4425 14.9219 13.6135 13.9994 14.136C13.7109 14.299 13.3854 14.385 13.0539 14.385H2.94587C1.88587 14.385 1.02637 13.5255 1.02637 12.4655C1.02637 12.134 1.11187 11.8085 1.27537 11.52L6.32937 2.58946C6.85137 1.66696 8.02287 1.34196 8.94537 1.86446ZM7.99087 10.986C7.53137 10.986 7.15837 11.367 7.15837 11.8375C7.15837 12.308 7.53087 12.689 7.99087 12.689C8.45037 12.689 8.82337 12.308 8.82337 11.8375C8.82337 11.367 8.45087 10.986 7.99087 10.986ZM7.99087 5.30946C7.53137 5.30946 7.15837 5.68196 7.15837 6.14196V9.58596C7.15837 10.0455 7.53087 10.4185 7.99087 10.4185C8.45087 10.4185 8.82337 10.046 8.82337 9.58596V6.14196C8.82337 5.68246 8.45087 5.30946 7.99087 5.30946Z">'
  );
function Te(e) {
  return e ? (e > 9 ? e : "0" + e) : "00";
}
const Ps = function () {
    const t = Tt();
    W(() => {
      localStorage.getItem("initialized") ||
        (localStorage.setItem("initialized", "true"),
        H.loginSource === "walletConnect" &&
          H.open === 2 &&
          window.location.reload());
    }),
      W(() => {
        H.login || t("/login/signin"), a();
      });
    const [n, r] = F(""),
      [i, s] = F(0),
      a = () =>
        U(this, null, function* () {
          const m = yield Ce().get(
            `/account/self-exclusion/status/${H.userId}/`
          );
          r(m.status), s(m.expireTime);
        }),
      l = ue(() => [
        { value: 1, label: `1 ${O("Month")}` },
        { value: 3, label: `3 ${O("Month")}` },
        { value: 6, label: `6 ${O("Month")}` },
        { value: 12, label: `12 ${O("Month")}` },
        { value: -1, label: `${O("Permanent")}` },
      ]),
      [o, c] = F(l()[0]),
      [T, f] = F(!1);
    let h;
    const g = (m) => {
        t(`/settings/self-exclusion?period=${o().value}&verifyType=${m}`);
      },
      v = (m) =>
        U(this, null, function* () {
          try {
            Y.emit("sensorsTrack", {
              event: "third_register_click",
              account_type: "google",
            }),
              yield ze({
                fullName: m.fullName,
                idToken: m.idToken,
                openUserId: m.openUserId,
                userType: "google",
                picture: m.picture,
                invitationCode: "",
              }),
              g && g("google");
          } catch (I) {
            q(I);
          }
        }),
      x = () =>
        U(this, null, function* () {
          try {
            Y.emit("sensorsTrack", {
              event: "third_register_click",
              account_type: "line",
            });
            const m = yield ve("line", "");
            m ? q(m) : g && g("line");
          } catch (m) {
            q(m);
          }
        }),
      P = () =>
        U(this, null, function* () {
          try {
            Y.emit("sensorsTrack", {
              event: "third_register_click",
              account_type: "steam",
            });
            const m = yield ve("steam", "");
            m ? q(m) : g && g("steam");
          } catch (m) {
            q(m);
          }
        });
    W(() => {
      hs(v)
        .then(() => {
          try {
            const m = _s();
            h = () => {
              m.click();
            };
          } catch (m) {}
        })
        .catch(console.log);
    }, []);
    const d = () =>
        U(this, null, function* () {
          try {
            Y.emit("sensorsTrack", {
              event: "third_register_click",
              account_type: "telegram",
            });
            const m = yield ve("telegram");
            yield ze({
              fullName: m.first_name,
              idToken: Object.entries(m)
                .map(([I, N]) => `${I}=${N}`)
                .join(","),
              openUserId: m.id,
              userType: "telegram",
              invitationCode: "",
            }),
              g && g("telegram");
          } catch (m) {
            q(m);
          }
        }),
      _ = () =>
        U(this, null, function* () {
          var m, I, N;
          if (
            (I = (m = H) == null ? void 0 : m.email) != null &&
            I.length &&
            ((N = H) == null ? void 0 : N.loginSource) !== "steam"
          ) {
            if (
              (t(`/quests/sendemail?period=${o().value}&verifyType=password`),
              n() === "cool_down_email_sent")
            )
              return;
            f(!0),
              yield Ce().post("/account/self-exclusion/cool-down/email/", {
                period: o().value,
              }),
              r("cool_down_email_sent"),
              q(O("A confirmation email has been sent.")),
              f(!1),
              a();
          } else if (H.hasPhone)
            t(`/settings/verifyphone?period=${o().value}&verifyType=phone`);
          else
            switch (H.loginSource) {
              case "google":
                h && (yield h());
                break;
              case "telegram":
                yield d();
                break;
              case "metamask":
                t(`/help/wallet_type/${o().value}`);
                break;
              case "walletConnect":
                t(`/help/wallet_type/${o().value}`);
                break;
              case "line":
                yield x();
                break;
              case "steam":
                P();
                break;
              default:
                yield d();
                break;
            }
        }),
      p = ue(() =>
        Object.values([
          "self_exclusion_email_sent",
          "cool_down_confirmed",
        ]).includes(n())
      ),
      A = () => {
        if (!H.login) {
          t("/login/signin");
          return;
        }
        o().value === -1 && $()
          ? (We.push(un),
            Y.on("self_exclusion", () => {
              _();
            }))
          : _();
      },
      $ = () => {
        const m = Object.values(ae);
        return (
          ps(m, (N) =>
            new wt(Se.convertCurrency(N.amount || 0, N.currencyName)).toNumber()
          ) >= 1
        );
      },
      [S, te] = F(!1),
      ye = Yt(() => i());
    return (() => {
      var m = $s(),
        I = m.firstChild,
        N = I.nextSibling,
        Ue = N.firstChild,
        Fe = Ue.firstChild;
      return (
        u(
          I,
          (() => {
            var B = J(() => n() === "cool_down_email_sent");
            return () =>
              B() &&
              (() => {
                var E = ws(),
                  R = E.firstChild,
                  M = R.firstChild;
                return (
                  u(R, y(Ae, {}), M),
                  u(M, () =>
                    O(
                      "A request email has been sent. Please check your email and confirm your request"
                    )
                  ),
                  E
                );
              })();
          })(),
          null
        ),
        u(
          I,
          (() => {
            var B = J(() => n() === "cool_down_confirmed");
            return () =>
              B() &&
              (() => {
                var E = Ts(),
                  R = E.firstChild,
                  M = R.firstChild,
                  ne = M.nextSibling,
                  K = ne.firstChild,
                  jt = K.firstChild,
                  qe = jt.nextSibling;
                qe.nextSibling;
                var be = K.nextSibling,
                  Kt = be.firstChild,
                  je = Kt.nextSibling;
                je.nextSibling;
                var Ke = be.nextSibling,
                  Vt = Ke.firstChild,
                  Ve = Vt.nextSibling;
                return (
                  Ve.nextSibling,
                  u(E, y(Ae, {}), R),
                  u(M, () =>
                    O("A request has been confirmed, cool-down time will end: ")
                  ),
                  u(
                    K,
                    () => {
                      var G;
                      return Te((G = ye()) == null ? void 0 : G.hours);
                    },
                    qe
                  ),
                  u(
                    be,
                    () => {
                      var G;
                      return Te((G = ye()) == null ? void 0 : G.minutes);
                    },
                    je
                  ),
                  u(
                    Ke,
                    () => {
                      var G;
                      return Te((G = ye()) == null ? void 0 : G.seconds);
                    },
                    Ve
                  ),
                  E
                );
              })();
          })(),
          null
        ),
        u(
          I,
          (() => {
            var B = J(() => n() === "self_exclusion_email_sent");
            return () =>
              B() &&
              (() => {
                var E = As(),
                  R = E.firstChild,
                  M = R.firstChild;
                return (
                  u(R, y(Ae, {}), M),
                  u(M, () =>
                    O(
                      "Cool-down time has ended, please check your email and confirm your request"
                    )
                  ),
                  E
                );
              })();
          })(),
          null
        ),
        u(
          I,
          (() => {
            var B = J(() => !p());
            return () =>
              B() &&
              (() => {
                var E = xs(),
                  R = E.firstChild;
                return (
                  u(R, () =>
                    O("Select the period you would like to self-exclude")
                  ),
                  u(
                    E,
                    y(Jt, {
                      get value() {
                        return o();
                      },
                      class: "bg-layer3 sm:w-40",
                      get options() {
                        return l();
                      },
                      onChange: (M) => {
                        c(M);
                      },
                      children: (M) =>
                        (() => {
                          var ne = Ss();
                          return (
                            u(ne, () => {
                              var K;
                              return (K = M()) == null ? void 0 : K.label;
                            }),
                            ne
                          );
                        })(),
                    }),
                    null
                  ),
                  E
                );
              })();
          })(),
          null
        ),
        u(
          Ue,
          y(Qt, {
            class: "w-8 h-8",
            get value() {
              return S();
            },
            onChange: () => {
              te(!S());
            },
          }),
          Fe
        ),
        u(
          Fe,
          y(Ee, {
            i18nKey: "static.user_agreement",
            get children() {
              return [
                ys(),
                (() => {
                  var B = bs();
                  return (
                    (B.$$click = () => {
                      We.push(() =>
                        y(en, {
                          get title() {
                            return O("rules of self-exclusion");
                          },
                          class: "p-0 [&_.pop-title]:bg-layer4",
                          get children() {
                            var E = Cs();
                            return (
                              u(
                                E,
                                y(qs, { htmlName: "self_exclusion_dialog" })
                              ),
                              E
                            );
                          },
                        })
                      );
                    }),
                    B
                  );
                })(),
                vs(),
              ];
            },
          })
        ),
        u(
          N,
          y(tn, {
            class: "text-primary_brand text-sm font-semibold w-full sm:w-56",
            onClick: A,
            type: "brand",
            get disabled() {
              return !S() || p();
            },
            get children() {
              return O("Request Self-exclusion");
            },
          }),
          null
        ),
        m
      );
    })();
  },
  Ae = () => Es();
vt(["click"]);
const Ls = "/modules/static2/assets/aml-2df19221.png",
  Os = "/modules/static2/assets/responsible_gambling-79303e8f.png",
  ht = Object.assign({
    "./aml_87.html": () =>
      L(() => import("./aml_87-8fd3e078.js"), []).then((e) => e.default),
    "./privacy_87.html": () =>
      L(() => import("./privacy_87-760537e0.js"), []).then((e) => e.default),
    "./responsible_gambling_87.html": () =>
      L(() => import("./responsible_gambling_87-69d02090.js"), []).then(
        (e) => e.default
      ),
    "./terms_of_service_87.html": () =>
      L(() => import("./terms_of_service_87-9b8ac5b5.js"), []).then(
        (e) => e.default
      ),
  });
let Ut = {};
for (const e in ht) {
  const t = e.split("_87")[0].replace("./", "");
  Ut[t] = ht[e];
}
const Is = ["aml", "terms_of_service", "privacy", "responsible_gambling"],
  yt = Object.assign({
    "./aml_bckm.html": () =>
      L(() => import("./aml_bckm-1d045f02.js"), []).then((e) => e.default),
    "./kyc_policy_bckm.html": () =>
      L(() => import("./kyc_policy_bckm-8c008ff6.js"), []).then(
        (e) => e.default
      ),
    "./privacy_bckm.html": () =>
      L(() => import("./privacy_bckm-88924c4c.js"), []).then((e) => e.default),
    "./responsible_gambling_bckm.html": () =>
      L(() => import("./responsible_gambling_bckm-c8dfdc29.js"), []).then(
        (e) => e.default
      ),
    "./terms_of_service_bckm.html": () =>
      L(() => import("./terms_of_service_bckm-a38d3b14.js"), []).then(
        (e) => e.default
      ),
  });
let Ft = {};
for (const e in yt) {
  const t = e.split("_bckm")[0].replace("./", "");
  Ft[t] = yt[e];
}
const Ms = [
    "kyc_policy",
    "responsible_gambling",
    "terms_of_service",
    "privacy",
    "aml",
  ],
  bt = Object.assign({
    "./about_us_bcsports.html": () =>
      L(() => import("./about_us_bcsports-ff9fcec6.js"), []).then(
        (e) => e.default
      ),
    "./contact_us_bcsports.html": () =>
      L(() => import("./contact_us_bcsports-4b409590.js"), []).then(
        (e) => e.default
      ),
    "./cookies_policy_bcsports.html": () =>
      L(() => import("./cookies_policy_bcsports-1e631c43.js"), []).then(
        (e) => e.default
      ),
    "./faq_bcsports.html": () =>
      L(() => import("./faq_bcsports-9c525e13.js"), []).then((e) => e.default),
    "./responsible_gambling_bcsports.html": () =>
      L(() => import("./responsible_gambling_bcsports-91d4f66b.js"), []).then(
        (e) => e.default
      ),
    "./terms_of_service_bcsports.html": () =>
      L(() => import("./terms_of_service_bcsports-5fc0c9af.js"), []).then(
        (e) => e.default
      ),
  });
let qt = {};
for (const e in bt) {
  const t = e.split("_bcsports")[0].replace("./", "");
  qt[t] = bt[e];
}
const Ns = [
  "faq",
  "terms_of_service",
  "contact_us",
  "about_us",
  "responsible_gambling",
];
var Bs = w("<div><section>"),
  Rs = w('<h2 class="text-sm font-semibold text-primary">'),
  Hs = w("<section>"),
  Ds = w(
    '<div class="support-info mt-4"><div class="text-sm font-semibold text-secondary [&amp;_a]:text-brand">'
  ),
  ks = w('<div class="help-center-box p-4">'),
  Gs = w(
    '<p class="center my-4"><a class=flex target=_blank rel="noopener noreferrer">'
  ),
  Us = w('<p><img class="my-2 w-36">');
const Fs = function (t) {
    const [n, r] = F(""),
      i = re[ce.lang],
      {
        isKenyaHost: s,
        isSpHost: a,
        isAnjouanHost: l,
        isBrAuditHost: o,
      } = Be.getHostType(C.host),
      c = St(),
      T = ue(() => ({
        privacy: oe.includes(C.host) ? "privacy_update" : "privacy",
        "terms-service": oe.includes(C.host)
          ? "terms_of_service_new"
          : "terms_of_service",
        "terms-sports": "terms_of_sports",
        blockdance: "blockdance",
        bonus: "bonus_terms",
        "law-enforcement": "law_enforcement",
        coinlimit: "coin_limit",
        contactus: "contact_us",
        fee: "fee",
        googlecheck: "google_authenticator",
        faq: "faq",
        passcurrency: "currency",
        reglog: "registration_login",
        swappolicy: "swap_policy",
        "gameble-aware": "gamble_minors",
        "protect-minors": "gamble_minors",
        providers: "providers",
        aml: oe.includes(C.host) ? "aml" : "aml_update",
        "self-exclusion": "self_exclusion",
        "responsible-gambling": "responsible_gambling",
        announcement: "announcement",
      })),
      f = t.htmlName || T()[c.helpPageId] || c.helpPageId,
      [h] = nn(
        () => f,
        () => {
          let g = i ? (i[f] ? i[f] : re.en[f]) : re.en[f];
          return (
            s && (g = re.en[f]),
            a && Is.includes(f) && (g = Ut[f]),
            l && Ms.includes(f) && (g = Ft[f]),
            o && Ns.includes(f) && (g = qt[f]),
            g()
          );
        }
      );
    return (
      W(() => {
        var v;
        let g = Vs((v = h()) != null ? v : "");
        l && (g = Ws(g)), r(g);
      }),
      y(V, {
        get when() {
          return n();
        },
        get children() {
          return y(
            js,
            Wt(
              {
                get html() {
                  return n();
                },
              },
              t,
              { htmlName: f }
            )
          );
        },
      })
    );
  },
  qs = Fs,
  js = function (e) {
    const [t] = cn(),
      {
        isKenyaHost: n,
        isSpHost: r,
        isAnjouanHost: i,
        isBrAuditHost: s,
      } = Be.getHostType(C.host);
    let a;
    const l = Tt(),
      [o, c] = F(1),
      T = (d) => {
        c(o() + 1);
      };
    W(() => {
      if (e.isBonusTC && o()) {
        const d = document.querySelector(".blocked-game-list"),
          _ = document.querySelector(".deposit-game-list"),
          p = document.querySelector(".freemoney-game-list"),
          A = document.querySelector(".freespin-game-list");
        zs().then(($) => {
          d && $.blackGames && (d.innerHTML = se($.blackGames, C.mobile)),
            _ &&
              $.depositBonusGames &&
              (_.innerHTML = se($.depositBonusGames, C.mobile)),
            p &&
              $.freeMoneyGames &&
              (p.innerHTML = se($.freeMoneyGames, C.mobile)),
            A &&
              $.freeSpinGames &&
              (A.innerHTML = se($.freeSpinGames, C.mobile));
        });
      }
    }),
      W(() => {
        if (ce.lang === "en" && n) {
          const p = document.querySelector(".need-kenya-title"),
            A = `Blockdance Africa Ltd (owner and operator of the ${C.host.toUpperCase()}, herinafter as "${C.host.toUpperCase()}" or "we"), a company registered and established under the Law of Kenya, is licensed by BCLB (Betting Control and Licensing Board of Kenya) under the Betting, Lotteries and Gaming Act, Cap 131, Laws of Kenya under License number: 0000573.`;
          p && (p.innerHTML = A);
        }
        if (ce.lang === "en" && i) {
          const p = document.querySelector(".need-kenya-title"),
            A =
              "a limited liability company registered in Belize with company registration number 000041939, with registered address at Sea Urchin Street, San Pedro, Ambergris Caye, Belize, licensed in the State of Anjouan under the Computer Gaming Licensing Act 007 of 2005.";
          p && (p.innerHTML = A);
        }
        a.querySelectorAll("a").forEach((p) => {
          if (!p.href.startsWith(window.location.hostname)) {
            const A = p.innerHTML,
              S = `<svg class="hashbet ${
                p.className.includes("cl-primary") ? "cl-primary" : ""
              }" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path d="M365.386 83.556c31.44 0 56.926 25.486 56.926 56.926 0 30.897-24.617 56.046-55.307 56.904l-1.62 0.022h-170.777v629.186h629.186v-170.777c0-30.897 24.617-56.046 55.307-56.904l1.62-0.022c30.897 0 56.045 24.617 56.904 55.307l0.022 1.62v179.768c0 57.258-45.887 103.796-102.894 104.848l-1.968 0.017h-647.16c-57.258 0-103.796-45.887-104.848-102.894l-0.017-1.968v-647.16c0-57.258 45.887-103.796 102.894-104.848l1.968-0.017h179.768zM611.108 84.556l1.62 0.013 227.481 4.701c57.907 1.009 104.028 48.774 103.019 106.677l-1.176 62.495-1.198 54.931-1.442 62.539-0.437 21.864c-0.034 1.776-0.066 3.547-0.094 5.315-0.549 31.434-26.475 56.472-57.909 55.926s-56.472-26.475-55.926-57.909l0.308-16.334 2.11-93 0.246-11.744-360.933 330.867c-23.176 21.246-59.187 19.678-80.428-3.495-20.849-22.748-19.728-57.854 2.233-79.234l1.267-1.193 355.396-325.787-134.861-2.783c-30.889-0.638-55.524-25.77-55.748-56.469l0.013-1.62c0.638-30.889 25.77-55.524 56.469-55.748z"></path>
        </svg>`;
            p.innerHTML = A + S;
          }
        });
        const _ = (p) => {
          const $ = p.target.getAttribute("href") || "";
          /^\//.test($) && (p.preventDefault(), l($));
        };
        return (
          a.addEventListener("click", _),
          () => {
            a && a.removeEventListener("click", _);
          }
        );
      });
    const f = St(),
      h = `<p>
    <img class='w-full sm:w-1/2 mb-2' src='${Os}' />
  </p>`,
      v = new DOMParser()
        .parseFromString(e.html, "text/html")
        .querySelectorAll("section");
    let x = "";
    for (let d = 0; d < v.length; d++) x += v[d].innerHTML;
    const P = ue(() =>
      e.isSuport
        ? null
        : Array.from(v).map((d, _) => {
            const p = d.querySelector("h2"),
              A = (p == null ? void 0 : p.innerHTML) || "";
            p && d.removeChild(p);
            let $ = d.innerHTML;
            return (
              e.htmlName === "aml" && _ === 0 && ($ = ""),
              e.htmlName === "responsible_gambling" &&
                _ === 0 &&
                !s &&
                ($ = h + d.innerHTML),
              A
                ? y(pn, {
                    cb: (S) => T(),
                    get htmlName() {
                      return e.htmlName;
                    },
                    get labelNode() {
                      return (() => {
                        var S = Rs();
                        return (S.innerHTML = A), S;
                      })();
                    },
                    get open() {
                      return t.active ? t.active === d.id : _ === 0;
                    },
                    get children() {
                      return [
                        (() => {
                          var S = Bs(),
                            te = S.firstChild;
                          return (
                            u(
                              S,
                              y(V, {
                                get when() {
                                  return e.htmlName === "aml" && _ === 0;
                                },
                                get children() {
                                  return y(Zs, {});
                                },
                              }),
                              te
                            ),
                            (te.innerHTML = $),
                            Ne(() =>
                              xe(
                                S,
                                le(
                                  "text-sm font-normal text-secondary",
                                  f.helpPageId && "rounded-xl px-4"
                                )
                              )
                            ),
                            S
                          );
                        })(),
                        y(V, {
                          get when() {
                            return e.isSelfExclusion;
                          },
                          get children() {
                            return y(Ps, {});
                          },
                        }),
                      ];
                    },
                  })
                : (() => {
                    var S = Hs();
                    return (S.innerHTML = $), S;
                  })()
            );
          })
    );
    return (() => {
      var d = ks();
      return (
        zt((_) => (a = _), d),
        u(d, P, null),
        u(
          d,
          (() => {
            var _ = J(() => !!e.isCoinlimit);
            return () => _() && y(hn, {});
          })(),
          null
        ),
        u(
          d,
          y(V, {
            get when() {
              return e.isSuport;
            },
            get children() {
              var _ = Ds(),
                p = _.firstChild;
              return u(_, y(Ks, {}), p), (p.innerHTML = x), _;
            },
          }),
          null
        ),
        d
      );
    })();
  },
  Ks = function () {
    return (() => {
      var t = Gs(),
        n = t.firstChild;
      return (
        u(n, y(rn, { name: "Support", class: "h-20 w-20" })),
        Ne(() =>
          $t(
            n,
            "href",
            `https://help.bc.game/${ce.lang === "ja" ? "ja" : "en"}/`
          )
        ),
        t
      );
    })();
  };
function Vs(e) {
  var n, r;
  let t = e;
  return (
    C.host &&
      ((t = t.replaceAll(
        "__BC_HOST__",
        (n = C.host) == null ? void 0 : n.toUpperCase()
      )),
      (t = t.replaceAll("__SMALL_BC_HOST__", C.host)),
      (t = t.replaceAll(
        "__BC_SITENAME__",
        (r = C.siteName) == null ? void 0 : r.toUpperCase()
      )),
      oe.includes(C.host) ||
        (t = t.replaceAll("BlockDance B.V.", "Blockdance Africa Ltd "))),
    t
  );
}
function Ws(e) {
  let t = e;
  return (t = t.replaceAll("Small House BV", "Twocent Technology Limited")), t;
}
const zs = ln(() => Ce().post("/home/game/getNewUserBonusGames/"), 8e7);
function se(e, t) {
  const n = Yr(e, t ? 2 : 4);
  let r = "";
  for (let i = 0; i < n.length; i++) {
    const s = n[i].map((a) => "<span>" + a + "</span>");
    r += "<div>" + s.join("") + "</div>";
  }
  return r;
}
function Zs() {
  const e = () =>
      y(Ee, {
        i18nKey: "static.amlParagraph1",
        children:
          "__ENV_HOST__ is operated under a non-exclusive license by Small House B.V, a company registered in Curacao with Company Number 164979 and with Registered Address at: Zuikertuintjeweg Z/N, Curacao.",
      }),
    t = () =>
      y(Ee, {
        i18nKey: "static.amlParagraph2",
        children:
          "Small House B.V., is licensed and regulated by the Gaming Control Board (GCB) with Licence Number: OGL/2023/118/0060 Issued in 22nd February 2024. Trust Service by https://wyze-trust.com and Represented by https://igagroup.com",
      });
  return (() => {
    var n = Us(),
      r = n.firstChild;
    return u(n, e, r), $t(r, "src", Ls), u(n, t, null), n;
  })();
}
export { qs as default };
