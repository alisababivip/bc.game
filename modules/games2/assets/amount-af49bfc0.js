var q = Object.defineProperty,
  A = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
  B = Object.prototype.propertyIsEnumerable;
var R = (e, n, t) =>
    n in e
      ? q(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t),
  j = (e, n) => {
    for (var t in n || (n = {})) K.call(n, t) && R(e, t, n[t]);
    if (P) for (var t of P(n)) B.call(n, t) && R(e, t, n[t]);
    return e;
  },
  C = (e, n) => A(e, I(n));
var E = (e, n, t) =>
  new Promise((r, o) => {
    var c = (i) => {
        try {
          l(t.next(i));
        } catch (u) {
          o(u);
        }
      },
      s = (i) => {
        try {
          l(t.throw(i));
        } catch (u) {
          o(u);
        }
      },
      l = (i) => (i.done ? r(i.value) : Promise.resolve(i.value).then(c, s));
    l((t = t.apply(e, n)).next());
  });
import {
  af as J,
  au as L,
  D as a,
  K as H,
  h as G,
} from "./manifest-a234c8a0.js";
import { i as M, b as V, r as T } from "./isObject-d5c4896e.js";
var W = "[object AsyncFunction]",
  Q = "[object Function]",
  X = "[object GeneratorFunction]",
  Y = "[object Proxy]";
