var b = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty,
  I = Object.prototype.propertyIsEnumerable;
var T = (o, i) => {
  var c = {};
  for (var n in o) S.call(o, n) && i.indexOf(n) < 0 && (c[n] = o[n]);
  if (o != null && b)
    for (var n of b(o)) i.indexOf(n) < 0 && I.call(o, n) && (c[n] = o[n]);
  return c;
};
var u = (o, i, c) =>
  new Promise((n, a) => {
    var d = (r) => {
        try {
          s(c.next(r));
        } catch (l) {
          a(l);
        }
      },
      A = (r) => {
        try {
          s(c.throw(r));
        } catch (l) {
          a(l);
        }
      },
      s = (r) => (r.done ? n(r.value) : Promise.resolve(r.value).then(d, A));
    s((c = c.apply(o, i)).next());
  });
import { v as w, g as k, t as h } from "./manifest-987d6c36.js";
import { c as C, p as m } from "./store-2ed2b91e.js";
const E = {
  inited: !1,
  periodId: 0,
  status: 0,
  userId: 0,
  numbers: null,
  jackpotBallNumber: null,
  boughtTickets: 0,
  bonusTickets: 0,
  winTickets: 0,
  isDestory: !1,
  myTicketsLenth: 0,
  totalTicket: 0,
  totalWinningTicket: 0,
  totalWinningAmount: 0,
  block: { periodId: 0, blockNum: 0, distBlockNum: 0, blockHash: "" },
  header: {
    currentJackpot: 0,
    currentSoldTickets: 0,
    drawnTime: 0,
    expireTimeInMs: 0,
    giftLinkCurrency: "",
    giftLinkMinAmount: "0",
    giftLinkMaxAmount: "0",
    buyerInfo: [],
  },
  canBuyTicket: !0,
  drawAwrad: !1,
  drawEnd: !1,
  buyDrawEnd: !1,
  test: 1,
};
function W() {
  const o = w(),
    i = w("/user"),
    c = () =>
      u(this, null, function* () {
        const g = yield k().get("/lottery/five-plus-one/current-info/"),
          {
            periodId: t,
            status: e,
            myTickets: D,
            currentBlockHash: B,
            distBlockNum: p,
            currentBlockNum: f,
          } = g,
          N = T(g, [
            "periodId",
            "status",
            "myTickets",
            "currentBlockHash",
            "distBlockNum",
            "currentBlockNum",
          ]);
        r({
          periodId: t,
          header: Object.assign({}, s.header, N),
          myTicketsLenth: D ? D.total : 0,
          block: { periodId: t, blockHash: B, blockNum: f, distBlockNum: p },
          status: e,
          inited: !0,
          canBuyTicket: e === 0,
          drawAwrad: e >= 32,
          drawEnd: e === 40,
          buyDrawEnd: s.userId ? e === 40 : !1,
        });
      }),
    n = () =>
      u(this, null, function* () {
        s.myTicketsLenth > 0 && d(), a();
      }),
    a = () =>
      u(this, null, function* () {
        try {
          const t = yield k().get(
            `/lottery/five-plus-one/period-info/?periodId=${s.periodId}`
          );
          r(
            m((e) => {
              (e.userId = t.userId),
                (e.status = t.status),
                (e.jackpotBallNumber = t.jackpotBallNumber
                  ? t.jackpotBallNumber
                  : 0),
                (e.boughtTickets = t.boughtTickets),
                (e.bonusTickets = t.bonusTickets),
                (e.winTickets = t.winTickets),
                (e.numbers = t.numbers ? t.numbers : null);
            })
          ),
            s.status >= 40 && c();
        } catch (t) {
          h(t);
        }
      }),
    d = () =>
      u(this, null, function* () {
        try {
          const t = yield k().get("/lottery/statistics/");
          r(
            m((e) => {
              (e.totalTicket = t.totalTicket || 0),
                (e.totalWinningAmount = t.totalWinningAmount || 0),
                (e.totalWinningTicket = t.totalWinningTicket || 0);
            })
          );
        } catch (t) {
          console.log(t);
        }
      }),
    A = (t) => {
      r(
        m((e) => {
          e.block = typeof t == "string" ? JSON.parse(t) : t;
        })
      );
    };
  c(),
    i.on("lottery-begin", o.decodeBind(c)),
    i.on("lottery-end-buy", o.decodeBind(a)),
    i.on("lottery-reward-sending", o.decodeBind(a)),
    i.on("lottery-block-num", o.decodeBind(A)),
    i.on("lottery-rewarded", o.decodeBind(n));
  const [s, r] = C(E);
  return { store: s, setStore: r };
}
let y;
function V() {
  return y || (y = W()), y;
}
const L =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD/mCD/mCD/mCD/lyD/lyD/mCD/nyD/lyD/mSD/mSD/lyD/mSD/mSD/mCD/mSD/liD/lyD/mCACl84yAAAAEnRSTlMA35+/IGDvEEDPr4BQf49wMG+Aocr9AAABm0lEQVRo3u3X3a6CMBAE4G5pgfKnzvs/7DHGBCOcXem0d/2uDePiFFbXNE3TNBcNyyRAmqKrYxG8SZWIFR/WKtevmhDxZXRlCb5IpRu0m11BQXDQD64cjxNbwQFwKtQZYNcVr2itqgr+kSoNsLuVrWilqm5QzHUquutDuYpWquoIw1i0omkJIYoyAlnR7lWaIeFTdIRBzh4+Y7mqrud3Q5SqMhX17q0rVVWvBew8MYAWwFc1/RrQcRW1A7BwZ8wOkIGoqBJAVTWIEcCeNo8rAdi4itoBuLtrJjOAq2qEHUCdNrkeINwAdgBuVEWPAUxVPYwAcocJMAO4ddubAdwOsyA3ACO3TPfurYc2Ar9Mr8onyGU6uqcHqHV7hUa8F1DrdgCnD2ZFSZNT3aHb4sNT67ZAI/fXl+ih6a5W9Lid3KCK+QPsB00j2QNMxqPCXsOmHwMSVF5fRu1jGoDMewTDtg+qyg6AD8+WdsgOEJhEYEr6j8yb9HcZL6r/WnlivY75ARQzaLNTzfz1DVFAkNHZFp8kS9pG1zRN01TxBz1FvhSwqQnoAAAAAElFTkSuQmCC";
export { V as u, L as w };
