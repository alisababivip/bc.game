var we = Object.defineProperty,
  ve = Object.defineProperties;
var xe = Object.getOwnPropertyDescriptors;
var ht = Object.getOwnPropertySymbols;
var It = Object.prototype.hasOwnProperty,
  Nt = Object.prototype.propertyIsEnumerable;
var Vt = (t, e, o) =>
    e in t
      ? we(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o),
  T = (t, e) => {
    for (var o in e || (e = {})) It.call(e, o) && Vt(t, o, e[o]);
    if (ht) for (var o of ht(e)) Nt.call(e, o) && Vt(t, o, e[o]);
    return t;
  },
  S = (t, e) => ve(t, xe(e));
var at = (t, e) => {
  var o = {};
  for (var n in t) It.call(t, n) && e.indexOf(n) < 0 && (o[n] = t[n]);
  if (t != null && ht)
    for (var n of ht(t)) e.indexOf(n) < 0 && Nt.call(t, n) && (o[n] = t[n]);
  return o;
};
var N = (t, e, o) =>
  new Promise((n, l) => {
    var a = (r) => {
        try {
          i(o.next(r));
        } catch (s) {
          l(s);
        }
      },
      c = (r) => {
        try {
          i(o.throw(r));
        } catch (s) {
          l(s);
        }
      },
      i = (r) => (r.done ? n(r.value) : Promise.resolve(r.value).then(a, c));
    i((o = o.apply(t, e)).next());
  });
import {
  a2 as oe,
  $ as Ct,
  c as ft,
  a0 as At,
  a as be,
  w as Ee,
  f as wt,
  l as ot,
  t as Pe,
  a4 as ie,
  o as ct,
  ah as jt,
  n as Le,
  ag as Re,
} from "./manifest-a234c8a0.js";
import { u as De } from "./LR7LBJN3-fced4fb5.js";
import {
  m as re,
  P as $t,
  e as Mt,
  d as Oe,
  l as qt,
  g as Pt,
  E as Te,
  p as ke,
  D as Ce,
  h as mt,
  q as Ae,
  r as Kt,
  t as W,
} from "./index-4897b9da.js";
const $e = ["top", "right", "bottom", "left"],
  q = Math.min,
  z = Math.max,
  vt = Math.round,
  gt = Math.floor,
  Z = (t) => ({ x: t, y: t }),
  Me = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Be = { start: "end", end: "start" };
