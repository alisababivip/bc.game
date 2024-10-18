import {
  al as U,
  o as E,
  am as _,
  ah as T,
  H as L,
  ae as q,
  $ as V,
  c as z,
  W as $,
  a0 as G,
  f as J,
  l as D,
  an as Y,
} from "./manifest-a234c8a0.js";
var fn = { equals: !1 },
  un = (n) => (typeof n != "function" || n.length ? n : n()),
  ln = (n) => (Array.isArray(n) ? n : n ? [n] : []);
function dn(n, ...e) {
  return typeof n == "function" ? n(...e) : n;
}
var pn = !T && _ ? (n) => (U() ? E(n) : n) : E;
function mn(...n) {
  return (
    (e = n),
    (...t) => {
      for (const o of e) o && o(...t);
    }
  );
  var e;
}
var H = T
  ? (n) => n != null && typeof n == "object" && "t" in n
  : (n) => n instanceof Element;
function A(n, e) {
  if (e(n)) return n;
  if (typeof n == "function" && !n.length) return A(n(), e);
  if (Array.isArray(n))
    for (const t of n) {
      const o = A(t, e);
      if (o) return o;
    }
  return null;
}
function hn(n, e = H, t = H) {
  const o = L(n);
  return L(() => A(o(), T ? t : e));
}
function gn(n, e, t = -1) {
  return t in n ? [...n.slice(0, t), e, ...n.slice(t)] : [...n, e];
}
function yn(n, e) {
  const t = [...n],
    o = t.indexOf(e);
  return o !== -1 && t.splice(o, 1), t;
}
function vn(n) {
  return typeof n == "number";
}
function bn(n) {
  return Object.prototype.toString.call(n) === "[object String]";
}
function Q(n) {
  return typeof n == "function";
}
function wn(n) {
  return (e) => `${n()}-${e}`;
}
function En(n, e) {
  return !!n && (n === e || n.contains(e));
}
function X(n, e = !1) {
  const { activeElement: t } = h(n);
  if (!(t != null && t.nodeName)) return null;
  if (O(t) && t.contentDocument) return X(t.contentDocument.body, e);
  if (e) {
    const o = t.getAttribute("aria-activedescendant");
    if (o) {
      const r = h(t).getElementById(o);
      if (r) return r;
    }
  }
  return t;
}
function Ln(n) {
  return h(n).defaultView || window;
}
function h(n) {
  return n ? n.ownerDocument || n : document;
}
function O(n) {
  return n.tagName === "IFRAME";
}
var Z = ((n) => (
  (n.Escape = "Escape"),
  (n.Enter = "Enter"),
  (n.Tab = "Tab"),
  (n.Space = " "),
  (n.ArrowDown = "ArrowDown"),
  (n.ArrowLeft = "ArrowLeft"),
  (n.ArrowRight = "ArrowRight"),
  (n.ArrowUp = "ArrowUp"),
  (n.End = "End"),
  (n.Home = "Home"),
  (n.PageDown = "PageDown"),
  (n.PageUp = "PageUp"),
  n
))(Z || {});
function I(n) {
  var e;
  return (
    typeof window != "undefined" &&
    window.navigator != null &&
    (((e = window.navigator.userAgentData) == null
      ? void 0
      : e.brands.some((t) => n.test(t.brand))) ||
      n.test(window.navigator.userAgent))
  );
}
function N(n) {
  var e;
  return (
    typeof window != "undefined" &&
    window.navigator != null &&
    n.test(
      ((e = window.navigator.userAgentData) == null ? void 0 : e.platform) ||
        window.navigator.platform
    )
  );
}
function P() {
  return N(/^Mac/i);
}
function nn() {
  return N(/^iPhone/i) || N(/^iPad/i) || (P() && navigator.maxTouchPoints > 1);
}
function An() {
  return P() || nn();
}
function Nn() {
  return I(/AppleWebKit/i) && !I(/Chrome/i);
}
function en(n, e) {
  return (
    e && (Q(e) ? e(n) : e[0](e[1], n)), n == null ? void 0 : n.defaultPrevented
  );
}
function Tn(n) {
  return (e) => {
    for (const t of n) en(e, t);
  };
}
function Pn(n) {
  return P() ? n.metaKey && !n.ctrlKey : n.ctrlKey && !n.metaKey;
}
function Mn(n) {
  if (n)
    if (
      (function () {
        if (y == null) {
          y = !1;
          try {
            document.createElement("div").focus({
              get preventScroll() {
                return (y = !0), !0;
              },
            });
          } catch (e) {}
        }
        return y;
      })()
    )
      n.focus({ preventScroll: !0 });
    else {
      const e = (function (t) {
        let o = t.parentNode;
        const r = [],
          i = document.scrollingElement || document.documentElement;
        for (; o instanceof HTMLElement && o !== i; )
          (o.offsetHeight < o.scrollHeight || o.offsetWidth < o.scrollWidth) &&
            r.push({
              element: o,
              scrollTop: o.scrollTop,
              scrollLeft: o.scrollLeft,
            }),
            (o = o.parentNode);
        return (
          i instanceof HTMLElement &&
            r.push({
              element: i,
              scrollTop: i.scrollTop,
              scrollLeft: i.scrollLeft,
            }),
          r
        );
      })(n);
      n.focus(),
        (function (t) {
          for (const { element: o, scrollTop: r, scrollLeft: i } of t)
            (o.scrollTop = r), (o.scrollLeft = i);
        })(e);
    }
}
var y = null,
  W = [
    "input:not([type='hidden']):not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "[tabindex]",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]:not([contenteditable='false'])",
  ],
  tn = [...W, '[tabindex]:not([tabindex="-1"]):not([disabled])'],
  M = W.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])",
  on = tn.join(':not([hidden]):not([tabindex="-1"]),');
