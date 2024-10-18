import { h as t } from "./http-7cc13238.js";
import { B as o } from "./baseService-e38bce40.js";
import { R as d } from "./index-07a16cfd.js";
const s = {
  getCode(r) {
    return t.get(`/activity/redeemCode/findCode/${r}/`);
  },
  redeemCode(r) {
    return t.post("/activity/redeemCode/useCode/", { redeemCode: r });
  },
};
class a extends o {
  constructor(e) {
    super(), (this.api = e), (this.api = e);
  }
  createCodeResource(e) {
    return this.createSharedResource(() => ({
      queryKey: [this.createCodeResource.name, e],
      queryFn: () => this.api.getCode(e),
      initialData: {
        currencyName: "USDFIAT",
        locked: !1,
        rewardType: d.Money,
        stringAmount: "0",
        depositBonusPercentage: 0,
        isWelcome: !1,
        thumbnail: "",
        roundsSet: 0,
        gameUnique: "",
        fsId: "",
        fsRoundUsed: 0,
        fsRoundTotal: 0,
      },
    }));
  }
  get mutations() {
    return { redeemCode: (e) => this.api.redeemCode(e) };
  }
}
const u = new a(s);
export { u as r };
