const __vite__fileDeps = [
    "assets/index-BhEqdHA7.js",
    "assets/index-Cp-3lvCI.js",
    "assets/index-C2mwTJQ9.css",
    "assets/index-DAEqJMkH.js",
    "assets/index-CPRFYrHB.js",
    "assets/index-BPJ2mQ91.js",
    "assets/index-CSqi4AR7.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  c as e,
  A as se,
  u as le,
  a as S,
  b as B,
  d as ae,
  i as l,
  t as c,
  S as ie,
  e as y,
  B as k,
  f as o,
  g as J,
  h as x,
  L as oe,
  j as ce,
  k as j,
  o as ge,
  l as $,
  m as K,
  n as ue,
  s as u,
  U as de,
  p as L,
  q as z,
  D as me,
  r as Q,
  v as fe,
  w as he,
  x as D,
  M as pe,
  E as be,
  y as _e,
  z as ve,
  C as v,
  F as T,
  G as xe,
  I as $e,
  H as we,
  J as ye,
  K as Ce,
  R as Ie,
  T as Se,
  N as ke,
  O as Be,
  P as Le,
  Q as De,
  V as w,
  W as Te,
  X as Z,
  _ as q,
  Y as Ee,
  Z as Fe,
  $ as Ae,
  a0 as Ne,
  a1 as Re,
  a2 as Ue,
  a3 as Pe,
} from "./index-Cp-3lvCI.js";
import { B as Me, R as Oe } from "./index-DAEqJMkH.js";
import { S as b } from "./index-CPRFYrHB.js";
var H = o("<div>"),
  Ve = o('<div class="px-4 sm:rounded-xl sm:bg-layer3 sm:px-3">'),
  je = o('<div class="relative mx-4 mr-2 h-2 w-2">'),
  ze = o('<div class="ml-2 hidden gap-2 lg:!flex">'),
  He = o(
    '<div class="h-32 w-14"><div class="mt-2 rounded-lg bg-layer5 h-18 sm:bg-layer4"></div><div class="h-3 rounded bg-layer5 mt-1 sm:bg-layer4"></div><div class="h-4 rounded-md bg-layer5 mt-1 sm:bg-layer4">'
  ),
  Xe = o(
    '<div class="relative mb-1 w-full rounded-lg pt-[133%]"><img class="absolute left-0 top-0 w-full rounded-lg">'
  ),
  Ge = o(
    '<div class=w-[118%]><div class="flex items-center justify-center font-extrabold text-secondary"><span class="ellipsis -ml-0.5 text-xxs"></span></div><div class="text-center font-extrabold text-nowrap text-[#2CD97D] text-xxs">'
  ),
  We = o("<img class=size-[0.875rem]>");
