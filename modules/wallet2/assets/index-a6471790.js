import {
  c as e,
  s as B,
  i as s,
  e as M,
  a as I,
  m as F,
  t as c,
} from "./web-da7da7e5.js";
import {
  j as b,
  t as H,
  P as Z,
  s as j,
  D as ee,
  k as E,
  A as te,
  L as w,
  E as O,
  d as p,
  B as W,
  c as re,
  l as ne,
  p as x,
  u as R,
  w as ae,
  a as L,
  b as _,
  m as se,
  e as le,
} from "./manifest-e0f0ba59.js";
import {
  b as U,
  d as C,
  S as g,
  e as S,
  f as Q,
  g as ie,
  M as $,
  a as oe,
  o as P,
} from "./solid-js-2e15682c.js";
import { W as y } from "./Icon-b6e375d0.js";
import { t as o } from "./i18n-9b1e4bd8.js";
import { c as v } from "./store-eb5336a3.js";
import { Q as ce } from "./Qrcode-20508360.js";
import { S as ue, D as Y, a as de, b as q, c as me } from "./index-35fef608.js";
import { m as z } from "./memoize-ff109130.js";
import "./bethistory-fcf99adb.js";
import { W as pe } from "./withdrawFiat-1254e3b3.js";
import { W as ge, a as he } from "./index-5ae89d10.js";
import { u as G } from "./router-5691abb0.js";
import "./store-2ed2b91e.js";
import "./_baseFlatten-f0777715.js";
import "./_setToArray-f7a05dc1.js";
import "./_defineProperty-3c705e3e.js";
import "./_baseFindIndex-15a8234c.js";
import "./AboutJb-13924d78.js";
import "./CopyInput-441aca40.js";
import "./Loading-72a9f35e.js";
import "./lib-6879580e.js";
import "./sortBy-6b2810fa.js";
import "./_baseOrderBy-d3b5242c.js";
import "./_baseIteratee-dc3e9bea.js";
import "./Utr-adf02821.js";
import "./Icon-603169e7.js";
import "./toInteger-112c6978.js";
import "./toNumber-d93b0850.js";
import "./AboutBcl-bcb4cc45.js";
import "./groupBy-5d1dee29.js";
import "./orderBy-fc8ca101.js";
import "./ErrorRest-1a0f0516.js";
import "./SelectCurrency-0ef42d5c.js";
import "./LocalAmountItem-390b01c4.js";
import "./CircleCountdown-885da069.js";
import "./debounce-2947036d.js";
const fe = "/modules/wallet2/assets/m-pesa-d25a8791.png";
var ve = c(
    '<div class="flex-col mt-4 rounded-xl p-4 center bg-layerx"><img alt=""><div></div><div>'
  ),
  ye = c('<div class="text-center font-semibold text-lg">'),
  be = c('<div class="text-secondary my-4">'),
  xe = c('<div class="relative text-center pt-32">'),
  $e = c("<div class=text-secondary>"),
  we = c(
    '<div class="flex justify-between mt-4"><div class=font-semibold></div><div class=font-semibold>'
  );
