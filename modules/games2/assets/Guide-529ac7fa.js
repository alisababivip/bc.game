import {
  f as j,
  u as S,
  A as E,
  c as h,
  r as H,
  i,
  F as P,
  a as p,
  b as R,
  B as $,
  m as z,
  w as b,
  t as d,
  C as A,
} from "./manifest-a234c8a0.js";
import { a as s } from "./index-ea788ee8.js";
import { t } from "./i18n-611811a6.js";
var B = d(
    '<div class="flex justify-center items-center"><img class="size-4 mr-1"><span class="text-secondary cursor-pointer">?'
  ),
  F = d("<span>"),
  G = d(
    '<div class="lg:-mx-4 flex flex-col flex-1"><img><div class="px-4 pt-[30px] flex flex-col justify-between flex-1"><div><div class="text-secondary font-bold mb-2"></div><div class="text-primary font-bold mb-2 text-xl"></div><div class="text-secondary font-bold"></div></div><div class="pb-10 mt-4"><div class="gap-2 flex justify-center items-center mb-10">'
  ),
  I = d("<div>");
function D() {
  const e = S(),
    f = () => {
      e("/crash-guide");
    };
  return (
    (a = B()),
    (n = a.firstChild),
    (l = n.nextSibling),
    (o = l.firstChild),
    (a.$$click = f),
    i(l, () => t("How it works"), o),
    p(() => b(n, "src", s.book)),
    a
  );
  var a, n, l, o;
}
const M = [s.lightStep1, s.lightStep2, s.lightStep3],
  N = [s.darkStep1, s.darkStep2, s.darkStep3];
function J() {
  const [e, f] = j(0),
    a = S(),
    n = [t("Step1"), t("Step2"), t("Step3")],
    l = [t("Choose Strategy"), t("Copy Strategy"), t("Stop Strategy")],
    o = [
      t(
        "Check the performance and parameters of each strategy in the Top Strategies, and choose the one that suits you to follow."
      ),
      t(
        "Enter the total investment amount you wish to bet. Click Confirm to start automatic betting."
      ),
      t(
        "Check the Profits and ROI in Running Strategies, and you can manually stop the strategy. More info at Help."
      ),
    ],
    C = E.theme === "light" ? M : N;
  return h(H, {
    get title() {
      return t("How it works?");
    },
    class: "flex",
    get children() {
      var g = G(),
        u = g.firstChild,
        m = u.nextSibling.firstChild,
        x = m.firstChild,
        v = x.nextSibling,
        k = v.nextSibling,
        y = m.nextSibling,
        w = y.firstChild;
      return (
        i(x, () => n[e()]),
        i(v, () => l[e()]),
        i(k, () => o[e()]),
        i(
          w,
          h(P, {
            each: [0, 1, 2],
            children: (c) => {
              return (
                (r = I()),
                p(() =>
                  R(
                    r,
                    "w-2 h-2 rounded-[50%] " +
                      (c === e() ? "bg-[#24EE89]" : "bg-layer3")
                  )
                ),
                r
              );
              var r;
            },
          })
        ),
        i(
          y,
          h($, {
            class: "w-full",
            type: "brand",
            onClick: () => {
              e() !== 2 ? f(e() + 1) : a(-1);
            },
            get children() {
              var c,
                r = F();
              return (
                i(
                  r,
                  ((c = z(() => e() !== 2)),
                  () => (c() ? t("Next") : t("Start Playing")))
                ),
                r
              );
            },
          }),
          null
        ),
        p(() => b(u, "src", C[e()])),
        g
      );
    },
  });
}
A(["click"]);
export { D as Guide, J as default };
