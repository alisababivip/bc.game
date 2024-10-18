import { c as N, j as d, b as p, i as $, t as A } from "./web-13cf6287.js";
import {
  i as F,
  c as h,
  e as x,
  a as c,
  l as v,
  D as a,
  W as i,
  s as I,
} from "./manifest-cc1f4445.js";
import { n as O, m as S, c as b, E as P, p as w } from "./solid-js-38561dfe.js";
import { b as E } from "./_baseGetTag-c2e287b9.js";
import { a as R } from "./isArray-79a0be9c.js";
var W = "[object Boolean]";
function j(e) {
  return e === !0 || e === !1 || (R(e) && E(e) == W);
}
var D = A("<span>"),
  k = A("<img>");
const U = O(),
  y = () => {
    const e = w(U);
    if (!e)
      throw Error(
        "Can not used CurrencyFormat outside of CurrencyFormat component"
      );
    return e;
  },
  m = (e) => {
    const r = S({ currencyName: "USDFIAT" }, e),
      n = () =>
        r.toCurrency
          ? j(r.toCurrency)
            ? F.setting.enableLocaleCurrency
              ? F.setting.localeCurrencyName
              : e.currencyName
            : r.toCurrency
          : r.currencyName;
    return N(U.Provider, {
      value: { currencyName: () => r.currencyName, toCurrency: n },
      get children() {
        return r.children;
      },
    });
  },
  B = (e) =>
    (() => {
      var r = D();
      return (
        d(
          r,
          p(e, {
            get class() {
              return h("inline-flex items-center gap-x-1", e.class);
            },
          }),
          !1,
          !1
        ),
        r
      );
    })(),
  z = (e) => {
    const r = y(),
      n = () => v.coinIcon(e.forceToCurrency || r.toCurrency());
    return (() => {
      var t = k();
      return (
        d(
          t,
          p(e, {
            get style() {
              var o, s;
              return {
                display: "inline-block",
                width: `${((o = e.size) != null ? o : 20) * x.remScale}px`,
                height: `${((s = e.size) != null ? s : 20) * x.remScale}px`,
              };
            },
            get src() {
              return n();
            },
          }),
          !1,
          !1
        ),
        t
      );
    })();
  },
  L = (e, r, n, t = 7) => {
    var f;
    const o = (f = c.getCurrency(n)) != null ? f : c.getCurrency("USDFIAT"),
      s = (o == null ? void 0 : o.currencyType) === "FIAT",
      T = c.convertCurrency(new a(e), r, n),
      { num: C, exp: _, unit: g } = i.getExponential(T.toNumber(), t),
      u = new a(C);
    if (s) return c.toFiatStr(u, n, I.lang) + g;
    {
      let l = "";
      return (
        _ > 1
          ? (l = u.toFixed(2, a.ROUND_DOWN) + g)
          : C < 1
          ? (l = i.clearFloatZero(u.toFixed(t, a.ROUND_DOWN)))
          : (l = i.clearFloatZero(u.toPrecision(t + 1, a.ROUND_DOWN))),
        l + " " + c.getAlias(n)
      );
    }
  },
  Z = (e) => {
    const r = y(),
      n = b(() => {
        const t = r.toCurrency();
        return L(e.amount, r.currencyName(), t, e.precision);
      });
    return N(P, {
      fallback: "--",
      get children() {
        return n();
      },
    });
  },
  G = (e) => {
    const r = y(),
      n = b(() => {
        const t = r.toCurrency();
        return c.getAlias(t);
      });
    return (() => {
      var t = D();
      return $(t, n), t;
    })();
  };
m.AliasName = G;
m.Amount = Z;
m.Icon = z;
m.Content = B;
export { m as C, L as a };