function A(a) {
  const [n, i] = U(""),
    t = () => a.status != 1;
  return (
    C(() => {
      b()
        .post("/account/phone/get/")
        .then((r) => {
          i(r);
        })
        .catch(H);
    }),
    e(Z, {
      title: "Deposit",
      get children() {
        return [
          (() => {
            var r = ve(),
              l = r.firstChild,
              u = l.nextSibling,
              m = u.nextSibling;
            return (
              B(l, "src", fe),
              s(u, () => o("Deposit Amount")),
              s(m, () => j.printCurrency(new ee(a.amount), a.currencyName)),
              M(
                (d) => {
                  var h = E("font-semibold mt-12"),
                    f = E("font-extrabold text-lg", t() && "text-brand");
                  return (
                    h !== d.e && I(u, (d.e = h)),
                    f !== d.t && I(m, (d.t = f)),
                    d
                  );
                },
                { e: void 0, t: void 0 }
              ),
              r
            );
          })(),
          (() => {
            var r = xe();
            return (
              s(
                r,
                e(ue, {
                  get complete() {
                    return t();
                  },
                }),
                null
              ),
              s(
                r,
                e(g, {
                  get when() {
                    return t();
                  },
                  get fallback() {
                    return [
                      (() => {
                        var l = $e();
                        return (
                          s(l, () =>
                            o(
                              "We have sent a payment request to your phone. Please check your phone"
                            )
                          ),
                          l
                        );
                      })(),
                      (() => {
                        var l = we(),
                          u = l.firstChild,
                          m = u.nextSibling;
                        return (
                          s(u, () => o("Phone number")),
                          s(
                            m,
                            (() => {
                              var d = F(() => !!n());
                              return () => (d() ? n() : "-");
                            })()
                          ),
                          l
                        );
                      })(),
                    ];
                  },
                  get children() {
                    return [
                      (() => {
                        var l = ye();
                        return s(l, () => o("Deposit Completed")), l;
                      })(),
                      (() => {
                        var l = be();
                        return (
                          s(l, () =>
                            o(
                              "We’ve received your payment, it might take a minute to be shown in your account. "
                            )
                          ),
                          l
                        );
                      })(),
                      e(te, {
                        replace: !0,
                        class: "text-brand underline",
                        get href() {
                          return `/wallet/deposit-detail/?orderId=${a.id}`;
                        },
                        get children() {
                          return o("View Transaction Details");
                        },
                      }),
                    ];
                  },
                }),
                null
              ),
              r
            );
          })(),
        ];
      },
    })
  );
}
var N = c('<div class="center flex-auto">'),
  _e = c(
    '<div class="p-4 rounded-lg overflow-hidden bg-layerx"><div class=mt-4><div class="flex justify-between items-center"><div class=font-semibold></div><div class="flex items-center"><img class=w-10 alt=""> <span>805852</span></div></div><div class="flex justify-between items-center"><div class=font-semibold></div><div class="flex items-center">'
  ),
  Ce = c(
    '<div class="mt-4 pl-1"><div class="text-lg font-semibold"></div><div class="text-secondary my-1">1. Go to M-PESA Menu on your mobile phone</div><div class="text-secondary my-1">2. Select <span>Lipa na M-PESA</span></div><div class="text-secondary my-1">3. Select <span>Pay Bill</span></div><div class="text-secondary my-1">4. Enter <span>805852</span> as the Business Number</div><div class="text-secondary my-1">5. Enter <span>Phone number</span> without as ACCOUNT NUMBER</div><div class="text-secondary my-1">6. Enter amount (NO COMMAS) e.g 1000</div><div class="text-secondary my-1">7. Enter your <span>M-PESA PIN</span> and send You will receive an SMS confirming the transaction'
  ),
  Se = c('<div class="p-4 rounded-lg overflow-hidden bg-layerx">');
