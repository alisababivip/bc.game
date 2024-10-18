import { b as dt } from "./FN6EICGO-b0e5a495.js";
import { m as pt, l as yt, g as gt, x as vt } from "./index-4897b9da.js";
import {
  a2 as Tt,
  l as K,
  o as X,
  aQ as bt,
  a4 as Dt,
} from "./manifest-a234c8a0.js";
var ot = Tt();
function wt() {
  const t = Dt(ot);
  if (t === void 0)
    throw new Error(
      "[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component"
    );
  return t;
}
function lt(t, e) {
  return !!(e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING);
}
function H(t, e) {
  const n = (function (i) {
    const r = i.map((s, o) => [o, s]);
    let a = !1;
    return (
      r.sort(([s, o], [h, f]) => {
        const m = o.ref(),
          p = f.ref();
        return m === p
          ? 0
          : m && p
          ? lt(m, p)
            ? (s > h && (a = !0), -1)
            : (s < h && (a = !0), 1)
          : 0;
      }),
      a ? r.map(([s, o]) => o) : i
    );
  })(t);
  t !== n && e(n);
}
function St(t, e) {
  if (typeof IntersectionObserver != "function")
    return void (function (i, r) {
      K(() => {
        const a = setTimeout(() => {
          H(i(), r);
        });
        X(() => clearTimeout(a));
      });
    })(t, e);
  let n = [];
  K(() => {
    const i = (function (a) {
        var f, m;
        const s = a[0],
          o = (f = a[a.length - 1]) == null ? void 0 : f.ref();
        let h =
          (m = s == null ? void 0 : s.ref()) == null ? void 0 : m.parentElement;
        for (; h; ) {
          if (o && h.contains(o)) return h;
          h = h.parentElement;
        }
        return gt(h).body;
      })(t()),
      r = new IntersectionObserver(
        () => {
          const a = !!n.length;
          (n = t()), a && H(t(), e);
        },
        { root: i }
      );
    for (const a of t()) {
      const s = a.ref();
      s && r.observe(s);
    }
    X(() => r.disconnect());
  });
}
function Xt(t = {}) {
  const [e, n] = dt({
    value: () => yt(t.items),
    onChange: (r) => {
      var a;
      return (a = t.onItemsChange) == null ? void 0 : a.call(t, r);
    },
  });
  St(e, n);
  const i = (r) => (
    n((a) => {
      const s = (function (o, h) {
        var p;
        const f = h.ref();
        if (!f) return -1;
        let m = o.length;
        if (!m) return -1;
        for (; m--; ) {
          const c = (p = o[m]) == null ? void 0 : p.ref();
          if (c && lt(c, f)) return m + 1;
        }
        return 0;
      })(a, r);
      return vt(a, r, s);
    }),
    () => {
      n((a) => {
        const s = a.filter((o) => o.ref() !== r.ref());
        return a.length === s.length ? a : s;
      });
    }
  );
  return {
    DomCollectionProvider: (r) =>
      bt(ot.Provider, {
        value: { registerItem: i },
        get children() {
          return r.children;
        },
      }),
  };
}
function Yt(t) {
  const e = wt(),
    n = pt({ shouldRegisterItem: !0 }, t);
  K(() => {
    if (!n.shouldRegisterItem) return;
    const i = e.registerItem(n.getItem());
    X(i);
  });
}
function Ot(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Zt(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const ct = (t, e, n) => Math.min(Math.max(n, t), e),
  v = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
  $ = (t) => typeof t == "number",
  I = (t) => Array.isArray(t) && !$(t[0]),
  At = (t, e, n) => {
    const i = e - t;
    return ((((n - t) % i) + i) % i) + t;
  },
  ut = (t, e, n) => -n * t + n * e + t,
  xt = () => {},
  S = (t) => t,
  L = (t, e, n) => (e - t == 0 ? 1 : (n - t) / (e - t));
function J(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const r = L(0, e, i);
    t.push(ut(n, 1, r));
  }
}
function Et(
  t,
  e = (function (i) {
    const r = [0];
    return J(r, i - 1), r;
  })(t.length),
  n = S
) {
  const i = t.length,
    r = i - e.length;
  return (
    r > 0 && J(e, r),
    (a) => {
      let s = 0;
      for (; s < i - 2 && !(a < e[s + 1]); s++);
      let o = ct(0, 1, L(e[s], e[s + 1], a));
      return (
        (o = (function (f, m) {
          return I(f) ? f[At(0, f.length, m)] : f;
        })(
          n,
          s
        )(o)),
        ut(t[s], t[s + 1], o)
      );
    }
  );
}
const ht = (t) => Array.isArray(t) && $(t[0]),
  Y = (t) => typeof t == "object" && !!t.createAnimation,
  U = (t) => typeof t == "function",
  It = (t) => typeof t == "string",
  N = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 },
  tt = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  kt = 1e-7,
  Mt = 12;
