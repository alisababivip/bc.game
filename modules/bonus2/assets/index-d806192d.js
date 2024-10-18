import { c as r, i as e, e as Z, s as v, t as p } from "./web-13cf6287.js";
import {
  i as le,
  t as F,
  _ as se,
  Z as q,
  u as J,
  a as w,
  D as y,
  B,
  W as M,
  E as ne,
  e as N,
  h as ie,
  n as K,
} from "./manifest-cc1f4445.js";
import { t as n } from "./i18n-023baa0d.js";
import {
  k as ae,
  j as V,
  e as X,
  S as P,
  F as Y,
  c as ee,
} from "./solid-js-38561dfe.js";
import { i as G, g as oe, a as de } from "./servers-f129ff30.js";
import { a as ce } from "./store-a43dfcbd.js";
import { r as fe, c as te, a as Q, b as ue } from "./index-823e0b11.js";
import { I as U } from "./index-e10d67ae.js";
import { L as pe, P as xe, Q as me } from "./Questions-cffed13e.js";
import ge from "./index-2d7b01ef.js";
import be from "./index-8365af17.js";
import he from "./index-a785a743.js";
import ve from "./index-618c967c.js";
import { u as $e } from "./router-3828f409.js";
import "./http-7cc13238.js";
import "./memoize-4ea0c857.js";
import "./_MapCache-1fb5cc44.js";
import "./_baseGetTag-c2e287b9.js";
import "./level3-2267c79e.js";
import "./withdraw-363bec6b.js";
import "./utils-55681fa2.js";
import "./date-picker-ffe0924b.js";
import "./skeleton-c8e80175.js";
import "./table-e9d87985.js";
import "./transition-mask-53f1e843.js";
const E = ae(() => {
  const [u, i] = ce({
      loading: !0,
      inviteInfo: {},
      dashboardInfo: { dashboard: G, topCommissions: [], topRewards: [] },
    }),
    [, { refetch: d }] = V(
      () => le.login,
      () => {
        Promise.all([oe(), de()])
          .then((a) => {
            const c = a[0],
              s = a[1] || { dashboard: G, topCommissions: [], topRewards: [] };
            i({ loading: !1, inviteInfo: c, dashboardInfo: s });
          })
          .catch(F);
      }
    );
  return { state: u, setState: i, refetch: d };
});
var _e = p(
    '<div class="flex flex-col items-center gap-3 md:flex-row"><span></span><div class="center gap-3">'
  ),
  Ce = p(
    '<a target=_blank rel="noopener noreferrer"class=flex-none><img class=icon>'
  );
