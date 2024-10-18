import { t as r } from "./toString-968993ce.js";
function u(e) {
  return function (a) {
    return e == null ? void 0 : e[a];
  };
}
var n = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" },
  p = u(n);
const c = p;
var t = /&(?:amp|lt|gt|quot|#39);/g,
  o = RegExp(t.source);
function m(e) {
  return (e = r(e)), e && o.test(e) ? e.replace(t, c) : e;
}
export { m as u };
