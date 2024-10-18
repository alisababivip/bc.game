import { e as g } from "./manifest-987d6c36.js";
function d(e) {
  return e ? (e > 9 ? e : "0" + e) : "00";
}
function u(e, t = "") {
  return (t = t && t + "."), `${window.location.protocol}//${t}${g.host}${e}`;
}
function f(e) {
  return u(`#/gift_ticket/${e}`);
}
function p(e) {
  const t = new Date(e),
    n = t.getFullYear(),
    r = String(t.getMonth() + 1).padStart(2, "0"),
    o = String(t.getDate()).padStart(2, "0"),
    c = String(t.getHours()).padStart(2, "0"),
    a = String(t.getMinutes()).padStart(2, "0"),
    i = String(t.getSeconds()).padStart(2, "0"),
    s = t.getHours() >= 12 ? "PM" : "AM";
  return `${r}/${o}/${n}, ${c}:${a}:${i} ${s}`;
}
function m(e, t) {
  const n = e || "USD";
  return t ? `/coin/${n}.rect.png` : `/coin/${n}.black.png`;
}
function l(e, t) {
  return Object.fromEntries(
    Object.entries(e).filter(([n, r]) => (t ? !!r && !t.includes(n) : !!r))
  );
}
export { m as a, u as b, d as c, f as d, l as r, p as t };
