import {
  a2 as q,
  $ as S,
  l as o,
  o as l,
  c as m,
  a0 as I,
  m as x,
  a3 as E,
  f as v,
  H as F,
  a4 as M,
  S as w,
  ag as A,
} from "./manifest-a234c8a0.js";
import {
  m as u,
  P as B,
  e as O,
  l as r,
  a as j,
  b as g,
} from "./index-4897b9da.js";
import { m as P } from "./currency-a0e3a368.js";
var z = ["id", "name", "validationState", "required", "disabled", "readOnly"];
function G(i) {
  const a = `form-control-${E()}`,
    e = u({ id: a }, i),
    [t, d] = v(),
    [n, p] = v(),
    [c, b] = v(),
    [f, h] = v();
  return {
    formControlContext: {
      name: () => {
        var s;
        return (s = r(e.name)) != null ? s : r(e.id);
      },
      dataset: F(() => ({
        "data-valid": r(e.validationState) === "valid" ? "" : void 0,
        "data-invalid": r(e.validationState) === "invalid" ? "" : void 0,
        "data-required": r(e.required) ? "" : void 0,
        "data-disabled": r(e.disabled) ? "" : void 0,
        "data-readonly": r(e.readOnly) ? "" : void 0,
      })),
      validationState: () => r(e.validationState),
      isRequired: () => r(e.required),
      isDisabled: () => r(e.disabled),
      isReadOnly: () => r(e.readOnly),
      labelId: t,
      fieldId: n,
      descriptionId: c,
      errorMessageId: f,
      getAriaLabelledBy: (s, C, L) => {
        const D = L != null || t() != null;
        return (
          [L, t(), D && C != null ? s : void 0].filter(Boolean).join(" ") ||
          void 0
        );
      },
      getAriaDescribedBy: (s) =>
        [c(), f(), s].filter(Boolean).join(" ") || void 0,
      generateId: j(() => r(e.id)),
      registerLabel: g(d),
      registerField: g(p),
      registerDescription: g(b),
      registerErrorMessage: g(h),
    },
  };
}
var R = q();
function y() {
  const i = M(R);
  if (i === void 0)
    throw new Error(
      "[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component"
    );
  return i;
}
function J(i) {
  const a = y(),
    e = u({ id: a.generateId("description") }, i);
  return (
    o(() => l(a.registerDescription(e.id))),
    m(
      B,
      I({ as: "div" }, () => a.dataset(), e)
    )
  );
}
function K(i) {
  const a = y(),
    e = u({ id: a.generateId("error-message") }, i),
    [t, d] = S(e, ["forceMount"]),
    n = () => a.validationState() === "invalid";
  return (
    o(() => {
      n() && l(a.registerErrorMessage(d.id));
    }),
    m(w, {
      get when() {
        return t.forceMount || n();
      },
      get children() {
        return m(
          B,
          I({ as: "div" }, () => a.dataset(), d)
        );
      },
    })
  );
}
function N(i) {
  let a;
  const e = y(),
    t = u({ id: e.generateId("label") }, i),
    [d, n] = S(t, ["ref"]),
    p = P(
      () => a,
      () => "label"
    );
  return (
    o(() => l(e.registerLabel(n.id))),
    m(
      B,
      I(
        {
          as: "label",
          ref(c) {
            var b = O((f) => (a = f), d.ref);
            typeof b == "function" && b(c);
          },
          get for() {
            return x(() => p() === "label")() ? e.fieldId() : void 0;
          },
        },
        () => e.dataset(),
        n
      )
    )
  );
}
var Q = ["id", "aria-label", "aria-labelledby", "aria-describedby"];
function T(i) {
  const a = y(),
    e = u({ id: a.generateId("field") }, i);
  return (
    o(() => l(a.registerField(r(e.id)))),
    {
      fieldProps: {
        id: () => r(e.id),
        ariaLabel: () => r(e["aria-label"]),
        ariaLabelledBy: () =>
          a.getAriaLabelledBy(
            r(e.id),
            r(e["aria-label"]),
            r(e["aria-labelledby"])
          ),
        ariaDescribedBy: () => a.getAriaDescribedBy(r(e["aria-describedby"])),
      },
    }
  );
}
function U(i, a) {
  o(
    A(i, (e) => {
      if (e == null) return;
      const t = (function (d) {
        return (function (n) {
          return n.matches("textarea, input, select, button");
        })(d)
          ? d.form
          : d.closest("form");
      })(e);
      t != null &&
        (t.addEventListener("reset", a, { passive: !0 }),
        l(() => {
          t.removeEventListener("reset", a);
        }));
    })
  );
}
export {
  z as F,
  U as a,
  R as b,
  G as c,
  J as d,
  K as e,
  N as f,
  Q as g,
  T as h,
  y as u,
};
