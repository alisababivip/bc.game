import {
  D as j,
  ah as ue,
  a7 as we,
  b3 as R,
  g as O,
  aq as Q,
  b4 as $e,
  a1 as G,
  b5 as ye,
  a9 as K,
  i as t,
  c as n,
  x as q,
  t as s,
  h as A,
  aJ as ke,
  G as V,
  aD as Z,
  l as M,
  s as N,
  p as ge,
  f as g,
  a as J,
  b as Ce,
  o as Se,
  Q as L,
  q as U,
  B as Te,
  e as Ae,
  C as H,
  m as te,
  b6 as Ie,
  b7 as z,
  a6 as le,
  b8 as We,
  b9 as Le,
  ay as Y,
  af as fe,
  ae as ne,
  ba as me,
  F as Pe,
  a5 as Ee,
} from "./index-Cp-3lvCI.js";
var F = ((e) => (
  (e[(e.COMMON = 0)] = "COMMON"),
  (e[(e.LOSE = 1)] = "LOSE"),
  (e[(e.WIN = 2)] = "WIN"),
  e
))(F || {});
const be = { goals: 0, dayUse: !1 },
  he = { totalTicket: 0, totalWinningTicket: 0, totalWinningAmount: 0 },
  Re = { page: 1, pageSize: 20, total: 0, totalPage: 0 },
  re = { page: 1, pageSize: 20, total: 0, totalPage: 0, list: [] },
  ie = Date.now() + 24 * 60 * 60 * 1e3,
  pe = {
    drawTime: ie,
    totalTicket: 0,
    winnersPageList: {
      page: 1,
      pageSize: 20,
      total: 0,
      totalPage: 0,
      list: [],
    },
  },
  Ne = 2e4,
  xe = {
    period: 0,
    status: 0,
    totalTicket: 0,
    dayTicket: 0,
    drawTime: ie,
    createTime: Date.now(),
    updateTime: Date.now(),
  };
function De(e) {
  const o = e.goals,
    d = new j(e.dayUse ? 1e3 : 100),
    i = d.sub(o).todp(0).div(d),
    a = d;
  return { wager: d.mul(i).todp(0), total: a };
}
const Me = {
  lastList: [],
  raffleWeekly: { ...xe },
  periodIdProps: { ...Re },
  periodIdList: [],
  winningPeriodIdList: [],
  drawTime: ie,
  progress: { ...be },
  statistics: { ...he },
  runningTickets: { ...re },
  pastwinTickets: { ...re },
  resultTickets: { ...pe },
  periodTicketCount: 0,
  round: 0,
  winningRound: 0,
  roundLoading: !1,
};
function Fe() {
  const [e, o] = we({ ...Me }),
    d = () => {
      Promise.all([
        O().get("/raffleDeal/currentInfo/"),
        O().post("/raffleDeal/lastPeriodId/", {
          page: e.periodIdProps.page,
          pageSize: e.periodIdProps.pageSize,
        }),
      ])
        .then(([r, l]) => {
          r &&
            (o(
              R((u) => {
                (u.lastList = r.lastList || []),
                  (u.raffleWeekly = r.raffleWeekly || { ...xe }),
                  (u.drawTime = r.raffleWeekly.drawTime);
              })
            ),
            G.login && (c(), i())),
            l &&
              (o(
                R((u) => {
                  (u.periodIdList = l.list || []),
                    (u.periodIdProps = {
                      page: l.page || 1,
                      pageSize: l.pageSize || 20,
                      total: l.total || 0,
                      totalPage: l.totalPage || 0,
                    }),
                    (u.round =
                      l.list && l.list.length > 1 ? l.list[1] : l.list[0] || 0);
                })
              ),
              e.periodIdList.length > 0 && X(e.round, 1, 20));
        })
        .catch(Q);
    },
    c = () => {
      O()
        .get("/raffleDeal/statistics/")
        .then((r) => {
          r &&
            o(
              R((l) => {
                (l.progress = r.progress || { ...be }),
                  (l.statistics = r.statistics || { ...he }),
                  (l.periodTicketCount = r.periodTicketCount || 0);
              })
            );
        })
        .catch(Q);
    },
    i = () => {
      O()
        .post("/raffleDeal/lastPeriodId/", {
          page: 1,
          pageSize: 50,
          onlyWinning: !0,
          userId: G.userId,
        })
        .then((r) => {
          r &&
            o(
              R((l) => {
                (l.winningPeriodIdList = r.list || []),
                  (l.winningRound = r.list[0] || 0);
              })
            );
        })
        .catch(Q);
    };
  return {
    store: e,
    setStore: o,
    initFn: d,
    getUserStatistics: c,
    getUserWinningList: i,
    updateLastPeriodId: () => {
      O()
        .post("/raffleDeal/lastPeriodId/", {
          page: e.periodIdProps.page + 1,
          pageSize: e.periodIdProps.pageSize,
        })
        .then((r) => {
          r &&
            o(
              R((l) => {
                (l.periodIdList = l.periodIdList.concat(r.list || [])),
                  (l.periodIdProps = {
                    page: r.page || l.periodIdProps.page + 1,
                    pageSize: r.pageSize || l.periodIdProps.pageSize,
                    total: r.total || l.periodIdProps.total,
                    totalPage: r.totalPage || l.periodIdProps.totalPage,
                  });
              })
            );
        })
        .catch(console.log);
    },
  };
}
const X = ue((e, o, d) => {
    const { setStore: c } = W();
    c(
      R((i) => {
        i.roundLoading = !0;
      })
    ),
      O()
        .post("/raffleDeal/winnersList/", { periodId: e, page: o, pageSize: d })
        .then((i) => {
          i &&
            c(
              R((a) => {
                (a.resultTickets = i || { ...pe }), (a.round = e);
              })
            );
        })
        .catch(Q)
        .finally(() => {
          c(
            R((i) => {
              i.roundLoading = !1;
            })
          );
        });
  }, 300),
  Ue = (e, o = !1, d = !0, c = !1) => {
    const { setStore: i } = W();
    d &&
      i(
        R((a) => {
          a.roundLoading = !0;
        })
      ),
      O()
        .post("/raffleDeal/myTickets/", { ...e })
        .then((a) => {
          if (a) {
            const r = a || { ...re };
            i(
              R((l) => {
                o
                  ? (l.runningTickets = r)
                  : c
                  ? ((l.winningRound = e.periodId), (l.pastwinTickets = r))
                  : ((l.round = e.periodId), (l.pastwinTickets = r));
              })
            );
          }
        })
        .catch(Q)
        .finally(() => {
          i(
            R((a) => {
              a.roundLoading = !1;
            })
          );
        });
  },
  se = ue((e, o = !1, d = !0, c = !1) => {
    Ue(e, o, d, c);
  }, 300),
  ze = Fe(),
  Be = ye(ze);
