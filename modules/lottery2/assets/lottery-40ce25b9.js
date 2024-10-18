var c = Object.defineProperty,
  d = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable;
var s = (a, t, r) =>
    t in a
      ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  n = (a, t) => {
    for (var r in t || (t = {})) f.call(t, r) && s(a, r, t[r]);
    if (e) for (var r of e(t)) m.call(t, r) && s(a, r, t[r]);
    return a;
  },
  o = (a, t) => d(a, l(t));
import { j as S } from "./manifest-987d6c36.js";
var u = ((a) => (
  (a[(a.Standard = 832)] = "Standard"),
  (a[(a.SameDrum = 833)] = "SameDrum"),
  (a[(a.AdditionalDrum = 834)] = "AdditionalDrum"),
  a
))(u || {});
function b(a) {
  return Object.values(u).includes(a);
}
function w(a, t) {
  if (t <= 0 || a <= 0 || t > a) return 1;
  {
    let r = 1;
    for (let i = a; i > a - t; i--) r *= i;
    for (let i = t; i > 1; i--) r /= i;
    return r;
  }
}
function h(a) {
  const t = a.match(/\d+/);
  if (t) {
    const r = t[0];
    return Number(r);
  } else return 0;
}
function D(a, t) {
  return a
    .slice(0, t)
    .map((i, p) =>
      o(n({}, i), {
        label: i.draws === 1 ? "1Draw" : `${i.draws}Draws`,
        value: i.draws,
      })
    );
}
const g = {
  Australia: 0,
  Austria: 24,
  Barbados: 48,
  Belgium: 72,
  Brazil: 96,
  Canada: 120,
  Chile: 144,
  Colombia: 168,
  Denmark: 192,
  Finland: 216,
  France: 240,
  Germany: 264,
  Ghana: 288,
  Greece: 312,
  India: 336,
  Ireland: 360,
  Italy: 384,
  Japan: 408,
  Latvia: 432,
  Lithuania: 456,
  Malta: 480,
  Mauritius: 504,
  Morocco: 528,
  "New Zealand": 552,
  Norway: 576,
  Peru: 600,
  Poland: 624,
  Romania: 648,
  Russia: 672,
  Singapore: 696,
  Slovakia: 720,
  "South Africa": 744,
  Spain: 768,
  "Sri Lanka": 792,
  Sweden: 816,
  Switzerland: 840,
  Turkiye: 864,
  UK: 888,
  Ukraine: 912,
  Uruguay: 936,
  USA: 960,
  Bc: 984,
};
function A(a, t = 1) {
  return `-${g[a] * t}px`;
}
function N(a) {
  return a && a.days <= 0 && a.hours <= 0 && a.minutes <= 0 && a.seconds <= 0;
}
function C() {
  document.body.classList.toggle("lottery-fold", !1),
    S.emit("lottery-toggle", !1);
}
export { u as B, w as a, A as b, C as c, N as d, h as e, D as g, b as i };
