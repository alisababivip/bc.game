import {
  aT as l,
  Q as g,
  c as t,
  t as i,
  aR as u,
  a5 as m,
  ag as d,
  $ as f,
  aU as h,
  i as c,
  af as v,
  h as S,
  aV as p,
  l as w,
  m as P,
  e as R,
  aW as _,
  aS as x,
  W as N,
  aX as T,
  f as o,
} from "./index-Cp-3lvCI.js";
var $ = o("<div>"),
  y = o('<div class="center h-72">');
function C(e) {
  return e === "Bingo New Release" || e === "New Releases"
    ? "casino_new"
    : e === "Hot Games"
    ? "casino_hot"
    : "casino_tag";
}
function I(e) {
  const [r] = d(),
    s = g(() => C(e.tag)),
    [n] = f(
      () => e.tag,
      () => h(e.tag)
    );
  return t(N, {
    get fallback() {
      return (() => {
        var a = y();
        return c(a, t(v, {})), a;
      })();
    },
    get children() {
      return [
        t(S, {
          get when() {
            return n()?.length;
          },
          get children() {
            var a = $();
            return (
              c(
                a,
                t(p, {
                  get providerList() {
                    return n();
                  },
                })
              ),
              w(() =>
                P(
                  a,
                  R(
                    "flex gap-2 [&>*]:max-w-[50%] sm:[&>*]:max-w-72",
                    !e.isCasinoPage && "py-4"
                  )
                )
              ),
              a
            );
          },
        }),
        t(_, {
          load: (a) => x({ ...r, page: a, sectionId: s(), tag: e.tag }),
          get key() {
            return JSON.stringify(r.providerName + e.tag);
          },
        }),
      ];
    },
  });
}
function G() {
  const e = l(),
    r = g(() => e.tag || ""),
    s = () => decodeURIComponent(T[r()] || r());
  return t(m, {
    get title() {
      return i(s());
    },
    get children() {
      return [
        t(u, {
          get title() {
            return i(s());
          },
        }),
        t(I, {
          isCasinoPage: !1,
          get tag() {
            return s();
          },
          class: "py-4",
        }),
      ];
    },
  });
}
export { I as TagSimple, G as default };