function Ye() {
  return e(se, {
    get children() {
      return e(Je, {});
    },
  });
}
function Je() {
  const t = le(),
    [s, r] = S(0),
    [n, a] = S(),
    [g, m] = S(Array(20).fill(void 0));
  B(async () => {
    const i = s();
    m(Array(10).fill(void 0));
    const d = await J().get(
      `/game/support/home/v3/recent-big-wins/?gameTypeId=${i}`
    );
    m(d.slice(0, 20));
  });
  const p = ae(() => {
    const i = () => {
      const d = g();
      if (d.length === 0) return [];
      const f = Array(Math.ceil(20 / d.length))
        .fill(d)
        .flat()
        .slice(0, 20);
      return f.concat(...f);
    };
    return e(oe, {
      rootMargin: "100px",
      get each() {
        return i();
      },
      children: (d) =>
        e(x, {
          get when() {
            return d();
          },
          get fallback() {
            return e(Ke, {});
          },
          get children() {
            return e(Qe, {
              get data() {
                return d();
              },
            });
          },
        }),
    });
  });
  B(() => {
    let i = n();
    if (g().length === 0) return;
    const d = { x: 0 },
      f = ce.to(d, {
        x: i.children[i.children.length / 2].offsetLeft - i.offsetLeft,
        duration: 20,
        ease: "none",
        repeat: -1,
        onUpdate() {
          i.scrollLeft = d.x;
        },
      });
    j(i, "pointerenter", () => {
      f.pause();
    }),
      j(i, "pointerleave", () => {
        f.play();
      }),
      B(() => {
        t() ? f.play() : f.pause();
      }),
      ge(() => f.kill());
  });
  const _ = (i) =>
    (() => {
      var d = H();
      return (
        $(() =>
          K(
            d,
            y("absolute left-0 top-0 h-full w-full rounded-full bg-brand", i)
          )
        ),
        d
      );
    })();
  return [
    e(b, {
      get title() {
        return [
          (() => {
            var i = je();
            return (
              l(i, () => _("z-10"), null),
              l(i, () => _("animate-ping"), null),
              i
            );
          })(),
          (() => {
            var i = H();
            return l(i, () => c("Recent Big Wins")), i;
          })(),
          (() => {
            var i = ze();
            return (
              l(
                i,
                e(C, {
                  tab: 0,
                  get curTab() {
                    return s();
                  },
                  setTab: r,
                  get title() {
                    return c("All");
                  },
                }),
                null
              ),
              l(
                i,
                e(C, {
                  tab: 1,
                  get curTab() {
                    return s();
                  },
                  setTab: r,
                  get title() {
                    return c("__ENV_SITE__ Originals");
                  },
                }),
                null
              ),
              l(
                i,
                e(C, {
                  tab: 2,
                  get curTab() {
                    return s();
                  },
                  setTab: r,
                  get title() {
                    return c("Slots");
                  },
                }),
                null
              ),
              l(
                i,
                e(C, {
                  tab: 3,
                  get curTab() {
                    return s();
                  },
                  setTab: r,
                  get title() {
                    return c("Live Casino");
                  },
                }),
                null
              ),
              i
            );
          })(),
        ];
      },
    }),
    (() => {
      var i = Ve();
      return (
        l(
          i,
          e(ie, {
            ref: a,
            class:
              "grid grid-flow-col items-center overflow-hidden gap-3 sm:gap-3.5",
            get children() {
              return p();
            },
          })
        ),
        i
      );
    })(),
  ];
}
function C(t) {
  return e(k, {
    onClick: () => t.setTab(t.tab),
    get class() {
      return y(
        "flex-1 p-1 center h-auto whitespace-nowrap rounded-none border-b-2 text-xs",
        t.curTab === t.tab
          ? "font-semibold text-primary border-b-success"
          : "font-normal text-secondary border-b-transparent"
      );
    },
    get children() {
      return t.title;
    },
  });
}
function Ke() {
  return He();
}
function Qe(t) {
  const { bg: s, src: r } = ue(
    () => t.data.iconThreeFour,
    () => t.data.gameIcon
  );
  return e(Q, {
    get href() {
      return `/game-detail/${t.data.distributeId}`;
    },
    class:
      "sm:w-13 flex flex-none flex-col items-center h-28 w-14 text-xs hover:opacity-80 sm:h-[106px]",
    get children() {
      return [
        (() => {
          var n = Xe(),
            a = n.firstChild;
          return (
            $(
              (g) => {
                var m = s(),
                  p = r();
                return (
                  m !== g.e &&
                    ((g.e = m) != null
                      ? n.style.setProperty("background-color", m)
                      : n.style.removeProperty("background-color")),
                  p !== g.t && u(a, "src", (g.t = p)),
                  g
                );
              },
              { e: void 0, t: void 0 }
            ),
            n
          );
        })(),
        (() => {
          var n = Ge(),
            a = n.firstChild,
            g = a.firstChild,
            m = a.nextSibling;
          return (
            l(
              a,
              e(x, {
                get when() {
                  return de.vipBadgeIcon(t.data.userVipLevel);
                },
                children: (p) =>
                  (() => {
                    var _ = We();
                    return $(() => u(_, "src", p())), _;
                  })(),
              }),
              g
            ),
            l(g, () => L.userName(t.data.nickName)),
            l(m, () =>
              z.printCurrency(
                z.convertCurrency(
                  new me(t.data.winAmount),
                  "USDT",
                  t.data.currencyName
                ),
                t.data.currencyName,
                3
              )
            ),
            n
          );
        })(),
      ];
    },
  });
}
var Ze = o('<div class=w-full><div class="h-48 w-full rounded-xl bg-layer4">'),
  qe = o(
    '<div class="relative flex h-full w-full cursor-pointer flex-col rounded-xl bg-layer4 px-3 py-2.5">'
  );
