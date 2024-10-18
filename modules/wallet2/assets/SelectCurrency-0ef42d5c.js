import {
  i as l,
  c as r,
  m as T,
  b as te,
  d as re,
  t as v,
  e as H,
  a as L,
  u as ne,
  s as ae,
} from "./web-da7da7e5.js";
import {
  s as g,
  a as U,
  u as M,
  e as le,
  f as ce,
  m as A,
  H as se,
  I as ie,
  k as B,
  x as E,
  B as F,
  E as R,
  v as oe,
  U as D,
  V as ue,
  h as ge,
  w as O,
  g as V,
  A as de,
} from "./manifest-e0f0ba59.js";
import {
  h as me,
  c as w,
  b as K,
  S as N,
  i as j,
  F as z,
  d as ye,
} from "./solid-js-2e15682c.js";
import { t as m } from "./i18n-9b1e4bd8.js";
import { W as q } from "./Icon-b6e375d0.js";
import { L as he } from "./LocalAmountItem-390b01c4.js";
import { o as P } from "./orderBy-fc8ca101.js";
import { c as fe, g as Ce } from "./groupBy-5d1dee29.js";
var be = fe(
  function (e, n, c) {
    e[c ? 0 : 1].push(n);
  },
  function () {
    return [[], []];
  }
);
const ve = be;
var G = v("<div>"),
  we = v("<div><div>"),
  xe = v('<div class="text-sm text-secondary">'),
  Ne = v('<div class="ml-auto text-seconday text-right"> '),
  Se = v(
    '<div><img class="h-6 w-6"><div class=ml-2><div class="flex items-center text-base font-extrabold"> '
  ),
  _e = v(
    '<div class="flex items-center mr-10 flex-auto"><div class="ml-2 text-secondary">'
  ),
  $e = v(
    '<div class="top-0 flex items-center justify-between sticky z-20 bg-layer0 pb-2 sm:pt-4">'
  ),
  Te = v('<div class="mt-4 text-center text-secondary">');
