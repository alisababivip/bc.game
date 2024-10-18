import { H as s, v as n, t as a } from "./toString-486436aa.js";
const f = globalThis._bc,
  {
    $RAW: S,
    DEV: B,
    createMutable: C,
    createStore: F,
    modifyMutable: M,
    produce: P,
    reconcile: U,
    unwrap: W,
  } = f.inqq9w;
var p = /\s/;
function u(r) {
  for (var t = r.length; t-- && p.test(r.charAt(t)); );
  return t;
}
var m = /^\s+/;
function d(r) {
  return r && r.slice(0, u(r) + 1).replace(m, "");
}
var i = 0 / 0,
  b = /^[-+]0x[0-9a-f]+$/i,
  y = /^0b[01]+$/i,
  E = /^0o[0-7]+$/i,
  I = parseInt;
function h(r) {
  if (typeof r == "number") return r;
  if (s(r)) return i;
  if (n(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = n(t) ? t + "" : t;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = d(r);
  var e = y.test(r);
  return e || E.test(r) ? I(r.slice(2), e ? 2 : 8) : b.test(r) ? i : +r;
}
var o = 1 / 0,
  T = 17976931348623157e292;
function x(r) {
  if (!r) return r === 0 ? r : 0;
  if (((r = h(r)), r === o || r === -o)) {
    var t = r < 0 ? -1 : 1;
    return t * T;
  }
  return r === r ? r : 0;
}
function H(r) {
  var t = x(r),
    e = t % 1;
  return t === t ? (e ? t - e : t) : 0;
}
var N = "Expected a function";
function O(r, t) {
  var e;
  if (typeof t != "function") throw new TypeError(N);
  return (
    (r = H(r)),
    function () {
      return (
        --r > 0 && (e = t.apply(this, arguments)), r <= 1 && (t = void 0), e
      );
    }
  );
}
function R(r) {
  return function (t) {
    return r == null ? void 0 : r[t];
  };
}
function X(r) {
  return O(2, r);
}
var w = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" },
  _ = R(w);
const $ = _;
var c = /&(?:amp|lt|gt|quot|#39);/g,
  q = RegExp(c.source);
function g(r) {
  return (r = a(r)), r && q.test(r) ? r.replace(c, $) : r;
}
export { R as b, F as c, X as o, P as p, h as t, g as u };