function rn(n, e) {
  const t = Array.from(n.querySelectorAll(M)).filter(F);
  return (
    e && F(n) && t.unshift(n),
    t.forEach((o, r) => {
      if (O(o) && o.contentDocument) {
        const i = rn(o.contentDocument.body, !1);
        t.splice(r, 1, ...i);
      }
    }),
    t
  );
}
function F(n) {
  return (
    an(n) &&
    !(function (e) {
      return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
    })(n)
  );
}
function an(n) {
  return n.matches(M) && x(n);
}
function x(n, e) {
  return (
    n.nodeName !== "#comment" &&
    (function (t) {
      if (!(t instanceof HTMLElement || t instanceof SVGElement)) return !1;
      const { display: o, visibility: r } = t.style;
      let i = o !== "none" && r !== "hidden" && r !== "collapse";
      if (i) {
        if (!t.ownerDocument.defaultView) return i;
        const { getComputedStyle: a } = t.ownerDocument.defaultView,
          { display: s, visibility: f } = a(t);
        i = s !== "none" && f !== "hidden" && f !== "collapse";
      }
      return i;
    })(n) &&
    (function (t, o) {
      return (
        !t.hasAttribute("hidden") &&
        (t.nodeName !== "DETAILS" ||
          !o ||
          o.nodeName === "SUMMARY" ||
          t.hasAttribute("open"))
      );
    })(n, e) &&
    (!n.parentElement || x(n.parentElement, n))
  );
}
function xn(n, e, t) {
  const o = e != null && e.tabbable ? on : M,
    r = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        var a;
        return (a = e == null ? void 0 : e.from) != null && a.contains(i)
          ? NodeFilter.FILTER_REJECT
          : !i.matches(o) ||
            !x(i) ||
            (t &&
              !(function (s, f) {
                return f.some((c) => c.contains(s));
              })(i, t)) ||
            (e != null && e.accept && !e.accept(i))
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
    });
  return e != null && e.from && (r.currentNode = e.from), r;
}
function Sn() {}
function Dn(n, e = -1 / 0, t = 1 / 0) {
  return Math.min(Math.max(n, e), t);
}
function Hn(n, e, t, o) {
  const r = (n - (isNaN(e) ? 0 : e)) % o;
  let i = 2 * Math.abs(r) >= o ? n + Math.sign(r) * (o - Math.abs(r)) : n - r;
  isNaN(e)
    ? !isNaN(t) && i > t && (i = Math.floor(t / o) * o)
    : i < e
    ? (i = e)
    : !isNaN(t) && i > t && (i = e + Math.floor((t - e) / o) * o);
  const a = o.toString(),
    s = a.indexOf("."),
    f = s >= 0 ? a.length - s : 0;
  if (f > 0) {
    const c = Math.pow(10, f);
    i = Math.round(i * c) / c;
  }
  return i;
}
function In(n) {
  return [n.clientX, n.clientY];
}
function Fn(n, e) {
  const [t, o] = n;
  let r = !1;
  for (let i = e.length, a = 0, s = i - 1; a < i; s = a++) {
    const [f, c] = e[a],
      [l, d] = e[s],
      [, S] = e[s === 0 ? i - 1 : s - 1] || [0, 0],
      g = (c - d) * (t - f) - (f - l) * (o - c);
    if (d < c) {
      if (o >= d && o < c) {
        if (g === 0) return !0;
        g > 0 && (o === d ? o > S && (r = !r) : (r = !r));
      }
    } else if (c < d) {
      if (o > c && o <= d) {
        if (g === 0) return !0;
        g < 0 && (o === d ? o < S && (r = !r) : (r = !r));
      }
    } else if (o == c && ((t >= l && t <= f) || (t >= f && t <= l))) return !0;
  }
  return r;
}
function Rn(n, e) {
  return q(n, e);
}
var p = new Map(),
  R = new Set();
