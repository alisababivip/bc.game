const f =
  typeof global == "object" && global && global.Object === Object && global;
var s = typeof self == "object" && self && self.Object === Object && self;
const u = f || s || Function("return this")(),
  n = u.Symbol;
var c = Object.prototype,
  j = c.hasOwnProperty,
  v = c.toString,
  e = n ? n.toStringTag : void 0,
  g = Object.prototype.toString,
  r = n ? n.toStringTag : void 0;
function y(t) {
  return t == null
    ? t === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : r && r in Object(t)
    ? (function (o) {
        var l = j.call(o, e),
          a = o[e];
        try {
          o[e] = void 0;
          var b = !0;
        } catch (p) {}
        var i = v.call(o);
        return b && (l ? (o[e] = a) : delete o[e]), i;
      })(t)
    : (function (o) {
        return g.call(o);
      })(t);
}
function O(t) {
  var o = typeof t;
  return t != null && (o == "object" || o == "function");
}
export { n as S, y as b, f, O as i, u as r };
