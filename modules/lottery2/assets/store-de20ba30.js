var nt = Object.defineProperty;
var w = Object.getOwnPropertySymbols;
var at = Object.prototype.hasOwnProperty,
  ot = Object.prototype.propertyIsEnumerable;
var L = (t, e, r) =>
    e in t
      ? nt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  v = (t, e) => {
    for (var r in e || (e = {})) at.call(e, r) && L(t, r, e[r]);
    if (w) for (var r of w(e)) ot.call(e, r) && L(t, r, e[r]);
    return t;
  };
import { z as st, x as D } from "./solid-js-8ff414d5.js";
import { c as it, p as y } from "./store-2ed2b91e.js";
import { i as ct } from "./lottery-40ce25b9.js";
import {
  l as q,
  h as lt,
  m as ft,
  o as ut,
  k as R,
  n as Y,
  s as gt,
  p as bt,
  q as dt,
  U as P,
  a as A,
  r as p,
  j as W,
  i as pt,
  b as mt,
  S as yt,
  g as Tt,
} from "./_Uint8Array-7783c8b7.js";
import { g as At, e as ht } from "./_MapCache-9c96b8d5.js";
import { i as h, r as It, S as x, a as H } from "./isObject-909534d5.js";
var E = Object.create,
  Bt = (function () {
    function t() {}
    return function (e) {
      if (!h(e)) return {};
      if (E) return E(e);
      t.prototype = e;
      var r = new t();
      return (t.prototype = void 0), r;
    };
  })();
