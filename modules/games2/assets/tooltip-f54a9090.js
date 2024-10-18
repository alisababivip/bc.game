var me = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var ve = Object.prototype.hasOwnProperty,
  we = Object.prototype.propertyIsEnumerable;
var ee = (r, n, e) =>
    n in r
      ? me(r, n, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (r[n] = e),
  te = (r, n) => {
    for (var e in n || (n = {})) ve.call(n, e) && ee(r, e, n[e]);
    if (Z) for (var e of Z(n)) we.call(n, e) && ee(r, e, n[e]);
    return r;
  };
import {
  a2 as be,
  $ as S,
  l as H,
  o as k,
  c as u,
  S as ne,
  a0 as E,
  ai as Oe,
  a3 as Te,
  f as B,
  ah as m,
  H as ye,
  m as re,
  a4 as Pe,
} from "./manifest-a234c8a0.js";
import { c as De } from "./utils-65805dbc.js";
import { c as oe } from "./index-eff0ad24.js";
import { P as $, a as ie, D as Ce } from "./NNGMRY2O-be25bda0.js";
import { c as ke } from "./E53DB7BS-1e802908.js";
import {
  _ as Ee,
  m as se,
  e as ae,
  s as Re,
  g as M,
  d as Le,
  a as Fe,
  b as xe,
  P as Ie,
  h as z,
  n as Ae,
  o as Be,
  f as T,
} from "./index-4897b9da.js";
Ee(
  {},
  {
    Arrow: () => $,
    Content: () => G,
    Portal: () => J,
    Root: () => K,
    Tooltip: () => _e,
    Trigger: () => Y,
  }
);
var le = be();
function q() {
  const r = Pe(le);
  if (r === void 0)
    throw new Error(
      "[kobalte]: `useTooltipContext` must be used within a `Tooltip` component"
    );
  return r;
}
function G(r) {
  const n = q(),
    e = se({ id: n.generateId("content") }, r),
    [p, l] = S(e, ["ref", "style"]);
  return (
    H(() => k(n.registerContentId(l.id))),
    u(ne, {
      get when() {
        return n.contentPresent();
      },
      get children() {
        return u(ie.Positioner, {
          get children() {
            return u(
              Ce,
              E(
                {
                  ref(h) {
                    var a = ae((d) => {
                      n.setContentRef(d);
                    }, p.ref);
                    typeof a == "function" && a(h);
                  },
                  role: "tooltip",
                  disableOutsidePointerEvents: !1,
                  get style() {
                    return te(
                      {
                        "--kb-tooltip-content-transform-origin":
                          "var(--kb-popper-content-transform-origin)",
                        position: "relative",
                      },
                      p.style
                    );
                  },
                  onFocusOutside: (h) => h.preventDefault(),
                  onDismiss: () => n.hideTooltip(!0),
                },
                () => n.dataset(),
                l
              )
            );
          },
        });
      },
    })
  );
}
function J(r) {
  const n = q();
  return u(ne, {
    get when() {
      return n.contentPresent();
    },
    get children() {
      return u(Oe, r);
    },
  });
}
var f,
  C,
  b = {},
  Se = 0,
  y = !1;
function K(r) {
  const n = `tooltip-${Te()}`,
    e = "" + ++Se,
    p = se({ id: n, openDelay: 700, closeDelay: 300 }, r),
    [l, h] = S(p, [
      "id",
      "open",
      "defaultOpen",
      "onOpenChange",
      "disabled",
      "triggerOnFocusOnly",
      "openDelay",
      "closeDelay",
      "ignoreSafeArea",
      "forceMount",
    ]);
  let a;
  const [d, R] = B(),
    [v, P] = B(),
    [i, O] = B(),
    [L, pe] = B(h.placement),
    g = ke({
      open: () => l.open,
      defaultOpen: () => l.defaultOpen,
      onOpenChange: (o) => {
        var w;
        return (w = l.onOpenChange) == null ? void 0 : w.call(l, o);
      },
    }),
    { present: ce } = Re({
      show: () => l.forceMount || g.isOpen(),
      element: () => {
        var o;
        return (o = i()) != null ? o : null;
      },
    }),
    N = () => {
      b[e] = F;
    },
    Q = () => {
      for (const o in b) o !== e && (b[o](!0), delete b[o]);
    },
    F = (o = !1) => {
      m ||
        (o || (l.closeDelay && l.closeDelay <= 0)
          ? (window.clearTimeout(a), (a = void 0), g.close())
          : a ||
            (a = window.setTimeout(() => {
              (a = void 0), g.close();
            }, l.closeDelay)),
        window.clearTimeout(f),
        (f = void 0),
        y &&
          (window.clearTimeout(C),
          (C = window.setTimeout(() => {
            delete b[e], (C = void 0), (y = !1);
          }, l.closeDelay))));
    },
    _ = () => {
      m ||
        (clearTimeout(a),
        (a = void 0),
        Q(),
        N(),
        (y = !0),
        g.open(),
        window.clearTimeout(f),
        (f = void 0),
        window.clearTimeout(C),
        (C = void 0));
    },
    U = () => {
      m || (window.clearTimeout(a), (a = void 0));
    },
    V = (o) => z(v(), o) || z(i(), o),
    W = (o) => {
      const w = o.target;
      if (V(w)) U();
      else {
        if (!l.ignoreSafeArea) {
          const D = ((j) => {
            const x = v(),
              X = i();
            if (x && X)
              return (function (de, ge, he) {
                const fe = de.split("-")[0],
                  c = ge.getBoundingClientRect(),
                  t = he.getBoundingClientRect(),
                  s = [],
                  I = c.left + c.width / 2,
                  A = c.top + c.height / 2;
                switch (fe) {
                  case "top":
                    s.push([c.left, A]),
                      s.push([t.left, t.bottom]),
                      s.push([t.left, t.top]),
                      s.push([t.right, t.top]),
                      s.push([t.right, t.bottom]),
                      s.push([c.right, A]);
                    break;
                  case "right":
                    s.push([I, c.top]),
                      s.push([t.left, t.top]),
                      s.push([t.right, t.top]),
                      s.push([t.right, t.bottom]),
                      s.push([t.left, t.bottom]),
                      s.push([I, c.bottom]);
                    break;
                  case "bottom":
                    s.push([c.left, A]),
                      s.push([t.left, t.top]),
                      s.push([t.left, t.bottom]),
                      s.push([t.right, t.bottom]),
                      s.push([t.right, t.top]),
                      s.push([c.right, A]);
                    break;
                  case "left":
                    s.push([I, c.top]),
                      s.push([t.right, t.top]),
                      s.push([t.left, t.top]),
                      s.push([t.left, t.bottom]),
                      s.push([t.right, t.bottom]),
                      s.push([I, c.bottom]);
                }
                return s;
              })(j, x, X);
          })(L());
          if (D && Ae(Be(o), D)) return void U();
        }
        a || F();
      }
    };
  H(() => {
    if (m || !g.isOpen()) return;
    const o = M();
    o.addEventListener("pointermove", W, !0),
      k(() => {
        o.removeEventListener("pointermove", W, !0);
      });
  }),
    H(() => {
      const o = v();
      if (!o || !g.isOpen()) return;
      const w = (j) => {
          const x = j.target;
          z(x, o) && F(!0);
        },
        D = Le();
      D.addEventListener("scroll", w, { capture: !0 }),
        k(() => {
          D.removeEventListener("scroll", w, { capture: !0 });
        });
    }),
    k(() => {
      clearTimeout(a), b[e] && delete b[e];
    });
  const ue = {
    dataset: ye(() => ({
      "data-expanded": g.isOpen() ? "" : void 0,
      "data-closed": g.isOpen() ? void 0 : "",
    })),
    isOpen: g.isOpen,
    isDisabled: () => {
      var o;
      return (o = l.disabled) != null ? o : !1;
    },
    triggerOnFocusOnly: () => {
      var o;
      return (o = l.triggerOnFocusOnly) != null ? o : !1;
    },
    contentId: d,
    contentPresent: ce,
    openTooltip: (o = !1) => {
      m ||
        (!o && l.openDelay && l.openDelay > 0 && !a
          ? m ||
            (Q(),
            N(),
            g.isOpen() || f || y
              ? g.isOpen() || _()
              : (f = window.setTimeout(() => {
                  (f = void 0), (y = !0), _();
                }, l.openDelay)))
          : _());
    },
    hideTooltip: F,
    cancelOpening: () => {
      m || (window.clearTimeout(f), (f = void 0), (y = !1));
    },
    generateId: Fe(() => p.id),
    registerContentId: xe(R),
    isTargetOnTooltip: V,
    setTriggerRef: P,
    setContentRef: O,
  };
  return u(le.Provider, {
    value: ue,
    get children() {
      return u(
        ie,
        E({ anchorRef: v, contentRef: i, onCurrentPlacementChange: pe }, h)
      );
    },
  });
}
function Y(r) {
  let n;
  const e = q(),
    [p, l] = S(r, [
      "ref",
      "onPointerEnter",
      "onPointerLeave",
      "onPointerDown",
      "onClick",
      "onFocus",
      "onBlur",
    ]);
  let h = !1,
    a = !1,
    d = !1;
  const R = () => {
      h = !1;
    },
    v = () => {
      e.isOpen() || (!a && !d) || e.openTooltip(d);
    },
    P = (i) => {
      !e.isOpen() || a || d || e.hideTooltip(i);
    };
  return (
    k(() => {
      m || M(n).removeEventListener("pointerup", R);
    }),
    u(
      Ie,
      E(
        {
          as: "button",
          ref(i) {
            var O = ae((L) => {
              e.setTriggerRef(L), (n = L);
            }, p.ref);
            typeof O == "function" && O(i);
          },
          get "aria-describedby"() {
            return re(() => !!e.isOpen())() ? e.contentId() : void 0;
          },
          onPointerEnter: (i) => {
            T(i, p.onPointerEnter),
              i.pointerType === "touch" ||
                e.triggerOnFocusOnly() ||
                e.isDisabled() ||
                i.defaultPrevented ||
                ((a = !0), v());
          },
          onPointerLeave: (i) => {
            T(i, p.onPointerLeave),
              i.pointerType !== "touch" &&
                ((a = !1), (d = !1), e.isOpen() ? P() : e.cancelOpening());
          },
          onPointerDown: (i) => {
            T(i, p.onPointerDown),
              (h = !0),
              M(n).addEventListener("pointerup", R, { once: !0 });
          },
          onClick: (i) => {
            T(i, p.onClick), (a = !1), (d = !1), P(!0);
          },
          onFocus: (i) => {
            T(i, p.onFocus),
              e.isDisabled() || i.defaultPrevented || h || ((d = !0), v());
          },
          onBlur: (i) => {
            T(i, p.onBlur);
            const O = i.relatedTarget;
            e.isTargetOnTooltip(O) || ((a = !1), (d = !1), P(!0));
          },
        },
        () => e.dataset(),
        l
      )
    )
  );
}
var _e = Object.assign(K, { Arrow: $, Content: G, Portal: J, Trigger: Y });
const Je = (r) => u(K, E({ gutter: 4 }, r)),
  Ke = Y,
  Ye = (r) => {
    const [, n] = S(r, ["class", "children"]);
    return u(J, {
      get children() {
        return u(
          G,
          E(
            {
              get class() {
                var e;
                return oe(
                  De(
                    "z-[1001] origin-[var(--kb-popover-content-transform-origin)] rounded-lg bg-layer5 px-3 py-1.5 text-sm shadow-[0_4px_4px_0] shadow-black/25 animate-in fade-in-0 zoom-in-95",
                    r.class
                  ),
                  {
                    "-top-28":
                      (e = r.position) == null ? void 0 : e.includes("top"),
                  }
                );
              },
            },
            n,
            {
              get children() {
                return [
                  u($, {
                    get class() {
                      var e;
                      return oe("", {
                        "rotate-180 !-bottom-7":
                          (e = r.position) == null ? void 0 : e.includes("top"),
                      });
                    },
                  }),
                  re(() => r.children),
                ];
              },
            }
          )
        );
      },
    });
  };
export { Je as T, Ke as a, Ye as b };
