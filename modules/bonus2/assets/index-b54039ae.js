import { h as e } from "./http-7cc13238.js";
import { B as a } from "./baseService-e38bce40.js";
const i = {
  getRechargeList() {
    return e.get("/game/support/bonus/vr/list/");
  },
  getRechargeTier() {
    return e.get("/game/support/bonus/vr/tire/");
  },
  claimRakeback() {
    return e.get("/activity/recharge-bonus/claim/");
  },
  rakebackBonusHistory(r) {
    return e.post("/activity/recharge-bonus/records/", r);
  },
  activateRecharge() {
    return e.get("/game/support/bonus/vr/pass/");
  },
  claimRecharge(r) {
    return e.post("/game/support/bonus/vr/receive/", r);
  },
  changeInterval(r) {
    return e.get(`/game/support/bonus/vr/interval/${r}/`);
  },
};
class s extends a {
  constructor(t) {
    super(), (this.api = t);
  }
  rechargeListResource() {
    return this.createSharedResource(() => ({
      queryKey: [this.rechargeListResource.name],
      queryFn: this.api.getRechargeList,
      initialData: {
        lastBetUsd: "0",
        nextBetUsd: "0",
        receiveUsd: "0",
        vipLevel: 142,
        startTime: 0,
        endTime: 0,
        intervalTime: 6e5,
        lastReceiveTime: 0,
        nextReceiveTime: 0,
        receiveTimeMS: 0,
        status: 0,
        rewards: [],
        viphostUserId: 0,
        sendBonus: !1,
      },
    }));
  }
  rechargeTierResource() {
    return this.createSharedResource(() => ({
      queryKey: [this.rechargeTierResource.name],
      queryFn: this.api.getRechargeTier,
      initialData: { currentTire: null, tires: [] },
    }));
  }
  rakebackBonusHistoryResource(t) {
    return this.createSharedResource(() => ({
      queryKey: [this.rakebackBonusHistoryResource.name, t()],
      queryFn: () => this.api.rakebackBonusHistory(t()),
      initialData: { page: 0, pageSize: 0, total: 0, totalPage: 0, list: [] },
    }));
  }
  get mutations() {
    return {
      claimRakeback: this.api.claimRakeback,
      activateRecharge: this.api.activateRecharge,
      claimRecharge: this.api.claimRecharge,
      changeInterval: this.api.changeInterval,
    };
  }
}
const u = new s(i);
export { u as r };
