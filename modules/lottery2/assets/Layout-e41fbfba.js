import { e as r, _ as a } from "./manifest-987d6c36.js";
import {
  o as n,
  c as e,
  S as i,
  a as l,
  P as s,
  m,
  l as u,
} from "./solid-js-8ff414d5.js";
import { u as c } from "./router-290e090e.js";
import { c as p } from "./lottery-40ce25b9.js";
const t = u(() =>
  a(
    () => import("./BetSlip-1e41f091.js"),
    [
      "assets/BetSlip-1e41f091.js",
      "assets/solid-js-8ff414d5.js",
      "assets/manifest-987d6c36.js",
      "assets/store-de20ba30.js",
      "assets/store-2ed2b91e.js",
      "assets/lottery-40ce25b9.js",
      "assets/_Uint8Array-7783c8b7.js",
      "assets/_MapCache-9c96b8d5.js",
      "assets/isObject-909534d5.js",
      "assets/BetSlipContent-999f128e.js",
      "assets/index-4d3ecff0.js",
      "assets/DrawsSelect-10573c9c.js",
      "assets/LocalIcon-84e2288f.js",
      "assets/i18n-9df4b53a.js",
      "assets/countries-18533370.js",
      "assets/Lottery.interface-46896b0b.js",
      "assets/logo-a74fb622.js",
      "assets/createSettle-6ac4bfbf.js",
      "assets/apis-5c7b35c7.js",
      "assets/once-e92576f3.js",
      "assets/toNumber-e58af95e.js",
      "assets/toString-9093e562.js",
    ]
  )
);
function g(o) {
  return (
    c(),
    n(() => {
      r.mobile || p();
    }),
    e(i, {
      get children() {
        return [
          e(l, {
            get when() {
              return r.mobile;
            },
            get fallback() {
              return e(s, {
                get children() {
                  return e(t, {});
                },
              });
            },
            get children() {
              return e(t, {});
            },
          }),
          m(() => o.children),
        ];
      },
    })
  );
}
export { g as default };
