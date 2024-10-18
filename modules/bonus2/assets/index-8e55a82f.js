import {
  c as l,
  i as e,
  e as V,
  s as C,
  t as m,
  a as w,
  m as le,
  d as re,
  j as se,
  b as ie,
} from "./web-13cf6287.js";
import {
  u as q,
  A as F,
  c as y,
  l as ae,
  B as X,
  i as u,
  N as i,
  h as ne,
} from "./manifest-cc1f4445.js";
import { S as M, c as P, e as oe, E } from "./solid-js-38561dfe.js";
import { E as T } from "./error-fallback-24494a7d.js";
import { t as f } from "./i18n-023baa0d.js";
import { I as L } from "./index-e10d67ae.js";
import { v as k } from "./vip-c0abd707.js";
import { v as J, V as ce } from "./index-1eaf53a0.js";
import { v as de } from "./index-f53ef53b.js";
import { v as ue } from "./index-4c839f7e.js";
import { S as ve } from "./skeleton-c8e80175.js";
import "./baseService-e38bce40.js";
import "./_baseGetTag-c2e287b9.js";
import "./_baseFor-3fee30d6.js";
import "./_MapCache-1fb5cc44.js";
import "./isArray-79a0be9c.js";
import "./popup-common-rules-ba048024.js";
import "./recharge-tier-card-4577d22c.js";
import "./currency-format-e71c6b76.js";
import "./http-7cc13238.js";
import "./table-e9d87985.js";
var pe = m(
    '<div class="flex flex-col items-center justify-center gap-y-5 pt-6"><img class=w-40><span class="text-center text-xs font-semibold">'
  ),
  me = m(
    '<span class="inline-flex items-center gap-x-1"><span class="inline-block rounded-sm bg-[rgba(255,_152,_32,_0.30)] px-1 font-extrabold text-warning text-xxs">NFT</span><span class="text-sm font-semibold text-secondary">'
  ),
  ge = m(
    '<div class="flex items-center gap-x-3"><div><img class="h-full w-full rounded-full"><div class="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-white_alpha10 p-[0.2rem]"><div class="h-full w-full rounded-full bg-brand"></div></div></div><div class="flex flex-col gap-y-1 leading-none"><span class="inline-flex items-center gap-x-1 text-base font-extrabold text-primary"></span><span class="font-semibold text-secondary">-<!> '
  ),
  xe = m('<div class="flex gap-x-2 text-base">'),
  fe = m('<div class="flex flex-col gap-y-5 pb-3 pt-4">');
