const __vite__fileDeps = [
    "assets/ThrowAndHighRolles-DLvg88_G.js",
    "assets/index-Cp-3lvCI.js",
    "assets/index-C2mwTJQ9.css",
    "assets/index-CY1NqIcz.js",
    "assets/_basePropertyOf-BhSQSS-6.js",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  P as H,
  x as f,
  c as i,
  t as p,
  ay as B,
  h as y,
  aB as F,
  X as N,
  _ as j,
  y as K,
  d as L,
  aC as J,
  a as k,
  b as v,
  o as D,
  F as A,
  ah as V,
  ak as T,
  i as _,
  l as $,
  s as C,
  q as Z,
  D as M,
  m as E,
  C as w,
  aD as G,
  B as P,
  f as x,
  Q as R,
  aE as q,
  a1 as Q,
  a7 as X,
  aF as Y,
  aG as ee,
  aH as te,
  aI as ne,
  aJ as se,
  u as re,
  ao as ae,
  j as le,
  aK as oe,
  aL as ie,
  G as U,
  a9 as ce,
  e as z,
  W as ge,
  r as ue,
  aM as me,
  g as de,
  al as be,
  aN as he,
  aO as fe,
} from "./index-Cp-3lvCI.js";
import { S as pe } from "./index-CPRFYrHB.js";
const W = N(() =>
  j(
    () => import("./ThrowAndHighRolles-DLvg88_G.js"),
    __vite__mapDeps([0, 1, 2, 3, 4])
  )
);
function ht() {
  const { isSpHost: e } = H.getHostType(f.host);
  return [
    i(pe, {
      get title() {
        return p("Latest bet & Race");
      },
    }),
    i(B, {
      class: "ml-auto mt-2 max-w-100 sm:!-mt-10",
      get children() {
        return [
          i(B.TabItem, {
            get title() {
              return p("Latest Bet");
            },
            class: "mt-3 min-h-96",
            get children() {
              return i(W, { type: "lastBet" });
            },
          }),
          i(B.TabItem, {
            get title() {
              return p("High Roller");
            },
            class: "mt-3 min-h-96",
            get children() {
              return i(W, { type: "highRoller" });
            },
          }),
          i(y, {
            when: !e,
            get children() {
              return i(B.TabItem, {
                get title() {
                  return p("Wager Contest");
                },
                class: "mt-3 min-h-96 bg-transparent",
                get children() {
                  return i(F, { class: "min-h-96" });
                },
              });
            },
          }),
        ];
      },
    }),
  ];
}
const _e = K(
  function (r, t) {
    return new Promise((o) => {
      const l = t.getContext("2d"),
        n = new Image();
      (n.src = r),
        n.setAttribute("crossOrigin", ""),
        (n.onload = () => {
          try {
            (t.width = n.width),
              (t.height = n.height),
              l.drawImage(n, 0, 0, n.width, n.height);
            const c = l.getImageData(0, 0, t.width, t.height).data;
            let g = 0,
              b = 0,
              h = 0;
            const d = c.length / 4;
            for (let s = 0; s < c.length; s += 4)
              (g += c[s]), (b += c[s + 1]), (h += c[s + 2]);
            (g = Math.floor(g / d)),
              (b = Math.floor(b / d)),
              (h = Math.floor(h / d)),
              o(`rgb(${g}, ${b}, ${h})`);
          } catch {
            o("rgb(0,0,0)");
          }
        });
    });
  },
  (e) => e
);
function xe(e) {
  const r = document.createElement("canvas");
  return Promise.all(e.map((t) => (t ? _e(t, r) : "rgb(0,0,0)")));
}
function ve(e, r, t) {
  v(() => {
    const o = e();
    if (o) {
      const l = O(t());
      o.classList.add("banner-bg"),
        o.appendChild(l),
        v(() => {
          o.style.animationDelay = `-${r()}s`;
        }),
        D(() => o.removeChild(l));
    }
  });
}
function we(e) {
  const r = L(() => e.children),
    t = J(r),
    [o, l] = k([]);
  return (
    v(() => {
      xe(t.toArray().map((n) => n.getElementsByTagName("img")[0]?.src)).then(
        (n) => {
          $e(n, o()) || l(n);
        }
      );
    }),
    v(() => {
      const n = e.parent;
      if (n) {
        const u = O(o());
        n.classList.add("banner-bg"),
          n.appendChild(u),
          v(() => {
            n.style.animationDelay = `-${e.progress}s`;
          }),
          D(() => n.removeChild(u));
      }
    }),
    r
  );
}
function $e(e, r) {
  if (e.length !== r.length) return !1;
  for (let t = 0; t < e.length; t++) if (e[t] !== r[t]) return !1;
  return !0;
}
function O(e) {
  const r = document.createElement("style"),
    o = `
    .banner-bg {
      animation: bgTransition 1s forwards paused;
      background-image: linear-gradient(to bottom, transparent, rgb(var(--layer2)) 70%);
    }
    @keyframes bgTransition {
      ${e
        .map(
          (l, n) =>
            `${Math.round(
              (100 * n) / (e.length - 1)
            )}% {background-color: ${l};}`
        )
        .join("")}
    }
  `;
  return (r.innerHTML = o), r;
}
const ye = "/assets/icon-g-DjQwb4.png",
  Ce = "/assets/logo-BjYZztWT.png",
  ke = "/assets/logo_w-DVOxoSHE.png",
  Be = "/assets/bg-BlZBL8HD.svg",
  De = "/assets/bg_w-DdW8hRgr.svg",
  Ee = "/assets/bg_m-DZarrOoR.svg",
  Se = "/assets/bg_m_w-BQK3pSf0.svg",
  Te = "/assets/banner_m-D4CQHT_6.png",
  Re = "/assets/banner-DU8EqkJ_.png",
  Ie = "/assets/banner_m-DYww_mVp.png",
  We = "/assets/banner-CEvxTEWK.png",
  He = "/assets/banner_m-DY9ZbmTu.png",
  Le = "/assets/banner-C3uJ_gzg.png",
  Ae = "/assets/banner_m-DaZcXJnO.png",
  Me = "/assets/banner-hdC-Y92k.png",
  Pe = "/assets/banner_m-CRvR4J2R.png",
  Ue = "/assets/banner-B3sMeUyO.png",
  ze = "/assets/banner_m-Co6NetFU.png",
  Oe = "/assets/banner-DCWqOOaK.png",
  Fe = "/assets/banner_m-lWaFKJCs.png",
  Ne = "/assets/banner-Cdm6oWZ7.png";
