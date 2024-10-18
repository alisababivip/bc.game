import {
  d as E,
  i as n,
  c as r,
  t as a,
  e as U,
  s as O,
  m as A,
} from "./web-da7da7e5.js";
import {
  u as B,
  t as b,
  c as ee,
  n as N,
  P as V,
  I as L,
  B as R,
  a as te,
  s as re,
  D as ne,
  p as D,
  j as ie,
} from "./manifest-e0f0ba59.js";
import { F, S as w, b as j, g as se, M as x } from "./solid-js-2e15682c.js";
import "./bethistory-fcf99adb.js";
import { D as le } from "./withdrawFiat-1254e3b3.js";
import { W as v } from "./Icon-b6e375d0.js";
import { C as ae } from "./CopyInput-441aca40.js";
import { Q as oe } from "./Qrcode-20508360.js";
import { t as l } from "./i18n-9b1e4bd8.js";
import { B as de } from "./Icon-603169e7.js";
var ce = a(
    "<div>入金時に、お名前の前に<span class=red>Note Number</span>を入力してください。【ご注意ください】<span class=red>Note Number</span>のみを入力して送金されますと、反映までに時間が掛かる可能性がございます。下記のように、<span class=red>Note Number</span>とお名前を記載の上送金してください。（例）<span class=red></span>ヤマダ タロウ"
  ),
  ue = a(
    '<div class="center my-2 text-xs"><div class="mr-auto flex-none whitespace-nowrap pr-4 font-semibold text-secondary">:</div><div class="flex w-0 flex-auto justify-end p-2"><div class="w-0 flex-auto break-words text-right font-extrabold"></div><button class=ml-1>'
  ),
  me = a("<div class=paylist>"),
  fe = a("<div class=cont>");
function pe(e) {
  return e.method.toLocaleLowerCase() === "skypay" && e.currency === "JPYFIAT"
    ? (() => {
        var t = ce(),
          s = t.firstChild,
          d = s.nextSibling,
          i = d.nextSibling,
          c = i.nextSibling,
          m = c.nextSibling,
          o = m.nextSibling,
          f = o.nextSibling,
          p = f.nextSibling;
        return n(p, () => e.val), t;
      })()
    : null;
}
function he({ value: e, label: t }) {
  function s() {
    B.copyToClipboard(String(e)), b.success(l("Copied"));
  }
  return (() => {
    var d = ue(),
      i = d.firstChild,
      c = i.firstChild,
      m = i.nextSibling,
      o = m.firstChild,
      f = o.nextSibling;
    return (
      n(i, t, c), n(o, e), (f.$$click = s), n(f, r(v, { name: "Copy" })), d
    );
  })();
}
function be(e, t, s) {
  if (e) {
    const d = JSON.parse(e),
      i = (() => {
        var m = me();
        return (
          n(
            m,
            r(F, {
              each: d,
              children: (o) => {
                const f = Object.keys(o).filter((p) => p !== "logo");
                return (() => {
                  var p = fe();
                  return (
                    n(
                      p,
                      r(F, {
                        each: f,
                        children: (_) =>
                          r(he, {
                            label: _,
                            get value() {
                              return o[_];
                            },
                          }),
                      })
                    ),
                    p
                  );
                })();
              },
            })
          ),
          m
        );
      })(),
      c = r(pe, {
        method: t,
        currency: s,
        get val() {
          return d[0]["Note Number"];
        },
      });
    return { pldom: i, tipdom: c };
  } else return { pldom: null, tipdom: null };
}
E(["click"]);
var ge = a("<div>● Скопируйте номер карты, указанный выше"),
  _e = a("<div>● Откройте приложение вашего банка"),
  $e = a(
    "<div>● Одним платежом переведите на этот номер карты сумму для пополнения"
  ),
  ye = a("<div>● Ожидайте поступление денежных средств"),
  ve = a(
    "<div>Обратите внимание, в эту сумму не входит комиссия банка. Номер карты, на которую вы отправляете платеж уникален и подходит только для одного депозита."
  ),
  xe = a("<div>● Copy the card number"),
  we = a("<div>● Open your bank app"),
  Ce = a("<div>● Transfer charge to card number in one payment"),
  Te = a("<div>● Expect cash receipts"),
  Se = a(
    "<div>Please note that this amount does not include bank fees. The card number you send the payment is unique and only valid for one deposit."
  );
