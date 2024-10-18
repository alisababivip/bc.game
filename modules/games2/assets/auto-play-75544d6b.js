var yt = Object.defineProperty,
  ft = Object.defineProperties;
var gt = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty,
  _ = Object.prototype.propertyIsEnumerable;
var Y = (n, t, e) =>
    t in n
      ? yt(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[t] = e),
  V = (n, t) => {
    for (var e in t || (t = {})) Z.call(t, e) && Y(n, e, t[e]);
    if (j) for (var e of j(t)) _.call(t, e) && Y(n, e, t[e]);
    return n;
  },
  D = (n, t) => ft(n, gt(t));
var $ = (n, t) => {
  var e = {};
  for (var r in n) Z.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && j)
    for (var r of j(n)) t.indexOf(r) < 0 && _.call(n, r) && (e[r] = n[r]);
  return e;
};
var h = (n, t, e) =>
  new Promise((r, a) => {
    var s = (u) => {
        try {
          w(e.next(u));
        } catch (H) {
          a(H);
        }
      },
      i = (u) => {
        try {
          w(e.throw(u));
        } catch (H) {
          a(H);
        }
      },
      w = (u) => (u.done ? r(u.value) : Promise.resolve(u.value).then(s, i));
    w((e = e.apply(n, t)).next());
  });
import {
  ab as N,
  aa as x,
  D as o,
  f as tt,
  o as bt,
  h as C,
} from "./manifest-a234c8a0.js";
import { s as wt, M as Ht, a as kt } from "./game-a49e1f5b.js";
import "./amount-af49bfc0.js";
import { b as At, c as vt } from "./game-adef0dc7.js";
import { u as Pt } from "./currency-a0e3a368.js";
import { V as z } from "./config-6b289bdb.js";
import { S as Vt } from "./Sound-0956eba6.js";
import { a as Nt } from "./Layout-b58c3f24.js";
const It = {
    win: "/modules/games2/assets/win-88e8723b.mp3",
    lose: "/modules/games2/assets/lose-2790a366.mp3",
    close: "/modules/games2/assets/close-9aee530f.mp3",
    fc: "/modules/games2/assets/fc-8ac34ba8.mp3",
    poker: "/modules/games2/assets/poker-1bea2869.mp3",
  },
  b = N.Reader,
  U = N.Writer,
  B = N.util,
  l = N.roots.gameCrash || (N.roots.gameCrash = {});
