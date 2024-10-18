var X = Object.defineProperty,
  Y = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty,
  tt = Object.prototype.propertyIsEnumerable;
var E = (n, a, e) =>
    a in n
      ? X(n, a, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[a] = e),
  b = (n, a) => {
    for (var e in a || (a = {})) _.call(a, e) && E(n, e, a[e]);
    if (D) for (var e of D(a)) tt.call(a, e) && E(n, e, a[e]);
    return n;
  },
  L = (n, a) => Y(n, Z(a));
var S = (n, a, e) =>
  new Promise((d, p) => {
    var x = (s) => {
        try {
          u(e.next(s));
        } catch (g) {
          p(g);
        }
      },
      T = (s) => {
        try {
          u(e.throw(s));
        } catch (g) {
          p(g);
        }
      },
      u = (s) => (s.done ? d(s.value) : Promise.resolve(s.value).then(x, T));
    u((e = e.apply(n, a)).next());
  });
import { a as et, P as i, i as at } from "./game-a49e1f5b.js";
import { u as ot } from "./currency-a0e3a368.js";
import { u as nt } from "./user-dc7ef1f4.js";
import {
  f as v,
  H as ut,
  D as k,
  o as rt,
  x as C,
} from "./manifest-a234c8a0.js";
import { b as st, a as lt, u as it } from "./deduction-99b6c8dd.js";
import { u as ct, a as mt } from "./Sound-0956eba6.js";
import { u as gt } from "./turbo-b4b057de.js";
function Tt(n, a, e) {
  const {
      activeToken: d,
      findToken: p,
      setActiveToken: x,
      resetToken: T,
    } = ot(),
    { game: u, updateGameStatus: s } = et(),
    g = st(),
    [q, c] = v(i.pending),
    { minBetAmount: R } = lt(),
    [f, w] = v(R()),
    { createDeduction: V, resolveDeduction: N } = it(),
    { isTurboEnable: j, turbo: G, toggleEnableTurbo: H } = gt(u),
    [J, P] = v(null),
    { mute: z, toggleMute: F, playSound: h } = ct(n),
    { bgMute: K, toggleBgMute: O, playBackgroundMusic: Q } = mt(n),
    [A, y] = v(null),
    { user: M } = nt();
  let B = null;
  const U = ut(() =>
    b({ amount: new k(f()).todp(d().decimal).toNumber() }, d())
  );
  return (
    rt(() => {
      T();
    }),
    {
      betResult: A,
      setBetResult: y,
      play: (t, m) =>
        S(this, null, function* () {
          try {
            yield g(t, m);
          } catch (o) {
            return o.message && C.error(o.message), null;
          }
          try {
            a == null || a(t), c(i.playing);
            const o = V(t);
            B = o;
            const r = yield u.play(L(b({}, t), { txId: o })),
              I = r && u.toISingleLog(r, M, { txId: o, bv: t.params });
            return (
              h("bet"),
              yield Promise.resolve(e == null ? void 0 : e(r, t)),
              s(at.normal),
              y(I),
              I
            );
          } catch (o) {
            return C.error(o.message), c(i.pending), s(o), N(B || 0, !1), null;
          }
        }),
      playState: q,
      setPlayState: c,
      betAmount: f,
      setBetAmount: w,
      mute: z,
      toggleMute: F,
      playSound: h,
      toggleEnableTurbo: H,
      turbo: G,
      isTurboEnable: j,
      requestJoin: () =>
        S(this, null, function* () {
          try {
            const t = yield u.join(),
              m = u.betValueDecoder(t.betValue);
            let o = i.pending;
            if (
              (t.odds > 0 && (o = i.playing),
              y(u.toISingleLog(t, M, { txId: 0, bv: m })),
              c(o),
              t)
            ) {
              const r = p(t.currencyName);
              r && x(r), w(new k(t.betAmount).toNumber());
            }
            return t;
          } catch (t) {}
          return null;
        }),
      requestCashout: (t, m) =>
        S(this, null, function* () {
          c(i.cashouting);
          try {
            const o = A(),
              r = (t == null ? void 0 : t.txId) || o.txId || 0,
              I = (t == null ? void 0 : t.bv) || (o == null ? void 0 : o.bv),
              l = m ? yield m(r) : yield u.cashout(r),
              $ = Number(l.winAmount),
              W = u.toISingleLog(b(b({}, A()), l), M, { txId: r, bv: I });
            return (
              $ > 0 &&
                (h("cashout"),
                P({
                  odds: l.odds / u.oddsScale,
                  currency: {
                    symbol: l.currencyName,
                    amount: new k(l.winAmount.toString()).sub(
                      (l == null ? void 0 : l.betAmount) || f()
                    ),
                  },
                })),
              y(null),
              c(i.end),
              N(r),
              W
            );
          } catch (o) {
            return c(i.playing), null;
          }
        }),
      latestProfit: J,
      setLatestProfit: P,
      betCurrency: U,
      getClientTxId: () => B || 0,
      playBackgroundMusic: Q,
      bgMute: K,
      toggleBgMute: O,
    }
  );
}
export { Tt as u };