var je = x('<img class="absolute right-1.5 top-2 w-8">'),
  Ke = x("<div>Sign Up & Get"),
  Je = x('<span class="text-xl font-semibold sm:mt-1 sm:text-2xl">UP TO'),
  Ve = x("<span>__amount__"),
  Ze = x(
    '<div class="relative mx-4 overflow-hidden rounded-xl bg-layer4 aspect-[1.7] bg-cover bg-repeat-x sm:mx-0 sm:aspect-[4.6]"><img class="absolute right-0 top-0 h-full"><img class="absolute top-0 hidden left-[1.5%] h-[96%] sm:block"><div class="absolute top-0 flex h-full flex-col py-4 left-3 origin-top sm:left-[14%] sm:top-[8%] sm:h-auto sm:items-center sm:py-0 sm:text-center"><p class="text-2xl font-extrabold text-primary sm:text-3xl"></p><div class="rounded-xl text-lg font-semibold mt-3 p-0 sm:mt-4 sm:bg-[#B0FFD833] sm:px-8 sm:py-3 sm:backdrop-blur-sm dark:sm:bg-black_alpha20">'
  ),
  Ge = x(
    '<img class="absolute rounded-lg right-[2%] top-[50%] w-[5.3%] translate-y-[-50%]">'
  );
