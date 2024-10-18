var H = (c, a, i) =>
  new Promise((l, o) => {
    var d = (s) => {
        try {
          r(i.next(s));
        } catch (n) {
          o(n);
        }
      },
      m = (s) => {
        try {
          r(i.throw(s));
        } catch (n) {
          o(n);
        }
      },
      r = (s) => (s.done ? l(s.value) : Promise.resolve(s.value).then(d, m));
    r((i = i.apply(c, a)).next());
  });
import {
  r as wt,
  v as Ct,
  g as O,
  c as e,
  a as w,
  b as j,
  e as S,
  h as q,
  i as t,
  m as D,
  t as p,
  k as T,
  p as W,
  j as it,
  n as P,
  F as ot,
  q as Dt,
  d as kt,
  S as ct,
} from "./solid-js-8ff414d5.js";
import {
  c as dt,
  d as Bt,
  e as St,
  b as It,
  a as Lt,
} from "./apis-5c7b35c7.js";
import { b as R, a as Tt } from "./router-290e090e.js";
import { p as h, i as Nt } from "./store-de20ba30.js";
import {
  g as Pt,
  B as X,
  e as ut,
  a as lt,
  i as mt,
} from "./lottery-40ce25b9.js";
import { c as M } from "./index-4d3ecff0.js";
import {
  u as ft,
  c as gt,
  B as N,
  b as Z,
  g as pt,
  j as At,
  k as at,
  e as B,
  d as L,
  l as bt,
  m as xt,
  I as ht,
  n as $t,
  S as Mt,
  L as yt,
  P as jt,
  o as Et,
  p as zt,
  t as Ft,
  T as J,
  f as Rt,
} from "./manifest-987d6c36.js";
import { t as $, T as Ht } from "./i18n-9df4b53a.js";
import { u as qt } from "./store-c334f12e.js";
import { p as U } from "./store-2ed2b91e.js";
import { u as Ot } from "./warning-2b742604.js";
import { I as K } from "./LocalIcon-84e2288f.js";
import { b as Ut } from "./CountryAvatar-9bf00e0a.js";
import { L as V, S as Vt } from "./DrawsSelect-10573c9c.js";
import { A as Qt } from "./ArrowIcon-28af983a.js";
import Gt, { SelectCartContentPc as Jt } from "./SelectCartContent-26bc614e.js";
import Kt from "./index-b286bb5e.js";
import Wt from "./BetSlip-1e41f091.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
import "./_Uint8Array-7783c8b7.js";
import "./Lottery.interface-46896b0b.js";
import "./countries-18533370.js";
import "./usePickNums-c32edd0e.js";
import "./UserInfo-66f81f79.js";
import "./AwardBall-40040934.js";
import "./ball-lose-white-4200dda1.js";
import "./currency-1e153f43.js";
import "./total-tickets-8b01aef3.js";
import "./winner-tickets-4d09dec4.js";
import "./BetSlipContent-999f128e.js";
import "./logo-a74fb622.js";
import "./createSettle-6ac4bfbf.js";
import "./toString-9093e562.js";
const _t = Ct(null);
function Xt(c) {
  const a = R(),
    [i] = O(
      () => a.id,
      function () {
        return H(this, null, function* () {
          return yield dt(a.id);
        });
      }
    );
  return (
    O(function () {
      return H(this, null, function* () {
        const l = yield Bt(Number(a.id)),
          d = (yield St()).sort((r, s) => r.draws - s.draws),
          m = Pt(d, l);
        h.setState("TotalDrawsList", m);
      });
    }),
    e(w, {
      get when() {
        return i();
      },
      children: (l) =>
        e(_t.Provider, {
          value: l,
          get children() {
            return c.children;
          },
        }),
    })
  );
}
function Q() {
  return wt(_t);
}
const Zt = "/modules/lottery2/assets/gift_pop-e71b874a.png";
var Yt = p(
  '<div class="ticket-pop rounded fixed z-10 top-auto bottom-5 w-[calc(100%-32px)] left-1/2 -translate-x-1/2 right-16 flex py-2 pl-1 pr-4 bg-layer3 sm:w-96 sm:bottom-auto sm:top-3 sm:left-auto sm:translate-x-0 sm:right-0 sm:absolute"><img class="gift-img w-auto h-14 mr-2"alt=""loading=lazy><div class="flex justify-between items-center w-full"><div><div class="text-primary text-sm font-semibold"> x</div><div class="time-wrap flex text-sm font-semibold text-secondary">:<div><span>:</span><span>:</span><span>'
);
function te() {
  return Z.login
    ? pt().get("/lottery/giftLottery/available/")
    : Promise.resolve([]);
}
function ee() {
  const [c, a] = j(0),
    i = ft(),
    [l] = O(c, () => te()),
    o = S(() => {
      const r = l();
      return r && r.length > 0 ? r[0].expireTime : 0;
    }),
    d = gt(o),
    m = () => {
      var u, f;
      const r = l() || [],
        s = (u = r[0]) == null ? void 0 : u.giftCode,
        n = (f = r[0]) == null ? void 0 : f.amount;
      i(`/lottery/lottery_claim/${s}/${n}`),
        At.on("received-gift-done", (b) => {
          a(c() + 1);
        });
    };
  return e(w, {
    get when() {
      var r;
      return (r = l()) == null ? void 0 : r.length;
    },
    get children() {
      var r = Yt(),
        s = r.firstChild,
        n = s.nextSibling,
        u = n.firstChild,
        f = u.firstChild,
        b = f.firstChild,
        g = f.nextSibling,
        x = g.firstChild,
        y = x.nextSibling,
        _ = y.firstChild,
        k = _.firstChild,
        I = _.nextSibling,
        v = I.firstChild,
        A = I.nextSibling;
      return (
        q(s, "src", Zt),
        t(f, () => $("Lottery Gift Tickets"), b),
        t(
          f,
          e(w, {
            get when() {
              return l();
            },
            keyed: !0,
            children: (C) => {
              var E;
              return (E = C[0]) == null ? void 0 : E.amount;
            },
          }),
          null
        ),
        t(g, () => $("Expires in"), x),
        t(
          _,
          () => {
            var C;
            return M((C = d()) == null ? void 0 : C.hours);
          },
          k
        ),
        t(
          I,
          () => {
            var C;
            return M((C = d()) == null ? void 0 : C.minutes);
          },
          v
        ),
        t(A, () => {
          var C;
          return M((C = d()) == null ? void 0 : C.seconds);
        }),
        t(
          n,
          e(N, {
            class: "cursor-pointer text-sm font-semibold text-brand",
            onClick: m,
            get children() {
              return [D(() => $("Claim Tickets")), " -", ">"];
            },
          }),
          null
        ),
        r
      );
    },
  });
}
const re = "/modules/lottery2/assets/detail-banner-912dd1fc.png";
var le = p(
    '<section class="banner-instruction flex"><div class="how-to-play-box flex gap-2">'
  ),
  ae = p(
    '<div class="flex justify-between items-center gap-2 w-full sticky py-4 top-0 z-40 bg-layer2 sm:top-[3.75rem] h-[80px]"><div class="flex items-center gap-2"><h1 class="text-primary text-xl font-extrabold"></h1></div><div class="flex gap-2">'
  ),
  se = p(
    '<div class=" bg-layer4 h-10 px-3 mt-3 rounded-xl w-full flex gap-3 justify-between items-center sm:w-[25rem]"><span class="text-sm font-semibold text-secondary"></span><span class="text-sm font-extrabold text-brand">'
  ),
  ne = p('<img class="h-full absolute z-30 top-8 right-0">'),
  ie = p(
    '<div class="flex flex-col gap-2 items-start pb-4 relative"><div class="w-full flex gap-2 justify-between mt-3 sm:justify-start"><span class="text-sm font-semibold text-secondary"></span><span class="text-sm font-semibold text-primary">'
  ),
  st = p(
    '<svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"><path d="M7.59192 13.0004L4.86962 14.4953C4.44121 14.7301 3.91174 14.5587 3.68686 14.1113C3.59719 13.9334 3.56635 13.7292 3.59861 13.531L4.11859 10.3648C4.16746 10.068 4.07305 9.76527 3.86667 9.55518L1.66435 7.31305C1.31802 6.96026 1.3109 6.38102 1.64869 6.01931C1.78343 5.87512 1.95945 5.78147 2.15017 5.75273L5.19366 5.29093C5.47879 5.24782 5.7255 5.06053 5.85312 4.79048L7.21427 1.91016C7.42824 1.45727 7.95344 1.27097 8.38754 1.49444C8.56024 1.58363 8.70019 1.7293 8.78559 1.91016L10.1467 4.79048C10.2744 5.06053 10.5211 5.24782 10.8062 5.29093L13.8497 5.75273C14.3284 5.82557 14.66 6.28985 14.5908 6.78981C14.5632 6.989 14.4731 7.17283 14.3355 7.31355L12.1332 9.55567C11.9268 9.76576 11.8324 10.0685 11.8813 10.3653L12.4012 13.5315C12.4828 14.0295 12.1626 14.5022 11.6858 14.5879C11.496 14.6221 11.3006 14.5894 11.1302 14.4958L8.40794 13.0009C8.1527 12.8606 7.84811 12.8606 7.59287 13.0009L7.59192 13.0004Z">'
  ),
  oe = p('<label class="text-primary text-sm font-extrabold ml-1">'),
  ce = p('<label class="text-primary text-sm font-extrabold ml-1">?'),
  de = p('<label class="text-title font-bold">__number__'),
  nt = p(
    '<div class=next-time><span class="text-sm font-semibold text-secondary">'
  ),
  ue = p(
    '<div class="w-full flex gap-2 justify-between mt-3 sm:justify-start"><span class="text-sm font-semibold text-secondary"></span><div class="text-sm font-semibold text-primary"><span>d:</span><span>h:</span><span>m:</span><span>s'
  );
