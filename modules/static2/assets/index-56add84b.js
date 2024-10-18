var Le = (i, u, h) =>
  new Promise((s, r) => {
    var x = (b) => {
        try {
          C(h.next(b));
        } catch (D) {
          r(D);
        }
      },
      _ = (b) => {
        try {
          C(h.throw(b));
        } catch (D) {
          r(D);
        }
      },
      C = (b) => (b.done ? s(b.value) : Promise.resolve(b.value).then(x, _));
    C((h = h.apply(i, u)).next());
  });
import {
  a as xe,
  m as k,
  q as ue,
  B as q,
  e as w,
  _ as gt,
  x as Ne,
  v as ut,
  D as xt,
  l as L,
  A as bt,
  i as N,
  L as ft,
  F as ht,
  n as vt,
  t as ze,
} from "./manifest-6dedd536.js";
import {
  d as wt,
  i as t,
  m as S,
  e as f,
  s as c,
  c as l,
  t as g,
  a as R,
} from "./web-5c332740.js";
import { t as n } from "./i18n-2889c705.js";
import { a as m } from "./index-b50c6100.js";
import {
  l as _t,
  d as $t,
  e as le,
  a as yt,
  o as Ct,
  g as St,
  b as y,
  S as o,
  I as pt,
  f as kt,
  M as Dt,
  c as At,
} from "./solid-js-9508438e.js";
import {
  c as Tt,
  a as jt,
  r as Mt,
  b as Bt,
  d as It,
} from "./index-8bdd9550.js";
import { a as Ue } from "./assetsLogo-7a927bc4.js";
import { h as ie } from "./index-f52ccf1b.js";
import { u as Lt } from "./router-d36109eb.js";
var Nt = g(
    '<div class="fixed top-0 left-0 w-full justify-between center z-[1000] h-16 px-[3%] backdrop-blur-md lg:px-[5%]"><div class=left><img class="cursor-pointer max-h-8 w-auto lg:h-8"alt=""></div><div class=flex>'
  ),
  zt = g(
    '<div class=center><div class="text-sm text-primary font-semibold mr-2.5"></div><img class="h-8 rounded-full w-8"alt="">'
  );
