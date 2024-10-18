import {
  d as o,
  i as a,
  c as n,
  e as u,
  a as m,
  t as i,
} from "./web-13cf6287.js";
import { a0 as g, c, I as f } from "./manifest-cc1f4445.js";
import { S as D } from "./solid-js-38561dfe.js";
import { b as l } from "./utils-55681fa2.js";
var $ = i('<div class="order-first text-nowrap">'),
  h = i(
    '<div class="center absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer rounded-full bg-layer4">'
  ),
  d = i("<div>");
function v(e) {
  return (
    Array.isArray(e) &&
    e.length === 2 &&
    e[0] instanceof Date &&
    e[1] instanceof Date
  );
}
const w = new Date(),
  s = new Date(w.getTime() - 1e3);
function b(e) {
  return (() => {
    var r = d();
    return (
      a(
        r,
        n(g, {
          get class() {
            return c("bg-layer3", e.datePickerClass);
          },
          get options() {
            return e.options;
          },
          get value() {
            return e.value;
          },
          get onChange() {
            return e.onChange;
          },
          format: (t) =>
            v(t)
              ? t[0].getTime() === s.getTime()
                ? "All Range"
                : `${l(t[0], "YYYY/MM/DD")}-${l(t[1], "YYYY/MM/DD")}`
              : l(t),
          get children() {
            var t = $();
            return a(t, () => e.label), t;
          },
        }),
        null
      ),
      a(
        r,
        n(D, {
          get when() {
            return e.clear;
          },
          get children() {
            var t = h();
            return (
              (t.$$click = () => e.onChange([s, s])),
              a(t, n(f, { class: "w-4/5 text-secondary", name: "Close" })),
              t
            );
          },
        }),
        null
      ),
      u(() => m(r, c("relative w-full", e.class))),
      r
    );
  })();
}
o(["click"]);
export { b as D, s as e };