function Dt(t, e, o) {
  return z(t, q(e, o));
}
function nt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function U(t) {
  return t.split("-")[0];
}
function st(t) {
  return t.split("-")[1];
}
function se(t) {
  return t === "x" ? "y" : "x";
}
function Bt(t) {
  return t === "y" ? "height" : "width";
}
function tt(t) {
  return ["top", "bottom"].includes(U(t)) ? "y" : "x";
}
function Ht(t) {
  return se(tt(t));
}
function Lt(t) {
  return t.replace(/start|end/g, (e) => Be[e]);
}
function yt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Me[e]);
}
function le(t) {
  return typeof t != "number"
    ? (function (e) {
        return T({ top: 0, right: 0, bottom: 0, left: 0 }, e);
      })(t)
    : { top: t, right: t, bottom: t, left: t };
}
function xt(t) {
  const { x: e, y: o, width: n, height: l } = t;
  return {
    width: n,
    height: l,
    top: o,
    left: e,
    right: e + n,
    bottom: o + l,
    x: e,
    y: o,
  };
}
function Xt(t, e, o) {
  let { reference: n, floating: l } = t;
  const a = tt(e),
    c = Ht(e),
    i = Bt(c),
    r = U(e),
    s = a === "y",
    p = n.x + n.width / 2 - l.width / 2,
    g = n.y + n.height / 2 - l.height / 2,
    d = n[i] / 2 - l[i] / 2;
  let u;
  switch (r) {
    case "top":
      u = { x: p, y: n.y - l.height };
      break;
    case "bottom":
      u = { x: p, y: n.y + n.height };
      break;
    case "right":
      u = { x: n.x + n.width, y: g };
      break;
    case "left":
      u = { x: n.x - l.width, y: g };
      break;
    default:
      u = { x: n.x, y: n.y };
  }
  switch (st(e)) {
    case "start":
      u[c] -= d * (o && s ? -1 : 1);
      break;
    case "end":
      u[c] += d * (o && s ? -1 : 1);
  }
  return u;
}
function ut(t, e) {
  return N(this, null, function* () {
    var o;
    e === void 0 && (e = {});
    const { x: n, y: l, platform: a, rects: c, elements: i, strategy: r } = t,
      {
        boundary: s = "clippingAncestors",
        rootBoundary: p = "viewport",
        elementContext: g = "floating",
        altBoundary: d = !1,
        padding: u = 0,
      } = nt(e, t),
      f = le(u),
      h = i[d ? (g === "floating" ? "reference" : "floating") : g],
      y = xt(
        yield a.getClippingRect({
          element:
            (o = yield a.isElement == null ? void 0 : a.isElement(h)) == null ||
            o
              ? h
              : h.contextElement ||
                (yield a.getDocumentElement == null
                  ? void 0
                  : a.getDocumentElement(i.floating)),
          boundary: s,
          rootBoundary: p,
          strategy: r,
        })
      ),
      v =
        g === "floating"
          ? { x: n, y: l, width: c.floating.width, height: c.floating.height }
          : c.reference,
      m = yield a.getOffsetParent == null
        ? void 0
        : a.getOffsetParent(i.floating),
      w = ((yield a.isElement == null ? void 0 : a.isElement(m)) &&
        (yield a.getScale == null ? void 0 : a.getScale(m))) || { x: 1, y: 1 },
      x = xt(
        a.convertOffsetParentRelativeRectToViewportRelativeRect
          ? yield a.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: i,
              rect: v,
              offsetParent: m,
              strategy: r,
            })
          : v
      );
    return {
      top: (y.top - x.top + f.top) / w.y,
      bottom: (x.bottom - y.bottom + f.bottom) / w.y,
      left: (y.left - x.left + f.left) / w.x,
      right: (x.right - y.right + f.right) / w.x,
    };
  });
}
function Yt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width,
  };
}
function _t(t) {
  return $e.some((e) => t[e] >= 0);
}
function lt(t) {
  return ae(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function V(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function Y(t) {
  var e;
  return (e = (ae(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function ae(t) {
  return t instanceof Node || t instanceof V(t).Node;
}
function K(t) {
  return t instanceof Element || t instanceof V(t).Element;
}
function X(t) {
  return t instanceof HTMLElement || t instanceof V(t).HTMLElement;
}
function Jt(t) {
  return (
    typeof ShadowRoot != "undefined" &&
    (t instanceof ShadowRoot || t instanceof V(t).ShadowRoot)
  );
}
function dt(t) {
  const { overflow: e, overflowX: o, overflowY: n, display: l } = j(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + n + o) &&
    !["inline", "contents"].includes(l)
  );
}
function He(t) {
  return ["table", "td", "th"].includes(lt(t));
}
function bt(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch (o) {
      return !1;
    }
  });
}
function Ot(t) {
  const e = St(),
    o = j(t);
  return (
    o.transform !== "none" ||
    o.perspective !== "none" ||
    (!!o.containerType && o.containerType !== "normal") ||
    (!e && !!o.backdropFilter && o.backdropFilter !== "none") ||
    (!e && !!o.filter && o.filter !== "none") ||
    ["transform", "perspective", "filter"].some((n) =>
      (o.willChange || "").includes(n)
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (o.contain || "").includes(n)
    )
  );
}
function St() {
  return (
    !(typeof CSS == "undefined" || !CSS.supports) &&
    CSS.supports("-webkit-backdrop-filter", "none")
  );
}
function it(t) {
  return ["html", "body", "#document"].includes(lt(t));
}
function j(t) {
  return V(t).getComputedStyle(t);
}
function Et(t) {
  return K(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function Q(t) {
  if (lt(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Jt(t) && t.host) || Y(t);
  return Jt(e) ? e.host : e;
}
function ce(t) {
  const e = Q(t);
  return it(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : X(e) && dt(e)
    ? e
    : ce(e);
}
function pt(t, e, o) {
  var n;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const l = ce(t),
    a = l === ((n = t.ownerDocument) == null ? void 0 : n.body),
    c = V(l);
  return a
    ? e.concat(
        c,
        c.visualViewport || [],
        dt(l) ? l : [],
        c.frameElement && o ? pt(c.frameElement) : []
      )
    : e.concat(l, pt(l, [], o));
}
function fe(t) {
  const e = j(t);
  let o = parseFloat(e.width) || 0,
    n = parseFloat(e.height) || 0;
  const l = X(t),
    a = l ? t.offsetWidth : o,
    c = l ? t.offsetHeight : n,
    i = vt(o) !== a || vt(n) !== c;
  return i && ((o = a), (n = c)), { width: o, height: n, $: i };
}
function Ft(t) {
  return K(t) ? t : t.contextElement;
}
function rt(t) {
  const e = Ft(t);
  if (!X(e)) return Z(1);
  const o = e.getBoundingClientRect(),
    { width: n, height: l, $: a } = fe(e);
  let c = (a ? vt(o.width) : o.width) / n,
    i = (a ? vt(o.height) : o.height) / l;
  return (
    (c && Number.isFinite(c)) || (c = 1),
    (i && Number.isFinite(i)) || (i = 1),
    { x: c, y: i }
  );
}
const Se = Z(0);
function ue(t) {
  const e = V(t);
  return St() && e.visualViewport
    ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
    : Se;
}
function et(t, e, o, n) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const l = t.getBoundingClientRect(),
    a = Ft(t);
  let c = Z(1);
  e && (n ? K(n) && (c = rt(n)) : (c = rt(t)));
  const i = (function (d, u, f) {
    return u === void 0 && (u = !1), !(!f || (u && f !== V(d))) && u;
  })(a, o, n)
    ? ue(a)
    : Z(0);
  let r = (l.left + i.x) / c.x,
    s = (l.top + i.y) / c.y,
    p = l.width / c.x,
    g = l.height / c.y;
  if (a) {
    const d = V(a),
      u = n && K(n) ? V(n) : n;
    let f = d,
      h = f.frameElement;
    for (; h && n && u !== f; ) {
      const y = rt(h),
        v = h.getBoundingClientRect(),
        m = j(h),
        w = v.left + (h.clientLeft + parseFloat(m.paddingLeft)) * y.x,
        x = v.top + (h.clientTop + parseFloat(m.paddingTop)) * y.y;
      (r *= y.x),
        (s *= y.y),
        (p *= y.x),
        (g *= y.y),
        (r += w),
        (s += x),
        (f = V(h)),
        (h = f.frameElement);
    }
  }
  return xt({ width: p, height: g, x: r, y: s });
}
function de(t) {
  return et(Y(t)).left + Et(t).scrollLeft;
}
function Gt(t, e, o) {
  let n;
  if (e === "viewport")
    n = (function (l, a) {
      const c = V(l),
        i = Y(l),
        r = c.visualViewport;
      let s = i.clientWidth,
        p = i.clientHeight,
        g = 0,
        d = 0;
      if (r) {
        (s = r.width), (p = r.height);
        const u = St();
        (!u || (u && a === "fixed")) && ((g = r.offsetLeft), (d = r.offsetTop));
      }
      return { width: s, height: p, x: g, y: d };
    })(t, o);
  else if (e === "document")
    n = (function (l) {
      const a = Y(l),
        c = Et(l),
        i = l.ownerDocument.body,
        r = z(a.scrollWidth, a.clientWidth, i.scrollWidth, i.clientWidth),
        s = z(a.scrollHeight, a.clientHeight, i.scrollHeight, i.clientHeight);
      let p = -c.scrollLeft + de(l);
      const g = -c.scrollTop;
      return (
        j(i).direction === "rtl" && (p += z(a.clientWidth, i.clientWidth) - r),
        { width: r, height: s, x: p, y: g }
      );
    })(Y(t));
  else if (K(e))
    n = (function (l, a) {
      const c = et(l, !0, a === "fixed"),
        i = c.top + l.clientTop,
        r = c.left + l.clientLeft,
        s = X(l) ? rt(l) : Z(1);
      return {
        width: l.clientWidth * s.x,
        height: l.clientHeight * s.y,
        x: r * s.x,
        y: i * s.y,
      };
    })(e, o);
  else {
    const l = ue(t);
    n = S(T({}, e), { x: e.x - l.x, y: e.y - l.y });
  }
  return xt(n);
}
function pe(t, e) {
  const o = Q(t);
  return (
    !(o === e || !K(o) || it(o)) && (j(o).position === "fixed" || pe(o, e))
  );
}
function Fe(t, e, o) {
  const n = X(e),
    l = Y(e),
    a = o === "fixed",
    c = et(t, !0, a, e);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const r = Z(0);
  if (n || (!n && !a))
    if (((lt(e) !== "body" || dt(l)) && (i = Et(e)), n)) {
      const s = et(e, !0, a, e);
      (r.x = s.x + e.clientLeft), (r.y = s.y + e.clientTop);
    } else l && (r.x = de(l));
  return {
    x: c.left + i.scrollLeft - r.x,
    y: c.top + i.scrollTop - r.y,
    width: c.width,
    height: c.height,
  };
}
function Rt(t) {
  return j(t).position === "static";
}
function Qt(t, e) {
  return X(t) && j(t).position !== "fixed" ? (e ? e(t) : t.offsetParent) : null;
}
function Ut(t, e) {
  const o = V(t);
  if (bt(t)) return o;
  if (!X(t)) {
    let l = Q(t);
    for (; l && !it(l); ) {
      if (K(l) && !Rt(l)) return l;
      l = Q(l);
    }
    return o;
  }
  let n = Qt(t, e);
  for (; n && He(n) && Rt(n); ) n = Qt(n, e);
  return n && it(n) && Rt(n) && !Ot(n)
    ? o
    : n ||
        (function (l) {
          let a = Q(l);
          for (; X(a) && !it(a); ) {
            if (bt(a)) return null;
            if (Ot(a)) return a;
            a = Q(a);
          }
          return null;
        })(t) ||
        o;
}
const he = {
  convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
    let { elements: e, rect: o, offsetParent: n, strategy: l } = t;
    const a = l === "fixed",
      c = Y(n),
      i = !!e && bt(e.floating);
    if (n === c || (i && a)) return o;
    let r = { scrollLeft: 0, scrollTop: 0 },
      s = Z(1);
    const p = Z(0),
      g = X(n);
    if (
      (g || (!g && !a)) &&
      ((lt(n) !== "body" || dt(c)) && (r = Et(n)), X(n))
    ) {
      const d = et(n);
      (s = rt(n)), (p.x = d.x + n.clientLeft), (p.y = d.y + n.clientTop);
    }
    return {
      width: o.width * s.x,
      height: o.height * s.y,
      x: o.x * s.x - r.scrollLeft * s.x + p.x,
      y: o.y * s.y - r.scrollTop * s.y + p.y,
    };
  },
  getDocumentElement: Y,
  getClippingRect: function (t) {
    let { element: e, boundary: o, rootBoundary: n, strategy: l } = t;
    const a = [
        ...(o === "clippingAncestors"
          ? bt(e)
            ? []
            : (function (r, s) {
                const p = s.get(r);
                if (p) return p;
                let g = pt(r, [], !1).filter((h) => K(h) && lt(h) !== "body"),
                  d = null;
                const u = j(r).position === "fixed";
                let f = u ? Q(r) : r;
                for (; K(f) && !it(f); ) {
                  const h = j(f),
                    y = Ot(f);
                  y || h.position !== "fixed" || (d = null),
                    (
                      u
                        ? !y && !d
                        : (!y &&
                            h.position === "static" &&
                            d &&
                            ["absolute", "fixed"].includes(d.position)) ||
                          (dt(f) && !y && pe(r, f))
                    )
                      ? (g = g.filter((v) => v !== f))
                      : (d = h),
                    (f = Q(f));
                }
                return s.set(r, g), g;
              })(e, this._c)
          : [].concat(o)),
        n,
      ],
      c = a[0],
      i = a.reduce((r, s) => {
        const p = Gt(e, s, l);
        return (
          (r.top = z(p.top, r.top)),
          (r.right = q(p.right, r.right)),
          (r.bottom = q(p.bottom, r.bottom)),
          (r.left = z(p.left, r.left)),
          r
        );
      }, Gt(e, c, l));
    return {
      width: i.right - i.left,
      height: i.bottom - i.top,
      x: i.left,
      y: i.top,
    };
  },
  getOffsetParent: Ut,
  getElementRects: function (t) {
    return N(this, null, function* () {
      const e = this.getOffsetParent || Ut,
        o = this.getDimensions,
        n = yield o(t.floating);
      return {
        reference: Fe(t.reference, yield e(t.floating), t.strategy),
        floating: { x: 0, y: 0, width: n.width, height: n.height },
      };
    });
  },
  getClientRects: function (t) {
    return Array.from(t.getClientRects());
  },
  getDimensions: function (t) {
    const { width: e, height: o } = fe(t);
    return { width: e, height: o };
  },
  getScale: rt,
  isElement: K,
  isRTL: function (t) {
    return j(t).direction === "rtl";
  },
};
function We(t, e, o, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: l = !0,
      ancestorResize: a = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: r = !1,
    } = n,
    s = Ft(t),
    p = l || a ? [...(s ? pt(s) : []), ...pt(e)] : [];
  p.forEach((y) => {
    l && y.addEventListener("scroll", o, { passive: !0 }),
      a && y.addEventListener("resize", o);
  });
  const g =
    s && i
      ? (function (y, v) {
          let m,
            w = null;
          const x = Y(y);
          function P() {
            var L;
            clearTimeout(m), (L = w) == null || L.disconnect(), (w = null);
          }
          return (
            (function L(D, O) {
              D === void 0 && (D = !1), O === void 0 && (O = 1), P();
              const {
                left: b,
                top: R,
                width: E,
                height: C,
              } = y.getBoundingClientRect();
              if ((D || v(), !E || !C)) return;
              const A = {
                rootMargin:
                  -gt(R) +
                  "px " +
                  -gt(x.clientWidth - (b + E)) +
                  "px " +
                  -gt(x.clientHeight - (R + C)) +
                  "px " +
                  -gt(b) +
                  "px",
                threshold: z(0, q(1, O)) || 1,
              };
              let _ = !0;
              function F(k) {
                const $ = k[0].intersectionRatio;
                if ($ !== O) {
                  if (!_) return L();
                  $
                    ? L(!1, $)
                    : (m = setTimeout(() => {
                        L(!1, 1e-7);
                      }, 1e3));
                }
                _ = !1;
              }
              try {
                w = new IntersectionObserver(
                  F,
                  S(T({}, A), { root: x.ownerDocument })
                );
              } catch (k) {
                w = new IntersectionObserver(F, A);
              }
              w.observe(y);
            })(!0),
            P
          );
        })(s, o)
      : null;
  let d,
    u = -1,
    f = null;
  c &&
    ((f = new ResizeObserver((y) => {
      let [v] = y;
      v &&
        v.target === s &&
        f &&
        (f.unobserve(e),
        cancelAnimationFrame(u),
        (u = requestAnimationFrame(() => {
          var m;
          (m = f) == null || m.observe(e);
        }))),
        o();
    })),
    s && !r && f.observe(s),
    f.observe(e));
  let h = r ? et(t) : null;
  return (
    r &&
      (function y() {
        const v = et(t);
        !h ||
          (v.x === h.x &&
            v.y === h.y &&
            v.width === h.width &&
            v.height === h.height) ||
          o(),
          (h = v),
          (d = requestAnimationFrame(y));
      })(),
    o(),
    () => {
      var y;
      p.forEach((v) => {
        l && v.removeEventListener("scroll", o),
          a && v.removeEventListener("resize", o);
      }),
        g == null || g(),
        (y = f) == null || y.disconnect(),
        (f = null),
        r && cancelAnimationFrame(d);
    }
  );
}
const ze = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        fn(o) {
          return N(this, null, function* () {
            var n, l;
            const { x: a, y: c, placement: i, middlewareData: r } = o,
              s = yield (function (p, g) {
                return N(this, null, function* () {
                  const { placement: d, platform: u, elements: f } = p,
                    h = yield u.isRTL == null ? void 0 : u.isRTL(f.floating),
                    y = U(d),
                    v = st(d),
                    m = tt(d) === "y",
                    w = ["left", "top"].includes(y) ? -1 : 1,
                    x = h && m ? -1 : 1,
                    P = nt(g, p);
                  let {
                    mainAxis: L,
                    crossAxis: D,
                    alignmentAxis: O,
                  } = typeof P == "number"
                    ? { mainAxis: P, crossAxis: 0, alignmentAxis: null }
                    : T({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, P);
                  return (
                    v && typeof O == "number" && (D = v === "end" ? -1 * O : O),
                    m ? { x: D * x, y: L * w } : { x: L * w, y: D * x }
                  );
                });
              })(o, t);
            return i === ((n = r.offset) == null ? void 0 : n.placement) &&
              (l = r.arrow) != null &&
              l.alignmentOffset
              ? {}
              : { x: a + s.x, y: c + s.y, data: S(T({}, s), { placement: i }) };
          });
        },
      }
    );
  },
  Ve = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        fn(o) {
          return N(this, null, function* () {
            const { x: n, y: l, placement: a } = o,
              v = nt(t, o),
              {
                mainAxis: c = !0,
                crossAxis: i = !1,
                limiter: r = {
                  fn: (m) => {
                    let { x: w, y: x } = m;
                    return { x: w, y: x };
                  },
                },
              } = v,
              s = at(v, ["mainAxis", "crossAxis", "limiter"]),
              p = { x: n, y: l },
              g = yield ut(o, s),
              d = tt(U(a)),
              u = se(d);
            let f = p[u],
              h = p[d];
            if (c) {
              const m = u === "y" ? "bottom" : "right";
              f = Dt(f + g[u === "y" ? "top" : "left"], f, f - g[m]);
            }
            if (i) {
              const m = d === "y" ? "bottom" : "right";
              h = Dt(h + g[d === "y" ? "top" : "left"], h, h - g[m]);
            }
            const y = r.fn(S(T({}, o), { [u]: f, [d]: h }));
            return S(T({}, y), { data: { x: y.x - n, y: y.y - l } });
          });
        },
      }
    );
  },
  Ie = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        fn(o) {
          return N(this, null, function* () {
            var n, l;
            const {
                placement: a,
                middlewareData: c,
                rects: i,
                initialPlacement: r,
                platform: s,
                elements: p,
              } = o,
              F = nt(t, o),
              {
                mainAxis: g = !0,
                crossAxis: d = !0,
                fallbackPlacements: u,
                fallbackStrategy: f = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: y = !0,
              } = F,
              v = at(F, [
                "mainAxis",
                "crossAxis",
                "fallbackPlacements",
                "fallbackStrategy",
                "fallbackAxisSideDirection",
                "flipAlignment",
              ]);
            if ((n = c.arrow) != null && n.alignmentOffset) return {};
            const m = U(a),
              w = tt(r),
              x = U(r) === r,
              P = yield s.isRTL == null ? void 0 : s.isRTL(p.floating),
              L =
                u ||
                (x || !y
                  ? [yt(r)]
                  : (function (k) {
                      const $ = yt(k);
                      return [Lt(k), $, Lt($)];
                    })(r)),
              D = h !== "none";
            !u &&
              D &&
              L.push(
                ...(function (k, $, B, I) {
                  const H = st(k);
                  let M = (function (J, G, me) {
                    const Wt = ["left", "right"],
                      zt = ["right", "left"],
                      ge = ["top", "bottom"],
                      ye = ["bottom", "top"];
                    switch (J) {
                      case "top":
                      case "bottom":
                        return me ? (G ? zt : Wt) : G ? Wt : zt;
                      case "left":
                      case "right":
                        return G ? ge : ye;
                      default:
                        return [];
                    }
                  })(U(k), B === "start", I);
                  return (
                    H &&
                      ((M = M.map((J) => J + "-" + H)),
                      $ && (M = M.concat(M.map(Lt)))),
                    M
                  );
                })(r, y, h, P)
              );
            const O = [r, ...L],
              b = yield ut(o, v),
              R = [];
            let E = ((l = c.flip) == null ? void 0 : l.overflows) || [];
            if ((g && R.push(b[m]), d)) {
              const k = (function ($, B, I) {
                I === void 0 && (I = !1);
                const H = st($),
                  M = Ht($),
                  J = Bt(M);
                let G =
                  M === "x"
                    ? H === (I ? "end" : "start")
                      ? "right"
                      : "left"
                    : H === "start"
                    ? "bottom"
                    : "top";
                return (
                  B.reference[J] > B.floating[J] && (G = yt(G)), [G, yt(G)]
                );
              })(a, i, P);
              R.push(b[k[0]], b[k[1]]);
            }
            if (
              ((E = [...E, { placement: a, overflows: R }]),
              !R.every((k) => k <= 0))
            ) {
              var C, A;
              const k = (((C = c.flip) == null ? void 0 : C.index) || 0) + 1,
                $ = O[k];
              if ($)
                return {
                  data: { index: k, overflows: E },
                  reset: { placement: $ },
                };
              let B =
                (A = E.filter((I) => I.overflows[0] <= 0).sort(
                  (I, H) => I.overflows[1] - H.overflows[1]
                )[0]) == null
                  ? void 0
                  : A.placement;
              if (!B)
                switch (f) {
                  case "bestFit": {
                    var _;
                    const I =
                      (_ = E.filter((H) => {
                        if (D) {
                          const M = tt(H.placement);
                          return M === w || M === "y";
                        }
                        return !0;
                      })
                        .map((H) => [
                          H.placement,
                          H.overflows
                            .filter((M) => M > 0)
                            .reduce((M, J) => M + J, 0),
                        ])
                        .sort((H, M) => H[1] - M[1])[0]) == null
                        ? void 0
                        : _[0];
                    I && (B = I);
                    break;
                  }
                  case "initialPlacement":
                    B = r;
                }
              if (a !== B) return { reset: { placement: B } };
            }
            return {};
          });
        },
      }
    );
  },
  Ne = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        fn(o) {
          return N(this, null, function* () {
            const { placement: n, rects: l, platform: a, elements: c } = o,
              b = nt(t, o),
              { apply: i = () => {} } = b,
              r = at(b, ["apply"]),
              s = yield ut(o, r),
              p = U(n),
              g = st(n),
              d = tt(n) === "y",
              { width: u, height: f } = l.floating;
            let h, y;
            p === "top" || p === "bottom"
              ? ((h = p),
                (y =
                  g ===
                  ((yield a.isRTL == null ? void 0 : a.isRTL(c.floating))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((y = p), (h = g === "end" ? "top" : "bottom"));
            const v = f - s.top - s.bottom,
              m = u - s.left - s.right,
              w = q(f - s[h], v),
              x = q(u - s[y], m),
              P = !o.middlewareData.shift;
            let L = w,
              D = x;
            if (
              (d ? (D = g || P ? q(x, m) : m) : (L = g || P ? q(w, v) : v),
              P && !g)
            ) {
              const R = z(s.left, 0),
                E = z(s.right, 0),
                C = z(s.top, 0),
                A = z(s.bottom, 0);
              d
                ? (D =
                    u - 2 * (R !== 0 || E !== 0 ? R + E : z(s.left, s.right)))
                : (L =
                    f - 2 * (C !== 0 || A !== 0 ? C + A : z(s.top, s.bottom)));
            }
            yield i(S(T({}, o), { availableWidth: D, availableHeight: L }));
            const O = yield a.getDimensions(c.floating);
            return u !== O.width || f !== O.height
              ? { reset: { rects: !0 } }
              : {};
          });
        },
      }
    );
  },
  je = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "hide",
        options: t,
        fn(o) {
          return N(this, null, function* () {
            const { rects: n } = o,
              c = nt(t, o),
              { strategy: l = "referenceHidden" } = c,
              a = at(c, ["strategy"]);
            switch (l) {
              case "referenceHidden": {
                const i = Yt(
                  yield ut(o, S(T({}, a), { elementContext: "reference" })),
                  n.reference
                );
                return {
                  data: { referenceHiddenOffsets: i, referenceHidden: _t(i) },
                };
              }
              case "escaped": {
                const i = Yt(
                  yield ut(o, S(T({}, a), { altBoundary: !0 })),
                  n.floating
                );
                return { data: { escapedOffsets: i, escaped: _t(i) } };
              }
              default:
                return {};
            }
          });
        },
      }
    );
  },
  qe = (t) => ({
    name: "arrow",
    options: t,
    fn(o) {
      return N(this, null, function* () {
        const {
            x: n,
            y: l,
            placement: a,
            rects: c,
            platform: i,
            elements: r,
            middlewareData: s,
          } = o,
          { element: p, padding: g = 0 } = nt(t, o) || {};
        if (p == null) return {};
        const d = le(g),
          u = { x: n, y: l },
          f = Ht(a),
          h = Bt(f),
          y = yield i.getDimensions(p),
          v = f === "y",
          m = v ? "top" : "left",
          w = v ? "bottom" : "right",
          x = v ? "clientHeight" : "clientWidth",
          P = c.reference[h] + c.reference[f] - u[f] - c.floating[h],
          L = u[f] - c.reference[f],
          D = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(p);
        let O = D ? D[x] : 0;
        (O && (yield i.isElement == null ? void 0 : i.isElement(D))) ||
          (O = r.floating[x] || c.floating[h]);
        const b = P / 2 - L / 2,
          R = O / 2 - y[h] / 2 - 1,
          E = q(d[m], R),
          C = q(d[w], R),
          A = E,
          _ = O - y[h] - C,
          F = O / 2 - y[h] / 2 + b,
          k = Dt(A, F, _),
          $ =
            !s.arrow &&
            st(a) != null &&
            F !== k &&
            c.reference[h] / 2 - (F < A ? E : C) - y[h] / 2 < 0,
          B = $ ? (F < A ? F - A : F - _) : 0;
        return {
          [f]: u[f] + B,
          data: T(
            { [f]: k, centerOffset: F - k - B },
            $ && { alignmentOffset: B }
          ),
          reset: $,
        };
      });
    },
  }),
  Ke = (t, e, o) => {
    const n = new Map(),
      l = T({ platform: he }, o),
      a = S(T({}, l.platform), { _c: n });
    return ((c, i, r) =>
      N(void 0, null, function* () {
        const {
            placement: s = "bottom",
            strategy: p = "absolute",
            middleware: g = [],
            platform: d,
          } = r,
          u = g.filter(Boolean),
          f = yield d.isRTL == null ? void 0 : d.isRTL(i);
        let h = yield d.getElementRects({
            reference: c,
            floating: i,
            strategy: p,
          }),
          { x: y, y: v } = Xt(h, s, f),
          m = s,
          w = {},
          x = 0;
        for (let P = 0; P < u.length; P++) {
          const { name: L, fn: D } = u[P],
            {
              x: O,
              y: b,
              data: R,
              reset: E,
            } = yield D({
              x: y,
              y: v,
              initialPlacement: s,
              placement: m,
              strategy: p,
              middlewareData: w,
              rects: h,
              platform: d,
              elements: { reference: c, floating: i },
            });
          (y = O != null ? O : y),
            (v = b != null ? b : v),
            (w = S(T({}, w), { [L]: T(T({}, w[L]), R) })),
            E &&
              x <= 50 &&
              (x++,
              typeof E == "object" &&
                (E.placement && (m = E.placement),
                E.rects &&
                  (h =
                    E.rects === !0
                      ? yield d.getElementRects({
                          reference: c,
                          floating: i,
                          strategy: p,
                        })
                      : E.rects),
                ({ x: y, y: v } = Xt(h, m, f))),
              (P = -1));
        }
        return { x: y, y: v, placement: m, strategy: p, middlewareData: w };
      }))(t, e, S(T({}, l), { platform: a }));
  };
