import {
  c as e,
  t as a,
  aR as i,
  a5 as c,
  $ as o,
  aS as g,
  i as s,
  af as m,
  G as u,
  r as d,
  W as p,
  f as l,
} from "./index-Cp-3lvCI.js";
var f = l(
    '<div class="grid py-4 grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">'
  ),
  h = l('<div class="w-full center h-72 flex-auto">');
function _() {
  return e(c, {
    get title() {
      return a("Themes");
    },
    get children() {
      return [
        e(i, {
          get title() {
            return a("Themes");
          },
        }),
        e(v, {}),
      ];
    },
  });
}
function v() {
  const [n] = o(() => g({ page: 1, pageSize: 80, sectionId: "tag_recommend" }));
  return e(p, {
    get fallback() {
      return (() => {
        var t = h();
        return s(t, e(m, {})), t;
      })();
    },
    get children() {
      var t = f();
      return (
        s(
          t,
          e(u, {
            get each() {
              return n()?.tags;
            },
            children: (r) =>
              e(d, {
                href: `/tagname/${r}`,
                class:
                  "rounded-xl bg-layer4 p-4 text-center font-semibold fix-light-hover ellipsis hover:bg-layer5",
                children: r,
              }),
          })
        ),
        t
      );
    },
  });
}
export { v as ThemesView, _ as default };
