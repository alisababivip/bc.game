import {
  b as a,
  c as t,
  S as l,
  i as r,
  a as p,
  t as c,
} from "./solid-js-8ff414d5.js";
import { t as f } from "./i18n-9df4b53a.js";
import h from "./UpcomingDrawSection-94e1ebcd.js";
import { e as u, K as S } from "./manifest-987d6c36.js";
import "./currency-1e153f43.js";
import "./index-4d3ecff0.js";
import "./CountryAvatar-9bf00e0a.js";
import "./countries-18533370.js";
import "./lottery-40ce25b9.js";
import "./throttle-e4f3954e.js";
import "./debounce-f7740f4e.js";
import "./isObject-909534d5.js";
import "./toNumber-e58af95e.js";
var b = c(
  '<div class=min-h-60><section class="flex justify-between mb-3"><h2 class="text-primary text-base font-extrabold flex items-center">'
);
const j = function () {
  const [i, m] = a();
  return t(l, {
    get children() {
      var e = b(),
        o = e.firstChild,
        s = o.firstChild;
      return (
        r(s, () => f("Upcoming Draw")),
        r(
          o,
          t(p, {
            get when() {
              return !u.mobile;
            },
            get children() {
              return t(S, { smoothListSelector: i });
            },
          }),
          null
        ),
        r(e, t(h, { callback: (n) => m(n) }), null),
        e
      );
    },
  });
};
export { j as default };
