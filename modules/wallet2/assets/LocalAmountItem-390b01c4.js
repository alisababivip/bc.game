import { i as r, c as m, m as l, t as s } from "./web-da7da7e5.js";
import { s as o, u as c, m as v } from "./manifest-e0f0ba59.js";
import { g as N, M as g, S as h } from "./solid-js-2e15682c.js";
import { t as a } from "./i18n-9b1e4bd8.js";
var _ = s('<span class="text-sm text-secondary">(<!>)'),
  y = s("<div>"),
  f = s("<div class=text-second>"),
  x = s('<div class="ml-auto text-right">');
function w(e) {
  const $ = o.getCurrency(e.item.currencyName).currencyType === "FIAT";
  return (() => {
    var d = x();
    return (
      r(
        d,
        m(N, {
          get children() {
            return [
              m(g, {
                when: $,
                get children() {
                  return [
                    l(
                      () => `${o.toFiatStr(e.item.amount, e.item.currencyName)}`
                    ),
                    m(h, {
                      get when() {
                        return e.item.bonusAmount.toNumber() > 0;
                      },
                      get children() {
                        var t = _(),
                          n = t.firstChild,
                          i = n.nextSibling;
                        return (
                          i.nextSibling,
                          r(
                            t,
                            (() => {
                              var u = l(
                                () =>
                                  e.item.bonusAmount.toNumber() ===
                                  e.item.amount.toNumber()
                              );
                              return () =>
                                u()
                                  ? a("Bonus")
                                  : `${c.formatBalance(e.item.amount)} ${a(
                                      "In Bonus"
                                    )}`;
                            })(),
                            i
                          ),
                          t
                        );
                      },
                    }),
                  ];
                },
              }),
              m(g, {
                get when() {
                  return !$ && v.setting.enableLocaleCurrency;
                },
                get children() {
                  return [
                    (() => {
                      var t = y();
                      return (
                        r(
                          t,
                          () =>
                            o.printCurrency(e.item.amount, e.item.currencyName),
                          null
                        ),
                        r(
                          t,
                          m(h, {
                            get when() {
                              return e.item.bonusAmount.toNumber() > 0;
                            },
                            get children() {
                              var n = _(),
                                i = n.firstChild,
                                u = i.nextSibling;
                              return (
                                u.nextSibling,
                                r(
                                  n,
                                  (() => {
                                    var b = l(
                                      () =>
                                        e.item.bonusAmount.toNumber() ===
                                        e.item.amount.toNumber()
                                    );
                                    return () =>
                                      b()
                                        ? a("Bonus")
                                        : `${o.printCurrency(
                                            e.item.bonusAmount,
                                            e.item.currencyName
                                          )} ${a("In Bonus")}`;
                                  })(),
                                  u
                                ),
                                n
                              );
                            },
                          }),
                          null
                        ),
                        t
                      );
                    })(),
                    (() => {
                      var t = f();
                      return r(t, () => c.formatBalance(e.item.amount)), t;
                    })(),
                  ];
                },
              }),
              m(g, {
                get when() {
                  return !$ && !v.setting.enableLocaleCurrency;
                },
                get children() {
                  var t = y();
                  return (
                    r(t, () => c.formatBalance(e.item.amount), null),
                    r(
                      t,
                      m(h, {
                        get when() {
                          return e.item.bonusAmount.toNumber() > 0;
                        },
                        get children() {
                          var n = _(),
                            i = n.firstChild,
                            u = i.nextSibling;
                          return (
                            u.nextSibling,
                            r(
                              n,
                              (() => {
                                var b = l(
                                  () =>
                                    e.item.bonusAmount.toNumber() ===
                                    e.item.amount.toNumber()
                                );
                                return () =>
                                  b()
                                    ? a("Bonus")
                                    : `${c.formatBalance(
                                        e.item.bonusAmount
                                      )} ${a("In Bonus")}`;
                              })(),
                              u
                            ),
                            n
                          );
                        },
                      }),
                      null
                    ),
                    t
                  );
                },
              }),
            ];
          },
        })
      ),
      d
    );
  })();
}
export { w as L };
