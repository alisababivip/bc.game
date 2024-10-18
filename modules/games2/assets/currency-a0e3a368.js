var or = Object.defineProperty,
  cr = Object.defineProperties;
var sr = Object.getOwnPropertyDescriptors;
var I = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty,
  U = Object.prototype.propertyIsEnumerable;
var G = (r, n, e) =>
    n in r
      ? or(r, n, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (r[n] = e),
  d = (r, n) => {
    for (var e in n || (n = {})) M.call(n, e) && G(r, e, n[e]);
    if (I) for (var e of I(n)) U.call(n, e) && G(r, e, n[e]);
    return r;
  },
  N = (r, n) => cr(r, sr(n));
var x = (r, n) => {
  var e = {};
  for (var t in r) M.call(r, t) && n.indexOf(t) < 0 && (e[t] = r[t]);
  if (r != null && I)
    for (var t of I(r)) n.indexOf(t) < 0 && U.call(r, t) && (e[t] = r[t]);
  return e;
};
import {
  f as T,
  l as O,
  $ as ir,
  H as g,
  c as lr,
  a0 as yr,
  D as w,
  ac as X,
  G as Y,
  h as m,
  aj as B,
  a2 as mr,
  ak as h,
} from "./manifest-a234c8a0.js";
import {
  k as fr,
  _ as dr,
  m as vr,
  P as pr,
  e as br,
} from "./index-4897b9da.js";
import { a as z, i as Z } from "./isSymbol-0edd6b24.js";
import { m as Cr, r as rr, d as D, h as gr } from "./amount-af49bfc0.js";
import { S as E, b as Nr } from "./isObject-d5c4896e.js";
function Ar(r, n) {
  const [e, t] = T(H(n == null ? void 0 : n()));
  return (
    O(() => {
      var u;
      t(
        ((u = r()) == null ? void 0 : u.tagName.toLowerCase()) ||
          H(n == null ? void 0 : n())
      );
    }),
    e
  );
}
function H(r) {
  return fr(r) ? r : void 0;
}
dr({}, { Button: () => Tr, Root: () => nr });
var hr = ["button", "color", "file", "image", "reset", "submit"];
function nr(r) {
  let n;
  const e = vr({ type: "button" }, r),
    [t, u] = ir(e, ["ref", "type", "disabled"]),
    c = Ar(
      () => n,
      () => "button"
    ),
    s = g(() => {
      const i = c();
      return (
        i != null &&
        (function (l) {
          const f = l.tagName.toLowerCase();
          return (
            f === "button" ||
            (!(f !== "input" || !l.type) && hr.indexOf(l.type) !== -1)
          );
        })({ tagName: i, type: t.type })
      );
    }),
    v = g(() => c() === "input"),
    b = g(
      () => c() === "a" && (n == null ? void 0 : n.getAttribute("href")) != null
    );
  return lr(
    pr,
    yr(
      {
        as: "button",
        ref(i) {
          var l = br((f) => (n = f), t.ref);
          typeof l == "function" && l(i);
        },
        get type() {
          return s() || v() ? t.type : void 0;
        },
        get role() {
          return s() || b() ? void 0 : "button";
        },
        get tabIndex() {
          return s() || b() || t.disabled ? void 0 : 0;
        },
        get disabled() {
          return s() || v() ? t.disabled : void 0;
        },
        get "aria-disabled"() {
          return !(s() || v() || !t.disabled) || void 0;
        },
        get "data-disabled"() {
          return t.disabled ? "" : void 0;
        },
      },
      u
    )
  );
}
var Tr = nr;
function er(r) {
  var n,
    e,
    t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (n = 0; n < r.length; n++)
        r[n] && (e = er(r[n])) && (t && (t += " "), (t += e));
    else for (n in r) r[n] && (t && (t += " "), (t += n));
  return t;
}
const J = (r) => (typeof r == "boolean" ? "".concat(r) : r === 0 ? "0" : r),
  R = function () {
    for (var r, n, e = 0, t = ""; e < arguments.length; )
      (r = arguments[e++]) && (n = er(r)) && (t && (t += " "), (t += n));
    return t;
  },
  un = (r, n) => (e) => {
    var t;
    if ((n == null ? void 0 : n.variants) == null)
      return R(
        r,
        e == null ? void 0 : e.class,
        e == null ? void 0 : e.className
      );
    const { variants: u, defaultVariants: c } = n,
      s = Object.keys(u).map((i) => {
        const l = e == null ? void 0 : e[i],
          f = c == null ? void 0 : c[i];
        if (l === null) return null;
        const p = J(l) || J(f);
        return u[i][p];
      }),
      v =
        e &&
        Object.entries(e).reduce((i, l) => {
          let [f, p] = l;
          return p === void 0 || (i[f] = p), i;
        }, {}),
      b =
        n == null || (t = n.compoundVariants) === null || t === void 0
          ? void 0
          : t.reduce((i, l) => {
              let j = l,
                { class: f, className: p } = j,
                P = x(j, ["class", "className"]);
              return Object.entries(P).every((k) => {
                let [A, a] = k;
                return Array.isArray(a)
                  ? a.includes(d(d({}, c), v)[A])
                  : d(d({}, c), v)[A] === a;
              })
                ? [...i, f, p]
                : i;
            }, []);
    return R(
      r,
      s,
      b,
      e == null ? void 0 : e.class,
      e == null ? void 0 : e.className
    );
  };
var wr = Object.prototype.hasOwnProperty;
function Or(r, n) {
  return r != null && wr.call(r, n);
}
const V = Array.isArray;
var jr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  kr = /^\w*$/;
function Ir(r, n) {
  if (V(r)) return !1;
  var e = typeof r;
  return (
    !(e != "number" && e != "symbol" && e != "boolean" && r != null && !z(r)) ||
    kr.test(r) ||
    !jr.test(r) ||
    (n != null && r in Object(n))
  );
}
var _,
  F,
  L,
  Br =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Vr = /\\(\\)?/g,
  Pr =
    ((_ = function (r) {
      var n = [];
      return (
        r.charCodeAt(0) === 46 && n.push(""),
        r.replace(Br, function (e, t, u, c) {
          n.push(u ? c.replace(Vr, "$1") : t || e);
        }),
        n
      );
    }),
    (F = Cr(_, function (r) {
      return L.size === 500 && L.clear(), r;
    })),
    (L = F.cache),
    F);
const xr = Pr;
function Fr(r, n) {
  for (var e = -1, t = r == null ? 0 : r.length, u = Array(t); ++e < t; )
    u[e] = n(r[e], e, r);
  return u;
}
var Lr = 1 / 0,
  q = E ? E.prototype : void 0,
  K = q ? q.toString : void 0;
function tr(r) {
  if (typeof r == "string") return r;
  if (V(r)) return Fr(r, tr) + "";
  if (z(r)) return K ? K.call(r) : "";
  var n = r + "";
  return n == "0" && 1 / r == -Lr ? "-0" : n;
}
function Sr(r) {
  return r == null ? "" : tr(r);
}
function $r(r, n) {
  return V(r) ? r : Ir(r, n) ? [r] : xr(Sr(r));
}
function Q(r) {
  return Z(r) && Nr(r) == "[object Arguments]";
}
var ar = Object.prototype,
  zr = ar.hasOwnProperty,
  Gr = ar.propertyIsEnumerable;
const Mr = Q(
  (function () {
    return arguments;
  })()
)
  ? Q
  : function (r) {
      return Z(r) && zr.call(r, "callee") && !Gr.call(r, "callee");
    };
var Ur = 9007199254740991,
  Dr = /^(?:0|[1-9]\d*)$/;
function Er(r, n) {
  var e = typeof r;
  return (
    !!(n = n == null ? Ur : n) &&
    (e == "number" || (e != "symbol" && Dr.test(r))) &&
    r > -1 &&
    r % 1 == 0 &&
    r < n
  );
}
var Hr = 9007199254740991;
function Jr(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Hr;
}
var Rr = 1 / 0;
function _r(r) {
  if (typeof r == "string" || z(r)) return r;
  var n = r + "";
  return n == "0" && 1 / r == -Rr ? "-0" : n;
}
function qr(r, n, e) {
  for (var t = -1, u = (n = $r(n, r)).length, c = !1; ++t < u; ) {
    var s = _r(n[t]);
    if (!(c = r != null && e(r, s))) break;
    r = r[s];
  }
  return c || ++t != u
    ? c
    : !!(u = r == null ? 0 : r.length) && Jr(u) && Er(s, u) && (V(r) || Mr(r));
}
function S(r, n) {
  return r != null && qr(r, n, Or);
}
const ur = {
    lastLogId: "0",
    currencyName: "BTC",
    aliasCurrencyName: "BTC",
    amount: new w(0),
    generalAmount: new w(0),
    bonusAmount: new w(0),
    abnormal: !0,
    sort: 3,
    display: !0,
    displayStatus: 0,
    supportTx: !0,
    useable: !1,
    areaAble: !0,
    symbol: "BTC",
    deducting: new w(0),
  },
  Kr = [ur],
  Qr = {
    currencyName: "BTC",
    aliasCurrencyName: "BTC",
    fullName: "Bitcoin",
    unitAmount: 1e8,
    sort: 3,
    display: !1,
    channelName: "BCG",
    channelCurrencyName: "BTC",
    precisionUnit: 7,
    currencyTokens: [],
    currencyType: "",
    supportChains: [],
  },
  [Wr, on] = X(() => {
    const [r, n] = Y({
      invitationCode: m.currentInvitationCode,
      currencyV2: B.currency,
      usdPrice: B.usdPrice,
      phoneCode: m.areaCode,
      countryCode: m.areaCode,
      currencyName: m.setting.currencyName,
      aliasCurrencyName: m.setting.currencyName,
      platform: { isAndroid: !1, isIOS: !1, isApp: !1 },
    });
    return (
      O(() => {
        const e = rr(m.setting.currencyName);
        n("currencyName", e),
          n("aliasCurrencyName", e.replace("FIAT", "")),
          n("countryCode", m.areaCode),
          n("phoneCode", m.areaCode),
          n("invitationCode", m.currentInvitationCode),
          n("currencyV2", B.currency),
          n("usdPrice", B.usdPrice);
      }),
      [r, n]
    );
  });
function Xr() {
  return { system: Wr };
}
mr(null);
const $ = (r) => ({
    name: r.aliasCurrencyName,
    symbol: r.currencyName,
    decimal: r.precisionUnit,
  }),
  W = (r) => {
    const s = r,
      { generalAmount: n, bonusAmount: e, deducting: t, amount: u } = s,
      c = x(s, ["generalAmount", "bonusAmount", "deducting", "amount"]);
    return N(d({}, c), {
      generalAmount: n,
      amount: u,
      deducting: t,
      bonusAmount: e,
      symbol: c.currencyName,
    });
  },
  Yr = X(() => {
    const { system: r } = Xr(),
      [n, e] = Y({
        currencies: Kr,
        activeCurrency: ur,
        activeCurrencyConfig: Qr,
      }),
      [t, u] = T(null),
      [c, s] = T(!1),
      [v, b] = T(!1),
      [i, l] = T(!1),
      f = g(() => n.activeCurrency),
      p = g(() => n.activeCurrency.amount),
      P = g(() => {
        const a = n.activeCurrencyConfig.currencyName;
        return N(d({}, $(n.activeCurrencyConfig)), { icon: a });
      }),
      j = g(() => {
        const a = m.setting.localeCurrencyName;
        return r.currencyV2[a]
          ? N(d({}, $(r.currencyV2[a])), { icon: a })
          : { name: a, symbol: a, decimal: 2, icon: a };
      }),
      k = (a) => {
        var y;
        const o = (y = r.currencyV2[a]) != null ? y : null;
        return o && N(d({}, $(o)), { icon: o.currencyName });
      },
      A = (a) => {
        var y;
        e("activeCurrencyConfig", gr(r, a)),
          localStorage.setItem("activeToken", JSON.stringify(a));
        const o =
          (y = n.currencies) == null
            ? void 0
            : y.find((C) => D(C.currencyName, a.symbol));
        o && e("activeCurrency", o);
      };
    return (
      O(() => {
        m.login ||
          e("activeCurrency", (a) => a && N(d({}, a), { amount: new w(0) }));
      }),
      O(() => {
        if (v()) return;
        const a = rr(m.setting.currencyName),
          o = h[a],
          y = r.currencyV2[a];
        o && e("activeCurrency", W(h[a])), y && e("activeCurrencyConfig", y);
      }),
      O(() => {
        Object.keys(h).length &&
          e(
            "currencies",
            Object.values(h)
              .filter((C) => C.display)
              .map((C) => W(C))
          );
        const {
          amount: a,
          generalAmount: o,
          bonusAmount: y,
        } = h[n.activeCurrency.currencyName];
        e("activeCurrency", { amount: a, generalAmount: o, bonusAmount: y }),
          l(m.setting.enableLocaleCurrency);
      }),
      {
        balance: p,
        currency: f,
        profit: t,
        isMaxBet: c,
        activeToken: P,
        activeFiatToken: j,
        isViewInFiat: i,
        setCurrency: (a) => e("activeCurrency", a),
        setIsViewInFiat: l,
        setActiveToken: A,
        setIsMaxBet: s,
        setProfit: u,
        setIsfrozen: b,
        isFrozen: v,
        isFiat: (a) => {
          let o = "";
          return (
            typeof a == "string"
              ? (o = a)
              : S(a, "symbol")
              ? (o = a.symbol)
              : "currencyName" in a && (o = a.currencyName),
            [r.currencyName, r.aliasCurrencyName].some(
              (y) => y.toLowerCase() === o.toLowerCase()
            )
          );
        },
        findCurrency: (a) => {
          var y;
          let o = "";
          return (
            typeof a == "string" && (o = a),
            S(a, "symbol")
              ? (o = a.symbol)
              : S(a, "currencyName") && (o = a.currencyName),
            ((y = n.currencies) == null
              ? void 0
              : y.find((C) => D(C.currencyName, o))) || null
          );
        },
        findToken: k,
        resetToken: () => {
          b(!1);
          const a = k(m.setting.currencyName);
          a && A(a);
        },
        store: n,
      }
    );
  });
function cn() {
  return Yr;
}
export {
  nr as B,
  Xr as a,
  V as b,
  un as c,
  Mr as d,
  Er as e,
  $r as f,
  _r as g,
  qr as h,
  Jr as i,
  Ir as j,
  Fr as k,
  S as l,
  Ar as m,
  Sr as t,
  cn as u,
};