function qe() {
  return f.mobile ? (w.darken ? Ee : Se) : w.darken ? Be : De;
}
function S() {
  const {
    isBrHost: e,
    isBzHost: r,
    isSpHost: t,
    isKenyaHost: o,
    isRuHosts: l,
    isNgHost: n,
    isBrAuditHost: u,
  } = H.getHostType(f.host);
  return e
    ? { banner: f.mobile ? Te : Re, icon: "" }
    : u || r || t
    ? { banner: f.mobile ? Ie : We, icon: "" }
    : o || n
    ? { banner: f.mobile ? Ae : Me, icon: "" }
    : l
    ? { banner: f.mobile ? Fe : Ne, icon: "" }
    : w.lang === "id"
    ? { banner: f.mobile ? He : Le, icon: "" }
    : w.lang === "ja"
    ? { banner: f.mobile ? Pe : Ue, icon: "" }
    : { banner: f.mobile ? ze : Oe, icon: ye };
}
function Qe(e) {
  const r = A();
  let t, o;
  return (
    ve(
      () => (f.mobile && w.darken ? e.el : void 0),
      () => 0,
      () => ["#1E4B35", "#1E4B35"]
    ),
    v(() => {
      const l = V(
          (u) => {
            for (let c of u)
              o &&
                !f.mobile &&
                (o.style.transform = `scale(${Math.min(
                  c.contentRect.width / 1168,
                  1
                )})`);
          },
          300,
          { leading: !0, trailing: !0 }
        ),
        n = new ResizeObserver(l);
      n.observe(t),
        D(() => {
          n.disconnect();
        });
    }),
    v(() => {
      t &&
        (t.style.backgroundImage = `linear-gradient(${
          f.mobile ? "160deg" : "to right"
        }, ${
          w.darken ? "#2E7051" : "#08AC5B"
        }, transparent 40%), url(${qe()})`);
    }),
    (() => {
      var l = Ze(),
        n = l.firstChild,
        u = n.nextSibling,
        c = u.nextSibling,
        g = c.firstChild,
        b = g.nextSibling,
        h = t;
      typeof h == "function" ? T(h, l) : (t = l),
        _(
          l,
          i(y, {
            get when() {
              return f.mobile;
            },
            get fallback() {
              return (() => {
                var s = Ge();
                return $(() => C(s, "src", S().icon)), s;
              })();
            },
            get children() {
              var s = je();
              return $(() => C(s, "src", S().icon)), s;
            },
          }),
          u
        );
      var d = o;
      return (
        typeof d == "function" ? T(d, c) : (o = c),
        _(g, () => p("Stay Untamed")),
        _(
          b,
          i(G, {
            i18nKey: "trans.home.loginbonus",
            get amount() {
              return Z.printCurrency(new M(2e4));
            },
            get children() {
              return [
                Ke(),
                Je(),
                (() => {
                  var s = Ve();
                  return (
                    $(() =>
                      E(
                        s,
                        `text-xl font-extrabold ml-1 bg-gradient-to-r sm:text-2xl ${
                          w.darken
                            ? "from-[#9FE871] to-[#24EE89] text-transparent"
                            : "text-[#2CD97D]"
                        } bg-clip-text`
                      )
                    ),
                    s
                  );
                })(),
              ];
            },
          })
        ),
        _(
          c,
          i(P, {
            onClick: () => r("/login/regist"),
            class: "h-10 mt-auto w-28 sm:mt-5 sm:w-60",
            type: "brand",
            get children() {
              return p("Join Now");
            },
          }),
          null
        ),
        $(
          (s) => {
            var a = S().banner,
              m = w.darken ? Ce : ke;
            return (
              a !== s.e && C(n, "src", (s.e = a)),
              m !== s.t && C(u, "src", (s.t = m)),
              s
            );
          },
          { e: void 0, t: void 0 }
        ),
        l
      );
    })()
  );
}
const Xe = "/assets/dark-CWciTCAR.png",
  Ye = "/assets/light-CznGNKbo.png";
