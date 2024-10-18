import { h as e } from "./http-7cc13238.js";
import { B as s } from "./baseService-e38bce40.js";
const r = {
  getSpinFeeds: () =>
    e.post("/activity/lucky/spin/news/", {
      start: new Date().getTime() - 24 * 60 * 60 * 1e3,
    }),
  getSpinRewardSettings: () => e.get("/activity/lucky/spin/settings/"),
  getUserSpinConfig: () => e.get("/activity/lucky/spin/info/"),
  requestSpin: (t) => e.post("/activity/lucky/spin/lottery/", t),
  getSpinLog() {
    return e.get("/activity/lucky/spin/giftLog/list100/");
  },
};
class n extends s {
  constructor(i) {
    super(), (this.api = i);
  }
  spinFeedResource() {
    return this.createSharedResource(
      () => ({
        queryKey: [this.spinFeedResource.name],
        queryFn: this.api.getSpinFeeds,
        initialData: { totalBonus: 0, updates: [] },
      }),
      { persisted: !0 }
    );
  }
  spinRewardSettingsResource() {
    return this.createSharedResource(
      () => ({
        queryKey: [this.spinRewardSettingsResource.name],
        queryFn: this.api.getSpinRewardSettings,
        initialData: { version: 0, sections: [], fiat: !1 },
      }),
      { persisted: !0 }
    );
  }
  userSpinConfigResource() {
    return this.createSharedResource(() => ({
      queryKey: [this.userSpinConfigResource.name],
      queryFn: this.api.getUserSpinConfig,
    }));
  }
  spinLogResource() {
    return this.createSharedResource(() => ({
      queryKey: [this.spinLogResource.name],
      queryFn: this.api.getSpinLog,
      initialData: [],
    }));
  }
  get mutations() {
    return { requestSpin: this.api.requestSpin };
  }
}
const p = new n(r);
export { p as s };
