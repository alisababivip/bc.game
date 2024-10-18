var L = Object.defineProperty;
var $ = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty,
  j = Object.prototype.propertyIsEnumerable;
var w = (t, l, n) =>
    l in t
      ? L(t, l, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[l] = n),
  m = (t, l) => {
    for (var n in l || (l = {})) R.call(l, n) && w(t, n, l[n]);
    if ($) for (var n of $(l)) j.call(l, n) && w(t, n, l[n]);
    return t;
  };
import {
  j as d,
  b as k,
  i as h,
  c as a,
  e as A,
  s as M,
  m as q,
  t as u,
} from "./web-13cf6287.js";
import { c as z, T as x, E as D } from "./manifest-cc1f4445.js";
import { i as G, m as J, c as K, F as i, g as N } from "./solid-js-38561dfe.js";
var O = u("<thead>"),
  T = u("<tr>"),
  Q = u("<th>"),
  S = u("<tbody>"),
  v = u("<td>"),
  U = u("<table>");
const Z = (t) => {
  var b, y;
  const [l, n] = G(t, ["columns", "data", "components", "bordered"]),
    g = J({ bordered: !0 }, l),
    c = {
      header: m(
        {
          wrapper: (r) =>
            (() => {
              var e = O();
              return d(e, r, !1, !1), e;
            })(),
          row: (r) =>
            (() => {
              var e = T();
              return d(e, r, !1, !1), e;
            })(),
          cell: (r) =>
            (() => {
              var e = Q();
              return d(e, r, !1, !1), e;
            })(),
        },
        (b = g.components) == null ? void 0 : b.header
      ),
      body: m(
        {
          wrapper: (r) =>
            (() => {
              var e = S();
              return d(e, r, !1, !1), e;
            })(),
          row: (r) =>
            (() => {
              var e = T();
              return d(e, r, !1, !1), e;
            })(),
          cell: (r) =>
            (() => {
              var e = v();
              return d(e, r, !1, !1), e;
            })(),
        },
        (y = t.components) == null ? void 0 : y.body
      ),
    },
    p = (r) => ({
      "text-left": r === 0,
      "text-center": r !== 0 && r !== g.columns.length - 1,
      "text-right": r === g.columns.length - 1,
    }),
    f = K(() => (g.bordered ? "border-b border-solid border-b-third" : "")),
    P = c.header.wrapper,
    B = c.header.row,
    C = c.header.cell,
    H = c.body.wrapper,
    I = c.body.row,
    E = c.body.cell;
  return (() => {
    var r = U();
    return (
      d(
        r,
        k(n, {
          get class() {
            return z(n.class, "w-full");
          },
        }),
        !1,
        !0
      ),
      h(
        r,
        a(P, {
          get children() {
            return a(B, {
              get class() {
                return f();
              },
              get children() {
                return a(i, {
                  get each() {
                    return t.columns;
                  },
                  children: (e, o) =>
                    a(x, {
                      get when() {
                        return e.title;
                      },
                      get children() {
                        return a(C, {
                          get classList() {
                            var s;
                            return m(
                              {
                                "px-3 py-2 align-middle text-xs font-semibold leading-none text-secondary":
                                  !0,
                                [(s = e.class) != null ? s : ""]: !0,
                              },
                              p(o())
                            );
                          },
                          get index() {
                            return o();
                          },
                          get children() {
                            return e.title;
                          },
                        });
                      },
                    }),
                });
              },
            });
          },
        }),
        null
      ),
      h(
        r,
        a(x, {
          get when() {
            var e;
            return ((e = t.data) == null ? void 0 : e.length) > 0;
          },
          get fallback() {
            return (() => {
              var e = v();
              return (
                h(e, () => t.empty || a(D, { type: "empty" })),
                A(() => {
                  var o, s;
                  return M(
                    e,
                    "colspan",
                    (s = (o = t.columns) == null ? void 0 : o.length) != null
                      ? s
                      : 1
                  );
                }),
                e
              );
            })();
          },
          get children() {
            return a(H, {
              get children() {
                return a(i, {
                  get each() {
                    return t.data;
                  },
                  children: (e, o) =>
                    a(I, {
                      get class() {
                        return f();
                      },
                      get index() {
                        return o();
                      },
                      get children() {
                        return a(i, {
                          get each() {
                            return g.columns;
                          },
                          children: (s, _) => {
                            const F = N(() =>
                              s.render
                                ? s.render(e[s.dataIndex], e)
                                : q(() => e[s.dataIndex])
                            );
                            return a(E, {
                              get classList() {
                                return m(
                                  { "px-3 py-2 align-middle leading-none": !0 },
                                  p(_())
                                );
                              },
                              get index() {
                                return _();
                              },
                              get children() {
                                return F();
                              },
                            });
                          },
                        });
                      },
                    }),
                });
              },
            });
          },
        }),
        null
      ),
      r
    );
  })();
};
export { Z as T };
