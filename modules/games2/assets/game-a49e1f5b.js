var jo = Object.defineProperty,
  ko = Object.defineProperties;
var Ao = Object.getOwnPropertyDescriptors;
var He = Object.getOwnPropertySymbols;
var pt = Object.prototype.hasOwnProperty,
  bt = Object.prototype.propertyIsEnumerable;
var dt = (n, e, t) =>
    e in n
      ? jo(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  k = (n, e) => {
    for (var t in e || (e = {})) pt.call(e, t) && dt(n, t, e[t]);
    if (He) for (var t of He(e)) bt.call(e, t) && dt(n, t, e[t]);
    return n;
  },
  _ = (n, e) => ko(n, Ao(e));
var In = (n, e) => {
  var t = {};
  for (var r in n) pt.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && He)
    for (var r of He(n)) e.indexOf(r) < 0 && bt.call(n, r) && (t[r] = n[r]);
  return t;
};
var F = (n, e, t) =>
  new Promise((r, o) => {
    var i = (c) => {
        try {
          s(t.next(c));
        } catch (l) {
          o(l);
        }
      },
      a = (c) => {
        try {
          s(t.throw(c));
        } catch (l) {
          o(l);
        }
      },
      s = (c) => (c.done ? r(c.value) : Promise.resolve(c.value).then(i, a));
    s((t = t.apply(n, e)).next());
  });
