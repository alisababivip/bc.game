var fe = Object.defineProperty;
var J = Object.getOwnPropertySymbols;
var be = Object.prototype.hasOwnProperty,
  ge = Object.prototype.propertyIsEnumerable;
var Q = (d, r, a) =>
    r in d
      ? fe(d, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (d[r] = a),
  X = (d, r) => {
    for (var a in r || (r = {})) be.call(r, a) && Q(d, a, r[a]);
    if (J) for (var a of J(r)) ge.call(r, a) && Q(d, a, r[a]);
    return d;
  };
import {
  i as t,
  c as e,
  e as he,
  s as ve,
  t as n,
  d as xe,
  m as T,
} from "./web-13cf6287.js";
import { a as ne } from "./store-a43dfcbd.js";
import { a as we, b as $e } from "./servers-f129ff30.js";
import {
  S as $,
  F as _e,
  b as D,
  j as ye,
  d as Ce,
  e as Re,
  o as Ue,
} from "./solid-js-38561dfe.js";
import { u as De } from "./router-3828f409.js";
import { t as s, T as Y } from "./i18n-023baa0d.js";
import {
  E as ie,
  a as Se,
  D as c,
  l as Te,
  u as W,
  e as S,
  j as Ie,
  I,
  b as Ne,
  p as Z,
  B as N,
  n as k,
  P as Le,
} from "./manifest-cc1f4445.js";
import { e as F, D as Oe } from "./date-picker-ffe0924b.js";
import { T as Ae } from "./skeleton-c8e80175.js";
import { T as ke } from "./table-e9d87985.js";
import { T as Fe } from "./transition-mask-53f1e843.js";
import { h as je } from "./http-7cc13238.js";
import { b as ee } from "./utils-55681fa2.js";
import { I as te } from "./index-e10d67ae.js";
import "./memoize-4ea0c857.js";
import "./_MapCache-1fb5cc44.js";
import "./_baseGetTag-c2e287b9.js";
var Pe = n("<div class=mb-3>"),
  We = n('<div class="rounded-lg p-3">'),
  ze = n(
    '<div class="my-5 flex items-center justify-between"><div class="center gap-3"><img class="h-8 w-8"alt=icon><span class=w></span></div><div class="pc:gap-10 flex gap-14"><div class="flex flex-col items-center"><span class="font-extrabold text-brand">$</span><span class=text-secondary></span></div><div class="flex flex-col items-end"><span class=font-extrabold>$</span><span class=text-secondary>'
  );
const Ee = function (r) {
  return (() => {
    var a = We();
    return (
      t(
        a,
        e($, {
          get when() {
            return r.data.length;
          },
          get fallback() {
            return e(ie, {
              get children() {
                return s("No rewards yet invite friends to join you now!");
              },
            });
          },
          get children() {
            return [
              (() => {
                var i = Pe();
                return t(i, () => r.children), i;
              })(),
              e(_e, {
                get each() {
                  return r.data;
                },
                children: (i) =>
                  (() => {
                    var g = ze(),
                      h = g.firstChild,
                      x = h.firstChild,
                      R = x.nextSibling,
                      U = h.nextSibling,
                      _ = U.firstChild,
                      b = _.firstChild;
                    b.firstChild;
                    var l = b.nextSibling,
                      o = _.nextSibling,
                      m = o.firstChild;
                    m.firstChild;
                    var u = m.nextSibling;
                    return (
                      t(R, () => Se.getAlias(i.currencyName)),
                      t(
                        b,
                        () => new c(i.availableUsd).toFixed(2, c.ROUND_DOWN),
                        null
                      ),
                      t(l, () => s("Available")),
                      t(
                        m,
                        () => new c(i.commissionUsd).toFixed(2, c.ROUND_DOWN),
                        null
                      ),
                      t(u, () => s("Total Received")),
                      he(() => ve(x, "src", Te.coinIcon(i.currencyName))),
                      g
                    );
                  })(),
              }),
            ];
          },
        })
      ),
      a
    );
  })();
};
var j = n('<span class="font-semibold leading-6 text-secondary">'),
  Me = n('<span class="font-semibold leading-6">'),
  qe = n(
    '<div class="flex cursor-pointer items-center justify-end gap-2"><span class="font-semibold text-brand">$'
  ),
  Be = n(
    '<div class="flex flex-col gap-3 p-3"><div class="flex flex-col gap-3 sm:flex-row">'
  ),
  Ke = n("<div>");
const Ve = function (r) {
  const a = W(),
    [i, g] = ne({ beginDate: "", endDate: "", page: 1, pageSize: 10 }),
    [h, x] = D([F, F]),
    R = () => {
      const l = X({}, i);
      return (
        h()[0] === F && ((l.beginDate = ""), (l.endDate = "")),
        je.post("/agent/information/referral-rewards/list/", l)
      );
    },
    [U, { refetch: _ }] = ye(() => i.page, R);
  Ce(() => {
    g("beginDate", ee(h()[0])), g("endDate", ee(h()[1])), g("page", 1), _();
  });
  const b = () => [
    {
      title: s("Username"),
      dataIndex: "userName",
      render(l) {
        return (() => {
          var o = j();
          return t(o, l), o;
        })();
      },
    },
    {
      title: s("Registration Date"),
      dataIndex: "createDate",
      render(l) {
        return (() => {
          var o = j();
          return t(o, l), o;
        })();
      },
    },
    {
      title: s("VIP Level"),
      dataIndex: "userLevel",
      render(l) {
        return (() => {
          var o = Me();
          return t(o, l), o;
        })();
      },
    },
    {
      title: s("Code"),
      dataIndex: "aliasCode",
      render(l) {
        return (() => {
          var o = j();
          return t(o, l), o;
        })();
      },
    },
    {
      title: s("Earned"),
      dataIndex: "rewardUsd",
      render(l, o) {
        return (() => {
          var m = qe(),
            u = m.firstChild;
          return (
            u.firstChild,
            (m.$$click = () => a("/rewards-detail", { state: o })),
            t(u, l, null),
            t(
              m,
              e(I, { class: "w-4 rotate-180 text-secondary", name: "Arrow" }),
              null
            ),
            m
          );
        })();
      },
    },
  ];
  return (() => {
    var l = Be(),
      o = l.firstChild;
    return (
      t(l, () => r.children, o),
      t(
        o,
        e(Oe, {
          class: "!w-80",
          get value() {
            return h();
          },
          onChange: x,
          get label() {
            return s("Registration Date:");
          },
          clear: !0,
        })
      ),
      t(
        l,
        e(Re, {
          get fallback() {
            return e(Ae, {
              width: 5,
              height: 2.1,
              rows: 10,
              get columns() {
                return b();
              },
            });
          },
          get children() {
            return e($, {
              get when() {
                return U();
              },
              children: (m) =>
                (() => {
                  var u = Ke();
                  return (
                    t(
                      u,
                      e(Fe, {
                        get children() {
                          return e(ke, {
                            get data() {
                              return m().list;
                            },
                            get columns() {
                              return T(() => !!S.mobile)()
                                ? b().filter(
                                    (p) =>
                                      p.dataIndex === "userName" ||
                                      p.dataIndex === "userLevel" ||
                                      p.dataIndex === "rewardUsd"
                                  )
                                : b();
                            },
                            get empty() {
                              return e(ie, {
                                get children() {
                                  return s(
                                    "No rewards yet invite friends to join you now!"
                                  );
                                },
                              });
                            },
                          });
                        },
                      }),
                      null
                    ),
                    t(
                      u,
                      e($, {
                        get when() {
                          return m().total > 10;
                        },
                        get children() {
                          return e(Ie, {
                            class: "flex justify-end p-3",
                            get current() {
                              return i.page;
                            },
                            onChange: (p) => g("page", p),
                            get total() {
                              return m().total;
                            },
                            get pageSize() {
                              return i.pageSize;
                            },
                          });
                        },
                      }),
                      null
                    ),
                    u
                  );
                })(),
            });
          },
        }),
        null
      ),
      l
    );
  })();
};
xe(["click"]);
var He = n('<div class="absolute top-12 h-[1px] w-full bg-third">'),
  Ge = n(
    '<div class="bg-layer2 font-semibold"><section class="mb-4 flex flex-col gap-3 rounded-xl bg-layer4 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5"><div class="flex flex-col border-b border-third pb-3 sm:flex-1 sm:border-none sm:pb-0"><div class="flex items-center justify-between"><span class=text-secondary></span></div><span class="mb-3 text-2xl font-extrabold text-brand">$</span><div><span class="mr-1 text-nowrap"></span><span>$</span></div></div><div class="flex flex-col md:flex-1"><div class="flex items-center justify-between"><span class=text-secondary></span></div><span class="mb-3 text-2xl font-extrabold text-brand">$</span><div class="flex items-center gap-3"><div><span class="mr-1 text-nowrap text-secondary"></span><span class=sub-num>$</span></div><div><span class="mr-1 text-nowrap text-secondary"></span><span class=sub-num>$</span></div></div></div><div class="flex items-center gap-2 border-third sm:h-20 sm:border-l sm:pl-4 lg:pl-10"></div></section><section class="relative rounded-xl bg-layer4 pt-2">'
  ),
  Je = n('<h3 class="text-base font-extrabold">Available Commission Rewards'),
  ae = n(
    '<p class="font-semibold text-secondary">The rewards you can withdraw to your wallet.'
  ),
  re = n('<h3 class="text-base font-extrabold">Total received'),
  Qe = n(
    '<p class="font-semibold text-secondary">The rewards you have received up to now. It includes the rewards already withdrawn and the available commission rewards.'
  ),
  Xe = n("<div class=content>"),
  Ye = n('<h3 class="text-base font-extrabold">Available Referral Rewards'),
  Ze = n(
    '<p class="font-semibold text-secondary">All unlocked rewards received so far, including withdrawn and available for withdrawal.'
  ),
  et = n('<h3 class="text-base font-extrabold">Locked Rewards'),
  tt = n(
    '<p class="font-semibold text-secondary">The rewards that you will receive in the future when your friends’ VIP level increases.'
  ),
  se = n("<span class=font-extrabold>"),
  at = n(
    '<div class="right-2 top-2 flex items-center justify-between sm:absolute sm:gap-3">'
  );
function oe(d) {
  const r = d.split("/");
  return r ? r[r.length - 1] : "";
}
const $t = function () {
  const r = W(),
    [a, i] = ne({
      ratio: "0",
      maxRatio: "0",
      friendNumber: 0,
      commissionUsd: "0",
      availableCommissionUsd: "0",
      rewardUsd: "0",
      availableRewardUsd: "0",
      remainingRewardUsd: "0",
      todayWagerUsd: "0",
      todayCommissionUsd: "0",
    }),
    [g, h] = D([]),
    [x, R] = D([]),
    [U, _] = D([]),
    b = () => {
      Promise.all([we(), $e()]).then((p) => {
        if (p && p.length === 2) {
          const w = p[0].dashboard;
          i(w);
          const v = p[1];
          h(v);
          const y = [],
            C = [];
          for (let f = 0; f < v.length; f++)
            v[f].availableAmount > 0 && (y.push(v[f]), C.push(v[f]));
          if (Number(w.availableRewardUsd) > 0) {
            const f = C.find((L) => L.currencyName === "USDT");
            f
              ? (f.availableAmount = (
                  Number(f.availableAmount) + Number(w.availableRewardUsd)
                ).toString())
              : C.push({
                  availableAmount: w.availableRewardUsd,
                  availableUsd: "",
                  commissionAmount: "",
                  commissionUsd: "",
                  currencyName: "USDT",
                  userId: 0,
                });
          }
          _(C), R(y);
        }
      });
    };
  Ue(() => {
    b();
  }),
    Ne.on("refresh_reward", function () {
      b();
    });
  const l = De(),
    o = () => oe(l.pathname),
    m = () => Number(u.indexOf(o())),
    u = ["commission", "referral"];
  return (() => {
    var p = Ge(),
      w = p.firstChild,
      v = w.firstChild,
      y = v.firstChild,
      C = y.firstChild,
      f = y.nextSibling;
    f.firstChild;
    var L = f.nextSibling,
      z = L.firstChild,
      E = z.nextSibling;
    E.firstChild;
    var M = v.nextSibling,
      O = M.firstChild,
      de = O.firstChild,
      A = O.nextSibling;
    A.firstChild;
    var ce = A.nextSibling,
      q = ce.firstChild,
      B = q.firstChild,
      K = B.nextSibling;
    K.firstChild;
    var me = q.nextSibling,
      V = me.firstChild,
      H = V.nextSibling;
    H.firstChild;
    var G = M.nextSibling,
      ue = w.nextSibling;
    return (
      t(C, () => s("Available Commission Rewards")),
      t(
        y,
        e(I, {
          name: "Info",
          class: "w-5 text-secondary",
          onClick: () =>
            Z.push(() =>
              e(le, {
                get type() {
                  return u[0];
                },
              })
            ),
        }),
        null
      ),
      t(
        f,
        () => new c(a.availableCommissionUsd).toFixed(2, c.ROUND_FLOOR),
        null
      ),
      t(z, () => s("Total Received")),
      t(E, () => new c(a.commissionUsd).toFixed(2, c.ROUND_FLOOR), null),
      t(de, () => s("Available Referral Rewards")),
      t(
        O,
        e(I, {
          name: "Info",
          class: "w-5 text-secondary",
          onClick: () =>
            Z.push(() =>
              e(le, {
                get type() {
                  return u[1];
                },
              })
            ),
        }),
        null
      ),
      t(A, () => new c(a.availableRewardUsd).toFixed(2, c.ROUND_FLOOR), null),
      t(B, () => s("Total Received")),
      t(K, () => new c(a.rewardUsd).toFixed(2, c.ROUND_FLOOR), null),
      t(V, () => s("Locked Rewards")),
      t(H, () => new c(a.remainingRewardUsd).toFixed(2, c.ROUND_FLOOR), null),
      t(
        G,
        e(N, {
          class: "h-10 flex-1 sm:px-8",
          type: "second",
          get disabled() {
            return (
              T(() => !!new c(a.availableCommissionUsd).equals(0))() &&
              new c(a.availableRewardUsd).equals(0)
            );
          },
          onClick: () => {
            r("/rewards-swap", {
              state: {
                availableCommissionUsd: a.availableCommissionUsd,
                availableRewardUsd: a.availableRewardUsd,
                list: x(),
              },
            });
          },
          get children() {
            return s("Swap");
          },
        }),
        null
      ),
      t(
        G,
        e(N, {
          class: "h-10 flex-1 sm:flex-auto sm:px-8",
          type: "brand",
          get disabled() {
            return (
              T(() => !!new c(a.availableCommissionUsd).equals(0))() &&
              new c(a.availableRewardUsd).equals(0)
            );
          },
          onClick: () => {
            r("/rewards-withdraw", { state: { list: x(), previewList: U() } });
          },
          get children() {
            return s("Withdraw to Wallet");
          },
        }),
        null
      ),
      t(
        ue,
        e(k, {
          get value() {
            return m();
          },
          type: "indicator",
          class: "border-third sm:w-96",
          onChange: (pe) =>
            r(`/affiliate/my-rewards/${u[pe]}`, { replace: !0 }),
          get children() {
            return [
              e($, {
                get when() {
                  return !S.mobile;
                },
                get children() {
                  return [e(P, {}), He()];
                },
              }),
              e(k.TabItem, {
                get title() {
                  return s("Commission");
                },
                get children() {
                  return e(Ee, {
                    get data() {
                      return g();
                    },
                    get children() {
                      return e($, {
                        get when() {
                          return S.mobile;
                        },
                        get children() {
                          return e(P, {});
                        },
                      });
                    },
                  });
                },
              }),
              e(k.TabItem, {
                get title() {
                  return s("Referral");
                },
                get children() {
                  return e(Ve, {
                    get children() {
                      return e($, {
                        get when() {
                          return S.mobile;
                        },
                        get children() {
                          return e(P, {});
                        },
                      });
                    },
                  });
                },
              }),
            ];
          },
        })
      ),
      p
    );
  })();
};
function le(d) {
  return e(Le, {
    get title() {
      return T(() => d.type === "commission")()
        ? s("Commission Rewards")
        : s("Referral Rewards");
    },
    get children() {
      var r = Xe();
      return (
        t(
          r,
          e($, {
            get when() {
              return d.type === "commission";
            },
            get fallback() {
              return e(Y, {
                i18nKey: "bonus.affiliate.rewardtip2",
                get children() {
                  return [Ye(), ae(), re(), Ze(), et(), tt()];
                },
              });
            },
            get children() {
              return e(Y, {
                i18nKey: "bonus.affiliate.rewardtip1",
                get children() {
                  return [Je(), ae(), re(), Qe()];
                },
              });
            },
          })
        ),
        r
      );
    },
  });
}
function P() {
  const d = W(),
    r = () => oe(location.pathname);
  return (() => {
    var a = at();
    return (
      t(
        a,
        e(N, {
          type: "second",
          class: "center h-8 gap-1 px-2",
          onClick: () => {
            d("/affiliate/rules", { replace: !0 });
          },
          get children() {
            return [
              e(te, { name: "rateRules", size: 16 }),
              (() => {
                var i = se();
                return t(i, () => s("Rules")), i;
              })(),
            ];
          },
        }),
        null
      ),
      t(
        a,
        e(N, {
          type: "second",
          class: "center h-8 gap-1 px-2",
          onClick: () => {
            d(`/reward-history?type=${r()}`);
          },
          get children() {
            return [
              e(te, { name: "time", size: 16 }),
              (() => {
                var i = se();
                return t(i, () => s("History")), i;
              })(),
              e(I, { class: "w-4 rotate-180 fill-secondary", name: "Arrow" }),
            ];
          },
        }),
        null
      ),
      a
    );
  })();
}
export { $t as default };
