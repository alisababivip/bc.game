var ut = Object.defineProperty,
  ct = Object.defineProperties;
var it = Object.getOwnPropertyDescriptors;
var Pe = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty,
  dt = Object.prototype.propertyIsEnumerable;
var Ne = (a, t, s) =>
    t in a
      ? ut(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[t] = s),
  fe = (a, t) => {
    for (var s in t || (t = {})) gt.call(t, s) && Ne(a, s, t[s]);
    if (Pe) for (var s of Pe(t)) dt.call(t, s) && Ne(a, s, t[s]);
    return a;
  },
  We = (a, t) => ct(a, it(t));
var Be = (a, t, s) =>
  new Promise((r, n) => {
    var u = (m) => {
        try {
          g(s.next(m));
        } catch (y) {
          n(y);
        }
      },
      c = (m) => {
        try {
          g(s.throw(m));
        } catch (y) {
          n(y);
        }
      },
      g = (m) => (m.done ? r(m.value) : Promise.resolve(m.value).then(u, c));
    g((s = s.apply(a, t)).next());
  });
import {
  f as mt,
  c as e,
  i as o,
  t as i,
  m as K,
  e as V,
  a as ne,
  d as pt,
  g as Me,
  h as ht,
  s as Ge,
} from "./web-13cf6287.js";
import {
  t as Se,
  p as q,
  P as bt,
  B as Y,
  y as qe,
  d as Re,
  T as p,
  e as $,
  c as X,
  q as ye,
  A as G,
  a as ft,
  b as yt,
  i as ae,
  z as vt,
  D as Qe,
  F as xt,
  E as $t,
  G as Ct,
  r as _t,
  H as kt,
  n as je,
  u as Ue,
  m as wt,
  h as Bt,
} from "./manifest-cc1f4445.js";
import {
  b as Oe,
  m as Rt,
  F as z,
  c as C,
  S as Ye,
  s as le,
  g as St,
  u as Xe,
  h as Tt,
  M as Fe,
  f as Lt,
  E as ve,
  e as Ke,
} from "./solid-js-38561dfe.js";
import { C as d, a as Ee } from "./currency-format-e71c6b76.js";
import { E as Te } from "./error-fallback-24494a7d.js";
import { H as Dt } from "./header-button-group-ab1f26d4.js";
import { S as At } from "./skeleton-c8e80175.js";
import { v as It } from "./index-4c839f7e.js";
import { t as l } from "./i18n-023baa0d.js";
import { I as j } from "./index-e10d67ae.js";
import { b as P, d as E } from "./index-96ed660e.js";
import { r as Pt } from "./index-0759750b.js";
import { t as oe } from "./toast-unhandle-error-afca6f15.js";
import { B as Nt, R as Wt } from "./index-07a16cfd.js";
import { b } from "./index-6d249af1.js";
import {
  c as Le,
  a as N,
  C as B,
  S as Mt,
  p as jt,
  h as Ft,
} from "./createBonusBadgeSystem-3ae71ac9.js";
import { C as J } from "./countdown-fd722a48.js";
import { P as ue } from "./popup-common-rules-ba048024.js";
import { R as Ve, l as Et } from "./createHasNewUserSpin-f5ad2420.js";
import { h as Vt } from "./http-7cc13238.js";
import { v as Z, V as xe } from "./vip-c0abd707.js";
import { C as D, S as zt } from "./index-48e08d89.js";
import { S as se } from "./sounds-a90e2198.js";
import { i as Gt } from "./baseService-e38bce40.js";
import { a as qt, C as Qt } from "./common-progress-bar-32c151c7.js";
import {
  i as Ut,
  c as Ot,
  d as Yt,
  a as Xt,
  g as Kt,
  e as Jt,
  f as Zt,
} from "./_baseFor-3fee30d6.js";
import { i as Ht } from "./isArray-79a0be9c.js";
import { p as er } from "./index-153d2e44.js";
import { r as tr } from "./index-b54039ae.js";
import { s as ze, a as rr } from "./utils-55681fa2.js";
import { p as nr } from "./deposit-bonus-rule-e5dffd6e.js";
import "./_baseGetTag-c2e287b9.js";
import "./table-e9d87985.js";
import "./animate-number-d108436c.js";
import "./router-3828f409.js";
import "./_MapCache-1fb5cc44.js";
import "./isSymbol-269a4c68.js";
import "./center-loading-04d2fcbc.js";
function ar(a, t, s) {
  var r = -1,
    n = a.length;
  t < 0 && (t = -t > n ? 0 : n + t),
    (s = s > n ? n : s),
    s < 0 && (s += n),
    (n = t > s ? 0 : (s - t) >>> 0),
    (t >>>= 0);
  for (var u = Array(n); ++r < n; ) u[r] = a[r + t];
  return u;
}
var sr = Math.ceil,
  lr = Math.max;
function or(a, t, s) {
  (s ? Gt(a, t, s) : t === void 0) ? (t = 1) : (t = lr(qt(t), 0));
  var r = a == null ? 0 : a.length;
  if (!r || t < 1) return [];
  for (var n = 0, u = 0, c = Array(sr(r / t)); n < r; )
    c[u++] = ar(a, n, (n += t));
  return c;
}
var ur = "[object Map]",
  cr = "[object Set]",
  ir = Object.prototype,
  gr = ir.hasOwnProperty;
function dr(a) {
  if (a == null) return !0;
  if (
    Ut(a) &&
    (Ht(a) ||
      typeof a == "string" ||
      typeof a.splice == "function" ||
      Ot(a) ||
      Yt(a) ||
      Xt(a))
  )
    return !a.length;
  var t = Kt(a);
  if (t == ur || t == cr) return !a.size;
  if (Jt(a)) return !Zt(a).length;
  for (var s in a) if (gr.call(a, s)) return !1;
  return !0;
}
const Je = () => {
  const [a, t] = Oe("");
  return {
    redeemCode: a,
    handleRedeem: () => {
      a() &&
        Pt.mutations
          .redeemCode(mt(a))
          .then((r) => {
            if (r.rewardType === "FreeSpin") {
              const n = r.roundsSet;
              Se.success(
                l("You have been rewarded __count__x Free Spins", { count: n })
              ),
                q.push(() =>
                  e(Nt, {
                    get rewardType() {
                      return Wt.FreeSpin;
                    },
                    rewardOpened: !0,
                    get amount() {
                      return String(n);
                    },
                    get fsId() {
                      return r.fsId;
                    },
                    get fsNum() {
                      return r.fsRoundTotal - r.fsRoundUsed;
                    },
                    get gameId() {
                      return r.gameUnique;
                    },
                    get currencyName() {
                      return r.currencyName;
                    },
                  })
                );
            } else
              Se.success(l("You have successfully redeemed the bonus code"));
          })
          .catch(oe);
    },
    setRedeemCode: t,
  };
};
var mr = i(
    '<div class="flex flex-col gap-y-4 pt-3"><h3 class="text-sm font-semibold text-secondary">'
  ),
  pr = i('<div class="flex flex-col gap-y-5">');
const hr = () => {
    q.push(() => e(br, {}));
  },
  br = () => {
    const { redeemCode: a, setRedeemCode: t, handleRedeem: s } = Je(),
      r = () =>
        (() => {
          var n = mr(),
            u = n.firstChild;
          return (
            o(u, () => l("Redeem your bonus code below.")),
            o(
              n,
              e(qe, {
                get value() {
                  return a();
                },
                onChange: (c) => t(c),
                get placeholder() {
                  return l("Enter Bonus Code");
                },
              }),
              null
            ),
            n
          );
        })();
    return e(bt, {
      get title() {
        return l("Redeem Bonus Code");
      },
      get children() {
        var n = pr();
        return (
          o(n, r, null),
          o(
            n,
            e(Y, {
              onClick: s,
              type: "brand",
              size: "l",
              get disabled() {
                return !a();
              },
              class: "mt-4",
              get children() {
                return l("Redeem");
              },
            }),
            null
          ),
          n
        );
      },
    });
  };
var fr = i("<span> / "),
  yr = i(
    '<div class="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-secondary sm:justify-between"><span></span><span><span class="font-extrabold text-primary">'
  );
