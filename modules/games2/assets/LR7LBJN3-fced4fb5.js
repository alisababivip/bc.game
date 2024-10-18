var S = Object.defineProperty,
  T = Object.defineProperties;
var j = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty,
  P = Object.prototype.propertyIsEnumerable;
var D = (n, t, e) =>
    t in n
      ? S(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[t] = e),
  c = (n, t) => {
    for (var e in t || (t = {})) I.call(t, e) && D(n, e, t[e]);
    if (v) for (var e of v(t)) P.call(t, e) && D(n, e, t[e]);
    return n;
  },
  m = (n, t) => T(n, j(t));
import {
  a2 as L,
  a4 as M,
  f as $,
  H as h,
  ah as x,
  n as z,
  o as k,
} from "./manifest-a234c8a0.js";
import { l as A } from "./index-4897b9da.js";
let g = new Map(),
  y = !1;
try {
  y =
    new Intl.NumberFormat("de-DE", {
      signDisplay: "exceptZero",
    }).resolvedOptions().signDisplay === "exceptZero";
} catch (n) {}
let d = !1;
try {
  d =
    new Intl.NumberFormat("de-DE", {
      style: "unit",
      unit: "degree",
    }).resolvedOptions().style === "unit";
} catch (n) {}
const F = {
  degree: {
    narrow: { default: "°", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " °" },
  },
};
class N {
  format(t) {
    let e = "";
    if (
      ((e =
        y || this.options.signDisplay == null
          ? this.numberFormatter.format(t)
          : (function (r, i, o) {
              if (i === "auto") return r.format(o);
              if (i === "never") return r.format(Math.abs(o));
              {
                let s = !1;
                if (
                  (i === "always"
                    ? (s = o > 0 || Object.is(o, 0))
                    : i === "exceptZero" &&
                      (Object.is(o, -0) || Object.is(o, 0)
                        ? (o = Math.abs(o))
                        : (s = o > 0)),
                  s)
                ) {
                  let f = r.format(-o),
                    u = r.format(o),
                    l = f.replace(u, "").replace(/\u200e|\u061C/, "");
                  return f.replace(u, "!!!").replace(l, "+").replace("!!!", u);
                }
                return r.format(o);
              }
            })(this.numberFormatter, this.options.signDisplay, t)),
      this.options.style === "unit" && !d)
    ) {
      var a;
      let {
        unit: r,
        unitDisplay: i = "short",
        locale: o,
      } = this.resolvedOptions();
      if (!r) return e;
      let s = (a = F[r]) === null || a === void 0 ? void 0 : a[i];
      e += s[o] || s.default;
    }
    return e;
  }
  formatToParts(t) {
    return this.numberFormatter.formatToParts(t);
  }
  formatRange(t, e) {
    if (typeof this.numberFormatter.formatRange == "function")
      return this.numberFormatter.formatRange(t, e);
    if (e < t) throw new RangeError("End date must be >= start date");
    return `${this.format(t)} – ${this.format(e)}`;
  }
  formatRangeToParts(t, e) {
    if (typeof this.numberFormatter.formatRangeToParts == "function")
      return this.numberFormatter.formatRangeToParts(t, e);
    if (e < t) throw new RangeError("End date must be >= start date");
    let a = this.numberFormatter.formatToParts(t),
      r = this.numberFormatter.formatToParts(e);
    return [
      ...a.map((i) => m(c({}, i), { source: "startRange" })),
      { type: "literal", value: " – ", source: "shared" },
      ...r.map((i) => m(c({}, i), { source: "endRange" })),
    ];
  }
  resolvedOptions() {
    let t = this.numberFormatter.resolvedOptions();
    return (
      y ||
        this.options.signDisplay == null ||
        (t = m(c({}, t), { signDisplay: this.options.signDisplay })),
      d ||
        this.options.style !== "unit" ||
        (t = m(c({}, t), {
          style: "unit",
          unit: this.options.unit,
          unitDisplay: this.options.unitDisplay,
        })),
      t
    );
  }
  constructor(t, e = {}) {
    (this.numberFormatter = (function (a, r = {}) {
      let { numberingSystem: i } = r;
      if (
        (i &&
          a.includes("-nu-") &&
          (a.includes("-u-") || (a += "-u-"), (a += `-nu-${i}`)),
        r.style === "unit" && !d)
      ) {
        var o;
        let { unit: u, unitDisplay: l = "short" } = r;
        if (!u)
          throw new Error('unit option must be provided with style: "unit"');
        if (!(!((o = F[u]) === null || o === void 0) && o[l]))
          throw new Error(`Unsupported unit ${u} with unitDisplay = ${l}`);
        r = m(c({}, r), { style: "decimal" });
      }
      let s =
        a +
        (r
          ? Object.entries(r)
              .sort((u, l) => (u[0] < l[0] ? -1 : 1))
              .join()
          : "");
      if (g.has(s)) return g.get(s);
      let f = new Intl.NumberFormat(a, r);
      return g.set(s, f), f;
    })(t, e)),
      (this.options = e);
  }
}
var U = new Set([
    "Avst",
    "Arab",
    "Armi",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr",
  ]),
  Z = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi",
  ]);
function q(n) {
  return (function (t) {
    var a;
    if (Intl.Locale) {
      const r = (a = new Intl.Locale(t).maximize().script) != null ? a : "";
      return U.has(r);
    }
    const e = t.split("-")[0];
    return Z.has(e);
  })(n)
    ? "rtl"
    : "ltr";
}
function R() {
  let n =
    (typeof navigator != "undefined" &&
      (navigator.language || navigator.userLanguage)) ||
    "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([n]);
  } catch (t) {
    n = "en-US";
  }
  return { locale: n, direction: q(n) };
}
var w = R(),
  p = new Set();
function O() {
  w = R();
  for (const n of p) n(w);
}
var C = L();
function E() {
  const n = (function () {
    const t = { locale: "en-US", direction: "ltr" },
      [e, a] = $(w),
      r = h(() => (x ? t : e()));
    return (
      z(() => {
        p.size === 0 && window.addEventListener("languagechange", O),
          p.add(a),
          k(() => {
            p.delete(a),
              p.size === 0 && window.removeEventListener("languagechange", O);
          });
      }),
      { locale: () => r().locale, direction: () => r().direction }
    );
  })();
  return M(C) || n;
}
var b = new Map();
function B(n) {
  const { locale: t } = E(),
    e = h(
      () =>
        t() +
        (n
          ? Object.entries(n)
              .sort((a, r) => (a[0] < r[0] ? -1 : 1))
              .join()
          : "")
    );
  return h(() => {
    const a = e();
    let r;
    return (
      b.has(a) && (r = b.get(a)),
      r || ((r = new Intl.Collator(t(), n)), b.set(a, r)),
      r
    );
  });
}
function G(n) {
  const { locale: t } = E();
  return h(() => new N(t(), A(n)));
}
export { N as $, B as a, G as c, E as u };
