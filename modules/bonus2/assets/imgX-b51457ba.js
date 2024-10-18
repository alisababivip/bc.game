import { j as a, b as m, t as o } from "./web-13cf6287.js";
import { Y as i } from "./manifest-cc1f4445.js";
import { i as c } from "./solid-js-38561dfe.js";
var l = o("<img>");
const _ = (r) => {
  const s = i(() => r.src, `w=${r.width}`),
    [n, e] = c(r, ["src", "width"]);
  return (() => {
    var t = l();
    return (
      a(
        t,
        m(e, {
          get src() {
            return s();
          },
        }),
        !1,
        !1
      ),
      t
    );
  })();
};
export { _ as I };