const he = () => {
    const [r] = ue.vipSupportResource();
    return l(M, {
      get when() {
        return r().hostCard;
      },
      get fallback() {
        return l(be, {});
      },
      children: (n) =>
        l(_e, {
          get host() {
            return n();
          },
        }),
    });
  },
  be = () =>
    (() => {
      var r = pe(),
        n = r.firstChild,
        s = n.nextSibling;
      return (
        e(s, () =>
          f(
            "Uncover the VIP host personalized support with wagering and depositing consistently and actively!"
          )
        ),
        V(() => C(n, "src", de.hostUnlock)),
        r
      );
    })(),
  _e = (r) => {
    const n = q();
    function s(p) {
      const $ = new Date(p);
      let t = $.getHours();
      const a = $.getMinutes(),
        o = t >= 12 ? "PM" : "AM";
      (t = t % 12), (t = t || 12);
      const v = a < 10 ? "0" + a : a;
      return `${t}:${v} ${o}`;
    }
    const h = () => {
        switch (k.level(u.vipLevel).vipTypeNum) {
          case i.VipLevelStatus.None:
            return "bg-gradient-avatar_none";
          case i.VipLevelStatus.Bronze:
            return "bg-gradient-avatar_bronze";
          case i.VipLevelStatus.Silver:
            return "bg-gradient-avatar_silver";
          case i.VipLevelStatus.Gold:
            return "bg-gradient-avatar_gold";
          case i.VipLevelStatus.Platinum_I:
          case i.VipLevelStatus.Platinum_II:
            return "bg-gradient-avatar_platinum";
          case i.VipLevelStatus.Diamond_I:
          case i.VipLevelStatus.Diamond_II:
          case i.VipLevelStatus.Diamond_III:
            return "bg-gradient-avatar_diamond";
          default:
            return "";
        }
      },
      B = () =>
        (() => {
          var p = ge(),
            $ = p.firstChild,
            t = $.firstChild,
            a = $.nextSibling,
            o = a.firstChild,
            v = o.nextSibling,
            c = v.firstChild,
            x = c.nextSibling;
          return (
            x.nextSibling,
            e(o, () => r.host.name, null),
            e(
              o,
              l(L, { class: "text-brand", size: 20, name: "hostWeChat" }),
              null
            ),
            e(v, () => s(r.host.workingHoursStart), c),
            e(v, () => s(r.host.workingHoursEnd), x),
            e(v, () => f("Online"), null),
            e(
              a,
              l(M, {
                get when() {
                  return r.host.nftAvatarLink;
                },
                get children() {
                  return l(F, {
                    get href() {
                      return r.host.nftAvatarLink;
                    },
                    target: "_blank",
                    get children() {
                      var d = me(),
                        b = d.firstChild,
                        _ = b.nextSibling;
                      return (
                        e(_, () => r.host.nftLabelName),
                        e(
                          d,
                          l(L, {
                            name: "singleSmallArrow",
                            class: "rotate-180 text-secondary",
                            size: 12,
                          }),
                          null
                        ),
                        d
                      );
                    },
                  });
                },
              }),
              null
            ),
            V(
              (d) => {
                var b = y(
                    "relative flex h-16 w-16 items-center justify-center rounded-full bg-layer5 p-1",
                    h()
                  ),
                  _ = ae.avatar(r.host.userId);
                return (
                  b !== d.e && w($, (d.e = b)),
                  _ !== d.t && C(t, "src", (d.t = _)),
                  d
                );
              },
              { e: void 0, t: void 0 }
            ),
            p
          );
        })(),
      z = () =>
        (() => {
          var p = xe();
          return (
            e(
              p,
              l(X, {
                onClick: () => n(`/chat/${r.host.userId}`),
                size: "m",
                class:
                  "w-full rounded-lg border-[1.6px] border-solid border-third font-semibold text-secondary",
                get children() {
                  return [
                    l(L, { name: "vipHostChatNow", class: "mr-1", size: 20 }),
                    le(() => f("Chat Now")),
                  ];
                },
              })
            ),
            p
          );
        })();
    return (() => {
      var p = fe();
      return e(p, B, null), e(p, z, null), p;
    })();
  };
var $e = m(
    '<div class="flex flex-col gap-y-3 px-6 pt-6"><div class="flex items-center gap-x-2"><span class="text-2xl font-extrabold uppercase text-primary"> </span></div><div class="flex flex-col gap-y-2"><div class="text-xs font-semibold"><span class=text-primary> XP</span> <span class=text-secondary>/ <!> XP</span></div><div><div><div class="absolute right-0 top-0 w-6 -translate-y-2 translate-x-2"><svg xmlns=http://www.w3.org/2000/svg class=size-6 viewBox="0 0 24 24"><circle opacity=0.25 cx=12 cy=12 r=12></circle><circle opacity=0.4 cx=12 cy=12 r=7></circle><circle cx=12 cy=12 r=4></circle></svg></div></div></div><div class="text-xs font-semibold text-secondary">XP <!> <span class=uppercase> '
  ),
  ye = m(
    '<div class="vip-card relative z-0 mx-4 mt-2 h-[10rem] rounded-xl px-4 pb-3 shadow-sm backdrop-blur-md"><div class="absolute right-0 top-3 flex h-5 w-[4.5rem] items-center justify-center font-extrabold text-alw_white"><span class=text-xxs>'
  ),
  Se = m(
    '<div class="flex items-center justify-center gap-x-1 text-brand"><p>'
  ),
  Ce = m(
    '<div class="relative mx-4 mt-2 flex cursor-pointer flex-col gap-y-2 overflow-hidden rounded-xl bg-layer5 px-6 py-4 text-center text-xs font-semibold text-secondary"><div><p></p><p>'
  ),
  we = m(
    '<div><div class="absolute -top-6 right-0 z-0 size-[8.5rem]"><img></div><img class="absolute -z-10">'
  ),
  Le = m(
    '<svg viewBox="0 0 70 21"fill=currentColor><path fill-rule=evenodd clip-rule=evenodd d="M2.53239 0.5H9V20.5H2.53239C0.977797 20.5 0.0175716 18.8041 0.817401 17.471L4.69131 11.0145C4.88132 10.6978 4.88132 10.3022 4.69131 9.9855L0.8174 3.52899C0.0175705 2.19594 0.977797 0.5 2.53239 0.5ZM9.00001 0.5H70V20.5H9.00001V10.5V0.5Z">'
  );