const _ = (a) => {
  const t = Rt({ colon: !0 }, a);
  return (() => {
    var s = yr(),
      r = s.firstChild,
      n = r.nextSibling,
      u = n.firstChild;
    return (
      o(r, () => Re(t.label), null),
      o(
        r,
        e(p, {
          get when() {
            return t.colon;
          },
          children: ":",
        }),
        null
      ),
      o(u, () => Re(t.current)),
      o(
        n,
        e(p, {
          get when() {
            return t.total;
          },
          get children() {
            var c = fr();
            return c.firstChild, o(c, () => Re(t.total), null), c;
          },
        }),
        null
      ),
      s
    );
  })();
};
var vr = i("<ul class=popup-rules>"),
  xr = i('<li class="font-semibold text-secondary">');
const $r = () =>
    q.push(() =>
      e(ue, {
        get title() {
          return l("Lucky Spin Rules");
        },
        get rules() {
          return [
            l(
              "You will receive 1 free spin every day once you reach a specific wager amount"
            ),
            l(
              "Starting from VIP level 8, you will receive one free spin each time you level up, and there is no limit to the number of spins you can earn."
            ),
          ];
        },
      })
    ),
  Cr = () =>
    q.push(() =>
      e(ue, {
        get title() {
          return l("Roll Competition Rules");
        },
        get rules() {
          return [
            l("Each player has one chance to roll every 24 hours."),
            l("Prizes are drawn at 2:10 (UTC+0) every day."),
            l(
              "The points of ROLL are from 0-999, 0 is the smallest, and 999 is the largest. Every day we will list the top 10 players in descending order from largest to smallest for rewards."
            ),
            l(
              "If the same points are rolled by different players at the same time, the ranking will be determined by time."
            ),
          ];
        },
      })
    ),
  _r = () =>
    q.push(() =>
      e(ue, {
        get title() {
          return l("Weekly Cashback Rules");
        },
        get rules() {
          return [
            l(
              "The Weekly Cashback is a personalized bonus based on your recent activity."
            ),
            l("We aim to drop Weekly Cashback every Friday."),
          ];
        },
      })
    ),
  kr = () =>
    q.push(() =>
      e(ue, {
        get title() {
          return l("Monthly Cashback Rules");
        },
        get rules() {
          return [
            l(
              "The Monthly Cashback is a personalized bonus based on your recent activity."
            ),
            l("We aim to drop Monthly Cashback every 15th of the month."),
          ];
        },
      })
    ),
  wr = () =>
    q.push(() =>
      e(ue, {
        get title() {
          return l("Sports Weekly Bonus Rules");
        },
        get rules() {
          return [
            [
              K(() => l("7d Sports Wager:")),
              (() => {
                var a = vr();
                return (
                  o(
                    a,
                    e(z, {
                      get each() {
                        return [
                          "$500.00-$2,499.00 = $5.00 " + l("Bonus"),
                          "$2,500.00-$4,999.00 = $30.00 " + l("Bonus"),
                          "$5,000.00-$9,999.00 = $70.00 " + l("Bonus"),
                          "$10,000.00-$49,999.00 = $150.00 " + l("Bonus"),
                          "$50,000.00-$249,999.00 = $500.00 " + l("Bonus"),
                          "$250,000.00+ = $1,000.00 " + l("Bonus"),
                        ];
                      },
                      children: (t) =>
                        (() => {
                          var s = xr();
                          return o(s, t), s;
                        })(),
                    })
                  ),
                  a
                );
              })(),
            ],
            l("Wager period Saturday 00:00 hrs ~ Friday 23:59hrs (7days)"),
            l("We aim to drop Weekly Bonus every Saturday."),
          ];
        },
      })
    );
var Br = i('<div class="flex flex-col space-y-3 bg-layer2 pb-3">'),
  Rr = i("<div>");
const Ze = (a) =>
  e(p, {
    get when() {
      return $.mobile;
    },
    get fallback() {
      return (() => {
        var t = Rr();
        return (
          t.style.setProperty(
            "grid-template-columns",
            "repeat(auto-fill, minmax(17rem, 1fr))"
          ),
          o(t, () => a.children),
          V(() => ne(t, X("grid gap-x-3 gap-y-3"))),
          t
        );
      })();
    },
    get children() {
      var t = Br();
      return o(t, () => a.children), t;
    },
  });
var Sr = i("<div class=relative>"),
  Tr = i("<span> <!> "),
  Lr = i("<span><span class=text-secondary></span> "),
  Dr = i('<span class="font-semibold text-secondary">'),
  Ar = i("<span class=text-secondary> "),
  Ir = i('<span class="cursor-pointer text-brand underline">');
const { Img: ce } = D,
  Pr = () => {
    const a = Le(),
      t = () => {
        var s, r, n, u;
        return [
          {
            badge: (s = a().badge("quests")) == null ? void 0 : s.actualCount,
            content: e(Nr, {}),
          },
          {
            badge:
              (r = a().badge("luckySpin")) == null ? void 0 : r.actualCount,
            content: e(Wr, {}),
          },
          {
            badge: (n = a().badge("roll")) == null ? void 0 : n.actualCount,
            content: e(Mr, {}),
          },
          {
            badge: (u = a().badge("rakeback")) == null ? void 0 : u.actualCount,
            content: e(jr, {}),
          },
          { badge: 0, content: e(Fr, {}) },
        ].filter(Boolean);
      };
    return e(Ze, {
      get children() {
        return e(z, {
          get each() {
            return t();
          },
          children: (s) =>
            (() => {
              var r = Sr();
              return (
                o(
                  r,
                  e(ye, {
                    overflow: 1 / 0,
                    class:
                      "absolute right-0 top-0 -translate-y-2 translate-x-2",
                    get value() {
                      var n;
                      return (n = s.badge) != null ? n : 0;
                    },
                  }),
                  null
                ),
                o(r, () => s.content, null),
                r
              );
            })(),
        });
      },
    });
  };
