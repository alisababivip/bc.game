var Oe = Object.defineProperty;
var B = Object.getOwnPropertySymbols;
var Ae = Object.prototype.hasOwnProperty,
  Se = Object.prototype.propertyIsEnumerable;
var q = (e, r, t) =>
    r in e
      ? Oe(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  w = (e, r) => {
    for (var t in r || (r = {})) Ae.call(r, t) && q(e, t, r[t]);
    if (B) for (var t of B(r)) Se.call(r, t) && q(e, t, r[t]);
    return e;
  };
import { L as $e } from "./manifest-cc1f4445.js";
import {
  q as je,
  c as G,
  b as R,
  r as we,
  u as P,
  j as Pe,
} from "./solid-js-38561dfe.js";
import { b as Ie, r as Ce, S as D } from "./_baseGetTag-c2e287b9.js";
import {
  m as te,
  i as x,
  l as _e,
  e as ne,
  o as xe,
  p as Le,
  k as ae,
  q as ie,
  s as Me,
  b as Fe,
  r as Ee,
  U as H,
  g as L,
  t as S,
  u as oe,
  c as ue,
  S as se,
  n as Ue,
  d as Ke,
  a as W,
  h as Ne,
} from "./_baseFor-3fee30d6.js";
import { a as j, i as I } from "./isArray-79a0be9c.js";
import { i as T, g as Be, e as M, a as qe } from "./_MapCache-1fb5cc44.js";
var Q = Object.create,
  Ge = (function () {
    function e() {}
    return function (r) {
      if (!T(r)) return {};
      if (Q) return Q(r);
      e.prototype = r;
      var t = new e();
      return (e.prototype = void 0), t;
    };
  })();
const Re = Ge;
function De(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
function fe(e, r) {
  var t = -1,
    n = e.length;
  for (r || (r = Array(n)); ++t < n; ) r[t] = e[t];
  return r;
}
var He = 800,
  We = 16,
  Qe = Date.now;
function Ye(e) {
  var r = 0,
    t = 0;
  return function () {
    var n = Qe(),
      i = We - (n - t);
    if (((t = n), i > 0)) {
      if (++r >= He) return arguments[0];
    } else r = 0;
    return e.apply(void 0, arguments);
  };
}
function Je(e) {
  return function () {
    return e;
  };
}
var Ve = (function () {
  try {
    var e = Be(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (r) {}
})();
const $ = Ve;
var Xe = $
  ? function (e, r) {
      return $(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Je(r),
        writable: !0,
      });
    }
  : te;
const Ze = Xe;
var ze = Ye(Ze);
const ke = ze;
function er(e, r) {
  for (
    var t = -1, n = e == null ? 0 : e.length;
    ++t < n && r(e[t], t, e) !== !1;

  );
  return e;
}
function F(e, r, t) {
  r == "__proto__" && $
    ? $(e, r, { configurable: !0, enumerable: !0, value: t, writable: !0 })
    : (e[r] = t);
}
var rr = Object.prototype,
  tr = rr.hasOwnProperty;
function ce(e, r, t) {
  var n = e[r];
  (!(tr.call(e, r) && M(n, t)) || (t === void 0 && !(r in e))) && F(e, r, t);
}
function m(e, r, t, n) {
  var i = !t;
  t || (t = {});
  for (var u = -1, a = r.length; ++u < a; ) {
    var o = r[u],
      f = n ? n(t[o], e[o], o, t, e) : void 0;
    f === void 0 && (f = e[o]), i ? F(t, o, f) : ce(t, o, f);
  }
  return t;
}
var Y = Math.max;
function nr(e, r, t) {
  return (
    (r = Y(r === void 0 ? e.length - 1 : r, 0)),
    function () {
      for (
        var n = arguments, i = -1, u = Y(n.length - r, 0), a = Array(u);
        ++i < u;

      )
        a[i] = n[r + i];
      i = -1;
      for (var o = Array(r + 1); ++i < r; ) o[i] = n[i];
      return (o[r] = t(a)), De(e, this, o);
    }
  );
}
function ar(e, r) {
  return ke(nr(e, r, te), e + "");
}
function ir(e, r, t) {
  if (!T(t)) return !1;
  var n = typeof r;
  return (n == "number" ? x(t) && _e(r, t.length) : n == "string" && r in t)
    ? M(t[r], e)
    : !1;
}
function or(e) {
  return ar(function (r, t) {
    var n = -1,
      i = t.length,
      u = i > 1 ? t[i - 1] : void 0,
      a = i > 2 ? t[2] : void 0;
    for (
      u = e.length > 3 && typeof u == "function" ? (i--, u) : void 0,
        a && ir(t[0], t[1], a) && ((u = i < 3 ? void 0 : u), (i = 1)),
        r = Object(r);
      ++n < i;

    ) {
      var o = t[n];
      o && e(r, o, n, u);
    }
    return r;
  });
}
function ur(e) {
  var r = [];
  if (e != null) for (var t in Object(e)) r.push(t);
  return r;
}
var sr = Object.prototype,
  fr = sr.hasOwnProperty;
function cr(e) {
  if (!T(e)) return ur(e);
  var r = ne(e),
    t = [];
  for (var n in e) (n == "constructor" && (r || !fr.call(e, n))) || t.push(n);
  return t;
}
function v(e) {
  return x(e) ? xe(e, !0) : cr(e);
}
var lr = Le(Object.getPrototypeOf, Object);
const E = lr;
var gr = "[object Object]",
  dr = Function.prototype,
  pr = Object.prototype,
  le = dr.toString,
  yr = pr.hasOwnProperty,
  br = le.call(Object);
function U(e) {
  if (!j(e) || Ie(e) != gr) return !1;
  var r = E(e);
  if (r === null) return !0;
  var t = yr.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && le.call(t) == br;
}
function hr(e, r) {
  return e && m(r, ae(r), e);
}
function Tr(e, r) {
  return e && m(r, v(r), e);
}
var ge = typeof exports == "object" && exports && !exports.nodeType && exports,
  J = ge && typeof module == "object" && module && !module.nodeType && module,
  mr = J && J.exports === ge,
  V = mr ? Ce.Buffer : void 0,
  X = V ? V.allocUnsafe : void 0;
function de(e, r) {
  if (r) return e.slice();
  var t = e.length,
    n = X ? X(t) : new e.constructor(t);
  return e.copy(n), n;
}
function vr(e, r) {
  return m(e, ie(e), r);
}
var Or = Object.getOwnPropertySymbols,
  Ar = Or
    ? function (e) {
        for (var r = []; e; ) Fe(r, ie(e)), (e = E(e));
        return r;
      }
    : Me;
const pe = Ar;
function Sr(e, r) {
  return m(e, pe(e), r);
}
function $r(e) {
  return Ee(e, v, pe);
}
var jr = Object.prototype,
  wr = jr.hasOwnProperty;
function Pr(e) {
  var r = e.length,
    t = new e.constructor(r);
  return (
    r &&
      typeof e[0] == "string" &&
      wr.call(e, "index") &&
      ((t.index = e.index), (t.input = e.input)),
    t
  );
}
function K(e) {
  var r = new e.constructor(e.byteLength);
  return new H(r).set(new H(e)), r;
}
function Ir(e, r) {
  var t = r ? K(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Cr = /\w*$/;
function _r(e) {
  var r = new e.constructor(e.source, Cr.exec(e));
  return (r.lastIndex = e.lastIndex), r;
}
var Z = D ? D.prototype : void 0,
  z = Z ? Z.valueOf : void 0;
function xr(e) {
  return z ? Object(z.call(e)) : {};
}
function ye(e, r) {
  var t = r ? K(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Lr = "[object Boolean]",
  Mr = "[object Date]",
  Fr = "[object Map]",
  Er = "[object Number]",
  Ur = "[object RegExp]",
  Kr = "[object Set]",
  Nr = "[object String]",
  Br = "[object Symbol]",
  qr = "[object ArrayBuffer]",
  Gr = "[object DataView]",
  Rr = "[object Float32Array]",
  Dr = "[object Float64Array]",
  Hr = "[object Int8Array]",
  Wr = "[object Int16Array]",
  Qr = "[object Int32Array]",
  Yr = "[object Uint8Array]",
  Jr = "[object Uint8ClampedArray]",
  Vr = "[object Uint16Array]",
  Xr = "[object Uint32Array]";
function Zr(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case qr:
      return K(e);
    case Lr:
    case Mr:
      return new n(+e);
    case Gr:
      return Ir(e, t);
    case Rr:
    case Dr:
    case Hr:
    case Wr:
    case Qr:
    case Yr:
    case Jr:
    case Vr:
    case Xr:
      return ye(e, t);
    case Fr:
      return new n();
    case Er:
    case Nr:
      return new n(e);
    case Ur:
      return _r(e);
    case Kr:
      return new n();
    case Br:
      return xr(e);
  }
}
function be(e) {
  return typeof e.constructor == "function" && !ne(e) ? Re(E(e)) : {};
}
var zr = "[object Map]";
function kr(e) {
  return j(e) && L(e) == zr;
}
var k = S && S.isMap,
  et = k ? oe(k) : kr;
const rt = et;
var tt = "[object Set]";
function nt(e) {
  return j(e) && L(e) == tt;
}
var ee = S && S.isSet,
  at = ee ? oe(ee) : nt;
const it = at;
var ot = 1,
  ut = 2,
  st = 4,
  he = "[object Arguments]",
  ft = "[object Array]",
  ct = "[object Boolean]",
  lt = "[object Date]",
  gt = "[object Error]",
  Te = "[object Function]",
  dt = "[object GeneratorFunction]",
  pt = "[object Map]",
  yt = "[object Number]",
  me = "[object Object]",
  bt = "[object RegExp]",
  ht = "[object Set]",
  Tt = "[object String]",
  mt = "[object Symbol]",
  vt = "[object WeakMap]",
  Ot = "[object ArrayBuffer]",
  At = "[object DataView]",
  St = "[object Float32Array]",
  $t = "[object Float64Array]",
  jt = "[object Int8Array]",
  wt = "[object Int16Array]",
  Pt = "[object Int32Array]",
  It = "[object Uint8Array]",
  Ct = "[object Uint8ClampedArray]",
  _t = "[object Uint16Array]",
  xt = "[object Uint32Array]",
  c = {};
c[he] =
  c[ft] =
  c[Ot] =
  c[At] =
  c[ct] =
  c[lt] =
  c[St] =
  c[$t] =
  c[jt] =
  c[wt] =
  c[Pt] =
  c[pt] =
  c[yt] =
  c[me] =
  c[bt] =
  c[ht] =
  c[Tt] =
  c[mt] =
  c[It] =
  c[Ct] =
  c[_t] =
  c[xt] =
    !0;
c[gt] = c[Te] = c[vt] = !1;
function A(e, r, t, n, i, u) {
  var a,
    o = r & ot,
    f = r & ut,
    l = r & st;
  if ((t && (a = i ? t(e, n, i, u) : t(e)), a !== void 0)) return a;
  if (!T(e)) return e;
  var s = I(e);
  if (s) {
    if (((a = Pr(e)), !o)) return fe(e, a);
  } else {
    var g = L(e),
      d = g == Te || g == dt;
    if (ue(e)) return de(e, o);
    if (g == me || g == he || (d && !i)) {
      if (((a = f || d ? {} : be(e)), !o))
        return f ? Sr(e, Tr(a, e)) : vr(e, hr(a, e));
    } else {
      if (!c[g]) return i ? e : {};
      a = Zr(e, g, o);
    }
  }
  u || (u = new se());
  var p = u.get(e);
  if (p) return p;
  u.set(e, a),
    it(e)
      ? e.forEach(function (y) {
          a.add(A(y, r, t, y, e, u));
        })
      : rt(e) &&
        e.forEach(function (y, b) {
          a.set(b, A(y, r, t, b, e, u));
        });
  var O = l ? (f ? $r : Ue) : f ? v : ae,
    N = s ? void 0 : O(e);
  return (
    er(N || e, function (y, b) {
      N && ((b = y), (y = e[b])), ce(a, b, A(y, r, t, b, e, u));
    }),
    a
  );
}
var Lt = 1,
  Mt = 4;
function Ft(e) {
  return A(e, Lt | Mt);
}
function C(e, r, t) {
  ((t !== void 0 && !M(e[r], t)) || (t === void 0 && !(r in e))) && F(e, r, t);
}
function Et(e) {
  return j(e) && x(e);
}
function _(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
function Ut(e) {
  return m(e, v(e));
}
function Kt(e, r, t, n, i, u, a) {
  var o = _(e, t),
    f = _(r, t),
    l = a.get(f);
  if (l) {
    C(e, t, l);
    return;
  }
  var s = u ? u(o, f, t + "", e, r, a) : void 0,
    g = s === void 0;
  if (g) {
    var d = I(f),
      p = !d && ue(f),
      O = !d && !p && Ke(f);
    (s = f),
      d || p || O
        ? I(o)
          ? (s = o)
          : Et(o)
          ? (s = fe(o))
          : p
          ? ((g = !1), (s = de(f, !0)))
          : O
          ? ((g = !1), (s = ye(f, !0)))
          : (s = [])
        : U(f) || W(f)
        ? ((s = o), W(o) ? (s = Ut(o)) : (!T(o) || qe(o)) && (s = be(f)))
        : (g = !1);
  }
  g && (a.set(f, s), i(s, f, n, u, a), a.delete(f)), C(e, t, s);
}
function ve(e, r, t, n, i) {
  e !== r &&
    Ne(
      r,
      function (u, a) {
        if ((i || (i = new se()), T(u))) Kt(e, r, a, t, ve, n, i);
        else {
          var o = n ? n(_(e, a), u, a + "", e, r, i) : void 0;
          o === void 0 && (o = u), C(e, a, o);
        }
      },
      v
    );
}
var Nt = or(function (e, r, t, n) {
  ve(e, r, t, n);
});
const re = Nt;
function Bt(e) {
  return JSON.stringify(e, (r, t) =>
    U(t)
      ? Object.keys(t)
          .sort()
          .reduce((n, i) => ((n[i] = t[i]), n), {})
      : t
  );
}
const h = {};
class Yt {
  constructor(r = je()) {
    this.serviceId = r;
  }
  refetchResource(r) {
    return Promise.all(
      Object.entries(h).map(([t, n]) => {
        const i = n.queryKey;
        if (
          ((a, o) => {
            function f(l, s) {
              return l === s
                ? !0
                : typeof l != typeof s
                ? !1
                : l && s && typeof l == "object" && typeof s == "object"
                ? !Object.keys(l).some((g) => !f(l[g], s[g]))
                : !1;
            }
            return !!f(a, o);
          })([this.serviceId, r], [this.serviceId, ...i])
        ) {
          const [a, { refetch: o }] = n.resource;
          return o();
        }
      })
    );
  }
  createSharedResource(r, t) {
    const n = G(() => w({ mergeInitialData: !0 }, r())),
      i = G(() => Bt([...n().queryKey])),
      u = (l) => {
        if (h[l]) return h[l].resource;
        const s = Pe(
          () => {
            var g, d;
            return (d =
              (g = t == null ? void 0 : t.enable) == null
                ? void 0
                : g.call(t)) != null
              ? d
              : !0;
          },
          n().queryFn,
          {
            initialValue: n().initialData,
            storage:
              t != null && t.persisted ? () => $e(R([]), { name: l }) : void 0,
          }
        );
        return (h[l] = { resource: s, queryKey: n().queryKey }), s;
      },
      [a, o] = R(u(i()));
    we((l) => {
      const s = i();
      return l !== s && o(u(s)), s;
    }, i());
    function f() {
      const l = a()[0]();
      return P(() => {
        const s = n();
        if (s.mergeInitialData && s.initialData) {
          const g = (d, p) => (U(d) ? re(w({}, d), p, g) : p != null ? p : d);
          return re(Ft(n().initialData), l, g);
        }
        return l;
      });
    }
    return (
      Object.defineProperties(f, {
        state: { get: () => a()[0].state },
        error: { get: () => a()[0].error },
        loading: {
          get() {
            return a()[0].loading;
          },
        },
        latest: {
          get() {
            return a()[0].latest;
          },
        },
      }),
      [
        f,
        {
          get mutate() {
            return P(a)[1].mutate;
          },
          get refetch() {
            return P(a)[1].refetch;
          },
        },
      ]
    );
  }
}
const Jt = () => {
  for (const e in h) h.hasOwnProperty(e) && delete h[e];
};
export { Yt as B, fe as a, F as b, Jt as c, ir as i };
