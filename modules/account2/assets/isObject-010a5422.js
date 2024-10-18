var l =
  typeof global == "object" && global && global.Object === Object && global;
const f = l;
var g = typeof self == "object" && self && self.Object === Object && self,
  s = f || g || Function("return this")();
const j = s;
var y = j.Symbol;
const o = y;
var a = Object.prototype,
  S = a.hasOwnProperty,
  d = a.toString,
  e = o ? o.toStringTag : void 0;
function u(t) {
  var r = S.call(t, e),
    c = t[e];
  try {
    t[e] = void 0;
    var i = !0;
  } catch (m) {}
  var b = d.call(t);
  return i && (r ? (t[e] = c) : delete t[e]), b;
}
var O = Object.prototype,
  T = O.toString;
function p(t) {
  return T.call(t);
}
var v = "[object Null]",
  $ = "[object Undefined]",
  n = o ? o.toStringTag : void 0;
function h(t) {
  return t == null ? (t === void 0 ? $ : v) : n && n in Object(t) ? u(t) : p(t);
}
function w(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
export { o as S, h as b, f, w as i, j as r };
