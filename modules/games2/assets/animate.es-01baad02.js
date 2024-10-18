import {
  d as p,
  s as v,
  n as y,
  t as c,
  i as d,
  r as g,
  g as w,
  b as E,
  A as l,
} from "./resolve-elements.es-b931549e.js";
const b = (a) => a(),
  f = (a, n, t = p.duration) =>
    new Proxy(
      { animations: a.map(b).filter(Boolean), duration: t, options: n },
      k
    ),
  k = {
    get: (a, n) => {
      const t = a.animations[0];
      switch (n) {
        case "duration":
          return a.duration;
        case "currentTime":
          return c.s((t == null ? void 0 : t[n]) || 0);
        case "playbackRate":
        case "playState":
          return t == null ? void 0 : t[n];
        case "finished":
          return (
            a.finished ||
              (a.finished = Promise.all(a.animations.map(x)).catch(y)),
            a.finished
          );
        case "stop":
          return () => {
            a.animations.forEach((i) => v(i));
          };
        case "forEachNative":
          return (i) => {
            a.animations.forEach((e) => i(e, a));
          };
        default:
          return (t == null ? void 0 : t[n]) === void 0
            ? void 0
            : () => a.animations.forEach((i) => i[n]());
      }
    },
    set: (a, n, t) => {
      switch (n) {
        case "currentTime":
          t = c.ms(t);
        case "playbackRate":
          for (let i = 0; i < a.animations.length; i++) a.animations[i][n] = t;
          return !0;
      }
      return !1;
    },
  },
  x = (a) => a.finished;
function P(a, n, t) {
  return d(a) ? a(n, t) : a;
}
const R =
  ((u = l),
  function (a, n, t = {}) {
    const i = (a = g(a)).length,
      e = [];
    for (let r = 0; r < i; r++) {
      const h = a[r];
      for (const o in n) {
        const s = w(t, o);
        s.delay = P(s.delay, r, i);
        const m = E(h, o, n[o], s, u);
        e.push(m);
      }
    }
    return f(e, t, t.duration);
  });
var u;
function T(a, n = {}) {
  return f(
    [
      () => {
        const t = new l(a, [0, 1], n);
        return t.finished.catch(() => {}), t;
      },
    ],
    n,
    n.duration
  );
}
function B(a, n, t) {
  return (d(a) ? T : R)(a, n, t);
}
export { B as a };
