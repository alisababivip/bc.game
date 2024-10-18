import {
  c as l,
  e as h,
  s as c,
  t as d,
  b as $,
  i as m,
  m as G,
} from "./web-13cf6287.js";
import {
  K as U,
  B as D,
  c as M,
  p as R,
  P as A,
  s as C,
  E as F,
  e as u,
  i as P,
  D as T,
  L as N,
} from "./manifest-cc1f4445.js";
import {
  h as V,
  M as k,
  i as Z,
  E as j,
  S as O,
  j as q,
  F as Q,
  c as x,
  b as z,
} from "./solid-js-38561dfe.js";
import { b as E, l as B } from "./index-96ed660e.js";
import { T as L, t as v } from "./i18n-023baa0d.js";
import { h as H } from "./http-7cc13238.js";
import { C as K } from "./countdown-fd722a48.js";
import { A as Y } from "./router-3828f409.js";
import { b as J } from "./index-6d249af1.js";
import { g as X } from "./utils-55681fa2.js";
import { v as ee } from "./vip-c0abd707.js";
import { R as S, c as te } from "./createHasNewUserSpin-f5ad2420.js";
import { r as ae } from "./index-b54039ae.js";
function Fe(r) {
  return r && r.length ? r[0] : void 0;
}
var I = d("<img class=w-12>"),
  re = d('<img class="absolute w-12">');
const Pe = (r) =>
    l(V, {
      get children() {
        return [
          l(k, {
            get when() {
              return r.icon;
            },
            get children() {
              var e = I();
              return h(() => c(e, "src", r.icon)), e;
            },
          }),
          l(k, {
            get when() {
              return U.rewardTypes[r.rewardType].bgSmall;
            },
            get children() {
              var e = I();
              return (
                h(() => c(e, "src", U.rewardTypes[r.rewardType].bgSmall)), e
              );
            },
          }),
          l(k, {
            get when() {
              return E.bonusSpecial;
            },
            get children() {
              var e = re();
              return h(() => c(e, "src", E.bonusSpecial)), e;
            },
          }),
        ];
      },
    }),
  Ne = (r) => {
    const [e, t] = Z(r, ["class"]);
    return l(
      D,
      $(t, {
        size: "m",
        get class() {
          return M("w-full text-base font-extrabold", e.class);
        },
      })
    );
  };
