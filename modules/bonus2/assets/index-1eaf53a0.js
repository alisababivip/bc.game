import {
  c as r,
  m as O,
  i as a,
  t as d,
  e as D,
  s as G,
  d as Z,
  a as L,
  u as ee,
} from "./web-13cf6287.js";
import {
  N as l,
  p as M,
  P as te,
  D as A,
  B as U,
  m as re,
  c as $,
  Q as ne,
  U as j,
  V as ae,
  T as E,
  G as le,
  e as ie,
} from "./manifest-cc1f4445.js";
import {
  F as se,
  c as P,
  d as oe,
  S as k,
  e as ue,
} from "./solid-js-38561dfe.js";
import { S as B } from "./skeleton-c8e80175.js";
import { t as n, T as N } from "./i18n-023baa0d.js";
import { v as ce } from "./vip-c0abd707.js";
import { e as V, f as R, g as p } from "./index-f53ef53b.js";
import { v as de } from "./index-4c839f7e.js";
import { I as K } from "./index-e10d67ae.js";
import { P as ge } from "./popup-common-rules-ba048024.js";
import { R as ve } from "./recharge-tier-card-4577d22c.js";
import { C as H } from "./currency-format-e71c6b76.js";
const me = {
  getConfigByLevel(e) {
    switch (ce.level(e).vipTypeNum) {
      case l.VipLevelStatus.None:
        return {
          vipClub: { styles: { container: "bg-gradient-vip-container_none" } },
          hostCard: {
            assets: {
              bannerBackgroundImg: V.bgNone,
              progressCircle: R.circleNone,
            },
            styles: {
              container: "bg-gradient-banner_none",
              progressBar: "bg-gradient-to-r to-[#6792C5] from-[#A5B6CA]",
              hostTag: "text-[#526A85]",
            },
          },
        };
      case l.VipLevelStatus.Bronze:
        return {
          vipClub: {
            styles: { container: "bg-gradient-vip-container_bronze" },
          },
          hostCard: {
            assets: {
              bannerBackgroundImg: V.bgBronze,
              progressCircle: R.circleBronze,
            },
            styles: {
              hostTag: "text-[#6E412E]",
              container: "bg-gradient-banner_bronze",
              progressBar: "bg-gradient-to-r to-[#EEC2A8] from-[#9A5433]",
            },
          },
          vipBonusList: {
            styles: { listHeader: "bg-gradient-benefit_header_bronze" },
          },
        };
      case l.VipLevelStatus.Silver:
        return {
          vipClub: {
            styles: { container: "bg-gradient-vip-container_silver" },
          },
          hostCard: {
            styles: {
              hostTag: "text-[#727272]",
              container: "bg-gradient-banner_silver",
              progressBar: "bg-gradient-to-r to-[#FFF8F6] from-[#6A6A6A]",
            },
            assets: {
              bannerBackgroundImg: V.bgSilver,
              progressCircle: R.circleSilver,
            },
          },
          vipBonusList: {
            styles: { listHeader: "bg-gradient-benefit_header_silver" },
          },
        };
      case l.VipLevelStatus.Gold:
        return {
          vipClub: { styles: { container: "bg-gradient-vip-container_gold" } },
          hostCard: {
            styles: {
              hostTag: "text-[#B47326]",
              container: "bg-gradient-banner_gold",
              progressBar: "bg-gradient-to-r to-[#FDD67B] from-[#FAAF16]",
            },
            assets: {
              bannerBackgroundImg: V.bgGold,
              progressCircle: R.circleGold,
            },
          },
          vipBonusList: {
            styles: { listHeader: "bg-gradient-benefit_header_gold" },
          },
        };
      case l.VipLevelStatus.Platinum_I:
      case l.VipLevelStatus.Platinum_II:
        return {
          vipClub: {
            styles: { container: "bg-gradient-vip-container_platinum" },
          },
          hostCard: {
            styles: {
              hostTag: "text-[#7310F0]",
              container: "bg-gradient-banner_platinum",
              progressBar: "bg-gradient-to-r to-[#DEB5FB] from-[#AB7DE8]",
            },
            assets: {
              bannerBackgroundImg: V.bgPlatinum,
              progressCircle: R.circlePlatinum,
            },
          },
          vipBonusList: {
            styles: { listHeader: "bg-gradient-benefit_header_platinum" },
          },
        };
      case l.VipLevelStatus.Diamond_I:
      case l.VipLevelStatus.Diamond_II:
      case l.VipLevelStatus.Diamond_III:
        return {
          vipClub: {
            styles: { container: "bg-gradient-vip-container_diamond" },
          },
          hostCard: {
            styles: {
              hostTag: "text-[#F450A9]",
              container: "bg-gradient-banner_diamond",
              progressBar: "bg-gradient-to-r to-[#F8B0D9] from-[#E55CA1]",
            },
            assets: {
              bannerBackgroundImg: V.bgDiamond,
              progressCircle: R.circleDiamond,
            },
          },
          vipBonusList: {
            styles: { listHeader: "bg-gradient-benefit_header_diamond" },
          },
        };
    }
  },
};
var pe = d("<ul class=popup-rules>"),
  he = d('<li class="font-semibold text-secondary">');