function Nr() {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregatedQuestData(a()));
  return e(D, {
    get title() {
      return l("Quests");
    },
    class: "bg-gradient-quest_card",
    get cover() {
      return e(ce, {
        get src() {
          return P.bonusQuests;
        },
      });
    },
    get action() {
      return e(G, {
        href: "/quests",
        get children() {
          return e(B, {
            type: "second",
            get children() {
              return l("Claim");
            },
          });
        },
      });
    },
    get children() {
      return [
        e(_, {
          get current() {
            return t().dailyQuestsFinished.length;
          },
          get total() {
            return t().dailyQuests.length;
          },
          get label() {
            return l("Daily Quests");
          },
        }),
        e(_, {
          get current() {
            return t().weeklyQuestsFinished.length;
          },
          get total() {
            return t().weeklyQuests.length;
          },
          get label() {
            return l("Weekly Quests");
          },
        }),
      ];
    },
  });
}
function Wr() {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregatedLuckySpinData(a()));
  return e(D, {
    get title() {
      return l("Lucky Spin");
    },
    class: "bg-gradient-luckySpin_card",
    get cover() {
      return e(ce, {
        get src() {
          return P.bonusLuckySpin;
        },
      });
    },
    get action() {
      return e(G, {
        href: "/spin",
        get children() {
          return e(p, {
            get when() {
              return t().actualRemaining > 0;
            },
            get fallback() {
              return e(B, {
                type: "second",
                get children() {
                  return l("Claim");
                },
              });
            },
            get children() {
              return e(B, {
                type: "brand",
                get children() {
                  return l("Spin");
                },
              });
            },
          });
        },
      });
    },
    onInfo: $r,
    get children() {
      return [
        e(_, {
          current: () => {
            if (t().vipSpinReady) return l("Ready");
            const s = () => Z.level(Math.max(8, ae.vipLevel + 1));
            return (() => {
              var r = Tr(),
                n = r.firstChild,
                u = n.nextSibling;
              return (
                u.nextSibling,
                o(r, () => l("Reach"), n),
                o(r, () => s().vipType, u),
                o(r, () => s().vipLevel, null),
                r
              );
            })();
          },
          get label() {
            return l("VIP Spin");
          },
        }),
        e(d, {
          currencyName: "USDFIAT",
          toCurrency: !0,
          get children() {
            return e(_, {
              get current() {
                return e(d.Amount, {
                  get amount() {
                    return t().wagerAmount;
                  },
                });
              },
              get total() {
                return e(d.Amount, {
                  get amount() {
                    return t().wagerTarget;
                  },
                });
              },
              get label() {
                return l("Daily Spin");
              },
            });
          },
        }),
      ];
    },
  });
}
function Mr() {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregatedRollData(a())),
    s = C(() => t().rollStatus);
  return e(D, {
    get title() {
      return l("Roll Competition");
    },
    class: "bg-gradient-roll_card",
    get cover() {
      return e(ce, {
        get src() {
          return P.bonusRoll;
        },
      });
    },
    get descriptions() {
      return (() => {
        var r = Lr(),
          n = r.firstChild;
        return (
          n.nextSibling,
          o(n, () => l("Ready in ")),
          o(
            r,
            e(J, {
              get expiresInMS() {
                return s().timeForNextRoll;
              },
            }),
            null
          ),
          r
        );
      })();
    },
    get action() {
      return e(G, {
        href: "/bonus/roll",
        get children() {
          return e(B, {
            get type() {
              return s().status !== Ve.rollAvailable ? "second" : "brand";
            },
            get children() {
              return e(p, {
                get when() {
                  return s().status === Ve.rollAvailable;
                },
                get fallback() {
                  return l("Claim");
                },
                get children() {
                  return l("Roll");
                },
              });
            },
          });
        },
      });
    },
    onInfo: Cr,
    get children() {
      return e(_, {
        get current() {
          return e(d, {
            currencyName: "USDFIAT",
            toCurrency: !0,
            get children() {
              return [
                e(d.Amount, {
                  get amount() {
                    return t().totalClaimed;
                  },
                }),
                " ",
              ];
            },
          });
        },
        get label() {
          return l("Total claimed");
        },
      });
    },
  });
}
function jr() {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregatedRakebackData(a()));
  return e(D, {
    get title() {
      return ft.getAlias(t().rakebackCurrency) + " " + l("Rakeback");
    },
    class: "bg-gradient-bcd_card",
    get cover() {
      return e(ce, {
        get src() {
          return P.bonusRakeback;
        },
      });
    },
    get action() {
      return e(G, {
        href: "/bonus/dashboard",
        get children() {
          return e(B, {
            get type() {
              return t().isRakebackLocked ? "second" : "brand";
            },
            get children() {
              return K(() => !!t().isRakebackLocked)()
                ? l("Claim")
                : l("Claim");
            },
          });
        },
      });
    },
    get children() {
      return e(_, {
        get current() {
          return e(d, {
            get currencyName() {
              return t().rakebackCurrency;
            },
            get children() {
              return e(d.Amount, {
                get amount() {
                  return t().rakebackAmount;
                },
              });
            },
          });
        },
        get label() {
          return l("Ready to claim");
        },
      });
    },
  });
}
function Fr() {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregateFreeMoneyData(a())),
    s = () =>
      Be(this, null, function* () {
        var r, n, u, c, g, m, y, f;
        if ((r = t().reward) != null && r.currencyName) {
          const A = vt[(n = t().reward) == null ? void 0 : n.currencyName],
            v = new Qe(A.amount).sub(
              (u = t().reward) == null ? void 0 : u.bonusBalance
            ),
            x = Ee(
              (c = t().reward) == null ? void 0 : c.bonusBalance,
              (g = t().reward) == null ? void 0 : g.currencyName,
              (m = t().reward) == null ? void 0 : m.currencyName
            ),
            H = Ee(
              v,
              (y = t().reward) == null ? void 0 : y.currencyName,
              (f = t().reward) == null ? void 0 : f.currencyName
            );
          if (
            yield q.confirm(
              () =>
                (() => {
                  var F = Dr();
                  return (
                    o(F, () =>
                      l(
                        "__str1__ bonus money will be lost and you will not be able to claim this bonus again. Your balance will be __str2__ after removing this bonus.",
                        { str1: x, str2: H }
                      )
                    ),
                    F
                  );
                })(),
              () => ({ title: l("Cancel This Bonus") })
            )
          )
            return Vt.post("/activity/reward/cancelFreeMoneyBonus/")
              .then(() =>
                le(() => {
                  b.refetchResource(b.bonusDashboardResource.name);
                })
              )
              .catch(Se);
        }
      });
  return e(Ye, {
    get when() {
      return t().reward;
    },
    children: (r) =>
      e(D, {
        get title() {
          return l("Lucky Spin Bonus");
        },
        class: "bg-gradient-bcd_card",
        get cover() {
          return e(ce, {
            get src() {
              return P.bonusFreeMoney;
            },
          });
        },
        get descriptions() {
          return (() => {
            var n = Ar(),
              u = n.firstChild;
            return (
              o(n, () => l("Ends in"), u),
              o(
                n,
                e(J, {
                  get expiresInMS() {
                    return r().expireAt;
                  },
                }),
                null
              ),
              n
            );
          })();
        },
        get action() {
          return e(B, {
            onClick: s,
            class: "",
            type: "second",
            get children() {
              return l("Cancel Bonus");
            },
          });
        },
        get children() {
          return [
            e(_, {
              get current() {
                return e(d, {
                  get currencyName() {
                    return r().currencyName;
                  },
                  toCurrency: !0,
                  get children() {
                    return e(d.Amount, {
                      get amount() {
                        return r().bonusBalance;
                      },
                    });
                  },
                });
              },
              get total() {
                return e(d, {
                  get currencyName() {
                    return r().currencyName;
                  },
                  toCurrency: !0,
                  get children() {
                    return e(d.Amount, {
                      get amount() {
                        return r().totalBonus;
                      },
                    });
                  },
                });
              },
              get label() {
                return l("Bonus Received");
              },
            }),
            e(_, {
              get current() {
                return e(d, {
                  get currencyName() {
                    return r().currencyName;
                  },
                  toCurrency: !0,
                  get children() {
                    return [
                      e(d.Amount, {
                        get amount() {
                          return r().currentWager;
                        },
                      }),
                      "/",
                      e(d.Amount, {
                        get amount() {
                          return r().requireWager;
                        },
                      }),
                    ];
                  },
                });
              },
              get total() {
                return `(${r().wagerTimes}x)`;
              },
              get label() {
                return l("Wager Req.");
              },
            }),
            e(_, {
              get current() {
                return (() => {
                  var n = Ir();
                  return (
                    (n.$$click = () => yt.emit("open-free-gamelist")),
                    o(n, () => l("View Games")),
                    n
                  );
                })();
              },
              get label() {
                return l("Limited to Game");
              },
            }),
          ];
        },
      }),
  });
}
pt(["click"]);
var Er = i('<span class="mt-1 text-xs font-semibold text-secondary">'),
  Vr = i('<div class="w-10 flex-shrink-0">'),
  zr = i('<div class="flex flex-col space-y-3 bg-layer2 pb-3">'),
  Gr = i('<div class="grid size-full grid-flow-col">');