var se = d("<span class=text-brand>5 BCL"),
  ne = d(
    '<div class="flex flex-col items-center justify-center"><img class=w-[14.5rem]><p class="my-3 text-center font-semibold text-secondary">'
  ),
  oe = d("<span class=text-primary>1st free lottery ticket!"),
  ie = d("<span class=text-brand>Bonus Collection."),
  le = d(
    '<div class="flex flex-col items-center justify-center text-lg font-extrabold text-primary"><img class=w-[14.5rem]><p></p><p class="flex items-center gap-x-2 text-brand"><img class=h-9> <span class=text-2xl>×5</span></p><div class="mt-3 flex flex-col items-center gap-y-2 rounded-xl bg-layer3 px-6 py-3 text-center text-sm font-normal text-secondary"><p class=""></p><p class=font-semibold>'
  ),
  ce = d(
    '<div class="my-3 flex h-10 min-w-15 items-center justify-between gap-x-4 bg-no-repeat px-4 py-1">'
  ),
  de = d('<div class="h-full w-[1px] bg-third">'),
  ge = d(
    '<svg viewBox="0 0 25 25"fill=none xmlns=http://www.w3.org/2000/svg><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=url(#paint0_radial_1_3728)></path><rect x=3.50024 y=3.35107 width=18 height=18 rx=9 fill=url(#paint1_radial_1_3728)></rect><defs><radialGradient id=paint0_radial_1_3728 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 7.43159) rotate(87.0552) scale(15.8315 14.7122)"><stop stop-color=#F6FFFD></stop><stop offset=0.725076 stop-color=#BEDDD3></stop><stop offset=1 stop-color=#98C3B9></stop></radialGradient><radialGradient id=paint1_radial_1_3728 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 11.5976) rotate(102.949) scale(10.008)"><stop stop-color=white></stop><stop offset=1 stop-color=white stop-opacity=0.2>'
  ),
  ue = d(
    '<svg viewBox="0 0 25 25"fill=none xmlns=http://www.w3.org/2000/svg><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=url(#paint0_radial_9_1422)></path><rect x=3.50024 y=3.35107 width=18 height=18 rx=9 fill=url(#paint1_radial_9_1422)></rect><defs><radialGradient id=paint0_radial_9_1422 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 7.43159) rotate(87.0552) scale(15.8315 14.7122)"><stop stop-color=#F6FFFD></stop><stop offset=0.725076 stop-color=#BEDDD3></stop><stop offset=1 stop-color=#98C3B9></stop></radialGradient><radialGradient id=paint1_radial_9_1422 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 11.5976) rotate(102.949) scale(10.008)"><stop stop-color=white></stop><stop offset=1 stop-color=white stop-opacity=0.2>'
  ),
  pe = d(
    '<svg viewBox="0 0 25 25"fill=none xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_1_3729)><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=#4A5354></path><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=url(#paint0_radial_1_3729)></path><path d="M3.50024 12.3511C3.50024 7.38051 7.52968 3.35107 12.5002 3.35107C17.4708 3.35107 21.5002 7.38051 21.5002 12.3511C21.5002 17.3216 17.4708 21.3511 12.5002 21.3511C7.52968 21.3511 3.50024 17.3216 3.50024 12.3511Z"fill=url(#paint1_radial_1_3729) fill-opacity=0.6></path></g><defs><radialGradient id=paint0_radial_1_3729 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 7.43159) rotate(87.0552) scale(15.8315 14.7122)"><stop stop-opacity=0.05></stop><stop offset=0.274924 stop-opacity=0.1></stop><stop offset=1 stop-opacity=0.2></stop></radialGradient><radialGradient id=paint1_radial_1_3729 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 12.3511) rotate(91.9777) scale(9.00536 9.18502)"><stop stop-color=white></stop><stop offset=1 stop-color=white stop-opacity=0.4></stop></radialGradient><clipPath id=clip0_1_3729><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=white>'
  ),
  me = d(
    '<svg viewBox="0 0 25 25"fill=none xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_9_1425)><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=white></path><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=url(#paint0_radial_9_1425)></path><path d="M3.50024 12.3511C3.50024 7.38051 7.52968 3.35107 12.5002 3.35107C17.4708 3.35107 21.5002 7.38051 21.5002 12.3511C21.5002 17.3216 17.4708 21.3511 12.5002 21.3511C7.52968 21.3511 3.50024 17.3216 3.50024 12.3511Z"fill=url(#paint1_radial_9_1425) fill-opacity=0.6></path></g><defs><radialGradient id=paint0_radial_9_1425 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 7.43159) rotate(87.0552) scale(15.8315 14.7122)"><stop stop-opacity=0.05></stop><stop offset=0.274924 stop-opacity=0.1></stop><stop offset=1 stop-opacity=0.2></stop></radialGradient><radialGradient id=paint1_radial_9_1425 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 12.3511) rotate(91.9777) scale(9.00536 9.18502)"><stop stop-color=white></stop><stop offset=1 stop-color=white stop-opacity=0.4></stop></radialGradient><clipPath id=clip0_9_1425><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=white>'
  ),
  he = d(
    '<svg viewBox="0 0 25 25"fill=none xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_1_3734)><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=url(#paint0_radial_1_3734)></path><rect x=3.50024 y=3.35107 width=18 height=18 rx=9 fill=url(#paint1_radial_1_3734)></rect></g><defs><radialGradient id=paint0_radial_1_3734 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(10.6851 8.22164) rotate(65.5211) scale(17.1119)"><stop stop-color=#24EE89></stop><stop offset=0.756458 stop-color=#148A4F></stop><stop offset=1 stop-color=#0D8B4C></stop></radialGradient><radialGradient id=paint1_radial_1_3734 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 10.098) rotate(101.546) scale(12.8609)"><stop stop-color=#88FD30></stop><stop offset=1 stop-color=#DCECA4 stop-opacity=0.01></stop></radialGradient><clipPath id=clip0_1_3734><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=white>'
  ),
  fe = d(
    '<svg viewBox="0 0 25 25"fill=none xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_9_1438)><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=url(#paint0_radial_9_1438)></path><rect x=3.50024 y=3.35107 width=18 height=18 rx=9 fill=url(#paint1_radial_9_1438)></rect></g><defs><radialGradient id=paint0_radial_9_1438 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(10.6851 8.22164) rotate(65.5211) scale(17.1119)"><stop stop-color=#24EE89></stop><stop offset=0.756458 stop-color=#148A4F></stop><stop offset=1 stop-color=#0D8B4C></stop></radialGradient><radialGradient id=paint1_radial_9_1438 cx=0 cy=0 r=1 gradientUnits=userSpaceOnUse gradientTransform="translate(12.5002 10.098) rotate(101.546) scale(12.8609)"><stop stop-color=#88FD30></stop><stop offset=1 stop-color=#DCECA4 stop-opacity=0.01></stop></radialGradient><clipPath id=clip0_9_1438><path d="M0.500244 12.3511C0.500244 5.72366 5.87283 0.351074 12.5002 0.351074C19.1277 0.351074 24.5002 5.72366 24.5002 12.3511C24.5002 18.9785 19.1277 24.3511 12.5002 24.3511C5.87283 24.3511 0.500244 18.9785 0.500244 12.3511Z"fill=white>'
  ),
  ye = d(
    '<div class=relative><div class="absolute inset-0 flex items-center justify-center"><span class="text-xs font-extrabold text-alw_dark">'
  );