function j() {
  if (typeof window == "undefined") return;
  const n = (e) => {
    if (!e.target) return;
    const t = p.get(e.target);
    if (
      t &&
      (t.delete(e.propertyName),
      t.size === 0 &&
        (e.target.removeEventListener("transitioncancel", n),
        p.delete(e.target)),
      p.size === 0)
    ) {
      for (const o of R) o();
      R.clear();
    }
  };
  document.body.addEventListener("transitionrun", (e) => {
    if (!e.target) return;
    let t = p.get(e.target);
    t ||
      ((t = new Set()),
      p.set(e.target, t),
      e.target.addEventListener("transitioncancel", n)),
      t.add(e.propertyName);
  }),
    document.body.addEventListener("transitionend", n);
}
function jn(n, e) {
  const t = k(n, e, "left"),
    o = k(n, e, "top"),
    r = e.offsetWidth,
    i = e.offsetHeight;
  let a = n.scrollLeft,
    s = n.scrollTop;
  const f = a + n.offsetWidth,
    c = s + n.offsetHeight;
  t <= a ? (a = t) : t + r > f && (a += t + r - f),
    o <= s ? (s = o) : o + i > c && (s += o + i - c),
    (n.scrollLeft = a),
    (n.scrollTop = s);
}
function k(n, e, t) {
  const o = t === "left" ? "offsetLeft" : "offsetTop";
  let r = 0;
  for (; e.offsetParent && ((r += e[o]), e.offsetParent !== n); ) {
    if (e.offsetParent.contains(n)) {
      r -= n[o];
      break;
    }
    e = e.offsetParent;
  }
  return r;
}
typeof document != "undefined" &&
  (document.readyState !== "loading"
    ? j()
    : document.addEventListener("DOMContentLoaded", j));
var kn = {
  border: "0",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(50%)",
  height: "1px",
  margin: "0 -1px -1px 0",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  "white-space": "nowrap",
};
function Bn(n) {
  const [e, t] = V(n, ["as"]);
  if (!e.as)
    throw new Error(
      "[kobalte]: Polymorphic is missing the required `as` prop."
    );
  return z(
    $,
    G(
      {
        get component() {
          return e.as;
        },
      },
      t
    )
  );
}
var sn = Object.defineProperty,
  Cn = (n, e) => {
    for (var t in e) sn(n, t, { get: e[t], enumerable: !0 });
  };
