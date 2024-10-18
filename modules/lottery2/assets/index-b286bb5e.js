var de = Object.defineProperty,
  ue = Object.defineProperties;
var me = Object.getOwnPropertyDescriptors;
var Q = Object.getOwnPropertySymbols;
var be = Object.prototype.hasOwnProperty,
  ge = Object.prototype.propertyIsEnumerable;
var Y = (t, l, n) =>
    l in t
      ? de(t, l, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[l] = n),
  F = (t, l) => {
    for (var n in l || (l = {})) be.call(l, n) && Y(t, n, l[n]);
    if (Q) for (var n of Q(l)) ge.call(l, n) && Y(t, n, l[n]);
    return t;
  },
  R = (t, l) => ue(t, me(l));
var W = (t, l, n) =>
  new Promise((i, o) => {
    var a = (g) => {
        try {
          x(n.next(g));
        } catch (h) {
          o(h);
        }
      },
      $ = (g) => {
        try {
          x(n.throw(g));
        } catch (h) {
          o(h);
        }
      },
      x = (g) => (g.done ? i(g.value) : Promise.resolve(g.value).then(a, $));
    x((n = n.apply(t, l)).next());
  });
import {
  b as L,
  e as N,
  i as e,
  c as r,
  t as y,
  a as C,
  h as P,
  m as M,
  k as B,
  n as q,
  g as G,
  S as D,
  F as V,
  f as xe,
  d as fe,
} from "./solid-js-8ff414d5.js";
import {
  B as k,
  N as he,
  e as S,
  l as H,
  m as X,
  o as _e,
  b as U,
  d as z,
  u as te,
  L as J,
  s as K,
  g as E,
  t as $e,
  P as le,
  E as pe,
  S as ye,
  T as O,
} from "./manifest-987d6c36.js";
import { t as b } from "./i18n-9df4b53a.js";
import { u as ve } from "./usePickNums-c32edd0e.js";
import { b as we } from "./router-290e090e.js";
import { p as ke } from "./store-de20ba30.js";
import { u as re, w as ne } from "./warning-2b742604.js";
import { U as se } from "./UserInfo-66f81f79.js";
import { A as ie } from "./AwardBall-40040934.js";
import { u as Ce } from "./currency-1e153f43.js";
import { I } from "./LocalIcon-84e2288f.js";
import { b as Se, j as Pe } from "./ball-lose-white-4200dda1.js";
import { t as ae } from "./total-tickets-8b01aef3.js";
import { w as oe } from "./winner-tickets-4d09dec4.js";
import "./store-2ed2b91e.js";
import "./lottery-40ce25b9.js";
import "./_Uint8Array-7783c8b7.js";
import "./_MapCache-9c96b8d5.js";
import "./isObject-909534d5.js";
var Ie = y(
  '<div class=bc-lottery><div class="flex items-center justify-between mb-2"><div class="text-secondary font-semibold text-sm"></div><div class="text-primary font-semibold text-sm">1 <!> = $0.1 </div></div><section class="flex flex-col sm:flex-row gap-2"><div class="flex items-center cursor-pointer h-10 rounded py-0.5 px-1 w-full bg-input_bright"></div><div class="flex gap-2">'
);
function Ne(t) {
  const [l, n] = L(5),
    i = (a) => {
      a > 0 && a <= 1e3 && n(Math.ceil(a));
    },
    o = N(() =>
      (() => {
        var a = Ie(),
          $ = a.firstChild,
          x = $.firstChild,
          g = x.nextSibling,
          h = g.firstChild,
          u = h.nextSibling;
        u.nextSibling;
        var _ = $.nextSibling,
          s = _.firstChild,
          c = s.nextSibling;
        return (
          e(x, () => b("Numbers of Ticket")),
          e(g, () => b("Ticket"), u),
          e(
            s,
            r(k, {
              class: "rounded-lg bg-black_alpha5 w-8 h-8",
              get disabled() {
                return l() <= 1;
              },
              onClick: () => l() > 1 && n(l() - 1),
              children: "-",
            }),
            null
          ),
          e(
            s,
            r(he, {
              class:
                "flex-1 w-full h-full min-w-4 p-0 border-0 text-center px-2 text-primary text-base font-extrabold [&>input]:text-center bg-input_bright",
              get value() {
                return l();
              },
              onChange: i,
            }),
            null
          ),
          e(
            s,
            r(k, {
              class: "rounded-lg bg-black_alpha5 w-8 h-8",
              onClick: () => n(l() + 1),
              children: "+",
            }),
            null
          ),
          e(
            c,
            r(k, {
              class:
                "rounded-lg w-1/3 h-8 sm:w-24 sm:h-10 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold",
              onClick: () => n(20),
              children: "20",
            }),
            null
          ),
          e(
            c,
            r(k, {
              class:
                "rounded-lg w-1/3 h-8 sm:w-24 sm:h-10 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold",
              onClick: () => n(50),
              children: "50",
            }),
            null
          ),
          e(
            c,
            r(k, {
              class:
                "rounded-lg w-1/3 h-8 sm:w-24 sm:h-10 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold",
              onClick: () => n(100),
              children: "100",
            }),
            null
          ),
          a
        );
      })()
    );
  return { num: l, view: o };
}
const Be = "/modules/lottery2/assets/send-ticket-bg-e1e216f5.png",
  Te = "/modules/lottery2/assets/send-ticket-bg-white-4b4c57cc.png";
