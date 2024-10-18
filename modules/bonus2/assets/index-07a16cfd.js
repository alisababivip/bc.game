import {
  i,
  e as x,
  s as g,
  t as o,
  c as s,
  j as P,
  b as j,
  m as C,
} from "./web-13cf6287.js";
import {
  T as _,
  B as p,
  i as $,
  c as F,
  u as h,
  p as w,
  A as S,
} from "./manifest-cc1f4445.js";
import { A as M, L as Y } from "./animate-number-d108436c.js";
import { m as D, i as I, c as U, F as k } from "./solid-js-38561dfe.js";
import { C as L } from "./currency-format-e71c6b76.js";
import { t as c } from "./i18n-023baa0d.js";
import { e as m } from "./index-96ed660e.js";
var f = ((t) => (
    (t.Money = "Money"),
    (t.LuckySpin = "LuckySpin"),
    (t.FreeSpin = "FreeSpin"),
    (t.Lottery = "Lottery"),
    (t.Deposit = "DepositBonus"),
    t
  ))(f || {}),
  N = o(
    '<img class="absolute left-44 top-14 animate-heartbeat animation-duration-1000">'
  ),
  O = o(
    '<img class="absolute left-24 top-32 animate-heartbeat animation-duration-1000">'
  ),
  T = o(
    '<img class="absolute left-15 top-24 animate-heartbeat animation-duration-1000">'
  ),
  A = o(
    '<div class="relative z-0 flex h-60 w-full items-center justify-center"><div class="absolute left-1/2 top-1/2 size-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-bonus_wallet"></div><img class="z-0 size-28 animate-wallet animation-duration-1000"><img class="absolute top-0 -z-10 animate-spin animation-duration-[10s]">'
  );
const B = () => {
    const t = () => [
      (() => {
        var e = N();
        return x(() => g(e, "src", m.starone)), e;
      })(),
      (() => {
        var e = O();
        return x(() => g(e, "src", m.startwo)), e;
      })(),
      (() => {
        var e = T();
        return x(() => g(e, "src", m.startwo)), e;
      })(),
    ];
    return (() => {
      var e = A(),
        r = e.firstChild,
        a = r.nextSibling,
        n = a.nextSibling;
      return (
        i(e, t, n),
        x(
          (l) => {
            var u = m.wallet,
              d = m.shineLight;
            return (
              u !== l.e && g(a, "src", (l.e = u)),
              d !== l.t && g(n, "src", (l.t = d)),
              l
            );
          },
          { e: void 0, t: void 0 }
        ),
        e
      );
    })();
  },
  b = () => {
    const t = () => [
      (() => {
        var e = N();
        return x(() => g(e, "src", m.starone)), e;
      })(),
      (() => {
        var e = O();
        return x(() => g(e, "src", m.startwo)), e;
      })(),
      (() => {
        var e = T();
        return x(() => g(e, "src", m.startwo)), e;
      })(),
    ];
    return (() => {
      var e = A(),
        r = e.firstChild,
        a = r.nextSibling,
        n = a.nextSibling;
      return (
        i(e, t, n),
        x(
          (l) => {
            var u = m.walletUnpacked,
              d = m.shineLight;
            return (
              u !== l.e && g(a, "src", (l.e = u)),
              d !== l.t && g(n, "src", (l.t = d)),
              l
            );
          },
          { e: void 0, t: void 0 }
        ),
        e
      );
    })();
  };
var z = o(
    '<div><div><div></div><div class="text-2xl font-extrabold text-alw_white"></div></div><div>'
  ),
  W = o(
    '<div class="flex flex-col items-center"><p class="text-2xl uppercase">!</p><p class=text-base>!'
  ),
  R = o('<div class="flex justify-center text-end">'),
  K = o('<p class="flex justify-center gap-x-1 text-2xl text-[#f6c722]">'),
  V = o("<div>"),
  X = o('<p class="text-center text-2xl uppercase">'),
  q = o('<p class="text-center text-base leading-loose text-secondary">'),
  E = o('<div class="text-center text-base font-extrabold text-alw_white">'),
  H = o("<p class=mt-2>"),
  J = o(
    '<div><p class="text-center text-2xl uppercase"></p><p class="text-center text-base leading-loose"></p><p class="flex justify-center gap-x-1 text-2xl text-[#f6c722]">% '
  ),
  y = o('<div class="text-center text-base font-extrabold">'),
  Q = o(
    '<div><p class="text-center text-2xl uppercase"></p><p class="flex justify-center gap-x-1 text-2xl text-[#f6c722]"> '
  ),
  Z = o(
    '<div><p class="text-center text-2xl uppercase"></p><p class="flex justify-center gap-x-1 text-2xl text-[#f6c722]"> <!> </p><p class="flex justify-center gap-x-1 text-nowrap text-base text-secondary">'
  ),
  ee = o(
    '<div><p class="text-center text-2xl uppercase"> </p><p class="flex justify-center gap-x-1 text-2xl text-[#f6c722]">X '
  );