var Xe = Pe(
    '<svg display=block viewBox="0 0 30 30"style=transform:scale(1.02)><g><path fill=none d=M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z></path><path stroke=none d=M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z>'
  ),
  Tt = oe();
function kt() {
  const t = ie(Tt);
  if (t === void 0)
    throw new Error(
      "[kobalte]: `usePopperContext` must be used within a `Popper` component"
    );
  return t;
}
var Ye = { top: 180, right: -90, bottom: 0, left: 90 };
function _e(t) {
  const e = kt(),
    o = re({ size: 30 }, t),
    [n, l] = Ct(o, ["ref", "style", "size"]),
    a = () => e.currentPlacement().split("-")[0],
    c = (function (r) {
      const [s, p] = wt();
      return (
        ot(() => {
          const g = r();
          g && p(Oe(g).getComputedStyle(g));
        }),
        s
      );
    })(e.contentRef),
    i = () => {
      var r;
      return (
        2 *
        parseInt(
          ((r = c()) == null
            ? void 0
            : r.getPropertyValue(`border-${a()}-width`)) || "0px"
        ) *
        (30 / n.size)
      );
    };
  return ft(
    $t,
    At(
      {
        as: "div",
        ref(r) {
          var s = Mt(e.setArrowRef, n.ref);
          typeof s == "function" && s(r);
        },
        "aria-hidden": "true",
        get style() {
          var r, s;
          return T(
            {
              position: "absolute",
              "font-size": `${n.size}px`,
              width: "1em",
              height: "1em",
              "pointer-events": "none",
              fill:
                ((r = c()) == null
                  ? void 0
                  : r.getPropertyValue("background-color")) || "none",
              stroke:
                ((s = c()) == null
                  ? void 0
                  : s.getPropertyValue(`border-${a()}-color`)) || "none",
              "stroke-width": i(),
            },
            n.style
          );
        },
      },
      l,
      {
        get children() {
          var r = Xe(),
            s = r.firstChild;
          return (
            s.firstChild.nextSibling,
            be(() =>
              Ee(s, "transform", `rotate(${Ye[a()]} 15 15) translate(0 2)`)
            ),
            r
          );
        },
      }
    )
  );
}
function Zt(t) {
  const {
    x: e = 0,
    y: o = 0,
    width: n = 0,
    height: l = 0,
  } = t != null ? t : {};
  if (typeof DOMRect == "function") return new DOMRect(e, o, n, l);
  const a = {
    x: e,
    y: o,
    width: n,
    height: l,
    top: o,
    right: e + n,
    bottom: o + l,
    left: e,
  };
  return S(T({}, a), { toJSON: () => a });
}
function Je(t) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(t);
}
var Ge = { top: "bottom", right: "left", bottom: "top", left: "right" },
  en = Object.assign(
    function (t) {
      const e = re(
          {
            getAnchorRect: (d) =>
              d == null ? void 0 : d.getBoundingClientRect(),
            placement: "bottom",
            gutter: 0,
            shift: 0,
            flip: !0,
            slide: !0,
            overlap: !1,
            sameWidth: !1,
            fitViewport: !1,
            hideWhenDetached: !1,
            detachedPadding: 0,
            arrowPadding: 4,
            overflowPadding: 8,
          },
          t
        ),
        [o, n] = wt(),
        [l, a] = wt(),
        [c, i] = wt(e.placement),
        r = () => {
          var f;
          return (
            (d = (f = e.anchorRef) == null ? void 0 : f.call(e)),
            (u = e.getAnchorRect),
            {
              contextElement: d,
              getBoundingClientRect: () => {
                const h = u(d);
                return h ? Zt(h) : d ? d.getBoundingClientRect() : Zt();
              },
            }
          );
          var d, u;
        },
        { direction: s } = De();
      function p() {
        return N(this, null, function* () {
          var L, D, O;
          const d = r(),
            u = o(),
            f = l();
          if (!d || !u) return;
          const h = ((f == null ? void 0 : f.clientHeight) || 0) / 2,
            y =
              typeof e.gutter == "number"
                ? e.gutter + h
                : (L = e.gutter) != null
                ? L
                : h;
          u.style.setProperty(
            "--kb-popper-content-overflow-padding",
            `${e.overflowPadding}px`
          ),
            d.getBoundingClientRect();
          const v = [
            ze(({ placement: b }) => {
              const R = !!b.split("-")[1];
              return {
                mainAxis: y,
                crossAxis: R ? void 0 : e.shift,
                alignmentAxis: e.shift,
              };
            }),
          ];
          if (e.flip !== !1) {
            const b = typeof e.flip == "string" ? e.flip.split(" ") : void 0;
            if (b !== void 0 && !b.every(Je))
              throw new Error(
                "`flip` expects a spaced-delimited list of placements"
              );
            v.push(Ie({ padding: e.overflowPadding, fallbackPlacements: b }));
          }
          (e.slide || e.overlap) &&
            v.push(
              Ve({
                mainAxis: e.slide,
                crossAxis: e.overlap,
                padding: e.overflowPadding,
              })
            ),
            v.push(
              Ne({
                padding: e.overflowPadding,
                apply({ availableWidth: b, availableHeight: R, rects: E }) {
                  const C = Math.round(E.reference.width);
                  (b = Math.floor(b)),
                    (R = Math.floor(R)),
                    u.style.setProperty("--kb-popper-anchor-width", `${C}px`),
                    u.style.setProperty(
                      "--kb-popper-content-available-width",
                      `${b}px`
                    ),
                    u.style.setProperty(
                      "--kb-popper-content-available-height",
                      `${R}px`
                    ),
                    e.sameWidth && (u.style.width = `${C}px`),
                    e.fitViewport &&
                      ((u.style.maxWidth = `${b}px`),
                      (u.style.maxHeight = `${R}px`));
                },
              })
            ),
            e.hideWhenDetached && v.push(je({ padding: e.detachedPadding })),
            f && v.push(qe({ element: f, padding: e.arrowPadding }));
          const m = yield Ke(d, u, {
            placement: e.placement,
            strategy: "absolute",
            middleware: v,
            platform: S(T({}, he), { isRTL: () => s() === "rtl" }),
          });
          if (
            (i(m.placement),
            (D = e.onCurrentPlacementChange) == null || D.call(e, m.placement),
            !u)
          )
            return;
          u.style.setProperty(
            "--kb-popper-content-transform-origin",
            (function (b, R) {
              const [E, C] = b.split("-"),
                A = Ge[E];
              return C
                ? E === "left" || E === "right"
                  ? `${A} ${C === "start" ? "top" : "bottom"}`
                  : C === "start"
                  ? `${A} ${R === "rtl" ? "right" : "left"}`
                  : `${A} ${R === "rtl" ? "left" : "right"}`
                : `${A} center`;
            })(m.placement, s())
          );
          const w = Math.round(m.x),
            x = Math.round(m.y);
          let P;
          if (
            (e.hideWhenDetached &&
              (P =
                (O = m.middlewareData.hide) != null && O.referenceHidden
                  ? "hidden"
                  : "visible"),
            Object.assign(u.style, {
              top: "0",
              left: "0",
              transform: `translate3d(${w}px, ${x}px, 0)`,
              visibility: P,
            }),
            f && m.middlewareData.arrow)
          ) {
            const { x: b, y: R } = m.middlewareData.arrow,
              E = m.placement.split("-")[0];
            Object.assign(f.style, {
              left: b != null ? `${b}px` : "",
              top: R != null ? `${R}px` : "",
              [E]: "100%",
            });
          }
        });
      }
      ot(() => {
        const d = r(),
          u = o();
        if (!d || !u) return;
        const f = We(d, u, p, {
          elementResize: typeof ResizeObserver == "function",
        });
        ct(f);
      }),
        ot(() => {
          var f;
          const d = o(),
            u = (f = e.contentRef) == null ? void 0 : f.call(e);
          d &&
            u &&
            queueMicrotask(() => {
              d.style.zIndex = getComputedStyle(u).zIndex;
            });
        });
      const g = {
        currentPlacement: c,
        contentRef: () => {
          var d;
          return (d = e.contentRef) == null ? void 0 : d.call(e);
        },
        setPositionerRef: n,
        setArrowRef: a,
      };
      return ft(Tt.Provider, {
        value: g,
        get children() {
          return e.children;
        },
      });
    },
    {
      Arrow: _e,
      Context: Tt,
      usePopperContext: kt,
      Positioner: function (t) {
        const e = kt(),
          [o, n] = Ct(t, ["ref", "style"]);
        return ft(
          $t,
          At(
            {
              as: "div",
              ref(l) {
                var a = Mt(e.setPositionerRef, o.ref);
                typeof a == "function" && a(l);
              },
              "data-popper-positioner": "",
              get style() {
                return T(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    "min-width": "max-content",
                  },
                  o.style
                );
              },
            },
            n
          )
        );
      },
    }
  ),
  te = "interactOutside.pointerDownOutside",
  ee = "interactOutside.focusOutside",
  ne = oe();
