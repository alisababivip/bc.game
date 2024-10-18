var se = (_, n, C) =>
  new Promise((w, v) => {
    var R = (h) => {
        try {
          T(C.next(h));
        } catch (j) {
          v(j);
        }
      },
      E = (h) => {
        try {
          T(C.throw(h));
        } catch (j) {
          v(j);
        }
      },
      T = (h) => (h.done ? w(h.value) : Promise.resolve(h.value).then(R, E));
    T((C = C.apply(_, n)).next());
  });
import {
  i as t,
  c as p,
  e as $e,
  s as _e,
  m as c,
  d as he,
  t as f,
} from "./web-da7da7e5.js";
import { T as g, C as ye } from "./Cancel-6c4525d6.js";
import { t as a } from "./i18n-9b1e4bd8.js";
import { W as A } from "./Icon-b6e375d0.js";
import {
  K as xe,
  a as Se,
  D as N,
  b as Ce,
  u as we,
  s as L,
  h as ke,
  n as Te,
  p as De,
  Q as Ne,
  j as je,
} from "./manifest-e0f0ba59.js";
import { u as Be } from "./router-5691abb0.js";
import { b as P, c as $, d as ae, S as Ie } from "./solid-js-2e15682c.js";
var Le = f(
    '<div class="flex items-center justify-end"><div class="text-secondary ml-1">'
  ),
  Ae = f("<div>"),
  Re = f(
    '<div class="mb-4 text-2xl font-extrabold text-primary center mt-5 leading-7"><img class="mr-1 h-7 w-7"><div class="amount cl-green">+<b></b><span class=name>'
  ),
  We = f("<span>"),
  qe = f(
    '<div class="rounded-xl bg-layer4 p-3 pb-3"><div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="h-full rounded-xl px-3 text-primary center bg-layer3"><div class="flex items-center justify-end"><div class="text-secondary ml-1"></div></div></div></div><div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class=center><span class=mr-1></span></div></div><div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="h-full rounded-xl px-3 text-primary center bg-layer3"></div></div><hr class="mb-2 border-third"><div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="h-full rounded-xl px-3 text-primary center bg-layer3">x</div></div><div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="h-full rounded-xl px-3 text-primary center bg-layer3"></div></div><div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="h-full rounded-xl px-3 text-primary center bg-layer3"></div></div><div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="h-full rounded-xl px-3 text-primary center bg-layer3"></div></div><div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="h-full rounded-xl px-3 text-primary center bg-layer3">'
  ),
  q = f(
    '<div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="h-full rounded-xl px-3 text-primary center bg-layer3">'
  ),
  Ee = f(
    '<div class="mb-2 h-8 justify-between center"><div class="font-semibold text-secondary leading-normal">'
  ),
  Fe = f('<div class="cursor-pointer border-b border-brand text-brand">'),
  Ge = f("<div class=text-secondary>--"),
  He = f(
    '<div class="mb-2 h-8 justify-between center"><div class="cursor-pointer border-b text-secondary border-third bg-transparent">'
  ),
  Oe = f("<div class=val>"),
  Pe = f(
    '<div class=link-info><hr class="mb-2 border-third"><header><div class="flex items-center justify-start"><span class=mr-1.5></span></div></header><div class="mb-2 h-8 cursor-pointer justify-between center"><div class="font-semibold text-secondary leading-normal"></div><div class="text-primary center">'
  );
