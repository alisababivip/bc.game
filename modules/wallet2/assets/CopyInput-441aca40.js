import { d as s, i as r, c as a, t as i } from "./web-da7da7e5.js";
import { u as n, t as p } from "./manifest-e0f0ba59.js";
import { t as c } from "./i18n-9b1e4bd8.js";
import { W as u } from "./Icon-b6e375d0.js";
var m = i(
  '<div class="flex items-center justify-between rounded-xl border p-3 h-12 border-third bg-input_bright"><div class="pr-1 ellipsis flex-auto break-all">'
);
function v(t) {
  const l = () => {
    n.copyToClipboard(t.value), p.success(c("Copied"));
  };
  return (() => {
    var e = m(),
      o = e.firstChild;
    return (
      (e.$$click = l),
      r(o, () => t.value),
      r(e, a(u, { class: "flex-none", name: "Copy" }), null),
      e
    );
  })();
}
s(["click"]);
export { v as C };
