var ot = Object.defineProperty,
  ct = Object.defineProperties;
var dt = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var ut = Object.prototype.hasOwnProperty,
  mt = Object.prototype.propertyIsEnumerable;
var H = (t, i, a) =>
    i in t
      ? ot(t, i, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[i] = a),
  V = (t, i) => {
    for (var a in i || (i = {})) ut.call(i, a) && H(t, a, i[a]);
    if (q) for (var a of q(i)) mt.call(i, a) && H(t, a, i[a]);
    return t;
  },
  W = (t, i) => ct(t, dt(i));
var P = (t, i, a) =>
  new Promise((c, r) => {
    var p = (y) => {
        try {
          $(a.next(y));
        } catch (_) {
          r(_);
        }
      },
      h = (y) => {
        try {
          $(a.throw(y));
        } catch (_) {
          r(_);
        }
      },
      $ = (y) => (y.done ? c(y.value) : Promise.resolve(y.value).then(p, h));
    $((a = a.apply(t, i)).next());
  });
import {
  p as O,
  i as e,
  c as s,
  h as z,
  a as C,
  k as X,
  n as J,
  m as F,
  t as v,
  S as bt,
  P as ft,
  e as M,
  b as U,
  j as xt,
  o as gt,
  F as K,
  w as pt,
  M as Q,
  x as ht,
} from "./solid-js-8ff414d5.js";
import {
  u as T,
  d as Z,
  e as G,
  f as yt,
  L as $t,
  F as vt,
  B as R,
  j as _t,
  I as wt,
  G as St,
  l as Bt,
  b as Ct,
  g as E,
  t as j,
} from "./manifest-987d6c36.js";
import { p as o } from "./store-de20ba30.js";
import { t as at } from "./index-4d3ecff0.js";
import { L as tt, D as Dt, B as It } from "./DrawsSelect-10573c9c.js";
import { b as kt } from "./lottery-40ce25b9.js";
import { I as Y } from "./LocalIcon-84e2288f.js";
import { t as m } from "./i18n-9df4b53a.js";
import { c as At } from "./countries-18533370.js";
import { B as et } from "./Lottery.interface-46896b0b.js";
import { p as Lt } from "./store-2ed2b91e.js";
import { b as Nt } from "./logo-a74fb622.js";
import { c as Tt } from "./createSettle-6ac4bfbf.js";
import "./_Uint8Array-7783c8b7.js";
import "./_MapCache-9c96b8d5.js";
import "./isObject-909534d5.js";
import "./apis-5c7b35c7.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./toString-9093e562.js";
var Pt = v('<div><label class=font-bold>%</label><label class="">'),
  jt = v(
    '<div><div class="center flex-none w-10 h-auto rounded-l-xl cursor-pointer bg-layer5 "></div><div class="flex-auto h-auto m-3 text-sm"><div class="flex justify-between mb-3"><div class="w-full flex justify-between"><section class="relative w-[32px] h-[32px] overflow-hidden"><img class="w-[32px] absolute"alt=""loading=lazy></section></div></div><div class=mb-3><h2 class="cursor-pointer font-extrabold text-sm text-primary"></h2></div><div class="mb-3 font-semibold text-sm text-secondary"><span>: </span><span></span></div><div class="flex justify-between mb-3 font-semibold text-sm text-primary"><span></span><span> X</span></div><div class="mb-3 flex flex-col gap-2"><span class="font-semibold text-sm text-secondary"></span></div><div class="mb-3 flex flex-col gap-2"><span class="font-semibold text-sm text-secondary">'
  ),
  Ft = v('<div class="mb-3 flex gap-2 flex-wrap">');
