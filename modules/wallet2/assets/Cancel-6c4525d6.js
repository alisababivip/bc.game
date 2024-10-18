var f = (t, u, s) =>
  new Promise((i, o) => {
    var c = (n) => {
        try {
          e(s.next(n));
        } catch (a) {
          o(a);
        }
      },
      p = (n) => {
        try {
          e(s.throw(n));
        } catch (a) {
          o(a);
        }
      },
      e = (n) => (n.done ? i(n.value) : Promise.resolve(n.value).then(c, p));
    e((s = s.apply(t, u)).next());
  });
import {
  j as y,
  s as v,
  P as x,
  B as w,
  p as k,
  D as B,
  w as A,
} from "./manifest-e0f0ba59.js";
import { h as D, u as h } from "./solid-js-2e15682c.js";
import { t as l, T as $ } from "./i18n-9b1e4bd8.js";
import { c as g, i as _, t as m } from "./web-da7da7e5.js";
var C;
((t) => {
  ((e) => {
    (e[(e.AllStatus = 0)] = "AllStatus"),
      (e[(e.NotStarted = 1)] = "NotStarted"),
      (e[(e.Ongoning = 2)] = "Ongoning"),
      (e[(e.Done = 3)] = "Done"),
      (e[(e.Cancelled = 4)] = "Cancelled"),
      (e[(e.Expired = 5)] = "Expired");
  })(t.Status || (t.Status = {})),
    ((e) => {
      (e[(e.NewbieTaskRewards = 2)] = "NewbieTaskRewards"),
        (e[(e.DepositBonus = 3)] = "DepositBonus"),
        (e[(e.FreeSpinWinnings = 4)] = "FreeSpinWinnings"),
        (e[(e.LuckySpinBonus = 5)] = "LuckySpinBonus"),
        (e[(e.NewbieLuckSpinBonus = 6)] = "NewbieLuckSpinBonus"),
        (e[(e.EventBonus = 7)] = "EventBonus");
    })(t.BonusType || (t.BonusType = {})),
    ((e) => {
      (e[(e.AllType = 0)] = "AllType"),
        (e[(e.Deposit = 1)] = "Deposit"),
        (e[(e.Bonus = 2)] = "Bonus");
    })(t.Type || (t.Type = {}));
  function u(e) {
    let n = "";
    switch (e) {
      case 4:
        n = "text-error";
        break;
      case 3:
        n = "text-success";
        break;
      case 2:
        n = "text-warning";
        break;
      default:
        n = "text-secondary";
        break;
    }
    return n;
  }
  function s(e, n) {
    const a = [
      { label: () => l("All status"), value: 0 },
      { label: () => l("Not Started"), value: 1 },
      { label: () => l("Ongoing"), value: 2 },
      { label: () => l("Done"), value: 3 },
      { label: () => l("Canceled"), value: 4 },
      { label: () => l("Expired"), value: 5 },
    ];
    return {
      target: () => {
        var r;
        return (r = a.find((b) => b.value === e)) != null ? r : a[0];
      },
      opt: a,
      className: n ? u(e) : "",
    };
  }
  t.getStatus = s;
  function i(e) {
    const n = [
      { label: () => l("All Type"), value: 0 },
      { label: () => l("Deposit"), value: 1 },
      { label: () => l("Bonus"), value: 2 },
    ];
    return {
      target: () => {
        var d;
        return (d = n.find((r) => r.value === e)) != null ? d : n[0];
      },
      opt: n,
    };
  }
  t.getType = i;
  function o(e) {
    const n = c(),
      a = [
        { label: () => l("All Type"), value: 0 },
        { label: () => l("Deposit"), value: 1 },
        { label: () => l("Bonus"), value: 2 },
      ].concat(n);
    return {
      target: () => {
        var r;
        return (r = a.find((b) => b.value === e)) != null ? r : a[0];
      },
      opt: a,
    };
  }
  (t.getAllType = o),
    (t.BonusControllerContext = D([{ value: 0, label: () => "" }]));
  function c() {
    return h(t.BonusControllerContext);
  }
  t.useBonusController = c;
  function p(e = !1) {
    return f(this, null, function* () {
      return y().post("/balance-controller/wager/task/types/", { isBonus: e });
    });
  }
  t.getTypes = p;
})(C || (C = {}));
var N = m("<b>__currency_and_amount__"),
  S = m("<b>__currency_and_amount_2__"),
  E = m('<div class="px-3 pb-0 pt-5">'),
  O = m('<div class="flex justify-between p-5">');
function R(t) {
  function u() {
    return y()
      .post("/balance-controller/wager/task/cancel/", { taskId: t.taskId })
      .then((e) => {
        k.pop(), t.updateDetails(e.status, e.updateTime);
      });
  }
  const s = v.getAlias(t.currency),
    i = () => A[t.currency].amount,
    o = () => new B(i()).sub(t.lockedAmount).toNumber(),
    c = `${t.lockedAmount} ${s}`,
    p = () => `${o() < 0 ? 0 : o()} ${s}`;
  return g(x, {
    get title() {
      return l("Cancel This Bonus");
    },
    get children() {
      return [
        (() => {
          var e = E();
          return (
            _(
              e,
              g($, {
                currency_and_amount: c,
                get currency_and_amount_2() {
                  return p();
                },
                i18nKey: "wallet.trans.desc44",
                get children() {
                  return [
                    N(),
                    " bonus money will be lost and you will not be able to claim this bonus again. Your balance will be",
                    S(),
                    " after removing this bonus.",
                  ];
                },
              })
            ),
            e
          );
        })(),
        (() => {
          var e = O();
          return (
            _(
              e,
              g(w, {
                type: "second",
                class: "mr-3 w-full",
                onClick: u,
                get children() {
                  return l("Cancel Bonus");
                },
              }),
              null
            ),
            _(
              e,
              g(w, {
                type: "brand",
                class: "w-full",
                onClick: () => k.pop(),
                get children() {
                  return l("Keep Bonus");
                },
              }),
              null
            ),
            e
          );
        })(),
      ];
    },
  });
}
export { R as C, C as T };