var je = y(
    '<div class="text-center p-3 mb-3 bg-warning/10 rounded-xl flex"><img class="w-6 h-6"loading=lazy><section class=ml-2><h3 class="text-secondary text-sm font-semibold text-left"></h3><p class="text-secondary text-sm font-semibold">'
  ),
  Le = y('<img class="w-3 h-3"loading=lazy>'),
  De = y(
    '<div><div class="ticket-info flex justify-between items-center"><section class="flex flex-col"><h1 class="text-sm font-semibold text-secondary"></h1><h2 class="text-sm font-extrabold text-primary flex items-center gap-1"></h2></section><section class="flex items-center">'
  ),
  ze = y("<label>--"),
  Ae = y(
    '<div class="text-center p-3 mt-4 rounded-xl flex"><img class="w-6 h-6"loading=lazy><section class=ml-2><h3 class="text-secondary text-sm font-semibold text-left"></h3><p class="text-secondary text-sm font-semibold">'
  ),
  We = y(
    '<div class="ticket-info-box bg-layer4 p-3 mb-2 rounded-xl"><section class="text-lg text-primary font-extrabold border-b border-solid border-input pb-3 pt-2"></section><section class="flex justify-between mt-4"><label class="text-secondary text-sm font-semibold"> </label><span class="text-primary text-sm font-extrabold">$0.1 X </span></section><section class="flex justify-between mt-4"><label class="text-sm font-semibold text-secondary"></label><span class="text-sm font-extrabold text-primary flex items-center gap-1"><img class="w-3 h-3"src=/coin/USD.rect.png loading=lazy></span></section><section class="flex justify-end text-secondary text-sm font-semibold">≈ </section><section class="flex items-center w-full mt-2">'
  );
const Z = function (l) {
    return r(C, {
      get when() {
        return S.mobile;
      },
      get fallback() {
        return r(Me, {
          get ticketNum() {
            return l.ticketNum;
          },
          get onSubmit() {
            return l.onSubmit;
          },
        });
      },
      get children() {
        return r(Oe, l);
      },
    });
  },
  Oe = (t) => {
    const { store: l } = re();
    return (() => {
      var n = De(),
        i = n.firstChild,
        o = i.firstChild,
        a = o.firstChild,
        $ = a.nextSibling,
        x = o.nextSibling;
      return (
        e(
          n,
          r(C, {
            get when() {
              return !l.canBuyTicket;
            },
            get children() {
              var g = je(),
                h = g.firstChild,
                u = h.nextSibling,
                _ = u.firstChild,
                s = _.nextSibling;
              return (
                P(h, "src", ne),
                e(_, () => b("Wait for next round")),
                e(s, () => b("The next round will start in a few minutes.")),
                g
              );
            },
          }),
          i
        ),
        e(a, () => b("Total Bet Amount")),
        e(
          $,
          r(C, {
            get when() {
              return t.ticketNum;
            },
            get fallback() {
              return ze();
            },
            get children() {
              return [
                M(() => H.printCurrency(new X(t.ticketNum / 10))),
                (() => {
                  var g = Le();
                  return (
                    B(() => P(g, "src", _e.coinIcon(U.setting.currencyName))), g
                  );
                })(),
              ];
            },
          })
        ),
        e(
          x,
          r(k, {
            type: "brand",
            class: "rounded-xl",
            get disabled() {
              return !l.canBuyTicket;
            },
            get onClick() {
              return t.onSubmit;
            },
            get children() {
              return b("Add Bet");
            },
          })
        ),
        B(() =>
          q(
            n,
            z(
              "ticket-info-box bg-layer4 border-t border-solid border-input p-3",
              t.class
            )
          )
        ),
        n
      );
    })();
  },
  Me = (t) => {
    const { store: l } = re();
    return (() => {
      var n = We(),
        i = n.firstChild,
        o = i.nextSibling,
        a = o.firstChild,
        $ = a.firstChild,
        x = a.nextSibling;
      x.firstChild;
      var g = o.nextSibling,
        h = g.firstChild,
        u = h.nextSibling,
        _ = u.firstChild,
        s = g.nextSibling;
      s.firstChild;
      var c = s.nextSibling;
      return (
        e(i, () => b("__ENV_SITE__ Lottery Jackpot")),
        e(a, () => t.ticketNum, $),
        e(a, () => b("Tickets"), null),
        e(x, () => t.ticketNum, null),
        e(h, () => b("Total Bet Amount")),
        e(u, () => t.ticketNum / 10, _),
        e(s, () => H.printCurrency(new X(t.ticketNum / 10)), null),
        e(
          n,
          r(C, {
            get when() {
              return !l.canBuyTicket;
            },
            get children() {
              var d = Ae(),
                p = d.firstChild,
                f = p.nextSibling,
                m = f.firstChild,
                v = m.nextSibling;
              return (
                d.style.setProperty("background", "rgba(255, 152, 32, 0.10)"),
                P(p, "src", ne),
                e(m, () => b("Wait for next round")),
                e(v, () => b("The next round will start in a few minutes.")),
                d
              );
            },
          }),
          c
        ),
        e(
          c,
          r(k, {
            type: "brand",
            class: "rounded-xl w-full",
            get disabled() {
              return !l.canBuyTicket;
            },
            get onClick() {
              return t.onSubmit;
            },
            get children() {
              return b("Add Bet");
            },
          })
        ),
        n
      );
    })();
  };