const et = _e((t, s) =>
  J().get(`/platform-sports/v14/live10/${t}/${s}/`, { cache: !0 })
);
function tt() {
  const [t, s] = S(null);
  return (
    fe(() => {
      const r = ve();
      et(r, v.lang)
        .then((n) => {
          s(n);
        })
        .catch(console.log);
    }),
    e(be, {
      fallback: null,
      get children() {
        return [
          e(b, {
            showController: !0,
            get title() {
              return c("Live Sports");
            },
            href: "/sports?bt-path=%2Flive",
          }),
          e(x, {
            get when() {
              return t();
            },
            get fallback() {
              return Ze();
            },
            get children() {
              return e(he, {
                class: "-mx-4 sm:mx-0",
                get scrollPadding() {
                  return D.mobile ? 16 : 0;
                },
                rows: 1,
                get data() {
                  return t()?.items ?? [];
                },
                gap: 8,
                width: 398,
                height: 198,
                children: (r) =>
                  e(x, {
                    get when() {
                      return r();
                    },
                    get fallback() {
                      return qe();
                    },
                    get children() {
                      return e(pe, {
                        get img_path() {
                          return t()?.imgDomain;
                        },
                        get matchInfo() {
                          return r().matchInfo;
                        },
                        get sportInfo() {
                          return r().sportInfo;
                        },
                        get categoryInfo() {
                          return r().categoryInfo;
                        },
                        get tournamentInfo() {
                          return r().tournamentInfo;
                        },
                        get markets() {
                          return t()?.description.markets;
                        },
                        get statuses() {
                          return t()?.description.statuses;
                        },
                      });
                    },
                  }),
              });
            },
          }),
        ];
      },
    })
  );
}
const h = "/assets/dot-C8z5Aoh_.png",
  rt = "/assets/apple_pay-DhGEreIw.png",
  nt = "/assets/google_pay-FVJ2d1pF.png",
  st = "/assets/mastercard-CVVg_XRh.png",
  lt = "/assets/pic_pay-fE-XPIEr.png",
  at = "/assets/visa-CHvdFeKw.png";
var it = o("<img>"),
  ot = o(
    '<div class="rounded-xl bg-layer4 mt-4 sm:mt-7"><div class="flex center gap-2 pb-4 pt-3 lg:!hidden"></div><div class="relative h-24 rounded-xl bg-alw_white/70 lg:px-8 dark:bg-alw_dark/70"><div class="absolute left-0 size-full overflow-hidden blur pointer-events-none"><img class="absolute -top-3 left-4 scale-[2]"><img class="absolute left-24 top-14 scale-150"><img class="absolute -top-2 left-40 scale-[2]"><img class="absolute -top-3 left-72 scale-[3]"><img class="absolute left-80 top-15 scale-150"><img class="absolute -bottom-3 right-4 scale-[2]"><img class="absolute bottom-14 right-24 scale-150"><img class="absolute -bottom-2 right-40 scale-[2]"><img class="absolute -bottom-3 right-72 scale-[3]"><img class="absolute bottom-15 right-80 scale-150"></div><div class="relative z-10 flex h-full flex-col items-center justify-center lg:!flex-row-reverse"><div class="hidden center lg:!flex"></div><div class="center mx-auto gap-6"><img class=w-14><img class=w-7><img class=w-11><img class=w-12><img class=w-15></div><div class="mt-4 center gap-11 lg:!mt-0"><div class="font-extrabold text-lg sm:text-2xl"><span class=text-brand>300%</span> '
  ),
  ct = o(
    '<div class="mt-4 rounded-xl p-4 bg-alw_dark"><div class="text-lg font-extrabold text-center text-alw_white sm:text-left">Accepts <span class="mx-1 text-brand">100+</span> Top HQ NFT assets</div><div class="mt-2 flex justify-between">'
  ),
  gt = o('<img class="h-10 w-10 rounded-xl">');
