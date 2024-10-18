var j = Object.defineProperty,
  G = Object.defineProperties;
var z = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty,
  O = Object.prototype.propertyIsEnumerable;
var V = (e, r, n) =>
    r in e
      ? j(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n),
  I = (e, r) => {
    for (var n in r || (r = {})) A.call(r, n) && V(e, n, r[n]);
    if (S) for (var n of S(r)) O.call(r, n) && V(e, n, r[n]);
    return e;
  },
  B = (e, r) => G(e, z(r));
import {
  c as l,
  e as K,
  s as b,
  i as g,
  b as q,
  t as y,
  m as x,
  u as F,
  f as H,
} from "./web-13cf6287.js";
import {
  u as L,
  T as C,
  p as Q,
  P as U,
  B as W,
  D as J,
  s as X,
} from "./manifest-cc1f4445.js";
import { q as Z } from "./index-96ed660e.js";
import { S as T } from "./index-48e08d89.js";
import { c as ee, u as p, s as te, d as re } from "./solid-js-38561dfe.js";
import { C as $ } from "./currency-format-e71c6b76.js";
import { b as R } from "./index-6d249af1.js";
import { t as w } from "./index-c20ef3e8.js";
import { t as f } from "./i18n-023baa0d.js";
import { I as ne } from "./index-e10d67ae.js";
import { S as ae } from "./sounds-a90e2198.js";
import { t as se } from "./toast-unhandle-error-afca6f15.js";
import { a as u } from "./countdown-fd722a48.js";
import { m as M } from "./memoize-4ea0c857.js";
import { b as Y } from "./baseService-e38bce40.js";
import { c as oe, b as ie } from "./_createAggregator-ddc6558e.js";
import { b as le } from "./_baseIteratee-a353a961.js";
var ce = Object.prototype,
  ue = ce.hasOwnProperty,
  me = oe(function (e, r, n) {
    ue.call(e, n) ? e[n].push(r) : Y(e, n, [r]);
  });
const D = me;
function E(e, r) {
  var n = {};
  return (
    (r = le(r)),
    ie(e, function (c, s, t) {
      Y(n, s, r(c, s, t));
    }),
    n
  );
}
var o = ((e) => (
    (e[(e.Claimed = 0)] = "Claimed"),
    (e[(e.Claim = 1)] = "Claim"),
    (e[(e.Expired = 2)] = "Expired"),
    (e[(e.KYC = 3)] = "KYC"),
    (e[(e.Navigate = 4)] = "Navigate"),
    (e[(e.DoNothing = 5)] = "DoNothing"),
    e
  ))(o || {}),
  de = y('<span class="text-xs font-semibold text-secondary">'),
  fe = y("<img class=w-[4.5em]>"),
  ge = y('<span class="flex items-center gap-x-1"> '),
  he = y("<span> "),
  ye = y('<span class="text-sm font-semibold text-brand"> '),
  ve = y('<div class="mt-2 flex h-4 items-center gap-x-2">'),
  be = y(
    '<div class="relative size-[4.5rem] flex-shrink-0"><svg viewBox="0 0 100 100"><circle cx=50 cy=50 fill=none class=text-input stroke=currentColor></circle><circle cx=50 cy=50 fill=none class=text-brand stroke-linecap=inherit stroke=currentColor></circle></svg><div class="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-input text-sm font-semibold text-primary">'
  );