var Ge = y(
  '<div class="flex flex-col gap-4 sm:flex-row"><section class="market-wrap p-4 bg-layer4 rounded-xl sm:flex-1"></section><section class="cart-list mb-40 sm:w-96"><div class="flex flex-col justify-center rounded p-4 relative h-[150px] bg-[length:100%_100%] bg-no-repeat"><div class="text-primary text-base font-extrabold"></div><div class="mt-2.5 text-secondary text-sm font-semibold"></div><div class="mt-4 flex items-center">'
);
const Je = () => {
    const t = we(),
      l = te(),
      n = () =>
        W(void 0, null, function* () {
          const _ = `/platform-lottery/lottery-detail/current?id=${t.id}`;
          return yield E().get(_);
        }),
      [i] = G(n),
      { view: o, num: a } = Ne(),
      { view: $, data: x, setRandom: g } = ve(a),
      h = () => {
        if (x().list) {
          let u = x().list.filter((c) => c.check && !c.error && c.jackpot);
          u.length ||
            (g(),
            (u = x().list.filter((c) => c.check && !c.error && c.jackpot)));
          const _ = u.map((c) => ({
            numbers: c.nums,
            jackpotBallNumber: c.jackpot,
            quantity: 1,
            pickType: 0,
          }));
          a() > _.length &&
            _.push({
              numbers: [],
              jackpotBallNumber: 0,
              quantity: a() - _.length,
              pickType: 1,
            });
          const s = {
            lotteryList: _,
            toCurrencyName: "BCL",
            period: i().period,
            ticketNum: a(),
          };
          ke.addBetBc(s), x().list[0].jackpot && $e(b("BetSlip Updated"));
        }
      };
    return [
      r(D, {
        get fallback() {
          return r(J, { class: "absolute left-1/2 top-1/2" });
        },
        get children() {
          var u = Ge(),
            _ = u.firstChild,
            s = _.nextSibling,
            c = s.firstChild,
            d = c.firstChild,
            p = d.nextSibling,
            f = p.nextSibling;
          return (
            e(_, o, null),
            e(_, $, null),
            e(
              s,
              r(C, {
                get when() {
                  return !S.mobile;
                },
                get children() {
                  return r(Z, {
                    get ticketNum() {
                      return a();
                    },
                    onSubmit: h,
                    setRandom: g,
                  });
                },
              }),
              c
            ),
            e(d, () => b("Send Lottery Ticket as Gift")),
            e(p, () => b("Invite your friends to win $100,000")),
            e(
              f,
              r(k, {
                class:
                  "p-2 text-primary text-sm font-extrabold bg-black_alpha5 rounded-md border border-solid border-third h-8",
                onClick: () => {
                  U.login ? l("/lottery/send_ticket") : l("/login/signin");
                },
                get children() {
                  return b("Send Ticket");
                },
              }),
              null
            ),
            e(
              f,
              r(k, {
                class:
                  "text-primary text-sm font-extrabold ml-3 bg-black_alpha5 rounded-md border border-solid border-third h-8",
                onClick: () => {
                  U.login ? l("/lottery/history_gift") : l("/login/signin");
                },
                get children() {
                  return b("View Gift History");
                },
              }),
              null
            ),
            B((m) =>
              (m = K.darken ? `url(${Be})` : `url(${Te})`) != null
                ? c.style.setProperty("background-image", m)
                : c.style.removeProperty("background-image")
            ),
            u
          );
        },
      }),
      r(C, {
        get when() {
          return S.mobile;
        },
        get children() {
          return r(Z, {
            class: "w-full fixed z-10 left-0 bottom-0",
            get ticketNum() {
              return a();
            },
            onSubmit: h,
            setRandom: g,
          });
        },
      }),
    ];
  },
  Ee = Je;
