import { h as s } from "./http-7cc13238.js";
import { B as t } from "./baseService-e38bce40.js";
const r = {
  getTasks: () => s.post("/task/tasks/"),
  getPreviousTasks: () => s.post("/task/previous/all/"),
  claimReward: (a) => s.post("/task/take-reward/", { rewardId: a }),
};
class i extends t {
  constructor(e) {
    super(), (this.api = e), (this.api = e);
  }
  tasksResource() {
    return this.createSharedResource(() => ({
      queryKey: [this.tasksResource.name],
      queryFn: this.api.getTasks,
      initialData: {
        rewardsAmount: 0,
        rewardCurrency: "USDFIAT",
        newbieTaskExpireTime: 0,
        dayOfWeek: "",
        taskDate: "",
        taskWeek: "",
        lastTaskWeek: "",
        dailyTaskExpireTimeInMs: 0,
        weekTaskExpireTimeInMs: 0,
        rewards: [],
        taskDates: [],
        index: 0,
        unClaimedRewardMap: {},
        dailyTasks: [],
        weeklyTasks: [],
      },
    }));
  }
  previousTasksResource() {
    return this.createSharedResource(() => ({
      queryKey: [this.previousTasksResource.name],
      queryFn: this.api.getPreviousTasks,
      initialData: { startTime: 0, endTime: 0, list: {}, weeklyList: {} },
    }));
  }
  get mutations() {
    return { claimReward: (e) => this.api.claimReward(e) };
  }
}
const n = new i(r);
export { n as t };
