import { ac as e, C as i, ad as p } from "./game-a49e1f5b.js";
import { b as l } from "./currency-a0e3a368.js";
function m(n, o, t, r) {
  for (var a = -1, f = n == null ? 0 : n.length; ++a < f; ) {
    var c = n[a];
    o(r, c, t(c), n);
  }
  return r;
}
function v(n, o, t, r) {
  return (
    e(n, function (a, f, c) {
      o(r, a, t(a), c);
    }),
    r
  );
}
var s,
  u,
  h = Object.prototype.hasOwnProperty;
const y =
  ((s = function (n, o, t) {
    h.call(n, t) ? n[t].push(o) : p(n, t, [o]);
  }),
  function (n, o) {
    var t = l(n) ? m : v,
      r = u ? u() : {};
    return t(n, s, i(o), r);
  });
export { y as g };
