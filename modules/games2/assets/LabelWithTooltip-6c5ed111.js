import {
  c as s,
  i as m,
  a as h,
  d as c,
  b as l,
  w as f,
  t as d,
} from "./manifest-a234c8a0.js";
import { t } from "./i18n-611811a6.js";
import { c as g } from "./index-ea788ee8.js";
import { T as A, a as b, b as p } from "./tooltip-f54a9090.js";
var v = d('<div><img class="w-18px ml-1 cursor-pointer">'),
  w = ((e) => (
    (e.roi = "roi"),
    (e.aum = "aum"),
    (e.autoCashout = "autoCashout"),
    (e.baseBet = "baseBet"),
    (e.wagerAfterAWin = "wagerAfterAWin"),
    (e.wagerAfterALoss = "wagerAfterALoss"),
    (e.investmentAmount = "investmentAmount"),
    e
  ))(w || {});
function L(e) {
  const u = {
    roi: t("This is the creator’s best revenue record in history."),
    aum: t(
      "AUM is Assets Under Management, which is the total amount of all users' investment amount."
    ),
    autoCashout: t(
      "When the multiplier reaches the configured parameter, your bet will be automatically cashed out."
    ),
    baseBet: t(
      "The initial amount wagered by a strategy, which is typically 1% of the investment amount."
    ),
    wagerAfterAWin: t(
      "The bet amount placed on the next bet after winning the previous bet."
    ),
    wagerAfterALoss: t(
      "The bet amount placed on the next bet after losing the previous bet."
    ),
    investmentAmount: t("The total amount bet for your copied strategy."),
  };
  return s(A, {
    get children() {
      return [
        s(b, {
          get children() {
            var a = v(),
              n = a.firstChild;
            return (
              m(a, () => e.children, n),
              h(
                (r) => {
                  var i = c("flex justify-center items-center", e.class),
                    o = g.qa;
                  return (
                    i !== r.e && l(a, (r.e = i)),
                    o !== r.t && f(n, "src", (r.t = o)),
                    r
                  );
                },
                { e: void 0, t: void 0 }
              ),
              a
            );
          },
        }),
        s(p, {
          get children() {
            return u[e.type];
          },
        }),
      ];
    },
  });
}
export { L, w as T };
