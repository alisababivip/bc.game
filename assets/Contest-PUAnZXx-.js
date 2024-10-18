import {
  aY as E,
  i as t,
  t as s,
  c as r,
  aZ as K,
  h as $,
  f as v,
  a as I,
  a1 as k,
  aJ as Y,
  l as y,
  x as H,
  a5 as Z,
  a_ as q,
  a$ as J,
  q as W,
  D,
  s as p,
  aD as M,
  p as B,
  F as O,
  Q,
  a6 as U,
  m as G,
  e as V,
} from "./index-Cp-3lvCI.js";
import { C as A, a as C } from "./ContestList-BAhZQcZ1.js";
import { n as X, c as R, a as ee, b as te } from "./common-Dpx_AU6F.js";
var re = v(
    '<div class="flex-col rounded-md bg-layer2 py-1 center w-12"><div class="text-xl font-extrabold text-primary"></div><div class=text-xxs>'
  ),
  le = v(
    '<div class="w-48 rounded-lg bg-layer4 px-2 flex-3 py-7 lg:!px-10"><div class="mb-3 text-center font-semibold text-xs"></div><div class="flex justify-around">'
  );
function w(e) {
  return (() => {
    var i = re(),
      c = i.firstChild,
      u = c.nextSibling;
    return t(c, () => X(e.value)), t(u, () => e.name), i;
  })();
}
function ne() {
  const { contest: e, refetch: i } = R,
    c = E(() => e.endTime.getTime());
  return (() => {
    var u = le(),
      a = u.firstChild,
      l = a.nextSibling;
    return (
      t(a, () => s("Time Remaining")),
      t(
        l,
        r($, {
          get when() {
            return c();
          },
          keyed: !0,
          get fallback() {
            return (
              K(() => e.endTime.getTime() > 0 && i()),
              [
                r(w, {
                  get name() {
                    return s("Hours");
                  },
                  value: 0,
                }),
                r(w, {
                  get name() {
                    return s("Minutes");
                  },
                  value: 0,
                }),
                r(w, {
                  get name() {
                    return s("Seconds");
                  },
                  value: 0,
                }),
              ]
            );
          },
          children: (n) => [
            r($, {
              get when() {
                return n.days > 0;
              },
              get children() {
                return r(w, {
                  name: "DAYS",
                  get value() {
                    return n.days;
                  },
                });
              },
            }),
            r(w, {
              get name() {
                return s("Hour");
              },
              get value() {
                return n.hours;
              },
            }),
            r(w, {
              get name() {
                return s("Minute");
              },
              get value() {
                return n.minutes;
              },
            }),
            r($, {
              get when() {
                return n.days <= 0;
              },
              get children() {
                return r(w, {
                  get name() {
                    return s("Second");
                  },
                  get value() {
                    return n.seconds;
                  },
                });
              },
            }),
          ],
        })
      ),
      u
    );
  })();
}
var ie = v(
    '<div class="flex rounded-lg p-4 overflow-hidden flex-5 basis-full bg-gradient-to-r from-success/20 to-layer4 lg:basis-0"><img class=w-28><div class=ml-6><div class="flex text-base font-extrabold text-brand"><img class=w-6><span></span><img class="w-6 -scale-x-100"></div><div class=my-1></div><div class="w-48 rounded-xl px-3 text-2xl font-extrabold overflow-hidden text-nowrap bg-layer3 py-2 text-brand">'
  ),
  F = v('<span class="mx-1 text-primary">__wager_number__'),
  z = v(
    '<span class="mx-1 rounded-md font-semibold bg-[#FFBCD8]/40 px-1.5 text-[#FFBCD8]">__top__'
  ),
  N = v("<div class=text-xs>"),
  ae = v(
    '<div class="rounded-lg bg-layer4 p-4 divide-y"><div class=flex><img class="mr-2 h-10 w-10 rounded-full"><div><div class="font-extrabold text-primary"></div></div></div><div class="mt-4 flex divide-x border-white_alpha10 pt-4"><div class="flex-1 flex-col center"><div></div><div class="text-base font-extrabold mt-1 text-brand"></div></div><div class="flex-1 flex-col center ml-4 border-white_alpha10 pl-4"><div></div><div class="text-base font-extrabold mt-1 text-brand">'
  ),
  se = v(
    '<div class="flex bg-layer4 p-4 rounded-lg"><div class="flex-1 center justify-start"><img class="mr-2 h-10 w-10 rounded-full"><div class="font-extrabold text-primary"></div></div><div class="flex-1 border-solid border-l border-white_alpha10"><div class="flex-1 flex-col center"><div></div><div class="text-base font-extrabold mt-1 text-brand"></div></div></div><div class="flex-1 flex-col border-solid center border-l border-white_alpha10"><div></div><div class="text-base font-extrabold mt-1 text-brand"></div></div><div class="flex-1 flex-col border-solid center border-l border-white_alpha10">'
  ),
  de = v('<div class="relative rounded-lg bg-layer4 flex-3 py-5">'),
  oe = v(
    '<div class="absolute left-0 top-0 font-extrabold text-primary_brand w-18"><img class="absolute w-16 -left-0.5 -top-0.5"><div class="w-full text-center translate-x-[-22%] translate-y-1/2 rotate-[-42deg]">Winner'
  ),
  ce = v('<div class="mb-4 center"><img class="mr-1 w-5"><div class="">'),
  ue = v(
    '<div class="ml-5 flex lg:justify-center"><div class="relative mr-2 mt-3"><img class="absolute -top-3 left-1 w-8"><img class="h-10 w-10 rounded-full"></div><div class=text-xs><div class=text-primary></div><div class=profit-name></div><div class=profit><span class=text-brand></span><span class="text-primary ml-1">(<!>)'
  ),
  ge = v('<div><div class="flex flex-wrap gap-3">'),
  me = v('<div class="text-lg font-extrabold text-primary mt-4">');