function me() {
  const c = Q(),
    a = R(),
    i = ft(),
    { store: l, setStore: o } = qt();
  at.getHostType(B.host);
  const d = S(
      () =>
        l.favourteLotteries.findIndex(
          (s) => String(s.lotteryId) === String(c().period.lotteryId)
        ) > -1
    ),
    m = (r, s) =>
      H(this, null, function* () {
        if (!Z.login) {
          i("/login/signin");
          return;
        }
        const n = s
          ? l.favourteLotteries.filter((f) => f.lotteryId !== r.lotteryId)
          : [...l.favourteLotteries, r];
        o(U((f) => (f.favourteLotteries = n))),
          yield It(String(r.lotteryId), !s);
        const u = yield Lt();
        o(U((f) => (f.favourteLotteries = u)));
      });
  return e(w, {
    get when() {
      return c();
    },
    children: (r) => [
      (() => {
        var s = ae(),
          n = s.firstChild,
          u = n.firstChild,
          f = n.nextSibling;
        return (
          t(
            n,
            e(Ut, {
              get country() {
                return D(() => {
                  var b;
                  return (
                    ((b = r()) == null
                      ? void 0
                      : b.lotteryInfo.id.toString()) === "0"
                  );
                })()
                  ? "Bc"
                  : r().lotteryInfo.country;
              },
            }),
            u
          ),
          t(u, () => at.replaceHostName(r().period.lotteryName, B.host)),
          t(
            n,
            (() => {
              var b = D(() => !B.mobile);
              return () =>
                b() &&
                e(N, {
                  type: "second",
                  class: "w-8 h-8 center rounded-md cursor-pointer",
                  onClick: () => m(r().period, d()),
                  get children() {
                    var g = st();
                    return (
                      T(() =>
                        q(g, "class", L(d() ? "fill-brand" : "fill-secondary"))
                      ),
                      g
                    );
                  },
                });
            })(),
            null
          ),
          t(
            f,
            (() => {
              var b = D(() => !!B.mobile);
              return () =>
                b() &&
                e(N, {
                  type: "second",
                  class: "w-8 h-8 center rounded-md cursor-pointer",
                  onClick: () => m(r().period, d()),
                  get children() {
                    var g = st();
                    return (
                      T(() =>
                        q(g, "class", L(d() ? "fill-brand" : "fill-secondary"))
                      ),
                      g
                    );
                  },
                });
            })(),
            null
          ),
          t(
            f,
            e(w, {
              get when() {
                return a.id === "0";
              },
              get children() {
                var b = le(),
                  g = b.firstChild;
                return (
                  t(
                    g,
                    e(N, {
                      type: "second",
                      onClick: () => {
                        var x;
                        return i(
                          `/lottery/lottery_fairness/${
                            (x = r().period) == null ? void 0 : x.drawEventId
                          }`
                        );
                      },
                      class:
                        "cursor-pointer rounded-lg w-8 h-8 sm:w-auto sm:rounded-md",
                      get children() {
                        return [
                          e(K, {
                            name: "ProvablyFair",
                            class: "fill-current w-4 h-4",
                            viewBox: "0 0 16 16",
                          }),
                          D(
                            () =>
                              D(() => !B.mobile)() &&
                              (() => {
                                var x = oe();
                                return t(x, () => $("Provably Fair")), x;
                              })()
                          ),
                        ];
                      },
                    }),
                    null
                  ),
                  t(
                    g,
                    e(N, {
                      type: "second",
                      onClick: () => {
                        var x;
                        return i(
                          `/lottery/lottery_faq/${
                            (x = r().period) == null ? void 0 : x.drawEventId
                          }`
                        );
                      },
                      class:
                        "cursor-pointer rounded-lg w-8 h-8 sm:w-auto sm:rounded-md",
                      get children() {
                        return [
                          e(K, {
                            name: "HowToPlay",
                            class: "fill-current w-4 h-4",
                            viewBox: "0 0 16 16",
                          }),
                          D(
                            () =>
                              D(() => !B.mobile)() &&
                              (() => {
                                var x = ce(),
                                  y = x.firstChild;
                                return t(x, () => $("How to play"), y), x;
                              })()
                          ),
                        ];
                      },
                    }),
                    null
                  ),
                  t(b, e(ee, {}), null),
                  b
                );
              },
            }),
            null
          ),
          s
        );
      })(),
      (() => {
        var s = ie(),
          n = s.firstChild,
          u = n.firstChild,
          f = u.nextSibling;
        return (
          t(u, () => $("Next Draw Time")),
          t(f, () =>
            new Date(Number(r().period.drawTime)).toLocaleString("en")
          ),
          t(
            s,
            e(fe, {
              get drawTime() {
                return Number(r().period.drawTime);
              },
            }),
            null
          ),
          t(
            s,
            e(w, {
              get when() {
                return Number(r().lotteryInfo.topPrize) !== 0;
              },
              get children() {
                var b = se(),
                  g = b.firstChild,
                  x = g.nextSibling;
                return (
                  t(g, () => $("Recent winning prize")),
                  t(x, () =>
                    bt.printCurrency(new xt(Number(r().lotteryInfo.topPrize)))
                  ),
                  b
                );
              },
            }),
            null
          ),
          t(
            s,
            e(w, {
              get when() {
                return !B.mobile;
              },
              get children() {
                var b = ne();
                return q(b, "src", re), b;
              },
            }),
            null
          ),
          s
        );
      })(),
    ],
  });
}
const fe = function (a) {
  const { id: i } = R(),
    { store: l } = Ot(),
    o = S(() =>
      i === "0" && l.header.drawnTime ? l.header.drawnTime : a.drawTime
    ),
    d = S(
      () =>
        l.periodId === l.block.periodId && l.block.blockNum > 0 && !l.drawAwrad
    ),
    m = gt(() => o()),
    r = l.block.distBlockNum - l.block.blockNum;
  return e(w, {
    get when() {
      return i === "0" && !l.canBuyTicket;
    },
    get fallback() {
      return (() => {
        var s = ue(),
          n = s.firstChild,
          u = n.nextSibling,
          f = u.firstChild,
          b = f.firstChild,
          g = f.nextSibling,
          x = g.firstChild,
          y = g.nextSibling,
          _ = y.firstChild,
          k = y.nextSibling,
          I = k.firstChild;
        return (
          t(n, () => $("Next Draw Starts in")),
          t(
            f,
            () => {
              var v;
              return M((v = m()) == null ? void 0 : v.days);
            },
            b
          ),
          t(
            g,
            () => {
              var v;
              return M((v = m()) == null ? void 0 : v.hours);
            },
            x
          ),
          t(
            y,
            () => {
              var v;
              return M((v = m()) == null ? void 0 : v.minutes);
            },
            _
          ),
          t(
            k,
            () => {
              var v;
              return M((v = m()) == null ? void 0 : v.seconds);
            },
            I
          ),
          s
        );
      })();
    },
    get children() {
      return e(w, {
        get when() {
          return d();
        },
        get fallback() {
          return (() => {
            var s = nt(),
              n = s.firstChild;
            return t(n, () => $("Next Round Open in a few minutes")), s;
          })();
        },
        get children() {
          var s = nt(),
            n = s.firstChild;
          return (
            t(
              n,
              e(Ht, {
                i18nKey: "lottery.remaining.blocks",
                number: r,
                get children() {
                  return ["Lottery Draw Remaining ", de(), " Blocks"];
                },
              })
            ),
            s
          );
        },
      });
    },
  });
};
var ge = p(
    '<div class="bg-layer2 p-3 rounded-lg"><h2 class="text-primary text-sm font-extrabold"></h2><div class="flex justify-between text-sm my-4"><div class="center text-text cursor-pointer"><span class="text-secondary text-sm font-extrabold"></span></div><div class="cursor-pointer flex items-center gap-1"><span class="text-brand text-sm font-extrabold"></span></div></div><div>'
  ),
  pe = p(
    '<div class="balls-wrap mt-4"><h2 class="text-primary text-sm font-extrabold"></h2><div>'
  );
