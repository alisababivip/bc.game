var At = Object.defineProperty,
  Et = Object.defineProperties;
var Nt = Object.getOwnPropertyDescriptors;
var rt = Object.getOwnPropertySymbols;
var Bt = Object.prototype.hasOwnProperty,
  Ft = Object.prototype.propertyIsEnumerable;
var at = (n, e, r) =>
    e in n
      ? At(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[e] = r),
  ke = (n, e) => {
    for (var r in e || (e = {})) Bt.call(e, r) && at(n, r, e[r]);
    if (rt) for (var r of rt(e)) Ft.call(e, r) && at(n, r, e[r]);
    return n;
  },
  Pe = (n, e) => Et(n, Nt(e));
var it = (n, e, r) =>
  new Promise((t, s) => {
    var i = (b) => {
        try {
          m(r.next(b));
        } catch (o) {
          s(o);
        }
      },
      g = (b) => {
        try {
          m(r.throw(b));
        } catch (o) {
          s(o);
        }
      },
      m = (b) => (b.done ? t(b.value) : Promise.resolve(b.value).then(i, g));
    m((r = r.apply(n, e)).next());
  });
import {
  c as _,
  i as S,
  t as j,
  j as Ze,
  b as Xe,
  e as z,
  s as I,
  u as te,
  d as Be,
  g as Qe,
  a as J,
  k as mt,
  m as Pt,
} from "./web-13cf6287.js";
import {
  p as ye,
  P as ft,
  _ as Dt,
  c as B,
  B as fe,
  I as ht,
  A as Ot,
  b as Vt,
  t as Ut,
  i as Ve,
  g as W,
  e as le,
  a as bt,
  V as Jt,
  s as _t,
  l as Ue,
  D as vt,
  w as qt,
  T as Ae,
  W as De,
  u as wt,
  h as Gt,
} from "./manifest-cc1f4445.js";
import {
  i as Wt,
  b as O,
  j as Ke,
  S as G,
  e as Se,
  F as he,
  c as ie,
  h as xt,
  M as we,
  o as Ye,
  a as Ee,
  m as et,
  u as ae,
  d as Je,
  E as lt,
  t as yt,
  s as Ht,
} from "./solid-js-38561dfe.js";
import { t as R } from "./i18n-023baa0d.js";
import { I as qe } from "./index-e10d67ae.js";
import { v as Ge } from "./vip-c0abd707.js";
import { T as Zt } from "./table-e9d87985.js";
import { s as re } from "./index-66557316.js";
import { C as ne } from "./currency-format-e71c6b76.js";
import { h as Xt } from "./http-7cc13238.js";
import { S as We } from "./sounds-a90e2198.js";
import { t as St } from "./toast-unhandle-error-afca6f15.js";
import { s as Te } from "./index-96ed660e.js";
import { b as ot } from "./index-6d249af1.js";
import { L as Qt, A as Kt } from "./animate-number-d108436c.js";
import { d as Yt } from "./utils-55681fa2.js";
import { C as Ne } from "./center-loading-04d2fcbc.js";
var en = j('<span class="text-sm font-semibold text-secondary">'),
  tn = j('<span class="text-sm font-semibold text-primary">'),
  nn = j('<h2 class="text-lg font-extrabold">');
const sn = () => {
    ye.push(() => _(rn, {}));
  },
  rn = () => {
    const [n] = re.spinLogResource(),
      e = () => [
        {
          title: "",
          dataIndex: "type",
          render(r, t) {
            const s = () =>
              t.type === 1
                ? R("Daily Spin")
                : Number(t.desc)
                ? R("VIP __level__ Spin", { level: t.desc })
                : R("Other Spin");
            return (() => {
              var i = en();
              return S(i, s), i;
            })();
          },
        },
        {
          title: "",
          dataIndex: "receiveTime",
          render(r) {
            function t(s) {
              const i = new Date(s),
                g = String(i.getHours()).padStart(2, "0"),
                m = String(i.getMinutes()).padStart(2, "0"),
                b = { month: "short", day: "numeric" },
                o = new Intl.DateTimeFormat("en-US", b).format(i);
              return `${g}:${m} ${o}`;
            }
            return (() => {
              var s = tn();
              return S(s, () => t(new Date(r).getTime())), s;
            })();
          },
        },
      ];
    return _(ft, {
      get title() {
        return R("Lucky Spin Reward Log");
      },
      class: "max-h-[60%]",
      get children() {
        return [
          (() => {
            var r = nn();
            return S(r, () => R("Spin Reward Log")), r;
          })(),
          _(Zt, {
            get columns() {
              return e();
            },
            bordered: !1,
            get data() {
              return n();
            },
          }),
        ];
      },
    });
  };
var an = j("<span class=text-brand>+"),
  ln = j(
    '<div><div class="flex h-56 w-56 items-center justify-center"></div><div class="flex w-64 flex-col gap-y-4"><div class="flex h-12 items-center justify-center rounded-lg bg-layer4 text-lg font-extrabold"></div><div class="flex w-full gap-x-1"></div></div><div class="flex w-full flex-col items-center justify-center gap-y-4 rounded-lg bg-layer2 px-4 py-4 text-sm font-semibold text-secondary"><div class="flex h-10 gap-x-1">'
  ),
  on = j('<img class="h-10 w-10 object-contain">');
const cn = (n) => {
  const [e, r] = Wt(n, [
      "reward",
      "rewardAmount",
      "rewardCurrency",
      "shareConfig",
      "trackId",
    ]),
    [t, s] = O(!1),
    i = () => {
      const m = R("Successfully shared");
      return new Promise((b, o) => {
        Vt.emit("getPublicChatRoomId", (f) =>
          it(void 0, null, function* () {
            if (
              yield ye.confirm(
                () => R("Share your luck to the chat room") + "?"
              )
            )
              return Xt.post("/activity/lucky/spin/share/", {
                trackId: e.trackId,
                roomId: f,
              })
                .then(() => {
                  Ut.success(m), b(""), s(!0);
                })
                .catch(o);
          })
        );
      }).catch(St);
    },
    [g] = Ke(
      () => e.shareConfig,
      (m) => Dt(m)
    );
  return (() => {
    var m = ln(),
      b = m.firstChild,
      o = b.nextSibling,
      f = o.firstChild,
      p = f.nextSibling,
      h = o.nextSibling,
      v = h.firstChild;
    return (
      Ze(
        m,
        Xe(r, {
          get class() {
            return B(
              "flex flex-col items-center justify-center gap-y-6 rounded-lg bg-gradient-spin_reward",
              r.class
            );
          },
        }),
        !1,
        !0
      ),
      S(
        b,
        _(G, {
          get when() {
            return e.reward;
          },
          children: (u) => u(),
        })
      ),
      S(
        f,
        _(ne, {
          get currencyName() {
            return e.rewardCurrency;
          },
          get children() {
            return _(ne.Content, {
              get children() {
                return [
                  _(ne.Icon, {}),
                  (() => {
                    var u = an();
                    return (
                      u.firstChild,
                      S(
                        u,
                        _(ne.Amount, {
                          get amount() {
                            return e.rewardAmount;
                          },
                        }),
                        null
                      ),
                      u
                    );
                  })(),
                ];
              },
            });
          },
        })
      ),
      S(
        p,
        _(fe, {
          onClick: () => {
            We.spinCollect(), ye.pop();
          },
          type: "brand",
          class: "flex-grow",
          get children() {
            return R("Claim Now");
          },
        }),
        null
      ),
      S(
        p,
        _(fe, {
          type: "second",
          class: "w-15",
          onClick: i,
          get disabled() {
            return t();
          },
          get children() {
            return _(ht, { name: "Share" });
          },
        }),
        null
      ),
      S(h, () => R("Share on social media"), v),
      S(
        v,
        _(Se, {
          get children() {
            return _(he, {
              get each() {
                var u;
                return (u = g()) == null
                  ? void 0
                  : u.filter((d) => d.url).slice(0, 6);
              },
              children: (u) =>
                _(Ot, {
                  get href() {
                    return u.url;
                  },
                  target: "_blank",
                  rel: "noopener noreferrer",
                  get children() {
                    var d = on();
                    return z(() => I(d, "src", u.icon)), d;
                  },
                }),
            });
          },
        })
      ),
      m
    );
  })();
};
var un = j("<div class=-mx-4>"),
  dn = j(
    '<div class="relative h-full w-full items-center justify-center"><img><img class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">'
  );
const pn = (n) => ye.push(() => _(gn, n)),
  gn = (n) => {
    const e = ie(() => {
        switch (n.spinLevel) {
          case 0:
          case 1:
          case 2:
            return Te.lucky_lottery;
          case 3:
          case 4:
            return Te.mega_lottery;
          case 5:
            return Te.super_lottery;
        }
      }),
      r = ie(() => {
        const t = Math.floor(Math.random() * 3);
        return t === 0
          ? R(
              "I got free Crypto from __ENV_HOST__ free daily spin! Try your luck now! Free spin to get 5 BTC!"
            )
          : t === 1
          ? R(
              "Wow! I won free crypto from daily free spin at __ENV_HOST__! Try your luck now! Free spin to get 5 BTC!"
            )
          : R(
              "I got lucky at __ENV_HOST__ free Lucky Spin today! Try your luck now! Free spin to get 5 BTC!"
            );
      });
    return _(ft, {
      type: "center",
      title: null,
      class: "popup-full w-[21rem]",
      close: !1,
      get children() {
        return [
          _(fe, {
            onClick: () => {
              ye.pop();
            },
            class: "absolute right-4 top-3",
            get children() {
              return _(ht, { class: "size-5", name: "Close" });
            },
          }),
          (() => {
            var t = un();
            return (
              S(
                t,
                _(cn, {
                  class: "w-full",
                  get shareConfig() {
                    return { title: "Spin", content: r() };
                  },
                  get trackId() {
                    return n.trackId;
                  },
                  get rewardAmount() {
                    return n.rewardAmount;
                  },
                  get rewardCurrency() {
                    return n.rewardCurrency;
                  },
                  get reward() {
                    return (() => {
                      var s = dn(),
                        i = s.firstChild,
                        g = i.nextSibling;
                      return (
                        z(
                          (m) => {
                            var b = Te.rewardBg,
                              o = e();
                            return (
                              b !== m.e && I(i, "src", (m.e = b)),
                              o !== m.t && I(g, "src", (m.t = o)),
                              m
                            );
                          },
                          { e: void 0, t: void 0 }
                        ),
                        s
                      );
                    })();
                  },
                })
              ),
              t
            );
          })(),
        ];
      },
    });
  };
