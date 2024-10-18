import { c as r, i as n, m, t as s } from "./web-da7da7e5.js";
import { E as l, B as c } from "./manifest-e0f0ba59.js";
import { E as i } from "./solid-js-2e15682c.js";
import { W as u } from "./Icon-b6e375d0.js";
import { t as d } from "./i18n-9b1e4bd8.js";
var f = s("<div class=text-secondary>");
function v(e) {
  return r(i, {
    fallback: (o, a) => (
      e.onError && e.onError(),
      r(l, {
        get children() {
          return [
            (() => {
              var t = f();
              return n(t, () => o.message), t;
            })(),
            r(c, {
              type: "second",
              class: "mx-auto mt-1 min-w-40",
              onClick: a,
              get children() {
                return [
                  m(() => d("Reload")),
                  " ",
                  r(u, { class: "ml-1", name: "Refresh" }),
                ];
              },
            }),
          ];
        },
      })
    ),
    get children() {
      return e.children;
    },
  });
}
export { v as E };
