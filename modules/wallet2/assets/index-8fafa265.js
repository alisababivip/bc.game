import { s as w, i as r, t as y, c as f } from "./web-da7da7e5.js";
import { S } from "./SelectCurrency-0ef42d5c.js";
import { s as o, D as l, w as N } from "./manifest-e0f0ba59.js";
import { t as c } from "./i18n-9b1e4bd8.js";
import { b as A } from "./_baseIteratee-dc3e9bea.js";
import { c as g } from "./store-eb5336a3.js";
import "./solid-js-2e15682c.js";
import "./Icon-b6e375d0.js";
import "./LocalAmountItem-390b01c4.js";
import "./orderBy-fc8ca101.js";
import "./_baseOrderBy-d3b5242c.js";
import "./_setToArray-f7a05dc1.js";
import "./memoize-ff109130.js";
import "./groupBy-5d1dee29.js";
import "./_defineProperty-3c705e3e.js";
import "./store-2ed2b91e.js";
import "./_baseFlatten-f0777715.js";
import "./_baseFindIndex-15a8234c.js";
function B(t, n) {
  for (var i, s = -1, a = t.length; ++s < a; ) {
    var e = n(t[s]);
    e !== void 0 && (i = i === void 0 ? e : i + e);
  }
  return i;
}
function m(t, n) {
  return t && t.length ? B(t, A(n)) : 0;
}
const D = "/modules/wallet2/assets/coin-5fa2fe4d.png";
var L = y(
  '<div class="flex rounded-xl items-center mb-5 bg-layerx p-5"><img class="w-6 h-6 mr-4"><div class="border-r border-third pr-4"><div class="font-semibold text-secondary"></div><div class="text-lg font-extrabold text-brand"></div></div><div class="px-4 border-r border-third"><div class="font-semibold text-secondary"></div><div class="text-title text-lg font-extrabold"></div></div><div class=px-4><div class="font-semibold text-secondary"></div><div class="text-title text-lg font-extrabold">'
);
function M() {
  const n = Object.values(N),
    i = m(n, (e) =>
      new l(o.convertCurrency(e.amount || 0, e.currencyName)).toNumber()
    ),
    s = m(n, (e) =>
      new l(o.convertCurrency(e.generalAmount || 0, e.currencyName)).toNumber()
    ),
    a = m(n, (e) =>
      new l(o.convertCurrency(e.bonusAmount || 0, e.currencyName)).toNumber()
    );
  return (() => {
    var e = L(),
      d = e.firstChild,
      u = d.nextSibling,
      p = u.firstChild,
      C = p.nextSibling,
      b = u.nextSibling,
      v = b.firstChild,
      _ = v.nextSibling,
      $ = b.nextSibling,
      x = $.firstChild,
      h = x.nextSibling;
    return (
      w(d, "src", D),
      r(p, () => c("Total Balance")),
      r(C, () => o.printCurrency(new l(i))),
      r(v, () => c("Real Money")),
      r(_, () => o.printCurrency(new l(s))),
      r(x, () => c("Bonus Money")),
      r(h, () => o.printCurrency(new l(a))),
      e
    );
  })();
}
var O = y('<div class="p-4 bg-layer4 rounded-xl lg:px-8">');
function X() {
  return (() => {
    var t = O();
    return (
      r(t, f(M, {}), null),
      r(
        t,
        f(S, {
          get currencyName() {
            return g.store.currency;
          },
          get onChange() {
            return g.setCurrency;
          },
          isBalancePage: !0,
        }),
        null
      ),
      t
    );
  })();
}
export { X as default };
