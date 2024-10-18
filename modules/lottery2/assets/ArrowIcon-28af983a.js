import { i as t, c as a, k as s, n as o, t as n } from "./solid-js-8ff414d5.js";
import { I as c, d as m } from "./manifest-987d6c36.js";
var l = n("<div>");
function f(r) {
  return (() => {
    var e = l();
    return (
      t(
        e,
        a(c, {
          get style() {
            return {
              transform: r.isRotate ? "rotate(90deg)" : "rotate(270deg)",
            };
          },
          name: "Arrow",
          class: "w-4 h-4",
        })
      ),
      s(() => o(e, m("rounded-lg w-6 h-6 center bg-layer5", r.class))),
      e
    );
  })();
}
export { f as A };