function Be(e) {
  return e === "mNFT"
    ? "NFT"
    : e === "FIAT"
    ? m("Cash")
    : e === "HIDE"
    ? m("Other Supported Coin(Click to add and use Coins)")
    : m("Crypto currency");
}
me(null);
function Ie(e) {
  const n = j(() =>
    r(z, {
      get each() {
        return e.groups;
      },
      children: (c) => {
        const d = j(() =>
            r(z, {
              get each() {
                return c[1];
              },
              children: (s) =>
                r(ke, {
                  get isBalancePage() {
                    return e.isBalancePage;
                  },
                  get currencyName() {
                    return e.currencyName;
                  },
                  get onChange() {
                    return e.onChange;
                  },
                  get isWithdraw() {
                    return e.isWithdraw;
                  },
                  item: s,
                  get onlyCrypto() {
                    return e.onlyCrypto;
                  },
                  get onlyFiat() {
                    return e.onlyFiat;
                  },
                }),
            })
          ),
          o = w(() => c[1].map((s) => e.filter(s)));
        return r(D, {
          get when() {
            return !o().every((s) => !s);
          },
          get children() {
            var s = we(),
              C = s.firstChild;
            return (
              l(
                s,
                r(N, {
                  get when() {
                    return e.groups.length > 1;
                  },
                  get children() {
                    var b = G();
                    return (
                      l(b, () => Be(c[0])),
                      H(() =>
                        L(
                          b,
                          B(
                            "z-10 font-extrabold text-secondary sticky bg-layer0 py-2 leading-6",
                            e.inTab ? "sm:top-26 top-24" : "top-14 sm:top-16"
                          )
                        )
                      ),
                      b
                    );
                  },
                }),
                C
              ),
              l(C, () => d.toArray().filter((b, a) => o()[a])),
              H(() =>
                L(
                  C,
                  B(
                    e.isBalancePage &&
                      "overflow-hidden rounded-xl bg-layer5 first:border-none [&>div+div]:border-third"
                  )
                )
              ),
              s
            );
          },
        });
      },
    })
  );
  return r(D, {
    get when() {
      return !n.toArray().every((c) => !c);
    },
    get fallback() {
      return e.fallback || r(R, { class: "my-10" });
    },
    get children() {
      return n();
    },
  });
}
function ke(e) {
  let n;
  const c = g.getCurrency(e.item.currencyName).currencyType === "FIAT",
    d = U(),
    o = ue(),
    s = (a) => {
      const h = o();
      h.scrollTo(0, a - h.clientHeight / 2);
    },
    C = () => e.currencyName === e.item.currencyName;
  ye(() => {
    C() && setTimeout(() => n && n.offsetTop > 0 && s(n.offsetTop));
  });
  function b() {
    let a = "";
    switch (e.item.currencyName) {
      case "BCD":
        a = "/wallet/about-bonuscoin";
        break;
      case "BCL":
        a = "/wallet/about-ticketcoin";
        break;
      case "BC":
        a = "/wallet/about-bccoin";
        break;
    }
    return a
      ? r(de, {
          href: a,
          class: "ml-2 text-brand",
          onClick: (h) => {
            h.stopPropagation();
          },
          get children() {
            return r(q, { name: "Inform" });
          },
        })
      : null;
  }
  return (() => {
    var a = Se(),
      h = a.firstChild,
      I = h.nextSibling,
      f = I.firstChild,
      S = f.firstChild;
    a.$$click = () => e.onChange(e.item.currencyName);
    var _ = n;
    return (
      typeof _ == "function" ? ne(_, a) : (n = a),
      l(f, () => e.item.aliasCurrencyName, S),
      l(
        f,
        (() => {
          var i = T(() => !!e.onlyFiat);
          return () =>
            i() ? `- ${g.getCurrency(e.item.currencyName).fullName}` : "";
        })(),
        null
      ),
      l(f, b, null),
      l(
        I,
        r(N, {
          get when() {
            return A.setting.currencyFullName;
          },
          get children() {
            var i = xe();
            return l(i, () => g.getCurrency(e.item.currencyName).fullName), i;
          },
        }),
        null
      ),
      l(
        a,
        r(N, {
          get when() {
            return e.isWithdraw;
          },
          get children() {
            var i = Ne(),
              x = i.firstChild;
            return (
              l(i, () => c && g.getCurrencySymbol(e.item.currencyName), x),
              l(i, () => M.formatBalance(e.item.amount), null),
              i
            );
          },
        }),
        null
      ),
      l(
        a,
        r(N, {
          get when() {
            return e.isBalancePage;
          },
          get children() {
            return [
              r(he, {
                get item() {
                  return e.item;
                },
                class: "ml-auto text-right",
              }),
              r(F, {
                class: "px-3 font-extrabold text-brand",
                onClick: () => d("/wallet/deposit"),
                get children() {
                  return m("Deposit");
                },
              }),
              r(F, {
                class: "px-3 font-extrabold text-brand",
                onClick: () => d("/wallet/withdraw"),
                get children() {
                  return m("Withdraw");
                },
              }),
            ];
          },
        }),
        null
      ),
      H(
        (i) => {
          var x = B(
              "mb-1 flex cursor-pointer items-center rounded-lg px-2 h-16 py-3 !leading-5",
              C() && !e.isBalancePage && "scroll-target bg-layer4",
              !e.isBalancePage && "fix-light-hover",
              e.isBalancePage &&
                "px-3 cursor-default rounded-none border-t border-transparent py-2"
            ),
            k = ge.coinIcon(e.item.currencyName);
          return (
            x !== i.e && L(a, (i.e = x)),
            k !== i.t && ae(h, "src", (i.t = k)),
            i
          );
        },
        { e: void 0, t: void 0 }
      ),
      a
    );
  })();
}
function J(e, n) {
  return w(() => {
    const c = w(() =>
        n
          ? n(e())
          : P(
              e(),
              [
                (o) => g.amount2usd(o.amount || 0, o.currencyName).toNumber(),
                (o) => o.display,
              ],
              ["desc", "desc"]
            )
      ),
      d = Ce(c(), (o) => {
        const s = g.getCurrency(o.currencyName).currencyType;
        return s === "CHAIN" || s === "VIRTUAL" ? "CHAIN" : s;
      });
    return P([...Object.entries(d)], [([o]) => ["FIAT", "CHAIN"].indexOf(o)]);
  });
}
function Q(e) {
  const [n, c] = K(""),
    d = U(),
    {
      isKenyaHost: o,
      isNgHost: s,
      isBrHost: C,
      isIdHost: b,
      isSportsHost: a,
      isBrAuditHost: h,
      isNg2Host: I,
    } = M.getHostType(le.host),
    f = o || C || s || b || h || I || a,
    S = (t) =>
      e.onlyFiat
        ? g.getCurrency(t).currencyType === "FIAT"
        : e.onlyCrypto
        ? g.getCurrency(t).currencyType === "VIRTUAL" ||
          g.getCurrency(t).currencyType === "CHAIN"
        : g.getCurrency(t).currencyType !== "mNFT",
    _ = w(() => {
      const t = P(O, "sort"),
        $ =
          e.isWithdraw &&
          t.find(
            (y) => g.convertCurrency(y.amount, y.currencyName).toNumber() >= 0.1
          )
            ? (y) =>
                g.convertCurrency(y.amount, y.currencyName).toNumber() >= 0.1 &&
                S(y.currencyName)
            : (y) =>
                f || e.isBalancePage
                  ? y.display && S(y.currencyName)
                  : S(y.currencyName);
      return ve(t, $);
    }),
    i = () => _()[0],
    x = () => (f ? [] : _()[1]),
    k = J(i),
    W = w(() => !f && !!n()),
    X = w(() => {
      const t = k();
      return W() ? [...t, ["HIDE", x()]] : t;
    }),
    Y = w(() => n().toLocaleLowerCase());
  function Z(t) {
    const u = Y();
    return t.currencyName.toLocaleLowerCase().includes(u) ||
      g.getCurrency(t.currencyName).fullName.toLocaleLowerCase().includes(u)
      ? u && !f
        ? !0
        : A.setting.hideSmallCurrency
        ? t.displayStatus === 1 ||
          g.convertCurrency(t.amount, t.currencyName).toNumber() > 0.1
        : !0
      : !1;
  }
  const p = (t) => {
    var u;
    e.onChange(t),
      e.isBalancePage &&
        (((u = O[t]) == null ? void 0 : u.display) === !1
          ? V(t, "display", !0)
          : n() && V(t, "displayStatus", 1));
  };
  return [
    (() => {
      var t = $e();
      return (
        l(
          t,
          r(N, {
            get when() {
              return e.isBalancePage;
            },
            get children() {
              var u = _e(),
                $ = u.firstChild;
              return (
                l(
                  u,
                  r(ce, {
                    get value() {
                      return A.setting.hideSmallCurrency;
                    },
                    size: "small",
                    onChange: () => {
                      se(
                        "setting",
                        "hideSmallCurrency",
                        !A.setting.hideSmallCurrency
                      );
                    },
                  }),
                  $
                ),
                l($, () => m("Hide 0 balance")),
                u
              );
            },
          }),
          null
        ),
        l(
          t,
          r(ie, {
            get value() {
              return n();
            },
            onChange: c,
            get class() {
              return B(
                "text-base font-semibold flex-auto",
                e.isBalancePage && "max-w-[252px]"
              );
            },
            get placeholder() {
              return m("Search");
            },
            get children() {
              return [
                r(E, {
                  name: "Search",
                  class: "h-6 w-6 text-secondary -order-1",
                }),
                T(
                  () =>
                    T(() => !!n())() &&
                    r(F, {
                      onClick: () => c(""),
                      get children() {
                        return r(E, { class: "h-6 w-6", name: "Close" });
                      },
                    })
                ),
              ];
            },
          }),
          null
        ),
        t
      );
    })(),
    r(Ie, {
      filter: Z,
      get groups() {
        return X();
      },
      get currencyName() {
        return e.currencyName;
      },
      onChange: p,
      get isBalancePage() {
        return e.isBalancePage;
      },
      get onlyFiat() {
        return e.onlyFiat;
      },
      get onlyCrypto() {
        return e.onlyCrypto;
      },
      get isWithdraw() {
        return e.isWithdraw;
      },
      get fallback() {
        return (
          T(() => !!W())() &&
          (() => {
            var t = G();
            return (
              l(
                t,
                r(R, {
                  class: "my-8",
                  get children() {
                    return m("Coin or token not found");
                  },
                }),
                null
              ),
              l(
                t,
                r(N, {
                  get when() {
                    return e.showSwap;
                  },
                  get children() {
                    return [
                      r(F, {
                        class: "w-full",
                        type: "brand",
                        onClick: () => {
                          d("/wallet/swap"), e.onClose && e.onClose();
                        },
                        get children() {
                          return [
                            r(q, { name: "Swap", class: "mr-2" }),
                            " ",
                            T(() => m("Swap Coin")),
                          ];
                        },
                      }),
                      (() => {
                        var u = Te();
                        return (
                          l(u, () =>
                            m(
                              "For unsupported coins and tokens, try the __ENV_SITE__ Swap feature to exchange for supported coins and tokens"
                            )
                          ),
                          u
                        );
                      })(),
                    ];
                  },
                }),
                null
              ),
              t
            );
          })()
        );
      },
    }),
  ];
}
function Ae(e) {
  const [n, c] = K(!1);
  return r(oe, {
    get title() {
      var d;
      return (d = e.title) != null ? d : m("Currency Select");
    },
    get visible() {
      return n();
    },
    setVisible: c,
    get class() {
      return B("min-h-[80vh] w-100 sm:min-h-100", e.class);
    },
    get layer() {
      return r(
        Q,
        te(e, {
          onChange: (d) => {
            e.onChange(d), c(!1);
          },
          onClose: () => c(!1),
        })
      );
    },
    get children() {
      return e.children;
    },
  });
}
re(["click"]);
const Ve = Object.freeze(
  Object.defineProperty(
    { __proto__: null, SelectCurrencyCont: Q, createSortData: J, default: Ae },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { Q as S, Ae as a, Ve as b, J as c, ve as p };
