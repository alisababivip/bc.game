var wt = Object.defineProperty,
  kt = Object.defineProperties;
var At = Object.getOwnPropertyDescriptors;
var Ve = Object.getOwnPropertySymbols;
var Pt = Object.prototype.hasOwnProperty,
  Ct = Object.prototype.propertyIsEnumerable;
var Se = (t, e, s) =>
    e in t
      ? wt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  z = (t, e) => {
    for (var s in e || (e = {})) Pt.call(e, s) && Se(t, s, e[s]);
    if (Ve) for (var s of Ve(e)) Ct.call(e, s) && Se(t, s, e[s]);
    return t;
  },
  H = (t, e) => kt(t, At(e));
var j = (t, e, s) =>
  new Promise((n, a) => {
    var d = (c) => {
        try {
          l(s.next(c));
        } catch (o) {
          a(o);
        }
      },
      p = (c) => {
        try {
          l(s.throw(c));
        } catch (o) {
          a(o);
        }
      },
      l = (c) => (c.done ? n(c.value) : Promise.resolve(c.value).then(d, p));
    l((s = s.apply(t, e)).next());
  });
import {
  c as r,
  $ as It,
  l as qe,
  a1 as Mt,
  a0 as Vt,
  i as y,
  m as P,
  v as St,
  a as _,
  w as D,
  t as I,
  A as W,
  F as pe,
  ab as Q,
  aa as U,
  D as V,
  H as L,
  K as Be,
  h as re,
  S as ae,
  N as Bt,
  X as Rt,
  f as q,
  n as jt,
  o as Dt,
  B as Tt,
  x as Nt,
  b as Ot,
} from "./manifest-a234c8a0.js";
import { t as h } from "./i18n-611811a6.js";
import { N as Re, a as je, L as De } from "./number-field-a2716165.js";
import {
  S as Te,
  g as Ne,
  c as Oe,
  d as Fe,
  e as Ge,
  h as ze,
} from "./slider-b2a7fa20.js";
import { M as Ft, T as Ye } from "./MoreLessBtn-6b8ac376.js";
import { A as Gt } from "./AutoBetControls-ee3134e4.js";
import { B as zt } from "./Banner-bbcc8d49.js";
import { B as _e } from "./BetAmount-add6a26b.js";
import {
  G as Yt,
  k as We,
  a as _t,
  b as Wt,
  c as Et,
  d as Jt,
  e as Ht,
} from "./GameBankrollHelp-6ee96441.js";
import { S as Kt, a as Lt } from "./SingleBetButton-c4aa4223.js";
import {
  b as N,
  P as f,
  s as Ut,
  M as qt,
  u as Qt,
  a as Zt,
  z as Xt,
  A as $t,
} from "./game-a49e1f5b.js";
import { u as es } from "./deduction-99b6c8dd.js";
import { u as Qe } from "./currency-a0e3a368.js";
import { n as Ee } from "./amount-af49bfc0.js";
import { u as ts } from "./auto-play-75544d6b.js";
import { u as ss } from "./multi-stage-game-37de2ac1.js";
import { T as ns, a as rs, b as as } from "./tooltip-f54a9090.js";
import { S as is } from "./SingleLogs-33bda8b8.js";
import { c as Ze } from "./index-eff0ad24.js";
import { a as ls } from "./animate.es-01baad02.js";
import { s as os } from "./steps-2c539e6f.js";
import { M as me } from "./config-6b289bdb.js";
import { S as us } from "./Sound-0956eba6.js";
import { b as ds } from "./game-adef0dc7.js";
import { a as cs, u as ms } from "./Layout-b58c3f24.js";
import { u as Xe } from "./use-coin-format-bfa33df5.js";
import { S as gs } from "./Symbol-f22f521e.js";
import { S as ps } from "./Autopick-b88a0150.js";
import { G as fs } from "./GameFairnessFile-649b25ea.js";
import { l as se } from "./last-0ddf2762.js";
import { g as Je } from "./groupBy-38a792e4.js";
import "./utils-65805dbc.js";
import "./QJIB6BDF-1dee7631.js";
import "./index-4897b9da.js";
import "./FN6EICGO-b0e5a495.js";
import "./LR7LBJN3-fced4fb5.js";
import "./NNGMRY2O-be25bda0.js";
import "./index-15f8a785.js";
import "./E53DB7BS-1e802908.js";
import "./resolve-elements.es-b931549e.js";
import "./router-b8d56046.js";
import "./Close-4ee839c4.js";
import "./debounce-9aa0a06b.js";
import "./isObject-d5c4896e.js";
import "./isSymbol-0edd6b24.js";
import "./SeedSetting-b2f3d34e.js";
import "./table-cbcb9a00.js";
import "./throttle-267ea383.js";
import "./user-dc7ef1f4.js";
import "./turbo-b4b057de.js";
import "./clamp-f5b668c4.js";
import "./LayoutTitle-870a6463.js";
import "./index-f5a6b566.js";
function hs() {
  return r(is, {});
}
const bs = "/modules/games2/assets/bg-mines-dark-b7d1571a.png",
  ys = "/modules/games2/assets/bg-mines-light-0fb35691.png",
  $e = "/modules/games2/assets/box-bg1-dark-baa28890.png",
  et = "/modules/games2/assets/box-bg2-dark-e53f83c0.png",
  tt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAe1BMVEUAAACAgJVtcIV0dItvc4hvcodvcYd2eY5wc4hzeIxydoh3fZB3e45ze4xucoZ0eY10eYxxdYl4fZBucoV1eo9tcYVxdolucIVoan52eY5vdIh1eox7gJJ2fI98gJRzd4xtcYR2e49vdIhman5qbYF5fpJjZ3xiZHhdYHQ+sJA1AAAAH3RSTlMADK0WPqNzUUcz0LaBH/Pijnnz5Mi+X9rWmmfYbinnqUqMjwAAAl5JREFUWMPV1YmSoyAQBuD2vjXmPgcExuz7P+ESKQIEF01NJZv5xipxbMIfSFXDiKpsuv+hKcqkgickRYcQ6lDHL3EX1LMaj9egn8xfrhfHzINpQdmgT3CK2jQAh9RHn6P7/ioWyWV0Q9sGEYIIGhA+HobqmV/iblPvtPrB8/NFzLvl+nAOPdCEPiIGWd+RCYj8zMi6tq+izMSGxjusI0Z5R/B7qHXtpOcLcGFUm+WP9R2yPtO1nuPZ9T8kFrYsi3MGQmaWjzLDMsz4hRXrnT12zyf/WHdZtBkoWzZQ5d/23xCWPQMRPHcCVjnl+iJmGYJpIWM6ibB0wChj1BrrsJwhp6g6e4w727pMwbbRuobRbU6HbRWUS63DIEbnYEifQzCeKDfX79aL1INRS2Tr8kUSwMBrG6TBdBJBNoId3xIpfF0Z01ahR+uHcu9shGW0d2FIY8ftbTLq6cC3xyVBmrooRzd/ezJ3th9c+yu/hjs3jOWWOvPyOm3+ELU5bAOYUsrGVxdt6PhGud74ML2OwvealdlkzcZJMI97x6JtBXP4hFv5cQYTkjXRjIWlRKpjgOx4yB1NV2zvzR5malbR8QKzhJtbn9HC/tH16k0kD5PnjVReTLT58kPo/KgVPCHzCdZQLSnFUh6CwcviKHe04hxeo1rUY2F7LPGzH+OFcbR7T1TFi1dYET8DhiU/AJs77wZeaJtjDaNY2smzd+f1dy+PqoQ+s9Xx/KNJY3/FhA282CWqmcmv4DlB2t7y+vByQbtiyj4FB1feBN7huKcCa+HjpRvK8bP/DbKIn/07/AUcEV2OaKRsAgAAAABJRU5ErkJggg==",
  st = "/modules/games2/assets/box-bg2-light-febcd25a.png",
  He = "/modules/games2/assets/gems-873c019a.png",
  Ke = "/modules/games2/assets/mines-1-8deb9f60.png",
  vs = "/modules/games2/assets/mines-effect-861ba5d2.png";
