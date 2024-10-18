var P = (e, a, r) =>
  new Promise((s, t) => {
    var l = (c) => {
        try {
          u(r.next(c));
        } catch (m) {
          t(m);
        }
      },
      o = (c) => {
        try {
          u(r.throw(c));
        } catch (m) {
          t(m);
        }
      },
      u = (c) => (c.done ? s(c.value) : Promise.resolve(c.value).then(l, o));
    u((r = r.apply(e, a)).next());
  });
import {
  c as n,
  u as L,
  e as v,
  s as C,
  i,
  t as p,
  m as Z,
  a as E,
} from "./web-13cf6287.js";
import {
  g as B,
  P as q,
  B as D,
  p as y,
  t as ue,
  u as J,
  b as Q,
  i as F,
  W as de,
  e as me,
  a as S,
  I as M,
  w as pe,
  T as I,
  x as ge,
  l as O,
  S as fe,
  c as U,
  D as H,
  s as j,
  z as ye,
} from "./manifest-cc1f4445.js";
import { a as he } from "./router-3828f409.js";
import {
  o as A,
  a as xe,
  j as be,
  s as we,
  d as ee,
  e as te,
  S as re,
  u as ve,
  k as Se,
  b as R,
  c as G,
  E as Ce,
} from "./solid-js-38561dfe.js";
import { C as N } from "./currency-format-e71c6b76.js";
import { SpinLeaderBoard as _e } from "./index-1dc0470f.js";
import { t as f } from "./i18n-023baa0d.js";
import { S as $e } from "./sounds-a90e2198.js";
import { S as Fe, f as Ne, a as Te, b as W } from "./index-bd250c21.js";
import { b as T } from "./index-6d249af1.js";
import { h as V } from "./http-7cc13238.js";
import { A as Ae } from "./animate-number-d108436c.js";
import { s as X } from "./index-96ed660e.js";
import { c as ne, l as K } from "./createHasNewUserSpin-f5ad2420.js";
import { a as ke } from "./baseService-e38bce40.js";
import { a as Be } from "./_arrayMap-2bcec0e7.js";
import { k as Ie } from "./_baseFor-3fee30d6.js";
import { i as Re } from "./isArray-79a0be9c.js";
function De(e, a) {
  return Be(a, function (r) {
    return e[r];
  });
}
function Ue(e) {
  return e == null ? [] : De(e, Ie(e));
}
var ze = Math.floor,
  Pe = Math.random;
function Le(e, a) {
  return e + ze(Pe() * (a - e + 1));
}
function ae(e, a) {
  var r = -1,
    s = e.length,
    t = s - 1;
  for (a = a === void 0 ? s : a; ++r < a; ) {
    var l = Le(r, t),
      o = e[l];
    (e[l] = e[r]), (e[r] = o);
  }
  return (e.length = a), e;
}
function Ee(e) {
  return ae(ke(e));
}
function Me(e) {
  return ae(Ue(e));
}
function Oe(e) {
  var a = Re(e) ? Ee : Me;
  return a(e);
}
var He = p(
    '<img class="absolute -left-10 -top-24 -z-10 w-[31rem] max-w-max opacity-75"alt="">'
  ),
  je = p(
    '<div class="-m-4 flex min-h-[21rem] min-w-[24rem] flex-col items-center justify-center gap-y-2 rounded-lg bg-layer2 px-3 py-6"><img class="absolute -top-10 left-0 size-[26rem]"><h3 class="text-2xl font-extrabold text-alw_white"></h3><p class="text-base font-semibold text-secondary"></p><div class="w-full px-6">'
  ),
  Ge = p(
    '<p class="bg-gradient-to-b from-[#FFA600] to-[#FFE47B] bg-clip-text pr-1 text-5xl font-extrabold italic text-transparent">'
  );
