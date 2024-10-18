var $e = Object.defineProperty,
  je = Object.defineProperties;
var qe = Object.getOwnPropertyDescriptors;
var pe = Object.getOwnPropertySymbols;
var He = Object.prototype.hasOwnProperty,
  _e = Object.prototype.propertyIsEnumerable;
var fe = (n, t, e) =>
    t in n
      ? $e(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[t] = e),
  E = (n, t) => {
    for (var e in t || (t = {})) He.call(t, e) && fe(n, e, t[e]);
    if (pe) for (var e of pe(t)) _e.call(t, e) && fe(n, e, t[e]);
    return n;
  },
  be = (n, t) => je(n, qe(t));
import {
  a2 as Q,
  $ as D,
  c as p,
  a0 as T,
  l as j,
  o as W,
  S as xe,
  m as $,
  ai as Ge,
  a3 as Z,
  f as M,
  H as Y,
  a4 as ee,
  n as Pe,
  a1 as Je,
  t as we,
  F as Ne,
  i as Qe,
  a as We,
  b as Ze,
} from "./manifest-a234c8a0.js";
import { c as F } from "./utils-65805dbc.js";
import { P as ye, a as De, D as et } from "./NNGMRY2O-be25bda0.js";
import { c as tt, s as nt, a as at } from "./index-15f8a785.js";
import { c as rt } from "./E53DB7BS-1e802908.js";
import { B as Ce } from "./currency-a0e3a368.js";
import {
  _ as Me,
  P as R,
  e as U,
  m as B,
  s as ot,
  a as Se,
  b as _,
  f as I,
  i as he,
  h as it,
  v as st,
  l as ve,
  w as G,
  c as Ie,
} from "./index-4897b9da.js";
import { L as te } from "./number-field-a2716165.js";
import { c as lt, a as ut } from "./resolve-elements.es-b931549e.js";
import { c as dt, u as ct } from "./LR7LBJN3-fced4fb5.js";
import {
  d as Oe,
  e as ke,
  f as q,
  g as Ee,
  h as Fe,
  u as gt,
  F as mt,
  c as pt,
  a as ft,
  b as bt,
} from "./QJIB6BDF-1dee7631.js";
import { b as ht } from "./FN6EICGO-b0e5a495.js";
Me(
  {},
  {
    Anchor: () => Be,
    Arrow: () => ye,
    CloseButton: () => Le,
    Content: () => ne,
    Description: () => ze,
    Popover: () => vt,
    Portal: () => ae,
    Root: () => re,
    Title: () => Ae,
    Trigger: () => oe,
  }
);
var Re = Q();
function z() {
  const n = ee(Re);
  if (n === void 0)
    throw new Error(
      "[kobalte]: `usePopoverContext` must be used within a `Popover` component"
    );
  return n;
}
function Be(n) {
  const t = z(),
    [e, s] = D(n, ["ref"]);
  return p(
    R,
    T(
      {
        as: "div",
        ref(a) {
          var o = U(t.setDefaultAnchorRef, e.ref);
          typeof o == "function" && o(a);
        },
      },
      () => t.dataset(),
      s
    )
  );
}
function Le(n) {
  const t = z(),
    [e, s] = D(n, ["aria-label", "onClick"]);
  return p(
    Ce,
    T(
      {
        get "aria-label"() {
          return e["aria-label"] || t.translations().dismiss;
        },
        onClick: (a) => {
          I(a, e.onClick), t.close();
        },
      },
      () => t.dataset(),
      s
    )
  );
}
function ne(n) {
  let t;
  const e = z(),
    s = B({ id: e.generateId("content") }, n),
    [a, o] = D(s, [
      "ref",
      "style",
      "onOpenAutoFocus",
      "onCloseAutoFocus",
      "onPointerDownOutside",
      "onFocusOutside",
      "onInteractOutside",
    ]);
  let b = !1,
    u = !1,
    c = !1;
  const v = (d) => {
      var g;
      (g = a.onPointerDownOutside) == null || g.call(a, d),
        e.isModal() && (b = d.detail.isContextMenu);
    },
    l = (d) => {
      var g;
      (g = a.onFocusOutside) == null || g.call(a, d),
        e.isOpen() && e.isModal() && d.preventDefault();
    },
    P = (d) => {
      var g;
      (g = a.onInteractOutside) == null || g.call(a, d),
        e.isModal() ||
          (d.defaultPrevented ||
            ((u = !0),
            d.detail.originalEvent.type === "pointerdown" && (c = !0)),
          it(e.triggerRef(), d.target) && d.preventDefault(),
          d.detail.originalEvent.type === "focusin" && c && d.preventDefault());
    };
  return (
    tt({
      isDisabled: () => !(e.isOpen() && e.isModal()),
      targets: () => (t ? [t] : []),
    }),
    nt({
      element: () => (t != null ? t : null),
      enabled: () => e.isOpen() && e.preventScroll(),
    }),
    at(
      {
        trapFocus: () => e.isOpen() && e.isModal(),
        onMountAutoFocus: a.onOpenAutoFocus,
        onUnmountAutoFocus: (d) => {
          var g;
          (g = a.onCloseAutoFocus) == null || g.call(a, d),
            e.isModal()
              ? (d.preventDefault(), b || he(e.triggerRef()))
              : (d.defaultPrevented ||
                  (u || he(e.triggerRef()), d.preventDefault()),
                (u = !1),
                (c = !1));
        },
      },
      () => t
    ),
    j(() => W(e.registerContentId(o.id))),
    p(xe, {
      get when() {
        return e.contentPresent();
      },
      get children() {
        return p(De.Positioner, {
          get children() {
            return p(
              et,
              T(
                {
                  ref(d) {
                    var g = U((h) => {
                      e.setContentRef(h), (t = h);
                    }, a.ref);
                    typeof g == "function" && g(d);
                  },
                  role: "dialog",
                  tabIndex: -1,
                  get disableOutsidePointerEvents() {
                    return $(() => !!e.isOpen())() && e.isModal();
                  },
                  get excludedElements() {
                    return [e.triggerRef];
                  },
                  get style() {
                    return E(
                      {
                        "--kb-popover-content-transform-origin":
                          "var(--kb-popper-content-transform-origin)",
                        position: "relative",
                      },
                      a.style
                    );
                  },
                  get "aria-labelledby"() {
                    return e.titleId();
                  },
                  get "aria-describedby"() {
                    return e.descriptionId();
                  },
                  onPointerDownOutside: v,
                  onFocusOutside: l,
                  onInteractOutside: P,
                  get onDismiss() {
                    return e.close;
                  },
                },
                () => e.dataset(),
                o
              )
            );
          },
        });
      },
    })
  );
}
function ze(n) {
  const t = z(),
    e = B({ id: t.generateId("description") }, n),
    [s, a] = D(e, ["id"]);
  return (
    j(() => W(t.registerDescriptionId(s.id))),
    p(
      R,
      T(
        {
          as: "p",
          get id() {
            return s.id;
          },
        },
        () => t.dataset(),
        a
      )
    )
  );
}
function ae(n) {
  const t = z();
  return p(xe, {
    get when() {
      return t.contentPresent();
    },
    get children() {
      return p(Ge, n);
    },
  });
}
var Te = { dismiss: "Dismiss" };
function re(n) {
  const t = `popover-${Z()}`,
    e = B({ id: t, modal: !1, translations: Te }, n),
    [s, a] = D(e, [
      "translations",
      "id",
      "open",
      "defaultOpen",
      "onOpenChange",
      "modal",
      "preventScroll",
      "forceMount",
      "anchorRef",
    ]),
    [o, b] = M(),
    [u, c] = M(),
    [v, l] = M(),
    [P, d] = M(),
    [g, h] = M(),
    [y, x] = M(),
    i = rt({
      open: () => s.open,
      defaultOpen: () => s.defaultOpen,
      onOpenChange: (r) => {
        var f;
        return (f = s.onOpenChange) == null ? void 0 : f.call(s, r);
      },
    }),
    V = () => {
      var r, f, C;
      return (C =
        (f = (r = s.anchorRef) == null ? void 0 : r.call(s)) != null
          ? f
          : o()) != null
        ? C
        : u();
    },
    { present: w } = ot({
      show: () => s.forceMount || i.isOpen(),
      element: () => {
        var r;
        return (r = v()) != null ? r : null;
      },
    }),
    L = {
      translations: () => {
        var r;
        return (r = s.translations) != null ? r : Te;
      },
      dataset: Y(() => ({
        "data-expanded": i.isOpen() ? "" : void 0,
        "data-closed": i.isOpen() ? void 0 : "",
      })),
      isOpen: i.isOpen,
      isModal: () => {
        var r;
        return (r = s.modal) != null ? r : !1;
      },
      preventScroll: () => {
        var r;
        return (r = s.preventScroll) != null ? r : L.isModal();
      },
      contentPresent: w,
      triggerRef: u,
      contentId: P,
      titleId: g,
      descriptionId: y,
      setDefaultAnchorRef: b,
      setTriggerRef: c,
      setContentRef: l,
      close: i.close,
      toggle: i.toggle,
      generateId: Se(() => s.id),
      registerContentId: _(d),
      registerTitleId: _(h),
      registerDescriptionId: _(x),
    };
  return p(Re.Provider, {
    value: L,
    get children() {
      return p(De, T({ anchorRef: V, contentRef: v }, a));
    },
  });
}
function Ae(n) {
  const t = z(),
    e = B({ id: t.generateId("title") }, n),
    [s, a] = D(e, ["id"]);
  return (
    j(() => W(t.registerTitleId(s.id))),
    p(
      R,
      T(
        {
          as: "h2",
          get id() {
            return s.id;
          },
        },
        () => t.dataset(),
        a
      )
    )
  );
}
function oe(n) {
  const t = z(),
    [e, s] = D(n, ["ref", "onClick", "onPointerDown"]);
  return p(
    Ce,
    T(
      {
        ref(a) {
          var o = U(t.setTriggerRef, e.ref);
          typeof o == "function" && o(a);
        },
        "aria-haspopup": "dialog",
        get "aria-expanded"() {
          return t.isOpen();
        },
        get "aria-controls"() {
          return $(() => !!t.isOpen())() ? t.contentId() : void 0;
        },
        onPointerDown: (a) => {
          I(a, e.onPointerDown), a.preventDefault();
        },
        onClick: (a) => {
          I(a, e.onClick), t.toggle();
        },
      },
      () => t.dataset(),
      s
    )
  );
}
var vt = Object.assign(re, {
  Anchor: Be,
  Arrow: ye,
  CloseButton: Le,
  Content: ne,
  Description: ze,
  Portal: ae,
  Title: Ae,
  Trigger: oe,
});
const zt = (n) => p(re, T({ gutter: 4 }, n)),
  At = oe,
  Xt = (n) => {
    const [, t] = D(n, ["class"]);
    return p(ae, {
      get children() {
        return p(
          ne,
          T(
            {
              get class() {
                return F(
                  "z-[1000] w-72 origin-[var(--kb-popover-content-transform-origin)] rounded-lg bg-layer6 p-2 text-primary shadow-md outline-none data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
                  n.class
                );
              },
            },
            t
          )
        );
      },
    });
  };