const Ut = () => {
  const i = xe();
  return (() => {
    var u = Nt(),
      h = u.firstChild,
      s = h.firstChild,
      r = h.nextSibling;
    return (
      (s.$$click = () => {
        i("/");
      }),
      t(
        r,
        (() => {
          var x = S(() => !!k.login);
          return () =>
            x()
              ? (() => {
                  var _ = zt(),
                    C = _.firstChild,
                    b = C.nextSibling;
                  return (
                    t(C, () => k.name),
                    f(() => c(b, "src", ue.avatar(k.userId))),
                    _
                  );
                })()
              : [
                  l(q, {
                    class:
                      "text-base border border-solid border-brand mr-2 h-11 w-28 bg-transparent text-alw_white sm:h-12 sm:w-36",
                    onClick: () => {
                      i("/login/signin");
                    },
                    type: "second",
                    get children() {
                      return n("Sign in");
                    },
                  }),
                  l(q, {
                    type: "brand",
                    class:
                      "text-base font-extrabold h-11 w-28 bg-alw_white text-alw_dark sm:h-12 sm:w-36",
                    onClick: () => {
                      i("/login/regist");
                    },
                    get children() {
                      return n("Sign up");
                    },
                  }),
                ];
        })()
      ),
      f(() => c(s, "src", w.mobile ? Ue("/logo_small.png") : Ue("/logo.png"))),
      u
    );
  })();
};
wt(["click"]);
var Pt = g('<label class="text-lg font-semibold text-primary ml-1">$'),
  Rt = g("<img class=h-4>"),
  Et = g(
    '<div><div class=flex><div class="flex w-full items-center min-h-12 min-w-80 sm:w-fit"><img class="w-11 h-11 sm:h-20 sm:w-20"><div class=ml-5><p class="flex items-center gap-2"><label class="text-xl font-extrabold text-alw_white sm:text-3xl"></label><label class="text-xl font-extrabold text-brand sm:text-3xl"></label></p><p class="flex items-center gap-4 sm:mt-3">'
  ),
  Ft = g('<img class="h-10 w-10">'),
  Wt = g('<img class="absolute z-10 -right-[200px] top-[300px] w-[26rem]">'),
  Jt = g("<div class=w-full><img class=w-full>"),
  Ot = g('<img class="absolute bottom-0 h-full -right-52">'),
  Vt = g('<img class="absolute z-10 -right-8 -top-[86px] h-72">'),
  me = g('<th class="py-4 sm:py-9">'),
  Yt = g(
    '<div class="relative z-10 -mt-40 overflow-auto bg-[#000] sm:-mt-[30rem]">'
  ),
  Gt = g(
    '<div class="-mx-4 bg-[#000] pt-14 sm:mx-0 sm:pt-0"><div class="m-auto w-full px-0 sm:max-w-[1440px] sm:px-4"><div><section class="bannber-box flex flex-col items-center justify-between sm:mx-auto sm:flex-row"><div class="mt-8 w-full px-8 sm:mt-20 sm:w-1/2 sm:px-0 sm:!pl-10"><h1 class="font-extrabold text-4xl !capitalize !leading-normal sm:text-7xl"><label class="!bg-clip-text text-brand">$BC</label><label class="ml-2.5 text-alw_white"></label></h1><p class="text-sm font-semibold text-secondary capitalize sm:text-lg sm:text-alw_white"></p></div><div class="banner flex w-full justify-center sm:w-1/2"><img class="mt-4 sm:-mb-16"></div></section><div class="mx-4 mt-6 sm:mx-10"><img><section class="info-box flex flex-col justify-between rounded-xl px-4 py-8 backdrop-blur-md sm:flex-row"><div><section class="flex w-full justify-start sm:w-auto sm:min-w-100"><p class="flex items-center min-w-80 gap-4"><img class=w-10><span><label class="text-lg font-semibold text-secondary !capitalize"></label></span></p></section><section class="flex w-full justify-start sm:w-auto sm:min-w-100"><p class="flex items-center min-w-80 gap-4"><img class=w-10><span><label class="text-lg font-semibold text-secondary !capitalize"></label><label class="text-lg font-semibold text-primary ml-1"></label></span></p></section></div></section></div></div><div class="mx-4 mt-8 flex cursor-pointer items-center justify-between sm:mx-10 sm:mt-14"><label class="text-sm font-semibold text-secondary sm:text-lg"></label></div><div class="relative mx-4 mt-6 bg-[#000] pb-6 sm:mx-10 sm:mt-8"><img class="absolute -left-[250px] -top-[90px] w-[30rem] sm:-left-[200px] sm:-top-[100px]"><section class="latest-wager-box relative rounded-xl z-20 backdrop-blur-[2px] sm:bg-[#151515] sm:p-10 sm:backdrop-blur-md"><h2 class="text-center font-extrabold center gap-3 text-3xl uppercase text-alw_white sm:text-5xl"><img class="h-12 w-12"></h2><div class="chart-box flex flex-col mt-5 items-end gap-10 bg-transparent sm:mt-8 sm:flex-row"><div class="remote-table w-full rounded-xl self-start bg-[rgba(35,38,38,0.7)] sm:w-1/2"></div><div class="line-chart w-full sm:w-1/2"><div class="pr-4 text-right"><label class="text-lg font-semibold text-secondary"></label><label class="text-2xl font-semibold ml-1 text-brand"></label></div></div></div></section><section class="leaderboard-banner relative mt-14 bg-[#000] bg-no-repeat sm:h-100"><div class="leaderboard-left relative z-10 flex h-full w-full flex-col items-center justify-start gap-2 sm:ml-14 sm:w-fit sm:items-start sm:justify-center sm:gap-5"><h2 class="font-extrabold center gap-2.5 text-3xl uppercase text-alw_white sm:text-5xl"><img class="h-12 w-12"></h2><div class="flex rounded-xl border border-input p-2 -mb-10 w-fit sm:-mb-20"><img class="mr-2 h-6 w-6"><p class="text-sm font-semibold text-secondary leading-6"></p></div></div></section><section class="leaderboard-table relative -mt-5 sm:-mt-10"><table class="relative w-full z-20 rounded-b-xl bg-[rgba(21,21,21,0.10)] backdrop-blur-sm sm:backdrop-blur"><thead class="top-0 sticky"><tr class="border-b text-center font-semibold text-secondary h-auto border-[rgba(217,217,217,0.20)] text-xs sm:text-xl sm:font-extrabold"><th class="py-4 w-12 pl-2 sm:w-28 sm:py-9 sm:pl-4"><div></div></th><th class="py-4 sm:py-9"></th><th class="w-20 py-4 pr-2 sm:py-9 sm:pr-4"></th></tr></thead><tbody class=bg-[rgba(21,21,21,0.1)]></tbody></table></section><section class="flex mt-6 justify-end"></section></div><section><img class=w-full loading=lazy>'
  ),
  Ht = g(
    '<label class="block overflow-hidden text-sm font-semibold max-w-20">'
  ),
  qt = g('<td><div class=center><div class="min-w-32 text-right">'),
  Qt = g("<label class=block>+"),
  Kt = g('<img class="h-5 flex-none ml-1">'),
  Xt = g(
    '<tr class="text-center text-sm font-semibold text-secondary h-15 sm:text-lg"><td></td><td><div class="flex items-center justify-end sm:justify-center"><section class="flex gap-1 min-w-40"><img class="h-10 w-10 rounded-full sm:h-6 sm:w-6"><span class="flex flex-col justify-center text-sm text-secondary text-left sm:text-base"><label></label></span></section></div></td><td><div class="flex items-end justify-end text-brand sm:justify-center"><section></section></div></td><td>'
  ),
  ge = g('<img class="mx-auto w-8">'),
  Pe = g('<h3 class="text-lg font-semibold text-[#A4ACAC]">'),
  Zt = g(
    '<div class="flex flex-col gap-1 sm:gap-2"><div class="flex gap-2 font-mono sm:gap-3"><div class="flex flex-col items-center rounded-xl px-2 py-1.5 border-2 border-white_alpha20"><label class="text-2xl font-extrabold text-[#A4ACAC] sm:text-4xl"></label><label class="font-semibold text-xs uppercase text-[#707777] sm:text-base"></label></div><div class="flex items-center rounded-xl border-2 border-white_alpha20 px-1.5"><section class="flex w-11 flex-col items-center sm:w-12"><label class="text-2xl font-extrabold text-[#A4ACAC] sm:text-4xl"></label><label class="font-semibold text-xs uppercase text-[#707777] sm:text-base"></label></section><label class="text-2xl font-extrabold mt-1 self-start text-[#A4ACAC] sm:mt-1.5 sm:text-4xl">:</label><section class="flex w-11 flex-col items-center sm:w-12"><label class="text-2xl font-extrabold text-[#A4ACAC] sm:text-4xl"></label><label class="font-semibold text-xs uppercase text-[#707777] sm:text-base"></label></section><label class="text-2xl font-extrabold mt-1 self-start text-[#A4ACAC] sm:mt-1.5 sm:text-4xl">:</label><section class="flex w-11 flex-col items-center sm:w-12"><label class="text-2xl font-extrabold text-[#A4ACAC] sm:text-4xl"></label><label class="font-semibold text-xs uppercase text-[#707777] sm:text-base">'
  ),
  el = g('<div class="flex -mt-8 gap-3 p-0 sm:mt-10">'),
  tl = g(
    '<div class="flex rounded-xl p-2 mx-auto mt-6 w-96 bg-white_alpha10 sm:ml-0 sm:w-[460px]"><img class="mr-2 h-6 w-6"><p class="text-sm font-semibold text-secondary leading-6">'
  ),
  ll = g('<img class="absolute h-6 -right-0.5 -top-0.5">');
