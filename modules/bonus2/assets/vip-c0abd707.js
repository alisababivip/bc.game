import { N as n, i as o } from "./manifest-cc1f4445.js";
var c = ((e) => (
  (e[(e.SpinNotificationBlocked = 0)] = "SpinNotificationBlocked"),
  (e[(e.QuestBonusNotificationBlocked = 1)] = "QuestBonusNotificationBlocked"),
  (e[(e.Recharge = 2)] = "Recharge"),
  (e[(e.WeeklyBonus = 3)] = "WeeklyBonus"),
  (e[(e.MonthlyBonus = 4)] = "MonthlyBonus"),
  (e[(e.SportWeeklyBonus = 5)] = "SportWeeklyBonus"),
  e
))(c || {});
class i {
  constructor() {
    this.getLevelDesc = (l) => n.getLevelInfo(l);
  }
  level(l) {
    return n.getUserLevelInfo(l);
  }
  featureGating() {
    return [
      { feature: 0, unlocked: o.vipLevel >= 50, unlockedVIPLevel: 50 },
      { feature: 1, unlocked: o.vipLevel >= 50, unlockedVIPLevel: 50 },
      { feature: 2, unlocked: o.vipLevel >= 22, unlockedVIPLevel: 22 },
      { feature: 3, unlocked: o.vipLevel >= 22, unlockedVIPLevel: 22 },
      { feature: 4, unlocked: o.vipLevel >= 22, unlockedVIPLevel: 22 },
      { feature: 5, unlocked: o.vipLevel >= 22, unlockedVIPLevel: 22 },
    ];
  }
  features(l) {
    return this.featureGating().find((t) => t.feature === l);
  }
}
const v = new i();
export { c as V, v };
