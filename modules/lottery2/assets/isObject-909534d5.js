var f =
  typeof global == "object" && global && global.Object === Object && global;
const l = f;
var s = typeof self == "object" && self && self.Object === Object && self,
  g = l || s || Function("return this")();
const j = g;
var u = j.Symbol;
const o = u;
var a = Object.prototype,
  y = a.hasOwnProperty,
  O = a.toString,
  e = o ? o.toStringTag : void 0;
function S(t) {
  var r = y.call(t, e),
    c = t[e];
  try {
    t[e] = void 0;
    var i = !0;
  } catch (m) {}
  var b = O.call(t);
  return i && (r ? (t[e] = c) : delete t[e]), b;
}
var d = Object.prototype,
  T = d.toString;
function p(t) {
  return T.call(t);
}
var v = "[object Null]",
  $ = "[object Undefined]",
  n = o ? o.toStringTag : void 0;
function h(t) {
  return t == null ? (t === void 0 ? $ : v) : n && n in Object(t) ? S(t) : p(t);
}
function w(t) {
  return t != null && typeof t == "object";
}
function P(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
export { o as S, w as a, h as b, l as f, P as i, j as r };
