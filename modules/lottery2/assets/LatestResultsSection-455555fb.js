var A = (p, c, n) =>
  new Promise((g, o) => {
    var d = (a) => {
        try {
          i(n.next(a));
        } catch (f) {
          o(f);
        }
      },
      u = (a) => {
        try {
          i(n.throw(a));
        } catch (f) {
          o(f);
        }
      },
      i = (a) => (a.done ? g(a.value) : Promise.resolve(a.value).then(d, u));
    i((n = n.apply(p, c)).next());
  });
import {
  b as F,
  c as l,
  S as C,
  i as r,
  F as S,
  a as k,
  k as E,
  n as P,
  p as W,
  t as b,
  g as X,
  d as q,
} from "./solid-js-8ff414d5.js";
import { a as K } from "./CountryAvatar-9bf00e0a.js";
import {
  u as M,
  L as O,
  e as y,
  I as Q,
  d as B,
  P as V,
  g as Y,
} from "./manifest-987d6c36.js";
import { t as _ } from "./i18n-9df4b53a.js";
import "./countries-18533370.js";
import "./lottery-40ce25b9.js";
var Z = b(
    '<section class="latestResultsSectionWrap mt-4"><h2 class="my-3 text-primary text-base font-extrabold"></h2><div class="latest-results-table-box rounded-xl p-0 bg-layer4"><table class=w-full><thead><tr><th class="flex items-center text-left border-l-0 rounded-none pl-3 sm:pl-4 text-secondary text-xs font-semibold"></th><th class="flex items-center border-l-0 rounded-none text-secondary text-xs font-semibold text-right"><div class=w-full></div></th><th></th></tr></thead><tbody>'
  ),
  tt = b(
    '<label class="text-brand text-lg font-extrabold w-full flex justify-end pr-4">'
  ),
  et = b(
    '<tr><td class="flex items-center text-left border-l-0 rounded-none pl-3 sm:pl-4"><div class="flex gap-2 w-full items-start flex-col py-2"><section class="w-full overflow-hidden"><h2 class="cursor-pointer truncate text-sm text-primary font-semibold"></h2><p class="lottery-date font-semibold m-0 text-xs text-secondary"></p></section></div></td><td class="flex items-center text-left border-l-0 rounded-none relative border-r-0"><section class="flex items-center justify-end gap-2 flex-wrap pr-2 w-full"></section></td><td><section class="w-full cursor-pointer flex items-center justify-center text-lg italic font-bold">'
  ),
  rt = b(
    `<span class="center rounded-full w-6 h-6 bg-[url('/src/assets/lottery/ball-white.png')] bg-contain text-primary_brand text-xs font-extrabold">`
  ),
  lt = b(
    `<span class="center rounded-full w-6 h-6 bg-[url('/src/assets/lottery/jackpot_ball.png')] bg-contain text-primary_brand text-xs font-extrabold">`
  );
