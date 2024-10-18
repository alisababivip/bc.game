import { h as l, k as s, t as n } from "./solid-js-8ff414d5.js";
import { c as i } from "./countries-18533370.js";
import { b as a } from "./lottery-40ce25b9.js";
var p = n(
    '<section class="relative min-w-[24px] min-h-[24px] w-[24px] h-[24px] overflow-hidden border border-solid border-third rounded-full"><img class="w-[24px] min-w-[24px] absolute"alt="">'
  ),
  u = n(
    '<section class="relative min-w-[16px] min-h-[16px] w-[16px] h-[16px] overflow-hidden"><img class="w-[16px] min-w-[16px] absolute"alt="">'
  ),
  m = n(
    '<section class="relative w-[64px] min-h-[64px] h-[64px] overflow-hidden"><img class="w-[64px] absolute"alt="">'
  ),
  c = n(
    '<section class="relative min-w-[48px] min-h-[48px] w-[48px] h-[48px] overflow-hidden"><img class="w-[48px] min-w-[48px] absolute"alt="">'
  );
function d(o) {
  return (() => {
    var r = p(),
      t = r.firstChild;
    return (
      l(t, "src", i),
      s((e) =>
        (e = a(o.country, 1)) != null
          ? t.style.setProperty("top", e)
          : t.style.removeProperty("top")
      ),
      r
    );
  })();
}
function f(o) {
  return (() => {
    var r = u(),
      t = r.firstChild;
    return (
      l(t, "src", i),
      s((e) =>
        (e = a(o.country, 2 / 3)) != null
          ? t.style.setProperty("top", e)
          : t.style.removeProperty("top")
      ),
      r
    );
  })();
}
function h(o) {
  return (() => {
    var r = m(),
      t = r.firstChild;
    return (
      l(t, "src", i),
      s((e) =>
        (e = a(o.country, 8 / 3)) != null
          ? t.style.setProperty("top", e)
          : t.style.removeProperty("top")
      ),
      r
    );
  })();
}
function w(o) {
  return (() => {
    var r = c(),
      t = r.firstChild;
    return (
      l(t, "src", i),
      s((e) =>
        (e = a(o.country, 2)) != null
          ? t.style.setProperty("top", e)
          : t.style.removeProperty("top")
      ),
      r
    );
  })();
}
export { f as C, d as a, w as b, h as c };
