var Wn = Object.defineProperty,
  Gn = Object.defineProperties;
var _n = Object.getOwnPropertyDescriptors;
var Kt = Object.getOwnPropertySymbols,
  Hn = Object.getPrototypeOf,
  Fe = Object.prototype.hasOwnProperty,
  Me = Object.prototype.propertyIsEnumerable,
  Un = Reflect.get;
var Ee = (n, t, e) =>
    t in n
      ? Wn(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[t] = e),
  U = (n, t) => {
    for (var e in t || (t = {})) Fe.call(t, e) && Ee(n, e, t[e]);
    if (Kt) for (var e of Kt(t)) Me.call(t, e) && Ee(n, e, t[e]);
    return n;
  },
  q = (n, t) => Gn(n, _n(t));
var he = (n, t) => {
  var e = {};
  for (var r in n) Fe.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && Kt)
    for (var r of Kt(n)) t.indexOf(r) < 0 && Me.call(n, r) && (e[r] = n[r]);
  return e;
};
var De = (n, t, e) => Un(Hn(n), e, t);
var ot = (n, t, e) =>
  new Promise((r, i) => {
    var o = (h) => {
        try {
          m(e.next(h));
        } catch (l) {
          i(l);
        }
      },
      g = (h) => {
        try {
          m(e.throw(h));
        } catch (l) {
          i(l);
        }
      },
      m = (h) => (h.done ? r(h.value) : Promise.resolve(h.value).then(o, g));
    m((e = e.apply(n, t)).next());
  });
