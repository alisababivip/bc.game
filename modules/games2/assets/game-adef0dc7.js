import { D as n } from "./manifest-a234c8a0.js";
function m(e) {
  const {
      winIncrease: o,
      loseIncrease: u,
      playTimes: s,
      winStopAt: r,
      loseStopAt: t,
      betAmount: a,
    } = e,
    i = o.checked ? "" : `ow:${o.value};`,
    l = u.checked ? "" : `ol:${u.value};`;
  return `a:${new n(a).toFixed(9)};n:${s};${i}${l}sw:${r};sl:${t};`;
}
function d(e, o, u) {
  var r;
  if (typeof e.odds != "number") return { payout: 0, profit: 0, result: 0 };
  const s = e.odds;
  return {
    payout: Number(new n(s).toFixed(2, n.ROUND_DOWN)),
    profit: new n((e == null ? void 0 : e.winAmount) || 0)
      .sub((e == null ? void 0 : e.betAmount) || 0)
      .toNumber(),
    result:
      typeof e.result == "number"
        ? e.result
        : (r = e.gv) == null
        ? void 0
        : r.result,
  };
}
const p = (e, o) => Number(new n(100 * o).div(e).toFixed(2)),
  b = (e, o) => Math.floor(1e4 * new n(100 * o).div(e).toNumber()) / 1e4;
export { p as a, d as b, m as c, b as g };