function P(t, e, n, i) {
  if (t === e && n === i) return S;
  const r = (a) =>
    (function (s, o, h, f, m) {
      let p,
        c,
        D = 0;
      do
        (c = o + (h - o) / 2), (p = tt(c, f, m) - s), p > 0 ? (h = c) : (o = c);
      while (Math.abs(p) > kt && ++D < Mt);
      return c;
    })(a, 0, 1, t, n);
  return (a) => (a === 0 || a === 1 ? a : tt(r(a), e, i));
}
const Pt = {
    ease: P(0.25, 0.1, 0.25, 1),
    "ease-in": P(0.42, 0, 1, 1),
    "ease-in-out": P(0.42, 0, 0.58, 1),
    "ease-out": P(0, 0, 0.58, 1),
  },
  Rt = /\((.*?)\)/;
function et(t) {
  if (U(t)) return t;
  if (ht(t)) return P(...t);
  const e = Pt[t];
  if (e) return e;
  if (t.startsWith("steps")) {
    const n = Rt.exec(t);
    if (n) {
      const i = n[1].split(",");
      return (
        (r, a = "end") =>
        (s) => {
          const o =
              (s = a === "end" ? Math.min(s, 0.999) : Math.max(s, 0.001)) * r,
            h = a === "end" ? Math.floor(o) : Math.ceil(o);
          return ct(0, 1, h / r);
        }
      )(parseFloat(i[0]), i[1].trim());
    }
  }
  return S;
}
class Gt {
  constructor(
    e,
    n = [0, 1],
    {
      easing: i,
      duration: r = v.duration,
      delay: a = v.delay,
      endDelay: s = v.endDelay,
      repeat: o = v.repeat,
      offset: h,
      direction: f = "normal",
      autoplay: m = !0,
    } = {}
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.easing = S),
      (this.duration = 0),
      (this.totalDuration = 0),
      (this.repeat = 0),
      (this.playState = "idle"),
      (this.finished = new Promise((c, D) => {
        (this.resolve = c), (this.reject = D);
      })),
      (i = i || v.easing),
      Y(i))
    ) {
      const c = i.createAnimation(n);
      (i = c.easing), (n = c.keyframes || n), (r = c.duration || r);
    }
    (this.repeat = o), (this.easing = I(i) ? S : et(i)), this.updateDuration(r);
    const p = Et(n, h, I(i) ? i.map(et) : S);
    (this.tick = (c) => {
      var D;
      let y = 0;
      (y =
        this.pauseTime !== void 0
          ? this.pauseTime
          : (c - this.startTime) * this.rate),
        (this.t = y),
        (y /= 1e3),
        (y = Math.max(y - a, 0)),
        this.playState === "finished" &&
          this.pauseTime === void 0 &&
          (y = this.totalDuration);
      const A = y / this.duration;
      let C = Math.floor(A),
        w = A % 1;
      !w && A >= 1 && (w = 1), w === 1 && C--;
      const j = C % 2;
      (f === "reverse" ||
        (f === "alternate" && j) ||
        (f === "alternate-reverse" && !j)) &&
        (w = 1 - w);
      const k = y >= this.totalDuration ? 1 : Math.min(w, 1),
        x = p(this.easing(k));
      e(x),
        this.pauseTime === void 0 &&
        (this.playState === "finished" || y >= this.totalDuration + s)
          ? ((this.playState = "finished"),
            (D = this.resolve) === null || D === void 0 || D.call(this, x))
          : this.playState !== "idle" &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
    }),
      m && this.play();
  }
  play() {
    const e = performance.now();
    (this.playState = "running"),
      this.pauseTime !== void 0
        ? (this.startTime = e - this.pauseTime)
        : this.startTime || (this.startTime = e),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      (this.frameRequestId = requestAnimationFrame(this.tick));
  }
  pause() {
    (this.playState = "paused"), (this.pauseTime = this.t);
  }
  finish() {
    (this.playState = "finished"), this.tick(0);
  }
  stop() {
    var e;
    (this.playState = "idle"),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (e = this.reject) === null || e === void 0 || e.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(e) {
    (this.duration = e), (this.totalDuration = e * (this.repeat + 1));
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(e) {
    this.pauseTime !== void 0 || this.rate === 0
      ? (this.pauseTime = e)
      : (this.startTime = performance.now() - e / this.rate);
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(e) {
    this.rate = e;
  }
}
class Ct {
  setAnimation(e) {
    (this.animation = e),
      e == null || e.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const z = new WeakMap();
function nt(t) {
  return z.has(t) || z.set(t, { transforms: [], values: new Map() }), z.get(t);
}
const jt = ["", "X", "Y", "Z"],
  _ = { x: "translateX", y: "translateY", z: "translateZ" },
  it = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (t) => t + "deg",
  },
  qt = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (t) => t + "px",
    },
    rotate: it,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: S },
    skew: it,
  },
  R = new Map(),
  Q = (t) => `--motion-${t}`,
  F = ["x", "y", "z"];
