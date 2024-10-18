import {
  f as z,
  K as b,
  D as l,
  h as f,
  H as p,
  J as ne,
  l as B,
  an as se,
  o as ae,
  i as a,
  c as s,
  m as A,
  I as le,
  N as ie,
  v as ce,
  ao as oe,
  B as k,
  S as W,
  e as E,
  F as ue,
  a as de,
  b as me,
  t as o,
} from "./manifest-a234c8a0.js";
import { N as be, a as fe } from "./number-field-a2716165.js";
import {
  P as ge,
  a as ve,
  b as ye,
  S as pe,
  c as he,
  d as xe,
  e as Ce,
} from "./slider-b2a7fa20.js";
import { S as Ne, a as H } from "./Symbol-f22f521e.js";
import { c as ke, a as we } from "./deduction-99b6c8dd.js";
import { a as Fe } from "./game-a49e1f5b.js";
import { t as M } from "./i18n-611811a6.js";
import { u as ze } from "./currency-a0e3a368.js";
import { k as D } from "./GameBankrollHelp-6ee96441.js";
import { y as Ae } from "./amount-af49bfc0.js";
import { c as Me } from "./index-eff0ad24.js";
import { u as De } from "./use-coin-format-bfa33df5.js";
var Pe = o(
    '<div class="flex items-center mb-1 justify-between"><div class="grow flex items-center">'
  ),
  je = o('<div class="flex flex-col">'),
  Ie = o(
    '<div class="absolute top-12 right-0 w-full sm:top-10 bg-layer6 rounded-lg z-10"><div class="flex flex-row justify-center items-stretch rounded-lg w-full focus-visible:outline-none">'
  ),
  Te = o('<div class="flex items-center gap-1">'),
  Be = o(
    '<div><div class="grid grid-cols-4 gap-2 rounded-xl w-full bg-transparent p-0 pt-1">'
  ),
  Oe = o("<div class=relative>"),
  Ue = o('<div class="flex flex-col flex-1 relative w-full">'),
  Re = o(
    '<div class="relative w-min -mt-24 bottom-full p-2 bg-layer5 text-white rounded-lg shadow-l"><div class="text-primary font-semibold text-sm whitespace-nowrap">: </div><div class="w-full flex items-center justify-center "><div class="absolute -bottom-4 left-20 border-8 border-solid border-transparent border-t-layer5">'
  ),
  Se = o('<div class="font-semibold text-sm text-secondary pr-1">≈'),
  Ve = o('<span class="truncate text-sm font-extrabold text-primary">');