var g = ((t) => (
  (t[(t.initial = 0)] = "initial"),
  (t[(t.mines = 1)] = "mines"),
  (t[(t.gems = 2)] = "gems"),
  (t[(t.unselectedMines = 3)] = "unselectedMines"),
  (t[(t.unselectedGems = 4)] = "unselectedGems"),
  (t[(t.select = 5)] = "select"),
  t
))(g || {});
const Y = 25,
  K = new Array(Y).fill("").map((t, e) => ({ value: e + 1, state: g.initial }));
var xs = I("<div>"),
  ws = I(
    '<div class="pb-[100%] relative"><img class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full p-[100%] scale-125">'
  ),
  ks = I(
    '<img class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">'
  ),
  Le = I(
    '<div class="pb-[100%] relative opacity-50"><img class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">'
  ),
  As = I("<div class=pb-[100%]>");
function nt(t) {
  const [, e] = It(t, ["class", "onClick", "state", "value"]);
  let s;
  return (
    qe(() => {
      t.state === g.mines &&
        ls(
          s,
          { backgroundPosition: ["0%", "100%"] },
          { easing: os(5), duration: 0.3 }
        );
    }),
    (c = xs()),
    Mt(
      c,
      Vt(e, {
        get class() {
          return Ze(
            "relative p-1 transition-all ease-linear text-center rounded-lg hover:opacity-80",
            { "bg-layer6": t.state === g.initial || t.state === g.mines },
            { "bg-[#812bf2]": t.state === g.gems || t.state === g.select },
            {
              "bg-layer5":
                t.state === g.unselectedMines || t.state === g.unselectedGems,
            },
            t.class
          );
        },
        onClick: (o) => {
          o.stopPropagation(), t.onClick(t.value);
        },
      }),
      !1,
      !0
    ),
    y(
      c,
      ((n = P(() => t.state === g.mines)),
      () => {
        return (
          n() &&
          ((o = ws()),
          (b = o.firstChild),
          (u = b.nextSibling),
          typeof s == "function" ? St(s, u) : (s = u),
          _(
            (x) => {
              var B = Ke,
                C = `url(${vs}) no-repeat left center/1600% auto`;
              return (
                B !== x.e && D(b, "src", (x.e = B)),
                C !== x.t &&
                  ((x.t = C) != null
                    ? u.style.setProperty("background", C)
                    : u.style.removeProperty("background")),
                x
              );
            },
            { e: void 0, t: void 0 }
          ),
          o)
        );
        var o, b, u;
      }),
      null
    ),
    y(
      c,
      ((a = P(() => !(t.state !== g.gems && t.state !== g.select))),
      () =>
        a() &&
        r(Ft.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.1 },
          class: "pb-[100%] relative",
          get children() {
            return (
              P(() => t.state === g.gems)() &&
              ((o = ks()), _(() => D(o, "src", He)), o)
            );
            var o;
          },
        })),
      null
    ),
    y(
      c,
      ((d = P(() => t.state === g.unselectedMines)),
      () => {
        return (
          d() && ((o = Le()), (b = o.firstChild), _(() => D(b, "src", Ke)), o)
        );
        var o, b;
      }),
      null
    ),
    y(
      c,
      ((p = P(() => t.state === g.unselectedGems)),
      () => {
        return (
          p() && ((o = Le()), (b = o.firstChild), _(() => D(b, "src", He)), o)
        );
        var o, b;
      }),
      null
    ),
    y(c, ((l = P(() => t.state === g.initial)), () => l() && As()), null),
    c
  );
  var n, a, d, p, l, c;
}
var Ps = I(
    '<img class="absolute top-0 left-0 lg:h-[37.5rem] w-full hidden lg:block rounded-tr-xl">'
  ),
  Cs = I(
    '<section id=mines-border class="grid grid-cols-5 gap-1 bg-[#A9B2B4] dark:bg-layer3 relative flex-1 p-2 md:p-4 -mt-2 rounded-xl lg:max-w-[30rem] "><img class="absolute -top-0.5 left-2 h-3.5 hidden sm:block"><img class="absolute -top-8 right-2 h-14 z-100 hidden lg:block">'
  );