["translate", "scale", "rotate", "skew"].forEach((t) => {
  jt.forEach((e) => {
    F.push(t + e), R.set(Q(t + e), qt[t]);
  });
});
const Vt = (t, e) => F.indexOf(t) - F.indexOf(e),
  $t = new Set(F),
  ft = (t) => $t.has(t),
  Ut = (t) => t.sort(Vt).reduce(_t, "").trim(),
  _t = (t, e) => `${t} ${e}(var(${Q(e)}))`,
  Z = (t) => t.startsWith("--"),
  at = new Set(),
  W = (t, e) => document.createElement("div").animate(t, e),
  st = {
    cssRegisterProperty: () =>
      typeof CSS != "undefined" &&
      Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        W({ opacity: [1] });
      } catch (t) {
        return !1;
      }
      return !0;
    },
    finished: () => !!W({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        W({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch (t) {
        return !1;
      }
      return !0;
    },
  },
  B = {},
  E = {};
for (const t in st) E[t] = () => (B[t] === void 0 && (B[t] = st[t]()), B[t]);
const rt = (t, e) =>
    U(t)
      ? E.linearEasing()
        ? `linear(${((n, i) => {
            let r = "";
            const a = Math.round(i / 0.015);
            for (let s = 0; s < a; s++) r += n(L(0, a - 1, s)) + ", ";
            return r.substring(0, r.length - 2);
          })(t, e)})`
        : v.easing
      : ht(t)
      ? Ft(t)
      : t,
  Ft = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`;
function G(t) {
  return _[t] && (t = _[t]), ft(t) ? Q(t) : t;
}
const V = {
  get: (t, e) => {
    e = G(e);
    let n = Z(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
    if (!n && n !== 0) {
      const i = R.get(e);
      i && (n = i.initialValue);
    }
    return n;
  },
  set: (t, e, n) => {
    (e = G(e)), Z(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
  },
};
function Nt(t, e = !0) {
  if (t && t.playState !== "finished")
    try {
      t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
    } catch (n) {}
}
function zt(t, e) {
  var n;
  let i = (e == null ? void 0 : e.toDefaultUnit) || S;
  const r = t[t.length - 1];
  if (It(r)) {
    const a =
      ((n = r.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0
        ? void 0
        : n[2]) || "";
    a && (i = (s) => s + a);
  }
  return i;
}
function Lt(t, e, n, i = {}, r) {
  const a = window.__MOTION_DEV_TOOLS_RECORD,
    s = i.record !== !1 && a;
  let o,
    {
      duration: h = v.duration,
      delay: f = v.delay,
      endDelay: m = v.endDelay,
      repeat: p = v.repeat,
      easing: c = v.easing,
      persist: D = !1,
      direction: y,
      offset: A,
      allowWebkitAcceleration: C = !1,
      autoplay: w = !0,
    } = i;
  const j = nt(t),
    k = ft(e);
  let x = E.waapi();
  k &&
    ((g, u) => {
      _[u] && (u = _[u]);
      const { transforms: M } = nt(g);
      Ot(M, u), (g.style.transform = Ut(M));
    })(t, e);
  const T = G(e),
    q = (function (g, u) {
      return g.has(u) || g.set(u, new Ct()), g.get(u);
    })(j.values, T),
    O = R.get(T);
  return (
    Nt(q.animation, !(Y(c) && q.generator) && i.record !== !1),
    () => {
      const g = () => {
        var l, b;
        return (b =
          (l = V.get(t, T)) !== null && l !== void 0
            ? l
            : O == null
            ? void 0
            : O.initialValue) !== null && b !== void 0
          ? b
          : 0;
      };
      let u = (function (l, b) {
        for (let d = 0; d < l.length; d++)
          l[d] === null && (l[d] = d ? l[d - 1] : b());
        return l;
      })(((l) => (Array.isArray(l) ? l : [l]))(n), g);
      const M = zt(u, O);
      if (Y(c)) {
        const l = c.createAnimation(u, e !== "opacity", g, T, q);
        (c = l.easing), (u = l.keyframes || u), (h = l.duration || h);
      }
      if (
        (Z(T) &&
          (E.cssRegisterProperty()
            ? (function (l) {
                if (!at.has(l)) {
                  at.add(l);
                  try {
                    const { syntax: b, initialValue: d } = R.has(l)
                      ? R.get(l)
                      : {};
                    CSS.registerProperty({
                      name: l,
                      inherits: !1,
                      syntax: b,
                      initialValue: d,
                    });
                  } catch (b) {}
                }
              })(T)
            : (x = !1)),
        k && !E.linearEasing() && (U(c) || (I(c) && c.some(U))) && (x = !1),
        x)
      ) {
        O && (u = u.map((d) => ($(d) ? O.toDefaultUnit(d) : d))),
          u.length !== 1 || (E.partialKeyframes() && !s) || u.unshift(g());
        const l = {
          delay: N.ms(f),
          duration: N.ms(h),
          endDelay: N.ms(m),
          easing: I(c) ? void 0 : rt(c, h),
          direction: y,
          iterations: p + 1,
          fill: "both",
        };
        (o = t.animate(
          { [T]: u, offset: A, easing: I(c) ? c.map((d) => rt(d, h)) : void 0 },
          l
        )),
          o.finished ||
            (o.finished = new Promise((d, mt) => {
              (o.onfinish = d), (o.oncancel = mt);
            }));
        const b = u[u.length - 1];
        o.finished
          .then(() => {
            D || (V.set(t, T, b), o.cancel());
          })
          .catch(xt),
          C || (o.playbackRate = 1.000001);
      } else if (r && k)
        (u = u.map((l) => (typeof l == "string" ? parseFloat(l) : l))),
          u.length === 1 && u.unshift(parseFloat(g())),
          (o = new r(
            (l) => {
              V.set(t, T, M ? M(l) : l);
            },
            u,
            Object.assign(Object.assign({}, i), { duration: h, easing: c })
          ));
      else {
        const l = u[u.length - 1];
        V.set(t, T, O && $(l) ? O.toDefaultUnit(l) : l);
      }
      return (
        s &&
          a(
            t,
            e,
            u,
            { duration: h, delay: f, easing: c, repeat: p, offset: A },
            "motion-one"
          ),
        q.setAnimation(o),
        o && !w && o.pause(),
        o
      );
    }
  );
}
const Qt = (t, e) =>
  t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
function Ht(t, e) {
  var n;
  return (
    typeof t == "string"
      ? e
        ? (((n = e[t]) !== null && n !== void 0) ||
            (e[t] = document.querySelectorAll(t)),
          (t = e[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
export {
  Gt as A,
  Xt as a,
  Lt as b,
  Yt as c,
  v as d,
  S as e,
  zt as f,
  Qt as g,
  R as h,
  U as i,
  G as j,
  $ as k,
  It as l,
  Zt as m,
  xt as n,
  Ot as o,
  V as p,
  ft as q,
  Ht as r,
  Nt as s,
  N as t,
  _ as u,
  Q as v,
  Ut as w,
};
