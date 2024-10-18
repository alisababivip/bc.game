var W = Object.defineProperty;
var B = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty,
  Z = Object.prototype.propertyIsEnumerable;
var I = (n, i, t) =>
    i in n
      ? W(n, i, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[i] = t),
  P = (n, i) => {
    for (var t in i || (i = {})) U.call(i, t) && I(n, t, i[t]);
    if (B) for (var t of B(i)) Z.call(i, t) && I(n, t, i[t]);
    return n;
  };
var w = (n, i, t) =>
  new Promise((h, b) => {
    var d = (p) => {
        try {
          f(t.next(p));
        } catch (v) {
          b(v);
        }
      },
      C = (p) => {
        try {
          f(t.throw(p));
        } catch (v) {
          b(v);
        }
      },
      f = (p) => (p.done ? h(p.value) : Promise.resolve(p.value).then(d, C));
    f((t = t.apply(n, i)).next());
  });
import {
  e as G,
  b as E,
  g as H,
  c as r,
  S,
  i as o,
  a as k,
  m as F,
  q as J,
  F as K,
  k as Q,
  n as X,
  t as y,
  h as Y,
} from "./solid-js-8ff414d5.js";
import {
  h as ee,
  i as te,
  e as re,
  f as le,
  a as ae,
  S as R,
  L as se,
  E as oe,
  d as ne,
} from "./manifest-987d6c36.js";
import { u as ie } from "./store-c334f12e.js";
import { L as ce } from "./LikeLotteryItem-30e8754e.js";
import { g as ue, a as N, b as me } from "./apis-5c7b35c7.js";
import { p as M } from "./store-2ed2b91e.js";
import { C as de } from "./CountryAvatar-9bf00e0a.js";
import { t as g } from "./i18n-9df4b53a.js";
import { I as O } from "./LocalIcon-84e2288f.js";
import { t as fe } from "./throttle-e4f3954e.js";
import "./Lottery.interface-46896b0b.js";
import "./index-4d3ecff0.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
import "./countries-18533370.js";
import "./lottery-40ce25b9.js";
import "./debounce-f7740f4e.js";
const pe = "/modules/lottery2/assets/like-icon-db435da6.png";
var ge = y(
    '<div class="search-box flex flex-col gap-4 justify-between mt-6"><div class="search-input flex items-center justify-center h-10 relative"></div><div class="left-search flex justify-between gap-2 flex-1">'
  ),
  he = y("<div>"),
  ye = y(
    '<div class="like-box bg-layer2 mt-4 sm:mt-0"><section class="sticky top-14 sm:top-[3.75rem] z-20 bg-layer2"><h1 class="text-lg font-extrabold text-primary">'
  ),
  be = y(
    '<div class="inline-flex items-center gap-1"><label class="text-primary text-sm font-semibold">'
  ),
  ve = y('<label class="text-primary text-sm font-semibold">: '),
  xe = y('<label class="text-primary text-sm font-semibold">'),
  Ce = y(
    '<div><section class="flex flex-col items-center mt-8"><img class="w-12 h-12"><p class="mt-6 text-base font-extrabold text-primary"></p><p class="text-secondary text-sm font-semibold center mt-2 gap-1"><label></label><svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 15 15"class=fill-primary><path d="M6.85675 1.24027C7.12738 0.722864 7.86865 0.724927 8.1364 1.24383L9.79739 4.46283C9.90066 4.66297 10.0915 4.80336 10.3133 4.84235L13.9346 5.47884C14.5235 5.58234 14.7378 6.31632 14.2971 6.7204L11.6324 9.1639C11.4493 9.33185 11.3655 9.58228 11.4108 9.82662L12.0905 13.4968C12.2012 14.0943 11.5684 14.5524 11.0353 14.2605L7.84625 12.5146C7.63053 12.3965 7.36948 12.3965 7.15375 12.5146L4.01341 14.2339C3.4722 14.5302 2.83305 14.054 2.96207 13.4506L3.73283 9.84629C3.7873 9.59153 3.70011 9.32719 3.50475 9.15484L0.747213 6.72206C0.294327 6.32251 0.503934 5.57655 1.09865 5.47137L4.65598 4.84221C4.87609 4.80328 5.0657 4.66446 5.1693 4.46638L6.85675 1.24027Z"></path></svg><label>'
  );
