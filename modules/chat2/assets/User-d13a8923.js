import {
  h as o,
  g as n,
  t as s,
  i as c,
  e as u,
  f as v,
} from "./i18n-961d0749.js";
import { f as i, N as f, h as d } from "./manifest-9a1a4b52.js";
var m = s("<img>"),
  p = s("<div>");
function h(e) {
  return (() => {
    var t = m();
    return (
      o(
        t,
        n(e, {
          class: "w-7 h-7 rounded-full",
          get src() {
            return i.avatar(e.userId);
          },
        }),
        !1,
        !1
      ),
      t
    );
  })();
}
function _(e) {
  const {
    vipLevel: t,
    isSvip: l,
    vipLevelColor: a,
  } = f.getUserLevelInfo(e.level);
  return (() => {
    var r = p();
    return (
      a != null
        ? r.style.setProperty("background-color", a)
        : r.style.removeProperty("background-color"),
      c(r, (l ? "SV" : "V") + t),
      u(() =>
        v(
          r,
          d(
            "text-xs font-extrabold text-alw_white w-9 h-4 leading-4 center rounded",
            e.class
          )
        )
      ),
      r
    );
  })();
}
export { h as A, _ as U };