function Z(e) {
  if (!M(e)) return !1;
  var n = V(e);
  return n == Q || n == X || n == W || n == Y;
}
const v = T["__core-js_shared__"];
var z,
  D = (z = /[^.]+$/.exec((v && v.keys && v.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + z
    : "",
  ee = Function.prototype.toString;
function ne(e) {
  if (e != null) {
    try {
      return ee.call(e);
    } catch (n) {}
    try {
      return e + "";
    } catch (n) {}
  }
  return "";
}
var te = /^\[object .+?Constructor\]$/,
  re = Function.prototype,
  oe = Object.prototype,
  ce = re.toString,
  ae = oe.hasOwnProperty,
  se = RegExp(
    "^" +
      ce
        .call(ae)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function ue(e) {
  return !(!M(e) || ((n = e), D && D in n)) && (Z(e) ? se : te).test(ne(e));
  var n;
}
function U(e, n) {
  var t = (function (r, o) {
    return r == null ? void 0 : r[o];
  })(e, n);
  return ue(t) ? t : void 0;
}
const f = U(Object, "create");
var ie = Object.prototype.hasOwnProperty,
  le = Object.prototype.hasOwnProperty;
function d(e) {
  var n = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
function he(e, n) {
  return e === n || (e != e && n != n);
}
function y(e, n) {
  for (var t = e.length; t--; ) if (he(e[t][0], n)) return t;
  return -1;
}
(d.prototype.clear = function () {
  (this.__data__ = f ? f(null) : {}), (this.size = 0);
}),
  (d.prototype.delete = function (e) {
    var n = this.has(e) && delete this.__data__[e];
    return (this.size -= n ? 1 : 0), n;
  }),
  (d.prototype.get = function (e) {
    var n = this.__data__;
    if (f) {
      var t = n[e];
      return t === "__lodash_hash_undefined__" ? void 0 : t;
    }
    return ie.call(n, e) ? n[e] : void 0;
  }),
  (d.prototype.has = function (e) {
    var n = this.__data__;
    return f ? n[e] !== void 0 : le.call(n, e);
  }),
  (d.prototype.set = function (e, n) {
    var t = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (t[e] = f && n === void 0 ? "__lodash_hash_undefined__" : n),
      this
    );
  });
var de = Array.prototype.splice;
function p(e) {
  var n = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
(p.prototype.clear = function () {
  (this.__data__ = []), (this.size = 0);
}),
  (p.prototype.delete = function (e) {
    var n = this.__data__,
      t = y(n, e);
    return (
      !(t < 0) &&
      (t == n.length - 1 ? n.pop() : de.call(n, t, 1), --this.size, !0)
    );
  }),
  (p.prototype.get = function (e) {
    var n = this.__data__,
      t = y(n, e);
    return t < 0 ? void 0 : n[t][1];
  }),
  (p.prototype.has = function (e) {
    return y(this.__data__, e) > -1;
  }),
  (p.prototype.set = function (e, n) {
    var t = this.__data__,
      r = y(t, e);
    return r < 0 ? (++this.size, t.push([e, n])) : (t[r][1] = n), this;
  });
const me = U(T, "Map");
function _(e, n) {
  var t,
    r,
    o = e.__data__;
  return (
    (r = typeof (t = n)) == "string" ||
    r == "number" ||
    r == "symbol" ||
    r == "boolean"
      ? t !== "__proto__"
      : t === null
  )
    ? o[typeof n == "string" ? "string" : "hash"]
    : o.map;
}
function m(e) {
  var n = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
(m.prototype.clear = function () {
  (this.size = 0),
    (this.__data__ = { hash: new d(), map: new (me || p)(), string: new d() });
}),
  (m.prototype.delete = function (e) {
    var n = _(this, e).delete(e);
    return (this.size -= n ? 1 : 0), n;
  }),
  (m.prototype.get = function (e) {
    return _(this, e).get(e);
  }),
  (m.prototype.has = function (e) {
    return _(this, e).has(e);
  }),
  (m.prototype.set = function (e, n) {
    var t = _(this, e),
      r = t.size;
    return t.set(e, n), (this.size += t.size == r ? 0 : 1), this;
  });
function g(e, n) {
  if (typeof e != "function" || (n != null && typeof n != "function"))
    throw new TypeError("Expected a function");
  var t = function () {
    var r = arguments,
      o = n ? n.apply(this, r) : r[0],
      c = t.cache;
    if (c.has(o)) return c.get(o);
    var s = e.apply(this, r);
    return (t.cache = c.set(o, s) || c), s;
  };
  return (t.cache = new (g.Cache || m)()), t;
}
function Ne(e) {
  return J(e);
}
function Se(e, n) {
  const t = Object.entries(n);
  return t.length ? t.reduce((r, [o, c]) => C(j({}, r), { [c]: e[o] }), {}) : e;
}
function Fe(e) {
  return L.fromNumber(e);
}
g.Cache = m;
const Pe = (e) => {
    const n = {};
    for (const t in JSON.parse(e)) {
      const [r, o] = t.split("-").map(Number);
      n[o] || (n[o] = {}), (n[o][r] = JSON.parse(e)[t].map((c) => Number(c)));
    }
    return n;
  },
  Re = (e, n) => {
    const t = (r) => r.toLowerCase().replace("fiat", "");
    return t(e) === t(n);
  },
  je = (e = 0) => new Promise((n) => setTimeout(n, e)),
  pe = g(
    function (e, n, t) {
      return new Promise((r, o) => {
        const c = document.head || document.getElementsByTagName("head")[0],
          s = document.createElement("script");
        (s.async = !0),
          (s.src = e),
          t && (s.id = t),
          (s.charset = "utf8"),
          c.appendChild(s),
          (s.onload = () => {
            const l = n ? window[n] : null;
            c.removeChild(s), r(l);
          }),
          (s.onerror = (l) => {
            c.removeChild(s), pe.cache.delete(`${e}:${String(n)}`), o(l);
          });
      });
    },
    (e, n) => `${e}:${String(n)}`
  );
function Ce(e) {
  const n = document.createElement("input");
  document.body.appendChild(n);
  try {
    n.setAttribute("readonly", "readonly"),
      n.setAttribute("value", e),
      n.setSelectionRange(0, 99999),
      n.select(),
      document.execCommand("copy");
  } finally {
    document.body.removeChild(n);
  }
}
var x;
new URLSearchParams((x = globalThis.location) == null ? void 0 : x.search);
const Ee = (e) => e,
  ze = () => {
    const e = (Math.floor(100 * Math.random()) % 22) + 10;
    let n = "";
    for (let t = 0; t < e; t++)
      n += "ABCDEFGHJKMNPQRSTWXYZ012345678abcdefhijkmnprstwxyz"[
        Math.floor(100 * Math.random()) % 50
      ];
    return n;
  };
function De(e) {
  const n = e % 10,
    t = e % 100;
  return n === 1 && t !== 11
    ? e + "st"
    : n === 2 && t !== 12
    ? e + "nd"
    : n === 3 && t !== 13
    ? e + "rd"
    : e + "th";
}
const Oe =
    (e, n, t = !1) =>
    (r) => (
      t && (r < e[0] ? (r = e[0]) : r > e[1] && (r = e[1])),
      n[0] + ((r - e[0]) * (n[0] - n[1])) / (e[0] - e[1])
    ),
  $e = (e, n) => {
    const t = n.getTime() - e;
    return t <= 6e4
      ? "now"
      : t < 36e5
      ? Math.round(t / 6e4) + "m"
      : t < 864e5
      ? Math.round(t / 36e5) + "h"
      : t < 31536e6
      ? Math.round(t / 864e5) + "d"
      : Math.round(t / 31536e6) + "y";
  };
function xe(e) {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Me = (...n) =>
  E(void 0, [...n], function* (e = document.documentElement) {
    try {
      e.requestFullscreen
        ? yield e.requestFullscreen()
        : e.mozRequestFullScreen
        ? yield e.mozRequestFullScreen()
        : e.msRequestFullscreen
        ? yield e.msRequestFullscreen()
        : e.webkitRequestFullscreen && (yield e.webkitRequestFullScreen());
    } catch (t) {}
  });
function Te({ amount: e, decimal: n }) {
  const t =
    typeof e == "number" ? e : typeof e == "string" ? Number(e) : e.toNumber();
  return n ? new a(t).div(new a(10).toPower(n)).toNumber() : t;
}
const Ue = (e, n) => (t) => (t > n ? (t = n) : t < e && (t = e), t);
function ke(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const n = new a(e).toNumber();
    return isNaN(n), n;
  }
  return e === void 0
    ? NaN
    : e === null
    ? 0
    : typeof e == "object" && "toNumber" in e
    ? e.toNumber()
    : NaN;
}
const fe = (e) => e.toDecimalPlaces(0),
  O = (e, n) => {
    const t = e.usdPrice[n];
    return typeof t == "string" ? new a(t) : t || new a(1);
  },
  N = (e, n, t = "USD") => {
    const r = O(e, n.symbol),
      o = O(e, t);
    return new a(0).eq(o) ? new a(0) : n.amount.mul(r).div(o);
  },
  qe = (e, n, t) => {
    const r = e.currencyV2[t];
    return r ? new a(n.toString()).div(r.unitAmount) : new a(n.toString());
  },
  $ = [
    { lng: "en-US", code: "in", currency: "en-IN" },
    { lng: "id-Id", code: "id", currency: "id-ID" },
    { lng: "pt-BR", code: "br", currency: "pt-BR" },
    { lng: "ur-PK", code: "pk", currency: "ur-PK" },
    { lng: "en-US", code: "ng", currency: "en-NG" },
    { lng: "th-TH", code: "th", currency: "th-TH" },
    { lng: "es-ES", code: "cl", currency: "es-CL" },
    { lng: "es-ES", code: "es", currency: "es-ES" },
    { lng: "en-US", code: "us", currency: "en-US" },
    { lng: "sw-KE", code: "ke", currency: "sw-KE" },
    { lng: "en-US", code: "ph", currency: "en-PH" },
    { lng: "es-ES", code: "ar", currency: "es-AR" },
    { lng: "ko-KR", code: "kr", currency: "ko-KR" },
    { lng: "ja-JP", code: "jp", currency: "ja-JP" },
  ];
g(
  (e, n = 2, t = !1) => {
    const { currency: r } =
      ((o = e.countryCode), $.find((u) => u.code === o.toLowerCase()) || $[0]);
    var o;
    const c = e.currencyName.replace("FIAT", ""),
      s = Intl.NumberFormat(r, {
        style: "currency",
        currency: c === "USDT" ? "USD" : c,
        minimumFractionDigits: t ? n : 0,
        maximumFractionDigits: n,
      }),
      l = Intl.NumberFormat(r, {
        style: "currency",
        currency: c === "USDT" ? "USD" : c,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      }),
      i = (u) => {
        const w = u instanceof a ? u : new a(u || 0),
          h = Math.pow(10, 9);
        return new a(Math.floor(w.toNumber() * h) / h);
      };
    return (u, w) => {
      const h = w ? l : s,
        b = { amount: i(u.amount || 0), symbol: u.currency || c };
      if (u.max) {
        const k = { amount: i(u.max), symbol: b.symbol },
          S = N(e, b, c).toNumber(),
          F = N(e, k, c).toNumber();
        return typeof h.formatRange == "function"
          ? h.formatRange(S, F)
          : `${h.format(S)} - ${h.format(F)}`;
      }
      return h.format(N(e, b, c).toNumber());
    };
  },
  (e) => e.currencyName
);
const Ae = (e, n, t, r) =>
    r
      ? H.convertCurrency(
          new a(n),
          e.currencyName,
          G.setting.localeCurrencyName
        )
          .todp((t == null ? void 0 : t.decimal) || 2)
          .toString()
      : new a(n)
          .toFixed((t == null ? void 0 : t.decimal) || 2, a.ROUND_DOWN)
          .replace(/\.?0+$/, ""),
  Ie = (e, n) => {
    const t = typeof n == "string" ? n : n.symbol,
      r = e.currencyV2[t];
    if (r) return r;
    throw new Error(`Cant not find currency config by name: ${t}`);
  },
  Ke = (e, n) => {
    let t = e;
    return n.includes("FIAT") || (t = e.mul(100)), ge(t);
  },
  ye = new a(0),
  _e = new a(1),
  ge = (e) => {
    if (e.gt(1)) return new a(10).pow(String(fe(e)).length);
    if (e.lte(0)) return ye;
    {
      const n = e.toPrecision(1).toString().length - 2;
      return n <= 1 ? _e : new a(0.1).pow(n - 1);
    }
  };
export {
  Ae as A,
  p as L,
  me as M,
  U as a,
  m as b,
  Ce as c,
  Re as d,
  he as e,
  Ne as f,
  ze as g,
  Ie as h,
  Z as i,
  $e as j,
  Se as k,
  Ue as l,
  g as m,
  je as n,
  Oe as o,
  xe as p,
  Pe as q,
  Ee as r,
  Fe as s,
  ne as t,
  ke as u,
  qe as v,
  Te as w,
  De as x,
  Ke as y,
  Me as z,
};
