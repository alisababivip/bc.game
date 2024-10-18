import {
  a9 as s,
  c as r,
  S as i,
  h as l,
  i as t,
  B as c,
  ar as o,
  t as n,
} from "./manifest-a234c8a0.js";
import { t as g } from "./i18n-611811a6.js";
var m = n('<div class="center ml-auto mr-4">'),
  u = n(
    '<div class="flex justify-between items-center gap-2 absolute top-2 right-4 ">'
  );
function d() {
  const a = s("SelectCurrency");
  return r(i, {
    get when() {
      return l.login;
    },
    get fallback() {
      return (
        (e = u()),
        t(
          e,
          r(c, {
            type: "brand",
            class: "h-[2.5rem] px-[1.25rem] font-semibold",
            get children() {
              return r(o, {
                href: "/login/signin",
                get children() {
                  return g("Sign In");
                },
              });
            },
          })
        ),
        e
      );
      var e;
    },
    get children() {
      var e = m();
      return t(e, r(a, {})), e;
    },
  });
}
export { d as L };