import {
  aa as E,
  y as oe,
  ab as $,
  D as te,
  ac as So,
  G as Ve,
  f as D,
  H as ie,
  l as B,
  o as R,
  a2 as he,
  $ as G,
  Z as Wn,
  c as S,
  k as Pe,
  a4 as ge,
  ad as dn,
  ae as Po,
  af as rr,
  a0 as X,
  ag as Ce,
  ah as xo,
  F as or,
  a3 as ir,
  n as ar,
  S as No,
  ai as To,
  h as _o,
  m as ue,
} from "./manifest-a234c8a0.js";
import { b as Lo } from "./router-b8d56046.js";
import {
  i as sr,
  b as Q,
  d as ur,
  e as Bo,
  f as Eo,
  g as Yn,
  h as Do,
  j as cr,
  k as jn,
  B as Co,
  c as $o,
} from "./currency-a0e3a368.js";
import {
  a as Ke,
  e as lr,
  i as Fo,
  L as Bn,
  M as an,
  b as fr,
  t as Be,
  f as Mo,
} from "./amount-af49bfc0.js";
import {
  r as ve,
  i as pn,
  b as Jn,
  f as qo,
  S as sn,
} from "./isObject-d5c4896e.js";
import { i as Ue, a as Fe } from "./isSymbol-0edd6b24.js";
import { u as Uo } from "./user-dc7ef1f4.js";
import { u as zo } from "./use-coin-format-bfa33df5.js";
import { c as Ro } from "./utils-65805dbc.js";
import {
  _ as Go,
  m as bn,
  P as we,
  g as mt,
  d as Vo,
  e as dr,
  s as Ko,
  f as re,
  h as yt,
  i as Wo,
  D as Yo,
  a as pr,
  b as ht,
  j as Jo,
} from "./index-4897b9da.js";
import { S as kn } from "./config-6b289bdb.js";
function Hn(n) {
  return n;
}
const En = Ke(ve, "WeakMap");
var gt = Object.create;
const Ho = (function () {
  function n() {}
  return function (e) {
    if (!pn(e)) return {};
    if (gt) return gt(e);
    n.prototype = e;
    var t = new n();
    return (n.prototype = void 0), t;
  };
})();
function Qo() {}
const vt = (function () {
  try {
    var n = Ke(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch (e) {}
})();
function Xo(n) {
  return n != n;
}
function Zo(n, e) {
  return (
    !!(n != null && n.length) &&
    (function (t, r, o) {
      return r == r
        ? (function (i, a, s) {
            for (var c = s - 1, l = i.length; ++c < l; )
              if (i[c] === a) return c;
            return -1;
          })(t, r, o)
        : (function (i, a, s, c) {
            for (var l = i.length, u = s + (c ? 1 : -1); c ? u-- : ++u < l; )
              if (a(i[u], u, i)) return u;
            return -1;
          })(t, Xo, o);
    })(n, e, 0) > -1
  );
}
function br(n, e, t) {
  e == "__proto__" && vt
    ? vt(n, e, { configurable: !0, enumerable: !0, value: t, writable: !0 })
    : (n[e] = t);
}
var ei = Object.prototype.hasOwnProperty;
function mr(n, e, t) {
  var r = n[e];
  (ei.call(n, e) && lr(r, t) && (t !== void 0 || e in n)) || br(n, e, t);
}
function Qe(n, e, t, r) {
  var o = !t;
  t || (t = {});
  for (var i = -1, a = e.length; ++i < a; ) {
    var s = e[i],
      c = r ? r(t[s], n[s], s, t, n) : void 0;
    c === void 0 && (c = n[s]), o ? br(t, s, c) : mr(t, s, c);
  }
  return t;
}
function We(n) {
  return n != null && sr(n.length) && !Fo(n);
}
var ni = Object.prototype;
function mn(n) {
  var e = n && n.constructor;
  return n === ((typeof e == "function" && e.prototype) || ni);
}
var yr = typeof exports == "object" && exports && !exports.nodeType && exports,
  wt = yr && typeof module == "object" && module && !module.nodeType && module,
  Ot = wt && wt.exports === yr ? ve.Buffer : void 0;
const ze =
  (Ot ? Ot.isBuffer : void 0) ||
  function () {
    return !1;
  };
var P = {};
function yn(n) {
  return function (e) {
    return n(e);
  };
}
(P["[object Float32Array]"] =
  P["[object Float64Array]"] =
  P["[object Int8Array]"] =
  P["[object Int16Array]"] =
  P["[object Int32Array]"] =
  P["[object Uint8Array]"] =
  P["[object Uint8ClampedArray]"] =
  P["[object Uint16Array]"] =
  P["[object Uint32Array]"] =
    !0),
  (P["[object Arguments]"] =
    P["[object Array]"] =
    P["[object ArrayBuffer]"] =
    P["[object Boolean]"] =
    P["[object DataView]"] =
    P["[object Date]"] =
    P["[object Error]"] =
    P["[object Function]"] =
    P["[object Map]"] =
    P["[object Number]"] =
    P["[object Object]"] =
    P["[object RegExp]"] =
    P["[object Set]"] =
    P["[object String]"] =
    P["[object WeakMap]"] =
      !1);
var hr = typeof exports == "object" && exports && !exports.nodeType && exports,
  Me = hr && typeof module == "object" && module && !module.nodeType && module,
  An = Me && Me.exports === hr && qo.process;
const xe = (function () {
  try {
    var n = Me && Me.require && Me.require("util").types;
    return n || (An && An.binding && An.binding("util"));
  } catch (e) {}
})();
var It = xe && xe.isTypedArray;
const Qn = It
  ? yn(It)
  : function (n) {
      return Ue(n) && sr(n.length) && !!P[Jn(n)];
    };
var ti = Object.prototype.hasOwnProperty;
function gr(n, e) {
  var t = Q(n),
    r = !t && ur(n),
    o = !t && !r && ze(n),
    i = !t && !r && !o && Qn(n),
    a = t || r || o || i,
    s = a
      ? (function (u, f) {
          for (var y = -1, g = Array(u); ++y < u; ) g[y] = f(y);
          return g;
        })(n.length, String)
      : [],
    c = s.length;
  for (var l in n)
    (!e && !ti.call(n, l)) ||
      (a &&
        (l == "length" ||
          (o && (l == "offset" || l == "parent")) ||
          (i && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
          Bo(l, c))) ||
      s.push(l);
  return s;
}
function vr(n, e) {
  return function (t) {
    return n(e(t));
  };
}
const ri = vr(Object.keys, Object);
var oi = Object.prototype.hasOwnProperty;
function wr(n) {
  if (!mn(n)) return ri(n);
  var e = [];
  for (var t in Object(n)) oi.call(n, t) && t != "constructor" && e.push(t);
  return e;
}
function Re(n) {
  return We(n) ? gr(n) : wr(n);
}
var ii = Object.prototype.hasOwnProperty;
function ai(n) {
  if (!pn(n))
    return (function (o) {
      var i = [];
      if (o != null) for (var a in Object(o)) i.push(a);
      return i;
    })(n);
  var e = mn(n),
    t = [];
  for (var r in n) (r != "constructor" || (!e && ii.call(n, r))) && t.push(r);
  return t;
}
function Dn(n) {
  return We(n) ? gr(n, !0) : ai(n);
}
function Xn(n, e) {
  for (var t = 0, r = (e = Eo(e, n)).length; n != null && t < r; )
    n = n[Yn(e[t++])];
  return t && t == r ? n : void 0;
}
function Or(n, e) {
  for (var t = -1, r = e.length, o = n.length; ++t < r; ) n[o + t] = e[t];
  return n;
}
const Ir = vr(Object.getPrototypeOf, Object);
function H(n) {
  var e = (this.__data__ = new Bn(n));
  this.size = e.size;
}
(H.prototype.clear = function () {
  (this.__data__ = new Bn()), (this.size = 0);
}),
  (H.prototype.delete = function (n) {
    var e = this.__data__,
      t = e.delete(n);
    return (this.size = e.size), t;
  }),
  (H.prototype.get = function (n) {
    return this.__data__.get(n);
  }),
  (H.prototype.has = function (n) {
    return this.__data__.has(n);
  }),
  (H.prototype.set = function (n, e) {
    var t = this.__data__;
    if (t instanceof Bn) {
      var r = t.__data__;
      if (!an || r.length < 199)
        return r.push([n, e]), (this.size = ++t.size), this;
      t = this.__data__ = new fr(r);
    }
    return t.set(n, e), (this.size = t.size), this;
  });
var jr = typeof exports == "object" && exports && !exports.nodeType && exports,
  jt = jr && typeof module == "object" && module && !module.nodeType && module,
  kt = jt && jt.exports === jr ? ve.Buffer : void 0,
  At = kt ? kt.allocUnsafe : void 0;
function kr() {
  return [];
}
var si = Object.prototype.propertyIsEnumerable,
  St = Object.getOwnPropertySymbols;
const Zn = St
    ? function (n) {
        return n == null
          ? []
          : ((n = Object(n)),
            (function (e, t) {
              for (
                var r = -1, o = e == null ? 0 : e.length, i = 0, a = [];
                ++r < o;

              ) {
                var s = e[r];
                t(s, r, e) && (a[i++] = s);
              }
              return a;
            })(St(n), function (e) {
              return si.call(n, e);
            }));
      }
    : kr,
  Ar = Object.getOwnPropertySymbols
    ? function (n) {
        for (var e = []; n; ) Or(e, Zn(n)), (n = Ir(n));
        return e;
      }
    : kr;
function Sr(n, e, t) {
  var r = e(n);
  return Q(n) ? r : Or(r, t(n));
}
function Cn(n) {
  return Sr(n, Re, Zn);
}
function ui(n) {
  return Sr(n, Dn, Ar);
}
const $n = Ke(ve, "DataView"),
  Fn = Ke(ve, "Promise"),
  Ae = Ke(ve, "Set");
var Pt = "[object Map]",
  xt = "[object Promise]",
  Nt = "[object Set]",
  Tt = "[object WeakMap]",
  _t = "[object DataView]",
  ci = Be($n),
  li = Be(an),
  fi = Be(Fn),
  di = Be(Ae),
  pi = Be(En),
  pe = Jn;
(($n && pe(new $n(new ArrayBuffer(1))) != _t) ||
  (an && pe(new an()) != Pt) ||
  (Fn && pe(Fn.resolve()) != xt) ||
  (Ae && pe(new Ae()) != Nt) ||
  (En && pe(new En()) != Tt)) &&
  (pe = function (n) {
    var e = Jn(n),
      t = e == "[object Object]" ? n.constructor : void 0,
      r = t ? Be(t) : "";
    if (r)
      switch (r) {
        case ci:
          return _t;
        case li:
          return Pt;
        case fi:
          return xt;
        case di:
          return Nt;
        case pi:
          return Tt;
      }
    return e;
  });
const Ne = pe;
var bi = Object.prototype.hasOwnProperty;
const un = ve.Uint8Array;
function Sn(n) {
  var e = new n.constructor(n.byteLength);
  return new un(e).set(new un(n)), e;
}
var mi = /\w*$/,
  Lt = sn ? sn.prototype : void 0,
  Bt = Lt ? Lt.valueOf : void 0,
  yi = "[object Boolean]",
  hi = "[object Date]",
  gi = "[object Map]",
  vi = "[object Number]",
  wi = "[object RegExp]",
  Oi = "[object Set]",
  Ii = "[object String]",
  ji = "[object Symbol]",
  ki = "[object ArrayBuffer]",
  Ai = "[object DataView]",
  Si = "[object Float32Array]",
  Pi = "[object Float64Array]",
  xi = "[object Int8Array]",
  Ni = "[object Int16Array]",
  Ti = "[object Int32Array]",
  _i = "[object Uint8Array]",
  Li = "[object Uint8ClampedArray]",
  Bi = "[object Uint16Array]",
  Ei = "[object Uint32Array]";
function Di(n, e, t) {
  var r,
    o,
    i,
    a = n.constructor;
  switch (e) {
    case ki:
      return Sn(n);
    case yi:
    case hi:
      return new a(+n);
    case Ai:
      return (function (s, c) {
        var l = c ? Sn(s.buffer) : s.buffer;
        return new s.constructor(l, s.byteOffset, s.byteLength);
      })(n, t);
    case Si:
    case Pi:
    case xi:
    case Ni:
    case Ti:
    case _i:
    case Li:
    case Bi:
    case Ei:
      return (function (s, c) {
        var l = c ? Sn(s.buffer) : s.buffer;
        return new s.constructor(l, s.byteOffset, s.length);
      })(n, t);
    case gi:
      return new a();
    case vi:
    case Ii:
      return new a(n);
    case wi:
      return (
        ((i = new (o = n).constructor(o.source, mi.exec(o))).lastIndex =
          o.lastIndex),
        i
      );
    case Oi:
      return new a();
    case ji:
      return (r = n), Bt ? Object(Bt.call(r)) : {};
  }
}
var Et = xe && xe.isMap;
const Ci = Et
  ? yn(Et)
  : function (n) {
      return Ue(n) && Ne(n) == "[object Map]";
    };
var Dt = xe && xe.isSet;
const $i = Dt
  ? yn(Dt)
  : function (n) {
      return Ue(n) && Ne(n) == "[object Set]";
    };
var Fi = 1,
  Mi = 2,
  qi = 4,
  Pr = "[object Arguments]",
  xr = "[object Function]",
  Ui = "[object GeneratorFunction]",
  Nr = "[object Object]",
  A = {};
function nn(n, e, t, r, o, i) {
  var a,
    s = e & Fi,
    c = e & Mi,
    l = e & qi;
  if ((t && (a = o ? t(n, r, o, i) : t(n)), a !== void 0)) return a;
  if (!pn(n)) return n;
  var u = Q(n);
  if (u) {
    if (
      ((a = (function (p) {
        var m = p.length,
          b = new p.constructor(m);
        return (
          m &&
            typeof p[0] == "string" &&
            bi.call(p, "index") &&
            ((b.index = p.index), (b.input = p.input)),
          b
        );
      })(n)),
      !s)
    )
      return (function (p, m) {
        var b = -1,
          d = p.length;
        for (m || (m = Array(d)); ++b < d; ) m[b] = p[b];
        return m;
      })(n, a);
  } else {
    var f = Ne(n),
      y = f == xr || f == Ui;
    if (ze(n))
      return (function (p, m) {
        if (m) return p.slice();
        var b = p.length,
          d = At ? At(b) : new p.constructor(b);
        return p.copy(d), d;
      })(n, s);
    if (f == Nr || f == Pr || (y && !o)) {
      if (
        ((a =
          c || y
            ? {}
            : (function (p) {
                return typeof p.constructor != "function" || mn(p)
                  ? {}
                  : Ho(Ir(p));
              })(n)),
        !s)
      )
        return c
          ? (function (p, m) {
              return Qe(p, Ar(p), m);
            })(
              n,
              (function (p, m) {
                return p && Qe(m, Dn(m), p);
              })(a, n)
            )
          : (function (p, m) {
              return Qe(p, Zn(p), m);
            })(
              n,
              (function (p, m) {
                return p && Qe(m, Re(m), p);
              })(a, n)
            );
    } else {
      if (!A[f]) return o ? n : {};
      a = Di(n, f, s);
    }
  }
  i || (i = new H());
  var g = i.get(n);
  if (g) return g;
  i.set(n, a),
    $i(n)
      ? n.forEach(function (p) {
          a.add(nn(p, e, t, p, n, i));
        })
      : Ci(n) &&
        n.forEach(function (p, m) {
          a.set(m, nn(p, e, t, m, n, i));
        });
  var v = u ? void 0 : (l ? (c ? ui : Cn) : c ? Dn : Re)(n);
  return (
    (function (p, m) {
      for (
        var b = -1, d = p == null ? 0 : p.length;
        ++b < d && m(p[b], b, p) !== !1;

      );
    })(v || n, function (p, m) {
      v && (p = n[(m = p)]), mr(a, m, nn(p, e, t, m, n, i));
    }),
    a
  );
}
(A[Pr] =
  A["[object Array]"] =
  A["[object ArrayBuffer]"] =
  A["[object DataView]"] =
  A["[object Boolean]"] =
  A["[object Date]"] =
  A["[object Float32Array]"] =
  A["[object Float64Array]"] =
  A["[object Int8Array]"] =
  A["[object Int16Array]"] =
  A["[object Int32Array]"] =
  A["[object Map]"] =
  A["[object Number]"] =
  A[Nr] =
  A["[object RegExp]"] =
  A["[object Set]"] =
  A["[object String]"] =
  A["[object Symbol]"] =
  A["[object Uint8Array]"] =
  A["[object Uint8ClampedArray]"] =
  A["[object Uint16Array]"] =
  A["[object Uint32Array]"] =
    !0),
  (A["[object Error]"] = A[xr] = A["[object WeakMap]"] = !1);
var zi = 1,
  Ri = 4;
function et(n) {
  return nn(n, zi | Ri);
}
function qe(n) {
  var e = -1,
    t = n == null ? 0 : n.length;
  for (this.__data__ = new fr(); ++e < t; ) this.add(n[e]);
}
function Gi(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length; ++t < r; )
    if (e(n[t], t, n)) return !0;
  return !1;
}
function Tr(n, e) {
  return n.has(e);
}
(qe.prototype.add = qe.prototype.push =
  function (n) {
    return this.__data__.set(n, "__lodash_hash_undefined__"), this;
  }),
  (qe.prototype.has = function (n) {
    return this.__data__.has(n);
  });
var Vi = 1,
  Ki = 2;
function Ct(n, e, t, r, o, i) {
  var a = t & Vi,
    s = n.length,
    c = e.length;
  if (s != c && !(a && c > s)) return !1;
  var l = i.get(n),
    u = i.get(e);
  if (l && u) return l == e && u == n;
  var f = -1,
    y = !0,
    g = t & Ki ? new qe() : void 0;
  for (i.set(n, e), i.set(e, n); ++f < s; ) {
    var v = n[f],
      p = e[f];
    if (r) var m = a ? r(p, v, f, e, n, i) : r(v, p, f, n, e, i);
    if (m !== void 0) {
      if (m) continue;
      y = !1;
      break;
    }
    if (g) {
      if (
        !Gi(e, function (b, d) {
          if (!Tr(g, d) && (v === b || o(v, b, t, r, i))) return g.push(d);
        })
      ) {
        y = !1;
        break;
      }
    } else if (v !== p && !o(v, p, t, r, i)) {
      y = !1;
      break;
    }
  }
  return i.delete(n), i.delete(e), y;
}
function Wi(n) {
  var e = -1,
    t = Array(n.size);
  return (
    n.forEach(function (r, o) {
      t[++e] = [o, r];
    }),
    t
  );
}
function nt(n) {
  var e = -1,
    t = Array(n.size);
  return (
    n.forEach(function (r) {
      t[++e] = r;
    }),
    t
  );
}
var Yi = 1,
  Ji = 2,
  Hi = "[object Boolean]",
  Qi = "[object Date]",
  Xi = "[object Error]",
  Zi = "[object Map]",
  ea = "[object Number]",
  na = "[object RegExp]",
  ta = "[object Set]",
  ra = "[object String]",
  oa = "[object Symbol]",
  ia = "[object ArrayBuffer]",
  aa = "[object DataView]",
  $t = sn ? sn.prototype : void 0,
  Pn = $t ? $t.valueOf : void 0,
  sa = 1,
  ua = Object.prototype.hasOwnProperty,
  ca = 1,
  Ft = "[object Arguments]",
  Mt = "[object Array]",
  Xe = "[object Object]",
  qt = Object.prototype.hasOwnProperty;
function la(n, e, t, r, o, i) {
  var a = Q(n),
    s = Q(e),
    c = a ? Mt : Ne(n),
    l = s ? Mt : Ne(e),
    u = (c = c == Ft ? Xe : c) == Xe,
    f = (l = l == Ft ? Xe : l) == Xe,
    y = c == l;
  if (y && ze(n)) {
    if (!ze(e)) return !1;
    (a = !0), (u = !1);
  }
  if (y && !u)
    return (
      i || (i = new H()),
      a || Qn(n)
        ? Ct(n, e, t, r, o, i)
        : (function (b, d, O, w, j, I, T) {
            switch (O) {
              case aa:
                if (
                  b.byteLength != d.byteLength ||
                  b.byteOffset != d.byteOffset
                )
                  return !1;
                (b = b.buffer), (d = d.buffer);
              case ia:
                return !(
                  b.byteLength != d.byteLength || !I(new un(b), new un(d))
                );
              case Hi:
              case Qi:
              case ea:
                return lr(+b, +d);
              case Xi:
                return b.name == d.name && b.message == d.message;
              case na:
              case ra:
                return b == d + "";
              case Zi:
                var Y = Wi;
              case ta:
                var fe = w & Yi;
                if ((Y || (Y = nt), b.size != d.size && !fe)) return !1;
                var Z = T.get(b);
                if (Z) return Z == d;
                (w |= Ji), T.set(b, d);
                var V = Ct(Y(b), Y(d), w, j, I, T);
                return T.delete(b), V;
              case oa:
                if (Pn) return Pn.call(b) == Pn.call(d);
            }
            return !1;
          })(n, e, c, t, r, o, i)
    );
  if (!(t & ca)) {
    var g = u && qt.call(n, "__wrapped__"),
      v = f && qt.call(e, "__wrapped__");
    if (g || v) {
      var p = g ? n.value() : n,
        m = v ? e.value() : e;
      return i || (i = new H()), o(p, m, t, r, i);
    }
  }
  return (
    !!y &&
    (i || (i = new H()),
    (function (b, d, O, w, j, I) {
      var T = O & sa,
        Y = Cn(b),
        fe = Y.length;
      if (fe != Cn(d).length && !T) return !1;
      for (var Z = fe; Z--; ) {
        var V = Y[Z];
        if (!(T ? V in d : ua.call(d, V))) return !1;
      }
      var Je = I.get(b),
        h = I.get(d);
      if (Je && h) return Je == d && h == b;
      var N = !0;
      I.set(b, d), I.set(d, b);
      for (var K = T; ++Z < fe; ) {
        var W = b[(V = Y[Z])],
          J = d[V];
        if (w) var ee = T ? w(J, W, V, d, b, I) : w(W, J, V, b, d, I);
        if (!(ee === void 0 ? W === J || j(W, J, O, w, I) : ee)) {
          N = !1;
          break;
        }
        K || (K = V == "constructor");
      }
      if (N && !K) {
        var se = b.constructor,
          Ie = d.constructor;
        se == Ie ||
          !("constructor" in b) ||
          !("constructor" in d) ||
          (typeof se == "function" &&
            se instanceof se &&
            typeof Ie == "function" &&
            Ie instanceof Ie) ||
          (N = !1);
      }
      return I.delete(b), I.delete(d), N;
    })(n, e, t, r, o, i))
  );
}
function tt(n, e, t, r, o) {
  return (
    n === e ||
    (n == null || e == null || (!Ue(n) && !Ue(e))
      ? n != n && e != e
      : la(n, e, t, r, tt, o))
  );
}
var fa = 1,
  da = 2;
function _r(n) {
  return n == n && !pn(n);
}
function Lr(n, e) {
  return function (t) {
    return t != null && t[n] === e && (e !== void 0 || n in Object(t));
  };
}
function pa(n) {
  var e = (function (t) {
    for (var r = Re(t), o = r.length; o--; ) {
      var i = r[o],
        a = t[i];
      r[o] = [i, a, _r(a)];
    }
    return r;
  })(n);
  return e.length == 1 && e[0][2]
    ? Lr(e[0][0], e[0][1])
    : function (t) {
        return (
          t === n ||
          (function (r, o, i, a) {
            var s = i.length,
              c = s,
              l = !a;
            if (r == null) return !c;
            for (r = Object(r); s--; ) {
              var u = i[s];
              if (l && u[2] ? u[1] !== r[u[0]] : !(u[0] in r)) return !1;
            }
            for (; ++s < c; ) {
              var f = (u = i[s])[0],
                y = r[f],
                g = u[1];
              if (l && u[2]) {
                if (y === void 0 && !(f in r)) return !1;
              } else {
                var v = new H();
                if (a) var p = a(y, g, f, r, o, v);
                if (!(p === void 0 ? tt(g, y, fa | da, a, v) : p)) return !1;
              }
            }
            return !0;
          })(t, n, e)
        );
      };
}
function ba(n, e) {
  return n != null && e in Object(n);
}
var ma,
  ya = 1,
  ha = 2;
function ga(n, e) {
  return cr(n) && _r(e)
    ? Lr(Yn(n), e)
    : function (t) {
        var r = (function (o, i, a) {
          var s = o == null ? void 0 : Xn(o, i);
          return s === void 0 ? a : s;
        })(t, n);
        return r === void 0 && r === e
          ? (function (o, i) {
              return o != null && Do(o, i, ba);
            })(t, n)
          : tt(e, r, ya | ha);
      };
}
function va(n) {
  return cr(n)
    ? ((e = Yn(n)),
      function (t) {
        return t == null ? void 0 : t[e];
      })
    : (function (t) {
        return function (r) {
          return Xn(r, t);
        };
      })(n);
  var e;
}
function Br(n) {
  return typeof n == "function"
    ? n
    : n == null
    ? Hn
    : typeof n == "object"
    ? Q(n)
      ? ga(n[0], n[1])
      : pa(n)
    : va(n);
}
const wa = function (n, e, t) {
  for (var r = -1, o = Object(n), i = t(n), a = i.length; a--; ) {
    var s = i[ma ? a : ++r];
    if (e(o[s], s, o) === !1) break;
  }
  return n;
};
var Oa = (function (n, e) {
  return function (t, r) {
    if (t == null) return t;
    if (!We(t)) return n(t, r);
    for (
      var o = t.length, i = e ? o : -1, a = Object(t);
      (e ? i-- : ++i < o) && r(a[i], i, a) !== !1;

    );
    return t;
  };
})(function (n, e) {
  return n && wa(n, e, Re);
});
const Ia = Oa;
function ja(n, e, t) {
  for (var r = -1, o = n == null ? 0 : n.length; ++r < o; )
    if (t(e, n[r])) return !0;
  return !1;
}
function ka(n, e) {
  var t = -1,
    r = We(n) ? Array(n.length) : [];
  return (
    Ia(n, function (o, i, a) {
      r[++t] = e(o, i, a);
    }),
    r
  );
}
var Aa = "[object Map]",
  Sa = "[object Set]",
  Pa = Object.prototype.hasOwnProperty;
function Er(n) {
  if (n == null) return !0;
  if (
    We(n) &&
    (Q(n) ||
      typeof n == "string" ||
      typeof n.splice == "function" ||
      ze(n) ||
      Qn(n) ||
      ur(n))
  )
    return !n.length;
  var e = Ne(n);
  if (e == Aa || e == Sa) return !n.size;
  if (mn(n)) return !wr(n).length;
  for (var t in n) if (Pa.call(n, t)) return !1;
  return !0;
}
function xa(n, e) {
  if (n !== e) {
    var t = n !== void 0,
      r = n === null,
      o = n == n,
      i = Fe(n),
      a = e !== void 0,
      s = e === null,
      c = e == e,
      l = Fe(e);
    if (
      (!s && !l && !i && n > e) ||
      (i && a && c && !s && !l) ||
      (r && a && c) ||
      (!t && c) ||
      !o
    )
      return 1;
    if (
      (!r && !i && !l && n < e) ||
      (l && t && o && !r && !i) ||
      (s && t && o) ||
      (!a && o) ||
      !c
    )
      return -1;
  }
  return 0;
}
function Na(n, e, t) {
  e = e.length
    ? jn(e, function (o) {
        return Q(o)
          ? function (i) {
              return Xn(i, o.length === 1 ? o[0] : o);
            }
          : o;
      })
    : [Hn];
  var r = -1;
  return (
    (e = jn(e, yn(Br))),
    (function (o, i) {
      var a = o.length;
      for (o.sort(i); a--; ) o[a] = o[a].value;
      return o;
    })(
      ka(n, function (o, i, a) {
        return {
          criteria: jn(e, function (s) {
            return s(o);
          }),
          index: ++r,
          value: o,
        };
      }),
      function (o, i) {
        return (function (a, s, c) {
          for (
            var l = -1,
              u = a.criteria,
              f = s.criteria,
              y = u.length,
              g = c.length;
            ++l < y;

          ) {
            var v = xa(u[l], f[l]);
            if (v) return l >= g ? v : v * (c[l] == "desc" ? -1 : 1);
          }
          return a.index - s.index;
        })(o, i, t);
      }
    )
  );
}
function Ta(n, e, t, r) {
  return n == null
    ? []
    : (Q(e) || (e = e == null ? [] : [e]),
      Q((t = r ? void 0 : t)) || (t = t == null ? [] : [t]),
      Na(n, e, t));
}
var _a = 4294967294,
  La = Math.floor,
  Ba = Math.min,
  Ea = 2147483647;
function Da(n, e, t) {
  var r = 0,
    o = n == null ? r : n.length;
  if (typeof e == "number" && e == e && o <= Ea) {
    for (; r < o; ) {
      var i = (r + o) >>> 1,
        a = n[i];
      a !== null && !Fe(a) && (t ? a <= e : a < e) ? (r = i + 1) : (o = i);
    }
    return o;
  }
  return (function (s, c, l, u) {
    var f = 0,
      y = s == null ? 0 : s.length;
    if (y === 0) return 0;
    for (
      var g = (c = l(c)) != c, v = c === null, p = Fe(c), m = c === void 0;
      f < y;

    ) {
      var b = La((f + y) / 2),
        d = l(s[b]),
        O = d !== void 0,
        w = d === null,
        j = d == d,
        I = Fe(d);
      if (g) var T = u || j;
      else
        T = m
          ? j && (u || O)
          : v
          ? j && O && (u || !w)
          : p
          ? j && O && !w && (u || !I)
          : !w && !I && (u ? d <= c : d < c);
      T ? (f = b + 1) : (y = b);
    }
    return Ba(y, _a);
  })(n, e, Hn, t);
}
function Ut(n, e) {
  return Da(n, e);
}
const Ca =
  Ae && 1 / nt(new Ae([, -0]))[1] == 1 / 0
    ? function (n) {
        return new Ae(n);
      }
    : Qo;
var $a = 200;
function be(n, e) {
  return n && n.length
    ? (function (t, r, o) {
        var i = -1,
          a = Zo,
          s = t.length,
          c = !0,
          l = [],
          u = l;
        if (o) (c = !1), (a = ja);
        else if (s >= $a) {
          var f = r ? null : Ca(t);
          if (f) return nt(f);
          (c = !1), (a = Tr), (u = new qe());
        } else u = r ? [] : l;
        e: for (; ++i < s; ) {
          var y = t[i],
            g = r ? r(y) : y;
          if (((y = o || y !== 0 ? y : 0), c && g == g)) {
            for (var v = u.length; v--; ) if (u[v] === g) continue e;
            r && u.push(g), l.push(y);
          } else a(u, g, o) || (u !== l && u.push(g), l.push(y));
        }
        return l;
      })(n, Br(e))
    : [];
}
var Mn = function (n, e) {
  return (
    (Mn =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, r) {
          t.__proto__ = r;
        }) ||
      function (t, r) {
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
      }),
    Mn(n, e)
  );
};
function ae(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  function t() {
    this.constructor = n;
  }
  Mn(n, e),
    (n.prototype =
      e === null ? Object.create(e) : ((t.prototype = e.prototype), new t()));
}
function Us(n, e) {
  var t = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) &&
      e.indexOf(r) < 0 &&
      (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(n); o < r.length; o++)
      e.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, r[o]) &&
        (t[r[o]] = n[r[o]]);
  }
  return t;
}
function Fa(n, e, t, r) {
  return new (t || (t = Promise))(function (o, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (u) {
        i(u);
      }
    }
    function s(l) {
      try {
        c(r.throw(l));
      } catch (u) {
        i(u);
      }
    }
    function c(l) {
      var u;
      l.done
        ? o(l.value)
        : ((u = l.value),
          u instanceof t
            ? u
            : new t(function (f) {
                f(u);
              })).then(a, s);
    }
    c((r = r.apply(n, e || [])).next());
  });
}
function Dr(n, e) {
  var t,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (i = { next: s(0), throw: s(1), return: s(2) }),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function s(c) {
    return function (l) {
      return (function (u) {
        if (t) throw new TypeError("Generator is already executing.");
        for (; i && ((i = 0), u[0] && (a = 0)), a; )
          try {
            if (
              ((t = 1),
              r &&
                (o =
                  2 & u[0]
                    ? r.return
                    : u[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
                !(o = o.call(r, u[1])).done)
            )
              return o;
            switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
              case 0:
              case 1:
                o = u;
                break;
              case 4:
                return a.label++, { value: u[1], done: !1 };
              case 5:
                a.label++, (r = u[1]), (u = [0]);
                continue;
              case 7:
                (u = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  ((o = a.trys),
                  !(
                    (o = o.length > 0 && o[o.length - 1]) ||
                    (u[0] !== 6 && u[0] !== 2)
                  ))
                ) {
                  a = 0;
                  continue;
                }
                if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                  a.label = u[1];
                  break;
                }
                if (u[0] === 6 && a.label < o[1]) {
                  (a.label = o[1]), (o = u);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(u);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            u = e.call(n, a);
          } catch (f) {
            (u = [6, f]), (r = 0);
          } finally {
            t = o = 0;
          }
        if (5 & u[0]) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      })([c, l]);
    };
  }
}
function Ge(n) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && n[e],
    r = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function () {
        return (
          n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Te(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var r,
    o,
    i = t.call(n),
    a = [];
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function _e(n, e, t) {
  if (t || arguments.length === 2)
    for (var r, o = 0, i = e.length; o < i; o++)
      (!r && o in e) ||
        (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
  return n.concat(r || Array.prototype.slice.call(e));
}
function Se(n) {
  return this instanceof Se ? ((this.v = n), this) : new Se(n);
}
function Ma(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r,
    o = t.apply(n, e || []),
    i = [];
  return (
    (r = {}),
    a("next"),
    a("throw"),
    a("return", function (f) {
      return function (y) {
        return Promise.resolve(y).then(f, l);
      };
    }),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function a(f, y) {
    o[f] &&
      ((r[f] = function (g) {
        return new Promise(function (v, p) {
          i.push([f, g, v, p]) > 1 || s(f, g);
        });
      }),
      y && (r[f] = y(r[f])));
  }
  function s(f, y) {
    try {
      (g = o[f](y)).value instanceof Se
        ? Promise.resolve(g.value.v).then(c, l)
        : u(i[0][2], g);
    } catch (v) {
      u(i[0][3], v);
    }
    var g;
  }
  function c(f) {
    s("next", f);
  }
  function l(f) {
    s("throw", f);
  }
  function u(f, y) {
    f(y), i.shift(), i.length && s(i[0][0], i[0][1]);
  }
}
function qa(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e,
    t = n[Symbol.asyncIterator];
  return t
    ? t.call(n)
    : ((n = Ge(n)),
      (e = {}),
      r("next"),
      r("throw"),
      r("return"),
      (e[Symbol.asyncIterator] = function () {
        return this;
      }),
      e);
  function r(o) {
    e[o] =
      n[o] &&
      function (i) {
        return new Promise(function (a, s) {
          (function (c, l, u, f) {
            Promise.resolve(f).then(function (y) {
              c({ value: y, done: u });
            }, l);
          })(a, s, (i = n[o](i)).done, i.value);
        });
      };
  }
}
function L(n) {
  return typeof n == "function";
}
function Cr(n) {
  var e = n(function (t) {
    Error.call(t), (t.stack = new Error().stack);
  });
  return (
    (e.prototype = Object.create(Error.prototype)),
    (e.prototype.constructor = e),
    e
  );
}
var xn = Cr(function (n) {
  return function (e) {
    n(this),
      (this.message = e
        ? e.length +
          ` errors occurred during unsubscription:
` +
          e.map(function (t, r) {
            return r + 1 + ") " + t.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = e);
  };
});
function cn(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var Ye = (function () {
    function n(t) {
      (this.initialTeardown = t),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    var e;
    return (
      (n.prototype.unsubscribe = function () {
        var t, r, o, i, a;
        if (!this.closed) {
          this.closed = !0;
          var s = this._parentage;
          if (s)
            if (((this._parentage = null), Array.isArray(s)))
              try {
                for (var c = Ge(s), l = c.next(); !l.done; l = c.next())
                  l.value.remove(this);
              } catch (p) {
                t = { error: p };
              } finally {
                try {
                  l && !l.done && (r = c.return) && r.call(c);
                } finally {
                  if (t) throw t.error;
                }
              }
            else s.remove(this);
          var u = this.initialTeardown;
          if (L(u))
            try {
              u();
            } catch (p) {
              a = p instanceof xn ? p.errors : [p];
            }
          var f = this._finalizers;
          if (f) {
            this._finalizers = null;
            try {
              for (var y = Ge(f), g = y.next(); !g.done; g = y.next()) {
                var v = g.value;
                try {
                  zt(v);
                } catch (p) {
                  (a = a != null ? a : []),
                    p instanceof xn
                      ? (a = _e(_e([], Te(a)), Te(p.errors)))
                      : a.push(p);
                }
              }
            } catch (p) {
              o = { error: p };
            } finally {
              try {
                g && !g.done && (i = y.return) && i.call(y);
              } finally {
                if (o) throw o.error;
              }
            }
          }
          if (a) throw new xn(a);
        }
      }),
      (n.prototype.add = function (t) {
        var r;
        if (t && t !== this)
          if (this.closed) zt(t);
          else {
            if (t instanceof n) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers =
              (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
          }
      }),
      (n.prototype._hasParent = function (t) {
        var r = this._parentage;
        return r === t || (Array.isArray(r) && r.includes(t));
      }),
      (n.prototype._addParent = function (t) {
        var r = this._parentage;
        this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
      }),
      (n.prototype._removeParent = function (t) {
        var r = this._parentage;
        r === t ? (this._parentage = null) : Array.isArray(r) && cn(r, t);
      }),
      (n.prototype.remove = function (t) {
        var r = this._finalizers;
        r && cn(r, t), t instanceof n && t._removeParent(this);
      }),
      (n.EMPTY = (((e = new n()).closed = !0), e)),
      n
    );
  })(),
  $r = Ye.EMPTY;
function Fr(n) {
  return (
    n instanceof Ye ||
    (n && "closed" in n && L(n.remove) && L(n.add) && L(n.unsubscribe))
  );
}
function zt(n) {
  L(n) ? n() : n.unsubscribe();
}
var Mr = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  qn = {
    setTimeout: function (n, e) {
      for (var t = [], r = 2; r < arguments.length; r++)
        t[r - 2] = arguments[r];
      var o = qn.delegate;
      return o != null && o.setTimeout
        ? o.setTimeout.apply(o, _e([n, e], Te(t)))
        : setTimeout.apply(void 0, _e([n, e], Te(t)));
    },
    clearTimeout: function (n) {
      var e = qn.delegate;
      return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(n);
    },
    delegate: void 0,
  };
function qr(n) {
  qn.setTimeout(function () {
    throw n;
  });
}
function Un() {}
function tn(n) {
  n();
}
var rt = (function (n) {
    function e(t) {
      var r = n.call(this) || this;
      return (
        (r.isStopped = !1),
        t ? ((r.destination = t), Fr(t) && t.add(r)) : (r.destination = Ra),
        r
      );
    }
    return (
      ae(e, n),
      (e.create = function (t, r, o) {
        return new zn(t, r, o);
      }),
      (e.prototype.next = function (t) {
        this.isStopped || this._next(t);
      }),
      (e.prototype.error = function (t) {
        this.isStopped || ((this.isStopped = !0), this._error(t));
      }),
      (e.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          n.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (e.prototype._next = function (t) {
        this.destination.next(t);
      }),
      (e.prototype._error = function (t) {
        try {
          this.destination.error(t);
        } finally {
          this.unsubscribe();
        }
      }),
      (e.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      e
    );
  })(Ye),
  Ua = Function.prototype.bind;
function Nn(n, e) {
  return Ua.call(n, e);
}
var za = (function () {
    function n(e) {
      this.partialObserver = e;
    }
    return (
      (n.prototype.next = function (e) {
        var t = this.partialObserver;
        if (t.next)
          try {
            t.next(e);
          } catch (r) {
            Ze(r);
          }
      }),
      (n.prototype.error = function (e) {
        var t = this.partialObserver;
        if (t.error)
          try {
            t.error(e);
          } catch (r) {
            Ze(r);
          }
        else Ze(e);
      }),
      (n.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete)
          try {
            e.complete();
          } catch (t) {
            Ze(t);
          }
      }),
      n
    );
  })(),
  zn = (function (n) {
    function e(t, r, o) {
      var i,
        a,
        s = n.call(this) || this;
      return (
        L(t) || !t
          ? (i = {
              next: t != null ? t : void 0,
              error: r != null ? r : void 0,
              complete: o != null ? o : void 0,
            })
          : s && Mr.useDeprecatedNextContext
          ? (((a = Object.create(t)).unsubscribe = function () {
              return s.unsubscribe();
            }),
            (i = {
              next: t.next && Nn(t.next, a),
              error: t.error && Nn(t.error, a),
              complete: t.complete && Nn(t.complete, a),
            }))
          : (i = t),
        (s.destination = new za(i)),
        s
      );
    }
    return ae(e, n), e;
  })(rt);
function Ze(n) {
  qr(n);
}
var Ra = {
    closed: !0,
    next: Un,
    error: function (n) {
      throw n;
    },
    complete: Un,
  },
  ot = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function Ur(n) {
  return n;
}
var U = (function () {
  function n(e) {
    e && (this._subscribe = e);
  }
  return (
    (n.prototype.lift = function (e) {
      var t = new n();
      return (t.source = this), (t.operator = e), t;
    }),
    (n.prototype.subscribe = function (e, t, r) {
      var o,
        i = this,
        a =
          ((o = e) && o instanceof rt) ||
          ((function (s) {
            return s && L(s.next) && L(s.error) && L(s.complete);
          })(o) &&
            Fr(o))
            ? e
            : new zn(e, t, r);
      return (
        tn(function () {
          var s = i,
            c = s.operator,
            l = s.source;
          a.add(c ? c.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
        }),
        a
      );
    }),
    (n.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (t) {
        e.error(t);
      }
    }),
    (n.prototype.forEach = function (e, t) {
      var r = this;
      return new (t = Rt(t))(function (o, i) {
        var a = new zn({
          next: function (s) {
            try {
              e(s);
            } catch (c) {
              i(c), a.unsubscribe();
            }
          },
          error: i,
          complete: o,
        });
        r.subscribe(a);
      });
    }),
    (n.prototype._subscribe = function (e) {
      var t;
      return (t = this.source) === null || t === void 0
        ? void 0
        : t.subscribe(e);
    }),
    (n.prototype[ot] = function () {
      return this;
    }),
    (n.prototype.pipe = function () {
      for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return (
        (e = t).length === 0
          ? Ur
          : e.length === 1
          ? e[0]
          : function (o) {
              return e.reduce(function (i, a) {
                return a(i);
              }, o);
            }
      )(this);
    }),
    (n.prototype.toPromise = function (e) {
      var t = this;
      return new (e = Rt(e))(function (r, o) {
        var i;
        t.subscribe(
          function (a) {
            return (i = a);
          },
          function (a) {
            return o(a);
          },
          function () {
            return r(i);
          }
        );
      });
    }),
    (n.create = function (e) {
      return new n(e);
    }),
    n
  );
})();
function Rt(n) {
  var e;
  return (e = n != null ? n : Mr.Promise) !== null && e !== void 0
    ? e
    : Promise;
}
function Oe(n) {
  return function (e) {
    if (
      (function (t) {
        return L(t == null ? void 0 : t.lift);
      })(e)
    )
      return e.lift(function (t) {
        try {
          return n(t, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function me(n, e, t, r, o) {
  return new Ga(n, e, t, r, o);
}
var Ga = (function (n) {
    function e(t, r, o, i, a, s) {
      var c = n.call(this, t) || this;
      return (
        (c.onFinalize = a),
        (c.shouldUnsubscribe = s),
        (c._next = r
          ? function (l) {
              try {
                r(l);
              } catch (u) {
                t.error(u);
              }
            }
          : n.prototype._next),
        (c._error = i
          ? function (l) {
              try {
                i(l);
              } catch (u) {
                t.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : n.prototype._error),
        (c._complete = o
          ? function () {
              try {
                o();
              } catch (l) {
                t.error(l);
              } finally {
                this.unsubscribe();
              }
            }
          : n.prototype._complete),
        c
      );
    }
    return (
      ae(e, n),
      (e.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          n.prototype.unsubscribe.call(this),
            !r &&
              ((t = this.onFinalize) === null || t === void 0 || t.call(this));
        }
      }),
      e
    );
  })(rt),
  Va = Cr(function (n) {
    return function () {
      n(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    };
  }),
  it = (function (n) {
    function e() {
      var t = n.call(this) || this;
      return (
        (t.closed = !1),
        (t.currentObservers = null),
        (t.observers = []),
        (t.isStopped = !1),
        (t.hasError = !1),
        (t.thrownError = null),
        t
      );
    }
    return (
      ae(e, n),
      (e.prototype.lift = function (t) {
        var r = new Gt(this, this);
        return (r.operator = t), r;
      }),
      (e.prototype._throwIfClosed = function () {
        if (this.closed) throw new Va();
      }),
      (e.prototype.next = function (t) {
        var r = this;
        tn(function () {
          var o, i;
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.currentObservers ||
              (r.currentObservers = Array.from(r.observers));
            try {
              for (
                var a = Ge(r.currentObservers), s = a.next();
                !s.done;
                s = a.next()
              )
                s.value.next(t);
            } catch (c) {
              o = { error: c };
            } finally {
              try {
                s && !s.done && (i = a.return) && i.call(a);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        });
      }),
      (e.prototype.error = function (t) {
        var r = this;
        tn(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            (r.hasError = r.isStopped = !0), (r.thrownError = t);
            for (var o = r.observers; o.length; ) o.shift().error(t);
          }
        });
      }),
      (e.prototype.complete = function () {
        var t = this;
        tn(function () {
          if ((t._throwIfClosed(), !t.isStopped)) {
            t.isStopped = !0;
            for (var r = t.observers; r.length; ) r.shift().complete();
          }
        });
      }),
      (e.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(e.prototype, "observed", {
        get: function () {
          var t;
          return (
            ((t = this.observers) === null || t === void 0
              ? void 0
              : t.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._trySubscribe = function (t) {
        return this._throwIfClosed(), n.prototype._trySubscribe.call(this, t);
      }),
      (e.prototype._subscribe = function (t) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(t),
          this._innerSubscribe(t)
        );
      }),
      (e.prototype._innerSubscribe = function (t) {
        var r = this,
          o = this,
          i = o.hasError,
          a = o.isStopped,
          s = o.observers;
        return i || a
          ? $r
          : ((this.currentObservers = null),
            s.push(t),
            new Ye(function () {
              (r.currentObservers = null), cn(s, t);
            }));
      }),
      (e.prototype._checkFinalizedStatuses = function (t) {
        var r = this,
          o = r.hasError,
          i = r.thrownError,
          a = r.isStopped;
        o ? t.error(i) : a && t.complete();
      }),
      (e.prototype.asObservable = function () {
        var t = new U();
        return (t.source = this), t;
      }),
      (e.create = function (t, r) {
        return new Gt(t, r);
      }),
      e
    );
  })(U),
  Gt = (function (n) {
    function e(t, r) {
      var o = n.call(this) || this;
      return (o.destination = t), (o.source = r), o;
    }
    return (
      ae(e, n),
      (e.prototype.next = function (t) {
        var r, o;
        (o =
          (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
          null ||
          o === void 0 ||
          o.call(r, t);
      }),
      (e.prototype.error = function (t) {
        var r, o;
        (o =
          (r = this.destination) === null || r === void 0
            ? void 0
            : r.error) === null ||
          o === void 0 ||
          o.call(r, t);
      }),
      (e.prototype.complete = function () {
        var t, r;
        (r =
          (t = this.destination) === null || t === void 0
            ? void 0
            : t.complete) === null ||
          r === void 0 ||
          r.call(t);
      }),
      (e.prototype._subscribe = function (t) {
        var r, o;
        return (o =
          (r = this.source) === null || r === void 0
            ? void 0
            : r.subscribe(t)) !== null && o !== void 0
          ? o
          : $r;
      }),
      e
    );
  })(it),
  C = (function (n) {
    function e(t) {
      var r = n.call(this) || this;
      return (r._value = t), r;
    }
    return (
      ae(e, n),
      Object.defineProperty(e.prototype, "value", {
        get: function () {
          return this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._subscribe = function (t) {
        var r = n.prototype._subscribe.call(this, t);
        return !r.closed && t.next(this._value), r;
      }),
      (e.prototype.getValue = function () {
        var t = this,
          r = t.hasError,
          o = t.thrownError,
          i = t._value;
        if (r) throw o;
        return this._throwIfClosed(), i;
      }),
      (e.prototype.next = function (t) {
        n.prototype.next.call(this, (this._value = t));
      }),
      e
    );
  })(it),
  zr = {
    now: function () {
      return (zr.delegate || Date).now();
    },
    delegate: void 0,
  },
  Ka = (function (n) {
    function e(t, r) {
      return n.call(this) || this;
    }
    return (
      ae(e, n),
      (e.prototype.schedule = function (t, r) {
        return this;
      }),
      e
    );
  })(Ye),
  ln = {
    setInterval: function (n, e) {
      for (var t = [], r = 2; r < arguments.length; r++)
        t[r - 2] = arguments[r];
      var o = ln.delegate;
      return o != null && o.setInterval
        ? o.setInterval.apply(o, _e([n, e], Te(t)))
        : setInterval.apply(void 0, _e([n, e], Te(t)));
    },
    clearInterval: function (n) {
      var e = ln.delegate;
      return ((e == null ? void 0 : e.clearInterval) || clearInterval)(n);
    },
    delegate: void 0,
  },
  Wa = (function (n) {
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return (o.scheduler = t), (o.work = r), (o.pending = !1), o;
    }
    return (
      ae(e, n),
      (e.prototype.schedule = function (t, r) {
        var o;
        if ((r === void 0 && (r = 0), this.closed)) return this;
        this.state = t;
        var i = this.id,
          a = this.scheduler;
        return (
          i != null && (this.id = this.recycleAsyncId(a, i, r)),
          (this.pending = !0),
          (this.delay = r),
          (this.id =
            (o = this.id) !== null && o !== void 0
              ? o
              : this.requestAsyncId(a, this.id, r)),
          this
        );
      }),
      (e.prototype.requestAsyncId = function (t, r, o) {
        return (
          o === void 0 && (o = 0), ln.setInterval(t.flush.bind(t, this), o)
        );
      }),
      (e.prototype.recycleAsyncId = function (t, r, o) {
        if (
          (o === void 0 && (o = 0),
          o != null && this.delay === o && this.pending === !1)
        )
          return r;
        r != null && ln.clearInterval(r);
      }),
      (e.prototype.execute = function (t, r) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var o = this._execute(t, r);
        if (o) return o;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (e.prototype._execute = function (t, r) {
        var o,
          i = !1;
        try {
          this.work(t);
        } catch (a) {
          (i = !0), (o = a || new Error("Scheduled action threw falsy error"));
        }
        if (i) return this.unsubscribe(), o;
      }),
      (e.prototype.unsubscribe = function () {
        if (!this.closed) {
          var t = this.id,
            r = this.scheduler,
            o = r.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            cn(o, this),
            t != null && (this.id = this.recycleAsyncId(r, t, null)),
            (this.delay = null),
            n.prototype.unsubscribe.call(this);
        }
      }),
      e
    );
  })(Ka),
  Vt = (function () {
    function n(e, t) {
      t === void 0 && (t = n.now),
        (this.schedulerActionCtor = e),
        (this.now = t);
    }
    return (
      (n.prototype.schedule = function (e, t, r) {
        return (
          t === void 0 && (t = 0),
          new this.schedulerActionCtor(this, e).schedule(r, t)
        );
      }),
      (n.now = zr.now),
      n
    );
  })(),
  Rr = new ((function (n) {
    function e(t, r) {
      r === void 0 && (r = Vt.now);
      var o = n.call(this, t, r) || this;
      return (o.actions = []), (o._active = !1), o;
    }
    return (
      ae(e, n),
      (e.prototype.flush = function (t) {
        var r = this.actions;
        if (this._active) r.push(t);
        else {
          var o;
          this._active = !0;
          do if ((o = t.execute(t.state, t.delay))) break;
          while ((t = r.shift()));
          if (((this._active = !1), o)) {
            for (; (t = r.shift()); ) t.unsubscribe();
            throw o;
          }
        }
      }),
      e
    );
  })(Vt))(Wa),
  Ya = Rr,
  Ja = new U(function (n) {
    return n.complete();
  });
function Gr(n) {
  return n && L(n.schedule);
}
function Vr(n) {
  return n[n.length - 1];
}
function zs(n) {
  return L(Vr(n)) ? n.pop() : void 0;
}
function Kr(n) {
  return Gr(Vr(n)) ? n.pop() : void 0;
}
var Wr = function (n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function Yr(n) {
  return L(n == null ? void 0 : n.then);
}
function Jr(n) {
  return L(n[ot]);
}
function Hr(n) {
  return (
    Symbol.asyncIterator && L(n == null ? void 0 : n[Symbol.asyncIterator])
  );
}
function Qr(n) {
  return new TypeError(
    "You provided " +
      (n !== null && typeof n == "object"
        ? "an invalid object"
        : "'" + n + "'") +
      " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
  );
}
var Xr =
  typeof Symbol == "function" && Symbol.iterator
    ? Symbol.iterator
    : "@@iterator";
function Zr(n) {
  return L(n == null ? void 0 : n[Xr]);
}
function eo(n) {
  return Ma(this, arguments, function () {
    var e, t, r;
    return Dr(this, function (o) {
      switch (o.label) {
        case 0:
          (e = n.getReader()), (o.label = 1);
        case 1:
          o.trys.push([1, , 9, 10]), (o.label = 2);
        case 2:
          return [4, Se(e.read())];
        case 3:
          return (
            (t = o.sent()), (r = t.value), t.done ? [4, Se(void 0)] : [3, 5]
          );
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Se(r)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return e.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function no(n) {
  return L(n == null ? void 0 : n.getReader);
}
function Le(n) {
  if (n instanceof U) return n;
  if (n != null) {
    if (Jr(n))
      return (
        (r = n),
        new U(function (o) {
          var i = r[ot]();
          if (L(i.subscribe)) return i.subscribe(o);
          throw new TypeError(
            "Provided object does not correctly implement Symbol.observable"
          );
        })
      );
    if (Wr(n))
      return (
        (t = n),
        new U(function (o) {
          for (var i = 0; i < t.length && !o.closed; i++) o.next(t[i]);
          o.complete();
        })
      );
    if (Yr(n))
      return (function (o) {
        return new U(function (i) {
          o.then(
            function (a) {
              i.closed || (i.next(a), i.complete());
            },
            function (a) {
              return i.error(a);
            }
          ).then(null, qr);
        });
      })(n);
    if (Hr(n)) return Kt(n);
    if (Zr(n))
      return (
        (e = n),
        new U(function (o) {
          var i, a;
          try {
            for (var s = Ge(e), c = s.next(); !c.done; c = s.next()) {
              var l = c.value;
              if ((o.next(l), o.closed)) return;
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              c && !c.done && (a = s.return) && a.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          o.complete();
        })
      );
    if (no(n)) return Kt(eo(n));
  }
  var e, t, r;
  throw Qr(n);
}
function Kt(n) {
  return new U(function (e) {
    (function (t, r) {
      var o, i, a, s;
      return Fa(this, void 0, void 0, function () {
        var c, l;
        return Dr(this, function (u) {
          switch (u.label) {
            case 0:
              u.trys.push([0, 5, 6, 11]), (o = qa(t)), (u.label = 1);
            case 1:
              return [4, o.next()];
            case 2:
              if ((i = u.sent()).done) return [3, 4];
              if (((c = i.value), r.next(c), r.closed)) return [2];
              u.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              return (l = u.sent()), (a = { error: l }), [3, 11];
            case 6:
              return (
                u.trys.push([6, , 9, 10]),
                i && !i.done && (s = o.return) ? [4, s.call(o)] : [3, 8]
              );
            case 7:
              u.sent(), (u.label = 8);
            case 8:
              return [3, 10];
            case 9:
              if (a) throw a.error;
              return [7];
            case 10:
              return [7];
            case 11:
              return r.complete(), [2];
          }
        });
      });
    })(n, e).catch(function (t) {
      return e.error(t);
    });
  });
}
function le(n, e, t, r, o) {
  r === void 0 && (r = 0), o === void 0 && (o = !1);
  var i = e.schedule(function () {
    t(), o ? n.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((n.add(i), !o)) return i;
}
function Wt(n, e) {
  return (
    e === void 0 && (e = 0),
    Oe(function (t, r) {
      t.subscribe(
        me(
          r,
          function (o) {
            return le(
              r,
              n,
              function () {
                return r.next(o);
              },
              e
            );
          },
          function () {
            return le(
              r,
              n,
              function () {
                return r.complete();
              },
              e
            );
          },
          function (o) {
            return le(
              r,
              n,
              function () {
                return r.error(o);
              },
              e
            );
          }
        )
      );
    })
  );
}
function Yt(n, e) {
  return (
    e === void 0 && (e = 0),
    Oe(function (t, r) {
      r.add(
        n.schedule(function () {
          return t.subscribe(r);
        }, e)
      );
    })
  );
}
function Jt(n, e) {
  if (!n) throw new Error("Iterable cannot be null");
  return new U(function (t) {
    le(t, e, function () {
      var r = n[Symbol.asyncIterator]();
      le(
        t,
        e,
        function () {
          r.next().then(function (o) {
            o.done ? t.complete() : t.next(o.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function Ha(n, e) {
  if (n != null) {
    if (Jr(n))
      return (function (t, r) {
        return Le(t).pipe(Yt(r), Wt(r));
      })(n, e);
    if (Wr(n))
      return (function (t, r) {
        return new U(function (o) {
          var i = 0;
          return r.schedule(function () {
            i === t.length
              ? o.complete()
              : (o.next(t[i++]), o.closed || this.schedule());
          });
        });
      })(n, e);
    if (Yr(n))
      return (function (t, r) {
        return Le(t).pipe(Yt(r), Wt(r));
      })(n, e);
    if (Hr(n)) return Jt(n, e);
    if (Zr(n))
      return (function (t, r) {
        return new U(function (o) {
          var i;
          return (
            le(o, r, function () {
              (i = t[Xr]()),
                le(
                  o,
                  r,
                  function () {
                    var a, s, c;
                    try {
                      (s = (a = i.next()).value), (c = a.done);
                    } catch (l) {
                      return void o.error(l);
                    }
                    c ? o.complete() : o.next(s);
                  },
                  0,
                  !0
                );
            }),
            function () {
              return L(i == null ? void 0 : i.return) && i.return();
            }
          );
        });
      })(n, e);
    if (no(n))
      return (function (t, r) {
        return Jt(eo(t), r);
      })(n, e);
  }
  throw Qr(n);
}
function at(n, e) {
  return e ? Ha(n, e) : Le(n);
}
function Ht() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  return at(n, Kr(n));
}
function to(n, e) {
  return Oe(function (t, r) {
    var o = 0;
    t.subscribe(
      me(r, function (i) {
        r.next(n.call(e, i, o++));
      })
    );
  });
}
function hn(n, e, t) {
  return (
    t === void 0 && (t = 1 / 0),
    L(e)
      ? hn(function (r, o) {
          return to(function (i, a) {
            return e(r, i, o, a);
          })(Le(n(r, o)));
        }, t)
      : (typeof e == "number" && (t = e),
        Oe(function (r, o) {
          return (function (i, a, s, c, l, u, f, y) {
            var g = [],
              v = 0,
              p = 0,
              m = !1,
              b = function () {
                !m || g.length || v || a.complete();
              },
              d = function (w) {
                return v < c ? O(w) : g.push(w);
              },
              O = function (w) {
                u && a.next(w), v++;
                var j = !1;
                Le(s(w, p++)).subscribe(
                  me(
                    a,
                    function (I) {
                      l == null || l(I), u ? d(I) : a.next(I);
                    },
                    function () {
                      j = !0;
                    },
                    void 0,
                    function () {
                      if (j)
                        try {
                          v--;
                          for (
                            var I = function () {
                              var T = g.shift();
                              f
                                ? le(a, f, function () {
                                    return O(T);
                                  })
                                : O(T);
                            };
                            g.length && v < c;

                          )
                            I();
                          b();
                        } catch (T) {
                          a.error(T);
                        }
                    }
                  )
                );
              };
            return (
              i.subscribe(
                me(a, d, function () {
                  (m = !0), b();
                })
              ),
              function () {
                y == null || y();
              }
            );
          })(r, o, n, t);
        }))
  );
}
function Qa() {
  return (n = 1) === void 0 && (n = 1 / 0), hn(Ur, n);
  var n;
}
function Xa() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  return Qa()(at(n, Kr(n)));
}
function Za(n, e, t) {
  n === void 0 && (n = 0), t === void 0 && (t = Ya);
  var r = -1;
  return (
    e != null && (Gr(e) ? (t = e) : (r = e)),
    new U(function (o) {
      var i,
        a = (i = n) instanceof Date && !isNaN(i) ? +n - t.now() : n;
      a < 0 && (a = 0);
      var s = 0;
      return t.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, a);
    })
  );
}
function Rn(n, e) {
  return Oe(function (t, r) {
    var o = 0;
    t.subscribe(
      me(r, function (i) {
        return n.call(e, i, o++) && r.next(i);
      })
    );
  });
}
function Gn(n) {
  return n <= 0
    ? function () {
        return Ja;
      }
    : Oe(function (e, t) {
        var r = 0;
        e.subscribe(
          me(t, function (o) {
            ++r <= n && (t.next(o), n <= r && t.complete());
          })
        );
      });
}
function st(n, e) {
  return e
    ? function (t) {
        return Xa(
          e.pipe(
            Gn(1),
            Oe(function (r, o) {
              r.subscribe(me(o, Un));
            })
          ),
          t.pipe(st(n))
        );
      }
    : hn(function (t, r) {
        return Le(n(t, r)).pipe(
          Gn(1),
          (function (o) {
            return to(function () {
              return o;
            });
          })(t)
        );
      });
}
function es(n, e) {
  e === void 0 && (e = Rr);
  var t = Za(n, e);
  return st(function () {
    return t;
  });
}
var $e = ((n) => (
  (n[(n.disconnect = 0)] = "disconnect"),
  (n[(n.connecting = 1)] = "connecting"),
  (n[(n.connected = 2)] = "connected"),
  n
))($e || {});
const ro = {
  isTurboEnable: !1,
  bgSoundEnable: !1,
  soundEnable: !0,
  hotKeysEnable: !1,
};
class gn {
  constructor(e, t) {
    (this.connection$ = new C($e.disconnect)),
      (this.isListening = !1),
      (this.rtp$ = new C(0.99)),
      (this.option$ = new C({})),
      (this.onConnect = () => {
        this.connection$.next($e.connected);
      }),
      (this.onDisconnect = () => {
        this.connection$.next($e.disconnect);
      }),
      (this.onConnecting = () => {
        this.connection$.next($e.connecting);
      });
    const r = (function (o, i) {
      return i
        ? _(k(k({}, o), i), {
            rtp: Number(i.rtp),
            namespace: i.gameSocketNameSpace,
          })
        : o;
    })(e, t);
    this.option$.next(r),
      this.rtp$.next(Number(r.rtp || 0.99)),
      (this.socket = E(r.namespace)),
      (this.request = E().socketRequestBind(this.socket)),
      (this.gameName = e.name),
      this.socket.on("connect", this.onConnect),
      this.socket.on("reconnecting", this.onConnecting),
      this.socket.on("disconnect", this.onDisconnect),
      this.initSetting();
  }
  initSetting() {
    localStorage.getItem(`ns-${this.gameName}`) ||
      localStorage.setItem(`ns-${this.gameName}`, JSON.stringify(ro));
  }
  getScriptId(e) {
    return F(this, null, function* () {
      return yield oe().post("/game/manage/scripts/log/", {
        gameName: this.config.name,
        content: e,
      });
    });
  }
  online() {
    return (
      this.socket.connect(),
      this.init(),
      () => {
        this.socket.disconnect();
      }
    );
  }
}
const ns = (() => {
  const n = {};
  return function (e, ...t) {
    if (n[e.alias]) return n[e.alias];
    const r = new e(...t);
    return (n[e.name] = r), r;
  };
})();
class Qt extends gn {
  constructor(e, t) {
    super(e, t),
      (this.oddsScale = 1e4),
      (this.amountScale = 1e4),
      (this.isWatching = !1),
      (this.connection = this.connection$.asObservable());
  }
  init() {}
}
const M = $.Reader,
  de = $.Writer,
  q = $.util,
  x = $.roots.singleGame || ($.roots.singleGame = {});
(x.Bet = (() => {
  function n(e) {
    if (e)
      for (let t = Object.keys(e), r = 0; r < t.length; ++r)
        e[t[r]] != null && (this[t[r]] = e[t[r]]);
  }
  return (
    (n.prototype.currencyName = ""),
    (n.prototype.betAmount = ""),
    (n.prototype.betValue = q.newBuffer([])),
    (n.prototype.scriptId = 0),
    (n.prototype.frontgroundId = 0),
    (n.encode = function (e, t) {
      return (
        t || (t = de.create()),
        e.currencyName != null &&
          Object.hasOwnProperty.call(e, "currencyName") &&
          t.uint32(10).string(e.currencyName),
        e.betAmount != null &&
          Object.hasOwnProperty.call(e, "betAmount") &&
          t.uint32(18).string(e.betAmount),
        e.betValue != null &&
          Object.hasOwnProperty.call(e, "betValue") &&
          t.uint32(26).bytes(e.betValue),
        e.scriptId != null &&
          Object.hasOwnProperty.call(e, "scriptId") &&
          t.uint32(32).sint32(e.scriptId),
        e.frontgroundId != null &&
          Object.hasOwnProperty.call(e, "frontgroundId") &&
          t.uint32(120).sint32(e.frontgroundId),
        t
      );
    }),
    (n.decode = function (e, t) {
      e instanceof M || (e = M.create(e));
      let r = t === void 0 ? e.len : e.pos + t,
        o = new x.Bet();
      for (; e.pos < r; ) {
        let i = e.uint32();
        switch (i >>> 3) {
          case 1:
            o.currencyName = e.string();
            break;
          case 2:
            o.betAmount = e.string();
            break;
          case 3:
            o.betValue = e.bytes();
            break;
          case 4:
            o.scriptId = e.sint32();
            break;
          case 15:
            o.frontgroundId = e.sint32();
            break;
          default:
            e.skipType(7 & i);
        }
      }
      return o;
    }),
    n
  );
})()),
  (x.BetResult = (() => {
    function n(e) {
      if (e)
        for (let t = Object.keys(e), r = 0; r < t.length; ++r)
          e[t[r]] != null && (this[t[r]] = e[t[r]]);
    }
    return (
      (n.prototype.betId = ""),
      (n.prototype.result = 0),
      (n.prototype.odds = 0),
      (n.prototype.nonce = 0),
      (n.prototype.gameValue = q.newBuffer([])),
      (n.prototype.betTime = q.Long ? q.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.currencyName = ""),
      (n.prototype.betAmount = ""),
      (n.prototype.winAmount = ""),
      (n.prototype.betIdTmp = ""),
      (n.prototype.betValue = q.newBuffer([])),
      (n.prototype.distributeId = ""),
      (n.encode = function (e, t) {
        return (
          t || (t = de.create()),
          e.betId != null &&
            Object.hasOwnProperty.call(e, "betId") &&
            t.uint32(10).string(e.betId),
          e.result != null &&
            Object.hasOwnProperty.call(e, "result") &&
            t.uint32(16).sint32(e.result),
          e.odds != null &&
            Object.hasOwnProperty.call(e, "odds") &&
            t.uint32(24).sint32(e.odds),
          e.nonce != null &&
            Object.hasOwnProperty.call(e, "nonce") &&
            t.uint32(32).sint32(e.nonce),
          e.gameValue != null &&
            Object.hasOwnProperty.call(e, "gameValue") &&
            t.uint32(42).bytes(e.gameValue),
          e.betTime != null &&
            Object.hasOwnProperty.call(e, "betTime") &&
            t.uint32(48).sint64(e.betTime),
          e.currencyName != null &&
            Object.hasOwnProperty.call(e, "currencyName") &&
            t.uint32(58).string(e.currencyName),
          e.betAmount != null &&
            Object.hasOwnProperty.call(e, "betAmount") &&
            t.uint32(66).string(e.betAmount),
          e.winAmount != null &&
            Object.hasOwnProperty.call(e, "winAmount") &&
            t.uint32(74).string(e.winAmount),
          e.betIdTmp != null &&
            Object.hasOwnProperty.call(e, "betIdTmp") &&
            t.uint32(82).string(e.betIdTmp),
          e.betValue != null &&
            Object.hasOwnProperty.call(e, "betValue") &&
            t.uint32(90).bytes(e.betValue),
          e.distributeId != null &&
            Object.hasOwnProperty.call(e, "distributeId") &&
            t.uint32(98).string(e.distributeId),
          t
        );
      }),
      (n.decode = function (e, t) {
        e instanceof M || (e = M.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
          o = new x.BetResult();
        for (; e.pos < r; ) {
          let i = e.uint32();
          switch (i >>> 3) {
            case 1:
              o.betId = e.string();
              break;
            case 2:
              o.result = e.sint32();
              break;
            case 3:
              o.odds = e.sint32();
              break;
            case 4:
              o.nonce = e.sint32();
              break;
            case 5:
              o.gameValue = e.bytes();
              break;
            case 6:
              o.betTime = e.sint64();
              break;
            case 7:
              o.currencyName = e.string();
              break;
            case 8:
              o.betAmount = e.string();
              break;
            case 9:
              o.winAmount = e.string();
              break;
            case 10:
              o.betIdTmp = e.string();
              break;
            case 11:
              o.betValue = e.bytes();
              break;
            case 12:
              o.distributeId = e.string();
              break;
            default:
              e.skipType(7 & i);
          }
        }
        return o;
      }),
      n
    );
  })()),
  (x.BetInfo = (() => {
    function n(e) {
      if (((this.infos = []), e))
        for (let t = Object.keys(e), r = 0; r < t.length; ++r)
          e[t[r]] != null && (this[t[r]] = e[t[r]]);
    }
    return (
      (n.prototype.infos = q.emptyArray),
      (n.encode = function (e, t) {
        if ((t || (t = de.create()), e.infos != null && e.infos.length))
          for (let r = 0; r < e.infos.length; ++r)
            x.BetInfo.Info.encode(e.infos[r], t.uint32(10).fork()).ldelim();
        return t;
      }),
      (n.decode = function (e, t) {
        e instanceof M || (e = M.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
          o = new x.BetInfo();
        for (; e.pos < r; ) {
          let i = e.uint32();
          i >>> 3 == 1
            ? ((o.infos && o.infos.length) || (o.infos = []),
              o.infos.push(x.BetInfo.Info.decode(e, e.uint32())))
            : e.skipType(7 & i);
        }
        return o;
      }),
      (n.Info = (function () {
        function e(t) {
          if (t)
            for (let r = Object.keys(t), o = 0; o < r.length; ++o)
              t[r[o]] != null && (this[r[o]] = t[r[o]]);
        }
        return (
          (e.prototype.currencyName = ""),
          (e.prototype.maxBetAmount = ""),
          (e.prototype.minBetAmount = ""),
          (e.prototype.maxProfitAmount = ""),
          (e.encode = function (t, r) {
            return (
              r || (r = de.create()),
              t.currencyName != null &&
                Object.hasOwnProperty.call(t, "currencyName") &&
                r.uint32(10).string(t.currencyName),
              t.maxBetAmount != null &&
                Object.hasOwnProperty.call(t, "maxBetAmount") &&
                r.uint32(18).string(t.maxBetAmount),
              t.minBetAmount != null &&
                Object.hasOwnProperty.call(t, "minBetAmount") &&
                r.uint32(26).string(t.minBetAmount),
              t.maxProfitAmount != null &&
                Object.hasOwnProperty.call(t, "maxProfitAmount") &&
                r.uint32(34).string(t.maxProfitAmount),
              r
            );
          }),
          (e.decode = function (t, r) {
            t instanceof M || (t = M.create(t));
            let o = r === void 0 ? t.len : t.pos + r,
              i = new x.BetInfo.Info();
            for (; t.pos < o; ) {
              let a = t.uint32();
              switch (a >>> 3) {
                case 1:
                  i.currencyName = t.string();
                  break;
                case 2:
                  i.maxBetAmount = t.string();
                  break;
                case 3:
                  i.minBetAmount = t.string();
                  break;
                case 4:
                  i.maxProfitAmount = t.string();
                  break;
                default:
                  t.skipType(7 & a);
              }
            }
            return i;
          }),
          e
        );
      })()),
      n
    );
  })()),
  (x.GameConfig = (() => {
    function n(e) {
      if (e)
        for (let t = Object.keys(e), r = 0; r < t.length; ++r)
          e[t[r]] != null && (this[t[r]] = e[t[r]]);
    }
    return (
      (n.prototype.gameName = ""),
      (n.prototype.gameSocketNameSpace = ""),
      (n.prototype.version = 0),
      (n.prototype.rtp = ""),
      (n.prototype.payTable = ""),
      (n.prototype.isSingle = !1),
      (n.prototype.isDelete = !1),
      (n.encode = function (e, t) {
        return (
          t || (t = de.create()),
          e.gameName != null &&
            Object.hasOwnProperty.call(e, "gameName") &&
            t.uint32(10).string(e.gameName),
          e.gameSocketNameSpace != null &&
            Object.hasOwnProperty.call(e, "gameSocketNameSpace") &&
            t.uint32(18).string(e.gameSocketNameSpace),
          e.version != null &&
            Object.hasOwnProperty.call(e, "version") &&
            t.uint32(24).sint32(e.version),
          e.rtp != null &&
            Object.hasOwnProperty.call(e, "rtp") &&
            t.uint32(34).string(e.rtp),
          e.payTable != null &&
            Object.hasOwnProperty.call(e, "payTable") &&
            t.uint32(42).string(e.payTable),
          e.isSingle != null &&
            Object.hasOwnProperty.call(e, "isSingle") &&
            t.uint32(48).bool(e.isSingle),
          e.isDelete != null &&
            Object.hasOwnProperty.call(e, "isDelete") &&
            t.uint32(56).bool(e.isDelete),
          t
        );
      }),
      (n.decode = function (e, t) {
        e instanceof M || (e = M.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
          o = new x.GameConfig();
        for (; e.pos < r; ) {
          let i = e.uint32();
          switch (i >>> 3) {
            case 1:
              o.gameName = e.string();
              break;
            case 2:
              o.gameSocketNameSpace = e.string();
              break;
            case 3:
              o.version = e.sint32();
              break;
            case 4:
              o.rtp = e.string();
              break;
            case 5:
              o.payTable = e.string();
              break;
            case 6:
              o.isSingle = e.bool();
              break;
            case 7:
              o.isDelete = e.bool();
              break;
            default:
              e.skipType(7 & i);
          }
        }
        return o;
      }),
      n
    );
  })()),
  (x.Init = (() => {
    function n(e) {
      if (((this.betInfo = []), (this.gameConfig = []), e))
        for (let t = Object.keys(e), r = 0; r < t.length; ++r)
          e[t[r]] != null && (this[t[r]] = e[t[r]]);
    }
    return (
      (n.prototype.betInfo = q.emptyArray),
      (n.prototype.gameConfig = q.emptyArray),
      (n.encode = function (e, t) {
        if ((t || (t = de.create()), e.betInfo != null && e.betInfo.length))
          for (let r = 0; r < e.betInfo.length; ++r)
            x.BetInfo.Info.encode(e.betInfo[r], t.uint32(10).fork()).ldelim();
        if (e.gameConfig != null && e.gameConfig.length)
          for (let r = 0; r < e.gameConfig.length; ++r)
            x.GameConfig.encode(e.gameConfig[r], t.uint32(18).fork()).ldelim();
        return t;
      }),
      (n.decode = function (e, t) {
        e instanceof M || (e = M.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
          o = new x.Init();
        for (; e.pos < r; ) {
          let i = e.uint32();
          switch (i >>> 3) {
            case 1:
              (o.betInfo && o.betInfo.length) || (o.betInfo = []),
                o.betInfo.push(x.BetInfo.Info.decode(e, e.uint32()));
              break;
            case 2:
              (o.gameConfig && o.gameConfig.length) || (o.gameConfig = []),
                o.gameConfig.push(x.GameConfig.decode(e, e.uint32()));
              break;
            default:
              e.skipType(7 & i);
          }
        }
        return o;
      }),
      n
    );
  })()),
  (x.BetLog = (() => {
    function n(e) {
      if (e)
        for (let t = Object.keys(e), r = 0; r < t.length; ++r)
          e[t[r]] != null && (this[t[r]] = e[t[r]]);
    }
    return (
      (n.prototype.userId = q.Long ? q.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.nickName = ""),
      (n.prototype.gameName = ""),
      (n.prototype.nonce = 0),
      (n.prototype.currencyName = ""),
      (n.prototype.betAmount = ""),
      (n.prototype.winAmount = ""),
      (n.prototype.odds = 0),
      (n.prototype.betTime = q.Long ? q.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.distributeId = q.Long ? q.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.type = ""),
      (n.prototype.gameId = ""),
      (n.prototype.gv = ""),
      (n.prototype.bv = ""),
      (n.prototype.oddsString = ""),
      (n.encode = function (e, t) {
        return (
          t || (t = de.create()),
          e.userId != null &&
            Object.hasOwnProperty.call(e, "userId") &&
            t.uint32(16).sint64(e.userId),
          e.nickName != null &&
            Object.hasOwnProperty.call(e, "nickName") &&
            t.uint32(26).string(e.nickName),
          e.gameName != null &&
            Object.hasOwnProperty.call(e, "gameName") &&
            t.uint32(34).string(e.gameName),
          e.nonce != null &&
            Object.hasOwnProperty.call(e, "nonce") &&
            t.uint32(40).sint32(e.nonce),
          e.currencyName != null &&
            Object.hasOwnProperty.call(e, "currencyName") &&
            t.uint32(50).string(e.currencyName),
          e.betAmount != null &&
            Object.hasOwnProperty.call(e, "betAmount") &&
            t.uint32(58).string(e.betAmount),
          e.winAmount != null &&
            Object.hasOwnProperty.call(e, "winAmount") &&
            t.uint32(66).string(e.winAmount),
          e.odds != null &&
            Object.hasOwnProperty.call(e, "odds") &&
            t.uint32(72).sint32(e.odds),
          e.betTime != null &&
            Object.hasOwnProperty.call(e, "betTime") &&
            t.uint32(80).sint64(e.betTime),
          e.distributeId != null &&
            Object.hasOwnProperty.call(e, "distributeId") &&
            t.uint32(96).sint64(e.distributeId),
          e.type != null &&
            Object.hasOwnProperty.call(e, "type") &&
            t.uint32(106).string(e.type),
          e.gameId != null &&
            Object.hasOwnProperty.call(e, "gameId") &&
            t.uint32(114).string(e.gameId),
          e.gv != null &&
            Object.hasOwnProperty.call(e, "gv") &&
            t.uint32(122).string(e.gv),
          e.bv != null &&
            Object.hasOwnProperty.call(e, "bv") &&
            t.uint32(130).string(e.bv),
          e.oddsString != null &&
            Object.hasOwnProperty.call(e, "oddsString") &&
            t.uint32(138).string(e.oddsString),
          t
        );
      }),
      (n.decode = function (e, t) {
        e instanceof M || (e = M.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
          o = new x.BetLog();
        for (; e.pos < r; ) {
          let i = e.uint32();
          switch (i >>> 3) {
            case 2:
              o.userId = e.sint64();
              break;
            case 3:
              o.nickName = e.string();
              break;
            case 4:
              o.gameName = e.string();
              break;
            case 5:
              o.nonce = e.sint32();
              break;
            case 6:
              o.currencyName = e.string();
              break;
            case 7:
              o.betAmount = e.string();
              break;
            case 8:
              o.winAmount = e.string();
              break;
            case 9:
              o.odds = e.sint32();
              break;
            case 10:
              o.betTime = e.sint64();
              break;
            case 12:
              o.distributeId = e.sint64();
              break;
            case 13:
              o.type = e.string();
              break;
            case 14:
              o.gameId = e.string();
              break;
            case 15:
              o.gv = e.string();
              break;
            case 16:
              o.bv = e.string();
              break;
            case 17:
              o.oddsString = e.string();
              break;
            default:
              e.skipType(7 & i);
          }
        }
        return o;
      }),
      n
    );
  })());
class oo extends gn {
  constructor(e, t) {
    super(e, t),
      (this.oddsScale = 1e4),
      (this.amountScale = 1e4),
      (this.gameUrl = ""),
      (this.betLog$ = new C([])),
      (this.jackpot$ = new C([])),
      (this.betInfo$ = new C([])),
      (this.gameConfig$ = new C([])),
      (this.betEncoder = E().encode(x.Bet)),
      (this.betResultDecoder = E().decode(x.BetResult)),
      (this.allbet = E().decodeBind((r) => {
        this.betLog$.next(
          _(k({}, r), {
            betAmount: r.betAmount,
            winAmount: r.winAmount ? r.winAmount : "0",
            odds: r.odds || 0,
            betTime: r.betTime.toString(),
            distributeId: r.distributeId.toString(),
          })
        );
      }, x.BetLog)),
      (this.connection = this.connection$.asObservable());
  }
  init() {
    return F(this, null, function* () {
      try {
        const e = yield this.request("init").then((o) => E().decode(x.Init)(o)),
          { betInfo: t, gameConfig: r } = e;
        t &&
          (this.betInfo$.next(t),
          this.jackpot$.next(
            t.map((o) => ({
              currencyName: o.currencyName,
              jackpotAmount: 0,
              maxBetAmount: Number(o.maxBetAmount),
              minBetAmount: Number(o.minBetAmount),
              maxProfitAmount: Number(o.maxProfitAmount),
            }))
          )),
          r && this.gameConfig$.next(r),
          this.socket.on("allbet", this.allbet);
      } catch (e) {}
    });
  }
  toISingleLog(e, t, r) {
    var o, i, a, s;
    return Object.assign(
      e,
      k(
        {
          gv: e.gameValue,
          userId: t.userId,
          seedId: 0,
          betAmount: new te(e.betAmount || 0).toString(),
          winAmount: new te(e.winAmount || 0).toString(),
          distributeId:
            ((o = e == null ? void 0 : e.betId) == null
              ? void 0
              : o.toString()) || "",
          betTime: new te(
            ((i = e == null ? void 0 : e.betTime) == null
              ? void 0
              : i.toString()) || 0
          ).toNumber(),
          nickName: (a = t.name) != null ? a : "",
          avatar: (s = t.avatar) != null ? s : "header1",
          odds: e.odds || 0,
        },
        r
      )
    );
  }
  bet(i) {
    return F(
      this,
      arguments,
      function* ({ txId: e, currency: t, value: r, scriptId: o }) {
        const a = this.betEncoder({
            frontgroundId: e,
            currencyName: t.symbol,
            betAmount: t.amount.toString(),
            betValue: r,
            scriptId: o,
          }),
          s = yield this.request("bet", a);
        return E().decode(x.BetResult)(s);
      }
    );
  }
}
class ts extends oo {}
const rs = So(() => {
  const [n, e] = Ve({
    wagered: 0,
    profit: 0,
    winNum: 0,
    lossNum: 0,
    currencyName: "BTC",
    profits: [0],
  });
  function t() {
    e({ wagered: 0, profit: 0, winNum: 0, lossNum: 0, profits: [0] });
  }
  return [
    n,
    {
      addData: function (r, o, i) {
        e("wagered", (s) => s + r),
          e("currencyName", i),
          i !== n.currencyName && (e("currencyName", i), t());
        const a = (o - 1) * r;
        e("profit", (s) => s + a),
          e(o >= 1 ? "winNum" : "lossNum", (s) => s + 1),
          e("profits", (s) => [...s, n.profit]);
      },
      clearData: t,
    },
  ];
});
function vn() {
  return rs;
}
function io(n = 15, e = 50) {
  const [t, r] = D([]),
    [o, i] = D([]),
    { coinPureNumber: a } = zo(),
    s = ie(() => t().map((c) => c.profit));
  return (
    B(() => {
      let c = setInterval(() => {
        if (t().length > 0) {
          const l = t().pop();
          l && i((u) => (u.length >= e && u.pop(), [l, ...u]));
        }
      }, 1e3);
      R(() => {
        c && clearInterval(c);
      });
    }),
    {
      queue: o,
      addItem: (c) => {
        const l = _(k({}, c), {
          profit: a(new te(c.profit), c.currencyName).toNumber(),
        });
        r((u) => {
          if (u.findIndex((y) => y.distributeId === c.distributeId) >= 0)
            return u;
          let f = [...u];
          if (u.length === 0) f = [l];
          else if (f.length + 1 < n) {
            const y = Ut(s(), l.profit);
            f.splice(y, 0, l);
          } else {
            const y = u[0].profit;
            if (l.profit > y) {
              const g = Ut(s(), l.profit);
              f.splice(g, 0, l), f.shift();
            }
          }
          return f;
        });
      },
      setDataQueue: i,
    }
  );
}
const ao = he(null);
function os(n) {
  const [e] = G(n, ["game"]),
    { addData: t } = vn()[1],
    [r, o] = Ve({ myLogsFromGame: [] }),
    { user: i } = Uo(),
    [a, s] = D(50),
    { queue: c, addItem: l, setDataQueue: u } = io(10),
    f = (function (b, d) {
      return Pe(() => ({
        queryKey: ["/game/bet/recent-bet/", { gameUnique: b, size: d() }],
        queryFn: is,
        staleTime: 0,
      }));
    })(n.game.config.key, a),
    y = Wn(
      () =>
        (f.data || []).map((w) => {
          var j = w,
            { bv: b, odds: d } = j,
            O = In(j, ["bv", "odds"]);
          return _(k({}, O), {
            bv: n.game.bvMapper(b),
            odds: d / n.game.oddsScale,
          });
        }),
      []
    ),
    g = (function (b, d) {
      return Pe(() => ({
        queryKey: [`/game/bet/allBet/${b}`, d()],
        queryFn: as,
        staleTime: 0,
      }));
    })(n.game.config.key, a);
  B(() => {
    if (g.data) {
      const b = g.data.map((w) => {
        var j = w,
          { odds: d } = j,
          O = In(j, ["odds"]);
        const I = e.game.getResult(_(k({}, O), { odds: d / n.game.oddsScale }));
        return _(k({}, O), {
          odds: d / n.game.oddsScale,
          profit: I.profit,
          payout: I.payout,
        });
      });
      u(b);
    }
  });
  const v = ie(() => be([...r.myLogsFromGame, ...y()], "distributeId")),
    p = new it(),
    m = (b) => {
      const d = et(b),
        { winAmount: O, betAmount: w, odds: j } = d,
        I = Object.assign(d, {
          winAmount: O,
          betAmount: w,
          odds: j / n.game.oddsScale,
        });
      t(Number(w), Number(I.odds), d.currencyName),
        o("myLogsFromGame", (T) => be([I, ...T], "distributeId")),
        p.next(I);
    };
  return (
    B(() => {
      const b = e.game instanceof ts,
        d = n.game.betLog$
          .pipe(
            Rn((O) => !Er(O)),
            hn((O) => (Array.isArray(O) ? at(O).pipe(es(400)) : Ht(O))),
            st((O) =>
              O.userId !== i.userId || b
                ? Ht(null)
                : p.asObservable().pipe(
                    Rn(
                      (w) =>
                        w.userId === O.userId &&
                        w.distributeId === O.distributeId
                    ),
                    Gn(1)
                  )
            )
          )
          .subscribe((O) => {
            const w = _(k({}, O), { odds: O.odds / n.game.oddsScale }),
              { profit: j, payout: I } = e.game.getResult(w);
            l(_(k({}, w), { profit: j, payout: I }));
          });
      R(() => {
        d.unsubscribe();
      });
    }),
    S(ao.Provider, {
      get value() {
        return _(k({}, e), {
          logs: c,
          myLogs: v,
          size: a,
          setSize: s,
          addLog: m,
          allBetQuery: g,
        });
      },
      get children() {
        return n.children;
      },
    })
  );
}
function Rs() {
  return ge(ao);
}
function is(e) {
  return F(this, arguments, function* ({ queryKey: n }) {
    return yield dn(), yield oe().post("/game/bet/recent-bet", n[1]);
  });
}
function as(e) {
  return F(this, arguments, function* ({ queryKey: n }) {
    return yield oe().get(n[0]);
  });
}
const Xt = $.Reader,
  ss = $.Writer,
  ce = $.util,
  fn = $.roots.MultiGame || ($.roots.MultiGame = {});
fn.BetLog = (() => {
  function n(e) {
    if (e)
      for (let t = Object.keys(e), r = 0; r < t.length; ++r)
        e[t[r]] != null && (this[t[r]] = e[t[r]]);
  }
  return (
    (n.prototype.gameId = ce.Long ? ce.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.userId = ce.Long ? ce.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.nickName = ""),
    (n.prototype.gameName = ""),
    (n.prototype.nonce = 0),
    (n.prototype.currencyName = ""),
    (n.prototype.betAmount = ""),
    (n.prototype.winAmount = ""),
    (n.prototype.odds = 0),
    (n.prototype.betTime = ce.Long ? ce.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.type = ""),
    (n.prototype.distributeId = ce.Long ? ce.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.oddsString = ""),
    (n.encode = function (e, t) {
      return (
        t || (t = ss.create()),
        e.gameId != null &&
          Object.hasOwnProperty.call(e, "gameId") &&
          t.uint32(8).sint64(e.gameId),
        e.userId != null &&
          Object.hasOwnProperty.call(e, "userId") &&
          t.uint32(24).sint64(e.userId),
        e.nickName != null &&
          Object.hasOwnProperty.call(e, "nickName") &&
          t.uint32(34).string(e.nickName),
        e.gameName != null &&
          Object.hasOwnProperty.call(e, "gameName") &&
          t.uint32(42).string(e.gameName),
        e.nonce != null &&
          Object.hasOwnProperty.call(e, "nonce") &&
          t.uint32(48).sint32(e.nonce),
        e.currencyName != null &&
          Object.hasOwnProperty.call(e, "currencyName") &&
          t.uint32(58).string(e.currencyName),
        e.betAmount != null &&
          Object.hasOwnProperty.call(e, "betAmount") &&
          t.uint32(66).string(e.betAmount),
        e.winAmount != null &&
          Object.hasOwnProperty.call(e, "winAmount") &&
          t.uint32(74).string(e.winAmount),
        e.odds != null &&
          Object.hasOwnProperty.call(e, "odds") &&
          t.uint32(80).sint32(e.odds),
        e.betTime != null &&
          Object.hasOwnProperty.call(e, "betTime") &&
          t.uint32(88).sint64(e.betTime),
        e.type != null &&
          Object.hasOwnProperty.call(e, "type") &&
          t.uint32(106).string(e.type),
        e.distributeId != null &&
          Object.hasOwnProperty.call(e, "distributeId") &&
          t.uint32(112).sint64(e.distributeId),
        e.oddsString != null &&
          Object.hasOwnProperty.call(e, "oddsString") &&
          t.uint32(122).string(e.oddsString),
        t
      );
    }),
    (n.decode = function (e, t) {
      e instanceof Xt || (e = Xt.create(e));
      let r = t === void 0 ? e.len : e.pos + t,
        o = new fn.BetLog();
      for (; e.pos < r; ) {
        let i = e.uint32();
        switch (i >>> 3) {
          case 1:
            o.gameId = e.sint64();
            break;
          case 3:
            o.userId = e.sint64();
            break;
          case 4:
            o.nickName = e.string();
            break;
          case 5:
            o.gameName = e.string();
            break;
          case 6:
            o.nonce = e.sint32();
            break;
          case 7:
            o.currencyName = e.string();
            break;
          case 8:
            o.betAmount = e.string();
            break;
          case 9:
            o.winAmount = e.string();
            break;
          case 10:
            o.odds = e.sint32();
            break;
          case 11:
            o.betTime = e.sint64();
            break;
          case 13:
            o.type = e.string();
            break;
          case 14:
            o.distributeId = e.sint64();
            break;
          case 15:
            o.oddsString = e.string();
            break;
          default:
            e.skipType(7 & i);
        }
      }
      return o;
    }),
    n
  );
})();
const us = () => !0,
  so = he(null);
function cs(e) {
  return F(this, arguments, function* ({ queryKey: n }) {
    return yield dn(), oe().post(n[0], n[1]);
  });
}
function ls(e) {
  return F(this, arguments, function* ({ queryKey: n }) {
    return (yield oe().post(n[0], n[1])).list.map((t) => {
      const r = JSON.parse(t.gameDetail),
        { hash: o, value: i, rate: a } = r;
      return { gameId: t.gameId, hash: o, value: i, maxRate: a || 0 };
    });
  });
}
function fs(n) {
  const e = Po({ logFilter: us }, n),
    [t] = G(e, ["game"]),
    { addData: r } = vn()[1],
    [o, i] = Ve({ logsFromGame: [], myLogsFromGame: [] }),
    [a, s] = D(50),
    c =
      ((l = e.game.config.name),
      Pe(() => ({
        queryKey: [
          "/game/bet/multi/history",
          { gameUnique: l, page: 1, pageSize: 50 },
        ],
        queryFn: ls,
        staleTime: 0,
      })));
  var l;
  const u = (function (m, b) {
      return Pe(() => ({
        queryKey: ["/game/bet/recent-bet/", { gameUnique: m, size: b() }],
        queryFn: cs,
        staleTime: 0,
      }));
    })(e.game.config.name, a),
    f = Wn(
      () =>
        (u.data || []).map((m) =>
          _(k({}, m), { odds: m.odds / t.game.oddsScale })
        ),
      []
    ),
    y = ie(() => [...o.myLogsFromGame, ...f()]),
    g = ie(() =>
      Ta(be([...o.logsFromGame, ...(c.data || [])], "gameId"), "gameId", "desc")
    ),
    v = (m) => {
      const b = et(m),
        { winAmount: d, betAmount: O } = b.bets[0],
        w = Object.assign(b, {
          winAmount: Number(d),
          betAmount: Number(O),
          odds: Number(b.odds) / t.game.oddsScale,
        });
      i("myLogsFromGame", (j) =>
        be([w, ...j], "distributeId").filter(e.logFilter)
      );
    },
    p = rr(e.game.settle$);
  return (
    B(() => {
      const m = p();
      if (m) {
        const b = _(k({}, m), {
          gameId: m.roundId ? m.roundId.toNumber() : m.gameId.toNumber(),
          value: m.betValue || m.value,
        });
        i("logsFromGame", (d) => [b, ...d]);
      }
    }),
    B(() => {
      const m = E().decodeBind((d) => {
          const { betAmount: O, odds: w, currencyName: j } = d;
          r(Number(O), Number(w / t.game.oddsScale), j),
            i("myLogsFromGame", (I) =>
              be(
                [
                  _(k({}, d), {
                    gameId: d.gameId.toNumber(),
                    betTime: d.betTime.toNumber(),
                    betAmount: Number(d.betAmount),
                    winAmount: Number(d.winAmount),
                    odds: d.odds / t.game.oddsScale,
                    distributeId: d.distributeId.toString(),
                  }),
                  ...I,
                ].filter(e.logFilter),
                "distributeId"
              )
            );
        }, fn.BetLog),
        b = E().socket(e.game.config.namespace).on("multilmybetlog", m);
      R(() => {
        b.off("multilmybetlog");
      });
    }),
    S(so.Provider, {
      get value() {
        return _(k({}, t), {
          logs: g,
          myLogs: y,
          size: a,
          setSize: s,
          addLog: v,
        });
      },
      get children() {
        return e.children;
      },
    })
  );
}
function Gs() {
  return ge(so);
}
var ds = ((n) => (
    (n.manual = "manual"), (n.auto = "auto"), (n.advance = "advance"), n
  ))(ds || {}),
  rn = ((n) => (
    (n.normal = "normal"),
    (n.authFail = "authFail"),
    (n.unknownServerError = "unknownServerError"),
    n
  ))(rn || {}),
  ps = ((n) => (
    (n[(n.pending = 0)] = "pending"),
    (n[(n.playing = 1)] = "playing"),
    (n[(n.guessing = 2)] = "guessing"),
    (n[(n.cashouting = 3)] = "cashouting"),
    (n[(n.end = 4)] = "end"),
    n
  ))(ps || {});
const Vs = 500,
  Ks = 300,
  Ws = 13,
  Ys = 14,
  Js = 13,
  Hs = 10,
  Qs = 12,
  Xs = 300,
  Zs = 200,
  eu = { a: "Half bet amount", s: "Double bet amount", space: "Make a bet" },
  nu = "Averta Std";
Go(
  {},
  {
    CloseButton: () => co,
    Description: () => lo,
    List: () => ct,
    ProgressFill: () => po,
    ProgressTrack: () => bo,
    Region: () => lt,
    Root: () => mo,
    Title: () => yo,
    Toast: () => Os,
    toaster: () => ho,
  }
);
var uo = he();
function wn() {
  const n = ge(uo);
  if (n === void 0)
    throw new Error(
      "[kobalte]: `useToastContext` must be used within a `Toast.Root` component"
    );
  return n;
}
function co(n) {
  const e = wn(),
    [t, r] = G(n, ["aria-label", "onClick"]);
  return S(
    Co,
    X(
      {
        get "aria-label"() {
          return t["aria-label"] || e.translations().close;
        },
        onClick: (o) => {
          re(o, t.onClick), e.close();
        },
      },
      r
    )
  );
}
function lo(n) {
  const e = wn(),
    t = bn({ id: e.generateId("description") }, n),
    [r, o] = G(t, ["id"]);
  return (
    B(() => R(e.registerDescriptionId(r.id))),
    S(
      we,
      X(
        {
          as: "div",
          get id() {
            return r.id;
          },
        },
        o
      )
    )
  );
}
var fo = he();
function ut() {
  const n = ge(fo);
  if (n === void 0)
    throw new Error(
      "[kobalte]: `useToastRegionContext` must be used within a `Toast.Region` component"
    );
  return n;
}
function ct(n) {
  let e;
  const t = ut(),
    [r, o] = G(n, [
      "ref",
      "onFocusIn",
      "onFocusOut",
      "onPointerMove",
      "onPointerLeave",
    ]);
  return (
    B(
      Ce([() => e, () => t.hotkey()], ([i, a]) => {
        if (xo || !i) return;
        const s = mt(i),
          c = (l) => {
            a.every((u) => l[u] || l.code === u) && Wo(i);
          };
        s.addEventListener("keydown", c),
          R(() => s.removeEventListener("keydown", c));
      })
    ),
    B(() => {
      if (!t.pauseOnPageIdle()) return;
      const i = Vo(e);
      i.addEventListener("blur", t.pauseAllTimer),
        i.addEventListener("focus", t.resumeAllTimer),
        R(() => {
          i.removeEventListener("blur", t.pauseAllTimer),
            i.removeEventListener("focus", t.resumeAllTimer);
        });
    }),
    S(
      we,
      X(
        {
          as: "ol",
          ref(i) {
            var a = dr((s) => (e = s), r.ref);
            typeof a == "function" && a(i);
          },
          tabIndex: -1,
          onFocusIn: (i) => {
            re(i, r.onFocusIn),
              t.pauseOnInteraction() && !t.isPaused() && t.pauseAllTimer();
          },
          onFocusOut: (i) => {
            re(i, r.onFocusOut), yt(e, i.relatedTarget) || t.resumeAllTimer();
          },
          onPointerMove: (i) => {
            re(i, r.onPointerMove),
              t.pauseOnInteraction() && !t.isPaused() && t.pauseAllTimer();
          },
          onPointerLeave: (i) => {
            re(i, r.onPointerLeave),
              yt(e, mt(e).activeElement) || t.resumeAllTimer();
          },
        },
        o,
        {
          get children() {
            return S(or, {
              get each() {
                return t.toasts();
              },
              children: (i) =>
                i.toastComponent({
                  get toastId() {
                    return i.id;
                  },
                }),
            });
          },
        }
      )
    )
  );
}
function po(n) {
  const e = ut(),
    t = wn(),
    [r, o] = G(n, ["style"]),
    [i, a] = D(100);
  let s = 0;
  return (
    B(() => {
      if (e.isPaused() || t.isPersistent()) return;
      const c = setInterval(() => {
        const l = new Date().getTime() - t.closeTimerStartTime() + s,
          u = Math.trunc(100 - (l / t.duration()) * 100);
        a(u < 0 ? 0 : u);
      });
      R(() => {
        (s += new Date().getTime() - t.closeTimerStartTime()), clearInterval(c);
      });
    }),
    S(
      we,
      X(
        {
          as: "div",
          get style() {
            return k({ "--kb-toast-progress-fill-width": `${i()}%` }, r.style);
          },
        },
        o
      )
    )
  );
}
function bo(n) {
  return S(
    we,
    X({ as: "div", "aria-hidden": "true", role: "presentation" }, n)
  );
}
var [Tn, De] = Ve({ toasts: [] }),
  ye = {
    toasts: () => Tn.toasts,
    add: function (n) {
      De("toasts", (e) => [...e, n]);
    },
    get: function (n) {
      return Tn.toasts.find((e) => e.id === n);
    },
    update: function (n, e) {
      const t = Tn.toasts.findIndex((r) => r.id === n);
      t !== -1 && De("toasts", (r) => [...r.slice(0, t), e, ...r.slice(t + 1)]);
    },
    dismiss: function (n) {
      De("toasts", (e) => e.id === n, "dismiss", !0);
    },
    remove: function (n) {
      De("toasts", (e) => e.filter((t) => t.id !== n));
    },
    clear: function () {
      De("toasts", []);
    },
  },
  Zt = "{hotkey}",
  bs = { close: "Close" },
  ms = { notifications: (n) => `Notifications (${n})` };
function lt(n) {
  const e = bn(
      {
        id: `toast-region-${ir()}`,
        hotkey: ["altKey", "KeyT"],
        duration: 5e3,
        limit: 3,
        swipeDirection: "right",
        swipeThreshold: 50,
        pauseOnInteraction: !0,
        pauseOnPageIdle: !0,
        topLayer: !0,
        translations: ms,
      },
      n
    ),
    [t, r] = G(e, [
      "translations",
      "style",
      "hotkey",
      "duration",
      "limit",
      "swipeDirection",
      "swipeThreshold",
      "pauseOnInteraction",
      "pauseOnPageIdle",
      "topLayer",
      "aria-label",
      "regionId",
    ]),
    o = ie(() =>
      ye
        .toasts()
        .filter((u) => u.region === t.regionId)
        .slice(0, t.limit)
    ),
    [i, a] = D(!1),
    s = () =>
      (t["aria-label"] || t.translations.notifications(Zt)).replace(
        Zt,
        t.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      ),
    c = () => ({ [Yo]: t.topLayer ? "" : void 0 }),
    l = {
      isPaused: i,
      toasts: o,
      hotkey: () => t.hotkey,
      duration: () => t.duration,
      swipeDirection: () => t.swipeDirection,
      swipeThreshold: () => t.swipeThreshold,
      pauseOnInteraction: () => t.pauseOnInteraction,
      pauseOnPageIdle: () => t.pauseOnPageIdle,
      pauseAllTimer: () => a(!0),
      resumeAllTimer: () => a(!1),
      generateId: pr(() => r.id),
    };
  return S(fo.Provider, {
    value: l,
    get children() {
      return S(
        we,
        X(
          {
            as: "div",
            role: "region",
            tabIndex: -1,
            get "aria-label"() {
              return s();
            },
            get style() {
              return k(
                {
                  "pointer-events":
                    o().length > 0 ? (t.topLayer ? "auto" : void 0) : "none",
                },
                t.style
              );
            },
          },
          c,
          r
        )
      );
    },
  });
}
var ys = "toast.swipeStart",
  hs = "toast.swipeMove",
  gs = "toast.swipeCancel",
  vs = "toast.swipeEnd";
function mo(n) {
  const e = ut(),
    t = bn({ id: `toast-${ir()}`, priority: "high", translations: bs }, n),
    [r, o] = G(t, [
      "ref",
      "translations",
      "toastId",
      "style",
      "priority",
      "duration",
      "persistent",
      "onPause",
      "onResume",
      "onSwipeStart",
      "onSwipeMove",
      "onSwipeCancel",
      "onSwipeEnd",
      "onEscapeKeyDown",
      "onKeyDown",
      "onPointerDown",
      "onPointerMove",
      "onPointerUp",
    ]),
    [i, a] = D(!0),
    [s, c] = D(),
    [l, u] = D(),
    [f, y] = D(!0),
    [g, v] = D(),
    { present: p } = Ko({
      show: i,
      element: () => {
        var h;
        return (h = g()) != null ? h : null;
      },
    }),
    m = ie(() => r.duration || e.duration());
  let b,
    d = 0,
    O = m(),
    w = null,
    j = null;
  const I = () => {
      a(!1), y(!0);
    },
    T = (h) => {
      h &&
        !r.persistent &&
        (window.clearTimeout(b),
        (d = new Date().getTime()),
        (b = window.setTimeout(I, h)));
    },
    Y = (h) => {
      var N;
      re(h, r.onKeyDown),
        h.key === "Escape" &&
          ((N = r.onEscapeKeyDown) == null || N.call(r, h),
          h.defaultPrevented || I());
    },
    fe = (h) => {
      re(h, r.onPointerDown),
        h.button === 0 && (w = { x: h.clientX, y: h.clientY });
    },
    Z = (h) => {
      if ((re(h, r.onPointerMove), !w)) return;
      const N = h.clientX - w.x,
        K = h.clientY - w.y,
        W = !!j,
        J = ["left", "right"].includes(e.swipeDirection()),
        ee = ["left", "up"].includes(e.swipeDirection()) ? Math.min : Math.max,
        se = J ? ee(0, N) : 0,
        Ie = J ? 0 : ee(0, K),
        On = h.pointerType === "touch" ? 10 : 2,
        Ee = { x: se, y: Ie },
        ft = { originalEvent: h, delta: Ee };
      if (W) {
        (j = Ee), en(hs, r.onSwipeMove, ft);
        const { x: Oo, y: Io } = Ee;
        h.currentTarget.setAttribute("data-swipe", "move"),
          h.currentTarget.style.setProperty(
            "--kb-toast-swipe-move-x",
            `${Oo}px`
          ),
          h.currentTarget.style.setProperty(
            "--kb-toast-swipe-move-y",
            `${Io}px`
          );
      } else
        er(Ee, e.swipeDirection(), On)
          ? ((j = Ee),
            en(ys, r.onSwipeStart, ft),
            h.currentTarget.setAttribute("data-swipe", "start"),
            h.target.setPointerCapture(h.pointerId))
          : (Math.abs(N) > On || Math.abs(K) > On) && (w = null);
    },
    V = (h) => {
      re(h, r.onPointerUp);
      const N = j,
        K = h.target;
      if (
        (K.hasPointerCapture(h.pointerId) &&
          K.releasePointerCapture(h.pointerId),
        (j = null),
        (w = null),
        N)
      ) {
        const W = h.currentTarget,
          J = { originalEvent: h, delta: N };
        if (er(N, e.swipeDirection(), e.swipeThreshold())) {
          en(vs, r.onSwipeEnd, J);
          const { x: ee, y: se } = N;
          h.currentTarget.setAttribute("data-swipe", "end"),
            h.currentTarget.style.removeProperty("--kb-toast-swipe-move-x"),
            h.currentTarget.style.removeProperty("--kb-toast-swipe-move-y"),
            h.currentTarget.style.setProperty(
              "--kb-toast-swipe-end-x",
              `${ee}px`
            ),
            h.currentTarget.style.setProperty(
              "--kb-toast-swipe-end-y",
              `${se}px`
            ),
            I();
        } else
          en(gs, r.onSwipeCancel, J),
            h.currentTarget.setAttribute("data-swipe", "cancel"),
            h.currentTarget.style.removeProperty("--kb-toast-swipe-move-x"),
            h.currentTarget.style.removeProperty("--kb-toast-swipe-move-y"),
            h.currentTarget.style.removeProperty("--kb-toast-swipe-end-x"),
            h.currentTarget.style.removeProperty("--kb-toast-swipe-end-y");
        W.addEventListener("click", (ee) => ee.preventDefault(), { once: !0 });
      }
    };
  ar(() => {
    e.toasts().find((h) => h.id === r.toastId && h.update) && y(!1);
  }),
    B(
      Ce(
        () => e.isPaused(),
        (h) => {
          var N;
          h
            ? (() => {
                var W;
                const K = new Date().getTime() - d;
                (O -= K),
                  window.clearTimeout(b),
                  (W = r.onPause) == null || W.call(r);
              })()
            : (T(O), (N = r.onResume) == null || N.call(r));
        },
        { defer: !0 }
      )
    ),
    B(
      Ce([i, m], ([h, N]) => {
        h && !e.isPaused() && T(N);
      })
    ),
    B(
      Ce(
        () => {
          var h;
          return (h = ye.get(r.toastId)) == null ? void 0 : h.dismiss;
        },
        (h) => h && I()
      )
    ),
    B(
      Ce(
        () => p(),
        (h) => !h && void ye.remove(r.toastId)
      )
    );
  const Je = {
    translations: () => r.translations,
    close: I,
    duration: m,
    isPersistent: () => {
      var h;
      return (h = r.persistent) != null ? h : !1;
    },
    closeTimerStartTime: () => d,
    generateId: pr(() => o.id),
    registerTitleId: ht(c),
    registerDescriptionId: ht(u),
  };
  return S(No, {
    get when() {
      return p();
    },
    get children() {
      return S(uo.Provider, {
        value: Je,
        get children() {
          return S(
            we,
            X(
              {
                as: "li",
                ref(h) {
                  var N = dr(v, r.ref);
                  typeof N == "function" && N(h);
                },
                role: "status",
                tabIndex: 0,
                get style() {
                  return k(
                    {
                      animation: f() ? void 0 : "none",
                      "user-select": "none",
                      "touch-action": "none",
                    },
                    r.style
                  );
                },
                get "aria-live"() {
                  return r.priority === "high" ? "assertive" : "polite";
                },
                "aria-atomic": "true",
                get "aria-labelledby"() {
                  return s();
                },
                get "aria-describedby"() {
                  return l();
                },
                get "data-opened"() {
                  return i() ? "" : void 0;
                },
                get "data-closed"() {
                  return i() ? void 0 : "";
                },
                get "data-swipe-direction"() {
                  return e.swipeDirection();
                },
                onKeyDown: Y,
                onPointerDown: fe,
                onPointerMove: Z,
                onPointerUp: V,
              },
              o
            )
          );
        },
      });
    },
  });
}
function er(n, e, t = 0) {
  const r = Math.abs(n.x),
    o = Math.abs(n.y),
    i = r > o;
  return e === "left" || e === "right" ? i && r > t : !i && o > t;
}
function en(n, e, t) {
  const r = t.originalEvent.currentTarget,
    o = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: t });
  e && r.addEventListener(n, e, { once: !0 }), r.dispatchEvent(o);
}
function yo(n) {
  const e = wn(),
    t = bn({ id: e.generateId("title") }, n),
    [r, o] = G(t, ["id"]);
  return (
    B(() => R(e.registerTitleId(r.id))),
    S(
      we,
      X(
        {
          as: "div",
          get id() {
            return r.id;
          },
        },
        o
      )
    )
  );
}
var ws = 0;
function nr(n, e) {
  const t = ws++;
  return (
    ye.add({
      id: t,
      toastComponent: n,
      dismiss: !1,
      update: !1,
      region: e == null ? void 0 : e.region,
    }),
    t
  );
}
function _n(n, e) {
  ye.update(n, { id: n, toastComponent: e, dismiss: !1, update: !0 });
}
var ho = {
    show: nr,
    update: _n,
    promise: function (n, e, t) {
      const r = nr(
        (o) =>
          e({
            get toastId() {
              return o.toastId;
            },
            state: "pending",
          }),
        t
      );
      return (
        (Jo(n) ? n() : n)
          .then((o) =>
            _n(r, (i) =>
              e({
                get toastId() {
                  return i.toastId;
                },
                state: "fulfilled",
                data: o,
              })
            )
          )
          .catch((o) =>
            _n(r, (i) =>
              e({
                get toastId() {
                  return i.toastId;
                },
                state: "rejected",
                error: o,
              })
            )
          ),
        r
      );
    },
    dismiss: function (n) {
      return ye.dismiss(n), n;
    },
    clear: function () {
      ye.clear();
    },
  },
  Os = Object.assign(mo, {
    CloseButton: co,
    Description: lo,
    List: ct,
    ProgressFill: po,
    ProgressTrack: bo,
    Region: lt,
    Title: yo,
    toaster: ho,
  });
const Is = $o(
    "fixed z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-2 sm:flex-col md:max-w-[420px]",
    {
      variants: {
        regionId: {
          "top-left": "top-0 left-0",
          "top-center": "top-0 left-1/2 -translate-x-1/2",
          "top-right": "top-0 right-0",
          "bottom-left": "bottom-0 left-0",
          "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
          "bottom-right": "bottom-0 right-0",
          center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        },
      },
      defaultVariants: { regionId: "bottom-left" },
    }
  ),
  js = (n) => {
    const [e, t] = G(n, ["class"]),
      r = [
        "top-left",
        "top-right",
        "top-center",
        "bottom-left",
        "bottom-center",
        "bottom-right",
        "center",
      ];
    return S(To, {
      get children() {
        return S(or, {
          each: r,
          children: (o) =>
            S(lt, {
              regionId: o,
              limit: 5,
              get children() {
                return S(
                  ct,
                  X(
                    {
                      get class() {
                        return Ro(Is({ regionId: o }), e.class);
                      },
                    },
                    t
                  )
                );
              },
            }),
        });
      },
    });
  },
  je = $.Reader,
  Ln = $.Writer,
  z = $.util,
  ne = $.roots.gameSlots || ($.roots.gameSlots = {});
(ne.MyBetLog = (() => {
  function n(e) {
    if (e)
      for (let t = Object.keys(e), r = 0; r < t.length; ++r)
        e[t[r]] != null && (this[t[r]] = e[t[r]]);
  }
  return (
    (n.prototype.gameId = ""),
    (n.prototype.userId = z.Long ? z.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.nickName = ""),
    (n.prototype.gameName = ""),
    (n.prototype.nonce = 0),
    (n.prototype.currencyName = ""),
    (n.prototype.betAmount = ""),
    (n.prototype.winAmount = ""),
    (n.prototype.odds = 0),
    (n.prototype.betTime = z.Long ? z.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.type = ""),
    (n.prototype.distributeId = z.Long ? z.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.oddsString = ""),
    (n.encode = function (e, t) {
      return (
        t || (t = Ln.create()),
        e.gameId != null &&
          Object.hasOwnProperty.call(e, "gameId") &&
          t.uint32(10).string(e.gameId),
        e.userId != null &&
          Object.hasOwnProperty.call(e, "userId") &&
          t.uint32(24).sint64(e.userId),
        e.nickName != null &&
          Object.hasOwnProperty.call(e, "nickName") &&
          t.uint32(34).string(e.nickName),
        e.gameName != null &&
          Object.hasOwnProperty.call(e, "gameName") &&
          t.uint32(42).string(e.gameName),
        e.nonce != null &&
          Object.hasOwnProperty.call(e, "nonce") &&
          t.uint32(48).sint32(e.nonce),
        e.currencyName != null &&
          Object.hasOwnProperty.call(e, "currencyName") &&
          t.uint32(58).string(e.currencyName),
        e.betAmount != null &&
          Object.hasOwnProperty.call(e, "betAmount") &&
          t.uint32(66).string(e.betAmount),
        e.winAmount != null &&
          Object.hasOwnProperty.call(e, "winAmount") &&
          t.uint32(74).string(e.winAmount),
        e.odds != null &&
          Object.hasOwnProperty.call(e, "odds") &&
          t.uint32(80).sint32(e.odds),
        e.betTime != null &&
          Object.hasOwnProperty.call(e, "betTime") &&
          t.uint32(88).sint64(e.betTime),
        e.type != null &&
          Object.hasOwnProperty.call(e, "type") &&
          t.uint32(106).string(e.type),
        e.distributeId != null &&
          Object.hasOwnProperty.call(e, "distributeId") &&
          t.uint32(112).sint64(e.distributeId),
        e.oddsString != null &&
          Object.hasOwnProperty.call(e, "oddsString") &&
          t.uint32(122).string(e.oddsString),
        t
      );
    }),
    (n.decode = function (e, t) {
      e instanceof je || (e = je.create(e));
      let r = t === void 0 ? e.len : e.pos + t,
        o = new ne.MyBetLog();
      for (; e.pos < r; ) {
        let i = e.uint32();
        switch (i >>> 3) {
          case 1:
            o.gameId = e.string();
            break;
          case 3:
            o.userId = e.sint64();
            break;
          case 4:
            o.nickName = e.string();
            break;
          case 5:
            o.gameName = e.string();
            break;
          case 6:
            o.nonce = e.sint32();
            break;
          case 7:
            o.currencyName = e.string();
            break;
          case 8:
            o.betAmount = e.string();
            break;
          case 9:
            o.winAmount = e.string();
            break;
          case 10:
            o.odds = e.sint32();
            break;
          case 11:
            o.betTime = e.sint64();
            break;
          case 13:
            o.type = e.string();
            break;
          case 14:
            o.distributeId = e.sint64();
            break;
          case 15:
            o.oddsString = e.string();
            break;
          default:
            e.skipType(7 & i);
        }
      }
      return o;
    }),
    n
  );
})()),
  (ne.AllBetLog = (() => {
    function n(e) {
      if (e)
        for (let t = Object.keys(e), r = 0; r < t.length; ++r)
          e[t[r]] != null && (this[t[r]] = e[t[r]]);
    }
    return (
      (n.prototype.userId = z.Long ? z.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.nickName = ""),
      (n.prototype.gameName = ""),
      (n.prototype.nonce = 0),
      (n.prototype.currencyName = ""),
      (n.prototype.betAmount = ""),
      (n.prototype.winAmount = ""),
      (n.prototype.odds = 0),
      (n.prototype.betTime = z.Long ? z.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.distributeId = z.Long ? z.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.type = ""),
      (n.prototype.oddsString = ""),
      (n.encode = function (e, t) {
        return (
          t || (t = Ln.create()),
          e.userId != null &&
            Object.hasOwnProperty.call(e, "userId") &&
            t.uint32(16).sint64(e.userId),
          e.nickName != null &&
            Object.hasOwnProperty.call(e, "nickName") &&
            t.uint32(26).string(e.nickName),
          e.gameName != null &&
            Object.hasOwnProperty.call(e, "gameName") &&
            t.uint32(34).string(e.gameName),
          e.nonce != null &&
            Object.hasOwnProperty.call(e, "nonce") &&
            t.uint32(40).sint32(e.nonce),
          e.currencyName != null &&
            Object.hasOwnProperty.call(e, "currencyName") &&
            t.uint32(50).string(e.currencyName),
          e.betAmount != null &&
            Object.hasOwnProperty.call(e, "betAmount") &&
            t.uint32(58).string(e.betAmount),
          e.winAmount != null &&
            Object.hasOwnProperty.call(e, "winAmount") &&
            t.uint32(66).string(e.winAmount),
          e.odds != null &&
            Object.hasOwnProperty.call(e, "odds") &&
            t.uint32(72).sint32(e.odds),
          e.betTime != null &&
            Object.hasOwnProperty.call(e, "betTime") &&
            t.uint32(80).sint64(e.betTime),
          e.distributeId != null &&
            Object.hasOwnProperty.call(e, "distributeId") &&
            t.uint32(96).sint64(e.distributeId),
          e.type != null &&
            Object.hasOwnProperty.call(e, "type") &&
            t.uint32(106).string(e.type),
          e.oddsString != null &&
            Object.hasOwnProperty.call(e, "oddsString") &&
            t.uint32(114).string(e.oddsString),
          t
        );
      }),
      (n.decode = function (e, t) {
        e instanceof je || (e = je.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
          o = new ne.AllBetLog();
        for (; e.pos < r; ) {
          let i = e.uint32();
          switch (i >>> 3) {
            case 2:
              o.userId = e.sint64();
              break;
            case 3:
              o.nickName = e.string();
              break;
            case 4:
              o.gameName = e.string();
              break;
            case 5:
              o.nonce = e.sint32();
              break;
            case 6:
              o.currencyName = e.string();
              break;
            case 7:
              o.betAmount = e.string();
              break;
            case 8:
              o.winAmount = e.string();
              break;
            case 9:
              o.odds = e.sint32();
              break;
            case 10:
              o.betTime = e.sint64();
              break;
            case 12:
              o.distributeId = e.sint64();
              break;
            case 13:
              o.type = e.string();
              break;
            case 14:
              o.oddsString = e.string();
              break;
            default:
              e.skipType(7 & i);
          }
        }
        return o;
      }),
      n
    );
  })()),
  (ne.RoomIdParam = (() => {
    function n(e) {
      if (e)
        for (let t = Object.keys(e), r = 0; r < t.length; ++r)
          e[t[r]] != null && (this[t[r]] = e[t[r]]);
    }
    return (
      (n.prototype.roomId = ""),
      (n.encode = function (e, t) {
        return (
          t || (t = Ln.create()),
          e.roomId != null &&
            Object.hasOwnProperty.call(e, "roomId") &&
            t.uint32(10).string(e.roomId),
          t
        );
      }),
      (n.decode = function (e, t) {
        e instanceof je || (e = je.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
          o = new ne.RoomIdParam();
        for (; e.pos < r; ) {
          let i = e.uint32();
          i >>> 3 == 1 ? (o.roomId = e.string()) : e.skipType(7 & i);
        }
        return o;
      }),
      n
    );
  })());
const tr = E().encode(ne.RoomIdParam);
class Vn extends gn {
  constructor(e) {
    super(e),
      (this.oddsScale = 1e4),
      (this.amountScale = 1e4),
      (this.allbet$ = new C(null)),
      (this.mybets$ = new C(null)),
      (this.isWatching = !1),
      (this.connection = this.connection$.asObservable());
  }
  init() {}
}
const on = class ke extends Vn {
  constructor() {
    super(kn),
      (this.gameUnique = ""),
      (this.config = kn),
      (this.mybets$ = new C([])),
      (this.allbet$ = new C([])),
      (this.bet$ = new C(null)),
      (this.jackpot$ = new C([])),
      (this.onMybet = E().decodeBind((e) => {
        this.mybets$.next(
          [
            _(k({}, e), {
              distributeId: e.distributeId.toString(),
              odds: Number(e.oddsString) || 0,
            }),
            ...this.mybets$.value,
          ].slice(0, 20)
        );
      }, ne.MyBetLog)),
      (this.onAllbet = E().decodeBind((e) => {
        this.allbet$.next(
          _(k({}, e), {
            distributeId: e.distributeId.toString(),
            odds: Number(e.oddsString) || 0,
          })
        );
      }, ne.AllBetLog)),
      (this._onConnect = () => {
        this.initGame(),
          this.loadMybet(),
          this.loadAllbet(),
          ke.allbetSocket.emit("join", tr({ roomId: this.gameUnique }));
      }),
      (this.config = kn);
  }
  isWin(e) {
    return !1;
  }
  getResult(e, ...t) {
    return { payout: 0, profit: 0 };
  }
  bvMapper(e) {
    return e;
  }
  calcMaxProfit(e) {
    return new te(0);
  }
  watch(e) {
    (this.gameUnique = e),
      this.socket.on("connect", this._onConnect),
      ke.mybetSocket.on("slotsmybetlog", this.onMybet),
      ke.allbetSocket.on("allbet", this.onAllbet);
  }
  unwatch(e) {
    this.socket.off("connect", this._onConnect),
      (this.gameUnique = e),
      ke.mybetSocket.off("slotsmybetlog", this.onMybet),
      ke.allbetSocket.off("allbet", this.onAllbet),
      this.socket.emit("leave", tr({ roomId: this.gameUnique }));
  }
  play(e) {
    return F(this, null, function* () {
      return Promise.resolve();
    });
  }
  loadMybet() {
    return F(this, null, function* () {
      yield dn();
      let e = yield oe().post("/game/bet/recent-bet", {
        gameUnique: this.gameUnique,
      });
      (e = e.map((t) => ((t.odds = t.odds / this.oddsScale), t))),
        this.mybets$.next([...e]);
    });
  }
  loadAllbet() {
    return F(this, null, function* () {
      let e = yield oe().get(`/game/bet/allBet/${this.gameUnique}`);
      (e = e.map((t) => ((t.odds = t.odds / this.oddsScale), t))),
        this.allbet$.next([...e]);
    });
  }
  betValue(e) {
    return {};
  }
  initGame() {
    return F(this, null, function* () {});
  }
};
(on.allbetSocket = E().socket("/g/slots")),
  (on.mybetSocket = E().socket("/g/data/slots")),
  (on.alias = "SlotsGame");
let Kn = on;
Kn.allbetSocket.connect(), Kn.mybetSocket.connect();
const tu = ns(Kn),
  go = he(null);
function ks(n) {
  const [e] = G(n, ["game"]),
    t = e.game,
    { addData: r } = vn()[1],
    [o, i] = D(50),
    { queue: a, addItem: s, setDataQueue: c } = io(20),
    l = rr(t.mybets$);
  return (
    ar(() => {
      const u = t.allbet$.pipe(Rn((f) => !Er(f))).subscribe((f) => {
        if (Array.isArray(f)) {
          const y = f.map((g) =>
            _(k({}, g), {
              profit: new te(g.winAmount || 0)
                .minus(new te(g.betAmount || 0))
                .toNumber(),
            })
          );
          c(y);
        } else {
          const y = new te(f.winAmount || 0).minus(new te(f.betAmount || 0));
          s(_(k({}, f), { profit: y.toNumber() }));
        }
      });
      R(() => {
        u.unsubscribe();
      });
    }),
    B(() => {
      const u = l()[0];
      u && r(Number(u.betAmount), Number(u.odds), u.currencyName);
    }),
    S(go.Provider, {
      value: { game: t, logs: a, myLogs: l, size: o, setSize: i },
      get children() {
        return n.children;
      },
    })
  );
}
function ru() {
  return ge(go);
}
class As extends gn {
  constructor(e) {
    super(e),
      (this.oddsScale = 1e4),
      (this.amountScale = 1e4),
      (this.gameUrl = ""),
      (this.allbet$ = new C(null)),
      (this.mybets$ = new C(null)),
      (this.isWatching = !1),
      (this.connection = this.connection$.asObservable());
  }
  init() {}
}
const vo = he(null),
  Ss = (e) =>
    F(void 0, [e], function* ({ queryKey: n }) {
      return (yield oe().post("/game/bet/multi/history", {
        gameUnique: n[1],
        page: 1,
        pageSize: 50,
      })).list.map((t) => {
        const r = JSON.parse(t.gameDetail),
          { hash: o, resultValue: i, rate: a } = r;
        return { gameId: t.gameId, hash: o, value: i, maxRate: a || 0 };
      });
    }),
  Ps = (e) =>
    F(void 0, [e], function* ({ queryKey: n }) {
      return (
        yield dn(),
        yield oe().post("/game/bet/recent-bet/", { gameUnique: n[1] })
      );
    });
function xs(n) {
  const [e] = G(n, ["game"]),
    { addData: t } = vn()[1],
    [r, o] = Ve({ logsFromGame: [], myLogsFromGame: [] }),
    [i, a] = D(50),
    s = Pe(() => ({
      queryKey: ["/game/bet/multi/history", n.game.config.id],
      queryFn: Ss,
    })),
    c = Pe(() => ({
      queryKey: ["/game/bet/recent-bet/", n.game.config.id, i()],
      queryFn: Ps,
    })),
    l = Wn(() => c.data, []),
    u = ie(() => [...r.myLogsFromGame, ...l()]),
    f = ie(() => [...r.logsFromGame, ...(s.data || [])]),
    y = (g) => {
      const v = et(g),
        { winAmount: p, betAmount: m } = v.bets[0],
        b = Object.assign(v, { winAmount: Number(p), betAmount: Number(m) });
      o("myLogsFromGame", (d) => be([b, ...d], "distributeId"));
    };
  return (
    B(() => {
      const g = E().decodeBind((m) => {
          o("myLogsFromGame", (b) =>
            be(
              [
                _(k({}, m), {
                  gameId: m.gameId.toNumber(),
                  betTime: m.betTime.toNumber(),
                  betAmount: Number(m.betAmount),
                  winAmount: Number(m.winAmount),
                  odds: m.odds,
                  distributeId: m.distributeId.toString(),
                }),
                ...b,
              ],
              "distributeId"
            )
          ),
            t(Number(m.betAmount), Number(m.odds), m.currencyName);
        }, fn.BetLog),
        v = E().socket("/g/data");
      v.connect();
      const p = v.on("multilmybetlog", g);
      R(() => {
        p.off("multilmybetlog");
      });
    }),
    S(vo.Provider, {
      get value() {
        return _(k({}, e), {
          logs: f,
          myLogs: u,
          size: i,
          setSize: a,
          addLog: y,
        });
      },
      get children() {
        return n.children;
      },
    })
  );
}
function ou() {
  return ge(vo);
}
const wo = he();
function iu(n) {
  const e = ie(() => {
    const t = n.game;
    if (!t) return;
    const r = JSON.parse(localStorage.getItem(`ns-${t.gameName}`)) || ro,
      o = Lo(),
      i = Mo(t.connection),
      [a, s] = D(rn.normal),
      [c, l] = D(r.hotKeysEnable);
    return (
      B((u) => {
        const f = _o.login;
        return u !== !0 && R(t.online()), f;
      }),
      B(() => {
        (t instanceof Qt || t instanceof Vn) &&
          (t.watch(o.gameUnique),
          R(() => {
            t.unwatch(o.gameUnique);
          }));
      }),
      B(() => {
        localStorage.setItem(
          `ns-${t.gameName}`,
          JSON.stringify(_(k({}, r), { hotKeysEnable: c() }))
        );
      }),
      {
        game: t,
        connection: i,
        status: a,
        hotKeysEnable: c,
        setHotKeysEnable: l,
        updateGameStatus: (u) => {
          if (u instanceof Error) {
            const f =
              u.message === "need user login"
                ? rn.authFail
                : rn.unknownServerError;
            s(f);
          } else s(u);
        },
      }
    );
  });
  return S(wo.Provider, {
    get value() {
      return e();
    },
    get children() {
      return [
        ue(
          () =>
            ue(() => n.game instanceof oo)() &&
            S(os, {
              get game() {
                return n.game;
              },
              get children() {
                return n.children;
              },
            })
        ),
        ue(
          () =>
            ue(() => n.game instanceof Qt)() &&
            S(
              fs,
              X(n, {
                get game() {
                  return n.game;
                },
                get children() {
                  return n.children;
                },
              })
            )
        ),
        ue(
          () =>
            ue(() => n.game instanceof Vn)() &&
            S(ks, {
              get game() {
                return n.game;
              },
              get children() {
                return n.children;
              },
            })
        ),
        ue(
          () =>
            ue(() => n.game instanceof As)() &&
            S(xs, {
              get game() {
                return n.game;
              },
              get children() {
                return n.children;
              },
            })
        ),
        S(js, {}),
      ];
    },
  });
}
function au() {
  return ge(wo);
}
export {
  x as $,
  Er as A,
  C as B,
  Br as C,
  nu as D,
  Ja as E,
  Oe as F,
  iu as G,
  me as H,
  Le as I,
  Kr as J,
  Xa as K,
  Ys as L,
  ts as M,
  Te as N,
  zs as O,
  ps as P,
  U as Q,
  le as R,
  oo as S,
  Ur as T,
  Za as U,
  Rr as V,
  tt as W,
  Re as X,
  Us as Y,
  vn as Z,
  _e as _,
  au as a,
  be as a0,
  eu as a1,
  Zs as a2,
  $e as a3,
  ro as a4,
  Vs as a5,
  Ks as a6,
  We as a7,
  Or as a8,
  Na as a9,
  vt as aa,
  Hn as ab,
  Ia as ac,
  br as ad,
  L as ae,
  hn as af,
  ka as ag,
  As as ah,
  ou as ai,
  ds as b,
  et as c,
  Cr as d,
  zn as e,
  Rn as f,
  Qt as g,
  it as h,
  rn as i,
  Gs as j,
  Js as k,
  Ws as l,
  to as m,
  Xs as n,
  Ta as o,
  Hs as p,
  Qs as q,
  ru as r,
  ns as s,
  Gn as t,
  Rs as u,
  tu as v,
  at as w,
  Ht as x,
  es as y,
  Qo as z,
};
