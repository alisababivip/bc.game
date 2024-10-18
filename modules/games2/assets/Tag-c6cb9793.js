import {
  i as u,
  a as d,
  aA as b,
  t as g,
  A as l,
} from "./manifest-a234c8a0.js";
var i = g(
  '<div class="rounded-full py-1 px-2 text-xs font-semibold text-center text-secondary">'
);
function f(e) {
  return (
    (r = i()),
    u(r, () => e.children),
    d((n) =>
      b(
        r,
        (function (o) {
          const a = l.darken,
            t = ["#C9ADFF", "#894FFF"],
            c = ["#3C3F48", "#ECF0F6"],
            s = ["#C2D3E3", "#67707B"];
          switch (o) {
            case "3X":
              return {
                background: "rgba(110, 52, 226, 0.4)",
                color: t[a ? 0 : 1],
              };
            case "Green":
              return {
                background: "rgba(59, 193, 23, 0.1)",
                color: "rgba(59, 193, 23, 1)",
              };
            case "Red":
              return {
                background: "rgba(237, 100, 0, 0.1)",
                color: "rgba(237, 100, 0, 1)",
              };
            case "Martingale":
              return { background: a ? "#3C3F48" : "rgb(var(--layer5) / 1)" };
            default:
              return { background: c[a ? 0 : 1], color: s[a ? 0 : 1] };
          }
        })(e.type),
        n
      )
    ),
    r
  );
  var r;
}
export { f as T };