const jt = Bt;
function Ot(t, e) {
  var r = -1,
    n = t.length;
  for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
  return e;
}
var St = (function () {
  try {
    var t = At(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {}
})();
const C = St;
function $t(t, e) {
  for (
    var r = -1, n = t == null ? 0 : t.length;
    ++r < n && e(t[r], r, t) !== !1;

  );
  return t;
}
function J(t, e, r) {
  e == "__proto__" && C
    ? C(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (t[e] = r);
}
var wt = Object.prototype,
  Lt = wt.hasOwnProperty;
function Q(t, e, r) {
  var n = t[e];
  (!(Lt.call(t, e) && ht(n, r)) || (r === void 0 && !(e in t))) && J(t, e, r);
}
function m(t, e, r, n) {
  var i = !r;
  r || (r = {});
  for (var o = -1, s = e.length; ++o < s; ) {
    var c = e[o],
      l = n ? n(r[c], t[c], c, r, t) : void 0;
    l === void 0 && (l = t[c]), i ? J(r, c, l) : Q(r, c, l);
  }
  return r;
}
function vt(t) {
  var e = [];
  if (t != null) for (var r in Object(t)) e.push(r);
  return e;
}
var Dt = Object.prototype,
  Pt = Dt.hasOwnProperty;
function xt(t) {
  if (!h(t)) return vt(t);
  var e = q(t),
    r = [];
  for (var n in t) (n == "constructor" && (e || !Pt.call(t, n))) || r.push(n);
  return r;
}
function I(t) {
  return lt(t) ? ft(t, !0) : xt(t);
}
var Et = ut(Object.getPrototypeOf, Object);
const X = Et;
function Ct(t, e) {
  return t && m(e, R(e), t);
}
function Ft(t, e) {
  return t && m(e, I(e), t);
}
var Z = typeof exports == "object" && exports && !exports.nodeType && exports,
  F = Z && typeof module == "object" && module && !module.nodeType && module,
  Mt = F && F.exports === Z,
  M = Mt ? It.Buffer : void 0,
  N = M ? M.allocUnsafe : void 0;
function Nt(t, e) {
  if (e) return t.slice();
  var r = t.length,
    n = N ? N(r) : new t.constructor(r);
  return t.copy(n), n;
}
function Ut(t, e) {
  return m(t, Y(t), e);
}
var _t = Object.getOwnPropertySymbols,
  Gt = _t
    ? function (t) {
        for (var e = []; t; ) bt(e, Y(t)), (t = X(t));
        return e;
      }
    : gt;
const V = Gt;
function Kt(t, e) {
  return m(t, V(t), e);
}
function qt(t) {
  return dt(t, I, V);
}
var Rt = Object.prototype,
  Yt = Rt.hasOwnProperty;
function Wt(t) {
  var e = t.length,
    r = new t.constructor(e);
  return (
    e &&
      typeof t[0] == "string" &&
      Yt.call(t, "index") &&
      ((r.index = t.index), (r.input = t.input)),
    r
  );
}
function B(t) {
  var e = new t.constructor(t.byteLength);
  return new P(e).set(new P(t)), e;
}
function Ht(t, e) {
  var r = e ? B(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var Jt = /\w*$/;
function Qt(t) {
  var e = new t.constructor(t.source, Jt.exec(t));
  return (e.lastIndex = t.lastIndex), e;
}
var U = x ? x.prototype : void 0,
  _ = U ? U.valueOf : void 0;
function Xt(t) {
  return _ ? Object(_.call(t)) : {};
}
function Zt(t, e) {
  var r = e ? B(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var Vt = "[object Boolean]",
  zt = "[object Date]",
  kt = "[object Map]",
  te = "[object Number]",
  ee = "[object RegExp]",
  re = "[object Set]",
  ne = "[object String]",
  ae = "[object Symbol]",
  oe = "[object ArrayBuffer]",
  se = "[object DataView]",
  ie = "[object Float32Array]",
  ce = "[object Float64Array]",
  le = "[object Int8Array]",
  fe = "[object Int16Array]",
  ue = "[object Int32Array]",
  ge = "[object Uint8Array]",
  be = "[object Uint8ClampedArray]",
  de = "[object Uint16Array]",
  pe = "[object Uint32Array]";
function me(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case oe:
      return B(t);
    case Vt:
    case zt:
      return new n(+t);
    case se:
      return Ht(t, r);
    case ie:
    case ce:
    case le:
    case fe:
    case ue:
    case ge:
    case be:
    case de:
    case pe:
      return Zt(t, r);
    case kt:
      return new n();
    case te:
    case ne:
      return new n(t);
    case ee:
      return Qt(t);
    case re:
      return new n();
    case ae:
      return Xt(t);
  }
}
function ye(t) {
  return typeof t.constructor == "function" && !q(t) ? jt(X(t)) : {};
}
var Te = "[object Map]";
function Ae(t) {
  return H(t) && A(t) == Te;
}
var G = p && p.isMap,
  he = G ? W(G) : Ae;
const Ie = he;
var Be = "[object Set]";
function je(t) {
  return H(t) && A(t) == Be;
}
var K = p && p.isSet,
  Oe = K ? W(K) : je;
const Se = Oe;
var $e = 1,
  we = 2,
  Le = 4,
  z = "[object Arguments]",
  ve = "[object Array]",
  De = "[object Boolean]",
  Pe = "[object Date]",
  xe = "[object Error]",
  k = "[object Function]",
  Ee = "[object GeneratorFunction]",
  Ce = "[object Map]",
  Fe = "[object Number]",
  tt = "[object Object]",
  Me = "[object RegExp]",
  Ne = "[object Set]",
  Ue = "[object String]",
  _e = "[object Symbol]",
  Ge = "[object WeakMap]",
  Ke = "[object ArrayBuffer]",
  qe = "[object DataView]",
  Re = "[object Float32Array]",
  Ye = "[object Float64Array]",
  We = "[object Int8Array]",
  He = "[object Int16Array]",
  Je = "[object Int32Array]",
  Qe = "[object Uint8Array]",
  Xe = "[object Uint8ClampedArray]",
  Ze = "[object Uint16Array]",
  Ve = "[object Uint32Array]",
  a = {};
a[z] =
  a[ve] =
  a[Ke] =
  a[qe] =
  a[De] =
  a[Pe] =
  a[Re] =
  a[Ye] =
  a[We] =
  a[He] =
  a[Je] =
  a[Ce] =
  a[Fe] =
  a[tt] =
  a[Me] =
  a[Ne] =
  a[Ue] =
  a[_e] =
  a[Qe] =
  a[Xe] =
  a[Ze] =
  a[Ve] =
    !0;
a[xe] = a[k] = a[Ge] = !1;
function d(t, e, r, n, i, o) {
  var s,
    c = e & $e,
    l = e & we,
    et = e & Le;
  if ((r && (s = i ? r(t, n, i, o) : r(t)), s !== void 0)) return s;
  if (!h(t)) return t;
  var j = pt(t);
  if (j) {
    if (((s = Wt(t)), !c)) return Ot(t, s);
  } else {
    var g = A(t),
      O = g == k || g == Ee;
    if (mt(t)) return Nt(t, c);
    if (g == tt || g == z || (O && !i)) {
      if (((s = l || O ? {} : ye(t)), !c))
        return l ? Kt(t, Ft(s, t)) : Ut(t, Ct(s, t));
    } else {
      if (!a[g]) return i ? t : {};
      s = me(t, g, c);
    }
  }
  o || (o = new yt());
  var S = o.get(t);
  if (S) return S;
  o.set(t, s),
    Se(t)
      ? t.forEach(function (f) {
          s.add(d(f, e, r, f, t, o));
        })
      : Ie(t) &&
        t.forEach(function (f, u) {
          s.set(u, d(f, e, r, u, t, o));
        });
  var rt = et ? (l ? qt : Tt) : l ? I : R,
    $ = j ? void 0 : rt(t);
  return (
    $t($ || t, function (f, u) {
      $ && ((u = f), (f = t[u])), Q(s, u, d(f, e, r, u, t, o));
    }),
    s
  );
}
var ze = 1,
  ke = 4;
function b(t) {
  return d(t, ze | ke);
}
const T = {
  marketId: 0,
  selectedData: { id: "", name: "", odds: 0, result: 0 },
  selectedDetailData: {
    draws: 1,
    discount: 0,
    betAmount: 10,
    betsNumber: 1,
    normalBallList: [],
    bonusBallList: [],
  },
};
function tr() {
  const [t, e] = it({
    Betlist: [],
    BetItem: b(T),
    NormalBallsList: [],
    BonusBallsList: [],
    TotalDrawsList: [{ label: "1 Draw", value: 1, discount: 0 }],
    betBc: { id: "bc", lotteryList: [], ticketNum: 0 },
    isOpenSlip: !1,
  });
  return {
    state: t,
    setState: e,
    setBetItem(n, i) {
      e(
        "BetItem",
        y((o) => {
          (o.selectedDetailData = b(T.selectedDetailData)),
            (o.selectedData = n),
            (o.marketId = i);
        })
      );
    },
    addBetList(n, i) {
      let o = !1;
      const s = {
        id: st(),
        period: n,
        betItem: i || b(t.BetItem),
        totalDrawsList: b(t.TotalDrawsList),
        remove: !1,
        error: !1,
      };
      return (
        D(() => {
          e(
            "Betlist",
            y((c) => {
              c.forEach((l) => {
                if (
                  l.period.lotteryId === n.lotteryId &&
                  l.betItem.marketId === s.betItem.marketId &&
                  !ct(s.betItem.marketId)
                ) {
                  (o = !0), (l.betItem = b(t.BetItem));
                  return;
                }
              }),
                o || c.push(s);
            })
          ),
            e("BetItem", b(T));
        }),
        o
      );
    },
    quickPick(n, i) {
      const o = i === "normalBallList" ? t.NormalBallsList : t.BonusBallsList;
      e(
        "BetItem",
        y((s) => {
          s.selectedDetailData[i] = er(o, n);
        })
      );
    },
    addBetBc(n) {
      let i = !1;
      const o = v({ lotteryList: [], ticketNum: 0, id: "bc" }, n);
      return (
        D(() => {
          e("betBc", o);
        }),
        i
      );
    },
  };
}
const lr = tr();
function er(t, e) {
  const r = [...t];
  for (let n = r.length - 1; n > 0; n--) {
    const i = Math.floor(Math.random() * (n + 1));
    [r[n], r[i]] = [r[i], r[n]];
  }
  return r.slice(0, e);
}
export { T as i, lr as p };