function lt(t) {
  const i = T(),
    a = (c) => {
      i(`/lottery/detail/${c}`);
    };
  return (() => {
    var c = jt(),
      r = c.firstChild,
      p = r.nextSibling,
      h = p.firstChild,
      $ = h.firstChild,
      y = $.firstChild,
      _ = y.firstChild,
      w = h.nextSibling,
      S = w.firstChild,
      D = w.nextSibling,
      I = D.firstChild,
      k = I.firstChild,
      A = I.nextSibling,
      L = D.nextSibling,
      n = L.firstChild,
      u = n.nextSibling,
      l = u.firstChild,
      b = L.nextSibling,
      d = b.firstChild,
      g = b.nextSibling,
      B = g.firstChild;
    return (
      (r.$$click = () => {
        const f = o.state.Betlist.filter((x) => x.id !== t.data.id);
        o.setState("Betlist", f);
      }),
      e(r, s(Y, { name: "Close", class: "fill-secondary" })),
      z(_, "src", At),
      e(
        $,
        s(C, {
          get when() {
            return t.data.betItem.selectedDetailData.discount > 0;
          },
          get children() {
            var f = Pt(),
              x = f.firstChild,
              N = x.firstChild,
              it = x.nextSibling;
            return (
              e(x, () => t.data.betItem.selectedDetailData.discount, N),
              e(it, () => m("OFF")),
              X(() =>
                J(
                  f,
                  Z(
                    "center px-2.5 py-1px bg-[url('/src/assets/lottery/discount-green.png')] bg-no-repeat bg-center bg-[length:100%_100%] text-xs text-white",
                    t.data.betItem.selectedDetailData.discount >= 10 &&
                      "!bg-[url('/src/assets/lottery/discount-yellow.png')]"
                  )
                )
              ),
              f
            );
          },
        }),
        null
      ),
      (S.$$click = () => a(t.data.period.lotteryId)),
      e(S, () => t.data.period.lotteryName),
      e(I, () => m("Draw Date"), k),
      e(A, () => at(Number(t.data.period.drawTime))),
      e(n, () => t.data.betItem.selectedData.name),
      e(u, () => t.data.betItem.selectedData.odds, l),
      e(
        p,
        (() => {
          var f = F(() => {
            var x;
            return !!(
              (x = t.data.betItem.selectedDetailData.normalBallList) != null &&
              x.length
            );
          });
          return () =>
            f() &&
            (() => {
              var x = Ft();
              return (
                e(
                  x,
                  s(tt, {
                    get numbs() {
                      return t.data.betItem.selectedDetailData.normalBallList;
                    },
                    inSelect: !1,
                    selectMode: "normal",
                    class: "w-8 h-8",
                  }),
                  null
                ),
                e(
                  x,
                  s(tt, {
                    get numbs() {
                      return t.data.betItem.selectedDetailData.bonusBallList;
                    },
                    inSelect: !1,
                    selectMode: "bonus",
                    class: "w-8 h-8",
                  }),
                  null
                ),
                x
              );
            })();
        })(),
        b
      ),
      e(d, () => m("Draws")),
      e(
        b,
        s(Dt, {
          get data() {
            return t.data;
          },
        }),
        null
      ),
      e(B, () => m("Bet Amount")),
      e(
        g,
        s(It, {
          get data() {
            return t.data;
          },
        }),
        null
      ),
      X(
        (f) => {
          var x = Z(
              "flex bg-layer4 rounded-xl relative items-stretch mb-3 border border-solid border-third",
              t.data.error && "border-error"
            ),
            N = kt(t.data.period.lotteryCountry, 4 / 3);
          return (
            x !== f.e && J(c, (f.e = x)),
            N !== f.t &&
              ((f.t = N) != null
                ? _.style.setProperty("top", N)
                : _.style.removeProperty("top")),
            f
          );
        },
        { e: void 0, t: void 0 }
      ),
      c
    );
  })();
}
O(["click"]);
const Mt = "/modules/lottery2/assets/vector-90caea33.png";
var zt = v(
    '<div class="closed-icon py-2 px-3 bg-[#FFDED7] text-[#ff5d3a] rounded-3xl">'
  ),
  Ut = v(
    '<div class="flex my-3 relative border border-solid border-third rounded-xl"><div class="center flex-none w-10 h-auto rounded-l-xl cursor-pointer bg-layer5"></div><div class="bet-form flex-auto h-auto p-3 bg-layer4 rounded-r-xl"><div class="bet-form-item mb-3 flex items-start justify-between"><img loading=lazy class="nation-img w-10 h-10 cursor-pointer"alt=nation></div><div class="bet-form-item mb-3 flex items-start justify-between"><h1 class="lottery-title cursor-pointer font-extrabold text-sm text-primary">hhhhhh</h1></div><div class="bet-form-item mb-3 flex items-start gap-1 font-semibold text-sm text-secondary"><span>:</span><span></span></div><div class="bet-form-item mb-3 flex items-start justify-between font-semibold text-sm text-primary"><span> Tickets </span><span> USD'
  );