const se = (e) => {
  let a;
  return (
    A(() => {
      B.fromTo(
        a,
        { scale: 0.8 },
        { scale: 1.1, ease: "back.inOut", duration: 0.8 }
      );
    }),
    n(q, {
      class: "popup-full",
      get children() {
        return [
          (() => {
            var r = He();
            return (
              L((s) => {
                B.to(s, {
                  rotateZ: 360,
                  duration: 4,
                  ease: "none",
                  repeat: 1 / 0,
                }),
                  xe(() => {
                    B.killTweensOf(s);
                  });
              }, r),
              v(() => C(r, "src", X.gold_bg)),
              r
            );
          })(),
          (() => {
            var r = je(),
              s = r.firstChild,
              t = s.nextSibling,
              l = t.nextSibling,
              o = l.nextSibling;
            r.style.setProperty(
              "background-image",
              "radial-gradient(rgba(242,187,47,.2),#191A1B00 80%)"
            );
            var u = a;
            return (
              typeof u == "function" ? L(u, s) : (a = s),
              i(t, () => e.title),
              i(l, () => e.desc),
              i(
                r,
                n(Ae, {
                  duration: 1e3,
                  class: "my-8",
                  from: 0,
                  get number() {
                    return Number(e.amount);
                  },
                  children: (c) =>
                    (() => {
                      var m = Ge();
                      return (
                        m.style.setProperty(
                          "filter",
                          "drop-shadow(2px 2px 0 #C55B1A)"
                        ),
                        i(
                          m,
                          n(N, {
                            get currencyName() {
                              return e.currencyName;
                            },
                            get children() {
                              return n(N.Amount, { precision: 5, amount: c });
                            },
                          })
                        ),
                        m
                      );
                    })(),
                }),
                o
              ),
              i(
                o,
                n(D, {
                  get onClick() {
                    return e.onButtonClick;
                  },
                  type: "brand",
                  class: "w-full",
                  get children() {
                    return e.actionText;
                  },
                })
              ),
              v(() => C(s, "src", X.gold)),
              r
            );
          })(),
        ];
      },
    })
  );
};
var We = p('<p class="flex flex-col gap-y-1 font-semibold"><span>');
const le = (e) => {
  const { disabledAutoSpin: a } = ne(),
    [r] = be(() =>
      P(void 0, null, function* () {
        const t = yield V.post("/activity/reward/freeMoneyReward/", {
          currencyName: e.currency,
          bonusAmount: e.amount,
        });
        return (
          (t.state === 0 || t.rewardId) &&
            (yield V.post(`/activity/reward/receive/${t.rewardId}/`),
            yield we(() => {
              T.refetchResource(T.checkUserClaimedFreeMoney.name);
            })),
          t
        );
      })
    );
  A(() => {
    a();
  }),
    ee(() => {
      var t, l;
      (r() &&
        ((t = r()) == null ? void 0 : t.state) === 0 &&
        (l = r()) != null &&
        l.rewardId) ||
        (y.pop(),
        ue(
          () =>
            (() => {
              var o = We(),
                u = o.firstChild;
              return (
                i(
                  o,
                  () =>
                    f(
                      "Oh no! It appears somebody has already opened an account on your device/IP."
                    ),
                  u
                ),
                i(u, () =>
                  f(
                    "Unfortunately, you are not eligible to receive the welcome reward, but don’t worry there are more rewards to come!"
                  )
                ),
                o
              );
            })(),
          { duration: 0 }
        ));
    });
  const s = J();
  return n(te, {
    get children() {
      return n(re, {
        get when() {
          var t;
          return (
            Z(() => {
              var l;
              return !!(r() && ((l = r()) == null ? void 0 : l.state) === 0);
            })() && ((t = r()) == null ? void 0 : t.rewardId)
          );
        },
        get children() {
          return n(se, {
            get amount() {
              var t;
              return (t = r()) == null ? void 0 : t.amount;
            },
            get currencyName() {
              var t;
              return (t = r()) == null ? void 0 : t.currencyName;
            },
            get title() {
              return f("Rewards Claimed");
            },
            get desc() {
              return f("Use this bonus money to play games now!");
            },
            get actionText() {
              return f("Play");
            },
            onButtonClick: () => {
              var t;
              Q.emit("sensorsTrack", { event: "free_play_click" }),
                y.pop(),
                s(
                  `/newuser/gamelist/${
                    (t = r()) == null ? void 0 : t.currencyName
                  }`
                );
            },
          });
        },
      });
    },
  });
};
let Y = !1;
const Ve = (e, a) => {
  ve(() => {
    Y ||
      ((Y = !0),
      Se(() => {
        A(() => {
          setTimeout(() => {
            const l = Date.now();
            let o = setInterval(() => {
              if (Date.now() - l > 6e3) {
                clearInterval(o);
                return;
              }
              T.refetchResource(T.checkUserClaimedFreeMoney.name);
            }, 1e3);
          }, 3500);
        });
        let t = !1;
        ee(() => {
          !t &&
            F.login &&
            ((t = !0), y.push(() => n(le, { amount: e, currency: a })));
        });
      }));
  });
};
var Xe = p("<div class=pt-2>"),
  Ke = p('<div class="mb-6 mt-4">'),
  Ye = p('<div class="flex w-full justify-center p-1">'),
  Ze = p(
    '<div class="new-user-spin relative h-full overflow-hidden rounded-lg">'
  ),
  qe = p('<img class="ml-1 size-6">'),
  Je = p(
    '<span class="inline-flex items-center text-sm text-alw_white"><span>'
  ),
  Qe = p(
    '<div class="ml-[0.1rem] flex size-8 items-center justify-center rounded-full border border-solid border-alw_white p-1 font-extrabold text-xxs">'
  ),
  et = p(
    '<span class="inline-flex items-center gap-x-1 text-sm font-semibold capitalize text-primary"><img class=size-4>'
  ),
  tt = p('<div class="mt-2 h-20 w-full rounded-lg bg-white_alpha5">'),
  rt = p(
    '<div class="bg-new-user-spin-crypto rounded-2xl bg-layer2 p-2"><h2 class=text-center></h2><p class="relative z-0 flex h-24 items-center justify-center"><img class="absolute left-1/2 top-0 -z-10 h-24 -translate-x-1/2">'
  ),
  nt = p(
    '<div class="bg-new-user-spin-fiat rounded-2xl bg-layer2 p-2"><h2 class=text-center></h2><p class="relative z-0 flex h-24 items-center justify-center"><img class="absolute left-1/2 top-0 -z-10 h-24 -translate-x-1/2">'
  ),
  at = p('<div class="relative z-0"><span></span><span>');
