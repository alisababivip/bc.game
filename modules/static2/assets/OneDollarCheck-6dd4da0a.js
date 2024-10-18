import { c as s, i as e, d as c, t as p } from "./web-5c332740.js";
import { a as u, P as d, B as m, p as r, d as f } from "./manifest-6dedd536.js";
import { t } from "./i18n-2889c705.js";
var h = p(
  '<div class="p-4 text-secondary text-sm font-semibold"><h2 class=title></h2><p></p><p class="text-brand cursor-pointer">'
);
const x = function () {
  const i = u();
  return s(d, {
    get children() {
      var a = h(),
        o = a.firstChild,
        l = o.nextSibling,
        n = l.nextSibling;
      return (
        e(o, () => t("Oops! You have remaining balance in your account")),
        e(l, () =>
          t(
            "You still have remaining balance in your account, please withdraw before you send request. Once you completed self exclusion process, you will not be able to withdraw your balance."
          )
        ),
        e(
          a,
          s(m, {
            class: "my-3 w-full",
            onClick: () => {
              i("/wallet/withdraw"), r.pop();
            },
            type: "brand",
            get children() {
              return t("Go withdraw");
            },
          }),
          n
        ),
        (n.$$click = () => {
          r.pop(), f.emit("self_exclusion");
        }),
        e(n, () => t("Understand, continue self-exclusion process")),
        a
      );
    },
  });
};
c(["click"]);
export { x as default };
