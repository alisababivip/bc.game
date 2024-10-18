import {
  i as r,
  c as e,
  b as x,
  t as p,
  e as Q,
  s as $,
  m as h,
} from "./web-13cf6287.js";
import { u as _, B as S, E as T, h as H, n as y } from "./manifest-cc1f4445.js";
import { e as f, S as I, F as C } from "./solid-js-38561dfe.js";
import { C as k } from "./currency-format-e71c6b76.js";
import { S as m } from "./skeleton-c8e80175.js";
import { t as c } from "./i18n-023baa0d.js";
import { q as D } from "./index-96ed660e.js";
import { t as q } from "./index-c20ef3e8.js";
import { C as M, a as d } from "./countdown-fd722a48.js";
import { Q as E, t as b } from "./task-helper-7d33a9de.js";
import { I as w } from "./index-e10d67ae.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./table-e9d87985.js";
import "./http-7cc13238.js";
import "./baseService-e38bce40.js";
import "./_baseFor-3fee30d6.js";
import "./_MapCache-1fb5cc44.js";
import "./index-48e08d89.js";
import "./index-6d249af1.js";
import "./sounds-a90e2198.js";
import "./toast-unhandle-error-afca6f15.js";
import "./memoize-4ea0c857.js";
import "./_createAggregator-ddc6558e.js";
import "./_baseIteratee-a353a961.js";
import "./_baseIsEqual-55697771.js";
import "./isSymbol-269a4c68.js";
import "./toString-968993ce.js";
import "./_arrayMap-2bcec0e7.js";
var A = p('<span class="text-sm font-extrabold text-primary">'),
  P = p(
    '<div class="flex flex-col gap-y-3"><div class="flex items-center justify-between"><span class="inline-flex gap-x-1 text-sm font-semibold text-secondary"></span></div><div class="flex flex-col gap-y-3">'
  );
const v = (t) => {
  const n = _(),
    l = () => {
      n("/quests/previous");
    };
  return (() => {
    var s = P(),
      u = s.firstChild,
      o = u.firstChild,
      g = u.nextSibling;
    return (
      r(o, () => c("Expires in"), null),
      r(
        o,
        e(f, {
          get children() {
            return e(M, {
              get expiresInMS() {
                return t.expiresInMS;
              },
            });
          },
        }),
        null
      ),
      r(
        u,
        e(S, {
          onClick: l,
          size: "s",
          class: "inline-flex gap-x-1 rounded-lg bg-layer5 text-secondary",
          get children() {
            return [
              e(w, { name: "recent", size: 16 }),
              (() => {
                var i = A();
                return r(i, () => c("Previous Quests")), i;
              })(),
              e(w, { name: "singleSmallArrow", size: 16, class: "rotate-180" }),
            ];
          },
        }),
        null
      ),
      r(
        g,
        e(f, {
          get fallback() {
            return [
              e(m, { class: "h-24 w-full rounded-xl" }),
              e(m, { class: "h-24 w-full rounded-xl" }),
              e(m, { class: "h-24 w-full rounded-xl" }),
            ];
          },
          get children() {
            return e(I, {
              get when() {
                return d(t.quests).length > 0;
              },
              get fallback() {
                return e(T, { type: "empty" });
              },
              get children() {
                return e(C, {
                  get each() {
                    return d(t.quests);
                  },
                  children: (i) =>
                    e(
                      E,
                      x(i, {
                        get kycStatus() {
                          return i.status;
                        },
                        get navigate() {
                          return i.path;
                        },
                        get rewardId() {
                          var a;
                          return (a = i.reward) == null ? void 0 : a.rewardId;
                        },
                      })
                    ),
                });
              },
            });
          },
        })
      ),
      s
    );
  })();
};
var W = p('<span class="flex items-center gap-x-2">'),
  z = p('<div class="flex flex-col gap-y-3 py-3">'),
  B = p(
    '<div class="relative flex h-32 flex-col justify-center gap-y-4 overflow-hidden rounded-xl px-4 py-3 bg-gradient-quest_hub"><img class="absolute right-0 top-0 w-52"><span class="absolute top-3 text-sm text-secondary"></span><div><span class="text-xs font-semibold text-primary"></span><div class="flex items-center gap-x-2 text-xl font-extrabold">'
  );
const F = () => {
    const [t] = q.tasksResource(),
      n = () => t().weekTaskExpireTimeInMs + Date.now(),
      l = () => t().dailyTaskExpireTimeInMs + Date.now(),
      s = () => {
        const a = t().weeklyTasks;
        return b.enrichTask(a, t().rewards, t().taskWeek);
      },
      u = () => {
        const a = t().dailyTasks;
        return b.enrichTask(a, t().rewards, t().taskDate);
      };
    return {
      getQuestHubHeaderProps: () => ({
        title: c("Accumulated rewards"),
        date: e(f, {
          get fallback() {
            return e(m, { class: "h-6 w-28" });
          },
          get children() {
            return [
              h(() => t().dayOfWeek),
              " ",
              h(() => b.formatTaskDate(t().taskDate)),
            ];
          },
        }),
        reward: e(f, {
          get fallback() {
            return e(m, { class: "h-6 w-28" });
          },
          get children() {
            return e(k, {
              get currencyName() {
                return t().rewardCurrency;
              },
              get children() {
                var a = W();
                return (
                  r(a, e(k.Icon, { size: 20 }), null),
                  r(
                    a,
                    e(k.Amount, {
                      get amount() {
                        return t().rewardsAmount;
                      },
                    }),
                    null
                  ),
                  a
                );
              },
            });
          },
        }),
      }),
      getDailyQuests: () => ({ quests: u, expiresInMS: l }),
      getWeeklyQuests: () => ({ quests: s, expiresInMS: n }),
    };
  },
  ke = () =>
    e(H, {
      get title() {
        return c("Quest Hub");
      },
      get children() {
        return e(j, {});
      },
    }),
  j = () => {
    const {
      getQuestHubHeaderProps: t,
      getDailyQuests: n,
      getWeeklyQuests: l,
    } = F();
    return (() => {
      var s = z();
      return (
        r(s, e(N, x(t)), null),
        r(
          s,
          e(y, {
            get children() {
              return [
                e(y.TabItem, {
                  class: "mt-0 bg-layer2",
                  get title() {
                    return c("Daily Quests");
                  },
                  get children() {
                    return e(v, x(n));
                  },
                }),
                e(y.TabItem, {
                  class: "mt-0 bg-layer2",
                  get title() {
                    return c("Weekly Quests");
                  },
                  get children() {
                    return e(v, x(l));
                  },
                }),
              ];
            },
          }),
          null
        ),
        s
      );
    })();
  },
  N = (t) =>
    (() => {
      var n = B(),
        l = n.firstChild,
        s = l.nextSibling,
        u = s.nextSibling,
        o = u.firstChild,
        g = o.nextSibling;
      return (
        r(s, () => d(t.date)),
        r(o, () => d(t.title)),
        r(g, () => d(t.reward)),
        Q(() => $(l, "src", D.questBanner)),
        n
      );
    })();
export { ke as QuestHubDialog, ke as default };
