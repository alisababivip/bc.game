import {
  a7 as I,
  be as E,
  c as i,
  i as a,
  af as P,
  A as U,
  W as q,
  h as _,
  a9 as B,
  f as o,
  $ as H,
  g as j,
  bf as J,
  bg as y,
  u as L,
  o as k,
  b as F,
  t as g,
  x as N,
  bh as G,
  l as w,
  s as x,
  r as p,
  p as f,
  q as S,
  D as C,
  e as M,
  m as T,
} from "./index-Cp-3lvCI.js";
import { b as W, g as z } from "./index-CY1NqIcz.js";
import "./_basePropertyOf-BhSQSS-6.js";
const K = { blackJack: W };
var O = o('<div class="h-96 center">'),
  Q = o("<td>"),
  V = o(
    '<div class="relative overflow-hidden px-2 text-secondary"><table class="table border-separate border-spacing-x-1 border-spacing-y-6"><tbody><tr><td class="w-[30%] sm:w-auto"></td><td></td><td class="w-20 sm:w-auto"></td><td>'
  ),
  X = o('<img class="mr-1 inline-block w-5">'),
  Y = o("<span class=ellipsis>"),
  Z = o(
    '<td><div class=center><span class="overflow-hidden text-primary text-nowrap"></span><img class="h-5 flex-none ml-1">'
  ),
  ee = o(
    '<tr><td class="w-[30%] sm:w-auto"></td><td class="text-primary ellipsis"></td><td class="w-20 sm:w-auto">x</td><td><div class="flex items-center justify-end"><span class="overflow-hidden text-nowrap"></span><img class="h-5 flex-none ml-1">'
  ),
  te = o("<span class=text-second>");
const A = 10,
  [ae, R] = I({ lastBet: [], highRoller: [] }),
  re = E(() => {
    const [e] = H(async () => {
      const r = await j().get("/game/support/home/v2/high-rollers/");
      return R("highRoller", r.map((l) => l).slice(-A)), !0;
    });
    return e;
  });
function ne(e) {
  const r = J.gameSockets.find((n) => n.socketDesc === e.socketDesc),
    { socketEvent: l, socketNameSpace: d } = { ...e, ...r },
    s = y(d),
    c = y().decodeBind((n) => {
      n.payout !== void 0 && (n.multiplier = n.payout),
        R(e.socketDesc, (u) => [n, ...u].slice(0, A));
    }, "json"),
    m = L();
  k(() => {
    s.disconnect();
  }),
    F(() => {
      m() &&
        (s.on(l, c),
        s.connect(),
        k(() => {
          s.off(l, c);
        }));
    });
}
function de(e) {
  return i(q, {
    get fallback() {
      return (() => {
        var r = O();
        return a(r, i(P, {})), r;
      })();
    },
    get children() {
      return i(U, {
        get children() {
          return i(le, {
            get type() {
              return e.type;
            },
          });
        },
      });
    },
  });
}
function le(e) {
  ne({
    gameChannel: "1",
    socketDesc: e.type,
    socketEvent:
      e.type === "highRoller" ? "home-high-roller" : "home-game-throw",
    socketNameSpace: "home",
  });
  function r() {
    return (() => {
      var l = V(),
        d = l.firstChild,
        s = d.firstChild,
        c = s.firstChild,
        m = c.firstChild,
        n = m.nextSibling,
        u = n.nextSibling,
        $ = u.nextSibling;
      return (
        d.style.setProperty("overflow-anchor", "none"),
        a(m, () => g("Game")),
        a(n, () => g("Player")),
        a(
          c,
          i(_, {
            get when() {
              return !N.mobile;
            },
            get children() {
              var v = Q();
              return a(v, () => g("Bet Amount")), v;
            },
          }),
          u
        ),
        a(u, () => g("Multiplier")),
        a($, () => g("Profit Amount")),
        a(
          s,
          i(G, {
            get each() {
              return ae[e.type];
            },
            component: se,
          }),
          null
        ),
        l
      );
    })();
  }
  return e.type === "highRoller"
    ? i(_, {
        get when() {
          return re()();
        },
        get children() {
          return r();
        },
      })
    : r();
}
function se(e) {
  let r = "";
  return (() => {
    var l = ee(),
      d = l.firstChild,
      s = d.nextSibling,
      c = s.nextSibling,
      m = c.firstChild,
      n = c.nextSibling,
      u = n.firstChild,
      $ = u.firstChild,
      v = $.nextSibling;
    return (
      a(
        d,
        i(p, {
          get href() {
            return `/game-detail/${e.data.distributeId}`;
          },
          class: "flex items-center ellipsi hover:underline",
          get children() {
            return [
              (() => {
                var t = X();
                return (
                  w(() =>
                    x(
                      t,
                      "src",
                      (r = z(e.data.gameUnique)) === "Default" ? K.blackJack : r
                    )
                  ),
                  t
                );
              })(),
              (() => {
                var t = Y();
                return a(t, () => e.data.fullName || e.data.gameUnique), t;
              })(),
            ];
          },
        })
      ),
      (s.$$click = (t) => t.stopPropagation()),
      a(
        s,
        i(_, {
          get when() {
            return e.data.userName !== f.User.hiddenName;
          },
          get fallback() {
            return (() => {
              var t = te();
              return a(t, () => f.userName(e.data.userName)), t;
            })();
          },
          get children() {
            return i(p, {
              class: "hover:underline",
              get href() {
                return `/user/profile/${e.data.userId}`;
              },
              get children() {
                return f.userName(e.data.userName);
              },
            });
          },
        })
      ),
      a(
        l,
        i(_, {
          get when() {
            return !N.mobile;
          },
          get children() {
            var t = Z(),
              b = t.firstChild,
              h = b.firstChild,
              D = h.nextSibling;
            return (
              a(h, () =>
                S.printCurrency(
                  new C(e.data.throwAmount),
                  e.data.currencyName,
                  5
                )
              ),
              w(() => x(D, "src", f.coinIcon(e.data.currencyName))),
              t
            );
          },
        }),
        c
      ),
      a(c, () => Number(e.data.multiplier / 100).toFixed(2), m),
      a($, () =>
        S.printCurrency(new C(e.data.profitAmount), e.data.currencyName, 5)
      ),
      w(
        (t) => {
          var b = M(
              "w-30",
              Number(e.data.multiplier / 100) < 1
                ? "text-error"
                : "text-success"
            ),
            h = f.coinIcon(e.data.currencyName);
          return (
            b !== t.e && T(n, (t.e = b)), h !== t.t && x(v, "src", (t.t = h)), t
          );
        },
        { e: void 0, t: void 0 }
      ),
      l
    );
  })();
}
B(["click"]);
export { de as default };