const we = function (i) {
  const [d] = V(() => se({ title: n("My Referral"), inviteUrl: i.url }));
  return r(X, {
    get children() {
      return r(P, {
        get when() {
          return d();
        },
        get fallback() {
          return r(q, {});
        },
        get children() {
          var o = _e(),
            a = o.firstChild,
            c = a.nextSibling;
          return (
            e(a, () => n("Share via socials")),
            e(
              c,
              r(Y, {
                get each() {
                  return d();
                },
                children: (s) =>
                  s.name === "email" || !s.url
                    ? null
                    : (() => {
                        var f = Ce(),
                          t = f.firstChild;
                        return (
                          Z(
                            (l) => {
                              var m = s.url,
                                x = s.icon;
                              return (
                                m !== l.e && v(f, "href", (l.e = m)),
                                x !== l.t && v(t, "src", (l.t = x)),
                                l
                              );
                            },
                            { e: void 0, t: void 0 }
                          ),
                          f
                        );
                      })(),
              })
            ),
            o
          );
        },
      });
    },
  });
};
var ye = p(
  `<div class="relative flex flex-col gap-3 rounded-xl bg-layer4 bg-[url('src/features/affiliate/assets/invite_bg.png')] px-4 py-6 md:w-2/3"><div class=invite-top><div class=top-inner><p class="mb-2 text-xl font-extrabold"></p><div class="flex items-center gap-6"><p class="flex flex-col sm:flex-row sm:items-center sm:gap-2"><span class="text-xl font-extrabold text-brand"></span><span></span></p><div class="h-[30px] w-[1px] bg-secondary/10"></div><p class="flex flex-col sm:flex-row sm:items-center sm:gap-2"><span class="text-xl font-extrabold text-brand">25%</span><span></span></p></div></div></div><p class=text-secondary></p><div class="flex flex-col gap-4 md:flex-row"><div class=flex-1><p class="mb-1 text-secondary"></p><div class="flex items-center justify-between rounded-xl bg-layer5 px-3 py-1"><p class=ellipsis></p></div></div><div class=flex-1><p class="mb-1 text-secondary"></p><div class="flex items-center justify-between rounded-xl bg-layer5 px-3 py-1"><p></p></div></div></div><div class="center right-4 top-4 sm:absolute">`
);
const Se = function () {
  const { state: i } = E,
    d = J();
  return (() => {
    var o = ye(),
      a = o.firstChild,
      c = a.firstChild,
      s = c.firstChild,
      f = s.nextSibling,
      t = f.firstChild,
      l = t.firstChild,
      m = l.nextSibling,
      x = t.nextSibling,
      S = x.nextSibling,
      R = S.firstChild,
      $ = R.nextSibling,
      g = a.nextSibling,
      b = g.nextSibling,
      C = b.firstChild,
      _ = C.firstChild,
      I = _.nextSibling,
      T = I.firstChild,
      j = C.nextSibling,
      h = j.firstChild,
      k = h.nextSibling,
      z = k.firstChild,
      H = b.nextSibling;
    return (
      e(s, () => n("Invite a Friend to Get")),
      e(l, () => w.printCurrency(new y(1e3))),
      e(m, () => n("Referral Rewards")),
      e($, () => n("Commission Rewards")),
      e(g, () =>
        n(
          "Get $1,000.00 for each friend you invite, plus a up to 25% commission on their wagers. Enjoy consistent commissions, whether they win or lose, in our Casino and Sportsbook. Start earning now!"
        )
      ),
      e(_, () => n("Referral Link")),
      e(T, () => i.inviteInfo.invitationUrl),
      e(
        I,
        r(B, {
          size: "s",
          class: "bg-layer6",
          onClick: () => {
            try {
              M.copyToClipboard(i.inviteInfo.invitationUrl), F(n("Copied"));
            } catch (re) {}
          },
          get children() {
            return n("Copy");
          },
        }),
        null
      ),
      e(h, () => n("Referral Code")),
      e(z, () => i.inviteInfo.aliasCode),
      e(
        k,
        r(B, {
          size: "s",
          class: "bg-layer6",
          onClick: () => {
            try {
              M.copyToClipboard(i.inviteInfo.aliasCode), F(n("Copied"));
            } catch (re) {}
          },
          get children() {
            return n("Copy");
          },
        }),
        null
      ),
      e(
        o,
        r(we, {
          get url() {
            return i.inviteInfo.invitationUrl;
          },
        }),
        H
      ),
      e(
        H,
        r(B, {
          class: "font-extrabold text-brand",
          onClick: () => {
            d("/referral-terms");
          },
          get children() {
            return n("Referral Terms & Conditions");
          },
        })
      ),
      o
    );
  })();
};
var Re = p(
  '<div class="flex flex-col gap-3 md:w-1/3"><div class="flex rounded-xl bg-layer4 px-4 py-6"><div class="center flex-1 flex-col gap-2 border-r border-third"><img class="mb-2 h-auto w-10"><p class="text-xs text-secondary"></p><p class="text-xl font-extrabold"></p></div><div class="center flex-1 flex-col gap-2"><img class="mb-2 h-auto w-10"><p class="text-xs text-secondary"></p><p class="text-xl font-extrabold"></p></div></div><div class="flex flex-1 gap-2 rounded-xl bg-layer4 md:bg-transparent"><div class="flex h-full w-full flex-1 flex-col px-4 py-6 md:rounded-xl md:bg-layer4"><img class="mb-2 w-6"><p class="text-xs text-secondary"></p><span class="text-xl font-extrabold"></span></div><div class="flex h-full w-full flex-1 flex-col px-4 py-6 md:rounded-xl md:bg-layer4"><img class="mb-2 w-6"><p class="text-xs text-secondary"></p><span class="text-xl font-extrabold">'
);
const Ie = function () {
  const { state: i } = E,
    d = ee(() => i.dashboardInfo.dashboard);
  return (() => {
    var o = Re(),
      a = o.firstChild,
      c = a.firstChild,
      s = c.firstChild,
      f = s.nextSibling,
      t = f.nextSibling,
      l = c.nextSibling,
      m = l.firstChild,
      x = m.nextSibling,
      S = x.nextSibling,
      R = a.nextSibling,
      $ = R.firstChild,
      g = $.firstChild,
      b = g.nextSibling,
      C = b.nextSibling,
      _ = $.nextSibling,
      I = _.firstChild,
      T = I.nextSibling,
      j = T.nextSibling;
    return (
      e(f, () => n("Total Reward")),
      e(t, () => w.printCurrency(new y(d().rewardUsd))),
      e(x, () => n("Total Friends")),
      e(S, () => i.dashboardInfo.dashboard.friendNumber),
      v(g, "src", fe),
      e(b, () => n("Referral Rewards")),
      e(C, () => w.printCurrency(new y(d().availableRewardUsd))),
      v(I, "src", te),
      e(T, () => n("Commission Rewards")),
      e(j, () => w.printCurrency(new y(d().availableCommissionUsd))),
      Z(
        (h) => {
          var k = Q.trophy,
            z = Q.usehead;
          return (
            k !== h.e && v(s, "src", (h.e = k)),
            z !== h.t && v(m, "src", (h.t = z)),
            h
          );
        },
        { e: void 0, t: void 0 }
      ),
      o
    );
  })();
};
var ke = p(
    '<div class=activities-wrap><div class="flex items-center justify-between"><div class=flex><img class="mr-2 w-6"><span></span></div><p class="font-extrabold text-brand">+'
  ),
  Ue = p(
    '<div class="flex flex-col gap-3 rounded-xl bg-layer4 px-4 py-6"><div class="text-xl font-extrabold"></div><div class=bot-info>'
  ),
  W = p("<p>"),
  De = p(
    '<div class="flex items-center justify-between"><div class=center><img class="mr-2 w-6"><span></span></div><p class="font-extrabold text-brand">+'
  );
