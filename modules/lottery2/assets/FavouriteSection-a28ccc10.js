var f = (m, c, s) =>
  new Promise((u, n) => {
    var p = (a) => {
        try {
          o(s.next(a));
        } catch (e) {
          n(e);
        }
      },
      r = (a) => {
        try {
          o(s.throw(a));
        } catch (e) {
          n(e);
        }
      },
      o = (a) => (a.done ? u(a.value) : Promise.resolve(a.value).then(p, r));
    o((s = s.apply(m, c)).next());
  });
import {
  g as _,
  b as w,
  c as t,
  S as L,
  i as l,
  a as v,
  m as $,
  t as i,
} from "./solid-js-8ff414d5.js";
import { u as S } from "./store-c334f12e.js";
import { a as k, b as C } from "./apis-5c7b35c7.js";
import { p as A } from "./store-2ed2b91e.js";
import { L as I } from "./LikeLotteryItem-30e8754e.js";
import {
  u as F,
  e as d,
  B as R,
  A as x,
  I as y,
  K as B,
  M,
} from "./manifest-987d6c36.js";
import { t as h } from "./i18n-9df4b53a.js";
import "./Lottery.interface-46896b0b.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
import "./index-4d3ecff0.js";
import "./CountryAvatar-9bf00e0a.js";
import "./countries-18533370.js";
import "./lottery-40ce25b9.js";
var j = i(
    '<span class="inline-flex items-center dark:bg-layer5 bg-black_alpha5 gap-1 p-2 rounded-lg"><label class="text-primary text-sm font-semibold">'
  ),
  D = i(
    '<div class=py-4><section class="flex justify-between items-center"><h2 class="my-3 text-primary text-base font-extrabold">'
  ),
  K = i('<section class="flex items-center gap-2">'),
  N = i("<div>"),
  O = i('<div class="rounded-xl bg-layer4 h-44">');
const re = function () {
  F();
  const { store: m, setStore: c } = S(),
    [, { refetch: s }] = _(function () {
      return f(this, null, function* () {
        const r = yield k();
        c(A((o) => (o.favourteLotteries = r)));
      });
    }),
    u = (r) =>
      f(this, null, function* () {
        yield C(r.lotteryId, !1), s();
      }),
    [n, p] = w();
  return t(L, {
    get children() {
      var r = D(),
        o = r.firstChild,
        a = o.firstChild;
      return (
        l(a, () => h("My Favourite")),
        l(
          o,
          t(v, {
            get when() {
              return d.mobile;
            },
            get fallback() {
              return (() => {
                var e = K();
                return (
                  l(
                    e,
                    t(R, {
                      class: "dark:bg-layer5 bg-black_alpha5 h-8",
                      get children() {
                        return t(x, {
                          href: "/lottery/favourite",
                          class:
                            "font-extrabold text-sm text-primary inline-flex items-center",
                          get children() {
                            return [
                              $(() => h("All")),
                              t(y, {
                                name: "Arrow",
                                class: "w-4 h-4 rotate-180",
                              }),
                            ];
                          },
                        });
                      },
                    }),
                    null
                  ),
                  l(e, t(B, { smoothListSelector: n }), null),
                  e
                );
              })();
            },
            get children() {
              return t(x, {
                href: "/lottery/favourite",
                get children() {
                  var e = j(),
                    g = e.firstChild;
                  return (
                    l(g, () => h("All")),
                    l(
                      e,
                      t(y, { name: "Arrow", class: "w-3 h-3 rotate-180" }),
                      null
                    ),
                    e
                  );
                },
              });
            },
          }),
          null
        ),
        l(
          r,
          t(M, {
            class: "-mx-4 sm:mx-0",
            get scrollPadding() {
              return d.mobile ? 16 : 0;
            },
            ref: (e) => {
              p(e);
            },
            get width() {
              return d.mobile ? 210 : 240;
            },
            height: 210,
            get data() {
              return m.favourteLotteries;
            },
            rows: 1,
            children: (e, g) =>
              t(v, {
                get when() {
                  return e();
                },
                get fallback() {
                  return O();
                },
                get children() {
                  var b = N();
                  return (
                    l(
                      b,
                      t(I, {
                        get data() {
                          return e();
                        },
                        onClickLike: u,
                      })
                    ),
                    b
                  );
                },
              }),
          }),
          null
        ),
        r
      );
    },
  });
};
export { re as FavouriteSection, re as default };