var Fe = y(
    '<div class="bg-layer4 rounded-xl mb-40"><table class=w-full><thead><tr class="table-tr text-secondary text-sm font-semibold border-b border-solid border-third"><th class="text-left py-4 pl-3 sm:pl-4 text-secondary text-xs font-semibold"></th><th class="text-center py-4 text-secondary text-xs font-semibold"></th><th class="text-center py-4 text-secondary text-xs font-semibold"></th><th class="text-right py-4 pr-2 text-secondary text-xs font-semibold"></th></tr></thead><tbody></tbody></table><div class="flex items-center justify-end">'
  ),
  Re = y('<div class="center h-[400px] w-full">'),
  Ue = y('<th class="text-center py-4 text-secondary text-xs font-semibold">'),
  qe = y(
    '<tr class="text-primary text-xs font-semibold border-b border-solid border-third"><td class="py-4 pl-3 sm:pl-4 text-primary text-sm font-semibold"></td><td class=py-4><div class=center></div></td><td class="py-4 text-center text-primary text-sm font-semibold"></td><td class="text-right py-4 pr-2 text-primary text-sm font-semibold">'
  ),
  Ve = y("<td>");
const He = () => {
    const t = (o) =>
        W(void 0, null, function* () {
          const a = "/lottery/five-plus-one/top-winners/";
          return yield E().post(a, { page: o, pageSize: 10 });
        }),
      [l, n] = L(1),
      [i] = G(l, t);
    return r(D, {
      get fallback() {
        return (() => {
          var o = Re();
          return e(o, r(J, { class: "text-green-400" })), o;
        })();
      },
      get children() {
        var o = Fe(),
          a = o.firstChild,
          $ = a.firstChild,
          x = $.firstChild,
          g = x.firstChild,
          h = g.nextSibling,
          u = h.nextSibling,
          _ = u.nextSibling,
          s = $.nextSibling,
          c = a.nextSibling;
        return (
          e(g, () => b("Game ID")),
          e(h, () => b("Top Winner")),
          e(
            x,
            (() => {
              var d = M(() => !S.mobile);
              return () =>
                d() &&
                (() => {
                  var p = Ue();
                  return e(p, () => b("Numbers")), p;
                })();
            })(),
            u
          ),
          e(u, () => b("Matches")),
          e(_, () => b("Prize")),
          e(
            s,
            r(V, {
              get each() {
                var d;
                return (d = i()) == null ? void 0 : d.list;
              },
              children: (d) =>
                (() => {
                  var p = qe(),
                    f = p.firstChild,
                    m = f.nextSibling,
                    v = m.firstChild,
                    w = m.nextSibling,
                    A = w.nextSibling;
                  return (
                    e(f, () => d.periodId),
                    e(
                      v,
                      r(se, {
                        get userId() {
                          return d.userId;
                        },
                        get name() {
                          return d.userName;
                        },
                      })
                    ),
                    e(
                      p,
                      (() => {
                        var T = M(() => !S.mobile);
                        return () =>
                          T() &&
                          (() => {
                            var j = Ve();
                            return e(j, r(ie, xe(d, { lastTicketId: 0 }))), j;
                          })();
                      })(),
                      w
                    ),
                    e(w, () =>
                      d.result === 5
                        ? d.result + d.matchJackpotBallNumber
                        : d.result
                    ),
                    e(A, () => H.printCurrency(new X(Number(d.rewardAmount)))),
                    p
                  );
                })(),
            })
          ),
          e(
            c,
            r(le, {
              class: "justify-end py-4 mr-4",
              get current() {
                return l();
              },
              onChange: (d) => {
                n(d);
              },
              get total() {
                var d;
                return ((d = i()) == null ? void 0 : d.total) || 0;
              },
              pageSize: 10,
            })
          ),
          o
        );
      },
    });
  },
  Xe = He;
var Ke = y(
    '<div class="jackpotNum w-10 h-10 center relative placeholder-layer3"><img class="ball-img w-10 h-10"loading=lazy><div class="absolute-center text-primary_brand text-base font-semibold z-10">'
  ),
  Qe = y(
    '<div><div class="jackpot-bg relative w-full inline-block align-top sm:flex sm:flex-col sm:items-center"><div class="center m-4"><label class="text-brand text-base font-extrabold"></label></div><div class="border-t border-dashed border-third sm:mb-4 sm:w-fit sm:border-t sm:border-solid"><div class="center gap-3 sm:border-b sm:border-dashed border-third p-2"><div class="bg-third h-10 w-[1px]">'
  ),
  Ye = y(
    '<div class="relative center"><img class="w-10 h-10"alt=""loading=lazy><label class="absolute-center text-primary_brand text-base font-semibold z-10">'
  );