function On(n) {
  return (e) => (n(e), () => n(void 0));
}
var B,
  Wn = "data-kb-top-layer",
  b = !1,
  u = [];
function m(n) {
  return u.findIndex((e) => e.node === n);
}
function K() {
  return u.filter((n) => n.isPointerBlocking);
}
function w() {
  return K().length > 0;
}
function C(n) {
  var t;
  const e = m((t = [...K()].slice(-1)[0]) == null ? void 0 : t.node);
  return m(n) < e;
}
var Kn = {
    layers: u,
    isTopMostLayer: function (n) {
      return u[u.length - 1].node === n;
    },
    hasPointerBlockingLayer: w,
    isBelowPointerBlockingLayer: C,
    addLayer: function (n) {
      u.push(n);
    },
    removeLayer: function (n) {
      const e = m(n);
      e < 0 || u.splice(e, 1);
    },
    indexOf: m,
    find: function (n) {
      return u[m(n)];
    },
    assignPointerEventToLayers: function () {
      for (const { node: n } of u)
        n.style.pointerEvents = C(n) ? "none" : "auto";
    },
    disableBodyPointerEvents: function (n) {
      if (w() && !b) {
        const e = h(n);
        (B = document.body.style.pointerEvents),
          (e.body.style.pointerEvents = "none"),
          (b = !0);
      }
    },
    restoreBodyPointerEvents: function (n) {
      if (w()) return;
      const e = h(n);
      (e.body.style.pointerEvents = B),
        e.body.style.length === 0 && e.body.removeAttribute("style"),
        (b = !1);
    },
  },
  v = (n) => (typeof n == "function" ? n() : n),
  Un = (...n) => {
    return (
      (e = n),
      (...t) => {
        for (const o of e) o && o(...t);
      }
    );
    var e;
  },
  _n = (...n) => n.some((e) => !!e()),
  qn = (n) => {
    const e = L(() => {
        const a = v(n.element);
        if (a) return getComputedStyle(a);
      }),
      t = () => {
        var a, s;
        return (s = (a = e()) == null ? void 0 : a.animationName) != null
          ? s
          : "none";
      },
      [o, r] = J(v(n.show) ? "present" : "hidden");
    let i = "none";
    return (
      D((a) => {
        const s = v(n.show);
        return (
          Y(() => {
            var l;
            if (a === s) return s;
            const f = i,
              c = t();
            s
              ? r("present")
              : c === "none" ||
                ((l = e()) == null ? void 0 : l.display) === "none"
              ? r("hidden")
              : r(a === !0 && f !== c ? "hiding" : "hidden");
          }),
          s
        );
      }),
      D(() => {
        const a = v(n.element);
        if (!a) return;
        const s = (c) => {
            c.target === a && (i = t());
          },
          f = (c) => {
            const l = t().includes(c.animationName);
            c.target === a && l && o() === "hiding" && r("hidden");
          };
        a.addEventListener("animationstart", s),
          a.addEventListener("animationcancel", f),
          a.addEventListener("animationend", f),
          E(() => {
            a.removeEventListener("animationstart", s),
              a.removeEventListener("animationcancel", f),
              a.removeEventListener("animationend", f);
          });
      }),
      { present: () => o() === "present" || o() === "hiding", state: o }
    );
  };
export {
  an as A,
  rn as B,
  v as C,
  Wn as D,
  Z as E,
  ln as F,
  pn as G,
  vn as H,
  jn as I,
  xn as J,
  An as K,
  P as L,
  Nn as M,
  hn as N,
  fn as O,
  Bn as P,
  Un as Q,
  _n as R,
  Cn as _,
  wn as a,
  On as b,
  Dn as c,
  Ln as d,
  mn as e,
  en as f,
  h as g,
  En as h,
  Mn as i,
  Q as j,
  bn as k,
  un as l,
  Rn as m,
  Fn as n,
  In as o,
  Sn as p,
  Pn as q,
  Tn as r,
  qn as s,
  Kn as t,
  dn as u,
  kn as v,
  Hn as w,
  gn as x,
  X as y,
  yn as z,
};