const pe = (t) => {
    const e = D({ rewardOpened: !1 }, t),
      r = () => {
        switch (e.rewardType) {
          case f.Money:
            return s(ne, e);
          case f.LuckySpin:
            return s(ae, e);
          case f.FreeSpin:
            return s(ie, e);
          case f.Deposit:
            return s(le, e);
          case f.Lottery:
            return s(se, e);
        }
      };
    return s(_, {
      get when() {
        return t.rewardOpened;
      },
      get fallback() {
        return s(te, {
          get onClick() {
            return t.onRewardOpen;
          },
        });
      },
      get children() {
        return r();
      },
    });
  },
  v = (t) => {
    const [e, r] = I(t, ["header", "content", "footer"]);
    return (() => {
      var a = z(),
        n = a.firstChild,
        l = n.firstChild,
        u = l.nextSibling,
        d = n.nextSibling;
      return (
        P(
          a,
          j(r, {
            get class() {
              return F(
                "-mx-4 -mb-4 flex flex-col gap-y-8 rounded-lg px-15 pb-24 text-alw_white bg-gradient-bonus_link sm:w-96 sm:px-6 sm:pb-6",
                r.class
              );
            },
          }),
          !1,
          !0
        ),
        i(l, () => e.header),
        i(u, () => e.content),
        i(d, () => e.footer),
        a
      );
    })();
  },
  te = (t) =>
    s(v, {
      get header() {
        return s(B, {});
      },
      get content() {
        return (() => {
          var e = W(),
            r = e.firstChild,
            a = r.firstChild,
            n = r.nextSibling,
            l = n.firstChild;
          return (
            i(r, () => c("Congrats"), a),
            i(n, () => c("You got a bonus link!"), l),
            e
          );
        })();
      },
      get footer() {
        return s(p, {
          type: "brand",
          class: "w-full",
          get onClick() {
            return t.onClick;
          },
          get children() {
            return s(_, {
              get when() {
                return $.login;
              },
              get fallback() {
                return c("Sign up and claim");
              },
              get children() {
                return c("Claim");
              },
            });
          },
        });
      },
    }),
  re = (t) =>
    (() => {
      var e = K();
      return (
        i(
          e,
          s(L, {
            get currencyName() {
              return t.currency;
            },
            get children() {
              var r = R();
              return (
                i(
                  r,
                  s(M, {
                    ease: (a) => Number(Y.easeInOut(a).toFixed(2)),
                    class: "px-1",
                    get number() {
                      return Number(t.amount);
                    },
                    children: (a) => [
                      s(_, {
                        get when() {
                          return t.lockedMoney;
                        },
                        get children() {
                          return [C(() => c("Locked")), " "];
                        },
                      }),
                      s(L.Amount, { amount: a }),
                    ],
                  })
                ),
                r
              );
            },
          })
        ),
        e
      );
    })(),
  ne = (t) => {
    const e = (a, n) => {
        const l = ["BCD"].includes(a),
          u = [n.welcome ? c("Welcome Bonus") : c("CONGRATS! YOU GOT")],
          d = n.kycLevel ? [] : l ? [c("Already sent to your balance")] : [],
          G = n.kycLevel
            ? [
                c(
                  "Complete basic KYC in 24 hours and the bonus will be sent to your balance"
                ),
                c("Wish you super luck and have fun!"),
                s(S, {
                  get href() {
                    return $.login
                      ? `/settings/verify/${
                          n.kycLevelName || "basic-kyc-level"
                        }`
                      : "/login/regist";
                  },
                  class: "mt-4 block",
                  get children() {
                    return s(p, {
                      onClick: () => w.pop(),
                      type: "brand",
                      class: "w-full",
                      get children() {
                        return c("Go KYC");
                      },
                    });
                  },
                }),
              ]
            : l
            ? [
                s(S, {
                  get href() {
                    return $.login ? "/wallet/balance" : "/login/regist";
                  },
                  get children() {
                    return s(p, {
                      onClick: () => w.pop(),
                      type: "brand",
                      class: "w-full",
                      get children() {
                        return s(_, {
                          get when() {
                            return $.login;
                          },
                          get fallback() {
                            return c("Sign up and claim");
                          },
                          get children() {
                            return c("View my wallet");
                          },
                        });
                      },
                    });
                  },
                }),
              ]
            : [
                c("Already sent to your balance"),
                n.welcome ? c("Glad to have you onboard") : c("Good Luck"),
                n.welcome ? c("Wish you super luck and have fun!") : "",
              ];
        return { contentCongratsTexts: u, contentTexts: d, footerTexts: G };
      },
      r = U(() =>
        e(t.currency, {
          welcome: t.welcome,
          kycLevel: t.kycLevel,
          kycLevelName: t.kycLevelName,
        })
      );
    return s(v, {
      get header() {
        return s(b, {});
      },
      get content() {
        return (() => {
          var a = V();
          return (
            i(
              a,
              s(k, {
                get each() {
                  return r().contentCongratsTexts;
                },
                children: (n) =>
                  (() => {
                    var l = X();
                    return i(l, n), l;
                  })(),
              }),
              null
            ),
            i(
              a,
              s(re, {
                get amount() {
                  return t.amount;
                },
                get currency() {
                  return t.currency;
                },
                get lockedMoney() {
                  return t.locked;
                },
              }),
              null
            ),
            i(
              a,
              s(k, {
                get each() {
                  return r().contentTexts;
                },
                children: (n) =>
                  (() => {
                    var l = q();
                    return i(l, n), l;
                  })(),
              }),
              null
            ),
            a
          );
        })();
      },
      get footer() {
        return (() => {
          var a = E();
          return (
            i(
              a,
              s(k, {
                get each() {
                  return r().footerTexts;
                },
                children: (n) =>
                  (() => {
                    var l = H();
                    return i(l, n), l;
                  })(),
              })
            ),
            a
          );
        })();
      },
    });
  },
  le = (t) => {
    const e = h();
    return s(v, {
      get header() {
        return s(B, {});
      },
      get content() {
        return (() => {
          var r = J(),
            a = r.firstChild,
            n = a.nextSibling,
            l = n.nextSibling,
            u = l.firstChild;
          return (
            i(a, () => c("CONGRATS! YOU GOT")),
            i(n, () => c("Limited Time Deposit Bonus")),
            i(l, () => t.percentage, u),
            i(l, () => c("Bonus"), null),
            r
          );
        })();
      },
      get footer() {
        return (() => {
          var r = y();
          return (
            i(
              r,
              s(p, {
                type: "brand",
                class: "w-full",
                onClick: () => {
                  e("/wallet");
                },
                get children() {
                  return c("Deposit Now");
                },
              })
            ),
            r
          );
        })();
      },
    });
  },
  ae = (t) => {
    const e = h();
    return s(v, {
      get header() {
        return s(b, {});
      },
      get content() {
        return (() => {
          var r = Q(),
            a = r.firstChild,
            n = a.nextSibling,
            l = n.firstChild;
          return (
            i(a, () => c("CONGRATS! YOU GOT")),
            i(n, () => t.amount, l),
            i(n, () => c("Lucky Spins"), null),
            r
          );
        })();
      },
      get footer() {
        return (() => {
          var r = y();
          return (
            i(
              r,
              s(p, {
                type: "brand",
                class: "w-full",
                onClick: () => {
                  e("/spin");
                },
                get children() {
                  return [C(() => c("Spin Now")), "!"];
                },
              })
            ),
            r
          );
        })();
      },
    });
  },
  se = (t) => {
    const e = h();
    return s(v, {
      get header() {
        return s(b, {});
      },
      get content() {
        return (() => {
          var r = Z(),
            a = r.firstChild,
            n = a.nextSibling,
            l = n.firstChild,
            u = l.nextSibling;
          u.nextSibling;
          var d = n.nextSibling;
          return (
            i(a, () => c("CONGRATS! YOU GOT")),
            i(n, () => t.amount, l),
            i(n, () => c("Lottery"), u),
            i(n, () => c("Tickets"), null),
            i(d, () => c("Already sent to your balance")),
            r
          );
        })();
      },
      get footer() {
        return (() => {
          var r = y();
          return (
            i(
              r,
              s(p, {
                type: "brand",
                class: "w-full",
                onClick: () => {
                  e("/lottery/myBets");
                },
                get children() {
                  return c("Go to Lottery");
                },
              })
            ),
            r
          );
        })();
      },
    });
  },
  ie = (t) => {
    const e = h();
    return s(v, {
      get header() {
        return s(b, {});
      },
      get content() {
        return (() => {
          var r = ee(),
            a = r.firstChild;
          a.firstChild;
          var n = a.nextSibling,
            l = n.firstChild;
          return (
            i(a, () => c("You have been rewarded"), null),
            i(n, () => t.amount, l),
            i(n, () => c("Free Spins"), null),
            r
          );
        })();
      },
      get footer() {
        return (() => {
          var r = y();
          return (
            i(
              r,
              s(p, {
                type: "brand",
                class: "w-full",
                onClick: () => {
                  e("/lottery/myBets"),
                    t.gameId &&
                      (w.pop(),
                      t.gameId.includes("detrade:trading")
                        ? e("/trading")
                        : e(
                            `/game/${t.gameId}?fsId=${t.fsId}&fs=${t.fsNum}&currency=${t.currencyName}`
                          ));
                },
                get children() {
                  return [C(() => c("Play Now")), "!"];
                },
              })
            ),
            r
          );
        })();
      },
    });
  };
export { pe as B, f as R };