const Ge = (e) => {
    const r = L(),
      n = (t) => () =>
        p(() => {
          switch (t) {
            case o.Claim:
              return w.mutations
                .claimReward(u(e.rewardId))
                .then((a) =>
                  te(() => {
                    var m;
                    const i =
                      a.lottery &&
                      ((m = a.lottery.currentLottery) == null
                        ? void 0
                        : m.lotteryResult);
                    if (i) {
                      const v = a.lottery ? a.lottery.totalCount : 0,
                        h = a.lottery ? a.lottery.redeemedCount : 0;
                      r(
                        `/lottery/welcome_bonuses/${i.numbers.join("-")}-${
                          i.jackpotBallNumber
                        }-${i.drawTimestamp}-${Math.max(v, 0)}-${Math.max(
                          h - 1,
                          0
                        )}`
                      );
                    }
                    w.refetchResource(w.tasksResource.name),
                      R.refetchResource(R.bonusDashboardResource.name);
                  }).then(() => {
                    ae.claim();
                  })
                )
                .catch(se);
            case o.Navigate: {
              if (!u(e.navigate)) return;
              r(p(() => u(e.navigate)));
              return;
            }
            case o.KYC: {
              if (["Pending", "Denied", "Accepted"].includes(u(e.kycStatus)))
                return;
              r(p(() => u(e.navigate)));
              return;
            }
            default:
              return;
          }
        }),
      c = ee(() => {
        var t;
        switch (u(e.taskAction)) {
          case o.Claimed:
            return { type: "second", children: f("Claimed"), disabled: !0 };
          case o.Claim:
            return { type: "brand", children: f("Claim"), onClick: n(o.Claim) };
          case o.KYC: {
            const a = {
              Pending: f("Pending"),
              Denied: f("Denied"),
              Accepted: f("Accepted"),
              Retry: f("Retry"),
              "": f("Go"),
              default: f("Go"),
            };
            return {
              title: (t = a[u(e.kycStatus)]) != null ? t : a.default,
              type: "brand",
              onClick: n(o.KYC),
            };
          }
          case o.Navigate:
            return { type: "brand", children: f("Go"), onClick: n(o.Navigate) };
          default:
            return null;
        }
      }),
      s = () => {
        const t = () =>
          String(e.totalValue).length + String(e.doneValue).length > 4;
        return l(Ce, {
          get finished() {
            return Math.min(1, e.doneValue / e.totalValue);
          },
          get children() {
            return l(C, {
              get when() {
                return t();
              },
              get fallback() {
                return [x(() => e.doneValue), "/", x(() => e.totalValue)];
              },
              get children() {
                return [
                  x(() =>
                    new J(Math.min(100, (e.doneValue / e.totalValue) * 100))
                      .toDecimalPlaces(2)
                      .toString()
                  ),
                  "%",
                ];
              },
            });
          },
        });
      };
    return l(T, {
      textEllipsis: !1,
      get cover() {
        return l(C, {
          get when() {
            return e.totalValue > 1;
          },
          get fallback() {
            return (() => {
              var t = fe();
              return K(() => b(t, "src", Z.questReward)), t;
            })();
          },
          get children() {
            return s();
          },
        });
      },
      get title() {
        return (() => {
          var t = ge(),
            a = t.firstChild;
          return (
            g(t, () => u(e.title), a),
            g(
              t,
              l(ne, {
                size: 14,
                onClick: () => {
                  Q.push(() =>
                    l(U, {
                      get children() {
                        return u(e.tips);
                      },
                    })
                  );
                },
                class: "cursor-pointer text-secondary",
                name: "inform",
              }),
              null
            ),
            t
          );
        })();
      },
      get descriptions() {
        return l(C, {
          get when() {
            return e.taskId === "tid074";
          },
          get fallback() {
            return l($, {
              get currencyName() {
                return u(e.rewardCurrency);
              },
              get children() {
                var t = ve();
                return (
                  g(
                    t,
                    l($.Content, {
                      get children() {
                        return [
                          l($.Icon, { size: 16 }),
                          (() => {
                            var a = ye(),
                              i = a.firstChild;
                            return (
                              g(a, () => f("Earn"), i),
                              g(
                                a,
                                l($.Amount, {
                                  get amount() {
                                    return u(e.rewardAmount);
                                  },
                                }),
                                null
                              ),
                              a
                            );
                          })(),
                        ];
                      },
                    })
                  ),
                  t
                );
              },
            });
          },
          get children() {
            var t = he(),
              a = t.firstChild;
            return (
              g(t, () => e.rewardAmount, a),
              g(t, () => f("Lottery Tickets"), null),
              t
            );
          },
        });
      },
      get action() {
        return l(C, {
          get when() {
            return c();
          },
          get children() {
            return l(W, q(c, { class: "w-16 flex-shrink-0" }));
          },
        });
      },
      get children() {
        var t = de();
        return g(t, () => u(e.describe)), t;
      },
    });
  },
  Ce = (e) => {
    let r;
    const n = () => 10,
      c = () => 50 - n() / 2,
      s = () => 2 * Math.PI * c();
    return (
      re(() => {
        if (r) {
          const t = s() - e.finished * s();
          (r.style.strokeDasharray = `${s()}`),
            (r.style.strokeDashoffset = `${t}`);
        }
      }),
      (() => {
        var t = be(),
          a = t.firstChild,
          i = a.firstChild,
          m = i.nextSibling,
          v = a.nextSibling;
        a.style.setProperty("width", "100%"),
          a.style.setProperty("height", "100%"),
          a.style.setProperty("transform", "rotate(-90deg)");
        var h = r;
        return (
          typeof h == "function" ? F(h, m) : (r = m),
          m.style.setProperty("transition", "stroke-dashoffset 0.3s ease"),
          g(v, () => e.children),
          K(
            (d) => {
              var _ = c(),
                P = n(),
                k = c(),
                N = n();
              return (
                _ !== d.e && b(i, "r", (d.e = _)),
                P !== d.t && b(i, "stroke-width", (d.t = P)),
                k !== d.a && b(m, "r", (d.a = k)),
                N !== d.o && b(m, "stroke-width", (d.o = N)),
                d
              );
            },
            { e: void 0, t: void 0, a: void 0, o: void 0 }
          ),
          t
        );
      })()
    );
  },
  $e = {
    rewardGroupByDate: M((e) =>
      E(D(e, "taskDate"), (r) => E(D(r, "taskId"), (n) => n[0]))
    ),
    dateFormatByTaskDate: M((e) => D(e, "taskDate")),
    formatTaskDate: (e) => {
      function r(n) {
        const c = n.substring(0, 4),
          s = n.substring(4, 6),
          t = n.substring(6, 8),
          a = new Date(`${c}-${s}-${t}`),
          i = { month: "short", day: "numeric" };
        return a.toLocaleDateString(
          H(() => X.lang),
          i
        );
      }
      return `${r(e)}`;
    },
    enrichTask: (e, r, n) => {
      const c = $e.rewardGroupByDate(r);
      return e.map((s) => {
        var v, h;
        const t =
            (h =
              (v = c[n]) == null ? void 0 : v[s == null ? void 0 : s.taskId]) !=
            null
              ? h
              : r.find((d) => d.taskId === s.taskId),
          a = s.doneValue >= s.totalValue,
          i = !!(a && String(t == null ? void 0 : t.rewardId) === "0"),
          m = () =>
            i
              ? o.Claimed
              : a
              ? o.Claim
              : s.status && s.path
              ? o.KYC
              : s.path
              ? o.Navigate
              : o.DoNothing;
        return B(I({}, s), {
          reward: t,
          complete: a,
          taskDate: n,
          claimed: i,
          taskAction: m(),
        });
      });
    },
  };
export { Ge as Q, D as g, E as m, $e as t };