const fe = () =>
  M.push(() =>
    r(ge, {
      get title() {
        return n("Sports Weekly Bonus Rules");
      },
      get rules() {
        return [
          [
            O(() => n("7d Sports Wager:")),
            (() => {
              var e = pe();
              return (
                a(
                  e,
                  r(se, {
                    get each() {
                      return [
                        "$500.00-$2,499.00 = $5.00 " + n("Bonus"),
                        "$2,500.00-$4,999.00 = $30.00 " + n("Bonus"),
                        "$5,000.00-$9,999.00 = $70.00 " + n("Bonus"),
                        "$10,000.00-$49,999.00 = $150.00 " + n("Bonus"),
                        "$50,000.00-$249,999.00 = $500.00 " + n("Bonus"),
                        "$250,000.00+ = $1,000.00 " + n("Bonus"),
                      ];
                    },
                    children: (i) =>
                      (() => {
                        var t = he();
                        return a(t, i), t;
                      })(),
                  })
                ),
                e
              );
            })(),
          ],
          n("Wager period Saturday 00:00 hrs ~ Friday 23:59hrs (7days)"),
          n("We aim to drop Weekly Bonus every Saturday."),
        ];
      },
    })
  );
var be = d(
  '<div class="mb-4 flex flex-col gap-y-6 font-semibold text-secondary"><p></p><p>'
);
const ye = (e) => M.push(() => r(xe, { tires: e })),
  xe = (e) =>
    r(te, {
      get title() {
        return n("Recharge Detail");
      },
      get children() {
        return [
          (() => {
            var i = be(),
              t = i.firstChild,
              c = t.nextSibling;
            return (
              a(t, () =>
                n(
                  "Recharge Rate: your rate is calculated based on your wager. The more you wager, the higher recharge rate you will get !"
                )
              ),
              a(c, () => n("Your current VIP recharge rate tiers:")),
              i
            );
          })(),
          r(ve, {
            get tires() {
              return e.tires;
            },
          }),
        ];
      },
    });
var Ie = d(
    '<div class="flex items-center gap-x-4 py-[0.625rem]"><div class="flex flex-1 flex-col gap-y-1 self-center"><div class="text-base font-extrabold"></div><div class="text-sm font-semibold text-secondary"></div></div><div class="flex size-[4.375rem] items-center justify-center rounded-full border border-solid border-third bg-layer5"><img alt=icon>'
  ),
  _e = d("<span>: "),
  Ce = d('<span class="font-extrabold text-brand">'),
  I = d("<span>"),
  J = d('<span class="inline-flex items-center gap-x-1">'),
  Le = d('<span class="mx-1 font-extrabold text-brand">__rechargeRange__'),
  Q = d("<span>__type__"),
  X = d('<span class="mx-1 font-extrabold text-brand">Wager*1% *__amount__%');
