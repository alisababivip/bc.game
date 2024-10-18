var se = Object.defineProperty,
  ie = Object.defineProperties;
var le = Object.getOwnPropertyDescriptors;
var Z = Object.getOwnPropertySymbols;
var oe = Object.prototype.hasOwnProperty,
  ce = Object.prototype.propertyIsEnumerable;
var Y = (e, r, t) =>
    r in e
      ? se(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  D = (e, r) => {
    for (var t in r || (r = {})) oe.call(r, t) && Y(e, t, r[t]);
    if (Z) for (var t of Z(r)) ce.call(r, t) && Y(e, t, r[t]);
    return e;
  },
  I = (e, r) => ie(e, le(r));
import {
  a1 as ue,
  t as m,
  H as B,
  h as b,
  K as H,
  f as L,
  ak as F,
  i as s,
  c as f,
  av as me,
  s as $,
  A as de,
  S as ge,
  I as fe,
  a as Q,
  w as X,
  z as pe,
  m as N,
  e as O,
  n as U,
  a5 as he,
  x as j,
  u as ye,
  j as we,
  o as R,
  l as z,
  D as Ce,
  p as q,
  q as be,
  aN as xe,
  v as G,
  aA as ve,
  B as J,
} from "./manifest-a234c8a0.js";
import { S as Le } from "./Symbol-f22f521e.js";
import { R as Ne, a as Se, b as K } from "./radio-group-dc0b5370.js";
import { t as y } from "./i18n-611811a6.js";
import { c as Me } from "./index-eff0ad24.js";
import { u as Ae } from "./use-coin-format-bfa33df5.js";
import { o as Be } from "./game-a49e1f5b.js";
import { M as Ee } from "./MoreLessBtn-6b8ac376.js";
import { M as Te } from "./Message-f1b40bc8.js";
import { u as Ve } from "./deduction-99b6c8dd.js";
import { u as _e } from "./currency-a0e3a368.js";
import { z as ke } from "./amount-af49bfc0.js";
var De = m(
  '<svg fill=currentColor viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32><path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16v-.007C29.492 8.542 23.452 2.504 16 2.5m0 24.684c-6.181 0-11.191-5.01-11.191-11.191S9.819 4.802 16 4.802s11.191 5.01 11.191 11.191c-.008 6.178-5.014 11.183-11.19 11.191z"></path> <path d="m20.41 14.454-5.27-3.044a1.782 1.782 0 0 0-2.676 1.539v6.093a1.782 1.782 0 0 0 2.685 1.537l-.008.005 5.27-3.044a1.776 1.776 0 0 0 .008-3.081z"></path> '
);
const ct = (e) => {
  return (r = De()), ue(r, e, !0, !0), r;
  var r;
};
var Ie = m(
    '<div class="flex flex-col justify-center items-left gap-2"><div class="sm:flex sm:flex-row sm:items-center sm:justify-center"><span class="text-primary text-sm font-extrabold"></span></div><span class="text-[10px] text-secondary sm:text-xs sm:mb-[1.69rem] sm:mt-[1.19rem]"><span class="text-brand mx-1">'
  ),
  He = m('<div class="sticky top-0 h-10 z-100 mb-4 md:mb-2">'),
  P = m('<span class="text-xs text-primary whitespace-nowrap">&nbsp;(<!>)'),
  Oe = m(
    '<div class="flex items-center justify-start p-1 text-primary whitespace-nowrap relative w-full sm:h-10"><span class="text-sm text-primary font-extrabold"></span><div class="bg-layer6 size-6 flex items-center justify-center rounded-md absolute right-1">'
  ),
  je = m('<img class="w-5 mr-2">'),
  Re = m("<span class=font-extrabold>"),
  ze = m('<div class="flex-1 text-right mx-2 ellipsis text-xs">');
function ut(e = !0, r = []) {
  const [t, n] = L("REAL_MONEY"),
    w = B(() => {
      const d = b.setting.localeCurrencyName;
      if (!d || ["USDT", "BTC", "ETH"].includes(d)) return "USD";
      const o = H.getCurrency(d);
      return o ? o.aliasCurrencyName : d.replace("FIAT", "");
    }),
    { coinFormat: V } = Ae(),
    _ = B(() => {
      const d = Object.values(F).filter((o) => o.display);
      return Be(
        d,
        [(o) => H.amount2usd(o.amount, o.currencyName).toNumber(), "sort"],
        ["desc", "desc"]
      );
    }),
    E = B(() =>
      w() === "USD" ? "USD" : r.find((d) => d === `${w()}FIAT`) ? w() : "USD"
    );
  return {
    jsx: () => {
      return (
        (M = Ie()),
        (x = M.firstChild),
        (A = x.firstChild),
        (C = x.nextSibling),
        (v = C.firstChild),
        s(A, () => y("Play with balance in")),
        s(
          x,
          f(me, {
            class: "p-0 sm:flex-1 sm:ml-2 w-full bg-layer5 mt-2 md:mt-0",
            get value() {
              return F[b.setting.currencyName];
            },
            get options() {
              return _();
            },
            onChange: (i) => $("setting", "currencyName", i.currencyName),
            layerRender: (i) => {
              return e
                ? [
                    ((l = He()),
                    s(
                      l,
                      f(Ne, {
                        onChange: n,
                        get value() {
                          return t();
                        },
                        class: "rounded-xl",
                        get children() {
                          return f(Se, {
                            variant: "ring",
                            get class() {
                              return Me(
                                "w-full justify-between md:-mt-2",
                                de.darken ? "bg-layer4" : "bg-layer5"
                              );
                            },
                            get children() {
                              return [
                                f(K, {
                                  get value() {
                                    return "REAL_MONEY";
                                  },
                                  variant: "ring",
                                  class: "w-1/2",
                                  get children() {
                                    return y("Real Money");
                                  },
                                }),
                                f(K, {
                                  get value() {
                                    return "BONUS_MONEY";
                                  },
                                  variant: "ring",
                                  class: "w-1/2",
                                  get children() {
                                    return y("Bonus Money");
                                  },
                                }),
                              ];
                            },
                          });
                        },
                      })
                    ),
                    l),
                    i,
                  ]
                : i;
              var l;
            },
            labelRender: (i) => {
              return (
                (l = Oe()),
                (p = l.firstChild),
                (g = p.nextSibling),
                s(
                  l,
                  f(Le, {
                    get token() {
                      return { symbol: i().currencyName, decimal: 2, icon: "" };
                    },
                  }),
                  p
                ),
                s(p, () => H.getAlias(i().currencyName)),
                s(
                  l,
                  f(ge, {
                    get when() {
                      return t() === "REAL_MONEY";
                    },
                    get fallback() {
                      return (
                        (a = P()),
                        (c = a.firstChild.nextSibling).nextSibling,
                        s(a, () => y("Bonus Money"), c),
                        a
                      );
                      var a, c;
                    },
                    get children() {
                      var a = P(),
                        c = a.firstChild.nextSibling;
                      return c.nextSibling, s(a, () => y("Real Money"), c), a;
                    },
                  }),
                  g
                ),
                s(
                  g,
                  f(fe, {
                    name: "Arrow",
                    class: "size-4 -rotate-90 fill-primary",
                  })
                ),
                l
              );
              var l, p, g;
            },
            children: (i) => {
              return [
                ((g = je()),
                Q(() => X(g, "src", pe.coinIcon(i().currencyName))),
                g),
                ((p = Re()), s(p, () => i().aliasCurrencyName), p),
                ((l = ze()),
                s(l, () =>
                  V(
                    t() === "REAL_MONEY" ? i().amount : i().bonusAmount,
                    i().currencyName
                  )
                ),
                l),
              ];
              var l, p, g;
            },
          }),
          null
        ),
        s(
          C,
          ((d = N(() => !O.mobile)),
          () => d() && y("The selected currency will be displayed in")),
          v
        ),
        s(
          C,
          ((o = N(() => !!O.mobile)),
          () => o() && y("Currency will be displayed in")),
          v
        ),
        s(v, E),
        s(
          C,
          ((S = N(() => !O.mobile)),
          () =>
            S() &&
            y(
              "and if you change currency while playing, the game will refresh and restart."
            )),
          null
        ),
        M
      );
      var d, o, S, M, x, A, C, v;
    },
    bonus: () => t() === "BONUS_MONEY",
  };
}
var Ue = m('<div id=game_wrapper class="w-full h-full">');
const We = (e) => {
  let r;
  return (
    U(() => {
      const t = {
        target_element: "game_wrapper",
        launch_options: JSON.parse(e.extSW),
      };
      r
        ? r.launch(t, () => {}, j)
        : he
            .loadScript("https://casino.cur.a8r.games/public/sg.js", "sg")
            .then((n) => {
              n.launch(t, () => {}, j), (r = n);
            })
            .catch(j);
    }),
    Ue()
  );
};
var Ze = m(
    '<div class="w-full relative overflow-hidden after:content-[&quot;&quot;] after:block after:w-full after:pt-[50%] game-iframe-wrap">'
  ),
  Ye = m('<div class="absolute h-full w-full left-0 top-0">'),
  Fe = m(
    '<iframe class="absolute left-0 top-0 w-full h-full border-none game-iframe"allow=autoplay allowfullscreen>'
  );
const qe = {},
  Ge = {
    position: "fixed",
    width: "2px",
    height: "1px",
    left: "0",
    top: "0",
    opacity: "0",
  },
  mt = (e) => {
    const [r, t] = L(!1),
      [n] = L(new Te()),
      { resolveDeduction: w, createDeduction: V } = Ve(),
      { activeToken: _ } = _e(),
      E = ye(),
      [d, o] = L(0),
      [S, M] = L(null),
      x = we();
    let A;
    const C = B(() => (e.extSW !== "undefined" && e.extSW ? e.extSW : "")),
      v = B(() => (r() ? qe : Ge));
    U(() => {
      const a = new IntersectionObserver(([c]) => {
        t(c.isIntersecting);
      });
      a.observe(A), R(() => a.disconnect());
    });
    const i = (a) => {
      const c = (function (u) {
        const {
          betAmount: h,
          betId: k,
          betTime: T,
          currencyName: ee,
          nonce: te,
          odds: re,
          winAmount: W,
          gameValue: ne,
          distributeId: ae,
        } = u;
        return I(D({}, u), {
          userId: b.userId,
          nickName: b.name,
          betAmount: h,
          betId: k,
          betTime: T,
          currencyName: ee,
          nonce: te,
          odds: re,
          winAmount: W,
          profitAmount: W - h,
          gameValue: ne,
          distributeId: ae,
        });
      })(a);
      e.addLog && e.addLog(c);
    };
    z(() => {
      n().on("connected", () =>
        n().emit("currencyChange", b.setting.currencyName)
      ),
        n().on("inited", () => {}),
        n().on("login", () => E("#/login")),
        n().on("wallet", () => E("/wallet/deposit")),
        n().on(
          "create_deduction",
          ({ amount: a, currencyName: c, timeout: u }) => {
            V({
              currency: I(D({ amount: new Ce(a) }, _()), { symbol: c }),
              timeout: u,
            });
          }
        ),
        n().on("resolve_deduction", (a) => w(a)),
        n().on("reject_deduction", (a) => w(a)),
        n().on("currencyChange", (a) => {
          $("setting", "currencyName", a);
        }),
        n().on("betSuccess", i),
        R(() => {
          setTimeout(() => {
            n().emit("currencyChange", b.setting.currencyName);
          }, 0),
            n().destroy();
        });
    }),
      z(() => {
        d() && S() && (n().target = S().contentWindow);
      }),
      U(() => {
        e.originGame || q.emit("hideAmount", !0),
          o(Date.now()),
          setTimeout(() => {
            o(Date.now());
          }, 1e3);
      }),
      R(() => {
        q.emit("hideAmount", !1);
      }),
      z(() => {
        b.login ||
          be(() => {
            x() && o(Date.now());
          });
      });
    const l = xe(() => e.bg, "w=900");
    return (
      (g = Ze()),
      G((a) => (A = a), g),
      s(
        g,
        ((p = N(() => !e.src)),
        () => {
          return p()
            ? ((c = N(() => !!e.bg)),
              () => {
                return (
                  c() &&
                  ((u = Ye()),
                  s(
                    u,
                    f(Ee.img, {
                      get src() {
                        return l();
                      },
                      class: "blur-[1px] w-full h-auto animate-scale-opacity",
                    })
                  ),
                  u)
                );
                var u;
              })
            : ((a = N(() => !!C())),
              () => {
                return a()
                  ? f(We, {
                      get extSW() {
                        return C();
                      },
                    })
                  : ((u = Fe()),
                    G((h) => M(h), u),
                    Q(
                      (h) => {
                        var k = v(),
                          T = e.src;
                        return (
                          (h.e = ve(u, k, h.e)),
                          T !== h.t && X(u, "src", (h.t = T)),
                          h
                        );
                      },
                      { e: void 0, t: void 0 }
                    ),
                    u);
                var u;
              });
          var a, c;
        })
      ),
      g
    );
    var p, g;
  };
var Je = m(
    '<span class="inline-block size-6"><svg xmlns=http://www.w3.org/2000/svg width=100% height=100% viewBox="0 0 28 28"fill=noncurrentColore><path d="M22.8053 12.2254C23.1491 12.2254 23.4284 12.5039 23.4284 12.8484L23.4284 20.5198C23.4284 20.8636 23.1499 21.1428 22.8053 21.1428L5.24844 21.1426C4.90465 21.1426 4.62541 20.8641 4.62541 20.5196L4.62541 12.8362C4.62541 12.4925 4.9039 12.2132 5.24844 12.2132L22.8053 12.2134V12.2254ZM22.8053 4.64691L5.24844 4.64673C3.70888 4.65048 2.46207 5.89729 2.45907 7.4361L2.45907 20.5181C2.46282 22.0576 3.70963 23.3045 5.24844 23.3075L22.8053 23.3076C24.3449 23.3039 25.5917 22.0571 25.5947 20.5183L25.5947 7.43628C25.591 5.89672 24.3441 4.64991 22.8053 4.64691Z"fill=#B3BEC1>'
  ),
  Ke = m(
    '<span class="inline-block size-6"><svg xmlns=http://www.w3.org/2000/svg width=100% height=100% viewBox="0 0 28 28"fill=currentColor><path d="M5.47056 15.9385C6.07513 15.9385 6.57201 16.3995 6.62873 16.9897L6.63448 17.1024V19.4288C6.63448 20.4563 7.43364 21.2978 8.44533 21.3632L8.57242 21.3675H10.8988C11.5407 21.3675 12.062 21.8881 12.062 22.5307C12.062 23.1345 11.6003 23.6314 11.0101 23.6881L10.8981 23.6939H8.57171C6.27403 23.6939 4.39998 21.8758 4.31023 19.6004L4.30664 19.4295V17.1031C4.30664 16.4605 4.82721 15.9399 5.46984 15.9399L5.47056 15.9385ZM22.5301 15.9385C23.134 15.9385 23.6316 16.3995 23.6883 16.9897L23.694 17.1024V19.4288C23.694 21.7265 21.876 23.6005 19.6006 23.6903L19.429 23.6939H17.1026C16.4599 23.6939 15.9401 23.1726 15.9401 22.5307C15.9401 21.9261 16.401 21.4285 16.9913 21.3725L17.1033 21.3675H19.4297C20.4579 21.3675 21.2987 20.5669 21.3647 19.5566L21.3683 19.4288V17.1024C21.3683 16.4598 21.8889 15.9392 22.5315 15.9392L22.5301 15.9385ZM15.4037 10.791C16.4247 10.791 17.2526 11.6189 17.2526 12.6399V15.6326C17.2526 16.6537 16.4247 17.4808 15.4037 17.4808H12.411C11.39 17.4808 10.5628 16.6529 10.5628 15.6326V12.6399C10.5628 11.6189 11.39 10.791 12.411 10.791H15.4037ZM19.4282 4.3065C21.7259 4.3065 23.6 6.12454 23.6897 8.39996L23.6933 8.57157V10.898C23.6933 11.5406 23.172 12.0619 22.5301 12.0619C21.9255 12.0619 21.4287 11.6002 21.3726 11.01L21.3669 10.8973V8.57085C21.3669 7.54336 20.5663 6.70183 19.556 6.63721L19.4282 6.6329H17.1018C16.4592 6.6329 15.9386 6.11162 15.9386 5.47042C15.9386 4.86513 16.3996 4.36825 16.9898 4.31225L17.1026 4.3065H19.4282ZM10.8988 4.3065C11.5407 4.3065 12.0613 4.82779 12.0613 5.47042C12.0613 6.07428 11.5996 6.57187 11.0094 6.62788L10.8981 6.63362H8.57171C7.54421 6.63362 6.70269 7.4335 6.63735 8.44448L6.63376 8.57157V10.898C6.63376 11.5406 6.11247 12.0619 5.47056 12.0619C4.86598 12.0619 4.36839 11.6002 4.31238 11.01L4.30664 10.8973V8.57085C4.30664 6.27317 6.12468 4.39985 8.4001 4.30938L8.57171 4.30579L10.8988 4.3065Z"fill=#B3BEC1>'
  );
const dt = () => {
  const [e, r] = L(!1);
  return [
    f(J, {
      get title() {
        return y("Movie Mode");
      },
      class: "transition-transform duration-300 p-0 text-secondary",
      onClick: () => {
        (() => {
          const t = document.getElementsByClassName("game-style-iframe")[0];
          if (t) {
            let n = 0;
            e() ||
              (n =
                (document.getElementsByTagName("body")[0].clientWidth -
                  240 -
                  t.clientWidth -
                  20) /
                2),
              (t.style.marginLeft = -n + "px"),
              (t.style.marginRight = -n + "px"),
              r(!e());
          }
        })();
      },
      get children() {
        return Je();
      },
    }),
    f(J, {
      get title() {
        return y("Full Screen");
      },
      class: "transition-transform duration-300 p-0 text-secondary",
      onClick: () => {
        (() => {
          const t = document.getElementsByTagName("iframe");
          for (let n = 0; n < t.length; n++) {
            const w = t[n];
            if (w.classList.contains("game-iframe")) {
              ke(w);
              break;
            }
          }
        })();
      },
      get children() {
        return Ke();
      },
    }),
  ];
};
export { dt as G, ct as S, mt as a, ut as c };