import {
  a1 as Ne,
  t as S,
  ab as Tt,
  aa as ut,
  D,
  K as It,
  h as Z,
  f as V,
  au as We,
  ak as Mt,
  aC as Ge,
  ax as zn,
  y as vn,
  A as ct,
  a2 as qn,
  H as X,
  G as Oe,
  J as se,
  l as xt,
  an as Yt,
  x as Pt,
  c as u,
  aD as Xn,
  aE as Vn,
  aF as wn,
  a4 as Yn,
  g as Pe,
  aG as Jn,
  i as a,
  aq as Ct,
  u as qt,
  B as Bt,
  m as G,
  a as Y,
  b as tt,
  d as mt,
  C as Gt,
  aH as Kn,
  v as Ut,
  S as J,
  F as St,
  e as dt,
  n as Cn,
  ai as Zn,
  M as oe,
  I as le,
  Y as Sn,
  o as $t,
  w as ht,
  aI as In,
  a0 as Qn,
  z as kt,
  E as Te,
  aJ as Bn,
  ar as kn,
  ae as tr,
  aA as er,
  aK as nr,
  N as ie,
} from "./manifest-a234c8a0.js";
import { t as d } from "./i18n-611811a6.js";
import { s as rr, h as ir, a as ar } from "./sha256-f27e6345.js";
import { b as ge } from "./config-6b289bdb.js";
import {
  d as sr,
  e as or,
  f as xe,
  s as lr,
  g as cr,
  B as lt,
  h as _e,
  o as He,
  c as Nn,
  a as On,
  i as ur,
  t as Ue,
  m as ve,
  j as Pn,
  E as dr,
  k as mr,
  l as hr,
  n as gr,
  p as pr,
  q as fr,
  b as Nt,
} from "./game-a49e1f5b.js";
import { G as br, a as yr, P as xr } from "./GameUserScript-fc276c0a.js";
import { a as vr, u as wr } from "./Layout-b58c3f24.js";
import {
  G as Cr,
  a as Sr,
  d as Ir,
  c as ze,
  b as Br,
  f as qe,
} from "./GameBankrollHelp-6ee96441.js";
import { B as we } from "./BetAmount-add6a26b.js";
import { a as kr, b as $e, u as Nr, I as Or } from "./deduction-99b6c8dd.js";
import { u as Et } from "./currency-a0e3a368.js";
import {
  f as gt,
  n as Pr,
  o as Tr,
  m as Tn,
  p as $r,
} from "./amount-af49bfc0.js";
import { S as Ae } from "./Symbol-f22f521e.js";
import { c as Xe, t as Ar } from "./throttleTime-45d11bb1.js";
import { t as jr } from "./throttle-267ea383.js";
import { c as Ot } from "./index-eff0ad24.js";
import { u as At } from "./use-coin-format-bfa33df5.js";
import { M as Rr } from "./MultiLogs-256c699d.js";
import { a as yt } from "./index-ea788ee8.js";
import {
  c as Lr,
  M as ae,
  u as Er,
  a as $n,
  T as _t,
  b as Ve,
  d as Ye,
  e as Zt,
  f as Fr,
} from "./MoreLessBtn-6b8ac376.js";
import { S as Mr } from "./Close-4ee839c4.js";
import { d as Dr } from "./debounce-9aa0a06b.js";
import { Guide as Wr } from "./Guide-529ac7fa.js";
import { L as Je, T as Ke } from "./LabelWithTooltip-6c5ed111.js";
import { T as An } from "./Tag-c6cb9793.js";
import { G as Gr } from "./GameFairnessFile-649b25ea.js";
import { T as _r } from "./table-cbcb9a00.js";
import { u as Hr } from "./router-b8d56046.js";
import { C as Ur } from "./payout-69d30c0d.js";
import { S as zr, a as qr } from "./Result-793df2e7.js";
import { S as Xr } from "./Chance-f8ca552a.js";
import "./core-0e150ffe.js";
import "./___vite-browser-external_commonjs-proxy-82985b1e.js";
import "./isObject-d5c4896e.js";
import "./isSymbol-0edd6b24.js";
import "./user-dc7ef1f4.js";
import "./utils-65805dbc.js";
import "./index-4897b9da.js";
import "./enc-base64-43411dcf.js";
import "./Message-f1b40bc8.js";
import "./events-853a5f82.js";
import "./number-field-a2716165.js";
import "./QJIB6BDF-1dee7631.js";
import "./FN6EICGO-b0e5a495.js";
import "./LR7LBJN3-fced4fb5.js";
import "./game-adef0dc7.js";
import "./LayoutTitle-870a6463.js";
import "./index-f5a6b566.js";
import "./SeedSetting-b2f3d34e.js";
import "./slider-b2a7fa20.js";
import "./NNGMRY2O-be25bda0.js";
import "./index-15f8a785.js";
import "./E53DB7BS-1e802908.js";
import "./resolve-elements.es-b931549e.js";
import "./tooltip-f54a9090.js";
const Ze = (n) => {
  n = n.replace(/#/, "");
  const t = parseInt(n, 16);
  return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
};
var Vr = S(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=38 height=38 fill=none> <path fill=currentColor d="M7.534 21.08a3.388 3.388 0 1 1-.001 6.775 3.388 3.388 0 0 1 0-6.775m16.932 0a3.387 3.387 0 1 1 0 6.775 3.387 3.387 0 0 1 0-6.775M7.534 12.613a3.387 3.387 0 1 1-.001 6.775 3.387 3.387 0 0 1 0-6.775m16.932 0a3.387 3.387 0 1 1 0 6.775 3.387 3.387 0 0 1 0-6.775m-8.466 0a3.387 3.387 0 1 1 0 6.775 3.387 3.387 0 0 1 0-6.775M7.534 4.146a3.388 3.388 0 1 1-.001 6.776 3.388 3.388 0 0 1 0-6.776m16.932 0a3.387 3.387 0 1 1 0 6.775 3.387 3.387 0 0 1 0-6.775m-8.466 0a3.387 3.387 0 1 1 0 6.775 3.387 3.387 0 0 1 0-6.775"></path> '
);
const Yr = (n) => {
  return (t = Vr()), Ne(t, n, !0, !0), t;
  var t;
};
var Jr = sr(function (n) {
  return function () {
    n(this),
      (this.name = "EmptyError"),
      (this.message = "no elements in sequence");
  };
});
function Ce(n, t) {
  var e = typeof t == "object";
  return new Promise(function (r, i) {
    var o = new or({
      next: function (g) {
        r(g), o.unsubscribe();
      },
      error: i,
      complete: function () {
        e ? r(t.defaultValue) : i(new Jr());
      },
    });
    n.subscribe(o);
  });
}
var Kr = S(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="m18.09 7.581.102.094 5.439 5.474a4.07 4.07 0 0 1 .137 5.555l-.137.146-5.439 5.474c-.621.63-1.629.63-2.25 0a1.63 1.63 0 0 1-.094-2.178l.093-.103 4.544-4.574-11.889.002c-.769 0-1.392-.658-1.392-1.47 0-.77.562-1.403 1.278-1.464l.114-.005 11.89-.002-4.544-4.574a1.627 1.627 0 0 1 0-2.28 1.577 1.577 0 0 1 2.15-.094z"></path> '
);
const Zr = (n) => {
    return (t = Kr()), Ne(t, n, !0, !0), t;
    var t;
  },
  et = Tt.Reader,
  wt = Tt.Writer,
  F = Tt.util,
  M = Tt.roots.gameCrash || (Tt.roots.gameCrash = {});
(M.CrashInfo = (() => {
  function n(t) {
    if (((this.betLimits = []), (this.normalBets = []), (this.xBets = []), t))
      for (let e = Object.keys(t), r = 0; r < e.length; ++r)
        t[e[r]] != null && (this[e[r]] = t[e[r]]);
  }
  return (
    (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.status = 0),
    (n.prototype.prepareTime = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.startTime = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.hash = ""),
    (n.prototype.maxRate = 0),
    (n.prototype.houseage = 0),
    (n.prototype.betLimits = F.emptyArray),
    (n.prototype.normalBets = F.emptyArray),
    (n.prototype.xBets = F.emptyArray),
    (n.prototype.normalBetSize = 0),
    (n.prototype.xBetSize = 0),
    (n.prototype.normalBetAmount = ""),
    (n.prototype.xBetAmount = ""),
    (n.prototype.escapedSize = 0),
    (n.encode = function (t, e) {
      if (
        (e || (e = wt.create()),
        t.roundId != null &&
          Object.hasOwnProperty.call(t, "roundId") &&
          e.uint32(8).int64(t.roundId),
        t.status != null &&
          Object.hasOwnProperty.call(t, "status") &&
          e.uint32(16).int32(t.status),
        t.prepareTime != null &&
          Object.hasOwnProperty.call(t, "prepareTime") &&
          e.uint32(24).int64(t.prepareTime),
        t.startTime != null &&
          Object.hasOwnProperty.call(t, "startTime") &&
          e.uint32(32).int64(t.startTime),
        t.hash != null &&
          Object.hasOwnProperty.call(t, "hash") &&
          e.uint32(50).string(t.hash),
        t.maxRate != null &&
          Object.hasOwnProperty.call(t, "maxRate") &&
          e.uint32(56).int32(t.maxRate),
        t.houseage != null &&
          Object.hasOwnProperty.call(t, "houseage") &&
          e.uint32(64).int32(t.houseage),
        t.betLimits != null && t.betLimits.length)
      )
        for (let r = 0; r < t.betLimits.length; ++r)
          M.BetLimit.encode(t.betLimits[r], e.uint32(106).fork()).ldelim();
      if (t.normalBets != null && t.normalBets.length)
        for (let r = 0; r < t.normalBets.length; ++r)
          M.NormalBet.encode(t.normalBets[r], e.uint32(114).fork()).ldelim();
      if (t.xBets != null && t.xBets.length)
        for (let r = 0; r < t.xBets.length; ++r)
          M.XBet.encode(t.xBets[r], e.uint32(122).fork()).ldelim();
      return (
        t.normalBetSize != null &&
          Object.hasOwnProperty.call(t, "normalBetSize") &&
          e.uint32(128).int32(t.normalBetSize),
        t.xBetSize != null &&
          Object.hasOwnProperty.call(t, "xBetSize") &&
          e.uint32(136).int32(t.xBetSize),
        t.normalBetAmount != null &&
          Object.hasOwnProperty.call(t, "normalBetAmount") &&
          e.uint32(146).string(t.normalBetAmount),
        t.xBetAmount != null &&
          Object.hasOwnProperty.call(t, "xBetAmount") &&
          e.uint32(154).string(t.xBetAmount),
        t.escapedSize != null &&
          Object.hasOwnProperty.call(t, "escapedSize") &&
          e.uint32(160).int32(t.escapedSize),
        e
      );
    }),
    (n.decode = function (t, e) {
      t instanceof et || (t = et.create(t));
      let r = e === void 0 ? t.len : t.pos + e,
        i = new M.CrashInfo();
      for (; t.pos < r; ) {
        let o = t.uint32();
        switch (o >>> 3) {
          case 1:
            i.roundId = t.int64();
            break;
          case 2:
            i.status = t.int32();
            break;
          case 3:
            i.prepareTime = t.int64();
            break;
          case 4:
            i.startTime = t.int64();
            break;
          case 6:
            i.hash = t.string();
            break;
          case 7:
            i.maxRate = t.int32();
            break;
          case 8:
            i.houseage = t.int32();
            break;
          case 13:
            (i.betLimits && i.betLimits.length) || (i.betLimits = []),
              i.betLimits.push(M.BetLimit.decode(t, t.uint32()));
            break;
          case 14:
            (i.normalBets && i.normalBets.length) || (i.normalBets = []),
              i.normalBets.push(M.NormalBet.decode(t, t.uint32()));
            break;
          case 15:
            (i.xBets && i.xBets.length) || (i.xBets = []),
              i.xBets.push(M.XBet.decode(t, t.uint32()));
            break;
          case 16:
            i.normalBetSize = t.int32();
            break;
          case 17:
            i.xBetSize = t.int32();
            break;
          case 18:
            i.normalBetAmount = t.string();
            break;
          case 19:
            i.xBetAmount = t.string();
            break;
          case 20:
            i.escapedSize = t.int32();
            break;
          default:
            t.skipType(7 & o);
        }
      }
      return i;
    }),
    n
  );
})()),
  (M.BetLimit = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.currencyName = ""),
      (n.prototype.minBetAmount = ""),
      (n.prototype.maxBetAmount = ""),
      (n.prototype.maxProfit = ""),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.currencyName != null &&
            Object.hasOwnProperty.call(t, "currencyName") &&
            e.uint32(10).string(t.currencyName),
          t.minBetAmount != null &&
            Object.hasOwnProperty.call(t, "minBetAmount") &&
            e.uint32(18).string(t.minBetAmount),
          t.maxBetAmount != null &&
            Object.hasOwnProperty.call(t, "maxBetAmount") &&
            e.uint32(26).string(t.maxBetAmount),
          t.maxProfit != null &&
            Object.hasOwnProperty.call(t, "maxProfit") &&
            e.uint32(34).string(t.maxProfit),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.BetLimit();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.currencyName = t.string();
              break;
            case 2:
              i.minBetAmount = t.string();
              break;
            case 3:
              i.maxBetAmount = t.string();
              break;
            case 4:
              i.maxProfit = t.string();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.Prepare = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.prepareTime = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.startTime = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          t.prepareTime != null &&
            Object.hasOwnProperty.call(t, "prepareTime") &&
            e.uint32(24).int64(t.prepareTime),
          t.startTime != null &&
            Object.hasOwnProperty.call(t, "startTime") &&
            e.uint32(32).int64(t.startTime),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.Prepare();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.roundId = t.int64();
              break;
            case 3:
              i.prepareTime = t.int64();
              break;
            case 4:
              i.startTime = t.int64();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.NormalBetRequest = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.currencyName = ""),
      (n.prototype.betAmount = ""),
      (n.prototype.autoEscapeRate = 0),
      (n.prototype.scriptId = 0),
      (n.prototype.frontgroundId = 0),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          t.currencyName != null &&
            Object.hasOwnProperty.call(t, "currencyName") &&
            e.uint32(18).string(t.currencyName),
          t.betAmount != null &&
            Object.hasOwnProperty.call(t, "betAmount") &&
            e.uint32(26).string(t.betAmount),
          t.autoEscapeRate != null &&
            Object.hasOwnProperty.call(t, "autoEscapeRate") &&
            e.uint32(32).int32(t.autoEscapeRate),
          t.scriptId != null &&
            Object.hasOwnProperty.call(t, "scriptId") &&
            e.uint32(40).int32(t.scriptId),
          t.frontgroundId != null &&
            Object.hasOwnProperty.call(t, "frontgroundId") &&
            e.uint32(120).sint32(t.frontgroundId),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.NormalBetRequest();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.roundId = t.int64();
              break;
            case 2:
              i.currencyName = t.string();
              break;
            case 3:
              i.betAmount = t.string();
              break;
            case 4:
              i.autoEscapeRate = t.int32();
              break;
            case 5:
              i.scriptId = t.int32();
              break;
            case 15:
              i.frontgroundId = t.sint32();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.NormalBet = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.currencyName = ""),
      (n.prototype.betAmount = ""),
      (n.prototype.userId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.name = ""),
      (n.prototype.betId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.odds = 0),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          t.currencyName != null &&
            Object.hasOwnProperty.call(t, "currencyName") &&
            e.uint32(18).string(t.currencyName),
          t.betAmount != null &&
            Object.hasOwnProperty.call(t, "betAmount") &&
            e.uint32(26).string(t.betAmount),
          t.userId != null &&
            Object.hasOwnProperty.call(t, "userId") &&
            e.uint32(32).int64(t.userId),
          t.name != null &&
            Object.hasOwnProperty.call(t, "name") &&
            e.uint32(42).string(t.name),
          t.betId != null &&
            Object.hasOwnProperty.call(t, "betId") &&
            e.uint32(48).int64(t.betId),
          t.odds != null &&
            Object.hasOwnProperty.call(t, "odds") &&
            e.uint32(56).int32(t.odds),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.NormalBet();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.roundId = t.int64();
              break;
            case 2:
              i.currencyName = t.string();
              break;
            case 3:
              i.betAmount = t.string();
              break;
            case 4:
              i.userId = t.int64();
              break;
            case 5:
              i.name = t.string();
              break;
            case 6:
              i.betId = t.int64();
              break;
            case 7:
              i.odds = t.int32();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.XBetRequest = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.currencyName = ""),
      (n.prototype.betAmount = ""),
      (n.prototype.x = 0),
      (n.prototype.scriptId = 0),
      (n.prototype.frontgroundId = 0),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          t.currencyName != null &&
            Object.hasOwnProperty.call(t, "currencyName") &&
            e.uint32(18).string(t.currencyName),
          t.betAmount != null &&
            Object.hasOwnProperty.call(t, "betAmount") &&
            e.uint32(26).string(t.betAmount),
          t.x != null &&
            Object.hasOwnProperty.call(t, "x") &&
            e.uint32(32).int32(t.x),
          t.scriptId != null &&
            Object.hasOwnProperty.call(t, "scriptId") &&
            e.uint32(40).int32(t.scriptId),
          t.frontgroundId != null &&
            Object.hasOwnProperty.call(t, "frontgroundId") &&
            e.uint32(120).sint32(t.frontgroundId),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.XBetRequest();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.roundId = t.int64();
              break;
            case 2:
              i.currencyName = t.string();
              break;
            case 3:
              i.betAmount = t.string();
              break;
            case 4:
              i.x = t.int32();
              break;
            case 5:
              i.scriptId = t.int32();
              break;
            case 15:
              i.frontgroundId = t.sint32();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.XBet = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.currencyName = ""),
      (n.prototype.betAmount = ""),
      (n.prototype.userId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.name = ""),
      (n.prototype.betId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.x = 0),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          t.currencyName != null &&
            Object.hasOwnProperty.call(t, "currencyName") &&
            e.uint32(18).string(t.currencyName),
          t.betAmount != null &&
            Object.hasOwnProperty.call(t, "betAmount") &&
            e.uint32(26).string(t.betAmount),
          t.userId != null &&
            Object.hasOwnProperty.call(t, "userId") &&
            e.uint32(32).int64(t.userId),
          t.name != null &&
            Object.hasOwnProperty.call(t, "name") &&
            e.uint32(42).string(t.name),
          t.betId != null &&
            Object.hasOwnProperty.call(t, "betId") &&
            e.uint32(48).int64(t.betId),
          t.x != null &&
            Object.hasOwnProperty.call(t, "x") &&
            e.uint32(56).int32(t.x),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.XBet();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.roundId = t.int64();
              break;
            case 2:
              i.currencyName = t.string();
              break;
            case 3:
              i.betAmount = t.string();
              break;
            case 4:
              i.userId = t.int64();
              break;
            case 5:
              i.name = t.string();
              break;
            case 6:
              i.betId = t.int64();
              break;
            case 7:
              i.x = t.int32();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.Begin = (() => {
    function n(t) {
      if (((this.normalBetUserIds = []), t))
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.startTime = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.normalBetUserIds = F.emptyArray),
      (n.encode = function (t, e) {
        if (
          (e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          t.startTime != null &&
            Object.hasOwnProperty.call(t, "startTime") &&
            e.uint32(32).int64(t.startTime),
          t.normalBetUserIds != null && t.normalBetUserIds.length)
        ) {
          e.uint32(42).fork();
          for (let r = 0; r < t.normalBetUserIds.length; ++r)
            e.int64(t.normalBetUserIds[r]);
          e.ldelim();
        }
        return e;
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.Begin();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.roundId = t.int64();
              break;
            case 4:
              i.startTime = t.int64();
              break;
            case 5:
              if (
                ((i.normalBetUserIds && i.normalBetUserIds.length) ||
                  (i.normalBetUserIds = []),
                (7 & o) == 2)
              ) {
                let g = t.uint32() + t.pos;
                for (; t.pos < g; ) i.normalBetUserIds.push(t.int64());
              } else i.normalBetUserIds.push(t.int64());
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.Progress = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.elapsed = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.elapsed != null &&
            Object.hasOwnProperty.call(t, "elapsed") &&
            e.uint32(8).int64(t.elapsed),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(16).int64(t.roundId),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.Progress();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.elapsed = t.int64();
              break;
            case 2:
              i.roundId = t.int64();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.EscapeRequest = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.EscapeRequest();
        for (; t.pos < r; ) {
          let o = t.uint32();
          o >>> 3 == 1 ? (i.roundId = t.int64()) : t.skipType(7 & o);
        }
        return i;
      }),
      n
    );
  })()),
  (M.Escape = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.userId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.betId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.odds = 0),
      (n.prototype.force = !1),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.userId != null &&
            Object.hasOwnProperty.call(t, "userId") &&
            e.uint32(8).int64(t.userId),
          t.betId != null &&
            Object.hasOwnProperty.call(t, "betId") &&
            e.uint32(16).int64(t.betId),
          t.odds != null &&
            Object.hasOwnProperty.call(t, "odds") &&
            e.uint32(24).int32(t.odds),
          t.force != null &&
            Object.hasOwnProperty.call(t, "force") &&
            e.uint32(32).bool(t.force),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.Escape();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.userId = t.int64();
              break;
            case 2:
              i.betId = t.int64();
              break;
            case 3:
              i.odds = t.int32();
              break;
            case 4:
              i.force = t.bool();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.End = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.maxRate = 0),
      (n.prototype.hash = ""),
      (n.encode = function (t, e) {
        return (
          e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          t.maxRate != null &&
            Object.hasOwnProperty.call(t, "maxRate") &&
            e.uint32(48).int32(t.maxRate),
          t.hash != null &&
            Object.hasOwnProperty.call(t, "hash") &&
            e.uint32(58).string(t.hash),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.End();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.roundId = t.int64();
              break;
            case 6:
              i.maxRate = t.int32();
              break;
            case 7:
              i.hash = t.string();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })()),
  (M.Settle = (() => {
    function n(t) {
      if (((this.escapes = []), t))
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.roundId = F.Long ? F.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.escapes = F.emptyArray),
      (n.prototype.maxRate = 0),
      (n.prototype.hash = ""),
      (n.encode = function (t, e) {
        if (
          (e || (e = wt.create()),
          t.roundId != null &&
            Object.hasOwnProperty.call(t, "roundId") &&
            e.uint32(8).int64(t.roundId),
          t.escapes != null && t.escapes.length)
        )
          for (let r = 0; r < t.escapes.length; ++r)
            M.Escape.encode(t.escapes[r], e.uint32(18).fork()).ldelim();
        return (
          t.maxRate != null &&
            Object.hasOwnProperty.call(t, "maxRate") &&
            e.uint32(48).int32(t.maxRate),
          t.hash != null &&
            Object.hasOwnProperty.call(t, "hash") &&
            e.uint32(58).string(t.hash),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof et || (t = et.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new M.Settle();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.roundId = t.int64();
              break;
            case 2:
              (i.escapes && i.escapes.length) || (i.escapes = []),
                i.escapes.push(M.Escape.decode(t, t.uint32()));
              break;
            case 6:
              i.maxRate = t.int32();
              break;
            case 7:
              i.hash = t.string();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      n
    );
  })());
const Qt = Tt.Reader,
  Qe = Tt.Writer,
  bt = Tt.util,
  Ht = Tt.roots.gameCrashStrategy || (Tt.roots.gameCrashStrategy = {});
(Ht.RoundLog = (() => {
  function n(t) {
    if (t)
      for (let e = Object.keys(t), r = 0; r < e.length; ++r)
        t[e[r]] != null && (this[e[r]] = t[e[r]]);
  }
  return (
    (n.prototype.gameName = ""),
    (n.prototype.betType = ""),
    (n.prototype.scriptId = ""),
    (n.prototype.nonce = 0),
    (n.prototype.roundId = bt.Long ? bt.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.betAmount = ""),
    (n.prototype.winAmount = ""),
    (n.prototype.currencyName = ""),
    (n.prototype.userId = bt.Long ? bt.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.roundStartId = bt.Long ? bt.Long.fromBits(0, 0, !1) : 0),
    (n.prototype.roundEndId = bt.Long ? bt.Long.fromBits(0, 0, !1) : 0),
    (n.encode = function (t, e) {
      return (
        e || (e = Qe.create()),
        t.gameName != null &&
          Object.hasOwnProperty.call(t, "gameName") &&
          e.uint32(10).string(t.gameName),
        t.betType != null &&
          Object.hasOwnProperty.call(t, "betType") &&
          e.uint32(18).string(t.betType),
        t.scriptId != null &&
          Object.hasOwnProperty.call(t, "scriptId") &&
          e.uint32(24).string(t.scriptId),
        t.nonce != null &&
          Object.hasOwnProperty.call(t, "nonce") &&
          e.uint32(32).int32(t.nonce),
        t.roundId != null &&
          Object.hasOwnProperty.call(t, "roundId") &&
          e.uint32(40).int64(t.roundId),
        t.betAmount != null &&
          Object.hasOwnProperty.call(t, "betAmount") &&
          e.uint32(50).string(t.betAmount),
        t.winAmount != null &&
          Object.hasOwnProperty.call(t, "winAmount") &&
          e.uint32(58).string(t.winAmount),
        t.currencyName != null &&
          Object.hasOwnProperty.call(t, "currencyName") &&
          e.uint32(66).string(t.currencyName),
        t.userId != null &&
          Object.hasOwnProperty.call(t, "userId") &&
          e.uint32(72).int64(t.userId),
        t.roundStartId != null &&
          Object.hasOwnProperty.call(t, "roundStartId") &&
          e.uint32(80).int64(t.roundStartId),
        t.roundEndId != null &&
          Object.hasOwnProperty.call(t, "roundEndId") &&
          e.uint32(88).int64(t.roundEndId),
        e
      );
    }),
    (n.decode = function (t, e) {
      t instanceof Qt || (t = Qt.create(t));
      let r = e === void 0 ? t.len : t.pos + e,
        i = new Ht.RoundLog();
      for (; t.pos < r; ) {
        let o = t.uint32();
        switch (o >>> 3) {
          case 1:
            i.gameName = t.string();
            break;
          case 2:
            i.betType = t.string();
            break;
          case 3:
            i.scriptId = t.string();
            break;
          case 4:
            i.nonce = t.int32();
            break;
          case 5:
            i.roundId = t.int64();
            break;
          case 6:
            i.betAmount = t.string();
            break;
          case 7:
            i.winAmount = t.string();
            break;
          case 8:
            i.currencyName = t.string();
            break;
          case 9:
            i.userId = t.int64();
            break;
          case 10:
            i.roundStartId = t.int64();
            break;
          case 11:
            i.roundEndId = t.int64();
            break;
          default:
            t.skipType(7 & o);
        }
      }
      return i;
    }),
    (n.getTypeUrl = function (t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/RoundLog";
    }),
    n
  );
})()),
  (Ht.Execute = (() => {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.userId = bt.Long ? bt.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.gameName = ""),
      (n.prototype.betType = ""),
      (n.prototype.status = 0),
      (n.prototype.scriptId = ""),
      (n.prototype.nonce = 0),
      (n.prototype.roundStartId = bt.Long ? bt.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.roundEndId = bt.Long ? bt.Long.fromBits(0, 0, !1) : 0),
      (n.prototype.totalBetAmount = ""),
      (n.prototype.totalWinAmount = ""),
      (n.prototype.currencyName = ""),
      (n.prototype.type = ""),
      (n.encode = function (t, e) {
        return (
          e || (e = Qe.create()),
          t.userId != null &&
            Object.hasOwnProperty.call(t, "userId") &&
            e.uint32(8).int64(t.userId),
          t.gameName != null &&
            Object.hasOwnProperty.call(t, "gameName") &&
            e.uint32(18).string(t.gameName),
          t.betType != null &&
            Object.hasOwnProperty.call(t, "betType") &&
            e.uint32(26).string(t.betType),
          t.status != null &&
            Object.hasOwnProperty.call(t, "status") &&
            e.uint32(32).int32(t.status),
          t.scriptId != null &&
            Object.hasOwnProperty.call(t, "scriptId") &&
            e.uint32(40).string(t.scriptId),
          t.nonce != null &&
            Object.hasOwnProperty.call(t, "nonce") &&
            e.uint32(48).int32(t.nonce),
          t.roundStartId != null &&
            Object.hasOwnProperty.call(t, "roundStartId") &&
            e.uint32(56).int64(t.roundStartId),
          t.roundEndId != null &&
            Object.hasOwnProperty.call(t, "roundEndId") &&
            e.uint32(64).int64(t.roundEndId),
          t.totalBetAmount != null &&
            Object.hasOwnProperty.call(t, "totalBetAmount") &&
            e.uint32(74).string(t.totalBetAmount),
          t.totalWinAmount != null &&
            Object.hasOwnProperty.call(t, "totalWinAmount") &&
            e.uint32(82).string(t.totalWinAmount),
          t.currencyName != null &&
            Object.hasOwnProperty.call(t, "currencyName") &&
            e.uint32(90).string(t.currencyName),
          t.type != null &&
            Object.hasOwnProperty.call(t, "type") &&
            e.uint32(98).string(t.type),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof Qt || (t = Qt.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          i = new Ht.Execute();
        for (; t.pos < r; ) {
          let o = t.uint32();
          switch (o >>> 3) {
            case 1:
              i.userId = t.int64();
              break;
            case 2:
              i.gameName = t.string();
              break;
            case 3:
              i.betType = t.string();
              break;
            case 4:
              i.status = t.int32();
              break;
            case 5:
              i.scriptId = t.string();
              break;
            case 6:
              i.nonce = t.int32();
              break;
            case 7:
              i.roundStartId = t.int64();
              break;
            case 8:
              i.roundEndId = t.int64();
              break;
            case 9:
              i.totalBetAmount = t.string();
              break;
            case 10:
              i.totalWinAmount = t.string();
              break;
            case 11:
              i.currencyName = t.string();
              break;
            case 12:
              i.type = t.string();
              break;
            default:
              t.skipType(7 & o);
          }
        }
        return i;
      }),
      (n.getTypeUrl = function (t) {
        return t === void 0 && (t = "type.googleapis.com"), t + "/Execute";
      }),
      n
    );
  })());
var ee = ((n) => (
  (n[(n.red = 1.84)] = "red"),
  (n[(n.green = 2)] = "green"),
  (n[(n.moon = 10)] = "moon"),
  n
))(ee || {});
const tn = ["red", "green", "moon"];
var rt = ((n) => (
    (n[(n.connecting = 0)] = "connecting"),
    (n[(n.preparing = 1)] = "preparing"),
    (n[(n.progress = 2)] = "progress"),
    (n[(n.ended = 3)] = "ended"),
    n
  ))(rt || {}),
  Wt = ((n) => (
    (n[(n.red = -200)] = "red"),
    (n[(n.green = 200)] = "green"),
    (n[(n.moon = 1e3)] = "moon"),
    n
  ))(Wt || {});
const Qr = ut().decode(M.CrashInfo),
  ti = ut().encode(M.NormalBetRequest),
  ei = ut().encode(M.XBetRequest),
  ni = ut().encode(M.EscapeRequest),
  Se = class Dt extends cr {
    constructor() {
      var h;
      const t =
        (h = vr) == null ? void 0 : h.find((l) => l.gamePath === ge.key);
      super(ge, t),
        (this.config = ge),
        (this.history = []),
        (this.houseage$ = new lt(0)),
        (this.status$ = new lt(0)),
        (this.startTime$ = new lt(-1)),
        (this.betTime$ = new lt(-1)),
        (this.rate$ = new lt(0)),
        (this.gameId$ = new lt(0)),
        (this.escape$ = new _e()),
        (this.end$ = new lt(null)),
        (this.settle$ = new lt(null)),
        (this.bet$ = new lt(null)),
        (this.trenballBet$ = new lt(null)),
        (this.jackpot$ = new lt([])),
        (this.isJoin$ = new lt(!0)),
        (this.payout$ = new _e()),
        (this.playersCount$ = new lt(0)),
        (this.escapeCount$ = new lt(0)),
        (this.normalBetAmount$ = new lt("0")),
        (this.xBetCount$ = new lt(0)),
        (this.xBetAmount$ = new lt("0")),
        (this.topStrategyResults$ = new lt([])),
        (this.runningStrategyResults$ = new lt([])),
        (this.prepare = ut().decodeBind((l) => {
          const { roundId: c, startTime: s, prepareTime: p } = l;
          this.setPlayers([]),
            this.setXRedPlayers([]),
            this.setXGreenPlayers([]),
            this.playersCount$.next(0),
            this.escapeCount$.next(0),
            this.normalBetAmount$.next("0"),
            this.xBetCount$.next(0),
            this.xBetAmount$.next("0"),
            this.status$.next(1),
            this.startTime$.next(Date.now() + s.toNumber() - p.toNumber()),
            this.betTime$.next(s.toNumber() - p.toNumber()),
            this.gameId$.next(c.toNumber()),
            this.settle$.next(null),
            this.rate$.next(0),
            this.script.step();
        }, M.Prepare)),
        (this.begin = ut().decodeBind((l) => {
          this.status$.next(2),
            this.startTime$.next(Date.now()),
            this.isJoin$.next(!1);
        }, M.Begin)),
        (this.progress = ut().decodeBind((l) => {
          const { elapsed: c } = l,
            s = this.timeToRate(Number(c)),
            p = Date.now() - Number(c);
          this.startTime$.value > p && this.startTime$.next(p),
            this.status$.next(2),
            this.rate$.next(s);
        }, M.Progress)),
        (this.end = ut().decodeBind((l) => {
          const { maxRate: c } = l,
            s = new D(c).div(100).toNumber();
          this.rate$.next(s),
            this.end$.next(l),
            this.status$.next(3),
            this.isJoin$.next(!1);
        }, M.End)),
        (this.bet = ut().decodeBind((l) => {
          const c = It.convertCurrency(
            new D(l.betAmount),
            l.currencyName
          ).toNumber();
          this.bet$.next(l),
            this.setPlayers((s) =>
              this.orderByPlayer([
                ...s,
                q(U({}, l), {
                  rate: 0,
                  gameId: l.roundId.toNumber(),
                  betId: l.betId.toNumber(),
                  userId: Number(l.userId),
                  usd: c,
                }),
              ])
            ),
            this.playersCount$.next(this.playersCount$.value + 1),
            this.normalBetAmount$.next(
              new D(Number(this.normalBetAmount$.value))
                .add(new D(c))
                .toString()
            );
        }, M.XBet)),
        (this.trenballBet = ut().decodeBind((l) => {
          const c = l.x === -200 ? this.setXRedPlayers : this.setXGreenPlayers,
            s = It.convertCurrency(
              new D(l.betAmount),
              l.currencyName
            ).toNumber();
          c((p) =>
            He(
              [
                ...p,
                q(U({}, l), {
                  rate: 0,
                  gameId: l.roundId.toNumber(),
                  betId: l.betId.toNumber(),
                  usd: s,
                }),
              ],
              (b) => -b.usd
            )
          ),
            this.trenballBet$.next(l),
            this.xBetCount$.next(this.xBetCount$.value + 1),
            this.xBetAmount$.next(
              new D(Number(this.xBetAmount$.value)).add(new D(s)).toString()
            );
        }, M.XBet)),
        (this.escape = ut().decodeBind((l) => {
          const c = Number(l.betId),
            s = Number(l.userId),
            p = this.players().findIndex(
              (y) => y.userId === s && y.betId === c
            );
          if (p === -1) return;
          const b = this.players()[p];
          this.escape$.next(
            q(U({}, b), {
              elapsed: 0,
              payout: l.odds,
              payoutTween: l.odds,
              rate: l.odds,
            })
          ),
            this.setPlayers((y) => {
              const C = [...y];
              return C.splice(p, 1, q(U({}, b), { rate: l.odds })), C;
            }),
            this.escapeCount$.next(this.escapeCount$.value + 1);
        }, M.Escape)),
        (this.settle = ut().decodeBind((l) => {
          const c = l.escapes.reduce(
            (p, b) => ((p[String(b.userId)] = p.odds), p),
            {}
          );
          this.setPlayers((p) =>
            p.map((b) =>
              c[b.userId] !== void 0 ? q(U({}, b), { rate: c[b.userId] }) : b
            )
          ),
            this.settle$.next(
              q(U({}, l), { maxRate: new D(l.maxRate).div(100).toNumber() })
            );
          const s = this.players().find((p) => p.userId === Z.userId);
          this.resetHistory({
            gameId: l.roundId.toNumber(),
            odds: l.maxRate / 100,
            cashedAt: (s == null ? void 0 : s.rate) || 0,
            wager: Number(s == null ? void 0 : s.betAmount) || 0,
            crash: l.maxRate,
            hash: l.hash,
          });
        }, M.Settle)),
        (this.onEvent = ut().decodeBind(() => {
          this.updateStrategy();
        }, Ht.Execute)),
        (this.onResult = ut().decodeBind((l) => {
          const c = q(U({}, l), {
              roundId: l.roundId.toNumber(),
              roundStartId: l.roundStartId.toNumber(),
              scriptId: l.scriptId.toString(),
              userId: l.userId.toNumber(),
            }),
            s = this.runningStrategyResults$.value.find(
              (y) => y.strategyExecuteId === c.scriptId
            );
          if (!s) return;
          const p = this.runningStrategyResults$.value.findIndex(
              (y) => y.strategyExecuteId === c.scriptId
            ),
            b = Nn(this.runningStrategyResults$.value);
          b.splice(
            p,
            1,
            q(U({}, s), {
              userBetCount: c.nonce,
              totalBetAmount:
                Number(s.totalBetAmount) + Number(c.betAmount) + "",
              totalProfitAmount:
                Number(s.totalProfitAmount) +
                Number(c.winAmount) -
                Number(c.betAmount) +
                "",
            })
          ),
            this.runningStrategyResults$.next(b);
        }, Ht.RoundLog)),
        (this._onConnect = () => {
          this.initGame().catch(() => {});
        }),
        (this.onReconnect = () => {
          this.status$.next(0);
        }),
        (this.script = new br(this));
      const [e, r] = V([]),
        [i, o] = V([]),
        [g, m] = V([]);
      (this.players = e),
        (this.setPlayers = r),
        (this.xGreenPlayers = i),
        (this.setXGreenPlayers = o),
        (this.xRedPlayers = g),
        (this.setXRedPlayers = m),
        this.socket.on("connect", this._onConnect),
        this.socket.on("reconnecting", this.onReconnect),
        this.socket.on("pr", this.prepare),
        this.socket.on("b", this.bet),
        this.socket.on("bg", this.begin),
        this.socket.on("e", this.escape),
        this.socket.on("ed", this.end),
        this.socket.on("st", this.settle),
        this.socket.on("pg", this.progress),
        this.socket.on("xb", this.trenballBet),
        Dt.strategySocket.on("rl", this.onResult),
        Dt.strategySocket.on("et", this.onEvent);
    }
    watch(t) {
      this.script.enableAutoStep(!1), Dt.strategySocket.connect();
    }
    unwatch() {
      this.quit(), Dt.strategySocket.disconnect();
    }
    initSocket() {
      return ot(this, null, function* () {
        De(Dt.prototype, this, "online").call(this),
          Dt.strategySocket.connect();
      });
    }
    play(t) {
      return ot(this, null, function* () {
        const e = this.getCrashMode(t),
          r = this.betValue(t);
        try {
          return yield this.request(
            e === "trenball" ? "throw-xbet" : "throw-bet",
            r
          );
        } catch (i) {
          throw i;
        }
      });
    }
    leave(t) {
      return ot(this, null, function* () {
        return yield this.request(
          "throw-escape",
          ni({ roundId: We.fromNumber(t) })
        );
      });
    }
    quit() {
      return ot(this, null, function* () {
        yield this.request("leave").catch(() => {});
      });
    }
    orderByPlayer(t) {
      return He(t, [(e) => (e.rate === 0 ? -1 / 0 : -e.rate), (e) => -e.usd]);
    }
    waitGameStart() {
      return new Promise((t) =>
        this.socket.once(
          "pr",
          ut().decodeBind((e) => {
            t(e), this.script.step();
          }, M.Prepare)
        )
      );
    }
    waitGameEnd() {
      const t = this.gameId$.value;
      return new Promise((e, r) =>
        this.socket.once(
          "st",
          ut().decodeBind((i) => {
            i.roundId.toNumber() !== t
              ? r(new Error("Network Error! -- Crash script end"))
              : e(i);
          }, M.Settle)
        )
      );
    }
    playloadCheck(t, e) {
      return ot(this, null, function* () {
        var m;
        const r = It.getCurrency(e.currencyName || Z.setting.currencyName),
          { amount: i } = Mt[e.currencyName || Z.setting.currencyName],
          o = this.jackpot$.value,
          g =
            (m = o.find((h) => h.currencyName === r.currencyName)) == null
              ? void 0
              : m.minBetAmount;
        if (t < Number(g))
          throw new Error(`${d("Bet Amount Invalid. Minimum amount")} ${g}`);
        if (t > Number(i)) throw new Error(d("Insufficient balance"));
        return !0;
      });
    }
    handleScriptBet(t, e) {
      return ot(this, null, function* () {
        var g;
        try {
          yield this.playloadCheck(t, e);
        } catch (m) {
          throw m.message;
        }
        const r = It.getCurrency(e.currencyName || Z.setting.currencyName),
          i = Ge.create(new D(t), r.currencyName);
        try {
          yield this.play({
            params: { crashRate: e.payout, gameId: this.gameId$.value },
            currency: {
              symbol: r.currencyName,
              amount: t,
              decimal: r.precisionUnit,
              icon: r.currencyName,
            },
            scriptId: (g = this.script.state.script) == null ? void 0 : g.id,
            txId: i,
          });
        } catch (m) {
          throw (Ge.resolve(i, !1), m.message);
        }
        yield this.waitGameEnd();
        const o = this.players().find((m) => m.userId === Z.userId);
        return [
          ((o == null ? void 0 : o.rate) || 0) / 100,
          this.history.slice(-20).reverse(),
        ];
      });
    }
    getResult(t) {
      let e;
      return (
        (e = typeof t == "number" ? t : t.odds), { payout: e, profit: NaN }
      );
    }
    isWin(t) {
      return t.odds > 0;
    }
    isTrenballWin(t, e) {
      return t === "red"
        ? e < Number(ee.red)
        : t === "green"
        ? e > Number(ee.green)
        : t === "moon" && e > Number(ee.moon);
    }
    bvMapper(t) {
      return t;
    }
    getOddsByHash(t) {
      return this.getResultByHash(this.getHmacHash(t));
    }
    getResultByHash(t) {
      t = t.slice(0, 13);
      let e = parseInt(t, 16) / Math.pow(16, 13);
      (e = parseFloat(e.toPrecision(9))), (e = 99 / (1 - e));
      const r = Math.floor(e);
      return Math.max(1, r / 100);
    }
    getHash(t) {
      return String(rr(t));
    }
    getHmacHash(t) {
      const e = this.config.salt;
      return String(ir(ar.parse(t), e));
    }
    rateToTime(t) {
      return Math.log(t) / 6e-5;
    }
    timeToRate(t) {
      return Math.pow(Math.E, 6e-5 * t);
    }
    calcMaxProfit(t) {
      return new D(0);
    }
    resetHistory({ gameId: t, hash: e, cashedAt: r, wager: i }) {
      const o = this.history[this.history.length - 1],
        g = o ? o.gameId : 0,
        m = new Array();
      for (let h = 0; h < 2e3 && !(t <= g); h++) {
        const l = this.getResultByHash(this.getHmacHash(e)),
          c = {
            gameId: t,
            hash: e,
            odds: l,
            crash: 100 * l,
            cashedAt: 0,
            wager: 0,
          };
        h === 0 && ((c.cashedAt = r), (c.wager = i)),
          m.push(c),
          t--,
          (e = this.getHash(e));
      }
      this.history = this.history.concat(m.reverse()).slice(-2e3);
    }
    initGame() {
      return ot(this, null, function* () {
        const t = yield this.request("join").then(Qr);
        let e = 3;
        t.status === 1 ? (e = 1) : t.status === 2 && (e = 2);
        const r =
            Date.now() + t.startTime.toNumber() - t.prepareTime.toNumber(),
          i = new D(t.maxRate).div(100).toNumber(),
          o = t.normalBets.map((y) => {
            var C = y,
              { userId: l, odds: c, betAmount: s, currencyName: p } = C,
              b = he(C, ["userId", "odds", "betAmount", "currencyName"]);
            return q(U({}, b), {
              betId: b.betId.toNumber(),
              gameId: t.roundId.toNumber(),
              userId: l.toNumber(),
              rate: c,
              betAmount: s,
              currencyName: p,
              usd: It.convertCurrency(new D(s), p).toNumber(),
            });
          }),
          g = t.xBets.map((b) => {
            var y = b,
              { userId: l, betAmount: c, currencyName: s } = y,
              p = he(y, ["userId", "betAmount", "currencyName"]);
            return q(U({}, p), {
              betId: p.betId.toNumber(),
              gameId: t.roundId.toNumber(),
              userId: l.toNumber(),
              rate: 0,
              betAmount: c,
              currencyName: s,
              usd: It.convertCurrency(new D(c), s).toNumber(),
            });
          }),
          m = t.betLimits.map((l) =>
            q(U({}, l), {
              maxBetAmount: Number(l.maxBetAmount),
              minBetAmount: Number(l.minBetAmount),
              maxProfitAmount: Number(l.maxProfit),
            })
          ),
          h = t.betLimits.reduce(
            (l, c) => (
              (l[c.currencyName] = {
                currencyName: c.currencyName,
                jackpotAmount: 1 / 0,
                maxBetAmount: parseFloat(c.maxBetAmount),
                minBetAmount: parseFloat(c.minBetAmount),
                maxProfitAmount: parseFloat(c.maxProfit),
              }),
              l
            ),
            {}
          );
        this.jackpot$.next(m),
          localStorage.setItem("crashJackpot", JSON.stringify(h)),
          this.status$.next(e),
          this.startTime$.next(r),
          this.rate$.next(i),
          this.gameId$.next(t.roundId.toNumber()),
          this.setPlayers(this.orderByPlayer(o)),
          zn(() => {
            let l = [],
              c = [];
            g.forEach((s) => {
              s.x === -200 ? l.push(s) : c.push(s);
            }),
              this.setXGreenPlayers(c),
              this.setXRedPlayers(l);
          }),
          this.houseage$.next(t.houseage),
          this.playersCount$.next(t.normalBetSize),
          this.escapeCount$.next(t.escapedSize),
          this.normalBetAmount$.next(t.normalBetAmount),
          this.xBetCount$.next(t.xBetSize),
          this.xBetAmount$.next(t.xBetAmount),
          this.isJoin$.next(!0),
          this.updateStrategy();
      });
    }
    betValue(t) {
      const {
          params: { gameId: e, crashRate: r, trenball: i },
          currency: { symbol: o, amount: g, decimal: m },
          scriptId: h,
          txId: l,
        } = t,
        c = {
          roundId: We.fromNumber(e),
          currencyName: o,
          betAmount: Number(g).toFixed(m),
          scriptId: h || null,
          frontgroundId: l,
        },
        s = this.getCrashMode(t);
      if (s === "classic")
        return ti(
          q(U({}, c), { autoEscapeRate: new D(r).mul(100).toNumber() })
        );
      if (s === "trenball") return ei(q(U({}, c), { x: Wt[i] }));
      throw new Error(
        "You must specify either crashRate parameter for classic crash or trenball parameter for trenball crash."
      );
    }
    updateStrategy() {
      return ot(this, null, function* () {
        const { topStrategyResults: t, runningStrategyResults: e } =
          yield vn().post("/game/script/home/", { gameName: "crash" });
        this.topStrategyResults$.next(t), this.runningStrategyResults$.next(e);
      });
    }
    getCrashMode(t) {
      const {
        params: { crashRate: e, trenball: r },
      } = t;
      if (r !== void 0) return "trenball";
      if (e !== void 0) return "classic";
      throw new Error(
        "You must specify either crashRate parameter for classic crash or trenball parameter for trenball crash."
      );
    }
  };
(Se.alias = "Crash"), (Se.strategySocket = ut().socket("/gs"));
let jn = Se;
jn.strategySocket.connect();
const H = lr(jn),
  je = On,
  ri = (n) => (n === "moon" ? (ct.darken ? "#FBFF24" : "#D4D80B") : n),
  Ie = (n, t) => {
    const e = 1 - n / 100;
    return Math.floor((1 / (1 - e / t)) * e * 100) / 100;
  },
  Rn = qn(null),
  en = { "-200": "red", 200: "green", 1e3: "moon" };
function ii(n) {
  var W, it, at;
  const { minBetAmount: t } = kr(),
    { game: e, updateGameStatus: r } = je(),
    i = gt(e.gameId$),
    o = X(gt(e.payout$)),
    g = X(gt(e.status$)),
    m = gt(e.houseage$),
    h = $e(),
    { activeToken: l, store: c } = Et(),
    { resolveDeduction: s, createDeduction: p } = Nr(),
    [b, y] = Oe({
      amount: t(),
      xamount: t(),
      rate: 100,
      xBeted: {},
      xNextBet: {},
      bigWins: [],
    }),
    [C, x] = V(!1),
    [w, k] = V(
      ((it = Mt[l().symbol || Z.setting.currencyName]) == null
        ? void 0
        : it.amount.minus(
            ((W = Mt[l().symbol || Z.setting.currencyName]) == null
              ? void 0
              : W.bonusAmount) || 0
          )) ||
        ((at = Mt[l().name || Z.setting.currencyName]) == null
          ? void 0
          : at.amount)
    );
  se(() => {
    var R, L, _;
    k(
      ((L = Mt[l().symbol || Z.setting.currencyName]) == null
        ? void 0
        : L.amount.minus(
            ((R = Mt[l().symbol || Z.setting.currencyName]) == null
              ? void 0
              : R.bonusAmount) || 0
          )) ||
        ((_ = Mt[l().symbol || Z.setting.currencyName]) == null
          ? void 0
          : _.amount)
    );
  });
  const T = X(() => o() || 1);
  function B() {
    return ot(this, arguments, function* (R = O()) {
      const L = q(U({}, R), {
        currency: q(U({}, R.currency), {
          amount: new D(R.currency.amount).todp(R.currency.decimal),
        }),
      });
      if (!C())
        try {
          yield h(L);
        } catch (nt) {
          throw (nt.message && Pt.error(nt.message), nt);
        }
      const _ = p(L),
        Q = {
          currency: L.currency,
          params: { crashRate: L.params.crashRate, gameId: i() },
          txId: _,
          scriptId: 0,
        };
      y("beted", Q);
      try {
        yield e.play(Q), r(ur.normal), yield j(Number(R.params.crashRate));
      } catch (nt) {
        Pt.error(nt.message), r(nt), s(Q.txId, !1);
      } finally {
        s(Q.txId), y("beted", void 0), x(!1);
      }
    });
  }
  xt(() => {
    i() &&
      Yt(() => {
        b.nextBet && (B(b.nextBet), y("nextBet", void 0)), y("xBeted", {});
        for (const [R, L] of Object.entries(b.xNextBet))
          L && (f(L).catch(Pt), y("xNextBet", R, void 0));
      });
  });
  const $ = (function (R) {
    let L = !1,
      _ = Promise.resolve();
    return (...Q) => (
      L ||
        ((L = !0),
        (_ = R(...Q).finally(() => {
          L = !1;
        }))),
      _
    );
  })(() =>
    ot(this, null, function* () {
      const R = b.beted;
      if (R)
        try {
          yield e.leave(R.params.gameId), s(R.txId), y("beted", void 0);
        } catch (L) {}
    })
  );
  function j(R) {
    return ot(this, null, function* () {
      const L = Yt(i);
      return Ce(
        Xe([e.payout$, e.end$]).pipe(
          xe(([_, Q]) => Number(Q == null ? void 0 : Q.roundId) >= L || _ >= R),
          Ue(1),
          ve((_) => _[0])
        )
      );
    });
  }
  function O(R = U({ amount: b.amount }, l()), L) {
    const _ = {
      currency: R,
      params: { crashRate: b.rate, gameId: 0 },
      txId: 0,
      scriptId: 0,
    };
    return L && (_.params.trenball = L), _;
  }
  const N = X(() => ({ red: Ie(m(), 2), green: 2, moon: 10 }));
  function f(R) {
    return ot(this, null, function* () {
      const L = q(U({}, R), {
        currency: q(U({}, R.currency), {
          amount: new D(R.currency.amount).todp(R.currency.decimal),
        }),
      });
      if (!C())
        try {
          yield h(L);
        } catch (pt) {
          throw (pt.message && Pt.error(pt.message), pt);
        }
      const _ = R.params.trenball,
        Q = p(L),
        nt = q(U({}, L), {
          params: q(U({}, L.params), { gameId: i() }),
          txId: Q,
        });
      y("xBeted", { [_]: nt });
      try {
        return (
          yield e.play(nt),
          (yield (function (jt) {
            return ot(this, null, function* () {
              const Jt = i(),
                ue = jt === "moon" ? N().moon : N().green,
                Le = yield Ce(
                  Xe([e.payout$, e.end$]).pipe(
                    xe(
                      ([de, me]) =>
                        Number(me == null ? void 0 : me.roundId) >= Jt ||
                        de >= ue
                    ),
                    Ue(1),
                    ve((de) => de[0])
                  )
                );
              return jt === "red" ? Le < ue : Le >= ue;
            });
          })(_))
            ? (y("bigWins", (jt) => [...jt, nt]),
              Pr(2e3).then(() => {
                s(nt.txId);
              }),
              N()[_])
            : 0
        );
      } catch (pt) {
        throw (Pt.error(pt.message), s(nt.txId, !1), pt);
      } finally {
        s(nt.txId), y("xBeted", _, void 0), x(!1);
      }
    });
  }
  const v = pe(e.players),
    I = pe(e.xGreenPlayers),
    A = pe(e.xRedPlayers),
    E = X(() => [...I(), ...A()]),
    K = X(() => e.players().find((R) => R.userId === Z.userId)),
    P = gt(e.normalBetAmount$),
    z = gt(e.xBetAmount$),
    st = X(() => Number(z() || 0) + Number(P() || 0));
  return (
    xt(() => {
      const R = K();
      R &&
        R.rate === 0 &&
        [rt.progress, rt.preparing].includes(g()) &&
        !b.beted &&
        (y("amount", Number(R.betAmount)),
        y("beted", {
          currency: U(
            {
              amount: new D(R.betAmount || 0)
                .todp(c.activeCurrencyConfig.precisionUnit)
                .toNumber(),
            },
            l()
          ),
          params: { crashRate: b.rate, gameId: i() },
          txId: 0,
          scriptId: 0,
        })),
        R && R.rate > 0 && y("beted", void 0);
    }),
    xt(() => {
      g() === rt.ended &&
        (y("beted", void 0),
        y("xBeted", { red: void 0, green: void 0, moon: void 0 }));
    }),
    xt(() => {
      E()
        .filter((R) => R.userId === Z.userId)
        .forEach((R) => {
          R.x &&
            R.gameId === i() &&
            y("xBeted", en[R.x.toString()], {
              currency: U(
                {
                  amount: new D(R.betAmount || 0)
                    .todp(c.activeCurrencyConfig.precisionUnit)
                    .toNumber(),
                },
                l()
              ),
              params: { gameId: i(), trenball: en[R.x.toString()] },
              txId: 0,
              scriptId: 0,
            });
        });
    }),
    u(Rn.Provider, {
      value: {
        inputs: b,
        setInputs: y,
        handlePlay: B,
        handleEscape: $,
        snapPayload: O,
        waitEnd: j,
        payout: T,
        status: g,
        mybet: K,
        totalBetAmount: st,
        handleXbet: f,
        xBetPayouts: N,
        isPassGuard: C,
        setIsPassGuard: x,
        xBalance: w,
        setXBalance: k,
        players: v,
        greenPlayers: I,
        redPlayers: A,
      },
      get children() {
        return n.children;
      },
    })
  );
}
function ft() {
  return Yn(Rn);
}
function pe(n, t = 100) {
  const e = Xn((r) => Vn(wn, r, 100));
  return X((r) => {
    const i = n();
    return e() ? i : r;
  });
}
function Re(n, t, e = 30) {
  const r = Pe(),
    i = Jn(),
    { hotKeysEnable: o } = On(),
    g = jr(t, e);
  se(() => {
    const m = i(),
      h = o();
    m &&
      m.key === n &&
      Yt(() => {
        r() && h && (m.preventDefault(), g());
      });
  });
}
var ai = S('<div class="relative w-full flex items-center">'),
  si = S("<div>"),
  oi = S('<div class="text-left w-1/2 font-mono">'),
  li = S(
    '<span class="flex flex-col items-center justify-center leading-tight"><span></span><span>'
  );
function nn() {
  const { game: n } = je(),
    { mybet: t } = ft(),
    e = gt(n.status$),
    r = X(() => {
      var g;
      const o = e();
      return o === rt.connecting
        ? 0
        : o === rt.preparing
        ? 1
        : o === rt.progress &&
          t() &&
          ((g = t()) == null ? void 0 : g.rate) === 0
        ? 2
        : 3;
    });
  return (
    (i = ai()),
    a(
      i,
      u(Ct, {
        get when() {
          return r() === 0;
        },
        get fallback() {
          return u(Ct, {
            get when() {
              return r() === 1;
            },
            get fallback() {
              return u(Ct, {
                get when() {
                  return r() === 2;
                },
                get fallback() {
                  return u(ui, {});
                },
                get children() {
                  return u(Ln, {});
                },
              });
            },
            get children() {
              return u(ci, {});
            },
          });
        },
        get children() {
          return u(di, {});
        },
      })
    ),
    i
  );
  var i;
}
function ci() {
  const n = qt(),
    { inputs: t, handlePlay: e } = ft();
  function r() {
    i() ||
      (Z.login ? e().catch((o) => o.msg && Pt(o.msg)) : n("/login/signin"));
  }
  Re(" ", r);
  const i = X(() => !!t.beted);
  return u(Bt, {
    get disabled() {
      return i();
    },
    class: "flex-1 w-full md:max-w-[25rem] text-[#000] md:mx-auto md:h-12",
    type: "brand",
    onClick: r,
    get children() {
      return G(() => !!i())() ? d("Loading...") : d("Bet");
    },
  });
}
function Ln(n) {
  const { inputs: t, handleEscape: e, payout: r } = ft(),
    { activeToken: i, activeFiatToken: o, isViewInFiat: g } = Et(),
    { coinFormat: m } = At(),
    h = X(() => {
      var c;
      const l = t.beted;
      if (l && !n.disabled)
        return m(
          new D(l.currency.amount).mul(r()),
          (c = t.beted) == null ? void 0 : c.currency.symbol
        );
    });
  return (
    Re(" ", e),
    u(Bt, {
      class:
        "flex-1 w-full max-w-[25rem] flex-row items-center justify-center text-primary_brand md:h-12 mx-auto",
      style: {
        background: "linear-gradient(270deg, #FBD765 0%, #EF9E3F 100%)",
        "box-shadow":
          "0px 0px 12px 0px rgba(238, 206, 35, 0.30), 0px -2px 0px 0px #CA7A1D inset",
      },
      get disabled() {
        return n.disabled;
      },
      onClick: e,
      get children() {
        return [
          ((l = si()),
          a(l, () => d("Cash Out")),
          Y(() => tt(l, Ot("grow text-center", { "w-1/2 text-right": h() }))),
          l),
          u(Ct, {
            get when() {
              return h();
            },
            get children() {
              return [
                u(Ae, {
                  get token() {
                    return G(() => !!g())() ? o() : i();
                  },
                }),
                ((c = oi()), a(c, h), c),
              ];
              var c;
            },
          }),
        ];
        var l;
      },
    })
  );
}
function ui() {
  const { inputs: n, setInputs: t, snapPayload: e, setIsPassGuard: r } = ft(),
    i = $e(),
    o = qt(),
    g = () =>
      ot(this, null, function* () {
        if (!Z.login) return void o("/login/signin");
        if (n.nextBet) return t("nextBet", void 0);
        const m = e();
        try {
          return yield i(m), r(!0), t("nextBet", m);
        } catch (h) {
          return h.message && Pt.error(h.message), r(!1), null;
        }
      });
  return (
    Re(" ", g),
    u(Bt, {
      get class() {
        return mt(
          "flex-1 w-full m-auto text-primary_brand font-[800] md:max-w-[400px] md:h-12",
          n.nextBet && "!bg-secondary"
        );
      },
      type: "brand",
      onClick: g,
      get children() {
        var m,
          h,
          l = li(),
          c = l.firstChild,
          s = c.nextSibling;
        return (
          a(
            c,
            ((m = G(() => !!n.nextBet)),
            () => (m() ? d("Loading...") : d("Bet")))
          ),
          a(
            s,
            ((h = G(() => !!n.nextBet)),
            () => (h() ? d("Cancel") : `(${d("Next Round")})`))
          ),
          l
        );
      },
    })
  );
}
const di = () =>
  u(Bt, {
    disabled: !0,
    class:
      "flex-1 w-full sm:w-100 text-primary_brand font-[800] md:max-w-[400px] mx-auto md:h-12",
    type: "brand",
    get children() {
      return d("Connecting...");
    },
  });
function mi(n) {
  return u(Rr, {
    get class() {
      return n.class;
    },
  });
}
var hi = S(
    '<div class="overflow-hidden flex-auto bg-layer4 h-[2rem] rounded-lg md:rounded-lg md:h-[2.5rem]">'
  ),
  gi = S(
    '<div class="flex w-[2rem] h-[2rem] justify-center items-center ml-[0.5rem] bg-layer4 rounded-md md:rounded-lg box-border p-2 md:w-10 md:h-10">'
  ),
  pi = S('<div id=crash-banner class="px-2 flex">'),
  fi = S(
    '<div class="flex items-center justify-center gap-1 px-2 h-full"><span></span><span class="flex flex-col"><span>×'
  ),
  bi = S('<span class="text-xs leading-tight text-tertiary font-semibold">');
const yi = (n) => {
  const { logs: t } = Pn(),
    [e, r] = V([]);
  let i;
  const [o, g] = V(0),
    [m, h] = V(null),
    l = qt(),
    c = X(() => Kn(() => i));
  return (
    xt(() => {
      if (!c().width) return;
      const p = Math.round(Tr([390, 700], [5, 7], !0)(Number(c().width))) + 1;
      g(p), r(t().slice(0, p).reverse());
    }),
    xt(() => {
      const p = t(),
        b = m();
      p.length > 0 &&
        b &&
        t().length > o() &&
        Lr(b, {
          initial: { transform: "translateX(0%)" },
          animate: { transform: `translateX(-${115 / o()}%)` },
          transition: { duration: 0.5 },
        });
    }),
    (s = pi()),
    typeof i == "function" ? Ut(i, s) : (i = s),
    a(
      s,
      u(J, {
        get when() {
          return !e().length;
        },
        get children() {
          return u(ae.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 },
            class:
              "flex-1 truncate rounded-lg text-center leading-10 bg-layer4 text-zinc-950 dark:text-zinc-50",
            get children() {
              return d("Game result will be displayed");
            },
          });
        },
      }),
      null
    ),
    a(
      s,
      u(J, {
        get when() {
          return e().length;
        },
        get children() {
          return [
            ((b = hi()),
            b.style.setProperty("width", "calc(100% - 2rem - 1rem)"),
            a(
              b,
              u(ae.div, {
                ref: (y) => h(y),
                get class() {
                  return (
                    "grid grid-auto-flow-column gap-1 h-full overflow-x-visible " +
                    (o() ? "grid-cols-" + (o() - 1) : "grid-cols-9")
                  );
                },
                get style() {
                  return {
                    "grid-template-columns": `${Array.from(
                      { length: o() },
                      () => `calc((100% - ${o()} * 0.25rem) / ${o() - 1})`
                    ).join(" ")}`,
                  };
                },
                get children() {
                  return u(St, {
                    get each() {
                      return e();
                    },
                    children: (y) => {
                      const C = y.maxRate,
                        x = C >= 10,
                        w = C >= 2 && C < 10;
                      return (
                        (T = fi()),
                        (B = T.firstChild),
                        ($ = B.nextSibling),
                        (j = $.firstChild),
                        (O = j.firstChild),
                        (T.$$click = (N) => {
                          N.stopPropagation(),
                            l(`/allplayers/crash/${y.gameId}`);
                        }),
                        a(
                          $,
                          ((k = G(() => !dt.mobile)),
                          () => {
                            return k() && ((N = bi()), a(N, () => y.gameId), N);
                            var N;
                          }),
                          j
                        ),
                        a(j, () => (Math.round(100 * C) / 100).toFixed(2), O),
                        Y(
                          (N) => {
                            var f = Ot(
                                "w-3 h-3 rounded-full flex-shrink-0",
                                x
                                  ? ct.darken
                                    ? "bg-yellow"
                                    : "bg-[#D4D80B]"
                                  : w
                                  ? "bg-brand"
                                  : "bg-warning"
                              ),
                              v = Ot(
                                "text-sm leading-tight text-left whitespace-nowrap font-extrabold",
                                x
                                  ? ct.darken
                                    ? "text-yellow"
                                    : "text-[#D4D80B]"
                                  : w
                                  ? "text-brand"
                                  : "text-warning"
                              );
                            return (
                              f !== N.e && tt(B, (N.e = f)),
                              v !== N.t && tt(j, (N.t = v)),
                              N
                            );
                          },
                          { e: void 0, t: void 0 }
                        ),
                        T
                      );
                      var k, T, B, $, j, O;
                    },
                  });
                },
              })
            ),
            b),
            ((p = gi()),
            (p.$$click = (y) => {
              const C = y.target.getBoundingClientRect();
              n.changeTrends(!n.showTrens, { top: C.top, left: C.left });
            }),
            a(
              p,
              u(Yr, {
                get class() {
                  return Ot(
                    "scale-110 md:scale-75",
                    n.showTrens ? "text-brand" : "text-secondary"
                  );
                },
              })
            ),
            p),
          ];
          var p, b;
        },
      }),
      null
    ),
    s
  );
  var s;
};
Gt(["click"]);
class xi {
  constructor() {
    (this.row = 0), (this.col = 0);
  }
  computeSpaceMatrix(t) {
    const e = new Array(this.row * this.col).fill(null);
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      for (let o = 0; o < i.length; o++) {
        const g = i[o];
        let m = null,
          h = null;
        if (o === 0) {
          if (((m = e[this.indexOfMatrix(r, o + 1)]), m || r === this.col - 1))
            return this.computeSpaceMatrix(t.slice(1));
          (g.vector = [o, r]), (g.direction = 0);
        } else {
          const l = i[o - 1];
          let [c, s] = l.vector.slice();
          if (l.direction === 0 && c + 1 < this.row) {
            const p = e[this.indexOfMatrix(s, c + 1)];
            if (
              (c + 2 < this.row && (m = e[this.indexOfMatrix(s, c + 2)]),
              s > 0 && (h = e[this.indexOfMatrix(s - 1, c + 1)]),
              m && m.value === g.value)
            ) {
              if (c === 0) return this.computeSpaceMatrix(t.slice(1));
              s++, (g.direction = 1);
            } else
              (h && h.value === g.value) || p
                ? (s++, (g.direction = 1))
                : (c++, (g.direction = 0));
          } else s++, (g.direction = 1);
          if (s === this.col - 1)
            return (
              r === 0 ? t[0].shift() : (t = t.slice(1)),
              this.computeSpaceMatrix(t)
            );
          g.vector = [c, s];
        }
        e[this.indexOfMatrix(g.vector[1], g.vector[0])] = g;
      }
    }
    return e.map((r) => (r ? r.value : 0));
  }
  indexOfMatrix(t, e) {
    return t + e * this.col;
  }
  getDragons(t) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const i = { vector: [-1, -1], value: t[r], direction: 0 };
      this.isEqual(t[r], t[r - 1]) ? e[e.length - 1].push(i) : e.push([i]);
    }
    return e;
  }
  isEqual(t, e) {
    if ((t < 2 && e < 2) || (t >= 2 && e >= 2)) return !0;
  }
  render(t, e = this.row, r = this.col) {
    return (
      (this.row = e),
      (this.col = r),
      this.computeSpaceMatrix(this.getDragons(t))
    );
  }
}
var vi =
    S(`<div><div class="flex justify-between items-center relative py-2 text-center font-semibold"><span class="text-sm font-bold flex-1 user-select-none"></span></div><style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style><div class="dots-wrap overflow-x-auto mx-2 scrollbar-hide"></div><span class="text-sm text-secondary flex justify-start font-semibold items-center gap-1 m-2 mt-0">`),
  wi = S('<div class="grid gap-[0.13rem] mb-2 w-[600px]">'),
  Ci = S("<div><div>"),
  Si = S(
    '<div><div class="flex justify-center mb-4"><div class="flex items-center mx-2">≥2&times;</div><div class="flex items-center mx-2">&lt;2&times;</div><div class="flex items-center mx-2">≥10&times;</div></div><div>'
  ),
  Ii = S(
    '<div class="flex mb-4 items-center"><div class="grid h-[8rem] gap-[1px] flex-none"></div><div class="flex-auto ml-3 p-2 rounded bg-layer4"><div class="text-secondary text-sm font-semibold">:</div><div class="flex flex-wrap mt-2">'
  ),
  Bi = S('<div class="flex items-center"><div>');