const Ae = function () {
  const { state: i } = E,
    d = ee(() => i.dashboardInfo.dashboard);
  return (() => {
    var o = Ue(),
      a = o.firstChild,
      c = a.nextSibling;
    return (
      e(a, () => n("Rewards Activities")),
      e(
        c,
        r(P, {
          get when() {
            return i.dashboardInfo.topCommissions.length > 0;
          },
          get fallback() {
            return r(ne, {
              get children() {
                return [
                  (() => {
                    var s = W();
                    return e(s, () => n("No info yet")), s;
                  })(),
                  (() => {
                    var s = W();
                    return e(s, () => n("Invite friends to join you now!")), s;
                  })(),
                ];
              },
            });
          },
          get children() {
            var s = ke(),
              f = s.firstChild,
              t = f.firstChild,
              l = t.firstChild,
              m = l.nextSibling,
              x = t.nextSibling;
            return (
              x.firstChild,
              v(l, "src", ue),
              e(m, () => n("Referral Rewards")),
              e(x, () => w.printCurrency(new y(d().availableRewardUsd)), null),
              e(
                s,
                r(Y, {
                  get each() {
                    return i.dashboardInfo.topCommissions;
                  },
                  children: (S) => {
                    const R = new y(S.commissionUsd);
                    return (() => {
                      var $ = De(),
                        g = $.firstChild,
                        b = g.firstChild,
                        C = b.nextSibling,
                        _ = g.nextSibling;
                      return (
                        _.firstChild,
                        v(b, "src", te),
                        e(C, () => n("Commission Rewards")),
                        e(_, () => w.printCurrency(R), null),
                        $
                      );
                    })();
                  },
                }),
                null
              ),
              s
            );
          },
        })
      ),
      o
    );
  })();
};
var Pe = p('<h2 class="pb-4 text-lg font-extrabold leading-8">'),
  Te = p(
    '<div class="flex flex-col gap-4 bg-layer2"><div class="flex flex-col gap-4 md:flex-row">'
  ),
  D = p('<div class="center gap-1"><div>');