const ce = function (l) {
    return (() => {
      var n = Qe(),
        i = n.firstChild,
        o = i.firstChild,
        a = o.firstChild,
        $ = o.nextSibling,
        x = $.firstChild,
        g = x.firstChild;
      return (
        e(
          o,
          r(I, {
            name: "Like",
            class: "fill-brand !w-3 !h-3",
            viewBox: "0 0 13 13",
          }),
          a
        ),
        e(a, () => b("Winner Numbers")),
        e(
          o,
          r(I, {
            name: "Like",
            class: "fill-brand !w-3 !h-3",
            viewBox: "0 0 13 13",
          }),
          null
        ),
        e(
          x,
          r(V, {
            get each() {
              return l.nums;
            },
            children: (h) =>
              (() => {
                var u = Ye(),
                  _ = u.firstChild,
                  s = _.nextSibling;
                return P(_, "src", Se), e(s, h), u;
              })(),
          }),
          g
        ),
        e(
          x,
          r(C, {
            get when() {
              return l.jackpotNum;
            },
            get children() {
              var h = Ke(),
                u = h.firstChild,
                _ = u.nextSibling;
              return P(u, "src", Pe), e(_, () => l.jackpotNum), h;
            },
          }),
          null
        ),
        B(() => q(n, z("mview", l.class))),
        n
      );
    })();
  },
  Ze = "/modules/lottery2/assets/bclottery_winners_result-1b5b87d1.png",
  et = "/modules/lottery2/assets/bclottery_winners_result_pc-e23bb5a1.png",
  tt = "/modules/lottery2/assets/bclottery_winners_result_white-44a5a165.png",
  lt =
    "/modules/lottery2/assets/bclottery_winners_result_pc_white-1770442f.png";
var rt = y('<span class="text-primary text-sm font-semibold">+<!> '),
  ee = y('<span class="text-primary text-sm font-semibold">'),
  nt = y('<th class="text-center py-2 font-semibold text-secondary text-xs">'),
  st = y(
    '<div class=table-box><div class="wrap rounded pt-4 "><div class=center><div class="text-primary text-base font-extrabold"></div></div><table class="w-full mt-4"><thead><tr class="text-xs font-semibold border-b border-solid border-input"><th class="text-left pl-3 sm:pl-4 py-2 font-semibold text-secondary text-xs sm:w-72"></th><th class="py-2 font-semibold text-secondary text-xs"></th><th class="text-right pr-2 py-2 font-semibold text-secondary text-xs"></th></tr></thead><tbody>'
  ),
  it = y('<td class="text-center py-2 font-semibold text-primary text-sm">'),
  at = y(
    '<tr class="border-b border-solid border-input"><td class="pl-3 sm:pl-4 py-2"></td><td class=py-2><div class="text-secondary font-semibold text-xs text-center mt-2">: <!> </div></td><td class="pr-2 py-2 text-right">'
  ),
  ot = y(
    '<section class="m-4 bg-[length:100%_100%]"><div class="mt-4 pt-4 text-center text-primary text-xs font-semibold">: </div><div class=info-left-cont></div><div class="flex flex-col items-center border-t border-dashed border-third py-4 mx-4"><div class="center gap-1"><img class="icon w-8 h-8"loading=lazy><div><label class="text-secondary text-sm font-semibold"></label>: <span class="text-primary text-sm font-extrabold"></span></div></div><div class="center gap-1 mt-2"><img class="icon w-8 h-8"loading=lazy><div><label class="text-secondary text-sm font-semibold"></label>: <span class="text-primary text-sm font-extrabold">'
  ),
  ct = y(
    '<section class="m-4 bg-[length:100%_100%] flex"><section class=w-1/2><div class="pt-4 text-center text-primary text-xs font-semibold">: </div><div class=info-left-cont></div></section><div class="flex flex-col items-center border-t border-dashed border-third py-4 mx-4 w-1/2 sm:mx-0 sm:justify-center sm:border-0"><div class="center gap-1"><img class="icon w-8 h-8"loading=lazy><div><label class="text-secondary text-sm font-semibold"></label>: <span class="text-primary text-sm font-extrabold"></span></div></div><div class="center gap-1 mt-2"><img class="icon w-8 h-8"loading=lazy><div><label class="text-secondary text-sm font-semibold"></label>: <span class="text-primary text-sm font-extrabold">'
  );