function be(c) {
  const a = Q(),
    i = S(() => c.marketId === X.AdditionalDrum),
    l = S(() => ut(h.state.BetItem.selectedData.name)),
    o = S(() => a().lotteryInfo.bonusBall),
    d = () => {
      const u = Array.from(
        { length: a().lotteryInfo.ballRange },
        (f, b) => b + 1
      );
      h.setState("NormalBallsList", u);
    },
    m = S(() => {
      const u = Array.from(
        { length: a().lotteryInfo.bbEnd - a().lotteryInfo.bbStart + 1 },
        (f, b) => a().lotteryInfo.bbStart + b
      );
      h.setState("BonusBallsList", u);
    });
  it(() => {
    d(), i() && m();
  });
  const r = () => {
      h.setState(
        "BetItem",
        U((u) => {
          (u.selectedDetailData.normalBallList = []),
            (u.selectedDetailData.bonusBallList = []);
        })
      );
    },
    s = () => {
      h.quickPick(l(), "normalBallList"),
        i() && h.quickPick(o(), "bonusBallList");
    },
    n = (u, f) => {
      const b = u === "normalBallList" ? l() : o();
      h.setState(
        "BetItem",
        U((g) => {
          const x = g.selectedDetailData[u].indexOf(f);
          if (x !== -1) g.selectedDetailData[u].splice(x, 1);
          else {
            if (Vt.get(b) === g.selectedDetailData[u].length) return;
            g.selectedDetailData[u].push(f);
          }
          const y =
            lt(g.selectedDetailData.normalBallList.length, l()) *
            lt(g.selectedDetailData.bonusBallList.length, o());
          g.selectedDetailData.betsNumber = y;
        })
      );
    };
  return (() => {
    var u = ge(),
      f = u.firstChild,
      b = f.nextSibling,
      g = b.firstChild,
      x = g.firstChild,
      y = g.nextSibling,
      _ = y.firstChild,
      k = b.nextSibling;
    return (
      t(f, () => $("Choose at least __num__ ball numbers", { num: l() })),
      (g.$$click = r),
      t(g, e(ht, { name: "Delete", class: "mr-1 fill-secondary w-4 h-4" }), x),
      t(x, () => $("Clear All")),
      (y.$$click = s),
      t(
        y,
        e(K, {
          viewBox: "0 0 16 16",
          class: "w-4 h-4 fill-brand",
          name: "QuickPick",
        }),
        _
      ),
      t(_, () => $("Quick Pick")),
      t(
        k,
        e(V, {
          onSelectedChange: (I) => {
            n("normalBallList", I);
          },
          get numbs() {
            return h.state.NormalBallsList;
          },
          get selectLimit() {
            return l();
          },
          inSelect: !0,
          selectMode: "normal",
        })
      ),
      t(
        u,
        (() => {
          var I = D(() => !!i());
          return () =>
            I() &&
            (() => {
              var v = pe(),
                A = v.firstChild,
                C = A.nextSibling;
              return (
                t(A, () => $("Choose Bonus Numbers")),
                t(
                  C,
                  e(V, {
                    onSelectedChange: (E) => {
                      n("bonusBallList", E);
                    },
                    get numbs() {
                      return h.state.BonusBallsList;
                    },
                    get selectLimit() {
                      return o();
                    },
                    inSelect: !0,
                    selectMode: "bonus",
                  })
                ),
                T(() =>
                  P(
                    C,
                    L(
                      "grid gap-x-1.5 gap-y-3 mt-3",
                      B.mobile
                        ? "grid-cols-7"
                        : "grid-cols-[repeat(auto-fill,40px)]"
                    )
                  )
                ),
                v
              );
            })();
        })(),
        null
      ),
      T(() =>
        P(
          k,
          L(
            "grid gap-x-1.5 gap-y-3",
            B.mobile ? "grid-cols-7" : "grid-cols-[repeat(auto-fill,40px)]"
          )
        )
      ),
      u
    );
  })();
}
W(["click"]);
var xe = p("<div><div>"),
  he = p('<span class="text-sm font-semibold">'),
  $e = p('<span class="text-sm font-semibold">x'),
  ye = p(
    '<span class="w-fit flex-none ml-1 text-primary text-sm font-semibold">'
  ),
  _e = p("<div><span>");