const L = ["affiliate", "my-rewards", "referral", "rules", "banners"];
function ze(u) {
  const i = u.match(/\/affiliate\/([^\/]+)/);
  return i ? i[1] : "affiliate";
}
const O = function () {
  const i = J(),
    d = $e(),
    { isSpHost: o, isBzHost: a } = M.getHostType(N.host),
    c = () => ze(d.pathname),
    s = () => Number(L.indexOf(c()));
  function f(t) {
    switch (t) {
      case 0:
        return "/affiliate";
      case 1:
        return `/affiliate/${L[t]}/commission`;
      case 2:
        return `/affiliate/${L[t]}/code`;
      default:
        return `/affiliate/${L[t]}`;
    }
  }
  return [
    r(P, {
      get when() {
        return !N.mobile;
      },
      get children() {
        var t = Pe();
        return e(t, () => n("Affiliate")), t;
      },
    }),
    r(X, {
      get fallback() {
        return r(q, {});
      },
      get children() {
        return r(K, {
          class: "mt-3 flex-none rounded-xl bg-layer6 p-1 sm:mt-0 sm:w-[800px]",
          get value() {
            return s();
          },
          onChange: (t) => {
            i(f(t), { replace: !0 });
          },
          get children() {
            return [
              r(A, {
                get title() {
                  return (() => {
                    var t = D(),
                      l = t.firstChild;
                    return (
                      e(
                        t,
                        r(U, {
                          name: "dashboard",
                          size: 20,
                          get class() {
                            return s() === 0 ? "text-brand" : "";
                          },
                        }),
                        l
                      ),
                      e(l, () => n("Dashboard")),
                      t
                    );
                  })();
                },
                get children() {
                  var t = Te(),
                    l = t.firstChild;
                  return (
                    e(l, r(Se, {}), null),
                    e(l, r(Ie, {}), null),
                    e(t, r(Ae, {}), null),
                    e(t, r(pe, {}), null),
                    e(t, r(xe, {}), null),
                    e(t, r(me, {}), null),
                    t
                  );
                },
              }),
              r(A, {
                get title() {
                  return (() => {
                    var t = D(),
                      l = t.firstChild;
                    return (
                      e(
                        t,
                        r(U, {
                          name: "myRewards",
                          size: 20,
                          get class() {
                            return s() === 1 ? "text-brand" : "";
                          },
                        }),
                        l
                      ),
                      e(l, () => n("My Rewards")),
                      t
                    );
                  })();
                },
                get children() {
                  return r(ge, {});
                },
              }),
              r(A, {
                get title() {
                  return (() => {
                    var t = D(),
                      l = t.firstChild;
                    return (
                      e(
                        t,
                        r(U, {
                          name: "referral",
                          size: 20,
                          get class() {
                            return s() === 2 ? "text-brand" : "";
                          },
                        }),
                        l
                      ),
                      e(l, () => n("Referral Codes & Friends")),
                      t
                    );
                  })();
                },
                get children() {
                  return r(ve, {});
                },
              }),
              r(A, {
                get title() {
                  return (() => {
                    var t = D(),
                      l = t.firstChild;
                    return (
                      e(
                        t,
                        r(U, {
                          name: "rateRules",
                          size: 20,
                          get class() {
                            return s() === 3 ? "text-brand" : "";
                          },
                        }),
                        l
                      ),
                      e(l, () => n("Rate & Rules")),
                      t
                    );
                  })();
                },
                get children() {
                  return r(be, {});
                },
              }),
              r(P, {
                when: !o && !a,
                get children() {
                  return r(A, {
                    get title() {
                      return (() => {
                        var t = D(),
                          l = t.firstChild;
                        return (
                          e(
                            t,
                            r(U, {
                              name: "banner",
                              size: 20,
                              get class() {
                                return s() === 4 ? "text-brand" : "";
                              },
                            }),
                            l
                          ),
                          e(l, () => n("Download Banners")),
                          t
                        );
                      })();
                    },
                    get children() {
                      return r(he, {});
                    },
                  });
                },
              }),
            ];
          },
        });
      },
    }),
  ];
};
function it() {
  return r(P, {
    get when() {
      return N.mobile;
    },
    get fallback() {
      return r(O, {});
    },
    get children() {
      return r(ie, {
        get title() {
          return n("Affiliate");
        },
        get children() {
          return r(O, {});
        },
      });
    },
  });
}
function A(u) {
  return r(K.TabItem, {
    class: "mb-4 mt-4 flex-1 bg-transparent",
    get title() {
      return u.title;
    },
    get children() {
      return u.children;
    },
  });
}
export { it as default };
