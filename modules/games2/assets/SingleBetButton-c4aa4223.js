var T = Object.defineProperty;
var k = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty,
  q = Object.prototype.propertyIsEnumerable;
var x = (a, e, t) =>
    e in a
      ? T(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[e] = t),
  v = (a, e) => {
    for (var t in e || (e = {})) _.call(e, t) && x(a, t, e[t]);
    if (k) for (var t of k(e)) q.call(e, t) && x(a, t, e[t]);
    return a;
  };
import {
  u as F,
  m as g,
  h as G,
  i as B,
  a as P,
  b as A,
  c as l,
  B as f,
  d as z,
  t as H,
  ae as E,
  f as K,
  l as j,
  o as O,
  aO as I,
  aP as D,
} from "./manifest-a234c8a0.js";
import { a as y, a3 as c, b as C, z as J } from "./game-a49e1f5b.js";
import { c as p } from "./index-eff0ad24.js";
import { t as m } from "./i18n-611811a6.js";
import { k as i } from "./GameBankrollHelp-6ee96441.js";
import { t as b } from "./throttle-267ea383.js";
var S = H("<div>");
function h(a) {
  const e = F();
  return g(() => {
    return g(() => !!G.login)()
      ? ((r = S()), B(r, () => a.children), P(() => A(r, p(a.class))), r)
      : ((t = S()),
        B(
          t,
          l(f, {
            onClick: () => {
              e("/login/signin");
            },
            get class() {
              return z("w-full p-2 text-[#000]");
            },
            type: "brand",
            get children() {
              return m("Bet");
            },
          })
        ),
        P(() => A(t, p(a.class))),
        t);
    var t, r;
  });
}
function L(a) {
  const e = E({ allowParallelBet: !1 }, a),
    [t, r] = K(!1),
    { hotKeysEnable: u, connection: d } = y(),
    s = b((n) => {
      var w;
      n.preventDefault(),
        e.allowParallelBet && !e.disabled
          ? e.play()
          : (r(!0), (w = e.play()) == null || w.finally(() => r(!1)));
    }, e.throttle || 0),
    o = b((n) => {
      t() || e.disabled || e.spaceDisable || s(n);
    }, e.throttle || 500);
  return (
    j(() => {
      u()
        ? i("space", (n) => {
            n.preventDefault(), o(n);
          })
        : i.unbind("space");
    }),
    O(() => {
      i.unbind("space");
    }),
    l(h, {
      class: "lg:order-last mt-1.5 lg:mt-0",
      get children() {
        return l(f, {
          onClick: s,
          get disabled() {
            return e.disabled || d() !== c.connected || t();
          },
          get class() {
            return p(
              z(
                "w-full p-2 text-[#000] !opacity-100 !cursor-default md:h-12",
                e.class
              ),
              { "animate-shake": e.shank }
            );
          },
          type: "brand",
          get style() {
            return v({}, e.style);
          },
          get children() {
            return e.text;
          },
        });
      },
    })
  );
}
function M(a) {
  const { hotKeysEnable: e, connection: t } = y(),
    [r, u] = K(!1),
    d = b((o) => {
      a.disabled || r() || s();
    }, 500);
  j(() => {
    e() &&
      (i("space", (o) => {
        o.preventDefault(), d(o);
      }),
      O(() => {
        i.unbind("space");
      }));
  });
  const s = () => {
    u(!0), a.play(), setTimeout(() => u(!1), 1e3);
  };
  return l(h, {
    class:
      "order-first mt-1.5 lg:mt-0 lg:order-last lg:sticky lg:z-100 lg:bottom-0 lg:pb-3 lg:-mb-3 lg:bg-layer4",
    get children() {
      return l(f, {
        onClick: s,
        get disabled() {
          return a.disabled || t() !== c.connected || r();
        },
        class: "w-full p-2 truncate text-alw_dark",
        type: "brand",
        get children() {
          return g(() => !!a.isAutoPlaying)()
            ? m("Stop Auto Bet")
            : m("Start Auto Bet");
        },
      });
    },
  });
}
function Y(a) {
  const { connection: e } = y(),
    t = E({ allowParallelBet: !1 }, a);
  return l(h, {
    class: "relative flex-1 order-first lg:order-last",
    get children() {
      return l(I, {
        get children() {
          return [
            l(D, {
              get when() {
                return !t.mode || t.mode() === C.manual;
              },
              get children() {
                return l(L, {
                  get text() {
                    return t.manual.text;
                  },
                  get play() {
                    return t.manual.play;
                  },
                  get disabled() {
                    return t.manual.disabled || e() !== c.connected;
                  },
                });
              },
            }),
            l(D, {
              get when() {
                var r;
                return ((r = t.mode) == null ? void 0 : r.call(t)) === C.auto;
              },
              get children() {
                return l(M, {
                  get disabled() {
                    var r;
                    return (
                      ((r = t.auto) == null ? void 0 : r.disabled) ||
                      e() !== c.connected
                    );
                  },
                  get play() {
                    var r;
                    return ((r = t.auto) == null ? void 0 : r.play) || J;
                  },
                  get isAutoPlaying() {
                    return t.isAutoPlaying;
                  },
                });
              },
            }),
          ];
        },
      });
    },
  });
}
export { L as S, M as a, Y as b };
