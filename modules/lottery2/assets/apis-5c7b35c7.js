var C = Object.defineProperty,
  h = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
  P = Object.prototype.propertyIsEnumerable;
var w = (e, t, r) =>
    t in e
      ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  f = (e, t) => {
    for (var r in t || (t = {})) v.call(t, r) && w(e, r, t[r]);
    if (m) for (var r of m(t)) P.call(t, r) && w(e, r, t[r]);
    return e;
  },
  p = (e, t) => h(e, L(t));
var n = (e, t, r) =>
  new Promise((o, a) => {
    var i = (s) => {
        try {
          l(r.next(s));
        } catch (y) {
          a(y);
        }
      },
      u = (s) => {
        try {
          l(r.throw(s));
        } catch (y) {
          a(y);
        }
      },
      l = (s) => (s.done ? o(s.value) : Promise.resolve(s.value).then(i, u));
    l((r = r.apply(e, t)).next());
  });
import { g as F } from "./solid-js-8ff414d5.js";
import { g as c, b as R } from "./manifest-987d6c36.js";
import { o as g } from "./once-e92576f3.js";
import { M as D } from "./_MapCache-9c96b8d5.js";
var T = "Expected a function";
function d(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(T);
  var r = function () {
    var o = arguments,
      a = t ? t.apply(this, o) : o[0],
      i = r.cache;
    if (i.has(a)) return i.get(a);
    var u = e.apply(this, o);
    return (r.cache = i.set(a, u) || i), u;
  };
  return (r.cache = new (d.Cache || D)()), r;
}
d.Cache = D;
function x(e) {
  return n(this, null, function* () {
    const t = "/platform-lottery/lottery-favorites/list-myFavorites";
    return yield c().post(
      t,
      p(f({}, e), { sortBy: (e == null ? void 0 : e.sortBy) || "DRAW_DATE" })
    );
  });
}
function _(e, t) {
  return n(this, null, function* () {
    const a = t
      ? "/platform-lottery/lottery-favorites/add"
      : "/platform-lottery/lottery-favorites/cancel";
    return yield c().post(a, { lotteryId: e });
  });
}
const k = g(function () {
    const [t] = F(function () {
      return n(this, null, function* () {
        const r = "/platform-lottery/lottery-info/list-country";
        return ["", ...(yield c().get(r))];
      });
    });
    return t;
  }),
  z = d(function (t) {
    return n(this, null, function* () {
      const r = `/platform-lottery/lottery-detail/current?id=${t}`;
      return yield c().get(r);
    });
  });
function A(e) {
  return n(this, null, function* () {
    const t = `/platform-lottery/lottery-detail/get-draws?id=${e}`;
    return yield c().get(t);
  });
}
const M = g(function () {
    return n(this, null, function* () {
      const t = "/platform-lottery/lottery-detail/get-draws-discount";
      return (yield c().get(t)).map((a) =>
        p(f({}, a), { discount: Number(a.discount) })
      );
    });
  }),
  O = g(() =>
    n(void 0, null, function* () {
      return (yield c().get("/game/support/swap/config/?swapType=1")).list;
    })
  );
function $(e) {
  return n(this, null, function* () {
    if (!R.login || e === "BCL")
      return new Promise((r) =>
        r({ expiredTime: 0, fromCurrencyPrice: 0.1, toCurrencyPrice: 0.1 })
      );
    const t = yield c().post("/game/support/swap/price/", {
      fromCurrencyName: e,
      toCurrencyName: "BCL",
      swapType: 1,
    });
    return (
      (t.fromCurrencyPrice = Number(t.fromCurrencyPrice)),
      (t.toCurrencyPrice = Number(t.toCurrencyPrice)),
      t
    );
  });
}
export {
  x as a,
  _ as b,
  z as c,
  A as d,
  M as e,
  O as f,
  k as g,
  $ as h,
  d as m,
};
