import { j as o, b as n, t as i } from "./web-13cf6287.js";
import { c as l } from "./manifest-cc1f4445.js";
import { l as c, i as p } from "./solid-js-38561dfe.js";
var m = i("<div>");
const g = (a) => {
  const [r] = c(),
    [t, e] = p(a, ["class"]);
  return (() => {
    var s = m();
    return (
      o(
        s,
        n(
          {
            get class() {
              return l(
                r() ? "select-none opacity-65 transition-all" : "",
                t.class
              );
            },
          },
          e
        ),
        !1,
        !1
      ),
      s
    );
  })();
};
export { g as T };
