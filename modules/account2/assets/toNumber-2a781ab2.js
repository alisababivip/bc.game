import { b as s, i as e } from "./isObject-010a5422.js";
import { i as f } from "./isObjectLike-e68f0fe0.js";
var o = "[object Symbol]";
function c(r) {
  return typeof r == "symbol" || (f(r) && s(r) == o);
}
var m = /\s/;
function b(r) {
  for (var t = r.length; t-- && m.test(r.charAt(t)); );
  return t;
}
var a = /^\s+/;
function p(r) {
  return r && r.slice(0, b(r) + 1).replace(a, "");
}
var n = 0 / 0,
  y = /^[-+]0x[0-9a-f]+$/i,
  I = /^0b[01]+$/i,
  d = /^0o[0-7]+$/i,
  x = parseInt;
function j(r) {
  if (typeof r == "number") return r;
  if (c(r)) return n;
  if (e(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = e(t) ? t + "" : t;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = p(r);
  var i = I.test(r);
  return i || d.test(r) ? x(r.slice(2), i ? 2 : 8) : y.test(r) ? n : +r;
}
export { j as t };