const qr = () => {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregatedSpecialBonus(a()));
  let s;
  const r = xt(() => s, {
      width: 360,
      height: 92,
      gap: 12,
      scrollPadding: 0,
      minCols: 2,
    }),
    n = St(() =>
      e(z, {
        get each() {
          return t();
        },
        children: (c) => {
          const g = () =>
              Xe(() =>
                b.mutations
                  .receiveReward(c.rewardId)
                  .then(() =>
                    Be(void 0, null, function* () {
                      if (c.rewardType === "depositbcl") {
                        let f = 0;
                        c.items && c.items[0] && (f = c.items[0].amount),
                          f && jt(f);
                      }
                      return le(() => {
                        b.refetchResource(b.bonusDashboardResource.name);
                      }).then(() => se.claim());
                    })
                  )
                  .catch(oe)
              ),
            m = c.items[0],
            y = c.status === "DONE";
          return e(zt, {
            get title() {
              return c.title;
            },
            class: "h-full",
            get descriptions() {
              return e(d, {
                get currencyName() {
                  return m.currencyName;
                },
                toCurrency: !0,
                get children() {
                  return e(d.Content, {
                    class: "mt-1",
                    get children() {
                      return [
                        e(d.Icon, {
                          size: 16,
                          get forceToCurrency() {
                            return m.currencyName;
                          },
                        }),
                        "+",
                        e(d.Amount, {
                          get amount() {
                            return m.amount;
                          },
                        }),
                      ];
                    },
                  });
                },
              });
            },
            get action() {
              return e(B, {
                type: "brand",
                disabled: y,
                onClick: g,
                class: "flex-shrink text-base font-extrabold",
                get children() {
                  return e(p, {
                    when: y,
                    get fallback() {
                      return l("Claim");
                    },
                    get children() {
                      return l("Claimed");
                    },
                  });
                },
              });
            },
            get cover() {
              return (() => {
                var f = Vr();
                return (
                  o(
                    f,
                    e(Mt, {
                      get icon() {
                        return c.icon;
                      },
                      get rewardType() {
                        return c.rewardType;
                      },
                    })
                  ),
                  f
                );
              })();
            },
            get children() {
              var f = Er();
              return o(f, () => c.description), f;
            },
          });
        },
      })
    ),
    u = C(() => {
      var c;
      return or(n.toArray(), (c = r()) == null ? void 0 : c.cols);
    });
  return e(p, {
    get when() {
      return !dr(n.toArray());
    },
    get fallback() {
      return e($t, { type: "empty" });
    },
    get children() {
      return e(p, {
        get when() {
          return $.mobile;
        },
        get fallback() {
          return e(Ct, {
            rows: 2,
            get width() {
              var c, g, m, y;
              return (
                ((g = (c = r()) == null ? void 0 : c.width) != null ? g : 0) *
                ((y = (m = r()) == null ? void 0 : m.cols) != null ? y : 0)
              );
            },
            get height() {
              var c, g;
              return (g = (c = r()) == null ? void 0 : c.height) != null
                ? g
                : 0;
            },
            get gap() {
              var c;
              return (c = r()) == null ? void 0 : c.gap;
            },
            minCols: 1,
            ref(c) {
              var g = s;
              typeof g == "function" ? g(c) : (s = c);
            },
            scrollPadding: 0,
            get data() {
              return u();
            },
            children: (c) =>
              (() => {
                var g = Gr();
                return (
                  o(g, c),
                  V(
                    (m) => {
                      var A, v, x;
                      var y = `repeat(${(A = r()) == null ? void 0 : A.cols},${
                          (v = r()) == null ? void 0 : v.width
                        }px)`,
                        f = ((x = r()) == null ? void 0 : x.gap) + "px";
                      return (
                        y !== m.e &&
                          ((m.e = y) != null
                            ? g.style.setProperty("grid-template-columns", y)
                            : g.style.removeProperty("grid-template-columns")),
                        f !== m.t &&
                          ((m.t = f) != null
                            ? g.style.setProperty("grid-gap", f)
                            : g.style.removeProperty("grid-gap")),
                        m
                      );
                    },
                    { e: void 0, t: void 0 }
                  ),
                  g
                );
              })(),
          });
        },
        get children() {
          var c = zr();
          return o(c, n), c;
        },
      });
    },
  });
};
var Qr = i("<div class=relative>"),
  Ur = i("<span class=uppercase>"),
  Or = i(
    '<div class="flex items-center gap-x-2 font-semibold text-secondary">'
  ),
  Yr = i(
    '<span class="ml-2 flex h-5 items-center rounded-full bg-[#24EE894D] px-2 text-xs font-semibold text-brand">'
  ),
  Xr = i('<div class="flex items-center gap-x-1"><span>'),
  De = i(
    '<div class="sm:flex sm:h-full sm:w-full sm:items-center sm:justify-center">'
  ),
  Kr = i(
    '<div class="flex h-5 items-center justify-center rounded-md bg-white_alpha5 px-1 text-warning_brighter">'
  ),
  Jr = i('<div class="flex items-center gap-x-2">'),
  Ae = i("<span class=text-secondary> "),
  Zr = i(
    '<div class="w-full sm:flex sm:h-full sm:items-center sm:justify-center">'
  );
const { Img: ie } = D,
  Hr = () => {
    const a = Le(),
      t = () => {
        var s, r, n, u, c;
        return [
          {
            badge: (s = a().badge("levelup")) == null ? void 0 : s.actualCount,
            content: e(en, {}),
          },
          {
            badge: (r = a().badge("recharge")) == null ? void 0 : r.actualCount,
            content: e(tn, {}),
          },
          {
            badge:
              (n = a().badge("weeklyBonus")) == null ? void 0 : n.actualCount,
            content: e(rn, {}),
          },
          {
            badge:
              (u = a().badge("monthlyBonus")) == null ? void 0 : u.actualCount,
            content: e(nn, {}),
          },
          {
            badge:
              (c = a().badge("sportsBonus")) == null ? void 0 : c.actualCount,
            content: e(an, {}),
          },
        ].filter(Boolean);
      };
    return e(Ze, {
      get children() {
        return e(z, {
          get each() {
            return t();
          },
          children: (s) =>
            (() => {
              var r = Qr();
              return (
                o(
                  r,
                  e(ye, {
                    overflow: 1 / 0,
                    class:
                      "absolute right-0 top-0 -translate-y-2 translate-x-2",
                    get value() {
                      var n;
                      return (n = s.badge) != null ? n : 0;
                    },
                  }),
                  null
                ),
                o(r, () => s.content, null),
                r
              );
            })(),
        });
      },
    });
  };
function en() {
  const [a] = b.bonusDashboardResource(),
    t = (n) => () => {
      if (n)
        return b.mutations
          .receiveReward(n)
          .then(() =>
            le(() => {
              b.refetchResource(b.bonusDashboardResource.name);
            })
          )
          .then(se.claim)
          .catch(oe);
    },
    s = C(() => Z.level(ae.vipLevel + 1)),
    r = C(() => N.aggregatedVIPLevelupData(a()));
  return e(D, {
    get title() {
      return l("Level up rewards");
    },
    class: "bg-gradient-levelup_card",
    get cover() {
      return e(ie, {
        get src() {
          return P.bonusLevelup;
        },
      });
    },
    get action() {
      return K(() => r().actualRemaining > 0)()
        ? e(B, {
            type: "brand",
            get onClick() {
              return t(Et(r().vipLevelupBonus).rewardId);
            },
            get children() {
              return l("Claim");
            },
          })
        : e(G, {
            href: "/vip",
            get children() {
              return e(B, {
                type: "second",
                get children() {
                  return l("Claim");
                },
              });
            },
          });
    },
    get children() {
      return e(_, {
        get current() {
          return ze(ae.currXP);
        },
        get total() {
          return ze(ae.levelEndXP);
        },
        get label() {
          return [
            K(() => l("XP to ")),
            (() => {
              var n = Ur();
              return o(n, () => s().vipType + s().vipLevel), n;
            })(),
          ];
        },
      });
    },
  });
}
const $e = (a) =>
  (() => {
    var t = Or();
    return (
      o(t, e(j, { name: "locked", size: 20 }), null),
      o(
        t,
        () =>
          l("Available at VIP __unlockLevel__", {
            unlockLevel: a.unLockLevel || 1,
          }),
        null
      ),
      t
    );
  })();