const il = _t(() =>
    gt(
      () => import("./chart-a41432bd.js"),
      [
        "assets/chart-a41432bd.js",
        "assets/web-5c332740.js",
        "assets/solid-js-9508438e.js",
        "assets/manifest-6dedd536.js",
      ]
    )
  ),
  bl = (i) => {
    const u = "/events/mining/twitter",
      h = xe(),
      s = Lt(),
      [r, x] = $t(1),
      [_, { refetch: C }] = le(() => (k.login ? Tt() : { status: 0 }), {
        initialValue: { status: 0, userGantTotalCoin: 0, lastDayGantCoin: 0 },
      }),
      [b, { refetch: D }] = le(jt, {
        initialValue: {
          totalWager: 0,
          signUpUserCount: 0,
          activityStatus: 0,
          startTime: 17277408e5,
          endTime: 17294688e5,
        },
      }),
      [E, { refetch: V }] = le(Mt, {
        initialValue: { totalWager: 0, items: [] },
      }),
      [Q, { refetch: F }] = le(Bt, { initialValue: [] }),
      Y = () =>
        Le(void 0, null, function* () {
          if (!k.login) {
            h("/login/signin");
            return;
          }
          if (b().activityStatus === 2) {
            ze("Activity has ended");
            return;
          }
          yield It(), C(), D(), ze("join success");
        });
    return (
      yt(
        (A) => (A !== void 0 && A !== k.login && (C(), D(), V(), F()), k.login)
      ),
      Ct(() => {
        Ne.start();
      }),
      St(() => {
        Ne.pause(),
          ut("theme", "dark"),
          setInterval(() => {
            V(), F();
          }, 60 * 5e3);
      }),
      l(xt, {
        class: "pt-0 [&>.dialog-title]:hidden",
        get children() {
          var A = Gt(),
            K = A.firstChild,
            X = K.firstChild,
            W = X.firstChild,
            J = W.firstChild,
            d = J.firstChild,
            Ee = d.firstChild,
            Fe = Ee.nextSibling,
            We = d.nextSibling,
            Je = J.nextSibling,
            Oe = Je.firstChild,
            Ve = W.nextSibling,
            be = Ve.firstChild,
            ne = be.nextSibling,
            fe = ne.firstChild,
            he = fe.firstChild,
            Ye = he.firstChild,
            ve = Ye.firstChild,
            we = ve.nextSibling,
            Ge = we.firstChild,
            He = he.nextSibling,
            qe = He.firstChild,
            _e = qe.firstChild,
            Qe = _e.nextSibling,
            $e = Qe.firstChild,
            Ke = $e.nextSibling,
            re = X.nextSibling,
            Xe = re.firstChild,
            ae = re.nextSibling,
            ye = ae.firstChild,
            G = ye.nextSibling,
            Z = G.firstChild,
            Ze = Z.firstChild,
            et = Z.nextSibling,
            ee = et.firstChild,
            Ce = ee.nextSibling,
            tt = Ce.firstChild,
            Se = tt.firstChild,
            lt = Se.nextSibling,
            se = G.nextSibling,
            pe = se.firstChild,
            oe = pe.firstChild,
            it = oe.firstChild,
            nt = oe.nextSibling,
            ke = nt.firstChild,
            rt = ke.nextSibling,
            ce = se.nextSibling,
            De = ce.firstChild,
            Ae = De.firstChild,
            Te = Ae.firstChild,
            je = Te.firstChild,
            at = je.firstChild,
            de = je.nextSibling,
            st = de.nextSibling,
            ot = Ae.nextSibling,
            ct = ce.nextSibling,
            dt = ae.nextSibling,
            mt = dt.firstChild;
          return (
            t(A, l(Ut, {}), K),
            t(
              J,
              l(y, {
                get children() {
                  return l(nl, {
                    get infoData() {
                      return b();
                    },
                  });
                },
              }),
              d
            ),
            t(Fe, () => n("Mining Rush!")),
            t(
              We,
              l(o, {
                get when() {
                  return s.pathname.includes(u);
                },
                get fallback() {
                  return n(
                    "Join The $BC Mining Rush! Bet Daily and Claim Your Share Of A Massive 1 Billion $BC Prize Pool Over The Next 20 Days."
                  );
                },
                get children() {
                  return n(
                    "Join The $BC Mining Rush! Participate Daily and Claim Your Share Of A Massive 1 Billion $BC Prize Pool Over The Next 20 Days."
                  );
                },
              })
            ),
            t(
              J,
              l(y, {
                get children() {
                  return l(o, {
                    get when() {
                      return !w.mobile;
                    },
                    get children() {
                      return l(Re, {
                        get infoData() {
                          return b();
                        },
                        get loginInfoData() {
                          return _();
                        },
                        onJoin: Y,
                      });
                    },
                  });
                },
              }),
              null
            ),
            t(
              W,
              l(y, {
                get children() {
                  return l(o, {
                    get when() {
                      return w.mobile;
                    },
                    get children() {
                      return l(Re, {
                        get infoData() {
                          return b();
                        },
                        get loginInfoData() {
                          return _();
                        },
                        onJoin: Y,
                      });
                    },
                  });
                },
              }),
              null
            ),
            ne.style.setProperty("background-color", "rgba(87, 94, 91, 0.20)"),
            t(
              Ge,
              l(o, {
                get when() {
                  return s.pathname.includes(u);
                },
                get fallback() {
                  return n("Yesterday Total Wager:");
                },
                get children() {
                  return n("Yesterday Total Amount:");
                },
              })
            ),
            t(
              we,
              l(y, {
                get children() {
                  return l(o, {
                    get when() {
                      return b();
                    },
                    get children() {
                      var e = Pt();
                      return (
                        e.firstChild,
                        t(
                          e,
                          () =>
                            new L(b().totalWager || 0)
                              .toNumber()
                              .toLocaleString(),
                          null
                        ),
                        e
                      );
                    },
                  });
                },
              }),
              null
            ),
            t(
              $e,
              l(o, {
                get when() {
                  return s.pathname.includes(u);
                },
                get fallback() {
                  return n("Total registered users:");
                },
                get children() {
                  return n("Total registered participants:");
                },
              })
            ),
            t(
              Ke,
              l(y, {
                get children() {
                  return new L(b().signUpUserCount || 0)
                    .toNumber()
                    .toLocaleString();
                },
              })
            ),
            t(
              ne,
              l(o, {
                get when() {
                  return k.login;
                },
                get children() {
                  var e = Et(),
                    p = e.firstChild,
                    T = p.firstChild,
                    j = T.firstChild,
                    O = j.nextSibling,
                    z = O.firstChild,
                    M = z.firstChild,
                    B = M.nextSibling,
                    U = z.nextSibling;
                  return (
                    t(M, () => n("My Total $BC:")),
                    t(
                      B,
                      l(y, {
                        get children() {
                          return new L(_().userGantTotalCoin || 0)
                            .toNumber()
                            .toLocaleString();
                        },
                      })
                    ),
                    t(
                      U,
                      l(bt, {
                        class:
                          "text-lg font-semibold center gap-1.5 text-brand underline",
                        get href() {
                          return s.pathname.includes(u)
                            ? "/events/mining/mydetails/twitter"
                            : "/events/mining/mydetails";
                        },
                        get children() {
                          return [
                            S(() => n("Detailed data")),
                            (() => {
                              var v = Rt();
                              return f(() => c(v, "src", m.arrow)), v;
                            })(),
                          ];
                        },
                      })
                    ),
                    f(
                      (v) => {
                        var P = N(
                            "mybc-box flex w-full flex-col items-start gap-4 sm:w-3/5 sm:flex-row sm:items-center sm:gap-14",
                            !k.login && !w.mobile
                              ? "justify-end"
                              : "justify-center"
                          ),
                          I = m.myBc;
                        return (
                          P !== v.e && R(e, (v.e = P)),
                          I !== v.t && c(j, "src", (v.t = I)),
                          v
                        );
                      },
                      { e: void 0, t: void 0 }
                    ),
                    e
                  );
                },
              }),
              null
            ),
            t(
              Xe,
              l(o, {
                get when() {
                  return s.pathname.includes(u);
                },
                get fallback() {
                  return n("*The daily wager data is updated every 5 mins.");
                },
                get children() {
                  return n("*The daily Amount data is updated every 5 mins.");
                },
              })
            ),
            t(
              re,
              l(q, {
                class: "h-10 w-14",
                onclick: () => {
                  V(), F();
                },
                get children() {
                  return l(y, {
                    get fallback() {
                      return l(ft, {});
                    },
                    get children() {
                      return l(o, {
                        get when() {
                          return E();
                        },
                        get children() {
                          var e = Ft();
                          return f(() => c(e, "src", m.refresh)), e;
                        },
                      });
                    },
                  });
                },
              }),
              null
            ),
            t(
              ae,
              l(o, {
                get when() {
                  return !w.mobile;
                },
                get children() {
                  var e = Wt();
                  return f(() => c(e, "src", m.rightSide)), e;
                },
              }),
              G
            ),
            Z.style.setProperty(
              "text-shadow",
              "0px 2.325px 2.325px rgba(0, 0, 0, 0.25)"
            ),
            t(
              Z,
              l(o, {
                get when() {
                  return s.pathname.includes(u);
                },
                get fallback() {
                  return n("Latest wager");
                },
                get children() {
                  return n("Latest Amount");
                },
              }),
              null
            ),
            t(
              ee,
              l(o, {
                get when() {
                  return i.latestBet;
                },
                get children() {
                  return l(i.latestBet, { type: "lastBet" });
                },
              })
            ),
            t(
              Se,
              l(o, {
                get when() {
                  return s.pathname.includes(u);
                },
                get fallback() {
                  return `${n("Total Wager")}:`;
                },
                get children() {
                  return n("Total Amount:");
                },
              })
            ),
            t(
              lt,
              l(y, {
                get children() {
                  return [
                    S(() =>
                      new L(E().totalWager || 0).toNumber().toLocaleString()
                    ),
                    "USD",
                  ];
                },
              })
            ),
            t(
              Ce,
              l(y, {
                get children() {
                  return l(il, {
                    get data() {
                      return E().items;
                    },
                  });
                },
              }),
              null
            ),
            t(oe, () => n("Daily Leaderboard"), null),
            t(rt, () => n("Valid data will be counted starting October 1st.")),
            t(
              pe,
              l(o, {
                get when() {
                  return w.mobile;
                },
                get children() {
                  var e = Jt(),
                    p = e.firstChild;
                  return f(() => c(p, "src", m.trophyMobile)), e;
                },
              }),
              null
            ),
            t(
              se,
              l(o, {
                get when() {
                  return !w.mobile;
                },
                get children() {
                  var e = Ot();
                  return f(() => c(e, "src", m.trophy)), e;
                },
              }),
              null
            ),
            t(
              ce,
              l(o, {
                get when() {
                  return w.mobile;
                },
                get children() {
                  var e = Vt();
                  return f(() => c(e, "src", m.rightSideMobile)), e;
                },
              }),
              De
            ),
            t(at, () => n("Rank")),
            t(
              Te,
              l(o, {
                get when() {
                  return w.mobile;
                },
                get fallback() {
                  return [
                    (() => {
                      var e = me();
                      return t(e, () => n("User Name")), e;
                    })(),
                    (() => {
                      var e = me();
                      return (
                        t(
                          e,
                          l(o, {
                            get when() {
                              return s.pathname.includes(u);
                            },
                            get fallback() {
                              return `${n("Wager")} (${n("USD")})`;
                            },
                            get children() {
                              return [
                                S(() => n("Amount")),
                                " (",
                                S(() => n("USD")),
                                ")",
                              ];
                            },
                          })
                        ),
                        e
                      );
                    })(),
                  ];
                },
                get children() {
                  var e = me();
                  return (
                    t(
                      e,
                      l(o, {
                        get when() {
                          return s.pathname.includes(u);
                        },
                        get fallback() {
                          return `${n("User Name")}/${n("Wager")} (${n(
                            "USD"
                          )})`;
                        },
                        get children() {
                          return [
                            S(() => n("User Name")),
                            "/",
                            S(() => n("Amount")),
                            " (",
                            S(() => n("USD")),
                            ")",
                          ];
                        },
                      })
                    ),
                    e
                  );
                },
              }),
              de
            ),
            t(de, () => n("$BC Amount")),
            t(st, () => n("Proportion")),
            t(
              ot,
              l(y, {
                get children() {
                  return l(pt, {
                    get each() {
                      return Q().slice((r() - 1) * 20, r() * 20);
                    },
                    children: (e) =>
                      (() => {
                        var p = Xt(),
                          T = p.firstChild,
                          j = T.nextSibling,
                          O = j.firstChild,
                          z = O.firstChild,
                          M = z.firstChild,
                          B = M.nextSibling,
                          U = B.firstChild,
                          v = j.nextSibling,
                          P = v.firstChild,
                          I = P.firstChild,
                          H = v.nextSibling;
                        return (
                          t(
                            T,
                            l(kt, {
                              get children() {
                                return l(Dt, {
                                  get when() {
                                    return e().rank;
                                  },
                                  keyed: !0,
                                  children: (a) =>
                                    a === 1
                                      ? (() => {
                                          var $ = ge();
                                          return (
                                            f(() => c($, "src", m.gold)), $
                                          );
                                        })()
                                      : a === 2
                                      ? (() => {
                                          var $ = ge();
                                          return (
                                            f(() => c($, "src", m.silver)), $
                                          );
                                        })()
                                      : a === 3
                                      ? (() => {
                                          var $ = ge();
                                          return (
                                            f(() => c($, "src", m.bronze)), $
                                          );
                                        })()
                                      : `#${a}`,
                                });
                              },
                            })
                          ),
                          t(U, () => e().userName),
                          t(
                            B,
                            l(o, {
                              get when() {
                                return w.mobile;
                              },
                              get children() {
                                var a = Ht();
                                return (
                                  t(a, () =>
                                    parseFloat(
                                      new L(e().wager || 0).toFixed(2)
                                    ).toLocaleString("en-US", {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    })
                                  ),
                                  a
                                );
                              },
                            }),
                            null
                          ),
                          t(
                            p,
                            l(o, {
                              get when() {
                                return !w.mobile;
                              },
                              get children() {
                                var a = qt(),
                                  $ = a.firstChild,
                                  te = $.firstChild;
                                return (
                                  t(te, () =>
                                    parseFloat(
                                      new L(e().wager || 0).toFixed(2)
                                    ).toLocaleString("en-US", {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    })
                                  ),
                                  f(() =>
                                    R(
                                      a,
                                      N(
                                        e().me
                                          ? "text-alw_white"
                                          : "text-secondary"
                                      )
                                    )
                                  ),
                                  a
                                );
                              },
                            }),
                            v
                          ),
                          t(
                            I,
                            l(o, {
                              get when() {
                                return e().bcCoin !== "-";
                              },
                              get fallback() {
                                return e().bcCoin;
                              },
                              get children() {
                                return [
                                  (() => {
                                    var a = Qt();
                                    return (
                                      a.firstChild,
                                      t(
                                        a,
                                        () =>
                                          new L(e().bcCoin || 0)
                                            .toNumber()
                                            .toLocaleString(),
                                        null
                                      ),
                                      a
                                    );
                                  })(),
                                  (() => {
                                    var a = Kt();
                                    return (
                                      f(() => c(a, "src", ue.coinIcon("BC"))), a
                                    );
                                  })(),
                                ];
                              },
                            })
                          ),
                          t(
                            H,
                            () => `${new L(e().proportion || 0).toFixed(2)}%`
                          ),
                          f(
                            (a) => {
                              var $ = N(
                                  "w-12 pl-2 sm:w-28 sm:pl-4",
                                  e().me && "text-brand"
                                ),
                                te = ue.avatar(e().userId),
                                Me = N(
                                  e().me ? "text-brand" : "text-alw_white"
                                ),
                                Be = N(
                                  "flex items-center gap-1 sm:min-w-36",
                                  e().bcCoin !== "-"
                                    ? "justify-end"
                                    : "w-full justify-center"
                                ),
                                Ie = N(
                                  "w-20 pr-2 sm:pr-4",
                                  e().me ? "text-brand" : "text-secondary"
                                );
                              return (
                                $ !== a.e && R(T, (a.e = $)),
                                te !== a.t && c(M, "src", (a.t = te)),
                                Me !== a.a && R(U, (a.a = Me)),
                                Be !== a.o && R(I, (a.o = Be)),
                                Ie !== a.i && R(H, (a.i = Ie)),
                                a
                              );
                            },
                            {
                              e: void 0,
                              t: void 0,
                              a: void 0,
                              o: void 0,
                              i: void 0,
                            }
                          ),
                          p
                        );
                      })(),
                  });
                },
              })
            ),
            t(
              ct,
              l(ht, {
                class:
                  "[&>.pagination-button]:bg-input_darken [&>.pagination]:bg-input_darken",
                get current() {
                  return r();
                },
                pageSize: 20,
                onChange: (e) => {
                  x(e);
                },
                get total() {
                  var e;
                  return ((e = Q()) == null ? void 0 : e.length) || 0;
                },
              })
            ),
            t(
              A,
              l(o, {
                get when() {
                  return i.footer;
                },
                get children() {
                  var e = Yt();
                  return t(e, l(i.footer, {})), e;
                },
              }),
              null
            ),
            f(
              (e) => {
                var p = w.mobile ? m.bannerTopMobile : m.bannerTop,
                  T = w.mobile ? m.linearMobile : m.linear,
                  j = N(
                    "info-user flex w-full items-center justify-center gap-3 py-5",
                    k.login
                      ? "flex-col sm:w-2/5"
                      : "flex-col sm:w-full sm:flex-row sm:gap-10"
                  ),
                  O = m.wager,
                  z = m.user,
                  M = m.leftSide,
                  B = w.mobile
                    ? "transparent"
                    : "linear-gradient(0deg, rgba(35, 39, 39, 0.30) 0%, rgba(35, 39, 39, 0.30) 100%), rgba(30, 33, 34, 0.20)",
                  U = m.lastwager,
                  v = w.mobile ? "rgba(35, 38, 38, 0.70)" : "transparent",
                  P = m.dailylead,
                  I = m.attention,
                  H = w.mobile ? m.footBannerMobile : m.footBanner;
                return (
                  p !== e.e && c(Oe, "src", (e.e = p)),
                  T !== e.t && c(be, "src", (e.t = T)),
                  j !== e.a && R(fe, (e.a = j)),
                  O !== e.o && c(ve, "src", (e.o = O)),
                  z !== e.i && c(_e, "src", (e.i = z)),
                  M !== e.n && c(ye, "src", (e.n = M)),
                  B !== e.s &&
                    ((e.s = B) != null
                      ? G.style.setProperty("background", B)
                      : G.style.removeProperty("background")),
                  U !== e.h && c(Ze, "src", (e.h = U)),
                  v !== e.r &&
                    ((e.r = v) != null
                      ? ee.style.setProperty("background", v)
                      : ee.style.removeProperty("background")),
                  P !== e.d && c(it, "src", (e.d = P)),
                  I !== e.l && c(ke, "src", (e.l = I)),
                  H !== e.u && c(mt, "src", (e.u = H)),
                  e
                );
              },
              {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0,
                n: void 0,
                s: void 0,
                h: void 0,
                r: void 0,
                d: void 0,
                l: void 0,
                u: void 0,
              }
            ),
            A
          );
        },
      })
    );
  };
