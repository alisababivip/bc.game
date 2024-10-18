import {
  c as e,
  t as a,
  aR as r,
  aW as o,
  bc as i,
  a5 as s,
  $ as n,
  aS as c,
} from "./index-Cp-3lvCI.js";
import m from "./GameEntryWrap-CbskW7lq.js";
import "./index-CPRFYrHB.js";
function l() {
  const [t] = n(() =>
    c({
      sectionId: "casino_picks_for_you",
      pageSize: 20,
      page: 1,
      sortBy: "",
      providerName: "",
    })
  );
  return e(m, {
    class: "mt-20",
    get title() {
      return a("Recommended Games");
    },
    link: "/gamelist/casino_picks_for_you",
    get data() {
      return t();
    },
  });
}
function p() {
  return e(s, {
    get title() {
      return a("Favorites");
    },
    get children() {
      return [
        e(r, {
          get title() {
            return a("Favorites");
          },
        }),
        e(o, { load: (t) => i(t) }),
        e(l, {}),
      ];
    },
  });
}
export { p as default };