function X(t) {
  return e(xe, {
    each: [
      "BTC",
      "ETH",
      "BNB",
      "XRP",
      "USDT",
      "USDC",
      "SOL",
      "ADA",
      "DOGE",
      "MATIC",
      "TRX",
    ],
    children: (r) =>
      (() => {
        var n = it();
        return (
          $(
            (a) => {
              var g = y(t.class),
                m = L.coinIcon(r);
              return (
                g !== a.e && K(n, (a.e = g)),
                m !== a.t && u(n, "src", (a.t = m)),
                a
              );
            },
            { e: void 0, t: void 0 }
          ),
          n
        );
      })(),
  });
}
function ut() {
  const t = T();
  return (() => {
    var s = ot(),
      r = s.firstChild,
      n = r.nextSibling,
      a = n.firstChild,
      g = a.firstChild,
      m = g.nextSibling,
      p = m.nextSibling,
      _ = p.nextSibling,
      i = _.nextSibling,
      d = i.nextSibling,
      f = d.nextSibling,
      E = f.nextSibling,
      F = E.nextSibling,
      ee = F.nextSibling,
      te = a.nextSibling,
      A = te.firstChild,
      N = A.nextSibling,
      R = N.firstChild,
      U = R.nextSibling,
      P = U.nextSibling,
      M = P.nextSibling,
      re = M.nextSibling,
      O = N.nextSibling,
      V = O.firstChild,
      ne = V.firstChild;
    return (
      ne.nextSibling,
      l(r, e(X, { class: "w-6" })),
      u(g, "src", h),
      u(m, "src", h),
      u(p, "src", h),
      u(_, "src", h),
      u(i, "src", h),
      u(d, "src", h),
      u(f, "src", h),
      u(E, "src", h),
      u(F, "src", h),
      u(ee, "src", h),
      l(A, e(X, { class: "w-6 -ml-1" })),
      u(R, "src", rt),
      u(U, "src", st),
      u(P, "src", at),
      u(M, "src", nt),
      u(re, "src", lt),
      l(V, () => c("Deposit Bonus"), null),
      l(
        O,
        e(k, {
          class: "h-8 rounded-lg lg:hidden",
          onClick: () => t("/deposit"),
          type: "brand",
          get children() {
            return c("Deposit Now");
          },
        }),
        null
      ),
      s
    );
  })();
}
function dt() {
  const t = [
    "BAYC",
    "CryptoPunks",
    "CloneX",
    "Azuki",
    "Doodles",
    "Mfers",
    "MekaVerse",
  ];
  return e(x, {
    get when() {
      return D.mobile;
    },
    get children() {
      var s = ct(),
        r = s.firstChild,
        n = r.nextSibling;
      return (
        l(
          n,
          e($e, {
            each: t,
            children: (a) =>
              e(Q, {
                class: "flex-none",
                get href() {
                  return `/wallet/nft-deposit?currency=${a()}`;
                },
                get children() {
                  var g = gt();
                  return $(() => u(g, "src", L.nftIcon(a()))), g;
                },
              }),
          })
        ),
        s
      );
    },
  });
}
const mt = "/assets/bingo-Cj_fMpbj.png",
  ft = "/assets/casino-9P3_MIUy.png",
  ht = "/assets/lottery-BgL2Ay0X.png",
  pt = "/assets/racing-BfvulUJj.png",
  bt = "/assets/sports-C-mawjC1.png",
  _t = "/assets/updown-DQe7IPIb.png";
var G = o(
    '<div class="flex items-center"><span class="text-sm ml-0.5 sm:text-2xl">'
  ),
  vt = o(
    '<div class="hidden font-semibold text-secondary mb-1.5 mt-auto max-w-60 text-left lg:block">'
  ),
  xt = o(
    '<div class="hidden font-semibold text-secondary mb-1.5 mt-auto max-w-60 text-left lg:!block">'
  ),
  $t = o(
    '<div class="mt-4 flex w-full flex-col items-stretch gap-2 sm:mt-6 lg:!flex-row lg:!gap-3"><div class="flex flex-3 gap-2 lg:!gap-3"></div><div class="flex flex-2 flex-wrap gap-2 lg:!gap-3">'
  ),
  wt = o(
    '<img class="absolute left-[50%] top-[5%] h-[70%] -translate-x-[50%] lg:top-0 lg:h-full lg:-translate-x-[10%]">'
  ),
  yt = o(
    '<div class="hidden items-center absolute left-2 top-2 lg:flex"><span class="text-lg font-extrabold ml-1">'
  ),
  Ct = o(
    '<div class="block absolute w-full left-0 text-center bottom-2 lg:hidden"><span class="text-sm font-extrabold">'
  ),
  It = o('<img class="absolute right-0 top-0 h-[120%] sm:h-full">'),
  St = o('<div class="relative z-10 flex h-full flex-col flex-auto">');
