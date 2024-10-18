import { i as l, c as a, e as G, s as t, t as n } from "./web-13cf6287.js";
import { d as I } from "./solid-js-38561dfe.js";
import { t as s } from "./i18n-023baa0d.js";
import { V as P, $ as M, B as w } from "./manifest-cc1f4445.js";
import { I as $ } from "./index-e10d67ae.js";
import { a as i } from "./index-823e0b11.js";
import "./level3-2267c79e.js";
import "./withdraw-363bec6b.js";
var N = n("<span>Download (200MB)"),
  Q = n("<span>Download (22.2MB)"),
  T = n(
    '<div class="gap-4 bg-layer2 md:flex"><div class="mb-4 flex-1 overflow-hidden rounded-lg bg-layer4"><div class="flex flex-wrap"><img alt=banner_01 class=w-3/5><img alt=banner_02 class=w-2/5><img alt=banner_03 class=w-full></div><div class=p-4><div class="text-base font-extrabold"></div><div class=text-secondary></div><a class="center mt-4 w-full"rel=noopener target=_blank href="https://drive.google.com/drive/folders/1Q48CUgrJOAeDGpBqmdHGNwWGxNEdTZzQ?usp=sharing"></a></div></div><div class="mb-4 flex-1 overflow-hidden rounded-lg bg-layer4"><div class=img-list><img alt=graphics_pack class=w-full></div><div class=p-4><div class="text-base font-extrabold"></div><div class=text-secondary></div><a class="center mt-4 w-full"rel=noopener target=_blank href="https://res.bc.game/material.zip?md5=69dc359c0de077f93b62da3bc3e5520d">'
  );
function j() {
  const C = P(),
    S = M();
  return (
    I(() => {
      C() && S().scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }),
    (() => {
      var r = T(),
        d = r.firstChild,
        o = d.firstChild,
        c = o.firstChild,
        m = c.nextSibling,
        k = m.nextSibling,
        y = o.nextSibling,
        f = y.firstChild,
        g = f.nextSibling,
        B = g.nextSibling,
        A = d.nextSibling,
        v = A.firstChild,
        z = v.firstChild,
        D = v.nextSibling,
        b = D.firstChild,
        p = b.nextSibling,
        E = p.nextSibling;
      return (
        l(f, () => s("Banner Pack")),
        l(g, () =>
          s(
            "Multilingual Package including events, animated banners, and more..."
          )
        ),
        l(
          B,
          a(w, {
            type: "brand",
            class: "w-full",
            get children() {
              return [N(), a($, { name: "download", size: 20 })];
            },
          })
        ),
        l(b, () => s("Graphics Pack")),
        l(p, () =>
          s(
            "Web design components including Coco, logo, gaming elements, and UI Assets"
          )
        ),
        l(
          E,
          a(w, {
            type: "brand",
            class: "w-full",
            get children() {
              return [Q(), a($, { name: "download", size: 20 })];
            },
          })
        ),
        G(
          (e) => {
            var _ = i.banner_d1,
              u = i.banner_d2,
              x = i.banner_d3,
              h = i.graphics_pack;
            return (
              _ !== e.e && t(c, "src", (e.e = _)),
              u !== e.t && t(m, "src", (e.t = u)),
              x !== e.a && t(k, "src", (e.a = x)),
              h !== e.o && t(z, "src", (e.o = h)),
              e
            );
          },
          { e: void 0, t: void 0, a: void 0, o: void 0 }
        ),
        r
      );
    })()
  );
}
export { j as default };
