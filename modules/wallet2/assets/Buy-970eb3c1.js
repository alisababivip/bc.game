import {
  d as b,
  i,
  c as t,
  t as l,
  e as u,
  a as I,
  m as w,
  s as D,
} from "./web-da7da7e5.js";
import {
  a as A,
  p as v,
  o as C,
  j as P,
  b as S,
  E as M,
  u as _,
  D as E,
  I as L,
  B as R,
} from "./manifest-e0f0ba59.js";
import { T as h, t as d } from "./i18n-9b1e4bd8.js";
import { e as k, f as F, g as B, M as y } from "./solid-js-2e15682c.js";
import { W as N } from "./Icon-b6e375d0.js";
import { F as O } from "./Loading-72a9f35e.js";
import { C as Y } from "./CopyInput-441aca40.js";
import { a as G } from "./router-5691abb0.js";
import "./bethistory-fcf99adb.js";
import "./withdrawFiat-1254e3b3.js";
var T = l("<button>Deposit"),
  W = l("<button>Support"),
  x = l("<div class=tips>");
function H({ status: n }) {
  const e = A();
  return n === "failed"
    ? (() => {
        var s = x();
        return (
          i(
            s,
            t(h, {
              i18nKey: "wallet.trans.desc31",
              get children() {
                return [
                  "Transaction failed. Please go to",
                  (() => {
                    var a = T();
                    return (
                      (a.$$click = () => {
                        e("/wallet/deposit"), v.pop();
                      }),
                      a
                    );
                  })(),
                  "and retry, or contact the",
                  (() => {
                    var a = W();
                    return (
                      (a.$$click = () => {
                        C.emit("live_support");
                      }),
                      a
                    );
                  })(),
                  "for help.",
                ];
              },
            })
          ),
          s
        );
      })()
    : n === "expired"
    ? (() => {
        var s = x();
        return (
          i(
            s,
            t(h, {
              i18nKey: "wallet.trans.desc32",
              get children() {
                return [
                  "Transaction failed. Please go to",
                  (() => {
                    var a = T();
                    return (
                      (a.$$click = () => {
                        e("/wallet/deposit"), v.pop();
                      }),
                      a
                    );
                  })(),
                  "and retry.",
                ];
              },
            })
          ),
          s
        );
      })()
    : null;
}
b(["click"]);
var j = l('<div class="text-secondary text-sm mt-4">'),
  K = l(
    '<div class="text-secondary mt-4 text-base center justify-start"><span class=text-primary></span><span>'
  ),
  U = l("<div>"),
  V = l('<div class="text-secondary text-sm mb-1.5">Order ID'),
  X = l('<div class="text-secondary text-sm mt-4 mb-1.5">'),
  q = l('<a target=_blank rel="noopener noreferrer"class=copy-secret>');
function z(n) {
  switch (n) {
    case "finished":
      return "text-success";
    case "failed":
      return "text-error";
    default:
      return "text-warning";
  }
}
function J(n) {
  return n == "PENDING_PAYMENT" || n == "WAITING_PAYMENT";
}
function Q(n) {
  switch (n) {
    case "INIT_PAYMENT":
      return "init";
    case "PENDING_PAYMENT":
      return "to be paid";
    case "WAITING_PAYMENT":
      return "paid processing";
    case "PAYMENT_RECEIVED":
      return "paid";
    case "IN_PROGRESS":
      return "processing";
    case "COIN_TRANSFERRED":
      return "success";
    case "CANCELLED":
      return "cancelled";
    case "DECLINED":
      return "declined";
    case "EXPIRED":
      return "expired";
    case "COMPLETE":
      return "complete";
    case "REFUNDED":
      return "refunded";
    default:
      return n;
  }
}
function ce(n) {
  const { state: e } = G(),
    s = Q(e == null ? void 0 : e.status),
    a = J(e == null ? void 0 : e.status),
    [p] = k(() =>
      P().get(
        `/user/buy-crypto/status/${e == null ? void 0 : e.provider}/${
          e == null ? void 0 : e.tradeNo
        }/`
      )
    );
  return t(S, {
    get title() {
      return d("Buy");
    },
    get children() {
      return t(F, {
        get fallback() {
          return t(O, {});
        },
        get children() {
          return t(B, {
            get children() {
              return [
                t(y, {
                  get when() {
                    return p.error;
                  },
                  get children() {
                    return t(M, {
                      get children() {
                        return p.error.message;
                      },
                    });
                  },
                }),
                t(y, {
                  get when() {
                    return e == null ? void 0 : e.status;
                  },
                  children: (m) => [
                    (() => {
                      var r = j();
                      return (
                        i(r, () =>
                          new Date(
                            e == null ? void 0 : e.createTime
                          ).toLocaleString()
                        ),
                        r
                      );
                    })(),
                    (() => {
                      var r = K(),
                        f = r.firstChild,
                        c = f.nextSibling;
                      return (
                        i(r, () => n.sourceFiat, c),
                        i(r, t(N, { class: "mx-1", name: "Exchange" }), c),
                        i(r, () => n.targetCoin, null),
                        u(
                          (o) => {
                            var g = _.formatBalance(
                                new E(
                                  (e == null ? void 0 : e.sourceFiatAmount) || 0
                                )
                              ),
                              $ = _.formatBalance(
                                new E(
                                  (e == null ? void 0 : e.targetCoinAmount) || 0
                                )
                              );
                            return (
                              g !== o.e && (f.innerHTML = o.e = g),
                              $ !== o.t && (c.innerHTML = o.t = $),
                              o
                            );
                          },
                          { e: void 0, t: void 0 }
                        ),
                        r
                      );
                    })(),
                    (() => {
                      var r = U();
                      return (
                        i(r, s),
                        u(() =>
                          I(
                            r,
                            `status-wrap py-1.5 mt-2 rounded-sm mb-5 inline-block bg-layer3 px-5 ${z(
                              s
                            )}`
                          )
                        ),
                        r
                      );
                    })(),
                    V(),
                    t(L, {
                      get value() {
                        return e == null ? void 0 : e.tradeNo;
                      },
                      readOnly: !0,
                      class: "text-base font-semibold",
                      get children() {
                        return (
                          w(() => !!m())() &&
                          (() => {
                            var r = q();
                            return (
                              i(r, t(N, { name: "Share" })),
                              u(() => D(r, "href", m())),
                              r
                            );
                          })()
                        );
                      },
                    }),
                    (() => {
                      var r = X();
                      return i(r, () => d("To Address")), r;
                    })(),
                    t(Y, {
                      get value() {
                        return e == null ? void 0 : e.walletAddress;
                      },
                    }),
                    a &&
                      t(R, {
                        type: "brand",
                        class: "continue-btn",
                        onClick: () => window.open(n.redirectUrl),
                        get children() {
                          return d("Continue to pay");
                        },
                      }),
                    t(H, { status: s }),
                  ],
                }),
              ];
            },
          });
        },
      });
    },
  });
}
export {
  ce as default,
  z as getClassStatus,
  Q as getFiatBuyStatus,
  J as isWaitingToPay,
};
