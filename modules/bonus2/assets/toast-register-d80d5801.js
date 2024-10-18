var N = (l, o, e) =>
  new Promise((s, i) => {
    var p = (c) => {
        try {
          u(e.next(c));
        } catch (_) {
          i(_);
        }
      },
      m = (c) => {
        try {
          u(e.throw(c));
        } catch (_) {
          i(_);
        }
      },
      u = (c) => (c.done ? s(c.value) : Promise.resolve(c.value).then(p, m));
    u((e = e.apply(l, o)).next());
  });
import { c as $ } from "./web-13cf6287.js";
import {
  a8 as v,
  u as C,
  a9 as t,
  aa as f,
  p as A,
  m as h,
  t as a,
  a as r,
  b as d,
  ab as S,
  D as y,
  i as g,
} from "./manifest-cc1f4445.js";
import { t as n } from "./i18n-023baa0d.js";
import { B as R, R as I } from "./index-07a16cfd.js";
import { x as O, w as T, s as w } from "./solid-js-38561dfe.js";
import { b as k } from "./index-6d249af1.js";
import { r as b } from "./index-b54039ae.js";
import "./animate-number-d108436c.js";
import "./currency-format-e71c6b76.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./index-96ed660e.js";
import "./http-7cc13238.js";
import "./baseService-e38bce40.js";
import "./_baseFor-3fee30d6.js";
import "./_MapCache-1fb5cc44.js";
const G = () => {
  const l = v(),
    o = O(T(), C);
  t("regist-invited-present-success", (e) => {
    const s = e.presentAmounts;
    if (s) {
      const [{ name: i, amount: p, locked: m }] = Object.keys(s).map((u) => ({
        name: u,
        amount: s[u],
        locked: !1,
      }));
      f.add(
        () =>
          new Promise((u) =>
            N(void 0, null, function* () {
              yield A.push(() =>
                $(R, {
                  get rewardType() {
                    return I.Money;
                  },
                  amount: p,
                  welcome: !0,
                  currency: i,
                  locked: m,
                  get kycLevel() {
                    return e.kycLevel || "";
                  },
                  get kycLevelName() {
                    return e.kycLevelName || "";
                  },
                  rewardOpened: !0,
                })
              ),
                u("");
            })
          )
      );
    }
  }),
    t("recharge-bonus-notice", (e) => {
      w(() => {
        h[1].refetch(), b.refetchResource(b.rakebackBonusHistoryResource.name);
      }),
        a(
          n(
            "Your Deposit Bonus of __amount__ __currencyName__ has been credited to your __currencyNameTwo__ Unlock.",
            {
              amount: e.amount,
              currencyName: r.getAlias(e.currencyName),
              currencyNameTwo: r.getAlias(e.currencyName),
            }
          ),
          {
            onClick: () => {
              o("/bonus/dashboard");
            },
          }
        );
    }),
    t("user-reward", (e) => {
      w(() => {
        k.refetchResource(k.bonusDashboardResource.name);
      });
    }),
    t("user-present-success", (e) => {
      switch (e.presentType) {
        case "tip":
          a(
            n("Wow! You received __amount__ tip from __userName__", {
              amount: `${e.amount} ${r.getAlias(e.currencyName)}`,
              userName: e.userName,
            }),
            { duration: 5 }
          );
          break;
        case "rain":
          a(
            n("Wow! You received __amount__ rain from __userName__", {
              amount: `${e.amount} ${r.getAlias(e.currencyName)}`,
              userName: e.userName,
            }),
            { duration: 5 }
          );
          break;
        default:
          d.emit("get-spin-rain-or-tip"),
            a(
              n("Wow you got __amount__ spin from Coco", { amount: e.amount }),
              { duration: 0, onClick: () => o("/spin") }
            );
          break;
      }
    }),
    t("regist-invited-present-claimed", (e) => {
      const s = e.presentAmounts,
        [{ name: i, amount: p }] = Object.keys(s).map((m) => ({
          name: m,
          amount: s[m],
        }));
      a(`${p} ${i} ${n("has been sent to your balance")}`);
    }),
    t("recharge-success", (e) => {
      e.status === 1
        ? a(n("Deposit is in progress"), { duration: 5 })
        : (d.emit("sensorsTrack", { event: "deposit_recieved" }),
          w(() => {
            h[1].refetch(), S(e.currencyName, "display", !0);
          }),
          e.depositCount == 1
            ? d.emit("track_ftd_success", {
                sales: r
                  .amount2usd(new y(e.amount || 0), e.currencyName)
                  .toString(),
                orderid: String(e.id),
                userId: String(g.userId),
              })
            : e.depositCount == 2 &&
              d.emit("track_reccuring_deposit", {
                sales: r
                  .amount2usd(new y(e.amount || 0), e.currencyName)
                  .toString(),
                orderid: String(e.id),
                userId: String(g.userId),
              }),
          d.emit("track_deposit_success", {
            sales: r
              .amount2usd(new y(e.amount || 0), e.currencyName)
              .toString(),
            orderid: String(e.id),
            userId: String(g.userId),
          }),
          a(
            `${n("Congrats! Your deposit has been completed!")} ${
              e.amount
            } ${r.getAlias(e.currencyName)}`,
            {
              duration: 5,
              onClick: () => o(`/wallet/deposit-detail?orderId=${e.id}`),
            }
          ),
          d.emit("da_track", "deposit_sended"));
    }),
    t("withdraw-progress", () => {
      a(n("Withdrawal is in progress."), { duration: 5 });
    }),
    t("withdraw-success", (e) => {
      a.success(
        n("You have successfully withdrawn __amount__.", {
          amount: `${e.amount} ${r.getAlias(e.currencyName)}`,
        }),
        { duration: 5 }
      );
    }),
    t("withdraw-fail", (e) => {
      a.error(
        n("Withdrawal failed. __amount__ has been returned to your balance.", {
          amount: `${e.amount} ${r.getAlias(e.currencyName)}`,
        }),
        {
          duration: 0,
          onClick: () =>
            o(`/wallet/transaction?type=withdraw&assets=${e.currencyName}`),
        }
      );
    }),
    t("change-amount-success", (e) => {
      a(
        `You found ${e.amount} ${r.getAlias(
          e.currencyName
        )} under of Coco's Red throne`,
        {
          duration: 3,
          onClick: () =>
            o(`/wallet/transaction?type=bill&assets=${e.currencyName}`),
        }
      );
    }),
    t("use-code-success", (e) => {
      a(
        n("You have got __amount__ from __ENV_COCO__'s cave.", {
          amount: `${e.amount} ${r.getAlias(e.currencyName)}`,
        }),
        {
          duration: 3,
          onClick: () =>
            o(`/wallet/transaction?type=bill&assets=${e.currencyName}`),
        }
      );
    }),
    t("regist-present-success", () => {
      f.add(() => l(() => o("/spin")));
    });
};
export { G as default, G as toastRegister };
