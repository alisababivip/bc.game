var zt = Object.defineProperty,
  Ht = Object.defineProperties;
var Ot = Object.getOwnPropertyDescriptors;
var $t = Object.getOwnPropertySymbols;
var qt = Object.prototype.hasOwnProperty,
  Ft = Object.prototype.propertyIsEnumerable;
var _t = (t, i, l) =>
    i in t
      ? zt(t, i, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (t[i] = l),
  A = (t, i) => {
    for (var l in i || (i = {})) qt.call(i, l) && _t(t, l, i[l]);
    if ($t) for (var l of $t(i)) Ft.call(i, l) && _t(t, l, i[l]);
    return t;
  },
  B = (t, i) => Ht(t, Ot(i));
var I = (t, i, l) =>
  new Promise((x, w) => {
    var f = (c) => {
        try {
          g(l.next(c));
        } catch (y) {
          w(y);
        }
      },
      u = (c) => {
        try {
          g(l.throw(c));
        } catch (y) {
          w(y);
        }
      },
      g = (c) => (c.done ? x(c.value) : Promise.resolve(c.value).then(f, u));
    g((l = l.apply(t, i)).next());
  });
import {
  b as W,
  d as Pt,
  i as e,
  c as a,
  a as E,
  t as p,
  e as Ut,
  m as Z,
  s as Gt,
  f as Zt,
  g as et,
  S as M,
  h as D,
  j as Xt,
  k as L,
  n as G,
  F as Jt,
  p as Kt,
  u as Qt,
} from "./solid-js-8ff414d5.js";
import { g as Yt } from "./apis-5c7b35c7.js";
import {
  S as lt,
  D as Ct,
  I as te,
  g as z,
  u as st,
  c as ee,
  e as K,
  d as N,
  s as rt,
  b as le,
  L as re,
  E as ae,
  P as se,
  f as ne,
  T as U,
} from "./manifest-987d6c36.js";
import { t as d } from "./i18n-9df4b53a.js";
import { C as ie, a as oe } from "./CountryAvatar-9bf00e0a.js";
import { I as Dt } from "./LocalIcon-84e2288f.js";
import { t as ce } from "./total-tickets-8b01aef3.js";
import { w as de } from "./winner-tickets-4d09dec4.js";
import { u as nt } from "./currency-1e153f43.js";
import { c as Q } from "./index-4d3ecff0.js";
import {
  s as ue,
  a as me,
  g as Y,
  b as tt,
} from "./gift-box-black-closed-1c721cc7.js";
import { a as Tt } from "./router-290e090e.js";
import { d as fe } from "./debounce-f7740f4e.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
import "./countries-18533370.js";
import "./lottery-40ce25b9.js";
const be = "/modules/lottery2/assets/total-price-2bdcfacb.png";
var ge = p(
    '<div class="flex center rounded w-full mt-3"><label class="inline-flex flex-1 justify-center">~'
  ),
  he = p("<div>"),
  xe = p('<label class="text-primary text-sm font-semibold">');
function ye(t) {
  const i = [
      "5184000000",
      "86400000",
      "604800000",
      "2592000000",
      "7776000000",
      "",
    ],
    l = {
      5184000000: () => d("Past 60 days"),
      864e5: () => d("Past 24 hours"),
      6048e5: () => d("Past 7 days"),
      2592000000: () => d("Past 30 days"),
      7776000000: () => d("Past 90 days"),
      "": () => d("custom"),
    },
    [x, w] = W(t.filterTime || ""),
    [f, u] = W(new Date()),
    [g, c] = W(new Date()),
    y = (o) => {
      w(o);
      const s = Date.now(),
        $ = new Date(s - Number(o || "5184000000")).getTime();
      t.onChange({ startTime: $, endTime: s, filterTime: o });
    },
    m = (o) => {
      u(o),
        t.onChange({
          startTime: o.getTime(),
          endTime: g().getTime(),
          filterTime: "",
        });
    },
    h = (o) => {
      c(o),
        t.onChange({
          startTime: f().getTime(),
          endTime: o.getTime(),
          filterTime: "",
        });
    },
    C = (o) => o.toLocaleDateString();
  return (
    Pt(() => {
      w(t.filterTime || "");
    }),
    (() => {
      var o = he();
      return (
        e(
          o,
          a(lt, {
            class: "w-full font-semibold text-xs text-primary bg-input_bright",
            get value() {
              return x();
            },
            options: i,
            onChange: y,
            children: (s) =>
              (() => {
                var $ = xe();
                return e($, () => l[s()]()), $;
              })(),
          }),
          null
        ),
        e(
          o,
          a(E, {
            get when() {
              return !x();
            },
            get children() {
              var s = ge(),
                $ = s.firstChild;
              return (
                e(
                  s,
                  a(Ct, {
                    get value() {
                      return f();
                    },
                    format: C,
                    onChange: m,
                    class:
                      "w-[calc(50%-10px)] btn-like bg-input_bright text-primary text-sm font-semibold",
                  }),
                  $
                ),
                e(
                  s,
                  a(Ct, {
                    get value() {
                      return g();
                    },
                    format: C,
                    onChange: h,
                    class:
                      "w-[calc(50%-10px)] btn-like bg-input_bright text-primary text-sm font-semibold",
                  }),
                  null
                ),
                s
              );
            },
          }),
          null
        ),
        o
      );
    })()
  );
}
var at = ((t) => (
    (t.Past60days = "5184000000"),
    (t.Past24hours = "86400000"),
    (t.Past7days = "604800000"),
    (t.Past30days = "2592000000"),
    (t.Past90days = "7776000000"),
    (t.custom = ""),
    t
  ))(at || {}),
  pe = p('<div class="search-round-mobile-box mt-3">'),
  ve = p(
    '<div class=searchBoxWrap><div class=search-box-mobile><div class="search-input-box h-10"><div class=input-control></div></div><div class="search-select-mobile-box flex gap-2 mt-3">'
  ),
  we = p(
    '<div class="inline-flex items-center gap-1"><label class="text-primary text-sm font-semibold">'
  ),
  $e = p('<label class="text-primary text-sm font-semibold truncate">: '),
  _e = p('<label class="text-primary text-sm font-semibold">'),
  Ce = p(
    '<div class="flex items-center bg-input_bright rounded-xl px-2 gap-1 w-full h-full border border-solid border-input"><input>'
  ),
  V = ((t) => (
    (t.name = "name"),
    (t.country = "country"),
    (t.sortBy = "sortBy"),
    (t.date = "date"),
    t
  ))(V || {});
const Te = (t) => {
    const i = Ut(() => [
        { label: d("Added Date"), value: "ADDED_DATE" },
        { label: d("Draw Date"), value: "DRAW_DATE" },
        { label: d("Total Bet Amount"), value: "TOTAL_BET_AMOUNT" },
        { label: d("Total Return"), value: "TOTAL_RETURN" },
      ]),
      l = Yt(),
      x = () => {
        var u;
        return (
          ((u = l()) == null
            ? void 0
            : u.find((g) => g === t.searchValues.lotteryCountry)) || ""
        );
      },
      w = () => i().find((u) => u.value === t.searchValues.sortBy) || i()[1];
    return (() => {
      var f = ve(),
        u = f.firstChild,
        g = u.firstChild,
        c = g.firstChild,
        y = g.nextSibling;
      return (
        e(
          c,
          a(ke, {
            get value() {
              return t.searchValues.lotteryName;
            },
            onClear: () => t.onChange("", "name"),
            onInput: (m) => {
              t.onChange(m, "name");
            },
          })
        ),
        e(
          y,
          a(lt, {
            class:
              "w-1/2 font-semibold text-xs text-primary bg-input_bright rounded-xl",
            get value() {
              return x();
            },
            get options() {
              return l() || [];
            },
            onChange: (m) => {
              t.onChange(m, "country");
            },
            children: (m) =>
              (() => {
                var h = we(),
                  C = h.firstChild;
                return (
                  e(
                    h,
                    (() => {
                      var o = Z(() => !!m());
                      return () =>
                        o() &&
                        a(ie, {
                          get country() {
                            return m();
                          },
                        });
                    })(),
                    C
                  ),
                  e(
                    C,
                    (() => {
                      var o = Z(() => m() === "");
                      return () => (o() ? d("All Country") : m());
                    })()
                  ),
                  h
                );
              })(),
          }),
          null
        ),
        e(
          y,
          a(lt, {
            class:
              "w-1/2 font-semibold text-xs text-primary bg-input_bright rounded-xl",
            get value() {
              return w();
            },
            get options() {
              return i();
            },
            onChange: (m) => {
              t.onChange(m.value, "sortBy");
            },
            labelFormat: (m) =>
              (() => {
                var h = $e(),
                  C = h.firstChild;
                return (
                  e(h, () => d("Sort By"), C), e(h, () => m().label, null), h
                );
              })(),
            children: (m) =>
              (() => {
                var h = _e();
                return e(h, () => m().label), h;
              })(),
          }),
          null
        ),
        e(
          u,
          a(E, {
            get when() {
              return t.isShowDate;
            },
            get children() {
              var m = pe();
              return (
                e(
                  m,
                  a(ye, {
                    get filterTime() {
                      return t.searchValues.filterTime;
                    },
                    onChange: (h) => {
                      t.onChange(h, "date");
                    },
                  })
                ),
                m
              );
            },
          }),
          null
        ),
        f
      );
    })();
  },
  Se = Te;
function ke(t) {
  return (() => {
    var i = Ce(),
      l = i.firstChild;
    return (
      e(i, a(te, { name: "Search", class: "!w-5 fill-secondary" }), l),
      Gt(
        l,
        Zt(t, {
          type: "text",
          class:
            "w-full text-base font-normal text-primary bg-input_bright h-10 placeholder:text-quarterary outline-0",
          placeholder: "Search lottery name",
          get onChange() {
            return t.onChange && ((x) => t.onChange(x.target.value));
          },
          get onInput() {
            return t.onInput && ((x) => t.onInput(x.target.value));
          },
        }),
        !1,
        !1
      ),
      e(
        i,
        a(E, {
          get when() {
            return t.value;
          },
          get children() {
            return a(Dt, {
              name: "Close",
              class: "!w-5 cursor-pointer",
              get onClick() {
                return t.onClear;
              },
            });
          },
        }),
        null
      ),
      i
    );
  })();
}
var Pe = p(
  '<div class="dashboard rounded"><div class=dashboard-mobile><div class="tickets-item-box flex gap-3 mb-3"><section class="tickets-item-mobile w-full py-3 px-4 rounded-xl bg-layer4 relative h-20"><p class="tickets-desc text-sm text-secondary font-semibold m-0"></p><div class=tickets-num-box><h2 class="tickets-num text-xl font-extrabold m-0 text-primary leading-10"></h2><img class="w-16 h-16 absolute right-0 bottom-0"loading=lazy></div></section><section class="tickets-item-mobile w-full py-3 px-4 rounded-xl bg-layer4 relative h-20"><p class="tickets-desc text-sm text-secondary font-semibold m-0"></p><div class="tickets-num-box flex items-center justify-between"><h2 class="tickets-num text-xl font-extrabold m-0 text-primary leading-10"></h2><img class="w-16 h-16 absolute right-0 bottom-0"loading=lazy></div></section></div><section class="tickets-item-mobile w-full py-3 px-4 rounded-xl bg-layer4 relative h-20"><p class="tickets-desc text-sm text-secondary font-semibold m-0"></p><div class="tickets-num-box flex items-center justify-between"><h2 class="tickets-num text-xl font-extrabold m-0 text-brand leading-10"></h2><img class="tickets-icon w-16 h-16 absolute right-0 bottom-0 rounded-tr-xl rounded-br-xl"loading=lazy>'
);
const De = function () {
    const t = nt(),
      i = () =>
        I(this, null, function* () {
          const x = "/platform-lottery/my-bets/statistics";
          return yield z()
            .get(x)
            .catch((w) => ({
              totalTicket: "0",
              totalWinTicket: "0",
              totalPrize: "0",
            }));
        }),
      [l] = et(i);
    return a(M, {
      get children() {
        var x = Pe(),
          w = x.firstChild,
          f = w.firstChild,
          u = f.firstChild,
          g = u.firstChild,
          c = g.nextSibling,
          y = c.firstChild,
          m = y.nextSibling,
          h = u.nextSibling,
          C = h.firstChild,
          o = C.nextSibling,
          s = o.firstChild,
          $ = s.nextSibling,
          n = f.nextSibling,
          v = n.firstChild,
          b = v.nextSibling,
          T = b.firstChild,
          S = T.nextSibling;
        return (
          e(g, () => d("Total tickets")),
          e(y, () => {
            var _;
            return ((_ = l()) == null ? void 0 : _.totalTicket) || 0;
          }),
          D(m, "src", ce),
          e(C, () => d("Total winning tickets")),
          e(s, () => {
            var _;
            return ((_ = l()) == null ? void 0 : _.totalWinTicket) || 0;
          }),
          D($, "src", de),
          e(v, () => d("Total Prize Won")),
          e(T, () => {
            var _;
            return t((_ = l()) == null ? void 0 : _.totalPrize);
          }),
          D(S, "src", be),
          x
        );
      },
    });
  },
  Ae = De;
var St = p(
    '<svg xmlns=http://www.w3.org/2000/svg width=112 height=71 viewBox="0 0 112 71"><path d="M0.346325 2.98168C-0.404786 1.64846 0.558578 0 2.08882 0H89.3289C90.773 0 92.105 0.778424 92.8139 2.03663L110.56 33.5366C111.247 34.7555 111.247 36.2445 110.56 37.4634L92.8139 68.9634C92.105 70.2216 90.773 71 89.3289 71H2.08882C0.558578 71 -0.404783 69.3515 0.346328 68.0183L17.5604 37.4634C18.2471 36.2445 18.2471 34.7555 17.5604 33.5366L0.346325 2.98168Z">'
  ),
  Ne = p(
    '<svg width=112 height=71 viewBox="0 0 112 71"xmlns=http://www.w3.org/2000/svg><path d="M0.694909 2.98703C-0.0616244 1.65375 0.901425 0 2.43439 0H108C110.209 0 112 1.79086 112 4V67C112 69.2091 110.209 71 108 71H2.43439C0.901428 71 -0.0616263 69.3463 0.694907 68.013L18.0234 37.474C18.7181 36.2497 18.7181 34.7503 18.0234 33.526L0.694909 2.98703Z">'
  ),
  Be = p(
    '<div class="awardInformWrap mt-3 p-4 rounded-xl bg-layer4"><section class="inform-title-box flex items-center justify-between"><div class="inform-title-wrapper flex items-center justify-between w-full"><h1 class="inform-title text-sm font-extrabold my-0 mr-2 ml-0 text-primary"></h1><section class="center rounded-md bg-layer5 w-6 h-6"></section></div></section><section class="spending-amount-box flex items-center justify-between mt-4 mx-0"><label class="text-sm font-semibold text-secondary">: </label><label class="text-primary text-sm font-semibold"></label></section><section class="award-count-box-mobile flex items-center justify-between mt-2"><label class="inform-countdown-title-mobile text-sm font-semibold text-secondary"></label><div class="flex justify-between items-center gap-1"><span class="bet-date-content w-[52px] h-7 inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-layer2 text-primary">h</span><label class="bet-date-colon flex-center text-sm font-semibold text-primary">:</label><span class="bet-date bet-date-content w-[52px] h-7 inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-layer2 text-primary">m</span><label class="bet-date-colon flex-center text-sm font-semibold text-primary">:</label><span class="bet-date-content w-[52px] h-7 inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-layer2 text-primary">s</span></div></section><section class="award-infor-box flex mt-4 overflow-x-auto"><div class="award-step1-wrapper flex min-w-[50px] w-[50px]"><div class="award-step-box flex flex-1 items-center justify-center rounded relative"><img class=h-full></div></div><div class="award-step234-wrapper w-[calc(100%-50px)] overflow-x-auto grid grid-cols-3"><div class="award-step-box flex flex-1 items-center justify-center rounded relative"><div class="award-step-box-mobile flex items-center justify-center flex-col absolute top-0 left-0 w-full h-full"><div class="award-step-logo-box-mobile h-7"><img class="award-step-logo h-7"loading=lazy></div><label> X </label></div></div><div class="award-step-box relative h-full min-h-[50px] flex items-center overflow-hidden"><div class="award-step-box-mobile flex items-center justify-center flex-col absolute top-0 left-0 w-full h-full"><div class=award-step-logo-box-mobile><img class="award-step-logo h-7"loading=lazy></div><label> X </label></div></div><div class="award-step-box relative h-full min-h-[50px] flex items-center overflow-hidden"><div class="award-step-box-mobile award-step-box-mobile3 flex items-center justify-center flex-col absolute top-0 left-0 w-full h-full"><div class=award-step-logo-box-mobile><img class="award-step-logo h-7"loading=lazy></div><label> X '
  ),
  kt = p(
    '<svg xmlns=http://www.w3.org/2000/svg width=368 height=71 viewBox="0 0 368 71"><path d="M0.679821 2.98168C-0.0712903 1.64846 0.892074 0 2.42232 0H345.662C347.107 0 348.439 0.778424 349.147 2.03663L366.894 33.5366C367.581 34.7555 367.581 36.2445 366.894 37.4634L349.147 68.9634C348.439 70.2216 347.107 71 345.662 71H2.42233C0.892082 71 -0.0712873 69.3515 0.679824 68.0183L17.8939 37.4634C18.5806 36.2445 18.5806 34.7555 17.8939 33.5366L0.679821 2.98168Z">'
  ),
  Le = p(
    '<svg xmlns=http://www.w3.org/2000/svg width=368 height=71 viewBox="0 0 368 71"><path d="M0.361535 2.98703C-0.394998 1.65375 0.568051 0 2.10101 0H359.667C364.085 0 367.667 3.58172 367.667 8V63C367.667 67.4183 364.085 71 359.667 71H2.10101C0.568045 71 -0.395 69.3463 0.361533 68.013L17.69 37.474C18.3848 36.2497 18.3848 34.7503 17.69 33.526L0.361535 2.98703Z">'
  );
const Ee = function () {
    const t = st(),
      i = nt(),
      [l, x] = W({
        currentPhase: 1,
        sumBetAmount: 0,
        reset: 0,
        giftBcLotteryMap: {
          1: { amount: 20, quantity: 1 },
          2: { amount: 200, quantity: 9 },
          3: { amount: 2e3, quantity: 99 },
        },
      }),
      w = ee(() => Number(l().reset)),
      f = () =>
        I(this, null, function* () {
          if (le.login) {
            const c = "/platform-lottery/lottery-detail/get-reward-phase",
              y = yield z().get(c);
            x(y);
          }
        });
    Xt(() => {
      f();
    });
    const u = () => {
      l() && t("/lottery/award_info_detail");
    };
    if (!l()) return null;
    const g = (c) =>
      rt.darken
        ? c >= 2
          ? "fill-layer5"
          : "fill-layer3"
        : c >= 2
        ? "fill-layer5"
        : "fill-layer2";
    return a(M, {
      get children() {
        var c = Be(),
          y = c.firstChild,
          m = y.firstChild,
          h = m.firstChild,
          C = h.nextSibling,
          o = y.nextSibling,
          s = o.firstChild,
          $ = s.firstChild,
          n = s.nextSibling,
          v = o.nextSibling,
          b = v.firstChild,
          T = b.nextSibling,
          S = T.firstChild,
          _ = S.firstChild,
          j = S.nextSibling,
          R = j.nextSibling,
          k = R.firstChild,
          P = R.nextSibling,
          H = P.nextSibling,
          At = H.firstChild,
          Nt = v.nextSibling,
          it = Nt.firstChild,
          Bt = it.firstChild,
          Lt = Bt.firstChild,
          Et = it.nextSibling,
          X = Et.firstChild,
          ot = X.firstChild,
          ct = ot.firstChild,
          jt = ct.firstChild,
          O = ct.nextSibling,
          Rt = O.firstChild,
          J = X.nextSibling,
          dt = J.firstChild,
          ut = dt.firstChild,
          It = ut.firstChild,
          q = ut.nextSibling,
          Mt = q.firstChild,
          mt = J.nextSibling,
          ft = mt.firstChild,
          bt = ft.firstChild,
          Vt = bt.firstChild,
          F = bt.nextSibling,
          Wt = F.firstChild;
        return (
          e(h, () => d("Daily Free Lottery Challenge")),
          e(
            C,
            a(Dt, {
              name: "Inform",
              class: "cursor-pointer",
              onClick: () => u(),
            })
          ),
          e(s, () => d("Today’s spending"), $),
          e(n, () => i(l().sumBetAmount)),
          e(b, () => d("Ends in")),
          e(
            S,
            () => {
              var r;
              return Q((r = w()) == null ? void 0 : r.hours);
            },
            _
          ),
          e(
            R,
            () => {
              var r;
              return Q((r = w()) == null ? void 0 : r.minutes);
            },
            k
          ),
          e(
            H,
            () => {
              var r;
              return Q((r = w()) == null ? void 0 : r.seconds);
            },
            At
          ),
          e(
            X,
            a(E, {
              get when() {
                return K.mobile;
              },
              get fallback() {
                return (() => {
                  var r = kt();
                  return (
                    L(() =>
                      D(r, "class", N("w-full h-full", g(l().currentPhase)))
                    ),
                    r
                  );
                })();
              },
              get children() {
                var r = St();
                return (
                  L(() =>
                    D(r, "class", N("w-full h-full", g(l().currentPhase)))
                  ),
                  r
                );
              },
            }),
            ot
          ),
          e(O, () => d("Lottery"), Rt),
          e(O, () => l().giftBcLotteryMap[1].quantity, null),
          e(
            J,
            a(E, {
              get when() {
                return K.mobile;
              },
              get fallback() {
                return (() => {
                  var r = kt();
                  return (
                    L(() =>
                      D(r, "class", N("w-full h-full", g(l().currentPhase)))
                    ),
                    r
                  );
                })();
              },
              get children() {
                var r = St();
                return (
                  L(() =>
                    D(r, "class", N("w-full h-full", g(l().currentPhase)))
                  ),
                  r
                );
              },
            }),
            dt
          ),
          e(q, () => d("Lottery"), Mt),
          e(q, () => l().giftBcLotteryMap[2].quantity, null),
          e(
            mt,
            a(E, {
              get when() {
                return K.mobile;
              },
              get fallback() {
                return (() => {
                  var r = Le();
                  return (
                    L(() =>
                      D(r, "class", N("w-full h-full", g(l().currentPhase)))
                    ),
                    r
                  );
                })();
              },
              get children() {
                var r = Ne();
                return (
                  L(() =>
                    D(r, "class", N("w-full h-full", g(l().currentPhase)))
                  ),
                  r
                );
              },
            }),
            ft
          ),
          e(F, () => d("Lottery"), Wt),
          e(F, () => l().giftBcLotteryMap[3].quantity, null),
          L(
            (r) => {
              var gt = rt.darken ? ue : me,
                ht = l().currentPhase >= 2 ? Y : tt,
                xt = N(
                  "flex items-baseline justify-center whitespace-nowrap overflow-x-auto w-full text-xs font-semibold",
                  l().currentPhase >= 2 ? "text-primary" : "text-tertiary"
                ),
                yt = l().currentPhase >= 3 ? Y : tt,
                pt = N(
                  "flex items-baseline justify-center whitespace-nowrap overflow-x-auto w-full text-xs font-semibold",
                  l().currentPhase >= 3 ? "text-primary" : "text-tertiary"
                ),
                vt = l().currentPhase >= 4 ? Y : tt,
                wt = N(
                  "flex items-baseline justify-center whitespace-nowrap overflow-x-auto w-full text-xs font-semibold",
                  l().currentPhase >= 4 ? "text-primary" : "text-tertiary"
                );
              return (
                gt !== r.e && D(Lt, "src", (r.e = gt)),
                ht !== r.t && D(jt, "src", (r.t = ht)),
                xt !== r.a && G(O, (r.a = xt)),
                yt !== r.o && D(It, "src", (r.o = yt)),
                pt !== r.i && G(q, (r.i = pt)),
                vt !== r.n && D(Vt, "src", (r.n = vt)),
                wt !== r.s && G(F, (r.s = wt)),
                r
              );
            },
            {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0,
              i: void 0,
              n: void 0,
              s: void 0,
            }
          ),
          c
        );
      },
    });
  },
  je = Ee,
  Re = "/modules/lottery2/assets/lottery-free-tag-9c7f0a52.png";
var Ie = p("<tbody>"),
  Me = p(
    '<div class="tableContentWrap p-3 relative"><table><thead><tr class="table-tr border-b border-solid border-third"><th class="max-w-40 table-td-id text-left text-xs text-secondary font-semibold py-2"></th><th class="text-xs text-secondary font-semibold py-2"></th><th class="w-[90px] sm:w-auto text-xs text-secondary font-semibold text-right py-2"></th></tr></thead></table><div class=pt-4>'
  ),
  Ve = p("<img class=h-6>"),
  We = p(
    '<tr class="border-b border-solid border-input cursor-pointer"><td class="id-td max-w-[120px] overflow-hidden py-2"><div class="id-box flex gap-3 items-center overflow-hidden"><section class="ball-desc-box truncate flex"><div><h3 class="truncate text-primary text-sm font-extrabold"></h3><p class="text-left text-secondary text-sm font-semibold"></p></div></section></div></td><td class="text-primary text-sm font-semibold py-2"></td><td class="td-amount-return w-[90px] sm:w-auto text-right py-2 text-sm font-extrabold text-brand"><label class=mr-1>'
  );
const ze = function (t) {
    const i = nt(),
      l = st(),
      x = (f) => {
        const u = `/lottery/bet_detail/${f.id}`;
        l(u);
      },
      w = (f) =>
        f
          ? rt.darken
            ? "linear-gradient(90deg, #323738 0%, #296645 100%)"
            : "linear-gradient(90deg, rgba(35, 238, 136, 0.02) 0%, rgba(35, 238, 136, 0.20) 16.97%, rgba(35, 238, 136, 0.20) 57%, rgba(35, 238, 136, 0.01) 100%)"
          : "initial";
    return a(M, {
      get children() {
        var f = Me(),
          u = f.firstChild,
          g = u.firstChild,
          c = g.firstChild,
          y = c.firstChild,
          m = y.nextSibling,
          h = m.nextSibling,
          C = u.nextSibling;
        return (
          e(y, () => d("Lottery Name")),
          e(m, () => d("Results")),
          e(h, () => d("Total Return")),
          e(
            u,
            a(M, {
              get fallback() {
                return a(re, { class: "absolute left-1/2 top-12" });
              },
              get children() {
                return a(E, {
                  get when() {
                    return t.data.list.length;
                  },
                  get fallback() {
                    return a(ae, {
                      class: "absolute left-1/2 -translate-x-1/2",
                    });
                  },
                  get children() {
                    var o = Ie();
                    return (
                      e(
                        o,
                        a(Jt, {
                          get each() {
                            return t.data.list;
                          },
                          children: (s) =>
                            (() => {
                              var $ = We(),
                                n = $.firstChild,
                                v = n.firstChild,
                                b = v.firstChild,
                                T = b.firstChild,
                                S = T.firstChild,
                                _ = S.nextSibling,
                                j = n.nextSibling,
                                R = j.nextSibling,
                                k = R.firstChild;
                              return (
                                ($.$$click = () => x(s)),
                                e(
                                  v,
                                  a(oe, {
                                    get country() {
                                      return s.lotteryId === "0"
                                        ? "Bc"
                                        : s == null
                                        ? void 0
                                        : s.lotteryCountry;
                                    },
                                  }),
                                  b
                                ),
                                e(S, () => s.lotteryName),
                                e(_, () => s.drawEventId),
                                e(
                                  b,
                                  a(E, {
                                    get when() {
                                      return s.freeFlag;
                                    },
                                    get children() {
                                      var P = Ve();
                                      return D(P, "src", Re), P;
                                    },
                                  }),
                                  null
                                ),
                                e(
                                  j,
                                  (() => {
                                    var P = Z(() => s.marketType === 1);
                                    return () =>
                                      P()
                                        ? (() => {
                                            var H = Z(
                                              () => !!(s != null && s.results)
                                            );
                                            return () =>
                                              H() &&
                                              s.results.split(",").length +
                                                " Matched";
                                          })()
                                        : s.results;
                                  })()
                                ),
                                e(k, () => i(s.winAmount)),
                                L((P) =>
                                  (P = w(s.isRead)) != null
                                    ? $.style.setProperty("background", P)
                                    : $.style.removeProperty("background")
                                ),
                                $
                              );
                            })(),
                        })
                      ),
                      o
                    );
                  },
                });
              },
            }),
            null
          ),
          e(
            C,
            a(M, {
              get children() {
                return a(se, {
                  class: "justify-end",
                  get current() {
                    return t.page;
                  },
                  get total() {
                    return t.data.total;
                  },
                  get pageSize() {
                    return t.data.pageSize;
                  },
                  onChange: (o) => {
                    t.onPageChange(o);
                  },
                });
              },
            })
          ),
          L(() =>
            G(
              u,
              N("w-full text-center relative", t.data.list.length ? "" : "h-80")
            )
          ),
          f
        );
      },
    });
  },
  He = ze;
Kt(["click"]);
var Oe = p(
    '<div class="lottery-box w-full bg-layer2"><div class="mb-3 mt-4 sm:mt-0 text-sm font-normal text-primary"><h1 class="text-lg font-extrabold text-primary"></h1></div><div class="tabs-table-content bg-layer4 rounded-xl mt-4 pt-4"><section class="tabs-label-box rounded px-4"></section><section class="mybets-list px-4 pb-4 mt-1 bg-layer4 rounded-xl"><div class=tabs-search-box></div><div class=tabs-value-box>'
  ),
  qe = p(
    '<label class="center p-1 ml-1 min-w-5 rounded-full bg-brand text-primary text-xs font-semibold">'
  ),
  Fe = p('<div class="center w-full">');
function gl() {
  const [t] = Tt(),
    i = st(),
    l = (n) =>
      n === 0 || t.tab === void 0 ? "ACTIVE" : n === 1 ? "PAST" : "WINNING",
    x = {
      lotteryName: "",
      lotteryCountry: "",
      sortBy:
        Number(t.tab) === 0 || t.tab === void 0 ? "ADDED_DATE" : "DRAW_DATE",
      status: l(Number(t.tab)),
      page: 1,
      pageSize: 10,
      filterTime: at.Past60days,
      startTime: new Date(Date.now() - Number(at.Past60days)).getTime(),
      endTime: Date.now(),
    },
    w = { page: 1, pageSize: 10, total: 0, list: [] },
    [f, u] = W(x),
    [g] = Tt(),
    c = () => Number(g.tab || "0"),
    y = () =>
      I(this, null, function* () {
        const n = "/platform-lottery/winning-notify/count-unread";
        return yield z().get(n);
      }),
    m = (n) =>
      I(this, null, function* () {
        var S;
        const v =
          (S = n == null ? void 0 : n.filter((_) => _.isRead)) == null
            ? void 0
            : S.map((_) => _.id);
        if ((v == null ? void 0 : v.length) <= 0) return;
        const b = "/platform-lottery/winning-notify/read",
          T = { idList: v };
        yield z().post(b, T), s();
      }),
    h = (n) =>
      I(this, null, function* () {
        const v = "/platform-lottery/my-bets/list-ticket";
        A({}, n);
        const b = yield z().post(v, n);
        return (
          (b.list = b.list.map((T) => B(A({}, T), { isRead: !!T.isRead }))),
          c() === 2 && m(b.list),
          b
        );
      }),
    [C] = et(f, h, { initialValue: w }),
    [o, { refetch: s }] = et(y),
    $ = fe((n, v) => {
      let b = B(A({}, f()), { page: 1 });
      switch (v) {
        case V.name:
          b = B(A({}, b), { lotteryName: n });
          break;
        case V.country:
          b = B(A({}, b), { lotteryCountry: n });
          break;
        case V.sortBy:
          b = B(A({}, b), { sortBy: n });
          break;
        case V.date:
          b = B(A({}, b), {
            startTime: n.startTime,
            endTime: n.endTime,
            filterTime: n.filterTime,
          });
          break;
      }
      u(b);
    });
  return (
    Pt(
      () => (
        Qt(() => {
          const n = B(A({}, x), { status: l(Number(c())) });
          c() === 0 && (delete n.startTime, delete n.endTime), u(n);
        }),
        [c()]
      )
    ),
    a(ne, {
      get title() {
        return d("My Bets");
      },
      get children() {
        return a(M, {
          get children() {
            var n = Oe(),
              v = n.firstChild,
              b = v.firstChild,
              T = v.nextSibling,
              S = T.firstChild,
              _ = S.nextSibling,
              j = _.firstChild,
              R = j.nextSibling;
            return (
              e(b, () => d("My Bets")),
              e(n, a(Ae, {}), T),
              e(n, a(je, {}), T),
              e(
                S,
                a(U, {
                  class: "mybets-tabs m-0 !bg-input_bright p-1",
                  get value() {
                    return c();
                  },
                  onChange: (k) => {
                    i(`/lottery/mybets?${k === 0 ? "" : "tab=" + k}`, {
                      replace: !0,
                    });
                  },
                  get children() {
                    return [
                      a(U.TabItem, {
                        get title() {
                          return d("Active");
                        },
                      }),
                      a(U.TabItem, {
                        get title() {
                          return d("Past");
                        },
                      }),
                      a(U.TabItem, {
                        get title() {
                          return (() => {
                            var k = Fe();
                            return (
                              e(k, () => d("My Winning"), null),
                              e(
                                k,
                                a(E, {
                                  get when() {
                                    return Number(o());
                                  },
                                  get children() {
                                    var P = qe();
                                    return e(P, o), P;
                                  },
                                }),
                                null
                              ),
                              k
                            );
                          })();
                        },
                      }),
                    ];
                  },
                })
              ),
              e(
                j,
                a(Se, {
                  get isShowDate() {
                    return c() !== 0;
                  },
                  get searchValues() {
                    return f();
                  },
                  onChange: (k, P) => $(k, P),
                })
              ),
              e(
                R,
                a(He, {
                  get data() {
                    return C();
                  },
                  get page() {
                    return f().page;
                  },
                  onPageChange: (k) => {
                    u(B(A({}, f()), { page: k }));
                  },
                })
              ),
              n
            );
          },
        });
      },
    })
  );
}
var Ue = ((t) => (
    (t[(t.ACTIVE = 0)] = "ACTIVE"),
    (t[(t.PAST = 1)] = "PAST"),
    (t[(t.WINNING = 2)] = "WINNING"),
    t
  ))(Ue || {}),
  Ge = ((t) => (
    (t.ACTIVE = "ACTIVE"), (t.PAST = "PAST"), (t.WINNING = "WINNING"), t
  ))(Ge || {}),
  Ze = ((t) => (
    (t.add = "ADDED_DATE"),
    (t.draw = "DRAW_DATE"),
    (t.amount = "TOTAL_BET_AMOUNT"),
    (t.return = "TOTAL_RETURN"),
    t
  ))(Ze || {});
export { Ze as ISortByValue, Ue as ITabs, Ge as ITabsValue, gl as default };
