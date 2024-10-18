import {
  g as i,
  b0 as z,
  a as A,
  a7 as M,
  b1 as P,
  $ as b,
  b2 as m,
  aa as S,
} from "./index-Cp-3lvCI.js";
var u = ((e) => (
  (e.DAILY = "daily"), (e.WEEKLY = "weekly"), (e.MONTHLY = "monthly"), e
))(u || {});
const E = () => i().get("/activity/contest/infos/"),
  F = (e) => i().get(`/activity/contest/${e}/list/`),
  W = (e) =>
    i()
      .get(`/activity/contest/${e}/rank/`)
      .then((t) => ({ wager: parseFloat(t.wager), rank: Number(t.rank) })),
  Y = (e) => i().get(`/activity/contest/${e}/last/`),
  s = { api_info: E, api_list: F, api_rank: W, api_prev: Y },
  o = new Date(0),
  H = z(() => {
    const [e, t] = A(u.DAILY),
      [l, c] = M({
        contestType: u.DAILY,
        supportType: [],
        startTime: o,
        endTime: o,
        baseBonus: 0,
        userBonusRate: [],
        wagerCurrency: "BCD",
        totalBonusWagerRate: 0,
        participateCurrency: [],
        prizePoolChangeRate: 0,
        totalWager: 0,
        prizeAmount: 0,
        activeList: [],
        prevStartTime: o,
        prevEndTime: o,
        prevList: [],
        rank: 0,
        wager: 0,
      }),
      d = P(),
      [, { refetch: g }] = b(e, async (a) => {
        let [n, R, r] = await Promise.all([
          s.api_info(),
          s.api_list(a),
          s.api_prev(a),
        ]);
        const B = n.find((p) => p.contestType == a),
          {
            startTime: D,
            endTime: I,
            baseBonus: f,
            userBonusRate: L,
            wagerCurrency: h,
            totalBonusWagerRate: y,
            totalWager: v,
            participateCurrency: _,
            prizePoolChangeRate: C,
          } = B,
          $ = f + y * v;
        c({
          startTime: new Date(D),
          endTime: new Date(I),
          baseBonus: f,
          userBonusRate: L,
          wagerCurrency: h,
          totalBonusWagerRate: y,
          totalWager: v,
          contestType: a,
          participateCurrency: _,
          prizeAmount: $,
          prizePoolChangeRate: C,
          prevStartTime: new Date(r ? r.startTime : 0),
          prevEndTime: new Date(r ? r.endTime : 0),
          supportType: n.map((p) => p.contestType),
          activeList: R.map(w),
          prevList: r ? r.players.map(w) : [],
        }),
          k(a);
      });
    b(e, async (a) => {});
    async function k(a) {
      if ((await S(), d())) {
        const n = await s.api_rank(a);
        c(n);
      }
    }
    const T = 2;
    return (
      m(
        () => {
          c("prizeAmount", (a) => a + l.prizePoolChangeRate * T);
        },
        T * 1e3,
        setInterval
      ),
      m(g, 2 * 6e4, setInterval),
      { contest: l, setType: t, refetch: g }
    );
  }),
  w = (e) => (
    (e.totalBonus = parseFloat(e.totalBonus)),
    (e.basicBonus = parseFloat(e.basicBonus)),
    (e.bonusRate = parseFloat(e.bonusRate)),
    (e.wager = parseFloat(e.wager)),
    e
  );
function N(e) {
  let t;
  switch (e) {
    case 1:
      t = "st";
      break;
    case 2:
      t = "nd";
      break;
    case 3:
      t = "rd";
      break;
    default:
      t = "th";
      break;
  }
  return `${e}${t}`;
}
function O(e) {
  return `${Math.round(e * 1e6) / 1e4}%`;
}
const K = (e) => (e < 10 && e >= 0 ? `0${e}` : e.toString());
export { u as C, O as a, N as b, H as c, K as n };