function nl(i) {
  const u = At(() => {
      var s, r, x, _;
      return ((s = i == null ? void 0 : i.infoData) == null
        ? void 0
        : s.activityStatus) === 0
        ? (r = i == null ? void 0 : i.infoData) == null
          ? void 0
          : r.startTime
        : ((x = i == null ? void 0 : i.infoData) == null
            ? void 0
            : x.activityStatus) === 1
        ? (_ = i == null ? void 0 : i.infoData) == null
          ? void 0
          : _.endTime
        : 0;
    }),
    h = vt(() => u() || 0);
  return l(y, {
    get children() {
      var s = Zt(),
        r = s.firstChild,
        x = r.firstChild,
        _ = x.firstChild,
        C = _.nextSibling,
        b = x.nextSibling,
        D = b.firstChild,
        E = D.firstChild,
        V = E.nextSibling,
        Q = D.nextSibling,
        F = Q.nextSibling,
        Y = F.firstChild,
        A = Y.nextSibling,
        K = F.nextSibling,
        X = K.nextSibling,
        W = X.firstChild,
        J = W.nextSibling;
      return (
        t(
          s,
          l(o, {
            get when() {
              var d;
              return (
                ((d = i == null ? void 0 : i.infoData) == null
                  ? void 0
                  : d.activityStatus) === 0
              );
            },
            get fallback() {
              return (() => {
                var d = Pe();
                return t(d, () => n("Event end time")), d;
              })();
            },
            get children() {
              var d = Pe();
              return t(d, () => n("Event start time")), d;
            },
          }),
          r
        ),
        t(_, () => {
          var d;
          return ie((d = h()) == null ? void 0 : d.days);
        }),
        t(C, () => n("Days")),
        t(E, () => {
          var d;
          return ie((d = h()) == null ? void 0 : d.hours);
        }),
        t(V, () => n("HR")),
        t(Y, () => {
          var d;
          return ie((d = h()) == null ? void 0 : d.minutes);
        }),
        t(A, () => n("MIN")),
        t(W, () => {
          var d;
          return ie((d = h()) == null ? void 0 : d.seconds);
        }),
        t(J, () => n("SEC")),
        s
      );
    },
  });
}
function Re(i) {
  const u = xe(),
    h = "/events/mining/twitter";
  return l(y, {
    get children() {
      return [
        (() => {
          var s = el();
          return (
            t(
              s,
              l(q, {
                class:
                  "rounded-xl text-base font-extrabold h-14 w-36 text-alw_dark sm:w-56",
                type: "brand",
                onclick: () => {
                  location.pathname === "/events/mining/twitter"
                    ? u("/events/mining/eventdetail/twitter")
                    : u("/events/mining/eventdetail");
                },
                get children() {
                  return n("Event Details");
                },
              }),
              null
            ),
            t(
              s,
              l(q, {
                get class() {
                  var r, x;
                  return N(
                    "relative rounded-xl border-input text-base font-extrabold h-14 w-36 border-2 bg-transparent backdrop-blur-sm sm:w-56",
                    ((r = i == null ? void 0 : i.infoData) == null
                      ? void 0
                      : r.activityStatus) === 2 ||
                      ((x = i == null ? void 0 : i.loginInfoData) == null
                        ? void 0
                        : x.status) === 1
                      ? "text-primary bg-[#556060]"
                      : "text-brand"
                  );
                },
                onclick: () => i.onJoin(),
                get disabled() {
                  var r, x;
                  return (
                    ((r = i == null ? void 0 : i.infoData) == null
                      ? void 0
                      : r.activityStatus) === 2 ||
                    ((x = i == null ? void 0 : i.loginInfoData) == null
                      ? void 0
                      : x.status) === 1
                  );
                },
                get children() {
                  return S(() => {
                    var r;
                    return (
                      ((r = i == null ? void 0 : i.infoData) == null
                        ? void 0
                        : r.activityStatus) === 2
                    );
                  })()
                    ? n("Activity Ended")
                    : S(() => {
                        var r;
                        return (
                          ((r = i == null ? void 0 : i.loginInfoData) == null
                            ? void 0
                            : r.status) === 0
                        );
                      })()
                    ? [
                        S(() => n("Register Now")),
                        (() => {
                          var r = ll();
                          return f(() => c(r, "src", m.hotFlag)), r;
                        })(),
                      ]
                    : n("Registered");
                },
              }),
              null
            ),
            s
          );
        })(),
        (() => {
          var s = tl(),
            r = s.firstChild,
            x = r.nextSibling;
          return (
            t(
              x,
              l(o, {
                get when() {
                  return location.pathname.includes(h);
                },
                get fallback() {
                  return n(
                    "Make sure to click ‘Register Now’ to ensure your wagers count toward the event. Enjoy!"
                  );
                },
                get children() {
                  return n(
                    "Make sure to click ‘Register Now’ to ensure your amount count toward the event. Enjoy!"
                  );
                },
              })
            ),
            f(() => c(r, "src", m.attention)),
            s
          );
        })(),
      ];
    },
  });
}
export { bl as default };