function tn() {
  const [a] = b.bonusDashboardResource(),
    t = () => Z.features(xe.Recharge),
    s = C(() => N.aggregatedRechargeData(a())),
    r = {
      [String(24 * 60 * 6e4)]: l("Daily"),
      [String(60 * 6e4)]: l("Hourly"),
      [String(10 * 6e4)]: l("10 Min"),
    },
    n = () =>
      Xe(() => {
        const u = Ft(s().rechargeRewards);
        return _t("login").then((c) =>
          tr.mutations
            .claimRecharge({ currencyName: u.currencyName, token: c })
            .then(
              () => (
                er({ currencyName: u.currencyName, amount: u.amount }),
                le(() => {
                  b.refetchResource(b.bonusDashboardResource.name);
                })
              )
            )
            .then(se.claim)
            .catch(oe)
        );
      });
  return e(D, {
    get title() {
      return (() => {
        var u = Xr(),
          c = u.firstChild;
        return (
          o(c, () => l("Recharge")),
          o(
            u,
            e(p, {
              get when() {
                var g;
                return (g = t()) == null ? void 0 : g.unlocked;
              },
              get children() {
                return e(p, {
                  get when() {
                    return s().rechargeStatus >= 2;
                  },
                  get children() {
                    var g = Yr();
                    return o(g, () => r[s().frequency]), g;
                  },
                });
              },
            }),
            null
          ),
          u
        );
      })();
    },
    class: "bg-gradient-recharge_card",
    get cover() {
      return e(ie, {
        get src() {
          return P.bonusRecharge;
        },
      });
    },
    get action() {
      return e(p, {
        get when() {
          var u;
          return (u = t()) == null ? void 0 : u.unlocked;
        },
        get children() {
          return e(Tt, {
            get fallback() {
              return e(G, {
                href: "/recharge",
                get children() {
                  return e(B, {
                    type: "second",
                    get children() {
                      return l("Claim");
                    },
                  });
                },
              });
            },
            get children() {
              return [
                e(Fe, {
                  get when() {
                    return (
                      K(() => s().rechargeStatus < 2)() &&
                      s().rechargeStatus > 0
                    );
                  },
                  get children() {
                    return e(G, {
                      href: "/recharge",
                      get children() {
                        return e(B, {
                          type: "brand",
                          get children() {
                            return l("Activate");
                          },
                        });
                      },
                    });
                  },
                }),
                e(Fe, {
                  get when() {
                    return s().actualRemaining > 0;
                  },
                  get children() {
                    return e(B, {
                      onClick: () => {
                        try {
                          return n();
                        } catch (u) {}
                      },
                      type: "brand",
                      get children() {
                        return l("Claim");
                      },
                    });
                  },
                }),
              ];
            },
          });
        },
      });
    },
    get children() {
      return e(p, {
        get when() {
          var u;
          return (u = t()) == null ? void 0 : u.unlocked;
        },
        get fallback() {
          return (() => {
            var u = De();
            return (
              o(
                u,
                e($e, {
                  get unLockLevel() {
                    var c;
                    return (c = t()) == null ? void 0 : c.unlockedVIPLevel;
                  },
                })
              ),
              u
            );
          })();
        },
        get children() {
          return [
            e(_, {
              get label() {
                return l("Current Tier");
              },
              get current() {
                return (() => {
                  var u = Jr();
                  return (
                    o(
                      u,
                      () => {
                        var c, g;
                        return (g =
                          (c = s().currentTire) == null
                            ? void 0
                            : c.tireName) != null
                          ? g
                          : "--";
                      },
                      null
                    ),
                    o(
                      u,
                      e(p, {
                        get when() {
                          return s().rechargeRate > 0;
                        },
                        get children() {
                          var c = Kr();
                          return o(c, () => s().rechargeRate + "%"), c;
                        },
                      }),
                      null
                    ),
                    u
                  );
                })();
              },
            }),
            e(d, {
              get currencyName() {
                return s().wagerCurrency;
              },
              toCurrency: !0,
              get children() {
                return e(_, {
                  get label() {
                    return l("Wager required");
                  },
                  get current() {
                    return e(d.Amount, {
                      get amount() {
                        return s().wageredAmount;
                      },
                    });
                  },
                  get total() {
                    return e(d.Amount, {
                      get amount() {
                        return s().wagerTarget;
                      },
                    });
                  },
                });
              },
            }),
          ];
        },
      });
    },
  });
}
const Ie = (a) => () => {
  if (a)
    return b.mutations
      .receiveReward(a)
      .then(
        () => (
          se.claim(),
          le(() => {
            b.refetchResource(b.bonusDashboardResource.name);
          })
        )
      )
      .then(se.claim)
      .catch(oe);
};
function rn() {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregatedWeeklyBonusData(a())),
    s = () => Z.features(xe.WeeklyBonus);
  return e(D, {
    get title() {
      return l("Weekly Cashback");
    },
    class: "bg-gradient-weeklyBonus_card",
    get cover() {
      return e(ie, {
        get src() {
          return P.bonusWeekly;
        },
      });
    },
    onInfo: _r,
    get descriptions() {
      return (() => {
        var r = Ae(),
          n = r.firstChild;
        return (
          o(r, () => l("Ends in"), n),
          o(
            r,
            e(J, {
              get expiresInMS() {
                return t().weeklyBonusExpiredTime;
              },
            }),
            null
          ),
          r
        );
      })();
    },
    get action() {
      return e(p, {
        get when() {
          return t().actualRemaining > 0;
        },
        get children() {
          return e(B, {
            get onClick() {
              var r;
              return Ie((r = t().rewardResult) == null ? void 0 : r.rewardId);
            },
            type: "brand",
            get children() {
              return l("Claim");
            },
          });
        },
      });
    },
    get children() {
      return e(p, {
        get when() {
          var r;
          return (r = s()) == null ? void 0 : r.unlocked;
        },
        get fallback() {
          return (() => {
            var r = De();
            return (
              o(
                r,
                e($e, {
                  get unLockLevel() {
                    var n;
                    return (n = s()) == null ? void 0 : n.unlockedVIPLevel;
                  },
                })
              ),
              r
            );
          })();
        },
        get children() {
          return e(d, {
            get currencyName() {
              return t().wagerCurrency;
            },
            toCurrency: !0,
            get children() {
              return [
                e(_, {
                  get current() {
                    return e(d.Amount, {
                      get amount() {
                        return t().wageredAmount;
                      },
                    });
                  },
                  get total() {
                    return e(d.Amount, {
                      get amount() {
                        return t().wagerTarget;
                      },
                    });
                  },
                  get label() {
                    return l("Wager required");
                  },
                }),
                e(_, {
                  get current() {
                    return e(p, {
                      get when() {
                        return t().theLastWeeklyBonus;
                      },
                      fallback: "-",
                      get children() {
                        return e(d.Amount, {
                          get amount() {
                            return t().theLastWeeklyBonus.amount;
                          },
                        });
                      },
                    });
                  },
                  get label() {
                    return l("Last week bonus");
                  },
                }),
              ];
            },
          });
        },
      });
    },
  });
}
function nn() {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregatedMonthlyBonusData(a())),
    s = () => Z.features(xe.MonthlyBonus);
  return e(D, {
    get title() {
      return l("Monthly Cashback");
    },
    class: "bg-gradient-monthlyBonus_card",
    get cover() {
      return e(ie, {
        get src() {
          return P.bonusMonthly;
        },
      });
    },
    onInfo: kr,
    get descriptions() {
      return (() => {
        var r = Ae(),
          n = r.firstChild;
        return (
          o(r, () => l("Ends in"), n),
          o(
            r,
            e(J, {
              get expiresInMS() {
                return t().monthlyBonusExpiredTime;
              },
            }),
            null
          ),
          r
        );
      })();
    },
    get action() {
      return e(p, {
        get when() {
          return t().actualRemaining > 0;
        },
        get children() {
          return e(B, {
            get onClick() {
              var r;
              return Ie((r = t().rewardResult) == null ? void 0 : r.rewardId);
            },
            type: "brand",
            get children() {
              return l("Claim");
            },
          });
        },
      });
    },
    get children() {
      return e(p, {
        get when() {
          var r;
          return (r = s()) == null ? void 0 : r.unlocked;
        },
        get fallback() {
          return (() => {
            var r = De();
            return (
              o(
                r,
                e($e, {
                  get unLockLevel() {
                    var n;
                    return (n = s()) == null ? void 0 : n.unlockedVIPLevel;
                  },
                })
              ),
              r
            );
          })();
        },
        get children() {
          return e(d, {
            get currencyName() {
              return t().wagerCurrency;
            },
            toCurrency: !0,
            get children() {
              return [
                e(_, {
                  get current() {
                    return e(d.Amount, {
                      get amount() {
                        return t().wageredAmount;
                      },
                    });
                  },
                  get total() {
                    return e(d.Amount, {
                      get amount() {
                        return t().wagerTarget;
                      },
                    });
                  },
                  get label() {
                    return l("Wager required");
                  },
                }),
                e(_, {
                  get current() {
                    return e(p, {
                      get when() {
                        return t().theLastMonthlyBonus;
                      },
                      fallback: "-",
                      get children() {
                        return e(d.Amount, {
                          get amount() {
                            return t().theLastMonthlyBonus.amount;
                          },
                        });
                      },
                    });
                  },
                  get label() {
                    return l("Last month bonus");
                  },
                }),
              ];
            },
          });
        },
      });
    },
  });
}
function an() {
  const [a] = b.bonusDashboardResource(),
    t = C(() => N.aggregateSportWeeklyData(a())),
    s = () => Z.features(xe.SportWeeklyBonus);
  return e(D, {
    get title() {
      return l("Sports Weekly Bonus");
    },
    class: "bg-gradient-sportsBonus_card",
    get cover() {
      return e(ie, {
        get src() {
          return P.bonusSports;
        },
      });
    },
    onInfo: wr,
    get descriptions() {
      return (() => {
        var r = Ae(),
          n = r.firstChild;
        return (
          o(r, () => l("Ends in"), n),
          o(
            r,
            e(J, {
              get expiresInMS() {
                return t().sportsWeeklyBonusExpiredTime;
              },
            }),
            null
          ),
          r
        );
      })();
    },
    get action() {
      return e(p, {
        get when() {
          return t().actualRemaining > 0;
        },
        get children() {
          return e(B, {
            get onClick() {
              var r;
              return Ie((r = t().rewardResult) == null ? void 0 : r.rewardId);
            },
            type: "brand",
            get children() {
              return l("Claim");
            },
          });
        },
      });
    },
    get children() {
      return e(p, {
        get when() {
          var r;
          return (r = s()) == null ? void 0 : r.unlocked;
        },
        get fallback() {
          return (() => {
            var r = Zr();
            return (
              o(
                r,
                e($e, {
                  get unLockLevel() {
                    var n;
                    return (n = s()) == null ? void 0 : n.unlockedVIPLevel;
                  },
                })
              ),
              r
            );
          })();
        },
        get children() {
          return e(d, {
            get currencyName() {
              return t().wagerCurrency;
            },
            toCurrency: !0,
            get children() {
              return [
                e(_, {
                  get current() {
                    return e(d.Amount, {
                      get amount() {
                        return t().wageredAmount;
                      },
                    });
                  },
                  get total() {
                    return e(d.Amount, {
                      get amount() {
                        return t().wagerTarget;
                      },
                    });
                  },
                  get label() {
                    return l("Wager required");
                  },
                }),
                e(_, {
                  get current() {
                    return e(p, {
                      get when() {
                        return t().theLastSportsWeeklyBonus;
                      },
                      fallback: "-",
                      get children() {
                        return e(d.Amount, {
                          get amount() {
                            return t().theLastSportsWeeklyBonus.amount;
                          },
                        });
                      },
                    });
                  },
                  get label() {
                    return l("Last week bonus");
                  },
                }),
              ];
            },
          });
        },
      });
    },
  });
}
var sn = i(
    '<div class="flex h-full w-full items-center justify-center"><div><span class="transition-all duration-75 ease-out">'
  ),
  ln = i('<div class="absolute left-0 top-0 w-full">'),
  on = i('<div class="-mx-4 flex flex-col gap-y-8">'),
  un = i(
    '<div class="flex flex-col gap-y-4"><h2 class="flex justify-between text-lg font-extrabold text-primary"><span class=relative>'
  );