const h = (e) =>
    (() => {
      var i = Ie(),
        t = i.firstChild,
        c = t.firstChild,
        u = c.nextSibling,
        m = t.nextSibling,
        g = m.firstChild;
      return (
        a(c, () => e.title), a(u, () => e.desc), D(() => G(g, "src", e.icon)), i
      );
    })(),
  $e = (e) => {
    const [i] = re;
    return r(h, {
      get title() {
        return n("Level Up Bonus");
      },
      get desc() {
        return [
          (() => {
            var t = _e(),
              c = t.firstChild;
            return a(t, () => n("Total prize"), c), t;
          })(),
          (() => {
            var t = Ce();
            return (
              a(
                t,
                r(H, {
                  currencyName: "BCD",
                  get toCurrency() {
                    return i().currencyName;
                  },
                  get children() {
                    return r(H.Amount, {
                      get amount() {
                        return e.amount;
                      },
                    });
                  },
                })
              ),
              t
            );
          })(),
        ];
      },
      get icon() {
        return p.iconBonus;
      },
    });
  },
  Se = () =>
    r(h, {
      get title() {
        return n("Raining");
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () =>
              n("Rain algorithm rewards for highly active players in chat.")
            ),
            e
          );
        })();
      },
      get icon() {
        return p.iconRaining;
      },
    }),
  Be = () =>
    r(h, {
      get title() {
        return n("Coin Drop");
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () => n("Create a coin drop for friends in the chat.")), e
          );
        })();
      },
      get icon() {
        return p.iconCoinDrop;
      },
    }),
  ke = () =>
    r(h, {
      get title() {
        return n("Tips");
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () =>
              n("Show appreciation for other players by sending them tips.")
            ),
            e
          );
        })();
      },
      get icon() {
        return p.iconTips;
      },
    }),
  we = () =>
    r(h, {
      get title() {
        return n("VIP Spin");
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () =>
              n(
                "Starting from VIP level 8, you will receive an extra lucky spin with each level-up."
              )
            ),
            e
          );
        })();
      },
      get icon() {
        return p.iconSpin;
      },
    }),
  Ve = (e) => {
    const i = P(() => `${new A(e.min).mul(100)}-${new A(e.max).mul(100)}%`);
    return r(h, {
      get title() {
        return (() => {
          var t = J();
          return (
            a(t, () => n("Recharge"), null),
            a(
              t,
              r(U, {
                onClick: () => {
                  ye(e.tires);
                },
                class: "h-4 p-0",
                get children() {
                  return r(K, {
                    name: "inform",
                    class: "text-secondary",
                    size: 16,
                  });
                },
              }),
              null
            ),
            t
          );
        })();
      },
      get desc() {
        return r(N, {
          get rechargeRange() {
            return i();
          },
          i18nKey: "bonus.welecome.newtext.desc10",
          get children() {
            return [
              "Activate your Recharge and claim",
              Le(),
              "bonus of wager*1% for 7 days in a row.",
            ];
          },
        });
      },
      get icon() {
        return p.iconRecharge;
      },
    });
  },
  Re = (e) =>
    r(h, {
      get title() {
        return n("Weekly Cashback");
      },
      get desc() {
        return r(N, {
          get type() {
            return n("Weekly");
          },
          get amount() {
            return new A(e.amount).mul(100);
          },
          i18nKey: "bonus.welecome.newtext.desc11",
          get children() {
            return [
              "Receive your ",
              Q(),
              " bonus of",
              X(),
              "approximately based on your wager amount.",
            ];
          },
        });
      },
      get icon() {
        return p.iconCashbackWeekly;
      },
    }),
  De = (e) =>
    r(h, {
      get title() {
        return n("Monthly Cashback");
      },
      get desc() {
        return r(N, {
          get type() {
            return n("Monthly");
          },
          get amount() {
            return new A(e.amount).mul(100);
          },
          i18nKey: "bonus.welecome.newtext.desc11",
          get children() {
            return [
              "Receive your ",
              Q(),
              " bonus of",
              X(),
              "approximately based on your wager amount.",
            ];
          },
        });
      },
      get icon() {
        return p.iconCashbackMonthly;
      },
    }),
  Te = () =>
    r(h, {
      get title() {
        return (() => {
          var e = J();
          return (
            a(e, () => n("Sports Weekly Bonus"), null),
            a(
              e,
              r(U, {
                onClick: () => {
                  fe();
                },
                class: "h-4 p-0",
                get children() {
                  return r(K, {
                    name: "inform",
                    class: "text-secondary",
                    size: 16,
                  });
                },
              }),
              null
            ),
            e
          );
        })();
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () =>
              n("Additional rewards and benefits for sports bettors.")
            ),
            e
          );
        })();
      },
      get icon() {
        return p.iconSport;
      },
    }),
  Ae = () =>
    r(h, {
      get title() {
        return n("No-fee Withdrawal");
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () =>
              n("Seamless withdrawals with zero fees for cryptocurrency.")
            ),
            e
          );
        })();
      },
      get icon() {
        return p.iconWithdraw;
      },
    }),
  Pe = () =>
    r(h, {
      get title() {
        return n("Exclusive SVIP perks");
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () => n("Uncover unimaginable surprises as our Diamond VIP.")),
            e
          );
        })();
      },
      get icon() {
        return p.iconSvip;
      },
    }),
  Fe = () =>
    r(h, {
      get title() {
        return n("Luxury giveaway");
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () =>
              n("Join for an exclusive chance to win marvelous surprises.")
            ),
            e
          );
        })();
      },
      get icon() {
        return p.iconGiveaway;
      },
    }),
  We = () =>
    r(h, {
      get title() {
        return n("VIP Host");
      },
      get desc() {
        return (() => {
          var e = I();
          return (
            a(e, () => n("Enjoy on-demand service and exclusive benefits.")), e
          );
        })();
      },
      get icon() {
        return p.iconHost;
      },
    }),
  o = {
    Bonus: $e,
    Raining: Se,
    CoinDrop: Be,
    Tips: ke,
    Spin: we,
    Recharge: Ve,
    CashbackWeekly: Re,
    CashbackMonthly: De,
    Sport: Te,
    Withdraw: Ae,
    SVIP: Pe,
    Giveaway: Fe,
    Host: We,
  };
