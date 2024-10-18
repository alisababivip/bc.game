import { e as k, s as c, t as w } from "./web-da7da7e5.js";
import { b as d, d as x, a as C } from "./solid-js-2e15682c.js";
var y = w(
  '<div class="relative h-[16px] w-[16px]"><svg width=100% height=100% viewBox="0 0 32 32"><circle cx=16 cy=16 r=12 fill=none stroke=transparent stroke-width=4></circle><circle cx=16 cy=16 r=12 fill=none stroke=#24EE89 stroke-width=4 stroke-linecap=round transform="rotate(-90 16 16)">'
);
const P = (r) => {
  const [a, f] = d(0),
    [o, m] = d(0),
    v = () => {
      const e = r.endTime - +new Date();
      return o(), e > 0 ? (e / o()) * 100 : 0;
    };
  x(() => {
    m(Math.max(r.endTime - +new Date(), 0));
    const e = setInterval(() => {
      f(v()), a() <= 0 && (clearInterval(e), r.onComplete && r.onComplete());
    }, 1e3);
    C(() => clearInterval(e));
  });
  const h = 12,
    n = 2 * Math.PI * h;
  return (() => {
    var e = y(),
      u = e.firstChild,
      g = u.firstChild,
      s = g.nextSibling;
    return (
      s.style.setProperty("transition", "stroke-dashoffset 1s linear"),
      k(
        (t) => {
          var i = n.toString(),
            l = n * ((100 - a()) / 100);
          return (
            i !== t.e && c(s, "stroke-dasharray", (t.e = i)),
            l !== t.t && c(s, "stroke-dashoffset", (t.t = l)),
            t
          );
        },
        { e: void 0, t: void 0 }
      ),
      e
    );
  })();
};
export { P as C };
