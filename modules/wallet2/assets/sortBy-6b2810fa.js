import { b as m, a as o } from "./_baseFlatten-f0777715.js";
import { b as u } from "./_baseOrderBy-d3b5242c.js";
import { i, e as p } from "./memoize-ff109130.js";
import { i as l } from "./_setToArray-f7a05dc1.js";
import { i as y } from "./_baseIteratee-dc3e9bea.js";
function a(s, r, f) {
  if (!i(f)) return !1;
  var n = typeof r;
  return (n == "number" ? l(f) && y(r, f.length) : n == "string" && r in f)
    ? p(f[r], s)
    : !1;
}
var g = m(function (s, r) {
  if (s == null) return [];
  var f = r.length;
  return (
    f > 1 && a(s, r[0], r[1])
      ? (r = [])
      : f > 2 && a(r[0], r[1], r[2]) && (r = [r[0]]),
    u(s, o(r, 1), [])
  );
});
const I = g;
export { I as s };