function ke(e) {
  return r(w, {
    get when() {
      return e.currency === "RUBFIAT" && e.channel === "OctoPay-RUB";
    },
    get children() {
      return r(w, {
        get when() {
          return ee.lang === "ru";
        },
        get fallback() {
          return r(N, {
            get children() {
              return [xe(), we(), Ce(), Te(), Se()];
            },
          });
        },
        get children() {
          return r(N, {
            get children() {
              return [ge(), _e(), $e(), ye(), ve()];
            },
          });
        },
      });
    },
  });
}
var Pe = a('<div class="mb-1 font-semibold text-secondary mt-5">'),
  q = a("<div>"),
  Ue = a(
    '<div class="flex justify-between items-center mt-4"><div class=text->Code</div><div class="text-secondary items-center flex"><button class=ml-1>'
  ),
  Ie = a("<div><div></div><ul><li></li><li>"),
  I = a("<span>"),
  Ne = a(
    '<div class="flex justify-between"><div><div class="font-semibold text-secondary"></div><div class="text-lg font-extrabold text-right">'
  ),
  Re = a('<div class="rounded-xl bg-layer4 p-3 mt-3">'),
  Fe = a(
    '<div class="mt-5 border-t border-third"><div class="text-center font-extrabold mt-5"></div><div class="mb-1 font-semibold text-secondary mt-5">'
  ),
  Me = a("<img class=h-10>"),
  Oe = a(
    '<div class="text-primary font-extrabold text-sm cursor-pointer center justify-end text-right">'
  ),
  Ae = a("<div class=box>"),
  De = a(
    "<div class=box><div class=box-subtit></div><div class=notice-wrap><div>"
  ),
  Ee = a(
    '<div class=box><div class=box-tit></div><div class="mb-1 font-semibold text-secondary">UTR/Reference No.'
  );