function j(e) {
  return e == 0 || e > 50 ? "50th+" : te(e);
}
function ve() {
  const { contest: e } = R,
    i = q(
      J(() => e.prizeAmount),
      { duration: 500 }
    );
  return (() => {
    var c = ie(),
      u = c.firstChild,
      a = u.nextSibling,
      l = a.firstChild,
      n = l.firstChild,
      g = n.nextSibling,
      m = g.nextSibling,
      x = l.nextSibling,
      o = x.nextSibling;
    return (
      t(g, () => s("Daily Contest")),
      t(x, () => s("Contest prize pool")),
      t(o, () => W.printCurrency(new D(i()), e.wagerCurrency)),
      y(
        (d) => {
          var _ = C.trophy,
            f = C.grass,
            b = C.grass;
          return (
            _ !== d.e && p(u, "src", (d.e = _)),
            f !== d.t && p(n, "src", (d.t = f)),
            b !== d.a && p(m, "src", (d.a = b)),
            d
          );
        },
        { e: void 0, t: void 0, a: void 0 }
      ),
      c
    );
  })();
}
function xe() {
  const { contest: e } = R,
    i = () => {
      let a = 1;
      return (
        e.rank == 0
          ? (a = e.userBonusRate.length)
          : e.rank == 1
          ? (a = 1)
          : e.rank <= e.userBonusRate.length
          ? (a = e.rank - 1)
          : (a = e.userBonusRate.length),
        a
      );
    },
    c = () => {
      let a = 0,
        l = null;
      return (
        e.activeList.length > i() - 1 && (l = e.activeList[i() - 1]),
        l && (a = l.wager - e.wager),
        W.printCurrency(new D(a), e.wagerCurrency)
      );
    };
  return H.mobile
    ? (() => {
        var a = ae(),
          l = a.firstChild,
          n = l.firstChild,
          g = n.nextSibling,
          m = g.firstChild,
          x = l.nextSibling,
          o = x.firstChild,
          d = o.firstChild,
          _ = d.nextSibling,
          f = o.nextSibling,
          b = f.firstChild,
          S = b.nextSibling;
        return (
          t(m, () => k.name),
          t(
            g,
            r($, {
              get when() {
                return e.rank != 1;
              },
              get children() {
                var h = N();
                return (
                  t(
                    h,
                    r(M, {
                      i18nKey: "platform.trans.mainpage.wager.desc",
                      get wager_number() {
                        return c();
                      },
                      get top() {
                        return `${s("Top")} ${i()}`;
                      },
                      get children() {
                        return ["Wager", F(), "To reach", z()];
                      },
                    })
                  ),
                  h
                );
              },
            }),
            null
          ),
          t(d, () => s("My Position")),
          t(_, () => j(e.rank)),
          t(b, () => s("Wagered")),
          t(S, () => W.printCurrency(new D(e.wager), e.wagerCurrency)),
          y(() => p(n, "src", B.avatar(k.userId))),
          a
        );
      })()
    : (() => {
        var a = se(),
          l = a.firstChild,
          n = l.firstChild,
          g = n.nextSibling,
          m = l.nextSibling,
          x = m.firstChild,
          o = x.firstChild,
          d = o.nextSibling,
          _ = m.nextSibling,
          f = _.firstChild,
          b = f.nextSibling,
          S = _.nextSibling;
        return (
          t(g, () => k.name),
          t(o, () => s("My Position")),
          t(d, () => j(e.rank)),
          t(f, () => s("Wagered")),
          t(b, () => W.printCurrency(new D(e.wager), e.wagerCurrency)),
          t(
            S,
            r($, {
              get when() {
                return e.rank != 1;
              },
              get children() {
                var h = N();
                return (
                  t(
                    h,
                    r(M, {
                      i18nKey: "platform.trans.mainpage.wager.desc",
                      get wager_number() {
                        return c();
                      },
                      get top() {
                        return `${s("Top")} ${i()}`;
                      },
                      get children() {
                        return ["Wager", F(), "To reach", z()];
                      },
                    })
                  ),
                  h
                );
              },
            })
          ),
          y(() => p(n, "src", B.avatar(k.userId))),
          a
        );
      })();
}
function fe() {
  const { contest: e } = R,
    i = O();
  return (() => {
    var c = de();
    return (
      t(
        c,
        r($, {
          get when() {
            return e.prevList[0];
          },
          children: (u) => {
            const a = Q(() => new D(u().totalBonus));
            return [
              (() => {
                var l = oe(),
                  n = l.firstChild;
                return y(() => p(n, "src", C.winner)), l;
              })(),
              r(U, {
                class:
                  "absolute w-6 cursor-pointer right-2.5 top-2.5 text-brand",
                onClick: () => {
                  i("/contest/rules");
                },
                name: "Help",
              }),
              (() => {
                var l = ce(),
                  n = l.firstChild,
                  g = n.nextSibling;
                return (
                  t(g, () => s("Last Champion")),
                  y(() => p(n, "src", C.crown)),
                  l
                );
              })(),
              (() => {
                var l = ue(),
                  n = l.firstChild,
                  g = n.firstChild,
                  m = g.nextSibling,
                  x = n.nextSibling,
                  o = x.firstChild,
                  d = o.nextSibling,
                  _ = d.nextSibling,
                  f = _.firstChild,
                  b = f.nextSibling,
                  S = b.firstChild,
                  h = S.nextSibling;
                return (
                  h.nextSibling,
                  t(o, () => B.userName(u().player)),
                  t(d, () => s("Profit")),
                  t(f, () => W.printCurrency(a(), e.wagerCurrency)),
                  t(b, () => ee(e.userBonusRate[0]), h),
                  y(
                    (T) => {
                      var P = C.crown,
                        L = B.avatar(u().userId);
                      return (
                        P !== T.e && p(g, "src", (T.e = P)),
                        L !== T.t && p(m, "src", (T.t = L)),
                        T
                      );
                    },
                    { e: void 0, t: void 0 }
                  ),
                  l
                );
              })(),
            ];
          },
        })
      ),
      c
    );
  })();
}
function be(e) {
  const { contest: i } = R,
    [c, u] = I(0),
    [a, l] = I(0),
    [n, g] = I(0);
  return (() => {
    var m = ge(),
      x = m.firstChild;
    return (
      t(x, r(ve, {}), null),
      t(x, r(ne, {}), null),
      t(x, r(fe, {}), null),
      t(
        m,
        r($, {
          get when() {
            return k.login;
          },
          get children() {
            return r(xe, {});
          },
        }),
        null
      ),
      t(
        m,
        r(Y, {
          options: {
            slides: { spacing: 8 },
            created(o) {
              setTimeout(() => {
                l(o.container.scrollWidth), g(o.container.clientWidth);
              }, 32);
            },
            detailsChanged(o) {
              const d = o.track.details;
              d && u(d.progress);
            },
          },
          get children() {
            return [
              r(A, {
                get startTime() {
                  return i.startTime;
                },
                get endTime() {
                  return i.endTime;
                },
                get list() {
                  return i.activeList;
                },
                isActive: !0,
              }),
              r(A, {
                get startTime() {
                  return i.prevStartTime;
                },
                get endTime() {
                  return i.prevEndTime;
                },
                get list() {
                  return i.prevList;
                },
              }),
            ];
          },
        }),
        null
      ),
      y(() => G(m, V("text-secondary flex flex-col gap-3", e.class))),
      m
    );
  })();
}
const _e = "/promotions/daily-contest";
function we() {
  const e = location.pathname;
  return r(Z, {
    get title() {
      return s("Daily Contest");
    },
    get children() {
      return [
        r($, {
          get when() {
            return !H.mobile && _e === e;
          },
          get children() {
            var i = me();
            return t(i, () => s("Daily Contest")), i;
          },
        }),
        r(be, { class: "my-4" }),
      ];
    },
  });
}
export { we as ContestPage, be as default };
