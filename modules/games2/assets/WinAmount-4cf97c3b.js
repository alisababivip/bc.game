import {
  H as u,
  K as m,
  D as s,
  h as p,
  c as t,
  i,
  m as v,
  X as d,
  t as f,
} from "./manifest-a234c8a0.js";
import { t as y } from "./i18n-611811a6.js";
import { N as g, a as w } from "./number-field-a2716165.js";
import { S as x } from "./Symbol-f22f521e.js";
import { u as C } from "./currency-a0e3a368.js";
var F = f("<div class=relative>");
function T(r) {
  const { store: a, activeFiatToken: o, isViewInFiat: n, activeToken: c } = C(),
    l = u(() =>
      n()
        ? m
            .convertCurrency(
              new s(r.winAmount || 0).todp(
                a.activeCurrencyConfig.precisionUnit
              ),
              a.activeCurrency.currencyName,
              p.setting.localeCurrencyName
            )
            .toFixed(4)
        : new s(r.winAmount || 0).toFixed(4)
    );
  return t(g, {
    class: "space-y-1 text-left",
    get children() {
      return [
        t(w, {
          class: "text-sm",
          get children() {
            return y("Win Amount");
          },
        }),
        ((e = F()),
        i(
          e,
          t(x, {
            class: "absolute left-2 top-1/2 -translate-y-1/2",
            get token() {
              return v(() => !!n())() ? o() : c();
            },
          }),
          null
        ),
        i(
          e,
          t(d, {
            class: "pl-9",
            get value() {
              return l();
            },
            disabled: !0,
          }),
          null
        ),
        e),
      ];
      var e;
    },
  });
}
export { T as W };
