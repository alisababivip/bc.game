import { a as h, b as u, g as f, r as _, M as p } from "./memoize-ff109130.js";
function o(t) {
  return t != null && typeof t == "object";
}
var g = Array.isArray;
const x = g;
function C(t) {
  return t;
}
var d = 9007199254740991;
function y(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= d;
}
function H(t) {
  return t != null && y(t.length) && !h(t);
}
var A = "[object Arguments]";
function s(t) {
  return o(t) && u(t) == A;
}
var i = Object.prototype,
  l = i.hasOwnProperty,
  b = i.propertyIsEnumerable,
  m = s(
    (function () {
      return arguments;
    })()
  )
    ? s
    : function (t) {
        return o(t) && l.call(t, "callee") && !b.call(t, "callee");
      };
const N = m;
function O(t, r) {
  for (var n = -1, e = r.length, c = t.length; ++n < e; ) t[c + n] = r[n];
  return t;
}
var E = f(_, "Set");
const P = E;
var S = "__lodash_hash_undefined__";
function j(t) {
  return this.__data__.set(t, S), this;
}
function w(t) {
  return this.__data__.has(t);
}
function a(t) {
  var r = -1,
    n = t == null ? 0 : t.length;
  for (this.__data__ = new p(); ++r < n; ) this.add(t[r]);
}
a.prototype.add = a.prototype.push = j;
a.prototype.has = w;
function T(t, r) {
  return t.has(r);
}
function F(t) {
  var r = -1,
    n = Array(t.size);
  return (
    t.forEach(function (e) {
      n[++r] = e;
    }),
    n
  );
}
export {
  P as S,
  o as a,
  a as b,
  T as c,
  x as d,
  C as e,
  y as f,
  N as g,
  O as h,
  H as i,
  F as s,
};
