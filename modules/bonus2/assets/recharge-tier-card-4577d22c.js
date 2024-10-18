import { i as r, c as t, t as u } from "./web-13cf6287.js";
import { D as h } from "./manifest-cc1f4445.js";
import { F as _, S as s } from "./solid-js-38561dfe.js";
import { C as m } from "./currency-format-e71c6b76.js";
import { t as f } from "./i18n-023baa0d.js";
var $ = u('<div class="rounded-xl bg-layer4 px-4 py-2">'),
  x = u("<span>"),
  v = u(
    '<div class="flex items-center justify-between py-2 text-sm font-semibold"><div><span class=text-primary>-</span></div><span class=text-brand>%'
  );
const F = (c) =>
  (() => {
    var i = $();
    return (
      r(
        i,
        t(_, {
          get each() {
            return c.tires;
          },
          children: (e) =>
            (() => {
              var o = v(),
                n = o.firstChild,
                a = n.firstChild,
                g = a.firstChild,
                d = n.nextSibling,
                p = d.firstChild;
              return (
                r(a, () => f("Tier __rank__", { rank: e.index }), g),
                r(a, () => e.tireName, null),
                r(
                  n,
                  t(s, {
                    get when() {
                      return e.startWager || e.endWager;
                    },
                    get children() {
                      return [
                        "(",
                        t(m, {
                          currencyName: "USDFIAT",
                          get children() {
                            var l = x();
                            return (
                              r(
                                l,
                                t(s, {
                                  get when() {
                                    return e.startWager;
                                  },
                                  get children() {
                                    return t(m.Amount, {
                                      get amount() {
                                        return e.startWager;
                                      },
                                    });
                                  },
                                }),
                                null
                              ),
                              r(
                                l,
                                t(s, {
                                  get when() {
                                    return e.endWager;
                                  },
                                  fallback: "+",
                                  get children() {
                                    return [
                                      "-",
                                      t(m.Amount, {
                                        get amount() {
                                          return e.endWager;
                                        },
                                      }),
                                    ];
                                  },
                                }),
                                null
                              ),
                              l
                            );
                          },
                        }),
                        ")",
                      ];
                    },
                  }),
                  null
                ),
                r(
                  d,
                  () =>
                    new h(e == null ? void 0 : e.vipRechargeRate)
                      .mul(100)
                      .toFixed(0),
                  p
                ),
                o
              );
            })(),
        })
      ),
      i
    );
  })();
export { F as R };
