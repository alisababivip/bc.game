var re = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var oe = Object.prototype.hasOwnProperty,
  te = Object.prototype.propertyIsEnumerable;
var J = (e, r, o) =>
    r in e
      ? re(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o),
  K = (e, r) => {
    for (var o in r || (r = {})) oe.call(r, o) && J(e, o, r[o]);
    if (H) for (var o of H(r)) te.call(r, o) && J(e, o, r[o]);
    return e;
  };
function U(e) {
  var r,
    o,
    t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (r = 0; r < s; r++)
        e[r] && (o = U(e[r])) && (t && (t += " "), (t += o));
    } else for (o in e) e[o] && (t && (t += " "), (t += o));
  return t;
}
const F = "-";
function ne(e) {
  const r = (function (s) {
      const { theme: n, prefix: a } = s,
        i = { nextPart: new Map(), validators: [] };
      return (
        (function (u, f) {
          return f
            ? u.map(([v, w]) => [
                v,
                w.map((h) =>
                  typeof h == "string"
                    ? f + h
                    : typeof h == "object"
                    ? Object.fromEntries(
                        Object.entries(h).map(([m, p]) => [f + m, p])
                      )
                    : h
                ),
              ])
            : u;
        })(Object.entries(s.classGroups), a).forEach(([u, f]) => {
          D(f, i, u, n);
        }),
        i
      );
    })(e),
    { conflictingClassGroups: o, conflictingClassGroupModifiers: t } = e;
  return {
    getClassGroupId: function (s) {
      const n = s.split(F);
      return (
        n[0] === "" && n.length !== 1 && n.shift(),
        V(n, r) ||
          (function (a) {
            if (L.test(a)) {
              const i = L.exec(a)[1],
                g = i == null ? void 0 : i.substring(0, i.indexOf(":"));
              if (g) return "arbitrary.." + g;
            }
          })(s)
      );
    },
    getConflictingClassGroupIds: function (s, n) {
      const a = o[s] || [];
      return n && t[s] ? [...a, ...t[s]] : a;
    },
  };
}
function V(e, r) {
  var a;
  if (e.length === 0) return r.classGroupId;
  const o = e[0],
    t = r.nextPart.get(o),
    s = t ? V(e.slice(1), t) : void 0;
  if (s) return s;
  if (r.validators.length === 0) return;
  const n = e.join(F);
  return (a = r.validators.find(({ validator: i }) => i(n))) == null
    ? void 0
    : a.classGroupId;
}
const L = /^\[(.+)\]$/;
function D(e, r, o, t) {
  e.forEach((s) => {
    if (typeof s != "string") {
      if (typeof s == "function")
        return s.isThemeGetter
          ? void D(s(t), r, o, t)
          : void r.validators.push({ validator: s, classGroupId: o });
      Object.entries(s).forEach(([n, a]) => {
        D(a, Q(r, n), o, t);
      });
    } else (s === "" ? r : Q(r, s)).classGroupId = o;
  });
}
function Q(e, r) {
  let o = e;
  return (
    r.split(F).forEach((t) => {
      o.nextPart.has(t) ||
        o.nextPart.set(t, { nextPart: new Map(), validators: [] }),
        (o = o.nextPart.get(t));
    }),
    o
  );
}
function se(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let r = 0,
    o = new Map(),
    t = new Map();
  function s(n, a) {
    o.set(n, a), r++, r > e && ((r = 0), (t = o), (o = new Map()));
  }
  return {
    get(n) {
      let a = o.get(n);
      return a !== void 0
        ? a
        : (a = t.get(n)) !== void 0
        ? (s(n, a), a)
        : void 0;
    },
    set(n, a) {
      o.has(n) ? o.set(n, a) : s(n, a);
    },
  };
}
const X = "!";
function le(e) {
  const { separator: r, experimentalParseClassName: o } = e,
    t = r.length === 1,
    s = r[0],
    n = r.length;
  function a(i) {
    const g = [];
    let u,
      f = 0,
      v = 0;
    for (let m = 0; m < i.length; m++) {
      let p = i[m];
      if (f === 0) {
        if (p === s && (t || i.slice(m, m + n) === r)) {
          g.push(i.slice(v, m)), (v = m + n);
          continue;
        }
        if (p === "/") {
          u = m;
          continue;
        }
      }
      p === "[" ? f++ : p === "]" && f--;
    }
    const w = g.length === 0 ? i : i.substring(v),
      h = w.startsWith(X);
    return {
      modifiers: g,
      hasImportantModifier: h,
      baseClassName: h ? w.substring(1) : w,
      maybePostfixModifierPosition: u && u > v ? u - v : void 0,
    };
  }
  return o
    ? function (i) {
        return o({ className: i, parseClassName: a });
      }
    : a;
}
const ie = /\s+/;
function ae() {
  let e,
    r,
    o = 0,
    t = "";
  for (; o < arguments.length; )
    (e = arguments[o++]) && (r = Y(e)) && (t && (t += " "), (t += r));
  return t;
}
function Y(e) {
  if (typeof e == "string") return e;
  let r,
    o = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (r = Y(e[t])) && (o && (o += " "), (o += r));
  return o;
}
function ce(e, ...r) {
  let o,
    t,
    s,
    n = function (i) {
      const g = r.reduce((u, f) => f(u), e());
      return (
        (o = (function (u) {
          return K({ cache: se(u.cacheSize), parseClassName: le(u) }, ne(u));
        })(g)),
        (t = o.cache.get),
        (s = o.cache.set),
        (n = a),
        a(i)
      );
    };
  function a(i) {
    const g = t(i);
    if (g) return g;
    const u = (function (f, v) {
      const {
          parseClassName: w,
          getClassGroupId: h,
          getConflictingClassGroupIds: m,
        } = v,
        p = new Set();
      return f
        .trim()
        .split(ie)
        .map((b) => {
          const {
            modifiers: y,
            hasImportantModifier: x,
            baseClassName: j,
            maybePostfixModifierPosition: k,
          } = w(b);
          let z = !!k,
            I = h(z ? j.substring(0, k) : j);
          if (!I) {
            if (!z) return { isTailwindClass: !1, originalClassName: b };
            if (((I = h(j)), !I))
              return { isTailwindClass: !1, originalClassName: b };
            z = !1;
          }
          const $ = (function (S) {
            if (S.length <= 1) return S;
            const P = [];
            let c = [];
            return (
              S.forEach((E) => {
                E[0] === "[" ? (P.push(...c.sort(), E), (c = [])) : c.push(E);
              }),
              P.push(...c.sort()),
              P
            );
          })(y).join(":");
          return {
            isTailwindClass: !0,
            modifierId: x ? $ + X : $,
            classGroupId: I,
            originalClassName: b,
            hasPostfixModifier: z,
          };
        })
        .reverse()
        .filter((b) => {
          if (!b.isTailwindClass) return !0;
          const { modifierId: y, classGroupId: x, hasPostfixModifier: j } = b,
            k = y + x;
          return (
            !p.has(k) && (p.add(k), m(x, j).forEach((z) => p.add(y + z)), !0)
          );
        })
        .reverse()
        .map((b) => b.originalClassName)
        .join(" ");
    })(i, o);
    return s(i, u), u;
  }
  return function () {
    return n(ae.apply(null, arguments));
  };
}
function d(e) {
  const r = (o) => o[e] || [];
  return (r.isThemeGetter = !0), r;
}
const Z = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  de = /^\d+\/\d+$/,
  ue = new Set(["px", "full", "screen"]),
  pe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  be =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  fe = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  me = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ge =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function C(e) {
  return M(e) || ue.has(e) || de.test(e);
}
function G(e) {
  return T(e, "length", Ce);
}
function M(e) {
  return !!e && !Number.isNaN(Number(e));
}
function _(e) {
  return T(e, "number", M);
}
function R(e) {
  return !!e && Number.isInteger(Number(e));
}
function he(e) {
  return e.endsWith("%") && M(e.slice(0, -1));
}
function l(e) {
  return Z.test(e);
}
function N(e) {
  return pe.test(e);
}
const xe = new Set(["length", "size", "percentage"]);
function ye(e) {
  return T(e, xe, ee);
}
function ve(e) {
  return T(e, "position", ee);
}
const we = new Set(["image", "url"]);
function ke(e) {
  return T(e, we, Ge);
}
function ze(e) {
  return T(e, "", je);
}
function W() {
  return !0;
}
function T(e, r, o) {
  const t = Z.exec(e);
  return (
    !!t && (t[1] ? (typeof r == "string" ? t[1] === r : r.has(t[1])) : o(t[2]))
  );
}
function Ce(e) {
  return be.test(e) && !fe.test(e);
}
function ee() {
  return !1;
}
function je(e) {
  return me.test(e);
}
function Ge(e) {
  return ge.test(e);
}
function Ne() {
  const e = d("colors"),
    r = d("spacing"),
    o = d("blur"),
    t = d("brightness"),
    s = d("borderColor"),
    n = d("borderRadius"),
    a = d("borderSpacing"),
    i = d("borderWidth"),
    g = d("contrast"),
    u = d("grayscale"),
    f = d("hueRotate"),
    v = d("invert"),
    w = d("gap"),
    h = d("gradientColorStops"),
    m = d("gradientColorStopPositions"),
    p = d("inset"),
    b = d("margin"),
    y = d("opacity"),
    x = d("padding"),
    j = d("saturate"),
    k = d("scale"),
    z = d("sepia"),
    I = d("skew"),
    $ = d("space"),
    S = d("translate"),
    P = () => ["auto", l, r],
    c = () => [l, r],
    E = () => ["", C, G],
    q = () => ["auto", M, l],
    O = () => ["", "0", l],
    B = () => [M, _],
    A = () => [M, l];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [W],
      spacing: [C, G],
      blur: ["none", "", N, l],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", N, l],
      borderSpacing: c(),
      borderWidth: E(),
      contrast: B(),
      grayscale: O(),
      hueRotate: A(),
      invert: O(),
      gap: c(),
      gradientColorStops: [e],
      gradientColorStopPositions: [he, G],
      inset: P(),
      margin: P(),
      opacity: B(),
      padding: c(),
      saturate: B(),
      scale: B(),
      sepia: O(),
      skew: A(),
      space: c(),
      translate: c(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", l] }],
      container: ["container"],
      columns: [{ columns: [N] }],
      "break-after": [
        {
          "break-after": [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
        },
      ],
      "break-before": [
        {
          "break-before": [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
        },
      ],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [
        {
          object: [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
            l,
          ],
        },
      ],
      overflow: [{ overflow: ["auto", "hidden", "clip", "visible", "scroll"] }],
      "overflow-x": [
        { "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] },
      ],
      "overflow-y": [
        { "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] },
      ],
      overscroll: [{ overscroll: ["auto", "contain", "none"] }],
      "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
      "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [p] }],
      "inset-x": [{ "inset-x": [p] }],
      "inset-y": [{ "inset-y": [p] }],
      start: [{ start: [p] }],
      end: [{ end: [p] }],
      top: [{ top: [p] }],
      right: [{ right: [p] }],
      bottom: [{ bottom: [p] }],
      left: [{ left: [p] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", R, l] }],
      basis: [{ basis: P() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", l] }],
      grow: [{ grow: O() }],
      shrink: [{ shrink: O() }],
      order: [{ order: ["first", "last", "none", R, l] }],
      "grid-cols": [{ "grid-cols": [W] }],
      "col-start-end": [{ col: ["auto", { span: ["full", R, l] }, l] }],
      "col-start": [{ "col-start": q() }],
      "col-end": [{ "col-end": q() }],
      "grid-rows": [{ "grid-rows": [W] }],
      "row-start-end": [{ row: ["auto", { span: [R, l] }, l] }],
      "row-start": [{ "row-start": q() }],
      "row-end": [{ "row-end": q() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }],
      gap: [{ gap: [w] }],
      "gap-x": [{ "gap-x": [w] }],
      "gap-y": [{ "gap-y": [w] }],
      "justify-content": [
        {
          justify: [
            "normal",
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
        },
      ],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [
        {
          content: [
            "normal",
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
          ],
        },
      ],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [
        {
          "place-content": [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
          ],
        },
      ],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [x] }],
      px: [{ px: [x] }],
      py: [{ py: [x] }],
      ps: [{ ps: [x] }],
      pe: [{ pe: [x] }],
      pt: [{ pt: [x] }],
      pr: [{ pr: [x] }],
      pb: [{ pb: [x] }],
      pl: [{ pl: [x] }],
      m: [{ m: [b] }],
      mx: [{ mx: [b] }],
      my: [{ my: [b] }],
      ms: [{ ms: [b] }],
      me: [{ me: [b] }],
      mt: [{ mt: [b] }],
      mr: [{ mr: [b] }],
      mb: [{ mb: [b] }],
      ml: [{ ml: [b] }],
      "space-x": [{ "space-x": [$] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [$] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, r] }],
      "min-w": [{ "min-w": [l, r, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            l,
            r,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [N] },
            N,
          ],
        },
      ],
      h: [{ h: [l, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [l, r, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", N, G] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            _,
          ],
        },
      ],
      "font-family": [{ font: [W] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            l,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", M, _] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            C,
            l,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", l] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", l] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [
        { decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"] },
      ],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", C, G] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", C, l] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: c() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            l,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", l] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [
        {
          bg: [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
            ve,
          ],
        },
      ],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", ye] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            ke,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [m] }],
      "gradient-via-pos": [{ via: [m] }],
      "gradient-to-pos": [{ to: [m] }],
      "gradient-from": [{ from: [h] }],
      "gradient-via": [{ via: [h] }],
      "gradient-to": [{ to: [h] }],
      rounded: [{ rounded: [n] }],
      "rounded-s": [{ "rounded-s": [n] }],
      "rounded-e": [{ "rounded-e": [n] }],
      "rounded-t": [{ "rounded-t": [n] }],
      "rounded-r": [{ "rounded-r": [n] }],
      "rounded-b": [{ "rounded-b": [n] }],
      "rounded-l": [{ "rounded-l": [n] }],
      "rounded-ss": [{ "rounded-ss": [n] }],
      "rounded-se": [{ "rounded-se": [n] }],
      "rounded-ee": [{ "rounded-ee": [n] }],
      "rounded-es": [{ "rounded-es": [n] }],
      "rounded-tl": [{ "rounded-tl": [n] }],
      "rounded-tr": [{ "rounded-tr": [n] }],
      "rounded-br": [{ "rounded-br": [n] }],
      "rounded-bl": [{ "rounded-bl": [n] }],
      "border-w": [{ border: [i] }],
      "border-w-x": [{ "border-x": [i] }],
      "border-w-y": [{ "border-y": [i] }],
      "border-w-s": [{ "border-s": [i] }],
      "border-w-e": [{ "border-e": [i] }],
      "border-w-t": [{ "border-t": [i] }],
      "border-w-r": [{ "border-r": [i] }],
      "border-w-b": [{ "border-b": [i] }],
      "border-w-l": [{ "border-l": [i] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [
        { border: ["solid", "dashed", "dotted", "double", "none", "hidden"] },
      ],
      "divide-x": [{ "divide-x": [i] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [i] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [
        { divide: ["solid", "dashed", "dotted", "double", "none"] },
      ],
      "border-color": [{ border: [s] }],
      "border-color-x": [{ "border-x": [s] }],
      "border-color-y": [{ "border-y": [s] }],
      "border-color-t": [{ "border-t": [s] }],
      "border-color-r": [{ "border-r": [s] }],
      "border-color-b": [{ "border-b": [s] }],
      "border-color-l": [{ "border-l": [s] }],
      "divide-color": [{ divide: [s] }],
      "outline-style": [
        { outline: ["", "solid", "dashed", "dotted", "double", "none"] },
      ],
      "outline-offset": [{ "outline-offset": [C, l] }],
      "outline-w": [{ outline: [C, G] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: E() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [C, G] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", N, ze] }],
      "shadow-color": [{ shadow: [W] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [
        {
          "mix-blend": [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
            "plus-darker",
          ],
        },
      ],
      "bg-blend": [
        {
          "bg-blend": [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
        },
      ],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [o] }],
      brightness: [{ brightness: [t] }],
      contrast: [{ contrast: [g] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", N, l] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [f] }],
      invert: [{ invert: [v] }],
      saturate: [{ saturate: [j] }],
      sepia: [{ sepia: [z] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [o] }],
      "backdrop-brightness": [{ "backdrop-brightness": [t] }],
      "backdrop-contrast": [{ "backdrop-contrast": [g] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
      "backdrop-invert": [{ "backdrop-invert": [v] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [j] }],
      "backdrop-sepia": [{ "backdrop-sepia": [z] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [a] }],
      "border-spacing-x": [{ "border-spacing-x": [a] }],
      "border-spacing-y": [{ "border-spacing-y": [a] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            l,
          ],
        },
      ],
      duration: [{ duration: A() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", l] }],
      delay: [{ delay: A() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [k] }],
      "scale-x": [{ "scale-x": [k] }],
      "scale-y": [{ "scale-y": [k] }],
      rotate: [{ rotate: [R, l] }],
      "translate-x": [{ "translate-x": [S] }],
      "translate-y": [{ "translate-y": [S] }],
      "skew-x": [{ "skew-x": [I] }],
      "skew-y": [{ "skew-y": [I] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            l,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            l,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": c() }],
      "scroll-mx": [{ "scroll-mx": c() }],
      "scroll-my": [{ "scroll-my": c() }],
      "scroll-ms": [{ "scroll-ms": c() }],
      "scroll-me": [{ "scroll-me": c() }],
      "scroll-mt": [{ "scroll-mt": c() }],
      "scroll-mr": [{ "scroll-mr": c() }],
      "scroll-mb": [{ "scroll-mb": c() }],
      "scroll-ml": [{ "scroll-ml": c() }],
      "scroll-p": [{ "scroll-p": c() }],
      "scroll-px": [{ "scroll-px": c() }],
      "scroll-py": [{ "scroll-py": c() }],
      "scroll-ps": [{ "scroll-ps": c() }],
      "scroll-pe": [{ "scroll-pe": c() }],
      "scroll-pt": [{ "scroll-pt": c() }],
      "scroll-pr": [{ "scroll-pr": c() }],
      "scroll-pb": [{ "scroll-pb": c() }],
      "scroll-pl": [{ "scroll-pl": c() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", l] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [C, G, _] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const Ie = ce(Ne);
function Me(...e) {
  return Ie(
    (function () {
      for (var r, o, t = 0, s = "", n = arguments.length; t < n; t++)
        (r = arguments[t]) && (o = U(r)) && (s && (s += " "), (s += o));
      return s;
    })(e)
  );
}
export { Me as c };
