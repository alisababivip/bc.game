import {
  c as e,
  i as l,
  m as g,
  e as b,
  s as C,
  d as I,
  t as m,
} from "./web-da7da7e5.js";
import {
  w as N,
  s as u,
  b as x,
  S as $,
  I as v,
  d as c,
  f as S,
  g as T,
  h as _,
} from "./manifest-e0f0ba59.js";
import { c as y, b as p, F as A } from "./solid-js-2e15682c.js";
import { W as d } from "./Icon-b6e375d0.js";
import { t as i } from "./i18n-9b1e4bd8.js";
import { g as L } from "./groupBy-5d1dee29.js";
import { s as w } from "./sortBy-6b2810fa.js";
import "./_defineProperty-3c705e3e.js";
import "./memoize-ff109130.js";
import "./_baseOrderBy-d3b5242c.js";
import "./_baseIteratee-dc3e9bea.js";
import "./_setToArray-f7a05dc1.js";
import "./_baseFlatten-f0777715.js";
var F = m("<div class=-mx-4>"),
  k = m("<button>"),
  H = m(
    '<div class="relative flex px-2 py-4"><img class="h-6 w-6"><div class="ml-2 text-base mr-auto"><span class=font-semibold></span><span class="ml-2 text-secondary">'
  );
function O() {
  const t = y(() =>
      L(w(N, "sort"), (s) => {
        const n = u.getCurrency(s.currencyName).currencyType;
        return n === "CHAIN" || n === "VIRTUAL" ? "CHAIN" : n;
      })
    ),
    [r, a] = p("");
  return (
    p(0),
    e(x, {
      class: "h-full",
      get title() {
        return i("Manage Assets");
      },
      get children() {
        var s = F();
        return (
          l(
            s,
            e($, {
              class: "bg-layer4 p-3 top-0 z-10 pt-0",
              get children() {
                return e(v, {
                  get value() {
                    return r();
                  },
                  onChange: a,
                  class: "text-base font-semibold",
                  get placeholder() {
                    return i("Search");
                  },
                  get children() {
                    return [
                      e(d, {
                        name: "Search",
                        class: "mr-2 text-secondary -order-1",
                      }),
                      g(
                        () =>
                          g(() => !!r())() &&
                          (() => {
                            var n = k();
                            return (
                              (n.$$click = () => a("")),
                              l(n, e(d, { name: "Close" })),
                              n
                            );
                          })()
                      ),
                    ];
                  },
                });
              },
            }),
            null
          ),
          l(
            s,
            e(c, {
              type: "indicator",
              class: "bg-layer4",
              get children() {
                return [
                  e(c.TabItem, {
                    class: "px-2 bg-transparent",
                    get title() {
                      return i("Crypto");
                    },
                    get children() {
                      return e(o, {
                        get search() {
                          return r();
                        },
                        get list() {
                          return t().CHAIN;
                        },
                      });
                    },
                  }),
                  e(c.TabItem, {
                    class: "px-2 bg-transparent",
                    get title() {
                      return i("FIAT");
                    },
                    get children() {
                      return e(o, {
                        get search() {
                          return r();
                        },
                        get list() {
                          return t().FIAT;
                        },
                      });
                    },
                  }),
                  e(c.TabItem, {
                    class: "px-2 bg-transparent",
                    title: "NFT",
                    get children() {
                      return e(o, {
                        get search() {
                          return r();
                        },
                        get list() {
                          return t().mNFT;
                        },
                      });
                    },
                  }),
                ];
              },
            }),
            null
          ),
          s
        );
      },
    })
  );
}
function o(t) {
  const r = y(() => {
    const a = t.search.toLocaleLowerCase();
    return a
      ? t.list.filter(
          (s) =>
            s.currencyName.toLocaleLowerCase().includes(a) ||
            u
              .getCurrency(s.currencyName)
              .fullName.toLocaleLowerCase()
              .includes(a)
        )
      : t.list;
  });
  return e(A, {
    get each() {
      return r();
    },
    children: (a) => e(M, { item: a }),
  });
}
function M(t) {
  return (() => {
    var r = H(),
      a = r.firstChild,
      s = a.nextSibling,
      n = s.firstChild,
      h = n.nextSibling;
    return (
      l(n, () => t.item.aliasCurrencyName),
      l(h, () => u.getCurrency(t.item.currencyName).fullName),
      l(
        r,
        e(S, {
          size: "small",
          onChange: () => {
            T(t.item.currencyName, (f) => ({ display: !f.display }));
          },
          get value() {
            return t.item.display;
          },
        }),
        null
      ),
      b(() => C(a, "src", _.coinIcon(t.item.currencyName))),
      r
    );
  })();
}
I(["click"]);
export { O as default };
