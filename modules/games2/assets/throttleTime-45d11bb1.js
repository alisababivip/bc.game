import {
  m as F,
  _ as H,
  N as I,
  J,
  O as N,
  w as j,
  Q as P,
  R as Q,
  H as h,
  T as w,
  F as R,
  I as T,
  U,
  V,
} from "./game-a49e1f5b.js";
var _ = Array.isArray;
function q(t) {
  return F(function (n) {
    return (function (r, u) {
      return _(u) ? r.apply(void 0, H([], I(u))) : r(u);
    })(t, n);
  });
}
var z = Array.isArray,
  B = Object.getPrototypeOf,
  C = Object.prototype,
  D = Object.keys;
function E(t) {
  if (t.length === 1) {
    var n = t[0];
    if (z(n)) return { args: n, keys: null };
    if ((u = n) && typeof u == "object" && B(u) === C) {
      var r = D(n);
      return {
        args: r.map(function (p) {
          return n[p];
        }),
        keys: r,
      };
    }
  }
  var u;
  return { args: t, keys: null };
}
function K() {
  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
  var r = J(t),
    u = N(t),
    p = E(t),
    g = p.args,
    k = p.keys;
  if (g.length === 0) return j([], r);
  var o = new P(
    (function (l, s, v) {
      return (
        v === void 0 && (v = w),
        function (i) {
          x(
            s,
            function () {
              for (
                var c = l.length,
                  a = new Array(c),
                  b = c,
                  e = c,
                  y = function (A) {
                    x(
                      s,
                      function () {
                        var O = j(l[A], s),
                          d = !1;
                        O.subscribe(
                          h(
                            i,
                            function (f) {
                              (a[A] = f),
                                d || ((d = !0), e--),
                                e || i.next(v(a.slice()));
                            },
                            function () {
                              --b || i.complete();
                            }
                          )
                        );
                      },
                      i
                    );
                  },
                  m = 0;
                m < c;
                m++
              )
                y(m);
            },
            i
          );
        }
      );
    })(
      g,
      r,
      k
        ? function (l) {
            return (function (s, v) {
              return s.reduce(function (i, c, a) {
                return (i[c] = v[a]), i;
              }, {});
            })(k, l);
          }
        : w
    )
  );
  return u ? o.pipe(q(u)) : o;
}
function x(t, n, r) {
  t ? Q(r, t, n) : n();
}
function L(t, n, r) {
  n === void 0 && (n = V);
  var u = U(t, n);
  return (function (p, g) {
    return R(function (k, o) {
      var l = g != null ? g : {},
        s = l.leading,
        v = s === void 0 || s,
        i = l.trailing,
        c = i !== void 0 && i,
        a = !1,
        b = null,
        e = null,
        y = !1,
        m = function () {
          e == null || e.unsubscribe(),
            (e = null),
            c && (d(), y && o.complete());
        },
        A = function () {
          (e = null), y && o.complete();
        },
        O = function (f) {
          return (e = T(p(f)).subscribe(h(o, m, A)));
        },
        d = function () {
          if (a) {
            a = !1;
            var f = b;
            (b = null), o.next(f), !y && O(f);
          }
        };
      k.subscribe(
        h(
          o,
          function (f) {
            (a = !0), (b = f), (!e || e.closed) && (v ? d() : O(f));
          },
          function () {
            (y = !0), (!(c && a && e) || e.closed) && o.complete();
          }
        )
      );
    });
  })(function () {
    return u;
  }, r);
}
export { K as c, L as t };
