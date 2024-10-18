var Be = Object.defineProperty;
var q = Object.getOwnPropertySymbols;
var Ie = Object.prototype.hasOwnProperty,
  Ae = Object.prototype.propertyIsEnumerable;
var E = (t, s, e) =>
    s in t
      ? Be(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[s] = e),
  K = (t, s) => {
    for (var e in s || (s = {})) Ie.call(s, e) && E(t, e, s[e]);
    if (q) for (var e of q(s)) Ae.call(s, e) && E(t, e, s[e]);
    return t;
  };
var S = (t, s, e) =>
  new Promise((n, r) => {
    var c = (o) => {
        try {
          m(e.next(o));
        } catch (g) {
          r(g);
        }
      },
      u = (o) => {
        try {
          m(e.throw(o));
        } catch (g) {
          r(g);
        }
      },
      m = (o) => (o.done ? n(o.value) : Promise.resolve(o.value).then(c, u));
    m((e = e.apply(t, s)).next());
  });
import {
  c as l,
  m as f,
  i as a,
  e as $,
  s as _,
  b as I,
  t as d,
  d as O,
  a as N,
} from "./web-da7da7e5.js";
import {
  n as Q,
  e as C,
  S as ke,
  q as k,
  u as Ce,
  w as Le,
  s as b,
  h as x,
  x as H,
  M as je,
  D as y,
  k as A,
  a as Te,
  t as F,
  j as R,
  A as Se,
  p as Ue,
  b as Fe,
} from "./manifest-e0f0ba59.js";
import { T as z, f as L, g as He, a as J } from "./lib-bd7b0cad.js";
import { t as i } from "./i18n-9b1e4bd8.js";
import { B as M, T as Ne, S as Pe } from "./bethistory-fcf99adb.js";
import "./withdrawFiat-1254e3b3.js";
import {
  S as p,
  e as We,
  f as Re,
  g as De,
  M as B,
  b as V,
} from "./solid-js-2e15682c.js";
import { m as ze } from "./memoize-ff109130.js";
import { o as Ge } from "./orderBy-fc8ca101.js";
import { d as Oe } from "./debounce-2947036d.js";
import { W as P } from "./Icon-b6e375d0.js";
import { T as j, a as v } from "./Table-ddc01343.js";
import { getFiatBuyStatus as X, getClassStatus as Y } from "./Buy-970eb3c1.js";
import { a as Me } from "./Utr-adf02821.js";
import { a as Ve } from "./router-5691abb0.js";
import { c as qe, p as Ee } from "./store-2ed2b91e.js";
import "./_baseOrderBy-d3b5242c.js";
import "./_baseIteratee-dc3e9bea.js";
import "./_setToArray-f7a05dc1.js";
import "./toNumber-d93b0850.js";
import "./ErrorRest-1a0f0516.js";
import "./Loading-72a9f35e.js";
import "./CopyInput-441aca40.js";
import "./Qrcode-20508360.js";
import "./Icon-603169e7.js";
function Ke({ time: t, type: s }) {
  const e = z.TransactionsType;
  if ((s && s !== e.Withdraw && s !== e.Deposit) || !t) return null;
  if (Number(t) > 5184e6)
    return l(Q, {
      type: "info",
      get children() {
        return i(
          "For fiat transactions, only the last 2 months are available here due to some security reasons."
        );
      },
    });
  if (t.split("-").length === 2) {
    const n = Number(t.split("-")[0]),
      r = Number(t.split("-")[1]),
      c = Math.min(n, r);
    if (C.serverTime.getTime() - c > 5184e6)
      return l(Q, {
        type: "info",
        get children() {
          return i(
            "For fiat transactions, only the last 2 months are available here due to some security reasons."
          );
        },
      });
  }
  return null;
}
var D = d('<div class="ellipsis w-0 flex-auto text-left">'),
  Qe = d('<img class="h-6 w-6 mr-2">'),
  Je = d(
    '<div class="p-1 w-6 h-6 ml-auto bg-layer5 rounded-md -mr-1 flex-none center">'
  );