var q = ((n) => (
  (n[(n.Fiat = 0)] = "Fiat"), (n[(n.Crypto = 1)] = "Crypto"), n
))(q || {});
/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var mn = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  fn = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  hn = Math.PI / 180,
  ze = Math.sin,
  Ie = Math.cos,
  xe = Math.abs,
  _e = Math.sqrt,
  bn = function (e) {
    return typeof e == "number";
  },
  ct = 1e5,
  K = function (e) {
    return Math.round(e * ct) / ct || 0;
  };
function _n(n, e, r, t, s, i, g) {
  for (var m = n.length, b, o, f, p, h; --m > -1; )
    for (b = n[m], o = b.length, f = 0; f < o; f += 2)
      (p = b[f]),
        (h = b[f + 1]),
        (b[f] = p * e + h * t + i),
        (b[f + 1] = p * r + h * s + g);
  return (n._dirty = 1), n;
}
function vn(n, e, r, t, s, i, g, m, b) {
  if (!(n === m && e === b)) {
    (r = xe(r)), (t = xe(t));
    var o = (s % 360) * hn,
      f = Ie(o),
      p = ze(o),
      h = Math.PI,
      v = h * 2,
      u = (n - m) / 2,
      d = (e - b) / 2,
      w = f * u + p * d,
      c = -p * u + f * d,
      l = w * w,
      a = c * c,
      y = l / (r * r) + a / (t * t);
    y > 1 && ((r = _e(y) * r), (t = _e(y) * t));
    var x = r * r,
      $ = t * t,
      C = (x * $ - x * a - $ * l) / (x * a + $ * l);
    C < 0 && (C = 0);
    var k = (i === g ? -1 : 1) * _e(C),
      L = k * ((r * c) / t),
      T = k * -((t * w) / r),
      A = (n + m) / 2,
      E = (e + b) / 2,
      be = A + (f * L - p * T),
      Tt = E + (p * L + f * T),
      H = (w - L) / r,
      Z = (c - T) / t,
      $e = (-w - L) / r,
      Ce = (-c - T) / t,
      tt = H * H + Z * Z,
      nt = (Z < 0 ? -1 : 1) * Math.acos(H / _e(tt)),
      X =
        (H * Ce - Z * $e < 0 ? -1 : 1) *
        Math.acos((H * $e + Z * Ce) / _e(tt * ($e * $e + Ce * Ce)));
    isNaN(X) && (X = h),
      !g && X > 0 ? (X -= v) : g && X < 0 && (X += v),
      (nt %= v),
      (X %= v);
    var st = Math.ceil(xe(X) / (v / 4)),
      Q = [],
      Le = X / st,
      je = ((4 / 3) * ze(Le / 2)) / (1 + Ie(Le / 2)),
      zt = f * r,
      It = p * r,
      Mt = p * -t,
      Rt = f * t,
      D;
    for (D = 0; D < st; D++)
      (s = nt + D * Le),
        (w = Ie(s)),
        (c = ze(s)),
        (H = Ie((s += Le))),
        (Z = ze(s)),
        Q.push(w - je * c, c + je * w, H + je * Z, Z - je * H, H, Z);
    for (D = 0; D < Q.length; D += 2)
      (w = Q[D]),
        (c = Q[D + 1]),
        (Q[D] = w * zt + c * Mt + be),
        (Q[D + 1] = w * It + c * Rt + Tt);
    return (Q[D - 2] = m), (Q[D - 1] = b), Q;
  }
}
function wn(n) {
  var e =
      (n + "")
        .replace(fn, function (L) {
          var T = +L;
          return T < 1e-4 && T > -1e-4 ? 0 : T;
        })
        .match(mn) || [],
    r = [],
    t = 0,
    s = 0,
    i = 2 / 3,
    g = e.length,
    m = 0,
    b = "ERROR: malformed path: " + n,
    o,
    f,
    p,
    h,
    v,
    u,
    d,
    w,
    c,
    l,
    a,
    y,
    x,
    $,
    C,
    k = function (T, A, E, be) {
      (l = (E - T) / 3),
        (a = (be - A) / 3),
        d.push(T + l, A + a, E - l, be - a, E, be);
    };
  if (!n || !isNaN(e[0]) || isNaN(e[1])) return console.log(b), r;
  for (o = 0; o < g; o++)
    if (
      ((x = v),
      isNaN(e[o]) ? ((v = e[o].toUpperCase()), (u = v !== e[o])) : o--,
      (p = +e[o + 1]),
      (h = +e[o + 2]),
      u && ((p += t), (h += s)),
      o || ((w = p), (c = h)),
      v === "M")
    )
      d && (d.length < 8 ? (r.length -= 1) : (m += d.length)),
        (t = w = p),
        (s = c = h),
        (d = [p, h]),
        r.push(d),
        (o += 2),
        (v = "L");
    else if (v === "C")
      d || (d = [0, 0]),
        u || (t = s = 0),
        d.push(
          p,
          h,
          t + e[o + 3] * 1,
          s + e[o + 4] * 1,
          (t += e[o + 5] * 1),
          (s += e[o + 6] * 1)
        ),
        (o += 6);
    else if (v === "S")
      (l = t),
        (a = s),
        (x === "C" || x === "S") &&
          ((l += t - d[d.length - 4]), (a += s - d[d.length - 3])),
        u || (t = s = 0),
        d.push(l, a, p, h, (t += e[o + 3] * 1), (s += e[o + 4] * 1)),
        (o += 4);
    else if (v === "Q")
      (l = t + (p - t) * i),
        (a = s + (h - s) * i),
        u || (t = s = 0),
        (t += e[o + 3] * 1),
        (s += e[o + 4] * 1),
        d.push(l, a, t + (p - t) * i, s + (h - s) * i, t, s),
        (o += 4);
    else if (v === "T")
      (l = t - d[d.length - 4]),
        (a = s - d[d.length - 3]),
        d.push(
          t + l,
          s + a,
          p + (t + l * 1.5 - p) * i,
          h + (s + a * 1.5 - h) * i,
          (t = p),
          (s = h)
        ),
        (o += 2);
    else if (v === "H") k(t, s, (t = p), s), (o += 1);
    else if (v === "V") k(t, s, t, (s = p + (u ? s - t : 0))), (o += 1);
    else if (v === "L" || v === "Z")
      v === "Z" && ((p = w), (h = c), (d.closed = !0)),
        (v === "L" || xe(t - p) > 0.5 || xe(s - h) > 0.5) &&
          (k(t, s, p, h), v === "L" && (o += 2)),
        (t = p),
        (s = h);
    else if (v === "A") {
      if (
        (($ = e[o + 4]),
        (C = e[o + 5]),
        (l = e[o + 6]),
        (a = e[o + 7]),
        (f = 7),
        $.length > 1 &&
          ($.length < 3
            ? ((a = l), (l = C), f--)
            : ((a = C), (l = $.substr(2)), (f -= 2)),
          (C = $.charAt(1)),
          ($ = $.charAt(0))),
        (y = vn(
          t,
          s,
          +e[o + 1],
          +e[o + 2],
          +e[o + 3],
          +$,
          +C,
          (u ? t : 0) + l * 1,
          (u ? s : 0) + a * 1
        )),
        (o += f),
        y)
      )
        for (f = 0; f < y.length; f++) d.push(y[f]);
      (t = d[d.length - 2]), (s = d[d.length - 1]);
    } else console.log(b);
  return (
    (o = d.length),
    o < 6
      ? (r.pop(), (o = 0))
      : d[0] === d[o - 2] && d[1] === d[o - 1] && (d.closed = !0),
    (r.totalPoints = m + o),
    r
  );
}
function xn(n) {
  bn(n[0]) && (n = [n]);
  var e = "",
    r = n.length,
    t,
    s,
    i,
    g;
  for (s = 0; s < r; s++) {
    for (
      g = n[s], e += "M" + K(g[0]) + "," + K(g[1]) + " C", t = g.length, i = 2;
      i < t;
      i++
    )
      e +=
        K(g[i++]) +
        "," +
        K(g[i++]) +
        " " +
        K(g[i++]) +
        "," +
        K(g[i++]) +
        " " +
        K(g[i++]) +
        "," +
        K(g[i]) +
        " ";
    g.closed && (e += "z");
  }
  return e;
}
/*!
 * CustomEase 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var P,
  $t,
  Ct = function () {
    return (
      P ||
      (typeof window != "undefined" &&
        (P = window.gsap) &&
        P.registerPlugin &&
        P)
    );
  },
  ut = function () {
    (P = Ct()),
      P
        ? (P.registerEase("_CE", Fe.create), ($t = 1))
        : console.warn("Please gsap.registerPlugin(CustomEase)");
  },
  yn = 1e20,
  Me = function (e) {
    return ~~(e * 1e3 + (e < 0 ? -0.5 : 0.5)) / 1e3;
  },
  Sn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  $n = /[cLlsSaAhHvVtTqQ]/g,
  Cn = function (e) {
    var r = e.length,
      t = yn,
      s;
    for (s = 1; s < r; s += 6) +e[s] < t && (t = +e[s]);
    return t;
  },
  Ln = function (e, r, t) {
    !t && t !== 0 && (t = Math.max(+e[e.length - 1], +e[1]));
    var s = +e[0] * -1,
      i = -t,
      g = e.length,
      m = 1 / (+e[g - 2] + s),
      b =
        -r ||
        (Math.abs(+e[g - 1] - +e[1]) < 0.01 * (+e[g - 2] - +e[0])
          ? Cn(e) + i
          : +e[g - 1] + i),
      o;
    for (b ? (b = 1 / b) : (b = -m), o = 0; o < g; o += 2)
      (e[o] = (+e[o] + s) * m), (e[o + 1] = (+e[o + 1] + i) * b);
  },
  jn = function n(e, r, t, s, i, g, m, b, o, f, p) {
    var h = (e + t) / 2,
      v = (r + s) / 2,
      u = (t + i) / 2,
      d = (s + g) / 2,
      w = (i + m) / 2,
      c = (g + b) / 2,
      l = (h + u) / 2,
      a = (v + d) / 2,
      y = (u + w) / 2,
      x = (d + c) / 2,
      $ = (l + y) / 2,
      C = (a + x) / 2,
      k = m - e,
      L = b - r,
      T = Math.abs((t - m) * L - (s - b) * k),
      A = Math.abs((i - m) * L - (g - b) * k),
      E;
    return (
      f ||
        ((f = [
          { x: e, y: r },
          { x: m, y: b },
        ]),
        (p = 1)),
      f.splice(p || f.length - 1, 0, { x: $, y: C }),
      (T + A) * (T + A) > o * (k * k + L * L) &&
        ((E = f.length),
        n(e, r, h, v, l, a, $, C, o, f, p),
        n($, C, y, x, w, c, m, b, o, f, p + 1 + (f.length - E))),
      f
    );
  },
  Fe = (function () {
    function n(r, t, s) {
      $t || ut(), (this.id = r), this.setData(t, s);
    }
    var e = n.prototype;
    return (
      (e.setData = function (t, s) {
        (s = s || {}), (t = t || "0,0,1,1");
        var i = t.match(Sn),
          g = 1,
          m = [],
          b = [],
          o = s.precision || 1,
          f = o <= 1,
          p,
          h,
          v,
          u,
          d,
          w,
          c,
          l,
          a;
        if (
          ((this.data = t),
          ($n.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
            (i = wn(t)[0]),
          (p = i.length),
          p === 4)
        )
          i.unshift(0, 0), i.push(1, 1), (p = 8);
        else if ((p - 2) % 6) throw "Invalid CustomEase";
        for (
          (+i[0] != 0 || +i[p - 2] != 1) && Ln(i, s.height, s.originY),
            this.segment = i,
            u = 2;
          u < p;
          u += 6
        )
          (h = { x: +i[u - 2], y: +i[u - 1] }),
            (v = { x: +i[u + 4], y: +i[u + 5] }),
            m.push(h, v),
            jn(
              h.x,
              h.y,
              +i[u],
              +i[u + 1],
              +i[u + 2],
              +i[u + 3],
              v.x,
              v.y,
              1 / (o * 2e5),
              m,
              m.length - 1
            );
        for (p = m.length, u = 0; u < p; u++)
          (c = m[u]),
            (l = m[u - 1] || c),
            (c.x > l.x || (l.y !== c.y && l.x === c.x) || c === l) && c.x <= 1
              ? ((l.cx = c.x - l.x),
                (l.cy = c.y - l.y),
                (l.n = c),
                (l.nx = c.x),
                f &&
                  u > 1 &&
                  Math.abs(l.cy / l.cx - m[u - 2].cy / m[u - 2].cx) > 2 &&
                  (f = 0),
                l.cx < g &&
                  (l.cx
                    ? (g = l.cx)
                    : ((l.cx = 0.001),
                      u === p - 1 &&
                        ((l.x -= 0.001), (g = Math.min(g, 0.001)), (f = 0)))))
              : (m.splice(u--, 1), p--);
        if (((p = (1 / g + 1) | 0), (d = 1 / p), (w = 0), (c = m[0]), f)) {
          for (u = 0; u < p; u++)
            (a = u * d),
              c.nx < a && (c = m[++w]),
              (h = c.y + ((a - c.x) / c.cx) * c.cy),
              (b[u] = { x: a, cx: d, y: h, cy: 0, nx: 9 }),
              u && (b[u - 1].cy = h - b[u - 1].y);
          b[p - 1].cy = m[m.length - 1].y - h;
        } else {
          for (u = 0; u < p; u++) c.nx < u * d && (c = m[++w]), (b[u] = c);
          w < m.length - 1 && (b[u - 1] = m[m.length - 2]);
        }
        return (
          (this.ease = function (y) {
            var x = b[(y * p) | 0] || b[p - 1];
            return x.nx < y && (x = x.n), x.y + ((y - x.x) / x.cx) * x.cy;
          }),
          (this.ease.custom = this),
          this.id && P && P.registerEase(this.id, this.ease),
          this
        );
      }),
      (e.getSVGData = function (t) {
        return n.getSVGData(this, t);
      }),
      (n.create = function (t, s, i) {
        return new n(t, s, i).ease;
      }),
      (n.register = function (t) {
        (P = t), ut();
      }),
      (n.get = function (t) {
        return P.parseEase(t);
      }),
      (n.getSVGData = function (t, s) {
        s = s || {};
        var i = s.width || 100,
          g = s.height || 100,
          m = s.x || 0,
          b = (s.y || 0) + g,
          o = P.utils.toArray(s.path)[0],
          f,
          p,
          h,
          v,
          u,
          d,
          w,
          c,
          l,
          a;
        if (
          (s.invert && ((g = -g), (b = 0)),
          typeof t == "string" && (t = P.parseEase(t)),
          t.custom && (t = t.custom),
          t instanceof n)
        )
          f = xn(_n([t.segment], i, 0, 0, -g, m, b));
        else {
          for (
            f = [m, b],
              w = Math.max(5, (s.precision || 1) * 200),
              v = 1 / w,
              w += 2,
              c = 5 / w,
              l = Me(m + v * i),
              a = Me(b + t(v) * -g),
              p = (a - b) / (l - m),
              h = 2;
            h < w;
            h++
          )
            (u = Me(m + h * v * i)),
              (d = Me(b + t(h * v) * -g)),
              (Math.abs((d - a) / (u - l) - p) > c || h === w - 1) &&
                (f.push(l, a), (p = (d - a) / (u - l))),
              (l = u),
              (a = d);
          f = "M" + f.join(",");
        }
        return o && o.setAttribute("d", f), f;
      }),
      n
    );
  })();
Ct() && P.registerPlugin(Fe);
Fe.version = "3.12.5";
const kn = "/modules/bonus2/assets/vip-badge-757e5cbe.png",
  Tn = "/modules/bonus2/assets/banner_bronze-62224b7f.png",
  zn = "/modules/bonus2/assets/banner_crypto-e298fd57.png",
  In = "/modules/bonus2/assets/banner_diamond-1bb4b5cf.png",
  Mn = "/modules/bonus2/assets/banner_fiat-3deb88e9.png",
  Rn = "/modules/bonus2/assets/banner_gold-3b701d4e.png",
  An = "/modules/bonus2/assets/banner_platinum-38ed2101.png",
  En = "/modules/bonus2/assets/banner_silver-11bd1117.png",
  Nn = "/modules/bonus2/assets/japan_banner_bronze-990806eb.png",
  Bn = "/modules/bonus2/assets/japan_banner_diamond-08989dc3.png",
  Fn = "/modules/bonus2/assets/japan_banner_gold-b84a6b50.png",
  Pn = "/modules/bonus2/assets/japan_banner_platinum-45254280.png",
  Dn = "/modules/bonus2/assets/japan_banner_silver-17d871ef.png",
  On = "/modules/bonus2/assets/spin_center1-b8526b97.png",
  Vn = "/modules/bonus2/assets/spin_center2-11748bbb.png",
  Un = "/modules/bonus2/assets/spin_center3-2867ed5a.png",
  Jn = "/modules/bonus2/assets/spin_center4-e5432968.png",
  qn = "/modules/bonus2/assets/spin_center5-151fe2b2.png",
  Gn = "/modules/bonus2/assets/spin_center_crypto-a59e8352.png",
  Wn = "/modules/bonus2/assets/spin_center_fiat-250eb669.png",
  Hn = "/modules/bonus2/assets/spin_center_japan-a88f3241.png",
  Zn = "/modules/bonus2/assets/spin_hand-7d5850e3.png",
  Xn = "/modules/bonus2/assets/crypto-spin-text-e7ddbe13.png",
  Qn = "/modules/bonus2/assets/fiat-spin-text-38e90b5a.png",
  Kn = "/modules/bonus2/assets/luck-spin-5042da92.png",
  Yn = "/modules/bonus2/assets/mega-spin-5902a433.png",
  es = "/modules/bonus2/assets/super-spin-6f424551.png",
  ts = "/modules/bonus2/assets/banner1-576cb7b8.png",
  ns = "/modules/bonus2/assets/banner2-e8108c27.png",
  ss = "/modules/bonus2/assets/banner3-6b4282d7.png",
  rs = "/modules/bonus2/assets/banner4-2a032d56.png",
  as = "/modules/bonus2/assets/banner5-37e48404.png",
  is = "/modules/bonus2/assets/br_banner1-b991aa34.png",
  ls = "/modules/bonus2/assets/br_banner2-4ee711ee.png",
  os = "/modules/bonus2/assets/br_banner3-27c5d5d8.png",
  cs = "/modules/bonus2/assets/br_banner4-89a06096.png",
  us = "/modules/bonus2/assets/br_banner5-79cde9fe.png",
  ds = "/modules/bonus2/assets/fiat-box-69cd2ade.png",
  ps = "/modules/bonus2/assets/gold-57a1d52f.png",
  gs = "/modules/bonus2/assets/light-f1abdd91.png",
  ms = "/modules/bonus2/assets/hand-40b98363.png",
  fs = "/modules/bonus2/assets/light1-fb8f40d9.png",
  hs = "/modules/bonus2/assets/light2-377ecfaa.png",
  bs = "/modules/bonus2/assets/light3-935bc13f.png",
  _s = "/modules/bonus2/assets/light4-7876cd02.png",
  vs = "/modules/bonus2/assets/light5-76fd95a2.png",
  ws = "/modules/bonus2/assets/bg1-a9f0f52e.png",
  xs = "/modules/bonus2/assets/bg2-97e66dc1.png",
  ys = "/modules/bonus2/assets/bg3-90616c54.png",
  Ss = "/modules/bonus2/assets/bg4-c2a7d8f6.png",
  $s = "/modules/bonus2/assets/switcher1_active-8a1e1d66.png",
  Cs = "/modules/bonus2/assets/switcher2_active-769392cc.png",
  Ls = "/modules/bonus2/assets/switcher3_active-b98ce263.png",
  js = "/modules/bonus2/assets/spin_bronze-7c09bb06.png",
  ks = "/modules/bonus2/assets/spin_core_new_user-5a6a5552.png",
  Ts = "/modules/bonus2/assets/spin_diamond-147034ea.png",
  zs = "/modules/bonus2/assets/spin_gold-f57ebd05.png",
  Is = "/modules/bonus2/assets/spin_japan-4ac47e3b.png",
  Ms = "/modules/bonus2/assets/spin_japan_background-812183af.png",
  Rs = "/modules/bonus2/assets/spin_japan_flower-6fad1b4b.png",
  As = "/modules/bonus2/assets/spin_platinum-e8c59cd6.png",
  Es = "/modules/bonus2/assets/spin_silver-b0fed47f.png",
  Ns = "/modules/bonus2/assets/new-user-spin-light-e7a74cab.png",
  Bs = "/modules/bonus2/assets/spinLight-2993efaa.png",
  Fs = "/modules/bonus2/assets/point_bronze-0d249168.png",
  Ps = "/modules/bonus2/assets/point_crypto-2b3622a0.png",
  Ds = "/modules/bonus2/assets/point_diamond-3f948ba0.png",
  Os = "/modules/bonus2/assets/point_fiat-aff671ea.png",
  Vs = "/modules/bonus2/assets/point_gold-ef89e212.png",
  Us = "/modules/bonus2/assets/point_japan-2414c1ef.png",
  Js = "/modules/bonus2/assets/point_platinum-1945da83.png",
  qs = "/modules/bonus2/assets/point_silver-e07c5b71.png",
  Gs = "/modules/bonus2/assets/spin-switcher1_active-90fbcfc3.png",
  Ws = "/modules/bonus2/assets/spin-switcher2_active-6176f80f.png",
  Hs = "/modules/bonus2/assets/spin-switcher3_active-1147ec4e.png",
  Zs = { vipBadge: kn },
  V = {
    banner_bronze: Tn,
    banner_crypto: zn,
    banner_diamond: In,
    banner_fiat: Mn,
    banner_gold: Rn,
    banner_platinum: An,
    banner_silver: En,
    japan_banner_bronze: Nn,
    japan_banner_diamond: Bn,
    japan_banner_gold: Fn,
    japan_banner_platinum: Pn,
    japan_banner_silver: Dn,
  },
  N = {
    spin_center1: On,
    spin_center2: Vn,
    spin_center3: Un,
    spin_center4: Jn,
    spin_center5: qn,
    spin_center_crypto: Gn,
    spin_center_fiat: Wn,
    spin_center_japan: Hn,
    spin_hand: Zn,
  },
  Y = {
    cryptoSpinText: Xn,
    fiatSpinText: Qn,
    luckSpin: Kn,
    megaSpin: Yn,
    superSpin: es,
  },
  U = {
    banner1: ts,
    banner2: ns,
    banner3: ss,
    banner4: rs,
    banner5: as,
    br_banner1: is,
    br_banner2: ls,
    br_banner3: os,
    br_banner4: cs,
    br_banner5: us,
  },
  oe = { fiatBox: ds },
  dt = { gold: ps, light: gs },
  ce = { hand: ms },
  ve = { light1: fs, light2: hs, light3: bs, light4: _s, light5: vs },
  Re = { bg1: ws, bg2: xs, bg3: ys, bg4: Ss },
  ue = { switcher1_active: $s, switcher2_active: Cs, switcher3_active: Ls },
  M = {
    spin_bronze: js,
    spin_core_new_user: ks,
    spin_diamond: Ts,
    spin_gold: zs,
    spin_japan: Is,
    spin_japan_background: Ms,
    spin_japan_flower: Rs,
    spin_platinum: As,
    spin_silver: Es,
  },
  ee = { newUserSpinLight: Ns, spinLight: Bs },
  F = {
    point_bronze: Fs,
    point_crypto: Ps,
    point_diamond: Ds,
    point_fiat: Os,
    point_gold: Vs,
    point_japan: Us,
    point_platinum: Js,
    point_silver: qs,
  },
  de = {
    spinSwitcher1_active: Gs,
    spinSwitcher2_active: Ws,
    spinSwitcher3_active: Hs,
  },
  se = { bg: "bg-layer3", img: "grayscale" },
  pe = { selected: { bg: "bg-[#565B65]", img: "" }, unselected: se },
  ge = [
    "bg-[#653120]",
    "bg-[#653120]",
    "bg-[#0e7a3d]",
    "bg-[#eb9106]",
    "bg-[#c16959]",
    "bg-[#690ee0]",
  ],
  Lt = [0, 2, 8, 22, 38, 70],
  Xs = {
    [q.Fiat]: [
      { imgSrc: ue.switcher1_active, classMap: pe, value: 0 },
      { imgSrc: ue.switcher1_active, classMap: pe, value: 1 },
      { classMap: pe, imgSrc: ue.switcher1_active, value: 2 },
      { classMap: pe, imgSrc: ue.switcher2_active, value: 3 },
      { classMap: pe, imgSrc: ue.switcher2_active, value: 4 },
      { classMap: pe, imgSrc: ue.switcher3_active, value: 5 },
    ],
    [q.Crypto]: [
      {
        imgSrc: de.spinSwitcher1_active,
        classMap: { selected: { bg: ge[0], img: "" }, unselected: se },
        value: 0,
      },
      {
        imgSrc: de.spinSwitcher1_active,
        classMap: { selected: { bg: ge[1], img: "" }, unselected: se },
        value: 1,
      },
      {
        imgSrc: de.spinSwitcher1_active,
        classMap: { selected: { bg: ge[2], img: "" }, unselected: se },
        value: 2,
      },
      {
        imgSrc: de.spinSwitcher2_active,
        classMap: { selected: { bg: ge[3], img: "" }, unselected: se },
        value: 3,
      },
      {
        imgSrc: de.spinSwitcher2_active,
        classMap: { selected: { bg: ge[4], img: "" }, unselected: se },
        value: 4,
      },
      {
        imgSrc: de.spinSwitcher3_active,
        classMap: { selected: { bg: ge[5], img: "" }, unselected: se },
        value: 5,
      },
    ],
  },
  He = () => ({
    fiat: {
      spin: M.spin_core_new_user,
      centerText: Y.fiatSpinText,
      spinSelect: F.point_fiat,
      center: N.spin_center_fiat,
      spinLight: ee.newUserSpinLight,
      hand: N.spin_hand,
    },
    crypto: {
      spin: M.spin_core_new_user,
      centerText: Y.cryptoSpinText,
      spinSelect: F.point_crypto,
      center: N.spin_center_crypto,
      spinLight: ee.newUserSpinLight,
      hand: N.spin_hand,
    },
    japan0: {
      spin: M.spin_japan,
      center: N.spin_center_japan,
      banner: V.japan_banner_bronze,
      spinSelect: F.point_japan,
      spinFlower: M.spin_japan_flower,
    },
    japan1: {
      spin: M.spin_japan,
      center: N.spin_center_japan,
      banner: V.japan_banner_bronze,
      spinSelect: F.point_japan,
      spinFlower: M.spin_japan_flower,
    },
    japan2: {
      spin: M.spin_japan,
      center: N.spin_center_japan,
      banner: V.japan_banner_silver,
      spinSelect: F.point_japan,
      spinFlower: M.spin_japan_flower,
    },
    japan3: {
      spin: M.spin_japan,
      center: N.spin_center_japan,
      banner: V.japan_banner_gold,
      spinSelect: F.point_japan,
      spinFlower: M.spin_japan_flower,
    },
    japan4: {
      spin: M.spin_japan,
      center: N.spin_center_japan,
      banner: V.japan_banner_platinum,
      spinSelect: F.point_japan,
      spinFlower: M.spin_japan_flower,
    },
    japan5: {
      spin: M.spin_japan,
      center: N.spin_center_japan,
      banner: V.japan_banner_diamond,
      spinSelect: F.point_japan,
      spinFlower: M.spin_japan_flower,
    },
    0: {
      banner: V.banner_bronze,
      center: N.spin_center1,
      spin: M.spin_bronze,
      centerText: Y.luckSpin,
      spinSelect: F.point_bronze,
      spinLight: ee.spinLight,
    },
    1: {
      banner: V.banner_bronze,
      center: N.spin_center1,
      spin: M.spin_bronze,
      centerText: Y.luckSpin,
      spinSelect: F.point_bronze,
      spinLight: ee.spinLight,
    },
    2: {
      banner: V.banner_silver,
      center: N.spin_center2,
      spin: M.spin_silver,
      centerText: Y.luckSpin,
      spinSelect: F.point_silver,
      spinLight: ee.spinLight,
    },
    3: {
      banner: V.banner_gold,
      center: N.spin_center3,
      spin: M.spin_gold,
      centerText: Y.superSpin,
      spinSelect: F.point_gold,
      spinLight: ee.spinLight,
    },
    4: {
      banner: V.banner_platinum,
      center: N.spin_center4,
      spin: M.spin_platinum,
      centerText: Y.superSpin,
      spinSelect: F.point_platinum,
      spinLight: ee.spinLight,
    },
    5: {
      banner: V.banner_diamond,
      center: N.spin_center5,
      spin: M.spin_diamond,
      centerText: Y.megaSpin,
      spinSelect: F.point_diamond,
      spinLight: ee.spinLight,
    },
  }),
  me = () => Ve.bonusCurrencyName === "BRLFIAT",
  Qs = () => ({
    0: {
      banner: me() ? U.br_banner1 : U.banner1,
      fiatBox: oe.fiatBox,
      fiatJoyStick: ce.hand,
    },
    1: {
      banner: me() ? U.br_banner1 : U.banner1,
      fiatBox: oe.fiatBox,
      fiatJoyStick: ce.hand,
    },
    2: {
      banner: me() ? U.br_banner2 : U.banner2,
      fiatBox: oe.fiatBox,
      fiatJoyStick: ce.hand,
    },
    3: {
      banner: me() ? U.br_banner3 : U.banner3,
      fiatBox: oe.fiatBox,
      fiatJoyStick: ce.hand,
    },
    4: {
      banner: me() ? U.br_banner4 : U.banner4,
      fiatBox: oe.fiatBox,
      fiatJoyStick: ce.hand,
    },
    5: {
      banner: me() ? U.br_banner5 : U.banner5,
      fiatBox: oe.fiatBox,
      fiatJoyStick: ce.hand,
    },
  });
var Ks = j('<img class=h-[18.56rem] alt="">'),
  Ys = j("<img>");
const pt = (n, e, r) => {
    const [t, s] = O(null);
    return (
      Ye(() => {
        const i = t();
        if (i) {
          let g = i.src;
          W.to(i, {
            duration: r / 1e3,
            repeat: -1,
            repeatDelay: r / 1e3,
            yoyo: !0,
            onRepeat: () => {
              i.src = g = g === e ? n : e;
            },
          }),
            Ee(() => {
              W.killTweensOf(i);
            });
        }
      }),
      (() => {
        var i = Ks();
        return te(s, i), I(i, "src", n), i;
      })()
    );
  },
  er = function (e) {
    return _(xt, {
      get children() {
        return [
          _(we, {
            get when() {
              return e.lightType === 0;
            },
            get children() {
              return pt(ve.light2, ve.light3, 1e3);
            },
          }),
          _(we, {
            get when() {
              return e.lightType === 1;
            },
            get children() {
              var r = Ys();
              return z(() => I(r, "src", ve.light2)), r;
            },
          }),
          _(we, {
            get when() {
              return e.lightType === 2;
            },
            get children() {
              return pt(ve.light4, ve.light5, 100);
            },
          }),
        ];
      },
    });
  },
  tr = [
    {
      filename: "1.png",
      frame: { x: 1, y: 1, w: 19, h: 77 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 0, w: 19, h: 77 },
      sourceSize: { w: 19, h: 115 },
    },
    {
      filename: "2.png",
      frame: { x: 1, y: 80, w: 19, h: 66 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 11, w: 19, h: 66 },
      sourceSize: { w: 19, h: 115 },
    },
    {
      filename: "3.png",
      frame: { x: 1, y: 148, w: 19, h: 54 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 23, w: 19, h: 54 },
      sourceSize: { w: 19, h: 115 },
    },
    {
      filename: "4.png",
      frame: { x: 1, y: 252, w: 19, h: 39 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 38, w: 19, h: 39 },
      sourceSize: { w: 19, h: 115 },
    },
    {
      filename: "5.png",
      frame: { x: 1, y: 362, w: 19, h: 24 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 53, w: 19, h: 24 },
      sourceSize: { w: 19, h: 115 },
    },
    {
      filename: "6.png",
      frame: { x: 1, y: 388, w: 19, h: 22 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 64, w: 19, h: 22 },
      sourceSize: { w: 19, h: 115 },
    },
    {
      filename: "7.png",
      frame: { x: 1, y: 332, w: 19, h: 28 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 69, w: 19, h: 28 },
      sourceSize: { w: 19, h: 115 },
    },
    {
      filename: "8.png",
      frame: { x: 1, y: 293, w: 19, h: 37 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 69, w: 19, h: 37 },
      sourceSize: { w: 19, h: 115 },
    },
    {
      filename: "9.png",
      frame: { x: 1, y: 204, w: 19, h: 46 },
      rotated: !1,
      trimmed: !0,
      spriteSourceSize: { x: 0, y: 69, w: 19, h: 46 },
      sourceSize: { w: 19, h: 115 },
    },
  ],
  jt = (n) =>
    Promise.allSettled(
      n.map(
        (e) =>
          new Promise((r, t) => {
            const s = new Image();
            (s.src = e),
              (s.onload = () => {
                r(s);
              }),
              (s.onerror = () =>
                t(new Error(`Failed to load image from ${e}`)));
          })
      )
    );
var nr = j("<div class=absolute>"),
  sr = j('<div class="flex flex-col">'),
  rr = j(
    '<div class="flex flex-1 items-center justify-center"><div class="relative flex w-full items-center justify-center"><img class=w-full><div class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center"><div class="relative flex h-11 w-11 flex-col items-center justify-center"><img class=w-[1.5rem]><img class="absolute bottom-0 left-0 right-0 top-0 z-10"></div><div class="flex items-center gap-x-1"><span class="text-pretty text-sm font-semibold"></span><span class="text-2xl font-extrabold italic text-primary">'
  ),
  ar = j('<img class="relative -top-4 object-fill">'),
  ir = j(
    '<div class="relative -top-8"><div class=absolute></div><img class=object-fill><div class="absolute left-[23%] top-[22%] z-20 h-[33%] w-44 overflow-hidden"></div><div class="absolute right-[1.5rem] top-[2rem] z-20">'
  ),
  lr = j('<div class="h-[26rem] w-[23rem]">');
const or = (n) => {
  const e = et({}, n),
    [r, t] = O(0),
    [s, i] = O(null),
    [g] = Ke(
      () => e.spinLayout,
      () => {
        const f = Qs()[e.spinLayout];
        return jt(Object.values(f)).then(() => f);
      }
    ),
    m = () => {
      const [f, p] = O(null),
        h = ie(() =>
          tr.map((w) => {
            const { frame: c, spriteSourceSize: l } = w;
            return {
              width: `${(c.w / 16) * le.remScale}rem`,
              height: `${(c.h / 16) * le.remScale}rem`,
              left: `${(l.x / 16) * le.remScale}rem`,
              top: `${(l.y / 16) * le.remScale}rem`,
              backgroundPosition: `${(-c.x / 16) * le.remScale}rem ${
                (-c.y / 16) * le.remScale
              }rem`,
            };
          })
        ),
        v = () => ({ idx: 0, frames: h() }),
        u = ie(() => {
          const w = ae(v);
          return W.to(
            w,
            Object.assign(
              { yoyo: !0, repeat: 1, paused: !0 },
              {
                idx: w.frames.length - 1,
                duration: w.frames.length / 60,
                ease: Qt.easeNone,
                onUpdate() {
                  var l, a;
                  ae(f) &&
                    Object.assign(
                      (a = (l = ae(f)) == null ? void 0 : l.style) != null
                        ? a
                        : {},
                      w.frames[Math.round(w.idx)]
                    );
                },
              }
            )
          );
        }),
        d = () => {
          var w;
          e.disabled ||
            (u().restart(), (w = e.onSpinStart) == null || w.call(e));
        };
      return (() => {
        var w = nr();
        return (
          (w.$$click = d),
          te(p, w),
          z((c) => {
            var l;
            return Qe(
              w,
              ke(
                {
                  "background-image": `url(${
                    (l = g()) == null ? void 0 : l.fiatJoyStick
                  })`,
                },
                h()[0]
              ),
              c
            );
          }),
          w
        );
      })();
    },
    b = { angle: 0 },
    o = () => {
      const f = ie(() => e.rewards),
        p = () => {
          ae(() => {
            var $, C;
            const h =
                (C = ($ = e.rewards) == null ? void 0 : $.length) != null
                  ? C
                  : 0,
              v = b;
            if (h === 0 || e.winRewardIndex === void 0) return;
            const u = s(),
              d = e.winRewardIndex % h,
              w = W.timeline(),
              c = 5,
              l = 360 / h,
              a = d * l - (v.angle % 360),
              y = v.angle + a + c * 360,
              x = v.angle;
            w.to(v, 4.4, {
              angle: y,
              ease: Fe.create(
                "custom",
                "M0,0 C0,0 0.021,-0.003 0.06,0 0.09,0.004 0.12,0.056 0.146,0.08 0.174,0.106 0.207,0.156 0.228,0.182 0.254,0.214 0.281,0.256 0.304,0.284 0.327,0.313 0.362,0.361 0.382,0.394 0.403,0.431 0.449,0.489 0.472,0.526 0.574,0.69 0.472,0.52 0.564,0.678 0.588,0.718 0.626,0.794 0.65,0.828 0.67,0.858 0.685,0.877 0.71,0.902 0.731,0.923 0.747,0.936 0.772,0.952 0.793,0.966 0.811,0.97 0.835,0.982 0.872,1 0.938,1.001 0.966,1.001 1.01,1.001 1,1 1,1 "
              ),
              onUpdate() {
                const k = ((v.angle % 360) / 360) * u.clientHeight;
                W.set(u, { y: -k });
                const L = (v.angle - x) / (y - x),
                  T = L === 0 ? 0 : Math.sin(L * Math.PI) * 2;
                u.style.filter = `blur(${T}px)`;
              },
            }),
              w.to(
                {},
                {
                  delay: 0.25,
                  onComplete: () => {
                    t(2);
                  },
                }
              ),
              w.to(
                {},
                {
                  delay: 1,
                  onComplete: () => {
                    var k;
                    t(0),
                      W.killTweensOf(w),
                      (k = e.onSpinEnd) == null || k.call(e);
                  },
                }
              );
          });
        };
      return (
        Je(() => {
          e.winRewardIndex !== void 0 && p();
        }),
        (() => {
          var h = sr();
          return (
            te(i, h),
            S(
              h,
              _(he, {
                get each() {
                  return f();
                },
                children: (v) => {
                  function u(d) {
                    return d <= 3
                      ? Re.bg1
                      : d <= 7
                      ? Re.bg2
                      : d <= 11
                      ? Re.bg3
                      : Re.bg4;
                  }
                  return (() => {
                    var d = rr(),
                      w = d.firstChild,
                      c = w.firstChild,
                      l = c.nextSibling,
                      a = l.firstChild,
                      y = a.firstChild,
                      x = y.nextSibling,
                      $ = a.nextSibling,
                      C = $.firstChild,
                      k = C.nextSibling;
                    return (
                      S(
                        C,
                        _(lt, {
                          get fallback() {
                            return v.currencyName;
                          },
                          get children() {
                            return bt.getCurrencySymbol(v.currencyName);
                          },
                        })
                      ),
                      S(
                        k,
                        _(lt, {
                          get fallback() {
                            return v.amount;
                          },
                          get children() {
                            return Yt(v.amount);
                          },
                        })
                      ),
                      z(
                        (L) => {
                          var T = u(v.section),
                            A = dt.gold,
                            E = dt.light;
                          return (
                            T !== L.e && I(c, "src", (L.e = T)),
                            A !== L.t && I(y, "src", (L.t = A)),
                            E !== L.a && I(x, "src", (L.a = E)),
                            L
                          );
                        },
                        { e: void 0, t: void 0, a: void 0 }
                      ),
                      d
                    );
                  })();
                },
              })
            ),
            z((v) =>
              (v = f().length * 100 + "%") != null
                ? h.style.setProperty("height", v)
                : h.style.removeProperty("height")
            ),
            h
          );
        })()
      );
    };
  return (() => {
    var f = lr();
    return (
      S(
        f,
        _(Se, {
          get fallback() {
            return _(Ne, { class: "h-full" });
          },
          get children() {
            return [
              (() => {
                var p = ar();
                return (
                  z(() => {
                    var h;
                    return I(p, "src", (h = g()) == null ? void 0 : h.banner);
                  }),
                  p
                );
              })(),
              (() => {
                var p = ir(),
                  h = p.firstChild,
                  v = h.nextSibling,
                  u = v.nextSibling,
                  d = u.nextSibling;
                return (
                  S(
                    h,
                    _(er, {
                      get lightType() {
                        return r();
                      },
                    })
                  ),
                  S(u, o),
                  S(d, m),
                  z(() => {
                    var w;
                    return I(v, "src", (w = g()) == null ? void 0 : w.fiatBox);
                  }),
                  p
                );
              })(),
            ];
          },
        })
      ),
      f
    );
  })();
};
Be(["click"]);
var cr = j('<div><img class="animate-light size-full">'),
  ur = j('<img class="absolute w-[23rem]">'),
  Oe = j("<img>"),
  dr = j('<div class="h-full w-full"><div class="h-full w-full">'),
  pr = j('<img class="absolute inset-0 top-4">'),
  gr = j(
    '<img class="animate-spin-center-text absolute left-1/2 top-1/2 z-20 h-[3.5rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer">'
  ),
  gt = j("<div>"),
  mr = j(
    '<div class="flex flex-shrink-0 items-center justify-center"><div class="relative h-[21rem] w-[21rem]">'
  );
const fr = (n) => {
  const e = et({ spinType: "bronze" }, n),
    r = Jt(),
    [t] = Ke(
      () => e.spinLayout,
      () => {
        const d = He()[e.spinLayout];
        return jt(Object.values(d)).then(() => d);
      }
    ),
    [s, i] = O(null),
    [g, m] = O(null),
    [b, o] = O(null),
    [f, p] = O(null);
  Je(() => {
    if (r()) {
      const d = W.timeline();
      d.from(s(), { opacity: 0, scale: 0.3, rotate: -30 }),
        d.to(s(), { opacity: 1, scale: 1, rotate: 0 });
    }
  }),
    Ye(() => {
      We.loadSpinSounds();
    });
  let h;
  const v = (d) => {
      ae(() => {
        if (!e.rewards[d]) return;
        We.spinning();
        const c = f();
        h = W.timeline();
        function l(a) {
          let y = 360;
          if (a > 0 && c) {
            const x = c.style.transform.match(/\d+/),
              $ = x ? x[0] : 0,
              C = (Math.ceil(Number($) / 360) + 5) * 360;
            y = 360 - a * 22.5 + C;
          }
          return y;
        }
        h.to(c, { rotate: l(d), duration: 3.6 }),
          h.to(g(), { scale: 1.1, duration: 0.3, delay: 0.3 }),
          h.to(g(), { scale: 1, duration: 0.2 }),
          h.set(b(), { x: -20, scale: 1 }),
          h.to(b(), {
            x: 200,
            skewX: -25,
            scale: 3.4,
            duration: 0.5,
            delay: 0.3,
          }),
          h.to(g(), {
            scale: 1,
            onComplete: () => {
              var a;
              (a = e.onSpinEnd) == null || a.call(e);
            },
          });
      });
    },
    u = () => {
      if (String(e.spinLayout).startsWith("japan"))
        return {
          center: "ml-2",
          select: "translate-x-2",
          reward: "pr-10",
          light: "",
        };
      const d = { select: "translate-x-8" };
      return e.spinLayout === "crypto" || e.spinLayout === "fiat"
        ? Pe(ke({}, d), {
            light: "-inset-1",
            reward: e.spinLayout === "crypto" ? "pr-8" : "pr-5",
          })
        : Pe(ke({}, d), { light: "inset-0", reward: "pr-8" });
    };
  return (
    Ee(() => {
      h == null || h.kill();
    }),
    Je(() => {
      e.winRewardIndex !== void 0 && v(e.winRewardIndex);
    }),
    (() => {
      var d = mr(),
        w = d.firstChild;
      return (
        S(
          w,
          _(Se, {
            get fallback() {
              return _(Ne, { class: "h-full" });
            },
            get children() {
              return [
                (() => {
                  var c = dr(),
                    l = c.firstChild;
                  return (
                    te(i, c),
                    te(p, l),
                    S(
                      l,
                      _(he, {
                        get each() {
                          return e.rewards;
                        },
                        children: (a, y) => {
                          const x = {
                            transform: `translateY(-50%) rotate(${
                              y() * 22.5
                            }deg)`,
                          };
                          return (() => {
                            var $ = gt();
                            return (
                              S($, () => n.renderReward(a)),
                              z(
                                (C) => {
                                  var k = B(
                                      "absolute top-1/2 z-20 flex w-full -translate-y-1/2 items-center justify-end font-semibold",
                                      u().reward
                                    ),
                                    L = x;
                                  return (
                                    k !== C.e && J($, (C.e = k)),
                                    (C.t = Qe($, L, C.t)),
                                    C
                                  );
                                },
                                { e: void 0, t: void 0 }
                              ),
                              $
                            );
                          })();
                        },
                      }),
                      null
                    ),
                    S(
                      l,
                      _(G, {
                        get when() {
                          var a;
                          return (a = t()) == null ? void 0 : a.spinLight;
                        },
                        get children() {
                          var a = cr(),
                            y = a.firstChild;
                          return (
                            te(o, y),
                            z(
                              (x) => {
                                var k;
                                var $ = B("absolute z-20", u().light),
                                  C = (k = t()) == null ? void 0 : k.spinLight;
                                return (
                                  $ !== x.e && J(a, (x.e = $)),
                                  C !== x.t && I(y, "src", (x.t = C)),
                                  x
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            a
                          );
                        },
                      }),
                      null
                    ),
                    S(
                      l,
                      _(G, {
                        get when() {
                          var a;
                          return (a = t()) == null ? void 0 : a.spin;
                        },
                        get children() {
                          var a = ur();
                          return (
                            z(() => {
                              var y;
                              return I(
                                a,
                                "src",
                                (y = t()) == null ? void 0 : y.spin
                              );
                            }),
                            a
                          );
                        },
                      }),
                      null
                    ),
                    S(
                      c,
                      _(G, {
                        get when() {
                          var a;
                          return (a = t()) == null ? void 0 : a.spinSelect;
                        },
                        get children() {
                          var a = Oe();
                          return (
                            te(m, a),
                            z(
                              (y) => {
                                var C;
                                var x = B(
                                    "absolute right-0 top-1/2 z-30 w-40 -translate-y-1/2",
                                    u().select
                                  ),
                                  $ = (C = t()) == null ? void 0 : C.spinSelect;
                                return (
                                  x !== y.e && J(a, (y.e = x)),
                                  $ !== y.t && I(a, "src", (y.t = $)),
                                  y
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            a
                          );
                        },
                      }),
                      null
                    ),
                    c
                  );
                })(),
                _(G, {
                  get when() {
                    var c;
                    return (c = t()) == null ? void 0 : c.spinFlower;
                  },
                  get children() {
                    var c = pr();
                    return (
                      z(() => {
                        var l;
                        return I(
                          c,
                          "src",
                          (l = t()) == null ? void 0 : l.spinFlower
                        );
                      }),
                      c
                    );
                  },
                }),
                (() => {
                  var c = gt();
                  return (
                    (c.$$click = () => {
                      var l;
                      !e.disabled && ((l = e.onSpinStart) == null || l.call(e));
                    }),
                    S(
                      c,
                      _(G, {
                        get when() {
                          var l;
                          return (
                            ((l = t()) == null ? void 0 : l.hand) &&
                            !n.winRewardIndex
                          );
                        },
                        get children() {
                          var l = Oe();
                          return (
                            te((a) => {
                              W.to(a, { scale: 1.2, yoyo: !0, repeat: 1 / 0 }),
                                Ee(() => W.killTweensOf(a));
                            }, l),
                            z(
                              (a) => {
                                var $;
                                var y = B(
                                    "absolute left-1/2 top-1/2 z-30 w-[6.25rem] translate-y-6 transition-all"
                                  ),
                                  x = ($ = t()) == null ? void 0 : $.hand;
                                return (
                                  y !== a.e && J(l, (a.e = y)),
                                  x !== a.t && I(l, "src", (a.t = x)),
                                  a
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            l
                          );
                        },
                      }),
                      null
                    ),
                    S(
                      c,
                      _(G, {
                        get when() {
                          var l;
                          return (l = t()) == null ? void 0 : l.center;
                        },
                        get children() {
                          var l = Oe();
                          return (
                            z(
                              (a) => {
                                var $, C;
                                var y = B(
                                    "absolute left-1/2 top-1/2 z-20 w-[6rem] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:w-[6.5rem]",
                                    ($ = u()) == null ? void 0 : $.center
                                  ),
                                  x = (C = t()) == null ? void 0 : C.center;
                                return (
                                  y !== a.e && J(l, (a.e = y)),
                                  x !== a.t && I(l, "src", (a.t = x)),
                                  a
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            l
                          );
                        },
                      }),
                      null
                    ),
                    S(
                      c,
                      _(G, {
                        get when() {
                          var l;
                          return (l = t()) == null ? void 0 : l.centerText;
                        },
                        get children() {
                          var l = gr();
                          return (
                            z(() => {
                              var a;
                              return I(
                                l,
                                "src",
                                (a = t()) == null ? void 0 : a.centerText
                              );
                            }),
                            l
                          );
                        },
                      }),
                      null
                    ),
                    z(() => J(c, B("group cursor-pointer"))),
                    c
                  );
                })(),
              ];
            },
          })
        ),
        d
      );
    })()
  );
};
Be(["click"]);
var hr = j(
  '<div><img class=w-1/2><span class="text-center text-sm font-semibold text-secondary">'
);
const br = (n) =>
  (() => {
    var e = hr(),
      r = e.firstChild,
      t = r.nextSibling;
    return (
      Ze(
        e,
        Xe(n, {
          get class() {
            return B("flex flex-col items-center justify-center", n.class);
          },
        }),
        !1,
        !0
      ),
      S(t, () => n.children),
      z(() =>
        I(
          r,
          "src",
          _t.darken
            ? Ue.assets("common/empty.png")
            : Ue.assets("common/empty_w.png")
        )
      ),
      e
    );
  })();
var _r = j(
    '<div><div class="flex flex-grow flex-col items-center justify-center rounded-lg bg-layer2 p-3 backdrop-blur-lg"><span class="text-nowrap text-xs font-semibold text-secondary"></span></div><div class="relative flex w-[13.75rem] items-center justify-center overflow-hidden rounded-lg bg-layer2 backdrop-blur-xl">'
  ),
  vr = j('<div class="absolute inset-0 h-full w-full p-3">'),
  wr = j(
    '<div class="flex flex-grow flex-col text-sm font-semibold"><span class=""></span><div class=text-secondary><span>: </span><span class=text-brand>'
  ),
  xr = j(
    '<div class="flex flex-grow-0 items-center justify-center gap-x-2"><div class="h-7 w-7 overflow-hidden rounded-full"><img></div><div class="flex cursor-pointer items-center">'
  );
const yr = (n) => {
    const [e] = re.spinFeedResource(),
      [r, t] = O(0);
    let s;
    return (
      Ye(() => {
        s = setInterval(() => {
          t((i) => (i + 1) % e().updates.length);
        }, 3e3);
      }),
      Ee(() => {
        clearInterval(s);
      }),
      (() => {
        var i = _r(),
          g = i.firstChild,
          m = g.firstChild,
          b = g.nextSibling;
        return (
          Ze(
            i,
            Xe(n, {
              get class() {
                return B(n.class, "flex gap-x-1 rounded-xl bg-layer4 p-1");
              },
            }),
            !1,
            !0
          ),
          S(m, () => R("SPIN BONUS TOTAL")),
          S(
            g,
            _(Kt, {
              class: "text-lg font-extrabold text-warning",
              get number() {
                return e().totalBonus;
              },
              children: (o) => bt.printCurrency(new vt(o)),
            }),
            null
          ),
          S(
            b,
            _(G, {
              get when() {
                return e().updates.length > 0;
              },
              get fallback() {
                return _(br, { class: "w-32" });
              },
              get children() {
                return _(qt, {
                  name: "fadeDown",
                  get children() {
                    return _(he, {
                      get each() {
                        return e().updates;
                      },
                      children: (o, f) =>
                        _(Ae, {
                          get when() {
                            return r() === f();
                          },
                          get children() {
                            var p = vr();
                            return (
                              mt(p, "click", n.onSpinFeed, !0),
                              S(p, _(Sr, o)),
                              p
                            );
                          },
                        }),
                    });
                  },
                });
              },
            })
          ),
          i
        );
      })()
    );
  },
  Sr = (n) =>
    (() => {
      var e = xr(),
        r = e.firstChild,
        t = r.firstChild,
        s = r.nextSibling;
      return (
        S(
          e,
          _(ne, {
            get currencyName() {
              return n.currencyName;
            },
            get children() {
              var i = wr(),
                g = i.firstChild,
                m = g.nextSibling,
                b = m.firstChild,
                o = b.firstChild,
                f = b.nextSibling;
              return (
                S(g, () => n.username),
                S(b, () => R("Win"), o),
                S(
                  f,
                  _(ne.Amount, {
                    get amount() {
                      return n.amount;
                    },
                  })
                ),
                i
              );
            },
          }),
          s
        ),
        S(
          s,
          _(qe, {
            name: "singleSmallArrow",
            class: "rotate-180 text-primary",
            size: 20,
          })
        ),
        z(() => I(t, "src", Ue.avatar(n.userId))),
        e
      );
    })();
Be(["click"]);
var $r = j(
    '<div class="flex h-16 w-full gap-x-2"><div></div><div class="flex flex-grow items-center rounded-xl bg-layer4"><div><img class="h-6 w-4/5"><span class="absolute top-[0.75rem] text-base font-extrabold leading-none text-[#BD5F16]"></span><span class="text-sm font-extrabold text-alw_white"> <!> '
  ),
  Cr = j("<div><img>");
const Lr = (n) => {
  const e = et({ spinCurrencyType: q.Crypto }, n),
    r = () => Xs[e.spinCurrencyType],
    t = () => e.spinLevelOptions.map((f) => r()[f]),
    s = (f) => () => {
      n.disabled || n.onSelectedLevelChange(f);
    },
    i = yt(() => e.selectedLevel),
    g = ie(() => t().find((f) => i(f.value))),
    m = () => Lt[g().value],
    b = () => Ge.level(m()),
    o = () =>
      [
        "None",
        "Bronze",
        "Silver",
        "Gold",
        "Platinum",
        "Platinum",
        "Diamond",
        "Diamond",
        "Diamond",
      ][b().vipTypeNum];
  return (() => {
    var f = $r(),
      p = f.firstChild,
      h = p.nextSibling,
      v = h.firstChild,
      u = v.firstChild,
      d = u.nextSibling,
      w = d.nextSibling,
      c = w.firstChild,
      l = c.nextSibling;
    return (
      l.nextSibling,
      S(
        p,
        _(he, {
          get each() {
            return t();
          },
          children: (a) => {
            const y = () => i(a.value),
              x = () => (y() ? a.classMap.selected : a.classMap.unselected);
            return (() => {
              var $ = Cr(),
                C = $.firstChild;
              return (
                mt($, "click", s(a.value), !0),
                z(
                  (k) => {
                    var L = B(
                        "flex h-full w-16 cursor-pointer items-center justify-center rounded-lg p-1",
                        x().bg
                      ),
                      T = B(
                        n.spinCurrencyType == q.Fiat ? "w-full" : "h-full",
                        x().img
                      ),
                      A = a.imgSrc;
                    return (
                      L !== k.e && J($, (k.e = L)),
                      T !== k.t && J(C, (k.t = T)),
                      A !== k.a && I(C, "src", (k.a = A)),
                      k
                    );
                  },
                  { e: void 0, t: void 0, a: void 0 }
                ),
                $
              );
            })();
          },
        })
      ),
      S(d, o),
      S(w, () => R("LV"), c),
      S(w, m, l),
      S(w, () => R("or Above"), null),
      z(
        (a) => {
          var y = B(
              "flex items-center gap-x-1 rounded-xl bg-layer4 px-1 py-1",
              n.disabled ? "cursor-not-allowed opacity-50" : ""
            ),
            x = B(
              g().classMap.selected.bg,
              "relative flex h-full w-full flex-col items-center justify-center rounded-xl"
            ),
            $ = Zs.vipBadge;
          return (
            y !== a.e && J(p, (a.e = y)),
            x !== a.t && J(v, (a.t = x)),
            $ !== a.a && I(u, "src", (a.a = $)),
            a
          );
        },
        { e: void 0, t: void 0, a: void 0 }
      ),
      f
    );
  })();
};
Be(["click"]);
var jr = j('<img class="absolute left-0 right-0 top-0 -z-10 h-auto w-full">'),
  kr = j('<div class="flex flex-col items-center justify-center px-4">'),
  Tr = j(
    '<div class="relative z-0"><div class="relative flex w-full items-center justify-between px-4 py-4"><span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">'
  ),
  zr = j("<img>"),
  Ir = j("<div>"),
  Mr = j(
    '<div class="flex items-center gap-x-1 text-alw_white"><span class=text-base>'
  );
const kt = (n, e = 7) => {
    const {
      num: r,
      exp: t,
      unit: s,
    } = De.getExponential(new vt(n).toNumber(), e);
    let i = "";
    return (
      t > 1
        ? (i = r.toFixed(2) + s)
        : r < 1
        ? (i = De.clearFloatZero(r.toFixed(e)))
        : (i = De.clearFloatZero(r.toPrecision(e + 1))),
      i
    );
  },
  Rr = () => {
    const [n] = re.spinRewardSettingsResource(),
      [e] = re.userSpinConfigResource(),
      r = wt();
    let t;
    const s = () => {
        var g;
        return (g = n()) != null && g.fiat ? q.Fiat : q.Crypto;
      },
      i = () => (s() === q.Crypto ? _t.lang === "ja" : !1);
    return _(Gt, {
      class: "spin-dialog",
      get children() {
        var g = Tr(),
          m = g.firstChild,
          b = m.firstChild;
        return (
          S(
            g,
            _(Ae, {
              get when() {
                return i();
              },
              get children() {
                var o = jr();
                return z(() => I(o, "src", M.spin_japan_background)), o;
              },
            }),
            m
          ),
          S(
            m,
            _(fe, {
              onClick: sn,
              size: "s",
              class:
                "bg-[#24EE8933] py-0 text-sm font-semibold leading-none text-brand backdrop-blur-lg",
              get children() {
                return _(qe, { name: "exchange", size: 24 });
              },
            }),
            b
          ),
          S(b, () => R("Lucky Spin")),
          S(
            m,
            _(fe, {
              onClick: () => r(-1),
              class: "size-8 bg-layer4",
              get children() {
                return _(qe, {
                  name: "delete",
                  class: "text-secondary",
                  size: 20,
                });
              },
            }),
            null
          ),
          S(
            g,
            _(Se, {
              get fallback() {
                return _(Ne, { class: "flex-grow" });
              },
              get children() {
                var o = kr();
                return (
                  S(
                    o,
                    _(Se, {
                      get fallback() {
                        return _(Ne, { class: "flex-grow" });
                      },
                      get children() {
                        return _(G, {
                          get when() {
                            return Pt(() => !!e())() && n();
                          },
                          children: (f) => {
                            const [p, h] = O(e().level),
                              v = yt(p),
                              [u, d] = O(!1),
                              w = () => {
                                const c = e().level;
                                return [
                                  Math.max(0, Math.min(2, c)),
                                  Math.max(3, Math.min(4, c)),
                                  Math.max(5, Math.min(5, c)),
                                ];
                              };
                            return [
                              _(Lr, {
                                get selectedLevel() {
                                  return p();
                                },
                                onSelectedLevelChange: h,
                                get spinLevelOptions() {
                                  return w();
                                },
                                get spinCurrencyType() {
                                  return s();
                                },
                                get disabled() {
                                  return u();
                                },
                              }),
                              _(he, {
                                get each() {
                                  return w();
                                },
                                children: (c) => {
                                  const l = () =>
                                      e().leftTimes <= 0 ||
                                      u() ||
                                      c !== e().level,
                                    [a, y] = O(),
                                    x = ie(() => {
                                      var L, T;
                                      return (T =
                                        (L = n()) == null
                                          ? void 0
                                          : L.sections[c]) != null
                                        ? T
                                        : [];
                                    }),
                                    $ = () =>
                                      ae(
                                        () => (
                                          d(!0),
                                          re.mutations
                                            .requestSpin({
                                              version: n().version,
                                              level: c,
                                            })
                                            .then((L) => {
                                              const A = x().findIndex(
                                                (E) =>
                                                  E.section === L.hitSection
                                              );
                                              return (
                                                y(A),
                                                (t = L.trackId),
                                                Ht(() => {
                                                  ot.refetchResource(
                                                    ot.bonusDashboardResource
                                                      .name
                                                  ),
                                                    re.refetchResource(
                                                      re.userSpinConfigResource
                                                        .name
                                                    );
                                                })
                                              );
                                            })
                                            .catch((L) => {
                                              d(!1), St(L);
                                            })
                                        )
                                      ),
                                    C = () =>
                                      ae(() => {
                                        if ((d(!1), a() !== void 0)) {
                                          const T = x()[a()];
                                          y(void 0),
                                            pn({
                                              rewardAmount: T.amount,
                                              rewardCurrency: T.currencyName,
                                              spinLevel: c,
                                              trackId: t,
                                            });
                                        }
                                      }),
                                    k = () => {
                                      if (e().leftTimes > 0)
                                        return (
                                          R("Spin Now") + ` (${e().leftTimes})`
                                        );
                                      {
                                        const L = Lt[c],
                                          T = Ve.vipLevel >= L,
                                          A = T
                                            ? Ge.level(Ve.vipLevel + 1)
                                            : Ge.level(L),
                                          E = A.vipType + " " + A.vipLevel;
                                        return T
                                          ? R("Next spin at") + " " + E
                                          : R("Available at:") + " " + E;
                                      }
                                    };
                                  return _(Ae, {
                                    get when() {
                                      return v(c);
                                    },
                                    get children() {
                                      return _(Ar, {
                                        get spinType() {
                                          return s();
                                        },
                                        get spinLayout() {
                                          return i() && s() === q.Crypto
                                            ? `japan${c}`
                                            : c;
                                        },
                                        get winRewardIndex() {
                                          return a();
                                        },
                                        get rewards() {
                                          return x();
                                        },
                                        onSpinEnd: C,
                                        onSpinStart: $,
                                        get disabled() {
                                          return l();
                                        },
                                        get children() {
                                          return k();
                                        },
                                      });
                                    },
                                  });
                                },
                              }),
                            ];
                          },
                        });
                      },
                    })
                  ),
                  o
                );
              },
            }),
            null
          ),
          z((o) =>
            Qe(
              g,
              i()
                ? {
                    background:
                      "linear-gradient(187deg, #904863 -1.38%, rgba(144, 72, 99, 0.00) 66.49%)",
                  }
                : {},
              o
            )
          ),
          g
        );
      },
    });
  },
  Ar = (n) => {
    const e = wt();
    return [
      _(xt, {
        get children() {
          return [
            _(we, {
              get when() {
                return n.spinType === q.Crypto;
              },
              get children() {
                return [
                  _(fr, {
                    get winRewardIndex() {
                      return n.winRewardIndex;
                    },
                    get spinLayout() {
                      return n.spinLayout;
                    },
                    get onSpinStart() {
                      return n.onSpinStart;
                    },
                    get rewards() {
                      return n.rewards;
                    },
                    get onSpinEnd() {
                      return n.onSpinEnd;
                    },
                    get disabled() {
                      return n.disabled;
                    },
                    renderReward: (r) =>
                      _(ne, {
                        get currencyName() {
                          return r.currencyName;
                        },
                        get children() {
                          var t = Mr(),
                            s = t.firstChild;
                          return (
                            s.style.setProperty(
                              "text-shadow",
                              "0px 2px 0px rgba(0,0,0,.3)"
                            ),
                            S(s, () => kt(r.amount, 7)),
                            S(t, _(ne.Icon, { size: 24 }), null),
                            t
                          );
                        },
                      }),
                  }),
                  _(Ae, {
                    get when() {
                      return He()[n.spinLayout].banner;
                    },
                    get children() {
                      var r = zr();
                      return (
                        z(
                          (t) => {
                            var s = B(
                                "relative z-10 h-24",
                                String(n.spinLayout).startsWith("japan")
                                  ? "-mt-14 mb-6"
                                  : "-mt-12 mb-3"
                              ),
                              i = He()[n.spinLayout].banner;
                            return (
                              s !== t.e && J(r, (t.e = s)),
                              i !== t.t && I(r, "src", (t.t = i)),
                              t
                            );
                          },
                          { e: void 0, t: void 0 }
                        ),
                        r
                      );
                    },
                  }),
                ];
              },
            }),
            _(we, {
              get when() {
                return n.spinType === q.Fiat;
              },
              get children() {
                return _(or, {
                  get winRewardIndex() {
                    return n.winRewardIndex;
                  },
                  get spinLayout() {
                    return n.spinLayout;
                  },
                  get onSpinStart() {
                    return n.onSpinStart;
                  },
                  get rewards() {
                    return n.rewards;
                  },
                  get onSpinEnd() {
                    return n.onSpinEnd;
                  },
                  get disabled() {
                    return n.disabled;
                  },
                });
              },
            }),
          ];
        },
      }),
      (() => {
        var r = Ir();
        return (
          S(
            r,
            _(fe, {
              class: "w-full",
              type: "brand",
              get disabled() {
                return n.disabled;
              },
              get onClick() {
                return n.onSpinStart;
              },
              get children() {
                return n.children;
              },
            }),
            null
          ),
          S(r, _(yr, { onSpinFeed: () => e("/spin/leaderboard") }), null),
          z(() => J(r, B("flex w-full flex-grow flex-col gap-y-6"))),
          r
        );
      })(),
    ];
  },
  Yr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Rr, formatSpinAmount: kt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { fr as S, yr as a, V as b, kt as f, Yr as i };
