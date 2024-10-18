import { c as t, s as i, i as a, t as l } from "./web-13cf6287.js";
import { p as m, P as f, B as d } from "./manifest-cc1f4445.js";
import { A as x } from "./animate-number-d108436c.js";
import { C as c } from "./currency-format-e71c6b76.js";
import { t as s } from "./i18n-023baa0d.js";
const g = "/modules/bonus2/assets/reward@2x-97281602.png";
var h = l('<img class="absolute -top-24 left-1/2 w-[17rem] -translate-x-1/2">'),
  y = l('<div class="flex items-center gap-x-1">'),
  b = l(
    '<div class="flex h-64 flex-col justify-center"><div class="flex flex-grow flex-col items-center justify-end gap-y-1"><span class="text-xl font-extrabold text-primary">'
  );
const A = (r) => {
    m.push(() => t(C, r));
  },
  C = (r) =>
    t(f, {
      type: "center",
      class: "popup-full py-4",
      get title() {
        return s("Recharge");
      },
      get children() {
        return [
          (() => {
            var e = h();
            return i(e, "src", g), e;
          })(),
          (() => {
            var e = b(),
              n = e.firstChild,
              p = n.firstChild;
            return (
              a(p, () => s("Congrats! You got")),
              a(
                n,
                t(c, {
                  get currencyName() {
                    return r.currencyName;
                  },
                  get children() {
                    var o = y();
                    return (
                      a(
                        o,
                        t(x, {
                          class: "text-lg font-extrabold text-[#f6c722]",
                          duration: 500,
                          get number() {
                            return Number(r.amount);
                          },
                          children: (u) => t(c.Amount, { amount: u }),
                        })
                      ),
                      o
                    );
                  },
                }),
                null
              ),
              a(
                e,
                t(d, {
                  onClick: () => m.pop(),
                  class: "mx-4 mt-4",
                  type: "brand",
                  get children() {
                    return s("Confirm");
                  },
                }),
                null
              ),
              e
            );
          })(),
        ];
      },
    });
export { A as p };