const st = function (t) {
  const i = (c) => {
      a(`/lottery/detail/${c}`);
    },
    a = T();
  return (() => {
    var c = Ut(),
      r = c.firstChild,
      p = r.nextSibling,
      h = p.firstChild,
      $ = h.firstChild,
      y = h.nextSibling,
      _ = y.firstChild,
      w = y.nextSibling,
      S = w.firstChild,
      D = S.firstChild,
      I = S.nextSibling,
      k = w.nextSibling,
      A = k.firstChild,
      L = A.firstChild,
      n = A.nextSibling,
      u = n.firstChild;
    return (
      (r.$$click = () => {
        o.setState("betBc", { ticketNum: 0 });
      }),
      e(r, s(Y, { name: "Close", class: "close-icon fill-secondary" })),
      ($.$$click = () => {
        var l;
        return i(((l = t.data.period) == null ? void 0 : l.lotteryId) || 0);
      }),
      z($, "src", Nt),
      e(
        h,
        s(C, {
          get when() {
            return t.data.error;
          },
          get children() {
            var l = zt();
            return e(l, () => m("Closed")), l;
          },
        }),
        null
      ),
      (_.$$click = () => i(t.data.period.lotteryId)),
      e(S, () => m("Draw Date"), D),
      e(I, () => {
        var l;
        return at(Number((l = t.data.period) == null ? void 0 : l.drawTime));
      }),
      e(A, () => t.data.ticketNum, L),
      e(n, () => t.data.ticketNum / 10, u),
      c
    );
  })();
};
O(["click"]);
const Et = "/modules/lottery2/assets/bet_success-fabc6867.png";
var Gt = v(
    '<h1 class="text-lg font-extrabold text-primary pt-4 sm:sticky sm:top-0 sm:!pt-0 sm:!bg-layer4 sm:h-15 sm:!leading-[3.75rem] sm:text-center">'
  ),
  Ot = v(
    '<section class="betslip-content flex flex-col pt-4 sm:py-0 pb-96 sm:h-full"><section class="bg-layer2 sticky top-0 z-10">'
  ),
  Rt = v(
    '<div class="flex justify-between"><span></span><span class="text-title font-bold">-$'
  ),
  Yt = v("<span class=text-primary>"),
  qt = v(
    '<div class="flex flex-col text-center mb-3"><span class="text-error text-xs font-semibold"></span><span class="text-primary text-xs font-semibold underline cursor-pointer">'
  ),
  Ht = v(
    '<div class="flex-none text-text text-sm p-4 -mx-4 bg-layer4 bottom-0 fixed w-full sm:!w-[380px] sm:!mx-0"><div class="z-50 mb-5"><h3 class="text-secondary font-semibold text-sm mb-1"></h3></div><div class="flex items-center justify-between mb-2"><span class="text-secondary font-semibold text-sm"></span><span class="text-primary font-semibold text-sm"></span></div><div class="mb-2 hidden"></div><div class="mb-2 flex justify-between"><span class="text-secondary font-semibold text-sm"></span><div class="text-title font-bold"><div class="text-primary font-semibold text-sm"> USD</div></div></div><div class="mb-3 flex items-center justify-end gap-1"><span class="text-secondary font-semibold text-sm">≈ </span><span class="text-secondary font-semibold text-sm"></span></div><div class="w-full mb-2"></div><div class="bet-form-item center button gap-1"><div class="cursor-pointer text-brand font-extrabold text-sm">'
  ),
  Vt = v('<div class="center flex-1">'),
  Wt = v(
    '<div class="mt-8 px-6 pb-2 flex flex-col items-center"><img class="w-12 h-12"alt=""loading=lazy><p class="text-base font-extrabold text-primary mt-8"></p><p class="text-sm font-semibold text-secondary mt-3">'
  ),
  Xt = v(
    '<section class="mt-8 px-6 pb-2 flex flex-col items-center"><img class="w-12 h-12"><h1 class="text-base font-extrabold text-primary mt-8"></h1><p class="text-sm font-semibold text-secondary mt-3">'
  );