function Be(e) {
  const t = () => e.card.split(",");
  return r(w, {
    get when() {
      return t().length > 1;
    },
    get fallback() {
      return [
        (() => {
          var s = Pe();
          return n(s, () => l("Bank Account")), s;
        })(),
        r(ae, {
          get value() {
            return e.card;
          },
        }),
      ];
    },
    get children() {
      return r(F, {
        get each() {
          return t();
        },
        children: (s) =>
          (() => {
            var d = q();
            return n(d, s), d;
          })(),
      });
    },
  });
}
function Ve(e) {
  if (e.length < 20) return e;
  const t = e.substring(0, 10),
    s = e.substring(e.length - 10);
  return `${t}...${s}`;
}
function Le(e) {
  const t = e.qrCode || e.qrCodeContent || "",
    s = t && !e.paylist;
  function d() {
    B.copyToClipboard(String(e.qrCode)), b.success(l("Copied"));
  }
  return [
    t &&
      r(oe, {
        url: t,
        get checkedUrl() {
          return !!e.qrCode;
        },
        get fileName() {
          return e.method;
        },
      }),
    s &&
      (() => {
        var i = Ue(),
          c = i.firstChild,
          m = c.nextSibling,
          o = m.firstChild;
        return (
          n(m, () => Ve(t), o), (o.$$click = d), n(o, r(v, { name: "Copy" })), i
        );
      })(),
  ];
}
function H(e) {
  return r(se, {
    get fallback() {
      return (() => {
        var t = I();
        return (
          U(
            () =>
              (t.innerHTML = l(
                "Please transfer funds within <b>__time__ minutes</b> using the payment details specified below. Then enter the <b>__txt__</b> below after your transfer. Otherwise, your deposit will not be credited on time.",
                {
                  time: e.isEcp ? 20 : 10,
                  txt: e.isEcp ? "TX number" : "UTR number",
                }
              ))
          ),
          t
        );
      })();
    },
    get children() {
      return [
        r(x, {
          get when() {
            return e.isKes;
          },
          get children() {
            return l(
              "A confirmation pop-up should be sent to you by the mobile network operator, please confirm your transaction as soon as possible."
            );
          },
        }),
        r(x, {
          get when() {
            return e.isSunV2Pay;
          },
          get children() {
            var t = Ie(),
              s = t.firstChild,
              d = s.nextSibling,
              i = d.firstChild,
              c = i.nextSibling;
            return (
              n(s, () =>
                l(
                  "Please transfer funds within 10 minutes using the payment details specified below."
                )
              ),
              n(i, () =>
                l(
                  "Please refrain from storing your iBank account for future deposits. When making transfers, kindly create an order using the appropriate bank transfer method. SWIFT is not supported by the current transaction."
                )
              ),
              n(c, () =>
                l(
                  "It is essential to provide reference information to ensure immediate fund allocation."
                )
              ),
              t
            );
          },
        }),
        r(x, {
          get when() {
            return !e.showUtr;
          },
          get children() {
            var t = I();
            return (
              U(
                () =>
                  (t.innerHTML = l(
                    "Please transfer funds within <b>10 minutes</b> using the payment details specified below."
                  ))
              ),
              t
            );
          },
        }),
        r(x, {
          get when() {
            return e.isPkr;
          },
          get children() {
            var t = I();
            return (
              U(
                () =>
                  (t.innerHTML = l(
                    "Please transfer funds within <b>10 minutes</b> using the payment details specified below. Enter the <b>OTP code</b> below after your transfer, and you will see an <b>MPIN</b> pop-up to approve this transaction, or you may have to check in-app approval(s) if you don’t see <b>MPIN</b> pop-up. Otherwise, your transaction may fail."
                  ))
              ),
              t
            );
          },
        }),
      ];
    },
  });
}
function je(e, t) {
  return e ? "OTP code" : t ? "Transaction ID" : "UTR/Reference No.";
}
function qe(e, t) {
  return e ? "OTP code" : t ? "Transaction ID" : "UTR number";
}
function W(e, t) {
  const s = t === "INRFIAT",
    d = l("UTR Verification Success"),
    i = l(
      "UTR Verification Failed. The UTR does not exist. The main reason may as below:"
    ),
    c = l(
      "1)The amount not received yet. 2)The amount has credited to another order ID 3)The amount was not deposited to this channel."
    ),
    m = l("UTR Verification Failed: Inconsistent amounts."),
    o = l("Please enter the correct UTR number");
  return (p, _) => {
    if (s && !/^\d{12}$/.test(_)) return b.error(o, { duration: 0 });
    le.updateUtr(p.replace("F-", ""), _)
      .then((g) => {
        s && b.error(d, { duration: 0 }), e();
      })
      .catch((g) =>
        s
          ? g.message === "server.payment.fiat.fiat.UTR_QUERY_FAILED"
            ? b.error(
                () => [
                  (() => {
                    var y = q();
                    return n(y, i), y;
                  })(),
                  c,
                ],
                { duration: 0 }
              )
            : g.message === "server.payment.fiat.UTR_AMOUNT_NOT_MATCH"
            ? b.error(m, { duration: 0 })
            : b(g)
          : b(g)
      );
  };
}
function et(e) {
  const {
      currency: t,
      icon: s,
      amount: d,
      res: i,
      showUtr: c,
      showImadeDeposit: m,
    } = e,
    { method: o, orderId: f } = i,
    { qrCode: p, qrCodeContent: _, card: g, payList: y } = i.data,
    [C, K] = j(""),
    M = te(),
    { pldom: J, tipdom: Q } = be(y, o, t),
    T = () => {
      D.pop();
      const u = i.orderId.startsWith("F-") ? i.orderId : `F-${i.orderId}`;
      M(`/wallet/deposit-detail/?orderId=${u}`);
    },
    Y = W(T, t),
    X = () =>
      ie()
        .post("/payment/deposit/fiat/order/paymentConfirmation/", {
          orderId: f,
        })
        .then(T)
        .catch(b),
    z = o === "MPesa" && i.channel === "MPesa_Express",
    G = o === "SunV2Pay",
    S = t === "PKRFIAT",
    k = e.res.fiatProvider === "EcPay";
  return r(V, {
    get title() {
      return l("Payment Method");
    },
    get children() {
      return [
        (() => {
          var u = Ne(),
            $ = u.firstChild,
            h = $.firstChild,
            Z = h.nextSibling;
          return (
            n(
              u,
              s &&
                (() => {
                  var P = Me();
                  return O(P, "src", s), O(P, "alt", `${o}.png`), P;
                })(),
              $
            ),
            n(h, () => l("Deposit amount")),
            n(Z, () => `${re.toFiatStr(new ne(d), t)}`),
            u
          );
        })(),
        (() => {
          var u = Re();
          return (
            n(
              u,
              r(N, {
                type: "info",
                get children() {
                  return r(H, {
                    isKes: z,
                    isPkr: S,
                    isSunV2Pay: G,
                    showUtr: c,
                    isEcp: k,
                  });
                },
              }),
              null
            ),
            n(
              u,
              (() => {
                var $ = A(
                  () =>
                    !!(
                      (e.res.guideUrl &&
                        Object.keys(JSON.parse(e.res.guideUrl)).length) ||
                      e.res.guideVideoUrl
                    )
                );
                return () =>
                  $() &&
                  (() => {
                    var h = Oe();
                    return (
                      (h.$$click = () => {
                        D.pop(),
                          M(
                            `/wallet/what-deposit?guideUrl=${e.res.guideUrl}&guideVideoUrl=${e.res.guideVideoUrl}&guideTemplateType=${e.res.guideTemplateType}`
                          );
                      }),
                      n(
                        h,
                        r(de, { class: "w-3 h-3 mr-1.5 fill-alw_white" }),
                        null
                      ),
                      n(h, () => l("How to make deposit?"), null),
                      h
                    );
                  })();
              })(),
              null
            ),
            n(
              u,
              r(Le, { qrCode: p, qrCodeContent: _, paylist: y, method: o }),
              null
            ),
            n(u, J, null),
            u
          );
        })(),
        A(
          () =>
            g &&
            (() => {
              var u = Ae();
              return n(u, r(Be, { card: g })), u;
            })()
        ),
        r(ke, {
          get currency() {
            return e.currency;
          },
          get channel() {
            return e.res.channel;
          },
        }),
        r(w, {
          when: c,
          get fallback() {
            return r(R, {
              class: "w-full my-4",
              onClick: m ? X : T,
              type: "brand",
              get children() {
                return l("I’ve Made Deposit");
              },
            });
          },
          get children() {
            return [
              (() => {
                var u = Fe(),
                  $ = u.firstChild,
                  h = $.nextSibling;
                return (
                  n($, () => l("Already Paid?")),
                  n(h, () => je(S, k)),
                  n(
                    u,
                    r(L, {
                      class: "font-semibold",
                      get placeholder() {
                        return l("Enter the __type__ to verify your payment", {
                          type: qe(S, k),
                        });
                      },
                      get value() {
                        return C();
                      },
                      onChange: K,
                      get children() {
                        return r(v, { name: "Locked" });
                      },
                    }),
                    null
                  ),
                  u
                );
              })(),
              r(R, {
                class: "w-full my-4",
                onClick: () => Y(f, C()),
                type: "brand",
                disabled: !C,
                get children() {
                  return l("Submit");
                },
              }),
            ];
          },
        }),
        Q,
      ];
    },
  });
}
function tt(e) {
  const t = W(e.callback, e.currencyName),
    [s, d] = j("");
  return r(V, {
    get title() {
      return l("Payment Method");
    },
    get children() {
      return [
        (() => {
          var i = De(),
            c = i.firstChild,
            m = c.nextSibling,
            o = m.firstChild;
          return (
            n(c, () => l("Deposit Details")),
            n(m, r(v, { name: "Caution" }), o),
            n(
              o,
              r(H, {
                isKes: !1,
                isPkr: !1,
                isSunV2Pay: !1,
                showUtr: !0,
                isEcp: !1,
              })
            ),
            i
          );
        })(),
        (() => {
          var i = Ee(),
            c = i.firstChild;
          return (
            c.nextSibling,
            n(c, () => l("Already Paid?")),
            n(
              i,
              r(L, {
                class: "font-semibold",
                get placeholder() {
                  return l("Enter the __type__ to verify your payment", {
                    type: "UTR number",
                  });
                },
                get value() {
                  return s();
                },
                onChange: d,
                get children() {
                  return r(v, { name: "Locked" });
                },
              }),
              null
            ),
            i
          );
        })(),
        r(R, {
          class: "sub-btn",
          onClick: () => t(e.orderId, s()),
          type: "brand",
          disabled: !s,
          get children() {
            return l("Submit");
          },
        }),
      ];
    },
  });
}
E(["click"]);
export { et as U, tt as a };