const cn = (a) =>
    (() => {
      var t = sn(),
        s = t.firstChild,
        r = s.firstChild;
      return (
        o(s, () => a.icon, r),
        o(r, () => a.title),
        V(() =>
          ne(
            s,
            X(
              "relative flex w-[7.25rem] items-center justify-center gap-x-1 text-sm leading-none tracking-tighter",
              a.active
                ? "font-extrabold text-primary"
                : "font-semibold text-secondary"
            )
          )
        ),
        t
      );
    })(),
  gn = () => {
    const a = Le(),
      t = (n) =>
        ["quests", "luckySpin", "roll", "rakeback"].includes(n.badgeType),
      s = (n) =>
        [
          "monthlyBonus",
          "weeklyBonus",
          "sportsBonus",
          "levelup",
          "recharge",
        ].includes(n.badgeType);
    return {
      tabs: C(() => [
        {
          title: l("General Bonus"),
          icon: e(j, { name: "bonus", size: 18 }),
          content: e(Pr, {}),
          tabType: 0,
          badges: () => {
            var n, u;
            return (u = (n = a()) == null ? void 0 : n.getBadgeStatistics(t)) !=
              null
              ? u
              : 0;
          },
        },
        {
          title: l("VIP Bonus"),
          icon: e(j, { name: "vipCrown", size: 18 }),
          content: e(Hr, {}),
          tabType: 1,
          badges: () => {
            var n, u;
            return (u = (n = a()) == null ? void 0 : n.getBadgeStatistics(s)) !=
              null
              ? u
              : 0;
          },
        },
        {
          title: l("Special Bonus"),
          icon: e(j, { name: "recommendedGame", size: 18 }),
          content: e(qr, {}),
          tabType: 2,
          badges: () => {
            var n, u;
            return (u =
              (n = a()) == null
                ? void 0
                : n.getBadgeStatistics(
                    (c) => c.badgeType === "specialBonus"
                  )) != null
              ? u
              : 0;
          },
        },
      ]),
    };
  },
  dn = (a) => {
    const { tabs: t } = gn(),
      [s, r] = Oe(0);
    return e(p, {
      get when() {
        return $.mobile;
      },
      get fallback() {
        return (() => {
          var n = on();
          return (
            o(
              n,
              e(z, {
                get each() {
                  return t();
                },
                children: (u) =>
                  (() => {
                    var c = un(),
                      g = c.firstChild,
                      m = g.firstChild;
                    return (
                      o(m, () => u.title, null),
                      o(
                        m,
                        e(ye, {
                          get class() {
                            return X(
                              "absolute -right-2 -top-1 -translate-y-1/2 translate-x-1/2"
                            );
                          },
                          overflow: 1 / 0,
                          get value() {
                            var y;
                            return (y = u.badges()) != null ? y : 0;
                          },
                        }),
                        null
                      ),
                      o(
                        g,
                        e(p, {
                          get when() {
                            return u.tabType === 2;
                          },
                          get children() {
                            return e(kt, {});
                          },
                        }),
                        null
                      ),
                      o(c, () => u.content, null),
                      c
                    );
                  })(),
              })
            ),
            n
          );
        })();
      },
      get children() {
        return [
          (() => {
            var n = ln();
            return (
              o(
                n,
                e(z, {
                  get each() {
                    return t();
                  },
                  children: (u, c) => {
                    const g = [
                      "-translate-x-3/4",
                      "-translate-x-7",
                      "-translate-x-9",
                    ];
                    return e(ye, {
                      get class() {
                        return X(g[c()], "absolute -top-1");
                      },
                      get style() {
                        return { left: (c() + 1) * (100 / t().length) + "%" };
                      },
                      overflow: 1 / 0,
                      get value() {
                        return u.badges();
                      },
                    });
                  },
                })
              ),
              n
            );
          })(),
          e(je, {
            type: "indicator",
            get value() {
              return s();
            },
            onChange: r,
            get children() {
              return e(z, {
                get each() {
                  return t();
                },
                children: (n, u) =>
                  e(ve, {
                    fallback: Te,
                    get children() {
                      return e(je.TabItem, {
                        class: "mt-4",
                        get title() {
                          return e(cn, {
                            get icon() {
                              return n.icon;
                            },
                            get active() {
                              return s() === u();
                            },
                            get title() {
                              return n.title;
                            },
                          });
                        },
                        get children() {
                          return n.content;
                        },
                      });
                    },
                  }),
              });
            },
          }),
        ];
      },
    });
  },
  mn = () =>
    e(Lt, {
      revealOrder: "backwards",
      get children() {
        return e(dn, {});
      },
    });
var pn = i(
    '<div class="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-layer1 opacity-80">'
  ),
  hn = i("<div>"),
  bn = i("<div><img>"),
  fn = i(
    '<div class="-mb-4 -mt-8 flex h-[10rem] flex-col items-center justify-center"><span>'
  ),
  yn = i(
    '<section class="mx-4 flex flex-shrink-0 flex-col justify-center gap-y-3 rounded-xl border border-solid border-white_alpha5 bg-layer4 p-4 bg-deposit-dashboard sm:mx-0 sm:w-[28.562rem]"><div class="flex justify-between"><div class="flex flex-col justify-center sm:flex-row sm:items-center sm:gap-x-2"><h3 class="text-lg font-extrabold text-primary"></h3><p class="text-sm font-semibold text-secondary">: <span class=text-brand></span></p></div></div><div class="relative z-10 flex flex-col gap-y-2 sm:flex-row sm:items-center sm:justify-between"><span class="text-sm font-semibold text-secondary">: '
  ),
  vn = i(
    '<div class="absolute left-1/2 top-1/2 h-[1.375rem] -translate-x-1/2 -translate-y-1/2 bg-layer2"><div class="h-[1.375rem] bg-deposit-progress-bar">'
  );
