var P = Object.defineProperty,
  F = Object.defineProperties;
var R = Object.getOwnPropertyDescriptors;
var x = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  U = Object.prototype.propertyIsEnumerable;
var w = (r, t, n) =>
    t in r
      ? P(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (r[t] = n),
  $ = (r, t) => {
    for (var n in t || (t = {})) k.call(t, n) && w(r, n, t[n]);
    if (x) for (var n of x(t)) U.call(t, n) && w(r, n, t[n]);
    return r;
  },
  A = (r, t) => F(r, R(t));
import {
  c as s,
  i as m,
  j as B,
  b as I,
  t as a,
  e as j,
  s as E,
} from "./web-13cf6287.js";
import {
  p as K,
  P as q,
  c as L,
  T as N,
  a as g,
  D as _,
  s as h,
  m as z,
} from "./manifest-cc1f4445.js";
import { e as H, F as v, i as O } from "./solid-js-38561dfe.js";
import { C as V } from "./center-loading-04d2fcbc.js";
import { t as o, T as f } from "./i18n-023baa0d.js";
import { d as b } from "./index-96ed660e.js";
var G = a("<img class=w-[8.125rem]>"),
  y = a("<span class=uppercase>__ENV_HOST__"),
  J = a("<span class=text-brand>4 consecutive deposits"),
  S = a("<span>__index__"),
  M = a('<span class="ml-1 font-semibold text-brand">__percentage__'),
  Q = a(
    '<span class="mx-1 font-extrabold text-brand">__registrationPercentage__'
  ),
  D = a("<span class=ml-1>__bonusAmount__"),
  W = a("<li>"),
  X = a('<span class="mx-1 font-semibold text-brand">__percentage__'),
  Y = a(
    '<div class="flex flex-col gap-y-4"><div class="flex flex-col gap-y-2"></div><div class="text-sm font-semibold leading-normal text-secondary"><p></p><ul class="mt-4 list-inside list-disc pl-4">'
  ),
  Z = a(
    '<div class="light-darkness h-full w-full overflow-hidden rounded-xl bg-layer4"><div><div class="absolute right-0 top-0"></div><h3 class="text-sm font-extrabold"></h3><span class="text-lg font-extrabold text-brand">'
  );
const ue = () => K.push(() => s(te, {})),
  ee = () => [
    {
      title: o("1st Deposit"),
      maxAmount: 2e4,
      minAmount: 10,
      rate: 1.8,
      bannerSrc: b.deposit1st,
      bgClass: "bg-gradient-deposit_first",
    },
    {
      title: o("2nd Deposit"),
      maxAmount: 4e4,
      minAmount: 50,
      rate: 2.4,
      bannerSrc: b.deposit2nd,
      bgClass: "bg-gradient-deposit_2nd",
    },
    {
      title: o("3rd Deposit"),
      maxAmount: 6e4,
      minAmount: 100,
      rate: 3,
      bannerSrc: b.deposit3rd,
      bgClass: "bg-gradient-deposit_3rd",
    },
    {
      title: o("4th Deposit"),
      maxAmount: 1e5,
      minAmount: 200,
      rate: 3.6,
      bannerSrc: b.deposit4th,
      bgClass: "bg-gradient-deposit_4th",
    },
  ],
  te = () => {
    const [r] = z,
      t = () => {
        var e;
        return ((e = r().maxBonusRatio[0]) != null ? e : 3) * 100;
      },
      n = () =>
        ee().map((e) =>
          A($({}, e), { class: e.bgClass, ratioPercentage: e.rate * 100 })
        ),
      c = () =>
        n().map((e) => ({
          title: e.title,
          heroTitle: [`${e.ratioPercentage}%`],
          class: e.class,
          banner: () =>
            (() => {
              var i = G();
              return j(() => E(i, "src", e.bannerSrc)), i;
            })(),
        })),
      d = () =>
        s(f, {
          i18nKey: "bonus.welecome.newtext.desc4",
          get children() {
            return [
              y(),
              " offers an outstanding bonus for ",
              J(),
              ". Each deposit earns you a higher bonus percentage and a higher maximum limit than the last. Enjoy increasing rewards with every deposit, supporting any currency of your choice. Take advantage of this opportunity to maximize your benefits with ",
              y(),
              "’s generous bonuses!",
            ];
          },
        }),
      p = () =>
        s(v, {
          get each() {
            return n();
          },
          children: (e, i) => {
            const l = () => {
              switch (i()) {
                case 0:
                  return o("first");
                case 1:
                  return o("second");
                case 2:
                  return o("third");
                case 3:
                  return o("fourth");
                default:
                  return o("unknown");
              }
            };
            return (() => {
              var u = W();
              return (
                m(
                  u,
                  s(N, {
                    get when() {
                      return i() === 0;
                    },
                    get fallback() {
                      return s(f, {
                        get index() {
                          return l();
                        },
                        get percentage() {
                          return e.ratioPercentage + "%";
                        },
                        get bonusAmount() {
                          return g.toFiatStr(
                            new _(e.maxAmount),
                            "USDFIAT",
                            h.lang
                          );
                        },
                        get minimum() {
                          return g.toFiatStr(
                            new _(e.minAmount),
                            "USDFIAT",
                            h.lang
                          );
                        },
                        i18nKey: "bonus.welecome.newtext.desc5",
                        get children() {
                          return [
                            "The ",
                            S(),
                            " deposit earns you",
                            X(),
                            " ",
                            "with a minimum deposit of __minimum__ , up to a maximum of",
                            D(),
                            " or an equivalent amount in other currencies.",
                          ];
                        },
                      });
                    },
                    get children() {
                      return s(f, {
                        get index() {
                          return l();
                        },
                        get percentage() {
                          return e.ratioPercentage + "%";
                        },
                        get bonusAmount() {
                          return g.toFiatStr(
                            new _(e.maxAmount),
                            "USDFIAT",
                            h.lang
                          );
                        },
                        get registrationPercentage() {
                          return t() + "%";
                        },
                        get minimum() {
                          return g.toFiatStr(
                            new _(e.minAmount),
                            "USDFIAT",
                            h.lang
                          );
                        },
                        i18nKey: "bonus.welecome.newtext.desc6",
                        get children() {
                          return [
                            "The ",
                            S(),
                            " deposit earns you",
                            M(),
                            "(or",
                            Q(),
                            "for new registrations within 7 minutes) with a minimum deposit of __minimum__, up to a maximum of",
                            D(),
                            " or an equivalent amount in other currencies.",
                          ];
                        },
                      });
                    },
                  })
                ),
                u
              );
            })();
          },
        });
    return s(q, {
      class: "h-screen sm:h-auto",
      get title() {
        return o("Deposit Bonus Rules");
      },
      get children() {
        return s(H, {
          get fallback() {
            return s(V, { class: "flex-grow" });
          },
          get children() {
            var e = Y(),
              i = e.firstChild,
              l = i.nextSibling,
              u = l.firstChild,
              T = u.nextSibling;
            return (
              m(
                i,
                s(v, {
                  get each() {
                    return c();
                  },
                  children: (C) => s(ne, C),
                })
              ),
              m(u, d),
              m(T, p),
              e
            );
          },
        });
      },
    });
  },
  ne = (r) => {
    const [t, n] = O(r, ["title", "heroTitle", "banner"]);
    return (() => {
      var c = Z(),
        d = c.firstChild,
        p = d.firstChild,
        e = p.nextSibling,
        i = e.nextSibling;
      return (
        B(
          d,
          I(n, {
            get class() {
              return L(
                "justify-center-center relative flex h-[4.375rem] flex-col px-5 py-3 bg-gradient-deposit_first",
                n.class
              );
            },
          }),
          !1,
          !0
        ),
        m(p, () => {
          var l;
          return (l = t.banner) == null ? void 0 : l.call(t);
        }),
        m(e, () => t.title),
        m(i, () => t.heroTitle),
        c
      );
    })();
  };
export { te as D, ue as p };