const ve = function (c) {
  return (() => {
    var a = xe(),
      i = a.firstChild;
    return (
      t(
        a,
        e(we, {
          get data() {
            return c.data;
          },
        }),
        i
      ),
      t(
        i,
        e(ot, {
          get each() {
            return c.data.oddsList;
          },
          children: (l) => [
            e(N, {
              class:
                "flex-auto flex justify-between items-center w-full h-11 p-3 rounded-lg bg-layer5",
              get type() {
                return h.state.BetItem.selectedData.id === l.id &&
                  h.state.BetItem.marketId === c.data.marketId
                  ? "brand"
                  : void 0;
              },
              onClick: () => {
                const o = h.state.BetItem.selectedData.id,
                  d =
                    o === l.id && c.data.marketId === h.state.BetItem.marketId
                      ? Nt.selectedData
                      : l,
                  m =
                    o === l.id && c.data.marketId === h.state.BetItem.marketId
                      ? 0
                      : c.data.marketId;
                h.setBetItem(d, m);
              },
              get children() {
                return [
                  (() => {
                    var o = he();
                    return t(o, () => l.name), o;
                  })(),
                  (() => {
                    var o = $e(),
                      d = o.firstChild;
                    return t(o, () => l.odds, d), o;
                  })(),
                ];
              },
            }),
            e($t, {
              class: "w-full",
              get when() {
                return (
                  D(
                    () =>
                      h.state.BetItem.selectedData.id === l.id &&
                      h.state.BetItem.marketId === c.data.marketId
                  )() && mt(c.data.marketId)
                );
              },
              get children() {
                return e(be, {
                  get marketId() {
                    return c.data.marketId;
                  },
                });
              },
            }),
          ],
        })
      ),
      T(
        (l) => {
          var o = L("pb-4", B.mobile && "bg-transparent"),
            d = L("flex flex-wrap gap-2");
          return o !== l.e && P(a, (l.e = o)), d !== l.t && P(i, (l.t = d)), l;
        },
        { e: void 0, t: void 0 }
      ),
      a
    );
  })();
};
function we(c) {
  let a;
  const [i, l] = j(!1),
    [o, d] = j(!1);
  return (
    it(() => {
      const m = a && a.clientHeight,
        r = a && a.scrollHeight;
      l(m !== r);
    }),
    (() => {
      var m = _e(),
        r = m.firstChild,
        s = a;
      return (
        typeof s == "function" ? Dt(s, r) : (a = r),
        t(r, () => c.data.additional),
        t(
          m,
          e(w, {
            get when() {
              return i();
            },
            get children() {
              var n = ye();
              return (
                (n.$$click = () => d(!o())),
                t(
                  n,
                  (() => {
                    var u = D(() => !!o());
                    return () => (u() ? $("Less") : $("More"));
                  })()
                ),
                n
              );
            },
          }),
          null
        ),
        T(
          (n) => {
            var u = L("flex overflow-hidden mb-4", o() && "!block"),
              f = L(
                "line-clamp-1 text-ellipsis text-secondary text-sm font-semibold",
                o() && "inline"
              );
            return (
              u !== n.e && P(m, (n.e = u)), f !== n.t && P(r, (n.t = f)), n
            );
          },
          { e: void 0, t: void 0 }
        ),
        m
      );
    })()
  );
}
W(["click"]);
var Ce = p('<div><div class="flex flex-col pb-40 flex-1">'),
  De = p(
    '<div class="bg-layer4 rounded-b-xl last:mb-0 pb-4 px-4"><div class=" bg-layer2 sticky top-[7.25rem] sm:!top-[11.25rem] pt-4 z-10 -mx-4 cursor-pointer"><div><p class="text-primary text-base font-extrabold">'
  );
