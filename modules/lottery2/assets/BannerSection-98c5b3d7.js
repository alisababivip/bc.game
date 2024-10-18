import {
  c,
  S as u,
  i as n,
  a as x,
  k as m,
  h as d,
  p as y,
  t as r,
} from "./solid-js-8ff414d5.js";
import { e as $, s as f } from "./manifest-987d6c36.js";
import { t as a } from "./i18n-9df4b53a.js";
const w = "/modules/lottery2/assets/banner-m-cfa9b4a3.png",
  _ = "/modules/lottery2/assets/banner-m-white-3bcc29d9.png",
  v = "/modules/lottery2/assets/banner-pc-244408e8.png",
  k = "/modules/lottery2/assets/banner-pc-white-3ff709e5.png";
var P = r("<img class=w-full alt=banner loading=lazy>"),
  C = r(
    '<section class="relative min-h-32"><section class="absolute-center pl-6 sm:pl-12 w-full text-left"><div class="flex w-full"><h1 class="text-[1.75rem] sm:text-4xl font-extrabold text-primary"></h1></div><p class="my-1.5 sm:my-4 text-left font-semibold text-sm sm:text-lg w-[calc(100%-180px)] text-secondary"></p><p class=mt-0><a class="inline-flex cursor-pointer py-1 underline text-xs sm:text-base font-extrabold text-brand">?'
  ),
  S = r('<img class="w-full min-h-32"alt=banner loading=lazy>');
const A = function () {
  const p = (e) => {
    if (e) {
      let t = document.getElementById(e);
      t && t.scrollIntoView();
    }
  };
  return c(u, {
    get children() {
      var e = C(),
        t = e.firstChild,
        i = t.firstChild,
        b = i.firstChild,
        o = i.nextSibling,
        h = o.nextSibling,
        s = h.firstChild,
        g = s.firstChild;
      return (
        n(
          e,
          c(x, {
            get when() {
              return $.mobile;
            },
            get fallback() {
              return (() => {
                var l = S();
                return m(() => d(l, "src", f.darken ? v : k)), l;
              })();
            },
            get children() {
              var l = P();
              return m(() => d(l, "src", f.darken ? w : _)), l;
            },
          }),
          t
        ),
        n(b, () => a("LOTTERY")),
        n(o, () => a("Play lotteries online with Lotto and hit the jackpot!")),
        (s.$$click = () => p("how-to-play")),
        n(s, () => a("How to play"), g),
        e
      );
    },
  });
};
y(["click"]);
export { A as BannerSection, A as default };