const ki = (n) => {
    const { logs: t } = Pn(),
      [e] = V(new xi()),
      r = () => document.querySelector(".dots-wrap"),
      { draggable: i } = Er();
    let o;
    const [g, m] = V({ width: 0, height: 0 }),
      h = X(() =>
        t()
          .slice(-192)
          .map(({ maxRate: c }) => (c < 2 ? 1 : c < 10 ? 2 : 3))
      ),
      l = X(() => e().render(h().reverse(), 6, 32));
    return (
      xt(() => {
        const c = r();
        if (c) {
          const { scrollLeft: s, scrollWidth: p } = c;
          (s === 0 || s > 350) && c.scrollTo(p, 0);
        }
      }),
      Cn(() => {
        o && m({ width: o.offsetWidth, height: o.offsetHeight });
      }),
      u(Zn, {
        get mount() {
          return document.getElementsByTagName("body")[0];
        },
        get children() {
          var c = vi(),
            s = c.firstChild,
            p = s.firstChild,
            b = s.nextSibling.nextSibling,
            y = b.nextSibling;
          return (
            Ut(i, c, () => ({})),
            typeof o == "function" ? Ut(o, c) : (o = c),
            c.style.setProperty("box-shadow", "0 0 24px #00000040"),
            a(p, () => d("Trend")),
            a(
              s,
              u(Bt, {
                get onClick() {
                  return n.onClose;
                },
                class: "absolute right-0",
                get children() {
                  return u(Mr, { class: "size-4 text-secondary" });
                },
              }),
              null
            ),
            Ut(r, b),
            a(
              b,
              u(Ni, {
                get dots() {
                  return l();
                },
              })
            ),
            (y.$$click = () => {
              oe.push(() => u(Ai, {}));
            }),
            a(y, u(le, { name: "Help", class: "w-6 h-6" }), null),
            a(y, () => d("Understanding Trend Chart"), null),
            Y(
              (C) => {
                var x = Ot(
                    "fixed z-[1009] w-[18.6rem] h-auto rounded-xl",
                    ct.darken ? "bg-layer2" : "bg-[#F4F4F4]"
                  ),
                  w = n.position ? `${n.position.top + 32}px` : "auto",
                  k = n.position ? n.position.left - g().width + "px" : "auto";
                return (
                  x !== C.e && tt(c, (C.e = x)),
                  w !== C.t &&
                    ((C.t = w) != null
                      ? c.style.setProperty("top", w)
                      : c.style.removeProperty("top")),
                  k !== C.a &&
                    ((C.a = k) != null
                      ? c.style.setProperty("left", k)
                      : c.style.removeProperty("left")),
                  C
                );
              },
              { e: void 0, t: void 0, a: void 0 }
            ),
            c
          );
        },
      })
    );
  },
  Ni = (n) => {
    return (
      (t = wi()).style.setProperty("grid-template-columns", "repeat(32, 1fr)"),
      a(
        t,
        u(St, {
          get each() {
            return n.dots;
          },
          children: (e) => u(Vt, { type: e }),
        })
      ),
      t
    );
    var t;
  },
  Vt = (n) => {
    return (
      (t = Ci()),
      (e = t.firstChild),
      Y(
        (r) => {
          var i = mt(
              " h-[1.125rem] w-[1.125rem] rounded-md relative",
              n.class,
              ct.darken ? "bg-layer5" : "bg-[#FFF]"
            ),
            o = `absolute left-[20%] top-[20%] w-[60%] h-[60%] rounded-full ${(() => {
              switch (n.type) {
                case 1:
                  return "bg-warning";
                case 2:
                  return "bg-brand";
                case 3:
                  return ct.darken ? "bg-yellow" : "bg-[#D4D80B]";
                default:
                  return ct.darken ? "bg-layer5" : "bg-[#FFF]";
              }
            })()}`;
          return (
            i !== r.e && tt(t, (r.e = i)), o !== r.t && tt(e, (r.t = o)), r
          );
        },
        { e: void 0, t: void 0 }
      ),
      t
    );
    var t, e;
  },
  Oi = [
    2, 1, 2, 0, 0, 0, 2, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  Pi = [
    2, 1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2,
    0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0,
  ],
  Ti = [5.64, 2.63, 4.15, 1.82, 2.31, 18.78],
  $i = [2.25, 18.12, 4.21, 3.24, 2.14, 3.31, 5.55, 1.32, 1.96, 4.46],
  Ai = () =>
    u(Sn, {
      get title() {
        return d("Understanding Trend Chart");
      },
      class: "!bg-layer2",
      get children() {
        var n = Si(),
          t = n.firstChild,
          e = t.firstChild,
          r = e.firstChild,
          i = e.nextSibling,
          o = i.firstChild,
          g = i.nextSibling,
          m = g.firstChild,
          h = t.nextSibling;
        return (
          a(e, u(Vt, { type: 2, class: "!bg-layer2" }), r),
          a(i, u(Vt, { type: 1, class: "!bg-layer2" }), o),
          a(g, u(Vt, { type: 3, class: "!bg-layer2" }), m),
          a(h, u(rn, { target: Pi, source: $i }), null),
          a(h, u(rn, { target: Oi, source: Ti }), null),
          n
        );
      },
    }),
  rn = (n) => {
    return (
      (t = Ii()),
      (e = t.firstChild),
      (r = e.nextSibling.firstChild),
      (i = r.firstChild),
      (o = r.nextSibling),
      e.style.setProperty("grid-template-columns", "repeat(6,1fr)"),
      a(
        e,
        u(St, {
          get each() {
            return n.target;
          },
          children: (g) => u(Vt, { type: g }),
        })
      ),
      a(r, () => d("As shown in the chart, the corresponding sequence is"), i),
      a(
        o,
        u(St, {
          get each() {
            return n.source;
          },
          children: (g, m) => {
            return (
              (l = Bi()),
              (c = l.firstChild),
              a(c, g),
              a(
                l,
                ((h = G(() => m() < n.source.length - 1)),
                () => h() && u(Zr, { class: "w-6 h-6 text-secondary" })),
                null
              ),
              Y(() =>
                tt(
                  c,
                  `text-center w-8 ${Ot(
                    g < 2
                      ? "text-warning"
                      : g < 10
                      ? "text-brand"
                      : ct.darken
                      ? "text-yellow"
                      : "text-[#D4D80B]"
                  )}`
                )
              ),
              l
            );
            var h, l, c;
          },
        })
      ),
      t
    );
    var t, e, r, i, o;
  };
Gt(["click"]);
var ji = S(
    '<div class="text-primary mt-4 gap-x-1 text-center text-[1.5rem] flex items-center justify-center flex-nowrap"><div class="whitespace-nowrap font-semibold text-[#faaf00]"></div><div class="font-extrabold whitespace-nowrap ml-1"><span>'
  ),
  Ri = S('<div class="text-base text-center">(<!>)'),
  Li = S("<img draggable=false>"),
  Ei = S(
    '<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">'
  );
function Fi() {
  const [n, t] = V(!1),
    { mybet: e } = ft(),
    { findToken: r, isViewInFiat: i } = Et(),
    { coinFormatWithPrecision: o, coinFormat: g } = At(),
    m = gt(H.isJoin$),
    h = () => {
      const p = e();
      return p && p.rate > 0 ? p : void 0;
    },
    l = X(() => {
      const p = h();
      if (!p) return ["", ""];
      const b = new D(p.betAmount || 0).mul(p.rate).div(100),
        y = p.currencyName;
      return [o(b, y), g(b, y)];
    }),
    c = () => {
      t(!1), H.isJoin$.next(!0);
    };
  return (
    se(() => {
      let p;
      h() && !Yt(m) && (t(!0), (p = setTimeout(c, 3e3))),
        $t(() => {
          p && (c(), clearTimeout(p));
        });
    }),
    (s = Ei()),
    a(
      s,
      u(ae.div, {
        initial: { opacity: 0, scale: 0.6 },
        get animate() {
          return { opacity: n() ? 1 : 0, scale: n() ? 0.8 : 0.6 };
        },
        transition: { duration: 0.3, easing: "ease-in-out" },
        class: "p-1 bg-[rgba(0,0,0,0.5)] bg-opacity-50 rounded-lg",
        get children() {
          return [
            ((b = ji()),
            (y = b.firstChild),
            (C = y.nextSibling),
            (x = C.firstChild),
            a(y, () => d("You Won")),
            a(x, () => l()[0]),
            a(
              C,
              u(Ae, {
                get token() {
                  var w;
                  return r((w = e()) == null ? void 0 : w.currencyName);
                },
              }),
              null
            ),
            b),
            u(J, {
              get when() {
                return i();
              },
              get children() {
                var w = Ri(),
                  k = w.firstChild.nextSibling;
                return k.nextSibling, a(w, () => l()[1], k), w;
              },
            }),
            ((p = Li()), Y(() => ht(p, "src", yt.win)), p),
          ];
          var p, b, y, C, x;
        },
      })
    ),
    s
  );
  var s;
}
var Mi = S(
  '<div class="mx-auto w-full relative light-game-view -mt-2 pt-2 rounded-t-xl dark:bg-[#292D2E] md:h-[25rem]">'
);
const Di = (n) => {
  const { payout: t } = ft(),
    [e, r] = V(!1),
    [i, o] = V(null),
    g = Pe();
  return (
    xt(() => {
      g() || r(!1);
    }),
    (m = Mi()),
    a(
      m,
      u(yi, {
        changeTrends: (h, l) => {
          r(h), o(l);
        },
        get showTrens() {
          return e();
        },
      }),
      null
    ),
    a(
      m,
      u(J, {
        get when() {
          return e();
        },
        get children() {
          return u(ki, {
            onClose: () => r(!1),
            get position() {
              return i();
            },
          });
        },
      }),
      null
    ),
    a(m, () => n.children, null),
    a(
      m,
      u(J, {
        get when() {
          return t() > 100;
        },
        get children() {
          return u(ae.div, {
            ref: (h) => {
              const l = { fram: 0 },
                c = In.to(l, {
                  fram: 5,
                  repeat: -1,
                  yoyo: !0,
                  duration: 1,
                  ease: "none",
                  onUpdate: () => {
                    h.style.backgroundPositionY =
                      200 * Math.round(-l.fram) + "px";
                  },
                });
              xt(() => {
                g() &&
                  (c.play(),
                  $t(() => {
                    c.pause();
                  }));
              }),
                $t(c.kill);
            },
            initial: { left: "-999px" },
            animate: { left: "0px" },
            exit: { left: "-999px" },
            transition: { duration: 0.8 },
            class: "absolute top-10 w-[179px] h-[64px] overflow-hidden",
            get style() {
              return {
                "background-image": `url(${yt.cat})`,
                "background-size": "cover",
              };
            },
          });
        },
      }),
      null
    ),
    a(m, u(Fi, {}), null),
    m
  );
  var m;
};
var Wi = S(
  `<div class=min-h-[15.875rem]><div class="relative mt-1 md:mt-4 after:content-[''] after:block after:pt-[40%] min-h-[15rem] max-h-[19rem]"><canvas>`
);
const Lt = [60, 40],
  Be = "#FFFFFF",
  En = "#E53E6E",
  Xt = "mono, avertastd, system-ui",
  Rt = 10,
  vt = { width: 0, height: 0 },
  zt = { width: 0, height: 0 },
  an = (n) => {
    let t = 0.4,
      e = 0.1;
    for (; !(n < t || ((t *= 5), (e *= 2), n < t)); ) (t *= 2), (e *= 5);
    return e;
  },
  Fn = (n) => {
    n.clearRect(0, 0, zt.width, zt.height);
  },
  ke = (n) => {
    const t = 2 * vt.width;
    return `${((t / (t < 1e3 ? 60 : 100)) * n).toFixed(2)}px`;
  },
  Mn = () => `${vt.width}_${vt.height}`,
  ne = Tn(() => [2 * vt.width - 2 * Lt[0], 2 * vt.height - Lt[1] - Rt], Mn),
  re = (n) => `${ke(n)} ${Xt}`,
  sn = (n) => {
    const [t, e] = ne(),
      [r, i] = Dn(n);
    return [t / r, e / i];
  },
  Dn = (n) => {
    const t = H.timeToRate(n);
    return [n > 1e4 ? n : 1e4, (t > 2 ? t : 2) - 1];
  },
  Gi = (n, t, e) => {
    const r = n.createLinearGradient(0, 0, 0, e),
      i = t ? [229, 62, 110] : [49, 238, 136];
    for (let o = 0; o <= 20; o++) {
      const g = o / 20,
        m = `rgba(${i[0]}, ${i[1]}, ${i[2]}, ${(0.2 * (1 - g)).toFixed(2)})`;
      r.addColorStop(g, m);
    }
    return r;
  },
  _i = (n, t) => {
    const e = n.createLinearGradient(0, 0, vt.width, 0),
      r = [255, 255, 255],
      i = t ? [229, 62, 110] : [49, 238, 136],
      o = 20;
    e.addColorStop(0, "rgb(255, 255, 255)"),
      e.addColorStop(0.6, "rgb(255, 255, 255)");
    for (let g = 0; g <= o; g++) {
      const m = (g / o) * 0.4 + 0.6,
        h = Math.round(r[0] * (1 - g / o) + i[0] * (g / o)),
        l = Math.round(r[1] * (1 - g / o) + i[1] * (g / o)),
        c = Math.round(r[2] * (1 - g / o) + i[2] * (g / o));
      e.addColorStop(m, `rgb(${h}, ${l}, ${c})`);
    }
    return e;
  },
  Hi = (n, t, e, r) => {
    t !== Lt[0] &&
      ((n.fillStyle = r ? En : "#31EE88"),
      n.beginPath(),
      n.arc(t, e, 12, 0, 2 * Math.PI),
      n.fill());
  },
  Ui = (n, t) => {
    const { width: e, height: r } = ce(),
      i = e / 2,
      o = (2 * r) / 5;
    (n.font = re(8)), (n.fillStyle = Be), n.fillText(`${t.toFixed(2)}×`, i, o);
  },
  on = (n) => {
    const { width: t } = ce();
    return (t / (t < 1e3 ? 70 : 100)) * n;
  },
  fe = (n) => {
    const { height: t, width: e } = ce();
    return (t / (e < 1e3 ? 70 : 100)) * n;
  },
  ce = Tn(() => ({ width: 2 * vt.width, height: 2 * vt.height }), Mn),
  zi = (n) => (t) => {
    if (!t)
      return () => {
        dr.subscribe();
      };
    let e = -1;
    const r = [],
      i = H.escape$.pipe(Ar(50)).subscribe((m) => {
        if (m) {
          if (
            (m.usd < 1 && m.userId !== Z.userId) ||
            window.document.hidden ||
            !m.name
          )
            return;
          m.name = kt.User.getName(m.name);
          const h = H.timeToRate(Date.now() - H.startTime$.value) - 1,
            l = q(U({}, m), {
              elapsed: Date.now() - H.startTime$.value,
              payout: h,
              payoutTween: h,
            });
          In.to(l, {
            duration: 8,
            payoutTween: 0,
            onComplete: () => {
              const c = r.indexOf(l);
              c !== -1 && r.splice(c, 1);
            },
          }),
            r.push(l);
        }
      }),
      o = t.getContext("2d");
    (vt.height = vt.height), (vt.width = vt.width);
    const g = () => {
      const m = H.startTime$.value,
        h = H.status$.value,
        l = H.rate$.value;
      let c = 0;
      Fn(o),
        (c = ((s, p) => {
          var b;
          if (s === rt.progress) {
            const y = Date.now() - p;
            return y > 0 && y < 2e5 ? y : 0;
          }
          return s === rt.ended
            ? H.rateToTime(
                (((b = H.end$.value) == null ? void 0 : b.maxRate) || 0) / 100
              )
            : 0;
        })(h, m)),
        ((s, p, b) => {
          const y = b === rt.ended,
            C = ne(),
            [x, w] = sn(p),
            k = Math.max(p / 1e3, 50);
          (s.lineWidth = 10),
            (s.font = Xt),
            s.beginPath(),
            (s.strokeStyle = _i(s, y));
          let T = { x: 0, y: 1 / 0 },
            B = { x: 0, y: 0 };
          for (let j = 0; j <= p; j += k) {
            const O = H.timeToRate(j) - 1,
              N = C[1] - O * w * 0.95 + Rt - 6,
              f = j * x + Lt[0];
            s.lineTo(f, N),
              N < T.y && (T = { x: f, y: N }),
              (B = { x: f, y: N });
          }
          s.stroke(),
            s.lineTo(B.x, C[1] + Rt),
            s.lineTo(Lt[0], C[1] + Rt),
            s.closePath();
          const $ = Gi(s, y, C[1] + Rt);
          (s.fillStyle = $),
            s.fill(),
            Hi(s, T.x, T.y, y),
            b === rt.progress && Ui(s, H.timeToRate(p));
        })(o, c, h),
        ((s, p, b) => {
          (s.font = `${ke(1.5)} ${Xt}`),
            p.forEach((y) => {
              const [C, x, w] = ct.darken ? Ze(Be) : Ze("#000000");
              (s.fillStyle = `rgba(${C}, ${x}, ${w}, .5)`),
                (s.globalAlpha = y.payoutTween / y.payout);
              const [k, T] = sn(b),
                B = Lt[0] + k * y.elapsed,
                $ = ne()[1] + Lt[1] - y.payoutTween * T,
                j = (0.01 * y.rate).toFixed(2);
              s.fillText(`${y.name} @${j}`, B, $ + 20),
                s.beginPath(),
                s.arc(B, $, 5, 0, 2 * Math.PI),
                s.closePath(),
                s.fill(),
                (s.globalAlpha = 1);
            });
        })(o, r, c),
        ((s, p, b, y, C, x) => {
          const { width: w, height: k } = ce(),
            T = w / 2,
            B = (2 * k) / 5,
            $ = on(35),
            j = fe(8),
            O = (w - $) / 2,
            N = 0.4 * k - j / 2;
          if (
            ((s.fillStyle = Be),
            (s.textAlign = "center"),
            (s.textBaseline = "middle"),
            p === rt.ended)
          ) {
            (s.font = re(8)),
              (s.fillStyle = En),
              s.fillText(`${y.toFixed(2)}×`, T, B);
            const f = on(12),
              v = fe(10),
              I = 16;
            (s.fillStyle = ct.darken ? "#4A5354" : "#FFFFFF"),
              s.beginPath(),
              s.moveTo((w - f) / 2 + I, 0.56 * k),
              s.lineTo((w - f) / 2 + f - I, 0.56 * k),
              s.arcTo(
                (w - f) / 2 + f,
                0.56 * k,
                (w - f) / 2 + f,
                0.56 * k + I,
                I
              ),
              s.lineTo((w - f) / 2 + f, 0.56 * k + v - I),
              s.arcTo(
                (w - f) / 2 + f,
                0.56 * k + v,
                (w - f) / 2 + f - I,
                0.56 * k + v,
                I
              ),
              s.lineTo((w - f) / 2 + I, 0.56 * k + v),
              s.arcTo(
                (w - f) / 2,
                0.56 * k + v,
                (w - f) / 2,
                0.56 * k + v - I,
                I
              ),
              s.lineTo((w - f) / 2, 0.56 * k + I),
              s.arcTo((w - f) / 2, 0.56 * k, (w - f) / 2 + I, 0.56 * k, I),
              s.closePath(),
              s.fill(),
              (s.fillStyle = ct.darken ? "#FFFFFF" : "#4A5354"),
              (s.font = `900 ${ke(2)} ${Xt}`),
              s.fillText(x("Crashed"), w / 2, 0.56 * k + fe(5));
          } else if (p === rt.preparing) {
            const f = (b - Date.now()) / 1e3;
            if (f < 0) return;
            const v =
              (f / (H.betTime$.value > 0 ? H.betTime$.value / 1e3 : 6)) * $;
            s.fillStyle = "#3A4142";
            const I = s.createLinearGradient(O, N, v + O, N),
              A = ct.darken ? "#3A4142" : "#FFF",
              E = ct.darken ? "#FFF" : "#000",
              K = "#25DC80";
            I.addColorStop(0, K), I.addColorStop(1, A), (s.fillStyle = I);
            const P = 12;
            s.beginPath(),
              s.moveTo(O + P, N),
              s.lineTo(O + $ - P, N),
              s.quadraticCurveTo(O + $, N, O + $, N + P),
              s.lineTo(O + $, N + j - P),
              s.quadraticCurveTo(O + $, N + j, O + $ - P, N + j),
              s.lineTo(O + P, N + j),
              s.quadraticCurveTo(O, N + j, O, N + j - P),
              s.lineTo(O, N + P),
              s.quadraticCurveTo(O, N, O + P, N),
              s.closePath(),
              s.fill(),
              (s.font = re(2)),
              (s.fillStyle = E),
              s.fillText(
                x("Starts in __sec__", { sec: `${f.toFixed(1)}s` }),
                T,
                B
              );
          } else
            p === rt.connecting &&
              ((s.font = re(3)), s.fillText(x("Reconnecting..."), T, B));
        })(o, h, m, l, 0, n),
        ((s, p) => {
          const [b, y] = Lt,
            [C, x] = ne(),
            w = H.timeToRate(p),
            k = an(w),
            T = zt.width,
            B = zt.height;
          s.lineWidth = 1;
          const $ = ct.darken ? "#4D545A " : "#959BA6",
            j = ct.darken ? "#B3BEC1" : "#5F6D6D";
          (s.strokeStyle = $),
            (s.fillStyle = j),
            (s.font = `22px ${Xt}`),
            (s.textAlign = "center");
          const O = Dn(p),
            N = x / O[1];
          for (let I = k, A = 0; I < O[1]; I += k, A++) {
            I = Math.round(100 * I) / 100;
            const E = x - new D(I).times(N).toNumber() + Rt;
            if (
              (s.fillText(`${I + 1}×`, 30, E),
              s.beginPath(),
              s.moveTo(b, E),
              s.lineTo(b + 5, E),
              s.stroke(),
              s.closePath(),
              A > 100)
            )
              break;
          }
          const f = an(O[0]),
            v = C / (O[0] / f);
          for (let I = 0, A = 0, E = 0; I < O[0]; I += f, A++, E++) {
            const K = (I / 1e3).toString(),
              P = s.measureText(K).width,
              z = A * v + b;
            if ((s.fillText(`${K}s`, z - P / 2, x + 20 + Rt), E > 100)) break;
          }
          (s.lineWidth = 1),
            s.beginPath(),
            s.moveTo(b, Rt),
            s.lineTo(b, B - y),
            s.lineTo(T - b, B - y),
            s.stroke();
        })(o, c),
        H.payout$.next(parseFloat(H.timeToRate(c).toFixed(2))),
        (e = requestAnimationFrame(g));
    };
    return (
      (e = requestAnimationFrame(g)),
      () => {
        cancelAnimationFrame(e), i.unsubscribe();
      }
    );
  },
  qi = () => {
    const [n, t] = Oe({ width: 333, height: 150 });
    let e, r;
    const i = () => {
      if (e && r) {
        const o = 2 * r.clientWidth,
          g = 2 * r.clientHeight;
        (e.width === o && e.height === g) ||
          ((e.width = o),
          (e.height = g),
          (vt.width = r.clientWidth),
          (vt.height = r.clientHeight),
          (zt.width = o),
          (zt.height = g),
          t({ width: o, height: g }));
      }
    };
    return (
      Cn(() => {
        i();
        const o = zi(d);
        let g = o(e);
        const m = () =>
            ((l, c) => {
              l(), c();
            })(i, () => {
              Fn(e.getContext("2d")), g(), (g = o(e));
            }),
          h = new ResizeObserver(
            Dr(() => {
              m();
            }, 500)
          );
        r && h.observe(r),
          window.addEventListener("resize", m),
          $t(() => {
            g(), window.removeEventListener("resize", m), h.disconnect();
          });
      }),
      (() => {
        var o = Wi(),
          g = o.firstChild,
          m = g.firstChild;
        return (
          typeof r == "function" ? Ut(r, g) : (r = g),
          typeof e == "function" ? Ut(e, m) : (e = m),
          Ne(
            m,
            Qn(n, { class: "pl-2 w-full h-full absolute top-0 left-0" }),
            !1,
            !1
          ),
          o
        );
      })()
    );
  };
var Xi = S(
    '<div class="flex items-center gap-2 text-sm"><div class=whitespace-nowrap>🎉</div><b class="text-brand truncate"></b><div class="leading-3 text-center">!'
  ),
  ln = S(
    '<span class="text-sm text-warning font-extrabold max-w-[6.5rem] whitespace-nowrap">'
  ),
  Vi = S('<div class="flex flex-row justify-between items-center w-full">'),
  Yi = S(
    '<div class="text-warning flex items-center gap-1 text-sm">😈 <span class=inline-block></span> '
  ),
  Ji = S(
    '<div class="flex h-10 items-center w-full"><div class="flex items-center w-3/12 max-w-[6rem]"></div><div class="flex items-center justify-center w-1/12 text-secondary whitespace-nowrap flex-1 text-xs"><div class=px-2></div></div><div class="w-[30%] truncate text-right mr-2 text-xs"><div class="flex items-center justify-end font-extrabold whitespace-nowrap"><img alt=""class="inline-block w-3 h-3 mr-1"><div class=truncate></div></div></div><div>'
  ),
  Ki = S('<span class="font-extrabold inline-block truncate">'),
  Zi = S("<div>"),
  Qi = S(
    '<div class="flex items-center justify-end font-extrabold whitespace-nowrap"><img alt=""class="inline-block w-3 h-3 mr-2"><div class=truncate>'
  ),
  ta = S(
    '<div class="flex items-center justify-center"><div class=mr-2><svg xmlns=http://www.w3.org/2000/svg width=13 height=14 viewBox="0 0 13 14"fill=none><circle cx=6.5 cy=6.78613 r=6.5 fill=#23EE88 fill-opacity=0.2></circle><circle cx=6.5 cy=6.78613 r=2.36328 fill=#23EE88></circle></svg></div><div class="text-sm font-extrabold font-mono">/<!> '
  ),
  ea = S('<div class="flex font-semibold font-mono">'),
  na = S('<div class="text-secondary text-center"><div class=py-2>'),
  ra = S(
    '<div class="p-2 rounded-xl bg-layer4 relative mt-4 md:mt-0 md:ml-2 overflow-hidden lg:h-[44rem]"><div class="flex items-center justify-between bg-layer5 p-2 rounded-lg h-9"></div><div class="bg-layer4 p-1"><div class="flex text-left whitespace-nowrap"><div class="font-normal text-sm text-secondary py-2 w-3/12 truncate"></div><div class="font-normal text-sm text-secondary py-2 text-center w-[17%] truncate"></div><div class="font-normal text-sm text-secondary py-2 text-center w-[30%]"></div><div class="font-normal text-sm text-secondary py-2 text-right w-[30%]"></div></div></div><div class="p-1 pt-0 overflow-y-auto h-[33.5rem] mb-[3rem] md:h-[33.5rem] md:mb-0 relative"><div class="w-full h-full relative"><div class=h-auto></div></div></div><div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full mb-1.5">'
  );
const te = dt.mobile ? mr : hr;
function ia() {
  const { status: n, totalBetAmount: t } = ft();
  let e = X(() => {
    if (n() === rt.ended)
      return Yt(() => {
        let m,
          h = 0;
        for (let l of H.players()) {
          const c = r(l);
          c > h && ((h = c), (m = l));
        }
        return m;
      });
  });
  function r(m) {
    return m.currencyName ? (m.usd * (m.rate - 100)) / 100 : 0;
  }
  const i = () => {
    const m = e();
    return m ? o(new D(r(m))) : "";
  };
  function o(m) {
    return It.printCurrency(
      It.convertCurrency(m, "USD", Z.setting.localeCurrencyName)
    );
  }
  return (
    (g = Vi()),
    a(
      g,
      u(Ct, {
        get when() {
          return e();
        },
        get fallback() {
          return [
            ((l = Yi()),
            (c = l.firstChild.nextSibling),
            c.nextSibling,
            a(c, () => dt.mascot),
            a(l, () => d("took it all! 🥺"), null),
            l),
            ((h = ln()),
            a(h, ((m = G(() => !e())), () => (m() ? o(new D(t())) : ""))),
            h),
          ];
          var m, h, l, c;
        },
        get children() {
          return [
            (() => {
              var h = Xi(),
                l = h.firstChild;
              l.firstChild;
              var c = l.nextSibling,
                s = c.nextSibling,
                p = s.firstChild;
              return (
                a(l, () => d("Congrats"), null),
                a(c, () => {
                  var b;
                  return `@${(b = e()) == null ? void 0 : b.name}`;
                }),
                a(s, () => d("won the most"), p),
                h
              );
            })(),
            ((m = ln()), a(m, i), m),
          ];
          var m;
        },
      })
    ),
    g
  );
  var g;
}
const cn = () => {
  const { totalBetAmount: n, status: t } = ft(),
    { coinFormat: e } = At(),
    { isViewInFiat: r } = Et(),
    [i, o] = V(te),
    g = gt(H.playersCount$),
    m = gt(H.escapeCount$),
    h = gt(H.xBetCount$),
    [l, c] = V([]),
    s = wn(c, 200);
  se(() => s(H.players()));
  const p = () => {
      if (r()) return e(new D(n()));
      {
        const f = It.convertCurrency(
          new D(n()),
          "USD",
          Z.setting.localeCurrencyName
        );
        return It.printCurrency(f, Z.setting.localeCurrencyName);
      }
    },
    b = X(() => t() === rt.ended);
  function y(f) {
    const v = X(() => new D(f.data.betAmount)),
      I = X(() => f.data.rate),
      A = X(() => {
        const L = v(),
          _ = I(),
          Q = L && _ && _ > 1;
        let nt = d("betting"),
          pt = d("betting");
        return (
          Q
            ? ((nt = L.mul(_).div(100).minus(L).toString()),
              (pt = (_ / 100).toFixed(2) + "x"))
            : b() && L && ((nt = L.neg().toString()), (pt = d("bang"))),
          { profit: nt, displayRate: pt, isWin: Q }
        );
      });
    return (
      (K = Ji()),
      (P = K.firstChild),
      (z = P.nextSibling),
      (st = z.firstChild),
      (W = z.nextSibling),
      (it = W.firstChild.firstChild),
      (at = it.nextSibling),
      (R = W.nextSibling),
      a(
        P,
        u(J, {
          get when() {
            return f.data.name !== "****";
          },
          get fallback() {
            return (L = Ki()), a(L, () => kt.userName(f.data.name)), L;
            var L;
          },
          get children() {
            return u(kn, {
              get href() {
                return `/user/profile/${f.data.userId}`;
              },
              class: "inline-block whitespace-nowrap font-extrabold truncate",
              get children() {
                return kt.userName(f.data.name);
              },
            });
          },
        })
      ),
      a(st, () => A().displayRate),
      a(at, () => e(new D(f.data.betAmount), f.data.currencyName)),
      a(
        R,
        ((E = G(() => A().profit === d("betting"))),
        () => {
          return E()
            ? ((nt = Zi()), a(nt, () => A().profit), nt)
            : ((L = Qi()),
              (_ = L.firstChild),
              (Q = _.nextSibling),
              a(Q, () => e(new D(A().profit), f.data.currencyName)),
              Y(() => ht(_, "src", kt.coinIcon(f.data.currencyName || ""))),
              L);
          var L, _, Q, nt;
        })
      ),
      Y(
        (L) => {
          var _ = kt.coinIcon(f.data.currencyName || ""),
            Q = Ot("w-[30%] text-right text-secondary text-xs truncate", {
              "!text-brand": A().isWin,
              "!text-error": A().displayRate === d("bang"),
            });
          return (
            _ !== L.e && ht(it, "src", (L.e = _)),
            Q !== L.t && tt(R, (L.t = Q)),
            L
          );
        },
        { e: void 0, t: void 0 }
      ),
      K
    );
    var E, K, P, z, st, W, it, at, R;
  }
  return (
    (C = ra()),
    (x = C.firstChild),
    (w = x.nextSibling),
    (k = w.firstChild.firstChild),
    (T = k.nextSibling),
    (B = T.nextSibling),
    ($ = B.nextSibling),
    (j = w.nextSibling),
    (O = j.firstChild.firstChild),
    (N = j.nextSibling),
    a(
      x,
      u(Ct, {
        get when() {
          return t() !== rt.ended;
        },
        get fallback() {
          return u(ia, {});
        },
        get children() {
          return [
            ((v = ta()),
            (I = v.firstChild.nextSibling),
            (A = I.firstChild),
            (E = A.nextSibling),
            E.nextSibling,
            a(I, m, A),
            a(I, () => g() + h(), E),
            a(I, () => d("Player"), null),
            v),
            ((f = ea()), a(f, p), f),
          ];
          var f, v, I, A, E;
        },
      })
    ),
    a(k, () => d("Player")),
    a(T, () => d("Cash out")),
    a(B, () => d("Amount")),
    a($, () => d("Profit")),
    a(
      O,
      u(J, {
        get when() {
          return l().length === 0;
        },
        get children() {
          var f = na(),
            v = f.firstChild;
          return a(v, u(Te, {})), f;
        },
      }),
      null
    ),
    a(
      O,
      u(Bn, {
        get each() {
          return l().slice(0, i());
        },
        component: y,
        limit: 5e3,
      }),
      null
    ),
    a(
      N,
      u($n, {
        get isMore() {
          return i() !== te;
        },
        onClick: () => o(i() !== te ? te : gr),
      })
    ),
    C
  );
  var C, x, w, k, T, B, $, j, O, N;
};
var aa = S(
    '<div><div class="flex items-center w-[5rem]"><div class=relative></div></div><div><div><div class="flex justify-end items-center font-extrabold max-w-[5.5rem] truncate"><img alt=""class="inline-block w-3 h-3 mr-1"><div class=truncate>'
  ),
  sa = S("<div>"),
  oa = S('<span class="inline-block w-[5rem] truncate ml-1">'),
  la = S('<div class="text-xs w-1/2">'),
  ca = S(
    '<div><div class="flex flex-1 justify-start mb-1"><span><img class=w-3></span><span class="text-brand ml-1"></span></div><div class="mb-1 flex-1 text-brand text-right truncate ml-2">'
  ),
  ua = S(
    '<div class="w-full flex items-center mt-2 absolute bottom-2 left-0">'
  ),
  da = S(
    '<div class="px-2 pt-4 rounded-xl bg-layer4 relative mt-4 md:mt-0 h-full md:ml-2 overflow-hidden max-h-[46.2rem]"><div class="flex items-center justify-around mb-4 px-10"><div class="flex flex-col justify-center items-center gap-2"><span class="w-12 h-12 rounded-full bg-warning"><img alt=red class="w-full h-full"></span><span class="font-semibold text-warning"></span></div><div class="flex flex-col justify-center items-center gap-2 transform -translate-y-3"><span class="w-[2.75rem] h-12 rounded-full"><img alt=red class="w-full h-full"></span></div><div class="flex flex-col justify-center items-center gap-2"><span class="w-12 h-12 rounded-full bg-brand"><img alt=knife class="w-full h-full"></span><span class="font-semibold text-brand"></span></div></div><div class="flex items-center justify-between gap-2 px-2 whitespace-nowrap font-mono"></div><div class="flex items-center text-xs justify-between border-b-2 border-layer5 border-solid text-secondary mb-2 p-2 sticky top-0 z-10 bg-layer4 whitespace-nowrap"><div class="flex items-center justify-between w-1/2 px-2"><span></span><span></span></div><div class="flex items-center justify-between w-1/2 px-2"><span></span><span></span></div></div><div class="flex p-2 pt-0 overflow-y-auto overflow-x-hidden h-[26rem] mb-[4rem] md:h-[30rem] md:mb-0">'
  );
const un = dt.mobile ? pr : fr;
function ma(n) {
  const { coinFormat: t } = At(),
    e = X(() => {
      const s = n.tstate();
      return n.item.x === Wt.green
        ? s === 2 || s === 5 || s === 3
          ? 1
          : s === 0 || s === 1
          ? 0
          : 2
        : n.item.x === Wt.moon
        ? s === 0 || s === 2 || s === 1
          ? 0
          : s === 6 || s === 3
          ? 1
          : 2
        : n.item.x === Wt.red
        ? s === 0 || s === 1
          ? 0
          : s === 4
          ? 1
          : 2
        : void 0;
    });
  return (
    (i = aa()),
    (o = i.firstChild),
    (g = o.firstChild),
    (m = o.nextSibling),
    (h = m.firstChild),
    (l = h.firstChild.firstChild),
    (c = l.nextSibling),
    a(
      g,
      ((r = G(() => n.item.x === Number(Wt.moon))),
      () => {
        return (
          r() &&
          ((s = sa()),
          Y(() =>
            tt(
              s,
              Ot(
                "absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-[7px] h-[7px] rounded-full",
                ct.darken ? "bg-yellow" : "bg-[#D4D80B]"
              )
            )
          ),
          s)
        );
        var s;
      })
    ),
    a(
      o,
      u(J, {
        get when() {
          return n.item.name !== "****";
        },
        get fallback() {
          return (s = oa()), a(s, () => kt.userName(n.item.name)), s;
          var s;
        },
        get children() {
          return u(kn, {
            get href() {
              return `/user/profile/${n.item.userId}`;
            },
            class: "truncate ml-1",
            get children() {
              return kt.userName(n.item.name);
            },
          });
        },
      }),
      null
    ),
    a(c, () => t(new D(n.item.betAmount), n.item.currencyName)),
    Y(
      (s) => {
        var p = Ot(
            "flex justify-between items-center h-10 w-full font-extrabold pr-2",
            { "ml-3": n.item.x !== Number(Wt.red) }
          ),
          b = `text-${ri(n.type)} flex-1 mx-1 flex justify-end items-center`,
          y = mt(
            "flex justify-end text-right",
            e() === 0
              ? "text-primary"
              : e() === 1
              ? "text-brand"
              : e() === 2
              ? "text-error"
              : ""
          ),
          C = kt.coinIcon(n.item.currencyName || "");
        return (
          p !== s.e && tt(i, (s.e = p)),
          b !== s.t && tt(m, (s.t = b)),
          y !== s.a && tt(h, (s.a = y)),
          C !== s.o && ht(l, "src", (s.o = C)),
          s
        );
      },
      { e: void 0, t: void 0, a: void 0, o: void 0 }
    ),
    i
  );
  var r, i, o, g, m, h, l, c;
}
function dn(n) {
  const t = gt(H.rate$),
    { status: e } = ft(),
    r = X(() => {
      const o = t();
      return e() === rt.progress
        ? o > 10
          ? 3
          : o >= 2 && o < 10
          ? 2
          : 1
        : o > 0 && o < 2
        ? 4
        : o >= 2 && o < 10
        ? 5
        : o >= 10
        ? 6
        : 0;
    });
  return (
    (i = la()),
    a(
      i,
      u(Bn, {
        get each() {
          return n.data;
        },
        component: (o) =>
          u(ma, {
            get item() {
              return o.data;
            },
            get type() {
              return n.type;
            },
            tstate: r,
          }),
      })
    ),
    i
  );
  var i;
}
function mn(n) {
  const { coinFormat: t } = At(),
    { isViewInFiat: e } = Et(),
    r = () => {
      if (e()) return t(new D(n.total));
      {
        const c = It.convertCurrency(
          new D(n.total),
          "USD",
          Z.setting.localeCurrencyName
        );
        return t(c, Z.setting.localeCurrencyName);
      }
    };
  return (
    (i = ca()),
    (o = i.firstChild),
    (g = o.firstChild),
    (m = g.firstChild),
    (h = g.nextSibling),
    (l = o.nextSibling),
    a(h, () => n.players),
    a(l, r),
    Y(
      (c) => {
        var s =
            `flex flex-row items-center justify-between text-xs w-1/2 px-2 relative h-[1.8125rem] before:absolute before:-top-1 before:left-0 before:right-0 before:h-1 before:rounded-lg 
      ` + (n.type === "red" ? "before:bg-warning" : "before:bg-brand"),
          p = `linear-gradient(180deg, ${
            n.type === "red" ? "#ff9820" : "#24ee89"
          } -100%, rgba(244, 244, 244, 0) 85%)`,
          b = yt.trenballUser;
        return (
          s !== c.e && tt(i, (c.e = s)),
          p !== c.t &&
            ((c.t = p) != null
              ? i.style.setProperty("background", p)
              : i.style.removeProperty("background")),
          b !== c.a && ht(m, "src", (c.a = b)),
          c
        );
      },
      { e: void 0, t: void 0, a: void 0 }
    ),
    i
  );
  var i, o, g, m, h, l;
}
function hn() {
  const [n, t] = V(un),
    e = gt(H.rate$),
    { status: r, redPlayers: i, greenPlayers: o } = ft(),
    g = X(() => i().length + o().length > 0);
  return (
    (m = da()),
    (h = m.firstChild),
    (l = h.firstChild),
    (c = l.firstChild),
    (s = c.firstChild),
    (p = c.nextSibling),
    (b = l.nextSibling),
    (y = b.firstChild.firstChild),
    (C = b.nextSibling.firstChild),
    (x = C.firstChild),
    (w = C.nextSibling),
    (k = h.nextSibling),
    (T = k.nextSibling),
    (B = T.firstChild),
    ($ = B.firstChild),
    (j = $.nextSibling),
    (O = B.nextSibling.firstChild),
    (N = O.nextSibling),
    (f = T.nextSibling),
    a(p, () => d("Red Bear")),
    a(w, () => d("Green Bull")),
    a(
      k,
      u(mn, {
        get total() {
          return i().reduce((v, I) => v + I.usd, 0);
        },
        get players() {
          return i().length;
        },
        type: "red",
      }),
      null
    ),
    a(
      k,
      u(mn, {
        get total() {
          return o().reduce((v, I) => v + I.usd, 0);
        },
        get players() {
          return o().length;
        },
        type: "green",
      }),
      null
    ),
    a($, () => d("Player")),
    a(j, () => d("Bet")),
    a(O, () => d("Player")),
    a(N, () => d("Bet")),
    a(
      f,
      u(J, {
        get when() {
          return g();
        },
        get children() {
          return [
            u(dn, {
              type: "red",
              get data() {
                return i().slice(0, n());
              },
            }),
            u(dn, {
              type: "green",
              get data() {
                return o().slice(0, n());
              },
            }),
          ];
        },
      })
    ),
    a(
      m,
      u(J, {
        get when() {
          return g();
        },
        get children() {
          var v = ua();
          return (
            a(
              v,
              u($n, {
                get isMore() {
                  return !n();
                },
                onClick: () => t(n() ? void 0 : un),
              })
            ),
            v
          );
        },
      }),
      null
    ),
    Y(
      (v) => {
        var I = e() >= 2 ? yt.trenballRedLose : yt.trenballRed,
          A = ct.darken ? yt.vs : yt.vsWhite,
          E =
            e() < 2 && r() === rt.ended
              ? yt.trenballGreenLose
              : yt.trenballGreen;
        return (
          I !== v.e && ht(s, "src", (v.e = I)),
          A !== v.t && ht(y, "src", (v.t = A)),
          E !== v.a && ht(x, "src", (v.a = E)),
          v
        );
      },
      { e: void 0, t: void 0, a: void 0 }
    ),
    m
  );
  var m, h, l, c, s, p, b, y, C, x, w, k, T, B, $, j, O, N, f;
}
var ha = S(
  '<div class="absolute w-full flex items-center justify-center top-[68%] md:top-[63%] left-0 h-8"><div class="bg-layer5 rounded-lg h-full px-2.5 leading-8 text-primary flex items-center justify-between w-[195px] md:w-[220px] whitespace-nowrap"><span class="text-secondary text-right w-1/2 truncate"></span><span class="font-extrabold text-left w-1/2">'
);
function ga() {
  const { payout: n, inputs: t, status: e } = ft(),
    { activeFiatToken: r, isViewInFiat: i, activeToken: o } = Et(),
    { coinFormat: g } = At(),
    m = () => (e() === rt.progress ? t.beted : void 0);
  return u(Ct, {
    get when() {
      return m();
    },
    get children() {
      var h,
        l = ha(),
        c = l.firstChild,
        s = c.firstChild,
        p = s.nextSibling;
      return (
        a(s, () => d("My win:")),
        a(
          c,
          u(Ae, {
            get token() {
              return G(() => !!i())() ? r() : o();
            },
          }),
          p
        ),
        a(
          p,
          ((h = G(() => !!m())),
          () =>
            h() && g(new D(m().currency.amount).mul(n()), m().currency.symbol))
        ),
        l
      );
    },
  });
}
var pa = S(
  '<div class="center absolute right-0 -top-2.5"><svg xmlns=http://www.w3.org/2000/svg width=54 height=18 viewBox="0 0 54 18"fill=none><path d="M2.167 5.84962C1.13534 4.24386 0.619504 3.44098 0.667049 2.77706C0.708483 2.19848 0.99907 1.66639 1.46345 1.31879C1.99632 0.919922 2.95063 0.919922 4.85924 0.919922L17.1392 0.919922H49.9392C51.0593 0.919922 51.6194 0.919922 52.0472 1.13791C52.4235 1.32966 52.7295 1.63562 52.9212 2.01194C53.1392 2.43976 53.1392 2.99982 53.1392 4.11992V15.36C53.1392 16.1147 53.1392 16.4921 52.9811 16.7388C52.8427 16.9546 52.6267 17.1091 52.3776 17.1703C52.0931 17.2401 51.736 17.1181 51.0218 16.874L49.473 16.3446H4.85923C2.95062 16.3446 1.99632 16.3446 1.46345 15.9458C0.99907 15.5982 0.708483 15.0661 0.667049 14.4875C0.619504 13.8236 1.13534 13.0207 2.167 11.4149L3.9548 8.63228L2.167 5.84962Z"class=fill-layer2></path><path d="M2.167 5.84962C1.13534 4.24386 0.619504 3.44098 0.667049 2.77706C0.708483 2.19848 0.99907 1.66639 1.46345 1.31879C1.99632 0.919922 2.95063 0.919922 4.85924 0.919922L17.1392 0.919922H49.9392C51.0593 0.919922 51.6194 0.919922 52.0472 1.13791C52.4235 1.32966 52.7295 1.63562 52.9212 2.01194C53.1392 2.43976 53.1392 2.99982 53.1392 4.11992V15.36C53.1392 16.1147 53.1392 16.4921 52.9811 16.7388C52.8427 16.9546 52.6267 17.1091 52.3776 17.1703C52.0931 17.2401 51.736 17.1181 51.0218 16.874L49.473 16.3446H4.85923C2.95062 16.3446 1.99632 16.3446 1.46345 15.9458C0.99907 15.5982 0.708483 15.0661 0.667049 14.4875C0.619504 13.8236 1.13534 13.0207 2.167 11.4149L3.9548 8.63228L2.167 5.84962Z"fill=url(#paint0_linear_5077_46960)></path><defs><linearGradient id=paint0_linear_5077_46960 x1=-18.8608 y1=8.63228 x2=88.687 y2=8.63228 gradientUnits=userSpaceOnUse><stop stop-color=#23EE88></stop><stop offset=1 stop-color=#23EE88 stop-opacity=0></stop></linearGradient></defs></svg><span class="text-primary text-xs absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-px z-10 leading-none font-extrabold capitalize">'
);
const fa = () => {
  return (n = pa()), (t = n.firstChild.nextSibling), a(t, () => d("new")), n;
  var n, t;
};
var ba = S(
    '<div class="pt-0.5 overflow-auto lg:pt-2"><div class="flex flex-col justify-center items-center pb-4 text-xs"><div class=text-[#24EE89]> support@bcgame.com</div><div>!'
  ),
  ya = S(
    '<div class="lg:bg-layer4 lg:ml-2 lg:rounded-xl lg:pt-2"><div><div class=title-font></div><div class=qa>'
  ),
  xa = S(
    '<div><div class="pb-2 border-b"><div class=flex><div class="size-11 opacity-80 rounded-full overflow-hidden mr-3 border-2 border-third flex-shrink-0"><img class="size-full overflow-hidden"></div><div class="flex-1 flex flex-col justify-between"><div class="flex items-center justify-between"><div class="flex items-end gap-2"><div class="text-primary font-extrabold leading-4 text-center"></div><img class=w-3.5><div class="font-inter text-sm font-medium leading-none text-center text-secondary"></div></div></div><div class="mt-[6px] flex gap-1"><div class="flex items-center justify-center"><img class=w-4></div><div></div><div class=text-secondary></div></div></div></div><div class="mt-2 gap-2 flex"></div></div><div class=pt-2><div class="flex items-end gap-2 mb-3"><div class="text-[28px] font-[800] leading-[28px] tracking-tightest text-left text-brand">%</div><div class=text-secondary></div></div><div class="mb-3 flex justify-between"><div class=text-secondary></div><div class="text-xs font-semibold leading-3 text-right"></div></div><div class="mb-3 flex justify-between"><div class=text-secondary></div><div class="text-xs font-semibold leading-3 text-right">'
  );
function gn() {
  const [n, t] = V([]),
    [e, r] = V([]),
    [i, o] = V(!0),
    g = H.topStrategyResults$.subscribe(t),
    m = H.runningStrategyResults$.subscribe(r),
    h = Pe();
  return (
    $t(() => {
      g.unsubscribe(), m.unsubscribe();
    }),
    xt(() => {
      !i() && h() && H.updateStrategy(), o(!1);
    }),
    (c = ya()),
    (s = c.firstChild),
    (p = s.firstChild),
    (b = p.nextSibling),
    a(p, ((l = G(() => !!dt.mobile)), () => (l() ? "" : d("Top Strategies")))),
    a(b, u(Wr, {})),
    a(
      c,
      u(J, {
        get when() {
          return !!n().length;
        },
        get children() {
          var y = ba(),
            C = y.firstChild,
            x = C.firstChild,
            w = x.firstChild,
            k = x.nextSibling,
            T = k.firstChild;
          return (
            a(
              y,
              u(St, {
                get each() {
                  return n();
                },
                children: (B, $) => u(va, { data: B }),
              }),
              C
            ),
            a(x, () => d("Contact us"), w),
            a(k, () => d("If you wish to become a creator"), T),
            y
          );
        },
      }),
      null
    ),
    a(
      c,
      u(J, {
        get when() {
          return !n().length;
        },
        get children() {
          return u(Te, {});
        },
      }),
      null
    ),
    Y(() =>
      tt(
        s,
        mt(
          "px-5 py-3 flex items-center justify-between lg:bg-layer5 sm:dark:bg-layer3 lg:mx-2 lg:rounded-xl",
          !dt.mobile && ""
        )
      )
    ),
    c
  );
  var l, c, s, p, b;
}
function va(n) {
  const t = qt(),
    { coinFormat: e } = At(),
    r = (W) => {
      W.stopPropagation(),
        t(
          `/crash-copy?scriptId=${n.data.scriptId}&scriptLabel=${n.data.scriptLabel}&gameName=crash`
        );
    },
    i = (W) => {
      W.stopPropagation(),
        Z.login
          ? t(
              `/crash-creator?creatorid=${n.data.creatorId}&name=${n.data.userName}&gameName=crash`
            )
          : t("/login/signin");
    },
    o = () => {
      Z.login
        ? t(`/crash-strategy-detail?item=${JSON.stringify(n.data)}`)
        : t("/login/signin");
    },
    g = (n.data.scriptLabel || "Green,Martingale").split(","),
    m = n.data.used,
    [h, l] = V(!1);
  return (
    (c = xa()),
    (s = c.firstChild),
    (p = s.firstChild),
    (b = p.firstChild),
    (y = b.firstChild),
    (C = b.nextSibling.firstChild),
    (x = C.firstChild.firstChild),
    (w = x.nextSibling),
    (k = w.nextSibling),
    (T = C.nextSibling.firstChild),
    (B = T.firstChild),
    ($ = T.nextSibling),
    (j = $.nextSibling),
    (O = p.nextSibling),
    (N = s.nextSibling),
    (f = N.firstChild),
    (v = f.firstChild),
    (I = v.firstChild),
    (A = v.nextSibling),
    (E = f.nextSibling),
    (K = E.firstChild),
    (P = K.nextSibling),
    (z = E.nextSibling.firstChild),
    (st = z.nextSibling),
    c.addEventListener("mouseleave", () => {
      l(!1);
    }),
    c.addEventListener("mouseenter", () => {
      !m && l(!0);
    }),
    (c.$$click = o),
    s.style.setProperty("border-color", "rgba(152, 167, 181, 0.1)"),
    (b.$$click = (W) => i(W)),
    (C.$$click = (W) => i(W)),
    a(x, () => n.data.userName || "Coco"),
    a(k, () => n.data.scriptName),
    a(
      C,
      u(le, { name: "Arrow", class: "size-4 text-secondary rotate-180" }),
      null
    ),
    a($, () => $r(n.data.strategyUseUniqueUserCount)),
    a(j, () => d("followed")),
    a(O, u(St, { each: g, children: (W) => u(An, { type: W, children: W }) })),
    a(v, () => (n.data.strategyRoi > 0 ? "+" : ""), I),
    a(v, () => Number(n.data.strategyRoi).toFixed(2), I),
    a(
      A,
      u(Je, {
        get type() {
          return Ke.roi;
        },
        get children() {
          return d("ROI");
        },
      })
    ),
    a(K, () => d("Total Profit")),
    a(P, () => e(new D(n.data.strategyTotalProfitUsd), "USDT")),
    a(
      z,
      u(Je, {
        get type() {
          return Ke.aum;
        },
        get children() {
          return d("AUM");
        },
      })
    ),
    a(st, () => e(new D(n.data.strategyAum), "USDT")),
    a(
      N,
      u(Bt, {
        get type() {
          return h() || dt.mobile ? "brand" : "second";
        },
        disabled: m,
        class: "w-full text-base font-extrabold capitalize transition-all",
        onClick: r,
        get children() {
          return d(m ? "copied" : "copy");
        },
      }),
      null
    ),
    Y(
      (W) => {
        var it = Ot(
            "px-4 py-3 mb-4 rounded-xl h-full relative cursor-pointer lg:mx-2 lg:mb-2 bg-layer5 dark:bg-layer3 crash-strategy-card",
            m && "disabled"
          ),
          at = kt.avatar(n.data.creatorId),
          R = yt.polygon,
          L = yt.follow;
        return (
          it !== W.e && tt(c, (W.e = it)),
          at !== W.t && ht(y, "src", (W.t = at)),
          R !== W.a && ht(w, "src", (W.a = R)),
          L !== W.o && ht(B, "src", (W.o = L)),
          W
        );
      },
      { e: void 0, t: void 0, a: void 0, o: void 0 }
    ),
    c
  );
  var c, s, p, b, y, C, x, w, k, T, B, $, j, O, N, f, v, I, A, E, K, P, z, st;
}
Gt(["click"]);
var wa = S("<div class=list-wrapper>"),
  Ca = S(
    '<div class="flex justify-center items-center mb-5"><img alt=""><span class="text-tertiary ml-2 text-[14px]">'
  ),
  Sa = S(
    '<div class="order-1 flex-1 lg:p-4"><div class="py-3.5 pl-4 lg:pr-4 flex items-center justify-between text-sm font-medium leading-4 text-left lg:bg-layer5 lg:mb-4 rounded-xl"><div class=text-secondary></div><div class="cursor-pointer text-primary flex items-center font-semibold lg:text-brand"><div class=mr-1>'
  ),
  be = S("<div>"),
  Ia = S("<div class=size-3.5><img>"),
  Ba = S(
    '<div><div><div class="lg:flex lg:items-center gap-2 mb-3 cursor-pointer"><div class="text-sm font-bold leading-none text-primary mb-2"></div><div class="flex items-center gap-2"></div></div><div><div class="flex items-center gap-[8px]"><div class="mr-1 text-secondary">:</div></div></div><div class="lg:flex lg:items-center gap-4"><div class=flex><div class="mr-1 text-secondary"></div></div><div class=flex><div class="mr-1 text-secondary"></div></div></div></div><div class="flex flex-col justify-center items-center"><div class="mt-2 text-secondary"><span class=text-primary></span> / 100 '
  ),
  ka = S("<div> %"),
  Na = S('<span class="flex justify-center items-center mr-1"><img>'),
  Oa = S(
    '<div class="flex "><img class="animate-stragety-loading w-4 h-4 mr-2 mt-0.5">'
  );
const Pa = ({ id: n }) => vn().post("/game/script/stop/", { id: n });
function pn() {
  const n = qt(),
    [t, e] = V([]),
    r = H.runningStrategyResults$.subscribe(e);
  $t(() => {
    r.unsubscribe();
  });
  const i = () => {
      Z.login ? n("/crash-history?gameName=crash") : n("/login/signin");
    },
    o = () => {};
  return (
    (m = Sa()),
    (h = m.firstChild.firstChild),
    (l = h.nextSibling),
    (c = l.firstChild),
    a(
      h,
      ((g = G(() => !!dt.mobile)), () => (g() ? "" : d("Running Strategy")))
    ),
    (l.$$click = i),
    a(c, () => d("History")),
    a(l, u(le, { class: "size-6 rotate-180", name: "Arrow" }), null),
    a(
      m,
      u(J, {
        get when() {
          return !!t().length;
        },
        get children() {
          var s = wa();
          return (
            a(
              s,
              u(St, {
                get each() {
                  return t();
                },
                children: (p) => u(Ta, { data: p, callback: o }),
              })
            ),
            s
          );
        },
      }),
      null
    ),
    a(
      m,
      u(J, {
        get when() {
          return !t().length;
        },
        get children() {
          return [
            u(J, {
              get when() {
                return dt.mobile;
              },
              get children() {
                var s = Ca(),
                  p = s.firstChild,
                  b = p.nextSibling;
                return (
                  a(b, () => d("Please select a strategy")),
                  Y(() => ht(p, "src", yt.info)),
                  s
                );
              },
            }),
            u(J, {
              get when() {
                return !dt.mobile;
              },
              get children() {
                return u(Te, {});
              },
            }),
          ];
        },
      }),
      null
    ),
    m
  );
  var g, m, h, l, c;
}
function Ta(n) {
  const { coinFormat: t } = At(),
    [e, r] = V([]),
    i = H.runningStrategyResults$.subscribe(r);
  $t(() => {
    i.unsubscribe();
  });
  const o = () =>
      ot(this, null, function* () {
        if (
          yield oe.confirm(() =>
            d(
              "This action will terminating the strategy immediately. After terminating, the remaining balance will be refunded to your account."
            )
          )
        ) {
          yield Pa({ id: n.data.strategyExecuteId });
          const f = e().find(
            (A) => A.strategyExecuteId === n.data.strategyExecuteId
          );
          if (!f) return;
          const v = e().findIndex(
              (A) => A.strategyExecuteId === n.data.strategyExecuteId
            ),
            I = Nn(e());
          I.splice(v, 1, q(U({}, f), { runStatus: -1 })),
            H.runningStrategyResults$.next(I),
            n.callback();
        }
      }),
    g = (n.data.scriptLabel || "Green,Martingale").split(",");
  return (
    (l = Ba()),
    (c = l.firstChild),
    (s = c.firstChild),
    (p = s.firstChild),
    (b = p.nextSibling),
    (y = s.nextSibling),
    (C = y.firstChild),
    (x = C.firstChild),
    (w = x.firstChild),
    (k = y.nextSibling.firstChild),
    (T = k.firstChild),
    (B = k.nextSibling),
    ($ = B.firstChild),
    (j = c.nextSibling),
    (O = j.firstChild),
    (N = O.firstChild).nextSibling,
    a(p, () => n.data.scriptName || "Crash - Classic"),
    a(b, u(St, { each: g, children: (f) => u(An, { type: f, children: f }) })),
    a(x, () => d("Profits"), w),
    a(
      C,
      u(J, {
        get when() {
          return n.data.userBetCount !== 0;
        },
        get children() {
          return [
            ((I = be()),
            a(I, () =>
              t(new D(n.data.totalProfitAmount), n.data.currencyName || "USDT")
            ),
            Y(() =>
              tt(
                I,
                mt(
                  Number(n.data.totalProfitAmount) > 0
                    ? "text-brand"
                    : "text-error"
                )
              )
            ),
            I),
            ((f = Ia()),
            (v = f.firstChild),
            Y(() => ht(v, "src", kt.coinIcon(n.data.currencyName || ""))),
            f),
          ];
          var f, v, I;
        },
      }),
      null
    ),
    a(
      C,
      u(J, {
        get when() {
          return n.data.userBetCount === 0;
        },
        children: "--",
      }),
      null
    ),
    a(
      C,
      ((m = G(() => n.data.userBetCount !== 0)),
      () => {
        return (
          m() &&
          ((f = ka()),
          (v = f.firstChild),
          a(
            f,
            () =>
              (
                (Number(n.data.totalProfitAmount) /
                  (Number(n.data.investmentAmount) || 100)) *
                100
              ).toFixed(2),
            v
          ),
          Y(() =>
            tt(
              f,
              mt(
                "text-xs",
                Number(n.data.totalProfitAmount) > 0
                  ? "text-brand"
                  : "text-error"
              )
            )
          ),
          f)
        );
        var f, v;
      }),
      null
    ),
    a(T, () => d("Investment Amount")),
    a(
      k,
      u(J, {
        get when() {
          return n.data.userBetCount !== 0;
        },
        get children() {
          var f = be();
          return (
            a(f, () =>
              t(new D(n.data.investmentAmount), n.data.currencyName || "USDT")
            ),
            f
          );
        },
      }),
      null
    ),
    a(
      k,
      u(J, {
        get when() {
          return n.data.userBetCount === 0;
        },
        children: "--",
      }),
      null
    ),
    a($, () => d("Total Wagered")),
    a(
      B,
      u(J, {
        get when() {
          return n.data.userBetCount !== 0;
        },
        get children() {
          var f = be();
          return (
            a(f, () =>
              t(new D(n.data.totalBetAmount), n.data.currencyName || "USDT")
            ),
            f
          );
        },
      }),
      null
    ),
    a(
      B,
      u(J, {
        get when() {
          return n.data.userBetCount === 0;
        },
        children: "--",
      }),
      null
    ),
    a(
      j,
      ((h = G(() => n.data.runStatus === 1)),
      () => {
        return h()
          ? u(Bt, {
              class: "w-24 mx-auto h-10",
              onClick: o,
              type: "brand",
              get children() {
                return [
                  ((A = Na()),
                  (E = A.firstChild),
                  Y(() => ht(E, "src", yt.stop)),
                  A),
                  G(() => d("Stop")),
                ];
                var A, E;
              },
            })
          : ((v = Oa()),
            (I = v.firstChild),
            a(
              v,
              ((f = G(() => n.data.runStatus === 0)),
              () => (f() ? d("Waiting for join") : d("Waiting for stop"))),
              null
            ),
            Y(() => ht(I, "src", yt.loading)),
            v);
        var f, v, I;
      }),
      O
    ),
    a(N, () => n.data.userBetCount),
    a(O, () => d("Bet"), null),
    Y(() =>
      tt(
        l,
        `flex justify-between items-center bg-layer3 light-darkness rounded overflow-hidden mb-3 p-3 px-4 ${(function (
          f
        ) {
          switch (f) {
            case "3X":
            default:
              return "border-l-4 border-[#e6eaef]";
            case "Green":
              return "border-l-4 border-[#24EE89]";
            case "Red":
              return "border-l-4 border-[#ed6400]";
          }
        })(g[0])} lg:rounded-xl`
      )
    ),
    l
  );
  var m, h, l, c, s, p, b, y, C, x, w, k, T, B, $, j, O, N;
}
Gt(["click"]);
var $a = S('<h2 class="font-semibold pt-4 pb-2">'),
  Aa = S("<div class=help-content><p>"),
  ja = S(
    '<div class="text-secondary p-2"><h2 class="font-semibold pt-4 pb-2"></h2><div></div><h2 class="font-semibold pt-4 pb-2"></h2><div class=help-content><p></p><p></p><p></p><p></p></div><h2 class="font-semibold pt-4 pb-2"></h2><div></div><h2 class="font-semibold pt-4 pb-2"></h2><div><p></p><p></p><p>'
  ),
  Ra = S("<p>");
const La = () => {
  const n = wr();
  return (
    (t = ja()),
    (e = t.firstChild),
    (r = e.nextSibling),
    (i = r.nextSibling),
    (o = i.nextSibling),
    (g = o.firstChild),
    (m = g.nextSibling),
    (h = m.nextSibling),
    (l = h.nextSibling),
    (c = o.nextSibling),
    (s = c.nextSibling),
    (p = s.nextSibling),
    (b = p.nextSibling.firstChild),
    (y = b.nextSibling),
    (C = y.nextSibling),
    a(e, () => {
      var x;
      return d("What Is __gamename__?", {
        gamename: (x = n()) == null ? void 0 : x.fullName,
      });
    }),
    a(
      r,
      u(St, {
        get each() {
          var x;
          return (x = n()) == null
            ? void 0
            : x.details.split(`
`);
        },
        children: (x) => {
          return (w = Ra()), a(w, x), w;
          var w;
        },
      })
    ),
    a(i, () => {
      var x;
      return d("How To Play __gamename__?", {
        gamename: (x = n()) == null ? void 0 : x.fullName,
      });
    }),
    a(g, () =>
      d(
        "Before the game starts, you have 6 seconds to place your bet. After the game starts, the multiplier will get higher and higher starting from 1X."
      )
    ),
    a(m, () =>
      d(
        'You can click on "Cash Out" at any time to lock in the current multiplier, and your payoff will be your bets times the current multiplier.'
      )
    ),
    a(h, () =>
      d(
        "The longer you stay in the game, the higher payoff you will get. Please be noted, however, that the curve may crash at any moment. If you fail to cash out before the crash, you will lose all your bets."
      )
    ),
    a(l, () =>
      d(
        "Are you going to cash out at 1.01x, or are you going to stay until 100x、1000x、10000x...? It’s all your call – which has to be made in a split of a second! (This game is not for the weak-hearted)."
      )
    ),
    a(c, () => d("What is the Classic Dice return rate?")),
    a(s, () => d("Only __houseEdge__% HouseEdge.", { houseEdge: 99 })),
    a(p, () => d("Auto Mode Operation Instructions")),
    a(b, () => d("1. Only roll outcomes that hit the green area are winners.")),
    a(y, () => d("2. Players are prohibited from using their own dice.")),
    a(C, () =>
      d(
        "3. Use of script is optional and as such players must assume full responsibility for any attendant risks. We will not be held liable in this regard."
      )
    ),
    a(
      t,
      u(J, {
        get when() {
          var x;
          return (
            G(() => {
              var w;
              return !!((w = n()) != null && w.slotsInfo);
            })() && ((x = n()) == null ? void 0 : x.slotsInfo.rtpDes)
          );
        },
        get children() {
          return [
            ((k = $a()),
            a(k, () => {
              var T;
              return d("What is the __gamename__ return rate?", {
                gamename: (T = n()) == null ? void 0 : T.fullName,
              });
            }),
            k),
            ((x = Aa()),
            (w = x.firstChild),
            a(w, () => {
              var T;
              return d("RTP (Return to Player) is __rtp__%.", {
                rtp: (T = n()) == null ? void 0 : T.slotsInfo.rtpDes,
              });
            }),
            x),
          ];
          var x, w, k;
        },
      }),
      null
    ),
    t
  );
  var t, e, r, i, o, g, m, h, l, c, s, p, b, y, C;
};
var Ea = S("<div><pre>");
const Ft = (n) => {
  const t = tr({ className: "" }, n),
    e = X(() =>
      mt("my-4  p-5 rounded border overflow-x-auto text-primary", t.className)
    );
  return (
    (r = Ea()),
    (i = r.firstChild),
    a(i, () => t.children),
    Y(
      (o) => {
        var g = e(),
          m = t.style;
        return g !== o.e && tt(r, (o.e = g)), (o.t = er(r, m, o.t)), o;
      },
      { e: void 0, t: void 0 }
    ),
    r
  );
  var r, i;
};
var Fa = S(
  "<div><div class=text-secondary><h2></h2><div class=help-content><p></p></div><h2></h2><div class=help-content><p></p><p></p><p></p><p></p><p></p><p></p><p></p><ul><li><code class=text-brand>label</code>: </li><li><code class=text-brand>value</code>: </li><li><code class=text-brand>type</code>: <!>, <code class=text-brand>text</code>, <code class=text-brand>number</code>, <code class=text-brand>radio</code>, <code class=text-brand>title</code></li><li><div></div><ul><li><code class=text-brand>label</code>: </li><li><code class=text-brand>value</code>: </li></ul></li></ul></div><h2></h2><div class=help-cont><p></p><h3>API</h3><p>Events:</p><ul><li><code class=text-brand>GAME_STARTING</code> </li><li><code class=text-brand>GAME_ENDED</code> </li></ul><p></p><ul><li><code class=text-brand>game.bet(wager: number, payout?: number): Promise&lt;number&gt;</code>: <!>&nbsp;</li><li><code class=text-brand>game.stop()</code>: </li></ul><h3></h3><p></p><ul><li><code class=text-brand>log.info()</code>: </li><li><code class=text-brand>log.error()</code>: </li><li><code class=text-brand>log.success()</code>: </li></ul><h3></h3><p></p><p></p><ul><li><code class=text-brand>currencyName</code>: </li><li><code class=text-brand>amount</code>: </li><li><code class=text-brand>maxAmount</code>: </li><li><code class=text-brand>minAmount</code>: "
);
const Ma = () =>
  u(Sn, {
    title: "AutoBet Help",
    get children() {
      var n = Fa(),
        t = n.firstChild.firstChild,
        e = t.nextSibling,
        r = e.firstChild,
        i = e.nextSibling,
        o = i.nextSibling,
        g = o.firstChild,
        m = g.nextSibling,
        h = m.nextSibling,
        l = h.nextSibling,
        c = l.nextSibling,
        s = c.nextSibling,
        p = s.nextSibling,
        b = p.nextSibling.firstChild;
      b.firstChild.nextSibling;
      var y = b.nextSibling;
      y.firstChild.nextSibling;
      var C = y.nextSibling,
        x = C.firstChild.nextSibling.nextSibling;
      x.nextSibling;
      var w = C.nextSibling.firstChild,
        k = w.nextSibling.firstChild;
      k.firstChild.nextSibling;
      var T = k.nextSibling;
      T.firstChild.nextSibling;
      var B = o.nextSibling,
        $ = B.nextSibling,
        j = $.firstChild,
        O = j.nextSibling.nextSibling,
        N = O.nextSibling,
        f = N.firstChild;
      f.firstChild.nextSibling;
      var v = f.nextSibling;
      v.firstChild.nextSibling;
      var I = N.nextSibling,
        A = I.nextSibling,
        E = A.firstChild,
        K = E.firstChild.nextSibling.nextSibling;
      K.nextSibling;
      var P = E.nextSibling;
      P.firstChild.nextSibling;
      var z = A.nextSibling,
        st = z.nextSibling,
        W = st.nextSibling,
        it = W.firstChild;
      it.firstChild.nextSibling;
      var at = it.nextSibling;
      at.firstChild.nextSibling;
      var R = at.nextSibling;
      R.firstChild.nextSibling;
      var L = W.nextSibling,
        _ = L.nextSibling,
        Q = _.nextSibling,
        nt = Q.nextSibling.firstChild;
      nt.firstChild.nextSibling;
      var pt = nt.nextSibling;
      pt.firstChild.nextSibling;
      var jt = pt.nextSibling;
      jt.firstChild.nextSibling;
      var Jt = jt.nextSibling;
      return (
        Jt.firstChild.nextSibling,
        a(t, () => d("Game Scripts")),
        a(r, () =>
          d(
            "Any script must have a config UI configuration and a mainfunction to run."
          )
        ),
        a(
          e,
          u(Ft, {
            children: `var config = {}
function main () {}`,
          }),
          null
        ),
        a(i, () => d("The UI Configuration")),
        a(g, () =>
          d(
            "The key feature of the scripting system is that the script developer can customize the user input interface, allowing the script to read user-defined variables and make the script run according to different user configurations."
          )
        ),
        a(m, () =>
          d("At the top of each script, you must define the UI configuration")
        ),
        a(h, () =>
          d(
            "Defines a normal text input control that prints the user's input at run time"
          )
        ),
        a(
          o,
          u(Ft, {
            children: `var config = {
  name: { value: 'jack', type: 'text', label: 'Name' }
}

function main () {
  log.info(config.name.value)
}`,
          }),
          l
        ),
        a(l, () =>
          d(
            "Define a number input control and print the user's input at run time"
          )
        ),
        a(
          o,
          u(Ft, {
            children: `var config = {
  bet: { value: 'wager', type: 'number', label: 'Wager' }
}

function main () {
  log.info(config.bet.value)
}`,
          }),
          c
        ),
        a(c, () =>
          d("Defines a radio control to print user input while running")
        ),
        a(
          o,
          u(Ft, {
            children: `var config = {
  colors: {
    value: 'red', type: 'radio', label: 'Chose color',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' }
    ]
  }
}

function main () {
  log.info(config.colors.value)
}`,
          }),
          s
        ),
        a(s, () =>
          d(
            "The script system parses the configconfiguration into the corresponding form interface. Users can provide input, and your script can access these variables at run time."
          )
        ),
        a(p, () => d("The UI Configuration")),
        a(b, () => d("The field name"), null),
        a(y, () => d("Default"), null),
        a(C, () => d("Type"), x),
        a(w, () => d("Option value, only options; Type can be set radio")),
        a(k, () => d("Option of"), null),
        a(T, () => d("The option value"), null),
        a(B, () => d("Interacting with games")),
        a(j, () =>
          d(
            "All of your program logic should be implemented inside the mainfunction, which runs after the user clicks on Run Script, providing you with objects that you can use to interact with the game"
          )
        ),
        a(
          $,
          u(Ft, {
            children: `var config = {}

function main () {
  game.onBet = function () {
    log.info('a game is starting')
  }
}`,
          }),
          O
        ),
        a(
          f,
          () =>
            d("The game is ready to start, you can only guess at this time"),
          null
        ),
        a(v, () => d("Game over"), null),
        a(I, () => d("Methods:")),
        a(E, () => d("Return payout"), K),
        a(P, () => d("Stop the script run"), null),
        a(z, () => d("Logging API")),
        a($, u(Ft, { children: "log.info('hello world!')" }), st),
        a(st, () => d("Methods:")),
        a(it, () => d("Keep a general journal"), null),
        a(at, () => d("Error log"), null),
        a(R, () => d("Record a success log"), null),
        a(L, () => d("Currency information API")),
        a(_, () =>
          d(
            "The currency cannot be changed once the script starts running, and the script must be stopped for the change"
          )
        ),
        a(
          $,
          u(Ft, {
            children:
              "log.info('currency is '+currency.amount+currency.currencyName)",
          }),
          Q
        ),
        a(Q, () => d("Property:")),
        a(nt, () => d("Current currency name"), null),
        a(pt, () => d("Current currency balance"), null),
        a(jt, () => d("Maximum betting limit for current currency"), null),
        a(Jt, () => d("Minimum bet limit for current currency"), null),
        n
      );
    },
  });
var Da = S(
  '<div><div class="flex mt-3 lg:mb-12"><div class=flex-1><span class="text-xs text-secondary"></span><span class="text-xs text-brand">'
);
const Wa = () => {
  const { inputs: n, status: t } = ft();
  return (
    (e = Da()),
    (r = e.firstChild),
    (i = r.firstChild),
    (o = i.firstChild),
    (g = o.nextSibling),
    a(
      e,
      u(yr, {
        get children() {
          return u(Ln, {
            get disabled() {
              return t() !== rt.progress || !n.beted;
            },
          });
        },
      }),
      r
    ),
    a(
      r,
      u(le, { name: "Help", class: "text-brand size-4 relative top-1 mr-2" }),
      i
    ),
    a(o, () =>
      d(
        "Use of script is optional and players must take full responsibility for any attendant risks. We will not be held liable in this regard."
      )
    ),
    (g.$$click = () => oe.push(() => u(Ma, {}), { close: !0 })),
    a(g, () => d("Help?")),
    e
  );
  var e, r, i, o, g;
};
Gt(["click"]);
var Ga = S(
  '<div class="text-secondary p-2"><h2></h2><div class=help-content><p></p><p></p><p></p></div><h2 class="font-semibold pt-4 pb-2"></h2><div class=help-content><p></p><p></p></div><h2 class="font-semibold pt-4 pb-2"></h2><div class=help-content><p></p><p></p><p>'
);
const _a = () => {
  return (
    (n = Ga()),
    (t = n.firstChild),
    (e = t.nextSibling),
    (r = e.firstChild),
    (i = r.nextSibling),
    (o = i.nextSibling),
    (g = e.nextSibling),
    (m = g.nextSibling),
    (h = m.firstChild),
    (l = h.nextSibling),
    (c = m.nextSibling),
    (s = c.nextSibling.firstChild),
    (p = s.nextSibling),
    (b = p.nextSibling),
    a(t, () => d("Why Is There Internet Lag?")),
    a(r, () =>
      d(
        "Since CRASH is a real-time online game (a game in which customers interact with it via the Internet), there is a delay between the time you click on the “Cash Out” button and the time when the server receives your cash out instruction."
      )
    ),
    a(i, () =>
      d(
        "The farther away you are from the server and the worse your Internet connection is, the longer it will take for your message to reach the game server."
      )
    ),
    a(o, () =>
      d(
        "In a perfect environment, your message can travel to the server at the speed of light, but it still takes 134 milliseconds to travel around the world."
      )
    ),
    a(g, () => d("What's the Use of Automatic Cash Out?")),
    a(h, () =>
      d(
        "The best way to avoid damages caused by Internet lag is to use the automatic cash out function. Since your automatic cash out is sent to the server at the same time when you place your bet, the server can execute your cash out instruction precisely and regardless of the lag."
      )
    ),
    a(l, () =>
      d(
        "For example, if your connection is bad and you want to cash out at 2x, then we recommend that you set automatic cash out to 2x rather than cash out manually at 2x, because after you click on “Cash Out”, the curve may crash before your message reaches the server."
      )
    ),
    a(c, () =>
      d("What Should You Do If the Game Is Accidentally Disconnected?")
    ),
    a(s, () =>
      d(
        "When we notice that you are disconnected from an active game, we will try to cash out for you."
      )
    ),
    a(p, () =>
      d(
        "However, we strongly recommend that you use the automatic cash out function to deal with this issue."
      )
    ),
    a(b, () =>
      d(
        "Since your automatic cash out multiplier has been sent to the server, you can still cash out normally even if you are completely disconnected. This is the most reliable way to avoid damages caused by accidental disconnection."
      )
    ),
    n
  );
  var n, t, e, r, i, o, g, m, h, l, c, s, p, b;
};
var Ha = S("<thead><tr><th></th><th></th><th></th><th>"),
  Ua = S(
    "<tbody><tr><td></td><td>&lt; 2</td><td>≥ 2</td><td>≥ 10</td></tr><tr><td></td><td>1.96</td><td>2</td><td>10</td></tr><tr><td></td><td>50.50%</td><td>49.50%</td><td>9.9%"
  ),
  za = S(
    '<div class="text-secondary p-2"><h2></h2><div class=help-content><p></p></div><h2></h2><div class=help-content><p></p><p> —&gt; </p><p> —&gt; </p><p> —&gt; </p></div><h2></h2><div class=help-content><p></p><p></p><p></p><p></p></div><h2></h2><div class=help-content><p> —&gt; x1.96</p><p> —&gt; x2</p><p> —&gt; x10</p></div><h2></h2><div class=help-content><p></p><p></p><p>'
  );
const qa = () => {
  return (
    (n = za()),
    (t = n.firstChild),
    (e = t.nextSibling),
    (r = e.firstChild),
    (i = e.nextSibling),
    (o = i.nextSibling),
    (g = o.firstChild),
    (m = g.nextSibling),
    (h = m.firstChild),
    (l = m.nextSibling),
    (c = l.firstChild),
    (s = l.nextSibling),
    (p = s.firstChild),
    (b = o.nextSibling),
    (y = b.nextSibling),
    (C = y.firstChild),
    (x = C.nextSibling),
    (w = x.nextSibling),
    (k = w.nextSibling),
    (T = y.nextSibling),
    (B = T.nextSibling),
    ($ = B.firstChild),
    (j = $.firstChild),
    (O = $.nextSibling),
    (N = O.firstChild),
    (f = O.nextSibling),
    (v = f.firstChild),
    (I = B.nextSibling),
    (A = I.nextSibling.firstChild),
    (E = A.nextSibling),
    (K = E.nextSibling),
    a(t, () => d("What Is Trenball?")),
    a(r, () =>
      d(
        "Trenball is a new version of the popular Crash Game. In Trenball you can place bets on RED, GREEN or MOON depending on what you think will be the outcome of the game!"
      )
    ),
    a(i, () => d("What is Red, Green & Moon?")),
    a(g, () =>
      d(
        "It is simply where the crash will bang in a round. You win depending on which of these you place your bets on."
      )
    ),
    a(m, () => d("RED"), h),
    a(m, () => d("Crash is less than 2"), null),
    a(l, () => d("GREEN"), c),
    a(l, () => d("Crash is equal to or more than 2"), null),
    a(s, () => d("MOON"), p),
    a(s, () => d("Crash is equal to or more than 10"), null),
    a(b, () => d("The probability in Trenball is simple too!")),
    a(C, () => d("Hitting a Red is 50.5%.")),
    a(x, () => d("Hitting a Green is 49.5%.")),
    a(w, () => d("Hitting a Moon is 9.9%.")),
    a(k, () => d("House Edge is 1%.")),
    a(T, () => d("The Payout is exciting:")),
    a($, () => d("Red pays"), j),
    a(O, () => d("Green pays"), N),
    a(f, () => d("Moon pays"), v),
    a(I, () => d("How To Play Trenball?")),
    a(A, () =>
      d(
        "Before each round in the game starts, you have 6 seconds to place your bet. Here you can choose to bet on Red, Green or Moon.Once the six seconds are up, CRASH will start running until it Bangs i.e. reaches the end of that round."
      )
    ),
    a(E, () => d("Note:")),
    a(K, () =>
      d(
        "You can play both Crash and Trenball individually or at the same time! Happy Playing!"
      )
    ),
    a(
      n,
      u(_r, {
        get children() {
          return [
            ((R = Ha()),
            (L = R.firstChild.firstChild.nextSibling),
            (_ = L.nextSibling),
            (Q = _.nextSibling),
            a(L, () => d("RED")),
            a(_, () => d("GREEN")),
            a(Q, () => d("MOON")),
            R),
            ((P = Ua()),
            (z = P.firstChild),
            (st = z.firstChild),
            (W = z.nextSibling),
            (it = W.firstChild),
            (at = W.nextSibling.firstChild),
            a(st, () => d("What is")),
            a(it, () => d("Payout")),
            a(at, () => d("Chance")),
            P),
          ];
          var P, z, st, W, it, at, R, L, _, Q;
        },
      }),
      null
    ),
    n
  );
  var n,
    t,
    e,
    r,
    i,
    o,
    g,
    m,
    h,
    l,
    c,
    s,
    p,
    b,
    y,
    C,
    x,
    w,
    k,
    T,
    B,
    $,
    j,
    O,
    N,
    f,
    v,
    I,
    A,
    E,
    K;
};
var Xa = S(
  '<div class="text-secondary p-2"><h2></h2><div class=help-content><p></p></div><h2></h2><div class=help-content><p></p><p></p><p></p><p></p><p></p><p></p></div><h2></h2><div class=help-content><p></p><h2></h2><div class=help-content><p></p><p></p><p></p><p></p></div><h2></h2><div class=help-content><p></p></div><h2></h2><div class=help-content><p>'
);
const Va = () => {
    return (
      (n = Xa()),
      (t = n.firstChild),
      (e = t.nextSibling),
      (r = e.firstChild),
      (i = e.nextSibling),
      (o = i.nextSibling),
      (g = o.firstChild),
      (m = g.nextSibling),
      (h = m.nextSibling),
      (l = h.nextSibling),
      (c = l.nextSibling),
      (s = c.nextSibling),
      (p = o.nextSibling),
      (b = p.nextSibling.firstChild),
      (y = b.nextSibling),
      (C = y.nextSibling),
      (x = C.firstChild),
      (w = x.nextSibling),
      (k = w.nextSibling),
      (T = k.nextSibling),
      (B = C.nextSibling),
      ($ = B.nextSibling),
      (j = $.firstChild),
      (O = $.nextSibling),
      (N = O.nextSibling.firstChild),
      a(t, () => d("What is betting strategy?")),
      a(r, () =>
        d(
          "Betting Strategy allows users to automatically copy the operations of experienced players. This means that you can benefit from the knowledge and expertise of skilled players without having to do any research or analysis yourself."
        )
      ),
      a(i, () => d("How does Betting Strategy work?")),
      a(g, () => d("To use the Betting Strategy feature, you will need to:")),
      a(m, () =>
        d(
          "1. Select a game that supports Betting Strategy. Currently, only the Crash game offers this feature."
        )
      ),
      a(h, () =>
        d("2. Click on the Betting Strategy tab at the top of the game screen.")
      ),
      a(l, () =>
        d(
          "3. Browse through the available strategies and select one that you want to follow."
        )
      ),
      a(c, () => d("4. Enter the amount you want to bet and click Copy.")),
      a(s, () =>
        d(
          "Once you have confirmed your bet, the platform will automatically place bets on your behalf, copying the exact strategy of the experienced player you have chosen. You can view your current strategies in the Running Strategies list. You can also see your betting history in the History list."
        )
      ),
      a(p, () => d("How do I track my profits?")),
      a(b, () =>
        d(
          "Your copying strategy will automatically stop in any of the following situations:"
        )
      ),
      a(y, () => d("How do I stop the strategy?")),
      a(x, () =>
        d("The remaining balance is insufficient to place any further bets.")
      ),
      a(w, () => d("The next round bet amount exceeds the max limit.")),
      a(k, () => d("The game reaches 100 rounds.")),
      a(T, () => d("You manually stop the strategy.")),
      a(B, () => d("How do I learn more about a betting strategy?")),
      a(j, () =>
        d(
          "You can click on the strategy details to view more information about each strategy, including its performance history, risk level, and other relevant details."
        )
      ),
      a(O, () =>
        d(
          "How to calculate wager,XP, loss back and commission in a betting strategy?"
        )
      ),
      a(N, () =>
        d(
          "They will be calculated collectively after a strategy is stopped, rather than after each game."
        )
      ),
      n
    );
    var n,
      t,
      e,
      r,
      i,
      o,
      g,
      m,
      h,
      l,
      c,
      s,
      p,
      b,
      y,
      C,
      x,
      w,
      k,
      T,
      B,
      $,
      j,
      O,
      N;
  },
  Ya = new D(0);
function Ja(n) {
  const [t, e] = Oe({
      times: 0,
      onWin: { reset: !0, value: 0 },
      onLose: { reset: !0, value: 0 },
      stopOnWin: 0,
      stopOnLose: 0,
    }),
    [r, i] = V(),
    { isViewInFiat: o } = Et();
  function g(h) {
    return ot(this, null, function* () {
      if (!h.running) return;
      const l = new D(h.currency.amount);
      try {
        const { payout: c, data: s } = yield n(h);
        o()
          ? (h.profit = It.convertCurrency(
              h.profit.add(l.mul(c - 1)),
              Z.setting.localeCurrencyName,
              Z.setting.currencyName
            ))
          : (h.profit = h.profit.add(l.mul(c - 1)));
        const p = h.config;
        return (
          c > 1
            ? p.onWin.reset
              ? (h.currency = q(U({}, h.currency), { amount: h.initAmount }))
              : (h.currency = q(U({}, h.currency), {
                  amount: l.add(l.mul(p.onWin.value).div(100)),
                }))
            : c < 1 &&
              (p.onLose.reset
                ? (h.currency = q(U({}, h.currency), { amount: h.initAmount }))
                : (h.currency = q(U({}, h.currency), {
                    amount: l.add(l.mul(p.onLose.value).div(100)),
                  }))),
          (p.stopOnWin !== 0 && h.profit.gte(p.stopOnWin)) ||
          (p.stopOnLose !== 0 &&
            h.profit.lt(0) &&
            h.profit.abs().gte(p.stopOnLose))
            ? m()
            : ((p.times = Math.max(p.times - 1, 0)),
              p.times !== 1 / 0 && e("times", p.times),
              p.times === 0 ? m() : ((h.data = s), g(h)))
        );
      } catch (c) {
        (c == null ? void 0 : c.code) !== 5999 && h.running && m();
      }
    });
  }
  function m() {
    i((h) => {
      h && (h.running = !1);
    });
  }
  return {
    start(h, l) {
      nr(() => {
        const c = {
          currency: h,
          initAmount: new D(h.amount),
          profit: Ya,
          running: !0,
          config: q(U({}, t), { times: t.times || 1 / 0 }),
          data: l,
        };
        i(c), g(c);
      });
    },
    stop: m,
    running: r,
    config: t,
    setConfig: e,
  };
}
var Ka = S(
  '<div class="flex flex-row justify-between mt-3 md:flex-col md:items-center"><div class="flex flex-col font-[800] px-1.5 text-left w-32 md:flex-row md:items-center md:justify-start md:w-full whitespace-nowrap"><span class=text-primary></span><span class=md:ml-2><span class="text-secondary inline-block mr-1"></span>x</span></div><div class="md:mt-2 md:w-full md:flex md:justify-center flex-1">'
);
function fn(n) {
  const [t, e] = V({ red: Ie(H.houseage$.value, 2), green: 2, moon: 10 });
  return (
    xt(() => {
      const c = H.houseage$.subscribe((s) => {
        e({ red: Ie(s, 2), green: 2, moon: 10 });
      });
      $t(() => c.unsubscribe());
    }),
    (r = Ka()),
    (i = r.firstChild),
    (o = i.firstChild),
    (g = o.nextSibling),
    (m = g.firstChild),
    (h = m.nextSibling),
    (l = i.nextSibling),
    a(o, () => {
      return (
        (c = n.type),
        new Map([
          ["red", d("Bet Red")],
          ["green", d("Bet Green")],
          ["moon", d("Bet Moon")],
        ]).get(c)
      );
      var c;
    }),
    a(m, () => d("Payout")),
    a(g, () => t()[n.type].toFixed(2), h),
    a(l, () => n.children),
    r
  );
  var r, i, o, g, m, h, l;
}
var Za = S('<div class="flex cneter gap-1">'),
  Qa = S(
    '<div class="absolute h-1/2 center top-1/2 left-3 sm:left-2 -translate-y-1/2 bg-input_bright text-primary font-extrabold">∞'
  ),
  ts = S(
    '<div><p class="h-4.5 flex items-center text-secondary font-semibold"></p><div class="w-full relative">'
  ),
  es = S(
    '<button class="btn-like min-w-12 bg-btn-layer5 rounded-md h-8 center">'
  );
const ns = function (n) {
  const [t, e] = V(!1),
    r = X(() => !t() && n.value === 0),
    i = (h) => {
      n.isPlaying || n.onChange(h);
    };
  return (
    (o = ts()),
    (g = o.firstChild),
    (m = g.nextSibling),
    a(g, () => d("Number of Bets")),
    a(
      m,
      u(ie, {
        class: "font-extrabold mt-2",
        size: "lg",
        min: 0,
        max: 1 / 0,
        get disabled() {
          return n.isPlaying;
        },
        get value() {
          return n.value;
        },
        onChange: i,
        onFocus: () => e(!0),
        onBlur: () => e(!1),
        get children() {
          var h = Za();
          return (
            a(
              h,
              u(St, {
                each: [0, 10, 100],
                children: (l) => {
                  return (
                    ((c = es()).$$click = () => i(l)),
                    a(c, l === 0 ? "∞" : l),
                    Y(() => (c.disabled = n.isPlaying)),
                    c
                  );
                  var c;
                },
              })
            ),
            h
          );
        },
      }),
      null
    ),
    a(
      m,
      u(J, {
        get when() {
          return r();
        },
        get children() {
          return Qa();
        },
      }),
      null
    ),
    Y(() => tt(o, mt("w-full", n.class))),
    o
  );
  var o, g, m;
};
Gt(["click"]);
var rs = S('<span class="font-extrabold mr-1">%'),
  is = S(
    '<div><p class="h-4.5 flex items-center text-secondary font-semibold"></p><div class="w-full flex gap-1 mt-2"><div class="bg-tab_padding rounded-lg flex center p-1 font-semibold flex-none text-secondary"><button></button><button>'
  );
const bn = function (n) {
  const t = (l) => {
      n.isPlaying || n.onChange(l);
    },
    e = (l) => {
      n.isPlaying || n.onChangeReset(l);
    },
    r = X(() => n.isPlaying || n.reset);
  return (
    (i = is()),
    (o = i.firstChild),
    (g = o.nextSibling),
    (m = g.firstChild.firstChild),
    (h = m.nextSibling),
    a(o, () => n.label),
    (m.$$click = () => e(!0)),
    a(m, () => d("Reset")),
    (h.$$click = () => e(!1)),
    a(h, () => d("Increase by")),
    a(
      g,
      u(ie, {
        class: "text-primary font-extrabold flex-1",
        get value() {
          return n.value;
        },
        onChange: t,
        get disabled() {
          return r();
        },
        get children() {
          return rs();
        },
      }),
      null
    ),
    Y(
      (l) => {
        var c = mt("w-full", n.class),
          s = n.isPlaying,
          p = mt(
            "h-full px-3 rounded-lg",
            n.reset && "text-primary font-extrabold bg-tab_selected"
          ),
          b = n.isPlaying,
          y = mt(
            "h-full px-3 rounded-lg",
            !n.reset && "text-primary font-extrabold bg-tab_selected"
          );
        return (
          c !== l.e && tt(i, (l.e = c)),
          s !== l.t && (m.disabled = l.t = s),
          p !== l.a && tt(m, (l.a = p)),
          b !== l.o && (h.disabled = l.o = b),
          y !== l.i && tt(h, (l.i = y)),
          l
        );
      },
      { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }
    ),
    i
  );
  var i, o, g, m, h;
};
Gt(["click"]);
var ye = S("<div>"),
  as = S('<span class="ml-2.5 font-extrabold">'),
  ss = S(
    '<div class="font-extrabold text-center"><div class=leading-4></div><div class=leading-4>'
  ),
  os = S("<span class=ml-2.5>"),
  ls = S("<span>"),
  yn = S('<div class="md:grid md:grid-cols-3 gap-4">'),
  xn = S('<img alt=coin class="size-5 order-first">'),
  cs = S(
    '<div class="w-full lg:mt-3 sm:flex sm:gap-2"><div class=flex-1><p class="h-4.5 mb-1.5 flex items-center text-secondary font-semibold"></p></div><div class=flex-1><p class="h-4.5 mb-1.5 flex items-center text-secondary font-semibold">'
  );
const us = () => {
  const n = qt(),
    { inputs: t, setInputs: e, snapPayload: r, handleXbet: i } = ft(),
    [o, g] = V(t.xamount),
    { activeToken: m, activeFiatToken: h, isViewInFiat: l } = Et(),
    { coinFormat: c } = At(),
    s = gt(H.status$),
    p = gt(H.gameId$),
    b = (f) => e("xamount", f),
    y = (f) => {
      var v;
      return ((v = t.xBeted[f]) == null ? void 0 : v.params.gameId) === p();
    },
    C = X(() => c(new D(t.xamount), m().symbol)),
    x = Ja((f) =>
      ot(void 0, null, function* () {
        var v;
        if (
          (g(Number(f.currency.amount)),
          yield Ce(
            H.gameId$.pipe(
              ((v = 1),
              xe(function (A, E) {
                return v <= E;
              }))
            )
          ),
          !f.running)
        )
          throw new Error("Auto Stop!");
        const I = r(f.currency, f.data.params.trenball);
        return { payout: yield i(I), data: I };
      })
    ),
    w = X(() => !!t.xBeted.green || !!t.xBeted.red || !!t.xBeted.moon);
  function k(f) {
    return u(Ct, {
      get when() {
        return f.hadBet;
      },
      get fallback() {
        return u(T, {
          get type() {
            return f.type;
          },
        });
      },
      get children() {
        return u(J, {
          get when() {
            return s() === rt.progress;
          },
          get fallback() {
            return u(B, {
              get type() {
                return f.type;
              },
              get label() {
                return d("Loading...");
              },
            });
          },
          get children() {
            return u(B, {
              get type() {
                return f.type;
              },
              get label() {
                return d("Betting");
              },
            });
          },
        });
      },
    });
  }
  function T(f) {
    return u(Bt, {
      class: "center w-full trenball-btn",
      onClick: () => {
        Z.login
          ? i(r(q(U({}, m()), { amount: t.xamount }), f.type)).catch(Pt)
          : n("/login/signin");
      },
      get children() {
        return [
          ((I = ye()),
          Y(() =>
            tt(
              I,
              mt(
                "size-4 rounded-full",
                f.type === "red"
                  ? "bg-warning"
                  : f.type === "green"
                  ? "bg-brand"
                  : "moon-bg-btn"
              )
            )
          ),
          I),
          ((v = as()), a(v, () => d("Bet For __amount__", { amount: C() })), v),
        ];
        var v, I;
      },
    });
  }
  function B(f) {
    return u(Bt, {
      disabled: !0,
      get class() {
        return mt(
          "center w-full trenball-btn text-primary_brand font-extrabold",
          f.type === "red"
            ? "!bg-warning"
            : f.type === "green"
            ? "!bg-brand"
            : "moon-bg-btn"
        );
      },
      get children() {
        return f.label;
      },
    });
  }
  function $(f) {
    const v = () => t.xNextBet[f.type],
      { setIsPassGuard: I, xBalance: A, setXBalance: E } = ft(),
      K = $e();
    return u(Bt, {
      get class() {
        return mt(
          "center w-full trenball-btn font-extrabold",
          f.type === "red" && v() ? "!bg-warning text-primary_brand" : "",
          f.type === "green" && v() ? "!bg-brand text-primary_brand" : "",
          f.type === "moon" && v() ? "moon-bg-btn text-primary_brand" : ""
        );
      },
      onClick: () =>
        ot(this, null, function* () {
          if (!Z.login) return void n("/login/signin");
          const P = v()
            ? void 0
            : r(q(U({}, m()), { amount: t.xamount }), f.type);
          try {
            yield ((z, st) =>
              ot(this, null, function* () {
                var it;
                const W = z == null ? void 0 : z.currency.amount;
                if (z) {
                  const at = A().minus(Number(W));
                  if (at.lt(0))
                    throw (
                      (oe.push(() => u(Or, {}), { close: !0 }),
                      new Error(void 0))
                    );
                  E(at);
                } else E(A().plus(Number((it = t.xNextBet[st]) == null ? void 0 : it.currency.amount)));
                return !0;
              }))(P, f.type);
          } catch (z) {
            return void (z.message && Pt.error(z.message));
          }
          if (P)
            try {
              return yield K(P), I(!0), e("xNextBet", f.type, P);
            } catch (z) {
              return z.message && Pt.error(z.message), I(!1), null;
            }
          else e("xNextBet", f.type, P);
        }),
      get children() {
        return [
          G(() => {
            return (
              G(() => !v())() &&
              ((at = ye()),
              Y(() =>
                tt(
                  at,
                  mt(
                    "size-4 rounded-full mr-2.5",
                    f.type === "red"
                      ? "!bg-warning"
                      : f.type === "green"
                      ? "!bg-brand"
                      : "moon-bg-btn"
                  )
                )
              ),
              at)
            );
            var at;
          }),
          ((st = ss()),
          (W = st.firstChild),
          (it = W.nextSibling),
          a(
            W,
            ((P = G(() => !!v())),
            () =>
              P() ? d("Loading...") : d("Bet For __amount__", { amount: C() }))
          ),
          a(
            it,
            ((z = G(() => !!v())),
            () => (z() ? d("(Cancel)") : "(" + d("Next Round") + ")"))
          ),
          st),
        ];
        var P, z, st, W, it;
      },
    });
  }
  function j(f) {
    const v = [
        { label: d("Green"), type: "green" },
        { label: d("Red"), type: "red" },
        { label: d("Moon"), type: "moon" },
      ],
      I = X(() => v.find((A) => A.type === f.type));
    return u(Bt, {
      class: "center w-full trenball-btn font-extrabold",
      get disabled() {
        return f.disabled;
      },
      onClick: () => {
        var A, E;
        Z.login
          ? x.start(
              q(U({}, m()), { amount: t.xamount }),
              ((A = Number(t.xamount)),
              (E = f.type),
              {
                currency: q(U({}, m()), { amount: A }),
                params: { gameId: p(), trenball: E },
                scriptId: 0,
              })
            )
          : n("/login/signin");
      },
      get children() {
        return [
          ((E = ye()),
          Y(() =>
            tt(
              E,
              mt(
                "size-4 rounded-full",
                f.type === "red"
                  ? "bg-warning"
                  : f.type === "green"
                  ? "bg-brand"
                  : "moon-bg-btn"
              )
            )
          ),
          E),
          ((A = os()),
          a(A, () => {
            var K;
            return d("Bet " + ((K = I()) == null ? void 0 : K.label));
          }),
          A),
        ];
        var A, E;
      },
    });
  }
  function O(f) {
    return u(Bt, {
      get class() {
        return mt(
          "center w-full font-extrabold",
          f.type === "red"
            ? "bg-warning"
            : f.type === "green"
            ? "bg-brand"
            : "moon-bg-btn"
        );
      },
      onClick: () => {
        x.stop(), g(t.xamount);
      },
      get children() {
        var v = ls();
        return a(v, () => d("Stop Auto Bet")), v;
      },
    });
  }
  $t(() => {
    x.stop();
  });
  const N = X(() => {
    var f;
    return (f = x.running()) == null ? void 0 : f.data.params.trenball;
  });
  return [
    u(_t, {
      get value() {
        return Nt.manual;
      },
      class: "lg:mb-12",
      get children() {
        return [
          u(we, {
            get value() {
              return t.xamount;
            },
            onChange: b,
            get disabled() {
              return w();
            },
          }),
          ((f = yn()),
          a(
            f,
            u(St, {
              each: tn,
              children: (v) =>
                u(fn, {
                  type: v,
                  get children() {
                    return u(Ct, {
                      get when() {
                        return G(() => s() === rt.preparing)() && !N();
                      },
                      get fallback() {
                        return u(Ct, {
                          get when() {
                            return (
                              (G(() => s() === rt.progress)() && y(v)) ||
                              N() === v
                            );
                          },
                          get fallback() {
                            return u(Ct, {
                              get when() {
                                return G(() => s() === rt.preparing)() && !y(v);
                              },
                              get fallback() {
                                return u(Ct, {
                                  get when() {
                                    return y(v);
                                  },
                                  get fallback() {
                                    return u($, { type: v });
                                  },
                                  get children() {
                                    return u(B, {
                                      type: v,
                                      get label() {
                                        return d("Betting");
                                      },
                                    });
                                  },
                                });
                              },
                              get children() {
                                return u(k, {
                                  get hadBet() {
                                    return y(v);
                                  },
                                  type: v,
                                });
                              },
                            });
                          },
                          get children() {
                            return u(B, {
                              type: v,
                              get label() {
                                return d("Betting");
                              },
                            });
                          },
                        });
                      },
                      get children() {
                        return u(k, {
                          get hadBet() {
                            return y(v);
                          },
                          type: v,
                        });
                      },
                    });
                  },
                }),
            })
          ),
          f),
        ];
        var f;
      },
    }),
    u(_t, {
      get value() {
        return Nt.auto;
      },
      class: "lg:mb-12",
      get children() {
        return [
          u(we, {
            get value() {
              return G(() => !!x.running())() ? o() : t.xamount;
            },
            get onChange() {
              return x.running() ? () => {} : (P) => e("xamount", P);
            },
            get disabled() {
              return !!x.running();
            },
          }),
          u(ns, {
            class: "lg:mt-3",
            get value() {
              return x.config.times;
            },
            onChange: (P) => x.setConfig("times", P),
            get isPlaying() {
              return !!x.running();
            },
          }),
          u(bn, {
            get reset() {
              return x.config.onWin.reset;
            },
            onChangeReset: (P) => x.setConfig("onWin", "reset", P),
            get value() {
              return x.config.onWin.value;
            },
            onChange: (P) => x.setConfig("onWin", "value", P),
            get isPlaying() {
              return !!x.running();
            },
            get label() {
              return d("On Win");
            },
            class: "lg:mt-3",
          }),
          u(bn, {
            get reset() {
              return x.config.onLose.reset;
            },
            onChangeReset: (P) => x.setConfig("onLose", "reset", P),
            get value() {
              return x.config.onLose.value;
            },
            onChange: (P) => x.setConfig("onLose", "value", P),
            get isPlaying() {
              return !!x.running();
            },
            get label() {
              return d("On Lose");
            },
            class: "lg:mt-3",
          }),
          ((v = cs()),
          (I = v.firstChild),
          (A = I.firstChild),
          (E = I.nextSibling),
          (K = E.firstChild),
          a(A, () => d("Stop on win")),
          a(
            I,
            u(ie, {
              get value() {
                return x.config.stopOnWin;
              },
              onChange: (P) => x.setConfig("stopOnWin", P),
              get disabled() {
                return !!x.running();
              },
              get children() {
                var P = xn();
                return (
                  Y(() =>
                    ht(P, "src", kt.coinIcon(l() ? h().symbol : m().symbol))
                  ),
                  P
                );
              },
            }),
            null
          ),
          a(K, () => d("Stop on loss")),
          a(
            E,
            u(ie, {
              get value() {
                return x.config.stopOnLose;
              },
              onChange: (P) => x.setConfig("stopOnLose", P),
              get disabled() {
                return !!x.running();
              },
              get children() {
                var P = xn();
                return (
                  Y(() =>
                    ht(P, "src", kt.coinIcon(l() ? h().symbol : m().symbol))
                  ),
                  P
                );
              },
            }),
            null
          ),
          v),
          ((f = yn()),
          a(
            f,
            u(St, {
              each: tn,
              children: (P) =>
                u(fn, {
                  type: P,
                  get children() {
                    return u(Ct, {
                      get when() {
                        return N() !== P;
                      },
                      get fallback() {
                        return u(O, { type: P });
                      },
                      get children() {
                        return u(j, {
                          type: P,
                          get disabled() {
                            return !!x.running() || !!t.xNextBet[P];
                          },
                        });
                      },
                    });
                  },
                }),
            })
          ),
          f),
        ];
        var f, v, I, A, E, K;
      },
    }),
  ];
};
var ds = S(
    '<div class="flex flex-col md:flex-row gap-3 justify-between"><div class="w-full md:w-1/2"></div><div class="w-full md:w-1/2">'
  ),
  ms = S("<div>"),
  hs = S('<div class="md:px-2 py-1">'),
  gs = S('<div class="md:px-[0.5rem] mt-[0.375rem]">');
function ps() {
  const n = [
      { title: d("What Game Is This?"), node: () => u(La, {}) },
      { title: d("Fairness"), node: () => u(Gr, { htmlName: "crash" }) },
      { title: d("Auto cash out"), node: () => u(_a, {}) },
      { title: d("Trenball"), node: () => u(qa, {}) },
      { title: d("Max Profits"), node: () => u(Cr, {}) },
      { title: d("Betting Strategy"), node: () => u(Va, {}) },
    ].filter(Boolean),
    { inputs: t, setInputs: e, xBetPayouts: r } = ft(),
    { game: i } = je(),
    [o, g] = V(),
    m = { red: "border-warning", green: "border-brand", moon: "border-yellow" },
    h = X(() => t.bigWins.find((B) => B.params.trenball));
  xt(() => {
    const B = h();
    if (B) {
      const $ = B.params.trenball,
        j = r()[$];
      g({
        odds: j,
        currency: q(U({}, B.currency), {
          amount: new D(B.currency.amount).mul(j),
        }),
        containerClassName: m[$],
      }),
        e("bigWins", (O) => O.filter((N) => N !== B));
    }
  });
  const [l, c] = V(Nt.manual),
    [s, p] = V(Nt.manual),
    b = gt(i.script.stateSubject.pipe(ve((B) => B.isRunning))),
    y = X(() => ({
      runningStragety: d("Running Strategy"),
      topStrageties: d("Top Strategies"),
    })),
    [C, x] = Hr(),
    w = () => C.type || "classic",
    k = (B) => e("amount", B);
  return (
    xt(() => {
      b() && w() === "classic" && c(Nt.auto);
    }),
    (T = ms()),
    a(
      T,
      u(Sr, {
        get children() {
          return [
            u(Ve, {
              get value() {
                return w();
              },
              onChange: (B) => {
                x({ type: B === "classic" ? void 0 : B });
              },
              id: "crash-tab",
              class:
                "col-span-12 h-12 md:h-10 flex items-center bg-layer4 rounded-md mb-5 md:mb-3 w-full md:max-w-[24.5rem] ml-auto md:-mt-2.5",
              get children() {
                return u(Ye, {
                  class: "w-full h-full md:h-10 light-layer2-tabs",
                  get children() {
                    return [
                      u(Zt, {
                        variant: "fill",
                        value: "classic",
                        get children() {
                          return d("Classic");
                        },
                      }),
                      u(Zt, {
                        variant: "fill",
                        value: "trenball",
                        get children() {
                          return d("Trenball");
                        },
                      }),
                      u(Zt, {
                        variant: "fill",
                        value: "bettingStrategy",
                        get children() {
                          return [G(() => d("Betting Strategy")), u(fa, {})];
                        },
                      }),
                    ];
                  },
                });
              },
            }),
            u(Ir, {
              class: "md:min-h-[42rem]",
              removeContainerBackground: !0,
              get profit() {
                return o();
              },
              style: { height: "auto", "border-radius": "0.75rem" },
              get children() {
                return [
                  u(Di, {
                    get children() {
                      return [u(qi, {}), u(ga, {})];
                    },
                  }),
                  u(J, {
                    get when() {
                      return w() === "classic";
                    },
                    get children() {
                      return u(ze, {
                        get modes() {
                          return [Nt.manual, Nt.auto];
                        },
                        class: "!rounded-t-none rounded-b-xl",
                        get defaultValue() {
                          return l();
                        },
                        onChange: (B) => c(B),
                        isMultiGame: !0,
                        get disabled() {
                          return b();
                        },
                        get children() {
                          return [
                            u(_t, {
                              get value() {
                                return Nt.manual;
                              },
                              get children() {
                                return [
                                  G(() => {
                                    return (
                                      G(() => !dt.mobile)() &&
                                      ((N = hs()), a(N, u(nn, {})), N)
                                    );
                                    var N;
                                  }),
                                  (($ = ds()),
                                  (j = $.firstChild),
                                  (O = j.nextSibling),
                                  a(
                                    j,
                                    u(we, {
                                      get value() {
                                        return t.amount;
                                      },
                                      onChange: k,
                                      get disabled() {
                                        return !!t.beted;
                                      },
                                    })
                                  ),
                                  a(
                                    O,
                                    u(xr, {
                                      get defaultValue() {
                                        return t.rate;
                                      },
                                      onChange: (N) => e("rate", N),
                                      get labelText() {
                                        return d("Auto cash out");
                                      },
                                      get disabled() {
                                        return !!t.beted;
                                      },
                                      max: Ur,
                                      game: i,
                                    })
                                  ),
                                  a(
                                    $,
                                    ((B = G(() => !!dt.mobile)),
                                    () => {
                                      return (
                                        B() && ((N = gs()), a(N, u(nn, {})), N)
                                      );
                                      var N;
                                    }),
                                    null
                                  ),
                                  $),
                                ];
                                var B, $, j, O;
                              },
                            }),
                            u(_t, {
                              get value() {
                                return Nt.auto;
                              },
                              get children() {
                                return u(Wa, {});
                              },
                            }),
                          ];
                        },
                      });
                    },
                  }),
                  u(J, {
                    get when() {
                      return w() === "trenball";
                    },
                    get children() {
                      return u(ze, {
                        get modes() {
                          return [Nt.manual, Nt.auto];
                        },
                        class:
                          "col-span-12 lg:min-h-[21rem] rounded-xl !rounded-t-none",
                        get defaultValue() {
                          return s();
                        },
                        onChange: (B) => p(B),
                        isMultiGame: !0,
                        get children() {
                          return u(us, {});
                        },
                      });
                    },
                  }),
                  u(Br, {
                    class: "order-last lg:absolute lg:bottom-0",
                    actions: ["hotKeys", "liveStats"],
                    helpList: n,
                    mute: !1,
                  }),
                  u(J, {
                    get when() {
                      return w() === "bettingStrategy" && !dt.mobile;
                    },
                    get children() {
                      return u(pn, {});
                    },
                  }),
                  u(J, {
                    get when() {
                      return w() === "bettingStrategy" && dt.mobile;
                    },
                    get children() {
                      return u(Ve, {
                        get defaultValue() {
                          return d("Running Strategy");
                        },
                        class: "overflow-hidden bg-layer4",
                        get children() {
                          return [
                            u(Ye, {
                              class:
                                "w-full border-b border-input rounded-none",
                              get children() {
                                return [
                                  u(St, {
                                    get each() {
                                      return [
                                        "runningStragety",
                                        "topStrageties",
                                      ];
                                    },
                                    children: (B) =>
                                      u(Zt, {
                                        value: B,
                                        class: "flex-1",
                                        get children() {
                                          return y()[B];
                                        },
                                      }),
                                  }),
                                  u(Fr, {}),
                                ];
                              },
                            }),
                            u(_t, {
                              get value() {
                                return "runningStragety";
                              },
                              get children() {
                                return u(pn, {});
                              },
                            }),
                            u(_t, {
                              get value() {
                                return "topStrageties";
                              },
                              get children() {
                                return u(gn, {});
                              },
                            }),
                          ];
                        },
                      });
                    },
                  }),
                ];
              },
            }),
            u(J, {
              get when() {
                return !dt.mobile;
              },
              get children() {
                return u(qe, {
                  class: "min-w-[25rem]",
                  get children() {
                    return [
                      G(() => G(() => w() === "classic")() && u(cn, {})),
                      G(() => G(() => w() === "trenball")() && u(hn, {})),
                      G(
                        () =>
                          G(
                            () => !(w() !== "bettingStrategy" || dt.mobile)
                          )() && u(gn, {})
                      ),
                    ];
                  },
                });
              },
            }),
          ];
        },
      }),
      null
    ),
    a(
      T,
      u(J, {
        get when() {
          return dt.mobile;
        },
        get children() {
          return u(qe, {
            get children() {
              return [
                G(() => G(() => w() === "classic")() && u(cn, {})),
                G(() => G(() => w() === "trenball")() && u(hn, {})),
              ];
            },
          });
        },
      }),
      null
    ),
    T
  );
  var T;
}
var fs = S(
  '<div><div><div class="h-[42px] text-secondary flex flex-col justify-center flex-1 items-center mr-[6px] border-r border-third"><div class="h-[20px] text-[12px] font-bold flex items-center justify-center"></div><div class="flex items-center justify-center h-[16px] text-[12px] whitespace-nowrap mt-[12px]"></div></div><div class="h-[42px] text-secondary flex flex-col justify-center flex-1 items-center mr-[6px] border-r border-third"><div class="h-[20px] text-[12px] font-bold flex items-center justify-center"></div><div class="flex items-center justify-center h-[16px] text-[12px] whitespace-nowrap mt-[12px]"><span class=mthan></span></div></div><div class="h-[42px] text-secondary flex flex-col justify-center flex-1 items-center"><div class="h-[20px] text-[12px] font-bold flex items-center justify-center"></div><div class="flex items-center justify-center h-[16px] text-[12px] whitespace-nowrap mt-[12px]">'
);
const bs = { "-2": "Red", 2: "Green", 10: "Moon" },
  ys = { "-2": "50.51%", 2: "49.50%", 10: "9.90%" },
  Co = {
    Main: function () {
      return [
        u(ii, {
          get children() {
            return u(ps, {});
          },
        }),
        u(mi, {}),
      ];
    },
    Detail: function (n) {
      const [t, e] = V(""),
        [r, i] = V(""),
        [o, g] = V("");
      return (
        xt(() => {
          var k, T, B;
          e(
            n.betLog.type === "normal"
              ? "Classic"
              : bs[(k = n.betLog) == null ? void 0 : k.bv]
          ),
            i(
              n.betLog.type === "normal"
                ? "-"
                : ys[(T = n.betLog) == null ? void 0 : T.bv]
            );
          const w = (B = n.betLog) == null ? void 0 : B.gv;
          g(w && w.maxRate ? (w.maxRate / 100).toFixed(2) + "x" : "");
        }),
        (m = fs()),
        (h = m.firstChild),
        (l = h.firstChild),
        (c = l.firstChild),
        (s = c.nextSibling),
        (p = l.nextSibling),
        (b = p.firstChild),
        (y = b.nextSibling.firstChild),
        (C = p.nextSibling.firstChild),
        (x = C.nextSibling),
        a(c, u(zr, { class: "w-4 mr-2", fill: "#24EE89" }), null),
        a(c, () => d("Result"), null),
        a(s, o),
        a(b, u(qr, { class: "w-4 mr-2", fill: "#0f62fe" }), null),
        a(b, () => d("Bet"), null),
        a(y, t),
        a(C, u(Xr, { class: "w-4 mr-2", fill: "#ed6300" }), null),
        a(C, () => d("Chance"), null),
        a(x, r),
        Y(() =>
          tt(
            h,
            Ot("mt-[10px] flex justify-between rounded-xl py-4", {
              "bg-layer3": ct.darken,
              "bg-layer5": !ct.darken,
            })
          )
        ),
        m
      );
      var m, h, l, c, s, p, b, y, C, x;
    },
    game: H,
  };
export { Co as default };
