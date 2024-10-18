var xl = Object.defineProperty,
  yl = Object.defineProperties;
var vl = Object.getOwnPropertyDescriptors;
var to = Object.getOwnPropertySymbols;
var _l = Object.prototype.hasOwnProperty,
  wl = Object.prototype.propertyIsEnumerable;
var mn = (i, t) => {
  if ((t = Symbol[i])) return t;
  throw Error("Symbol." + i + " is not defined");
};
var bn = (i, t, e) =>
    t in i
      ? xl(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (i[t] = e),
  ht = (i, t) => {
    for (var e in t || (t = {})) _l.call(t, e) && bn(i, e, t[e]);
    if (to) for (var e of to(t)) wl.call(t, e) && bn(i, e, t[e]);
    return i;
  },
  Ut = (i, t) => yl(i, vl(t));
var P = (i, t, e) => (bn(i, typeof t != "symbol" ? t + "" : t, e), e);
var eo = (i, t, e) =>
    new Promise((n, s) => {
      var o = (l) => {
          try {
            a(e.next(l));
          } catch (c) {
            s(c);
          }
        },
        r = (l) => {
          try {
            a(e.throw(l));
          } catch (c) {
            s(c);
          }
        },
        a = (l) => (l.done ? n(l.value) : Promise.resolve(l.value).then(o, r));
      a((e = e.apply(i, t)).next());
    }),
  Ml = function (i, t) {
    (this[0] = i), (this[1] = t);
  };
var io = (i) => {
  var t = i[mn("asyncIterator")],
    e = !1,
    n,
    s = {};
  return (
    t == null
      ? ((t = i[mn("iterator")]()), (n = (o) => (s[o] = (r) => t[o](r))))
      : ((t = t.call(i)),
        (n = (o) =>
          (s[o] = (r) => {
            if (e) {
              if (((e = !1), o === "throw")) throw r;
              return r;
            }
            return (
              (e = !0),
              {
                done: !1,
                value: new Ml(
                  new Promise((a) => {
                    var l = t[o](r);
                    if (!(l instanceof Object))
                      throw TypeError("Object expected");
                    a(l);
                  }),
                  1
                ),
              }
            );
          }))),
    (s[mn("iterator")] = () => s),
    n("next"),
    "throw" in t
      ? n("throw")
      : (s.throw = (o) => {
          throw o;
        }),
    "return" in t && n("return"),
    s
  );
};
import {
  ah as Mi,
  l as X,
  aR as kl,
  a1 as de,
  t as Y,
  H as ct,
  ae as ln,
  n as Pe,
  ag as Ct,
  f as H,
  J as cn,
  a2 as ki,
  $ as G,
  o as ke,
  c as D,
  S as vt,
  a0 as $,
  a3 as ls,
  m as Se,
  a4 as gi,
  an as ve,
  aS as Sl,
  ax as Pi,
  W as Dl,
  aQ as Cl,
  e as Pl,
  Y as Ol,
  i as R,
  L as ca,
  F as Ji,
  a as _e,
  d as Al,
  w as dt,
  b as oi,
  Q as Tl,
  aT as no,
  v as Fn,
  aU as El,
  aV as Ll,
  am as Il,
  G as ha,
  C as Rl,
  u as Fl,
  k as Xi,
  D as we,
  y as hn,
  h as zl,
  a7 as Bl,
  ai as Kl,
  B as zn,
} from "./manifest-a234c8a0.js";
import { t as J } from "./i18n-611811a6.js";
import { b as Vl } from "./router-b8d56046.js";
import { c as xt } from "./utils-65805dbc.js";
import { c as cs, B as Nl, u as Wl } from "./currency-a0e3a368.js";
import {
  u as hs,
  d as jl,
  e as Hl,
  g as $l,
  h as Ul,
  f as Yl,
  F as ql,
  c as Xl,
  a as Gl,
  b as Zl,
} from "./QJIB6BDF-1dee7631.js";
import { a as da, c as Jl } from "./FN6EICGO-b0e5a495.js";
import {
  F as so,
  l as I,
  G as Ql,
  k as je,
  H as tc,
  I as oo,
  i as ri,
  f as re,
  J as ua,
  K as ec,
  L as ic,
  m as ee,
  _ as ds,
  s as us,
  P as Bt,
  e as Oe,
  r as Nt,
  M as nc,
  N as sc,
  v as oc,
  j as rc,
  E as ac,
  a as fa,
  b as lc,
  O as ga,
  u as cc,
} from "./index-4897b9da.js";
import { c as hc } from "./E53DB7BS-1e802908.js";
import { Y as pa, Z as dc } from "./game-a49e1f5b.js";
import {
  r as uc,
  i as fc,
  m as gc,
  o as pc,
  g as mc,
  p as ma,
  b as bc,
  A as xc,
  n as yc,
  q as vc,
  u as ro,
  v as _c,
  h as wc,
  k as Mc,
  w as kc,
  a as Sc,
  c as Dc,
} from "./resolve-elements.es-b931549e.js";
import { u as fs } from "./LR7LBJN3-fced4fb5.js";
import { S as Ve, b as Cc, a as Pc } from "./Symbol-f22f521e.js";
import { S as Oc, a as Ac } from "./Close-4ee839c4.js";
import { P as Tc, B as Ec } from "./Layout-b58c3f24.js";
import { x as Lc } from "./amount-af49bfc0.js";
import { u as Ic } from "./use-coin-format-bfa33df5.js";
import { c as Rc } from "./index-eff0ad24.js";
function Fc(i, t, e, n) {
  if (Mi) return;
  const s = () => {
    so(I(i)).forEach((o) => {
      o &&
        so(I(t)).forEach((r) =>
          (function (a, l, c, d) {
            return (
              a.addEventListener(l, c, d),
              Ql(a.removeEventListener.bind(a, l, c, d))
            );
          })(o, r, e, n)
        );
    });
  };
  typeof i == "function" ? X(s) : kl(s);
}
var zc = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function ao(i) {
  const t = {};
  let e;
  for (; (e = zc.exec(i)); ) t[e[1]] = e[2];
  return t;
}
var Bc = Y(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M25.887 17.426 16 28.054 6.095 17.408l-.018-.018-.453-.488.02-.023c-2.406-3.098-2.255-7.715.45-10.623 2.707-2.91 7.002-3.07 9.886-.484l.02-.024.023.024.045-.042c2.883-2.543 7.146-2.368 9.837.526 2.706 2.908 2.857 7.525.45 10.624l.021.022-.455.49z"></path> '
);
const Vf = (i) => {
  return (t = Bc()), de(t, i, !0, !0), t;
  var t;
};
var Kc = Y(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M25.461 5.249a3.44 3.44 0 0 1 1.485 6.545l-.002-.057q.027.93.022 1.79l-.011.679c-.151 6.343-1.785 9.75-5.373 9.75-1.894 0-3.369-.972-4.516-2.684q-.1-.15-.195-.301l-.186-.306-.178-.317-.174-.331q-.128-.255-.258-.538l-.174-.392-.179-.427-.186-.465-.196-.509-.21-.558-.517-1.404-.194-.512-.189-.478-.18-.443-.176-.41-.086-.193-.168-.362q-.041-.087-.082-.17l-.162-.316c-.696-1.306-1.304-1.785-2.077-1.785-1.273 0-2.272 1.39-2.813 4.397l-.081.488a22 22 0 0 0-.075.515l-.066.542-.03.282-.053.583-.024.302-.042.625q-.018.32-.033.653l-.024.681-.003.102a3.44 3.44 0 1 1-3.013-.012q.037-1.395.144-2.636l.063-.653c.616-5.782 2.522-8.878 6.048-8.878 1.8 0 3.196.946 4.284 2.605q.093.144.183.289l.174.293.168.303.164.317.162.338.164.362.083.193.171.411.18.45.19.494.31.835.305.832.202.541.197.506.19.47.183.439.09.207.178.39.087.183.172.344.17.315c.727 1.298 1.399 1.784 2.275 1.784.883 0 1.59-.93 1.995-2.914l.076-.397q.034-.205.067-.424l.059-.45q.029-.232.051-.478l.043-.504.034-.532.026-.56.01-.29.012-.601.003-.629q0-.322-.006-.658l-.016-.685-.003-.052a3.44 3.44 0 0 1 1.529-6.524z"></path> '
);
const Nf = (i) => {
  return (t = Kc()), de(t, i, !0, !0), t;
  var t;
};
var Vc = Y(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="m3.755 15.576 15.622-6.555c1.542-.683 6.771-2.869 6.771-2.869s2.413-.955 2.213 1.366c-.067.955-.603 4.302-1.14 7.92L25.547 26.16s-.134 1.57-1.276 1.844c-1.141.273-3.016-.955-3.352-1.229-.268-.204-5.028-3.277-6.772-4.78-.469-.41-1.005-1.229.067-2.185 2.414-2.253 5.297-5.054 7.04-6.829.804-.82 1.61-2.732-1.743-.41l-9.454 6.487s-1.073.683-3.083.069-4.358-1.434-4.358-1.434-1.61-1.025 1.14-2.117h.002z"></path> '
);
const Wf = (i) => {
    return (t = Vc()), de(t, i, !0, !0), t;
    var t;
  },
  Nc = { any: 0, all: 1 };
function lo(i, t) {
  return (function (e) {
    return typeof e == "object";
  })(i)
    ? i
    : i && t
    ? t[i]
    : void 0;
}
let ae;
function Wc() {
  if (!ae) return;
  const i = ae.sort(jc).map(Hc);
  i.forEach(co), i.forEach(co), (ae = void 0);
}
function xn(i) {
  ae ? pc(ae, i) : ((ae = [i]), requestAnimationFrame(Wc));
}
const jc = (i, t) => i.getDepth() - t.getDepth(),
  Hc = (i) => i.animateUpdates(),
  co = (i) => i.next(),
  ho = (i, t) => new CustomEvent(i, { detail: { target: t } });
function Bn(i, t, e) {
  i.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: e } }));
}
function uo(i, t, e) {
  i.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: e } }));
}
const $c = {
    isActive: (i) => !!i.inView,
    subscribe: (i, { enable: t, disable: e }, { inViewOptions: n = {} }) => {
      const { once: s } = n,
        o = pa(n, ["once"]);
      return (function (r, a, { root: l, margin: c, amount: d = "any" } = {}) {
        if (typeof IntersectionObserver == "undefined") return () => {};
        const h = uc(r),
          u = new WeakMap(),
          g = new IntersectionObserver(
            (p) => {
              p.forEach((f) => {
                const m = u.get(f.target);
                if (f.isIntersecting !== !!m)
                  if (f.isIntersecting) {
                    const b = a(f);
                    fc(b) ? u.set(f.target, b) : g.unobserve(f.target);
                  } else m && (m(f), u.delete(f.target));
              });
            },
            {
              root: l,
              rootMargin: c,
              threshold: typeof d == "number" ? d : Nc[d],
            }
          );
        return h.forEach((p) => g.observe(p)), () => g.disconnect();
      })(
        i,
        (r) => {
          if ((t(), uo(i, "viewenter", r), !s))
            return (a) => {
              e(), uo(i, "viewleave", a);
            };
        },
        o
      );
    },
  },
  fo = (i, t, e) => (n) => {
    (n.pointerType && n.pointerType !== "mouse") || (e(), Bn(i, t, n));
  },
  Gi = {
    inView: $c,
    hover: {
      isActive: (i) => !!i.hover,
      subscribe: (i, { enable: t, disable: e }) => {
        const n = fo(i, "hoverstart", t),
          s = fo(i, "hoverend", e);
        return (
          i.addEventListener("pointerenter", n),
          i.addEventListener("pointerleave", s),
          () => {
            i.removeEventListener("pointerenter", n),
              i.removeEventListener("pointerleave", s);
          }
        );
      },
    },
    press: {
      isActive: (i) => !!i.press,
      subscribe: (i, { enable: t, disable: e }) => {
        const n = (o) => {
            e(),
              Bn(i, "pressend", o),
              window.removeEventListener("pointerup", n);
          },
          s = (o) => {
            t(),
              Bn(i, "pressstart", o),
              window.addEventListener("pointerup", n);
          };
        return (
          i.addEventListener("pointerdown", s),
          () => {
            i.removeEventListener("pointerdown", s),
              window.removeEventListener("pointerup", n);
          }
        );
      },
    },
  },
  go = ["initial", "animate", ...Object.keys(Gi), "exit"],
  Kn = new WeakMap();
function Uc(i = {}, t) {
  let e,
    n = t ? t.getDepth() + 1 : 0;
  const s = { initial: !0, animate: !0 },
    o = {},
    r = {};
  for (const p of go)
    r[p] =
      typeof i[p] == "string" ? i[p] : t == null ? void 0 : t.getContext()[p];
  const a = i.initial === !1 ? "animate" : "initial";
  let l = lo(i[a] || r[a], i.variants) || {},
    c = pa(l, ["transition"]);
  const d = Object.assign({}, c),
    h = (p, f) => () => {
      (s[p] = f), xn(g);
    },
    u = () => {
      for (const p in Gi) {
        const f = Gi[p].isActive(i),
          m = o[p];
        f && !m
          ? (o[p] = Gi[p].subscribe(
              e,
              { enable: h(p, !0), disable: h(p, !1) },
              i
            ))
          : !f && m && (m(), delete o[p]);
      }
    },
    g = {
      update: (p) => {
        e && ((i = p), u(), xn(g));
      },
      setActive: (p, f) => {
        e && ((s[p] = f), xn(g));
      },
      animateUpdates: function* () {
        var p, f;
        const m = c;
        c = {};
        const b = {};
        for (const w of go) {
          if (!s[w]) continue;
          const M = lo(i[w]);
          if (M)
            for (const k in M)
              k !== "transition" &&
                ((c[k] = M[k]),
                (b[k] = mc(
                  (f =
                    (p = M.transition) !== null && p !== void 0
                      ? p
                      : i.transition) !== null && f !== void 0
                    ? f
                    : {},
                  k
                )));
        }
        const x = new Set([...Object.keys(c), ...Object.keys(m)]),
          v = [];
        x.forEach((w) => {
          var M;
          c[w] === void 0 && (c[w] = d[w]),
            (function (k, C) {
              return (
                typeof k != typeof C ||
                (Array.isArray(k) && Array.isArray(C)
                  ? !(function (S, O) {
                      const E = O.length;
                      if (E !== S.length) return !1;
                      for (let L = 0; L < E; L++) if (O[L] !== S[L]) return !1;
                      return !0;
                    })(k, C)
                  : k !== C)
              );
            })(m[w], c[w]) &&
              (((M = d[w]) !== null && M !== void 0) || (d[w] = ma.get(e, w)),
              v.push(bc(e, w, c[w], b[w], xc)));
        }),
          yield;
        const y = v.map((w) => w()).filter(Boolean);
        if (!y.length) return;
        const _ = c;
        e.dispatchEvent(ho("motionstart", _)),
          Promise.all(y.map((w) => w.finished))
            .then(() => {
              e.dispatchEvent(ho("motioncomplete", _));
            })
            .catch(yc);
      },
      getDepth: () => n,
      getTarget: () => c,
      getOptions: () => i,
      getContext: () => r,
      mount: (p) => (
        (e = p),
        Kn.set(e, g),
        u(),
        () => {
          Kn.delete(e),
            (function (f) {
              ae && gc(ae, f);
            })(g);
          for (const f in o) o[f]();
        }
      ),
      isMounted: () => !!e,
    };
  return g;
}
function Yc(i) {
  const t = {},
    e = [];
  for (let n in i) {
    const s = i[n];
    vc(n) && (ro[n] && (n = ro[n]), e.push(n), (n = _c(n)));
    let o = Array.isArray(s) ? s[0] : s;
    const r = wc.get(n);
    r && (o = Mc(s) ? r.toDefaultUnit(s) : s), (t[n] = o);
  }
  return e.length && (t.transform = kc(e)), t;
}
var qc = class {
  constructor(i, t, e) {
    P(this, "collection");
    P(this, "direction");
    P(this, "orientation");
    (this.collection = i), (this.direction = t), (this.orientation = e);
  }
  flipDirection() {
    return this.direction() === "rtl" && this.orientation() === "horizontal";
  }
  getKeyLeftOf(i) {
    return this.flipDirection()
      ? this.getNextKey(i)
      : this.orientation() === "horizontal"
      ? this.getPreviousKey(i)
      : void 0;
  }
  getKeyRightOf(i) {
    return this.flipDirection()
      ? this.getPreviousKey(i)
      : this.orientation() === "horizontal"
      ? this.getNextKey(i)
      : void 0;
  }
  getKeyAbove(i) {
    if (this.orientation() === "vertical") return this.getPreviousKey(i);
  }
  getKeyBelow(i) {
    if (this.orientation() === "vertical") return this.getNextKey(i);
  }
  getFirstKey() {
    let i = this.collection().getFirstKey();
    if (i == null) return;
    const t = this.collection().getItem(i);
    return t != null && t.disabled && (i = this.getNextKey(i)), i;
  }
  getLastKey() {
    let i = this.collection().getLastKey();
    if (i == null) return;
    const t = this.collection().getItem(i);
    return t != null && t.disabled && (i = this.getPreviousKey(i)), i;
  }
  getNextKey(i) {
    var n;
    let t,
      e = i;
    do
      if (
        ((e =
          (n = this.collection().getKeyAfter(e)) != null
            ? n
            : this.collection().getFirstKey()),
        e == null || ((t = this.collection().getItem(e)), t == null))
      )
        return;
    while (t.disabled);
    return e;
  }
  getPreviousKey(i) {
    var n;
    let t,
      e = i;
    do
      if (
        ((e =
          (n = this.collection().getKeyBefore(e)) != null
            ? n
            : this.collection().getLastKey()),
        e == null || ((t = this.collection().getItem(e)), t == null))
      )
        return;
    while (t.disabled);
    return e;
  }
};
function ba(i) {
  var l, c, d;
  let t = (l = i.startIndex) != null ? l : 0;
  const e = (c = i.startLevel) != null ? c : 0,
    n = [],
    s = (h) => {
      var p;
      if (h == null) return "";
      const u = (p = i.getKey) != null ? p : "key",
        g = je(u) ? h[u] : u(h);
      return g != null ? String(g) : "";
    },
    o = (h) => {
      var p;
      if (h == null) return "";
      const u = (p = i.getTextValue) != null ? p : "textValue",
        g = je(u) ? h[u] : u(h);
      return g != null ? String(g) : "";
    },
    r = (h) => {
      var g, p;
      if (h == null) return !1;
      const u = (g = i.getDisabled) != null ? g : "disabled";
      return (p = je(u) ? h[u] : u(h)) != null ? p : !1;
    },
    a = (h) => {
      var u;
      if (h != null)
        return je(i.getSectionChildren)
          ? h[i.getSectionChildren]
          : (u = i.getSectionChildren) == null
          ? void 0
          : u.call(i, h);
    };
  for (const h of i.dataSource)
    if (je(h) || tc(h))
      n.push({
        type: "item",
        rawValue: h,
        key: String(h),
        textValue: String(h),
        disabled: r(h),
        level: e,
        index: t,
      }),
        t++;
    else if (a(h) != null) {
      n.push({
        type: "section",
        rawValue: h,
        key: "",
        textValue: "",
        disabled: !1,
        level: e,
        index: t,
      }),
        t++;
      const u = (d = a(h)) != null ? d : [];
      if (u.length > 0) {
        const g = ba({
          dataSource: u,
          getKey: i.getKey,
          getTextValue: i.getTextValue,
          getDisabled: i.getDisabled,
          getSectionChildren: i.getSectionChildren,
          startIndex: t,
          startLevel: e + 1,
        });
        n.push(...g), (t += g.length);
      }
    } else
      n.push({
        type: "item",
        rawValue: h,
        key: s(h),
        textValue: o(h),
        disabled: r(h),
        level: e,
        index: t,
      }),
        t++;
  return n;
}
function Xc(i, t = []) {
  return ct(() => {
    const e = ba({
      dataSource: I(i.dataSource),
      getKey: I(i.getKey),
      getTextValue: I(i.getTextValue),
      getDisabled: I(i.getDisabled),
      getSectionChildren: I(i.getSectionChildren),
    });
    for (let n = 0; n < t.length; n++) t[n]();
    return i.factory(e);
  });
}
var Zt = class xa extends Set {
  constructor(e, n, s) {
    super(e);
    P(this, "anchorKey");
    P(this, "currentKey");
    e instanceof xa
      ? ((this.anchorKey = n || e.anchorKey),
        (this.currentKey = s || e.currentKey))
      : ((this.anchorKey = n), (this.currentKey = s));
  }
};
function ya(i) {
  return ec() ? i.altKey : i.ctrlKey;
}
function Re(i) {
  return ic() ? i.metaKey : i.ctrlKey;
}
function po(i) {
  return new Zt(i);
}
function Gc(i, t) {
  if (i.size !== t.size) return !1;
  for (const e of i) if (!t.has(e)) return !1;
  return !0;
}
function Zc(i) {
  const t = ee({ selectionMode: "none", selectionBehavior: "toggle" }, i),
    [e, n] = H(!1),
    [s, o] = H(),
    r = ct(() => {
      const u = I(t.selectedKeys);
      return u != null ? po(u) : u;
    }),
    a = ct(() => {
      const u = I(t.defaultSelectedKeys);
      return u != null ? po(u) : new Zt();
    }),
    [l, c] = (function (u) {
      const [g, p] = da(u);
      return [
        () => {
          var f;
          return (f = g()) != null ? f : new Zt();
        },
        p,
      ];
    })({
      value: r,
      defaultValue: a,
      onChange: (u) => {
        var g;
        return (g = t.onSelectionChange) == null ? void 0 : g.call(t, u);
      },
    }),
    [d, h] = H(I(t.selectionBehavior));
  return (
    X(() => {
      const u = l();
      I(t.selectionBehavior) === "replace" &&
        d() === "toggle" &&
        typeof u == "object" &&
        u.size === 0 &&
        h("replace");
    }),
    X(() => {
      var u;
      h((u = I(t.selectionBehavior)) != null ? u : "toggle");
    }),
    {
      selectionMode: () => I(t.selectionMode),
      disallowEmptySelection: () => {
        var u;
        return (u = I(t.disallowEmptySelection)) != null ? u : !1;
      },
      selectionBehavior: d,
      setSelectionBehavior: h,
      isFocused: e,
      setFocused: n,
      focusedKey: s,
      setFocusedKey: o,
      selectedKeys: l,
      setSelectedKeys: (u) => {
        (!I(t.allowDuplicateSelectionEvents) && Gc(u, l())) || c(u);
      },
    }
  );
}
function Jc(i) {
  const [t, e] = H(""),
    [n, s] = H(-1);
  return {
    typeSelectHandlers: {
      onKeyDown: (o) => {
        var h, u, g;
        if (I(i.isDisabled)) return;
        const r = I(i.keyboardDelegate),
          a = I(i.selectionManager);
        if (!r.getKeyForSearch) return;
        const l = (function (p) {
          return p.length === 1 || !/^[A-Z]/i.test(p) ? p : "";
        })(o.key);
        if (!l || o.ctrlKey || o.metaKey) return;
        l === " " &&
          t().trim().length > 0 &&
          (o.preventDefault(), o.stopPropagation());
        let c = e((p) => p + l),
          d =
            (h = r.getKeyForSearch(c, a.focusedKey())) != null
              ? h
              : r.getKeyForSearch(c);
        d == null &&
          (function (p) {
            return p.split("").every((f) => f === p[0]);
          })(c) &&
          ((c = c[0]),
          (d =
            (u = r.getKeyForSearch(c, a.focusedKey())) != null
              ? u
              : r.getKeyForSearch(c))),
          d != null &&
            (a.setFocusedKey(d), (g = i.onTypeSelect) == null || g.call(i, d)),
          clearTimeout(n()),
          s(window.setTimeout(() => e(""), 500));
      },
    },
  };
}
function Qc(i, t, e) {
  const n = ln(
      {
        selectOnFocus: () =>
          I(i.selectionManager).selectionBehavior() === "replace",
      },
      i
    ),
    s = () => {
      var d;
      return (d = e == null ? void 0 : e()) != null ? d : t();
    },
    { direction: o } = fs();
  let r = { top: 0, left: 0 };
  Fc(
    () => (I(n.isVirtualized) ? void 0 : s()),
    "scroll",
    () => {
      const d = s();
      d && (r = { top: d.scrollTop, left: d.scrollLeft });
    }
  );
  const { typeSelectHandlers: a } = Jc({
      isDisabled: () => I(n.disallowTypeAhead),
      keyboardDelegate: () => I(n.keyboardDelegate),
      selectionManager: () => I(n.selectionManager),
    }),
    l = () => {
      var d;
      return (d = I(n.orientation)) != null ? d : "vertical";
    },
    c = () => {
      var m, b;
      const d = I(n.autoFocus);
      if (!d) return;
      const h = I(n.selectionManager),
        u = I(n.keyboardDelegate);
      let g;
      d === "first" && (g = (m = u.getFirstKey) == null ? void 0 : m.call(u)),
        d === "last" && (g = (b = u.getLastKey) == null ? void 0 : b.call(u));
      const p = h.selectedKeys();
      p.size && (g = p.values().next().value),
        h.setFocused(!0),
        h.setFocusedKey(g);
      const f = t();
      f && g == null && !I(n.shouldUseVirtualFocus) && ri(f);
    };
  return (
    Pe(() => {
      n.deferAutoFocus ? setTimeout(c, 0) : c();
    }),
    X(
      Ct(
        [s, () => I(n.isVirtualized), () => I(n.selectionManager).focusedKey()],
        (d) => {
          var p;
          const [h, u, g] = d;
          if (u) g && ((p = n.scrollToKey) == null || p.call(n, g));
          else if (g && h) {
            const f = h.querySelector(`[data-key="${g}"]`);
            f && oo(h, f);
          }
        }
      )
    ),
    {
      tabIndex: ct(() => {
        if (!I(n.shouldUseVirtualFocus))
          return I(n.selectionManager).focusedKey() == null ? 0 : -1;
      }),
      onKeyDown: (d) => {
        var x, v, y, _, w, M, k, C;
        re(d, a.onKeyDown), d.altKey && d.key === "Tab" && d.preventDefault();
        const h = t();
        if (!(h != null && h.contains(d.target))) return;
        const u = I(n.selectionManager),
          g = I(n.selectOnFocus),
          p = (S) => {
            S != null &&
              (u.setFocusedKey(S),
              d.shiftKey && u.selectionMode() === "multiple"
                ? u.extendSelection(S)
                : g && !ya(d) && u.replaceSelection(S));
          },
          f = I(n.keyboardDelegate),
          m = I(n.shouldFocusWrap),
          b = u.focusedKey();
        switch (d.key) {
          case l() === "vertical" ? "ArrowDown" : "ArrowRight":
            if (f.getKeyBelow) {
              let S;
              d.preventDefault(),
                (S =
                  b != null
                    ? f.getKeyBelow(b)
                    : (x = f.getFirstKey) == null
                    ? void 0
                    : x.call(f)),
                S == null &&
                  m &&
                  (S = (v = f.getFirstKey) == null ? void 0 : v.call(f, b)),
                p(S);
            }
            break;
          case l() === "vertical" ? "ArrowUp" : "ArrowLeft":
            if (f.getKeyAbove) {
              let S;
              d.preventDefault(),
                (S =
                  b != null
                    ? f.getKeyAbove(b)
                    : (y = f.getLastKey) == null
                    ? void 0
                    : y.call(f)),
                S == null &&
                  m &&
                  (S = (_ = f.getLastKey) == null ? void 0 : _.call(f, b)),
                p(S);
            }
            break;
          case l() === "vertical" ? "ArrowLeft" : "ArrowUp":
            if (f.getKeyLeftOf) {
              d.preventDefault();
              const S = o() === "rtl";
              let O;
              (O =
                b != null
                  ? f.getKeyLeftOf(b)
                  : S
                  ? (w = f.getFirstKey) == null
                    ? void 0
                    : w.call(f)
                  : (M = f.getLastKey) == null
                  ? void 0
                  : M.call(f)),
                p(O);
            }
            break;
          case l() === "vertical" ? "ArrowRight" : "ArrowDown":
            if (f.getKeyRightOf) {
              d.preventDefault();
              const S = o() === "rtl";
              let O;
              (O =
                b != null
                  ? f.getKeyRightOf(b)
                  : S
                  ? (k = f.getLastKey) == null
                    ? void 0
                    : k.call(f)
                  : (C = f.getFirstKey) == null
                  ? void 0
                  : C.call(f)),
                p(O);
            }
            break;
          case "Home":
            if (f.getFirstKey) {
              d.preventDefault();
              const S = f.getFirstKey(b, Re(d));
              S != null &&
                (u.setFocusedKey(S),
                Re(d) && d.shiftKey && u.selectionMode() === "multiple"
                  ? u.extendSelection(S)
                  : g && u.replaceSelection(S));
            }
            break;
          case "End":
            if (f.getLastKey) {
              d.preventDefault();
              const S = f.getLastKey(b, Re(d));
              S != null &&
                (u.setFocusedKey(S),
                Re(d) && d.shiftKey && u.selectionMode() === "multiple"
                  ? u.extendSelection(S)
                  : g && u.replaceSelection(S));
            }
            break;
          case "PageDown":
            f.getKeyPageBelow &&
              b != null &&
              (d.preventDefault(), p(f.getKeyPageBelow(b)));
            break;
          case "PageUp":
            f.getKeyPageAbove &&
              b != null &&
              (d.preventDefault(), p(f.getKeyPageAbove(b)));
            break;
          case "a":
            Re(d) &&
              u.selectionMode() === "multiple" &&
              I(n.disallowSelectAll) !== !0 &&
              (d.preventDefault(), u.selectAll());
            break;
          case "Escape":
            d.defaultPrevented ||
              (d.preventDefault(),
              I(n.disallowEmptySelection) || u.clearSelection());
            break;
          case "Tab":
            if (!I(n.allowsTabNavigation)) {
              if (d.shiftKey) h.focus();
              else {
                const S = ua(h, { tabbable: !0 });
                let O, E;
                do (E = S.lastChild()), E && (O = E);
                while (E);
                O && !O.contains(document.activeElement) && ri(O);
              }
              break;
            }
        }
      },
      onMouseDown: (d) => {
        s() === d.target && d.preventDefault();
      },
      onFocusIn: (d) => {
        var p, f, m, b;
        const h = I(n.selectionManager),
          u = I(n.keyboardDelegate),
          g = I(n.selectOnFocus);
        if (h.isFocused())
          d.currentTarget.contains(d.target) || h.setFocused(!1);
        else if (d.currentTarget.contains(d.target)) {
          if ((h.setFocused(!0), h.focusedKey() == null)) {
            const x = (y) => {
                y != null && (h.setFocusedKey(y), g && h.replaceSelection(y));
              },
              v = d.relatedTarget;
            v &&
            d.currentTarget.compareDocumentPosition(v) &
              Node.DOCUMENT_POSITION_FOLLOWING
              ? x(
                  (f = h.lastSelectedKey()) != null
                    ? f
                    : (p = u.getLastKey) == null
                    ? void 0
                    : p.call(u)
                )
              : x(
                  (b = h.firstSelectedKey()) != null
                    ? b
                    : (m = u.getFirstKey) == null
                    ? void 0
                    : m.call(u)
                );
          } else if (!I(n.isVirtualized)) {
            const x = s();
            if (x) {
              (x.scrollTop = r.top), (x.scrollLeft = r.left);
              const v = x.querySelector(`[data-key="${h.focusedKey()}"]`);
              v && (ri(v), oo(x, v));
            }
          }
        }
      },
      onFocusOut: (d) => {
        const h = I(n.selectionManager);
        d.currentTarget.contains(d.relatedTarget) || h.setFocused(!1);
      },
    }
  );
}
function th(i, t) {
  const e = () => I(i.selectionManager),
    n = () => I(i.key),
    s = () => I(i.shouldUseVirtualFocus),
    o = (h) => {
      e().selectionMode() !== "none" &&
        (e().selectionMode() === "single"
          ? e().isSelected(n()) && !e().disallowEmptySelection()
            ? e().toggleSelection(n())
            : e().replaceSelection(n())
          : h != null && h.shiftKey
          ? e().extendSelection(n())
          : e().selectionBehavior() === "toggle" ||
            Re(h) ||
            ("pointerType" in h && h.pointerType === "touch")
          ? e().toggleSelection(n())
          : e().replaceSelection(n()));
    },
    r = () => I(i.disabled) || e().isDisabled(n()),
    a = () => !r() && e().canSelectItem(n());
  let l = null;
  const c = ct(() => {
      if (!s() && !r()) return n() === e().focusedKey() ? 0 : -1;
    }),
    d = ct(() => (I(i.virtualized) ? void 0 : n()));
  return (
    X(
      Ct(
        [t, n, s, () => e().focusedKey(), () => e().isFocused()],
        ([h, u, g, p, f]) => {
          h &&
            u === p &&
            f &&
            !g &&
            document.activeElement !== h &&
            (i.focus ? i.focus() : ri(h));
        }
      )
    ),
    {
      isSelected: () => e().isSelected(n()),
      isDisabled: r,
      allowsSelection: a,
      tabIndex: c,
      dataKey: d,
      onPointerDown: (h) => {
        a() &&
          ((l = h.pointerType),
          h.pointerType !== "mouse" ||
            h.button !== 0 ||
            I(i.shouldSelectOnPressUp) ||
            o(h));
      },
      onPointerUp: (h) => {
        a() &&
          h.pointerType === "mouse" &&
          h.button === 0 &&
          I(i.shouldSelectOnPressUp) &&
          I(i.allowsDifferentPressOrigin) &&
          o(h);
      },
      onClick: (h) => {
        a() &&
          ((I(i.shouldSelectOnPressUp) && !I(i.allowsDifferentPressOrigin)) ||
            l !== "mouse") &&
          o(h);
      },
      onKeyDown: (h) => {
        a() &&
          ["Enter", " "].includes(h.key) &&
          (ya(h) ? e().toggleSelection(n()) : o(h));
      },
      onMouseDown: (h) => {
        r() && h.preventDefault();
      },
      onFocus: (h) => {
        const u = t();
        s() || r() || !u || (h.target === u && e().setFocusedKey(n()));
      },
    }
  );
}
var eh = class {
    constructor(i, t) {
      P(this, "collection");
      P(this, "state");
      (this.collection = i), (this.state = t);
    }
    selectionMode() {
      return this.state.selectionMode();
    }
    disallowEmptySelection() {
      return this.state.disallowEmptySelection();
    }
    selectionBehavior() {
      return this.state.selectionBehavior();
    }
    setSelectionBehavior(i) {
      this.state.setSelectionBehavior(i);
    }
    isFocused() {
      return this.state.isFocused();
    }
    setFocused(i) {
      this.state.setFocused(i);
    }
    focusedKey() {
      return this.state.focusedKey();
    }
    setFocusedKey(i) {
      (i == null || this.collection().getItem(i)) &&
        this.state.setFocusedKey(i);
    }
    selectedKeys() {
      return this.state.selectedKeys();
    }
    isSelected(i) {
      if (this.state.selectionMode() === "none") return !1;
      const t = this.getKey(i);
      return t != null && this.state.selectedKeys().has(t);
    }
    isEmpty() {
      return this.state.selectedKeys().size === 0;
    }
    isSelectAll() {
      if (this.isEmpty()) return !1;
      const i = this.state.selectedKeys();
      return this.getAllSelectableKeys().every((t) => i.has(t));
    }
    firstSelectedKey() {
      let i;
      for (const t of this.state.selectedKeys()) {
        const e = this.collection().getItem(t),
          n =
            (e == null ? void 0 : e.index) != null &&
            (i == null ? void 0 : i.index) != null &&
            e.index < i.index;
        (i && !n) || (i = e);
      }
      return i == null ? void 0 : i.key;
    }
    lastSelectedKey() {
      let i;
      for (const t of this.state.selectedKeys()) {
        const e = this.collection().getItem(t),
          n =
            (e == null ? void 0 : e.index) != null &&
            (i == null ? void 0 : i.index) != null &&
            e.index > i.index;
        (i && !n) || (i = e);
      }
      return i == null ? void 0 : i.key;
    }
    extendSelection(i) {
      if (this.selectionMode() === "none") return;
      if (this.selectionMode() === "single")
        return void this.replaceSelection(i);
      const t = this.getKey(i);
      if (t == null) return;
      const e = this.state.selectedKeys(),
        n = e.anchorKey || t,
        s = new Zt(e, n, t);
      for (const o of this.getKeyRange(n, e.currentKey || t)) s.delete(o);
      for (const o of this.getKeyRange(t, n)) this.canSelectItem(o) && s.add(o);
      this.state.setSelectedKeys(s);
    }
    getKeyRange(i, t) {
      const e = this.collection().getItem(i),
        n = this.collection().getItem(t);
      return e && n
        ? e.index != null && n.index != null && e.index <= n.index
          ? this.getKeyRangeInternal(i, t)
          : this.getKeyRangeInternal(t, i)
        : [];
    }
    getKeyRangeInternal(i, t) {
      const e = [];
      let n = i;
      for (; n != null; ) {
        const s = this.collection().getItem(n);
        if ((s && s.type === "item" && e.push(n), n === t)) return e;
        n = this.collection().getKeyAfter(n);
      }
      return [];
    }
    getKey(i) {
      const t = this.collection().getItem(i);
      return t ? (t && t.type === "item" ? t.key : null) : i;
    }
    toggleSelection(i) {
      if (this.selectionMode() === "none") return;
      if (this.selectionMode() === "single" && !this.isSelected(i))
        return void this.replaceSelection(i);
      const t = this.getKey(i);
      if (t == null) return;
      const e = new Zt(this.state.selectedKeys());
      e.has(t)
        ? e.delete(t)
        : this.canSelectItem(t) &&
          (e.add(t), (e.anchorKey = t), (e.currentKey = t)),
        (this.disallowEmptySelection() && e.size === 0) ||
          this.state.setSelectedKeys(e);
    }
    replaceSelection(i) {
      if (this.selectionMode() === "none") return;
      const t = this.getKey(i);
      if (t == null) return;
      const e = this.canSelectItem(t) ? new Zt([t], t, t) : new Zt();
      this.state.setSelectedKeys(e);
    }
    setSelectedKeys(i) {
      if (this.selectionMode() === "none") return;
      const t = new Zt();
      for (const e of i) {
        const n = this.getKey(e);
        if (n != null && (t.add(n), this.selectionMode() === "single")) break;
      }
      this.state.setSelectedKeys(t);
    }
    selectAll() {
      this.selectionMode() === "multiple" &&
        this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
    }
    clearSelection() {
      const i = this.state.selectedKeys();
      !this.disallowEmptySelection() &&
        i.size > 0 &&
        this.state.setSelectedKeys(new Zt());
    }
    toggleSelectAll() {
      this.isSelectAll() ? this.clearSelection() : this.selectAll();
    }
    select(i, t) {
      this.selectionMode() !== "none" &&
        (this.selectionMode() === "single"
          ? this.isSelected(i) && !this.disallowEmptySelection()
            ? this.toggleSelection(i)
            : this.replaceSelection(i)
          : this.selectionBehavior() === "toggle" ||
            (t && t.pointerType === "touch")
          ? this.toggleSelection(i)
          : this.replaceSelection(i));
    }
    isSelectionEqual(i) {
      if (i === this.state.selectedKeys()) return !0;
      const t = this.selectedKeys();
      if (i.size !== t.size) return !1;
      for (const e of i) if (!t.has(e)) return !1;
      for (const e of t) if (!i.has(e)) return !1;
      return !0;
    }
    canSelectItem(i) {
      if (this.state.selectionMode() === "none") return !1;
      const t = this.collection().getItem(i);
      return t != null && !t.disabled;
    }
    isDisabled(i) {
      const t = this.collection().getItem(i);
      return !t || t.disabled;
    }
    getAllSelectableKeys() {
      const i = [];
      return (
        ((t) => {
          for (; t != null; ) {
            if (this.canSelectItem(t)) {
              const e = this.collection().getItem(t);
              if (!e) continue;
              e.type === "item" && i.push(t);
            }
            t = this.collection().getKeyAfter(t);
          }
        })(this.collection().getFirstKey()),
        i
      );
    }
  },
  mo = class {
    constructor(i) {
      P(this, "keyMap", new Map());
      P(this, "iterable");
      P(this, "firstKey");
      P(this, "lastKey");
      this.iterable = i;
      for (const n of i) this.keyMap.set(n.key, n);
      if (this.keyMap.size === 0) return;
      let t,
        e = 0;
      for (const [n, s] of this.keyMap)
        t
          ? ((t.nextKey = n), (s.prevKey = t.key))
          : ((this.firstKey = n), (s.prevKey = void 0)),
          s.type === "item" && (s.index = e++),
          (t = s),
          (t.nextKey = void 0);
      this.lastKey = t.key;
    }
    *[Symbol.iterator]() {
      yield* io(this.iterable);
    }
    getSize() {
      return this.keyMap.size;
    }
    getKeys() {
      return this.keyMap.keys();
    }
    getKeyBefore(i) {
      var t;
      return (t = this.keyMap.get(i)) == null ? void 0 : t.prevKey;
    }
    getKeyAfter(i) {
      var t;
      return (t = this.keyMap.get(i)) == null ? void 0 : t.nextKey;
    }
    getFirstKey() {
      return this.firstKey;
    }
    getLastKey() {
      return this.lastKey;
    }
    getItem(i) {
      return this.keyMap.get(i);
    }
    at(i) {
      const t = [...this.getKeys()];
      return this.getItem(t[i]);
    }
  };
function ih(i) {
  const t = Zc(i),
    e = Xc(
      {
        dataSource: () => I(i.dataSource),
        getKey: () => I(i.getKey),
        getTextValue: () => I(i.getTextValue),
        getDisabled: () => I(i.getDisabled),
        getSectionChildren: () => I(i.getSectionChildren),
        factory: (s) => (i.filter ? new mo(i.filter(s)) : new mo(s)),
      },
      [() => i.filter]
    ),
    n = new eh(e, t);
  return (
    cn(() => {
      const s = t.focusedKey();
      s == null || e().getItem(s) || t.setFocusedKey(void 0);
    }),
    { collection: e, selectionManager: () => n }
  );
}
ds(
  {},
  {
    Content: () => gs,
    Indicator: () => ps,
    List: () => ms,
    Root: () => bs,
    Tabs: () => nh,
    Trigger: () => xs,
  }
);
var va = ki();
function dn() {
  const i = gi(va);
  if (i === void 0)
    throw new Error(
      "[kobalte]: `useTabsContext` must be used within a `Tabs` component"
    );
  return i;
}
function gs(i) {
  const [t, e] = H(),
    n = dn(),
    [s, o] = G(i, ["ref", "id", "value", "forceMount"]),
    [r, a] = H(0),
    l = () => {
      var h;
      return (h = s.id) != null ? h : n.generateContentId(s.value);
    },
    c = () => n.listState().selectedKey() === s.value,
    { present: d } = us({
      show: () => s.forceMount || c(),
      element: () => {
        var h;
        return (h = t()) != null ? h : null;
      },
    });
  return (
    X(
      Ct([() => t(), () => d()], ([h, u]) => {
        if (h == null || !u) return;
        const g = () => {
          const f = ua(h, { tabbable: !0 });
          a(f.nextNode() ? void 0 : 0);
        };
        g();
        const p = new MutationObserver(g);
        p.observe(h, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          attributeFilter: ["tabindex", "disabled"],
        }),
          ke(() => {
            p.disconnect();
          });
      })
    ),
    X(
      Ct([() => s.value, l], ([h, u]) => {
        n.contentIdsMap().set(h, u);
      })
    ),
    D(vt, {
      get when() {
        return d();
      },
      get children() {
        return D(
          Bt,
          $(
            {
              as: "div",
              ref(h) {
                var u = Oe(e, s.ref);
                typeof u == "function" && u(h);
              },
              get id() {
                return l();
              },
              role: "tabpanel",
              get tabIndex() {
                return r();
              },
              get "aria-labelledby"() {
                return n.triggerIdsMap().get(s.value);
              },
              get "data-orientation"() {
                return n.orientation();
              },
              get "data-selected"() {
                return c() ? "" : void 0;
              },
            },
            o
          )
        );
      },
    })
  );
}
function ps(i) {
  const t = dn(),
    [e, n] = G(i, ["style"]),
    [s, o] = H({ width: void 0, height: void 0 }),
    { direction: r } = fs(),
    a = () => {
      var h;
      const l = t.selectedTab();
      if (l == null) return;
      const c = { transform: void 0, width: void 0, height: void 0 },
        d =
          r() === "rtl"
            ? -1 *
              (((h = l.offsetParent) == null ? void 0 : h.offsetWidth) -
                l.offsetWidth -
                l.offsetLeft)
            : l.offsetLeft;
      (c.transform =
        t.orientation() === "vertical"
          ? `translateY(${l.offsetTop}px)`
          : `translateX(${d}px)`),
        t.orientation() === "horizontal"
          ? (c.width = `${l.offsetWidth}px`)
          : (c.height = `${l.offsetHeight}px`),
        o(c);
    };
  return (
    Pe(() => {
      queueMicrotask(() => {
        a();
      });
    }),
    X(
      Ct(
        [t.selectedTab, t.orientation, r],
        () => {
          a();
        },
        { defer: !0 }
      )
    ),
    D(
      Bt,
      $(
        {
          as: "div",
          role: "presentation",
          get style() {
            return ht(ht({}, s()), e.style);
          },
          get "data-orientation"() {
            return t.orientation();
          },
        },
        n
      )
    )
  );
}
function ms(i) {
  let t;
  const e = dn(),
    [n, s] = G(i, [
      "ref",
      "onKeyDown",
      "onMouseDown",
      "onFocusIn",
      "onFocusOut",
    ]),
    { direction: o } = fs(),
    r = new qc(() => e.listState().collection(), o, e.orientation),
    a = Qc(
      {
        selectionManager: () => e.listState().selectionManager(),
        keyboardDelegate: () => r,
        selectOnFocus: () => e.activationMode() === "automatic",
        shouldFocusWrap: !1,
        disallowEmptySelection: !0,
      },
      () => t
    );
  return (
    X(() => {
      if (t == null) return;
      const l = t.querySelector(`[data-key="${e.listState().selectedKey()}"]`);
      l != null && e.setSelectedTab(l);
    }),
    D(
      Bt,
      $(
        {
          as: "div",
          ref(l) {
            var c = Oe((d) => (t = d), n.ref);
            typeof c == "function" && c(l);
          },
          role: "tablist",
          get "aria-orientation"() {
            return e.orientation();
          },
          get "data-orientation"() {
            return e.orientation();
          },
          get onKeyDown() {
            return Nt([n.onKeyDown, a.onKeyDown]);
          },
          get onMouseDown() {
            return Nt([n.onMouseDown, a.onMouseDown]);
          },
          get onFocusIn() {
            return Nt([n.onFocusIn, a.onFocusIn]);
          },
          get onFocusOut() {
            return Nt([n.onFocusOut, a.onFocusOut]);
          },
        },
        s
      )
    )
  );
}
function bs(i) {
  const t = `tabs-${ls()}`,
    e = ee(
      { id: t, orientation: "horizontal", activationMode: "automatic" },
      i
    ),
    [n, s] = G(e, [
      "value",
      "defaultValue",
      "onChange",
      "orientation",
      "activationMode",
      "disabled",
    ]),
    [o, r] = H([]),
    [a, l] = H(),
    { DomCollectionProvider: c } = Sc({ items: o, onItemsChange: r }),
    d = (function (f) {
      const [m, b] = da({
          value: () => I(f.selectedKey),
          defaultValue: () => I(f.defaultSelectedKey),
          onChange: (k) => {
            var C;
            return (C = f.onSelectionChange) == null ? void 0 : C.call(f, k);
          },
        }),
        x = ct(() => {
          const k = m();
          return k != null ? [k] : [];
        }),
        [, v] = G(f, ["onSelectionChange"]),
        y = ln(v, {
          selectionMode: "single",
          disallowEmptySelection: !0,
          allowDuplicateSelectionEvents: !0,
          selectedKeys: x,
          onSelectionChange: (k) => {
            var S;
            const C = k.values().next().value;
            C === m() && ((S = f.onSelectionChange) == null || S.call(f, C)),
              b(C);
          },
        }),
        { collection: _, selectionManager: w } = ih(y),
        M = ct(() => {
          const k = m();
          return k != null ? _().getItem(k) : void 0;
        });
      return {
        collection: _,
        selectionManager: w,
        selectedKey: m,
        setSelectedKey: b,
        selectedItem: M,
      };
    })({
      selectedKey: () => n.value,
      defaultSelectedKey: () => n.defaultValue,
      onSelectionChange: (f) => {
        var m;
        return (m = n.onChange) == null ? void 0 : m.call(n, String(f));
      },
      dataSource: o,
    });
  let h = d.selectedKey();
  X(
    Ct(
      [() => d.selectionManager(), () => d.collection(), () => d.selectedKey()],
      ([f, m, b]) => {
        let x = b;
        if (f.isEmpty() || x == null || !m.getItem(x)) {
          x = m.getFirstKey();
          let v = x != null ? m.getItem(x) : void 0;
          for (; v != null && v.disabled && v.key !== m.getLastKey(); )
            (x = m.getKeyAfter(v.key)), (v = x != null ? m.getItem(x) : void 0);
          v != null &&
            v.disabled &&
            x === m.getLastKey() &&
            (x = m.getFirstKey()),
            x != null && f.setSelectedKeys([x]);
        }
        (f.focusedKey() == null || (!f.isFocused() && x !== h)) &&
          f.setFocusedKey(x),
          (h = x);
      }
    )
  );
  const u = new Map(),
    g = new Map(),
    p = {
      isDisabled: () => {
        var f;
        return (f = n.disabled) != null ? f : !1;
      },
      orientation: () => n.orientation,
      activationMode: () => n.activationMode,
      triggerIdsMap: () => u,
      contentIdsMap: () => g,
      listState: () => d,
      selectedTab: a,
      setSelectedTab: l,
      generateTriggerId: (f) => `${s.id}-trigger-${f}`,
      generateContentId: (f) => `${s.id}-content-${f}`,
    };
  return D(c, {
    get children() {
      return D(va.Provider, {
        value: p,
        get children() {
          return D(
            Bt,
            $(
              {
                as: "div",
                get "data-orientation"() {
                  return p.orientation();
                },
              },
              s
            )
          );
        },
      });
    },
  });
}
function xs(i) {
  let t;
  const e = dn(),
    n = ee({ type: "button" }, i),
    [s, o] = G(n, [
      "ref",
      "id",
      "value",
      "disabled",
      "onPointerDown",
      "onPointerUp",
      "onClick",
      "onKeyDown",
      "onMouseDown",
      "onFocus",
    ]),
    r = () => {
      var d;
      return (d = s.id) != null ? d : e.generateTriggerId(s.value);
    },
    a = () => s.disabled || e.isDisabled();
  Dc({
    getItem: () => ({
      ref: () => t,
      type: "item",
      key: s.value,
      textValue: "",
      disabled: a(),
    }),
  });
  const l = th(
      {
        key: () => s.value,
        selectionManager: () => e.listState().selectionManager(),
        disabled: a,
      },
      () => t
    ),
    c = (d) => {
      nc() && ri(d.currentTarget);
    };
  return (
    X(
      Ct([() => s.value, r], ([d, h]) => {
        e.triggerIdsMap().set(d, h);
      })
    ),
    D(
      Bt,
      $(
        {
          as: "button",
          ref(d) {
            var h = Oe((u) => (t = u), s.ref);
            typeof h == "function" && h(d);
          },
          get id() {
            return r();
          },
          role: "tab",
          get tabIndex() {
            return Se(() => !a())() ? l.tabIndex() : void 0;
          },
          get disabled() {
            return a();
          },
          get "aria-selected"() {
            return l.isSelected();
          },
          get "aria-disabled"() {
            return a() || void 0;
          },
          get "aria-controls"() {
            return Se(() => !!l.isSelected())()
              ? e.contentIdsMap().get(s.value)
              : void 0;
          },
          get "data-key"() {
            return l.dataKey();
          },
          get "data-orientation"() {
            return e.orientation();
          },
          get "data-selected"() {
            return l.isSelected() ? "" : void 0;
          },
          get "data-highlighted"() {
            return e.listState().selectionManager().focusedKey() === s.value
              ? ""
              : void 0;
          },
          get "data-disabled"() {
            return a() ? "" : void 0;
          },
          get onPointerDown() {
            return Nt([s.onPointerDown, l.onPointerDown]);
          },
          get onPointerUp() {
            return Nt([s.onPointerUp, l.onPointerUp]);
          },
          get onClick() {
            return Nt([s.onClick, l.onClick, c]);
          },
          get onKeyDown() {
            return Nt([s.onKeyDown, l.onKeyDown]);
          },
          get onMouseDown() {
            return Nt([s.onMouseDown, l.onMouseDown]);
          },
          get onFocus() {
            return Nt([s.onFocus, l.onFocus]);
          },
        },
        o
      )
    )
  );
}
var nh = Object.assign(bs, {
    Content: gs,
    Indicator: ps,
    List: ms,
    Trigger: xs,
  }),
  sh = () => {},
  bo = (i, t) => t(),
  _a = ki(),
  oh = (i) => {
    var o;
    const [t, e] = H(!0),
      n = { initial: (o = i.initial) != null ? o : !0, mount: t },
      s = D(_a.Provider, {
        value: n,
        get children() {
          return (function (r, a) {
            const l = ve(r),
              c = l ? [l] : [];
            if (Mi) return () => c;
            const { onEnter: d = bo, onExit: h = bo } = a,
              [u, g] = H(a.appear ? [] : c),
              [p] = Sl();
            let f,
              m = !1;
            function b(y, _) {
              if (!y) return _ && _();
              (m = !0),
                h(y, () => {
                  Pi(() => {
                    (m = !1), g((w) => w.filter((M) => M !== y)), _ && _();
                  });
                });
            }
            function x(y) {
              const _ = f;
              if (!_) return y && y();
              (f = void 0), g((w) => [_, ...w]), d(_, y != null ? y : sh);
            }
            const v =
              a.mode === "out-in"
                ? (y) => m || b(y, x)
                : a.mode === "in-out"
                ? (y) => x(() => b(y))
                : (y) => {
                    b(y), x();
                  };
            return (
              cn(
                (y) => {
                  const _ = r();
                  return ve(p)
                    ? (p(), y)
                    : (_ !== y && ((f = _), Pi(() => ve(() => v(y)))), _);
                },
                a.appear ? void 0 : l
              ),
              u
            );
          })(
            sc(() => i.children),
            {
              appear: n.initial,
              mode: i.exitBeforeEnter ? "out-in" : "parallel",
              onExit(r, a) {
                Pi(() => {
                  var l;
                  e(!1),
                    ((l = Kn.get(r)) == null ? void 0 : l.getOptions()).exit
                      ? wa(r, a)
                      : a();
                });
              },
              onEnter(r, a) {
                Pi(() => {
                  e(!0), a();
                });
              },
            }
          );
        },
      });
    return (n.initial = !0), s;
  };
function wa(i, t) {
  i.addEventListener("motioncomplete", t);
}
function Ma(i, t, e, n) {
  const s = Uc(
    (e == null ? void 0 : e.initial) === !1
      ? Ut(ht({}, t()), { initial: !1 })
      : t(),
    n
  );
  return (
    X(() => {
      if (e && !e.mount()) return;
      const o = i(),
        r = s.mount(o);
      X(() => s.update(t())),
        ke(() => {
          e && t().exit ? (s.setActive("exit", !0), wa(o, r)) : r();
        });
    }),
    [s, Yc(s.getTarget())]
  );
}
function jf(i, t, e) {
  const [n, s] = Ma(() => i, typeof t == "function" ? t : () => t, e);
  for (const o in s) ma.set(i, o, s[o]);
  return n;
}
var rh = [
    "initial",
    "animate",
    "inView",
    "inViewOptions",
    "hover",
    "press",
    "variants",
    "transition",
    "exit",
  ],
  ah = ["tag"],
  xo = ki(),
  yo = (i) => {
    const [t, , e] = G(i, rh, ah),
      [n, s] = Ma(
        () => o,
        () => ht({}, t),
        gi(_a),
        gi(xo)
      );
    let o;
    return D(xo.Provider, {
      value: n,
      get children() {
        return D(
          Dl,
          $(e, {
            ref: (r) => {
              var a;
              (o = r), (a = i.ref) == null || a.call(i, r);
            },
            get component() {
              return i.tag || "div";
            },
            get style() {
              return (function (r, a) {
                if (typeof r == "string") {
                  if (typeof a == "string") return `${r};${a}`;
                  r = ao(r);
                } else typeof a == "string" && (a = ao(a));
                return ht(ht({}, r), a);
              })(i.style, s);
            },
          })
        );
      },
    });
  },
  lh = new Proxy(yo, { get: (i, t) => (e) => D(yo, $(e, { tag: t })) });
const ch = new Proxy(
    {},
    {
      get: (i, t) => (e) => {
        var n, s;
        return (
          (n = e.animate) != null &&
            n.transition &&
            (e.animate.transition.persist = !0),
          (s = e.exit) != null &&
            s.transition &&
            (e.exit.transition.persist = !0),
          e.transition
            ? (e.transition.persist = !0)
            : (e.transition = { persist: !0 }),
          Cl(lh[t], e)
        );
      },
    }
  ),
  hh = bs,
  dh = cs("relative flex items-center rounded-lg", {
    variants: {
      variant: { default: "", fill: "bg-layer3", ring: "bg-layer3 rounded-md" },
      size: { sm: "h-8 text-sm", default: "h-10", lg: "h-12 sm:h-10" },
    },
    defaultVariants: { size: "default", variant: "default" },
  }),
  uh = (i) => {
    const [t, e] = G(i, ["class", "size", "variant"]);
    return D(
      ms,
      $(
        {
          get class() {
            return xt(dh({ size: t.size, variant: t.variant }), i.class);
          },
        },
        e
      )
    );
  },
  fh = cs(
    "h-full inline-flex items-center justify-center whitespace-nowrap px-3 font-extrabold transition-all disabled:pointer-events-none disabled:opacity-40 focus-visible:!outline-none focus-visible:!outline-0",
    {
      variants: {
        variant: {
          default:
            "rounded-md flex-1 bg-none text-secondary data-[selected]:text-primary  ",
          fill: "rounded-md flex-1 data-[selected]:bg-tab_selected text-secondary data-[selected]:text-primary",
          ring: "rounded-md flex-1 data-[selected]:bg-tab_selected text-secondary data-[selected]:text-primary",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  gh = (i) => {
    const [t, e] = G(i, ["class", "variant"]);
    return D(
      xs,
      $(
        {
          get class() {
            return xt(fh({ variant: t.variant }), i.class);
          },
        },
        e
      )
    );
  },
  ph = (i) => {
    let t = !0;
    Pe(() => (t = !1));
    const [, e] = G(i, ["class", "children"]);
    return D(
      gs,
      $(
        {
          get class() {
            return xt("mt-0 md:relative z-100 lg:overflow-auto", i.class);
          },
          get style() {
            return Pl.mobile ? {} : { "max-height": "calc(100% - 48px)" };
          },
        },
        e,
        {
          get children() {
            return D(oh, {
              exitBeforeEnter: !0,
              get children() {
                return D(ch.div, {
                  initial: t ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 },
                  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                  exit: { x: -100, opacity: 0, transition: { duration: 0.3 } },
                  class:
                    "flex flex-col gap-3 px-3 mb-3 mt-3 lg:py-3 relative z-100",
                  get children() {
                    return i.children;
                  },
                });
              },
            });
          },
        }
      )
    );
  },
  Hf = (i) => {
    const [, t] = G(i, ["class"]);
    return D(
      ps,
      $(
        {
          get class() {
            return xt(
              "duration-250ms absolute transition-all data-[orientation=horizontal]:bottom-[-1px] data-[orientation=vertical]:right-[-1px] data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px] bg-gradient-to-r from-[#24ee89] to-[#9fe871] data-[disabled]:opacity-40",
              i.class
            );
          },
        },
        t
      )
    );
  };
function mh(i = {}) {
  const [t, e] = Jl({
    value: () => I(i.isSelected),
    defaultValue: () => !!I(i.defaultIsSelected),
    onChange: (n) => {
      var s;
      return (s = i.onSelectedChange) == null ? void 0 : s.call(i, n);
    },
  });
  return {
    isSelected: t,
    setIsSelected: (n) => {
      I(i.isReadOnly) || I(i.isDisabled) || e(n);
    },
    toggle: () => {
      I(i.isReadOnly) || I(i.isDisabled) || e(!t());
    },
  };
}
var bh = Y('<div class="flex justify-center flex-wrap gap-4">'),
  xh = Y(
    '<a target=_blank rel="noopener noreferrer"><img class="w-[2.5rem] h-[2.5rem] mr-[1rem] mb-[1.25rem]">'
  );
function $f() {
  const i = Vl(),
    [t, e] = H([]);
  return (
    Pe(() =>
      eo(this, null, function* () {
        try {
          const n = (yield Tl({ title: i.gameUnique || "" })).map((s) =>
            Ut(ht({}, s), { url: s.url || "" })
          );
          e(n);
        } catch (n) {}
      })
    ),
    D(Ol, {
      get title() {
        return J("Share This Game");
      },
      get children() {
        var n = bh();
        return (
          R(
            n,
            D(vt, {
              get when() {
                return t();
              },
              get fallback() {
                return D(ca, {});
              },
              get children() {
                return D(Ji, {
                  get each() {
                    return t().filter((s) => s.url);
                  },
                  children: (s, o) => {
                    return (
                      (r = xh()),
                      (a = r.firstChild),
                      _e(
                        (l) => {
                          var c = s.url,
                            d = Al("share-item", o() > 2 && "disabled"),
                            h = s.icon;
                          return (
                            c !== l.e && dt(r, "href", (l.e = c)),
                            d !== l.t && oi(r, (l.t = d)),
                            h !== l.a && dt(a, "src", (l.a = h)),
                            l
                          );
                        },
                        { e: void 0, t: void 0, a: void 0 }
                      ),
                      r
                    );
                    var r, a;
                  },
                });
              },
            })
          ),
          n
        );
      },
    })
  );
}
var ys = Y("<div>"),
  yh = Y("<h3>");
const Vn = (i) => {
    const [, t] = G(i, ["class"]);
    return (
      (e = ys()),
      de(
        e,
        $(
          {
            get class() {
              return xt("rounded-lg bg-layer4 text-primary shadow-sm", i.class);
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
  },
  Nn = (i) => {
    const [, t] = G(i, ["class"]);
    return (
      (e = ys()),
      de(
        e,
        $(
          {
            get class() {
              return xt("flex flex-col space-y-1.5 p-6", i.class);
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
  },
  Wn = (i) => {
    const [, t] = G(i, ["class"]);
    return (
      (e = yh()),
      de(
        e,
        $(
          {
            get class() {
              return xt(
                "text-lg font-semibold leading-none tracking-tight",
                i.class
              );
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
  },
  jn = (i) => {
    const [, t] = G(i, ["class"]);
    return (
      (e = ys()),
      de(
        e,
        $(
          {
            get class() {
              return xt("p-6 pt-0", i.class);
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
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function Si(i) {
  return (i + 0.5) | 0;
}
const ne = (i, t, e) => Math.max(Math.min(i, e), t);
function ti(i) {
  return ne(Si(2.55 * i), 0, 255);
}
function se(i) {
  return ne(Si(255 * i), 0, 255);
}
function Yt(i) {
  return ne(Si(i / 2.55) / 100, 0, 1);
}
function vo(i) {
  return ne(Si(100 * i), 0, 100);
}
const Lt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Hn = [..."0123456789ABCDEF"],
  vh = (i) => Hn[15 & i],
  _h = (i) => Hn[(240 & i) >> 4] + Hn[15 & i],
  Oi = (i) => (240 & i) >> 4 == (15 & i);
function wh(i) {
  var t = ((e) => Oi(e.r) && Oi(e.g) && Oi(e.b) && Oi(e.a))(i) ? vh : _h;
  return i
    ? "#" + t(i.r) + t(i.g) + t(i.b) + ((e, n) => (e < 255 ? n(e) : ""))(i.a, t)
    : void 0;
}
const Mh =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ka(i, t, e) {
  const n = t * Math.min(e, 1 - e),
    s = (o, r = (o + i / 30) % 12) =>
      e - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function kh(i, t, e) {
  const n = (s, o = (s + i / 60) % 6) =>
    e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Sh(i, t, e) {
  const n = ka(i, 1, 0.5);
  let s;
  for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++)
    (n[s] *= 1 - t - e), (n[s] += t);
  return n;
}
function $n(i) {
  const t = i.r / 255,
    e = i.g / 255,
    n = i.b / 255,
    s = Math.max(t, e, n),
    o = Math.min(t, e, n),
    r = (s + o) / 2;
  let a, l, c;
  return (
    s !== o &&
      ((c = s - o),
      (l = r > 0.5 ? c / (2 - s - o) : c / (s + o)),
      (a = (function (d, h, u, g, p) {
        return d === p
          ? (h - u) / g + (h < u ? 6 : 0)
          : h === p
          ? (u - d) / g + 2
          : (d - h) / g + 4;
      })(t, e, n, c, s)),
      (a = 60 * a + 0.5)),
    [0 | a, l || 0, r]
  );
}
function Un(i, t, e, n) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, n)).map(se);
}
function vs(i, t, e) {
  return Un(ka, i, t, e);
}
function Sa(i) {
  return ((i % 360) + 360) % 360;
}
function Dh(i) {
  const t = Mh.exec(i);
  let e,
    n = 255;
  if (!t) return;
  t[5] !== e && (n = t[6] ? ti(+t[5]) : se(+t[5]));
  const s = Sa(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100;
  return (
    (e =
      t[1] === "hwb"
        ? (function (a, l, c) {
            return Un(Sh, a, l, c);
          })(s, o, r)
        : t[1] === "hsv"
        ? (function (a, l, c) {
            return Un(kh, a, l, c);
          })(s, o, r)
        : vs(s, o, r)),
    { r: e[0], g: e[1], b: e[2], a: n }
  );
}
const _o = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  wo = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
let Ai;
function Ch(i) {
  Ai ||
    ((Ai = (function () {
      const e = {},
        n = Object.keys(wo),
        s = Object.keys(_o);
      let o, r, a, l, c;
      for (o = 0; o < n.length; o++) {
        for (l = c = n[o], r = 0; r < s.length; r++)
          (a = s[r]), (c = c.replace(a, _o[a]));
        (a = parseInt(wo[l], 16)),
          (e[c] = [(a >> 16) & 255, (a >> 8) & 255, 255 & a]);
      }
      return e;
    })()),
    (Ai.transparent = [0, 0, 0, 0]));
  const t = Ai[i.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const Ph =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
  yn = (i) =>
    i <= 0.0031308 ? 12.92 * i : 1.055 * Math.pow(i, 1 / 2.4) - 0.055,
  Te = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function Ti(i, t, e) {
  if (i) {
    let n = $n(i);
    (n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1))),
      (n = vs(n)),
      (i.r = n[0]),
      (i.g = n[1]),
      (i.b = n[2]);
  }
}
function Da(i, t) {
  return i && Object.assign(t || {}, i);
}
function Mo(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((t = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (t.a = se(i[3])))
      : ((t = Da(i, { r: 0, g: 0, b: 0, a: 1 })).a = se(t.a)),
    t
  );
}
function Oh(i) {
  return i.charAt(0) === "r"
    ? (function (t) {
        const e = Ph.exec(t);
        let n,
          s,
          o,
          r = 255;
        if (e) {
          if (e[7] !== n) {
            const a = +e[7];
            r = e[8] ? ti(a) : ne(255 * a, 0, 255);
          }
          return (
            (n = +e[1]),
            (s = +e[3]),
            (o = +e[5]),
            (n = 255 & (e[2] ? ti(n) : ne(n, 0, 255))),
            (s = 255 & (e[4] ? ti(s) : ne(s, 0, 255))),
            (o = 255 & (e[6] ? ti(o) : ne(o, 0, 255))),
            { r: n, g: s, b: o, a: r }
          );
        }
      })(i)
    : Dh(i);
}
class pi {
  constructor(t) {
    if (t instanceof pi) return t;
    const e = typeof t;
    let n;
    var s, o, r;
    e === "object"
      ? (n = Mo(t))
      : e === "string" &&
        ((r = (s = t).length),
        s[0] === "#" &&
          (r === 4 || r === 5
            ? (o = {
                r: 255 & (17 * Lt[s[1]]),
                g: 255 & (17 * Lt[s[2]]),
                b: 255 & (17 * Lt[s[3]]),
                a: r === 5 ? 17 * Lt[s[4]] : 255,
              })
            : (r !== 7 && r !== 9) ||
              (o = {
                r: (Lt[s[1]] << 4) | Lt[s[2]],
                g: (Lt[s[3]] << 4) | Lt[s[4]],
                b: (Lt[s[5]] << 4) | Lt[s[6]],
                a: r === 9 ? (Lt[s[7]] << 4) | Lt[s[8]] : 255,
              })),
        (n = o || Ch(t) || Oh(t))),
      (this._rgb = n),
      (this._valid = !!n);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Da(this._rgb);
    return t && (t.a = Yt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Mo(t);
  }
  rgbString() {
    return this._valid
      ? (t = this._rgb) &&
          (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${Yt(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
      : void 0;
    var t;
  }
  hexString() {
    return this._valid ? wh(this._rgb) : void 0;
  }
  hslString() {
    return this._valid
      ? (function (t) {
          if (!t) return;
          const e = $n(t),
            n = e[0],
            s = vo(e[1]),
            o = vo(e[2]);
          return t.a < 255
            ? `hsla(${n}, ${s}%, ${o}%, ${Yt(t.a)})`
            : `hsl(${n}, ${s}%, ${o}%)`;
        })(this._rgb)
      : void 0;
  }
  mix(t, e) {
    if (t) {
      const n = this.rgb,
        s = t.rgb;
      let o;
      const r = e === o ? 0.5 : e,
        a = 2 * r - 1,
        l = n.a - s.a,
        c = ((a * l == -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (o = 1 - c),
        (n.r = 255 & (c * n.r + o * s.r + 0.5)),
        (n.g = 255 & (c * n.g + o * s.g + 0.5)),
        (n.b = 255 & (c * n.b + o * s.b + 0.5)),
        (n.a = r * n.a + (1 - r) * s.a),
        (this.rgb = n);
    }
    return this;
  }
  interpolate(t, e) {
    return (
      t &&
        (this._rgb = (function (n, s, o) {
          const r = Te(Yt(n.r)),
            a = Te(Yt(n.g)),
            l = Te(Yt(n.b));
          return {
            r: se(yn(r + o * (Te(Yt(s.r)) - r))),
            g: se(yn(a + o * (Te(Yt(s.g)) - a))),
            b: se(yn(l + o * (Te(Yt(s.b)) - l))),
            a: n.a + o * (s.a - n.a),
          };
        })(this._rgb, t._rgb, e)),
      this
    );
  }
  clone() {
    return new pi(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = se(t)), this;
  }
  clearer(t) {
    return (this._rgb.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = Si(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    return (this._rgb.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Ti(this._rgb, 2, t), this;
  }
  darken(t) {
    return Ti(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Ti(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Ti(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return (
      (function (e, n) {
        var s = $n(e);
        (s[0] = Sa(s[0] + n)),
          (s = vs(s)),
          (e.r = s[0]),
          (e.g = s[1]),
          (e.b = s[2]);
      })(this._rgb, t),
      this
    );
  }
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function qt() {}
const Ah = (() => {
  let i = 0;
  return () => i++;
})();
function W(i) {
  return i == null;
}
function tt(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function N(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function ot(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Ot(i, t) {
  return ot(i) ? i : t;
}
function V(i, t) {
  return i === void 0 ? t : i;
}
const Ca = (i, t) =>
  typeof i == "string" && i.endsWith("%") ? (parseFloat(i) / 100) * t : +i;
function Z(i, t, e) {
  if (i && typeof i.call == "function") return i.apply(e, t);
}
function U(i, t, e, n) {
  let s, o, r;
  if (tt(i))
    if (((o = i.length), n)) for (s = o - 1; s >= 0; s--) t.call(e, i[s], s);
    else for (s = 0; s < o; s++) t.call(e, i[s], s);
  else if (N(i))
    for (r = Object.keys(i), o = r.length, s = 0; s < o; s++)
      t.call(e, i[r[s]], r[s]);
}
function Qi(i, t) {
  let e, n, s, o;
  if (!i || !t || i.length !== t.length) return !1;
  for (e = 0, n = i.length; e < n; ++e)
    if (
      ((s = i[e]),
      (o = t[e]),
      s.datasetIndex !== o.datasetIndex || s.index !== o.index)
    )
      return !1;
  return !0;
}
function tn(i) {
  if (tt(i)) return i.map(tn);
  if (N(i)) {
    const t = Object.create(null),
      e = Object.keys(i),
      n = e.length;
    let s = 0;
    for (; s < n; ++s) t[e[s]] = tn(i[e[s]]);
    return t;
  }
  return i;
}
function Pa(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function Th(i, t, e, n) {
  if (!Pa(i)) return;
  const s = t[i],
    o = e[i];
  N(s) && N(o) ? mi(s, o, n) : (t[i] = tn(o));
}
function mi(i, t, e) {
  const n = tt(t) ? t : [t],
    s = n.length;
  if (!N(i)) return i;
  const o = (e = e || {}).merger || Th;
  let r;
  for (let a = 0; a < s; ++a) {
    if (((r = n[a]), !N(r))) continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c) o(l[c], i, r, e);
  }
  return i;
}
function ai(i, t) {
  return mi(i, t, { merger: Eh });
}
function Eh(i, t, e) {
  if (!Pa(i)) return;
  const n = t[i],
    s = e[i];
  N(n) && N(s)
    ? ai(n, s)
    : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = tn(s));
}
const ko = { "": (i) => i, x: (i) => i.x, y: (i) => i.y };
function le(i, t) {
  return (
    ko[t] ||
    (ko[t] = (function (n) {
      const s = (function (o) {
        const r = o.split("."),
          a = [];
        let l = "";
        for (const c of r)
          (l += c),
            l.endsWith("\\")
              ? (l = l.slice(0, -1) + ".")
              : (a.push(l), (l = ""));
        return a;
      })(n);
      return (o) => {
        for (const r of s) {
          if (r === "") break;
          o = o && o[r];
        }
        return o;
      };
    })(t))
  )(i);
}
function _s(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const bi = (i) => i !== void 0,
  ce = (i) => typeof i == "function",
  So = (i, t) => {
    if (i.size !== t.size) return !1;
    for (const e of i) if (!t.has(e)) return !1;
    return !0;
  },
  it = Math.PI,
  et = 2 * it,
  Lh = et + it,
  Ei = Number.POSITIVE_INFINITY,
  Ih = it / 180,
  rt = it / 2,
  ue = it / 4,
  Do = (2 * it) / 3,
  oe = Math.log10,
  Wt = Math.sign;
function li(i, t, e) {
  return Math.abs(i - t) < e;
}
function Co(i) {
  const t = Math.round(i);
  i = li(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(oe(i))),
    n = i / e;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
}
function Ne(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function Oa(i, t, e) {
  let n, s, o;
  for (n = 0, s = i.length; n < s; n++)
    (o = i[n][e]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function Rt(i) {
  return i * (it / 180);
}
function ws(i) {
  return i * (180 / it);
}
function Po(i) {
  if (!ot(i)) return;
  let t = 1,
    e = 0;
  for (; Math.round(i * t) / t !== i; ) (t *= 10), e++;
  return e;
}
function Aa(i, t) {
  const e = t.x - i.x,
    n = t.y - i.y,
    s = Math.sqrt(e * e + n * n);
  let o = Math.atan2(n, e);
  return o < -0.5 * it && (o += et), { angle: o, distance: s };
}
function Yn(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Rh(i, t) {
  return ((i - t + Lh) % et) - it;
}
function At(i) {
  return ((i % et) + et) % et;
}
function xi(i, t, e, n) {
  const s = At(i),
    o = At(t),
    r = At(e),
    a = At(o - s),
    l = At(r - s),
    c = At(s - o),
    d = At(s - r);
  return s === o || s === r || (n && o === r) || (a > l && c < d);
}
function mt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Jt(i, t, e, n = 1e-6) {
  return i >= Math.min(t, e) - n && i <= Math.max(t, e) + n;
}
function Ms(i, t, e) {
  e = e || ((r) => i[r] < t);
  let n,
    s = i.length - 1,
    o = 0;
  for (; s - o > 1; ) (n = (o + s) >> 1), e(n) ? (o = n) : (s = n);
  return { lo: o, hi: s };
}
const Qt = (i, t, e, n) =>
    Ms(
      i,
      e,
      n
        ? (s) => {
            const o = i[s][t];
            return o < e || (o === e && i[s + 1][t] === e);
          }
        : (s) => i[s][t] < e
    ),
  Fh = (i, t, e) => Ms(i, e, (n) => i[n][t] >= e),
  Ta = ["push", "pop", "shift", "splice", "unshift"];
function Oo(i, t) {
  const e = i._chartjs;
  if (!e) return;
  const n = e.listeners,
    s = n.indexOf(t);
  s !== -1 && n.splice(s, 1),
    n.length > 0 ||
      (Ta.forEach((o) => {
        delete i[o];
      }),
      delete i._chartjs);
}
function Ea(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const La =
  typeof window == "undefined"
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
function Ia(i, t) {
  let e = [],
    n = !1;
  return function (...s) {
    (e = s),
      n ||
        ((n = !0),
        La.call(window, () => {
          (n = !1), i.apply(t, e);
        }));
  };
}
const ks = (i) => (i === "start" ? "left" : i === "end" ? "right" : "center"),
  yt = (i, t, e) => (i === "start" ? t : i === "end" ? e : (t + e) / 2);
function Ra(i, t, e) {
  const n = t.length;
  let s = 0,
    o = n;
  if (i._sorted) {
    const { iScale: r, _parsed: a } = i,
      l = r.axis,
      { min: c, max: d, minDefined: h, maxDefined: u } = r.getUserBounds();
    h &&
      (s = mt(
        Math.min(Qt(a, l, c).lo, e ? n : Qt(t, l, r.getPixelForValue(c)).lo),
        0,
        n - 1
      )),
      (o = u
        ? mt(
            Math.max(
              Qt(a, r.axis, d, !0).hi + 1,
              e ? 0 : Qt(t, l, r.getPixelForValue(d), !0).hi + 1
            ),
            s,
            n
          ) - s
        : n - s);
  }
  return { start: s, count: o };
}
function Fa(i) {
  const { xScale: t, yScale: e, _scaleRanges: n } = i,
    s = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!n) return (i._scaleRanges = s), !0;
  const o =
    n.xmin !== t.min ||
    n.xmax !== t.max ||
    n.ymin !== e.min ||
    n.ymax !== e.max;
  return Object.assign(n, s), o;
}
const Li = (i) => i === 0 || i === 1,
  Ao = (i, t, e) => -Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - t) * et) / e),
  To = (i, t, e) => Math.pow(2, -10 * i) * Math.sin(((i - t) * et) / e) + 1,
  ci = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => 1 - Math.cos(i * rt),
    easeOutSine: (i) => Math.sin(i * rt),
    easeInOutSine: (i) => -0.5 * (Math.cos(it * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : 1 - Math.pow(2, -10 * i)),
    easeInOutExpo: (i) =>
      Li(i)
        ? i
        : i < 0.5
        ? 0.5 * Math.pow(2, 10 * (2 * i - 1))
        : 0.5 * (2 - Math.pow(2, -10 * (2 * i - 1))),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (Li(i) ? i : Ao(i, 0.075, 0.3)),
    easeOutElastic: (i) => (Li(i) ? i : To(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return Li(i)
        ? i
        : i < 0.5
        ? 0.5 * Ao(2 * i, 0.1125, 0.45)
        : 0.5 + 0.5 * To(2 * i - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let t = 1.70158;
      return (i /= 0.5) < 1
        ? i * i * ((1 + (t *= 1.525)) * i - t) * 0.5
        : 0.5 * ((i -= 2) * i * ((1 + (t *= 1.525)) * i + t) + 2);
    },
    easeInBounce: (i) => 1 - ci.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
        ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
        : i < 2.5 / 2.75
        ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
        : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? 0.5 * ci.easeInBounce(2 * i)
        : 0.5 * ci.easeOutBounce(2 * i - 1) + 0.5,
  };
function Ss(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Eo(i) {
  return Ss(i) ? i : new pi(i);
}
function vn(i) {
  return Ss(i) ? i : new pi(i).saturate(0.5).darken(0.1).hexString();
}
const zh = ["x", "y", "borderWidth", "radius", "tension"],
  Bh = ["color", "borderColor", "backgroundColor"],
  Lo = new Map();
function Di(i, t, e) {
  return (function (n, s) {
    s = s || {};
    const o = n + JSON.stringify(s);
    let r = Lo.get(o);
    return r || ((r = new Intl.NumberFormat(n, s)), Lo.set(o, r)), r;
  })(t, e).format(i);
}
const za = {
  values: (i) => (tt(i) ? i : "" + i),
  numeric(i, t, e) {
    if (i === 0) return "0";
    const n = this.chart.options.locale;
    let s,
      o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"),
        (o = (function (d, h) {
          let u =
            h.length > 3 ? h[2].value - h[1].value : h[1].value - h[0].value;
          return (
            Math.abs(u) >= 1 && d !== Math.floor(d) && (u = d - Math.floor(d)),
            u
          );
        })(i, e));
    }
    const r = oe(Math.abs(o)),
      a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      l = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), Di(i, n, l);
  },
  logarithmic(i, t, e) {
    if (i === 0) return "0";
    const n = e[t].significand || i / Math.pow(10, Math.floor(oe(i)));
    return [1, 2, 3, 5, 10, 15].includes(n) || t > 0.8 * e.length
      ? za.numeric.call(this, i, t, e)
      : "";
  },
};
var un = { formatters: za };
const De = Object.create(null),
  qn = Object.create(null);
function hi(i, t) {
  if (!t) return i;
  const e = t.split(".");
  for (let n = 0, s = e.length; n < s; ++n) {
    const o = e[n];
    i = i[o] || (i[o] = Object.create(null));
  }
  return i;
}
function _n(i, t, e) {
  return typeof t == "string" ? mi(hi(i, t), e) : mi(hi(i, ""), t);
}
class Kh {
  constructor(t, e) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, s) => vn(s.backgroundColor)),
      (this.hoverBorderColor = (n, s) => vn(s.borderColor)),
      (this.hoverColor = (n, s) => vn(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e);
  }
  set(t, e) {
    return _n(this, t, e);
  }
  get(t) {
    return hi(this, t);
  }
  describe(t, e) {
    return _n(qn, t, e);
  }
  override(t, e) {
    return _n(De, t, e);
  }
  route(t, e, n, s) {
    const o = hi(this, t),
      r = hi(this, n),
      a = "_" + e;
    Object.defineProperties(o, {
      [a]: { value: o[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = r[s];
          return N(l) ? Object.assign({}, c, l) : V(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var st = new Kh(
  {
    _scriptable: (i) => !i.startsWith("on"),
    _indexable: (i) => i !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [
    function (i) {
      i.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      }),
        i.describe("animation", {
          _fallback: !1,
          _indexable: !1,
          _scriptable: (t) =>
            t !== "onProgress" && t !== "onComplete" && t !== "fn",
        }),
        i.set("animations", {
          colors: { type: "color", properties: Bh },
          numbers: { type: "number", properties: zh },
        }),
        i.describe("animations", { _fallback: "animation" }),
        i.set("transitions", {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: "transparent" },
              visible: { type: "boolean", duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: "transparent" },
              visible: { type: "boolean", easing: "linear", fn: (t) => 0 | t },
            },
          },
        });
    },
    function (i) {
      i.set("layout", {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
    },
    function (i) {
      i.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        clip: !0,
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: (t, e) => e.lineWidth,
          tickColor: (t, e) => e.color,
          offset: !1,
        },
        border: { display: !0, dash: [], dashOffset: 0, width: 1 },
        title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: "",
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: un.formatters.values,
          minor: {},
          major: {},
          align: "center",
          crossAlign: "near",
          showLabelBackdrop: !1,
          backdropColor: "rgba(255, 255, 255, 0.75)",
          backdropPadding: 2,
        },
      }),
        i.route("scale.ticks", "color", "", "color"),
        i.route("scale.grid", "color", "", "borderColor"),
        i.route("scale.border", "color", "", "borderColor"),
        i.route("scale.title", "color", "", "color"),
        i.describe("scale", {
          _fallback: !1,
          _scriptable: (t) =>
            !t.startsWith("before") &&
            !t.startsWith("after") &&
            t !== "callback" &&
            t !== "parser",
          _indexable: (t) =>
            t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
        }),
        i.describe("scales", { _fallback: "scale" }),
        i.describe("scale.ticks", {
          _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
          _indexable: (t) => t !== "backdropPadding",
        });
    },
  ]
);
function en(i, t, e, n, s) {
  let o = t[s];
  return (
    o || ((o = t[s] = i.measureText(s).width), e.push(s)), o > n && (n = o), n
  );
}
function Vh(i, t, e, n) {
  let s = ((n = n || {}).data = n.data || {}),
    o = (n.garbageCollect = n.garbageCollect || []);
  n.font !== t &&
    ((s = n.data = {}), (o = n.garbageCollect = []), (n.font = t)),
    i.save(),
    (i.font = t);
  let r = 0;
  const a = e.length;
  let l, c, d, h, u;
  for (l = 0; l < a; l++)
    if (((h = e[l]), h == null || tt(h))) {
      if (tt(h))
        for (c = 0, d = h.length; c < d; c++)
          (u = h[c]), u == null || tt(u) || (r = en(i, s, o, r, u));
    } else r = en(i, s, o, r, h);
  i.restore();
  const g = o.length / 2;
  if (g > e.length) {
    for (l = 0; l < g; l++) delete s[o[l]];
    o.splice(0, g);
  }
  return r;
}
function fe(i, t, e) {
  const n = i.currentDevicePixelRatio,
    s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function Io(i, t) {
  (t || i) &&
    ((t = t || i.getContext("2d")).save(),
    t.resetTransform(),
    t.clearRect(0, 0, i.width, i.height),
    t.restore());
}
function Xn(i, t, e, n) {
  Ba(i, t, e, n, null);
}
function Ba(i, t, e, n, s) {
  let o, r, a, l, c, d, h, u;
  const g = t.pointStyle,
    p = t.rotation,
    f = t.radius;
  let m = (p || 0) * Ih;
  if (
    g &&
    typeof g == "object" &&
    ((o = g.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  )
    return (
      i.save(),
      i.translate(e, n),
      i.rotate(m),
      i.drawImage(g, -g.width / 2, -g.height / 2, g.width, g.height),
      void i.restore()
    );
  if (!(isNaN(f) || f <= 0)) {
    switch ((i.beginPath(), g)) {
      default:
        s ? i.ellipse(e, n, s / 2, f, 0, 0, et) : i.arc(e, n, f, 0, et),
          i.closePath();
        break;
      case "triangle":
        (d = s ? s / 2 : f),
          i.moveTo(e + Math.sin(m) * d, n - Math.cos(m) * f),
          (m += Do),
          i.lineTo(e + Math.sin(m) * d, n - Math.cos(m) * f),
          (m += Do),
          i.lineTo(e + Math.sin(m) * d, n - Math.cos(m) * f),
          i.closePath();
        break;
      case "rectRounded":
        (c = 0.516 * f),
          (l = f - c),
          (r = Math.cos(m + ue) * l),
          (h = Math.cos(m + ue) * (s ? s / 2 - c : l)),
          (a = Math.sin(m + ue) * l),
          (u = Math.sin(m + ue) * (s ? s / 2 - c : l)),
          i.arc(e - h, n - a, c, m - it, m - rt),
          i.arc(e + u, n - r, c, m - rt, m),
          i.arc(e + h, n + a, c, m, m + rt),
          i.arc(e - u, n + r, c, m + rt, m + it),
          i.closePath();
        break;
      case "rect":
        if (!p) {
          (l = Math.SQRT1_2 * f),
            (d = s ? s / 2 : l),
            i.rect(e - d, n - l, 2 * d, 2 * l);
          break;
        }
        m += ue;
      case "rectRot":
        (h = Math.cos(m) * (s ? s / 2 : f)),
          (r = Math.cos(m) * f),
          (a = Math.sin(m) * f),
          (u = Math.sin(m) * (s ? s / 2 : f)),
          i.moveTo(e - h, n - a),
          i.lineTo(e + u, n - r),
          i.lineTo(e + h, n + a),
          i.lineTo(e - u, n + r),
          i.closePath();
        break;
      case "crossRot":
        m += ue;
      case "cross":
        (h = Math.cos(m) * (s ? s / 2 : f)),
          (r = Math.cos(m) * f),
          (a = Math.sin(m) * f),
          (u = Math.sin(m) * (s ? s / 2 : f)),
          i.moveTo(e - h, n - a),
          i.lineTo(e + h, n + a),
          i.moveTo(e + u, n - r),
          i.lineTo(e - u, n + r);
        break;
      case "star":
        (h = Math.cos(m) * (s ? s / 2 : f)),
          (r = Math.cos(m) * f),
          (a = Math.sin(m) * f),
          (u = Math.sin(m) * (s ? s / 2 : f)),
          i.moveTo(e - h, n - a),
          i.lineTo(e + h, n + a),
          i.moveTo(e + u, n - r),
          i.lineTo(e - u, n + r),
          (m += ue),
          (h = Math.cos(m) * (s ? s / 2 : f)),
          (r = Math.cos(m) * f),
          (a = Math.sin(m) * f),
          (u = Math.sin(m) * (s ? s / 2 : f)),
          i.moveTo(e - h, n - a),
          i.lineTo(e + h, n + a),
          i.moveTo(e + u, n - r),
          i.lineTo(e - u, n + r);
        break;
      case "line":
        (r = s ? s / 2 : Math.cos(m) * f),
          (a = Math.sin(m) * f),
          i.moveTo(e - r, n - a),
          i.lineTo(e + r, n + a);
        break;
      case "dash":
        i.moveTo(e, n),
          i.lineTo(e + Math.cos(m) * (s ? s / 2 : f), n + Math.sin(m) * f);
        break;
      case !1:
        i.closePath();
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function te(i, t, e) {
  return (
    (e = e || 0.5),
    !t ||
      (i &&
        i.x > t.left - e &&
        i.x < t.right + e &&
        i.y > t.top - e &&
        i.y < t.bottom + e)
  );
}
function fn(i, t) {
  i.save(),
    i.beginPath(),
    i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    i.clip();
}
function gn(i) {
  i.restore();
}
function Nh(i, t, e, n, s) {
  if (!t) return i.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else (s === "after") != !!n ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Wh(i, t, e, n) {
  if (!t) return i.lineTo(e.x, e.y);
  i.bezierCurveTo(
    n ? t.cp1x : t.cp2x,
    n ? t.cp1y : t.cp2y,
    n ? e.cp2x : e.cp1x,
    n ? e.cp2y : e.cp1y,
    e.x,
    e.y
  );
}
function jh(i, t, e, n, s) {
  if (s.strikethrough || s.underline) {
    const o = i.measureText(n),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = e - o.actualBoundingBoxAscent,
      c = e + o.actualBoundingBoxDescent,
      d = s.strikethrough ? (l + c) / 2 : c;
    (i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = s.decorationWidth || 2),
      i.moveTo(r, d),
      i.lineTo(a, d),
      i.stroke();
  }
}
function Hh(i, t) {
  const e = i.fillStyle;
  (i.fillStyle = t.color),
    i.fillRect(t.left, t.top, t.width, t.height),
    (i.fillStyle = e);
}
function Ce(i, t, e, n, s, o = {}) {
  const r = tt(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (
    i.save(),
      i.font = s.string,
      (function (d, h) {
        h.translation && d.translate(h.translation[0], h.translation[1]),
          W(h.rotation) || d.rotate(h.rotation),
          h.color && (d.fillStyle = h.color),
          h.textAlign && (d.textAlign = h.textAlign),
          h.textBaseline && (d.textBaseline = h.textBaseline);
      })(i, o),
      l = 0;
    l < r.length;
    ++l
  )
    (c = r[l]),
      o.backdrop && Hh(i, o.backdrop),
      a &&
        (o.strokeColor && (i.strokeStyle = o.strokeColor),
        W(o.strokeWidth) || (i.lineWidth = o.strokeWidth),
        i.strokeText(c, e, n, o.maxWidth)),
      i.fillText(c, e, n, o.maxWidth),
      jh(i, e, n, c, o),
      (n += Number(s.lineHeight));
  i.restore();
}
function yi(i, t) {
  const { x: e, y: n, w: s, h: o, radius: r } = t;
  i.arc(e + r.topLeft, n + r.topLeft, r.topLeft, 1.5 * it, it, !0),
    i.lineTo(e, n + o - r.bottomLeft),
    i.arc(e + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, it, rt, !0),
    i.lineTo(e + s - r.bottomRight, n + o),
    i.arc(
      e + s - r.bottomRight,
      n + o - r.bottomRight,
      r.bottomRight,
      rt,
      0,
      !0
    ),
    i.lineTo(e + s, n + r.topRight),
    i.arc(e + s - r.topRight, n + r.topRight, r.topRight, 0, -rt, !0),
    i.lineTo(e + r.topLeft, n);
}
const $h = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Uh = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Yh(i, t) {
  const e = ("" + i).match($h);
  if (!e || e[1] === "normal") return 1.2 * t;
  switch (((i = +e[2]), e[3])) {
    case "px":
      return i;
    case "%":
      i /= 100;
  }
  return t * i;
}
const qh = (i) => +i || 0;
function Ds(i, t) {
  const e = {},
    n = N(t),
    s = n ? Object.keys(t) : t,
    o = N(i) ? (n ? (r) => V(i[r], i[t[r]]) : (r) => i[r]) : () => i;
  for (const r of s) e[r] = qh(o(r));
  return e;
}
function Ka(i) {
  return Ds(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Me(i) {
  return Ds(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function wt(i) {
  const t = Ka(i);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function ut(i, t) {
  (i = i || {}), (t = t || st.font);
  let e = V(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let n = V(i.style, t.style);
  n && !("" + n).match(Uh) && (n = void 0);
  const s = {
    family: V(i.family, t.family),
    lineHeight: Yh(V(i.lineHeight, t.lineHeight), e),
    size: e,
    style: n,
    weight: V(i.weight, t.weight),
    string: "",
  };
  return (
    (s.string = (function (o) {
      return !o || W(o.size) || W(o.family)
        ? null
        : (o.style ? o.style + " " : "") +
            (o.weight ? o.weight + " " : "") +
            o.size +
            "px " +
            o.family;
    })(s)),
    s
  );
}
function ei(i, t, e, n) {
  let s,
    o,
    r,
    a = !0;
  for (s = 0, o = i.length; s < o; ++s)
    if (
      ((r = i[s]),
      r !== void 0 &&
        (t !== void 0 && typeof r == "function" && ((r = r(t)), (a = !1)),
        e !== void 0 && tt(r) && ((r = r[e % r.length]), (a = !1)),
        r !== void 0))
    )
      return n && !a && (n.cacheable = !1), r;
}
function he(i, t) {
  return Object.assign(Object.create(i), t);
}
function Cs(i, t = [""], e, n, s = () => i[0]) {
  const o = e || i;
  n === void 0 && (n = Fo("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: n,
    _getTarget: s,
    override: (a) => Cs([a, ...i], t, o, n),
  };
  return new Proxy(r, {
    deleteProperty: (a, l) => (delete a[l], delete a._keys, delete i[0][l], !0),
    get: (a, l) =>
      Na(a, l, () =>
        (function (c, d, h, u) {
          let g;
          for (const p of d)
            if (((g = Fo(Xh(p, c), h)), g !== void 0))
              return Gn(c, g) ? Zn(h, u, c, g) : g;
        })(l, t, i, a)
      ),
    getOwnPropertyDescriptor: (a, l) =>
      Reflect.getOwnPropertyDescriptor(a._scopes[0], l),
    getPrototypeOf: () => Reflect.getPrototypeOf(i[0]),
    has: (a, l) => zo(a).includes(l),
    ownKeys: (a) => zo(a),
    set(a, l, c) {
      const d = a._storage || (a._storage = s());
      return (a[l] = d[l] = c), delete a._keys, !0;
    },
  });
}
function Fe(i, t, e, n) {
  const s = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: Va(i, n),
    setContext: (o) => Fe(i, o, e, n),
    override: (o) => Fe(i.override(o), t, e, n),
  };
  return new Proxy(s, {
    deleteProperty: (o, r) => (delete o[r], delete i[r], !0),
    get: (o, r, a) =>
      Na(o, r, () =>
        (function (l, c, d) {
          const { _proxy: h, _context: u, _subProxy: g, _descriptors: p } = l;
          let f = h[c];
          return (
            ce(f) &&
              p.isScriptable(c) &&
              (f = (function (m, b, x, v) {
                const { _proxy: y, _context: _, _subProxy: w, _stack: M } = x;
                if (M.has(m))
                  throw new Error(
                    "Recursion detected: " + Array.from(M).join("->") + "->" + m
                  );
                M.add(m);
                let k = b(_, w || v);
                return M.delete(m), Gn(m, k) && (k = Zn(y._scopes, y, m, k)), k;
              })(c, f, l, d)),
            tt(f) &&
              f.length &&
              (f = (function (m, b, x, v) {
                const {
                  _proxy: y,
                  _context: _,
                  _subProxy: w,
                  _descriptors: M,
                } = x;
                if (_.index !== void 0 && v(m)) return b[_.index % b.length];
                if (N(b[0])) {
                  const k = b,
                    C = y._scopes.filter((S) => S !== k);
                  b = [];
                  for (const S of k) {
                    const O = Zn(C, y, m, S);
                    b.push(Fe(O, _, w && w[m], M));
                  }
                }
                return b;
              })(c, f, l, p.isIndexable)),
            Gn(c, f) && (f = Fe(f, u, g && g[c], p)),
            f
          );
        })(o, r, a)
      ),
    getOwnPropertyDescriptor: (o, r) =>
      o._descriptors.allKeys
        ? Reflect.has(i, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, r),
    getPrototypeOf: () => Reflect.getPrototypeOf(i),
    has: (o, r) => Reflect.has(i, r),
    ownKeys: () => Reflect.ownKeys(i),
    set: (o, r, a) => ((i[r] = a), delete o[r], !0),
  });
}
function Va(i, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: e = t.scriptable,
    _indexable: n = t.indexable,
    _allKeys: s = t.allKeys,
  } = i;
  return {
    allKeys: s,
    scriptable: e,
    indexable: n,
    isScriptable: ce(e) ? e : () => e,
    isIndexable: ce(n) ? n : () => n,
  };
}
const Xh = (i, t) => (i ? i + _s(t) : t),
  Gn = (i, t) =>
    N(t) &&
    i !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Na(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const n = e();
  return (i[t] = n), n;
}
function Wa(i, t, e) {
  return ce(i) ? i(t, e) : i;
}
const Gh = (i, t) => (i === !0 ? t : typeof i == "string" ? le(t, i) : void 0);
function Zh(i, t, e, n, s) {
  for (const o of t) {
    const r = Gh(e, o);
    if (r) {
      i.add(r);
      const a = Wa(r._fallback, e, s);
      if (a !== void 0 && a !== e && a !== n) return a;
    } else if (r === !1 && n !== void 0 && e !== n) return null;
  }
  return !1;
}
function Zn(i, t, e, n) {
  const s = t._rootScopes,
    o = Wa(t._fallback, e, n),
    r = [...i, ...s],
    a = new Set();
  a.add(n);
  let l = Ro(a, r, e, o || e, n);
  return (
    l !== null &&
    (o === void 0 || o === e || ((l = Ro(a, r, o, l, n)), l !== null)) &&
    Cs(Array.from(a), [""], s, o, () =>
      (function (c, d, h) {
        const u = c._getTarget();
        d in u || (u[d] = {});
        const g = u[d];
        return tt(g) && N(h) ? h : g || {};
      })(t, e, n)
    )
  );
}
function Ro(i, t, e, n, s) {
  for (; e; ) e = Zh(i, t, e, n, s);
  return e;
}
function Fo(i, t) {
  for (const e of t) {
    if (!e) continue;
    const n = e[i];
    if (n !== void 0) return n;
  }
}
function zo(i) {
  let t = i._keys;
  return (
    t ||
      (t = i._keys =
        (function (e) {
          const n = new Set();
          for (const s of e)
            for (const o of Object.keys(s).filter((r) => !r.startsWith("_")))
              n.add(o);
          return Array.from(n);
        })(i._scopes)),
    t
  );
}
function ja(i, t, e, n) {
  const { iScale: s } = i,
    { key: o = "r" } = this._parsing,
    r = new Array(n);
  let a, l, c, d;
  for (a = 0, l = n; a < l; ++a)
    (c = a + e), (d = t[c]), (r[a] = { r: s.parse(le(d, o), c) });
  return r;
}
const Jh = Number.EPSILON || 1e-14,
  Ee = (i, t) => t < i.length && !i[t].skip && i[t],
  Bo = (i) => (i === "x" ? "y" : "x");
function Qh(i, t, e, n) {
  const s = i.skip ? t : i,
    o = t,
    r = e.skip ? t : e,
    a = Yn(o, s),
    l = Yn(r, o);
  let c = a / (a + l),
    d = l / (a + l);
  (c = isNaN(c) ? 0 : c), (d = isNaN(d) ? 0 : d);
  const h = n * c,
    u = n * d;
  return {
    previous: { x: o.x - h * (r.x - s.x), y: o.y - h * (r.y - s.y) },
    next: { x: o.x + u * (r.x - s.x), y: o.y + u * (r.y - s.y) },
  };
}
function td(i, t = "x") {
  const e = Bo(t),
    n = i.length,
    s = Array(n).fill(0),
    o = Array(n);
  let r,
    a,
    l,
    c = Ee(i, 0);
  for (r = 0; r < n; ++r)
    if (((a = l), (l = c), (c = Ee(i, r + 1)), l)) {
      if (c) {
        const d = c[t] - l[t];
        s[r] = d !== 0 ? (c[e] - l[e]) / d : 0;
      }
      o[r] = a
        ? c
          ? Wt(s[r - 1]) !== Wt(s[r])
            ? 0
            : (s[r - 1] + s[r]) / 2
          : s[r - 1]
        : s[r];
    }
  (function (d, h, u) {
    const g = d.length;
    let p,
      f,
      m,
      b,
      x,
      v = Ee(d, 0);
    for (let y = 0; y < g - 1; ++y)
      (x = v),
        (v = Ee(d, y + 1)),
        x &&
          v &&
          (li(h[y], 0, Jh)
            ? (u[y] = u[y + 1] = 0)
            : ((p = u[y] / h[y]),
              (f = u[y + 1] / h[y]),
              (b = Math.pow(p, 2) + Math.pow(f, 2)),
              b <= 9 ||
                ((m = 3 / Math.sqrt(b)),
                (u[y] = p * m * h[y]),
                (u[y + 1] = f * m * h[y]))));
  })(i, s, o),
    (function (d, h, u = "x") {
      const g = Bo(u),
        p = d.length;
      let f,
        m,
        b,
        x = Ee(d, 0);
      for (let v = 0; v < p; ++v) {
        if (((m = b), (b = x), (x = Ee(d, v + 1)), !b)) continue;
        const y = b[u],
          _ = b[g];
        m &&
          ((f = (y - m[u]) / 3),
          (b[`cp1${u}`] = y - f),
          (b[`cp1${g}`] = _ - f * h[v])),
          x &&
            ((f = (x[u] - y) / 3),
            (b[`cp2${u}`] = y + f),
            (b[`cp2${g}`] = _ + f * h[v]));
      }
    })(i, o, t);
}
function Ii(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function ed(i, t, e, n, s) {
  let o, r, a, l;
  if (
    (t.spanGaps && (i = i.filter((c) => !c.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    td(i, s);
  else {
    let c = n ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      (a = i[o]),
        (l = Qh(c, a, i[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  t.capBezierPoints &&
    (function (c, d) {
      let h,
        u,
        g,
        p,
        f,
        m = te(c[0], d);
      for (h = 0, u = c.length; h < u; ++h)
        (f = p),
          (p = m),
          (m = h < u - 1 && te(c[h + 1], d)),
          p &&
            ((g = c[h]),
            f &&
              ((g.cp1x = Ii(g.cp1x, d.left, d.right)),
              (g.cp1y = Ii(g.cp1y, d.top, d.bottom))),
            m &&
              ((g.cp2x = Ii(g.cp2x, d.left, d.right)),
              (g.cp2y = Ii(g.cp2y, d.top, d.bottom))));
    })(i, e);
}
function Ps() {
  return typeof window != "undefined" && typeof document != "undefined";
}
function Os(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Ri(i, t, e) {
  let n;
  return (
    typeof i == "string"
      ? ((n = parseInt(i, 10)),
        i.indexOf("%") !== -1 && (n = (n / 100) * t.parentNode[e]))
      : (n = i),
    n
  );
}
const nn = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null),
  id = ["top", "right", "bottom", "left"];
function xe(i, t, e) {
  const n = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = id[s];
    n[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
}
const nd = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function me(i, t) {
  if ("native" in i) return i;
  const { canvas: e, currentDevicePixelRatio: n } = t,
    s = nn(e),
    o = s.boxSizing === "border-box",
    r = xe(s, "padding"),
    a = xe(s, "border", "width"),
    {
      x: l,
      y: c,
      box: d,
    } = (function (f, m) {
      const b = f.touches,
        x = b && b.length ? b[0] : f,
        { offsetX: v, offsetY: y } = x;
      let _,
        w,
        M = !1;
      if (nd(v, y, f.target)) (_ = v), (w = y);
      else {
        const k = m.getBoundingClientRect();
        (_ = x.clientX - k.left), (w = x.clientY - k.top), (M = !0);
      }
      return { x: _, y: w, box: M };
    })(i, e),
    h = r.left + (d && a.left),
    u = r.top + (d && a.top);
  let { width: g, height: p } = t;
  return (
    o && ((g -= r.width + a.width), (p -= r.height + a.height)),
    {
      x: Math.round((((l - h) / g) * e.width) / n),
      y: Math.round((((c - u) / p) * e.height) / n),
    }
  );
}
const Fi = (i) => Math.round(10 * i) / 10;
function sd(i, t, e, n) {
  const s = nn(i),
    o = xe(s, "margin"),
    r = Ri(s.maxWidth, i, "clientWidth") || Ei,
    a = Ri(s.maxHeight, i, "clientHeight") || Ei,
    l = (function (h, u, g) {
      let p, f;
      if (u === void 0 || g === void 0) {
        const m = h && Os(h);
        if (m) {
          const b = m.getBoundingClientRect(),
            x = nn(m),
            v = xe(x, "border", "width"),
            y = xe(x, "padding");
          (u = b.width - y.width - v.width),
            (g = b.height - y.height - v.height),
            (p = Ri(x.maxWidth, m, "clientWidth")),
            (f = Ri(x.maxHeight, m, "clientHeight"));
        } else (u = h.clientWidth), (g = h.clientHeight);
      }
      return { width: u, height: g, maxWidth: p || Ei, maxHeight: f || Ei };
    })(i, t, e);
  let { width: c, height: d } = l;
  if (s.boxSizing === "content-box") {
    const h = xe(s, "border", "width"),
      u = xe(s, "padding");
    (c -= u.width + h.width), (d -= u.height + h.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (d = Math.max(0, n ? c / n : d - o.height)),
    (c = Fi(Math.min(c, r, l.maxWidth))),
    (d = Fi(Math.min(d, a, l.maxHeight))),
    c && !d && (d = Fi(c / 2)),
    (t !== void 0 || e !== void 0) &&
      n &&
      l.height &&
      d > l.height &&
      ((d = l.height), (c = Fi(Math.floor(d * n)))),
    { width: c, height: d }
  );
}
function Ko(i, t, e) {
  const n = t || 1,
    s = Math.floor(i.height * n),
    o = Math.floor(i.width * n);
  (i.height = Math.floor(i.height)), (i.width = Math.floor(i.width));
  const r = i.canvas;
  return (
    r.style &&
      (e || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${i.height}px`), (r.style.width = `${i.width}px`)),
    (i.currentDevicePixelRatio !== n || r.height !== s || r.width !== o) &&
      ((i.currentDevicePixelRatio = n),
      (r.height = s),
      (r.width = o),
      i.ctx.setTransform(n, 0, 0, n, 0, 0),
      !0)
  );
}
const od = (function () {
  let i = !1;
  try {
    const t = {
      get passive() {
        return (i = !0), !1;
      },
    };
    Ps() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch (t) {}
  return i;
})();
function Vo(i, t) {
  const e = (function (s, o) {
      return nn(s).getPropertyValue(o);
    })(i, t),
    n = e && e.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function be(i, t, e, n) {
  return { x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) };
}
function rd(i, t, e, n) {
  return {
    x: i.x + e * (t.x - i.x),
    y:
      n === "middle"
        ? e < 0.5
          ? i.y
          : t.y
        : n === "after"
        ? e < 1
          ? i.y
          : t.y
        : e > 0
        ? t.y
        : i.y,
  };
}
function ad(i, t, e, n) {
  const s = { x: i.cp2x, y: i.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    r = be(i, s, e),
    a = be(s, o, e),
    l = be(o, t, e),
    c = be(r, a, e),
    d = be(a, l, e);
  return be(c, d, e);
}
function ze(i, t, e) {
  return i
    ? (function (n, s) {
        return {
          x: (o) => n + n + s - o,
          setWidth(o) {
            s = o;
          },
          textAlign: (o) =>
            o === "center" ? o : o === "right" ? "left" : "right",
          xPlus: (o, r) => o - r,
          leftForLtr: (o, r) => o - r,
        };
      })(t, e)
    : {
        x: (n) => n,
        setWidth(n) {},
        textAlign: (n) => n,
        xPlus: (n, s) => n + s,
        leftForLtr: (n, s) => n,
      };
}
function Ha(i, t) {
  let e, n;
  (t !== "ltr" && t !== "rtl") ||
    ((e = i.canvas.style),
    (n = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")]),
    e.setProperty("direction", t, "important"),
    (i.prevTextDirection = n));
}
function $a(i, t) {
  t !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty("direction", t[0], t[1]));
}
function No(i) {
  return i === "angle"
    ? { between: xi, compare: Rh, normalize: At }
    : { between: Jt, compare: (t, e) => t - e, normalize: (t) => t };
}
function Wo({ start: i, end: t, count: e, loop: n, style: s }) {
  return {
    start: i % e,
    end: t % e,
    loop: n && (t - i + 1) % e == 0,
    style: s,
  };
}
function Ua(i, t, e) {
  if (!e) return [i];
  const { property: n, start: s, end: o } = e,
    r = t.length,
    { compare: a, between: l, normalize: c } = No(n),
    {
      start: d,
      end: h,
      loop: u,
      style: g,
    } = (function (w, M, k) {
      const { property: C, start: S, end: O } = k,
        { between: E, normalize: L } = No(C),
        A = M.length;
      let T,
        F,
        { start: B, end: z, loop: q } = w;
      if (q) {
        for (
          B += A, z += A, T = 0, F = A;
          T < F && E(L(M[B % A][C]), S, O);
          ++T
        )
          B--, z--;
        (B %= A), (z %= A);
      }
      return z < B && (z += A), { start: B, end: z, loop: q, style: w.style };
    })(i, t, e),
    p = [];
  let f,
    m,
    b,
    x = !1,
    v = null;
  const y = () => x || (l(s, b, f) && a(s, b) !== 0),
    _ = () => !x || a(o, f) === 0 || l(o, b, f);
  for (let w = d, M = d; w <= h; ++w)
    (m = t[w % r]),
      m.skip ||
        ((f = c(m[n])),
        f !== b &&
          ((x = l(f, s, o)),
          v === null && y() && (v = a(f, s) === 0 ? w : M),
          v !== null &&
            _() &&
            (p.push(Wo({ start: v, end: w, loop: u, count: r, style: g })),
            (v = null)),
          (M = w),
          (b = f)));
  return (
    v !== null && p.push(Wo({ start: v, end: h, loop: u, count: r, style: g })),
    p
  );
}
function Ya(i, t) {
  const e = [],
    n = i.segments;
  for (let s = 0; s < n.length; s++) {
    const o = Ua(n[s], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function ld(i, t, e, n) {
  return n && n.setContext && e
    ? (function (s, o, r, a) {
        const l = s._chart.getContext(),
          c = jo(s.options),
          {
            _datasetIndex: d,
            options: { spanGaps: h },
          } = s,
          u = r.length,
          g = [];
        let p = c,
          f = o[0].start,
          m = f;
        function b(x, v, y, _) {
          const w = h ? -1 : 1;
          if (x !== v) {
            for (x += u; r[x % u].skip; ) x -= w;
            for (; r[v % u].skip; ) v += w;
            x % u != v % u &&
              (g.push({ start: x % u, end: v % u, loop: y, style: _ }),
              (p = _),
              (f = v % u));
          }
        }
        for (const x of o) {
          f = h ? f : x.start;
          let v,
            y = r[f % u];
          for (m = f + 1; m <= x.end; m++) {
            const _ = r[m % u];
            (v = jo(
              a.setContext(
                he(l, {
                  type: "segment",
                  p0: y,
                  p1: _,
                  p0DataIndex: (m - 1) % u,
                  p1DataIndex: m % u,
                  datasetIndex: d,
                })
              )
            )),
              cd(v, p) && b(f, m - 1, x.loop, p),
              (y = _),
              (p = v);
          }
          f < m - 1 && b(f, m - 1, x.loop, p);
        }
        return g;
      })(i, t, e, n)
    : t;
}
function jo(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function cd(i, t) {
  if (!t) return !1;
  const e = [],
    n = function (s, o) {
      return Ss(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
    };
  return JSON.stringify(i, n) !== JSON.stringify(t, n);
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class hd {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, n, s) {
    const o = e.listeners[s],
      r = e.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: e.initial,
        numSteps: r,
        currentStep: Math.min(n - e.start, r),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = La.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length) return;
      const o = n.items;
      let r,
        a = o.length - 1,
        l = !1;
      for (; a >= 0; --a)
        (r = o[a]),
          r._active
            ? (r._total > n.duration && (n.duration = r._total),
              r.tick(t),
              (l = !0))
            : ((o[a] = o[o.length - 1]), o.pop());
      l && (s.draw(), this._notify(s, n, t, "progress")),
        o.length ||
          ((n.running = !1),
          this._notify(s, n, t, "complete"),
          (n.initial = !1)),
        (e += o.length);
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let n = e.get(t);
    return (
      n ||
        ((n = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        e.set(t, n)),
      n
    );
  }
  listen(t, e, n) {
    this._getAnims(t).listeners[e].push(n);
  }
  add(t, e) {
    e && e.length && this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((n, s) => Math.max(n, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !!(e && e.running && e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const n = e.items;
    let s = n.length - 1;
    for (; s >= 0; --s) n[s].cancel();
    (e.items = []), this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Xt = new hd();
const Ho = "transparent",
  dd = {
    boolean: (i, t, e) => (e > 0.5 ? t : i),
    color(i, t, e) {
      const n = Eo(i || Ho),
        s = n.valid && Eo(t || Ho);
      return s && s.valid ? s.mix(n, e).hexString() : t;
    },
    number: (i, t, e) => i + (t - i) * e,
  };
class ud {
  constructor(t, e, n, s) {
    const o = e[n];
    s = ei([t.to, s, o, t.from]);
    const r = ei([t.from, o, s]);
    (this._active = !0),
      (this._fn = t.fn || dd[t.type || typeof r]),
      (this._easing = ci[t.easing] || ci.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = n),
      (this._from = r),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = n - this._start,
        r = this._duration - o;
      (this._start = n),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = ei([t.to, e, s, t.from])),
        (this._from = ei([t.from, s, e]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      n = this._duration,
      s = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to;
    let l;
    if (((this._active = o !== a && (r || e < n)), !this._active))
      return (this._target[s] = a), void this._notify(!0);
    e < 0
      ? (this._target[s] = o)
      : ((l = (e / n) % 2),
        (l = r && l > 1 ? 2 - l : l),
        (l = this._easing(Math.min(1, Math.max(0, l)))),
        (this._target[s] = this._fn(o, a, l)));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, n) => {
      t.push({ res: e, rej: n });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej",
      n = this._promises || [];
    for (let s = 0; s < n.length; s++) n[s][e]();
  }
}
class qa {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!N(t)) return;
    const e = Object.keys(st.animation),
      n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!N(o)) return;
      const r = {};
      for (const a of e) r[a] = o[a];
      ((tt(o.properties) && o.properties) || [s]).forEach((a) => {
        (a !== s && n.has(a)) || n.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const n = e.options,
      s = (function (r, a) {
        if (!a) return;
        let l = r.options;
        return l
          ? (l.$shared &&
              (r.options = l =
                Object.assign({}, l, { $shared: !1, $animations: {} })),
            l)
          : void (r.options = a);
      })(t, n);
    if (!s) return [];
    const o = this._createAnimations(s, n);
    return (
      n.$shared &&
        (function (r, a) {
          const l = [],
            c = Object.keys(a);
          for (let d = 0; d < c.length; d++) {
            const h = r[c[d]];
            h && h.active() && l.push(h.wait());
          }
          return Promise.all(l);
        })(t.options.$animations, n).then(
          () => {
            t.options = n;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, e) {
    const n = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(e),
      a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const d = e[c];
      let h = o[c];
      const u = n.get(c);
      if (h) {
        if (u && h.active()) {
          h.update(u, d, a);
          continue;
        }
        h.cancel();
      }
      u && u.duration
        ? ((o[c] = h = new ud(u, t, c, d)), s.push(h))
        : (t[c] = d);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) return void Object.assign(t, e);
    const n = this._createAnimations(t, e);
    return n.length ? (Xt.add(this._chart, n), !0) : void 0;
  }
}
function $o(i, t) {
  const e = (i && i.options) || {},
    n = e.reverse,
    s = e.min === void 0 ? t : 0,
    o = e.max === void 0 ? t : 0;
  return { start: n ? o : s, end: n ? s : o };
}
function Uo(i, t) {
  const e = [],
    n = i._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s) e.push(n[s].index);
  return e;
}
function Yo(i, t, e, n = {}) {
  const s = i.keys,
    o = n.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (((l = +s[r]), l === e)) {
        if (n.all) continue;
        break;
      }
      (c = i.values[l]), ot(c) && (o || t === 0 || Wt(t) === Wt(c)) && (t += c);
    }
    return t;
  }
}
function qo(i, t) {
  const e = i && i.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function fd(i, t, e) {
  const n = i[t] || (i[t] = {});
  return n[e] || (n[e] = {});
}
function Xo(i, t, e, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = i[s.index];
    if ((e && o > 0) || (!e && o < 0)) return s.index;
  }
  return null;
}
function Go(i, t) {
  const { chart: e, _cachedMeta: n } = i,
    s = e._stacks || (e._stacks = {}),
    { iScale: o, vScale: r, index: a } = n,
    l = o.axis,
    c = r.axis,
    d = (function (g, p, f) {
      return `${g.id}.${p.id}.${f.stack || f.type}`;
    })(o, r, n),
    h = t.length;
  let u;
  for (let g = 0; g < h; ++g) {
    const p = t[g],
      { [l]: f, [c]: m } = p;
    (u = (p._stacks || (p._stacks = {}))[c] = fd(s, d, f)),
      (u[a] = m),
      (u._top = Xo(u, r, !0, n.type)),
      (u._bottom = Xo(u, r, !1, n.type)),
      ((u._visualValues || (u._visualValues = {}))[a] = m);
  }
}
function wn(i, t) {
  const e = i.scales;
  return Object.keys(e)
    .filter((n) => e[n].axis === t)
    .shift();
}
function He(i, t) {
  const e = i.controller.index,
    n = i.vScale && i.vScale.axis;
  if (n) {
    t = t || i._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][e] === void 0) return;
      delete o[n][e],
        o[n]._visualValues !== void 0 &&
          o[n]._visualValues[e] !== void 0 &&
          delete o[n]._visualValues[e];
    }
  }
}
const Mn = (i) => i === "reset" || i === "none",
  Zo = (i, t) => (t ? i : Object.assign({}, i));
class Ft {
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = qo(t.vScale, t)),
      this.addElements(),
      this.options.fill && this.chart.isPluginEnabled("filler");
  }
  updateIndex(t) {
    this.index !== t && He(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      n = this.getDataset(),
      s = (h, u, g, p) => (h === "x" ? u : h === "r" ? p : g),
      o = (e.xAxisID = V(n.xAxisID, wn(t, "x"))),
      r = (e.yAxisID = V(n.yAxisID, wn(t, "y"))),
      a = (e.rAxisID = V(n.rAxisID, wn(t, "r"))),
      l = e.indexAxis,
      c = (e.iAxisID = s(l, o, r, a)),
      d = (e.vAxisID = s(l, r, o, a));
    (e.xScale = this.getScaleForId(o)),
      (e.yScale = this.getScaleForId(r)),
      (e.rScale = this.getScaleForId(a)),
      (e.iScale = this.getScaleForId(c)),
      (e.vScale = this.getScaleForId(d));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Oo(this._data, this), t._stacked && He(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      n = this._data;
    if (N(e)) {
      const r = this._cachedMeta;
      this._data = (function (a, l) {
        const { iScale: c, vScale: d } = l,
          h = c.axis === "x" ? "x" : "y",
          u = d.axis === "x" ? "x" : "y",
          g = Object.keys(a),
          p = new Array(g.length);
        let f, m, b;
        for (f = 0, m = g.length; f < m; ++f)
          (b = g[f]), (p[f] = { [h]: b, [u]: a[b] });
        return p;
      })(e, r);
    } else if (n !== e) {
      if (n) {
        Oo(n, this);
        const r = this._cachedMeta;
        He(r), (r._parsed = []);
      }
      e &&
        Object.isExtensible(e) &&
        ((o = this),
        (s = e)._chartjs
          ? s._chartjs.listeners.push(o)
          : (Object.defineProperty(s, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [o] },
            }),
            Ta.forEach((r) => {
              const a = "_onData" + _s(r),
                l = s[r];
              Object.defineProperty(s, r, {
                configurable: !0,
                enumerable: !1,
                value(...c) {
                  const d = l.apply(this, c);
                  return (
                    s._chartjs.listeners.forEach((h) => {
                      typeof h[a] == "function" && h[a](...c);
                    }),
                    d
                  );
                },
              });
            }))),
        (this._syncList = []),
        (this._data = e);
    }
    var s, o;
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    (e._stacked = qo(e.vScale, e)),
      e.stack !== n.stack && ((s = !0), He(e), (e.stack = n.stack)),
      this._resyncElements(t),
      (s || o !== e._stacked) && Go(this, e._parsed);
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      n = t.getOptionScopes(this.getDataset(), e, !0);
    (this.options = t.createResolver(n, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, e) {
    const { _cachedMeta: n, _data: s } = this,
      { iScale: o, _stacked: r } = n,
      a = o.axis;
    let l,
      c,
      d,
      h = (t === 0 && e === s.length) || n._sorted,
      u = t > 0 && n._parsed[t - 1];
    if (this._parsing === !1) (n._parsed = s), (n._sorted = !0), (d = s);
    else {
      d = tt(s[t])
        ? this.parseArrayData(n, s, t, e)
        : N(s[t])
        ? this.parseObjectData(n, s, t, e)
        : this.parsePrimitiveData(n, s, t, e);
      const g = () => c[a] === null || (u && c[a] < u[a]);
      for (l = 0; l < e; ++l)
        (n._parsed[l + t] = c = d[l]), h && (g() && (h = !1), (u = c));
      n._sorted = h;
    }
    r && Go(this, d);
  }
  parsePrimitiveData(t, e, n, s) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      l = r.axis,
      c = o.getLabels(),
      d = o === r,
      h = new Array(s);
    let u, g, p;
    for (u = 0, g = s; u < g; ++u)
      (p = u + n),
        (h[u] = { [a]: d || o.parse(c[p], p), [l]: r.parse(e[p], p) });
    return h;
  }
  parseArrayData(t, e, n, s) {
    const { xScale: o, yScale: r } = t,
      a = new Array(s);
    let l, c, d, h;
    for (l = 0, c = s; l < c; ++l)
      (d = l + n),
        (h = e[d]),
        (a[l] = { x: o.parse(h[0], d), y: r.parse(h[1], d) });
    return a;
  }
  parseObjectData(t, e, n, s) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(s);
    let d, h, u, g;
    for (d = 0, h = s; d < h; ++d)
      (u = d + n),
        (g = e[u]),
        (c[d] = { x: o.parse(le(g, a), u), y: r.parse(le(g, l), u) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, n) {
    const s = this.chart,
      o = this._cachedMeta,
      r = e[t.axis];
    return Yo(
      { keys: Uo(s, !0), values: e._stacks[t.axis]._visualValues },
      r,
      o.index,
      { mode: n }
    );
  }
  updateRangeFromParsed(t, e, n, s) {
    const o = n[e.axis];
    let r = o === null ? NaN : o;
    const a = s && n._stacks[e.axis];
    s && a && ((s.values = a), (r = Yo(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, e) {
    const n = this._cachedMeta,
      s = n._parsed,
      o = n._sorted && t === n.iScale,
      r = s.length,
      a = this._getOtherScale(t),
      l = ((f, m, b) =>
        f && !m.hidden && m._stacked && { keys: Uo(b, !0), values: null })(
        e,
        n,
        this.chart
      ),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: d, max: h } = (function (f) {
        const {
          min: m,
          max: b,
          minDefined: x,
          maxDefined: v,
        } = f.getUserBounds();
        return {
          min: x ? m : Number.NEGATIVE_INFINITY,
          max: v ? b : Number.POSITIVE_INFINITY,
        };
      })(a);
    let u, g;
    function p() {
      g = s[u];
      const f = g[a.axis];
      return !ot(g[t.axis]) || d > f || h < f;
    }
    for (
      u = 0;
      u < r && (p() || (this.updateRangeFromParsed(c, t, g, l), !o));
      ++u
    );
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!p()) {
          this.updateRangeFromParsed(c, t, g, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      n = [];
    let s, o, r;
    for (s = 0, o = e.length; s < o; ++s)
      (r = e[s][t.axis]), ot(r) && n.push(r);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = e.iScale,
      s = e.vScale,
      o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : "",
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"),
      (e._clip = (function (n) {
        let s, o, r, a;
        return (
          N(n)
            ? ((s = n.top), (o = n.right), (r = n.bottom), (a = n.left))
            : (s = o = r = a = n),
          { top: s, right: o, bottom: r, left: a, disabled: n === !1 }
        );
      })(
        V(
          this.options.clip,
          (function (n, s, o) {
            if (o === !1) return !1;
            const r = $o(n, o),
              a = $o(s, o);
            return { top: a.end, right: r.end, bottom: a.start, left: r.start };
          })(e.xScale, e.yScale, this.getMaxOverflow())
        )
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      n = this._cachedMeta,
      s = n.data || [],
      o = e.chartArea,
      r = [],
      a = this._drawStart || 0,
      l = this._drawCount || s.length - a,
      c = this.options.drawActiveElementsOnTop;
    let d;
    for (n.dataset && n.dataset.draw(t, o, a, l), d = a; d < a + l; ++d) {
      const h = s[d];
      h.hidden || (h.active && c ? r.push(h) : h.draw(t, o));
    }
    for (d = 0; d < r.length; ++d) r[d].draw(t, o);
  }
  getStyle(t, e) {
    const n = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(n)
      : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, e, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      (o =
        r.$context ||
        (r.$context = (function (a, l, c) {
          return he(a, {
            active: !1,
            dataIndex: l,
            parsed: void 0,
            raw: void 0,
            element: c,
            index: l,
            mode: "default",
            type: "data",
          });
        })(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o =
        this.$context ||
        (this.$context = (function (r, a) {
          return he(r, {
            active: !1,
            dataset: void 0,
            datasetIndex: a,
            index: a,
            mode: "default",
            type: "dataset",
          });
        })(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!e), (o.mode = n), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", n) {
    const s = e === "active",
      o = this._cachedDataOpts,
      r = t + "-" + e,
      a = o[r],
      l = this.enableOptionSharing && bi(n);
    if (a) return Zo(a, l);
    const c = this.chart.config,
      d = c.datasetElementScopeKeys(this._type, t),
      h = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      u = c.getOptionScopes(this.getDataset(), d),
      g = Object.keys(st.elements[t]),
      p = c.resolveNamedOptions(u, g, () => this.getContext(n, s, e), h);
    return p.$shared && ((p.$shared = l), (o[r] = Object.freeze(Zo(p, l)))), p;
  }
  _resolveAnimations(t, e, n) {
    const s = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${e}`,
      a = o[r];
    if (a) return a;
    let l;
    if (s.options.animation !== !1) {
      const d = this.chart.config,
        h = d.datasetAnimationScopeKeys(this._type, e),
        u = d.getOptionScopes(this.getDataset(), h);
      l = d.createResolver(u, this.getContext(t, n, e));
    }
    const c = new qa(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || Mn(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const n = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      o = this.getSharedOptions(n),
      r = this.includeOptions(e, o) || o !== s;
    return (
      this.updateSharedOptions(o, e, n), { sharedOptions: o, includeOptions: r }
    );
  }
  updateElement(t, e, n, s) {
    Mn(s) ? Object.assign(t, n) : this._resolveAnimations(e, s).update(t, n);
  }
  updateSharedOptions(t, e, n) {
    t && !Mn(e) && this._resolveAnimations(void 0, e).update(t, n);
  }
  _setStyle(t, e, n, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, n, s).update(t, {
      options: (!s && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data,
      n = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const s = n.length,
      o = e.length,
      r = Math.min(o, s);
    r && this.parse(0, r),
      o > s
        ? this._insertElements(s, o - s, t)
        : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, n = !0) {
    const s = this._cachedMeta,
      o = s.data,
      r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--) c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType();
    this._parsing && l(s._parsed),
      this.parse(t, e),
      n && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, n, s) {}
  _removeElements(t, e) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, e);
      n._stacked && He(n, s);
    }
    n.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, n, s] = t;
      this[e](n, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(["_removeElements", t, e]);
    const n = arguments.length - 2;
    n && this._sync(["_insertElements", t, n]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
P(Ft, "defaults", {}),
  P(Ft, "datasetElementType", null),
  P(Ft, "dataElementType", null);
function gd(i) {
  const t = i.iScale,
    e = (function (c, d) {
      if (!c._cache.$bar) {
        const h = c.getMatchingVisibleMetas(d);
        let u = [];
        for (let g = 0, p = h.length; g < p; g++)
          u = u.concat(h[g].controller.getAllParsedValues(c));
        c._cache.$bar = Ea(u.sort((g, p) => g - p));
      }
      return c._cache.$bar;
    })(t, i.type);
  let n,
    s,
    o,
    r,
    a = t._length;
  const l = () => {
    o !== 32767 &&
      o !== -32768 &&
      (bi(r) && (a = Math.min(a, Math.abs(o - r) || a)), (r = o));
  };
  for (n = 0, s = e.length; n < s; ++n) (o = t.getPixelForValue(e[n])), l();
  for (r = void 0, n = 0, s = t.ticks.length; n < s; ++n)
    (o = t.getPixelForTick(n)), l();
  return a;
}
function Xa(i, t, e, n) {
  return (
    tt(i)
      ? (function (s, o, r, a) {
          const l = r.parse(s[0], a),
            c = r.parse(s[1], a),
            d = Math.min(l, c),
            h = Math.max(l, c);
          let u = d,
            g = h;
          Math.abs(d) > Math.abs(h) && ((u = h), (g = d)),
            (o[r.axis] = g),
            (o._custom = {
              barStart: u,
              barEnd: g,
              start: l,
              end: c,
              min: d,
              max: h,
            });
        })(i, t, e, n)
      : (t[e.axis] = e.parse(i, n)),
    t
  );
}
function Jo(i, t, e, n) {
  const s = i.iScale,
    o = i.vScale,
    r = s.getLabels(),
    a = s === o,
    l = [];
  let c, d, h, u;
  for (c = e, d = e + n; c < d; ++c)
    (u = t[c]),
      (h = {}),
      (h[s.axis] = a || s.parse(r[c], c)),
      l.push(Xa(u, h, o, c));
  return l;
}
function kn(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function pd(i, t, e, n) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) return void (i.borderSkipped = o);
  if (s === !0)
    return void (i.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0,
    });
  const {
    start: r,
    end: a,
    reverse: l,
    top: c,
    bottom: d,
  } = (function (h) {
    let u, g, p, f, m;
    return (
      h.horizontal
        ? ((u = h.base > h.x), (g = "left"), (p = "right"))
        : ((u = h.base < h.y), (g = "bottom"), (p = "top")),
      u ? ((f = "end"), (m = "start")) : ((f = "start"), (m = "end")),
      { start: g, end: p, reverse: u, top: f, bottom: m }
    );
  })(i);
  s === "middle" &&
    e &&
    ((i.enableBorderRadius = !0),
    (e._top || 0) === n
      ? (s = c)
      : (e._bottom || 0) === n
      ? (s = d)
      : ((o[Qo(d, r, a, l)] = !0), (s = c))),
    (o[Qo(s, r, a, l)] = !0),
    (i.borderSkipped = o);
}
function Qo(i, t, e, n) {
  var s, o, r;
  return (
    n
      ? ((r = e),
        (i = tr((i = (s = i) === (o = t) ? r : s === r ? o : s), e, t)))
      : (i = tr(i, t, e)),
    i
  );
}
function tr(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function md(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? (e === 1 ? 0.33 : 0) : t;
}
class ye extends Ft {
  constructor(t, e) {
    super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, e) {
    const n = this.getDataset().data,
      s = this._cachedMeta;
    if (this._parsing === !1) s._parsed = n;
    else {
      let o,
        r,
        a = (l) => +n[l];
      if (N(n[t])) {
        const { key: l = "value" } = this._parsing;
        a = (c) => +le(n[c], l);
      }
      for (o = t, r = t + e; o < r; ++o) s._parsed[o] = a(o);
    }
  }
  _getRotation() {
    return Rt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Rt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = et,
      e = -et;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (
        this.chart.isDatasetVisible(n) &&
        this.chart.getDatasetMeta(n).type === this._type
      ) {
        const s = this.chart.getDatasetMeta(n).controller,
          o = s._getRotation(),
          r = s._getCircumference();
        (t = Math.min(t, o)), (e = Math.max(e, o + r));
      }
    return { rotation: t, circumference: e - t };
  }
  update(t) {
    const e = this.chart,
      { chartArea: n } = e,
      s = this._cachedMeta,
      o = s.data,
      r =
        this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      a = Math.max((Math.min(n.width, n.height) - r) / 2, 0),
      l = Math.min(
        ((c = this.options.cutout),
        (d = a),
        typeof c == "string" && c.endsWith("%") ? parseFloat(c) / 100 : +c / d),
        1
      );
    var c, d;
    const h = this._getRingWeight(this.index),
      { circumference: u, rotation: g } = this._getRotationExtents(),
      {
        ratioX: p,
        ratioY: f,
        offsetX: m,
        offsetY: b,
      } = (function (M, k, C) {
        let S = 1,
          O = 1,
          E = 0,
          L = 0;
        if (k < et) {
          const A = M,
            T = A + k,
            F = Math.cos(A),
            B = Math.sin(A),
            z = Math.cos(T),
            q = Math.sin(T),
            at = (pt, Ht, $t) =>
              xi(pt, A, T, !0) ? 1 : Math.max(Ht, Ht * C, $t, $t * C),
            j = (pt, Ht, $t) =>
              xi(pt, A, T, !0) ? -1 : Math.min(Ht, Ht * C, $t, $t * C),
            nt = at(0, F, z),
            ft = at(rt, B, q),
            gt = j(it, F, z),
            Tt = j(it + rt, B, q);
          (S = (nt - gt) / 2),
            (O = (ft - Tt) / 2),
            (E = -(nt + gt) / 2),
            (L = -(ft + Tt) / 2);
        }
        return { ratioX: S, ratioY: O, offsetX: E, offsetY: L };
      })(g, u, l),
      x = (n.width - r) / p,
      v = (n.height - r) / f,
      y = Math.max(Math.min(x, v) / 2, 0),
      _ = Ca(this.options.radius, y),
      w = (_ - Math.max(_ * l, 0)) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = m * _),
      (this.offsetY = b * _),
      (s.total = this.calculateTotal()),
      (this.outerRadius = _ - w * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - w * h, 0)),
      this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const n = this.options,
      s = this._cachedMeta,
      o = this._getCircumference();
    return (e && n.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      s._parsed[t] === null ||
      s.data[t].hidden
      ? 0
      : this.calculateCircumference((s._parsed[t] * o) / et);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      r = this.chart,
      a = r.chartArea,
      l = r.options.animation,
      c = (a.left + a.right) / 2,
      d = (a.top + a.bottom) / 2,
      h = o && l.animateScale,
      u = h ? 0 : this.innerRadius,
      g = h ? 0 : this.outerRadius,
      { sharedOptions: p, includeOptions: f } = this._getSharedOptions(e, s);
    let m,
      b = this._getRotation();
    for (m = 0; m < e; ++m) b += this._circumference(m, o);
    for (m = e; m < e + n; ++m) {
      const x = this._circumference(m, o),
        v = t[m],
        y = {
          x: c + this.offsetX,
          y: d + this.offsetY,
          startAngle: b,
          endAngle: b + x,
          circumference: x,
          outerRadius: g,
          innerRadius: u,
        };
      f &&
        (y.options =
          p || this.resolveDataElementOptions(m, v.active ? "active" : s)),
        (b += x),
        this.updateElement(v, m, y, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let n,
      s = 0;
    for (n = 0; n < e.length; n++) {
      const o = t._parsed[n];
      o === null ||
        isNaN(o) ||
        !this.chart.getDataVisibility(n) ||
        e[n].hidden ||
        (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? et * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart,
      s = n.data.labels || [],
      o = Di(e._parsed[t], n.options.locale);
    return { label: s[t] || "", value: o };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const n = this.chart;
    let s, o, r, a, l;
    if (!t) {
      for (s = 0, o = n.data.datasets.length; s < o; ++s)
        if (n.isDatasetVisible(s)) {
          (r = n.getDatasetMeta(s)), (t = r.data), (a = r.controller);
          break;
        }
    }
    if (!t) return 0;
    for (s = 0, o = t.length; s < o; ++s)
      (l = a.resolveDataElementOptions(s)),
        l.borderAlign !== "inner" &&
          (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let n = 0, s = t.length; n < s; ++n) {
      const o = this.resolveDataElementOptions(n);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let n = 0; n < t; ++n)
      this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(V(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
P(ye, "id", "doughnut"),
  P(ye, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  P(ye, "descriptors", {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) =>
      t !== "spacing" &&
      !t.startsWith("borderDash") &&
      !t.startsWith("hoverBorderDash"),
  }),
  P(ye, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: n, color: s },
              } = t.legend.options;
              return e.labels.map((o, r) => {
                const a = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: a.backgroundColor,
                  strokeStyle: a.borderColor,
                  fontColor: s,
                  lineWidth: a.borderWidth,
                  pointStyle: n,
                  hidden: !t.getDataVisibility(r),
                  index: r,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, n) {
          n.chart.toggleDataVisibility(e.index), n.chart.update();
        },
      },
    },
  });
class Be extends Ft {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: n, data: s = [], _dataset: o } = e,
      r = this.chart._animationsDisabled;
    let { start: a, count: l } = Ra(e, s, r);
    (this._drawStart = a),
      (this._drawCount = l),
      Fa(e) && ((a = 0), (l = s.length)),
      (n._chart = this.chart),
      (n._datasetIndex = this.index),
      (n._decimated = !!o._decimated),
      (n.points = s);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(n, void 0, { animated: !r, options: c }, t),
      this.updateElements(s, a, l, t);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: d, includeOptions: h } = this._getSharedOptions(e, s),
      u = r.axis,
      g = a.axis,
      { spanGaps: p, segment: f } = this.options,
      m = Ne(p) ? p : Number.POSITIVE_INFINITY,
      b = this.chart._animationsDisabled || o || s === "none",
      x = e + n,
      v = t.length;
    let y = e > 0 && this.getParsed(e - 1);
    for (let _ = 0; _ < v; ++_) {
      const w = t[_],
        M = b ? w : {};
      if (_ < e || _ >= x) {
        M.skip = !0;
        continue;
      }
      const k = this.getParsed(_),
        C = W(k[g]),
        S = (M[u] = r.getPixelForValue(k[u], _)),
        O = (M[g] =
          o || C
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[g], _));
      (M.skip = isNaN(S) || isNaN(O) || C),
        (M.stop = _ > 0 && Math.abs(k[u] - y[u]) > m),
        f && ((M.parsed = k), (M.raw = c.data[_])),
        h &&
          (M.options =
            d || this.resolveDataElementOptions(_, w.active ? "active" : s)),
        b || this.updateElement(w, _, M, s),
        (y = k);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      n = (e.options && e.options.borderWidth) || 0,
      s = t.data || [];
    if (!s.length) return n;
    const o = s[0].size(this.resolveDataElementOptions(0)),
      r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(n, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
P(Be, "id", "line"),
  P(Be, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  P(Be, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
class di extends Ft {
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart,
      s = n.data.labels || [],
      o = Di(e._parsed[t].r, n.options.locale);
    return { label: s[t] || "", value: o };
  }
  parseObjectData(t, e, n, s) {
    return ja.bind(this)(t, e, n, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((n, s) => {
        const o = this.getParsed(s).r;
        !isNaN(o) &&
          this.chart.getDataVisibility(s) &&
          (o < e.min && (e.min = o), o > e.max && (e.max = o));
      }),
      e
    );
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      n = t.options,
      s = Math.min(e.right - e.left, e.bottom - e.top),
      o = Math.max(s / 2, 0),
      r =
        (o -
          Math.max(
            n.cutoutPercentage ? (o / 100) * n.cutoutPercentage : 1,
            0
          )) /
        t.getVisibleDatasetCount();
    (this.outerRadius = o - r * this.index),
      (this.innerRadius = this.outerRadius - r);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      r = this.chart,
      a = r.options.animation,
      l = this._cachedMeta.rScale,
      c = l.xCenter,
      d = l.yCenter,
      h = l.getIndexAngle(0) - 0.5 * it;
    let u,
      g = h;
    const p = 360 / this.countVisibleElements();
    for (u = 0; u < e; ++u) g += this._computeAngle(u, s, p);
    for (u = e; u < e + n; u++) {
      const f = t[u];
      let m = g,
        b = g + this._computeAngle(u, s, p),
        x = r.getDataVisibility(u)
          ? l.getDistanceFromCenterForValue(this.getParsed(u).r)
          : 0;
      (g = b), o && (a.animateScale && (x = 0), a.animateRotate && (m = b = h));
      const v = {
        x: c,
        y: d,
        innerRadius: 0,
        outerRadius: x,
        startAngle: m,
        endAngle: b,
        options: this.resolveDataElementOptions(u, f.active ? "active" : s),
      };
      this.updateElement(f, u, v, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return (
      t.data.forEach((n, s) => {
        !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++;
      }),
      e
    );
  }
  _computeAngle(t, e, n) {
    return this.chart.getDataVisibility(t)
      ? Rt(this.resolveDataElementOptions(t, e).angle || n)
      : 0;
  }
}
P(di, "id", "polarArea"),
  P(di, "defaults", {
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
        ],
      },
    },
    indexAxis: "r",
    startAngle: 0,
  }),
  P(di, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: n, color: s },
              } = t.legend.options;
              return e.labels.map((o, r) => {
                const a = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: a.backgroundColor,
                  strokeStyle: a.borderColor,
                  fontColor: s,
                  lineWidth: a.borderWidth,
                  pointStyle: n,
                  hidden: !t.getDataVisibility(r),
                  index: r,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, n) {
          n.chart.toggleDataVisibility(e.index), n.chart.update();
        },
      },
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  });
var Xe,
  Ge,
  Yi,
  Ze,
  Je,
  bd = Object.freeze({
    __proto__: null,
    BarController:
      ((Xe = class extends Ft {
        parsePrimitiveData(i, t, e, n) {
          return Jo(i, t, e, n);
        }
        parseArrayData(i, t, e, n) {
          return Jo(i, t, e, n);
        }
        parseObjectData(i, t, e, n) {
          const { iScale: s, vScale: o } = i,
            { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
            l = s.axis === "x" ? r : a,
            c = o.axis === "x" ? r : a,
            d = [];
          let h, u, g, p;
          for (h = e, u = e + n; h < u; ++h)
            (p = t[h]),
              (g = {}),
              (g[s.axis] = s.parse(le(p, l), h)),
              d.push(Xa(le(p, c), g, o, h));
          return d;
        }
        updateRangeFromParsed(i, t, e, n) {
          super.updateRangeFromParsed(i, t, e, n);
          const s = e._custom;
          s &&
            t === this._cachedMeta.vScale &&
            ((i.min = Math.min(i.min, s.min)),
            (i.max = Math.max(i.max, s.max)));
        }
        getMaxOverflow() {
          return 0;
        }
        getLabelAndValue(i) {
          const t = this._cachedMeta,
            { iScale: e, vScale: n } = t,
            s = this.getParsed(i),
            o = s._custom,
            r = kn(o)
              ? "[" + o.start + ", " + o.end + "]"
              : "" + n.getLabelForValue(s[n.axis]);
          return { label: "" + e.getLabelForValue(s[e.axis]), value: r };
        }
        initialize() {
          (this.enableOptionSharing = !0),
            super.initialize(),
            (this._cachedMeta.stack = this.getDataset().stack);
        }
        update(i) {
          const t = this._cachedMeta;
          this.updateElements(t.data, 0, t.data.length, i);
        }
        updateElements(i, t, e, n) {
          const s = n === "reset",
            {
              index: o,
              _cachedMeta: { vScale: r },
            } = this,
            a = r.getBasePixel(),
            l = r.isHorizontal(),
            c = this._getRuler(),
            { sharedOptions: d, includeOptions: h } = this._getSharedOptions(
              t,
              n
            );
          for (let u = t; u < t + e; u++) {
            const g = this.getParsed(u),
              p =
                s || W(g[r.axis])
                  ? { base: a, head: a }
                  : this._calculateBarValuePixels(u),
              f = this._calculateBarIndexPixels(u, c),
              m = (g._stacks || {})[r.axis],
              b = {
                horizontal: l,
                base: p.base,
                enableBorderRadius:
                  !m || kn(g._custom) || o === m._top || o === m._bottom,
                x: l ? p.head : f.center,
                y: l ? f.center : p.head,
                height: l ? f.size : Math.abs(p.size),
                width: l ? Math.abs(p.size) : f.size,
              };
            h &&
              (b.options =
                d ||
                this.resolveDataElementOptions(u, i[u].active ? "active" : n));
            const x = b.options || i[u].options;
            pd(b, x, m, o),
              md(b, x, c.ratio),
              this.updateElement(i[u], u, b, n);
          }
        }
        _getStacks(i, t) {
          const { iScale: e } = this._cachedMeta,
            n = e
              .getMatchingVisibleMetas(this._type)
              .filter((a) => a.controller.options.grouped),
            s = e.options.stacked,
            o = [],
            r = (a) => {
              const l = a.controller.getParsed(t),
                c = l && l[a.vScale.axis];
              if (W(c) || isNaN(c)) return !0;
            };
          for (const a of n)
            if (
              (t === void 0 || !r(a)) &&
              ((s === !1 ||
                o.indexOf(a.stack) === -1 ||
                (s === void 0 && a.stack === void 0)) &&
                o.push(a.stack),
              a.index === i)
            )
              break;
          return o.length || o.push(void 0), o;
        }
        _getStackCount(i) {
          return this._getStacks(void 0, i).length;
        }
        _getStackIndex(i, t, e) {
          const n = this._getStacks(i, e),
            s = t !== void 0 ? n.indexOf(t) : -1;
          return s === -1 ? n.length - 1 : s;
        }
        _getRuler() {
          const i = this.options,
            t = this._cachedMeta,
            e = t.iScale,
            n = [];
          let s, o;
          for (s = 0, o = t.data.length; s < o; ++s)
            n.push(e.getPixelForValue(this.getParsed(s)[e.axis], s));
          const r = i.barThickness;
          return {
            min: r || gd(t),
            pixels: n,
            start: e._startPixel,
            end: e._endPixel,
            stackCount: this._getStackCount(),
            scale: e,
            grouped: i.grouped,
            ratio: r ? 1 : i.categoryPercentage * i.barPercentage,
          };
        }
        _calculateBarValuePixels(i) {
          const {
              _cachedMeta: { vScale: t, _stacked: e, index: n },
              options: { base: s, minBarLength: o },
            } = this,
            r = s || 0,
            a = this.getParsed(i),
            l = a._custom,
            c = kn(l);
          let d,
            h,
            u = a[t.axis],
            g = 0,
            p = e ? this.applyStack(t, a, e) : u;
          p !== u && ((g = p - u), (p = u)),
            c &&
              ((u = l.barStart),
              (p = l.barEnd - l.barStart),
              u !== 0 && Wt(u) !== Wt(l.barEnd) && (g = 0),
              (g += u));
          const f = W(s) || c ? g : s;
          let m = t.getPixelForValue(f);
          if (
            ((d = this.chart.getDataVisibility(i)
              ? t.getPixelForValue(g + p)
              : m),
            (h = d - m),
            Math.abs(h) < o)
          ) {
            (h =
              (function (_, w, M) {
                return _ !== 0
                  ? Wt(_)
                  : (w.isHorizontal() ? 1 : -1) * (w.min >= M ? 1 : -1);
              })(h, t, r) * o),
              u === r && (m -= h / 2);
            const b = t.getPixelForDecimal(0),
              x = t.getPixelForDecimal(1),
              v = Math.min(b, x),
              y = Math.max(b, x);
            (m = Math.max(Math.min(m, y), v)),
              (d = m + h),
              e &&
                !c &&
                (a._stacks[t.axis]._visualValues[n] =
                  t.getValueForPixel(d) - t.getValueForPixel(m));
          }
          if (m === t.getPixelForValue(r)) {
            const b = (Wt(h) * t.getLineWidthForValue(r)) / 2;
            (m += b), (h -= b);
          }
          return { size: h, base: m, head: d, center: d + h / 2 };
        }
        _calculateBarIndexPixels(i, t) {
          const e = t.scale,
            n = this.options,
            s = n.skipNull,
            o = V(n.maxBarThickness, 1 / 0);
          let r, a;
          if (t.grouped) {
            const l = s ? this._getStackCount(i) : t.stackCount,
              c =
                n.barThickness === "flex"
                  ? (function (h, u, g, p) {
                      const f = u.pixels,
                        m = f[h];
                      let b = h > 0 ? f[h - 1] : null,
                        x = h < f.length - 1 ? f[h + 1] : null;
                      const v = g.categoryPercentage;
                      b === null &&
                        (b = m - (x === null ? u.end - u.start : x - m)),
                        x === null && (x = m + m - b);
                      const y = m - ((m - Math.min(b, x)) / 2) * v;
                      return {
                        chunk: ((Math.abs(x - b) / 2) * v) / p,
                        ratio: g.barPercentage,
                        start: y,
                      };
                    })(i, t, n, l)
                  : (function (h, u, g, p) {
                      const f = g.barThickness;
                      let m, b;
                      return (
                        W(f)
                          ? ((m = u.min * g.categoryPercentage),
                            (b = g.barPercentage))
                          : ((m = f * p), (b = 1)),
                        { chunk: m / p, ratio: b, start: u.pixels[h] - m / 2 }
                      );
                    })(i, t, n, l),
              d = this._getStackIndex(
                this.index,
                this._cachedMeta.stack,
                s ? i : void 0
              );
            (r = c.start + c.chunk * d + c.chunk / 2),
              (a = Math.min(o, c.chunk * c.ratio));
          } else
            (r = e.getPixelForValue(this.getParsed(i)[e.axis], i)),
              (a = Math.min(o, t.min * t.ratio));
          return { base: r - a / 2, head: r + a / 2, center: r, size: a };
        }
        draw() {
          const i = this._cachedMeta,
            t = i.vScale,
            e = i.data,
            n = e.length;
          let s = 0;
          for (; s < n; ++s)
            this.getParsed(s)[t.axis] === null ||
              e[s].hidden ||
              e[s].draw(this._ctx);
        }
      }),
      P(Xe, "id", "bar"),
      P(Xe, "defaults", {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"],
          },
        },
      }),
      P(Xe, "overrides", {
        scales: {
          _index_: { type: "category", offset: !0, grid: { offset: !0 } },
          _value_: { type: "linear", beginAtZero: !0 },
        },
      }),
      Xe),
    BubbleController:
      ((Ge = class extends Ft {
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        parsePrimitiveData(i, t, e, n) {
          const s = super.parsePrimitiveData(i, t, e, n);
          for (let o = 0; o < s.length; o++)
            s[o]._custom = this.resolveDataElementOptions(o + e).radius;
          return s;
        }
        parseArrayData(i, t, e, n) {
          const s = super.parseArrayData(i, t, e, n);
          for (let o = 0; o < s.length; o++) {
            const r = t[e + o];
            s[o]._custom = V(
              r[2],
              this.resolveDataElementOptions(o + e).radius
            );
          }
          return s;
        }
        parseObjectData(i, t, e, n) {
          const s = super.parseObjectData(i, t, e, n);
          for (let o = 0; o < s.length; o++) {
            const r = t[e + o];
            s[o]._custom = V(
              r && r.r && +r.r,
              this.resolveDataElementOptions(o + e).radius
            );
          }
          return s;
        }
        getMaxOverflow() {
          const i = this._cachedMeta.data;
          let t = 0;
          for (let e = i.length - 1; e >= 0; --e)
            t = Math.max(t, i[e].size(this.resolveDataElementOptions(e)) / 2);
          return t > 0 && t;
        }
        getLabelAndValue(i) {
          const t = this._cachedMeta,
            e = this.chart.data.labels || [],
            { xScale: n, yScale: s } = t,
            o = this.getParsed(i),
            r = n.getLabelForValue(o.x),
            a = s.getLabelForValue(o.y),
            l = o._custom;
          return {
            label: e[i] || "",
            value: "(" + r + ", " + a + (l ? ", " + l : "") + ")",
          };
        }
        update(i) {
          const t = this._cachedMeta.data;
          this.updateElements(t, 0, t.length, i);
        }
        updateElements(i, t, e, n) {
          const s = n === "reset",
            { iScale: o, vScale: r } = this._cachedMeta,
            { sharedOptions: a, includeOptions: l } = this._getSharedOptions(
              t,
              n
            ),
            c = o.axis,
            d = r.axis;
          for (let h = t; h < t + e; h++) {
            const u = i[h],
              g = !s && this.getParsed(h),
              p = {},
              f = (p[c] = s
                ? o.getPixelForDecimal(0.5)
                : o.getPixelForValue(g[c])),
              m = (p[d] = s ? r.getBasePixel() : r.getPixelForValue(g[d]));
            (p.skip = isNaN(f) || isNaN(m)),
              l &&
                ((p.options =
                  a ||
                  this.resolveDataElementOptions(h, u.active ? "active" : n)),
                s && (p.options.radius = 0)),
              this.updateElement(u, h, p, n);
          }
        }
        resolveDataElementOptions(i, t) {
          const e = this.getParsed(i);
          let n = super.resolveDataElementOptions(i, t);
          n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
          const s = n.radius;
          return (
            t !== "active" && (n.radius = 0),
            (n.radius += V(e && e._custom, s)),
            n
          );
        }
      }),
      P(Ge, "id", "bubble"),
      P(Ge, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"],
          },
        },
      }),
      P(Ge, "overrides", {
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      }),
      Ge),
    DoughnutController: ye,
    LineController: Be,
    PieController:
      ((Yi = class extends ye {}),
      P(Yi, "id", "pie"),
      P(Yi, "defaults", {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%",
      }),
      Yi),
    PolarAreaController: di,
    RadarController:
      ((Ze = class extends Ft {
        getLabelAndValue(i) {
          const t = this._cachedMeta.vScale,
            e = this.getParsed(i);
          return {
            label: t.getLabels()[i],
            value: "" + t.getLabelForValue(e[t.axis]),
          };
        }
        parseObjectData(i, t, e, n) {
          return ja.bind(this)(i, t, e, n);
        }
        update(i) {
          const t = this._cachedMeta,
            e = t.dataset,
            n = t.data || [],
            s = t.iScale.getLabels();
          if (((e.points = n), i !== "resize")) {
            const o = this.resolveDatasetElementOptions(i);
            this.options.showLine || (o.borderWidth = 0);
            const r = {
              _loop: !0,
              _fullLoop: s.length === n.length,
              options: o,
            };
            this.updateElement(e, void 0, r, i);
          }
          this.updateElements(n, 0, n.length, i);
        }
        updateElements(i, t, e, n) {
          const s = this._cachedMeta.rScale,
            o = n === "reset";
          for (let r = t; r < t + e; r++) {
            const a = i[r],
              l = this.resolveDataElementOptions(r, a.active ? "active" : n),
              c = s.getPointPositionForValue(r, this.getParsed(r).r),
              d = o ? s.xCenter : c.x,
              h = o ? s.yCenter : c.y,
              u = {
                x: d,
                y: h,
                angle: c.angle,
                skip: isNaN(d) || isNaN(h),
                options: l,
              };
            this.updateElement(a, r, u, n);
          }
        }
      }),
      P(Ze, "id", "radar"),
      P(Ze, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: { line: { fill: "start" } },
      }),
      P(Ze, "overrides", {
        aspectRatio: 1,
        scales: { r: { type: "radialLinear" } },
      }),
      Ze),
    ScatterController:
      ((Je = class extends Ft {
        getLabelAndValue(i) {
          const t = this._cachedMeta,
            e = this.chart.data.labels || [],
            { xScale: n, yScale: s } = t,
            o = this.getParsed(i),
            r = n.getLabelForValue(o.x),
            a = s.getLabelForValue(o.y);
          return { label: e[i] || "", value: "(" + r + ", " + a + ")" };
        }
        update(i) {
          const t = this._cachedMeta,
            { data: e = [] } = t,
            n = this.chart._animationsDisabled;
          let { start: s, count: o } = Ra(t, e, n);
          if (
            ((this._drawStart = s),
            (this._drawCount = o),
            Fa(t) && ((s = 0), (o = e.length)),
            this.options.showLine)
          ) {
            this.datasetElementType || this.addElements();
            const { dataset: r, _dataset: a } = t;
            (r._chart = this.chart),
              (r._datasetIndex = this.index),
              (r._decimated = !!a._decimated),
              (r.points = e);
            const l = this.resolveDatasetElementOptions(i);
            (l.segment = this.options.segment),
              this.updateElement(r, void 0, { animated: !n, options: l }, i);
          } else
            this.datasetElementType &&
              (delete t.dataset, (this.datasetElementType = !1));
          this.updateElements(e, s, o, i);
        }
        addElements() {
          const { showLine: i } = this.options;
          !this.datasetElementType &&
            i &&
            (this.datasetElementType = this.chart.registry.getElement("line")),
            super.addElements();
        }
        updateElements(i, t, e, n) {
          const s = n === "reset",
            {
              iScale: o,
              vScale: r,
              _stacked: a,
              _dataset: l,
            } = this._cachedMeta,
            c = this.resolveDataElementOptions(t, n),
            d = this.getSharedOptions(c),
            h = this.includeOptions(n, d),
            u = o.axis,
            g = r.axis,
            { spanGaps: p, segment: f } = this.options,
            m = Ne(p) ? p : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || s || n === "none";
          let x = t > 0 && this.getParsed(t - 1);
          for (let v = t; v < t + e; ++v) {
            const y = i[v],
              _ = this.getParsed(v),
              w = b ? y : {},
              M = W(_[g]),
              k = (w[u] = o.getPixelForValue(_[u], v)),
              C = (w[g] =
                s || M
                  ? r.getBasePixel()
                  : r.getPixelForValue(a ? this.applyStack(r, _, a) : _[g], v));
            (w.skip = isNaN(k) || isNaN(C) || M),
              (w.stop = v > 0 && Math.abs(_[u] - x[u]) > m),
              f && ((w.parsed = _), (w.raw = l.data[v])),
              h &&
                (w.options =
                  d ||
                  this.resolveDataElementOptions(v, y.active ? "active" : n)),
              b || this.updateElement(y, v, w, n),
              (x = _);
          }
          this.updateSharedOptions(d, n, c);
        }
        getMaxOverflow() {
          const i = this._cachedMeta,
            t = i.data || [];
          if (!this.options.showLine) {
            let r = 0;
            for (let a = t.length - 1; a >= 0; --a)
              r = Math.max(r, t[a].size(this.resolveDataElementOptions(a)) / 2);
            return r > 0 && r;
          }
          const e = i.dataset,
            n = (e.options && e.options.borderWidth) || 0;
          if (!t.length) return n;
          const s = t[0].size(this.resolveDataElementOptions(0)),
            o = t[t.length - 1].size(
              this.resolveDataElementOptions(t.length - 1)
            );
          return Math.max(n, s, o) / 2;
        }
      }),
      P(Je, "id", "scatter"),
      P(Je, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1,
      }),
      P(Je, "overrides", {
        interaction: { mode: "point" },
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      }),
      Je),
  });
function ge() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class As {
  constructor(t) {
    P(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(As.prototype, t);
  }
  init() {}
  formats() {
    return ge();
  }
  parse() {
    return ge();
  }
  format() {
    return ge();
  }
  add() {
    return ge();
  }
  diff() {
    return ge();
  }
  startOf() {
    return ge();
  }
  endOf() {
    return ge();
  }
}
var xd = As;
function yd(i, t, e, n) {
  const { controller: s, data: o, _sorted: r } = i,
    a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Fh : Qt;
    if (!n) return l(o, t, e);
    if (s._sharedOptions) {
      const c = o[0],
        d = typeof c.getRange == "function" && c.getRange(t);
      if (d) {
        const h = l(o, t, e - d),
          u = l(o, t, e + d);
        return { lo: h.lo, hi: u.hi };
      }
    }
  }
  return { lo: 0, hi: o.length - 1 };
}
function Ci(i, t, e, n, s) {
  const o = i.getSortedVisibleDatasetMetas(),
    r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a],
      { lo: h, hi: u } = yd(o[a], t, r, s);
    for (let g = h; g <= u; ++g) {
      const p = d[g];
      p.skip || n(p, c, g);
    }
  }
}
function Sn(i, t, e, n, s) {
  const o = [];
  return (
    (!s && !i.isPointInArea(t)) ||
      Ci(
        i,
        e,
        t,
        function (r, a, l) {
          (s || te(r, i.chartArea, 0)) &&
            r.inRange(t.x, t.y, n) &&
            o.push({ element: r, datasetIndex: a, index: l });
        },
        !0
      ),
    o
  );
}
function vd(i, t, e, n, s, o) {
  let r = [];
  const a = (function (c) {
    const d = c.indexOf("x") !== -1,
      h = c.indexOf("y") !== -1;
    return function (u, g) {
      const p = d ? Math.abs(u.x - g.x) : 0,
        f = h ? Math.abs(u.y - g.y) : 0;
      return Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2));
    };
  })(e);
  let l = Number.POSITIVE_INFINITY;
  return (
    Ci(i, e, t, function (c, d, h) {
      const u = c.inRange(t.x, t.y, s);
      if (n && !u) return;
      const g = c.getCenterPoint(s);
      if (!(o || i.isPointInArea(g)) && !u) return;
      const p = a(t, g);
      p < l
        ? ((r = [{ element: c, datasetIndex: d, index: h }]), (l = p))
        : p === l && r.push({ element: c, datasetIndex: d, index: h });
    }),
    r
  );
}
function Dn(i, t, e, n, s, o) {
  return o || i.isPointInArea(t)
    ? e !== "r" || n
      ? vd(i, t, e, n, s, o)
      : (function (r, a, l, c) {
          let d = [];
          return (
            Ci(r, l, a, function (h, u, g) {
              const { startAngle: p, endAngle: f } = h.getProps(
                  ["startAngle", "endAngle"],
                  c
                ),
                { angle: m } = Aa(h, { x: a.x, y: a.y });
              xi(m, p, f) && d.push({ element: h, datasetIndex: u, index: g });
            }),
            d
          );
        })(i, t, e, s)
    : [];
}
function er(i, t, e, n, s) {
  const o = [],
    r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    Ci(i, e, t, (l, c, d) => {
      l[r](t[e], s) &&
        (o.push({ element: l, datasetIndex: c, index: d }),
        (a = a || l.inRange(t.x, t.y, s)));
    }),
    n && !a ? [] : o
  );
}
var _d = {
  evaluateInteractionItems: Ci,
  modes: {
    index(i, t, e, n) {
      const s = me(t, i),
        o = e.axis || "x",
        r = e.includeInvisible || !1,
        a = e.intersect ? Sn(i, s, o, n, r) : Dn(i, s, o, !1, n, r),
        l = [];
      return a.length
        ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
            const d = a[0].index,
              h = c.data[d];
            h &&
              !h.skip &&
              l.push({ element: h, datasetIndex: c.index, index: d });
          }),
          l)
        : [];
    },
    dataset(i, t, e, n) {
      const s = me(t, i),
        o = e.axis || "xy",
        r = e.includeInvisible || !1;
      let a = e.intersect ? Sn(i, s, o, n, r) : Dn(i, s, o, !1, n, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = i.getDatasetMeta(l).data;
        a = [];
        for (let d = 0; d < c.length; ++d)
          a.push({ element: c[d], datasetIndex: l, index: d });
      }
      return a;
    },
    point: (i, t, e, n) =>
      Sn(i, me(t, i), e.axis || "xy", n, e.includeInvisible || !1),
    nearest(i, t, e, n) {
      const s = me(t, i),
        o = e.axis || "xy",
        r = e.includeInvisible || !1;
      return Dn(i, s, o, e.intersect, n, r);
    },
    x: (i, t, e, n) => er(i, me(t, i), "x", e.intersect, n),
    y: (i, t, e, n) => er(i, me(t, i), "y", e.intersect, n),
  },
};
const Ga = ["left", "top", "right", "bottom"];
function $e(i, t) {
  return i.filter((e) => e.pos === t);
}
function ir(i, t) {
  return i.filter((e) => Ga.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Ue(i, t) {
  return i.sort((e, n) => {
    const s = t ? n : e,
      o = t ? e : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function wd(i, t) {
  const e = (function (l) {
      const c = {};
      for (const d of l) {
        const { stack: h, pos: u, stackWeight: g } = d;
        if (!h || !Ga.includes(u)) continue;
        const p = c[h] || (c[h] = { count: 0, placed: 0, weight: 0, size: 0 });
        p.count++, (p.weight += g);
      }
      return c;
    })(i),
    { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box,
      c = e[a.stack],
      d = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = d ? d * n : l && t.availableWidth), (a.height = s))
      : ((a.width = n), (a.height = d ? d * s : l && t.availableHeight));
  }
  return e;
}
function nr(i, t, e, n) {
  return Math.max(i[e], t[e]) + Math.max(i[n], t[n]);
}
function Za(i, t) {
  (i.top = Math.max(i.top, t.top)),
    (i.left = Math.max(i.left, t.left)),
    (i.bottom = Math.max(i.bottom, t.bottom)),
    (i.right = Math.max(i.right, t.right));
}
function Md(i, t, e, n) {
  const { pos: s, box: o } = e,
    r = i.maxPadding;
  if (!N(s)) {
    e.size && (i[s] -= e.size);
    const h = n[e.stack] || { size: 0, count: 1 };
    (h.size = Math.max(h.size, e.horizontal ? o.height : o.width)),
      (e.size = h.size / h.count),
      (i[s] += e.size);
  }
  o.getPadding && Za(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - nr(r, i, "left", "right")),
    l = Math.max(0, t.outerHeight - nr(r, i, "top", "bottom")),
    c = a !== i.w,
    d = l !== i.h;
  return (
    (i.w = a),
    (i.h = l),
    e.horizontal ? { same: c, other: d } : { same: d, other: c }
  );
}
function kd(i, t) {
  const e = t.maxPadding;
  function n(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((r) => {
        o[r] = Math.max(t[r], e[r]);
      }),
      o
    );
  }
  return n(i ? ["left", "right"] : ["top", "bottom"]);
}
function ii(i, t, e, n) {
  const s = [];
  let o, r, a, l, c, d;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    (a = i[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, kd(a.horizontal, t));
    const { same: h, other: u } = Md(t, e, a, n);
    (c |= h && s.length), (d = d || u), l.fullSize || s.push(a);
  }
  return (c && ii(s, t, e, n)) || d;
}
function zi(i, t, e, n, s) {
  (i.top = e),
    (i.left = t),
    (i.right = t + n),
    (i.bottom = e + s),
    (i.width = n),
    (i.height = s);
}
function sr(i, t, e, n) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box,
      c = n[a.stack] || { count: 1, placed: 0, weight: 1 },
      d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const h = t.w * d,
        u = c.size || l.height;
      bi(c.start) && (r = c.start),
        l.fullSize
          ? zi(l, s.left, r, e.outerWidth - s.right - s.left, u)
          : zi(l, t.left + c.placed, r, h, u),
        (c.start = r),
        (c.placed += h),
        (r = l.bottom);
    } else {
      const h = t.h * d,
        u = c.size || l.width;
      bi(c.start) && (o = c.start),
        l.fullSize
          ? zi(l, o, s.top, u, e.outerHeight - s.bottom - s.top)
          : zi(l, o, t.top + c.placed, u, h),
        (c.start = o),
        (c.placed += h),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = r);
}
var _t = {
  addBox(i, t) {
    i.boxes || (i.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e);
              },
            },
          ];
        }),
      i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    (t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
  },
  update(i, t, e, n) {
    if (!i) return;
    const s = wt(i.options.layout.padding),
      o = Math.max(t - s.width, 0),
      r = Math.max(e - s.height, 0),
      a = (function (f) {
        const m = (function (k) {
            const C = [];
            let S, O, E, L, A, T;
            for (S = 0, O = (k || []).length; S < O; ++S)
              (E = k[S]),
                ({
                  position: L,
                  options: { stack: A, stackWeight: T = 1 },
                } = E),
                C.push({
                  index: S,
                  box: E,
                  pos: L,
                  horizontal: E.isHorizontal(),
                  weight: E.weight,
                  stack: A && L + A,
                  stackWeight: T,
                });
            return C;
          })(f),
          b = Ue(
            m.filter((k) => k.box.fullSize),
            !0
          ),
          x = Ue($e(m, "left"), !0),
          v = Ue($e(m, "right")),
          y = Ue($e(m, "top"), !0),
          _ = Ue($e(m, "bottom")),
          w = ir(m, "x"),
          M = ir(m, "y");
        return {
          fullSize: b,
          leftAndTop: x.concat(y),
          rightAndBottom: v.concat(M).concat(_).concat(w),
          chartArea: $e(m, "chartArea"),
          vertical: x.concat(v).concat(M),
          horizontal: y.concat(_).concat(w),
        };
      })(i.boxes),
      l = a.vertical,
      c = a.horizontal;
    U(i.boxes, (f) => {
      typeof f.beforeLayout == "function" && f.beforeLayout();
    });
    const d =
        l.reduce(
          (f, m) => (m.box.options && m.box.options.display === !1 ? f : f + 1),
          0
        ) || 1,
      h = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: s,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / d,
        hBoxMaxHeight: r / 2,
      }),
      u = Object.assign({}, s);
    Za(u, wt(n));
    const g = Object.assign(
        { maxPadding: u, w: o, h: r, x: s.left, y: s.top },
        s
      ),
      p = wd(l.concat(c), h);
    ii(a.fullSize, g, h, p),
      ii(l, g, h, p),
      ii(c, g, h, p) && ii(l, g, h, p),
      (function (f) {
        const m = f.maxPadding;
        function b(x) {
          const v = Math.max(m[x] - f[x], 0);
          return (f[x] += v), v;
        }
        (f.y += b("top")), (f.x += b("left")), b("right"), b("bottom");
      })(g),
      sr(a.leftAndTop, g, h, p),
      (g.x += g.w),
      (g.y += g.h),
      sr(a.rightAndBottom, g, h, p),
      (i.chartArea = {
        left: g.left,
        top: g.top,
        right: g.left + g.w,
        bottom: g.top + g.h,
        height: g.h,
        width: g.w,
      }),
      U(a.chartArea, (f) => {
        const m = f.box;
        Object.assign(m, i.chartArea),
          m.update(g.w, g.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Ja {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, n) {}
  removeEventListener(t, e, n) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, n, s) {
    return (
      (e = Math.max(0, e || t.width)),
      (n = n || t.height),
      { width: e, height: Math.max(0, s ? Math.floor(e / s) : n) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Sd extends Ja {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Bi = "$chartjs",
  Dd = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  or = (i) => i === null || i === "",
  Qa = !!od && { passive: !0 };
function Cd(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Qa);
}
function sn(i, t) {
  for (const e of i) if (e === t || e.contains(t)) return !0;
}
function Pd(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || sn(a.addedNodes, n)), (r = r && !sn(a.removedNodes, n));
      r && e();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function Od(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || sn(a.removedNodes, n)), (r = r && !sn(a.addedNodes, n));
      r && e();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const vi = new Map();
let rr = 0;
function tl() {
  const i = window.devicePixelRatio;
  i !== rr &&
    ((rr = i),
    vi.forEach((t, e) => {
      e.currentDevicePixelRatio !== i && t();
    }));
}
function Ad(i, t, e) {
  const n = i.canvas,
    s = n && Os(n);
  if (!s) return;
  const o = Ia((a, l) => {
      const c = s.clientWidth;
      e(a, l), c < s.clientWidth && e();
    }, window),
    r = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        d = l.contentRect.height;
      (c === 0 && d === 0) || o(c, d);
    });
  return (
    r.observe(s),
    (function (a, l) {
      vi.size || window.addEventListener("resize", tl), vi.set(a, l);
    })(i, o),
    r
  );
}
function Cn(i, t, e) {
  e && e.disconnect(),
    t === "resize" &&
      (function (n) {
        vi.delete(n), vi.size || window.removeEventListener("resize", tl);
      })(i);
}
function Td(i, t, e) {
  const n = i.canvas,
    s = Ia((o) => {
      i.ctx !== null &&
        e(
          (function (r, a) {
            const l = Dd[r.type] || r.type,
              { x: c, y: d } = me(r, a);
            return {
              type: l,
              chart: a,
              native: r,
              x: c !== void 0 ? c : null,
              y: d !== void 0 ? d : null,
            };
          })(o, i)
        );
    }, i);
  return (
    (function (o, r, a) {
      o && o.addEventListener(r, a, Qa);
    })(n, t, s),
    s
  );
}
class Ed extends Ja {
  acquireContext(t, e) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t
      ? ((function (s, o) {
          const r = s.style,
            a = s.getAttribute("height"),
            l = s.getAttribute("width");
          if (
            ((s[Bi] = {
              initial: {
                height: a,
                width: l,
                style: { display: r.display, height: r.height, width: r.width },
              },
            }),
            (r.display = r.display || "block"),
            (r.boxSizing = r.boxSizing || "border-box"),
            or(l))
          ) {
            const c = Vo(s, "width");
            c !== void 0 && (s.width = c);
          }
          if (or(a))
            if (s.style.height === "") s.height = s.width / (o || 2);
            else {
              const c = Vo(s, "height");
              c !== void 0 && (s.height = c);
            }
        })(t, e),
        n)
      : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Bi]) return !1;
    const n = e[Bi].initial;
    ["height", "width"].forEach((o) => {
      const r = n[o];
      W(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = n.style || {};
    return (
      Object.keys(s).forEach((o) => {
        e.style[o] = s[o];
      }),
      (e.width = e.width),
      delete e[Bi],
      !0
    );
  }
  addEventListener(t, e, n) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}),
      o = { attach: Pd, detach: Od, resize: Ad }[e] || Td;
    s[e] = o(t, e, n);
  }
  removeEventListener(t, e) {
    const n = t.$proxies || (t.$proxies = {}),
      s = n[e];
    s &&
      (({ attach: Cn, detach: Cn, resize: Cn }[e] || Cd)(t, e, s),
      (n[e] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, n, s) {
    return sd(t, e, n, s);
  }
  isAttached(t) {
    const e = t && Os(t);
    return !(!e || !e.isConnected);
  }
}
class zt {
  constructor() {
    P(this, "x");
    P(this, "y");
    P(this, "active", !1);
    P(this, "options");
    P(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: n } = this.getProps(["x", "y"], t);
    return { x: e, y: n };
  }
  hasValue() {
    return Ne(this.x) && Ne(this.y);
  }
  getProps(t, e) {
    const n = this.$animations;
    if (!e || !n) return this;
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
      }),
      s
    );
  }
}
P(zt, "defaults", {}), P(zt, "defaultRoutes");
function Ld(i, t) {
  const e = i.options.ticks,
    n = (function (h) {
      const u = h.options.offset,
        g = h._tickSize(),
        p = h._length / g + (u ? 0 : 1),
        f = h._maxLength / g;
      return Math.floor(Math.min(p, f));
    })(i),
    s = Math.min(e.maxTicksLimit || n, n),
    o = e.major.enabled
      ? (function (h) {
          const u = [];
          let g, p;
          for (g = 0, p = h.length; g < p; g++) h[g].major && u.push(g);
          return u;
        })(t)
      : [],
    r = o.length,
    a = o[0],
    l = o[r - 1],
    c = [];
  if (r > s)
    return (
      (function (h, u, g, p) {
        let f,
          m = 0,
          b = g[0];
        for (p = Math.ceil(p), f = 0; f < h.length; f++)
          f === b && (u.push(h[f]), m++, (b = g[m * p]));
      })(t, c, o, r / s),
      c
    );
  const d = (function (h, u, g) {
    const p = (function (b) {
        const x = b.length;
        let v, y;
        if (x < 2) return !1;
        for (y = b[0], v = 1; v < x; ++v) if (b[v] - b[v - 1] !== y) return !1;
        return y;
      })(h),
      f = u.length / g;
    if (!p) return Math.max(f, 1);
    const m = (function (b) {
      const x = [],
        v = Math.sqrt(b);
      let y;
      for (y = 1; y < v; y++) b % y == 0 && (x.push(y), x.push(b / y));
      return v === (0 | v) && x.push(v), x.sort((_, w) => _ - w).pop(), x;
    })(p);
    for (let b = 0, x = m.length - 1; b < x; b++) {
      const v = m[b];
      if (v > f) return v;
    }
    return Math.max(f, 1);
  })(o, t, s);
  if (r > 0) {
    let h, u;
    const g = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Ki(t, c, d, W(g) ? 0 : a - g, a), h = 0, u = r - 1; h < u; h++)
      Ki(t, c, d, o[h], o[h + 1]);
    return Ki(t, c, d, l, W(g) ? t.length : l + g), c;
  }
  return Ki(t, c, d), c;
}
function Ki(i, t, e, n, s) {
  const o = V(n, 0),
    r = Math.min(V(s, i.length), i.length);
  let a,
    l,
    c,
    d = 0;
  for (
    e = Math.ceil(e), s && ((a = s - n), (e = a / Math.floor(a / e))), c = o;
    c < 0;

  )
    d++, (c = Math.round(o + d * e));
  for (l = Math.max(o, 0); l < r; l++)
    l === c && (t.push(i[l]), d++, (c = Math.round(o + d * e)));
}
const ar = (i, t, e) => (t === "top" || t === "left" ? i[t] + e : i[t] - e),
  lr = (i, t) => Math.min(t || i, i);
function cr(i, t) {
  const e = [],
    n = i.length / t,
    s = i.length;
  let o = 0;
  for (; o < s; o += n) e.push(i[Math.floor(o)]);
  return e;
}
function Id(i, t, e) {
  const n = i.ticks.length,
    s = Math.min(t, n - 1),
    o = i._startPixel,
    r = i._endPixel,
    a = 1e-6;
  let l,
    c = i.getPixelForTick(s);
  if (
    !(
      e &&
      ((l =
        n === 1
          ? Math.max(c - o, r - c)
          : t === 0
          ? (i.getPixelForTick(1) - c) / 2
          : (c - i.getPixelForTick(s - 1)) / 2),
      (c += s < t ? l : -l),
      c < o - a || c > r + a)
    )
  )
    return c;
}
function Ye(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function hr(i, t) {
  if (!i.display) return 0;
  const e = ut(i.font, t),
    n = wt(i.padding);
  return (tt(i.text) ? i.text.length : 1) * e.lineHeight + n.height;
}
function Rd(i, t, e) {
  let n = ks(i);
  return (
    ((e && t !== "right") || (!e && t === "right")) &&
      (n = ((s) => (s === "left" ? "right" : s === "right" ? "left" : s))(n)),
    n
  );
}
class Ae extends zt {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: s } = this;
    return (
      (t = Ot(t, Number.POSITIVE_INFINITY)),
      (e = Ot(e, Number.NEGATIVE_INFINITY)),
      (n = Ot(n, Number.POSITIVE_INFINITY)),
      (s = Ot(s, Number.NEGATIVE_INFINITY)),
      { min: Ot(t, n), max: Ot(e, s), minDefined: ot(t), maxDefined: ot(e) }
    );
  }
  getMinMax(t) {
    let e,
      { min: n, max: s, minDefined: o, maxDefined: r } = this.getUserBounds();
    if (o && r) return { min: n, max: s };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (e = a[l].controller.getMinMax(this, t)),
        o || (n = Math.min(n, e.min)),
        r || (s = Math.max(s, e.max));
    return (
      (n = r && n > s ? s : n),
      (s = o && n > s ? n : s),
      { min: Ot(n, Ot(s, n)), max: Ot(s, Ot(n, s)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Z(this.options.beforeUpdate, [this]);
  }
  update(t, e, n) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options,
      a = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + n.left + n.right
        : this.height + n.top + n.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = (function (c, d, h) {
          const { min: u, max: g } = c,
            p = Ca(d, (g - u) / 2),
            f = (m, b) => (h && m === 0 ? 0 : m + b);
          return { min: f(u, -Math.abs(p)), max: f(g, p) };
        })(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? cr(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === "auto") &&
        ((this.ticks = Ld(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t,
      e,
      n = this.options.reverse;
    this.isHorizontal()
      ? ((t = this.left), (e = this.right))
      : ((t = this.top), (e = this.bottom), (n = !n)),
      (this._startPixel = t),
      (this._endPixel = e),
      (this._reversePixels = n),
      (this._length = e - t),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Z(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Z(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    Z(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Z(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Z(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      (o = t[n]), (o.label = Z(e.callback, [o.value, n, t], this));
  }
  afterTickToLabelConversion() {
    Z(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Z(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      n = lr(this.ticks.length, t.ticks.maxTicksLimit),
      s = e.minRotation || 0,
      o = e.maxRotation;
    let r,
      a,
      l,
      c = s;
    if (
      !this._isVisible() ||
      !e.display ||
      s >= o ||
      n <= 1 ||
      !this.isHorizontal()
    )
      return void (this.labelRotation = s);
    const d = this._getLabelSizes(),
      h = d.widest.width,
      u = d.highest.height,
      g = mt(this.chart.width - h, 0, this.maxWidth);
    (r = t.offset ? this.maxWidth / n : g / (n - 1)),
      h + 6 > r &&
        ((r = g / (n - (t.offset ? 0.5 : 1))),
        (a =
          this.maxHeight -
          Ye(t.grid) -
          e.padding -
          hr(t.title, this.chart.options.font)),
        (l = Math.sqrt(h * h + u * u)),
        (c = ws(
          Math.min(
            Math.asin(mt((d.highest.height + 6) / r, -1, 1)),
            Math.asin(mt(a / l, -1, 1)) - Math.asin(mt(u / l, -1, 1))
          )
        )),
        (c = Math.max(s, Math.min(o, c)))),
      (this.labelRotation = c);
  }
  afterCalculateLabelRotation() {
    Z(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Z(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: n, title: s, grid: o },
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal();
    if (r) {
      const l = hr(s, e.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = Ye(o) + l))
          : ((t.height = this.maxHeight), (t.width = Ye(o) + l)),
        n.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: d,
            widest: h,
            highest: u,
          } = this._getLabelSizes(),
          g = 2 * n.padding,
          p = Rt(this.labelRotation),
          f = Math.cos(p),
          m = Math.sin(p);
        if (a) {
          const b = n.mirror ? 0 : m * h.width + f * u.height;
          t.height = Math.min(this.maxHeight, t.height + b + g);
        } else {
          const b = n.mirror ? 0 : f * h.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + b + g);
        }
        this._calculatePadding(c, d, m, f);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            e.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, e, n, s) {
    const {
        ticks: { align: o, padding: r },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left,
        h = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0,
        g = 0;
      l
        ? c
          ? ((u = s * t.width), (g = n * e.height))
          : ((u = n * t.height), (g = s * e.width))
        : o === "start"
        ? (g = e.width)
        : o === "end"
        ? (u = t.width)
        : o !== "inner" && ((u = t.width / 2), (g = e.width / 2)),
        (this.paddingLeft = Math.max(
          ((u - d + r) * this.width) / (this.width - d),
          0
        )),
        (this.paddingRight = Math.max(
          ((g - h + r) * this.width) / (this.width - h),
          0
        ));
    } else {
      let d = e.height / 2,
        h = t.height / 2;
      o === "start"
        ? ((d = 0), (h = t.height))
        : o === "end" && ((d = e.height), (h = 0)),
        (this.paddingTop = d + r),
        (this.paddingBottom = h + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    Z(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    let e, n;
    for (
      this.beforeTickToLabelConversion(),
        this.generateTickLabels(t),
        e = 0,
        n = t.length;
      e < n;
      e++
    )
      W(t[e].label) && (t.splice(e, 1), n--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let n = this.ticks;
      e < n.length && (n = cr(n, e)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            n,
            n.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, e, n) {
    const { ctx: s, _longestTextCache: o } = this,
      r = [],
      a = [],
      l = Math.floor(e / lr(e, n));
    let c,
      d,
      h,
      u,
      g,
      p,
      f,
      m,
      b,
      x,
      v,
      y = 0,
      _ = 0;
    for (c = 0; c < e; c += l) {
      if (
        ((u = t[c].label),
        (g = this._resolveTickFontOptions(c)),
        (s.font = p = g.string),
        (f = o[p] = o[p] || { data: {}, gc: [] }),
        (m = g.lineHeight),
        (b = x = 0),
        W(u) || tt(u))
      ) {
        if (tt(u))
          for (d = 0, h = u.length; d < h; ++d)
            (v = u[d]),
              W(v) || tt(v) || ((b = en(s, f.data, f.gc, b, v)), (x += m));
      } else (b = en(s, f.data, f.gc, b, u)), (x = m);
      r.push(b), a.push(x), (y = Math.max(b, y)), (_ = Math.max(x, _));
    }
    (function (C, S) {
      U(C, (O) => {
        const E = O.gc,
          L = E.length / 2;
        let A;
        if (L > S) {
          for (A = 0; A < L; ++A) delete O.data[E[A]];
          E.splice(0, L);
        }
      });
    })(o, e);
    const w = r.indexOf(y),
      M = a.indexOf(_),
      k = (C) => ({ width: r[C] || 0, height: a[C] || 0 });
    return {
      first: k(0),
      last: k(e - 1),
      widest: k(w),
      highest: k(M),
      widths: r,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return mt(this._alignToPixels ? fe(this.chart, e, 0) : e, -32768, 32767);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return (
        n.$context ||
        (n.$context = (function (s, o, r) {
          return he(s, { tick: r, index: o, type: "tick" });
        })(this.getContext(), t, n))
      );
    }
    return (
      this.$context ||
      (this.$context = he(this.chart.getContext(), {
        scale: this,
        type: "scale",
      }))
    );
  }
  _tickSize() {
    const t = this.options.ticks,
      e = Rt(this.labelRotation),
      n = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      l = o ? o.highest.height + r : 0;
    return this.isHorizontal()
      ? l * n > a * s
        ? a / n
        : l / s
      : l * s < a * n
      ? l / n
      : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      n = this.chart,
      s = this.options,
      { grid: o, position: r, border: a } = s,
      l = o.offset,
      c = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      h = Ye(o),
      u = [],
      g = a.setContext(this.getContext()),
      p = g.display ? g.width : 0,
      f = p / 2,
      m = function (T) {
        return fe(n, T, p);
      };
    let b, x, v, y, _, w, M, k, C, S, O, E;
    if (r === "top")
      (b = m(this.bottom)),
        (w = this.bottom - h),
        (k = b - f),
        (S = m(t.top) + f),
        (E = t.bottom);
    else if (r === "bottom")
      (b = m(this.top)),
        (S = t.top),
        (E = m(t.bottom) - f),
        (w = b + f),
        (k = this.top + h);
    else if (r === "left")
      (b = m(this.right)),
        (_ = this.right - h),
        (M = b - f),
        (C = m(t.left) + f),
        (O = t.right);
    else if (r === "right")
      (b = m(this.left)),
        (C = t.left),
        (O = m(t.right) - f),
        (_ = b + f),
        (M = this.left + h);
    else if (e === "x") {
      if (r === "center") b = m((t.top + t.bottom) / 2 + 0.5);
      else if (N(r)) {
        const T = Object.keys(r)[0],
          F = r[T];
        b = m(this.chart.scales[T].getPixelForValue(F));
      }
      (S = t.top), (E = t.bottom), (w = b + f), (k = w + h);
    } else if (e === "y") {
      if (r === "center") b = m((t.left + t.right) / 2);
      else if (N(r)) {
        const T = Object.keys(r)[0],
          F = r[T];
        b = m(this.chart.scales[T].getPixelForValue(F));
      }
      (_ = b - f), (M = _ - h), (C = t.left), (O = t.right);
    }
    const L = V(s.ticks.maxTicksLimit, d),
      A = Math.max(1, Math.ceil(d / L));
    for (x = 0; x < d; x += A) {
      const T = this.getContext(x),
        F = o.setContext(T),
        B = a.setContext(T),
        z = F.lineWidth,
        q = F.color,
        at = B.dash || [],
        j = B.dashOffset,
        nt = F.tickWidth,
        ft = F.tickColor,
        gt = F.tickBorderDash || [],
        Tt = F.tickBorderDashOffset;
      (v = Id(this, x, l)),
        v !== void 0 &&
          ((y = fe(n, v, z)),
          c ? (_ = M = C = O = y) : (w = k = S = E = y),
          u.push({
            tx1: _,
            ty1: w,
            tx2: M,
            ty2: k,
            x1: C,
            y1: S,
            x2: O,
            y2: E,
            width: z,
            color: q,
            borderDash: at,
            borderDashOffset: j,
            tickWidth: nt,
            tickColor: ft,
            tickBorderDash: gt,
            tickBorderDashOffset: Tt,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = b), u;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      n = this.options,
      { position: s, ticks: o } = n,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: d, mirror: h } = o,
      u = Ye(n.grid),
      g = u + d,
      p = h ? -d : g,
      f = -Rt(this.labelRotation),
      m = [];
    let b,
      x,
      v,
      y,
      _,
      w,
      M,
      k,
      C,
      S,
      O,
      E,
      L = "middle";
    if (s === "top")
      (w = this.bottom - p), (M = this._getXAxisLabelAlignment());
    else if (s === "bottom")
      (w = this.top + p), (M = this._getXAxisLabelAlignment());
    else if (s === "left") {
      const T = this._getYAxisLabelAlignment(u);
      (M = T.textAlign), (_ = T.x);
    } else if (s === "right") {
      const T = this._getYAxisLabelAlignment(u);
      (M = T.textAlign), (_ = T.x);
    } else if (e === "x") {
      if (s === "center") w = (t.top + t.bottom) / 2 + g;
      else if (N(s)) {
        const T = Object.keys(s)[0],
          F = s[T];
        w = this.chart.scales[T].getPixelForValue(F) + g;
      }
      M = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center") _ = (t.left + t.right) / 2 - g;
      else if (N(s)) {
        const T = Object.keys(s)[0],
          F = s[T];
        _ = this.chart.scales[T].getPixelForValue(F);
      }
      M = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? (L = "top") : l === "end" && (L = "bottom"));
    const A = this._getLabelSizes();
    for (b = 0, x = a.length; b < x; ++b) {
      (v = a[b]), (y = v.label);
      const T = o.setContext(this.getContext(b));
      (k = this.getPixelForTick(b) + o.labelOffset),
        (C = this._resolveTickFontOptions(b)),
        (S = C.lineHeight),
        (O = tt(y) ? y.length : 1);
      const F = O / 2,
        B = T.color,
        z = T.textStrokeColor,
        q = T.textStrokeWidth;
      let at,
        j = M;
      if (
        (r
          ? ((_ = k),
            M === "inner" &&
              (j =
                b === x - 1
                  ? this.options.reverse
                    ? "left"
                    : "right"
                  : b === 0
                  ? this.options.reverse
                    ? "right"
                    : "left"
                  : "center"),
            (E =
              s === "top"
                ? c === "near" || f !== 0
                  ? -O * S + S / 2
                  : c === "center"
                  ? -A.highest.height / 2 - F * S + S
                  : -A.highest.height + S / 2
                : c === "near" || f !== 0
                ? S / 2
                : c === "center"
                ? A.highest.height / 2 - F * S
                : A.highest.height - O * S),
            h && (E *= -1),
            f === 0 || T.showLabelBackdrop || (_ += (S / 2) * Math.sin(f)))
          : ((w = k), (E = ((1 - O) * S) / 2)),
        T.showLabelBackdrop)
      ) {
        const nt = wt(T.backdropPadding),
          ft = A.heights[b],
          gt = A.widths[b];
        let Tt = E - nt.top,
          pt = 0 - nt.left;
        switch (L) {
          case "middle":
            Tt -= ft / 2;
            break;
          case "bottom":
            Tt -= ft;
        }
        switch (M) {
          case "center":
            pt -= gt / 2;
            break;
          case "right":
            pt -= gt;
            break;
          case "inner":
            b === x - 1 ? (pt -= gt) : b > 0 && (pt -= gt / 2);
        }
        at = {
          left: pt,
          top: Tt,
          width: gt + nt.width,
          height: ft + nt.height,
          color: T.backdropColor,
        };
      }
      m.push({
        label: y,
        font: C,
        textOffset: E,
        options: {
          rotation: f,
          color: B,
          strokeColor: z,
          strokeWidth: q,
          textAlign: j,
          textBaseline: L,
          translation: [_, w],
          backdrop: at,
        },
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Rt(this.labelRotation)) return t === "top" ? "left" : "right";
    let n = "center";
    return (
      e.align === "start"
        ? (n = "left")
        : e.align === "end"
        ? (n = "right")
        : e.align === "inner" && (n = "inner"),
      n
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: n, mirror: s, padding: o },
      } = this.options,
      r = t + o,
      a = this._getLabelSizes().widest.width;
    let l, c;
    return (
      e === "left"
        ? s
          ? ((c = this.right + o),
            n === "near"
              ? (l = "left")
              : n === "center"
              ? ((l = "center"), (c += a / 2))
              : ((l = "right"), (c += a)))
          : ((c = this.right - r),
            n === "near"
              ? (l = "right")
              : n === "center"
              ? ((l = "center"), (c -= a / 2))
              : ((l = "left"), (c = this.left)))
        : e === "right"
        ? s
          ? ((c = this.left + o),
            n === "near"
              ? (l = "right")
              : n === "center"
              ? ((l = "center"), (c -= a / 2))
              : ((l = "left"), (c -= a)))
          : ((c = this.left + r),
            n === "near"
              ? (l = "left")
              : n === "center"
              ? ((l = "center"), (c += a / 2))
              : ((l = "right"), (c = this.right)))
        : (l = "right"),
      { textAlign: l, x: c }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    return e === "left" || e === "right"
      ? { top: 0, left: this.left, bottom: t.height, right: this.right }
      : e === "top" || e === "bottom"
      ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
      : void 0;
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: n,
      top: s,
      width: o,
      height: r,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(n, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const n = this.ticks.findIndex((s) => s.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      n = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, d) => {
      d.width &&
        d.color &&
        (n.save(),
        (n.lineWidth = d.width),
        (n.strokeStyle = d.color),
        n.setLineDash(d.borderDash || []),
        (n.lineDashOffset = d.borderDashOffset),
        n.beginPath(),
        n.moveTo(l.x, l.y),
        n.lineTo(c.x, c.y),
        n.stroke(),
        n.restore());
    };
    if (e.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        e.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          e.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { border: n, grid: s },
      } = this,
      o = n.setContext(this.getContext()),
      r = n.display ? o.width : 0;
    if (!r) return;
    const a = s.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, d, h, u;
    this.isHorizontal()
      ? ((c = fe(t, this.left, r) - r / 2),
        (d = fe(t, this.right, a) + a / 2),
        (h = u = l))
      : ((h = fe(t, this.top, r) - r / 2),
        (u = fe(t, this.bottom, a) + a / 2),
        (c = d = l)),
      e.save(),
      (e.lineWidth = o.width),
      (e.strokeStyle = o.color),
      e.beginPath(),
      e.moveTo(c, h),
      e.lineTo(d, u),
      e.stroke(),
      e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const e = this.ctx,
      n = this._computeLabelArea();
    n && fn(e, n);
    const s = this.getLabelItems(t);
    for (const o of s) {
      const r = o.options,
        a = o.font;
      Ce(e, o.label, 0, o.textOffset, a, r);
    }
    n && gn(e);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: n, reverse: s },
    } = this;
    if (!n.display) return;
    const o = ut(n.font),
      r = wt(n.padding),
      a = n.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || N(e)
      ? ((l += r.bottom),
        tt(n.text) && (l += o.lineHeight * (n.text.length - 1)))
      : (l += r.top);
    const {
      titleX: c,
      titleY: d,
      maxWidth: h,
      rotation: u,
    } = (function (g, p, f, m) {
      const { top: b, left: x, bottom: v, right: y, chart: _ } = g,
        { chartArea: w, scales: M } = _;
      let k,
        C,
        S,
        O = 0;
      const E = v - b,
        L = y - x;
      if (g.isHorizontal()) {
        if (((C = yt(m, x, y)), N(f))) {
          const A = Object.keys(f)[0],
            T = f[A];
          S = M[A].getPixelForValue(T) + E - p;
        } else
          S = f === "center" ? (w.bottom + w.top) / 2 + E - p : ar(g, f, p);
        k = y - x;
      } else {
        if (N(f)) {
          const A = Object.keys(f)[0],
            T = f[A];
          C = M[A].getPixelForValue(T) - L + p;
        } else
          C = f === "center" ? (w.left + w.right) / 2 - L + p : ar(g, f, p);
        (S = yt(m, v, b)), (O = f === "left" ? -rt : rt);
      }
      return { titleX: C, titleY: S, maxWidth: k, rotation: O };
    })(this, l, e, a);
    Ce(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: h,
      rotation: u,
      textAlign: Rd(a, e, s),
      textBaseline: "middle",
      translation: [c, d],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      n = V(t.grid && t.grid.z, -1),
      s = V(t.border && t.border.z, 0);
    return this._isVisible() && this.draw === Ae.prototype.draw
      ? [
          {
            z: n,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ]
      : [
          {
            z: e,
            draw: (o) => {
              this.draw(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      n = this.axis + "AxisID",
      s = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[n] !== this.id || (t && a.type !== t) || s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    return ut(this.options.ticks.setContext(this.getContext(t)).font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Vi {
  constructor(t, e, n) {
    (this.type = t),
      (this.scope = e),
      (this.override = n),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let n;
    (function (a) {
      return "id" in a && "defaults" in a;
    })(e) && (n = this.register(e));
    const s = this.items,
      o = t.id,
      r = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in s ||
        ((s[o] = t),
        (function (a, l, c) {
          const d = mi(Object.create(null), [
            c ? st.get(c) : {},
            st.get(l),
            a.defaults,
          ]);
          st.set(l, d),
            a.defaultRoutes &&
              (function (h, u) {
                Object.keys(u).forEach((g) => {
                  const p = g.split("."),
                    f = p.pop(),
                    m = [h].concat(p).join("."),
                    b = u[g].split("."),
                    x = b.pop(),
                    v = b.join(".");
                  st.route(m, f, v, x);
                });
              })(l, a.defaultRoutes),
            a.descriptors && st.describe(l, a.descriptors);
        })(t, r, n),
        this.override && st.override(t.id, t.overrides)),
      r
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      n = t.id,
      s = this.scope;
    n in e && delete e[n],
      s && n in st[s] && (delete st[s][n], this.override && delete De[n]);
  }
}
class Fd {
  constructor() {
    (this.controllers = new Vi(Ft, "datasets", !0)),
      (this.elements = new Vi(zt, "elements")),
      (this.plugins = new Vi(Object, "plugins")),
      (this.scales = new Vi(Ae, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, n) {
    [...e].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : U(s, (r) => {
            const a = n || this._getRegistryForType(r);
            this._exec(t, a, r);
          });
    });
  }
  _exec(t, e, n) {
    const s = _s(t);
    Z(n["before" + s], [], n), e[t](n), Z(n["after" + s], [], n);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const n = this._typedRegistries[e];
      if (n.isForType(t)) return n;
    }
    return this.plugins;
  }
  _get(t, e, n) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return s;
  }
}
var Vt = new Fd();
class zd {
  constructor() {
    this._init = [];
  }
  notify(t, e, n, s) {
    e === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      r = this._notify(o, t, e, n);
    return (
      e === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      r
    );
  }
  _notify(t, e, n, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin;
      if (Z(r[n], [e, s, o.options], r) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    W(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const n = t && t.config,
      s = V(n.options && n.options.plugins, {}),
      o = (function (r) {
        const a = {},
          l = [],
          c = Object.keys(Vt.plugins.items);
        for (let h = 0; h < c.length; h++) l.push(Vt.getPlugin(c[h]));
        const d = r.plugins || [];
        for (let h = 0; h < d.length; h++) {
          const u = d[h];
          l.indexOf(u) === -1 && (l.push(u), (a[u.id] = !0));
        }
        return { plugins: l, localIds: a };
      })(n);
    return s !== !1 || e
      ? (function (r, { plugins: a, localIds: l }, c, d) {
          const h = [],
            u = r.getContext();
          for (const g of a) {
            const p = g.id,
              f = Bd(c[p], d);
            f !== null &&
              h.push({
                plugin: g,
                options: Kd(r.config, { plugin: g, local: l[p] }, f, u),
              });
          }
          return h;
        })(t, o, s, e)
      : [];
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      n = this._cache,
      s = (o, r) =>
        o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, n), t, "stop"), this._notify(s(n, e), t, "start");
  }
}
function Bd(i, t) {
  return t || i !== !1 ? (i === !0 ? {} : i) : null;
}
function Kd(i, { plugin: t, local: e }, n, s) {
  const o = i.pluginScopeKeys(t),
    r = i.getOptionScopes(n, o);
  return (
    e && t.defaults && r.push(t.defaults),
    i.createResolver(r, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Jn(i, t) {
  const e = st.datasets[i] || {};
  return (
    ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
  );
}
function dr(i) {
  if (i === "x" || i === "y" || i === "r") return i;
}
function Qn(i, ...t) {
  if (dr(i)) return i;
  for (const n of t) {
    const s =
      n.axis ||
      ((e = n.position) === "top" || e === "bottom"
        ? "x"
        : e === "left" || e === "right"
        ? "y"
        : void 0) ||
      (i.length > 1 && dr(i[0].toLowerCase()));
    if (s) return s;
  }
  var e;
  throw new Error(
    `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`
  );
}
function ur(i, t, e) {
  if (e[t + "AxisID"] === i) return { axis: t };
}
function Vd(i, t) {
  const e = De[i.type] || { scales: {} },
    n = t.scales || {},
    s = Jn(i.type, t),
    o = Object.create(null);
  return (
    Object.keys(n).forEach((r) => {
      const a = n[r];
      if (!N(a) || a._proxy) return;
      const l = Qn(
          r,
          a,
          (function (h, u) {
            if (u.data && u.data.datasets) {
              const g = u.data.datasets.filter(
                (p) => p.xAxisID === h || p.yAxisID === h
              );
              if (g.length) return ur(h, "x", g[0]) || ur(h, "y", g[0]);
            }
            return {};
          })(r, i),
          st.scales[a.type]
        ),
        c = (function (h, u) {
          return h === u ? "_index_" : "_value_";
        })(l, s),
        d = e.scales || {};
      o[r] = ai(Object.create(null), [{ axis: l }, a, d[l], d[c]]);
    }),
    i.data.datasets.forEach((r) => {
      const a = r.type || i.type,
        l = r.indexAxis || Jn(a, t),
        c = (De[a] || {}).scales || {};
      Object.keys(c).forEach((d) => {
        const h = (function (g, p) {
            let f = g;
            return (
              g === "_index_"
                ? (f = p)
                : g === "_value_" && (f = p === "x" ? "y" : "x"),
              f
            );
          })(d, l),
          u = r[h + "AxisID"] || h;
        (o[u] = o[u] || Object.create(null)),
          ai(o[u], [{ axis: h }, n[u], c[d]]);
      });
    }),
    Object.keys(o).forEach((r) => {
      const a = o[r];
      ai(a, [st.scales[a.type], st.scale]);
    }),
    o
  );
}
function fr(i) {
  const t = i.options || (i.options = {});
  (t.plugins = V(t.plugins, {})), (t.scales = Vd(i, t));
}
function gr(i) {
  return (
    ((i = i || {}).datasets = i.datasets || []), (i.labels = i.labels || []), i
  );
}
const pr = new Map(),
  el = new Set();
function Ni(i, t) {
  let e = pr.get(i);
  return e || ((e = t()), pr.set(i, e), el.add(e)), e;
}
const qe = (i, t, e) => {
  const n = le(t, e);
  n !== void 0 && i.add(n);
};
class Nd {
  constructor(t) {
    (this._config = (function (e) {
      return ((e = e || {}).data = gr(e.data)), fr(e), e;
    })(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = gr(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), fr(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ni(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ni(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Ni(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id;
    return Ni(`${this.type}-plugin-${e}`, () => [
      [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const n = this._scopeCache;
    let s = n.get(t);
    return (s && !e) || ((s = new Map()), n.set(t, s)), s;
  }
  getOptionScopes(t, e, n) {
    const { options: s, type: o } = this,
      r = this._cachedScopes(t, n),
      a = r.get(e);
    if (a) return a;
    const l = new Set();
    e.forEach((d) => {
      t && (l.add(t), d.forEach((h) => qe(l, t, h))),
        d.forEach((h) => qe(l, s, h)),
        d.forEach((h) => qe(l, De[o] || {}, h)),
        d.forEach((h) => qe(l, st, h)),
        d.forEach((h) => qe(l, qn, h));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), el.has(e) && r.set(e, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, De[e] || {}, st.datasets[e] || {}, { type: e }, st, qn];
  }
  resolveNamedOptions(t, e, n, s = [""]) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: a } = mr(this._resolverCache, t, s);
    let l = r;
    (function (c, d) {
      const { isScriptable: h, isIndexable: u } = Va(c);
      for (const g of d) {
        const p = h(g),
          f = u(g),
          m = (f || p) && c[g];
        if ((p && (ce(m) || Wd(m))) || (f && tt(m))) return !0;
      }
      return !1;
    })(r, e) &&
      ((o.$shared = !1),
      (l = Fe(r, (n = ce(n) ? n() : n), this.createResolver(t, n, a))));
    for (const c of e) o[c] = l[c];
    return o;
  }
  createResolver(t, e, n = [""], s) {
    const { resolver: o } = mr(this._resolverCache, t, n);
    return N(e) ? Fe(o, e, void 0, s) : o;
  }
}
function mr(i, t, e) {
  let n = i.get(t);
  n || ((n = new Map()), i.set(t, n));
  const s = e.join();
  let o = n.get(s);
  return (
    o ||
      ((o = {
        resolver: Cs(t, e),
        subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover")),
      }),
      n.set(s, o)),
    o
  );
}
const Wd = (i) => N(i) && Object.getOwnPropertyNames(i).some((t) => ce(i[t])),
  jd = ["top", "bottom", "left", "right", "chartArea"];
function br(i, t) {
  return i === "top" || i === "bottom" || (jd.indexOf(i) === -1 && t === "x");
}
function xr(i, t) {
  return function (e, n) {
    return e[i] === n[i] ? e[t] - n[t] : e[i] - n[i];
  };
}
function yr(i) {
  const t = i.chart,
    e = t.options.animation;
  t.notifyPlugins("afterRender"), Z(e && e.onComplete, [i], t);
}
function Hd(i) {
  const t = i.chart,
    e = t.options.animation;
  Z(e && e.onProgress, [i], t);
}
function il(i) {
  return (
    Ps() && typeof i == "string"
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const Zi = {},
  vr = (i) => {
    const t = il(i);
    return Object.values(Zi)
      .filter((e) => e.canvas === t)
      .pop();
  };
function $d(i, t, e) {
  const n = Object.keys(i);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const r = i[s];
      delete i[s], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Wi(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
class It {
  static register(...t) {
    Vt.add(...t), _r();
  }
  static unregister(...t) {
    Vt.remove(...t), _r();
  }
  constructor(t, e) {
    const n = (this.config = new Nd(e)),
      s = il(t),
      o = vr(s);
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas with ID '" +
          o.canvas.id +
          "' can be reused."
      );
    const r = n.createResolver(n.chartOptionScopes(), this.getContext());
    (this.platform = new (n.platform ||
      (function (h) {
        return !Ps() ||
          (typeof OffscreenCanvas != "undefined" &&
            h instanceof OffscreenCanvas)
          ? Sd
          : Ed;
      })(s))()),
      this.platform.updateConfig(n);
    const a = this.platform.acquireContext(s, r.aspectRatio),
      l = a && a.canvas,
      c = l && l.height,
      d = l && l.width;
    (this.id = Ah()),
      (this.ctx = a),
      (this.canvas = l),
      (this.width = d),
      (this.height = c),
      (this._options = r),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new zd()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = (function (h, u) {
        let g;
        return function (...p) {
          return (
            u ? (clearTimeout(g), (g = setTimeout(h, u, p))) : h.apply(this, p),
            u
          );
        };
      })((h) => this.update(h), r.resizeDelay || 0)),
      (this._dataChanges = []),
      (Zi[this.id] = this),
      a &&
        l &&
        (Xt.listen(this, "complete", yr),
        Xt.listen(this, "progress", Hd),
        this._initialize(),
        this.attached && this.update());
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: e },
      width: n,
      height: s,
      _aspectRatio: o,
    } = this;
    return W(t) ? (e && o ? o : s ? n / s : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Vt;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : Ko(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return Io(this.canvas, this.ctx), this;
  }
  stop() {
    return Xt.stop(this), this;
  }
  resize(t, e) {
    Xt.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: e })
      : this._resize(t, e);
  }
  _resize(t, e) {
    const n = this.options,
      s = this.canvas,
      o = n.maintainAspectRatio && this.aspectRatio,
      r = this.platform.getMaximumSize(s, t, e, o),
      a = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
      l = this.width ? "resize" : "attach";
    (this.width = r.width),
      (this.height = r.height),
      (this._aspectRatio = this.aspectRatio),
      Ko(this, a, !0) &&
        (this.notifyPlugins("resize", { size: r }),
        Z(n.onResize, [this, r], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    U(this.options.scales || {}, (t, e) => {
      t.id = e;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      e = t.scales,
      n = this.scales,
      s = Object.keys(n).reduce((r, a) => ((r[a] = !1), r), {});
    let o = [];
    e &&
      (o = o.concat(
        Object.keys(e).map((r) => {
          const a = e[r],
            l = Qn(r, a),
            c = l === "r",
            d = l === "x";
          return {
            options: a,
            dposition: c ? "chartArea" : d ? "bottom" : "left",
            dtype: c ? "radialLinear" : d ? "category" : "linear",
          };
        })
      )),
      U(o, (r) => {
        const a = r.options,
          l = a.id,
          c = Qn(l, a),
          d = V(a.type, r.dtype);
        (a.position !== void 0 && br(a.position, c) === br(r.dposition)) ||
          (a.position = r.dposition),
          (s[l] = !0);
        let h = null;
        l in n && n[l].type === d
          ? (h = n[l])
          : ((h = new (Vt.getScale(d))({
              id: l,
              type: d,
              ctx: this.ctx,
              chart: this,
            })),
            (n[h.id] = h)),
          h.init(a, t);
      }),
      U(s, (r, a) => {
        r || delete n[a];
      }),
      U(n, (r) => {
        _t.configure(this, r, r.options), _t.addBox(this, r);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      e = this.data.datasets.length,
      n = t.length;
    if ((t.sort((s, o) => s.index - o.index), n > e)) {
      for (let s = e; s < n; ++s) this._destroyDatasetMeta(s);
      t.splice(e, n - e);
    }
    this._sortedMetasets = t.slice(0).sort(xr("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: e },
    } = this;
    t.length > e.length && delete this._stacks,
      t.forEach((n, s) => {
        e.filter((o) => o === n._dataset).length === 0 &&
          this._destroyDatasetMeta(s);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      e = this.data.datasets;
    let n, s;
    for (this._removeUnreferencedMetasets(), n = 0, s = e.length; n < s; n++) {
      const o = e[n];
      let r = this.getDatasetMeta(n);
      const a = o.type || this.config.type;
      if (
        (r.type &&
          r.type !== a &&
          (this._destroyDatasetMeta(n), (r = this.getDatasetMeta(n))),
        (r.type = a),
        (r.indexAxis = o.indexAxis || Jn(a, this.options)),
        (r.order = o.order || 0),
        (r.index = n),
        (r.label = "" + o.label),
        (r.visible = this.isDatasetVisible(n)),
        r.controller)
      )
        r.controller.updateIndex(n), r.controller.linkScales();
      else {
        const l = Vt.getController(a),
          { datasetElementType: c, dataElementType: d } = st.datasets[a];
        Object.assign(l, {
          dataElementType: Vt.getElement(d),
          datasetElementType: c && Vt.getElement(c),
        }),
          (r.controller = new l(this, n)),
          t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    U(
      this.data.datasets,
      (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const n = (this._options = e.createResolver(
        e.chartOptionScopes(),
        this.getContext()
      )),
      s = (this._animationsDisabled = !n.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, d = this.data.datasets.length; c < d; c++) {
      const { controller: h } = this.getDatasetMeta(c),
        u = !s && o.indexOf(h) === -1;
      h.buildOrUpdateElements(u), (r = Math.max(+h.getMaxOverflow(), r));
    }
    (r = this._minPadding = n.layout.autoPadding ? r : 0),
      this._updateLayout(r),
      s ||
        U(o, (c) => {
          c.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins("afterUpdate", { mode: t }),
      this._layers.sort(xr("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l
      ? this._eventHandler(l, !0)
      : a.length && this._updateHoverStyles(a, a, !0),
      this.render();
  }
  _updateScales() {
    U(this.scales, (t) => {
      _t.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      n = new Set(t.events);
    (So(e, n) && !!this._responsiveListeners === t.responsive) ||
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      e = this._getUniformDataChanges() || [];
    for (const { method: n, start: s, count: o } of e)
      $d(t, s, n === "_removeElements" ? -o : o);
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const e = this.data.datasets.length,
      n = (o) =>
        new Set(
          t
            .filter((r) => r[0] === o)
            .map((r, a) => a + "," + r.splice(1).join(","))
        ),
      s = n(0);
    for (let o = 1; o < e; o++) if (!So(s, n(o))) return;
    return Array.from(s)
      .map((o) => o.split(","))
      .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    _t.update(this, this.width, this.height, t);
    const e = this.chartArea,
      n = e.width <= 0 || e.height <= 0;
    (this._layers = []),
      U(
        this.boxes,
        (s) => {
          (n && s.position === "chartArea") ||
            (s.configure && s.configure(), this._layers.push(...s._layers()));
        },
        this
      ),
      this._layers.forEach((s, o) => {
        s._idx = o;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this._updateDataset(e, ce(t) ? t({ datasetIndex: e }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, e) {
    const n = this.getDatasetMeta(t),
      s = { meta: n, index: t, mode: e, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 &&
      (n.controller._update(e),
      (s.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (Xt.has(this)
        ? this.attached && !Xt.running(this) && Xt.start(this)
        : (this.draw(), yr({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: s } = this._resizeBeforeDraw;
      this._resize(n, s), (this._resizeBeforeDraw = null);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      n = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const r = e[s];
      (t && !r.visible) || n.push(r);
    }
    return n;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx,
      n = t._clip,
      s = !n.disabled,
      o = (function (a, l) {
        const { xScale: c, yScale: d } = a;
        return c && d
          ? {
              left: Wi(c, l, "left"),
              right: Wi(c, l, "right"),
              top: Wi(d, l, "top"),
              bottom: Wi(d, l, "bottom"),
            }
          : l;
      })(t, this.chartArea),
      r = { meta: t, index: t.index, cancelable: !0 };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 &&
      (s &&
        fn(e, {
          left: n.left === !1 ? 0 : o.left - n.left,
          right: n.right === !1 ? this.width : o.right + n.right,
          top: n.top === !1 ? 0 : o.top - n.top,
          bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom,
        }),
      t.controller.draw(),
      s && gn(e),
      (r.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return te(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, n, s) {
    const o = _d.modes[e];
    return typeof o == "function" ? o(this, t, n, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      n = this._metasets;
    let s = n.filter((o) => o && o._dataset === e).pop();
    return (
      s ||
        ((s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        n.push(s)),
      s
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = he(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e) return !1;
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    this.getDatasetMeta(t).hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, n) {
    const s = n ? "show" : "hide",
      o = this.getDatasetMeta(t),
      r = o.controller._resolveAnimations(void 0, s);
    bi(e)
      ? ((o.data[e].hidden = !n), this.update())
      : (this.setDatasetVisibility(t, n),
        r.update(o, { visible: n }),
        this.update((a) => (a.datasetIndex === t ? s : void 0)));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (
      this.stop(), Xt.remove(this), t = 0, e = this.data.datasets.length;
      t < e;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        Io(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      delete Zi[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      e = this.platform,
      n = (o, r) => {
        e.addEventListener(this, o, r), (t[o] = r);
      },
      s = (o, r, a) => {
        (o.offsetX = r), (o.offsetY = a), this._eventHandler(o);
      };
    U(this.options.events, (o) => n(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      e = this.platform,
      n = (l, c) => {
        e.addEventListener(this, l, c), (t[l] = c);
      },
      s = (l, c) => {
        t[l] && (e.removeEventListener(this, l, c), delete t[l]);
      },
      o = (l, c) => {
        this.canvas && this.resize(l, c);
      };
    let r;
    const a = () => {
      s("attach", a),
        (this.attached = !0),
        this.resize(),
        n("resize", o),
        n("detach", r);
    };
    (r = () => {
      (this.attached = !1),
        s("resize", o),
        this._stop(),
        this._resize(0, 0),
        n("attach", a);
    }),
      e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    U(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      U(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, e, n) {
    const s = n ? "set" : "remove";
    let o, r, a, l;
    for (
      e === "dataset" &&
        ((o = this.getDatasetMeta(t[0].datasetIndex)),
        o.controller["_" + s + "DatasetHoverStyle"]()),
        a = 0,
        l = t.length;
      a < l;
      ++a
    ) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [],
      n = t.map(({ datasetIndex: s, index: o }) => {
        const r = this.getDatasetMeta(s);
        if (!r) throw new Error("No dataset found at index " + s);
        return { datasetIndex: s, element: r.data[o], index: o };
      });
    !Qi(n, e) &&
      ((this._active = n),
      (this._lastEvent = null),
      this._updateHoverStyles(n, e));
  }
  notifyPlugins(t, e, n) {
    return this._plugins.notify(this, t, e, n);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, n) {
    const s = this.options.hover,
      o = (l, c) =>
        l.filter(
          (d) =>
            !c.some(
              (h) => d.datasetIndex === h.datasetIndex && d.index === h.index
            )
        ),
      r = o(e, t),
      a = n ? t : o(t, e);
    r.length && this.updateHoverStyle(r, s.mode, !1),
      a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, e) {
    const n = {
        event: t,
        replay: e,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      s = (r) =>
        (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, s) === !1) return;
    const o = this._handleEvent(t, e, n.inChartArea);
    return (
      (n.cancelable = !1),
      this.notifyPlugins("afterEvent", n, s),
      (o || n.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, e, n) {
    const { _active: s = [], options: o } = this,
      r = e,
      a = this._getActiveElements(t, s, n, r),
      l = (function (h) {
        return (
          h.type === "mouseup" || h.type === "click" || h.type === "contextmenu"
        );
      })(t),
      c = (function (h, u, g, p) {
        return g && h.type !== "mouseout" ? (p ? u : h) : null;
      })(t, this._lastEvent, n, l);
    n &&
      ((this._lastEvent = null),
      Z(o.onHover, [t, a, this], this),
      l && Z(o.onClick, [t, a, this], this));
    const d = !Qi(a, s);
    return (
      (d || e) && ((this._active = a), this._updateHoverStyles(a, s, e)),
      (this._lastEvent = c),
      d
    );
  }
  _getActiveElements(t, e, n, s) {
    if (t.type === "mouseout") return [];
    if (!n) return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}
P(It, "defaults", st),
  P(It, "instances", Zi),
  P(It, "overrides", De),
  P(It, "registry", Vt),
  P(It, "version", "4.4.3"),
  P(It, "getChart", vr);
function _r() {
  return U(It.instances, (i) => i._plugins.invalidate());
}
function Ud(i, t, e, n) {
  const s = Ds(i.options.borderRadius, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd",
    ]),
    o = (e - t) / 2,
    r = Math.min(o, (n * t) / 2),
    a = (l) => {
      const c = ((e - Math.min(o, l)) * n) / 2;
      return mt(l, 0, Math.min(o, c));
    };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: mt(s.innerStart, 0, r),
    innerEnd: mt(s.innerEnd, 0, r),
  };
}
function Le(i, t, e, n) {
  return { x: e + i * Math.cos(t), y: n + i * Math.sin(t) };
}
function on(i, t, e, n, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = t,
    h = Math.max(t.outerRadius + n + e - c, 0),
    u = d > 0 ? d + n + e + c : 0;
  let g = 0;
  const p = s - l;
  if (n) {
    const A = ((d > 0 ? d - n : 0) + (h > 0 ? h - n : 0)) / 2;
    g = (p - (A !== 0 ? (p * A) / (A + n) : p)) / 2;
  }
  const f = (p - Math.max(0.001, p * h - e / it) / h) / 2,
    m = l + f + g,
    b = s - f - g,
    {
      outerStart: x,
      outerEnd: v,
      innerStart: y,
      innerEnd: _,
    } = Ud(t, u, h, b - m),
    w = h - x,
    M = h - v,
    k = m + x / w,
    C = b - v / M,
    S = u + y,
    O = u + _,
    E = m + y / S,
    L = b - _ / O;
  if ((i.beginPath(), o)) {
    const A = (k + C) / 2;
    if ((i.arc(r, a, h, k, A), i.arc(r, a, h, A, C), v > 0)) {
      const z = Le(M, C, r, a);
      i.arc(z.x, z.y, v, C, b + rt);
    }
    const T = Le(O, b, r, a);
    if ((i.lineTo(T.x, T.y), _ > 0)) {
      const z = Le(O, L, r, a);
      i.arc(z.x, z.y, _, b + rt, L + Math.PI);
    }
    const F = (b - _ / u + (m + y / u)) / 2;
    if (
      (i.arc(r, a, u, b - _ / u, F, !0),
      i.arc(r, a, u, F, m + y / u, !0),
      y > 0)
    ) {
      const z = Le(S, E, r, a);
      i.arc(z.x, z.y, y, E + Math.PI, m - rt);
    }
    const B = Le(w, m, r, a);
    if ((i.lineTo(B.x, B.y), x > 0)) {
      const z = Le(w, k, r, a);
      i.arc(z.x, z.y, x, m - rt, k);
    }
  } else {
    i.moveTo(r, a);
    const A = Math.cos(k) * h + r,
      T = Math.sin(k) * h + a;
    i.lineTo(A, T);
    const F = Math.cos(C) * h + r,
      B = Math.sin(C) * h + a;
    i.lineTo(F, B);
  }
  i.closePath();
}
function Yd(i, t, e, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t,
    {
      borderWidth: c,
      borderJoinStyle: d,
      borderDash: h,
      borderDashOffset: u,
    } = l,
    g = l.borderAlign === "inner";
  if (!c) return;
  i.setLineDash(h || []),
    (i.lineDashOffset = u),
    g
      ? ((i.lineWidth = 2 * c), (i.lineJoin = d || "round"))
      : ((i.lineWidth = c), (i.lineJoin = d || "bevel"));
  let p = t.endAngle;
  if (o) {
    on(i, t, e, n, p, s);
    for (let f = 0; f < o; ++f) i.stroke();
    isNaN(a) || (p = r + (a % et || et));
  }
  g &&
    (function (f, m, b) {
      const {
        startAngle: x,
        pixelMargin: v,
        x: y,
        y: _,
        outerRadius: w,
        innerRadius: M,
      } = m;
      let k = v / w;
      f.beginPath(),
        f.arc(y, _, w, x - k, b + k),
        M > v
          ? ((k = v / M), f.arc(y, _, M, b + k, x - k, !0))
          : f.arc(y, _, v, b + rt, x - rt),
        f.closePath(),
        f.clip();
    })(i, t, p),
    o || (on(i, t, e, n, p, s), i.stroke());
}
function wr(i, t, e = t) {
  (i.lineCap = V(e.borderCapStyle, t.borderCapStyle)),
    i.setLineDash(V(e.borderDash, t.borderDash)),
    (i.lineDashOffset = V(e.borderDashOffset, t.borderDashOffset)),
    (i.lineJoin = V(e.borderJoinStyle, t.borderJoinStyle)),
    (i.lineWidth = V(e.borderWidth, t.borderWidth)),
    (i.strokeStyle = V(e.borderColor, t.borderColor));
}
function qd(i, t, e) {
  i.lineTo(e.x, e.y);
}
function nl(i, t, e = {}) {
  const n = i.length,
    { start: s = 0, end: o = n - 1 } = e,
    { start: r, end: a } = t,
    l = Math.max(s, r),
    c = Math.min(o, a),
    d = (s < r && o < r) || (s > a && o > a);
  return {
    count: n,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? n + c - l : c - l,
  };
}
function Xd(i, t, e, n) {
  const { points: s, options: o } = t,
    { count: r, start: a, loop: l, ilen: c } = nl(s, e, n),
    d = (function (m) {
      return m.stepped
        ? Nh
        : m.tension || m.cubicInterpolationMode === "monotone"
        ? Wh
        : qd;
    })(o);
  let h,
    u,
    g,
    { move: p = !0, reverse: f } = n || {};
  for (h = 0; h <= c; ++h)
    (u = s[(a + (f ? c - h : h)) % r]),
      u.skip ||
        (p ? (i.moveTo(u.x, u.y), (p = !1)) : d(i, g, u, f, o.stepped),
        (g = u));
  return l && ((u = s[(a + (f ? c : 0)) % r]), d(i, g, u, f, o.stepped)), !!l;
}
function Gd(i, t, e, n) {
  const s = t.points,
    { count: o, start: r, ilen: a } = nl(s, e, n),
    { move: l = !0, reverse: c } = n || {};
  let d,
    h,
    u,
    g,
    p,
    f,
    m = 0,
    b = 0;
  const x = (y) => (r + (c ? a - y : y)) % o,
    v = () => {
      g !== p && (i.lineTo(m, p), i.lineTo(m, g), i.lineTo(m, f));
    };
  for (l && ((h = s[x(0)]), i.moveTo(h.x, h.y)), d = 0; d <= a; ++d) {
    if (((h = s[x(d)]), h.skip)) continue;
    const y = h.x,
      _ = h.y,
      w = 0 | y;
    w === u
      ? (_ < g ? (g = _) : _ > p && (p = _), (m = (b * m + y) / ++b))
      : (v(), i.lineTo(y, _), (u = w), (b = 0), (g = p = _)),
      (f = _);
  }
  v();
}
function ts(i) {
  const t = i.options,
    e = t.borderDash && t.borderDash.length;
  return i._decimated ||
    i._loop ||
    t.tension ||
    t.cubicInterpolationMode === "monotone" ||
    t.stepped ||
    e
    ? Xd
    : Gd;
}
const Zd = typeof Path2D == "function";
function Jd(i, t, e, n) {
  Zd && !t.options.segment
    ? (function (s, o, r, a) {
        let l = o._path;
        l || ((l = o._path = new Path2D()), o.path(l, r, a) && l.closePath()),
          wr(s, o.options),
          s.stroke(l);
      })(i, t, e, n)
    : (function (s, o, r, a) {
        const { segments: l, options: c } = o,
          d = ts(o);
        for (const h of l)
          wr(s, c, h.style),
            s.beginPath(),
            d(s, o, h, { start: r, end: r + a - 1 }) && s.closePath(),
            s.stroke();
      })(i, t, e, n);
}
class jt extends zt {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const n = this.options;
    if (
      (n.tension || n.cubicInterpolationMode === "monotone") &&
      !n.stepped &&
      !this._pointsUpdated
    ) {
      const s = n.spanGaps ? this._loop : this._fullLoop;
      ed(this._points, n, t, s, e), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return (
      this._segments ||
      (this._segments = (function (t, e) {
        const n = t.points,
          s = t.options.spanGaps,
          o = n.length;
        if (!o) return [];
        const r = !!t._loop,
          { start: a, end: l } = (function (c, d, h, u) {
            let g = 0,
              p = d - 1;
            if (h && !u) for (; g < d && !c[g].skip; ) g++;
            for (; g < d && c[g].skip; ) g++;
            for (g %= d, h && (p += g); p > g && c[p % d].skip; ) p--;
            return (p %= d), { start: g, end: p };
          })(n, o, r, s);
        return ld(
          t,
          s === !0
            ? [{ start: a, end: l, loop: r }]
            : (function (c, d, h, u) {
                const g = c.length,
                  p = [];
                let f,
                  m = d,
                  b = c[d];
                for (f = d + 1; f <= h; ++f) {
                  const x = c[f % g];
                  x.skip || x.stop
                    ? b.skip ||
                      ((u = !1),
                      p.push({ start: d % g, end: (f - 1) % g, loop: u }),
                      (d = m = x.stop ? f : null))
                    : ((m = f), b.skip && (d = f)),
                    (b = x);
                }
                return (
                  m !== null && p.push({ start: d % g, end: m % g, loop: u }), p
                );
              })(
                n,
                a,
                l < a ? l + o : l,
                !!t._fullLoop && a === 0 && l === o - 1
              ),
          n,
          e
        );
      })(this, this.options.segment))
    );
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      n = t.length;
    return n && e[t[n - 1].end];
  }
  interpolate(t, e) {
    const n = this.options,
      s = t[e],
      o = this.points,
      r = Ya(this, { property: e, start: s, end: s });
    if (!r.length) return;
    const a = [],
      l = (function (h) {
        return h.stepped
          ? rd
          : h.tension || h.cubicInterpolationMode === "monotone"
          ? ad
          : be;
      })(n);
    let c, d;
    for (c = 0, d = r.length; c < d; ++c) {
      const { start: h, end: u } = r[c],
        g = o[h],
        p = o[u];
      if (g === p) {
        a.push(g);
        continue;
      }
      const f = l(g, p, Math.abs((s - g[e]) / (p[e] - g[e])), n.stepped);
      (f[e] = t[e]), a.push(f);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, n) {
    return ts(this)(t, this, e, n);
  }
  path(t, e, n) {
    const s = this.segments,
      o = ts(this);
    let r = this._loop;
    (e = e || 0), (n = n || this.points.length - e);
    for (const a of s) r &= o(t, this, a, { start: e, end: e + n - 1 });
    return !!r;
  }
  draw(t, e, n, s) {
    const o = this.options || {};
    (this.points || []).length &&
      o.borderWidth &&
      (t.save(), Jd(t, this, n, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
P(jt, "id", "line"),
  P(jt, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  P(jt, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  P(jt, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill",
  });
function Mr(i, t, e, n) {
  const s = i.options,
    { [e]: o } = i.getProps([e], n);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Ke extends zt {
  constructor(e) {
    super();
    P(this, "parsed");
    P(this, "skip");
    P(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e);
  }
  inRange(e, n, s) {
    const o = this.options,
      { x: r, y: a } = this.getProps(["x", "y"], s);
    return (
      Math.pow(e - r, 2) + Math.pow(n - a, 2) <
      Math.pow(o.hitRadius + o.radius, 2)
    );
  }
  inXRange(e, n) {
    return Mr(this, e, "x", n);
  }
  inYRange(e, n) {
    return Mr(this, e, "y", n);
  }
  getCenterPoint(e) {
    const { x: n, y: s } = this.getProps(["x", "y"], e);
    return { x: n, y: s };
  }
  size(e) {
    let n = (e = e || this.options || {}).radius || 0;
    return (
      (n = Math.max(n, (n && e.hoverRadius) || 0)),
      2 * (n + ((n && e.borderWidth) || 0))
    );
  }
  draw(e, n) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !te(this, n, this.size(s) / 2) ||
      ((e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      (e.fillStyle = s.backgroundColor),
      Xn(e, s, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
P(Ke, "id", "point"),
  P(Ke, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  P(Ke, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
function sl(i, t) {
  const {
    x: e,
    y: n,
    base: s,
    width: o,
    height: r,
  } = i.getProps(["x", "y", "base", "width", "height"], t);
  let a, l, c, d, h;
  return (
    i.horizontal
      ? ((h = r / 2),
        (a = Math.min(e, s)),
        (l = Math.max(e, s)),
        (c = n - h),
        (d = n + h))
      : ((h = o / 2),
        (a = e - h),
        (l = e + h),
        (c = Math.min(n, s)),
        (d = Math.max(n, s))),
    { left: a, top: c, right: l, bottom: d }
  );
}
function ie(i, t, e, n) {
  return i ? 0 : mt(t, e, n);
}
function Qd(i) {
  const t = sl(i),
    e = t.right - t.left,
    n = t.bottom - t.top,
    s = (function (r, a, l) {
      const c = r.options.borderWidth,
        d = r.borderSkipped,
        h = Ka(c);
      return {
        t: ie(d.top, h.top, 0, l),
        r: ie(d.right, h.right, 0, a),
        b: ie(d.bottom, h.bottom, 0, l),
        l: ie(d.left, h.left, 0, a),
      };
    })(i, e / 2, n / 2),
    o = (function (r, a, l) {
      const { enableBorderRadius: c } = r.getProps(["enableBorderRadius"]),
        d = r.options.borderRadius,
        h = Me(d),
        u = Math.min(a, l),
        g = r.borderSkipped,
        p = c || N(d);
      return {
        topLeft: ie(!p || g.top || g.left, h.topLeft, 0, u),
        topRight: ie(!p || g.top || g.right, h.topRight, 0, u),
        bottomLeft: ie(!p || g.bottom || g.left, h.bottomLeft, 0, u),
        bottomRight: ie(!p || g.bottom || g.right, h.bottomRight, 0, u),
      };
    })(i, e / 2, n / 2);
  return {
    outer: { x: t.left, y: t.top, w: e, h: n, radius: o },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: n - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
      },
    },
  };
}
function Pn(i, t, e, n) {
  const s = t === null,
    o = e === null,
    r = i && !(s && o) && sl(i, n);
  return r && (s || Jt(t, r.left, r.right)) && (o || Jt(e, r.top, r.bottom));
}
function tu(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function On(i, t, e = {}) {
  const n = i.x !== e.x ? -t : 0,
    s = i.y !== e.y ? -t : 0,
    o = (i.x + i.w !== e.x + e.w ? t : 0) - n,
    r = (i.y + i.h !== e.y + e.h ? t : 0) - s;
  return { x: i.x + n, y: i.y + s, w: i.w + o, h: i.h + r, radius: i.radius };
}
var Ie,
  Qe,
  eu = Object.freeze({
    __proto__: null,
    ArcElement:
      ((Ie = class extends zt {
        constructor(t) {
          super();
          P(this, "circumference");
          P(this, "endAngle");
          P(this, "fullCircles");
          P(this, "innerRadius");
          P(this, "outerRadius");
          P(this, "pixelMargin");
          P(this, "startAngle");
          (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, n) {
          const s = this.getProps(["x", "y"], n),
            { angle: o, distance: r } = Aa(s, { x: t, y: e }),
            {
              startAngle: a,
              endAngle: l,
              innerRadius: c,
              outerRadius: d,
              circumference: h,
            } = this.getProps(
              [
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              n
            ),
            u = (this.options.spacing + this.options.borderWidth) / 2,
            g = V(h, l - a) >= et || xi(o, a, l),
            p = Jt(r, c + u, d + u);
          return g && p;
        }
        getCenterPoint(t) {
          const {
              x: e,
              y: n,
              startAngle: s,
              endAngle: o,
              innerRadius: r,
              outerRadius: a,
            } = this.getProps(
              [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
              t
            ),
            { offset: l, spacing: c } = this.options,
            d = (s + o) / 2,
            h = (r + a + c + l) / 2;
          return { x: e + Math.cos(d) * h, y: n + Math.sin(d) * h };
        }
        tooltipPosition(t) {
          return this.getCenterPoint(t);
        }
        draw(t) {
          const { options: e, circumference: n } = this,
            s = (e.offset || 0) / 4,
            o = (e.spacing || 0) / 2,
            r = e.circular;
          if (
            ((this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0),
            (this.fullCircles = n > et ? Math.floor(n / et) : 0),
            n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
          )
            return;
          t.save();
          const a = (this.startAngle + this.endAngle) / 2;
          t.translate(Math.cos(a) * s, Math.sin(a) * s);
          const l = s * (1 - Math.sin(Math.min(it, n || 0)));
          (t.fillStyle = e.backgroundColor),
            (t.strokeStyle = e.borderColor),
            (function (c, d, h, u, g) {
              const { fullCircles: p, startAngle: f, circumference: m } = d;
              let b = d.endAngle;
              if (p) {
                on(c, d, h, u, b, g);
                for (let x = 0; x < p; ++x) c.fill();
                isNaN(m) || (b = f + (m % et || et));
              }
              on(c, d, h, u, b, g), c.fill();
            })(t, this, l, o, r),
            Yd(t, this, l, o, r),
            t.restore();
        }
      }),
      P(Ie, "id", "arc"),
      P(Ie, "defaults", {
        borderAlign: "center",
        borderColor: "#fff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0,
      }),
      P(Ie, "defaultRoutes", { backgroundColor: "backgroundColor" }),
      P(Ie, "descriptors", {
        _scriptable: !0,
        _indexable: (t) => t !== "borderDash",
      }),
      Ie),
    BarElement:
      ((Qe = class extends zt {
        constructor(i) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            i && Object.assign(this, i);
        }
        draw(i) {
          const {
              inflateAmount: t,
              options: { borderColor: e, backgroundColor: n },
            } = this,
            { inner: s, outer: o } = Qd(this),
            r =
              (a = o.radius).topLeft ||
              a.topRight ||
              a.bottomLeft ||
              a.bottomRight
                ? yi
                : tu;
          var a;
          i.save(),
            (o.w === s.w && o.h === s.h) ||
              (i.beginPath(),
              r(i, On(o, t, s)),
              i.clip(),
              r(i, On(s, -t, o)),
              (i.fillStyle = e),
              i.fill("evenodd")),
            i.beginPath(),
            r(i, On(s, t)),
            (i.fillStyle = n),
            i.fill(),
            i.restore();
        }
        inRange(i, t, e) {
          return Pn(this, i, t, e);
        }
        inXRange(i, t) {
          return Pn(this, i, null, t);
        }
        inYRange(i, t) {
          return Pn(this, null, i, t);
        }
        getCenterPoint(i) {
          const {
            x: t,
            y: e,
            base: n,
            horizontal: s,
          } = this.getProps(["x", "y", "base", "horizontal"], i);
          return { x: s ? (t + n) / 2 : t, y: s ? e : (e + n) / 2 };
        }
        getRange(i) {
          return i === "x" ? this.width / 2 : this.height / 2;
        }
      }),
      P(Qe, "id", "bar"),
      P(Qe, "defaults", {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0,
      }),
      P(Qe, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      }),
      Qe),
    LineElement: jt,
    PointElement: Ke,
  });
const es = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)",
  ],
  kr = es.map((i) => i.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function Sr(i) {
  return es[i % es.length];
}
function Dr(i) {
  return kr[i % kr.length];
}
function iu(i) {
  let t = 0;
  return (e, n) => {
    const s = i.getDatasetMeta(n).controller;
    s instanceof ye
      ? (t = (function (o, r) {
          return (o.backgroundColor = o.data.map(() => Sr(r++))), r;
        })(e, t))
      : s instanceof di
      ? (t = (function (o, r) {
          return (o.backgroundColor = o.data.map(() => Dr(r++))), r;
        })(e, t))
      : s &&
        (t = (function (o, r) {
          return (o.borderColor = Sr(r)), (o.backgroundColor = Dr(r)), ++r;
        })(e, t));
  };
}
function Cr(i) {
  let t;
  for (t in i) if (i[t].borderColor || i[t].backgroundColor) return !0;
  return !1;
}
var ol = {
  id: "colors",
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(i, t, e) {
    if (!e.enabled) return;
    const {
        data: { datasets: n },
        options: s,
      } = i.config,
      { elements: o } = s;
    if (
      !e.forceOverride &&
      (Cr(n) ||
        ((r = s) && (r.borderColor || r.backgroundColor)) ||
        (o && Cr(o)))
    )
      return;
    var r;
    const a = iu(i);
    n.forEach(a);
  },
};
function rl(i) {
  if (i._decimated) {
    const t = i._data;
    delete i._decimated,
      delete i._data,
      Object.defineProperty(i, "data", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: t,
      });
  }
}
function Pr(i) {
  i.data.datasets.forEach((t) => {
    rl(t);
  });
}
var nu = {
  id: "decimation",
  defaults: { algorithm: "min-max", enabled: !1 },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) return void Pr(i);
    const n = i.width;
    i.data.datasets.forEach((s, o) => {
      const { _data: r, indexAxis: a } = s,
        l = i.getDatasetMeta(o),
        c = r || s.data;
      if (
        ei([a, i.options.indexAxis]) === "y" ||
        !l.controller.supportsDecimation
      )
        return;
      const d = i.scales[l.xAxisID];
      if ((d.type !== "linear" && d.type !== "time") || i.options.parsing)
        return;
      let { start: h, count: u } = (function (p, f) {
        const m = f.length;
        let b,
          x = 0;
        const { iScale: v } = p,
          { min: y, max: _, minDefined: w, maxDefined: M } = v.getUserBounds();
        return (
          w && (x = mt(Qt(f, v.axis, y).lo, 0, m - 1)),
          (b = M ? mt(Qt(f, v.axis, _).hi + 1, x, m) - x : m - x),
          { start: x, count: b }
        );
      })(l, c);
      if (u <= (e.threshold || 4 * n)) return void rl(s);
      let g;
      switch (
        (W(r) &&
          ((s._data = c),
          delete s.data,
          Object.defineProperty(s, "data", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return this._decimated;
            },
            set: function (p) {
              this._data = p;
            },
          })),
        e.algorithm)
      ) {
        case "lttb":
          g = (function (p, f, m, b, x) {
            const v = x.samples || b;
            if (v >= m) return p.slice(f, f + m);
            const y = [],
              _ = (m - 2) / (v - 2);
            let w = 0;
            const M = f + m - 1;
            let k,
              C,
              S,
              O,
              E,
              L = f;
            for (y[w++] = p[L], k = 0; k < v - 2; k++) {
              let A,
                T = 0,
                F = 0;
              const B = Math.floor((k + 1) * _) + 1 + f,
                z = Math.min(Math.floor((k + 2) * _) + 1, m) + f,
                q = z - B;
              for (A = B; A < z; A++) (T += p[A].x), (F += p[A].y);
              (T /= q), (F /= q);
              const at = Math.floor(k * _) + 1 + f,
                j = Math.min(Math.floor((k + 1) * _) + 1, m) + f,
                { x: nt, y: ft } = p[L];
              for (S = O = -1, A = at; A < j; A++)
                (O =
                  0.5 *
                  Math.abs(
                    (nt - T) * (p[A].y - ft) - (nt - p[A].x) * (F - ft)
                  )),
                  O > S && ((S = O), (C = p[A]), (E = A));
              (y[w++] = C), (L = E);
            }
            return (y[w++] = p[M]), y;
          })(c, h, u, n, e);
          break;
        case "min-max":
          g = (function (p, f, m, b) {
            let x,
              v,
              y,
              _,
              w,
              M,
              k,
              C,
              S,
              O,
              E = 0,
              L = 0;
            const A = [],
              T = f + m - 1,
              F = p[f].x,
              B = p[T].x - F;
            for (x = f; x < f + m; ++x) {
              (v = p[x]), (y = ((v.x - F) / B) * b), (_ = v.y);
              const z = 0 | y;
              if (z === w)
                _ < S ? ((S = _), (M = x)) : _ > O && ((O = _), (k = x)),
                  (E = (L * E + v.x) / ++L);
              else {
                const q = x - 1;
                if (!W(M) && !W(k)) {
                  const at = Math.min(M, k),
                    j = Math.max(M, k);
                  at !== C && at !== q && A.push(Ut(ht({}, p[at]), { x: E })),
                    j !== C && j !== q && A.push(Ut(ht({}, p[j]), { x: E }));
                }
                x > 0 && q !== C && A.push(p[q]),
                  A.push(v),
                  (w = z),
                  (L = 0),
                  (S = O = _),
                  (M = k = C = x);
              }
            }
            return A;
          })(c, h, u, n);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = g;
    });
  },
  destroy(i) {
    Pr(i);
  },
};
function An(i, t, e, n) {
  if (n) return;
  let s = t[i],
    o = e[i];
  return (
    i === "angle" && ((s = At(s)), (o = At(o))),
    { property: i, start: s, end: o }
  );
}
function Ts(i, t, e) {
  for (; t > i; t--) {
    const n = e[t];
    if (!isNaN(n.x) && !isNaN(n.y)) break;
  }
  return t;
}
function Or(i, t, e, n) {
  return i && t ? n(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Ar(i, t) {
  let e = [],
    n = !1;
  return (
    tt(i)
      ? ((n = !0), (e = i))
      : (e = (function (s, o) {
          const { x: r = null, y: a = null } = s || {},
            l = o.points,
            c = [];
          return (
            o.segments.forEach(({ start: d, end: h }) => {
              h = Ts(d, h, l);
              const u = l[d],
                g = l[h];
              a !== null
                ? (c.push({ x: u.x, y: a }), c.push({ x: g.x, y: a }))
                : r !== null &&
                  (c.push({ x: r, y: u.y }), c.push({ x: r, y: g.y }));
            }),
            c
          );
        })(i, t)),
    e.length
      ? new jt({ points: e, options: { tension: 0 }, _loop: n, _fullLoop: n })
      : null
  );
}
function Tr(i) {
  return i && i.fill !== !1;
}
function su(i, t, e) {
  let n = i[t].fill;
  const s = [t];
  let o;
  if (!e) return n;
  for (; n !== !1 && s.indexOf(n) === -1; ) {
    if (!ot(n)) return n;
    if (((o = i[n]), !o)) return !1;
    if (o.visible) return n;
    s.push(n), (n = o.fill);
  }
  return !1;
}
function ou(i, t, e) {
  const n = (function (o) {
    const r = o.options,
      a = r.fill;
    let l = V(a && a.target, a);
    return (
      l === void 0 && (l = !!r.backgroundColor),
      l === !1 || l === null ? !1 : l === !0 ? "origin" : l
    );
  })(i);
  if (N(n)) return !isNaN(n.value) && n;
  let s = parseFloat(n);
  return ot(s) && Math.floor(s) === s
    ? (function (o, r, a, l) {
        return (
          (o !== "-" && o !== "+") || (a = r + a),
          a === r || a < 0 || a >= l ? !1 : a
        );
      })(n[0], t, s, e)
    : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n;
}
function ru(i, t, e) {
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s],
      { first: r, last: a, point: l } = au(o, t, "x");
    if (!(!l || (r && a))) {
      if (r) n.unshift(l);
      else if ((i.push(l), !a)) break;
    }
  }
  i.push(...n);
}
function au(i, t, e) {
  const n = i.interpolate(t, e);
  if (!n) return {};
  const s = n[e],
    o = i.segments,
    r = i.points;
  let a = !1,
    l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c],
      h = r[d.start][e],
      u = r[d.end][e];
    if (Jt(s, h, u)) {
      (a = s === h), (l = s === u);
      break;
    }
  }
  return { first: a, last: l, point: n };
}
class Er {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, n) {
    const { x: s, y: o, radius: r } = this;
    return (
      (e = e || { start: 0, end: et }),
      t.arc(s, o, r, e.end, e.start, !0),
      !n.bounds
    );
  }
  interpolate(t) {
    const { x: e, y: n, radius: s } = this,
      o = t.angle;
    return { x: e + Math.cos(o) * s, y: n + Math.sin(o) * s, angle: o };
  }
}
function lu(i) {
  const { chart: t, fill: e, line: n } = i;
  if (ot(e))
    return (function (o, r) {
      const a = o.getDatasetMeta(r);
      return a && o.isDatasetVisible(r) ? a.dataset : null;
    })(t, e);
  if (e === "stack")
    return (function (o) {
      const { scale: r, index: a, line: l } = o,
        c = [],
        d = l.segments,
        h = l.points,
        u = (function (g, p) {
          const f = [],
            m = g.getMatchingVisibleMetas("line");
          for (let b = 0; b < m.length; b++) {
            const x = m[b];
            if (x.index === p) break;
            x.hidden || f.unshift(x.dataset);
          }
          return f;
        })(r, a);
      u.push(Ar({ x: null, y: r.bottom }, l));
      for (let g = 0; g < d.length; g++) {
        const p = d[g];
        for (let f = p.start; f <= p.end; f++) ru(c, h[f], u);
      }
      return new jt({ points: c, options: {} });
    })(i);
  if (e === "shape") return !0;
  const s = (function (o) {
    return (o.scale || {}).getPointPositionForValue
      ? (function (a) {
          const { scale: l, fill: c } = a,
            d = l.options,
            h = l.getLabels().length,
            u = d.reverse ? l.max : l.min,
            g = (function (f, m, b) {
              let x;
              return (
                (x =
                  f === "start"
                    ? b
                    : f === "end"
                    ? m.options.reverse
                      ? m.min
                      : m.max
                    : N(f)
                    ? f.value
                    : m.getBaseValue()),
                x
              );
            })(c, l, u),
            p = [];
          if (d.grid.circular) {
            const f = l.getPointPositionForValue(0, u);
            return new Er({
              x: f.x,
              y: f.y,
              radius: l.getDistanceFromCenterForValue(g),
            });
          }
          for (let f = 0; f < h; ++f) p.push(l.getPointPositionForValue(f, g));
          return p;
        })(o)
      : (function (a) {
          const { scale: l = {}, fill: c } = a,
            d = (function (h, u) {
              let g = null;
              return (
                h === "start"
                  ? (g = u.bottom)
                  : h === "end"
                  ? (g = u.top)
                  : N(h)
                  ? (g = u.getPixelForValue(h.value))
                  : u.getBasePixel && (g = u.getBasePixel()),
                g
              );
            })(c, l);
          if (ot(d)) {
            const h = l.isHorizontal();
            return { x: h ? d : null, y: h ? null : d };
          }
          return null;
        })(o);
  })(i);
  return s instanceof Er ? s : Ar(s, n);
}
function Tn(i, t, e) {
  const n = lu(t),
    { line: s, scale: o, axis: r } = t,
    a = s.options,
    l = a.fill,
    c = a.backgroundColor,
    { above: d = c, below: h = c } = l || {};
  n &&
    s.points.length &&
    (fn(i, e),
    (function (u, g) {
      const { line: p, target: f, above: m, below: b, area: x, scale: v } = g,
        y = p._loop ? "angle" : g.axis;
      u.save(),
        y === "x" &&
          b !== m &&
          (Lr(u, f, x.top),
          Ir(u, { line: p, target: f, color: m, scale: v, property: y }),
          u.restore(),
          u.save(),
          Lr(u, f, x.bottom)),
        Ir(u, { line: p, target: f, color: b, scale: v, property: y }),
        u.restore();
    })(i, {
      line: s,
      target: n,
      above: d,
      below: h,
      area: e,
      scale: o,
      axis: r,
    }),
    gn(i));
}
function Lr(i, t, e) {
  const { segments: n, points: s } = t;
  let o = !0,
    r = !1;
  i.beginPath();
  for (const a of n) {
    const { start: l, end: c } = a,
      d = s[l],
      h = s[Ts(l, c, s)];
    o ? (i.moveTo(d.x, d.y), (o = !1)) : (i.lineTo(d.x, e), i.lineTo(d.x, d.y)),
      (r = !!t.pathSegment(i, a, { move: r })),
      r ? i.closePath() : i.lineTo(h.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function Ir(i, t) {
  const { line: e, target: n, property: s, color: o, scale: r } = t,
    a = (function (l, c, d) {
      const h = l.segments,
        u = l.points,
        g = c.points,
        p = [];
      for (const f of h) {
        let { start: m, end: b } = f;
        b = Ts(m, b, u);
        const x = An(d, u[m], u[b], f.loop);
        if (!c.segments) {
          p.push({ source: f, target: x, start: u[m], end: u[b] });
          continue;
        }
        const v = Ya(c, x);
        for (const y of v) {
          const _ = An(d, g[y.start], g[y.end], y.loop),
            w = Ua(f, u, _);
          for (const M of w)
            p.push({
              source: M,
              target: y,
              start: { [d]: Or(x, _, "start", Math.max) },
              end: { [d]: Or(x, _, "end", Math.min) },
            });
        }
      }
      return p;
    })(e, n, s);
  for (const { source: l, target: c, start: d, end: h } of a) {
    const { style: { backgroundColor: u = o } = {} } = l,
      g = n !== !0;
    i.save(), (i.fillStyle = u), cu(i, r, g && An(s, d, h)), i.beginPath();
    const p = !!e.pathSegment(i, l);
    let f;
    if (g) {
      p ? i.closePath() : Rr(i, n, h, s);
      const m = !!n.pathSegment(i, c, { move: p, reverse: !0 });
      (f = p && m), f || Rr(i, n, d, s);
    }
    i.closePath(), i.fill(f ? "evenodd" : "nonzero"), i.restore();
  }
}
function cu(i, t, e) {
  const { top: n, bottom: s } = t.chart.chartArea,
    { property: o, start: r, end: a } = e || {};
  o === "x" && (i.beginPath(), i.rect(r, n, a - r, s - n), i.clip());
}
function Rr(i, t, e, n) {
  const s = t.interpolate(e, n);
  s && i.lineTo(s.x, s.y);
}
var al = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const n = (i.data.datasets || []).length,
      s = [];
    let o, r, a, l;
    for (r = 0; r < n; ++r)
      (o = i.getDatasetMeta(r)),
        (a = o.dataset),
        (l = null),
        a &&
          a.options &&
          a instanceof jt &&
          (l = {
            visible: i.isDatasetVisible(r),
            index: r,
            fill: ou(a, r, n),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: a,
          }),
        (o.$filler = l),
        s.push(l);
    for (r = 0; r < n; ++r)
      (l = s[r]), l && l.fill !== !1 && (l.fill = su(s, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const n = e.drawTime === "beforeDraw",
      s = i.getSortedVisibleDatasetMetas(),
      o = i.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      a &&
        (a.line.updateControlPoints(o, a.axis), n && a.fill && Tn(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw") return;
    const n = i.getSortedVisibleDatasetMetas();
    for (let s = n.length - 1; s >= 0; --s) {
      const o = n[s].$filler;
      Tr(o) && Tn(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const n = t.meta.$filler;
    Tr(n) && e.drawTime === "beforeDatasetDraw" && Tn(i.ctx, n, i.chartArea);
  },
  defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
const Fr = (i, t) => {
  let { boxHeight: e = t, boxWidth: n = t } = i;
  return (
    i.usePointStyle &&
      ((e = Math.min(e, t)), (n = i.pointStyleWidth || Math.min(n, t))),
    { boxWidth: n, boxHeight: e, itemHeight: Math.max(t, e) }
  );
};
class zr extends zt {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e, n) {
    (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = Z(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter((n) => t.filter(n, this.chart.data))),
      t.sort && (e = e.sort((n, s) => t.sort(n, s, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e);
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) return void (this.width = this.height = 0);
    const n = t.labels,
      s = ut(n.font),
      o = s.size,
      r = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Fr(n, o);
    let c, d;
    (e.font = s.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (d = this._fitRows(r, o, a, l) + 10))
        : ((d = this.maxHeight), (c = this._fitCols(r, s, a, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(d, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, e, n, s) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      d = s + a;
    let h = t;
    (o.textAlign = "left"), (o.textBaseline = "middle");
    let u = -1,
      g = -d;
    return (
      this.legendItems.forEach((p, f) => {
        const m = n + e / 2 + o.measureText(p.text).width;
        (f === 0 || c[c.length - 1] + m + 2 * a > r) &&
          ((h += d), (c[c.length - (f > 0 ? 0 : 1)] = 0), (g += d), u++),
          (l[f] = { left: 0, top: g, row: u, width: m, height: s }),
          (c[c.length - 1] += m + a);
      }),
      h
    );
  }
  _fitCols(t, e, n, s) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      d = r - t;
    let h = a,
      u = 0,
      g = 0,
      p = 0,
      f = 0;
    return (
      this.legendItems.forEach((m, b) => {
        const { itemWidth: x, itemHeight: v } = (function (y, _, w, M, k) {
          const C = (function (O, E, L, A) {
              let T = O.text;
              return (
                T &&
                  typeof T != "string" &&
                  (T = T.reduce((F, B) => (F.length > B.length ? F : B))),
                E + L.size / 2 + A.measureText(T).width
              );
            })(M, y, _, w),
            S = (function (O, E, L) {
              let A = O;
              return typeof E.text != "string" && (A = Br(E, L)), A;
            })(k, M, _.lineHeight);
          return { itemWidth: C, itemHeight: S };
        })(n, e, o, m, s);
        b > 0 &&
          g + v + 2 * a > d &&
          ((h += u + a),
          c.push({ width: u, height: g }),
          (p += u + a),
          f++,
          (u = g = 0)),
          (l[b] = { left: p, top: g, col: f, width: x, height: v }),
          (u = Math.max(u, x)),
          (g += v + a);
      }),
      (h += u),
      c.push({ width: u, height: g }),
      h
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: n,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      r = ze(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = yt(n, this.left + s, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row &&
          ((a = c.row),
          (l = yt(n, this.left + s, this.right - this.lineWidths[a]))),
          (c.top += this.top + t + s),
          (c.left = r.leftForLtr(r.x(l), c.width)),
          (l += c.width + s);
    } else {
      let a = 0,
        l = yt(n, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a &&
          ((a = c.col),
          (l = yt(
            n,
            this.top + t + s,
            this.bottom - this.columnSizes[a].height
          ))),
          (c.top = l),
          (c.left += this.left + s),
          (c.left = r.leftForLtr(r.x(c.left), c.width)),
          (l += c.height + s);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      fn(t, this), this._draw(), gn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: n, ctx: s } = this,
      { align: o, labels: r } = t,
      a = st.color,
      l = ze(t.rtl, this.left, this.width),
      c = ut(r.font),
      { padding: d } = r,
      h = c.size,
      u = h / 2;
    let g;
    this.drawTitle(),
      (s.textAlign = l.textAlign("left")),
      (s.textBaseline = "middle"),
      (s.lineWidth = 0.5),
      (s.font = c.string);
    const { boxWidth: p, boxHeight: f, itemHeight: m } = Fr(r, h),
      b = this.isHorizontal(),
      x = this._computeTitleHeight();
    (g = b
      ? {
          x: yt(o, this.left + d, this.right - n[0]),
          y: this.top + d + x,
          line: 0,
        }
      : {
          x: this.left + d,
          y: yt(o, this.top + x + d, this.bottom - e[0].height),
          line: 0,
        }),
      Ha(this.ctx, t.textDirection);
    const v = m + d;
    this.legendItems.forEach((y, _) => {
      (s.strokeStyle = y.fontColor), (s.fillStyle = y.fontColor);
      const w = s.measureText(y.text).width,
        M = l.textAlign(y.textAlign || (y.textAlign = r.textAlign)),
        k = p + u + w;
      let C = g.x,
        S = g.y;
      if (
        (l.setWidth(this.width),
        b
          ? _ > 0 &&
            C + k + d > this.right &&
            ((S = g.y += v),
            g.line++,
            (C = g.x = yt(o, this.left + d, this.right - n[g.line])))
          : _ > 0 &&
            S + v > this.bottom &&
            ((C = g.x = C + e[g.line].width + d),
            g.line++,
            (S = g.y =
              yt(o, this.top + x + d, this.bottom - e[g.line].height))),
        (function (O, E, L) {
          if (isNaN(p) || p <= 0 || isNaN(f) || f < 0) return;
          s.save();
          const A = V(L.lineWidth, 1);
          if (
            ((s.fillStyle = V(L.fillStyle, a)),
            (s.lineCap = V(L.lineCap, "butt")),
            (s.lineDashOffset = V(L.lineDashOffset, 0)),
            (s.lineJoin = V(L.lineJoin, "miter")),
            (s.lineWidth = A),
            (s.strokeStyle = V(L.strokeStyle, a)),
            s.setLineDash(V(L.lineDash, [])),
            r.usePointStyle)
          ) {
            const T = {
                radius: (f * Math.SQRT2) / 2,
                pointStyle: L.pointStyle,
                rotation: L.rotation,
                borderWidth: A,
              },
              F = l.xPlus(O, p / 2);
            Ba(s, T, F, E + u, r.pointStyleWidth && p);
          } else {
            const T = E + Math.max((h - f) / 2, 0),
              F = l.leftForLtr(O, p),
              B = Me(L.borderRadius);
            s.beginPath(),
              Object.values(B).some((z) => z !== 0)
                ? yi(s, { x: F, y: T, w: p, h: f, radius: B })
                : s.rect(F, T, p, f),
              s.fill(),
              A !== 0 && s.stroke();
          }
          s.restore();
        })(l.x(C), S, y),
        (C = ((O, E, L, A) =>
          O === (A ? "left" : "right") ? L : O === "center" ? (E + L) / 2 : E)(
          M,
          C + p + u,
          b ? C + k : this.right,
          t.rtl
        )),
        (function (O, E, L) {
          Ce(s, L.text, O, E + m / 2, c, {
            strikethrough: L.hidden,
            textAlign: l.textAlign(L.textAlign),
          });
        })(l.x(C), S, y),
        b)
      )
        g.x += k + d;
      else if (typeof y.text != "string") {
        const O = c.lineHeight;
        g.y += Br(y, O) + d;
      } else g.y += v;
    }),
      $a(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      n = ut(e.font),
      s = wt(e.padding);
    if (!e.display) return;
    const o = ze(t.rtl, this.left, this.width),
      r = this.ctx,
      a = e.position,
      l = n.size / 2,
      c = s.top + l;
    let d,
      h = this.left,
      u = this.width;
    if (this.isHorizontal())
      (u = Math.max(...this.lineWidths)),
        (d = this.top + c),
        (h = yt(t.align, h, this.right - u));
    else {
      const p = this.columnSizes.reduce((f, m) => Math.max(f, m.height), 0);
      d =
        c +
        yt(
          t.align,
          this.top,
          this.bottom - p - t.labels.padding - this._computeTitleHeight()
        );
    }
    const g = yt(a, h, h + u);
    (r.textAlign = o.textAlign(ks(a))),
      (r.textBaseline = "middle"),
      (r.strokeStyle = e.color),
      (r.fillStyle = e.color),
      (r.font = n.string),
      Ce(r, e.text, g, d, n);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = ut(t.font),
      n = wt(t.padding);
    return t.display ? e.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, e) {
    let n, s, o;
    if (Jt(t, this.left, this.right) && Jt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (
          ((s = o[n]),
          Jt(t, s.left, s.left + s.width) && Jt(e, s.top, s.top + s.height))
        )
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (
      !(function (s, o) {
        return !!(
          ((s === "mousemove" || s === "mouseout") &&
            (o.onHover || o.onLeave)) ||
          (o.onClick && (s === "click" || s === "mouseup"))
        );
      })(t.type, e)
    )
      return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem,
        o = ((r, a) =>
          r !== null &&
          a !== null &&
          r.datasetIndex === a.datasetIndex &&
          r.index === a.index)(s, n);
      s && !o && Z(e.onLeave, [t, s, this], this),
        (this._hoveredItem = n),
        n && !o && Z(e.onHover, [t, n, this], this);
    } else n && Z(e.onClick, [t, n, this], this);
  }
}
function Br(i, t) {
  return t * (i.text ? i.text.length : 0);
}
var ll = {
  id: "legend",
  _element: zr,
  start(i, t, e) {
    const n = (i.legend = new zr({ ctx: i.ctx, options: e, chart: i }));
    _t.configure(i, n, e), _t.addBox(i, n);
  },
  stop(i) {
    _t.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const n = i.legend;
    _t.configure(i, n, e), (n.options = e);
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const n = t.datasetIndex,
        s = e.chart;
      s.isDatasetVisible(n)
        ? (s.hide(n), (t.hidden = !0))
        : (s.show(n), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets,
          {
            labels: {
              usePointStyle: e,
              pointStyle: n,
              textAlign: s,
              color: o,
              useBorderRadius: r,
              borderRadius: a,
            },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0),
            d = wt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (d.width + d.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i),
    },
  },
};
class is extends zt {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const n = this.options;
    if (((this.left = 0), (this.top = 0), !n.display))
      return void (this.width = this.height = this.right = this.bottom = 0);
    (this.width = this.right = t), (this.height = this.bottom = e);
    const s = tt(n.text) ? n.text.length : 1;
    this._padding = wt(n.padding);
    const o = s * ut(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: n, bottom: s, right: o, options: r } = this,
      a = r.align;
    let l,
      c,
      d,
      h = 0;
    return (
      this.isHorizontal()
        ? ((c = yt(a, n, o)), (d = e + t), (l = o - n))
        : (r.position === "left"
            ? ((c = n + t), (d = yt(a, s, e)), (h = -0.5 * it))
            : ((c = o - t), (d = yt(a, e, s)), (h = 0.5 * it)),
          (l = s - e)),
      { titleX: c, titleY: d, maxWidth: l, rotation: h }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const n = ut(e.font),
      s = n.lineHeight / 2 + this._padding.top,
      { titleX: o, titleY: r, maxWidth: a, rotation: l } = this._drawArgs(s);
    Ce(t, e.text, 0, 0, n, {
      color: e.color,
      maxWidth: a,
      rotation: l,
      textAlign: ks(e.align),
      textBaseline: "middle",
      translation: [o, r],
    });
  }
}
var hu = {
  id: "title",
  _element: is,
  start(i, t, e) {
    (function (n, s) {
      const o = new is({ ctx: n.ctx, options: s, chart: n });
      _t.configure(n, o, s), _t.addBox(n, o), (n.titleBlock = o);
    })(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    _t.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const n = i.titleBlock;
    _t.configure(i, n, e), (n.options = e);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const ji = new WeakMap();
var du = {
  id: "subtitle",
  start(i, t, e) {
    const n = new is({ ctx: i.ctx, options: e, chart: i });
    _t.configure(i, n, e), _t.addBox(i, n), ji.set(i, n);
  },
  stop(i) {
    _t.removeBox(i, ji.get(i)), ji.delete(i);
  },
  beforeUpdate(i, t, e) {
    const n = ji.get(i);
    _t.configure(i, n, e), (n.options = e);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "normal" },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const ni = {
  average(i) {
    if (!i.length) return !1;
    let t,
      e,
      n = new Set(),
      s = 0,
      o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        n.add(l.x), (s += l.y), ++o;
      }
    }
    return { x: [...n].reduce((a, l) => a + l) / n.size, y: s / o };
  },
  nearest(i, t) {
    if (!i.length) return !1;
    let e,
      n,
      s,
      o = t.x,
      r = t.y,
      a = Number.POSITIVE_INFINITY;
    for (e = 0, n = i.length; e < n; ++e) {
      const l = i[e].element;
      if (l && l.hasValue()) {
        const c = Yn(t, l.getCenterPoint());
        c < a && ((a = c), (s = l));
      }
    }
    if (s) {
      const l = s.tooltipPosition();
      (o = l.x), (r = l.y);
    }
    return { x: o, y: r };
  },
};
function Kt(i, t) {
  return t && (tt(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Gt(i) {
  return (typeof i == "string" || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function uu(i, t) {
  const { element: e, datasetIndex: n, index: s } = t,
    o = i.getDatasetMeta(n).controller,
    { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(s),
    raw: i.data.datasets[n].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: e,
  };
}
function Kr(i, t) {
  const e = i.chart.ctx,
    { body: n, footer: s, title: o } = i,
    { boxWidth: r, boxHeight: a } = t,
    l = ut(t.bodyFont),
    c = ut(t.titleFont),
    d = ut(t.footerFont),
    h = o.length,
    u = s.length,
    g = n.length,
    p = wt(t.padding);
  let f = p.height,
    m = 0,
    b = n.reduce(
      (y, _) => y + _.before.length + _.lines.length + _.after.length,
      0
    );
  (b += i.beforeBody.length + i.afterBody.length),
    h &&
      (f += h * c.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom),
    b &&
      (f +=
        g * (t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) +
        (b - g) * l.lineHeight +
        (b - 1) * t.bodySpacing),
    u &&
      (f += t.footerMarginTop + u * d.lineHeight + (u - 1) * t.footerSpacing);
  let x = 0;
  const v = function (y) {
    m = Math.max(m, e.measureText(y).width + x);
  };
  return (
    e.save(),
    (e.font = c.string),
    U(i.title, v),
    (e.font = l.string),
    U(i.beforeBody.concat(i.afterBody), v),
    (x = t.displayColors ? r + 2 + t.boxPadding : 0),
    U(n, (y) => {
      U(y.before, v), U(y.lines, v), U(y.after, v);
    }),
    (x = 0),
    (e.font = d.string),
    U(i.footer, v),
    e.restore(),
    (m += p.width),
    { width: m, height: f }
  );
}
function fu(i, t, e, n) {
  const { x: s, width: o } = e,
    {
      width: r,
      chartArea: { left: a, right: l },
    } = i;
  let c = "center";
  return (
    n === "center"
      ? (c = s <= (a + l) / 2 ? "left" : "right")
      : s <= o / 2
      ? (c = "left")
      : s >= r - o / 2 && (c = "right"),
    (function (d, h, u, g) {
      const { x: p, width: f } = g,
        m = u.caretSize + u.caretPadding;
      return (
        (d === "left" && p + f + m > h.width) ||
        (d === "right" && p - f - m < 0) ||
        void 0
      );
    })(c, i, t, e) && (c = "center"),
    c
  );
}
function Vr(i, t, e) {
  const n =
    e.yAlign ||
    t.yAlign ||
    (function (s, o) {
      const { y: r, height: a } = o;
      return r < a / 2 ? "top" : r > s.height - a / 2 ? "bottom" : "center";
    })(i, e);
  return { xAlign: e.xAlign || t.xAlign || fu(i, t, e, n), yAlign: n };
}
function Nr(i, t, e, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = i,
    { xAlign: a, yAlign: l } = e,
    c = s + o,
    { topLeft: d, topRight: h, bottomLeft: u, bottomRight: g } = Me(r);
  let p = (function (m, b) {
    let { x, width: v } = m;
    return b === "right" ? (x -= v) : b === "center" && (x -= v / 2), x;
  })(t, a);
  const f = (function (m, b, x) {
    let { y: v, height: y } = m;
    return b === "top" ? (v += x) : (v -= b === "bottom" ? y + x : y / 2), v;
  })(t, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (p += c)
        : a === "right" && (p -= c)
      : a === "left"
      ? (p -= Math.max(d, u) + s)
      : a === "right" && (p += Math.max(h, g) + s),
    { x: mt(p, 0, n.width - t.width), y: mt(f, 0, n.height - t.height) }
  );
}
function Hi(i, t, e) {
  const n = wt(e.padding);
  return t === "center"
    ? i.x + i.width / 2
    : t === "right"
    ? i.x + i.width - n.right
    : i.x + n.left;
}
function Wr(i) {
  return Kt([], Gt(i));
}
function jr(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const cl = {
  beforeTitle: qt,
  title(i) {
    if (i.length > 0) {
      const t = i[0],
        e = t.chart.data.labels,
        n = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (n > 0 && t.dataIndex < n) return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: qt,
  beforeBody: qt,
  beforeLabel: qt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return W(e) || (t += e), t;
  },
  labelColor(i) {
    const t = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return {
      borderColor: t.borderColor,
      backgroundColor: t.backgroundColor,
      borderWidth: t.borderWidth,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const t = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return { pointStyle: t.pointStyle, rotation: t.rotation };
  },
  afterLabel: qt,
  afterBody: qt,
  beforeFooter: qt,
  footer: qt,
  afterFooter: qt,
};
function St(i, t, e, n) {
  const s = i[t].call(e, n);
  return s === void 0 ? cl[t].call(e, n) : s;
}
class ns extends zt {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      n = this.options.setContext(this.getContext()),
      s = n.enabled && e.options.animation && n.animations,
      o = new qa(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context =
        ((t = this.chart.getContext()),
        (e = this),
        (n = this._tooltipItems),
        he(t, { tooltip: e, tooltipItems: n, type: "tooltip" })))
    );
    var t, e, n;
  }
  getTitle(t, e) {
    const { callbacks: n } = e,
      s = St(n, "beforeTitle", this, t),
      o = St(n, "title", this, t),
      r = St(n, "afterTitle", this, t);
    let a = [];
    return (a = Kt(a, Gt(s))), (a = Kt(a, Gt(o))), (a = Kt(a, Gt(r))), a;
  }
  getBeforeBody(t, e) {
    return Wr(St(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: n } = e,
      s = [];
    return (
      U(t, (o) => {
        const r = { before: [], lines: [], after: [] },
          a = jr(n, o);
        Kt(r.before, Gt(St(a, "beforeLabel", this, o))),
          Kt(r.lines, St(a, "label", this, o)),
          Kt(r.after, Gt(St(a, "afterLabel", this, o))),
          s.push(r);
      }),
      s
    );
  }
  getAfterBody(t, e) {
    return Wr(St(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: n } = e,
      s = St(n, "beforeFooter", this, t),
      o = St(n, "footer", this, t),
      r = St(n, "afterFooter", this, t);
    let a = [];
    return (a = Kt(a, Gt(s))), (a = Kt(a, Gt(o))), (a = Kt(a, Gt(r))), a;
  }
  _createItems(t) {
    const e = this._active,
      n = this.chart.data,
      s = [],
      o = [],
      r = [];
    let a,
      l,
      c = [];
    for (a = 0, l = e.length; a < l; ++a) c.push(uu(this.chart, e[a]));
    return (
      t.filter && (c = c.filter((d, h, u) => t.filter(d, h, u, n))),
      t.itemSort && (c = c.sort((d, h) => t.itemSort(d, h, n))),
      U(c, (d) => {
        const h = jr(t.callbacks, d);
        s.push(St(h, "labelColor", this, d)),
          o.push(St(h, "labelPointStyle", this, d)),
          r.push(St(h, "labelTextColor", this, d));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = c),
      c
    );
  }
  update(t, e) {
    const n = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      r = [];
    if (s.length) {
      const a = ni[n.position].call(this, s, this._eventPosition);
      (r = this._createItems(n)),
        (this.title = this.getTitle(r, n)),
        (this.beforeBody = this.getBeforeBody(r, n)),
        (this.body = this.getBody(r, n)),
        (this.afterBody = this.getAfterBody(r, n)),
        (this.footer = this.getFooter(r, n));
      const l = (this._size = Kr(this, n)),
        c = Object.assign({}, a, l),
        d = Vr(this.chart, n, c),
        h = Nr(n, c, d, this.chart);
      (this.xAlign = d.xAlign),
        (this.yAlign = d.yAlign),
        (o = {
          opacity: 1,
          x: h.x,
          y: h.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    } else this.opacity !== 0 && (o = { opacity: 0 });
    (this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        n.external &&
        n.external.call(this, { chart: this.chart, tooltip: this, replay: e });
  }
  drawCaret(t, e, n, s) {
    const o = this.getCaretPosition(t, n, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, n) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: r, cornerRadius: a } = n,
      { topLeft: l, topRight: c, bottomLeft: d, bottomRight: h } = Me(a),
      { x: u, y: g } = t,
      { width: p, height: f } = e;
    let m, b, x, v, y, _;
    return (
      o === "center"
        ? ((y = g + f / 2),
          s === "left"
            ? ((m = u), (b = m - r), (v = y + r), (_ = y - r))
            : ((m = u + p), (b = m + r), (v = y - r), (_ = y + r)),
          (x = m))
        : ((b =
            s === "left"
              ? u + Math.max(l, d) + r
              : s === "right"
              ? u + p - Math.max(c, h) - r
              : this.caretX),
          o === "top"
            ? ((v = g), (y = v - r), (m = b - r), (x = b + r))
            : ((v = g + f), (y = v + r), (m = b + r), (x = b - r)),
          (_ = v)),
      { x1: m, x2: b, x3: x, y1: v, y2: y, y3: _ }
    );
  }
  drawTitle(t, e, n) {
    const s = this.title,
      o = s.length;
    let r, a, l;
    if (o) {
      const c = ze(n.rtl, this.x, this.width);
      for (
        t.x = Hi(this, n.titleAlign, n),
          e.textAlign = c.textAlign(n.titleAlign),
          e.textBaseline = "middle",
          r = ut(n.titleFont),
          a = n.titleSpacing,
          e.fillStyle = n.titleColor,
          e.font = r.string,
          l = 0;
        l < o;
        ++l
      )
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + a),
          l + 1 === o && (t.y += n.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, n, s, o) {
    const r = this.labelColors[n],
      a = this.labelPointStyles[n],
      { boxHeight: l, boxWidth: c } = o,
      d = ut(o.bodyFont),
      h = Hi(this, "left", o),
      u = s.x(h),
      g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0,
      p = e.y + g;
    if (o.usePointStyle) {
      const f = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        m = s.leftForLtr(u, c) + c / 2,
        b = p + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        Xn(t, f, m, b),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        Xn(t, f, m, b);
    } else {
      (t.lineWidth = N(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const f = s.leftForLtr(u, c),
        m = s.leftForLtr(s.xPlus(u, 1), c - 2),
        b = Me(r.borderRadius);
      Object.values(b).some((x) => x !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          yi(t, { x: f, y: p, w: c, h: l, radius: b }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          yi(t, { x: m, y: p + 1, w: c - 2, h: l - 2, radius: b }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(f, p, c, l),
          t.strokeRect(f, p, c, l),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(m, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, e, n) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: d,
      } = n,
      h = ut(n.bodyFont);
    let u = h.lineHeight,
      g = 0;
    const p = ze(n.rtl, this.x, this.width),
      f = function (k) {
        e.fillText(k, p.x(t.x + g), t.y + u / 2), (t.y += u + o);
      },
      m = p.textAlign(r);
    let b, x, v, y, _, w, M;
    for (
      e.textAlign = r,
        e.textBaseline = "middle",
        e.font = h.string,
        t.x = Hi(this, m, n),
        e.fillStyle = n.bodyColor,
        U(this.beforeBody, f),
        g = a && m !== "right" ? (r === "center" ? c / 2 + d : c + 2 + d) : 0,
        y = 0,
        w = s.length;
      y < w;
      ++y
    ) {
      for (
        b = s[y],
          x = this.labelTextColors[y],
          e.fillStyle = x,
          U(b.before, f),
          v = b.lines,
          a &&
            v.length &&
            (this._drawColorBox(e, t, y, p, n),
            (u = Math.max(h.lineHeight, l))),
          _ = 0,
          M = v.length;
        _ < M;
        ++_
      )
        f(v[_]), (u = h.lineHeight);
      U(b.after, f);
    }
    (g = 0), (u = h.lineHeight), U(this.afterBody, f), (t.y -= o);
  }
  drawFooter(t, e, n) {
    const s = this.footer,
      o = s.length;
    let r, a;
    if (o) {
      const l = ze(n.rtl, this.x, this.width);
      for (
        t.x = Hi(this, n.footerAlign, n),
          t.y += n.footerMarginTop,
          e.textAlign = l.textAlign(n.footerAlign),
          e.textBaseline = "middle",
          r = ut(n.footerFont),
          e.fillStyle = n.footerColor,
          e.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + n.footerSpacing);
    }
  }
  drawBackground(t, e, n, s) {
    const { xAlign: o, yAlign: r } = this,
      { x: a, y: l } = t,
      { width: c, height: d } = n,
      {
        topLeft: h,
        topRight: u,
        bottomLeft: g,
        bottomRight: p,
      } = Me(s.cornerRadius);
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(a + h, l),
      r === "top" && this.drawCaret(t, e, n, s),
      e.lineTo(a + c - u, l),
      e.quadraticCurveTo(a + c, l, a + c, l + u),
      r === "center" && o === "right" && this.drawCaret(t, e, n, s),
      e.lineTo(a + c, l + d - p),
      e.quadraticCurveTo(a + c, l + d, a + c - p, l + d),
      r === "bottom" && this.drawCaret(t, e, n, s),
      e.lineTo(a + g, l + d),
      e.quadraticCurveTo(a, l + d, a, l + d - g),
      r === "center" && o === "left" && this.drawCaret(t, e, n, s),
      e.lineTo(a, l + h),
      e.quadraticCurveTo(a, l, a + h, l),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      n = this.$animations,
      s = n && n.x,
      o = n && n.y;
    if (s || o) {
      const r = ni[t.position].call(this, this._active, this._eventPosition);
      if (!r) return;
      const a = (this._size = Kr(this, t)),
        l = Object.assign({}, r, this._size),
        c = Vr(e, t, l),
        d = Nr(t, l, c, e);
      (s._to === d.x && o._to === d.y) ||
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n) return;
    this._updateAnimationTarget(e);
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    n = Math.abs(n) < 0.001 ? 0 : n;
    const r = wt(e.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = n),
      this.drawBackground(o, t, s, e),
      Ha(t, e.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, e),
      this.drawBody(o, t, e),
      this.drawFooter(o, t, e),
      $a(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const n = this._active,
      s = t.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: c.data[l], index: l };
      }),
      o = !Qi(n, s),
      r = this._positionChanged(s, e);
    (o || r) &&
      ((this._active = s),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, n = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, e, n),
      a = this._positionChanged(r, t),
      l = e || !Qi(r, o) || a;
    return (
      l &&
        ((this._active = r),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      l
    );
  }
  _getActiveElements(t, e, n, s) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!s)
      return e.filter(
        (a) =>
          this.chart.data.datasets[a.datasetIndex] &&
          this.chart
            .getDatasetMeta(a.datasetIndex)
            .controller.getParsed(a.index) !== void 0
      );
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: n, caretY: s, options: o } = this,
      r = ni[o.position].call(this, t, e);
    return r !== !1 && (n !== r.x || s !== r.y);
  }
}
P(ns, "positioners", ni);
var hl = {
    id: "tooltip",
    _element: ns,
    positioners: ni,
    afterInit(i, t, e) {
      e && (i.tooltip = new ns({ chart: i, options: e }));
    },
    beforeUpdate(i, t, e) {
      i.tooltip && i.tooltip.initialize(e);
    },
    reset(i, t, e) {
      i.tooltip && i.tooltip.initialize(e);
    },
    afterDraw(i) {
      const t = i.tooltip;
      if (t && t._willRender()) {
        const e = { tooltip: t };
        if (
          i.notifyPlugins(
            "beforeTooltipDraw",
            Ut(ht({}, e), { cancelable: !0 })
          ) === !1
        )
          return;
        t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
      }
    },
    afterEvent(i, t) {
      if (i.tooltip) {
        const e = t.replay;
        i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: { weight: "bold" },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: "bold" },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (i, t) => t.bodyFont.size,
      boxWidth: (i, t) => t.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: { duration: 400, easing: "easeOutQuart" },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"],
        },
        opacity: { easing: "linear", duration: 200 },
      },
      callbacks: cl,
    },
    defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
    descriptors: {
      _scriptable: (i) =>
        i !== "filter" && i !== "itemSort" && i !== "external",
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: "animation" },
    },
    additionalOptionScopes: ["interaction"],
  },
  gu = Object.freeze({
    __proto__: null,
    Colors: ol,
    Decimation: nu,
    Filler: al,
    Legend: ll,
    SubTitle: du,
    Title: hu,
    Tooltip: hl,
  });
function pu(i, t, e, n) {
  const s = i.indexOf(t);
  return s === -1
    ? ((o, r, a, l) => (
        typeof r == "string"
          ? ((a = o.push(r) - 1), l.unshift({ index: a, label: r }))
          : isNaN(r) && (a = null),
        a
      ))(i, t, e, n)
    : s !== i.lastIndexOf(t)
    ? e
    : s;
}
function Hr(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class _i extends Ae {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const n = this.getLabels();
      for (const { index: s, label: o } of e) n[s] === o && n.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (W(t)) return null;
    const n = this.getLabels();
    return ((s, o) => (s === null ? null : mt(Math.round(s), 0, o)))(
      (e =
        isFinite(e) && n[e] === t ? e : pu(n, t, V(e, t), this._addedLabels)),
      n.length - 1
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: n, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (n = 0), e || (s = this.getLabels().length - 1)),
      (this.min = n),
      (this.max = s);
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      n = this.options.offset,
      s = [];
    let o = this.getLabels();
    (o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
      (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
      (this._startValue = this.min - (n ? 0.5 : 0));
    for (let r = t; r <= e; r++) s.push({ value: r });
    return s;
  }
  getLabelForValue(t) {
    return Hr.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
P(_i, "id", "category"), P(_i, "defaults", { ticks: { callback: Hr } });
function mu(i, t) {
  const e = [],
    {
      bounds: n,
      step: s,
      min: o,
      max: r,
      precision: a,
      count: l,
      maxTicks: c,
      maxDigits: d,
      includeBounds: h,
    } = i,
    u = s || 1,
    g = c - 1,
    { min: p, max: f } = t,
    m = !W(o),
    b = !W(r),
    x = !W(l),
    v = (f - p) / (d + 1);
  let y,
    _,
    w,
    M,
    k = Co((f - p) / g / u) * u;
  if (k < 1e-14 && !m && !b) return [{ value: p }, { value: f }];
  (M = Math.ceil(f / k) - Math.floor(p / k)),
    M > g && (k = Co((M * k) / g / u) * u),
    W(a) || ((y = Math.pow(10, a)), (k = Math.ceil(k * y) / y)),
    n === "ticks"
      ? ((_ = Math.floor(p / k) * k), (w = Math.ceil(f / k) * k))
      : ((_ = p), (w = f)),
    m &&
    b &&
    s &&
    (function (O, E) {
      const L = Math.round(O);
      return L - E <= O && L + E >= O;
    })((r - o) / s, k / 1e3)
      ? ((M = Math.round(Math.min((r - o) / k, c))),
        (k = (r - o) / M),
        (_ = o),
        (w = r))
      : x
      ? ((_ = m ? o : _), (w = b ? r : w), (M = l - 1), (k = (w - _) / M))
      : ((M = (w - _) / k),
        (M = li(M, Math.round(M), k / 1e3) ? Math.round(M) : Math.ceil(M)));
  const C = Math.max(Po(k), Po(_));
  (y = Math.pow(10, W(a) ? C : a)),
    (_ = Math.round(_ * y) / y),
    (w = Math.round(w * y) / y);
  let S = 0;
  for (
    m &&
    (h && _ !== o
      ? (e.push({ value: o }),
        _ < o && S++,
        li(Math.round((_ + S * k) * y) / y, o, $r(o, v, i)) && S++)
      : _ < o && S++);
    S < M;
    ++S
  ) {
    const O = Math.round((_ + S * k) * y) / y;
    if (b && O > r) break;
    e.push({ value: O });
  }
  return (
    b && h && w !== r
      ? e.length && li(e[e.length - 1].value, r, $r(r, v, i))
        ? (e[e.length - 1].value = r)
        : e.push({ value: r })
      : (b && w !== r) || e.push({ value: w }),
    e
  );
}
function $r(i, t, { horizontal: e, minRotation: n }) {
  const s = Rt(n),
    o = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
    r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class rn extends Ae {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return W(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => (s = e ? s : l),
      a = (l) => (o = n ? o : l);
    if (t) {
      const l = Wt(s),
        c = Wt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(0.05 * o);
      a(o + l), t || r(s - l);
    }
    (this.min = s), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let e,
      { maxTicksLimit: n, stepSize: s } = t;
    return (
      s
        ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          e > 1e3 && (e = 1e3))
        : ((e = this.computeTickLimit()), (n = n || 11)),
      n && (e = Math.min(n, e)),
      e
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = mu(
      {
        maxTicks: n,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      this._range || this
    );
    return (
      t.bounds === "ticks" && Oa(s, this, "value"),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      n = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (n - e) / Math.max(t.length - 1, 1) / 2;
      (e -= s), (n += s);
    }
    (this._startValue = e), (this._endValue = n), (this._valueRange = n - e);
  }
  getLabelForValue(t) {
    return Di(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class wi extends rn {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = ot(t) ? t : 0),
      (this.max = ot(e) ? e : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      n = Rt(this.options.ticks.minRotation),
      s = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
P(wi, "id", "linear"),
  P(wi, "defaults", { ticks: { callback: un.formatters.numeric } });
const ui = (i) => Math.floor(oe(i)),
  pe = (i, t) => Math.pow(10, ui(i) + t);
function Ur(i) {
  return i / Math.pow(10, ui(i)) === 1;
}
function Yr(i, t, e) {
  const n = Math.pow(10, e),
    s = Math.floor(i / n);
  return Math.ceil(t / n) - s;
}
function bu(i, { min: t, max: e }) {
  t = Ot(i.min, t);
  const n = [],
    s = ui(t);
  let o = (function (p, f) {
      let m = ui(f - p);
      for (; Yr(p, f, m) > 10; ) m++;
      for (; Yr(p, f, m) < 10; ) m--;
      return Math.min(m, ui(p));
    })(t, e),
    r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o),
    l = s > o ? Math.pow(10, s) : 0,
    c = Math.round((t - l) * r) / r,
    d = Math.floor((t - l) / a / 10) * a * 10;
  let h = Math.floor((c - d) / Math.pow(10, o)),
    u = Ot(i.min, Math.round((l + d + h * Math.pow(10, o)) * r) / r);
  for (; u < e; )
    n.push({ value: u, major: Ur(u), significand: h }),
      h >= 10 ? (h = h < 15 ? 15 : 20) : h++,
      h >= 20 && (o++, (h = 2), (r = o >= 0 ? 1 : r)),
      (u = Math.round((l + d + h * Math.pow(10, o)) * r) / r);
  const g = Ot(i.max, u);
  return n.push({ value: g, major: Ur(g), significand: h }), n;
}
class ss extends Ae {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const n = rn.prototype.parse.apply(this, [t, e]);
    if (n !== 0) return ot(n) && n > 0 ? n : null;
    this._zero = !0;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = ot(t) ? Math.max(0, t) : null),
      (this.max = ot(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !ot(this._userMin) &&
        (this.min = t === pe(this.min, 0) ? pe(this.min, -1) : pe(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let n = this.min,
      s = this.max;
    const o = (a) => (n = t ? n : a),
      r = (a) => (s = e ? s : a);
    n === s && (n <= 0 ? (o(1), r(10)) : (o(pe(n, -1)), r(pe(s, 1)))),
      n <= 0 && o(pe(s, -1)),
      s <= 0 && r(pe(n, 1)),
      (this.min = n),
      (this.max = s);
  }
  buildTicks() {
    const t = this.options,
      e = bu({ min: this._userMin, max: this._userMax }, this);
    return (
      t.bounds === "ticks" && Oa(e, this, "value"),
      t.reverse
        ? (e.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      e
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : Di(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = oe(t)),
      (this._valueRange = oe(this.max) - oe(t));
  }
  getPixelForValue(t) {
    return (
      (t !== void 0 && t !== 0) || (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (oe(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
P(ss, "id", "logarithmic"),
  P(ss, "defaults", {
    ticks: { callback: un.formatters.logarithmic, major: { enabled: !0 } },
  });
function os(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = wt(t.backdropPadding);
    return V(t.font && t.font.size, st.font.size) + e.height;
  }
  return 0;
}
function qr(i, t, e, n, s) {
  return i === n || i === s
    ? { start: t - e / 2, end: t + e / 2 }
    : i < n || i > s
    ? { start: t - e, end: t }
    : { start: t, end: t + e };
}
function xu(i) {
  const t = {
      l: i.left + i._padding.left,
      r: i.right - i._padding.right,
      t: i.top + i._padding.top,
      b: i.bottom - i._padding.bottom,
    },
    e = Object.assign({}, t),
    n = [],
    s = [],
    o = i._pointLabels.length,
    r = i.options.pointLabels,
    a = r.centerPointLabels ? it / o : 0;
  for (let h = 0; h < o; h++) {
    const u = r.setContext(i.getPointLabelContext(h));
    s[h] = u.padding;
    const g = i.getPointPosition(h, i.drawingArea + s[h], a),
      p = ut(u.font),
      f =
        ((l = i.ctx),
        (c = p),
        (d = tt((d = i._pointLabels[h])) ? d : [d]),
        { w: Vh(l, c.string, d), h: d.length * c.lineHeight });
    n[h] = f;
    const m = At(i.getIndexAngle(h) + a),
      b = Math.round(ws(m));
    yu(e, t, m, qr(b, g.x, f.w, 0, 180), qr(b, g.y, f.h, 90, 270));
  }
  var l, c, d;
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
    (i._pointLabelItems = (function (h, u, g) {
      const p = [],
        f = h._pointLabels.length,
        m = h.options,
        { centerPointLabels: b, display: x } = m.pointLabels,
        v = { extra: os(m) / 2, additionalAngle: b ? it / f : 0 };
      let y;
      for (let _ = 0; _ < f; _++) {
        (v.padding = g[_]), (v.size = u[_]);
        const w = vu(h, _, v);
        p.push(w),
          x === "auto" && ((w.visible = _u(w, y)), w.visible && (y = w));
      }
      return p;
    })(i, n, s));
}
function yu(i, t, e, n, s) {
  const o = Math.abs(Math.sin(e)),
    r = Math.abs(Math.cos(e));
  let a = 0,
    l = 0;
  n.start < t.l
    ? ((a = (t.l - n.start) / o), (i.l = Math.min(i.l, t.l - a)))
    : n.end > t.r && ((a = (n.end - t.r) / o), (i.r = Math.max(i.r, t.r + a))),
    s.start < t.t
      ? ((l = (t.t - s.start) / r), (i.t = Math.min(i.t, t.t - l)))
      : s.end > t.b &&
        ((l = (s.end - t.b) / r), (i.b = Math.max(i.b, t.b + l)));
}
function vu(i, t, e) {
  const n = i.drawingArea,
    { extra: s, additionalAngle: o, padding: r, size: a } = e,
    l = i.getPointPosition(t, n + s + r, o),
    c = Math.round(ws(At(l.angle + rt))),
    d = (function (g, p, f) {
      return (
        f === 90 || f === 270 ? (g -= p / 2) : (f > 270 || f < 90) && (g -= p),
        g
      );
    })(l.y, a.h, c),
    h = (function (g) {
      return g === 0 || g === 180 ? "center" : g < 180 ? "left" : "right";
    })(c),
    u = (function (g, p, f) {
      return f === "right" ? (g -= p) : f === "center" && (g -= p / 2), g;
    })(l.x, a.w, h);
  return {
    visible: !0,
    x: l.x,
    y: d,
    textAlign: h,
    left: u,
    top: d,
    right: u + a.w,
    bottom: d + a.h,
  };
}
function _u(i, t) {
  if (!t) return !0;
  const { left: e, top: n, right: s, bottom: o } = i;
  return !(
    te({ x: e, y: n }, t) ||
    te({ x: e, y: o }, t) ||
    te({ x: s, y: n }, t) ||
    te({ x: s, y: o }, t)
  );
}
function wu(i, t, e) {
  const { left: n, top: s, right: o, bottom: r } = e,
    { backdropColor: a } = t;
  if (!W(a)) {
    const l = Me(t.borderRadius),
      c = wt(t.backdropPadding);
    i.fillStyle = a;
    const d = n - c.left,
      h = s - c.top,
      u = o - n + c.width,
      g = r - s + c.height;
    Object.values(l).some((p) => p !== 0)
      ? (i.beginPath(), yi(i, { x: d, y: h, w: u, h: g, radius: l }), i.fill())
      : i.fillRect(d, h, u, g);
  }
}
function Xr(i, t, e, n) {
  const { ctx: s } = i;
  if (e) s.arc(i.xCenter, i.yCenter, t, 0, et);
  else {
    let o = i.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < n; r++)
      (o = i.getPointPosition(r, t)), s.lineTo(o.x, o.y);
  }
}
class si extends rn {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = wt(os(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      n = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, n) / 2));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    (this.min = ot(t) && !isNaN(t) ? t : 0),
      (this.max = ot(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / os(this.options));
  }
  generateTickLabels(t) {
    rn.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, n) => {
          const s = Z(this.options.pointLabels.callback, [e, n], this);
          return s || s === 0 ? s : "";
        })
        .filter((e, n) => this.chart.getDataVisibility(n)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? xu(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, n, s) {
    (this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((n - s) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, e, n, s)
      ));
  }
  getIndexAngle(t) {
    return At(
      t * (et / (this._pointLabels.length || 1)) +
        Rt(this.options.startAngle || 0)
    );
  }
  getDistanceFromCenterForValue(t) {
    if (W(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (W(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return (function (s, o, r) {
        return he(s, { label: r, index: o, type: "pointLabel" });
      })(this.getContext(), t, n);
    }
  }
  getPointPosition(t, e, n = 0) {
    const s = this.getIndexAngle(t) - rt + n;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: n, right: s, bottom: o } = this._pointLabelItems[t];
    return { left: e, top: n, right: s, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const n = this.ctx;
      n.save(),
        n.beginPath(),
        Xr(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          e,
          this._pointLabels.length
        ),
        n.closePath(),
        (n.fillStyle = t),
        n.fill(),
        n.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: n, grid: s, border: o } = e,
      r = this._pointLabels.length;
    let a, l, c;
    if (
      (e.pointLabels.display &&
        (function (d, h) {
          const {
            ctx: u,
            options: { pointLabels: g },
          } = d;
          for (let p = h - 1; p >= 0; p--) {
            const f = d._pointLabelItems[p];
            if (!f.visible) continue;
            const m = g.setContext(d.getPointLabelContext(p));
            wu(u, m, f);
            const b = ut(m.font),
              { x, y: v, textAlign: y } = f;
            Ce(u, d._pointLabels[p], x, v + b.lineHeight / 2, b, {
              color: m.color,
              textAlign: y,
              textBaseline: "middle",
            });
          }
        })(this, r),
      s.display &&
        this.ticks.forEach((d, h) => {
          if (h !== 0 || (h === 0 && this.min < 0)) {
            l = this.getDistanceFromCenterForValue(d.value);
            const u = this.getContext(h),
              g = s.setContext(u),
              p = o.setContext(u);
            (function (f, m, b, x, v) {
              const y = f.ctx,
                _ = m.circular,
                { color: w, lineWidth: M } = m;
              (!_ && !x) ||
                !w ||
                !M ||
                b < 0 ||
                (y.save(),
                (y.strokeStyle = w),
                (y.lineWidth = M),
                y.setLineDash(v.dash),
                (y.lineDashOffset = v.dashOffset),
                y.beginPath(),
                Xr(f, b, _, x),
                y.closePath(),
                y.stroke(),
                y.restore());
            })(this, g, l, r, p);
          }
        }),
      n.display)
    ) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const d = n.setContext(this.getPointLabelContext(a)),
          { color: h, lineWidth: u } = d;
        u &&
          h &&
          ((t.lineWidth = u),
          (t.strokeStyle = h),
          t.setLineDash(d.borderDash),
          (t.lineDashOffset = d.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            e.ticks.reverse ? this.min : this.max
          )),
          (c = this.getPointPosition(a, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      n = e.ticks;
    if (!n.display) return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && this.min >= 0 && !e.reverse) return;
        const c = n.setContext(this.getContext(l)),
          d = ut(c.font);
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (t.font = d.string),
            (r = t.measureText(a.label).width),
            (t.fillStyle = c.backdropColor);
          const h = wt(c.backdropPadding);
          t.fillRect(
            -r / 2 - h.left,
            -o - d.size / 2 - h.top,
            r + h.width,
            d.size + h.height
          );
        }
        Ce(t, a.label, 0, -o, d, {
          color: c.color,
          strokeColor: c.textStrokeColor,
          strokeWidth: c.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
P(si, "id", "radialLinear"),
  P(si, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: un.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback: (t) => t,
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  P(si, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  P(si, "descriptors", { angleLines: { _fallback: "grid" } });
const an = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Dt = Object.keys(an);
function Gr(i, t) {
  return i - t;
}
function Zr(i, t) {
  if (W(t)) return null;
  const e = i._adapter,
    { parser: n, round: s, isoWeekday: o } = i._parseOpts;
  let r = t;
  return (
    typeof n == "function" && (r = n(r)),
    ot(r) || (r = typeof n == "string" ? e.parse(r, n) : e.parse(r)),
    r === null
      ? null
      : (s &&
          (r =
            s !== "week" || (!Ne(o) && o !== !0)
              ? e.startOf(r, s)
              : e.startOf(r, "isoWeek", o)),
        +r)
  );
}
function Jr(i, t, e, n) {
  const s = Dt.length;
  for (let o = Dt.indexOf(i); o < s - 1; ++o) {
    const r = an[Dt[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= n) return Dt[o];
  }
  return Dt[s - 1];
}
function Qr(i, t, e) {
  if (e) {
    if (e.length) {
      const { lo: n, hi: s } = Ms(e, t);
      i[e[n] >= t ? e[n] : e[s]] = !0;
    }
  } else i[t] = !0;
}
function ta(i, t, e) {
  const n = [],
    s = {},
    o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    (a = t[r]), (s[a] = r), n.push({ value: a, major: !1 });
  return o !== 0 && e
    ? (function (l, c, d, h) {
        const u = l._adapter,
          g = +u.startOf(c[0].value, h),
          p = c[c.length - 1].value;
        let f, m;
        for (f = g; f <= p; f = +u.add(f, 1, h))
          (m = d[f]), m >= 0 && (c[m].major = !0);
        return c;
      })(i, n, s, e)
    : n;
}
class fi extends Ae {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e = {}) {
    const n = t.time || (t.time = {}),
      s = (this._adapter = new xd(t.adapters.date));
    s.init(e),
      ai(n.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: n.parser,
        round: n.round,
        isoWeekday: n.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return t === void 0 ? null : Zr(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      n = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      r || isNaN(c.min) || (s = Math.min(s, c.min)),
        a || isNaN(c.max) || (o = Math.max(o, c.max));
    }
    (r && a) ||
      (l(this._getLabelBounds()),
      (t.bounds === "ticks" && t.ticks.source === "labels") ||
        l(this.getMinMax(!1))),
      (s = ot(s) && !isNaN(s) ? s : +e.startOf(Date.now(), n)),
      (o = ot(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      n = Number.NEGATIVE_INFINITY;
    return t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n };
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      n = t.ticks,
      s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      r = (function (a, l, c) {
        let d = 0,
          h = a.length;
        for (; d < h && a[d] < l; ) d++;
        for (; h > d && a[h - 1] > c; ) h--;
        return d > 0 || h < a.length ? a.slice(d, h) : a;
      })(s, o, this.max);
    return (
      (this._unit =
        e.unit ||
        (n.autoSkip
          ? Jr(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : (function (a, l, c, d, h) {
              for (let u = Dt.length - 1; u >= Dt.indexOf(c); u--) {
                const g = Dt[u];
                if (an[g].common && a._adapter.diff(h, d, g) >= l - 1) return g;
              }
              return Dt[c ? Dt.indexOf(c) : 0];
            })(this, r.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        n.major.enabled && this._unit !== "year"
          ? (function (a) {
              for (let l = Dt.indexOf(a) + 1, c = Dt.length; l < c; ++l)
                if (an[Dt[l]].common) return Dt[l];
            })(this._unit)
          : void 0),
      this.initOffsets(s),
      t.reverse && r.reverse(),
      ta(this, r, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e,
      n,
      s = 0,
      o = 0;
    this.options.offset &&
      t.length &&
      ((e = this.getDecimalForValue(t[0])),
      (s = t.length === 1 ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
      (n = this.getDecimalForValue(t[t.length - 1])),
      (o =
        t.length === 1
          ? n
          : (n - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (s = mt(s, 0, r)),
      (o = mt(o, 0, r)),
      (this._offsets = { start: s, end: o, factor: 1 / (s + 1 + o) });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      n = this.max,
      s = this.options,
      o = s.time,
      r = o.unit || Jr(o.minUnit, e, n, this._getLabelCapacity(e)),
      a = V(s.ticks.stepSize, 1),
      l = r === "week" && o.isoWeekday,
      c = Ne(l) || l === !0,
      d = {};
    let h,
      u,
      g = e;
    if (
      (c && (g = +t.startOf(g, "isoWeek", l)),
      (g = +t.startOf(g, c ? "day" : r)),
      t.diff(n, e, r) > 1e5 * a)
    )
      throw new Error(
        e + " and " + n + " are too far apart with stepSize of " + a + " " + r
      );
    const p = s.ticks.source === "data" && this.getDataTimestamps();
    for (h = g, u = 0; h < n; h = +t.add(h, a, r), u++) Qr(d, h, p);
    return (
      (h !== n && s.bounds !== "ticks" && u !== 1) || Qr(d, h, p),
      Object.keys(d)
        .sort(Gr)
        .map((f) => +f)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      n = this.options.time;
    return n.tooltipFormat
      ? e.format(t, n.tooltipFormat)
      : e.format(t, n.displayFormats.datetime);
  }
  format(t, e) {
    const n = this.options.time.displayFormats,
      s = this._unit,
      o = e || n[s];
    return this._adapter.format(t, o);
  }
  _tickFormatFunction(t, e, n, s) {
    const o = this.options,
      r = o.ticks.callback;
    if (r) return Z(r, [t, e, n], this);
    const a = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      d = l && a[l],
      h = c && a[c],
      u = n[e],
      g = c && h && u && u.major;
    return this._adapter.format(t, s || (g ? h : d));
  }
  generateTickLabels(t) {
    let e, n, s;
    for (e = 0, n = t.length; e < n; ++e)
      (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + n) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      n = this.ctx.measureText(t).width,
      s = Rt(this.isHorizontal() ? e.maxRotation : e.minRotation),
      o = Math.cos(s),
      r = Math.sin(s),
      a = this._resolveTickFontOptions(0).size;
    return { w: n * o + a * r, h: n * r + a * o };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      n = e.displayFormats,
      s = n[e.unit] || n.millisecond,
      o = this._tickFormatFunction(t, 0, ta(this, [t], this._majorUnit), s),
      r = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t,
      e,
      n = this._cache.data || [];
    if (n.length) return n;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (t = 0, e = s.length; t < e; ++t)
      n = n.concat(s[t].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(n));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, n;
    if (t.length) return t;
    const s = this.getLabels();
    for (e = 0, n = s.length; e < n; ++e) t.push(Zr(this, s[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Ea(t.sort(Gr));
  }
}
P(fi, "id", "time"),
  P(fi, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function $i(i, t, e) {
  let n,
    s,
    o,
    r,
    a = 0,
    l = i.length - 1;
  e
    ? (t >= i[a].pos && t <= i[l].pos && ({ lo: a, hi: l } = Qt(i, "pos", t)),
      ({ pos: n, time: o } = i[a]),
      ({ pos: s, time: r } = i[l]))
    : (t >= i[a].time &&
        t <= i[l].time &&
        ({ lo: a, hi: l } = Qt(i, "time", t)),
      ({ time: n, pos: o } = i[a]),
      ({ time: s, pos: r } = i[l]));
  const c = s - n;
  return c ? o + ((r - o) * (t - n)) / c : o;
}
var qi,
  Mu = Object.freeze({
    __proto__: null,
    CategoryScale: _i,
    LinearScale: wi,
    LogarithmicScale: ss,
    RadialLinearScale: si,
    TimeScale: fi,
    TimeSeriesScale:
      ((qi = class extends fi {
        constructor(i) {
          super(i),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
        }
        initOffsets() {
          const i = this._getTimestampsForTable(),
            t = (this._table = this.buildLookupTable(i));
          (this._minPos = $i(t, this.min)),
            (this._tableRange = $i(t, this.max) - this._minPos),
            super.initOffsets(i);
        }
        buildLookupTable(i) {
          const { min: t, max: e } = this,
            n = [],
            s = [];
          let o, r, a, l, c;
          for (o = 0, r = i.length; o < r; ++o)
            (l = i[o]), l >= t && l <= e && n.push(l);
          if (n.length < 2)
            return [
              { time: t, pos: 0 },
              { time: e, pos: 1 },
            ];
          for (o = 0, r = n.length; o < r; ++o)
            (c = n[o + 1]),
              (a = n[o - 1]),
              (l = n[o]),
              Math.round((c + a) / 2) !== l &&
                s.push({ time: l, pos: o / (r - 1) });
          return s;
        }
        _generate() {
          const i = this.min,
            t = this.max;
          let e = super.getDataTimestamps();
          return (
            (e.includes(i) && e.length) || e.splice(0, 0, i),
            (e.includes(t) && e.length !== 1) || e.push(t),
            e.sort((n, s) => n - s)
          );
        }
        _getTimestampsForTable() {
          let i = this._cache.all || [];
          if (i.length) return i;
          const t = this.getDataTimestamps(),
            e = this.getLabelTimestamps();
          return (
            (i =
              t.length && e.length
                ? this.normalize(t.concat(e))
                : t.length
                ? t
                : e),
            (i = this._cache.all = i),
            i
          );
        }
        getDecimalForValue(i) {
          return ($i(this._table, i) - this._minPos) / this._tableRange;
        }
        getValueForPixel(i) {
          const t = this._offsets,
            e = this.getDecimalForPixel(i) / t.factor - t.end;
          return $i(this._table, e * this._tableRange + this._minPos, !0);
        }
      }),
      P(qi, "id", "timeseries"),
      P(qi, "defaults", fi.defaults),
      qi),
  });
const ku = [bd, eu, gu, Mu];
var Su = Y("<canvas>");
const Du = (i) => {
  const [t, e] = H(),
    [n, s] = H(),
    o = ln(
      { width: 512, height: 512, options: { responsive: !0 }, plugins: [] },
      i
    ),
    r = () => {
      var u;
      const c = (u = t()) == null ? void 0 : u.getContext("2d"),
        d = El(o),
        h = new It(c, {
          type: d.type,
          data: d.data,
          options: d.options,
          plugins: d.plugins,
        });
      s(h);
    };
  return (
    Pe(() => r()),
    X(
      Ct(
        () => o.data,
        () => {
          (n().data = o.data), n().update();
        },
        { defer: !0 }
      )
    ),
    X(
      Ct(
        () => o.options,
        () => {
          (n().options = o.options), n().update();
        },
        { defer: !0 }
      )
    ),
    X(
      Ct(
        [() => o.width, () => o.height],
        () => {
          n().resize(o.width, o.height);
        },
        { defer: !0 }
      )
    ),
    X(
      Ct(
        () => o.type,
        () => {
          const c = [n().width, n().height];
          n().destroy(), r(), n().resize(...c);
        },
        { defer: !0 }
      )
    ),
    ke(() => {
      var c;
      (c = n()) == null || c.destroy(), no(o.ref, null);
    }),
    It.register(ol, al, ll, hl),
    (a = Su()),
    typeof (l = no(o.ref, (c) => e(c))) == "function" && Fn(l, a),
    _e(
      (c) => {
        var d = o.height,
          h = o.width;
        return (
          d !== c.e && dt(a, "height", (c.e = d)),
          h !== c.t && dt(a, "width", (c.t = h)),
          c
        );
      },
      { e: void 0, t: void 0 }
    ),
    a
  );
  var a, l;
};
function Cu(i, t) {
  const e = {
    responsive: !0,
    maintainAspectRatio: !1,
    scales: ["bar", "line", "scatter"].includes(i)
      ? {
          x: { border: { display: !1 }, grid: { display: !1 } },
          y: {
            border: { dash: [3], dashOffset: 3, display: !1 },
            grid: { color: "hsla(240, 3.8%, 46.1%, 0.4)" },
          },
        }
      : {},
    plugins: {
      legend: ["bar", "line"].includes(i)
        ? {
            display: !0,
            align: "end",
            labels: {
              usePointStyle: !0,
              boxWidth: 6,
              boxHeight: 6,
              color: "hsl(240, 3.8%, 46.1%)",
              font: { size: 14 },
            },
          }
        : { display: !1 },
      tooltip: {
        enabled: !1,
        external: (n) =>
          (function (s) {
            var c;
            let o = document.getElementById("chartjs-tooltip");
            o ||
              ((o = document.createElement("div")),
              (o.id = "chartjs-tooltip"),
              document.body.appendChild(o));
            const r = s.tooltip;
            if (r.opacity === 0 || !r.body) return void (o.style.opacity = "0");
            o.className = `p-2 bg-card text-card-foreground rounded-lg border shadow-sm text-sm ${
              (c = r.yAlign) != null ? c : "no-transform"
            }`;
            let a = "";
            r.title.forEach((d) => {
              a += `<h3 class="font-semibold leading-none tracking-tight">${d}</h3>`;
            }),
              (a += '<div class="mt-1 text-muted-foreground">'),
              r.body
                .flatMap((d) => d.lines)
                .forEach((d, h) => {
                  const u = r.labelColors[h];
                  a += `
        <div class="flex items-center">
          <span class="inline-block h-2 w-2 mr-1 rounded-full border" style="background: ${u.backgroundColor}; border-color: ${u.borderColor}"></span>
          ${d}
        </div>`;
                }),
              (a += "</div>"),
              (o.innerHTML = a);
            const l = s.chart.canvas.getBoundingClientRect();
            (o.style.opacity = "1"),
              (o.style.position = "absolute"),
              (o.style.left = `${l.left + window.scrollX + r.caretX}px`),
              (o.style.top = `${l.top + window.scrollY + r.caretY}px`),
              (o.style.pointerEvents = "none");
          })(n),
      },
    },
  };
  return It.register(...t), (n) => D(Du, $({ type: i, options: e }, n));
}
const Pu = Cu("line", [Be, jt, Ke, _i, wi]);
ds(
  {},
  {
    Checkbox: () => Au,
    Control: () => Es,
    Description: () => ul,
    ErrorMessage: () => fl,
    Indicator: () => Ls,
    Input: () => Is,
    Label: () => Rs,
    Root: () => Fs,
  }
);
var dl = ki();
function We() {
  const i = gi(dl);
  if (i === void 0)
    throw new Error(
      "[kobalte]: `useCheckboxContext` must be used within a `Checkbox` component"
    );
  return i;
}
function Es(i) {
  const t = hs(),
    e = We(),
    n = ee({ id: e.generateId("control") }, i),
    [s, o] = G(n, ["onClick", "onKeyDown"]);
  return D(
    Bt,
    $(
      {
        as: "div",
        onClick: (r) => {
          var a;
          re(r, s.onClick), e.toggle(), (a = e.inputRef()) == null || a.focus();
        },
        onKeyDown: (r) => {
          var a;
          re(r, s.onKeyDown),
            r.key === ac.Space &&
              (e.toggle(), (a = e.inputRef()) == null || a.focus());
        },
      },
      () => t.dataset(),
      () => e.dataset(),
      o
    )
  );
}
function ul(i) {
  const t = We();
  return D(
    jl,
    $(() => t.dataset(), i)
  );
}
function fl(i) {
  const t = We();
  return D(
    Hl,
    $(() => t.dataset(), i)
  );
}
function Ls(i) {
  const t = hs(),
    e = We(),
    [n, s] = H(),
    o = ee({ id: e.generateId("indicator") }, i),
    [r, a] = G(o, ["ref", "forceMount"]),
    { present: l } = us({
      show: () => r.forceMount || e.indeterminate() || e.checked(),
      element: () => {
        var c;
        return (c = n()) != null ? c : null;
      },
    });
  return D(vt, {
    get when() {
      return l();
    },
    get children() {
      return D(
        Bt,
        $(
          {
            as: "div",
            ref(c) {
              var d = Oe(s, r.ref);
              typeof d == "function" && d(c);
            },
          },
          () => t.dataset(),
          () => e.dataset(),
          a
        )
      );
    },
  });
}
function Is(i) {
  let t;
  const e = hs(),
    n = We(),
    s = ee({ id: n.generateId("input") }, i),
    [o, r, a] = G(s, ["ref", "style", "onChange", "onFocus", "onBlur"], $l),
    { fieldProps: l } = Ul(r),
    [c, d] = H(!1);
  return (
    X(
      Ct(
        [() => n.checked(), () => n.value()],
        () => {
          d(!0),
            t == null ||
              t.dispatchEvent(
                new Event("input", { bubbles: !0, cancelable: !0 })
              ),
            t == null ||
              t.dispatchEvent(
                new Event("change", { bubbles: !0, cancelable: !0 })
              );
        },
        { defer: !0 }
      )
    ),
    X(
      Ct([() => t, () => n.indeterminate(), () => n.checked()], ([h, u]) => {
        h && (h.indeterminate = u);
      })
    ),
    D(
      Bt,
      $(
        {
          as: "input",
          ref(h) {
            var u = Oe((g) => {
              n.setInputRef(g), (t = g);
            }, o.ref);
            typeof u == "function" && u(h);
          },
          type: "checkbox",
          get id() {
            return l.id();
          },
          get name() {
            return e.name();
          },
          get value() {
            return n.value();
          },
          get checked() {
            return n.checked();
          },
          get required() {
            return e.isRequired();
          },
          get disabled() {
            return e.isDisabled();
          },
          get readonly() {
            return e.isReadOnly();
          },
          get style() {
            return ht(ht({}, oc), o.style);
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
            return e.validationState() === "invalid" || void 0;
          },
          get "aria-required"() {
            return e.isRequired();
          },
          get "aria-disabled"() {
            return e.isDisabled();
          },
          get "aria-readonly"() {
            return e.isReadOnly();
          },
          onChange: (h) => {
            if ((re(h, o.onChange), h.stopPropagation(), !c())) {
              const u = h.target;
              n.setIsChecked(u.checked), (u.checked = n.checked());
            }
            d(!1);
          },
          onFocus: (h) => {
            re(h, o.onFocus), n.setIsFocused(!0);
          },
          onBlur: (h) => {
            re(h, o.onBlur), n.setIsFocused(!1);
          },
        },
        () => e.dataset(),
        () => n.dataset(),
        a
      )
    )
  );
}
function Rs(i) {
  const t = We();
  return D(
    Yl,
    $(() => t.dataset(), i)
  );
}
function Fs(i) {
  let t;
  const e = `checkbox-${ls()}`,
    n = ee({ value: "on", id: e }, i),
    [s, o, r] = G(
      n,
      [
        "ref",
        "children",
        "value",
        "checked",
        "defaultChecked",
        "indeterminate",
        "onChange",
        "onPointerDown",
      ],
      ql
    ),
    [a, l] = H(),
    [c, d] = H(!1),
    { formControlContext: h } = Xl(o),
    u = mh({
      isSelected: () => s.checked,
      defaultIsSelected: () => s.defaultChecked,
      onSelectedChange: (m) => {
        var b;
        return (b = s.onChange) == null ? void 0 : b.call(s, m);
      },
      isDisabled: () => h.isDisabled(),
      isReadOnly: () => h.isReadOnly(),
    });
  Gl(
    () => t,
    () => {
      var m;
      return u.setIsSelected((m = s.defaultChecked) != null ? m : !1);
    }
  );
  const g = (m) => {
      re(m, s.onPointerDown), c() && m.preventDefault();
    },
    p = ct(() => ({
      "data-checked": u.isSelected() ? "" : void 0,
      "data-indeterminate": s.indeterminate ? "" : void 0,
    })),
    f = {
      value: () => s.value,
      dataset: p,
      checked: () => u.isSelected(),
      indeterminate: () => {
        var m;
        return (m = s.indeterminate) != null ? m : !1;
      },
      inputRef: a,
      generateId: fa(() => I(o.id)),
      toggle: () => u.toggle(),
      setIsChecked: (m) => u.setIsSelected(m),
      setIsFocused: d,
      setInputRef: l,
    };
  return D(Zl.Provider, {
    value: h,
    get children() {
      return D(dl.Provider, {
        value: f,
        get children() {
          return D(
            Bt,
            $(
              {
                as: "div",
                ref(m) {
                  var b = Oe((x) => (t = x), s.ref);
                  typeof b == "function" && b(m);
                },
                role: "group",
                get id() {
                  return I(o.id);
                },
                onPointerDown: g,
              },
              () => h.dataset(),
              p,
              r,
              {
                get children() {
                  return D(Ou, {
                    state: f,
                    get children() {
                      return s.children;
                    },
                  });
                },
              }
            )
          );
        },
      });
    },
  });
}
function Ou(i) {
  const t = Ll(() => {
    const e = i.children;
    return rc(e) ? e(i.state) : e;
  });
  return Se(t);
}
var Au = Object.assign(Fs, {
    Control: Es,
    Description: ul,
    ErrorMessage: fl,
    Indicator: Ls,
    Input: Is,
    Label: Rs,
  }),
  Tu = Y(
    '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=#171a1a stroke-width=4 stroke-linecap=round stroke-linejoin=round class=siz-4><path d="M5 12l5 5l10 -10">'
  );
const gl = (i) => {
    const [, t] = G(i, ["class"]);
    return D(
      Fs,
      $(
        {
          get class() {
            return xt("grid gap-2", i.class);
          },
        },
        t
      )
    );
  },
  Eu = cs(
    "aspect-square flex items-center justify-center border-2 border-second data-[checked]:border-none data-[checked]:bg-brand ",
    {
      variants: {
        size: {
          sm: "size-4 rounded-sm",
          default: "size-6 rounded-md",
          lg: "size-8 rounded-lg",
        },
      },
      defaultVariants: { size: "default" },
    }
  ),
  Lu = (i) => {
    const [t, e] = G(i, ["class", "children", "size"]);
    return D(
      gl,
      $(
        {
          get class() {
            return xt(
              "flex items-center space-x-2 cursor-pointer data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
              i.class
            );
          },
        },
        e,
        {
          get children() {
            return [
              D(Is, {}),
              D(Es, {
                get class() {
                  return xt(Eu({ size: t.size }));
                },
                get children() {
                  return D(Ls, {
                    get class() {
                      return xt("flex items-center justify-center size-2.5", {
                        "size-2": t.size === "sm",
                        "size-4": t.size === "lg",
                      });
                    },
                    get children() {
                      return Tu();
                    },
                  });
                },
              }),
              Se(() => i.children),
            ];
          },
        }
      )
    );
  },
  Iu = (i) => {
    const [, t] = G(i, ["class"]);
    return D(
      Rs,
      $(
        {
          get class() {
            return xt(
              "text-sm font-medium leading-none cursor-pointer data-[disabled]:cursor-not-allowed",
              i.class
            );
          },
        },
        t
      )
    );
  };
ds(
  {},
  {
    Collapsible: () => Ru,
    Content: () => zs,
    Root: () => Bs,
    Trigger: () => Ks,
  }
);
var pl = ki();
function ml() {
  const i = gi(pl);
  if (i === void 0)
    throw new Error(
      "[kobalte]: `useCollapsibleContext` must be used within a `Collapsible.Root` component"
    );
  return i;
}
function zs(i) {
  const [t, e] = H(),
    n = ml(),
    s = ee({ id: n.generateId("content") }, i),
    [o, r] = G(s, ["ref", "id", "style"]),
    { present: a } = us({
      show: n.shouldMount,
      element: () => {
        var p;
        return (p = t()) != null ? p : null;
      },
    }),
    [l, c] = H(0),
    [d, h] = H(0);
  let u,
    g = n.isOpen() || a();
  return (
    Pe(() => {
      const p = requestAnimationFrame(() => {
        g = !1;
      });
      ke(() => {
        cancelAnimationFrame(p);
      });
    }),
    X(
      Ct(a, () => {
        if (!t()) return;
        (u = u || {
          transitionDuration: t().style.transitionDuration,
          animationName: t().style.animationName,
        }),
          (t().style.transitionDuration = "0s"),
          (t().style.animationName = "none");
        const p = t().getBoundingClientRect();
        c(p.height),
          h(p.width),
          g ||
            ((t().style.transitionDuration = u.transitionDuration),
            (t().style.animationName = u.animationName));
      })
    ),
    X(() => ke(n.registerContentId(o.id))),
    D(vt, {
      get when() {
        return a();
      },
      get children() {
        return D(
          Bt,
          $(
            {
              as: "div",
              ref(p) {
                var f = Oe(e, o.ref);
                typeof f == "function" && f(p);
              },
              get id() {
                return o.id;
              },
              get style() {
                return ht(
                  {
                    "--kb-collapsible-content-height": l()
                      ? `${l()}px`
                      : void 0,
                    "--kb-collapsible-content-width": d() ? `${d()}px` : void 0,
                  },
                  o.style
                );
              },
            },
            () => n.dataset(),
            r
          )
        );
      },
    })
  );
}
function Bs(i) {
  const t = `collapsible-${ls()}`,
    e = ee({ id: t }, i),
    [n, s] = G(e, [
      "open",
      "defaultOpen",
      "onOpenChange",
      "disabled",
      "forceMount",
    ]),
    [o, r] = H(),
    a = hc({
      open: () => n.open,
      defaultOpen: () => n.defaultOpen,
      onOpenChange: (d) => {
        var h;
        return (h = n.onOpenChange) == null ? void 0 : h.call(n, d);
      },
    }),
    l = ct(() => ({
      "data-expanded": a.isOpen() ? "" : void 0,
      "data-closed": a.isOpen() ? void 0 : "",
      "data-disabled": n.disabled ? "" : void 0,
    })),
    c = {
      dataset: l,
      isOpen: a.isOpen,
      disabled: () => {
        var d;
        return (d = n.disabled) != null ? d : !1;
      },
      shouldMount: () => n.forceMount || a.isOpen(),
      contentId: o,
      toggle: a.toggle,
      generateId: fa(() => s.id),
      registerContentId: lc(r),
    };
  return D(pl.Provider, {
    value: c,
    get children() {
      return D(Bt, $({ as: "div" }, l, s));
    },
  });
}
function Ks(i) {
  const t = ml(),
    [e, n] = G(i, ["onClick"]);
  return D(
    Nl,
    $(
      {
        get "aria-expanded"() {
          return t.isOpen();
        },
        get "aria-controls"() {
          return Se(() => !!t.isOpen())() ? t.contentId() : void 0;
        },
        get disabled() {
          return t.disabled();
        },
        onClick: (s) => {
          re(s, e.onClick), t.toggle();
        },
      },
      () => t.dataset(),
      n
    )
  );
}
var Ru = Object.assign(Bs, { Content: zs, Trigger: Ks });
const Fu = Bs,
  zu = Ks,
  Bu = zs;
It.register(...ku);
var Ku = Y(
    '<div><svg class=-rotate-90><circle fill=transparent stroke=""stroke-linecap=round></circle></svg><div>'
  ),
  Vu = Y(
    '<svg><circle fill=transparent stroke=""stroke-linecap=round></svg>',
    !1,
    !0
  );
const ea = {
    xs: { radius: 15, strokeWidth: 3 },
    sm: { radius: 19, strokeWidth: 4 },
    md: { radius: 32, strokeWidth: 12 },
    lg: { radius: 52, strokeWidth: 8 },
    xl: { radius: 80, strokeWidth: 10 },
  },
  Nu = (i) => {
    const t = ln({ size: "md", showAnimation: !0 }, i),
      [e, n] = G(t, [
        "class",
        "children",
        "value",
        "size",
        "radius",
        "strokeWidth",
        "showAnimation",
      ]),
      s = () =>
        (function (f) {
          return f === void 0 ? 0 : f > 100 ? 100 : f;
        })(e.value),
      o = () => {
        var f;
        return (f = e.radius) != null ? f : ea[e.size].radius;
      },
      r = () => {
        var f;
        return (f = e.strokeWidth) != null ? f : ea[e.size].strokeWidth;
      },
      a = () => o() - r() / 2,
      l = () => 2 * a() * Math.PI,
      c = () => l() - (s() / 100) * l();
    return (
      (h = Ku()),
      (u = h.firstChild),
      (g = u.firstChild),
      (p = u.nextSibling),
      de(
        h,
        $(
          {
            get class() {
              return xt(
                "flex flex-col items-center justify-center bg-layer2 rounded-full p-1",
                e.class
              );
            },
          },
          n
        ),
        !1,
        !0
      ),
      R(
        u,
        ((d = Se(() => s() >= 0)),
        () => {
          return d()
            ? ((f = Vu()),
              _e(
                (m) => {
                  var b = a(),
                    x = o(),
                    v = o(),
                    y = r(),
                    _ = l() + " " + l(),
                    w = c(),
                    M = xt(
                      "stroke-brand transition-colors ease-linear",
                      e.showAnimation
                        ? "transition-all duration-300 ease-in-out"
                        : ""
                    );
                  return (
                    b !== m.e && dt(f, "r", (m.e = b)),
                    x !== m.t && dt(f, "cx", (m.t = x)),
                    v !== m.a && dt(f, "cy", (m.a = v)),
                    y !== m.o && dt(f, "stroke-width", (m.o = y)),
                    _ !== m.i && dt(f, "stroke-dasharray", (m.i = _)),
                    w !== m.n && dt(f, "stroke-dashoffset", (m.n = w)),
                    M !== m.s && dt(f, "class", (m.s = M)),
                    m
                  );
                },
                {
                  e: void 0,
                  t: void 0,
                  a: void 0,
                  o: void 0,
                  i: void 0,
                  n: void 0,
                  s: void 0,
                }
              ),
              f)
            : null;
          var f;
        }),
        null
      ),
      R(p, () => e.children),
      _e(
        (f) => {
          var m = 2 * o(),
            b = 2 * o(),
            x = `0 0 ${2 * o()} ${2 * o()}`,
            v = a(),
            y = o(),
            _ = o(),
            w = r(),
            M = xt("stroke-secondary transition-colors ease-linear"),
            k = xt("absolute flex");
          return (
            m !== f.e && dt(u, "width", (f.e = m)),
            b !== f.t && dt(u, "height", (f.t = b)),
            x !== f.a && dt(u, "viewBox", (f.a = x)),
            v !== f.o && dt(g, "r", (f.o = v)),
            y !== f.i && dt(g, "cx", (f.i = y)),
            _ !== f.n && dt(g, "cy", (f.n = _)),
            w !== f.s && dt(g, "stroke-width", (f.s = w)),
            M !== f.h && dt(g, "class", (f.h = M)),
            k !== f.r && oi(p, (f.r = k)),
            f
          );
        },
        {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0,
          n: void 0,
          s: void 0,
          h: void 0,
          r: void 0,
        }
      ),
      h
    );
    var d, h, u, g, p;
  };
function Wu(i, t) {
  let e = 0;
  const n = i.map((s, o) =>
    ct(
      () => ((e = o), s()),
      void 0,
      Il ? { name: o + 1 + ". source", equals: !1 } : ga
    )
  );
  return ct(() => n.map((s) => s())[e], void 0, t);
}
function ju(i, t, e) {
  let n = () => t;
  const [s, o] = H(t, ga),
    r = ct(
      ((a, l) => (a.length > 0 ? () => a(ve(l)) : a))(i, () => n()),
      t
    );
  return [
    (n = Wu([s, r], e)),
    (a) => o(() => (typeof a == "function" ? a(ve(n)) : a)),
  ];
}
var En = (i, t, e) => {
    if (Mi) return () => {};
    const n = e(i, t);
    return ke(() => clearInterval(n));
  },
  Hu = (i, t, e) => {
    if (Mi) return;
    if (typeof t == "number") return void En(i, t, e);
    let n = !1,
      s = performance.now(),
      o = 0,
      r = !1;
    const a = () => {
      ve(i), (s = performance.now()), (n = e === setTimeout);
    };
    X((l) => {
      if (n) return;
      const c = t();
      if (c === !1) return l && (o += (performance.now() - s) / l), c;
      if ((l === !1 && (s = performance.now()), r)) {
        if (
          (l && (o += (performance.now() - s) / l),
          (s = performance.now()),
          o >= 1)
        )
          (o = 0), a();
        else if (o > 0) {
          const [d, h] = H(void 0, { equals: !1 });
          return (
            d(),
            En(
              () => {
                (o = 0), (r = !1), h(), a();
              },
              (1 - o) * c,
              setTimeout
            ),
            c
          );
        }
      }
      return (r = !0), En(a, c, e), c;
    });
  },
  Vs = 6e4,
  rs = 36e5,
  ia = (i) => (i instanceof Date ? i : new Date(i)),
  $u = (i, t) => t.getTime() - i.getTime(),
  na = (i) => ({
    days: Math.floor(i / 864e5),
    hours: Math.floor((i / rs) % 24),
    minutes: Math.floor((i / Vs) % 60),
    seconds: Math.floor((i / 1e3) % 60),
    milliseconds: i % 100,
  }),
  sa = (i) => {
    const [t, e] = ju(() => ia(I(i)));
    return [t, (n) => e((s) => ia(cc(n, s)))];
  };
function Uu(i = Vs / 2) {
  const [t, e] = H(void 0, { equals: !1 });
  return [
    (function (s, o, r, a) {
      if (Mi) return s;
      const [l, c] = H(ve(s.bind(void 0, r)), a),
        d = () => c(s);
      return Hu(d, o, setInterval), cn(d), l;
    })(() => (t(), new Date()), i, void 0, {
      equals: (s, o) => s.getTime() === o.getTime(),
    }),
    e,
  ];
}
function oa(i, t) {
  const [e] = sa(i),
    [n] = sa(t);
  return [ct(() => $u(e(), n())), { from: e, to: n }];
}
function bl(i, t = 1e3) {
  const [e, n] = (function (
    o,
    r = (a) => (Math.abs(a) <= rs ? Vs / 2 : rs / 2)
  ) {
    const a = typeof r == "function" ? () => r(d()) : r,
      [l, c] = Uu(a),
      [d, { to: h }] = oa(l, o);
    return [d, { update: c, target: h, now: l }];
  })(i, t);
  return [
    (function (o, r) {
      let a;
      a = r !== void 0 ? oa(o, r)[0] : o;
      const [l, c] = ha(na(a()));
      return cn(() => c(na(a()))), l;
    })(e),
    n,
  ];
}
var Yu = Y("<span>"),
  qu = Y('<span class="flex items-center gap-1 text-xs"><span>'),
  Xu = Y('<div class="flex flex-col gap-2"><span>'),
  Gu = Y(
    '<div class="flex items-center gap-1 justify-start text-secondary"><span></span><span>'
  ),
  Zu = Y('<div class="flex items-center text-brand"><span>');
const Ju = () => hn().get("/activity/recharge-bonus/dashboard/"),
  Qu = (i) => {
    const [t, e] = H(0),
      [n] = bl(t),
      s = ct(() =>
        n.seconds && n.seconds >= 0
          ? new we(i.duration - n.seconds)
              .div(i.duration)
              .mul(100)
              .todp(2)
              .toNumber()
          : 0
      );
    return (
      X(() => {
        e(i.endTime);
      }),
      D(Nu, {
        class: "size-6",
        get value() {
          return s();
        },
      })
    );
  },
  tf = () => {
    const i = Fl(),
      t = Xi(() => ({
        queryKey: ["/activity/recharge-bonus/dashboard/"],
        queryFn: Ju,
        refetchInterval: 1e4,
      })),
      e = ct(() => (t.data ? new Date(Date.now() + 1e4).valueOf() : 0));
    return D(Vn, {
      class: "w-[19rem]",
      get children() {
        return [
          D(Nn, {
            class: "!p-2",
            get children() {
              return D(Wn, {
                class: "flex justify-between items-center text-sm",
                get children() {
                  return [
                    ((o = Yu()), R(o, () => J("__ENV_BCD__ Treasure Box")), o),
                    ((n = qu()),
                    (s = n.firstChild),
                    R(
                      n,
                      D(Ve, {
                        token: { symbol: "BCD", decimal: 9, icon: "BCD" },
                      }),
                      s
                    ),
                    R(s, () => {
                      var r;
                      return Number(
                        (r = t.data) == null ? void 0 : r.bonusAmount
                      ).toFixed(2);
                    }),
                    R(
                      n,
                      D(Qu, {
                        get endTime() {
                          return e();
                        },
                        duration: 10,
                      }),
                      null
                    ),
                    n),
                  ];
                  var n, s, o;
                },
              });
            },
          }),
          D(jn, {
            class: "p-2 text-xs space-y-4",
            get children() {
              return [
                D(vt, {
                  get when() {
                    return t.data;
                  },
                  get children() {
                    return D(Tc, {
                      get value() {
                        return new we(t.data.bonusAmount)
                          .div(t.data.bonusThreshold)
                          .mul(100)
                          .todp(2)
                          .toNumber();
                      },
                      minValue: 0,
                      maxValue: 100,
                      class: "w-full space-y-2 relative",
                    });
                  },
                }),
                D(vt, {
                  get when() {
                    return t.data;
                  },
                  get children() {
                    return [
                      D(vt, {
                        get when() {
                          return new we(t.data.bonusAmount).gte(
                            t.data.bonusThreshold
                          );
                        },
                        get children() {
                          var o = Xu(),
                            r = o.firstChild;
                          return (
                            R(r, () => J("Available to Claim")),
                            R(
                              o,
                              D(Ec, {
                                variant: "link",
                                onClick: () => {
                                  i("/bonus/dashboard");
                                },
                                get children() {
                                  return J("Claim");
                                },
                              }),
                              null
                            ),
                            o
                          );
                        },
                      }),
                      D(vt, {
                        get when() {
                          return new we(t.data.bonusAmount).lt(
                            t.data.bonusThreshold
                          );
                        },
                        get children() {
                          var o = Gu(),
                            r = o.firstChild,
                            a = r.nextSibling;
                          return (
                            R(r, () => J("Minimum required to claim")),
                            R(
                              o,
                              D(Ve, {
                                token: {
                                  symbol: "BCD",
                                  decimal: 9,
                                  icon: "BCD",
                                },
                              }),
                              a
                            ),
                            R(a, () => {
                              var l;
                              return (l = t.data) == null
                                ? void 0
                                : l.bonusThreshold;
                            }),
                            o
                          );
                        },
                      }),
                    ];
                  },
                }),
                ((n = Zu()),
                (s = n.firstChild),
                (n.$$click = () => {
                  i("/bonus/dashboard");
                }),
                R(s, () => J("Bonus Unlock")),
                R(n, D(Cc, { class: "size-6 rotate-180" }), null),
                n),
              ];
              var n, s;
            },
          }),
        ];
      },
    });
  };
Rl(["click"]);
var ef = Y('<div class="flex items-center justify-center gap-2">'),
  ra = Y(
    `<span class="relative inline-flex justify-center items-center rounded-md botder border-2 border-[#40484A] text-primary bg-layer2 w-8 h-[2.375rem] after:absolute after:-right-2 after:content-[':'] last:after:content-none">`
  ),
  nf = Y(
    '<div class="relative before:absolute before:size-1.5 before:bg-brand before:rounded-full before:-left-3 before:top-1/2 before:-translate-y-1/2 text-center">'
  ),
  sf = Y(
    '<div class="text-xs relative"><div class="rounded-full w-1 h-1 bg-brand absolute top-2 -left-2"></div><span class=text-primary>'
  ),
  of = Y(
    '<div class="text-secondary text-sm space-y-4"><div class="flex items-center gap-2 justify-between"><div class=space-y-2><h6 class="capitalize font-normal text-secondary text-xs"></h6></div><div class=space-y-2><h6 class=text-xs></h6><div class="text-primary text-sm flex items-center justify-center font-semibold h-10"></div></div></div><div class="flex items-center justify-center"></div><div class="flex items-center justify-between"><div class=text-left><h6></h6><div class="text-primary flex items-center gap-1"><span></span></div></div><div class=text-right><h6></h6><div class="text-primary flex items-center gap-1"><span>'
  );
const rf = (i) => {
    const [t] = bl(i.endTime);
    return (
      X(() => {}),
      (e = ef()),
      R(
        e,
        D(vt, {
          get when() {
            return t.seconds && t.seconds > 0;
          },
          get fallback() {
            return D(Ji, {
              each: [0, 0, 0],
              children: (n) => {
                return (
                  (s = ra()), R(s, (n && n < 10) || n === 0 ? `0${n}` : n), s
                );
                var s;
              },
            });
          },
          get children() {
            return D(Ji, {
              get each() {
                return [t.hours, t.minutes, t.seconds];
              },
              children: (n) => {
                return (s = ra()), R(s, n && n < 10 ? `0${n}` : n), s;
                var s;
              },
            });
          },
        })
      ),
      e
    );
    var e;
  },
  af = () => hn().get("/activity/contest/infos/"),
  lf = ({ queryKey: i }) => hn().get(`/activity/contest/${i[1]}/rank/`),
  cf = ({ queryKey: i }) => hn().get(`/activity/contest/${i[1]}/list/`),
  hf = (i) => {
    const t = Xi(() => ({
        queryKey: ["/activity/contest/infos/"],
        queryFn: af,
      })),
      e = Xi(() => ({
        queryKey: ["/activity/contest/{type}/rank/", i.type],
        queryFn: lf,
        enabled: zl.login,
      })),
      n = Xi(() => ({
        queryKey: ["/activity/contest/{type}/list/", i.type],
        queryFn: cf,
      })),
      s = ct(() => {
        var l;
        return (l = t.data) == null
          ? void 0
          : l.find((c) => c.contestType === i.type);
      }),
      o = ct(() => {
        var d, h, u;
        const l = (h = (d = e.data) == null ? void 0 : d.rank) != null ? h : 0;
        let c = l;
        if (c === 1) return c;
        {
          const g = (u = s()) == null ? void 0 : u.userBonusRate.length;
          g && (c = l === 0 ? g : l <= g ? l - 1 : g);
        }
        return c;
      }),
      r = ct(() => {
        var c, d, h, u, g;
        const l =
          ((d = (c = n.data) == null ? void 0 : c.length) != null ? d : 0) >
          o() - 1
            ? (h = n.data) == null
              ? void 0
              : h[o() - 1]
            : null;
        return l
          ? parseFloat(l.wager) -
              ((g = (u = e.data) == null ? void 0 : u.wager) != null ? g : 0)
          : 0;
      }),
      a = ct(() => {
        var c, d, h;
        const l =
          (h = n.data) == null
            ? void 0
            : h[
                ((d = (c = e.data) == null ? void 0 : c.rank) != null ? d : 1) -
                  1
              ];
        return (l && l.totalBonus) || 0;
      });
    return D(Bl, {
      get fallback() {
        return D(ca, {});
      },
      get children() {
        return D(vt, {
          get when() {
            return e.data;
          },
          children: (l) => {
            return (
              (c = of()),
              (d = c.firstChild),
              (h = d.firstChild),
              (u = h.firstChild),
              (g = h.nextSibling.firstChild),
              (p = g.nextSibling),
              (f = d.nextSibling),
              (m = f.nextSibling.firstChild),
              (b = m.firstChild),
              (x = b.nextSibling),
              (v = x.firstChild),
              (y = m.nextSibling.firstChild),
              (_ = y.nextSibling),
              (w = _.firstChild),
              R(u, () => {
                var M;
                return J("__type__ Contest End In", {
                  type: (M = i.type) != null ? M : "daily",
                });
              }),
              R(
                h,
                D(vt, {
                  get when() {
                    var M;
                    return (M = s()) == null ? void 0 : M.endTime;
                  },
                  get children() {
                    return D(rf, {
                      get endTime() {
                        return s().endTime;
                      },
                    });
                  },
                }),
                null
              ),
              R(g, () => J("Current Ranking")),
              R(p, () => Lc(l().rank || 50)),
              R(
                f,
                D(vt, {
                  get when() {
                    return l().rank === 1;
                  },
                  get children() {
                    var M = nf();
                    return R(M, () => J("You are the 1st now! Well done!")), M;
                  },
                }),
                null
              ),
              R(
                f,
                D(vt, {
                  get when() {
                    return l().rank !== 1;
                  },
                  get children() {
                    var M = sf(),
                      k = M.firstChild.nextSibling;
                    return (
                      R(
                        M,
                        () => {
                          var C, S;
                          return J(
                            "Wager __amount__ more __currency__ to Reach ",
                            {
                              amount: r().toFixed(4),
                              currency:
                                (S =
                                  (C = s()) == null
                                    ? void 0
                                    : C.wagerCurrency) != null
                                  ? S
                                  : "",
                            }
                          );
                        },
                        k
                      ),
                      R(k, () => J("Top __targetRank__", { targetRank: o() })),
                      M
                    );
                  },
                }),
                null
              ),
              R(b, () => J("Wagered")),
              R(v, () => l().wager),
              R(
                x,
                D(Ve, {
                  get token() {
                    var M, k;
                    return {
                      symbol:
                        (k = (M = s()) == null ? void 0 : M.wagerCurrency) !=
                        null
                          ? k
                          : "",
                      decimal: 0,
                      icon: "",
                    };
                  },
                }),
                null
              ),
              R(y, () => J("Prize")),
              R(w, a),
              R(
                _,
                D(Ve, {
                  get token() {
                    var M, k;
                    return {
                      symbol:
                        (k = (M = s()) == null ? void 0 : M.wagerCurrency) !=
                        null
                          ? k
                          : "",
                      decimal: 0,
                      icon: "",
                    };
                  },
                }),
                null
              ),
              c
            );
            var c, d, h, u, g, p, f, m, b, x, v, y, _, w;
          },
        });
      },
    });
  };
var Ln = { dragStart: !0 },
  df = (i, t = {}) => {
    var $s, Us;
    let e,
      n,
      {
        bounds: s,
        axis: o = "both",
        gpuAcceleration: r = !0,
        legacyTranslate: a = !0,
        transform: l,
        applyUserSelectHack: c = !0,
        disabled: d = !1,
        ignoreMultitouch: h = !1,
        recomputeBounds: u = Ln,
        grid: g,
        position: p,
        cancel: f,
        handle: m,
        defaultClass: b = "neodrag",
        defaultClassDragging: x = "neodrag-dragging",
        defaultClassDragged: v = "neodrag-dragged",
        defaultPosition: y = { x: 0, y: 0 },
        onDragStart: _,
        onDrag: w,
        onDragEnd: M,
      } = t,
      k = !1,
      C = 0,
      S = 0,
      O = 0,
      E = 0,
      L = 0,
      A = 0,
      { x: T, y: F } = p
        ? {
            x: ($s = p == null ? void 0 : p.x) != null ? $s : 0,
            y: (Us = p == null ? void 0 : p.y) != null ? Us : 0,
          }
        : y;
    Ht(T, F);
    let B,
      z,
      q,
      at,
      j,
      nt = "",
      ft = !!p;
    u = ht(ht({}, Ln), u);
    let gt = new Set();
    const Tt = document.body.style,
      pt = i.classList;
    function Ht(K = C, lt = S) {
      if (!l) {
        if (a) {
          let Pt = `${+K}px, ${+lt}px`;
          return Ui(
            i,
            "transform",
            r ? `translate3d(${Pt}, 0)` : `translate(${Pt})`
          );
        }
        return Ui(i, "translate", `${+K}px ${+lt}px ${r ? "1px" : ""}`);
      }
      const bt = l({ offsetX: K, offsetY: lt, rootNode: i });
      In(bt) && Ui(i, "transform", bt);
    }
    const $t = (K, lt) => {
        const bt = { offsetX: C, offsetY: S, rootNode: i, currentNode: j };
        i.dispatchEvent(new CustomEvent(K, { detail: bt })),
          lt == null || lt(bt);
      },
      pn = addEventListener;
    pn("pointerdown", Ws, !1),
      pn("pointerup", js, !1),
      pn("pointermove", Hs, !1),
      Ui(i, "touch-action", "none");
    const Ns = () => {
      let K = i.offsetWidth / z.width;
      return isNaN(K) && (K = 1), K;
    };
    function Ws(K) {
      if (d || K.button === 2) return;
      if ((gt.add(K.pointerId), h && gt.size > 1)) return K.preventDefault();
      if ((u.dragStart && (B = Rn(s, i)), In(m) && In(f) && m === f))
        throw new Error("`handle` selector can't be same as `cancel` selector");
      if (
        (pt.add(b),
        (q = (function (Q, kt) {
          if (!Q) return [kt];
          if (as(Q)) return [Q];
          if (Array.isArray(Q)) return Q;
          const Et = kt.querySelectorAll(Q);
          if (Et === null)
            throw new Error(
              "Selector passed for `handle` option should be child of the element on which the action is applied"
            );
          return Array.from(Et.values());
        })(m, i)),
        (at = (function (Q, kt) {
          if (!Q) return [];
          if (as(Q)) return [Q];
          if (Array.isArray(Q)) return Q;
          const Et = kt.querySelectorAll(Q);
          if (Et === null)
            throw new Error(
              "Selector passed for `cancel` option should be child of the element on which the action is applied"
            );
          return Array.from(Et.values());
        })(f, i)),
        (e = /(both|x)/.test(o)),
        (n = /(both|y)/.test(o)),
        la(at, q))
      )
        throw new Error(
          "Element being dragged can't be a child of the element on which `cancel` is applied"
        );
      const lt = K.composedPath()[0];
      if (
        !q.some((Q) => {
          var kt;
          return (
            Q.contains(lt) ||
            ((kt = Q.shadowRoot) == null ? void 0 : kt.contains(lt))
          );
        }) ||
        la(at, [lt])
      )
        return;
      (j = q.length === 1 ? i : q.find((Q) => Q.contains(lt))),
        (k = !0),
        (z = i.getBoundingClientRect()),
        c && ((nt = Tt.userSelect), (Tt.userSelect = "none")),
        $t("neodrag:start", _);
      const { clientX: bt, clientY: Pt } = K,
        Mt = Ns();
      e && (O = bt - T / Mt),
        n && (E = Pt - F / Mt),
        B && ((L = bt - z.left), (A = Pt - z.top));
    }
    function js(K) {
      gt.delete(K.pointerId),
        k &&
          (u.dragEnd && (B = Rn(s, i)),
          pt.remove(x),
          pt.add(v),
          c && (Tt.userSelect = nt),
          $t("neodrag:end", M),
          e && (O = C),
          n && (E = S),
          (k = !1));
    }
    function Hs(K) {
      if (!k || (h && gt.size > 1)) return;
      u.drag && (B = Rn(s, i)),
        pt.add(x),
        K.preventDefault(),
        (z = i.getBoundingClientRect());
      let lt = K.clientX,
        bt = K.clientY;
      const Pt = Ns();
      if (B) {
        const Mt = {
          left: B.left + L,
          top: B.top + A,
          right: B.right + L - z.width,
          bottom: B.bottom + A - z.height,
        };
        (lt = aa(lt, Mt.left, Mt.right)), (bt = aa(bt, Mt.top, Mt.bottom));
      }
      if (Array.isArray(g)) {
        let [Mt, Q] = g;
        if (isNaN(+Mt) || Mt < 0)
          throw new Error(
            "1st argument of `grid` must be a valid positive number"
          );
        if (isNaN(+Q) || Q < 0)
          throw new Error(
            "2nd argument of `grid` must be a valid positive number"
          );
        let kt = lt - O,
          Et = bt - E;
        ([kt, Et] = uf([Mt / Pt, Q / Pt], kt, Et)),
          (lt = O + kt),
          (bt = E + Et);
      }
      e && (C = Math.round((lt - O) * Pt)),
        n && (S = Math.round((bt - E) * Pt)),
        (T = C),
        (F = S),
        $t("neodrag", w),
        Ht();
    }
    return {
      destroy: () => {
        const K = removeEventListener;
        K("pointerdown", Ws, !1),
          K("pointerup", js, !1),
          K("pointermove", Hs, !1);
      },
      update: (K) => {
        var bt, Pt, Mt, Q, kt, Et, Ys, qs, Xs, Gs, Zs, Js, Qs;
        (o = K.axis || "both"),
          (d = (bt = K.disabled) != null ? bt : !1),
          (h = (Pt = K.ignoreMultitouch) != null ? Pt : !1),
          (m = K.handle),
          (s = K.bounds),
          (u = (Mt = K.recomputeBounds) != null ? Mt : Ln),
          (f = K.cancel),
          (c = (Q = K.applyUserSelectHack) != null ? Q : !0),
          (g = K.grid),
          (r = (kt = K.gpuAcceleration) != null ? kt : !0),
          (a = (Et = K.legacyTranslate) != null ? Et : !0),
          (l = K.transform);
        const lt = pt.contains(v);
        pt.remove(b, v),
          (b = (Ys = K.defaultClass) != null ? Ys : "neodrag"),
          (x = (qs = K.defaultClassDragging) != null ? qs : "neodrag-dragging"),
          (v = (Xs = K.defaultClassDragged) != null ? Xs : "neodrag-dragged"),
          pt.add(b),
          lt && pt.add(v),
          ft &&
            ((T = C =
              (Zs = (Gs = K.position) == null ? void 0 : Gs.x) != null
                ? Zs
                : C),
            (F = S =
              (Qs = (Js = K.position) == null ? void 0 : Js.y) != null
                ? Qs
                : S),
            Ht());
      },
    };
  },
  aa = (i, t, e) => Math.min(Math.max(i, t), e),
  In = (i) => typeof i == "string",
  uf = ([i, t], e, n) => {
    const s = (o, r) => (r === 0 ? 0 : Math.ceil(o / r) * r);
    return [s(e, i), s(n, t)];
  },
  la = (i, t) => i.some((e) => t.some((n) => e.contains(n)));
function Rn(i, t) {
  if (i === void 0) return;
  if (as(i)) return i.getBoundingClientRect();
  if (typeof i == "object") {
    const { top: n = 0, left: s = 0, right: o = 0, bottom: r = 0 } = i;
    return {
      top: n,
      right: window.innerWidth - o,
      bottom: window.innerHeight - r,
      left: s,
    };
  }
  if (i === "parent") return t.parentNode.getBoundingClientRect();
  const e = document.querySelector(i);
  if (e === null)
    throw new Error(
      "The selector provided for bound doesn't exists in the document."
    );
  return e.getBoundingClientRect();
}
var Ui = (i, t, e) => i.style.setProperty(t, e),
  as = (i) => i instanceof HTMLElement,
  ff = () => ({
    draggable: (i, t) => {
      const { update: e, destroy: n } = df(i, t());
      ke(n), X(() => e(t()));
    },
  }),
  gf = Y('<span class="font-semibold max-w-48 truncate text-sm">'),
  pf = Y("<span class=text-sm>"),
  mf = Y(
    '<div class="flex justify-between items-center gap-2 text-primary mb-2"><div><div class="text-secondary text-sm"></div><div class="flex items-center gap-1"><span></span></div></div><div class=text-right><div class="text-secondary text-sm"></div><div class="flex items-center gap-1"><span><span>'
  ),
  bf = Y("<div class=w-full>"),
  xf = Y(
    '<div class="flex justify-between"><div class=text-left><span class="text-lowercase text-secondary"></span><span></span></div><div class=ext-right><span class="text-lowercase text-secondary"></span><span>'
  ),
  yf = Y(
    '<div class="fixed flex items-center justify-center bg-layer3 z-[1000] p-2 rounded-xl"><div class="!w-fullp-2 h-auto text-center"><div class="flex justify-between items-center relative py-2"><span class="text-sm font-bold flex-1 user-select-none "></span></div><div class="max-h-[30rem] overflow-y-auto"><div class=space-y-4>'
  );
function Uf(i) {
  const [t, { clearData: e }] = dc(),
    [n, s] = H(!1),
    { draggable: o } = ff();
  let r;
  const [a, l] = H({ width: 0, height: 0 }),
    { coinFormat: c } = Ic(),
    { activeToken: d, isViewInFiat: h } = Wl(),
    [u, g] = ha([
      { label: J("Bet"), value: !0, disabled: !0 },
      { label: J("Wager contest"), value: !1, disabled: !1 },
      { label: J("BCD Treasure Box"), value: !1, disabled: !1 },
    ]);
  Pe(() => {
    It.register(Be, _i, Ke, jt, wi),
      r && l({ width: r.offsetWidth, height: r.offsetHeight });
  });
  const p = () => {
      var b;
      const m = u.filter((x) => x.value);
      return m.length > 1
        ? m.map((x) => x.label).join("/")
        : (b = m[0]) == null
        ? void 0
        : b.label;
    },
    f = {
      responsive: !1,
      maintainAspectRatio: !1,
      interaction: { mode: "nearest", axis: "x", intersect: !1 },
      scales: {
        x: { display: !1, title: { display: !1 } },
        y: { display: !1, stacked: !0, title: { display: !1 } },
      },
      plugins: { legend: { display: !1 } },
      elements: { line: { borderWidth: 0 }, point: { radius: 0 } },
      grid: { display: !1 },
    };
  return (
    X(() => {
      d() && e();
    }),
    D(Kl, {
      get mount() {
        return document.getElementsByTagName("body")[0];
      },
      get children() {
        var m = yf(),
          b = m.firstChild.firstChild,
          x = b.firstChild,
          v = b.nextSibling,
          y = v.firstChild;
        return (
          Fn(o, m, () => ({})),
          typeof r == "function" ? Fn(r, m) : (r = m),
          R(x, () => J("LiveStats")),
          R(
            b,
            D(zn, {
              get onClick() {
                return i.onClose;
              },
              class: "absolute right-0",
              get children() {
                return D(Oc, { class: "size-4 text-secondary" });
              },
            }),
            null
          ),
          R(
            v,
            D(Fu, {
              class: "w-full relative mb-2 bg-layer5 rounded-lg",
              get open() {
                return n();
              },
              onOpenChange: s,
              get children() {
                return [
                  D(zu, {
                    class:
                      "flex w-full items-center justify-between rounded-md p-3",
                    get children() {
                      return [
                        ((_ = gf()), R(_, p), _),
                        D(Pc, {
                          get class() {
                            return (
                              "size-4 " + (n() ? "rotate-90" : "-rotate-90")
                            );
                          },
                        }),
                      ];
                      var _;
                    },
                  }),
                  D(Bu, {
                    class: "mt-2 rounded-md p-3 absolute bg-layer5 w-full z-10",
                    get children() {
                      return D(gl, {
                        class: "flex items-start flex-col",
                        get children() {
                          return D(Ji, {
                            each: u,
                            children: (_, w) =>
                              D(Lu, {
                                size: "sm",
                                get checked() {
                                  return _.value;
                                },
                                onChange: () => {
                                  g((M) =>
                                    M.map((k, C) =>
                                      Ut(ht({}, k), {
                                        value: C === w() ? !k.value : k.value,
                                      })
                                    )
                                  ),
                                    s(!1);
                                },
                                get disabled() {
                                  return _.disabled;
                                },
                                get children() {
                                  return D(Iu, {
                                    get children() {
                                      return _.label;
                                    },
                                  });
                                },
                              }),
                          });
                        },
                      });
                    },
                  }),
                ];
              },
            }),
            y
          ),
          R(
            y,
            D(vt, {
              get when() {
                return u[0].value;
              },
              get children() {
                return D(Vn, {
                  class: "w-[19rem]",
                  get children() {
                    return [
                      D(Nn, {
                        class: "!py-0 !pt-0 !px-3",
                        get children() {
                          return D(Wn, {
                            class: "flex items-center justify-between",
                            get children() {
                              return [
                                ((_ = pf()), R(_, () => J("Bet")), _),
                                D(zn, {
                                  class: "p-0",
                                  onClick: e,
                                  get children() {
                                    return D(Ac, {
                                      class:
                                        "size-4 text-secondary fill-secondary",
                                    });
                                  },
                                }),
                              ];
                              var _;
                            },
                          });
                        },
                      }),
                      D(jn, {
                        class: "!pb-2 !px-3",
                        get children() {
                          return [
                            ((E = mf()),
                            (L = E.firstChild),
                            (A = L.firstChild),
                            (T = A.nextSibling),
                            (F = T.firstChild),
                            (B = L.nextSibling.firstChild),
                            (z = B.nextSibling),
                            (q = z.firstChild),
                            (at = q.firstChild),
                            R(A, () => J("Wagered")),
                            R(F, () => {
                              var j;
                              return c(
                                new we(t.wagered),
                                (j = d()) == null ? void 0 : j.symbol
                              ).toString();
                            }),
                            R(T, D(Ve, { class: "text-sm" }), null),
                            R(B, () => J("Profit")),
                            R(at, () => {
                              var j;
                              return c(
                                new we(t.profit),
                                (j = d()) == null ? void 0 : j.symbol
                              ).toString();
                            }),
                            R(z, D(Ve, { class: "text-sm" }), null),
                            _e(() =>
                              oi(
                                q,
                                t.profit >= 0 ? "text-brand" : "text-warning"
                              )
                            ),
                            E),
                            ((O = bf()),
                            R(
                              O,
                              D(Pu, {
                                get data() {
                                  return {
                                    labels: t.profits.map((j, nt) => nt),
                                    datasets: [
                                      {
                                        label: "Profit",
                                        data: t.profits,
                                        fill: {
                                          target: "origin",
                                          above: "rgb(59, 193, 23)",
                                          below: "rgb(237, 99, 0)",
                                        },
                                        borderColor: "rgb(75, 192, 192)",
                                        backgroundColor:
                                          "rgba(75, 192, 192, 0.2)",
                                        tension: 0.4,
                                      },
                                    ],
                                  };
                                },
                                get options() {
                                  return Ut(ht({}, f), {
                                    plugins: Ut(ht({}, f.plugins), {
                                      tooltip: {
                                        callbacks: {
                                          label: (j) => {
                                            var gt;
                                            const nt = j.dataset.label || "",
                                              ft = j.raw;
                                            return `${nt}: ${c(
                                              new we(Number(ft)),
                                              (gt = d()) == null
                                                ? void 0
                                                : gt.symbol
                                            ).toString()}`;
                                          },
                                        },
                                      },
                                    }),
                                  });
                                },
                                get width() {
                                  return a().width - 40;
                                },
                                height: 175,
                              })
                            ),
                            O),
                            ((_ = xf()),
                            (w = _.firstChild),
                            (M = w.firstChild),
                            (k = M.nextSibling),
                            (C = w.nextSibling.firstChild),
                            (S = C.nextSibling),
                            R(M, () => J("WIN")),
                            R(k, () => t.winNum),
                            R(C, () => J("LOSE")),
                            R(S, () => t.lossNum),
                            _e(
                              (j) => {
                                var nt =
                                    "ml-3 font-bold " +
                                    (t.winNum > 0 ? "text-brand" : ""),
                                  ft =
                                    "ml-3 font-bold " +
                                    (t.lossNum > 0 ? "text-error" : "");
                                return (
                                  nt !== j.e && oi(k, (j.e = nt)),
                                  ft !== j.t && oi(S, (j.t = ft)),
                                  j
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            _),
                          ];
                          var _, w, M, k, C, S, O, E, L, A, T, F, B, z, q, at;
                        },
                      }),
                    ];
                  },
                });
              },
            }),
            null
          ),
          R(
            y,
            D(vt, {
              get when() {
                return u[1].value;
              },
              get children() {
                return D(Vn, {
                  class: "w-[19rem] overflow-hidden",
                  get children() {
                    return [
                      D(Nn, {
                        class: "!px-2 !py-2",
                        get children() {
                          return D(Wn, {
                            class: "text-sm",
                            get children() {
                              return J("Wager contest");
                            },
                          });
                        },
                      }),
                      D(jn, {
                        class: "p-0",
                        get children() {
                          return D(hh, {
                            get children() {
                              return [
                                D(uh, {
                                  variant: "fill",
                                  class: "mx-2",
                                  get children() {
                                    return D(gh, {
                                      variant: "fill",
                                      value: "daily",
                                      get children() {
                                        return J("Daily");
                                      },
                                    });
                                  },
                                }),
                                D(ph, {
                                  value: "daily",
                                  class: "p-0",
                                  get children() {
                                    return D(hf, { type: "daily" });
                                  },
                                }),
                              ];
                            },
                          });
                        },
                      }),
                    ];
                  },
                });
              },
            }),
            null
          ),
          R(
            y,
            D(vt, {
              get when() {
                return u[2].value;
              },
              get children() {
                return D(tf, {});
              },
            }),
            null
          ),
          _e(
            (_) => {
              var w = i.position ? i.position.top - a().height + "px" : "auto",
                M = i.position
                  ? i.position.left - a().width + 50 + "px"
                  : "auto";
              return (
                w !== _.e &&
                  ((_.e = w) != null
                    ? m.style.setProperty("top", w)
                    : m.style.removeProperty("top")),
                M !== _.t &&
                  ((_.t = M) != null
                    ? m.style.setProperty("left", M)
                    : m.style.removeProperty("left")),
                _
              );
            },
            { e: void 0, t: void 0 }
          ),
          m
        );
      },
    })
  );
}
var vf = Y("<span>");
function Yf(i) {
  const [t, e] = G(i, ["isMore", "onClick", "className"]),
    [n, s] = H(!1);
  return (
    X(() => {
      s(t.isMore);
    }),
    D(
      zn,
      $(e, {
        type: "second",
        onClick: (o) => {
          var r;
          s(!n()), (r = t.onClick) == null || r.call(t, o);
        },
        get class() {
          return Rc(
            "mx-auto gap-2 my-2 h-8 px-2 bg-none bg-button_bright",
            t.className
          );
        },
        get children() {
          var o,
            r = vf();
          return (
            R(
              r,
              ((o = Se(() => !n())),
              () => (o() ? J("Show More") : J("Show Less")))
            ),
            r
          );
        },
      })
    )
  );
}
export {
  Uf as L,
  ch as M,
  oh as P,
  Nf as S,
  ph as T,
  Yf as a,
  hh as b,
  jf as c,
  uh as d,
  gh as e,
  Hf as f,
  Vf as g,
  $f as h,
  Wf as i,
  mh as j,
  th as k,
  ih as l,
  Qc as m,
  qc as n,
  Gc as o,
  Jc as p,
  Zt as q,
  ju as r,
  ff as u,
};