var Tt = we("<input type=range>");
Me(
  {},
  {
    Description: () => Oe,
    ErrorMessage: () => ke,
    Fill: () => ie,
    Input: () => le,
    Label: () => q,
    Root: () => ue,
    Slider: () => xt,
    Thumb: () => se,
    Track: () => de,
    ValueLabel: () => ce,
  }
);
var Xe = Q();
function K() {
  const n = ee(Xe);
  if (n === void 0)
    throw new Error(
      "[kobalte]: `useSliderContext` must be used within a `Slider.Root` component"
    );
  return n;
}
function ie(n) {
  const t = K(),
    [e, s] = D(n, ["style"]),
    a = () => t.state.values().map((o) => 100 * t.state.getValuePercent(o));
  return p(
    R,
    T(
      {
        as: "div",
        get style() {
          return E(
            {
              [t.startEdge()]: `${
                t.state.values().length > 1 ? Math.min(...a()) : 0
              }%`,
              [t.endEdge()]: 100 - Math.max(...a()) + "%",
            },
            e.style
          );
        },
      },
      () => t.dataset(),
      s
    )
  );
}
function se(n) {
  let t;
  const e = K(),
    s = B({ id: e.generateId(`thumb-${Z()}`) }, n),
    [a, o, b] = D(
      s,
      [
        "ref",
        "style",
        "onKeyDown",
        "onPointerDown",
        "onPointerMove",
        "onPointerUp",
        "onFocus",
        "onBlur",
      ],
      Ee
    ),
    { fieldProps: u } = Fe(o);
  lt({
    getItem: () => ({
      ref: () => t,
      disabled: e.state.isDisabled(),
      key: u.id(),
      textValue: "",
      type: "item",
    }),
  });
  const c = () => (t ? e.thumbs().findIndex((i) => i.ref() === t) : -1),
    v = () => e.state.getThumbValue(c());
  let l = 0;
  const P = (i) => {
      I(i, a.onKeyDown), e.onStepKeyDown(i, c());
    },
    d = (i) => {
      var w;
      I(i, a.onPointerDown);
      const V = i.currentTarget;
      i.preventDefault(),
        i.stopPropagation(),
        V.setPointerCapture(i.pointerId),
        V.focus(),
        (l = e.state.orientation() === "horizontal" ? i.clientX : i.clientY),
        v() !== void 0 && ((w = e.onSlideStart) == null || w.call(e, c(), v()));
    },
    g = (i) => {
      var V;
      if (
        (i.stopPropagation(),
        I(i, a.onPointerMove),
        i.currentTarget.hasPointerCapture(i.pointerId))
      ) {
        const w = { deltaX: i.clientX - l, deltaY: i.clientY - l };
        (V = e.onSlideMove) == null || V.call(e, w),
          (l = e.state.orientation() === "horizontal" ? i.clientX : i.clientY);
      }
    },
    h = (i) => {
      var w;
      i.stopPropagation(), I(i, a.onPointerUp);
      const V = i.currentTarget;
      V.hasPointerCapture(i.pointerId) &&
        (V.releasePointerCapture(i.pointerId),
        (w = e.onSlideEnd) == null || w.call(e));
    },
    y = (i) => {
      I(i, a.onFocus), e.state.setFocusedThumb(c());
    },
    x = (i) => {
      I(i, a.onBlur), e.state.setFocusedThumb(void 0);
    };
  return (
    Pe(() => {
      e.state.setThumbEditable(c(), !e.state.isDisabled());
    }),
    p(Ye.Provider, {
      value: { index: c },
      get children() {
        return p(
          R,
          T(
            {
              as: "span",
              ref(i) {
                var V = U((w) => (t = w), a.ref);
                typeof V == "function" && V(i);
              },
              role: "slider",
              get id() {
                return u.id();
              },
              get tabIndex() {
                return e.state.isDisabled() ? void 0 : 0;
              },
              get style() {
                return E(
                  {
                    display: v() === void 0 ? "none" : void 0,
                    position: "absolute",
                    [e.startEdge()]: `calc(${
                      100 * e.state.getThumbPercent(c())
                    }%)`,
                    transform:
                      e.state.orientation() === "vertical"
                        ? "translateY(50%)"
                        : "translateX(-50%)",
                    "touch-action": "none",
                  },
                  a.style
                );
              },
              get "aria-valuetext"() {
                return e.state.getThumbValueLabel(c());
              },
              get "aria-valuemin"() {
                return e.minValue();
              },
              get "aria-valuenow"() {
                return v();
              },
              get "aria-valuemax"() {
                return e.maxValue();
              },
              get "aria-orientation"() {
                return e.state.orientation();
              },
              get "aria-label"() {
                return u.ariaLabel();
              },
              get "aria-labelledby"() {
                return u.ariaLabelledBy();
              },
              get "aria-describedby"() {
                return u.ariaDescribedBy();
              },
              onKeyDown: P,
              onPointerDown: d,
              onPointerMove: g,
              onPointerUp: h,
              onFocus: y,
              onBlur: x,
            },
            () => e.dataset(),
            b
          )
        );
      },
    })
  );
}
var Ye = Q();
function le(n) {
  const t = gt(),
    e = K(),
    s = (function () {
      const g = ee(Ye);
      if (g === void 0)
        throw new Error(
          "[kobalte]: `useThumbContext` must be used within a `Slider.Thumb` component"
        );
      return g;
    })(),
    a = B({ id: e.generateId("input") }, n),
    [o, b, u] = D(a, ["style", "onChange"], Ee),
    { fieldProps: c } = Fe(b),
    [v, l] = M(""),
    P = (g) => {
      var y;
      I(g, o.onChange);
      const h = g.target;
      e.state.setThumbValue(s.index(), parseFloat(h.value)),
        (h.value = (y = String(e.state.values()[s.index()])) != null ? y : "");
    };
  return (
    j(() => {
      l(s.index() === -1 ? "" : e.state.getThumbValueLabel(s.index()));
    }),
    (d = Tt()).addEventListener("change", P),
    Je(
      d,
      T(
        {
          get id() {
            return c.id();
          },
          get name() {
            return t.name();
          },
          get tabIndex() {
            return e.state.isDisabled() ? void 0 : -1;
          },
          get min() {
            return e.state.getThumbMinValue(s.index());
          },
          get max() {
            return e.state.getThumbMaxValue(s.index());
          },
          get step() {
            return e.state.step();
          },
          get value() {
            return e.state.values()[s.index()];
          },
          get required() {
            return t.isRequired();
          },
          get disabled() {
            return t.isDisabled();
          },
          get readonly() {
            return t.isReadOnly();
          },
          get style() {
            return E(E({}, st), o.style);
          },
          get "aria-orientation"() {
            return e.state.orientation();
          },
          get "aria-valuetext"() {
            return v();
          },
          get "aria-label"() {
            return c.ariaLabel();
          },
          get "aria-labelledby"() {
            return c.ariaLabelledBy();
          },
          get "aria-describedby"() {
            return c.ariaDescribedBy();
          },
          get "aria-invalid"() {
            return t.validationState() === "invalid" || void 0;
          },
          get "aria-required"() {
            return t.isRequired() || void 0;
          },
          get "aria-disabled"() {
            return t.isDisabled() || void 0;
          },
          get "aria-readonly"() {
            return t.isReadOnly() || void 0;
          },
        },
        () => e.dataset(),
        u
      ),
      !1,
      !1
    ),
    d
  );
  var d;
}
function J(n, t, e) {
  const s = [...n];
  return (s[e] = t), s.sort((a, o) => a - o);
}
function N(n, t) {
  if (t > 0) {
    const e = (function (s) {
      return s.slice(0, -1).map((a, o) => s[o + 1] - a);
    })(n);
    return Math.min(...e) >= t;
  }
  return !0;
}
function X(n) {
  n.preventDefault(), n.stopPropagation();
}
function Vt(n) {
  let t = !1;
  const e = B(
      {
        minValue: () => 0,
        maxValue: () => 100,
        step: () => 1,
        minStepsBetweenThumbs: () => 0,
        orientation: () => "horizontal",
        isDisabled: () => !1,
      },
      n
    ),
    s = Y(() => {
      let r = (e.maxValue() - e.minValue()) / 10;
      return (r = G(r, 0, r + e.step(), e.step())), Math.max(r, e.step());
    }),
    a = Y(() => {
      var r;
      return (r = e.defaultValue()) != null ? r : [e.minValue()];
    }),
    [o, b] = ht({
      value: () => e.value(),
      defaultValue: a,
      onChange: (r) => {
        var f;
        return (f = e.onChange) == null ? void 0 : f.call(e, r);
      },
    }),
    [u, c] = M(new Array(o().length).fill(!1)),
    [v, l] = M(new Array(o().length).fill(!1)),
    [P, d] = M(void 0),
    g = (r) => (r - e.minValue()) / (e.maxValue() - e.minValue()),
    h = (r) =>
      r === 0
        ? n.minValue()
        : o()[r - 1] + n.minStepsBetweenThumbs() * n.step(),
    y = (r) =>
      r === o().length - 1
        ? n.maxValue()
        : o()[r + 1] - n.minStepsBetweenThumbs() * n.step(),
    x = (r) => v()[r],
    i = (r, f) => {
      if (e.isDisabled() || !x(r)) return;
      const C = G(f, h(r), y(r), e.step());
      N(J(o(), C, r), e.minStepsBetweenThumbs() * e.step()) &&
        b((A) => [...Ve(A, r, C)]);
    },
    V = (r) => e.numberFormatter.format(r),
    w = (r) => {
      const f = r * (e.maxValue() - e.minValue()) + e.minValue();
      return Ie(
        ((C = f),
        Math.round((C - e.minValue()) / e.step()) * e.step() + e.minValue()),
        e.minValue(),
        e.maxValue()
      );
      var C;
    },
    L = (r, f) => {
      const C = o()[r] + f;
      N(J(o(), C, r), e.minStepsBetweenThumbs() * e.step()) &&
        i(r, G(C, e.minValue(), e.maxValue(), e.step()));
    };
  return {
    values: o,
    getThumbValue: (r) => o()[r],
    setThumbValue: i,
    setThumbPercent: (r, f) => {
      i(r, w(f));
    },
    isThumbDragging: (r) => u()[r],
    setThumbDragging: (r, f) => {
      var A;
      if (e.isDisabled() || !x(r)) return;
      const C = u()[r];
      c((m) => [...Ve(m, r, f)]),
        C &&
          !u().some(Boolean) &&
          ((A = e.onChangeEnd) == null || A.call(e, o()));
    },
    focusedThumb: P,
    setFocusedThumb: (r) => {
      var f;
      r === void 0 &&
        t &&
        ((t = !1), (f = e.onChangeEnd) == null || f.call(e, o())),
        d(r);
    },
    getThumbPercent: (r) => g(o()[r]),
    getValuePercent: g,
    getThumbValueLabel: (r) => V(o()[r]),
    getFormattedValue: V,
    getThumbMinValue: h,
    getThumbMaxValue: y,
    getPercentValue: w,
    isThumbEditable: x,
    setThumbEditable: (r) => {
      l((f) => ((f[r] = !0), f));
    },
    incrementThumb: (r, f = 1) => {
      (t = !0), L(r, Math.max(f, n.step()));
    },
    decrementThumb: (r, f = 1) => {
      (t = !0), L(r, -Math.max(f, n.step()));
    },
    step: e.step,
    pageSize: s,
    orientation: e.orientation,
    isDisabled: e.isDisabled,
    setValues: b,
    resetValues: () => {
      b(a());
    },
  };
}
function Ve(n, t, e) {
  return n[t] === e ? n : [...n.slice(0, t), e, ...n.slice(t + 1)];
}
function ue(n) {
  let t;
  const e = `slider-${Z()}`,
    s = B(
      {
        id: e,
        minValue: 0,
        maxValue: 100,
        step: 1,
        minStepsBetweenThumbs: 0,
        orientation: "horizontal",
        disabled: !1,
        inverted: !1,
        getValueLabel: (m) => m.values.join(", "),
      },
      n
    ),
    [a, o, b] = D(
      s,
      [
        "ref",
        "value",
        "defaultValue",
        "onChange",
        "onChangeEnd",
        "inverted",
        "minValue",
        "maxValue",
        "step",
        "minStepsBetweenThumbs",
        "getValueLabel",
        "orientation",
      ],
      mt
    ),
    { formControlContext: u } = pt(o),
    c = dt(() => ({ style: "decimal" })),
    { direction: v } = ct(),
    l = Vt({
      value: () => a.value,
      defaultValue: () => {
        var m;
        return (m = a.defaultValue) != null ? m : [a.minValue];
      },
      maxValue: () => a.maxValue,
      minValue: () => a.minValue,
      minStepsBetweenThumbs: () => a.minStepsBetweenThumbs,
      isDisabled: () => {
        var m;
        return (m = u.isDisabled()) != null ? m : !1;
      },
      orientation: () => a.orientation,
      step: () => a.step,
      numberFormatter: c(),
      onChange: a.onChange,
      onChangeEnd: a.onChangeEnd,
    }),
    [P, d] = M([]),
    { DomCollectionProvider: g } = ut({ items: P, onItemsChange: d });
  ft(
    () => t,
    () => l.resetValues()
  );
  const h = () => v() === "ltr",
    y = () => (h() && !a.inverted) || (!h() && a.inverted),
    x = () => !a.inverted,
    i = () => l.orientation() === "vertical",
    V = Y(() => be(E({}, u.dataset()), { "data-orientation": a.orientation })),
    [w, L] = M();
  let r = null;
  const f = Y(() => (i() ? (x() ? "bottom" : "top") : y() ? "left" : "right")),
    C = Y(() => (i() ? (x() ? "top" : "bottom") : y() ? "right" : "left")),
    A = {
      dataset: V,
      state: l,
      thumbs: P,
      setThumbs: d,
      onSlideStart: (m, S) => {
        l.setFocusedThumb(m),
          l.setThumbDragging(m, !0),
          l.setThumbValue(m, S),
          (r = null);
      },
      onSlideMove: ({ deltaX: m, deltaY: S }) => {
        var me;
        const k = l.focusedThumb();
        if (k === void 0) return;
        const { width: O, height: Ue } = w().getBoundingClientRect(),
          ge = i() ? Ue : O;
        r === null && (r = l.getThumbPercent(l.focusedThumb()) * ge);
        let H = i() ? S : m;
        ((!i() && a.inverted) || (i() && x())) && (H = -H), (r += H);
        const Ke = Ie(r / ge, 0, 1);
        N(J(l.values(), r, k), a.minStepsBetweenThumbs * l.step()) &&
          (l.setThumbPercent(l.focusedThumb(), Ke),
          (me = a.onChange) == null || me.call(a, l.values()));
      },
      onSlideEnd: () => {
        const m = l.focusedThumb();
        m !== void 0 && (l.setThumbDragging(m, !1), P()[m].ref().focus());
      },
      onStepKeyDown: (m, S) => {
        if (!u.isDisabled())
          switch (m.key) {
            case "Left":
            case "ArrowLeft":
            case "Down":
            case "ArrowDown":
              X(m),
                h()
                  ? l.decrementThumb(S, m.shiftKey ? l.pageSize() : l.step())
                  : l.incrementThumb(S, m.shiftKey ? l.pageSize() : l.step());
              break;
            case "Right":
            case "ArrowRight":
            case "Up":
            case "ArrowUp":
              X(m),
                h()
                  ? l.incrementThumb(S, m.shiftKey ? l.pageSize() : l.step())
                  : l.decrementThumb(S, m.shiftKey ? l.pageSize() : l.step());
              break;
            case "Home":
              ((k) => {
                const O = l.focusedThumb();
                u.isDisabled() ||
                  O === void 0 ||
                  (X(k), l.setThumbValue(O, l.getThumbMinValue(O)));
              })(m);
              break;
            case "End":
              ((k) => {
                const O = l.focusedThumb();
                u.isDisabled() ||
                  O === void 0 ||
                  (X(k), l.setThumbValue(O, l.getThumbMaxValue(O)));
              })(m);
              break;
            case "PageUp":
              X(m), l.incrementThumb(S, l.pageSize());
              break;
            case "PageDown":
              X(m), l.decrementThumb(S, l.pageSize());
          }
      },
      isSlidingFromLeft: y,
      isSlidingFromBottom: x,
      trackRef: w,
      minValue: () => a.minValue,
      maxValue: () => a.maxValue,
      inverted: () => a.inverted,
      startEdge: f,
      endEdge: C,
      registerTrack: (m) => L(m),
      generateId: Se(() => ve(o.id)),
      getValueLabel: a.getValueLabel,
    };
  return p(g, {
    get children() {
      return p(bt.Provider, {
        value: u,
        get children() {
          return p(Xe.Provider, {
            value: A,
            get children() {
              return p(
                R,
                T(
                  {
                    as: "div",
                    ref(m) {
                      var S = U((k) => (t = k), a.ref);
                      typeof S == "function" && S(m);
                    },
                    role: "group",
                    get id() {
                      return ve(o.id);
                    },
                  },
                  V,
                  b
                )
              );
            },
          });
        },
      });
    },
  });
}
function de(n) {
  const t = K(),
    [e, s] = D(n, ["onPointerDown", "onPointerMove", "onPointerUp"]),
    [a, o] = M();
  let b = 0;
  return p(
    R,
    T(
      {
        as: "div",
        ref(u) {
          var c = U(t.registerTrack, n.ref);
          typeof c == "function" && c(u);
        },
        onPointerDown: (u) => {
          var l;
          I(u, e.onPointerDown),
            u.target.setPointerCapture(u.pointerId),
            u.preventDefault();
          const c = (function (P) {
            const d = a() || t.trackRef().getBoundingClientRect(),
              g = [
                0,
                t.state.orientation() === "vertical" ? d.height : d.width,
              ];
            let h = t.isSlidingFromLeft()
              ? [t.minValue(), t.maxValue()]
              : [t.maxValue(), t.minValue()];
            t.state.orientation() === "vertical" &&
              (h = t.isSlidingFromBottom()
                ? [t.maxValue(), t.minValue()]
                : [t.minValue(), t.maxValue()]);
            const y = (function (x, i) {
              return (V) => {
                if (x[0] === x[1] || i[0] === i[1]) return i[0];
                const w = (i[1] - i[0]) / (x[1] - x[0]);
                return i[0] + w * (V - x[0]);
              };
            })(g, h);
            return (
              o(d),
              y(P - (t.state.orientation() === "vertical" ? d.top : d.left))
            );
          })(t.state.orientation() === "horizontal" ? u.clientX : u.clientY);
          b = t.state.orientation() === "horizontal" ? u.clientX : u.clientY;
          const v = (function (P, d) {
            if (P.length === 1) return 0;
            const g = P.map((x) => Math.abs(x - d)),
              h = Math.min(...g),
              y = g.indexOf(h);
            return d < P[y] ? y : g.lastIndexOf(h);
          })(t.state.values(), c);
          (l = t.onSlideStart) == null || l.call(t, v, c);
        },
        onPointerMove: (u) => {
          var c;
          I(u, e.onPointerMove),
            u.target.hasPointerCapture(u.pointerId) &&
              ((c = t.onSlideMove) == null ||
                c.call(t, { deltaX: u.clientX - b, deltaY: u.clientY - b }),
              (b =
                t.state.orientation() === "horizontal"
                  ? u.clientX
                  : u.clientY));
        },
        onPointerUp: (u) => {
          var v;
          I(u, e.onPointerUp);
          const c = u.target;
          c.hasPointerCapture(u.pointerId) &&
            (c.releasePointerCapture(u.pointerId),
            o(void 0),
            (v = t.onSlideEnd) == null || v.call(t));
        },
      },
      () => t.dataset(),
      s
    )
  );
}
function ce(n) {
  const t = K();
  return p(
    R,
    T({ as: "div" }, () => t.dataset(), n, {
      get children() {
        var e;
        return (e = t.getValueLabel) == null
          ? void 0
          : e.call(t, {
              values: t.state.values(),
              max: t.maxValue(),
              min: t.minValue(),
            });
      },
    })
  );
}
var xt = Object.assign(ue, {
    Description: Oe,
    ErrorMessage: ke,
    Fill: ie,
    Input: le,
    Label: q,
    Thumb: se,
    Track: de,
    ValueLabel: ce,
  }),
  Pt = we("<span>");
