var b = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty,
  $ = Object.prototype.propertyIsEnumerable;
var p = (t, e, r) =>
    e in t
      ? b(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  a = (t, e) => {
    for (var r in e || (e = {})) C.call(e, r) && p(t, r, e[r]);
    if (f) for (var r of f(e)) $.call(e, r) && p(t, r, e[r]);
    return t;
  };
import {
  j as d,
  b as i,
  i as c,
  c as n,
  t as g,
  e as x,
  a as w,
  s as _,
} from "./web-13cf6287.js";
import { c as u, T as v, B as P, e as j } from "./manifest-cc1f4445.js";
import { m as y, i as h, g as B } from "./solid-js-38561dfe.js";
import { I } from "./index-e10d67ae.js";
var m = g("<div>"),
  T = g("<h1>");
const s = (t) => {
    const e = y({}, t),
      [r, l] = h(e, ["onInfo", "title", "children"]);
    return (() => {
      var o = m();
      return (
        d(
          o,
          i(l, {
            get class() {
              return u(
                "relative grid justify-stretch gap-x-4 rounded-xl p-3 leading-4",
                l.class
              );
            },
          }),
          !1,
          !0
        ),
        c(o, () => t.children, null),
        c(
          o,
          n(v, {
            get when() {
              return r.onInfo;
            },
            get children() {
              return n(P, {
                class: "absolute right-3 top-3 size-6 p-0",
                get children() {
                  return n(I, {
                    size: 24,
                    get onClick() {
                      return t.onInfo;
                    },
                    name: "inform",
                    class: "cursor-pointer text-secondary",
                  });
                },
              });
            },
          }),
          null
        ),
        o
      );
    })();
  },
  A = (t) =>
    (() => {
      var e = m();
      return (
        d(
          e,
          i(t, {
            get style() {
              return a({ "grid-area": "cover" }, t.style);
            },
          }),
          !1,
          !0
        ),
        c(e, () => t.children),
        e
      );
    })(),
  z = (t) =>
    (() => {
      var e = T();
      return (
        d(
          e,
          i(t, {
            get style() {
              return a({ "grid-area": "title" }, t.style);
            },
          }),
          !1,
          !0
        ),
        c(e, () => t.children),
        e
      );
    })(),
  D = (t) =>
    (() => {
      var e = m();
      return (
        d(
          e,
          i(
            {
              get style() {
                return a({ "grid-area": "description" }, t.style);
              },
            },
            t
          ),
          !1,
          !0
        ),
        c(e, () => t.children),
        e
      );
    })(),
  E = (t) =>
    (() => {
      var e = m();
      return (
        d(
          e,
          i(t, {
            get style() {
              return a({ "grid-area": "actions" }, t.style);
            },
          }),
          !1,
          !0
        ),
        c(e, () => t.children),
        e
      );
    })(),
  k = (t) =>
    (() => {
      var e = m();
      return (
        d(
          e,
          i(t, {
            get style() {
              return a({ "grid-area": "content" }, t.style);
            },
          }),
          !1,
          !1
        ),
        e
      );
    })();
s.Action = E;
s.Cover = A;
s.Content = k;
s.Description = D;
s.Title = z;
var S = g("<div>"),
  N = g(
    '<div class="mt-4 flex min-h-[7rem] min-w-64 flex-col items-center justify-between gap-y-2 self-end rounded-lg bg-layer3 p-2 brightness-95">'
  ),
  W = g('<img class="w-24 sm:h-[7.5rem] sm:w-auto">');
const M = (t) => {
    const e = y({ textEllipsis: !0 }, t),
      [r, l] = h(e, [
        "action",
        "cover",
        "cover",
        "descriptions",
        "title",
        "children",
        "textEllipsis",
      ]),
      o = B(() =>
        [
          r.action &&
            n(s.Action, {
              class: "w-18 place-content-center",
              get children() {
                return r.action;
              },
            }),
          r.descriptions &&
            n(s.Description, {
              class: "flex items-end text-xs font-semibold text-secondary",
              get children() {
                return r.descriptions;
              },
            }),
          r.cover &&
            n(s.Cover, {
              class: "place-content-center",
              get children() {
                return r.cover;
              },
            }),
          r.title &&
            n(s.Title, {
              get class() {
                return u(
                  r.textEllipsis && "sm:text-ellipsis sm:text-nowrap",
                  "text-lg font-extrabold leading-snug text-primary sm:overflow-hidden"
                );
              },
              get children() {
                return r.title;
              },
            }),
          r.children &&
            n(s.Content, {
              get class() {
                return u();
              },
              get children() {
                return r.children;
              },
            }),
        ].filter(Boolean)
      );
    return n(
      s,
      i(l, {
        get class() {
          return u("bonus-card-small bg-layer4 text-start", l.class);
        },
        get children() {
          return o();
        },
      })
    );
  },
  q = (t) =>
    n(v, {
      get when() {
        return j.mobile;
      },
      get fallback() {
        return (() => {
          var e = N();
          return c(e, () => t.children), e;
        })();
      },
      get children() {
        return t.children;
      },
    }),
  F = (t) => {
    const [e, r] = h(t, [
      "action",
      "cover",
      "cover",
      "descriptions",
      "title",
      "children",
    ]);
    return n(
      s,
      i(r, {
        get class() {
          return u(
            "bonus-card z-0 h-full min-h-[9.5rem] justify-center overflow-hidden bg-layer4 sm:!min-h-[18.5rem]"
          );
        },
        get children() {
          return [
            (() => {
              var l = S();
              return (
                x(() =>
                  w(
                    l,
                    u(
                      "absolute left-0 right-0 top-0 -z-10 h-full blur-[40px] sm:-top-8",
                      r.class
                    )
                  )
                ),
                l
              );
            })(),
            n(q, {
              get children() {
                return [
                  n(s.Content, {
                    class: "w-full flex-grow",
                    get children() {
                      return e.children;
                    },
                  }),
                  n(s.Description, {
                    class:
                      "flex items-center text-nowrap text-xs font-semibold text-secondary sm:justify-center",
                    get children() {
                      return e.descriptions;
                    },
                  }),
                  n(s.Action, {
                    class: "w-full",
                    get children() {
                      return e.action;
                    },
                  }),
                ];
              },
            }),
            n(s.Cover, {
              class: "flex items-center justify-center",
              get children() {
                return e.cover;
              },
            }),
            n(s.Title, {
              class:
                "text-lg font-extrabold leading-snug text-primary sm:flex sm:justify-center",
              get children() {
                return e.title;
              },
            }),
          ];
        },
      })
    );
  };
F.Img = (t) =>
  (() => {
    var e = W();
    return x(() => _(e, "src", t.src)), e;
  })();
export { F as C, M as S };