const xn = () => {
  const [a] = b.bonusDashboardResource(),
    t = C(() => a()[0]),
    [s] = wt,
    r = () => {
      const v = s().firstExpiredTime > 0,
        x = rr(t().depositBonus.first.maxBonusRatio);
      return v ? x.slice(0, x.length - 1) : x.slice(1);
    },
    n = () => t().depositBonus.first.bonusLogs.length > 3,
    u = () => [
      { progressTarget: 0, label: `+${r()[0] * 100}%`, max: 2e4 },
      { progressTarget: 33, label: `+${r()[1] * 100}%`, max: 4e4 },
      { progressTarget: 66, label: `+${r()[2] * 100}%`, max: 6e4 },
      { progressTarget: 100, label: `+${r()[3] * 100}%`, max: 1e5 },
    ],
    c = ({ reached: v, lastReached: x, label: H, bonusLog: ee, index: F }) => {
      const ge = () =>
          (() => {
            var R = pn();
            return (
              o(R, e(j, { name: "check", size: 16, class: "text-brand" })), R
            );
          })(),
        Ce = () =>
          (() => {
            var S = hn();
            return (
              V(
                (w) => {
                  var M = X("relative -z-20 bg-alw_dark"),
                    T = 60 * $.remScale + "px";
                  return (
                    M !== w.e && ne(S, (w.e = M)),
                    T !== w.t &&
                      ((w.t = T) != null
                        ? S.style.setProperty("height", T)
                        : S.style.removeProperty("height")),
                    w
                  );
                },
                { e: void 0, t: void 0 }
              ),
              S
            );
          })(),
        te = (R) => {
          const S = [
            v && x ? E.coin : E.coin_closed,
            v && x ? E.coin2 : E.coin2_closed,
            v && x ? E.coin3 : E.coin3_closed,
            v && x ? E.coin4 : E.coin4_closed,
            ,
          ];
          return (() => {
            var w = bn(),
              M = w.firstChild;
            return (
              o(
                w,
                e(p, {
                  when: ee,
                  get children() {
                    return ge();
                  },
                }),
                M
              ),
              V(
                (T) => {
                  var Q = X("flex size-16 items-center justify-center", R),
                    I = X(
                      v ? "" : "grayscale",
                      F === S.length - 1 ? "-mt-2" : ""
                    ),
                    re = S[F];
                  return (
                    Q !== T.e && ne(w, (T.e = Q)),
                    I !== T.t && ne(M, (T.t = I)),
                    re !== T.a && Ge(M, "src", (T.a = re)),
                    T
                  );
                },
                { e: void 0, t: void 0, a: void 0 }
              ),
              w
            );
          })();
        };
      return (() => {
        var R = fn(),
          S = R.firstChild;
        return (
          o(R, () => te("absolute -top-4"), S),
          o(R, Ce, S),
          o(S, H),
          V((w) =>
            ht(
              S,
              {
                "flex items-center text-sm font-semibold": !0,
                "text-secondary": !x,
                "text-[#FFBA08]": x,
              },
              w
            )
          ),
          R
        );
      })();
    },
    g = () => {
      const v = t().depositBonus.first.bonusLogs.length;
      return u()[Math.min(u().length - 1, v)];
    },
    m = () =>
      u().map((v, x) =>
        We(fe({}, v), {
          index: x,
          bonusLog: t().depositBonus.first.bonusLogs[x],
          icon: c,
        })
      ),
    y = () => t().depositBonus.first.expiredTime,
    f = () => {
      nr();
    },
    A = Ue();
  return (() => {
    var v = yn(),
      x = v.firstChild,
      H = x.firstChild,
      ee = H.firstChild,
      F = ee.nextSibling,
      ge = F.firstChild,
      Ce = ge.nextSibling,
      te = x.nextSibling,
      R = te.firstChild,
      S = R.firstChild;
    return (
      o(ee, () => l("Deposit Bonus")),
      o(F, () => l("Get up to"), ge),
      o(
        Ce,
        e(d, {
          currencyName: "USDFIAT",
          get toCurrency() {
            return ae.bonusCurrencyName;
          },
          get children() {
            return e(d.Content, {
              get children() {
                return e(d.Amount, {
                  get amount() {
                    return g().max;
                  },
                });
              },
            });
          },
        })
      ),
      o(
        x,
        e(Y, {
          class: "size-6 p-0",
          get children() {
            return e(j, {
              name: "inform",
              onClick: f,
              size: 24,
              class: "cursor-pointer text-tertiary",
            });
          },
        }),
        null
      ),
      o(
        v,
        e(Qt, {
          class: "-mb-6 mt-4",
          get milestones() {
            return m();
          },
          get progress() {
            return g().progressTarget;
          },
          renderProgress: (w) => {
            const M = (L, U, O, _e, W, de = 0) => {
                const rt = (h) =>
                    h.map((k) => {
                      const { r: we, x: pe, y: he } = k,
                        be = we / 2,
                        at = [pe - be + de, he],
                        st = [pe + de, he - be],
                        lt = [pe + de + be, he],
                        ot = [pe + de, he + be];
                      return { left: at, top: st, right: lt, bottom: ot };
                    }),
                  nt = O.map((h) => {
                    const k = new Qe(L).mul(h).div(100).toNumber(),
                      we = U / 2;
                    return { x: k, y: we, r: _e };
                  }),
                  me = rt(nt).map((h) => ({
                    leftTop: [
                      h.left[0] + W / 2 + "px",
                      h.left[1] - W / 2 + "px",
                    ].join(" "),
                    leftBottom: [
                      h.left[0] + W / 2 + "px",
                      h.left[1] + W / 2 + "px",
                    ].join(" "),
                    rightTop: [
                      h.right[0] - W / 2 + "px",
                      h.right[1] - W / 2 + "px",
                    ].join(" "),
                    rightBottom: [
                      h.right[0] - W / 2 + "px",
                      h.right[1] + W / 2 + "px",
                    ].join(" "),
                    top: h.top.map((k) => k + "px").join(" "),
                    bottom: h.bottom.map((k) => k + "px").join(" "),
                    left: h.left.map((k) => k + "px").join(" "),
                    right: h.right.map((k) => k + "px").join(" "),
                  })),
                  ke = [];
                return (
                  me.forEach((h, k) => {
                    ke.push(
                      k === 0 ? h.left : h.leftTop,
                      h.top,
                      k === me.length - 1 ? h.right : h.rightTop
                    );
                  }),
                  me
                    .slice()
                    .reverse()
                    .forEach((h, k) => {
                      ke.push(
                        k === 0 ? h.right : h.rightBottom,
                        h.bottom,
                        k === me.length - 1 ? h.left : h.leftBottom
                      );
                    }),
                  `polygon(${ke.join(",")})`
                );
              },
              T = C(() => {
                var L;
                return (L = u().findIndex((U) => U.progressTarget >= w)) != null
                  ? L
                  : 0;
              }),
              Q = () => ($.mobile ? 320 : 380),
              I = 22,
              re = 8,
              et = C(() => ({
                "clip-path": M(
                  Q() * $.remScale,
                  I * $.remScale,
                  u().map((L) => L.progressTarget),
                  I * $.remScale,
                  re * $.remScale,
                  (I / 2) * $.remScale
                ),
                width: (Q() + I) * $.remScale + "px",
              })),
              tt = C(() => {
                const L = (Q() * w) / 100;
                return {
                  "clip-path": M(
                    Q() * $.remScale,
                    I * $.remScale,
                    u()
                      .slice(0, T() + 1)
                      .map((U) => U.progressTarget),
                    (I - 5) * $.remScale,
                    (re - 4) * $.remScale,
                    (I / 2) * $.remScale
                  ),
                  width: (L + I) * $.remScale + "px",
                };
              });
            return (() => {
              var L = vn(),
                U = L.firstChild;
              return (
                V(
                  (O) => {
                    var _e = fe({}, et()),
                      W = fe({}, tt());
                    return (O.e = Me(L, _e, O.e)), (O.t = Me(U, W, O.t)), O;
                  },
                  { e: void 0, t: void 0 }
                ),
                L
              );
            })();
          },
        }),
        te
      ),
      o(R, () => l("Bonus ends"), S),
      o(
        R,
        e(J, {
          get expiresInMS() {
            return y();
          },
        }),
        null
      ),
      o(
        te,
        e(p, {
          get when() {
            return n();
          },
          get fallback() {
            return e(Y, {
              onClick: () => A("/wallet/deposit"),
              class: "text-lg sm:text-base",
              type: "brand",
              get children() {
                return l("Deposit Now");
              },
            });
          },
          get children() {
            return e(Y, {
              type: "second",
              class: "text-lg sm:text-base",
              onClick: () => {
                A("/promotions/promotion");
              },
              get children() {
                return l("Check More Promos");
              },
            });
          },
        }),
        null
      ),
      v
    );
  })();
};
var $n = i(
    '<div class="bonus-root flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-4"><div class="justify-center-center relative flex flex-col justify-center rounded-xl px-4 pb-2 pt-16 sm:flex-grow sm:overflow-hidden sm:py-4"><div class="absolute left-0 right-0 top-0 -z-10 h-screen bg-gradient-bonus sm:h-full sm:bg-layer3"></div><img class="absolute -top-1/2 left-18 -z-10 w-[33.375rem] opacity-40 sm:left-full sm:top-1/2 sm:-translate-x-3/4 sm:-translate-y-1/2 sm:opacity-100"alt=Banner><div class="flex w-full justify-between">'
  ),
  Cn = i('<div class="relative mt-4 px-4">'),
  _n = i(
    '<div class=""><h1 class="mb-4 flex items-end justify-between text-2xl font-extrabold text-primary">'
  ),
  kn = i("<span class=text-primary>"),
  wn = i(
    '<div class="relative w-[26.625rem]"><div class="absolute right-1 top-1/2 h-8 -translate-y-1/2">'
  ),
  Bn = i('<span class="text-2xl font-extrabold text-primary sm:text-xl">'),
  Rn = i(
    '<div class="flex flex-col items-start justify-start sm:gap-y-3"><header class="flex flex-col sm:gap-y-6 sm:rounded-xl sm:bg-black_alpha5 sm:px-3 sm:py-2 sm:backdrop-blur-sm"><div><h3 class="text-sm font-semibold text-secondary">(<!>)</h3></div><div class="hidden gap-x-3 sm:flex">'
  ),
  Sn = i(
    '<span class="inline-flex flex-col gap-y-1 text-xs font-semibold leading-none text-secondary"><span class="text-sm font-semibold text-primary">'
  );
