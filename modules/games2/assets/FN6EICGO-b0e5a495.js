import { f as m, H as i, an as p } from "./manifest-a234c8a0.js";
import { u as v } from "./index-4897b9da.js";
function l(t) {
  var c;
  const [r, e] = m((c = t.defaultValue) == null ? void 0 : c.call(t)),
    n = i(() => {
      var a;
      return ((a = t.value) == null ? void 0 : a.call(t)) !== void 0;
    }),
    u = i(() => {
      var a;
      return n() ? ((a = t.value) == null ? void 0 : a.call(t)) : r();
    });
  return [
    u,
    (a) => {
      p(() => {
        var f;
        const s = v(a, u());
        return (
          Object.is(s, u()) ||
            (n() || e(s), (f = t.onChange) == null || f.call(t, s)),
          s
        );
      });
    },
  ];
}
function g(t) {
  const [r, e] = l(t);
  return [
    () => {
      var n;
      return (n = r()) != null ? n : !1;
    },
    e,
  ];
}
function h(t) {
  const [r, e] = l(t);
  return [
    () => {
      var n;
      return (n = r()) != null ? n : [];
    },
    e,
  ];
}
export { l as a, h as b, g as c };
