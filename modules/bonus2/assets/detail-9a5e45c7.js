var H = (c, m, s) =>
  new Promise((t, a) => {
    var o = ($) => {
        try {
          f(s.next($));
        } catch (S) {
          a(S);
        }
      },
      x = ($) => {
        try {
          f(s.throw($));
        } catch (S) {
          a(S);
        }
      },
      f = ($) => ($.done ? t($.value) : Promise.resolve($.value).then(o, x));
    f((s = s.apply(c, m)).next());
  });
import {
  c as y,
  i as n,
  m as I,
  e as P,
  s as K,
  d as Q,
  t as v,
} from "./web-13cf6287.js";
import {
  D as z,
  V as Z,
  u as ee,
  a as J,
  i as j,
  h as te,
  e as re,
  I as ne,
  B as le,
  X as ie,
} from "./manifest-cc1f4445.js";
import { t as u } from "./i18n-023baa0d.js";
import { u as se } from "./router-3828f409.js";
import {
  b as V,
  d as q,
  c as A,
  a as ae,
  S as M,
} from "./solid-js-38561dfe.js";
import { I as oe } from "./imgX-b51457ba.js";
import { u as R } from "./unescape-c0b81984.js";
import "./toString-968993ce.js";
import "./_baseGetTag-c2e287b9.js";
import "./_arrayMap-2bcec0e7.js";
import "./isArray-79a0be9c.js";
import "./isSymbol-269a4c68.js";
var X;
((c) => {
  (c.getOpt = function (s) {
    return s.map((t) => t.label);
  }),
    (c.getLabel = function (s, t) {
      var a;
      return (a = s.find((o) => o.value === t)) != null ? a : s[0];
    }),
    (c.getVal = function (s, t) {
      var a;
      return (a = s.find((o) => o.value === t)) != null ? a : s[0];
    });
})(X || (X = {}));
function ce(c, m, s) {
  const a = (
    typeof s == "number" ? new z(m).toFixed(s, z.ROUND_DOWN) : m.toString()
  )
    .toString()
    .split(".");
  return c === "INRFIAT"
    ? ((a[0] = de(a[0]).toString()), a.join("."))
    : ((a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), a.join("."));
}
function de(c) {
  var m = parseFloat(String(c));
  return isFinite(m) ? me(m) : c;
}
function me(c) {
  var m, s;
  c < 0 ? ((m = -1 * c), (s = !0)) : ((m = c), (s = !1));
  var t = String(m).split("").reverse(),
    a = t.indexOf(".") + 1,
    o,
    x = [];
  for (o = 0; o < a; o++) x.push(t[o]);
  var f = 0;
  for (o = a; o < t.length; o++)
    x.push(t[o]),
      f++,
      (f === 3 || f === 5 || f === 7) && o < t.length - 1 && x.push(","),
      f === 7 && (f = 0);
  return s && x.push("-"), x.reverse().join("");
}
var ue = v(
    '<div class="center mb-4 inline-flex rounded-lg py-1 text-sm leading-none text-secondary"><div class="center mr-3 h-8 w-8 rounded-md bg-layer4"></div><span class="text-xl font-extrabold text-primary">'
  ),
  fe = v(
    '<div class="relative sm:flex sm:justify-center"><div class="relative w-full"><div class="center absolute bottom-0 right-0 rounded-tl-xl bg-layer1/80 px-2 py-1.5 text-primary sm:px-4 sm:py-2.5"><span class="mr-1 text-sm max-sm:leading-5 sm:text-2xl">:</span><span class="text-base font-extrabold max-sm:leading-5 sm:text-3xl">d:<!>h:<!>m:<!>s'
  ),
  pe = v('<div class="">📅 '),
  ge = v(
    '<div class="mb-5 mt-5 flex justify-between rounded-lg bg-layer5 p-2.5 sm:max-w-96"><div class="text-xl font-extrabold"></div><div class=text-right><div class="text-3xl font-extrabold text-warning_brighter"></div><div class="text-sm font-semibold text-tertiary">'
  ),
  ve = v(
    '<div class="mx-auto max-w-[900px] sm:pb-6"><div class="rounded-3xl bg-layer3 max-sm:mt-3 sm:bg-layer4 sm:pb-6"><div class=p-3><div class=""><div class="mt-4 text-left text-base font-extrabold text-primary"></div></div><div class=""><div>'
  ),
  xe = v('<div class="my-2 font-extrabold">'),
  he = v(
    '<div class=event-detail><div class="promotion-richStyle mb-4 text-sm leading-normal text-secondary">'
  ),
  $e = v(
    '<div class="promotion-richStyle mb-4 text-sm leading-normal text-secondary"><div>'
  ),
  be = v("<div class=operate>"),
  _e = v(
    '<div class=mt-5><div class="text-left text-sm text-primary"></div><div class="flex flex-wrap justify-center">'
  ),
  ye = v(
    '<div class="mt-5 max-w-[20%] flex-shrink-0 flex-grow-0 basis-1/5 cursor-pointer px-1.5"><div class=align-middle><img class="block w-full"alt=""></div><div class="ellipsis px-2.5 py-3.5 text-xs text-primary">'
  );
