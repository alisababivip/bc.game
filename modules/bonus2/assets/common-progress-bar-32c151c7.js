var A = Object.defineProperty,
  O = Object.defineProperties;
var R = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty,
  j = Object.prototype.propertyIsEnumerable;
var h = (r, e, t) =>
    e in r
      ? A(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  y = (r, e) => {
    for (var t in e || (e = {})) X.call(e, t) && h(r, t, e[t]);
    if (u) for (var t of u(e)) j.call(e, t) && h(r, t, e[t]);
    return r;
  },
  T = (r, e) => O(r, R(e));
import { i as P } from "./_MapCache-1fb5cc44.js";
import { i as M } from "./isSymbol-269a4c68.js";
import {
  j as q,
  b as G,
  i as d,
  t as p,
  c as m,
  e as v,
  a as H,
  u as J,
  g as L,
  m as W,
} from "./web-13cf6287.js";
import { J as b, c as E, T as Y, s as D } from "./manifest-cc1f4445.js";
import { i as K, b as $, F as w } from "./solid-js-38561dfe.js";
var Q = /\s/;
function U(r) {
  for (var e = r.length; e-- && Q.test(r.charAt(e)); );
  return e;
}
var V = /^\s+/;
function Z(r) {
  return r && r.slice(0, U(r) + 1).replace(V, "");
}
var x = 0 / 0,
  rr = /^[-+]0x[0-9a-f]+$/i,
  er = /^0b[01]+$/i,
  tr = /^0o[0-7]+$/i,
  sr = parseInt;
function nr(r) {
  if (typeof r == "number") return r;
  if (M(r)) return x;
  if (P(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = P(e) ? e + "" : e;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = Z(r);
  var t = er.test(r);
  return t || tr.test(r) ? sr(r.slice(2), t ? 2 : 8) : rr.test(r) ? x : +r;
}
var I = 1 / 0,
  or = 17976931348623157e292;
function ar(r) {
  if (!r) return r === 0 ? r : 0;
  if (((r = nr(r)), r === I || r === -I)) {
    var e = r < 0 ? -1 : 1;
    return e * or;
  }
  return r === r ? r : 0;
}
function Tr(r) {
  var e = ar(r),
    t = e % 1;
  return e === e ? (t ? e - t : e) : 0;
}
var ir = p('<div><div class="h-full rounded-xl">'),
  lr = p(
    '<div class="relative flex w-full"><div class="invisible flex flex-row">'
  ),
  gr = p("<div class=absolute>"),
  cr = p("<div class=relative>"),
  fr = p("<div>");
const Pr = (r) => {
  const [e, t] = K(r, ["progress", "milestones", "renderProgress"]),
    [_, B] = $(),
    [N, S] = $(),
    z = b(_),
    C = b(N),
    F = () =>
      m(Y, {
        get when() {
          return e.renderProgress;
        },
        get fallback() {
          return (() => {
            var n = ir(),
              f = n.firstChild;
            return (
              f.style.setProperty(
                "background-image",
                "linear-gradient(90deg, #9FE871 0%, #24EE89 100%)"
              ),
              v(
                (s) => {
                  var g, c;
                  var l = E(
                      "absolute left-0 right-0 top-1/2 -z-10 mt-[1px] h-[0.5rem] -translate-y-1/2 rounded-xl",
                      D.darken ? "bg-alw_dark" : "bg-alw_white"
                    ),
                    o = ((g = z.width) != null ? g : 0) / 2 + "px",
                    a = ((c = C.width) != null ? c : 0) / 2 + "px",
                    i = `${e.progress}%`;
                  return (
                    l !== s.e && H(n, (s.e = l)),
                    o !== s.t &&
                      ((s.t = o) != null
                        ? n.style.setProperty("margin-left", o)
                        : n.style.removeProperty("margin-left")),
                    a !== s.a &&
                      ((s.a = a) != null
                        ? n.style.setProperty("margin-right", a)
                        : n.style.removeProperty("margin-right")),
                    i !== s.o &&
                      ((s.o = i) != null
                        ? f.style.setProperty("width", i)
                        : f.style.removeProperty("width")),
                    s
                  );
                },
                { e: void 0, t: void 0, a: void 0, o: void 0 }
              ),
              n
            );
          })();
        },
        get children() {
          return e.renderProgress(e.progress);
        },
      }),
    k = () => {
      const n = e.milestones,
        f = (s, l) => {
          var i;
          function o() {
            switch (s.condition) {
              case "greater":
                return e.progress > s.progressTarget;
              case "greaterAndEqual":
              default:
                return e.progress >= s.progressTarget;
            }
          }
          const a = (i = n[l + 1]) == null ? void 0 : i.progressTarget;
          return W(() =>
            s.icon(
              T(y({}, s), {
                index: l,
                reached: o(),
                progress: e.progress,
                lastReached: o() && (e.progress < a || !a),
              })
            )
          );
        };
      return (() => {
        var s = lr(),
          l = s.firstChild;
        return (
          d(
            s,
            m(w, {
              each: n,
              children: (o, a) => {
                const i = () =>
                  o.progressTarget === 0
                    ? {}
                    : o.progressTarget === 100
                    ? {
                        left: `${100 * (o.progressTarget / 100)}%`,
                        transform: "translateX(-100%)",
                      }
                    : {
                        left: `${100 * (o.progressTarget / 100)}%`,
                        transform: `translateX(-${
                          100 * (o.progressTarget / 100)
                        }%)`,
                      };
                return (() => {
                  var g = gr();
                  return (
                    J((c) => {
                      a() === 0 && o.progressTarget === 0 && B(c),
                        a() === n.length - 1 &&
                          o.progressTarget === 100 &&
                          S(c);
                    }, g),
                    d(g, () => f(o, a())),
                    v((c) => L(g, i(), c)),
                    g
                  );
                })();
              },
            }),
            l
          ),
          d(
            l,
            m(w, {
              each: n,
              children: (o, a) =>
                (() => {
                  var i = cr();
                  return d(i, () => f(o, a())), i;
                })(),
            })
          ),
          s
        );
      })();
    };
  return (() => {
    var n = fr();
    return (
      q(
        n,
        G(t, {
          get class() {
            return E("relative z-10", t.class);
          },
        }),
        !1,
        !0
      ),
      d(n, F, null),
      d(n, k, null),
      n
    );
  })();
};
export { Pr as C, Tr as a, nr as t };