const Is = (t) => {
    return [
      ((a = Ps()), _(() => D(a, "src", W.theme === "dark" ? bs : ys)), a),
      ((e = Cs()),
      (s = e.firstChild),
      (n = s.nextSibling),
      y(
        e,
        r(pe, {
          each: K,
          children: (d, p) =>
            r(nt, {
              get value() {
                return d.value;
              },
              get state() {
                return t.grids[p()].state;
              },
              onClick: () => {
                if (!t.disabled)
                  if (t.mode === N.manual) {
                    if (t.playState !== f.playing) return void t.shake();
                    t.grids[p()].state === g.initial && t.guess(d);
                  } else
                    K.length - t.minesCount >
                      t.grids.filter((l) => l.state === g.select).length &&
                      t.setGrids(
                        t.grids.map((l, c) =>
                          c === p()
                            ? H(z({}, l), {
                                state:
                                  l.state === g.initial ? g.select : g.initial,
                              })
                            : z({}, l)
                        )
                      );
              },
            }),
        }),
        null
      ),
      _(
        (d) => {
          var p = W.theme === "dark" ? $e : tt,
            l = W.theme === "dark" ? et : st;
          return (
            p !== d.e && D(s, "src", (d.e = p)),
            l !== d.t && D(n, "src", (d.t = l)),
            d
          );
        },
        { e: void 0, t: void 0 }
      ),
      e),
    ];
    var e, s, n, a;
  },
  Ms = {
    bet: "/modules/games2/assets/bet-5c7f51b9.mp3",
    mines: "/modules/games2/assets/sound_mines-6f72d248.mp3",
    gems: "/modules/games2/assets/sound_gems-e61ff752.mp3",
    hover: "/modules/games2/assets/sound_hover-71f20685.mp3",
    cashout: "/modules/games2/assets/win-57edf57c.mp3",
    background: {
      src: "/modules/games2/assets/sound_bg-fdb4e89e.mp3",
      isBackground: !0,
      loop: !0,
      volume: 0.5,
    },
  },
  T = Q.Reader,
  ne = Q.Writer,
  ge = Q.util,
  M = Q.roots.gameMines || (Q.roots.gameMines = {});
