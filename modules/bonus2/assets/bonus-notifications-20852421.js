var K = (m, C, R) =>
  new Promise((q, D) => {
    var E = (k) => {
        try {
          _(R.next(k));
        } catch (c) {
          D(c);
        }
      },
      P = (k) => {
        try {
          _(R.throw(k));
        } catch (c) {
          D(c);
        }
      },
      _ = (k) => (k.done ? q(k.value) : Promise.resolve(k.value).then(E, P));
    _((R = R.apply(m, C)).next());
  });
import {
  u as X,
  i as s,
  c as e,
  m as i,
  P as Ce,
  d as Re,
  t as v,
  e as Be,
  s as Se,
} from "./web-13cf6287.js";
import {
  u as xe,
  e as z,
  o as $e,
  q as De,
  T as o,
  v as _e,
  w as Ne,
  x as Ie,
  B as Le,
  A as Y,
  b as Z,
  r as Te,
} from "./manifest-cc1f4445.js";
import {
  c as h,
  b as A,
  d as ee,
  a as Qe,
  F as M,
  u as W,
  s as I,
} from "./solid-js-38561dfe.js";
import { C as l } from "./currency-format-e71c6b76.js";
import { t as a } from "./i18n-023baa0d.js";
import { I as re } from "./index-e10d67ae.js";
import { S as U } from "./sounds-a90e2198.js";
import { t as V } from "./toast-unhandle-error-afca6f15.js";
import { v as te, V as ne } from "./vip-c0abd707.js";
import { b as f } from "./index-96ed660e.js";
import { S as p } from "./index-48e08d89.js";
import {
  a as S,
  c as ze,
  C as y,
  S as Ae,
  b as Me,
  p as We,
  h as Ue,
} from "./createBonusBadgeSystem-3ae71ac9.js";
import { p as Ve } from "./index-153d2e44.js";
import { b as d } from "./index-6d249af1.js";
import { r as ae } from "./index-b54039ae.js";
import { t as F } from "./index-c20ef3e8.js";
import { p as qe } from "./index-c3579afb.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./http-7cc13238.js";
import "./countdown-fd722a48.js";
import "./router-3828f409.js";
import "./utils-55681fa2.js";
import "./createHasNewUserSpin-f5ad2420.js";
import "./animate-number-d108436c.js";
import "./baseService-e38bce40.js";
import "./_baseFor-3fee30d6.js";
import "./_MapCache-1fb5cc44.js";
import "./index-1dc0470f.js";
import "./table-e9d87985.js";
import "./index-66557316.js";
import "./index-bd250c21.js";
import "./center-loading-04d2fcbc.js";
import "./_arrayMap-2bcec0e7.js";
var Ee = v("<div><img class=w-12>"),
  Pe = v("<span>"),
  se = v('<span class="text-xs font-semibold text-secondary">'),
  Fe = v('<span class="font-extrabold text-secondary text-xxs">'),
  x = v(
    '<div class="flex h-full items-center text-lg font-extrabold text-primary">'
  ),
  je = v(
    '<div class="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">'
  ),
  Oe = v(
    '<div class="fixed inset-0 z-[19] bg-[#000000] opacity-30 transition-opacity">'
  ),
  Ge = v(
    '<div class="fixed top-0 z-[20] flex max-h-[70%] w-screen flex-col rounded-b-xl bg-layer2 px-3 pt-[4.2rem] shadow-xl sm:max-h-80 sm:w-[28rem]">'
  ),
  He = v("<div class=pt-3>");
