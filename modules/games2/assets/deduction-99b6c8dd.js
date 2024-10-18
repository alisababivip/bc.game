var y = (n, e, o) =>
  new Promise((s, u) => {
    var N = (t) => {
        try {
          r(o.next(t));
        } catch (i) {
          u(i);
        }
      },
      a = (t) => {
        try {
          r(o.throw(t));
        } catch (i) {
          u(i);
        }
      },
      r = (t) => (t.done ? s(t.value) : Promise.resolve(t.value).then(N, a));
    r((o = o.apply(n, e)).next());
  });
import {
  G as k,
  o as R,
  H as P,
  f as d,
  J as j,
  D as f,
  u as D,
  c as h,
  Y as F,
  i as w,
  h as S,
  B as L,
  M as b,
  t as _,
  aC as I,
} from "./manifest-a234c8a0.js";
import { d as W, v as $, m as V } from "./amount-af49bfc0.js";
import { u as x, a as Y } from "./currency-a0e3a368.js";
import { a as T, S as q, m as B } from "./game-a49e1f5b.js";
import { t as A } from "./i18n-611811a6.js";
var C = ((n) => (
  (n.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE"),
  (n.TOKEN_TYPE_INCONSISTENT = "TOKEN_TYPE_INCONSISTENT"),
  (n.PARAMS_INVALID = "PARAMS_INVALID"),
  n
))(C || {});
function K() {
  const { game: n } = T(),
    { store: e } = x(),
    { system: o } = Y(),
    [s, u] = k([]);
  let N;
  if (n instanceof q) {
    const a = (r, t) => (typeof r == "number" ? r : $(o, r, t).toNumber());
    N = n.betInfo$
      .pipe(
        B((r) =>
          r == null
            ? void 0
            : r.map(
                ({
                  currencyName: t,
                  maxBetAmount: i,
                  minBetAmount: m,
                  maxProfitAmount: c,
                }) => ({
                  currencyName: t != null ? t : "",
                  maxBetAmount: i && t ? a(Number(i), t) : 0,
                  minBetAmount: m && t ? a(Number(m), t) : 0,
                  maxProfitAmount: c && t ? a(Number(c), t) : 0,
                  jackpotAmount: 0,
                })
              )
        )
      )
      .subscribe((r) => {
        u(r);
      });
  } else
    N = n.jackpot$
      .pipe(
        B((a) =>
          a.map(
            ({
              currencyName: r,
              maxBetAmount: t,
              minBetAmount: i,
              maxProfitAmount: m,
              jackpotAmount: c,
            }) => ({
              currencyName: r != null ? r : "",
              maxBetAmount: t ? Number(t) : 0,
              minBetAmount: i ? Number(i) : 0,
              maxProfitAmount: m ? Number(m) : 0,
              jackpotAmount: c ? Number(c) : 0,
            })
          )
        )
      )
      .subscribe((a) => {
        u(a);
      });
  return (
    R(() => {
      N.unsubscribe();
    }),
    {
      jackpot: P(() => {
        var a;
        return (a = s.find((r) =>
          W(r.currencyName, e.activeCurrency.currencyName)
        )) != null
          ? a
          : null;
      }),
    }
  );
}
const g = 0,
  v = 1e8;
function G() {
  const [n, e] = d(g),
    [o, s] = d(v),
    [u, N] = d(0),
    { activeToken: a, store: r } = x(),
    { jackpot: t } = K();
  return (
    j(() => {
      const { decimal: i } = a();
      let m = [new f(g).div(new f(10).toPower(i)).mul(10).toNumber(), v, v];
      if (t()) {
        const c = t();
        if (c) {
          const { minBetAmount: p, maxBetAmount: l, maxProfitAmount: O } = c,
            U = new f(p)
              .todp(r.activeCurrencyConfig.precisionUnit, f.ROUND_UP)
              .toNumber(),
            M = new f(l).toNumber();
          m = [Math.max(Number(U), g), M, O];
        }
      }
      e(m[0]), s(m[1]), N(m[2]);
    }),
    { minBetAmount: n, maxBetAmount: o, maxProfit: u }
  );
}
var H = _('<p class="text-secondary py-4"> <span class=text-brand></span> '),
  J = _('<div class="flex gap-3 mt-4">');
function E() {
  const n = D();
  return h(F, {
    get title() {
      return A("Insufficient balance");
    },
    get children() {
      return [
        ((o = H()),
        (s = o.firstChild),
        (u = s.nextSibling),
        u.nextSibling,
        w(o, () => A("Insufficient"), s),
        w(u, () => S.setting.currencyName),
        w(
          o,
          () =>
            A("Balance. Please switch to another asset to continue playing."),
          null
        ),
        o),
        ((e = J()),
        w(
          e,
          h(L, {
            type: "brand",
            class: "flex-1",
            onClick: () => {
              n("/wallet/deposit"), b.pop();
            },
            get children() {
              return A("Deposit");
            },
          })
        ),
        e),
      ];
      var e, o, s, u;
    },
  });
}
const X = V(
  (n, e) => (o) => {
    var N;
    const s = new f(
        (N = o == null ? void 0 : o.currency) == null
          ? void 0
          : N.amount.toString()
      ).todp(e, f.ROUND_DOWN),
      u = n.amount.sub(n.bonusAmount).todp(e, f.ROUND_DOWN);
    return s.gt(u) || u.eq(0)
      ? { valid: !1, reason: C.INSUFFICIENT_BALANCE }
      : { valid: !0 };
  },
  (n) => `${n.currencyName}:${n.amount.toString()}`
);
function rt() {
  const { game: n } = T(),
    { store: e } = x(),
    o = D(),
    { maxBetAmount: s, maxProfit: u, minBetAmount: N } = G(),
    a = P(() =>
      Math.max(
        Math.min(
          s(),
          e.activeCurrency.amount.toNumber() -
            e.activeCurrency.bonusAmount.toNumber()
        ),
        N()
      )
    ),
    r = (t) =>
      y(this, null, function* () {
        try {
          (function (i, ...m) {
            m.forEach((c) => {
              const { valid: p, reason: l = C.PARAMS_INVALID } = c(i);
              if (!p) throw new Error(l);
            });
          })(t, X(e.activeCurrency, e.activeCurrencyConfig.precisionUnit));
        } catch (i) {
          throw (b.push(() => h(E, {}), { close: !0 }), new Error(void 0));
        }
        return !0;
      });
  return (t, ...i) =>
    y(this, null, function* () {
      const { store: m } = x();
      S.login
        ? (yield (() =>
            y(this, null, function* () {
              if (
                e.activeCurrency.amount
                  .sub(e.activeCurrency.bonusAmount)
                  .lt(N())
              )
                throw (
                  (b.push(() => h(E, {}), { close: !0 }), new Error(void 0))
                );
              return !0;
            }))(),
          yield ((c, p) =>
            y(this, null, function* () {
              if (
                c.todp(p, f.ROUND_DOWN).eq(new f(a()).todp(p, f.ROUND_DOWN)) &&
                a() !== 0 &&
                !(yield b.confirm(() =>
                  A("Are you sure you want to place a MAX bet?")
                ))
              )
                throw new Error("Bet terminated!");
              return !0;
            }))(new f(t.currency.amount), m.activeCurrencyConfig.precisionUnit),
          yield ((c, ...p) =>
            y(this, null, function* () {
              const l = n.calcMaxProfit(c, ...p).toNumber();
              if (
                l > u() &&
                l !== 1 / 0 &&
                !(yield b.confirm(() =>
                  A(
                    "The bet amount may exceed the potential maximum profit. Please confirm you're aware that you may not get the full amount when you win a higher payout."
                  )
                ))
              )
                throw new Error(
                  "The profit of this bet maybe great than the max profit"
                );
              return !0;
            }))(t, ...i),
          yield r(t))
        : o("/login/signin");
    });
}
function ot() {
  return {
    createDeduction: (n) => {
      const { symbol: e, amount: o } = n.currency;
      return I.create(
        new f(o.toString()),
        e,
        "nomal",
        n == null ? void 0 : n.timeout
      );
    },
    resolveDeduction: (n, e) => I.resolve(n, e),
  };
}
export { E as I, G as a, rt as b, K as c, ot as u };