const {
    isBrHost: st,
    isKenyaHost: lt,
    isBrAuditHost: ot,
    isNgHost: it,
    isNg2Host: ct,
    isIdHost: ut,
  } = de.getHostType(me.host),
  oe = () => st || lt || ot || ct || it || ut,
  dt = () => {
    const { getDefaultCurrency: e, currencies: a } = gt(),
      [r, s] = R(e()),
      t = G(() => pt(r().value)),
      l = J(),
      [o, u] = R(),
      { disabledAutoSpin: c } = ne(),
      m = G(() => {
        var d;
        return ((d = S.getCurrency(r().value)) == null
          ? void 0
          : d.currencyType) === "FIAT"
          ? "fiat"
          : "crypto";
      }),
      h = () => {
        u(2);
      },
      k = () => {
        const d = t()[o()];
        y.pop(),
          y.push(() =>
            n(I, {
              get when() {
                return F.login;
              },
              get fallback() {
                return n(se, {
                  get amount() {
                    return d.amount;
                  },
                  get title() {
                    return f("CONGRATULATIONS");
                  },
                  get desc() {
                    return f("You’ve got free money to bet on our games!");
                  },
                  get actionText() {
                    return f("Claim Rewards");
                  },
                  onButtonClick: () => {
                    Q.emit("sensorsTrack", {
                      event: "spin_reward_click",
                      currency: d.currencyName,
                    }),
                      $e.spinCollect(),
                      F.login || l("/login/regist"),
                      y.pop(),
                      Ve(Number(d.amount), d.currencyName);
                  },
                  get currencyName() {
                    return d.currencyName;
                  },
                });
              },
              get children() {
                return n(le, {
                  get amount() {
                    return Number(d.amount);
                  },
                  get currency() {
                    return d.currencyName;
                  },
                });
              },
            })
          );
      },
      [ce, z] = R(!1);
    return (
      A(() => {
        c();
      }),
      n(q, {
        type: "center",
        class: "spin-popup",
        get children() {
          return n(Ce, {
            fallback: (d) => (console.error(d), null),
            get children() {
              var d = Ze();
              return (
                i(
                  d,
                  n(D, {
                    onClick: () => {
                      y.pop();
                    },
                    class:
                      "absolute right-4 top-2 z-20 size-8 bg-white_alpha10",
                    type: "second",
                    get children() {
                      return n(M, { name: "Close" });
                    },
                  }),
                  null
                ),
                i(
                  d,
                  n(pe, {
                    name: "slideRight",
                    get children() {
                      return n(I, {
                        get when() {
                          return ce();
                        },
                        get children() {
                          return n(ge, {
                            class: "absolute inset-0 z-40 bg-layer4",
                            get children() {
                              return [
                                (() => {
                                  var g = Xe();
                                  return (
                                    i(
                                      g,
                                      n(D, {
                                        onClick: () => z(!1),
                                        get children() {
                                          return n(M, {
                                            name: "Arrow",
                                            class: "size-4",
                                          });
                                        },
                                      })
                                    ),
                                    g
                                  );
                                })(),
                                n(_e, {}),
                              ];
                            },
                          });
                        },
                      });
                    },
                  }),
                  null
                ),
                i(
                  d,
                  n(ft, {
                    get type() {
                      return m();
                    },
                    get mainTitle() {
                      return f("Spin to Win");
                    },
                    get secondTitle() {
                      return n(N, {
                        get currencyName() {
                          var g;
                          return (g = K(t())) == null ? void 0 : g.currencyName;
                        },
                        get children() {
                          return n(N.Amount, {
                            get amount() {
                              var g;
                              return (g = K(t())) == null ? void 0 : g.amount;
                            },
                            precision: 4,
                          });
                        },
                      });
                    },
                    get children() {
                      return [
                        (() => {
                          var g = Ke();
                          return (
                            i(
                              g,
                              n(Fe, {
                                get rewards() {
                                  return t();
                                },
                                get spinLayout() {
                                  return m();
                                },
                                get winRewardIndex() {
                                  return o();
                                },
                                onSpinStart: h,
                                onSpinEnd: k,
                                renderReward: (x) =>
                                  (() => {
                                    var b = Je(),
                                      _ = b.firstChild;
                                    return (
                                      _.style.setProperty(
                                        "text-shadow",
                                        "0px 2px 0px rgba(0,0,0,.3)"
                                      ),
                                      i(_, () => Ne(x.amount, 3)),
                                      i(
                                        b,
                                        n(I, {
                                          get when() {
                                            return m() === "crypto";
                                          },
                                          get fallback() {
                                            return (() => {
                                              var w = Qe();
                                              return (
                                                w.style.setProperty(
                                                  "text-shadow",
                                                  "0px 2px 0px rgba(0,0,0,.3)"
                                                ),
                                                w.style.setProperty(
                                                  "box-shadow",
                                                  "0px 2px 0px rgba(0,0,0,.3)"
                                                ),
                                                i(w, () =>
                                                  S.getCurrencySymbol(
                                                    x.currencyName
                                                  )
                                                ),
                                                w
                                              );
                                            })();
                                          },
                                          get children() {
                                            var w = qe();
                                            return (
                                              v(() =>
                                                C(
                                                  w,
                                                  "src",
                                                  O.coinIcon(x.currencyName)
                                                )
                                              ),
                                              w
                                            );
                                          },
                                        }),
                                        null
                                      ),
                                      b
                                    );
                                  })(),
                              })
                            ),
                            g
                          );
                        })(),
                        n(re, {
                          get when() {
                            return !oe();
                          },
                          get children() {
                            var g = Ye();
                            return (
                              i(
                                g,
                                n(fe, {
                                  options: a,
                                  get value() {
                                    return r();
                                  },
                                  get class() {
                                    return U(
                                      "h-9",
                                      "fix-light-hover spin-select !border-none !bg-layer3"
                                    );
                                  },
                                  onChange: s,
                                  children: (x) =>
                                    (() => {
                                      var b = et(),
                                        _ = b.firstChild;
                                      return (
                                        i(b, () => x().label, null),
                                        v(() =>
                                          C(
                                            _,
                                            "src",
                                            O.coinIcon(
                                              x().value === "crypto"
                                                ? "BTC"
                                                : x().value
                                            )
                                          )
                                        ),
                                        b
                                      );
                                    })(),
                                })
                              ),
                              g
                            );
                          },
                        }),
                        n(te, {
                          get fallback() {
                            return tt();
                          },
                          get children() {
                            return n(Te, {
                              class: "mt-2",
                              onSpinFeed: () => z(!0),
                            });
                          },
                        }),
                      ];
                    },
                  }),
                  null
                ),
                d
              );
            },
          });
        },
      })
    );
  },
  mt = () => {
    const e = Oe([
      "BCD",
      "USDT",
      "USDC",
      "TRX",
      "SOL",
      "DOGE",
      "BNB",
      "LTC",
      "XML",
      "MATIC",
      "DOT",
    ]);
    return () => e.pop();
  },
  ie = () => Object.values(ye),
  pt = (e) => {
    var u;
    const a = [1, 2, 5, 6, 8, 10, 16, 20, 26, 30, 60, 100, 200, 300, 400, 500];
    if (((u = S.getCurrency(e)) == null ? void 0 : u.currencyType) === "FIAT")
      return a.map((c, m) => ({
        section: m,
        amount: S.convertCurrency(new H(c), "USDFIAT", e).toNumber(),
        currencyName: e,
      }));
    const s = ie(),
      t = (c) => {
        var h;
        return s.find((k) => k.currencyName === c)
          ? c
          : (h = s.shift()) == null
          ? void 0
          : h.currencyName;
      },
      l = mt(),
      o = (c) => (c >= 100 ? t("USDT") : t(l()));
    return a.map((c, m) => {
      const h = o(c);
      return {
        section: m,
        amount: S.convertCurrency(new H(c), "USDFIAT", h).toNumber(),
        currencyName: h,
      };
    });
  },
  gt = () => {
    const e = he()[0].bcn,
      a = () => F.bonusCurrencyName,
      r = [
        !oe() && { label: "crypto", value: "crypto" },
        ...ie()
          .filter((t) => {
            var o;
            return (
              ((o = S.getCurrency(t.currencyName)) == null
                ? void 0
                : o.currencyType) === "FIAT"
            );
          })
          .map((t) => ({ label: t.aliasCurrencyName, value: t.currencyName })),
      ].filter(Boolean);
    function s() {
      const t = (l) => (l ? r.find((o) => o.value === l) : !1);
      return t(e) || t(a()) || r[0];
    }
    return { getDefaultCurrency: s, currencies: r };
  },
  ft = (e) => {
    const a = {
      crypto: (() => {
        var r = rt(),
          s = r.firstChild,
          t = s.nextSibling,
          l = t.firstChild;
        return (
          i(
            s,
            n($, {
              gradient: "linear-gradient(180deg, #FFF893 30%, #FFAE00 50%)",
              get textShadow() {
                return j.darken
                  ? "0px 2px 0px rgba(9, 5, 1, 0.50)"
                  : "0px 2px 0px #E38C51";
              },
              class: "text-2xl font-semibold uppercase",
              get children() {
                return e.mainTitle;
              },
            })
          ),
          i(
            t,
            n($, {
              gradient:
                "linear-gradient(180deg, #FFF 45.31%, #FFF8B4 53.13%, #FB0 100%)",
              textShadow: "0px 2.15px 0px rgba(132, 56, 0, 0.50)",
              class: "text-4xl font-extrabold",
              get children() {
                return e.secondTitle;
              },
            }),
            null
          ),
          i(r, () => e.children, null),
          v(() => C(l, "src", W.banner_crypto)),
          r
        );
      })(),
      fiat: (() => {
        var r = nt(),
          s = r.firstChild,
          t = s.nextSibling,
          l = t.firstChild;
        return (
          i(
            s,
            n($, {
              gradient: "linear-gradient(180deg, #23EE88 0%, #93FF97 100%)",
              get textShadow() {
                return j.darken
                  ? "0px 2px 0px rgba(132, 56, 0, 0.50)"
                  : "0px 2px 0px #50A57B";
              },
              class: "text-2xl font-semibold uppercase",
              get children() {
                return e.mainTitle;
              },
            })
          ),
          i(
            t,
            n($, {
              gradient:
                "linear-gradient(180deg, #FFF 45.31%, #BCFFB4 53.13%, #00FF22 100%)",
              textShadow: "0px 2.15px 0px rgba(132, 56, 0, 0.50)",
              class: "text-4xl font-extrabold",
              get children() {
                return e.secondTitle;
              },
            }),
            null
          ),
          i(r, () => e.children, null),
          v(() => C(l, "src", W.banner_fiat)),
          r
        );
      })(),
    };
    return Z(() => a[e.type]);
  },
  $ = (e) =>
    (() => {
      var a = at(),
        r = a.firstChild,
        s = r.nextSibling;
      return (
        i(r, () => e.children),
        i(s, () => e.children),
        v(
          (t) => {
            var l = e.gradient,
              o = U("relative z-0 bg-clip-text text-transparent", e.class),
              u = e.textShadow,
              c = U("absolute inset-0 -z-10", e.class);
            return (
              l !== t.e &&
                ((t.e = l) != null
                  ? r.style.setProperty("background-image", l)
                  : r.style.removeProperty("background-image")),
              o !== t.t && E(r, (t.t = o)),
              u !== t.a &&
                ((t.a = u) != null
                  ? s.style.setProperty("text-shadow", u)
                  : s.style.removeProperty("text-shadow")),
              c !== t.o && E(s, (t.o = c)),
              t
            );
          },
          { e: void 0, t: void 0, a: void 0, o: void 0 }
        ),
        a
      );
    })(),
  Ut = () => {
    y.push(() => n(dt, {}));
  };
export { Ut as p, Ve as s };
