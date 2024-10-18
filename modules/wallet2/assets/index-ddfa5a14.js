var S = (t, a, l) =>
  new Promise((e, n) => {
    var c = (g) => {
        try {
          i(l.next(g));
        } catch (o) {
          n(o);
        }
      },
      s = (g) => {
        try {
          i(l.throw(g));
        } catch (o) {
          n(o);
        }
      },
      i = (g) => (g.done ? e(g.value) : Promise.resolve(g.value).then(c, s));
    i((l = l.apply(t, a)).next());
  });
import {
  c as r,
  i as u,
  t as v,
  d as I,
  e as $,
  a as B,
  s as D,
  m as R,
  b as w,
} from "./web-da7da7e5.js";
import { t as d } from "./i18n-9b1e4bd8.js";
import {
  S as P,
  k as T,
  q as x,
  a as E,
  s as N,
  D as k,
  h as C,
  j as M,
  L as q,
  E as L,
  b as H,
  e as O,
} from "./manifest-e0f0ba59.js";
import { T as b } from "./Cancel-6c4525d6.js";
import { S as h, e as Q, f as G, g as J, M as p } from "./solid-js-2e15682c.js";
import { ItemStatus as U } from "./Details-ca9fab10.js";
import { T as K, a as m } from "./Table-ddc01343.js";
import { a as V } from "./router-5691abb0.js";
import { c as W, p as X } from "./store-2ed2b91e.js";
import { F as Y } from "./Loading-72a9f35e.js";
import "./Icon-b6e375d0.js";
import "./ErrorRest-1a0f0516.js";
var _ = v('<div class="ellipsis w-0 flex-auto text-left">');
function Z(t) {
  const { opt: a } = b.getStatus(Number(t.value)),
    l = () => {
      var e;
      return (e = a.find((n) => n.value === Number(t.value))) != null
        ? e
        : a[0];
    };
  return r(x, {
    class: "text-base font-semibold",
    get value() {
      return l();
    },
    onChange: (e) => t.navUrl({ status: e.value, page: 1 }),
    options: a,
    children: (e) =>
      (() => {
        var n = _();
        return u(n, () => e().label()), n;
      })(),
  });
}
function ee(t) {
  const { opt: a } = b.getType(Number(t.value)),
    l = () => {
      var e;
      return (e = a.find((n) => n.value === Number(t.value))) != null
        ? e
        : a[0];
    };
  return r(x, {
    class: "text-base font-semibold",
    get value() {
      return l();
    },
    onChange: (e) => t.navUrl({ type: e.value, page: 1 }),
    options: a,
    children: (e) =>
      (() => {
        var n = _();
        return u(n, () => e().label()), n;
      })(),
  });
}
function te(t) {
  const a = b.useBonusController(),
    l = () => {
      var e;
      return (e = a.find((n) => n.value === Number(t.value))) != null
        ? e
        : a[0];
    };
  return r(x, {
    class: "text-base font-semibold",
    get value() {
      return l();
    },
    onChange: (e) => t.navUrl({ bonusType: e.value, page: 1 }),
    options: a,
    children: (e) =>
      (() => {
        var n = _();
        return u(n, () => e().label()), n;
      })(),
  });
}
function re(t) {
  return r(P, {
    get class() {
      return T(
        "grid z-10 py-4 grid-cols-2 gap-2 sm:grid-cols-3",
        t.isDialog
          ? "top-0 bg-layer2 [&>button]:bg-layer3"
          : "bg-layer4 top-15 [&>button]:bg-input_bright"
      );
    },
    get children() {
      return [
        r(ee, {
          get navUrl() {
            return t.navUrl;
          },
          get value() {
            return t.type;
          },
        }),
        r(h, {
          get when() {
            return Number(t.type) === b.Type.Bonus;
          },
          get children() {
            return r(te, {
              get navUrl() {
                return t.navUrl;
              },
              get value() {
                return t.bonusType;
              },
            });
          },
        }),
        r(Z, {
          get navUrl() {
            return t.navUrl;
          },
          get value() {
            return t.status;
          },
        }),
      ];
    },
  });
}
var A = v("<div class=flex-1>"),
  j = v('<div class="flex-1 text-center">'),
  F = v('<div class="flex-1 text-right">'),
  ne = v('<img class="h-4 w-4 ml-1"alt="">'),
  ae = v(
    '<div class="flex items-center justify-between border-b border-third">'
  ),
  z = v("<div>"),
  le = v('<div class="font-semibold text-secondary">'),
  se = v(
    '<div class="flex items-center justify-end"><div></div><img class="h-4 w-4 ml-1"alt="">'
  );
