import { u as g, I as p, a as v, b as f, _ as o } from "./manifest-987d6c36.js";
import {
  b as S,
  c as t,
  S as m,
  i as e,
  a as s,
  t as _,
  l as n,
} from "./solid-js-8ff414d5.js";
import { u as E } from "./store-c334f12e.js";
import { L as y } from "./LotterySearchResult-3c6a8f21.js";
import { t as L } from "./throttle-e4f3954e.js";
import "./store-2ed2b91e.js";
import "./apis-5c7b35c7.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./isObject-909534d5.js";
import "./_MapCache-9c96b8d5.js";
import "./Lottery.interface-46896b0b.js";
import "./PopularSectionItem-c3dc7aa1.js";
import "./index-4d3ecff0.js";
import "./currency-1e153f43.js";
import "./CountryAvatar-9bf00e0a.js";
import "./countries-18533370.js";
import "./lottery-40ce25b9.js";
import "./logo-a74fb622.js";
import "./i18n-9df4b53a.js";
import "./debounce-f7740f4e.js";
var I = _("<section class=py-2>"),
  P = _('<div class="flex-1 bg-layer2"><section class="relative my-4">');
const b = n(() =>
    o(
      () => import("./BannerSection-98c5b3d7.js"),
      [
        "assets/BannerSection-98c5b3d7.js",
        "assets/solid-js-8ff414d5.js",
        "assets/manifest-987d6c36.js",
        "assets/i18n-9df4b53a.js",
      ]
    )
  ),
  R = n(() =>
    o(
      () => import("./UpcomingDrawSectionWrap-a3bb50c8.js"),
      [
        "assets/UpcomingDrawSectionWrap-a3bb50c8.js",
        "assets/solid-js-8ff414d5.js",
        "assets/i18n-9df4b53a.js",
        "assets/manifest-987d6c36.js",
        "assets/UpcomingDrawSection-94e1ebcd.js",
        "assets/currency-1e153f43.js",
        "assets/index-4d3ecff0.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/throttle-e4f3954e.js",
        "assets/debounce-f7740f4e.js",
        "assets/isObject-909534d5.js",
        "assets/toNumber-e58af95e.js",
      ]
    )
  ),
  w = n(() =>
    o(
      () => import("./PopularSection-fde33709.js"),
      [
        "assets/PopularSection-fde33709.js",
        "assets/solid-js-8ff414d5.js",
        "assets/PopularSectionItem-c3dc7aa1.js",
        "assets/index-4d3ecff0.js",
        "assets/manifest-987d6c36.js",
        "assets/currency-1e153f43.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/logo-a74fb622.js",
        "assets/i18n-9df4b53a.js",
        "assets/store-c334f12e.js",
        "assets/store-2ed2b91e.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/Lottery.interface-46896b0b.js",
        "assets/debounce-f7740f4e.js",
      ]
    )
  ),
  D = n(() =>
    o(
      () => import("./WinnerSection-d346b095.js"),
      [
        "assets/WinnerSection-d346b095.js",
        "assets/solid-js-8ff414d5.js",
        "assets/index-4d3ecff0.js",
        "assets/manifest-987d6c36.js",
        "assets/currency-1e153f43.js",
        "assets/i18n-9df4b53a.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
      ]
    )
  ),
  T = n(() =>
    o(
      () => import("./FavouriteSection-a28ccc10.js"),
      [
        "assets/FavouriteSection-a28ccc10.js",
        "assets/solid-js-8ff414d5.js",
        "assets/store-c334f12e.js",
        "assets/store-2ed2b91e.js",
        "assets/apis-5c7b35c7.js",
        "assets/manifest-987d6c36.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/Lottery.interface-46896b0b.js",
        "assets/LikeLotteryItem-30e8754e.js",
        "assets/index-4d3ecff0.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/i18n-9df4b53a.js",
      ]
    )
  ),
  A = n(() =>
    o(
      () => import("./LatestResultsSection-455555fb.js"),
      [
        "assets/LatestResultsSection-455555fb.js",
        "assets/solid-js-8ff414d5.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/manifest-987d6c36.js",
        "assets/i18n-9df4b53a.js",
      ]
    )
  ),
  O = n(() =>
    o(
      () => import("./HowToPlaySection-89f724bb.js"),
      [
        "assets/HowToPlaySection-89f724bb.js",
        "assets/solid-js-8ff414d5.js",
        "assets/manifest-987d6c36.js",
        "assets/i18n-9df4b53a.js",
        "assets/ArrowIcon-28af983a.js",
      ]
    )
  );
function Z() {
  g();
  const { store: d } = E(),
    [i, h] = S(""),
    c = L((a) => {
      h(a);
    });
  return t(m, {
    get children() {
      var a = P(),
        l = a.firstChild;
      return (
        e(a, t(b, {}), l),
        e(
          l,
          t(p, {
            name: "Search",
            class:
              "w-6 h-6 fill-secondary absolute left-2 top-1/2 -translate-y-1/2",
          }),
          null
        ),
        e(
          l,
          t(v, {
            class:
              "bg-input_darken px-10 text-base font-semibold placeholder:text-quarterary",
            placeholder: "Lottery Name",
            onChange: c,
            get value() {
              return i();
            },
          }),
          null
        ),
        e(
          l,
          t(s, {
            get when() {
              return i();
            },
            get children() {
              return t(p, {
                name: "Close",
                onClick: () => c(""),
                class:
                  "cursor-pointer w-6 h-6 fill-secondary absolute right-2 top-1/2 -translate-y-1/2",
              });
            },
          }),
          null
        ),
        e(
          a,
          t(s, {
            get when() {
              return !i();
            },
            get fallback() {
              return t(y, {
                get search() {
                  return i();
                },
              });
            },
            get children() {
              return t(m, {
                get children() {
                  var r = I();
                  return (
                    e(r, t(R, {}), null),
                    e(r, t(w, {}), null),
                    e(r, t(D, {}), null),
                    e(
                      r,
                      t(s, {
                        get when() {
                          var u;
                          return (
                            f.login &&
                            ((u = d.favourteLotteries) == null
                              ? void 0
                              : u.length) > 0
                          );
                        },
                        get children() {
                          return t(T, {});
                        },
                      }),
                      null
                    ),
                    e(r, t(A, {}), null),
                    e(r, t(O, {}), null),
                    r
                  );
                },
              });
            },
          }),
          null
        ),
        a
      );
    },
  });
}
export { Z as default };
