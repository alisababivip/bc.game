var c = Object.defineProperty,
  p = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty,
  S = Object.prototype.propertyIsEnumerable;
var s = (o, a, e) =>
    a in o
      ? c(o, a, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (o[a] = e),
  m = (o, a) => {
    for (var e in a || (a = {})) N.call(a, e) && s(o, e, a[e]);
    if (r) for (var e of r(a)) S.call(a, e) && s(o, e, a[e]);
    return o;
  },
  n = (o, a) => p(o, E(a));
import { f as b } from "./manifest-a234c8a0.js";
import { a4 as T, a5 as g, a6 as x } from "./game-a49e1f5b.js";
function $(o, a = g) {
  const e = JSON.parse(localStorage.getItem(`ns-${o.gameName}`)) || T,
    [i, l] = b(e.isTurboEnable),
    [u, f] = b(Math.max(a, g));
  return {
    isTurboEnable: i,
    toggleEnableTurbo: (t) => {
      l(t),
        localStorage.setItem(
          `ns-${o.gameName}`,
          JSON.stringify(n(m({}, e), { isTurboEnable: t }))
        ),
        f(t ? a : x);
    },
    turbo: u,
  };
}
export { $ as u };