const Ve = () => {
    const r = P(() => {
        var t;
        return (t = J.getConfigByLevel(u.vipLevel)) == null
          ? void 0
          : t.hostCard;
      }),
      n = P(() => k.level(u.vipLevel)),
      s = P(() => k.level(u.vipLevel + 1)),
      h = q(),
      B = () => {
        switch (n().vipTypeNum) {
          case i.VipLevelStatus.None:
            return "#6E96C6";
          case i.VipLevelStatus.Bronze:
            return "#A25F3F";
          case i.VipLevelStatus.Silver:
            return "#FDFDFD";
          case i.VipLevelStatus.Gold:
            return "#FBB321";
          case i.VipLevelStatus.Platinum_I:
          case i.VipLevelStatus.Platinum_II:
            return "#B183EA";
          case i.VipLevelStatus.Diamond_I:
          case i.VipLevelStatus.Diamond_II:
          case i.VipLevelStatus.Diamond_III:
            return "#E865A8";
        }
      },
      z = () =>
        (() => {
          var t = $e(),
            a = t.firstChild,
            o = a.firstChild,
            v = o.firstChild,
            c = a.nextSibling,
            x = c.firstChild,
            d = x.firstChild,
            b = d.firstChild,
            _ = d.nextSibling,
            S = _.nextSibling,
            K = S.firstChild,
            j = K.nextSibling;
          j.nextSibling;
          var H = x.nextSibling,
            I = H.firstChild,
            Q = I.firstChild,
            Y = Q.firstChild,
            N = H.nextSibling,
            U = N.firstChild,
            W = U.nextSibling,
            ee = W.nextSibling,
            A = ee.nextSibling,
            te = A.firstChild;
          return (
            e(o, () => n().vipType, v),
            e(o, () => n().vipLevel, null),
            e(
              a,
              l(M, {
                get when() {
                  return u.vipLevel > 2;
                },
                get children() {
                  return l(i.LevelName, {
                    class:
                      "rounded-md px-2 text-sm font-extrabold uppercase text-alw_white",
                    get level() {
                      return u.vipLevel;
                    },
                    get children() {
                      var g;
                      return (g = n()) == null ? void 0 : g.vipTypeNumName.base;
                    },
                  });
                },
              }),
              null
            ),
            e(d, () => u.currXP, b),
            e(S, () => u.levelEndXP, j),
            e(N, () => u.levelEndXP - u.currXP, U),
            e(N, () => f("until"), W),
            e(A, () => s().vipType, te),
            e(A, () => s().vipLevel, null),
            V(
              (g) => {
                var R;
                var G = y("h-2 w-[14.5rem] rounded-xl bg-black_alpha20"),
                  O = y(
                    "relative h-full rounded-xl",
                    (R = r()) == null ? void 0 : R.styles.progressBar
                  ),
                  D = `${
                    (Math.min(u.currXP, u.levelEndXP) /
                      Math.max(1, u.levelEndXP)) *
                    100
                  }%`,
                  Z = B();
                return (
                  G !== g.e && w(H, (g.e = G)),
                  O !== g.t && w(I, (g.t = O)),
                  D !== g.a &&
                    ((g.a = D) != null
                      ? I.style.setProperty("width", D)
                      : I.style.removeProperty("width")),
                  Z !== g.o && C(Y, "fill", (g.o = Z)),
                  g
                );
              },
              { e: void 0, t: void 0, a: void 0, o: void 0 }
            ),
            t
          );
        })(),
      p = () =>
        l(oe, {
          get fallback() {
            return l(ve, { class: "mx-4 mt-4 h-[10rem] w-auto rounded-xl" });
          },
          get children() {
            var t = ye(),
              a = t.firstChild,
              o = a.firstChild;
            return (
              e(o, () => f("VIP Host")),
              e(
                a,
                l(Ie, {
                  get class() {
                    var v;
                    return y(
                      "absolute right-0 top-0 -z-10 w-[4.5rem]",
                      (v = r()) == null ? void 0 : v.styles.hostTag
                    );
                  },
                }),
                null
              ),
              e(t, l(he, {}), null),
              t
            );
          },
        }),
      $ = () =>
        (() => {
          var t = Ce(),
            a = t.firstChild,
            o = a.firstChild,
            v = o.nextSibling;
          return (
            (t.$$click = () => h("/vip-level")),
            e(o, () => f("Wager $1.00 = 1 XP; Sports Wager $1.00 = 2 XP")),
            e(v, () =>
              f("All wagers are converted to USD at the current rate")
            ),
            e(
              t,
              l(F, {
                href: "/vip-level",
                get children() {
                  var c = Se(),
                    x = c.firstChild;
                  return (
                    e(x, () => f("View level up details")),
                    e(
                      c,
                      l(X, {
                        class: "size-4 p-0",
                        get children() {
                          return l(L, {
                            size: 12,
                            class: "rotate-180 fill-current",
                            name: "singleSmallArrow",
                          });
                        },
                      }),
                      null
                    ),
                    c
                  );
                },
              }),
              null
            ),
            t
          );
        })();
    return (() => {
      var t = we(),
        a = t.firstChild,
        o = a.firstChild,
        v = a.nextSibling;
      return (
        e(t, z, null),
        e(t, p, null),
        e(t, $, null),
        V(
          (c) => {
            var _, S;
            var x = y(
                "relative z-0 flex flex-col rounded-xl bg-layer4 pb-4 shadow-sm",
                (_ = r()) == null ? void 0 : _.styles.container
              ),
              d = i.vipBadgeIcon(u.vipLevel),
              b = (S = r()) == null ? void 0 : S.assets.bannerBackgroundImg;
            return (
              x !== c.e && w(t, (c.e = x)),
              d !== c.t && C(o, "src", (c.t = d)),
              b !== c.a && C(v, "src", (c.a = b)),
              c
            );
          },
          { e: void 0, t: void 0, a: void 0 }
        ),
        t
      );
    })();
  },
  Ie = (r) =>
    (() => {
      var n = Le();
      return se(n, ie(r, { xmlns: "http://www.w3.org/2000/svg" }), !0, !0), n;
    })();