function nt() {
  const t = T(),
    i = M(() => o.state.Betlist.length + o.state.betBc.ticketNum),
    a = () => o.state.betBc.ticketNum / 10,
    c = M(() => {
      const n = o.state.Betlist.reduce(
        (u, { betItem: l }) => {
          if (!l.selectedDetailData) return 0;
          const b =
              1e3 *
              l.selectedDetailData.betAmount *
              l.selectedDetailData.draws *
              l.selectedDetailData.betsNumber,
            d = (b * (1 - l.selectedDetailData.discount / 100)) / 1e3,
            g = (b * l.selectedDetailData.discount) / 100 / 1e3;
          return {
            betAmount: u.betAmount + d,
            discountAmount: u.discountAmount + g,
          };
        },
        { discountAmount: 0, betAmount: 0 }
      );
      return (n.betAmount = n.betAmount + a()), n;
    }),
    r = Tt({ amount: () => c().betAmount }),
    [p, h] = U(!1),
    [$, y] = U(0),
    [_, w] = U(5),
    S = () =>
      P(this, null, function* () {
        if (!Ct.login) {
          t("/login/signin");
          return;
        }
        if (r.isInsuAmount()) return null;
        const n = "/platform-lottery/lottery-detail/buy",
          u = "/lottery/five-plus-one/buy/",
          l = {
            payCurrencyName: r.currency().currencyName,
            betInfoList: o.state.Betlist.map((d) => {
              var g;
              return {
                betUid: d.id,
                lotteryId: d.period.lotteryId,
                marketId: d.betItem.marketId,
                marketOddsId:
                  (g = d.betItem.selectedData) == null ? void 0 : g.id,
                draws: d.betItem.selectedDetailData.draws,
                betAmount: d.betItem.selectedDetailData.betAmount,
                ballList: d.betItem.selectedDetailData.normalBallList,
                bonusBallList:
                  d.betItem.selectedDetailData.bonusBallList.map(String),
              };
            }),
          },
          b = W(V({}, o.state.betBc), {
            fromCurrencyName: r.currency().currencyName,
            fromCurrencyAmount: r.rate().mul(a()),
          });
        if (
          (o.state.betBc.ticketNum &&
            E()
              .post(u, b)
              .then((d) => {
                h(!0),
                  o.addBetBc({ ticketNum: 0, lotteryList: [] }),
                  rt(5, w, () => {
                    h(!1), y($() + 1);
                  });
              })
              .catch((d) => {
                j(d.message);
              }),
          o.state.Betlist.length)
        )
          try {
            const d = yield E().post(n, l);
            let g = !1,
              B = !1;
            const f = d.map((x) => {
              if (x.failType === et.Balance) return (g = !0), x.betUid;
              if (x.failType === et.Period) return (B = !0), x.betUid;
            });
            g
              ? j(m("Insufficient balance"))
              : B
              ? j(m("Invalid term of lottery. Please check the bet slip."))
              : (h(!0),
                rt(5, w, () => {
                  h(!1), y($() + 1);
                })),
              D(f);
          } catch (d) {
            j(d);
          }
      }),
    D = (n) => {
      ht(() => {
        o.setState("Betlist", (u) => n.includes(u.id), "error", !0),
          o.setState("Betlist", (u) => [...u.filter((l) => l.error)]);
      });
    };
  function I(n) {
    return P(this, null, function* () {
      const u = "/platform-lottery/lottery-detail/batch-query-status";
      return yield E().post(u, { lotteryIdList: n });
    });
  }
  function k() {
    const n = new Date().getTime(),
      u = o.state.Betlist.map((l) => {
        if (Number(l.period.drawTime) < n) return l.period.lotteryId;
      }).filter((l) => l);
    return (
      o.setState("Betlist", (l) => Number(l.period.drawTime) < n, "error", !0),
      u
    );
  }
  function A() {
    const n = k();
    n.length > 0 && L(n);
  }
  function L(n) {
    return P(this, null, function* () {
      const u = yield I(n),
        l = new Map();
      u.forEach((b) => {
        l.set(b.lotteryId, b);
      }),
        o.setState(
          "Betlist",
          (b) => l.has(b.period.lotteryId),
          Lt((b) => {
            var d;
            (b.period.drawTime =
              ((d = l.get(b.period.lotteryId)) == null ? void 0 : d.drawTime) ||
              ""),
              (b.error = !1);
          })
        ),
        k();
    });
  }
  return (
    xt(() => {
      const n = setInterval(() => {
        A();
      }, 1e4);
      gt(() => {
        clearInterval(n);
      });
    }),
    (() => {
      var n = Ot(),
        u = n.firstChild;
      return (
        e(
          u,
          s(C, {
            get when() {
              return !G.mobile;
            },
            get children() {
              return [
                (() => {
                  var l = Gt();
                  return e(l, () => m("Bet Slip")), l;
                })(),
                s(R, {
                  class:
                    "absolute rounded-lg bg-layer5 right-2 top-3.5 z-[101] size-8",
                  onClick: () => {
                    document.body.classList.toggle("lottery-fold", !1),
                      _t.emit("lottery-toggle", !1);
                  },
                  get children() {
                    return s(wt, {
                      name: "Close",
                      class: "text-secondary size-4",
                    });
                  },
                }),
              ];
            },
          })
        ),
        e(
          n,
          s(C, {
            get when() {
              return i() > 0;
            },
            get fallback() {
              return s(C, {
                get when() {
                  return p();
                },
                get fallback() {
                  return s(Zt, {});
                },
                get children() {
                  return s(te, {
                    get count() {
                      return _();
                    },
                  });
                },
              });
            },
            get children() {
              return [
                s(C, {
                  get when() {
                    return G.mobile;
                  },
                  get fallback() {
                    return s(St, {
                      class: "betslip-content flex-1 pb-96 px-4 pt-4",
                      get children() {
                        return [
                          s(C, {
                            get when() {
                              return o.state.betBc.ticketNum;
                            },
                            get children() {
                              return s(st, {
                                get data() {
                                  return o.state.betBc;
                                },
                              });
                            },
                          }),
                          s(K, {
                            get each() {
                              return o.state.Betlist;
                            },
                            children: (l) => s(lt, { data: l }),
                          }),
                        ];
                      },
                    });
                  },
                  get children() {
                    return [
                      s(C, {
                        get when() {
                          return o.state.betBc.ticketNum;
                        },
                        get children() {
                          return s(st, {
                            get data() {
                              return o.state.betBc;
                            },
                          });
                        },
                      }),
                      s(K, {
                        get each() {
                          return o.state.Betlist;
                        },
                        children: (l) => s(lt, { data: l }),
                      }),
                    ];
                  },
                }),
                s(Jt, {
                  placeBetCb: S,
                  settle: r,
                  get betAmountInfo() {
                    return c();
                  },
                  get betSlipLength() {
                    return i();
                  },
                }),
              ];
            },
          }),
          null
        ),
        n
      );
    })()
  );
}
const Jt = (t) => {
  const i = T(),
    a = M(() => {
      let r = !1;
      for (const p of o.state.Betlist) {
        if (p.error) {
          r = !0;
          return;
        }
        r = !1;
      }
      return r;
    }),
    c = M(() => {
      let r = 0;
      return (
        o.state.Betlist.forEach((p) => {
          const h = p.totalDrawsList.length;
          r = h > r ? h : r;
        }),
        r
      );
    });
  return (() => {
    var r = Ht(),
      p = r.firstChild,
      h = p.firstChild,
      $ = p.nextSibling,
      y = $.firstChild,
      _ = y.nextSibling,
      w = $.nextSibling,
      S = w.nextSibling,
      D = S.firstChild,
      I = D.nextSibling,
      k = I.firstChild,
      A = k.firstChild,
      L = S.nextSibling,
      n = L.firstChild;
    n.firstChild;
    var u = n.nextSibling,
      l = L.nextSibling,
      b = l.nextSibling,
      d = b.firstChild;
    return (
      r.style.setProperty(
        "box-shadow",
        "rgba(0, 0, 0, 0.14) 0px -8px 20px 0px"
      ),
      e(h, () => m("Pay with")),
      e(p, () => t.settle.selectCurrency(), null),
      e(y, () => m("Total Number of Bets")),
      e(_, () => t.betSlipLength),
      e(
        w,
        s(pt, {
          get children() {
            return [
              s(Q, {
                get when() {
                  return t.betAmountInfo.discountAmount > 0;
                },
                get children() {
                  var g = Rt(),
                    B = g.firstChild,
                    f = B.nextSibling;
                  return (
                    f.firstChild,
                    e(B, () => m("Discount")),
                    e(f, () => t.betAmountInfo.discountAmount, null),
                    g
                  );
                },
              }),
              s(Q, {
                get when() {
                  return (
                    F(() => t.betAmountInfo.discountAmount <= 0)() && c() >= 4
                  );
                },
                get children() {
                  var g = Yt();
                  return (
                    e(g, () => m("Select 4 draws or above to get discount")), g
                  );
                },
              }),
            ];
          },
        })
      ),
      e(D, () => m("Total Bet Amount")),
      e(k, () => t.betAmountInfo.betAmount, A),
      e(n, () => t.settle.amount().toString(), null),
      e(u, () => Bt.getAlias(t.settle.currency().currencyName)),
      e(
        l,
        s(R, {
          class: "w-full h-12 text-lg font-extrabold text-primary_brand",
          get disabled() {
            return a() || t.settle.isInsuAmount();
          },
          type: "brand",
          onClick: () => t.placeBetCb(),
          get children() {
            return m("Place Bet");
          },
        })
      ),
      e(
        b,
        s(Y, {
          name: "Trash",
          class: "cursor-pointer w-5 text-brand",
          viewBox: "0 0 17 17",
        }),
        d
      ),
      (d.$$click = () => {
        o.setState("Betlist", []), o.setState("betBc", { ticketNum: 0 });
      }),
      e(d, () => m("Remove Bet")),
      e(
        r,
        s(C, {
          get when() {
            return t.settle.isInsuAmount();
          },
          get children() {
            var g = qt(),
              B = g.firstChild,
              f = B.nextSibling;
            return (
              e(B, () =>
                m("Insufficient balance, select another currency, or ")
              ),
              (f.$$click = () => {
                i("/wallet/deposit");
              }),
              e(f, () => m("Go to Deposit")),
              g
            );
          },
        }),
        null
      ),
      r
    );
  })();
};
function _e() {
  return s(C, {
    get when() {
      return G.mobile;
    },
    get fallback() {
      return s(Qt, {});
    },
    get children() {
      return s(Kt, {});
    },
  });
}
const Kt = () =>
    s(yt, {
      title: "Bet Slip",
      class: "betslip-dialog",
      get children() {
        return s(bt, {
          get fallback() {
            return (() => {
              var t = Vt();
              return e(t, s($t, {})), t;
            })();
          },
          get children() {
            return s(nt, {});
          },
        });
      },
    }),
  Qt = () =>
    s(ft, {
      ref: (t) => (t.className = "lottery-betslip"),
      get children() {
        return s(vt, {
          name: "fadeRight",
          get children() {
            return s(nt, {});
          },
        });
      },
    });
function Zt() {
  return (() => {
    var t = Wt(),
      i = t.firstChild,
      a = i.nextSibling,
      c = a.nextSibling;
    return (
      z(i, "src", Mt),
      e(a, () => m("Place yours bets")),
      e(c, () => m("Your selections will appear in this area")),
      t
    );
  })();
}
function te(t) {
  const i = T();
  return (() => {
    var a = Xt(),
      c = a.firstChild,
      r = c.nextSibling,
      p = r.nextSibling;
    return (
      z(c, "src", Et),
      e(r, () => m("Successfully placed!")),
      e(p, () => m("Your bets have been successfully placed!")),
      e(
        a,
        s(R, {
          class:
            "center w-full h-12 button-darken-bg cursor-pointer text-sm font-extrabold text-primary mt-7 rounded-lg",
          onClick: () => {
            i("/lottery/mybets");
          },
          get children() {
            return [F(() => m("Go To My Bets")), "(", F(() => t.count), ")s"];
          },
        }),
        null
      ),
      a
    );
  })();
}
function rt(t, i, a) {
  let c = 0;
  const r = setInterval(() => {
    c++, i(t - c), c > t && (a(), clearInterval(r));
  }, 1e3);
}
O(["click"]);
export { _e as default };