(l.BetValue = (() => {
  function n(t) {
    if (t)
      for (let e = Object.keys(t), r = 0; r < e.length; ++r)
        t[e[r]] != null && (this[e[r]] = t[e[r]]);
  }
  return (
    (n.prototype.suggest = 0),
    (n.encode = function (t, e) {
      return (
        e || (e = U.create()),
        t.suggest != null &&
          Object.hasOwnProperty.call(t, "suggest") &&
          e.uint32(8).sint32(t.suggest),
        e
      );
    }),
    (n.decode = function (t, e) {
      t instanceof b || (t = b.create(t));
      let r = e === void 0 ? t.len : t.pos + e,
        a = new l.BetValue();
      for (; t.pos < r; ) {
        let s = t.uint32();
        s >>> 3 == 1 ? (a.suggest = t.sint32()) : t.skipType(7 & s);
      }
      return a;
    }),
    n
  );
})()),
  (l.DealValue = (() => {
    function n(t) {
      if (((this.hold = []), t))
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.hold = B.emptyArray),
      (n.prototype.frontgroundId = 0),
      (n.encode = function (t, e) {
        if ((e || (e = U.create()), t.hold != null && t.hold.length)) {
          e.uint32(10).fork();
          for (let r = 0; r < t.hold.length; ++r) e.sint32(t.hold[r]);
          e.ldelim();
        }
        return (
          t.frontgroundId != null &&
            Object.hasOwnProperty.call(t, "frontgroundId") &&
            e.uint32(120).sint32(t.frontgroundId),
          e
        );
      }),
      (n.decode = function (t, e) {
        t instanceof b || (t = b.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          a = new l.DealValue();
        for (; t.pos < r; ) {
          let s = t.uint32();
          switch (s >>> 3) {
            case 1:
              if (((a.hold && a.hold.length) || (a.hold = []), (7 & s) == 2)) {
                let i = t.uint32() + t.pos;
                for (; t.pos < i; ) a.hold.push(t.sint32());
              } else a.hold.push(t.sint32());
              break;
            case 15:
              a.frontgroundId = t.sint32();
              break;
            default:
              t.skipType(7 & s);
          }
        }
        return a;
      }),
      n
    );
  })()),
  (l.GameValue = (() => {
    function n(t) {
      if (
        ((this.initialHard = []),
        (this.playerHard = []),
        (this.holdHard = []),
        t)
      )
        for (let e = Object.keys(t), r = 0; r < e.length; ++r)
          t[e[r]] != null && (this[e[r]] = t[e[r]]);
    }
    return (
      (n.prototype.active = 0),
      (n.prototype.result = 0),
      (n.prototype.initialHard = B.emptyArray),
      (n.prototype.playerHard = B.emptyArray),
      (n.prototype.holdHard = B.emptyArray),
      (n.encode = function (t, e) {
        if (
          (e || (e = U.create()),
          t.active != null &&
            Object.hasOwnProperty.call(t, "active") &&
            e.uint32(8).sint32(t.active),
          t.result != null &&
            Object.hasOwnProperty.call(t, "result") &&
            e.uint32(16).sint32(t.result),
          t.initialHard != null && t.initialHard.length)
        ) {
          e.uint32(26).fork();
          for (let r = 0; r < t.initialHard.length; ++r)
            e.sint32(t.initialHard[r]);
          e.ldelim();
        }
        if (t.playerHard != null && t.playerHard.length) {
          e.uint32(34).fork();
          for (let r = 0; r < t.playerHard.length; ++r)
            e.sint32(t.playerHard[r]);
          e.ldelim();
        }
        if (t.holdHard != null && t.holdHard.length) {
          e.uint32(42).fork();
          for (let r = 0; r < t.holdHard.length; ++r) e.sint32(t.holdHard[r]);
          e.ldelim();
        }
        return e;
      }),
      (n.decode = function (t, e) {
        t instanceof b || (t = b.create(t));
        let r = e === void 0 ? t.len : t.pos + e,
          a = new l.GameValue();
        for (; t.pos < r; ) {
          let s = t.uint32();
          switch (s >>> 3) {
            case 1:
              a.active = t.sint32();
              break;
            case 2:
              a.result = t.sint32();
              break;
            case 3:
              if (
                ((a.initialHard && a.initialHard.length) ||
                  (a.initialHard = []),
                (7 & s) == 2)
              ) {
                let i = t.uint32() + t.pos;
                for (; t.pos < i; ) a.initialHard.push(t.sint32());
              } else a.initialHard.push(t.sint32());
              break;
            case 4:
              if (
                ((a.playerHard && a.playerHard.length) || (a.playerHard = []),
                (7 & s) == 2)
              ) {
                let i = t.uint32() + t.pos;
                for (; t.pos < i; ) a.playerHard.push(t.sint32());
              } else a.playerHard.push(t.sint32());
              break;
            case 5:
              if (
                ((a.holdHard && a.holdHard.length) || (a.holdHard = []),
                (7 & s) == 2)
              ) {
                let i = t.uint32() + t.pos;
                for (; t.pos < i; ) a.holdHard.push(t.sint32());
              } else a.holdHard.push(t.sint32());
              break;
            default:
              t.skipType(7 & s);
          }
        }
        return a;
      }),
      n
    );
  })());
const Ot = [0, 1, 2, 3, 4, 6, 8, 22, 60, 800];
class et extends Ht {
  constructor() {
    var e;
    const t = (e = Nt) == null ? void 0 : e.find((r) => r.gamePath === z.key);
    super(z, t),
      (this.config = z),
      (this.gameValueDecoder = x().decode(l.GameValue)),
      (this.betValueDecoder = x().decode(l.BetValue));
  }
  play(t) {
    return h(this, null, function* () {
      const { currency: e, params: r } = t,
        a = new o(e.amount),
        s = this.betValue(r);
      return yield this.bet(
        D(V({}, t), { currency: D(V({}, e), { amount: a }), value: s })
      );
    });
  }
  guess(t, e) {
    return h(this, null, function* () {
      const r = x().encode(l.DealValue),
        a = yield this.request("deal", r({ frontgroundId: t, hold: e }));
      return this.betResultDecoder(a);
    });
  }
  join() {
    return h(this, null, function* () {
      return yield this.request("join").then(this.betResultDecoder);
    });
  }
  cashout(t, ...e) {
    return h(this, null, function* () {});
  }
  isWin(t) {
    return Number(new o(t.winAmount).div(t.betAmount).toFixed(2)) > 0;
  }
  getResult(t) {
    return At(t, this.oddsScale);
  }
  bvMapper(t) {
    return t;
  }
  calcMaxProfit(t, ...e) {
    const {
      currency: { amount: r },
    } = t;
    return new o(r.toString()).mul(Math.max(...Ot) - 1);
  }
  betValue({ suggest: t }) {
    return x().encode(l.BetValue)({ suggest: t });
  }
}
et.alias = "VideoPoker";
const rt = wt(et),
  Ft = new Vt(It, rt);