function ue(t, a, l, e, n) {
  return M().post("/balance-controller/wager/task/list/", {
    status: t,
    type: a,
    bonusType: l,
    page: e,
    pageSize: n,
  });
}
function oe(t, a, l, e, n) {
  return S(this, null, function* () {
    return ue(t, a, l, e, n);
  });
}
function ie(t) {
  const a = E();
  return r(K, {
    get headerRender() {
      return r(h, {
        get when() {
          return !t.isDialog;
        },
        get fallback() {
          return [
            (() => {
              var e = A();
              return u(e, () => d("Rollover Type")), e;
            })(),
            (() => {
              var e = F();
              return u(e, () => d("Amount")), e;
            })(),
          ];
        },
        get children() {
          return [
            (() => {
              var e = A();
              return u(e, () => d("Type")), e;
            })(),
            (() => {
              var e = j();
              return u(e, () => d("Time")), e;
            })(),
            (() => {
              var e = j();
              return u(e, () => d("Amount")), e;
            })(),
            (() => {
              var e = F();
              return u(e, () => d("Status")), e;
            })(),
          ];
        },
      });
    },
    get key() {
      var e;
      return ((e = t.type) != null ? e : "") + t.bonusType + t.status;
    },
    onLoad: (e) => {
      const n = t.type ? Number(t.type) : 0,
        c = t.bonusType ? Number(t.bonusType) : 0,
        s = t.pageSize ? Number(t.pageSize) : 20,
        i = Number(t.status) ? Number(t.status) : null;
      return oe(i, n, c, e, s);
    },
    children: (e) => {
      const n = Number(e.originalAmount) > 0;
      return (() => {
        var c = ae();
        return (
          (c.$$click = () => {
            a(`/wallet/roll-detail?taskId=${e.taskId}`, { state: e });
          }),
          u(
            c,
            r(h, {
              get when() {
                return !t.isDialog;
              },
              get fallback() {
                return [
                  r(m, {
                    class: "flex-col items-start",
                    get children() {
                      return [
                        (() => {
                          var s = z();
                          return u(s, () => e.taskTypeDesc), s;
                        })(),
                        (() => {
                          var s = le();
                          return (
                            u(s, () =>
                              new Date(Number(e.createTime)).toLocaleString()
                            ),
                            s
                          );
                        })(),
                      ];
                    },
                  }),
                  r(m, {
                    class: "flex-col items-end",
                    get children() {
                      return [
                        (() => {
                          var s = se(),
                            i = s.firstChild,
                            g = i.nextSibling;
                          return (
                            u(i, n ? "+" : "", null),
                            u(
                              i,
                              () =>
                                N.printCurrency(
                                  new k(e.originalAmount),
                                  e.originalCurrencyName
                                ),
                              null
                            ),
                            $(
                              (o) => {
                                var f = T(n ? "text-success" : "text-error"),
                                  y = C.coinIcon(e.originalCurrencyName);
                                return (
                                  f !== o.e && B(i, (o.e = f)),
                                  y !== o.t && D(g, "src", (o.t = y)),
                                  o
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            s
                          );
                        })(),
                        (() => {
                          var s = z();
                          return (
                            u(
                              s,
                              r(U, {
                                get status() {
                                  return e.status;
                                },
                              })
                            ),
                            s
                          );
                        })(),
                      ];
                    },
                  }),
                ];
              },
              get children() {
                return [
                  r(m, {
                    get children() {
                      return e.taskTypeDesc;
                    },
                  }),
                  r(m, {
                    class: "justify-center text-secondary",
                    get children() {
                      return new Date(Number(e.createTime)).toLocaleString();
                    },
                  }),
                  r(m, {
                    get class() {
                      return T(
                        "justify-center",
                        n ? "text-success" : "text-error"
                      );
                    },
                    get children() {
                      return [
                        n ? "+" : "",
                        R(() =>
                          N.printCurrency(
                            new k(e.originalAmount),
                            e.originalCurrencyName
                          )
                        ),
                        (() => {
                          var s = ne();
                          return (
                            $(() =>
                              D(s, "src", C.coinIcon(e.originalCurrencyName))
                            ),
                            s
                          );
                        })(),
                      ];
                    },
                  }),
                  r(m, {
                    class: "justify-end",
                    get children() {
                      return r(U, {
                        get status() {
                          return e.status;
                        },
                      });
                    },
                  }),
                ];
              },
            })
          ),
          c
        );
      })();
    },
  });
}
I(["click"]);
var ce = v("<div>"),
  ge = v('<div class="bg-layer4 rounded-xl center h-[416px]">');
function ve(t) {
  const a = new URLSearchParams(t),
    l = {};
  for (const [e, n] of a.entries()) l[e] = n;
  return l;
}
function de(t) {
  var s, i, g;
  const a = V(),
    l = ve(a.search),
    [e, n] = W({
      type: (s = l.type) != null ? s : "",
      status: (i = l.status) != null ? i : "",
      page: "1",
      pageSize: "20",
      bonusType: (g = l.bonusType) != null ? g : "",
    }),
    c = (o) => {
      n(
        X((f) => {
          for (const y in o) f[y] = o[y];
        })
      );
    };
  return (() => {
    var o = ce();
    return (
      u(
        o,
        r(
          re,
          w(
            {
              get isDialog() {
                return t.isDialog;
              },
            },
            e,
            { navUrl: c }
          )
        ),
        null
      ),
      u(
        o,
        r(
          ie,
          w(
            {
              get isDialog() {
                return t.isDialog;
              },
            },
            e,
            { navUrl: c }
          )
        ),
        null
      ),
      $(() =>
        B(
          o,
          `rounded-xl px-4 -mx-4 flex-auto pb-4 ${
            !t.isDialog && "mt-0 bg-layer4 mx-0 px-8"
          }`
        )
      ),
      o
    );
  })();
}
function me(t) {
  const [a] = Q(() => b.getTypes(!0)),
    l = () => t.isDialog || O.mobile;
  return r(G, {
    get fallback() {
      return r(h, {
        get when() {
          return !l();
        },
        get fallback() {
          return r(Y, {});
        },
        get children() {
          var e = ge();
          return u(e, r(q, {})), e;
        },
      });
    },
    get children() {
      return r(J, {
        get children() {
          return [
            r(p, {
              get when() {
                return a.error;
              },
              get children() {
                return r(L, {
                  get children() {
                    return a.error;
                  },
                });
              },
            }),
            r(p, {
              get when() {
                return !a();
              },
              get children() {
                return r(L, {});
              },
            }),
            r(p, {
              get when() {
                return a();
              },
              children: (e) => {
                const n = e().map((s) => ({
                    label: () => s.taskTypeDesc,
                    value: s.taskType,
                  })),
                  c = [{ label: () => d("Bonus Type"), value: 0 }, ...n];
                return r(b.BonusControllerContext.Provider, {
                  value: c,
                  get children() {
                    return r(de, {
                      get isDialog() {
                        return l();
                      },
                    });
                  },
                });
              },
            }),
          ];
        },
      });
    },
  });
}
function ke() {
  return r(H, {
    get title() {
      return d("Rollover");
    },
    get children() {
      return r(me, {});
    },
  });
}
export { me as TurnoverPage, ke as default };