var et = x(
  '<div><div class=relative><img><div class="absolute left-0 top-0 flex h-full w-full flex-col px-3 py-6 text-[white]"><div class="text-xl font-extrabold"><span class="ml-1 text-brand"></span></div><div class="mt-1 text-xs text-alw_white">'
);
function tt(e) {
  const [r] = q,
    t = A(),
    o = () => {
      const n = [
        p("First Deposit Bonus"),
        p("Second Deposit Bonus"),
        p("Third Deposit Bonus"),
        p("Fourth Deposit Bonus"),
      ];
      return r().firstExpiredTime > 0
        ? p("Limited Time Deposit Bonus")
        : n[r().rechargeValidNum || 0];
    },
    l = R(() => {
      let n = "-",
        u = [];
      if (r().bonusItems?.length > 0) {
        const c = r().bonusItems[r().bonusItems.length - 1];
        c &&
          ((n = "+" + new M(c.bonusRatio).mul(100).toString() + "%"),
          (u = c.weeks ? c.weeks : []));
      }
      return { bonusRatio: n, weeks: u };
    });
  return i(y, {
    get when() {
      return R(() => r().rechargeValidNum < 4)() && r().bonusItems?.length > 0;
    },
    get children() {
      var n = et(),
        u = n.firstChild,
        c = u.firstChild,
        g = c.nextSibling,
        b = g.firstChild,
        h = b.firstChild,
        d = b.nextSibling;
      return (
        _(
          b,
          i(y, {
            get when() {
              return l().weeks.length;
            },
            get fallback() {
              return o();
            },
            get children() {
              return p("Deposit Bonus");
            },
          }),
          h
        ),
        _(h, () => l().bonusRatio),
        _(d, () => `${p("Sign Up")} -> Deposit -> Get Bonus`),
        _(
          g,
          i(P, {
            type: "brand",
            class: "w-24 text-sm mt-auto",
            onClick: (s) => {
              s.preventDefault(), s.stopPropagation(), t("/deposit");
            },
            get children() {
              return p("Deposit");
            },
          }),
          null
        ),
        $(
          (s) => {
            var a = e.class,
              m = w.darken ? Xe : Ye;
            return (
              a !== s.e && E(n, (s.e = a)),
              m !== s.t && C(c, "src", (s.t = m)),
              s
            );
          },
          { e: void 0, t: void 0 }
        ),
        n
      );
    },
  });
}
var nt = x("<div>"),
  st = x("<img>"),
  rt = x('<div class="px-3 sm:!px-0">'),
  at = x(
    '<div class="mt-2 flex w-full justify-center h-1.5"><ul class="flex gap-x-1.5">'
  ),
  lt = x(
    '<span class="block h-full w-full rounded-full bg-brand will-change-transform">'
  ),
  ot = x("<li>");
const it = function (r) {
    const [t, o] = k();
    return (() => {
      var l = nt();
      return (
        T(o, l),
        _(
          l,
          i(y, {
            get when() {
              return Q.login;
            },
            get fallback() {
              return i(Qe, {
                get el() {
                  return t();
                },
              });
            },
            get children() {
              return i(gt, {
                get el() {
                  return t();
                },
              });
            },
          }),
          null
        ),
        _(l, () => r.children, null),
        $(() => E(l, z("relative -mx-4 -mt-18 pt-18 sm:mx-0 sm:mt-0 sm:pt-0"))),
        l
      );
    })();
  },
  ct = (e) => {
    const r = be(() => e.src, "w=480");
    return (() => {
      var t = st();
      return (
        he(
          t,
          fe(e, {
            get src() {
              return r();
            },
          }),
          !1,
          !1
        ),
        t
      );
    })();
  };