function dt(t) {
  const l = Ce(),
    n = b("Numbers of Ticket");
  if (t.item.rewardType === 1)
    return (() => {
      var i = rt(),
        o = i.firstChild,
        a = o.nextSibling;
      return a.nextSibling, e(i, () => t.quantity, a), e(i, n, null), i;
    })();
  {
    const i = Number(t.item.rewardAmount) || 0;
    return i > 0
      ? (() => {
          var o = ee();
          return e(o, () => l(t.item.rewardAmount)), o;
        })()
      : (() => {
          var o = ee();
          return e(o, () => Math.floor(i)), o;
        })();
  }
}
function ut(t) {
  return [
    r(C, {
      get when() {
        var l, n;
        return (
          t.curObj &&
          (t == null ? void 0 : t.winnersData) &&
          ((n = (l = t.winnersData) == null ? void 0 : l.winnersPageList) ==
          null
            ? void 0
            : n.total) > 0
        );
      },
      get children() {
        return [
          r(C, {
            get when() {
              return S.mobile;
            },
            get fallback() {
              return r(bt, t);
            },
            get children() {
              return r(mt, t);
            },
          }),
          (() => {
            var l = st(),
              n = l.firstChild,
              i = n.firstChild,
              o = i.firstChild,
              a = i.nextSibling,
              $ = a.firstChild,
              x = $.firstChild,
              g = x.firstChild,
              h = g.nextSibling,
              u = h.nextSibling,
              _ = $.nextSibling;
            return (
              e(
                i,
                r(I, {
                  name: "Like",
                  class: "!w-6 !h-6",
                  viewBox: "0 0 13 13",
                }),
                o
              ),
              e(o, () => b("Winners List")),
              e(
                i,
                r(I, {
                  name: "Like",
                  class: "!w-6 !h-6",
                  viewBox: "0 0 13 13",
                }),
                null
              ),
              e(g, () => b("Player")),
              e(h, () => b("Numbers")),
              e(
                x,
                r(C, {
                  get when() {
                    return !S.mobile;
                  },
                  get children() {
                    var s = nt();
                    return e(s, () => b("Matches")), s;
                  },
                }),
                u
              ),
              e(u, () => b("Profit")),
              e(
                _,
                r(V, {
                  get each() {
                    var s, c;
                    return (c =
                      (s = t.winnersData) == null
                        ? void 0
                        : s.winnersPageList) == null
                      ? void 0
                      : c.list;
                  },
                  children: (s, c) =>
                    (() => {
                      var d = at(),
                        p = d.firstChild,
                        f = p.nextSibling,
                        m = f.firstChild,
                        v = m.firstChild,
                        w = v.nextSibling;
                      w.nextSibling;
                      var A = f.nextSibling;
                      return (
                        e(
                          p,
                          r(se, {
                            get userId() {
                              return s.userId;
                            },
                            get name() {
                              return s.userName;
                            },
                          })
                        ),
                        e(f, r(ie, s), m),
                        e(m, () => b("Match"), v),
                        e(m, () => s.result, w),
                        e(
                          m,
                          (() => {
                            var T = M(() => !!s.matchJackpotBallNumber);
                            return () =>
                              T()
                                ? ` + ${s.matchJackpotBallNumber} ${b(
                                    "Jackpot ball"
                                  )}`
                                : "";
                          })(),
                          null
                        ),
                        e(
                          d,
                          r(C, {
                            get when() {
                              return !S.mobile;
                            },
                            get children() {
                              var T = it();
                              return (
                                e(T, () => {
                                  var j;
                                  return (
                                    ((j = s.matchNumbers) == null
                                      ? void 0
                                      : j.length) +
                                    (s.matchJackpotBallNumber ? 1 : 0)
                                  );
                                }),
                                T
                              );
                            },
                          }),
                          A
                        ),
                        e(
                          A,
                          r(dt, {
                            item: s,
                            get quantity() {
                              return s.result;
                            },
                          })
                        ),
                        d
                      );
                    })(),
                })
              ),
              e(
                l,
                r(le, {
                  class: "justify-end py-4 mr-4",
                  get current() {
                    return t.winnerPage[0]();
                  },
                  onChange: (s) => {
                    t.winnerPage[1](s);
                  },
                  get total() {
                    var s, c;
                    return (
                      ((c =
                        (s = t.winnersData) == null
                          ? void 0
                          : s.winnersPageList) == null
                        ? void 0
                        : c.total) || 0
                    );
                  },
                  pageSize: 10,
                }),
                null
              ),
              l
            );
          })(),
        ];
      },
    }),
    r(C, {
      get when() {
        var l, n;
        return (
          !(t != null && t.winnersData) ||
          !(
            (n = (l = t.winnersData) == null ? void 0 : l.winnersPageList) !=
              null && n.total
          )
        );
      },
      get children() {
        return r(pe, {});
      },
    }),
  ];
}
const mt = (t) =>
    (() => {
      var l = ot(),
        n = l.firstChild,
        i = n.firstChild,
        o = n.nextSibling,
        a = o.nextSibling,
        $ = a.firstChild,
        x = $.firstChild,
        g = x.nextSibling,
        h = g.firstChild,
        u = h.nextSibling,
        _ = u.nextSibling,
        s = $.nextSibling,
        c = s.firstChild,
        d = c.nextSibling,
        p = d.firstChild,
        f = p.nextSibling,
        m = f.nextSibling;
      return (
        e(n, () => b("Draw time"), i),
        e(n, () => new Date(t.curObj.drawnTime).toLocaleString("en"), null),
        e(
          o,
          r(ce, {
            get nums() {
              return t.curObj.numbers || [];
            },
            get jackpotNum() {
              return t.curObj.jackpotBallNumber;
            },
          })
        ),
        P(x, "src", ae),
        e(h, () => b("Total tickets sold this round")),
        e(_, () => {
          var v;
          return (v = t.winnersData) == null ? void 0 : v.soldTickets;
        }),
        P(c, "src", oe),
        e(p, () => b("Total winning tickets in this round")),
        e(m, () => {
          var v;
          return (v = t.winnersData) == null ? void 0 : v.totalWinningTicket;
        }),
        B((v) =>
          (v = K.darken ? `url(${Ze})` : `url(${tt})`) != null
            ? l.style.setProperty("background-image", v)
            : l.style.removeProperty("background-image")
        ),
        l
      );
    })(),
  bt = (t) =>
    (() => {
      var l = ct(),
        n = l.firstChild,
        i = n.firstChild,
        o = i.firstChild,
        a = i.nextSibling,
        $ = n.nextSibling,
        x = $.firstChild,
        g = x.firstChild,
        h = g.nextSibling,
        u = h.firstChild,
        _ = u.nextSibling,
        s = _.nextSibling,
        c = x.nextSibling,
        d = c.firstChild,
        p = d.nextSibling,
        f = p.firstChild,
        m = f.nextSibling,
        v = m.nextSibling;
      return (
        e(i, () => b("Draw time"), o),
        e(i, () => new Date(t.curObj.drawnTime).toLocaleString("en"), null),
        e(
          a,
          r(ce, {
            get nums() {
              return t.curObj.numbers || [];
            },
            get jackpotNum() {
              return t.curObj.jackpotBallNumber;
            },
          })
        ),
        P(g, "src", ae),
        e(u, () => b("Total tickets sold this round")),
        e(s, () => {
          var w;
          return (w = t.winnersData) == null ? void 0 : w.soldTickets;
        }),
        P(d, "src", oe),
        e(f, () => b("Total winning tickets in this round")),
        e(v, () => {
          var w;
          return (w = t.winnersData) == null ? void 0 : w.totalWinningTicket;
        }),
        B((w) =>
          (w = K.darken ? `url(${et})` : `url(${lt})`) != null
            ? l.style.setProperty("background-image", w)
            : l.style.removeProperty("background-image")
        ),
        l
      );
    })();