var Ne = d("<div><img><span class=text-center>");
const Y = (e) =>
  (() => {
    var i = Ne(),
      t = i.firstChild,
      c = t.nextSibling;
    return (
      (i.$$click = () => e.onClick()),
      a(c, () => e.rankText),
      D(
        (u) => {
          var m = $(
              "flex h-full w-full flex-shrink-0 cursor-pointer flex-col items-center gap-y-1 rounded-lg py-3 font-extrabold",
              e.isActive
                ? "vip-tag-selected backdrop-blur-sm transition-all duration-300"
                : "text-sm opacity-60"
            ),
            g = $("size-10"),
            s = e.badge,
            f = e.color;
          return (
            m !== u.e && L(i, (u.e = m)),
            g !== u.t && L(t, (u.t = g)),
            s !== u.a && G(t, "src", (u.a = s)),
            f !== u.o &&
              ((u.o = f) != null
                ? c.style.setProperty("color", f)
                : c.style.removeProperty("color")),
            u
          );
        },
        { e: void 0, t: void 0, a: void 0, o: void 0 }
      ),
      i
    );
  })();
Y.Fallback = () => r(B, { class: "h-full w-full" });
Z(["click"]);
var ze = d(
    '<div class="mt-[0.125rem] text-[0.625rem] font-semibold text-secondary">'
  ),
  Ee = d("<div><div><div>"),
  He = d("<div>"),
  Ge = d("<div><div></div><div>"),
  Me = d(
    '<div class="flex flex-col gap-y-3"><div><div class="flex flex-col gap-y-3"><div class="flex flex-col gap-y-1 rounded-xl bg-layer3 px-3 py-4">'
  ),
  Ue = d('<div class="flex h-full w-full">'),
  je = d('<div class="flex flex-col gap-y-1">');
