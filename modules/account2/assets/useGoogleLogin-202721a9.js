var c = (g, r, s) =>
  new Promise((i, o) => {
    var e = (t) => {
        try {
          a(s.next(t));
        } catch (p) {
          o(p);
        }
      },
      n = (t) => {
        try {
          a(s.throw(t));
        } catch (p) {
          o(p);
        }
      },
      a = (t) => (t.done ? i(t.value) : Promise.resolve(t.value).then(e, n));
    a((s = s.apply(g, r)).next());
  });
import { c as m } from "./web-170e0195.js";
import { r as l, o as u } from "./solid-js-bce2a176.js";
import { g as f, h as d, U as T } from "./UnableLogin-2330afdf.js";
import {
  c as h,
  d as L,
  f as U,
  t as y,
  g as S,
  p as k,
} from "./manifest-2ae9efd4.js";
import "./toInteger-d3049371.js";
import "./toNumber-2a781ab2.js";
import "./isObject-010a5422.js";
import "./isObjectLike-e68f0fe0.js";
import "./i18n-2703fd3b.js";
const F = function (r) {
  const s = (o) =>
      c(this, null, function* () {
        const e = yield S().get(`/account/self-exclusion/status/${o}/`),
          n = e.startTime + e.period * 30 * 864e5;
        k.push(() =>
          m(T, {
            get startTime() {
              return e.startTime;
            },
            endTime: n,
          })
        );
      }),
    i = (o) =>
      c(this, null, function* () {
        try {
          L.emit("sensorsTrack", {
            event: "third_register_click",
            account_type: "google",
          }),
            yield d({
              fullName: o.fullName,
              idToken: o.idToken,
              openUserId: o.openUserId,
              userType: "google",
              picture: o.picture,
              invitationCode: "",
            });
        } catch (e) {
          if (e.code === U.ErrorCode.SELF_EXCLUSION) {
            const n = e.message.split("|").pop();
            s(n);
          } else y(e);
        }
      });
  l(r.owner, () => {
    u(() => {
      h.login || f(i, !1);
    });
  });
};
export { F as default };
