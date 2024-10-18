import {
  i as t,
  s as _,
  t as u,
  c as l,
  e as k,
  a as W,
  m as B,
} from "./web-13cf6287.js";
import {
  e as g,
  c as x,
  T as V,
  i as P,
  A as C,
  B as $,
  k as f,
  h as q,
} from "./manifest-cc1f4445.js";
import { E as I, S as w, c as L, g as F, F as z } from "./solid-js-38561dfe.js";
import { E as R } from "./error-fallback-24494a7d.js";
import { t as r } from "./i18n-023baa0d.js";
import { c as v, d as T } from "./index-f53ef53b.js";
import { V as A, s as E } from "./index-1eaf53a0.js";
import "./baseService-e38bce40.js";
import "./_baseGetTag-c2e287b9.js";
import "./_baseFor-3fee30d6.js";
import "./_MapCache-1fb5cc44.js";
import "./isArray-79a0be9c.js";
import "./skeleton-c8e80175.js";
import "./table-e9d87985.js";
import "./vip-c0abd707.js";
import "./index-4c839f7e.js";
import "./http-7cc13238.js";
import "./index-e10d67ae.js";
import "./popup-common-rules-ba048024.js";
import "./recharge-tier-card-4577d22c.js";
import "./currency-format-e71c6b76.js";
const H = "/modules/bonus2/assets/avatar-example-270fd554.png";
var h = u("<p>"),
  D = u("<p>:"),
  X = u(
    '<ul class="list-inside list-decimal"><li></li><li></li><li></li><li></li><li></li><li>'
  ),
  O = u('<p class="mt-2 text-primary">:'),
  U = u(
    '<div class="mt-2 rounded-lg bg-layer5 px-2 py-2"><div class="flex items-center gap-x-2 text-primary"><img class=size-10><span></span></div><div class="ml-12 flex flex-col gap-y-2 rounded-md bg-layer3 p-4 text-sm font-semibold text-primary"><p class=""></p><div class=text-brand><div class=item>@Jachk: 888TRX</div><div class=item>@Blrr: 888TRX</div><div class=item>@Pokiuutt: 888TRX</div><div class=item>@Liisdt: 888TRX</div><div class=item>@Yoiohu: 888TRX</div><div class=item>@Loidr: 888TRX</div></div><div>'
  ),
  j = u('<div class="flex flex-col gap-y-3"><p></p><p>'),
  N = u(
    '<div class="flex flex-col gap-y-3"><p></p><p></p><div><p></p><p></p><ul class="list-inside list-decimal"><li></li><li></li></ul></div><p>'
  ),
  Y = u("<ul class=popup-rules><li></li><li></li><li></li><li>");
