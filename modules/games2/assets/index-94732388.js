var it = Object.defineProperty,
  ot = Object.defineProperties;
var ct = Object.getOwnPropertyDescriptors;
var Ue = Object.getOwnPropertySymbols;
var ut = Object.prototype.hasOwnProperty,
  dt = Object.prototype.propertyIsEnumerable;
var $e = (r, n, s) =>
    n in r
      ? it(r, n, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (r[n] = s),
  ee = (r, n) => {
    for (var s in n || (n = {})) ut.call(n, s) && $e(r, s, n[s]);
    if (Ue) for (var s of Ue(n)) dt.call(n, s) && $e(r, s, n[s]);
    return r;
  },
  pe = (r, n) => ot(r, ct(n));
var ue = (r, n, s) =>
  new Promise((m, o) => {
    var h = (d) => {
        try {
          f(s.next(d));
        } catch (l) {
          o(l);
        }
      },
      p = (d) => {
        try {
          f(s.throw(d));
        } catch (l) {
          o(l);
        }
      },
      f = (d) => (d.done ? m(d.value) : Promise.resolve(d.value).then(h, p));
    f((s = s.apply(r, n)).next());
  });
import {
  c as e,
  u as me,
  f as T,
  i as t,
  m as H,
  aL as ye,
  F as Se,
  D as z,
  d as ne,
  E as Ze,
  t as P,
  Y as mt,
  w as Oe,
  S as U,
  ar as gt,
  M as se,
  I as pt,
  B as I,
  ak as Re,
  h as N,
  H as R,
  l as le,
  o as Ve,
  a as ie,
  b as W,
  K as Ee,
  y as Z,
  ax as fe,
  p as we,
  C as ht,
  k as ft,
  a8 as yt,
  e as te,
  x as xe,
  aM as Fe,
  n as Ke,
  G as xt,
  an as bt,
  s as vt,
} from "./manifest-a234c8a0.js";
import { G as Ct, u as Ge, S as Ie } from "./Layout-b58c3f24.js";
import { t as g } from "./i18n-611811a6.js";
import { b as Je, u as wt } from "./router-b8d56046.js";
import {
  P as Xe,
  a as Qe,
  S as Me,
  L as _e,
  g as He,
  h as je,
  i as Te,
} from "./MoreLessBtn-6b8ac376.js";
import { c as ze, S as ae, a as St, G as kt } from "./FullScreen-40455102.js";
import { c as J } from "./index-eff0ad24.js";
import { u as ke, l as Nt } from "./currency-a0e3a368.js";
import {
  T as Ye,
  a as et,
  b as oe,
  c as X,
  d as tt,
  e as O,
} from "./table-cbcb9a00.js";
import { S as be, b as Lt } from "./Symbol-f22f521e.js";
import { r as rt, l as ce, v as Bt } from "./game-a49e1f5b.js";
import { u as nt } from "./use-coin-format-bfa33df5.js";
import { I as Pt } from "./imgX-9d9be5da.js";
import { g as st } from "./groupBy-38a792e4.js";
import "./LayoutTitle-870a6463.js";
import "./utils-65805dbc.js";
import "./LR7LBJN3-fced4fb5.js";
import "./index-4897b9da.js";
import "./index-f5a6b566.js";
import "./user-dc7ef1f4.js";
import "./amount-af49bfc0.js";
import "./isObject-d5c4896e.js";
import "./QJIB6BDF-1dee7631.js";
import "./FN6EICGO-b0e5a495.js";
import "./E53DB7BS-1e802908.js";
import "./resolve-elements.es-b931549e.js";
import "./Close-4ee839c4.js";
import "./radio-group-dc0b5370.js";
import "./Message-f1b40bc8.js";
import "./deduction-99b6c8dd.js";
import "./isSymbol-0edd6b24.js";
import "./config-6b289bdb.js";
var lt = P('<div class=w-full><div class="w-full flex justify-center">'),
  at = P("<div>logs parse failed"),
  re = P("<span>");
const Dt = () => {
    const { findToken: r } = ke(),
      { logs: n } = rt(),
      s = me(),
      { coinFormat: m } = nt(),
      [o, h] = T(ce);
    return e(Xe, {
      exitBeforeEnter: !0,
      get children() {
        var p,
          f = lt(),
          d = f.firstChild;
        return (
          t(
            f,
            e(Ye, {
              get children() {
                return [
                  e(et, {
                    get children() {
                      return e(oe, {
                        class: "text-secondary",
                        get children() {
                          return [
                            e(X, {
                              class: "!font-normal",
                              get children() {
                                return g("Bet ID");
                              },
                            }),
                            e(X, {
                              class: "!font-normal",
                              get children() {
                                return g("Bet");
                              },
                            }),
                            e(X, {
                              class: "!font-normal",
                              get children() {
                                return g("Payout");
                              },
                            }),
                            e(X, {
                              class: "!font-normal text-right",
                              get children() {
                                return g("Profit");
                              },
                            }),
                          ];
                        },
                      });
                    },
                  }),
                  e(tt, {
                    get children() {
                      return H(() => !!n().length)()
                        ? e(ye, {
                            fallback: () => at(),
                            get children() {
                              return e(Se, {
                                get each() {
                                  return n().slice(0, o());
                                },
                                children: (l) => {
                                  const b = new z(l.winAmount || 0).minus(
                                      new z(l.betAmount || 0)
                                    ),
                                    C = r(l.currencyName);
                                  return e(oe, {
                                    onClick: () => {
                                      s(`/game-detail/${l.distributeId}`);
                                    },
                                    get children() {
                                      return [
                                        e(O, {
                                          class: "truncate text-secondary",
                                          get children() {
                                            var a;
                                            return (a = l.distributeId) == null
                                              ? void 0
                                              : a.toString();
                                          },
                                        }),
                                        e(O, {
                                          class:
                                            "truncate text-primary text-center flex items-center",
                                          get children() {
                                            return [
                                              ((a = re()),
                                              t(a, () =>
                                                m(
                                                  new z(l.betAmount || 0),
                                                  l.currencyName
                                                )
                                              ),
                                              a),
                                              e(be, {
                                                token: C,
                                                class: "text-sm",
                                              }),
                                            ];
                                            var a;
                                          },
                                        }),
                                        e(O, {
                                          class: "text-secondary",
                                          get children() {
                                            return e(ye, {
                                              fallback: () => [],
                                              get children() {
                                                return [H(() => l.odds), "x"];
                                              },
                                            });
                                          },
                                        }),
                                        e(O, {
                                          get class() {
                                            return ne(
                                              "text-right truncate text-secondary flex items-center justify-end",
                                              b.isPositive()
                                                ? "!text-brand"
                                                : "!text-error"
                                            );
                                          },
                                          get children() {
                                            return [
                                              ((v = re()),
                                              t(v, () =>
                                                b.isPositive() ? "+" : ""
                                              ),
                                              v),
                                              ((a = re()),
                                              t(a, () => m(b, l.currencyName)),
                                              a),
                                              e(be, {
                                                token: C,
                                                class: "text-sm",
                                              }),
                                            ];
                                            var a, v;
                                          },
                                        }),
                                      ];
                                    },
                                  });
                                },
                              });
                            },
                          })
                        : e(oe, {
                            class: "text-center",
                            get children() {
                              return e(O, {
                                colSpan: 4,
                                class: "py-2",
                                get children() {
                                  return e(Ze, {});
                                },
                              });
                            },
                          });
                    },
                  }),
                ];
              },
            }),
            d
          ),
          t(
            d,
            ((p = H(() => n().length > ce)),
            () =>
              p() &&
              e(Qe, {
                get isMore() {
                  return !o();
                },
                onClick: () => h(o() ? void 0 : ce),
              }))
          ),
          f
        );
      },
    });
  },
  qt = () => {
    const { findToken: r } = ke(),
      { myLogs: n } = rt(),
      s = me(),
      { coinFormat: m } = nt(),
      [o, h] = T(ce);
    return e(Xe, {
      exitBeforeEnter: !0,
      get children() {
        var p,
          f = lt(),
          d = f.firstChild;
        return (
          t(
            f,
            e(Ye, {
              get children() {
                return [
                  e(et, {
                    get children() {
                      return e(oe, {
                        class: "text-secondary",
                        get children() {
                          return [
                            e(X, {
                              class: "!font-normal",
                              get children() {
                                return g("Bet ID");
                              },
                            }),
                            e(X, {
                              class: "!font-normal",
                              get children() {
                                return g("Bet");
                              },
                            }),
                            e(X, {
                              class: "!font-normal",
                              get children() {
                                return g("Payout");
                              },
                            }),
                            e(X, {
                              class: "!font-normal text-right",
                              get children() {
                                return g("Profit");
                              },
                            }),
                          ];
                        },
                      });
                    },
                  }),
                  e(tt, {
                    get children() {
                      return H(() => !!n().length)()
                        ? e(ye, {
                            fallback: () => at(),
                            get children() {
                              return e(Se, {
                                get each() {
                                  return n().slice(0, o());
                                },
                                children: (l) => {
                                  const b = new z(l.winAmount || 0).minus(
                                      new z(l.betAmount || 0)
                                    ),
                                    C = r(l.currencyName);
                                  return e(oe, {
                                    onClick: () => {
                                      s(`/game-detail/${l.distributeId}`);
                                    },
                                    get children() {
                                      return [
                                        e(O, {
                                          class:
                                            "truncate text-secondary max-w-20",
                                          get children() {
                                            var a;
                                            return (a = l.distributeId) == null
                                              ? void 0
                                              : a.toString();
                                          },
                                        }),
                                        e(O, {
                                          class:
                                            "truncate text-primary text-center flex items-center",
                                          get children() {
                                            return [
                                              re(),
                                              ((a = re()),
                                              t(a, () =>
                                                m(
                                                  new z(l.betAmount || 0),
                                                  l.currencyName
                                                )
                                              ),
                                              a),
                                              e(be, {
                                                token: C,
                                                class: "text-sm",
                                              }),
                                            ];
                                            var a;
                                          },
                                        }),
                                        e(O, {
                                          class: "text-secondary",
                                          get children() {
                                            return e(ye, {
                                              fallback: () => [],
                                              get children() {
                                                return [H(() => l.odds), "x"];
                                              },
                                            });
                                          },
                                        }),
                                        e(O, {
                                          get class() {
                                            return ne(
                                              "text-right truncate text-secondary flex items-center justify-end",
                                              b.isPositive()
                                                ? "!text-brand"
                                                : "!text-error"
                                            );
                                          },
                                          get children() {
                                            return [
                                              ((v = re()),
                                              t(v, () =>
                                                b.isPositive() ? "+" : " "
                                              ),
                                              v),
                                              ((a = re()),
                                              t(a, () => m(b, l.currencyName)),
                                              a),
                                              e(be, {
                                                token: C,
                                                class: "text-sm",
                                              }),
                                            ];
                                            var a, v;
                                          },
                                        }),
                                      ];
                                    },
                                  });
                                },
                              });
                            },
                          })
                        : e(oe, {
                            class: "text-center",
                            get children() {
                              return e(O, {
                                colSpan: 4,
                                class: "py-2",
                                get children() {
                                  return e(Ze, {});
                                },
                              });
                            },
                          });
                    },
                  }),
                ];
              },
            }),
            d
          ),
          t(
            d,
            ((p = H(() => n().length > ce)),
            () =>
              p() &&
              e(Qe, {
                get isMore() {
                  return !o();
                },
                onClick: () => h(o() ? void 0 : ce),
              }))
          ),
          f
        );
      },
    });
  };
function Ut() {
  return e(Ct, {
    get tabs() {
      return [
        { title: g("All bets"), content: Dt },
        { title: g("My bets"), content: qt },
      ];
    },
  });
}
var $t = P(
    "<div class=free-spin-pop-wrap><img alt=freespin class=freespin-img><p class=title></p><p class=title-t></p><p class=desc>"
  ),
  Ft = P("<div class=wager-wrap><p class=re></p><p class=n>x"),
  It = P("<span>"),
  Mt = P("<div class=tc>");
const Ae = function (r) {
  const n = me(),
    s = !0;
  return e(mt, {
    get class() {
      return ne("no-bonus");
    },
    close: !0,
    get children() {
      var m = $t(),
        o = m.firstChild,
        h = o.nextSibling,
        p = h.nextSibling,
        f = p.nextSibling;
      return (
        Oe(o, "src", "/modules/games2/assets/freespin-8a81a041.png"),
        t(h, () =>
          g(
            "You just turned your <__spin_number__> FS into bonus money, totaling:",
            { spin_number: r.spinNumber }
          )
        ),
        t(p, () => (r.amountInfo ? r.amountInfo : "0.00")),
        t(
          f,
          e(U, {
            when: s,
            get fallback() {
              return g(
                "To convert it into real money you just need to meet the terms below. Don't worry, it's easier than it looks like!"
              );
            },
            get children() {
              return g(
                "Don’t get discouraged! To get more bonus please check our exclusive promotions"
              );
            },
          })
        ),
        t(
          m,
          e(U, {
            when: s,
            get fallback() {
              return [
                ((l = Ft()),
                (b = l.firstChild),
                (C = b.nextSibling),
                (a = C.firstChild),
                t(b, () => g("Wager Requirements")),
                t(C, () => Number(r.spinOdds || 0).toFixed(), a),
                l),
                ((d = Mt()),
                t(
                  d,
                  e(gt, {
                    onClick: () => se.pop(),
                    href: "/help_bonus",
                    get children() {
                      return [
                        ((v = It()), t(v, () => g("Bonus T&C")), v),
                        e(pt, { name: "Arrow" }),
                      ];
                      var v;
                    },
                  })
                ),
                d),
                e(I, {
                  type: "brand",
                  onClick: () => se.pop(),
                  get children() {
                    return g("OK, great!");
                  },
                }),
              ];
              var d, l, b, C, a;
            },
            get children() {
              return e(I, {
                type: "brand",
                onClick: () => {
                  se.pop(), n("/promotion");
                },
                get children() {
                  return g("Check Promotions");
                },
              });
            },
          }),
          null
        ),
        m
      );
    },
  });
};
var _t = P(
    '<div class="absolute left-0 h-8 w-[1px] bg-layer2 dark:bg-layer6">'
  ),
  Ht = P(
    '<div><p class="text-xs text-secondary"></p><p class="flex items-center notranslate">'
  ),
  jt = P('<div class="flex flex-1 px-2">'),
  Tt = P('<b class="text-secondary text-xs">, '),
  zt = P("<span><b> FS</b> X "),
  At = P(
    '<div class="flex items-center"><img alt=gift class=size-12><div class=ml-2><p class="text-xs text-secondary"></p><p class="font-extrabold notranslate"></p></div><div class="w-60 relative bg-layer2 rounded-lg h-2.5 mx-2 py-0.5"><div class="bg-brand h-1.5 rounded-md"></div><div class="absolute h-4 rounded-lg px-1 flex center text-alw_dark bg-brand -top-5"><span class="text-xs font-semibold"></span><div class="absolute w-0 h-0 left-1/2 -bottom-1"></div></div></div><div class="text-xs text-secondary"><p></p><p>'
  );
function Ce(r) {
  if (!r || r.length === 0) return [];
  let n = [];
  const s = st(r, (m) => m.currencyName);
  return (
    s &&
      Object.keys(s).map((m) => {
        const o = s[m];
        if (o)
          if (o.length === 1) n.push(ee({}, o[0]));
          else {
            let h = ee({}, o[0]);
            for (let p = 1; p < o.length; p++)
              (h.wagerRequired =
                Number(h.wagerRequired || 0) +
                Number(o[p].wagerRequired || 0) +
                ""),
                (h.wagerCompleted =
                  Number(h.wagerCompleted || 0) +
                  Number(o[p].wagerCompleted || 0) +
                  "");
            n.push(h);
          }
      }),
    n
  );
}
function de(r, n) {
  const s = new z(r || 0);
  if (s.lte(0)) return `0.00 ${n}`;
  const m = Ee.getPrecision(n),
    o = s.toFixed(m, z.ROUND_DOWN);
  return `${new z(o).toNumber()} ${n}`;
}
const Wt = function (r) {
    let n = null,
      s = 0;
    const m = Re[N.setting.currencyName].bonusAmount,
      [o, h] = T([]),
      [p, f] = T([]),
      [d, l] = T([]),
      b = R(() =>
        (function (c) {
          let u = !1,
            D = null;
          return (
            c && c.length > 0 && ((u = !0), (D = ee({}, c[0]))),
            { haveBonusSummary: u, firstBonusSummary: D }
          );
        })(p())
      ),
      C = R(() =>
        (function (c, u) {
          let D = !1;
          if (c && c.length > 0) {
            const q = c.filter((i) => i.gameUnique === u);
            D = q && q.length > 0;
          }
          return D;
        })(o(), r.gameUnique)
      ),
      a = ({
        preBonusSummaryList: c,
        currBonusSummaryList: u,
        preFreeSpinList: D,
        currFreeSpinList: q,
      }) => {
        if (D && D.length > 0 && (!q || D.length !== q.length)) {
          let i = null;
          for (let w = 0; w < D.length; w++)
            (q == null ? void 0 : q.find((A) => A.fsId === D[w].fsId)) ||
              (i = D[w]);
          i &&
            Z()
              .get("/balance-controller/wager/task/bonusSummary/")
              .then((w) => {
                if (w) {
                  const j = w.find(
                    (A) => A.utxoId === (i == null ? void 0 : i.fsId)
                  );
                  j
                    ? se.push(() =>
                        e(Ae, {
                          get spinNumber() {
                            return (i == null ? void 0 : i.count) || 0;
                          },
                          get spinOdds() {
                            return j.wagerTimes;
                          },
                          get amountInfo() {
                            return de(j.originalAmount, j.currencyName);
                          },
                        })
                      )
                    : se.push(() =>
                        e(Ae, {
                          get spinNumber() {
                            return (i == null ? void 0 : i.count) || 0;
                          },
                          spinOdds: "0",
                        })
                      ),
                    f(w || []);
                }
              })
              .catch(console.log);
        }
        if (c && c.length > 0 && (!u || c.length !== u.length)) {
          let i = null;
          for (let w = 0; w < c.length; w++)
            (u == null ? void 0 : u.find((A) => A.taskId === c[w].taskId)) ||
              (i = c[w]);
          i &&
            Z()
              .post("/balance-controller/wager/task/detail/", {
                taskId: i.taskId,
              })
              .then((w) => {
                w &&
                  w.status === 3 &&
                  we.emit(
                    "game-top-nav-bonus-monty-tips",
                    de(w.lockedAmount, w.originalCurrencyName)
                  );
              })
              .catch(console.log);
        }
      };
    le(() => {
      N.login &&
        ((c, u) => {
          s += 1;
          const D = s;
          setTimeout(() => {
            if (D === s) {
              let q = "/balance-controller/wager/task/bonusSummary/";
              c &&
                (q = `/balance-controller/wager/task/bonusSummary/?currencyName=${u}`),
                Z()
                  .get(q)
                  .then((i) => {
                    i &&
                      fe(() => {
                        f(Ce(i)), l(i || []);
                      });
                  })
                  .catch(console.log);
            }
          }, 500);
        })(r.data.isBonus, N.setting.currencyName);
    }),
      le(() => {
        N.login &&
          N.login &&
          Z()
            .post("/activity/reward/freeSpin/list/", {
              gameUnique: r.gameUnique,
            })
            .then((c) => {
              c && h(c || []);
            })
            .catch(console.log);
      }),
      Ve(() => {
        n && (clearTimeout(n), (n = null));
      }),
      le(() => {
        if (r.data.playing && m) {
          if (n) return;
          n = setTimeout(() => {
            (() => {
              let c = [];
              b().haveBonusSummary &&
                c.push(
                  Z().get(
                    "/balance-controller/wager/task/bonusSummary/" +
                      (r.data.isBonus
                        ? "?currencyName=" + N.setting.currencyName
                        : "")
                  )
                ),
                C() &&
                  c.push(
                    Z().post("/activity/reward/freeSpin/list/", {
                      gameUnique: r.gameUnique,
                    })
                  ),
                c.length > 0 &&
                  Promise.all(c)
                    .then((u) => {
                      u.length === 2
                        ? (a({
                            preBonusSummaryList: d(),
                            currBonusSummaryList: u[0],
                            preFreeSpinList: o(),
                            currFreeSpinList: u[1],
                          }),
                          fe(() => {
                            f(Ce(u[0])), h(u[1]), l(u[0]);
                          }))
                        : (b().haveBonusSummary &&
                            (a({
                              preBonusSummaryList: d(),
                              currBonusSummaryList: u[0],
                            }),
                            fe(() => {
                              f(Ce(u[0])), l(u[0]);
                            })),
                          C() &&
                            (a({
                              preFreeSpinList: o(),
                              currFreeSpinList: u[0],
                            }),
                            h(u[0])));
                    })
                    .catch(console.log)
                    .finally(() => {
                      clearTimeout(n), (n = null);
                    });
            })();
          }, 1e4);
        }
      });
    const v = R(() => st(o(), (c) => c.count));
    return (
      (M = jt()),
      t(
        M,
        e(U, {
          get when() {
            return H(() => !!b().haveBonusSummary)() && b().firstBonusSummary;
          },
          get children() {
            return e(Zt, {
              get firstBonusSummary() {
                return b().firstBonusSummary;
              },
            });
          },
        }),
        null
      ),
      t(
        M,
        e(U, {
          get when() {
            return C();
          },
          get children() {
            var c = Ht(),
              u = c.firstChild,
              D = u.nextSibling;
            return (
              t(
                c,
                e(U, {
                  get when() {
                    return b().haveBonusSummary;
                  },
                  get children() {
                    return _t();
                  },
                }),
                u
              ),
              t(u, () => g("Free Spin")),
              t(
                D,
                e(Se, {
                  get each() {
                    return Object.keys(v());
                  },
                  children: (q, i) => {
                    return (
                      (w = zt()),
                      (j = w.firstChild),
                      (A = j.firstChild),
                      j.nextSibling,
                      t(j, q, A),
                      t(w, () => v()[q].length, null),
                      t(
                        w,
                        e(U, {
                          get when() {
                            return Object.keys(v()).length - 1 !== i();
                          },
                          get children() {
                            return Tt();
                          },
                        }),
                        null
                      ),
                      w
                    );
                    var w, j, A;
                  },
                })
              ),
              ie(() =>
                W(
                  c,
                  ne(
                    "flex flex-col justify-center relative",
                    b().haveBonusSummary && "pl-5 ml-4"
                  )
                )
              ),
              c
            );
          },
        }),
        null
      ),
      M
    );
    var M;
  },
  Zt = function (r) {
    const n = Re[r.firstBonusSummary.currencyName].bonusAmount,
      s = new z(r.firstBonusSummary.wagerCompleted || 0),
      m = new z(r.firstBonusSummary.wagerRequired || 0),
      o = s.mul(100).div(m).todp(2, z.ROUND_DOWN).toNumber(),
      h = Ee.getAlias(r.firstBonusSummary.currencyName),
      p = o <= 0 ? 0 : o >= 100 ? 100 : o;
    return (
      (f = At()),
      (d = f.firstChild),
      (l = d.nextSibling),
      (b = l.firstChild),
      (C = b.nextSibling),
      (a = l.nextSibling),
      (v = a.firstChild),
      (M = v.nextSibling),
      (c = M.firstChild),
      (u = c.nextSibling),
      (D = a.nextSibling.firstChild),
      (q = D.nextSibling),
      Oe(d, "src", "/modules/games2/assets/gift-9a6af8e3.png"),
      t(b, () => g("Bonus Money")),
      t(C, () => de(n, h)),
      `${p}%` != null
        ? v.style.setProperty("width", `${p}%`)
        : v.style.removeProperty("width"),
      `${p}%` != null
        ? M.style.setProperty("left", `${p}%`)
        : M.style.removeProperty("left"),
      M.style.setProperty("transform", "translateX(-48%)"),
      t(c, () => de(s, h)),
      u.style.setProperty("border-left", "6px solid transparent"),
      u.style.setProperty("border-right", "6px solid transparent"),
      u.style.setProperty("border-top", "8px solid rgb(var(--brand))"),
      u.style.setProperty("transform", "translateX(-50%)"),
      t(D, () => g("Wager requirement")),
      t(q, () => de(r.firstBonusSummary.wagerRequired, h)),
      f
    );
    var f, d, l, b, C, a, v, M, c, u, D, q;
  };
var Ot = P(
    '<div class="w-full flex justify-between my-2 items-center mb-5"><div class="flex items-center rounded-lg h-10"><div class="button button-m bg-layer4 mr-3 h-8 text-secondary rounded-lg w-8"></div><div class="text-primary font-extrabold flex items-center text-lg">'
  ),
  We = P('<div class="flex gap-x-4">'),
  Rt = P(
    '<div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-20 bg-black "><div class="w-[30rem] bg-layer3 p-8 rounded-xl">'
  ),
  he = P("<span>"),
  Vt = P(
    '<div class="relative bg-layer4 rounded-xl game-style-iframe transition-all duration-300"><div class="flex flex-1 h-12 gap-2 pr-2 items-center"><div><div><span></span></div><div><span></span></div></div></div><div class="bg-primary_brand relative"></div><div class="px-4 rounded-xl flex items-end justify-between h-16"><div class="flex items-center gap-4 h-full flex-1"></div><div class="hidden md:block"><svg class="relative top-1/2 -translate-y-1/2 text-layer5 opacity-50"xmlns=http://www.w3.org/2000/svg width=146 height=31 viewBox="0 0 146 31"fill=none><g clip-path=url(#clip0_4310_22607)><path fill-rule=evenodd clip-rule=evenodd d="M9.00892 5.4247C8.91436 1.30205 7.47078 0 2.9951 0H1.43607C0.395825 0 0.341374 0.161295 0.700715 1.00155C0.997471 1.69564 1.02384 2.23634 1.02531 3.07131L1.02682 17.8746C1.06799 24.0186 1.91327 25.4054 7.6735 28.5632C10.6328 30.1855 12.3715 31.004 14.2007 31C16.0298 31.004 17.7686 30.1855 20.7279 28.5632C26.6467 25.3184 27.3762 23.9435 27.3762 17.3561C27.3762 10.7687 26.6137 9.49025 20.926 6.26071C18.1915 4.70814 16.2806 3.88613 14.4218 3.80302L14.2005 3.79631L13.9796 3.80302C12.4889 3.86968 10.9646 4.41158 9.00892 5.4247ZM15.013 9.07771C10.3012 9.07771 6.48111 12.8027 6.48111 17.3976C6.48111 21.9925 10.3012 25.7176 15.013 25.7176C17.2597 25.7176 19.4401 24.624 20.9638 23.2399C21.0388 23.1717 21.1167 22.9646 20.9943 22.8455C20.262 22.1318 17.5261 19.6736 16.0978 18.3902C15.5926 17.9363 15.251 17.6293 15.2195 17.5986C15.0843 17.4668 15.0877 17.3223 15.2195 17.1887C16.0076 16.3909 18.958 13.6609 20.2811 12.4366C20.6544 12.0913 20.8981 11.8657 20.9273 11.8372C21.0775 11.6908 20.9924 11.5252 20.9273 11.4678C19.4131 10.1285 17.2186 9.07771 15.013 9.07771Z"fill=currentColor></path><path fill-rule=evenodd clip-rule=evenodd d="M13.6412 14.9453C13.6412 15.6845 13.0277 16.2836 12.271 16.2836C11.5142 16.2836 10.9009 15.6845 10.9009 14.9453C10.9009 14.2062 11.5142 13.6069 12.271 13.6069C13.0277 13.6069 13.6412 14.2062 13.6412 14.9453Z"fill=currentColor></path><path fill-rule=evenodd clip-rule=evenodd d="M45.1999 21.8974C44.8449 22.2492 44.24 22.4535 43.4354 22.4535H40.439V17.9897H43.5702C44.3446 17.9897 44.9031 18.2177 45.23 18.5696C45.5601 18.9263 45.7282 19.5668 45.7282 20.273C45.7282 20.8759 45.5704 21.5301 45.1999 21.8974ZM40.439 10.9198H42.5516C43.5732 10.9198 44.1179 11.0674 44.5367 11.4295C44.8916 11.737 45.0899 12.3191 45.0899 13.0373C45.0899 13.6648 44.8976 14.1897 44.5417 14.492C44.0434 14.9154 43.5848 15.0258 42.6375 15.0258H40.439V10.9198ZM47.3018 16.4106C48.074 16.1109 48.7088 15.5528 49.0884 14.9704C49.562 14.2434 49.8094 13.4399 49.8094 12.5258C49.8094 10.7421 49.1984 9.43177 47.9598 8.54508C46.6821 7.63033 45.3031 7.25663 42.6792 7.14558C40.1301 7.03747 35.9629 7.58078 35.9629 7.58078V26.0306C35.9629 26.0306 40.8502 26.2619 43.8829 26.0649C46.4652 25.897 47.662 25.5153 48.6858 24.6737C49.8402 23.7246 50.4381 22.1909 50.4381 20.3227C50.4381 19.3213 50.1882 18.5388 49.6811 17.7919C49.2574 17.1673 48.3296 16.5703 47.3018 16.4106ZM99.7989 18.0831L101.493 12.9177L103.236 18.0651L99.7989 18.0831ZM99.3373 7.60448L92.3755 25.7017L97.1475 25.7215L98.5679 21.8137L104.22 21.7974L105.719 25.7057H110.553L103.812 7.60448H99.3373ZM137.818 18.2706L137.789 21.7305H145.5V25.6702H133.278V14.5743V7.59669H145.288V11.5364H137.781L137.81 14.8108H144.624V18.2713L137.818 18.2706ZM63.7052 22.0078C62.2638 22.2828 60.192 22.5849 58.6581 21.7277C57.2449 20.938 56.6266 19.3803 56.4929 18.2473C56.3813 17.3017 56.373 15.8171 56.4929 14.9776C56.6754 13.6995 57.2449 12.216 58.6581 11.4261C60.192 10.5689 62.2638 10.8712 63.7052 11.1462C64.6438 11.3251 66.5086 11.8842 66.5086 11.8842L66.5365 8.3714C66.5365 8.3714 65.0534 7.60114 62.4624 7.29518C60.0162 7.00603 56.8384 7.25637 54.7155 9.07514C52.5926 10.8939 52.1116 13.1371 51.9069 14.8396C51.784 15.8615 51.7947 17.445 51.9069 18.3852C52.0907 19.9252 52.5926 22.3309 54.7155 24.1497C56.8384 25.9685 60.0162 26.2188 62.4624 25.9297C65.0534 25.6237 66.7594 24.7429 66.7594 24.7429L66.7316 21.0974C66.7316 21.0974 64.6438 21.8289 63.7052 22.0078ZM72.3673 26.0276C73.5977 26.0276 74.595 25.0534 74.595 23.8516C74.595 22.6498 73.5977 21.6756 72.3673 21.6756C71.1371 21.6756 70.1396 22.6498 70.1396 23.8516C70.1396 25.0534 71.1371 26.0276 72.3673 26.0276ZM131.025 25.6986L130.762 7.58112H125.433L121.365 18.083L117.054 7.58112H111.83C111.812 7.58112 111.797 7.5962 111.797 7.61404V25.6952C111.797 25.6961 111.798 25.6971 111.798 25.6977C111.799 25.6983 111.799 25.6986 111.8 25.6986H116.274L116.273 14.6346L120.441 24.0614L122.29 24.0514L126.456 14.2997V25.6986H131.025ZM87.967 16.682H91.5208V20.7272L91.5238 20.726V24.3817C90.7117 24.903 89.5592 25.474 87.4994 25.8482C85.6307 26.1878 82.0762 26.3153 79.7082 24.6816C77.1617 22.9245 76.4908 20.2755 76.3556 18.618C76.26 17.4509 76.2524 16.2511 76.3556 14.9589C76.4801 13.3946 77.0406 10.9513 79.1635 9.11066C81.2864 7.26989 84.4642 7.01678 86.9104 7.3094C89.5014 7.61882 90.9846 8.39827 90.9846 8.39827L90.9566 11.994C90.9566 11.994 89.0918 11.428 88.1532 11.247C86.7118 10.9686 84.64 10.663 83.1059 11.5304C81.6929 12.3296 81.0368 14.0198 80.9416 15.0981C80.8447 16.1946 80.8479 17.4095 80.9258 18.3171C81.0531 19.8019 81.7372 20.9654 82.797 21.6832C83.8672 22.4079 85.9262 22.4429 87.4824 21.8692C87.4824 21.8692 87.4535 18.9585 87.4535 18.3428C87.4535 18.0356 87.3904 17.7935 87.3334 17.5749C87.3018 17.4537 87.2721 17.3398 87.2561 17.226C87.1977 16.8114 87.3318 16.682 87.967 16.682Z"fill=currentColor></path></g><defs><clipPath id=clip0_4310_22607><rect width=145 height=31 fill=white transform=translate(0.5)></rect></clipPath></defs></svg></div><div class="flex items-center gap-4 h-full flex-1 justify-end">'
  ),
  Et = P(
    '<p class="text-secondary text-sm text-center"><span class=text-secondary></span><span class="text-brand ml-1">'
  ),
  Kt = P(
    '<div class="bg-layer3 rounded-xl"><div class="flex items-center gap-3 p-4 bg-layer4 rounded-tl-xl rounded-tr-xl"><div></div><div class="flex flex-col gap-2 h-full flex-1"></div></div><div class=" px-4 flex items-end justify-between border-t border-third"><div class="flex items-center gap-4"></div><div class="flex items-center gap-4">'
  ),
  Gt = P(
    '<div class="mb-[4.25rem] flex flex-col"><span class="text-primary text-xl font-extrabold"></span><span class="text-secondary text-sm"> '
  ),
  Jt = P(
    '<div class="flex flex-col w-full text-center mb-[1.5rem] text-tertiary">'
  );
const Xt = ({ queryKey: r }) =>
  Z().post("/home/game/game-opt/", { gameUnique: r[1] });
function Qt(r) {
  const n = Ge(),
    s = Je(),
    m = me(),
    { store: o } = ke(),
    [h, p] = T(!1),
    [f, d] = T(!1),
    [l, b] = T(null),
    [C, a] = T(!0),
    [v, M] = T(ze()),
    [c, u] = T(!1),
    [D, q] = T(N.setting.currencyName),
    i = ft(() => ({
      queryKey: ["/home/game/game-opt/", s.gameUnique],
      queryFn: Xt,
    })),
    w = yt(() => ({
      mutationKey: ["/home/game/{action}"],
      mutationFn: (S) =>
        ue(this, null, function* () {
          return Z().post(
            `/home/game/${Nt(S, "favorite") ? "favorite" : "like"}/`,
            S
          );
        }),
      onSuccess() {
        i.refetch();
      },
    })),
    j = () => {
      var S;
      if (N.login) {
        const L = (S = i.data) != null && S.favorite ? 0 : 1;
        w.mutate({ gameUnique: s.gameUnique, favorite: L }),
          Fe.setQueryData(["/home/game/game-opt/", s.gameUnique], ($) =>
            pe(ee({}, $), {
              favorite: L,
              favoriteNum: $ ? $.favoriteNum + (L ? 1 : -1) : L ? 1 : -1,
            })
          );
      } else m("/login/signin");
    },
    A = () => {
      var S;
      if (N.login) {
        const L = (S = i.data) != null && S.like ? 0 : 1;
        w.mutate({ gameUnique: s.gameUnique, op: L }),
          Fe.setQueryData(["/home/game/game-opt/", s.gameUnique], ($) =>
            pe(ee({}, $), {
              like: L,
              likeNum: $ ? $.likeNum + (L ? 1 : -1) : L ? 1 : -1,
            })
          );
      } else m("/login/signin");
    },
    Ne = (S) => {
      if (N.login) {
        const L = S.target.getBoundingClientRect();
        b({ top: L.top + 250, left: L.left + 230 }), d(!f());
      } else m("/login/signin");
    },
    Q = (S) =>
      ue(this, null, function* () {
        c() ||
          (N.login
            ? (u(!0),
              (yield r.onPlay(S, { isBnous: v().bonus() }))
                ? fe(() => {
                    a(!1), u(!1);
                  })
                : u(!1))
            : m("/login/signin"));
      }),
    ve = R(() => o.activeCurrencyConfig.currencyName === "JB");
  return (
    le(() => {
      var S;
      M(ze(!0, ((S = n()) == null ? void 0 : S.fiatList) || []));
    }),
    le(() => {
      const S = N.setting.currencyName;
      D() !== S && q(S);
    }),
    e(U, {
      get when() {
        return !te.mobile;
      },
      get fallback() {
        return (
          (S = Kt()),
          (L = S.firstChild),
          ($ = L.firstChild),
          (V = $.nextSibling),
          (G = L.nextSibling.firstChild),
          (E = G.nextSibling),
          t(
            $,
            e(Pt, {
              width: 100,
              get src() {
                var B, x;
                return H(() => {
                  var F;
                  return !!(
                    (F = n()) != null && F.iconThreeFour.includes("common")
                  );
                })()
                  ? (B = n()) == null
                    ? void 0
                    : B.thumbnail
                  : (x = n()) == null
                  ? void 0
                  : x.iconThreeFour;
              },
              alt: "",
              class: "w-36 h-48 rounded-md",
            })
          ),
          t(
            V,
            e(U, {
              get when() {
                return N.login;
              },
              get fallback() {
                return (
                  (B = Gt()),
                  (x = B.firstChild),
                  (F = x.nextSibling),
                  (Y = F.firstChild),
                  t(x, () => {
                    var K;
                    return (K = n()) == null ? void 0 : K.fullName;
                  }),
                  t(F, () => g("By"), Y),
                  t(
                    F,
                    () => {
                      var K;
                      return (K = n()) == null ? void 0 : K.providerName;
                    },
                    null
                  ),
                  B
                );
                var B, x, F, Y;
              },
              get children() {
                return v().jsx();
              },
            }),
            null
          ),
          t(
            V,
            e(U, {
              get when() {
                return N.login;
              },
              get fallback() {
                return e(I, {
                  type: "brand",
                  class: "text-primary_brand w-full",
                  onClick: () => m("/login/signin"),
                  get children() {
                    return [
                      e(ae, { class: "size-4 mr-2" }),
                      H(() => g("Sign in")),
                    ];
                  },
                });
              },
              get children() {
                return [
                  e(I, {
                    type: "brand",
                    class: "text-primary_brand w-full",
                    onClick: () => Q(!1),
                    get disabled() {
                      return ve();
                    },
                    get children() {
                      return [
                        e(ae, { class: "size-4 mr-2" }),
                        H(() => g("Play Now")),
                      ];
                    },
                  }),
                  e(U, {
                    get when() {
                      return n().supportDemo;
                    },
                    get children() {
                      var B = Et(),
                        x = B.firstChild,
                        F = x.nextSibling;
                      return (
                        t(x, () => g("or")),
                        (F.$$click = () => Q(!0)),
                        t(F, () => g("Free Play")),
                        B
                      );
                    },
                  }),
                ];
              },
            }),
            null
          ),
          t(
            G,
            e(I, {
              class: "p-0 text-secondary",
              onClick: Ne,
              get children() {
                return e(Me, {
                  class:
                    "transition-transform duration-300 hover:scale-125 size-6",
                });
              },
            }),
            null
          ),
          t(
            G,
            e(U, {
              get when() {
                return f();
              },
              fallback: null,
              get children() {
                return e(_e, {
                  onClose: () => d(!1),
                  get position() {
                    return l();
                  },
                });
              },
            }),
            null
          ),
          t(
            E,
            e(I, {
              onClick: j,
              class: "p-0 text-secondary",
              get children() {
                return [
                  e(Ie, {
                    get class() {
                      var x;
                      return J("size-6", {
                        "text-warning":
                          (x = i.data) == null ? void 0 : x.favorite,
                      });
                    },
                  }),
                  ((B = he()),
                  t(B, () => {
                    var x;
                    return (x = i.data) == null ? void 0 : x.favoriteNum;
                  }),
                  ie(() => {
                    var x;
                    return W(
                      B,
                      J("hidden md:block ml-1", {
                        "text-warning":
                          (x = i.data) == null ? void 0 : x.favorite,
                      })
                    );
                  }),
                  B),
                ];
                var B;
              },
            }),
            null
          ),
          t(
            E,
            e(I, {
              onClick: A,
              class: "p-0 text-secondary",
              get children() {
                return [
                  e(He, {
                    get class() {
                      var x;
                      return J("size-6", {
                        "text-error": (x = i.data) == null ? void 0 : x.like,
                      });
                    },
                  }),
                  ((B = he()),
                  t(B, () => {
                    var x;
                    return (x = i.data) == null ? void 0 : x.likeNum;
                  }),
                  ie(() => {
                    var x;
                    return W(
                      B,
                      J("hidden md:block ml-1", {
                        "text-error": (x = i.data) == null ? void 0 : x.like,
                      })
                    );
                  }),
                  B),
                ];
                var B;
              },
            }),
            null
          ),
          t(
            E,
            e(I, {
              class: "p-0 text-secondary",
              onClick: () => {
                se.push(() => e(je, {}), { close: !0 });
              },
              get children() {
                return e(Te, { class: "size-6" });
              },
            }),
            null
          ),
          S
        );
        var S, L, $, V, G, E;
      },
      get children() {
        return [
          ((K = Ot()),
          (ge = K.firstChild.firstChild),
          (Le = ge.nextSibling),
          (ge.$$click = () => m(-1)),
          t(ge, e(Lt, { class: "text-secondary my-1 scale-[2]" })),
          t(Le, () => {
            var y;
            return (y = n()) == null ? void 0 : y.fullName;
          }),
          K),
          ((S = Vt()),
          (L = S.firstChild),
          ($ = L.firstChild),
          (V = $.firstChild),
          (G = V.firstChild),
          (E = V.nextSibling),
          (B = E.firstChild),
          (x = L.nextSibling),
          (F = x.nextSibling.firstChild),
          (Y = F.nextSibling.nextSibling),
          t(
            L,
            e(U, {
              get when() {
                return !te.mobile;
              },
              get children() {
                return e(Wt, {
                  get data() {
                    return pe(ee({}, r.data), {
                      demoSrc: r.demoSrc,
                      isBonus: v().bonus(),
                    });
                  },
                  get gameUnique() {
                    return s.gameUnique;
                  },
                });
              },
            }),
            $
          ),
          (V.$$click = () => {
            n().supportDemo && !h() && (Q(!0), p(!0));
          }),
          t(G, () => g("Free Play")),
          (E.$$click = () => {
            h() &&
              (ve()
                ? xe.error(g("JB is not available for real play."))
                : (Q(!1), p(!1)));
          }),
          t(B, () => g("Real Play")),
          t(
            x,
            e(U, {
              get when() {
                return C();
              },
              get children() {
                var y = Rt(),
                  k = y.firstChild;
                return (
                  y.style.setProperty("background", "rgba(0, 0, 0, 0.6)"),
                  t(
                    k,
                    e(U, {
                      get when() {
                        return N.login;
                      },
                      get fallback() {
                        return (
                          (_ = Jt()),
                          t(_, () =>
                            g(
                              "The selected currency will be displayed in USD, and if you change currency while playing,the game will refresh and restart."
                            )
                          ),
                          _
                        );
                        var _;
                      },
                      get children() {
                        return v().jsx();
                      },
                    }),
                    null
                  ),
                  t(
                    k,
                    e(U, {
                      get when() {
                        return N.login;
                      },
                      get fallback() {
                        return (
                          (_ = We()),
                          t(
                            _,
                            e(I, {
                              type: "brand",
                              class: "text-primary_brand w-[12rem] mx-auto",
                              onClick: () => m("/login/signin"),
                              get children() {
                                return [
                                  e(ae, { class: "size-4 mr-2" }),
                                  H(() => g("Sign in")),
                                ];
                              },
                            }),
                            null
                          ),
                          t(
                            _,
                            e(U, {
                              get when() {
                                return n().supportDemo;
                              },
                              get children() {
                                return e(I, {
                                  type: "second",
                                  class: "text-white w-[8rem] mx-auto",
                                  onClick: () => Q(!0),
                                  get children() {
                                    return [
                                      e(ae, {
                                        class: "text-white size-4 mr-2",
                                      }),
                                      H(() => g("Free Play")),
                                    ];
                                  },
                                });
                              },
                            }),
                            null
                          ),
                          _
                        );
                        var _;
                      },
                      get children() {
                        var _ = We();
                        return (
                          t(
                            _,
                            e(I, {
                              type: "brand",
                              class: "text-primary_brand w-[16rem] mx-auto",
                              onClick: () => Q(!1),
                              get disabled() {
                                return ve();
                              },
                              get children() {
                                return [
                                  e(ae, { class: "size-4 mr-2" }),
                                  H(() =>
                                    H(() => !!v().bonus())()
                                      ? g("Play With Bonus Money")
                                      : g("Play With Real Money")
                                  ),
                                ];
                              },
                            }),
                            null
                          ),
                          t(
                            _,
                            e(U, {
                              get when() {
                                return n().supportDemo;
                              },
                              get children() {
                                return e(I, {
                                  type: "second",
                                  class: "text-white w-[8rem] mx-auto",
                                  onClick: () => Q(!0),
                                  get children() {
                                    return [
                                      e(ae, {
                                        class: "text-white size-4 mr-2",
                                      }),
                                      H(() => g("Free Play")),
                                    ];
                                  },
                                });
                              },
                            }),
                            null
                          ),
                          _
                        );
                      },
                    }),
                    null
                  ),
                  y
                );
              },
            }),
            null
          ),
          t(
            x,
            e(St, {
              get src() {
                return r.data.src;
              },
              get extSW() {
                return r.data.extSW;
              },
              get bg() {
                var y;
                return (y = n()) == null ? void 0 : y.iconThreeFour;
              },
            }),
            null
          ),
          t(
            F,
            e(I, {
              onClick: j,
              class: "p-0 text-secondary",
              get children() {
                return [
                  e(Ie, {
                    get class() {
                      var k;
                      return J("size-6", {
                        "text-warning":
                          (k = i.data) == null ? void 0 : k.favorite,
                      });
                    },
                  }),
                  ((y = he()),
                  t(y, () => {
                    var k;
                    return (k = i.data) == null ? void 0 : k.favoriteNum;
                  }),
                  ie(() => {
                    var k;
                    return W(
                      y,
                      J("hidden md:block ml-1", {
                        "text-warning":
                          (k = i.data) == null ? void 0 : k.favorite,
                      })
                    );
                  }),
                  y),
                ];
                var y;
              },
            }),
            null
          ),
          t(
            F,
            e(I, {
              onClick: A,
              class: "p-0 text-secondary",
              get children() {
                return [
                  e(He, {
                    get class() {
                      var k;
                      return J("size-6", {
                        "text-error": (k = i.data) == null ? void 0 : k.like,
                      });
                    },
                  }),
                  ((y = he()),
                  t(y, () => {
                    var k;
                    return (k = i.data) == null ? void 0 : k.likeNum;
                  }),
                  ie(() => {
                    var k;
                    return W(
                      y,
                      J("hidden md:block ml-1", {
                        "text-error": (k = i.data) == null ? void 0 : k.like,
                      })
                    );
                  }),
                  y),
                ];
                var y;
              },
            }),
            null
          ),
          t(
            F,
            e(I, {
              class: "p-0 text-secondary",
              onClick: () => {
                se.push(() => e(je, {}), { close: !0 });
              },
              get children() {
                return e(Te, { class: "size-6" });
              },
            }),
            null
          ),
          t(
            Y,
            e(I, {
              class: "p-0 text-secondary",
              onClick: Ne,
              get children() {
                return e(Me, {
                  class:
                    "transition-transform duration-300 hover:scale-125 size-6",
                });
              },
            }),
            null
          ),
          t(
            Y,
            e(U, {
              get when() {
                return f();
              },
              fallback: null,
              get children() {
                return e(_e, {
                  onClose: () => d(!1),
                  get position() {
                    return l();
                  },
                });
              },
            }),
            null
          ),
          t(Y, e(kt, {}), null),
          ie(
            (y) => {
              var k = c() ? "0.5" : "1",
                _ = ne(
                  "flex center ml-auto h-10 rounded-lg bg-layer2 p-1",
                  n().supportDemo
                    ? "sm:cursor-pointer"
                    : "sm:cursor-not-allowed"
                ),
                Be = ne(
                  "px-2 rounded-md h-full flex center",
                  h() && "bg-layer4"
                ),
                Pe = h() ? "font-semibold" : "text-secondary",
                De = ne(
                  "px-2 rounded-md h-full flex center",
                  !h() && "bg-layer4"
                ),
                qe = h() ? "text-secondary" : "font-semibold";
              return (
                k !== y.e &&
                  ((y.e = k) != null
                    ? L.style.setProperty("opacity", k)
                    : L.style.removeProperty("opacity")),
                _ !== y.t && W($, (y.t = _)),
                Be !== y.a && W(V, (y.a = Be)),
                Pe !== y.o && W(G, (y.o = Pe)),
                De !== y.i && W(E, (y.i = De)),
                qe !== y.n && W(B, (y.n = qe)),
                y
              );
            },
            { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }
          ),
          S),
        ];
        var S, L, $, V, G, E, B, x, F, Y, K, ge, Le;
      },
    })
  );
}
function Yt(r) {
  return [e(Qt, r), e(Ut, {})];
}
ht(["click"]);
const er = function (r) {
  const n = Je(),
    [s] = wt(),
    m = me(),
    o = R(() => s.fsId || ""),
    h = R(() => s.bonus || ""),
    p = R(() => s.currency || ""),
    [f, d] = xt({
      btnDisabled: !1,
      playing: !1,
      supportDemo: r.supportDemo,
      isDemo: r.supportDemo,
      src: "",
      extSW: "",
      isBonus: !!h(),
    });
  le(() => {
    (N.setting.currencyName || N.setting.localeCurrencyName) &&
      bt(() => {
        !f.playing || f.isDemo || te.mobile || (d({ src: "" }), l(!1));
      });
  }),
    le(() => {
      p() && p() !== "" && vt("setting", "currencyName", p());
    });
  const l = (b, C) =>
    ue(this, null, function* () {
      if (b)
        return r.demoSrc && r.demoSrc !== ""
          ? (d({ playing: !0, isDemo: !0, src: r.demoSrc }),
            te.mobile &&
              m(
                `/enter-game/?src=${encodeURIComponent(r.demoSrc || "")}&back=${
                  r.gameUrl || "/"
                }`
              ),
            !0)
          : (xe(g("Freeplay not available for now.")), !1);
      if (!N.login) return m("#/login"), !1;
      if (f.btnDisabled) return !1;
      d({ btnDisabled: !0, isBonus: (C == null ? void 0 : C.isBnous) || !1 });
      try {
        const a = yield Z().post("/platform-slots/launch/", {
            gameUnique: n.gameUnique,
            currency: N.setting.currencyName,
            device: te.mobile ? 1 : 2,
            demo: !1,
            areaCode: N.areaCode,
            showCurrency: r.showCurrencyName,
            bonus: (C == null ? void 0 : C.isBnous) || !1,
            fsId: o() || "0",
          }),
          v = !!a.extSW,
          M = v ? "/softswiss.html" : a.url;
        return (
          te.mobile &&
            m(
              `/enter-game/?src=${encodeURIComponent(M || "")}&extSW=${
                a.extSW || ""
              }&back=${r.gameUrl || "/"}`
            ),
          d({
            src: M,
            isDemo: !1,
            playing: !0,
            extSW: v ? JSON.stringify(a.extSW) : "",
            btnDisabled: !1,
          }),
          !0
        );
      } catch (a) {
        return d({ playing: !1, btnDisabled: !1 }), xe(a), !1;
      }
    });
  return (
    Ke(() => {
      we.emit("hideAmount", !0);
      const b = (C) => {
        C.data !== "nested" || te.mobile || d({ src: "" });
      };
      window.addEventListener("message", b),
        Ve(() => {
          we.emit("hideAmount", !1), window.removeEventListener("message", b);
        });
    }),
    e(Yt, {
      data: f,
      onPlay: l,
      get demoSrc() {
        return r.demoSrc;
      },
    })
  );
};
var tr = P("<div>detail page");
const Mr = {
  Main: function () {
    const r = Ge(),
      n = R(() => r().supportDemo),
      s = R(() =>
        N.setting.enableLocaleCurrency
          ? N.setting.localeCurrencyName.replace("FIAT", "")
          : "USD"
      ),
      m = R(() => `/game/${r().gameUnique}`),
      [o, h] = T("");
    return (
      Ke(() => {
        n() &&
          (function (p, f, d) {
            return ue(this, null, function* () {
              return yield Z().post("/platform-slots/preload/", {
                gameUnique: p,
                device: 2,
                demo: !1,
                areaCode: d,
                showCurrency: f,
              });
            });
          })(r().gameUnique, s(), N.areaCode)
            .then((p) => {
              h(p.url ? p.url : "");
            })
            .catch(xe);
      }),
      e(er, {
        get demoSrc() {
          return o();
        },
        get supportDemo() {
          return n();
        },
        get gameUrl() {
          return m();
        },
        get showCurrencyName() {
          return s();
        },
      })
    );
  },
  Detail: () => tr(),
  game: Bt,
};
export { Mr as default };
