import {
  a1 as c,
  t as o,
  c as d,
  S as w,
  i as m,
  a as g,
  z as u,
  d as f,
  b as v,
  w as p,
} from "./manifest-a234c8a0.js";
import { c as k } from "./index-eff0ad24.js";
import { u as b } from "./currency-a0e3a368.js";
var x = o(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none><path fill=currentColor d="M19.691 5.6 9.291 16l10.4 10.4 3.018-3.017L15.326 16l7.383-7.382z"></path> '
);
const j = (s) => {
  return (r = x()), c(r, s, !0, !0), r;
  var r;
};
var y = o(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path stroke=currentColor stroke-width=2.4 d="M18.4 11.2 13.6 16l4.8 4.8"></path> '
);
const I = (s) => {
  return (r = y()), c(r, s, !0, !0), r;
  var r;
};
var C = o("<div><img>"),
  z = o("<span class=ml-1>");
const L = (s) => {
  const { activeToken: r } = b();
  return d(w, {
    get when() {
      return s.token || r();
    },
    get fallback() {
      return (
        (t = z()),
        m(t, () => {
          var n;
          return (n = s.token) == null ? void 0 : n.symbol;
        }),
        t
      );
      var t;
    },
    get children() {
      var t = C(),
        n = t.firstChild;
      return (
        g(
          (e) => {
            var h;
            var a = k(
                "rounded-full inline-flex shrink-0 size-6 items-center justify-center leading-6",
                s.class
              ),
              i = u.coinIcon(
                ((h = s.token) == null ? void 0 : h.symbol) || r().symbol
              ),
              l = f("w-4 h-4", s.imgClass);
            return (
              a !== e.e && v(t, (e.e = a)),
              i !== e.t && p(n, "src", (e.t = i)),
              l !== e.a && v(n, (e.a = l)),
              e
            );
          },
          { e: void 0, t: void 0, a: void 0 }
        ),
        t
      );
    },
  });
};
export { L as S, j as a, I as b };
