import { d as f } from "./_defineProperty-3c705e3e.js";
import { a as g } from "./_baseOrderBy-d3b5242c.js";
import { b as i } from "./_baseIteratee-dc3e9bea.js";
import { d as u } from "./_setToArray-f7a05dc1.js";
function p(r, t, e) {
  t == "__proto__" && f
    ? f(r, t, { configurable: !0, enumerable: !0, value: e, writable: !0 })
    : (r[t] = e);
}
function c(r, t, e, o) {
  for (var n = -1, a = r == null ? 0 : r.length; ++n < a; ) {
    var s = r[n];
    t(o, s, e(s), r);
  }
  return o;
}
function b(r, t, e, o) {
  return (
    g(r, function (n, a, s) {
      t(o, n, e(n), s);
    }),
    o
  );
}
function m(r, t) {
  return function (e, o) {
    var n = u(e) ? c : b,
      a = t ? t() : {};
    return n(e, r, i(o), a);
  };
}
var h = Object.prototype,
  A = h.hasOwnProperty,
  d = m(function (r, t, e) {
    A.call(r, e) ? r[e].push(t) : p(r, e, [t]);
  });
const v = d;
export { m as c, v as g };