function ke() {
  const c = Q();
  return e(w, {
    get when() {
      return c();
    },
    children: (a) =>
      (() => {
        var i = Ce(),
          l = i.firstChild;
        return (
          t(
            l,
            e(ot, {
              get each() {
                return a().marketList;
              },
              children: (o) => e(Be, { data: o }),
            })
          ),
          t(
            i,
            e(w, {
              get when() {
                return !B.mobile;
              },
              get children() {
                return e(Jt, {});
              },
            }),
            null
          ),
          T(() => P(i, L(!B.mobile && "flex gap-2.5"))),
          i
        );
      })(),
  });
}
function Be(c) {
  const [a, i] = j(0),
    l = Tt(),
    o = Q();
  return (
    kt(() => {
      if (l[0].type) {
        const d = o().marketList.find((m) => m.marketId === X.Standard);
        d &&
          (h.setBetItem(d.oddsList[Number(l[0].type) - 1], d.marketId),
          i(Number(d == null ? void 0 : d.marketId)));
      }
    }),
    (() => {
      var d = De(),
        m = d.firstChild,
        r = m.firstChild,
        s = r.firstChild;
      return (
        (m.$$click = () => {
          i((n) => (n === c.data.marketId ? 0 : c.data.marketId));
        }),
        t(s, () => c.data.name),
        t(
          r,
          e(Qt, {
            get isRotate() {
              return c.data.marketId === a();
            },
          }),
          null
        ),
        t(
          d,
          e($t, {
            get when() {
              return c.data.marketId === a();
            },
            get children() {
              return e(ve, {
                get data() {
                  return c.data;
                },
              });
            },
          }),
          null
        ),
        T(() =>
          P(
            r,
            L(
              "flex justify-between items-center rounded-t-xl bg-layer4 px-4 pt-4",
              c.data.marketId === a() && "pb-4"
            )
          )
        ),
        d
      );
    })()
  );
}
W(["click"]);
var Se = p('<div class="pb-4 bg-layer4 rounded-xl">'),
  Ie = p('<div class="bg-layer4 rounded-xl"><section class="my-3 mx-4">'),
  Le = p('<label class="text-primary text-sm font-semibold truncate">: '),
  Te = p('<label class="text-primary text-sm font-semibold">'),
  Ne = p('<div class="center h-[400px] w-full">'),
  Pe = p(
    '<table class=w-full><thead class=text-left><tr class="border-b border-third text-secondary font-semibold text-xs"><th class="pl-3 py-2 text-secondary font-semibold"></th><th class="text-right pr-3 py-2 text-secondary font-semibold"></th></tr></thead><tbody>'
  ),
  Ae = p(
    '<tr class="border-b border-third last:border-none"><td class="pl-3 py-2"><div class="text-primary font-semibold text-sm"></div><div class="text-secondary font-semibold text-sm"></div></td><td class="px-2 py-3 text-right">'
  ),
  Me = p('<div class="w-full flex flex-wrap justify-end gap-2">'),
  je = p(
    '<div class="cancel-status text-primary font-semibold text-sm text-right">'
  );
