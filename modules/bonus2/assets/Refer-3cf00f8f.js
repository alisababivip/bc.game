import { c as s, i as e, e as h, s as C, t as l } from "./web-13cf6287.js";
import { b as v, o as w } from "./solid-js-38561dfe.js";
import {
  p as S,
  X as k,
  t as m,
  P as R,
  B as f,
  W as D,
  a as E,
  D as I,
} from "./manifest-cc1f4445.js";
import { T, t as n } from "./i18n-023baa0d.js";
import { a as U } from "./index-823e0b11.js";
import "./level3-2267c79e.js";
import "./withdraw-363bec6b.js";
var u = l("<br>"),
  A = l('<span class="text-3xl text-warning">__number__'),
  F = l("<span class=mx-1>+"),
  M = l('<span class="text-3xl text-brand">15%'),
  N = l(
    '<div class="flex flex-col gap-4"><div class="flex gap-4 rounded-lg bg-layer1 px-2 py-4"><img class="h-auto w-32 object-contain"><div class="text-xl font-extrabold"><p class=mb-4></p><p class="text-sm font-normal text-brand"></p></div></div><div><p class=text-secondary></p><div class="mt-2 flex w-full items-center justify-between rounded-xl border border-input bg-layer3 px-3 py-2"><p class=text-brand>'
  );
const j = function () {
  const [r, x] = v("");
  w(() => {
    k()
      .get("/agent/invitation/code/custom/")
      .then((t) => {
        t && x(t.invitationUrl || "");
      })
      .catch(m);
  });
  const a = () => {
      D.copyToClipboard(r()), m(n("Copied"));
    },
    b = () => E.printCurrency(new I(1e3));
  return s(R, {
    class: "w-fit",
    get children() {
      var t = N(),
        i = t.firstChild,
        o = i.firstChild,
        g = o.nextSibling,
        p = g.firstChild,
        _ = p.nextSibling,
        y = i.nextSibling,
        c = y.firstChild,
        d = c.nextSibling,
        $ = d.firstChild;
      return (
        e(
          p,
          s(T, {
            i18nKey: "bonus.mainpage.refer.desc",
            get number() {
              return b();
            },
            get children() {
              return [
                "REFER A FRIEND AND GET",
                u(),
                A(),
                F(),
                M(),
                u(),
                "COMMISSION",
              ];
            },
          })
        ),
        e(_, () => n("Invite friends, earn money.")),
        e(c, () => n("referral link")),
        e($, r),
        e(
          d,
          s(f, {
            onClick: a,
            type: "second",
            class: "h-10 p-2",
            get children() {
              return n("Copy");
            },
          }),
          null
        ),
        e(
          t,
          s(f, {
            onClick: a,
            type: "brand",
            class: "w-full",
            get children() {
              return n("Copy link");
            },
          }),
          null
        ),
        h(() => C(o, "src", U.refer)),
        t
      );
    },
  });
};
function X() {
  S.push(() => s(j, {}));
}
export { X as default };