const Xe = ze(M.getBillType);
function Ye(t) {
  const s = (n) =>
      n === "All"
        ? i("All Type")
        : n === "Game"
        ? i("Game")
        : n === "Affiliate"
        ? i("Affiliate")
        : n === "Vault"
        ? i("Vault")
        : n === "Swap"
        ? i("Swap")
        : n,
    [e] = We(Xe);
  return l(Re, {
    get children() {
      return l(De, {
        get children() {
          return [
            l(B, {
              get when() {
                return !e() || e.error;
              },
              get children() {
                return [];
              },
            }),
            l(B, {
              get when() {
                return e();
              },
              children: (n) => {
                const r = n()
                    .map((u) => ({ label: s(u), value: u }))
                    .filter((u) => u.label !== "Bonus"),
                  c = () => {
                    var u;
                    return (u = r.find((m) => m.value === t.value)) != null
                      ? u
                      : r[0];
                  };
                return l(k, {
                  class: "text-base font-semibold",
                  get value() {
                    return c();
                  },
                  onChange: (u) => t.navUrl({ billtype: u.value, page: 1 }),
                  children: (u) =>
                    (() => {
                      var m = D();
                      return a(m, () => u().label), m;
                    })(),
                  options: r,
                });
              },
            }),
          ];
        },
      });
    },
  });
}
function Ze(t) {
  const s = [
      { label: () => i("All"), value: "" },
      { label: () => i("Original"), value: "1" },
      { label: () => i("Live"), value: "3" },
      { label: () => i("Sports"), value: "4" },
      { label: () => i("Slots"), value: "5" },
      { label: () => i("Horse"), value: "6" },
      { label: () => i("Trading"), value: "7" },
      { label: () => i("Lottery"), value: "8" },
    ],
    e = () => {
      var n;
      return (n = s.find((r) => r.value === t.value)) != null ? n : s[0];
    };
  return l(k, {
    class: "text-base font-semibold col-span-2 sm:col-auto",
    get value() {
      return e();
    },
    onChange: (n) => t.navUrl({ type: n.value, page: 1 }),
    options: s,
    children: (n) =>
      (() => {
        var r = D();
        return a(r, () => n().label()), r;
      })(),
  });
}
function et(t) {
  const s = z.TransactionsType,
    { isKenyaHost: e, isBrHost: n } = Ce.getHostType(C.host),
    r = {
      [s.Deposit]: () => i("Deposit"),
      [s.Withdraw]: () => i("Withdraw"),
      [s.Swap]: () => i("Swap"),
      [s.Buy]: () => i("Buy Crypto"),
      [s.Bill]: () => i("Bill"),
      [s.Bonus]: () => i("Bonus"),
    },
    c =
      n || e
        ? [s.Deposit, s.Withdraw, s.Bill, s.Bonus]
        : [s.Deposit, s.Withdraw, s.Swap, s.Buy, s.Bill, s.Bonus];
  return l(k, {
    get value() {
      return t.value || s.Deposit;
    },
    onChange: (u) => t.navUrl({ type: u, page: 1 }),
    options: c,
    class: "text-base font-semibold",
    children: (u) =>
      (() => {
        var m = D();
        return a(m, () => r[u() || s.Deposit]()), m;
      })(),
  });
}
function Z(t) {
  const s = ["", ...Ge(Le, "sort").map((e) => e.currencyName)];
  return l(k, {
    get value() {
      return t.value || "";
    },
    onChange: (e) => {
      t.navUrl({ assets: e, page: 1 });
    },
    class: "text-base font-semibold",
    options: s,
    search: (e, n) => {
      const r = n.toLocaleLowerCase();
      return e
        ? e.toLocaleLowerCase().includes(r) ||
            b.getCurrency(e).fullName.toLocaleLowerCase().includes(r)
        : !0;
    },
    children: (e) => [
      l(p, {
        get when() {
          return e();
        },
        get children() {
          var n = Qe();
          return $(() => _(n, "src", x.coinIcon(e()))), n;
        },
      }),
      (() => {
        var n = D();
        return (
          a(
            n,
            (() => {
              var r = f(() => !!e());
              return () =>
                r() ? b.getCurrency(e()).aliasCurrencyName : i("All Assets");
            })()
          ),
          n
        );
      })(),
    ],
  });
}
function tt(t) {
  if (t && t.split("-").length === 2) {
    const s = t.split("-");
    return [new Date(s[0]), new Date(s[1])];
  } else return [new Date(), new Date()];
}
function rt(t) {
  const [s, e] = V(tt(t.value)),
    n = Oe(
      function (c) {
        t.navUrl({ time: `${+c[0]}-${+c[1]}`, page: 1 });
      },
      3e3,
      { leading: !1, trailing: !0 }
    );
  return l(je, {
    class:
      "-ml-0.5 mr-4 h-11 flex-auto border-none bg-transparent p-0 [&>svg]:h-6 [&>svg]:w-6",
    get value() {
      return s();
    },
    options: { maxDate: new Date(), minDate: new Date(+new Date() - 7776e6) },
    onChange: (r) => (e(r), n(r), !1),
  });
}
function ee(t) {
  const s = () =>
      t.value || (t.isBill || t.isBetHistory ? "86400000" : "5184000000"),
    e =
      t.isBill || t.isBetHistory
        ? [
            {
              label: () => i("Past __number__ days", { number: "60" }),
              value: "5184000000",
            },
            {
              label: () => i("Past __number__ days", { number: "30" }),
              value: "2592000000",
            },
            {
              label: () => i("Past __number__ days", { number: "7" }),
              value: "604800000",
            },
            {
              label: () => i("Past __number__ hours", { number: "24" }),
              value: "86400000",
            },
            { label: () => i("Custom"), value: "" },
          ]
        : [
            {
              label: () => i("Past __number__ days", { number: "90" }),
              value: "7776000000",
            },
            {
              label: () => i("Past __number__ days", { number: "60" }),
              value: "5184000000",
            },
            {
              label: () => i("Past __number__ days", { number: "30" }),
              value: "2592000000",
            },
            {
              label: () => i("Past __number__ days", { number: "7" }),
              value: "604800000",
            },
            {
              label: () => i("Past __number__ hours", { number: "24" }),
              value: "86400000",
            },
            { label: () => i("Custom"), value: "" },
          ],
    n = () => {
      var r;
      return (r = e.find((c) => c.value === s())) != null ? r : e[e.length - 1];
    };
  return l(k, {
    get value() {
      return n();
    },
    onChange: (r) => {
      r.value && t.navUrl({ time: r.value, page: 1 });
    },
    class: "text-base font-semibold",
    options: e,
    children: (r) =>
      l(p, {
        get when() {
          return r().value;
        },
        get fallback() {
          return l(
            rt,
            I(t, {
              get label() {
                return r().label();
              },
            })
          );
        },
        get children() {
          var c = D();
          return a(c, () => r().label()), c;
        },
      }),
    labelRender: (r) => [
      (() => {
        var c = D();
        return a(c, () => r().label()), c;
      })(),
      (() => {
        var c = Je();
        return (
          a(
            c,
            l(H, { class: "w-3 h-3 transition-all -rotate-90", name: "Arrow" })
          ),
          c
        );
      })(),
    ],
  });
}
function nt(t) {
  const s = [
    { label: i("All status"), value: "" },
    { label: i("Complete"), value: "success" },
    { label: i("Processing"), value: "progress" },
    { label: i("Failed"), value: "fail" },
    { label: i("Canceled"), value: "cancel" },
  ];
  return t && s.push({ label: i("Refunded"), value: "refunded" }), s;
}
function lt(t) {
  const s = nt(t.isWithdraw),
    e = () => {
      var n;
      return (n = s.find((r) => r.value === t.value)) != null ? n : s[0];
    };
  return l(k, {
    get value() {
      return e();
    },
    class: "text-base font-semibold",
    onChange: (n) => t.navUrl({ status: n.value, page: 1 }),
    options: s,
    children: (n) =>
      (() => {
        var r = D();
        return a(r, () => n().label), r;
      })(),
  });
}
function at(t) {
  const s = z.TransactionsType,
    e = () => t.type || s.Deposit;
  return l(ke, {
    class:
      "grid z-10 top-0 bg-layer2 py-4 grid-cols-2 gap-2 sm:top-15 sm:grid-cols-3 sm:bg-layer4 [&>button]:bg-layer3 sm:[&>button]:bg-input_bright",
    get children() {
      return l(p, {
        get when() {
          return t.isBetHistory;
        },
        get fallback() {
          return [
            l(et, {
              get navUrl() {
                return t.navUrl;
              },
              get value() {
                return e();
              },
            }),
            l(Z, {
              get navUrl() {
                return t.navUrl;
              },
              get value() {
                return t.assets;
              },
            }),
            l(ee, {
              get navUrl() {
                return t.navUrl;
              },
              get value() {
                return t.time;
              },
              get isBill() {
                return t.type === s.Bill;
              },
            }),
            f(
              () =>
                f(() => e() === s.Deposit || e() === s.Withdraw)() &&
                l(lt, {
                  get navUrl() {
                    return t.navUrl;
                  },
                  get isWithdraw() {
                    return e() === s.Withdraw;
                  },
                  get value() {
                    return t.status;
                  },
                })
            ),
            f(
              () =>
                f(() => e() === s.Bill)() &&
                l(Ye, {
                  get navUrl() {
                    return t.navUrl;
                  },
                  get value() {
                    return t.billtype;
                  },
                })
            ),
          ];
        },
        get children() {
          return [
            l(Ze, {
              get navUrl() {
                return t.navUrl;
              },
              get value() {
                return t.type;
              },
            }),
            l(Z, {
              get navUrl() {
                return t.navUrl;
              },
              get value() {
                return t.assets;
              },
            }),
            l(ee, {
              isBetHistory: !0,
              get navUrl() {
                return t.navUrl;
              },
              get value() {
                return t.time;
              },
            }),
          ];
        },
      });
    },
  });
}
var st = d(
    '<div class="text-secondary mt-0.5 cursor-pointer flex items-center self-stretch text-xs"><span class=flex-none>:</span><span class="ellipsis w-0 flex-auto">(<!>)'
  ),
  ut = d('<div class="1123 ml-1">'),
  te = d("<div class=flex-1>"),
  re = d('<div class="flex-1 text-center">'),
  ne = d('<div class="flex-1 text-right">'),
  W = d("<div>"),
  le = d(
    '<div class="flex items-center justify-end"><div></div><img class="h-4 w-4 ml-1"alt="">'
  ),
  ae = d(
    '<div class="flex items-center justify-end"><img class="h-4 w-4 ml-1"alt="">'
  ),
  it = d(
    '<div class="flex items-center justify-between border-b border-third">'
  ),
  ct = d('<div class="font-semibold text-secondary">'),
  se = d(
    '<div class="flex items-center text-secondary mt-0.5 ml-1 text-xs">(<!>)'
  ),
  ue = d(
    '<div class="flex items-center justify-end"><img class="h-4 w-4 ml-1"alt=""><span class=text-xs>(<!>)'
  );