(M.BetValue = (() => {
  function t(e) {
    if (e)
      for (let s = Object.keys(e), n = 0; n < s.length; ++n)
        e[s[n]] != null && (this[s[n]] = e[s[n]]);
  }
  return (
    (t.prototype.mines = 0),
    (t.encode = function (e, s) {
      return (
        s || (s = ne.create()),
        e.mines != null &&
          Object.hasOwnProperty.call(e, "mines") &&
          s.uint32(8).sint32(e.mines),
        s
      );
    }),
    (t.decode = function (e, s) {
      e instanceof T || (e = T.create(e));
      let n = s === void 0 ? e.len : e.pos + s,
        a = new M.BetValue();
      for (; e.pos < n; ) {
        let d = e.uint32();
        d >>> 3 == 1 ? (a.mines = e.sint32()) : e.skipType(7 & d);
      }
      return a;
    }),
    t
  );
})()),
  (M.GameValue = (() => {
    function t(e) {
      if (((this.fields = []), (this.cards = []), e))
        for (let s = Object.keys(e), n = 0; n < s.length; ++n)
          e[s[n]] != null && (this[s[n]] = e[s[n]]);
    }
    return (
      (t.prototype.odds = 0),
      (t.prototype.fields = ge.emptyArray),
      (t.prototype.cards = ge.emptyArray),
      (t.prototype.distributeId = ""),
      (t.encode = function (e, s) {
        if (
          (s || (s = ne.create()),
          e.odds != null &&
            Object.hasOwnProperty.call(e, "odds") &&
            s.uint32(9).double(e.odds),
          e.fields != null && e.fields.length)
        ) {
          s.uint32(18).fork();
          for (let n = 0; n < e.fields.length; ++n) s.sint32(e.fields[n]);
          s.ldelim();
        }
        if (e.cards != null && e.cards.length) {
          s.uint32(26).fork();
          for (let n = 0; n < e.cards.length; ++n) s.sint32(e.cards[n]);
          s.ldelim();
        }
        return (
          e.distributeId != null &&
            Object.hasOwnProperty.call(e, "distributeId") &&
            s.uint32(34).string(e.distributeId),
          s
        );
      }),
      (t.decode = function (e, s) {
        e instanceof T || (e = T.create(e));
        let n = s === void 0 ? e.len : e.pos + s,
          a = new M.GameValue();
        for (; e.pos < n; ) {
          let d = e.uint32();
          switch (d >>> 3) {
            case 1:
              a.odds = e.double();
              break;
            case 2:
              if (
                ((a.fields && a.fields.length) || (a.fields = []), (7 & d) == 2)
              ) {
                let p = e.uint32() + e.pos;
                for (; e.pos < p; ) a.fields.push(e.sint32());
              } else a.fields.push(e.sint32());
              break;
            case 3:
              if (
                ((a.cards && a.cards.length) || (a.cards = []), (7 & d) == 2)
              ) {
                let p = e.uint32() + e.pos;
                for (; e.pos < p; ) a.cards.push(e.sint32());
              } else a.cards.push(e.sint32());
              break;
            case 4:
              a.distributeId = e.string();
              break;
            default:
              e.skipType(7 & d);
          }
        }
        return a;
      }),
      t
    );
  })()),
  (M.Next = (() => {
    function t(e) {
      if (((this.fields = []), e))
        for (let s = Object.keys(e), n = 0; n < s.length; ++n)
          e[s[n]] != null && (this[s[n]] = e[s[n]]);
    }
    return (
      (t.prototype.fields = ge.emptyArray),
      (t.encode = function (e, s) {
        if ((s || (s = ne.create()), e.fields != null && e.fields.length)) {
          s.uint32(10).fork();
          for (let n = 0; n < e.fields.length; ++n) s.sint32(e.fields[n]);
          s.ldelim();
        }
        return s;
      }),
      (t.decode = function (e, s) {
        e instanceof T || (e = T.create(e));
        let n = s === void 0 ? e.len : e.pos + s,
          a = new M.Next();
        for (; e.pos < n; ) {
          let d = e.uint32();
          if (d >>> 3 == 1)
            if (
              ((a.fields && a.fields.length) || (a.fields = []), (7 & d) == 2)
            ) {
              let p = e.uint32() + e.pos;
              for (; e.pos < p; ) a.fields.push(e.sint32());
            } else a.fields.push(e.sint32());
          else e.skipType(7 & d);
        }
        return a;
      }),
      t
    );
  })()),
  (M.CashoutValue = (() => {
    function t(e) {
      if (e)
        for (let s = Object.keys(e), n = 0; n < s.length; ++n)
          e[s[n]] != null && (this[s[n]] = e[s[n]]);
    }
    return (
      (t.prototype.frontgroundId = 0),
      (t.encode = function (e, s) {
        return (
          s || (s = ne.create()),
          e.frontgroundId != null &&
            Object.hasOwnProperty.call(e, "frontgroundId") &&
            s.uint32(120).sint32(e.frontgroundId),
          s
        );
      }),
      (t.decode = function (e, s) {
        e instanceof T || (e = T.create(e));
        let n = s === void 0 ? e.len : e.pos + s,
          a = new M.CashoutValue();
        for (; e.pos < n; ) {
          let d = e.uint32();
          d >>> 3 == 15 ? (a.frontgroundId = e.sint32()) : e.skipType(7 & d);
        }
        return a;
      }),
      t
    );
  })());
let rt = class extends qt {
  constructor() {
    var e;
    const t = (e = cs) == null ? void 0 : e.find((s) => s.gamePath === me.key);
    super(me, t),
      (this.config = me),
      (this.gameValueDecoder = U().decode(M.GameValue)),
      (this.betValueDecoder = U().decode(M.BetValue));
  }
  play(t) {
    return j(this, null, function* () {
      const { currency: e, params: s } = t,
        n = new V(e.amount),
        a = this.betValue(s);
      return yield this.bet(
        H(z({}, t), { currency: H(z({}, e), { amount: n }), value: a })
      );
    });
  }
  guess(t) {
    return j(this, null, function* () {
      return yield this.request(
        "next",
        U().encode(M.Next)({ fields: Array.isArray(t) ? t : [t] })
      ).then((e) => this.gameValueDecoder(e));
    });
  }
  cashout(t) {
    return j(this, null, function* () {
      const e = U().encode(M.CashoutValue);
      return yield this.request("cashout", e({ frontgroundId: t })).then(
        this.betResultDecoder
      );
    });
  }
  join() {
    return j(this, null, function* () {
      return yield this.request("join").then(this.betResultDecoder);
    });
  }
  isWin(t) {
    return Number(new V(t.winAmount).div(t.betAmount).toFixed(2)) > 0;
  }
  getResult(t) {
    return ds(t, this.oddsScale);
  }
  bvMapper(t) {
    return t;
  }
  calcMaxProfit(t) {
    return new V(0);
  }
  betValue({ mines: t }) {
    return U().encode(M.BetValue)({ mines: t });
  }
};
rt.alias = "Mines";
const O = Ut(rt),
  Vs = new us(Ms, O);