const Pe = z(function () {
  return b().get("/payment/deposit/fiat/KESFIAT/methods/");
});
function Te() {
  const [a] = S(Pe);
  return e(Q, {
    get fallback() {
      return (() => {
        var n = N();
        return s(n, e(w, {})), n;
      })();
    },
    get children() {
      return e(g, {
        get when() {
          return a();
        },
        get fallback() {
          return (() => {
            var n = N();
            return s(n, e(O, {})), n;
          })();
        },
        children: (n) => {
          const i = n().find((r) => r.channel === "WanguPayKES"),
            t = n().find((r) => r.channel === "MPesa-PayBill");
          return e(ie, {
            get children() {
              return [
                e($, {
                  when: i && t,
                  children: (r) =>
                    e(p, {
                      type: "indicator",
                      get children() {
                        return [
                          e(p.TabItem, {
                            class: "flex-auto bg-transparent",
                            get title() {
                              return o("Online Deposit");
                            },
                            get children() {
                              return e(K, { payment: i });
                            },
                          }),
                          e(p.TabItem, {
                            class: "flex-auto bg-transparent",
                            title: "Paybill",
                            get children() {
                              return e(k, { payment: t });
                            },
                          }),
                        ];
                      },
                    }),
                }),
                e($, {
                  when: i,
                  children: (r) =>
                    e(K, {
                      get payment() {
                        return r();
                      },
                    }),
                }),
                e($, {
                  when: t,
                  children: (r) =>
                    e(k, {
                      get payment() {
                        return r();
                      },
                    }),
                }),
              ];
            },
          });
        },
      });
    },
  });
}
function k(a) {
  const [n, i] = U(""),
    t = "805852";
  C(() => {
    b()
      .post("/account/phone/get/")
      .then((l) => i(l || "-"));
  });
  const r = function (u) {
    R.copyToClipboard(String(u)), H.success(o("Copied"));
  };
  return [
    (() => {
      var l = _e(),
        u = l.firstChild,
        m = u.firstChild,
        d = m.firstChild,
        h = d.nextSibling,
        f = h.firstChild,
        V = f.nextSibling;
      V.nextSibling;
      var J = m.nextSibling,
        T = J.firstChild,
        X = T.nextSibling;
      return (
        s(
          l,
          e(Y, {
            showTit: !0,
            class: "border-b mb-4 border-third",
            currency: "KESFIAT",
          }),
          u
        ),
        s(l, e(ce, { url: t, txt: "Scan with M-PESA APP" }), u),
        s(d, () => o("Business Number")),
        s(
          h,
          e(W, {
            class: "h-auto",
            onClick: () => r(t),
            get children() {
              return e(y, { name: "Copy" });
            },
          }),
          null
        ),
        s(T, () => o("Phone Number")),
        s(
          X,
          e(g, {
            get when() {
              return n();
            },
            get fallback() {
              return e(w, {});
            },
            children: (D) => [
              F(D),
              e(g, {
                get when() {
                  return D() !== "-";
                },
                get children() {
                  return e(W, {
                    class: "h-auto",
                    onClick: () => r(n()),
                    get children() {
                      return e(y, { name: "Copy" });
                    },
                  });
                },
              }),
            ],
          })
        ),
        M(() =>
          B(f, "src", re.darken ? a.payment.nightIcon : a.payment.lightIcon)
        ),
        l
      );
    })(),
    (() => {
      var l = Ce(),
        u = l.firstChild;
      return s(u, () => o("how to deposit")), l;
    })(),
  ];
}
function K(a) {
  const n = ne(),
    i = n.decodeBind((t) => {
      new Date().getTime() - Number(t.sendTime) <= 6e4 &&
        (x.pop(), x.push(() => e(A, t)));
    }, "json");
  return (
    C(() => {
      n.on("recharge-success", i);
    }),
    oe(() => {
      n.off("recharge-success", i);
    }),
    (() => {
      var t = Se();
      return (
        s(
          t,
          e(Y, {
            showTit: !0,
            class: "border-b border-third pb-4",
            currency: "KESFIAT",
          }),
          null
        ),
        s(
          t,
          e(de, {
            get payment() {
              return a.payment;
            },
            currency: "KESFIAT",
            callBack: (r) =>
              x.push(() =>
                e(A, {
                  get amount() {
                    return r.amount;
                  },
                  get currencyName() {
                    return r.currencyName;
                  },
                  status: 1,
                  get id() {
                    return r.orderId;
                  },
                })
              ),
          }),
          null
        ),
        t
      );
    })()
  );
}
var De = c('<div class="rounded-lg overflow-hidden px-4 bg-layerx">'),
  Ie = c('<div class="center flex-auto">'),
  Ee = c('<div class="rounded-xl overflow-hidden">');
