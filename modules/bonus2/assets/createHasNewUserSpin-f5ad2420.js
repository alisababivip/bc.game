import { i, e as t, W as h } from "./manifest-cc1f4445.js";
import { j as b, b as v, r as U } from "./solid-js-38561dfe.js";
import { h as S } from "./http-7cc13238.js";
import { b as A } from "./index-6d249af1.js";
function P(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
var w = ((e) => (
    (e[(e.rollAvailable = 0)] = "rollAvailable"),
    (e[(e.rollPending = 1)] = "rollPending"),
    (e[(e.rollUnavailable = 2)] = "rollUnavailable"),
    e
  ))(w || {}),
  a = ((e) => (
    (e[(e.Claimed = 1)] = "Claimed"),
    (e[(e.UnClaimed = 0)] = "UnClaimed"),
    (e[(e.NoReward = -1)] = "NoReward"),
    e
  ))(a || {});
const s = "before-user-login-type",
  l = "user-new-spin-finished",
  I = () => {
    localStorage.setItem(l, "true");
  },
  F = () => localStorage.getItem(l),
  [H] = b(() => S.get("/account/device/isRegistered")),
  C = () => {
    const [e] = A.checkUserClaimedFreeMoney({ enable: () => i.login }),
      n = t.initSearchParams.get("spin"),
      [c, o] = v(!1);
    return (
      U(() => {
        if (e.loading) return;
        function g() {
          return e() === a.UnClaimed;
        }
        function d() {
          const r = localStorage.getItem(s);
          if (r) return r;
          const { isNgHost: f, isIdHost: m } = h.getHostType(t.host);
          return m || f ? "B" : Math.random() > 0.5 ? "A" : "B";
        }
        function u() {
          const r = n ? "A" : d();
          return localStorage.setItem(s, r), r === "A";
        }
        function p() {
          if (i.login) {
            o(g());
            return;
          }
          (n || !H()) && o(u());
        }
        p();
      }),
      { hasSpin: c, disabledAutoSpin: I, isAutoSpinDisabled: F }
    );
  };
export { w as R, C as c, P as l };