var Ss = I('<div class="flex flex-col">');
function Bs(t) {
  const { isViewInFiat: e, activeToken: s, activeFiatToken: n } = Qe(),
    { coinFormat: a } = Xe(),
    d = L(() => {
      const { odds: l, fields: c } = t.round,
        o = Y - t.mines,
        b = Y - t.mines - c.length;
      return b === 0
        ? null
        : (c.length
            ? new V(Y - c.length)
                .div(b)
                .mul(l)
                .sub(l)
                .add(1)
                .toDecimalPlaces(15)
            : new V(Y).div(o).mul(O.rtp$.value).toDecimalPlaces(15)
          )
            .sub(1)
            .add(t.round.odds)
            .toNumber();
    }),
    p = L(() => {
      const l = new V(t.amount),
        c = s().symbol,
        o = t.round.odds,
        b = e() ? n().decimal : s().decimal;
      return e()
        ? Be.convertCurrency(l, c, re.setting.localeCurrencyName)
            .mul(o)
            .todp(b, V.ROUND_DOWN)
            .toString()
        : a(l.mul(o).todp(b), s().symbol);
    });
  return (
    L(() => {
      const l = new V(t.amount),
        c = s().symbol,
        o = d() || 0,
        b = e() ? n().decimal : s().decimal;
      return e()
        ? Be.convertCurrency(l, c, re.setting.localeCurrencyName)
            .mul(o)
            .todp(b, V.ROUND_DOWN)
            .toString()
        : a(l.mul(o).todp(b), s().symbol);
    }),
    r(ae, {
      get when() {
        return d();
      },
      get children() {
        var l = Ss();
        return (
          y(
            l,
            r(Re, {
              get children() {
                return [
                  r(je, {
                    class: "font-semibold mb-2 block",
                    get children() {
                      return h("Gems");
                    },
                  }),
                  r(Bt, {
                    disabled: !0,
                    get value() {
                      return Y - t.mines - t.round.fields.length;
                    },
                  }),
                ];
              },
            }),
            null
          ),
          y(
            l,
            r(Re, {
              get children() {
                return [
                  r(je, {
                    get children() {
                      return h("Total profit (__payout__x)", {
                        payout: t.round.odds.toFixed(2),
                      });
                    },
                  }),
                  r(Rt, {
                    disabled: !0,
                    get value() {
                      return p();
                    },
                  }),
                ];
              },
            }),
            null
          ),
          l
        );
      },
    })
  );
}
var Rs = I('<h2 class="font-semibold pt-4 pb-2">'),
  js = I("<div class=help-content><p>"),
  Ds = I(
    '<div class="text-secondary p-2"><h2 class="font-semibold pt-4 pb-2"></h2><div></div><h2 class="font-semibold pt-4 pb-2"></h2><div class="flex flex-col"><p></p><p></p><p></p><p></p><p></p><p>'
  ),
  Ts = I("<p>");