const Q = () => [
  {
    question: r("What is ‘Level-up Bonus’?"),
    answer: (() => {
      var e = h();
      return (
        t(e, () =>
          r(
            "Showcasing our appreciation for players, we reward them with a Level Up bonus upon reaching the next level. Once players reach Level 38 and higher, we have boosted the level-up bonus to be slightly higher than the regular level-up bonus available at lower levels."
          )
        ),
        e
      );
    })(),
  },
  {
    question: r("What is ‘Raining’?"),
    answer: [
      (() => {
        var e = h();
        return (
          t(e, () =>
            r(
              "Engage in chat conversations throughout the day to receive free coins as part of the Constant Chat Rains bonus."
            )
          ),
          e
        );
      })(),
      (() => {
        var e = D(),
          a = e.firstChild;
        return t(e, () => r("Rules"), a), e;
      })(),
      (() => {
        var e = X(),
          a = e.firstChild,
          i = a.nextSibling,
          s = i.nextSibling,
          o = s.nextSibling,
          n = o.nextSibling,
          c = n.nextSibling;
        return (
          t(a, () =>
            r(
              "Six players level higher than 4 will be randomly selected and rewarded in chat room every 6 hours."
            )
          ),
          t(i, () => r("Bonus will be different according to the currencies.")),
          t(s, () =>
            r(
              "Players will be randomly selected by Rain algorithm. The players who send more messages have the higher probability to get rewarded."
            )
          ),
          t(o, () =>
            r(
              "But even if the user has sent only one message, there is still a chance that they can receive the rain bonus."
            )
          ),
          t(n, () =>
            r("Rain information will be sent to the chat room by robots.")
          ),
          t(c, () =>
            r(
              "Having more than one account per user is prohibited. You will get the lower possibility of receiving rain and BC will suspend your withdrawals for a manual review in the fraud prevention system which may take up to 24 hrs. We do not guarantee withdraw processing and may ban account with your balance in it. If you have already had more than one account please self-surrender by contacting Live Support."
            )
          ),
          e
        );
      })(),
      (() => {
        var e = O(),
          a = e.firstChild;
        return t(e, () => r("For example"), a), e;
      })(),
      (() => {
        var e = U(),
          a = e.firstChild,
          i = a.firstChild,
          s = i.nextSibling,
          o = a.nextSibling,
          n = o.firstChild,
          c = n.nextSibling,
          m = c.nextSibling;
        return (
          _(i, "src", H),
          t(s, () => g.host),
          t(n, () => r("Raining, the people who received the rain:")),
          t(m, () => r("Congratulations!")),
          e
        );
      })(),
    ],
  },
  {
    question: r("What is ‘Coin Drop’?"),
    answer: (() => {
      var e = j(),
        a = e.firstChild,
        i = a.nextSibling;
      return (
        t(a, () =>
          r(
            "If you haven’t reached VIP Level 7 and unlocked ‘Coin Drop’, you need to be active and quick in order to grab the coins when it happens in Public Chat. The rewards go to the fastest participants."
          )
        ),
        t(i, () =>
          r(
            "Once you have reached VIP Level 7, you may create your own ‘Coin Drop’ and customize the amount and quantity of recipients before you share your good luck and generosity with other players in Public Chat."
          )
        ),
        e
      );
    })(),
  },
  {
    question: r("What are ‘Tips’?"),
    answer: (() => {
      var e = h();
      return (
        t(e, () =>
          r(
            "You may tip other players once you reach VIP Level 8. Tipping is how you show appreciation and share your generosity with other players in __ENV_HOST__. You can decide how much you want to send to the other players."
          )
        ),
        e
      );
    })(),
  },
  {
    question: r("What is ‘Recharge’?"),
    answer: (() => {
      var e = N(),
        a = e.firstChild,
        i = a.nextSibling,
        s = i.nextSibling,
        o = s.firstChild,
        n = o.nextSibling,
        c = n.nextSibling,
        m = c.firstChild,
        d = m.nextSibling,
        y = s.nextSibling;
      return (
        t(a, () =>
          r(
            "‘Recharge’ is a unique and exciting feature that rewards players with split bonuses (Recharges) throughout the week based on their gaming activities. Players can set different intervals to claim these bonuses, providing them with an added incentive to keep playing. This article will guide you through everything you need to know about Recharge, including eligibility, how to claim, frequency options, calculation, and the latest updates to the Recharge reward structure."
          )
        ),
        t(i, () =>
          r(
            "In basic terms, ‘Recharge’ means that players receive split bonuses (Recharges) throughout the week at different intervals set by the player themselves. This feature not only keeps players engaged but also adds an extra layer of excitement to the gaming experience."
          )
        ),
        t(o, () => r("Eligibility for Recharge Activation")),
        t(n, () =>
          r(
            "To be eligible for Recharge Activation, players must meet the following criteria:"
          )
        ),
        t(m, () => r("Have a VIP level of 22 and above")),
        t(d, () =>
          r("Have wagered a minimum of $1,000 in the past 7 days (24/7)")
        ),
        t(y, () =>
          r(
            "Once a player meets these requirements, they can request Recharge Activation. Upon activation, their Recharge will be redeemable for the next 7 days."
          )
        ),
        e
      );
    })(),
  },
  {
    question: r("What is ‘Weekly Cashback’?"),
    answer: (() => {
      var e = h();
      return (
        t(e, () =>
          r(
            "The ‘Weekly Cashback’ is an exclusive perk on our platform designed for VIP 22+ players. As the name suggests, this bonus is issued once a week. It is an automatic bonus paid out every Friday to players at VIP level 22 and above. The size of the bonus depends on how much a player has wagered during the past week with a minimum wager requirement of $1000 between the period Friday-Thursday. The calculation for the weekly cashback remains the same, and the only difference is that it may not align with your Recharge renewals."
          )
        ),
        e
      );
    })(),
  },
  {
    question: r("What is ‘Sports Weekly Bonus’?"),
    answer: [
      (() => {
        var e = h();
        return (
          t(e, () =>
            r(
              "In addition to our existing Weekly Bonus for VIP level 22+ players, we are now introducing the BC Sports Club weekly bonus as an additional perk for sports bettors. The new Sport bonus is specific only to Sport Wager and is calculated based on the player's wagering amount from Saturday to Friday, and distributed automatically every Saturday. With the introduction of the BC Sports Club bonuses, our VIP level 22+ players can now enjoy even more rewards and a thrilling sports betting experience!"
            )
          ),
          e
        );
      })(),
      (() => {
        var e = h();
        return (
          t(e, () =>
            r(
              "BC Sports Club offers a range of weekend bonuses based on your weekly wager amount in our Sportsbook."
            )
          ),
          e
        );
      })(),
      (() => {
        var e = Y(),
          a = e.firstChild,
          i = a.nextSibling,
          s = i.nextSibling,
          o = s.nextSibling;
        return (
          t(a, () =>
            r(
              "Wager $500 or more from Saturday to Friday and receive a $5 Weekend Bonus!"
            )
          ),
          t(i, () =>
            r("Wager $2,500 or more and receive a $30 Weekend Bonus!")
          ),
          t(s, () =>
            r("Wager $5,000 or more and receive a $70 Weekend Bonus!")
          ),
          t(o, () =>
            r("Wager $10,000 or more and receive a $150 Weekend Bonus!")
          ),
          e
        );
      })(),
      (() => {
        var e = h();
        return (
          t(e, () =>
            r(
              "These bonuses apply to all markets and odds in our Sportsbook, giving you more opportunities to win big!"
            )
          ),
          e
        );
      })(),
      (() => {
        var e = h();
        return (
          t(e, () =>
            r(
              "The weekly wager is calculated from the previous Saturday 00:00hrs to Friday 23:59hrs (UTC)."
            )
          ),
          e
        );
      })(),
    ],
  },
];
var J = u(
    '<div class="relative mt-10 flex h-48 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-layer4 px-4"><img class="relative -top-10 h-28"alt=img><div class="relative -top-10 text-center"><div class="text-base font-extrabold text-primary sm:text-lg"></div><div class="mt-2 text-xs text-secondary sm:text-base">'
  ),
  M = u('<div class="mt-6 flex w-full items-center gap-x-2">'),
  G = u(
    '<div><div class="absolute inset-0 -z-10 bg-gradient-vip-detail-banner sm:-top-1/2 sm:h-72 sm:w-full sm:bg-[#FF820F] sm:opacity-35 sm:blur-[100px]"></div><img class="absolute bottom-0 top-0 -z-10 sm:-top-24 sm:right-0 sm:size-[33rem] sm:h-auto"><div class="relative z-20 pt-4 sm:pt-0"><div class="text-4xl font-extrabold uppercase leading-tight text-primary sm:flex sm:gap-x-2"><div></div><div class=text-primary></div></div><div class="mt-3 max-w-100 text-sm font-semibold text-primary sm:w-[571px] sm:text-secondary">'
  ),
  K = u('<span class="text-lg font-extrabold text-primary sm:text-xl">'),
  Z = u('<h2 class="px-3 py-2">'),
  ee = u(
    '<div class="flex flex-col gap-y-4"><div class="flex flex-col gap-y-4 rounded-xl bg-layer4 py-3"><div class="flex flex-col gap-1">'
  ),
  te = u("<div class=pt-2>"),
  re = u(
    '<div><div class="grid grid-cols-2 gap-x-3 sm:grid-cols-3 sm:gap-y-4">'
  ),
  p = u("<div>");