function kt() {
  return (() => {
    var t = $t(),
      s = t.firstChild,
      r = s.nextSibling;
    return (
      l(
        s,
        e(W, {
          href: "/casino",
          class: "col-span-2 col-start-1",
          src: ft,
          get gradient() {
            return `linear-gradient(to left, ${
              v.darken ? "#2C5040" : "#BFF9DC"
            }, transparent 75%)`;
          },
          get children() {
            return [
              (() => {
                var n = G(),
                  a = n.firstChild;
                return (
                  l(n, e(we, { class: "h-8 w-8" }), a),
                  l(a, () => c("CASINO")),
                  n
                );
              })(),
              (() => {
                var n = vt();
                return (
                  l(n, () =>
                    c("Dive into our in-house games, live casino and slots")
                  ),
                  n
                );
              })(),
            ];
          },
        }),
        null
      ),
      l(
        s,
        e(W, {
          href: "/sports",
          class: "col-span-2 col-start-1",
          src: bt,
          get gradient() {
            return `linear-gradient(to left, ${
              v.darken ? "#582E59" : "#F9AFF6"
            }, transparent 75%)`;
          },
          get children() {
            return [
              (() => {
                var n = G(),
                  a = n.firstChild;
                return (
                  l(n, e(ye, { class: "h-8 w-8" }), a),
                  l(a, () => c("SPORTS")),
                  n
                );
              })(),
              (() => {
                var n = xt();
                return (
                  l(n, () =>
                    c(
                      "Bet on Football, Cricket, NFL, eSports & over 80 sports!"
                    )
                  ),
                  n
                );
              })(),
            ];
          },
        }),
        null
      ),
      l(
        r,
        e(I, {
          href: "/lottery",
          src: ht,
          get gradient() {
            return `linear-gradient(to left, ${
              v.darken ? "#425330" : "#DAFFA9"
            }, transparent 75%`;
          },
          get icon() {
            return e(Ce, {});
          },
          get title() {
            return c("lottery").toLocaleUpperCase();
          },
        }),
        null
      ),
      l(
        r,
        e(I, {
          href: "/racing",
          src: pt,
          get gradient() {
            return `linear-gradient(to left, ${
              v.darken ? "#504130" : "#FFCE9C"
            }, transparent 75%)`;
          },
          get icon() {
            return e(Ie, {});
          },
          get title() {
            return c("racing").toLocaleUpperCase();
          },
        }),
        null
      ),
      l(
        r,
        e(I, {
          href: "/trading/up-down",
          src: _t,
          get gradient() {
            return `linear-gradient(to left, ${
              v.darken ? "#2D4F31" : "#B1FFB7"
            }, transparent 75%)`;
          },
          get icon() {
            return e(Se, {});
          },
          get title() {
            return c("updown").toLocaleUpperCase();
          },
        }),
        null
      ),
      l(
        r,
        e(I, {
          href: "/bingo",
          src: mt,
          get gradient() {
            return `linear-gradient(to left, ${
              v.darken ? "#47386F" : "#B79AFF"
            }, transparent 75%)`;
          },
          get icon() {
            return e(ke, {});
          },
          get title() {
            return c("bingo").toLocaleUpperCase();
          },
        }),
        null
      ),
      t
    );
  })();
}
function I(t) {
  const s = T();
  return e(k, {
    onClick: () => s(t.href),
    get class() {
      return y(
        "relative h-24 flex-1 p-2 overflow-hidden rounded-xl bg-layer4 font-extrabold center sm:h-[120px] lg:min-w-[40%]",
        t.class
      );
    },
    get style() {
      return { "background-image": t.gradient };
    },
    get children() {
      return [
        (() => {
          var r = wt();
          return $(() => u(r, "src", t.src)), r;
        })(),
        (() => {
          var r = yt(),
            n = r.firstChild;
          return l(r, () => t.icon, n), l(n, () => t.title), r;
        })(),
        (() => {
          var r = Ct(),
            n = r.firstChild;
          return l(n, () => t.title), r;
        })(),
      ];
    },
  });
}
function W(t) {
  const s = T();
  return e(k, {
    onClick: () => s(t.href),
    get class() {
      return y(
        "relative flex-1 rounded-xl bg-layer4 font-extrabold h-32 overflow-hidden center p-1.5 sm:h-[252px] sm:px-3 sm:py-5",
        t.class
      );
    },
    get style() {
      return { "background-image": t.gradient };
    },
    get children() {
      return [
        (() => {
          var r = It();
          return $(() => u(r, "src", t.src)), r;
        })(),
        (() => {
          var r = St();
          return l(r, () => t.children), r;
        })(),
      ];
    },
  });
}
var Bt = o("<div class=mb-6>");
const Lt = Z(() =>
    q(() => import("./index-BhEqdHA7.js"), __vite__mapDeps([0, 1, 2, 3, 4]))
  ),
  Dt = Z(() =>
    q(() => import("./index-BPJ2mQ91.js"), __vite__mapDeps([5, 1, 2, 6]))
  ),
  Tt = Ee("UpcomingDrawSection");
