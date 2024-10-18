import { a as n, b as f, i as e } from "./isObject-909534d5.js";
var o = "[object Symbol]";
function a(r) {
  return typeof r == "symbol" || (n(r) && f(r) == o);
}
var c = /\s/;
function b(r) {
  for (var t = r.length; t-- && c.test(r.charAt(t)); );
  return t;
}
var m = /^\s+/;
function y(r) {
  return r && r.slice(0, b(r) + 1).replace(m, "");
}
var s = 0 / 0,
  p = /^[-+]0x[0-9a-f]+$/i,
  I = /^0b[01]+$/i,
  d = /^0o[0-7]+$/i,
  x = parseInt;
function T(r) {
  if (typeof r == "number") return r;
  if (a(r)) return s;
  if (e(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = e(t) ? t + "" : t;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = y(r);
  var i = I.test(r);
  return i || d.test(r) ? x(r.slice(2), i ? 2 : 8) : p.test(r) ? s : +r;
}
export { a as i, T as t };
