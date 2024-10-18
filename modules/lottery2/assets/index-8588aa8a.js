var Q = Object.defineProperty,
  X = Object.defineProperties;
var tt = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var et = Object.prototype.hasOwnProperty,
  rt = Object.prototype.propertyIsEnumerable;
var M = (l, o, a) =>
    o in l
      ? Q(l, o, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (l[o] = a),
  d = (l, o) => {
    for (var a in o || (o = {})) et.call(o, a) && M(l, a, o[a]);
    if (E) for (var a of E(o)) rt.call(o, a) && M(l, a, o[a]);
    return l;
  },
  _ = (l, o) => X(l, tt(o));
var F = (l, o, a) =>
  new Promise((x, L) => {
    var S = (i) => {
        try {
          g(a.next(i));
        } catch (k) {
          L(k);
        }
      },
      m = (i) => {
        try {
          g(a.throw(i));
        } catch (k) {
          L(k);
        }
      },
      g = (i) => (i.done ? x(i.value) : Promise.resolve(i.value).then(S, m));
    g((a = a.apply(l, o)).next());
  });
import {
  b as A,
  g as st,
  d as N,
  u as Y,
  e as ot,
  c as u,
  S as $,
  i as p,
  m as Z,
  q as at,
  F as lt,
  k as nt,
  n as it,
  t as b,
} from "./solid-js-8ff414d5.js";
import {
  u as ct,
  h as ut,
  i as pt,
  e as mt,
  f as yt,
  S as q,
  L as ft,
  d as dt,
  P as gt,
  g as _t,
  b as ht,
} from "./manifest-987d6c36.js";
import { P as vt } from "./PopularSectionItem-c3dc7aa1.js";
import { g as bt, b as xt, a as Lt } from "./apis-5c7b35c7.js";
import { a as kt } from "./router-290e090e.js";
import { u as St } from "./store-c334f12e.js";
import { p as $t } from "./store-2ed2b91e.js";
import { C as Ct } from "./CountryAvatar-9bf00e0a.js";
import { t as v } from "./i18n-9df4b53a.js";
import "./index-4d3ecff0.js";
import "./currency-1e153f43.js";
import "./logo-a74fb622.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
import "./Lottery.interface-46896b0b.js";
import "./countries-18533370.js";
import "./lottery-40ce25b9.js";
var Pt = b('<div class="search-box flex gap-2">'),
  Bt = b("<section>"),
  Dt = b(
    '<div class="allLotteriesPageWrap mt-4 sm:mt-0 bg-layer2"><section class="top-box flex justify-between flex-col gap-5 pb-4 sticky top-14 sm:top-[3.75rem] pt-4 -mt-4 z-20 bg-layer2"><h1 class="text-lg font-extrabold text-primary "></h1></section><div class=min-h-52></div><section class="pagination-box py-4 flex justify-end">'
  ),
  wt = b(
    '<div class="inline-flex items-center gap-1"><label class="text-primary text-sm font-semibold">'
  ),
  Ft = b('<label class="text-primary text-sm font-semibold truncate">: '),
  At = b('<label class="text-primary text-sm font-semibold">');
function Xt() {
  const l = ct(),
    [o, a] = kt(),
    x = [
      "letter_asc",
      "letter_desc",
      "lottery_picks_for_you",
      "lottery_popular",
    ],
    L = {
      letter_asc: () => "A-Z",
      letter_desc: () => "Z-A",
      lottery_picks_for_you: () => v("Picks For You"),
      lottery_popular: () => v("Popular"),
    },
    S = { country: "", sortBy: o.sort || "letter_asc", page: 1, pageSize: 20 },
    [m, g] = A(S),
    [i, k] = A(1),
    { store: C, setStore: H } = St();
  let R = !0;
  const I = (r, e) => {
      if (r.list.length <= 0) return;
      const c = e || C.favourteLotteries,
        y = r.list.map((f) => {
          const s = c.find((t) => t.lotteryId === f.id);
          return (f.hasLike = !!s), f;
        });
      return _(d({}, r), { list: y });
    },
    T = (...e) =>
      F(this, [...e], function* (r = {}) {
        const c = d({ areaCode: C.areaCode, distinctId: C.distinctId }, r),
          y = "/platform-lottery/lottery-info/list-lotteries/",
          f = yield _t().post(y, c);
        return I(f);
      }),
    [P, { mutate: O }] = st(m, T),
    U = (r) =>
      F(this, null, function* () {
        if (!ht.login) {
          l("/login/signin");
          return;
        }
        const e = P();
        if (e && e.list.length > 0) {
          const c = e.list.map((t) =>
            _(d({}, t), { hasLike: t.id === r.id ? !t.hasLike : t.hasLike })
          );
          O(_(d({}, e), { list: c })), yield xt(r.id, !r.hasLike);
          const y = yield Lt();
          H($t((t) => (t.favourteLotteries = y)));
          const f = I(e, y),
            s = structuredClone(f);
          O(s);
        }
      });
  N((r) =>
    R ? ((R = !1), i()) : (Y(() => g(_(d({}, m()), { page: i() }))), i())
  );
  const z = bt(),
    W = () => {
      var e;
      return (
        ((e = z()) == null ? void 0 : e.find((c) => c === m().country)) || ""
      );
    },
    B = () => x.find((e) => e === m().sortBy) || x[0],
    G = (r) => {
      const e = _(d({}, m()), { country: r });
      (e.sortBy === "lottery_picks_for_you" ||
        e.sortBy === "lottery_popular") &&
        ((e.sortBy = "letter_asc"),
        l(`/lottery/allLotteries?sort=${e.sortBy}`, { replace: !0 })),
        g(e);
    },
    J = (r) => {
      const e = _(d({}, m()), { sortBy: r });
      (e.sortBy === "lottery_picks_for_you" ||
        e.sortBy === "lottery_popular") &&
        (e.country = ""),
        g(e),
        l(`/lottery/allLotteries?sort=${r}`, { replace: !0 });
    };
  N(
    () => (
      Y(() => {
        o.sort !== m().sortBy &&
          g(_(d({}, S), { sortBy: o.sort || "letter_asc" }));
      }),
      o.sort
    )
  );
  const V = ot(() =>
      B() === "lottery_picks_for_you"
        ? v("Picks For You")
        : B() === "lottery_popular"
        ? v("Popular")
        : v("All Lotteries")
    ),
    [j, K] = A(2);
  let D;
  return (
    ut(
      () => D,
      pt(({ width: r }, e) => {
        if (e === D) {
          const c = Math.floor(r / 210);
          c !== j() && K(mt.mobile ? 2 : c);
        }
      })
    ),
    u(yt, {
      get title() {
        return V();
      },
      get children() {
        return u($, {
          get children() {
            var r = Dt(),
              e = r.firstChild,
              c = e.firstChild,
              y = e.nextSibling,
              f = y.nextSibling;
            return (
              p(c, V),
              p(
                e,
                u($, {
                  get children() {
                    var s = Pt();
                    return (
                      p(
                        s,
                        u(q, {
                          class: "w-1/2",
                          get value() {
                            return W();
                          },
                          get options() {
                            return z() || [];
                          },
                          onChange: G,
                          children: (t) =>
                            (() => {
                              var n = wt(),
                                h = n.firstChild;
                              return (
                                p(
                                  n,
                                  (() => {
                                    var w = Z(() => !!t());
                                    return () =>
                                      w() &&
                                      u(Ct, {
                                        get country() {
                                          return t();
                                        },
                                      });
                                  })(),
                                  h
                                ),
                                p(
                                  h,
                                  (() => {
                                    var w = Z(() => t() === "");
                                    return () => (w() ? v("All Country") : t());
                                  })()
                                ),
                                n
                              );
                            })(),
                        }),
                        null
                      ),
                      p(
                        s,
                        u(q, {
                          class: "w-1/2",
                          get value() {
                            return B();
                          },
                          options: x,
                          onChange: J,
                          labelFormat: (t) =>
                            (() => {
                              var n = Ft(),
                                h = n.firstChild;
                              return (
                                p(n, () => v("Sort By"), h),
                                p(n, () => L[t()](), null),
                                n
                              );
                            })(),
                          children: (t) =>
                            (() => {
                              var n = At();
                              return p(n, () => L[t()]()), n;
                            })(),
                        }),
                        null
                      ),
                      s
                    );
                  },
                }),
                null
              ),
              p(
                y,
                u($, {
                  get fallback() {
                    return u(ft, { class: "relative left-1/2 top-15" });
                  },
                  get children() {
                    var s = Bt();
                    return (
                      at((t) => (D = t), s),
                      p(
                        s,
                        u(lt, {
                          get each() {
                            var t;
                            return (t = P()) == null ? void 0 : t.list;
                          },
                          children: (t) => u(vt, { data: t, onClickLike: U }),
                        })
                      ),
                      nt(
                        (t) => {
                          var n = j(),
                            h = dt(
                              "relative grid gap-2 grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))]"
                            );
                          return (
                            n !== t.e &&
                              ((t.e = n) != null
                                ? s.style.setProperty("--grid-cols", n)
                                : s.style.removeProperty("--grid-cols")),
                            h !== t.t && it(s, (t.t = h)),
                            t
                          );
                        },
                        { e: void 0, t: void 0 }
                      ),
                      s
                    );
                  },
                })
              ),
              p(
                f,
                u($, {
                  get children() {
                    return u(gt, {
                      colorTheme: "darken",
                      class: "w-fit",
                      get total() {
                        var s;
                        return ((s = P()) == null ? void 0 : s.total) || 0;
                      },
                      get current() {
                        return i();
                      },
                      onChange: (s) => {
                        k(s);
                      },
                    });
                  },
                })
              ),
              r
            );
          },
        });
      },
    })
  );
}
export { Xt as default };