const Ve = (r) => R.push(() => l(_e, { number: r })),
  we = (r) => (r instanceof Error ? "code" in r && "response" in r : !1),
  _e = (r) =>
    l(A, {
      type: "center",
      class: "!bg-layer2 bg-no-repeat bg-h-43",
      get style() {
        return {
          "background-image": C.darken
            ? "linear-gradient(156deg, rgba(46, 238, 136, 0.50) -133.32%, rgba(46, 238, 136, 0.00) 52.93%)"
            : "linear-gradient(156deg, #2EEE88 -133.32%, rgba(46, 238, 136, 0.00) 52.93%)",
        };
      },
      get children() {
        return l(j, {
          fallback: (e) =>
            l(O, {
              get when() {
                return we(e) && (e.code === 5002 || e.code === 5001);
              },
              get fallback() {
                return l(F, {
                  type: "empty",
                  get children() {
                    return String(e);
                  },
                });
              },
              get children() {
                var t = ne(),
                  a = t.firstChild,
                  s = a.nextSibling;
                return (
                  m(
                    s,
                    l(L, {
                      i18nKey:
                        "We have credited your account with 5 BCL. Please use this BCL to purchase your lottery tickets.",
                      get children() {
                        return [
                          "We have credited your account with",
                          " ",
                          se(),
                          ". Please use this BCL to purchase your lottery tickets.",
                        ];
                      },
                    })
                  ),
                  m(
                    t,
                    l(Y, {
                      href: "/lottery",
                      class: "w-full",
                      get children() {
                        return l(D, {
                          type: "brand",
                          class: "w-full",
                          onClick: () => {
                            R.pop();
                          },
                          get children() {
                            return v("Go Buy Lottery Tickets");
                          },
                        });
                      },
                    }),
                    null
                  ),
                  h(() => c(a, "src", B.lotteryBanner)),
                  t
                );
              },
            }),
          get children() {
            return l(be, r);
          },
        });
      },
    }),
  be = (r) => {
    const [e] = q(r.number, () => {
      const t = {
        expiredTime: 0,
        fromCurrencyAmount: String(r.number),
        fromCurrencyName: "BCL",
        lotteryList: [
          { numbers: [], jackpotBallNumber: 0, quantity: 1, pickType: 1 },
        ],
        toCurrencyName: "BCL",
      };
      return H.post("/lottery/five-plus-one/buy/", t);
    });
    return (() => {
      var t = le(),
        a = t.firstChild,
        s = a.nextSibling,
        n = s.nextSibling,
        i = n.firstChild,
        o = i.nextSibling,
        y = n.nextSibling,
        f = y.firstChild,
        w = f.nextSibling;
      return (
        m(s, () => v("YOU’VE RECEIVED")),
        m(n, () => v("FREE LOTTERY TICKETS"), o),
        m(
          f,
          l(L, {
            i18nKey:
              "Here is your 1st free lottery ticket! Claim 1 of the remaining 4 days. Progress is saved in Bonus Collection.",
            get children() {
              return [
                "Here is your",
                " ",
                oe(),
                " Claim 1 of the remaining 4 days. Progress is saved in",
                " ",
                ie(),
              ];
            },
          })
        ),
        m(
          y,
          l(ve, {
            get balls() {
              var g, _, b;
              return [
                ...((_ = (g = e()) == null ? void 0 : g.numbers) != null
                  ? _
                  : []),
                (b = e()) == null ? void 0 : b.jackpotBallNumber,
              ].filter(Boolean);
            },
          }),
          w
        ),
        m(w, () => v("Next Draw in"), null),
        m(
          w,
          l(K, {
            class: "ml-1 text-primary",
            get expiresInMS() {
              var g;
              return (g = e()) == null ? void 0 : g.expireTimeInMs;
            },
          }),
          null
        ),
        m(
          t,
          l(D, {
            onClick: () => R.pop(),
            class: "w-full",
            size: "l",
            type: "brand",
            get children() {
              return v("Got it");
            },
          }),
          null
        ),
        h(
          (g) => {
            var _ = B.lotteryBanner,
              b = B.lotteryTag;
            return (
              _ !== g.e && c(a, "src", (g.e = _)),
              b !== g.t && c(i, "src", (g.t = b)),
              g
            );
          },
          { e: void 0, t: void 0 }
        ),
        t
      );
    })();
  },
  ve = (r) =>
    (() => {
      var e = ce();
      return (
        e.style.setProperty("background-size", "100% 100%"),
        m(
          e,
          l(Q, {
            get each() {
              return r.balls;
            },
            children: (t, a) => {
              const s = x(() => a() === r.balls.length - 1);
              return [
                l(O, {
                  get when() {
                    return s();
                  },
                  get children() {
                    return de();
                  },
                }),
                l(Ce, {
                  get type() {
                    return G(() => !!s())()
                      ? "brand"
                      : a() % 2 === 0
                      ? "primary"
                      : "secondary";
                  },
                  ballNum: t,
                }),
              ];
            },
          })
        ),
        h((t) =>
          (t = `url(${
            C.darken ? B.jackpot_ball_banner_s : B.jackpot_ball_banner_s_w
          })`) != null
            ? e.style.setProperty("background-image", t)
            : e.style.removeProperty("background-image")
        ),
        e
      );
    })(),
  Ce = (r) => {
    const e = x(
      () =>
        ({
          primary: C.darken
            ? (() => {
                var t = ge();
                return (
                  h(
                    (a) => {
                      var s = 25 * u.remScale,
                        n = 25 * u.remScale;
                      return (
                        s !== a.e && c(t, "width", (a.e = s)),
                        n !== a.t && c(t, "height", (a.t = n)),
                        a
                      );
                    },
                    { e: void 0, t: void 0 }
                  ),
                  t
                );
              })()
            : (() => {
                var t = ue();
                return (
                  h(
                    (a) => {
                      var s = 25 * u.remScale,
                        n = 25 * u.remScale;
                      return (
                        s !== a.e && c(t, "width", (a.e = s)),
                        n !== a.t && c(t, "height", (a.t = n)),
                        a
                      );
                    },
                    { e: void 0, t: void 0 }
                  ),
                  t
                );
              })(),
          secondary: C.darken
            ? (() => {
                var t = pe();
                return (
                  h(
                    (a) => {
                      var s = 25 * u.remScale,
                        n = 25 * u.remScale;
                      return (
                        s !== a.e && c(t, "width", (a.e = s)),
                        n !== a.t && c(t, "height", (a.t = n)),
                        a
                      );
                    },
                    { e: void 0, t: void 0 }
                  ),
                  t
                );
              })()
            : (() => {
                var t = me();
                return (
                  h(
                    (a) => {
                      var s = 25 * u.remScale,
                        n = 25 * u.remScale;
                      return (
                        s !== a.e && c(t, "width", (a.e = s)),
                        n !== a.t && c(t, "height", (a.t = n)),
                        a
                      );
                    },
                    { e: void 0, t: void 0 }
                  ),
                  t
                );
              })(),
          brand: C.darken
            ? (() => {
                var t = he();
                return (
                  h(
                    (a) => {
                      var s = 25 * u.remScale,
                        n = 25 * u.remScale;
                      return (
                        s !== a.e && c(t, "width", (a.e = s)),
                        n !== a.t && c(t, "height", (a.t = n)),
                        a
                      );
                    },
                    { e: void 0, t: void 0 }
                  ),
                  t
                );
              })()
            : (() => {
                var t = fe();
                return (
                  h(
                    (a) => {
                      var s = 25 * u.remScale,
                        n = 25 * u.remScale;
                      return (
                        s !== a.e && c(t, "width", (a.e = s)),
                        n !== a.t && c(t, "height", (a.t = n)),
                        a
                      );
                    },
                    { e: void 0, t: void 0 }
                  ),
                  t
                );
              })(),
        }[r.type])
    );
    return (() => {
      var t = ye(),
        a = t.firstChild,
        s = a.firstChild;
      return m(t, e, a), m(s, () => r.ballNum), t;
    })();
  };