const Tn = () =>
    e(Dn, {
      get children() {
        return [
          (() => {
            var a = $n(),
              t = a.firstChild,
              s = t.firstChild,
              r = s.nextSibling,
              n = r.nextSibling;
            return (
              o(
                n,
                e(ve, {
                  fallback: Te,
                  get children() {
                    return e(An, {});
                  },
                }),
                null
              ),
              o(
                n,
                e(p, {
                  get when() {
                    return $.mobile;
                  },
                  get children() {
                    return e(He, {});
                  },
                }),
                null
              ),
              o(
                a,
                e(ve, {
                  fallback: Te,
                  get children() {
                    return e(xn, {});
                  },
                }),
                null
              ),
              V(() => Ge(r, "src", P.banner_pc)),
              a
            );
          })(),
          (() => {
            var a = Cn();
            return o(a, e(mn, {})), a;
          })(),
        ];
      },
    }),
  Ln = () => {
    const [a] = It.vipSupportResource();
    return e(Ke, {
      get children() {
        return e(Ye, {
          get when() {
            return a().hostCard;
          },
          children: (t) =>
            e(Dt, {
              get children() {
                return e(G, {
                  get href() {
                    return `/chat/${t().userId}`;
                  },
                  get children() {
                    return e(Y, {
                      class: "bg-white_alpha10 px-2",
                      size: "s",
                      get children() {
                        return e(j, { size: 20, name: "vipChat" });
                      },
                    });
                  },
                });
              },
            }),
        });
      },
    });
  },
  Dn = (a) =>
    e(p, {
      get when() {
        return $.mobile;
      },
      get fallback() {
        return (() => {
          var t = _n(),
            s = t.firstChild;
          return (
            o(s, () => l("Bonus"), null),
            o(s, e(He, {}), null),
            o(t, () => a.children, null),
            t
          );
        })();
      },
      get children() {
        return e(Bt, {
          class: "dialog-transparent-title",
          get titleActions() {
            return e(ve, {
              fallback: null,
              get children() {
                return e(Ln, {});
              },
            });
          },
          get title() {
            return (() => {
              var t = kn();
              return o(t, () => l("Bonus")), t;
            })();
          },
          get children() {
            return a.children;
          },
        });
      },
    }),
  He = () => {
    const { redeemCode: a, setRedeemCode: t, handleRedeem: s } = Je(),
      r = () =>
        e(Y, {
          get onClick() {
            return $.mobile ? hr : s;
          },
          type: "second",
          class:
            "flex h-8 flex-shrink-0 gap-x-1 border border-solid border-white_alpha5 bg-white_alpha20 text-sm font-semibold text-primary backdrop-blur",
          get children() {
            return [
              e(j, { name: "promotion", class: "text-secondary", size: 16 }),
              " ",
              K(() => l("Redeem Code")),
            ];
          },
        });
    return e(p, {
      get when() {
        return $.mobile;
      },
      get fallback() {
        return (() => {
          var n = wn(),
            u = n.firstChild;
          return (
            o(
              n,
              e(qe, {
                get value() {
                  return a();
                },
                class: "h-10 w-full pr-32 text-sm font-semibold",
                onChange: (c) => t(c),
                get placeholder() {
                  return l("Redeem your bonus here.");
                },
              }),
              u
            ),
            o(u, r),
            n
          );
        })();
      },
      get children() {
        return r();
      },
    });
  },
  An = () => {
    const a = Ue(),
      [t] = b.bonusDashboardResource(),
      s = () => [
        {
          title: l("Total VIP Bonus "),
          amount: () => t()[0].statistics.first.totalVipBonus,
        },
        {
          title: l("Total Special Bonus "),
          amount: () => t()[0].statistics.first.totalSpecialBonus,
        },
        {
          title: l("Total General Bonus "),
          amount: () => t()[0].statistics.first.totalGeneralBonus,
        },
      ];
    return e(d, {
      currencyName: "USDFIAT",
      toCurrency: !0,
      get children() {
        var r = Rn(),
          n = r.firstChild,
          u = n.firstChild,
          c = u.firstChild,
          g = c.firstChild,
          m = g.nextSibling;
        m.nextSibling;
        var y = u.nextSibling;
        return (
          o(c, () => l("Total Bonus Claimed "), g),
          o(c, e(d.AliasName, {}), m),
          o(
            u,
            e(Ke, {
              get fallback() {
                return e(At, { class: "h-8 w-40 rounded" });
              },
              get children() {
                var f = Bn();
                return (
                  o(
                    f,
                    e(d.Amount, {
                      get amount() {
                        return t()[0].statistics.first.totalClaimed;
                      },
                    })
                  ),
                  f
                );
              },
            }),
            null
          ),
          o(
            y,
            e(z, {
              get each() {
                return s();
              },
              children: (f) =>
                (() => {
                  var A = Sn(),
                    v = A.firstChild;
                  return (
                    o(A, () => f.title, v),
                    o(
                      v,
                      e(d.Amount, {
                        get amount() {
                          return f.amount();
                        },
                      })
                    ),
                    A
                  );
                })(),
            })
          ),
          o(
            r,
            e(Y, {
              onClick: () => {
                a("/bonus-detail");
              },
              get size() {
                return $.mobile ? "m" : "s";
              },
              class:
                "px-0 py-0 text-sm font-semibold text-secondary sm:border sm:border-solid sm:border-third sm:bg-black_alpha5 sm:px-4 sm:py-4 sm:text-base sm:text-primary",
              get children() {
                return [
                  K(() => l("Details")),
                  e(j, {
                    name: "singleSmallArrow",
                    size: 16,
                    class: "rotate-180",
                  }),
                ];
              },
            }),
            null
          ),
          r
        );
      },
    });
  },
  ya = () => e(Tn, {});
export { ya as default };
