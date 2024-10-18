import "./manifest-cc1f4445.js";
import { h as t } from "./http-7cc13238.js";
import { m as a } from "./memoize-4ea0c857.js";
function s() {
  return t.get("/agent/invitation/code/custom/");
}
function r() {
  return t.get("/agent/affiliate/dashboard/");
}
function n() {
  return t.get("/agent/affiliate/history/");
}
a(() => t.get("/agent/reward/config/"));
const m = () => t.get("/agent/commission/list/"),
  d = {
    availableCommissionUsd: "0",
    availableRewardUsd: "0",
    commissionUsd: "0",
    friendNumber: 0,
    ratio: "0",
    maxRatio: "0",
    remainingRewardUsd: "0",
    rewardUsd: "0",
    todayCommissionUsd: "0",
    todayWagerUsd: "0",
  };
export { r as a, m as b, n as c, s as g, d as i };
