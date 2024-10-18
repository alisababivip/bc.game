import {
  c as l,
  i as e,
  t as d,
  a as B,
  g as U,
  e as f,
  k as q,
  n as F,
  h as E,
} from "./solid-js-8ff414d5.js";
import {
  q as R,
  l as T,
  m as z,
  B as G,
  t as $,
  p as H,
  d as J,
  e as K,
} from "./manifest-987d6c36.js";
import { p as t } from "./store-de20ba30.js";
import { B as O, e as Q, i as C } from "./lottery-40ce25b9.js";
import { D as V, B as W, L as S } from "./DrawsSelect-10573c9c.js";
import { b as X } from "./router-290e090e.js";
import { c as Y } from "./apis-5c7b35c7.js";
import { t as m } from "./i18n-9df4b53a.js";
import { a as Z } from "./index-4d3ecff0.js";
import { L as tt } from "./Lottery.interface-46896b0b.js";
import "./store-2ed2b91e.js";
import "./_Uint8Array-7783c8b7.js";
import "./_MapCache-9c96b8d5.js";
import "./isObject-909534d5.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
var et = d('<label class="text-base font-semibold text-primary">'),
  at = d('<div class="w-96 bg-layer4 rounded-xl h-fit mt-4">'),
  lt = d(
    '<section class="sm:px-4 pb-4"><div class="mb-3 flex flex-col gap-2"><div class="text-secondary text-sm font-semibold"></div></div><div class="mb-3 flex flex-col gap-2"><div class="text-secondary text-sm font-semibold">'
  ),
  st = d(
    '<section><div class="flex justify-between"><span class="text-secondary text-sm font-semibold"></span><span class="text-primary text-sm font-semibold"> USD</span></div><div class="mt-4 flex justify-between"><span class="text-secondary text-sm font-semibold"></span><div class="text-primary text-sm font-semibold"><div class="flex justify-end"> <img class="w-4 h-4 ml-2"loading=lazy></div><span class=text-secondary>≈ '
  ),
  L = d('<h2 class="pb-3 text-primary text-lg font-extrabold">'),
  rt = d(
    '<div class="px-4 pt-4"><section class="flex gap-1.5 justify-center flex-wrap">'
  );
