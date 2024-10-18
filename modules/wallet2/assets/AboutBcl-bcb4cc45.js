import {
  s as i,
  i as e,
  c as t,
  m as d,
  e as h,
  t as g,
} from "./web-da7da7e5.js";
import { a as f, A as l, B as y, c as b, b as w } from "./manifest-e0f0ba59.js";
import { T as s, t as c } from "./i18n-9b1e4bd8.js";
import { W as L } from "./Icon-b6e375d0.js";
import "./solid-js-2e15682c.js";
const B = "/modules/wallet2/assets/bcl-989c2200.png",
  E = "/modules/wallet2/assets/bcl_w-c195f682.png",
  v = "/modules/wallet2/assets/bcl_tip-e9047fd9.png";
var C = g(
  '<div class="mt-4 rounded-xl p-4 bg-layer3"><div class=relative><img class="w-full rounded-lg"alt=""><img class="absolute w-48 left-6 top-14"alt=""></div><p class=mt-4></p><p class=mt-4></p><p class=mt-4>'
);
function N() {
  const m = f();
  return (() => {
    var r = C(),
      a = r.firstChild,
      o = a.firstChild,
      u = o.nextSibling,
      _ = a.nextSibling,
      n = _.nextSibling,
      p = n.nextSibling;
    return (
      i(u, "src", v),
      e(
        _,
        t(s, {
          i18nKey: "wallet.trans.desc50",
          get children() {
            return [
              "__ENV_BCL__(__ENV_SITE__ Lottery) is a token created by __ENV_HOST__ for players who love the Lottery. You can use __ENV_BCL__ to redeem lottery tickets in the Lottery at any time, 1 __ENV_BCL__ for every one",
              t(l, {
                class: "hover mx-1",
                href: "/lottery",
                children: "Lottery",
              }),
              "ticket.",
            ];
          },
        })
      ),
      e(
        n,
        t(s, {
          i18nKey: "wallet.trans.desc51",
          get children() {
            return [
              "You can exchange __ENV_BCL__ through",
              t(l, {
                class: "hover",
                href: "/wallet/swap?to=BCL",
                children: "__ENV_SITE__ Swap",
              }),
              "at any time, or you may receive __ENV_BCL__ from the __ENV_HOST__ official community or other players through Gift Link, Swap __ENV_BCL__ to other coin is not supported.",
            ];
          },
        })
      ),
      e(
        p,
        t(s, {
          i18nKey: "wallet.trans.desc52",
          get children() {
            return [
              "Of course, you can send __ENV_BCL__ to other players through the Tip function. Also, you can generate a Gift",
              t(l, {
                class: "hover",
                href: "/lottery/send_ticket",
                children: "Link",
              }),
              "to share the __ENV_BCL__ transfer link to social platforms or messaging apps.",
            ];
          },
        })
      ),
      e(
        r,
        t(y, {
          type: "brand",
          class: "mt-5",
          onClick: () => m("/lottery/detail/0"),
          get children() {
            return [
              d(() => c("Buy lottery ticket")),
              t(L, { class: "ml-1", name: "Arrow" }),
            ];
          },
        }),
        null
      ),
      h(() => i(o, "src", b.darken ? B : E)),
      r
    );
  })();
}
function A() {
  return t(w, {
    get title() {
      return c("About __ENV_BCL__");
    },
    get children() {
      return t(N, {});
    },
  });
}
export { N as AboutBclPage, A as default };
