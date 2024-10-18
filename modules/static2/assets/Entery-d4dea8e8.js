import { c as m, e as t, s as a, i, t as r } from "./web-5c332740.js";
import { A as l, i as o } from "./manifest-6dedd536.js";
import { t as g } from "./i18n-2889c705.js";
import { a as n } from "./index-b50c6100.js";
var c = r('<img class="mining-icon-entry w-[26px]">'),
  p = r(
    '<h2 class="text-base font-extrabold text-primary ml-2 sm:text-sm sm:font-semibold">'
  ),
  f = r('<img class="w-10 ml-2 sm:ml-3">');
function y(s) {
  return m(l, {
    href: "/events/mining",
    get class() {
      return o(
        "mining-entry-box flex w-full rounded-lg text-primary items-center overflow-hidden px-2 mb-2 min-h-10 py-3.5 sm:py-1",
        s.class
      );
    },
    style: {
      "background-image":
        "linear-gradient(270deg, rgba(35, 238, 136, 0.00) 12.74%, rgba(35, 238, 136, 0.20) 100%)",
      "background-color": "var(--Sidebar-Unit_bg)",
    },
    get children() {
      return [
        (() => {
          var e = c();
          return t(() => a(e, "src", n.coinLogo)), e;
        })(),
        (() => {
          var e = p();
          return i(e, () => g("Mining Rush!")), e;
        })(),
        (() => {
          var e = f();
          return t(() => a(e, "src", n.hotTag)), e;
        })(),
      ];
    },
  });
}
export { y as default };
