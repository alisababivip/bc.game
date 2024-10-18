var se = Object.defineProperty,
  le = Object.defineProperties;
var de = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var oe = Object.prototype.hasOwnProperty,
  ue = Object.prototype.propertyIsEnumerable;
var j = (t, e, r) =>
    e in t
      ? se(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  R = (t, e) => {
    for (var r in e || (e = {})) oe.call(e, r) && j(t, r, e[r]);
    if ($) for (var r of $(e)) ue.call(e, r) && j(t, r, e[r]);
    return t;
  },
  A = (t, e) => le(t, de(e));
import {
  a2 as J,
  a3 as N,
  $ as p,
  f as v,
  H as B,
  c as d,
  a0 as b,
  l as S,
  o as E,
  S as ce,
  ag as be,
  a4 as Q,
  i as ge,
  a as fe,
  b as ve,
  t as pe,
} from "./manifest-a234c8a0.js";
import { c as me } from "./currency-a0e3a368.js";
import { B as K } from "./Layout-b58c3f24.js";
import { c as h } from "./utils-65805dbc.js";
import {
  d as T,
  e as U,
  u as W,
  f as ye,
  F as Ie,
  c as he,
  a as we,
  b as De,
} from "./QJIB6BDF-1dee7631.js";
import {
  _ as Ce,
  m,
  P as y,
  s as Re,
  e as V,
  v as Se,
  l as H,
  f as w,
  a as ke,
  b as x,
  E as Be,
} from "./index-4897b9da.js";
import { a as xe } from "./FN6EICGO-b0e5a495.js";
Ce(
  {},
  {
    Description: () => T,
    ErrorMessage: () => U,
    Item: () => P,
    ItemControl: () => F,
    ItemDescription: () => ee,
    ItemIndicator: () => L,
    ItemInput: () => q,
    ItemLabel: () => te,
    Label: () => ae,
    RadioGroup: () => Ee,
    Root: () => z,
  }
);
var X = J();
function Y() {
  const t = Q(X);
  if (t === void 0)
    throw new Error(
      "[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component"
    );
  return t;
}
var Z = J();
function D() {
  const t = Q(Z);
  if (t === void 0)
    throw new Error(
      "[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component"
    );
  return t;
}
function P(t) {
  const e = W(),
    r = Y(),
    a = `${e.generateId("item")}-${N()}`,
    s = m({ id: a }, t),
    [i, l] = p(s, ["value", "disabled", "onPointerDown"]),
    [f, u] = v(),
    [n, o] = v(),
    [C, k] = v(),
    [c, g] = v(),
    [I, re] = v(!1),
    G = B(() => r.isSelectedValue(i.value)),
    M = B(() => i.disabled || e.isDisabled() || !1),
    ne = (_) => {
      w(_, i.onPointerDown), I() && _.preventDefault();
    },
    O = B(() =>
      A(R({}, e.dataset()), {
        "data-disabled": M() ? "" : void 0,
        "data-checked": G() ? "" : void 0,
      })
    ),
    ie = {
      value: () => i.value,
      dataset: O,
      isSelected: G,
      isDisabled: M,
      inputId: f,
      labelId: n,
      descriptionId: C,
      inputRef: c,
      select: () => r.setSelectedValue(i.value),
      generateId: ke(() => l.id),
      registerInput: x(u),
      registerLabel: x(o),
      registerDescription: x(k),
      setIsFocused: re,
      setInputRef: g,
    };
  return d(Z.Provider, {
    value: ie,
    get children() {
      return d(y, b({ as: "div", role: "group", onPointerDown: ne }, O, l));
    },
  });
}
function F(t) {
  const e = D(),
    r = m({ id: e.generateId("control") }, t),
    [a, s] = p(r, ["onClick", "onKeyDown"]);
  return d(
    y,
    b(
      {
        as: "div",
        onClick: (i) => {
          var l;
          w(i, a.onClick), e.select(), (l = e.inputRef()) == null || l.focus();
        },
        onKeyDown: (i) => {
          var l;
          w(i, a.onKeyDown),
            i.key === Be.Space &&
              (e.select(), (l = e.inputRef()) == null || l.focus());
        },
      },
      () => e.dataset(),
      s
    )
  );
}
function ee(t) {
  const e = D(),
    r = m({ id: e.generateId("description") }, t);
  return (
    S(() => E(e.registerDescription(r.id))),
    d(
      y,
      b({ as: "div" }, () => e.dataset(), r)
    )
  );
}
function L(t) {
  const e = D(),
    r = m({ id: e.generateId("indicator") }, t),
    [a, s] = p(r, ["ref", "forceMount"]),
    [i, l] = v(),
    { present: f } = Re({
      show: () => a.forceMount || e.isSelected(),
      element: () => {
        var u;
        return (u = i()) != null ? u : null;
      },
    });
  return d(ce, {
    get when() {
      return f();
    },
    get children() {
      return d(
        y,
        b(
          {
            as: "div",
            ref(u) {
              var n = V(l, a.ref);
              typeof n == "function" && n(u);
            },
          },
          () => e.dataset(),
          s
        )
      );
    },
  });
}
function q(t) {
  const e = W(),
    r = Y(),
    a = D(),
    s = m({ id: a.generateId("input") }, t),
    [i, l] = p(s, [
      "ref",
      "style",
      "aria-labelledby",
      "aria-describedby",
      "onChange",
      "onFocus",
      "onBlur",
    ]),
    [f, u] = v(!1);
  return (
    S(
      be(
        [() => a.isSelected(), () => a.value()],
        (n) => {
          if (!n[0] && n[1] === a.value()) return;
          u(!0);
          const o = a.inputRef();
          o == null ||
            o.dispatchEvent(
              new Event("input", { bubbles: !0, cancelable: !0 })
            ),
            o == null ||
              o.dispatchEvent(
                new Event("change", { bubbles: !0, cancelable: !0 })
              );
        },
        { defer: !0 }
      )
    ),
    S(() => E(a.registerInput(l.id))),
    d(
      y,
      b(
        {
          as: "input",
          ref(n) {
            var o = V(a.setInputRef, i.ref);
            typeof o == "function" && o(n);
          },
          type: "radio",
          get name() {
            return e.name();
          },
          get value() {
            return a.value();
          },
          get checked() {
            return a.isSelected();
          },
          get required() {
            return e.isRequired();
          },
          get disabled() {
            return a.isDisabled();
          },
          get readonly() {
            return e.isReadOnly();
          },
          get style() {
            return R(R({}, Se), i.style);
          },
          get "aria-labelledby"() {
            return (
              [
                i["aria-labelledby"],
                a.labelId(),
                i["aria-labelledby"] != null && l["aria-label"] != null
                  ? l.id
                  : void 0,
              ]
                .filter(Boolean)
                .join(" ") || void 0
            );
          },
          get "aria-describedby"() {
            return (
              [i["aria-describedby"], a.descriptionId(), r.ariaDescribedBy()]
                .filter(Boolean)
                .join(" ") || void 0
            );
          },
          onChange: (n) => {
            w(n, i.onChange),
              n.stopPropagation(),
              !f() &&
                (r.setSelectedValue(a.value()),
                (n.target.checked = a.isSelected())),
              u(!1);
          },
          onFocus: (n) => {
            w(n, i.onFocus), a.setIsFocused(!0);
          },
          onBlur: (n) => {
            w(n, i.onBlur), a.setIsFocused(!1);
          },
        },
        () => a.dataset(),
        l
      )
    )
  );
}
function te(t) {
  const e = D(),
    r = m({ id: e.generateId("label") }, t);
  return (
    S(() => E(e.registerLabel(r.id))),
    d(
      y,
      b(
        {
          as: "label",
          get for() {
            return e.inputId();
          },
        },
        () => e.dataset(),
        r
      )
    )
  );
}
function ae(t) {
  return d(ye, b({ as: "span" }, t));
}
function z(t) {
  let e;
  const r = `radiogroup-${N()}`,
    a = m({ id: r, orientation: "vertical" }, t),
    [s, i, l] = p(
      a,
      [
        "ref",
        "value",
        "defaultValue",
        "onChange",
        "orientation",
        "aria-labelledby",
        "aria-describedby",
      ],
      Ie
    ),
    [f, u] = xe({
      value: () => s.value,
      defaultValue: () => s.defaultValue,
      onChange: (c) => {
        var g;
        return (g = s.onChange) == null ? void 0 : g.call(s, c);
      },
    }),
    { formControlContext: n } = he(i);
  we(
    () => e,
    () => {
      var c;
      return u((c = s.defaultValue) != null ? c : "");
    }
  );
  const o = () => n.getAriaDescribedBy(s["aria-describedby"]),
    C = (c) => c === f(),
    k = {
      ariaDescribedBy: o,
      isSelectedValue: C,
      setSelectedValue: (c) => {
        if (!n.isReadOnly() && !n.isDisabled() && (u(c), e))
          for (const g of e.querySelectorAll("[type='radio']")) {
            const I = g;
            I.checked = C(I.value);
          }
      },
    };
  return d(De.Provider, {
    value: n,
    get children() {
      return d(X.Provider, {
        value: k,
        get children() {
          return d(
            y,
            b(
              {
                as: "div",
                ref(c) {
                  var g = V((I) => (e = I), s.ref);
                  typeof g == "function" && g(c);
                },
                role: "radiogroup",
                get id() {
                  return H(i.id);
                },
                get "aria-invalid"() {
                  return n.validationState() === "invalid" || void 0;
                },
                get "aria-required"() {
                  return n.isRequired() || void 0;
                },
                get "aria-disabled"() {
                  return n.isDisabled() || void 0;
                },
                get "aria-readonly"() {
                  return n.isReadOnly() || void 0;
                },
                get "aria-orientation"() {
                  return s.orientation;
                },
                get "aria-labelledby"() {
                  return n.getAriaLabelledBy(
                    H(i.id),
                    l["aria-label"],
                    s["aria-labelledby"]
                  );
                },
                get "aria-describedby"() {
                  return o();
                },
              },
              () => n.dataset(),
              l
            )
          );
        },
      });
    },
  });
}
var Ee = Object.assign(z, {
    Description: T,
    ErrorMessage: U,
    Item: P,
    ItemControl: F,
    ItemDescription: ee,
    ItemIndicator: L,
    ItemInput: q,
    ItemLabel: te,
    Label: ae,
  }),
  Ve = pe("<div>");
const $e = (t) => {
    const [e, r] = p(t, ["class"]);
    return d(
      z,
      b(
        {
          get class() {
            return h("grid gap-2", t.class);
          },
        },
        r
      )
    );
  },
  Pe = me("flex", {
    variants: {
      variant: {
        default: "",
        fill: "bg-layer3 rounded-lg",
        ring: "bg-layer3 p-1 rounded-lg",
      },
    },
    defaultVariants: { variant: "default" },
  }),
  je = (t) => {
    return (
      (e = Ve()),
      ge(e, () => t.children),
      fe(() => ve(e, h(Pe({ variant: t.variant }), t.class))),
      e
    );
    var e;
  },
  Ae = (t) => {
    const [e, r] = p(t, ["class", "children", "size", "variant", "itemClass"]);
    return d(
      P,
      b(
        {
          get class() {
            return h(
              "flex items-center data-[disabled]:cursor-not-allowed",
              { "space-x-2": e.variant === "default" },
              t.class
            );
          },
        },
        r,
        {
          get children() {
            return [
              d(q, {}),
              d(F, {
                get class() {
                  return h("group", { "w-full": e.variant !== "default" });
                },
                as: "button",
                get disabled() {
                  return t.disabled;
                },
                get children() {
                  return [
                    d(K, {
                      get size() {
                        return e.size;
                      },
                      get disabled() {
                        return t.disabled;
                      },
                      get class() {
                        var a;
                        return h(
                          "group-data-[checked]:hidden border-transparent rounded-lg flex-1  active:bg-tab_selected data-[selected]:bg-tab_selected text-secondary data-[selected]:text-primary bg-transparent py-0 w-full",
                          (a = e.itemClass) == null ? void 0 : a.class
                        );
                      },
                      get children() {
                        return e.children;
                      },
                    }),
                    d(L, {
                      as: K,
                      get size() {
                        return e.size;
                      },
                      get disabled() {
                        return t.disabled;
                      },
                      get variant() {
                        return e.variant === "ring" || e.variant === "fill"
                          ? "default"
                          : "outline";
                      },
                      get class() {
                        var a, s;
                        return h(
                          "w-full  rounded-lg bg-tab_selected",
                          (a = e.itemClass) == null ? void 0 : a.class,
                          (s = e.itemClass) == null ? void 0 : s.active
                        );
                      },
                      get children() {
                        return e.children;
                      },
                    }),
                  ];
                },
              }),
            ];
          },
        }
      )
    );
  };
export { $e as R, je as a, Ae as b };