function We() {
  const n = G(() => [
      { label: g("Added Date"), value: "ADDED_DATE" },
      { label: "Draw Date", value: "DRAW_DATE" },
      { label: "Popularity", value: "POPULAR" },
    ]),
    i = { lotteryName: "", lotteryCountry: "", sortBy: "DRAW_DATE" };
  let t;
  const [h, b] = E(2),
    [d, C] = E(i);
  let f = !1;
  const { store: p, setStore: v } = ie(),
    V = () =>
      w(this, null, function* () {
        const l = yield N(d());
        return f && v(M((a) => (a.favourteLotteries = l))), l;
      }),
    [_, { refetch: Le, mutate: j }] = H(d, V, { initialValue: [] }),
    z = (l) =>
      w(this, null, function* () {
        const a = _().filter((u) => u.lotteryId !== l.lotteryId);
        j(a), yield me(l.lotteryId, !1);
        const c = yield N();
        v(M((u) => (u.favourteLotteries = c))), (f = !0);
      }),
    A = ue(),
    L = fe((l, a) =>
      w(this, null, function* () {
        f = !1;
        const c = P({}, d());
        a === "country" && (c.lotteryCountry = l),
          a === "sortBy" && (c.sortBy = l),
          a === "name" && (c.lotteryName = l),
          C(c);
      })
    ),
    T = () => {
      var a;
      return (
        ((a = A()) == null
          ? void 0
          : a.find((c) => {
              var u;
              return c === ((u = d()) == null ? void 0 : u.lotteryCountry);
            })) || ""
      );
    },
    q = () =>
      n().find((a) => {
        var c;
        return a.value === ((c = d()) == null ? void 0 : c.sortBy);
      }) || n()[1];
  return (
    ee(
      () => t,
      te(({ width: l }, a) => {
        if (a === t) {
          const c = Math.floor(l / 210);
          c !== h() && b(re.mobile ? 2 : c);
        }
      })
    ),
    r(le, {
      get title() {
        return g("My Favorites");
      },
      get children() {
        return r(S, {
          get children() {
            var l = ye(),
              a = l.firstChild,
              c = a.firstChild;
            return (
              o(c, () => g("My Favorites")),
              o(
                a,
                r(S, {
                  get children() {
                    var u = ge(),
                      s = u.firstChild,
                      x = s.nextSibling;
                    return (
                      o(
                        s,
                        r(O, {
                          class: "search-icon absolute left-2.5",
                          name: "Search",
                        }),
                        null
                      ),
                      o(
                        s,
                        r(ae, {
                          get value() {
                            var e;
                            return (e = d()) == null ? void 0 : e.lotteryName;
                          },
                          onChange: (e) => {
                            L(e, "name");
                          },
                          class:
                            "bg-input_darken placeholder:text-quarterary h-full pl-10 pr-10 text-base font-semibold w-full rounded-xl border border-solid border-input",
                          get placeholder() {
                            return g("Search name");
                          },
                        }),
                        null
                      ),
                      o(
                        s,
                        r(k, {
                          get when() {
                            var e;
                            return (e = d()) == null ? void 0 : e.lotteryName;
                          },
                          get children() {
                            return r(O, {
                              class:
                                "close-icon absolute right-2.5 cursor-pointer",
                              name: "Close",
                              onClick: () => {
                                L("", "name");
                              },
                            });
                          },
                        }),
                        null
                      ),
                      o(
                        x,
                        r(R, {
                          class:
                            "w-1/2 rounded-xl border border-solid border-input",
                          get value() {
                            return T();
                          },
                          get options() {
                            return A() || [];
                          },
                          onChange: (e) => L(e, "country"),
                          children: (e) =>
                            (() => {
                              var m = be(),
                                $ = m.firstChild;
                              return (
                                o(
                                  m,
                                  (() => {
                                    var D = F(() => !!e());
                                    return () =>
                                      D() &&
                                      r(de, {
                                        get country() {
                                          return e();
                                        },
                                      });
                                  })(),
                                  $
                                ),
                                o(
                                  $,
                                  (() => {
                                    var D = F(() => e() === "");
                                    return () => (D() ? g("All Country") : e());
                                  })()
                                ),
                                m
                              );
                            })(),
                        }),
                        null
                      ),
                      o(
                        x,
                        r(R, {
                          class:
                            "min-w-32 w-1/2 rounded-xl border border-solid border-input",
                          get value() {
                            return q();
                          },
                          get options() {
                            return n();
                          },
                          onChange: (e) => L(e.value, "sortBy"),
                          labelFormat: (e) =>
                            (() => {
                              var m = ve(),
                                $ = m.firstChild;
                              return (
                                o(m, () => g("Sort By"), $),
                                o(m, () => e().label, null),
                                m
                              );
                            })(),
                          children: (e) =>
                            (() => {
                              var m = xe();
                              return o(m, () => e().label), m;
                            })(),
                        }),
                        null
                      ),
                      u
                    );
                  },
                }),
                null
              ),
              o(
                l,
                r(S, {
                  get fallback() {
                    return r(se, { class: "relative left-1/2 top-10 z-10" });
                  },
                  get children() {
                    var u = he();
                    return (
                      J((s) => (t = s), u),
                      o(
                        u,
                        r(k, {
                          get when() {
                            return p.favourteLotteries.length;
                          },
                          get fallback() {
                            return r(_e, {});
                          },
                          get children() {
                            return r(S, {
                              get children() {
                                return r(k, {
                                  get when() {
                                    var s;
                                    return (s = _()) == null
                                      ? void 0
                                      : s.length;
                                  },
                                  get fallback() {
                                    return r(oe, {});
                                  },
                                  get children() {
                                    return r(K, {
                                      get each() {
                                        return _();
                                      },
                                      children: (s) =>
                                        r(ce, { data: s, onClickLike: z }),
                                    });
                                  },
                                });
                              },
                            });
                          },
                        })
                      ),
                      Q(
                        (s) => {
                          var m;
                          var x = h(),
                            e = ne(
                              "favourite-list-box relative mt-4 cursor-pointer pb-4",
                              ((m = _()) == null ? void 0 : m.length) > 0 &&
                                "grid gap-2 grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))]"
                            );
                          return (
                            x !== s.e &&
                              ((s.e = x) != null
                                ? u.style.setProperty("--grid-cols", x)
                                : u.style.removeProperty("--grid-cols")),
                            e !== s.t && X(u, (s.t = e)),
                            s
                          );
                        },
                        { e: void 0, t: void 0 }
                      ),
                      u
                    );
                  },
                }),
                null
              ),
              l
            );
          },
        });
      },
    })
  );
}
const _e = () =>
  (() => {
    var n = Ce(),
      i = n.firstChild,
      t = i.firstChild,
      h = t.nextSibling,
      b = h.nextSibling,
      d = b.firstChild,
      C = d.nextSibling,
      f = C.nextSibling;
    return (
      Y(t, "src", pe),
      o(h, () => g("No favourites yet")),
      o(d, () => g("Click the")),
      o(f, () => g("to favourite games.")),
      n
    );
  })();
export { We as default };