const b = (e) =>
    (() => {
      var a = J(),
        i = a.firstChild,
        s = i.nextSibling,
        o = s.firstChild,
        n = o.nextSibling;
      return (
        t(o, () => e.title), t(n, () => e.desc), k(() => _(i, "src", e.icon)), a
      );
    })(),
  ie = () =>
    (() => {
      var e = G(),
        a = e.firstChild,
        i = a.nextSibling,
        s = i.nextSibling,
        o = s.firstChild,
        n = o.firstChild,
        c = n.nextSibling,
        m = o.nextSibling;
      return (
        t(n, () => r("exclusive")),
        t(c, () => r("vip benefits")),
        t(m, () =>
          r(
            "Join our VIP Club now and get ready to be showered with gifts, giveaways, and amazing feature. Experience the thrill of higher cash back and exclusive rewards that are sure to leave you amazed."
          )
        ),
        t(
          e,
          l(V, {
            get when() {
              return !P.login;
            },
            get fallback() {
              return l(C, {
                href: "/",
                get children() {
                  return l($, {
                    get class() {
                      return x(
                        "vip-join-button mt-6 w-full text-base font-extrabold sm:max-w-64"
                      );
                    },
                    type: "brand",
                    get children() {
                      return r("Play Now");
                    },
                  });
                },
              });
            },
            get children() {
              var d = M();
              return (
                t(
                  d,
                  l(C, {
                    href: "/login/regist",
                    class: "max-w-[50%] flex-grow",
                    get children() {
                      return l($, {
                        get class() {
                          return x(
                            "vip-join-button w-full text-base font-extrabold capitalize sm:max-w-64"
                          );
                        },
                        type: "brand",
                        get children() {
                          return r("Sign up");
                        },
                      });
                    },
                  }),
                  null
                ),
                t(
                  d,
                  l(w, {
                    get when() {
                      return g.mobile;
                    },
                    get children() {
                      return l($, {
                        onClick: () => {
                          E();
                        },
                        class:
                          "max-w-[50%] flex-grow border border-solid border-third bg-black_alpha5 text-base font-extrabold",
                        get children() {
                          return r("View benefits");
                        },
                      });
                    },
                  }),
                  null
                ),
                d
              );
            },
          }),
          null
        ),
        k(
          (d) => {
            var y = x(
                "relative z-0 -mx-4 overflow-hidden px-4 pt-14 sm:mx-0 sm:h-auto sm:rounded-xl sm:bg-layer4 sm:px-12 sm:py-11"
              ),
              S = g.mobile ? T.vipBenefitHero_mb : T.vipBenefitHero;
            return (
              y !== d.e && W(e, (d.e = y)),
              S !== d.t && _(i, "src", (d.t = S)),
              d
            );
          },
          { e: void 0, t: void 0 }
        ),
        e
      );
    })(),
  ae = () => {
    const e = L(Q),
      a = F(() =>
        (() => {
          var i = K();
          return t(i, () => r("Frequently Asked Questions")), i;
        })()
      );
    return (() => {
      var i = ee(),
        s = i.firstChild,
        o = s.firstChild;
      return (
        t(
          i,
          l(w, {
            get when() {
              return !g.mobile;
            },
            get children() {
              return a();
            },
          }),
          s
        ),
        t(
          s,
          l(w, {
            get when() {
              return g.mobile;
            },
            get children() {
              var n = Z();
              return t(n, a), n;
            },
          }),
          o
        ),
        t(
          o,
          l(f, {
            get children() {
              return l(z, {
                get each() {
                  return e();
                },
                children: (n) =>
                  l(f.Item, {
                    get value() {
                      return n.question;
                    },
                    get children() {
                      return [
                        l(f.ItemTrigger, {
                          class: "text-base font-semibold",
                          get children() {
                            return n.question;
                          },
                        }),
                        l(f.ItemContent, {
                          class: "text-base font-semibold text-secondary",
                          get children() {
                            var c = te();
                            return t(c, () => n.answer), c;
                          },
                        }),
                      ];
                    },
                  }),
              });
            },
          })
        ),
        i
      );
    })();
  },
  le = (e) =>
    l(w, {
      get when() {
        return g.mobile;
      },
      get fallback() {
        return B(() => e.children);
      },
      get children() {
        return l(q, {
          class: "dialog-transparent-title",
          get children() {
            return e.children;
          },
        });
      },
    }),
  Ie = () =>
    l(le, {
      get children() {
        var e = re(),
          a = e.firstChild;
        return (
          t(
            e,
            l(I, {
              fallback: R,
              get children() {
                return l(ie, {});
              },
            }),
            a
          ),
          t(
            a,
            l(b, {
              get title() {
                return [
                  (() => {
                    var i = p();
                    return t(i, () => r("No-Fee")), i;
                  })(),
                  (() => {
                    var i = p();
                    return t(i, () => r("Withdrawal")), i;
                  })(),
                ];
              },
              get desc() {
                return r("Reach VIP 38 for no-fee cryptocurrency withdrawals.");
              },
              get icon() {
                return v.cardImgWithdraw;
              },
            }),
            null
          ),
          t(
            a,
            l(b, {
              get title() {
                return [
                  (() => {
                    var i = p();
                    return t(i, () => r("Rewarding")), i;
                  })(),
                  (() => {
                    var i = p();
                    return t(i, () => r("Lucky Spin")), i;
                  })(),
                ];
              },
              get desc() {
                return r(
                  "Spin the wheel & receive bigger prizes as you level up"
                );
              },
              get icon() {
                return v.cardImgSpin;
              },
            }),
            null
          ),
          t(
            a,
            l(b, {
              get title() {
                return [
                  (() => {
                    var i = p();
                    return t(i, () => r("Dedicated")), i;
                  })(),
                  (() => {
                    var i = p();
                    return t(i, () => r("VIP Host")), i;
                  })(),
                ];
              },
              get desc() {
                return r("Reach VIP 38 for personalized VIP host attention.");
              },
              get icon() {
                return v.cardImgHost;
              },
            }),
            null
          ),
          t(
            a,
            l(b, {
              get title() {
                return [
                  (() => {
                    var i = p();
                    return t(i, () => r("Amazing")), i;
                  })(),
                  (() => {
                    var i = p();
                    return t(i, () => r("Level Up Bonus")), i;
                  })(),
                ];
              },
              get desc() {
                return r("Unlock multiple surprise rewards as you level up.");
              },
              get icon() {
                return v.cardImgChat;
              },
            }),
            null
          ),
          t(
            a,
            l(b, {
              get title() {
                return r("Fun Tips &  Raining");
              },
              get desc() {
                return r(
                  "Tip to show appreciation or try Coin Drops to win rewards."
                );
              },
              get icon() {
                return v.cardImgBonus;
              },
            }),
            null
          ),
          t(
            a,
            l(b, {
              get title() {
                return r("Exclusive Cashback");
              },
              get desc() {
                return r(
                  "Earn incredible cashback rewards every week & month."
                );
              },
              get icon() {
                return v.cardImgCashback;
              },
            }),
            null
          ),
          t(
            e,
            l(I, {
              fallback: R,
              get children() {
                return l(A, {
                  headerOuter: !0,
                  get itemWidth() {
                    return g.mobile ? 94 : 144;
                  },
                  defaultActiveIndex: 0,
                });
              },
            }),
            null
          ),
          t(e, l(ae, {}), null),
          k(() =>
            W(
              e,
              x(
                "vip-root flex flex-col gap-y-4 px-4 text-primary sm:gap-y-6 sm:px-0"
              )
            )
          ),
          e
        );
      },
    });
export { Ie as default };
