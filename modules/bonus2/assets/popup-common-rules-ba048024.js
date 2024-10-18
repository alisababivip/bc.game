import { c as l, i as o, t as s } from "./web-13cf6287.js";
import { P as n } from "./manifest-cc1f4445.js";
import { F as m } from "./solid-js-38561dfe.js";
var p = s("<ul class=popup-rules>"),
  i = s('<li class="font-semibold text-secondary">');
const f = (e) =>
  l(n, {
    get title() {
      return e.title;
    },
    class: "min-h-0 pb-5",
    get children() {
      var t = p();
      return (
        o(
          t,
          l(m, {
            get each() {
              return e.rules;
            },
            children: (a) =>
              (() => {
                var r = i();
                return o(r, a), r;
              })(),
          })
        ),
        t
      );
    },
  });
export { f as P };
