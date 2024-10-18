var f = Object.defineProperty,
  Y = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable;
var c = (e, t, r) =>
    t in e
      ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  a = (e, t) => {
    for (var r in t || (t = {})) h.call(t, r) && c(e, r, t[r]);
    if (i) for (var r of i(t)) p.call(t, r) && c(e, r, t[r]);
    return e;
  },
  g = (e, t) => Y(e, M(t));
import { e as T, D as s } from "./manifest-cc1f4445.js";
const b = () => T.serverTime.getTime();
function v(e) {
  const t = new Date(e),
    r = (o) => (o < 10 ? `0${o}` : o),
    n = r(t.getDate()),
    u = r(t.getMonth() + 1),
    l = t.getFullYear(),
    m = r(t.getHours()),
    D = r(t.getMinutes());
  return `${u}/${n}/${l} ${m}:${D}`;
}
function w(e) {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function $(e) {
  return Array.from(g(a({}, e), { length: Object.keys(e).length }));
}
function d(e, t) {
  const r = Number(e || "0");
  return r >= 1e10
    ? new s(e).div(1e9).toFixed(t, s.ROUND_DOWN) + "B"
    : r >= 1e7
    ? new s(e).div(1e6).toFixed(t, s.ROUND_DOWN) + "M"
    : r >= 1e3
    ? new s(e).div(1e3).toFixed(t, s.ROUND_DOWN) + "K"
    : r;
}
function H(e) {
  if (e) {
    if (e.scrollHeight > e.clientHeight) {
      e.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    H(e.parentElement);
  }
}
function F(e, t = "YYYY-MM-DD") {
  if (e.getTime() === new Date(0).getTime()) return "";
  const r = {
    MM: ("0" + (e.getMonth() + 1)).slice(-2),
    DD: ("0" + e.getDate()).slice(-2),
    YYYY: e.getFullYear().toString(),
    HH: ("0" + e.getHours()).slice(-2),
    mm: ("0" + e.getMinutes()).slice(-2),
    ss: ("0" + e.getSeconds()).slice(-2),
  };
  return t.replace(/MM|DD|YYYY|HH|mm|ss/g, (n) => r[n]);
}
export { $ as a, F as b, H as c, d, v as f, b as g, w as s };