const st = (p, c) => {
    const [n] = X(p, c),
      [g, o] = F(n);
    return (
      q(() => {
        o(n);
      }),
      [g]
    );
  },
  ft = function () {
    const p = M(),
      [c, n] = F(1),
      g = (d) =>
        A(this, null, function* () {
          const u = "/platform-lottery/lottery-info/latest-results",
            i = { page: d, pageSize: 10 };
          return yield Y().post(u, i);
        }),
      [o] = st(c, g);
    return l(C, {
      get children() {
        var d = Z(),
          u = d.firstChild,
          i = u.nextSibling,
          a = i.firstChild,
          f = a.firstChild,
          N = f.firstChild,
          D = N.firstChild,
          G = D.nextSibling,
          H = G.firstChild,
          J = f.nextSibling;
        return (
          r(u, () => _("Latest Results")),
          r(D, () => _("Lottery Name")),
          r(H, () => _("Jackpot Number")),
          r(
            J,
            l(C, {
              get fallback() {
                return l(O, { class: "mt-15" });
              },
              get children() {
                return l(S, {
                  get each() {
                    var t;
                    return (t = o()) == null ? void 0 : t.list;
                  },
                  children: (t) =>
                    (() => {
                      var m = et(),
                        L = m.firstChild,
                        R = L.firstChild,
                        j = R.firstChild,
                        I = j.firstChild,
                        T = I.nextSibling,
                        v = L.nextSibling,
                        x = v.firstChild,
                        h = v.nextSibling,
                        U = h.firstChild;
                      return (
                        (m.$$click = () => {
                          p(`/lottery/detail/${t.lotteryId}`);
                        }),
                        r(
                          R,
                          l(K, {
                            get country() {
                              return (t == null ? void 0 : t.lotteryId) === "0"
                                ? "Bc"
                                : t.lotteryCountry;
                            },
                          }),
                          j
                        ),
                        r(I, () => t.lotteryName),
                        r(T, () =>
                          new Date(Number(t.drawTime)).toLocaleString("en-GB")
                        ),
                        v.style.setProperty("background", "transparent"),
                        r(
                          x,
                          l(k, {
                            get when() {
                              return t.normalBall;
                            },
                            get children() {
                              return l(S, {
                                get each() {
                                  return t.normalBall.split(",");
                                },
                                children: (e) =>
                                  (() => {
                                    var s = rt();
                                    return r(s, e), s;
                                  })(),
                              });
                            },
                          }),
                          null
                        ),
                        r(
                          x,
                          l(k, {
                            get when() {
                              return t.bonusBall;
                            },
                            get children() {
                              return l(S, {
                                get each() {
                                  return t.bonusBall.split(",");
                                },
                                children: (e) =>
                                  (() => {
                                    var s = lt();
                                    return r(s, e), s;
                                  })(),
                              });
                            },
                          }),
                          null
                        ),
                        r(
                          U,
                          l(k, {
                            get when() {
                              return !y.mobile;
                            },
                            get fallback() {
                              return l(Q, {
                                name: "Arrow",
                                class:
                                  "btn-now-arrow-icon text-sm fill-secondary rotate-180 w-4 h-4",
                              });
                            },
                            get children() {
                              var e = tt();
                              return (
                                r(e, () => {
                                  var s;
                                  return (s = _("Bet Now")) == null
                                    ? void 0
                                    : s.toUpperCase();
                                }),
                                e
                              );
                            },
                          })
                        ),
                        E(
                          (e) => {
                            var s = B(
                                "cursor-pointer grid border-b border-solid border-third",
                                y.mobile
                                  ? "py-2 grid-cols-[150px_auto_30px]"
                                  : "grid-cols-[300px_auto_200px]"
                              ),
                              $ = `translateX(-${t.offsetDis}px)`,
                              z = B("flex items-center"),
                              w = y.mobile
                                ? "initial"
                                : "linear-gradient(270deg, rgba(36, 238, 137, 0.14) 0%, rgba(36, 238, 137, 0.00) 100%)";
                            return (
                              s !== e.e && P(m, (e.e = s)),
                              $ !== e.t &&
                                ((e.t = $) != null
                                  ? x.style.setProperty("transform", $)
                                  : x.style.removeProperty("transform")),
                              z !== e.a && P(h, (e.a = z)),
                              w !== e.o &&
                                ((e.o = w) != null
                                  ? h.style.setProperty("background", w)
                                  : h.style.removeProperty("background")),
                              e
                            );
                          },
                          { e: void 0, t: void 0, a: void 0, o: void 0 }
                        ),
                        m
                      );
                    })(),
                });
              },
            })
          ),
          r(
            i,
            l(C, {
              get children() {
                return l(V, {
                  class: "justify-end py-4 mr-4",
                  get current() {
                    return c();
                  },
                  get total() {
                    var t;
                    return (t = o()) == null ? void 0 : t.total;
                  },
                  get pageSize() {
                    var t;
                    return (t = o()) == null ? void 0 : t.pageSize;
                  },
                  onChange: (t) => {
                    n(t);
                  },
                });
              },
            }),
            null
          ),
          E(() =>
            P(
              N,
              B(
                "cursor-pointer py-2 grid border-b border-solid border-third",
                y.mobile
                  ? "grid-cols-[150px_auto_30px]"
                  : "grid-cols-[300px_auto_200px]"
              )
            )
          ),
          d
        );
      },
    });
  };
W(["click"]);
export { ft as LatestResultsSection, ft as default };