function Rt() {
  const t = Fe();
  Be().then((g) => g(t));
  const s = Et(),
    { isSpreadHost: r, isSportsHost: n } = Le.getHostType(D.host),
    a = De(() => r && !Re.login);
  return e(x, {
    get when() {
      return a();
    },
    get fallback() {
      return e(x, {
        when: !n,
        get fallback() {
          return e(Lt, {});
        },
        get children() {
          return [
            e(Me, {
              get children() {
                return e(Ye, {});
              },
            }),
            e(kt, {}),
            e(b, {
              get title() {
                return c("__ENV_SITE__ Originals");
              },
              showController: !0,
              href: "/gamelist/brand",
            }),
            e(w, {
              get data() {
                return s("casino_bc");
              },
            }),
            e(tt, {}),
            e(b, {
              showController: !0,
              get title() {
                return c("__ENV_SITE__ Exclusive");
              },
              href: "/tagname/exclusive",
            }),
            e(w, {
              get data() {
                return s("bc_exclusive");
              },
            }),
            e(b, {
              get title() {
                return c("Slots");
              },
              href: "/gamelist/slots",
              showController: !0,
            }),
            e(w, {
              get data() {
                return s("casino_slots");
              },
            }),
            e(b, {
              get title() {
                return c("Upcoming Lottery Draw");
              },
              href: "/lottery",
              showController: !0,
            }),
            e(Te, {
              get children() {
                return e(Tt, {});
              },
            }),
            e(b, {
              get title() {
                return c("Live Casino");
              },
              href: "/gamelist/live",
              showController: !0,
            }),
            e(w, {
              get data() {
                return s("casino_live");
              },
            }),
            e(ut, {}),
            e(b, {
              get title() {
                return c("All Bingo Games");
              },
              href: "/tagname/bingo",
              showController: !0,
            }),
            e(w, {
              get data() {
                return s("bingo");
              },
            }),
            e(dt, {}),
            e(Oe, {}),
            e(b, {
              get title() {
                return c("Hot Games");
              },
              href: "/tagname/hot",
              showController: !0,
            }),
            e(w, {
              get data() {
                return s("casino_hot");
              },
            }),
            Bt(),
          ];
        },
      });
    },
    get children() {
      return e(Dt, {});
    },
  });
}
const Y = {
  casino_hot: { sectionId: "casino_hot" },
  casino_slots: { sectionId: "casino_slots" },
  casino_live: { sectionId: "casino_live" },
  casino_bc: { sectionId: "casino_bc" },
  casino_new: { sectionId: "casino_new" },
  feature_buy_in: { sectionId: "casino_tag", tag: "Feature buy-in" },
  blackjack: { sectionId: "casino_tag", tag: "Blackjack" },
  megaways: { sectionId: "casino_tag", tag: "Megaways" },
  bc_exclusive: { sectionId: "casino_tag", tag: "BC Exclusive" },
  table_games: { sectionId: "casino_tag", tag: "Table games" },
  top_picks: { sectionId: "top_picks" },
  bingo: { sectionId: "casino_tag", tag: "Bingo" },
};
function Et() {
  const t = Object.keys(Y),
    s = Object.entries(Y),
    [r] = Ae(() => Pe(s.map((a) => a[1])), Ue("lgl-merged")),
    n = Ne(r);
  return (a) => n()?.[t.indexOf(a)];
}
export { Rt as default, Et as useMergedData };
