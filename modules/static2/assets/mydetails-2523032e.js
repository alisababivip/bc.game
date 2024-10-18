import {
  c as l,
  i as t,
  m as p,
  e as A,
  s as L,
  t as g,
} from "./web-5c332740.js";
import { D as k, l as x, q as B } from "./manifest-6dedd536.js";
import { u as q } from "./router-d36109eb.js";
import { e as I, S as M, b as N, F as P } from "./solid-js-9508438e.js";
import { t as e } from "./i18n-2889c705.js";
import { m as R } from "./index-8bdd9550.js";
var T = g(
    '<table><thead><tr class="text-base font-extrabold text-secondary"><th class=py-2></th><th class=py-2></th><th class=py-2></th><th class=py-2></th></tr></thead><tbody>'
  ),
  V = g(
    '<tr class="text-base font-extrabold text-primary"><td class="text-center py-2"></td><td class=py-2><div class="flex justify-center"><section class="w-3/4 text-right"></section></div></td><td class=py-2><div class="flex justify-center w-full"><section class="flex w-3/4 justify-end text-brand"><label class=block>+</label><img class="h-5 flex-none ml-1"></section></div></td><td class="text-center py-2">%'
  );
const O = () => {
  const $ = q(),
    b = "/events/mining/mydetails/twitter",
    [_] = I(R, { initialValue: [] });
  return l(k, {
    get title() {
      return e("Detailed data");
    },
    get children() {
      var s = T(),
        n = s.firstChild,
        y = n.firstChild,
        a = y.firstChild,
        o = a.nextSibling,
        c = o.nextSibling,
        S = c.nextSibling,
        C = n.nextSibling;
      return (
        t(a, () => e("Date")),
        t(
          o,
          l(M, {
            get when() {
              return $.pathname.includes(b);
            },
            get fallback() {
              return `${e("Wager")} (${e("USD")})`;
            },
            get children() {
              return [p(() => e("Amount")), " (", p(() => e("USD")), ")"];
            },
          })
        ),
        t(c, () => e("$BC Amount")),
        t(S, () => e("Proportion")),
        t(
          C,
          l(N, {
            get children() {
              return l(P, {
                get each() {
                  return _();
                },
                children: (i, W) =>
                  (() => {
                    var m = V(),
                      d = m.firstChild,
                      f = d.nextSibling,
                      D = f.firstChild,
                      w = D.firstChild,
                      h = f.nextSibling,
                      v = h.firstChild,
                      F = v.firstChild,
                      r = F.firstChild;
                    r.firstChild;
                    var U = r.nextSibling,
                      u = h.nextSibling,
                      j = u.firstChild;
                    return (
                      t(d, () => i.date),
                      t(w, () =>
                        parseFloat(
                          new x(i.wager || 0).toFixed(2)
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      ),
                      t(
                        r,
                        () => new x(i.reward || 0).toNumber().toLocaleString(),
                        null
                      ),
                      t(u, () => (i == null ? void 0 : i.proportion), j),
                      A(() => L(U, "src", B.coinIcon("BC"))),
                      m
                    );
                  })(),
              });
            },
          })
        ),
        s
      );
    },
  });
};
export { O as default };