function W() {
  return $e(Be);
}
var je = g(
    '<div class="text-lg text-primary font-extrabold bas flex-shrink-0 flex-grow-0 basis-56">'
  ),
  Oe = g(
    '<div class="flex justify-between text-sm flex-shrink-0"><p class=text-secondary>:<span class="font-extrabold text-primary"></span></p><div class="cursor-pointer text-brand sm:ml-6 sm:mr-2.5">?'
  ),
  qe = g('<div class="flex flex-auto">'),
  Ve = g(
    '<div class="py-2.5 pr-2.5 max-sm:-mx-4 max-sm:bg-layer1"><div class="center justify-start">'
  ),
  He = g('<span class="font-extrabold mx-1 text-brand">__ticket_count__'),
  Ke = g(
    '<div class="flex items-center flex-shrink-0 flex-grow-0 basis-1/2 text-xs"><img class="w-4 rounded-full mr-2"alt=""><span class="font-extrabold text-primary"></span><p class="text-secondary font-semibold ml-1">'
  );
const Qe = () => {
  const { store: e } = W();
  return (() => {
    var o = Ve(),
      d = o.firstChild;
    return (
      t(
        d,
        n(A, {
          get when() {
            return !q.mobile;
          },
          get children() {
            return [
              (() => {
                var c = je();
                return t(c, () => s("Weekly Raffle")), c;
              })(),
              n(A, {
                get when() {
                  return !q.mobile;
                },
                get children() {
                  var c = Oe(),
                    i = c.firstChild,
                    a = i.firstChild,
                    r = a.nextSibling,
                    l = i.nextSibling,
                    u = l.firstChild;
                  return (
                    t(i, () => s("Game ID"), a),
                    t(r, () => e.raffleWeekly.period),
                    (l.$$click = () => {
                      const p = document.getElementById("raffle-rule");
                      p && p.scrollIntoView({ behavior: "smooth" });
                    }),
                    t(l, () => s("How To Play"), u),
                    c
                  );
                },
              }),
            ];
          },
        }),
        null
      ),
      t(
        d,
        n(A, {
          get when() {
            return e.lastList && e.lastList.length > 0;
          },
          get children() {
            var c = qe();
            return (
              t(
                c,
                n(ke, {
                  auto: 3e3,
                  options: { loop: !0, slides: { spacing: 10 } },
                  get children() {
                    return n(V, {
                      get each() {
                        return e.lastList;
                      },
                      children: (i) =>
                        (() => {
                          var a = Ke(),
                            r = a.firstChild,
                            l = r.nextSibling,
                            u = l.nextSibling;
                          return (
                            t(l, () => i.userName),
                            t(
                              u,
                              n(Z, {
                                get ticket_count() {
                                  return i.ticketCount;
                                },
                                i18nKey: "platform.trans.mainpage.raffle.desc3",
                                get children() {
                                  return ["got", He(), "tickets"];
                                },
                              })
                            ),
                            M(() => N(r, "src", ge.avatar(i.userId))),
                            a
                          );
                        })(),
                    });
                  },
                })
              ),
              c
            );
          },
        }),
        null
      ),
      o
    );
  })();
};
K(["click"]);
const Ge = "/assets/ticket-Alr8X3L5.png",
  Ye = "/assets/ticket_more-wfS1KYyx.png",
  Je =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAFVBMVEUAAACVp7eUqLaTp7eWqLmWqLaVp7dOvn5TAAAABnRSTlMA3+9gX++uXsslAAAAOElEQVQoz2OAAScRBnQgloohlJY20oWc0tCACIMYulAqgxq6UCKDIbqQ8uDw0KASUkvEEDKEhxMATwgzKe/vBIEAAAAASUVORK5CYII=",
  Xe =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAEBAMAAAAUgoCdAAAAD1BMVEUeHh4eHh4dHR0eHh4eHh73HVn1AAAABHRSTlPv32BfJXNiOwAAABxJREFUCNdjMHBBA8IMIuhCDgws6EKODIroQkwAruQSALe10AoAAAAASUVORK5CYII=",
  Ze = "/assets/tickets-DG81Yd5E.png",
  et = "/assets/ticket_common-BoP-pzCT.png",
  tt = "/assets/ticket_lose-C_i--Atc.png",
  lt = "/assets/ticket_win-DtLFoR_7.png",
  nt = "/assets/ticket_common_w-CcVl5tUQ.png",
  rt = "/assets/ticket_lose_w-C_ECywWk.png",
  st = "/assets/ticket_win_w-RCa3U0a2.png",
  it = "/assets/hat-DnlQ2jsg.png",
  at = "/assets/coin-D7vizJGk.png",
  ot = "/assets/card1-DVTawbcE.png",
  ct = "/assets/card2-DuhS4b4I.png",
  dt = "/assets/stars-CjzMMSbz.png",
  B = {
    ticket: Ge,
    ticket_more: Ye,
    plus: Je,
    close: Xe,
    tickets: Ze,
    ticket_common: et,
    ticket_lose: tt,
    ticket_win: lt,
    ticket_common_w: nt,
    ticket_lose_w: rt,
    ticket_win_w: st,
    hat: it,
    coin: at,
    card1: ot,
    card2: ct,
    stars: dt,
  },
  ut = "/assets/bg-m-BCFFH6dF.png",
  gt = "/assets/bg-m-light-CpM-oHZB.png",
  ft = "/assets/bg-C1-datGm.png",
  mt = "/assets/bg-light-DQpc3izo.png";
var bt = g(
    '<div class="flex justify-between text-sm max-sm:mb-2.5"><p class=text-secondary>:<span class="font-extrabold text-primary"></span></p><div class="cursor-pointer text-brand">?'
  ),
  ht = g(
    '<div class=""><div><div><img alt=card class="absolute w-4 left-[8%] top-4 z-0"><div class="font-extrabold text-2xl absolute left-1/2 -translate-x-1/2 ellipsis -top-4 text-alw_white"><h2 class=text-shadow></h2></div><div class="border-b border-solid font-extrabold border-[#fff]/10 text-4xl text-[#FFE236]"><p class=mt-2.5></p></div><div class="mt-2 text-secondary text-xs"><p class=text-alw_white></p><div class="border-b text-2xl font-extrabold border-[#fff]/10 py-2 text-alw_white">h:<!>m:<!>s</div></div><p class="mb-3 font-semibold text-xs text-alw_white">!'
  );
