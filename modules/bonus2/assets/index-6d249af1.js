var u = Object.defineProperty,
  c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable;
var i = (s, e, t) =>
    e in s
      ? u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[e] = t),
  n = (s, e) => {
    for (var t in e || (e = {})) d.call(e, t) && i(s, t, e[t]);
    if (o) for (var t of o(e)) p.call(e, t) && i(s, t, e[t]);
    return s;
  },
  a = (s, e) => c(s, l(e));
import { h as r } from "./http-7cc13238.js";
import { B as m } from "./baseService-e38bce40.js";
import { i as h } from "./manifest-cc1f4445.js";
const B = {
  getDashboardData: () => r.post("/activity/bonus-dashboard/get/?channel=2"),
  getDashboardStatistics: () => r.post("/activity/bonus-dashboard/statistics/"),
  getSpecialBonus: () => r.post("/new-reward/special/uncollected/"),
  receiveReward: (s) => r.post(`/activity/reward/receive/${s}/`),
  checkUserClaimedFreeMoney: () =>
    r.get("/activity/reward/hasUserClaimedFreeMoney"),
};
class y extends m {
  constructor(e) {
    super(), (this.api = e);
  }
  bonusDashboardResource() {
    return this.createSharedResource(
      () => ({
        queryKey: [this.bonusDashboardResource.name, h.userId],
        queryFn: () =>
          Promise.all([
            this.api.getDashboardData(),
            this.api.getDashboardStatistics(),
            this.api.getSpecialBonus(),
          ]),
        initialData: [
          {
            unclaimedCount: 0,
            totalBonusReceived: { first: 0, second: 0 },
            bonusUnlock: {
              first: {
                bonusAmount: "0",
                bonusThreshold: "0",
                currencyName: "USDFIAT",
                releaseAmount: "0",
                totalAmount: "0",
              },
              second: 0,
            },
            quests: {
              first: {
                rewardCurrency: "",
                rewardsAmount: 0,
                newbieTaskExpireTime: 0,
                rewards: [],
                dailyTasks: [],
                weeklyTasks: [],
              },
              second: 0,
            },
            spin: {
              first: {
                leftTimes: 0,
                level: 0,
                fiat: !1,
                levelUpdated: !1,
                dailySpinTimes: 0,
                dailyWager: 0,
                levelWager: 200,
                vipSpinTimes: 0,
              },
              second: 0,
            },
            depositBonus: {
              first: {
                bonusLogs: [],
                expiredTime: 0,
                maxBonusRatio: [3, 1.8, 2.4, 3, 3.6],
                cashbackBonus: [],
                freeSpins: null,
                newbieTaskBonus: null,
                lotteryBonus: [],
                currencyName: "",
              },
              second: 0,
            },
            nextSpinTime: Date.now(),
            recharge: {
              first: {
                endTime: 0,
                intervalTime: 60 * 6e4,
                lastBetUsd: "0",
                lastReceiveTime: 0,
                nextBetUsd: "0",
                nextReceiveTime: 0,
                receiveTimeMS: 0,
                receiveUsd: "0",
                rewards: [],
                sendBonus: !1,
                startTime: 0,
                status: 0,
                vipLevel: 0,
                viphostUserId: 0,
                tire: { currentTire: null, tires: [] },
              },
              second: 0,
            },
            statistics: {
              first: {
                totalClaimed: 0,
                totalGeneralBonus: 0,
                totalSpecialBonus: 0,
                totalVipBonus: 0,
              },
              second: 0,
            },
            statisticsDetail: {
              depositBonus: 0,
              freeSpinBonus: 0,
              levelUpBonus: 0,
              luckySpinBonus: 0,
              monthlyBonus: 0,
              questsBonus: 0,
              rechargeBonus: 0,
              rollCompetitionBonus: 0,
              sportsWeeklyBonus: 0,
              weeklyBonus: 0,
            },
            rollCompetition: {
              first: { currentTime: 0, rollTimes: 0 },
              second: 0,
            },
            weeklyBonus: {
              first: {
                rewardResult: {
                  title: "",
                  content: "",
                  rewards: [],
                  resultType: "",
                  rewardId: 0,
                  status: "",
                },
                currentWager: 0,
                expireTimeEpochSecond: 0,
                startTimeEpochSecond: 0,
                levelLimit: 22,
                targetWager: 0,
              },
              second: 0,
            },
            monthlyBonus: {
              first: {
                rewardResult: {
                  title: "",
                  content: "",
                  rewards: [],
                  resultType: "",
                  rewardId: 0,
                  status: "",
                },
                currentWager: 0,
                expireTimeEpochSecond: 0,
                startTimeEpochSecond: 0,
                levelLimit: 22,
                targetWager: 0,
              },
              second: 0,
            },
            sportsWeeklyBonus: {
              first: {
                rewardResult: {
                  title: "",
                  content: "",
                  rewards: [],
                  resultType: "",
                  rewardId: 0,
                  status: "",
                },
                currentWager: "0",
                expireTimeEpochSecond: 0,
                levelLimit: 22,
                startTimeEpochSecond: 0,
                targetWager: "0",
              },
              second: 0,
            },
            freeMoneyBonus: null,
            lotteryWinningsBonus: { first: [], second: 0 },
            specialBonus: { first: [], second: 0 },
          },
          {
            depositBonus: 0,
            freeSpinBonus: 0,
            levelUpBonus: 0,
            luckySpinBonus: 0,
            monthlyBonus: 0,
            questsBonus: 0,
            rechargeBonus: 0,
            rollCompetitionBonus: 0,
            sportsWeeklyBonus: 0,
            weeklyBonus: 0,
          },
          [],
        ],
      }),
      { persisted: !0 }
    );
  }
  checkUserClaimedFreeMoney(e) {
    return this.createSharedResource(
      () => ({
        queryKey: [this.checkUserClaimedFreeMoney.name],
        queryFn: this.api.checkUserClaimedFreeMoney,
      }),
      a(n({}, e), { persisted: !1 })
    );
  }
  get mutations() {
    return { receiveReward: this.api.receiveReward };
  }
}
const S = new y(B);
export { S as b };
