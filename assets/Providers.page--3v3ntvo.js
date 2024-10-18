import {
  c as e,
  t as c,
  aR as u,
  a5 as p,
  $ as f,
  as as m,
  i as n,
  af as h,
  G as v,
  r as y,
  h as $,
  l as g,
  s as b,
  C as _,
  W as x,
  f as s,
} from "./index-Cp-3lvCI.js";
var P = s(
    '<div class="grid py-4 grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">'
  ),
  k = s('<div class="center h-72 flex-auto">'),
  w = s('<img alt=""class="h-full w-full object-contain">'),
  E = s(
    '<div class="flex items-center justify-center rounded-xl bg-layer4 p-4 font-semibold h-[4.25rem]"><span>'
  );
function C() {
  return e(p, {
    get title() {
      return c("Providers");
    },
    get children() {
      return [
        e(u, {
          get title() {
            return c("Providers");
          },
          link: "/casino",
        }),
        e(L, {}),
      ];
    },
  });
}
function L() {
  const [d] = f(() => m());
  return e(x, {
    get fallback() {
      return (() => {
        var a = k();
        return n(a, e(h, {})), a;
      })();
    },
    get children() {
      var a = P();
      return (
        n(
          a,
          e(v, {
            get each() {
              return d()?.pageList.list;
            },
            children: (t) =>
              e(y, {
                get href() {
                  return `/provider/${t.providerName}`;
                },
                get children() {
                  var i = E(),
                    l = i.firstChild;
                  return (
                    n(
                      i,
                      e($, {
                        get when() {
                          return t.logo;
                        },
                        get children() {
                          var r = w();
                          return (
                            r.addEventListener("error", (o) => {
                              (o.currentTarget.style.display = "none"),
                                o.currentTarget.nextElementSibling &&
                                  (o.currentTarget.nextElementSibling.style.display =
                                    "block");
                            }),
                            g(() =>
                              b(r, "src", _.darken ? t.logo : t.logoWhite)
                            ),
                            r
                          );
                        },
                      }),
                      l
                    ),
                    n(l, () => t.providerName),
                    g((r) =>
                      (r = t.logo ? "none" : "block") != null
                        ? l.style.setProperty("display", r)
                        : l.style.removeProperty("display")
                    ),
                    i
                  );
                },
              }),
          })
        ),
        a
      );
    },
  });
}
export { L as ProviderView, C as default };
