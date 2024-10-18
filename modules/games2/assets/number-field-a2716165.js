var He = Object.defineProperty,
  Ke = Object.defineProperties;
var _e = Object.getOwnPropertyDescriptors;
var ue = Object.getOwnPropertySymbols;
var Ge = Object.prototype.hasOwnProperty,
  Ue = Object.prototype.propertyIsEnumerable;
var G = (a, t, e) =>
    t in a
      ? He(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (a[t] = e),
  k = (a, t) => {
    for (var e in t || (t = {})) Ge.call(t, e) && G(a, e, t[e]);
    if (ue) for (var e of ue(t)) Ue.call(t, e) && G(a, e, t[e]);
    return a;
  },
  z = (a, t) => Ke(a, _e(t));
var $ = (a, t, e) => (G(a, typeof t != "symbol" ? t + "" : t, e), e);
import {
  $ as y,
  a1 as fe,
  a0 as f,
  t as W,
  H as X,
  l as Z,
  ag as J,
  c as g,
  a2 as he,
  a3 as ve,
  f as de,
  ax as Y,
  v as Xe,
  m as be,
  a as Ye,
  aA as Ze,
  a4 as ye,
} from "./manifest-a234c8a0.js";
import { c as C } from "./utils-65805dbc.js";
import { c as xe, B as Je } from "./currency-a0e3a368.js";
import {
  F as Ve,
  c as we,
  a as De,
  b as Ne,
  d as j,
  e as B,
  f as T,
  u as H,
  g as Ie,
  h as Se,
} from "./QJIB6BDF-1dee7631.js";
import { a as Ce } from "./FN6EICGO-b0e5a495.js";
import {
  v as Re,
  m as F,
  P as M,
  f as S,
  _ as Te,
  e as E,
  l as q,
  r as Q,
  a as Fe,
} from "./index-4897b9da.js";
import { $ as Oe, u as Qe } from "./LR7LBJN3-fced4fb5.js";
const et = new RegExp("^.*\\(.*\\).*$"),
  tt = ["latn", "arab", "hanidec"];
class Pe {
  parse(t) {
    return U(this.locale, this.options, t).parse(t);
  }
  isValidPartialNumber(t, e, r) {
    return U(this.locale, this.options, t).isValidPartialNumber(t, e, r);
  }
  getNumberingSystem(t) {
    return U(this.locale, this.options, t).options.numberingSystem;
  }
  constructor(t, e = {}) {
    (this.locale = t), (this.options = e);
  }
}
const ce = new Map();
function U(a, t, e) {
  let r = me(a, t);
  if (!a.includes("-nu-") && !r.isValidPartialNumber(e)) {
    for (let n of tt)
      if (n !== r.options.numberingSystem) {
        let o = me(a + (a.includes("-u-") ? "-nu-" : "-u-nu-") + n, t);
        if (o.isValidPartialNumber(e)) return o;
      }
  }
  return r;
}
function me(a, t) {
  let e =
      a +
      (t
        ? Object.entries(t)
            .sort((n, o) => (n[0] < o[0] ? -1 : 1))
            .join()
        : ""),
    r = ce.get(e);
  return r || ((r = new at(a, t)), ce.set(e, r)), r;
}
class at {
  parse(t) {
    let e = this.sanitize(t);
    if (
      (this.symbols.group && (e = A(e, this.symbols.group, "")),
      this.symbols.decimal && (e = e.replace(this.symbols.decimal, ".")),
      this.symbols.minusSign && (e = e.replace(this.symbols.minusSign, "-")),
      (e = e.replace(this.symbols.numeral, this.symbols.index)),
      this.options.style === "percent")
    ) {
      let i = e.indexOf("-");
      e = e.replace("-", "");
      let l = e.indexOf(".");
      l === -1 && (l = e.length),
        (e = e.replace(".", "")),
        (e =
          l - 2 == 0
            ? `0.${e}`
            : l - 2 == -1
            ? `0.0${e}`
            : l - 2 == -2
            ? "0.00"
            : `${e.slice(0, l - 2)}.${e.slice(l - 2)}`),
        i > -1 && (e = `-${e}`);
    }
    let r = e ? +e : NaN;
    if (isNaN(r)) return NaN;
    if (this.options.style === "percent") {
      var n, o;
      let i = z(k({}, this.options), {
        style: "decimal",
        minimumFractionDigits: Math.min(
          ((n = this.options.minimumFractionDigits) !== null && n !== void 0
            ? n
            : 0) + 2,
          20
        ),
        maximumFractionDigits: Math.min(
          ((o = this.options.maximumFractionDigits) !== null && o !== void 0
            ? o
            : 0) + 2,
          20
        ),
      });
      return new Pe(this.locale, i).parse(new Oe(this.locale, i).format(r));
    }
    return (
      this.options.currencySign === "accounting" && et.test(t) && (r *= -1), r
    );
  }
  sanitize(t) {
    return (
      (t = t.replace(this.symbols.literals, "")),
      this.symbols.minusSign && (t = t.replace("-", this.symbols.minusSign)),
      this.options.numberingSystem === "arab" &&
        (this.symbols.decimal &&
          (t = (t = t.replace(",", this.symbols.decimal)).replace(
            String.fromCharCode(1548),
            this.symbols.decimal
          )),
        this.symbols.group && (t = A(t, ".", this.symbols.group))),
      this.options.locale === "fr-FR" &&
        (t = A(t, ".", String.fromCharCode(8239))),
      t
    );
  }
  isValidPartialNumber(t, e = -1 / 0, r = 1 / 0) {
    return (
      (t = this.sanitize(t)),
      this.symbols.minusSign && t.startsWith(this.symbols.minusSign) && e < 0
        ? (t = t.slice(this.symbols.minusSign.length))
        : this.symbols.plusSign &&
          t.startsWith(this.symbols.plusSign) &&
          r > 0 &&
          (t = t.slice(this.symbols.plusSign.length)),
      (!this.symbols.group || !t.startsWith(this.symbols.group)) &&
        !(
          this.symbols.decimal &&
          t.indexOf(this.symbols.decimal) > -1 &&
          this.options.maximumFractionDigits === 0
        ) &&
        (this.symbols.group && (t = A(t, this.symbols.group, "")),
        (t = t.replace(this.symbols.numeral, "")),
        this.symbols.decimal && (t = t.replace(this.symbols.decimal, "")),
        t.length === 0)
    );
  }
  constructor(t, e = {}) {
    var r;
    (this.locale = t),
      (this.formatter = new Intl.NumberFormat(t, e)),
      (this.options = this.formatter.resolvedOptions()),
      (this.symbols = (function (n, o, i, l) {
        var u, d, x, p;
        let h = new Intl.NumberFormat(
            n,
            z(k({}, i), {
              minimumSignificantDigits: 1,
              maximumSignificantDigits: 21,
            })
          ),
          V = h.formatToParts(-10000.111),
          O = h.formatToParts(10000.111),
          K = nt.map((m) => h.formatToParts(m));
        var D;
        let _ =
            (D =
              (u = V.find((m) => m.type === "minusSign")) === null ||
              u === void 0
                ? void 0
                : u.value) !== null && D !== void 0
              ? D
              : "-",
          b =
            (d = O.find((m) => m.type === "plusSign")) === null || d === void 0
              ? void 0
              : d.value;
        b ||
          ((l == null ? void 0 : l.signDisplay) !== "exceptZero" &&
            (l == null ? void 0 : l.signDisplay) !== "always") ||
          (b = "+");
        let L = new Intl.NumberFormat(
            n,
            z(k({}, i), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          ).formatToParts(0.001),
          s =
            (x = L.find((m) => m.type === "decimal")) === null || x === void 0
              ? void 0
              : x.value,
          c =
            (p = V.find((m) => m.type === "group")) === null || p === void 0
              ? void 0
              : p.value,
          v = V.filter((m) => !ge.has(m.type)).map((m) => pe(m.value)),
          w = K.flatMap((m) =>
            m.filter((I) => !ge.has(I.type)).map((I) => pe(I.value))
          ),
          N = [...new Set([...v, ...w])].sort((m, I) => I.length - m.length),
          R =
            N.length === 0
              ? new RegExp("[\\p{White_Space}]", "gu")
              : new RegExp(`${N.join("|")}|[\\p{White_Space}]`, "gu"),
          oe = [
            ...new Intl.NumberFormat(i.locale, { useGrouping: !1 }).format(
              9876543210
            ),
          ].reverse(),
          je = new Map(oe.map((m, I) => [m, I])),
          Be = new RegExp(`[${oe.join("")}]`, "g");
        return {
          minusSign: _,
          plusSign: b,
          decimal: s,
          group: c,
          literals: R,
          numeral: Be,
          index: (m) => String(je.get(m)),
        };
      })(t, this.formatter, this.options, e)),
      this.options.style === "percent" &&
        (((r = this.options.minimumFractionDigits) !== null && r !== void 0
          ? r
          : 0) > 18 ||
          this.options.maximumFractionDigits);
  }
}
const ge = new Set([
    "decimal",
    "fraction",
    "integer",
    "minusSign",
    "plusSign",
    "group",
  ]),
  nt = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function A(a, t, e) {
  return a.replaceAll ? a.replaceAll(t, e) : a.split(t).join(e);
}
function pe(a) {
  return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var rt = W("<label>");
const ee = xe(
    "text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-40 text-secondary",
    {
      variants: {
        variant: {
          label: "data-[invalid]:text-secondary",
          description: "text-secondary text-xs",
          error: "font-semibold text-error text-xs",
        },
      },
      defaultVariants: { variant: "label" },
    }
  ),
  wt = (a) => {
    const [, t] = y(a, ["class"]);
    return (
      (e = rt()),
      fe(
        e,
        f(
          {
            get class() {
              return C(ee(), a.class);
            },
          },
          t
        ),
        !1,
        !1
      ),
      e
    );
    var e;
  };
var Me = 7e3,
  P = null,
  Dt = "data-live-announcer",
  it = class {
    constructor() {
      $(this, "node");
      $(this, "assertiveLog");
      $(this, "politeLog");
      (this.node = document.createElement("div")),
        (this.node.dataset.liveAnnouncer = "true"),
        Object.assign(this.node.style, Re),
        (this.assertiveLog = this.createLog("assertive")),
        this.node.appendChild(this.assertiveLog),
        (this.politeLog = this.createLog("polite")),
        this.node.appendChild(this.politeLog),
        document.body.prepend(this.node);
    }
    createLog(a) {
      const t = document.createElement("div");
      return (
        t.setAttribute("role", "log"),
        t.setAttribute("aria-live", a),
        t.setAttribute("aria-relevant", "additions"),
        t
      );
    }
    destroy() {
      this.node && (document.body.removeChild(this.node), (this.node = null));
    }
    announce(a, t = "assertive", e = Me) {
      if (!this.node) return;
      const r = document.createElement("div");
      (r.textContent = a),
        t === "assertive"
          ? this.assertiveLog.appendChild(r)
          : this.politeLog.appendChild(r),
        a !== "" &&
          setTimeout(() => {
            r.remove();
          }, e);
    }
    clear(a) {
      this.node &&
        ((a && a !== "assertive") || (this.assertiveLog.innerHTML = ""),
        (a && a !== "polite") || (this.politeLog.innerHTML = ""));
    }
  },
  st = { empty: "Empty" };
function lt(a) {
  const t = F({ translations: st }, a),
    [e, r] = y(t, [
      "translations",
      "value",
      "textValue",
      "minValue",
      "maxValue",
      "validationState",
      "onIncrement",
      "onIncrementPage",
      "onDecrement",
      "onDecrementPage",
      "onDecrementToMin",
      "onIncrementToMax",
      "onKeyDown",
      "onFocus",
      "onBlur",
    ]);
  let n = !1;
  const o = X(() => {
    var i;
    return e.textValue === ""
      ? (i = e.translations) == null
        ? void 0
        : i.empty
      : (e.textValue || `${e.value}`).replace("-", "−");
  });
  return (
    Z(
      J(o, (i) => {
        var l;
        n &&
          ((l = "assertive"),
          P && P.clear(l),
          (function (u, d = "assertive", x = Me) {
            P || (P = new it()), P.announce(u, d, x);
          })(i != null ? i : "", "assertive"));
      })
    ),
    g(
      M,
      f(
        {
          as: "div",
          role: "spinbutton",
          get "aria-valuenow"() {
            return e.value == null || Number.isNaN(e.value) ? void 0 : e.value;
          },
          get "aria-valuetext"() {
            return o();
          },
          get "aria-valuemin"() {
            return e.minValue;
          },
          get "aria-valuemax"() {
            return e.maxValue;
          },
          get "aria-required"() {
            return a.required || void 0;
          },
          get "aria-disabled"() {
            return a.disabled || void 0;
          },
          get "aria-readonly"() {
            return a.readOnly || void 0;
          },
          get "aria-invalid"() {
            return e.validationState === "invalid" || void 0;
          },
          onKeyDown: (i) => {
            if (
              (S(i, e.onKeyDown),
              !(i.ctrlKey || i.metaKey || i.shiftKey || i.altKey || a.readOnly))
            )
              switch (i.key) {
                case "PageUp":
                  if (e.onIncrementPage) {
                    i.preventDefault(), e.onIncrementPage();
                    break;
                  }
                case "ArrowUp":
                case "Up":
                  e.onIncrement && (i.preventDefault(), e.onIncrement());
                  break;
                case "PageDown":
                  if (e.onDecrementPage) {
                    i.preventDefault(), e.onDecrementPage();
                    break;
                  }
                case "ArrowDown":
                case "Down":
                  e.onDecrement && (i.preventDefault(), e.onDecrement());
                  break;
                case "Home":
                  e.onDecrementToMin &&
                    (i.preventDefault(), e.onDecrementToMin());
                  break;
                case "End":
                  e.onIncrementToMax &&
                    (i.preventDefault(), e.onIncrementToMax());
              }
          },
          onFocus: (i) => {
            S(i, e.onFocus), (n = !0);
          },
          onBlur: (i) => {
            S(i, e.onBlur), (n = !1);
          },
        },
        r
      )
    )
  );
}
var ot = W("<div aria-hidden=true><input type=text tabindex=-1>");
Te(
  {},
  {
    DecrementTrigger: () => ae,
    Description: () => j,
    ErrorMessage: () => B,
    HiddenInput: () => ke,
    IncrementTrigger: () => ne,
    Input: () => re,
    Label: () => T,
    NumberField: () => ut,
    Root: () => ie,
  }
);
var Ee = he();
function te() {
  const a = ye(Ee);
  if (a === void 0)
    throw new Error(
      "[kobalte]: `useNumberFieldContext` must be used within a `NumberField` component"
    );
  return a;
}
function Le(a) {
  const t = H(),
    e = te(),
    [r, n] = y(a, ["numberFieldVaryType", "onClick"]);
  return g(
    Je,
    f(
      {
        tabIndex: -1,
        get disabled() {
          return (
            t.isDisabled() ||
            e.rawValue() ===
              (r.numberFieldVaryType === "increment"
                ? e.maxValue()
                : e.minValue())
          );
        },
        get "aria-controls"() {
          return t.fieldId();
        },
        onClick: (o) => {
          var i;
          S(o, r.onClick),
            e.varyValue(
              e.step() * (r.numberFieldVaryType === "increment" ? 1 : -1)
            ),
            (i = e.inputRef()) == null || i.focus();
        },
      },
      n
    )
  );
}
function ae(a) {
  return g(Le, f({ numberFieldVaryType: "decrement" }, a));
}
function ke(a) {
  const t = te(),
    [e, r] = y(a, ["ref", "onChange"]),
    n = H();
  return (() => {
    var o = ot(),
      i = o.firstChild;
    i.addEventListener("change", (u) => {
      S(u, e.onChange),
        Y(() => {
          t.setValue(u.target.value), t.format();
        });
    });
    var l = E(t.setHiddenInputRef, e.ref);
    return (
      typeof l == "function" && Xe(l, i),
      i.style.setProperty("font-size", "16px"),
      fe(
        i,
        f(
          {
            get name() {
              return n.name();
            },
            get value() {
              return be(() => !!Number.isNaN(t.rawValue()))()
                ? ""
                : t.rawValue();
            },
            get required() {
              return n.isRequired();
            },
            get disabled() {
              return n.isDisabled();
            },
            get readOnly() {
              return n.isReadOnly();
            },
          },
          r
        ),
        !1,
        !1
      ),
      Ye((u) => Ze(o, Re, u)),
      o
    );
  })();
}
function ne(a) {
  return g(Le, f({ numberFieldVaryType: "increment" }, a));
}
function re(a) {
  const t = H(),
    e = te(),
    r = F(
      {
        id: e.generateId("input"),
        inputMode: "decimal",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: !1,
      },
      a
    ),
    [n, o, i] = y(r, ["ref", "onInput", "onChange", "onWheel", "as"], Ie),
    { fieldProps: l } = Se(o);
  return g(
    lt,
    f(
      {
        type: "text",
        get id() {
          return l.id();
        },
        ref(u) {
          var d = E(e.setInputRef, n.ref);
          typeof d == "function" && d(u);
        },
        get value() {
          return e.value();
        },
        get validationState() {
          return t.validationState();
        },
        get required() {
          return t.isRequired();
        },
        get disabled() {
          return t.isDisabled();
        },
        get readOnly() {
          return t.isReadOnly();
        },
        get textValue() {
          return e.textValue();
        },
        get minValue() {
          return e.minValue();
        },
        get maxValue() {
          return e.maxValue();
        },
        onIncrement: () => {
          e.varyValue(e.step());
        },
        onIncrementPage: () => {
          e.varyValue(e.largeStep());
        },
        onIncrementToMax: () => {
          e.setValue(e.maxValue()), e.format();
        },
        onDecrement: () => {
          e.varyValue(-e.step());
        },
        onDecrementPage: () => {
          e.varyValue(-e.largeStep());
        },
        onDecrementToMin: () => {
          e.setValue(e.minValue()), e.format();
        },
        get translations() {
          return e.translations();
        },
        onChange: (u) => {
          S(u, n.onChange), e.format();
        },
        onWheel: (u) => {
          S(u, n.onWheel),
            e.changeOnWheel() &&
              document.activeElement === e.inputRef() &&
              (u.preventDefault(),
              u.deltaY < 0 ? e.varyValue(e.step()) : e.varyValue(-e.step()));
        },
        get onInput() {
          return Q([n.onInput, e.onInput]);
        },
        get "aria-label"() {
          return l.ariaLabel();
        },
        get "aria-labelledby"() {
          return l.ariaLabelledBy();
        },
        get "aria-describedby"() {
          return l.ariaDescribedBy();
        },
      },
      () => t.dataset(),
      {
        as: (u) =>
          g(
            M,
            f(
              {
                get as() {
                  return n.as || "input";
                },
                get value() {
                  return be(() => !!Number.isNaN(e.rawValue()))()
                    ? ""
                    : e.formatNumber(e.rawValue());
                },
                get required() {
                  return t.isRequired();
                },
                get disabled() {
                  return t.isDisabled();
                },
                get readOnly() {
                  return t.isReadOnly();
                },
              },
              u,
              i
            )
          ),
      }
    )
  );
}
function ie(a) {
  var L;
  let t;
  const e = `NumberField-${ve()}`,
    r = F(
      {
        id: e,
        format: !0,
        minValue: Number.MIN_SAFE_INTEGER,
        maxValue: Number.MAX_SAFE_INTEGER,
        step: 1,
        changeOnWheel: !0,
      },
      a
    ),
    [n, o, i] = y(
      r,
      [
        "ref",
        "value",
        "defaultValue",
        "onChange",
        "rawValue",
        "onRawValueChange",
        "translations",
        "format",
        "formatOptions",
        "textValue",
        "minValue",
        "maxValue",
        "step",
        "largeStep",
        "changeOnWheel",
        "translations",
        "allowedInput",
      ],
      Ve
    ),
    { locale: l } = Qe(),
    u = X(() => new Pe(l(), n.formatOptions)),
    d = X(() => new Oe(l(), n.formatOptions)),
    x = (s) =>
      n.format && typeof s != "number"
        ? u().parse(s != null ? s : "")
        : Number(s != null ? s : ""),
    [p, h] = Ce({
      value: () => n.value,
      defaultValue: () => {
        var s;
        return (s = n.defaultValue) != null ? s : n.rawValue;
      },
      onChange: (s) => {
        var c, v;
        (c = n.onChange) == null ||
          c.call(n, typeof s == "number" ? d().format(s) : s),
          (v = n.onRawValueChange) == null || v.call(n, x(s));
      },
    });
  (L = n.onRawValueChange) == null || L.call(n, x(p()));
  const { formControlContext: V } = we(o);
  De(
    () => t,
    () => {
      var s;
      h((s = n.defaultValue) != null ? s : "");
    }
  );
  const [O, K] = de(),
    [D, _] = de(),
    b = {
      value: p,
      setValue: h,
      rawValue: () => x(p()),
      generateId: Fe(() => q(o.id)),
      formatNumber: (s) => d().format(s),
      format: () => {
        var v;
        if (!n.format) return;
        let s = b.rawValue();
        if (Number.isNaN(s))
          return (
            D() && (D().value = ""),
            void ((v = n.onRawValueChange) == null ? void 0 : v.call(n, s))
          );
        b.minValue() && (s = Math.max(s, b.minValue())),
          b.maxValue() && (s = Math.min(s, b.maxValue()));
        const c = b.formatNumber(s);
        p() != c && h(c),
          O() && (O().value = c),
          D() && (D().value = String(s));
      },
      onInput: (s) => {
        if (V.isReadOnly() || V.isDisabled()) return;
        const c = s.target;
        let v = c.selectionStart;
        var w, N;
        (N = c.value),
          (
            n.format && typeof N != "number"
              ? u().isValidPartialNumber(
                  N != null ? N : "",
                  r.minValue,
                  r.maxValue
                )
              : !Number.isNaN(Number(N))
          )
            ? (s.inputType !== "insertText" ||
                ((w = s.data || ""),
                n.allowedInput === void 0 || n.allowedInput.test(w))) &&
              h(c.value)
            : s.inputType === "deleteContentBackward" && v !== null && (v += 1);
        const R = p();
        R !== c.value &&
          ((c.value = String(R != null ? R : "")),
          v !== null && ((c.selectionStart = v), (c.selectionEnd = v)));
      },
      textValue: () => n.textValue,
      minValue: () => n.minValue,
      maxValue: () => n.maxValue,
      step: () => n.step,
      largeStep: () => {
        var s;
        return (s = n.largeStep) != null ? s : 10 * n.step;
      },
      changeOnWheel: () => n.changeOnWheel,
      translations: () => n.translations,
      inputRef: O,
      setInputRef: K,
      hiddenInputRef: D,
      setHiddenInputRef: _,
      varyValue: (s) => {
        var v;
        let c = (v = b.rawValue()) != null ? v : 0;
        Number.isNaN(c) && (c = 0),
          Y(() => {
            let w = c;
            c % 1 == 0 ? (w += s) : (w = s > 0 ? Math.ceil(w) : Math.floor(w)),
              b.setValue(w),
              b.format();
          });
      },
    };
  return (
    Z(
      J(
        () => n.rawValue,
        (s) => {
          if (s !== b.rawValue()) {
            if (Number.isNaN(s)) return;
            Y(() => {
              h(s != null ? s : ""), b.format();
            });
          }
        },
        { defer: !0 }
      )
    ),
    g(Ne.Provider, {
      value: V,
      get children() {
        return g(Ee.Provider, {
          value: b,
          get children() {
            return g(
              M,
              f(
                {
                  as: "div",
                  ref(s) {
                    var c = E((v) => (t = v), n.ref);
                    typeof c == "function" && c(s);
                  },
                  role: "group",
                  get id() {
                    return q(o.id);
                  },
                },
                () => V.dataset(),
                i
              )
            );
          },
        });
      },
    })
  );
}
var ut = Object.assign(ie, {
  Description: j,
  ErrorMessage: B,
  HiddenInput: ke,
  Input: re,
  IncrementTrigger: ne,
  DecrementTrigger: ae,
  Label: T,
});
Te(
  {},
  {
    Description: () => j,
    ErrorMessage: () => B,
    Input: () => se,
    Label: () => T,
    Root: () => le,
    TextArea: () => qe,
    TextField: () => dt,
  }
);
var ze = he();
function $e() {
  const a = ye(ze);
  if (a === void 0)
    throw new Error(
      "[kobalte]: `useTextFieldContext` must be used within a `TextField` component"
    );
  return a;
}
function se(a) {
  return g(Ae, f({ type: "text" }, a));
}
function Ae(a) {
  const t = H(),
    e = $e(),
    r = F({ id: e.generateId("input") }, a),
    [n, o, i] = y(r, ["onInput"], Ie),
    { fieldProps: l } = Se(o);
  return g(
    M,
    f(
      {
        as: "input",
        get id() {
          return l.id();
        },
        get name() {
          return t.name();
        },
        get value() {
          return e.value();
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
        get "aria-label"() {
          return l.ariaLabel();
        },
        get "aria-labelledby"() {
          return l.ariaLabelledBy();
        },
        get "aria-describedby"() {
          return l.ariaDescribedBy();
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
        get onInput() {
          return Q([n.onInput, e.onInput]);
        },
      },
      () => t.dataset(),
      i
    )
  );
}
function le(a) {
  let t;
  const e = `textfield-${ve()}`,
    r = F({ id: e }, a),
    [n, o, i] = y(r, ["ref", "value", "defaultValue", "onChange"], Ve),
    [l, u] = Ce({
      value: () => n.value,
      defaultValue: () => n.defaultValue,
      onChange: (p) => {
        var h;
        return (h = n.onChange) == null ? void 0 : h.call(n, p);
      },
    }),
    { formControlContext: d } = we(o);
  De(
    () => t,
    () => {
      var p;
      return u((p = n.defaultValue) != null ? p : "");
    }
  );
  const x = {
    value: l,
    generateId: Fe(() => q(o.id)),
    onInput: (p) => {
      var V;
      if (d.isReadOnly() || d.isDisabled()) return;
      const h = p.target;
      u(h.value), (h.value = (V = l()) != null ? V : "");
    },
  };
  return g(Ne.Provider, {
    value: d,
    get children() {
      return g(ze.Provider, {
        value: x,
        get children() {
          return g(
            M,
            f(
              {
                as: "div",
                ref(p) {
                  var h = E((V) => (t = V), n.ref);
                  typeof h == "function" && h(p);
                },
                role: "group",
                get id() {
                  return q(o.id);
                },
              },
              () => d.dataset(),
              i
            )
          );
        },
      });
    },
  });
}
function qe(a) {
  let t;
  const e = $e(),
    r = F({ id: e.generateId("textarea") }, a),
    [n, o] = y(r, ["ref", "autoResize", "submitOnEnter", "onKeyPress"]);
  Z(
    J([() => t, () => n.autoResize, () => e.value()], ([l, u]) => {
      l &&
        u &&
        (function (d) {
          const x = d.style.alignSelf,
            p = d.style.overflow;
          "MozAppearance" in d.style || (d.style.overflow = "hidden"),
            (d.style.alignSelf = "start"),
            (d.style.height = "auto"),
            (d.style.height = `${
              d.scrollHeight + (d.offsetHeight - d.clientHeight)
            }px`),
            (d.style.overflow = p),
            (d.style.alignSelf = x);
        })(l);
    })
  );
  const i = (l) => {
    t &&
      n.submitOnEnter &&
      l.key === "Enter" &&
      !l.shiftKey &&
      t.form &&
      (t.form.requestSubmit(), l.preventDefault());
  };
  return g(
    Ae,
    f(
      {
        as: "textarea",
        get "aria-multiline"() {
          return n.submitOnEnter ? "false" : void 0;
        },
        get onKeyPress() {
          return Q([n.onKeyPress, i]);
        },
        ref(l) {
          var u = E((d) => (t = d), n.ref);
          typeof u == "function" && u(l);
        },
      },
      o
    )
  );
}
var dt = Object.assign(le, {
  Description: j,
  ErrorMessage: B,
  Input: se,
  Label: T,
  TextArea: qe,
});
const We = xe(
    "flex w-full border border-input data-[invalid]:border-error bg-layer2 px-4 py-2 text-primary font-semibold file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-quarterary focus-visible:outline-none focus-visible:border-brand disabled:cursor-not-allowed disabled:opacity-40",
    {
      variants: {
        size: {
          xs: "h-6 text-xs rounded-md",
          sm: "h-8 text-sm rounded-md",
          default: "h-10 rounded-xl",
          lg: "h-12 rounded-xl",
        },
      },
      defaultVariants: { size: "default" },
    }
  ),
  Nt = le,
  It = (a) => {
    const [t, e] = y(a, ["type", "class", "size"]);
    return g(
      se,
      f(
        {
          get type() {
            return t.type;
          },
          get class() {
            return C(We({ size: a.size }), t.class);
          },
        },
        e
      )
    );
  },
  St = (a) => {
    const [t, e] = y(a, ["class"]);
    return g(
      T,
      f(
        {
          get class() {
            return C(ee(), t.class);
          },
        },
        e
      )
    );
  };
var ct = W(
    '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class=size-4><path d="M6 15l6 -6l6 6">'
  ),
  mt = W(
    '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class=size-4><path d="M6 9l6 6l6 -6">'
  );
const Ct = ie,
  Rt = (a) => {
    const [t, e] = y(a, ["class"]);
    return g(
      T,
      f(
        {
          get class() {
            return C(ee(), "px-1 leading-4", t.class);
          },
        },
        e
      )
    );
  },
  gt = We,
  Tt = (a) => {
    const [t, e] = y(a, ["class", "size"]);
    return g(
      re,
      f(
        {
          get class() {
            return C(gt({ size: t.size }), t.class);
          },
        },
        e
      )
    );
  },
  Ft = (a) => {
    const [t, e] = y(a, ["class", "children"]);
    return g(
      ne,
      f(
        {
          get class() {
            return C(
              "absolute right-1.5 top-1 inline-flex size-4 items-center justify-center text-secondary opacity-30 hover:opacity-100 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed",
              t.class
            );
          },
        },
        e,
        {
          get children() {
            var r;
            return (r = t.children) != null ? r : ct();
          },
        }
      )
    );
  },
  Ot = (a) => {
    const [t, e] = y(a, ["class", "children"]);
    return g(
      ae,
      f(
        {
          get class() {
            return C(
              "absolute bottom-1 right-1.5 inline-flex size-4 items-center justify-center text-secondary opacity-30 hover:opacity-100 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed",
              t.class
            );
          },
        },
        e,
        {
          get children() {
            var r;
            return (r = t.children) != null ? r : mt();
          },
        }
      )
    );
  };
export {
  Dt as D,
  wt as L,
  Ct as N,
  Nt as T,
  Rt as a,
  St as b,
  It as c,
  Ot as d,
  Ft as e,
  Tt as f,
  ee as l,
};
