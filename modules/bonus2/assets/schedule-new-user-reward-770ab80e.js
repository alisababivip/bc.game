import { d as m } from "./solid-js-38561dfe.js";
import { s as e, p as s } from "./index-c3579afb.js";
import { c as a } from "./createHasNewUserSpin-f5ad2420.js";
import { e as o, aa as n } from "./manifest-cc1f4445.js";
import "./web-13cf6287.js";
import "./router-3828f409.js";
import "./currency-format-e71c6b76.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./index-1dc0470f.js";
import "./table-e9d87985.js";
import "./i18n-023baa0d.js";
import "./index-96ed660e.js";
import "./index-66557316.js";
import "./http-7cc13238.js";
import "./baseService-e38bce40.js";
import "./_baseFor-3fee30d6.js";
import "./_MapCache-1fb5cc44.js";
import "./sounds-a90e2198.js";
import "./index-bd250c21.js";
import "./index-e10d67ae.js";
import "./vip-c0abd707.js";
import "./toast-unhandle-error-afca6f15.js";
import "./index-6d249af1.js";
import "./animate-number-d108436c.js";
import "./utils-55681fa2.js";
import "./center-loading-04d2fcbc.js";
import "./_arrayMap-2bcec0e7.js";
const q = () => {
  const r = o.initSearchParams.get("bcn"),
    t = o.initSearchParams.get("bcn_bonus"),
    { hasSpin: i, isAutoSpinDisabled: p } = a();
  m(() => {
    r && t
      ? e(Number(t), r)
      : i() &&
        !p() &&
        setTimeout(() => {
          n.add(() => {
            s();
          });
        }, 1e3);
  });
};
export { q as default, q as scheduleNewUserReward };