const Me = (_) => {
    const { target: n, className: C } = g.getStatus(_.status, !0);
    return (() => {
      var w = Le(),
        v = w.firstChild;
      return (
        t(w, p(A, { class: C, name: "Dot" }), v), t(v, () => n().label()), w
      );
    })();
  },
  Ke = () =>
    (() => {
      var _ = Ae();
      return (
        t(_, () =>
          a(
            "A 'Linked Bonus' refers to two amounts that must simultaneously meet Rollover conditions for withdrawal. For instance, the Deposit Bonus and the Deposit amount are linked. If you wish to withdraw the Deposit amount after achieving a 1x rollover, you will need to cancel the Linked Bonus first or meet the Rollover requirements specified for the bonus amount."
          )
        ),
        _
      );
    })(),
  et = () => {
    var Q, U;
    const [_] = Be(),
      [n, C] = P(null),
      w = xe(),
      v = $(() => {
        var e;
        return (e = n()) == null ? void 0 : e.originalCurrencyName;
      }),
      [R, E] = P(!1),
      T = $(() => {
        var i;
        const { target: e, className: s } = g.getStatus(
          (i = n()) == null ? void 0 : i.status,
          !0
        );
        return { target: e, className: s };
      });
    ae(() => {
      var e;
      w() &&
        (e = n()) != null &&
        e.taskType &&
        g.getTypes(!0).then((s) => {
          const i = s.find((u) => {
            var m;
            return u.taskType === ((m = n()) == null ? void 0 : m.taskType);
          });
          E(i ? i.bonus : !1);
        });
    }),
      $(() => {
        var e;
        return ((e = n()) == null ? void 0 : e.taskType) === g.Type.Deposit;
      });
    const h = $(() => {
        var e;
        return ((e = n()) == null ? void 0 : e.taskType) === 11;
      }),
      j = $(() => {
        var e;
        return ((e = n()) == null ? void 0 : e.status) === g.Status.NotStarted;
      }),
      ie = $(() => {
        var e;
        return ((e = n()) == null ? void 0 : e.status) === g.Status.Ongoning;
      }),
      F = Se(),
      G = $(() => {
        var e, s, i, u, m, y;
        return (s = (e = n()) == null ? void 0 : e.linkedBonusTask) != null &&
          s.length
          ? (u = (i = n()) == null ? void 0 : i.linkedBonusTask) == null
            ? void 0
            : u[0]
          : (y = (m = n()) == null ? void 0 : m.linkedGeneralTask) == null
          ? void 0
          : y[0];
      });
    $(() => {
      var e;
      return ((e = n()) == null ? void 0 : e.status) === g.Status.Done;
    });
    const [H, M] = P({
        isCanelled:
          ((Q = n()) == null ? void 0 : Q.status) === g.Status.Cancelled,
        updateTime: (U = n()) == null ? void 0 : U.updateTime,
      }),
      de = $(() => {
        var e, s, i, u;
        return (
          ((e = n()) == null ? void 0 : e.status) === g.Status.NotStarted ||
          ((s = n()) == null ? void 0 : s.status) === g.Status.Ongoning ||
          ((i = n()) == null ? void 0 : i.status) === g.Status.Cancelled ||
          ((u = n()) == null ? void 0 : u.status) === g.Status.Expired
        );
      }),
      K = $(() => {
        var e, s;
        return new N(((e = n()) == null ? void 0 : e.wagerRequired) || 0)
          .sub(((s = n()) == null ? void 0 : s.wagerCompleted) || 0)
          .toNumber();
      }),
      oe = function (s, i) {
        M({ isCanelled: !0, updateTime: i });
      },
      ce = (e) =>
        se(void 0, null, function* () {
          const s = yield je().post("/balance-controller/wager/task/detail/", {
            taskId: e,
          });
          C(s),
            M({
              isCanelled:
                (s == null ? void 0 : s.status) === g.Status.Cancelled,
              updateTime: s == null ? void 0 : s.updateTime,
            });
        });
    return (
      ae(() => {
        w() && _.taskId && ce(_.taskId);
      }),
      p(Ce, {
        get title() {
          return a("Rollover Details");
        },
        get children() {
          return [
            (() => {
              var e = Re(),
                s = e.firstChild,
                i = s.nextSibling,
                u = i.firstChild,
                m = u.nextSibling,
                y = m.nextSibling;
              return (
                t(m, () => {
                  var x;
                  return we.formatBalance(
                    new N(((x = n()) == null ? void 0 : x.originalAmount) || 0)
                  );
                }),
                t(y, () => L.getAlias(v() || "")),
                $e(() => _e(s, "src", ke.coinIcon(v() || ""))),
                e
              );
            })(),
            (() => {
              var e = qe(),
                s = e.firstChild,
                i = s.firstChild,
                u = i.nextSibling,
                m = u.firstChild,
                y = m.firstChild,
                x = s.nextSibling,
                D = x.firstChild,
                b = D.nextSibling,
                W = b.firstChild,
                k = x.nextSibling,
                Y = k.firstChild,
                ue = Y.nextSibling,
                z = k.nextSibling,
                O = z.nextSibling,
                J = O.firstChild,
                V = J.nextSibling,
                me = V.firstChild,
                X = O.nextSibling,
                Z = X.firstChild,
                be = Z.nextSibling,
                ee = X.nextSibling,
                te = ee.firstChild,
                ge = te.nextSibling,
                ne = ee.nextSibling,
                le = ne.firstChild,
                ve = le.nextSibling,
                pe = ne.nextSibling,
                re = pe.firstChild,
                fe = re.nextSibling;
              return (
                t(i, () => a("Status")),
                t(
                  m,
                  p(A, {
                    get class() {
                      return T().className;
                    },
                    name: "Dot",
                  }),
                  y
                ),
                t(y, () => T().target().label()),
                t(
                  e,
                  (() => {
                    var r = c(() => !!H().isCanelled);
                    return () =>
                      r() && [
                        c(
                          () =>
                            c(() => {
                              var l;
                              return (
                                ((l = n()) == null ? void 0 : l.remark) ===
                                "cancel_by_system"
                              );
                            })() &&
                            (() => {
                              var l = q(),
                                o = l.firstChild,
                                d = o.nextSibling;
                              return (
                                t(o, () => a("Reason for cancellation")),
                                t(d, () => a("The bonus was fully spent.")),
                                l
                              );
                            })()
                        ),
                        c(
                          () =>
                            c(() => {
                              var l;
                              return (
                                ((l = n()) == null ? void 0 : l.remark) ===
                                "cancel_by_user"
                              );
                            })() &&
                            (() => {
                              var l = q(),
                                o = l.firstChild,
                                d = o.nextSibling;
                              return (
                                t(o, () => a("Reason for cancellation")),
                                t(d, () =>
                                  a("You canceled this bonus manually.")
                                ),
                                l
                              );
                            })()
                        ),
                      ];
                  })(),
                  x
                ),
                t(D, () => a("Type")),
                t(W, () => {
                  var r;
                  return (r = n()) == null ? void 0 : r.taskTypeDesc;
                }),
                t(
                  b,
                  (() => {
                    var r = c(() => !!h());
                    return () =>
                      r() &&
                      p(A, {
                        onClick: () => {
                          F("/vip-offer");
                        },
                        class: "help-icon",
                        name: "Help",
                      });
                  })(),
                  null
                ),
                t(
                  e,
                  (() => {
                    var r = c(() => !!R());
                    return () =>
                      r() &&
                      (() => {
                        var l = Ee(),
                          o = l.firstChild;
                        return (
                          t(o, () => a("Limited to Games")),
                          t(
                            l,
                            (() => {
                              var d = c(() => {
                                var S, B, I;
                                return !!(
                                  (S = n()) != null &&
                                  S.gameNameLimit &&
                                  ((I =
                                    (B = n()) == null
                                      ? void 0
                                      : B.gameNameLimit) == null
                                    ? void 0
                                    : I.length) > 0
                                );
                              });
                              return () =>
                                d()
                                  ? (() => {
                                      var S = Fe();
                                      return (
                                        (S.$$click = () => {
                                          var B, I;
                                          F("wallet/game-list", {
                                            state: {
                                              list:
                                                (B = n()) == null
                                                  ? void 0
                                                  : B.gameNameLimit,
                                              currency:
                                                (I = n()) == null
                                                  ? void 0
                                                  : I.originalCurrencyName,
                                            },
                                          });
                                        }),
                                        t(S, () => a("See Games")),
                                        S
                                      );
                                    })()
                                  : Ge();
                            })(),
                            null
                          ),
                          l
                        );
                      })();
                  })(),
                  k
                ),
                t(
                  e,
                  p(Ie, {
                    get when() {
                      var r, l;
                      return (l =
                        (r = n()) == null
                          ? void 0
                          : r.realMoneyWagerLimitedGameTypes) == null
                        ? void 0
                        : l.length;
                    },
                    get children() {
                      return p(Te, {
                        class: "my-3",
                        type: "warning",
                        get children() {
                          var r = We();
                          return (
                            t(r, () =>
                              a(
                                "This bonus can be unlocked only by betting on its own or by placing real money wagers in the sportsbook."
                              )
                            ),
                            r
                          );
                        },
                      });
                    },
                  }),
                  k
                ),
                t(Y, () => a("Created on")),
                t(ue, () => {
                  var r;
                  return new Date(
                    Number((r = n()) == null ? void 0 : r.createTime)
                  ).toLocaleString();
                }),
                t(
                  e,
                  (() => {
                    var r = c(() => {
                      var l;
                      return !!((l = n()) != null && l.expiredTime);
                    });
                    return () =>
                      r() &&
                      (() => {
                        var l = q(),
                          o = l.firstChild,
                          d = o.nextSibling;
                        return (
                          t(o, () => a("Expires in")),
                          t(d, () => {
                            var S;
                            return new Date(
                              Number((S = n()) == null ? void 0 : S.expiredTime)
                            ).toLocaleString();
                          }),
                          l
                        );
                      })();
                  })(),
                  z
                ),
                t(
                  e,
                  (() => {
                    var r = c(() => !!H().isCanelled);
                    return () =>
                      r() &&
                      (() => {
                        var l = q(),
                          o = l.firstChild,
                          d = o.nextSibling;
                        return (
                          t(o, () => a("Canceled on")),
                          t(d, () =>
                            new Date(Number(H().updateTime)).toLocaleString()
                          ),
                          l
                        );
                      })();
                  })(),
                  O
                ),
                t(J, () => a("Rollover Times")),
                t(
                  V,
                  () => {
                    var r;
                    return Number(
                      ((r = n()) == null ? void 0 : r.wagerTimes) || 0
                    ).toFixed(0);
                  },
                  me
                ),
                t(Z, () => a("Total Wager Required")),
                t(be, () => {
                  var r;
                  return L.printCurrency(
                    new N(((r = n()) == null ? void 0 : r.wagerRequired) || 0),
                    v() || ""
                  );
                }),
                t(te, () => a("Wager Completed")),
                t(ge, () => {
                  var r, l;
                  return L.printCurrency(
                    new N(
                      Number((r = n()) == null ? void 0 : r.wagerCompleted) > 0
                        ? Number((l = n()) == null ? void 0 : l.wagerCompleted)
                        : 0
                    ),
                    v() || ""
                  );
                }),
                t(le, () => a("Pending Wager Required")),
                t(ve, () => L.printCurrency(new N(K() > 0 ? K() : 0), v())),
                t(re, () => a("Withdrawable Funds")),
                t(
                  fe,
                  (() => {
                    var r = c(() => !!de());
                    return () => {
                      var l;
                      return r()
                        ? 0
                        : L.printCurrency(
                            new N(
                              ((l = n()) == null ? void 0 : l.lockedAmount) || 0
                            ),
                            v()
                          );
                    };
                  })()
                ),
                t(
                  e,
                  (() => {
                    var r = c(() => !!((ie() || j()) && R()));
                    return () =>
                      r() &&
                      (() => {
                        var l = He(),
                          o = l.firstChild;
                        return (
                          (o.$$click = () =>
                            De.push(() =>
                              p(ye, {
                                get taskId() {
                                  var d;
                                  return (d = n()) == null ? void 0 : d.taskId;
                                },
                                get currency() {
                                  var d;
                                  return (d = n()) == null
                                    ? void 0
                                    : d.originalCurrencyName;
                                },
                                get lockedAmount() {
                                  var d;
                                  return (d = n()) == null
                                    ? void 0
                                    : d.lockedAmount;
                                },
                                updateDetails: oe,
                              })
                            )),
                          t(o, () => a("Cancel Bonus")),
                          l
                        );
                      })();
                  })(),
                  null
                ),
                e
              );
            })(),
            c(
              () =>
                c(() => !!G())() &&
                (() => {
                  var e = Pe(),
                    s = e.firstChild,
                    i = s.nextSibling,
                    u = i.firstChild,
                    m = u.firstChild,
                    y = i.nextSibling,
                    x = y.firstChild,
                    D = x.nextSibling;
                  return (
                    t(
                      m,
                      (() => {
                        var b = c(() => {
                          var W, k;
                          return !!(
                            (k =
                              (W = n()) == null ? void 0 : W.linkedBonusTask) !=
                              null && k.length
                          );
                        });
                        return () =>
                          b() ? a("Linked Bonus") : a("Linked Deposit");
                      })()
                    ),
                    t(
                      u,
                      p(Ne, {
                        get title() {
                          return p(Ke, {});
                        },
                        get children() {
                          var b = Oe();
                          return (
                            t(b, p(A, { class: "help-icon", name: "Help" })), b
                          );
                        },
                      }),
                      null
                    ),
                    t(x, () => a("Status")),
                    (D.$$click = () => {
                      var b;
                      F(
                        `/wallet/link-detail?taskId=${
                          (b = G()) == null ? void 0 : b.taskId
                        }`
                      );
                    }),
                    t(
                      D,
                      p(Me, {
                        get status() {
                          var b;
                          return (b = G()) == null ? void 0 : b.status;
                        },
                      }),
                      null
                    ),
                    t(D, p(A, { name: "Arrow" }), null),
                    e
                  );
                })()
            ),
          ];
        },
      })
    );
  };
he(["click"]);
export { Me as ItemStatus, et as default };
