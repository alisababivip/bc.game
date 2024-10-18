var $e = Object.defineProperty,
  De = Object.defineProperties;
var _e = Object.getOwnPropertyDescriptors;
var T = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty,
  Z = Object.prototype.propertyIsEnumerable;
var K = (r, i, n) =>
    i in r
      ? $e(r, i, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (r[i] = n),
  E = (r, i) => {
    for (var n in i || (i = {})) Q.call(i, n) && K(r, n, i[n]);
    if (T) for (var n of T(i)) Z.call(i, n) && K(r, n, i[n]);
    return r;
  },
  ee = (r, i) => De(r, _e(i));
var te = (r, i) => {
  var n = {};
  for (var m in r) Q.call(r, m) && i.indexOf(m) < 0 && (n[m] = r[m]);
  if (r != null && T)
    for (var m of T(r)) i.indexOf(m) < 0 && Z.call(r, m) && (n[m] = r[m]);
  return n;
};
import { d as ne, i as a, c as e, m as le, t as p } from "./web-13cf6287.js";
import {
  u as M,
  X as Y,
  S as ye,
  y as se,
  I,
  e as H,
  E as ie,
  j as oe,
  t as y,
  P as we,
  B as R,
  W as de,
  p as ce,
  V as Se,
  $ as Ne,
  n as j,
} from "./manifest-cc1f4445.js";
import {
  c as ue,
  d as F,
  b as O,
  j as B,
  e as ge,
  S as P,
} from "./solid-js-38561dfe.js";
import { t as s } from "./i18n-023baa0d.js";
import { T as me } from "./skeleton-c8e80175.js";
import { T as pe } from "./table-e9d87985.js";
import { a as _ } from "./store-a43dfcbd.js";
import { a as Ie, u as Pe } from "./router-3828f409.js";
import { b as N } from "./utils-55681fa2.js";
import { e as L, D as ae } from "./date-picker-ffe0924b.js";
var Te = p('<span class="font-semibold text-secondary">'),
  re = p('<span class="font-semibold leading-6 text-secondary">'),
  Re = p('<span class="font-semibold leading-6 text-primary">%'),
  ze = p('<span class="font-semibold leading-6 text-primary">'),
  ke = p(
    '<div class="flex cursor-pointer items-center justify-end gap-1 font-semibold"><span>'
  ),
  Ue = p(
    '<div class=p-4><div class="mb-3 flex flex-col gap-3 sm:flex-row"><div class="center flex-1 gap-3"></div><div class="flex flex-1 flex-col gap-3 sm:flex-row">'
  );
function Ae(r) {
  const [i] = Ie(),
    n = M(),
    m = Y(),
    v = new Date(),
    g = v.toISOString().slice(0, 10),
    l = new Date(v);
  l.setDate(l.getDate() - 90);
  const d = l.toISOString().slice(0, 10),
    [c, C] = _({
      beginDate: "",
      endDate: "",
      wagerBeginDate: d,
      wagerEndDate: g,
      code: "",
      aliasCode: "All Codes",
      userName: "",
      userId: "",
      page: 1,
      pageSize: 10,
      sortName: null,
      sortType: null,
    });
  function z(o) {
    const u = o,
      { aliasCode: t } = u,
      f = te(u, ["aliasCode"]);
    return t === "All Codes" ? ee(E({}, f), { aliasCode: "" }) : o;
  }
  const W = () => {
      const o = E({}, c);
      return (
        $()[0] === L && ((o.beginDate = ""), (o.endDate = "")),
        m
          .post("/agent/information/list/", z(o))
          .then((t) => ({
            list: t.list || [],
            page: t.page || 0,
            pageSize: t.pageSize || 0,
            total: t.total || 0,
            totalPage: t.totalPage || 0,
          }))
          .catch(
            (t) => (
              y(t), { list: [], page: 0, pageSize: 0, total: 0, totalPage: 0 }
            )
          )
      );
    },
    b = ue(() => {
      var t;
      const o = [];
      return (
        ((t = r.optionsData) == null ? void 0 : t.list.length) > 0 &&
          r.optionsData.list.map((f) => {
            o.push(f.aliasCode);
          }),
        ["All Codes", ...o]
      );
    });
  F(() => {
    i.code && b().length > 1 && C("aliasCode", i.code);
  });
  const [$, k] = O([L, L]),
    [w, U] = O([l, v]);
  F(() => {
    C("beginDate", N($()[0])),
      C("endDate", N($()[1])),
      C("wagerBeginDate", N(w()[0])),
      C("wagerEndDate", N(w()[1])),
      D();
  });
  const S = () => [
      {
        title: s("Username"),
        dataIndex: "userName",
        render(o) {
          return (() => {
            var t = Te();
            return a(t, o), t;
          })();
        },
      },
      {
        title: s("User ID"),
        dataIndex: "userId",
        render(o) {
          return (() => {
            var t = re();
            return a(t, o), t;
          })();
        },
      },
      {
        title: s("Commission Rate"),
        dataIndex: "commissionRate",
        render(o) {
          return (() => {
            var t = Re(),
              f = t.firstChild;
            return a(t, () => Number(o) * 100, f), t;
          })();
        },
      },
      {
        title: s("Total Deposits (Past 7D)"),
        dataIndex: "day7TotalDeposits",
        render(o) {
          return (() => {
            var t = ze();
            return a(t, o), t;
          })();
        },
      },
      {
        title: s("Registration Date"),
        dataIndex: "createDate",
        render(o) {
          return (() => {
            var t = re();
            return a(t, o), t;
          })();
        },
      },
      {
        title: s("Total Commission"),
        dataIndex: "commissionUsd",
        render(o, t) {
          return (() => {
            var f = ke(),
              h = f.firstChild;
            return (
              (f.$$click = () => n("/friends-detail", { state: t })),
              a(h, o),
              a(
                f,
                e(I, { name: "Arrow", class: "w-4 rotate-180 text-secondary" }),
                null
              ),
              f
            );
          })();
        },
      },
    ],
    [A, { refetch: D }] = B(() => c.aliasCode, W, { initialValue: r.data });
  return (() => {
    var o = Ue(),
      t = o.firstChild,
      f = t.firstChild,
      h = f.nextSibling;
    return (
      a(
        f,
        e(ye, {
          class: "flex-1 !bg-layer3",
          get value() {
            return c.aliasCode;
          },
          get options() {
            return b();
          },
          onChange: (u) => {
            C("aliasCode", u);
          },
          children: (u) => u(),
        }),
        null
      ),
      a(
        f,
        e(se, {
          class: "flex-1 bg-layer3",
          get value() {
            return c.userName;
          },
          onChange: (u) => C("userName", u),
          get placeholder() {
            return s("Search UserName");
          },
          onblur: D,
          get children() {
            return e(I, {
              onClick: D,
              name: "Search",
              class: "order-first -ml-1 mr-1 h-6 w-6 text-secondary",
            });
          },
        }),
        null
      ),
      a(
        h,
        e(ae, {
          get value() {
            return $();
          },
          onChange: k,
          get label() {
            return s("Registration Date:");
          },
          clear: !0,
        }),
        null
      ),
      a(
        h,
        e(ae, {
          options: { minDate: l, maxDate: new Date() },
          get value() {
            return w();
          },
          onChange: U,
          get label() {
            return s("Wager Date:");
          },
        }),
        null
      ),
      a(
        o,
        e(ge, {
          get fallback() {
            return e(me, {
              width: 5,
              height: 2.1,
              rows: 10,
              get columns() {
                return S();
              },
            });
          },
          get children() {
            return e(P, {
              get when() {
                return A();
              },
              children: (u) => [
                e(pe, {
                  get data() {
                    return u().list;
                  },
                  get columns() {
                    return le(() => !!H.mobile)()
                      ? S().filter(
                          (x) =>
                            x.dataIndex === "userName" ||
                            x.dataIndex === "commissionUsd"
                        )
                      : S();
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
                }),
                e(P, {
                  get when() {
                    return u().total > 10;
                  },
                  get children() {
                    return e(oe, {
                      class: "flex justify-end p-3",
                      get current() {
                        return c.page;
                      },
                      onChange: (x) => {
                        C("page", x), D();
                      },
                      get pageSize() {
                        return c.pageSize;
                      },
                      get total() {
                        return u().total;
                      },
                    });
                  },
                }),
              ],
            });
          },
        }),
        null
      ),
      o
    );
  })();
}
ne(["click"]);
var Ee = p('<div class=mb-4><p class="mb-3 text-secondary">'),
  je = p("<div>");
const Le = function (i) {
  const [n, m] = O("");
  function v() {
    return Y()
      .post("agent/invitation/code/add/", {
        invitationName: n(),
        campaignName: n(),
      })
      .then((g) => {
        try {
          de.copyToClipboard(g.invitationUrl),
            y(s("Referral code created and copied to clipboard."));
        } catch (l) {
          y(s("Referral code created."));
        }
        i.closeDialog(), ce.pop();
      })
      .catch((g) => {
        y(g.message);
      });
  }
  return e(we, {
    get title() {
      return s("Create Code");
    },
    get children() {
      return [
        (() => {
          var g = Ee(),
            l = g.firstChild;
          return (
            a(l, () => s("Campaign Name (Optional)")),
            a(
              g,
              e(se, {
                class: "input",
                get placeholder() {
                  return s("Enter Campaign Name");
                },
                get value() {
                  return n();
                },
                onChange: m,
              }),
              null
            ),
            g
          );
        })(),
        (() => {
          var g = je();
          return (
            a(
              g,
              e(R, {
                onClick: (l) => {
                  l.preventDefault(), v();
                },
                type: "brand",
                class: "w-full",
                get children() {
                  return s("Create campaign");
                },
              })
            ),
            g
          );
        })(),
      ];
    },
  });
};
var Fe = p('<span class="font-semibold text-secondary">'),
  Oe = p('<div class="center gap-1 font-semibold"><span>'),
  Be = p(
    '<div class="center gap-1 font-semibold"><span class="font-semibold leading-6 text-primary">'
  ),
  Me = p('<span class="font-semibold leading-6 text-primary">%'),
  Ye = p('<span class="font-semibold leading-6 text-secondary">'),
  He = p(
    '<div class="flex cursor-pointer items-center justify-end gap-2"><span class="font-semibold text-primary">'
  ),
  We = p("<div>"),
  Ve = p("<div class=sm:p-4>");
function Xe(r) {
  const i = M(),
    [n, m] = _({ pageSize: 10, page: 1 }),
    v = ue(
      () => r.data.list.slice((n.page - 1) * n.pageSize, n.page * n.pageSize),
      [r.data.list, n.page, n.pageSize]
    ),
    g = () => [
      {
        title: s("Name"),
        dataIndex: "campaignName",
        render(l) {
          return (() => {
            var d = Fe();
            return a(d, l || "--"), d;
          })();
        },
      },
      {
        title: s("Code"),
        dataIndex: "aliasCode",
        render(l) {
          return (() => {
            var d = Oe(),
              c = d.firstChild;
            return (
              a(c, l),
              a(
                d,
                e(R, {
                  onClick: () => {
                    de.copyToClipboard(l.toString()), y(s("Copied"));
                  },
                  get children() {
                    return e(I, { name: "Copy", class: "w-4 text-secondary" });
                  },
                }),
                null
              ),
              d
            );
          })();
        },
      },
      {
        title: s("Link"),
        dataIndex: "invitationUrl",
        render(l) {
          return (() => {
            var d = Be(),
              c = d.firstChild;
            return (
              a(c, l),
              a(
                d,
                e(R, {
                  get children() {
                    return e(I, {
                      class: "w-4 cursor-pointer text-secondary",
                      onClick: () => {
                        try {
                          navigator.clipboard.writeText(l),
                            y(s("Invitation URL copied to clipboard."));
                        } catch (C) {}
                      },
                      name: "Copy",
                    });
                  },
                }),
                null
              ),
              d
            );
          })();
        },
      },
      {
        title: s("Commission Rate"),
        dataIndex: "ratio",
        render(l) {
          return (() => {
            var d = Me(),
              c = d.firstChild;
            return a(d, l * 100, c), d;
          })();
        },
      },
      {
        title: s("Date Created"),
        dataIndex: "createTime",
        render(l) {
          return (() => {
            var d = Ye();
            return a(d, () => N(new Date(l), "YYYY-MM-DD HH:mm:ss")), d;
          })();
        },
      },
      {
        title: s("Referrals"),
        dataIndex: "registerNum",
        render(l, d) {
          return (() => {
            var c = He(),
              C = c.firstChild;
            return (
              (c.$$click = () => i("/referral-code-detail", { state: d })),
              a(C, l),
              a(
                c,
                e(I, { class: "w-4 rotate-180 text-secondary", name: "Arrow" }),
                null
              ),
              c
            );
          })();
        },
      },
    ];
  return (() => {
    var l = We();
    return (
      a(
        l,
        e(ge, {
          get fallback() {
            return e(me, {
              width: 5,
              height: 3,
              rows: 10,
              get columns() {
                return g();
              },
            });
          },
          get children() {
            return e(P, {
              get when() {
                return v().length > 0;
              },
              get fallback() {
                return e(ie, {
                  get children() {
                    return s("No rewards yet invite friends to join you now!");
                  },
                });
              },
              get children() {
                return (() => {
                  var d = Ve();
                  return (
                    a(
                      d,
                      e(pe, {
                        get data() {
                          return v();
                        },
                        get columns() {
                          return le(() => !!H.mobile)()
                            ? g().filter(
                                (c) =>
                                  c.dataIndex === "campaignName" ||
                                  c.dataIndex === "aliasCode" ||
                                  c.dataIndex === "registerNum"
                              )
                            : g();
                        },
                      }),
                      null
                    ),
                    a(
                      d,
                      e(P, {
                        get when() {
                          return r.data.createdNum > 10;
                        },
                        get children() {
                          return e(oe, {
                            class: "flex justify-end p-3",
                            get current() {
                              return n.page;
                            },
                            onChange: (c) => m("page", c),
                            get total() {
                              return r.data.createdNum;
                            },
                            get pageSize() {
                              return n.pageSize;
                            },
                          });
                        },
                      }),
                      null
                    ),
                    d
                  );
                })();
              },
            });
          },
        })
      ),
      l
    );
  })();
}
ne(["click"]);
var qe = p('<div class="absolute top-12 h-[1px] w-full bg-third">'),
  Ge = p(
    '<div class="bg-layer2 font-semibold"><div class="items-center justify-between rounded-lg bg-layer4 p-4 sm:flex"><div class="mb-4 flex flex-1 items-center"><div class="flex-1 text-secondary"><div></div><div class="text-2xl font-extrabold"><span class=text-primary></span>/</div></div><div class="flex-1 text-secondary"><div></div><div class="text-2xl font-extrabold text-primary"><span></span></div></div></div><div class="flex w-full items-center border-third sm:h-20 sm:w-60 sm:border-l sm:pl-10"></div></div><section class="relative mt-4 rounded-xl bg-layer4 pt-2">'
  );
function Je(r) {
  const i = r.split("/");
  return i ? i[i.length - 1] : "";
}
function ot() {
  const r = Y(),
    i = M(),
    n = new Date(),
    m = n.toISOString().slice(0, 10),
    v = new Date(n);
  v.setDate(v.getDate() - 90);
  const g = v.toISOString().slice(0, 10),
    [l, d] = _({ wagerStartDate: g, wagerEndDate: m, page: 1, pageSize: 20 }),
    [c, C] = _({ list: [], page: 0, pageSize: 0, total: 0, totalPage: 0 }),
    [z, W] = _({
      beginDate: "",
      endDate: "",
      wagerBeginDate: g,
      wagerEndDate: m,
      code: "",
      aliasCode: "",
      userName: "",
      userId: "",
      page: 1,
      pageSize: 10,
      sortName: null,
      sortType: null,
    }),
    [b, $] = _({ list: [], totalCodeNum: 0, createdNum: 0 }),
    k = () =>
      r.post("/agent/invitation/code/list/", l).then((h) => {
        h &&
          h.list &&
          $({
            list: h.list,
            totalCodeNum: h.totalCodeNum,
            createdNum: h.createdNum,
          });
      }),
    w = (h) =>
      r.post("/agent/information/list/", h).then((u) => {
        u &&
          u.list &&
          C({
            list: u.list || [],
            page: u.page || 0,
            pageSize: u.pageSize || 0,
            total: u.total || 0,
            totalPage: u.totalPage || 0,
          });
      }),
    [, { refetch: U }] = B(() => l, k);
  B(() => z, w);
  const S = Pe(),
    A = () => Je(S.pathname),
    D = () => Number(o.indexOf(A())),
    o = ["code", "friends"],
    t = Se(),
    f = Ne();
  return (
    F(() => {
      t() && f().scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }),
    (() => {
      var h = Ge(),
        u = h.firstChild,
        x = u.firstChild,
        V = x.firstChild,
        X = V.firstChild,
        q = X.nextSibling,
        G = q.firstChild;
      G.nextSibling;
      var fe = V.nextSibling,
        J = fe.firstChild,
        he = J.nextSibling,
        Ce = he.firstChild,
        ve = x.nextSibling,
        be = u.nextSibling;
      return (
        a(X, () => s("Referral Code Created")),
        a(G, () => b.createdNum),
        a(q, () => b.totalCodeNum, null),
        a(J, () => s("Friends")),
        a(Ce, () => c.total),
        a(
          ve,
          e(R, {
            onClick: () => {
              ce.push(() => e(Le, { closeDialog: U }));
            },
            class: "h-10 w-full",
            type: "brand",
            get children() {
              return s("Create Code");
            },
          })
        ),
        a(
          be,
          e(j, {
            class: "sm:w-96",
            type: "indicator",
            get value() {
              return D();
            },
            onChange: (xe) =>
              i(`/affiliate/referral/${o[xe]}`, { replace: !0 }),
            get children() {
              return [
                e(P, {
                  get when() {
                    return !H.mobile;
                  },
                  get children() {
                    return qe();
                  },
                }),
                e(j.TabItem, {
                  get title() {
                    return s("Referral Code");
                  },
                  get children() {
                    return e(Xe, { data: b });
                  },
                }),
                e(j.TabItem, {
                  get title() {
                    return s("Friends");
                  },
                  get children() {
                    return e(Ae, { data: c, optionsData: b });
                  },
                }),
              ];
            },
          })
        ),
        h
      );
    })()
  );
}
export { ot as default };