const pt = () => {
  const { store: e } = W(),
    [o, d] = J({ days: 0, hours: 0, minutes: 0, seconds: 0 }),
    c = () => {
      const r = e.drawTime - new Date().getTime();
      r > 0
        ? d({
            days: Math.floor(r / (1e3 * 60 * 60 * 24)),
            hours: Math.floor((r / (1e3 * 60 * 60)) % 24),
            minutes: Math.floor((r / 1e3 / 60) % 60),
            seconds: Math.floor((r / 1e3) % 60),
          })
        : d({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    },
    i = (r, l) => {
      r.preventDefault();
      const u = document.getElementById(l);
      u && u.scrollIntoView({ behavior: "smooth" });
    };
  Ce(() => {
    const r = setInterval(c, 1e3);
    Se(() => clearInterval(r));
  });
  const a = L(() => (Number(o().days) > 0 ? `${o().days}d:` : ""));
  return (() => {
    var r = ht(),
      l = r.firstChild,
      u = l.firstChild,
      p = u.firstChild,
      k = p.nextSibling,
      T = k.firstChild,
      v = k.nextSibling,
      x = v.firstChild,
      m = v.nextSibling,
      f = m.firstChild,
      b = f.nextSibling,
      _ = b.firstChild,
      h = _.nextSibling,
      $ = h.nextSibling,
      C = $.nextSibling;
    C.nextSibling;
    var y = m.nextSibling,
      E = y.firstChild;
    return (
      t(
        r,
        n(A, {
          get when() {
            return q.mobile;
          },
          get children() {
            var w = bt(),
              S = w.firstChild,
              I = S.firstChild,
              D = I.nextSibling,
              P = S.nextSibling,
              _e = P.firstChild;
            return (
              t(S, () => s("Game ID"), I),
              t(D, () => e.raffleWeekly.period),
              (P.$$click = () => {
                const oe = document.getElementById("raffle-rule");
                oe && oe.scrollIntoView({ behavior: "smooth" });
              }),
              t(P, () => s("How To Play"), _e),
              w
            );
          },
        }),
        l
      ),
      t(T, () => s("SUPER LUCKY DRAW")),
      x.style.setProperty(
        "background-image",
        "conic-gradient(from -26.52deg at 48.56% 46.69%, #D1B860 0deg, #E1D17C 31.84deg, #FEFFAF 61.18deg, #FEFFAF 78.99deg, #B18A33 111.56deg, #F9EC92 171.3deg, #FFF49A 210.88deg, #BB9231 242.64deg, #AC7D1B 261.9deg, #FEFFAF 293.47deg, #F0E997 339.07deg, #CAAE56 360deg), linear-gradient(0deg, rgba(255, 250, 220, 0.2), rgba(255, 250, 220, 0.2))"
      ),
      x.style.setProperty("color", "transparent"),
      x.style.setProperty("background-clip", "text"),
      t(x, () => U.printCurrency(new j(Ne))),
      t(f, () => s("Next Draw Starts in")),
      t(b, a, _),
      t(b, () => o().hours, _),
      t(b, () => o().minutes, h),
      t(b, () => o().seconds, C),
      t(
        u,
        n(Te, {
          onClick: (w) => {
            i(w, "raffle-rule");
          },
          type: "brand",
          class:
            "font-extrabol text-xl text-primary_brand py-0 mx-auto my-2 h-12 px-6 leading-normal",
          get children() {
            return s("Earn ticket");
          },
        }),
        y
      ),
      t(
        y,
        () =>
          s("__number__ tickets have been sent this round", {
            number: `[${e.raffleWeekly.totalTicket}]`,
          }),
        E
      ),
      M(
        (w) => {
          var S = Ae(
              "relative px-4 center rounded-lg10 bg-cover bg-bottom bg-no-repeat max-sm:h-80 sm:aspect-[4.6] sm:justify-start"
            ),
            I = q.mobile
              ? H.darken
                ? `url(${ut})`
                : `url(${gt})`
              : H.darken
              ? `url(${ft})`
              : `url(${mt})`,
            D = {
              "relative border border-solid text-center z-20 rounded-2xl border-third bg-black_alpha20 px-7 max-sm:-top-6 max-sm:w-full sm:px-11 lg:ml-20 lg:max-w-96":
                !0,
              "bg-[#B0FFD8]/20": !H.darken,
            },
            P = B.card2;
          return (
            S !== w.e && te(l, (w.e = S)),
            I !== w.t &&
              ((w.t = I) != null
                ? l.style.setProperty("background-image", I)
                : l.style.removeProperty("background-image")),
            (w.a = Ie(u, D, w.a)),
            P !== w.o && N(p, "src", (w.o = P)),
            w
          );
        },
        { e: void 0, t: void 0, a: void 0, o: void 0 }
      ),
      r
    );
  })();
};
K(["click"]);
var xt = g('<span class="mx-1.5 text-brand">__amount__'),
  vt = g(
    '<div class=mt-6><div class="mb-3 text-base font-extrabold text-primary"><p></p></div><div class="mb-2 lg:flex lg:items-center lg:space-x-4"><div class="mb-2 flex items-center justify-between bg-layer4 h-28 rounded-lg10 px-7 lg:!mb-0 lg:w-1/2"><div class=h-full><img class="h-full w-auto"alt=ticket></div><div class="ml-5 flex-1 text-sm font-semibold text-secondary"><p class="">:</p><span class="font-extrabold text-primary">+ 1 </span></div></div><div class="mt-2 flex items-center justify-between bg-layer4 h-28 rounded-lg10 px-7 lg:!mt-0 lg:w-1/2"><div class=h-full><img class=h-full alt=ticket></div><div class="ml-5 flex-1 text-sm font-semibold text-secondary"><p class=""><span></span><span class="mx-1.5 text-brand"></span><span>:</span></p><p class="font-extrabold text-primary">+ 1 '
  );
const _t = () =>
  (() => {
    var e = vt(),
      o = e.firstChild,
      d = o.firstChild,
      c = o.nextSibling,
      i = c.firstChild,
      a = i.firstChild,
      r = a.firstChild,
      l = a.nextSibling,
      u = l.firstChild,
      p = u.firstChild,
      k = u.nextSibling;
    k.firstChild;
    var T = i.nextSibling,
      v = T.firstChild,
      x = v.firstChild,
      m = v.nextSibling,
      f = m.firstChild,
      b = f.firstChild,
      _ = b.nextSibling,
      h = f.nextSibling;
    return (
      h.firstChild,
      t(d, () => s("How to Earn Ticket")),
      t(
        u,
        n(Z, {
          get amount() {
            return U.printCurrency(new j(100));
          },
          i18nKey: "platform.trans.mainpage.log.wager",
          get children() {
            return ["Log in & Wager ", xt(), "Daily"];
          },
        }),
        p
      ),
      t(k, () => s("Ticket"), null),
      t(b, () => s("Every wager")),
      t(_, () => U.printCurrency(new j(1e3))),
      t(h, () => s("Ticket"), null),
      M(
        ($) => {
          var C = B.ticket,
            y = B.ticket_more;
          return (
            C !== $.e && N(r, "src", ($.e = C)),
            y !== $.t && N(x, "src", ($.t = y)),
            $
          );
        },
        { e: void 0, t: void 0 }
      ),
      e
    );
  })();
var wt = g(
    '<div class="rounded-lg10 bg-layer3 p-2.5"><table class=w-full><thead class=w-full><tr class=w-full><th class="flex-1 w-1/2 text-left"></th><th class="flex-1 w-1/2 text-left"></th></tr></thead><tbody>'
  ),
  $t = g(
    '<div class=""id=raffle-rule><p class="text-white text-lg font-extrabold my-3 text-left"></p><div class="rounded-xl bg-layer4 p-4 w-full rounded-xl bg-layer4"><div class="w-full mx-auto max-w-full"></div><div class="flex cursor-pointer items-center justify-between py-4 font-semibold px-3"><span class="font-bold text-title text-sm leading-5 max-w-[320px] flex-[300px]"></span><div class="flex flex-1 items-center justify-center max-w-8 justify-end"><div class="bg-layer5 rounded-md h-6 w-6 center p-1.5"><span>'
  ),
  yt = g('<span class="text-base font-semibold">'),
  kt = g(
    '<div class="flex flex-col gap-y-3 pb-3"><div class="text-sm font-semibold text-secondary">'
  ),
  Ct = g("<tr class=h-12><td></td><td>");
const St = () => [
    { label: "No. 1", value: 5e3 },
    { label: "No. 2", value: 3500 },
    { label: "No. 3", value: 2e3 },
    { label: "No. 4", value: 1500 },
    { label: "No. 5", value: 1e3 },
    { label: "No. 6", value: 500 },
    { label: "No. 7", value: 500 },
    { label: "No. 8", value: 500 },
    { label: "No. 9", value: 500 },
    { label: "No. 10", value: 500 },
    { label: "No. 11 ~ No. 20", value: 100 },
    { label: "No. 21 ~ No. 50", value: 50 },
    { label: "No. 51 ~ No. 150", value: 20 },
  ],
  Tt = () =>
    L(() => [
      {
        question: s("How to Enter"),
        answer: [
          s(
            "“Daily login and wager $100” to earn 1 ticket and a maximum up to 7 tickets per week under this condition."
          ),
          s(
            "For every $1000 USD you wager, you will receive one extra ticket. The number of tickets you will get increases with your wager amount."
          ),
          s("Every entry will correlate to an entry number."),
          s("Your entry numbers can be found on the same page."),
          s(
            "Maximum tickets accumulated per user can be up to 100 tickets per week."
          ),
        ],
      },
      {
        question: s("Weekly Raffle Draw"),
        answer: [
          s(
            "Weekly raffle draws every Monday at 12:00:00 UTC; the winners will be announced on the same page."
          ),
        ],
      },
      {
        question: s("Terms and Conditions"),
        answer: [
          s("You must have an account in __ENV_HOST__."),
          s(
            "The weekly raffle includes all types of wager in “Casino” and “Sports”, except the usage of __ENV_BCL__ & __ENV_JB__."
          ),
          s(
            "__ENV_HOST__ reserves the right to hold void, suspend, cancel, or amend this promotion where it deems necessary to do so."
          ),
          s(
            "Entries will be declared void if the entrant is found engaging in fraud, misrepresentation, hacking, or exploitation."
          ),
          s(
            "__ENV_HOST__ reserves the right to perform additional KYC/AML checks as a condition of receiving the weekly raffle reward."
          ),
        ],
      },
    ]),
  At = function () {
    const o = Tt(),
      [d, c] = J();
    return (() => {
      var i = $t(),
        a = i.firstChild,
        r = a.nextSibling,
        l = r.firstChild,
        u = l.nextSibling,
        p = u.firstChild,
        k = p.nextSibling,
        T = k.firstChild,
        v = T.firstChild;
      return (
        t(a, () => s("Raffle rules")),
        t(
          l,
          n(z, {
            get children() {
              return n(V, {
                get each() {
                  return o();
                },
                children: (x, m) =>
                  n(z.Item, {
                    class: "overflow-hidden rounded-xl",
                    get value() {
                      return String(m());
                    },
                    get children() {
                      return [
                        n(z.ItemTrigger, {
                          class: "bg-layer4 rounded-b-none py-3",
                          get children() {
                            var f = yt();
                            return t(f, () => x.question), f;
                          },
                        }),
                        n(z.ItemContent, {
                          class: "bg-layer4 text-sm rounded-b-xl",
                          get children() {
                            var f = kt(),
                              b = f.firstChild;
                            return t(b, () => x.answer), f;
                          },
                        }),
                      ];
                    },
                  }),
              });
            },
          })
        ),
        (u.$$click = () => c(!d())),
        t(p, () => s("Winning Prize Details:")),
        t(
          v,
          n(le, {
            get class() {
              return `h-4.5 w-4.5 ${d() ? "-rotate-90" : "-rotate-180"}`;
            },
            name: "Arrow",
          })
        ),
        t(
          r,
          n(We, {
            get when() {
              return d();
            },
            get children() {
              var x = wt(),
                m = x.firstChild,
                f = m.firstChild,
                b = f.firstChild,
                _ = b.firstChild,
                h = _.nextSibling,
                $ = f.nextSibling;
              return (
                t(_, () => s("Result")),
                t(h, () => s("Prize")),
                t(
                  $,
                  n(V, {
                    get each() {
                      return St();
                    },
                    children: (C, y) =>
                      (() => {
                        var E = Ct(),
                          w = E.firstChild,
                          S = w.nextSibling;
                        return (
                          t(w, () => C.label),
                          t(S, () => U.printCurrency(new j(C.value))),
                          M(
                            (I) => {
                              var D =
                                  y() === 0
                                    ? "text-base font-extrabold text-brand"
                                    : "text-sm text-primary",
                                P =
                                  y() === 0
                                    ? "text-lg font-extrabold text-brand"
                                    : "text-sm text-brand";
                              return (
                                D !== I.e && te(w, (I.e = D)),
                                P !== I.t && te(S, (I.t = P)),
                                I
                              );
                            },
                            { e: void 0, t: void 0 }
                          ),
                          E
                        );
                      })(),
                  })
                ),
                x
              );
            },
          }),
          null
        ),
        i
      );
    })();
  };
K(["click"]);
var It = g(
    '<div class=""><p class="text-white text-lg font-extrabold my-3 text-left"></p><div class="w-full w-full rounded-xl bg-layer4 px-4 mx-auto max-w-full pb-5 pt-4"><div class=w-full>'
  ),
  Wt = g('<span class="text-base font-semibold">'),
  Lt = g(
    '<div class="flex flex-col gap-y-3 pb-3"><div class="text-sm font-semibold text-secondary">'
  );
function Pt() {
  return L(() => [
    {
      question: s("How to earn the “ticket”? How many tickets can I collect?"),
      answer: [
        s(
          "Log in daily and wager $100 to in the same day to earn 1 ticket and maximum 7 tickets per week."
        ),
        s(
          "By every wager of $1,000, you will earn 1 extra ticket. The more wagers, the more tickets."
        ),
        s(
          "Maximum number of tickets collected per user can be up to 100 tickets per week."
        ),
        s(
          "Ticket refresh every 10 mins, please check in 'My Tickets' section."
        ),
      ],
    },
    {
      question: s("When the winner be announced?"),
      answer: [
        s(
          "Winner will be announced every Monday at 12:00:00 UTC. The winner list can be found on the same page."
        ),
        s("Raffle reward will credit to BC.GAME account within 48 hours."),
      ],
    },
    {
      question: s("Can I win multiple rewards in a round of weekly raffle?"),
      answer: [
        s(
          "Unfortunately, no. One(1) user can win one(1) time per week. Collect more tickets to increase the winning chances."
        ),
      ],
    },
    {
      question: s("Can I join the next raffle with “Old Ticket”?"),
      answer: [
        s(
          "Unfortunately, no. Users have to re-accumulate the new ticket(s) in order to join the new weekly raffle."
        ),
      ],
    },
    {
      question: s("Can I know more about the time period?"),
      answer: [
        s(
          "For “Daily login and wager $100”, users must complete the requirement between 00:00 UTC ~ 23:59 UTC in order to earn the ticket."
        ),
        s(
          "For “Every wager of $1,000 to earn extra tickets”, there is no time limitation."
        ),
        s(
          "The weekly raffle starts every Monday at 12:00:00 UTC to Sunday at 11:59:59 UTC. (All tickets accumulated in one week will not count in the next week.)"
        ),
        s(
          "The lucky winner list will be updated on the same page by every Monday at 12:00:00 UTC, and rewards will be distributed within 48 hours."
        ),
      ],
    },
  ]);
}
function Et() {
  const e = Pt();
  return (() => {
    var o = It(),
      d = o.firstChild,
      c = d.nextSibling,
      i = c.firstChild;
    return (
      t(d, () => s("Frequently Asked Questions")),
      t(
        i,
        n(z, {
          class: "space-y-4",
          get children() {
            return n(V, {
              get each() {
                return e();
              },
              children: (a, r) =>
                n(z.Item, {
                  class: "overflow-hidden rounded-xl",
                  get value() {
                    return String(r());
                  },
                  get children() {
                    return [
                      n(z.ItemTrigger, {
                        class: "bg-layer4 rounded-b-none py-3",
                        get children() {
                          var l = Wt();
                          return t(l, () => a.question), l;
                        },
                      }),
                      n(z.ItemContent, {
                        class: "bg-layer4 text-sm rounded-b-xl",
                        get children() {
                          var l = Lt(),
                            u = l.firstChild;
                          return t(u, () => a.answer), l;
                        },
                      }),
                    ];
                  },
                }),
            });
          },
        })
      ),
      o
    );
  })();
}
K(["click"]);
const Rt = "/assets/ticket-win-BoTJAqpI.png",
  Nt = "/assets/ticket-win-light-svUIFsif.png",
  Dt = "/assets/ticket-regular-CmZTtqId.png",
  Mt = "/assets/ticket-regular-light-Dhz3RRU7.png",
  Ft = "/assets/ticket-nowin-D1aedWRs.png",
  Ut = "/assets/ticket-nowin-light-K3yGKCR_.png";
var zt = g(
  '<div class="relative w-36 max-w-36"><img class=w-36 alt=""><span class="absolute z-10 top-1/2 left-1/2 text-primary font-extrabold text-lg -translate-x-1/2 -translate-y-1/2">'
);
function Bt(e) {
  return e === F.WIN
    ? "ticket-win"
    : e === F.LOSE
    ? "ticket-lose"
    : "ticket-common";
}
const ve = (e) => (
  Bt(e.ticketStatus),
  (() => {
    var o = zt(),
      d = o.firstChild,
      c = d.nextSibling;
    return (
      t(c, () => e.ticketNumber),
      M(() =>
        N(
          d,
          "src",
          e.ticketStatus === F.WIN
            ? H.darken
              ? Rt
              : Nt
            : e.ticketStatus === F.LOSE
            ? H.darken
              ? Ft
              : Ut
            : H.darken
            ? Dt
            : Mt
        )
      ),
      o
    );
  })()
);
var jt = g(
    '<div class="flex justify-around lg:items-center lg:justify-start"><button class="mr-0.5 justify-center rounded-xl h-10 w-10 center bg-layer3"></button><div class=max-sm:flex-1></div><button class="justify-center rounded-xl h-10 w-10 center ml-0.5 bg-layer3"></button><button class="">'
  ),
  Ot = g("<span class=font-extrabold>");
function qt(e) {
  return e.map((o) => ({ label: String(o), value: o }));
}
const ee = (e) => {
  const [o, d] = J({ label: String(e.value), value: e.value }),
    { updateLastPeriodId: c } = W(),
    i = L(() => e.rounds.findIndex((v) => v === o().value)),
    a = i() >= e.rounds.length - 1,
    r = i() < 1,
    l = i() === 0;
  let u = !1;
  const p = (v) => {
      if (u) {
        u = !1;
        return;
      }
      const x = e.rounds.findIndex((m) => m === v.value);
      e.onlyWinning || (e.rounds.length - x <= 5 && ((u = !0), c())),
        d(v),
        e.onWeekChange(v.value);
    },
    k = () => {
      i() < e.rounds.length - 1 &&
        p({ label: String(e.rounds[i() + 1]), value: e.rounds[i() + 1] });
    },
    T = () => {
      i() >= 1 &&
        p({ label: String(e.rounds[i() - 1]), value: e.rounds[i() - 1] });
    };
  return (() => {
    var v = jt(),
      x = v.firstChild,
      m = x.nextSibling,
      f = m.nextSibling,
      b = f.nextSibling;
    return (
      (x.$$click = k),
      (x.disabled = a),
      t(x, n(le, { name: "Arrow", class: "h-auto w-5" })),
      t(
        m,
        n(Le, {
          class: "bg-layer3",
          get value() {
            return o();
          },
          get title() {
            return s("Rounds");
          },
          get options() {
            return qt(e.rounds);
          },
          onChange: p,
          children: (_) =>
            (() => {
              var h = Ot();
              return t(h, () => _().label), h;
            })(),
        })
      ),
      (f.$$click = T),
      (f.disabled = r),
      t(f, n(le, { name: "Arrow", class: "rotate-180 h-auto w-5" })),
      (b.$$click = () => p({ label: String(e.rounds[0]), value: e.rounds[0] })),
      (b.disabled = l),
      v
    );
  })();
};
K(["click"]);
var Vt = g('<div class="mt-4 relative"><div>'),
  ce = g('<span class="font-extrabold text-primary mx-1">__wager_amount__'),
  Ht = g('<div class="font-semibold text-secondary py-2">'),
  Kt = g(
    '<div class="font-semibold text-secondary py-2"><span class="font-extrabold text-primary mx-1">/100'
  ),
  Qt = g(
    '<div class=""><div class="flex justify-between border-b border-solid text-sm text-secondary border-third py-2"><p class=""></p><p class="">'
  ),
  Gt = g(
    '<div class="flex justify-between border-b border-solid items-center border-third py-3"><div class=flex-1></div><div class="">'
  ),
  Yt = g('<span class="font-semibold text-secondary">'),
  Jt = g('<span class="font-semibold text-brand">+'),
  Xt = g("<span>--"),
  Zt = g("<div class=mt-3>");
const el = () => {
    const [e, o] = J(0),
      { store: d } = W(),
      c = () => [
        { label: s("Active"), value: tl },
        { label: s("Past"), value: ll },
        { label: s("My Winnings"), value: nl },
      ],
      i = (a) => {
        se(
          {
            periodId: a,
            onlyWinning: e() === 2,
            page: d?.pastwinTickets.page,
            pageSize: d?.pastwinTickets.pageSize,
          },
          !1,
          !0,
          e() === 2
        );
      };
    return (() => {
      var a = Vt(),
        r = a.firstChild;
      return (
        t(
          a,
          n(Y, {
            type: "indicator",
            class: "mytickets-tab-wrap",
            get value() {
              return e();
            },
            onChange: (l) => {
              o(l),
                se(
                  {
                    periodId:
                      l === 0
                        ? d.raffleWeekly.period
                        : l === 1
                        ? d.round
                        : d.winningRound,
                    onlyWinning: l === 2,
                    page: 1,
                    pageSize: 20,
                  },
                  l === 0,
                  !1,
                  l === 2
                );
            },
            get children() {
              return n(V, {
                get each() {
                  return c();
                },
                children: (l) =>
                  n(Y.TabItem, {
                    get title() {
                      return l.label;
                    },
                  }),
              });
            },
          }),
          r
        ),
        t(
          a,
          n(A, {
            get when() {
              return e() === 1 && d.round > 0;
            },
            get children() {
              return n(ee, {
                onWeekChange: i,
                onlyWinning: !1,
                get value() {
                  return d.round;
                },
                get rounds() {
                  return d.periodIdList;
                },
              });
            },
          }),
          r
        ),
        t(
          a,
          n(A, {
            get when() {
              return e() === 2 && d.winningRound > 0;
            },
            get children() {
              return n(ee, {
                onWeekChange: i,
                onlyWinning: !0,
                get value() {
                  return d.winningRound;
                },
                get rounds() {
                  return d.winningPeriodIdList;
                },
              });
            },
          }),
          r
        ),
        t(r, () => c()[e()].value()),
        a
      );
    })();
  },
  tl = () => {
    const { store: e, setStore: o } = W(),
      { wager: d } = De(e.progress);
    return [
      L(() =>
        L(() => e?.runningTickets?.list.length <= 0)()
          ? (() => {
              var c = Ht();
              return (
                t(
                  c,
                  n(Z, {
                    get wager_amount() {
                      return U.printCurrency(d || 0);
                    },
                    i18nKey: "platform.trans.mainpage.raffle..desc1",
                    get children() {
                      return [
                        "Wager",
                        ce(),
                        "to get your daily raffle ticket.",
                      ];
                    },
                  })
                ),
                c
              );
            })()
          : (() => {
              var c = Kt(),
                i = c.firstChild,
                a = i.firstChild;
              return (
                t(
                  c,
                  n(Z, {
                    get wager_amount() {
                      return U.printCurrency(d || 0);
                    },
                    i18nKey: "platform.trans.mainpage.store.desc2",
                    get children() {
                      return [
                        "Wager",
                        ce(),
                        "to get one more additional raffle ticket.",
                      ];
                    },
                  }),
                  i
                ),
                t(i, () => e.periodTicketCount, a),
                c
              );
            })()
      ),
      n(ae, {
        isRunnig: !0,
        get tickets() {
          return e.runningTickets;
        },
      }),
    ];
  },
  ll = () => {
    const { store: e, setStore: o } = W();
    return n(ae, {
      isRunnig: !1,
      get tickets() {
        return e.pastwinTickets;
      },
    });
  },
  nl = () => {
    const { store: e, setStore: o } = W();
    return n(ae, {
      isRunnig: !1,
      get tickets() {
        return e.pastwinTickets;
      },
      isWin: !0,
    });
  },
  ae = (e) => {
    const { store: o, setStore: d } = W(),
      c = L(() => e?.tickets?.list?.length <= 0),
      i = (a) => {
        se(
          {
            periodId: e.isRunnig ? o.raffleWeekly.period : o.round,
            onlyWinning: e.isWin,
            page: a,
            pageSize: 20,
          },
          e.isRunnig,
          !0
        );
      };
    return [
      n(A, {
        get when() {
          return o.roundLoading;
        },
        get children() {
          return n(fe, { class: "absolute top-1/2 left-1/2" });
        },
      }),
      n(A, {
        get when() {
          return !c();
        },
        get fallback() {
          return n(ne, {});
        },
        get children() {
          var a = Qt(),
            r = a.firstChild,
            l = r.firstChild,
            u = l.nextSibling;
          return (
            t(l, () => s("My Ticket")),
            t(u, () => s("Prize")),
            t(
              a,
              n(V, {
                get each() {
                  return e?.tickets?.list;
                },
                children: (p, k) => {
                  const T = p.winning > 0,
                    v = T ? F.WIN : F.LOSE,
                    x = T ? p.winning : 0;
                  return (() => {
                    var m = Gt(),
                      f = m.firstChild,
                      b = f.nextSibling;
                    return (
                      t(
                        f,
                        n(ve, {
                          get ticketNumber() {
                            return p.number;
                          },
                          get ticketStatus() {
                            return e.isRunnig ? F.COMMON : v;
                          },
                        })
                      ),
                      t(
                        b,
                        (() => {
                          var _ = L(() => !!e.isRunnig);
                          return () =>
                            _()
                              ? (() => {
                                  var h = Yt();
                                  return (
                                    t(h, () => s("Waiting for next draw")), h
                                  );
                                })()
                              : T
                              ? (() => {
                                  var h = Jt();
                                  return (
                                    h.firstChild,
                                    t(h, () => U.printCurrency(new j(x)), null),
                                    h
                                  );
                                })()
                              : Xt();
                        })()
                      ),
                      m
                    );
                  })();
                },
              }),
              null
            ),
            t(
              a,
              (() => {
                var p = L(() => e?.tickets?.totalPage > 1);
                return () =>
                  p() &&
                  (() => {
                    var k = Zt();
                    return (
                      t(
                        k,
                        n(me, {
                          get current() {
                            return e.tickets.page;
                          },
                          get total() {
                            return e.tickets.total;
                          },
                          onChange: i,
                        })
                      ),
                      k
                    );
                  })();
              })(),
              null
            ),
            a
          );
        },
      }),
    ];
  };
var rl = g(
  '<div class="bg-layer4 p-3 rounded-lg10"><div class=""><div class="relative h-40 border-solid py-4 rounded-lg10 border-[#24ee89]/20 bg-[#24EE89]/10 px-5 sm:flex sm:h-24 sm:border sm:border-brand/10 lg:items-center"><div class="flex flex-col justify-center lg:flex-w-4/6 lg:w-4/6"><div class="flex h-8 items-center text-sm leading-none"><div class=mr-3><img alt=tickets class="w-7 h-auto"></div><p class="mr-3 text-secondary">:</p><p class="font-extrabold text-primary"></p></div><div class="flex h-8 items-center"><div class=mr-3><img alt=hat class="h-auto w-5"></div><p class="mr-3 text-secondary">:</p><p class="font-extrabold text-primary"></p></div></div><div class="relative flex h-full w-full flex-col justify-center -top-4 lg:!top-0 lg:!h-auto lg:w-auto"><div class="flex items-center"><div class=mr-3><img alt=coin class="h-auto w-5"></div><p class="mr-3 text-secondary">:</p><p class="text-2xl font-extrabold text-brand"></p></div></div><div class="absolute left-0 w-full border border-b top-[60%] border-dashed border-white_alpha10 lg:!left-[60%] lg:!top-0 lg:top-0 lg:h-full lg:!w-[1px]"></div><div class="absolute flex h-6 w-full justify-between -left-1 top-[53%] z-20 lg:!left-[60%] lg:-top-1 lg:h-full lg:w-6"><div class="absolute h-6 w-6 rounded-full bg-layer4 -left-2 lg:!-left-3 lg:-top-2"></div><div class="absolute h-6 w-6 rounded-full bg-layer4 lg:-bottom-4 lg:-left-3">'
);
const sl = () => {
  const { store: e } = W();
  return (() => {
    var o = rl(),
      d = o.firstChild,
      c = d.firstChild,
      i = c.firstChild,
      a = i.firstChild,
      r = a.firstChild,
      l = r.firstChild,
      u = r.nextSibling,
      p = u.firstChild,
      k = u.nextSibling,
      T = a.nextSibling,
      v = T.firstChild,
      x = v.firstChild,
      m = v.nextSibling,
      f = m.firstChild,
      b = m.nextSibling,
      _ = i.nextSibling,
      h = _.firstChild,
      $ = h.firstChild,
      C = $.firstChild,
      y = $.nextSibling,
      E = y.firstChild,
      w = y.nextSibling;
    return (
      t(u, () => s("Total tickets"), p),
      t(k, () => e?.statistics.totalTicket),
      t(m, () => s("Total winning tickets"), f),
      t(b, () => e?.statistics.totalWinningTicket),
      t(y, () => s("Total Prize won"), E),
      t(w, () => U.printCurrency(new j(e?.statistics.totalWinningAmount || 0))),
      t(o, n(el, {}), null),
      M(
        (S) => {
          var I = B.tickets,
            D = B.hat,
            P = B.coin;
          return (
            I !== S.e && N(l, "src", (S.e = I)),
            D !== S.t && N(x, "src", (S.t = D)),
            P !== S.a && N(C, "src", (S.a = P)),
            S
          );
        },
        { e: void 0, t: void 0, a: void 0 }
      ),
      o
    );
  })();
};
var il = g("<div class=mt-3>"),
  al = g(
    '<div class="bg-layer4 p-3 rounded-lg10 lg:!px-6"><div class="mb-3 text-center text-xl font-semibold text-primary mt-6 lg:!mt-2"><span></span></div><div class="result-table-wrap texxt-sm text-secondary"><div class="flex justify-between border-b border-solid border-third pb-2.5"><div class=w-12>No.</div><div class="w-28 text-left lg:w-40"></div><div class="text-center w-28 lg:w-72"></div><div class="w-28 text-right lg:w-72">'
  ),
  ol = g(
    '<div class="border-solid text-sm font-semibold text-secondary mt-2.5 border-t border-third pt-2.5"><p></p><div class="center justify-start"><img class=w-8 alt=ticket><p></p><p class="font-extrabold text-primary ml-1.5">'
  ),
  cl = g(
    '<div class="flex justify-between border-b border-solid center border-white_alpha10 pb-2"><p class=text-secondary>:</p><div class="text-sm font-semibold text-secondary"><div class="center justify-start"><img class=w-8 alt=ticket><p></p><p class="font-extrabold text-primary ml-1.5">'
  ),
  dl = g('<img class="rounded-full mr-2 sm:h-10 sm:w-10"alt="">'),
  ul = g(
    '<div class="flex items-center justify-between border-b border-solid text-primary border-third py-3.5"><div class=w-12></div><div class="w-20 cursor-pointer ellipsis center justify-start lg:w-40"><span class="ellipsis inline-block"></span></div><div class="center w-28 lg:w-72"></div><div class="w-28 text-right lg:w-72"><span class="font-extrabold text-right text-brand">'
  );
const de = () => {
  const { store: e, getUserStatistics: o } = W(),
    d = L(() => e.resultTickets.winnersPageList.list),
    c = L(() =>
      d().length > 0
        ? [...d()].slice().sort((a, r) => a.ranking - r.ranking)
        : []
    );
  q.mobile;
  const i = Pe();
  return n(A, {
    get when() {
      return e.periodIdList.length > 0;
    },
    get fallback() {
      return n(ne, {});
    },
    get children() {
      var a = al(),
        r = a.firstChild,
        l = r.firstChild,
        u = r.nextSibling,
        p = u.firstChild,
        k = p.firstChild,
        T = k.nextSibling,
        v = T.nextSibling,
        x = v.nextSibling;
      return (
        t(
          a,
          (() => {
            var m = L(() => !!q.mobile);
            return () =>
              m()
                ? [
                    n(ee, {
                      onWeekChange: (f) => X(f, 1, 20),
                      get value() {
                        return e.round;
                      },
                      get rounds() {
                        return e.periodIdList;
                      },
                      onlyWinning: !1,
                    }),
                    (() => {
                      var f = ol(),
                        b = f.firstChild,
                        _ = b.nextSibling,
                        h = _.firstChild,
                        $ = h.nextSibling,
                        C = $.nextSibling;
                      return (
                        t(
                          b,
                          () =>
                            `${s("Draw time")} ${new Date(
                              e.resultTickets.drawTime
                            ).toLocaleString()}`
                        ),
                        t($, () =>
                          s("Total participated tickets for this round")
                        ),
                        t(C, () => e.resultTickets.totalTicket),
                        M(() => N(h, "src", B.tickets)),
                        f
                      );
                    })(),
                  ]
                : (() => {
                    var f = cl(),
                      b = f.firstChild,
                      _ = b.firstChild,
                      h = b.nextSibling,
                      $ = h.firstChild,
                      C = $.firstChild,
                      y = C.nextSibling,
                      E = y.nextSibling;
                    return (
                      t(
                        f,
                        n(ee, {
                          onWeekChange: (w) => {
                            X(w, 1, 20);
                          },
                          get value() {
                            return e.round;
                          },
                          get rounds() {
                            return e.periodIdList;
                          },
                          onlyWinning: !1,
                        }),
                        b
                      ),
                      t(b, () => s("Draw time"), _),
                      t(
                        b,
                        () =>
                          new Date(e.resultTickets.drawTime).toLocaleString(),
                        null
                      ),
                      t(y, () =>
                        s("Total participated tickets for this round")
                      ),
                      t(E, () => e.resultTickets.totalTicket),
                      M(() => N(C, "src", B.tickets)),
                      f
                    );
                  })();
          })(),
          r
        ),
        t(l, () => s("Winner List")),
        t(T, () => s("Winner Name")),
        t(v, () => s("Ticket Numbers")),
        t(x, () => s("Prize")),
        t(
          u,
          n(A, {
            get when() {
              return !e.roundLoading;
            },
            get fallback() {
              return n(fe, {});
            },
            get children() {
              return n(A, {
                get when() {
                  return c().length > 0;
                },
                get fallback() {
                  return n(ne, {});
                },
                get children() {
                  return [
                    n(V, {
                      get each() {
                        return c();
                      },
                      children: (m) =>
                        (() => {
                          var f = ul(),
                            b = f.firstChild,
                            _ = b.nextSibling,
                            h = _.firstChild,
                            $ = _.nextSibling,
                            C = $.nextSibling,
                            y = C.firstChild;
                          return (
                            t(b, () => `No. ${m.ranking}`),
                            (_.$$click = () => {
                              i(`user/profile/${m.userId}`);
                            }),
                            t(
                              _,
                              n(A, {
                                get when() {
                                  return !q.mobile;
                                },
                                get children() {
                                  var E = dl();
                                  return (
                                    M(() => N(E, "src", ge.avatar(m.userId))), E
                                  );
                                },
                              }),
                              h
                            ),
                            t(h, () => m.userName),
                            t(
                              $,
                              n(ve, {
                                get ticketNumber() {
                                  return m.number;
                                },
                                get ticketStatus() {
                                  return F.WIN;
                                },
                              })
                            ),
                            t(
                              y,
                              () => `+ ${U.printCurrency(new j(m.winning))}`
                            ),
                            f
                          );
                        })(),
                    }),
                    (() => {
                      var m = il();
                      return (
                        t(
                          m,
                          n(me, {
                            get current() {
                              return e.resultTickets.winnersPageList.page;
                            },
                            get total() {
                              return e.resultTickets.winnersPageList.total;
                            },
                            onChange: (f) => X(e.round, f, 20),
                          })
                        ),
                        m
                      );
                    })(),
                  ];
                },
              });
            },
          }),
          null
        ),
        a
      );
    },
  });
};
K(["click"]);
var gl = g(
  '<div class=""><div class=page-tabs></div><div class=tab-item-page-wrap>'
);
const fl = () => {
  const [e, o] = J(0),
    { store: d } = W();
  return (() => {
    var c = gl(),
      i = c.firstChild,
      a = i.nextSibling;
    return (
      t(
        i,
        n(Y, {
          get value() {
            return e();
          },
          onChange: (r) => {
            o(r);
          },
          class: "w-56",
          get children() {
            return [
              n(A, {
                get when() {
                  return G.login;
                },
                get children() {
                  return n(Y.TabItem, {
                    onClick: () => o(0),
                    get title() {
                      return `${s("My Tickets")}${
                        d.periodTicketCount > 0
                          ? " (" + d.periodTicketCount + ")"
                          : ""
                      }`;
                    },
                  });
                },
              }),
              n(Y.TabItem, {
                onClick: () => o(1),
                get title() {
                  return s("Results");
                },
              }),
            ];
          },
        })
      ),
      t(
        a,
        n(A, {
          get when() {
            return e() === 0;
          },
          get children() {
            return n(A, {
              get when() {
                return G.login;
              },
              get fallback() {
                return n(de, {});
              },
              get children() {
                return n(sl, {});
              },
            });
          },
        }),
        null
      ),
      t(
        a,
        n(A, {
          get when() {
            return L(() => !!G.login)() && e() === 1;
          },
          get children() {
            return n(de, {});
          },
        }),
        null
      ),
      c
    );
  })();
};
var ml = g("<div class=py-2.5>");
const bl = () => {
    const { store: e, setStore: o, initFn: d } = W();
    return (
      d(),
      [
        n(Qe, {}),
        (() => {
          var c = ml();
          return (
            t(c, n(pt, {}), null),
            t(c, n(_t, {}), null),
            t(c, n(fl, {}), null),
            t(c, n(At, {}), null),
            t(c, n(Et, {}), null),
            c
          );
        })(),
      ]
    );
  },
  pl = () =>
    n(Ee, {
      get title() {
        return s("WeeklyRaffle");
      },
      get children() {
        return n(bl, {});
      },
    });
export { pl as WeeklyPage, bl as default };