re(["click"]);
var Pe = m("<section>"),
  ke = m(
    '<div class="flex items-center justify-center gap-x-2"><span class=text-primary>'
  );
const Qe = () => {
  const r = P(() => {
      var s;
      return (s = J.getConfigByLevel(u.vipLevel)) == null ? void 0 : s.vipClub;
    }),
    n = () => k.level(u.vipLevel);
  return l(ne, {
    get class() {
      return y("dialog-transparent-title");
    },
    get title() {
      return (() => {
        var s = ke(),
          h = s.firstChild;
        return (
          e(
            s,
            l(L, { size: 20, name: "vipCrown", class: "text-[#FFE924]" }),
            h
          ),
          e(h, () => f("VIP Club")),
          s
        );
      })();
    },
    get children() {
      return l(E, {
        fallback: T,
        get children() {
          var s = Pe();
          return (
            e(
              s,
              l(E, {
                fallback: T,
                get children() {
                  return l(Ve, {});
                },
              }),
              null
            ),
            e(
              s,
              l(E, {
                fallback: T,
                get children() {
                  return l(ce, {
                    get defaultActiveIndex() {
                      return Math.max(0, n().vipTypeNum - 1);
                    },
                  });
                },
              }),
              null
            ),
            e(
              s,
              l(F, {
                href: "/vip-detail",
                get children() {
                  return l(X, {
                    size: "l",
                    class:
                      "fix-light-hover w-full rounded-lg !bg-layer4 text-base font-semibold text-brand",
                    get children() {
                      return f(
                        "Learn more about __ENV_HOST__'s VIP system",
                        {}
                      );
                    },
                  });
                },
              }),
              null
            ),
            V(() => {
              var h;
              return w(
                s,
                y(
                  (h = r()) == null ? void 0 : h.styles.container,
                  "vip-root flex flex-col gap-y-3 bg-no-repeat px-4 pb-10 pt-14 text-primary bg-h-100"
                )
              );
            }),
            s
          );
        },
      });
    },
  });
};
export { Qe as default };