const Ce = (c) => ie().get(`home/main/event/code/${c}`),
  Pe = () => {
    const c = Z(),
      m = se(),
      s = m.pathname.split("/")[m.pathname.split("/").length - 1],
      [t, a] = V(null);
    q(() =>
      H(void 0, null, function* () {
        if (c()) {
          const l = yield Ce(s);
          a(l);
        }
      })
    );
    const o = ee(),
      x = A(() => {
        var l;
        return new z(((l = t()) == null ? void 0 : l.totalPrize) || 0);
      }),
      f = A(() => {
        var l;
        return ((l = t()) == null ? void 0 : l.fiatType) || "USDFIAT";
      }),
      $ = A(() => J.printCurrency(x(), f())),
      S = A(() => J.getCurrencySymbol(f()));
    j.setting.enableLocaleCurrency && (j.setting.localeCurrencyName, f());
    const W = (l) => {
        var p;
        return l && /http/.test((p = t()) == null ? void 0 : p.btnOneLink);
      },
      [O, E] = V({ days: 0, hours: 0, minutes: 0, seconds: 0 }),
      Y = () => {
        var p;
        const l =
          ((p = t()) == null ? void 0 : p.liveEndTime) - new Date().getTime();
        l > 0
          ? E({
              days: Math.floor(l / (1e3 * 60 * 60 * 24)),
              hours: Math.floor((l / (1e3 * 60 * 60)) % 24),
              minutes: Math.floor((l / 1e3 / 60) % 60),
              seconds: Math.floor((l / 1e3) % 60),
            })
          : E({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      };
    q(() => {
      const l = setInterval(Y, 1e3);
      ae(() => clearInterval(l));
    });
    const U = A(() => {
      var r, e;
      if (!((r = t()) != null && r.liveEndTime)) return "";
      const l = new Date((e = t()) == null ? void 0 : e.liveEndTime),
        p = l.getDate(),
        T = l.getMonth(),
        C = l.getFullYear(),
        N = [
          u("January"),
          u("February"),
          u("March"),
          u("April"),
          u("May"),
          u("June"),
          u("July"),
          u("August"),
          u("September"),
          u("October"),
          u("November"),
          u("December"),
        ],
        b = ["st", "nd", "rd", "th"];
      let w = "";
      return (
        p < 4 ? (w = p + b[p - 1]) : (w = p + b[3]), `${w} of ${N[T]} ${C}`
      );
    });
    return y(te, {
      get title() {
        var l;
        return (l = t()) == null ? void 0 : l.title;
      },
      get children() {
        var l = ve(),
          p = l.firstChild,
          T = p.firstChild,
          C = T.firstChild,
          N = C.firstChild,
          b = C.nextSibling,
          w = b.firstChild;
        return (
          n(
            l,
            y(M, {
              get when() {
                return !re.mobile;
              },
              get children() {
                var r = ue(),
                  e = r.firstChild,
                  i = e.nextSibling;
                return (
                  (e.$$click = () => {
                    o("/promotions/promotion");
                  }),
                  n(
                    e,
                    y(ne, {
                      class: "w-5 cursor-pointer text-secondary",
                      name: "Arrow",
                    })
                  ),
                  n(i, () => u("Promotion")),
                  r
                );
              },
            }),
            p
          ),
          n(
            p,
            y(M, {
              get when() {
                var r;
                return (r = t()) == null ? void 0 : r.eventBgImg.length;
              },
              get children() {
                var r = fe(),
                  e = r.firstChild,
                  i = e.firstChild,
                  d = i.firstChild,
                  h = d.firstChild,
                  _ = d.nextSibling,
                  g = _.firstChild,
                  F = g.nextSibling,
                  D = F.nextSibling,
                  L = D.nextSibling,
                  B = L.nextSibling,
                  k = B.nextSibling;
                return (
                  k.nextSibling,
                  n(
                    e,
                    y(oe, {
                      class: "w-full rounded-md",
                      get src() {
                        var G;
                        return (G = t()) == null ? void 0 : G.eventBgImg;
                      },
                      width: 800,
                      alt: "",
                    }),
                    i
                  ),
                  n(d, () => u("Time Left"), h),
                  n(_, () => O().days, g),
                  n(_, () => O().hours, F),
                  n(_, () => O().minutes, L),
                  n(_, () => O().seconds, k),
                  r
                );
              },
            }),
            T
          ),
          n(N, () => {
            var r;
            return (r = t()) == null ? void 0 : r.title;
          }),
          n(
            C,
            (() => {
              var r = I(() => {
                var e;
                return !!((e = t()) != null && e.subTitle);
              });
              return () =>
                r() &&
                (() => {
                  var e = xe();
                  return (
                    n(e, () => {
                      var i;
                      return (i = t()) == null ? void 0 : i.subTitle;
                    }),
                    e
                  );
                })();
            })(),
            null
          ),
          n(
            C,
            y(M, {
              get when() {
                return U();
              },
              get children() {
                var r = pe();
                return r.firstChild, n(r, U, null), r;
              },
            }),
            null
          ),
          n(
            T,
            y(M, {
              get when() {
                var r;
                return (r = t()) == null ? void 0 : r.totalPrize;
              },
              get children() {
                var r = ge(),
                  e = r.firstChild,
                  i = e.nextSibling,
                  d = i.firstChild,
                  h = d.nextSibling;
                return (
                  n(e, () => u("Total Prize")),
                  n(d, S, null),
                  n(d, () => ce(!1, x().toNumber()), null),
                  n(h, $, null),
                  n(h, () => j.setting.localeCurrencyName, null),
                  r
                );
              },
            }),
            b
          ),
          n(
            b,
            (() => {
              var r = I(() => {
                var e;
                return !!((e = t()) != null && e.eventDetails);
              });
              return () =>
                r() &&
                (() => {
                  var e = he(),
                    i = e.firstChild;
                  return (
                    P(() => {
                      var d;
                      return (i.innerHTML = R(
                        (d = t()) == null ? void 0 : d.eventDetails
                      ));
                    }),
                    e
                  );
                })();
            })(),
            w
          ),
          n(
            w,
            (() => {
              var r = I(() => {
                var e;
                return !!((e = t()) != null && e.termsConditions);
              });
              return () =>
                r() &&
                (() => {
                  var e = $e(),
                    i = e.firstChild;
                  return (
                    P(() => {
                      var d;
                      return (i.innerHTML = R(
                        (d = t()) == null ? void 0 : d.termsConditions
                      ));
                    }),
                    e
                  );
                })();
            })()
          ),
          n(
            b,
            (() => {
              var r = I(() => {
                var e;
                return !!((e = t()) != null && e.btnOneText);
              });
              return () =>
                r() &&
                (() => {
                  var e = be();
                  return (
                    n(
                      e,
                      y(le, {
                        class: "mt-5 w-72 max-sm:w-full",
                        type: "brand",
                        onClick: () => {
                          var i, d, h;
                          W((i = t()) == null ? void 0 : i.btnOneLink)
                            ? window.open(
                                (d = t()) == null ? void 0 : d.btnOneLink
                              )
                            : o((h = t()) == null ? void 0 : h.btnOneLink);
                        },
                        get children() {
                          var i;
                          return (i = t()) == null ? void 0 : i.btnOneText;
                        },
                      })
                    ),
                    e
                  );
                })();
            })(),
            null
          ),
          n(
            b,
            (() => {
              var r = I(() => {
                var e;
                return !!((e = t()) != null && e.participatingGames);
              });
              return () =>
                r() &&
                (() => {
                  var e = _e(),
                    i = e.firstChild,
                    d = i.nextSibling;
                  return (
                    n(i, () => u("Participating Games to win ")),
                    n(d, () => {
                      var h, _;
                      return (_ =
                        (h = t()) == null ? void 0 : h.participatingGames) ==
                        null
                        ? void 0
                        : _.map((g, F) =>
                            (() => {
                              var D = ye(),
                                L = D.firstChild,
                                B = L.firstChild,
                                k = L.nextSibling;
                              return (
                                (D.$$click = () =>
                                  o(
                                    g.gameUnique.includes("detrade:trading")
                                      ? "/trading"
                                      : `/game/${g.gameUnique}`
                                  )),
                                n(k, () => (g == null ? void 0 : g.fullName)),
                                P(() =>
                                  K(B, "src", g == null ? void 0 : g.thumbnail)
                                ),
                                D
                              );
                            })()
                          );
                    }),
                    e
                  );
                })();
            })(),
            null
          ),
          l
        );
      },
    });
  };
Q(["click"]);
export { Pe as PromotionDetail, Pe as default };
