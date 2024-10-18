import {
  aN as i,
  $ as o,
  a1 as e,
  a0 as n,
  t as c,
} from "./manifest-a234c8a0.js";
var m = c("<img>");
const g = (r) => {
  const s = i(() => r.src, `w=${r.width}`),
    [w, t] = o(r, ["src", "width"]);
  return (
    (a = m()),
    e(
      a,
      n(t, {
        get src() {
          return s();
        },
      }),
      !1,
      !1
    ),
    a
  );
  var a;
};
export { g as I };