function yt() {
  return l(R, {
    class: "px-0",
    get title() {
      return (() => {
        var a = et();
        return e(a, () => m("Add Bet Details")), a;
      })();
    },
    get children() {
      return [l(w, {}), l(k, {})];
    },
  });
}
function It() {
  return (() => {
    var a = at();
    return (
      e(a, l(nt, {}), null),
      e(
        a,
        l(B, {
          get when() {
            var s;
            return (s = t.state) == null ? void 0 : s.BetItem.selectedData.name;
          },
          get children() {
            return l(w, {});
          },
        }),
        null
      ),
      e(a, l(k, {}), null),
      a
    );
  })();
}
function w() {
  return (() => {
    var a = lt(),
      s = a.firstChild,
      r = s.firstChild,
      c = s.nextSibling,
      u = c.firstChild;
    return (
      e(r, () => m("Draws")),
      e(s, l(V, {}), null),
      e(u, () => m("Bet Amount")),
      e(c, l(W, {}), null),
      a
    );
  })();
}
function k() {
  const a = X(),
    [s] = U(a.id, Y),
    r = f(() => {
      const {
          betAmount: n,
          draws: i,
          betsNumber: b,
        } = t.state.BetItem.selectedDetailData,
        p = i >= 10 ? 0.9 : i >= 4 ? 0.95 : 1;
      return t.state.BetItem.selectedData.name
        ? (1e3 * n * i * b * p) / 1e3
        : 0;
    }),
    c = f(() => t.state.BetItem.marketId === O.AdditionalDrum),
    u = f(() => Q(t.state.BetItem.selectedData.name)),
    A = f(() => {
      var n, i;
      return (i = (n = s()) == null ? void 0 : n.lotteryInfo) == null
        ? void 0
        : i.bonusBall;
    }),
    P = f(() => {
      var n, i;
      return (
        ((n = s()) == null ? void 0 : n.period.status) !== tt.Active ||
        !((i = t.state) != null && i.BetItem.selectedData.id)
      );
    });
  return (() => {
    var n = st(),
      i = n.firstChild,
      b = i.firstChild,
      p = b.nextSibling,
      h = p.firstChild,
      N = i.nextSibling,
      _ = N.firstChild,
      M = _.nextSibling,
      g = M.firstChild,
      v = g.firstChild,
      j = v.nextSibling,
      y = g.nextSibling;
    return (
      y.firstChild,
      e(b, () => m("Potential Return")),
      e(
        p,
        () =>
          t.state.BetItem.selectedDetailData.betAmount *
          t.state.BetItem.selectedData.odds,
        h
      ),
      e(_, () => m("Total Bet Amount")),
      e(g, r, v),
      e(y, () => T.printCurrency(new z(r())), null),
      e(
        n,
        l(G, {
          type: "brand",
          class: "w-full mt-4 text-primary_brand font-extrabold text-lg",
          get disabled() {
            return P();
          },
          onClick: () => {
            var I;
            const o = t.state.BetItem.selectedDetailData.normalBallList.length,
              x = t.state.BetItem.selectedDetailData.bonusBallList.length;
            if (
              (C(t.state.BetItem.marketId) &&
                o === 0 &&
                (t.quickPick(u(), "normalBallList"),
                x === 0 && c() && t.quickPick(A(), "bonusBallList")),
              C(t.state.BetItem.marketId) && o !== 0 && o < u())
            ) {
              $(m("Please select at least __number__ balls.", { number: u() }));
              return;
            }
            t.addBetList((I = s()) == null ? void 0 : I.period) &&
              $(m("BetSlip Updated")),
              H.pop();
          },
          get children() {
            return m("Add Bet");
          },
        }),
        null
      ),
      q(
        (o) => {
          var x = J(
              "p-4 relative left-0 bg-layer4 border-t border-solid border-input",
              K.mobile
                ? "mt-6 -mx-4 -bottom-4 w-[calc(100%+2rem)]"
                : "w-full bottom-0 rounded-b-xl"
            ),
            D = Z("USD", !0);
          return (
            x !== o.e && F(n, (o.e = x)), D !== o.t && E(j, "src", (o.t = D)), o
          );
        },
        { e: void 0, t: void 0 }
      ),
      n
    );
  })();
}
function nt() {
  return (() => {
    var a = rt(),
      s = a.firstChild;
    return (
      e(
        a,
        l(B, {
          get when() {
            var r;
            return (r = t.state) == null ? void 0 : r.BetItem.selectedData.name;
          },
          get fallback() {
            return (() => {
              var r = L();
              return e(r, () => m("Choose your lucky numbers")), r;
            })();
          },
          get children() {
            var r = L();
            return (
              e(r, () => {
                var c;
                return (c = t.state) == null
                  ? void 0
                  : c.BetItem.selectedData.name;
              }),
              r
            );
          },
        }),
        s
      ),
      e(
        s,
        l(B, {
          get when() {
            return t.state.BetItem.selectedDetailData.normalBallList;
          },
          get children() {
            return l(S, {
              get numbs() {
                return t.state.BetItem.selectedDetailData.normalBallList;
              },
              inSelect: !1,
              selectMode: "normal",
            });
          },
        }),
        null
      ),
      e(
        s,
        l(B, {
          get when() {
            return t.state.BetItem.selectedDetailData.bonusBallList;
          },
          get children() {
            return l(S, {
              get numbs() {
                return t.state.BetItem.selectedDetailData.bonusBallList;
              },
              inSelect: !1,
              selectMode: "bonus",
            });
          },
        }),
        null
      ),
      a
    );
  })();
}
export { It as SelectCartContentPc, yt as default };