function Ye(t) {
  const { jackpot: O } = ke(),
    { minBetAmount: P, maxBetAmount: J } = we(),
    { hotKeysEnable: U } = Fe(),
    {
      store: i,
      activeFiatToken: $,
      activeToken: h,
      isViewInFiat: g,
      isFrozen: j,
    } = ze(),
    { coinFormat: q } = De(),
    [G, R] = z(!1),
    [L, S] = z(!1),
    [V, _] = z(0),
    [Q, X] = z(i.activeCurrency.currencyName),
    [x, w] = z(
      b
        .convertCurrency(
          new l(t.value || 0),
          i.activeCurrency.currencyName,
          f.setting.localeCurrencyName
        )
        .toNumber()
    ),
    Y = p(() =>
      i.activeCurrency.currencyName.includes("FIAT")
        ? 2
        : b.getPrecision(h().symbol)
    ),
    I = p(() =>
      g()
        ? f.setting.localeCurrencyName.includes("FIAT")
          ? 2
          : b.getPrecision(h().symbol)
        : b.getPrecision(h().symbol)
    ),
    C = p(() => {
      let e;
      if (g()) {
        const u = f.setting.localeCurrencyName.includes("FIAT");
        e = Math.max(
          Number(
            b
              .convertCurrency(
                new l(P()),
                i.activeCurrency.currencyName,
                f.setting.localeCurrencyName
              )
              .todp(I(), l.ROUND_UP)
          ),
          u ? 0.01 : 0
        );
      } else e = P();
      return e;
    }),
    F = p(() => {
      let e = Math.max(
        Math.min(
          J(),
          i.activeCurrency.amount
            .sub(i.activeCurrency.bonusAmount)
            .todp(i.activeCurrencyConfig.precisionUnit, l.ROUND_DOWN)
            .toNumber()
        ),
        P()
      );
      return (
        g() &&
          (e = Number(
            b
              .convertCurrency(
                new l(e),
                i.activeCurrency.currencyName,
                f.setting.localeCurrencyName
              )
              .todp(I(), l.ROUND_DOWN)
          )),
        Math.max(e, C())
      );
    }),
    K = p(() => i.activeCurrency.currencyName),
    Z = p(() => {
      var e;
      return q(
        new l(((e = O()) == null ? void 0 : e.maxProfitAmount) || 0),
        h().symbol
      );
    });
  ne(() => {
    const e = x() || 0;
    _(Math.min(e / F() || 1, 1));
  });
  const c = (e) => {
      var v, m;
      w(0);
      const u = new l(
        j()
          ? Number(t.value)
          : ((y) => {
              const n = C(),
                r = F();
              return y < n ? n : y >= r ? r : y;
            })(e)
      ).toNumber();
      w(u),
        j() ||
          (g()
            ? (v = t.onChange) == null ||
              v.call(
                t,
                b
                  .convertCurrency(
                    new l(u),
                    f.setting.localeCurrencyName,
                    i.activeCurrencyConfig.currencyName
                  )
                  .toNumber()
              )
            : (m = t.onChange) == null || m.call(t, u));
    },
    ee = p(() => {
      const e = Ae(new l(C()), i.activeCurrency.currencyName);
      return Array.from({ length: 4 }, (u, v) =>
        new l(e).mul(new l(10).pow(v + 1)).toNumber()
      );
    }),
    re = () => {
      if (U() && !t.disabled) {
        const e = x() || 0;
        c(e / 2);
      }
    },
    te = () => {
      if (U() && !t.disabled) {
        const e = x() || 0;
        c(2 * e);
      }
    };
  return (
    B(() => {
      D("a", re), D("s", te);
    }),
    B(() => {
      Q() === K() ||
        t.disabled ||
        setTimeout(() => {
          const e = se(C);
          w(e), c(e), X(K());
        }, 500);
    }),
    B(() => {
      g()
        ? w(
            b
              .convertCurrency(
                new l(t.value || 0),
                i.activeCurrency.currencyName,
                f.setting.localeCurrencyName
              )
              .toNumber()
          )
        : w(t.value || 0);
    }),
    ae(() => {
      D.unbind("a"), D.unbind("s");
    }),
    (T = Ue()),
    a(
      T,
      s(be, {
        class: "w-full",
        get children() {
          return [
            ((m = Pe()),
            (y = m.firstChild),
            a(
              m,
              s(fe, {
                class:
                  "flex items-center h-4.5 pl-1 mr-1 text-sm font-extrabold",
                get children() {
                  return M("Amount");
                },
              }),
              y
            ),
            a(
              y,
              ((u = A(() => !!O())),
              () =>
                u() &&
                s(ge, {
                  get children() {
                    return [
                      s(ve, {
                        class: "focus-visible:outline-none size-4",
                        get children() {
                          return s(le, {
                            name: "Info",
                            class: "size-4 text-brand",
                          });
                        },
                      }),
                      s(ye, {
                        class:
                          "w-min p-0 flex items-center justify-center z-[10000]",
                        get children() {
                          var n = Re(),
                            r = n.firstChild,
                            d = r.firstChild;
                          return (
                            n.style.setProperty(
                              "box-shadow",
                              "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                            ),
                            a(r, () => M("Max Profit"), d),
                            a(r, Z, null),
                            n
                          );
                        },
                      }),
                    ];
                  },
                }))
            ),
            a(
              m,
              ((v = A(
                () =>
                  !(
                    i.activeCurrency.currencyName ===
                      f.setting.localeCurrencyName || !g()
                  )
              )),
              () => {
                return (
                  v() &&
                  ((r = Se()).firstChild,
                  a(
                    r,
                    ((n = A(() => !!t.value)),
                    () => (n() ? new l(t.value).todp(Y()).toFixed() : 0)),
                    null
                  ),
                  a(r, () => h().name, null),
                  r)
                );
                var n, r;
              }),
              null
            ),
            m),
            ((e = Oe()),
            a(
              e,
              s(ie, {
                get min() {
                  return A(() => !!j())() ? 0 : C();
                },
                get value() {
                  return Number(x().toFixed(I()));
                },
                onChange: c,
                get disabled() {
                  return t.disabled;
                },
                size: "lg",
                class:
                  "font-extrabold pr-1 sm:pr-[.1875rem] nowidth-input rounded-lg",
                onBlur: (n) => {
                  R(!1), c(Number(n.target.value));
                },
                onFocus: () => R(!0),
                get children() {
                  return [
                    s(Ne, {
                      class: "order-first scale-[1.2]",
                      get token() {
                        return A(() => !!g())() ? $() : h();
                      },
                    }),
                    ((n = Te()),
                    ce(
                      (r) =>
                        oe(
                          () => r,
                          () => S(!1)
                        ),
                      n
                    ),
                    a(
                      n,
                      s(k, {
                        type: "second",
                        onClick: () => c((x() || 0) / 2),
                        class: "text-primary w-15 h-10 sm:h-8 rounded-md",
                        get disabled() {
                          return t.disabled;
                        },
                        children: "1/2",
                      }),
                      null
                    ),
                    a(
                      n,
                      s(k, {
                        type: "second",
                        onClick: () => c(2 * (x() || 0)),
                        class: "text-primary w-15 h-10 sm:h-8 rounded-md",
                        get disabled() {
                          return t.disabled;
                        },
                        children: "2×",
                      }),
                      null
                    ),
                    a(
                      n,
                      s(k, {
                        type: "second",
                        class: "text-primary w-15 h-10 sm:h-8 rounded-md",
                        get disabled() {
                          return t.disabled;
                        },
                        onClick: () => S((r) => !r),
                        get children() {
                          var r = je();
                          return (
                            a(r, s(H, { class: "size-4 rotate-90" }), null),
                            a(r, s(H, { class: "size-4 -rotate-90" }), null),
                            r
                          );
                        },
                      }),
                      null
                    ),
                    a(
                      n,
                      s(W, {
                        get when() {
                          return L();
                        },
                        get children() {
                          var r = Ie(),
                            d = r.firstChild;
                          return (
                            a(
                              d,
                              s(k, {
                                onClick: () => c(C()),
                                class: "focus-visible:outline-none h-10",
                                get disabled() {
                                  return t.disabled;
                                },
                                get children() {
                                  return M("Min");
                                },
                              }),
                              null
                            ),
                            a(
                              d,
                              s(pe, {
                                minValue: 0,
                                maxValue: 1,
                                step: 0.01,
                                get value() {
                                  return [V()];
                                },
                                class: "flex-1 self-center mx-2 !bg-none",
                                onChange: (N) => {
                                  _(N[0]), c(F() * V());
                                },
                                get disabled() {
                                  return t.disabled;
                                },
                                get children() {
                                  return s(he, {
                                    class: "light-darkness",
                                    get children() {
                                      return [
                                        s(xe, {}),
                                        s(Ce, { class: "h-6 -top-2" }),
                                      ];
                                    },
                                  });
                                },
                              }),
                              null
                            ),
                            a(
                              d,
                              s(k, {
                                get disabled() {
                                  return t.disabled;
                                },
                                onClick: () => c(F()),
                                class: "focus-visible:outline-none h-10",
                                get children() {
                                  return M("Max");
                                },
                              }),
                              null
                            ),
                            r
                          );
                        },
                      }),
                      null
                    ),
                    n),
                  ];
                  var n;
                },
              }),
              null
            ),
            a(
              e,
              s(W, {
                get when() {
                  return !E.mobile || G();
                },
                get children() {
                  var n = Be(),
                    r = n.firstChild;
                  return (
                    a(
                      r,
                      s(ue, {
                        get each() {
                          return ee();
                        },
                        children: (d) =>
                          s(k, {
                            type: "second",
                            onMouseDown: (N) => N.preventDefault(),
                            onClick: () => c(d),
                            get disabled() {
                              return t.disabled || d > F();
                            },
                            get class() {
                              return Me("px-0 h-10 sm:h-8 rounded-md");
                            },
                            get children() {
                              var N = Ve();
                              return a(N, d), N;
                            },
                          }),
                      })
                    ),
                    de(() =>
                      me(
                        n,
                        E.mobile
                          ? "w-full absolute z-10 top-0 left-0 -translate-y-[105%] bg-layer3 rounded-lg px-1 pb-1"
                          : "w-full"
                      )
                    ),
                    n
                  );
                },
              }),
              null
            ),
            e),
          ];
          var e, u, v, m, y;
        },
      })
    ),
    T
  );
  var T;
}
export { Ye as B };
