var ze = Object.defineProperty;
var Pe = Object.getOwnPropertySymbols;
var Qe = Object.prototype.hasOwnProperty,
  Ze = Object.prototype.propertyIsEnumerable;
var We = (e, t, n) =>
    t in e
      ? ze(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  fe = (e, t) => {
    for (var n in t || (t = {})) Qe.call(t, n) && We(e, n, t[n]);
    if (Pe) for (var n of Pe(t)) Ze.call(t, n) && We(e, n, t[n]);
    return e;
  };
var V = (e, t, n) =>
  new Promise((i, a) => {
    var s = (y) => {
        try {
          d(n.next(y));
        } catch (v) {
          a(v);
        }
      },
      c = (y) => {
        try {
          d(n.throw(y));
        } catch (v) {
          a(v);
        }
      },
      d = (y) => (y.done ? i(y.value) : Promise.resolve(y.value).then(s, c));
    d((n = n.apply(e, t)).next());
  });
import {
  c as r,
  i as l,
  m as p,
  t as o,
  e as I,
  a as O,
  d as z,
  s as A,
  u as et,
  b as Me,
} from "./web-da7da7e5.js";
import {
  I as be,
  N as $e,
  k as P,
  j as le,
  u as Te,
  D as x,
  A as _e,
  n as ne,
  s as k,
  B as j,
  t as _,
  E as X,
  m as ae,
  p as M,
  P as Q,
  C as tt,
  o as R,
  h as de,
  a as xe,
  q as Ce,
  c as rt,
  L as nt,
  S as at,
  r as lt,
  v as it,
  x as Ue,
  e as ct,
  b as st,
} from "./manifest-e0f0ba59.js";
import {
  S as $,
  e as Z,
  f as ce,
  g as ee,
  M as S,
  c as K,
  F as ge,
  b as Y,
  d as E,
  o as Ne,
} from "./solid-js-2e15682c.js";
import { t as m, T as ke } from "./i18n-9b1e4bd8.js";
import { W as se } from "./bethistory-fcf99adb.js";
import { W as me } from "./withdrawFiat-1254e3b3.js";
import { c as ue, p as F } from "./store-2ed2b91e.js";
import { W as he, F as ut } from "./Loading-72a9f35e.js";
import { W as J } from "./Icon-b6e375d0.js";
import {
  u as ot,
  A as dt,
  l as De,
  s as mt,
  g as Se,
  i as ie,
  a as Ae,
  b as Le,
  c as Fe,
  d as gt,
  e as ht,
  f as ft,
  P as yt,
  h as vt,
  M as wt,
} from "./AboutJb-13924d78.js";
import { C as bt } from "./CircleCountdown-885da069.js";
import { C as $t } from "./CopyInput-441aca40.js";
import { g as _t } from "./lib-6879580e.js";
import { s as pe } from "./sortBy-6b2810fa.js";
import { c as G } from "./store-eb5336a3.js";
import { d as xt } from "./debounce-2947036d.js";
import { i as Ct, m as Ve } from "./memoize-ff109130.js";
import { g as Nt } from "./groupBy-5d1dee29.js";
import { AboutBclPage as kt } from "./AboutBcl-bcb4cc45.js";
import { a as St } from "./SelectCurrency-0ef42d5c.js";
import { E as pt } from "./ErrorRest-1a0f0516.js";
var It = "Expected a function";
function Pt(e, t, n) {
  var i = !0,
    a = !0;
  if (typeof e != "function") throw new TypeError(It);
  return (
    Ct(n) &&
      ((i = "leading" in n ? !!n.leading : i),
      (a = "trailing" in n ? !!n.trailing : a)),
    xt(e, t, { leading: i, maxWait: t, trailing: a })
  );
}
var Wt = o(
    '<div class="mb-1 font-semibold text-secondary mt-5"><div><span></span><span class=text-error>(<!>)'
  ),
  Tt = o('<div class="mb-1 font-semibold text-secondary mt-5"><span>'),
  Dt = o("<span class=text-error>(<!>)");
function At(e) {
  const t = e.currency === "XRP";
  return r($, {
    when: t,
    get fallback() {
      return [
        (() => {
          var n = Tt(),
            i = n.firstChild;
          return (
            l(i, () => e.tagName),
            l(
              n,
              (() => {
                var a = p(() => e.currency !== "TRTL");
                return () =>
                  a() &&
                  (() => {
                    var s = Dt(),
                      c = s.firstChild,
                      d = c.nextSibling;
                    return d.nextSibling, l(s, () => m("Required"), d), s;
                  })();
              })(),
              null
            ),
            n
          );
        })(),
        r(be, {
          get value() {
            return e.value;
          },
          get onChange() {
            return e.onChange;
          },
          get placeholder() {
            return e.tagName;
          },
          class: "text-base font-semibold",
        }),
      ];
    },
    get children() {
      var n = Wt(),
        i = n.firstChild,
        a = i.firstChild,
        s = a.nextSibling,
        c = s.firstChild,
        d = c.nextSibling;
      return (
        d.nextSibling,
        l(a, () => e.tagName),
        l(s, () => m("Required"), d),
        l(
          n,
          r($e, {
            min: 0,
            max: 9999999999,
            onChange: (y) => e.onChange(Math.ceil(y).toString()),
            get value() {
              return Number(e.value);
            },
            get placeholder() {
              return m("Please enter a tag (digital numbers)");
            },
            get class() {
              return P("text-base font-semibold", e.class);
            },
          }),
          null
        ),
        n
      );
    },
  });
}
var Lt = o(
  '<div><div class="flex mr-1 items-center"><span class="text-secondary mr-1">:</span><span></span></div><div class=flex>'
);
function Ie(e, t) {
  return t
    ? new Promise((n) => n(t))
    : le().get(`/balance-controller/balance/unlocked/${e}/`);
}
function je(e) {
  const t = () =>
      e.balance
        ? new Promise((i) => i(e.balance))
        : Ie(e.currencyName, e.balance),
    [n] = Z(() => e.currencyName + JSON.stringify(e.balance), t);
  return r(ce, {
    get children() {
      return r($, {
        get when() {
          return n();
        },
        children: (i) => {
          const a = () => Number(i().unlockedBalance),
            s = () => Number(i().lockedBalance);
          return (() => {
            var c = Lt(),
              d = c.firstChild,
              y = d.firstChild,
              v = y.firstChild,
              u = y.nextSibling,
              h = d.nextSibling;
            return (
              l(y, () => m("Available"), v),
              l(u, () => Te.formatBalance(new x(a()))),
              l(
                h,
                r(_e, {
                  class: "text-secondary mr-1 text-right underline",
                  href: "/rollover",
                  get children() {
                    return [p(() => m("Locked funds")), ":"];
                  },
                }),
                null
              ),
              l(h, () => Te.formatBalance(new x(s())), null),
              I(() => O(c, P("flex justify-between", e.class))),
              c
            );
          })();
        },
      });
    },
  });
}
var Ft = o("<div>");
function Rt(e) {
  return r(ee, {
    get fallback() {
      return r(ne, {
        get children() {
          return m(
            "For security purposes, large or suspicious withdrawal may take 1-6 hours for audit process. We appreciate your patience!"
          );
        },
      });
    },
    get children() {
      return [
        r(S, {
          get when() {
            return e.currency === "XLM" || e.currency === "XRP";
          },
          get children() {
            return r(ne, {
              get children() {
                return m("We do not support inactive addresses");
              },
            });
          },
        }),
        r(S, {
          get when() {
            return e.currency === "BCD";
          },
          children: (t) =>
            r(ne, {
              type: "info",
              get children() {
                var n = Ft();
                return (
                  l(
                    n,
                    r(ke, {
                      i18nKey: "wallet.trans.desc47",
                      get children() {
                        return [
                          "Withdrawals can only be made to either the",
                          " ",
                          r(_e, {
                            class: "underline",
                            href: "https://cwallet.com/",
                            target: "_blank",
                            children: "Cwallet",
                          }),
                          "or a decentralized wallet to prevent potential asset loss.",
                        ];
                      },
                    })
                  ),
                  n
                );
              },
            }),
        }),
      ];
    },
  });
}
var Et = o(
    '<div class="flex justify-between font-semibold text-secondary mb-1.5 mt-5"><div></div><div>: <span> '
  ),
  Bt = o('<div class="flex justify-between mt-1">');
const Ot = (e, t, n) => (t === 0 ? n : new x(e).mul(t).toNumber());
function Ke(e) {
  const t = () => e.max > e.min,
    n = K(() =>
      e.max === 0
        ? { min: 0, max: 0 }
        : e.max < e.min
        ? { min: 0, max: e.max }
        : { min: e.min, max: e.max }
    ),
    i = [
      { label: m("Min"), num: 0 },
      { label: "25%", num: 0.25 },
      { label: "50%", num: 0.5 },
      { label: m("Max"), num: 1 },
    ];
  return [
    (() => {
      var a = Et(),
        s = a.firstChild,
        c = s.nextSibling,
        d = c.firstChild,
        y = d.nextSibling,
        v = y.firstChild;
      return (
        l(s, () => m("Withdraw amount")),
        l(c, () => m("Min"), d),
        l(y, () => e.min, v),
        l(y, () => k.getAlias(e.currency), null),
        I(() => O(y, P(e.amount < e.min && "text-error"))),
        a
      );
    })(),
    r($e, {
      get value() {
        return e.amount;
      },
      get onChange() {
        return e.onChange;
      },
      get min() {
        return n().min;
      },
      get max() {
        return n().max;
      },
      get disabled() {
        return e.disabled;
      },
      get class() {
        return P("text-base font-semibold", e.class);
      },
    }),
    (() => {
      var a = Bt();
      return (
        l(
          a,
          r(ge, {
            each: i,
            children: (s) =>
              r(j, {
                class: "h-8 bg-layer6 text-secondary w-[24%]",
                type: "second",
                onClick: (c) => {
                  c.preventDefault(),
                    t() && e.onChange(Ot(n().max, s.num, n().min));
                },
                get children() {
                  return s.label;
                },
              }),
          })
        ),
        a
      );
    })(),
  ];
}
var Mt = o(
    '<div class="flex h-8 items-center justify-between text-base font-semibold sm:text-sm"><div></div><div>'
  ),
  Re = o("<div>"),
  Ut = o("<div class=mr-1>"),
  Vt = o('<div class="flex items-center text-secondary">');
function ye(e) {
  return (() => {
    var t = Mt(),
      n = t.firstChild,
      i = n.nextSibling;
    return (
      l(n, () => e.title),
      l(
        i,
        r($, {
          get when() {
            return e.convertCurrency;
          },
          get fallback() {
            return (() => {
              var a = Re();
              return (
                l(
                  a,
                  () =>
                    `${k.toCryptoStr(e.amount, e.currencyName)} ${
                      e.currencyName
                    }`
                ),
                a
              );
            })();
          },
          children: (a) => [
            (() => {
              var s = Ut();
              return (
                l(
                  s,
                  () =>
                    `${k.toCryptoStr(e.amount, e.currencyName)} ${k.getAlias(
                      e.currencyName
                    )}`
                ),
                s
              );
            })(),
            (() => {
              var s = Re();
              return (
                l(
                  s,
                  () =>
                    `(${k.toCryptoStr(
                      new x(e.amount).mul(e.getRate()),
                      a()
                    )} ${k.getAlias(a())})`
                ),
                s
              );
            })(),
          ],
        })
      ),
      I(
        (a) => {
          var s = P(
              "text-secondary flex items-center",
              e.brand && "text-brand"
            ),
            c = P("font-extrabold center", e.brand && "text-brand");
          return s !== a.e && O(n, (a.e = s)), c !== a.t && O(i, (a.t = c)), a;
        },
        { e: void 0, t: void 0 }
      ),
      t
    );
  })();
}
function jt(e) {
  const [t, n] = ue({
      error: "",
      loading: !0,
      expiredTime: 0,
      f: "0",
      fromCurrencyName: e.convertCurrency,
      fromCurrencyPrice: "0",
      toCurrencyName: e.currencyName,
      toCurrencyPrice: "0",
    }),
    i = () => {
      n({ error: "", loading: !0 }),
        le()
          .post("/game/support/swap/price/", {
            fromCurrencyName: e.convertCurrency,
            toCurrencyName: e.currencyName,
            swapType: 5,
          })
          .then((c) => {
            n(
              F((d) => {
                (d.error = ""),
                  (d.loading = !1),
                  (d.expiredTime = c.expiredTime),
                  (d.f = c.f),
                  (d.fromCurrencyPrice = c.fromCurrencyPrice),
                  (d.toCurrencyPrice = c.toCurrencyPrice);
              })
            );
          })
          .catch((c) => {
            n({ error: c.message, loading: !1 }), _(c);
          });
    },
    a = K(() =>
      e.convertCurrency
        ? new x(t.toCurrencyPrice).div(t.fromCurrencyPrice).toNumber()
        : 1
    ),
    s = r($, {
      get when() {
        return e.convertCurrency;
      },
      children: (c) =>
        (() => {
          var d = Vt();
          return (
            l(
              d,
              r(bt, {
                get endTime() {
                  return t.expiredTime;
                },
                onComplete: i,
              }),
              null
            ),
            l(
              d,
              () =>
                ` 1 ${k.getAlias(e.currencyName)} ≈ ${a().toFixed(
                  2
                )} ${k.getAlias(c())}`,
              null
            ),
            d
          );
        })(),
    });
  return { getRate: a, circle: s };
}
var Kt = o("<div>"),
  Yt = o("<div class=ml-1>"),
  qt = o('<div class="flex center flex-auto">'),
  Ht = o(
    '<div class="mt-2 flex items-center justify-between"><div class=text-secondary></div><div>'
  ),
  Jt = o(
    '<div class="text-base font-semibold sm:text-sm"><div class="mb-4 mt-4 border-b text-center border-third pb-4"><div class=text-secondary></div><div class="text-2xl font-extrabold"></div></div><div class="mt-2 flex items-center justify-between"><div class=text-secondary></div><div class="rounded px-2 bg-[#31EE93]/20"></div></div><div class="mt-2 flex items-center justify-between"><div class=text-secondary></div></div><div class="mt-2 flex items-center justify-between"><div class="flex items-center text-secondary"><span class=mr-1></span> </div><div class=val></div></div><div class="mt-2 flex items-center justify-between"><div class=text-secondary></div><div class=text-brand>'
  ),
  Gt = o('<div class="font-semibold text-secondary mb-1.5 mt-5">'),
  Xt = o('<div class="mt-5 border-t border-third pt-4">'),
  zt = o("<div><div>"),
  Qt = o("<span class=cl-primary>(<!> <!> <!>)");
function Zt(e) {
  return V(this, null, function* () {
    return ae.vipLevel < 38
      ? { canFeeDeduct: !1 }
      : {
          canFeeDeduct: (yield se.deduction(e.currencyGroupName, e.chain))
            .canFeeDeduct,
        };
  });
}
function er(e) {
  return V(this, null, function* () {
    const t = yield se.getRange(e.currencyGroupName, e.chain);
    return { isFastWithdraw: t.directWithdrawable, fee: Number(t.normalFee) };
  });
}
function Ye(e) {
  const t = () => k.getCurrency(e.currencyName),
    {
      token: n,
      switchNode: i,
      typeTxt: a,
    } = ot({ currencyInfo: t, switchAddrType: !0 }),
    [s] = Z(
      () => n(),
      () => {
        var c;
        return Promise.all([
          Zt(n()),
          er(n()),
          Ie((c = e.convertCurrency) != null ? c : e.currencyName),
        ]);
      }
    );
  return r(ce, {
    get fallback() {
      return (() => {
        var c = Kt();
        return l(c, r(he, {})), I(() => O(c, P(e.class))), c;
      })();
    },
    get children() {
      return [
        p(() => e.children),
        p(() => i()),
        r($, {
          get when() {
            return n().canWithdraw;
          },
          get fallback() {
            return r(X, {
              get children() {
                return m("Under Maintenance");
              },
            });
          },
          get children() {
            return r($, {
              get when() {
                return s();
              },
              get fallback() {
                return r(X, {
                  get children() {
                    return s.error;
                  },
                });
              },
              children: (c) =>
                r(rr, {
                  get currencyName() {
                    return e.currencyName;
                  },
                  get typeTxt() {
                    return a();
                  },
                  get token() {
                    return n();
                  },
                  get isPcDialog() {
                    return e.isPcDialog;
                  },
                  get canFeeDeduct() {
                    return c()[0].canFeeDeduct;
                  },
                  get feeObj() {
                    return c()[1];
                  },
                  get balanceObj() {
                    return c()[2];
                  },
                  get convertCurrency() {
                    return e.convertCurrency;
                  },
                }),
            });
          },
        }),
      ];
    },
  });
}
function qe() {
  return (() => {
    var e = Yt();
    return (
      (e.$$click = (t) => {
        t.stopPropagation(),
          M.push(() =>
            r(Q, {
              get children() {
                var n = qt();
                return (
                  l(n, () =>
                    m("Unlock at VIP 38. No-fee withdrawal once per day.")
                  ),
                  n
                );
              },
            })
          );
      }),
      l(e, r(J, { name: "Help", class: "icon-help" })),
      e
    );
  })();
}
function tr(e) {
  function t(i) {
    return e.convertCurrency
      ? `${k.toCryptoStr(
          new x(i).mul(e.getRate()),
          e.convertCurrency
        )} ${k.getAlias(e.convertCurrency)}`
      : `${k.toCryptoStr(new x(i), e.currencyName)} ${k.getAlias(
          e.currencyName
        )}`;
  }
  const n = () =>
    V(this, null, function* () {
      R.emit("track_other_events", { e: "withdrawClick" });
      const i = m(
        "Congratulations! Your withdrawal of __amount_name__ is in progress! For security purposes, any large or suspicious withdrawal amounts will be audited and manually processed. As always we appreciate your patience!",
        { amount_name: t(e.amount) }
      );
      ar(
        e.currencyName,
        e.address,
        e.memo,
        e.convertCurrency
          ? k.toCryptoStr(new x(e.amount).mul(e.getRate()), e.convertCurrency)
          : String(e.amount),
        e.checked,
        String(e.fee),
        e.isFastWithdraw,
        e.token,
        i,
        e.convertCurrency
      )
        .then((a) => {
          R.emit("track_other_events", { e: "withdrawOrderSuccess" }),
            e.reset(),
            M.pop();
        })
        .catch(_);
    });
  return r(Q, {
    get title() {
      return m("Confirm Withdraw");
    },
    get children() {
      var i = Jt(),
        a = i.firstChild,
        s = a.firstChild,
        c = s.nextSibling,
        d = a.nextSibling,
        y = d.firstChild,
        v = y.nextSibling,
        u = d.nextSibling,
        h = u.firstChild,
        f = u.nextSibling,
        g = f.firstChild,
        b = g.firstChild;
      b.nextSibling;
      var w = g.nextSibling,
        B = f.nextSibling,
        W = B.firstChild,
        C = W.nextSibling;
      return (
        l(s, () => m("You’ll receive")),
        l(c, () => t(e.reciveAmount)),
        l(y, () => m("Network")),
        l(v, () => e.network),
        l(h, () => m("Address")),
        l(
          u,
          r(dt, {
            class: "val address",
            get address() {
              return e.address;
            },
          }),
          null
        ),
        l(
          i,
          r($, {
            get when() {
              return e.memo;
            },
            get children() {
              var N = Ht(),
                T = N.firstChild,
                L = T.nextSibling;
              return l(T, () => m("Memo")), l(L, () => e.memo), N;
            },
          }),
          f
        ),
        l(b, () => m("Fee")),
        l(g, r(qe, {}), null),
        l(w, () => t(e.fee)),
        l(W, () => m("Withdraw Amount")),
        l(C, () => t(e.amount)),
        l(
          i,
          r(ne, {
            class: "mt-2 font-normal",
            type: "info",
            get children() {
              return m(
                "Ensure the address is correct and on the same network. Once confirmed, the transaction is non-refundable or non-cancellable."
              );
            },
          }),
          null
        ),
        l(
          i,
          r(j, {
            type: "brand",
            class: "w-full mt-5",
            onClick: n,
            get children() {
              return m("Withdraw");
            },
          }),
          null
        ),
        i
      );
    },
  });
}
function rr(e) {
  const t = ae.vipLevel,
    [n, i] = Y(0),
    [a, s] = ue({
      currencyName: e.currencyName,
      address: "",
      memo: "",
      amount: Math.min(
        Number(e.balanceObj.unlockedBalance),
        Number(e.token.withdrawLimitAmount)
      ),
      checked: !1,
      hasJbdc: e.canFeeDeduct,
      balance: null,
    }),
    c = () => (a.checked ? 0 : e.feeObj.fee),
    d = () => new x(e.token.withdrawLimitAmount).add(c()).toNumber(),
    y = () => Number(e.balanceObj.unlockedBalance || "0"),
    v = K(() => new x(Math.max(new x(a.amount).sub(c()).toNumber(), 0)));
  E(() => {
    (e.currencyName || e.token) &&
      s(
        F((g) => {
          (g.currencyName = e.currencyName),
            (g.address = ""),
            (g.memo = ""),
            (g.amount = Math.min(
              Number(e.balanceObj.unlockedBalance),
              Number(e.token.withdrawLimitAmount)
            )),
            (g.checked = !1),
            (g.hasJbdc = e.canFeeDeduct),
            (g.balance = null);
        })
      );
  });
  const { getRate: u, circle: h } = jt({
      convertCurrency: e.convertCurrency,
      fee: e.feeObj.fee,
      currencyName: e.currencyName,
    }),
    f = () => {
      nr(a, e.feeObj, e.token, v().toNumber()) &&
        M.push(() =>
          r(tr, {
            get convertCurrency() {
              return e.convertCurrency;
            },
            getRate: u,
            get isFastWithdraw() {
              return e.feeObj.isFastWithdraw;
            },
            get memo() {
              return a.memo;
            },
            get checked() {
              return a.checked;
            },
            get token() {
              return e.token;
            },
            get amount() {
              return a.amount;
            },
            get reciveAmount() {
              return v().toNumber();
            },
            get address() {
              return a.address;
            },
            get fee() {
              return p(() => !!a.checked)() ? 0 : c();
            },
            get currencyName() {
              return a.currencyName;
            },
            get network() {
              return e.token.label;
            },
            reset: () => {
              a.checked &&
                s({ hasJbdc: !1, checked: !1, address: "", memo: "" });
            },
          })
        );
    };
  return [
    (() => {
      var g = Gt();
      return (
        l(g, () => m("Withdrawal Address"), null),
        l(
          g,
          (() => {
            var b = p(() => !!e.typeTxt);
            return () =>
              b() &&
              (() => {
                var w = Qt(),
                  B = w.firstChild,
                  W = B.nextSibling,
                  C = W.nextSibling,
                  N = C.nextSibling,
                  T = N.nextSibling,
                  L = T.nextSibling;
                return (
                  L.nextSibling,
                  l(w, () => m("Note:"), W),
                  l(w, () => m("Only"), N),
                  l(w, () => e.typeTxt, L),
                  w
                );
              })();
          })(),
          null
        ),
        g
      );
    })(),
    r(be, {
      get placeholder() {
        return m("Fill in carefully according to the specific currency");
      },
      get value() {
        return a.address;
      },
      onChange: (g) => s({ address: g }),
      class: "text-base font-semibold",
    }),
    p(
      () =>
        p(() => !!e.token.tagName)() &&
        r(At, {
          get currency() {
            return e.currencyName;
          },
          get tagName() {
            return e.token.tagName;
          },
          get value() {
            return a.memo;
          },
          onChange: (g) =>
            s(
              F((b) => {
                b.memo = g;
              })
            ),
        })
    ),
    r(Ke, {
      get max() {
        return y();
      },
      get min() {
        return p(() => !!e.convertCurrency)()
          ? Number(new x(d()).mul(u()).toFixed(2, x.ROUND_DOWN))
          : d();
      },
      get currency() {
        var g;
        return (g = e.convertCurrency) != null ? g : e.currencyName;
      },
      get amount() {
        return p(() => !!e.convertCurrency)() ? n() : a.amount;
      },
      onChange: (g) => {
        e.convertCurrency
          ? (i(Number(new x(g).toFixed(2, x.ROUND_DOWN))),
            s({ amount: u() ? new x(g).div(u()).toNumber() : 0 }))
          : s({ amount: g });
      },
    }),
    r(je, {
      get currencyName() {
        var g;
        return (g = e.convertCurrency) != null ? g : e.currencyName;
      },
      get balance() {
        return e.balanceObj;
      },
      class: "mt-5",
    }),
    (() => {
      var g = Xt();
      return (
        l(g, h, null),
        l(
          g,
          r(ye, {
            brand: !0,
            getRate: u,
            get amount() {
              return v();
            },
            get currencyName() {
              return e.currencyName;
            },
            get convertCurrency() {
              return e.convertCurrency;
            },
            get title() {
              return m("Withdraw amount");
            },
          }),
          null
        ),
        l(
          g,
          r(ye, {
            getRate: u,
            get amount() {
              return new x(a.checked ? 0 : c());
            },
            get currencyName() {
              return e.currencyName;
            },
            get convertCurrency() {
              return e.convertCurrency;
            },
            get title() {
              return [
                p(() => m("Fee")),
                ":",
                r($, {
                  when: t < 38,
                  get children() {
                    return r(J, {
                      name: "Help",
                      class: "ml-1",
                      onClick: () =>
                        M.push(() =>
                          r(Q, {
                            get children() {
                              return m(
                                "Unlock at VIP 38. No-fee withdrawal once per day."
                              );
                            },
                          })
                        ),
                    });
                  },
                }),
              ];
            },
          }),
          null
        ),
        l(
          g,
          r(ye, {
            getRate: u,
            get amount() {
              return new x(a.amount);
            },
            get currencyName() {
              return e.currencyName;
            },
            get convertCurrency() {
              return e.convertCurrency;
            },
            get title() {
              return m("Total Withdraw amount");
            },
          }),
          null
        ),
        g
      );
    })(),
    r($, {
      when: t >= 38,
      get children() {
        var g = zt(),
          b = g.firstChild;
        return (
          (g.$$click = () =>
            a.hasJbdc && s(F((w) => (w.checked = !w.checked)))),
          l(
            g,
            r(tt, {
              get value() {
                return a.checked;
              },
              get class() {
                return P(
                  !a.hasJbdc && "pointer-events-none opacity-50",
                  "mr-1"
                );
              },
            }),
            b
          ),
          l(b, () => m("Fee-free withdrawal")),
          l(g, r(qe, {}), null),
          I(
            (w) => {
              var B = P("flex items-center"),
                W = P(!a.hasJbdc && "pointer-events-none opacity-50");
              return (
                B !== w.e && O(g, (w.e = B)), W !== w.t && O(b, (w.t = W)), w
              );
            },
            { e: void 0, t: void 0 }
          ),
          g
        );
      },
    }),
    r(j, {
      type: "brand",
      onClick: f,
      class: "w-full my-4",
      get disabled() {
        return a.amount < d() || !a.address;
      },
      get children() {
        return m("Preview");
      },
    }),
    r(Rt, {
      get currency() {
        return e.currencyName;
      },
    }),
  ];
}
function nr(e, t, n, i) {
  return !t.isFastWithdraw && !e.address
    ? (_.error(m("Please fill in the correct withdrawal address")), !1)
    : n.tagName && !e.memo && e.currencyName != "TRTL"
    ? (_.error(n.tagName + " " + m("cannot be empty")), !1)
    : e.amount
    ? i <= 0
      ? (_.error(m("Withdrawal amount should be greater than the fee")), !1)
      : e.currencyName === "XRP" &&
        (!e.memo || !Number.isInteger(Number(e.memo)))
      ? (_.error(m("Please fill in the correct tag")), !1)
      : !0
    : (_.error(m("Please enter the correct withdrawal amount.")), !1);
}
function ar(e, t, n, i, a, s, c, d, y, v) {
  return V(this, null, function* () {
    const u = yield R.promisify("get_twostep")();
    if (!u) return !1;
    const { code: h, timestamp: f, verifyType: g } = u;
    let b = {
      currencyName: e,
      withdrawAddress: t,
      withdrawAddressMemo: n,
      amount: i,
      fee: s,
      useFeeDeduct: a,
      code: h,
      withdrawVerifyType: g,
      chain: d.chain,
      timestamp: Number(f),
    };
    try {
      v
        ? (yield le().post(
            "/payment/withdraw/swap/create/",
            Object.assign(b, { fiatCurrencyName: v })
          ),
          _.success(y))
        : (c
            ? yield le().post("/user/open/withdrawal/", b)
            : yield se.withdraw(b),
          _.success(y),
          R.emit("sensorsTrack", {
            event: "withdraw_click",
            coin_type: b.currencyName,
            amount: b.amount,
            amount_fiat: k.convertCurrency(new x(i), b.currencyName) + " USD",
            is_succes: !0,
            fail_reason: "",
          }));
    } catch (w) {
      _(w),
        R.emit("sensorsTrack", {
          event: "withdraw_click",
          coin_type: b.currencyName,
          amount: b.amount,
          amount_fiat: k.convertCurrency(new x(i), b.currencyName) + " USD",
          is_succes: !1,
          fail_reason: w.message.toString(),
        });
    }
  });
}
z(["click"]);
const He = "/modules/wallet2/assets/lightning-1b2931dc.png";
var lr = o(
    '<div><img class="block h-32 w-32 rounded-xl mx-auto mb-5"alt=""><div class="mb-1 flex items-center"><img class="h-3 w-3">'
  ),
  ir = o(
    '<div class="flex items-center items-stretch"><img class="mr-2 h-8 w-8"alt=""><div class=""><div class=text-second></div><div class=font-extrabold>Lnurl'
  ),
  cr = o("<div class=my-4><div class=font-extrabold>"),
  sr = o('<div class=center><img class="mr-1 h-6 w-6 my-1"alt="">LNURL');
function ur() {
  const [e, t] = Y(""),
    n = () =>
      V(this, null, function* () {
        const i = yield R.promisify("get_twostep")();
        if (!i) return;
        const { code: a, timestamp: s, verifyType: c } = i;
        try {
          const d = yield se.satsCreate(a, c, Number(s));
          t(d);
        } catch (d) {
          _(d), d.code === 4002 && n();
        }
      });
  return r(Q, {
    get children() {
      return r($, {
        get when() {
          return e();
        },
        get fallback() {
          return [
            (() => {
              var i = ir(),
                a = i.firstChild,
                s = a.nextSibling,
                c = s.firstChild;
              return A(a, "src", He), l(c, () => m("Withdraw with")), i;
            })(),
            (() => {
              var i = cr(),
                a = i.firstChild;
              return (
                l(a, () => m("Bitcoin Lightning Network")),
                l(
                  i,
                  r(j, {
                    type: "brand",
                    onClick: () => n(),
                    class: "w-full mt-5",
                    get children() {
                      return m("Withdraw");
                    },
                  }),
                  null
                ),
                i
              );
            })(),
          ];
        },
        get children() {
          var i = lr(),
            a = i.firstChild,
            s = a.nextSibling,
            c = s.firstChild;
          return (
            A(a, "src", `/game/support/qrcode/320/?text=${e}`),
            l(s, () => m("LNURL (Scan to open LNURL with your wallet)"), null),
            l(
              i,
              r($t, {
                get value() {
                  return e();
                },
              }),
              null
            ),
            I(() => A(c, "src", de.coinIcon("SATS"))),
            i
          );
        },
      });
    },
  });
}
function or() {
  return (() => {
    var e = sr(),
      t = e.firstChild;
    return (e.$$click = () => M.push(() => r(ur, {}))), A(t, "src", He), e;
  })();
}
z(["click"]);
var Ee = o('<div class="text-secondary mt-5">'),
  dr = o(
    '<div><div class="text-center my-2">Or</div><div class="rounded-xl p-4 text-center bg-input_bright"><div class="tit text-secondary"></div><div class=support-wrap>'
  ),
  mr = o(
    '<textarea class="w-full rounded-xl p-4 mt-1 bg-input_bright"name=""id=""cols=30 rows=10 placeholder="">'
  );
function gr() {
  const [e, t] = ue({
    btnloading: !0,
    hasWebln: !0,
    amount: 1e3,
    code: "",
    receipts: "",
  });
  Ne(() => {
    De.requestProvider()
      .then((s) => {
        t(
          F((c) => {
            (c.btnloading = !1), (c.hasWebln = !0);
          })
        );
      })
      .catch((s) => {
        t(
          F((c) => {
            (c.btnloading = !1), (c.hasWebln = !1);
          })
        );
      });
  });
  const n = (s) =>
      V(this, null, function* () {
        if (!s) return new Error(m("Invalid payment request."));
        const c = yield R.promisify("get_twostep")();
        if (!c) return;
        const { code: d, timestamp: y, verifyType: v } = c,
          u = m("Done!");
        try {
          yield se.withdrawSats(s, d, v, Number(y)), _.success(u);
        } catch (h) {
          _(h), h.code === 4002 && n(s);
        }
      }),
    i = (s) =>
      V(this, null, function* () {
        t(F((c) => (c.btnloading = !1)));
        try {
          yield n(s);
        } catch (c) {
          _(c);
        }
        t(F((c) => (c.btnloading = !1)));
      }),
    a = (s) =>
      V(this, null, function* () {
        try {
          const c = yield De.requestProvider();
          let { paymentRequest: d } = yield c.makeInvoice({ amount: s });
          yield n(d);
        } catch (c) {
          _.error(c.message);
        }
      });
  return (() => {
    var s = dr(),
      c = s.firstChild,
      d = c.nextSibling,
      y = d.firstChild,
      v = y.nextSibling;
    return (
      l(
        s,
        r($, {
          get when() {
            return e.hasWebln;
          },
          get fallback() {
            return [
              (() => {
                var u = Ee();
                return (
                  l(u, () =>
                    m("Paste your invoice here (Min __number__ SATS)", {
                      number: "20000",
                    })
                  ),
                  u
                );
              })(),
              (() => {
                var u = mr();
                return (
                  u.addEventListener("change", (h) =>
                    t(
                      F((f) => {
                        f.receipts = h.target.value;
                      })
                    )
                  ),
                  I(() => (u.value = e.receipts)),
                  u
                );
              })(),
              r(j, {
                type: "brand",
                class: "w-full mt-5",
                get disabled() {
                  return e.btnloading;
                },
                onClick: () => i(e.receipts),
                get children() {
                  return m("Confirm");
                },
              }),
            ];
          },
          get children() {
            return [
              (() => {
                var u = Ee();
                return l(u, () => m("Withdraw amount")), u;
              })(),
              r($e, {
                placeholder: ">=1000",
                get value() {
                  return e.amount;
                },
                class: "text-base font-semibold mt-5",
                type: "number",
                min: 1e3,
                onChange: (u) => t(F((h) => (h.amount = Number(u)))),
              }),
              r(j, {
                type: "brand",
                class: "w-full mt-5",
                get disabled() {
                  return e.btnloading;
                },
                onClick: () => a(e.amount),
                get children() {
                  return m("Confirm");
                },
              }),
            ];
          },
        }),
        c
      ),
      l(y, () => m("Support Withdraw With")),
      l(v, r(or, {})),
      s
    );
  })();
}
var hr = o(
  '<div class="flex items-center rounded-lg bg-success/10 p-2 my-4"><img class="mr-1.5 h-10 w-10"alt=""><div class=text-secondary><div></div><div><span class=text-brand>'
);
function fr({ widthdraw: e }) {
  return (() => {
    var t = hr(),
      n = t.firstChild,
      i = n.nextSibling,
      a = i.firstChild,
      s = a.nextSibling,
      c = s.firstChild;
    return (
      A(n, "src", mt),
      l(a, () =>
        e
          ? m(
              "Redirecting to withdrawal page, supported by __ENV_HOST__ official and trusted providers."
            )
          : m(
              "Redirecting to deposit page, supported by __ENV_HOST__ official and trusted providers."
            )
      ),
      l(s, () => m("For any questions, contact our 24hrs"), c),
      (c.$$click = () => R.emit("live_support")),
      l(c, () => m("Live Support")),
      t
    );
  })();
}
z(["click"]);
var yr = o("<p class=text-center>");
function Be(e) {
  return r(Q, {
    get children() {
      return [
        (() => {
          var t = yr();
          return (
            l(
              t,
              r(ke, {
                i18nKey: "wallet.trans.desc129",
                get children() {
                  return [
                    "To check the result of withdraw, please go to",
                    r(_e, {
                      class: "mx-1 text-brand underline",
                      href: "/wallet/transaction?type=withdraw",
                      children: "Transaction",
                    }),
                    "panel. Feel free to contact our customer service.",
                  ];
                },
              })
            ),
            t
          );
        })(),
        r(j, {
          type: "brand",
          class: "mt-5",
          onClick: () => M.pop(),
          get children() {
            return m("OK");
          },
        }),
        r($, {
          get when() {
            return e.redirectUrl;
          },
          get children() {
            return r(fr, { widthdraw: !0 });
          },
        }),
      ];
    },
  });
}
var vr = o(
    '<div class="mb-1 flex items-center mt-5 justify-end"><div class=ml-1>'
  ),
  wr = o('<div><img alt=""class=h-7><div>'),
  br = o("<div>"),
  $r = o('<div class="text-secondary font-semibold">'),
  _r = o('<div class=card><img alt=""><div class=nums>'),
  xr = o('<div class=mt-5><label class="mb-1 font-semibold text-secondary">');
function Cr(e) {
  const t = xe(),
    n = {
      label: "",
      value: {
        applyId: "",
        bindStatus: "BIND",
        cardAssociation: "",
        cardId: "",
        cardNumber: "",
        accountNumber: "",
        accountId: "",
        cardType: "DEBIT",
        firstName: "",
        lastName: "",
      },
    },
    i = () => {
      var u;
      return (u = e.item.mapInfo) == null ? void 0 : u.length;
    },
    [a] = Z(() => Se()),
    s = K(() => {
      const u = e.item.mapInfo
          ? e.item.mapInfo.map((f) => ({ label: f.cardNumber, value: f }))
          : [],
        h = pe(
          u.filter((f) => f.value.cardType === "DEBIT"),
          [(f) => (f.value.bindStatus === "BIND" ? 0 : 1), "bindStatus"]
        );
      return h.push(n), h;
    }),
    c = K(() => {
      var u;
      return (u = s().find((h) => h.value.cardId === e.value)) != null ? u : n;
    });
  E(() => {
    c() && c().value.applyId
      ? e.setError("")
      : e.setError(
          m("You need to add payment method before making a withdrawal")
        );
  });
  function d(u) {
    var f, g;
    const h = u.cardId;
    h
      ? u.bindStatus === "BIND" && e.onChange(h)
      : ie(a())
      ? t("/wallet/card")
      : t(
          `/wallet/intercept?levelname=${
            (g = (f = a()) == null ? void 0 : f[0]) == null
              ? void 0
              : g.levelName
          }`
        );
  }
  const y = (u) => {
      const h = u().value.bindStatus === "PENDING";
      return r($, {
        get when() {
          return !u().label;
        },
        get fallback() {
          return (() => {
            var f = wr(),
              g = f.firstChild,
              b = g.nextSibling;
            return (
              l(b, () => u().label),
              l(
                f,
                h &&
                  (() => {
                    var w = br();
                    return l(w, () => m("Pending")), w;
                  })(),
                null
              ),
              I(
                (w) => {
                  var B = P(
                      "flex items-center justify-between",
                      h && "opacity-50"
                    ),
                    W = u().value.cardAssociation === "VISA" ? Ae : Le;
                  return (
                    B !== w.e && O(f, (w.e = B)),
                    W !== w.t && A(g, "src", (w.t = W)),
                    w
                  );
                },
                { e: void 0, t: void 0 }
              ),
              f
            );
          })();
        },
        get children() {
          var f = vr(),
            g = f.firstChild;
          return (
            (f.$$click = () => {
              var b, w;
              ie(a())
                ? t("/wallet/card")
                : t(
                    `/wallet/intercept?levelname=${
                      (w = (b = a()) == null ? void 0 : b[0]) == null
                        ? void 0
                        : w.levelName
                    }`
                  );
            }),
            l(f, r(J, { class: "!h-3 !w-3 rotate-45", name: "Close" }), g),
            l(
              g,
              (() => {
                var b = p(() => !!i());
                return () => (b() ? m("Add card") : m("Add new card"));
              })()
            ),
            f
          );
        },
      });
    },
    v = (u) =>
      r($, {
        get when() {
          return !u().label;
        },
        get fallback() {
          return (() => {
            var h = _r(),
              f = h.firstChild,
              g = f.nextSibling;
            return (
              l(g, () => u().label),
              I(() =>
                A(f, "src", u().value.cardAssociation === "VISA" ? Ae : Le)
              ),
              h
            );
          })();
        },
        get children() {
          var h = $r();
          return l(h, () => m("Please add card")), h;
        },
      });
  return (() => {
    var u = xr(),
      h = u.firstChild;
    return (
      l(h, () => m("Withdraw With")),
      l(
        u,
        r(Ce, {
          class: "w-full justify-start bg-input_bright",
          get value() {
            return c();
          },
          get options() {
            return s();
          },
          onChange: (f) => d(f.value),
          labelRender: v,
          optionRender: y,
        }),
        null
      ),
      u
    );
  })();
}
z(["click"]);
var Nr = o(
  '<div class=select-wrap><div class="mb-1 font-semibold text-secondary mt-5">'
);
function kr(e) {
  const t = K(() => {
      let i = [];
      return (
        e.item.type === "select" && e.item.options
          ? (i = e.item.options.map((a) => ({ label: a, value: a })))
          : e.item.type === "map_select" &&
            e.item.mapOptions &&
            (i = e.item.mapOptions.map((a) => {
              const s = Object.keys(a)[0];
              return { value: s, label: a[s] };
            })),
        i
      );
    }),
    n = () => t().find((i) => i.value === e.value);
  return (() => {
    var i = Nr(),
      a = i.firstChild;
    return (
      l(a, () => e.label),
      l(
        i,
        r(Ce, {
          get disabled() {
            return e.item.readOnly;
          },
          class: "w-full bg-input_bright",
          get value() {
            return n();
          },
          get options() {
            return t();
          },
          children: (s) =>
            p(() => {
              var c;
              return ((c = s()) == null ? void 0 : c.label) || "";
            }),
          onChange: (s) => e.onChange((s == null ? void 0 : s.value) || ""),
        }),
        null
      ),
      i
    );
  })();
}
var Sr = o('<div class="mb-1 font-semibold text-secondary mt-5">'),
  pr = o("<div class=text-error>");
function Ir(e, t, n) {
  let i = "";
  const a = n.validPatterns;
  if (a.length > 0)
    if (n.parentValueKey) {
      const s = e[n.parentValueKey],
        c = a.find((d) => d.validKey === s);
      c && (i = new RegExp(c.validRule).test(t) ? "" : c.validMessage);
    } else {
      const s = a[0];
      i = new RegExp(s.validRule).test(t) ? "" : s.validMessage;
    }
  return i;
}
function Pr(e) {
  const [t, n] = Y("");
  Ne(() => {
    e.value && i(e.value);
  });
  const i = (a) => {
    const s = Ir(e.data, a, e.item);
    n(s), e.setError(s), e.onChange(a);
  };
  return [
    (() => {
      var a = Sr();
      return l(a, () => e.item.label), a;
    })(),
    r(be, {
      get type() {
        return e.item.valueKey === "vegaUserPassword" ? "password" : void 0;
      },
      required: !0,
      get readOnly() {
        return e.item.readOnly;
      },
      get value() {
        return e.value;
      },
      onChange: i,
      class: "text-base font-semibold",
    }),
    r($, {
      get when() {
        return t();
      },
      get children() {
        var a = pr();
        return l(a, t), a;
      },
    }),
  ];
}
var Wr = o(
    '<div class="mb-1 flex items-center mt-5 justify-end"><div class=ml-1>'
  ),
  Tr = o(
    '<div><img alt=""class=h-7><div class="text-primary font-semibold text-xs">'
  ),
  Dr = o("<div>"),
  Ar = o("<div class=text-secondary>"),
  Lr = o('<img alt="">'),
  Fr = o("<div class=nums>"),
  Rr = o('<div class=mt-5><label class="mb-1 font-semibold text-secondary">');
function Er(e) {
  const t = xe(),
    n = {
      label: "",
      value: {
        applyId: "",
        bindStatus: "BIND",
        cardAssociation: "",
        cardId: "",
        accountId: "",
        accountNumber: "",
        cardNumber: "",
        cardType: "ACCOUNT",
        firstName: "",
        lastName: "",
      },
    },
    [i] = Z(() => Se()),
    a = () => {
      var u;
      return (u = e.item.mapInfo) == null ? void 0 : u.length;
    },
    s = K(() => {
      const u = e.item.mapInfo
          ? e.item.mapInfo.map((f) => ({ label: f.accountNumber, value: f }))
          : [],
        h = pe(u, [
          (f) => (f.value.bindStatus === "BIND" ? 0 : 1),
          "bindStatus",
        ]);
      return h.push(n), h;
    }),
    c = K(() => {
      var u;
      return (u = s().find(
        (h) =>
          h.value.accountId === e.value &&
          h.value.bindStatus.toLocaleUpperCase() === "BIND"
      )) != null
        ? u
        : n;
    });
  E(() => {
    c() && c().value.applyId
      ? e.setError("")
      : e.setError(
          m("You need to add payment method before making a withdrawal")
        );
  });
  function d(u) {
    var f, g;
    const h = u == null ? void 0 : u.accountId;
    h
      ? u.bindStatus === "BIND" && e.onChange(h)
      : ie(i())
      ? t(`/wallet/bank?currency=${G.store.currency}`)
      : t(
          `/wallet/intercept?levelname=${
            (g = (f = i()) == null ? void 0 : f[0]) == null
              ? void 0
              : g.levelName
          }`
        );
  }
  const y = (u) => {
      const h = u().value.bindStatus === "PENDING";
      return r($, {
        get when() {
          return !u().value.accountNumber;
        },
        get fallback() {
          return (() => {
            var f = Tr(),
              g = f.firstChild,
              b = g.nextSibling;
            return (
              A(g, "src", Fe),
              l(b, () => u().value.accountNumber),
              l(
                f,
                h &&
                  (() => {
                    var w = Dr();
                    return l(w, () => m("Pending")), w;
                  })(),
                null
              ),
              I(() =>
                O(f, P("flex items-center justify-between", h && "opacity-50"))
              ),
              f
            );
          })();
        },
        get children() {
          var f = Wr(),
            g = f.firstChild;
          return (
            (f.$$click = () => {
              var b, w;
              ie(i())
                ? t(`/wallet/bank?currency=${G.store.currency}`)
                : t(
                    `/wallet/intercept?levelname=${
                      (w = (b = i()) == null ? void 0 : b[0]) == null
                        ? void 0
                        : w.levelName
                    }`
                  ),
                M.pop();
            }),
            l(f, r(J, { class: "!h-3 !w-3 rotate-45", name: "Close" }), g),
            l(
              g,
              (() => {
                var b = p(() => !!a());
                return () =>
                  b() ? m("Add Bank Account") : m("Add New Bank Account");
              })()
            ),
            f
          );
        },
      });
    },
    v = (u) =>
      r($, {
        get when() {
          return !u().label;
        },
        get fallback() {
          return [
            (() => {
              var h = Lr();
              return A(h, "src", Fe), h;
            })(),
            (() => {
              var h = Fr();
              return l(h, () => u().label), h;
            })(),
          ];
        },
        get children() {
          var h = Ar();
          return l(h, () => m("Please add bank account")), h;
        },
      });
  return (() => {
    var u = Rr(),
      h = u.firstChild;
    return (
      l(h, () => m("Withdraw With")),
      l(
        u,
        r(Ce, {
          class: "w-full justify-start",
          get value() {
            return c();
          },
          get options() {
            return s();
          },
          onChange: (f) => d(f.value),
          labelRender: v,
          optionRender: y,
          children: (f) => p(() => f().label),
        }),
        null
      ),
      u
    );
  })();
}
z(["click"]);
var Br = o("<div>");
function Or(e) {
  const t = {};
  for (const n in e)
    typeof e[n] == "string" ? (t[n] = e[n].trim()) : (t[n] = e[n]);
  return t;
}
function ve(e, t) {
  const n = {};
  return e.reduce((i, a) => ((i[a.valueKey] = t ? "" : a.defaultValue), i), n);
}
function Mr(e, t) {
  return e && typeof e == "string" ? new RegExp(e).test(t) : !0;
}
function Ur(e) {
  const [t, n] = ue({ todos: ve(e.list()) }),
    i = { selectErrorTxt: "" };
  let a = {};
  E(() => {
    n(F((d) => (d.todos = ve(e.list())))), (i.selectErrorTxt = "");
    for (const d in a) a.hasOwnProperty(d) && delete a[d];
  });
  function s() {
    n(ve(e.list(), !0));
  }
  return {
    kycDom: () =>
      r(ge, {
        get each() {
          return e.list();
        },
        children: (d) => {
          const y = Mr(d.scriptRuleStr, String(e.orderAmount));
          function v(u) {
            n(F((h) => (h.todos[d.valueKey] = u)));
          }
          return r($, {
            when: y,
            get children() {
              return r(ee, {
                get fallback() {
                  return r(Pr, {
                    get data() {
                      return t.todos;
                    },
                    item: d,
                    get value() {
                      return t.todos[d.valueKey];
                    },
                    onChange: v,
                    setError: (u) => (a[d.valueKey] = u),
                  });
                },
                get children() {
                  return [
                    r(S, {
                      get when() {
                        return d.type === "bind_card_select";
                      },
                      get children() {
                        return r(Cr, {
                          item: d,
                          get value() {
                            return t.todos[d.valueKey];
                          },
                          onChange: v,
                          setError: (u) => (i.selectErrorTxt = u),
                        });
                      },
                    }),
                    (() => {
                      var u = Br();
                      return l(u, () => JSON.stringify(d.type)), u;
                    })(),
                    r(S, {
                      get when() {
                        return d.type === "bind_account_select";
                      },
                      get children() {
                        return r(Er, {
                          item: d,
                          get value() {
                            return t.todos[d.valueKey];
                          },
                          onChange: v,
                          setError: (u) => (i.selectErrorTxt = u),
                        });
                      },
                    }),
                    r(S, {
                      get when() {
                        return (
                          (d.type === "select" && d.options) ||
                          (d.type === "map_select" && d.mapOptions)
                        );
                      },
                      get children() {
                        return r(kr, {
                          item: d,
                          get value() {
                            return t.todos[d.valueKey];
                          },
                          onChange: v,
                          get label() {
                            return d.label;
                          },
                        });
                      },
                    }),
                  ];
                },
              });
            },
          });
        },
      }),
    kycData: () => Or(t.todos),
    cardVerify: i,
    onClear: s,
    inputVerify: a,
  };
}
var Vr = o("<div class=text-brand>"),
  jr = o("<div class=text-primary> "),
  Kr = o(
    '<form><div class="flex justify-between mt-5 border-t border-third pt-4"><div class=text-secondary>:</div></div><div class="mt-2 flex justify-between"><div class=text-secondary><span class=mr5></span><span>:'
  ),
  Oe = o("<div>-");
const Yr = (e, t, n) => {
    const i = Number(e),
      a = Number(t);
    return i !== 0 && a !== 0 ? `(${t}%+${e} ${n})` : a !== 0 ? `(${t}%)` : "";
  },
  qr = (e) => {
    const [t] = Z(
      () => e.payment,
      () =>
        me.withdrawKyc(
          e.currency,
          e.payment.wayName,
          e.payment.method,
          e.payment.channel
        )
    );
    return (
      E(() => {
        e.payment.tipMessage &&
          setTimeout(
            () =>
              M.push(() =>
                r(Q, {
                  type: "center",
                  get children() {
                    return e.payment.tipMessage;
                  },
                })
              ),
            500
          );
      }),
      r(ce, {
        get fallback() {
          return r(he, {});
        },
        get children() {
          return r(ee, {
            get children() {
              return [
                r(S, {
                  get when() {
                    return t.error;
                  },
                  get children() {
                    return r(X, {
                      get children() {
                        return t.error.message;
                      },
                    });
                  },
                }),
                r(S, {
                  get when() {
                    return t();
                  },
                  children: (n) =>
                    r(Jr, {
                      get withdrawInfo() {
                        return e.payment;
                      },
                      get kycItem() {
                        return n().item;
                      },
                      get isPcDialog() {
                        return e.isPcDialog;
                      },
                      get currencyInfo() {
                        return k.getCurrency(e.currency);
                      },
                    }),
                }),
              ];
            },
          });
        },
      })
    );
  };
function Hr(e) {
  for (let t in e) if (e[t]) return e[t];
  return "";
}
const Jr = (e) => {
  const t = xe(),
    [n, i] = ue({
      loading: !0,
      depositBtnLoading: !1,
      fee: "0",
      amount: 0,
      feeLoading: !0,
      balance: null,
    });
  E(() => {
    e.withdrawInfo && i({ amount: Number(e.withdrawInfo.minWithdrawAmount) });
  });
  const {
      kycDom: a,
      kycData: s,
      onClear: c,
      cardVerify: d,
      inputVerify: y,
    } = Ur({ list: () => e.kycItem, orderAmount: n.amount }),
    v = () => Number(e.withdrawInfo.minWithdrawAmount || "0"),
    u = () => {
      var T;
      const C = Number(e.withdrawInfo.maxWithdrawAmount || "0"),
        N = Number(
          ((T = n.balance) == null ? void 0 : T.unlockedBalance) || "0"
        );
      return Math.min(C, N);
    },
    h = Pt(
      (C) => {
        if ((i({ feeLoading: !0 }), Number(C.amount) <= 0)) return;
        const {
          amount: N,
          channel: T,
          currencyName: L,
          method: q,
          wayName: te,
        } = C;
        me.withdrawFee(L, te, q, T, String(N))
          .then((H) => {
            i({ fee: H, feeLoading: !1 });
          })
          .catch((H) => _(H));
      },
      100,
      { leading: !1, trailing: !0 }
    ),
    [f] = Z(() => Se());
  E(() => {
    Ie(e.currencyInfo.currencyName)
      .then((C) => {
        i({ balance: C, feeLoading: !1, loading: !1 });
      })
      .catch(_);
  }),
    E(() => {
      h({
        amount: n.amount,
        channel: e.withdrawInfo.channel,
        currencyName: e.currencyInfo.currencyName,
        method: e.withdrawInfo.method,
        wayName: e.withdrawInfo.wayName,
      });
    });
  const {
      view: g,
      data: b,
      onVerified: w,
    } = gt(
      () => e.currencyInfo.currencyName,
      () => e.withdrawInfo.method
    ),
    B = (C) =>
      V(void 0, null, function* () {
        var re, oe, D;
        C.preventDefault();
        const N = Hr(y);
        if (N) return _.error(N);
        if (d.selectErrorTxt)
          return (
            ie(f())
              ? ht(e.kycItem)
                ? t(`/wallet/bank?currency=${e.currencyInfo.currencyName}`)
                : t("/wallet/card")
              : t(
                  `/wallet/intercept?levelname=${
                    (oe = (re = f()) == null ? void 0 : re[0]) == null
                      ? void 0
                      : oe.levelName
                  }`
                ),
            _.error(m(d.selectErrorTxt))
          );
        if (n.feeLoading || !w()) return;
        if (
          n.amount >
          Number(((D = n.balance) == null ? void 0 : D.unlockedBalance) || "0")
        )
          return _.error(m("Please enter the correct withdrawal amount."));
        i({ depositBtnLoading: !0 });
        const T = fe(fe({}, s()), b()),
          L = yield R.promisify("get_twostep")();
        if (!L) {
          i({ depositBtnLoading: !1 });
          return;
        }
        let q = null;
        e.withdrawInfo.channel &&
          e.withdrawInfo.channel.toLocaleLowerCase() === "vcredit" &&
          (q = window.open()),
          R.emit("track_other_events", { e: "withdrawClick" });
        const te = new x(n.amount).sub(n.fee).toString(),
          H = m(
            "Congratulations! Your withdrawal of __amount_name__ is in progress! For security purposes, any large or suspicious withdrawal amounts will be audited and manually processed. As always we appreciate your patience!",
            { amount_name: te + e.currencyInfo.currencyName }
          );
        me.withdraw({
          amount: String(n.amount),
          channel: e.withdrawInfo.channel,
          currencyName: e.currencyInfo.currencyName,
          fee: n.fee,
          method: e.withdrawInfo.method,
          wayName: e.withdrawInfo.wayName,
          kycItem: T,
          verifyType: L.verifyType,
          timestamp: Number(L.timestamp),
          code: L.code,
        })
          .then((U) => {
            i({ depositBtnLoading: !1 }),
              R.emit("track_other_events", { e: "withdrawOrderSuccess" }),
              _(H),
              c(),
              U
                ? U.redirectUrl &&
                  q &&
                  ((q.location.href = U.redirectUrl),
                  t(-1),
                  M.push(() =>
                    r(Be, {
                      get redirectUrl() {
                        return U.redirectUrl;
                      },
                    })
                  ))
                : (t(-1), M.push(() => r(Be, {})));
          })
          .catch((U) => {
            _(U), i({ depositBtnLoading: !1 });
          });
      }),
    W = () => _t(e.currencyInfo.currencyName, e.withdrawInfo.channel);
  return r($, {
    get when() {
      return !n.loading && n.balance;
    },
    get fallback() {
      return r(he, {});
    },
    get children() {
      var C = Kr(),
        N = C.firstChild,
        T = N.firstChild,
        L = T.firstChild,
        q = N.nextSibling,
        te = q.firstChild,
        H = te.firstChild,
        re = H.nextSibling,
        oe = re.firstChild;
      return (
        C.addEventListener("submit", B),
        l(C, a, N),
        l(C, g, N),
        l(
          C,
          r(Ke, {
            get currency() {
              return e.currencyInfo.currencyName;
            },
            class: "text-base font-semibold",
            get amount() {
              return n.amount;
            },
            get min() {
              return v();
            },
            get max() {
              return u();
            },
            onChange: (D) => {
              const U = Number(W()(D));
              i(F((Xe) => (Xe.amount = U)));
            },
          }),
          N
        ),
        l(
          C,
          r($, {
            get when() {
              return n.balance;
            },
            children: (D) =>
              r(je, {
                get currencyName() {
                  return e.currencyInfo.currencyName;
                },
                class: "mt-5",
                get inputAmount() {
                  return n.amount;
                },
                get balance() {
                  return D();
                },
              }),
          }),
          N
        ),
        l(T, () => m("Withdraw amount"), L),
        l(
          N,
          r($, {
            get when() {
              return !n.feeLoading;
            },
            get fallback() {
              return Oe();
            },
            get children() {
              var D = Vr();
              return (
                l(
                  D,
                  () =>
                    `${W()(new x(n.amount).sub(n.fee).toNumber())} ${
                      e.currencyInfo.aliasCurrencyName
                    }`
                ),
                D
              );
            },
          }),
          null
        ),
        l(H, () => m("Merchant Fee")),
        l(
          re,
          () =>
            Yr(
              e.withdrawInfo.feeFixed,
              e.withdrawInfo.feePercent,
              e.currencyInfo.aliasCurrencyName
            ),
          oe
        ),
        l(
          q,
          r($, {
            get when() {
              return !n.feeLoading;
            },
            get fallback() {
              return Oe();
            },
            get children() {
              var D = jr(),
                U = D.firstChild;
              return (
                l(D, () => n.fee, U),
                l(D, () => e.currencyInfo.aliasCurrencyName, null),
                D
              );
            },
          }),
          null
        ),
        l(
          C,
          r(j, {
            type: "brand",
            class: "w-full my-4",
            submit: !0,
            get disabled() {
              return n.depositBtnLoading || n.feeLoading;
            },
            get children() {
              return m("Withdraw");
            },
          }),
          null
        ),
        C
      );
    },
  });
};
var Gr = o(
    '<div class="absolute left-0 top-0 h-full w-full bg-black_alpha20">'
  ),
  Xr = o('<div class="font-semibold mt-1">VIP 56'),
  zr = o(
    '<div class="absolute z-10 left-0 top-0 flex flex-col h-full w-full center">'
  ),
  Qr = o(
    '<div class="relative bg-layer5 overflow-hidden rounded-lg cursor-pointer p-2 fix-light-hover"><div class=font-semibold><div class="rounded-lg p-2 center bg-layer3"><img class="h-11 w-auto"alt=logo></div><div class="mt-2 ellipsis">'
  ),
  Zr = o('<div class="text-secondary text-xs">'),
  en = o(
    '<div class="absolute left-0 top-0 flex h-full w-full center"><div class="h-full w-full rounded-lg bg-black_alpha20"></div><div class=absolute-center>'
  ),
  tn = o(
    '<div class="absolute font-semibold left-0 top-0 flex items-center px-2 rounded-br-xl rounded-tl-xl bg-gradient-to-tr from-[#E15A0F] to-[#F7931A] py-0.5 text-xs text-alw_white"><img class="mr-1 h-3 w-3"alt=""> SVIP'
  ),
  rn = o(
    '<div class="absolute font-semibold left-0 top-0 px-2 rounded-br-xl rounded-tl-xl bg-gradient-to-tr from-[#E15A0F] to-[#F7931A] py-0.5 text-xs text-alw_white">'
  );
function Je(e) {
  let t = "";
  return (
    (e.nightIcon || e.lightIcon) && (t = rt.darken ? e.nightIcon : e.lightIcon),
    t
  );
}
var we = ((e) => (
  (e[(e.normal = 0)] = "normal"),
  (e[(e.disable = 1)] = "disable"),
  (e[(e.success = 2)] = "success"),
  e
))(we || {});
const nn = Ve(() => le().get("/account/kyc/status/"));
function an(e) {
  const n = () => ae.vipLevel >= 56,
    [i, a] = Y(!0),
    [s, c] = Y(!1);
  return (
    E(() => {
      (!n() || (!i() && !s())) && e.itemRef && (e.itemRef.style.order = "99");
    }),
    E(() => {
      if (n()) {
        const d = ae.emailVerified,
          y = ae.hasPhone;
        nn().then((v) => {
          var u, h;
          v &&
            ((u = v[0]) == null ? void 0 : u.reviewStatus) === "completed" &&
            ((h = v[0]) == null ? void 0 : h.reviewAnswer) === "GREEN" &&
            c(d && y),
            a(!1);
        });
      } else a(!1);
    }),
    r($, {
      get when() {
        return !s();
      },
      get children() {
        return [
          Gr(),
          (() => {
            var d = zr();
            return (
              (d.$$click = () => {
                !i() &&
                  _(
                    m(
                      "This function only supports VIP users above level __level__ who have completed KYC, mobile phone number, and email verification.",
                      { level: 56 }
                    )
                  );
              }),
              l(
                d,
                r(ee, {
                  get fallback() {
                    return r(J, { class: "w-6 h-6", name: "Help" });
                  },
                  get children() {
                    return [
                      r(S, {
                        get when() {
                          return !n();
                        },
                        get children() {
                          return [
                            r(J, {
                              name: "Locked",
                              class: "w-6 h-6 text-secondary",
                            }),
                            Xr(),
                          ];
                        },
                      }),
                      r(S, {
                        get when() {
                          return i();
                        },
                        get children() {
                          return r(nt, {});
                        },
                      }),
                    ];
                  },
                })
              ),
              d
            );
          })(),
        ];
      },
    })
  );
}
function ln(e) {
  let t;
  const n = [0, 2].includes(e.paymentInfo.maintainedStatus);
  return (() => {
    var i = Qr(),
      a = i.firstChild,
      s = a.firstChild,
      c = s.firstChild,
      d = s.nextSibling,
      y = t;
    return (
      typeof y == "function" ? et(y, i) : (t = i),
      l(
        i,
        r(cn, {
          get tag() {
            return e.paymentInfo.tag;
          },
          get originalTag() {
            return e.paymentInfo.originalTag;
          },
        }),
        a
      ),
      (a.$$click = () => e.cb(e.paymentInfo)),
      l(d, () => e.paymentInfo.name),
      l(
        a,
        (() => {
          var v = p(() => !!(e.paymentInfo.avgMinutesSpent && n));
          return () =>
            v() &&
            (() => {
              var u = Zr();
              return (
                l(u, () =>
                  m("EAT: __number__ min", {
                    number: e.paymentInfo.avgMinutesSpent,
                  })
                ),
                u
              );
            })();
        })(),
        null
      ),
      l(
        i,
        !n &&
          (() => {
            var v = en(),
              u = v.firstChild,
              h = u.nextSibling;
            return (
              (v.$$click = () =>
                _.error(m("This channel is under maintenance"))),
              l(h, r(J, { class: "h-6 w-6 text-alw_white", name: "Maintain" })),
              v
            );
          })(),
        null
      ),
      l(
        i,
        r($, {
          get when() {
            return e.paymentInfo.isConvertToCyrpto;
          },
          get children() {
            return r(an, { itemRef: t });
          },
        }),
        null
      ),
      I(() => A(c, "src", Je(e.paymentInfo))),
      i
    );
  })();
}
function cn(e) {
  return r(ee, {
    get children() {
      return [
        r(S, {
          get when() {
            return e.originalTag.toLocaleLowerCase() === "svip";
          },
          get children() {
            var t = tn(),
              n = t.firstChild;
            return (
              n.nextSibling,
              A(n, "src", ft),
              l(t, () => m("Exclusive"), null),
              t
            );
          },
        }),
        r(S, {
          get when() {
            return e.tag;
          },
          get children() {
            var t = rn();
            return l(t, () => e.tag), t;
          },
        }),
      ];
    },
  });
}
z(["click"]);
var sn = o(
    '<div class="mb-4 text-center text-lg font-extrabold mx-auto w-[80%]">How to create a crypto wallet and get a deposit address?'
  ),
  un = o(
    "<div class=mt-5>How to Create a Cryptocurrency Wallet: Step-by-Step Guide"
  ),
  on = o(
    "<div class=text-secondary>A cryptocurrency wallet is where you store, send, and receive digital assets. Creating a secure wallet is a crucial step in safeguarding your assets. Here's a simple step-by-step guide on how to create a cryptocurrency wallet:"
  ),
  dn = o("<div class=mt-5>Step 1: Choose Wallet Type"),
  mn = o(
    "<div class=text-secondary>• Web Wallet: Accessed online, easy to use, but requires caution regarding online security."
  ),
  gn = o(
    "<div class=text-secondary>• Software Wallet: Installed on a computer or mobile device, higher security requirements."
  ),
  hn = o(
    "<div class=text-secondary>• Hardware Wallet: Similar to a USB device, offline storage, considered more secure."
  ),
  fn = o("<div class=mt-5>Step 2: Choose the Right Wallet for You"),
  yn = o(
    "<div class=text-secondary>• Research Different Wallets: Each wallet has its pros and cons; thorough research is necessary."
  ),
  vn = o(
    "<div class=text-secondary>• Prioritize Security: Consider security features and user reputation."
  ),
  wn = o("<div class=mt-5>Step 3: Creating Your Wallet"),
  bn = o("<div class=text-secondary>For Web and Software Wallets:"),
  $n = o(
    "<div class=text-secondary>• Visit Official Website: Access the official website of your chosen wallet."
  ),
  _n = o(
    "<div class=text-secondary>• Register an Account: Follow instructions to create an account."
  ),
  xn = o(
    "<div class=text-secondary>• Generate Seed Phrase/Private Key: Obtain the seed phrase or private key and ensure to keep it secure and private."
  ),
  Cn = o("<div class=mt-5>Step 4: Backup Your Wallet Information"),
  Nn = o(
    "<div class=text-secondary>• Backup Seed Phrase/Private Key: Record the generated seed phrase/private key in a secure and offline location to prevent loss or exposure."
  ),
  kn = o("<div class=mt-5>Step 5: Verify and Use Your Wallet"),
  Sn = o(
    "<div class=text-secondary>• Verify Account: Ensure your wallet setup is correct and validate its functionality."
  ),
  pn = o(
    "<div class=text-secondary>• Receive and Send Cryptocurrency: Use your wallet address to receive or send cryptocurrencies."
  ),
  In = o("<div class=mt-5>Step 6: Regular Backup and Updates"),
  Pn = o(
    "<div class=text-secondary>• Regular Backup: Update wallet backups regularly to avoid potential loss of assets due to data loss."
  ),
  Wn = o(
    "<div class=text-secondary>• Software Updates: For software wallets, keep them updated to access the latest security features and patches."
  ),
  Tn = o("<div class=mt-5>Tips:"),
  Dn = o(
    "<div class=text-secondary>• Stay Security Conscious: Avoid operating the wallet in insecure network environments."
  ),
  An = o(
    "<div class=text-secondary>• Beware of Scams: Guard against fraudulent information and scams, only trust official sources for information."
  ),
  Ln = o(
    "<div class=mr>Creating a cryptocurrency wallet isn't overly complex, but ensuring its security and practicing caution are paramount. Follow the above steps and remain vigilant in protecting your digital assets. Make sure you choose the right network and address when you access your coins!"
  ),
  Fn = o("<div class=p-4>");
function Rn() {
  return r(Q, {
    get title() {
      return m("How to create a crypto wallet");
    },
    class: "p-0",
    get children() {
      var e = Fn();
      return (
        l(
          e,
          r(ke, {
            i18nKey: "wallet_conver_text_infos",
            get children() {
              return [
                sn(),
                un(),
                on(),
                dn(),
                mn(),
                gn(),
                hn(),
                fn(),
                yn(),
                vn(),
                wn(),
                bn(),
                $n(),
                _n(),
                xn(),
                Cn(),
                Nn(),
                kn(),
                Sn(),
                pn(),
                In(),
                Pn(),
                Wn(),
                Tn(),
                Dn(),
                An(),
                Ln(),
              ];
            },
          })
        ),
        e
      );
    },
  });
}
var En = o("<span>"),
  Bn = o('<div class="text-brand underline">');
function On(e) {
  return r(Ye, {
    class: "bg-transparent !p-0",
    get isPcDialog() {
      return e.isPcDialog;
    },
    currencyName: "USDT",
    get convertCurrency() {
      return e.currencyName;
    },
    get children() {
      return r(ne, {
        class: "flex-col my-5",
        get children() {
          return [
            (() => {
              var t = En();
              return (
                l(t, () =>
                  m(
                    "Your fiat currency can ONLY be converted to USDT with no conversion fees applied. However, once converted to USDT, it cannot be converted back to fiat. We will only convert the fiat amount you withdraw here into USDT."
                  )
                ),
                t
              );
            })(),
            (() => {
              var t = Bn();
              return (
                (t.$$click = () => M.push(() => r(Rn, {}))),
                l(t, () =>
                  m("How to create a crypto wallet and get a deposit address?")
                ),
                t
              );
            })(),
          ];
        },
      });
    },
  });
}
z(["click"]);
var Mn = o('<div class="grid grid-cols-3 gap-x-1.5 gap-y-4">');
function Un(e) {
  return (() => {
    var t = Mn();
    return (
      l(
        t,
        r(ge, {
          get each() {
            return e.list;
          },
          children: (n) => r(ln, Me({ paymentInfo: n }, e)),
        })
      ),
      t
    );
  })();
}
var Vn = o('<div class="-mx-4 sm:-mx-2">'),
  jn = o("<div>"),
  Kn = o("<div class=p-4>");
function Yn(e) {
  const t = () => [
      {
        tipMessage: "",
        wayName: "",
        method: "",
        channel: "",
        category: "",
        name: "Crypto (USDT)",
        describe: "",
        lightIcon: de.coinIcon("USDT"),
        nightIcon: de.coinIcon("USDT"),
        originalTag: "",
        tag: "Lower Fees",
        maintained: !1,
        vipOnly: !1,
        minWithdrawAmount: "",
        maxWithdrawAmount: "",
        sort: 0,
        avgMinutesSpent: "2",
        feePercent: "",
        feeFixed: "",
        maintainedStatus: 0,
        guideVideoUrl: "",
        guideUrl: "",
        guideTemplateType: 0,
        kycRequirement: 0,
        isConvertToCyrpto: !0,
      },
      ...e.list,
    ],
    n = () => Nt(t(), (a) => (a.tag ? m("Recommend") : a.category)),
    i = () => Object.keys(n());
  return r(ce, {
    get fallback() {
      return r(ut, {});
    },
    get children() {
      return r($, {
        get when() {
          return t().length !== 0;
        },
        get fallback() {
          return r(X, {});
        },
        get children() {
          var a = Vn();
          return (
            l(
              a,
              r(ge, {
                get each() {
                  return i();
                },
                children: (s) => {
                  const [c, d] = Y(!0);
                  return [
                    r(at, {
                      class:
                        "flex items-center justify-between cursor-pointer px-3 text-secondary top-0 z-10 bg-layer5 py-2",
                      onClick: () => d((y) => !y),
                      get children() {
                        return [
                          (() => {
                            var y = jn();
                            return l(y, s), y;
                          })(),
                          r(J, {
                            name: "Arrow",
                            get class() {
                              return P(
                                c() ? "rotate-90" : "rotate-0",
                                "transition-all"
                              );
                            },
                          }),
                        ];
                      },
                    }),
                    r(lt, {
                      get when() {
                        return c();
                      },
                      get children() {
                        var y = Kn();
                        return (
                          l(
                            y,
                            r(
                              Un,
                              Me(e, {
                                get list() {
                                  return n()[s];
                                },
                              })
                            )
                          ),
                          y
                        );
                      },
                    }),
                  ];
                },
              })
            ),
            a
          );
        },
      });
    },
  });
}
var qn = o("<div>"),
  Hn = o('<div class="mb-1 font-semibold text-secondary 1">'),
  Jn = o('<img class="h-5 w-auto">'),
  Gn = o('<div class="text-base font-semibold ml-1">'),
  Xn = o('<div class="ml-auto h-6 w-6 rounded-lg bg-layer5 center">'),
  zn = o("<div class=relative>");
const Qn = Ve(function (t) {
  return me.withdrawMethods(t);
});
function Zn(e) {
  const [t] = Z(
    () => e.currencyName,
    () => Qn(e.currencyName)
  );
  return r(ce, {
    get fallback() {
      return r(he, {});
    },
    get children() {
      return [
        r(ee, {
          get children() {
            return [
              r(S, {
                get when() {
                  return t.error;
                },
                get children() {
                  return r(X, {
                    get children() {
                      return t.error.message;
                    },
                  });
                },
              }),
              r(S, {
                get when() {
                  var n;
                  return ((n = t()) == null ? void 0 : n.length) === 0;
                },
                get children() {
                  return r(X, {});
                },
              }),
              r(S, {
                get when() {
                  return t();
                },
                children: (n) =>
                  r(ea, {
                    get list() {
                      return n();
                    },
                    get isPcDialog() {
                      return e.isPcDialog;
                    },
                    get currencyName() {
                      return e.currencyName;
                    },
                  }),
              }),
            ];
          },
        }),
        (() => {
          var n = qn();
          return (
            I(() =>
              A(
                n,
                "id",
                e.isPcDialog ? "dialog-withdraw-fiat-bot" : "withdraw-fiat-bot"
              )
            ),
            n
          );
        })(),
      ];
    },
  });
}
function ea(e) {
  const [t, n] = Y(!1),
    i = (v) => [we.normal, we.success].includes(v.maintainedStatus),
    a = K(() =>
      pe(e.list, [
        (v) => na(v.tag, v.categoryId),
        (v) => ra(v.originalTag.toLocaleLowerCase()),
        (v) => (i(v) ? 0 : 1),
      ])
    ),
    s = () => a().find(i) || a()[0],
    [c, d] = Y(s());
  E(() => d(s()));
  const y = (v) => {
    d(v), n(!1);
  };
  return (
    Ne(() => {
      R.emit("track_other_events", { e: "Initiate checkout" });
    }),
    E(() => {
      e.currencyName && n(!1);
    }),
    [
      (() => {
        var v = Hn();
        return l(v, () => m("Withdraw Method")), v;
      })(),
      (() => {
        var v = zn();
        return (
          l(
            v,
            r(it, {
              get title() {
                return m("Withdraw Method");
              },
              get visible() {
                return t();
              },
              setVisible: n,
              class: "w-100",
              get layer() {
                return r(Yn, {
                  get currency() {
                    return e.currencyName;
                  },
                  cb: y,
                  get list() {
                    return a();
                  },
                });
              },
              get children() {
                return r(j, {
                  class:
                    "w-full justify-between pl-3 border border-input bg-input_bright",
                  get children() {
                    return [
                      (() => {
                        var u = Jn();
                        return I(() => A(u, "src", Je(c()))), u;
                      })(),
                      (() => {
                        var u = Gn();
                        return l(u, () => c().name), u;
                      })(),
                      (() => {
                        var u = Xn();
                        return (
                          l(
                            u,
                            r(Ue, {
                              class: "!h-3 !w-3 -rotate-90",
                              name: "Arrow",
                            })
                          ),
                          u
                        );
                      })(),
                    ];
                  },
                });
              },
            })
          ),
          v
        );
      })(),
      r($, {
        get when() {
          return i(c());
        },
        get fallback() {
          return r(X, {
            get children() {
              return m("This channel is under maintenance");
            },
          });
        },
        get children() {
          return r($, {
            get when() {
              return c().isConvertToCyrpto;
            },
            get fallback() {
              return r(qr, {
                get isPcDialog() {
                  return e.isPcDialog;
                },
                get payment() {
                  return c();
                },
                get currency() {
                  return e.currencyName;
                },
              });
            },
            get children() {
              return r(On, {
                get isPcDialog() {
                  return e.isPcDialog;
                },
                get currencyName() {
                  return e.currencyName;
                },
              });
            },
          });
        },
      }),
    ]
  );
}
const ta = { svip: 0, recommend: 1, fastest: 2, popular: 3 };
function ra(e) {
  var t;
  return (t = ta[e.toLocaleLowerCase()]) != null ? t : 10;
}
function na(e, t) {
  var i;
  return e
    ? 0
    : (i = {
        Recommend: 0,
        UPI: 1,
        QR: 2,
        PIX: 3,
        "Bank transfer": 4,
        "E-wallet": 5,
        "Credit Card": 6,
        "Mobile payments": 7,
      }[t]) != null
    ? i
    : 10;
}
var aa = o('<img class="h-6 w-6"alt="">'),
  la = o('<div class="text-base mx-2">'),
  ia = o('<div class="h-6 w-6 rounded-lg bg-layer5 ml-auto center">'),
  ca = o("<div>"),
  sa = o(
    '<div><div class=mb-5><div class="mb-1 font-semibold text-secondary">'
  );
function ua(e) {
  return r(St, {
    class: "w-full",
    isWithdraw: !0,
    get currencyName() {
      return e.currencyName;
    },
    get onChange() {
      return G.setCurrency;
    },
    get children() {
      return r(j, {
        class: "border border-input w-full bg-input_bright",
        get children() {
          return [
            (() => {
              var t = aa();
              return I(() => A(t, "src", de.coinIcon(e.currencyName))), t;
            })(),
            (() => {
              var t = la();
              return l(t, () => k.getAlias(e.currencyName)), t;
            })(),
            (() => {
              var t = ia();
              return (
                l(t, r(Ue, { class: "h-3 w-3 -rotate-90", name: "Arrow" })), t
              );
            })(),
          ];
        },
      });
    },
  });
}
function oa(e) {
  const t = () =>
    k.getCurrency(e.currencyName).currencyTokens.every((n) => !n.canWithdraw);
  return r(ee, {
    get fallback() {
      return r(Ye, {
        get isPcDialog() {
          return e.isPcDialog;
        },
        get currencyName() {
          return e.currencyName;
        },
      });
    },
    get children() {
      return [
        r(S, {
          get when() {
            return e.currencyName === "JB";
          },
          get children() {
            return r(vt, {});
          },
        }),
        r(S, {
          get when() {
            return e.currencyName === "BCL";
          },
          get children() {
            return r(kt, {});
          },
        }),
        r(S, {
          get when() {
            return t();
          },
          get children() {
            return r(wt, {
              get currencyName() {
                return e.currencyName;
              },
            });
          },
        }),
        r(S, {
          get when() {
            return e.currencyName === "SATS";
          },
          get children() {
            return r(gr, {});
          },
        }),
      ];
    },
  });
}
function Ge(e) {
  const [t, n] = Y(!0),
    i = () => k.getCurrency(G.store.currency).currencyType === "FIAT",
    a = e.isPcDialog || ct.mobile;
  return (() => {
    var s = sa(),
      c = s.firstChild,
      d = c.firstChild;
    return (
      l(d, () => m("Withdraw Currency")),
      l(
        c,
        r(ua, {
          get currencyName() {
            return G.store.currency;
          },
        }),
        null
      ),
      l(
        s,
        r(pt, {
          get children() {
            return [
              r(yt, {
                get purviewCode() {
                  return i() ? "withdraw_fiat" : "withdraw_crypto";
                },
                isDeposit: !1,
                get isFiat() {
                  return i();
                },
                cb: n,
              }),
              (() => {
                var y = ca();
                return (
                  l(
                    y,
                    r($, {
                      get when() {
                        return i();
                      },
                      get fallback() {
                        return r(oa, {
                          get isPcDialog() {
                            return e.isPcDialog;
                          },
                          get currencyName() {
                            return G.store.currency;
                          },
                        });
                      },
                      get children() {
                        return r(Zn, {
                          get isPcDialog() {
                            return e.isPcDialog;
                          },
                          get currencyName() {
                            return G.store.currency;
                          },
                        });
                      },
                    })
                  ),
                  I(() => O(y, P(!t() && "pointer-events-none opacity-50"))),
                  y
                );
              })(),
            ];
          },
        }),
        null
      ),
      I(() => O(s, P("p-4 bg-layer4 rounded-xl", a ? "mt-4" : "px-8"))),
      s
    );
  })();
}
function da() {
  return r(st, {
    get title() {
      return m("Withdraw");
    },
    get children() {
      return r(Ge, {});
    },
  });
}
const La = Object.freeze(
  Object.defineProperty(
    { __proto__: null, WithdrawPageCont: Ge, default: da },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { Jr as W, Ge as a, La as i };