function Gt({
  play: n,
  onPlayEnd: t,
  updateBetAmount: e,
  onStop: r,
  onError: a,
  beforeNextPlay: s,
  calcProfit: i,
}) {
  const [w, u] = tt(null),
    [H, I] = tt(!1),
    { game: O } = kt();
  let p = !1;
  const {
      activeToken: at,
      findToken: E,
      setActiveToken: J,
      setIsfrozen: M,
    } = Pt(),
    k = (A) =>
      h(this, null, function* () {
        if (
          ((p = !1),
          yield r == null ? void 0 : r(),
          M(!1),
          I(!1),
          A !== void 0 && e(A),
          at().symbol !== C.setting.currencyName)
        ) {
          const v = E(C.setting.currencyName);
          v && J(v);
        }
      });
  return (
    bt(() => {
      k();
    }),
    {
      isAutoPlaying: H,
      setIsAutoPlaying: I,
      autoPlayParams: w,
      setAutoPlayParams: u,
      startAutoPlay: (A, v, ...nt) => {
        if (!v) return;
        const {
            playTimes: K,
            winIncrease: R,
            loseIncrease: q,
            winStopAt: F,
            loseStopAt: G,
            updatePlayTimes: st,
          } = v,
          { currency: lt } = A,
          Q = lt,
          { amount: c } = Q,
          ot = $(Q, ["amount"]);
        let S,
          y = new o(c),
          P = new o(0),
          T = K || 1 / 0;
        const it = vt({
          playTimes: K,
          winIncrease: R,
          loseIncrease: q,
          winStopAt: F,
          loseStopAt: G,
          betAmount: c.toString(),
        });
        I(!0), M(!0), (p = !p);
        const L = (d) =>
          h(this, null, function* () {
            if (!p || T <= 0) return void k(new o(c).toNumber());
            if (
              (S === void 0 && (S = yield O.getScriptId(it).catch((W) => {})),
              !S)
            )
              return k(new o(c).toNumber()), void (a == null ? void 0 : a());
            if (d.currency.symbol !== C.setting.currencyName) {
              const W = E(d.currency.symbol);
              W && J(W);
            }
            const m = yield n(D(V({}, d), { scriptId: S }), ...nt);
            let f = Array.isArray(m) ? m[0] : m;
            const ut = Array.isArray(m) ? m[1] : null;
            if ((O === rt && Array.isArray(m) && (f = m[1]), (T -= 1), !f))
              return k(new o(c).toNumber()), void (a == null ? void 0 : a());
            const ct = new o(f.odds / O.oddsScale),
              dt = O.isWin(f);
            P = P.add(i ? i(d, ut, f) : y.mul(ct.sub(1)));
            const pt = T === 0,
              mt = !!Number(F) && P.gte(F),
              ht = !!Number(G) && P.lt(0) && P.abs().gte(G);
            (pt || mt || ht || !p) && k(new o(c).toNumber());
            const X =
              d.currency.symbol === "USDT" &&
              new o(d.currency.amount).greaterThanOrEqualTo(1)
                ? 2
                : d.currency.decimal;
            (y = dt
              ? R.checked
                ? new o(
                    y.mul(1 + new o(R.value).div(100).toNumber()).toFixed(X)
                  )
                : new o(c)
              : q.checked
              ? new o(y.mul(1 + new o(q.value).div(100).toNumber()).toFixed(X))
              : new o(c)),
              yield t(f),
              st(T),
              e(y.toNumber());
            const g = yield s == null ? void 0 : s();
            L({
              currency: V(
                { amount: (g == null ? void 0 : g.amount) || y.toNumber() },
                ot
              ),
              params: (g == null ? void 0 : g.params) || d.params,
            });
          });
        L(A).finally(() => {
          I(p), M(p);
        });
      },
    }
  );
}
export { Ot as P, rt as g, Gt as u, Ft as v };