let F;
const st = () => {
    F && F.scrollIntoView({ behavior: "smooth", block: "center" });
  },
  Ke = {
    0: { startLevel: 2, endLevel: 7 },
    1: { startLevel: 8, endLevel: 21 },
    2: { startLevel: 22, endLevel: 37 },
    3: { startLevel: 38, endLevel: 55 },
    4: { startLevel: 56, endLevel: 69 },
    5: { startLevel: 1, endLevel: 15 },
    6: { startLevel: 16, endLevel: 37 },
    7: { startLevel: 38, endLevel: 75 },
  },
  Je = (e) => {
    const i = P(() => {
        var m, g, s;
        const u =
          (g = (m = e.currentLevelInfo) == null ? void 0 : m.startLevel) != null
            ? g
            : 0;
        return (s = me.getConfigByLevel(u)) == null ? void 0 : s.vipBonusList;
      }),
      t = P(() => {
        const u = e.activeIndex,
          m = u > 4 ? "SVIP" : "VIP",
          { startLevel: g, endLevel: s } = Ke[u];
        return `${m} ${g != null ? g : 0}-${s != null ? s : 0}`;
      }),
      c = j();
    return (() => {
      var u = Ee(),
        m = u.firstChild,
        g = m.firstChild;
      return (
        a(g, t),
        a(
          m,
          r(l.LevelName, {
            class: "text-sm font-extrabold text-alw_white",
            get level() {
              var s, f;
              return (f =
                (s = e.currentLevelInfo) == null ? void 0 : s.startLevel) !=
                null
                ? f
                : 0;
            },
            get children() {
              var s;
              return (s = e.currentLevelInfo) == null ? void 0 : s.vipRankName;
            },
          }),
          null
        ),
        a(
          u,
          r(k, {
            get when() {
              return e.activeIndex > 0;
            },
            get children() {
              var s = ze();
              return (
                a(s, () =>
                  n("* Benefits from previous levels are all included")
                ),
                s
              );
            },
          }),
          null
        ),
        D(
          (s) => {
            var S;
            var f = $(
                "relative rounded-lg bg-layer4 p-3",
                (S = i()) == null ? void 0 : S.styles.listHeader
              ),
              T = $(
                "flex w-full items-center text-base font-extrabold sm:gap-x-2",
                c ? "justify-between" : "justify-normal"
              );
            return (
              f !== s.e && L(u, (s.e = f)), T !== s.t && L(m, (s.t = T)), s
            );
          },
          { e: void 0, t: void 0 }
        ),
        u
      );
    })();
  },
  Qe = (e) =>
    (() => {
      var i = He();
      return (
        a(
          i,
          r(o.Bonus, {
            get amount() {
              var t;
              return (t = e.currentLevelInfo) == null
                ? void 0
                : t.levelUpBcdBonus;
            },
          }),
          null
        ),
        a(
          i,
          r(k, {
            get when() {
              return e.activeIndex == 0;
            },
            get children() {
              return [r(o.Raining, {}), r(o.CoinDrop, {})];
            },
          }),
          null
        ),
        a(
          i,
          r(k, {
            get when() {
              return e.activeIndex == 1;
            },
            get children() {
              return [r(o.Tips, {}), r(o.Spin, {})];
            },
          }),
          null
        ),
        a(
          i,
          r(k, {
            get when() {
              return e.activeIndex == 2;
            },
            get children() {
              return [
                r(o.Recharge, {
                  get max() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.endRechargeRate;
                  },
                  get min() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.startRechargeRate;
                  },
                  get tires() {
                    var t;
                    return (t = e.currentLevelInfo) == null ? void 0 : t.tires;
                  },
                }),
                r(o.CashbackWeekly, {
                  get amount() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.weeklyCashback;
                  },
                }),
                r(o.CashbackMonthly, {
                  get amount() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.monthlyCashback;
                  },
                }),
                r(o.Sport, {}),
                r(o.Spin, {}),
              ];
            },
          }),
          null
        ),
        a(
          i,
          r(k, {
            get when() {
              return e.activeIndex == 3 || e.activeIndex == 4;
            },
            get children() {
              return [
                r(o.Recharge, {
                  get max() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.endRechargeRate;
                  },
                  get min() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.startRechargeRate;
                  },
                  get tires() {
                    var t;
                    return (t = e.currentLevelInfo) == null ? void 0 : t.tires;
                  },
                }),
                r(o.CashbackWeekly, {
                  get amount() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.weeklyCashback;
                  },
                }),
                r(o.CashbackMonthly, {
                  get amount() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.monthlyCashback;
                  },
                }),
                r(o.Sport, {}),
                r(o.Withdraw, {}),
                r(o.Spin, {}),
              ];
            },
          }),
          null
        ),
        a(
          i,
          r(k, {
            get when() {
              return [5, 6, 7].includes(e.activeIndex);
            },
            get children() {
              return [
                r(o.Recharge, {
                  get max() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.endRechargeRate;
                  },
                  get min() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.startRechargeRate;
                  },
                  get tires() {
                    var t;
                    return (t = e.currentLevelInfo) == null ? void 0 : t.tires;
                  },
                }),
                r(o.CashbackWeekly, {
                  get amount() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.weeklyCashback;
                  },
                }),
                r(o.CashbackMonthly, {
                  get amount() {
                    var t;
                    return (t = e.currentLevelInfo) == null
                      ? void 0
                      : t.monthlyCashback;
                  },
                }),
                r(o.Sport, {}),
                r(o.SVIP, {}),
                r(o.Giveaway, {}),
                r(o.Spin, {}),
                r(o.Host, {}),
              ];
            },
          }),
          null
        ),
        D(() => L(i, $("flex flex-col divide-y divide-third px-3"))),
        i
      );
    })(),
  ot = (e) => {
    const [i] = de.vipRankInfoResource(),
      t = P(() => [
        {
          rank: n("Bronze"),
          badge: l.vipBadgeIcon(3),
          color: "#E09A6A",
          vipTypeNum: l.VipLevelStatus.Bronze,
        },
        {
          rank: n("Silver"),
          badge: l.vipBadgeIcon(8),
          color: "#BABABA",
          vipTypeNum: l.VipLevelStatus.Silver,
        },
        {
          rank: n("Gold"),
          badge: l.vipBadgeIcon(22),
          color: "#FFC511",
          vipTypeNum: l.VipLevelStatus.Gold,
        },
        {
          rank: `${n("Platinum")} I`,
          badge: l.vipBadgeIcon(38),
          color: "#CB87F4",
          vipTypeNum: l.VipLevelStatus.Platinum_I,
        },
        {
          rank: `${n("Platinum")} II`,
          badge: l.vipBadgeIcon(39),
          color: "#CB87F4",
          vipTypeNum: l.VipLevelStatus.Platinum_II,
        },
        {
          rank: `${n("Diamond")} I`,
          badge: l.vipBadgeIcon(70),
          color: "#F588C6",
          vipTypeNum: l.VipLevelStatus.Diamond_I,
        },
        {
          rank: `${n("Diamond")} II`,
          badge: l.vipBadgeIcon(70),
          color: "#F588C6",
          vipTypeNum: l.VipLevelStatus.Diamond_II,
        },
        {
          rank: `${n("Diamond")} III`,
          badge: l.vipBadgeIcon(70),
          color: "#F588C6",
          vipTypeNum: l.VipLevelStatus.Diamond_III,
        },
      ]),
      [c, u] = ne({
        defaultValue: () => e.defaultActiveIndex,
        value: () => e.activeIndex,
        onChange: e.onActiveIndexChange,
      }),
      m = () => i()[c()];
    let g;
    const s = () =>
        (() => {
          var y = Ge(),
            b = y.firstChild,
            _ = b.nextSibling;
          return (
            a(b, () => n("Exclusive VIP System")),
            a(_, () => n("Discover the ultimate gaming experience")),
            D(
              (x) => {
                var C = $(
                    "font-extrabold text-primary",
                    S ? "text-base" : "text-xl"
                  ),
                  v = $(
                    "mt-1 font-semibold text-secondary",
                    S ? "text-xs" : "text-sm"
                  );
                return (
                  C !== x.e && L(b, (x.e = C)), v !== x.t && L(_, (x.t = v)), x
                );
              },
              { e: void 0, t: void 0 }
            ),
            y
          );
        })(),
      f = 8,
      T = {
        [l.VipLevelStatus.None]: "",
        [l.VipLevelStatus.Bronze]: "vip-list-bronze",
        [l.VipLevelStatus.Silver]: "vip-list-silver",
        [l.VipLevelStatus.Gold]: "vip-list-gold",
        [l.VipLevelStatus.Platinum_I]: "vip-list-platinum",
        [l.VipLevelStatus.Platinum_II]: "vip-list-platinum",
        [l.VipLevelStatus.Diamond_I]: "vip-list-diamond",
        [l.VipLevelStatus.Diamond_II]: "vip-list-diamond",
        [l.VipLevelStatus.Diamond_III]: "vip-list-diamond",
      },
      S = j(),
      q = ae();
    return (
      oe(() => {
        function y(b, _, x) {
          const C = (x + f * ie.remScale) * _;
          b.scrollLeft + b.clientWidth <= C && (b.scrollLeft = C);
        }
        q() &&
          c() &&
          setTimeout(() => {
            y(g, c(), g.firstElementChild.clientWidth);
          });
      }),
      (() => {
        var y = Me(),
          b = y.firstChild,
          _ = b.firstChild,
          x = _.firstChild,
          C = F;
        return (
          typeof C == "function" ? ee(C, y) : (F = y),
          a(
            y,
            r(E, {
              when: !S,
              get children() {
                return s();
              },
            }),
            b
          ),
          a(
            b,
            r(E, {
              when: S,
              get children() {
                return s();
              },
            }),
            _
          ),
          a(
            _,
            r(le, {
              get data() {
                return t();
              },
              scrollPadding: 0,
              gap: f,
              ref(v) {
                var w = g;
                typeof w == "function" ? w(v) : (g = v);
              },
              get width() {
                var v;
                return (v = e.itemWidth) != null ? v : 94;
              },
              height: 94,
              minCols: 4,
              rows: 1,
              children: (v, w) =>
                (() => {
                  var z = Ue();
                  return (
                    a(
                      z,
                      r(k, {
                        get when() {
                          return v();
                        },
                        children: (W) =>
                          r(Y, {
                            get isActive() {
                              return c() === w();
                            },
                            onClick: () => u(w()),
                            get badge() {
                              return W().badge;
                            },
                            get color() {
                              return W().color;
                            },
                            get rankText() {
                              return W().rank;
                            },
                          }),
                      })
                    ),
                    z
                  );
                })(),
            }),
            x
          ),
          a(
            x,
            r(ue, {
              get fallback() {
                return [
                  r(B, { class: "h-12 w-full rounded-xl" }),
                  (() => {
                    var v = je();
                    return (
                      a(v, r(B, { class: "h-24 w-full rounded-xl" }), null),
                      a(v, r(B, { class: "h-24 w-full rounded-xl" }), null),
                      a(v, r(B, { class: "h-24 w-full rounded-xl" }), null),
                      a(v, r(B, { class: "h-24 w-full rounded-xl" }), null),
                      a(v, r(B, { class: "h-24 w-full rounded-xl" }), null),
                      v
                    );
                  })(),
                ];
              },
              get children() {
                return [
                  r(Je, {
                    get currentLevelInfo() {
                      return m();
                    },
                    get activeIndex() {
                      return c();
                    },
                  }),
                  r(Qe, {
                    get currentLevelInfo() {
                      return m();
                    },
                    get activeIndex() {
                      return c();
                    },
                  }),
                ];
              },
            })
          ),
          D(() =>
            L(
              b,
              $(
                "relative z-0 flex flex-shrink-0 flex-col gap-y-4 rounded-xl bg-layer4 bg-no-repeat px-3 py-4 bg-h-[300px] sm:bg-h-[600px]",
                T[t()[c()].vipTypeNum]
              )
            )
          ),
          y
        );
      })()
    );
  };
export { ot as V, st as s, me as v };