const Ns = () => {
  const t = ms();
  return (
    (e = Ds()),
    (s = e.firstChild),
    (n = s.nextSibling),
    (a = n.nextSibling),
    (d = a.nextSibling.firstChild),
    (p = d.nextSibling),
    (l = p.nextSibling),
    (c = l.nextSibling),
    (o = c.nextSibling),
    (b = o.nextSibling),
    y(s, () => {
      var u;
      return h("What Is __gamename__?", {
        gamename: (u = t()) == null ? void 0 : u.fullName,
      });
    }),
    y(
      n,
      r(pe, {
        get each() {
          var u;
          return (u = t()) == null
            ? void 0
            : u.details.split(`
`);
        },
        children: (u) => {
          return (x = Ts()), y(x, u), x;
          var x;
        },
      })
    ),
    y(a, () => {
      var u;
      return h("How To Play __gamename__?", {
        gamename: (u = t()) == null ? void 0 : u.fullName,
      });
    }),
    y(d, () =>
      h("1. Select the number of mines you wish to place for the round.")
    ),
    y(p, () => h("2. Press BET button to start the round.")),
    y(l, () => h("3. Each gem revealed will increase the payout multiplier.")),
    y(c, () =>
      h("4. Cash out any point to win at the last multiplier displayed.")
    ),
    y(o, () =>
      h("5. If a mine is revealed, the game is ended and your wager is lost.")
    ),
    y(b, () =>
      h(
        "6. You may set more mines to increase multipliers on each gem revealed."
      )
    ),
    y(
      e,
      r(ae, {
        get when() {
          var u;
          return (
            P(() => {
              var x;
              return !!((x = t()) != null && x.slotsInfo);
            })() && ((u = t()) == null ? void 0 : u.slotsInfo.rtpDes)
          );
        },
        get children() {
          return [
            ((B = Rs()),
            y(B, () => {
              var C;
              return h("What is the __gamename__ return rate?", {
                gamename: (C = t()) == null ? void 0 : C.fullName,
              });
            }),
            B),
            ((u = js()),
            (x = u.firstChild),
            y(x, () => {
              var C;
              return h("RTP (Return to Player) is __rtp__%.", {
                rtp: (C = t()) == null ? void 0 : C.slotsInfo.rtpDes,
              });
            }),
            u),
          ];
          var u, x, B;
        },
      }),
      null
    ),
    e
  );
  var e, s, n, a, d, p, l, c, o, b;
};
var Ue = I('<div class="space-y-2 pb-1">');
const Os = (t) => {
  let e = -1;
  for (; e < 0; ) {
    const s = parseInt(Math.floor(Math.random() * Y).toString()) + 1;
    t.includes(s) || (e = s);
  }
  return e;
};
function Fs() {
  const t = [
      { title: h("What Game Is This?"), node: () => r(Ns, {}) },
      { title: h("Fairness"), node: () => r(fs, { htmlName: "mines" }) },
      { title: h("Max Profits"), node: () => r(Yt, {}) },
    ],
    [e, s] = q([]),
    [n, a] = q(K),
    { resolveDeduction: d } = es(),
    { addLog: p } = Qt(),
    [l, c] = q(4),
    [o, b] = q(N.manual),
    [u, x] = q(!1),
    { hotKeysEnable: B } = Zt(),
    {
      setIsfrozen: C,
      resetToken: fe,
      isViewInFiat: at,
      activeFiatToken: it,
      activeToken: he,
    } = Qe(),
    { coinFormat: lt } = Xe(),
    {
      play: be,
      betAmount: R,
      setBetResult: ot,
      setBetAmount: Z,
      requestJoin: ut,
      betResult: ye,
      playSound: ie,
      requestCashout: dt,
      mute: ct,
      toggleMute: mt,
      betCurrency: ve,
      getClientTxId: gt,
      playState: A,
      setPlayState: X,
      latestProfit: pt,
      setLatestProfit: xe,
      bgMute: ft,
      toggleBgMute: we,
    } = ss(
      Vs,
      () => {
        C(!0);
      },
      () => {
        a(K), s([]);
      }
    ),
    ke = () =>
      j(this, null, function* () {
        const i = yield ut();
        if (i) {
          const m = O.gameValueDecoder(i.gameValue),
            { fields: v } = m,
            w = O.betValueDecoder(i.betValue);
          i.odds > 0 && (C(!0), c(w.mines), Z(Number(i.betAmount))),
            v.length &&
              (a((k) =>
                k.map(({ value: S, state: J }) => ({
                  value: S,
                  state: v.includes(S) ? g.gems : J,
                }))
              ),
              s([m]));
        }
      }),
    Ae = (i, m, v) => {
      const w = m.cards.slice(0, v),
        k = m.cards.slice(v),
        S = m.odds === 0,
        J = !!m.cards.length,
        { true: F = [], false: $ = [] } = Je(w, (G) => m.fields.includes(G)),
        { true: ce = [], false: vt = [] } = Je(k, (G) => m.fields.includes(G)),
        Me = [
          [g.mines, F],
          [g.gems, ce],
          [g.unselectedMines, $],
          [g.unselectedGems, vt],
        ];
      return i.map(({ value: G, state: ee }) => {
        if (S || J) ee = Me.find((te) => te[1].includes(G))[0];
        else {
          const te = Me.slice(0, 2).find((xt) => xt[1].includes(G));
          ee = te ? te[0] : ee;
        }
        return { value: G, state: ee };
      });
    },
    le = (i, m) =>
      j(this, null, function* () {
        var v;
        try {
          ie("hover"), X(f.guessing);
          const w = yield O.guess(i),
            k = w.odds === 0,
            S = !!w.cards.length,
            J = typeof i == "number";
          return (
            ie(k ? "mines" : "gems"),
            X(k || S ? f.end : f.playing),
            s((F) => [...F, w]),
            (k || S) &&
              (d(gt()),
              p(
                H(z({}, ye()), {
                  odds: k ? w.odds : w.odds * O.oddsScale,
                  distributeId: w == null ? void 0 : w.distributeId,
                  winAmount: k ? 0 : R() * w.odds,
                })
              ),
              k ||
                (ie("cashout"),
                xe({
                  odds: w.odds,
                  currency: {
                    symbol: (v = ye()) == null ? void 0 : v.currencyName,
                    amount: new V(R()).mul(w.odds),
                  },
                })),
              o() === N.manual && fe()),
            S
              ? a((F) => Ae(F, J ? w : H(z({}, w), { fields: i }), m))
              : J &&
                a((F) =>
                  F.map(({ value: $, state: ce }) => ({
                    value: $,
                    state: $ === i ? (k ? g.mines : g.gems) : ce,
                  }))
                ),
            w
          );
        } catch (w) {
          ke();
        }
      }),
    oe = () =>
      j(this, null, function* () {
        const i = yield dt();
        if (i) {
          const m = O.gameValueDecoder(i.gameValue);
          s([]), p(i), a((v) => Ae(v, m, i.bv.mines));
        }
        return o() === N.manual && fe(), i;
      }),
    Pe = () => {
      a(K), X(f.pending);
    },
    Ce = () => {
      var m, v;
      if (A() === f.guessing) return;
      const i = Os(
        (v = (m = se(e())) == null ? void 0 : m.fields) != null ? v : []
      );
      le(i, l());
    },
    {
      autoPlayParams: ht,
      setAutoPlayParams: bt,
      isAutoPlaying: E,
      startAutoPlay: yt,
    } = ts({
      play: (i, m) =>
        j(this, null, function* () {
          $t(m) && Nt.error(h("Select grid first")), xe(null);
          let v = yield be(i);
          if (!v) return v;
          const w = m.filter((S) => S.state === g.select).map((S) => S.value),
            k = yield le(w, l());
          return (
            k &&
              k.odds > 0 &&
              (k.cards.length ? (s([]), ot(null), X(f.end)) : (v = yield oe())),
            yield Ee(1500),
            [v, k]
          );
        }),
      onPlayEnd: Xt,
      updateBetAmount: Z,
      onStop: Pe,
      calcProfit: (i, m) =>
        (m.odds > 0 ? new V(i.currency.amount).mul(m.odds) : new V(0)).sub(
          i.currency.amount.toString()
        ),
    }),
    ue = L(() => {
      const i = () => Promise.resolve(null),
        m = () => be({ currency: ve(), params: { mines: l() }, scriptId: 0 }),
        v = new Map([
          [f.cashouting, [h("Cash outing..."), i]],
          [f.guessing, [h("Loading..."), i]],
          [f.pending, [h("Bet"), m]],
          [f.end, [h("Bet"), m]],
          [
            f.playing,
            [
              [
                P(() => h("Cash out")),
                P(() =>
                  P(() => !!se(e()))()
                    ? [
                        r(gs, {
                          get token() {
                            return P(() => !!at())() ? it() : he();
                          },
                        }),
                        P(() => lt(new V(se(e()).odds).mul(R()), he().symbol)),
                      ]
                    : ""
                ),
              ],
              oe,
            ],
          ],
        ]),
        [w, k] = v.get(A());
      return {
        text: w,
        disabled:
          (A() === f.playing && !e().length) || (!R() && A() !== f.playing),
        play: k,
      };
    }),
    Ie = L(() => ({
      disabled: !R() || n().every((i) => i.state === g.initial),
      play: () => {
        yt({ currency: ve(), params: { mines: l() } }, ht(), n());
      },
    })),
    de = L(() =>
      Object.entries({
        w: {
          text: h("Cash out"),
          action: () => {
            A() === f.playing && oe();
          },
        },
        p: {
          text: h("Pick a Tile"),
          action: () => {
            A() === f.playing && Ce();
          },
        },
      })
    );
  return (
    qe(() => {
      re.login && ke();
    }),
    jt(() => {
      we(!0),
        de().forEach(([i, m]) => {
          We(i, () => {
            B() && m.action();
          });
        }),
        Dt(() => {
          de().forEach(([i]) => {
            We.unbind(i);
          });
        });
    }),
    r(_t, {
      get action() {
        return r(Wt, {
          get mute() {
            return ct();
          },
          get bgMute() {
            return ft();
          },
          onMuteChange: mt,
          onBgMuteChange: we,
          get hotKeyList() {
            return de().reduce((i, [m, v]) => ((i[m] = v.text), i), {});
          },
          helpList: t,
          actions: ["bgmute", "mute", "hotKeys", "seedSetting", "liveStats"],
        });
      },
      get children() {
        return [
          r(Et, {
            onChange: (i) => {
              Pe(), b(i);
            },
            get disabled() {
              return A() === f.playing || E();
            },
            get children() {
              return [
                r(Ye, {
                  get value() {
                    return N.manual;
                  },
                  get children() {
                    return [
                      r(_e, {
                        get value() {
                          return R();
                        },
                        onChange: Z,
                        get disabled() {
                          return A() === f.playing;
                        },
                      }),
                      ((i = Ue()),
                      y(
                        i,
                        r(De, {
                          class: "flex items-center h-4.5",
                          get children() {
                            return h("Mines");
                          },
                        }),
                        null
                      ),
                      y(
                        i,
                        r(Te, {
                          minValue: 1,
                          maxValue: 24,
                          step: 1,
                          get value() {
                            return [l()];
                          },
                          get disabled() {
                            return [f.playing, f.guessing].includes(A());
                          },
                          onChange: (m) => c(m[0]),
                          class:
                            "flex flex-row space-y-2 px-4 py-4 lg:pb-6 rounded-lg bg-layer3",
                          get children() {
                            return [
                              r(Ne, { class: "mr-3.5 text-primary" }),
                              r(Oe, {
                                class: "!mt-0",
                                get children() {
                                  return [
                                    r(Fe, {}),
                                    r(Ge, { class: "h-6 -top-2" }),
                                  ];
                                },
                              }),
                              r(ze, { class: "!mt-0 ml-3", children: "24" }),
                            ];
                          },
                        }),
                        null
                      ),
                      i),
                      r(ae, {
                        get when() {
                          return (
                            P(() => o() === N.manual)() &&
                            (A() === f.playing || A() === f.guessing)
                          );
                        },
                        get children() {
                          return r(Tt, {
                            type: "second",
                            onClick: Ce,
                            class: "w-full h-12 sm:order-1",
                            get children() {
                              return [
                                r(ps, { class: "relative top-[2px]" }),
                                P(() => h("Pick a Tile Randomly")),
                              ];
                            },
                          });
                        },
                      }),
                      r(ns, {
                        get open() {
                          return u();
                        },
                        get children() {
                          return [
                            r(rs, {
                              class: "sm:order-2",
                              get children() {
                                return r(Kt, {
                                  get play() {
                                    return ue().play;
                                  },
                                  get text() {
                                    return ue().text || "";
                                  },
                                  get disabled() {
                                    return ue().disabled;
                                  },
                                  get shank() {
                                    return u();
                                  },
                                  get style() {
                                    return A() === f.playing
                                      ? {
                                          background:
                                            "linear-gradient(270deg, #FBD765 0%, #EF9E3F 100%)",
                                          "box-shadow":
                                            "0px 0px 10px 0px rgba(255, 187, 0, 0.50)",
                                        }
                                      : {};
                                  },
                                });
                              },
                            }),
                            r(as, {
                              position: "top",
                              get children() {
                                return h("Please place your bet first");
                              },
                            }),
                          ];
                        },
                      }),
                      r(ae, {
                        get when() {
                          return (
                            P(
                              () =>
                                !(
                                  o() !== N.manual ||
                                  ![
                                    f.playing,
                                    f.guessing,
                                    f.cashouting,
                                  ].includes(A()) ||
                                  !e().length
                                )
                            )() && R() !== null
                          );
                        },
                        get children() {
                          return r(Bs, {
                            get mines() {
                              return l();
                            },
                            get round() {
                              return se(e());
                            },
                            get amount() {
                              return R();
                            },
                          });
                        },
                      }),
                    ];
                    var i;
                  },
                }),
                r(Ye, {
                  get value() {
                    return N.auto;
                  },
                  get children() {
                    return [
                      r(_e, {
                        get value() {
                          return R();
                        },
                        onChange: Z,
                        get disabled() {
                          return A() === f.playing || E();
                        },
                      }),
                      ((i = Ue()),
                      y(
                        i,
                        r(De, {
                          class: "px-1",
                          get children() {
                            return h("Mines");
                          },
                        }),
                        null
                      ),
                      y(
                        i,
                        r(Te, {
                          minValue: 1,
                          maxValue: 24,
                          step: 1,
                          get value() {
                            return [l()];
                          },
                          get disabled() {
                            return [f.playing, f.guessing].includes(A()) || E();
                          },
                          onChange: (m) => {
                            c(m[0]),
                              m[0] > n().filter((v) => !v.state).length && a(K);
                          },
                          class:
                            "flex flex-row space-y-2 px-4 py-4 lg:pb-6 rounded-lg bg-layer3",
                          get children() {
                            return [
                              r(Ne, { class: "mr-3.5 text-primary" }),
                              r(Oe, {
                                class: "!mt-0",
                                get children() {
                                  return [
                                    r(Fe, {}),
                                    r(Ge, { class: "h-6 -top-2" }),
                                  ];
                                },
                              }),
                              r(ze, { class: "!mt-0 ml-3", children: "24" }),
                            ];
                          },
                        }),
                        null
                      ),
                      i),
                      r(Lt, {
                        get play() {
                          return Ie().play;
                        },
                        get disabled() {
                          return Ie().disabled;
                        },
                        get isAutoPlaying() {
                          return E();
                        },
                      }),
                      r(Gt, {
                        get isPlaying() {
                          return E();
                        },
                        onChange: bt,
                      }),
                    ];
                    var i;
                  },
                }),
              ];
            },
          }),
          r(Jt, {
            get profit() {
              return pt();
            },
            get children() {
              return [
                r(zt, {}),
                r(Ht, {
                  class: "mb-1 flex items-center justify-center",
                  get children() {
                    return r(Is, {
                      get playState() {
                        return A();
                      },
                      get grids() {
                        return n();
                      },
                      get mode() {
                        return o();
                      },
                      get disabled() {
                        return E();
                      },
                      get minesCount() {
                        return l();
                      },
                      setGrids: a,
                      guess: (i) => {
                        le(i.value, l());
                      },
                      shake: () => {
                        re.login &&
                          !u() &&
                          (x(!0),
                          Ee(1e3).finally(() => {
                            x(!1);
                          }));
                      },
                    });
                  },
                }),
              ];
            },
          }),
        ];
      },
    })
  );
}
var Gs = I(
  '<section><img class="absolute -top-0.5 left-2 h-2.5"><img class="absolute -top-3 right-2 h-6">'
);
const Yn = {
  Main: function () {
    return [r(Fs, {}), r(hs, {})];
  },
  Detail: (t) => {
    var o, b;
    const e = (o = t.betLog) == null ? void 0 : o.gv,
      s = (b = t.betLog) == null ? void 0 : b.bv,
      n = e.cards.slice(0, s.mines),
      a = e.fields,
      d = [...e.cards];
    return (
      (p = Gs()),
      (l = p.firstChild),
      (c = l.nextSibling),
      y(
        p,
        !!d &&
          r(pe, {
            get each() {
              return d.sort((u, x) => u - x);
            },
            children: (u) =>
              r(nt, {
                value: u,
                get state() {
                  return P(() => !!a.includes(u))()
                    ? n.includes(u)
                      ? g.mines
                      : g.gems
                    : g.initial;
                },
                onClick: () => {},
              }),
          }),
        null
      ),
      _(
        (u) => {
          var x = Ze(
              "grid grid-cols-5 gap-1 relative lg:max-w-96 md:max-w-[50%] flex-1 p-2 mx-auto",
              { "bg-layer3": W.darken, "bg-layer5": !W.darken }
            ),
            B = W.darken ? $e : tt,
            C = W.darken ? et : st;
          return (
            x !== u.e && Ot(p, (u.e = x)),
            B !== u.t && D(l, "src", (u.t = B)),
            C !== u.a && D(c, "src", (u.a = C)),
            u
          );
        },
        { e: void 0, t: void 0, a: void 0 }
      ),
      p
    );
    var p, l, c;
  },
  game: O,
};
export { Yn as default };
