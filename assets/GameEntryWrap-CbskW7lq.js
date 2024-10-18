import {
  i as a,
  c as r,
  V as l,
  l as n,
  f as s,
  m,
  e as c,
} from "./index-Cp-3lvCI.js";
import { S as i } from "./index-CPRFYrHB.js";
var u = s("<div>");
const d = (e) =>
  (() => {
    var t = u();
    return (
      a(
        t,
        r(i, {
          get title() {
            return e.title;
          },
          get href() {
            return e.link;
          },
          showController: !0,
        }),
        null
      ),
      a(
        t,
        r(l, {
          get data() {
            return e.data;
          },
          get replace() {
            return e.replace;
          },
        }),
        null
      ),
      n(() => m(t, c("mb-4", e.class))),
      t
    );
  })();
export { d as default };
