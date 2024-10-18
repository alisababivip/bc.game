import {
  i as s,
  c as m,
  a as b,
  h as u,
  F as i,
  k as g,
  t as n,
} from "./solid-js-8ff414d5.js";
import { s as d } from "./manifest-987d6c36.js";
import { a as h, c as y, j as f, b as p } from "./ball-lose-white-4200dda1.js";
const v = "/modules/lottery2/assets/bonus_tag-34ec657b.png",
  k = "/modules/lottery2/assets/ball_bg-c7180df6.png";
var x = n('<img class="absolute w-7 right-[-2px] top-[-2px]"loading=lazy>'),
  _ = n(
    '<div class="relative flex gap-1 w-40 bg-no-repeat bg-cover p-1 items-center my-0 mx-auto sm:w-fit"><div class="w-6 h-6 text-primary_brand text-xs font-semibold ml-1 rounded-full center bg-no-repeat bg-cover">'
  ),
  w = n(
    '<div class="w-6 h-6 text-primary_brand text-xs font-semibold rounded-full center bg-no-repeat bg-cover">'
  );
const P = (a) => {
  const c = (r, t = !1) => {
    const e = t
        ? a.matchJackpotBallNumber
        : a.matchNumbers && a.matchNumbers.includes(r),
      l = d.darken ? h : y;
    return `url(${t ? (e ? f : l) : e ? p : l})`;
  };
  return (() => {
    var r = _(),
      t = r.firstChild;
    return (
      r.style.setProperty("background-image", k),
      s(
        r,
        m(b, {
          get when() {
            return a.lastTicketId > 0;
          },
          get children() {
            var e = x();
            return u(e, "src", v), e;
          },
        }),
        t
      ),
      s(
        r,
        m(i, {
          get each() {
            return a.numbers;
          },
          children: (e) =>
            (() => {
              var l = w();
              return (
                s(l, e),
                g((o) =>
                  (o = c(e, !1)) != null
                    ? l.style.setProperty("background-image", o)
                    : l.style.removeProperty("background-image")
                ),
                l
              );
            })(),
        }),
        t
      ),
      s(t, () => a.jackpotBallNumber),
      g((e) =>
        (e = c(a.jackpotBallNumber, !0)) != null
          ? t.style.setProperty("background-image", e)
          : t.style.removeProperty("background-image")
      ),
      r
    );
  })();
};
export { P as A };
