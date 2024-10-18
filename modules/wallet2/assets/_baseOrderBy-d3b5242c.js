import {
  k as p,
  a as b,
  c as g,
  d as k,
  e as w,
  b as A,
} from "./_baseIteratee-dc3e9bea.js";
import { i as s, e as B, d as F } from "./_setToArray-f7a05dc1.js";
function O(r) {
  return function (n, a, u) {
    for (var f = -1, i = Object(n), t = u(n), c = t.length; c--; ) {
      var e = t[r ? c : ++f];
      if (a(i[e], e, i) === !1) break;
    }
    return n;
  };
}
var x = O();
const E = x;
function M(r, n) {
  return r && E(r, n, p);
}
function h(r, n) {
  return function (a, u) {
    if (a == null) return a;
    if (!s(a)) return r(a, u);
    for (
      var f = a.length, i = n ? f : -1, t = Object(a);
      (n ? i-- : ++i < f) && u(t[i], i, t) !== !1;

    );
    return a;
  };
}
var C = h(M);
const L = C;
function $(r, n) {
  var a = -1,
    u = s(r) ? Array(r.length) : [];
  return (
    L(r, function (f, i, t) {
      u[++a] = n(f, i, t);
    }),
    u
  );
}
function G(r, n) {
  var a = r.length;
  for (r.sort(n); a--; ) r[a] = r[a].value;
  return r;
}
function U(r, n) {
  if (r !== n) {
    var a = r !== void 0,
      u = r === null,
      f = r === r,
      i = b(r),
      t = n !== void 0,
      c = n === null,
      e = n === n,
      d = b(n);
    if (
      (!c && !d && !i && r > n) ||
      (i && t && e && !c && !d) ||
      (u && t && e) ||
      (!a && e) ||
      !f
    )
      return 1;
    if (
      (!u && !i && !d && r < n) ||
      (d && a && f && !u && !i) ||
      (c && a && f) ||
      (!t && f) ||
      !e
    )
      return -1;
  }
  return 0;
}
function m(r, n, a) {
  for (
    var u = -1, f = r.criteria, i = n.criteria, t = f.length, c = a.length;
    ++u < t;

  ) {
    var e = U(f[u], i[u]);
    if (e) {
      if (u >= c) return e;
      var d = a[u];
      return e * (d == "desc" ? -1 : 1);
    }
  }
  return r.index - n.index;
}
function z(r, n, a) {
  n.length
    ? (n = g(n, function (i) {
        return F(i)
          ? function (t) {
              return k(t, i.length === 1 ? i[0] : i);
            }
          : i;
      }))
    : (n = [B]);
  var u = -1;
  n = g(n, w(A));
  var f = $(r, function (i, t, c) {
    var e = g(n, function (d) {
      return d(i);
    });
    return { criteria: e, index: ++u, value: i };
  });
  return G(f, function (i, t) {
    return m(i, t, a);
  });
}
export { L as a, z as b };
