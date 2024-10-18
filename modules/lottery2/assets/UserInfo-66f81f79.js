import { c as n, k as a, h as s, i as l, t } from "./solid-js-8ff414d5.js";
import { A as i, o as m } from "./manifest-987d6c36.js";
var o = t('<img class="w-4 h-4 mr-2 rounded-full inline-flex"loading=lazy>'),
  c = t(
    '<span class="text-primary font-semibold text-sm inline-block max-w-60 truncate">'
  );
function d(r) {
  return n(i, {
    class: "cursor-pointer inline-flex items-center",
    get href() {
      return `#/user/profile/${r.userId}`;
    },
    get children() {
      return [
        (() => {
          var e = o();
          return a(() => s(e, "src", m.avatar(r.userId))), e;
        })(),
        (() => {
          var e = c();
          return l(e, () => r.name), e;
        })(),
      ];
    },
  });
}
export { d as U };
