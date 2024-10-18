import {
  $ as R,
  aS as L,
  a3 as U,
  bb as N,
  c as a,
  t as s,
  W as O,
  i as t,
  af as j,
  a5 as F,
  f as c,
  V as H,
  x as B,
  h as x,
  w as M,
  a9 as P,
  p as J,
  F as V,
  aY as Q,
  s as T,
  l as W,
  m as X,
  e as Y,
  Q as q,
  q as b,
  D as f,
} from "./index-Cp-3lvCI.js";
import { S as p } from "./index-CPRFYrHB.js";
var Z = c(
    '<div class="absolute flex h-5 items-center rounded-xl right-1.5 top-1.5 bg-black_alpha20 px-1.5 backdrop-blur-lg"><img class="mr-1 w-3"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg=="><span class="font-semibold text-xs">'
  ),
  ee = c(
    '<div class="h-full w-full rounded-lg bg-layer4 p-2"><div class=relative><img class="min-h-52 w-full rounded-lg bg-layer2 h-auto"alt=""><div class="absolute rounded-lg left-1.5 top-1.5 bg-black_alpha20 px-1 py-0.5"></div></div><div class="mt-2 flex justify-between"><div class=text-secondary></div><div class="font-extrabold text-brand"></div></div><div class="flex justify-between mt-1"><div class=text-secondary></div><div class=font-extrabold></div></div><div class="flex justify-between mt-1"><div class=text-secondary></div><div class=font-extrabold>'
  ),
  te = c("<span>:<!>:"),
  ae = c('<div class="h-full rounded-lg bg-layer5 mb-5">'),
  ne = c("<div class=pb-5>"),
  re = c('<div class="center h-[90vh] flex-auto">');
function le(e) {
  return e >= 1e9
    ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
    : e >= 1e6
    ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
    : e >= 1e3
    ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
    : e.toString();
}
function se(e) {
  const l = J.img2(e.data.thumbnail);
  e.data.nextGameStart / 1e3 < 60;
  const n = V(),
    m = Q(() => Number(e.data.nextGameStart));
  return (() => {
    var d = ee(),
      u = d.firstChild,
      h = u.firstChild,
      G = h.nextSibling,
      A = u.nextSibling,
      _ = A.firstChild,
      E = _.nextSibling,
      $ = A.nextSibling,
      y = $.firstChild,
      D = y.nextSibling,
      z = $.nextSibling,
      w = z.firstChild,
      I = w.nextSibling;
    return (
      (u.$$click = () => {
        n(`/game/${e.data?.gameUnique}`);
      }),
      T(h, "src", l),
      t(
        G,
        a(x, {
          get when() {
            return m();
          },
          keyed: !0,
          get fallback() {
            return "00:00:00";
          },
          children: (r) => {
            const g = () => r.days * 24 + r.hours,
              v = () => (g() < 10 ? "0" + g() : g()),
              k = () => (r.minutes < 10 ? "0" + r.minutes : r.minutes),
              K = () => (r.seconds < 10 ? "0" + r.seconds : r.seconds);
            return (() => {
              var i = te(),
                S = i.firstChild,
                C = S.nextSibling;
              return (
                C.nextSibling,
                t(i, v, S),
                t(i, k, C),
                t(i, K, null),
                W(() =>
                  X(i, Y(Number(k()) < 1 && "font-extrabold text-[#FFDE45]"))
                ),
                i
              );
            })();
          },
        })
      ),
      t(
        u,
        a(x, {
          get when() {
            return e.data.playersInRoom > 0;
          },
          get children() {
            var r = Z(),
              g = r.firstChild,
              v = g.nextSibling;
            return t(v, () => le(e.data.playersInRoom)), r;
          },
        }),
        null
      ),
      t(_, () => s("Jackpot")),
      t(
        E,
        (() => {
          var r = q(() => !!e.data.jackpots);
          return () => (r() ? b.printCurrency(new f(e.data.jackpots)) : "-");
        })()
      ),
      t(y, () => s("Game Prize")),
      t(D, () => b.printCurrency(new f(e.data.gamePrize))),
      t(w, () => s("Ticket Cost")),
      t(I, () => b.printCurrency(new f(e.data.cardCost))),
      d
    );
  })();
}
const o = (e) => [
    a(p, {
      get title() {
        return e.title;
      },
      get href() {
        return e.link;
      },
    }),
    a(H, {
      get data() {
        return e.data;
      },
    }),
  ],
  ie = Array(2);
function ce() {
  return ae();
}
function ge(e) {
  return a(M, {
    get data() {
      return e.list ?? ie;
    },
    rows: 1,
    scrollPadding: 16,
    gap: 8,
    class: "-mx-4 mb-5",
    get width() {
      return B.mobile ? 160 : 220;
    },
    get height() {
      return B.mobile ? 200 : 310;
    },
    children: (l) =>
      a(x, {
        get when() {
          return l();
        },
        get fallback() {
          return a(ce, {});
        },
        get children() {
          return a(se, {
            get data() {
              return l();
            },
          });
        },
      }),
  });
}
function ue() {
  const [e] = R(async () => {
      const [n, m, d] = await Promise.all([
        L({ sectionId: "casino_new", tag: "Bingo New Release" }),
        U([
          { sectionId: "casino_tag", tag: "Buy extra ball feature" },
          { sectionId: "casino_tag", tag: "Bingo jackpot" },
          { sectionId: "casino_tag", tag: "Bingo" },
          { sectionId: "casino_tag", tag: "Scratch cards" },
          { sectionId: "casino_tag", tag: "Keno" },
        ]),
        N(),
      ]);
      return { recommends: m.concat(n), onlineGames: d };
    }),
    l = (n) => e()?.recommends[n];
  return a(F, {
    get title() {
      return s("Bingo");
    },
    get children() {
      return a(O, {
        get fallback() {
          return (() => {
            var n = re();
            return t(n, a(j, { class: "h-14 w-14 text-brand" })), n;
          })();
        },
        get children() {
          var n = ne();
          return (
            t(
              n,
              a(p, {
                get title() {
                  return s("Play Online Bingo");
                },
              }),
              null
            ),
            t(
              n,
              a(ge, {
                get list() {
                  return e()?.onlineGames;
                },
              }),
              null
            ),
            t(
              n,
              a(o, {
                link: "/tagname/buy-extrabal-feature",
                get title() {
                  return s("Buy Extra Ball Feature");
                },
                get data() {
                  return l(0);
                },
              }),
              null
            ),
            t(
              n,
              a(o, {
                get data() {
                  return l(1);
                },
                link: "/tagname/jackpot",
                get title() {
                  return s("Jackpot");
                },
              }),
              null
            ),
            t(
              n,
              a(o, {
                get data() {
                  return l(2);
                },
                link: "/tagname/bingo",
                get title() {
                  return s("All Bingo Games");
                },
              }),
              null
            ),
            t(
              n,
              a(o, {
                get data() {
                  return l(3);
                },
                link: "/tagname/scratch-cards",
                get title() {
                  return s("Scratch Cards");
                },
              }),
              null
            ),
            t(
              n,
              a(o, {
                get data() {
                  return l(4);
                },
                link: "/tagname/keno",
                get title() {
                  return s("Keno");
                },
              }),
              null
            ),
            n
          );
        },
      });
    },
  });
}
P(["click"]);
export { ge as BingoList, ue as default };
