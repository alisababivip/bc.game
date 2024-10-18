var te = Object.defineProperty,
  ne = Object.defineProperties;
var ae = Object.getOwnPropertyDescriptors;
var G = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty,
  ie = Object.prototype.propertyIsEnumerable;
var J = (u, t, c) =>
    t in u
      ? te(u, t, { enumerable: !0, configurable: !0, writable: !0, value: c })
      : (u[t] = c),
  b = (u, t) => {
    for (var c in t || (t = {})) se.call(t, c) && J(u, c, t[c]);
    if (G) for (var c of G(t)) ie.call(t, c) && J(u, c, t[c]);
    return u;
  },
  C = (u, t) => ne(u, ae(t));
import {
  ae as le,
  f,
  H as U,
  K as I,
  an as d,
  D as N,
  h as v,
  l as M,
  c as n,
  i as s,
  N as A,
  m as h,
  a as ce,
  b as ue,
  F as oe,
  B as de,
  I as ge,
  t as g,
} from "./manifest-a234c8a0.js";
import { t as o } from "./i18n-611811a6.js";
import { N as T, a as F } from "./number-field-a2716165.js";
import { b as Q, d as X, e as H } from "./MoreLessBtn-6b8ac376.js";
import { c as z } from "./index-eff0ad24.js";
import { S as Y } from "./Symbol-f22f521e.js";
import { u as me } from "./currency-a0e3a368.js";
var he = g(
    '<div class=relative><div class="flex items-center gap-1 absolute right-1 top-1/2 -translate-y-1/2">'
  ),
  ye = g(
    '<div class="flex gap-2 items-center"><div class="relative flex-1"><span class="font-semibold absolute right-2 top-1/2 -translate-y-1/2">%'
  ),
  ve = g(
    '<div class="flex items-center gap-2"><div class="relative flex-1"><span class="font-semibold absolute right-2 top-1/2 -translate-y-1/2">%'
  ),
  Z = g('<div class="flex items-center mb-1 justify-between">'),
  $ = g("<div class=relative>"),
  pe = g(
    '<div class="flex gap-1 col-span-2 mt-2 mb-0"><p class="text-sm text-quarterary font-semibold leading-[1.1]">'
  ),
  be = g("<div>∞"),
  Ce = g("<span>&infin;"),
  ee = g('<div class="font-semibold text-sm text-secondary pr-1">≈');