function ie({ gameId: t }) {
  function s() {
    Ce.copyToClipboard(t), F.success(i("Copied"));
  }
  return (() => {
    var e = st(),
      n = e.firstChild,
      r = n.firstChild,
      c = n.nextSibling,
      u = c.firstChild,
      m = u.nextSibling;
    return (
      m.nextSibling,
      (e.$$click = s),
      a(n, () => i("Game ID"), r),
      a(c, t, m),
      a(e, l(P, { class: "flex-none ml-0.5", name: "Copy" }), null),
      e
    );
  })();
}
function ce({ data: t }) {
  const s = Te(),
    [e, n] = V(!1),
    r = () => {
      e() ||
        (n(!0),
        ["72", "-72", "73", "-73"].includes(t.changeType)
          ? R()
              .get(
                `/platform-lottery/lottery-detail/to-betid?id=${t.relatedId}&changeType=${t.changeType}`
              )
              .then((c) => {
                c
                  ? s(`/bet_detail/${c}`)
                  : F.warning(
                      i("Only the latest 100 betting history is recorded.")
                    );
              })
              .catch((c) => {
                F.warning(
                  i("Only the latest 100 betting history is recorded.")
                );
              })
              .finally(() => {
                n(!1);
              })
          : R()
              .get(
                `/game/support/share-v3/create/bill/${t.gameUnique}/${t.amountLogId}/`
              )
              .then((c) => {
                c && c.distributeId
                  ? s(`/game-detail/${c.distributeId}/`)
                  : F.warning(
                      i("Only the latest 100 betting history is recorded.")
                    );
              })
              .catch((c) => {
                F.warning(
                  i("Only the latest 100 betting history is recorded.")
                );
              })
              .finally(() => {
                n(!1);
              }));
    };
  return (() => {
    var c = ut();
    return (
      (c.$$click = r),
      a(c, l(P, { class: "!h-3 !w-3 ml-0.5", name: "Link" })),
      c
    );
  })();
}
function ot(t) {
  return l(j, {
    get key() {
      return t.assets + t.billtype + t.time;
    },
    get headerRender() {
      return l(p, {
        get when() {
          return !C.mobile;
        },
        get fallback() {
          return [
            (() => {
              var e = te();
              return a(e, () => i("Transaction")), e;
            })(),
            (() => {
              var e = ne();
              return a(e, () => i("Amount")), e;
            })(),
          ];
        },
        get children() {
          return [
            (() => {
              var e = te();
              return a(e, () => i("Type")), e;
            })(),
            (() => {
              var e = re();
              return a(e, () => i("Time")), e;
            })(),
            (() => {
              var e = re();
              return a(e, () => i("Amount")), e;
            })(),
            (() => {
              var e = ne();
              return a(e, () => i("Balance")), e;
            })(),
          ];
        },
      });
    },
    onLoad: function (e) {
      return S(this, null, function* () {
        const n = L(t);
        return yield M.getBill(
          e,
          t.pageSize,
          n.startTime,
          n.endTime,
          t.assets,
          t.billtype
        );
      });
    },
    children: (e) => {
      const n = new y(e.generalChangeAmount)
          .add(e.bonusChangeAmount)
          .toNumber(),
        r = new y(e.beforeBonusChangeAmount)
          .add(e.beforeGeneralChangeAmount)
          .add(e.bonusChangeAmount)
          .add(e.generalChangeAmount)
          .toNumber(),
        c = Number(e.bonusChangeAmount) === n,
        u = n > 0;
      return (() => {
        var m = it();
        return (
          a(
            m,
            l(p, {
              get when() {
                return !C.mobile;
              },
              get fallback() {
                return [
                  l(v, {
                    class: "flex-col items-start",
                    get children() {
                      return [
                        (() => {
                          var o = W();
                          return a(o, () => e.changeTypeDesc), o;
                        })(),
                        f(
                          () =>
                            f(() => !!e.changeTypeDetail)() &&
                            (() => {
                              var o = se(),
                                g = o.firstChild,
                                w = g.nextSibling;
                              return (
                                w.nextSibling,
                                a(o, () => e.changeTypeDetail, w),
                                a(
                                  o,
                                  (() => {
                                    var h = f(() => !!e.gameId);
                                    return () => h() && l(ce, { data: e });
                                  })(),
                                  null
                                ),
                                o
                              );
                            })()
                        ),
                        (() => {
                          var o = ct();
                          return (
                            a(o, () =>
                              new Date(Number(e.createTime)).toLocaleString()
                            ),
                            o
                          );
                        })(),
                        f(
                          () =>
                            f(() => !!e.gameId)() &&
                            l(ie, {
                              get gameId() {
                                return e.gameId;
                              },
                            })
                        ),
                      ];
                    },
                  }),
                  l(v, {
                    class: "flex-col items-end",
                    get children() {
                      return [
                        (() => {
                          var o = le(),
                            g = o.firstChild,
                            w = g.nextSibling;
                          return (
                            a(g, u ? "+" : "", null),
                            a(
                              g,
                              () =>
                                b.printCurrency(
                                  new y(e.changeAmount),
                                  e.currencyName
                                ),
                              null
                            ),
                            a(
                              o,
                              c &&
                                (() => {
                                  var h = W();
                                  return a(h, () => i("Bonus")), h;
                                })(),
                              null
                            ),
                            $(
                              (h) => {
                                var T = A(u ? "text-success" : "text-error"),
                                  U = x.coinIcon(e.currencyName);
                                return (
                                  T !== h.e && N(g, (h.e = T)),
                                  U !== h.t && _(w, "src", (h.t = U)),
                                  h
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            o
                          );
                        })(),
                        f(
                          () =>
                            f(
                              () => !c && Number(e.bonusChangeAmount) !== 0
                            )() &&
                            (() => {
                              var o = ue(),
                                g = o.firstChild,
                                w = g.nextSibling,
                                h = w.firstChild,
                                T = h.nextSibling;
                              return (
                                T.nextSibling,
                                a(
                                  o,
                                  () =>
                                    b.printCurrency(
                                      new y(e.bonusChangeAmount),
                                      e.currencyName
                                    ),
                                  g
                                ),
                                a(w, () => i("In Bonus"), T),
                                $(() =>
                                  _(g, "src", x.coinIcon(e.currencyName))
                                ),
                                o
                              );
                            })()
                        ),
                        (() => {
                          var o = ae(),
                            g = o.firstChild;
                          return (
                            a(
                              o,
                              () => b.printCurrency(new y(r), e.currencyName),
                              g
                            ),
                            $(() => _(g, "src", x.coinIcon(e.currencyName))),
                            o
                          );
                        })(),
                      ];
                    },
                  }),
                ];
              },
              get children() {
                return [
                  l(v, {
                    class: "flex-col items-start",
                    get children() {
                      return [
                        (() => {
                          var o = W();
                          return a(o, () => e.changeTypeDesc), o;
                        })(),
                        f(
                          () =>
                            f(() => !!e.changeTypeDetail)() &&
                            (() => {
                              var o = se(),
                                g = o.firstChild,
                                w = g.nextSibling;
                              return (
                                w.nextSibling,
                                a(o, () => e.changeTypeDetail, w),
                                a(
                                  o,
                                  (() => {
                                    var h = f(() => !!e.gameId);
                                    return () => h() && l(ce, { data: e });
                                  })(),
                                  null
                                ),
                                o
                              );
                            })()
                        ),
                        f(
                          () =>
                            f(() => !!e.gameId)() &&
                            l(ie, {
                              get gameId() {
                                return e.gameId;
                              },
                            })
                        ),
                      ];
                    },
                  }),
                  l(v, {
                    class: "justify-center text-secondary",
                    get children() {
                      return new Date(Number(e.createTime)).toLocaleString();
                    },
                  }),
                  l(v, {
                    class: "justify-center",
                    get children() {
                      return [
                        (() => {
                          var o = le(),
                            g = o.firstChild,
                            w = g.nextSibling;
                          return (
                            a(g, u ? "+" : "", null),
                            a(
                              g,
                              () =>
                                b.printCurrency(
                                  new y(e.changeAmount),
                                  e.currencyName
                                ),
                              null
                            ),
                            a(
                              o,
                              c &&
                                (() => {
                                  var h = W();
                                  return a(h, () => i("Bonus")), h;
                                })(),
                              null
                            ),
                            $(
                              (h) => {
                                var T = A(u ? "text-success" : "text-error"),
                                  U = x.coinIcon(e.currencyName);
                                return (
                                  T !== h.e && N(g, (h.e = T)),
                                  U !== h.t && _(w, "src", (h.t = U)),
                                  h
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            o
                          );
                        })(),
                        f(
                          () =>
                            f(
                              () => !c && Number(e.bonusChangeAmount) !== 0
                            )() &&
                            (() => {
                              var o = ue(),
                                g = o.firstChild,
                                w = g.nextSibling,
                                h = w.firstChild,
                                T = h.nextSibling;
                              return (
                                T.nextSibling,
                                a(
                                  o,
                                  () =>
                                    b.printCurrency(
                                      new y(e.bonusChangeAmount),
                                      e.currencyName
                                    ),
                                  g
                                ),
                                a(w, () => i("In Bonus"), T),
                                $(() =>
                                  _(g, "src", x.coinIcon(e.currencyName))
                                ),
                                o
                              );
                            })()
                        ),
                      ];
                    },
                  }),
                  l(v, {
                    class: "justify-end",
                    get children() {
                      var o = ae(),
                        g = o.firstChild;
                      return (
                        a(
                          o,
                          () => b.printCurrency(new y(r), e.currencyName),
                          g
                        ),
                        $(() => _(g, "src", x.coinIcon(e.currencyName))),
                        o
                      );
                    },
                  }),
                ];
              },
            })
          ),
          m
        );
      })();
    },
  });
}
O(["click"]);
var oe = d("<div class=flex-1>"),
  de = d('<div class="flex-1 text-center">'),
  me = d('<div class="flex-1 text-right">'),
  dt = d('<img class="h-4 w-4 ml-1"alt="">'),
  mt = d("<b>"),
  gt = d("<div class=mr-1>"),
  vt = d(
    '<div class="flex items-center justify-between border-b text-base cursor-pointer border-third hover:rounded-xl hover:bg-black_alpha5 dark:hover:bg-white_alpha5">'
  ),
  ht = d('<div class="text-base font-extrabold">'),
  ft = d('<div class="font-semibold text-secondary">'),
  yt = d(
    '<div class="flex items-center text-base font-semibold text-error justify-end"><img class="h-4 w-4 ml-1"alt="">'
  ),
  $t = d('<div class="flex items-center justify-end"><b></b><div class=mr-1>');
function bt(t) {
  const s = function (r) {
      return S(this, null, function* () {
        const c = L(t);
        return yield M.getBuyHistory(
          r,
          c.pageSize,
          c.startTime,
          c.endTime,
          t.assets
        );
      });
    },
    e = Te(),
    n = function (c) {
      e("/wallet/buy-detail", { state: K({}, c) });
    };
  return l(j, {
    get headerRender() {
      return l(p, {
        get when() {
          return !C.mobile;
        },
        get fallback() {
          return [
            (() => {
              var r = oe();
              return a(r, () => i("Amount")), r;
            })(),
            (() => {
              var r = me();
              return a(r, () => i("Status")), r;
            })(),
          ];
        },
        get children() {
          return [
            (() => {
              var r = oe();
              return a(r, () => i("Type")), r;
            })(),
            (() => {
              var r = de();
              return a(r, () => i("Time")), r;
            })(),
            (() => {
              var r = de();
              return a(r, () => i("Amount")), r;
            })(),
            (() => {
              var r = me();
              return a(r, () => i("Status")), r;
            })(),
          ];
        },
      });
    },
    get key() {
      return t.assets + t.time + t.type;
    },
    onLoad: s,
    children: (r) =>
      (() => {
        var c = vt();
        return (
          (c.$$click = () => n(r)),
          a(
            c,
            l(p, {
              get when() {
                return !C.mobile;
              },
              get fallback() {
                return [
                  l(v, {
                    class: "flex-col items-start",
                    get children() {
                      return [
                        (() => {
                          var u = ht();
                          return a(u, () => i("Buy Crypto")), u;
                        })(),
                        (() => {
                          var u = ft();
                          return (
                            a(u, () =>
                              new Date(Number(r.createTime)).toLocaleString()
                            ),
                            u
                          );
                        })(),
                      ];
                    },
                  }),
                  l(v, {
                    class: "flex-col items-end",
                    get children() {
                      return [
                        (() => {
                          var u = yt(),
                            m = u.firstChild;
                          return (
                            a(
                              u,
                              () =>
                                b.printCurrency(
                                  new y(r.sourceFiatAmount),
                                  r.sourceFiat
                                ),
                              m
                            ),
                            $(() => _(m, "src", x.coinIcon(r.sourceFiat))),
                            u
                          );
                        })(),
                        (() => {
                          var u = $t(),
                            m = u.firstChild,
                            o = m.nextSibling;
                          return (
                            a(o, () => X(r.status)),
                            a(
                              u,
                              l(H, {
                                class: "h-3 w-3 -rotate-180",
                                name: "Arrow",
                              }),
                              null
                            ),
                            $(() => N(m, Y(r.status))),
                            u
                          );
                        })(),
                      ];
                    },
                  }),
                ];
              },
              get children() {
                return [
                  l(v, {
                    get children() {
                      return i("Buy Crypto");
                    },
                  }),
                  l(v, {
                    class: "justify-center text-secondary",
                    get children() {
                      return new Date(Number(r.createTime)).toLocaleString();
                    },
                  }),
                  l(v, {
                    class: "justify-center text-error",
                    get children() {
                      return [
                        f(() =>
                          b.printCurrency(
                            new y(r.sourceFiatAmount),
                            r.sourceFiat
                          )
                        ),
                        (() => {
                          var u = dt();
                          return (
                            $(() => _(u, "src", x.coinIcon(r.sourceFiat))), u
                          );
                        })(),
                      ];
                    },
                  }),
                  l(v, {
                    class: "justify-end",
                    get children() {
                      return [
                        (() => {
                          var u = mt();
                          return $(() => N(u, Y(r.status))), u;
                        })(),
                        (() => {
                          var u = gt();
                          return a(u, () => X(r.status)), u;
                        })(),
                        l(H, { class: "h-3 w-3 -rotate-180", name: "Arrow" }),
                      ];
                    },
                  }),
                ];
              },
            })
          ),
          c
        );
      })(),
  });
}
O(["click"]);
var _t = d("<div class=ml-1>"),
  xt = d("<div class=flex-1>"),
  ge = d('<div class="flex-1 text-center">'),
  wt = d('<div class="flex-1 text-right">'),
  pt = d("<div>"),
  Ct = d("<div>/"),
  Tt = d("<span>+"),
  St = d('<img class="h-4 w-4 ml-1"alt="">'),
  Nt = d(
    '<div class="flex items-center text-success text-base font-semibold justify-end sm:justify-center">+<img class="h-4 w-4 ml-1"alt="">'
  ),
  Dt = d(
    '<div class="flex items-center text-secondary justify-end sm:hidden">'
  ),
  Bt = d(
    '<div class="border-b text-center text-secondary border-third py-2 text-xs"><span class="text-success ml-1">'
  );
function ve({ status: t }) {
  const { orderclass: s, txt: e } = He(t);
  return [
    l(P, { name: "Dot", class: s }),
    (() => {
      var n = _t();
      return a(n, e), n;
    })(),
  ];
}
function It(t) {
  return l(j, {
    get headerRender() {
      return l(p, {
        get when() {
          return !C.mobile;
        },
        get fallback() {
          return [
            (() => {
              var e = pt();
              return a(e, () => i("Merchant ID")), e;
            })(),
            (() => {
              var e = Ct(),
                n = e.firstChild;
              return (
                a(e, () => i("Amount"), n), a(e, () => i("Status"), null), e
              );
            })(),
          ];
        },
        get children() {
          return [
            (() => {
              var e = xt();
              return a(e, () => i("Type")), e;
            })(),
            (() => {
              var e = ge();
              return a(e, () => i("Merchant ID")), e;
            })(),
            (() => {
              var e = ge();
              return a(e, () => i("Amount")), e;
            })(),
            (() => {
              var e = wt();
              return a(e, () => i("Status")), e;
            })(),
          ];
        },
      });
    },
    get key() {
      return t.assets + t.time + t.type + t.status;
    },
    onLoad: function (e) {
      return S(this, null, function* () {
        const n = L(t);
        return yield Ne.getDepositHistory(
          e,
          n.pageSize,
          n.status,
          n.startTime,
          n.endTime,
          t.assets
        );
      });
    },
    children: (e) => {
      const n =
        (e.mode === "3" || e.mode === "6") && e.currencyName === "INRFIAT";
      return [
        l(Se, {
          class:
            "flex items-center justify-between border-b flex-none cursor-pointer border-third hover:rounded-xl hover:bg-black_alpha5 dark:hover:bg-white_alpha5",
          get href() {
            return `/wallet/${t.type}-detail?orderId=${e.orderId}&type=${t.type}/`;
          },
          get children() {
            return l(p, {
              get when() {
                return !C.mobile;
              },
              get fallback() {
                return [
                  l(v, {
                    class: "items-start",
                    get children() {
                      return e.fiatChannelName ? e.fiatChannelName : "-";
                    },
                  }),
                  l(v, {
                    class: "flex-col items-end",
                    get children() {
                      return [
                        (() => {
                          var r = Nt(),
                            c = r.firstChild,
                            u = c.nextSibling;
                          return (
                            a(
                              r,
                              () =>
                                b.printCurrency(
                                  new y(e.amount),
                                  e.currencyName
                                ),
                              u
                            ),
                            $(() => _(u, "src", x.coinIcon(e.currencyName))),
                            r
                          );
                        })(),
                        (() => {
                          var r = Dt();
                          return (
                            a(
                              r,
                              l(ve, {
                                get status() {
                                  return e.status;
                                },
                              }),
                              null
                            ),
                            a(
                              r,
                              l(H, {
                                class: "h-3 w-3 rotate-180 ml-1",
                                name: "Arrow",
                              }),
                              null
                            ),
                            r
                          );
                        })(),
                      ];
                    },
                  }),
                ];
              },
              get children() {
                return [
                  l(v, {
                    get children() {
                      return i("Deposit");
                    },
                  }),
                  l(v, {
                    class: "justify-center",
                    get children() {
                      return e.fiatChannelName ? e.fiatChannelName : "-";
                    },
                  }),
                  l(v, {
                    class: "justify-center text-success",
                    get children() {
                      return [
                        (() => {
                          var r = Tt();
                          return (
                            r.firstChild,
                            a(
                              r,
                              () =>
                                b.printCurrency(
                                  new y(e.amount),
                                  e.currencyName
                                ),
                              null
                            ),
                            r
                          );
                        })(),
                        (() => {
                          var r = St();
                          return (
                            $(() => _(r, "src", x.coinIcon(e.currencyName))), r
                          );
                        })(),
                      ];
                    },
                  }),
                  l(v, {
                    class: "justify-end",
                    get children() {
                      return [
                        l(ve, {
                          get status() {
                            return e.status;
                          },
                        }),
                        l(H, {
                          class: "h-3 w-3 rotate-180 ml-1",
                          name: "Arrow",
                        }),
                      ];
                    },
                  }),
                ];
              },
            });
          },
        }),
        l(At, {
          defaultShow: n,
          get orderId() {
            return e.orderId;
          },
          get currencyName() {
            return e.currencyName;
          },
        }),
      ];
    },
  });
}
function At(t) {
  const [s, e] = V(t.defaultShow),
    n = () => {
      e(!1);
    },
    r = () =>
      Ue.push(() =>
        l(Me, {
          get currencyName() {
            return t.currencyName;
          },
          get orderId() {
            return t.orderId;
          },
          callback: n,
        })
      );
  return l(p, {
    get when() {
      return s();
    },
    get children() {
      var c = Bt(),
        u = c.firstChild;
      return (
        (c.$$click = r),
        a(
          c,
          () => i("Submit your UTR/Reference no. to verify your deposit"),
          u
        ),
        a(u, () => i("Verify")),
        c
      );
    },
  });
}
O(["click"]);
var kt = d("<div class=flex-1>"),
  he = d('<div class="flex-1 text-center">'),
  Lt = d('<div class="flex-1 text-right">'),
  G = d("<div>"),
  jt = d("<div>-"),
  Ut = d('<img class="h-4 w-4 ml-1"alt="">'),
  fe = d(
    '<div class="flex items-center justify-end"><div class="text-secondary ml-1">'
  ),
  Ft = d('<div class="font-semibold text-secondary">'),
  Ht = d(
    '<div class="flex items-center text-base justify-end"><div></div><img class="h-4 w-4 ml-1"alt="">'
  );
function Pt(t) {
  return l(j, {
    get headerRender() {
      return l(p, {
        get when() {
          return !C.mobile;
        },
        get fallback() {
          return [
            (() => {
              var e = G();
              return a(e, () => i("Type")), e;
            })(),
            (() => {
              var e = G();
              return a(e, () => i("Amount")), e;
            })(),
          ];
        },
        get children() {
          return [
            (() => {
              var e = kt();
              return a(e, () => i("Type")), e;
            })(),
            (() => {
              var e = he();
              return a(e, () => i("Time")), e;
            })(),
            (() => {
              var e = he();
              return a(e, () => i("Amount")), e;
            })(),
            (() => {
              var e = Lt();
              return a(e, () => i("Status")), e;
            })(),
          ];
        },
      });
    },
    get key() {
      return t.pageSize + t.status + t.time + t.assets;
    },
    onLoad: function (e) {
      return S(this, null, function* () {
        const n = L(t);
        return yield Ne.getWithdrawHistory(
          e,
          t.pageSize,
          t.status,
          n.startTime,
          n.endTime,
          t.assets
        );
      });
    },
    children: (e) => {
      const n = Number(e.amount) > 0;
      return l(Se, {
        class:
          "flex items-center justify-between border-b cursor-pointer border-third hover:rounded-xl hover:bg-black_alpha5 dark:hover:bg-white_alpha5",
        get href() {
          return `/wallet/${t.type}-detail?orderId=${e.orderId}&type=${t.type}/`;
        },
        get children() {
          return l(p, {
            get when() {
              return !C.mobile;
            },
            get fallback() {
              return [
                l(v, {
                  class: "flex-col items-start",
                  get children() {
                    return [
                      (() => {
                        var r = G();
                        return a(r, () => i("Withdraw")), r;
                      })(),
                      (() => {
                        var r = Ft();
                        return (
                          a(r, () =>
                            new Date(Number(e.createTime)).toLocaleString()
                          ),
                          r
                        );
                      })(),
                    ];
                  },
                }),
                l(v, {
                  class: "flex-col items-end",
                  get children() {
                    return [
                      (() => {
                        var r = Ht(),
                          c = r.firstChild,
                          u = c.nextSibling;
                        return (
                          a(c, n ? "+" : "", null),
                          a(
                            c,
                            () =>
                              b.printCurrency(new y(e.amount), e.currencyName),
                            null
                          ),
                          $(
                            (m) => {
                              var o = A(n ? "text-success" : "text-error"),
                                g = x.coinIcon(e.currencyName);
                              return (
                                o !== m.e && N(c, (m.e = o)),
                                g !== m.t && _(u, "src", (m.t = g)),
                                m
                              );
                            },
                            { e: void 0, t: void 0 }
                          ),
                          r
                        );
                      })(),
                      (() => {
                        var r = fe(),
                          c = r.firstChild;
                        return (
                          a(
                            r,
                            l(P, {
                              get class() {
                                return J(e.status);
                              },
                              name: "Dot",
                            }),
                            c
                          ),
                          a(c, () => e.statusText),
                          r
                        );
                      })(),
                    ];
                  },
                }),
              ];
            },
            get children() {
              return [
                l(v, {
                  get children() {
                    return i("Withdraw");
                  },
                }),
                l(v, {
                  class: "justify-center",
                  get children() {
                    return new Date(Number(e.createTime)).toLocaleString();
                  },
                }),
                l(v, {
                  class: "justify-center",
                  get children() {
                    return [
                      (() => {
                        var r = jt();
                        return (
                          r.firstChild,
                          a(
                            r,
                            () =>
                              b.printCurrency(new y(e.amount), e.currencyName),
                            null
                          ),
                          $(() => N(r, A("text-error"))),
                          r
                        );
                      })(),
                      (() => {
                        var r = Ut();
                        return (
                          $(() => _(r, "src", x.coinIcon(e.currencyName))), r
                        );
                      })(),
                    ];
                  },
                }),
                l(v, {
                  class: "justify-end",
                  get children() {
                    var r = fe(),
                      c = r.firstChild;
                    return (
                      a(
                        r,
                        l(P, {
                          get class() {
                            return J(e.status);
                          },
                          name: "Dot",
                        }),
                        c
                      ),
                      a(c, () => e.statusText),
                      r
                    );
                  },
                }),
              ];
            },
          });
        },
      });
    },
  });
}
var ye = d("<div class=flex-1>"),
  $e = d('<div class="flex-1 text-center">'),
  be = d('<div class="flex-1 text-right">'),
  _e = d('<img class="h-4 w-4 ml-1"alt="">'),
  Wt = d(
    '<div class="flex items-center justify-between border-b text-base border-third">'
  ),
  Rt = d(
    '<div class="flex items-center text-error justify-end">-<img class="h-4 w-4 ml-1"alt="">'
  ),
  zt = d(
    '<div class="flex items-center text-success justify-end"><img class="h-4 w-4 ml-1"alt="">'
  );
function Gt(t) {
  return l(j, {
    get key() {
      return t.assets + t.time + t.type;
    },
    get headerRender() {
      return l(p, {
        get when() {
          return !C.mobile;
        },
        get fallback() {
          return [
            (() => {
              var e = ye();
              return a(e, () => i("Time")), e;
            })(),
            (() => {
              var e = be();
              return a(e, () => i("Swap From/To")), e;
            })(),
          ];
        },
        get children() {
          return [
            (() => {
              var e = ye();
              return a(e, () => i("Type")), e;
            })(),
            (() => {
              var e = $e();
              return a(e, () => i("Time")), e;
            })(),
            (() => {
              var e = $e();
              return a(e, () => i("Swap From")), e;
            })(),
            (() => {
              var e = be();
              return a(e, () => i("Swap To")), e;
            })(),
          ];
        },
      });
    },
    onLoad: function (e) {
      return S(this, null, function* () {
        const n = L(t);
        return yield Pe.getSwap(
          e,
          n.pageSize,
          n.startTime,
          n.endTime,
          t.assets
        );
      });
    },
    children: (e) => {
      const n =
          "-" +
          b.printCurrency(new y(e.fromCurrencyAmount), e.fromCurrencyName),
        r = b.printCurrency(new y(e.toCurrencyAmount), e.toCurrencyName);
      return (() => {
        var c = Wt();
        return (
          a(
            c,
            l(p, {
              get when() {
                return !C.mobile;
              },
              get fallback() {
                return [
                  l(v, {
                    class: "text-secondary items-start",
                    get children() {
                      return new Date(e.createTime).toLocaleString();
                    },
                  }),
                  l(v, {
                    class: "flex-col items-end",
                    get children() {
                      return [
                        (() => {
                          var u = Rt(),
                            m = u.firstChild,
                            o = m.nextSibling;
                          return (
                            a(
                              u,
                              () =>
                                b.printCurrency(
                                  new y(e.fromCurrencyAmount),
                                  e.fromCurrencyName
                                ),
                              o
                            ),
                            $(() =>
                              _(o, "src", x.coinIcon(e.fromCurrencyName))
                            ),
                            u
                          );
                        })(),
                        (() => {
                          var u = zt(),
                            m = u.firstChild;
                          return (
                            a(
                              u,
                              () =>
                                b.printCurrency(
                                  new y(e.toCurrencyAmount),
                                  e.toCurrencyName
                                ),
                              m
                            ),
                            $(() => _(m, "src", x.coinIcon(e.toCurrencyName))),
                            u
                          );
                        })(),
                      ];
                    },
                  }),
                ];
              },
              get children() {
                return [
                  l(v, {
                    get children() {
                      return i("Swap");
                    },
                  }),
                  l(v, {
                    class: "text-secondary justify-center",
                    get children() {
                      return new Date(e.createTime).toLocaleString();
                    },
                  }),
                  l(v, {
                    class: "text-error justify-center",
                    get children() {
                      return [
                        n,
                        (() => {
                          var u = _e();
                          return (
                            $(() =>
                              _(u, "src", x.coinIcon(e.fromCurrencyName))
                            ),
                            u
                          );
                        })(),
                      ];
                    },
                  }),
                  l(v, {
                    class: "text-success justify-end",
                    get children() {
                      return [
                        r,
                        (() => {
                          var u = _e();
                          return (
                            $(() => _(u, "src", x.coinIcon(e.toCurrencyName))),
                            u
                          );
                        })(),
                      ];
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
var xe = d("<div class=flex-1>"),
  we = d('<div class="flex-1 text-center">'),
  pe = d('<div class="flex-1 text-right">'),
  Ot = d('<img class="h-4 w-4 ml-1"alt="">'),
  Mt = d(
    '<div class="flex items-center justify-between border-b max-w-full border-third">'
  ),
  Vt = d('<div class="ellipsis flex-auto">'),
  qt = d('<div class="font-semibold text-secondary text-xs">'),
  Et = d("<div>x"),
  Kt = d('<div><img class="h-4 w-4 ml-1"alt="">');
function Qt(t, s, e, n) {
  return R().post("/game/bet/history/bet-history-first/", {
    beginTime: t,
    endTime: s,
    currencyName: e,
    type: n,
  });
}
function Jt(t, s, e, n) {
  return R().post("/game/bet/history/bet-history/", {
    minDistributeId: s,
    currencyName: e,
    beginTime: t,
    type: n,
  });
}
function Xt(t) {
  let s = "";
  return l(j, {
    get headerRender() {
      return l(p, {
        get when() {
          return !C.mobile;
        },
        get fallback() {
          return [
            (() => {
              var n = xe();
              return a(n, () => i("Type")), n;
            })(),
            (() => {
              var n = pe();
              return a(n, () => i("Wager")), n;
            })(),
          ];
        },
        get children() {
          return [
            (() => {
              var n = xe();
              return a(n, () => i("Type")), n;
            })(),
            (() => {
              var n = we();
              return a(n, () => i("Time")), n;
            })(),
            (() => {
              var n = we();
              return a(n, () => i("Payout")), n;
            })(),
            (() => {
              var n = pe();
              return a(n, () => i("Profit")), n;
            })(),
          ];
        },
      });
    },
    get key() {
      return t.time + t.assets + t.type;
    },
    onLoad: function (n) {
      return S(this, null, function* () {
        const r = L(t),
          c =
            n === 1
              ? yield Qt(r.startTime, r.endTime, t.assets, t.type)
              : yield Jt(r.startTime, s, t.assets, t.type),
          u = n === 1 ? c.resList.length > 50 : c.resList.length > 500,
          m = c.resList.filter((g) => !!g.time),
          o = n === 1 ? m.slice(0, 50) : m.slice(0, 500);
        return (s = c.minDistributeId), { list: o, next: u };
      });
    },
    children: (n) => {
      Number(n.amount);
      const r = Number(n.profit);
      return (() => {
        var c = Mt();
        return (
          a(
            c,
            l(p, {
              get when() {
                return !C.mobile;
              },
              get fallback() {
                return [
                  l(v, {
                    class: "flex-col items-start",
                    get children() {
                      return [
                        (() => {
                          var u = Vt();
                          return a(u, () => n.type), u;
                        })(),
                        (() => {
                          var u = qt();
                          return (
                            a(u, () =>
                              new Date(Number(n.time)).toLocaleString()
                            ),
                            u
                          );
                        })(),
                      ];
                    },
                  }),
                  l(v, {
                    class: "flex-col items-end",
                    get children() {
                      return [
                        (() => {
                          var u = Et(),
                            m = u.firstChild;
                          return (
                            a(u, () => new y(n.payout).div(1e4).toNumber(), m),
                            u
                          );
                        })(),
                        (() => {
                          var u = Kt(),
                            m = u.firstChild;
                          return (
                            a(
                              u,
                              () => b.printCurrency(new y(r), n.currencyName),
                              m
                            ),
                            $(
                              (o) => {
                                var g = A(
                                    "items-center flex ml-auto",
                                    r > 0 ? "text-success" : "text-error"
                                  ),
                                  w = x.coinIcon(n.currencyName);
                                return (
                                  g !== o.e && N(u, (o.e = g)),
                                  w !== o.t && _(m, "src", (o.t = w)),
                                  o
                                );
                              },
                              { e: void 0, t: void 0 }
                            ),
                            u
                          );
                        })(),
                      ];
                    },
                  }),
                ];
              },
              get children() {
                return [
                  l(v, {
                    get children() {
                      return n.type;
                    },
                  }),
                  l(v, {
                    class: "justify-center text-secondary",
                    get children() {
                      return new Date(Number(n.time)).toLocaleString();
                    },
                  }),
                  l(v, {
                    class: "justify-center",
                    get children() {
                      return [
                        f(() => new y(n.payout).div(1e4).toNumber()),
                        "x",
                      ];
                    },
                  }),
                  l(v, {
                    get class() {
                      return A(
                        "justify-end",
                        r > 0 ? "text-success" : "text-error"
                      );
                    },
                    get children() {
                      return [
                        f(() => b.printCurrency(new y(r), n.currencyName)),
                        (() => {
                          var u = Ot();
                          return (
                            $(() => _(u, "src", x.coinIcon(n.currencyName))), u
                          );
                        })(),
                      ];
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
function Yt(t) {
  const s = z.TransactionsType;
  return l(p, {
    get when() {
      return !t.isBetHistory;
    },
    get fallback() {
      return l(Xt, t);
    },
    get children() {
      return l(De, {
        get fallback() {
          return l(
            It,
            I(t, {
              get type() {
                return s.Deposit;
              },
            })
          );
        },
        get children() {
          return [
            l(B, {
              get when() {
                return t.type === s.Bill || t.type === s.Bonus;
              },
              get children() {
                return l(
                  ot,
                  I(t, {
                    get type() {
                      return s.Bill;
                    },
                    get billtype() {
                      return t.type === s.Bonus ? s.Bonus : t.billtype;
                    },
                  })
                );
              },
            }),
            l(B, {
              get when() {
                return t.type === s.Swap;
              },
              get children() {
                return l(Gt, t);
              },
            }),
            l(B, {
              get when() {
                return t.type === s.Buy;
              },
              get children() {
                return l(bt, t);
              },
            }),
            l(B, {
              get when() {
                return t.type === s.Withdraw;
              },
              get children() {
                return l(
                  Pt,
                  I(t, {
                    get type() {
                      return s.Withdraw;
                    },
                  })
                );
              },
            }),
          ];
        },
      });
    },
  });
}
var Zt = d(
  '<div class="rounded-xl px-4 -mx-4 flex-auto pb-4 sm:mx-0 sm:bg-layer4 lg:px-8">'
);
function er(t) {
  const s = new URLSearchParams(t),
    e = {};
  for (const [n, r] of s.entries()) e[n] = r;
  return e;
}
function Nr(t) {
  const s = Ve(),
    e = er(s.search),
    [n, r] = qe({
      type: e.type || "",
      assets: e.assets || "",
      time: e.time || "",
      status: e.status || "",
      billtype: e.billtype || "",
      page: 1,
      pageSize: 20,
    }),
    c = (u) => {
      r(
        Ee((m) => {
          for (const o in u) m[o] = u[o];
        })
      );
    };
  return l(Fe, {
    get title() {
      return f(() => !!t.isBetHistory)() ? i("BetHistory") : i("Transactions");
    },
    get children() {
      var u = Zt();
      return (
        a(
          u,
          l(
            at,
            I(
              {
                get isBetHistory() {
                  var m;
                  return (m = t.isBetHistory) != null ? m : !1;
                },
                navUrl: c,
              },
              n
            )
          ),
          null
        ),
        a(
          u,
          l(Ke, {
            get time() {
              return n.time;
            },
            get type() {
              return n.type;
            },
          }),
          null
        ),
        a(
          u,
          l(
            Yt,
            I(
              {
                get isBetHistory() {
                  var m;
                  return (m = t.isBetHistory) != null ? m : !1;
                },
              },
              n,
              { navUrl: c }
            )
          ),
          null
        ),
        u
      );
    },
  });
}
export { Nr as default };