class Be {
  constructor(
    e = { shouldBadgeBeVisible: () => !0, getBadgeCountByType: (t) => t }
  ) {
    (this.config = e), (this.badges = {});
  }
  addBadge(e, t) {
    const a = this.config.shouldBadgeBeVisible(t),
      s = this.config.getBadgeCountByType(e, t);
    a && (this.badges[t] = { actualCount: e, badgeCount: s, badgeType: t });
  }
  getBadgeStatistics(e = () => !0) {
    return Object.values(this.badges)
      .filter(e)
      .reduce((t, a) => (t += a.badgeCount), 0);
  }
  badge(e) {
    return this.badges[e];
  }
  showBadge(e) {
    const t = this.badge(e);
    return t ? t.badgeCount > 0 : !1;
  }
}
const p = {
    aggregatedUncollected(r) {
      const [e, t, a] = r,
        s = (i) =>
          i.map((o) => ({
            createTime: o.createTime + "",
            description: o.content,
            icon: o.iconUrl || "",
            relatedId: o.rewardId + "",
            rewardId: o.rewardId + "",
            rewardType: o.rewardType,
            status: o.status === 0 ? "INIT" : "DONE",
            title: o.title,
            updateTime: o.createTime + "",
            userId: o.name,
            items: n(o.rewards),
          })),
        n = (i) =>
          i.map((o) => ({
            amount: new T(o.amount).toNumber(),
            amountRequireWagerTimes: 0,
            claimLogId: "",
            claimTime: "",
            currencyName: o.name,
            currencyPrice: 0,
            quantity: "",
            rewardItemId: "",
            rewardItemType: "",
            status: "",
            used: !1,
          }));
      return Object.freeze([...a, ...s(e.specialBonus.first)]);
    },
    aggregatedSpecialBonus(r) {
      return p
        .aggregatedUncollected(r)
        .filter((e) => e.rewardType !== "vip_give_bonus");
    },
    aggregatedRollData(r) {
      const [e, t] = r,
        a = () =>
          e.rollCompetition.second > 0
            ? S.rollAvailable
            : e.rollCompetition.first.currentTime > 0
            ? S.rollPending
            : S.rollUnavailable;
      return {
        actualRemaining: e.rollCompetition.first.rollTimes,
        totalClaimed: t.rollCompetitionBonus,
        rollStatus: {
          status: a(),
          timeForNextRoll: e.rollCompetition.first.currentTime + Date.now(),
        },
      };
    },
    aggregatedQuestData(r) {
      const [e] = r,
        t = e.quests;
      function a() {
        return !t || !t.second || t.second <= 0
          ? []
          : t.first.rewards.filter((o) => o.rewardId > 0);
      }
      const s = t.first.dailyTasks.filter((i) => i.doneValue >= i.totalValue),
        n = t.first.weeklyTasks.filter((i) => i.doneValue >= i.totalValue);
      return {
        dailyQuestsFinished: s,
        dailyQuests: t.first.dailyTasks,
        weeklyQuestsFinished: n,
        weeklyQuests: t.first.weeklyTasks,
        questRewards: a(),
        actualRemaining: a().length,
        newbieTaskExpireTime: e.quests.first.newbieTaskExpireTime,
      };
    },
    aggregatedLuckySpinData(r) {
      const [e] = r,
        t = e.spin.first.vipSpinTimes,
        a = e.spin.first.dailySpinTimes,
        s = e.spin.first.leftTimes,
        n = e.spin.first.dailyWager,
        i = e.spin.first.levelWager,
        o = t > 0;
      return {
        vipSpinRemaining: t,
        dailySpinRemaining: a,
        wagerAmount: n,
        wagerTarget: i,
        vipSpinReady: o,
        actualRemaining: s,
        dailyWagerExpiresTime: (function () {
          const f = new Date(X());
          return (
            f.setUTCHours(0, 0, 0, 0),
            f.setUTCDate(f.getUTCDate() + 1),
            f.getTime()
          );
        })(),
      };
    },
    aggregatedRakebackData(r) {
      const [e] = r,
        t = e.bonusUnlock.second <= 0;
      return {
        rakebackCurrency: e.bonusUnlock.first.currencyName,
        rakebackAmount: e.bonusUnlock.first.bonusAmount,
        actualRemaining: e.bonusUnlock.second,
        isRakebackLocked: t,
      };
    },
    aggregatedCashbackData() {},
    aggregatedVIPLevelupData(r) {
      const e = ee.level(P.vipLevel),
        a = p
          .aggregatedUncollected(r)
          .filter(
            (s) => s.rewardType === "vip_give_bonus" && s.status !== "DONE"
          );
      return { actualRemaining: a.length, vipLevelupBonus: a, vipInfo: e };
    },
    aggregatedRechargeData(r) {
      const [e] = r,
        t = e.recharge.first.tire.currentTire,
        a = e.recharge.first.intervalTime,
        s = t ? Math.round(t.vipRechargeRate * 100) : 0,
        n = new T(e.recharge.first.lastBetUsd)
          .todp(0, T.ROUND_FLOOR)
          .toNumber(),
        i = 1e3,
        o = "USDFIAT",
        y = e.recharge.first.rewards,
        f = e.recharge.second,
        w = e.recharge.first.nextReceiveTime;
      return {
        rechargeStatus: e.recharge.first.status,
        rechargeRewards: e.recharge.first.rewards,
        currentTire: t,
        frequency: a,
        rechargeRate: s,
        wageredAmount: n,
        wagerTarget: i,
        wagerCurrency: o,
        wagerRewards: y,
        actualRemaining: f,
        rechargeNextReceiveTime: w,
      };
    },
    aggregatedWeeklyBonusData(r) {
      var y;
      const [e] = r,
        t = e.weeklyBonus.first.currentWager,
        a = e.weeklyBonus.first.targetWager,
        s = "USDFIAT",
        n =
          (y = e.weeklyBonus.first.rewardResult) == null
            ? void 0
            : y.rewards[0],
        i = 22,
        o = e.weeklyBonus.first.expireTimeEpochSecond;
      return {
        wageredAmount: t,
        wagerTarget: a,
        wagerCurrency: s,
        theLastWeeklyBonus: n,
        weeklyBonusUnlockVipLevel: i,
        weeklyBonusExpiredTime: o,
        actualRemaining: e.weeklyBonus.second,
        rewardResult: e.weeklyBonus.first.rewardResult,
      };
    },
    aggregatedMonthlyBonusData(r) {
      var o;
      const [e] = r,
        t = e.monthlyBonus.first.currentWager,
        a = e.monthlyBonus.first.targetWager,
        s = "USDFIAT",
        n =
          (o = e.monthlyBonus.first.rewardResult) == null
            ? void 0
            : o.rewards[0],
        i = e.monthlyBonus.first.expireTimeEpochSecond;
      return {
        wageredAmount: t,
        wagerTarget: a,
        wagerCurrency: s,
        theLastMonthlyBonus: n,
        monthlyBonusExpiredTime: i,
        actualRemaining: e.monthlyBonus.second,
        rewardResult: e.monthlyBonus.first.rewardResult,
      };
    },
    aggregateSportWeeklyData(r) {
      var o;
      const [e] = r,
        t = e.sportsWeeklyBonus.first.currentWager,
        a = e.sportsWeeklyBonus.first.targetWager,
        s = "USDFIAT",
        n =
          (o = e.sportsWeeklyBonus.first.rewardResult) == null
            ? void 0
            : o.rewards[0],
        i = e.sportsWeeklyBonus.first.expireTimeEpochSecond;
      return {
        wageredAmount: t,
        wagerTarget: a,
        wagerCurrency: s,
        theLastSportsWeeklyBonus: n,
        sportsWeeklyBonusExpiredTime: i,
        actualRemaining: e.sportsWeeklyBonus.second,
        rewardResult: e.sportsWeeklyBonus.first.rewardResult,
      };
    },
    aggregateFreeMoneyData(r) {
      var t;
      const [e] = r;
      return { reward: (t = e.freeMoneyBonus) == null ? void 0 : t.first };
    },
  },
  [xe, Te] = N(z([]), { name: "viewed-deposit-history" }),
  ke = () => {
    const [r] = ae.rakebackBonusHistoryResource(() => ({
        page: 1,
        pageSize: 10,
      })),
      e = (s) => JSON.stringify(s);
    return {
      depositItems: x(() =>
        r().list && r().list.length > 0
          ? r().list.filter(
              (s) =>
                s.type === 2 &&
                Date.now() <= s.createTime + 24 * 60 * 60 * 1e3 &&
                xe().indexOf(e(s)) < 0
            )
          : []
      ),
      markAsViewed: (s) => Te((n) => [...n, e(s)]),
    };
  },
  Ze = (r) => {
    const [e] = J.bonusDashboardResource(),
      { depositItems: t } = ke();
    return x(() => {
      const a = new Be(r == null ? void 0 : r()),
        { hasSpin: s } = te(),
        n = p.aggregatedRollData(e()),
        i = p.aggregatedQuestData(e()),
        o = p.aggregatedLuckySpinData(e()),
        y = p.aggregatedRakebackData(e()),
        f = p.aggregatedVIPLevelupData(e()),
        w = p.aggregatedRechargeData(e()),
        g = p.aggregatedWeeklyBonusData(e()),
        _ = p.aggregatedMonthlyBonusData(e()),
        b = p.aggregateSportWeeklyData(e()),
        W = p.aggregatedSpecialBonus(e());
      return (
        t().length > 0 && a.addBadge(t().length, "rakebackDeposit"),
        a.addBadge(s() ? 1 : 0, "newUserSpin"),
        a.addBadge(n.actualRemaining, "roll"),
        a.addBadge(i.actualRemaining, "quests"),
        a.addBadge(o.actualRemaining, "luckySpin"),
        a.addBadge(y.actualRemaining, "rakeback"),
        a.addBadge(f.actualRemaining, "levelup"),
        a.addBadge(w.actualRemaining, "recharge"),
        a.addBadge(g.actualRemaining, "weeklyBonus"),
        a.addBadge(_.actualRemaining, "monthlyBonus"),
        a.addBadge(b.actualRemaining, "sportsBonus"),
        a.addBadge(W.length, "specialBonus"),
        a
      );
    });
  };
export { Ne as C, Pe as S, p as a, ke as b, Ze as c, Fe as h, Ve as p };