const We = z(function (n) {
  return b().get(`/payment/withdraw/fiat/${n}/methods/`);
});
function Ae({ props: a, cut: n }) {
  const [i] = S(() =>
    pe.withdrawKyc(n.currencyName, a.wayName, a.method, a.channel)
  );
  return (() => {
    var t = De();
    return (
      s(
        t,
        e(g, {
          get when() {
            return i();
          },
          children: (r) =>
            e(ge, {
              withdrawInfo: a,
              get kycItem() {
                return r().item;
              },
              get currencyInfo() {
                return j.getCurrency(n.currencyName);
              },
            }),
        })
      ),
      t
    );
  })();
}
function Ne() {
  const [a] = S(() => We("KESFIAT"));
  return e(Q, {
    get fallback() {
      return (() => {
        var n = Ie();
        return s(n, e(w, {})), n;
      })();
    },
    get children() {
      return e(g, {
        get when() {
          return a();
        },
        children: (n) => {
          const i = n().find((t) => t.channel === "MPesa_B2C");
          return e(g, {
            when: i,
            get fallback() {
              return e(O, {});
            },
            children: (t) =>
              (() => {
                var r = Ee();
                return (
                  s(
                    r,
                    e(Ae, {
                      get props() {
                        return t();
                      },
                      get cut() {
                        return ae.KESFIAT;
                      },
                    })
                  ),
                  r
                );
              })(),
          });
        },
      });
    },
  });
}
var ke = c('<div class="px-4 flex flex-auto"><div class=absolute-center>');
function Ke() {
  const a = L(),
    [n] = G(),
    i = n.type === "withdraw";
  return (
    P(() => {
      v.setCurrency("KESFIAT");
    }),
    e(_, {
      get title() {
        return (() => {
          var t = ke(),
            r = t.firstChild;
          return (
            s(r, () => o("Wallet")),
            s(
              t,
              e(y, {
                name: "Transaction",
                class:
                  "ml-auto h-8 rounded-lg bg-layer5 p-2 text-secondary mr-12 w-8",
                onClick: () => a("/wallet/transaction"),
              }),
              null
            ),
            t
          );
        })();
      },
      get children() {
        return e(p, {
          class: "my-4",
          value: i ? 1 : 0,
          get children() {
            return [
              e(p.TabItem, {
                class: "flex-col mb-4 flex-auto bg-transparent",
                get title() {
                  return o("Deposit");
                },
                get children() {
                  return e(Te, {});
                },
              }),
              e(p.TabItem, {
                class: "flex-col mb-4 flex-auto bg-transparent",
                get title() {
                  return o("Withdraw");
                },
                get children() {
                  return e(Ne, {});
                },
              }),
            ];
          },
        });
      },
    })
  );
}
var Be = c('<div class="py-4 flex-col flex flex-auto">');
function Me() {
  return (
    P(() => {
      v.setCurrency("IDRFIAT");
    }),
    e(_, {
      get title() {
        return o("Deposit");
      },
      get children() {
        var a = Be();
        return (
          s(
            a,
            e(q, {
              isFiat: !0,
              get currencyName() {
                return v.store.fiatCurrency;
              },
            })
          ),
          a
        );
      },
    })
  );
}
var Fe = c('<div class="py-4 flex-col flex flex-auto">'),
  He = c('<div class="px-4 flex flex-auto"><div class=absolute-center>');
function je() {
  const a = L(),
    [n] = G(),
    i = n.type === "withdraw";
  return (
    P(() => {
      v.setCurrency(se.bonusCurrencyName);
    }),
    e(_, {
      get title() {
        return (() => {
          var t = He(),
            r = t.firstChild;
          return (
            s(r, () => o("Wallet")),
            s(
              t,
              e(y, {
                name: "Transaction",
                class:
                  "ml-auto h-8 rounded-lg bg-layer5 p-2 text-secondary mr-12 w-8",
                onClick: () => a("/wallet/transaction"),
              }),
              null
            ),
            t
          );
        })();
      },
      get children() {
        var t = Fe();
        return (
          s(
            t,
            e(p, {
              value: i ? 1 : 0,
              get children() {
                return [
                  e(p.TabItem, {
                    class: "flex-col flex-auto bg-transparent",
                    get title() {
                      return o("Deposit");
                    },
                    get children() {
                      return e(q, {
                        isFiat: !0,
                        get currencyName() {
                          return v.store.fiatCurrency;
                        },
                      });
                    },
                  }),
                  e(p.TabItem, {
                    class: "flex-col flex-auto bg-transparent",
                    get title() {
                      return o("Withdraw");
                    },
                    get children() {
                      return e(he, { isPcDialog: !0 });
                    },
                  }),
                ];
              },
            })
          ),
          t
        );
      },
    })
  );
}
function Ct() {
  const {
    isSpHost: a,
    isKenyaHost: n,
    isNgHost: i,
    isBrHost: t,
    isIdHost: r,
    isSportsHost: l,
    isBrAuditHost: u,
    isNg2Host: m,
  } = R.getHostType(le.host);
  return n
    ? e(Ke, {})
    : a
    ? e(Me, {})
    : t || u || l || r || i || m
    ? e(je, {})
    : e(me, {});
}
export { Ct as default };