function gt(e) {
  const [r, t] = X({
      scrollWidth: 0,
      clientWidth: 0,
      scrollLeft: 0,
      progress: 0,
      index: 0,
    }),
    o = Y(() => e.el),
    l = ee((a) => te(a)),
    n = R(
      (a) => (l() ? Math.min(Math.floor((o.width || 340) / 340), 3) : a),
      Math.min(Math.floor((o.width || 340) / 340), 3)
    ),
    [u, c] = ne(k(), { name: "banner" });
  v(async () => {
    const a = await mt();
    c(a);
  });
  let g;
  const b = L(() => [
      i(ge, {
        get children() {
          return i(tt, { class: "px-3 sm:!px-0" });
        },
      }),
      i(U, {
        get each() {
          return u();
        },
        children: (a, m) =>
          a &&
          a.linkUrl &&
          (() => {
            var I = rt();
            return (
              _(
                I,
                i(ue, {
                  get href() {
                    return a.linkUrl;
                  },
                  get target() {
                    return a.linkUrl.startsWith("http") ? "_blank" : void 0;
                  },
                  class: "size-full overflow-hidden rounded-xl text-5xl center",
                  get children() {
                    return i(ct, {
                      class: "size-full",
                      get src() {
                        return a.mobileBannerUrl;
                      },
                    });
                  },
                })
              ),
              I
            );
          })(),
      }),
    ]),
    [h, d] = k(0);
  v(() => {
    g.track.details?.abs !== h() && g.moveToIdx(h());
  });
  const s = () => b.toArray().length;
  return (
    v(() => {
      h() >= s() && d(0);
    }),
    [
      i(se, {
        class: "h-44 sm:h-auto",
        auto: 0,
        ref(a) {
          var m = g;
          typeof m == "function" ? m(a) : (g = a);
        },
        get options() {
          return {
            loop: !0,
            slides: { spacing: f.mobile ? 0 : 16, perView: n() },
            created(a) {
              setTimeout(() => {
                t({
                  scrollWidth: a.container.scrollWidth,
                  clientWidth: a.container.clientWidth,
                });
              }, 32);
            },
            detailsChanged(a) {
              const m = a.track.details;
              m &&
                t({
                  scrollLeft:
                    m.progress *
                    (a.container.scrollWidth - a.container.clientWidth),
                  progress: m.progress,
                });
            },
            slideChanged(a) {
              const m = a.track.details.abs % a.slides.length;
              d(m);
            },
          };
        },
        get children() {
          return i(y, {
            get when() {
              return f.mobile && w.darken;
            },
            get fallback() {
              return b();
            },
            get children() {
              return i(we, {
                get parent() {
                  return e.el;
                },
                get progress() {
                  return r.progress;
                },
                get children() {
                  return b();
                },
              });
            },
          });
        },
      }),
      i(ut, {
        get index() {
          return h();
        },
        get dots() {
          return s();
        },
        onChange: d,
      }),
    ]
  );
}
const ut = (e) => {
    const r = re(),
      t = ae(() => (e.index < 0 ? e.index + e.dots : e.index)),
      o = (g) => () => {
        e.onChange(g);
      },
      [l, n] = k(0),
      u = { x: 0 },
      c = le.to(u, {
        x: 1,
        duration: 3,
        onUpdate() {
          n(u.x);
        },
        onComplete() {
          e.onChange((g) => (g + 1) % e.dots);
        },
        ease: "none",
      });
    return (
      v((g) => (e.index !== g && c.restart(), e.index)),
      v(() => {
        r() ? c.resume() : c.pause();
      }),
      D(() => c.kill()),
      (() => {
        var g = at(),
          b = g.firstChild;
        return (
          _(
            b,
            i(U, {
              get each() {
                return Array(e.dots).fill(null);
              },
              children: (h, d) =>
                (() => {
                  var s = ot();
                  return (
                    oe(s, "click", o(d()), !0),
                    s.style.setProperty("transition-timing-function", "ease"),
                    _(
                      s,
                      i(ie, {
                        get when() {
                          return t(d());
                        },
                        get children() {
                          var a = lt();
                          return (
                            a.style.setProperty(
                              "transform-origin",
                              "center left"
                            ),
                            $((m) =>
                              (m = `translateX(${
                                t(d()) ? `${(l() - 1) * 100}%` : 0
                              })`) != null
                                ? a.style.setProperty("transform", m)
                                : a.style.removeProperty("transform")
                            ),
                            a
                          );
                        },
                      })
                    ),
                    $(() =>
                      E(
                        s,
                        z(
                          t(d()) ? "w-11" : "w-1.5",
                          "cursor-pointer overflow-hidden rounded-full bg-layer4 transition-all h-1.5 duration-500"
                        )
                      )
                    ),
                    s
                  );
                })(),
            })
          ),
          g
        );
      })()
    );
  },
  ft = it;
async function mt() {
  const { areaCode: e } = await me();
  return (await de().get(`/home/main/banner/?areaCode=${e}`)).filter(
    (t) => !t.isBg
  );
}
ce(["click"]);
export { ft as B, ht as R };
