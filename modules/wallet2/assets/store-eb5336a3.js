var m = (e, t, n) =>
  new Promise((c, o) => {
    var f = (s) => {
        try {
          i(n.next(s));
        } catch (u) {
          o(u);
        }
      },
      r = (s) => {
        try {
          i(n.throw(s));
        } catch (u) {
          o(u);
        }
      },
      i = (s) => (s.done ? c(s.value) : Promise.resolve(s.value).then(f, r));
    i((n = n.apply(e, t)).next());
  });
import {
  w as b,
  m as l,
  s as C,
  H as S,
  o as w,
  j as I,
  W as N,
} from "./manifest-e0f0ba59.js";
import { j as R, d as p, k as g } from "./solid-js-2e15682c.js";
import { c as B } from "./store-2ed2b91e.js";
import { m as F } from "./memoize-ff109130.js";
import { b as O, a as L } from "./_baseFlatten-f0777715.js";
import {
  a as k,
  i as D,
  S as h,
  s as A,
  b as E,
  c as j,
} from "./_setToArray-f7a05dc1.js";
import { b as H } from "./_baseFindIndex-15a8234c.js";
function U() {}
function _(e) {
  return e !== e;
}
function x(e, t, n) {
  for (var c = n - 1, o = e.length; ++c < o; ) if (e[c] === t) return c;
  return -1;
}
function $(e, t, n) {
  return t === t ? x(e, t, n) : H(e, _, n);
}
function v(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && $(e, t, 0) > -1;
}
function G(e) {
  return k(e) && D(e);
}
function W(e, t, n) {
  for (var c = -1, o = e == null ? 0 : e.length; ++c < o; )
    if (n(t, e[c])) return !0;
  return !1;
}
var X = 1 / 0,
  Y =
    h && 1 / A(new h([, -0]))[1] == X
      ? function (e) {
          return new h(e);
        }
      : U;
const q = Y;
var z = 200;
function P(e, t, n) {
  var c = -1,
    o = v,
    f = e.length,
    r = !0,
    i = [],
    s = i;
  if (n) (r = !1), (o = W);
  else if (f >= z) {
    var u = t ? null : q(e);
    if (u) return A(u);
    (r = !1), (o = j), (s = new E());
  } else s = t ? [] : i;
  e: for (; ++c < f; ) {
    var a = e[c],
      y = t ? t(a) : a;
    if (((a = n || a !== 0 ? a : 0), r && y === y)) {
      for (var T = s.length; T--; ) if (s[T] === y) continue e;
      t && s.push(y), i.push(a);
    } else o(s, y, n) || (s !== i && s.push(y), i.push(a));
  }
  return i;
}
var V = O(function (e) {
  return P(L(e, 1, G, !0));
});
const Z = V,
  se = R(() => {
    const [e, t] = B({
        currency: "BTC",
        cryptoCurrency: "BTC",
        fiatCurrency: "",
        fastDepositCoins: ["BTC", "ETH", "USDT", "TRX", "BNB"],
      }),
      n = Object.values(b);
    function c(r) {
      if (!C.getCurrency(r))
        throw new Error(
          `No Currency: ${r} | ${Object.keys(N.currency).length}`
        );
      return C.getCurrency(r).currencyType;
    }
    const o = (r, i) => {
      var s;
      return !r || !b[r]
        ? i
          ? (
              n.find((a) => c(a.currencyName) === "FIAT" && a.display) ||
              n.find((a) => c(a.currencyName) === "FIAT") ||
              n[0]
            ).currencyName
          : ((s = n.find(
              (u) =>
                (c(u.currencyName) === "CHAIN" ||
                  c(u.currencyName) === "VIRTUAL") &&
                u.display
            )) == null
              ? void 0
              : s.currencyName) || "BTC"
        : r;
    };
    p(
      g(
        () => l.setting.lastCryptoCurrency,
        (r) => {
          t({ cryptoCurrency: o(r) });
        }
      )
    ),
      p(
        g(
          () => l.setting.lastFiatCurrency,
          (r) => {
            t({ fiatCurrency: o(r, !0) });
          }
        )
      );
    function f(r, i = !1) {
      t("currency", r),
        S(
          "setting",
          c(r) === "FIAT" ? "lastFiatCurrency" : "lastCryptoCurrency",
          r
        ),
        i &&
          e.currency !== r &&
          w.emit("sensorsTrack", {
            event: "deposit_coin_click",
            coin_type: e.currency,
            deposit_type: C.getCurrency(r).currencyType,
          });
    }
    return (
      p(
        g(
          () => l.setting.currencyName,
          (r) => {
            const i = C.getCurrency(r);
            !i || i.currencyType.toLocaleLowerCase() === "mnft"
              ? f(
                  l.setting.lastFiatCurrency ||
                    l.setting.lastCryptoCurrency ||
                    l.bonusCurrencyName
                )
              : f(r);
          }
        )
      ),
      { store: e, setCurrency: f }
    );
  }),
  d = ["ETH", "BTC", "USDT", "USDC", "DOGE", "SOL", "BNB", "XRP", "TON", "ADA"],
  ce = F(function () {
    return m(this, null, function* () {
      try {
        const t = yield I().get("/payment/deposit/recently/currencies/");
        return {
          crypto: Z(t.crypto || [], d),
          fiat: t.fiat || [],
          firstRecharge: !t.crypto && !t.fiat,
        };
      } catch (t) {
        return { crypto: d, fiat: [], firstRecharge: !1 };
      }
    });
  });
export { se as c, ce as g };
