import {
  y as k,
  h as x,
  i as y,
  l as A,
  z as O,
  g as U,
  v as Z,
  A as q,
  D as R,
  B as z,
  C as g,
} from "./index-4897b9da.js";
import {
  f as Y,
  l as E,
  ah as M,
  o as w,
  ae as B,
  a3 as G,
} from "./manifest-a234c8a0.js";
import { D as K } from "./number-field-a2716165.js";
var N = "focusScope.autoFocusOnMount",
  P = "focusScope.autoFocusOnUnmount",
  j = { bubbles: !1, cancelable: !0 },
  I = {
    stack: [],
    active() {
      return this.stack[0];
    },
    add(e) {
      var r;
      e !== this.active() && ((r = this.active()) == null || r.pause()),
        (this.stack = O(this.stack, e)),
        this.stack.unshift(e);
    },
    remove(e) {
      var r;
      (this.stack = O(this.stack, e)),
        (r = this.active()) == null || r.resume();
    },
  };
function se(e, r) {
  const [i, a] = Y(!1),
    d = {
      pause() {
        a(!0);
      },
      resume() {
        a(!1);
      },
    };
  let v = null;
  const h = (t) => {
      var o;
      return (o = e.onMountAutoFocus) == null ? void 0 : o.call(e, t);
    },
    c = (t) => {
      var o;
      return (o = e.onUnmountAutoFocus) == null ? void 0 : o.call(e, t);
    },
    m = () => U(r()),
    n = () => {
      const t = m().createElement("span");
      return (
        t.setAttribute("data-focus-trap", ""),
        (t.tabIndex = 0),
        Object.assign(t.style, Z),
        t
      );
    },
    s = () => {
      const t = r();
      return t
        ? z(t, !0).filter((o) => !o.hasAttribute("data-focus-trap"))
        : [];
    },
    l = () => {
      const t = s();
      return t.length > 0 ? t[0] : null;
    };
  E(() => {
    if (M) return;
    const t = r();
    if (!t) return;
    I.add(d);
    const o = k(t);
    if (!x(t, o)) {
      const u = new CustomEvent(N, j);
      t.addEventListener(N, h),
        t.dispatchEvent(u),
        u.defaultPrevented ||
          setTimeout(() => {
            y(l()), k(t) === o && y(t);
          }, 0);
    }
    w(() => {
      t.removeEventListener(N, h),
        setTimeout(() => {
          const u = new CustomEvent(P, j);
          (() => {
            const p = r();
            if (!p) return !1;
            const f = k(p);
            return !!f && !x(p, f) && q(f);
          })() && u.preventDefault(),
            t.addEventListener(P, c),
            t.dispatchEvent(u),
            u.defaultPrevented || y(o != null ? o : m().body),
            t.removeEventListener(P, c),
            I.remove(d);
        }, 0);
    });
  }),
    E(() => {
      if (M) return;
      const t = r();
      if (!t || !A(e.trapFocus) || i()) return;
      const o = (p) => {
          const f = p.target;
          (f != null && f.closest(`[${R}]`)) || (x(t, f) ? (v = f) : y(v));
        },
        u = (p) => {
          var L;
          const f = (L = p.relatedTarget) != null ? L : k(t);
          (f != null && f.closest(`[${R}]`)) || x(t, f) || y(v);
        };
      m().addEventListener("focusin", o),
        m().addEventListener("focusout", u),
        w(() => {
          m().removeEventListener("focusin", o),
            m().removeEventListener("focusout", u);
        });
    }),
    E(() => {
      if (M) return;
      const t = r();
      if (!t || !A(e.trapFocus) || i()) return;
      const o = n();
      t.insertAdjacentElement("afterbegin", o);
      const u = n();
      function p(L) {
        const S = l(),
          J = (() => {
            const F = s();
            return F.length > 0 ? F[F.length - 1] : null;
          })();
        L.relatedTarget === S ? y(J) : y(S);
      }
      t.insertAdjacentElement("beforeend", u),
        o.addEventListener("focusin", p),
        u.addEventListener("focusin", p);
      const f = new MutationObserver((L) => {
        for (const S of L)
          S.previousSibling === u &&
            (u.remove(), t.insertAdjacentElement("beforeend", u)),
            S.nextSibling === o &&
              (o.remove(), t.insertAdjacentElement("afterbegin", o));
      });
      f.observe(t, { childList: !0, subtree: !1 }),
        w(() => {
          o.removeEventListener("focusin", p),
            u.removeEventListener("focusin", p),
            o.remove(),
            u.remove(),
            f.disconnect();
        });
    });
}
function le(e) {
  E(() => {
    A(e.isDisabled) ||
      w(
        (function (r, i = document.body) {
          const a = new Set(r),
            d = new Set(),
            v = (n) => {
              for (const o of n.querySelectorAll(`[${K}], [${R}]`)) a.add(o);
              const s = (o) => {
                  if (
                    a.has(o) ||
                    (o.parentElement &&
                      d.has(o.parentElement) &&
                      o.parentElement.getAttribute("role") !== "row")
                  )
                    return NodeFilter.FILTER_REJECT;
                  for (const u of a)
                    if (o.contains(u)) return NodeFilter.FILTER_SKIP;
                  return NodeFilter.FILTER_ACCEPT;
                },
                l = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
                  acceptNode: s,
                }),
                t = s(n);
              if (
                (t === NodeFilter.FILTER_ACCEPT && h(n),
                t !== NodeFilter.FILTER_REJECT)
              ) {
                let o = l.nextNode();
                for (; o != null; ) h(o), (o = l.nextNode());
              }
            },
            h = (n) => {
              var l;
              const s = (l = T.get(n)) != null ? l : 0;
              (n.getAttribute("aria-hidden") === "true" && s === 0) ||
                (s === 0 && n.setAttribute("aria-hidden", "true"),
                d.add(n),
                T.set(n, s + 1));
            };
          b.length && b[b.length - 1].disconnect(), v(i);
          const c = new MutationObserver((n) => {
            for (const s of n)
              if (
                s.type === "childList" &&
                s.addedNodes.length !== 0 &&
                ![...a, ...d].some((l) => l.contains(s.target))
              ) {
                for (const l of s.removedNodes)
                  l instanceof Element && (a.delete(l), d.delete(l));
                for (const l of s.addedNodes)
                  !(l instanceof HTMLElement || l instanceof SVGElement) ||
                  (l.dataset.liveAnnouncer !== "true" &&
                    l.dataset.reactAriaTopLayer !== "true")
                    ? l instanceof Element && v(l)
                    : a.add(l);
              }
          });
          c.observe(i, { childList: !0, subtree: !0 });
          const m = {
            observe() {
              c.observe(i, { childList: !0, subtree: !0 });
            },
            disconnect() {
              c.disconnect();
            },
          };
          return (
            b.push(m),
            () => {
              c.disconnect();
              for (const n of d) {
                const s = T.get(n);
                if (s == null) return;
                s === 1
                  ? (n.removeAttribute("aria-hidden"), T.delete(n))
                  : T.set(n, s - 1);
              }
              m === b[b.length - 1]
                ? (b.pop(), b.length && b[b.length - 1].observe())
                : b.splice(b.indexOf(m), 1);
            }
          );
        })(A(e.targets), A(e.root))
      );
  });
}
var T = new WeakMap(),
  b = [],
  C = new Map(),
  _ = (e) => {
    E(() => {
      var v, h;
      const r = (v = g(e.style)) != null ? v : {},
        i = (h = g(e.properties)) != null ? h : [],
        a = {};
      for (const c in r) a[c] = e.element.style[c];
      const d = C.get(e.key);
      d
        ? d.activeCount++
        : C.set(e.key, {
            activeCount: 1,
            originalStyles: a,
            properties: i.map((c) => c.key),
          }),
        Object.assign(e.element.style, e.style);
      for (const c of i) e.element.style.setProperty(c.key, c.value);
      w(() => {
        var m;
        const c = C.get(e.key);
        if (c)
          if (c.activeCount === 1) {
            C.delete(e.key);
            for (const [n, s] of Object.entries(c.originalStyles))
              e.element.style[n] = s;
            for (const n of c.properties) e.element.style.removeProperty(n);
            e.element.style.length === 0 && e.element.removeAttribute("style"),
              (m = e.cleanup) == null || m.call(e);
          } else c.activeCount--;
      });
    });
  },
  V = (e, r) => {
    switch (r) {
      case "x":
        return [e.clientWidth, e.scrollLeft, e.scrollWidth];
      case "y":
        return [e.clientHeight, e.scrollTop, e.scrollHeight];
    }
  },
  Q = (e, r) => {
    const i = getComputedStyle(e),
      a = r === "x" ? i.overflowX : i.overflowY;
    return (
      a === "auto" ||
      a === "scroll" ||
      (e.tagName === "HTML" && a === "visible")
    );
  },
  ee = (e, r, i) => {
    var m;
    const a =
      r === "x" && window.getComputedStyle(e).direction === "rtl" ? -1 : 1;
    let d = e,
      v = 0,
      h = 0,
      c = !1;
    do {
      const [n, s, l] = V(d, r),
        t = l - n - a * s;
      (s === 0 && t === 0) || !Q(d, r) || ((v += t), (h += s)),
        d === (i != null ? i : document.documentElement)
          ? (c = !0)
          : (d = (m = d._$host) != null ? m : d.parentElement);
    } while (d && !c);
    return [v, h];
  },
  [W, D] = Y([]),
  te = (e) => [e.deltaX, e.deltaY],
  H = (e) =>
    e.changedTouches[0]
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0],
  X = (e, r, i, a) => {
    const d = a !== null && $(a, e),
      [v, h] = ee(e, r, d ? a : void 0);
    return !(i > 0 && Math.abs(v) <= 1) && !(i < 0 && Math.abs(h) < 1);
  },
  $ = (e, r) => {
    var a;
    if (e.contains(r)) return !0;
    let i = r;
    for (; i; ) {
      if (i === e) return !0;
      i = (a = i._$host) != null ? a : i.parentElement;
    }
    return !1;
  },
  ie = (e) => {
    const r = B(
        {
          element: null,
          enabled: !0,
          hideScrollbar: !0,
          preventScrollbarShift: !0,
          preventScrollbarShiftMode: "padding",
          restoreScrollPosition: !0,
          allowPinchZoom: !1,
        },
        e
      ),
      i = G();
    let a = [0, 0],
      d = null,
      v = null;
    E(() => {
      g(r.enabled) &&
        (D((n) => [...n, i]),
        w(() => {
          D((n) => n.filter((s) => s !== i));
        }));
    }),
      E(() => {
        if (!g(r.enabled) || !g(r.hideScrollbar)) return;
        const { body: n } = document,
          s = window.innerWidth - n.offsetWidth;
        if (g(r.preventScrollbarShift)) {
          const l = { overflow: "hidden" },
            t = [];
          s > 0 &&
            (g(r.preventScrollbarShiftMode) === "padding"
              ? (l.paddingRight = `calc(${
                  window.getComputedStyle(n).paddingRight
                } + ${s}px)`)
              : (l.marginRight = `calc(${
                  window.getComputedStyle(n).marginRight
                } + ${s}px)`),
            t.push({ key: "--scrollbar-width", value: `${s}px` }));
          const o = window.scrollY,
            u = window.scrollX;
          _({
            key: "prevent-scroll",
            element: n,
            style: l,
            properties: t,
            cleanup: () => {
              g(r.restoreScrollPosition) && s > 0 && window.scrollTo(u, o);
            },
          });
        } else
          _({
            key: "prevent-scroll",
            element: n,
            style: { overflow: "hidden" },
          });
      }),
      E(() => {
        var n;
        (n = i),
          W().indexOf(n) === W().length - 1 &&
            g(r.enabled) &&
            (document.addEventListener("wheel", c, { passive: !1 }),
            document.addEventListener("touchstart", h, { passive: !1 }),
            document.addEventListener("touchmove", m, { passive: !1 }),
            w(() => {
              document.removeEventListener("wheel", c),
                document.removeEventListener("touchstart", h),
                document.removeEventListener("touchmove", m);
            }));
      });
    const h = (n) => {
        (a = H(n)), (d = null), (v = null);
      },
      c = (n) => {
        const s = n.target,
          l = g(r.element),
          t = te(n),
          o = Math.abs(t[0]) > Math.abs(t[1]) ? "x" : "y",
          u = o === "x" ? t[0] : t[1],
          p = X(s, o, u, l);
        let f;
        (f = !l || !$(l, s) || !p), f && n.cancelable && n.preventDefault();
      },
      m = (n) => {
        const s = g(r.element),
          l = n.target;
        let t;
        if (n.touches.length === 2) t = !g(r.allowPinchZoom);
        else {
          if (d == null || v === null) {
            const o = H(n).map((p, f) => a[f] - p),
              u = Math.abs(o[0]) > Math.abs(o[1]) ? "x" : "y";
            (d = u), (v = u === "x" ? o[0] : o[1]);
          }
          if (l.type === "range") t = !1;
          else {
            const o = X(l, d, v, s);
            t = !s || !$(s, l) || !o;
          }
        }
        t && n.cancelable && n.preventDefault();
      };
  };
export { se as a, _ as b, le as c, ee as g, ie as s };
