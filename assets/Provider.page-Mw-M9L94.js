import {
  ag as n,
  aT as i,
  Q as c,
  c as a,
  aR as m,
  aW as d,
  aS as l,
  a5 as p,
} from "./index-Cp-3lvCI.js";
function g() {
  const [t] = n(),
    o = i(),
    r = c(() => o.provider || ""),
    e = () => decodeURIComponent(r());
  return a(p, {
    get title() {
      return e();
    },
    get children() {
      return [
        a(m, {
          get title() {
            return e();
          },
          link: "/providers",
        }),
        a(d, {
          get key() {
            return r();
          },
          load: (s) =>
            l({ ...t, page: s, sectionId: "provider_list", providerName: e() }),
        }),
      ];
    },
  });
}
export { g as default };
