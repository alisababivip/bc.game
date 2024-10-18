var I0 = Object.defineProperty;
var cu = Object.getOwnPropertySymbols;
var D0 = Object.prototype.hasOwnProperty,
  x0 = Object.prototype.propertyIsEnumerable;
var uu = (e, t, r) =>
    t in e
      ? I0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ye = (e, t) => {
    for (var r in t || (t = {})) D0.call(t, r) && uu(e, r, t[r]);
    if (cu) for (var r of cu(t)) x0.call(t, r) && uu(e, r, t[r]);
    return e;
  };
var P = (e, t, r) =>
  new Promise((i, n) => {
    var s = (l) => {
        try {
          c(r.next(l));
        } catch (f) {
          n(f);
        }
      },
      o = (l) => {
        try {
          c(r.throw(l));
        } catch (f) {
          n(f);
        }
      },
      c = (l) => (l.done ? i(l.value) : Promise.resolve(l.value).then(s, o));
    c((r = r.apply(e, t)).next());
  });
import {
  d as Mn,
  c as V,
  b as Gt,
  s as ft,
  i as te,
  e as _t,
  a as Kt,
  t as ie,
  m as sr,
  P as C0,
  u as mc,
} from "./web-da7da7e5.js";
import {
  e as Io,
  s as Et,
  D as Yi,
  p as hr,
  k as tt,
  P as nn,
  i as T0,
  n as Ur,
  j as M0,
  E as Nn,
  c as yc,
  o as Do,
  B as Xt,
  N as xo,
  h as ai,
  t as Yt,
  _ as Ch,
  u as wc,
  y as N0,
  A as ds,
  z as O0,
  L as Th,
  w as lu,
  I as R0,
  g as hu,
  F as Co,
  v as P0,
  a as Mh,
  r as Nh,
  x as Oh,
  d as Qo,
  b as B0,
} from "./manifest-e0f0ba59.js";
import {
  S as it,
  c as To,
  g as Ii,
  M as rt,
  e as Is,
  f as Fi,
  d as vc,
  b as dr,
  a as L0,
  o as Rh,
  F as _n,
} from "./solid-js-2e15682c.js";
import {
  j as F0,
  k as $0,
  D as U0,
  m as Mo,
  n as No,
  o as ii,
  u as k0,
  A as Ph,
  l as q0,
  h as j0,
  M as z0,
  f as K0,
  P as V0,
} from "./AboutJb-13924d78.js";
import { T as bc, t as le } from "./i18n-9b1e4bd8.js";
import { t as H0 } from "./toInteger-112c6978.js";
import { D as Bh, S as G0 } from "./bethistory-fcf99adb.js";
import { D as Lh } from "./withdrawFiat-1254e3b3.js";
import { W as Mr } from "./Icon-b6e375d0.js";
import { u as W0 } from "./router-5691abb0.js";
import { Q as Q0, a as Y0 } from "./Qrcode-20508360.js";
import { W as Oo, F as _c } from "./Loading-72a9f35e.js";
import { C as J0 } from "./CopyInput-441aca40.js";
import { AboutBclPage as X0 } from "./AboutBcl-bcb4cc45.js";
import { c as _i, g as Z0 } from "./store-eb5336a3.js";
import { g as Fh } from "./groupBy-5d1dee29.js";
import { s as $h } from "./sortBy-6b2810fa.js";
import { o as eg } from "./orderBy-fc8ca101.js";
import { E as Uh } from "./ErrorRest-1a0f0516.js";
import { B as tg } from "./Icon-603169e7.js";
import { m as rg } from "./memoize-ff109130.js";
import { a as ig } from "./SelectCurrency-0ef42d5c.js";
var ng = "Expected a function";
function sg(e, t) {
  var r;
  if (typeof t != "function") throw new TypeError(ng);
  return (
    (e = H0(e)),
    function () {
      return (
        --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = void 0), r
      );
    }
  );
}
function og(e) {
  return sg(2, e);
}
const ag = "/modules/wallet2/assets/bonus-3a17ce62.png";
var fu = ie("<div class=tit>"),
  cg = ie("<div> <!> "),
  ug = ie("<div>"),
  lg = ie("<b class=text-warning>__rate__"),
  hg = ie("<b class=text-warning>__i18namount__"),
  fg = ie(
    '<div><div class="mr-2 text-brand"><img class="w-10 h-auto"></div><div class=font-extrabold>'
  );
function kh(e, t) {
  return t === "KRWFIAT" ? Math.ceil(e / 1e4) * 1e4 : e;
}
function dg(e) {
  const t = kh(Number(e.amount), e.currency);
  return [
    V(it, {
      get when() {
        return !e.isSpecial;
      },
      get fallback() {
        return (() => {
          var r = fu();
          return te(r, () => le("Special Deposit Bonus")), r;
        })();
      },
      get children() {
        var r = fu();
        return (
          te(
            r,
            (() => {
              var i = sr(() => !!(e.weeks && e.weeks.length > 0));
              return () => (i() ? "" : $0(e.num));
            })(),
            null
          ),
          te(r, () => le("Deposit Bonus"), null),
          r
        );
      },
    }),
    (() => {
      var r = cg(),
        i = r.firstChild,
        n = i.nextSibling;
      return (
        n.nextSibling,
        te(r, () => e.rate, i),
        te(r, () => le("Up to"), n),
        te(r, () => e.bonus, null),
        r
      );
    })(),
    (() => {
      var r = ug();
      return (
        te(r, () =>
          le("Minimum Deposit __amount__", {
            amount: Et.toCryptoStr(new Yi(t), e.currency),
          })
        ),
        r
      );
    })(),
  ];
}
function gg(e) {
  return V(nn, {
    get children() {
      return V(dg, e);
    },
  });
}
function Ec(e) {
  return V(it, {
    get when() {
      return (
        e.currency !== "BCL" &&
        e.currency !== Io.freeCoin &&
        e.currency !== "BB"
      );
    },
    get children() {
      return V(pg, e);
    },
  });
}
function pg(e) {
  const [t] = T0,
    r = () => F0(e.currency, t());
  return V(it, {
    get when() {
      return r().length > 0;
    },
    fallback: null,
    get children() {
      return V(mg, {
        get currency() {
          return e.currency;
        },
        get class() {
          return e.class;
        },
        get data() {
          return t();
        },
        get list() {
          return r();
        },
      });
    },
  });
}
function mg(e) {
  const t = e.data.rechargeValidNum,
    r = To(() => {
      const i = Et.convertCurrency(
          new Yi(e.list[0].rechargeUsd),
          "USDFIAT",
          e.currency
        ).toString(),
        n = new Yi(e.list[0].bonusRatio).mul(100).toString() + "%",
        s = Et.convertCurrency(
          new Yi(e.list[0].maximumBcd),
          e.list[0].bonusCurrencyName,
          e.currency
        ),
        o = Et.toCryptoStr(s, e.currency) + " " + Et.getAlias(e.currency),
        c =
          Et.toCryptoStr(new Yi(kh(Number(i), e.currency)), e.currency) +
          " " +
          Et.getAlias(e.currency);
      return {
        amount: i,
        rate: n,
        bonusAmount: s,
        bonus: o,
        i18namount: c,
        weeks: e.list[0].weeks,
        isSpecial: !!e.data.specialDeposit,
      };
    });
  return (() => {
    var i = fg(),
      n = i.firstChild,
      s = n.firstChild,
      o = n.nextSibling;
    return (
      (n.$$click = () =>
        hr.push(() =>
          V(
            gg,
            Gt(
              {
                num: t,
                get currency() {
                  return e.currency;
                },
              },
              r
            )
          )
        )),
      ft(s, "src", ag),
      te(
        o,
        V(bc, {
          i18nKey: "wallet.trans.desc8",
          get rate() {
            return r().rate;
          },
          get i18namount() {
            return r().i18namount;
          },
          get children() {
            return [
              "Get extra ",
              lg(),
              " bonus on minimum of",
              " ",
              hg(),
              " deposit",
            ];
          },
        })
      ),
      _t(() =>
        Kt(
          i,
          tt(
            e.class,
            "flex items-center p-1 rounded-xl bg-[#FFF0DE] dark:bg-[#514634]"
          )
        )
      ),
      i
    );
  })();
}
Mn(["click"]);
const yg = "_container_p6iaf_46",
  wg = "_circle_p6iaf_49",
  vg = "_move_p6iaf_1",
  bg = "_tick_p6iaf_55",
  _g = "_complete_container_p6iaf_1",
  Eg = "_complete_move_p6iaf_1",
  ji = {
    "success-loading": "_success-loading_p6iaf_37",
    container: yg,
    circle: wg,
    move: vg,
    tick: bg,
    "complete-container": "_complete-container_p6iaf_60",
    complete_container: _g,
    "complete-circle": "_complete-circle_p6iaf_64",
    complete_move: Eg,
    "complete-tick": "_complete-tick_p6iaf_67",
  };
var Ag = ie(
  '<div><svg width=400 height=400><circle fill=none stroke-width=40 cx=200 cy=200 r=180 stroke-linecap=round></circle><polyline fill=none stroke-width=44 points="88,214 173,284 304,138"stroke-linecap=round stroke-linejoin=round>'
);
function Sg(e) {
  return (() => {
    var t = Ag(),
      r = t.firstChild,
      i = r.firstChild,
      n = i.nextSibling;
    return (
      _t(
        (s) => {
          var o = tt(ji["success-loading"]),
            c = tt(ji.container, e.complete && ji["complete-container"]),
            l = tt(ji.circle, e.complete && ji["complete-circle"]),
            f = tt(ji.tick, e.complete && ji["complete-tick"]);
          return (
            o !== s.e && Kt(t, (s.e = o)),
            c !== s.t && ft(r, "class", (s.t = c)),
            l !== s.a && ft(i, "class", (s.a = l)),
            f !== s.o && ft(n, "class", (s.o = f)),
            s
          );
        },
        { e: void 0, t: void 0, a: void 0, o: void 0 }
      ),
      t
    );
  })();
}
var Ig = ie(
    "<div>โปรดตรวจสอบจำนวนเล็กๆ ทศนิยมบนหน้าเติมเงินของบุคคลที่สาม และกรอกตามนั้น มิฉะนั้นเงินฝากอาจไม่เข้าบัญชีของคุณ"
  ),
  Dg = ie("<div>*입금/출금 전 반드시 참고해 주시기 바랍니다."),
  xg = ie(
    "<div>계좌발급은 최초 1회 휴대폰 본인인증을 통하여 진행되며, 1회 인증 후에는 인증요청 없이 계좌 발급이 가능 합니다. 인증 후 신청이력에서 자세히보기로 계좌번호를 확인해주세요. KRW 입금 이력이 있는 계좌만 출금신청을 할 수 있습니다. 은행 점검 시간에는 입금/출금 요청이 불가합니다."
  ),
  qh = ie("<p>유의사항"),
  Cg = ie(
    "<p>1.계좌 입금은 반드시 본인 계좌로만 입금/출금되며 해당 은행 전용앱에서만 가능합니다.(본인계좌가 아닐시 반환처리되니 고객센터로 문의해주십시요)"
  ),
  Tg = ie(
    "<p>2.본인 입출금 계좌의 정식 은행앱이 아닌 토스,페이, ATM은 입금이 불가능 합니다."
  ),
  Mg = ie(
    "<p>3. 출금 시 입금액의 최소 100%의 롤링이 필요합니다. 출금처리 시간은 약 최소 5분에서 최대 24시간이 소요될 수 있으며 순차적으로 처리됩니다."
  ),
  Ng = ie("<p>4.출금 시 만원단위로 출금 신청을 해주시길 바랍니다."),
  Og = ie(
    "<p>5.롤 오버 요구 사항이 충족되지 않을 경우 당사는 인출을 거부할 권리를 가집니다."
  ),
  Rg = ie(
    "<p>6.1회 최소1만원 이상 최대 500만원 까지 입금이 가능합니다. 출금은 최소 3만원 이상 최대 500만원까지 가능합니다."
  ),
  Pg = ie(
    "<div>*입금,출금 전 반드시 참고하여 주시기 바랍니다. (먼저 팝업을 항상허용해주세요."
  ),
  Bg = ie(
    "<div>가상계좌 발급은 최초 입금할 계좌의 1원 인증을 통해 진행되며 이후에는 기존 발급된 계좌로만 입금이 가능합니다. KRW 입금이력이 있는 계좌만 출금신청을 할 수 있습니다. 은행 점검 시간에는 입금,출금 요청이 불가능합니다."
  ),
  Lg = ie(
    "<p>1.가상계좌 입금은 반드시 계좌 발급 시 작성한 등록된 입출금계좌로만 입,출금되며 해당 은행 전용앱에서만 가능합니다."
  ),
  Fg = ie(
    "<p>2.본인 입출금계좌의 정식 은행앱이 아닌 토스, 페이, ATM 은 입금이 불가능합니다."
  ),
  $g = ie(
    "<p>3.출금 시에 입금액의 최소 100%의 롤링이 필요합니다. 출금처리 기간은 약 최소 5분에서 최대 24시간이 소요될 수 있으며 순차적으로 처리됩니다."
  ),
  Ug = ie("<p>4.출금시 만원단위로 출금신청을 해주시길 바랍니다."),
  kg = ie(
    "<p>5.롤오버 요구 사항이 충족되지 않은 경우 당사는 인출을 거부할 권리를 가집니다."
  ),
  qg = ie(
    "<p>6.1회 최소 1만 원 이상 최대 300만 원까지 입금이 가능합니다. 출금은 최소 3만 원 이상 최대 700만 원까지 가능합니다."
  ),
  jg = ie(
    "<p>7.5000$(또는 이에 상응하는 금액)을 초과하여 출금하는 경우에는 처리하는데 더 많은 시간이 소요되며 신원확인이 필요할 수 있습니다."
  ),
  zg = ie(
    "<p>8.농협은행의 경우 농협중앙회(농협은행), 농협지역단위은행으로 반드시 구분하셔야 합니다."
  );
function Kg(e) {
  return V(Ii, {
    get children() {
      return [
        V(rt, {
          get when() {
            return (
              sr(() => e.currency === "KRWFIAT")() &&
              e.method.toLocaleLowerCase() === "vacpay"
            );
          },
          get children() {
            return V(Gg, {});
          },
        }),
        V(rt, {
          get when() {
            return (
              sr(() => e.currency === "KRWFIAT")() &&
              e.method.toLocaleLowerCase() === "gluwa"
            );
          },
          get children() {
            return V(Hg, {});
          },
        }),
        V(rt, {
          get when() {
            return e.currency === "THBFIAT";
          },
          get children() {
            return V(Vg, {});
          },
        }),
      ];
    },
  });
}
function Vg() {
  return V(Ur, {
    type: "info",
    class: "mt-4",
    get children() {
      return ["ข้อควรระวัง:", Ig()];
    },
  });
}
function Hg() {
  return V(Ur, {
    class: "flex-col mt-4",
    get children() {
      return [Dg(), xg(), qh(), Cg(), Tg(), Mg(), Ng(), Og(), Rg()];
    },
  });
}
function Gg() {
  return V(Ur, {
    class: "flex-col mt-4",
    get children() {
      return [Pg(), Bg(), qh(), Lg(), Fg(), $g(), Ug(), kg(), qg(), jg(), zg()];
    },
  });
}
var Wg = ie("<div>"),
  Qg = ie(
    '<div class="bg-layer4 p-3 rounded-b-xl"><div class="font-semibold text-secondary mb-5"></div><div class="flex-col center">'
  );
function Yg(e) {
  const [t] = Is(() => M0().get("/payment/deposit/fiat/user/qrcodetext/"));
  return V(Fi, {
    get fallback() {
      return V(Oo, { class: "bg-layer4 p-3 rounded-b-xl" });
    },
    get children() {
      return V(Ii, {
        get children() {
          return [
            V(rt, {
              get when() {
                return t.error;
              },
              get children() {
                return V(Nn, {
                  get children() {
                    return t.error.message;
                  },
                });
              },
            }),
            V(rt, {
              get when() {
                return t();
              },
              children: (r) =>
                (() => {
                  var i = Qg(),
                    n = i.firstChild,
                    s = n.nextSibling;
                  return (
                    te(
                      i,
                      V(Uh, {
                        get children() {
                          return V(Ec, {
                            get currency() {
                              return e.currency;
                            },
                          });
                        },
                      }),
                      n
                    ),
                    te(n, () => le("Deposit Details")),
                    te(
                      i,
                      V(Ur, {
                        type: "info",
                        class: "mb-5",
                        get children() {
                          var o = Wg();
                          return (
                            _t(
                              () =>
                                (o.innerHTML =
                                  e.channel.toLocaleLowerCase() === "vcreditvsi"
                                    ? le(
                                        "Please transfer funds using Vcreditos with the deposit details below."
                                      )
                                    : le(
                                        "Please transfer funds within <b>10 minutes</b> using the payment details specified below."
                                      ))
                            ),
                            o
                          );
                        },
                      }),
                      s
                    ),
                    te(
                      s,
                      V(Q0, {
                        get url() {
                          return r().text;
                        },
                      })
                    ),
                    i
                  );
                })(),
            }),
          ];
        },
      });
    },
  });
}
var Jg = ie("<div>"),
  Xg = ie("<div class=mb-4>2."),
  Zg = ie('<div class="text-secondary font-semibold"><div class=mb-4>1. ');
function e1(e) {
  return (
    Do.emit("sensorsTrack", {
      event: "deposit_fiatpayment_click",
      coin_type: e.currencyName,
      payment_method: e.method,
    }),
    Lh.depositKyc(e.currencyName, e.wayName, e.method, e.channel)
  );
}
function Yo(e) {
  const t = e.mode === 0 || e.mode === 10 || e.mode === 6,
    r = e.mode === 5 || e.mode === 15;
  return { needRedirect: t, isIframe: r, isNewOpen: t || r };
}
function t1() {
  return V(Ur, {
    type: "info",
    get children() {
      var e = Jg();
      return (
        _t(
          () =>
            (e.innerHTML = le(
              "You can only use your <b>mobile device</b> to make deposits via this payment method, or you can change a different payment method."
            ))
        ),
        e
      );
    },
  });
}
function r1(e) {
  return V(Ii, {
    get fallback() {
      return [
        V(
          c1,
          Gt(() => e.payment, {
            get currencyName() {
              return e.currency;
            },
            get callBack() {
              return e.callBack;
            },
          })
        ),
        V(Kg, {
          get currency() {
            return e.currency;
          },
          get method() {
            return e.payment.method;
          },
        }),
      ];
    },
    get children() {
      return [
        V(rt, {
          get when() {
            return e.payment.mode === 1;
          },
          get children() {
            return V(Yg, {
              get currency() {
                return e.currency;
              },
              get channel() {
                return e.payment.channel;
              },
            });
          },
        }),
        V(rt, {
          get when() {
            return !1;
          },
          get children() {
            return V(t1, {});
          },
        }),
      ];
    },
  });
}
const i1 = { BRLFIAT: 50, INRFIAT: 500, PHPFIAT: 200 };
function n1(e, t, r) {
  const i = i1[e];
  return i && t <= i && r > i ? i : t;
}
function s1(e) {
  return V(nn, {
    type: "center",
    close: !1,
    get children() {
      var t = Zg(),
        r = t.firstChild;
      return (
        r.firstChild,
        te(r, () => le(e.message), null),
        te(
          t,
          V(it, {
            get when() {
              return e.show;
            },
            get children() {
              var i = Xg();
              return (
                i.firstChild,
                te(
                  i,
                  () =>
                    le(
                      'The transfer must be filled out with the "Reference"code, otherwise the transaction will not be recognized.'
                    ),
                  null
                ),
                i
              );
            },
          }),
          null
        ),
        te(
          t,
          V(Xt, {
            class: "w-full mt-5",
            onClick: () => {
              hr.pop();
            },
            type: "brand",
            get children() {
              return le("Confirm");
            },
          }),
          null
        ),
        t
      );
    },
  });
}
const o1 = "SunV2Pay",
  a1 = ["SEPA", "SEPAINSTANT", "CHAPS", "FASTERPAYMENTS"],
  c1 = function (t) {
    const [r] = Is(
      () => t.channel + t.method,
      () => e1(t)
    );
    return (
      vc(() => {
        t.tipMessage &&
          setTimeout(
            () =>
              hr.push(() =>
                V(s1, {
                  get message() {
                    return t.tipMessage;
                  },
                  get show() {
                    return (
                      sr(() => t.method === o1)() &&
                      a1.some((i) => i === t.channel)
                    );
                  },
                })
              ),
            500
          );
      }),
      V(Fi, {
        get fallback() {
          return V(Oo, {});
        },
        get children() {
          return V(Ii, {
            get children() {
              return [
                V(rt, {
                  get when() {
                    return r.error;
                  },
                  get children() {
                    return V(Nn, {
                      get children() {
                        return r.error.message;
                      },
                    });
                  },
                }),
                V(rt, {
                  get when() {
                    return r();
                  },
                  children: (i) =>
                    V(
                      U0,
                      Gt(i, {
                        get amountList() {
                          return t.amountList;
                        },
                        get max() {
                          return Number(t.maxDepositAmount);
                        },
                        get min() {
                          return Number(t.minDepositAmount);
                        },
                        get defaultAmount() {
                          return n1(
                            t.currencyName,
                            Number(t.minDepositAmount),
                            Number(t.maxDepositAmount)
                          );
                        },
                        get needRedirect() {
                          return Yo(t).needRedirect;
                        },
                        get diabledInput() {
                          return t.channel === "promptPay";
                        },
                        get isIframe() {
                          return Yo(t).isIframe;
                        },
                        get isKRW() {
                          return t.currencyName === "KRWFIAT";
                        },
                        get isNewOpen() {
                          return Yo(t).isNewOpen;
                        },
                        get cs() {
                          return Et.getCurrencySymbol(t.currencyName) || "";
                        },
                        get icon() {
                          return yc.darken ? t.nightIcon : t.lightIcon;
                        },
                        get currencyName() {
                          return t.currencyName;
                        },
                        get mode() {
                          return t.mode;
                        },
                        get name() {
                          return t.name;
                        },
                        get callBack() {
                          return t.callBack;
                        },
                        get kycRequirement() {
                          return t.kycRequirement;
                        },
                      })
                    ),
                }),
              ];
            },
          });
        },
      })
    );
  },
  jh = "/modules/wallet2/assets/scatter-be6f5048.png";
var u1 = ie(
    '<div class="flex items-center"><div class="rounded p-2 bg-layer1"><img class="h-10 w-10"alt=""></div><div class=ml-2><div class=text-second></div><div class=font-extrabold>Scatter'
  ),
  l1 = ie(
    '<div class=mt-5><div class="mb-1 flex items-center"><img class="mr-1 h-4 w-4"><div class="font-semibold text-secondary">EOS '
  ),
  h1 = ie('<img class="mr-1 h-5 w-5"alt="">'),
  f1 = ie('<div class="font-semibold text-secondary">Scatter');
const d1 = () =>
  Ch(
    () => import("./scatterSupport-ed21a998.js"),
    [
      "assets/scatterSupport-ed21a998.js",
      "assets/AboutJb-13924d78.js",
      "assets/web-da7da7e5.js",
      "assets/manifest-e0f0ba59.js",
      "assets/solid-js-2e15682c.js",
      "assets/i18n-9b1e4bd8.js",
      "assets/bethistory-fcf99adb.js",
      "assets/withdrawFiat-1254e3b3.js",
      "assets/Icon-b6e375d0.js",
      "assets/CopyInput-441aca40.js",
      "assets/store-2ed2b91e.js",
      "assets/Loading-72a9f35e.js",
      "assets/lib-6879580e.js",
      "assets/memoize-ff109130.js",
      "assets/sortBy-6b2810fa.js",
      "assets/_baseFlatten-f0777715.js",
      "assets/_setToArray-f7a05dc1.js",
      "assets/_defineProperty-3c705e3e.js",
      "assets/_baseOrderBy-d3b5242c.js",
      "assets/_baseIteratee-dc3e9bea.js",
      "assets/Utr-adf02821.js",
      "assets/Qrcode-20508360.js",
      "assets/Icon-603169e7.js",
      "assets/store-eb5336a3.js",
      "assets/_baseFindIndex-15a8234c.js",
      "assets/toInteger-112c6978.js",
      "assets/toNumber-d93b0850.js",
      "assets/router-5691abb0.js",
      "assets/AboutBcl-bcb4cc45.js",
      "assets/groupBy-5d1dee29.js",
      "assets/orderBy-fc8ca101.js",
      "assets/ErrorRest-1a0f0516.js",
      "assets/SelectCurrency-0ef42d5c.js",
      "assets/LocalAmountItem-390b01c4.js",
    ]
  );
function g1(e) {
  const [t, r] = dr(0),
    i = () =>
      P(this, null, function* () {
        try {
          const { transaction: n } = yield d1();
          let s = yield n(e.address, t(), e.memo);
          Yt.success(`Transaction ID(${s.transaction_id})`);
        } catch (n) {
          Yt(n);
        }
      });
  return V(nn, {
    id: "tronlink",
    get children() {
      return [
        (() => {
          var n = u1(),
            s = n.firstChild,
            o = s.firstChild,
            c = s.nextSibling,
            l = c.firstChild;
          return ft(o, "src", jh), te(l, () => le("Deposit with")), n;
        })(),
        (() => {
          var n = l1(),
            s = n.firstChild,
            o = s.firstChild,
            c = o.nextSibling;
          return (
            c.firstChild,
            te(c, () => le("Deposit amount"), null),
            te(
              n,
              V(xo, {
                get value() {
                  return t();
                },
                onChange: (l) => r(l),
                type: "number",
                class: "text-base font-semibold",
              }),
              null
            ),
            te(
              n,
              V(Xt, {
                type: "brand",
                class: "w-full my-4",
                onClick: i,
                get children() {
                  return le("Deposit");
                },
              }),
              null
            ),
            _t(() => ft(o, "src", ai.coinIcon("EOS"))),
            n
          );
        })(),
      ];
    },
  });
}
function p1(e) {
  return V(Xt, {
    type: "second",
    get class() {
      return tt("flex items-center bg-layer6", e.class);
    },
    onClick: () => hr.push(() => V(g1, e)),
    get children() {
      return [
        (() => {
          var t = h1();
          return ft(t, "src", jh), t;
        })(),
        f1(),
      ];
    },
  });
}
const zh = "/modules/wallet2/assets/walletConnect-60fcdf0d.png";
var Ac = { exports: {} },
  En = typeof Reflect == "object" ? Reflect : null,
  du =
    En && typeof En.apply == "function"
      ? En.apply
      : function (t, r, i) {
          return Function.prototype.apply.call(t, r, i);
        },
  eo;
En && typeof En.ownKeys == "function"
  ? (eo = En.ownKeys)
  : Object.getOwnPropertySymbols
  ? (eo = function (t) {
      return Object.getOwnPropertyNames(t).concat(
        Object.getOwnPropertySymbols(t)
      );
    })
  : (eo = function (t) {
      return Object.getOwnPropertyNames(t);
    });
function m1(e) {
  console && console.warn && console.warn(e);
}
var Kh =
  Number.isNaN ||
  function (t) {
    return t !== t;
  };
function nt() {
  nt.init.call(this);
}
Ac.exports = nt;
Ac.exports.once = b1;
nt.EventEmitter = nt;
nt.prototype._events = void 0;
nt.prototype._eventsCount = 0;
nt.prototype._maxListeners = void 0;
var gu = 10;
function Ro(e) {
  if (typeof e != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof e
    );
}
Object.defineProperty(nt, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return gu;
  },
  set: function (e) {
    if (typeof e != "number" || e < 0 || Kh(e))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          e +
          "."
      );
    gu = e;
  },
});
nt.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
nt.prototype.setMaxListeners = function (t) {
  if (typeof t != "number" || t < 0 || Kh(t))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        t +
        "."
    );
  return (this._maxListeners = t), this;
};
function Vh(e) {
  return e._maxListeners === void 0 ? nt.defaultMaxListeners : e._maxListeners;
}
nt.prototype.getMaxListeners = function () {
  return Vh(this);
};
nt.prototype.emit = function (t) {
  for (var r = [], i = 1; i < arguments.length; i++) r.push(arguments[i]);
  var n = t === "error",
    s = this._events;
  if (s !== void 0) n = n && s.error === void 0;
  else if (!n) return !1;
  if (n) {
    var o;
    if ((r.length > 0 && (o = r[0]), o instanceof Error)) throw o;
    var c = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw ((c.context = o), c);
  }
  var l = s[t];
  if (l === void 0) return !1;
  if (typeof l == "function") du(l, this, r);
  else
    for (var f = l.length, g = Yh(l, f), i = 0; i < f; ++i) du(g[i], this, r);
  return !0;
};
function Hh(e, t, r, i) {
  var n, s, o;
  if (
    (Ro(r),
    (s = e._events),
    s === void 0
      ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
      : (s.newListener !== void 0 &&
          (e.emit("newListener", t, r.listener ? r.listener : r),
          (s = e._events)),
        (o = s[t])),
    o === void 0)
  )
    (o = s[t] = r), ++e._eventsCount;
  else if (
    (typeof o == "function"
      ? (o = s[t] = i ? [r, o] : [o, r])
      : i
      ? o.unshift(r)
      : o.push(r),
    (n = Vh(e)),
    n > 0 && o.length > n && !o.warned)
  ) {
    o.warned = !0;
    var c = new Error(
      "Possible EventEmitter memory leak detected. " +
        o.length +
        " " +
        String(t) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (c.name = "MaxListenersExceededWarning"),
      (c.emitter = e),
      (c.type = t),
      (c.count = o.length),
      m1(c);
  }
  return e;
}
nt.prototype.addListener = function (t, r) {
  return Hh(this, t, r, !1);
};
nt.prototype.on = nt.prototype.addListener;
nt.prototype.prependListener = function (t, r) {
  return Hh(this, t, r, !0);
};
function y1() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function Gh(e, t, r) {
  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
    n = y1.bind(i);
  return (n.listener = r), (i.wrapFn = n), n;
}
nt.prototype.once = function (t, r) {
  return Ro(r), this.on(t, Gh(this, t, r)), this;
};
nt.prototype.prependOnceListener = function (t, r) {
  return Ro(r), this.prependListener(t, Gh(this, t, r)), this;
};
nt.prototype.removeListener = function (t, r) {
  var i, n, s, o, c;
  if ((Ro(r), (n = this._events), n === void 0)) return this;
  if (((i = n[t]), i === void 0)) return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete n[t],
        n.removeListener && this.emit("removeListener", t, i.listener || r));
  else if (typeof i != "function") {
    for (s = -1, o = i.length - 1; o >= 0; o--)
      if (i[o] === r || i[o].listener === r) {
        (c = i[o].listener), (s = o);
        break;
      }
    if (s < 0) return this;
    s === 0 ? i.shift() : w1(i, s),
      i.length === 1 && (n[t] = i[0]),
      n.removeListener !== void 0 && this.emit("removeListener", t, c || r);
  }
  return this;
};
nt.prototype.off = nt.prototype.removeListener;
nt.prototype.removeAllListeners = function (t) {
  var r, i, n;
  if (((i = this._events), i === void 0)) return this;
  if (i.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : i[t] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete i[t]),
      this
    );
  if (arguments.length === 0) {
    var s = Object.keys(i),
      o;
    for (n = 0; n < s.length; ++n)
      (o = s[n]), o !== "removeListener" && this.removeAllListeners(o);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((r = i[t]), typeof r == "function")) this.removeListener(t, r);
  else if (r !== void 0)
    for (n = r.length - 1; n >= 0; n--) this.removeListener(t, r[n]);
  return this;
};
function Wh(e, t, r) {
  var i = e._events;
  if (i === void 0) return [];
  var n = i[t];
  return n === void 0
    ? []
    : typeof n == "function"
    ? r
      ? [n.listener || n]
      : [n]
    : r
    ? v1(n)
    : Yh(n, n.length);
}
nt.prototype.listeners = function (t) {
  return Wh(this, t, !0);
};
nt.prototype.rawListeners = function (t) {
  return Wh(this, t, !1);
};
nt.listenerCount = function (e, t) {
  return typeof e.listenerCount == "function"
    ? e.listenerCount(t)
    : Qh.call(e, t);
};
nt.prototype.listenerCount = Qh;
function Qh(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function") return 1;
    if (r !== void 0) return r.length;
  }
  return 0;
}
nt.prototype.eventNames = function () {
  return this._eventsCount > 0 ? eo(this._events) : [];
};
function Yh(e, t) {
  for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
  return r;
}
function w1(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop();
}
function v1(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function b1(e, t) {
  return new Promise(function (r, i) {
    function n(o) {
      e.removeListener(t, s), i(o);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", n),
        r([].slice.call(arguments));
    }
    Jh(e, t, s, { once: !0 }), t !== "error" && _1(e, n, { once: !0 });
  });
}
function _1(e, t, r) {
  typeof e.on == "function" && Jh(e, "error", t, r);
}
function Jh(e, t, r, i) {
  if (typeof e.on == "function") i.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function n(s) {
      i.once && e.removeEventListener(t, n), r(s);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof e
    );
}
var zr = Ac.exports;
const Xh = Mo(zr),
  E1 =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  A1 =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  S1 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function I1(e, t) {
  if (
    e === "__proto__" ||
    (e === "constructor" && t && typeof t == "object" && "prototype" in t)
  ) {
    D1(e);
    return;
  }
  return t;
}
function D1(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function qs(e, t = {}) {
  if (typeof e != "string") return e;
  const r = e.trim();
  if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
    return r.slice(1, -1);
  if (r.length <= 9) {
    const i = r.toLowerCase();
    if (i === "true") return !0;
    if (i === "false") return !1;
    if (i === "undefined") return;
    if (i === "null") return null;
    if (i === "nan") return Number.NaN;
    if (i === "infinity") return Number.POSITIVE_INFINITY;
    if (i === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!S1.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (E1.test(e) || A1.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, I1);
    }
    return JSON.parse(e);
  } catch (i) {
    if (t.strict) throw i;
    return e;
  }
}
function x1(e) {
  return !e || typeof e.then != "function" ? Promise.resolve(e) : e;
}
function Mt(e, ...t) {
  try {
    return x1(e(...t));
  } catch (r) {
    return Promise.reject(r);
  }
}
function C1(e) {
  const t = typeof e;
  return e === null || (t !== "object" && t !== "function");
}
function T1(e) {
  const t = Object.getPrototypeOf(e);
  return !t || t.isPrototypeOf(Object);
}
function to(e) {
  if (C1(e)) return String(e);
  if (T1(e) || Array.isArray(e)) return JSON.stringify(e);
  if (typeof e.toJSON == "function") return to(e.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Zh() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Fa = "base64:";
function M1(e) {
  if (typeof e == "string") return e;
  Zh();
  const t = Buffer.from(e).toString("base64");
  return Fa + t;
}
function N1(e) {
  return typeof e != "string" || !e.startsWith(Fa)
    ? e
    : (Zh(), Buffer.from(e.slice(Fa.length), "base64"));
}
function tr(e) {
  return e
    ? e
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function O1(...e) {
  return tr(e.join(":"));
}
function js(e) {
  return (e = tr(e)), e ? e + ":" : "";
}
const R1 = "memory",
  P1 = () => {
    const e = new Map();
    return {
      name: R1,
      options: {},
      hasItem(t) {
        return e.has(t);
      },
      getItem(t) {
        var r;
        return (r = e.get(t)) != null ? r : null;
      },
      getItemRaw(t) {
        var r;
        return (r = e.get(t)) != null ? r : null;
      },
      setItem(t, r) {
        e.set(t, r);
      },
      setItemRaw(t, r) {
        e.set(t, r);
      },
      removeItem(t) {
        e.delete(t);
      },
      getKeys() {
        return Array.from(e.keys());
      },
      clear() {
        e.clear();
      },
      dispose() {
        e.clear();
      },
    };
  };
function B1(e = {}) {
  const t = {
      mounts: { "": e.driver || P1() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    r = (g) => {
      for (const w of t.mountpoints)
        if (g.startsWith(w))
          return {
            base: w,
            relativeKey: g.slice(w.length),
            driver: t.mounts[w],
          };
      return { base: "", relativeKey: g, driver: t.mounts[""] };
    },
    i = (g, w) =>
      t.mountpoints
        .filter((D) => D.startsWith(g) || (w && g.startsWith(D)))
        .map((D) => ({
          relativeBase: g.length > D.length ? g.slice(D.length) : void 0,
          mountpoint: D,
          driver: t.mounts[D],
        })),
    n = (g, w) => {
      if (t.watching) {
        w = tr(w);
        for (const D of t.watchListeners) D(g, w);
      }
    },
    s = () =>
      P(this, null, function* () {
        if (!t.watching) {
          t.watching = !0;
          for (const g in t.mounts) t.unwatch[g] = yield pu(t.mounts[g], n, g);
        }
      }),
    o = () =>
      P(this, null, function* () {
        if (t.watching) {
          for (const g in t.unwatch) yield t.unwatch[g]();
          (t.unwatch = {}), (t.watching = !1);
        }
      }),
    c = (g, w, D) => {
      const A = new Map(),
        M = (K) => {
          let q = A.get(K.base);
          return (
            q ||
              ((q = { driver: K.driver, base: K.base, items: [] }),
              A.set(K.base, q)),
            q
          );
        };
      for (const K of g) {
        const q = typeof K == "string",
          Q = tr(q ? K : K.key),
          N = q ? void 0 : K.value,
          H = q || !K.options ? w : Ye(Ye({}, w), K.options),
          L = r(Q);
        M(L).items.push({
          key: Q,
          value: N,
          relativeKey: L.relativeKey,
          options: H,
        });
      }
      return Promise.all([...A.values()].map((K) => D(K))).then((K) =>
        K.flat()
      );
    },
    l = {
      hasItem(g, w = {}) {
        g = tr(g);
        const { relativeKey: D, driver: A } = r(g);
        return Mt(A.hasItem, D, w);
      },
      getItem(g, w = {}) {
        g = tr(g);
        const { relativeKey: D, driver: A } = r(g);
        return Mt(A.getItem, D, w).then((M) => qs(M));
      },
      getItems(g, w) {
        return c(g, w, (D) =>
          D.driver.getItems
            ? Mt(
                D.driver.getItems,
                D.items.map((A) => ({
                  key: A.relativeKey,
                  options: A.options,
                })),
                w
              ).then((A) =>
                A.map((M) => ({ key: O1(D.base, M.key), value: qs(M.value) }))
              )
            : Promise.all(
                D.items.map((A) =>
                  Mt(D.driver.getItem, A.relativeKey, A.options).then((M) => ({
                    key: A.key,
                    value: qs(M),
                  }))
                )
              )
        );
      },
      getItemRaw(g, w = {}) {
        g = tr(g);
        const { relativeKey: D, driver: A } = r(g);
        return A.getItemRaw
          ? Mt(A.getItemRaw, D, w)
          : Mt(A.getItem, D, w).then((M) => N1(M));
      },
      setItem(A, M) {
        return P(this, arguments, function* (g, w, D = {}) {
          if (w === void 0) return l.removeItem(g);
          g = tr(g);
          const { relativeKey: K, driver: q } = r(g);
          q.setItem &&
            (yield Mt(q.setItem, K, to(w), D), q.watch || n("update", g));
        });
      },
      setItems(g, w) {
        return P(this, null, function* () {
          yield c(g, w, (D) =>
            P(this, null, function* () {
              if (D.driver.setItems)
                return Mt(
                  D.driver.setItems,
                  D.items.map((A) => ({
                    key: A.relativeKey,
                    value: to(A.value),
                    options: A.options,
                  })),
                  w
                );
              D.driver.setItem &&
                (yield Promise.all(
                  D.items.map((A) =>
                    Mt(D.driver.setItem, A.relativeKey, to(A.value), A.options)
                  )
                ));
            })
          );
        });
      },
      setItemRaw(A, M) {
        return P(this, arguments, function* (g, w, D = {}) {
          if (w === void 0) return l.removeItem(g, D);
          g = tr(g);
          const { relativeKey: K, driver: q } = r(g);
          if (q.setItemRaw) yield Mt(q.setItemRaw, K, w, D);
          else if (q.setItem) yield Mt(q.setItem, K, M1(w), D);
          else return;
          q.watch || n("update", g);
        });
      },
      removeItem(D) {
        return P(this, arguments, function* (g, w = {}) {
          typeof w == "boolean" && (w = { removeMeta: w }), (g = tr(g));
          const { relativeKey: A, driver: M } = r(g);
          M.removeItem &&
            (yield Mt(M.removeItem, A, w),
            (w.removeMeta || w.removeMata) &&
              (yield Mt(M.removeItem, A + "$", w)),
            M.watch || n("remove", g));
        });
      },
      getMeta(D) {
        return P(this, arguments, function* (g, w = {}) {
          typeof w == "boolean" && (w = { nativeOnly: w }), (g = tr(g));
          const { relativeKey: A, driver: M } = r(g),
            K = Object.create(null);
          if (
            (M.getMeta && Object.assign(K, yield Mt(M.getMeta, A, w)),
            !w.nativeOnly)
          ) {
            const q = yield Mt(M.getItem, A + "$", w).then((Q) => qs(Q));
            q &&
              typeof q == "object" &&
              (typeof q.atime == "string" && (q.atime = new Date(q.atime)),
              typeof q.mtime == "string" && (q.mtime = new Date(q.mtime)),
              Object.assign(K, q));
          }
          return K;
        });
      },
      setMeta(g, w, D = {}) {
        return this.setItem(g + "$", w, D);
      },
      removeMeta(g, w = {}) {
        return this.removeItem(g + "$", w);
      },
      getKeys(D) {
        return P(this, arguments, function* (g, w = {}) {
          g = js(g);
          const A = i(g, !0);
          let M = [];
          const K = [];
          for (const q of A) {
            const N = (yield Mt(q.driver.getKeys, q.relativeBase, w))
              .map((H) => q.mountpoint + tr(H))
              .filter((H) => !M.some((L) => H.startsWith(L)));
            K.push(...N),
              (M = [
                q.mountpoint,
                ...M.filter((H) => !H.startsWith(q.mountpoint)),
              ]);
          }
          return g
            ? K.filter((q) => q.startsWith(g) && !q.endsWith("$"))
            : K.filter((q) => !q.endsWith("$"));
        });
      },
      clear(D) {
        return P(this, arguments, function* (g, w = {}) {
          (g = js(g)),
            yield Promise.all(
              i(g, !1).map((A) =>
                P(this, null, function* () {
                  if (A.driver.clear)
                    return Mt(A.driver.clear, A.relativeBase, w);
                  if (A.driver.removeItem) {
                    const M = yield A.driver.getKeys(A.relativeBase || "", w);
                    return Promise.all(M.map((K) => A.driver.removeItem(K, w)));
                  }
                })
              )
            );
        });
      },
      dispose() {
        return P(this, null, function* () {
          yield Promise.all(Object.values(t.mounts).map((g) => mu(g)));
        });
      },
      watch(g) {
        return P(this, null, function* () {
          return (
            yield s(),
            t.watchListeners.push(g),
            () =>
              P(this, null, function* () {
                (t.watchListeners = t.watchListeners.filter((w) => w !== g)),
                  t.watchListeners.length === 0 && (yield o());
              })
          );
        });
      },
      unwatch() {
        return P(this, null, function* () {
          (t.watchListeners = []), yield o();
        });
      },
      mount(g, w) {
        if (((g = js(g)), g && t.mounts[g]))
          throw new Error(`already mounted at ${g}`);
        return (
          g &&
            (t.mountpoints.push(g),
            t.mountpoints.sort((D, A) => A.length - D.length)),
          (t.mounts[g] = w),
          t.watching &&
            Promise.resolve(pu(w, n, g))
              .then((D) => {
                t.unwatch[g] = D;
              })
              .catch(console.error),
          l
        );
      },
      unmount(g, w = !0) {
        return P(this, null, function* () {
          (g = js(g)),
            !(!g || !t.mounts[g]) &&
              (t.watching &&
                g in t.unwatch &&
                (t.unwatch[g](), delete t.unwatch[g]),
              w && (yield mu(t.mounts[g])),
              (t.mountpoints = t.mountpoints.filter((D) => D !== g)),
              delete t.mounts[g]);
        });
      },
      getMount(g = "") {
        g = tr(g) + ":";
        const w = r(g);
        return { driver: w.driver, base: w.base };
      },
      getMounts(g = "", w = {}) {
        return (
          (g = tr(g)),
          i(g, w.parents).map((A) => ({ driver: A.driver, base: A.mountpoint }))
        );
      },
    };
  return l;
}
function pu(e, t, r) {
  return e.watch ? e.watch((i, n) => t(i, r + n)) : () => {};
}
function mu(e) {
  return P(this, null, function* () {
    typeof e.dispose == "function" && (yield Mt(e.dispose));
  });
}
function sn(e) {
  return new Promise((t, r) => {
    (e.oncomplete = e.onsuccess = () => t(e.result)),
      (e.onabort = e.onerror = () => r(e.error));
  });
}
function ef(e, t) {
  const r = indexedDB.open(e);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const i = sn(r);
  return (n, s) => i.then((o) => s(o.transaction(t, n).objectStore(t)));
}
let Jo;
function Ds() {
  return Jo || (Jo = ef("keyval-store", "keyval")), Jo;
}
function yu(e, t = Ds()) {
  return t("readonly", (r) => sn(r.get(e)));
}
function L1(e, t, r = Ds()) {
  return r("readwrite", (i) => (i.put(t, e), sn(i.transaction)));
}
function F1(e, t = Ds()) {
  return t("readwrite", (r) => (r.delete(e), sn(r.transaction)));
}
function $1(e = Ds()) {
  return e("readwrite", (t) => (t.clear(), sn(t.transaction)));
}
function U1(e, t) {
  return (
    (e.openCursor().onsuccess = function () {
      this.result && (t(this.result), this.result.continue());
    }),
    sn(e.transaction)
  );
}
function k1(e = Ds()) {
  return e("readonly", (t) => {
    if (t.getAllKeys) return sn(t.getAllKeys());
    const r = [];
    return U1(t, (i) => r.push(i.key)).then(() => r);
  });
}
const q1 = (e) =>
    JSON.stringify(e, (t, r) =>
      typeof r == "bigint" ? r.toString() + "n" : r
    ),
  j1 = (e) => {
    const t =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      r = e.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (i, n) =>
      typeof n == "string" && n.match(/^\d+n$/)
        ? BigInt(n.substring(0, n.length - 1))
        : n
    );
  };
function Po(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return j1(e);
  } catch (t) {
    return e;
  }
}
function tn(e) {
  return typeof e == "string" ? e : q1(e) || "";
}
const z1 = "idb-keyval";
var K1 = (e = {}) => {
  const t = e.base && e.base.length > 0 ? `${e.base}:` : "",
    r = (s) => t + s;
  let i;
  return (
    e.dbName && e.storeName && (i = ef(e.dbName, e.storeName)),
    {
      name: z1,
      options: e,
      hasItem(s) {
        return P(this, null, function* () {
          return !(typeof (yield yu(r(s), i)) > "u");
        });
      },
      getItem(s) {
        return P(this, null, function* () {
          var o;
          return (o = yield yu(r(s), i)) != null ? o : null;
        });
      },
      setItem(s, o) {
        return L1(r(s), o, i);
      },
      removeItem(s) {
        return F1(r(s), i);
      },
      getKeys() {
        return k1(i);
      },
      clear() {
        return $1(i);
      },
    }
  );
};
const V1 = "WALLET_CONNECT_V2_INDEXED_DB",
  H1 = "keyvaluestorage";
let G1 = class {
  constructor() {
    this.indexedDb = B1({ driver: K1({ dbName: V1, storeName: H1 }) });
  }
  getKeys() {
    return P(this, null, function* () {
      return this.indexedDb.getKeys();
    });
  }
  getEntries() {
    return P(this, null, function* () {
      return (yield this.indexedDb.getItems(
        yield this.indexedDb.getKeys()
      )).map((t) => [t.key, t.value]);
    });
  }
  getItem(t) {
    return P(this, null, function* () {
      const r = yield this.indexedDb.getItem(t);
      if (r !== null) return r;
    });
  }
  setItem(t, r) {
    return P(this, null, function* () {
      yield this.indexedDb.setItem(t, tn(r));
    });
  }
  removeItem(t) {
    return P(this, null, function* () {
      yield this.indexedDb.removeItem(t);
    });
  }
};
var Xo =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ro = { exports: {} };
(function () {
  let e;
  function t() {}
  (e = t),
    (e.prototype.getItem = function (r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }),
    (e.prototype.setItem = function (r, i) {
      this[r] = String(i);
    }),
    (e.prototype.removeItem = function (r) {
      delete this[r];
    }),
    (e.prototype.clear = function () {
      const r = this;
      Object.keys(r).forEach(function (i) {
        (r[i] = void 0), delete r[i];
      });
    }),
    (e.prototype.key = function (r) {
      return (r = r || 0), Object.keys(this)[r];
    }),
    e.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof Xo < "u" && Xo.localStorage
      ? (ro.exports = Xo.localStorage)
      : typeof window < "u" && window.localStorage
      ? (ro.exports = window.localStorage)
      : (ro.exports = new t());
})();
function W1(e) {
  var t;
  return [e[0], Po((t = e[1]) != null ? t : "")];
}
let Q1 = class {
  constructor() {
    this.localStorage = ro.exports;
  }
  getKeys() {
    return P(this, null, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return P(this, null, function* () {
      return Object.entries(this.localStorage).map(W1);
    });
  }
  getItem(t) {
    return P(this, null, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null) return Po(r);
    });
  }
  setItem(t, r) {
    return P(this, null, function* () {
      this.localStorage.setItem(t, tn(r));
    });
  }
  removeItem(t) {
    return P(this, null, function* () {
      this.localStorage.removeItem(t);
    });
  }
};
const Y1 = "wc_storage_version",
  wu = 1,
  J1 = (e, t, r) =>
    P(void 0, null, function* () {
      const i = Y1,
        n = yield t.getItem(i);
      if (n && n >= wu) {
        r(t);
        return;
      }
      const s = yield e.getKeys();
      if (!s.length) {
        r(t);
        return;
      }
      const o = [];
      for (; s.length; ) {
        const c = s.shift();
        if (!c) continue;
        const l = c.toLowerCase();
        if (
          l.includes("wc@") ||
          l.includes("walletconnect") ||
          l.includes("wc_") ||
          l.includes("wallet_connect")
        ) {
          const f = yield e.getItem(c);
          yield t.setItem(c, f), o.push(c);
        }
      }
      yield t.setItem(i, wu), r(t), X1(e, o);
    }),
  X1 = (e, t) =>
    P(void 0, null, function* () {
      t.length &&
        t.forEach((r) =>
          P(void 0, null, function* () {
            yield e.removeItem(r);
          })
        );
    });
let Z1 = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (r) => {
        (this.storage = r), (this.initialized = !0);
      });
    const t = new Q1();
    this.storage = t;
    try {
      const r = new G1();
      J1(t, r, this.setInitialized);
    } catch (r) {
      this.initialized = !0;
    }
  }
  getKeys() {
    return P(this, null, function* () {
      return yield this.initialize(), this.storage.getKeys();
    });
  }
  getEntries() {
    return P(this, null, function* () {
      return yield this.initialize(), this.storage.getEntries();
    });
  }
  getItem(t) {
    return P(this, null, function* () {
      return yield this.initialize(), this.storage.getItem(t);
    });
  }
  setItem(t, r) {
    return P(this, null, function* () {
      return yield this.initialize(), this.storage.setItem(t, r);
    });
  }
  removeItem(t) {
    return P(this, null, function* () {
      return yield this.initialize(), this.storage.removeItem(t);
    });
  }
  initialize() {
    return P(this, null, function* () {
      this.initialized ||
        (yield new Promise((t) => {
          const r = setInterval(() => {
            this.initialized && (clearInterval(r), t());
          }, 20);
        }));
    });
  }
};
var oe = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var $a =
  function (e, t) {
    return (
      ($a =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, i) {
            r.__proto__ = i;
          }) ||
        function (r, i) {
          for (var n in i) i.hasOwnProperty(n) && (r[n] = i[n]);
        }),
      $a(e, t)
    );
  };
function ep(e, t) {
  $a(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Ua = function () {
  return (
    (Ua =
      Object.assign ||
      function (t) {
        for (var r, i = 1, n = arguments.length; i < n; i++) {
          r = arguments[i];
          for (var s in r)
            Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        }
        return t;
      }),
    Ua.apply(this, arguments)
  );
};
function tp(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
        (r[i[n]] = e[i[n]]);
  return r;
}
function rp(e, t, r, i) {
  var n = arguments.length,
    s =
      n < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, r)) : i,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, i);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (o = e[c]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
}
function ip(e, t) {
  return function (r, i) {
    t(r, i, e);
  };
}
function np(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function sp(e, t, r, i) {
  function n(s) {
    return s instanceof r
      ? s
      : new r(function (o) {
          o(s);
        });
  }
  return new (r || (r = Promise))(function (s, o) {
    function c(g) {
      try {
        f(i.next(g));
      } catch (w) {
        o(w);
      }
    }
    function l(g) {
      try {
        f(i.throw(g));
      } catch (w) {
        o(w);
      }
    }
    function f(g) {
      g.done ? s(g.value) : n(g.value).then(c, l);
    }
    f((i = i.apply(e, t || [])).next());
  });
}
function op(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    i,
    n,
    s,
    o;
  return (
    (o = { next: c(0), throw: c(1), return: c(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function c(f) {
    return function (g) {
      return l([f, g]);
    };
  }
  function l(f) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (
          ((i = 1),
          n &&
            (s =
              f[0] & 2
                ? n.return
                : f[0]
                ? n.throw || ((s = n.return) && s.call(n), 0)
                : n.next) &&
            !(s = s.call(n, f[1])).done)
        )
          return s;
        switch (((n = 0), s && (f = [f[0] & 2, s.value]), f[0])) {
          case 0:
          case 1:
            s = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, (n = f[1]), (f = [0]);
            continue;
          case 7:
            (f = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((s = r.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (f[0] === 6 || f[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!s || (f[1] > s[0] && f[1] < s[3]))) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < s[1]) {
              (r.label = s[1]), (s = f);
              break;
            }
            if (s && r.label < s[2]) {
              (r.label = s[2]), r.ops.push(f);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = t.call(e, r);
      } catch (g) {
        (f = [6, g]), (n = 0);
      } finally {
        i = s = 0;
      }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function ap(e, t, r, i) {
  i === void 0 && (i = r), (e[i] = t[r]);
}
function cp(e, t) {
  for (var r in e) r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function ka(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    i = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function tf(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var i = r.call(e),
    n,
    s = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = i.next()).done; ) s.push(n.value);
  } catch (c) {
    o = { error: c };
  } finally {
    try {
      n && !n.done && (r = i.return) && r.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function up() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(tf(arguments[t]));
  return e;
}
function lp() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), n = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, c = s.length; o < c; o++, n++)
      i[n] = s[o];
  return i;
}
function ys(e) {
  return this instanceof ys ? ((this.v = e), this) : new ys(e);
}
function hp(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(e, t || []),
    n,
    s = [];
  return (
    (n = {}),
    o("next"),
    o("throw"),
    o("return"),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function o(D) {
    i[D] &&
      (n[D] = function (A) {
        return new Promise(function (M, K) {
          s.push([D, A, M, K]) > 1 || c(D, A);
        });
      });
  }
  function c(D, A) {
    try {
      l(i[D](A));
    } catch (M) {
      w(s[0][3], M);
    }
  }
  function l(D) {
    D.value instanceof ys
      ? Promise.resolve(D.value.v).then(f, g)
      : w(s[0][2], D);
  }
  function f(D) {
    c("next", D);
  }
  function g(D) {
    c("throw", D);
  }
  function w(D, A) {
    D(A), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function fp(e) {
  var t, r;
  return (
    (t = {}),
    i("next"),
    i("throw", function (n) {
      throw n;
    }),
    i("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function i(n, s) {
    t[n] = e[n]
      ? function (o) {
          return (r = !r)
            ? { value: ys(e[n](o)), done: n === "return" }
            : s
            ? s(o)
            : o;
        }
      : s;
  }
}
function dp(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ka == "function" ? ka(e) : e[Symbol.iterator]()),
      (r = {}),
      i("next"),
      i("throw"),
      i("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function i(s) {
    r[s] =
      e[s] &&
      function (o) {
        return new Promise(function (c, l) {
          (o = e[s](o)), n(c, l, o.done, o.value);
        });
      };
  }
  function n(s, o, c, l) {
    Promise.resolve(l).then(function (f) {
      s({ value: f, done: c });
    }, o);
  }
}
function gp(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, "raw", { value: t })
      : (e.raw = t),
    e
  );
}
function pp(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return (t.default = e), t;
}
function mp(e) {
  return e && e.__esModule ? e : { default: e };
}
function yp(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function wp(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const vp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Ua;
        },
        __asyncDelegator: fp,
        __asyncGenerator: hp,
        __asyncValues: dp,
        __await: ys,
        __awaiter: sp,
        __classPrivateFieldGet: yp,
        __classPrivateFieldSet: wp,
        __createBinding: ap,
        __decorate: rp,
        __exportStar: cp,
        __extends: ep,
        __generator: op,
        __importDefault: mp,
        __importStar: pp,
        __makeTemplateObject: gp,
        __metadata: np,
        __param: ip,
        __read: tf,
        __rest: tp,
        __spread: up,
        __spreadArrays: lp,
        __values: ka,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bo = No(vp);
var Zo = {},
  es = {},
  vu;
function bp() {
  if (vu) return es;
  (vu = 1),
    Object.defineProperty(es, "__esModule", { value: !0 }),
    (es.delay = void 0);
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return (es.delay = e), es;
}
var zi = {},
  ea = {},
  Ki = {},
  bu;
function _p() {
  return (
    bu ||
      ((bu = 1),
      Object.defineProperty(Ki, "__esModule", { value: !0 }),
      (Ki.ONE_THOUSAND = Ki.ONE_HUNDRED = void 0),
      (Ki.ONE_HUNDRED = 100),
      (Ki.ONE_THOUSAND = 1e3)),
    Ki
  );
}
var ta = {},
  _u;
function Ep() {
  return (
    _u ||
      ((_u = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ONE_YEAR =
            e.FOUR_WEEKS =
            e.THREE_WEEKS =
            e.TWO_WEEKS =
            e.ONE_WEEK =
            e.THIRTY_DAYS =
            e.SEVEN_DAYS =
            e.FIVE_DAYS =
            e.THREE_DAYS =
            e.ONE_DAY =
            e.TWENTY_FOUR_HOURS =
            e.TWELVE_HOURS =
            e.SIX_HOURS =
            e.THREE_HOURS =
            e.ONE_HOUR =
            e.SIXTY_MINUTES =
            e.THIRTY_MINUTES =
            e.TEN_MINUTES =
            e.FIVE_MINUTES =
            e.ONE_MINUTE =
            e.SIXTY_SECONDS =
            e.THIRTY_SECONDS =
            e.TEN_SECONDS =
            e.FIVE_SECONDS =
            e.ONE_SECOND =
              void 0),
          (e.ONE_SECOND = 1),
          (e.FIVE_SECONDS = 5),
          (e.TEN_SECONDS = 10),
          (e.THIRTY_SECONDS = 30),
          (e.SIXTY_SECONDS = 60),
          (e.ONE_MINUTE = e.SIXTY_SECONDS),
          (e.FIVE_MINUTES = e.ONE_MINUTE * 5),
          (e.TEN_MINUTES = e.ONE_MINUTE * 10),
          (e.THIRTY_MINUTES = e.ONE_MINUTE * 30),
          (e.SIXTY_MINUTES = e.ONE_MINUTE * 60),
          (e.ONE_HOUR = e.SIXTY_MINUTES),
          (e.THREE_HOURS = e.ONE_HOUR * 3),
          (e.SIX_HOURS = e.ONE_HOUR * 6),
          (e.TWELVE_HOURS = e.ONE_HOUR * 12),
          (e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24),
          (e.ONE_DAY = e.TWENTY_FOUR_HOURS),
          (e.THREE_DAYS = e.ONE_DAY * 3),
          (e.FIVE_DAYS = e.ONE_DAY * 5),
          (e.SEVEN_DAYS = e.ONE_DAY * 7),
          (e.THIRTY_DAYS = e.ONE_DAY * 30),
          (e.ONE_WEEK = e.SEVEN_DAYS),
          (e.TWO_WEEKS = e.ONE_WEEK * 2),
          (e.THREE_WEEKS = e.ONE_WEEK * 3),
          (e.FOUR_WEEKS = e.ONE_WEEK * 4),
          (e.ONE_YEAR = e.ONE_DAY * 365);
      })(ta)),
    ta
  );
}
var Eu;
function rf() {
  return (
    Eu ||
      ((Eu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Bo;
        t.__exportStar(_p(), e), t.__exportStar(Ep(), e);
      })(ea)),
    ea
  );
}
var Au;
function Ap() {
  if (Au) return zi;
  (Au = 1),
    Object.defineProperty(zi, "__esModule", { value: !0 }),
    (zi.fromMiliseconds = zi.toMiliseconds = void 0);
  const e = rf();
  function t(i) {
    return i * e.ONE_THOUSAND;
  }
  zi.toMiliseconds = t;
  function r(i) {
    return Math.floor(i / e.ONE_THOUSAND);
  }
  return (zi.fromMiliseconds = r), zi;
}
var Su;
function Sp() {
  return (
    Su ||
      ((Su = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Bo;
        t.__exportStar(bp(), e), t.__exportStar(Ap(), e);
      })(Zo)),
    Zo
  );
}
var fn = {},
  Iu;
function Ip() {
  if (Iu) return fn;
  (Iu = 1),
    Object.defineProperty(fn, "__esModule", { value: !0 }),
    (fn.Watch = void 0);
  class e {
    constructor() {
      this.timestamps = new Map();
    }
    start(r) {
      if (this.timestamps.has(r))
        throw new Error(`Watch already started for label: ${r}`);
      this.timestamps.set(r, { started: Date.now() });
    }
    stop(r) {
      const i = this.get(r);
      if (typeof i.elapsed != "undefined")
        throw new Error(`Watch already stopped for label: ${r}`);
      const n = Date.now() - i.started;
      this.timestamps.set(r, { started: i.started, elapsed: n });
    }
    get(r) {
      const i = this.timestamps.get(r);
      if (typeof i == "undefined")
        throw new Error(`No timestamp found for label: ${r}`);
      return i;
    }
    elapsed(r) {
      const i = this.get(r);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return (fn.Watch = e), (fn.default = e), fn;
}
var ra = {},
  ts = {},
  Du;
function Dp() {
  if (Du) return ts;
  (Du = 1),
    Object.defineProperty(ts, "__esModule", { value: !0 }),
    (ts.IWatch = void 0);
  class e {}
  return (ts.IWatch = e), ts;
}
var xu;
function xp() {
  return (
    xu ||
      ((xu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Bo.__exportStar(Dp(), e);
      })(ra)),
    ra
  );
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Bo;
  t.__exportStar(Sp(), e),
    t.__exportStar(Ip(), e),
    t.__exportStar(xp(), e),
    t.__exportStar(rf(), e);
})(oe);
class on {}
let Cp = class extends on {
  constructor(t) {
    super();
  }
};
const Cu = oe.FIVE_SECONDS,
  xs = { pulse: "heartbeat_pulse" };
let Tp = class nf extends Cp {
  constructor(t) {
    super(t),
      (this.events = new zr.EventEmitter()),
      (this.interval = Cu),
      (this.interval = (t == null ? void 0 : t.interval) || Cu);
  }
  static init(t) {
    return P(this, null, function* () {
      const r = new nf(t);
      return yield r.init(), r;
    });
  }
  init() {
    return P(this, null, function* () {
      yield this.initialize();
    });
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  initialize() {
    return P(this, null, function* () {
      this.intervalRef = setInterval(
        () => this.pulse(),
        oe.toMiliseconds(this.interval)
      );
    });
  }
  pulse() {
    this.events.emit(xs.pulse);
  }
};
function Mp(e) {
  try {
    return JSON.stringify(e);
  } catch (t) {
    return '"[Circular]"';
  }
}
var Np = Op;
function Op(e, t, r) {
  var i = (r && r.stringify) || Mp,
    n = 1;
  if (typeof e == "object" && e !== null) {
    var s = t.length + n;
    if (s === 1) return e;
    var o = new Array(s);
    o[0] = i(e);
    for (var c = 1; c < s; c++) o[c] = i(t[c]);
    return o.join(" ");
  }
  if (typeof e != "string") return e;
  var l = t.length;
  if (l === 0) return e;
  for (
    var f = "", g = 1 - n, w = -1, D = (e && e.length) || 0, A = 0;
    A < D;

  ) {
    if (e.charCodeAt(A) === 37 && A + 1 < D) {
      switch (((w = w > -1 ? w : 0), e.charCodeAt(A + 1))) {
        case 100:
        case 102:
          if (g >= l || t[g] == null) break;
          w < A && (f += e.slice(w, A)), (f += Number(t[g])), (w = A + 2), A++;
          break;
        case 105:
          if (g >= l || t[g] == null) break;
          w < A && (f += e.slice(w, A)),
            (f += Math.floor(Number(t[g]))),
            (w = A + 2),
            A++;
          break;
        case 79:
        case 111:
        case 106:
          if (g >= l || t[g] === void 0) break;
          w < A && (f += e.slice(w, A));
          var M = typeof t[g];
          if (M === "string") {
            (f += "'" + t[g] + "'"), (w = A + 2), A++;
            break;
          }
          if (M === "function") {
            (f += t[g].name || "<anonymous>"), (w = A + 2), A++;
            break;
          }
          (f += i(t[g])), (w = A + 2), A++;
          break;
        case 115:
          if (g >= l) break;
          w < A && (f += e.slice(w, A)), (f += String(t[g])), (w = A + 2), A++;
          break;
        case 37:
          w < A && (f += e.slice(w, A)), (f += "%"), (w = A + 2), A++, g--;
          break;
      }
      ++g;
    }
    ++A;
  }
  return w === -1 ? e : (w < D && (f += e.slice(w)), f);
}
const Tu = Np;
var yn = ci;
const ws = jp().console || {},
  Rp = {
    mapHttpRequest: zs,
    mapHttpResponse: zs,
    wrapRequestSerializer: ia,
    wrapResponseSerializer: ia,
    wrapErrorSerializer: ia,
    req: zs,
    res: zs,
    err: $p,
  };
function Pp(e, t) {
  return Array.isArray(e)
    ? e.filter(function (i) {
        return i !== "!stdSerializers.err";
      })
    : e === !0
    ? Object.keys(t)
    : !1;
}
function ci(e) {
  (e = e || {}), (e.browser = e.browser || {});
  const t = e.browser.transmit;
  if (t && typeof t.send != "function")
    throw Error("pino: transmit option must have a send function");
  const r = e.browser.write || ws;
  e.browser.write && (e.browser.asObject = !0);
  const i = e.serializers || {},
    n = Pp(e.browser.serialize, i);
  let s = e.browser.serialize;
  Array.isArray(e.browser.serialize) &&
    e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (s = !1);
  const o = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof r == "function" &&
    (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
    e.enabled === !1 && (e.level = "silent");
  const c = e.level || "info",
    l = Object.create(r);
  l.log || (l.log = vs),
    Object.defineProperty(l, "levelVal", { get: g }),
    Object.defineProperty(l, "level", { get: w, set: D });
  const f = {
    transmit: t,
    serialize: n,
    asObject: e.browser.asObject,
    levels: o,
    timestamp: Up(e),
  };
  (l.levels = ci.levels),
    (l.level = c),
    (l.setMaxListeners =
      l.getMaxListeners =
      l.emit =
      l.addListener =
      l.on =
      l.prependListener =
      l.once =
      l.prependOnceListener =
      l.removeListener =
      l.removeAllListeners =
      l.listeners =
      l.listenerCount =
      l.eventNames =
      l.write =
      l.flush =
        vs),
    (l.serializers = i),
    (l._serialize = n),
    (l._stdErrSerialize = s),
    (l.child = A),
    t && (l._logEvent = qa());
  function g() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function w() {
    return this._level;
  }
  function D(M) {
    if (M !== "silent" && !this.levels.values[M])
      throw Error("unknown level " + M);
    (this._level = M),
      dn(f, l, "error", "log"),
      dn(f, l, "fatal", "error"),
      dn(f, l, "warn", "error"),
      dn(f, l, "info", "log"),
      dn(f, l, "debug", "log"),
      dn(f, l, "trace", "log");
  }
  function A(M, K) {
    if (!M) throw new Error("missing bindings for child Pino");
    (K = K || {}), n && M.serializers && (K.serializers = M.serializers);
    const q = K.serializers;
    if (n && q) {
      var Q = Object.assign({}, i, q),
        N = e.browser.serialize === !0 ? Object.keys(Q) : n;
      delete M.serializers, Lo([M], N, Q, this._stdErrSerialize);
    }
    function H(L) {
      (this._childLevel = (L._childLevel | 0) + 1),
        (this.error = gn(L, M, "error")),
        (this.fatal = gn(L, M, "fatal")),
        (this.warn = gn(L, M, "warn")),
        (this.info = gn(L, M, "info")),
        (this.debug = gn(L, M, "debug")),
        (this.trace = gn(L, M, "trace")),
        Q && ((this.serializers = Q), (this._serialize = N)),
        t && (this._logEvent = qa([].concat(L._logEvent.bindings, M)));
    }
    return (H.prototype = this), new H(this);
  }
  return l;
}
ci.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
};
ci.stdSerializers = Rp;
ci.stdTimeFunctions = Object.assign(
  {},
  { nullTime: sf, epochTime: of, unixTime: kp, isoTime: qp }
);
function dn(e, t, r, i) {
  const n = Object.getPrototypeOf(t);
  (t[r] =
    t.levelVal > t.levels.values[r] ? vs : n[r] ? n[r] : ws[r] || ws[i] || vs),
    Bp(e, t, r);
}
function Bp(e, t, r) {
  (!e.transmit && t[r] === vs) ||
    (t[r] = (function (i) {
      return function () {
        const s = e.timestamp(),
          o = new Array(arguments.length),
          c =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === ws
              ? ws
              : this;
        for (var l = 0; l < o.length; l++) o[l] = arguments[l];
        if (
          (e.serialize &&
            !e.asObject &&
            Lo(o, this._serialize, this.serializers, this._stdErrSerialize),
          e.asObject ? i.call(c, Lp(this, r, o, s)) : i.apply(c, o),
          e.transmit)
        ) {
          const f = e.transmit.level || t.level,
            g = ci.levels.values[f],
            w = ci.levels.values[r];
          if (w < g) return;
          Fp(
            this,
            {
              ts: s,
              methodLevel: r,
              methodValue: w,
              transmitLevel: f,
              transmitValue: ci.levels.values[e.transmit.level || t.level],
              send: e.transmit.send,
              val: t.levelVal,
            },
            o
          );
        }
      };
    })(t[r]));
}
function Lp(e, t, r, i) {
  e._serialize && Lo(r, e._serialize, e.serializers, e._stdErrSerialize);
  const n = r.slice();
  let s = n[0];
  const o = {};
  i && (o.time = i), (o.level = ci.levels.values[t]);
  let c = (e._childLevel | 0) + 1;
  if ((c < 1 && (c = 1), s !== null && typeof s == "object")) {
    for (; c-- && typeof n[0] == "object"; ) Object.assign(o, n.shift());
    s = n.length ? Tu(n.shift(), n) : void 0;
  } else typeof s == "string" && (s = Tu(n.shift(), n));
  return s !== void 0 && (o.msg = s), o;
}
function Lo(e, t, r, i) {
  for (const n in e)
    if (i && e[n] instanceof Error) e[n] = ci.stdSerializers.err(e[n]);
    else if (typeof e[n] == "object" && !Array.isArray(e[n]))
      for (const s in e[n])
        t && t.indexOf(s) > -1 && s in r && (e[n][s] = r[s](e[n][s]));
}
function gn(e, t, r) {
  return function () {
    const i = new Array(1 + arguments.length);
    i[0] = t;
    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
    return e[r].apply(this, i);
  };
}
function Fp(e, t, r) {
  const i = t.send,
    n = t.ts,
    s = t.methodLevel,
    o = t.methodValue,
    c = t.val,
    l = e._logEvent.bindings;
  Lo(
    r,
    e._serialize || Object.keys(e.serializers),
    e.serializers,
    e._stdErrSerialize === void 0 ? !0 : e._stdErrSerialize
  ),
    (e._logEvent.ts = n),
    (e._logEvent.messages = r.filter(function (f) {
      return l.indexOf(f) === -1;
    })),
    (e._logEvent.level.label = s),
    (e._logEvent.level.value = o),
    i(s, e._logEvent, c),
    (e._logEvent = qa(l));
}
function qa(e) {
  return {
    ts: 0,
    messages: [],
    bindings: e || [],
    level: { label: "", value: 0 },
  };
}
function $p(e) {
  const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
  for (const r in e) t[r] === void 0 && (t[r] = e[r]);
  return t;
}
function Up(e) {
  return typeof e.timestamp == "function"
    ? e.timestamp
    : e.timestamp === !1
    ? sf
    : of;
}
function zs() {
  return {};
}
function ia(e) {
  return e;
}
function vs() {}
function sf() {
  return !1;
}
function of() {
  return Date.now();
}
function kp() {
  return Math.round(Date.now() / 1e3);
}
function qp() {
  return new Date(Date.now()).toISOString();
}
function jp() {
  function e(t) {
    return typeof t != "undefined" && t;
  }
  try {
    return (
      typeof globalThis != "undefined" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch (t) {
    return e(self) || e(window) || e(this) || {};
  }
}
const Fo = Mo(yn),
  zp = { level: "info" },
  Cs = "custom_context",
  Sc = 1e3 * 1024;
let Kp = class {
    constructor(t) {
      (this.nodeValue = t),
        (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
        (this.next = null);
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  },
  Mu = class {
    constructor(t) {
      (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = t),
        (this.sizeInBytes = 0);
    }
    append(t) {
      const r = new Kp(t);
      if (r.size > this.maxSizeInBytes)
        throw new Error(
          `[LinkedList] Value too big to insert into list: ${t} with size ${r.size}`
        );
      for (; this.size + r.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = r), (this.tail = r))
        : ((this.head = r), (this.tail = r)),
        this.lengthInNodes++,
        (this.sizeInBytes += r.size);
    }
    shift() {
      if (!this.head) return;
      const t = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= t.size);
    }
    toArray() {
      const t = [];
      let r = this.head;
      for (; r !== null; ) t.push(r.value), (r = r.next);
      return t;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let t = this.head;
      return {
        next: () => {
          if (!t) return { done: !0, value: null };
          const r = t.value;
          return (t = t.next), { done: !1, value: r };
        },
      };
    }
  },
  af = class {
    constructor(t, r = Sc) {
      (this.level = t != null ? t : "error"),
        (this.levelValue = yn.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = r),
        (this.logs = new Mu(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(t, r) {
      r === yn.levels.values.error
        ? console.error(t)
        : r === yn.levels.values.warn
        ? console.warn(t)
        : r === yn.levels.values.debug
        ? console.debug(t)
        : r === yn.levels.values.trace
        ? console.trace(t)
        : console.log(t);
    }
    appendToLogs(t) {
      this.logs.append(tn({ timestamp: new Date().toISOString(), log: t }));
      const r = typeof t == "string" ? JSON.parse(t).level : t.level;
      r >= this.levelValue && this.forwardToConsole(t, r);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new Mu(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(t) {
      const r = this.getLogArray();
      return (
        r.push(tn({ extraMetadata: t })),
        new Blob(r, { type: "application/json" })
      );
    }
  },
  Vp = class {
    constructor(t, r = Sc) {
      this.baseChunkLogger = new af(t, r);
    }
    write(t) {
      this.baseChunkLogger.appendToLogs(t);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(t) {
      return this.baseChunkLogger.logsToBlob(t);
    }
    downloadLogsBlobInBrowser(t) {
      const r = URL.createObjectURL(this.logsToBlob(t)),
        i = document.createElement("a");
      (i.href = r),
        (i.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i),
        URL.revokeObjectURL(r);
    }
  },
  Hp = class {
    constructor(t, r = Sc) {
      this.baseChunkLogger = new af(t, r);
    }
    write(t) {
      this.baseChunkLogger.appendToLogs(t);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(t) {
      return this.baseChunkLogger.logsToBlob(t);
    }
  };
var Gp = Object.defineProperty,
  Wp = Object.defineProperties,
  Qp = Object.getOwnPropertyDescriptors,
  Nu = Object.getOwnPropertySymbols,
  Yp = Object.prototype.hasOwnProperty,
  Jp = Object.prototype.propertyIsEnumerable,
  Ou = (e, t, r) =>
    t in e
      ? Gp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  uo = (e, t) => {
    for (var r in t || (t = {})) Yp.call(t, r) && Ou(e, r, t[r]);
    if (Nu) for (var r of Nu(t)) Jp.call(t, r) && Ou(e, r, t[r]);
    return e;
  },
  lo = (e, t) => Wp(e, Qp(t));
function Ic(e) {
  return lo(uo({}, e), { level: (e == null ? void 0 : e.level) || zp.level });
}
function Xp(e, t = Cs) {
  return e[t] || "";
}
function Zp(e, t, r = Cs) {
  return (e[r] = t), e;
}
function ar(e, t = Cs) {
  let r = "";
  return (
    typeof e.bindings > "u" ? (r = Xp(e, t)) : (r = e.bindings().context || ""),
    r
  );
}
function em(e, t, r = Cs) {
  const i = ar(e, r);
  return i.trim() ? `${i}/${t}` : t;
}
function cr(e, t, r = Cs) {
  const i = em(e, t, r),
    n = e.child({ context: i });
  return Zp(n, i, r);
}
function tm(e) {
  var t, r;
  const i = new Vp((t = e.opts) == null ? void 0 : t.level, e.maxSizeInBytes);
  return {
    logger: Fo(
      lo(uo({}, e.opts), {
        level: "trace",
        browser: lo(uo({}, (r = e.opts) == null ? void 0 : r.browser), {
          write: (n) => i.write(n),
        }),
      })
    ),
    chunkLoggerController: i,
  };
}
function rm(e) {
  var t;
  const r = new Hp((t = e.opts) == null ? void 0 : t.level, e.maxSizeInBytes);
  return {
    logger: Fo(lo(uo({}, e.opts), { level: "trace" }), r),
    chunkLoggerController: r,
  };
}
function im(e) {
  return typeof e.loggerOverride < "u" && typeof e.loggerOverride != "string"
    ? { logger: e.loggerOverride, chunkLoggerController: null }
    : typeof window < "u"
    ? tm(e)
    : rm(e);
}
let nm = class extends on {
    constructor(t) {
      super(), (this.opts = t), (this.protocol = "wc"), (this.version = 2);
    }
  },
  sm = class extends on {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r), (this.records = new Map());
    }
  },
  om = class {
    constructor(t, r) {
      (this.logger = t), (this.core = r);
    }
  };
class am extends on {
  constructor(t, r) {
    super(), (this.relayer = t), (this.logger = r);
  }
}
let cm = class extends on {
    constructor(t) {
      super();
    }
  },
  um = class {
    constructor(t, r, i, n) {
      (this.core = t), (this.logger = r), (this.name = i);
    }
  },
  lm = class extends on {
    constructor(t, r) {
      super(), (this.relayer = t), (this.logger = r);
    }
  },
  hm = class extends on {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r);
    }
  },
  fm = class {
    constructor(t, r) {
      (this.projectId = t), (this.logger = r);
    }
  };
class dm {
  constructor(t, r) {
    (this.projectId = t), (this.logger = r);
  }
}
let gm = class {
    constructor(t) {
      (this.opts = t), (this.protocol = "wc"), (this.version = 2);
    }
  },
  pm = class {
    constructor(t) {
      this.client = t;
    }
  };
var Dc = {},
  On = {},
  $o = {},
  Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.BrowserRandomSource = void 0;
const Ru = 65536;
class mm {
  constructor() {
    (this.isAvailable = !1), (this.isInstantiated = !1);
    const t = typeof self != "undefined" ? self.crypto || self.msCrypto : null;
    t &&
      t.getRandomValues !== void 0 &&
      ((this._crypto = t), (this.isAvailable = !0), (this.isInstantiated = !0));
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let i = 0; i < r.length; i += Ru)
      this._crypto.getRandomValues(
        r.subarray(i, i + Math.min(r.length - i, Ru))
      );
    return r;
  }
}
Uo.BrowserRandomSource = mm;
function ym(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var ko = {},
  pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
function wm(e) {
  for (var t = 0; t < e.length; t++) e[t] = 0;
  return e;
}
pr.wipe = wm;
const vm = {},
  bm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vm },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _m = No(bm);
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.NodeRandomSource = void 0;
const Em = pr;
class Am {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.isInstantiated = !1),
      typeof ym != "undefined")
    ) {
      const t = _m;
      t &&
        t.randomBytes &&
        ((this._crypto = t),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(t);
    if (r.length !== t)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const i = new Uint8Array(t);
    for (let n = 0; n < i.length; n++) i[n] = r[n];
    return (0, Em.wipe)(r), i;
  }
}
ko.NodeRandomSource = Am;
Object.defineProperty($o, "__esModule", { value: !0 });
$o.SystemRandomSource = void 0;
const Sm = Uo,
  Im = ko;
class Dm {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.name = ""),
      (this._source = new Sm.BrowserRandomSource()),
      this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Browser");
      return;
    }
    if (
      ((this._source = new Im.NodeRandomSource()), this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Node");
      return;
    }
  }
  randomBytes(t) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(t);
  }
}
$o.SystemRandomSource = Dm;
var ke = {},
  cf = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(c, l) {
    var f = (c >>> 16) & 65535,
      g = c & 65535,
      w = (l >>> 16) & 65535,
      D = l & 65535;
    return (g * D + (((f * D + g * w) << 16) >>> 0)) | 0;
  }
  e.mul = Math.imul || t;
  function r(c, l) {
    return (c + l) | 0;
  }
  e.add = r;
  function i(c, l) {
    return (c - l) | 0;
  }
  e.sub = i;
  function n(c, l) {
    return (c << l) | (c >>> (32 - l));
  }
  e.rotl = n;
  function s(c, l) {
    return (c << (32 - l)) | (c >>> l);
  }
  e.rotr = s;
  function o(c) {
    return typeof c == "number" && isFinite(c) && Math.floor(c) === c;
  }
  (e.isInteger = Number.isInteger || o),
    (e.MAX_SAFE_INTEGER = 9007199254740991),
    (e.isSafeInteger = function (c) {
      return (
        e.isInteger(c) && c >= -e.MAX_SAFE_INTEGER && c <= e.MAX_SAFE_INTEGER
      );
    });
})(cf);
Object.defineProperty(ke, "__esModule", { value: !0 });
var uf = cf;
function xm(e, t) {
  return t === void 0 && (t = 0), (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16;
}
ke.readInt16BE = xm;
function Cm(e, t) {
  return t === void 0 && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0;
}
ke.readUint16BE = Cm;
function Tm(e, t) {
  return t === void 0 && (t = 0), (((e[t + 1] << 8) | e[t]) << 16) >> 16;
}
ke.readInt16LE = Tm;
function Mm(e, t) {
  return t === void 0 && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0;
}
ke.readUint16LE = Mm;
function lf(e, t, r) {
  return (
    t === void 0 && (t = new Uint8Array(2)),
    r === void 0 && (r = 0),
    (t[r + 0] = e >>> 8),
    (t[r + 1] = e >>> 0),
    t
  );
}
ke.writeUint16BE = lf;
ke.writeInt16BE = lf;
function hf(e, t, r) {
  return (
    t === void 0 && (t = new Uint8Array(2)),
    r === void 0 && (r = 0),
    (t[r + 0] = e >>> 0),
    (t[r + 1] = e >>> 8),
    t
  );
}
ke.writeUint16LE = hf;
ke.writeInt16LE = hf;
function ja(e, t) {
  return (
    t === void 0 && (t = 0),
    (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
  );
}
ke.readInt32BE = ja;
function za(e, t) {
  return (
    t === void 0 && (t = 0),
    ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
  );
}
ke.readUint32BE = za;
function Ka(e, t) {
  return (
    t === void 0 && (t = 0),
    (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
  );
}
ke.readInt32LE = Ka;
function Va(e, t) {
  return (
    t === void 0 && (t = 0),
    ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
  );
}
ke.readUint32LE = Va;
function ho(e, t, r) {
  return (
    t === void 0 && (t = new Uint8Array(4)),
    r === void 0 && (r = 0),
    (t[r + 0] = e >>> 24),
    (t[r + 1] = e >>> 16),
    (t[r + 2] = e >>> 8),
    (t[r + 3] = e >>> 0),
    t
  );
}
ke.writeUint32BE = ho;
ke.writeInt32BE = ho;
function fo(e, t, r) {
  return (
    t === void 0 && (t = new Uint8Array(4)),
    r === void 0 && (r = 0),
    (t[r + 0] = e >>> 0),
    (t[r + 1] = e >>> 8),
    (t[r + 2] = e >>> 16),
    (t[r + 3] = e >>> 24),
    t
  );
}
ke.writeUint32LE = fo;
ke.writeInt32LE = fo;
function Nm(e, t) {
  t === void 0 && (t = 0);
  var r = ja(e, t),
    i = ja(e, t + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
ke.readInt64BE = Nm;
function Om(e, t) {
  t === void 0 && (t = 0);
  var r = za(e, t),
    i = za(e, t + 4);
  return r * 4294967296 + i;
}
ke.readUint64BE = Om;
function Rm(e, t) {
  t === void 0 && (t = 0);
  var r = Ka(e, t),
    i = Ka(e, t + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
ke.readInt64LE = Rm;
function Pm(e, t) {
  t === void 0 && (t = 0);
  var r = Va(e, t),
    i = Va(e, t + 4);
  return i * 4294967296 + r;
}
ke.readUint64LE = Pm;
function ff(e, t, r) {
  return (
    t === void 0 && (t = new Uint8Array(8)),
    r === void 0 && (r = 0),
    ho((e / 4294967296) >>> 0, t, r),
    ho(e >>> 0, t, r + 4),
    t
  );
}
ke.writeUint64BE = ff;
ke.writeInt64BE = ff;
function df(e, t, r) {
  return (
    t === void 0 && (t = new Uint8Array(8)),
    r === void 0 && (r = 0),
    fo(e >>> 0, t, r),
    fo((e / 4294967296) >>> 0, t, r + 4),
    t
  );
}
ke.writeUint64LE = df;
ke.writeInt64LE = df;
function Bm(e, t, r) {
  if ((r === void 0 && (r = 0), e % 8 !== 0))
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--)
    (i += t[s] * n), (n *= 256);
  return i;
}
ke.readUintBE = Bm;
function Lm(e, t, r) {
  if ((r === void 0 && (r = 0), e % 8 !== 0))
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + e / 8; s++) (i += t[s] * n), (n *= 256);
  return i;
}
ke.readUintLE = Lm;
function Fm(e, t, r, i) {
  if (
    (r === void 0 && (r = new Uint8Array(e / 8)),
    i === void 0 && (i = 0),
    e % 8 !== 0)
  )
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!uf.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = e / 8 + i - 1; s >= i; s--)
    (r[s] = (t / n) & 255), (n *= 256);
  return r;
}
ke.writeUintBE = Fm;
function $m(e, t, r, i) {
  if (
    (r === void 0 && (r = new Uint8Array(e / 8)),
    i === void 0 && (i = 0),
    e % 8 !== 0)
  )
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!uf.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + e / 8; s++) (r[s] = (t / n) & 255), (n *= 256);
  return r;
}
ke.writeUintLE = $m;
function Um(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
ke.readFloat32BE = Um;
function km(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
ke.readFloat32LE = km;
function qm(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
ke.readFloat64BE = qm;
function jm(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
ke.readFloat64LE = jm;
function zm(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e), t;
}
ke.writeFloat32BE = zm;
function Km(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e, !0), t;
}
ke.writeFloat32LE = Km;
function Vm(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e), t;
}
ke.writeFloat64BE = Vm;
function Hm(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e, !0), t;
}
ke.writeFloat64LE = Hm;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.randomStringForEntropy =
      e.randomString =
      e.randomUint32 =
      e.randomBytes =
      e.defaultRandomSource =
        void 0);
  const t = $o,
    r = ke,
    i = pr;
  e.defaultRandomSource = new t.SystemRandomSource();
  function n(f, g = e.defaultRandomSource) {
    return g.randomBytes(f);
  }
  e.randomBytes = n;
  function s(f = e.defaultRandomSource) {
    const g = n(4, f),
      w = (0, r.readUint32LE)(g);
    return (0, i.wipe)(g), w;
  }
  e.randomUint32 = s;
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function c(f, g = o, w = e.defaultRandomSource) {
    if (g.length < 2) throw new Error("randomString charset is too short");
    if (g.length > 256) throw new Error("randomString charset is too long");
    let D = "";
    const A = g.length,
      M = 256 - (256 % A);
    for (; f > 0; ) {
      const K = n(Math.ceil((f * 256) / M), w);
      for (let q = 0; q < K.length && f > 0; q++) {
        const Q = K[q];
        Q < M && ((D += g.charAt(Q % A)), f--);
      }
      (0, i.wipe)(K);
    }
    return D;
  }
  e.randomString = c;
  function l(f, g = o, w = e.defaultRandomSource) {
    const D = Math.ceil(f / (Math.log(g.length) / Math.LN2));
    return c(D, g, w);
  }
  e.randomStringForEntropy = l;
})(On);
var gf = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ke,
    r = pr;
  (e.DIGEST_LENGTH = 64), (e.BLOCK_SIZE = 128);
  var i = (function () {
    function c() {
      (this.digestLength = e.DIGEST_LENGTH),
        (this.blockSize = e.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (c.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (c.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (c.prototype.clean = function () {
        r.wipe(this._buffer),
          r.wipe(this._tempHi),
          r.wipe(this._tempLo),
          this.reset();
      }),
      (c.prototype.update = function (l, f) {
        if ((f === void 0 && (f = l.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var g = 0;
        if (((this._bytesHashed += f), this._bufferLength > 0)) {
          for (; this._bufferLength < e.BLOCK_SIZE && f > 0; )
            (this._buffer[this._bufferLength++] = l[g++]), f--;
          this._bufferLength === this.blockSize &&
            (s(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          f >= this.blockSize &&
          ((g = s(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            l,
            g,
            f
          )),
          (f %= this.blockSize));
          f > 0;

        )
          (this._buffer[this._bufferLength++] = l[g++]), f--;
        return this;
      }),
      (c.prototype.finish = function (l) {
        if (!this._finished) {
          var f = this._bytesHashed,
            g = this._bufferLength,
            w = (f / 536870912) | 0,
            D = f << 3,
            A = f % 128 < 112 ? 128 : 256;
          this._buffer[g] = 128;
          for (var M = g + 1; M < A - 8; M++) this._buffer[M] = 0;
          t.writeUint32BE(w, this._buffer, A - 8),
            t.writeUint32BE(D, this._buffer, A - 4),
            s(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              A
            ),
            (this._finished = !0);
        }
        for (var M = 0; M < this.digestLength / 8; M++)
          t.writeUint32BE(this._stateHi[M], l, M * 8),
            t.writeUint32BE(this._stateLo[M], l, M * 8 + 4);
        return this;
      }),
      (c.prototype.digest = function () {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }),
      (c.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (c.prototype.restoreState = function (l) {
        return (
          this._stateHi.set(l.stateHi),
          this._stateLo.set(l.stateLo),
          (this._bufferLength = l.bufferLength),
          l.buffer && this._buffer.set(l.buffer),
          (this._bytesHashed = l.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (c.prototype.cleanSavedState = function (l) {
        r.wipe(l.stateHi),
          r.wipe(l.stateLo),
          l.buffer && r.wipe(l.buffer),
          (l.bufferLength = 0),
          (l.bytesHashed = 0);
      }),
      c
    );
  })();
  e.SHA512 = i;
  var n = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function s(c, l, f, g, w, D, A) {
    for (
      var M = f[0],
        K = f[1],
        q = f[2],
        Q = f[3],
        N = f[4],
        H = f[5],
        L = f[6],
        j = f[7],
        k = g[0],
        m = g[1],
        y = g[2],
        I = g[3],
        C = g[4],
        B = g[5],
        U = g[6],
        a = g[7],
        u,
        h,
        v,
        _,
        E,
        x,
        S,
        d;
      A >= 128;

    ) {
      for (var T = 0; T < 16; T++) {
        var Y = 8 * T + D;
        (c[T] = t.readUint32BE(w, Y)), (l[T] = t.readUint32BE(w, Y + 4));
      }
      for (var T = 0; T < 80; T++) {
        var X = M,
          b = K,
          G = q,
          O = Q,
          F = N,
          z = H,
          p = L,
          R = j,
          J = k,
          Z = m,
          ee = y,
          ne = I,
          ge = C,
          ve = B,
          Ze = U,
          Ie = a;
        if (
          ((u = j),
          (h = a),
          (E = h & 65535),
          (x = h >>> 16),
          (S = u & 65535),
          (d = u >>> 16),
          (u =
            ((N >>> 14) | (C << (32 - 14))) ^
            ((N >>> 18) | (C << (32 - 18))) ^
            ((C >>> (41 - 32)) | (N << (32 - (41 - 32))))),
          (h =
            ((C >>> 14) | (N << (32 - 14))) ^
            ((C >>> 18) | (N << (32 - 18))) ^
            ((N >>> (41 - 32)) | (C << (32 - (41 - 32))))),
          (E += h & 65535),
          (x += h >>> 16),
          (S += u & 65535),
          (d += u >>> 16),
          (u = (N & H) ^ (~N & L)),
          (h = (C & B) ^ (~C & U)),
          (E += h & 65535),
          (x += h >>> 16),
          (S += u & 65535),
          (d += u >>> 16),
          (u = n[T * 2]),
          (h = n[T * 2 + 1]),
          (E += h & 65535),
          (x += h >>> 16),
          (S += u & 65535),
          (d += u >>> 16),
          (u = c[T % 16]),
          (h = l[T % 16]),
          (E += h & 65535),
          (x += h >>> 16),
          (S += u & 65535),
          (d += u >>> 16),
          (x += E >>> 16),
          (S += x >>> 16),
          (d += S >>> 16),
          (v = (S & 65535) | (d << 16)),
          (_ = (E & 65535) | (x << 16)),
          (u = v),
          (h = _),
          (E = h & 65535),
          (x = h >>> 16),
          (S = u & 65535),
          (d = u >>> 16),
          (u =
            ((M >>> 28) | (k << (32 - 28))) ^
            ((k >>> (34 - 32)) | (M << (32 - (34 - 32)))) ^
            ((k >>> (39 - 32)) | (M << (32 - (39 - 32))))),
          (h =
            ((k >>> 28) | (M << (32 - 28))) ^
            ((M >>> (34 - 32)) | (k << (32 - (34 - 32)))) ^
            ((M >>> (39 - 32)) | (k << (32 - (39 - 32))))),
          (E += h & 65535),
          (x += h >>> 16),
          (S += u & 65535),
          (d += u >>> 16),
          (u = (M & K) ^ (M & q) ^ (K & q)),
          (h = (k & m) ^ (k & y) ^ (m & y)),
          (E += h & 65535),
          (x += h >>> 16),
          (S += u & 65535),
          (d += u >>> 16),
          (x += E >>> 16),
          (S += x >>> 16),
          (d += S >>> 16),
          (R = (S & 65535) | (d << 16)),
          (Ie = (E & 65535) | (x << 16)),
          (u = O),
          (h = ne),
          (E = h & 65535),
          (x = h >>> 16),
          (S = u & 65535),
          (d = u >>> 16),
          (u = v),
          (h = _),
          (E += h & 65535),
          (x += h >>> 16),
          (S += u & 65535),
          (d += u >>> 16),
          (x += E >>> 16),
          (S += x >>> 16),
          (d += S >>> 16),
          (O = (S & 65535) | (d << 16)),
          (ne = (E & 65535) | (x << 16)),
          (K = X),
          (q = b),
          (Q = G),
          (N = O),
          (H = F),
          (L = z),
          (j = p),
          (M = R),
          (m = J),
          (y = Z),
          (I = ee),
          (C = ne),
          (B = ge),
          (U = ve),
          (a = Ze),
          (k = Ie),
          T % 16 === 15)
        )
          for (var Y = 0; Y < 16; Y++)
            (u = c[Y]),
              (h = l[Y]),
              (E = h & 65535),
              (x = h >>> 16),
              (S = u & 65535),
              (d = u >>> 16),
              (u = c[(Y + 9) % 16]),
              (h = l[(Y + 9) % 16]),
              (E += h & 65535),
              (x += h >>> 16),
              (S += u & 65535),
              (d += u >>> 16),
              (v = c[(Y + 1) % 16]),
              (_ = l[(Y + 1) % 16]),
              (u =
                ((v >>> 1) | (_ << (32 - 1))) ^
                ((v >>> 8) | (_ << (32 - 8))) ^
                (v >>> 7)),
              (h =
                ((_ >>> 1) | (v << (32 - 1))) ^
                ((_ >>> 8) | (v << (32 - 8))) ^
                ((_ >>> 7) | (v << (32 - 7)))),
              (E += h & 65535),
              (x += h >>> 16),
              (S += u & 65535),
              (d += u >>> 16),
              (v = c[(Y + 14) % 16]),
              (_ = l[(Y + 14) % 16]),
              (u =
                ((v >>> 19) | (_ << (32 - 19))) ^
                ((_ >>> (61 - 32)) | (v << (32 - (61 - 32)))) ^
                (v >>> 6)),
              (h =
                ((_ >>> 19) | (v << (32 - 19))) ^
                ((v >>> (61 - 32)) | (_ << (32 - (61 - 32)))) ^
                ((_ >>> 6) | (v << (32 - 6)))),
              (E += h & 65535),
              (x += h >>> 16),
              (S += u & 65535),
              (d += u >>> 16),
              (x += E >>> 16),
              (S += x >>> 16),
              (d += S >>> 16),
              (c[Y] = (S & 65535) | (d << 16)),
              (l[Y] = (E & 65535) | (x << 16));
      }
      (u = M),
        (h = k),
        (E = h & 65535),
        (x = h >>> 16),
        (S = u & 65535),
        (d = u >>> 16),
        (u = f[0]),
        (h = g[0]),
        (E += h & 65535),
        (x += h >>> 16),
        (S += u & 65535),
        (d += u >>> 16),
        (x += E >>> 16),
        (S += x >>> 16),
        (d += S >>> 16),
        (f[0] = M = (S & 65535) | (d << 16)),
        (g[0] = k = (E & 65535) | (x << 16)),
        (u = K),
        (h = m),
        (E = h & 65535),
        (x = h >>> 16),
        (S = u & 65535),
        (d = u >>> 16),
        (u = f[1]),
        (h = g[1]),
        (E += h & 65535),
        (x += h >>> 16),
        (S += u & 65535),
        (d += u >>> 16),
        (x += E >>> 16),
        (S += x >>> 16),
        (d += S >>> 16),
        (f[1] = K = (S & 65535) | (d << 16)),
        (g[1] = m = (E & 65535) | (x << 16)),
        (u = q),
        (h = y),
        (E = h & 65535),
        (x = h >>> 16),
        (S = u & 65535),
        (d = u >>> 16),
        (u = f[2]),
        (h = g[2]),
        (E += h & 65535),
        (x += h >>> 16),
        (S += u & 65535),
        (d += u >>> 16),
        (x += E >>> 16),
        (S += x >>> 16),
        (d += S >>> 16),
        (f[2] = q = (S & 65535) | (d << 16)),
        (g[2] = y = (E & 65535) | (x << 16)),
        (u = Q),
        (h = I),
        (E = h & 65535),
        (x = h >>> 16),
        (S = u & 65535),
        (d = u >>> 16),
        (u = f[3]),
        (h = g[3]),
        (E += h & 65535),
        (x += h >>> 16),
        (S += u & 65535),
        (d += u >>> 16),
        (x += E >>> 16),
        (S += x >>> 16),
        (d += S >>> 16),
        (f[3] = Q = (S & 65535) | (d << 16)),
        (g[3] = I = (E & 65535) | (x << 16)),
        (u = N),
        (h = C),
        (E = h & 65535),
        (x = h >>> 16),
        (S = u & 65535),
        (d = u >>> 16),
        (u = f[4]),
        (h = g[4]),
        (E += h & 65535),
        (x += h >>> 16),
        (S += u & 65535),
        (d += u >>> 16),
        (x += E >>> 16),
        (S += x >>> 16),
        (d += S >>> 16),
        (f[4] = N = (S & 65535) | (d << 16)),
        (g[4] = C = (E & 65535) | (x << 16)),
        (u = H),
        (h = B),
        (E = h & 65535),
        (x = h >>> 16),
        (S = u & 65535),
        (d = u >>> 16),
        (u = f[5]),
        (h = g[5]),
        (E += h & 65535),
        (x += h >>> 16),
        (S += u & 65535),
        (d += u >>> 16),
        (x += E >>> 16),
        (S += x >>> 16),
        (d += S >>> 16),
        (f[5] = H = (S & 65535) | (d << 16)),
        (g[5] = B = (E & 65535) | (x << 16)),
        (u = L),
        (h = U),
        (E = h & 65535),
        (x = h >>> 16),
        (S = u & 65535),
        (d = u >>> 16),
        (u = f[6]),
        (h = g[6]),
        (E += h & 65535),
        (x += h >>> 16),
        (S += u & 65535),
        (d += u >>> 16),
        (x += E >>> 16),
        (S += x >>> 16),
        (d += S >>> 16),
        (f[6] = L = (S & 65535) | (d << 16)),
        (g[6] = U = (E & 65535) | (x << 16)),
        (u = j),
        (h = a),
        (E = h & 65535),
        (x = h >>> 16),
        (S = u & 65535),
        (d = u >>> 16),
        (u = f[7]),
        (h = g[7]),
        (E += h & 65535),
        (x += h >>> 16),
        (S += u & 65535),
        (d += u >>> 16),
        (x += E >>> 16),
        (S += x >>> 16),
        (d += S >>> 16),
        (f[7] = j = (S & 65535) | (d << 16)),
        (g[7] = a = (E & 65535) | (x << 16)),
        (D += 128),
        (A -= 128);
    }
    return D;
  }
  function o(c) {
    var l = new i();
    l.update(c);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = o;
})(gf);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.convertSecretKeyToX25519 =
      e.convertPublicKeyToX25519 =
      e.verify =
      e.sign =
      e.extractPublicKeyFromSecretKey =
      e.generateKeyPair =
      e.generateKeyPairFromSeed =
      e.SEED_LENGTH =
      e.SECRET_KEY_LENGTH =
      e.PUBLIC_KEY_LENGTH =
      e.SIGNATURE_LENGTH =
        void 0);
  const t = On,
    r = gf,
    i = pr;
  (e.SIGNATURE_LENGTH = 64),
    (e.PUBLIC_KEY_LENGTH = 32),
    (e.SECRET_KEY_LENGTH = 64),
    (e.SEED_LENGTH = 32);
  function n(O) {
    const F = new Float64Array(16);
    if (O) for (let z = 0; z < O.length; z++) F[z] = O[z];
    return F;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const o = n(),
    c = n([1]),
    l = n([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    f = n([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    g = n([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    w = n([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    D = n([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function A(O, F) {
    for (let z = 0; z < 16; z++) O[z] = F[z] | 0;
  }
  function M(O) {
    let F = 1;
    for (let z = 0; z < 16; z++) {
      let p = O[z] + F + 65535;
      (F = Math.floor(p / 65536)), (O[z] = p - F * 65536);
    }
    O[0] += F - 1 + 37 * (F - 1);
  }
  function K(O, F, z) {
    const p = ~(z - 1);
    for (let R = 0; R < 16; R++) {
      const J = p & (O[R] ^ F[R]);
      (O[R] ^= J), (F[R] ^= J);
    }
  }
  function q(O, F) {
    const z = n(),
      p = n();
    for (let R = 0; R < 16; R++) p[R] = F[R];
    M(p), M(p), M(p);
    for (let R = 0; R < 2; R++) {
      z[0] = p[0] - 65517;
      for (let Z = 1; Z < 15; Z++)
        (z[Z] = p[Z] - 65535 - ((z[Z - 1] >> 16) & 1)), (z[Z - 1] &= 65535);
      z[15] = p[15] - 32767 - ((z[14] >> 16) & 1);
      const J = (z[15] >> 16) & 1;
      (z[14] &= 65535), K(p, z, 1 - J);
    }
    for (let R = 0; R < 16; R++)
      (O[2 * R] = p[R] & 255), (O[2 * R + 1] = p[R] >> 8);
  }
  function Q(O, F) {
    let z = 0;
    for (let p = 0; p < 32; p++) z |= O[p] ^ F[p];
    return (1 & ((z - 1) >>> 8)) - 1;
  }
  function N(O, F) {
    const z = new Uint8Array(32),
      p = new Uint8Array(32);
    return q(z, O), q(p, F), Q(z, p);
  }
  function H(O) {
    const F = new Uint8Array(32);
    return q(F, O), F[0] & 1;
  }
  function L(O, F) {
    for (let z = 0; z < 16; z++) O[z] = F[2 * z] + (F[2 * z + 1] << 8);
    O[15] &= 32767;
  }
  function j(O, F, z) {
    for (let p = 0; p < 16; p++) O[p] = F[p] + z[p];
  }
  function k(O, F, z) {
    for (let p = 0; p < 16; p++) O[p] = F[p] - z[p];
  }
  function m(O, F, z) {
    let p,
      R,
      J = 0,
      Z = 0,
      ee = 0,
      ne = 0,
      ge = 0,
      ve = 0,
      Ze = 0,
      Ie = 0,
      me = 0,
      Fe = 0,
      de = 0,
      he = 0,
      xe = 0,
      ue = 0,
      ae = 0,
      Ee = 0,
      fe = 0,
      pe = 0,
      Ae = 0,
      ye = 0,
      we = 0,
      je = 0,
      _e = 0,
      be = 0,
      At = 0,
      Ke = 0,
      We = 0,
      wt = 0,
      Qe = 0,
      Je = 0,
      mr = 0,
      Ce = z[0],
      De = z[1],
      et = z[2],
      Te = z[3],
      Me = z[4],
      Xe = z[5],
      Oe = z[6],
      Re = z[7],
      ct = z[8],
      Pe = z[9],
      Be = z[10],
      st = z[11],
      Ne = z[12],
      Se = z[13],
      ut = z[14],
      Le = z[15];
    (p = F[0]),
      (J += p * Ce),
      (Z += p * De),
      (ee += p * et),
      (ne += p * Te),
      (ge += p * Me),
      (ve += p * Xe),
      (Ze += p * Oe),
      (Ie += p * Re),
      (me += p * ct),
      (Fe += p * Pe),
      (de += p * Be),
      (he += p * st),
      (xe += p * Ne),
      (ue += p * Se),
      (ae += p * ut),
      (Ee += p * Le),
      (p = F[1]),
      (Z += p * Ce),
      (ee += p * De),
      (ne += p * et),
      (ge += p * Te),
      (ve += p * Me),
      (Ze += p * Xe),
      (Ie += p * Oe),
      (me += p * Re),
      (Fe += p * ct),
      (de += p * Pe),
      (he += p * Be),
      (xe += p * st),
      (ue += p * Ne),
      (ae += p * Se),
      (Ee += p * ut),
      (fe += p * Le),
      (p = F[2]),
      (ee += p * Ce),
      (ne += p * De),
      (ge += p * et),
      (ve += p * Te),
      (Ze += p * Me),
      (Ie += p * Xe),
      (me += p * Oe),
      (Fe += p * Re),
      (de += p * ct),
      (he += p * Pe),
      (xe += p * Be),
      (ue += p * st),
      (ae += p * Ne),
      (Ee += p * Se),
      (fe += p * ut),
      (pe += p * Le),
      (p = F[3]),
      (ne += p * Ce),
      (ge += p * De),
      (ve += p * et),
      (Ze += p * Te),
      (Ie += p * Me),
      (me += p * Xe),
      (Fe += p * Oe),
      (de += p * Re),
      (he += p * ct),
      (xe += p * Pe),
      (ue += p * Be),
      (ae += p * st),
      (Ee += p * Ne),
      (fe += p * Se),
      (pe += p * ut),
      (Ae += p * Le),
      (p = F[4]),
      (ge += p * Ce),
      (ve += p * De),
      (Ze += p * et),
      (Ie += p * Te),
      (me += p * Me),
      (Fe += p * Xe),
      (de += p * Oe),
      (he += p * Re),
      (xe += p * ct),
      (ue += p * Pe),
      (ae += p * Be),
      (Ee += p * st),
      (fe += p * Ne),
      (pe += p * Se),
      (Ae += p * ut),
      (ye += p * Le),
      (p = F[5]),
      (ve += p * Ce),
      (Ze += p * De),
      (Ie += p * et),
      (me += p * Te),
      (Fe += p * Me),
      (de += p * Xe),
      (he += p * Oe),
      (xe += p * Re),
      (ue += p * ct),
      (ae += p * Pe),
      (Ee += p * Be),
      (fe += p * st),
      (pe += p * Ne),
      (Ae += p * Se),
      (ye += p * ut),
      (we += p * Le),
      (p = F[6]),
      (Ze += p * Ce),
      (Ie += p * De),
      (me += p * et),
      (Fe += p * Te),
      (de += p * Me),
      (he += p * Xe),
      (xe += p * Oe),
      (ue += p * Re),
      (ae += p * ct),
      (Ee += p * Pe),
      (fe += p * Be),
      (pe += p * st),
      (Ae += p * Ne),
      (ye += p * Se),
      (we += p * ut),
      (je += p * Le),
      (p = F[7]),
      (Ie += p * Ce),
      (me += p * De),
      (Fe += p * et),
      (de += p * Te),
      (he += p * Me),
      (xe += p * Xe),
      (ue += p * Oe),
      (ae += p * Re),
      (Ee += p * ct),
      (fe += p * Pe),
      (pe += p * Be),
      (Ae += p * st),
      (ye += p * Ne),
      (we += p * Se),
      (je += p * ut),
      (_e += p * Le),
      (p = F[8]),
      (me += p * Ce),
      (Fe += p * De),
      (de += p * et),
      (he += p * Te),
      (xe += p * Me),
      (ue += p * Xe),
      (ae += p * Oe),
      (Ee += p * Re),
      (fe += p * ct),
      (pe += p * Pe),
      (Ae += p * Be),
      (ye += p * st),
      (we += p * Ne),
      (je += p * Se),
      (_e += p * ut),
      (be += p * Le),
      (p = F[9]),
      (Fe += p * Ce),
      (de += p * De),
      (he += p * et),
      (xe += p * Te),
      (ue += p * Me),
      (ae += p * Xe),
      (Ee += p * Oe),
      (fe += p * Re),
      (pe += p * ct),
      (Ae += p * Pe),
      (ye += p * Be),
      (we += p * st),
      (je += p * Ne),
      (_e += p * Se),
      (be += p * ut),
      (At += p * Le),
      (p = F[10]),
      (de += p * Ce),
      (he += p * De),
      (xe += p * et),
      (ue += p * Te),
      (ae += p * Me),
      (Ee += p * Xe),
      (fe += p * Oe),
      (pe += p * Re),
      (Ae += p * ct),
      (ye += p * Pe),
      (we += p * Be),
      (je += p * st),
      (_e += p * Ne),
      (be += p * Se),
      (At += p * ut),
      (Ke += p * Le),
      (p = F[11]),
      (he += p * Ce),
      (xe += p * De),
      (ue += p * et),
      (ae += p * Te),
      (Ee += p * Me),
      (fe += p * Xe),
      (pe += p * Oe),
      (Ae += p * Re),
      (ye += p * ct),
      (we += p * Pe),
      (je += p * Be),
      (_e += p * st),
      (be += p * Ne),
      (At += p * Se),
      (Ke += p * ut),
      (We += p * Le),
      (p = F[12]),
      (xe += p * Ce),
      (ue += p * De),
      (ae += p * et),
      (Ee += p * Te),
      (fe += p * Me),
      (pe += p * Xe),
      (Ae += p * Oe),
      (ye += p * Re),
      (we += p * ct),
      (je += p * Pe),
      (_e += p * Be),
      (be += p * st),
      (At += p * Ne),
      (Ke += p * Se),
      (We += p * ut),
      (wt += p * Le),
      (p = F[13]),
      (ue += p * Ce),
      (ae += p * De),
      (Ee += p * et),
      (fe += p * Te),
      (pe += p * Me),
      (Ae += p * Xe),
      (ye += p * Oe),
      (we += p * Re),
      (je += p * ct),
      (_e += p * Pe),
      (be += p * Be),
      (At += p * st),
      (Ke += p * Ne),
      (We += p * Se),
      (wt += p * ut),
      (Qe += p * Le),
      (p = F[14]),
      (ae += p * Ce),
      (Ee += p * De),
      (fe += p * et),
      (pe += p * Te),
      (Ae += p * Me),
      (ye += p * Xe),
      (we += p * Oe),
      (je += p * Re),
      (_e += p * ct),
      (be += p * Pe),
      (At += p * Be),
      (Ke += p * st),
      (We += p * Ne),
      (wt += p * Se),
      (Qe += p * ut),
      (Je += p * Le),
      (p = F[15]),
      (Ee += p * Ce),
      (fe += p * De),
      (pe += p * et),
      (Ae += p * Te),
      (ye += p * Me),
      (we += p * Xe),
      (je += p * Oe),
      (_e += p * Re),
      (be += p * ct),
      (At += p * Pe),
      (Ke += p * Be),
      (We += p * st),
      (wt += p * Ne),
      (Qe += p * Se),
      (Je += p * ut),
      (mr += p * Le),
      (J += 38 * fe),
      (Z += 38 * pe),
      (ee += 38 * Ae),
      (ne += 38 * ye),
      (ge += 38 * we),
      (ve += 38 * je),
      (Ze += 38 * _e),
      (Ie += 38 * be),
      (me += 38 * At),
      (Fe += 38 * Ke),
      (de += 38 * We),
      (he += 38 * wt),
      (xe += 38 * Qe),
      (ue += 38 * Je),
      (ae += 38 * mr),
      (R = 1),
      (p = J + R + 65535),
      (R = Math.floor(p / 65536)),
      (J = p - R * 65536),
      (p = Z + R + 65535),
      (R = Math.floor(p / 65536)),
      (Z = p - R * 65536),
      (p = ee + R + 65535),
      (R = Math.floor(p / 65536)),
      (ee = p - R * 65536),
      (p = ne + R + 65535),
      (R = Math.floor(p / 65536)),
      (ne = p - R * 65536),
      (p = ge + R + 65535),
      (R = Math.floor(p / 65536)),
      (ge = p - R * 65536),
      (p = ve + R + 65535),
      (R = Math.floor(p / 65536)),
      (ve = p - R * 65536),
      (p = Ze + R + 65535),
      (R = Math.floor(p / 65536)),
      (Ze = p - R * 65536),
      (p = Ie + R + 65535),
      (R = Math.floor(p / 65536)),
      (Ie = p - R * 65536),
      (p = me + R + 65535),
      (R = Math.floor(p / 65536)),
      (me = p - R * 65536),
      (p = Fe + R + 65535),
      (R = Math.floor(p / 65536)),
      (Fe = p - R * 65536),
      (p = de + R + 65535),
      (R = Math.floor(p / 65536)),
      (de = p - R * 65536),
      (p = he + R + 65535),
      (R = Math.floor(p / 65536)),
      (he = p - R * 65536),
      (p = xe + R + 65535),
      (R = Math.floor(p / 65536)),
      (xe = p - R * 65536),
      (p = ue + R + 65535),
      (R = Math.floor(p / 65536)),
      (ue = p - R * 65536),
      (p = ae + R + 65535),
      (R = Math.floor(p / 65536)),
      (ae = p - R * 65536),
      (p = Ee + R + 65535),
      (R = Math.floor(p / 65536)),
      (Ee = p - R * 65536),
      (J += R - 1 + 37 * (R - 1)),
      (R = 1),
      (p = J + R + 65535),
      (R = Math.floor(p / 65536)),
      (J = p - R * 65536),
      (p = Z + R + 65535),
      (R = Math.floor(p / 65536)),
      (Z = p - R * 65536),
      (p = ee + R + 65535),
      (R = Math.floor(p / 65536)),
      (ee = p - R * 65536),
      (p = ne + R + 65535),
      (R = Math.floor(p / 65536)),
      (ne = p - R * 65536),
      (p = ge + R + 65535),
      (R = Math.floor(p / 65536)),
      (ge = p - R * 65536),
      (p = ve + R + 65535),
      (R = Math.floor(p / 65536)),
      (ve = p - R * 65536),
      (p = Ze + R + 65535),
      (R = Math.floor(p / 65536)),
      (Ze = p - R * 65536),
      (p = Ie + R + 65535),
      (R = Math.floor(p / 65536)),
      (Ie = p - R * 65536),
      (p = me + R + 65535),
      (R = Math.floor(p / 65536)),
      (me = p - R * 65536),
      (p = Fe + R + 65535),
      (R = Math.floor(p / 65536)),
      (Fe = p - R * 65536),
      (p = de + R + 65535),
      (R = Math.floor(p / 65536)),
      (de = p - R * 65536),
      (p = he + R + 65535),
      (R = Math.floor(p / 65536)),
      (he = p - R * 65536),
      (p = xe + R + 65535),
      (R = Math.floor(p / 65536)),
      (xe = p - R * 65536),
      (p = ue + R + 65535),
      (R = Math.floor(p / 65536)),
      (ue = p - R * 65536),
      (p = ae + R + 65535),
      (R = Math.floor(p / 65536)),
      (ae = p - R * 65536),
      (p = Ee + R + 65535),
      (R = Math.floor(p / 65536)),
      (Ee = p - R * 65536),
      (J += R - 1 + 37 * (R - 1)),
      (O[0] = J),
      (O[1] = Z),
      (O[2] = ee),
      (O[3] = ne),
      (O[4] = ge),
      (O[5] = ve),
      (O[6] = Ze),
      (O[7] = Ie),
      (O[8] = me),
      (O[9] = Fe),
      (O[10] = de),
      (O[11] = he),
      (O[12] = xe),
      (O[13] = ue),
      (O[14] = ae),
      (O[15] = Ee);
  }
  function y(O, F) {
    m(O, F, F);
  }
  function I(O, F) {
    const z = n();
    let p;
    for (p = 0; p < 16; p++) z[p] = F[p];
    for (p = 253; p >= 0; p--) y(z, z), p !== 2 && p !== 4 && m(z, z, F);
    for (p = 0; p < 16; p++) O[p] = z[p];
  }
  function C(O, F) {
    const z = n();
    let p;
    for (p = 0; p < 16; p++) z[p] = F[p];
    for (p = 250; p >= 0; p--) y(z, z), p !== 1 && m(z, z, F);
    for (p = 0; p < 16; p++) O[p] = z[p];
  }
  function B(O, F) {
    const z = n(),
      p = n(),
      R = n(),
      J = n(),
      Z = n(),
      ee = n(),
      ne = n(),
      ge = n(),
      ve = n();
    k(z, O[1], O[0]),
      k(ve, F[1], F[0]),
      m(z, z, ve),
      j(p, O[0], O[1]),
      j(ve, F[0], F[1]),
      m(p, p, ve),
      m(R, O[3], F[3]),
      m(R, R, f),
      m(J, O[2], F[2]),
      j(J, J, J),
      k(Z, p, z),
      k(ee, J, R),
      j(ne, J, R),
      j(ge, p, z),
      m(O[0], Z, ee),
      m(O[1], ge, ne),
      m(O[2], ne, ee),
      m(O[3], Z, ge);
  }
  function U(O, F, z) {
    for (let p = 0; p < 4; p++) K(O[p], F[p], z);
  }
  function a(O, F) {
    const z = n(),
      p = n(),
      R = n();
    I(R, F[2]), m(z, F[0], R), m(p, F[1], R), q(O, p), (O[31] ^= H(z) << 7);
  }
  function u(O, F, z) {
    A(O[0], o), A(O[1], c), A(O[2], c), A(O[3], o);
    for (let p = 255; p >= 0; --p) {
      const R = (z[(p / 8) | 0] >> (p & 7)) & 1;
      U(O, F, R), B(F, O), B(O, O), U(O, F, R);
    }
  }
  function h(O, F) {
    const z = [n(), n(), n(), n()];
    A(z[0], g), A(z[1], w), A(z[2], c), m(z[3], g, w), u(O, z, F);
  }
  function v(O) {
    if (O.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const F = (0, r.hash)(O);
    (F[0] &= 248), (F[31] &= 127), (F[31] |= 64);
    const z = new Uint8Array(32),
      p = [n(), n(), n(), n()];
    h(p, F), a(z, p);
    const R = new Uint8Array(64);
    return R.set(O), R.set(z, 32), { publicKey: z, secretKey: R };
  }
  e.generateKeyPairFromSeed = v;
  function _(O) {
    const F = (0, t.randomBytes)(32, O),
      z = v(F);
    return (0, i.wipe)(F), z;
  }
  e.generateKeyPair = _;
  function E(O) {
    if (O.length !== e.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(O.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = E;
  const x = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function S(O, F) {
    let z, p, R, J;
    for (p = 63; p >= 32; --p) {
      for (z = 0, R = p - 32, J = p - 12; R < J; ++R)
        (F[R] += z - 16 * F[p] * x[R - (p - 32)]),
          (z = Math.floor((F[R] + 128) / 256)),
          (F[R] -= z * 256);
      (F[R] += z), (F[p] = 0);
    }
    for (z = 0, R = 0; R < 32; R++)
      (F[R] += z - (F[31] >> 4) * x[R]), (z = F[R] >> 8), (F[R] &= 255);
    for (R = 0; R < 32; R++) F[R] -= z * x[R];
    for (p = 0; p < 32; p++) (F[p + 1] += F[p] >> 8), (O[p] = F[p] & 255);
  }
  function d(O) {
    const F = new Float64Array(64);
    for (let z = 0; z < 64; z++) F[z] = O[z];
    for (let z = 0; z < 64; z++) O[z] = 0;
    S(O, F);
  }
  function T(O, F) {
    const z = new Float64Array(64),
      p = [n(), n(), n(), n()],
      R = (0, r.hash)(O.subarray(0, 32));
    (R[0] &= 248), (R[31] &= 127), (R[31] |= 64);
    const J = new Uint8Array(64);
    J.set(R.subarray(32), 32);
    const Z = new r.SHA512();
    Z.update(J.subarray(32)), Z.update(F);
    const ee = Z.digest();
    Z.clean(),
      d(ee),
      h(p, ee),
      a(J, p),
      Z.reset(),
      Z.update(J.subarray(0, 32)),
      Z.update(O.subarray(32)),
      Z.update(F);
    const ne = Z.digest();
    d(ne);
    for (let ge = 0; ge < 32; ge++) z[ge] = ee[ge];
    for (let ge = 0; ge < 32; ge++)
      for (let ve = 0; ve < 32; ve++) z[ge + ve] += ne[ge] * R[ve];
    return S(J.subarray(32), z), J;
  }
  e.sign = T;
  function Y(O, F) {
    const z = n(),
      p = n(),
      R = n(),
      J = n(),
      Z = n(),
      ee = n(),
      ne = n();
    return (
      A(O[2], c),
      L(O[1], F),
      y(R, O[1]),
      m(J, R, l),
      k(R, R, O[2]),
      j(J, O[2], J),
      y(Z, J),
      y(ee, Z),
      m(ne, ee, Z),
      m(z, ne, R),
      m(z, z, J),
      C(z, z),
      m(z, z, R),
      m(z, z, J),
      m(z, z, J),
      m(O[0], z, J),
      y(p, O[0]),
      m(p, p, J),
      N(p, R) && m(O[0], O[0], D),
      y(p, O[0]),
      m(p, p, J),
      N(p, R)
        ? -1
        : (H(O[0]) === F[31] >> 7 && k(O[0], o, O[0]), m(O[3], O[0], O[1]), 0)
    );
  }
  function X(O, F, z) {
    const p = new Uint8Array(32),
      R = [n(), n(), n(), n()],
      J = [n(), n(), n(), n()];
    if (z.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (Y(J, O)) return !1;
    const Z = new r.SHA512();
    Z.update(z.subarray(0, 32)), Z.update(O), Z.update(F);
    const ee = Z.digest();
    return d(ee), u(R, J, ee), h(J, z.subarray(32)), B(R, J), a(p, R), !Q(z, p);
  }
  e.verify = X;
  function b(O) {
    let F = [n(), n(), n(), n()];
    if (Y(F, O)) throw new Error("Ed25519: invalid public key");
    let z = n(),
      p = n(),
      R = F[1];
    j(z, c, R), k(p, c, R), I(p, p), m(z, z, p);
    let J = new Uint8Array(32);
    return q(J, z), J;
  }
  e.convertPublicKeyToX25519 = b;
  function G(O) {
    const F = (0, r.hash)(O.subarray(0, 32));
    (F[0] &= 248), (F[31] &= 127), (F[31] |= 64);
    const z = new Uint8Array(F.subarray(0, 32));
    return (0, i.wipe)(F), z;
  }
  e.convertSecretKeyToX25519 = G;
})(Dc);
const Gm = "EdDSA",
  Wm = "JWT",
  pf = ".",
  mf = "base64url",
  Qm = "utf8",
  Ym = "utf8",
  Jm = ":",
  Xm = "did",
  Zm = "key",
  Pu = "base58btc",
  ey = "z",
  ty = "K36",
  ry = 32;
function xc(e) {
  return globalThis.Buffer != null
    ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    : e;
}
function yf(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? xc(globalThis.Buffer.allocUnsafe(e))
    : new Uint8Array(e);
}
function iy(e, t) {
  t || (t = e.reduce((n, s) => n + s.length, 0));
  const r = yf(t);
  let i = 0;
  for (const n of e) r.set(n, i), (i += n.length);
  return xc(r);
}
function ny(e, t) {
  if (e.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
  for (var n = 0; n < e.length; n++) {
    var s = e.charAt(n),
      o = s.charCodeAt(0);
    if (r[o] !== 255) throw new TypeError(s + " is ambiguous");
    r[o] = n;
  }
  var c = e.length,
    l = e.charAt(0),
    f = Math.log(c) / Math.log(256),
    g = Math.log(256) / Math.log(c);
  function w(M) {
    if (
      (M instanceof Uint8Array ||
        (ArrayBuffer.isView(M)
          ? (M = new Uint8Array(M.buffer, M.byteOffset, M.byteLength))
          : Array.isArray(M) && (M = Uint8Array.from(M))),
      !(M instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (M.length === 0) return "";
    for (var K = 0, q = 0, Q = 0, N = M.length; Q !== N && M[Q] === 0; )
      Q++, K++;
    for (var H = ((N - Q) * g + 1) >>> 0, L = new Uint8Array(H); Q !== N; ) {
      for (
        var j = M[Q], k = 0, m = H - 1;
        (j !== 0 || k < q) && m !== -1;
        m--, k++
      )
        (j += (256 * L[m]) >>> 0), (L[m] = j % c >>> 0), (j = (j / c) >>> 0);
      if (j !== 0) throw new Error("Non-zero carry");
      (q = k), Q++;
    }
    for (var y = H - q; y !== H && L[y] === 0; ) y++;
    for (var I = l.repeat(K); y < H; ++y) I += e.charAt(L[y]);
    return I;
  }
  function D(M) {
    if (typeof M != "string") throw new TypeError("Expected String");
    if (M.length === 0) return new Uint8Array();
    var K = 0;
    if (M[K] !== " ") {
      for (var q = 0, Q = 0; M[K] === l; ) q++, K++;
      for (
        var N = ((M.length - K) * f + 1) >>> 0, H = new Uint8Array(N);
        M[K];

      ) {
        var L = r[M.charCodeAt(K)];
        if (L === 255) return;
        for (var j = 0, k = N - 1; (L !== 0 || j < Q) && k !== -1; k--, j++)
          (L += (c * H[k]) >>> 0),
            (H[k] = L % 256 >>> 0),
            (L = (L / 256) >>> 0);
        if (L !== 0) throw new Error("Non-zero carry");
        (Q = j), K++;
      }
      if (M[K] !== " ") {
        for (var m = N - Q; m !== N && H[m] === 0; ) m++;
        for (var y = new Uint8Array(q + (N - m)), I = q; m !== N; )
          y[I++] = H[m++];
        return y;
      }
    }
  }
  function A(M) {
    var K = D(M);
    if (K) return K;
    throw new Error(`Non-${t} character`);
  }
  return { encode: w, decodeUnsafe: D, decode: A };
}
var sy = ny,
  oy = sy;
const ay = (e) => {
    if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
      return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  cy = (e) => new TextEncoder().encode(e),
  uy = (e) => new TextDecoder().decode(e);
class ly {
  constructor(t, r, i) {
    (this.name = t), (this.prefix = r), (this.baseEncode = i);
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class hy {
  constructor(t, r, i) {
    if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = i);
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(t)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(t) {
    return wf(this, t);
  }
}
class fy {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return wf(this, t);
  }
  decode(t) {
    const r = t[0],
      i = this.decoders[r];
    if (i) return i.decode(t);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        t
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const wf = (e, t) =>
  new fy(
    Ye(Ye({}, e.decoders || { [e.prefix]: e }), t.decoders || { [t.prefix]: t })
  );
class dy {
  constructor(t, r, i, n) {
    (this.name = t),
      (this.prefix = r),
      (this.baseEncode = i),
      (this.baseDecode = n),
      (this.encoder = new ly(t, r, i)),
      (this.decoder = new hy(t, r, n));
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const qo = ({ name: e, prefix: t, encode: r, decode: i }) => new dy(e, t, r, i),
  Ts = ({ prefix: e, name: t, alphabet: r }) => {
    const { encode: i, decode: n } = oy(r, t);
    return qo({ prefix: e, name: t, encode: i, decode: (s) => ay(n(s)) });
  },
  gy = (e, t, r, i) => {
    const n = {};
    for (let g = 0; g < t.length; ++g) n[t[g]] = g;
    let s = e.length;
    for (; e[s - 1] === "="; ) --s;
    const o = new Uint8Array(((s * r) / 8) | 0);
    let c = 0,
      l = 0,
      f = 0;
    for (let g = 0; g < s; ++g) {
      const w = n[e[g]];
      if (w === void 0) throw new SyntaxError(`Non-${i} character`);
      (l = (l << r) | w),
        (c += r),
        c >= 8 && ((c -= 8), (o[f++] = 255 & (l >> c)));
    }
    if (c >= r || 255 & (l << (8 - c)))
      throw new SyntaxError("Unexpected end of data");
    return o;
  },
  py = (e, t, r) => {
    const i = t[t.length - 1] === "=",
      n = (1 << r) - 1;
    let s = "",
      o = 0,
      c = 0;
    for (let l = 0; l < e.length; ++l)
      for (c = (c << 8) | e[l], o += 8; o > r; )
        (o -= r), (s += t[n & (c >> o)]);
    if ((o && (s += t[n & (c << (r - o))]), i))
      for (; (s.length * r) & 7; ) s += "=";
    return s;
  },
  Lt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
    qo({
      prefix: t,
      name: e,
      encode(n) {
        return py(n, i, r);
      },
      decode(n) {
        return gy(n, i, r, e);
      },
    }),
  my = qo({
    prefix: "\0",
    name: "identity",
    encode: (e) => uy(e),
    decode: (e) => cy(e),
  }),
  yy = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: my },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wy = Lt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  vy = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: wy }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  by = Lt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  _y = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: by }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  Ey = Ts({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  Ay = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: Ey }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  Sy = Lt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  Iy = Lt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  Dy = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: Sy, base16upper: Iy },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  xy = Lt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  Cy = Lt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  Ty = Lt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  My = Lt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  Ny = Lt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  Oy = Lt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  Ry = Lt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  Py = Lt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  By = Lt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  Ly = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: xy,
        base32hex: Ny,
        base32hexpad: Ry,
        base32hexpadupper: Py,
        base32hexupper: Oy,
        base32pad: Ty,
        base32padupper: My,
        base32upper: Cy,
        base32z: By,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Fy = Ts({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  $y = Ts({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  Uy = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: Fy, base36upper: $y },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ky = Ts({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  qy = Ts({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  jy = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: ky, base58flickr: qy },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zy = Lt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  Ky = Lt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  Vy = Lt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  Hy = Lt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  Gy = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: zy,
        base64pad: Ky,
        base64url: Vy,
        base64urlpad: Hy,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vf = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  Wy = vf.reduce((e, t, r) => ((e[r] = t), e), []),
  Qy = vf.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
function Yy(e) {
  return e.reduce((t, r) => ((t += Wy[r]), t), "");
}
function Jy(e) {
  const t = [];
  for (const r of e) {
    const i = Qy[r.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const Xy = qo({ prefix: "🚀", name: "base256emoji", encode: Yy, decode: Jy }),
  Zy = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: Xy },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
const go = Ye(
  Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye({}, yy), vy), _y), Ay), Dy), Ly), Uy), jy), Gy),
  Zy
);
function bf(e, t, r, i) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: r },
    decoder: { decode: i },
  };
}
const Bu = bf(
    "utf8",
    "u",
    (e) => "u" + new TextDecoder("utf8").decode(e),
    (e) => new TextEncoder().encode(e.substring(1))
  ),
  na = bf(
    "ascii",
    "a",
    (e) => {
      let t = "a";
      for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
      return t;
    },
    (e) => {
      e = e.substring(1);
      const t = yf(e.length);
      for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
      return t;
    }
  ),
  _f = Ye(
    {
      utf8: Bu,
      "utf-8": Bu,
      hex: go.base16,
      latin1: na,
      ascii: na,
      binary: na,
    },
    go
  );
function Cc(e, t = "utf8") {
  const r = _f[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
        "utf8"
      )
    : r.encoder.encode(e).substring(1);
}
function Tc(e, t = "utf8") {
  const r = _f[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? xc(globalThis.Buffer.from(e, "utf-8"))
    : r.decoder.decode(`${r.prefix}${e}`);
}
function po(e) {
  return Cc(Tc(tn(e), Qm), mf);
}
function Ef(e) {
  const t = Tc(ty, Pu),
    r = ey + Cc(iy([t, e]), Pu);
  return [Xm, Zm, r].join(Jm);
}
function ew(e) {
  return Cc(e, mf);
}
function tw(e) {
  return Tc([po(e.header), po(e.payload)].join(pf), Ym);
}
function rw(e) {
  return [po(e.header), po(e.payload), ew(e.signature)].join(pf);
}
function Lu(e = On.randomBytes(ry)) {
  return Dc.generateKeyPairFromSeed(e);
}
function iw(s, o, c, l) {
  return P(
    this,
    arguments,
    function* (e, t, r, i, n = oe.fromMiliseconds(Date.now())) {
      const f = { alg: Gm, typ: Wm },
        g = Ef(i.publicKey),
        w = n + r,
        D = { iss: g, sub: e, aud: t, iat: n, exp: w },
        A = tw({ header: f, payload: D }),
        M = Dc.sign(i.secretKey, A);
      return rw({ header: f, payload: D, signature: M });
    }
  );
}
var Fu =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t, r) {
      if (r || arguments.length === 2)
        for (var i = 0, n = t.length, s; i < n; i++)
          (s || !(i in t)) &&
            (s || (s = Array.prototype.slice.call(t, 0, i)), (s[i] = t[i]));
      return e.concat(s || Array.prototype.slice.call(t));
    },
  nw = (function () {
    function e(t, r, i) {
      (this.name = t),
        (this.version = r),
        (this.os = i),
        (this.type = "browser");
    }
    return e;
  })(),
  sw = (function () {
    function e(t) {
      (this.version = t),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return e;
  })(),
  ow = (function () {
    function e(t, r, i, n) {
      (this.name = t),
        (this.version = r),
        (this.os = i),
        (this.bot = n),
        (this.type = "bot-device");
    }
    return e;
  })(),
  aw = (function () {
    function e() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return e;
  })(),
  cw = (function () {
    function e() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return e;
  })(),
  uw =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  lw =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  $u = 3,
  hw = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", uw],
  ],
  Uu = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function fw(e) {
  return e
    ? ku(e)
    : typeof document == "undefined" &&
      typeof navigator != "undefined" &&
      navigator.product === "ReactNative"
    ? new cw()
    : typeof navigator != "undefined"
    ? ku(navigator.userAgent)
    : pw();
}
function dw(e) {
  return (
    e !== "" &&
    hw.reduce(function (t, r) {
      var i = r[0],
        n = r[1];
      if (t) return t;
      var s = n.exec(e);
      return !!s && [i, s];
    }, !1)
  );
}
function ku(e) {
  var t = dw(e);
  if (!t) return null;
  var r = t[0],
    i = t[1];
  if (r === "searchbot") return new aw();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n
    ? n.length < $u && (n = Fu(Fu([], n, !0), mw($u - n.length), !0))
    : (n = []);
  var s = n.join("."),
    o = gw(e),
    c = lw.exec(e);
  return c && c[1] ? new ow(r, s, o, c[1]) : new nw(r, s, o);
}
function gw(e) {
  for (var t = 0, r = Uu.length; t < r; t++) {
    var i = Uu[t],
      n = i[0],
      s = i[1],
      o = s.exec(e);
    if (o) return n;
  }
  return null;
}
function pw() {
  var e = typeof process != "undefined" && process.version;
  return e ? new sw(process.version.slice(1)) : null;
}
function mw(e) {
  for (var t = [], r = 0; r < e; r++) t.push("0");
  return t;
}
var ht = {};
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.getLocalStorage =
  ht.getLocalStorageOrThrow =
  ht.getCrypto =
  ht.getCryptoOrThrow =
  Af =
  ht.getLocation =
  ht.getLocationOrThrow =
  Nc =
  ht.getNavigator =
  ht.getNavigatorOrThrow =
  Mc =
  ht.getDocument =
  ht.getDocumentOrThrow =
  ht.getFromWindowOrThrow =
  ht.getFromWindow =
    void 0;
function an(e) {
  let t;
  return (
    typeof window != "undefined" &&
      typeof window[e] != "undefined" &&
      (t = window[e]),
    t
  );
}
ht.getFromWindow = an;
function Rn(e) {
  const t = an(e);
  if (!t) throw new Error(`${e} is not defined in Window`);
  return t;
}
ht.getFromWindowOrThrow = Rn;
function yw() {
  return Rn("document");
}
ht.getDocumentOrThrow = yw;
function ww() {
  return an("document");
}
var Mc = (ht.getDocument = ww);
function vw() {
  return Rn("navigator");
}
ht.getNavigatorOrThrow = vw;
function bw() {
  return an("navigator");
}
var Nc = (ht.getNavigator = bw);
function _w() {
  return Rn("location");
}
ht.getLocationOrThrow = _w;
function Ew() {
  return an("location");
}
var Af = (ht.getLocation = Ew);
function Aw() {
  return Rn("crypto");
}
ht.getCryptoOrThrow = Aw;
function Sw() {
  return an("crypto");
}
ht.getCrypto = Sw;
function Iw() {
  return Rn("localStorage");
}
ht.getLocalStorageOrThrow = Iw;
function Dw() {
  return an("localStorage");
}
ht.getLocalStorage = Dw;
var Oc = {};
Object.defineProperty(Oc, "__esModule", { value: !0 });
var Sf = (Oc.getWindowMetadata = void 0);
const qu = ht;
function xw() {
  let e, t;
  try {
    (e = qu.getDocumentOrThrow()), (t = qu.getLocationOrThrow());
  } catch (w) {
    return null;
  }
  function r() {
    const w = e.getElementsByTagName("link"),
      D = [];
    for (let A = 0; A < w.length; A++) {
      const M = w[A],
        K = M.getAttribute("rel");
      if (K && K.toLowerCase().indexOf("icon") > -1) {
        const q = M.getAttribute("href");
        if (q)
          if (
            q.toLowerCase().indexOf("https:") === -1 &&
            q.toLowerCase().indexOf("http:") === -1 &&
            q.indexOf("//") !== 0
          ) {
            let Q = t.protocol + "//" + t.host;
            if (q.indexOf("/") === 0) Q += q;
            else {
              const N = t.pathname.split("/");
              N.pop();
              const H = N.join("/");
              Q += H + "/" + q;
            }
            D.push(Q);
          } else if (q.indexOf("//") === 0) {
            const Q = t.protocol + q;
            D.push(Q);
          } else D.push(q);
      }
    }
    return D;
  }
  function i(...w) {
    const D = e.getElementsByTagName("meta");
    for (let A = 0; A < D.length; A++) {
      const M = D[A],
        K = ["itemprop", "property", "name"]
          .map((q) => M.getAttribute(q))
          .filter((q) => (q ? w.includes(q) : !1));
      if (K.length && K) {
        const q = M.getAttribute("content");
        if (q) return q;
      }
    }
    return "";
  }
  function n() {
    let w = i("name", "og:site_name", "og:title", "twitter:title");
    return w || (w = e.title), w;
  }
  function s() {
    return i(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const o = n(),
    c = s(),
    l = t.origin,
    f = r();
  return { description: c, url: l, icons: f, name: o };
}
Sf = Oc.getWindowMetadata = xw;
var bs = {},
  Cw = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  If = "%[a-f0-9]{2}",
  ju = new RegExp("(" + If + ")|([^%]+?)", "gi"),
  zu = new RegExp("(" + If + ")+", "gi");
function Ha(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch (n) {}
  if (e.length === 1) return e;
  t = t || 1;
  var r = e.slice(0, t),
    i = e.slice(t);
  return Array.prototype.concat.call([], Ha(r), Ha(i));
}
function Tw(e) {
  try {
    return decodeURIComponent(e);
  } catch (i) {
    for (var t = e.match(ju) || [], r = 1; r < t.length; r++)
      (e = Ha(t, r).join("")), (t = e.match(ju) || []);
    return e;
  }
}
function Mw(e) {
  for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, r = zu.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch (c) {
      var i = Tw(r[0]);
      i !== r[0] && (t[r[0]] = i);
    }
    r = zu.exec(e);
  }
  t["%C2"] = "�";
  for (var n = Object.keys(t), s = 0; s < n.length; s++) {
    var o = n[s];
    e = e.replace(new RegExp(o, "g"), t[o]);
  }
  return e;
}
var Nw = function (e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
      );
    try {
      return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch (t) {
      return Mw(e);
    }
  },
  Ow = (e, t) => {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (t === "") return [e];
    const r = e.indexOf(t);
    return r === -1 ? [e] : [e.slice(0, r), e.slice(r + t.length)];
  },
  Rw = function (e, t) {
    for (
      var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0;
      s < i.length;
      s++
    ) {
      var o = i[s],
        c = e[o];
      (n ? t.indexOf(o) !== -1 : t(o, c, e)) && (r[o] = c);
    }
    return r;
  };
(function (e) {
  const t = Cw,
    r = Nw,
    i = Ow,
    n = Rw,
    s = (N) => N == null,
    o = Symbol("encodeFragmentIdentifier");
  function c(N) {
    switch (N.arrayFormat) {
      case "index":
        return (H) => (L, j) => {
          const k = L.length;
          return j === void 0 ||
            (N.skipNull && j === null) ||
            (N.skipEmptyString && j === "")
            ? L
            : j === null
            ? [...L, [g(H, N), "[", k, "]"].join("")]
            : [...L, [g(H, N), "[", g(k, N), "]=", g(j, N)].join("")];
        };
      case "bracket":
        return (H) => (L, j) =>
          j === void 0 ||
          (N.skipNull && j === null) ||
          (N.skipEmptyString && j === "")
            ? L
            : j === null
            ? [...L, [g(H, N), "[]"].join("")]
            : [...L, [g(H, N), "[]=", g(j, N)].join("")];
      case "colon-list-separator":
        return (H) => (L, j) =>
          j === void 0 ||
          (N.skipNull && j === null) ||
          (N.skipEmptyString && j === "")
            ? L
            : j === null
            ? [...L, [g(H, N), ":list="].join("")]
            : [...L, [g(H, N), ":list=", g(j, N)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const H = N.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (L) => (j, k) =>
          k === void 0 ||
          (N.skipNull && k === null) ||
          (N.skipEmptyString && k === "")
            ? j
            : ((k = k === null ? "" : k),
              j.length === 0
                ? [[g(L, N), H, g(k, N)].join("")]
                : [[j, g(k, N)].join(N.arrayFormatSeparator)]);
      }
      default:
        return (H) => (L, j) =>
          j === void 0 ||
          (N.skipNull && j === null) ||
          (N.skipEmptyString && j === "")
            ? L
            : j === null
            ? [...L, g(H, N)]
            : [...L, [g(H, N), "=", g(j, N)].join("")];
    }
  }
  function l(N) {
    let H;
    switch (N.arrayFormat) {
      case "index":
        return (L, j, k) => {
          if (
            ((H = /\[(\d*)\]$/.exec(L)), (L = L.replace(/\[\d*\]$/, "")), !H)
          ) {
            k[L] = j;
            return;
          }
          k[L] === void 0 && (k[L] = {}), (k[L][H[1]] = j);
        };
      case "bracket":
        return (L, j, k) => {
          if (((H = /(\[\])$/.exec(L)), (L = L.replace(/\[\]$/, "")), !H)) {
            k[L] = j;
            return;
          }
          if (k[L] === void 0) {
            k[L] = [j];
            return;
          }
          k[L] = [].concat(k[L], j);
        };
      case "colon-list-separator":
        return (L, j, k) => {
          if (((H = /(:list)$/.exec(L)), (L = L.replace(/:list$/, "")), !H)) {
            k[L] = j;
            return;
          }
          if (k[L] === void 0) {
            k[L] = [j];
            return;
          }
          k[L] = [].concat(k[L], j);
        };
      case "comma":
      case "separator":
        return (L, j, k) => {
          const m = typeof j == "string" && j.includes(N.arrayFormatSeparator),
            y =
              typeof j == "string" &&
              !m &&
              w(j, N).includes(N.arrayFormatSeparator);
          j = y ? w(j, N) : j;
          const I =
            m || y
              ? j.split(N.arrayFormatSeparator).map((C) => w(C, N))
              : j === null
              ? j
              : w(j, N);
          k[L] = I;
        };
      case "bracket-separator":
        return (L, j, k) => {
          const m = /(\[\])$/.test(L);
          if (((L = L.replace(/\[\]$/, "")), !m)) {
            k[L] = j && w(j, N);
            return;
          }
          const y =
            j === null
              ? []
              : j.split(N.arrayFormatSeparator).map((I) => w(I, N));
          if (k[L] === void 0) {
            k[L] = y;
            return;
          }
          k[L] = [].concat(k[L], y);
        };
      default:
        return (L, j, k) => {
          if (k[L] === void 0) {
            k[L] = j;
            return;
          }
          k[L] = [].concat(k[L], j);
        };
    }
  }
  function f(N) {
    if (typeof N != "string" || N.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function g(N, H) {
    return H.encode ? (H.strict ? t(N) : encodeURIComponent(N)) : N;
  }
  function w(N, H) {
    return H.decode ? r(N) : N;
  }
  function D(N) {
    return Array.isArray(N)
      ? N.sort()
      : typeof N == "object"
      ? D(Object.keys(N))
          .sort((H, L) => Number(H) - Number(L))
          .map((H) => N[H])
      : N;
  }
  function A(N) {
    const H = N.indexOf("#");
    return H !== -1 && (N = N.slice(0, H)), N;
  }
  function M(N) {
    let H = "";
    const L = N.indexOf("#");
    return L !== -1 && (H = N.slice(L)), H;
  }
  function K(N) {
    N = A(N);
    const H = N.indexOf("?");
    return H === -1 ? "" : N.slice(H + 1);
  }
  function q(N, H) {
    return (
      H.parseNumbers &&
      !Number.isNaN(Number(N)) &&
      typeof N == "string" &&
      N.trim() !== ""
        ? (N = Number(N))
        : H.parseBooleans &&
          N !== null &&
          (N.toLowerCase() === "true" || N.toLowerCase() === "false") &&
          (N = N.toLowerCase() === "true"),
      N
    );
  }
  function Q(N, H) {
    (H = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      H
    )),
      f(H.arrayFormatSeparator);
    const L = l(H),
      j = Object.create(null);
    if (typeof N != "string" || ((N = N.trim().replace(/^[?#&]/, "")), !N))
      return j;
    for (const k of N.split("&")) {
      if (k === "") continue;
      let [m, y] = i(H.decode ? k.replace(/\+/g, " ") : k, "=");
      (y =
        y === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(H.arrayFormat)
          ? y
          : w(y, H)),
        L(w(m, H), y, j);
    }
    for (const k of Object.keys(j)) {
      const m = j[k];
      if (typeof m == "object" && m !== null)
        for (const y of Object.keys(m)) m[y] = q(m[y], H);
      else j[k] = q(m, H);
    }
    return H.sort === !1
      ? j
      : (H.sort === !0
          ? Object.keys(j).sort()
          : Object.keys(j).sort(H.sort)
        ).reduce((k, m) => {
          const y = j[m];
          return (
            y && typeof y == "object" && !Array.isArray(y)
              ? (k[m] = D(y))
              : (k[m] = y),
            k
          );
        }, Object.create(null));
  }
  (e.extract = K),
    (e.parse = Q),
    (e.stringify = (N, H) => {
      if (!N) return "";
      (H = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        H
      )),
        f(H.arrayFormatSeparator);
      const L = (y) =>
          (H.skipNull && s(N[y])) || (H.skipEmptyString && N[y] === ""),
        j = c(H),
        k = {};
      for (const y of Object.keys(N)) L(y) || (k[y] = N[y]);
      const m = Object.keys(k);
      return (
        H.sort !== !1 && m.sort(H.sort),
        m
          .map((y) => {
            const I = N[y];
            return I === void 0
              ? ""
              : I === null
              ? g(y, H)
              : Array.isArray(I)
              ? I.length === 0 && H.arrayFormat === "bracket-separator"
                ? g(y, H) + "[]"
                : I.reduce(j(y), []).join("&")
              : g(y, H) + "=" + g(I, H);
          })
          .filter((y) => y.length > 0)
          .join("&")
      );
    }),
    (e.parseUrl = (N, H) => {
      H = Object.assign({ decode: !0 }, H);
      const [L, j] = i(N, "#");
      return Object.assign(
        { url: L.split("?")[0] || "", query: Q(K(N), H) },
        H && H.parseFragmentIdentifier && j
          ? { fragmentIdentifier: w(j, H) }
          : {}
      );
    }),
    (e.stringifyUrl = (N, H) => {
      H = Object.assign({ encode: !0, strict: !0, [o]: !0 }, H);
      const L = A(N.url).split("?")[0] || "",
        j = e.extract(N.url),
        k = e.parse(j, { sort: !1 }),
        m = Object.assign(k, N.query);
      let y = e.stringify(m, H);
      y && (y = `?${y}`);
      let I = M(N.url);
      return (
        N.fragmentIdentifier &&
          (I = `#${H[o] ? g(N.fragmentIdentifier, H) : N.fragmentIdentifier}`),
        `${L}${y}${I}`
      );
    }),
    (e.pick = (N, H, L) => {
      L = Object.assign({ parseFragmentIdentifier: !0, [o]: !1 }, L);
      const { url: j, query: k, fragmentIdentifier: m } = e.parseUrl(N, L);
      return e.stringifyUrl(
        { url: j, query: n(k, H), fragmentIdentifier: m },
        L
      );
    }),
    (e.exclude = (N, H, L) => {
      const j = Array.isArray(H) ? (k) => !H.includes(k) : (k, m) => !H(k, m);
      return e.pick(N, j, L);
    });
})(bs);
var Rc = {},
  jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
var kt = ke,
  Ga = pr,
  Pw = 20;
function Bw(e, t, r) {
  for (
    var i = 1634760805,
      n = 857760878,
      s = 2036477234,
      o = 1797285236,
      c = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
      l = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
      f = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
      g = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
      w = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
      D = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
      A = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
      M = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
      K = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
      q = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
      Q = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
      N = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
      H = i,
      L = n,
      j = s,
      k = o,
      m = c,
      y = l,
      I = f,
      C = g,
      B = w,
      U = D,
      a = A,
      u = M,
      h = K,
      v = q,
      _ = Q,
      E = N,
      x = 0;
    x < Pw;
    x += 2
  )
    (H = (H + m) | 0),
      (h ^= H),
      (h = (h >>> (32 - 16)) | (h << 16)),
      (B = (B + h) | 0),
      (m ^= B),
      (m = (m >>> (32 - 12)) | (m << 12)),
      (L = (L + y) | 0),
      (v ^= L),
      (v = (v >>> (32 - 16)) | (v << 16)),
      (U = (U + v) | 0),
      (y ^= U),
      (y = (y >>> (32 - 12)) | (y << 12)),
      (j = (j + I) | 0),
      (_ ^= j),
      (_ = (_ >>> (32 - 16)) | (_ << 16)),
      (a = (a + _) | 0),
      (I ^= a),
      (I = (I >>> (32 - 12)) | (I << 12)),
      (k = (k + C) | 0),
      (E ^= k),
      (E = (E >>> (32 - 16)) | (E << 16)),
      (u = (u + E) | 0),
      (C ^= u),
      (C = (C >>> (32 - 12)) | (C << 12)),
      (j = (j + I) | 0),
      (_ ^= j),
      (_ = (_ >>> (32 - 8)) | (_ << 8)),
      (a = (a + _) | 0),
      (I ^= a),
      (I = (I >>> (32 - 7)) | (I << 7)),
      (k = (k + C) | 0),
      (E ^= k),
      (E = (E >>> (32 - 8)) | (E << 8)),
      (u = (u + E) | 0),
      (C ^= u),
      (C = (C >>> (32 - 7)) | (C << 7)),
      (L = (L + y) | 0),
      (v ^= L),
      (v = (v >>> (32 - 8)) | (v << 8)),
      (U = (U + v) | 0),
      (y ^= U),
      (y = (y >>> (32 - 7)) | (y << 7)),
      (H = (H + m) | 0),
      (h ^= H),
      (h = (h >>> (32 - 8)) | (h << 8)),
      (B = (B + h) | 0),
      (m ^= B),
      (m = (m >>> (32 - 7)) | (m << 7)),
      (H = (H + y) | 0),
      (E ^= H),
      (E = (E >>> (32 - 16)) | (E << 16)),
      (a = (a + E) | 0),
      (y ^= a),
      (y = (y >>> (32 - 12)) | (y << 12)),
      (L = (L + I) | 0),
      (h ^= L),
      (h = (h >>> (32 - 16)) | (h << 16)),
      (u = (u + h) | 0),
      (I ^= u),
      (I = (I >>> (32 - 12)) | (I << 12)),
      (j = (j + C) | 0),
      (v ^= j),
      (v = (v >>> (32 - 16)) | (v << 16)),
      (B = (B + v) | 0),
      (C ^= B),
      (C = (C >>> (32 - 12)) | (C << 12)),
      (k = (k + m) | 0),
      (_ ^= k),
      (_ = (_ >>> (32 - 16)) | (_ << 16)),
      (U = (U + _) | 0),
      (m ^= U),
      (m = (m >>> (32 - 12)) | (m << 12)),
      (j = (j + C) | 0),
      (v ^= j),
      (v = (v >>> (32 - 8)) | (v << 8)),
      (B = (B + v) | 0),
      (C ^= B),
      (C = (C >>> (32 - 7)) | (C << 7)),
      (k = (k + m) | 0),
      (_ ^= k),
      (_ = (_ >>> (32 - 8)) | (_ << 8)),
      (U = (U + _) | 0),
      (m ^= U),
      (m = (m >>> (32 - 7)) | (m << 7)),
      (L = (L + I) | 0),
      (h ^= L),
      (h = (h >>> (32 - 8)) | (h << 8)),
      (u = (u + h) | 0),
      (I ^= u),
      (I = (I >>> (32 - 7)) | (I << 7)),
      (H = (H + y) | 0),
      (E ^= H),
      (E = (E >>> (32 - 8)) | (E << 8)),
      (a = (a + E) | 0),
      (y ^= a),
      (y = (y >>> (32 - 7)) | (y << 7));
  kt.writeUint32LE((H + i) | 0, e, 0),
    kt.writeUint32LE((L + n) | 0, e, 4),
    kt.writeUint32LE((j + s) | 0, e, 8),
    kt.writeUint32LE((k + o) | 0, e, 12),
    kt.writeUint32LE((m + c) | 0, e, 16),
    kt.writeUint32LE((y + l) | 0, e, 20),
    kt.writeUint32LE((I + f) | 0, e, 24),
    kt.writeUint32LE((C + g) | 0, e, 28),
    kt.writeUint32LE((B + w) | 0, e, 32),
    kt.writeUint32LE((U + D) | 0, e, 36),
    kt.writeUint32LE((a + A) | 0, e, 40),
    kt.writeUint32LE((u + M) | 0, e, 44),
    kt.writeUint32LE((h + K) | 0, e, 48),
    kt.writeUint32LE((v + q) | 0, e, 52),
    kt.writeUint32LE((_ + Q) | 0, e, 56),
    kt.writeUint32LE((E + N) | 0, e, 60);
}
function Df(e, t, r, i, n) {
  if ((n === void 0 && (n = 0), e.length !== 32))
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, o;
  if (n === 0) {
    if (t.length !== 8 && t.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    (s = new Uint8Array(16)), (o = s.length - t.length), s.set(t, o);
  } else {
    if (t.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    (s = t), (o = n);
  }
  for (var c = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    Bw(c, s, e);
    for (var f = l; f < l + 64 && f < r.length; f++) i[f] = r[f] ^ c[f - l];
    Fw(s, 0, o);
  }
  return Ga.wipe(c), n === 0 && Ga.wipe(s), i;
}
jo.streamXOR = Df;
function Lw(e, t, r, i) {
  return i === void 0 && (i = 0), Ga.wipe(r), Df(e, t, r, r, i);
}
jo.stream = Lw;
function Fw(e, t, r) {
  for (var i = 1; r--; )
    (i = (i + (e[t] & 255)) | 0), (e[t] = i & 255), (i >>>= 8), t++;
  if (i > 0) throw new Error("ChaCha: counter overflow");
}
var xf = {},
  $i = {};
Object.defineProperty($i, "__esModule", { value: !0 });
function $w(e, t, r) {
  return (~(e - 1) & t) | ((e - 1) & r);
}
$i.select = $w;
function Uw(e, t) {
  return (((e | 0) - (t | 0) - 1) >>> 31) & 1;
}
$i.lessOrEqual = Uw;
function Cf(e, t) {
  if (e.length !== t.length) return 0;
  for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
  return 1 & ((r - 1) >>> 8);
}
$i.compare = Cf;
function kw(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : Cf(e, t) !== 0;
}
$i.equal = kw;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = $i,
    r = pr;
  e.DIGEST_LENGTH = 16;
  var i = (function () {
    function o(c) {
      (this.digestLength = e.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var l = c[0] | (c[1] << 8);
      this._r[0] = l & 8191;
      var f = c[2] | (c[3] << 8);
      this._r[1] = ((l >>> 13) | (f << 3)) & 8191;
      var g = c[4] | (c[5] << 8);
      this._r[2] = ((f >>> 10) | (g << 6)) & 7939;
      var w = c[6] | (c[7] << 8);
      this._r[3] = ((g >>> 7) | (w << 9)) & 8191;
      var D = c[8] | (c[9] << 8);
      (this._r[4] = ((w >>> 4) | (D << 12)) & 255),
        (this._r[5] = (D >>> 1) & 8190);
      var A = c[10] | (c[11] << 8);
      this._r[6] = ((D >>> 14) | (A << 2)) & 8191;
      var M = c[12] | (c[13] << 8);
      this._r[7] = ((A >>> 11) | (M << 5)) & 8065;
      var K = c[14] | (c[15] << 8);
      (this._r[8] = ((M >>> 8) | (K << 8)) & 8191),
        (this._r[9] = (K >>> 5) & 127),
        (this._pad[0] = c[16] | (c[17] << 8)),
        (this._pad[1] = c[18] | (c[19] << 8)),
        (this._pad[2] = c[20] | (c[21] << 8)),
        (this._pad[3] = c[22] | (c[23] << 8)),
        (this._pad[4] = c[24] | (c[25] << 8)),
        (this._pad[5] = c[26] | (c[27] << 8)),
        (this._pad[6] = c[28] | (c[29] << 8)),
        (this._pad[7] = c[30] | (c[31] << 8));
    }
    return (
      (o.prototype._blocks = function (c, l, f) {
        for (
          var g = this._fin ? 0 : 2048,
            w = this._h[0],
            D = this._h[1],
            A = this._h[2],
            M = this._h[3],
            K = this._h[4],
            q = this._h[5],
            Q = this._h[6],
            N = this._h[7],
            H = this._h[8],
            L = this._h[9],
            j = this._r[0],
            k = this._r[1],
            m = this._r[2],
            y = this._r[3],
            I = this._r[4],
            C = this._r[5],
            B = this._r[6],
            U = this._r[7],
            a = this._r[8],
            u = this._r[9];
          f >= 16;

        ) {
          var h = c[l + 0] | (c[l + 1] << 8);
          w += h & 8191;
          var v = c[l + 2] | (c[l + 3] << 8);
          D += ((h >>> 13) | (v << 3)) & 8191;
          var _ = c[l + 4] | (c[l + 5] << 8);
          A += ((v >>> 10) | (_ << 6)) & 8191;
          var E = c[l + 6] | (c[l + 7] << 8);
          M += ((_ >>> 7) | (E << 9)) & 8191;
          var x = c[l + 8] | (c[l + 9] << 8);
          (K += ((E >>> 4) | (x << 12)) & 8191), (q += (x >>> 1) & 8191);
          var S = c[l + 10] | (c[l + 11] << 8);
          Q += ((x >>> 14) | (S << 2)) & 8191;
          var d = c[l + 12] | (c[l + 13] << 8);
          N += ((S >>> 11) | (d << 5)) & 8191;
          var T = c[l + 14] | (c[l + 15] << 8);
          (H += ((d >>> 8) | (T << 8)) & 8191), (L += (T >>> 5) | g);
          var Y = 0,
            X = Y;
          (X += w * j),
            (X += D * (5 * u)),
            (X += A * (5 * a)),
            (X += M * (5 * U)),
            (X += K * (5 * B)),
            (Y = X >>> 13),
            (X &= 8191),
            (X += q * (5 * C)),
            (X += Q * (5 * I)),
            (X += N * (5 * y)),
            (X += H * (5 * m)),
            (X += L * (5 * k)),
            (Y += X >>> 13),
            (X &= 8191);
          var b = Y;
          (b += w * k),
            (b += D * j),
            (b += A * (5 * u)),
            (b += M * (5 * a)),
            (b += K * (5 * U)),
            (Y = b >>> 13),
            (b &= 8191),
            (b += q * (5 * B)),
            (b += Q * (5 * C)),
            (b += N * (5 * I)),
            (b += H * (5 * y)),
            (b += L * (5 * m)),
            (Y += b >>> 13),
            (b &= 8191);
          var G = Y;
          (G += w * m),
            (G += D * k),
            (G += A * j),
            (G += M * (5 * u)),
            (G += K * (5 * a)),
            (Y = G >>> 13),
            (G &= 8191),
            (G += q * (5 * U)),
            (G += Q * (5 * B)),
            (G += N * (5 * C)),
            (G += H * (5 * I)),
            (G += L * (5 * y)),
            (Y += G >>> 13),
            (G &= 8191);
          var O = Y;
          (O += w * y),
            (O += D * m),
            (O += A * k),
            (O += M * j),
            (O += K * (5 * u)),
            (Y = O >>> 13),
            (O &= 8191),
            (O += q * (5 * a)),
            (O += Q * (5 * U)),
            (O += N * (5 * B)),
            (O += H * (5 * C)),
            (O += L * (5 * I)),
            (Y += O >>> 13),
            (O &= 8191);
          var F = Y;
          (F += w * I),
            (F += D * y),
            (F += A * m),
            (F += M * k),
            (F += K * j),
            (Y = F >>> 13),
            (F &= 8191),
            (F += q * (5 * u)),
            (F += Q * (5 * a)),
            (F += N * (5 * U)),
            (F += H * (5 * B)),
            (F += L * (5 * C)),
            (Y += F >>> 13),
            (F &= 8191);
          var z = Y;
          (z += w * C),
            (z += D * I),
            (z += A * y),
            (z += M * m),
            (z += K * k),
            (Y = z >>> 13),
            (z &= 8191),
            (z += q * j),
            (z += Q * (5 * u)),
            (z += N * (5 * a)),
            (z += H * (5 * U)),
            (z += L * (5 * B)),
            (Y += z >>> 13),
            (z &= 8191);
          var p = Y;
          (p += w * B),
            (p += D * C),
            (p += A * I),
            (p += M * y),
            (p += K * m),
            (Y = p >>> 13),
            (p &= 8191),
            (p += q * k),
            (p += Q * j),
            (p += N * (5 * u)),
            (p += H * (5 * a)),
            (p += L * (5 * U)),
            (Y += p >>> 13),
            (p &= 8191);
          var R = Y;
          (R += w * U),
            (R += D * B),
            (R += A * C),
            (R += M * I),
            (R += K * y),
            (Y = R >>> 13),
            (R &= 8191),
            (R += q * m),
            (R += Q * k),
            (R += N * j),
            (R += H * (5 * u)),
            (R += L * (5 * a)),
            (Y += R >>> 13),
            (R &= 8191);
          var J = Y;
          (J += w * a),
            (J += D * U),
            (J += A * B),
            (J += M * C),
            (J += K * I),
            (Y = J >>> 13),
            (J &= 8191),
            (J += q * y),
            (J += Q * m),
            (J += N * k),
            (J += H * j),
            (J += L * (5 * u)),
            (Y += J >>> 13),
            (J &= 8191);
          var Z = Y;
          (Z += w * u),
            (Z += D * a),
            (Z += A * U),
            (Z += M * B),
            (Z += K * C),
            (Y = Z >>> 13),
            (Z &= 8191),
            (Z += q * I),
            (Z += Q * y),
            (Z += N * m),
            (Z += H * k),
            (Z += L * j),
            (Y += Z >>> 13),
            (Z &= 8191),
            (Y = ((Y << 2) + Y) | 0),
            (Y = (Y + X) | 0),
            (X = Y & 8191),
            (Y = Y >>> 13),
            (b += Y),
            (w = X),
            (D = b),
            (A = G),
            (M = O),
            (K = F),
            (q = z),
            (Q = p),
            (N = R),
            (H = J),
            (L = Z),
            (l += 16),
            (f -= 16);
        }
        (this._h[0] = w),
          (this._h[1] = D),
          (this._h[2] = A),
          (this._h[3] = M),
          (this._h[4] = K),
          (this._h[5] = q),
          (this._h[6] = Q),
          (this._h[7] = N),
          (this._h[8] = H),
          (this._h[9] = L);
      }),
      (o.prototype.finish = function (c, l) {
        l === void 0 && (l = 0);
        var f = new Uint16Array(10),
          g,
          w,
          D,
          A;
        if (this._leftover) {
          for (A = this._leftover, this._buffer[A++] = 1; A < 16; A++)
            this._buffer[A] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (g = this._h[1] >>> 13, this._h[1] &= 8191, A = 2; A < 10; A++)
          (this._h[A] += g), (g = this._h[A] >>> 13), (this._h[A] &= 8191);
        for (
          this._h[0] += g * 5,
            g = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += g,
            g = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += g,
            f[0] = this._h[0] + 5,
            g = f[0] >>> 13,
            f[0] &= 8191,
            A = 1;
          A < 10;
          A++
        )
          (f[A] = this._h[A] + g), (g = f[A] >>> 13), (f[A] &= 8191);
        for (f[9] -= 8192, w = (g ^ 1) - 1, A = 0; A < 10; A++) f[A] &= w;
        for (w = ~w, A = 0; A < 10; A++) this._h[A] = (this._h[A] & w) | f[A];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            D = this._h[0] + this._pad[0],
            this._h[0] = D & 65535,
            A = 1;
          A < 8;
          A++
        )
          (D = (((this._h[A] + this._pad[A]) | 0) + (D >>> 16)) | 0),
            (this._h[A] = D & 65535);
        return (
          (c[l + 0] = this._h[0] >>> 0),
          (c[l + 1] = this._h[0] >>> 8),
          (c[l + 2] = this._h[1] >>> 0),
          (c[l + 3] = this._h[1] >>> 8),
          (c[l + 4] = this._h[2] >>> 0),
          (c[l + 5] = this._h[2] >>> 8),
          (c[l + 6] = this._h[3] >>> 0),
          (c[l + 7] = this._h[3] >>> 8),
          (c[l + 8] = this._h[4] >>> 0),
          (c[l + 9] = this._h[4] >>> 8),
          (c[l + 10] = this._h[5] >>> 0),
          (c[l + 11] = this._h[5] >>> 8),
          (c[l + 12] = this._h[6] >>> 0),
          (c[l + 13] = this._h[6] >>> 8),
          (c[l + 14] = this._h[7] >>> 0),
          (c[l + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (o.prototype.update = function (c) {
        var l = 0,
          f = c.length,
          g;
        if (this._leftover) {
          (g = 16 - this._leftover), g > f && (g = f);
          for (var w = 0; w < g; w++)
            this._buffer[this._leftover + w] = c[l + w];
          if (((f -= g), (l += g), (this._leftover += g), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (f >= 16 &&
            ((g = f - (f % 16)), this._blocks(c, l, g), (l += g), (f -= g)),
          f)
        ) {
          for (var w = 0; w < f; w++)
            this._buffer[this._leftover + w] = c[l + w];
          this._leftover += f;
        }
        return this;
      }),
      (o.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var c = new Uint8Array(16);
        return this.finish(c), c;
      }),
      (o.prototype.clean = function () {
        return (
          r.wipe(this._buffer),
          r.wipe(this._r),
          r.wipe(this._h),
          r.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      o
    );
  })();
  e.Poly1305 = i;
  function n(o, c) {
    var l = new i(o);
    l.update(c);
    var f = l.digest();
    return l.clean(), f;
  }
  e.oneTimeAuth = n;
  function s(o, c) {
    return o.length !== e.DIGEST_LENGTH || c.length !== e.DIGEST_LENGTH
      ? !1
      : t.equal(o, c);
  }
  e.equal = s;
})(xf);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = jo,
    r = xf,
    i = pr,
    n = ke,
    s = $i;
  (e.KEY_LENGTH = 32), (e.NONCE_LENGTH = 12), (e.TAG_LENGTH = 16);
  var o = new Uint8Array(16),
    c = (function () {
      function l(f) {
        if (
          ((this.nonceLength = e.NONCE_LENGTH),
          (this.tagLength = e.TAG_LENGTH),
          f.length !== e.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(f);
      }
      return (
        (l.prototype.seal = function (f, g, w, D) {
          if (f.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var A = new Uint8Array(16);
          A.set(f, A.length - f.length);
          var M = new Uint8Array(32);
          t.stream(this._key, A, M, 4);
          var K = g.length + this.tagLength,
            q;
          if (D) {
            if (D.length !== K)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            q = D;
          } else q = new Uint8Array(K);
          return (
            t.streamXOR(this._key, A, g, q, 4),
            this._authenticate(
              q.subarray(q.length - this.tagLength, q.length),
              M,
              q.subarray(0, q.length - this.tagLength),
              w
            ),
            i.wipe(A),
            q
          );
        }),
        (l.prototype.open = function (f, g, w, D) {
          if (f.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (g.length < this.tagLength) return null;
          var A = new Uint8Array(16);
          A.set(f, A.length - f.length);
          var M = new Uint8Array(32);
          t.stream(this._key, A, M, 4);
          var K = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              K,
              M,
              g.subarray(0, g.length - this.tagLength),
              w
            ),
            !s.equal(K, g.subarray(g.length - this.tagLength, g.length)))
          )
            return null;
          var q = g.length - this.tagLength,
            Q;
          if (D) {
            if (D.length !== q)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            Q = D;
          } else Q = new Uint8Array(q);
          return (
            t.streamXOR(
              this._key,
              A,
              g.subarray(0, g.length - this.tagLength),
              Q,
              4
            ),
            i.wipe(A),
            Q
          );
        }),
        (l.prototype.clean = function () {
          return i.wipe(this._key), this;
        }),
        (l.prototype._authenticate = function (f, g, w, D) {
          var A = new r.Poly1305(g);
          D &&
            (A.update(D),
            D.length % 16 > 0 && A.update(o.subarray(D.length % 16))),
            A.update(w),
            w.length % 16 > 0 && A.update(o.subarray(w.length % 16));
          var M = new Uint8Array(8);
          D && n.writeUint64LE(D.length, M),
            A.update(M),
            n.writeUint64LE(w.length, M),
            A.update(M);
          for (var K = A.digest(), q = 0; q < K.length; q++) f[q] = K[q];
          A.clean(), i.wipe(K), i.wipe(M);
        }),
        l
      );
    })();
  e.ChaCha20Poly1305 = c;
})(Rc);
var Tf = {},
  Ms = {},
  Pc = {};
Object.defineProperty(Pc, "__esModule", { value: !0 });
function qw(e) {
  return (
    typeof e.saveState != "undefined" &&
    typeof e.restoreState != "undefined" &&
    typeof e.cleanSavedState != "undefined"
  );
}
Pc.isSerializableHash = qw;
Object.defineProperty(Ms, "__esModule", { value: !0 });
var Qr = Pc,
  jw = $i,
  zw = pr,
  Mf = (function () {
    function e(t, r) {
      (this._finished = !1),
        (this._inner = new t()),
        (this._outer = new t()),
        (this.blockSize = this._outer.blockSize),
        (this.digestLength = this._outer.digestLength);
      var i = new Uint8Array(this.blockSize);
      r.length > this.blockSize
        ? this._inner.update(r).finish(i).clean()
        : i.set(r);
      for (var n = 0; n < i.length; n++) i[n] ^= 54;
      this._inner.update(i);
      for (var n = 0; n < i.length; n++) i[n] ^= 106;
      this._outer.update(i),
        Qr.isSerializableHash(this._inner) &&
          Qr.isSerializableHash(this._outer) &&
          ((this._innerKeyedState = this._inner.saveState()),
          (this._outerKeyedState = this._outer.saveState())),
        zw.wipe(i);
    }
    return (
      (e.prototype.reset = function () {
        if (
          !Qr.isSerializableHash(this._inner) ||
          !Qr.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't reset() because hash doesn't implement restoreState()"
          );
        return (
          this._inner.restoreState(this._innerKeyedState),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (e.prototype.clean = function () {
        Qr.isSerializableHash(this._inner) &&
          this._inner.cleanSavedState(this._innerKeyedState),
          Qr.isSerializableHash(this._outer) &&
            this._outer.cleanSavedState(this._outerKeyedState),
          this._inner.clean(),
          this._outer.clean();
      }),
      (e.prototype.update = function (t) {
        return this._inner.update(t), this;
      }),
      (e.prototype.finish = function (t) {
        return this._finished
          ? (this._outer.finish(t), this)
          : (this._inner.finish(t),
            this._outer.update(t.subarray(0, this.digestLength)).finish(t),
            (this._finished = !0),
            this);
      }),
      (e.prototype.digest = function () {
        var t = new Uint8Array(this.digestLength);
        return this.finish(t), t;
      }),
      (e.prototype.saveState = function () {
        if (!Qr.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't saveState() because hash doesn't implement it"
          );
        return this._inner.saveState();
      }),
      (e.prototype.restoreState = function (t) {
        if (
          !Qr.isSerializableHash(this._inner) ||
          !Qr.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't restoreState() because hash doesn't implement it"
          );
        return (
          this._inner.restoreState(t),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (e.prototype.cleanSavedState = function (t) {
        if (!Qr.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't cleanSavedState() because hash doesn't implement it"
          );
        this._inner.cleanSavedState(t);
      }),
      e
    );
  })();
Ms.HMAC = Mf;
function Kw(e, t, r) {
  var i = new Mf(e, t);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
Ms.hmac = Kw;
Ms.equal = jw.equal;
Object.defineProperty(Tf, "__esModule", { value: !0 });
var Ku = Ms,
  Vu = pr,
  Vw = (function () {
    function e(t, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)),
        (this._counter = new Uint8Array(1)),
        (this._hash = t),
        (this._info = n);
      var s = Ku.hmac(this._hash, i, r);
      (this._hmac = new Ku.HMAC(t, s)),
        (this._buffer = new Uint8Array(this._hmac.digestLength)),
        (this._bufpos = this._buffer.length);
    }
    return (
      (e.prototype._fillBuffer = function () {
        this._counter[0]++;
        var t = this._counter[0];
        if (t === 0) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
          t > 1 && this._hmac.update(this._buffer),
          this._info && this._hmac.update(this._info),
          this._hmac.update(this._counter),
          this._hmac.finish(this._buffer),
          (this._bufpos = 0);
      }),
      (e.prototype.expand = function (t) {
        for (var r = new Uint8Array(t), i = 0; i < r.length; i++)
          this._bufpos === this._buffer.length && this._fillBuffer(),
            (r[i] = this._buffer[this._bufpos++]);
        return r;
      }),
      (e.prototype.clean = function () {
        this._hmac.clean(),
          Vu.wipe(this._buffer),
          Vu.wipe(this._counter),
          (this._bufpos = 0);
      }),
      e
    );
  })(),
  Hw = (Tf.HKDF = Vw),
  zo = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ke,
    r = pr;
  (e.DIGEST_LENGTH = 32), (e.BLOCK_SIZE = 64);
  var i = (function () {
    function c() {
      (this.digestLength = e.DIGEST_LENGTH),
        (this.blockSize = e.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (c.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (c.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (c.prototype.clean = function () {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }),
      (c.prototype.update = function (l, f) {
        if ((f === void 0 && (f = l.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var g = 0;
        if (((this._bytesHashed += f), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && f > 0; )
            (this._buffer[this._bufferLength++] = l[g++]), f--;
          this._bufferLength === this.blockSize &&
            (s(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          f >= this.blockSize &&
          ((g = s(this._temp, this._state, l, g, f)), (f %= this.blockSize));
          f > 0;

        )
          (this._buffer[this._bufferLength++] = l[g++]), f--;
        return this;
      }),
      (c.prototype.finish = function (l) {
        if (!this._finished) {
          var f = this._bytesHashed,
            g = this._bufferLength,
            w = (f / 536870912) | 0,
            D = f << 3,
            A = f % 64 < 56 ? 64 : 128;
          this._buffer[g] = 128;
          for (var M = g + 1; M < A - 8; M++) this._buffer[M] = 0;
          t.writeUint32BE(w, this._buffer, A - 8),
            t.writeUint32BE(D, this._buffer, A - 4),
            s(this._temp, this._state, this._buffer, 0, A),
            (this._finished = !0);
        }
        for (var M = 0; M < this.digestLength / 4; M++)
          t.writeUint32BE(this._state[M], l, M * 4);
        return this;
      }),
      (c.prototype.digest = function () {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }),
      (c.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (c.prototype.restoreState = function (l) {
        return (
          this._state.set(l.state),
          (this._bufferLength = l.bufferLength),
          l.buffer && this._buffer.set(l.buffer),
          (this._bytesHashed = l.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (c.prototype.cleanSavedState = function (l) {
        r.wipe(l.state),
          l.buffer && r.wipe(l.buffer),
          (l.bufferLength = 0),
          (l.bytesHashed = 0);
      }),
      c
    );
  })();
  e.SHA256 = i;
  var n = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function s(c, l, f, g, w) {
    for (; w >= 64; ) {
      for (
        var D = l[0],
          A = l[1],
          M = l[2],
          K = l[3],
          q = l[4],
          Q = l[5],
          N = l[6],
          H = l[7],
          L = 0;
        L < 16;
        L++
      ) {
        var j = g + L * 4;
        c[L] = t.readUint32BE(f, j);
      }
      for (var L = 16; L < 64; L++) {
        var k = c[L - 2],
          m =
            ((k >>> 17) | (k << (32 - 17))) ^
            ((k >>> 19) | (k << (32 - 19))) ^
            (k >>> 10);
        k = c[L - 15];
        var y =
          ((k >>> 7) | (k << (32 - 7))) ^
          ((k >>> 18) | (k << (32 - 18))) ^
          (k >>> 3);
        c[L] = ((m + c[L - 7]) | 0) + ((y + c[L - 16]) | 0);
      }
      for (var L = 0; L < 64; L++) {
        var m =
            ((((((q >>> 6) | (q << 26)) ^
              ((q >>> 11) | (q << 21)) ^
              ((q >>> 25) | (q << 7))) +
              ((q & Q) ^ (~q & N))) |
              0) +
              ((H + ((n[L] + c[L]) | 0)) | 0)) |
            0,
          y =
            ((((D >>> 2) | (D << (32 - 2))) ^
              ((D >>> 13) | (D << (32 - 13))) ^
              ((D >>> 22) | (D << (32 - 22)))) +
              ((D & A) ^ (D & M) ^ (A & M))) |
            0;
        (H = N),
          (N = Q),
          (Q = q),
          (q = (K + m) | 0),
          (K = M),
          (M = A),
          (A = D),
          (D = (m + y) | 0);
      }
      (l[0] += D),
        (l[1] += A),
        (l[2] += M),
        (l[3] += K),
        (l[4] += q),
        (l[5] += Q),
        (l[6] += N),
        (l[7] += H),
        (g += 64),
        (w -= 64);
    }
    return g;
  }
  function o(c) {
    var l = new i();
    l.update(c);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = o;
})(zo);
var Bc = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.sharedKey =
      e.generateKeyPair =
      e.generateKeyPairFromSeed =
      e.scalarMultBase =
      e.scalarMult =
      e.SHARED_KEY_LENGTH =
      e.SECRET_KEY_LENGTH =
      e.PUBLIC_KEY_LENGTH =
        void 0);
  const t = On,
    r = pr;
  (e.PUBLIC_KEY_LENGTH = 32),
    (e.SECRET_KEY_LENGTH = 32),
    (e.SHARED_KEY_LENGTH = 32);
  function i(L) {
    const j = new Float64Array(16);
    if (L) for (let k = 0; k < L.length; k++) j[k] = L[k];
    return j;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const s = i([56129, 1]);
  function o(L) {
    let j = 1;
    for (let k = 0; k < 16; k++) {
      let m = L[k] + j + 65535;
      (j = Math.floor(m / 65536)), (L[k] = m - j * 65536);
    }
    L[0] += j - 1 + 37 * (j - 1);
  }
  function c(L, j, k) {
    const m = ~(k - 1);
    for (let y = 0; y < 16; y++) {
      const I = m & (L[y] ^ j[y]);
      (L[y] ^= I), (j[y] ^= I);
    }
  }
  function l(L, j) {
    const k = i(),
      m = i();
    for (let y = 0; y < 16; y++) m[y] = j[y];
    o(m), o(m), o(m);
    for (let y = 0; y < 2; y++) {
      k[0] = m[0] - 65517;
      for (let C = 1; C < 15; C++)
        (k[C] = m[C] - 65535 - ((k[C - 1] >> 16) & 1)), (k[C - 1] &= 65535);
      k[15] = m[15] - 32767 - ((k[14] >> 16) & 1);
      const I = (k[15] >> 16) & 1;
      (k[14] &= 65535), c(m, k, 1 - I);
    }
    for (let y = 0; y < 16; y++)
      (L[2 * y] = m[y] & 255), (L[2 * y + 1] = m[y] >> 8);
  }
  function f(L, j) {
    for (let k = 0; k < 16; k++) L[k] = j[2 * k] + (j[2 * k + 1] << 8);
    L[15] &= 32767;
  }
  function g(L, j, k) {
    for (let m = 0; m < 16; m++) L[m] = j[m] + k[m];
  }
  function w(L, j, k) {
    for (let m = 0; m < 16; m++) L[m] = j[m] - k[m];
  }
  function D(L, j, k) {
    let m,
      y,
      I = 0,
      C = 0,
      B = 0,
      U = 0,
      a = 0,
      u = 0,
      h = 0,
      v = 0,
      _ = 0,
      E = 0,
      x = 0,
      S = 0,
      d = 0,
      T = 0,
      Y = 0,
      X = 0,
      b = 0,
      G = 0,
      O = 0,
      F = 0,
      z = 0,
      p = 0,
      R = 0,
      J = 0,
      Z = 0,
      ee = 0,
      ne = 0,
      ge = 0,
      ve = 0,
      Ze = 0,
      Ie = 0,
      me = k[0],
      Fe = k[1],
      de = k[2],
      he = k[3],
      xe = k[4],
      ue = k[5],
      ae = k[6],
      Ee = k[7],
      fe = k[8],
      pe = k[9],
      Ae = k[10],
      ye = k[11],
      we = k[12],
      je = k[13],
      _e = k[14],
      be = k[15];
    (m = j[0]),
      (I += m * me),
      (C += m * Fe),
      (B += m * de),
      (U += m * he),
      (a += m * xe),
      (u += m * ue),
      (h += m * ae),
      (v += m * Ee),
      (_ += m * fe),
      (E += m * pe),
      (x += m * Ae),
      (S += m * ye),
      (d += m * we),
      (T += m * je),
      (Y += m * _e),
      (X += m * be),
      (m = j[1]),
      (C += m * me),
      (B += m * Fe),
      (U += m * de),
      (a += m * he),
      (u += m * xe),
      (h += m * ue),
      (v += m * ae),
      (_ += m * Ee),
      (E += m * fe),
      (x += m * pe),
      (S += m * Ae),
      (d += m * ye),
      (T += m * we),
      (Y += m * je),
      (X += m * _e),
      (b += m * be),
      (m = j[2]),
      (B += m * me),
      (U += m * Fe),
      (a += m * de),
      (u += m * he),
      (h += m * xe),
      (v += m * ue),
      (_ += m * ae),
      (E += m * Ee),
      (x += m * fe),
      (S += m * pe),
      (d += m * Ae),
      (T += m * ye),
      (Y += m * we),
      (X += m * je),
      (b += m * _e),
      (G += m * be),
      (m = j[3]),
      (U += m * me),
      (a += m * Fe),
      (u += m * de),
      (h += m * he),
      (v += m * xe),
      (_ += m * ue),
      (E += m * ae),
      (x += m * Ee),
      (S += m * fe),
      (d += m * pe),
      (T += m * Ae),
      (Y += m * ye),
      (X += m * we),
      (b += m * je),
      (G += m * _e),
      (O += m * be),
      (m = j[4]),
      (a += m * me),
      (u += m * Fe),
      (h += m * de),
      (v += m * he),
      (_ += m * xe),
      (E += m * ue),
      (x += m * ae),
      (S += m * Ee),
      (d += m * fe),
      (T += m * pe),
      (Y += m * Ae),
      (X += m * ye),
      (b += m * we),
      (G += m * je),
      (O += m * _e),
      (F += m * be),
      (m = j[5]),
      (u += m * me),
      (h += m * Fe),
      (v += m * de),
      (_ += m * he),
      (E += m * xe),
      (x += m * ue),
      (S += m * ae),
      (d += m * Ee),
      (T += m * fe),
      (Y += m * pe),
      (X += m * Ae),
      (b += m * ye),
      (G += m * we),
      (O += m * je),
      (F += m * _e),
      (z += m * be),
      (m = j[6]),
      (h += m * me),
      (v += m * Fe),
      (_ += m * de),
      (E += m * he),
      (x += m * xe),
      (S += m * ue),
      (d += m * ae),
      (T += m * Ee),
      (Y += m * fe),
      (X += m * pe),
      (b += m * Ae),
      (G += m * ye),
      (O += m * we),
      (F += m * je),
      (z += m * _e),
      (p += m * be),
      (m = j[7]),
      (v += m * me),
      (_ += m * Fe),
      (E += m * de),
      (x += m * he),
      (S += m * xe),
      (d += m * ue),
      (T += m * ae),
      (Y += m * Ee),
      (X += m * fe),
      (b += m * pe),
      (G += m * Ae),
      (O += m * ye),
      (F += m * we),
      (z += m * je),
      (p += m * _e),
      (R += m * be),
      (m = j[8]),
      (_ += m * me),
      (E += m * Fe),
      (x += m * de),
      (S += m * he),
      (d += m * xe),
      (T += m * ue),
      (Y += m * ae),
      (X += m * Ee),
      (b += m * fe),
      (G += m * pe),
      (O += m * Ae),
      (F += m * ye),
      (z += m * we),
      (p += m * je),
      (R += m * _e),
      (J += m * be),
      (m = j[9]),
      (E += m * me),
      (x += m * Fe),
      (S += m * de),
      (d += m * he),
      (T += m * xe),
      (Y += m * ue),
      (X += m * ae),
      (b += m * Ee),
      (G += m * fe),
      (O += m * pe),
      (F += m * Ae),
      (z += m * ye),
      (p += m * we),
      (R += m * je),
      (J += m * _e),
      (Z += m * be),
      (m = j[10]),
      (x += m * me),
      (S += m * Fe),
      (d += m * de),
      (T += m * he),
      (Y += m * xe),
      (X += m * ue),
      (b += m * ae),
      (G += m * Ee),
      (O += m * fe),
      (F += m * pe),
      (z += m * Ae),
      (p += m * ye),
      (R += m * we),
      (J += m * je),
      (Z += m * _e),
      (ee += m * be),
      (m = j[11]),
      (S += m * me),
      (d += m * Fe),
      (T += m * de),
      (Y += m * he),
      (X += m * xe),
      (b += m * ue),
      (G += m * ae),
      (O += m * Ee),
      (F += m * fe),
      (z += m * pe),
      (p += m * Ae),
      (R += m * ye),
      (J += m * we),
      (Z += m * je),
      (ee += m * _e),
      (ne += m * be),
      (m = j[12]),
      (d += m * me),
      (T += m * Fe),
      (Y += m * de),
      (X += m * he),
      (b += m * xe),
      (G += m * ue),
      (O += m * ae),
      (F += m * Ee),
      (z += m * fe),
      (p += m * pe),
      (R += m * Ae),
      (J += m * ye),
      (Z += m * we),
      (ee += m * je),
      (ne += m * _e),
      (ge += m * be),
      (m = j[13]),
      (T += m * me),
      (Y += m * Fe),
      (X += m * de),
      (b += m * he),
      (G += m * xe),
      (O += m * ue),
      (F += m * ae),
      (z += m * Ee),
      (p += m * fe),
      (R += m * pe),
      (J += m * Ae),
      (Z += m * ye),
      (ee += m * we),
      (ne += m * je),
      (ge += m * _e),
      (ve += m * be),
      (m = j[14]),
      (Y += m * me),
      (X += m * Fe),
      (b += m * de),
      (G += m * he),
      (O += m * xe),
      (F += m * ue),
      (z += m * ae),
      (p += m * Ee),
      (R += m * fe),
      (J += m * pe),
      (Z += m * Ae),
      (ee += m * ye),
      (ne += m * we),
      (ge += m * je),
      (ve += m * _e),
      (Ze += m * be),
      (m = j[15]),
      (X += m * me),
      (b += m * Fe),
      (G += m * de),
      (O += m * he),
      (F += m * xe),
      (z += m * ue),
      (p += m * ae),
      (R += m * Ee),
      (J += m * fe),
      (Z += m * pe),
      (ee += m * Ae),
      (ne += m * ye),
      (ge += m * we),
      (ve += m * je),
      (Ze += m * _e),
      (Ie += m * be),
      (I += 38 * b),
      (C += 38 * G),
      (B += 38 * O),
      (U += 38 * F),
      (a += 38 * z),
      (u += 38 * p),
      (h += 38 * R),
      (v += 38 * J),
      (_ += 38 * Z),
      (E += 38 * ee),
      (x += 38 * ne),
      (S += 38 * ge),
      (d += 38 * ve),
      (T += 38 * Ze),
      (Y += 38 * Ie),
      (y = 1),
      (m = I + y + 65535),
      (y = Math.floor(m / 65536)),
      (I = m - y * 65536),
      (m = C + y + 65535),
      (y = Math.floor(m / 65536)),
      (C = m - y * 65536),
      (m = B + y + 65535),
      (y = Math.floor(m / 65536)),
      (B = m - y * 65536),
      (m = U + y + 65535),
      (y = Math.floor(m / 65536)),
      (U = m - y * 65536),
      (m = a + y + 65535),
      (y = Math.floor(m / 65536)),
      (a = m - y * 65536),
      (m = u + y + 65535),
      (y = Math.floor(m / 65536)),
      (u = m - y * 65536),
      (m = h + y + 65535),
      (y = Math.floor(m / 65536)),
      (h = m - y * 65536),
      (m = v + y + 65535),
      (y = Math.floor(m / 65536)),
      (v = m - y * 65536),
      (m = _ + y + 65535),
      (y = Math.floor(m / 65536)),
      (_ = m - y * 65536),
      (m = E + y + 65535),
      (y = Math.floor(m / 65536)),
      (E = m - y * 65536),
      (m = x + y + 65535),
      (y = Math.floor(m / 65536)),
      (x = m - y * 65536),
      (m = S + y + 65535),
      (y = Math.floor(m / 65536)),
      (S = m - y * 65536),
      (m = d + y + 65535),
      (y = Math.floor(m / 65536)),
      (d = m - y * 65536),
      (m = T + y + 65535),
      (y = Math.floor(m / 65536)),
      (T = m - y * 65536),
      (m = Y + y + 65535),
      (y = Math.floor(m / 65536)),
      (Y = m - y * 65536),
      (m = X + y + 65535),
      (y = Math.floor(m / 65536)),
      (X = m - y * 65536),
      (I += y - 1 + 37 * (y - 1)),
      (y = 1),
      (m = I + y + 65535),
      (y = Math.floor(m / 65536)),
      (I = m - y * 65536),
      (m = C + y + 65535),
      (y = Math.floor(m / 65536)),
      (C = m - y * 65536),
      (m = B + y + 65535),
      (y = Math.floor(m / 65536)),
      (B = m - y * 65536),
      (m = U + y + 65535),
      (y = Math.floor(m / 65536)),
      (U = m - y * 65536),
      (m = a + y + 65535),
      (y = Math.floor(m / 65536)),
      (a = m - y * 65536),
      (m = u + y + 65535),
      (y = Math.floor(m / 65536)),
      (u = m - y * 65536),
      (m = h + y + 65535),
      (y = Math.floor(m / 65536)),
      (h = m - y * 65536),
      (m = v + y + 65535),
      (y = Math.floor(m / 65536)),
      (v = m - y * 65536),
      (m = _ + y + 65535),
      (y = Math.floor(m / 65536)),
      (_ = m - y * 65536),
      (m = E + y + 65535),
      (y = Math.floor(m / 65536)),
      (E = m - y * 65536),
      (m = x + y + 65535),
      (y = Math.floor(m / 65536)),
      (x = m - y * 65536),
      (m = S + y + 65535),
      (y = Math.floor(m / 65536)),
      (S = m - y * 65536),
      (m = d + y + 65535),
      (y = Math.floor(m / 65536)),
      (d = m - y * 65536),
      (m = T + y + 65535),
      (y = Math.floor(m / 65536)),
      (T = m - y * 65536),
      (m = Y + y + 65535),
      (y = Math.floor(m / 65536)),
      (Y = m - y * 65536),
      (m = X + y + 65535),
      (y = Math.floor(m / 65536)),
      (X = m - y * 65536),
      (I += y - 1 + 37 * (y - 1)),
      (L[0] = I),
      (L[1] = C),
      (L[2] = B),
      (L[3] = U),
      (L[4] = a),
      (L[5] = u),
      (L[6] = h),
      (L[7] = v),
      (L[8] = _),
      (L[9] = E),
      (L[10] = x),
      (L[11] = S),
      (L[12] = d),
      (L[13] = T),
      (L[14] = Y),
      (L[15] = X);
  }
  function A(L, j) {
    D(L, j, j);
  }
  function M(L, j) {
    const k = i();
    for (let m = 0; m < 16; m++) k[m] = j[m];
    for (let m = 253; m >= 0; m--) A(k, k), m !== 2 && m !== 4 && D(k, k, j);
    for (let m = 0; m < 16; m++) L[m] = k[m];
  }
  function K(L, j) {
    const k = new Uint8Array(32),
      m = new Float64Array(80),
      y = i(),
      I = i(),
      C = i(),
      B = i(),
      U = i(),
      a = i();
    for (let _ = 0; _ < 31; _++) k[_] = L[_];
    (k[31] = (L[31] & 127) | 64), (k[0] &= 248), f(m, j);
    for (let _ = 0; _ < 16; _++) I[_] = m[_];
    y[0] = B[0] = 1;
    for (let _ = 254; _ >= 0; --_) {
      const E = (k[_ >>> 3] >>> (_ & 7)) & 1;
      c(y, I, E),
        c(C, B, E),
        g(U, y, C),
        w(y, y, C),
        g(C, I, B),
        w(I, I, B),
        A(B, U),
        A(a, y),
        D(y, C, y),
        D(C, I, U),
        g(U, y, C),
        w(y, y, C),
        A(I, y),
        w(C, B, a),
        D(y, C, s),
        g(y, y, B),
        D(C, C, y),
        D(y, B, a),
        D(B, I, m),
        A(I, U),
        c(y, I, E),
        c(C, B, E);
    }
    for (let _ = 0; _ < 16; _++)
      (m[_ + 16] = y[_]),
        (m[_ + 32] = C[_]),
        (m[_ + 48] = I[_]),
        (m[_ + 64] = B[_]);
    const u = m.subarray(32),
      h = m.subarray(16);
    M(u, u), D(h, h, u);
    const v = new Uint8Array(32);
    return l(v, h), v;
  }
  e.scalarMult = K;
  function q(L) {
    return K(L, n);
  }
  e.scalarMultBase = q;
  function Q(L) {
    if (L.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const j = new Uint8Array(L);
    return { publicKey: q(j), secretKey: j };
  }
  e.generateKeyPairFromSeed = Q;
  function N(L) {
    const j = (0, t.randomBytes)(32, L),
      k = Q(j);
    return (0, r.wipe)(j), k;
  }
  e.generateKeyPair = N;
  function H(L, j, k = !1) {
    if (L.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (j.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const m = K(L, j);
    if (k) {
      let y = 0;
      for (let I = 0; I < m.length; I++) y |= m[I];
      if (y === 0) throw new Error("X25519: invalid shared key");
    }
    return m;
  }
  e.sharedKey = H;
})(Bc);
function Nf(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(e)
    : new Uint8Array(e);
}
function Hu(e, t) {
  t || (t = e.reduce((n, s) => n + s.length, 0));
  const r = Nf(t);
  let i = 0;
  for (const n of e) r.set(n, i), (i += n.length);
  return r;
}
function Of(e, t, r, i) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: r },
    decoder: { decode: i },
  };
}
const Gu = Of(
    "utf8",
    "u",
    (e) => "u" + new TextDecoder("utf8").decode(e),
    (e) => new TextEncoder().encode(e.substring(1))
  ),
  sa = Of(
    "ascii",
    "a",
    (e) => {
      let t = "a";
      for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
      return t;
    },
    (e) => {
      e = e.substring(1);
      const t = Nf(e.length);
      for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
      return t;
    }
  ),
  Rf = Ye(
    {
      utf8: Gu,
      "utf-8": Gu,
      hex: go.base16,
      latin1: sa,
      ascii: sa,
      binary: sa,
    },
    go
  );
function kr(e, t = "utf8") {
  const r = Rf[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(e, "utf8")
    : r.decoder.decode(`${r.prefix}${e}`);
}
function Nr(e, t = "utf8") {
  const r = Rf[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
        "utf8"
      )
    : r.encoder.encode(e).substring(1);
}
const Gw = {
    waku: {
      publish: "waku_publish",
      batchPublish: "waku_batchPublish",
      subscribe: "waku_subscribe",
      batchSubscribe: "waku_batchSubscribe",
      subscription: "waku_subscription",
      unsubscribe: "waku_unsubscribe",
      batchUnsubscribe: "waku_batchUnsubscribe",
      batchFetchMessages: "waku_batchFetchMessages",
    },
    irn: {
      publish: "irn_publish",
      batchPublish: "irn_batchPublish",
      subscribe: "irn_subscribe",
      batchSubscribe: "irn_batchSubscribe",
      subscription: "irn_subscription",
      unsubscribe: "irn_unsubscribe",
      batchUnsubscribe: "irn_batchUnsubscribe",
      batchFetchMessages: "irn_batchFetchMessages",
    },
    iridium: {
      publish: "iridium_publish",
      batchPublish: "iridium_batchPublish",
      subscribe: "iridium_subscribe",
      batchSubscribe: "iridium_batchSubscribe",
      subscription: "iridium_subscription",
      unsubscribe: "iridium_unsubscribe",
      batchUnsubscribe: "iridium_batchUnsubscribe",
      batchFetchMessages: "iridium_batchFetchMessages",
    },
  },
  Pf = ":";
function oa(e) {
  const [t, r] = e.split(Pf);
  return { namespace: t, reference: r };
}
function Ww(e) {
  const [t, r, i] = e.split(Pf);
  return { namespace: t, reference: r, address: i };
}
function Qw(e) {
  const { address: t } = Ww(e);
  return t;
}
function Bf(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
var Yw = Object.defineProperty,
  Wu = Object.getOwnPropertySymbols,
  Jw = Object.prototype.hasOwnProperty,
  Xw = Object.prototype.propertyIsEnumerable,
  Qu = (e, t, r) =>
    t in e
      ? Yw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Yu = (e, t) => {
    for (var r in t || (t = {})) Jw.call(t, r) && Qu(e, r, t[r]);
    if (Wu) for (var r of Wu(t)) Xw.call(t, r) && Qu(e, r, t[r]);
    return e;
  };
const Zw = "ReactNative",
  lr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  ev = "js";
function _s() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Pn() {
  return !Mc() && !!Nc() && navigator.product === Zw;
}
function Bn() {
  return !_s() && !!Nc() && !!Mc();
}
function Ns() {
  return Pn()
    ? lr.reactNative
    : _s()
    ? lr.node
    : Bn()
    ? lr.browser
    : lr.unknown;
}
function tv() {
  var e;
  try {
    return Pn() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (e = global.Application) == null
        ? void 0
        : e.applicationId
      : void 0;
  } catch (t) {
    return;
  }
}
function rv(e, t) {
  let r = bs.parse(e);
  return (r = Yu(Yu({}, r), t)), (e = bs.stringify(r)), e;
}
function iv() {
  return Sf() || { name: "", description: "", url: "", icons: [""] };
}
function nv() {
  if (
    Ns() === lr.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const e = fw();
  if (e === null) return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser"
    ? [t, e.name, e.version].join("-")
    : [t, e.version].join("-");
}
function sv() {
  var e;
  const t = Ns();
  return t === lr.browser
    ? [t, ((e = Af()) == null ? void 0 : e.host) || "unknown"].join(":")
    : t;
}
function ov(e, t, r) {
  const i = nv(),
    n = sv();
  return [[e, t].join("-"), [ev, r].join("-"), i, n].join("/");
}
function av({
  protocol: e,
  version: t,
  relayUrl: r,
  sdkVersion: i,
  auth: n,
  projectId: s,
  useOnCloseEvent: o,
  bundleId: c,
}) {
  const l = r.split("?"),
    f = ov(e, t, i),
    g = {
      auth: n,
      ua: f,
      projectId: s,
      useOnCloseEvent: o || void 0,
      origin: c || void 0,
    },
    w = rv(l[1] || "", g);
  return l[0] + "?" + w;
}
function Ji(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function Lf(e) {
  return Object.fromEntries(e.entries());
}
function Ff(e) {
  return new Map(Object.entries(e));
}
function Qi(e = oe.FIVE_MINUTES, t) {
  const r = oe.toMiliseconds(e || oe.FIVE_MINUTES);
  let i, n, s;
  return {
    resolve: (o) => {
      s && i && (clearTimeout(s), i(o));
    },
    reject: (o) => {
      s && n && (clearTimeout(s), n(o));
    },
    done: () =>
      new Promise((o, c) => {
        (s = setTimeout(() => {
          c(new Error(t));
        }, r)),
          (i = o),
          (n = c);
      }),
  };
}
function An(e, t, r) {
  return new Promise((i, n) =>
    P(this, null, function* () {
      const s = setTimeout(() => n(new Error(r)), t);
      try {
        const o = yield e;
        i(o);
      } catch (o) {
        n(o);
      }
      clearTimeout(s);
    })
  );
}
function $f(e, t) {
  if (typeof t == "string" && t.startsWith(`${e}:`)) return t;
  if (e.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function cv(e) {
  return $f("topic", e);
}
function uv(e) {
  return $f("id", e);
}
function Uf(e) {
  const [t, r] = e.split(":"),
    i = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string") i.topic = r;
  else if (t === "id" && Number.isInteger(Number(r))) i.id = Number(r);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${t}:${r}`
    );
  return i;
}
function Pt(e, t) {
  return oe.fromMiliseconds((t || Date.now()) + oe.toMiliseconds(e));
}
function Ni(e) {
  return Date.now() >= oe.toMiliseconds(e);
}
function ze(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
function lv(e = [], t = []) {
  return [...new Set([...e, ...t])];
}
function hv(i) {
  return P(this, arguments, function* ({ id: e, topic: t, wcDeepLink: r }) {
    try {
      if (!r) return;
      const n = typeof r == "string" ? JSON.parse(r) : r;
      let s = n == null ? void 0 : n.href;
      if (typeof s != "string") return;
      s.endsWith("/") && (s = s.slice(0, -1));
      const o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
        c = Ns();
      c === lr.browser
        ? o.startsWith("https://") || o.startsWith("http://")
          ? window.open(o, "_blank", "noreferrer noopener")
          : window.open(o, "_self", "noreferrer noopener")
        : c === lr.reactNative &&
          typeof (global == null ? void 0 : global.Linking) < "u" &&
          (yield global.Linking.openURL(o));
    } catch (n) {
      console.error(n);
    }
  });
}
function fv(e, t) {
  return P(this, null, function* () {
    try {
      return (yield e.getItem(t)) || (Bn() ? localStorage.getItem(t) : void 0);
    } catch (r) {
      console.error(r);
    }
  });
}
var kf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function dv(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r = function () {
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (i) {
      var n = Object.getOwnPropertyDescriptor(e, i);
      Object.defineProperty(
        r,
        i,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return e[i];
              },
            }
      );
    }),
    r
  );
}
var qf = { exports: {} };
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ (function (e) {
  (function () {
    var t = "input is invalid type",
      r = "finalize already called",
      i = typeof window == "object",
      n = i ? window : {};
    n.JS_SHA3_NO_WINDOW && (i = !1);
    var s = !i && typeof self == "object",
      o =
        !n.JS_SHA3_NO_NODE_JS &&
        typeof process == "object" &&
        process.versions &&
        process.versions.node;
    o ? (n = kf) : s && (n = self);
    var c = !n.JS_SHA3_NO_COMMON_JS && !0 && e.exports,
      l = !n.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
      f = "0123456789abcdef".split(""),
      g = [31, 7936, 2031616, 520093696],
      w = [4, 1024, 262144, 67108864],
      D = [1, 256, 65536, 16777216],
      A = [6, 1536, 393216, 100663296],
      M = [0, 8, 16, 24],
      K = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ],
      q = [224, 256, 384, 512],
      Q = [128, 256],
      N = ["hex", "buffer", "arrayBuffer", "array", "digest"],
      H = { 128: 168, 256: 136 };
    (n.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (b) {
        return Object.prototype.toString.call(b) === "[object Array]";
      }),
      l &&
        (n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (b) {
          return (
            typeof b == "object" &&
            b.buffer &&
            b.buffer.constructor === ArrayBuffer
          );
        });
    for (
      var L = function (b, G, O) {
          return function (F) {
            return new T(b, G, b).update(F)[O]();
          };
        },
        j = function (b, G, O) {
          return function (F, z) {
            return new T(b, G, z).update(F)[O]();
          };
        },
        k = function (b, G, O) {
          return function (F, z, p, R) {
            return u["cshake" + b].update(F, z, p, R)[O]();
          };
        },
        m = function (b, G, O) {
          return function (F, z, p, R) {
            return u["kmac" + b].update(F, z, p, R)[O]();
          };
        },
        y = function (b, G, O, F) {
          for (var z = 0; z < N.length; ++z) {
            var p = N[z];
            b[p] = G(O, F, p);
          }
          return b;
        },
        I = function (b, G) {
          var O = L(b, G, "hex");
          return (
            (O.create = function () {
              return new T(b, G, b);
            }),
            (O.update = function (F) {
              return O.create().update(F);
            }),
            y(O, L, b, G)
          );
        },
        C = function (b, G) {
          var O = j(b, G, "hex");
          return (
            (O.create = function (F) {
              return new T(b, G, F);
            }),
            (O.update = function (F, z) {
              return O.create(z).update(F);
            }),
            y(O, j, b, G)
          );
        },
        B = function (b, G) {
          var O = H[b],
            F = k(b, G, "hex");
          return (
            (F.create = function (z, p, R) {
              return !p && !R
                ? u["shake" + b].create(z)
                : new T(b, G, z).bytepad([p, R], O);
            }),
            (F.update = function (z, p, R, J) {
              return F.create(p, R, J).update(z);
            }),
            y(F, k, b, G)
          );
        },
        U = function (b, G) {
          var O = H[b],
            F = m(b, G, "hex");
          return (
            (F.create = function (z, p, R) {
              return new Y(b, G, p).bytepad(["KMAC", R], O).bytepad([z], O);
            }),
            (F.update = function (z, p, R, J) {
              return F.create(z, R, J).update(p);
            }),
            y(F, m, b, G)
          );
        },
        a = [
          { name: "keccak", padding: D, bits: q, createMethod: I },
          { name: "sha3", padding: A, bits: q, createMethod: I },
          { name: "shake", padding: g, bits: Q, createMethod: C },
          { name: "cshake", padding: w, bits: Q, createMethod: B },
          { name: "kmac", padding: w, bits: Q, createMethod: U },
        ],
        u = {},
        h = [],
        v = 0;
      v < a.length;
      ++v
    )
      for (var _ = a[v], E = _.bits, x = 0; x < E.length; ++x) {
        var S = _.name + "_" + E[x];
        if (
          (h.push(S),
          (u[S] = _.createMethod(E[x], _.padding)),
          _.name !== "sha3")
        ) {
          var d = _.name + E[x];
          h.push(d), (u[d] = u[S]);
        }
      }
    function T(b, G, O) {
      (this.blocks = []),
        (this.s = []),
        (this.padding = G),
        (this.outputBits = O),
        (this.reset = !0),
        (this.finalized = !1),
        (this.block = 0),
        (this.start = 0),
        (this.blockCount = (1600 - (b << 1)) >> 5),
        (this.byteCount = this.blockCount << 2),
        (this.outputBlocks = O >> 5),
        (this.extraBytes = (O & 31) >> 3);
      for (var F = 0; F < 50; ++F) this.s[F] = 0;
    }
    (T.prototype.update = function (b) {
      if (this.finalized) throw new Error(r);
      var G,
        O = typeof b;
      if (O !== "string") {
        if (O === "object") {
          if (b === null) throw new Error(t);
          if (l && b.constructor === ArrayBuffer) b = new Uint8Array(b);
          else if (!Array.isArray(b) && (!l || !ArrayBuffer.isView(b)))
            throw new Error(t);
        } else throw new Error(t);
        G = !0;
      }
      for (
        var F = this.blocks,
          z = this.byteCount,
          p = b.length,
          R = this.blockCount,
          J = 0,
          Z = this.s,
          ee,
          ne;
        J < p;

      ) {
        if (this.reset)
          for (this.reset = !1, F[0] = this.block, ee = 1; ee < R + 1; ++ee)
            F[ee] = 0;
        if (G)
          for (ee = this.start; J < p && ee < z; ++J)
            F[ee >> 2] |= b[J] << M[ee++ & 3];
        else
          for (ee = this.start; J < p && ee < z; ++J)
            (ne = b.charCodeAt(J)),
              ne < 128
                ? (F[ee >> 2] |= ne << M[ee++ & 3])
                : ne < 2048
                ? ((F[ee >> 2] |= (192 | (ne >> 6)) << M[ee++ & 3]),
                  (F[ee >> 2] |= (128 | (ne & 63)) << M[ee++ & 3]))
                : ne < 55296 || ne >= 57344
                ? ((F[ee >> 2] |= (224 | (ne >> 12)) << M[ee++ & 3]),
                  (F[ee >> 2] |= (128 | ((ne >> 6) & 63)) << M[ee++ & 3]),
                  (F[ee >> 2] |= (128 | (ne & 63)) << M[ee++ & 3]))
                : ((ne =
                    65536 + (((ne & 1023) << 10) | (b.charCodeAt(++J) & 1023))),
                  (F[ee >> 2] |= (240 | (ne >> 18)) << M[ee++ & 3]),
                  (F[ee >> 2] |= (128 | ((ne >> 12) & 63)) << M[ee++ & 3]),
                  (F[ee >> 2] |= (128 | ((ne >> 6) & 63)) << M[ee++ & 3]),
                  (F[ee >> 2] |= (128 | (ne & 63)) << M[ee++ & 3]));
        if (((this.lastByteIndex = ee), ee >= z)) {
          for (this.start = ee - z, this.block = F[R], ee = 0; ee < R; ++ee)
            Z[ee] ^= F[ee];
          X(Z), (this.reset = !0);
        } else this.start = ee;
      }
      return this;
    }),
      (T.prototype.encode = function (b, G) {
        var O = b & 255,
          F = 1,
          z = [O];
        for (b = b >> 8, O = b & 255; O > 0; )
          z.unshift(O), (b = b >> 8), (O = b & 255), ++F;
        return G ? z.push(F) : z.unshift(F), this.update(z), z.length;
      }),
      (T.prototype.encodeString = function (b) {
        var G,
          O = typeof b;
        if (O !== "string") {
          if (O === "object") {
            if (b === null) throw new Error(t);
            if (l && b.constructor === ArrayBuffer) b = new Uint8Array(b);
            else if (!Array.isArray(b) && (!l || !ArrayBuffer.isView(b)))
              throw new Error(t);
          } else throw new Error(t);
          G = !0;
        }
        var F = 0,
          z = b.length;
        if (G) F = z;
        else
          for (var p = 0; p < b.length; ++p) {
            var R = b.charCodeAt(p);
            R < 128
              ? (F += 1)
              : R < 2048
              ? (F += 2)
              : R < 55296 || R >= 57344
              ? (F += 3)
              : ((R =
                  65536 + (((R & 1023) << 10) | (b.charCodeAt(++p) & 1023))),
                (F += 4));
          }
        return (F += this.encode(F * 8)), this.update(b), F;
      }),
      (T.prototype.bytepad = function (b, G) {
        for (var O = this.encode(G), F = 0; F < b.length; ++F)
          O += this.encodeString(b[F]);
        var z = G - (O % G),
          p = [];
        return (p.length = z), this.update(p), this;
      }),
      (T.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var b = this.blocks,
            G = this.lastByteIndex,
            O = this.blockCount,
            F = this.s;
          if (
            ((b[G >> 2] |= this.padding[G & 3]),
            this.lastByteIndex === this.byteCount)
          )
            for (b[0] = b[O], G = 1; G < O + 1; ++G) b[G] = 0;
          for (b[O - 1] |= 2147483648, G = 0; G < O; ++G) F[G] ^= b[G];
          X(F);
        }
      }),
      (T.prototype.toString = T.prototype.hex =
        function () {
          this.finalize();
          for (
            var b = this.blockCount,
              G = this.s,
              O = this.outputBlocks,
              F = this.extraBytes,
              z = 0,
              p = 0,
              R = "",
              J;
            p < O;

          ) {
            for (z = 0; z < b && p < O; ++z, ++p)
              (J = G[z]),
                (R +=
                  f[(J >> 4) & 15] +
                  f[J & 15] +
                  f[(J >> 12) & 15] +
                  f[(J >> 8) & 15] +
                  f[(J >> 20) & 15] +
                  f[(J >> 16) & 15] +
                  f[(J >> 28) & 15] +
                  f[(J >> 24) & 15]);
            p % b === 0 && (X(G), (z = 0));
          }
          return (
            F &&
              ((J = G[z]),
              (R += f[(J >> 4) & 15] + f[J & 15]),
              F > 1 && (R += f[(J >> 12) & 15] + f[(J >> 8) & 15]),
              F > 2 && (R += f[(J >> 20) & 15] + f[(J >> 16) & 15])),
            R
          );
        }),
      (T.prototype.arrayBuffer = function () {
        this.finalize();
        var b = this.blockCount,
          G = this.s,
          O = this.outputBlocks,
          F = this.extraBytes,
          z = 0,
          p = 0,
          R = this.outputBits >> 3,
          J;
        F ? (J = new ArrayBuffer((O + 1) << 2)) : (J = new ArrayBuffer(R));
        for (var Z = new Uint32Array(J); p < O; ) {
          for (z = 0; z < b && p < O; ++z, ++p) Z[p] = G[z];
          p % b === 0 && X(G);
        }
        return F && ((Z[z] = G[z]), (J = J.slice(0, R))), J;
      }),
      (T.prototype.buffer = T.prototype.arrayBuffer),
      (T.prototype.digest = T.prototype.array =
        function () {
          this.finalize();
          for (
            var b = this.blockCount,
              G = this.s,
              O = this.outputBlocks,
              F = this.extraBytes,
              z = 0,
              p = 0,
              R = [],
              J,
              Z;
            p < O;

          ) {
            for (z = 0; z < b && p < O; ++z, ++p)
              (J = p << 2),
                (Z = G[z]),
                (R[J] = Z & 255),
                (R[J + 1] = (Z >> 8) & 255),
                (R[J + 2] = (Z >> 16) & 255),
                (R[J + 3] = (Z >> 24) & 255);
            p % b === 0 && X(G);
          }
          return (
            F &&
              ((J = p << 2),
              (Z = G[z]),
              (R[J] = Z & 255),
              F > 1 && (R[J + 1] = (Z >> 8) & 255),
              F > 2 && (R[J + 2] = (Z >> 16) & 255)),
            R
          );
        });
    function Y(b, G, O) {
      T.call(this, b, G, O);
    }
    (Y.prototype = new T()),
      (Y.prototype.finalize = function () {
        return (
          this.encode(this.outputBits, !0), T.prototype.finalize.call(this)
        );
      });
    var X = function (b) {
      var G,
        O,
        F,
        z,
        p,
        R,
        J,
        Z,
        ee,
        ne,
        ge,
        ve,
        Ze,
        Ie,
        me,
        Fe,
        de,
        he,
        xe,
        ue,
        ae,
        Ee,
        fe,
        pe,
        Ae,
        ye,
        we,
        je,
        _e,
        be,
        At,
        Ke,
        We,
        wt,
        Qe,
        Je,
        mr,
        Ce,
        De,
        et,
        Te,
        Me,
        Xe,
        Oe,
        Re,
        ct,
        Pe,
        Be,
        st,
        Ne,
        Se,
        ut,
        Le,
        ot,
        gi,
        at,
        Ge,
        Kr,
        Vr,
        Hr,
        Gr,
        Wr,
        $t;
      for (F = 0; F < 48; F += 2)
        (z = b[0] ^ b[10] ^ b[20] ^ b[30] ^ b[40]),
          (p = b[1] ^ b[11] ^ b[21] ^ b[31] ^ b[41]),
          (R = b[2] ^ b[12] ^ b[22] ^ b[32] ^ b[42]),
          (J = b[3] ^ b[13] ^ b[23] ^ b[33] ^ b[43]),
          (Z = b[4] ^ b[14] ^ b[24] ^ b[34] ^ b[44]),
          (ee = b[5] ^ b[15] ^ b[25] ^ b[35] ^ b[45]),
          (ne = b[6] ^ b[16] ^ b[26] ^ b[36] ^ b[46]),
          (ge = b[7] ^ b[17] ^ b[27] ^ b[37] ^ b[47]),
          (ve = b[8] ^ b[18] ^ b[28] ^ b[38] ^ b[48]),
          (Ze = b[9] ^ b[19] ^ b[29] ^ b[39] ^ b[49]),
          (G = ve ^ ((R << 1) | (J >>> 31))),
          (O = Ze ^ ((J << 1) | (R >>> 31))),
          (b[0] ^= G),
          (b[1] ^= O),
          (b[10] ^= G),
          (b[11] ^= O),
          (b[20] ^= G),
          (b[21] ^= O),
          (b[30] ^= G),
          (b[31] ^= O),
          (b[40] ^= G),
          (b[41] ^= O),
          (G = z ^ ((Z << 1) | (ee >>> 31))),
          (O = p ^ ((ee << 1) | (Z >>> 31))),
          (b[2] ^= G),
          (b[3] ^= O),
          (b[12] ^= G),
          (b[13] ^= O),
          (b[22] ^= G),
          (b[23] ^= O),
          (b[32] ^= G),
          (b[33] ^= O),
          (b[42] ^= G),
          (b[43] ^= O),
          (G = R ^ ((ne << 1) | (ge >>> 31))),
          (O = J ^ ((ge << 1) | (ne >>> 31))),
          (b[4] ^= G),
          (b[5] ^= O),
          (b[14] ^= G),
          (b[15] ^= O),
          (b[24] ^= G),
          (b[25] ^= O),
          (b[34] ^= G),
          (b[35] ^= O),
          (b[44] ^= G),
          (b[45] ^= O),
          (G = Z ^ ((ve << 1) | (Ze >>> 31))),
          (O = ee ^ ((Ze << 1) | (ve >>> 31))),
          (b[6] ^= G),
          (b[7] ^= O),
          (b[16] ^= G),
          (b[17] ^= O),
          (b[26] ^= G),
          (b[27] ^= O),
          (b[36] ^= G),
          (b[37] ^= O),
          (b[46] ^= G),
          (b[47] ^= O),
          (G = ne ^ ((z << 1) | (p >>> 31))),
          (O = ge ^ ((p << 1) | (z >>> 31))),
          (b[8] ^= G),
          (b[9] ^= O),
          (b[18] ^= G),
          (b[19] ^= O),
          (b[28] ^= G),
          (b[29] ^= O),
          (b[38] ^= G),
          (b[39] ^= O),
          (b[48] ^= G),
          (b[49] ^= O),
          (Ie = b[0]),
          (me = b[1]),
          (ct = (b[11] << 4) | (b[10] >>> 28)),
          (Pe = (b[10] << 4) | (b[11] >>> 28)),
          (je = (b[20] << 3) | (b[21] >>> 29)),
          (_e = (b[21] << 3) | (b[20] >>> 29)),
          (Hr = (b[31] << 9) | (b[30] >>> 23)),
          (Gr = (b[30] << 9) | (b[31] >>> 23)),
          (Me = (b[40] << 18) | (b[41] >>> 14)),
          (Xe = (b[41] << 18) | (b[40] >>> 14)),
          (wt = (b[2] << 1) | (b[3] >>> 31)),
          (Qe = (b[3] << 1) | (b[2] >>> 31)),
          (Fe = (b[13] << 12) | (b[12] >>> 20)),
          (de = (b[12] << 12) | (b[13] >>> 20)),
          (Be = (b[22] << 10) | (b[23] >>> 22)),
          (st = (b[23] << 10) | (b[22] >>> 22)),
          (be = (b[33] << 13) | (b[32] >>> 19)),
          (At = (b[32] << 13) | (b[33] >>> 19)),
          (Wr = (b[42] << 2) | (b[43] >>> 30)),
          ($t = (b[43] << 2) | (b[42] >>> 30)),
          (ot = (b[5] << 30) | (b[4] >>> 2)),
          (gi = (b[4] << 30) | (b[5] >>> 2)),
          (Je = (b[14] << 6) | (b[15] >>> 26)),
          (mr = (b[15] << 6) | (b[14] >>> 26)),
          (he = (b[25] << 11) | (b[24] >>> 21)),
          (xe = (b[24] << 11) | (b[25] >>> 21)),
          (Ne = (b[34] << 15) | (b[35] >>> 17)),
          (Se = (b[35] << 15) | (b[34] >>> 17)),
          (Ke = (b[45] << 29) | (b[44] >>> 3)),
          (We = (b[44] << 29) | (b[45] >>> 3)),
          (pe = (b[6] << 28) | (b[7] >>> 4)),
          (Ae = (b[7] << 28) | (b[6] >>> 4)),
          (at = (b[17] << 23) | (b[16] >>> 9)),
          (Ge = (b[16] << 23) | (b[17] >>> 9)),
          (Ce = (b[26] << 25) | (b[27] >>> 7)),
          (De = (b[27] << 25) | (b[26] >>> 7)),
          (ue = (b[36] << 21) | (b[37] >>> 11)),
          (ae = (b[37] << 21) | (b[36] >>> 11)),
          (ut = (b[47] << 24) | (b[46] >>> 8)),
          (Le = (b[46] << 24) | (b[47] >>> 8)),
          (Oe = (b[8] << 27) | (b[9] >>> 5)),
          (Re = (b[9] << 27) | (b[8] >>> 5)),
          (ye = (b[18] << 20) | (b[19] >>> 12)),
          (we = (b[19] << 20) | (b[18] >>> 12)),
          (Kr = (b[29] << 7) | (b[28] >>> 25)),
          (Vr = (b[28] << 7) | (b[29] >>> 25)),
          (et = (b[38] << 8) | (b[39] >>> 24)),
          (Te = (b[39] << 8) | (b[38] >>> 24)),
          (Ee = (b[48] << 14) | (b[49] >>> 18)),
          (fe = (b[49] << 14) | (b[48] >>> 18)),
          (b[0] = Ie ^ (~Fe & he)),
          (b[1] = me ^ (~de & xe)),
          (b[10] = pe ^ (~ye & je)),
          (b[11] = Ae ^ (~we & _e)),
          (b[20] = wt ^ (~Je & Ce)),
          (b[21] = Qe ^ (~mr & De)),
          (b[30] = Oe ^ (~ct & Be)),
          (b[31] = Re ^ (~Pe & st)),
          (b[40] = ot ^ (~at & Kr)),
          (b[41] = gi ^ (~Ge & Vr)),
          (b[2] = Fe ^ (~he & ue)),
          (b[3] = de ^ (~xe & ae)),
          (b[12] = ye ^ (~je & be)),
          (b[13] = we ^ (~_e & At)),
          (b[22] = Je ^ (~Ce & et)),
          (b[23] = mr ^ (~De & Te)),
          (b[32] = ct ^ (~Be & Ne)),
          (b[33] = Pe ^ (~st & Se)),
          (b[42] = at ^ (~Kr & Hr)),
          (b[43] = Ge ^ (~Vr & Gr)),
          (b[4] = he ^ (~ue & Ee)),
          (b[5] = xe ^ (~ae & fe)),
          (b[14] = je ^ (~be & Ke)),
          (b[15] = _e ^ (~At & We)),
          (b[24] = Ce ^ (~et & Me)),
          (b[25] = De ^ (~Te & Xe)),
          (b[34] = Be ^ (~Ne & ut)),
          (b[35] = st ^ (~Se & Le)),
          (b[44] = Kr ^ (~Hr & Wr)),
          (b[45] = Vr ^ (~Gr & $t)),
          (b[6] = ue ^ (~Ee & Ie)),
          (b[7] = ae ^ (~fe & me)),
          (b[16] = be ^ (~Ke & pe)),
          (b[17] = At ^ (~We & Ae)),
          (b[26] = et ^ (~Me & wt)),
          (b[27] = Te ^ (~Xe & Qe)),
          (b[36] = Ne ^ (~ut & Oe)),
          (b[37] = Se ^ (~Le & Re)),
          (b[46] = Hr ^ (~Wr & ot)),
          (b[47] = Gr ^ (~$t & gi)),
          (b[8] = Ee ^ (~Ie & Fe)),
          (b[9] = fe ^ (~me & de)),
          (b[18] = Ke ^ (~pe & ye)),
          (b[19] = We ^ (~Ae & we)),
          (b[28] = Me ^ (~wt & Je)),
          (b[29] = Xe ^ (~Qe & mr)),
          (b[38] = ut ^ (~Oe & ct)),
          (b[39] = Le ^ (~Re & Pe)),
          (b[48] = Wr ^ (~ot & at)),
          (b[49] = $t ^ (~gi & Ge)),
          (b[0] ^= K[F]),
          (b[1] ^= K[F + 1]);
    };
    if (c) e.exports = u;
    else for (v = 0; v < h.length; ++v) n[h[v]] = u[h[v]];
  })();
})(qf);
var gv = qf.exports;
const pv = "logger/5.7.0";
let Ju = !1,
  Xu = !1;
const io = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Zu = io.default,
  aa = null;
function mv() {
  try {
    const e = [];
    if (
      (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
        try {
          if ("test".normalize(t) !== "test") throw new Error("bad normalize");
        } catch (r) {
          e.push(t);
        }
      }),
      e.length)
    )
      throw new Error("missing " + e.join(", "));
    if (
      String.fromCharCode(233).normalize("NFD") !==
      String.fromCharCode(101, 769)
    )
      throw new Error("broken implementation");
  } catch (e) {
    return e.message;
  }
  return null;
}
const el = mv();
var Wa;
(function (e) {
  (e.DEBUG = "DEBUG"),
    (e.INFO = "INFO"),
    (e.WARNING = "WARNING"),
    (e.ERROR = "ERROR"),
    (e.OFF = "OFF");
})(Wa || (Wa = {}));
var Fr;
(function (e) {
  (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
    (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
    (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
    (e.NETWORK_ERROR = "NETWORK_ERROR"),
    (e.SERVER_ERROR = "SERVER_ERROR"),
    (e.TIMEOUT = "TIMEOUT"),
    (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
    (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
    (e.MISSING_NEW = "MISSING_NEW"),
    (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
    (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
    (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
    (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
    (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
    (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
    (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
    (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
    (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
    (e.ACTION_REJECTED = "ACTION_REJECTED");
})(Fr || (Fr = {}));
const tl = "0123456789abcdef";
let Bt = class It {
  constructor(t) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: t,
      writable: !1,
    });
  }
  _log(t, r) {
    const i = t.toLowerCase();
    io[i] == null &&
      this.throwArgumentError("invalid log level name", "logLevel", t),
      !(Zu > io[i]) && console.log.apply(console, r);
  }
  debug(...t) {
    this._log(It.levels.DEBUG, t);
  }
  info(...t) {
    this._log(It.levels.INFO, t);
  }
  warn(...t) {
    this._log(It.levels.WARNING, t);
  }
  makeError(t, r, i) {
    if (Xu) return this.makeError("censored error", r, {});
    r || (r = It.errors.UNKNOWN_ERROR), i || (i = {});
    const n = [];
    Object.keys(i).forEach((l) => {
      const f = i[l];
      try {
        if (f instanceof Uint8Array) {
          let g = "";
          for (let w = 0; w < f.length; w++)
            (g += tl[f[w] >> 4]), (g += tl[f[w] & 15]);
          n.push(l + "=Uint8Array(0x" + g + ")");
        } else n.push(l + "=" + JSON.stringify(f));
      } catch (g) {
        n.push(l + "=" + JSON.stringify(i[l].toString()));
      }
    }),
      n.push(`code=${r}`),
      n.push(`version=${this.version}`);
    const s = t;
    let o = "";
    switch (r) {
      case Fr.NUMERIC_FAULT: {
        o = "NUMERIC_FAULT";
        const l = t;
        switch (l) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            o += "-" + l;
            break;
          case "negative-power":
          case "negative-width":
            o += "-unsupported";
            break;
          case "unbound-bitwise-result":
            o += "-unbound-result";
            break;
        }
        break;
      }
      case Fr.CALL_EXCEPTION:
      case Fr.INSUFFICIENT_FUNDS:
      case Fr.MISSING_NEW:
      case Fr.NONCE_EXPIRED:
      case Fr.REPLACEMENT_UNDERPRICED:
      case Fr.TRANSACTION_REPLACED:
      case Fr.UNPREDICTABLE_GAS_LIMIT:
        o = r;
        break;
    }
    o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"),
      n.length && (t += " (" + n.join(", ") + ")");
    const c = new Error(t);
    return (
      (c.reason = s),
      (c.code = r),
      Object.keys(i).forEach(function (l) {
        c[l] = i[l];
      }),
      c
    );
  }
  throwError(t, r, i) {
    throw this.makeError(t, r, i);
  }
  throwArgumentError(t, r, i) {
    return this.throwError(t, It.errors.INVALID_ARGUMENT, {
      argument: r,
      value: i,
    });
  }
  assert(t, r, i, n) {
    t || this.throwError(r, i, n);
  }
  assertArgument(t, r, i, n) {
    t || this.throwArgumentError(r, i, n);
  }
  checkNormalize(t) {
    el &&
      this.throwError(
        "platform missing String.prototype.normalize",
        It.errors.UNSUPPORTED_OPERATION,
        { operation: "String.prototype.normalize", form: el }
      );
  }
  checkSafeUint53(t, r) {
    typeof t == "number" &&
      (r == null && (r = "value not safe"),
      (t < 0 || t >= 9007199254740991) &&
        this.throwError(r, It.errors.NUMERIC_FAULT, {
          operation: "checkSafeInteger",
          fault: "out-of-safe-range",
          value: t,
        }),
      t % 1 &&
        this.throwError(r, It.errors.NUMERIC_FAULT, {
          operation: "checkSafeInteger",
          fault: "non-integer",
          value: t,
        }));
  }
  checkArgumentCount(t, r, i) {
    i ? (i = ": " + i) : (i = ""),
      t < r &&
        this.throwError("missing argument" + i, It.errors.MISSING_ARGUMENT, {
          count: t,
          expectedCount: r,
        }),
      t > r &&
        this.throwError(
          "too many arguments" + i,
          It.errors.UNEXPECTED_ARGUMENT,
          { count: t, expectedCount: r }
        );
  }
  checkNew(t, r) {
    (t === Object || t == null) &&
      this.throwError("missing new", It.errors.MISSING_NEW, { name: r.name });
  }
  checkAbstract(t, r) {
    t === r
      ? this.throwError(
          "cannot instantiate abstract class " +
            JSON.stringify(r.name) +
            " directly; use a sub-class",
          It.errors.UNSUPPORTED_OPERATION,
          { name: t.name, operation: "new" }
        )
      : (t === Object || t == null) &&
        this.throwError("missing new", It.errors.MISSING_NEW, { name: r.name });
  }
  static globalLogger() {
    return aa || (aa = new It(pv)), aa;
  }
  static setCensorship(t, r) {
    if (
      (!t &&
        r &&
        this.globalLogger().throwError(
          "cannot permanently disable censorship",
          It.errors.UNSUPPORTED_OPERATION,
          { operation: "setCensorship" }
        ),
      Ju)
    ) {
      if (!t) return;
      this.globalLogger().throwError(
        "error censorship permanent",
        It.errors.UNSUPPORTED_OPERATION,
        { operation: "setCensorship" }
      );
    }
    (Xu = !!t), (Ju = !!r);
  }
  static setLogLevel(t) {
    const r = io[t.toLowerCase()];
    if (r == null) {
      It.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Zu = r;
  }
  static from(t) {
    return new It(t);
  }
};
(Bt.errors = Fr), (Bt.levels = Wa);
const yv = "bytes/5.7.0",
  vt = new Bt(yv);
function jf(e) {
  return !!e.toHexString;
}
function Sn(e) {
  return (
    e.slice ||
      (e.slice = function () {
        const t = Array.prototype.slice.call(arguments);
        return Sn(new Uint8Array(Array.prototype.slice.apply(e, t)));
      }),
    e
  );
}
function wv(e) {
  return (fr(e) && !(e.length % 2)) || Ln(e);
}
function rl(e) {
  return typeof e == "number" && e == e && e % 1 === 0;
}
function Ln(e) {
  if (e == null) return !1;
  if (e.constructor === Uint8Array) return !0;
  if (typeof e == "string" || !rl(e.length) || e.length < 0) return !1;
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    if (!rl(r) || r < 0 || r >= 256) return !1;
  }
  return !0;
}
function yt(e, t) {
  if ((t || (t = {}), typeof e == "number")) {
    vt.checkSafeUint53(e, "invalid arrayify value");
    const r = [];
    for (; e; ) r.unshift(e & 255), (e = parseInt(String(e / 256)));
    return r.length === 0 && r.push(0), Sn(new Uint8Array(r));
  }
  if (
    (t.allowMissingPrefix &&
      typeof e == "string" &&
      e.substring(0, 2) !== "0x" &&
      (e = "0x" + e),
    jf(e) && (e = e.toHexString()),
    fr(e))
  ) {
    let r = e.substring(2);
    r.length % 2 &&
      (t.hexPad === "left"
        ? (r = "0" + r)
        : t.hexPad === "right"
        ? (r += "0")
        : vt.throwArgumentError("hex data is odd-length", "value", e));
    const i = [];
    for (let n = 0; n < r.length; n += 2)
      i.push(parseInt(r.substring(n, n + 2), 16));
    return Sn(new Uint8Array(i));
  }
  return Ln(e)
    ? Sn(new Uint8Array(e))
    : vt.throwArgumentError("invalid arrayify value", "value", e);
}
function vv(e) {
  const t = e.map((n) => yt(n)),
    r = t.reduce((n, s) => n + s.length, 0),
    i = new Uint8Array(r);
  return t.reduce((n, s) => (i.set(s, n), n + s.length), 0), Sn(i);
}
function bv(e, t) {
  (e = yt(e)),
    e.length > t &&
      vt.throwArgumentError("value out of range", "value", arguments[0]);
  const r = new Uint8Array(t);
  return r.set(e, t - e.length), Sn(r);
}
function fr(e, t) {
  return !(
    typeof e != "string" ||
    !e.match(/^0x[0-9A-Fa-f]*$/) ||
    (t && e.length !== 2 + 2 * t)
  );
}
const ca = "0123456789abcdef";
function Ht(e, t) {
  if ((t || (t = {}), typeof e == "number")) {
    vt.checkSafeUint53(e, "invalid hexlify value");
    let r = "";
    for (; e; ) (r = ca[e & 15] + r), (e = Math.floor(e / 16));
    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
  }
  if (typeof e == "bigint")
    return (e = e.toString(16)), e.length % 2 ? "0x0" + e : "0x" + e;
  if (
    (t.allowMissingPrefix &&
      typeof e == "string" &&
      e.substring(0, 2) !== "0x" &&
      (e = "0x" + e),
    jf(e))
  )
    return e.toHexString();
  if (fr(e))
    return (
      e.length % 2 &&
        (t.hexPad === "left"
          ? (e = "0x0" + e.substring(2))
          : t.hexPad === "right"
          ? (e += "0")
          : vt.throwArgumentError("hex data is odd-length", "value", e)),
      e.toLowerCase()
    );
  if (Ln(e)) {
    let r = "0x";
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      r += ca[(n & 240) >> 4] + ca[n & 15];
    }
    return r;
  }
  return vt.throwArgumentError("invalid hexlify value", "value", e);
}
function _v(e) {
  if (typeof e != "string") e = Ht(e);
  else if (!fr(e) || e.length % 2) return null;
  return (e.length - 2) / 2;
}
function il(e, t, r) {
  return (
    typeof e != "string"
      ? (e = Ht(e))
      : (!fr(e) || e.length % 2) &&
        vt.throwArgumentError("invalid hexData", "value", e),
    (t = 2 + 2 * t),
    r != null ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
  );
}
function ui(e, t) {
  for (
    typeof e != "string"
      ? (e = Ht(e))
      : fr(e) || vt.throwArgumentError("invalid hex string", "value", e),
      e.length > 2 * t + 2 &&
        vt.throwArgumentError("value out of range", "value", arguments[1]);
    e.length < 2 * t + 2;

  )
    e = "0x0" + e.substring(2);
  return e;
}
function zf(e) {
  const t = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x",
  };
  if (wv(e)) {
    let r = yt(e);
    r.length === 64
      ? ((t.v = 27 + (r[32] >> 7)),
        (r[32] &= 127),
        (t.r = Ht(r.slice(0, 32))),
        (t.s = Ht(r.slice(32, 64))))
      : r.length === 65
      ? ((t.r = Ht(r.slice(0, 32))), (t.s = Ht(r.slice(32, 64))), (t.v = r[64]))
      : vt.throwArgumentError("invalid signature string", "signature", e),
      t.v < 27 &&
        (t.v === 0 || t.v === 1
          ? (t.v += 27)
          : vt.throwArgumentError("signature invalid v byte", "signature", e)),
      (t.recoveryParam = 1 - (t.v % 2)),
      t.recoveryParam && (r[32] |= 128),
      (t._vs = Ht(r.slice(32, 64)));
  } else {
    if (
      ((t.r = e.r),
      (t.s = e.s),
      (t.v = e.v),
      (t.recoveryParam = e.recoveryParam),
      (t._vs = e._vs),
      t._vs != null)
    ) {
      const n = bv(yt(t._vs), 32);
      t._vs = Ht(n);
      const s = n[0] >= 128 ? 1 : 0;
      t.recoveryParam == null
        ? (t.recoveryParam = s)
        : t.recoveryParam !== s &&
          vt.throwArgumentError(
            "signature recoveryParam mismatch _vs",
            "signature",
            e
          ),
        (n[0] &= 127);
      const o = Ht(n);
      t.s == null
        ? (t.s = o)
        : t.s !== o &&
          vt.throwArgumentError("signature v mismatch _vs", "signature", e);
    }
    if (t.recoveryParam == null)
      t.v == null
        ? vt.throwArgumentError(
            "signature missing v and recoveryParam",
            "signature",
            e
          )
        : t.v === 0 || t.v === 1
        ? (t.recoveryParam = t.v)
        : (t.recoveryParam = 1 - (t.v % 2));
    else if (t.v == null) t.v = 27 + t.recoveryParam;
    else {
      const n = t.v === 0 || t.v === 1 ? t.v : 1 - (t.v % 2);
      t.recoveryParam !== n &&
        vt.throwArgumentError(
          "signature recoveryParam mismatch v",
          "signature",
          e
        );
    }
    t.r == null || !fr(t.r)
      ? vt.throwArgumentError("signature missing or invalid r", "signature", e)
      : (t.r = ui(t.r, 32)),
      t.s == null || !fr(t.s)
        ? vt.throwArgumentError(
            "signature missing or invalid s",
            "signature",
            e
          )
        : (t.s = ui(t.s, 32));
    const r = yt(t.s);
    r[0] >= 128 &&
      vt.throwArgumentError("signature s out of range", "signature", e),
      t.recoveryParam && (r[0] |= 128);
    const i = Ht(r);
    t._vs &&
      (fr(t._vs) ||
        vt.throwArgumentError("signature invalid _vs", "signature", e),
      (t._vs = ui(t._vs, 32))),
      t._vs == null
        ? (t._vs = i)
        : t._vs !== i &&
          vt.throwArgumentError(
            "signature _vs mismatch v and s",
            "signature",
            e
          );
  }
  return (
    (t.yParityAndS = t._vs), (t.compact = t.r + t.yParityAndS.substring(2)), t
  );
}
function Lc(e) {
  return "0x" + gv.keccak_256(yt(e));
}
var Kf = { exports: {} },
  Ev = {},
  Av = Object.freeze({ __proto__: null, default: Ev }),
  Sv = dv(Av);
(function (e) {
  (function (t, r) {
    function i(a, u) {
      if (!a) throw new Error(u || "Assertion failed");
    }
    function n(a, u) {
      a.super_ = u;
      var h = function () {};
      (h.prototype = u.prototype),
        (a.prototype = new h()),
        (a.prototype.constructor = a);
    }
    function s(a, u, h) {
      if (s.isBN(a)) return a;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        a !== null &&
          ((u === "le" || u === "be") && ((h = u), (u = 10)),
          this._init(a || 0, u || 10, h || "be"));
    }
    typeof t == "object" ? (t.exports = s) : (r.BN = s),
      (s.BN = s),
      (s.wordSize = 26);
    var o;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (o = window.Buffer)
        : (o = Sv.Buffer);
    } catch (a) {}
    (s.isBN = function (a) {
      return a instanceof s
        ? !0
        : a !== null &&
            typeof a == "object" &&
            a.constructor.wordSize === s.wordSize &&
            Array.isArray(a.words);
    }),
      (s.max = function (a, u) {
        return a.cmp(u) > 0 ? a : u;
      }),
      (s.min = function (a, u) {
        return a.cmp(u) < 0 ? a : u;
      }),
      (s.prototype._init = function (a, u, h) {
        if (typeof a == "number") return this._initNumber(a, u, h);
        if (typeof a == "object") return this._initArray(a, u, h);
        u === "hex" && (u = 16),
          i(u === (u | 0) && u >= 2 && u <= 36),
          (a = a.toString().replace(/\s+/g, ""));
        var v = 0;
        a[0] === "-" && (v++, (this.negative = 1)),
          v < a.length &&
            (u === 16
              ? this._parseHex(a, v, h)
              : (this._parseBase(a, u, v),
                h === "le" && this._initArray(this.toArray(), u, h)));
      }),
      (s.prototype._initNumber = function (a, u, h) {
        a < 0 && ((this.negative = 1), (a = -a)),
          a < 67108864
            ? ((this.words = [a & 67108863]), (this.length = 1))
            : a < 4503599627370496
            ? ((this.words = [a & 67108863, (a / 67108864) & 67108863]),
              (this.length = 2))
            : (i(a < 9007199254740992),
              (this.words = [a & 67108863, (a / 67108864) & 67108863, 1]),
              (this.length = 3)),
          h === "le" && this._initArray(this.toArray(), u, h);
      }),
      (s.prototype._initArray = function (a, u, h) {
        if ((i(typeof a.length == "number"), a.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(a.length / 3)),
          (this.words = new Array(this.length));
        for (var v = 0; v < this.length; v++) this.words[v] = 0;
        var _,
          E,
          x = 0;
        if (h === "be")
          for (v = a.length - 1, _ = 0; v >= 0; v -= 3)
            (E = a[v] | (a[v - 1] << 8) | (a[v - 2] << 16)),
              (this.words[_] |= (E << x) & 67108863),
              (this.words[_ + 1] = (E >>> (26 - x)) & 67108863),
              (x += 24),
              x >= 26 && ((x -= 26), _++);
        else if (h === "le")
          for (v = 0, _ = 0; v < a.length; v += 3)
            (E = a[v] | (a[v + 1] << 8) | (a[v + 2] << 16)),
              (this.words[_] |= (E << x) & 67108863),
              (this.words[_ + 1] = (E >>> (26 - x)) & 67108863),
              (x += 24),
              x >= 26 && ((x -= 26), _++);
        return this._strip();
      });
    function c(a, u) {
      var h = a.charCodeAt(u);
      if (h >= 48 && h <= 57) return h - 48;
      if (h >= 65 && h <= 70) return h - 55;
      if (h >= 97 && h <= 102) return h - 87;
      i(!1, "Invalid character in " + a);
    }
    function l(a, u, h) {
      var v = c(a, h);
      return h - 1 >= u && (v |= c(a, h - 1) << 4), v;
    }
    s.prototype._parseHex = function (a, u, h) {
      (this.length = Math.ceil((a.length - u) / 6)),
        (this.words = new Array(this.length));
      for (var v = 0; v < this.length; v++) this.words[v] = 0;
      var _ = 0,
        E = 0,
        x;
      if (h === "be")
        for (v = a.length - 1; v >= u; v -= 2)
          (x = l(a, u, v) << _),
            (this.words[E] |= x & 67108863),
            _ >= 18
              ? ((_ -= 18), (E += 1), (this.words[E] |= x >>> 26))
              : (_ += 8);
      else {
        var S = a.length - u;
        for (v = S % 2 === 0 ? u + 1 : u; v < a.length; v += 2)
          (x = l(a, u, v) << _),
            (this.words[E] |= x & 67108863),
            _ >= 18
              ? ((_ -= 18), (E += 1), (this.words[E] |= x >>> 26))
              : (_ += 8);
      }
      this._strip();
    };
    function f(a, u, h, v) {
      for (var _ = 0, E = 0, x = Math.min(a.length, h), S = u; S < x; S++) {
        var d = a.charCodeAt(S) - 48;
        (_ *= v),
          d >= 49 ? (E = d - 49 + 10) : d >= 17 ? (E = d - 17 + 10) : (E = d),
          i(d >= 0 && E < v, "Invalid character"),
          (_ += E);
      }
      return _;
    }
    (s.prototype._parseBase = function (a, u, h) {
      (this.words = [0]), (this.length = 1);
      for (var v = 0, _ = 1; _ <= 67108863; _ *= u) v++;
      v--, (_ = (_ / u) | 0);
      for (
        var E = a.length - h,
          x = E % v,
          S = Math.min(E, E - x) + h,
          d = 0,
          T = h;
        T < S;
        T += v
      )
        (d = f(a, T, T + v, u)),
          this.imuln(_),
          this.words[0] + d < 67108864 ? (this.words[0] += d) : this._iaddn(d);
      if (x !== 0) {
        var Y = 1;
        for (d = f(a, T, a.length, u), T = 0; T < x; T++) Y *= u;
        this.imuln(Y),
          this.words[0] + d < 67108864 ? (this.words[0] += d) : this._iaddn(d);
      }
      this._strip();
    }),
      (s.prototype.copy = function (a) {
        a.words = new Array(this.length);
        for (var u = 0; u < this.length; u++) a.words[u] = this.words[u];
        (a.length = this.length),
          (a.negative = this.negative),
          (a.red = this.red);
      });
    function g(a, u) {
      (a.words = u.words),
        (a.length = u.length),
        (a.negative = u.negative),
        (a.red = u.red);
    }
    if (
      ((s.prototype._move = function (a) {
        g(a, this);
      }),
      (s.prototype.clone = function () {
        var a = new s(null);
        return this.copy(a), a;
      }),
      (s.prototype._expand = function (a) {
        for (; this.length < a; ) this.words[this.length++] = 0;
        return this;
      }),
      (s.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (s.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        s.prototype[Symbol.for("nodejs.util.inspect.custom")] = w;
      } catch (a) {
        s.prototype.inspect = w;
      }
    else s.prototype.inspect = w;
    function w() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var D = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      A = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      M = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (s.prototype.toString = function (a, u) {
      (a = a || 10), (u = u | 0 || 1);
      var h;
      if (a === 16 || a === "hex") {
        h = "";
        for (var v = 0, _ = 0, E = 0; E < this.length; E++) {
          var x = this.words[E],
            S = (((x << v) | _) & 16777215).toString(16);
          (_ = (x >>> (24 - v)) & 16777215),
            (v += 2),
            v >= 26 && ((v -= 26), E--),
            _ !== 0 || E !== this.length - 1
              ? (h = D[6 - S.length] + S + h)
              : (h = S + h);
        }
        for (_ !== 0 && (h = _.toString(16) + h); h.length % u !== 0; )
          h = "0" + h;
        return this.negative !== 0 && (h = "-" + h), h;
      }
      if (a === (a | 0) && a >= 2 && a <= 36) {
        var d = A[a],
          T = M[a];
        h = "";
        var Y = this.clone();
        for (Y.negative = 0; !Y.isZero(); ) {
          var X = Y.modrn(T).toString(a);
          (Y = Y.idivn(T)),
            Y.isZero() ? (h = X + h) : (h = D[d - X.length] + X + h);
        }
        for (this.isZero() && (h = "0" + h); h.length % u !== 0; ) h = "0" + h;
        return this.negative !== 0 && (h = "-" + h), h;
      }
      i(!1, "Base should be between 2 and 36");
    }),
      (s.prototype.toNumber = function () {
        var a = this.words[0];
        return (
          this.length === 2
            ? (a += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (a += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              i(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -a : a
        );
      }),
      (s.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      o &&
        (s.prototype.toBuffer = function (a, u) {
          return this.toArrayLike(o, a, u);
        }),
      (s.prototype.toArray = function (a, u) {
        return this.toArrayLike(Array, a, u);
      });
    var K = function (a, u) {
      return a.allocUnsafe ? a.allocUnsafe(u) : new a(u);
    };
    (s.prototype.toArrayLike = function (a, u, h) {
      this._strip();
      var v = this.byteLength(),
        _ = h || Math.max(1, v);
      i(v <= _, "byte array longer than desired length"),
        i(_ > 0, "Requested array length <= 0");
      var E = K(a, _),
        x = u === "le" ? "LE" : "BE";
      return this["_toArrayLike" + x](E, v), E;
    }),
      (s.prototype._toArrayLikeLE = function (a, u) {
        for (var h = 0, v = 0, _ = 0, E = 0; _ < this.length; _++) {
          var x = (this.words[_] << E) | v;
          (a[h++] = x & 255),
            h < a.length && (a[h++] = (x >> 8) & 255),
            h < a.length && (a[h++] = (x >> 16) & 255),
            E === 6
              ? (h < a.length && (a[h++] = (x >> 24) & 255), (v = 0), (E = 0))
              : ((v = x >>> 24), (E += 2));
        }
        if (h < a.length) for (a[h++] = v; h < a.length; ) a[h++] = 0;
      }),
      (s.prototype._toArrayLikeBE = function (a, u) {
        for (var h = a.length - 1, v = 0, _ = 0, E = 0; _ < this.length; _++) {
          var x = (this.words[_] << E) | v;
          (a[h--] = x & 255),
            h >= 0 && (a[h--] = (x >> 8) & 255),
            h >= 0 && (a[h--] = (x >> 16) & 255),
            E === 6
              ? (h >= 0 && (a[h--] = (x >> 24) & 255), (v = 0), (E = 0))
              : ((v = x >>> 24), (E += 2));
        }
        if (h >= 0) for (a[h--] = v; h >= 0; ) a[h--] = 0;
      }),
      Math.clz32
        ? (s.prototype._countBits = function (a) {
            return 32 - Math.clz32(a);
          })
        : (s.prototype._countBits = function (a) {
            var u = a,
              h = 0;
            return (
              u >= 4096 && ((h += 13), (u >>>= 13)),
              u >= 64 && ((h += 7), (u >>>= 7)),
              u >= 8 && ((h += 4), (u >>>= 4)),
              u >= 2 && ((h += 2), (u >>>= 2)),
              h + u
            );
          }),
      (s.prototype._zeroBits = function (a) {
        if (a === 0) return 26;
        var u = a,
          h = 0;
        return (
          u & 8191 || ((h += 13), (u >>>= 13)),
          u & 127 || ((h += 7), (u >>>= 7)),
          u & 15 || ((h += 4), (u >>>= 4)),
          u & 3 || ((h += 2), (u >>>= 2)),
          u & 1 || h++,
          h
        );
      }),
      (s.prototype.bitLength = function () {
        var a = this.words[this.length - 1],
          u = this._countBits(a);
        return (this.length - 1) * 26 + u;
      });
    function q(a) {
      for (var u = new Array(a.bitLength()), h = 0; h < u.length; h++) {
        var v = (h / 26) | 0,
          _ = h % 26;
        u[h] = (a.words[v] >>> _) & 1;
      }
      return u;
    }
    (s.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var a = 0, u = 0; u < this.length; u++) {
        var h = this._zeroBits(this.words[u]);
        if (((a += h), h !== 26)) break;
      }
      return a;
    }),
      (s.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (s.prototype.toTwos = function (a) {
        return this.negative !== 0
          ? this.abs().inotn(a).iaddn(1)
          : this.clone();
      }),
      (s.prototype.fromTwos = function (a) {
        return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone();
      }),
      (s.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (s.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (s.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (s.prototype.iuor = function (a) {
        for (; this.length < a.length; ) this.words[this.length++] = 0;
        for (var u = 0; u < a.length; u++)
          this.words[u] = this.words[u] | a.words[u];
        return this._strip();
      }),
      (s.prototype.ior = function (a) {
        return i((this.negative | a.negative) === 0), this.iuor(a);
      }),
      (s.prototype.or = function (a) {
        return this.length > a.length
          ? this.clone().ior(a)
          : a.clone().ior(this);
      }),
      (s.prototype.uor = function (a) {
        return this.length > a.length
          ? this.clone().iuor(a)
          : a.clone().iuor(this);
      }),
      (s.prototype.iuand = function (a) {
        var u;
        this.length > a.length ? (u = a) : (u = this);
        for (var h = 0; h < u.length; h++)
          this.words[h] = this.words[h] & a.words[h];
        return (this.length = u.length), this._strip();
      }),
      (s.prototype.iand = function (a) {
        return i((this.negative | a.negative) === 0), this.iuand(a);
      }),
      (s.prototype.and = function (a) {
        return this.length > a.length
          ? this.clone().iand(a)
          : a.clone().iand(this);
      }),
      (s.prototype.uand = function (a) {
        return this.length > a.length
          ? this.clone().iuand(a)
          : a.clone().iuand(this);
      }),
      (s.prototype.iuxor = function (a) {
        var u, h;
        this.length > a.length ? ((u = this), (h = a)) : ((u = a), (h = this));
        for (var v = 0; v < h.length; v++)
          this.words[v] = u.words[v] ^ h.words[v];
        if (this !== u) for (; v < u.length; v++) this.words[v] = u.words[v];
        return (this.length = u.length), this._strip();
      }),
      (s.prototype.ixor = function (a) {
        return i((this.negative | a.negative) === 0), this.iuxor(a);
      }),
      (s.prototype.xor = function (a) {
        return this.length > a.length
          ? this.clone().ixor(a)
          : a.clone().ixor(this);
      }),
      (s.prototype.uxor = function (a) {
        return this.length > a.length
          ? this.clone().iuxor(a)
          : a.clone().iuxor(this);
      }),
      (s.prototype.inotn = function (a) {
        i(typeof a == "number" && a >= 0);
        var u = Math.ceil(a / 26) | 0,
          h = a % 26;
        this._expand(u), h > 0 && u--;
        for (var v = 0; v < u; v++) this.words[v] = ~this.words[v] & 67108863;
        return (
          h > 0 && (this.words[v] = ~this.words[v] & (67108863 >> (26 - h))),
          this._strip()
        );
      }),
      (s.prototype.notn = function (a) {
        return this.clone().inotn(a);
      }),
      (s.prototype.setn = function (a, u) {
        i(typeof a == "number" && a >= 0);
        var h = (a / 26) | 0,
          v = a % 26;
        return (
          this._expand(h + 1),
          u
            ? (this.words[h] = this.words[h] | (1 << v))
            : (this.words[h] = this.words[h] & ~(1 << v)),
          this._strip()
        );
      }),
      (s.prototype.iadd = function (a) {
        var u;
        if (this.negative !== 0 && a.negative === 0)
          return (
            (this.negative = 0),
            (u = this.isub(a)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && a.negative !== 0)
          return (
            (a.negative = 0),
            (u = this.isub(a)),
            (a.negative = 1),
            u._normSign()
          );
        var h, v;
        this.length > a.length ? ((h = this), (v = a)) : ((h = a), (v = this));
        for (var _ = 0, E = 0; E < v.length; E++)
          (u = (h.words[E] | 0) + (v.words[E] | 0) + _),
            (this.words[E] = u & 67108863),
            (_ = u >>> 26);
        for (; _ !== 0 && E < h.length; E++)
          (u = (h.words[E] | 0) + _),
            (this.words[E] = u & 67108863),
            (_ = u >>> 26);
        if (((this.length = h.length), _ !== 0))
          (this.words[this.length] = _), this.length++;
        else if (h !== this)
          for (; E < h.length; E++) this.words[E] = h.words[E];
        return this;
      }),
      (s.prototype.add = function (a) {
        var u;
        return a.negative !== 0 && this.negative === 0
          ? ((a.negative = 0), (u = this.sub(a)), (a.negative ^= 1), u)
          : a.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (u = a.sub(this)), (this.negative = 1), u)
          : this.length > a.length
          ? this.clone().iadd(a)
          : a.clone().iadd(this);
      }),
      (s.prototype.isub = function (a) {
        if (a.negative !== 0) {
          a.negative = 0;
          var u = this.iadd(a);
          return (a.negative = 1), u._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(a),
            (this.negative = 1),
            this._normSign()
          );
        var h = this.cmp(a);
        if (h === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var v, _;
        h > 0 ? ((v = this), (_ = a)) : ((v = a), (_ = this));
        for (var E = 0, x = 0; x < _.length; x++)
          (u = (v.words[x] | 0) - (_.words[x] | 0) + E),
            (E = u >> 26),
            (this.words[x] = u & 67108863);
        for (; E !== 0 && x < v.length; x++)
          (u = (v.words[x] | 0) + E),
            (E = u >> 26),
            (this.words[x] = u & 67108863);
        if (E === 0 && x < v.length && v !== this)
          for (; x < v.length; x++) this.words[x] = v.words[x];
        return (
          (this.length = Math.max(this.length, x)),
          v !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (s.prototype.sub = function (a) {
        return this.clone().isub(a);
      });
    function Q(a, u, h) {
      h.negative = u.negative ^ a.negative;
      var v = (a.length + u.length) | 0;
      (h.length = v), (v = (v - 1) | 0);
      var _ = a.words[0] | 0,
        E = u.words[0] | 0,
        x = _ * E,
        S = x & 67108863,
        d = (x / 67108864) | 0;
      h.words[0] = S;
      for (var T = 1; T < v; T++) {
        for (
          var Y = d >>> 26,
            X = d & 67108863,
            b = Math.min(T, u.length - 1),
            G = Math.max(0, T - a.length + 1);
          G <= b;
          G++
        ) {
          var O = (T - G) | 0;
          (_ = a.words[O] | 0),
            (E = u.words[G] | 0),
            (x = _ * E + X),
            (Y += (x / 67108864) | 0),
            (X = x & 67108863);
        }
        (h.words[T] = X | 0), (d = Y | 0);
      }
      return d !== 0 ? (h.words[T] = d | 0) : h.length--, h._strip();
    }
    var N = function (a, u, h) {
      var v = a.words,
        _ = u.words,
        E = h.words,
        x = 0,
        S,
        d,
        T,
        Y = v[0] | 0,
        X = Y & 8191,
        b = Y >>> 13,
        G = v[1] | 0,
        O = G & 8191,
        F = G >>> 13,
        z = v[2] | 0,
        p = z & 8191,
        R = z >>> 13,
        J = v[3] | 0,
        Z = J & 8191,
        ee = J >>> 13,
        ne = v[4] | 0,
        ge = ne & 8191,
        ve = ne >>> 13,
        Ze = v[5] | 0,
        Ie = Ze & 8191,
        me = Ze >>> 13,
        Fe = v[6] | 0,
        de = Fe & 8191,
        he = Fe >>> 13,
        xe = v[7] | 0,
        ue = xe & 8191,
        ae = xe >>> 13,
        Ee = v[8] | 0,
        fe = Ee & 8191,
        pe = Ee >>> 13,
        Ae = v[9] | 0,
        ye = Ae & 8191,
        we = Ae >>> 13,
        je = _[0] | 0,
        _e = je & 8191,
        be = je >>> 13,
        At = _[1] | 0,
        Ke = At & 8191,
        We = At >>> 13,
        wt = _[2] | 0,
        Qe = wt & 8191,
        Je = wt >>> 13,
        mr = _[3] | 0,
        Ce = mr & 8191,
        De = mr >>> 13,
        et = _[4] | 0,
        Te = et & 8191,
        Me = et >>> 13,
        Xe = _[5] | 0,
        Oe = Xe & 8191,
        Re = Xe >>> 13,
        ct = _[6] | 0,
        Pe = ct & 8191,
        Be = ct >>> 13,
        st = _[7] | 0,
        Ne = st & 8191,
        Se = st >>> 13,
        ut = _[8] | 0,
        Le = ut & 8191,
        ot = ut >>> 13,
        gi = _[9] | 0,
        at = gi & 8191,
        Ge = gi >>> 13;
      (h.negative = a.negative ^ u.negative),
        (h.length = 19),
        (S = Math.imul(X, _e)),
        (d = Math.imul(X, be)),
        (d = (d + Math.imul(b, _e)) | 0),
        (T = Math.imul(b, be));
      var Kr = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Kr >>> 26)) | 0),
        (Kr &= 67108863),
        (S = Math.imul(O, _e)),
        (d = Math.imul(O, be)),
        (d = (d + Math.imul(F, _e)) | 0),
        (T = Math.imul(F, be)),
        (S = (S + Math.imul(X, Ke)) | 0),
        (d = (d + Math.imul(X, We)) | 0),
        (d = (d + Math.imul(b, Ke)) | 0),
        (T = (T + Math.imul(b, We)) | 0);
      var Vr = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Vr >>> 26)) | 0),
        (Vr &= 67108863),
        (S = Math.imul(p, _e)),
        (d = Math.imul(p, be)),
        (d = (d + Math.imul(R, _e)) | 0),
        (T = Math.imul(R, be)),
        (S = (S + Math.imul(O, Ke)) | 0),
        (d = (d + Math.imul(O, We)) | 0),
        (d = (d + Math.imul(F, Ke)) | 0),
        (T = (T + Math.imul(F, We)) | 0),
        (S = (S + Math.imul(X, Qe)) | 0),
        (d = (d + Math.imul(X, Je)) | 0),
        (d = (d + Math.imul(b, Qe)) | 0),
        (T = (T + Math.imul(b, Je)) | 0);
      var Hr = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Hr >>> 26)) | 0),
        (Hr &= 67108863),
        (S = Math.imul(Z, _e)),
        (d = Math.imul(Z, be)),
        (d = (d + Math.imul(ee, _e)) | 0),
        (T = Math.imul(ee, be)),
        (S = (S + Math.imul(p, Ke)) | 0),
        (d = (d + Math.imul(p, We)) | 0),
        (d = (d + Math.imul(R, Ke)) | 0),
        (T = (T + Math.imul(R, We)) | 0),
        (S = (S + Math.imul(O, Qe)) | 0),
        (d = (d + Math.imul(O, Je)) | 0),
        (d = (d + Math.imul(F, Qe)) | 0),
        (T = (T + Math.imul(F, Je)) | 0),
        (S = (S + Math.imul(X, Ce)) | 0),
        (d = (d + Math.imul(X, De)) | 0),
        (d = (d + Math.imul(b, Ce)) | 0),
        (T = (T + Math.imul(b, De)) | 0);
      var Gr = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Gr >>> 26)) | 0),
        (Gr &= 67108863),
        (S = Math.imul(ge, _e)),
        (d = Math.imul(ge, be)),
        (d = (d + Math.imul(ve, _e)) | 0),
        (T = Math.imul(ve, be)),
        (S = (S + Math.imul(Z, Ke)) | 0),
        (d = (d + Math.imul(Z, We)) | 0),
        (d = (d + Math.imul(ee, Ke)) | 0),
        (T = (T + Math.imul(ee, We)) | 0),
        (S = (S + Math.imul(p, Qe)) | 0),
        (d = (d + Math.imul(p, Je)) | 0),
        (d = (d + Math.imul(R, Qe)) | 0),
        (T = (T + Math.imul(R, Je)) | 0),
        (S = (S + Math.imul(O, Ce)) | 0),
        (d = (d + Math.imul(O, De)) | 0),
        (d = (d + Math.imul(F, Ce)) | 0),
        (T = (T + Math.imul(F, De)) | 0),
        (S = (S + Math.imul(X, Te)) | 0),
        (d = (d + Math.imul(X, Me)) | 0),
        (d = (d + Math.imul(b, Te)) | 0),
        (T = (T + Math.imul(b, Me)) | 0);
      var Wr = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Wr >>> 26)) | 0),
        (Wr &= 67108863),
        (S = Math.imul(Ie, _e)),
        (d = Math.imul(Ie, be)),
        (d = (d + Math.imul(me, _e)) | 0),
        (T = Math.imul(me, be)),
        (S = (S + Math.imul(ge, Ke)) | 0),
        (d = (d + Math.imul(ge, We)) | 0),
        (d = (d + Math.imul(ve, Ke)) | 0),
        (T = (T + Math.imul(ve, We)) | 0),
        (S = (S + Math.imul(Z, Qe)) | 0),
        (d = (d + Math.imul(Z, Je)) | 0),
        (d = (d + Math.imul(ee, Qe)) | 0),
        (T = (T + Math.imul(ee, Je)) | 0),
        (S = (S + Math.imul(p, Ce)) | 0),
        (d = (d + Math.imul(p, De)) | 0),
        (d = (d + Math.imul(R, Ce)) | 0),
        (T = (T + Math.imul(R, De)) | 0),
        (S = (S + Math.imul(O, Te)) | 0),
        (d = (d + Math.imul(O, Me)) | 0),
        (d = (d + Math.imul(F, Te)) | 0),
        (T = (T + Math.imul(F, Me)) | 0),
        (S = (S + Math.imul(X, Oe)) | 0),
        (d = (d + Math.imul(X, Re)) | 0),
        (d = (d + Math.imul(b, Oe)) | 0),
        (T = (T + Math.imul(b, Re)) | 0);
      var $t = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + ($t >>> 26)) | 0),
        ($t &= 67108863),
        (S = Math.imul(de, _e)),
        (d = Math.imul(de, be)),
        (d = (d + Math.imul(he, _e)) | 0),
        (T = Math.imul(he, be)),
        (S = (S + Math.imul(Ie, Ke)) | 0),
        (d = (d + Math.imul(Ie, We)) | 0),
        (d = (d + Math.imul(me, Ke)) | 0),
        (T = (T + Math.imul(me, We)) | 0),
        (S = (S + Math.imul(ge, Qe)) | 0),
        (d = (d + Math.imul(ge, Je)) | 0),
        (d = (d + Math.imul(ve, Qe)) | 0),
        (T = (T + Math.imul(ve, Je)) | 0),
        (S = (S + Math.imul(Z, Ce)) | 0),
        (d = (d + Math.imul(Z, De)) | 0),
        (d = (d + Math.imul(ee, Ce)) | 0),
        (T = (T + Math.imul(ee, De)) | 0),
        (S = (S + Math.imul(p, Te)) | 0),
        (d = (d + Math.imul(p, Me)) | 0),
        (d = (d + Math.imul(R, Te)) | 0),
        (T = (T + Math.imul(R, Me)) | 0),
        (S = (S + Math.imul(O, Oe)) | 0),
        (d = (d + Math.imul(O, Re)) | 0),
        (d = (d + Math.imul(F, Oe)) | 0),
        (T = (T + Math.imul(F, Re)) | 0),
        (S = (S + Math.imul(X, Pe)) | 0),
        (d = (d + Math.imul(X, Be)) | 0),
        (d = (d + Math.imul(b, Pe)) | 0),
        (T = (T + Math.imul(b, Be)) | 0);
      var qn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (qn >>> 26)) | 0),
        (qn &= 67108863),
        (S = Math.imul(ue, _e)),
        (d = Math.imul(ue, be)),
        (d = (d + Math.imul(ae, _e)) | 0),
        (T = Math.imul(ae, be)),
        (S = (S + Math.imul(de, Ke)) | 0),
        (d = (d + Math.imul(de, We)) | 0),
        (d = (d + Math.imul(he, Ke)) | 0),
        (T = (T + Math.imul(he, We)) | 0),
        (S = (S + Math.imul(Ie, Qe)) | 0),
        (d = (d + Math.imul(Ie, Je)) | 0),
        (d = (d + Math.imul(me, Qe)) | 0),
        (T = (T + Math.imul(me, Je)) | 0),
        (S = (S + Math.imul(ge, Ce)) | 0),
        (d = (d + Math.imul(ge, De)) | 0),
        (d = (d + Math.imul(ve, Ce)) | 0),
        (T = (T + Math.imul(ve, De)) | 0),
        (S = (S + Math.imul(Z, Te)) | 0),
        (d = (d + Math.imul(Z, Me)) | 0),
        (d = (d + Math.imul(ee, Te)) | 0),
        (T = (T + Math.imul(ee, Me)) | 0),
        (S = (S + Math.imul(p, Oe)) | 0),
        (d = (d + Math.imul(p, Re)) | 0),
        (d = (d + Math.imul(R, Oe)) | 0),
        (T = (T + Math.imul(R, Re)) | 0),
        (S = (S + Math.imul(O, Pe)) | 0),
        (d = (d + Math.imul(O, Be)) | 0),
        (d = (d + Math.imul(F, Pe)) | 0),
        (T = (T + Math.imul(F, Be)) | 0),
        (S = (S + Math.imul(X, Ne)) | 0),
        (d = (d + Math.imul(X, Se)) | 0),
        (d = (d + Math.imul(b, Ne)) | 0),
        (T = (T + Math.imul(b, Se)) | 0);
      var jn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (jn >>> 26)) | 0),
        (jn &= 67108863),
        (S = Math.imul(fe, _e)),
        (d = Math.imul(fe, be)),
        (d = (d + Math.imul(pe, _e)) | 0),
        (T = Math.imul(pe, be)),
        (S = (S + Math.imul(ue, Ke)) | 0),
        (d = (d + Math.imul(ue, We)) | 0),
        (d = (d + Math.imul(ae, Ke)) | 0),
        (T = (T + Math.imul(ae, We)) | 0),
        (S = (S + Math.imul(de, Qe)) | 0),
        (d = (d + Math.imul(de, Je)) | 0),
        (d = (d + Math.imul(he, Qe)) | 0),
        (T = (T + Math.imul(he, Je)) | 0),
        (S = (S + Math.imul(Ie, Ce)) | 0),
        (d = (d + Math.imul(Ie, De)) | 0),
        (d = (d + Math.imul(me, Ce)) | 0),
        (T = (T + Math.imul(me, De)) | 0),
        (S = (S + Math.imul(ge, Te)) | 0),
        (d = (d + Math.imul(ge, Me)) | 0),
        (d = (d + Math.imul(ve, Te)) | 0),
        (T = (T + Math.imul(ve, Me)) | 0),
        (S = (S + Math.imul(Z, Oe)) | 0),
        (d = (d + Math.imul(Z, Re)) | 0),
        (d = (d + Math.imul(ee, Oe)) | 0),
        (T = (T + Math.imul(ee, Re)) | 0),
        (S = (S + Math.imul(p, Pe)) | 0),
        (d = (d + Math.imul(p, Be)) | 0),
        (d = (d + Math.imul(R, Pe)) | 0),
        (T = (T + Math.imul(R, Be)) | 0),
        (S = (S + Math.imul(O, Ne)) | 0),
        (d = (d + Math.imul(O, Se)) | 0),
        (d = (d + Math.imul(F, Ne)) | 0),
        (T = (T + Math.imul(F, Se)) | 0),
        (S = (S + Math.imul(X, Le)) | 0),
        (d = (d + Math.imul(X, ot)) | 0),
        (d = (d + Math.imul(b, Le)) | 0),
        (T = (T + Math.imul(b, ot)) | 0);
      var zn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (zn >>> 26)) | 0),
        (zn &= 67108863),
        (S = Math.imul(ye, _e)),
        (d = Math.imul(ye, be)),
        (d = (d + Math.imul(we, _e)) | 0),
        (T = Math.imul(we, be)),
        (S = (S + Math.imul(fe, Ke)) | 0),
        (d = (d + Math.imul(fe, We)) | 0),
        (d = (d + Math.imul(pe, Ke)) | 0),
        (T = (T + Math.imul(pe, We)) | 0),
        (S = (S + Math.imul(ue, Qe)) | 0),
        (d = (d + Math.imul(ue, Je)) | 0),
        (d = (d + Math.imul(ae, Qe)) | 0),
        (T = (T + Math.imul(ae, Je)) | 0),
        (S = (S + Math.imul(de, Ce)) | 0),
        (d = (d + Math.imul(de, De)) | 0),
        (d = (d + Math.imul(he, Ce)) | 0),
        (T = (T + Math.imul(he, De)) | 0),
        (S = (S + Math.imul(Ie, Te)) | 0),
        (d = (d + Math.imul(Ie, Me)) | 0),
        (d = (d + Math.imul(me, Te)) | 0),
        (T = (T + Math.imul(me, Me)) | 0),
        (S = (S + Math.imul(ge, Oe)) | 0),
        (d = (d + Math.imul(ge, Re)) | 0),
        (d = (d + Math.imul(ve, Oe)) | 0),
        (T = (T + Math.imul(ve, Re)) | 0),
        (S = (S + Math.imul(Z, Pe)) | 0),
        (d = (d + Math.imul(Z, Be)) | 0),
        (d = (d + Math.imul(ee, Pe)) | 0),
        (T = (T + Math.imul(ee, Be)) | 0),
        (S = (S + Math.imul(p, Ne)) | 0),
        (d = (d + Math.imul(p, Se)) | 0),
        (d = (d + Math.imul(R, Ne)) | 0),
        (T = (T + Math.imul(R, Se)) | 0),
        (S = (S + Math.imul(O, Le)) | 0),
        (d = (d + Math.imul(O, ot)) | 0),
        (d = (d + Math.imul(F, Le)) | 0),
        (T = (T + Math.imul(F, ot)) | 0),
        (S = (S + Math.imul(X, at)) | 0),
        (d = (d + Math.imul(X, Ge)) | 0),
        (d = (d + Math.imul(b, at)) | 0),
        (T = (T + Math.imul(b, Ge)) | 0);
      var Kn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Kn >>> 26)) | 0),
        (Kn &= 67108863),
        (S = Math.imul(ye, Ke)),
        (d = Math.imul(ye, We)),
        (d = (d + Math.imul(we, Ke)) | 0),
        (T = Math.imul(we, We)),
        (S = (S + Math.imul(fe, Qe)) | 0),
        (d = (d + Math.imul(fe, Je)) | 0),
        (d = (d + Math.imul(pe, Qe)) | 0),
        (T = (T + Math.imul(pe, Je)) | 0),
        (S = (S + Math.imul(ue, Ce)) | 0),
        (d = (d + Math.imul(ue, De)) | 0),
        (d = (d + Math.imul(ae, Ce)) | 0),
        (T = (T + Math.imul(ae, De)) | 0),
        (S = (S + Math.imul(de, Te)) | 0),
        (d = (d + Math.imul(de, Me)) | 0),
        (d = (d + Math.imul(he, Te)) | 0),
        (T = (T + Math.imul(he, Me)) | 0),
        (S = (S + Math.imul(Ie, Oe)) | 0),
        (d = (d + Math.imul(Ie, Re)) | 0),
        (d = (d + Math.imul(me, Oe)) | 0),
        (T = (T + Math.imul(me, Re)) | 0),
        (S = (S + Math.imul(ge, Pe)) | 0),
        (d = (d + Math.imul(ge, Be)) | 0),
        (d = (d + Math.imul(ve, Pe)) | 0),
        (T = (T + Math.imul(ve, Be)) | 0),
        (S = (S + Math.imul(Z, Ne)) | 0),
        (d = (d + Math.imul(Z, Se)) | 0),
        (d = (d + Math.imul(ee, Ne)) | 0),
        (T = (T + Math.imul(ee, Se)) | 0),
        (S = (S + Math.imul(p, Le)) | 0),
        (d = (d + Math.imul(p, ot)) | 0),
        (d = (d + Math.imul(R, Le)) | 0),
        (T = (T + Math.imul(R, ot)) | 0),
        (S = (S + Math.imul(O, at)) | 0),
        (d = (d + Math.imul(O, Ge)) | 0),
        (d = (d + Math.imul(F, at)) | 0),
        (T = (T + Math.imul(F, Ge)) | 0);
      var Vn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Vn >>> 26)) | 0),
        (Vn &= 67108863),
        (S = Math.imul(ye, Qe)),
        (d = Math.imul(ye, Je)),
        (d = (d + Math.imul(we, Qe)) | 0),
        (T = Math.imul(we, Je)),
        (S = (S + Math.imul(fe, Ce)) | 0),
        (d = (d + Math.imul(fe, De)) | 0),
        (d = (d + Math.imul(pe, Ce)) | 0),
        (T = (T + Math.imul(pe, De)) | 0),
        (S = (S + Math.imul(ue, Te)) | 0),
        (d = (d + Math.imul(ue, Me)) | 0),
        (d = (d + Math.imul(ae, Te)) | 0),
        (T = (T + Math.imul(ae, Me)) | 0),
        (S = (S + Math.imul(de, Oe)) | 0),
        (d = (d + Math.imul(de, Re)) | 0),
        (d = (d + Math.imul(he, Oe)) | 0),
        (T = (T + Math.imul(he, Re)) | 0),
        (S = (S + Math.imul(Ie, Pe)) | 0),
        (d = (d + Math.imul(Ie, Be)) | 0),
        (d = (d + Math.imul(me, Pe)) | 0),
        (T = (T + Math.imul(me, Be)) | 0),
        (S = (S + Math.imul(ge, Ne)) | 0),
        (d = (d + Math.imul(ge, Se)) | 0),
        (d = (d + Math.imul(ve, Ne)) | 0),
        (T = (T + Math.imul(ve, Se)) | 0),
        (S = (S + Math.imul(Z, Le)) | 0),
        (d = (d + Math.imul(Z, ot)) | 0),
        (d = (d + Math.imul(ee, Le)) | 0),
        (T = (T + Math.imul(ee, ot)) | 0),
        (S = (S + Math.imul(p, at)) | 0),
        (d = (d + Math.imul(p, Ge)) | 0),
        (d = (d + Math.imul(R, at)) | 0),
        (T = (T + Math.imul(R, Ge)) | 0);
      var Di = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Di >>> 26)) | 0),
        (Di &= 67108863),
        (S = Math.imul(ye, Ce)),
        (d = Math.imul(ye, De)),
        (d = (d + Math.imul(we, Ce)) | 0),
        (T = Math.imul(we, De)),
        (S = (S + Math.imul(fe, Te)) | 0),
        (d = (d + Math.imul(fe, Me)) | 0),
        (d = (d + Math.imul(pe, Te)) | 0),
        (T = (T + Math.imul(pe, Me)) | 0),
        (S = (S + Math.imul(ue, Oe)) | 0),
        (d = (d + Math.imul(ue, Re)) | 0),
        (d = (d + Math.imul(ae, Oe)) | 0),
        (T = (T + Math.imul(ae, Re)) | 0),
        (S = (S + Math.imul(de, Pe)) | 0),
        (d = (d + Math.imul(de, Be)) | 0),
        (d = (d + Math.imul(he, Pe)) | 0),
        (T = (T + Math.imul(he, Be)) | 0),
        (S = (S + Math.imul(Ie, Ne)) | 0),
        (d = (d + Math.imul(Ie, Se)) | 0),
        (d = (d + Math.imul(me, Ne)) | 0),
        (T = (T + Math.imul(me, Se)) | 0),
        (S = (S + Math.imul(ge, Le)) | 0),
        (d = (d + Math.imul(ge, ot)) | 0),
        (d = (d + Math.imul(ve, Le)) | 0),
        (T = (T + Math.imul(ve, ot)) | 0),
        (S = (S + Math.imul(Z, at)) | 0),
        (d = (d + Math.imul(Z, Ge)) | 0),
        (d = (d + Math.imul(ee, at)) | 0),
        (T = (T + Math.imul(ee, Ge)) | 0);
      var Hn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Hn >>> 26)) | 0),
        (Hn &= 67108863),
        (S = Math.imul(ye, Te)),
        (d = Math.imul(ye, Me)),
        (d = (d + Math.imul(we, Te)) | 0),
        (T = Math.imul(we, Me)),
        (S = (S + Math.imul(fe, Oe)) | 0),
        (d = (d + Math.imul(fe, Re)) | 0),
        (d = (d + Math.imul(pe, Oe)) | 0),
        (T = (T + Math.imul(pe, Re)) | 0),
        (S = (S + Math.imul(ue, Pe)) | 0),
        (d = (d + Math.imul(ue, Be)) | 0),
        (d = (d + Math.imul(ae, Pe)) | 0),
        (T = (T + Math.imul(ae, Be)) | 0),
        (S = (S + Math.imul(de, Ne)) | 0),
        (d = (d + Math.imul(de, Se)) | 0),
        (d = (d + Math.imul(he, Ne)) | 0),
        (T = (T + Math.imul(he, Se)) | 0),
        (S = (S + Math.imul(Ie, Le)) | 0),
        (d = (d + Math.imul(Ie, ot)) | 0),
        (d = (d + Math.imul(me, Le)) | 0),
        (T = (T + Math.imul(me, ot)) | 0),
        (S = (S + Math.imul(ge, at)) | 0),
        (d = (d + Math.imul(ge, Ge)) | 0),
        (d = (d + Math.imul(ve, at)) | 0),
        (T = (T + Math.imul(ve, Ge)) | 0);
      var Gn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Gn >>> 26)) | 0),
        (Gn &= 67108863),
        (S = Math.imul(ye, Oe)),
        (d = Math.imul(ye, Re)),
        (d = (d + Math.imul(we, Oe)) | 0),
        (T = Math.imul(we, Re)),
        (S = (S + Math.imul(fe, Pe)) | 0),
        (d = (d + Math.imul(fe, Be)) | 0),
        (d = (d + Math.imul(pe, Pe)) | 0),
        (T = (T + Math.imul(pe, Be)) | 0),
        (S = (S + Math.imul(ue, Ne)) | 0),
        (d = (d + Math.imul(ue, Se)) | 0),
        (d = (d + Math.imul(ae, Ne)) | 0),
        (T = (T + Math.imul(ae, Se)) | 0),
        (S = (S + Math.imul(de, Le)) | 0),
        (d = (d + Math.imul(de, ot)) | 0),
        (d = (d + Math.imul(he, Le)) | 0),
        (T = (T + Math.imul(he, ot)) | 0),
        (S = (S + Math.imul(Ie, at)) | 0),
        (d = (d + Math.imul(Ie, Ge)) | 0),
        (d = (d + Math.imul(me, at)) | 0),
        (T = (T + Math.imul(me, Ge)) | 0);
      var yr = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (yr >>> 26)) | 0),
        (yr &= 67108863),
        (S = Math.imul(ye, Pe)),
        (d = Math.imul(ye, Be)),
        (d = (d + Math.imul(we, Pe)) | 0),
        (T = Math.imul(we, Be)),
        (S = (S + Math.imul(fe, Ne)) | 0),
        (d = (d + Math.imul(fe, Se)) | 0),
        (d = (d + Math.imul(pe, Ne)) | 0),
        (T = (T + Math.imul(pe, Se)) | 0),
        (S = (S + Math.imul(ue, Le)) | 0),
        (d = (d + Math.imul(ue, ot)) | 0),
        (d = (d + Math.imul(ae, Le)) | 0),
        (T = (T + Math.imul(ae, ot)) | 0),
        (S = (S + Math.imul(de, at)) | 0),
        (d = (d + Math.imul(de, Ge)) | 0),
        (d = (d + Math.imul(he, at)) | 0),
        (T = (T + Math.imul(he, Ge)) | 0);
      var Wn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Wn >>> 26)) | 0),
        (Wn &= 67108863),
        (S = Math.imul(ye, Ne)),
        (d = Math.imul(ye, Se)),
        (d = (d + Math.imul(we, Ne)) | 0),
        (T = Math.imul(we, Se)),
        (S = (S + Math.imul(fe, Le)) | 0),
        (d = (d + Math.imul(fe, ot)) | 0),
        (d = (d + Math.imul(pe, Le)) | 0),
        (T = (T + Math.imul(pe, ot)) | 0),
        (S = (S + Math.imul(ue, at)) | 0),
        (d = (d + Math.imul(ue, Ge)) | 0),
        (d = (d + Math.imul(ae, at)) | 0),
        (T = (T + Math.imul(ae, Ge)) | 0);
      var Qn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Qn >>> 26)) | 0),
        (Qn &= 67108863),
        (S = Math.imul(ye, Le)),
        (d = Math.imul(ye, ot)),
        (d = (d + Math.imul(we, Le)) | 0),
        (T = Math.imul(we, ot)),
        (S = (S + Math.imul(fe, at)) | 0),
        (d = (d + Math.imul(fe, Ge)) | 0),
        (d = (d + Math.imul(pe, at)) | 0),
        (T = (T + Math.imul(pe, Ge)) | 0);
      var Yn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      (x = (((T + (d >>> 13)) | 0) + (Yn >>> 26)) | 0),
        (Yn &= 67108863),
        (S = Math.imul(ye, at)),
        (d = Math.imul(ye, Ge)),
        (d = (d + Math.imul(we, at)) | 0),
        (T = Math.imul(we, Ge));
      var Jn = (((x + S) | 0) + ((d & 8191) << 13)) | 0;
      return (
        (x = (((T + (d >>> 13)) | 0) + (Jn >>> 26)) | 0),
        (Jn &= 67108863),
        (E[0] = Kr),
        (E[1] = Vr),
        (E[2] = Hr),
        (E[3] = Gr),
        (E[4] = Wr),
        (E[5] = $t),
        (E[6] = qn),
        (E[7] = jn),
        (E[8] = zn),
        (E[9] = Kn),
        (E[10] = Vn),
        (E[11] = Di),
        (E[12] = Hn),
        (E[13] = Gn),
        (E[14] = yr),
        (E[15] = Wn),
        (E[16] = Qn),
        (E[17] = Yn),
        (E[18] = Jn),
        x !== 0 && ((E[19] = x), h.length++),
        h
      );
    };
    Math.imul || (N = Q);
    function H(a, u, h) {
      (h.negative = u.negative ^ a.negative), (h.length = a.length + u.length);
      for (var v = 0, _ = 0, E = 0; E < h.length - 1; E++) {
        var x = _;
        _ = 0;
        for (
          var S = v & 67108863,
            d = Math.min(E, u.length - 1),
            T = Math.max(0, E - a.length + 1);
          T <= d;
          T++
        ) {
          var Y = E - T,
            X = a.words[Y] | 0,
            b = u.words[T] | 0,
            G = X * b,
            O = G & 67108863;
          (x = (x + ((G / 67108864) | 0)) | 0),
            (O = (O + S) | 0),
            (S = O & 67108863),
            (x = (x + (O >>> 26)) | 0),
            (_ += x >>> 26),
            (x &= 67108863);
        }
        (h.words[E] = S), (v = x), (x = _);
      }
      return v !== 0 ? (h.words[E] = v) : h.length--, h._strip();
    }
    function L(a, u, h) {
      return H(a, u, h);
    }
    (s.prototype.mulTo = function (a, u) {
      var h,
        v = this.length + a.length;
      return (
        this.length === 10 && a.length === 10
          ? (h = N(this, a, u))
          : v < 63
          ? (h = Q(this, a, u))
          : v < 1024
          ? (h = H(this, a, u))
          : (h = L(this, a, u)),
        h
      );
    }),
      (s.prototype.mul = function (a) {
        var u = new s(null);
        return (u.words = new Array(this.length + a.length)), this.mulTo(a, u);
      }),
      (s.prototype.mulf = function (a) {
        var u = new s(null);
        return (u.words = new Array(this.length + a.length)), L(this, a, u);
      }),
      (s.prototype.imul = function (a) {
        return this.clone().mulTo(a, this);
      }),
      (s.prototype.imuln = function (a) {
        var u = a < 0;
        u && (a = -a), i(typeof a == "number"), i(a < 67108864);
        for (var h = 0, v = 0; v < this.length; v++) {
          var _ = (this.words[v] | 0) * a,
            E = (_ & 67108863) + (h & 67108863);
          (h >>= 26),
            (h += (_ / 67108864) | 0),
            (h += E >>> 26),
            (this.words[v] = E & 67108863);
        }
        return (
          h !== 0 && ((this.words[v] = h), this.length++),
          u ? this.ineg() : this
        );
      }),
      (s.prototype.muln = function (a) {
        return this.clone().imuln(a);
      }),
      (s.prototype.sqr = function () {
        return this.mul(this);
      }),
      (s.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (s.prototype.pow = function (a) {
        var u = q(a);
        if (u.length === 0) return new s(1);
        for (var h = this, v = 0; v < u.length && u[v] === 0; v++, h = h.sqr());
        if (++v < u.length)
          for (var _ = h.sqr(); v < u.length; v++, _ = _.sqr())
            u[v] !== 0 && (h = h.mul(_));
        return h;
      }),
      (s.prototype.iushln = function (a) {
        i(typeof a == "number" && a >= 0);
        var u = a % 26,
          h = (a - u) / 26,
          v = (67108863 >>> (26 - u)) << (26 - u),
          _;
        if (u !== 0) {
          var E = 0;
          for (_ = 0; _ < this.length; _++) {
            var x = this.words[_] & v,
              S = ((this.words[_] | 0) - x) << u;
            (this.words[_] = S | E), (E = x >>> (26 - u));
          }
          E && ((this.words[_] = E), this.length++);
        }
        if (h !== 0) {
          for (_ = this.length - 1; _ >= 0; _--)
            this.words[_ + h] = this.words[_];
          for (_ = 0; _ < h; _++) this.words[_] = 0;
          this.length += h;
        }
        return this._strip();
      }),
      (s.prototype.ishln = function (a) {
        return i(this.negative === 0), this.iushln(a);
      }),
      (s.prototype.iushrn = function (a, u, h) {
        i(typeof a == "number" && a >= 0);
        var v;
        u ? (v = (u - (u % 26)) / 26) : (v = 0);
        var _ = a % 26,
          E = Math.min((a - _) / 26, this.length),
          x = 67108863 ^ ((67108863 >>> _) << _),
          S = h;
        if (((v -= E), (v = Math.max(0, v)), S)) {
          for (var d = 0; d < E; d++) S.words[d] = this.words[d];
          S.length = E;
        }
        if (E !== 0)
          if (this.length > E)
            for (this.length -= E, d = 0; d < this.length; d++)
              this.words[d] = this.words[d + E];
          else (this.words[0] = 0), (this.length = 1);
        var T = 0;
        for (d = this.length - 1; d >= 0 && (T !== 0 || d >= v); d--) {
          var Y = this.words[d] | 0;
          (this.words[d] = (T << (26 - _)) | (Y >>> _)), (T = Y & x);
        }
        return (
          S && T !== 0 && (S.words[S.length++] = T),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (s.prototype.ishrn = function (a, u, h) {
        return i(this.negative === 0), this.iushrn(a, u, h);
      }),
      (s.prototype.shln = function (a) {
        return this.clone().ishln(a);
      }),
      (s.prototype.ushln = function (a) {
        return this.clone().iushln(a);
      }),
      (s.prototype.shrn = function (a) {
        return this.clone().ishrn(a);
      }),
      (s.prototype.ushrn = function (a) {
        return this.clone().iushrn(a);
      }),
      (s.prototype.testn = function (a) {
        i(typeof a == "number" && a >= 0);
        var u = a % 26,
          h = (a - u) / 26,
          v = 1 << u;
        if (this.length <= h) return !1;
        var _ = this.words[h];
        return !!(_ & v);
      }),
      (s.prototype.imaskn = function (a) {
        i(typeof a == "number" && a >= 0);
        var u = a % 26,
          h = (a - u) / 26;
        if (
          (i(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= h)
        )
          return this;
        if (
          (u !== 0 && h++, (this.length = Math.min(h, this.length)), u !== 0)
        ) {
          var v = 67108863 ^ ((67108863 >>> u) << u);
          this.words[this.length - 1] &= v;
        }
        return this._strip();
      }),
      (s.prototype.maskn = function (a) {
        return this.clone().imaskn(a);
      }),
      (s.prototype.iaddn = function (a) {
        return (
          i(typeof a == "number"),
          i(a < 67108864),
          a < 0
            ? this.isubn(-a)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= a
              ? ((this.words[0] = a - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(a), (this.negative = 1), this)
            : this._iaddn(a)
        );
      }),
      (s.prototype._iaddn = function (a) {
        this.words[0] += a;
        for (var u = 0; u < this.length && this.words[u] >= 67108864; u++)
          (this.words[u] -= 67108864),
            u === this.length - 1
              ? (this.words[u + 1] = 1)
              : this.words[u + 1]++;
        return (this.length = Math.max(this.length, u + 1)), this;
      }),
      (s.prototype.isubn = function (a) {
        if ((i(typeof a == "number"), i(a < 67108864), a < 0))
          return this.iaddn(-a);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(a), (this.negative = 1), this;
        if (((this.words[0] -= a), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var u = 0; u < this.length && this.words[u] < 0; u++)
            (this.words[u] += 67108864), (this.words[u + 1] -= 1);
        return this._strip();
      }),
      (s.prototype.addn = function (a) {
        return this.clone().iaddn(a);
      }),
      (s.prototype.subn = function (a) {
        return this.clone().isubn(a);
      }),
      (s.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (s.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (s.prototype._ishlnsubmul = function (a, u, h) {
        var v = a.length + h,
          _;
        this._expand(v);
        var E,
          x = 0;
        for (_ = 0; _ < a.length; _++) {
          E = (this.words[_ + h] | 0) + x;
          var S = (a.words[_] | 0) * u;
          (E -= S & 67108863),
            (x = (E >> 26) - ((S / 67108864) | 0)),
            (this.words[_ + h] = E & 67108863);
        }
        for (; _ < this.length - h; _++)
          (E = (this.words[_ + h] | 0) + x),
            (x = E >> 26),
            (this.words[_ + h] = E & 67108863);
        if (x === 0) return this._strip();
        for (i(x === -1), x = 0, _ = 0; _ < this.length; _++)
          (E = -(this.words[_] | 0) + x),
            (x = E >> 26),
            (this.words[_] = E & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (s.prototype._wordDiv = function (a, u) {
        var h = this.length - a.length,
          v = this.clone(),
          _ = a,
          E = _.words[_.length - 1] | 0,
          x = this._countBits(E);
        (h = 26 - x),
          h !== 0 &&
            ((_ = _.ushln(h)), v.iushln(h), (E = _.words[_.length - 1] | 0));
        var S = v.length - _.length,
          d;
        if (u !== "mod") {
          (d = new s(null)),
            (d.length = S + 1),
            (d.words = new Array(d.length));
          for (var T = 0; T < d.length; T++) d.words[T] = 0;
        }
        var Y = v.clone()._ishlnsubmul(_, 1, S);
        Y.negative === 0 && ((v = Y), d && (d.words[S] = 1));
        for (var X = S - 1; X >= 0; X--) {
          var b =
            (v.words[_.length + X] | 0) * 67108864 +
            (v.words[_.length + X - 1] | 0);
          for (
            b = Math.min((b / E) | 0, 67108863), v._ishlnsubmul(_, b, X);
            v.negative !== 0;

          )
            b--,
              (v.negative = 0),
              v._ishlnsubmul(_, 1, X),
              v.isZero() || (v.negative ^= 1);
          d && (d.words[X] = b);
        }
        return (
          d && d._strip(),
          v._strip(),
          u !== "div" && h !== 0 && v.iushrn(h),
          { div: d || null, mod: v }
        );
      }),
      (s.prototype.divmod = function (a, u, h) {
        if ((i(!a.isZero()), this.isZero()))
          return { div: new s(0), mod: new s(0) };
        var v, _, E;
        return this.negative !== 0 && a.negative === 0
          ? ((E = this.neg().divmod(a, u)),
            u !== "mod" && (v = E.div.neg()),
            u !== "div" &&
              ((_ = E.mod.neg()), h && _.negative !== 0 && _.iadd(a)),
            { div: v, mod: _ })
          : this.negative === 0 && a.negative !== 0
          ? ((E = this.divmod(a.neg(), u)),
            u !== "mod" && (v = E.div.neg()),
            { div: v, mod: E.mod })
          : this.negative & a.negative
          ? ((E = this.neg().divmod(a.neg(), u)),
            u !== "div" &&
              ((_ = E.mod.neg()), h && _.negative !== 0 && _.isub(a)),
            { div: E.div, mod: _ })
          : a.length > this.length || this.cmp(a) < 0
          ? { div: new s(0), mod: this }
          : a.length === 1
          ? u === "div"
            ? { div: this.divn(a.words[0]), mod: null }
            : u === "mod"
            ? { div: null, mod: new s(this.modrn(a.words[0])) }
            : { div: this.divn(a.words[0]), mod: new s(this.modrn(a.words[0])) }
          : this._wordDiv(a, u);
      }),
      (s.prototype.div = function (a) {
        return this.divmod(a, "div", !1).div;
      }),
      (s.prototype.mod = function (a) {
        return this.divmod(a, "mod", !1).mod;
      }),
      (s.prototype.umod = function (a) {
        return this.divmod(a, "mod", !0).mod;
      }),
      (s.prototype.divRound = function (a) {
        var u = this.divmod(a);
        if (u.mod.isZero()) return u.div;
        var h = u.div.negative !== 0 ? u.mod.isub(a) : u.mod,
          v = a.ushrn(1),
          _ = a.andln(1),
          E = h.cmp(v);
        return E < 0 || (_ === 1 && E === 0)
          ? u.div
          : u.div.negative !== 0
          ? u.div.isubn(1)
          : u.div.iaddn(1);
      }),
      (s.prototype.modrn = function (a) {
        var u = a < 0;
        u && (a = -a), i(a <= 67108863);
        for (var h = (1 << 26) % a, v = 0, _ = this.length - 1; _ >= 0; _--)
          v = (h * v + (this.words[_] | 0)) % a;
        return u ? -v : v;
      }),
      (s.prototype.modn = function (a) {
        return this.modrn(a);
      }),
      (s.prototype.idivn = function (a) {
        var u = a < 0;
        u && (a = -a), i(a <= 67108863);
        for (var h = 0, v = this.length - 1; v >= 0; v--) {
          var _ = (this.words[v] | 0) + h * 67108864;
          (this.words[v] = (_ / a) | 0), (h = _ % a);
        }
        return this._strip(), u ? this.ineg() : this;
      }),
      (s.prototype.divn = function (a) {
        return this.clone().idivn(a);
      }),
      (s.prototype.egcd = function (a) {
        i(a.negative === 0), i(!a.isZero());
        var u = this,
          h = a.clone();
        u.negative !== 0 ? (u = u.umod(a)) : (u = u.clone());
        for (
          var v = new s(1), _ = new s(0), E = new s(0), x = new s(1), S = 0;
          u.isEven() && h.isEven();

        )
          u.iushrn(1), h.iushrn(1), ++S;
        for (var d = h.clone(), T = u.clone(); !u.isZero(); ) {
          for (var Y = 0, X = 1; !(u.words[0] & X) && Y < 26; ++Y, X <<= 1);
          if (Y > 0)
            for (u.iushrn(Y); Y-- > 0; )
              (v.isOdd() || _.isOdd()) && (v.iadd(d), _.isub(T)),
                v.iushrn(1),
                _.iushrn(1);
          for (var b = 0, G = 1; !(h.words[0] & G) && b < 26; ++b, G <<= 1);
          if (b > 0)
            for (h.iushrn(b); b-- > 0; )
              (E.isOdd() || x.isOdd()) && (E.iadd(d), x.isub(T)),
                E.iushrn(1),
                x.iushrn(1);
          u.cmp(h) >= 0
            ? (u.isub(h), v.isub(E), _.isub(x))
            : (h.isub(u), E.isub(v), x.isub(_));
        }
        return { a: E, b: x, gcd: h.iushln(S) };
      }),
      (s.prototype._invmp = function (a) {
        i(a.negative === 0), i(!a.isZero());
        var u = this,
          h = a.clone();
        u.negative !== 0 ? (u = u.umod(a)) : (u = u.clone());
        for (
          var v = new s(1), _ = new s(0), E = h.clone();
          u.cmpn(1) > 0 && h.cmpn(1) > 0;

        ) {
          for (var x = 0, S = 1; !(u.words[0] & S) && x < 26; ++x, S <<= 1);
          if (x > 0)
            for (u.iushrn(x); x-- > 0; ) v.isOdd() && v.iadd(E), v.iushrn(1);
          for (var d = 0, T = 1; !(h.words[0] & T) && d < 26; ++d, T <<= 1);
          if (d > 0)
            for (h.iushrn(d); d-- > 0; ) _.isOdd() && _.iadd(E), _.iushrn(1);
          u.cmp(h) >= 0 ? (u.isub(h), v.isub(_)) : (h.isub(u), _.isub(v));
        }
        var Y;
        return (
          u.cmpn(1) === 0 ? (Y = v) : (Y = _), Y.cmpn(0) < 0 && Y.iadd(a), Y
        );
      }),
      (s.prototype.gcd = function (a) {
        if (this.isZero()) return a.abs();
        if (a.isZero()) return this.abs();
        var u = this.clone(),
          h = a.clone();
        (u.negative = 0), (h.negative = 0);
        for (var v = 0; u.isEven() && h.isEven(); v++) u.iushrn(1), h.iushrn(1);
        do {
          for (; u.isEven(); ) u.iushrn(1);
          for (; h.isEven(); ) h.iushrn(1);
          var _ = u.cmp(h);
          if (_ < 0) {
            var E = u;
            (u = h), (h = E);
          } else if (_ === 0 || h.cmpn(1) === 0) break;
          u.isub(h);
        } while (!0);
        return h.iushln(v);
      }),
      (s.prototype.invm = function (a) {
        return this.egcd(a).a.umod(a);
      }),
      (s.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (s.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (s.prototype.andln = function (a) {
        return this.words[0] & a;
      }),
      (s.prototype.bincn = function (a) {
        i(typeof a == "number");
        var u = a % 26,
          h = (a - u) / 26,
          v = 1 << u;
        if (this.length <= h)
          return this._expand(h + 1), (this.words[h] |= v), this;
        for (var _ = v, E = h; _ !== 0 && E < this.length; E++) {
          var x = this.words[E] | 0;
          (x += _), (_ = x >>> 26), (x &= 67108863), (this.words[E] = x);
        }
        return _ !== 0 && ((this.words[E] = _), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (s.prototype.cmpn = function (a) {
        var u = a < 0;
        if (this.negative !== 0 && !u) return -1;
        if (this.negative === 0 && u) return 1;
        this._strip();
        var h;
        if (this.length > 1) h = 1;
        else {
          u && (a = -a), i(a <= 67108863, "Number is too big");
          var v = this.words[0] | 0;
          h = v === a ? 0 : v < a ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }),
      (s.prototype.cmp = function (a) {
        if (this.negative !== 0 && a.negative === 0) return -1;
        if (this.negative === 0 && a.negative !== 0) return 1;
        var u = this.ucmp(a);
        return this.negative !== 0 ? -u | 0 : u;
      }),
      (s.prototype.ucmp = function (a) {
        if (this.length > a.length) return 1;
        if (this.length < a.length) return -1;
        for (var u = 0, h = this.length - 1; h >= 0; h--) {
          var v = this.words[h] | 0,
            _ = a.words[h] | 0;
          if (v !== _) {
            v < _ ? (u = -1) : v > _ && (u = 1);
            break;
          }
        }
        return u;
      }),
      (s.prototype.gtn = function (a) {
        return this.cmpn(a) === 1;
      }),
      (s.prototype.gt = function (a) {
        return this.cmp(a) === 1;
      }),
      (s.prototype.gten = function (a) {
        return this.cmpn(a) >= 0;
      }),
      (s.prototype.gte = function (a) {
        return this.cmp(a) >= 0;
      }),
      (s.prototype.ltn = function (a) {
        return this.cmpn(a) === -1;
      }),
      (s.prototype.lt = function (a) {
        return this.cmp(a) === -1;
      }),
      (s.prototype.lten = function (a) {
        return this.cmpn(a) <= 0;
      }),
      (s.prototype.lte = function (a) {
        return this.cmp(a) <= 0;
      }),
      (s.prototype.eqn = function (a) {
        return this.cmpn(a) === 0;
      }),
      (s.prototype.eq = function (a) {
        return this.cmp(a) === 0;
      }),
      (s.red = function (a) {
        return new B(a);
      }),
      (s.prototype.toRed = function (a) {
        return (
          i(!this.red, "Already a number in reduction context"),
          i(this.negative === 0, "red works only with positives"),
          a.convertTo(this)._forceRed(a)
        );
      }),
      (s.prototype.fromRed = function () {
        return (
          i(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (s.prototype._forceRed = function (a) {
        return (this.red = a), this;
      }),
      (s.prototype.forceRed = function (a) {
        return (
          i(!this.red, "Already a number in reduction context"),
          this._forceRed(a)
        );
      }),
      (s.prototype.redAdd = function (a) {
        return (
          i(this.red, "redAdd works only with red numbers"),
          this.red.add(this, a)
        );
      }),
      (s.prototype.redIAdd = function (a) {
        return (
          i(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, a)
        );
      }),
      (s.prototype.redSub = function (a) {
        return (
          i(this.red, "redSub works only with red numbers"),
          this.red.sub(this, a)
        );
      }),
      (s.prototype.redISub = function (a) {
        return (
          i(this.red, "redISub works only with red numbers"),
          this.red.isub(this, a)
        );
      }),
      (s.prototype.redShl = function (a) {
        return (
          i(this.red, "redShl works only with red numbers"),
          this.red.shl(this, a)
        );
      }),
      (s.prototype.redMul = function (a) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, a),
          this.red.mul(this, a)
        );
      }),
      (s.prototype.redIMul = function (a) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, a),
          this.red.imul(this, a)
        );
      }),
      (s.prototype.redSqr = function () {
        return (
          i(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (s.prototype.redISqr = function () {
        return (
          i(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (s.prototype.redSqrt = function () {
        return (
          i(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (s.prototype.redInvm = function () {
        return (
          i(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (s.prototype.redNeg = function () {
        return (
          i(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (s.prototype.redPow = function (a) {
        return (
          i(this.red && !a.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, a)
        );
      });
    var j = { k256: null, p224: null, p192: null, p25519: null };
    function k(a, u) {
      (this.name = a),
        (this.p = new s(u, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (k.prototype._tmp = function () {
      var a = new s(null);
      return (a.words = new Array(Math.ceil(this.n / 13))), a;
    }),
      (k.prototype.ireduce = function (a) {
        var u = a,
          h;
        do
          this.split(u, this.tmp),
            (u = this.imulK(u)),
            (u = u.iadd(this.tmp)),
            (h = u.bitLength());
        while (h > this.n);
        var v = h < this.n ? -1 : u.ucmp(this.p);
        return (
          v === 0
            ? ((u.words[0] = 0), (u.length = 1))
            : v > 0
            ? u.isub(this.p)
            : u.strip !== void 0
            ? u.strip()
            : u._strip(),
          u
        );
      }),
      (k.prototype.split = function (a, u) {
        a.iushrn(this.n, 0, u);
      }),
      (k.prototype.imulK = function (a) {
        return a.imul(this.k);
      });
    function m() {
      k.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    n(m, k),
      (m.prototype.split = function (a, u) {
        for (var h = 4194303, v = Math.min(a.length, 9), _ = 0; _ < v; _++)
          u.words[_] = a.words[_];
        if (((u.length = v), a.length <= 9)) {
          (a.words[0] = 0), (a.length = 1);
          return;
        }
        var E = a.words[9];
        for (u.words[u.length++] = E & h, _ = 10; _ < a.length; _++) {
          var x = a.words[_] | 0;
          (a.words[_ - 10] = ((x & h) << 4) | (E >>> 22)), (E = x);
        }
        (E >>>= 22),
          (a.words[_ - 10] = E),
          E === 0 && a.length > 10 ? (a.length -= 10) : (a.length -= 9);
      }),
      (m.prototype.imulK = function (a) {
        (a.words[a.length] = 0), (a.words[a.length + 1] = 0), (a.length += 2);
        for (var u = 0, h = 0; h < a.length; h++) {
          var v = a.words[h] | 0;
          (u += v * 977),
            (a.words[h] = u & 67108863),
            (u = v * 64 + ((u / 67108864) | 0));
        }
        return (
          a.words[a.length - 1] === 0 &&
            (a.length--, a.words[a.length - 1] === 0 && a.length--),
          a
        );
      });
    function y() {
      k.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    n(y, k);
    function I() {
      k.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    n(I, k);
    function C() {
      k.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    n(C, k),
      (C.prototype.imulK = function (a) {
        for (var u = 0, h = 0; h < a.length; h++) {
          var v = (a.words[h] | 0) * 19 + u,
            _ = v & 67108863;
          (v >>>= 26), (a.words[h] = _), (u = v);
        }
        return u !== 0 && (a.words[a.length++] = u), a;
      }),
      (s._prime = function (a) {
        if (j[a]) return j[a];
        var u;
        if (a === "k256") u = new m();
        else if (a === "p224") u = new y();
        else if (a === "p192") u = new I();
        else if (a === "p25519") u = new C();
        else throw new Error("Unknown prime " + a);
        return (j[a] = u), u;
      });
    function B(a) {
      if (typeof a == "string") {
        var u = s._prime(a);
        (this.m = u.p), (this.prime = u);
      } else
        i(a.gtn(1), "modulus must be greater than 1"),
          (this.m = a),
          (this.prime = null);
    }
    (B.prototype._verify1 = function (a) {
      i(a.negative === 0, "red works only with positives"),
        i(a.red, "red works only with red numbers");
    }),
      (B.prototype._verify2 = function (a, u) {
        i((a.negative | u.negative) === 0, "red works only with positives"),
          i(a.red && a.red === u.red, "red works only with red numbers");
      }),
      (B.prototype.imod = function (a) {
        return this.prime
          ? this.prime.ireduce(a)._forceRed(this)
          : (g(a, a.umod(this.m)._forceRed(this)), a);
      }),
      (B.prototype.neg = function (a) {
        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this);
      }),
      (B.prototype.add = function (a, u) {
        this._verify2(a, u);
        var h = a.add(u);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }),
      (B.prototype.iadd = function (a, u) {
        this._verify2(a, u);
        var h = a.iadd(u);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }),
      (B.prototype.sub = function (a, u) {
        this._verify2(a, u);
        var h = a.sub(u);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }),
      (B.prototype.isub = function (a, u) {
        this._verify2(a, u);
        var h = a.isub(u);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }),
      (B.prototype.shl = function (a, u) {
        return this._verify1(a), this.imod(a.ushln(u));
      }),
      (B.prototype.imul = function (a, u) {
        return this._verify2(a, u), this.imod(a.imul(u));
      }),
      (B.prototype.mul = function (a, u) {
        return this._verify2(a, u), this.imod(a.mul(u));
      }),
      (B.prototype.isqr = function (a) {
        return this.imul(a, a.clone());
      }),
      (B.prototype.sqr = function (a) {
        return this.mul(a, a);
      }),
      (B.prototype.sqrt = function (a) {
        if (a.isZero()) return a.clone();
        var u = this.m.andln(3);
        if ((i(u % 2 === 1), u === 3)) {
          var h = this.m.add(new s(1)).iushrn(2);
          return this.pow(a, h);
        }
        for (var v = this.m.subn(1), _ = 0; !v.isZero() && v.andln(1) === 0; )
          _++, v.iushrn(1);
        i(!v.isZero());
        var E = new s(1).toRed(this),
          x = E.redNeg(),
          S = this.m.subn(1).iushrn(1),
          d = this.m.bitLength();
        for (d = new s(2 * d * d).toRed(this); this.pow(d, S).cmp(x) !== 0; )
          d.redIAdd(x);
        for (
          var T = this.pow(d, v),
            Y = this.pow(a, v.addn(1).iushrn(1)),
            X = this.pow(a, v),
            b = _;
          X.cmp(E) !== 0;

        ) {
          for (var G = X, O = 0; G.cmp(E) !== 0; O++) G = G.redSqr();
          i(O < b);
          var F = this.pow(T, new s(1).iushln(b - O - 1));
          (Y = Y.redMul(F)), (T = F.redSqr()), (X = X.redMul(T)), (b = O);
        }
        return Y;
      }),
      (B.prototype.invm = function (a) {
        var u = a._invmp(this.m);
        return u.negative !== 0
          ? ((u.negative = 0), this.imod(u).redNeg())
          : this.imod(u);
      }),
      (B.prototype.pow = function (a, u) {
        if (u.isZero()) return new s(1).toRed(this);
        if (u.cmpn(1) === 0) return a.clone();
        var h = 4,
          v = new Array(1 << h);
        (v[0] = new s(1).toRed(this)), (v[1] = a);
        for (var _ = 2; _ < v.length; _++) v[_] = this.mul(v[_ - 1], a);
        var E = v[0],
          x = 0,
          S = 0,
          d = u.bitLength() % 26;
        for (d === 0 && (d = 26), _ = u.length - 1; _ >= 0; _--) {
          for (var T = u.words[_], Y = d - 1; Y >= 0; Y--) {
            var X = (T >> Y) & 1;
            if ((E !== v[0] && (E = this.sqr(E)), X === 0 && x === 0)) {
              S = 0;
              continue;
            }
            (x <<= 1),
              (x |= X),
              S++,
              !(S !== h && (_ !== 0 || Y !== 0)) &&
                ((E = this.mul(E, v[x])), (S = 0), (x = 0));
          }
          d = 26;
        }
        return E;
      }),
      (B.prototype.convertTo = function (a) {
        var u = a.umod(this.m);
        return u === a ? u.clone() : u;
      }),
      (B.prototype.convertFrom = function (a) {
        var u = a.clone();
        return (u.red = null), u;
      }),
      (s.mont = function (a) {
        return new U(a);
      });
    function U(a) {
      B.call(this, a),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new s(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    n(U, B),
      (U.prototype.convertTo = function (a) {
        return this.imod(a.ushln(this.shift));
      }),
      (U.prototype.convertFrom = function (a) {
        var u = this.imod(a.mul(this.rinv));
        return (u.red = null), u;
      }),
      (U.prototype.imul = function (a, u) {
        if (a.isZero() || u.isZero())
          return (a.words[0] = 0), (a.length = 1), a;
        var h = a.imul(u),
          v = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          _ = h.isub(v).iushrn(this.shift),
          E = _;
        return (
          _.cmp(this.m) >= 0
            ? (E = _.isub(this.m))
            : _.cmpn(0) < 0 && (E = _.iadd(this.m)),
          E._forceRed(this)
        );
      }),
      (U.prototype.mul = function (a, u) {
        if (a.isZero() || u.isZero()) return new s(0)._forceRed(this);
        var h = a.mul(u),
          v = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          _ = h.isub(v).iushrn(this.shift),
          E = _;
        return (
          _.cmp(this.m) >= 0
            ? (E = _.isub(this.m))
            : _.cmpn(0) < 0 && (E = _.iadd(this.m)),
          E._forceRed(this)
        );
      }),
      (U.prototype.invm = function (a) {
        var u = this.imod(a._invmp(this.m).mul(this.r2));
        return u._forceRed(this);
      });
  })(e, kf);
})(Kf);
var Ue = Kf.exports;
const Vf = "bignumber/5.7.0";
var mo = Ue.BN;
const bi = new Bt(Vf),
  ua = {},
  nl = 9007199254740991;
function Iv(e) {
  return (
    e != null &&
    (Zt.isBigNumber(e) ||
      (typeof e == "number" && e % 1 === 0) ||
      (typeof e == "string" && !!e.match(/^-?[0-9]+$/)) ||
      fr(e) ||
      typeof e == "bigint" ||
      Ln(e))
  );
}
let sl = !1,
  Zt = class Lr {
    constructor(t, r) {
      t !== ua &&
        bi.throwError(
          "cannot call constructor directly; use BigNumber.from",
          Bt.errors.UNSUPPORTED_OPERATION,
          { operation: "new (BigNumber)" }
        ),
        (this._hex = r),
        (this._isBigNumber = !0),
        Object.freeze(this);
    }
    fromTwos(t) {
      return er(Ve(this).fromTwos(t));
    }
    toTwos(t) {
      return er(Ve(this).toTwos(t));
    }
    abs() {
      return this._hex[0] === "-" ? Lr.from(this._hex.substring(1)) : this;
    }
    add(t) {
      return er(Ve(this).add(Ve(t)));
    }
    sub(t) {
      return er(Ve(this).sub(Ve(t)));
    }
    div(t) {
      return (
        Lr.from(t).isZero() && br("division-by-zero", "div"),
        er(Ve(this).div(Ve(t)))
      );
    }
    mul(t) {
      return er(Ve(this).mul(Ve(t)));
    }
    mod(t) {
      const r = Ve(t);
      return r.isNeg() && br("division-by-zero", "mod"), er(Ve(this).umod(r));
    }
    pow(t) {
      const r = Ve(t);
      return r.isNeg() && br("negative-power", "pow"), er(Ve(this).pow(r));
    }
    and(t) {
      const r = Ve(t);
      return (
        (this.isNegative() || r.isNeg()) && br("unbound-bitwise-result", "and"),
        er(Ve(this).and(r))
      );
    }
    or(t) {
      const r = Ve(t);
      return (
        (this.isNegative() || r.isNeg()) && br("unbound-bitwise-result", "or"),
        er(Ve(this).or(r))
      );
    }
    xor(t) {
      const r = Ve(t);
      return (
        (this.isNegative() || r.isNeg()) && br("unbound-bitwise-result", "xor"),
        er(Ve(this).xor(r))
      );
    }
    mask(t) {
      return (
        (this.isNegative() || t < 0) && br("negative-width", "mask"),
        er(Ve(this).maskn(t))
      );
    }
    shl(t) {
      return (
        (this.isNegative() || t < 0) && br("negative-width", "shl"),
        er(Ve(this).shln(t))
      );
    }
    shr(t) {
      return (
        (this.isNegative() || t < 0) && br("negative-width", "shr"),
        er(Ve(this).shrn(t))
      );
    }
    eq(t) {
      return Ve(this).eq(Ve(t));
    }
    lt(t) {
      return Ve(this).lt(Ve(t));
    }
    lte(t) {
      return Ve(this).lte(Ve(t));
    }
    gt(t) {
      return Ve(this).gt(Ve(t));
    }
    gte(t) {
      return Ve(this).gte(Ve(t));
    }
    isNegative() {
      return this._hex[0] === "-";
    }
    isZero() {
      return Ve(this).isZero();
    }
    toNumber() {
      try {
        return Ve(this).toNumber();
      } catch (t) {
        br("overflow", "toNumber", this.toString());
      }
      return null;
    }
    toBigInt() {
      try {
        return BigInt(this.toString());
      } catch (t) {}
      return bi.throwError(
        "this platform does not support BigInt",
        Bt.errors.UNSUPPORTED_OPERATION,
        { value: this.toString() }
      );
    }
    toString() {
      return (
        arguments.length > 0 &&
          (arguments[0] === 10
            ? sl ||
              ((sl = !0),
              bi.warn(
                "BigNumber.toString does not accept any parameters; base-10 is assumed"
              ))
            : arguments[0] === 16
            ? bi.throwError(
                "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                Bt.errors.UNEXPECTED_ARGUMENT,
                {}
              )
            : bi.throwError(
                "BigNumber.toString does not accept parameters",
                Bt.errors.UNEXPECTED_ARGUMENT,
                {}
              )),
        Ve(this).toString(10)
      );
    }
    toHexString() {
      return this._hex;
    }
    toJSON(t) {
      return { type: "BigNumber", hex: this.toHexString() };
    }
    static from(t) {
      if (t instanceof Lr) return t;
      if (typeof t == "string")
        return t.match(/^-?0x[0-9a-f]+$/i)
          ? new Lr(ua, Es(t))
          : t.match(/^-?[0-9]+$/)
          ? new Lr(ua, Es(new mo(t)))
          : bi.throwArgumentError("invalid BigNumber string", "value", t);
      if (typeof t == "number")
        return (
          t % 1 && br("underflow", "BigNumber.from", t),
          (t >= nl || t <= -nl) && br("overflow", "BigNumber.from", t),
          Lr.from(String(t))
        );
      const r = t;
      if (typeof r == "bigint") return Lr.from(r.toString());
      if (Ln(r)) return Lr.from(Ht(r));
      if (r)
        if (r.toHexString) {
          const i = r.toHexString();
          if (typeof i == "string") return Lr.from(i);
        } else {
          let i = r._hex;
          if (
            (i == null && r.type === "BigNumber" && (i = r.hex),
            typeof i == "string" &&
              (fr(i) || (i[0] === "-" && fr(i.substring(1)))))
          )
            return Lr.from(i);
        }
      return bi.throwArgumentError("invalid BigNumber value", "value", t);
    }
    static isBigNumber(t) {
      return !!(t && t._isBigNumber);
    }
  };
function Es(e) {
  if (typeof e != "string") return Es(e.toString(16));
  if (e[0] === "-")
    return (
      (e = e.substring(1)),
      e[0] === "-" && bi.throwArgumentError("invalid hex", "value", e),
      (e = Es(e)),
      e === "0x00" ? e : "-" + e
    );
  if ((e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x")) return "0x00";
  for (
    e.length % 2 && (e = "0x0" + e.substring(2));
    e.length > 4 && e.substring(0, 4) === "0x00";

  )
    e = "0x" + e.substring(4);
  return e;
}
function er(e) {
  return Zt.from(Es(e));
}
function Ve(e) {
  const t = Zt.from(e).toHexString();
  return t[0] === "-"
    ? new mo("-" + t.substring(3), 16)
    : new mo(t.substring(2), 16);
}
function br(e, t, r) {
  const i = { fault: e, operation: t };
  return (
    r != null && (i.value = r), bi.throwError(e, Bt.errors.NUMERIC_FAULT, i)
  );
}
function Dv(e) {
  return new mo(e, 36).toString(16);
}
const Wt = new Bt(Vf),
  gs = {},
  Hf = Zt.from(0),
  Gf = Zt.from(-1);
function Wf(e, t, r, i) {
  const n = { fault: t, operation: r };
  return (
    i !== void 0 && (n.value = i), Wt.throwError(e, Bt.errors.NUMERIC_FAULT, n)
  );
}
let ps = "0";
for (; ps.length < 256; ) ps += ps;
function Fc(e) {
  if (typeof e != "number")
    try {
      e = Zt.from(e).toNumber();
    } catch (t) {}
  return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1)
    ? "1" + ps.substring(0, e)
    : Wt.throwArgumentError("invalid decimal size", "decimals", e);
}
function la(e, t) {
  t == null && (t = 0);
  const r = Fc(t);
  e = Zt.from(e);
  const i = e.lt(Hf);
  i && (e = e.mul(Gf));
  let n = e.mod(r).toString();
  for (; n.length < r.length - 1; ) n = "0" + n;
  n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const s = e.div(r).toString();
  return r.length === 1 ? (e = s) : (e = s + "." + n), i && (e = "-" + e), e;
}
function mi(e, t) {
  t == null && (t = 0);
  const r = Fc(t);
  (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) &&
    Wt.throwArgumentError("invalid decimal value", "value", e);
  const i = e.substring(0, 1) === "-";
  i && (e = e.substring(1)),
    e === "." && Wt.throwArgumentError("missing value", "value", e);
  const n = e.split(".");
  n.length > 2 && Wt.throwArgumentError("too many decimal points", "value", e);
  let s = n[0],
    o = n[1];
  for (s || (s = "0"), o || (o = "0"); o[o.length - 1] === "0"; )
    o = o.substring(0, o.length - 1);
  for (
    o.length > r.length - 1 &&
      Wf("fractional component exceeds decimals", "underflow", "parseFixed"),
      o === "" && (o = "0");
    o.length < r.length - 1;

  )
    o += "0";
  const c = Zt.from(s),
    l = Zt.from(o);
  let f = c.mul(r).add(l);
  return i && (f = f.mul(Gf)), f;
}
let ha = class Qa {
    constructor(t, r, i, n) {
      t !== gs &&
        Wt.throwError(
          "cannot use FixedFormat constructor; use FixedFormat.from",
          Bt.errors.UNSUPPORTED_OPERATION,
          { operation: "new FixedFormat" }
        ),
        (this.signed = r),
        (this.width = i),
        (this.decimals = n),
        (this.name = (r ? "" : "u") + "fixed" + String(i) + "x" + String(n)),
        (this._multiplier = Fc(n)),
        Object.freeze(this);
    }
    static from(t) {
      if (t instanceof Qa) return t;
      typeof t == "number" && (t = `fixed128x${t}`);
      let r = !0,
        i = 128,
        n = 18;
      if (typeof t == "string") {
        if (t !== "fixed")
          if (t === "ufixed") r = !1;
          else {
            const s = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            s || Wt.throwArgumentError("invalid fixed format", "format", t),
              (r = s[1] !== "u"),
              (i = parseInt(s[2])),
              (n = parseInt(s[3]));
          }
      } else if (t) {
        const s = (o, c, l) =>
          t[o] == null
            ? l
            : (typeof t[o] !== c &&
                Wt.throwArgumentError(
                  "invalid fixed format (" + o + " not " + c + ")",
                  "format." + o,
                  t[o]
                ),
              t[o]);
        (r = s("signed", "boolean", r)),
          (i = s("width", "number", i)),
          (n = s("decimals", "number", n));
      }
      return (
        i % 8 &&
          Wt.throwArgumentError(
            "invalid fixed format width (not byte aligned)",
            "format.width",
            i
          ),
        n > 80 &&
          Wt.throwArgumentError(
            "invalid fixed format (decimals too large)",
            "format.decimals",
            n
          ),
        new Qa(gs, r, i, n)
      );
    }
  },
  Qf = class Vt {
    constructor(t, r, i, n) {
      t !== gs &&
        Wt.throwError(
          "cannot use FixedNumber constructor; use FixedNumber.from",
          Bt.errors.UNSUPPORTED_OPERATION,
          { operation: "new FixedFormat" }
        ),
        (this.format = n),
        (this._hex = r),
        (this._value = i),
        (this._isFixedNumber = !0),
        Object.freeze(this);
    }
    _checkFormat(t) {
      this.format.name !== t.format.name &&
        Wt.throwArgumentError(
          "incompatible format; use fixedNumber.toFormat",
          "other",
          t
        );
    }
    addUnsafe(t) {
      this._checkFormat(t);
      const r = mi(this._value, this.format.decimals),
        i = mi(t._value, t.format.decimals);
      return Vt.fromValue(r.add(i), this.format.decimals, this.format);
    }
    subUnsafe(t) {
      this._checkFormat(t);
      const r = mi(this._value, this.format.decimals),
        i = mi(t._value, t.format.decimals);
      return Vt.fromValue(r.sub(i), this.format.decimals, this.format);
    }
    mulUnsafe(t) {
      this._checkFormat(t);
      const r = mi(this._value, this.format.decimals),
        i = mi(t._value, t.format.decimals);
      return Vt.fromValue(
        r.mul(i).div(this.format._multiplier),
        this.format.decimals,
        this.format
      );
    }
    divUnsafe(t) {
      this._checkFormat(t);
      const r = mi(this._value, this.format.decimals),
        i = mi(t._value, t.format.decimals);
      return Vt.fromValue(
        r.mul(this.format._multiplier).div(i),
        this.format.decimals,
        this.format
      );
    }
    floor() {
      const t = this.toString().split(".");
      t.length === 1 && t.push("0");
      let r = Vt.from(t[0], this.format);
      const i = !t[1].match(/^(0*)$/);
      return (
        this.isNegative() && i && (r = r.subUnsafe(ol.toFormat(r.format))), r
      );
    }
    ceiling() {
      const t = this.toString().split(".");
      t.length === 1 && t.push("0");
      let r = Vt.from(t[0], this.format);
      const i = !t[1].match(/^(0*)$/);
      return (
        !this.isNegative() && i && (r = r.addUnsafe(ol.toFormat(r.format))), r
      );
    }
    round(t) {
      t == null && (t = 0);
      const r = this.toString().split(".");
      if (
        (r.length === 1 && r.push("0"),
        (t < 0 || t > 80 || t % 1) &&
          Wt.throwArgumentError("invalid decimal count", "decimals", t),
        r[1].length <= t)
      )
        return this;
      const i = Vt.from("1" + ps.substring(0, t), this.format),
        n = xv.toFormat(this.format);
      return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i);
    }
    isZero() {
      return this._value === "0.0" || this._value === "0";
    }
    isNegative() {
      return this._value[0] === "-";
    }
    toString() {
      return this._value;
    }
    toHexString(t) {
      if (t == null) return this._hex;
      t % 8 && Wt.throwArgumentError("invalid byte width", "width", t);
      const r = Zt.from(this._hex)
        .fromTwos(this.format.width)
        .toTwos(t)
        .toHexString();
      return ui(r, t / 8);
    }
    toUnsafeFloat() {
      return parseFloat(this.toString());
    }
    toFormat(t) {
      return Vt.fromString(this._value, t);
    }
    static fromValue(t, r, i) {
      return (
        i == null && r != null && !Iv(r) && ((i = r), (r = null)),
        r == null && (r = 0),
        i == null && (i = "fixed"),
        Vt.fromString(la(t, r), ha.from(i))
      );
    }
    static fromString(t, r) {
      r == null && (r = "fixed");
      const i = ha.from(r),
        n = mi(t, i.decimals);
      !i.signed &&
        n.lt(Hf) &&
        Wf("unsigned value cannot be negative", "overflow", "value", t);
      let s = null;
      i.signed
        ? (s = n.toTwos(i.width).toHexString())
        : ((s = n.toHexString()), (s = ui(s, i.width / 8)));
      const o = la(n, i.decimals);
      return new Vt(gs, s, o, i);
    }
    static fromBytes(t, r) {
      r == null && (r = "fixed");
      const i = ha.from(r);
      if (yt(t).length > i.width / 8) throw new Error("overflow");
      let n = Zt.from(t);
      i.signed && (n = n.fromTwos(i.width));
      const s = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(),
        o = la(n, i.decimals);
      return new Vt(gs, s, o, i);
    }
    static from(t, r) {
      if (typeof t == "string") return Vt.fromString(t, r);
      if (Ln(t)) return Vt.fromBytes(t, r);
      try {
        return Vt.fromValue(t, 0, r);
      } catch (i) {
        if (i.code !== Bt.errors.INVALID_ARGUMENT) throw i;
      }
      return Wt.throwArgumentError("invalid FixedNumber value", "value", t);
    }
    static isFixedNumber(t) {
      return !!(t && t._isFixedNumber);
    }
  };
const ol = Qf.from(1),
  xv = Qf.from("0.5"),
  Cv = "strings/5.7.0",
  Tv = new Bt(Cv);
var yo;
(function (e) {
  (e.current = ""),
    (e.NFC = "NFC"),
    (e.NFD = "NFD"),
    (e.NFKC = "NFKC"),
    (e.NFKD = "NFKD");
})(yo || (yo = {}));
var al;
(function (e) {
  (e.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
    (e.BAD_PREFIX = "bad codepoint prefix"),
    (e.OVERRUN = "string overrun"),
    (e.MISSING_CONTINUE = "missing continuation byte"),
    (e.OUT_OF_RANGE = "out of UTF-8 range"),
    (e.UTF16_SURROGATE = "UTF-16 surrogate"),
    (e.OVERLONG = "overlong representation");
})(al || (al = {}));
function fa(e, t = yo.current) {
  t != yo.current && (Tv.checkNormalize(), (e = e.normalize(t)));
  let r = [];
  for (let i = 0; i < e.length; i++) {
    const n = e.charCodeAt(i);
    if (n < 128) r.push(n);
    else if (n < 2048) r.push((n >> 6) | 192), r.push((n & 63) | 128);
    else if ((n & 64512) == 55296) {
      i++;
      const s = e.charCodeAt(i);
      if (i >= e.length || (s & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const o = 65536 + ((n & 1023) << 10) + (s & 1023);
      r.push((o >> 18) | 240),
        r.push(((o >> 12) & 63) | 128),
        r.push(((o >> 6) & 63) | 128),
        r.push((o & 63) | 128);
    } else
      r.push((n >> 12) | 224),
        r.push(((n >> 6) & 63) | 128),
        r.push((n & 63) | 128);
  }
  return yt(r);
}
function Mv(e) {
  if (e.length % 4 !== 0) throw new Error("bad data");
  let t = [];
  for (let r = 0; r < e.length; r += 4)
    t.push(parseInt(e.substring(r, r + 4), 16));
  return t;
}
function da(e, t) {
  t ||
    (t = function (n) {
      return [parseInt(n, 16)];
    });
  let r = 0,
    i = {};
  return (
    e.split(",").forEach((n) => {
      let s = n.split(":");
      (r += parseInt(s[0], 16)), (i[r] = t(s[1]));
    }),
    i
  );
}
function cl(e) {
  let t = 0;
  return e.split(",").map((r) => {
    let i = r.split("-");
    i.length === 1 ? (i[1] = "0") : i[1] === "" && (i[1] = "1");
    let n = t + parseInt(i[0], 16);
    return (t = parseInt(i[1], 16)), { l: n, h: t };
  });
}
cl(
  "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
),
  "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
    .split(",")
    .map((e) => parseInt(e, 16)),
  da(
    "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
  ),
  da(
    "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
  ),
  da(
    "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
    Mv
  ),
  cl(
    "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
  );
function Nv(e) {
  e = atob(e);
  const t = [];
  for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
  return yt(t);
}
function Yf(e, t) {
  t == null && (t = 1);
  const r = [],
    i = r.forEach,
    n = function (s, o) {
      i.call(s, function (c) {
        o > 0 && Array.isArray(c) ? n(c, o - 1) : r.push(c);
      });
    };
  return n(e, t), r;
}
function Ov(e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    t[i[0]] = i[1];
  }
  return t;
}
function Rv(e) {
  let t = 0;
  function r() {
    return (e[t++] << 8) | e[t++];
  }
  let i = r(),
    n = 1,
    s = [0, 1];
  for (let j = 1; j < i; j++) s.push((n += r()));
  let o = r(),
    c = t;
  t += o;
  let l = 0,
    f = 0;
  function g() {
    return l == 0 && ((f = (f << 8) | e[t++]), (l = 8)), (f >> --l) & 1;
  }
  const w = 31,
    D = Math.pow(2, w),
    A = D >>> 1,
    M = A >> 1,
    K = D - 1;
  let q = 0;
  for (let j = 0; j < w; j++) q = (q << 1) | g();
  let Q = [],
    N = 0,
    H = D;
  for (;;) {
    let j = Math.floor(((q - N + 1) * n - 1) / H),
      k = 0,
      m = i;
    for (; m - k > 1; ) {
      let C = (k + m) >>> 1;
      j < s[C] ? (m = C) : (k = C);
    }
    if (k == 0) break;
    Q.push(k);
    let y = N + Math.floor((H * s[k]) / n),
      I = N + Math.floor((H * s[k + 1]) / n) - 1;
    for (; !((y ^ I) & A); )
      (q = ((q << 1) & K) | g()), (y = (y << 1) & K), (I = ((I << 1) & K) | 1);
    for (; y & ~I & M; )
      (q = (q & A) | ((q << 1) & (K >>> 1)) | g()),
        (y = (y << 1) ^ A),
        (I = ((I ^ A) << 1) | A | 1);
    (N = y), (H = 1 + I - y);
  }
  let L = i - 4;
  return Q.map((j) => {
    switch (j - L) {
      case 3:
        return L + 65792 + ((e[c++] << 16) | (e[c++] << 8) | e[c++]);
      case 2:
        return L + 256 + ((e[c++] << 8) | e[c++]);
      case 1:
        return L + e[c++];
      default:
        return j - 1;
    }
  });
}
function Pv(e) {
  let t = 0;
  return () => e[t++];
}
function Bv(e) {
  return Pv(Rv(e));
}
function Lv(e) {
  return e & 1 ? ~e >> 1 : e >> 1;
}
function Fv(e, t) {
  let r = Array(e);
  for (let i = 0; i < e; i++) r[i] = 1 + t();
  return r;
}
function ul(e, t) {
  let r = Array(e);
  for (let i = 0, n = -1; i < e; i++) r[i] = n += 1 + t();
  return r;
}
function $v(e, t) {
  let r = Array(e);
  for (let i = 0, n = 0; i < e; i++) r[i] = n += Lv(t());
  return r;
}
function wo(e, t) {
  let r = ul(e(), e),
    i = e(),
    n = ul(i, e),
    s = Fv(i, e);
  for (let o = 0; o < i; o++) for (let c = 0; c < s[o]; c++) r.push(n[o] + c);
  return t ? r.map((o) => t[o]) : r;
}
function Uv(e) {
  let t = [];
  for (;;) {
    let r = e();
    if (r == 0) break;
    t.push(qv(r, e));
  }
  for (;;) {
    let r = e() - 1;
    if (r < 0) break;
    t.push(jv(r, e));
  }
  return Ov(Yf(t));
}
function kv(e) {
  let t = [];
  for (;;) {
    let r = e();
    if (r == 0) break;
    t.push(r);
  }
  return t;
}
function Jf(e, t, r) {
  let i = Array(e)
    .fill(void 0)
    .map(() => []);
  for (let n = 0; n < t; n++) $v(e, r).forEach((s, o) => i[o].push(s));
  return i;
}
function qv(e, t) {
  let r = 1 + t(),
    i = t(),
    n = kv(t),
    s = Jf(n.length, 1 + e, t);
  return Yf(
    s.map((o, c) => {
      const l = o[0],
        f = o.slice(1);
      return Array(n[c])
        .fill(void 0)
        .map((g, w) => {
          let D = w * i;
          return [l + w * r, f.map((A) => A + D)];
        });
    })
  );
}
function jv(e, t) {
  let r = 1 + t();
  return Jf(r, 1 + e, t).map((i) => [i[0], i.slice(1)]);
}
function zv(e) {
  let t = wo(e).sort((i, n) => i - n);
  return r();
  function r() {
    let i = [];
    for (;;) {
      let f = wo(e, t);
      if (f.length == 0) break;
      i.push({ set: new Set(f), node: r() });
    }
    i.sort((f, g) => g.set.size - f.set.size);
    let n = e(),
      s = n % 3;
    n = (n / 3) | 0;
    let o = !!(n & 1);
    n >>= 1;
    let c = n == 1,
      l = n == 2;
    return { branches: i, valid: s, fe0f: o, save: c, check: l };
  }
}
function Kv() {
  return Bv(
    Nv(
      "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
    )
  );
}
const Ks = Kv();
new Set(wo(Ks)), new Set(wo(Ks)), Uv(Ks), zv(Ks);
const Vv = new Uint8Array(32);
Vv.fill(0);
const Hv = `Ethereum Signed Message:
`;
function Xf(e) {
  return (
    typeof e == "string" && (e = fa(e)),
    Lc(vv([fa(Hv), fa(String(e.length)), e]))
  );
}
const Gv = "address/5.7.0",
  hs = new Bt(Gv);
function ll(e) {
  fr(e, 20) || hs.throwArgumentError("invalid address", "address", e),
    (e = e.toLowerCase());
  const t = e.substring(2).split(""),
    r = new Uint8Array(40);
  for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
  const i = yt(Lc(r));
  for (let n = 0; n < 40; n += 2)
    i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()),
      (i[n >> 1] & 15) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
  return "0x" + t.join("");
}
const Wv = 9007199254740991;
function Qv(e) {
  return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
}
const $c = {};
for (let e = 0; e < 10; e++) $c[String(e)] = String(e);
for (let e = 0; e < 26; e++) $c[String.fromCharCode(65 + e)] = String(10 + e);
const hl = Math.floor(Qv(Wv));
function Yv(e) {
  (e = e.toUpperCase()), (e = e.substring(4) + e.substring(0, 2) + "00");
  let t = e
    .split("")
    .map((i) => $c[i])
    .join("");
  for (; t.length >= hl; ) {
    let i = t.substring(0, hl);
    t = (parseInt(i, 10) % 97) + t.substring(i.length);
  }
  let r = String(98 - (parseInt(t, 10) % 97));
  for (; r.length < 2; ) r = "0" + r;
  return r;
}
function Jv(e) {
  let t = null;
  if (
    (typeof e != "string" &&
      hs.throwArgumentError("invalid address", "address", e),
    e.match(/^(0x)?[0-9a-fA-F]{40}$/))
  )
    e.substring(0, 2) !== "0x" && (e = "0x" + e),
      (t = ll(e)),
      e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        t !== e &&
        hs.throwArgumentError("bad address checksum", "address", e);
  else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      e.substring(2, 4) !== Yv(e) &&
        hs.throwArgumentError("bad icap checksum", "address", e),
        t = Dv(e.substring(4));
      t.length < 40;

    )
      t = "0" + t;
    t = ll("0x" + t);
  } else hs.throwArgumentError("invalid address", "address", e);
  return t;
}
function rs(e, t, r) {
  Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
}
const Xv = new Uint8Array(32);
Xv.fill(0), Zt.from(-1);
const Zv = Zt.from(0),
  eb = Zt.from(1);
Zt.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
  ui(eb.toHexString(), 32),
  ui(Zv.toHexString(), 32);
var Zr = {},
  He = {},
  Os = Zf;
function Zf(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
Zf.equal = function (e, t, r) {
  if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t);
};
var Ya = { exports: {} };
typeof Object.create == "function"
  ? (Ya.exports = function (e, t) {
      t &&
        ((e.super_ = t),
        (e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (Ya.exports = function (e, t) {
      if (t) {
        e.super_ = t;
        var r = function () {};
        (r.prototype = t.prototype),
          (e.prototype = new r()),
          (e.prototype.constructor = e);
      }
    });
var tb = Os,
  rb = Ya.exports;
He.inherits = rb;
function ib(e, t) {
  return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length
    ? !1
    : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function nb(e, t) {
  if (Array.isArray(e)) return e.slice();
  if (!e) return [];
  var r = [];
  if (typeof e == "string")
    if (t) {
      if (t === "hex")
        for (
          e = e.replace(/[^a-z0-9]+/gi, ""),
            e.length % 2 !== 0 && (e = "0" + e),
            n = 0;
          n < e.length;
          n += 2
        )
          r.push(parseInt(e[n] + e[n + 1], 16));
    } else
      for (var i = 0, n = 0; n < e.length; n++) {
        var s = e.charCodeAt(n);
        s < 128
          ? (r[i++] = s)
          : s < 2048
          ? ((r[i++] = (s >> 6) | 192), (r[i++] = (s & 63) | 128))
          : ib(e, n)
          ? ((s = 65536 + ((s & 1023) << 10) + (e.charCodeAt(++n) & 1023)),
            (r[i++] = (s >> 18) | 240),
            (r[i++] = ((s >> 12) & 63) | 128),
            (r[i++] = ((s >> 6) & 63) | 128),
            (r[i++] = (s & 63) | 128))
          : ((r[i++] = (s >> 12) | 224),
            (r[i++] = ((s >> 6) & 63) | 128),
            (r[i++] = (s & 63) | 128));
      }
  else for (n = 0; n < e.length; n++) r[n] = e[n] | 0;
  return r;
}
He.toArray = nb;
function sb(e) {
  for (var t = "", r = 0; r < e.length; r++) t += td(e[r].toString(16));
  return t;
}
He.toHex = sb;
function ed(e) {
  var t =
    (e >>> 24) |
    ((e >>> 8) & 65280) |
    ((e << 8) & 16711680) |
    ((e & 255) << 24);
  return t >>> 0;
}
He.htonl = ed;
function ob(e, t) {
  for (var r = "", i = 0; i < e.length; i++) {
    var n = e[i];
    t === "little" && (n = ed(n)), (r += rd(n.toString(16)));
  }
  return r;
}
He.toHex32 = ob;
function td(e) {
  return e.length === 1 ? "0" + e : e;
}
He.zero2 = td;
function rd(e) {
  return e.length === 7
    ? "0" + e
    : e.length === 6
    ? "00" + e
    : e.length === 5
    ? "000" + e
    : e.length === 4
    ? "0000" + e
    : e.length === 3
    ? "00000" + e
    : e.length === 2
    ? "000000" + e
    : e.length === 1
    ? "0000000" + e
    : e;
}
He.zero8 = rd;
function ab(e, t, r, i) {
  var n = r - t;
  tb(n % 4 === 0);
  for (var s = new Array(n / 4), o = 0, c = t; o < s.length; o++, c += 4) {
    var l;
    i === "big"
      ? (l = (e[c] << 24) | (e[c + 1] << 16) | (e[c + 2] << 8) | e[c + 3])
      : (l = (e[c + 3] << 24) | (e[c + 2] << 16) | (e[c + 1] << 8) | e[c]),
      (s[o] = l >>> 0);
  }
  return s;
}
He.join32 = ab;
function cb(e, t) {
  for (
    var r = new Array(e.length * 4), i = 0, n = 0;
    i < e.length;
    i++, n += 4
  ) {
    var s = e[i];
    t === "big"
      ? ((r[n] = s >>> 24),
        (r[n + 1] = (s >>> 16) & 255),
        (r[n + 2] = (s >>> 8) & 255),
        (r[n + 3] = s & 255))
      : ((r[n + 3] = s >>> 24),
        (r[n + 2] = (s >>> 16) & 255),
        (r[n + 1] = (s >>> 8) & 255),
        (r[n] = s & 255));
  }
  return r;
}
He.split32 = cb;
function ub(e, t) {
  return (e >>> t) | (e << (32 - t));
}
He.rotr32 = ub;
function lb(e, t) {
  return (e << t) | (e >>> (32 - t));
}
He.rotl32 = lb;
function hb(e, t) {
  return (e + t) >>> 0;
}
He.sum32 = hb;
function fb(e, t, r) {
  return (e + t + r) >>> 0;
}
He.sum32_3 = fb;
function db(e, t, r, i) {
  return (e + t + r + i) >>> 0;
}
He.sum32_4 = db;
function gb(e, t, r, i, n) {
  return (e + t + r + i + n) >>> 0;
}
He.sum32_5 = gb;
function pb(e, t, r, i) {
  var n = e[t],
    s = e[t + 1],
    o = (i + s) >>> 0,
    c = (o < i ? 1 : 0) + r + n;
  (e[t] = c >>> 0), (e[t + 1] = o);
}
He.sum64 = pb;
function mb(e, t, r, i) {
  var n = (t + i) >>> 0,
    s = (n < t ? 1 : 0) + e + r;
  return s >>> 0;
}
He.sum64_hi = mb;
function yb(e, t, r, i) {
  var n = t + i;
  return n >>> 0;
}
He.sum64_lo = yb;
function wb(e, t, r, i, n, s, o, c) {
  var l = 0,
    f = t;
  (f = (f + i) >>> 0),
    (l += f < t ? 1 : 0),
    (f = (f + s) >>> 0),
    (l += f < s ? 1 : 0),
    (f = (f + c) >>> 0),
    (l += f < c ? 1 : 0);
  var g = e + r + n + o + l;
  return g >>> 0;
}
He.sum64_4_hi = wb;
function vb(e, t, r, i, n, s, o, c) {
  var l = t + i + s + c;
  return l >>> 0;
}
He.sum64_4_lo = vb;
function bb(e, t, r, i, n, s, o, c, l, f) {
  var g = 0,
    w = t;
  (w = (w + i) >>> 0),
    (g += w < t ? 1 : 0),
    (w = (w + s) >>> 0),
    (g += w < s ? 1 : 0),
    (w = (w + c) >>> 0),
    (g += w < c ? 1 : 0),
    (w = (w + f) >>> 0),
    (g += w < f ? 1 : 0);
  var D = e + r + n + o + l + g;
  return D >>> 0;
}
He.sum64_5_hi = bb;
function _b(e, t, r, i, n, s, o, c, l, f) {
  var g = t + i + s + c + f;
  return g >>> 0;
}
He.sum64_5_lo = _b;
function Eb(e, t, r) {
  var i = (t << (32 - r)) | (e >>> r);
  return i >>> 0;
}
He.rotr64_hi = Eb;
function Ab(e, t, r) {
  var i = (e << (32 - r)) | (t >>> r);
  return i >>> 0;
}
He.rotr64_lo = Ab;
function Sb(e, t, r) {
  return e >>> r;
}
He.shr64_hi = Sb;
function Ib(e, t, r) {
  var i = (e << (32 - r)) | (t >>> r);
  return i >>> 0;
}
He.shr64_lo = Ib;
var Fn = {},
  fl = He,
  Db = Os;
function Vs() {
  (this.pending = null),
    (this.pendingTotal = 0),
    (this.blockSize = this.constructor.blockSize),
    (this.outSize = this.constructor.outSize),
    (this.hmacStrength = this.constructor.hmacStrength),
    (this.padLength = this.constructor.padLength / 8),
    (this.endian = "big"),
    (this._delta8 = this.blockSize / 8),
    (this._delta32 = this.blockSize / 32);
}
(Fn.BlockHash = Vs),
  (Vs.prototype.update = function (e, t) {
    if (
      ((e = fl.toArray(e, t)),
      this.pending
        ? (this.pending = this.pending.concat(e))
        : (this.pending = e),
      (this.pendingTotal += e.length),
      this.pending.length >= this._delta8)
    ) {
      e = this.pending;
      var r = e.length % this._delta8;
      (this.pending = e.slice(e.length - r, e.length)),
        this.pending.length === 0 && (this.pending = null),
        (e = fl.join32(e, 0, e.length - r, this.endian));
      for (var i = 0; i < e.length; i += this._delta32)
        this._update(e, i, i + this._delta32);
    }
    return this;
  }),
  (Vs.prototype.digest = function (e) {
    return this.update(this._pad()), Db(this.pending === null), this._digest(e);
  }),
  (Vs.prototype._pad = function () {
    var e = this.pendingTotal,
      t = this._delta8,
      r = t - ((e + this.padLength) % t),
      i = new Array(r + this.padLength);
    i[0] = 128;
    for (var n = 1; n < r; n++) i[n] = 0;
    if (((e <<= 3), this.endian === "big")) {
      for (var s = 8; s < this.padLength; s++) i[n++] = 0;
      (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = (e >>> 24) & 255),
        (i[n++] = (e >>> 16) & 255),
        (i[n++] = (e >>> 8) & 255),
        (i[n++] = e & 255);
    } else
      for (
        i[n++] = e & 255,
          i[n++] = (e >>> 8) & 255,
          i[n++] = (e >>> 16) & 255,
          i[n++] = (e >>> 24) & 255,
          i[n++] = 0,
          i[n++] = 0,
          i[n++] = 0,
          i[n++] = 0,
          s = 8;
        s < this.padLength;
        s++
      )
        i[n++] = 0;
    return i;
  });
var wn = {},
  di = {},
  xb = He,
  li = xb.rotr32;
function Cb(e, t, r, i) {
  if (e === 0) return id(t, r, i);
  if (e === 1 || e === 3) return sd(t, r, i);
  if (e === 2) return nd(t, r, i);
}
di.ft_1 = Cb;
function id(e, t, r) {
  return (e & t) ^ (~e & r);
}
di.ch32 = id;
function nd(e, t, r) {
  return (e & t) ^ (e & r) ^ (t & r);
}
di.maj32 = nd;
function sd(e, t, r) {
  return e ^ t ^ r;
}
di.p32 = sd;
function Tb(e) {
  return li(e, 2) ^ li(e, 13) ^ li(e, 22);
}
di.s0_256 = Tb;
function Mb(e) {
  return li(e, 6) ^ li(e, 11) ^ li(e, 25);
}
di.s1_256 = Mb;
function Nb(e) {
  return li(e, 7) ^ li(e, 18) ^ (e >>> 3);
}
di.g0_256 = Nb;
function Ob(e) {
  return li(e, 17) ^ li(e, 19) ^ (e >>> 10);
}
di.g1_256 = Ob;
var xn = He,
  Rb = Fn,
  Pb = di,
  ga = xn.rotl32,
  is = xn.sum32,
  Bb = xn.sum32_5,
  Lb = Pb.ft_1,
  od = Rb.BlockHash,
  Fb = [1518500249, 1859775393, 2400959708, 3395469782];
function ni() {
  if (!(this instanceof ni)) return new ni();
  od.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.W = new Array(80));
}
xn.inherits(ni, od);
var $b = ni;
(ni.blockSize = 512),
  (ni.outSize = 160),
  (ni.hmacStrength = 80),
  (ni.padLength = 64),
  (ni.prototype._update = function (e, t) {
    for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
    for (; i < r.length; i++)
      r[i] = ga(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
    var n = this.h[0],
      s = this.h[1],
      o = this.h[2],
      c = this.h[3],
      l = this.h[4];
    for (i = 0; i < r.length; i++) {
      var f = ~~(i / 20),
        g = Bb(ga(n, 5), Lb(f, s, o, c), l, r[i], Fb[f]);
      (l = c), (c = o), (o = ga(s, 30)), (s = n), (n = g);
    }
    (this.h[0] = is(this.h[0], n)),
      (this.h[1] = is(this.h[1], s)),
      (this.h[2] = is(this.h[2], o)),
      (this.h[3] = is(this.h[3], c)),
      (this.h[4] = is(this.h[4], l));
  }),
  (ni.prototype._digest = function (e) {
    return e === "hex" ? xn.toHex32(this.h, "big") : xn.split32(this.h, "big");
  });
var Cn = He,
  Ub = Fn,
  $n = di,
  kb = Os,
  Rr = Cn.sum32,
  qb = Cn.sum32_4,
  jb = Cn.sum32_5,
  zb = $n.ch32,
  Kb = $n.maj32,
  Vb = $n.s0_256,
  Hb = $n.s1_256,
  Gb = $n.g0_256,
  Wb = $n.g1_256,
  ad = Ub.BlockHash,
  Qb = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
function si() {
  if (!(this instanceof si)) return new si();
  ad.call(this),
    (this.h = [
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    (this.k = Qb),
    (this.W = new Array(64));
}
Cn.inherits(si, ad);
var cd = si;
(si.blockSize = 512),
  (si.outSize = 256),
  (si.hmacStrength = 192),
  (si.padLength = 64),
  (si.prototype._update = function (e, t) {
    for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
    for (; i < r.length; i++)
      r[i] = qb(Wb(r[i - 2]), r[i - 7], Gb(r[i - 15]), r[i - 16]);
    var n = this.h[0],
      s = this.h[1],
      o = this.h[2],
      c = this.h[3],
      l = this.h[4],
      f = this.h[5],
      g = this.h[6],
      w = this.h[7];
    for (kb(this.k.length === r.length), i = 0; i < r.length; i++) {
      var D = jb(w, Hb(l), zb(l, f, g), this.k[i], r[i]),
        A = Rr(Vb(n), Kb(n, s, o));
      (w = g),
        (g = f),
        (f = l),
        (l = Rr(c, D)),
        (c = o),
        (o = s),
        (s = n),
        (n = Rr(D, A));
    }
    (this.h[0] = Rr(this.h[0], n)),
      (this.h[1] = Rr(this.h[1], s)),
      (this.h[2] = Rr(this.h[2], o)),
      (this.h[3] = Rr(this.h[3], c)),
      (this.h[4] = Rr(this.h[4], l)),
      (this.h[5] = Rr(this.h[5], f)),
      (this.h[6] = Rr(this.h[6], g)),
      (this.h[7] = Rr(this.h[7], w));
  }),
  (si.prototype._digest = function (e) {
    return e === "hex" ? Cn.toHex32(this.h, "big") : Cn.split32(this.h, "big");
  });
var Ja = He,
  ud = cd;
function Ei() {
  if (!(this instanceof Ei)) return new Ei();
  ud.call(this),
    (this.h = [
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ]);
}
Ja.inherits(Ei, ud);
var Yb = Ei;
(Ei.blockSize = 512),
  (Ei.outSize = 224),
  (Ei.hmacStrength = 192),
  (Ei.padLength = 64),
  (Ei.prototype._digest = function (e) {
    return e === "hex"
      ? Ja.toHex32(this.h.slice(0, 7), "big")
      : Ja.split32(this.h.slice(0, 7), "big");
  });
var or = He,
  Jb = Fn,
  Xb = Os,
  hi = or.rotr64_hi,
  fi = or.rotr64_lo,
  ld = or.shr64_hi,
  hd = or.shr64_lo,
  Ti = or.sum64,
  pa = or.sum64_hi,
  ma = or.sum64_lo,
  Zb = or.sum64_4_hi,
  e2 = or.sum64_4_lo,
  t2 = or.sum64_5_hi,
  r2 = or.sum64_5_lo,
  fd = Jb.BlockHash,
  i2 = [
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ];
function $r() {
  if (!(this instanceof $r)) return new $r();
  fd.call(this),
    (this.h = [
      1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
      2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
      528734635, 4215389547, 1541459225, 327033209,
    ]),
    (this.k = i2),
    (this.W = new Array(160));
}
or.inherits($r, fd);
var dd = $r;
($r.blockSize = 1024),
  ($r.outSize = 512),
  ($r.hmacStrength = 192),
  ($r.padLength = 128),
  ($r.prototype._prepareBlock = function (e, t) {
    for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i];
    for (; i < r.length; i += 2) {
      var n = g2(r[i - 4], r[i - 3]),
        s = p2(r[i - 4], r[i - 3]),
        o = r[i - 14],
        c = r[i - 13],
        l = f2(r[i - 30], r[i - 29]),
        f = d2(r[i - 30], r[i - 29]),
        g = r[i - 32],
        w = r[i - 31];
      (r[i] = Zb(n, s, o, c, l, f, g, w)),
        (r[i + 1] = e2(n, s, o, c, l, f, g, w));
    }
  }),
  ($r.prototype._update = function (e, t) {
    this._prepareBlock(e, t);
    var r = this.W,
      i = this.h[0],
      n = this.h[1],
      s = this.h[2],
      o = this.h[3],
      c = this.h[4],
      l = this.h[5],
      f = this.h[6],
      g = this.h[7],
      w = this.h[8],
      D = this.h[9],
      A = this.h[10],
      M = this.h[11],
      K = this.h[12],
      q = this.h[13],
      Q = this.h[14],
      N = this.h[15];
    Xb(this.k.length === r.length);
    for (var H = 0; H < r.length; H += 2) {
      var L = Q,
        j = N,
        k = l2(w, D),
        m = h2(w, D),
        y = n2(w, D, A, M, K),
        I = s2(w, D, A, M, K, q),
        C = this.k[H],
        B = this.k[H + 1],
        U = r[H],
        a = r[H + 1],
        u = t2(L, j, k, m, y, I, C, B, U, a),
        h = r2(L, j, k, m, y, I, C, B, U, a);
      (L = c2(i, n)),
        (j = u2(i, n)),
        (k = o2(i, n, s, o, c)),
        (m = a2(i, n, s, o, c, l));
      var v = pa(L, j, k, m),
        _ = ma(L, j, k, m);
      (Q = K),
        (N = q),
        (K = A),
        (q = M),
        (A = w),
        (M = D),
        (w = pa(f, g, u, h)),
        (D = ma(g, g, u, h)),
        (f = c),
        (g = l),
        (c = s),
        (l = o),
        (s = i),
        (o = n),
        (i = pa(u, h, v, _)),
        (n = ma(u, h, v, _));
    }
    Ti(this.h, 0, i, n),
      Ti(this.h, 2, s, o),
      Ti(this.h, 4, c, l),
      Ti(this.h, 6, f, g),
      Ti(this.h, 8, w, D),
      Ti(this.h, 10, A, M),
      Ti(this.h, 12, K, q),
      Ti(this.h, 14, Q, N);
  }),
  ($r.prototype._digest = function (e) {
    return e === "hex" ? or.toHex32(this.h, "big") : or.split32(this.h, "big");
  });
function n2(e, t, r, i, n) {
  var s = (e & r) ^ (~e & n);
  return s < 0 && (s += 4294967296), s;
}
function s2(e, t, r, i, n, s) {
  var o = (t & i) ^ (~t & s);
  return o < 0 && (o += 4294967296), o;
}
function o2(e, t, r, i, n) {
  var s = (e & r) ^ (e & n) ^ (r & n);
  return s < 0 && (s += 4294967296), s;
}
function a2(e, t, r, i, n, s) {
  var o = (t & i) ^ (t & s) ^ (i & s);
  return o < 0 && (o += 4294967296), o;
}
function c2(e, t) {
  var r = hi(e, t, 28),
    i = hi(t, e, 2),
    n = hi(t, e, 7),
    s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function u2(e, t) {
  var r = fi(e, t, 28),
    i = fi(t, e, 2),
    n = fi(t, e, 7),
    s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function l2(e, t) {
  var r = hi(e, t, 14),
    i = hi(e, t, 18),
    n = hi(t, e, 9),
    s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function h2(e, t) {
  var r = fi(e, t, 14),
    i = fi(e, t, 18),
    n = fi(t, e, 9),
    s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function f2(e, t) {
  var r = hi(e, t, 1),
    i = hi(e, t, 8),
    n = ld(e, t, 7),
    s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function d2(e, t) {
  var r = fi(e, t, 1),
    i = fi(e, t, 8),
    n = hd(e, t, 7),
    s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function g2(e, t) {
  var r = hi(e, t, 19),
    i = hi(t, e, 29),
    n = ld(e, t, 6),
    s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function p2(e, t) {
  var r = fi(e, t, 19),
    i = fi(t, e, 29),
    n = hd(e, t, 6),
    s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
var Xa = He,
  gd = dd;
function Ai() {
  if (!(this instanceof Ai)) return new Ai();
  gd.call(this),
    (this.h = [
      3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
      355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
      3675008525, 1694076839, 1203062813, 3204075428,
    ]);
}
Xa.inherits(Ai, gd);
var m2 = Ai;
(Ai.blockSize = 1024),
  (Ai.outSize = 384),
  (Ai.hmacStrength = 192),
  (Ai.padLength = 128),
  (Ai.prototype._digest = function (e) {
    return e === "hex"
      ? Xa.toHex32(this.h.slice(0, 12), "big")
      : Xa.split32(this.h.slice(0, 12), "big");
  }),
  (wn.sha1 = $b),
  (wn.sha224 = Yb),
  (wn.sha256 = cd),
  (wn.sha384 = m2),
  (wn.sha512 = dd);
var pd = {},
  en = He,
  y2 = Fn,
  Hs = en.rotl32,
  dl = en.sum32,
  ns = en.sum32_3,
  gl = en.sum32_4,
  md = y2.BlockHash;
function ei() {
  if (!(this instanceof ei)) return new ei();
  md.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.endian = "little");
}
en.inherits(ei, md),
  (pd.ripemd160 = ei),
  (ei.blockSize = 512),
  (ei.outSize = 160),
  (ei.hmacStrength = 192),
  (ei.padLength = 64),
  (ei.prototype._update = function (e, t) {
    for (
      var r = this.h[0],
        i = this.h[1],
        n = this.h[2],
        s = this.h[3],
        o = this.h[4],
        c = r,
        l = i,
        f = n,
        g = s,
        w = o,
        D = 0;
      D < 80;
      D++
    ) {
      var A = dl(Hs(gl(r, pl(D, i, n, s), e[b2[D] + t], w2(D)), E2[D]), o);
      (r = o),
        (o = s),
        (s = Hs(n, 10)),
        (n = i),
        (i = A),
        (A = dl(Hs(gl(c, pl(79 - D, l, f, g), e[_2[D] + t], v2(D)), A2[D]), w)),
        (c = w),
        (w = g),
        (g = Hs(f, 10)),
        (f = l),
        (l = A);
    }
    (A = ns(this.h[1], n, g)),
      (this.h[1] = ns(this.h[2], s, w)),
      (this.h[2] = ns(this.h[3], o, c)),
      (this.h[3] = ns(this.h[4], r, l)),
      (this.h[4] = ns(this.h[0], i, f)),
      (this.h[0] = A);
  }),
  (ei.prototype._digest = function (e) {
    return e === "hex"
      ? en.toHex32(this.h, "little")
      : en.split32(this.h, "little");
  });
function pl(e, t, r, i) {
  return e <= 15
    ? t ^ r ^ i
    : e <= 31
    ? (t & r) | (~t & i)
    : e <= 47
    ? (t | ~r) ^ i
    : e <= 63
    ? (t & i) | (r & ~i)
    : t ^ (r | ~i);
}
function w2(e) {
  return e <= 15
    ? 0
    : e <= 31
    ? 1518500249
    : e <= 47
    ? 1859775393
    : e <= 63
    ? 2400959708
    : 2840853838;
}
function v2(e) {
  return e <= 15
    ? 1352829926
    : e <= 31
    ? 1548603684
    : e <= 47
    ? 1836072691
    : e <= 63
    ? 2053994217
    : 0;
}
var b2 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
    15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
    11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9,
    7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
  ],
  _2 = [
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
    10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
    0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10,
    4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
  ],
  E2 = [
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9,
    7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13,
    6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
    15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
  ],
  A2 = [
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
    9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
    13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
    12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
  ],
  S2 = He,
  I2 = Os;
function In(e, t, r) {
  if (!(this instanceof In)) return new In(e, t, r);
  (this.Hash = e),
    (this.blockSize = e.blockSize / 8),
    (this.outSize = e.outSize / 8),
    (this.inner = null),
    (this.outer = null),
    this._init(S2.toArray(t, r));
}
var D2 = In;
(In.prototype._init = function (e) {
  e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
    I2(e.length <= this.blockSize);
  for (var t = e.length; t < this.blockSize; t++) e.push(0);
  for (t = 0; t < e.length; t++) e[t] ^= 54;
  for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
    e[t] ^= 106;
  this.outer = new this.Hash().update(e);
}),
  (In.prototype.update = function (e, t) {
    return this.inner.update(e, t), this;
  }),
  (In.prototype.digest = function (e) {
    return this.outer.update(this.inner.digest()), this.outer.digest(e);
  }),
  (function (e) {
    var t = e;
    (t.utils = He),
      (t.common = Fn),
      (t.sha = wn),
      (t.ripemd = pd),
      (t.hmac = D2),
      (t.sha1 = t.sha.sha1),
      (t.sha256 = t.sha.sha256),
      (t.sha224 = t.sha.sha224),
      (t.sha384 = t.sha.sha384),
      (t.sha512 = t.sha.sha512),
      (t.ripemd160 = t.ripemd.ripemd160);
  })(Zr);
function Un(e, t, r) {
  return (
    (r = {
      path: t,
      exports: {},
      require: function (i, n) {
        return x2(i, n != null ? n : r.path);
      },
    }),
    e(r, r.exports),
    r.exports
  );
}
function x2() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
var Uc = yd;
function yd(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
yd.equal = function (e, t, r) {
  if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t);
};
var qr = Un(function (e, t) {
    var r = t;
    function i(o, c) {
      if (Array.isArray(o)) return o.slice();
      if (!o) return [];
      var l = [];
      if (typeof o != "string") {
        for (var f = 0; f < o.length; f++) l[f] = o[f] | 0;
        return l;
      }
      if (c === "hex") {
        (o = o.replace(/[^a-z0-9]+/gi, "")),
          o.length % 2 !== 0 && (o = "0" + o);
        for (var f = 0; f < o.length; f += 2)
          l.push(parseInt(o[f] + o[f + 1], 16));
      } else
        for (var f = 0; f < o.length; f++) {
          var g = o.charCodeAt(f),
            w = g >> 8,
            D = g & 255;
          w ? l.push(w, D) : l.push(D);
        }
      return l;
    }
    r.toArray = i;
    function n(o) {
      return o.length === 1 ? "0" + o : o;
    }
    r.zero2 = n;
    function s(o) {
      for (var c = "", l = 0; l < o.length; l++) c += n(o[l].toString(16));
      return c;
    }
    (r.toHex = s),
      (r.encode = function (o, c) {
        return c === "hex" ? s(o) : o;
      });
  }),
  gr = Un(function (e, t) {
    var r = t;
    (r.assert = Uc),
      (r.toArray = qr.toArray),
      (r.zero2 = qr.zero2),
      (r.toHex = qr.toHex),
      (r.encode = qr.encode);
    function i(l, f, g) {
      var w = new Array(Math.max(l.bitLength(), g) + 1);
      w.fill(0);
      for (var D = 1 << (f + 1), A = l.clone(), M = 0; M < w.length; M++) {
        var K,
          q = A.andln(D - 1);
        A.isOdd()
          ? (q > (D >> 1) - 1 ? (K = (D >> 1) - q) : (K = q), A.isubn(K))
          : (K = 0),
          (w[M] = K),
          A.iushrn(1);
      }
      return w;
    }
    r.getNAF = i;
    function n(l, f) {
      var g = [[], []];
      (l = l.clone()), (f = f.clone());
      for (var w = 0, D = 0, A; l.cmpn(-w) > 0 || f.cmpn(-D) > 0; ) {
        var M = (l.andln(3) + w) & 3,
          K = (f.andln(3) + D) & 3;
        M === 3 && (M = -1), K === 3 && (K = -1);
        var q;
        M & 1
          ? ((A = (l.andln(7) + w) & 7),
            (A === 3 || A === 5) && K === 2 ? (q = -M) : (q = M))
          : (q = 0),
          g[0].push(q);
        var Q;
        K & 1
          ? ((A = (f.andln(7) + D) & 7),
            (A === 3 || A === 5) && M === 2 ? (Q = -K) : (Q = K))
          : (Q = 0),
          g[1].push(Q),
          2 * w === q + 1 && (w = 1 - w),
          2 * D === Q + 1 && (D = 1 - D),
          l.iushrn(1),
          f.iushrn(1);
      }
      return g;
    }
    r.getJSF = n;
    function s(l, f, g) {
      var w = "_" + f;
      l.prototype[f] = function () {
        return this[w] !== void 0 ? this[w] : (this[w] = g.call(this));
      };
    }
    r.cachedProperty = s;
    function o(l) {
      return typeof l == "string" ? r.toArray(l, "hex") : l;
    }
    r.parseBytes = o;
    function c(l) {
      return new Ue(l, "hex", "le");
    }
    r.intFromLE = c;
  }),
  Gs = gr.getNAF,
  C2 = gr.getJSF,
  vo = gr.assert;
function Pi(e, t) {
  (this.type = e),
    (this.p = new Ue(t.p, 16)),
    (this.red = t.prime ? Ue.red(t.prime) : Ue.mont(this.p)),
    (this.zero = new Ue(0).toRed(this.red)),
    (this.one = new Ue(1).toRed(this.red)),
    (this.two = new Ue(2).toRed(this.red)),
    (this.n = t.n && new Ue(t.n, 16)),
    (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
    (this._wnafT1 = new Array(4)),
    (this._wnafT2 = new Array(4)),
    (this._wnafT3 = new Array(4)),
    (this._wnafT4 = new Array(4)),
    (this._bitLength = this.n ? this.n.bitLength() : 0);
  var r = this.n && this.p.div(this.n);
  !r || r.cmpn(100) > 0
    ? (this.redN = null)
    : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
var cn = Pi;
(Pi.prototype.point = function () {
  throw new Error("Not implemented");
}),
  (Pi.prototype.validate = function () {
    throw new Error("Not implemented");
  }),
  (Pi.prototype._fixedNafMul = function (e, t) {
    vo(e.precomputed);
    var r = e._getDoubles(),
      i = Gs(t, 1, this._bitLength),
      n = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
    n /= 3;
    var s = [],
      o,
      c;
    for (o = 0; o < i.length; o += r.step) {
      c = 0;
      for (var l = o + r.step - 1; l >= o; l--) c = (c << 1) + i[l];
      s.push(c);
    }
    for (
      var f = this.jpoint(null, null, null),
        g = this.jpoint(null, null, null),
        w = n;
      w > 0;
      w--
    ) {
      for (o = 0; o < s.length; o++)
        (c = s[o]),
          c === w
            ? (g = g.mixedAdd(r.points[o]))
            : c === -w && (g = g.mixedAdd(r.points[o].neg()));
      f = f.add(g);
    }
    return f.toP();
  }),
  (Pi.prototype._wnafMul = function (e, t) {
    var r = 4,
      i = e._getNAFPoints(r);
    r = i.wnd;
    for (
      var n = i.points,
        s = Gs(t, r, this._bitLength),
        o = this.jpoint(null, null, null),
        c = s.length - 1;
      c >= 0;
      c--
    ) {
      for (var l = 0; c >= 0 && s[c] === 0; c--) l++;
      if ((c >= 0 && l++, (o = o.dblp(l)), c < 0)) break;
      var f = s[c];
      vo(f !== 0),
        e.type === "affine"
          ? f > 0
            ? (o = o.mixedAdd(n[(f - 1) >> 1]))
            : (o = o.mixedAdd(n[(-f - 1) >> 1].neg()))
          : f > 0
          ? (o = o.add(n[(f - 1) >> 1]))
          : (o = o.add(n[(-f - 1) >> 1].neg()));
    }
    return e.type === "affine" ? o.toP() : o;
  }),
  (Pi.prototype._wnafMulAdd = function (e, t, r, i, n) {
    var s = this._wnafT1,
      o = this._wnafT2,
      c = this._wnafT3,
      l = 0,
      f,
      g,
      w;
    for (f = 0; f < i; f++) {
      w = t[f];
      var D = w._getNAFPoints(e);
      (s[f] = D.wnd), (o[f] = D.points);
    }
    for (f = i - 1; f >= 1; f -= 2) {
      var A = f - 1,
        M = f;
      if (s[A] !== 1 || s[M] !== 1) {
        (c[A] = Gs(r[A], s[A], this._bitLength)),
          (c[M] = Gs(r[M], s[M], this._bitLength)),
          (l = Math.max(c[A].length, l)),
          (l = Math.max(c[M].length, l));
        continue;
      }
      var K = [t[A], null, null, t[M]];
      t[A].y.cmp(t[M].y) === 0
        ? ((K[1] = t[A].add(t[M])), (K[2] = t[A].toJ().mixedAdd(t[M].neg())))
        : t[A].y.cmp(t[M].y.redNeg()) === 0
        ? ((K[1] = t[A].toJ().mixedAdd(t[M])), (K[2] = t[A].add(t[M].neg())))
        : ((K[1] = t[A].toJ().mixedAdd(t[M])),
          (K[2] = t[A].toJ().mixedAdd(t[M].neg())));
      var q = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
        Q = C2(r[A], r[M]);
      for (
        l = Math.max(Q[0].length, l),
          c[A] = new Array(l),
          c[M] = new Array(l),
          g = 0;
        g < l;
        g++
      ) {
        var N = Q[0][g] | 0,
          H = Q[1][g] | 0;
        (c[A][g] = q[(N + 1) * 3 + (H + 1)]), (c[M][g] = 0), (o[A] = K);
      }
    }
    var L = this.jpoint(null, null, null),
      j = this._wnafT4;
    for (f = l; f >= 0; f--) {
      for (var k = 0; f >= 0; ) {
        var m = !0;
        for (g = 0; g < i; g++) (j[g] = c[g][f] | 0), j[g] !== 0 && (m = !1);
        if (!m) break;
        k++, f--;
      }
      if ((f >= 0 && k++, (L = L.dblp(k)), f < 0)) break;
      for (g = 0; g < i; g++) {
        var y = j[g];
        y !== 0 &&
          (y > 0
            ? (w = o[g][(y - 1) >> 1])
            : y < 0 && (w = o[g][(-y - 1) >> 1].neg()),
          w.type === "affine" ? (L = L.mixedAdd(w)) : (L = L.add(w)));
      }
    }
    for (f = 0; f < i; f++) o[f] = null;
    return n ? L : L.toP();
  });
function _r(e, t) {
  (this.curve = e), (this.type = t), (this.precomputed = null);
}
(Pi.BasePoint = _r),
  (_r.prototype.eq = function () {
    throw new Error("Not implemented");
  }),
  (_r.prototype.validate = function () {
    return this.curve.validate(this);
  }),
  (Pi.prototype.decodePoint = function (e, t) {
    e = gr.toArray(e, t);
    var r = this.p.byteLength();
    if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * r) {
      e[0] === 6
        ? vo(e[e.length - 1] % 2 === 0)
        : e[0] === 7 && vo(e[e.length - 1] % 2 === 1);
      var i = this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
      return i;
    } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === r)
      return this.pointFromX(e.slice(1, 1 + r), e[0] === 3);
    throw new Error("Unknown point format");
  }),
  (_r.prototype.encodeCompressed = function (e) {
    return this.encode(e, !0);
  }),
  (_r.prototype._encode = function (e) {
    var t = this.curve.p.byteLength(),
      r = this.getX().toArray("be", t);
    return e
      ? [this.getY().isEven() ? 2 : 3].concat(r)
      : [4].concat(r, this.getY().toArray("be", t));
  }),
  (_r.prototype.encode = function (e, t) {
    return gr.encode(this._encode(t), e);
  }),
  (_r.prototype.precompute = function (e) {
    if (this.precomputed) return this;
    var t = { doubles: null, naf: null, beta: null };
    return (
      (t.naf = this._getNAFPoints(8)),
      (t.doubles = this._getDoubles(4, e)),
      (t.beta = this._getBeta()),
      (this.precomputed = t),
      this
    );
  }),
  (_r.prototype._hasDoubles = function (e) {
    if (!this.precomputed) return !1;
    var t = this.precomputed.doubles;
    return t ? t.points.length >= Math.ceil((e.bitLength() + 1) / t.step) : !1;
  }),
  (_r.prototype._getDoubles = function (e, t) {
    if (this.precomputed && this.precomputed.doubles)
      return this.precomputed.doubles;
    for (var r = [this], i = this, n = 0; n < t; n += e) {
      for (var s = 0; s < e; s++) i = i.dbl();
      r.push(i);
    }
    return { step: e, points: r };
  }),
  (_r.prototype._getNAFPoints = function (e) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for (
      var t = [this], r = (1 << e) - 1, i = r === 1 ? null : this.dbl(), n = 1;
      n < r;
      n++
    )
      t[n] = t[n - 1].add(i);
    return { wnd: e, points: t };
  }),
  (_r.prototype._getBeta = function () {
    return null;
  }),
  (_r.prototype.dblp = function (e) {
    for (var t = this, r = 0; r < e; r++) t = t.dbl();
    return t;
  });
var kc = Un(function (e) {
    typeof Object.create == "function"
      ? (e.exports = function (t, r) {
          r &&
            ((t.super_ = r),
            (t.prototype = Object.create(r.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function (t, r) {
          if (r) {
            t.super_ = r;
            var i = function () {};
            (i.prototype = r.prototype),
              (t.prototype = new i()),
              (t.prototype.constructor = t);
          }
        });
  }),
  T2 = gr.assert;
function Tr(e) {
  cn.call(this, "short", e),
    (this.a = new Ue(e.a, 16).toRed(this.red)),
    (this.b = new Ue(e.b, 16).toRed(this.red)),
    (this.tinv = this.two.redInvm()),
    (this.zeroA = this.a.fromRed().cmpn(0) === 0),
    (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
    (this.endo = this._getEndomorphism(e)),
    (this._endoWnafT1 = new Array(4)),
    (this._endoWnafT2 = new Array(4));
}
kc(Tr, cn);
var M2 = Tr;
(Tr.prototype._getEndomorphism = function (e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var t, r;
    if (e.beta) t = new Ue(e.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      (t = i[0].cmp(i[1]) < 0 ? i[0] : i[1]), (t = t.toRed(this.red));
    }
    if (e.lambda) r = new Ue(e.lambda, 16);
    else {
      var n = this._getEndoRoots(this.n);
      this.g.mul(n[0]).x.cmp(this.g.x.redMul(t)) === 0
        ? (r = n[0])
        : ((r = n[1]), T2(this.g.mul(r).x.cmp(this.g.x.redMul(t)) === 0));
    }
    var s;
    return (
      e.basis
        ? (s = e.basis.map(function (o) {
            return { a: new Ue(o.a, 16), b: new Ue(o.b, 16) };
          }))
        : (s = this._getEndoBasis(r)),
      { beta: t, lambda: r, basis: s }
    );
  }
}),
  (Tr.prototype._getEndoRoots = function (e) {
    var t = e === this.p ? this.red : Ue.mont(e),
      r = new Ue(2).toRed(t).redInvm(),
      i = r.redNeg(),
      n = new Ue(3).toRed(t).redNeg().redSqrt().redMul(r),
      s = i.redAdd(n).fromRed(),
      o = i.redSub(n).fromRed();
    return [s, o];
  }),
  (Tr.prototype._getEndoBasis = function (e) {
    for (
      var t = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
        r = e,
        i = this.n.clone(),
        n = new Ue(1),
        s = new Ue(0),
        o = new Ue(0),
        c = new Ue(1),
        l,
        f,
        g,
        w,
        D,
        A,
        M,
        K = 0,
        q,
        Q;
      r.cmpn(0) !== 0;

    ) {
      var N = i.div(r);
      (q = i.sub(N.mul(r))), (Q = o.sub(N.mul(n)));
      var H = c.sub(N.mul(s));
      if (!g && q.cmp(t) < 0) (l = M.neg()), (f = n), (g = q.neg()), (w = Q);
      else if (g && ++K === 2) break;
      (M = q), (i = r), (r = q), (o = n), (n = Q), (c = s), (s = H);
    }
    (D = q.neg()), (A = Q);
    var L = g.sqr().add(w.sqr()),
      j = D.sqr().add(A.sqr());
    return (
      j.cmp(L) >= 0 && ((D = l), (A = f)),
      g.negative && ((g = g.neg()), (w = w.neg())),
      D.negative && ((D = D.neg()), (A = A.neg())),
      [
        { a: g, b: w },
        { a: D, b: A },
      ]
    );
  }),
  (Tr.prototype._endoSplit = function (e) {
    var t = this.endo.basis,
      r = t[0],
      i = t[1],
      n = i.b.mul(e).divRound(this.n),
      s = r.b.neg().mul(e).divRound(this.n),
      o = n.mul(r.a),
      c = s.mul(i.a),
      l = n.mul(r.b),
      f = s.mul(i.b),
      g = e.sub(o).sub(c),
      w = l.add(f).neg();
    return { k1: g, k2: w };
  }),
  (Tr.prototype.pointFromX = function (e, t) {
    (e = new Ue(e, 16)), e.red || (e = e.toRed(this.red));
    var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
      i = r.redSqrt();
    if (i.redSqr().redSub(r).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    var n = i.fromRed().isOdd();
    return ((t && !n) || (!t && n)) && (i = i.redNeg()), this.point(e, i);
  }),
  (Tr.prototype.validate = function (e) {
    if (e.inf) return !0;
    var t = e.x,
      r = e.y,
      i = this.a.redMul(t),
      n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
    return r.redSqr().redISub(n).cmpn(0) === 0;
  }),
  (Tr.prototype._endoWnafMulAdd = function (e, t, r) {
    for (
      var i = this._endoWnafT1, n = this._endoWnafT2, s = 0;
      s < e.length;
      s++
    ) {
      var o = this._endoSplit(t[s]),
        c = e[s],
        l = c._getBeta();
      o.k1.negative && (o.k1.ineg(), (c = c.neg(!0))),
        o.k2.negative && (o.k2.ineg(), (l = l.neg(!0))),
        (i[s * 2] = c),
        (i[s * 2 + 1] = l),
        (n[s * 2] = o.k1),
        (n[s * 2 + 1] = o.k2);
    }
    for (var f = this._wnafMulAdd(1, i, n, s * 2, r), g = 0; g < s * 2; g++)
      (i[g] = null), (n[g] = null);
    return f;
  });
function xt(e, t, r, i) {
  cn.BasePoint.call(this, e, "affine"),
    t === null && r === null
      ? ((this.x = null), (this.y = null), (this.inf = !0))
      : ((this.x = new Ue(t, 16)),
        (this.y = new Ue(r, 16)),
        i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        (this.inf = !1));
}
kc(xt, cn.BasePoint),
  (Tr.prototype.point = function (e, t, r) {
    return new xt(this, e, t, r);
  }),
  (Tr.prototype.pointFromJSON = function (e, t) {
    return xt.fromJSON(this, e, t);
  }),
  (xt.prototype._getBeta = function () {
    if (this.curve.endo) {
      var e = this.precomputed;
      if (e && e.beta) return e.beta;
      var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (e) {
        var r = this.curve,
          i = function (n) {
            return r.point(n.x.redMul(r.endo.beta), n.y);
          };
        (e.beta = t),
          (t.precomputed = {
            beta: null,
            naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) },
            doubles: e.doubles && {
              step: e.doubles.step,
              points: e.doubles.points.map(i),
            },
          });
      }
      return t;
    }
  }),
  (xt.prototype.toJSON = function () {
    return this.precomputed
      ? [
          this.x,
          this.y,
          this.precomputed && {
            doubles: this.precomputed.doubles && {
              step: this.precomputed.doubles.step,
              points: this.precomputed.doubles.points.slice(1),
            },
            naf: this.precomputed.naf && {
              wnd: this.precomputed.naf.wnd,
              points: this.precomputed.naf.points.slice(1),
            },
          },
        ]
      : [this.x, this.y];
  }),
  (xt.fromJSON = function (e, t, r) {
    typeof t == "string" && (t = JSON.parse(t));
    var i = e.point(t[0], t[1], r);
    if (!t[2]) return i;
    function n(o) {
      return e.point(o[0], o[1], r);
    }
    var s = t[2];
    return (
      (i.precomputed = {
        beta: null,
        doubles: s.doubles && {
          step: s.doubles.step,
          points: [i].concat(s.doubles.points.map(n)),
        },
        naf: s.naf && {
          wnd: s.naf.wnd,
          points: [i].concat(s.naf.points.map(n)),
        },
      }),
      i
    );
  }),
  (xt.prototype.inspect = function () {
    return this.isInfinity()
      ? "<EC Point Infinity>"
      : "<EC Point x: " +
          this.x.fromRed().toString(16, 2) +
          " y: " +
          this.y.fromRed().toString(16, 2) +
          ">";
  }),
  (xt.prototype.isInfinity = function () {
    return this.inf;
  }),
  (xt.prototype.add = function (e) {
    if (this.inf) return e;
    if (e.inf) return this;
    if (this.eq(e)) return this.dbl();
    if (this.neg().eq(e)) return this.curve.point(null, null);
    if (this.x.cmp(e.x) === 0) return this.curve.point(null, null);
    var t = this.y.redSub(e.y);
    t.cmpn(0) !== 0 && (t = t.redMul(this.x.redSub(e.x).redInvm()));
    var r = t.redSqr().redISub(this.x).redISub(e.x),
      i = t.redMul(this.x.redSub(r)).redISub(this.y);
    return this.curve.point(r, i);
  }),
  (xt.prototype.dbl = function () {
    if (this.inf) return this;
    var e = this.y.redAdd(this.y);
    if (e.cmpn(0) === 0) return this.curve.point(null, null);
    var t = this.curve.a,
      r = this.x.redSqr(),
      i = e.redInvm(),
      n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),
      s = n.redSqr().redISub(this.x.redAdd(this.x)),
      o = n.redMul(this.x.redSub(s)).redISub(this.y);
    return this.curve.point(s, o);
  }),
  (xt.prototype.getX = function () {
    return this.x.fromRed();
  }),
  (xt.prototype.getY = function () {
    return this.y.fromRed();
  }),
  (xt.prototype.mul = function (e) {
    return (
      (e = new Ue(e, 16)),
      this.isInfinity()
        ? this
        : this._hasDoubles(e)
        ? this.curve._fixedNafMul(this, e)
        : this.curve.endo
        ? this.curve._endoWnafMulAdd([this], [e])
        : this.curve._wnafMul(this, e)
    );
  }),
  (xt.prototype.mulAdd = function (e, t, r) {
    var i = [this, t],
      n = [e, r];
    return this.curve.endo
      ? this.curve._endoWnafMulAdd(i, n)
      : this.curve._wnafMulAdd(1, i, n, 2);
  }),
  (xt.prototype.jmulAdd = function (e, t, r) {
    var i = [this, t],
      n = [e, r];
    return this.curve.endo
      ? this.curve._endoWnafMulAdd(i, n, !0)
      : this.curve._wnafMulAdd(1, i, n, 2, !0);
  }),
  (xt.prototype.eq = function (e) {
    return (
      this === e ||
      (this.inf === e.inf &&
        (this.inf || (this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0)))
    );
  }),
  (xt.prototype.neg = function (e) {
    if (this.inf) return this;
    var t = this.curve.point(this.x, this.y.redNeg());
    if (e && this.precomputed) {
      var r = this.precomputed,
        i = function (n) {
          return n.neg();
        };
      t.precomputed = {
        naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
        doubles: r.doubles && {
          step: r.doubles.step,
          points: r.doubles.points.map(i),
        },
      };
    }
    return t;
  }),
  (xt.prototype.toJ = function () {
    if (this.inf) return this.curve.jpoint(null, null, null);
    var e = this.curve.jpoint(this.x, this.y, this.curve.one);
    return e;
  });
function Ot(e, t, r, i) {
  cn.BasePoint.call(this, e, "jacobian"),
    t === null && r === null && i === null
      ? ((this.x = this.curve.one),
        (this.y = this.curve.one),
        (this.z = new Ue(0)))
      : ((this.x = new Ue(t, 16)),
        (this.y = new Ue(r, 16)),
        (this.z = new Ue(i, 16))),
    this.x.red || (this.x = this.x.toRed(this.curve.red)),
    this.y.red || (this.y = this.y.toRed(this.curve.red)),
    this.z.red || (this.z = this.z.toRed(this.curve.red)),
    (this.zOne = this.z === this.curve.one);
}
kc(Ot, cn.BasePoint),
  (Tr.prototype.jpoint = function (e, t, r) {
    return new Ot(this, e, t, r);
  }),
  (Ot.prototype.toP = function () {
    if (this.isInfinity()) return this.curve.point(null, null);
    var e = this.z.redInvm(),
      t = e.redSqr(),
      r = this.x.redMul(t),
      i = this.y.redMul(t).redMul(e);
    return this.curve.point(r, i);
  }),
  (Ot.prototype.neg = function () {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  }),
  (Ot.prototype.add = function (e) {
    if (this.isInfinity()) return e;
    if (e.isInfinity()) return this;
    var t = e.z.redSqr(),
      r = this.z.redSqr(),
      i = this.x.redMul(t),
      n = e.x.redMul(r),
      s = this.y.redMul(t.redMul(e.z)),
      o = e.y.redMul(r.redMul(this.z)),
      c = i.redSub(n),
      l = s.redSub(o);
    if (c.cmpn(0) === 0)
      return l.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var f = c.redSqr(),
      g = f.redMul(c),
      w = i.redMul(f),
      D = l.redSqr().redIAdd(g).redISub(w).redISub(w),
      A = l.redMul(w.redISub(D)).redISub(s.redMul(g)),
      M = this.z.redMul(e.z).redMul(c);
    return this.curve.jpoint(D, A, M);
  }),
  (Ot.prototype.mixedAdd = function (e) {
    if (this.isInfinity()) return e.toJ();
    if (e.isInfinity()) return this;
    var t = this.z.redSqr(),
      r = this.x,
      i = e.x.redMul(t),
      n = this.y,
      s = e.y.redMul(t).redMul(this.z),
      o = r.redSub(i),
      c = n.redSub(s);
    if (o.cmpn(0) === 0)
      return c.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var l = o.redSqr(),
      f = l.redMul(o),
      g = r.redMul(l),
      w = c.redSqr().redIAdd(f).redISub(g).redISub(g),
      D = c.redMul(g.redISub(w)).redISub(n.redMul(f)),
      A = this.z.redMul(o);
    return this.curve.jpoint(w, D, A);
  }),
  (Ot.prototype.dblp = function (e) {
    if (e === 0) return this;
    if (this.isInfinity()) return this;
    if (!e) return this.dbl();
    var t;
    if (this.curve.zeroA || this.curve.threeA) {
      var r = this;
      for (t = 0; t < e; t++) r = r.dbl();
      return r;
    }
    var i = this.curve.a,
      n = this.curve.tinv,
      s = this.x,
      o = this.y,
      c = this.z,
      l = c.redSqr().redSqr(),
      f = o.redAdd(o);
    for (t = 0; t < e; t++) {
      var g = s.redSqr(),
        w = f.redSqr(),
        D = w.redSqr(),
        A = g.redAdd(g).redIAdd(g).redIAdd(i.redMul(l)),
        M = s.redMul(w),
        K = A.redSqr().redISub(M.redAdd(M)),
        q = M.redISub(K),
        Q = A.redMul(q);
      Q = Q.redIAdd(Q).redISub(D);
      var N = f.redMul(c);
      t + 1 < e && (l = l.redMul(D)), (s = K), (c = N), (f = Q);
    }
    return this.curve.jpoint(s, f.redMul(n), c);
  }),
  (Ot.prototype.dbl = function () {
    return this.isInfinity()
      ? this
      : this.curve.zeroA
      ? this._zeroDbl()
      : this.curve.threeA
      ? this._threeDbl()
      : this._dbl();
  }),
  (Ot.prototype._zeroDbl = function () {
    var e, t, r;
    if (this.zOne) {
      var i = this.x.redSqr(),
        n = this.y.redSqr(),
        s = n.redSqr(),
        o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
      o = o.redIAdd(o);
      var c = i.redAdd(i).redIAdd(i),
        l = c.redSqr().redISub(o).redISub(o),
        f = s.redIAdd(s);
      (f = f.redIAdd(f)),
        (f = f.redIAdd(f)),
        (e = l),
        (t = c.redMul(o.redISub(l)).redISub(f)),
        (r = this.y.redAdd(this.y));
    } else {
      var g = this.x.redSqr(),
        w = this.y.redSqr(),
        D = w.redSqr(),
        A = this.x.redAdd(w).redSqr().redISub(g).redISub(D);
      A = A.redIAdd(A);
      var M = g.redAdd(g).redIAdd(g),
        K = M.redSqr(),
        q = D.redIAdd(D);
      (q = q.redIAdd(q)),
        (q = q.redIAdd(q)),
        (e = K.redISub(A).redISub(A)),
        (t = M.redMul(A.redISub(e)).redISub(q)),
        (r = this.y.redMul(this.z)),
        (r = r.redIAdd(r));
    }
    return this.curve.jpoint(e, t, r);
  }),
  (Ot.prototype._threeDbl = function () {
    var e, t, r;
    if (this.zOne) {
      var i = this.x.redSqr(),
        n = this.y.redSqr(),
        s = n.redSqr(),
        o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
      o = o.redIAdd(o);
      var c = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
        l = c.redSqr().redISub(o).redISub(o);
      e = l;
      var f = s.redIAdd(s);
      (f = f.redIAdd(f)),
        (f = f.redIAdd(f)),
        (t = c.redMul(o.redISub(l)).redISub(f)),
        (r = this.y.redAdd(this.y));
    } else {
      var g = this.z.redSqr(),
        w = this.y.redSqr(),
        D = this.x.redMul(w),
        A = this.x.redSub(g).redMul(this.x.redAdd(g));
      A = A.redAdd(A).redIAdd(A);
      var M = D.redIAdd(D);
      M = M.redIAdd(M);
      var K = M.redAdd(M);
      (e = A.redSqr().redISub(K)),
        (r = this.y.redAdd(this.z).redSqr().redISub(w).redISub(g));
      var q = w.redSqr();
      (q = q.redIAdd(q)),
        (q = q.redIAdd(q)),
        (q = q.redIAdd(q)),
        (t = A.redMul(M.redISub(e)).redISub(q));
    }
    return this.curve.jpoint(e, t, r);
  }),
  (Ot.prototype._dbl = function () {
    var e = this.curve.a,
      t = this.x,
      r = this.y,
      i = this.z,
      n = i.redSqr().redSqr(),
      s = t.redSqr(),
      o = r.redSqr(),
      c = s.redAdd(s).redIAdd(s).redIAdd(e.redMul(n)),
      l = t.redAdd(t);
    l = l.redIAdd(l);
    var f = l.redMul(o),
      g = c.redSqr().redISub(f.redAdd(f)),
      w = f.redISub(g),
      D = o.redSqr();
    (D = D.redIAdd(D)), (D = D.redIAdd(D)), (D = D.redIAdd(D));
    var A = c.redMul(w).redISub(D),
      M = r.redAdd(r).redMul(i);
    return this.curve.jpoint(g, A, M);
  }),
  (Ot.prototype.trpl = function () {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var e = this.x.redSqr(),
      t = this.y.redSqr(),
      r = this.z.redSqr(),
      i = t.redSqr(),
      n = e.redAdd(e).redIAdd(e),
      s = n.redSqr(),
      o = this.x.redAdd(t).redSqr().redISub(e).redISub(i);
    (o = o.redIAdd(o)), (o = o.redAdd(o).redIAdd(o)), (o = o.redISub(s));
    var c = o.redSqr(),
      l = i.redIAdd(i);
    (l = l.redIAdd(l)), (l = l.redIAdd(l)), (l = l.redIAdd(l));
    var f = n.redIAdd(o).redSqr().redISub(s).redISub(c).redISub(l),
      g = t.redMul(f);
    (g = g.redIAdd(g)), (g = g.redIAdd(g));
    var w = this.x.redMul(c).redISub(g);
    (w = w.redIAdd(w)), (w = w.redIAdd(w));
    var D = this.y.redMul(f.redMul(l.redISub(f)).redISub(o.redMul(c)));
    (D = D.redIAdd(D)), (D = D.redIAdd(D)), (D = D.redIAdd(D));
    var A = this.z.redAdd(o).redSqr().redISub(r).redISub(c);
    return this.curve.jpoint(w, D, A);
  }),
  (Ot.prototype.mul = function (e, t) {
    return (e = new Ue(e, t)), this.curve._wnafMul(this, e);
  }),
  (Ot.prototype.eq = function (e) {
    if (e.type === "affine") return this.eq(e.toJ());
    if (this === e) return !0;
    var t = this.z.redSqr(),
      r = e.z.redSqr();
    if (this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0) !== 0) return !1;
    var i = t.redMul(this.z),
      n = r.redMul(e.z);
    return this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0) === 0;
  }),
  (Ot.prototype.eqXToP = function (e) {
    var t = this.z.redSqr(),
      r = e.toRed(this.curve.red).redMul(t);
    if (this.x.cmp(r) === 0) return !0;
    for (var i = e.clone(), n = this.curve.redN.redMul(t); ; ) {
      if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
      if ((r.redIAdd(n), this.x.cmp(r) === 0)) return !0;
    }
  }),
  (Ot.prototype.inspect = function () {
    return this.isInfinity()
      ? "<EC JPoint Infinity>"
      : "<EC JPoint x: " +
          this.x.toString(16, 2) +
          " y: " +
          this.y.toString(16, 2) +
          " z: " +
          this.z.toString(16, 2) +
          ">";
  }),
  (Ot.prototype.isInfinity = function () {
    return this.z.cmpn(0) === 0;
  });
var no = Un(function (e, t) {
    var r = t;
    (r.base = cn), (r.short = M2), (r.mont = null), (r.edwards = null);
  }),
  so = Un(function (e, t) {
    var r = t,
      i = gr.assert;
    function n(c) {
      c.type === "short"
        ? (this.curve = new no.short(c))
        : c.type === "edwards"
        ? (this.curve = new no.edwards(c))
        : (this.curve = new no.mont(c)),
        (this.g = this.curve.g),
        (this.n = this.curve.n),
        (this.hash = c.hash),
        i(this.g.validate(), "Invalid curve"),
        i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    r.PresetCurve = n;
    function s(c, l) {
      Object.defineProperty(r, c, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var f = new n(l);
          return (
            Object.defineProperty(r, c, {
              configurable: !0,
              enumerable: !0,
              value: f,
            }),
            f
          );
        },
      });
    }
    s("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: Zr.sha256,
      gRed: !1,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
      ],
    }),
      s("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: Zr.sha256,
        gRed: !1,
        g: [
          "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
          "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
        ],
      }),
      s("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: Zr.sha256,
        gRed: !1,
        g: [
          "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
          "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
        ],
      }),
      s("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: Zr.sha384,
        gRed: !1,
        g: [
          "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
          "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
        ],
      }),
      s("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: Zr.sha512,
        gRed: !1,
        g: [
          "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
          "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
        ],
      }),
      s("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: Zr.sha256,
        gRed: !1,
        g: ["9"],
      }),
      s("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: Zr.sha256,
        gRed: !1,
        g: [
          "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          "6666666666666666666666666666666666666666666666666666666666666658",
        ],
      });
    var o;
    try {
      o = null.crash();
    } catch (c) {
      o = void 0;
    }
    s("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: Zr.sha256,
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda:
        "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3",
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15",
        },
      ],
      gRed: !1,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        o,
      ],
    });
  });
function Bi(e) {
  if (!(this instanceof Bi)) return new Bi(e);
  (this.hash = e.hash),
    (this.predResist = !!e.predResist),
    (this.outLen = this.hash.outSize),
    (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
    (this._reseed = null),
    (this.reseedInterval = null),
    (this.K = null),
    (this.V = null);
  var t = qr.toArray(e.entropy, e.entropyEnc || "hex"),
    r = qr.toArray(e.nonce, e.nonceEnc || "hex"),
    i = qr.toArray(e.pers, e.persEnc || "hex");
  Uc(
    t.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ),
    this._init(t, r, i);
}
var ml = Bi;
(Bi.prototype._init = function (e, t, r) {
  var i = e.concat(t).concat(r);
  (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
  for (var n = 0; n < this.V.length; n++) (this.K[n] = 0), (this.V[n] = 1);
  this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
}),
  (Bi.prototype._hmac = function () {
    return new Zr.hmac(this.hash, this.K);
  }),
  (Bi.prototype._update = function (e) {
    var t = this._hmac().update(this.V).update([0]);
    e && (t = t.update(e)),
      (this.K = t.digest()),
      (this.V = this._hmac().update(this.V).digest()),
      e &&
        ((this.K = this._hmac().update(this.V).update([1]).update(e).digest()),
        (this.V = this._hmac().update(this.V).digest()));
  }),
  (Bi.prototype.reseed = function (e, t, r, i) {
    typeof t != "string" && ((i = r), (r = t), (t = null)),
      (e = qr.toArray(e, t)),
      (r = qr.toArray(r, i)),
      Uc(
        e.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      ),
      this._update(e.concat(r || [])),
      (this._reseed = 1);
  }),
  (Bi.prototype.generate = function (e, t, r, i) {
    if (this._reseed > this.reseedInterval)
      throw new Error("Reseed is required");
    typeof t != "string" && ((i = r), (r = t), (t = null)),
      r && ((r = qr.toArray(r, i || "hex")), this._update(r));
    for (var n = []; n.length < e; )
      (this.V = this._hmac().update(this.V).digest()), (n = n.concat(this.V));
    var s = n.slice(0, e);
    return this._update(r), this._reseed++, qr.encode(s, t);
  });
var ya = gr.assert;
function jt(e, t) {
  (this.ec = e),
    (this.priv = null),
    (this.pub = null),
    t.priv && this._importPrivate(t.priv, t.privEnc),
    t.pub && this._importPublic(t.pub, t.pubEnc);
}
var wa = jt;
(jt.fromPublic = function (e, t, r) {
  return t instanceof jt ? t : new jt(e, { pub: t, pubEnc: r });
}),
  (jt.fromPrivate = function (e, t, r) {
    return t instanceof jt ? t : new jt(e, { priv: t, privEnc: r });
  }),
  (jt.prototype.validate = function () {
    var e = this.getPublic();
    return e.isInfinity()
      ? { result: !1, reason: "Invalid public key" }
      : e.validate()
      ? e.mul(this.ec.curve.n).isInfinity()
        ? { result: !0, reason: null }
        : { result: !1, reason: "Public key * N != O" }
      : { result: !1, reason: "Public key is not a point" };
  }),
  (jt.prototype.getPublic = function (e, t) {
    return (
      typeof e == "string" && ((t = e), (e = null)),
      this.pub || (this.pub = this.ec.g.mul(this.priv)),
      t ? this.pub.encode(t, e) : this.pub
    );
  }),
  (jt.prototype.getPrivate = function (e) {
    return e === "hex" ? this.priv.toString(16, 2) : this.priv;
  }),
  (jt.prototype._importPrivate = function (e, t) {
    (this.priv = new Ue(e, t || 16)),
      (this.priv = this.priv.umod(this.ec.curve.n));
  }),
  (jt.prototype._importPublic = function (e, t) {
    if (e.x || e.y) {
      this.ec.curve.type === "mont"
        ? ya(e.x, "Need x coordinate")
        : (this.ec.curve.type === "short" ||
            this.ec.curve.type === "edwards") &&
          ya(e.x && e.y, "Need both x and y coordinate"),
        (this.pub = this.ec.curve.point(e.x, e.y));
      return;
    }
    this.pub = this.ec.curve.decodePoint(e, t);
  }),
  (jt.prototype.derive = function (e) {
    return (
      e.validate() || ya(e.validate(), "public point not validated"),
      e.mul(this.priv).getX()
    );
  }),
  (jt.prototype.sign = function (e, t, r) {
    return this.ec.sign(e, this, t, r);
  }),
  (jt.prototype.verify = function (e, t) {
    return this.ec.verify(e, t, this);
  }),
  (jt.prototype.inspect = function () {
    return (
      "<Key priv: " +
      (this.priv && this.priv.toString(16, 2)) +
      " pub: " +
      (this.pub && this.pub.inspect()) +
      " >"
    );
  });
var N2 = gr.assert;
function Ko(e, t) {
  if (e instanceof Ko) return e;
  this._importDER(e, t) ||
    (N2(e.r && e.s, "Signature without r or s"),
    (this.r = new Ue(e.r, 16)),
    (this.s = new Ue(e.s, 16)),
    e.recoveryParam === void 0
      ? (this.recoveryParam = null)
      : (this.recoveryParam = e.recoveryParam));
}
var Ws = Ko;
function O2() {
  this.place = 0;
}
function va(e, t) {
  var r = e[t.place++];
  if (!(r & 128)) return r;
  var i = r & 15;
  if (i === 0 || i > 4) return !1;
  for (var n = 0, s = 0, o = t.place; s < i; s++, o++)
    (n <<= 8), (n |= e[o]), (n >>>= 0);
  return n <= 127 ? !1 : ((t.place = o), n);
}
function yl(e) {
  for (var t = 0, r = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r; ) t++;
  return t === 0 ? e : e.slice(t);
}
Ko.prototype._importDER = function (e, t) {
  e = gr.toArray(e, t);
  var r = new O2();
  if (e[r.place++] !== 48) return !1;
  var i = va(e, r);
  if (i === !1 || i + r.place !== e.length || e[r.place++] !== 2) return !1;
  var n = va(e, r);
  if (n === !1) return !1;
  var s = e.slice(r.place, n + r.place);
  if (((r.place += n), e[r.place++] !== 2)) return !1;
  var o = va(e, r);
  if (o === !1 || e.length !== o + r.place) return !1;
  var c = e.slice(r.place, o + r.place);
  if (s[0] === 0)
    if (s[1] & 128) s = s.slice(1);
    else return !1;
  if (c[0] === 0)
    if (c[1] & 128) c = c.slice(1);
    else return !1;
  return (
    (this.r = new Ue(s)), (this.s = new Ue(c)), (this.recoveryParam = null), !0
  );
};
function ba(e, t) {
  if (t < 128) {
    e.push(t);
    return;
  }
  var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
  for (e.push(r | 128); --r; ) e.push((t >>> (r << 3)) & 255);
  e.push(t);
}
Ko.prototype.toDER = function (e) {
  var t = this.r.toArray(),
    r = this.s.toArray();
  for (
    t[0] & 128 && (t = [0].concat(t)),
      r[0] & 128 && (r = [0].concat(r)),
      t = yl(t),
      r = yl(r);
    !r[0] && !(r[1] & 128);

  )
    r = r.slice(1);
  var i = [2];
  ba(i, t.length), (i = i.concat(t)), i.push(2), ba(i, r.length);
  var n = i.concat(r),
    s = [48];
  return ba(s, n.length), (s = s.concat(n)), gr.encode(s, e);
};
var R2 = function () {
    throw new Error("unsupported");
  },
  wd = gr.assert;
function xr(e) {
  if (!(this instanceof xr)) return new xr(e);
  typeof e == "string" &&
    (wd(Object.prototype.hasOwnProperty.call(so, e), "Unknown curve " + e),
    (e = so[e])),
    e instanceof so.PresetCurve && (e = { curve: e }),
    (this.curve = e.curve.curve),
    (this.n = this.curve.n),
    (this.nh = this.n.ushrn(1)),
    (this.g = this.curve.g),
    (this.g = e.curve.g),
    this.g.precompute(e.curve.n.bitLength() + 1),
    (this.hash = e.hash || e.curve.hash);
}
var P2 = xr;
(xr.prototype.keyPair = function (e) {
  return new wa(this, e);
}),
  (xr.prototype.keyFromPrivate = function (e, t) {
    return wa.fromPrivate(this, e, t);
  }),
  (xr.prototype.keyFromPublic = function (e, t) {
    return wa.fromPublic(this, e, t);
  }),
  (xr.prototype.genKeyPair = function (e) {
    e || (e = {});
    for (
      var t = new ml({
          hash: this.hash,
          pers: e.pers,
          persEnc: e.persEnc || "utf8",
          entropy: e.entropy || R2(this.hash.hmacStrength),
          entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
          nonce: this.n.toArray(),
        }),
        r = this.n.byteLength(),
        i = this.n.sub(new Ue(2));
      ;

    ) {
      var n = new Ue(t.generate(r));
      if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n);
    }
  }),
  (xr.prototype._truncateToN = function (e, t) {
    var r = e.byteLength() * 8 - this.n.bitLength();
    return (
      r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
    );
  }),
  (xr.prototype.sign = function (e, t, r, i) {
    typeof r == "object" && ((i = r), (r = null)),
      i || (i = {}),
      (t = this.keyFromPrivate(t, r)),
      (e = this._truncateToN(new Ue(e, 16)));
    for (
      var n = this.n.byteLength(),
        s = t.getPrivate().toArray("be", n),
        o = e.toArray("be", n),
        c = new ml({
          hash: this.hash,
          entropy: s,
          nonce: o,
          pers: i.pers,
          persEnc: i.persEnc || "utf8",
        }),
        l = this.n.sub(new Ue(1)),
        f = 0;
      ;
      f++
    ) {
      var g = i.k ? i.k(f) : new Ue(c.generate(this.n.byteLength()));
      if (
        ((g = this._truncateToN(g, !0)), !(g.cmpn(1) <= 0 || g.cmp(l) >= 0))
      ) {
        var w = this.g.mul(g);
        if (!w.isInfinity()) {
          var D = w.getX(),
            A = D.umod(this.n);
          if (A.cmpn(0) !== 0) {
            var M = g.invm(this.n).mul(A.mul(t.getPrivate()).iadd(e));
            if (((M = M.umod(this.n)), M.cmpn(0) !== 0)) {
              var K = (w.getY().isOdd() ? 1 : 0) | (D.cmp(A) !== 0 ? 2 : 0);
              return (
                i.canonical &&
                  M.cmp(this.nh) > 0 &&
                  ((M = this.n.sub(M)), (K ^= 1)),
                new Ws({ r: A, s: M, recoveryParam: K })
              );
            }
          }
        }
      }
    }
  }),
  (xr.prototype.verify = function (e, t, r, i) {
    (e = this._truncateToN(new Ue(e, 16))),
      (r = this.keyFromPublic(r, i)),
      (t = new Ws(t, "hex"));
    var n = t.r,
      s = t.s;
    if (
      n.cmpn(1) < 0 ||
      n.cmp(this.n) >= 0 ||
      s.cmpn(1) < 0 ||
      s.cmp(this.n) >= 0
    )
      return !1;
    var o = s.invm(this.n),
      c = o.mul(e).umod(this.n),
      l = o.mul(n).umod(this.n),
      f;
    return this.curve._maxwellTrick
      ? ((f = this.g.jmulAdd(c, r.getPublic(), l)),
        f.isInfinity() ? !1 : f.eqXToP(n))
      : ((f = this.g.mulAdd(c, r.getPublic(), l)),
        f.isInfinity() ? !1 : f.getX().umod(this.n).cmp(n) === 0);
  }),
  (xr.prototype.recoverPubKey = function (e, t, r, i) {
    wd((3 & r) === r, "The recovery param is more than two bits"),
      (t = new Ws(t, i));
    var n = this.n,
      s = new Ue(e),
      o = t.r,
      c = t.s,
      l = r & 1,
      f = r >> 1;
    if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f)
      throw new Error("Unable to find sencond key candinate");
    f
      ? (o = this.curve.pointFromX(o.add(this.curve.n), l))
      : (o = this.curve.pointFromX(o, l));
    var g = t.r.invm(n),
      w = n.sub(s).mul(g).umod(n),
      D = c.mul(g).umod(n);
    return this.g.mulAdd(w, o, D);
  }),
  (xr.prototype.getKeyRecoveryParam = function (e, t, r, i) {
    if (((t = new Ws(t, i)), t.recoveryParam !== null)) return t.recoveryParam;
    for (var n = 0; n < 4; n++) {
      var s;
      try {
        s = this.recoverPubKey(e, t, n);
      } catch (o) {
        continue;
      }
      if (s.eq(r)) return n;
    }
    throw new Error("Unable to find valid recovery factor");
  });
var B2 = Un(function (e, t) {
    var r = t;
    (r.version = "6.5.4"),
      (r.utils = gr),
      (r.rand = function () {
        throw new Error("unsupported");
      }),
      (r.curve = no),
      (r.curves = so),
      (r.ec = P2),
      (r.eddsa = null);
  }),
  L2 = B2.ec;
const F2 = "signing-key/5.7.0",
  Za = new Bt(F2);
let _a = null;
function oi() {
  return _a || (_a = new L2("secp256k1")), _a;
}
class $2 {
  constructor(t) {
    rs(this, "curve", "secp256k1"),
      rs(this, "privateKey", Ht(t)),
      _v(this.privateKey) !== 32 &&
        Za.throwArgumentError(
          "invalid private key",
          "privateKey",
          "[[ REDACTED ]]"
        );
    const r = oi().keyFromPrivate(yt(this.privateKey));
    rs(this, "publicKey", "0x" + r.getPublic(!1, "hex")),
      rs(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")),
      rs(this, "_isSigningKey", !0);
  }
  _addPoint(t) {
    const r = oi().keyFromPublic(yt(this.publicKey)),
      i = oi().keyFromPublic(yt(t));
    return "0x" + r.pub.add(i.pub).encodeCompressed("hex");
  }
  signDigest(t) {
    const r = oi().keyFromPrivate(yt(this.privateKey)),
      i = yt(t);
    i.length !== 32 && Za.throwArgumentError("bad digest length", "digest", t);
    const n = r.sign(i, { canonical: !0 });
    return zf({
      recoveryParam: n.recoveryParam,
      r: ui("0x" + n.r.toString(16), 32),
      s: ui("0x" + n.s.toString(16), 32),
    });
  }
  computeSharedSecret(t) {
    const r = oi().keyFromPrivate(yt(this.privateKey)),
      i = oi().keyFromPublic(yt(vd(t)));
    return ui("0x" + r.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(t) {
    return !!(t && t._isSigningKey);
  }
}
function U2(e, t) {
  const r = zf(t),
    i = { r: yt(r.r), s: yt(r.s) };
  return "0x" + oi().recoverPubKey(yt(e), i, r.recoveryParam).encode("hex", !1);
}
function vd(e, t) {
  const r = yt(e);
  if (r.length === 32) {
    const i = new $2(r);
    return t ? "0x" + oi().keyFromPrivate(r).getPublic(!0, "hex") : i.publicKey;
  } else {
    if (r.length === 33)
      return t ? Ht(r) : "0x" + oi().keyFromPublic(r).getPublic(!1, "hex");
    if (r.length === 65)
      return t ? "0x" + oi().keyFromPublic(r).getPublic(!0, "hex") : Ht(r);
  }
  return Za.throwArgumentError(
    "invalid public or private key",
    "key",
    "[REDACTED]"
  );
}
var wl;
(function (e) {
  (e[(e.legacy = 0)] = "legacy"),
    (e[(e.eip2930 = 1)] = "eip2930"),
    (e[(e.eip1559 = 2)] = "eip1559");
})(wl || (wl = {}));
function k2(e) {
  const t = vd(e);
  return Jv(il(Lc(il(t, 1)), 12));
}
function q2(e, t) {
  return k2(U2(yt(e), t));
}
const j2 = "https://rpc.walletconnect.com/v1";
function z2(e, t, r, i, n, s) {
  return P(this, null, function* () {
    switch (r.t) {
      case "eip191":
        return K2(e, t, r.s);
      case "eip1271":
        return yield V2(e, t, r.s, i, n, s);
      default:
        throw new Error(
          `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`
        );
    }
  });
}
function K2(e, t, r) {
  return q2(Xf(t), r).toLowerCase() === e.toLowerCase();
}
function V2(e, t, r, i, n, s) {
  return P(this, null, function* () {
    try {
      const o = "0x1626ba7e",
        c = "0000000000000000000000000000000000000000000000000000000000000040",
        l = "0000000000000000000000000000000000000000000000000000000000000041",
        f = r.substring(2),
        g = Xf(t).substring(2),
        w = o + g + c + l + f,
        D = yield fetch(`${s || j2}/?chainId=${i}&projectId=${n}`, {
          method: "POST",
          body: JSON.stringify({
            id: H2(),
            jsonrpc: "2.0",
            method: "eth_call",
            params: [{ to: e, data: w }, "latest"],
          }),
        }),
        { result: A } = yield D.json();
      return A ? A.slice(0, o.length).toLowerCase() === o.toLowerCase() : !1;
    } catch (o) {
      return console.error("isValidEip1271Signature: ", o), !1;
    }
  });
}
function H2() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var G2 = Object.defineProperty,
  W2 = Object.defineProperties,
  Q2 = Object.getOwnPropertyDescriptors,
  vl = Object.getOwnPropertySymbols,
  Y2 = Object.prototype.hasOwnProperty,
  J2 = Object.prototype.propertyIsEnumerable,
  bl = (e, t, r) =>
    t in e
      ? G2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  X2 = (e, t) => {
    for (var r in t || (t = {})) Y2.call(t, r) && bl(e, r, t[r]);
    if (vl) for (var r of vl(t)) J2.call(t, r) && bl(e, r, t[r]);
    return e;
  },
  Z2 = (e, t) => W2(e, Q2(t));
const e3 = "did:pkh:",
  qc = (e) => (e == null ? void 0 : e.split(":")),
  bd = (e) => {
    const t = e && qc(e);
    if (t) return e.includes(e3) ? t[3] : t[1];
  },
  _l = (e) => {
    const t = e && qc(e);
    if (t) return t[2] + ":" + t[3];
  },
  bo = (e) => {
    const t = e && qc(e);
    if (t) return t.pop();
  };
function El(e) {
  return P(this, null, function* () {
    const { cacao: t, projectId: r } = e,
      { s: i, p: n } = t,
      s = _d(n, n.iss),
      o = bo(n.iss);
    return yield z2(o, s, i, bd(n.iss), r);
  });
}
const _d = (e, t) => {
  const r = `${e.domain} wants you to sign in with your Ethereum account:`,
    i = bo(t);
  if (!e.aud && !e.uri)
    throw new Error(
      "Either `aud` or `uri` is required to construct the message"
    );
  let n = e.statement || void 0;
  const s = `URI: ${e.aud || e.uri}`,
    o = `Version: ${e.version}`,
    c = `Chain ID: ${bd(t)}`,
    l = `Nonce: ${e.nonce}`,
    f = `Issued At: ${e.iat}`,
    g = e.resources
      ? `Resources:${e.resources
          .map(
            (D) => `
- ${D}`
          )
          .join("")}`
      : void 0,
    w = oo(e.resources);
  if (w) {
    const D = As(w);
    n = u3(n, D);
  }
  return [r, i, "", n, "", s, o, c, l, f, g].filter((D) => D != null).join(`
`);
};
function t3(e) {
  return Buffer.from(JSON.stringify(e)).toString("base64");
}
function r3(e) {
  return JSON.parse(Buffer.from(e, "base64").toString("utf-8"));
}
function rn(e) {
  if (!e) throw new Error("No recap provided, value is undefined");
  if (!e.att) throw new Error("No `att` property found");
  const t = Object.keys(e.att);
  if (!(t != null && t.length))
    throw new Error("No resources found in `att` property");
  t.forEach((r) => {
    const i = e.att[r];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${r}`);
    if (typeof i != "object")
      throw new Error(`Resource must be an object: ${r}`);
    if (!Object.keys(i).length)
      throw new Error(`Resource object is empty: ${r}`);
    Object.keys(i).forEach((n) => {
      const s = i[n];
      if (!Array.isArray(s))
        throw new Error(
          `Ability limits ${n} must be an array of objects, found: ${s}`
        );
      if (!s.length)
        throw new Error(
          `Value of ${n} is empty array, must be an array with objects`
        );
      s.forEach((o) => {
        if (typeof o != "object")
          throw new Error(
            `Ability limits (${n}) must be an array of objects, found: ${o}`
          );
      });
    });
  });
}
function i3(e, t, r, i = {}) {
  return (
    r == null || r.sort((n, s) => n.localeCompare(s)),
    { att: { [e]: n3(t, r, i) } }
  );
}
function n3(e, t, r = {}) {
  t = t == null ? void 0 : t.sort((n, s) => n.localeCompare(s));
  const i = t.map((n) => ({ [`${e}/${n}`]: [r] }));
  return Object.assign({}, ...i);
}
function Ed(e) {
  return rn(e), `urn:recap:${t3(e).replace(/=/g, "")}`;
}
function As(e) {
  const t = r3(e.replace("urn:recap:", ""));
  return rn(t), t;
}
function s3(e, t, r) {
  const i = i3(e, t, r);
  return Ed(i);
}
function o3(e) {
  return e && e.includes("urn:recap:");
}
function a3(e, t) {
  const r = As(e),
    i = As(t),
    n = c3(r, i);
  return Ed(n);
}
function c3(e, t) {
  rn(e), rn(t);
  const r = Object.keys(e.att)
      .concat(Object.keys(t.att))
      .sort((n, s) => n.localeCompare(s)),
    i = { att: {} };
  return (
    r.forEach((n) => {
      var s, o;
      Object.keys(((s = e.att) == null ? void 0 : s[n]) || {})
        .concat(Object.keys(((o = t.att) == null ? void 0 : o[n]) || {}))
        .sort((c, l) => c.localeCompare(l))
        .forEach((c) => {
          var l, f;
          i.att[n] = Z2(X2({}, i.att[n]), {
            [c]:
              ((l = e.att[n]) == null ? void 0 : l[c]) ||
              ((f = t.att[n]) == null ? void 0 : f[c]),
          });
        });
    }),
    i
  );
}
function u3(e = "", t) {
  rn(t);
  const r =
    "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (e.includes(r)) return e;
  const i = [];
  let n = 0;
  Object.keys(t.att).forEach((c) => {
    const l = Object.keys(t.att[c]).map((w) => ({
      ability: w.split("/")[0],
      action: w.split("/")[1],
    }));
    l.sort((w, D) => w.action.localeCompare(D.action));
    const f = {};
    l.forEach((w) => {
      f[w.ability] || (f[w.ability] = []), f[w.ability].push(w.action);
    });
    const g = Object.keys(f).map(
      (w) => (n++, `(${n}) '${w}': '${f[w].join("', '")}' for '${c}'.`)
    );
    i.push(g.join(", ").replace(".,", "."));
  });
  const s = i.join(" "),
    o = `${r}${s}`;
  return `${e ? e + " " : ""}${o}`;
}
function Al(e) {
  var t;
  const r = As(e);
  rn(r);
  const i = (t = r.att) == null ? void 0 : t.eip155;
  return i ? Object.keys(i).map((n) => n.split("/")[1]) : [];
}
function Sl(e) {
  const t = As(e);
  rn(t);
  const r = [];
  return (
    Object.values(t.att).forEach((i) => {
      Object.values(i).forEach((n) => {
        var s;
        (s = n == null ? void 0 : n[0]) != null &&
          s.chains &&
          r.push(n[0].chains);
      });
    }),
    [...new Set(r.flat())]
  );
}
function oo(e) {
  if (!e) return;
  const t = e == null ? void 0 : e[e.length - 1];
  return o3(t) ? t : void 0;
}
const Ad = "base10",
  Jt = "base16",
  ec = "base64pad",
  jc = "utf8",
  Sd = 0,
  Si = 1,
  l3 = 0,
  Il = 1,
  tc = 12,
  zc = 32;
function h3() {
  const e = Bc.generateKeyPair();
  return { privateKey: Nr(e.secretKey, Jt), publicKey: Nr(e.publicKey, Jt) };
}
function rc() {
  const e = On.randomBytes(zc);
  return Nr(e, Jt);
}
function f3(e, t) {
  const r = Bc.sharedKey(kr(e, Jt), kr(t, Jt), !0),
    i = new Hw(zo.SHA256, r).expand(zc);
  return Nr(i, Jt);
}
function ao(e) {
  const t = zo.hash(kr(e, Jt));
  return Nr(t, Jt);
}
function Xi(e) {
  const t = zo.hash(kr(e, jc));
  return Nr(t, Jt);
}
function d3(e) {
  return kr(`${e}`, Ad);
}
function Rs(e) {
  return Number(Nr(e, Ad));
}
function g3(e) {
  const t = d3(typeof e.type < "u" ? e.type : Sd);
  if (Rs(t) === Si && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? kr(e.senderPublicKey, Jt) : void 0,
    i = typeof e.iv < "u" ? kr(e.iv, Jt) : On.randomBytes(tc),
    n = new Rc.ChaCha20Poly1305(kr(e.symKey, Jt)).seal(i, kr(e.message, jc));
  return m3({ type: t, sealed: n, iv: i, senderPublicKey: r });
}
function p3(e) {
  const t = new Rc.ChaCha20Poly1305(kr(e.symKey, Jt)),
    { sealed: r, iv: i } = _o(e.encoded),
    n = t.open(i, r);
  if (n === null) throw new Error("Failed to decrypt");
  return Nr(n, jc);
}
function m3(e) {
  if (Rs(e.type) === Si) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Nr(Hu([e.type, e.senderPublicKey, e.iv, e.sealed]), ec);
  }
  return Nr(Hu([e.type, e.iv, e.sealed]), ec);
}
function _o(e) {
  const t = kr(e, ec),
    r = t.slice(l3, Il),
    i = Il;
  if (Rs(r) === Si) {
    const c = i + zc,
      l = c + tc,
      f = t.slice(i, c),
      g = t.slice(c, l),
      w = t.slice(l);
    return { type: r, sealed: w, iv: g, senderPublicKey: f };
  }
  const n = i + tc,
    s = t.slice(i, n),
    o = t.slice(n);
  return { type: r, sealed: o, iv: s };
}
function y3(e, t) {
  const r = _o(e);
  return Id({
    type: Rs(r.type),
    senderPublicKey:
      typeof r.senderPublicKey < "u" ? Nr(r.senderPublicKey, Jt) : void 0,
    receiverPublicKey: t == null ? void 0 : t.receiverPublicKey,
  });
}
function Id(e) {
  const t = (e == null ? void 0 : e.type) || Sd;
  if (t === Si) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: t,
    senderPublicKey: e == null ? void 0 : e.senderPublicKey,
    receiverPublicKey: e == null ? void 0 : e.receiverPublicKey,
  };
}
function Dl(e) {
  return (
    e.type === Si &&
    typeof e.senderPublicKey == "string" &&
    typeof e.receiverPublicKey == "string"
  );
}
const w3 = "irn";
function ic(e) {
  return (e == null ? void 0 : e.relay) || { protocol: w3 };
}
function fs(e) {
  const t = Gw[e];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var v3 = Object.defineProperty,
  b3 = Object.defineProperties,
  _3 = Object.getOwnPropertyDescriptors,
  xl = Object.getOwnPropertySymbols,
  E3 = Object.prototype.hasOwnProperty,
  A3 = Object.prototype.propertyIsEnumerable,
  Cl = (e, t, r) =>
    t in e
      ? v3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Tl = (e, t) => {
    for (var r in t || (t = {})) E3.call(t, r) && Cl(e, r, t[r]);
    if (xl) for (var r of xl(t)) A3.call(t, r) && Cl(e, r, t[r]);
    return e;
  },
  S3 = (e, t) => b3(e, _3(t));
function I3(e, t = "-") {
  const r = {},
    i = "relay" + t;
  return (
    Object.keys(e).forEach((n) => {
      if (n.startsWith(i)) {
        const s = n.replace(i, ""),
          o = e[n];
        r[s] = o;
      }
    }),
    r
  );
}
function Ml(e) {
  (e = e.includes("wc://") ? e.replace("wc://", "") : e),
    (e = e.includes("wc:") ? e.replace("wc:", "") : e);
  const t = e.indexOf(":"),
    r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0,
    i = e.substring(0, t),
    n = e.substring(t + 1, r).split("@"),
    s = typeof r < "u" ? e.substring(r) : "",
    o = bs.parse(s),
    c = typeof o.methods == "string" ? o.methods.split(",") : void 0;
  return {
    protocol: i,
    topic: D3(n[0]),
    version: parseInt(n[1], 10),
    symKey: o.symKey,
    relay: I3(o),
    methods: c,
    expiryTimestamp: o.expiryTimestamp
      ? parseInt(o.expiryTimestamp, 10)
      : void 0,
  };
}
function D3(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function x3(e, t = "-") {
  const r = "relay",
    i = {};
  return (
    Object.keys(e).forEach((n) => {
      const s = r + t + n;
      e[n] && (i[s] = e[n]);
    }),
    i
  );
}
function C3(e) {
  return (
    `${e.protocol}:${e.topic}@${e.version}?` +
    bs.stringify(
      Tl(
        S3(Tl({ symKey: e.symKey }, x3(e.relay)), {
          expiryTimestamp: e.expiryTimestamp,
        }),
        e.methods ? { methods: e.methods.join(",") } : {}
      )
    )
  );
}
function kn(e) {
  const t = [];
  return (
    e.forEach((r) => {
      const [i, n] = r.split(":");
      t.push(`${i}:${n}`);
    }),
    t
  );
}
function T3(e) {
  const t = [];
  return (
    Object.values(e).forEach((r) => {
      t.push(...kn(r.accounts));
    }),
    t
  );
}
function M3(e, t) {
  const r = [];
  return (
    Object.values(e).forEach((i) => {
      kn(i.accounts).includes(t) && r.push(...i.methods);
    }),
    r
  );
}
function N3(e, t) {
  const r = [];
  return (
    Object.values(e).forEach((i) => {
      kn(i.accounts).includes(t) && r.push(...i.events);
    }),
    r
  );
}
function O3(e) {
  const t = {};
  return (
    e == null ||
      e.forEach((r) => {
        const [i, n] = r.split(":");
        t[i] || (t[i] = { accounts: [], chains: [], events: [] }),
          t[i].accounts.push(r),
          t[i].chains.push(`${i}:${n}`);
      }),
    t
  );
}
function Nl(e, t) {
  t = t.map((i) => i.replace("did:pkh:", ""));
  const r = O3(t);
  for (const [i, n] of Object.entries(r))
    n.methods ? (n.methods = lv(n.methods, e)) : (n.methods = e),
      (n.events = ["chainChanged", "accountsChanged"]);
  return r;
}
const R3 = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  P3 = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function se(e, t) {
  const { message: r, code: i } = P3[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function lt(e, t) {
  const { message: r, code: i } = R3[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function Ps(e, t) {
  return Array.isArray(e) ? (typeof t < "u" && e.length ? e.every(t) : !0) : !1;
}
function Eo(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Qt(e) {
  return typeof e > "u";
}
function bt(e, t) {
  return t && Qt(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function Kc(e, t) {
  return t && Qt(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function B3(e, t) {
  const { requiredNamespaces: r } = t,
    i = Object.keys(e.namespaces),
    n = Object.keys(r);
  let s = !0;
  return Ji(n, i)
    ? (i.forEach((o) => {
        const { accounts: c, methods: l, events: f } = e.namespaces[o],
          g = kn(c),
          w = r[o];
        (!Ji(Bf(o, w), g) || !Ji(w.methods, l) || !Ji(w.events, f)) && (s = !1);
      }),
      s)
    : !1;
}
function Ao(e) {
  return bt(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function L3(e) {
  if (bt(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && Ao(r);
    }
  }
  return !1;
}
function F3(e) {
  if (bt(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch (t) {
      return !1;
    }
  return !1;
}
function $3(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function U3(e) {
  return e == null ? void 0 : e.topic;
}
function k3(e, t) {
  let r = null;
  return (
    bt(e == null ? void 0 : e.publicKey, !1) ||
      (r = se(
        "MISSING_OR_INVALID",
        `${t} controller public key should be a string`
      )),
    r
  );
}
function Ol(e) {
  let t = !0;
  return Ps(e) ? e.length && (t = e.every((r) => bt(r, !1))) : (t = !1), t;
}
function q3(e, t, r) {
  let i = null;
  return (
    Ps(t) && t.length
      ? t.forEach((n) => {
          i ||
            Ao(n) ||
            (i = lt(
              "UNSUPPORTED_CHAINS",
              `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Ao(e) ||
        (i = lt(
          "UNSUPPORTED_CHAINS",
          `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    i
  );
}
function j3(e, t, r) {
  let i = null;
  return (
    Object.entries(e).forEach(([n, s]) => {
      if (i) return;
      const o = q3(n, Bf(n, s), `${t} ${r}`);
      o && (i = o);
    }),
    i
  );
}
function z3(e, t) {
  let r = null;
  return (
    Ps(e)
      ? e.forEach((i) => {
          r ||
            L3(i) ||
            (r = lt(
              "UNSUPPORTED_ACCOUNTS",
              `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (r = lt(
          "UNSUPPORTED_ACCOUNTS",
          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    r
  );
}
function K3(e, t) {
  let r = null;
  return (
    Object.values(e).forEach((i) => {
      if (r) return;
      const n = z3(i == null ? void 0 : i.accounts, `${t} namespace`);
      n && (r = n);
    }),
    r
  );
}
function V3(e, t) {
  let r = null;
  return (
    Ol(e == null ? void 0 : e.methods)
      ? Ol(e == null ? void 0 : e.events) ||
        (r = lt(
          "UNSUPPORTED_EVENTS",
          `${t}, events should be an array of strings or empty array for no events`
        ))
      : (r = lt(
          "UNSUPPORTED_METHODS",
          `${t}, methods should be an array of strings or empty array for no methods`
        )),
    r
  );
}
function Dd(e, t) {
  let r = null;
  return (
    Object.values(e).forEach((i) => {
      if (r) return;
      const n = V3(i, `${t}, namespace`);
      n && (r = n);
    }),
    r
  );
}
function H3(e, t, r) {
  let i = null;
  if (e && Eo(e)) {
    const n = Dd(e, t);
    n && (i = n);
    const s = j3(e, t, r);
    s && (i = s);
  } else
    i = se("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return i;
}
function Ea(e, t) {
  let r = null;
  if (e && Eo(e)) {
    const i = Dd(e, t);
    i && (r = i);
    const n = K3(e, t);
    n && (r = n);
  } else
    r = se(
      "MISSING_OR_INVALID",
      `${t}, namespaces should be an object with data`
    );
  return r;
}
function xd(e) {
  return bt(e.protocol, !0);
}
function G3(e, t) {
  let r = !1;
  return (
    t && !e
      ? (r = !0)
      : e &&
        Ps(e) &&
        e.length &&
        e.forEach((i) => {
          r = xd(i);
        }),
    r
  );
}
function W3(e) {
  return typeof e == "number";
}
function ir(e) {
  return typeof e < "u" && typeof e !== null;
}
function Q3(e) {
  return !(
    !e ||
    typeof e != "object" ||
    !e.code ||
    !Kc(e.code, !1) ||
    !e.message ||
    !bt(e.message, !1)
  );
}
function Y3(e) {
  return !(Qt(e) || !bt(e.method, !1));
}
function J3(e) {
  return !(
    Qt(e) ||
    (Qt(e.result) && Qt(e.error)) ||
    !Kc(e.id, !1) ||
    !bt(e.jsonrpc, !1)
  );
}
function X3(e) {
  return !(Qt(e) || !bt(e.name, !1));
}
function Rl(e, t) {
  return !(!Ao(t) || !T3(e).includes(t));
}
function Z3(e, t, r) {
  return bt(r, !1) ? M3(e, t).includes(r) : !1;
}
function e6(e, t, r) {
  return bt(r, !1) ? N3(e, t).includes(r) : !1;
}
function Pl(e, t, r) {
  let i = null;
  const n = t6(e),
    s = r6(t),
    o = Object.keys(n),
    c = Object.keys(s),
    l = Bl(Object.keys(e)),
    f = Bl(Object.keys(t)),
    g = l.filter((w) => !f.includes(w));
  return (
    g.length &&
      (i = se(
        "NON_CONFORMING_NAMESPACES",
        `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${g.toString()}
      Received: ${Object.keys(t).toString()}`
      )),
    Ji(o, c) ||
      (i = se(
        "NON_CONFORMING_NAMESPACES",
        `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${c.toString()}`
      )),
    Object.keys(t).forEach((w) => {
      if (!w.includes(":") || i) return;
      const D = kn(t[w].accounts);
      D.includes(w) ||
        (i = se(
          "NON_CONFORMING_NAMESPACES",
          `${r} namespaces accounts don't satisfy namespace accounts for ${w}
        Required: ${w}
        Approved: ${D.toString()}`
        ));
    }),
    o.forEach((w) => {
      i ||
        (Ji(n[w].methods, s[w].methods)
          ? Ji(n[w].events, s[w].events) ||
            (i = se(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces events don't satisfy namespace events for ${w}`
            ))
          : (i = se(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces methods don't satisfy namespace methods for ${w}`
            )));
    }),
    i
  );
}
function t6(e) {
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      var i;
      r.includes(":")
        ? (t[r] = e[r])
        : (i = e[r].chains) == null ||
          i.forEach((n) => {
            t[n] = { methods: e[r].methods, events: e[r].events };
          });
    }),
    t
  );
}
function Bl(e) {
  return [...new Set(e.map((t) => (t.includes(":") ? t.split(":")[0] : t)))];
}
function r6(e) {
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      if (r.includes(":")) t[r] = e[r];
      else {
        const i = kn(e[r].accounts);
        i == null ||
          i.forEach((n) => {
            t[n] = {
              accounts: e[r].accounts.filter((s) => s.includes(`${n}:`)),
              methods: e[r].methods,
              events: e[r].events,
            };
          });
      }
    }),
    t
  );
}
function i6(e, t) {
  return Kc(e, !1) && e <= t.max && e >= t.min;
}
function Ll() {
  const e = Ns();
  return new Promise((t) => {
    switch (e) {
      case lr.browser:
        t(n6());
        break;
      case lr.reactNative:
        t(s6());
        break;
      case lr.node:
        t(o6());
        break;
      default:
        t(!0);
    }
  });
}
function n6() {
  return Bn() && (navigator == null ? void 0 : navigator.onLine);
}
function s6() {
  return P(this, null, function* () {
    if (Pn() && typeof global < "u" && global != null && global.NetInfo) {
      const e = yield global == null ? void 0 : global.NetInfo.fetch();
      return e == null ? void 0 : e.isConnected;
    }
    return !0;
  });
}
function o6() {
  return !0;
}
function a6(e) {
  switch (Ns()) {
    case lr.browser:
      c6(e);
      break;
    case lr.reactNative:
      u6(e);
      break;
  }
}
function c6(e) {
  !Pn() &&
    Bn() &&
    (window.addEventListener("online", () => e(!0)),
    window.addEventListener("offline", () => e(!1)));
}
function u6(e) {
  Pn() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((t) =>
        e(t == null ? void 0 : t.isConnected)
      ));
}
const Aa = {};
class ss {
  static get(t) {
    return Aa[t];
  }
  static set(t, r) {
    Aa[t] = r;
  }
  static delete(t) {
    delete Aa[t];
  }
}
const l6 = "PARSE_ERROR",
  h6 = "INVALID_REQUEST",
  f6 = "METHOD_NOT_FOUND",
  d6 = "INVALID_PARAMS",
  Cd = "INTERNAL_ERROR",
  Vc = "SERVER_ERROR",
  g6 = [-32700, -32600, -32601, -32602, -32603],
  ms = {
    [l6]: { code: -32700, message: "Parse error" },
    [h6]: { code: -32600, message: "Invalid Request" },
    [f6]: { code: -32601, message: "Method not found" },
    [d6]: { code: -32602, message: "Invalid params" },
    [Cd]: { code: -32603, message: "Internal error" },
    [Vc]: { code: -32e3, message: "Server error" },
  },
  Td = Vc;
function p6(e) {
  return g6.includes(e);
}
function Fl(e) {
  return Object.keys(ms).includes(e) ? ms[e] : ms[Td];
}
function m6(e) {
  const t = Object.values(ms).find((r) => r.code === e);
  return t || ms[Td];
}
function y6(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") ||
    e.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${r} RPC url at ${t}`)
    : e;
}
var Md = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var nc =
  function (e, t) {
    return (
      (nc =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, i) {
            r.__proto__ = i;
          }) ||
        function (r, i) {
          for (var n in i) i.hasOwnProperty(n) && (r[n] = i[n]);
        }),
      nc(e, t)
    );
  };
function w6(e, t) {
  nc(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var sc = function () {
  return (
    (sc =
      Object.assign ||
      function (t) {
        for (var r, i = 1, n = arguments.length; i < n; i++) {
          r = arguments[i];
          for (var s in r)
            Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        }
        return t;
      }),
    sc.apply(this, arguments)
  );
};
function v6(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
        (r[i[n]] = e[i[n]]);
  return r;
}
function b6(e, t, r, i) {
  var n = arguments.length,
    s =
      n < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, r)) : i,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, i);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (o = e[c]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
}
function _6(e, t) {
  return function (r, i) {
    t(r, i, e);
  };
}
function E6(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function A6(e, t, r, i) {
  function n(s) {
    return s instanceof r
      ? s
      : new r(function (o) {
          o(s);
        });
  }
  return new (r || (r = Promise))(function (s, o) {
    function c(g) {
      try {
        f(i.next(g));
      } catch (w) {
        o(w);
      }
    }
    function l(g) {
      try {
        f(i.throw(g));
      } catch (w) {
        o(w);
      }
    }
    function f(g) {
      g.done ? s(g.value) : n(g.value).then(c, l);
    }
    f((i = i.apply(e, t || [])).next());
  });
}
function S6(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    i,
    n,
    s,
    o;
  return (
    (o = { next: c(0), throw: c(1), return: c(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function c(f) {
    return function (g) {
      return l([f, g]);
    };
  }
  function l(f) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (
          ((i = 1),
          n &&
            (s =
              f[0] & 2
                ? n.return
                : f[0]
                ? n.throw || ((s = n.return) && s.call(n), 0)
                : n.next) &&
            !(s = s.call(n, f[1])).done)
        )
          return s;
        switch (((n = 0), s && (f = [f[0] & 2, s.value]), f[0])) {
          case 0:
          case 1:
            s = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, (n = f[1]), (f = [0]);
            continue;
          case 7:
            (f = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((s = r.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (f[0] === 6 || f[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!s || (f[1] > s[0] && f[1] < s[3]))) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < s[1]) {
              (r.label = s[1]), (s = f);
              break;
            }
            if (s && r.label < s[2]) {
              (r.label = s[2]), r.ops.push(f);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = t.call(e, r);
      } catch (g) {
        (f = [6, g]), (n = 0);
      } finally {
        i = s = 0;
      }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function I6(e, t, r, i) {
  i === void 0 && (i = r), (e[i] = t[r]);
}
function D6(e, t) {
  for (var r in e) r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function oc(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    i = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Nd(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var i = r.call(e),
    n,
    s = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = i.next()).done; ) s.push(n.value);
  } catch (c) {
    o = { error: c };
  } finally {
    try {
      n && !n.done && (r = i.return) && r.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function x6() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Nd(arguments[t]));
  return e;
}
function C6() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), n = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, c = s.length; o < c; o++, n++)
      i[n] = s[o];
  return i;
}
function Ss(e) {
  return this instanceof Ss ? ((this.v = e), this) : new Ss(e);
}
function T6(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(e, t || []),
    n,
    s = [];
  return (
    (n = {}),
    o("next"),
    o("throw"),
    o("return"),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function o(D) {
    i[D] &&
      (n[D] = function (A) {
        return new Promise(function (M, K) {
          s.push([D, A, M, K]) > 1 || c(D, A);
        });
      });
  }
  function c(D, A) {
    try {
      l(i[D](A));
    } catch (M) {
      w(s[0][3], M);
    }
  }
  function l(D) {
    D.value instanceof Ss
      ? Promise.resolve(D.value.v).then(f, g)
      : w(s[0][2], D);
  }
  function f(D) {
    c("next", D);
  }
  function g(D) {
    c("throw", D);
  }
  function w(D, A) {
    D(A), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function M6(e) {
  var t, r;
  return (
    (t = {}),
    i("next"),
    i("throw", function (n) {
      throw n;
    }),
    i("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function i(n, s) {
    t[n] = e[n]
      ? function (o) {
          return (r = !r)
            ? { value: Ss(e[n](o)), done: n === "return" }
            : s
            ? s(o)
            : o;
        }
      : s;
  }
}
function N6(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof oc == "function" ? oc(e) : e[Symbol.iterator]()),
      (r = {}),
      i("next"),
      i("throw"),
      i("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function i(s) {
    r[s] =
      e[s] &&
      function (o) {
        return new Promise(function (c, l) {
          (o = e[s](o)), n(c, l, o.done, o.value);
        });
      };
  }
  function n(s, o, c, l) {
    Promise.resolve(l).then(function (f) {
      s({ value: f, done: c });
    }, o);
  }
}
function O6(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, "raw", { value: t })
      : (e.raw = t),
    e
  );
}
function R6(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return (t.default = e), t;
}
function P6(e) {
  return e && e.__esModule ? e : { default: e };
}
function B6(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function L6(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const F6 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return sc;
        },
        __asyncDelegator: M6,
        __asyncGenerator: T6,
        __asyncValues: N6,
        __await: Ss,
        __awaiter: A6,
        __classPrivateFieldGet: B6,
        __classPrivateFieldSet: L6,
        __createBinding: I6,
        __decorate: b6,
        __exportStar: D6,
        __extends: w6,
        __generator: S6,
        __importDefault: P6,
        __importStar: R6,
        __makeTemplateObject: O6,
        __metadata: E6,
        __param: _6,
        __read: Nd,
        __rest: v6,
        __spread: x6,
        __spreadArrays: C6,
        __values: oc,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $6 = No(F6);
var yi = {},
  $l;
function U6() {
  if ($l) return yi;
  ($l = 1),
    Object.defineProperty(yi, "__esModule", { value: !0 }),
    (yi.isBrowserCryptoAvailable =
      yi.getSubtleCrypto =
      yi.getBrowerCrypto =
        void 0);
  function e() {
    return (
      (ii === null || ii === void 0 ? void 0 : ii.crypto) ||
      (ii === null || ii === void 0 ? void 0 : ii.msCrypto) ||
      {}
    );
  }
  yi.getBrowerCrypto = e;
  function t() {
    const i = e();
    return i.subtle || i.webkitSubtle;
  }
  yi.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return (yi.isBrowserCryptoAvailable = r), yi;
}
var wi = {},
  Ul;
function k6() {
  if (Ul) return wi;
  (Ul = 1),
    Object.defineProperty(wi, "__esModule", { value: !0 }),
    (wi.isBrowser = wi.isNode = wi.isReactNative = void 0);
  function e() {
    return (
      typeof document == "undefined" &&
      typeof navigator != "undefined" &&
      navigator.product === "ReactNative"
    );
  }
  wi.isReactNative = e;
  function t() {
    return (
      typeof process != "undefined" &&
      typeof process.versions != "undefined" &&
      typeof process.versions.node != "undefined"
    );
  }
  wi.isNode = t;
  function r() {
    return !e() && !t();
  }
  return (wi.isBrowser = r), wi;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = $6;
  t.__exportStar(U6(), e), t.__exportStar(k6(), e);
})(Md);
function Oi(e = 3) {
  const t = Date.now() * Math.pow(10, e),
    r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function Zi(e = 6) {
  return BigInt(Oi(e));
}
function Dn(e, t, r) {
  return { id: r || Oi(), jsonrpc: "2.0", method: e, params: t };
}
function Hc(e, t) {
  return { id: e, jsonrpc: "2.0", result: t };
}
function Gc(e, t, r) {
  return { id: e, jsonrpc: "2.0", error: q6(t, r) };
}
function q6(e, t) {
  return typeof e == "undefined"
    ? Fl(Cd)
    : (typeof e == "string" &&
        (e = Object.assign(Object.assign({}, Fl(Vc)), { message: e })),
      typeof t != "undefined" && (e.data = t),
      p6(e.code) && (e = m6(e.code)),
      e);
}
class j6 {}
class z6 extends j6 {
  constructor() {
    super();
  }
}
let K6 = class extends z6 {
  constructor(t) {
    super();
  }
};
const V6 = "^wss?:";
function H6(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length)) return t[0];
}
function G6(e, t) {
  const r = H6(e);
  return typeof r == "undefined" ? !1 : new RegExp(t).test(r);
}
function kl(e) {
  return G6(e, V6);
}
function W6(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function Od(e) {
  return (
    typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0"
  );
}
function Wc(e) {
  return Od(e) && "method" in e;
}
function Vo(e) {
  return Od(e) && (ti(e) || Cr(e));
}
function ti(e) {
  return "result" in e;
}
function Cr(e) {
  return "error" in e;
}
let Q6 = class extends K6 {
  constructor(t) {
    super(t),
      (this.events = new zr.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(t)),
      this.connection.connected && this.registerEventListeners();
  }
  connect() {
    return P(this, arguments, function* (t = this.connection) {
      yield this.open(t);
    });
  }
  disconnect() {
    return P(this, null, function* () {
      yield this.close();
    });
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  request(t, r) {
    return P(this, null, function* () {
      return this.requestStrict(
        Dn(t.method, t.params || [], t.id || Zi().toString()),
        r
      );
    });
  }
  requestStrict(t, r) {
    return P(this, null, function* () {
      return new Promise((i, n) =>
        P(this, null, function* () {
          if (!this.connection.connected)
            try {
              yield this.open();
            } catch (s) {
              n(s);
            }
          this.events.on(`${t.id}`, (s) => {
            Cr(s) ? n(s.error) : i(s.result);
          });
          try {
            yield this.connection.send(t, r);
          } catch (s) {
            n(s);
          }
        })
      );
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t),
      Vo(t)
        ? this.events.emit(`${t.id}`, t)
        : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t &&
      t.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${t.code} ${
            t.reason ? `(${t.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  open() {
    return P(this, arguments, function* (t = this.connection) {
      (this.connection === t && this.connection.connected) ||
        (this.connection.connected && this.close(),
        typeof t == "string" &&
          (yield this.connection.open(t), (t = this.connection)),
        (this.connection = this.setConnection(t)),
        yield this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"));
    });
  }
  close() {
    return P(this, null, function* () {
      yield this.connection.close();
    });
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (t) => this.onPayload(t)),
      this.connection.on("close", (t) => this.onClose(t)),
      this.connection.on("error", (t) => this.events.emit("error", t)),
      this.connection.on("register_error", (t) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
};
const Y6 = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  J6 = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  ql = (e) => e.split("?")[0],
  jl = 10,
  X6 = Y6();
let Z6 = class {
  constructor(t) {
    if (
      ((this.url = t),
      (this.events = new zr.EventEmitter()),
      (this.registering = !1),
      !kl(t))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  open() {
    return P(this, arguments, function* (t = this.url) {
      yield this.register(t);
    });
  }
  close() {
    return P(this, null, function* () {
      return new Promise((t, r) => {
        if (typeof this.socket > "u") {
          r(new Error("Connection already closed"));
          return;
        }
        (this.socket.onclose = (i) => {
          this.onClose(i), t();
        }),
          this.socket.close();
      });
    });
  }
  send(t) {
    return P(this, null, function* () {
      typeof this.socket > "u" && (this.socket = yield this.register());
      try {
        this.socket.send(tn(t));
      } catch (r) {
        this.onError(t.id, r);
      }
    });
  }
  register(t = this.url) {
    if (!kl(t))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((i, n) => {
          this.events.once("register_error", (s) => {
            this.resetMaxListeners(), n(s);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return n(
                  new Error("WebSocket connection is missing or invalid")
                );
              i(this.socket);
            });
        })
      );
    }
    return (
      (this.url = t),
      (this.registering = !0),
      new Promise((r, i) => {
        const n = new URLSearchParams(t).get("origin"),
          s = Md.isReactNative()
            ? { headers: { origin: n } }
            : { rejectUnauthorized: !W6(t) },
          o = new X6(t, [], s);
        J6()
          ? (o.onerror = (c) => {
              const l = c;
              i(this.emitError(l.error));
            })
          : o.on("error", (c) => {
              i(this.emitError(c));
            }),
          (o.onopen = () => {
            this.onOpen(o), r(o);
          });
      })
    );
  }
  onOpen(t) {
    (t.onmessage = (r) => this.onPayload(r)),
      (t.onclose = (r) => this.onClose(r)),
      (this.socket = t),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(t) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? Po(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const i = this.parseError(r),
      n = i.message || i.toString(),
      s = Gc(t, n);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return y6(t, ql(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > jl && this.events.setMaxListeners(jl);
  }
  emitError(t) {
    const r = this.parseError(
      new Error(
        (t == null ? void 0 : t.message) ||
          `WebSocket connection failed for host: ${ql(this.url)}`
      )
    );
    return this.events.emit("register_error", r), r;
  }
};
var So = { exports: {} };
So.exports;
(function (e, t) {
  var r = 200,
    i = "__lodash_hash_undefined__",
    n = 1,
    s = 2,
    o = 9007199254740991,
    c = "[object Arguments]",
    l = "[object Array]",
    f = "[object AsyncFunction]",
    g = "[object Boolean]",
    w = "[object Date]",
    D = "[object Error]",
    A = "[object Function]",
    M = "[object GeneratorFunction]",
    K = "[object Map]",
    q = "[object Number]",
    Q = "[object Null]",
    N = "[object Object]",
    H = "[object Promise]",
    L = "[object Proxy]",
    j = "[object RegExp]",
    k = "[object Set]",
    m = "[object String]",
    y = "[object Symbol]",
    I = "[object Undefined]",
    C = "[object WeakMap]",
    B = "[object ArrayBuffer]",
    U = "[object DataView]",
    a = "[object Float32Array]",
    u = "[object Float64Array]",
    h = "[object Int8Array]",
    v = "[object Int16Array]",
    _ = "[object Int32Array]",
    E = "[object Uint8Array]",
    x = "[object Uint8ClampedArray]",
    S = "[object Uint16Array]",
    d = "[object Uint32Array]",
    T = /[\\^$.*+?()[\]{}|]/g,
    Y = /^\[object .+?Constructor\]$/,
    X = /^(?:0|[1-9]\d*)$/,
    b = {};
  (b[a] = b[u] = b[h] = b[v] = b[_] = b[E] = b[x] = b[S] = b[d] = !0),
    (b[c] =
      b[l] =
      b[B] =
      b[g] =
      b[U] =
      b[w] =
      b[D] =
      b[A] =
      b[K] =
      b[q] =
      b[N] =
      b[j] =
      b[k] =
      b[m] =
      b[C] =
        !1);
  var G = typeof ii == "object" && ii && ii.Object === Object && ii,
    O = typeof self == "object" && self && self.Object === Object && self,
    F = G || O || Function("return this")(),
    z = t && !t.nodeType && t,
    p = z && !0 && e && !e.nodeType && e,
    R = p && p.exports === z,
    J = R && G.process,
    Z = (function () {
      try {
        return J && J.binding && J.binding("util");
      } catch ($) {}
    })(),
    ee = Z && Z.isTypedArray;
  function ne($, W) {
    for (
      var re = -1, ce = $ == null ? 0 : $.length, dt = 0, qe = [];
      ++re < ce;

    ) {
      var mt = $[re];
      W(mt, re, $) && (qe[dt++] = mt);
    }
    return qe;
  }
  function ge($, W) {
    for (var re = -1, ce = W.length, dt = $.length; ++re < ce; )
      $[dt + re] = W[re];
    return $;
  }
  function ve($, W) {
    for (var re = -1, ce = $ == null ? 0 : $.length; ++re < ce; )
      if (W($[re], re, $)) return !0;
    return !1;
  }
  function Ze($, W) {
    for (var re = -1, ce = Array($); ++re < $; ) ce[re] = W(re);
    return ce;
  }
  function Ie($) {
    return function (W) {
      return $(W);
    };
  }
  function me($, W) {
    return $.has(W);
  }
  function Fe($, W) {
    return $ == null ? void 0 : $[W];
  }
  function de($) {
    var W = -1,
      re = Array($.size);
    return (
      $.forEach(function (ce, dt) {
        re[++W] = [dt, ce];
      }),
      re
    );
  }
  function he($, W) {
    return function (re) {
      return $(W(re));
    };
  }
  function xe($) {
    var W = -1,
      re = Array($.size);
    return (
      $.forEach(function (ce) {
        re[++W] = ce;
      }),
      re
    );
  }
  var ue = Array.prototype,
    ae = Function.prototype,
    Ee = Object.prototype,
    fe = F["__core-js_shared__"],
    pe = ae.toString,
    Ae = Ee.hasOwnProperty,
    ye = (function () {
      var $ = /[^.]+$/.exec((fe && fe.keys && fe.keys.IE_PROTO) || "");
      return $ ? "Symbol(src)_1." + $ : "";
    })(),
    we = Ee.toString,
    je = RegExp(
      "^" +
        pe
          .call(Ae)
          .replace(T, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    _e = R ? F.Buffer : void 0,
    be = F.Symbol,
    At = F.Uint8Array,
    Ke = Ee.propertyIsEnumerable,
    We = ue.splice,
    wt = be ? be.toStringTag : void 0,
    Qe = Object.getOwnPropertySymbols,
    Je = _e ? _e.isBuffer : void 0,
    mr = he(Object.keys, Object),
    Ce = hn(F, "DataView"),
    De = hn(F, "Map"),
    et = hn(F, "Promise"),
    Te = hn(F, "Set"),
    Me = hn(F, "WeakMap"),
    Xe = hn(Object, "create"),
    Oe = ki(Ce),
    Re = ki(De),
    ct = ki(et),
    Pe = ki(Te),
    Be = ki(Me),
    st = be ? be.prototype : void 0,
    Ne = st ? st.valueOf : void 0;
  function Se($) {
    var W = -1,
      re = $ == null ? 0 : $.length;
    for (this.clear(); ++W < re; ) {
      var ce = $[W];
      this.set(ce[0], ce[1]);
    }
  }
  function ut() {
    (this.__data__ = Xe ? Xe(null) : {}), (this.size = 0);
  }
  function Le($) {
    var W = this.has($) && delete this.__data__[$];
    return (this.size -= W ? 1 : 0), W;
  }
  function ot($) {
    var W = this.__data__;
    if (Xe) {
      var re = W[$];
      return re === i ? void 0 : re;
    }
    return Ae.call(W, $) ? W[$] : void 0;
  }
  function gi($) {
    var W = this.__data__;
    return Xe ? W[$] !== void 0 : Ae.call(W, $);
  }
  function at($, W) {
    var re = this.__data__;
    return (
      (this.size += this.has($) ? 0 : 1),
      (re[$] = Xe && W === void 0 ? i : W),
      this
    );
  }
  (Se.prototype.clear = ut),
    (Se.prototype.delete = Le),
    (Se.prototype.get = ot),
    (Se.prototype.has = gi),
    (Se.prototype.set = at);
  function Ge($) {
    var W = -1,
      re = $ == null ? 0 : $.length;
    for (this.clear(); ++W < re; ) {
      var ce = $[W];
      this.set(ce[0], ce[1]);
    }
  }
  function Kr() {
    (this.__data__ = []), (this.size = 0);
  }
  function Vr($) {
    var W = this.__data__,
      re = Ls(W, $);
    if (re < 0) return !1;
    var ce = W.length - 1;
    return re == ce ? W.pop() : We.call(W, re, 1), --this.size, !0;
  }
  function Hr($) {
    var W = this.__data__,
      re = Ls(W, $);
    return re < 0 ? void 0 : W[re][1];
  }
  function Gr($) {
    return Ls(this.__data__, $) > -1;
  }
  function Wr($, W) {
    var re = this.__data__,
      ce = Ls(re, $);
    return ce < 0 ? (++this.size, re.push([$, W])) : (re[ce][1] = W), this;
  }
  (Ge.prototype.clear = Kr),
    (Ge.prototype.delete = Vr),
    (Ge.prototype.get = Hr),
    (Ge.prototype.has = Gr),
    (Ge.prototype.set = Wr);
  function $t($) {
    var W = -1,
      re = $ == null ? 0 : $.length;
    for (this.clear(); ++W < re; ) {
      var ce = $[W];
      this.set(ce[0], ce[1]);
    }
  }
  function qn() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Se(),
        map: new (De || Ge)(),
        string: new Se(),
      });
  }
  function jn($) {
    var W = Fs(this, $).delete($);
    return (this.size -= W ? 1 : 0), W;
  }
  function zn($) {
    return Fs(this, $).get($);
  }
  function Kn($) {
    return Fs(this, $).has($);
  }
  function Vn($, W) {
    var re = Fs(this, $),
      ce = re.size;
    return re.set($, W), (this.size += re.size == ce ? 0 : 1), this;
  }
  ($t.prototype.clear = qn),
    ($t.prototype.delete = jn),
    ($t.prototype.get = zn),
    ($t.prototype.has = Kn),
    ($t.prototype.set = Vn);
  function Di($) {
    var W = -1,
      re = $ == null ? 0 : $.length;
    for (this.__data__ = new $t(); ++W < re; ) this.add($[W]);
  }
  function Hn($) {
    return this.__data__.set($, i), this;
  }
  function Gn($) {
    return this.__data__.has($);
  }
  (Di.prototype.add = Di.prototype.push = Hn), (Di.prototype.has = Gn);
  function yr($) {
    var W = (this.__data__ = new Ge($));
    this.size = W.size;
  }
  function Wn() {
    (this.__data__ = new Ge()), (this.size = 0);
  }
  function Qn($) {
    var W = this.__data__,
      re = W.delete($);
    return (this.size = W.size), re;
  }
  function Yn($) {
    return this.__data__.get($);
  }
  function Jn($) {
    return this.__data__.has($);
  }
  function i0($, W) {
    var re = this.__data__;
    if (re instanceof Ge) {
      var ce = re.__data__;
      if (!De || ce.length < r - 1)
        return ce.push([$, W]), (this.size = ++re.size), this;
      re = this.__data__ = new $t(ce);
    }
    return re.set($, W), (this.size = re.size), this;
  }
  (yr.prototype.clear = Wn),
    (yr.prototype.delete = Qn),
    (yr.prototype.get = Yn),
    (yr.prototype.has = Jn),
    (yr.prototype.set = i0);
  function n0($, W) {
    var re = $s($),
      ce = !re && v0($),
      dt = !re && !ce && Wo($),
      qe = !re && !ce && !dt && ou($),
      mt = re || ce || dt || qe,
      Dt = mt ? Ze($.length, String) : [],
      Nt = Dt.length;
    for (var gt in $)
      (W || Ae.call($, gt)) &&
        !(
          mt &&
          (gt == "length" ||
            (dt && (gt == "offset" || gt == "parent")) ||
            (qe &&
              (gt == "buffer" || gt == "byteLength" || gt == "byteOffset")) ||
            g0(gt, Nt))
        ) &&
        Dt.push(gt);
    return Dt;
  }
  function Ls($, W) {
    for (var re = $.length; re--; ) if (ru($[re][0], W)) return re;
    return -1;
  }
  function s0($, W, re) {
    var ce = W($);
    return $s($) ? ce : ge(ce, re($));
  }
  function Xn($) {
    return $ == null
      ? $ === void 0
        ? I
        : Q
      : wt && wt in Object($)
      ? f0($)
      : w0($);
  }
  function Xc($) {
    return Zn($) && Xn($) == c;
  }
  function Zc($, W, re, ce, dt) {
    return $ === W
      ? !0
      : $ == null || W == null || (!Zn($) && !Zn(W))
      ? $ !== $ && W !== W
      : o0($, W, re, ce, Zc, dt);
  }
  function o0($, W, re, ce, dt, qe) {
    var mt = $s($),
      Dt = $s(W),
      Nt = mt ? l : xi($),
      gt = Dt ? l : xi(W);
    (Nt = Nt == c ? N : Nt), (gt = gt == c ? N : gt);
    var ur = Nt == N,
      Or = gt == N,
      Ut = Nt == gt;
    if (Ut && Wo($)) {
      if (!Wo(W)) return !1;
      (mt = !0), (ur = !1);
    }
    if (Ut && !ur)
      return (
        qe || (qe = new yr()),
        mt || ou($) ? eu($, W, re, ce, dt, qe) : l0($, W, Nt, re, ce, dt, qe)
      );
    if (!(re & n)) {
      var wr = ur && Ae.call($, "__wrapped__"),
        vr = Or && Ae.call(W, "__wrapped__");
      if (wr || vr) {
        var Ci = wr ? $.value() : $,
          pi = vr ? W.value() : W;
        return qe || (qe = new yr()), dt(Ci, pi, re, ce, qe);
      }
    }
    return Ut ? (qe || (qe = new yr()), h0($, W, re, ce, dt, qe)) : !1;
  }
  function a0($) {
    if (!su($) || m0($)) return !1;
    var W = iu($) ? je : Y;
    return W.test(ki($));
  }
  function c0($) {
    return Zn($) && nu($.length) && !!b[Xn($)];
  }
  function u0($) {
    if (!y0($)) return mr($);
    var W = [];
    for (var re in Object($))
      Ae.call($, re) && re != "constructor" && W.push(re);
    return W;
  }
  function eu($, W, re, ce, dt, qe) {
    var mt = re & n,
      Dt = $.length,
      Nt = W.length;
    if (Dt != Nt && !(mt && Nt > Dt)) return !1;
    var gt = qe.get($);
    if (gt && qe.get(W)) return gt == W;
    var ur = -1,
      Or = !0,
      Ut = re & s ? new Di() : void 0;
    for (qe.set($, W), qe.set(W, $); ++ur < Dt; ) {
      var wr = $[ur],
        vr = W[ur];
      if (ce) var Ci = mt ? ce(vr, wr, ur, W, $, qe) : ce(wr, vr, ur, $, W, qe);
      if (Ci !== void 0) {
        if (Ci) continue;
        Or = !1;
        break;
      }
      if (Ut) {
        if (
          !ve(W, function (pi, qi) {
            if (!me(Ut, qi) && (wr === pi || dt(wr, pi, re, ce, qe)))
              return Ut.push(qi);
          })
        ) {
          Or = !1;
          break;
        }
      } else if (!(wr === vr || dt(wr, vr, re, ce, qe))) {
        Or = !1;
        break;
      }
    }
    return qe.delete($), qe.delete(W), Or;
  }
  function l0($, W, re, ce, dt, qe, mt) {
    switch (re) {
      case U:
        if ($.byteLength != W.byteLength || $.byteOffset != W.byteOffset)
          return !1;
        ($ = $.buffer), (W = W.buffer);
      case B:
        return !($.byteLength != W.byteLength || !qe(new At($), new At(W)));
      case g:
      case w:
      case q:
        return ru(+$, +W);
      case D:
        return $.name == W.name && $.message == W.message;
      case j:
      case m:
        return $ == W + "";
      case K:
        var Dt = de;
      case k:
        var Nt = ce & n;
        if ((Dt || (Dt = xe), $.size != W.size && !Nt)) return !1;
        var gt = mt.get($);
        if (gt) return gt == W;
        (ce |= s), mt.set($, W);
        var ur = eu(Dt($), Dt(W), ce, dt, qe, mt);
        return mt.delete($), ur;
      case y:
        if (Ne) return Ne.call($) == Ne.call(W);
    }
    return !1;
  }
  function h0($, W, re, ce, dt, qe) {
    var mt = re & n,
      Dt = tu($),
      Nt = Dt.length,
      gt = tu(W),
      ur = gt.length;
    if (Nt != ur && !mt) return !1;
    for (var Or = Nt; Or--; ) {
      var Ut = Dt[Or];
      if (!(mt ? Ut in W : Ae.call(W, Ut))) return !1;
    }
    var wr = qe.get($);
    if (wr && qe.get(W)) return wr == W;
    var vr = !0;
    qe.set($, W), qe.set(W, $);
    for (var Ci = mt; ++Or < Nt; ) {
      Ut = Dt[Or];
      var pi = $[Ut],
        qi = W[Ut];
      if (ce) var au = mt ? ce(qi, pi, Ut, W, $, qe) : ce(pi, qi, Ut, $, W, qe);
      if (!(au === void 0 ? pi === qi || dt(pi, qi, re, ce, qe) : au)) {
        vr = !1;
        break;
      }
      Ci || (Ci = Ut == "constructor");
    }
    if (vr && !Ci) {
      var Us = $.constructor,
        ks = W.constructor;
      Us != ks &&
        "constructor" in $ &&
        "constructor" in W &&
        !(
          typeof Us == "function" &&
          Us instanceof Us &&
          typeof ks == "function" &&
          ks instanceof ks
        ) &&
        (vr = !1);
    }
    return qe.delete($), qe.delete(W), vr;
  }
  function tu($) {
    return s0($, E0, d0);
  }
  function Fs($, W) {
    var re = $.__data__;
    return p0(W) ? re[typeof W == "string" ? "string" : "hash"] : re.map;
  }
  function hn($, W) {
    var re = Fe($, W);
    return a0(re) ? re : void 0;
  }
  function f0($) {
    var W = Ae.call($, wt),
      re = $[wt];
    try {
      $[wt] = void 0;
      var ce = !0;
    } catch (qe) {}
    var dt = we.call($);
    return ce && (W ? ($[wt] = re) : delete $[wt]), dt;
  }
  var d0 = Qe
      ? function ($) {
          return $ == null
            ? []
            : (($ = Object($)),
              ne(Qe($), function (W) {
                return Ke.call($, W);
              }));
        }
      : A0,
    xi = Xn;
  ((Ce && xi(new Ce(new ArrayBuffer(1))) != U) ||
    (De && xi(new De()) != K) ||
    (et && xi(et.resolve()) != H) ||
    (Te && xi(new Te()) != k) ||
    (Me && xi(new Me()) != C)) &&
    (xi = function ($) {
      var W = Xn($),
        re = W == N ? $.constructor : void 0,
        ce = re ? ki(re) : "";
      if (ce)
        switch (ce) {
          case Oe:
            return U;
          case Re:
            return K;
          case ct:
            return H;
          case Pe:
            return k;
          case Be:
            return C;
        }
      return W;
    });
  function g0($, W) {
    return (
      (W = W == null ? o : W),
      !!W &&
        (typeof $ == "number" || X.test($)) &&
        $ > -1 &&
        $ % 1 == 0 &&
        $ < W
    );
  }
  function p0($) {
    var W = typeof $;
    return W == "string" || W == "number" || W == "symbol" || W == "boolean"
      ? $ !== "__proto__"
      : $ === null;
  }
  function m0($) {
    return !!ye && ye in $;
  }
  function y0($) {
    var W = $ && $.constructor,
      re = (typeof W == "function" && W.prototype) || Ee;
    return $ === re;
  }
  function w0($) {
    return we.call($);
  }
  function ki($) {
    if ($ != null) {
      try {
        return pe.call($);
      } catch (W) {}
      try {
        return $ + "";
      } catch (W) {}
    }
    return "";
  }
  function ru($, W) {
    return $ === W || ($ !== $ && W !== W);
  }
  var v0 = Xc(
      (function () {
        return arguments;
      })()
    )
      ? Xc
      : function ($) {
          return Zn($) && Ae.call($, "callee") && !Ke.call($, "callee");
        },
    $s = Array.isArray;
  function b0($) {
    return $ != null && nu($.length) && !iu($);
  }
  var Wo = Je || S0;
  function _0($, W) {
    return Zc($, W);
  }
  function iu($) {
    if (!su($)) return !1;
    var W = Xn($);
    return W == A || W == M || W == f || W == L;
  }
  function nu($) {
    return typeof $ == "number" && $ > -1 && $ % 1 == 0 && $ <= o;
  }
  function su($) {
    var W = typeof $;
    return $ != null && (W == "object" || W == "function");
  }
  function Zn($) {
    return $ != null && typeof $ == "object";
  }
  var ou = ee ? Ie(ee) : c0;
  function E0($) {
    return b0($) ? n0($) : u0($);
  }
  function A0() {
    return [];
  }
  function S0() {
    return !1;
  }
  e.exports = _0;
})(So, So.exports);
var e_ = So.exports;
const t_ = Mo(e_);
function r_(e, t) {
  return (
    (t = t || {}),
    new Promise(function (r, i) {
      var n = new XMLHttpRequest(),
        s = [],
        o = [],
        c = {},
        l = function () {
          return {
            ok: ((n.status / 100) | 0) == 2,
            statusText: n.statusText,
            status: n.status,
            url: n.responseURL,
            text: function () {
              return Promise.resolve(n.responseText);
            },
            json: function () {
              return Promise.resolve(n.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([n.response]));
            },
            clone: l,
            headers: {
              keys: function () {
                return s;
              },
              entries: function () {
                return o;
              },
              get: function (g) {
                return c[g.toLowerCase()];
              },
              has: function (g) {
                return g.toLowerCase() in c;
              },
            },
          };
        };
      for (var f in (n.open(t.method || "get", e, !0),
      (n.onload = function () {
        n
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (g, w, D) {
            s.push((w = w.toLowerCase())),
              o.push([w, D]),
              (c[w] = c[w] ? c[w] + "," + D : D);
          }),
          r(l());
      }),
      (n.onerror = i),
      (n.withCredentials = t.credentials == "include"),
      t.headers))
        n.setRequestHeader(f, t.headers[f]);
      n.send(t.body || null);
    })
  );
}
const i_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: r_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zl = No(i_);
var n_ = self.fetch || (self.fetch = zl.default || zl);
const s_ = Mo(n_);
function o_(e, t) {
  if (e.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
  for (var n = 0; n < e.length; n++) {
    var s = e.charAt(n),
      o = s.charCodeAt(0);
    if (r[o] !== 255) throw new TypeError(s + " is ambiguous");
    r[o] = n;
  }
  var c = e.length,
    l = e.charAt(0),
    f = Math.log(c) / Math.log(256),
    g = Math.log(256) / Math.log(c);
  function w(M) {
    if (
      (M instanceof Uint8Array ||
        (ArrayBuffer.isView(M)
          ? (M = new Uint8Array(M.buffer, M.byteOffset, M.byteLength))
          : Array.isArray(M) && (M = Uint8Array.from(M))),
      !(M instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (M.length === 0) return "";
    for (var K = 0, q = 0, Q = 0, N = M.length; Q !== N && M[Q] === 0; )
      Q++, K++;
    for (var H = ((N - Q) * g + 1) >>> 0, L = new Uint8Array(H); Q !== N; ) {
      for (
        var j = M[Q], k = 0, m = H - 1;
        (j !== 0 || k < q) && m !== -1;
        m--, k++
      )
        (j += (256 * L[m]) >>> 0), (L[m] = j % c >>> 0), (j = (j / c) >>> 0);
      if (j !== 0) throw new Error("Non-zero carry");
      (q = k), Q++;
    }
    for (var y = H - q; y !== H && L[y] === 0; ) y++;
    for (var I = l.repeat(K); y < H; ++y) I += e.charAt(L[y]);
    return I;
  }
  function D(M) {
    if (typeof M != "string") throw new TypeError("Expected String");
    if (M.length === 0) return new Uint8Array();
    var K = 0;
    if (M[K] !== " ") {
      for (var q = 0, Q = 0; M[K] === l; ) q++, K++;
      for (
        var N = ((M.length - K) * f + 1) >>> 0, H = new Uint8Array(N);
        M[K];

      ) {
        var L = r[M.charCodeAt(K)];
        if (L === 255) return;
        for (var j = 0, k = N - 1; (L !== 0 || j < Q) && k !== -1; k--, j++)
          (L += (c * H[k]) >>> 0),
            (H[k] = L % 256 >>> 0),
            (L = (L / 256) >>> 0);
        if (L !== 0) throw new Error("Non-zero carry");
        (Q = j), K++;
      }
      if (M[K] !== " ") {
        for (var m = N - Q; m !== N && H[m] === 0; ) m++;
        for (var y = new Uint8Array(q + (N - m)), I = q; m !== N; )
          y[I++] = H[m++];
        return y;
      }
    }
  }
  function A(M) {
    var K = D(M);
    if (K) return K;
    throw new Error(`Non-${t} character`);
  }
  return { encode: w, decodeUnsafe: D, decode: A };
}
var a_ = o_,
  c_ = a_;
const Rd = (e) => {
    if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
      return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  u_ = (e) => new TextEncoder().encode(e),
  l_ = (e) => new TextDecoder().decode(e);
class h_ {
  constructor(t, r, i) {
    (this.name = t), (this.prefix = r), (this.baseEncode = i);
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class f_ {
  constructor(t, r, i) {
    if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = i);
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(t)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(t) {
    return Pd(this, t);
  }
}
class d_ {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Pd(this, t);
  }
  decode(t) {
    const r = t[0],
      i = this.decoders[r];
    if (i) return i.decode(t);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        t
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Pd = (e, t) =>
  new d_(
    Ye(Ye({}, e.decoders || { [e.prefix]: e }), t.decoders || { [t.prefix]: t })
  );
class g_ {
  constructor(t, r, i, n) {
    (this.name = t),
      (this.prefix = r),
      (this.baseEncode = i),
      (this.baseDecode = n),
      (this.encoder = new h_(t, r, i)),
      (this.decoder = new f_(t, r, n));
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Ho = ({ name: e, prefix: t, encode: r, decode: i }) => new g_(e, t, r, i),
  Bs = ({ prefix: e, name: t, alphabet: r }) => {
    const { encode: i, decode: n } = c_(r, t);
    return Ho({ prefix: e, name: t, encode: i, decode: (s) => Rd(n(s)) });
  },
  p_ = (e, t, r, i) => {
    const n = {};
    for (let g = 0; g < t.length; ++g) n[t[g]] = g;
    let s = e.length;
    for (; e[s - 1] === "="; ) --s;
    const o = new Uint8Array(((s * r) / 8) | 0);
    let c = 0,
      l = 0,
      f = 0;
    for (let g = 0; g < s; ++g) {
      const w = n[e[g]];
      if (w === void 0) throw new SyntaxError(`Non-${i} character`);
      (l = (l << r) | w),
        (c += r),
        c >= 8 && ((c -= 8), (o[f++] = 255 & (l >> c)));
    }
    if (c >= r || 255 & (l << (8 - c)))
      throw new SyntaxError("Unexpected end of data");
    return o;
  },
  m_ = (e, t, r) => {
    const i = t[t.length - 1] === "=",
      n = (1 << r) - 1;
    let s = "",
      o = 0,
      c = 0;
    for (let l = 0; l < e.length; ++l)
      for (c = (c << 8) | e[l], o += 8; o > r; )
        (o -= r), (s += t[n & (c >> o)]);
    if ((o && (s += t[n & (c << (r - o))]), i))
      for (; (s.length * r) & 7; ) s += "=";
    return s;
  },
  Ft = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
    Ho({
      prefix: t,
      name: e,
      encode(n) {
        return m_(n, i, r);
      },
      decode(n) {
        return p_(n, i, r, e);
      },
    }),
  y_ = Ho({
    prefix: "\0",
    name: "identity",
    encode: (e) => l_(e),
    decode: (e) => u_(e),
  });
var w_ = Object.freeze({ __proto__: null, identity: y_ });
const v_ = Ft({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var b_ = Object.freeze({ __proto__: null, base2: v_ });
const __ = Ft({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var E_ = Object.freeze({ __proto__: null, base8: __ });
const A_ = Bs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var S_ = Object.freeze({ __proto__: null, base10: A_ });
const I_ = Ft({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  D_ = Ft({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var x_ = Object.freeze({ __proto__: null, base16: I_, base16upper: D_ });
const C_ = Ft({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  T_ = Ft({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  M_ = Ft({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  N_ = Ft({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  O_ = Ft({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  R_ = Ft({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  P_ = Ft({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  B_ = Ft({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  L_ = Ft({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var F_ = Object.freeze({
  __proto__: null,
  base32: C_,
  base32upper: T_,
  base32pad: M_,
  base32padupper: N_,
  base32hex: O_,
  base32hexupper: R_,
  base32hexpad: P_,
  base32hexpadupper: B_,
  base32z: L_,
});
const $_ = Bs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  U_ = Bs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var k_ = Object.freeze({ __proto__: null, base36: $_, base36upper: U_ });
const q_ = Bs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  j_ = Bs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var z_ = Object.freeze({ __proto__: null, base58btc: q_, base58flickr: j_ });
const K_ = Ft({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  V_ = Ft({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  H_ = Ft({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  G_ = Ft({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var W_ = Object.freeze({
  __proto__: null,
  base64: K_,
  base64pad: V_,
  base64url: H_,
  base64urlpad: G_,
});
const Bd = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  Q_ = Bd.reduce((e, t, r) => ((e[r] = t), e), []),
  Y_ = Bd.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
function J_(e) {
  return e.reduce((t, r) => ((t += Q_[r]), t), "");
}
function X_(e) {
  const t = [];
  for (const r of e) {
    const i = Y_[r.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const Z_ = Ho({ prefix: "🚀", name: "base256emoji", encode: J_, decode: X_ });
var eE = Object.freeze({ __proto__: null, base256emoji: Z_ }),
  tE = Ld,
  Kl = 128,
  rE = 127,
  iE = ~rE,
  nE = Math.pow(2, 31);
function Ld(e, t, r) {
  (t = t || []), (r = r || 0);
  for (var i = r; e >= nE; ) (t[r++] = (e & 255) | Kl), (e /= 128);
  for (; e & iE; ) (t[r++] = (e & 255) | Kl), (e >>>= 7);
  return (t[r] = e | 0), (Ld.bytes = r - i + 1), t;
}
var sE = ac,
  oE = 128,
  Vl = 127;
function ac(e, i) {
  var r = 0,
    i = i || 0,
    n = 0,
    s = i,
    o,
    c = e.length;
  do {
    if (s >= c)
      throw ((ac.bytes = 0), new RangeError("Could not decode varint"));
    (o = e[s++]),
      (r += n < 28 ? (o & Vl) << n : (o & Vl) * Math.pow(2, n)),
      (n += 7);
  } while (o >= oE);
  return (ac.bytes = s - i), r;
}
var aE = Math.pow(2, 7),
  cE = Math.pow(2, 14),
  uE = Math.pow(2, 21),
  lE = Math.pow(2, 28),
  hE = Math.pow(2, 35),
  fE = Math.pow(2, 42),
  dE = Math.pow(2, 49),
  gE = Math.pow(2, 56),
  pE = Math.pow(2, 63),
  mE = function (e) {
    return e < aE
      ? 1
      : e < cE
      ? 2
      : e < uE
      ? 3
      : e < lE
      ? 4
      : e < hE
      ? 5
      : e < fE
      ? 6
      : e < dE
      ? 7
      : e < gE
      ? 8
      : e < pE
      ? 9
      : 10;
  },
  yE = { encode: tE, decode: sE, encodingLength: mE },
  Fd = yE;
const Hl = (e, t, r = 0) => (Fd.encode(e, t, r), t),
  Gl = (e) => Fd.encodingLength(e),
  cc = (e, t) => {
    const r = t.byteLength,
      i = Gl(e),
      n = i + Gl(r),
      s = new Uint8Array(n + r);
    return Hl(e, s, 0), Hl(r, s, i), s.set(t, n), new wE(e, r, t, s);
  };
class wE {
  constructor(t, r, i, n) {
    (this.code = t), (this.size = r), (this.digest = i), (this.bytes = n);
  }
}
const $d = ({ name: e, code: t, encode: r }) => new vE(e, t, r);
class vE {
  constructor(t, r, i) {
    (this.name = t), (this.code = r), (this.encode = i);
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array
        ? cc(this.code, r)
        : r.then((i) => cc(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
}
const Ud = (e) => (t) =>
    P(void 0, null, function* () {
      return new Uint8Array(yield crypto.subtle.digest(e, t));
    }),
  bE = $d({ name: "sha2-256", code: 18, encode: Ud("SHA-256") }),
  _E = $d({ name: "sha2-512", code: 19, encode: Ud("SHA-512") });
var EE = Object.freeze({ __proto__: null, sha256: bE, sha512: _E });
const kd = 0,
  AE = "identity",
  qd = Rd,
  SE = (e) => cc(kd, qd(e)),
  IE = { code: kd, name: AE, encode: qd, digest: SE };
var DE = Object.freeze({ __proto__: null, identity: IE });
new TextEncoder(), new TextDecoder();
const Wl = Ye(
  Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye({}, w_), b_), E_), S_), x_), F_), k_), z_), W_),
  eE
);
Ye(Ye({}, EE), DE);
function xE(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(e)
    : new Uint8Array(e);
}
function jd(e, t, r, i) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: r },
    decoder: { decode: i },
  };
}
const Ql = jd(
    "utf8",
    "u",
    (e) => "u" + new TextDecoder("utf8").decode(e),
    (e) => new TextEncoder().encode(e.substring(1))
  ),
  Sa = jd(
    "ascii",
    "a",
    (e) => {
      let t = "a";
      for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
      return t;
    },
    (e) => {
      e = e.substring(1);
      const t = xE(e.length);
      for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
      return t;
    }
  ),
  CE = Ye(
    {
      utf8: Ql,
      "utf-8": Ql,
      hex: Wl.base16,
      latin1: Sa,
      ascii: Sa,
      binary: Sa,
    },
    Wl
  );
function TE(e, t = "utf8") {
  const r = CE[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(e, "utf8")
    : r.decoder.decode(`${r.prefix}${e}`);
}
const zd = "wc",
  ME = 2,
  Qc = "core",
  Li = `${zd}@2:${Qc}:`,
  NE = { name: Qc, logger: "error" },
  OE = { database: ":memory:" },
  RE = "crypto",
  Yl = "client_ed25519_seed",
  PE = oe.ONE_DAY,
  BE = "keychain",
  LE = "0.3",
  FE = "messages",
  $E = "0.3",
  UE = oe.SIX_HOURS,
  kE = "publisher",
  Kd = "irn",
  qE = "error",
  Vd = "wss://relay.walletconnect.com",
  Jl = "wss://relay.walletconnect.org",
  jE = "relayer",
  nr = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  zE = "_subscription",
  Er = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  KE = oe.ONE_SECOND,
  VE = "2.13.2",
  HE = 1e4,
  GE = "0.3",
  WE = "WALLETCONNECT_CLIENT_ID",
  ri = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  QE = "subscription",
  YE = "0.3",
  JE = oe.FIVE_SECONDS * 1e3,
  XE = "pairing",
  ZE = "0.3",
  os = {
    wc_pairingDelete: {
      req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: oe.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: oe.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: oe.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: oe.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  vn = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Pr = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  e5 = "history",
  t5 = "0.3",
  r5 = "expirer",
  Dr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  i5 = "0.3",
  Ia = "verify-api",
  bn = "https://verify.walletconnect.com",
  uc = "https://verify.walletconnect.org",
  n5 = [bn, uc],
  s5 = "echo",
  o5 = "https://echo.walletconnect.com";
class a5 {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.keychain = new Map()),
      (this.name = BE),
      (this.version = LE),
      (this.initialized = !1),
      (this.storagePrefix = Li),
      (this.init = () =>
        P(this, null, function* () {
          if (!this.initialized) {
            const i = yield this.getKeyChain();
            typeof i < "u" && (this.keychain = i), (this.initialized = !0);
          }
        })),
      (this.has = (i) => (this.isInitialized(), this.keychain.has(i))),
      (this.set = (i, n) =>
        P(this, null, function* () {
          this.isInitialized(), this.keychain.set(i, n), yield this.persist();
        })),
      (this.get = (i) => {
        this.isInitialized();
        const n = this.keychain.get(i);
        if (typeof n > "u") {
          const { message: s } = se("NO_MATCHING_KEY", `${this.name}: ${i}`);
          throw new Error(s);
        }
        return n;
      }),
      (this.del = (i) =>
        P(this, null, function* () {
          this.isInitialized(), this.keychain.delete(i), yield this.persist();
        })),
      (this.core = t),
      (this.logger = cr(r, this.name));
  }
  get context() {
    return ar(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  setKeyChain(t) {
    return P(this, null, function* () {
      yield this.core.storage.setItem(this.storageKey, Lf(t));
    });
  }
  getKeyChain() {
    return P(this, null, function* () {
      const t = yield this.core.storage.getItem(this.storageKey);
      return typeof t < "u" ? Ff(t) : void 0;
    });
  }
  persist() {
    return P(this, null, function* () {
      yield this.setKeyChain(this.keychain);
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class c5 {
  constructor(t, r, i) {
    (this.core = t),
      (this.logger = r),
      (this.name = RE),
      (this.initialized = !1),
      (this.init = () =>
        P(this, null, function* () {
          this.initialized ||
            (yield this.keychain.init(), (this.initialized = !0));
        })),
      (this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n))),
      (this.getClientId = () =>
        P(this, null, function* () {
          this.isInitialized();
          const n = yield this.getClientSeed(),
            s = Lu(n);
          return Ef(s.publicKey);
        })),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const n = h3();
        return this.setPrivateKey(n.publicKey, n.privateKey);
      }),
      (this.signJWT = (n) =>
        P(this, null, function* () {
          this.isInitialized();
          const s = yield this.getClientSeed(),
            o = Lu(s),
            c = rc();
          return yield iw(c, n, PE, o);
        })),
      (this.generateSharedKey = (n, s, o) => {
        this.isInitialized();
        const c = this.getPrivateKey(n),
          l = f3(c, s);
        return this.setSymKey(l, o);
      }),
      (this.setSymKey = (n, s) =>
        P(this, null, function* () {
          this.isInitialized();
          const o = s || ao(n);
          return yield this.keychain.set(o, n), o;
        })),
      (this.deleteKeyPair = (n) =>
        P(this, null, function* () {
          this.isInitialized(), yield this.keychain.del(n);
        })),
      (this.deleteSymKey = (n) =>
        P(this, null, function* () {
          this.isInitialized(), yield this.keychain.del(n);
        })),
      (this.encode = (n, s, o) =>
        P(this, null, function* () {
          this.isInitialized();
          const c = Id(o),
            l = tn(s);
          if (Dl(c)) {
            const D = c.senderPublicKey,
              A = c.receiverPublicKey;
            n = yield this.generateSharedKey(D, A);
          }
          const f = this.getSymKey(n),
            { type: g, senderPublicKey: w } = c;
          return g3({ type: g, symKey: f, message: l, senderPublicKey: w });
        })),
      (this.decode = (n, s, o) =>
        P(this, null, function* () {
          this.isInitialized();
          const c = y3(s, o);
          if (Dl(c)) {
            const l = c.receiverPublicKey,
              f = c.senderPublicKey;
            n = yield this.generateSharedKey(l, f);
          }
          try {
            const l = this.getSymKey(n),
              f = p3({ symKey: l, encoded: s });
            return Po(f);
          } catch (l) {
            this.logger.error(
              `Failed to decode message from topic: '${n}', clientId: '${yield this.getClientId()}'`
            ),
              this.logger.error(l);
          }
        })),
      (this.getPayloadType = (n) => {
        const s = _o(n);
        return Rs(s.type);
      }),
      (this.getPayloadSenderPublicKey = (n) => {
        const s = _o(n);
        return s.senderPublicKey ? Nr(s.senderPublicKey, Jt) : void 0;
      }),
      (this.core = t),
      (this.logger = cr(r, this.name)),
      (this.keychain = i || new a5(this.core, this.logger));
  }
  get context() {
    return ar(this.logger);
  }
  setPrivateKey(t, r) {
    return P(this, null, function* () {
      return yield this.keychain.set(t, r), t;
    });
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  getClientSeed() {
    return P(this, null, function* () {
      let t = "";
      try {
        t = this.keychain.get(Yl);
      } catch (r) {
        (t = rc()), yield this.keychain.set(Yl, t);
      }
      return TE(t, "base16");
    });
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class u5 extends om {
  constructor(t, r) {
    super(t, r),
      (this.logger = t),
      (this.core = r),
      (this.messages = new Map()),
      (this.name = FE),
      (this.version = $E),
      (this.initialized = !1),
      (this.storagePrefix = Li),
      (this.init = () =>
        P(this, null, function* () {
          if (!this.initialized) {
            this.logger.trace("Initialized");
            try {
              const i = yield this.getRelayerMessages();
              typeof i < "u" && (this.messages = i),
                this.logger.debug(
                  `Successfully Restored records for ${this.name}`
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  size: this.messages.size,
                });
            } catch (i) {
              this.logger.debug(`Failed to Restore records for ${this.name}`),
                this.logger.error(i);
            } finally {
              this.initialized = !0;
            }
          }
        })),
      (this.set = (i, n) =>
        P(this, null, function* () {
          this.isInitialized();
          const s = Xi(n);
          let o = this.messages.get(i);
          return (
            typeof o > "u" && (o = {}),
            typeof o[s] < "u" ||
              ((o[s] = n), this.messages.set(i, o), yield this.persist()),
            s
          );
        })),
      (this.get = (i) => {
        this.isInitialized();
        let n = this.messages.get(i);
        return typeof n > "u" && (n = {}), n;
      }),
      (this.has = (i, n) => {
        this.isInitialized();
        const s = this.get(i),
          o = Xi(n);
        return typeof s[o] < "u";
      }),
      (this.del = (i) =>
        P(this, null, function* () {
          this.isInitialized(), this.messages.delete(i), yield this.persist();
        })),
      (this.logger = cr(t, this.name)),
      (this.core = r);
  }
  get context() {
    return ar(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  setRelayerMessages(t) {
    return P(this, null, function* () {
      yield this.core.storage.setItem(this.storageKey, Lf(t));
    });
  }
  getRelayerMessages() {
    return P(this, null, function* () {
      const t = yield this.core.storage.getItem(this.storageKey);
      return typeof t < "u" ? Ff(t) : void 0;
    });
  }
  persist() {
    return P(this, null, function* () {
      yield this.setRelayerMessages(this.messages);
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class l5 extends am {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.events = new zr.EventEmitter()),
      (this.name = kE),
      (this.queue = new Map()),
      (this.publishTimeout = oe.toMiliseconds(oe.ONE_MINUTE)),
      (this.failedPublishTimeout = oe.toMiliseconds(oe.ONE_SECOND)),
      (this.needsTransportRestart = !1),
      (this.publish = (i, n, s) =>
        P(this, null, function* () {
          var o;
          this.logger.debug("Publishing Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: i, message: n, opts: s },
            });
          const c = (s == null ? void 0 : s.ttl) || UE,
            l = ic(s),
            f = (s == null ? void 0 : s.prompt) || !1,
            g = (s == null ? void 0 : s.tag) || 0,
            w = (s == null ? void 0 : s.id) || Zi().toString(),
            D = {
              topic: i,
              message: n,
              opts: { ttl: c, relay: l, prompt: f, tag: g, id: w },
            },
            A = `Failed to publish payload, please try again. id:${w} tag:${g}`,
            M = Date.now();
          let K,
            q = 1;
          try {
            for (; K === void 0; ) {
              if (Date.now() - M > this.publishTimeout) throw new Error(A);
              this.logger.trace(
                { id: w, attempts: q },
                `publisher.publish - attempt ${q}`
              ),
                (K = yield yield An(
                  this.rpcPublish(i, n, c, l, f, g, w).catch((Q) =>
                    this.logger.warn(Q)
                  ),
                  this.publishTimeout,
                  A
                )),
                q++,
                K ||
                  (yield new Promise((Q) =>
                    setTimeout(Q, this.failedPublishTimeout)
                  ));
            }
            this.relayer.events.emit(nr.publish, D),
              this.logger.debug("Successfully Published Payload"),
              this.logger.trace({
                type: "method",
                method: "publish",
                params: { id: w, topic: i, message: n, opts: s },
              });
          } catch (Q) {
            if (
              (this.logger.debug("Failed to Publish Payload"),
              this.logger.error(Q),
              (o = s == null ? void 0 : s.internal) != null &&
                o.throwOnFailedPublish)
            )
              throw Q;
            this.queue.set(w, D);
          }
        })),
      (this.on = (i, n) => {
        this.events.on(i, n);
      }),
      (this.once = (i, n) => {
        this.events.once(i, n);
      }),
      (this.off = (i, n) => {
        this.events.off(i, n);
      }),
      (this.removeListener = (i, n) => {
        this.events.removeListener(i, n);
      }),
      (this.relayer = t),
      (this.logger = cr(r, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return ar(this.logger);
  }
  rpcPublish(t, r, i, n, s, o, c) {
    var l, f, g, w;
    const D = {
      method: fs(n.protocol).publish,
      params: { topic: t, message: r, ttl: i, prompt: s, tag: o },
      id: c,
    };
    return (
      Qt((l = D.params) == null ? void 0 : l.prompt) &&
        ((f = D.params) == null || delete f.prompt),
      Qt((g = D.params) == null ? void 0 : g.tag) &&
        ((w = D.params) == null || delete w.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: D }),
      this.relayer.request(D)
    );
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach((t) =>
      P(this, null, function* () {
        const { topic: r, message: i, opts: n } = t;
        yield this.publish(r, i, n);
      })
    );
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(xs.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(nr.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(nr.message_ack, (t) => {
        this.removeRequestFromQueue(t.id.toString());
      });
  }
}
class h5 {
  constructor() {
    (this.map = new Map()),
      (this.set = (t, r) => {
        const i = this.get(t);
        this.exists(t, r) || this.map.set(t, [...i, r]);
      }),
      (this.get = (t) => this.map.get(t) || []),
      (this.exists = (t, r) => this.get(t).includes(r)),
      (this.delete = (t, r) => {
        if (typeof r > "u") {
          this.map.delete(t);
          return;
        }
        if (!this.map.has(t)) return;
        const i = this.get(t);
        if (!this.exists(t, r)) return;
        const n = i.filter((s) => s !== r);
        if (!n.length) {
          this.map.delete(t);
          return;
        }
        this.map.set(t, n);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var f5 = Object.defineProperty,
  d5 = Object.defineProperties,
  g5 = Object.getOwnPropertyDescriptors,
  Xl = Object.getOwnPropertySymbols,
  p5 = Object.prototype.hasOwnProperty,
  m5 = Object.prototype.propertyIsEnumerable,
  Zl = (e, t, r) =>
    t in e
      ? f5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  as = (e, t) => {
    for (var r in t || (t = {})) p5.call(t, r) && Zl(e, r, t[r]);
    if (Xl) for (var r of Xl(t)) m5.call(t, r) && Zl(e, r, t[r]);
    return e;
  },
  Da = (e, t) => d5(e, g5(t));
class y5 extends lm {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.subscriptions = new Map()),
      (this.topicMap = new h5()),
      (this.events = new zr.EventEmitter()),
      (this.name = QE),
      (this.version = YE),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = Li),
      (this.subscribeTimeout = oe.toMiliseconds(oe.ONE_MINUTE)),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.pendingBatchMessages = []),
      (this.init = () =>
        P(this, null, function* () {
          this.initialized ||
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            (this.clientId = yield this.relayer.core.crypto.getClientId()));
        })),
      (this.subscribe = (i, n) =>
        P(this, null, function* () {
          yield this.restartToComplete(),
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: i, opts: n },
            });
          try {
            const s = ic(n),
              o = { topic: i, relay: s };
            this.pending.set(i, o);
            const c = yield this.rpcSubscribe(i, s);
            return (
              typeof c == "string" &&
                (this.onSubscribe(c, o),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: i, opts: n },
                })),
              c
            );
          } catch (s) {
            throw (
              (this.logger.debug("Failed to Subscribe Topic"),
              this.logger.error(s),
              s)
            );
          }
        })),
      (this.unsubscribe = (i, n) =>
        P(this, null, function* () {
          yield this.restartToComplete(),
            this.isInitialized(),
            typeof (n == null ? void 0 : n.id) < "u"
              ? yield this.unsubscribeById(i, n.id, n)
              : yield this.unsubscribeByTopic(i, n);
        })),
      (this.isSubscribed = (i) =>
        P(this, null, function* () {
          if (this.topics.includes(i)) return !0;
          const n = `${this.pendingSubscriptionWatchLabel}_${i}`;
          return yield new Promise((s, o) => {
            const c = new oe.Watch();
            c.start(n);
            const l = setInterval(() => {
              !this.pending.has(i) &&
                this.topics.includes(i) &&
                (clearInterval(l), c.stop(n), s(!0)),
                c.elapsed(n) >= JE &&
                  (clearInterval(l),
                  c.stop(n),
                  o(new Error("Subscription resolution timeout")));
            }, this.pollingInterval);
          }).catch(() => !1);
        })),
      (this.on = (i, n) => {
        this.events.on(i, n);
      }),
      (this.once = (i, n) => {
        this.events.once(i, n);
      }),
      (this.off = (i, n) => {
        this.events.off(i, n);
      }),
      (this.removeListener = (i, n) => {
        this.events.removeListener(i, n);
      }),
      (this.start = () =>
        P(this, null, function* () {
          yield this.onConnect();
        })),
      (this.stop = () =>
        P(this, null, function* () {
          yield this.onDisconnect();
        })),
      (this.restart = () =>
        P(this, null, function* () {
          (this.restartInProgress = !0),
            yield this.restore(),
            yield this.reset(),
            (this.restartInProgress = !1);
        })),
      (this.relayer = t),
      (this.logger = cr(r, this.name)),
      (this.clientId = "");
  }
  get context() {
    return ar(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, r) {
    let i = !1;
    try {
      i = this.getSubscription(t).topic === r;
    } catch (n) {}
    return i;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  unsubscribeByTopic(t, r) {
    return P(this, null, function* () {
      const i = this.topicMap.get(t);
      yield Promise.all(
        i.map((n) =>
          P(this, null, function* () {
            return yield this.unsubscribeById(t, n, r);
          })
        )
      );
    });
  }
  unsubscribeById(t, r, i) {
    return P(this, null, function* () {
      this.logger.debug("Unsubscribing Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: t, id: r, opts: i },
        });
      try {
        const n = ic(i);
        yield this.rpcUnsubscribe(t, r, n);
        const s = lt("USER_DISCONNECTED", `${this.name}, ${t}`);
        yield this.onUnsubscribe(t, r, s),
          this.logger.debug("Successfully Unsubscribed Topic"),
          this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: { topic: t, id: r, opts: i },
          });
      } catch (n) {
        throw (
          (this.logger.debug("Failed to Unsubscribe Topic"),
          this.logger.error(n),
          n)
        );
      }
    });
  }
  rpcSubscribe(t, r) {
    return P(this, null, function* () {
      const i = { method: fs(r.protocol).subscribe, params: { topic: t } };
      this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: i,
        });
      try {
        return (yield yield An(
          this.relayer.request(i).catch((n) => this.logger.warn(n)),
          this.subscribeTimeout
        ))
          ? Xi(t + this.clientId)
          : null;
      } catch (n) {
        this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
          this.relayer.events.emit(nr.connection_stalled);
      }
      return null;
    });
  }
  rpcBatchSubscribe(t) {
    return P(this, null, function* () {
      if (!t.length) return;
      const r = t[0].relay,
        i = {
          method: fs(r.protocol).batchSubscribe,
          params: { topics: t.map((n) => n.topic) },
        };
      this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: i,
        });
      try {
        return yield yield An(
          this.relayer.request(i).catch((n) => this.logger.warn(n)),
          this.subscribeTimeout
        );
      } catch (n) {
        this.relayer.events.emit(nr.connection_stalled);
      }
    });
  }
  rpcBatchFetchMessages(t) {
    return P(this, null, function* () {
      if (!t.length) return;
      const r = t[0].relay,
        i = {
          method: fs(r.protocol).batchFetchMessages,
          params: { topics: t.map((s) => s.topic) },
        };
      this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: i,
        });
      let n;
      try {
        n = yield yield An(
          this.relayer.request(i).catch((s) => this.logger.warn(s)),
          this.subscribeTimeout
        );
      } catch (s) {
        this.relayer.events.emit(nr.connection_stalled);
      }
      return n;
    });
  }
  rpcUnsubscribe(t, r, i) {
    const n = {
      method: fs(i.protocol).unsubscribe,
      params: { topic: t, id: r },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: n }),
      this.relayer.request(n)
    );
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Da(as({}, r), { id: t })),
      this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length &&
      t.forEach((r) => {
        this.setSubscription(r.id, as({}, r)), this.pending.delete(r.topic);
      });
  }
  onUnsubscribe(t, r, i) {
    return P(this, null, function* () {
      this.events.removeAllListeners(r),
        this.hasSubscription(r, t) && this.deleteSubscription(r, i),
        yield this.relayer.messages.del(t);
    });
  }
  setRelayerSubscriptions(t) {
    return P(this, null, function* () {
      yield this.relayer.core.storage.setItem(this.storageKey, t);
    });
  }
  getRelayerSubscriptions() {
    return P(this, null, function* () {
      return yield this.relayer.core.storage.getItem(this.storageKey);
    });
  }
  setSubscription(t, r) {
    this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: t,
        subscription: r,
      }),
      this.addSubscription(t, r);
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, as({}, r)),
      this.topicMap.set(r.topic, t),
      this.events.emit(ri.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: i } = se("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: t,
        reason: r,
      });
    const i = this.getSubscription(t);
    this.subscriptions.delete(t),
      this.topicMap.delete(i.topic, t),
      this.events.emit(ri.deleted, Da(as({}, i), { reason: r }));
  }
  persist() {
    return P(this, null, function* () {
      yield this.setRelayerSubscriptions(this.values),
        this.events.emit(ri.sync);
    });
  }
  reset() {
    return P(this, null, function* () {
      if (this.cached.length) {
        const t = Math.ceil(
          this.cached.length / this.batchSubscribeTopicsLimit
        );
        for (let r = 0; r < t; r++) {
          const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
          yield this.batchFetchMessages(i), yield this.batchSubscribe(i);
        }
      }
      this.events.emit(ri.resubscribed);
    });
  }
  restore() {
    return P(this, null, function* () {
      try {
        const t = yield this.getRelayerSubscriptions();
        if (typeof t > "u" || !t.length) return;
        if (this.subscriptions.size) {
          const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
          throw (
            (this.logger.error(r),
            this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
            new Error(r))
          );
        }
        (this.cached = t),
          this.logger.debug(
            `Successfully Restored subscriptions for ${this.name}`
          ),
          this.logger.trace({
            type: "method",
            method: "restore",
            subscriptions: this.values,
          });
      } catch (t) {
        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
          this.logger.error(t);
      }
    });
  }
  batchSubscribe(t) {
    return P(this, null, function* () {
      if (!t.length) return;
      const r = yield this.rpcBatchSubscribe(t);
      Ps(r) &&
        this.onBatchSubscribe(r.map((i, n) => Da(as({}, t[n]), { id: i })));
    });
  }
  batchFetchMessages(t) {
    return P(this, null, function* () {
      if (!t.length) return;
      this.logger.trace(
        `Fetching batch messages for ${t.length} subscriptions`
      );
      const r = yield this.rpcBatchFetchMessages(t);
      r &&
        r.messages &&
        (this.pendingBatchMessages = this.pendingBatchMessages.concat(
          r.messages
        ));
    });
  }
  onConnect() {
    return P(this, null, function* () {
      yield this.restart(), this.onEnable();
    });
  }
  onDisconnect() {
    this.onDisable();
  }
  checkPending() {
    return P(this, null, function* () {
      if (!this.initialized || !this.relayer.connected) return;
      const t = [];
      this.pending.forEach((r) => {
        t.push(r);
      }),
        yield this.batchSubscribe(t),
        this.pendingBatchMessages.length &&
          (yield this.relayer.handleBatchMessageEvents(
            this.pendingBatchMessages
          ),
          (this.pendingBatchMessages = []));
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(xs.pulse, () =>
      P(this, null, function* () {
        yield this.checkPending();
      })
    ),
      this.events.on(ri.created, (t) =>
        P(this, null, function* () {
          const r = ri.created;
          this.logger.info(`Emitting ${r}`),
            this.logger.debug({ type: "event", event: r, data: t }),
            yield this.persist();
        })
      ),
      this.events.on(ri.deleted, (t) =>
        P(this, null, function* () {
          const r = ri.deleted;
          this.logger.info(`Emitting ${r}`),
            this.logger.debug({ type: "event", event: r, data: t }),
            yield this.persist();
        })
      );
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  restartToComplete() {
    return P(this, null, function* () {
      this.restartInProgress &&
        (yield new Promise((t) => {
          const r = setInterval(() => {
            this.restartInProgress || (clearInterval(r), t());
          }, this.pollingInterval);
        }));
    });
  }
}
var w5 = Object.defineProperty,
  eh = Object.getOwnPropertySymbols,
  v5 = Object.prototype.hasOwnProperty,
  b5 = Object.prototype.propertyIsEnumerable,
  th = (e, t, r) =>
    t in e
      ? w5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  _5 = (e, t) => {
    for (var r in t || (t = {})) v5.call(t, r) && th(e, r, t[r]);
    if (eh) for (var r of eh(t)) b5.call(t, r) && th(e, r, t[r]);
    return e;
  };
class E5 extends cm {
  constructor(t) {
    super(t),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new zr.EventEmitter()),
      (this.name = jE),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = [
        "socket hang up",
        "stalled",
        "interrupted",
      ]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.requestsInFlight = new Map()),
      (this.heartBeatTimeout = oe.toMiliseconds(
        oe.THIRTY_SECONDS + oe.ONE_SECOND
      )),
      (this.request = (r) =>
        P(this, null, function* () {
          var i, n;
          this.logger.debug("Publishing Request Payload");
          const s = r.id || Zi().toString();
          yield this.toEstablishConnection();
          try {
            const o = this.provider.request(r);
            this.requestsInFlight.set(s, { promise: o, request: r }),
              this.logger.trace(
                {
                  id: s,
                  method: r.method,
                  topic: (i = r.params) == null ? void 0 : i.topic,
                },
                "relayer.request - attempt to publish..."
              );
            const c = yield new Promise((l, f) =>
              P(this, null, function* () {
                const g = () => {
                  f(
                    new Error(`relayer.request - publish interrupted, id: ${s}`)
                  );
                };
                this.provider.on(Er.disconnect, g);
                const w = yield o;
                this.provider.off(Er.disconnect, g), l(w);
              })
            );
            return (
              this.logger.trace(
                {
                  id: s,
                  method: r.method,
                  topic: (n = r.params) == null ? void 0 : n.topic,
                },
                "relayer.request - published"
              ),
              c
            );
          } catch (o) {
            throw (this.logger.debug(`Failed to Publish Request: ${s}`), o);
          } finally {
            this.requestsInFlight.delete(s);
          }
        })),
      (this.resetPingTimeout = () => {
        if (_s())
          try {
            clearTimeout(this.pingTimeout),
              (this.pingTimeout = setTimeout(() => {
                var r, i, n;
                (n =
                  (i = (r = this.provider) == null ? void 0 : r.connection) ==
                  null
                    ? void 0
                    : i.socket) == null || n.terminate();
              }, this.heartBeatTimeout));
          } catch (r) {
            this.logger.warn(r);
          }
      }),
      (this.onPayloadHandler = (r) => {
        this.onProviderPayload(r), this.resetPingTimeout();
      }),
      (this.onConnectHandler = () => {
        this.startPingTimeout(), this.events.emit(nr.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (r) => {
        this.logger.error(r),
          this.events.emit(nr.error, r),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(Er.payload, this.onPayloadHandler),
          this.provider.on(Er.connect, this.onConnectHandler),
          this.provider.on(Er.disconnect, this.onDisconnectHandler),
          this.provider.on(Er.error, this.onProviderErrorHandler);
      }),
      (this.core = t.core),
      (this.logger =
        typeof t.logger < "u" && typeof t.logger != "string"
          ? cr(t.logger, this.name)
          : Fo(Ic({ level: t.logger || qE }))),
      (this.messages = new u5(this.logger, t.core)),
      (this.subscriber = new y5(this, this.logger)),
      (this.publisher = new l5(this, this.logger)),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || Vd),
      (this.projectId = t.projectId),
      (this.bundleId = tv()),
      (this.provider = {});
  }
  init() {
    return P(this, null, function* () {
      this.logger.trace("Initialized"),
        this.registerEventListeners(),
        yield Promise.all([this.messages.init(), this.subscriber.init()]);
      try {
        yield this.transportOpen();
      } catch (t) {
        this.logger.warn(
          `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Jl}...`
        ),
          yield this.restartTransport(Jl);
      }
      (this.initialized = !0),
        setTimeout(
          () =>
            P(this, null, function* () {
              this.subscriber.topics.length === 0 &&
                this.subscriber.pending.size === 0 &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                yield this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }),
          HE
        );
    });
  }
  get context() {
    return ar(this.logger);
  }
  get connected() {
    var t, r, i;
    return (
      ((i =
        (r = (t = this.provider) == null ? void 0 : t.connection) == null
          ? void 0
          : r.socket) == null
        ? void 0
        : i.readyState) === 1
    );
  }
  get connecting() {
    var t, r, i;
    return (
      ((i =
        (r = (t = this.provider) == null ? void 0 : t.connection) == null
          ? void 0
          : r.socket) == null
        ? void 0
        : i.readyState) === 0
    );
  }
  publish(t, r, i) {
    return P(this, null, function* () {
      this.isInitialized(),
        yield this.publisher.publish(t, r, i),
        yield this.recordMessageEvent({
          topic: t,
          message: r,
          publishedAt: Date.now(),
        });
    });
  }
  subscribe(t, r) {
    return P(this, null, function* () {
      var i;
      this.isInitialized();
      let n =
          ((i = this.subscriber.topicMap.get(t)) == null ? void 0 : i[0]) || "",
        s;
      const o = (c) => {
        c.topic === t && (this.subscriber.off(ri.created, o), s());
      };
      return (
        yield Promise.all([
          new Promise((c) => {
            (s = c), this.subscriber.on(ri.created, o);
          }),
          new Promise((c) =>
            P(this, null, function* () {
              (n = (yield this.subscriber.subscribe(t, r)) || n), c();
            })
          ),
        ]),
        n
      );
    });
  }
  unsubscribe(t, r) {
    return P(this, null, function* () {
      this.isInitialized(), yield this.subscriber.unsubscribe(t, r);
    });
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  transportDisconnect() {
    return P(this, null, function* () {
      if (
        !this.hasExperiencedNetworkDisruption &&
        this.connected &&
        this.requestsInFlight.size > 0
      )
        try {
          yield Promise.all(
            Array.from(this.requestsInFlight.values()).map((t) => t.promise)
          );
        } catch (t) {
          this.logger.warn(t);
        }
      this.hasExperiencedNetworkDisruption || this.connected
        ? yield An(
            this.provider.disconnect(),
            2e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.onProviderDisconnect();
    });
  }
  transportClose() {
    return P(this, null, function* () {
      (this.transportExplicitlyClosed = !0), yield this.transportDisconnect();
    });
  }
  transportOpen(t) {
    return P(this, null, function* () {
      yield this.confirmOnlineStateOrThrow(),
        t &&
          t !== this.relayUrl &&
          ((this.relayUrl = t), yield this.transportDisconnect()),
        yield this.createProvider(),
        (this.connectionAttemptInProgress = !0),
        (this.transportExplicitlyClosed = !1);
      try {
        yield new Promise((r, i) =>
          P(this, null, function* () {
            const n = () => {
              this.provider.off(Er.disconnect, n),
                i(
                  new Error("Connection interrupted while trying to subscribe")
                );
            };
            this.provider.on(Er.disconnect, n),
              yield An(
                this.provider.connect(),
                oe.toMiliseconds(oe.ONE_MINUTE),
                `Socket stalled when trying to connect to ${this.relayUrl}`
              ).catch((s) => {
                i(s);
              }),
              yield this.subscriber.start(),
              (this.hasExperiencedNetworkDisruption = !1),
              r();
          })
        );
      } catch (r) {
        this.logger.error(r);
        const i = r;
        if (
          ((this.hasExperiencedNetworkDisruption = !0),
          !this.isConnectionStalled(i.message))
        )
          throw r;
      } finally {
        this.connectionAttemptInProgress = !1;
      }
    });
  }
  restartTransport(t) {
    return P(this, null, function* () {
      this.connectionAttemptInProgress ||
        ((this.relayUrl = t || this.relayUrl),
        yield this.confirmOnlineStateOrThrow(),
        yield this.transportClose(),
        yield this.transportOpen());
    });
  }
  confirmOnlineStateOrThrow() {
    return P(this, null, function* () {
      if (!(yield Ll()))
        throw new Error(
          "No internet connection detected. Please restart your network and try again."
        );
    });
  }
  handleBatchMessageEvents(t) {
    return P(this, null, function* () {
      if ((t == null ? void 0 : t.length) === 0) {
        this.logger.trace("Batch message events is empty. Ignoring...");
        return;
      }
      const r = t.sort((i, n) => i.publishedAt - n.publishedAt);
      this.logger.trace(`Batch of ${r.length} message events sorted`);
      for (const i of r)
        try {
          yield this.onMessageEvent(i);
        } catch (n) {
          this.logger.warn(n);
        }
      this.logger.trace(`Batch of ${r.length} message events processed`);
    });
  }
  startPingTimeout() {
    var t, r, i, n, s;
    if (_s())
      try {
        (r = (t = this.provider) == null ? void 0 : t.connection) != null &&
          r.socket &&
          ((s =
            (n = (i = this.provider) == null ? void 0 : i.connection) == null
              ? void 0
              : n.socket) == null ||
            s.once("ping", () => {
              this.resetPingTimeout();
            })),
          this.resetPingTimeout();
      } catch (o) {
        this.logger.warn(o);
      }
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  createProvider() {
    return P(this, null, function* () {
      this.provider.connection && this.unregisterProviderListeners();
      const t = yield this.core.crypto.signJWT(this.relayUrl);
      (this.provider = new Q6(
        new Z6(
          av({
            sdkVersion: VE,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: t,
            useOnCloseEvent: !0,
            bundleId: this.bundleId,
          })
        )
      )),
        this.registerProviderListeners();
    });
  }
  recordMessageEvent(t) {
    return P(this, null, function* () {
      const { topic: r, message: i } = t;
      yield this.messages.set(r, i);
    });
  }
  shouldIgnoreMessageEvent(t) {
    return P(this, null, function* () {
      const { topic: r, message: i } = t;
      if (!i || i.length === 0)
        return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
      if (!(yield this.subscriber.isSubscribed(r)))
        return (
          this.logger.debug(`Ignoring message for non-subscribed topic ${r}`),
          !0
        );
      const n = this.messages.has(r, i);
      return n && this.logger.debug(`Ignoring duplicate message: ${i}`), n;
    });
  }
  onProviderPayload(t) {
    return P(this, null, function* () {
      if (
        (this.logger.debug("Incoming Relay Payload"),
        this.logger.trace({
          type: "payload",
          direction: "incoming",
          payload: t,
        }),
        Wc(t))
      ) {
        if (!t.method.endsWith(zE)) return;
        const r = t.params,
          { topic: i, message: n, publishedAt: s } = r.data,
          o = { topic: i, message: n, publishedAt: s };
        this.logger.debug("Emitting Relayer Payload"),
          this.logger.trace(_5({ type: "event", event: r.id }, o)),
          this.events.emit(r.id, o),
          yield this.acknowledgePayload(t),
          yield this.onMessageEvent(o);
      } else Vo(t) && this.events.emit(nr.message_ack, t);
    });
  }
  onMessageEvent(t) {
    return P(this, null, function* () {
      (yield this.shouldIgnoreMessageEvent(t)) ||
        (this.events.emit(nr.message, t), yield this.recordMessageEvent(t));
    });
  }
  acknowledgePayload(t) {
    return P(this, null, function* () {
      const r = Hc(t.id, !0);
      yield this.provider.connection.send(r);
    });
  }
  unregisterProviderListeners() {
    this.provider.off(Er.payload, this.onPayloadHandler),
      this.provider.off(Er.connect, this.onConnectHandler),
      this.provider.off(Er.disconnect, this.onDisconnectHandler),
      this.provider.off(Er.error, this.onProviderErrorHandler),
      clearTimeout(this.pingTimeout);
  }
  registerEventListeners() {
    return P(this, null, function* () {
      let t = yield Ll();
      a6((r) =>
        P(this, null, function* () {
          t !== r &&
            ((t = r),
            r
              ? yield this.restartTransport().catch((i) => this.logger.error(i))
              : ((this.hasExperiencedNetworkDisruption = !0),
                yield this.transportDisconnect(),
                (this.transportExplicitlyClosed = !1)));
        })
      );
    });
  }
  onProviderDisconnect() {
    return P(this, null, function* () {
      yield this.subscriber.stop(),
        this.requestsInFlight.clear(),
        clearTimeout(this.pingTimeout),
        this.events.emit(nr.disconnect),
        (this.connectionAttemptInProgress = !1),
        !this.transportExplicitlyClosed &&
          setTimeout(
            () =>
              P(this, null, function* () {
                yield this.transportOpen().catch((t) => this.logger.error(t));
              }),
            oe.toMiliseconds(KE)
          );
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  toEstablishConnection() {
    return P(this, null, function* () {
      yield this.confirmOnlineStateOrThrow(),
        !this.connected &&
          (this.connectionAttemptInProgress &&
            (yield new Promise((t) => {
              const r = setInterval(() => {
                this.connected && (clearInterval(r), t());
              }, this.connectionStatusPollingInterval);
            })),
          yield this.transportOpen());
    });
  }
}
var A5 = Object.defineProperty,
  rh = Object.getOwnPropertySymbols,
  S5 = Object.prototype.hasOwnProperty,
  I5 = Object.prototype.propertyIsEnumerable,
  ih = (e, t, r) =>
    t in e
      ? A5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  nh = (e, t) => {
    for (var r in t || (t = {})) S5.call(t, r) && ih(e, r, t[r]);
    if (rh) for (var r of rh(t)) I5.call(t, r) && ih(e, r, t[r]);
    return e;
  };
class un extends um {
  constructor(t, r, i, n = Li, s = void 0) {
    super(t, r, i, n),
      (this.core = t),
      (this.logger = r),
      (this.name = i),
      (this.map = new Map()),
      (this.version = GE),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Li),
      (this.recentlyDeleted = []),
      (this.recentlyDeletedLimit = 200),
      (this.init = () =>
        P(this, null, function* () {
          this.initialized ||
            (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach((o) => {
              this.getKey && o !== null && !Qt(o)
                ? this.map.set(this.getKey(o), o)
                : $3(o)
                ? this.map.set(o.id, o)
                : U3(o) && this.map.set(o.topic, o);
            }),
            (this.cached = []),
            (this.initialized = !0));
        })),
      (this.set = (o, c) =>
        P(this, null, function* () {
          this.isInitialized(),
            this.map.has(o)
              ? yield this.update(o, c)
              : (this.logger.debug("Setting value"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  key: o,
                  value: c,
                }),
                this.map.set(o, c),
                yield this.persist());
        })),
      (this.get = (o) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: o }),
        this.getData(o)
      )),
      (this.getAll = (o) => (
        this.isInitialized(),
        o
          ? this.values.filter((c) =>
              Object.keys(o).every((l) => t_(c[l], o[l]))
            )
          : this.values
      )),
      (this.update = (o, c) =>
        P(this, null, function* () {
          this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
              type: "method",
              method: "update",
              key: o,
              update: c,
            });
          const l = nh(nh({}, this.getData(o)), c);
          this.map.set(o, l), yield this.persist();
        })),
      (this.delete = (o, c) =>
        P(this, null, function* () {
          this.isInitialized(),
            this.map.has(o) &&
              (this.logger.debug("Deleting value"),
              this.logger.trace({
                type: "method",
                method: "delete",
                key: o,
                reason: c,
              }),
              this.map.delete(o),
              this.addToRecentlyDeleted(o),
              yield this.persist());
        })),
      (this.logger = cr(r, this.name)),
      (this.storagePrefix = n),
      (this.getKey = s);
  }
  get context() {
    return ar(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(t) {
    this.recentlyDeleted.push(t),
      this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
        this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  setDataStore(t) {
    return P(this, null, function* () {
      yield this.core.storage.setItem(this.storageKey, t);
    });
  }
  getDataStore() {
    return P(this, null, function* () {
      return yield this.core.storage.getItem(this.storageKey);
    });
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      if (this.recentlyDeleted.includes(t)) {
        const { message: n } = se(
          "MISSING_OR_INVALID",
          `Record was recently deleted - ${this.name}: ${t}`
        );
        throw (this.logger.error(n), new Error(n));
      }
      const { message: i } = se("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(i), new Error(i));
    }
    return r;
  }
  persist() {
    return P(this, null, function* () {
      yield this.setDataStore(this.values);
    });
  }
  restore() {
    return P(this, null, function* () {
      try {
        const t = yield this.getDataStore();
        if (typeof t > "u" || !t.length) return;
        if (this.map.size) {
          const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
          throw (this.logger.error(r), new Error(r));
        }
        (this.cached = t),
          this.logger.debug(`Successfully Restored value for ${this.name}`),
          this.logger.trace({
            type: "method",
            method: "restore",
            value: this.values,
          });
      } catch (t) {
        this.logger.debug(`Failed to Restore value for ${this.name}`),
          this.logger.error(t);
      }
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class D5 {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.name = XE),
      (this.version = ZE),
      (this.events = new Xh()),
      (this.initialized = !1),
      (this.storagePrefix = Li),
      (this.ignoredPayloadTypes = [Si]),
      (this.registeredMethods = []),
      (this.init = () =>
        P(this, null, function* () {
          this.initialized ||
            (yield this.pairings.init(),
            yield this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            (this.initialized = !0),
            this.logger.trace("Initialized"));
        })),
      (this.register = ({ methods: i }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...i]),
          ]);
      }),
      (this.create = (i) =>
        P(this, null, function* () {
          this.isInitialized();
          const n = rc(),
            s = yield this.core.crypto.setSymKey(n),
            o = Pt(oe.FIVE_MINUTES),
            c = { protocol: Kd },
            l = { topic: s, expiry: o, relay: c, active: !1 },
            f = C3({
              protocol: this.core.protocol,
              version: this.core.version,
              topic: s,
              symKey: n,
              relay: c,
              expiryTimestamp: o,
              methods: i == null ? void 0 : i.methods,
            });
          return (
            this.core.expirer.set(s, o),
            yield this.pairings.set(s, l),
            yield this.core.relayer.subscribe(s),
            { topic: s, uri: f }
          );
        })),
      (this.pair = (i) =>
        P(this, null, function* () {
          this.isInitialized(), this.isValidPair(i);
          const {
            topic: n,
            symKey: s,
            relay: o,
            expiryTimestamp: c,
            methods: l,
          } = Ml(i.uri);
          let f;
          if (
            this.pairings.keys.includes(n) &&
            ((f = this.pairings.get(n)), f.active)
          )
            throw new Error(
              `Pairing already exists: ${n}. Please try again with a new connection URI.`
            );
          const g = c || Pt(oe.FIVE_MINUTES),
            w = { topic: n, relay: o, expiry: g, active: !1, methods: l };
          return (
            this.core.expirer.set(n, g),
            yield this.pairings.set(n, w),
            i.activatePairing && (yield this.activate({ topic: n })),
            this.events.emit(vn.create, w),
            this.core.crypto.keychain.has(n) ||
              (yield this.core.crypto.setSymKey(s, n)),
            yield this.core.relayer.subscribe(n, { relay: o }),
            w
          );
        })),
      (this.activate = (n) =>
        P(this, [n], function* ({ topic: i }) {
          this.isInitialized();
          const s = Pt(oe.THIRTY_DAYS);
          this.core.expirer.set(i, s),
            yield this.pairings.update(i, { active: !0, expiry: s });
        })),
      (this.ping = (i) =>
        P(this, null, function* () {
          this.isInitialized(), yield this.isValidPing(i);
          const { topic: n } = i;
          if (this.pairings.keys.includes(n)) {
            const s = yield this.sendRequest(n, "wc_pairingPing", {}),
              { done: o, resolve: c, reject: l } = Qi();
            this.events.once(ze("pairing_ping", s), ({ error: f }) => {
              f ? l(f) : c();
            }),
              yield o();
          }
        })),
      (this.updateExpiry = (s) =>
        P(this, [s], function* ({ topic: i, expiry: n }) {
          this.isInitialized(), yield this.pairings.update(i, { expiry: n });
        })),
      (this.updateMetadata = (s) =>
        P(this, [s], function* ({ topic: i, metadata: n }) {
          this.isInitialized(),
            yield this.pairings.update(i, { peerMetadata: n });
        })),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = (i) =>
        P(this, null, function* () {
          this.isInitialized(), yield this.isValidDisconnect(i);
          const { topic: n } = i;
          this.pairings.keys.includes(n) &&
            (yield this.sendRequest(
              n,
              "wc_pairingDelete",
              lt("USER_DISCONNECTED")
            ),
            yield this.deletePairing(n));
        })),
      (this.sendRequest = (i, n, s) =>
        P(this, null, function* () {
          const o = Dn(n, s),
            c = yield this.core.crypto.encode(i, o),
            l = os[n].req;
          return (
            this.core.history.set(i, o),
            this.core.relayer.publish(i, c, l),
            o.id
          );
        })),
      (this.sendResult = (i, n, s) =>
        P(this, null, function* () {
          const o = Hc(i, s),
            c = yield this.core.crypto.encode(n, o),
            l = yield this.core.history.get(n, i),
            f = os[l.request.method].res;
          yield this.core.relayer.publish(n, c, f),
            yield this.core.history.resolve(o);
        })),
      (this.sendError = (i, n, s) =>
        P(this, null, function* () {
          const o = Gc(i, s),
            c = yield this.core.crypto.encode(n, o),
            l = yield this.core.history.get(n, i),
            f = os[l.request.method]
              ? os[l.request.method].res
              : os.unregistered_method.res;
          yield this.core.relayer.publish(n, c, f),
            yield this.core.history.resolve(o);
        })),
      (this.deletePairing = (i, n) =>
        P(this, null, function* () {
          yield this.core.relayer.unsubscribe(i),
            yield Promise.all([
              this.pairings.delete(i, lt("USER_DISCONNECTED")),
              this.core.crypto.deleteSymKey(i),
              n ? Promise.resolve() : this.core.expirer.del(i),
            ]);
        })),
      (this.cleanup = () =>
        P(this, null, function* () {
          const i = this.pairings.getAll().filter((n) => Ni(n.expiry));
          yield Promise.all(i.map((n) => this.deletePairing(n.topic)));
        })),
      (this.onRelayEventRequest = (i) => {
        const { topic: n, payload: s } = i;
        switch (s.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(n, s);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(n, s);
          default:
            return this.onUnknownRpcMethodRequest(n, s);
        }
      }),
      (this.onRelayEventResponse = (i) =>
        P(this, null, function* () {
          const { topic: n, payload: s } = i,
            o = (yield this.core.history.get(n, s.id)).request.method;
          switch (o) {
            case "wc_pairingPing":
              return this.onPairingPingResponse(n, s);
            default:
              return this.onUnknownRpcMethodResponse(o);
          }
        })),
      (this.onPairingPingRequest = (i, n) =>
        P(this, null, function* () {
          const { id: s } = n;
          try {
            this.isValidPing({ topic: i }),
              yield this.sendResult(s, i, !0),
              this.events.emit(vn.ping, { id: s, topic: i });
          } catch (o) {
            yield this.sendError(s, i, o), this.logger.error(o);
          }
        })),
      (this.onPairingPingResponse = (i, n) => {
        const { id: s } = n;
        setTimeout(() => {
          ti(n)
            ? this.events.emit(ze("pairing_ping", s), {})
            : Cr(n) &&
              this.events.emit(ze("pairing_ping", s), { error: n.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = (i, n) =>
        P(this, null, function* () {
          const { id: s } = n;
          try {
            this.isValidDisconnect({ topic: i }),
              yield this.deletePairing(i),
              this.events.emit(vn.delete, { id: s, topic: i });
          } catch (o) {
            yield this.sendError(s, i, o), this.logger.error(o);
          }
        })),
      (this.onUnknownRpcMethodRequest = (i, n) =>
        P(this, null, function* () {
          const { id: s, method: o } = n;
          try {
            if (this.registeredMethods.includes(o)) return;
            const c = lt("WC_METHOD_UNSUPPORTED", o);
            yield this.sendError(s, i, c), this.logger.error(c);
          } catch (c) {
            yield this.sendError(s, i, c), this.logger.error(c);
          }
        })),
      (this.onUnknownRpcMethodResponse = (i) => {
        this.registeredMethods.includes(i) ||
          this.logger.error(lt("WC_METHOD_UNSUPPORTED", i));
      }),
      (this.isValidPair = (i) => {
        var n;
        if (!ir(i)) {
          const { message: o } = se(
            "MISSING_OR_INVALID",
            `pair() params: ${i}`
          );
          throw new Error(o);
        }
        if (!F3(i.uri)) {
          const { message: o } = se(
            "MISSING_OR_INVALID",
            `pair() uri: ${i.uri}`
          );
          throw new Error(o);
        }
        const s = Ml(i.uri);
        if (!((n = s == null ? void 0 : s.relay) != null && n.protocol)) {
          const { message: o } = se(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(o);
        }
        if (!(s != null && s.symKey)) {
          const { message: o } = se("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(o);
        }
        if (
          s != null &&
          s.expiryTimestamp &&
          oe.toMiliseconds(s == null ? void 0 : s.expiryTimestamp) < Date.now()
        ) {
          const { message: o } = se(
            "EXPIRED",
            "pair() URI has expired. Please try again with a new connection URI."
          );
          throw new Error(o);
        }
      }),
      (this.isValidPing = (i) =>
        P(this, null, function* () {
          if (!ir(i)) {
            const { message: s } = se(
              "MISSING_OR_INVALID",
              `ping() params: ${i}`
            );
            throw new Error(s);
          }
          const { topic: n } = i;
          yield this.isValidPairingTopic(n);
        })),
      (this.isValidDisconnect = (i) =>
        P(this, null, function* () {
          if (!ir(i)) {
            const { message: s } = se(
              "MISSING_OR_INVALID",
              `disconnect() params: ${i}`
            );
            throw new Error(s);
          }
          const { topic: n } = i;
          yield this.isValidPairingTopic(n);
        })),
      (this.isValidPairingTopic = (i) =>
        P(this, null, function* () {
          if (!bt(i, !1)) {
            const { message: n } = se(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${i}`
            );
            throw new Error(n);
          }
          if (!this.pairings.keys.includes(i)) {
            const { message: n } = se(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${i}`
            );
            throw new Error(n);
          }
          if (Ni(this.pairings.get(i).expiry)) {
            yield this.deletePairing(i);
            const { message: n } = se("EXPIRED", `pairing topic: ${i}`);
            throw new Error(n);
          }
        })),
      (this.core = t),
      (this.logger = cr(r, this.name)),
      (this.pairings = new un(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return ar(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(nr.message, (t) =>
      P(this, null, function* () {
        const { topic: r, message: i } = t;
        if (
          !this.pairings.keys.includes(r) ||
          this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))
        )
          return;
        const n = yield this.core.crypto.decode(r, i);
        try {
          Wc(n)
            ? (this.core.history.set(r, n),
              this.onRelayEventRequest({ topic: r, payload: n }))
            : Vo(n) &&
              (yield this.core.history.resolve(n),
              yield this.onRelayEventResponse({ topic: r, payload: n }),
              this.core.history.delete(r, n.id));
        } catch (s) {
          this.logger.error(s);
        }
      })
    );
  }
  registerExpirerEvents() {
    this.core.expirer.on(Dr.expired, (t) =>
      P(this, null, function* () {
        const { topic: r } = Uf(t.target);
        r &&
          this.pairings.keys.includes(r) &&
          (yield this.deletePairing(r, !0),
          this.events.emit(vn.expire, { topic: r }));
      })
    );
  }
}
class x5 extends sm {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.records = new Map()),
      (this.events = new zr.EventEmitter()),
      (this.name = e5),
      (this.version = t5),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Li),
      (this.init = () =>
        P(this, null, function* () {
          this.initialized ||
            (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach((i) => this.records.set(i.id, i)),
            (this.cached = []),
            this.registerEventListeners(),
            (this.initialized = !0));
        })),
      (this.set = (i, n, s) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: i,
            request: n,
            chainId: s,
          }),
          this.records.has(n.id))
        )
          return;
        const o = {
          id: n.id,
          topic: i,
          request: { method: n.method, params: n.params || null },
          chainId: s,
          expiry: Pt(oe.THIRTY_DAYS),
        };
        this.records.set(o.id, o),
          this.persist(),
          this.events.emit(Pr.created, o);
      }),
      (this.resolve = (i) =>
        P(this, null, function* () {
          if (
            (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
              type: "method",
              method: "update",
              response: i,
            }),
            !this.records.has(i.id))
          )
            return;
          const n = yield this.getRecord(i.id);
          typeof n.response > "u" &&
            ((n.response = Cr(i) ? { error: i.error } : { result: i.result }),
            this.records.set(n.id, n),
            this.persist(),
            this.events.emit(Pr.updated, n));
        })),
      (this.get = (i, n) =>
        P(this, null, function* () {
          return (
            this.isInitialized(),
            this.logger.debug("Getting record"),
            this.logger.trace({
              type: "method",
              method: "get",
              topic: i,
              id: n,
            }),
            yield this.getRecord(n)
          );
        })),
      (this.delete = (i, n) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: n }),
          this.values.forEach((s) => {
            if (s.topic === i) {
              if (typeof n < "u" && s.id !== n) return;
              this.records.delete(s.id), this.events.emit(Pr.deleted, s);
            }
          }),
          this.persist();
      }),
      (this.exists = (i, n) =>
        P(this, null, function* () {
          return (
            this.isInitialized(),
            this.records.has(n) ? (yield this.getRecord(n)).topic === i : !1
          );
        })),
      (this.on = (i, n) => {
        this.events.on(i, n);
      }),
      (this.once = (i, n) => {
        this.events.once(i, n);
      }),
      (this.off = (i, n) => {
        this.events.off(i, n);
      }),
      (this.removeListener = (i, n) => {
        this.events.removeListener(i, n);
      }),
      (this.logger = cr(r, this.name));
  }
  get context() {
    return ar(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return (
      this.values.forEach((r) => {
        if (typeof r.response < "u") return;
        const i = {
          topic: r.topic,
          request: Dn(r.request.method, r.request.params, r.id),
          chainId: r.chainId,
        };
        return t.push(i);
      }),
      t
    );
  }
  setJsonRpcRecords(t) {
    return P(this, null, function* () {
      yield this.core.storage.setItem(this.storageKey, t);
    });
  }
  getJsonRpcRecords() {
    return P(this, null, function* () {
      return yield this.core.storage.getItem(this.storageKey);
    });
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: i } = se("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(i);
    }
    return r;
  }
  persist() {
    return P(this, null, function* () {
      yield this.setJsonRpcRecords(this.values), this.events.emit(Pr.sync);
    });
  }
  restore() {
    return P(this, null, function* () {
      try {
        const t = yield this.getJsonRpcRecords();
        if (typeof t > "u" || !t.length) return;
        if (this.records.size) {
          const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
          throw (this.logger.error(r), new Error(r));
        }
        (this.cached = t),
          this.logger.debug(`Successfully Restored records for ${this.name}`),
          this.logger.trace({
            type: "method",
            method: "restore",
            records: this.values,
          });
      } catch (t) {
        this.logger.debug(`Failed to Restore records for ${this.name}`),
          this.logger.error(t);
      }
    });
  }
  registerEventListeners() {
    this.events.on(Pr.created, (t) => {
      const r = Pr.created;
      this.logger.info(`Emitting ${r}`),
        this.logger.debug({ type: "event", event: r, record: t });
    }),
      this.events.on(Pr.updated, (t) => {
        const r = Pr.updated;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t });
      }),
      this.events.on(Pr.deleted, (t) => {
        const r = Pr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t });
      }),
      this.core.heartbeat.on(xs.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.isInitialized();
      let t = !1;
      this.records.forEach((r) => {
        oe.toMiliseconds(r.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${r.id}`),
          this.records.delete(r.id),
          this.events.emit(Pr.deleted, r, !1),
          (t = !0));
      }),
        t && this.persist();
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class C5 extends hm {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.expirations = new Map()),
      (this.events = new zr.EventEmitter()),
      (this.name = r5),
      (this.version = i5),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Li),
      (this.init = () =>
        P(this, null, function* () {
          this.initialized ||
            (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach((i) => this.expirations.set(i.target, i)),
            (this.cached = []),
            this.registerEventListeners(),
            (this.initialized = !0));
        })),
      (this.has = (i) => {
        try {
          const n = this.formatTarget(i);
          return typeof this.getExpiration(n) < "u";
        } catch (n) {
          return !1;
        }
      }),
      (this.set = (i, n) => {
        this.isInitialized();
        const s = this.formatTarget(i),
          o = { target: s, expiry: n };
        this.expirations.set(s, o),
          this.checkExpiry(s, o),
          this.events.emit(Dr.created, { target: s, expiration: o });
      }),
      (this.get = (i) => {
        this.isInitialized();
        const n = this.formatTarget(i);
        return this.getExpiration(n);
      }),
      (this.del = (i) => {
        if ((this.isInitialized(), this.has(i))) {
          const n = this.formatTarget(i),
            s = this.getExpiration(n);
          this.expirations.delete(n),
            this.events.emit(Dr.deleted, { target: n, expiration: s });
        }
      }),
      (this.on = (i, n) => {
        this.events.on(i, n);
      }),
      (this.once = (i, n) => {
        this.events.once(i, n);
      }),
      (this.off = (i, n) => {
        this.events.off(i, n);
      }),
      (this.removeListener = (i, n) => {
        this.events.removeListener(i, n);
      }),
      (this.logger = cr(r, this.name));
  }
  get context() {
    return ar(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == "string") return cv(t);
    if (typeof t == "number") return uv(t);
    const { message: r } = se("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  setExpirations(t) {
    return P(this, null, function* () {
      yield this.core.storage.setItem(this.storageKey, t);
    });
  }
  getExpirations() {
    return P(this, null, function* () {
      return yield this.core.storage.getItem(this.storageKey);
    });
  }
  persist() {
    return P(this, null, function* () {
      yield this.setExpirations(this.values), this.events.emit(Dr.sync);
    });
  }
  restore() {
    return P(this, null, function* () {
      try {
        const t = yield this.getExpirations();
        if (typeof t > "u" || !t.length) return;
        if (this.expirations.size) {
          const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
          throw (this.logger.error(r), new Error(r));
        }
        (this.cached = t),
          this.logger.debug(
            `Successfully Restored expirations for ${this.name}`
          ),
          this.logger.trace({
            type: "method",
            method: "restore",
            expirations: this.values,
          });
      } catch (t) {
        this.logger.debug(`Failed to Restore expirations for ${this.name}`),
          this.logger.error(t);
      }
    });
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: i } = se("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.warn(i), new Error(i));
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: i } = r;
    oe.toMiliseconds(i) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t),
      this.events.emit(Dr.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(xs.pulse, () => this.checkExpirations()),
      this.events.on(Dr.created, (t) => {
        const r = Dr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on(Dr.expired, (t) => {
        const r = Dr.expired;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on(Dr.deleted, (t) => {
        const r = Dr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = se("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class T5 extends fm {
  constructor(t, r) {
    super(t, r),
      (this.projectId = t),
      (this.logger = r),
      (this.name = Ia),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = (i) =>
        P(this, null, function* () {
          if (this.verifyDisabled || Pn() || !Bn()) return;
          const n = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
          this.verifyUrl !== n && this.removeIframe(), (this.verifyUrl = n);
          try {
            yield this.createIframe();
          } catch (s) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(s);
          }
          if (!this.initialized) {
            this.removeIframe(), (this.verifyUrl = uc);
            try {
              yield this.createIframe();
            } catch (s) {
              this.logger.info(
                `Verify iframe failed to load: ${this.verifyUrl}`
              ),
                this.logger.info(s),
                (this.verifyDisabled = !0);
            }
          }
        })),
      (this.register = (i) =>
        P(this, null, function* () {
          this.initialized
            ? this.sendPost(i.attestationId)
            : (this.addToQueue(i.attestationId), yield this.init());
        })),
      (this.resolve = (i) =>
        P(this, null, function* () {
          if (this.isDevEnv) return "";
          const n = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
          let s;
          try {
            s = yield this.fetchAttestation(i.attestationId, n);
          } catch (o) {
            this.logger.info(
              `failed to resolve attestation: ${i.attestationId} from url: ${n}`
            ),
              this.logger.info(o),
              (s = yield this.fetchAttestation(i.attestationId, uc));
          }
          return s;
        })),
      (this.fetchAttestation = (i, n) =>
        P(this, null, function* () {
          this.logger.info(`resolving attestation: ${i} from url: ${n}`);
          const s = this.startAbortTimer(oe.ONE_SECOND * 2),
            o = yield fetch(`${n}/attestation/${i}`, {
              signal: this.abortController.signal,
            });
          return clearTimeout(s), o.status === 200 ? yield o.json() : void 0;
        })),
      (this.addToQueue = (i) => {
        this.queue.push(i);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((i) => this.sendPost(i)), (this.queue = []));
      }),
      (this.sendPost = (i) => {
        var n;
        try {
          if (!this.iframe) return;
          (n = this.iframe.contentWindow) == null || n.postMessage(i, "*"),
            this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
        } catch (s) {}
      }),
      (this.createIframe = () =>
        P(this, null, function* () {
          let i;
          const n = (s) => {
            s.data === "verify_ready" &&
              (this.onInit(), window.removeEventListener("message", n), i());
          };
          yield Promise.race([
            new Promise((s) => {
              const o = document.getElementById(Ia);
              if (o) return (this.iframe = o), this.onInit(), s();
              window.addEventListener("message", n);
              const c = document.createElement("iframe");
              (c.id = Ia),
                (c.src = `${this.verifyUrl}/${this.projectId}`),
                (c.style.display = "none"),
                document.body.append(c),
                (this.iframe = c),
                (i = s);
            }),
            new Promise((s, o) =>
              setTimeout(() => {
                window.removeEventListener("message", n),
                  o("verify iframe load timeout");
              }, oe.toMiliseconds(oe.FIVE_SECONDS))
            ),
          ]);
        })),
      (this.onInit = () => {
        (this.initialized = !0), this.processQueue();
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (i) => {
        let n = i || bn;
        return (
          n5.includes(n) ||
            (this.logger.info(
              `verify url: ${n}, not included in trusted list, assigning default: ${bn}`
            ),
            (n = bn)),
          n
        );
      }),
      (this.logger = cr(r, this.name)),
      (this.verifyUrl = bn),
      (this.abortController = new AbortController()),
      (this.isDevEnv = _s() && {}.IS_VITEST);
  }
  get context() {
    return ar(this.logger);
  }
  startAbortTimer(t) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), oe.toMiliseconds(t))
    );
  }
}
let M5 = class extends dm {
  constructor(t, r) {
    super(t, r),
      (this.projectId = t),
      (this.logger = r),
      (this.context = s5),
      (this.registerDeviceToken = (i) =>
        P(this, null, function* () {
          const {
              clientId: n,
              token: s,
              notificationType: o,
              enableEncrypted: c = !1,
            } = i,
            l = `${o5}/${this.projectId}/clients`;
          yield s_(l, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              client_id: n,
              type: o,
              token: s,
              always_raw: c,
            }),
          });
        })),
      (this.logger = cr(r, this.context));
  }
};
var N5 = Object.defineProperty,
  sh = Object.getOwnPropertySymbols,
  O5 = Object.prototype.hasOwnProperty,
  R5 = Object.prototype.propertyIsEnumerable,
  oh = (e, t, r) =>
    t in e
      ? N5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ah = (e, t) => {
    for (var r in t || (t = {})) O5.call(t, r) && oh(e, r, t[r]);
    if (sh) for (var r of sh(t)) R5.call(t, r) && oh(e, r, t[r]);
    return e;
  };
class Yc extends nm {
  constructor(t) {
    var r;
    super(t),
      (this.protocol = zd),
      (this.version = ME),
      (this.name = Qc),
      (this.events = new zr.EventEmitter()),
      (this.initialized = !1),
      (this.on = (o, c) => this.events.on(o, c)),
      (this.once = (o, c) => this.events.once(o, c)),
      (this.off = (o, c) => this.events.off(o, c)),
      (this.removeListener = (o, c) => this.events.removeListener(o, c)),
      (this.projectId = t == null ? void 0 : t.projectId),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || Vd),
      (this.customStoragePrefix =
        t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "");
    const i = Ic({
        level:
          typeof (t == null ? void 0 : t.logger) == "string" && t.logger
            ? t.logger
            : NE.logger,
      }),
      { logger: n, chunkLoggerController: s } = im({
        opts: i,
        maxSizeInBytes: t == null ? void 0 : t.maxLogBlobSizeInBytes,
        loggerOverride: t == null ? void 0 : t.logger,
      });
    (this.logChunkController = s),
      (r = this.logChunkController) != null &&
        r.downloadLogsBlobInBrowser &&
        (window.downloadLogsBlobInBrowser = () =>
          P(this, null, function* () {
            var o, c;
            (o = this.logChunkController) != null &&
              o.downloadLogsBlobInBrowser &&
              ((c = this.logChunkController) == null ||
                c.downloadLogsBlobInBrowser({
                  clientId: yield this.crypto.getClientId(),
                }));
          })),
      (this.logger = cr(n, this.name)),
      (this.heartbeat = new Tp()),
      (this.crypto = new c5(
        this,
        this.logger,
        t == null ? void 0 : t.keychain
      )),
      (this.history = new x5(this, this.logger)),
      (this.expirer = new C5(this, this.logger)),
      (this.storage =
        t != null && t.storage
          ? t.storage
          : new Z1(ah(ah({}, OE), t == null ? void 0 : t.storageOptions))),
      (this.relayer = new E5({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new D5(this, this.logger)),
      (this.verify = new T5(this.projectId || "", this.logger)),
      (this.echoClient = new M5(this.projectId || "", this.logger));
  }
  static init(t) {
    return P(this, null, function* () {
      const r = new Yc(t);
      yield r.initialize();
      const i = yield r.crypto.getClientId();
      return yield r.storage.setItem(WE, i), r;
    });
  }
  get context() {
    return ar(this.logger);
  }
  start() {
    return P(this, null, function* () {
      this.initialized || (yield this.initialize());
    });
  }
  getLogsBlob() {
    return P(this, null, function* () {
      var t;
      return (t = this.logChunkController) == null
        ? void 0
        : t.logsToBlob({ clientId: yield this.crypto.getClientId() });
    });
  }
  initialize() {
    return P(this, null, function* () {
      this.logger.trace("Initialized");
      try {
        yield this.crypto.init(),
          yield this.history.init(),
          yield this.expirer.init(),
          yield this.relayer.init(),
          yield this.heartbeat.init(),
          yield this.pairing.init(),
          (this.initialized = !0),
          this.logger.info("Core Initialization Success");
      } catch (t) {
        throw (
          (this.logger.warn(
            `Core Initialization Failure at epoch ${Date.now()}`,
            t
          ),
          this.logger.error(t.message),
          t)
        );
      }
    });
  }
}
const P5 = Yc,
  Hd = "wc",
  Gd = 2,
  Wd = "client",
  Jc = `${Hd}@${Gd}:${Wd}:`,
  xa = {
    name: Wd,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  ch = "WALLETCONNECT_DEEPLINK_CHOICE",
  B5 = "proposal",
  L5 = "Proposal expired",
  F5 = "session",
  pn = oe.SEVEN_DAYS,
  $5 = "engine",
  Rt = {
    wc_sessionPropose: {
      req: { ttl: oe.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1101 },
      reject: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1120 },
      autoReject: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1121 },
    },
    wc_sessionSettle: {
      req: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: oe.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: oe.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1114 },
      res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1115 },
    },
    wc_sessionAuthenticate: {
      req: { ttl: oe.ONE_HOUR, prompt: !0, tag: 1116 },
      res: { ttl: oe.ONE_HOUR, prompt: !1, tag: 1117 },
      reject: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1118 },
      autoReject: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1119 },
    },
  },
  Ca = { min: oe.FIVE_MINUTES, max: oe.SEVEN_DAYS },
  Yr = { idle: "IDLE", active: "ACTIVE" },
  U5 = "request",
  k5 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"],
  q5 = "wc",
  j5 = "auth",
  z5 = "authKeys",
  K5 = "pairingTopics",
  V5 = "requests",
  Go = `${q5}@${1.5}:${j5}:`,
  co = `${Go}:PUB_KEY`;
var H5 = Object.defineProperty,
  G5 = Object.defineProperties,
  W5 = Object.getOwnPropertyDescriptors,
  uh = Object.getOwnPropertySymbols,
  Q5 = Object.prototype.hasOwnProperty,
  Y5 = Object.prototype.propertyIsEnumerable,
  lh = (e, t, r) =>
    t in e
      ? H5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  St = (e, t) => {
    for (var r in t || (t = {})) Q5.call(t, r) && lh(e, r, t[r]);
    if (uh) for (var r of uh(t)) Y5.call(t, r) && lh(e, r, t[r]);
    return e;
  },
  Vi = (e, t) => G5(e, W5(t));
class J5 extends pm {
  constructor(t) {
    super(t),
      (this.name = $5),
      (this.events = new Xh()),
      (this.initialized = !1),
      (this.requestQueue = { state: Yr.idle, queue: [] }),
      (this.sessionRequestQueue = { state: Yr.idle, queue: [] }),
      (this.requestQueueDelay = oe.ONE_SECOND),
      (this.expectedPairingMethodMap = new Map()),
      (this.recentlyDeletedMap = new Map()),
      (this.recentlyDeletedLimit = 200),
      (this.init = () =>
        P(this, null, function* () {
          this.initialized ||
            (yield this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            this.client.core.pairing.register({ methods: Object.keys(Rt) }),
            (this.initialized = !0),
            setTimeout(() => {
              (this.sessionRequestQueue.queue =
                this.getPendingSessionRequests()),
                this.processSessionRequestQueue();
            }, oe.toMiliseconds(this.requestQueueDelay)));
        })),
      (this.connect = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          const i = Vi(St({}, r), {
            requiredNamespaces: r.requiredNamespaces || {},
            optionalNamespaces: r.optionalNamespaces || {},
          });
          yield this.isValidConnect(i);
          const {
            pairingTopic: n,
            requiredNamespaces: s,
            optionalNamespaces: o,
            sessionProperties: c,
            relays: l,
          } = i;
          let f = n,
            g,
            w = !1;
          try {
            f && (w = this.client.core.pairing.pairings.get(f).active);
          } catch (L) {
            throw (
              (this.client.logger.error(
                `connect() -> pairing.get(${f}) failed`
              ),
              L)
            );
          }
          if (!f || !w) {
            const { topic: L, uri: j } =
              yield this.client.core.pairing.create();
            (f = L), (g = j);
          }
          if (!f) {
            const { message: L } = se(
              "NO_MATCHING_KEY",
              `connect() pairing topic: ${f}`
            );
            throw new Error(L);
          }
          const D = yield this.client.core.crypto.generateKeyPair(),
            A = Rt.wc_sessionPropose.req.ttl || oe.FIVE_MINUTES,
            M = Pt(A),
            K = St(
              {
                requiredNamespaces: s,
                optionalNamespaces: o,
                relays: l != null ? l : [{ protocol: Kd }],
                proposer: { publicKey: D, metadata: this.client.metadata },
                expiryTimestamp: M,
                pairingTopic: f,
              },
              c && { sessionProperties: c }
            ),
            { reject: q, resolve: Q, done: N } = Qi(A, L5);
          this.events.once(ze("session_connect"), (k) =>
            P(this, [k], function* ({ error: L, session: j }) {
              if (L) q(L);
              else if (j) {
                j.self.publicKey = D;
                const m = Vi(St({}, j), {
                  pairingTopic: K.pairingTopic,
                  requiredNamespaces: K.requiredNamespaces,
                  optionalNamespaces: K.optionalNamespaces,
                });
                yield this.client.session.set(j.topic, m),
                  yield this.setExpiry(j.topic, j.expiry),
                  f &&
                    (yield this.client.core.pairing.updateMetadata({
                      topic: f,
                      metadata: j.peer.metadata,
                    })),
                  this.cleanupDuplicatePairings(m),
                  Q(m);
              }
            })
          );
          const H = yield this.sendRequest({
            topic: f,
            method: "wc_sessionPropose",
            params: K,
            throwOnFailedPublish: !0,
          });
          return (
            yield this.setProposal(H, St({ id: H }, K)), { uri: g, approval: N }
          );
        })),
      (this.pair = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          try {
            return yield this.client.core.pairing.pair(r);
          } catch (i) {
            throw (this.client.logger.error("pair() failed"), i);
          }
        })),
      (this.approve = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          try {
            yield this.isValidApprove(r);
          } catch (N) {
            throw (
              (this.client.logger.error("approve() -> isValidApprove() failed"),
              N)
            );
          }
          const {
            id: i,
            relayProtocol: n,
            namespaces: s,
            sessionProperties: o,
            sessionConfig: c,
          } = r;
          let l;
          try {
            l = this.client.proposal.get(i);
          } catch (N) {
            throw (
              (this.client.logger.error(
                `approve() -> proposal.get(${i}) failed`
              ),
              N)
            );
          }
          const {
              pairingTopic: f,
              proposer: g,
              requiredNamespaces: w,
              optionalNamespaces: D,
            } = l,
            A = yield this.client.core.crypto.generateKeyPair(),
            M = g.publicKey,
            K = yield this.client.core.crypto.generateSharedKey(A, M),
            q = St(
              St(
                {
                  relay: { protocol: n != null ? n : "irn" },
                  namespaces: s,
                  controller: { publicKey: A, metadata: this.client.metadata },
                  expiry: Pt(pn),
                },
                o && { sessionProperties: o }
              ),
              c && { sessionConfig: c }
            );
          yield this.client.core.relayer.subscribe(K);
          const Q = Vi(St({}, q), {
            topic: K,
            requiredNamespaces: w,
            optionalNamespaces: D,
            pairingTopic: f,
            acknowledged: !1,
            self: q.controller,
            peer: { publicKey: g.publicKey, metadata: g.metadata },
            controller: A,
          });
          yield this.client.session.set(K, Q);
          try {
            yield this.sendResult({
              id: i,
              topic: f,
              result: {
                relay: { protocol: n != null ? n : "irn" },
                responderPublicKey: A,
              },
              throwOnFailedPublish: !0,
            }),
              yield this.sendRequest({
                topic: K,
                method: "wc_sessionSettle",
                params: q,
                throwOnFailedPublish: !0,
              });
          } catch (N) {
            throw (
              (this.client.logger.error(N),
              this.client.session.delete(K, lt("USER_DISCONNECTED")),
              yield this.client.core.relayer.unsubscribe(K),
              N)
            );
          }
          return (
            yield this.client.core.pairing.updateMetadata({
              topic: f,
              metadata: g.metadata,
            }),
            yield this.client.proposal.delete(i, lt("USER_DISCONNECTED")),
            yield this.client.core.pairing.activate({ topic: f }),
            yield this.setExpiry(K, Pt(pn)),
            {
              topic: K,
              acknowledged: () =>
                new Promise((N) =>
                  setTimeout(() => N(this.client.session.get(K)), 500)
                ),
            }
          );
        })),
      (this.reject = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          try {
            yield this.isValidReject(r);
          } catch (o) {
            throw (
              (this.client.logger.error("reject() -> isValidReject() failed"),
              o)
            );
          }
          const { id: i, reason: n } = r;
          let s;
          try {
            s = this.client.proposal.get(i).pairingTopic;
          } catch (o) {
            throw (
              (this.client.logger.error(
                `reject() -> proposal.get(${i}) failed`
              ),
              o)
            );
          }
          s &&
            (yield this.sendError({
              id: i,
              topic: s,
              error: n,
              rpcOpts: Rt.wc_sessionPropose.reject,
            }),
            yield this.client.proposal.delete(i, lt("USER_DISCONNECTED")));
        })),
      (this.update = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          try {
            yield this.isValidUpdate(r);
          } catch (w) {
            throw (
              (this.client.logger.error("update() -> isValidUpdate() failed"),
              w)
            );
          }
          const { topic: i, namespaces: n } = r,
            { done: s, resolve: o, reject: c } = Qi(),
            l = Oi(),
            f = Zi().toString(),
            g = this.client.session.get(i).namespaces;
          return (
            this.events.once(ze("session_update", l), ({ error: w }) => {
              w ? c(w) : o();
            }),
            yield this.client.session.update(i, { namespaces: n }),
            yield this.sendRequest({
              topic: i,
              method: "wc_sessionUpdate",
              params: { namespaces: n },
              throwOnFailedPublish: !0,
              clientRpcId: l,
              relayRpcId: f,
            }).catch((w) => {
              this.client.logger.error(w),
                this.client.session.update(i, { namespaces: g }),
                c(w);
            }),
            { acknowledged: s }
          );
        })),
      (this.extend = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          try {
            yield this.isValidExtend(r);
          } catch (l) {
            throw (
              (this.client.logger.error("extend() -> isValidExtend() failed"),
              l)
            );
          }
          const { topic: i } = r,
            n = Oi(),
            { done: s, resolve: o, reject: c } = Qi();
          return (
            this.events.once(ze("session_extend", n), ({ error: l }) => {
              l ? c(l) : o();
            }),
            yield this.setExpiry(i, Pt(pn)),
            this.sendRequest({
              topic: i,
              method: "wc_sessionExtend",
              params: {},
              clientRpcId: n,
              throwOnFailedPublish: !0,
            }).catch((l) => {
              c(l);
            }),
            { acknowledged: s }
          );
        })),
      (this.request = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          try {
            yield this.isValidRequest(r);
          } catch (A) {
            throw (
              (this.client.logger.error("request() -> isValidRequest() failed"),
              A)
            );
          }
          const {
              chainId: i,
              request: n,
              topic: s,
              expiry: o = Rt.wc_sessionRequest.req.ttl,
            } = r,
            c = this.client.session.get(s),
            l = Oi(),
            f = Zi().toString(),
            {
              done: g,
              resolve: w,
              reject: D,
            } = Qi(o, "Request expired. Please try again.");
          return (
            this.events.once(
              ze("session_request", l),
              ({ error: A, result: M }) => {
                A ? D(A) : w(M);
              }
            ),
            yield Promise.all([
              new Promise((A) =>
                P(this, null, function* () {
                  yield this.sendRequest({
                    clientRpcId: l,
                    relayRpcId: f,
                    topic: s,
                    method: "wc_sessionRequest",
                    params: {
                      request: Vi(St({}, n), { expiryTimestamp: Pt(o) }),
                      chainId: i,
                    },
                    expiry: o,
                    throwOnFailedPublish: !0,
                  }).catch((M) => D(M)),
                    this.client.events.emit("session_request_sent", {
                      topic: s,
                      request: n,
                      chainId: i,
                      id: l,
                    }),
                    A();
                })
              ),
              new Promise((A) =>
                P(this, null, function* () {
                  var M;
                  if (!((M = c.sessionConfig) != null && M.disableDeepLink)) {
                    const K = yield fv(this.client.core.storage, ch);
                    hv({ id: l, topic: s, wcDeepLink: K });
                  }
                  A();
                })
              ),
              g(),
            ]).then((A) => A[2])
          );
        })),
      (this.respond = (r) =>
        P(this, null, function* () {
          yield this.isInitialized(), yield this.isValidRespond(r);
          const { topic: i, response: n } = r,
            { id: s } = n;
          ti(n)
            ? yield this.sendResult({
                id: s,
                topic: i,
                result: n.result,
                throwOnFailedPublish: !0,
              })
            : Cr(n) &&
              (yield this.sendError({ id: s, topic: i, error: n.error })),
            this.cleanupAfterResponse(r);
        })),
      (this.ping = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          try {
            yield this.isValidPing(r);
          } catch (n) {
            throw (
              (this.client.logger.error("ping() -> isValidPing() failed"), n)
            );
          }
          const { topic: i } = r;
          if (this.client.session.keys.includes(i)) {
            const n = Oi(),
              s = Zi().toString(),
              { done: o, resolve: c, reject: l } = Qi();
            this.events.once(ze("session_ping", n), ({ error: f }) => {
              f ? l(f) : c();
            }),
              yield Promise.all([
                this.sendRequest({
                  topic: i,
                  method: "wc_sessionPing",
                  params: {},
                  throwOnFailedPublish: !0,
                  clientRpcId: n,
                  relayRpcId: s,
                }),
                o(),
              ]);
          } else this.client.core.pairing.pairings.keys.includes(i) && (yield this.client.core.pairing.ping({ topic: i }));
        })),
      (this.emit = (r) =>
        P(this, null, function* () {
          yield this.isInitialized(), yield this.isValidEmit(r);
          const { topic: i, event: n, chainId: s } = r,
            o = Zi().toString();
          yield this.sendRequest({
            topic: i,
            method: "wc_sessionEvent",
            params: { event: n, chainId: s },
            throwOnFailedPublish: !0,
            relayRpcId: o,
          });
        })),
      (this.disconnect = (r) =>
        P(this, null, function* () {
          yield this.isInitialized(), yield this.isValidDisconnect(r);
          const { topic: i } = r;
          if (this.client.session.keys.includes(i))
            yield this.sendRequest({
              topic: i,
              method: "wc_sessionDelete",
              params: lt("USER_DISCONNECTED"),
              throwOnFailedPublish: !0,
            }),
              yield this.deleteSession({ topic: i, emitEvent: !1 });
          else if (this.client.core.pairing.pairings.keys.includes(i))
            yield this.client.core.pairing.disconnect({ topic: i });
          else {
            const { message: n } = se(
              "MISMATCHED_TOPIC",
              `Session or pairing topic not found: ${i}`
            );
            throw new Error(n);
          }
        })),
      (this.find = (r) => (
        this.isInitialized(),
        this.client.session.getAll().filter((i) => B3(i, r))
      )),
      (this.getPendingSessionRequests = () =>
        this.client.pendingRequest.getAll()),
      (this.authenticate = (r) =>
        P(this, null, function* () {
          this.isInitialized(), this.isValidAuthenticate(r);
          const {
              chains: i,
              statement: n = "",
              uri: s,
              domain: o,
              nonce: c,
              type: l,
              exp: f,
              nbf: g,
              methods: w = [],
              expiry: D,
            } = r,
            A = [...(r.resources || [])],
            { topic: M, uri: K } = yield this.client.core.pairing.create({
              methods: ["wc_sessionAuthenticate"],
            });
          this.client.logger.info({
            message: "Generated new pairing",
            pairing: { topic: M, uri: K },
          });
          const q = yield this.client.core.crypto.generateKeyPair(),
            Q = ao(q);
          if (
            (yield Promise.all([
              this.client.auth.authKeys.set(co, {
                responseTopic: Q,
                publicKey: q,
              }),
              this.client.auth.pairingTopics.set(Q, {
                topic: Q,
                pairingTopic: M,
              }),
            ]),
            yield this.client.core.relayer.subscribe(Q),
            this.client.logger.info(
              `sending request to new pairing topic: ${M}`
            ),
            w.length > 0)
          ) {
            const { namespace: a } = oa(i[0]);
            let u = s3(a, "request", w);
            oo(A) && (u = a3(u, A.pop())), A.push(u);
          }
          const N =
              D && D > Rt.wc_sessionAuthenticate.req.ttl
                ? D
                : Rt.wc_sessionAuthenticate.req.ttl,
            H = {
              authPayload: {
                type: l != null ? l : "caip122",
                chains: i,
                statement: n,
                aud: s,
                domain: o,
                version: "1",
                nonce: c,
                iat: new Date().toISOString(),
                exp: f,
                nbf: g,
                resources: A,
              },
              requester: { publicKey: q, metadata: this.client.metadata },
              expiryTimestamp: Pt(N),
            },
            L = {
              eip155: {
                chains: i,
                methods: [...new Set(["personal_sign", ...w])],
                events: ["chainChanged", "accountsChanged"],
              },
            },
            j = {
              requiredNamespaces: {},
              optionalNamespaces: L,
              relays: [{ protocol: "irn" }],
              pairingTopic: M,
              proposer: { publicKey: q, metadata: this.client.metadata },
              expiryTimestamp: Pt(Rt.wc_sessionPropose.req.ttl),
            },
            { done: k, resolve: m, reject: y } = Qi(N, "Request expired"),
            I = (h) =>
              P(this, [h], function* ({ error: a, session: u }) {
                if ((this.events.off(ze("session_request", B), C), a)) y(a);
                else if (u) {
                  (u.self.publicKey = q),
                    yield this.client.session.set(u.topic, u),
                    yield this.setExpiry(u.topic, u.expiry),
                    M &&
                      (yield this.client.core.pairing.updateMetadata({
                        topic: M,
                        metadata: u.peer.metadata,
                      }));
                  const v = this.client.session.get(u.topic);
                  yield this.deleteProposal(U), m({ session: v });
                }
              }),
            C = (a) =>
              P(this, null, function* () {
                if (
                  (yield this.deletePendingAuthRequest(B, {
                    message: "fulfilled",
                    code: 0,
                  }),
                  a.error)
                ) {
                  const S = lt(
                    "WC_METHOD_UNSUPPORTED",
                    "wc_sessionAuthenticate"
                  );
                  return a.error.code === S.code
                    ? void 0
                    : (this.events.off(ze("session_connect"), I),
                      y(a.error.message));
                }
                yield this.deleteProposal(U),
                  this.events.off(ze("session_connect"), I);
                const { cacaos: u, responder: h } = a.result,
                  v = [],
                  _ = [];
                for (const S of u) {
                  (yield El({
                    cacao: S,
                    projectId: this.client.core.projectId,
                  })) ||
                    (this.client.logger.error(
                      S,
                      "Signature verification failed"
                    ),
                    y(
                      lt(
                        "SESSION_SETTLEMENT_FAILED",
                        "Signature verification failed"
                      )
                    ));
                  const { p: d } = S,
                    T = oo(d.resources),
                    Y = [_l(d.iss)],
                    X = bo(d.iss);
                  if (T) {
                    const b = Al(T),
                      G = Sl(T);
                    v.push(...b), Y.push(...G);
                  }
                  for (const b of Y) _.push(`${b}:${X}`);
                }
                const E = yield this.client.core.crypto.generateSharedKey(
                  q,
                  h.publicKey
                );
                let x;
                v.length > 0 &&
                  ((x = {
                    topic: E,
                    acknowledged: !0,
                    self: { publicKey: q, metadata: this.client.metadata },
                    peer: h,
                    controller: h.publicKey,
                    expiry: Pt(pn),
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: { protocol: "irn" },
                    pairingTopic: M,
                    namespaces: Nl([...new Set(v)], [...new Set(_)]),
                  }),
                  yield this.client.core.relayer.subscribe(E),
                  yield this.client.session.set(E, x),
                  (x = this.client.session.get(E))),
                  m({ auths: u, session: x });
              }),
            B = Oi(),
            U = Oi();
          this.events.once(ze("session_connect"), I),
            this.events.once(ze("session_request", B), C);
          try {
            yield Promise.all([
              this.sendRequest({
                topic: M,
                method: "wc_sessionAuthenticate",
                params: H,
                expiry: r.expiry,
                throwOnFailedPublish: !0,
                clientRpcId: B,
              }),
              this.sendRequest({
                topic: M,
                method: "wc_sessionPropose",
                params: j,
                expiry: Rt.wc_sessionPropose.req.ttl,
                throwOnFailedPublish: !0,
                clientRpcId: U,
              }),
            ]);
          } catch (a) {
            throw (
              (this.events.off(ze("session_connect"), I),
              this.events.off(ze("session_request", B), C),
              a)
            );
          }
          return (
            yield this.setProposal(U, St({ id: U }, j)),
            yield this.setAuthRequest(B, {
              request: Vi(St({}, H), { verifyContext: {} }),
              pairingTopic: M,
            }),
            { uri: K, response: k }
          );
        })),
      (this.approveSessionAuthenticate = (r) =>
        P(this, null, function* () {
          this.isInitialized();
          const { id: i, auths: n } = r,
            s = this.getPendingAuthRequest(i);
          if (!s)
            throw new Error(`Could not find pending auth request with id ${i}`);
          const o = s.requester.publicKey,
            c = yield this.client.core.crypto.generateKeyPair(),
            l = ao(o),
            f = { type: Si, receiverPublicKey: o, senderPublicKey: c },
            g = [],
            w = [];
          for (const M of n) {
            if (
              !(yield El({ cacao: M, projectId: this.client.core.projectId }))
            ) {
              const H = lt(
                "SESSION_SETTLEMENT_FAILED",
                "Signature verification failed"
              );
              throw (
                (yield this.sendError({
                  id: i,
                  topic: l,
                  error: H,
                  encodeOpts: f,
                }),
                new Error(H.message))
              );
            }
            const { p: K } = M,
              q = oo(K.resources),
              Q = [_l(K.iss)],
              N = bo(K.iss);
            if (q) {
              const H = Al(q),
                L = Sl(q);
              g.push(...H), Q.push(...L);
            }
            for (const H of Q) w.push(`${H}:${N}`);
          }
          const D = yield this.client.core.crypto.generateSharedKey(c, o);
          let A;
          return (
            (g == null ? void 0 : g.length) > 0 &&
              ((A = {
                topic: D,
                acknowledged: !0,
                self: { publicKey: c, metadata: this.client.metadata },
                peer: { publicKey: o, metadata: s.requester.metadata },
                controller: o,
                expiry: Pt(pn),
                authentication: n,
                requiredNamespaces: {},
                optionalNamespaces: {},
                relay: { protocol: "irn" },
                pairingTopic: "",
                namespaces: Nl([...new Set(g)], [...new Set(w)]),
              }),
              yield this.client.core.relayer.subscribe(D),
              yield this.client.session.set(D, A)),
            yield this.sendResult({
              topic: l,
              id: i,
              result: {
                cacaos: n,
                responder: { publicKey: c, metadata: this.client.metadata },
              },
              encodeOpts: f,
              throwOnFailedPublish: !0,
            }),
            yield this.client.auth.requests.delete(i, {
              message: "fulfilled",
              code: 0,
            }),
            yield this.client.core.pairing.activate({ topic: s.pairingTopic }),
            { session: A }
          );
        })),
      (this.rejectSessionAuthenticate = (r) =>
        P(this, null, function* () {
          yield this.isInitialized();
          const { id: i, reason: n } = r,
            s = this.getPendingAuthRequest(i);
          if (!s)
            throw new Error(`Could not find pending auth request with id ${i}`);
          const o = s.requester.publicKey,
            c = yield this.client.core.crypto.generateKeyPair(),
            l = ao(o),
            f = { type: Si, receiverPublicKey: o, senderPublicKey: c };
          yield this.sendError({
            id: i,
            topic: l,
            error: n,
            encodeOpts: f,
            rpcOpts: Rt.wc_sessionAuthenticate.reject,
          }),
            yield this.client.auth.requests.delete(i, {
              message: "rejected",
              code: 0,
            }),
            yield this.client.proposal.delete(i, lt("USER_DISCONNECTED"));
        })),
      (this.formatAuthMessage = (r) => {
        this.isInitialized();
        const { request: i, iss: n } = r;
        return _d(i, n);
      }),
      (this.cleanupDuplicatePairings = (r) =>
        P(this, null, function* () {
          if (r.pairingTopic)
            try {
              const i = this.client.core.pairing.pairings.get(r.pairingTopic),
                n = this.client.core.pairing.pairings.getAll().filter((s) => {
                  var o, c;
                  return (
                    ((o = s.peerMetadata) == null ? void 0 : o.url) &&
                    ((c = s.peerMetadata) == null ? void 0 : c.url) ===
                      r.peer.metadata.url &&
                    s.topic &&
                    s.topic !== i.topic
                  );
                });
              if (n.length === 0) return;
              this.client.logger.info(
                `Cleaning up ${n.length} duplicate pairing(s)`
              ),
                yield Promise.all(
                  n.map((s) =>
                    this.client.core.pairing.disconnect({ topic: s.topic })
                  )
                ),
                this.client.logger.info("Duplicate pairings clean up finished");
            } catch (i) {
              this.client.logger.error(i);
            }
        })),
      (this.deleteSession = (r) =>
        P(this, null, function* () {
          var i;
          const {
              topic: n,
              expirerHasDeleted: s = !1,
              emitEvent: o = !0,
              id: c = 0,
            } = r,
            { self: l } = this.client.session.get(n);
          yield this.client.core.relayer.unsubscribe(n),
            yield this.client.session.delete(n, lt("USER_DISCONNECTED")),
            this.addToRecentlyDeleted(n, "session"),
            this.client.core.crypto.keychain.has(l.publicKey) &&
              (yield this.client.core.crypto.deleteKeyPair(l.publicKey)),
            this.client.core.crypto.keychain.has(n) &&
              (yield this.client.core.crypto.deleteSymKey(n)),
            s || this.client.core.expirer.del(n),
            this.client.core.storage
              .removeItem(ch)
              .catch((f) => this.client.logger.warn(f)),
            this.getPendingSessionRequests().forEach((f) => {
              f.topic === n &&
                this.deletePendingSessionRequest(f.id, lt("USER_DISCONNECTED"));
            }),
            n ===
              ((i = this.sessionRequestQueue.queue[0]) == null
                ? void 0
                : i.topic) && (this.sessionRequestQueue.state = Yr.idle),
            o && this.client.events.emit("session_delete", { id: c, topic: n });
        })),
      (this.deleteProposal = (r, i) =>
        P(this, null, function* () {
          yield Promise.all([
            this.client.proposal.delete(r, lt("USER_DISCONNECTED")),
            i ? Promise.resolve() : this.client.core.expirer.del(r),
          ]),
            this.addToRecentlyDeleted(r, "proposal");
        })),
      (this.deletePendingSessionRequest = (r, i, n = !1) =>
        P(this, null, function* () {
          yield Promise.all([
            this.client.pendingRequest.delete(r, i),
            n ? Promise.resolve() : this.client.core.expirer.del(r),
          ]),
            this.addToRecentlyDeleted(r, "request"),
            (this.sessionRequestQueue.queue =
              this.sessionRequestQueue.queue.filter((s) => s.id !== r)),
            n &&
              ((this.sessionRequestQueue.state = Yr.idle),
              this.client.events.emit("session_request_expire", { id: r }));
        })),
      (this.deletePendingAuthRequest = (r, i, n = !1) =>
        P(this, null, function* () {
          yield Promise.all([
            this.client.auth.requests.delete(r, i),
            n ? Promise.resolve() : this.client.core.expirer.del(r),
          ]);
        })),
      (this.setExpiry = (r, i) =>
        P(this, null, function* () {
          this.client.session.keys.includes(r) &&
            (this.client.core.expirer.set(r, i),
            yield this.client.session.update(r, { expiry: i }));
        })),
      (this.setProposal = (r, i) =>
        P(this, null, function* () {
          this.client.core.expirer.set(r, Pt(Rt.wc_sessionPropose.req.ttl)),
            yield this.client.proposal.set(r, i);
        })),
      (this.setAuthRequest = (r, i) =>
        P(this, null, function* () {
          const { request: n, pairingTopic: s } = i;
          this.client.core.expirer.set(r, n.expiryTimestamp),
            yield this.client.auth.requests.set(r, {
              authPayload: n.authPayload,
              requester: n.requester,
              expiryTimestamp: n.expiryTimestamp,
              id: r,
              pairingTopic: s,
              verifyContext: n.verifyContext,
            });
        })),
      (this.setPendingSessionRequest = (r) =>
        P(this, null, function* () {
          const { id: i, topic: n, params: s, verifyContext: o } = r,
            c = s.request.expiryTimestamp || Pt(Rt.wc_sessionRequest.req.ttl);
          this.client.core.expirer.set(i, c),
            yield this.client.pendingRequest.set(i, {
              id: i,
              topic: n,
              params: s,
              verifyContext: o,
            });
        })),
      (this.sendRequest = (r) =>
        P(this, null, function* () {
          const {
              topic: i,
              method: n,
              params: s,
              expiry: o,
              relayRpcId: c,
              clientRpcId: l,
              throwOnFailedPublish: f,
            } = r,
            g = Dn(n, s, l);
          if (Bn() && k5.includes(n)) {
            const A = Xi(JSON.stringify(g));
            this.client.core.verify.register({ attestationId: A });
          }
          let w;
          try {
            w = yield this.client.core.crypto.encode(i, g);
          } catch (A) {
            throw (
              (yield this.cleanup(),
              this.client.logger.error(
                `sendRequest() -> core.crypto.encode() for topic ${i} failed`
              ),
              A)
            );
          }
          const D = Rt[n].req;
          return (
            o && (D.ttl = o),
            c && (D.id = c),
            this.client.core.history.set(i, g),
            f
              ? ((D.internal = Vi(St({}, D.internal), {
                  throwOnFailedPublish: !0,
                })),
                yield this.client.core.relayer.publish(i, w, D))
              : this.client.core.relayer
                  .publish(i, w, D)
                  .catch((A) => this.client.logger.error(A)),
            g.id
          );
        })),
      (this.sendResult = (r) =>
        P(this, null, function* () {
          const {
              id: i,
              topic: n,
              result: s,
              throwOnFailedPublish: o,
              encodeOpts: c,
            } = r,
            l = Hc(i, s);
          let f;
          try {
            f = yield this.client.core.crypto.encode(n, l, c);
          } catch (D) {
            throw (
              (yield this.cleanup(),
              this.client.logger.error(
                `sendResult() -> core.crypto.encode() for topic ${n} failed`
              ),
              D)
            );
          }
          let g;
          try {
            g = yield this.client.core.history.get(n, i);
          } catch (D) {
            throw (
              (this.client.logger.error(
                `sendResult() -> history.get(${n}, ${i}) failed`
              ),
              D)
            );
          }
          const w = Rt[g.request.method].res;
          o
            ? ((w.internal = Vi(St({}, w.internal), {
                throwOnFailedPublish: !0,
              })),
              yield this.client.core.relayer.publish(n, f, w))
            : this.client.core.relayer
                .publish(n, f, w)
                .catch((D) => this.client.logger.error(D)),
            yield this.client.core.history.resolve(l);
        })),
      (this.sendError = (r) =>
        P(this, null, function* () {
          const { id: i, topic: n, error: s, encodeOpts: o, rpcOpts: c } = r,
            l = Gc(i, s);
          let f;
          try {
            f = yield this.client.core.crypto.encode(n, l, o);
          } catch (D) {
            throw (
              (yield this.cleanup(),
              this.client.logger.error(
                `sendError() -> core.crypto.encode() for topic ${n} failed`
              ),
              D)
            );
          }
          let g;
          try {
            g = yield this.client.core.history.get(n, i);
          } catch (D) {
            throw (
              (this.client.logger.error(
                `sendError() -> history.get(${n}, ${i}) failed`
              ),
              D)
            );
          }
          const w = c || Rt[g.request.method].res;
          this.client.core.relayer.publish(n, f, w),
            yield this.client.core.history.resolve(l);
        })),
      (this.cleanup = () =>
        P(this, null, function* () {
          const r = [],
            i = [];
          this.client.session.getAll().forEach((n) => {
            let s = !1;
            Ni(n.expiry) && (s = !0),
              this.client.core.crypto.keychain.has(n.topic) || (s = !0),
              s && r.push(n.topic);
          }),
            this.client.proposal.getAll().forEach((n) => {
              Ni(n.expiryTimestamp) && i.push(n.id);
            }),
            yield Promise.all([
              ...r.map((n) => this.deleteSession({ topic: n })),
              ...i.map((n) => this.deleteProposal(n)),
            ]);
        })),
      (this.onRelayEventRequest = (r) =>
        P(this, null, function* () {
          this.requestQueue.queue.push(r), yield this.processRequestsQueue();
        })),
      (this.processRequestsQueue = () =>
        P(this, null, function* () {
          if (this.requestQueue.state === Yr.active) {
            this.client.logger.info(
              "Request queue already active, skipping..."
            );
            return;
          }
          for (
            this.client.logger.info(
              `Request queue starting with ${this.requestQueue.queue.length} requests`
            );
            this.requestQueue.queue.length > 0;

          ) {
            this.requestQueue.state = Yr.active;
            const r = this.requestQueue.queue.shift();
            if (r)
              try {
                this.processRequest(r),
                  yield new Promise((i) => setTimeout(i, 300));
              } catch (i) {
                this.client.logger.warn(i);
              }
          }
          this.requestQueue.state = Yr.idle;
        })),
      (this.processRequest = (r) => {
        const { topic: i, payload: n } = r,
          s = n.method;
        if (!this.shouldIgnorePairingRequest({ topic: i, requestMethod: s }))
          switch (s) {
            case "wc_sessionPropose":
              return this.onSessionProposeRequest(i, n);
            case "wc_sessionSettle":
              return this.onSessionSettleRequest(i, n);
            case "wc_sessionUpdate":
              return this.onSessionUpdateRequest(i, n);
            case "wc_sessionExtend":
              return this.onSessionExtendRequest(i, n);
            case "wc_sessionPing":
              return this.onSessionPingRequest(i, n);
            case "wc_sessionDelete":
              return this.onSessionDeleteRequest(i, n);
            case "wc_sessionRequest":
              return this.onSessionRequest(i, n);
            case "wc_sessionEvent":
              return this.onSessionEventRequest(i, n);
            case "wc_sessionAuthenticate":
              return this.onSessionAuthenticateRequest(i, n);
            default:
              return this.client.logger.info(`Unsupported request method ${s}`);
          }
      }),
      (this.onRelayEventResponse = (r) =>
        P(this, null, function* () {
          const { topic: i, payload: n } = r,
            s = (yield this.client.core.history.get(i, n.id)).request.method;
          switch (s) {
            case "wc_sessionPropose":
              return this.onSessionProposeResponse(i, n);
            case "wc_sessionSettle":
              return this.onSessionSettleResponse(i, n);
            case "wc_sessionUpdate":
              return this.onSessionUpdateResponse(i, n);
            case "wc_sessionExtend":
              return this.onSessionExtendResponse(i, n);
            case "wc_sessionPing":
              return this.onSessionPingResponse(i, n);
            case "wc_sessionRequest":
              return this.onSessionRequestResponse(i, n);
            case "wc_sessionAuthenticate":
              return this.onSessionAuthenticateResponse(i, n);
            default:
              return this.client.logger.info(
                `Unsupported response method ${s}`
              );
          }
        })),
      (this.onRelayEventUnknownPayload = (r) => {
        const { topic: i } = r,
          { message: n } = se(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(n);
      }),
      (this.shouldIgnorePairingRequest = (r) => {
        const { topic: i, requestMethod: n } = r,
          s = this.expectedPairingMethodMap.get(i);
        return !s || s.includes(n)
          ? !1
          : !!(
              s.includes("wc_sessionAuthenticate") &&
              this.client.events.listenerCount("session_authenticate") > 0
            );
      }),
      (this.onSessionProposeRequest = (r, i) =>
        P(this, null, function* () {
          const { params: n, id: s } = i;
          try {
            this.isValidConnect(St({}, i.params));
            const o = n.expiryTimestamp || Pt(Rt.wc_sessionPropose.req.ttl),
              c = St({ id: s, pairingTopic: r, expiryTimestamp: o }, n);
            yield this.setProposal(s, c);
            const l = Xi(JSON.stringify(i)),
              f = yield this.getVerifyContext(l, c.proposer.metadata);
            this.client.events.emit("session_proposal", {
              id: s,
              params: c,
              verifyContext: f,
            });
          } catch (o) {
            yield this.sendError({
              id: s,
              topic: r,
              error: o,
              rpcOpts: Rt.wc_sessionPropose.autoReject,
            }),
              this.client.logger.error(o);
          }
        })),
      (this.onSessionProposeResponse = (r, i) =>
        P(this, null, function* () {
          const { id: n } = i;
          if (ti(i)) {
            const { result: s } = i;
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              result: s,
            });
            const o = this.client.proposal.get(n);
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              proposal: o,
            });
            const c = o.proposer.publicKey;
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              selfPublicKey: c,
            });
            const l = s.responderPublicKey;
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              peerPublicKey: l,
            });
            const f = yield this.client.core.crypto.generateSharedKey(c, l);
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              sessionTopic: f,
            });
            const g = yield this.client.core.relayer.subscribe(f);
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              subscriptionId: g,
            }),
              yield this.client.core.pairing.activate({ topic: r });
          } else if (Cr(i)) {
            yield this.client.proposal.delete(n, lt("USER_DISCONNECTED"));
            const s = ze("session_connect");
            if (this.events.listenerCount(s) === 0)
              throw new Error(`emitting ${s} without any listeners, 954`);
            this.events.emit(ze("session_connect"), { error: i.error });
          }
        })),
      (this.onSessionSettleRequest = (r, i) =>
        P(this, null, function* () {
          const { id: n, params: s } = i;
          try {
            this.isValidSessionSettleRequest(s);
            const {
                relay: o,
                controller: c,
                expiry: l,
                namespaces: f,
                sessionProperties: g,
                sessionConfig: w,
              } = i.params,
              D = St(
                St(
                  {
                    topic: r,
                    relay: o,
                    expiry: l,
                    namespaces: f,
                    acknowledged: !0,
                    pairingTopic: "",
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: c.publicKey,
                    self: { publicKey: "", metadata: this.client.metadata },
                    peer: { publicKey: c.publicKey, metadata: c.metadata },
                  },
                  g && { sessionProperties: g }
                ),
                w && { sessionConfig: w }
              );
            yield this.sendResult({
              id: i.id,
              topic: r,
              result: !0,
              throwOnFailedPublish: !0,
            });
            const A = ze("session_connect");
            if (this.events.listenerCount(A) === 0)
              throw new Error(`emitting ${A} without any listeners 997`);
            this.events.emit(ze("session_connect"), { session: D });
          } catch (o) {
            yield this.sendError({ id: n, topic: r, error: o }),
              this.client.logger.error(o);
          }
        })),
      (this.onSessionSettleResponse = (r, i) =>
        P(this, null, function* () {
          const { id: n } = i;
          ti(i)
            ? (yield this.client.session.update(r, { acknowledged: !0 }),
              this.events.emit(ze("session_approve", n), {}))
            : Cr(i) &&
              (yield this.client.session.delete(r, lt("USER_DISCONNECTED")),
              this.events.emit(ze("session_approve", n), { error: i.error }));
        })),
      (this.onSessionUpdateRequest = (r, i) =>
        P(this, null, function* () {
          const { params: n, id: s } = i;
          try {
            const o = `${r}_session_update`,
              c = ss.get(o);
            if (c && this.isRequestOutOfSync(c, s)) {
              this.client.logger.info(`Discarding out of sync request - ${s}`),
                this.sendError({
                  id: s,
                  topic: r,
                  error: lt("INVALID_UPDATE_REQUEST"),
                });
              return;
            }
            this.isValidUpdate(St({ topic: r }, n));
            try {
              ss.set(o, s),
                yield this.client.session.update(r, {
                  namespaces: n.namespaces,
                }),
                yield this.sendResult({
                  id: s,
                  topic: r,
                  result: !0,
                  throwOnFailedPublish: !0,
                });
            } catch (l) {
              throw (ss.delete(o), l);
            }
            this.client.events.emit("session_update", {
              id: s,
              topic: r,
              params: n,
            });
          } catch (o) {
            yield this.sendError({ id: s, topic: r, error: o }),
              this.client.logger.error(o);
          }
        })),
      (this.isRequestOutOfSync = (r, i) =>
        parseInt(i.toString().slice(0, -3)) <=
        parseInt(r.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (r, i) => {
        const { id: n } = i,
          s = ze("session_update", n);
        if (this.events.listenerCount(s) === 0)
          throw new Error(`emitting ${s} without any listeners`);
        ti(i)
          ? this.events.emit(ze("session_update", n), {})
          : Cr(i) &&
            this.events.emit(ze("session_update", n), { error: i.error });
      }),
      (this.onSessionExtendRequest = (r, i) =>
        P(this, null, function* () {
          const { id: n } = i;
          try {
            this.isValidExtend({ topic: r }),
              yield this.setExpiry(r, Pt(pn)),
              yield this.sendResult({
                id: n,
                topic: r,
                result: !0,
                throwOnFailedPublish: !0,
              }),
              this.client.events.emit("session_extend", { id: n, topic: r });
          } catch (s) {
            yield this.sendError({ id: n, topic: r, error: s }),
              this.client.logger.error(s);
          }
        })),
      (this.onSessionExtendResponse = (r, i) => {
        const { id: n } = i,
          s = ze("session_extend", n);
        if (this.events.listenerCount(s) === 0)
          throw new Error(`emitting ${s} without any listeners`);
        ti(i)
          ? this.events.emit(ze("session_extend", n), {})
          : Cr(i) &&
            this.events.emit(ze("session_extend", n), { error: i.error });
      }),
      (this.onSessionPingRequest = (r, i) =>
        P(this, null, function* () {
          const { id: n } = i;
          try {
            this.isValidPing({ topic: r }),
              yield this.sendResult({
                id: n,
                topic: r,
                result: !0,
                throwOnFailedPublish: !0,
              }),
              this.client.events.emit("session_ping", { id: n, topic: r });
          } catch (s) {
            yield this.sendError({ id: n, topic: r, error: s }),
              this.client.logger.error(s);
          }
        })),
      (this.onSessionPingResponse = (r, i) => {
        const { id: n } = i,
          s = ze("session_ping", n);
        if (this.events.listenerCount(s) === 0)
          throw new Error(`emitting ${s} without any listeners`);
        setTimeout(() => {
          ti(i)
            ? this.events.emit(ze("session_ping", n), {})
            : Cr(i) &&
              this.events.emit(ze("session_ping", n), { error: i.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = (r, i) =>
        P(this, null, function* () {
          const { id: n } = i;
          try {
            this.isValidDisconnect({ topic: r, reason: i.params }),
              yield Promise.all([
                new Promise((s) => {
                  this.client.core.relayer.once(nr.publish, () =>
                    P(this, null, function* () {
                      s(yield this.deleteSession({ topic: r, id: n }));
                    })
                  );
                }),
                this.sendResult({
                  id: n,
                  topic: r,
                  result: !0,
                  throwOnFailedPublish: !0,
                }),
                this.cleanupPendingSentRequestsForTopic({
                  topic: r,
                  error: lt("USER_DISCONNECTED"),
                }),
              ]);
          } catch (s) {
            this.client.logger.error(s);
          }
        })),
      (this.onSessionRequest = (r, i) =>
        P(this, null, function* () {
          var n;
          const { id: s, params: o } = i;
          try {
            yield this.isValidRequest(St({ topic: r }, o));
            const c = Xi(JSON.stringify(Dn("wc_sessionRequest", o, s))),
              l = this.client.session.get(r),
              f = yield this.getVerifyContext(c, l.peer.metadata),
              g = { id: s, topic: r, params: o, verifyContext: f };
            yield this.setPendingSessionRequest(g),
              (n = this.client.signConfig) != null && n.disableRequestQueue
                ? this.emitSessionRequest(g)
                : (this.addSessionRequestToSessionRequestQueue(g),
                  this.processSessionRequestQueue());
          } catch (c) {
            yield this.sendError({ id: s, topic: r, error: c }),
              this.client.logger.error(c);
          }
        })),
      (this.onSessionRequestResponse = (r, i) => {
        const { id: n } = i,
          s = ze("session_request", n);
        if (this.events.listenerCount(s) === 0)
          throw new Error(`emitting ${s} without any listeners`);
        ti(i)
          ? this.events.emit(ze("session_request", n), { result: i.result })
          : Cr(i) &&
            this.events.emit(ze("session_request", n), { error: i.error });
      }),
      (this.onSessionEventRequest = (r, i) =>
        P(this, null, function* () {
          const { id: n, params: s } = i;
          try {
            const o = `${r}_session_event_${s.event.name}`,
              c = ss.get(o);
            if (c && this.isRequestOutOfSync(c, n)) {
              this.client.logger.info(`Discarding out of sync request - ${n}`);
              return;
            }
            this.isValidEmit(St({ topic: r }, s)),
              this.client.events.emit("session_event", {
                id: n,
                topic: r,
                params: s,
              }),
              ss.set(o, n);
          } catch (o) {
            yield this.sendError({ id: n, topic: r, error: o }),
              this.client.logger.error(o);
          }
        })),
      (this.onSessionAuthenticateResponse = (r, i) => {
        const { id: n } = i;
        this.client.logger.trace({
          type: "method",
          method: "onSessionAuthenticateResponse",
          topic: r,
          payload: i,
        }),
          ti(i)
            ? this.events.emit(ze("session_request", n), { result: i.result })
            : Cr(i) &&
              this.events.emit(ze("session_request", n), { error: i.error });
      }),
      (this.onSessionAuthenticateRequest = (r, i) =>
        P(this, null, function* () {
          try {
            const {
                requester: n,
                authPayload: s,
                expiryTimestamp: o,
              } = i.params,
              c = Xi(JSON.stringify(i)),
              l = yield this.getVerifyContext(c, this.client.metadata),
              f = {
                requester: n,
                pairingTopic: r,
                id: i.id,
                authPayload: s,
                verifyContext: l,
                expiryTimestamp: o,
              };
            yield this.setAuthRequest(i.id, { request: f, pairingTopic: r }),
              this.client.events.emit("session_authenticate", {
                topic: r,
                params: i.params,
                id: i.id,
              });
          } catch (n) {
            this.client.logger.error(n);
            const s = i.params.requester.publicKey,
              o = yield this.client.core.crypto.generateKeyPair(),
              c = { type: Si, receiverPublicKey: s, senderPublicKey: o };
            yield this.sendError({
              id: i.id,
              topic: r,
              error: n,
              encodeOpts: c,
              rpcOpts: Rt.wc_sessionAuthenticate.autoReject,
            });
          }
        })),
      (this.addSessionRequestToSessionRequestQueue = (r) => {
        this.sessionRequestQueue.queue.push(r);
      }),
      (this.cleanupAfterResponse = (r) => {
        this.deletePendingSessionRequest(r.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = Yr.idle),
              this.processSessionRequestQueue();
          }, oe.toMiliseconds(this.requestQueueDelay));
      }),
      (this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: i }) => {
        const n = this.client.core.history.pending;
        n.length > 0 &&
          n
            .filter(
              (s) => s.topic === r && s.request.method === "wc_sessionRequest"
            )
            .forEach((s) => {
              const o = s.request.id,
                c = ze("session_request", o);
              if (this.events.listenerCount(c) === 0)
                throw new Error(`emitting ${c} without any listeners`);
              this.events.emit(ze("session_request", s.request.id), {
                error: i,
              });
            });
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === Yr.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const r = this.sessionRequestQueue.queue[0];
        if (!r) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = Yr.active),
            this.emitSessionRequest(r);
        } catch (i) {
          this.client.logger.error(i);
        }
      }),
      (this.emitSessionRequest = (r) => {
        this.client.events.emit("session_request", r);
      }),
      (this.onPairingCreated = (r) => {
        if (
          (r.methods && this.expectedPairingMethodMap.set(r.topic, r.methods),
          r.active)
        )
          return;
        const i = this.client.proposal
          .getAll()
          .find((n) => n.pairingTopic === r.topic);
        i &&
          this.onSessionProposeRequest(
            r.topic,
            Dn(
              "wc_sessionPropose",
              {
                requiredNamespaces: i.requiredNamespaces,
                optionalNamespaces: i.optionalNamespaces,
                relays: i.relays,
                proposer: i.proposer,
                sessionProperties: i.sessionProperties,
              },
              i.id
            )
          );
      }),
      (this.isValidConnect = (r) =>
        P(this, null, function* () {
          if (!ir(r)) {
            const { message: l } = se(
              "MISSING_OR_INVALID",
              `connect() params: ${JSON.stringify(r)}`
            );
            throw new Error(l);
          }
          const {
            pairingTopic: i,
            requiredNamespaces: n,
            optionalNamespaces: s,
            sessionProperties: o,
            relays: c,
          } = r;
          if ((Qt(i) || (yield this.isValidPairingTopic(i)), !G3(c, !0))) {
            const { message: l } = se(
              "MISSING_OR_INVALID",
              `connect() relays: ${c}`
            );
            throw new Error(l);
          }
          !Qt(n) &&
            Eo(n) !== 0 &&
            this.validateNamespaces(n, "requiredNamespaces"),
            !Qt(s) &&
              Eo(s) !== 0 &&
              this.validateNamespaces(s, "optionalNamespaces"),
            Qt(o) || this.validateSessionProps(o, "sessionProperties");
        })),
      (this.validateNamespaces = (r, i) => {
        const n = H3(r, "connect()", i);
        if (n) throw new Error(n.message);
      }),
      (this.isValidApprove = (r) =>
        P(this, null, function* () {
          if (!ir(r))
            throw new Error(
              se("MISSING_OR_INVALID", `approve() params: ${r}`).message
            );
          const {
            id: i,
            namespaces: n,
            relayProtocol: s,
            sessionProperties: o,
          } = r;
          this.checkRecentlyDeleted(i), yield this.isValidProposalId(i);
          const c = this.client.proposal.get(i),
            l = Ea(n, "approve()");
          if (l) throw new Error(l.message);
          const f = Pl(c.requiredNamespaces, n, "approve()");
          if (f) throw new Error(f.message);
          if (!bt(s, !0)) {
            const { message: g } = se(
              "MISSING_OR_INVALID",
              `approve() relayProtocol: ${s}`
            );
            throw new Error(g);
          }
          Qt(o) || this.validateSessionProps(o, "sessionProperties");
        })),
      (this.isValidReject = (r) =>
        P(this, null, function* () {
          if (!ir(r)) {
            const { message: s } = se(
              "MISSING_OR_INVALID",
              `reject() params: ${r}`
            );
            throw new Error(s);
          }
          const { id: i, reason: n } = r;
          if (
            (this.checkRecentlyDeleted(i),
            yield this.isValidProposalId(i),
            !Q3(n))
          ) {
            const { message: s } = se(
              "MISSING_OR_INVALID",
              `reject() reason: ${JSON.stringify(n)}`
            );
            throw new Error(s);
          }
        })),
      (this.isValidSessionSettleRequest = (r) => {
        if (!ir(r)) {
          const { message: f } = se(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${r}`
          );
          throw new Error(f);
        }
        const { relay: i, controller: n, namespaces: s, expiry: o } = r;
        if (!xd(i)) {
          const { message: f } = se(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(f);
        }
        const c = k3(n, "onSessionSettleRequest()");
        if (c) throw new Error(c.message);
        const l = Ea(s, "onSessionSettleRequest()");
        if (l) throw new Error(l.message);
        if (Ni(o)) {
          const { message: f } = se("EXPIRED", "onSessionSettleRequest()");
          throw new Error(f);
        }
      }),
      (this.isValidUpdate = (r) =>
        P(this, null, function* () {
          if (!ir(r)) {
            const { message: l } = se(
              "MISSING_OR_INVALID",
              `update() params: ${r}`
            );
            throw new Error(l);
          }
          const { topic: i, namespaces: n } = r;
          this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
          const s = this.client.session.get(i),
            o = Ea(n, "update()");
          if (o) throw new Error(o.message);
          const c = Pl(s.requiredNamespaces, n, "update()");
          if (c) throw new Error(c.message);
        })),
      (this.isValidExtend = (r) =>
        P(this, null, function* () {
          if (!ir(r)) {
            const { message: n } = se(
              "MISSING_OR_INVALID",
              `extend() params: ${r}`
            );
            throw new Error(n);
          }
          const { topic: i } = r;
          this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
        })),
      (this.isValidRequest = (r) =>
        P(this, null, function* () {
          if (!ir(r)) {
            const { message: l } = se(
              "MISSING_OR_INVALID",
              `request() params: ${r}`
            );
            throw new Error(l);
          }
          const { topic: i, request: n, chainId: s, expiry: o } = r;
          this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
          const { namespaces: c } = this.client.session.get(i);
          if (!Rl(c, s)) {
            const { message: l } = se(
              "MISSING_OR_INVALID",
              `request() chainId: ${s}`
            );
            throw new Error(l);
          }
          if (!Y3(n)) {
            const { message: l } = se(
              "MISSING_OR_INVALID",
              `request() ${JSON.stringify(n)}`
            );
            throw new Error(l);
          }
          if (!Z3(c, s, n.method)) {
            const { message: l } = se(
              "MISSING_OR_INVALID",
              `request() method: ${n.method}`
            );
            throw new Error(l);
          }
          if (o && !i6(o, Ca)) {
            const { message: l } = se(
              "MISSING_OR_INVALID",
              `request() expiry: ${o}. Expiry must be a number (in seconds) between ${Ca.min} and ${Ca.max}`
            );
            throw new Error(l);
          }
        })),
      (this.isValidRespond = (r) =>
        P(this, null, function* () {
          var i;
          if (!ir(r)) {
            const { message: o } = se(
              "MISSING_OR_INVALID",
              `respond() params: ${r}`
            );
            throw new Error(o);
          }
          const { topic: n, response: s } = r;
          try {
            yield this.isValidSessionTopic(n);
          } catch (o) {
            throw (
              ((i = r == null ? void 0 : r.response) != null &&
                i.id &&
                this.cleanupAfterResponse(r),
              o)
            );
          }
          if (!J3(s)) {
            const { message: o } = se(
              "MISSING_OR_INVALID",
              `respond() response: ${JSON.stringify(s)}`
            );
            throw new Error(o);
          }
        })),
      (this.isValidPing = (r) =>
        P(this, null, function* () {
          if (!ir(r)) {
            const { message: n } = se(
              "MISSING_OR_INVALID",
              `ping() params: ${r}`
            );
            throw new Error(n);
          }
          const { topic: i } = r;
          yield this.isValidSessionOrPairingTopic(i);
        })),
      (this.isValidEmit = (r) =>
        P(this, null, function* () {
          if (!ir(r)) {
            const { message: c } = se(
              "MISSING_OR_INVALID",
              `emit() params: ${r}`
            );
            throw new Error(c);
          }
          const { topic: i, event: n, chainId: s } = r;
          yield this.isValidSessionTopic(i);
          const { namespaces: o } = this.client.session.get(i);
          if (!Rl(o, s)) {
            const { message: c } = se(
              "MISSING_OR_INVALID",
              `emit() chainId: ${s}`
            );
            throw new Error(c);
          }
          if (!X3(n)) {
            const { message: c } = se(
              "MISSING_OR_INVALID",
              `emit() event: ${JSON.stringify(n)}`
            );
            throw new Error(c);
          }
          if (!e6(o, s, n.name)) {
            const { message: c } = se(
              "MISSING_OR_INVALID",
              `emit() event: ${JSON.stringify(n)}`
            );
            throw new Error(c);
          }
        })),
      (this.isValidDisconnect = (r) =>
        P(this, null, function* () {
          if (!ir(r)) {
            const { message: n } = se(
              "MISSING_OR_INVALID",
              `disconnect() params: ${r}`
            );
            throw new Error(n);
          }
          const { topic: i } = r;
          yield this.isValidSessionOrPairingTopic(i);
        })),
      (this.isValidAuthenticate = (r) => {
        const { chains: i, uri: n, domain: s, nonce: o } = r;
        if (!Array.isArray(i) || i.length === 0)
          throw new Error("chains is required and must be a non-empty array");
        if (!bt(n, !1)) throw new Error("uri is required parameter");
        if (!bt(s, !1)) throw new Error("domain is required parameter");
        if (!bt(o, !1)) throw new Error("nonce is required parameter");
        if ([...new Set(i.map((l) => oa(l).namespace))].length > 1)
          throw new Error(
            "Multi-namespace requests are not supported. Please request single namespace only."
          );
        const { namespace: c } = oa(i[0]);
        if (c !== "eip155")
          throw new Error(
            "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
          );
      }),
      (this.getVerifyContext = (r, i) =>
        P(this, null, function* () {
          const n = {
            verified: {
              verifyUrl: i.verifyUrl || bn,
              validation: "UNKNOWN",
              origin: i.url || "",
            },
          };
          try {
            const s = yield this.client.core.verify.resolve({
              attestationId: r,
              verifyUrl: i.verifyUrl,
            });
            s &&
              ((n.verified.origin = s.origin),
              (n.verified.isScam = s.isScam),
              (n.verified.validation =
                s.origin === new URL(i.url).origin ? "VALID" : "INVALID"));
          } catch (s) {
            this.client.logger.info(s);
          }
          return (
            this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n
          );
        })),
      (this.validateSessionProps = (r, i) => {
        Object.values(r).forEach((n) => {
          if (!bt(n, !1)) {
            const { message: s } = se(
              "MISSING_OR_INVALID",
              `${i} must be in Record<string, string> format. Received: ${JSON.stringify(
                n
              )}`
            );
            throw new Error(s);
          }
        });
      }),
      (this.getPendingAuthRequest = (r) => {
        const i = this.client.auth.requests.get(r);
        return typeof i == "object" ? i : void 0;
      }),
      (this.addToRecentlyDeleted = (r, i) => {
        if (
          (this.recentlyDeletedMap.set(r, i),
          this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
        ) {
          let n = 0;
          const s = this.recentlyDeletedLimit / 2;
          for (const o of this.recentlyDeletedMap.keys()) {
            if (n++ >= s) break;
            this.recentlyDeletedMap.delete(o);
          }
        }
      }),
      (this.checkRecentlyDeleted = (r) => {
        const i = this.recentlyDeletedMap.get(r);
        if (i) {
          const { message: n } = se(
            "MISSING_OR_INVALID",
            `Record was recently deleted - ${i}: ${r}`
          );
          throw new Error(n);
        }
      });
  }
  isInitialized() {
    return P(this, null, function* () {
      if (!this.initialized) {
        const { message: t } = se("NOT_INITIALIZED", this.name);
        throw new Error(t);
      }
      yield this.client.core.relayer.confirmOnlineStateOrThrow();
    });
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(nr.message, (t) =>
      P(this, null, function* () {
        const { topic: r, message: i } = t,
          { publicKey: n } = this.client.auth.authKeys.keys.includes(co)
            ? this.client.auth.authKeys.get(co)
            : { responseTopic: void 0, publicKey: void 0 },
          s = yield this.client.core.crypto.decode(r, i, {
            receiverPublicKey: n,
          });
        try {
          Wc(s)
            ? (this.client.core.history.set(r, s),
              this.onRelayEventRequest({ topic: r, payload: s }))
            : Vo(s)
            ? (yield this.client.core.history.resolve(s),
              yield this.onRelayEventResponse({ topic: r, payload: s }),
              this.client.core.history.delete(r, s.id))
            : this.onRelayEventUnknownPayload({ topic: r, payload: s });
        } catch (o) {
          this.client.logger.error(o);
        }
      })
    );
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Dr.expired, (t) =>
      P(this, null, function* () {
        const { topic: r, id: i } = Uf(t.target);
        if (i && this.client.pendingRequest.keys.includes(i))
          return yield this.deletePendingSessionRequest(i, se("EXPIRED"), !0);
        if (i && this.client.auth.requests.keys.includes(i))
          return yield this.deletePendingAuthRequest(i, se("EXPIRED"), !0);
        r
          ? this.client.session.keys.includes(r) &&
            (yield this.deleteSession({ topic: r, expirerHasDeleted: !0 }),
            this.client.events.emit("session_expire", { topic: r }))
          : i &&
            (yield this.deleteProposal(i, !0),
            this.client.events.emit("proposal_expire", { id: i }));
      })
    );
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(vn.create, (t) =>
      this.onPairingCreated(t)
    ),
      this.client.core.pairing.events.on(vn.delete, (t) => {
        this.addToRecentlyDeleted(t.topic, "pairing");
      });
  }
  isValidPairingTopic(t) {
    if (!bt(t, !1)) {
      const { message: r } = se(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = se(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ni(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = se("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  isValidSessionTopic(t) {
    return P(this, null, function* () {
      if (!bt(t, !1)) {
        const { message: r } = se(
          "MISSING_OR_INVALID",
          `session topic should be a string: ${t}`
        );
        throw new Error(r);
      }
      if (
        (this.checkRecentlyDeleted(t), !this.client.session.keys.includes(t))
      ) {
        const { message: r } = se(
          "NO_MATCHING_KEY",
          `session topic doesn't exist: ${t}`
        );
        throw new Error(r);
      }
      if (Ni(this.client.session.get(t).expiry)) {
        yield this.deleteSession({ topic: t });
        const { message: r } = se("EXPIRED", `session topic: ${t}`);
        throw new Error(r);
      }
      if (!this.client.core.crypto.keychain.has(t)) {
        const { message: r } = se(
          "MISSING_OR_INVALID",
          `session topic does not exist in keychain: ${t}`
        );
        throw (yield this.deleteSession({ topic: t }), new Error(r));
      }
    });
  }
  isValidSessionOrPairingTopic(t) {
    return P(this, null, function* () {
      if ((this.checkRecentlyDeleted(t), this.client.session.keys.includes(t)))
        yield this.isValidSessionTopic(t);
      else if (this.client.core.pairing.pairings.keys.includes(t))
        this.isValidPairingTopic(t);
      else if (bt(t, !1)) {
        const { message: r } = se(
          "NO_MATCHING_KEY",
          `session or pairing topic doesn't exist: ${t}`
        );
        throw new Error(r);
      } else {
        const { message: r } = se(
          "MISSING_OR_INVALID",
          `session or pairing topic should be a string: ${t}`
        );
        throw new Error(r);
      }
    });
  }
  isValidProposalId(t) {
    return P(this, null, function* () {
      if (!W3(t)) {
        const { message: r } = se(
          "MISSING_OR_INVALID",
          `proposal id should be a number: ${t}`
        );
        throw new Error(r);
      }
      if (!this.client.proposal.keys.includes(t)) {
        const { message: r } = se(
          "NO_MATCHING_KEY",
          `proposal id doesn't exist: ${t}`
        );
        throw new Error(r);
      }
      if (Ni(this.client.proposal.get(t).expiryTimestamp)) {
        yield this.deleteProposal(t);
        const { message: r } = se("EXPIRED", `proposal id: ${t}`);
        throw new Error(r);
      }
    });
  }
}
class X5 extends un {
  constructor(t, r) {
    super(t, r, B5, Jc), (this.core = t), (this.logger = r);
  }
}
class Z5 extends un {
  constructor(t, r) {
    super(t, r, F5, Jc), (this.core = t), (this.logger = r);
  }
}
class eA extends un {
  constructor(t, r) {
    super(t, r, U5, Jc, (i) => i.id), (this.core = t), (this.logger = r);
  }
}
class tA extends un {
  constructor(t, r) {
    super(t, r, z5, Go, () => co), (this.core = t), (this.logger = r);
  }
}
class rA extends un {
  constructor(t, r) {
    super(t, r, K5, Go), (this.core = t), (this.logger = r);
  }
}
class iA extends un {
  constructor(t, r) {
    super(t, r, V5, Go, (i) => i.id), (this.core = t), (this.logger = r);
  }
}
class nA {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.authKeys = new tA(this.core, this.logger)),
      (this.pairingTopics = new rA(this.core, this.logger)),
      (this.requests = new iA(this.core, this.logger));
  }
  init() {
    return P(this, null, function* () {
      yield this.authKeys.init(),
        yield this.pairingTopics.init(),
        yield this.requests.init();
    });
  }
}
let sA = class Qd extends gm {
  constructor(t) {
    super(t),
      (this.protocol = Hd),
      (this.version = Gd),
      (this.name = xa.name),
      (this.events = new zr.EventEmitter()),
      (this.on = (i, n) => this.events.on(i, n)),
      (this.once = (i, n) => this.events.once(i, n)),
      (this.off = (i, n) => this.events.off(i, n)),
      (this.removeListener = (i, n) => this.events.removeListener(i, n)),
      (this.removeAllListeners = (i) => this.events.removeAllListeners(i)),
      (this.connect = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.connect(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.pair = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.pair(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.approve = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.approve(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.reject = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.reject(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.update = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.update(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.extend = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.extend(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.request = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.request(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.respond = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.respond(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.ping = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.ping(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.emit = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.emit(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.disconnect = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.disconnect(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.find = (i) => {
        try {
          return this.engine.find(i);
        } catch (n) {
          throw (this.logger.error(n.message), n);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (i) {
          throw (this.logger.error(i.message), i);
        }
      }),
      (this.authenticate = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.authenticate(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.formatAuthMessage = (i) => {
        try {
          return this.engine.formatAuthMessage(i);
        } catch (n) {
          throw (this.logger.error(n.message), n);
        }
      }),
      (this.approveSessionAuthenticate = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.approveSessionAuthenticate(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.rejectSessionAuthenticate = (i) =>
        P(this, null, function* () {
          try {
            return yield this.engine.rejectSessionAuthenticate(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        })),
      (this.name = (t == null ? void 0 : t.name) || xa.name),
      (this.metadata = (t == null ? void 0 : t.metadata) || iv()),
      (this.signConfig = t == null ? void 0 : t.signConfig);
    const r =
      typeof (t == null ? void 0 : t.logger) < "u" &&
      typeof (t == null ? void 0 : t.logger) != "string"
        ? t.logger
        : Fo(Ic({ level: (t == null ? void 0 : t.logger) || xa.logger }));
    (this.core = (t == null ? void 0 : t.core) || new P5(t)),
      (this.logger = cr(r, this.name)),
      (this.session = new Z5(this.core, this.logger)),
      (this.proposal = new X5(this.core, this.logger)),
      (this.pendingRequest = new eA(this.core, this.logger)),
      (this.engine = new J5(this)),
      (this.auth = new nA(this.core, this.logger));
  }
  static init(t) {
    return P(this, null, function* () {
      const r = new Qd(t);
      return yield r.initialize(), r;
    });
  }
  get context() {
    return ar(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  validateMetadata(t) {
    if (!t.name) throw new Error("name is required value in metadata");
    if (!t.description)
      throw new Error("description is required value in metadata");
    if (!t.url) throw new Error("url is required value in metadata");
  }
  initialize() {
    return P(this, null, function* () {
      this.logger.trace("Initialized");
      try {
        yield this.validateMetadata(this.metadata),
          yield this.core.start(),
          yield this.session.init(),
          yield this.proposal.init(),
          yield this.pendingRequest.init(),
          yield this.engine.init(),
          yield this.auth.init(),
          this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
          this.logger.info("SignClient Initialization Success");
      } catch (t) {
        throw (
          (this.logger.info("SignClient Initialization Failure"),
          this.logger.error(t.message),
          t)
        );
      }
    });
  }
};
const oA = Symbol(),
  hh = Object.getPrototypeOf,
  lc = new WeakMap(),
  aA = (e) =>
    e &&
    (lc.has(e)
      ? lc.get(e)
      : hh(e) === Object.prototype || hh(e) === Array.prototype),
  cA = (e) => (aA(e) && e[oA]) || null,
  fh = (e, t = !0) => {
    lc.set(e, t);
  },
  Ta = (e) => typeof e == "object" && e !== null,
  Ri = new WeakMap(),
  Qs = new WeakSet(),
  uA = (
    e = Object.is,
    t = (f, g) => new Proxy(f, g),
    r = (f) =>
      Ta(f) &&
      !Qs.has(f) &&
      (Array.isArray(f) || !(Symbol.iterator in f)) &&
      !(f instanceof WeakMap) &&
      !(f instanceof WeakSet) &&
      !(f instanceof Error) &&
      !(f instanceof Number) &&
      !(f instanceof Date) &&
      !(f instanceof String) &&
      !(f instanceof RegExp) &&
      !(f instanceof ArrayBuffer),
    i = (f) => {
      switch (f.status) {
        case "fulfilled":
          return f.value;
        case "rejected":
          throw f.reason;
        default:
          throw f;
      }
    },
    n = new WeakMap(),
    s = (f, g, w = i) => {
      const D = n.get(f);
      if ((D == null ? void 0 : D[0]) === g) return D[1];
      const A = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f));
      return (
        fh(A, !0),
        n.set(f, [g, A]),
        Reflect.ownKeys(f).forEach((M) => {
          if (Object.getOwnPropertyDescriptor(A, M)) return;
          const K = Reflect.get(f, M),
            q = { value: K, enumerable: !0, configurable: !0 };
          if (Qs.has(K)) fh(K, !1);
          else if (K instanceof Promise) delete q.value, (q.get = () => w(K));
          else if (Ri.has(K)) {
            const [Q, N] = Ri.get(K);
            q.value = s(Q, N(), w);
          }
          Object.defineProperty(A, M, q);
        }),
        Object.preventExtensions(A)
      );
    },
    o = new WeakMap(),
    c = [1, 1],
    l = (f) => {
      if (!Ta(f)) throw new Error("object required");
      const g = o.get(f);
      if (g) return g;
      let w = c[0];
      const D = new Set(),
        A = (I, C = ++c[0]) => {
          w !== C && ((w = C), D.forEach((B) => B(I, C)));
        };
      let M = c[1];
      const K = (I = ++c[1]) => (
          M !== I &&
            !D.size &&
            ((M = I),
            Q.forEach(([C]) => {
              const B = C[1](I);
              B > w && (w = B);
            })),
          w
        ),
        q = (I) => (C, B) => {
          const U = [...C];
          (U[1] = [I, ...U[1]]), A(U, B);
        },
        Q = new Map(),
        N = (I, C) => {
          if (Q.has(I)) throw new Error("prop listener already exists");
          if (D.size) {
            const B = C[3](q(I));
            Q.set(I, [C, B]);
          } else Q.set(I, [C]);
        },
        H = (I) => {
          var C;
          const B = Q.get(I);
          B && (Q.delete(I), (C = B[1]) == null || C.call(B));
        },
        L = (I) => (
          D.add(I),
          D.size === 1 &&
            Q.forEach(([B, U], a) => {
              if (U) throw new Error("remove already exists");
              const u = B[3](q(a));
              Q.set(a, [B, u]);
            }),
          () => {
            D.delete(I),
              D.size === 0 &&
                Q.forEach(([B, U], a) => {
                  U && (U(), Q.set(a, [B]));
                });
          }
        ),
        j = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f)),
        m = t(j, {
          deleteProperty(I, C) {
            const B = Reflect.get(I, C);
            H(C);
            const U = Reflect.deleteProperty(I, C);
            return U && A(["delete", [C], B]), U;
          },
          set(I, C, B, U) {
            const a = Reflect.has(I, C),
              u = Reflect.get(I, C, U);
            if (a && (e(u, B) || (o.has(B) && e(u, o.get(B))))) return !0;
            H(C), Ta(B) && (B = cA(B) || B);
            let h = B;
            if (B instanceof Promise)
              B.then((v) => {
                (B.status = "fulfilled"), (B.value = v), A(["resolve", [C], v]);
              }).catch((v) => {
                (B.status = "rejected"), (B.reason = v), A(["reject", [C], v]);
              });
            else {
              !Ri.has(B) && r(B) && (h = l(B));
              const v = !Qs.has(h) && Ri.get(h);
              v && N(C, v);
            }
            return Reflect.set(I, C, h, U), A(["set", [C], B, u]), !0;
          },
        });
      o.set(f, m);
      const y = [j, K, s, L];
      return (
        Ri.set(m, y),
        Reflect.ownKeys(f).forEach((I) => {
          const C = Object.getOwnPropertyDescriptor(f, I);
          "value" in C && ((m[I] = f[I]), delete C.value, delete C.writable),
            Object.defineProperty(j, I, C);
        }),
        m
      );
    }
  ) => [l, Ri, Qs, e, t, r, i, n, s, o, c],
  [lA] = uA();
function Ui(e = {}) {
  return lA(e);
}
function ln(e, t, r) {
  const i = Ri.get(e);
  i || console.warn("Please use proxy object");
  let n;
  const s = [],
    o = i[3];
  let c = !1;
  const f = o((g) => {
    if ((s.push(g), r)) {
      t(s.splice(0));
      return;
    }
    n ||
      (n = Promise.resolve().then(() => {
        (n = void 0), c && t(s.splice(0));
      }));
  });
  return (
    (c = !0),
    () => {
      (c = !1), f();
    }
  );
}
function hA(e, t) {
  const r = Ri.get(e);
  r || console.warn("Please use proxy object");
  const [i, n, s] = r;
  return s(i, n(), t);
}
const Ct = Ui({
    history: ["ConnectWallet"],
    view: "ConnectWallet",
    data: void 0,
  }),
  Yd = {
    state: Ct,
    subscribe(e) {
      return ln(Ct, () => e(Ct));
    },
    push(e, t) {
      e !== Ct.view && ((Ct.view = e), t && (Ct.data = t), Ct.history.push(e));
    },
    reset(e) {
      (Ct.view = e), (Ct.history = [e]);
    },
    replace(e) {
      Ct.history.length > 1 &&
        ((Ct.history[Ct.history.length - 1] = e), (Ct.view = e));
    },
    goBack() {
      if (Ct.history.length > 1) {
        Ct.history.pop();
        const [e] = Ct.history.slice(-1);
        Ct.view = e;
      }
    },
    setData(e) {
      Ct.data = e;
    },
  },
  zt = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile() {
      return typeof window < "u"
        ? !!(
            window.matchMedia("(pointer:coarse)").matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
              navigator.userAgent
            )
          )
        : !1;
    },
    isAndroid() {
      return (
        zt.isMobile() && navigator.userAgent.toLowerCase().includes("android")
      );
    },
    isIos() {
      const e = navigator.userAgent.toLowerCase();
      return zt.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray(e) {
      return Array.isArray(e) && e.length > 0;
    },
    formatNativeUrl(e, t, r) {
      if (zt.isHttpUrl(e)) return this.formatUniversalUrl(e, t, r);
      let i = e;
      i.includes("://") ||
        ((i = e.replaceAll("/", "").replaceAll(":", "")), (i = `${i}://`)),
        i.endsWith("/") || (i = `${i}/`),
        this.setWalletConnectDeepLink(i, r);
      const n = encodeURIComponent(t);
      return `${i}wc?uri=${n}`;
    },
    formatUniversalUrl(e, t, r) {
      if (!zt.isHttpUrl(e)) return this.formatNativeUrl(e, t, r);
      let i = e;
      i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
      const n = encodeURIComponent(t);
      return `${i}wc?uri=${n}`;
    },
    wait(e) {
      return P(this, null, function* () {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      });
    },
    openHref(e, t) {
      window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      try {
        localStorage.setItem(
          zt.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: e, name: t })
        );
      } catch (r) {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e) {
      try {
        const [t] = e.split("?");
        localStorage.setItem(
          zt.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: t, name: "Android" })
        );
      } catch (t) {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(zt.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch (e) {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setModalVersionInStorage() {
      try {
        typeof localStorage < "u" &&
          localStorage.setItem(zt.WCM_VERSION, "2.6.2");
      } catch (e) {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e;
      const t = (e = Yd.state.data) == null ? void 0 : e.Wallet;
      if (!t) throw new Error('Missing "Wallet" view data');
      return t;
    },
  },
  fA =
    typeof location < "u" &&
    (location.hostname.includes("localhost") ||
      location.protocol.includes("https")),
  qt = Ui({
    enabled: fA,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0,
  }),
  dA = {
    state: qt,
    subscribe(e) {
      return ln(qt.events, () => e(hA(qt.events[qt.events.length - 1])));
    },
    initialize() {
      qt.enabled &&
        typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" &&
        (qt.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e) {
      qt.connectedWalletId = e;
    },
    click(e) {
      if (qt.enabled) {
        const t = {
          type: "CLICK",
          name: e.name,
          userSessionId: qt.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        qt.events.push(t);
      }
    },
    track(e) {
      if (qt.enabled) {
        const t = {
          type: "TRACK",
          name: e.name,
          userSessionId: qt.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        qt.events.push(t);
      }
    },
    view(e) {
      if (qt.enabled) {
        const t = {
          type: "VIEW",
          name: e.name,
          userSessionId: qt.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        qt.events.push(t);
      }
    },
  },
  Jr = Ui({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1,
  }),
  jr = {
    state: Jr,
    subscribe(e) {
      return ln(Jr, () => e(Jr));
    },
    setChains(e) {
      Jr.chains = e;
    },
    setWalletConnectUri(e) {
      Jr.walletConnectUri = e;
    },
    setIsCustomDesktop(e) {
      Jr.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      Jr.isCustomMobile = e;
    },
    setIsDataLoaded(e) {
      Jr.isDataLoaded = e;
    },
    setIsUiLoaded(e) {
      Jr.isUiLoaded = e;
    },
    setIsAuth(e) {
      Jr.isAuth = e;
    },
  },
  Ys = Ui({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chains: void 0,
    enableAuthMode: !1,
    enableExplorer: !0,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0,
  }),
  Tn = {
    state: Ys,
    subscribe(e) {
      return ln(Ys, () => e(Ys));
    },
    setConfig(e) {
      var t, r;
      dA.initialize(),
        jr.setChains(e.chains),
        jr.setIsAuth(!!e.enableAuthMode),
        jr.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)),
        jr.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)),
        zt.setModalVersionInStorage(),
        Object.assign(Ys, e);
    },
  };
var gA = Object.defineProperty,
  dh = Object.getOwnPropertySymbols,
  pA = Object.prototype.hasOwnProperty,
  mA = Object.prototype.propertyIsEnumerable,
  gh = (e, t, r) =>
    t in e
      ? gA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  yA = (e, t) => {
    for (var r in t || (t = {})) pA.call(t, r) && gh(e, r, t[r]);
    if (dh) for (var r of dh(t)) mA.call(t, r) && gh(e, r, t[r]);
    return e;
  };
const hc = "https://explorer-api.walletconnect.com",
  fc = "wcm",
  dc = "js-2.6.2";
function Js(e, t) {
  return P(this, null, function* () {
    const r = yA({ sdkType: fc, sdkVersion: dc }, t),
      i = new URL(e, hc);
    return (
      i.searchParams.append("projectId", Tn.state.projectId),
      Object.entries(r).forEach(([n, s]) => {
        s && i.searchParams.append(n, String(s));
      }),
      (yield fetch(i)).json()
    );
  });
}
const Hi = {
  getDesktopListings(e) {
    return P(this, null, function* () {
      return Js("/w3m/v1/getDesktopListings", e);
    });
  },
  getMobileListings(e) {
    return P(this, null, function* () {
      return Js("/w3m/v1/getMobileListings", e);
    });
  },
  getInjectedListings(e) {
    return P(this, null, function* () {
      return Js("/w3m/v1/getInjectedListings", e);
    });
  },
  getAllListings(e) {
    return P(this, null, function* () {
      return Js("/w3m/v1/getAllListings", e);
    });
  },
  getWalletImageUrl(e) {
    return `${hc}/w3m/v1/getWalletImage/${e}?projectId=${Tn.state.projectId}&sdkType=${fc}&sdkVersion=${dc}`;
  },
  getAssetImageUrl(e) {
    return `${hc}/w3m/v1/getAssetImage/${e}?projectId=${Tn.state.projectId}&sdkType=${fc}&sdkVersion=${dc}`;
  },
};
var wA = Object.defineProperty,
  ph = Object.getOwnPropertySymbols,
  vA = Object.prototype.hasOwnProperty,
  bA = Object.prototype.propertyIsEnumerable,
  mh = (e, t, r) =>
    t in e
      ? wA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  _A = (e, t) => {
    for (var r in t || (t = {})) vA.call(t, r) && mh(e, r, t[r]);
    if (ph) for (var r of ph(t)) bA.call(t, r) && mh(e, r, t[r]);
    return e;
  };
const yh = zt.isMobile(),
  Xr = Ui({
    wallets: { listings: [], total: 0, page: 1 },
    search: { listings: [], total: 0, page: 1 },
    recomendedWallets: [],
  }),
  aS = {
    state: Xr,
    getRecomendedWallets() {
      return P(this, null, function* () {
        const {
          explorerRecommendedWalletIds: e,
          explorerExcludedWalletIds: t,
        } = Tn.state;
        if (e === "NONE" || (t === "ALL" && !e)) return Xr.recomendedWallets;
        if (zt.isArray(e)) {
          const r = { recommendedIds: e.join(",") },
            { listings: i } = yield Hi.getAllListings(r),
            n = Object.values(i);
          n.sort((s, o) => {
            const c = e.indexOf(s.id),
              l = e.indexOf(o.id);
            return c - l;
          }),
            (Xr.recomendedWallets = n);
        } else {
          const { chains: r, isAuth: i } = jr.state,
            n = r == null ? void 0 : r.join(","),
            s = zt.isArray(t),
            o = {
              page: 1,
              sdks: i ? "auth_v1" : void 0,
              entries: zt.RECOMMENDED_WALLET_AMOUNT,
              chains: n,
              version: 2,
              excludedIds: s ? t.join(",") : void 0,
            },
            { listings: c } = yh
              ? yield Hi.getMobileListings(o)
              : yield Hi.getDesktopListings(o);
          Xr.recomendedWallets = Object.values(c);
        }
        return Xr.recomendedWallets;
      });
    },
    getWallets(e) {
      return P(this, null, function* () {
        const t = _A({}, e),
          { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } =
            Tn.state,
          { recomendedWallets: n } = Xr;
        if (i === "ALL") return Xr.wallets;
        n.length
          ? (t.excludedIds = n.map((w) => w.id).join(","))
          : zt.isArray(r) && (t.excludedIds = r.join(",")),
          zt.isArray(i) &&
            (t.excludedIds = [t.excludedIds, i].filter(Boolean).join(",")),
          jr.state.isAuth && (t.sdks = "auth_v1");
        const { page: s, search: o } = e,
          { listings: c, total: l } = yh
            ? yield Hi.getMobileListings(t)
            : yield Hi.getDesktopListings(t),
          f = Object.values(c),
          g = o ? "search" : "wallets";
        return (
          (Xr[g] = {
            listings: [...Xr[g].listings, ...f],
            total: l,
            page: s != null ? s : 1,
          }),
          { listings: f, total: l }
        );
      });
    },
    getWalletImageUrl(e) {
      return Hi.getWalletImageUrl(e);
    },
    getAssetImageUrl(e) {
      return Hi.getAssetImageUrl(e);
    },
    resetSearch() {
      Xr.search = { listings: [], total: 0, page: 1 };
    },
  },
  mn = Ui({ open: !1 }),
  Ma = {
    state: mn,
    subscribe(e) {
      return ln(mn, () => e(mn));
    },
    open(e) {
      return P(this, null, function* () {
        return new Promise((t) => {
          const { isUiLoaded: r, isDataLoaded: i } = jr.state;
          if (
            (zt.removeWalletConnectDeepLink(),
            jr.setWalletConnectUri(e == null ? void 0 : e.uri),
            jr.setChains(e == null ? void 0 : e.chains),
            Yd.reset("ConnectWallet"),
            r && i)
          )
            (mn.open = !0), t();
          else {
            const n = setInterval(() => {
              const s = jr.state;
              s.isUiLoaded &&
                s.isDataLoaded &&
                (clearInterval(n), (mn.open = !0), t());
            }, 200);
          }
        });
      });
    },
    close() {
      mn.open = !1;
    },
  };
var EA = Object.defineProperty,
  wh = Object.getOwnPropertySymbols,
  AA = Object.prototype.hasOwnProperty,
  SA = Object.prototype.propertyIsEnumerable,
  vh = (e, t, r) =>
    t in e
      ? EA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  IA = (e, t) => {
    for (var r in t || (t = {})) AA.call(t, r) && vh(e, r, t[r]);
    if (wh) for (var r of wh(t)) SA.call(t, r) && vh(e, r, t[r]);
    return e;
  };
function DA() {
  return (
    typeof matchMedia < "u" &&
    matchMedia("(prefers-color-scheme: dark)").matches
  );
}
const cs = Ui({ themeMode: DA() ? "dark" : "light" }),
  bh = {
    state: cs,
    subscribe(e) {
      return ln(cs, () => e(cs));
    },
    setThemeConfig(e) {
      const { themeMode: t, themeVariables: r } = e;
      t && (cs.themeMode = t), r && (cs.themeVariables = IA({}, r));
    },
  },
  Gi = Ui({ open: !1, message: "", variant: "success" }),
  cS = {
    state: Gi,
    subscribe(e) {
      return ln(Gi, () => e(Gi));
    },
    openToast(e, t) {
      (Gi.open = !0), (Gi.message = e), (Gi.variant = t);
    },
    closeToast() {
      Gi.open = !1;
    },
  };
class xA {
  constructor(t) {
    (this.openModal = Ma.open),
      (this.closeModal = Ma.close),
      (this.subscribeModal = Ma.subscribe),
      (this.setTheme = bh.setThemeConfig),
      bh.setThemeConfig(t),
      Tn.setConfig(t),
      this.initUi();
  }
  initUi() {
    return P(this, null, function* () {
      if (typeof window < "u") {
        yield Ch(
          () => import("./index-fbc14213.js"),
          [
            "assets/index-fbc14213.js",
            "assets/Qrcode-20508360.js",
            "assets/web-da7da7e5.js",
            "assets/manifest-e0f0ba59.js",
            "assets/Icon-b6e375d0.js",
            "assets/solid-js-2e15682c.js",
            "assets/i18n-9b1e4bd8.js",
            "assets/AboutJb-13924d78.js",
            "assets/bethistory-fcf99adb.js",
            "assets/withdrawFiat-1254e3b3.js",
            "assets/CopyInput-441aca40.js",
            "assets/store-2ed2b91e.js",
            "assets/Loading-72a9f35e.js",
            "assets/lib-6879580e.js",
            "assets/memoize-ff109130.js",
            "assets/sortBy-6b2810fa.js",
            "assets/_baseFlatten-f0777715.js",
            "assets/_setToArray-f7a05dc1.js",
            "assets/_defineProperty-3c705e3e.js",
            "assets/_baseOrderBy-d3b5242c.js",
            "assets/_baseIteratee-dc3e9bea.js",
            "assets/Utr-adf02821.js",
            "assets/Icon-603169e7.js",
            "assets/store-eb5336a3.js",
            "assets/_baseFindIndex-15a8234c.js",
            "assets/toInteger-112c6978.js",
            "assets/toNumber-d93b0850.js",
            "assets/router-5691abb0.js",
            "assets/AboutBcl-bcb4cc45.js",
            "assets/groupBy-5d1dee29.js",
            "assets/orderBy-fc8ca101.js",
            "assets/ErrorRest-1a0f0516.js",
            "assets/SelectCurrency-0ef42d5c.js",
            "assets/LocalAmountItem-390b01c4.js",
          ]
        );
        const t = document.createElement("wcm-modal");
        document.body.insertAdjacentElement("beforeend", t),
          jr.setIsUiLoaded(!0);
      }
    });
  }
}
const Na = Io.host,
  CA = {
    name: "WalletConnect " + Na,
    description: "WalletConnect BCGAME " + Na,
    url: Na,
    icons: [
      "https://walletconnect.com/_next/static/media/logo_mark.84dd8525.svg",
    ],
  };
function TA() {
  return P(this, null, function* () {
    return yield sA.init({
      projectId: Io.WALLET_CONNECT_PROJECT_ID,
      metadata: CA,
    });
  });
}
const MA = Math.pow(10, 18);
function NA(e) {
  return new Yi(e).mul(MA).toNumber();
}
function OA(e, t, r, i) {
  return P(this, null, function* () {
    var n;
    try {
      yield e.request({
        topic: t.topic,
        chainId: "eip155:1",
        request: {
          method: "eth_sendTransaction",
          params: [
            {
              from: Qw(
                (n = t == null ? void 0 : t.namespaces.eip155.accounts[0]) !=
                  null
                  ? n
                  : ""
              ),
              to: r,
              data: "0x",
              gasPrice: "0x029104e28c",
              gasLimit: "0x5208",
              value: `0x${NA(i).toString(16)}`,
            },
          ],
        },
      }),
        Yt.success(le("Success"));
    } catch (s) {
      s instanceof Error && Yt(s);
    }
  });
}
function RA(e, t, r) {
  return P(this, null, function* () {
    const i = new xA({ projectId: Io.WALLET_CONNECT_PROJECT_ID }),
      n = yield TA();
    try {
      const { uri: s, approval: o } = yield n.connect({
        requiredNamespaces: {
          eip155: {
            methods: ["eth_sendTransaction", "personal_sign"],
            chains: ["eip155:1"],
            events: ["chainChanged", "accountsChanged"],
          },
        },
      });
      if (s) {
        r(), i.openModal({ uri: s });
        const c = yield o();
        yield OA(n, c, e, t), i.closeModal();
      }
    } catch (s) {
      s instanceof Error && Yt(s);
    }
  });
}
var PA = ie(
    '<div class="flex items-center"><div class="rounded p-2 bg-layer1"><img class="h-10 w-10"alt=""></div><div class=ml-2><div class=text-second></div><div class=font-extrabold>WalletConnect'
  ),
  BA = ie(
    '<div class=mt-5><div class="mb-1 flex items-center"><img class="mr-1 h-4 w-4"><div class="font-semibold text-secondary">ETH '
  ),
  LA = ie('<img class="mr-1 h-5 w-5"alt="">'),
  FA = ie('<div class="font-semibold text-secondary">WalletConnect');
function $A(e) {
  const [t, r] = dr(0);
  function i() {
    return RA(e.address, t(), () => {
      hr.pop();
    }).catch((n) => Yt(n.message));
  }
  return V(nn, {
    id: "walletconnect",
    get children() {
      return [
        (() => {
          var n = PA(),
            s = n.firstChild,
            o = s.firstChild,
            c = s.nextSibling,
            l = c.firstChild;
          return ft(o, "src", zh), te(l, () => le("Deposit with")), n;
        })(),
        (() => {
          var n = BA(),
            s = n.firstChild,
            o = s.firstChild,
            c = o.nextSibling;
          return (
            c.firstChild,
            te(c, () => le("Deposit amount"), null),
            te(
              n,
              V(xo, {
                get value() {
                  return t();
                },
                onChange: (l) => r(l),
                type: "number",
                class: "text-base font-semibold",
              }),
              null
            ),
            te(
              n,
              V(Xt, {
                type: "brand",
                class: "w-full my-4",
                onClick: i,
                get children() {
                  return le("Deposit");
                },
              }),
              null
            ),
            _t(() => ft(o, "src", ai.coinIcon("ETH"))),
            n
          );
        })(),
      ];
    },
  });
}
function UA(e) {
  return V(Xt, {
    type: "second",
    get class() {
      return tt("flex items-center bg-layer6", e.class);
    },
    onClick: () => hr.push(() => V($A, e)),
    get children() {
      return [
        (() => {
          var t = LA();
          return ft(t, "src", zh), t;
        })(),
        FA(),
      ];
    },
  });
}
const Jd = "/modules/wallet2/assets/metamask-c6d19156.png";
var kA = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Oa = Math.ceil,
  Sr = Math.floor,
  rr = "[BigNumber Error] ",
  _h = rr + "Number primitive has more than 15 significant digits: ",
  Br = 1e14,
  $e = 14,
  Ra = 9007199254740991,
  Pa = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  Mi = 1e7,
  Tt = 1e9;
function Xd(e) {
  var t,
    r,
    i,
    n = (N.prototype = { constructor: N, toString: null, valueOf: null }),
    s = new N(1),
    o = 20,
    c = 4,
    l = -7,
    f = 21,
    g = -1e7,
    w = 1e7,
    D = !1,
    A = 1,
    M = 0,
    K = {
      prefix: "",
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ",",
      decimalSeparator: ".",
      fractionGroupSize: 0,
      fractionGroupSeparator: " ",
      suffix: "",
    },
    q = "0123456789abcdefghijklmnopqrstuvwxyz",
    Q = !0;
  function N(y, I) {
    var C,
      B,
      U,
      a,
      u,
      h,
      v,
      _,
      E = this;
    if (!(E instanceof N)) return new N(y, I);
    if (I == null) {
      if (y && y._isBigNumber === !0) {
        (E.s = y.s),
          !y.c || y.e > w
            ? (E.c = E.e = null)
            : y.e < g
            ? (E.c = [(E.e = 0)])
            : ((E.e = y.e), (E.c = y.c.slice()));
        return;
      }
      if ((h = typeof y == "number") && y * 0 == 0) {
        if (((E.s = 1 / y < 0 ? ((y = -y), -1) : 1), y === ~~y)) {
          for (a = 0, u = y; u >= 10; u /= 10, a++);
          a > w ? (E.c = E.e = null) : ((E.e = a), (E.c = [y]));
          return;
        }
        _ = String(y);
      } else {
        if (!kA.test((_ = String(y)))) return i(E, _, h);
        E.s = _.charCodeAt(0) == 45 ? ((_ = _.slice(1)), -1) : 1;
      }
      (a = _.indexOf(".")) > -1 && (_ = _.replace(".", "")),
        (u = _.search(/e/i)) > 0
          ? (a < 0 && (a = u), (a += +_.slice(u + 1)), (_ = _.substring(0, u)))
          : a < 0 && (a = _.length);
    } else {
      if ((pt(I, 2, q.length, "Base"), I == 10 && Q))
        return (E = new N(y)), k(E, o + E.e + 1, c);
      if (((_ = String(y)), (h = typeof y == "number"))) {
        if (y * 0 != 0) return i(E, _, h, I);
        if (
          ((E.s = 1 / y < 0 ? ((_ = _.slice(1)), -1) : 1),
          N.DEBUG && _.replace(/^0\.0*|\./, "").length > 15)
        )
          throw Error(_h + y);
      } else E.s = _.charCodeAt(0) === 45 ? ((_ = _.slice(1)), -1) : 1;
      for (C = q.slice(0, I), a = u = 0, v = _.length; u < v; u++)
        if (C.indexOf((B = _.charAt(u))) < 0) {
          if (B == ".") {
            if (u > a) {
              a = v;
              continue;
            }
          } else if (
            !U &&
            ((_ == _.toUpperCase() && (_ = _.toLowerCase())) ||
              (_ == _.toLowerCase() && (_ = _.toUpperCase())))
          ) {
            (U = !0), (u = -1), (a = 0);
            continue;
          }
          return i(E, String(y), h, I);
        }
      (h = !1),
        (_ = r(_, I, 10, E.s)),
        (a = _.indexOf(".")) > -1 ? (_ = _.replace(".", "")) : (a = _.length);
    }
    for (u = 0; _.charCodeAt(u) === 48; u++);
    for (v = _.length; _.charCodeAt(--v) === 48; );
    if ((_ = _.slice(u, ++v))) {
      if (((v -= u), h && N.DEBUG && v > 15 && (y > Ra || y !== Sr(y))))
        throw Error(_h + E.s * y);
      if ((a = a - u - 1) > w) E.c = E.e = null;
      else if (a < g) E.c = [(E.e = 0)];
      else {
        if (
          ((E.e = a), (E.c = []), (u = (a + 1) % $e), a < 0 && (u += $e), u < v)
        ) {
          for (u && E.c.push(+_.slice(0, u)), v -= $e; u < v; )
            E.c.push(+_.slice(u, (u += $e)));
          u = $e - (_ = _.slice(u)).length;
        } else u -= v;
        for (; u--; _ += "0");
        E.c.push(+_);
      }
    } else E.c = [(E.e = 0)];
  }
  (N.clone = Xd),
    (N.ROUND_UP = 0),
    (N.ROUND_DOWN = 1),
    (N.ROUND_CEIL = 2),
    (N.ROUND_FLOOR = 3),
    (N.ROUND_HALF_UP = 4),
    (N.ROUND_HALF_DOWN = 5),
    (N.ROUND_HALF_EVEN = 6),
    (N.ROUND_HALF_CEIL = 7),
    (N.ROUND_HALF_FLOOR = 8),
    (N.EUCLID = 9),
    (N.config = N.set =
      function (y) {
        var I, C;
        if (y != null)
          if (typeof y == "object") {
            if (
              (y.hasOwnProperty((I = "DECIMAL_PLACES")) &&
                ((C = y[I]), pt(C, 0, Tt, I), (o = C)),
              y.hasOwnProperty((I = "ROUNDING_MODE")) &&
                ((C = y[I]), pt(C, 0, 8, I), (c = C)),
              y.hasOwnProperty((I = "EXPONENTIAL_AT")) &&
                ((C = y[I]),
                C && C.pop
                  ? (pt(C[0], -Tt, 0, I),
                    pt(C[1], 0, Tt, I),
                    (l = C[0]),
                    (f = C[1]))
                  : (pt(C, -Tt, Tt, I), (l = -(f = C < 0 ? -C : C)))),
              y.hasOwnProperty((I = "RANGE")))
            )
              if (((C = y[I]), C && C.pop))
                pt(C[0], -Tt, -1, I),
                  pt(C[1], 1, Tt, I),
                  (g = C[0]),
                  (w = C[1]);
              else if ((pt(C, -Tt, Tt, I), C)) g = -(w = C < 0 ? -C : C);
              else throw Error(rr + I + " cannot be zero: " + C);
            if (y.hasOwnProperty((I = "CRYPTO")))
              if (((C = y[I]), C === !!C))
                if (C)
                  if (
                    typeof crypto != "undefined" &&
                    crypto &&
                    (crypto.getRandomValues || crypto.randomBytes)
                  )
                    D = C;
                  else throw ((D = !C), Error(rr + "crypto unavailable"));
                else D = C;
              else throw Error(rr + I + " not true or false: " + C);
            if (
              (y.hasOwnProperty((I = "MODULO_MODE")) &&
                ((C = y[I]), pt(C, 0, 9, I), (A = C)),
              y.hasOwnProperty((I = "POW_PRECISION")) &&
                ((C = y[I]), pt(C, 0, Tt, I), (M = C)),
              y.hasOwnProperty((I = "FORMAT")))
            )
              if (((C = y[I]), typeof C == "object")) K = C;
              else throw Error(rr + I + " not an object: " + C);
            if (y.hasOwnProperty((I = "ALPHABET")))
              if (
                ((C = y[I]),
                typeof C == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(C))
              )
                (Q = C.slice(0, 10) == "0123456789"), (q = C);
              else throw Error(rr + I + " invalid: " + C);
          } else throw Error(rr + "Object expected: " + y);
        return {
          DECIMAL_PLACES: o,
          ROUNDING_MODE: c,
          EXPONENTIAL_AT: [l, f],
          RANGE: [g, w],
          CRYPTO: D,
          MODULO_MODE: A,
          POW_PRECISION: M,
          FORMAT: K,
          ALPHABET: q,
        };
      }),
    (N.isBigNumber = function (y) {
      if (!y || y._isBigNumber !== !0) return !1;
      if (!N.DEBUG) return !0;
      var I,
        C,
        B = y.c,
        U = y.e,
        a = y.s;
      e: if ({}.toString.call(B) == "[object Array]") {
        if ((a === 1 || a === -1) && U >= -Tt && U <= Tt && U === Sr(U)) {
          if (B[0] === 0) {
            if (U === 0 && B.length === 1) return !0;
            break e;
          }
          if (
            ((I = (U + 1) % $e), I < 1 && (I += $e), String(B[0]).length == I)
          ) {
            for (I = 0; I < B.length; I++)
              if (((C = B[I]), C < 0 || C >= Br || C !== Sr(C))) break e;
            if (C !== 0) return !0;
          }
        }
      } else if (
        B === null &&
        U === null &&
        (a === null || a === 1 || a === -1)
      )
        return !0;
      throw Error(rr + "Invalid BigNumber: " + y);
    }),
    (N.maximum = N.max =
      function () {
        return L(arguments, -1);
      }),
    (N.minimum = N.min =
      function () {
        return L(arguments, 1);
      }),
    (N.random = (function () {
      var y = 9007199254740992,
        I =
          (Math.random() * y) & 2097151
            ? function () {
                return Sr(Math.random() * y);
              }
            : function () {
                return (
                  ((Math.random() * 1073741824) | 0) * 8388608 +
                  ((Math.random() * 8388608) | 0)
                );
              };
      return function (C) {
        var B,
          U,
          a,
          u,
          h,
          v = 0,
          _ = [],
          E = new N(s);
        if ((C == null ? (C = o) : pt(C, 0, Tt), (u = Oa(C / $e)), D))
          if (crypto.getRandomValues) {
            for (B = crypto.getRandomValues(new Uint32Array((u *= 2))); v < u; )
              (h = B[v] * 131072 + (B[v + 1] >>> 11)),
                h >= 9e15
                  ? ((U = crypto.getRandomValues(new Uint32Array(2))),
                    (B[v] = U[0]),
                    (B[v + 1] = U[1]))
                  : (_.push(h % 1e14), (v += 2));
            v = u / 2;
          } else if (crypto.randomBytes) {
            for (B = crypto.randomBytes((u *= 7)); v < u; )
              (h =
                (B[v] & 31) * 281474976710656 +
                B[v + 1] * 1099511627776 +
                B[v + 2] * 4294967296 +
                B[v + 3] * 16777216 +
                (B[v + 4] << 16) +
                (B[v + 5] << 8) +
                B[v + 6]),
                h >= 9e15
                  ? crypto.randomBytes(7).copy(B, v)
                  : (_.push(h % 1e14), (v += 7));
            v = u / 7;
          } else throw ((D = !1), Error(rr + "crypto unavailable"));
        if (!D) for (; v < u; ) (h = I()), h < 9e15 && (_[v++] = h % 1e14);
        for (
          u = _[--v],
            C %= $e,
            u && C && ((h = Pa[$e - C]), (_[v] = Sr(u / h) * h));
          _[v] === 0;
          _.pop(), v--
        );
        if (v < 0) _ = [(a = 0)];
        else {
          for (a = -1; _[0] === 0; _.splice(0, 1), a -= $e);
          for (v = 1, h = _[0]; h >= 10; h /= 10, v++);
          v < $e && (a -= $e - v);
        }
        return (E.e = a), (E.c = _), E;
      };
    })()),
    (N.sum = function () {
      for (var y = 1, I = arguments, C = new N(I[0]); y < I.length; )
        C = C.plus(I[y++]);
      return C;
    }),
    (r = (function () {
      var y = "0123456789";
      function I(C, B, U, a) {
        for (var u, h = [0], v, _ = 0, E = C.length; _ < E; ) {
          for (v = h.length; v--; h[v] *= B);
          for (h[0] += a.indexOf(C.charAt(_++)), u = 0; u < h.length; u++)
            h[u] > U - 1 &&
              (h[u + 1] == null && (h[u + 1] = 0),
              (h[u + 1] += (h[u] / U) | 0),
              (h[u] %= U));
        }
        return h.reverse();
      }
      return function (C, B, U, a, u) {
        var h,
          v,
          _,
          E,
          x,
          S,
          d,
          T,
          Y = C.indexOf("."),
          X = o,
          b = c;
        for (
          Y >= 0 &&
            ((E = M),
            (M = 0),
            (C = C.replace(".", "")),
            (T = new N(B)),
            (S = T.pow(C.length - Y)),
            (M = E),
            (T.c = I(vi(Ar(S.c), S.e, "0"), 10, U, y)),
            (T.e = T.c.length)),
            d = I(C, B, U, u ? ((h = q), y) : ((h = y), q)),
            _ = E = d.length;
          d[--E] == 0;
          d.pop()
        );
        if (!d[0]) return h.charAt(0);
        if (
          (Y < 0
            ? --_
            : ((S.c = d),
              (S.e = _),
              (S.s = a),
              (S = t(S, T, X, b, U)),
              (d = S.c),
              (x = S.r),
              (_ = S.e)),
          (v = _ + X + 1),
          (Y = d[v]),
          (E = U / 2),
          (x = x || v < 0 || d[v + 1] != null),
          (x =
            b < 4
              ? (Y != null || x) && (b == 0 || b == (S.s < 0 ? 3 : 2))
              : Y > E ||
                (Y == E &&
                  (b == 4 ||
                    x ||
                    (b == 6 && d[v - 1] & 1) ||
                    b == (S.s < 0 ? 8 : 7)))),
          v < 1 || !d[0])
        )
          C = x ? vi(h.charAt(1), -X, h.charAt(0)) : h.charAt(0);
        else {
          if (((d.length = v), x))
            for (--U; ++d[--v] > U; )
              (d[v] = 0), v || (++_, (d = [1].concat(d)));
          for (E = d.length; !d[--E]; );
          for (Y = 0, C = ""; Y <= E; C += h.charAt(d[Y++]));
          C = vi(C, _, h.charAt(0));
        }
        return C;
      };
    })()),
    (t = (function () {
      function y(B, U, a) {
        var u,
          h,
          v,
          _,
          E = 0,
          x = B.length,
          S = U % Mi,
          d = (U / Mi) | 0;
        for (B = B.slice(); x--; )
          (v = B[x] % Mi),
            (_ = (B[x] / Mi) | 0),
            (u = d * v + _ * S),
            (h = S * v + (u % Mi) * Mi + E),
            (E = ((h / a) | 0) + ((u / Mi) | 0) + d * _),
            (B[x] = h % a);
        return E && (B = [E].concat(B)), B;
      }
      function I(B, U, a, u) {
        var h, v;
        if (a != u) v = a > u ? 1 : -1;
        else
          for (h = v = 0; h < a; h++)
            if (B[h] != U[h]) {
              v = B[h] > U[h] ? 1 : -1;
              break;
            }
        return v;
      }
      function C(B, U, a, u) {
        for (var h = 0; a--; )
          (B[a] -= h), (h = B[a] < U[a] ? 1 : 0), (B[a] = h * u + B[a] - U[a]);
        for (; !B[0] && B.length > 1; B.splice(0, 1));
      }
      return function (B, U, a, u, h) {
        var v,
          _,
          E,
          x,
          S,
          d,
          T,
          Y,
          X,
          b,
          G,
          O,
          F,
          z,
          p,
          R,
          J,
          Z = B.s == U.s ? 1 : -1,
          ee = B.c,
          ne = U.c;
        if (!ee || !ee[0] || !ne || !ne[0])
          return new N(
            !B.s || !U.s || (ee ? ne && ee[0] == ne[0] : !ne)
              ? NaN
              : (ee && ee[0] == 0) || !ne
              ? Z * 0
              : Z / 0
          );
        for (
          Y = new N(Z),
            X = Y.c = [],
            _ = B.e - U.e,
            Z = a + _ + 1,
            h ||
              ((h = Br), (_ = Ir(B.e / $e) - Ir(U.e / $e)), (Z = (Z / $e) | 0)),
            E = 0;
          ne[E] == (ee[E] || 0);
          E++
        );
        if ((ne[E] > (ee[E] || 0) && _--, Z < 0)) X.push(1), (x = !0);
        else {
          for (
            z = ee.length,
              R = ne.length,
              E = 0,
              Z += 2,
              S = Sr(h / (ne[0] + 1)),
              S > 1 &&
                ((ne = y(ne, S, h)),
                (ee = y(ee, S, h)),
                (R = ne.length),
                (z = ee.length)),
              F = R,
              b = ee.slice(0, R),
              G = b.length;
            G < R;
            b[G++] = 0
          );
          (J = ne.slice()),
            (J = [0].concat(J)),
            (p = ne[0]),
            ne[1] >= h / 2 && p++;
          do {
            if (((S = 0), (v = I(ne, b, R, G)), v < 0)) {
              if (
                ((O = b[0]),
                R != G && (O = O * h + (b[1] || 0)),
                (S = Sr(O / p)),
                S > 1)
              )
                for (
                  S >= h && (S = h - 1),
                    d = y(ne, S, h),
                    T = d.length,
                    G = b.length;
                  I(d, b, T, G) == 1;

                )
                  S--, C(d, R < T ? J : ne, T, h), (T = d.length), (v = 1);
              else S == 0 && (v = S = 1), (d = ne.slice()), (T = d.length);
              if (
                (T < G && (d = [0].concat(d)),
                C(b, d, G, h),
                (G = b.length),
                v == -1)
              )
                for (; I(ne, b, R, G) < 1; )
                  S++, C(b, R < G ? J : ne, G, h), (G = b.length);
            } else v === 0 && (S++, (b = [0]));
            (X[E++] = S),
              b[0] ? (b[G++] = ee[F] || 0) : ((b = [ee[F]]), (G = 1));
          } while ((F++ < z || b[0] != null) && Z--);
          (x = b[0] != null), X[0] || X.splice(0, 1);
        }
        if (h == Br) {
          for (E = 1, Z = X[0]; Z >= 10; Z /= 10, E++);
          k(Y, a + (Y.e = E + _ * $e - 1) + 1, u, x);
        } else (Y.e = _), (Y.r = +x);
        return Y;
      };
    })());
  function H(y, I, C, B) {
    var U, a, u, h, v;
    if ((C == null ? (C = c) : pt(C, 0, 8), !y.c)) return y.toString();
    if (((U = y.c[0]), (u = y.e), I == null))
      (v = Ar(y.c)),
        (v =
          B == 1 || (B == 2 && (u <= l || u >= f)) ? Zs(v, u) : vi(v, u, "0"));
    else if (
      ((y = k(new N(y), I, C)),
      (a = y.e),
      (v = Ar(y.c)),
      (h = v.length),
      B == 1 || (B == 2 && (I <= a || a <= l)))
    ) {
      for (; h < I; v += "0", h++);
      v = Zs(v, a);
    } else if (((I -= u), (v = vi(v, a, "0")), a + 1 > h)) {
      if (--I > 0) for (v += "."; I--; v += "0");
    } else if (((I += a - h), I > 0))
      for (a + 1 == h && (v += "."); I--; v += "0");
    return y.s < 0 && U ? "-" + v : v;
  }
  function L(y, I) {
    for (var C, B, U = 1, a = new N(y[0]); U < y.length; U++)
      (B = new N(y[U])),
        (!B.s || (C = Wi(a, B)) === I || (C === 0 && a.s === I)) && (a = B);
    return a;
  }
  function j(y, I, C) {
    for (var B = 1, U = I.length; !I[--U]; I.pop());
    for (U = I[0]; U >= 10; U /= 10, B++);
    return (
      (C = B + C * $e - 1) > w
        ? (y.c = y.e = null)
        : C < g
        ? (y.c = [(y.e = 0)])
        : ((y.e = C), (y.c = I)),
      y
    );
  }
  i = (function () {
    var y = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      I = /^([^.]+)\.$/,
      C = /^\.([^.]+)$/,
      B = /^-?(Infinity|NaN)$/,
      U = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (a, u, h, v) {
      var _,
        E = h ? u : u.replace(U, "");
      if (B.test(E)) a.s = isNaN(E) ? null : E < 0 ? -1 : 1;
      else {
        if (
          !h &&
          ((E = E.replace(y, function (x, S, d) {
            return (
              (_ = (d = d.toLowerCase()) == "x" ? 16 : d == "b" ? 2 : 8),
              !v || v == _ ? S : x
            );
          })),
          v && ((_ = v), (E = E.replace(I, "$1").replace(C, "0.$1"))),
          u != E)
        )
          return new N(E, _);
        if (N.DEBUG)
          throw Error(rr + "Not a" + (v ? " base " + v : "") + " number: " + u);
        a.s = null;
      }
      a.c = a.e = null;
    };
  })();
  function k(y, I, C, B) {
    var U,
      a,
      u,
      h,
      v,
      _,
      E,
      x = y.c,
      S = Pa;
    if (x) {
      e: {
        for (U = 1, h = x[0]; h >= 10; h /= 10, U++);
        if (((a = I - U), a < 0))
          (a += $e),
            (u = I),
            (v = x[(_ = 0)]),
            (E = Sr((v / S[U - u - 1]) % 10));
        else if (((_ = Oa((a + 1) / $e)), _ >= x.length))
          if (B) {
            for (; x.length <= _; x.push(0));
            (v = E = 0), (U = 1), (a %= $e), (u = a - $e + 1);
          } else break e;
        else {
          for (v = h = x[_], U = 1; h >= 10; h /= 10, U++);
          (a %= $e),
            (u = a - $e + U),
            (E = u < 0 ? 0 : Sr((v / S[U - u - 1]) % 10));
        }
        if (
          ((B =
            B || I < 0 || x[_ + 1] != null || (u < 0 ? v : v % S[U - u - 1])),
          (B =
            C < 4
              ? (E || B) && (C == 0 || C == (y.s < 0 ? 3 : 2))
              : E > 5 ||
                (E == 5 &&
                  (C == 4 ||
                    B ||
                    (C == 6 &&
                      (a > 0 ? (u > 0 ? v / S[U - u] : 0) : x[_ - 1]) % 10 &
                        1) ||
                    C == (y.s < 0 ? 8 : 7)))),
          I < 1 || !x[0])
        )
          return (
            (x.length = 0),
            B
              ? ((I -= y.e + 1),
                (x[0] = S[($e - (I % $e)) % $e]),
                (y.e = -I || 0))
              : (x[0] = y.e = 0),
            y
          );
        if (
          (a == 0
            ? ((x.length = _), (h = 1), _--)
            : ((x.length = _ + 1),
              (h = S[$e - a]),
              (x[_] = u > 0 ? Sr((v / S[U - u]) % S[u]) * h : 0)),
          B)
        )
          for (;;)
            if (_ == 0) {
              for (a = 1, u = x[0]; u >= 10; u /= 10, a++);
              for (u = x[0] += h, h = 1; u >= 10; u /= 10, h++);
              a != h && (y.e++, x[0] == Br && (x[0] = 1));
              break;
            } else {
              if (((x[_] += h), x[_] != Br)) break;
              (x[_--] = 0), (h = 1);
            }
        for (a = x.length; x[--a] === 0; x.pop());
      }
      y.e > w ? (y.c = y.e = null) : y.e < g && (y.c = [(y.e = 0)]);
    }
    return y;
  }
  function m(y) {
    var I,
      C = y.e;
    return C === null
      ? y.toString()
      : ((I = Ar(y.c)),
        (I = C <= l || C >= f ? Zs(I, C) : vi(I, C, "0")),
        y.s < 0 ? "-" + I : I);
  }
  return (
    (n.absoluteValue = n.abs =
      function () {
        var y = new N(this);
        return y.s < 0 && (y.s = 1), y;
      }),
    (n.comparedTo = function (y, I) {
      return Wi(this, new N(y, I));
    }),
    (n.decimalPlaces = n.dp =
      function (y, I) {
        var C,
          B,
          U,
          a = this;
        if (y != null)
          return (
            pt(y, 0, Tt),
            I == null ? (I = c) : pt(I, 0, 8),
            k(new N(a), y + a.e + 1, I)
          );
        if (!(C = a.c)) return null;
        if (((B = ((U = C.length - 1) - Ir(this.e / $e)) * $e), (U = C[U])))
          for (; U % 10 == 0; U /= 10, B--);
        return B < 0 && (B = 0), B;
      }),
    (n.dividedBy = n.div =
      function (y, I) {
        return t(this, new N(y, I), o, c);
      }),
    (n.dividedToIntegerBy = n.idiv =
      function (y, I) {
        return t(this, new N(y, I), 0, 1);
      }),
    (n.exponentiatedBy = n.pow =
      function (y, I) {
        var C,
          B,
          U,
          a,
          u,
          h,
          v,
          _,
          E,
          x = this;
        if (((y = new N(y)), y.c && !y.isInteger()))
          throw Error(rr + "Exponent not an integer: " + m(y));
        if (
          (I != null && (I = new N(I)),
          (h = y.e > 14),
          !x.c ||
            !x.c[0] ||
            (x.c[0] == 1 && !x.e && x.c.length == 1) ||
            !y.c ||
            !y.c[0])
        )
          return (
            (E = new N(Math.pow(+m(x), h ? y.s * (2 - Xs(y)) : +m(y)))),
            I ? E.mod(I) : E
          );
        if (((v = y.s < 0), I)) {
          if (I.c ? !I.c[0] : !I.s) return new N(NaN);
          (B = !v && x.isInteger() && I.isInteger()), B && (x = x.mod(I));
        } else {
          if (
            y.e > 9 &&
            (x.e > 0 ||
              x.e < -1 ||
              (x.e == 0
                ? x.c[0] > 1 || (h && x.c[1] >= 24e7)
                : x.c[0] < 8e13 || (h && x.c[0] <= 9999975e7)))
          )
            return (
              (a = x.s < 0 && Xs(y) ? -0 : 0),
              x.e > -1 && (a = 1 / a),
              new N(v ? 1 / a : a)
            );
          M && (a = Oa(M / $e + 2));
        }
        for (
          h
            ? ((C = new N(0.5)), v && (y.s = 1), (_ = Xs(y)))
            : ((U = Math.abs(+m(y))), (_ = U % 2)),
            E = new N(s);
          ;

        ) {
          if (_) {
            if (((E = E.times(x)), !E.c)) break;
            a ? E.c.length > a && (E.c.length = a) : B && (E = E.mod(I));
          }
          if (U) {
            if (((U = Sr(U / 2)), U === 0)) break;
            _ = U % 2;
          } else if (((y = y.times(C)), k(y, y.e + 1, 1), y.e > 14)) _ = Xs(y);
          else {
            if (((U = +m(y)), U === 0)) break;
            _ = U % 2;
          }
          (x = x.times(x)),
            a ? x.c && x.c.length > a && (x.c.length = a) : B && (x = x.mod(I));
        }
        return B
          ? E
          : (v && (E = s.div(E)), I ? E.mod(I) : a ? k(E, M, c, u) : E);
      }),
    (n.integerValue = function (y) {
      var I = new N(this);
      return y == null ? (y = c) : pt(y, 0, 8), k(I, I.e + 1, y);
    }),
    (n.isEqualTo = n.eq =
      function (y, I) {
        return Wi(this, new N(y, I)) === 0;
      }),
    (n.isFinite = function () {
      return !!this.c;
    }),
    (n.isGreaterThan = n.gt =
      function (y, I) {
        return Wi(this, new N(y, I)) > 0;
      }),
    (n.isGreaterThanOrEqualTo = n.gte =
      function (y, I) {
        return (I = Wi(this, new N(y, I))) === 1 || I === 0;
      }),
    (n.isInteger = function () {
      return !!this.c && Ir(this.e / $e) > this.c.length - 2;
    }),
    (n.isLessThan = n.lt =
      function (y, I) {
        return Wi(this, new N(y, I)) < 0;
      }),
    (n.isLessThanOrEqualTo = n.lte =
      function (y, I) {
        return (I = Wi(this, new N(y, I))) === -1 || I === 0;
      }),
    (n.isNaN = function () {
      return !this.s;
    }),
    (n.isNegative = function () {
      return this.s < 0;
    }),
    (n.isPositive = function () {
      return this.s > 0;
    }),
    (n.isZero = function () {
      return !!this.c && this.c[0] == 0;
    }),
    (n.minus = function (y, I) {
      var C,
        B,
        U,
        a,
        u = this,
        h = u.s;
      if (((y = new N(y, I)), (I = y.s), !h || !I)) return new N(NaN);
      if (h != I) return (y.s = -I), u.plus(y);
      var v = u.e / $e,
        _ = y.e / $e,
        E = u.c,
        x = y.c;
      if (!v || !_) {
        if (!E || !x) return E ? ((y.s = -I), y) : new N(x ? u : NaN);
        if (!E[0] || !x[0])
          return x[0] ? ((y.s = -I), y) : new N(E[0] ? u : c == 3 ? -0 : 0);
      }
      if (((v = Ir(v)), (_ = Ir(_)), (E = E.slice()), (h = v - _))) {
        for (
          (a = h < 0) ? ((h = -h), (U = E)) : ((_ = v), (U = x)),
            U.reverse(),
            I = h;
          I--;
          U.push(0)
        );
        U.reverse();
      } else
        for (
          B = (a = (h = E.length) < (I = x.length)) ? h : I, h = I = 0;
          I < B;
          I++
        )
          if (E[I] != x[I]) {
            a = E[I] < x[I];
            break;
          }
      if (
        (a && ((U = E), (E = x), (x = U), (y.s = -y.s)),
        (I = (B = x.length) - (C = E.length)),
        I > 0)
      )
        for (; I--; E[C++] = 0);
      for (I = Br - 1; B > h; ) {
        if (E[--B] < x[B]) {
          for (C = B; C && !E[--C]; E[C] = I);
          --E[C], (E[B] += Br);
        }
        E[B] -= x[B];
      }
      for (; E[0] == 0; E.splice(0, 1), --_);
      return E[0]
        ? j(y, E, _)
        : ((y.s = c == 3 ? -1 : 1), (y.c = [(y.e = 0)]), y);
    }),
    (n.modulo = n.mod =
      function (y, I) {
        var C,
          B,
          U = this;
        return (
          (y = new N(y, I)),
          !U.c || !y.s || (y.c && !y.c[0])
            ? new N(NaN)
            : !y.c || (U.c && !U.c[0])
            ? new N(U)
            : (A == 9
                ? ((B = y.s),
                  (y.s = 1),
                  (C = t(U, y, 0, 3)),
                  (y.s = B),
                  (C.s *= B))
                : (C = t(U, y, 0, A)),
              (y = U.minus(C.times(y))),
              !y.c[0] && A == 1 && (y.s = U.s),
              y)
        );
      }),
    (n.multipliedBy = n.times =
      function (y, I) {
        var C,
          B,
          U,
          a,
          u,
          h,
          v,
          _,
          E,
          x,
          S,
          d,
          T,
          Y,
          X,
          b = this,
          G = b.c,
          O = (y = new N(y, I)).c;
        if (!G || !O || !G[0] || !O[0])
          return (
            !b.s || !y.s || (G && !G[0] && !O) || (O && !O[0] && !G)
              ? (y.c = y.e = y.s = null)
              : ((y.s *= b.s),
                !G || !O ? (y.c = y.e = null) : ((y.c = [0]), (y.e = 0))),
            y
          );
        for (
          B = Ir(b.e / $e) + Ir(y.e / $e),
            y.s *= b.s,
            v = G.length,
            x = O.length,
            v < x && ((T = G), (G = O), (O = T), (U = v), (v = x), (x = U)),
            U = v + x,
            T = [];
          U--;
          T.push(0)
        );
        for (Y = Br, X = Mi, U = x; --U >= 0; ) {
          for (
            C = 0, S = O[U] % X, d = (O[U] / X) | 0, u = v, a = U + u;
            a > U;

          )
            (_ = G[--u] % X),
              (E = (G[u] / X) | 0),
              (h = d * _ + E * S),
              (_ = S * _ + (h % X) * X + T[a] + C),
              (C = ((_ / Y) | 0) + ((h / X) | 0) + d * E),
              (T[a--] = _ % Y);
          T[a] = C;
        }
        return C ? ++B : T.splice(0, 1), j(y, T, B);
      }),
    (n.negated = function () {
      var y = new N(this);
      return (y.s = -y.s || null), y;
    }),
    (n.plus = function (y, I) {
      var C,
        B = this,
        U = B.s;
      if (((y = new N(y, I)), (I = y.s), !U || !I)) return new N(NaN);
      if (U != I) return (y.s = -I), B.minus(y);
      var a = B.e / $e,
        u = y.e / $e,
        h = B.c,
        v = y.c;
      if (!a || !u) {
        if (!h || !v) return new N(U / 0);
        if (!h[0] || !v[0]) return v[0] ? y : new N(h[0] ? B : U * 0);
      }
      if (((a = Ir(a)), (u = Ir(u)), (h = h.slice()), (U = a - u))) {
        for (
          U > 0 ? ((u = a), (C = v)) : ((U = -U), (C = h)), C.reverse();
          U--;
          C.push(0)
        );
        C.reverse();
      }
      for (
        U = h.length,
          I = v.length,
          U - I < 0 && ((C = v), (v = h), (h = C), (I = U)),
          U = 0;
        I;

      )
        (U = ((h[--I] = h[I] + v[I] + U) / Br) | 0),
          (h[I] = Br === h[I] ? 0 : h[I] % Br);
      return U && ((h = [U].concat(h)), ++u), j(y, h, u);
    }),
    (n.precision = n.sd =
      function (y, I) {
        var C,
          B,
          U,
          a = this;
        if (y != null && y !== !!y)
          return (
            pt(y, 1, Tt), I == null ? (I = c) : pt(I, 0, 8), k(new N(a), y, I)
          );
        if (!(C = a.c)) return null;
        if (((U = C.length - 1), (B = U * $e + 1), (U = C[U]))) {
          for (; U % 10 == 0; U /= 10, B--);
          for (U = C[0]; U >= 10; U /= 10, B++);
        }
        return y && a.e + 1 > B && (B = a.e + 1), B;
      }),
    (n.shiftedBy = function (y) {
      return pt(y, -Ra, Ra), this.times("1e" + y);
    }),
    (n.squareRoot = n.sqrt =
      function () {
        var y,
          I,
          C,
          B,
          U,
          a = this,
          u = a.c,
          h = a.s,
          v = a.e,
          _ = o + 4,
          E = new N("0.5");
        if (h !== 1 || !u || !u[0])
          return new N(!h || (h < 0 && (!u || u[0])) ? NaN : u ? a : 1 / 0);
        if (
          ((h = Math.sqrt(+m(a))),
          h == 0 || h == 1 / 0
            ? ((I = Ar(u)),
              (I.length + v) % 2 == 0 && (I += "0"),
              (h = Math.sqrt(+I)),
              (v = Ir((v + 1) / 2) - (v < 0 || v % 2)),
              h == 1 / 0
                ? (I = "5e" + v)
                : ((I = h.toExponential()),
                  (I = I.slice(0, I.indexOf("e") + 1) + v)),
              (C = new N(I)))
            : (C = new N(h + "")),
          C.c[0])
        ) {
          for (v = C.e, h = v + _, h < 3 && (h = 0); ; )
            if (
              ((U = C),
              (C = E.times(U.plus(t(a, U, _, 1)))),
              Ar(U.c).slice(0, h) === (I = Ar(C.c)).slice(0, h))
            )
              if (
                (C.e < v && --h,
                (I = I.slice(h - 3, h + 1)),
                I == "9999" || (!B && I == "4999"))
              ) {
                if (!B && (k(U, U.e + o + 2, 0), U.times(U).eq(a))) {
                  C = U;
                  break;
                }
                (_ += 4), (h += 4), (B = 1);
              } else {
                (!+I || (!+I.slice(1) && I.charAt(0) == "5")) &&
                  (k(C, C.e + o + 2, 1), (y = !C.times(C).eq(a)));
                break;
              }
        }
        return k(C, C.e + o + 1, c, y);
      }),
    (n.toExponential = function (y, I) {
      return y != null && (pt(y, 0, Tt), y++), H(this, y, I, 1);
    }),
    (n.toFixed = function (y, I) {
      return y != null && (pt(y, 0, Tt), (y = y + this.e + 1)), H(this, y, I);
    }),
    (n.toFormat = function (y, I, C) {
      var B,
        U = this;
      if (C == null)
        y != null && I && typeof I == "object"
          ? ((C = I), (I = null))
          : y && typeof y == "object"
          ? ((C = y), (y = I = null))
          : (C = K);
      else if (typeof C != "object")
        throw Error(rr + "Argument not an object: " + C);
      if (((B = U.toFixed(y, I)), U.c)) {
        var a,
          u = B.split("."),
          h = +C.groupSize,
          v = +C.secondaryGroupSize,
          _ = C.groupSeparator || "",
          E = u[0],
          x = u[1],
          S = U.s < 0,
          d = S ? E.slice(1) : E,
          T = d.length;
        if ((v && ((a = h), (h = v), (v = a), (T -= a)), h > 0 && T > 0)) {
          for (a = T % h || h, E = d.substr(0, a); a < T; a += h)
            E += _ + d.substr(a, h);
          v > 0 && (E += _ + d.slice(a)), S && (E = "-" + E);
        }
        B = x
          ? E +
            (C.decimalSeparator || "") +
            ((v = +C.fractionGroupSize)
              ? x.replace(
                  new RegExp("\\d{" + v + "}\\B", "g"),
                  "$&" + (C.fractionGroupSeparator || "")
                )
              : x)
          : E;
      }
      return (C.prefix || "") + B + (C.suffix || "");
    }),
    (n.toFraction = function (y) {
      var I,
        C,
        B,
        U,
        a,
        u,
        h,
        v,
        _,
        E,
        x,
        S,
        d = this,
        T = d.c;
      if (
        y != null &&
        ((h = new N(y)), (!h.isInteger() && (h.c || h.s !== 1)) || h.lt(s))
      )
        throw Error(
          rr +
            "Argument " +
            (h.isInteger() ? "out of range: " : "not an integer: ") +
            m(h)
        );
      if (!T) return new N(d);
      for (
        I = new N(s),
          _ = C = new N(s),
          B = v = new N(s),
          S = Ar(T),
          a = I.e = S.length - d.e - 1,
          I.c[0] = Pa[(u = a % $e) < 0 ? $e + u : u],
          y = !y || h.comparedTo(I) > 0 ? (a > 0 ? I : _) : h,
          u = w,
          w = 1 / 0,
          h = new N(S),
          v.c[0] = 0;
        (E = t(h, I, 0, 1)), (U = C.plus(E.times(B))), U.comparedTo(y) != 1;

      )
        (C = B),
          (B = U),
          (_ = v.plus(E.times((U = _)))),
          (v = U),
          (I = h.minus(E.times((U = I)))),
          (h = U);
      return (
        (U = t(y.minus(C), B, 0, 1)),
        (v = v.plus(U.times(_))),
        (C = C.plus(U.times(B))),
        (v.s = _.s = d.s),
        (a = a * 2),
        (x =
          t(_, B, a, c)
            .minus(d)
            .abs()
            .comparedTo(t(v, C, a, c).minus(d).abs()) < 1
            ? [_, B]
            : [v, C]),
        (w = u),
        x
      );
    }),
    (n.toNumber = function () {
      return +m(this);
    }),
    (n.toPrecision = function (y, I) {
      return y != null && pt(y, 1, Tt), H(this, y, I, 2);
    }),
    (n.toString = function (y) {
      var I,
        C = this,
        B = C.s,
        U = C.e;
      return (
        U === null
          ? B
            ? ((I = "Infinity"), B < 0 && (I = "-" + I))
            : (I = "NaN")
          : (y == null
              ? (I = U <= l || U >= f ? Zs(Ar(C.c), U) : vi(Ar(C.c), U, "0"))
              : y === 10 && Q
              ? ((C = k(new N(C), o + U + 1, c)), (I = vi(Ar(C.c), C.e, "0")))
              : (pt(y, 2, q.length, "Base"),
                (I = r(vi(Ar(C.c), U, "0"), 10, y, B, !0))),
            B < 0 && C.c[0] && (I = "-" + I)),
        I
      );
    }),
    (n.valueOf = n.toJSON =
      function () {
        return m(this);
      }),
    (n._isBigNumber = !0),
    (n[Symbol.toStringTag] = "BigNumber"),
    (n[Symbol.for("nodejs.util.inspect.custom")] = n.valueOf),
    e != null && N.set(e),
    N
  );
}
function Ir(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function Ar(e) {
  for (var t, r, i = 1, n = e.length, s = e[0] + ""; i < n; ) {
    for (t = e[i++] + "", r = $e - t.length; r--; t = "0" + t);
    s += t;
  }
  for (n = s.length; s.charCodeAt(--n) === 48; );
  return s.slice(0, n + 1 || 1);
}
function Wi(e, t) {
  var r,
    i,
    n = e.c,
    s = t.c,
    o = e.s,
    c = t.s,
    l = e.e,
    f = t.e;
  if (!o || !c) return null;
  if (((r = n && !n[0]), (i = s && !s[0]), r || i)) return r ? (i ? 0 : -c) : o;
  if (o != c) return o;
  if (((r = o < 0), (i = l == f), !n || !s)) return i ? 0 : !n ^ r ? 1 : -1;
  if (!i) return (l > f) ^ r ? 1 : -1;
  for (c = (l = n.length) < (f = s.length) ? l : f, o = 0; o < c; o++)
    if (n[o] != s[o]) return (n[o] > s[o]) ^ r ? 1 : -1;
  return l == f ? 0 : (l > f) ^ r ? 1 : -1;
}
function pt(e, t, r, i) {
  if (e < t || e > r || e !== Sr(e))
    throw Error(
      rr +
        (i || "Argument") +
        (typeof e == "number"
          ? e < t || e > r
            ? " out of range: "
            : " not an integer: "
          : " not a primitive number: ") +
        String(e)
    );
}
function Xs(e) {
  var t = e.c.length - 1;
  return Ir(e.e / $e) == t && e.c[t] % 2 != 0;
}
function Zs(e, t) {
  return (
    (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
    (t < 0 ? "e" : "e+") +
    t
  );
}
function vi(e, t, r) {
  var i, n;
  if (t < 0) {
    for (n = r + "."; ++t; n += r);
    e = n + e;
  } else if (((i = e.length), ++t > i)) {
    for (n = r, t -= i; --t; n += r);
    e += n;
  } else t < i && (e = e.slice(0, t) + "." + e.slice(t));
  return e;
}
var qA = Xd();
const jA = og(function () {
    const e = location.hostname.includes("dev")
      ? location.hostname.split("dev.")[1]
      : location.hostname;
    return wc.loadScript(`//${e}/metamask-sdk.js`);
  }),
  zA = {
    ETH: {
      chainId: "0x1",
      rpcUrls: ["https://mainnet.infura.io/v3/"],
      chainName: "Ethereum Mainnet",
      nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
      blockExplorerUrls: ["https://etherscan.io"],
    },
    BNB: {
      chainId: "0x38",
      rpcUrls: ["https://bsc-dataseed1.binance.org"],
      chainName: "Smart Chain",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18,
      },
      blockExplorerUrls: ["https://bscscan.com"],
    },
    MATIC: {
      chainId: "0x89",
      rpcUrls: [
        "https://polygon-rpc.com/",
        "https://rpc-mainnet.matic.network",
      ],
      chainName: "Polygon Mainnet",
      nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
  };
function Zd(e, t = "ETH") {
  return P(this, null, function* () {
    const r = zA[t];
    if (r.chainId !== e.chainId)
      try {
        yield e.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: r.chainId }],
        });
      } catch (i) {
        if (i.code === 4902)
          try {
            return (
              yield e.request({
                method: "wallet_addEthereumChain",
                params: [r],
              }),
              Zd(t)
            );
          } catch (n) {
            throw new Error(n.message);
          }
        else throw new Error(i.message);
      }
    return r;
  });
}
function KA(e) {
  return P(this, null, function* () {
    yield jA();
    const r = new MetaMaskSDK.default().getProvider();
    return (
      e && e(),
      yield r.request({ method: "eth_requestAccounts", params: [] }),
      r
    );
  });
}
function VA(e, t, r = "ETH") {
  return P(this, null, function* () {
    const i = yield KA(),
      n = yield i.request({ method: "eth_accounts" }),
      s = yield Zd(i, r);
    try {
      return yield i.request({
        method: "eth_sendTransaction",
        params: [
          {
            to: e,
            value: new qA(t).multipliedBy("1000000000000000000").toString(16),
            from: n[0],
            chainId: s.chainId,
          },
        ],
      });
    } catch (o) {
      throw new Error(o.message);
    }
  });
}
var HA = ie(
    '<div class="flex items-center"><div class="rounded p-2 bg-layer1"><img class="h-10 w-10"alt=""></div><div class=ml-2><div class=text-second></div><div class=font-extrabold>MetaMask'
  ),
  GA = ie(
    '<div class=mt-5><div class="mb-1 flex items-center"><img class="mr-1 h-4 w-4"><div class="font-semibold text-secondary"> '
  ),
  WA = ie('<img class="mr-1 h-5 w-5"alt="">'),
  QA = ie('<div class="font-semibold text-secondary">MetaMask');
function YA(e) {
  var s;
  const t = (s = e.chain) != null ? s : "ETH",
    [r, i] = dr(0),
    n = () =>
      P(this, null, function* () {
        try {
          let o = le("Recharge successful! Awaiting network confirmation.");
          yield VA(e.address, r(), t),
            Do.emit("sensorsTrack", {
              event: "metamask_recharge",
              coin_type: t,
            }),
            Yt(() => o);
        } catch (o) {
          Yt(() => sr(() => o.message));
        }
      });
  return V(nn, {
    id: "metamask",
    get children() {
      return V(N0, {
        get children() {
          return [
            (() => {
              var o = HA(),
                c = o.firstChild,
                l = c.firstChild,
                f = c.nextSibling,
                g = f.firstChild;
              return ft(l, "src", Jd), te(g, () => le("Deposit with")), o;
            })(),
            (() => {
              var o = GA(),
                c = o.firstChild,
                l = c.firstChild,
                f = l.nextSibling,
                g = f.firstChild;
              return (
                te(f, t, g),
                te(f, () => le("Deposit amount"), null),
                te(
                  o,
                  V(xo, {
                    get value() {
                      return r();
                    },
                    onChange: (w) => i(w),
                    type: "number",
                    class: "text-base font-semibold",
                  }),
                  null
                ),
                te(
                  o,
                  V(Xt, {
                    type: "brand",
                    class: "w-full my-4",
                    onClick: n,
                    get children() {
                      return le("Deposit");
                    },
                  }),
                  null
                ),
                _t(() => ft(l, "src", ai.coinIcon(t))),
                o
              );
            })(),
          ];
        },
      });
    },
  });
}
function Ba(e) {
  return V(Xt, {
    type: "second",
    get class() {
      return tt("flex items-center bg-layer6", e.class);
    },
    onClick: () => {
      hr.push(() => V(YA, e));
    },
    get children() {
      return [
        (() => {
          var r = WA();
          return ft(r, "src", Jd), r;
        })(),
        QA(),
      ];
    },
  });
}
const e0 = "/modules/wallet2/assets/tronlink-9ba70a0a.png";
var JA = ie(
    '<div class="flex items-center"><div class="rounded p-2 bg-layer1"><img class="h-10 w-10"alt=""></div><div class=ml-2><div class=text-second></div><div class=font-extrabold>TronLink'
  ),
  XA = ie(
    '<div class=mt-5><div class="mb-1 flex items-center"><img class="mr-1 h-4 w-4"><div class="font-semibold text-secondary">TRX '
  ),
  ZA = ie('<img class="mr-1 h-5 w-5"alt="">'),
  e8 = ie('<div class="font-semibold text-secondary">TronLink');
function t8(e) {
  const [t, r] = dr(0),
    i = () =>
      P(this, null, function* () {
        try {
          let n = window.tronWeb;
          if (!n)
            throw (
              (Yt(() => sr(() => le("Please install Wallet and try again"))),
              new Error())
            );
          let s = le("Recharge successful! Awaiting network confirmation.");
          yield n.trx.sendTransaction(e.address, n.toSun(t)), Yt(() => s);
        } catch (n) {
          Yt(() => sr(() => n.message));
        }
      });
  return V(nn, {
    id: "tronlink",
    get children() {
      return [
        (() => {
          var n = JA(),
            s = n.firstChild,
            o = s.firstChild,
            c = s.nextSibling,
            l = c.firstChild;
          return ft(o, "src", e0), te(l, () => le("Deposit with")), n;
        })(),
        (() => {
          var n = XA(),
            s = n.firstChild,
            o = s.firstChild,
            c = o.nextSibling;
          return (
            c.firstChild,
            te(c, () => le("Deposit amount"), null),
            te(
              n,
              V(xo, {
                get value() {
                  return t();
                },
                onChange: (l) => r(l),
                type: "number",
                class: "text-base font-semibold",
              }),
              null
            ),
            te(
              n,
              V(Xt, {
                type: "brand",
                class: "w-full my-4",
                onClick: i,
                get children() {
                  return le("Deposit");
                },
              }),
              null
            ),
            _t(() => ft(o, "src", ai.coinIcon("TRX"))),
            n
          );
        })(),
      ];
    },
  });
}
function r8(e) {
  return V(Xt, {
    get class() {
      return tt("flex items-center bg-layer6", e.class);
    },
    type: "second",
    onClick: () => hr.push(() => V(t8, e)),
    get children() {
      return [
        (() => {
          var t = ZA();
          return ft(t, "src", e0), t;
        })(),
        e8(),
      ];
    },
  });
}
var i8 = ie("<span class=mr-1>"),
  n8 = ie('<div class="h-40 relative">'),
  s8 = ie('<div class="text-center font-semibold text-xl">'),
  o8 = ie(
    '<div class="text-center mt-4"><div class="font-semibold text-xl"></div><div class="text-secondary my-4">'
  ),
  a8 = ie(
    '<div class=text-center><div class="font-semibold text-xl"></div><div class="text-secondary my-4">'
  );
function c8(e) {
  return V(it, {
    get when() {
      return e.token && e.txid;
    },
    fallback: null,
    children: (t) => {
      const r =
        e.token.blockExplorer + e.token.queryTxPath.replace("%s", e.txid);
      return V(ds, {
        class: "flex w-full center text-brand underline",
        href: r,
        target: "_blank",
        get children() {
          return [
            (() => {
              var i = i8();
              return te(i, () => le("View on Blockchain")), i;
            })(),
            " ",
            V(Mr, { name: "NewWindow" }),
          ];
        },
      });
    },
  });
}
function u8(e) {
  const r = Et.getCurrency(e.currencyName).currencyTokens.find(
      (n) => n.chain === e.chain
    ),
    i = () => e.status != 1;
  return V(nn, {
    title: "Deposit",
    get children() {
      return [
        (() => {
          var n = n8();
          return (
            te(
              n,
              V(Sg, {
                get complete() {
                  return i();
                },
              })
            ),
            n
          );
        })(),
        (() => {
          var n = s8();
          return (
            te(n, () => Et.printCurrency(new Yi(e.amount), e.currencyName)), n
          );
        })(),
        V(it, {
          get when() {
            return i();
          },
          get fallback() {
            return (() => {
              var n = a8(),
                s = n.firstChild,
                o = s.nextSibling;
              return (
                te(s, () => le("Deposit Detected")),
                te(o, () =>
                  le(
                    "We’ve detected your payment, waiting for the payment to be verified by the network"
                  )
                ),
                te(
                  n,
                  V(c8, {
                    token: r,
                    get txid() {
                      return e.id;
                    },
                  }),
                  null
                ),
                n
              );
            })();
          },
          get children() {
            var n = o8(),
              s = n.firstChild,
              o = s.nextSibling;
            return (
              te(s, () => le("Deposit Completed")),
              te(o, () =>
                le(
                  "Payment received, it might take a minute to be shown in your account."
                )
              ),
              te(
                n,
                V(ds, {
                  class: "text-brand underline",
                  replace: !0,
                  get href() {
                    return `/wallet/deposit-detail/?orderId=${e.id}`;
                  },
                  get children() {
                    return le("View Transaction Details");
                  },
                }),
                null
              ),
              n
            );
          },
        }),
      ];
    },
  });
}
var us = ie("<div><div></div><div>"),
  Eh = ie("<br>"),
  l8 = ie("<div class=jbStyle><div class=tit></div><div>");
function h8(e) {
  const t = () =>
    Number(e.token.depositLimitAmount) > 0
      ? `Minimum Deposit: ${e.token.depositLimitAmount} ${e.token.currencyGroupName}.`
      : "";
  return [
    V(Ii, {
      get children() {
        return [
          V(rt, {
            get when() {
              return (
                e.token.currencyGroupName === "ETH" ||
                e.token.currencyGroupName === "USDT"
              );
            },
            get children() {
              return V(Ur, {
                type: "info",
                class: "mt-4",
                get children() {
                  var r = us(),
                    i = r.firstChild,
                    n = i.nextSibling;
                  return (
                    te(i, () =>
                      le(
                        "Send only __currencyName__ to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported(Contact us).",
                        { currencyName: e.token.currencyGroupName }
                      )
                    ),
                    te(n, t),
                    r
                  );
                },
              });
            },
          }),
          V(rt, {
            get when() {
              return e.token.currencyGroupName === "BTC";
            },
            get children() {
              return V(Ur, {
                type: "info",
                class: "mt-4",
                get children() {
                  var r = us(),
                    i = r.firstChild,
                    n = i.nextSibling;
                  return (
                    te(i, () =>
                      le(
                        "Send only BTC to this address. Coins will be deposited after 2 network confirmations."
                      )
                    ),
                    te(n, t),
                    r
                  );
                },
              });
            },
          }),
          V(rt, {
            get when() {
              return e.token.currencyGroupName === "BCH";
            },
            get children() {
              return V(Ur, {
                type: "info",
                class: "mt-4",
                get children() {
                  var r = us(),
                    i = r.firstChild,
                    n = i.nextSibling;
                  return (
                    te(i, () =>
                      le(
                        "Send only BCH to this address. Coins will be deposited after 2 network confirmations."
                      )
                    ),
                    te(n, t),
                    r
                  );
                },
              });
            },
          }),
          V(rt, {
            get when() {
              return e.token.currencyGroupName === "DOGE";
            },
            get children() {
              return V(Ur, {
                type: "info",
                class: "mt-4",
                get children() {
                  var r = us(),
                    i = r.firstChild,
                    n = i.nextSibling;
                  return (
                    te(i, () =>
                      le(
                        "Send only DOGE to this address. Coins will be deposited after 2 network confirmations."
                      )
                    ),
                    te(n, t),
                    r
                  );
                },
              });
            },
          }),
          V(rt, {
            get when() {
              return (
                e.token.currencyGroupName === "EOS" ||
                e.token.currencyGroupName === "XRP"
              );
            },
            get children() {
              return V(Ur, {
                type: "info",
                class: "mt-4",
                get children() {
                  var r = us(),
                    i = r.firstChild,
                    n = i.nextSibling;
                  return (
                    te(i, () =>
                      le(
                        "Fill in the tag/memo and currency address correctly to deposit __aliasName__. Missing tag/memo will result in fund loss!",
                        { aliasName: Et.getAlias(e.token.currencyGroupName) }
                      )
                    ),
                    te(n, t),
                    r
                  );
                },
              });
            },
          }),
          V(rt, {
            get when() {
              return e.token.currencyGroupName !== "JB";
            },
            get children() {
              return V(Ur, {
                type: "info",
                class: "mt-4",
                get children() {
                  return le(
                    "Do not deposit any currency other than __aliasname__",
                    { aliasname: e.token.currencyGroupName }
                  );
                },
              });
            },
          }),
        ];
      },
    }),
    V(it, {
      get when() {
        return e.token.currencyGroupName === "JB";
      },
      get children() {
        var r = l8(),
          i = r.firstChild,
          n = i.nextSibling;
        return (
          te(i, () => le("About __ENV_JB__")),
          te(
            n,
            V(bc, {
              i18nKey: "wallet.trans.desc26",
              get children() {
                return [
                  "__ENV_BCD__ is the proprietary game currency (in-house game currency) of __ENV_HOST__ platform. It can be acquired by VIP level-up, lucky spin and other event rewards.",
                  Eh(),
                  "In addition to being used for games, __ENV_BCD__ can also be used to boost your Rakeback and deduct the Withdrawal fees.",
                  Eh(),
                  "More amazing __ENV_BCD__ functions coming soon..Stay Tuned!",
                ];
              },
            })
          ),
          r
        );
      },
    }),
  ];
}
var f8 = ie('<div class="font-semibold text-secondary mt-5">'),
  d8 = ie('<div class="flex items-center mt-1.5">'),
  g8 = ie(
    '<div class="font-semibold text-secondary mt-4 mb-1"><b class=text-brand>*'
  ),
  p8 = ie(
    '<div class=mt-4><div class="flex justify-between"><div class="ml-4 flex-auto"><div class="font-semibold text-secondary">'
  );
function ls(e) {
  return [
    (() => {
      var t = f8();
      return te(t, () => le("Or Support Deposit With")), t;
    })(),
    (() => {
      var t = d8();
      return te(t, () => e.children), t;
    })(),
  ];
}
function m8(e) {
  return V(Ii, {
    get children() {
      return [
        V(rt, {
          get when() {
            return e.currencyName === "ETH";
          },
          get children() {
            return V(ls, {
              get children() {
                return [
                  V(Ba, Gt(e, { class: "mr-1.5 flex-1" })),
                  V(UA, Gt(e, { class: "flex-1 ml-1.5" })),
                ];
              },
            });
          },
        }),
        V(rt, {
          get when() {
            return e.currencyName === "BNB";
          },
          get children() {
            return V(ls, {
              get children() {
                return V(Ba, Gt({ class: "w-1/2" }, e, { chain: "BNB" }));
              },
            });
          },
        }),
        V(rt, {
          get when() {
            return e.currencyName === "MATIC";
          },
          get children() {
            return V(ls, {
              get children() {
                return V(Ba, Gt({ class: "w-1/2" }, e, { chain: "MATIC" }));
              },
            });
          },
        }),
        V(rt, {
          get when() {
            return e.currencyName === "EOS";
          },
          get children() {
            return V(ls, {
              get children() {
                return V(p1, Gt({ class: "w-1/2" }, e));
              },
            });
          },
        }),
        V(rt, {
          get when() {
            return e.currencyName === "TRX";
          },
          get children() {
            return V(ls, {
              get children() {
                return V(r8, Gt({ class: "w-1/2" }, e));
              },
            });
          },
        }),
      ];
    },
  });
}
function y8(e) {
  var f, g;
  const t = () => Et.getCurrency(e.currencyName),
    r = W0(),
    i = (f = r[0].currency) != null ? f : "",
    n = (g = r[0].network) != null ? g : "",
    {
      token: s,
      addrType: o,
      switchNode: c,
      typeTxt: l,
    } = k0({
      currencyInfo: t,
      switchAddrType: !0,
      network: i.toLocaleUpperCase() === e.currencyName ? n : void 0,
    });
  return [
    V(C0, {
      get mount() {
        return e.chanelRef;
      },
      get children() {
        return c();
      },
    }),
    V(Ec, {
      class: "mt-4",
      get currency() {
        return e.currencyName;
      },
    }),
    V(it, {
      get when() {
        return s().canDeposit;
      },
      get fallback() {
        return V(Nn, {
          get children() {
            return le("Under Maintenance");
          },
        });
      },
      get children() {
        return V(w8, {
          get isEnable() {
            return e.isEnable;
          },
          get cur() {
            return t();
          },
          get token() {
            return s();
          },
          get addrType() {
            return o();
          },
          get typeTxt() {
            return l();
          },
        });
      },
    }),
    V(h8, {
      get token() {
        return s();
      },
    }),
  ];
}
function w8(e) {
  const [t] = Is(
      () => e.addrType + JSON.stringify(e.token),
      () =>
        Bh.getAddress(
          e.cur.currencyName,
          e.token.chain,
          e.addrType ? e.addrType.value : void 0
        )
    ),
    r = O0("recharge-success", (i) => {
      console.log(i),
        hr.pop(),
        new Date().getTime() - Number(i.sendTime) <= 6e4 &&
          hr.push(() => V(u8, i));
    });
  return (
    L0(() => {
      r(), console.log("clear");
    }),
    V(Fi, {
      get fallback() {
        return V(Oo, {});
      },
      get children() {
        return V(Ii, {
          get children() {
            return [
              V(rt, {
                get when() {
                  return t.error;
                },
                get children() {
                  return V(Nn, {
                    get children() {
                      return t.error.message;
                    },
                  });
                },
              }),
              V(rt, {
                get when() {
                  return t();
                },
                children: (i) => {
                  const n = () => {
                    wc.copyToClipboard(i().addr), Yt.success(le("Copied"));
                  };
                  return (() => {
                    var s = p8(),
                      o = s.firstChild,
                      c = o.firstChild,
                      l = c.firstChild;
                    return (
                      te(
                        o,
                        V(Y0, {
                          get url() {
                            return i().addr;
                          },
                          clsas: "flex-none",
                          options: { margin: 1, width: 138 },
                        }),
                        c
                      ),
                      te(l, () => le("Deposit address")),
                      te(
                        c,
                        V(Ph, {
                          get address() {
                            return i().addr;
                          },
                          class:
                            "rounded-lg p-2 border-input mt-1 break-all bg-input_bright",
                        }),
                        null
                      ),
                      te(
                        c,
                        V(Xt, {
                          onClick: n,
                          type: "second",
                          class: "h-10 w-full bg-layer6 rounded-lg mt-5",
                          get children() {
                            return [
                              V(Mr, { name: "Copy", class: "mr-1" }),
                              sr(() => le("Copy Address")),
                            ];
                          },
                        }),
                        null
                      ),
                      te(
                        c,
                        V(it, {
                          get when() {
                            return i().memo;
                          },
                          get children() {
                            return [
                              (() => {
                                var f = g8(),
                                  g = f.firstChild;
                                return (
                                  te(
                                    f,
                                    () => le("Tag (Require for deposit)"),
                                    g
                                  ),
                                  f
                                );
                              })(),
                              V(J0, {
                                class: "mt-1",
                                get value() {
                                  return i().memo;
                                },
                              }),
                            ];
                          },
                        }),
                        null
                      ),
                      te(
                        s,
                        V(it, {
                          get when() {
                            return e.token.tokenType === "NATIVE";
                          },
                          get children() {
                            return V(m8, {
                              get currencyName() {
                                return e.cur.currencyName;
                              },
                              get address() {
                                return i().addr;
                              },
                              get memo() {
                                return i().memo;
                              },
                            });
                          },
                        }),
                        null
                      ),
                      s
                    );
                  })();
                },
              }),
            ];
          },
        });
      },
    })
  );
}
var v8 = ie('<div class="flex flex-col center my-4">'),
  b8 = ie(
    '<div class="p-2 rounded-xl w-auto bg-input_bright"><img class="w-60 h-60"alt=qr.png>'
  ),
  _8 = ie(
    '<div class="flex cursor-pointer items-center mt-4 justify-between rounded-xl border p-3 border-third bg-input_bright">'
  );
function E8(e) {
  const t = () => {
    wc.copyToClipboard(e.addr()), Yt.success(le("Copied"));
  };
  return (() => {
    var r = v8();
    return (
      te(
        r,
        V(it, {
          get when() {
            return e.addr();
          },
          get fallback() {
            return V(Th, { class: "h-60" });
          },
          children: (i) => [
            (() => {
              var n = b8(),
                s = n.firstChild;
              return _t(() => ft(s, "src", G0.getQrcode("2400", i()))), n;
            })(),
            (() => {
              var n = _8();
              return (
                (n.$$click = t),
                te(
                  n,
                  V(Ph, {
                    get address() {
                      return e.addr();
                    },
                  }),
                  null
                ),
                te(n, V(Mr, { class: "flex-none ml-2", name: "Copy" }), null),
                n
              );
            })(),
          ],
        })
      ),
      r
    );
  })();
}
function A8() {
  const [e, t] = dr(""),
    r = () =>
      P(this, null, function* () {
        try {
          const i = yield Bh.satsPay();
          try {
            yield (yield q0.requestProvider()).sendPayment(i);
          } catch (n) {
            t(i);
          }
        } catch (i) {
          Yt(i);
        }
      });
  return (
    Rh(() => {
      r();
    }),
    V(E8, { addr: e })
  );
}
Mn(["click"]);
const S8 = function (t) {
  Do.emit("track_other_events", { e: "rechargeClick" });
  const r = () =>
    Et.getCurrency(t.currencyName).currencyTokens.every((i) => !i.canDeposit);
  return V(Ii, {
    get fallback() {
      return V(y8, t);
    },
    get children() {
      return [
        V(rt, {
          get when() {
            return t.currencyName === "JB";
          },
          get children() {
            return V(j0, {});
          },
        }),
        V(rt, {
          get when() {
            return t.currencyName === "BCL";
          },
          get children() {
            return V(X0, {});
          },
        }),
        V(rt, {
          get when() {
            return t.currencyName === "SATS";
          },
          get children() {
            return V(A8, {});
          },
        }),
        V(rt, {
          get when() {
            return r();
          },
          get children() {
            return V(z0, {
              get currencyName() {
                return t.currencyName;
              },
            });
          },
        }),
      ];
    },
  });
};
var I8 = ie('<div class="py-4 top-0 sticky bg-layer3">'),
  D8 = ie("<div class=mb-4>"),
  x8 = ie("<button class=mr-2>"),
  C8 = ie('<div class="font-extrabold mt-3 text-second">'),
  T8 = ie(
    '<div><img class="h-6 w-6"><div class="ml-2 text-base"><span class=font-semibold>'
  );
function M8(e) {
  let t;
  const { setCurrency: r } = _i,
    i = To(() =>
      Fh($h(lu, "sort"), (g) => {
        const w = Et.getCurrency(g.currencyName).currencyType;
        return w === "CHAIN" || w === "VIRTUAL" ? "CHAIN" : w;
      })
    ),
    [n, s] = dr(""),
    [o, c] = dr(_i.store.currency),
    l = (g) => {
      var w;
      hu(g, () => ({ display: !0 })),
        r(g),
        c(g),
        ((w = lu[g]) == null ? void 0 : w.display) === !1 &&
          hu(g, "display", !0),
        e.cb();
    },
    f = (g) => {
      t && t.scrollTo(0, g - t.offsetTop);
    };
  return V(Fi, {
    get fallback() {
      return V(_c, {});
    },
    get children() {
      return [
        (() => {
          var g = I8();
          return (
            te(
              g,
              V(R0, {
                get value() {
                  return n();
                },
                onChange: s,
                class: "text-base font-semibold [&>input]:h-10",
                get placeholder() {
                  return le("Search");
                },
                get children() {
                  return [
                    V(Mr, {
                      name: "Search",
                      class: "mr-2 text-secondary -order-1",
                    }),
                    sr(
                      () =>
                        sr(() => !!n())() &&
                        (() => {
                          var w = x8();
                          return (
                            (w.$$click = () => s("")),
                            te(w, V(Mr, { name: "Close" })),
                            w
                          );
                        })()
                    ),
                  ];
                },
              })
            ),
            g
          );
        })(),
        (() => {
          var g = D8(),
            w = t;
          return (
            typeof w == "function" ? mc(w, g) : (t = g),
            te(
              g,
              V(Ah, {
                get list() {
                  return eg(
                    i().FIAT,
                    [(D) => D.currencyName.toLowerCase()],
                    ["asc"]
                  );
                },
                isFiat: !0,
                get tit() {
                  return le("Cash");
                },
                get search() {
                  return n();
                },
                onScrollTarget: f,
                get currency() {
                  return o();
                },
                onChange: l,
              }),
              null
            ),
            te(
              g,
              V(Ah, {
                get list() {
                  return i().CHAIN;
                },
                get tit() {
                  return le("Cryptocurrency");
                },
                get search() {
                  return n();
                },
                onScrollTarget: f,
                get currency() {
                  return o();
                },
                onChange: l,
              }),
              null
            ),
            g
          );
        })(),
      ];
    },
  });
}
function Ah(e) {
  const t = To(() => {
    const r = e.search.toLocaleLowerCase();
    return r
      ? e.list.filter((i) => {
          var n;
          return (
            i.currencyName.toLocaleLowerCase().includes(r) ||
            ((n = Et.getCurrency(i.currencyName)) == null
              ? void 0
              : n.fullName.toLocaleLowerCase().includes(r))
          );
        })
      : e.list;
  });
  return [
    (() => {
      var r = C8();
      return te(r, () => e.tit), r;
    })(),
    V(_n, {
      get each() {
        return t();
      },
      children: (r) =>
        V(N8, {
          get onScrollTarget() {
            return e.onScrollTarget;
          },
          get currency() {
            return e.currency;
          },
          item: r,
          get onChange() {
            return e.onChange;
          },
        }),
    }),
  ];
}
function N8(e) {
  let t;
  const r = () => e.currency === e.item.currencyName;
  return (
    vc(() => {
      r() &&
        setTimeout(() => t && t.offsetTop > 0 && e.onScrollTarget(t.offsetTop));
    }),
    (() => {
      var i = T8(),
        n = i.firstChild,
        s = n.nextSibling,
        o = s.firstChild;
      i.$$click = () => e.onChange(e.item.currencyName);
      var c = t;
      return (
        typeof c == "function" ? mc(c, i) : (t = i),
        te(o, () => e.item.aliasCurrencyName),
        te(s, () => ` - ${Et.getCurrency(e.item.currencyName).fullName}`, null),
        te(
          i,
          V(it, {
            get when() {
              return e.item.currencyName === "BCD";
            },
            get children() {
              return V(ds, {
                href: "/wallet/about-bonuscoin",
                class: "ml-2 text-brand",
                onClick: () => hr.pop(),
                get children() {
                  return V(Mr, { name: "Inform" });
                },
              });
            },
          }),
          null
        ),
        te(
          i,
          V(it, {
            get when() {
              return e.item.currencyName === "BCL";
            },
            get children() {
              return V(ds, {
                href: "/wallet/about-ticketcoin",
                class: "ml-2 text-brand",
                onClick: () => hr.pop(),
                get children() {
                  return V(Mr, { name: "Inform" });
                },
              });
            },
          }),
          null
        ),
        te(
          i,
          V(it, {
            get when() {
              return e.item.currencyName === "BC";
            },
            get children() {
              return V(ds, {
                href: "/wallet/about-bccoin",
                class: "ml-2 text-brand",
                onClick: () => hr.pop(),
                get children() {
                  return V(Mr, { name: "Inform" });
                },
              });
            },
          }),
          null
        ),
        _t(
          (l) => {
            var f = tt(
                "mb-1 flex items-center rounded-lg px-2 cursor-pointer py-3",
                r() && "scroll-target bg-layer4"
              ),
              g = ai.coinIcon(e.item.currencyName);
            return (
              f !== l.e && Kt(i, (l.e = f)),
              g !== l.t && ft(n, "src", (l.t = g)),
              l
            );
          },
          { e: void 0, t: void 0 }
        ),
        i
      );
    })()
  );
}
Mn(["click"]);
var O8 = ie('<span class="cursor-pointer text-brand">Add here'),
  R8 = ie('<div class="relative font-semibold text-secondary mt-4 pr-14">'),
  P8 = ie(
    '<div class="flex items-center ellipsis"><img class="relative z-10 h-5 w-5"><img class="relative h-5 -ml-3 w-5"><img class="h-5 -ml-3 w-5">'
  ),
  B8 = ie("<span>"),
  L8 = ie('<div class="flex items-center font-semibold text-secondary mt-4">'),
  F8 = ie('<img class="mr-1 h-5 w-5">');
function $8(e) {
  return e ? 4 : 6;
}
function U8(e) {
  const [t] = Is(Z0),
    r = (c) => {
      _i.setCurrency(c);
    },
    i = Co(),
    n = (c) => {
      setTimeout(() => e.selectEl && e.selectEl.click(), 50);
    },
    [s, o] = dr(!1);
  return V(Fi, {
    get children() {
      return [
        V(it, {
          get when() {
            return t();
          },
          children: (c) => {
            const l = c().crypto;
            return (() => {
              var f = L8();
              return (
                te(
                  f,
                  V(_n, {
                    get each() {
                      return l.slice(0, $8(!!i));
                    },
                    children: (g) => {
                      const w = Et.getCurrency(g);
                      return w
                        ? V(Xt, {
                            get class() {
                              return tt(
                                e.currencyName === w.currencyName
                                  ? "border-brand"
                                  : "border-input",
                                "border mr-1 h-9 center rounded-l-full rounded-r-full",
                                i ? "bg-layer4" : "bg-layer5"
                              );
                            },
                            onClick: () => r(w.currencyName),
                            get children() {
                              return [
                                (() => {
                                  var D = F8();
                                  return (
                                    _t(() =>
                                      ft(D, "src", ai.coinIcon(w.currencyName))
                                    ),
                                    D
                                  );
                                })(),
                                sr(() => Et.getAlias(w.currencyName)),
                              ];
                            },
                          })
                        : null;
                    },
                  }),
                  null
                ),
                te(
                  f,
                  V(Xt, {
                    get class() {
                      return tt(
                        "notranslate border border-input flex h-9 flex-none items-center center rounded-l-full rounded-r-full",
                        i ? "bg-layer4" : "bg-layer5"
                      );
                    },
                    onClick: n,
                    get children() {
                      return [
                        (() => {
                          var g = P8(),
                            w = g.firstChild,
                            D = w.nextSibling,
                            A = D.nextSibling;
                          return (
                            _t(
                              (M) => {
                                var K = ai.coinIcon(l[4]),
                                  q = ai.coinIcon(l[5]),
                                  Q = ai.coinIcon(l[6]);
                                return (
                                  K !== M.e && ft(w, "src", (M.e = K)),
                                  q !== M.t && ft(D, "src", (M.t = q)),
                                  Q !== M.a && ft(A, "src", (M.a = Q)),
                                  M
                                );
                              },
                              { e: void 0, t: void 0, a: void 0 }
                            ),
                            g
                          );
                        })(),
                        (() => {
                          var g = B8();
                          return te(g, () => le("More")), g;
                        })(),
                        V(Mr, { class: "!h-3 !w-3", name: "Arrow" }),
                      ];
                    },
                  }),
                  null
                ),
                f
              );
            })();
          },
        }),
        V(it, {
          get when() {
            var c;
            return (c = t()) == null ? void 0 : c.firstRecharge;
          },
          get children() {
            var c = R8();
            return (
              te(
                c,
                V(P0, {
                  get title() {
                    return le("Select Currency");
                  },
                  class: "min-h-[80vh] w-100 sm:min-h-100",
                  get visible() {
                    return s();
                  },
                  setVisible: o,
                  get layer() {
                    return V(M8, { cb: () => o(!1) });
                  },
                  get children() {
                    return V(bc, {
                      class: "relative",
                      i18nKey: "wallet.trans.desc48",
                      get children() {
                        return ["Didn’t see your currency?", O8()];
                      },
                    });
                  },
                })
              ),
              c
            );
          },
        }),
      ];
    },
  });
}
var k8 = ie(
    '<div class="h-full w-full absolute left-0 top-0 bg-black_alpha10 opacity-0 transition-opacity group-hover:opacity-100">'
  ),
  Sh = ie("<div>"),
  q8 = ie('<div class="text-secondary relative z-10 cursor-pointer ml-1">'),
  j8 = ie(
    '<div><div><div><img class="max-h-[90%] max-w-[90%]"alt=logo></div><div>'
  ),
  z8 = ie(
    '<div class="absolute left-0 top-0 flex h-full w-full center z-20"><div class="h-full w-full bg-black_alpha20"></div><div class=absolute-center>'
  ),
  K8 = ie('<div class="text-secondary text-xs">'),
  V8 = ie(
    '<div class="absolute z-10 font-semibold left-0 top-0 flex items-center px-2 rounded-br-xl rounded-tl-xl bg-gradient-to-tr from-[#E15A0F] to-[#F7931A] py-0.5 text-xs text-alw_white"><img class="mr-1 h-3 w-3"alt=""> SVIP'
  ),
  H8 = ie(
    '<div class="absolute z-10 font-semibold left-0 top-0 px-2 rounded-br-xl rounded-tl-xl bg-gradient-to-tr from-[#E15A0F] to-[#F7931A] py-0.5 text-xs text-alw_white">'
  );
function Ih(e) {
  return Number(e).toLocaleString(yc.lang, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
function Dh(e) {
  return Ih(e.minDepositAmount) + " ~ " + Ih(e.maxDepositAmount);
}
function t0(e) {
  let t = "";
  return (
    (e.nightIcon || e.lightIcon) && (t = yc.darken ? e.nightIcon : e.lightIcon),
    t
  );
}
var gc = ((e) => (
  (e[(e.normal = 0)] = "normal"),
  (e[(e.disable = 1)] = "disable"),
  (e[(e.success = 2)] = "success"),
  e
))(gc || {});
function La(e) {
  const t = Mh(),
    r = [0, 2].includes(e.paymentInfo.maintainedStatus),
    i = () => e.currency === "INRFIAT",
    n = (s) => {
      t(
        `/wallet/what-deposit?guideUrl=${s.guideUrl}&guideVideoUrl=${s.guideVideoUrl}&guideTemplateType=${s.guideTemplateType}`
      );
    };
  return (() => {
    var s = j8(),
      o = s.firstChild,
      c = o.firstChild,
      l = c.firstChild,
      f = c.nextSibling;
    return (
      te(
        s,
        V(G8, {
          get tag() {
            return e.paymentInfo.tag;
          },
          get originalTag() {
            return e.paymentInfo.originalTag;
          },
        }),
        o
      ),
      te(
        s,
        V(it, {
          when: r,
          get fallback() {
            return (() => {
              var g = z8(),
                w = g.firstChild,
                D = w.nextSibling;
              return (
                (g.$$click = () =>
                  Yt.error(le("This channel is under maintenance"))),
                te(
                  D,
                  V(Mr, { class: "h-6 w-6 text-alw_white", name: "Maintain" })
                ),
                g
              );
            })();
          },
          get children() {
            var g = k8();
            return (g.$$click = () => e.cb(e.paymentInfo)), g;
          },
        }),
        o
      ),
      te(f, () => e.paymentInfo.name),
      te(
        o,
        V(it, {
          get when() {
            return !i();
          },
          get children() {
            var g = Sh();
            return (
              te(g, () => Dh(e.paymentInfo)),
              _t(() => Kt(g, tt("text-secondary text-xs"))),
              g
            );
          },
        }),
        null
      ),
      te(
        o,
        (() => {
          var g = sr(
            () =>
              !!(e.paymentInfo.avgMinutesSpent && r && e.currency !== "INRFIAT")
          );
          return () =>
            g() &&
            (() => {
              var w = K8();
              return (
                te(w, () =>
                  le("EAT: __number__ min", {
                    number:
                      Number(e.paymentInfo.avgMinutesSpent) > 5
                        ? "> 5"
                        : e.paymentInfo.avgMinutesSpent,
                  })
                ),
                w
              );
            })();
        })(),
        null
      ),
      te(
        s,
        V(it, {
          get when() {
            return i();
          },
          get children() {
            return [
              (() => {
                var g = Sh();
                return (
                  te(g, () => Dh(e.paymentInfo)),
                  _t(() => Kt(g, tt("text-secondary ml-auto text-right"))),
                  g
                );
              })(),
              (() => {
                var g = q8();
                return (
                  (g.$$click = (w) => {
                    w.stopPropagation(), n(e.paymentInfo);
                  }),
                  te(g, V(Mr, { name: "Inform" })),
                  g
                );
              })(),
            ];
          },
        }),
        null
      ),
      _t(
        (g) => {
          var w = tt(
              "relative overflow-hidden cursor-pointer rounded-lg p-2 bg-layer4 group",
              i() && "flex items-center rounded-xl my-2 text-xs sm:text-sm"
            ),
            D = tt(
              i()
                ? "flex items-center justify-between font-semibold"
                : "font-semibold"
            ),
            A = tt(
              "rounded-lg bg-layer5 flex flex-none center h-12",
              i() && "w-20 sm:w-32"
            ),
            M = t0(e.paymentInfo),
            K = tt(i() ? "mx-3" : "mt-2 ellipsis");
          return (
            w !== g.e && Kt(s, (g.e = w)),
            D !== g.t && Kt(o, (g.t = D)),
            A !== g.a && Kt(c, (g.a = A)),
            M !== g.o && ft(l, "src", (g.o = M)),
            K !== g.i && Kt(f, (g.i = K)),
            g
          );
        },
        { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }
      ),
      s
    );
  })();
}
function G8(e) {
  return V(Ii, {
    get children() {
      return [
        V(rt, {
          get when() {
            return e.originalTag.toLocaleLowerCase() === "svip";
          },
          get children() {
            var t = V8(),
              r = t.firstChild;
            return (
              r.nextSibling,
              ft(r, "src", K0),
              te(t, () => le("Exclusive"), null),
              t
            );
          },
        }),
        V(rt, {
          get when() {
            return e.tag;
          },
          get children() {
            var t = H8();
            return te(t, () => e.tag), t;
          },
        }),
      ];
    },
  });
}
Mn(["click"]);
function W8(e) {
  const t = () => e.currency === "INRFIAT",
    [r, i] = dr(!1);
  return V(it, {
    get when() {
      return t() && e.list.length > 3;
    },
    get fallback() {
      return V(_n, {
        get each() {
          return e.list;
        },
        children: (n) => V(La, Gt({ paymentInfo: n }, e)),
      });
    },
    get children() {
      return [
        V(_n, {
          get each() {
            return e.list.slice(0, 3);
          },
          children: (n) => V(La, Gt({ paymentInfo: n }, e)),
        }),
        V(Nh, {
          get when() {
            return r();
          },
          get children() {
            return V(_n, {
              get each() {
                return e.list.slice(3, e.list.length);
              },
              children: (n) => V(La, Gt({ paymentInfo: n }, e)),
            });
          },
        }),
        V(Xt, {
          type: "second",
          class: "p-2 mx-auto my-2 h-auto w-auto",
          onClick: () => i((n) => !n),
          get children() {
            return sr(() => !!r())() ? le("View less") : le("View more");
          },
        }),
      ];
    },
  });
}
var Q8 = ie(
    '<div class="flex items-center justify-between px-3 font-semibold cursor-pointer text-secondary border-b border-third py-2"><div class="">'
  ),
  Y8 = ie("<div>");
function J8(e) {
  const t = () => Fh(e.list(), (s) => (s.tag ? le("Recommend") : s.category)),
    r = () => Object.keys(t()),
    i = Co(),
    n = () => e.currency === "INRFIAT";
  return V(it, {
    get when() {
      return e.list().length !== 0;
    },
    get fallback() {
      return V(Nn, {});
    },
    get children() {
      return V(_n, {
        get each() {
          return r();
        },
        children: (s) => {
          const [o, c] = dr(!0);
          return [
            (() => {
              var l = Q8(),
                f = l.firstChild;
              return (
                (l.$$click = () => c((g) => !g)),
                te(f, s),
                te(
                  l,
                  V(Mr, {
                    name: "Arrow",
                    get class() {
                      return tt(
                        o() ? "rotate-90" : "rotate-0",
                        "transition-all"
                      );
                    },
                  }),
                  null
                ),
                l
              );
            })(),
            V(Nh, {
              get when() {
                return o();
              },
              get children() {
                var l = Y8();
                return (
                  te(
                    l,
                    V(
                      W8,
                      Gt(e, {
                        get list() {
                          return t()[s];
                        },
                      })
                    )
                  ),
                  _t(() =>
                    Kt(
                      l,
                      tt(
                        !i && "lg:grid-cols-4",
                        n() ? "px-4" : "p-3 grid grid-cols-3 gap-x-1.5 gap-y-4"
                      )
                    )
                  ),
                  l
                );
              },
            }),
          ];
        },
      });
    },
  });
}
function X8(e) {
  return V(Fi, {
    get fallback() {
      return V(_c, {});
    },
    get children() {
      return V(J8, e);
    },
  });
}
Mn(["click"]);
var Z8 = ie('<div class="mb-1 font-semibold text-secondary 1">'),
  e4 = ie('<div class="rounded-xl bg-input_bright">'),
  t4 = ie('<img class="h-6 w-auto max-w-none">'),
  r4 = ie('<div class="ml-auto h-6 w-6 rounded-lg bg-layer5 center">'),
  i4 = ie(
    '<div class="text-primary font-extrabold text-sm cursor-pointer mb-4 mt-2 center justify-end text-right underline">'
  );
const n4 = rg(function (t) {
  return Lh.depositMethods(t);
});
function s4(e) {
  const [t] = Is(
    () => e.currencyName,
    () => n4(e.currencyName),
    { initialValue: [] }
  );
  return V(Fi, {
    get fallback() {
      return V(Oo, {});
    },
    get children() {
      return V(it, {
        get when() {
          return t().length > 0;
        },
        get fallback() {
          return V(Nn, {});
        },
        get children() {
          return V(c4, {
            get list() {
              return t();
            },
            get currencyName() {
              return e.currencyName;
            },
          });
        },
      });
    },
  });
}
const o4 = { svip: 0, recommend: 1, fastest: 2, popular: 3 };
function a4(e) {
  var t;
  return (t = o4[e.toLocaleLowerCase()]) != null ? t : 4;
}
function c4(e) {
  const t = (c) => [gc.normal, gc.success].includes(c.maintainedStatus),
    r = To(() =>
      $h(e.list, [
        (c) => u4(c.tag, c.categoryId),
        (c) => a4(c.originalTag.toLocaleLowerCase()),
        (c) => (t(c) ? 0 : 1),
      ])
    ),
    i = Mh(),
    [n, s] = dr(null);
  vc(() => {
    e.currencyName && s(null);
  }),
    Rh(() => {
      Do.emit("track_other_events", { e: "Initiate checkout" });
    });
  const o = (c) => {
    i(
      `/wallet/what-deposit?guideUrl=${c.guideUrl}&guideVideoUrl=${c.guideVideoUrl}&guideTemplateType=${c.guideTemplateType}`
    );
  };
  return [
    (() => {
      var c = Z8();
      return te(c, () => le("Deposit Method")), c;
    })(),
    V(it, {
      get when() {
        return n();
      },
      get fallback() {
        return (() => {
          var c = e4();
          return (
            te(
              c,
              V(X8, {
                get currency() {
                  return e.currencyName;
                },
                cb: s,
                list: r,
              })
            ),
            c
          );
        })();
      },
      children: (c) => [
        V(Xt, {
          onClick: () => s(null),
          class:
            "flex items-center w-full justify-between pl-3 border border-input bg-input_bright",
          get children() {
            return [
              (() => {
                var l = t4();
                return _t(() => ft(l, "src", t0(c()))), l;
              })(),
              (() => {
                var l = r4();
                return (
                  te(
                    l,
                    V(Oh, { class: "!h-3 !w-3 -rotate-90", name: "Arrow" })
                  ),
                  l
                );
              })(),
            ];
          },
        }),
        V(it, {
          get when() {
            return (
              (sr(() => !!c().guideUrl)() &&
                !!Object.keys(JSON.parse(c().guideUrl)).length) ||
              c().guideVideoUrl
            );
          },
          get children() {
            var l = i4();
            return (
              (l.$$click = () => o(c())),
              te(l, V(tg, { class: "w-3 h-3 mr-1.5 fill-primary" }), null),
              te(l, () => le("How to make deposit?"), null),
              l
            );
          },
        }),
        V(Ec, {
          class: "mt-3.5",
          get currency() {
            return e.currencyName;
          },
        }),
        V(r1, {
          get payment() {
            return c();
          },
          get currency() {
            return e.currencyName;
          },
        }),
      ],
    }),
  ];
}
function u4(e, t) {
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
Mn(["click"]);
var l4 = ie(
    '<div class="flex center flex-auto"><img class="h-6 w-6"alt=""><div class="font-semibold mx-2"></div><div class="h-6 w-6 rounded-md bg-layer5 ml-auto center">'
  ),
  xh = ie("<div>"),
  h4 = ie(
    '<div><div><div><div><div class="font-semibold text-secondary mb-1.5">'
  ),
  f4 = ie('<div class="bg-layer4 rounded-xl center h-[416px]">');
function d4(e) {
  return V(ig, {
    class: "w-full",
    get currencyName() {
      return e.currencyName;
    },
    get onlyCrypto() {
      return e.onlyCrypto;
    },
    get onlyFiat() {
      return e.onlyFiat;
    },
    get onChange() {
      return _i.setCurrency;
    },
    get children() {
      return V(Xt, {
        get class() {
          return tt(
            "flex w-full items-center justify-between pl-3 border border-input rounded-lg bg-input_bright",
            e.class
          );
        },
        ref(t) {
          var r = e.setSelectEl;
          typeof r == "function" ? r(t) : (e.setSelectEl = t);
        },
        get children() {
          var t = l4(),
            r = t.firstChild,
            i = r.nextSibling,
            n = i.nextSibling;
          return (
            te(i, () => Et.getAlias(e.currencyName)),
            te(n, V(Oh, { class: "h-3 w-3 -rotate-90", name: "Arrow" })),
            _t(() => ft(r, "src", ai.coinIcon(e.currencyName))),
            t
          );
        },
      });
    },
  });
}
function r0(e) {
  const t = _i.store,
    r = () => Et.getCurrency(_i.store.currency).currencyType === "FIAT",
    i = Co();
  return V(Qo, {
    get value() {
      return r() ? 1 : 0;
    },
    get type() {
      return i ? "indicator" : void 0;
    },
    get class() {
      return tt(!!i && "bg-layer4 top-0 sticky z-30 -mx-4 mb-0");
    },
    onChange: (n) =>
      _i.setCurrency(n ? _i.store.fiatCurrency : _i.store.cryptoCurrency),
    get children() {
      return [
        V(Qo.TabItem, {
          class: "flex-auto bg-transparent",
          get title() {
            return le("Crypto");
          },
          get children() {
            return V(
              pc,
              Gt(
                {
                  get currencyName() {
                    return t.cryptoCurrency;
                  },
                },
                e,
                { isFiat: !1 }
              )
            );
          },
        }),
        V(Qo.TabItem, {
          class: "flex-auto bg-transparent",
          get title() {
            return le("Fiat");
          },
          get children() {
            return V(
              pc,
              Gt(
                {
                  get currencyName() {
                    return t.fiatCurrency;
                  },
                },
                e,
                { isFiat: !0 }
              )
            );
          },
        }),
      ];
    },
  });
}
function pc(e) {
  let t;
  const [r, i] = dr(null),
    [n, s] = dr(!0),
    c = !!Co();
  return V(Fi, {
    get fallback() {
      return V(it, {
        when: !c,
        get fallback() {
          return V(_c, {});
        },
        get children() {
          var l = f4();
          return te(l, V(Th, {})), l;
        },
      });
    },
    get children() {
      var l = h4(),
        f = l.firstChild,
        g = f.firstChild,
        w = g.firstChild,
        D = w.firstChild;
      return (
        te(
          l,
          V(it, {
            get when() {
              return !e.isFiat;
            },
            get children() {
              return V(U8, {
                get currencyName() {
                  return e.currencyName;
                },
                get selectEl() {
                  return r();
                },
              });
            },
          }),
          f
        ),
        te(D, () => le("Deposit Currency")),
        te(
          w,
          V(d4, {
            get onlyCrypto() {
              return !e.isFiat;
            },
            get onlyFiat() {
              return e.isFiat;
            },
            get currencyName() {
              return e.currencyName;
            },
            get class() {
              return e.isFiat ? "max-w-44" : "";
            },
            setSelectEl: i,
          }),
          null
        ),
        te(
          g,
          V(it, {
            get when() {
              return !e.isFiat;
            },
            get children() {
              var A = xh(),
                M = t;
              return (
                typeof M == "function" ? mc(M, A) : (t = A),
                _t(() => Kt(A, tt("flex-1 ml-1.5"))),
                A
              );
            },
          }),
          null
        ),
        te(
          f,
          V(Uh, {
            get children() {
              return [
                V(V0, {
                  get purviewCode() {
                    return e.isFiat ? "deposit_fiat" : "deposit_crypto";
                  },
                  isDeposit: !0,
                  get isFiat() {
                    return e.isFiat;
                  },
                  cb: s,
                }),
                (() => {
                  var A = xh();
                  return (
                    te(
                      A,
                      V(it, {
                        get when() {
                          return e.isFiat;
                        },
                        get fallback() {
                          return V(S8, {
                            get currencyName() {
                              return e.currencyName;
                            },
                            get isEnable() {
                              return n();
                            },
                            chanelRef: t,
                          });
                        },
                        get children() {
                          return V(s4, {
                            get currencyName() {
                              return e.currencyName;
                            },
                          });
                        },
                      })
                    ),
                    _t(() =>
                      Kt(A, tt(!n() && "pointer-events-none opacity-50"))
                    ),
                    A
                  );
                })(),
              ];
            },
          }),
          null
        ),
        _t(
          (A) => {
            var M = tt(
                !c && "sm:rounded-xl sm:bg-layer4 sm:px-4 sm:pt-1 lg:px-8"
              ),
              K = tt("p-4 bg-layer4 rounded-xl my-4 pt-1", !c && "sm:px-0"),
              q = tt("flex items-center justify-between mb-4 mt-3"),
              Q = tt(
                "flex-1 relative cursor-pointer",
                e.isFiat
                  ? "flex justify-between mr-0 items-center flex-auto"
                  : "mr-1.5"
              );
            return (
              M !== A.e && Kt(l, (A.e = M)),
              K !== A.t && Kt(f, (A.t = K)),
              q !== A.a && Kt(g, (A.a = q)),
              Q !== A.o && Kt(w, (A.o = Q)),
              A
            );
          },
          { e: void 0, t: void 0, a: void 0, o: void 0 }
        ),
        l
      );
    },
  });
}
function g4() {
  return V(B0, {
    get title() {
      return le("Deposit");
    },
    get children() {
      return V(r0, {});
    },
  });
}
const uS = Object.freeze(
  Object.defineProperty(
    { __proto__: null, DepositPageTab: pc, DepositPageTabs: r0, default: g4 },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  Ec as D,
  dA as R,
  Sg as S,
  Yd as T,
  r1 as a,
  pc as b,
  g4 as c,
  zt as d,
  zr as e,
  uS as i,
  bh as n,
  cS as o,
  jr as p,
  _m as r,
  Ma as s,
  aS as t,
  Tn as y,
};