const fe = [1 / 0, 10, 100],
  O = {
    playTimes: 0,
    winIncrease: { checked: !1, value: 0 },
    loseIncrease: { checked: !1, value: 0 },
    winStopAt: 0,
    loseStopAt: 0,
    updatePlayTimes: () => {},
  },
  Te = (u) => {
    const t = le({ betTimes: fe }, u),
      { activeFiatToken: c, isViewInFiat: y, activeToken: x, store: m } = me(),
      [p, B] = f(O.playTimes),
      [re, V] = f(!1),
      [w, _] = f(O.winIncrease),
      [k, E] = f(O.loseIncrease),
      [L, R] = f(O.winStopAt),
      [j, q] = f(O.loseStopAt),
      W = U(() =>
        m.activeCurrency.currencyName.includes("FIAT")
          ? 2
          : I.getPrecision(x().symbol)
      ),
      P = U(() => {
        const e = L();
        return d(y)
          ? Number(
              I.convertCurrency(
                new N(e),
                d(() => v.setting.localeCurrencyName),
                d(() => m.activeCurrencyConfig.currencyName)
              )
                .todp(d(W))
                .toFixed()
            )
          : e;
      }),
      S = U(() => {
        const e = j();
        return d(y)
          ? Number(
              I.convertCurrency(
                new N(e),
                d(() => v.setting.localeCurrencyName),
                d(() => m.activeCurrencyConfig.currencyName)
              )
                .todp(W())
                .toFixed()
            )
          : e;
      });
    return (
      M(() => {
        var a;
        var e;
        (e = {
          playTimes: p(),
          winIncrease: w(),
          loseIncrease: k(),
          winStopAt: L(),
          loseStopAt: j(),
        }),
          (a = t.onChange) == null ||
            a.call(
              t,
              C(b({}, e), {
                winStopAt: P(),
                loseStopAt: S(),
                updatePlayTimes: B,
              })
            );
      }),
      M(() => {
        v.setting.localeCurrencyName !== m.activeCurrency.currencyName && y()
          ? (R(
              Number(
                I.convertCurrency(
                  new N(d(P)),
                  m.activeCurrencyConfig.currencyName,
                  v.setting.localeCurrencyName
                ).toString()
              )
            ),
            q(
              Number(
                I.convertCurrency(
                  new N(d(S)),
                  m.activeCurrencyConfig.currencyName,
                  v.setting.localeCurrencyName
                ).toString()
              )
            ))
          : (R(P()), q(S()));
      }),
      [
        n(T, {
          class: "space-y-1.5",
          get children() {
            return [
              n(F, {
                class: "flex items-center h-4.5",
                get children() {
                  return o("Number of Bets");
                },
              }),
              ((a = he()),
              (i = a.firstChild),
              s(
                a,
                n(A, {
                  class: "font-extrabold",
                  size: "lg",
                  min: 0,
                  max: 1 / 0,
                  get disabled() {
                    return t.isPlaying;
                  },
                  get value() {
                    return h(() => p() === 1 / 0)() ? 0 : p();
                  },
                  onChange: (r) => {
                    B(Number(r));
                  },
                  onFocus: () => {
                    p() === 1 / 0 && B(0), V(!0);
                  },
                  onBlur: () => {
                    V(!1);
                  },
                }),
                i
              ),
              s(
                a,
                ((e = h(() => !((p() && p() !== 1 / 0) || re()))),
                () => {
                  return (
                    e() &&
                    ((r = be()),
                    ce(() =>
                      ue(
                        r,
                        z(
                          "flex items-center h-10 sm:h-8 absolute top-1 left-1 pl-2 pr-3 w-16 bg-layer1 dark:bg-input_bright rounded-md"
                        )
                      )
                    ),
                    r)
                  );
                  var r;
                }),
                i
              ),
              s(
                i,
                n(oe, {
                  get each() {
                    return t.betTimes;
                  },
                  children: (r) =>
                    n(de, {
                      class: "text-primary w-15 h-10 sm:h-8",
                      type: "second",
                      get disabled() {
                        return t.isPlaying;
                      },
                      onClick: (l) => {
                        l.stopPropagation(), B(r === 1 / 0 ? 0 : r);
                      },
                      get children() {
                        return r === 1 / 0 ? Ce() : r;
                      },
                    }),
                })
              ),
              a),
            ];
            var e, a, i;
          },
        }),
        n(T, {
          get class() {
            var e;
            return z("space-y-1", {
              hidden:
                (e = t.hideControls) == null ? void 0 : e.includes("onWin"),
            });
          },
          get children() {
            return [
              n(F, {
                get children() {
                  return o("On win");
                },
              }),
              ((e = ye()),
              (a = e.firstChild),
              (i = a.firstChild),
              s(
                e,
                n(Q, {
                  get disabled() {
                    return t.isPlaying;
                  },
                  get value() {
                    return w().checked ? "increase" : "reset";
                  },
                  onChange: (r) => {
                    _((l) => C(b({}, l), { checked: r === "increase" }));
                  },
                  get children() {
                    return n(X, {
                      variant: "ring",
                      size: "lg",
                      class: "light-layer3-tabs",
                      get children() {
                        return [
                          n(H, {
                            variant: "ring",
                            value: "reset",
                            get children() {
                              return o("Reset");
                            },
                          }),
                          n(H, {
                            variant: "ring",
                            value: "increase",
                            get children() {
                              return o("Increase by");
                            },
                          }),
                        ];
                      },
                    });
                  },
                }),
                a
              ),
              s(
                a,
                n(A, {
                  get value() {
                    return w().value;
                  },
                  get disabled() {
                    return t.isPlaying || !w().checked;
                  },
                  min: 0,
                  max: 1 / 0,
                  onChange: (r) => {
                    isNaN(r) ||
                      r === w().value ||
                      _((l) => C(b({}, l), { value: r }));
                  },
                  size: "lg",
                }),
                i
              ),
              e),
            ];
            var e, a, i;
          },
        }),
        n(T, {
          get class() {
            var e;
            return z("space-y-1", {
              hidden:
                (e = t.hideControls) == null ? void 0 : e.includes("onLoss"),
            });
          },
          get children() {
            return [
              n(F, {
                get children() {
                  return o("On loss");
                },
              }),
              ((e = ve()),
              (a = e.firstChild),
              (i = a.firstChild),
              s(
                e,
                n(Q, {
                  get disabled() {
                    return t.isPlaying;
                  },
                  get value() {
                    return k().checked ? "increase" : "reset";
                  },
                  onChange: (r) => {
                    E((l) => C(b({}, l), { checked: r === "increase" }));
                  },
                  get children() {
                    return n(X, {
                      variant: "ring",
                      size: "lg",
                      class: "light-layer3-tabs",
                      get children() {
                        return [
                          n(H, {
                            variant: "ring",
                            value: "reset",
                            get children() {
                              return o("Reset");
                            },
                          }),
                          n(H, {
                            variant: "ring",
                            value: "increase",
                            get children() {
                              return o("Increase by");
                            },
                          }),
                        ];
                      },
                    });
                  },
                }),
                a
              ),
              s(
                a,
                n(A, {
                  get value() {
                    return k().value;
                  },
                  get disabled() {
                    return t.isPlaying || !k().checked;
                  },
                  min: 0,
                  max: 1 / 0,
                  onChange: (r) => {
                    isNaN(r) ||
                      r === k().value ||
                      E((l) => C(b({}, l), { value: r }));
                  },
                  size: "lg",
                }),
                i
              ),
              e),
            ];
            var e, a, i;
          },
        }),
        n(T, {
          get class() {
            var e;
            return z("space-y-1", {
              hidden:
                (e = t.hideControls) == null ? void 0 : e.includes("stopOnWin"),
            });
          },
          get children() {
            return [
              ((i = Z()),
              s(
                i,
                n(F, {
                  get children() {
                    return o("Stop on win");
                  },
                }),
                null
              ),
              s(
                i,
                ((a = h(
                  () =>
                    !(
                      m.activeCurrency.currencyName ===
                        v.setting.localeCurrencyName || !y()
                    )
                )),
                () => {
                  return (
                    a() &&
                    ((l = ee()).firstChild,
                    s(l, ((r = h(() => !!P())), () => (r() ? P() : 0)), null),
                    s(l, () => x().name, null),
                    l)
                  );
                  var r, l;
                }),
                null
              ),
              i),
              ((e = $()),
              s(
                e,
                n(Y, {
                  class: "absolute left-2 top-1/2 -translate-y-1/2",
                  get token() {
                    return h(() => !!y())() ? c() : x();
                  },
                }),
                null
              ),
              s(
                e,
                n(A, {
                  min: 0,
                  max: 1 / 0,
                  get value() {
                    return Number(new N(L()).todp(W()).toFixed());
                  },
                  get disabled() {
                    return t.isPlaying;
                  },
                  onChange: (r) => {
                    isNaN(r) || R(r);
                  },
                  size: "lg",
                  class: "pl-9",
                }),
                null
              ),
              e),
            ];
            var e, a, i;
          },
        }),
        n(T, {
          get class() {
            var e;
            return z("space-y-1", {
              hidden:
                (e = t.hideControls) == null
                  ? void 0
                  : e.includes("stopOnLoss"),
            });
          },
          get children() {
            return [
              ((i = Z()),
              s(
                i,
                n(F, {
                  get children() {
                    return o("Stop on loss");
                  },
                }),
                null
              ),
              s(
                i,
                ((a = h(
                  () =>
                    !(
                      m.activeCurrency.currencyName ===
                        v.setting.localeCurrencyName || !y()
                    )
                )),
                () => {
                  return (
                    a() &&
                    ((l = ee()).firstChild,
                    s(l, ((r = h(() => !!S())), () => (r() ? S() : 0)), null),
                    s(l, () => x().name, null),
                    l)
                  );
                  var r, l;
                }),
                null
              ),
              i),
              ((e = $()),
              s(
                e,
                n(Y, {
                  class: "absolute left-2 top-1/2 -translate-y-1/2",
                  get token() {
                    return h(() => !!y())() ? c() : x();
                  },
                }),
                null
              ),
              s(
                e,
                n(A, {
                  min: 0,
                  max: 1 / 0,
                  get value() {
                    return Number(new N(j()).todp(W()).toFixed());
                  },
                  get disabled() {
                    return t.isPlaying;
                  },
                  onChange: (r) => {
                    isNaN(r) || q(r);
                  },
                  size: "lg",
                  class: "pl-9",
                }),
                null
              ),
              e),
            ];
            var e, a, i;
          },
        }),
        ((D = pe()),
        (K = D.firstChild),
        s(
          D,
          n(ge, {
            name: "Help",
            class: "shrink-0 text-quarterary",
            style: { width: "1.625rem", height: "1.625rem" },
          }),
          K
        ),
        s(K, () =>
          o(
            "Use of script is optional and players must take full responsibility for any attendant risks. We will not be held liable in this regard."
          )
        ),
        D),
      ]
    );
    var D, K;
  };
export { Te as A, O as D };
