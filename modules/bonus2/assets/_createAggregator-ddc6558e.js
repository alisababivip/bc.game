import { h as f, k as g, i } from "./_baseFor-3fee30d6.js";
import { b } from "./_baseIteratee-a353a961.js";
import { i as h } from "./isArray-79a0be9c.js";
function k(e, n, r, a) {
  for (var t = -1, s = e == null ? 0 : e.length; ++t < s; ) {
    var u = e[t];
    n(a, u, r(u), e);
  }
  return a;
}
function A(e, n) {
  return e && f(e, n, g);
}
function m(e, n) {
  return function (r, a) {
    if (r == null) return r;
    if (!i(r)) return e(r, a);
    for (
      var t = r.length, s = n ? t : -1, u = Object(r);
      (n ? s-- : ++s < t) && a(u[s], s, u) !== !1;

    );
    return r;
  };
}
var o = m(A);
const p = o;
function v(e, n, r, a) {
  return (
    p(e, function (t, s, u) {
      n(a, t, r(t), u);
    }),
    a
  );
}
function d(e, n) {
  return function (r, a) {
    var t = h(r) ? k : v,
      s = n ? n() : {};
    return t(r, e, b(a), s);
  };
}
export { A as b, d as c };