const w = (m) =>
    (() => {
      var C = Ee(),
        R = C.firstChild;
      return Be(() => Se(R, "src", m.src)), C;
    })(),
  Nr = () => {
    const [m] = d.bonusDashboardResource(),
      C = h(() => S.aggregatedQuestData(m())),
      R = h(() => S.aggregatedSpecialBonus(m())),
      q = h(() => S.aggregatedLuckySpinData(m())),
      D = h(() => S.aggregatedRechargeData(m())),
      E = h(() => S.aggregatedVIPLevelupData(m())),
      P = h(() => S.aggregatedWeeklyBonusData(m())),
      _ = h(() => S.aggregatedMonthlyBonusData(m())),
      k = h(() => S.aggregateSportWeeklyData(m())),
      c = ze(() => ({
        shouldBadgeBeVisible: (r) => {
          var t, n;
          switch (r) {
            case "luckySpin":
              return !(
                (t = te.features(ne.SpinNotificationBlocked)) != null &&
                t.unlocked
              );
            case "quests":
              return !(
                (n = te.features(ne.QuestBonusNotificationBlocked)) != null &&
                n.unlocked
              );
            case "rakeback":
            case "recharge":
            case "specialBonus":
            case "weeklyBonus":
            case "monthlyBonus":
            case "sportsBonus":
            case "newUserSpin":
            case "levelup":
            case "rakebackDeposit":
              return !0;
            default:
              return !1;
          }
        },
        getBadgeCountByType: (r, t) => {
          switch (t) {
            case "luckySpin":
            case "recharge":
            case "rakeback":
            case "weeklyBonus":
            case "monthlyBonus":
            case "sportsBonus":
              return Math.min(1, Math.max(r, 0));
            default:
              return r;
          }
        },
      })),
      [N, $] = A(!1),
      [j, oe] = A(null),
      [O, ce] = A(null),
      [G, ue] = A(null),
      L = h(() => {
        var r, t;
        return (t = (r = c()) == null ? void 0 : r.getBadgeStatistics()) != null
          ? t
          : 0;
      }),
      le = xe(),
      T = (r) => {
        $(!1), le(r);
      };
    z.mobile &&
      $e(
        () => document.body,
        "click",
        (r) => {
          var t;
          (j() && j().contains(r.target)) ||
            ((t = O()) != null && t.contains(r.target)) ||
            (console.log("outside"), $(!1));
        }
      ),
      ee(() => {
        G() && N() && (G().scrollTop = 0);
      });
    const H = () => $(!1);
    ee(() => {
      N()
        ? document.body.classList.add("lock-scroll")
        : document.body.classList.remove("lock-scroll");
    }),
      Qe(() => {
        document.body.classList.remove("lock-scroll");
      });
    const Q = (r) => () =>
        W(() => {
          if (r)
            return d.mutations
              .receiveReward(r)
              .then(() =>
                I(() => {
                  d.refetchResource(d.bonusDashboardResource.name);
                })
              )
              .then(U.claim)
              .catch((t) => V);
        }),
      ie = () => {
        const r = h(() => C().weeklyQuests.concat(C().dailyQuests)),
          t = (n) => () =>
            W(() => {
              F.mutations
                .claimReward(n)
                .then((u) =>
                  I(() => {
                    var b;
                    const g =
                      u.lottery &&
                      ((b = u.lottery.currentLottery) == null
                        ? void 0
                        : b.lotteryResult);
                    if (g) {
                      const B = u.lottery ? u.lottery.totalCount : 0,
                        ve = u.lottery ? u.lottery.redeemedCount : 0;
                      T(
                        `/lottery/welcome_bonuses/${g.numbers.join("-")}-${
                          g.jackpotBallNumber
                        }-${g.drawTimestamp}-${Math.max(B, 0)}-${Math.max(
                          ve - 1,
                          0
                        )}`
                      );
                    }
                    F.refetchResource(F.tasksResource.name),
                      d.refetchResource(d.bonusDashboardResource.name);
                  }).then(U.claim)
                )
                .catch(V);
            });
        return e(o, {
          get when() {
            return c().showBadge("quests");
          },
          get children() {
            return e(M, {
              get each() {
                return C().questRewards;
              },
              children: (n) => {
                const u = h(() => r().find((b) => b.taskId === n.taskId)),
                  g = h(() => n.taskId === "tid074");
                return e(p, {
                  class: "bg-layer5 brightness-95",
                  get title() {
                    var b, B;
                    return (B = (b = u()) == null ? void 0 : b.title) != null
                      ? B
                      : a("Quest Completed");
                  },
                  get cover() {
                    return e(w, {
                      get src() {
                        return f.bonusQuests;
                      },
                    });
                  },
                  get action() {
                    return e(y, {
                      type: "brand",
                      get onClick() {
                        return t(n.rewardId);
                      },
                      get children() {
                        return a("Claim");
                      },
                    });
                  },
                  get children() {
                    var b = se();
                    return (
                      s(
                        b,
                        e(o, {
                          get when() {
                            return g();
                          },
                          get fallback() {
                            return e(l, {
                              get currencyName() {
                                return n.currency;
                              },
                              toCurrency: !0,
                              get children() {
                                return e(l.Content, {
                                  class: "mt-1",
                                  get children() {
                                    return [
                                      e(l.Icon, { size: 16 }),
                                      "+",
                                      e(l.Amount, {
                                        get amount() {
                                          return n.amount;
                                        },
                                      }),
                                    ];
                                  },
                                });
                              },
                            });
                          },
                          get children() {
                            var B = Pe();
                            return (
                              s(B, () => n.amount, null),
                              s(B, () => a("Lottery Tickets"), null),
                              B
                            );
                          },
                        })
                      ),
                      b
                    );
                  },
                });
              },
            });
          },
        });
      },
      ge = () => {
        const r = () => R().filter((t) => t.status !== "DONE");
        return e(o, {
          get when() {
            return c().showBadge("specialBonus");
          },
          get children() {
            return e(M, {
              get each() {
                return r();
              },
              children: (t) => {
                const n = () => t.items[0],
                  u = () =>
                    W(() =>
                      d.mutations
                        .receiveReward(t.rewardId)
                        .then(() =>
                          K(this, null, function* () {
                            if (t.rewardType === "depositbcl") {
                              let g = 0;
                              t.items && t.items[0] && (g = t.items[0].amount),
                                g && We(g);
                            }
                            return I(() => {
                              d.refetchResource(d.bonusDashboardResource.name);
                            }).then(U.claim);
                          })
                        )
                        .catch(V)
                    );
                return e(p, {
                  class: "bg-layer5 brightness-95",
                  get title() {
                    return t.title;
                  },
                  get descriptions() {
                    return [
                      e(l, {
                        get currencyName() {
                          return n().currencyName;
                        },
                        toCurrency: !0,
                        get children() {
                          return e(l.Content, {
                            class: "mt-1",
                            get children() {
                              return [
                                e(l.Icon, {
                                  size: 16,
                                  get forceToCurrency() {
                                    return n().currencyName;
                                  },
                                }),
                                "+",
                                e(l.Amount, {
                                  get amount() {
                                    return n().amount;
                                  },
                                }),
                              ];
                            },
                          });
                        },
                      }),
                    ];
                  },
                  get action() {
                    return e(y, {
                      onClick: u,
                      type: "brand",
                      get children() {
                        return a("Claim");
                      },
                    });
                  },
                  get cover() {
                    return e(Ae, {
                      get icon() {
                        return t.icon;
                      },
                      get rewardType() {
                        return t.rewardType;
                      },
                    });
                  },
                  get children() {
                    var g = se();
                    return s(g, () => t.description), g;
                  },
                });
              },
            });
          },
        });
      },
      de = () => {
        const r = () => E().vipLevelupBonus.filter((t) => t.status !== "DONE");
        return e(o, {
          get when() {
            return c().showBadge("levelup");
          },
          get children() {
            return e(M, {
              get each() {
                return r();
              },
              children: (t) => {
                const n = () => t.items[0];
                return e(p, {
                  class: "bg-layer5 brightness-95",
                  get title() {
                    return t.title;
                  },
                  get descriptions() {
                    return [
                      e(l, {
                        get currencyName() {
                          return n().currencyName;
                        },
                        get children() {
                          return e(l.Content, {
                            class: "mt-1",
                            get children() {
                              return [
                                e(l.Icon, {
                                  size: 16,
                                  get forceToCurrency() {
                                    return n().currencyName;
                                  },
                                }),
                                "+",
                                e(l.Amount, {
                                  get amount() {
                                    return n().amount;
                                  },
                                }),
                              ];
                            },
                          });
                        },
                      }),
                    ];
                  },
                  get action() {
                    return e(y, {
                      get onClick() {
                        return Q(t.rewardId);
                      },
                      type: "brand",
                      get children() {
                        return a("Claim");
                      },
                    });
                  },
                  get cover() {
                    return e(w, {
                      get src() {
                        return f.bonusLevelup;
                      },
                    });
                  },
                  get children() {
                    var u = Fe();
                    return s(u, () => t.description), u;
                  },
                });
              },
            });
          },
        });
      },
      me = () => {
        const r = () => {
          const t = q;
          t && Z.emit("get-spin-rain-or-tip", t), T("/spin");
        };
        return e(o, {
          get when() {
            return c().showBadge("luckySpin");
          },
          get children() {
            return e(p, {
              class: "bg-layer5 brightness-95",
              get cover() {
                return e(w, {
                  get src() {
                    return f.bonusLuckySpin;
                  },
                });
              },
              get action() {
                return e(y, {
                  type: "brand",
                  onClick: r,
                  get children() {
                    return a("Spin");
                  },
                });
              },
              get children() {
                var t = x();
                return s(t, () => a("Spin Ready")), t;
              },
            });
          },
        });
      },
      he = () => {
        const r = () =>
          W(() => {
            if (D().rechargeStatus < 2)
              return (
                Z.emit("sensorsTrack", { event: "recharge_request" }),
                ae.mutations.activateRecharge().then(() =>
                  I(() => {
                    d.refetchResource(d.bonusDashboardResource.name);
                  })
                )
              );
            const t = Ue(D().rechargeRewards);
            return Te("login").then((n) =>
              ae.mutations
                .claimRecharge({ currencyName: t.currencyName, token: n })
                .then(
                  () => (
                    Ve({ currencyName: t.currencyName, amount: t.amount }),
                    I(() => {
                      d.refetchResource(d.bonusDashboardResource.name);
                    })
                  )
                )
                .then(U.claim)
                .catch(V)
            );
          });
        return e(o, {
          get when() {
            return c().showBadge("recharge");
          },
          get children() {
            return e(p, {
              class: "bg-layer5 brightness-95",
              get cover() {
                return e(w, {
                  get src() {
                    return f.bonusRecharge;
                  },
                });
              },
              get action() {
                return e(y, {
                  type: "brand",
                  onClick: () => {
                    try {
                      return r();
                    } catch (t) {}
                  },
                  get children() {
                    return e(o, {
                      get when() {
                        return D().rechargeStatus < 2;
                      },
                      get fallback() {
                        return a("Claim");
                      },
                      get children() {
                        return a("Activate");
                      },
                    });
                  },
                });
              },
              get children() {
                var t = x();
                return s(t, () => a("Recharge Ready")), t;
              },
            });
          },
        });
      },
      pe = () =>
        e(o, {
          get when() {
            return c().showBadge("rakeback");
          },
          get children() {
            return e(p, {
              class: "bg-layer5 brightness-95",
              get cover() {
                return e(w, {
                  get src() {
                    return f.bonusRakeback;
                  },
                });
              },
              get action() {
                return e(Y, {
                  href: "/bonus/dashboard",
                  get children() {
                    return e(y, {
                      onClick: H,
                      type: "brand",
                      get children() {
                        return a("Claim");
                      },
                    });
                  },
                });
              },
              get children() {
                var r = x();
                return s(r, () => a("Bonus Unlock")), r;
              },
            });
          },
        }),
      ye = () =>
        e(o, {
          get when() {
            return c().showBadge("weeklyBonus");
          },
          get children() {
            return e(p, {
              class: "bg-layer5 brightness-95",
              get cover() {
                return e(w, {
                  get src() {
                    return f.bonusWeekly;
                  },
                });
              },
              get action() {
                return e(y, {
                  type: "brand",
                  get onClick() {
                    var r;
                    return Q(
                      (r = P().rewardResult) == null ? void 0 : r.rewardId
                    );
                  },
                  get children() {
                    return a("Claim");
                  },
                });
              },
              get children() {
                var r = x();
                return s(r, () => a("Weekly Bonus")), r;
              },
            });
          },
        }),
      be = () =>
        e(o, {
          get when() {
            return c().showBadge("monthlyBonus");
          },
          get children() {
            return e(p, {
              class: "bg-layer5 brightness-95",
              get cover() {
                return e(w, {
                  get src() {
                    return f.bonusMonthly;
                  },
                });
              },
              get action() {
                return e(y, {
                  type: "brand",
                  get onClick() {
                    var r;
                    return Q(
                      (r = _().rewardResult) == null ? void 0 : r.rewardId
                    );
                  },
                  get children() {
                    return a("Claim");
                  },
                });
              },
              get children() {
                var r = x();
                return s(r, () => a("Monthly Bonus")), r;
              },
            });
          },
        }),
      fe = () =>
        e(o, {
          get when() {
            return c().showBadge("sportsBonus");
          },
          get children() {
            return e(p, {
              class: "bg-layer5 brightness-95",
              get cover() {
                return e(w, {
                  get src() {
                    return f.bonusSports;
                  },
                });
              },
              get action() {
                return e(y, {
                  type: "brand",
                  get onClick() {
                    var r;
                    return Q(
                      (r = k().rewardResult) == null ? void 0 : r.rewardId
                    );
                  },
                  get children() {
                    return a("Claim");
                  },
                });
              },
              get children() {
                var r = x();
                return s(r, () => a("Sport Weekly Bonus")), r;
              },
            });
          },
        }),
      we = () =>
        e(o, {
          get when() {
            return c().showBadge("newUserSpin");
          },
          get children() {
            return e(p, {
              class: "bg-layer5 brightness-95",
              get cover() {
                return e(w, {
                  get src() {
                    return f.bonusLuckySpin;
                  },
                });
              },
              get action() {
                return e(y, {
                  type: "brand",
                  onClick: () => {
                    qe();
                  },
                  get children() {
                    return a("Spin");
                  },
                });
              },
              get children() {
                var r = x();
                return s(r, () => a("New User Spin")), r;
              },
            });
          },
        }),
      ke = () => {
        const { depositItems: r, markAsViewed: t } = Me();
        return e(o, {
          get when() {
            return c().showBadge("rakebackDeposit");
          },
          get children() {
            return e(M, {
              get each() {
                return r();
              },
              children: (n) =>
                e(p, {
                  class: "bg-layer5 brightness-95",
                  get cover() {
                    return e(w, {
                      get src() {
                        return f.bonusRakeback;
                      },
                    });
                  },
                  get descriptions() {
                    return [
                      e(l, {
                        get currencyName() {
                          return n.currencyName;
                        },
                        toCurrency: !0,
                        get children() {
                          return e(l.Content, {
                            class: "mt-1",
                            get children() {
                              return [
                                e(l.Icon, {
                                  size: 16,
                                  get forceToCurrency() {
                                    return n.currencyName;
                                  },
                                }),
                                "+",
                                e(l.Amount, {
                                  get amount() {
                                    return n.amount;
                                  },
                                }),
                              ];
                            },
                          });
                        },
                      }),
                      ",",
                    ];
                  },
                  get action() {
                    return e(Y, {
                      href: "/bonus/dashboard",
                      get children() {
                        return e(y, {
                          onClick: () => {
                            H(), t(n);
                          },
                          type: "brand",
                          get children() {
                            return a("View");
                          },
                        });
                      },
                    });
                  },
                  get children() {
                    var u = x();
                    return s(u, () => a("Deposit Bonus Received")), u;
                  },
                }),
            });
          },
        });
      },
      J = () => [
        e(Ie, {
          ref: ue,
          class: "snap-scroll-y flex flex-grow flex-col gap-y-3 sm:max-h-60",
          get children() {
            return [
              i(() => ke()),
              i(() => we()),
              i(() => pe()),
              i(() => me()),
              i(() => he()),
              i(() => ye()),
              i(() => be()),
              i(() => fe()),
              i(() => ie()),
              i(() => ge()),
              i(() => de()),
            ];
          },
        }),
        e(Le, {
          onClick: () => {
            $(!1), T("/bonus");
          },
          size: "m",
          class:
            "my-3 w-full flex-shrink-0 text-pretty border border-solid border-third bg-black_alpha5 text-lg font-semibold",
          get children() {
            return [
              i(() => a("Bonus Dashboard")),
              e(re, {
                name: "singleSmallArrow",
                size: 14,
                class: "ml-2 rotate-180 text-secondary",
              }),
            ];
          },
        }),
      ];
    return [
      (() => {
        var r = je();
        return (
          X(ce, r),
          (r.$$click = (t) => {
            if (L() <= 0) return T("/bonus");
            z.mobile && $((n) => !n);
          }),
          s(
            r,
            e(De, {
              class: "absolute -translate-y-3 translate-x-5",
              get value() {
                return L();
              },
            }),
            null
          ),
          s(
            r,
            e(re, { class: "text-secondary", size: 24, name: "bonus" }),
            null
          ),
          s(
            r,
            e(o, {
              get when() {
                return i(() => !z.mobile)() && L() > 0;
              },
              get children() {
                return e(_e, {
                  class: "z-[1001] sm:!w-[25rem]",
                  get visible() {
                    return N();
                  },
                  get trigger() {
                    return O();
                  },
                  setVisible: $,
                  get layer() {
                    return (() => {
                      var t = He();
                      return s(t, J), t;
                    })();
                  },
                });
              },
            }),
            null
          ),
          r
        );
      })(),
      e(o, {
        get when() {
          return i(() => !!z.mobile)() && L() > 0;
        },
        get children() {
          return e(Ce, {
            get mount() {
              return document.body;
            },
            get children() {
              return [
                e(o, {
                  get when() {
                    return N();
                  },
                  get children() {
                    var r = Oe();
                    return (r.$$click = () => $(!1)), r;
                  },
                }),
                e(Ne, {
                  name: "slideDown",
                  get children() {
                    return e(o, {
                      get when() {
                        return N();
                      },
                      get children() {
                        var r = Ge();
                        return X(oe, r), s(r, J), r;
                      },
                    });
                  },
                }),
              ];
            },
          });
        },
      }),
    ];
  };
Re(["click"]);
export { Nr as BonusNotifications, Nr as default };