const Yt = (n) => {
    const [, t] = D(n, ["class"]);
    return p(
      ue,
      T(
        {
          get class() {
            return F(
              "relative flex w-full touch-none select-none flex-col items-center light-darkness",
              n.class,
              { "opacity-40": n.disabled && !n.disabledOpacity }
            );
          },
        },
        t
      )
    );
  },
  Ut = (n) => {
    const [, t] = D(n, ["class"]);
    return p(
      de,
      T(
        {
          get class() {
            return F(
              "relative h-2.5 w-full grow rounded-full bg-layer4",
              n.class
            );
          },
        },
        t
      )
    );
  },
  Kt = (n) => {
    const [, t] = D(n, ["class"]);
    return p(
      ie,
      T(
        {
          get class() {
            return F(
              "absolute h-full bg-gradient-to-r from-[#31ee88] to-[#9fe871] rounded-full",
              n.class
            );
          },
        },
        t
      )
    );
  },
  $t = (n) => {
    const [t, e] = D(n, ["class", "children", "tipMode", "tipClass"]),
      [s, a] = M(!1);
    return (
      Pe(() => {
        a(!!t.tipMode && t.tipMode === "always");
      }),
      p(
        se,
        T(
          {
            get class() {
              return F(
                "block h-8 w-4.5 -top-3 rounded-lg transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 relative cursor-pointer data-[disabled]:cursor-default",
                "bg-alw_white",
                n.class
              );
            },
          },
          e,
          {
            get style() {
              return E(
                {
                  "background-position": "center",
                  "box-shadow": "0px 0px 4px 0px rgba(116, 115, 115, 0.25)",
                },
                e.style
              );
            },
            onMouseEnter: () => {
              var o;
              t.tipMode === "hover" &&
                (a(!0),
                (o = n == null ? void 0 : n.onMouseEnter) == null || o.call(n));
            },
            onMouseLeave: () => {
              var o;
              t.tipMode === "hover" &&
                (a(!1),
                (o = n == null ? void 0 : n.onMouseLeave) == null || o.call(n));
            },
            onTouchStart: () => {
              var o;
              t.tipMode === "hover" &&
                (a(!0),
                (o = n == null ? void 0 : n.onTouchStart) == null || o.call(n));
            },
            onTouchEnd: () => {
              var o;
              t.tipMode === "hover" &&
                (a(!1),
                (o = n == null ? void 0 : n.onTouchEnd) == null || o.call(n));
            },
            get children() {
              return [
                p(le, {}),
                $(
                  () =>
                    $(() => !!s())() &&
                    p(wt, {
                      get class() {
                        return F(
                          "absolute -top-12 p-2 rounded-md text-primary bg-layer6 after:bg-layer6 after:absolute after:w-2 after:h-2.5 after:-bottom-[0.2rem] after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-z-10 after:rounded-sm",
                          t.tipClass
                        );
                      },
                    })
                ),
              ];
            },
          }
        )
      )
    );
  },
  jt = (n) => p(q, T({ as: te }, n)),
  wt = (n) => p(ce, T({ as: te }, n)),
  qt = (n) => {
    const [t, e] = D(n, ["marks", "class", "value"]);
    return p(
      q,
      T({ as: te }, e, {
        get class() {
          return F("relative w-full", t.class);
        },
        get children() {
          return p(Ne, {
            get each() {
              return t.marks;
            },
            children: (s) => {
              return (
                (a = Pt()),
                Qe(a, s),
                We(
                  (o) => {
                    var c;
                    var b = `calc(${
                        100 *
                        ((v) => {
                          const l = n.marks[0];
                          return (v - l) / (n.marks[n.marks.length - 1] - l);
                        })(s)
                      }%)`,
                      u = F(
                        "absolute -translate-x-1/2",
                        (c = n.value) != null && c.includes(s)
                          ? "text-brand"
                          : "text-secondary"
                      );
                    return (
                      b !== o.e &&
                        ((o.e = b) != null
                          ? a.style.setProperty("left", b)
                          : a.style.removeProperty("left")),
                      u !== o.t && Ze(a, (o.t = u)),
                      o
                    );
                  },
                  { e: void 0, t: void 0 }
                ),
                a
              );
              var a;
            },
          });
        },
      })
    );
  };
export {
  zt as P,
  Yt as S,
  At as a,
  Xt as b,
  Ut as c,
  Kt as d,
  $t as e,
  qt as f,
  wt as g,
  jt as h,
};
