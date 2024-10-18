import {
  i as a,
  c as r,
  r as s,
  Q as c,
  a6 as o,
  h as l,
  aQ as m,
  l as i,
  f as h,
  t as f,
  m as d,
  e as u,
} from "./index-Cp-3lvCI.js";
var x = h(
  '<div><div class="flex items-center text-base font-extrabold text-primary">'
);
function b(e) {
  return (() => {
    var t = x(),
      n = t.firstChild;
    return (
      a(n, () => e.title),
      a(
        t,
        r(l, {
          get when() {
            return e.href;
          },
          get children() {
            return r(s, {
              get href() {
                return e.href;
              },
              class:
                "ml-auto flex h-8 items-center rounded-lg px-2 font-extrabold bg-black_alpha5 dark:bg-layer5",
              get children() {
                return [
                  c(() => f("All")),
                  r(o, {
                    class: "rotate-180 text-secondary ml-1 size-4",
                    name: "Arrow",
                  }),
                ];
              },
            });
          },
        }),
        null
      ),
      a(
        t,
        r(l, {
          get when() {
            return e.showController;
          },
          get children() {
            return r(m, { class: "ml-2" });
          },
        }),
        null
      ),
      i(() => d(t, u("mt-4 flex h-8 items-center mb-1.5 sm:mt-6", e.class))),
      t
    );
  })();
}
export { b as S };
