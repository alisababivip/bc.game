import { i as e, c, t as n } from "./web-13cf6287.js";
import { B as s } from "./manifest-cc1f4445.js";
import "./solid-js-38561dfe.js";
import { t as l } from "./i18n-023baa0d.js";
import { c as i } from "./baseService-e38bce40.js";
var m = n(
  '<div class="flex h-full w-full flex-col items-center justify-center gap-y-1 text-secondary"><p>'
);
const y = (t, a) => (
  console.error(t),
  (() => {
    var r = m(),
      o = r.firstChild;
    return (
      e(r, () => l("Sorry, an error occurred"), o),
      e(o, () => t.toString()),
      e(
        r,
        c(s, {
          type: "second",
          size: "xs",
          onClick: () => {
            i(), a();
          },
          get children() {
            return l("Reload");
          },
        }),
        null
      ),
      r
    );
  })()
);
export { y as E };