var gt = y(
    '<div><div class="flex justify-between items-center"><label class="font-extrabold text-primary text-base"></label></div><div class=center>'
  ),
  xt = y("<label>");
function ft(t) {
  const l = te(),
    n = N(() => t.list.map((s) => s.periodId) || []),
    i = N(() => n().findIndex((s) => s === t.periodId));
  N(() => n()[i()]);
  const o = N(() => i() >= n().length - 1),
    a = N(() => i() < 1),
    $ = N(() => i() === 0),
    x = () => {
      t.page < t.totalPage &&
        i() >= n().length - 6 &&
        t.onChangePage(t.page + 1);
      const s = n()[i() + 1];
      t.onChangePeriodId(s);
    },
    g = () => {
      if (i() >= 1) {
        const s = n()[i() - 1];
        t.onChangePeriodId(s);
      }
    },
    h = () => {
      const s = n()[0];
      t.onChangePeriodId(s);
    },
    u = (s) => {
      var d;
      const c =
        (d = t.list) == null ? void 0 : d.findIndex((p) => p.periodId === s);
      t.page < t.totalPage &&
        c >= t.list.length - 6 &&
        t.onChangePage(t.page + 1),
        t.onChangePeriodId(s);
    },
    _ = (s) => n().find((d) => d === s) || n()[0] || { label: "", value: 0 };
  return (() => {
    var s = gt(),
      c = s.firstChild,
      d = c.firstChild,
      p = c.nextSibling;
    return (
      e(d, () => b("Game ID")),
      e(
        c,
        r(k, {
          get class() {
            return z(
              "bg-layer5 w-8 h-8 p-1.5 rounded-md",
              !S.mobile && "absolute right-4"
            );
          },
          onClick: () => l(`/lottery/lottery_seed/${t.periodId}`),
          get children() {
            return r(I, {
              name: "Fairness",
              class: "fill-[#5F6D6D] dark:fill-[#B3BEC1]",
            });
          },
        }),
        null
      ),
      e(
        p,
        r(k, {
          get disabled() {
            return o();
          },
          class: "pre w-8 h-8 mr-3 bg-black_alpha5 dark:bg-layer6",
          onClick: x,
          get children() {
            return r(I, { name: "Arrow", class: "!w-3 !h-3 rotate-180" });
          },
        }),
        null
      ),
      e(
        p,
        r(ye, {
          get class() {
            return z("flex-1 bg-input_bright", !S.mobile && "w-52");
          },
          get value() {
            return _(t.periodId);
          },
          get options() {
            return n();
          },
          onChange: (f) => u(f),
          children: (f) =>
            (() => {
              var m = xt();
              return e(m, f), m;
            })(),
        }),
        null
      ),
      e(
        p,
        r(k, {
          get disabled() {
            return a();
          },
          onClick: g,
          class: "w-8 h-8 mx-3 bg-black_alpha5 dark:bg-layer6",
          get children() {
            return r(I, { name: "Arrow", class: "!w-3 !h-3" });
          },
        }),
        null
      ),
      e(
        p,
        r(k, {
          get disabled() {
            return $();
          },
          onClick: h,
          class: "w-8 h-8 bg-black_alpha5 dark:bg-layer6",
          get children() {
            return r(I, { name: "Final", class: "!w-3 !h-3" });
          },
        }),
        null
      ),
      B(() =>
        q(
          s,
          z(
            "p-4 border-b border-solid border-input relative",
            !S.mobile && "flex gap-3"
          )
        )
      ),
      s
    );
  })();
}
var ht = y("<div class=table-wrap>"),
  _t = y('<div class="bg-layer4 rounded-xl mb-40 relative">');
