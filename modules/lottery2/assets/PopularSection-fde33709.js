var R = Object.defineProperty,
  N = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var x = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty,
  B = Object.prototype.propertyIsEnumerable;
var w = (o, t, a) =>
    t in o
      ? R(o, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (o[t] = a),
  S = (o, t) => {
    for (var a in t || (t = {})) z.call(t, a) && w(o, a, t[a]);
    if (x) for (var a of x(t)) B.call(t, a) && w(o, a, t[a]);
    return o;
  },
  k = (o, t) => N(o, T(t));
var d = (o, t, a) =>
  new Promise((g, y) => {
    var L = (i) => {
        try {
          c(a.next(i));
        } catch (p) {
          y(p);
        }
      },
      v = (i) => {
        try {
          c(a.throw(i));
        } catch (p) {
          y(p);
        }
      },
      c = (i) => (i.done ? g(i.value) : Promise.resolve(i.value).then(L, v));
    c((a = a.apply(o, t)).next());
  });
import {
  g as F,
  d as U,
  u as V,
  b as j,
  i as u,
  c as n,
  a as D,
  m as H,
  S as K,
  t as h,
} from "./solid-js-8ff414d5.js";
import { P as M } from "./PopularSectionItem-c3dc7aa1.js";
import { u as O } from "./store-c334f12e.js";
import { b as q, a as G } from "./apis-5c7b35c7.js";
import { p as J } from "./store-2ed2b91e.js";
import {
  u as Q,
  b as W,
  e as b,
  B as X,
  A as $,
  I,
  K as Y,
  M as Z,
  g as A,
} from "./manifest-987d6c36.js";
import { t as f } from "./i18n-9df4b53a.js";
import { d as tt } from "./debounce-f7740f4e.js";
import "./index-4d3ecff0.js";
import "./currency-1e153f43.js";
import "./CountryAvatar-9bf00e0a.js";
import "./countries-18533370.js";
import "./lottery-40ce25b9.js";
import "./logo-a74fb622.js";
import "./Lottery.interface-46896b0b.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
var et = h(
    '<span class="inline-flex items-center dark:bg-layer5 bg-black_alpha5 gap-1 p-2 rounded-lg"><label class="text-primary text-sm font-semibold">'
  ),
  rt = h(
    '<div><section class="flex justify-between items-center my-3"><h2 class="text-primary text-base font-extrabold">'
  ),
  at = h('<section class="flex items-center gap-2">'),
  ot = h("<div class=size-full>"),
  st = h('<div class="rounded-xl bg-layer4 h-48">');
const Dt = function () {
  const o = Q(),
    { store: t, setStore: a } = O(),
    g = (e) => {
      if (e.length <= 0) return;
      const s = t.favourteLotteries;
      return e.map((r) => {
        const l = s.find((_) => _.lotteryId === r.id);
        return (r.hasLike = !!l), r;
      });
    },
    y = () =>
      d(this, null, function* () {
        const e = "/platform-lottery/lottery-info/list-popular",
          s = { distinctId: t.distinctId, areaCode: t.areaCode };
        return yield A().post(e, s);
      }),
    L = () =>
      d(this, null, function* () {
        const e = "/lottery/five-plus-one/current-info/",
          s = yield A().get(e);
        return {
          id: "0",
          lotteryId: "0",
          drawEventId: 0,
          status: 0,
          name: f("__ENV_SITE__ Lottery"),
          lotteryName: f("__ENV_SITE__ Lottery"),
          country: "USA",
          topPrize: 1e5,
          drawTime: s.drawnTime,
          isFavourite: !1,
        };
      }),
    v = () =>
      d(this, null, function* () {
        const e = yield Promise.all([L(), y()]),
          s = [e[0], ...e[1]];
        return g(s);
      }),
    [c, { mutate: i }] = F(v),
    p = tt((e) =>
      d(this, null, function* () {
        var r;
        if (!W.login) {
          o("/login/signin");
          return;
        }
        const s =
          (r = c()) == null
            ? void 0
            : r.map((l) =>
                k(S({}, l), { hasLike: l.id === e.id ? !e.hasLike : l.hasLike })
              );
        i(s), yield q(e.id, !e.hasLike);
        const m = yield G();
        a(J((l) => (l.favourteLotteries = m)));
      })
    ),
    C = () => {
      if (c() && t.favourteLotteries.length) {
        const e = g(c());
        i(e);
      }
    };
  U(() => (V(C), t.favourteLotteries));
  const [P, E] = j();
  return (() => {
    var e = rt(),
      s = e.firstChild,
      m = s.firstChild;
    return (
      u(m, () => f("Popular")),
      u(
        s,
        n(D, {
          get when() {
            return b.mobile;
          },
          get fallback() {
            return (() => {
              var r = at();
              return (
                u(
                  r,
                  n(X, {
                    class: "dark:bg-layer5 bg-black_alpha5 h-8",
                    get children() {
                      return n($, {
                        href: "/lottery/allLotteries?sort=lottery_popular",
                        class:
                          "font-extrabold text-sm text-primary inline-flex items-center",
                        get children() {
                          return [
                            H(() => f("All")),
                            n(I, {
                              name: "Arrow",
                              class: "w-4 h-4 rotate-180",
                            }),
                          ];
                        },
                      });
                    },
                  }),
                  null
                ),
                u(r, n(Y, { smoothListSelector: P }), null),
                r
              );
            })();
          },
          get children() {
            return n($, {
              href: "/lottery/allLotteries?sort=lottery_popular",
              get children() {
                var r = et(),
                  l = r.firstChild;
                return (
                  u(l, () => f("All")),
                  u(
                    r,
                    n(I, {
                      name: "Arrow",
                      class: "w-3 h-3 rotate-180 fill-secondary",
                    }),
                    null
                  ),
                  r
                );
              },
            });
          },
        }),
        null
      ),
      u(
        e,
        n(K, {
          get children() {
            return n(Z, {
              class: "-mx-4 sm:mx-0",
              get scrollPadding() {
                return b.mobile ? 16 : 0;
              },
              ref: (r) => {
                E(r);
              },
              get width() {
                return b.mobile ? 210 : 240;
              },
              height: 210,
              get data() {
                return c() || Array(b.mobile ? 4 : 12);
              },
              rows: 2,
              children: (r, l) =>
                (() => {
                  var _ = ot();
                  return (
                    u(
                      _,
                      n(D, {
                        get when() {
                          return r();
                        },
                        get fallback() {
                          return st();
                        },
                        get children() {
                          return n(M, {
                            get data() {
                              return r();
                            },
                            onClickLike: p,
                            get itemIndex() {
                              return l();
                            },
                          });
                        },
                      })
                    ),
                    _
                  );
                })(),
            });
          },
        }),
        null
      ),
      e
    );
  })();
};
export { Dt as PopularSection, Dt as default };
