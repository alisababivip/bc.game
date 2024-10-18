var Z1 = Object.defineProperty;
var h1 = Object.getOwnPropertySymbols;
var j1 = Object.prototype.hasOwnProperty,
  N1 = Object.prototype.propertyIsEnumerable;
var x1 = (e, t, a) =>
    t in e
      ? Z1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a),
  C1 = (e, t) => {
    for (var a in t || (t = {})) j1.call(t, a) && x1(e, a, t[a]);
    if (h1) for (var a of h1(t)) N1.call(t, a) && x1(e, a, t[a]);
    return e;
  };
var P = (e, t, a) =>
  new Promise((r, s) => {
    var o = (h) => {
        try {
          p(a.next(h));
        } catch (x) {
          s(x);
        }
      },
      y = (h) => {
        try {
          p(a.throw(h));
        } catch (x) {
          s(x);
        }
      },
      p = (h) => (h.done ? r(h.value) : Promise.resolve(h.value).then(o, y));
    p((a = a.apply(e, t)).next());
  });
import {
  _ as m,
  k as j,
  Z as z1,
  h as N,
  y as q,
  $ as H,
  c as i,
  a0 as F,
  a1 as $,
  t as C,
  a as B,
  w as L1,
  a2 as w1,
  l as n1,
  o as W1,
  a3 as H1,
  f as z,
  H as s1,
  m as U,
  a4 as k1,
  i as n,
  a5 as E1,
  e as i1,
  d as l1,
  V as K1,
  D as $1,
  a6 as A,
  a7 as S1,
  L as V1,
  S as W,
  E as B1,
  F as T,
  u as G1,
  a8 as Y1,
  z as X1,
  b as I1,
  x as t1,
  a9 as R1,
  G as J1,
  I as Q1,
  R as ee,
  r as te,
  W as ae,
} from "./manifest-a234c8a0.js";
import { b as O, A as o1 } from "./router-b8d56046.js";
import { L as re } from "./LayoutTitle-870a6463.js";
import { B as ie, c as P1, u as ne } from "./currency-a0e3a368.js";
import { c as D1 } from "./utils-65805dbc.js";
import { a as se, S as b1 } from "./Symbol-f22f521e.js";
import { t as u } from "./i18n-611811a6.js";
import { c as le } from "./LR7LBJN3-fced4fb5.js";
import {
  _ as oe,
  P as K,
  m as T1,
  c as de,
  a as ue,
  b as ce,
} from "./index-4897b9da.js";
import me from "./index-f5a6b566.js";
import { G as ge } from "./game-a49e1f5b.js";
const v1 = {
    "classic-dice": () =>
      m(
        () => import("./index-2a9a4e83.js"),
        [
          "assets/index-2a9a4e83.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/router-b8d56046.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/Verified-217e2916.js",
          "assets/Counter-14a78541.js",
          "assets/animate.es-01baad02.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/WinAmount-4cf97c3b.js",
          "assets/payout-69d30c0d.js",
          "assets/game-adef0dc7.js",
          "assets/Sound-0956eba6.js",
          "assets/auto-play-75544d6b.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/insure-log-22d74a50.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/Result-793df2e7.js",
          "assets/Chance-f8ca552a.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    baccarat: () =>
      m(
        () => import("./index-c11cdd01.js"),
        [
          "assets/index-c11cdd01.js",
          "assets/manifest-a234c8a0.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/index-eff0ad24.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/number-field-a2716165.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/game-adef0dc7.js",
          "assets/deduction-99b6c8dd.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/auto-play-75544d6b.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/GameCard-125d07d2.js",
          "assets/index-096d6656.js",
          "assets/TotalBet-3b753f7e.js",
          "assets/Poker-9b9b5cb8.js",
          "assets/insure-log-22d74a50.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    coinflip: () =>
      m(
        () => import("./index-a92bd6bc.js"),
        [
          "assets/index-a92bd6bc.js",
          "assets/manifest-a234c8a0.js",
          "assets/Banner-bbcc8d49.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/router-b8d56046.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/number-field-a2716165.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/multi-stage-game-37de2ac1.js",
          "assets/Sound-0956eba6.js",
          "assets/turbo-b4b057de.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/last-0ddf2762.js",
          "assets/animate.es-01baad02.js",
          "assets/index-0e82f4b6.js",
          "assets/clamp-f5b668c4.js",
          "assets/game-adef0dc7.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    crash: () =>
      m(
        () => import("./index-cb3268c7.js"),
        [
          "assets/index-cb3268c7.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/sha256-f27e6345.js",
          "assets/index-eff0ad24.js",
          "assets/core-0e150ffe.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/MultiLogs-256c699d.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/table-cbcb9a00.js",
          "assets/GameUserScript-fc276c0a.js",
          "assets/enc-base64-43411dcf.js",
          "assets/Message-f1b40bc8.js",
          "assets/events-853a5f82.js",
          "assets/number-field-a2716165.js",
          "assets/payout-69d30c0d.js",
          "assets/game-adef0dc7.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/deduction-99b6c8dd.js",
          "assets/throttleTime-45d11bb1.js",
          "assets/throttle-267ea383.js",
          "assets/index-ea788ee8.js",
          "assets/Guide-529ac7fa.js",
          "assets/LabelWithTooltip-6c5ed111.js",
          "assets/tooltip-f54a9090.js",
          "assets/Tag-c6cb9793.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/Result-793df2e7.js",
          "assets/Chance-f8ca552a.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    wheel: () =>
      m(
        () => import("./index-2bad43c0.js"),
        [
          "assets/index-2bad43c0.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/router-b8d56046.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/auto-play-75544d6b.js",
          "assets/game-adef0dc7.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/PixiApp-b9ad5d85.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/index-096d6656.js",
          "assets/isEqual-7be2642b.js",
          "assets/WinAmount-4cf97c3b.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    double: () =>
      m(
        () => import("./index-0fda87f5.js"),
        [
          "assets/index-0fda87f5.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/sha256-f27e6345.js",
          "assets/index-eff0ad24.js",
          "assets/core-0e150ffe.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/MultiLogs-256c699d.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/table-cbcb9a00.js",
          "assets/Sound-0956eba6.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/number-field-a2716165.js",
          "assets/debounce-9aa0a06b.js",
          "assets/Banner-bbcc8d49.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/toggle-group-ead85dfc.js",
          "assets/sortBy-6d5aad30.js",
          "assets/_baseRest-c99468c7.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    slots: () =>
      m(
        () => import("./index-94732388.js"),
        [
          "assets/index-94732388.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/router-b8d56046.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/FullScreen-40455102.js",
          "assets/radio-group-dc0b5370.js",
          "assets/Message-f1b40bc8.js",
          "assets/deduction-99b6c8dd.js",
          "assets/table-cbcb9a00.js",
          "assets/imgX-9d9be5da.js",
          "assets/groupBy-38a792e4.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    hilo: () =>
      m(
        () => import("./index-23dbfdb5.js"),
        [
          "assets/index-23dbfdb5.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/BetAmount-add6a26b.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/deduction-99b6c8dd.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/Banner-bbcc8d49.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/multi-stage-game-37de2ac1.js",
          "assets/Sound-0956eba6.js",
          "assets/turbo-b4b057de.js",
          "assets/poker-edb4bdc9.js",
          "assets/game-adef0dc7.js",
          "assets/Poker-9b9b5cb8.js",
          "assets/animate.es-01baad02.js",
          "assets/last-0ddf2762.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    keno: () =>
      m(
        () => import("./index-754e53e0.js"),
        [
          "assets/index-754e53e0.js",
          "assets/manifest-a234c8a0.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/router-b8d56046.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/number-field-a2716165.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/auto-play-75544d6b.js",
          "assets/game-adef0dc7.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/payouts-1ec8c000.js",
          "assets/insure-log-22d74a50.js",
          "assets/capitalize-f590c9ec.js",
          "assets/isNull-df6b0e11.js",
          "assets/Autopick-b88a0150.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    limbo: () =>
      m(
        () => import("./index-6178ddc0.js"),
        [
          "assets/index-6178ddc0.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/BetAmount-add6a26b.js",
          "assets/number-field-a2716165.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/auto-play-75544d6b.js",
          "assets/game-adef0dc7.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Banner-bbcc8d49.js",
          "assets/insure-log-22d74a50.js",
          "assets/index-0e82f4b6.js",
          "assets/clamp-f5b668c4.js",
          "assets/animate.es-01baad02.js",
          "assets/steps-2c539e6f.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/Result-793df2e7.js",
          "assets/Chance-f8ca552a.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    mines: () =>
      m(
        () => import("./index-0c049119.js"),
        [
          "assets/index-0c049119.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/router-b8d56046.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/auto-play-75544d6b.js",
          "assets/game-adef0dc7.js",
          "assets/Sound-0956eba6.js",
          "assets/multi-stage-game-37de2ac1.js",
          "assets/turbo-b4b057de.js",
          "assets/tooltip-f54a9090.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/animate.es-01baad02.js",
          "assets/steps-2c539e6f.js",
          "assets/clamp-f5b668c4.js",
          "assets/Autopick-b88a0150.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/last-0ddf2762.js",
          "assets/groupBy-38a792e4.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    parity: () =>
      m(
        () => import("./index-5d30e539.js"),
        [
          "assets/index-5d30e539.js",
          "assets/manifest-a234c8a0.js",
          "assets/BetAmount-add6a26b.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/deduction-99b6c8dd.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/i18n-611811a6.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/Sound-0956eba6.js",
          "assets/MultiLogs-256c699d.js",
          "assets/core-0e150ffe.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/enc-base64-43411dcf.js",
          "assets/get-number-amount-8a70306b.js",
          "assets/throttleTime-45d11bb1.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/Result-793df2e7.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    plinko: () =>
      m(
        () => import("./index-99680809.js"),
        [
          "assets/index-99680809.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/router-b8d56046.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/auto-play-75544d6b.js",
          "assets/game-adef0dc7.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/events-853a5f82.js",
          "assets/PixiApp-b9ad5d85.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/pixi-particles.es-48aa2758.js",
          "assets/index-096d6656.js",
          "assets/isEqual-7be2642b.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    cave: () =>
      m(
        () => import("./index-6e3beb07.js"),
        [
          "assets/index-6e3beb07.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/BetAmount-add6a26b.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/deduction-99b6c8dd.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/multi-stage-game-37de2ac1.js",
          "assets/Sound-0956eba6.js",
          "assets/turbo-b4b057de.js",
          "assets/game-adef0dc7.js",
          "assets/PixiApp-b9ad5d85.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/pixi-particles.es-48aa2758.js",
          "assets/use-mounted-state-39a546bf.js",
          "assets/GameCard-125d07d2.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/auto-play-75544d6b.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    roulette: () =>
      m(
        () => import("./index-74f278f4.js"),
        [
          "assets/index-74f278f4.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/index-eff0ad24.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/utils-65805dbc.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/router-b8d56046.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/number-field-a2716165.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/deduction-99b6c8dd.js",
          "assets/Sound-0956eba6.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/game-adef0dc7.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Banner-bbcc8d49.js",
          "assets/TotalBet-3b753f7e.js",
          "assets/auto-play-75544d6b.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/select-83282527.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
          "assets/index-cc2c3221.css",
        ]
      ),
    RouletteSingle: () =>
      m(
        () => import("./index-74f278f4.js"),
        [
          "assets/index-74f278f4.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/index-eff0ad24.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/utils-65805dbc.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/router-b8d56046.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/number-field-a2716165.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/deduction-99b6c8dd.js",
          "assets/Sound-0956eba6.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/game-adef0dc7.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Banner-bbcc8d49.js",
          "assets/TotalBet-3b753f7e.js",
          "assets/auto-play-75544d6b.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/select-83282527.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
          "assets/index-cc2c3221.css",
        ]
      ),
    twist: () =>
      m(
        () => import("./index-b1ea4f7a.js"),
        [
          "assets/index-b1ea4f7a.js",
          "assets/manifest-a234c8a0.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/BetAmount-add6a26b.js",
          "assets/number-field-a2716165.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/deduction-99b6c8dd.js",
          "assets/i18n-611811a6.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/game-adef0dc7.js",
          "assets/Banner-bbcc8d49.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/WinAmount-4cf97c3b.js",
          "assets/animate.es-01baad02.js",
          "assets/multi-stage-game-37de2ac1.js",
          "assets/turbo-b4b057de.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    fastparity: () =>
      m(
        () => import("./index-5d30e539.js"),
        [
          "assets/index-5d30e539.js",
          "assets/manifest-a234c8a0.js",
          "assets/BetAmount-add6a26b.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/deduction-99b6c8dd.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/i18n-611811a6.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/Sound-0956eba6.js",
          "assets/MultiLogs-256c699d.js",
          "assets/core-0e150ffe.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/enc-base64-43411dcf.js",
          "assets/get-number-amount-8a70306b.js",
          "assets/throttleTime-45d11bb1.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/Result-793df2e7.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "hash-dice": () =>
      m(
        () => import("./index-2a5606ad.js"),
        [
          "assets/index-2a5606ad.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/router-b8d56046.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/number-field-a2716165.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/game-adef0dc7.js",
          "assets/Sound-0956eba6.js",
          "assets/auto-play-75544d6b.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/GameUserScript-fc276c0a.js",
          "assets/enc-base64-43411dcf.js",
          "assets/core-0e150ffe.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/Message-f1b40bc8.js",
          "assets/events-853a5f82.js",
          "assets/payout-69d30c0d.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/animate.es-01baad02.js",
          "assets/Result-793df2e7.js",
          "assets/Chance-f8ca552a.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "keno-multiplayer": () =>
      m(
        () => import("./index-76ac8e8e.js"),
        [
          "assets/index-76ac8e8e.js",
          "assets/manifest-a234c8a0.js",
          "assets/user-dc7ef1f4.js",
          "assets/sha256-f27e6345.js",
          "assets/index-eff0ad24.js",
          "assets/core-0e150ffe.js",
          "assets/___vite-browser-external_commonjs-proxy-82985b1e.js",
          "assets/MultiLogs-256c699d.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/table-cbcb9a00.js",
          "assets/payouts-1ec8c000.js",
          "assets/Sound-0956eba6.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/number-field-a2716165.js",
          "assets/debounce-9aa0a06b.js",
          "assets/Banner-bbcc8d49.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/isNull-df6b0e11.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Autopick-b88a0150.js",
          "assets/get-number-amount-8a70306b.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/throttle-267ea383.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "ring-of-fortune": () =>
      m(
        () => import("./index-89c5dead.js"),
        [
          "assets/index-89c5dead.js",
          "assets/manifest-a234c8a0.js",
          "assets/i18n-611811a6.js",
          "assets/user-dc7ef1f4.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/index-eff0ad24.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/number-field-a2716165.js",
          "assets/debounce-9aa0a06b.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/game-adef0dc7.js",
          "assets/deduction-99b6c8dd.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/auto-play-75544d6b.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/insure-log-22d74a50.js",
          "assets/index-0e82f4b6.js",
          "assets/clamp-f5b668c4.js",
          "assets/animate.es-01baad02.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/index.es-088fd7a9.js",
          "assets/_baseRest-c99468c7.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "tower-legend": () =>
      m(
        () => import("./index-d82db046.js"),
        [
          "assets/index-d82db046.js",
          "assets/manifest-a234c8a0.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/router-b8d56046.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/number-field-a2716165.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/auto-play-75544d6b.js",
          "assets/game-adef0dc7.js",
          "assets/Sound-0956eba6.js",
          "assets/multi-stage-game-37de2ac1.js",
          "assets/turbo-b4b057de.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/last-0ddf2762.js",
          "assets/animate.es-01baad02.js",
          "assets/steps-2c539e6f.js",
          "assets/clamp-f5b668c4.js",
          "assets/select-83282527.js",
          "assets/radio-group-dc0b5370.js",
          "assets/toggle-group-ead85dfc.js",
          "assets/isNull-df6b0e11.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "ultimate-dice": () =>
      m(
        () => import("./index-e3cb5ecd.js"),
        [
          "assets/index-e3cb5ecd.js",
          "assets/manifest-a234c8a0.js",
          "assets/number-field-a2716165.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/radio-group-dc0b5370.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/router-b8d56046.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/Verified-217e2916.js",
          "assets/Counter-14a78541.js",
          "assets/animate.es-01baad02.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/auto-play-75544d6b.js",
          "assets/game-adef0dc7.js",
          "assets/single-stage-game-aa4ae2c0.js",
          "assets/turbo-b4b057de.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/insure-log-22d74a50.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "video-poker": () =>
      m(
        () => import("./index-19adda4c.js"),
        [
          "assets/index-19adda4c.js",
          "assets/manifest-a234c8a0.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/router-b8d56046.js",
          "assets/utils-65805dbc.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/game-a49e1f5b.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/config-6b289bdb.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/AutoBetControls-ee3134e4.js",
          "assets/number-field-a2716165.js",
          "assets/Banner-bbcc8d49.js",
          "assets/debounce-9aa0a06b.js",
          "assets/BetAmount-add6a26b.js",
          "assets/slider-b2a7fa20.js",
          "assets/NNGMRY2O-be25bda0.js",
          "assets/index-15f8a785.js",
          "assets/deduction-99b6c8dd.js",
          "assets/GameBankrollHelp-6ee96441.js",
          "assets/SeedSetting-b2f3d34e.js",
          "assets/table-cbcb9a00.js",
          "assets/SingleBetButton-c4aa4223.js",
          "assets/throttle-267ea383.js",
          "assets/Sound-0956eba6.js",
          "assets/auto-play-75544d6b.js",
          "assets/game-adef0dc7.js",
          "assets/multi-stage-game-37de2ac1.js",
          "assets/turbo-b4b057de.js",
          "assets/GameCard-125d07d2.js",
          "assets/Poker-9b9b5cb8.js",
          "assets/poker-edb4bdc9.js",
          "assets/groupBy-38a792e4.js",
          "assets/sortBy-6d5aad30.js",
          "assets/_baseRest-c99468c7.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/GameFairnessFile-649b25ea.js",
          "assets/GameFairnessFile-e17ba143.css",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "baccarat-multiplayer": () =>
      m(
        () => import("./index-c9b447d0.js"),
        [
          "assets/index-c9b447d0.js",
          "assets/manifest-a234c8a0.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/CocosLogs-4250ed22.js",
          "assets/i18n-611811a6.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/table-cbcb9a00.js",
          "assets/CocosGameLayout-6531acaf.js",
          "assets/FullScreen-40455102.js",
          "assets/radio-group-dc0b5370.js",
          "assets/Message-f1b40bc8.js",
          "assets/deduction-99b6c8dd.js",
          "assets/Result-793df2e7.js",
          "assets/Chance-f8ca552a.js",
          "assets/Poker-9b9b5cb8.js",
          "assets/poker-edb4bdc9.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    blackjack: () =>
      m(
        () => import("./index-da9f94de.js"),
        [
          "assets/index-da9f94de.js",
          "assets/manifest-a234c8a0.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/CocosLogs-4250ed22.js",
          "assets/i18n-611811a6.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/table-cbcb9a00.js",
          "assets/CocosGameLayout-6531acaf.js",
          "assets/FullScreen-40455102.js",
          "assets/radio-group-dc0b5370.js",
          "assets/Message-f1b40bc8.js",
          "assets/deduction-99b6c8dd.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "roulette-multiplayer": () =>
      m(
        () => import("./index-c47605dc.js"),
        [
          "assets/index-c47605dc.js",
          "assets/manifest-a234c8a0.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/CocosLogs-4250ed22.js",
          "assets/i18n-611811a6.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/index-eff0ad24.js",
          "assets/Close-4ee839c4.js",
          "assets/table-cbcb9a00.js",
          "assets/CocosGameLayout-6531acaf.js",
          "assets/FullScreen-40455102.js",
          "assets/radio-group-dc0b5370.js",
          "assets/Message-f1b40bc8.js",
          "assets/deduction-99b6c8dd.js",
          "assets/Result-793df2e7.js",
          "assets/Chance-f8ca552a.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    "oriental-beauties": () =>
      m(
        () => import("./index-b10174e9.js"),
        [
          "assets/index-b10174e9.js",
          "assets/manifest-a234c8a0.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/index-eff0ad24.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/table-cbcb9a00.js",
          "assets/CocosGameLayout-6531acaf.js",
          "assets/FullScreen-40455102.js",
          "assets/radio-group-dc0b5370.js",
          "assets/Message-f1b40bc8.js",
          "assets/deduction-99b6c8dd.js",
          "assets/game-adef0dc7.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
    sword: () =>
      m(
        () => import("./index-89b724a2.js"),
        [
          "assets/index-89b724a2.js",
          "assets/manifest-a234c8a0.js",
          "assets/game-a49e1f5b.js",
          "assets/router-b8d56046.js",
          "assets/currency-a0e3a368.js",
          "assets/index-4897b9da.js",
          "assets/isSymbol-0edd6b24.js",
          "assets/isObject-d5c4896e.js",
          "assets/amount-af49bfc0.js",
          "assets/user-dc7ef1f4.js",
          "assets/use-coin-format-bfa33df5.js",
          "assets/utils-65805dbc.js",
          "assets/config-6b289bdb.js",
          "assets/SingleLogs-33bda8b8.js",
          "assets/index-eff0ad24.js",
          "assets/MoreLessBtn-6b8ac376.js",
          "assets/i18n-611811a6.js",
          "assets/QJIB6BDF-1dee7631.js",
          "assets/FN6EICGO-b0e5a495.js",
          "assets/E53DB7BS-1e802908.js",
          "assets/resolve-elements.es-b931549e.js",
          "assets/LR7LBJN3-fced4fb5.js",
          "assets/Symbol-f22f521e.js",
          "assets/Close-4ee839c4.js",
          "assets/table-cbcb9a00.js",
          "assets/CocosGameLayout-6531acaf.js",
          "assets/FullScreen-40455102.js",
          "assets/radio-group-dc0b5370.js",
          "assets/Message-f1b40bc8.js",
          "assets/deduction-99b6c8dd.js",
          "assets/game-adef0dc7.js",
          "assets/LayoutTitle-870a6463.js",
          "assets/index-f5a6b566.js",
        ]
      ),
  },
  pe = {
    thumbnail: "",
    iconThreeFour: "",
    fullName: "---",
    providerId: 0,
    providerName: "---",
    releaseTime: Date.now(),
    updateTime: 0,
    categoryId: 18,
    categoryName: "Original Casino",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    tags: [],
    translatedTags: {},
    details: "---",
    gameIdentity: {
      gameInfoId: 0,
      gameName: "---",
      gameUnique: "---",
      originalGameUnique: "---",
    },
    gameUnique: "---",
    supportMobile: !0,
    supportDemo: !1,
    disabled: !1,
    previews: [],
    landscapePreviews: [],
    fiatList: ["USD"],
    providerInfo: {
      providerId: 0,
      logo: "",
      logoWhite: "",
      providerName: "---",
      totalGame: 0,
      introduction: "",
      foundTime: 0,
      officialWebsite: "",
      disabled: !1,
      tags: [],
      langSettings: [{ language: "en", introduction: "" }],
    },
    slotsInfo: { stakeRange: null, maxWin: "0", subType: "---", rtpDes: 99 },
    gameChannel: {
      gameChannel: "1",
      gameName: "--",
      gamePath: "--",
      gameSocketNameSpace: "--",
    },
  };
function fe(t) {
  return P(this, arguments, function* ({ queryKey: e }) {
    return q().get(e[0]);
  });
}
function A1() {
  const e = O(),
    t = j(() => ({
      queryKey: [
        `/home/game2/detail/?gameUnique=${e.gameUnique}&areaCode=${N.areaCode}`,
      ],
      queryFn: fe,
      throwOnError: !1,
    }));
  return z1(() => t.data, pe);
}
function he(t) {
  return P(this, arguments, function* ({ queryKey: e }) {
    return (
      (yield q().post("/home/rec/entry/", {
        sectionId: e[1],
        page: 1,
        gameUnique: e[2],
      })) || { pageList: { list: [] } }
    );
  });
}
let xe = null;
function Ce() {
  return P(this, null, function* () {
    const e = yield q().get("/home/game2/game/channel/info");
    return (xe = e), e;
  });
}
const be = P1(
    "inline-flex items-center justify-center font-extrabold py-2 transition-all disabled:pointer-events-none disabled:opacity-40",
    {
      variants: {
        variant: {
          default: "text-primary bg-layer4 hover:bg-black/10",
          primary:
            "bg-gradient-to-r from-[#31ee88] to-[#9fe871] hover:from-[#9fe871] hover:to-[#31ee88] shadow-main hover:shadow-main-drop text-black active:scale-95",
          secondary: "bg-black/5 border-2 border-third hover:bg-black/10",
          outline: "border-2 border-third text-brand hover:bg-black/10",
          link: "text-primary underline hover:text-brand",
          text: "text-primary hover:text-brand",
          destructive: "text-primary bg-error opacity-80 hover:opacity-100",
          ghost: "hover:bg-primary hover:text-secondary",
        },
        size: {
          xs: "h-6 px-1 text-xs rounded-lg",
          sm: "h-8 px-2 text-sm rounded-lg",
          default: "h-10 px-4 rounded-xl",
          lg: "h-12 px-8 text-lg rounded-xl",
          icon: "size-8 px-2 rounded-lg",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  ve = (e) => {
    const [, t] = H(e, ["variant", "size", "class"]);
    return i(
      ie,
      F(
        {
          get class() {
            return D1(be({ variant: e.variant, size: e.size }), e.class);
          },
        },
        t
      )
    );
  };
var ye = C(
  '<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4349 27.9996C17.7041 27.9996 22.7863 22.9174 22.7863 16.6482C22.7863 10.379 17.7041 5.29688 11.4349 5.29688C5.16573 5.29688 0.0835571 10.379 0.0835571 16.6482C0.0835571 22.9174 5.16573 27.9996 11.4349 27.9996Z"fill=#A3B2C9></path><path d="M16.7691 3.19814V9.21133H6.05347V3.15803C6.05347 2.73501 6.34406 2.3922 6.70276 2.3922C6.84125 2.3922 6.97595 2.44441 7.08871 2.54128L8.57876 3.83533C8.86785 4.08582 9.27422 4.01317 9.48687 3.67263C9.5073 3.63857 9.52622 3.60452 9.54211 3.56668L10.8498 0.548737C11.0133 0.171872 11.4045 0.0227906 11.7238 0.215764C11.8452 0.29168 11.9411 0.402087 11.9993 0.532845L13.3993 3.5803C13.5696 3.95263 13.9638 4.09036 14.2794 3.88906C14.31 3.86959 14.3388 3.84757 14.3657 3.82322L15.7241 2.59198C16.0086 2.33468 16.4157 2.39749 16.6344 2.73274C16.7215 2.86668 16.7691 3.03014 16.7691 3.1989V3.19814Z"fill=#B1D0E9></path><path d="M11.4114 26.4855C16.828 26.4855 21.219 22.0809 21.219 16.6477C21.219 11.2144 16.828 6.80981 11.4114 6.80981C5.99485 6.80981 1.60385 11.2144 1.60385 16.6477C1.60385 22.0809 5.99485 26.4855 11.4114 26.4855Z"fill=#C9DDE5></path><mask id=mask0_538_12474 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4113 26.4848C16.8278 26.4848 21.2188 22.0802 21.2188 16.6469C21.2188 11.2136 16.8278 6.80908 11.4113 6.80908C5.9947 6.80908 1.6037 11.2136 1.6037 16.6469C1.6037 22.0802 5.9947 26.4848 11.4113 26.4848Z"fill=white></path></mask><g mask=url(#mask0_538_12474)><path fill-rule=evenodd clip-rule=evenodd d="M-0.848117 28.9444L24.0121 4.34985H-1.75623L-0.848117 28.9444Z"fill=#D7EDF6></path></g><path d="M11.3905 20.1158L8.73504 20.731C8.68229 20.7432 8.62757 20.7438 8.57455 20.733C8.52153 20.7221 8.47145 20.7 8.4277 20.6682C8.38395 20.6363 8.34753 20.5955 8.32092 20.5484C8.2943 20.5012 8.2781 20.449 8.27342 20.395L8.03655 17.6806L6.63201 15.3452C6.60411 15.2988 6.58652 15.2469 6.58041 15.193C6.57431 15.1392 6.57984 15.0847 6.59663 15.0331C6.61342 14.9816 6.64107 14.9343 6.67773 14.8944C6.71438 14.8545 6.75918 14.823 6.80909 14.8019L9.31774 13.7386L11.1037 11.681C11.1392 11.64 11.1831 11.6071 11.2325 11.5845C11.2818 11.562 11.3355 11.5503 11.3897 11.5503C11.444 11.5503 11.4976 11.562 11.547 11.5845C11.5963 11.6071 11.6403 11.64 11.6758 11.681L13.4617 13.7394L15.9711 14.8019C16.0211 14.823 16.0659 14.8545 16.1025 14.8944C16.1392 14.9343 16.1668 14.9816 16.1836 15.0331C16.2004 15.0847 16.2059 15.1392 16.1998 15.193C16.1937 15.2469 16.1761 15.2988 16.1482 15.3452L14.7429 17.6806L14.5076 20.395C14.5029 20.449 14.4867 20.5014 14.46 20.5486C14.4334 20.5958 14.3969 20.6367 14.353 20.6685C14.3092 20.7004 14.259 20.7225 14.2059 20.7332C14.1528 20.744 14.098 20.7433 14.0452 20.731L11.3905 20.1158Z"fill=#A8CCE9></path><mask id=mask1_538_12474 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3907 20.1165L8.73525 20.7318C8.68251 20.7439 8.62778 20.7445 8.57476 20.7337C8.52174 20.7229 8.47167 20.7008 8.42791 20.6689C8.38416 20.6371 8.34775 20.5962 8.32113 20.5491C8.29452 20.502 8.27832 20.4497 8.27363 20.3958L8.03676 17.6813L6.63222 15.3459C6.60433 15.2995 6.58673 15.2476 6.58063 15.1938C6.57452 15.1399 6.58005 15.0854 6.59684 15.0339C6.61363 14.9824 6.64129 14.9351 6.67794 14.8952C6.7146 14.8552 6.7594 14.8237 6.80931 14.8026L9.31795 13.7393L11.1039 11.6817C11.1394 11.6407 11.1833 11.6078 11.2327 11.5852C11.2821 11.5627 11.3357 11.551 11.39 11.551C11.4442 11.551 11.4978 11.5627 11.5472 11.5852C11.5966 11.6078 11.6405 11.6407 11.676 11.6817L13.462 13.7401L15.9714 14.8026C16.0213 14.8237 16.0661 14.8552 16.1027 14.8952C16.1394 14.9351 16.167 14.9824 16.1838 15.0339C16.2006 15.0854 16.2061 15.1399 16.2 15.1938C16.1939 15.2476 16.1763 15.2995 16.1484 15.3459L14.7431 17.6813L14.5078 20.3958C14.5031 20.4498 14.4869 20.5021 14.4602 20.5493C14.4336 20.5965 14.3971 20.6374 14.3533 20.6693C14.3094 20.7011 14.2592 20.7232 14.2061 20.734C14.153 20.7448 14.0982 20.744 14.0454 20.7318L11.3907 20.1165Z"fill=white></path></mask><g mask=url(#mask1_538_12474)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70736 29.6895L24.8525 3.49365H-2.67752L-1.70736 29.6895Z"fill=#C0DFF8>'
);
const _e = (e) => {
  return (
    (t = ye()),
    (a = t.firstChild.nextSibling.nextSibling.nextSibling),
    (r = a.nextSibling.nextSibling.nextSibling),
    $(t, e, !0, !0),
    a.style.setProperty("mask-type", "luminance"),
    r.style.setProperty("mask-type", "luminance"),
    t
  );
  var t, a, r;
};
var Le = C(
  '<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4347 27.9986C17.7038 27.9986 22.786 22.9164 22.786 16.6472C22.786 10.3781 17.7038 5.2959 11.4347 5.2959C5.16549 5.2959 0.083313 10.3781 0.083313 16.6472C0.083313 22.9164 5.16549 27.9986 11.4347 27.9986Z"fill=#EA9227></path><path d="M16.7687 3.19765V9.21084H6.05304V3.15755C6.05304 2.73452 6.34363 2.39171 6.70234 2.39171C6.84082 2.39171 6.97553 2.44392 7.08828 2.54079L8.57834 3.83484C8.86742 4.08533 9.2738 4.01268 9.48644 3.67214C9.50688 3.63809 9.5258 3.60403 9.54169 3.56619L10.8494 0.548248C11.0128 0.171383 11.4041 0.0223023 11.7234 0.215275C11.8448 0.291192 11.9407 0.401599 11.9989 0.532356L13.3989 3.57982C13.5691 3.95214 13.9634 4.08987 14.279 3.88857C14.3096 3.8691 14.3384 3.84708 14.3653 3.82273L15.7236 2.59149C16.0082 2.33419 16.4153 2.39701 16.634 2.73225C16.721 2.86619 16.7687 3.02965 16.7687 3.19841V3.19765Z"fill=#FFD805></path><path d="M11.411 26.4852C16.8276 26.4852 21.2186 22.0807 21.2186 16.6474C21.2186 11.2141 16.8276 6.80957 11.411 6.80957C5.99445 6.80957 1.60345 11.2141 1.60345 16.6474C1.60345 22.0807 5.99445 26.4852 11.411 26.4852Z"fill=#FFB936></path><mask id=mask0_538_12402 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4111 26.4843C16.8277 26.4843 21.2187 22.0797 21.2187 16.6464C21.2187 11.2131 16.8277 6.80859 11.4111 6.80859C5.99454 6.80859 1.60355 11.2131 1.60355 16.6464C1.60355 22.0797 5.99454 26.4843 11.4111 26.4843Z"fill=white></path></mask><g mask=url(#mask0_538_12402)><path opacity=0.477 fill-rule=evenodd clip-rule=evenodd d="M-0.8483 28.9442L24.0119 4.34961H-1.75641L-0.8483 28.9442Z"fill=#FFEE94 fill-opacity=0.683></path></g><path d="M11.3898 20.1153L8.73434 20.7306C8.68159 20.7427 8.62686 20.7433 8.57385 20.7325C8.52083 20.7216 8.47075 20.6995 8.427 20.6677C8.38325 20.6359 8.34683 20.595 8.32022 20.5479C8.2936 20.5008 8.2774 20.4485 8.27271 20.3946L8.03585 17.6801L6.63131 15.3447C6.60341 15.2983 6.58581 15.2464 6.57971 15.1925C6.57361 15.1387 6.57914 15.0842 6.59592 15.0327C6.61271 14.9811 6.64037 14.9338 6.67703 14.8939C6.71368 14.854 6.75848 14.8225 6.80839 14.8014L9.31704 13.7381L11.103 11.6805C11.1385 11.6395 11.1824 11.6066 11.2318 11.584C11.2811 11.5615 11.3348 11.5498 11.389 11.5498C11.4433 11.5498 11.4969 11.5615 11.5463 11.584C11.5956 11.6066 11.6396 11.6395 11.6751 11.6805L13.461 13.7389L15.9704 14.8014C16.0204 14.8225 16.0652 14.854 16.1018 14.8939C16.1385 14.9338 16.1661 14.9811 16.1829 15.0327C16.1997 15.0842 16.2052 15.1387 16.1991 15.1925C16.193 15.2464 16.1754 15.2983 16.1475 15.3447L14.7422 17.6801L14.5069 20.3946C14.5022 20.4486 14.486 20.5009 14.4593 20.5481C14.4327 20.5953 14.3962 20.6362 14.3523 20.668C14.3085 20.6999 14.2583 20.722 14.2052 20.7328C14.1521 20.7435 14.0973 20.7428 14.0445 20.7306L11.3898 20.1153Z"fill=#FFD805></path><mask id=mask1_538_12402 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3892 20.1163L8.73376 20.7315C8.68101 20.7436 8.62628 20.7443 8.57327 20.7335C8.52025 20.7226 8.47017 20.7005 8.42642 20.6687C8.38267 20.6368 8.34625 20.596 8.31964 20.5488C8.29302 20.5017 8.27682 20.4494 8.27213 20.3955L8.03527 17.6811L6.63073 15.3457C6.60283 15.2993 6.58523 15.2474 6.57913 15.1935C6.57303 15.1397 6.57856 15.0852 6.59534 15.0336C6.61213 14.9821 6.63979 14.9348 6.67645 14.8949C6.7131 14.855 6.7579 14.8234 6.80781 14.8023L9.31646 13.7391L11.1024 11.6815C11.1379 11.6405 11.1819 11.6076 11.2312 11.585C11.2806 11.5625 11.3342 11.5508 11.3885 11.5508C11.4427 11.5508 11.4964 11.5625 11.5457 11.585C11.5951 11.6076 11.639 11.6405 11.6745 11.6815L13.4605 13.7399L15.9699 14.8023C16.0198 14.8234 16.0646 14.855 16.1012 14.8949C16.1379 14.9348 16.1655 14.9821 16.1823 15.0336C16.1991 15.0852 16.2046 15.1397 16.1985 15.1935C16.1924 15.2474 16.1748 15.2993 16.1469 15.3457L14.7416 17.6811L14.5063 20.3955C14.5016 20.4495 14.4854 20.5019 14.4587 20.5491C14.4321 20.5963 14.3956 20.6372 14.3518 20.669C14.3079 20.7009 14.2577 20.7229 14.2046 20.7337C14.1515 20.7445 14.0967 20.7438 14.0439 20.7315L11.3892 20.1163Z"fill=white></path></mask><g mask=url(#mask1_538_12402)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70858 29.6891L24.8513 3.49316H-2.67874L-1.70858 29.6891Z"fill=#FFEB73>'
);
const we = (e) => {
  return (
    (t = Le()),
    (a = t.firstChild.nextSibling.nextSibling.nextSibling),
    (r = a.nextSibling.nextSibling.nextSibling),
    $(t, e, !0, !0),
    a.style.setProperty("mask-type", "luminance"),
    r.style.setProperty("mask-type", "luminance"),
    t
  );
  var t, a, r;
};
var ke = C(
  '<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox="0 0 24 28"fill=none><path d="M11.4349 27.9996C17.7041 27.9996 22.7863 22.9174 22.7863 16.6482C22.7863 10.379 17.7041 5.29688 11.4349 5.29688C5.16573 5.29688 0.0835571 10.379 0.0835571 16.6482C0.0835571 22.9174 5.16573 27.9996 11.4349 27.9996Z"fill=#D5A290></path><path d="M16.7691 3.19814V9.21133H6.05347V3.15803C6.05347 2.73501 6.34406 2.3922 6.70276 2.3922C6.84125 2.3922 6.97595 2.44441 7.08871 2.54128L8.57876 3.83533C8.86785 4.08582 9.27422 4.01317 9.48687 3.67263C9.5073 3.63857 9.52622 3.60452 9.54211 3.56668L10.8498 0.548737C11.0133 0.171872 11.4045 0.0227906 11.7238 0.215764C11.8452 0.29168 11.9411 0.402087 11.9993 0.532845L13.3993 3.5803C13.5696 3.95263 13.9638 4.09036 14.2794 3.88906C14.31 3.86959 14.3388 3.84757 14.3657 3.82322L15.7241 2.59198C16.0086 2.33468 16.4157 2.39749 16.6344 2.73274C16.7215 2.86668 16.7691 3.03014 16.7691 3.1989V3.19814Z"fill=#FFAE92></path><path d="M11.4114 26.4855C16.828 26.4855 21.219 22.0809 21.219 16.6477C21.219 11.2144 16.828 6.80981 11.4114 6.80981C5.99485 6.80981 1.60385 11.2144 1.60385 16.6477C1.60385 22.0809 5.99485 26.4855 11.4114 26.4855Z"fill=#F2CAB9></path><mask id=mask0_538_12438 maskUnits=userSpaceOnUse x=1 y=6 width=21 height=21><path d="M11.4113 26.4848C16.8278 26.4848 21.2188 22.0802 21.2188 16.6469C21.2188 11.2136 16.8278 6.80908 11.4113 6.80908C5.9947 6.80908 1.6037 11.2136 1.6037 16.6469C1.6037 22.0802 5.9947 26.4848 11.4113 26.4848Z"fill=white></path></mask><g mask=url(#mask0_538_12438)><path fill-rule=evenodd clip-rule=evenodd d="M-0.848117 28.9444L24.0121 4.34985H-1.75623L-0.848117 28.9444Z"fill=#FCD8C9></path></g><path d="M11.3905 20.1158L8.73504 20.731C8.68229 20.7432 8.62757 20.7438 8.57455 20.733C8.52153 20.7221 8.47145 20.7 8.4277 20.6682C8.38395 20.6363 8.34753 20.5955 8.32092 20.5484C8.2943 20.5012 8.2781 20.449 8.27342 20.395L8.03655 17.6806L6.63201 15.3452C6.60411 15.2988 6.58652 15.2469 6.58041 15.193C6.57431 15.1392 6.57984 15.0847 6.59663 15.0331C6.61342 14.9816 6.64107 14.9343 6.67773 14.8944C6.71438 14.8545 6.75918 14.823 6.80909 14.8019L9.31774 13.7386L11.1037 11.681C11.1392 11.64 11.1831 11.6071 11.2325 11.5845C11.2818 11.562 11.3355 11.5503 11.3897 11.5503C11.444 11.5503 11.4976 11.562 11.547 11.5845C11.5963 11.6071 11.6403 11.64 11.6758 11.681L13.4617 13.7394L15.9711 14.8019C16.0211 14.823 16.0659 14.8545 16.1025 14.8944C16.1392 14.9343 16.1668 14.9816 16.1836 15.0331C16.2004 15.0847 16.2059 15.1392 16.1998 15.193C16.1937 15.2469 16.1761 15.2988 16.1482 15.3452L14.7429 17.6806L14.5076 20.395C14.5029 20.449 14.4867 20.5014 14.46 20.5486C14.4334 20.5958 14.3969 20.6367 14.353 20.6685C14.3092 20.7004 14.259 20.7225 14.2059 20.7332C14.1528 20.744 14.098 20.7433 14.0452 20.731L11.3905 20.1158Z"fill=#FFAE92></path><mask id=mask1_538_12438 maskUnits=userSpaceOnUse x=6 y=11 width=11 height=10><path d="M11.3907 20.1165L8.73525 20.7318C8.68251 20.7439 8.62778 20.7445 8.57476 20.7337C8.52174 20.7229 8.47167 20.7008 8.42791 20.6689C8.38416 20.6371 8.34775 20.5962 8.32113 20.5491C8.29452 20.502 8.27832 20.4497 8.27363 20.3958L8.03676 17.6813L6.63222 15.3459C6.60433 15.2995 6.58673 15.2476 6.58063 15.1938C6.57452 15.1399 6.58005 15.0854 6.59684 15.0339C6.61363 14.9824 6.64129 14.9351 6.67794 14.8952C6.7146 14.8552 6.7594 14.8237 6.80931 14.8026L9.31795 13.7393L11.1039 11.6817C11.1394 11.6407 11.1833 11.6078 11.2327 11.5852C11.2821 11.5627 11.3357 11.551 11.39 11.551C11.4442 11.551 11.4978 11.5627 11.5472 11.5852C11.5966 11.6078 11.6405 11.6407 11.676 11.6817L13.462 13.7401L15.9714 14.8026C16.0213 14.8237 16.0661 14.8552 16.1027 14.8952C16.1394 14.9351 16.167 14.9824 16.1838 15.0339C16.2006 15.0854 16.2061 15.1399 16.2 15.1938C16.1939 15.2476 16.1763 15.2995 16.1484 15.3459L14.7431 17.6813L14.5078 20.3958C14.5031 20.4498 14.4869 20.5021 14.4602 20.5493C14.4336 20.5965 14.3971 20.6374 14.3533 20.6693C14.3094 20.7011 14.2592 20.7232 14.2061 20.734C14.153 20.7448 14.0982 20.744 14.0454 20.7318L11.3907 20.1165Z"fill=white></path></mask><g mask=url(#mask1_538_12438)><path fill-rule=evenodd clip-rule=evenodd d="M-1.70736 29.6895L24.8525 3.49365H-2.67752L-1.70736 29.6895Z"fill=#FFC3AE>'
);
const Ee = (e) => {
  return (
    (t = ke()),
    (a = t.firstChild.nextSibling.nextSibling.nextSibling),
    (r = a.nextSibling.nextSibling.nextSibling),
    $(t, e, !0, !0),
    a.style.setProperty("mask-type", "luminance"),
    r.style.setProperty("mask-type", "luminance"),
    t
  );
  var t, a, r;
};
var Se = C(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path d="m15.184 26-5.445 2.99c-.856.47-1.915.127-2.365-.767a1.9 1.9 0 0 1-.177-1.16l1.04-6.333a1.88 1.88 0 0 0-.504-1.62L3.33 14.626a1.89 1.89 0 0 1-.031-2.587c.269-.289.621-.476 1.002-.534l6.087-.923a1.76 1.76 0 0 0 1.32-1.001l2.722-5.76c.428-.906 1.478-1.28 2.346-.832.346.178.626.47.796.831l2.723 5.761c.255.54.748.915 1.319 1l6.087.925c.957.145 1.62 1.074 1.482 2.074a1.86 1.86 0 0 1-.51 1.047l-4.405 4.484a1.88 1.88 0 0 0-.504 1.62l1.04 6.332c.163.996-.478 1.941-1.431 2.113-.38.068-.77.003-1.111-.184l-5.445-2.99c-.51-.28-1.12-.28-1.63 0z"></path> '
);
const a1 = (e) => {
  return (
    (t = Se()),
    (a = t.firstChild.nextSibling),
    $(t, e, !0, !0),
    B(() => {
      var r;
      return L1(a, "fill", (r = e.fill) != null ? r : "currentColor");
    }),
    t
  );
  var t, a;
};
oe(
  {},
  {
    Fill: () => d1,
    Label: () => O1,
    Progress: () => Ve,
    Root: () => u1,
    Track: () => c1,
    ValueLabel: () => q1,
  }
);
var U1 = w1();
function G() {
  const e = k1(U1);
  if (e === void 0)
    throw new Error(
      "[kobalte]: `useProgressContext` must be used within a `Progress.Root` component"
    );
  return e;
}
function d1(e) {
  const t = G(),
    [a, r] = H(e, ["style"]);
  return i(
    K,
    F(
      {
        as: "div",
        get style() {
          return C1(
            { "--kb-progress-fill-width": t.progressFillWidth() },
            a.style
          );
        },
      },
      () => t.dataset(),
      r
    )
  );
}
function O1(e) {
  const t = G(),
    a = T1({ id: t.generateId("label") }, e),
    [r, s] = H(a, ["id"]);
  return (
    n1(() => W1(t.registerLabelId(r.id))),
    i(
      K,
      F(
        {
          as: "span",
          get id() {
            return r.id;
          },
        },
        () => t.dataset(),
        s
      )
    )
  );
}
function u1(e) {
  const t = `progress-${H1()}`,
    a = T1({ id: t, value: 0, minValue: 0, maxValue: 100 }, e),
    [r, s] = H(a, [
      "value",
      "minValue",
      "maxValue",
      "indeterminate",
      "getValueLabel",
    ]),
    [o, y] = z(),
    p = le(() => ({ style: "percent" })),
    h = () => de(r.value, r.minValue, r.maxValue),
    x = () => (h() - r.minValue) / (r.maxValue - r.minValue),
    l = () => {
      if (!r.indeterminate)
        return r.getValueLabel
          ? r.getValueLabel({ value: h(), min: r.minValue, max: r.maxValue })
          : p().format(x());
    },
    f = s1(() => {
      let v;
      return (
        r.indeterminate || (v = x() === 1 ? "complete" : "loading"),
        {
          "data-progress": v,
          "data-indeterminate": r.indeterminate ? "" : void 0,
        }
      );
    }),
    _ = {
      dataset: f,
      value: h,
      valuePercent: x,
      valueLabel: l,
      labelId: o,
      progressFillWidth: () =>
        r.indeterminate ? void 0 : `${Math.round(100 * x())}%`,
      generateId: ue(() => s.id),
      registerLabelId: ce(y),
    };
  return i(U1.Provider, {
    value: _,
    get children() {
      return i(
        K,
        F(
          {
            as: "div",
            role: "progressbar",
            get "aria-valuenow"() {
              return U(() => !!r.indeterminate)() ? void 0 : h();
            },
            get "aria-valuemin"() {
              return r.minValue;
            },
            get "aria-valuemax"() {
              return r.maxValue;
            },
            get "aria-valuetext"() {
              return l();
            },
            get "aria-labelledby"() {
              return o();
            },
          },
          f,
          s
        )
      );
    },
  });
}
function c1(e) {
  const t = G();
  return i(
    K,
    F({ as: "div" }, () => t.dataset(), e)
  );
}
function q1(e) {
  const t = G();
  return i(
    K,
    F(
      {
        as: "div",
        get children() {
          return t.valueLabel();
        },
      },
      () => t.dataset(),
      e
    )
  );
}
var Ve = Object.assign(u1, { Fill: d1, Label: O1, Track: c1, ValueLabel: q1 });
const Ie = P1("relative w-full overflow-hidden rounded-xl bg-layer4", {
    variants: { size: { sm: "h-1", default: "h-2", lg: "h-4" } },
    defaultVariants: { size: "default" },
  }),
  Re = (e) => {
    const [t, a] = H(e, ["children", "size"]);
    return i(
      u1,
      F(a, {
        get children() {
          return [
            U(() => t.children),
            i(c1, {
              get class() {
                return D1(Ie({ size: t.size }));
              },
              get children() {
                return i(d1, {
                  class:
                    "h-full w-[var(--kb-progress-fill-width)] flex-1 transition-all rounded-xl",
                  style: {
                    "background-image":
                      "linear-gradient(90deg, #9FE871 0%, #24EE89 100%)",
                  },
                });
              },
            }),
          ];
        },
      })
    );
  };
var Pe = C("<div>"),
  De = C('<span class="text-xs font-semibold"># '),
  Te = C(
    '<div class="flex flex-col md:flex-row gap-2"><div class="flex flex-col gap-2 md:w-1/2"><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-brand font-semibold"></span></div><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-brand font-semibold"></span></div><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-primary font-semibold"></span></div><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-primary font-semibold"></span></div><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-primary font-semibold"></span></div></div><div class="border-b border-b-input my-4 md:hidden"></div><div class="border-l border-l-input mx-4 hidden md:block"></div><div class="flex flex-col gap-2 md:w-1/2"><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-brand font-semibold"></span></div><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-primary font-semibold"></span></div><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-primary font-semibold"></span></div><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-sm text-primary font-semibold">'
  ),
  Ae = C('<div class="border-b border-b-input mt-4 mb-2">'),
  Ue = C(
    '<section class="mt-4 mb-2 md:mt-5 md:mb-3 py-4 px-2 flex flex-col bg-layer4 rounded-xl md:py-5 md:px-3"><div class="flex justify-between items-start"><div class="flex flex-col"><span class="font-extrabold text-lg"></span><div class="flex items-center gap-1"><span class="text-secondary font-semibold text-sm"></span></div></div><div class="flex items-center gap-2">'
  ),
  Oe = C(
    '<div class="bg-layer5 dark:bg-layer3 rounded-xl p-2"><div class="flex items-center border-b border-b-input pb-3 mb-3"><div class=mr-2></div><span class="font-extrabold text-secondary"></span></div><div class="flex flex-col gap-3 text-sm font-extrabold"><div class="flex items-center justify-between"><span class=text-secondary></span><div class="text-primary flex items-center gap-0"><span class=text-brand>+</span></div></div><div class="flex items-center justify-between"><span class=text-secondary></span><div class="text-primary flex items-center gap-0"><span></span></div></div><div class="flex items-center justify-between"><span class=text-secondary></span><span class=text-primary>X'
  ),
  qe = C('<div id=description class="m-4 text-secondary">'),
  Fe = C('<div class="flex items-center gap-1 justify-center h-5">'),
  Me = C(
    '<div><div class="p-3 flex flex-col md:flex-row gap-2 bg-layer5 dark:bg-layer3 rounded-xl"><div class="flex gap-1 items-center grow flex-1"><p class="mb-4 mx-10"><span class="text-3xl text-primary font-extrabold"></span></p><div class="flex flex-col justify-start"><div class="flex gap-1"></div><span class=text-secondary></span></div></div><div class="flex flex-col justify-between flex-1"></div></div><div class="w-full flex gap-1.5 mt-1.5 rounded-xl"><div class="w-1/2 py-4 px-5 flex flex-col md:flex-row items-center gap-1 bg-layer5 dark:bg-layer3 justify-between rounded-lg"><p class="text-secondary text-sm"></p><div class="flex gap-1"></div></div><div class="w-1/2 py-4 px-5 flex flex-col md:flex-row items-center gap-1 bg-layer5 dark:bg-layer3 rounded-lg justify-center"><p class="text-secondary h-6 text-sm">'
  ),
  Ze = C(
    '<div class="flex items-center"><div class="flex gap-0 mr-1 min-w-[5.6rem]">'
  ),
  je = C("<img>");
function y1(e) {
  return (
    (t = Pe()),
    n(
      t,
      i(T, {
        get each() {
          return e.tags;
        },
        children: (a) =>
          i(o1, {
            class:
              "flex items-center text-right bg-layer5 text-brand h-8 px-1.5 rounded-lg",
            get href() {
              return `/provider/${encodeURIComponent(a)}`;
            },
            get children() {
              var r = De();
              return (
                r.firstChild,
                n(r, () => E1.replaceHostName(a, i1.host), null),
                r
              );
            },
          }),
      })
    ),
    B(() => I1(t, l1("flex flex-wrap gap-2", e.class))),
    t
  );
  var t;
}
function Ne() {
  const [e, t] = z(!1),
    a = A1(),
    r = (l, f) => {
      if (l === null || !l) return "--";
      if (!(f != null && f.isVolatility))
        return f != null && f.isSpin
          ? Number(l) > 0
            ? u("Yes")
            : u("No")
          : typeof l == "boolean"
          ? u(l ? "Yes" : "No")
          : f != null && f.isPercent
          ? l + "%"
          : String(l);
      switch (l) {
        case 1:
          return u("Low");
        case 2:
          return u("Medium");
        default:
          return u("High");
      }
    };
  return (
    (s = Ue()),
    (o = s.firstChild.firstChild),
    (y = o.firstChild),
    (p = y.nextSibling),
    (h = p.firstChild),
    (x = o.nextSibling),
    n(y, () => {
      var l;
      return (l = a()) == null ? void 0 : l.fullName;
    }),
    n(h, () => u("By")),
    n(
      p,
      i(o1, {
        class: "text-brand font-semibold text-sm",
        get href() {
          var l;
          return `/provider/${(l = a()) == null ? void 0 : l.providerName}`;
        },
        get children() {
          var l;
          return E1.replaceHostName(
            (l = a()) == null ? void 0 : l.providerName,
            i1.host
          );
        },
      }),
      null
    ),
    n(
      x,
      i(y1, {
        get tags() {
          var l;
          return ((l = a()) == null ? void 0 : l.tags) || [];
        },
        get class() {
          return i1.mobile ? "hidden" : "";
        },
      }),
      null
    ),
    n(
      x,
      i(ve, {
        class: "bg-layer5 hover:bg-layer5",
        size: "icon",
        onClick: () => t((l) => !l),
        get children() {
          return i(se, {
            get class() {
              return l1(e() ? "rotate-90" : "-rotate-90");
            },
          });
        },
      }),
      null
    ),
    n(
      s,
      i(K1, {
        get when() {
          return e();
        },
        get children() {
          return [
            i(y1, {
              get tags() {
                var c;
                return ((c = a()) == null ? void 0 : c.tags) || [];
              },
              class: "md:hidden pb-2 pt-1.5",
            }),
            ((l = Te()),
            (f = l.firstChild),
            (_ = f.firstChild),
            (v = _.firstChild),
            (E = v.nextSibling),
            (S = _.nextSibling),
            (w = S.firstChild),
            (V = w.nextSibling),
            (I = S.nextSibling),
            (k = I.firstChild),
            (D = k.nextSibling),
            (d = I.nextSibling),
            (g = d.firstChild),
            (b = g.nextSibling),
            (L = d.nextSibling.firstChild),
            (R = L.nextSibling),
            (M = f.nextSibling.nextSibling.nextSibling.firstChild),
            (Z = M.firstChild),
            (m1 = Z.nextSibling),
            (Y = M.nextSibling),
            (X = Y.firstChild),
            (g1 = X.nextSibling),
            (J = Y.nextSibling),
            (Q = J.firstChild),
            (p1 = Q.nextSibling),
            (e1 = J.nextSibling.firstChild),
            (f1 = e1.nextSibling),
            n(v, () => u("House Edge")),
            n(E, () => {
              var c;
              return r(
                new $1(
                  100 - (((c = a()) == null ? void 0 : c.slotsInfo.rtpDes) || 0)
                ).toFixed(2),
                { isPercent: !0 }
              );
            }),
            n(w, () => u("RTP (Return to Player)")),
            n(V, () => {
              var c;
              return r((c = a()) == null ? void 0 : c.slotsInfo.rtpDes, {
                isPercent: !0,
              });
            }),
            n(k, () => u("Reel design")),
            n(D, () => {
              var c;
              return r((c = a()) == null ? void 0 : c.slotsInfo.reelDesign);
            }),
            n(g, () => u("Lucky Spins")),
            n(b, () => {
              var c;
              return r((c = a()) == null ? void 0 : c.slotsInfo.luckySpin, {
                isSpin: !0,
              });
            }),
            n(L, () => u("Win Ways")),
            n(R, () => {
              var c;
              return r((c = a()) == null ? void 0 : c.slotsInfo.winWays);
            }),
            n(Z, () => u("Max Win")),
            n(m1, () => {
              var c;
              return r((c = a()) == null ? void 0 : c.slotsInfo.maxWin);
            }),
            n(X, () => u("Hit Rate")),
            n(g1, () => {
              var c;
              return r((c = a()) == null ? void 0 : c.slotsInfo.hitRate, {
                isPercent: !0,
              });
            }),
            n(Q, () => u("Volatility")),
            n(p1, () => {
              var c;
              return r((c = a()) == null ? void 0 : c.slotsInfo.volatility, {
                isVolatility: !0,
              });
            }),
            n(e1, () => u("Stakes Range")),
            n(f1, () => {
              var c;
              return r((c = a()) == null ? void 0 : c.slotsInfo.stakeRange);
            }),
            l),
            Ae(),
            i(A, {
              type: "inner",
              class: "my-2 sm:my-4 w-full sm:max-w-sm h-11 light-layer3-tabs",
              get children() {
                return [
                  i(A.TabItem, {
                    get title() {
                      return u("High win");
                    },
                    class: "flex flex-col gap-2 min-h-80",
                    get children() {
                      return i(_1, { type: "bigWinRank" });
                    },
                  }),
                  i(A.TabItem, {
                    get title() {
                      return u("Lucky win");
                    },
                    class: "flex flex-col gap-2 min-h-80",
                    get children() {
                      return i(_1, { type: "luckyWinRank" });
                    },
                  }),
                  i(A.TabItem, {
                    title: "Description",
                    class: "flex flex-col gap-2 min-h-80",
                    get children() {
                      return i(He, {});
                    },
                  }),
                  i(A.TabItem, {
                    get title() {
                      return u("Review");
                    },
                    class: "min-h-80",
                    get children() {
                      return i($e, {});
                    },
                  }),
                ];
              },
            }),
          ];
          var l,
            f,
            _,
            v,
            E,
            S,
            w,
            V,
            I,
            k,
            D,
            d,
            g,
            b,
            L,
            R,
            M,
            Z,
            m1,
            Y,
            X,
            g1,
            J,
            Q,
            p1,
            e1,
            f1;
        },
      }),
      null
    ),
    s
  );
  var s, o, y, p, h, x;
}
function ze(t) {
  return P(this, arguments, function* ({ queryKey: e }) {
    const a = yield q().get(`/game/support/home/get-rank/${e[1]}/`);
    return {
      bigWinRank: a.bigWinRank.sort((r, s) => s.winUsd - r.winUsd),
      luckyWinRank: a.luckyWinRank.sort((r, s) => s.winUsd - r.winUsd),
    };
  });
}
function _1(e) {
  const { findToken: t } = ne(),
    a = O(),
    r = j(() => ({
      queryKey: ["/api/game/support/home/get-rank/{gameUnique}/", a.gameUnique],
      queryFn: ze,
    })),
    s = s1(() => {
      var o;
      return ((o = r.data) == null ? void 0 : o[e.type]) || [];
    });
  return i(S1, {
    get fallback() {
      return i(V1, {});
    },
    get children() {
      return i(W, {
        get when() {
          return s().length > 0;
        },
        get fallback() {
          return i(B1, {});
        },
        get children() {
          return i(T, {
            get each() {
              return s();
            },
            children: (o, y) =>
              (() => {
                var p = Oe(),
                  h = p.firstChild,
                  x = h.firstChild,
                  l = x.nextSibling,
                  f = h.nextSibling.firstChild,
                  _ = f.firstChild,
                  v = _.nextSibling,
                  E = v.firstChild;
                E.firstChild;
                var S,
                  w = f.nextSibling,
                  V = w.firstChild,
                  I = V.nextSibling,
                  k = I.firstChild,
                  D = w.nextSibling.firstChild,
                  d = D.nextSibling,
                  g = d.firstChild;
                return (
                  n(
                    x,
                    ((S = U(() => y() === 0)),
                    () => {
                      return S()
                        ? i(we, {})
                        : ((b = U(() => y() === 1)),
                          () => (b() ? i(Ee, {}) : i(_e, {})));
                      var b;
                    })
                  ),
                  n(l, () => o.nickName),
                  n(_, () => u("Payout")),
                  n(
                    v,
                    i(b1, {
                      get token() {
                        return t(o.currencyName);
                      },
                    }),
                    E
                  ),
                  n(E, () => o.winAmount, null),
                  n(V, () => u("Wager")),
                  n(
                    I,
                    i(b1, {
                      get token() {
                        return t(o.currencyName);
                      },
                    }),
                    k
                  ),
                  n(k, () => o.betAmount),
                  n(D, () => u("Mult")),
                  n(d, () => o.odds / 1e4, g),
                  p
                );
              })(),
          });
        },
      });
    },
  });
}
function We(t) {
  return P(this, arguments, function* ({ queryKey: e }) {
    return yield q().get(
      `/home/game2/introduction/?areaCode=${e[1]}&gameUnique=${e[2]}`
    );
  });
}
function He() {
  const e = O(),
    t = j(() => ({
      queryKey: [
        `/home/game2/introduction/?areaCode=${N.areaCode}&gameUnique=${e.gameUnique}`,
        N.areaCode,
        e.gameUnique,
      ],
      queryFn: We,
    }));
  return (
    (a = qe()),
    B(() => {
      var r;
      return (a.innerHTML = (r = t.data) == null ? void 0 : r.introduction);
    }),
    a
  );
  var a;
}
function Ke(t) {
  return P(this, arguments, function* ({ queryKey: e }) {
    return yield q().post("/comment/star/scores/", { gameUnique: e[1] });
  });
}
function $e() {
  const [e, t] = z(0),
    [a, r] = z(0),
    s = O(),
    o = G1(),
    y = Y1(() => ({
      mutationKey: ["api/comment/star/tap/", s.gameUnique],
      mutationFn: (d) =>
        P(this, null, function* () {
          if (e() !== d) {
            if (!(N.vipLevel < 4))
              return (
                t(d),
                yield q().post("/comment/star/tap/", {
                  gameUnique: s.gameUnique,
                  rank: d,
                }),
                d
              );
            t1.warning(u("Unlock at VIP 4"));
          }
        }),
      onSuccess(d) {
        d && t1.success(u("Thanks for your feedback"));
      },
      onError(d) {
        var g;
        t1.error(d.message), t(((g = p.data) == null ? void 0 : g.my) || 0);
      },
    })),
    p = j(() => ({
      queryKey: ["/api/comment/star/scores/", s.gameUnique],
      queryFn: Ke,
    }));
  return (
    n1(() => {
      p.data && t(p.data.my);
    }),
    [
      ((h = Me()),
      (x = h.firstChild),
      (l = x.firstChild),
      (f = l.firstChild),
      (_ = f.firstChild),
      (v = f.nextSibling.firstChild),
      (E = v.nextSibling),
      (S = l.nextSibling),
      (w = x.nextSibling.firstChild),
      (V = w.firstChild),
      (I = V.nextSibling),
      (k = w.nextSibling),
      (D = k.firstChild),
      n(_, () => {
        var d;
        return (d = p.data) == null ? void 0 : d.avg;
      }),
      n(
        v,
        i(T, {
          get each() {
            return Array.from({ length: 5 });
          },
          children: (d, g) =>
            i(a1, {
              get fill() {
                var b;
                return (b = p.data) != null && b.avg && g() < Number(p.data.avg)
                  ? "#2cd97d"
                  : "#b3bec1";
              },
              class: "size-5",
            }),
        })
      ),
      n(E, () => u("Out of 5")),
      n(
        S,
        i(T, {
          get each() {
            return Array.from({ length: 5 });
          },
          children: (d, g) => {
            return (
              (b = Ze()),
              (L = b.firstChild),
              n(
                L,
                i(T, {
                  get each() {
                    return Array.from({ length: 5 - g() });
                  },
                  children: (R) =>
                    i(a1, { class: "size-4.5", fill: "#b3bec1" }),
                })
              ),
              n(
                b,
                i(Re, {
                  class: "grow",
                  minValue: 0,
                  get value() {
                    return U(() => !!p.data)()
                      ? Number(p.data.scores[5 - g()] || 0)
                      : 0;
                  },
                }),
                null
              ),
              b
            );
            var b, L;
          },
        })
      ),
      n(V, () => u("Rate this Game")),
      n(
        I,
        i(T, {
          get each() {
            return Array.from({ length: 5 });
          },
          children: (d, g) =>
            i(a1, {
              onMouseOver: () => {
                r(g() + 1);
              },
              onMouseLeave: () => {
                r(0);
              },
              onClick: () => {
                N.login ? y.mutate(g() + 1) : o("/login/signin");
              },
              get fill() {
                return g() < e() || g() < a() ? "#2cd97d" : "#b3bec1";
              },
              class: "size-5",
            }),
        })
      ),
      n(D, () => {
        var d, g;
        return u("__count__ Ratings", {
          count: (g = (d = p.data) == null ? void 0 : d.count) != null ? g : 0,
        });
      }),
      n(
        k,
        i(W, {
          get when() {
            var d;
            return (d = p.data) == null ? void 0 : d.users.length;
          },
          get children() {
            var d = Fe();
            return (
              n(
                d,
                i(T, {
                  get each() {
                    var g;
                    return (g = p.data) == null ? void 0 : g.users.slice(0, 5);
                  },
                  children: (g, b) => {
                    return (
                      (L = je()),
                      B(
                        (R) => {
                          var M = l1(
                              "w-7 h-7 rounded-full box-border border border-primary",
                              b() > 0 && "-ml-2"
                            ),
                            Z = X1.avatar(g, "s");
                          return (
                            M !== R.e && I1(L, (R.e = M)),
                            Z !== R.t && L1(L, "src", (R.t = Z)),
                            R
                          );
                        },
                        { e: void 0, t: void 0 }
                      ),
                      L
                    );
                    var L;
                  },
                })
              ),
              d
            );
          },
        }),
        null
      ),
      h),
      i(me, {
        get gameUnique() {
          return s.gameUnique;
        },
      }),
    ]
  );
  var h, x, l, f, _, v, E, S, w, V, I, k, D;
}
function Be() {
  const e = O(),
    t = (function () {
      const r = O(),
        s = j(() => ({
          queryKey: ["/api/home/rec/entry/", "game_related", r.gameUnique],
          queryFn: he,
        }));
      return () => s.data;
    })(),
    a = R1("GameRecommend");
  return i(a, {
    get title() {
      return u("Recommended Games");
    },
    get link() {
      return `/gamelist/game-related?gameUnique=${e.gameUnique}`;
    },
    get data() {
      return t();
    },
    class: "-mt-2 mb-4",
    replace: !0,
  });
}
const F1 = w1(null);
function Ge(e) {
  const t = J1({ tabs: [] });
  return i(F1.Provider, {
    value: t,
    get children() {
      return e.children;
    },
  });
}
function M1() {
  return k1(F1);
}
var Ye = C(
  '<div class="mb-1.5 h-8 flex items-center"><div class="flex items-center text-base font-extrabold text-primary">'
);
function Xe(e) {
  return (
    (t = Ye()),
    (a = t.firstChild),
    n(a, () => e.title),
    n(
      t,
      i(W, {
        get when() {
          return e.href;
        },
        get children() {
          return i(o1, {
            get href() {
              return e.href;
            },
            class: "ml-auto flex h-8 items-center rounded-lg bg-layer6 px-2",
            get children() {
              return [
                U(() => u("All")),
                i(Q1, {
                  class: "ml-1 h-4 w-4 rotate-180 text-secondary",
                  name: "Arrow",
                }),
              ];
            },
          });
        },
      }),
      null
    ),
    t
  );
  var t, a;
}
function Je() {
  const e = M1(),
    t = R1("GameTabs"),
    [a, r] = z(0),
    s = s1(() => e[0].tabs);
  return (
    n1(() => {
      s() && r(0);
    }),
    [
      i(Xe, {
        get title() {
          return u("Latest bet & Race");
        },
      }),
      i(A, {
        get value() {
          return a();
        },
        onChange: r,
        class: "light-layer2-tabs h-12 sm:max-w-100 ml-auto sm:-mt-10",
        get children() {
          return [
            i(T, {
              get each() {
                return s();
              },
              children: (o) =>
                i(A.TabItem, {
                  get title() {
                    return o.title;
                  },
                  get children() {
                    return o.content();
                  },
                }),
            }),
            i(t, {}),
          ];
        },
      }),
    ]
  );
}
function pt(e) {
  return (0, M1()[1])("tabs", e.tabs), null;
}
var Qe = C('<div class="py-3 sm:py-0">'),
  et = C("<span>"),
  tt = C(
    '<div class="h-80 sm:h-[38rem] center bg-layer4 light-game-view rounded-xl">'
  );
const r1 = [
    "baccarat",
    "classic-dice",
    "coinflip",
    "ring-of-fortune",
    "crash",
    "fastparity",
    "hash-dice",
    "hilo",
    "keno-multiplayer",
    "keno",
    "limbo",
    "mines",
    "parity",
    "plinko",
    "roulette",
    "RouletteSingle",
    "tower-legend",
    "twist",
    "ultimate-dice",
    "video-poker",
    "wheel",
    "double",
    "cave",
    "baccarat-multiplayer",
    "blackjack",
    "oriental-beauties",
    "roulette-multiplayer",
    "sword",
  ],
  ft = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: function () {
          const e = O(),
            t = A1();
          return i(Ge, {
            get children() {
              return i(W, {
                get when() {
                  return e.gameUnique;
                },
                keyed: !0,
                children: (a) => {
                  const [r] = ee(() =>
                    P(this, null, function* () {
                      let s;
                      return (
                        yield (function () {
                          const o = j(() => ({
                            queryKey: ["/home/game2/game/channel/info"],
                            queryFn: Ce,
                          }));
                          return () => o.data;
                        })(),
                        (s = r1.includes(a) ? yield v1[a]() : yield v1.slots()),
                        s.default
                      );
                    })
                  );
                  return i(te, {
                    get title() {
                      return U(() => !!r1.includes(e.gameUnique))()
                        ? i(re, {})
                        : ((s = et()), n(s, () => t().fullName), s);
                      var s;
                    },
                    get children() {
                      return i(W, {
                        get when() {
                          return r();
                        },
                        get children() {
                          return i(ge, {
                            get game() {
                              var s;
                              return (s = r()) == null ? void 0 : s.game;
                            },
                            get children() {
                              return [
                                ((s = Qe()),
                                n(
                                  s,
                                  i(S1, {
                                    get fallback() {
                                      return (o = tt()), n(o, i(V1, {})), o;
                                      var o;
                                    },
                                    get children() {
                                      return i(ae, {
                                        get component() {
                                          var o;
                                          return (o = r()) == null
                                            ? void 0
                                            : o.Main;
                                        },
                                      });
                                    },
                                  })
                                ),
                                s),
                                i(Ne, {}),
                                i(Be, {}),
                                i(Je, {}),
                              ];
                              var s;
                            },
                          });
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
        originals_games: r1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  ve as B,
  pt as G,
  ft as L,
  Re as P,
  a1 as S,
  xe as a,
  v1 as g,
  r1 as o,
  A1 as u,
};