function $t() {
  const t = { page: 1, pageSize: 20, total: 0, totalPage: 0, list: [] },
    [l, n] = L(t),
    [i, o] = L(1),
    [a, $] = L("");
  let x = !0;
  const g = (f) =>
      W(this, null, function* () {
        const m = yield E().post("/lottery/five-plus-one/drawn-list/", {
          page: f.page,
          pageSize: 20,
        });
        return (
          (m.list = m.list.map((v) =>
            R(F({}, v), { periodId: String(v.periodId) })
          )),
          x && ((x = !1), $(m.list[0].periodId)),
          (m.list = u && u() ? [...u().list, ...m.list] : m.list),
          m
        );
      }),
    h = (f) =>
      f.periodId()
        ? E().post("/lottery/five-plus-one/winners/", {
            periodId: f.periodId(),
            page: f.page(),
            pageSize: f.pageSize,
          })
        : Promise.resolve({}),
    [u] = G(l, g),
    [_, { refetch: s }] = G({ periodId: a, page: i, pageSize: 10 }, h);
  fe(() => {
    s({ periodId: a(), page: i() });
  });
  const c = (f) => {
      $(f);
    },
    d = (f) => {
      n(R(F({}, l()), { page: f }));
    },
    p = () => {
      var m;
      return (
        ((m = u()) == null ? void 0 : m.list.find((v) => v.periodId === a())) ||
        {}
      );
    };
  return r(D, {
    get fallback() {
      return r(J, { class: "absolute left-1/2 top-1/2" });
    },
    get children() {
      var f = _t();
      return (
        e(
          f,
          r(D, {
            get children() {
              return r(ft, {
                get list() {
                  var m;
                  return ((m = u()) == null ? void 0 : m.list) || [];
                },
                get periodId() {
                  return a();
                },
                get totalPage() {
                  var m;
                  return ((m = u()) == null ? void 0 : m.totalPage) || 0;
                },
                get page() {
                  return l().page;
                },
                onChangePeriodId: c,
                onChangePage: d,
              });
            },
          }),
          null
        ),
        e(
          f,
          r(D, {
            get fallback() {
              return r(J, { class: "absolute left-1/2 top-24" });
            },
            get children() {
              var m = ht();
              return (
                e(
                  m,
                  r(ut, {
                    get periodId() {
                      return a();
                    },
                    get curObj() {
                      return p();
                    },
                    get winnersData() {
                      return _();
                    },
                    winnerPage: [i, o],
                  })
                ),
                m
              );
            },
          }),
          null
        ),
        f
      );
    },
  });
}
var pt = y(
  '<div class="h-0 sticky z-20 top-[80px] sm:top-[8.75rem]"><div class="h-14 bg-layer2">'
);
function Jt() {
  return [
    pt(),
    r(O, {
      class:
        "mb-4 rounded-xl sticky z-20 top-[80px] sm:top-[8.75rem] sm:w-[25rem]",
      get children() {
        return [
          r(O.TabItem, {
            class: "flex-1 overflow-hidden bg-transparent mt-0",
            get title() {
              return b("Buy Lottery");
            },
            get children() {
              return r(Ee, {});
            },
          }),
          r(O.TabItem, {
            class: "flex-1 overflow-hidden bg-transparent mt-0",
            get title() {
              return b("Results");
            },
            get children() {
              return r($t, {});
            },
          }),
          r(O.TabItem, {
            class: "flex-1 overflow-hidden bg-transparent mt-0",
            get title() {
              return b("Jackpot Winners");
            },
            get children() {
              return r(Xe, {});
            },
          }),
        ];
      },
    }),
  ];
}
export { Jt as default };