function Ee() {
  const { id: c } = R(),
    [a, i] = j(1),
    [l, o] = j("DESC"),
    d = ["DESC", "ASC"],
    m = { DESC: () => $("Draw Date Down"), ASC: () => $("Draw Date Up") },
    r = S(() => ({ page: a(), sort: l() })),
    s = () =>
      H(this, null, function* () {
        return yield pt().post("/platform-lottery/lottery-detail/history", {
          lotteryId: c,
          pageSize: 10,
          page: a(),
          sortBy: "DRAW_DATE",
          sort: l(),
        });
      }),
    [n, { refetch: u }] = O(r, s),
    f = (g) => {
      o(g);
    },
    b = () => d.find((x) => x === l()) || d[0];
  return (() => {
    var g = Ie(),
      x = g.firstChild;
    return (
      t(
        x,
        e(Mt, {
          class: "w-full bg-input_bright",
          get value() {
            return b();
          },
          options: d,
          onChange: f,
          labelFormat: (y) =>
            (() => {
              var _ = Le(),
                k = _.firstChild;
              return t(_, () => $("Sort By"), k), t(_, () => m[y()](), null), _;
            })(),
          children: (y) =>
            (() => {
              var _ = Te();
              return t(_, () => m[y()]()), _;
            })(),
        })
      ),
      t(
        g,
        e(ct, {
          get fallback() {
            return (() => {
              var y = Ne();
              return t(y, e(yt, { class: "text-green-400" })), y;
            })();
          },
          get children() {
            var y = Se();
            return (
              t(
                y,
                e(w, {
                  get when() {
                    return n();
                  },
                  children: (_) => [
                    (() => {
                      var k = Pe(),
                        I = k.firstChild,
                        v = I.firstChild,
                        A = v.firstChild,
                        C = A.nextSibling,
                        E = I.nextSibling;
                      return (
                        t(A, () => $("Lottery Issue")),
                        t(C, () => $("Jackpot Numbers")),
                        t(E, () =>
                          _().list.map((z, Ge) =>
                            (() => {
                              var Y = Ae(),
                                tt = Y.firstChild,
                                et = tt.firstChild,
                                vt = et.nextSibling,
                                rt = tt.nextSibling;
                              return (
                                t(et, () => z.drawEventId),
                                t(vt, () =>
                                  new Date(Number(z.drawTime)).toLocaleString(
                                    "en"
                                  )
                                ),
                                t(
                                  rt,
                                  (() => {
                                    var G = D(() => z.status !== 60);
                                    return () =>
                                      G() &&
                                      (() => {
                                        var F = Me();
                                        return (
                                          t(
                                            F,
                                            e(V, {
                                              class: "w-6 h-6 text-xs",
                                              get numbs() {
                                                return z.normalBall
                                                  .toString()
                                                  .split(",");
                                              },
                                              inSelect: !1,
                                              selectMode: "normal",
                                            }),
                                            null
                                          ),
                                          t(
                                            F,
                                            e(V, {
                                              class: "w-6 h-6 text-xs",
                                              get numbs() {
                                                return z.bonusBall
                                                  .toString()
                                                  .split(",");
                                              },
                                              inSelect: !1,
                                              selectMode: "bonus",
                                            }),
                                            null
                                          ),
                                          F
                                        );
                                      })();
                                  })(),
                                  null
                                ),
                                t(
                                  rt,
                                  (() => {
                                    var G = D(() => z.status === 60);
                                    return () =>
                                      G() &&
                                      (() => {
                                        var F = je();
                                        return (
                                          t(F, () =>
                                            $("cancelled").toUpperCase()
                                          ),
                                          F
                                        );
                                      })();
                                  })(),
                                  null
                                ),
                                Y
                              );
                            })()
                          )
                        ),
                        k
                      );
                    })(),
                    e(jt, {
                      class: "justify-end pt-4 mr-4",
                      get total() {
                        return _().total || 0;
                      },
                      get current() {
                        return a();
                      },
                      onChange: (k) => {
                        i(k);
                      },
                    }),
                  ],
                })
              ),
              y
            );
          },
        }),
        null
      ),
      g
    );
  })();
}
var ze = p('<img class="w-3 h-3"loading=lazy>'),
  Fe = p(
    '<div class="flex justify-between fixed bottom-0 left-0 right-0 z-40 bg-layer4 border border-solid border-input p-4"><section class="flex flex-col"><h1 class="text-sm font-semibold text-secondary"></h1><h2 class="text-sm font-extrabold text-primary flex items-center gap-1"></h2></section><section class=flex>'
  ),
  Re = p("<label>--");