function nn(t) {
  let e;
  const o = ie(ne),
    [n, l] = Ct(t, [
      "ref",
      "disableOutsidePointerEvents",
      "excludedElements",
      "onEscapeKeyDown",
      "onPointerDownOutside",
      "onFocusOutside",
      "onInteractOutside",
      "onDismiss",
      "bypassTopMostLayerCheck",
    ]),
    a = new Set([]);
  (function (i, r) {
    let s,
      p = ke;
    const g = () => Pt(r()),
      d = (m) => {
        var w;
        return (w = i.onPointerDownOutside) == null ? void 0 : w.call(i, m);
      },
      u = (m) => {
        var w;
        return (w = i.onFocusOutside) == null ? void 0 : w.call(i, m);
      },
      f = (m) => {
        var w;
        return (w = i.onInteractOutside) == null ? void 0 : w.call(i, m);
      },
      h = (m) => {
        var x;
        const w = m.target;
        return (
          w instanceof HTMLElement &&
          !w.closest(`[${Ce}]`) &&
          !!mt(g(), w) &&
          !mt(r(), w) &&
          !((x = i.shouldExcludeElement) != null && x.call(i, w))
        );
      },
      y = (m) => {
        function w() {
          const x = r(),
            P = m.target;
          if (!x || !P || !h(m)) return;
          const L = Kt([d, f]);
          P.addEventListener(te, L, { once: !0 });
          const D = new CustomEvent(te, {
            bubbles: !1,
            cancelable: !0,
            detail: {
              originalEvent: m,
              isContextMenu: m.button === 2 || (Ae(m) && m.button === 0),
            },
          });
          P.dispatchEvent(D);
        }
        m.pointerType === "touch"
          ? (g().removeEventListener("click", w),
            (p = w),
            g().addEventListener("click", w, { once: !0 }))
          : w();
      },
      v = (m) => {
        const w = r(),
          x = m.target;
        if (!w || !x || !h(m)) return;
        const P = Kt([u, f]);
        x.addEventListener(ee, P, { once: !0 });
        const L = new CustomEvent(ee, {
          bubbles: !1,
          cancelable: !0,
          detail: { originalEvent: m, isContextMenu: !1 },
        });
        x.dispatchEvent(L);
      };
    ot(() => {
      jt ||
        qt(i.isDisabled) ||
        ((s = window.setTimeout(() => {
          g().addEventListener("pointerdown", y, !0);
        }, 0)),
        g().addEventListener("focusin", v, !0),
        ct(() => {
          window.clearTimeout(s),
            g().removeEventListener("click", p),
            g().removeEventListener("pointerdown", y, !0),
            g().removeEventListener("focusin", v, !0);
        }));
    });
  })(
    {
      shouldExcludeElement: (i) => {
        var r;
        return (
          !!e &&
          (((r = n.excludedElements) == null
            ? void 0
            : r.some((s) => mt(s(), i))) ||
            [...a].some((s) => mt(s, i)))
        );
      },
      onPointerDownOutside: (i) => {
        var r, s, p;
        e &&
          !W.isBelowPointerBlockingLayer(e) &&
          (n.bypassTopMostLayerCheck || W.isTopMostLayer(e)) &&
          ((r = n.onPointerDownOutside) == null || r.call(n, i),
          (s = n.onInteractOutside) == null || s.call(n, i),
          i.defaultPrevented || (p = n.onDismiss) == null || p.call(n));
      },
      onFocusOutside: (i) => {
        var r, s, p;
        (r = n.onFocusOutside) == null || r.call(n, i),
          (s = n.onInteractOutside) == null || s.call(n, i),
          i.defaultPrevented || (p = n.onDismiss) == null || p.call(n);
      },
    },
    () => e
  ),
    (function (i) {
      const r = (s) => {
        var p;
        s.key === Te.Escape &&
          ((p = i.onEscapeKeyDown) == null || p.call(i, s));
      };
      ot(() => {
        var p, g;
        if (jt || qt(i.isDisabled)) return;
        const s =
          (g = (p = i.ownerDocument) == null ? void 0 : p.call(i)) != null
            ? g
            : Pt();
        s.addEventListener("keydown", r),
          ct(() => {
            s.removeEventListener("keydown", r);
          });
      });
    })({
      ownerDocument: () => Pt(e),
      onEscapeKeyDown: (i) => {
        var r;
        e &&
          W.isTopMostLayer(e) &&
          ((r = n.onEscapeKeyDown) == null || r.call(n, i),
          !i.defaultPrevented &&
            n.onDismiss &&
            (i.preventDefault(), n.onDismiss()));
      },
    }),
    Le(() => {
      if (!e) return;
      W.addLayer({
        node: e,
        isPointerBlocking: n.disableOutsidePointerEvents,
        dismiss: n.onDismiss,
      });
      const i = o == null ? void 0 : o.registerNestedLayer(e);
      W.assignPointerEventToLayers(),
        W.disableBodyPointerEvents(e),
        ct(() => {
          e &&
            (W.removeLayer(e),
            i == null || i(),
            W.assignPointerEventToLayers(),
            W.restoreBodyPointerEvents(e));
        });
    }),
    ot(
      Re(
        [() => e, () => n.disableOutsidePointerEvents],
        ([i, r]) => {
          if (!i) return;
          const s = W.find(i);
          s &&
            s.isPointerBlocking !== r &&
            ((s.isPointerBlocking = r), W.assignPointerEventToLayers()),
            r && W.disableBodyPointerEvents(i),
            ct(() => {
              W.restoreBodyPointerEvents(i);
            });
        },
        { defer: !0 }
      )
    );
  const c = {
    registerNestedLayer: (i) => {
      a.add(i);
      const r = o == null ? void 0 : o.registerNestedLayer(i);
      return () => {
        a.delete(i), r == null || r();
      };
    },
  };
  return ft(ne.Provider, {
    value: c,
    get children() {
      return ft(
        $t,
        At(
          {
            as: "div",
            ref(i) {
              var r = Mt((s) => (e = s), n.ref);
              typeof r == "function" && r(i);
            },
          },
          l
        )
      );
    },
  });
}
export { nn as D, _e as P, en as a };