function He() {
  const c = R(),
    a = S(() => {
      const {
          betAmount: m,
          draws: r,
          betsNumber: s,
        } = h.state.BetItem.selectedDetailData,
        n = r >= 10 ? 0.9 : r >= 4 ? 0.95 : 1;
      return h.state.BetItem.selectedData.name
        ? (1e3 * m * r * s * n) / 1e3
        : 0;
    }),
    [i] = O(c.id, dt),
    l = S(() => h.state.BetItem.marketId === X.AdditionalDrum),
    o = S(() => ut(h.state.BetItem.selectedData.name)),
    d = S(() => {
      var m, r;
      return (r = (m = i()) == null ? void 0 : m.lotteryInfo) == null
        ? void 0
        : r.bonusBall;
    });
  return (() => {
    var m = Fe(),
      r = m.firstChild,
      s = r.firstChild,
      n = s.nextSibling,
      u = r.nextSibling;
    return (
      t(s, () => $("Total Bet Amount")),
      t(
        n,
        e(w, {
          get when() {
            return a();
          },
          get fallback() {
            return Re();
          },
          get children() {
            return [
              D(() => bt.printCurrency(new xt(a()))),
              (() => {
                var f = ze();
                return (
                  T(() => q(f, "src", Et.coinIcon(Z.setting.currencyName))), f
                );
              })(),
            ];
          },
        })
      ),
      t(
        u,
        e(N, {
          get disabled() {
            return !a();
          },
          class: "center gap-1 mr-4 text-brand font-extrabold text-base",
          onClick: () => {
            zt.push(Gt);
          },
          get children() {
            return [
              D(() => $("Details")),
              e(ht, { name: "Arrow", class: "w-5 rotate-90" }),
            ];
          },
        }),
        null
      ),
      t(
        u,
        e(N, {
          type: "brand",
          class: "rounded-xl",
          get disabled() {
            return !a();
          },
          onClick: () => {
            var b;
            mt(h.state.BetItem.marketId) &&
              h.state.BetItem.selectedDetailData.normalBallList.length === 0 &&
              (h.quickPick(o(), "normalBallList"),
              h.state.BetItem.selectedDetailData.bonusBallList.length === 0 &&
                l() &&
                h.quickPick(d(), "bonusBallList")),
              h.addBetList((b = i()) == null ? void 0 : b.period) &&
                Ft($("BetSlip Updated"));
          },
          get children() {
            return $("Add Bet");
          },
        }),
        null
      ),
      m
    );
  })();
}
var qe = p(
  '<div class="h-0 sticky z-20 top-[80px] sm:top-[8.75rem]"><div class="h-14 bg-layer2">'
);
const Oe = function () {
    const [a, i] = j(0),
      l = (o) => {
        i(o);
      };
    return [
      qe(),
      e(J, {
        class:
          "rounded-xl sticky top-[80px] z-20 sm:top-[8.75rem] sm:w-[25rem]",
        onChange: l,
        get value() {
          return a();
        },
        get children() {
          return [
            e(J.TabItem, {
              class: "bg-transparent flex-1 mt-0",
              get title() {
                return $("Buy Lottery");
              },
              get children() {
                return e(ke, {});
              },
            }),
            e(J.TabItem, {
              class: "bg-transparent flex-1 mt-4",
              get title() {
                return $("Results");
              },
              get children() {
                return e(Ee, {});
              },
            }),
          ];
        },
      }),
      e(w, {
        get when() {
          return a() === 0 && B.mobile;
        },
        get children() {
          return e(He, {});
        },
      }),
    ];
  },
  Ue = Oe;
var Ve = p('<div class="lottery-box bg-layer2 flex flex-col">'),
  Qe = p('<div class="absolute left-1/2 mt-60">');
function Tr() {
  const c = R();
  return e(Rt, {
    get title() {
      return $("Lottery Detail");
    },
    get children() {
      var a = Ve();
      return (
        t(
          a,
          e(ct, {
            get fallback() {
              return (() => {
                var i = Qe();
                return t(i, e(yt, { class: "text-green-400" })), i;
              })();
            },
            get children() {
              return e(Xt, {
                get children() {
                  return [
                    e(me, {}),
                    e(w, {
                      get when() {
                        return c.id === "0";
                      },
                      get children() {
                        return e(Kt, {});
                      },
                    }),
                    e(w, {
                      get when() {
                        return c.id !== "0";
                      },
                      get children() {
                        return e(Ue, {});
                      },
                    }),
                  ];
                },
              });
            },
          }),
          null
        ),
        t(a, e(Wt, {}), null),
        a
      );
    },
  });
}
export { Tr as default };
