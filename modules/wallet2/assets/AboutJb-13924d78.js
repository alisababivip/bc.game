var it = Object.defineProperty,
  lt = Object.defineProperties;
var st = Object.getOwnPropertyDescriptors;
var Me = Object.getOwnPropertySymbols;
var ot = Object.prototype.hasOwnProperty,
  ct = Object.prototype.propertyIsEnumerable;
var Fe = (e, t, n) =>
    t in e
      ? it(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  te = (e, t) => {
    for (var n in t || (t = {})) ot.call(t, n) && Fe(e, n, t[n]);
    if (Me) for (var n of Me(t)) ct.call(t, n) && Fe(e, n, t[n]);
    return e;
  },
  me = (e, t) => lt(e, st(t));
var _e = (e, t, n) =>
  new Promise((a, r) => {
    var s = (u) => {
        try {
          i(n.next(u));
        } catch (h) {
          r(h);
        }
      },
      m = (u) => {
        try {
          i(n.throw(u));
        } catch (h) {
          r(h);
        }
      },
      i = (u) => (u.done ? a(u.value) : Promise.resolve(u.value).then(s, m));
    i((n = n.apply(e, t)).next());
  });
import {
  i as o,
  c as l,
  t as v,
  e as E,
  a as R,
  d as z,
  S as Ae,
  M as ne,
  s as D,
  f as Ue,
  m as N,
  b as ut,
  u as dt,
} from "./web-da7da7e5.js";
import {
  q as ce,
  k as U,
  n as I,
  s as M,
  a as q,
  j as ge,
  m as F,
  t as Q,
  P as ae,
  p as A,
  I as xe,
  G as Je,
  e as ze,
  B as J,
  L as Ze,
  u as mt,
  D as H,
  i as ft,
  N as gt,
  o as Ce,
} from "./manifest-e0f0ba59.js";
import {
  d as j,
  b as K,
  c as P,
  g as Ne,
  M as C,
  o as Ee,
  S as _,
  e as he,
  F as Pe,
  E as ht,
} from "./solid-js-2e15682c.js";
import { t as f, T as Ie } from "./i18n-9b1e4bd8.js";
import { T as vt } from "./bethistory-fcf99adb.js";
import { D as yt } from "./withdrawFiat-1254e3b3.js";
import { W as k } from "./Icon-b6e375d0.js";
import { C as bt } from "./CopyInput-441aca40.js";
import { c as De, p as S } from "./store-2ed2b91e.js";
import { W as _t } from "./Loading-72a9f35e.js";
import { g as we } from "./lib-6879580e.js";
import { s as ve } from "./sortBy-6b2810fa.js";
import { U as wt } from "./Utr-adf02821.js";
import { c as Ke } from "./store-eb5336a3.js";
var je = v('<div class="font-semibold text-secondary mb-1.5">'),
  Le = v('<div class="ellipsis w-0 flex-auto text-left">');
function wr(e) {
  const t = () => e.currencyInfo().currencyTokens,
    n = () => {
      const d =
        e.network &&
        t().find(
          (g) =>
            g.chainName.toLocaleLowerCase() === e.network.toLocaleLowerCase()
        );
      return d || t()[0];
    };
  j(() => {
    const d = n();
    r(d), m(d.addrTypes[0]);
  });
  const [a, r] = K(n()),
    [s, m] = K(n().addrTypes[0]),
    i = (d) => {
      r(d), m(d.addrTypes[0]);
    },
    u = P(() => {
      if (e.switchAddrType && s()) {
        const d = P(() =>
            a().addrTypes.map((c) => ({ label: c.label, value: c.value }))
          ),
          g = () => {
            var c;
            return (c = d().find((y) => y.value === s().value)) != null
              ? c
              : d()[0];
          };
        return [
          (() => {
            var c = je();
            return o(c, () => f("Choose Network")), c;
          })(),
          l(ce, {
            get value() {
              return g();
            },
            get options() {
              return d();
            },
            onChange: m,
            children: (c) =>
              (() => {
                var y = Le();
                return o(y, () => c().label), y;
              })(),
            class: "w-full rounded-lg bg-input_bright",
          }),
        ];
      } else {
        const d = e
            .currencyInfo()
            .currencyTokens.map((c) => ({ label: c.label, value: c })),
          g = () => d.find((c) => c.value === a()) || d[0];
        return [
          (() => {
            var c = je();
            return o(c, () => f("Choose Network")), c;
          })(),
          l(ce, {
            get value() {
              return g();
            },
            options: d,
            onChange: (c) => i(c.value),
            children: (c) =>
              (() => {
                var y = Le();
                return o(y, () => c().label), y;
              })(),
            class: "w-full bg-input_bright",
          }),
        ];
      }
    }),
    h = P(() => (t().length === 1 ? t()[0].label : ""));
  return { token: a, setToken: i, addrType: s, switchNode: u, typeTxt: h };
}
var $t = v("<div>"),
  pt = v(
    "<div><span class=text-brand></span><span class=text-brand></span><span class=text-brand>"
  ),
  At = v("<div><span class=text-brand></span><span class=text-brand>");
function $r(e) {
  return l(Ne, {
    get fallback() {
      return (() => {
        var t = $t();
        return (
          o(t, () => e.address),
          E(() => R(t, U("notranslate break-all", e.class))),
          t
        );
      })();
    },
    get children() {
      return [
        l(C, {
          get when() {
            return e.address.length > 13;
          },
          children: (t) => {
            const n = P(() => {
              const a = e.address.length,
                r = e.address.slice(0, 4),
                s = Math.ceil(a / 2) - 2,
                m = s + 4,
                i = e.address.slice(4, s),
                u = e.address.slice(s, m),
                h = e.address.slice(m, a - 4),
                d = e.address.slice(a - 4);
              return {
                firstPart: r,
                middlePart1: i,
                middleHighlight: u,
                middlePart2: h,
                lastPart: d,
              };
            });
            return (() => {
              var a = pt(),
                r = a.firstChild,
                s = r.nextSibling,
                m = s.nextSibling;
              return (
                o(r, () => n().firstPart),
                o(a, () => n().middlePart1, s),
                o(s, () => n().middleHighlight),
                o(a, () => n().middlePart2, m),
                o(m, () => n().lastPart),
                E(() => R(a, U("notranslate break-all", e.class))),
                a
              );
            })();
          },
        }),
        l(C, {
          get when() {
            return e.address.length <= 13;
          },
          children: (t) => {
            const n = P(() => {
              const a = e.address.slice(0, 4),
                r = e.address.slice(4, length - 4),
                s = e.address.slice(length - 4);
              return { firstPart: a, middlePart: r, lastPart: s };
            });
            return (() => {
              var a = At(),
                r = a.firstChild,
                s = r.nextSibling;
              return (
                o(r, () => n().firstPart),
                o(a, () => n().middlePart, s),
                o(s, () => n().lastPart),
                E(() => R(a, U("notranslate break-all", e.class))),
                a
              );
            })();
          },
        }),
      ];
    },
  });
}
var re =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Ar(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function a() {
      return this instanceof a
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (a) {
      var r = Object.getOwnPropertyDescriptor(e, a);
      Object.defineProperty(
        n,
        a,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[a];
              },
            }
      );
    }),
    n
  );
}
var xt = {},
  ye = {},
  p = {},
  Z =
    (re && re.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (a, r) {
                a.__proto__ = r;
              }) ||
            function (a, r) {
              for (var s in r)
                Object.prototype.hasOwnProperty.call(r, s) && (a[s] = r[s]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function a() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((a.prototype = n.prototype), new a());
      };
    })();
Object.defineProperty(p, "__esModule", { value: !0 });
p.InternalError =
  p.InvalidDataError =
  p.RoutingError =
  p.UnsupportedMethodError =
  p.ConnectionError =
  p.RejectionError =
  p.MissingProviderError =
    void 0;
function ee(e, t, n) {
  if ((Object.setPrototypeOf(e, n.prototype), t === n))
    if (((e.name = t.name), Error.captureStackTrace))
      Error.captureStackTrace(e, n);
    else {
      var a = new Error(e.message).stack;
      a && (e.stack = Ct(a, "new ".concat(t.name)));
    }
}
function Ct(e, t) {
  if (!e || !t) return e;
  var n = new RegExp("\\s+at\\s".concat(t, "\\s")),
    a = e.split(`
`),
    r = a.filter(function (s) {
      return !s.match(n);
    });
  return r.join(`
`);
}
var It = (function (e) {
  Z(t, e);
  function t(n) {
    var a = this.constructor,
      r = e.call(this, n) || this;
    return ee(r, a, t), r;
  }
  return t;
})(Error);
p.MissingProviderError = It;
var St = (function (e) {
  Z(t, e);
  function t(n) {
    var a = this.constructor,
      r = e.call(this, n) || this;
    return ee(r, a, t), r;
  }
  return t;
})(Error);
p.RejectionError = St;
var kt = (function (e) {
  Z(t, e);
  function t(n) {
    var a = this.constructor,
      r = e.call(this, n) || this;
    return ee(r, a, t), r;
  }
  return t;
})(Error);
p.ConnectionError = kt;
var Nt = (function (e) {
  Z(t, e);
  function t(n) {
    var a = this.constructor,
      r = e.call(this, n) || this;
    return ee(r, a, t), r;
  }
  return t;
})(Error);
p.UnsupportedMethodError = Nt;
var Et = (function (e) {
  Z(t, e);
  function t(n) {
    var a = this.constructor,
      r = e.call(this, n) || this;
    return ee(r, a, t), r;
  }
  return t;
})(Error);
p.RoutingError = Et;
var Pt = (function (e) {
  Z(t, e);
  function t(n) {
    var a = this.constructor,
      r = e.call(this, n) || this;
    return ee(r, a, t), r;
  }
  return t;
})(Error);
p.InvalidDataError = Pt;
var Dt = (function (e) {
  Z(t, e);
  function t(n) {
    var a = this.constructor,
      r = e.call(this, n) || this;
    return ee(r, a, t), r;
  }
  return t;
})(Error);
p.InternalError = Dt;
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.requestProvider = void 0;
var Tt = p;
function Vt(e) {
  return new Promise(function (t, n) {
    if (typeof window == "undefined")
      return n(new Error("Must be called in a browser context"));
    var a = window.webln;
    if (!a)
      return n(
        new Tt.MissingProviderError("Your browser has no WebLN provider")
      );
    a.enable()
      .then(function () {
        return t(a);
      })
      .catch(function (r) {
        return n(r);
      });
  });
}
ye.requestProvider = Vt;
var et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
(function (e) {
  var t =
      (re && re.__createBinding) ||
      (Object.create
        ? function (a, r, s, m) {
            m === void 0 && (m = s);
            var i = Object.getOwnPropertyDescriptor(r, s);
            (!i ||
              ("get" in i ? !r.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return r[s];
                },
              }),
              Object.defineProperty(a, m, i);
          }
        : function (a, r, s, m) {
            m === void 0 && (m = s), (a[m] = r[s]);
          }),
    n =
      (re && re.__exportStar) ||
      function (a, r) {
        for (var s in a)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(r, s) &&
            t(r, a, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    n(ye, e),
    n(et, e),
    n(p, e);
})(xt);
var Ot = v("<div>");
function xr(e) {
  return l(I, {
    type: "warning",
    get children() {
      var t = Ot();
      return (
        o(t, () =>
          f(
            "__currency__ is under update now. Please come back later or choose another currency.",
            { currency: M.getAlias(e.currencyName) }
          )
        ),
        t
      );
    },
  });
}
const Bt = "/modules/wallet2/assets/safety-e3390fdc.png";
var We = v('<div class="mb-1 mt-4 text-base font-semibold text-secondary">'),
  fe = v('<p class="text-base font-extrabold ml-1">'),
  Ye = v('<div><span class="text-base ellipsis ml-1"></span><div>'),
  He = v('<div class="text-base font-extrabold">'),
  Rt = v(
    '<svg width=20 height=21 viewBox="0 0 20 21"fill=none xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_31_258)><path d="M14.5 18.9327C11.0977 18.9283 7.8361 17.5748 5.43034 15.169C3.02457 12.7633 1.67108 9.50162 1.66667 6.09936C1.66667 5.0827 2.07054 4.10767 2.78943 3.38878C3.50831 2.66989 4.48334 2.26603 5.5 2.26603C5.71529 2.26439 5.93021 2.28392 6.14167 2.32436C6.34609 2.35461 6.54706 2.40485 6.74167 2.47436C6.87854 2.52238 7.00051 2.6053 7.09551 2.71492C7.19051 2.82453 7.25525 2.95705 7.28333 3.09936L8.425 8.09936C8.45577 8.23508 8.45207 8.37634 8.41422 8.51026C8.37638 8.64418 8.30559 8.76649 8.20834 8.86603C8.1 8.98269 8.09167 8.99103 7.06667 9.52436C7.8875 11.3251 9.32767 12.7712 11.125 13.5994C11.6667 12.566 11.675 12.5577 11.7917 12.4494C11.8912 12.3521 12.0135 12.2813 12.1474 12.2435C12.2814 12.2056 12.4226 12.2019 12.5583 12.2327L17.5583 13.3744C17.6961 13.4063 17.8234 13.4728 17.9284 13.5676C18.0334 13.6623 18.1125 13.7822 18.1583 13.916C18.2287 14.1138 18.2816 14.3174 18.3167 14.5244C18.3502 14.7338 18.3669 14.9456 18.3667 15.1577C18.3513 16.17 17.9361 17.1351 17.2116 17.8424C16.4872 18.5497 15.5124 18.9416 14.5 18.9327Z"fill=#ffffff></path></g><defs><linearGradient id=paint0_linear_31_258 x1=10.0167 y1=2.26593 x2=10.0167 y2=18.9328 gradientUnits=userSpaceOnUse><stop stop-color=white></stop><stop offset=1 stop-color=white></stop></linearGradient><clipPath id=clip0_31_258><rect width=20 height=20 fill=white transform="translate(0 0.599365)">'
  );
const Mt = (e) => {
    const t = q(),
      [n, a] = De({
        emailFlag: e.emailFlag,
        phoneFlag: e.phoneFlag,
        pending: !1,
      });
    return (
      Ee(() => {
        a(
          S((r) => {
            r.pending = !0;
          })
        ),
          ge()
            .post("/account/phone/get/")
            .then((r) => {
              a(
                S((s) => {
                  (s.phoneFlag = r),
                    (s.emailFlag = F.emailVerified),
                    (s.pending = !1);
                })
              );
            })
            .catch((r) => {
              Q(r),
                a(
                  S((s) => {
                    s.pending = !1;
                  })
                );
            });
      }),
      l(ae, {
        type: "center",
        get title() {
          return f("Verification");
        },
        get children() {
          return [
            (() => {
              var r = We();
              return o(r, () => f("Step 1")), r;
            })(),
            (() => {
              var r = Ye(),
                s = r.firstChild,
                m = s.nextSibling;
              return (
                (r.$$click = () => {
                  n.phoneFlag ||
                    (A.pop(), t("/settings/verification/phone-bind"));
                }),
                o(r, l(Ft, { class: "flex-none" }), s),
                o(s, () => f("Phone Verification")),
                o(
                  m,
                  l(Ae, {
                    get fallback() {
                      return (() => {
                        var i = He();
                        return o(i, () => f("Go to Complete") + " ->"), i;
                      })();
                    },
                    get children() {
                      return [
                        l(ne, {
                          get when() {
                            return n.pending;
                          },
                          get children() {
                            return [
                              l(k, { name: "Loading" }),
                              (() => {
                                var i = fe();
                                return o(i, () => f("Review Pending")), i;
                              })(),
                            ];
                          },
                        }),
                        l(ne, {
                          get when() {
                            return n.phoneFlag;
                          },
                          get children() {
                            return [
                              l(k, { name: "Check" }),
                              (() => {
                                var i = fe();
                                return o(i, () => f("Completed")), i;
                              })(),
                            ];
                          },
                        }),
                      ];
                    },
                  })
                ),
                E(
                  (i) => {
                    var u = U(
                        "flex items-center rounded-xl bg-layer5 px-3 py-4"
                      ),
                      h = U(
                        "ml-auto flex items-center",
                        n.phoneFlag && "text-brand"
                      );
                    return (
                      u !== i.e && R(r, (i.e = u)),
                      h !== i.t && R(m, (i.t = h)),
                      i
                    );
                  },
                  { e: void 0, t: void 0 }
                ),
                r
              );
            })(),
            (() => {
              var r = We();
              return o(r, () => f("Step 2")), r;
            })(),
            (() => {
              var r = Ye(),
                s = r.firstChild,
                m = s.nextSibling;
              return (
                (r.$$click = () => {
                  !n.emailFlag && !n.pending && A.pop(), t("/quests/bindemail");
                }),
                o(r, l(k, { class: "flex-none", name: "EmailVerify" }), s),
                o(s, () => f("E-mail Verification")),
                o(
                  m,
                  l(Ae, {
                    get fallback() {
                      return (() => {
                        var i = He();
                        return o(i, () => f("Go to Complete") + " ->"), i;
                      })();
                    },
                    get children() {
                      return [
                        l(ne, {
                          get when() {
                            return n.pending;
                          },
                          get children() {
                            return [
                              l(k, { name: "Loading" }),
                              (() => {
                                var i = fe();
                                return o(i, () => f("Review Pending")), i;
                              })(),
                            ];
                          },
                        }),
                        l(ne, {
                          get when() {
                            return n.emailFlag;
                          },
                          get children() {
                            return [
                              l(k, { name: "Check" }),
                              (() => {
                                var i = fe();
                                return o(i, () => f("Completed")), i;
                              })(),
                            ];
                          },
                        }),
                      ];
                    },
                  })
                ),
                E(
                  (i) => {
                    var u = U(
                        "flex items-center rounded-xl bg-layer5 px-3 py-4"
                      ),
                      h = U(
                        "ml-auto flex items-center",
                        n.emailFlag || (n.pending && "text-brand")
                      );
                    return (
                      u !== i.e && R(r, (i.e = u)),
                      h !== i.t && R(m, (i.t = h)),
                      i
                    );
                  },
                  { e: void 0, t: void 0 }
                ),
                r
              );
            })(),
          ];
        },
      })
    );
  },
  Ft = (e) =>
    (() => {
      var t = Rt();
      return E(() => D(t, "class", e.class)), t;
    })();
z(["click"]);
var qe = v('<div class="mb-1 font-semibold text-secondary mt-5">');
function Ut(e, t, n) {
  return !(e && t) && n
    ? (A.push(() => l(Mt, { phoneFlag: e, emailFlag: t })), !1)
    : !0;
}
function Kt(e, t) {
  const n = () => e() === "CADFIAT" && t() === "Gigadat",
    [a, r] = De({
      phoneloading: !0,
      phoneVerified: !1,
      phone: "",
      email: F.email,
      emailVerified: F.emailVerified,
    });
  return (
    j(() => {
      n() &&
        (F.emailVerified
          ? r(
              S((u) => {
                (u.phoneloading = !0),
                  (u.email = F.email),
                  (u.emailVerified = F.emailVerified);
              })
            )
          : r(S((u) => (u.phoneloading = !0))),
        ge()
          .post("/account/phone/get/")
          .then((u) => {
            r(
              S((h) => {
                (h.phone = u), (h.phoneloading = !1), (h.phoneVerified = !!u);
              })
            );
          })
          .catch(() => {
            r(S((u) => (u.phoneloading = !1)));
          }));
    }),
    {
      view: () =>
        l(Ue, {
          get when() {
            return n();
          },
          get children() {
            return [
              l(Ue, {
                get when() {
                  return a.emailVerified;
                },
                get children() {
                  return [
                    (() => {
                      var u = qe();
                      return o(u, () => f("Email")), u;
                    })(),
                    l(xe, {
                      readOnly: !0,
                      get value() {
                        return a.email;
                      },
                      class: "text-base font-semibold",
                      onChange: (u) =>
                        r(
                          S((h) => {
                            h.email = u;
                          })
                        ),
                    }),
                  ];
                },
              }),
              l(Ae, {
                get children() {
                  return [
                    l(ne, {
                      get when() {
                        return a.phoneloading;
                      },
                      get children() {
                        return l(_t, {});
                      },
                    }),
                    l(ne, {
                      get when() {
                        return a.phoneVerified;
                      },
                      get children() {
                        return [
                          (() => {
                            var u = qe();
                            return o(u, () => f("Phone")), u;
                          })(),
                          l(xe, {
                            readOnly: !0,
                            class: "text-base font-semibold",
                            onChange: (u) =>
                              r(
                                S((h) => {
                                  h.phone = u;
                                })
                              ),
                            get value() {
                              return a.phone;
                            },
                          }),
                        ];
                      },
                    }),
                  ];
                },
              }),
            ];
          },
        }),
      data: () => (n() ? { email: a.email, mobile: a.phone } : null),
      onVerified: () => Ut(a.phoneVerified, a.emailVerified, n()),
    }
  );
}
const Se = "/modules/wallet2/assets/icon_1-118ac1e0.png",
  ke =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAA1teXP8meAAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAADX0lEQVRYCe1XzW7TQBCeXdtp/gqpEKp6QQapFYIDKS/QgsQdnoAWCSROjbijpm8QuHKI+gTwCC1HDtQXLhVSXQlRIYSaQtKmcXaHWad2XCdObB+44JWsXc/O9+3nmd31LkBWsghkEcgi8H9HgMX9/IOKWSl1DFNoWkVhuvmudbNlt+Lgj5vViuGAiQxcbF8Ha27dioWdKFCJKvZyGwiwBgzMUTFoSYBdJpzGQte2g/1KVB74hpS4RnYz2Oe2GVgo2a7jyMbcS8se6b8wRAr8UVzaJFE1Eud+dRSBZ2cI9fnT/S31fta8vykk1og8FpZzVi+sf3axHp9Xjwg8yt82mSbeA7Cq5xS31spolV4XAQs8MZaCYfXO8Uk4mpcEqpQWerm98emcLJMZCJVHfeDXGDjLVwD1S9STwcNeu8dxOTg/+bAPIO/kGmnEKY5SVYBWQmBdCfp+J0ibpG3OSN4MAnyBR6XFNfrmp8HOuO0ZU0KeHq/wXw6wk773mqhGwMd/3lVXPZAvkCHb9IxJ6+IdMQLRD89GbHENmjbU4gr8Vlqspk2tVpFuasODc4pg6igirHpRdAXqkq+GB4j7blynjSii8Ha6NCs6mm7uTjBIMcOViDGmmicJZJ3R1E8lvHBgHO6ppicw1oY6jpznxlkHNrWi0xba+E2FHQhMy/IPcK5ARHaYdiwxactLt1m7Umhmn6iGK5C2GCutwH6LpnNEkVf1iJ7pZkTYUV6DCGoitUAxUaAxXUmUR1DgQvvrDgDSk7w4PzmoJ1wwzwHLWtgc9/2g/MJyg+YzI8OtuOiw3+kXn8bvEjcKfjtpgwe0+MwqirS0PyQlU/4qgufffSoQ8zn3ScNFmWwWnlnbHnbISpbTXG8dEGyvM0nd/qSDWtEqteJWMQk06HtQ5PAqaLgkUN0xUPIHNEziRYMOwO+PhuXcnbVSnQUZ2+M9fMhCd5XIPeKovFSnlMc64RBJSzJ4s9Der6uvpx99nY7xsbB0kTpGgW9nn1suVuGDJVKgclLHf9REjcJM/+oxVwCaDshhu6v3GuEb3lmzagoBNaJZYWwMFtCWErbLOjTCUYstMOiorgP5vl5VNg1Zq2M4dlhU0D/YRrrh0cHGxVJWWiUD7EmigtisnUUgi0AWgf89An8BPBYe8dDGK9UAAAAASUVORK5CYII=",
  jt = "/modules/wallet2/assets/safety2-a0bcd13b.png";
var Lt = v(
    "<a href=https://wallet.piastrix.com/ target=_blank>https://wallet.piastrix.com/"
  ),
  Wt = v("<div><div></div><div></div><div>"),
  Xe = v("<b>CPF number"),
  Yt = v("<div>"),
  Y = v("<span>"),
  Ht = v(
    '<div class="flex items-center rounded-xl bg-success/10 p-3 mt-5"><img class="mr-1 h-10 w-10"alt=""><div class="font-semibold text-secondary">'
  );
function qt(e) {
  return l(_, {
    get when() {
      return e.channel === "PiastrixWallet";
    },
    get fallback() {
      return l(I, {
        class: "mt-5",
        get children() {
          var t = Wt(),
            n = t.firstChild,
            a = n.nextSibling,
            r = a.nextSibling;
          return (
            o(n, () =>
              f("1. Your transfer amount has to MATCH the submission amount.")
            ),
            o(a, () =>
              f("2. Each Order ID can ONLY be used once to avoid duplicates.")
            ),
            o(r, () =>
              f(
                "3. DO NOT save and deposit to previous's bank account. Please follow the deposit guideline to make deposit, otherwise your deposit will be missing."
              )
            ),
            t
          );
        },
      });
    },
    get children() {
      return l(I, {
        class: "mt-5",
        type: "info",
        get children() {
          return [
            "Для пополнения методом Piastrix, у вас должен быть Piastrix аккаунт. Если у вас нет аккаунта, перейдите по данной ссылке для регистрации",
            Lt(),
          ];
        },
      });
    },
  });
}
function Xt(e) {
  return l(Ne, {
    get children() {
      return [
        l(C, {
          get when() {
            return e.currency === "BRLFIAT" && e.channel === "BetCat-PIX";
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Yt();
                return (
                  o(
                    t,
                    l(Ie, {
                      i18nKey: "wallet.trans.desc43",
                      get children() {
                        return [
                          "Please make sure the ",
                          Xe(),
                          " you entered here matches the ",
                          Xe(),
                          " you will use to make this transfer. Otherwise, you may lose your funds or the transaction may fail.",
                        ];
                      },
                    })
                  ),
                  t
                );
              },
            });
          },
        }),
        l(C, {
          get when() {
            return e.kycRequirement === 1;
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Y();
                return (
                  o(t, () =>
                    f("Please verify your identity before making a deposit.")
                  ),
                  t
                );
              },
            });
          },
        }),
        l(C, {
          get when() {
            return e.kycRequirement === 2;
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Y();
                return (
                  o(t, () =>
                    f(
                      "Please verify your identity and phone before making a deposit."
                    )
                  ),
                  t
                );
              },
            });
          },
        }),
        l(C, {
          get when() {
            return e.kycRequirement === 3;
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Y();
                return (
                  o(t, () =>
                    f(
                      "Please verify your identity and mail before making a deposit."
                    )
                  ),
                  t
                );
              },
            });
          },
        }),
        l(C, {
          get when() {
            return e.kycRequirement === 4;
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Y();
                return (
                  o(t, () =>
                    f(
                      "Please verify your identity and phone and mail before making a deposit."
                    )
                  ),
                  t
                );
              },
            });
          },
        }),
        l(C, {
          get when() {
            return e.kycRequirement === 5;
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Y();
                return (
                  o(t, () =>
                    f("Please verify your identity before making a deposit.")
                  ),
                  t
                );
              },
            });
          },
        }),
        l(C, {
          get when() {
            return e.kycRequirement === 6;
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Y();
                return (
                  o(t, () =>
                    f(
                      "Please verify your identity and phone before making a deposit."
                    )
                  ),
                  t
                );
              },
            });
          },
        }),
        l(C, {
          get when() {
            return e.kycRequirement === 7;
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Y();
                return (
                  o(t, () =>
                    f(
                      "Please verify your identity and mail before making a deposit."
                    )
                  ),
                  t
                );
              },
            });
          },
        }),
        l(C, {
          get when() {
            return e.kycRequirement === 8;
          },
          get children() {
            return l(I, {
              class: "mt-5",
              type: "info",
              get children() {
                var t = Y();
                return (
                  o(t, () =>
                    f(
                      "Please verify your identity and phone and mail before making a deposit."
                    )
                  ),
                  t
                );
              },
            });
          },
        }),
      ];
    },
  });
}
function Gt() {
  return (() => {
    var e = Ht(),
      t = e.firstChild,
      n = t.nextSibling;
    return (
      D(t, "src", jt),
      o(n, () =>
        f(
          "You will be redirected to a third-party site verified by __ENV_HOST__ for a secure and trustworthy browsing experience"
        )
      ),
      e
    );
  })();
}
var Qt = v("<div class=txt>"),
  Jt = v("<div class=dp-btn> ->"),
  zt = v("<div class=time-wrap>"),
  Zt = v("<div>H:<!>M:<!>S");
function en(e) {
  const t = e.frequencyResult;
  if (!t) return !0;
  const n = t.depositStatus;
  return (
    n >= 2 &&
      A.push(() =>
        l(tn, {
          data: t,
          get currency() {
            return e.currency;
          },
        })
      ),
    n < 2
  );
}
function tn({ data: e, currency: t }) {
  const n = M.getAlias(t),
    a = q();
  function r() {
    let i = f(
      "You just made a deposit using this payment method. Please complete previous transaction or change a payment method."
    );
    return (
      e.depositStatus === 3
        ? (i = f(
            "You just made a deposit for __alisName__, unfortunately you cannot make more than __number__ transactions within 15 min. Please complete previous transaction or change currency.",
            { alisName: n, number: "10" }
          ))
        : e.depositStatus === 4 &&
          (i = f(
            "You just made a deposit for __alisName__, unfortunately you cannot make more than __number__ transactions within 1 hour. Please complete previous transaction or change currency.",
            { alisName: n, number: "40" }
          )),
      i
    );
  }
  const s = () => {
      if (e.latestOrderId) {
        A.pop();
        const i = e.latestOrderId.startsWith("F-")
          ? e.latestOrderId
          : `F-${e.latestOrderId}`;
        a(`/wallet/deposit-detail/?orderId=${i}/`);
      }
    },
    m = Je(() => Number(e.nextDepositTime));
  return l(ae, {
    get children() {
      return [
        (() => {
          var i = Qt();
          return o(i, r), i;
        })(),
        (() => {
          var i = Jt(),
            u = i.firstChild;
          return (
            (i.$$click = s), o(i, () => f("Continue Deposit Process"), u), i
          );
        })(),
        (() => {
          var i = zt();
          return (
            o(i, () => f("Re-try in"), null),
            o(
              i,
              l(_, {
                get when() {
                  return m();
                },
                keyed: !0,
                children: (u) => {
                  const h = u.days * 24 + u.hours,
                    d = h < 10 ? "0" + h : h,
                    g = u.minutes < 10 ? "0" + u.minutes : u.minutes,
                    c = u.seconds < 10 ? "0" + u.seconds : u.seconds;
                  return (() => {
                    var y = Zt(),
                      b = y.firstChild,
                      x = b.nextSibling,
                      L = x.nextSibling,
                      X = L.nextSibling;
                    return X.nextSibling, o(y, d, b), o(y, g, x), o(y, c, X), y;
                  })();
                },
              }),
              null
            ),
            i
          );
        })(),
      ];
    },
  });
}
z(["click"]);
function nn(e, t) {
  return (n) =>
    e === "KRWFIAT"
      ? (Math.ceil(n / 1e4) * 1e4).toString()
      : (e === "XOFFIAT" && t === "EnovePay_XOF") ||
        (e === "XAFFIAT" && t === "EnovePay_XAF")
      ? (Math.ceil(n / 5) * 5).toString()
      : String(e === "CADFIAT" ? n : Math.floor(n));
}
var rn = v("<div id=widget-container>");
function an(e) {
  const [t, n] = K(!1),
    a = q();
  let r;
  function s() {
    const i = e.orderId.startsWith("F-") ? e.orderId : `F-${e.orderId}`;
    a(`/wallet/deposit-detail?orderId=${i}/`);
  }
  function m() {
    r && r.close(), A.pop();
  }
  return (
    Ee(() => {
      const i = document.createElement("script");
      return (
        (i.src = ze.isDev
          ? "https://demo.mifinity.com/widgets/sgpg.js?58190a411dc3"
          : "https://secure.mifinity.com/widgets/sgpg.js?58190a411dc3"),
        (i.async = !0),
        (i.onload = () => {
          if (typeof window.showPaymentIframe == "function") {
            n(!0);
            const u = window.showPaymentIframe("widget-container", {
              token: e.paytoken,
              complete: function () {
                setTimeout(function () {
                  u.close();
                }, 5e3);
              },
              success: function () {
                s(), u.close(), A.pop();
              },
              cancel: function () {
                u.close(), A.pop();
              },
            });
            r = u;
          } else
            console.error(
              "showPaymentIframe is not defined. Check if the script is loaded correctly."
            );
        }),
        document.body.appendChild(i),
        () => {
          i.parentNode && i.parentNode.removeChild(i);
        }
      );
    }),
    l(ae, {
      close: !1,
      get children() {
        return [
          l(J, {
            class: "r-4 t-4 absolute h-5 w-5",
            onClick: m,
            get children() {
              return l(k, { name: "Close" });
            },
          }),
          l(_, {
            get when() {
              return t();
            },
            get fallback() {
              return l(Ze, {});
            },
            get children() {
              return rn();
            },
          }),
        ];
      },
    })
  );
}
var ln = v('<img class="h-20 mx-auto"alt="">'),
  sn = v(
    '<div class="text-base mt-5"><div class="mt-4 flex items-center justify-between"><div class="font-semibold text-secondary"></div><div class=font-semibold><img class=h-8></div></div><div class="mt-4 flex items-center justify-between"><div class="font-semibold text-secondary"></div><div class="flex items-center font-semibold justify-end"><button class=ml-1></button></div></div><div class="mt-4 flex items-center justify-between"><div class="font-semibold text-secondary"></div><div class=font-semibold></div></div><div class="mt-4 flex items-center justify-between"><div class="font-semibold text-secondary"></div><div class=font-semibold></div></div><div class="mt-4 flex items-center justify-between"><div class="font-semibold text-secondary"></div><div class="amount font-semibold text-brand"> '
  ),
  on = v("<div>:<!>:"),
  cn = v(
    '<div class="mt-4 rounded-xl bg-layer4 p-4"><div class="text-center font-semibold"></div><div class="font-semibold text-secondary my-1.5">(<!>)'
  ),
  un = v("<div class=opt>opt: <b></b> ");
function dn(e) {
  const t = q(),
    { data: n, expiredTime: a, currency: r, orderId: s } = e,
    { securityCode: m, opt: i } = n,
    u = (c) => {
      mt.copyToClipboard(c), Q.success(f("Copied"));
    },
    h = () => {
      A.pop();
      const c = e.orderId.startsWith("F-") ? e.orderId : `F-${e.orderId}`;
      t(`/wallet/deposit-detail/?orderId=${c}`);
    },
    d = ze.serverTime.toLocaleString(),
    g = Je(() => Number(a));
  return l(ae, {
    get title() {
      return f("Deposit is in progress");
    },
    get children() {
      return [
        (() => {
          var c = ln();
          return D(c, "src", Bt), c;
        })(),
        (() => {
          var c = sn(),
            y = c.firstChild,
            b = y.firstChild,
            x = b.nextSibling,
            L = x.firstChild,
            X = y.nextSibling,
            w = X.firstChild,
            T = w.nextSibling,
            W = T.firstChild,
            ie = X.nextSibling,
            de = ie.firstChild,
            V = de.nextSibling,
            le = ie.nextSibling,
            se = le.firstChild,
            $ = se.nextSibling,
            Ve = le.nextSibling,
            O = Ve.firstChild,
            G = O.nextSibling,
            Oe = G.firstChild;
          return (
            o(b, () => f("Payment Method")),
            o(w, () => f("Order ID")),
            (T.$$click = () => u(s)),
            o(T, s, W),
            o(W, l(k, { name: "Copy" })),
            o(de, () => f("Time")),
            o(V, d),
            o(se, () => f("Expires in")),
            o(
              $,
              l(_, {
                get when() {
                  return g();
                },
                keyed: !0,
                children: (B) => {
                  const be = B.days * 24 + B.hours,
                    nt = be < 10 ? "0" + be : be,
                    rt = B.minutes < 10 ? "0" + B.minutes : B.minutes,
                    at = B.seconds < 10 ? "0" + B.seconds : B.seconds;
                  return (() => {
                    var oe = on(),
                      Be = oe.firstChild,
                      Re = Be.nextSibling;
                    return (
                      Re.nextSibling,
                      o(oe, nt, Be),
                      o(oe, rt, Re),
                      o(oe, at, null),
                      oe
                    );
                  })();
                },
              })
            ),
            o(O, () => f("Deposit amount")),
            o(G, () => e.amount, Oe),
            o(G, () => M.getAlias(r), null),
            E(() => D(L, "src", e.icon)),
            c
          );
        })(),
        N(
          () =>
            m &&
            (() => {
              var c = cn(),
                y = c.firstChild,
                b = y.nextSibling,
                x = b.firstChild,
                L = x.nextSibling;
              return (
                L.nextSibling,
                o(y, () => f("Security Code")),
                o(
                  b,
                  () => f("Please input this security code at payment page"),
                  L
                ),
                o(c, l(bt, { value: m }), null),
                c
              );
            })()
        ),
        N(
          () =>
            i &&
            (() => {
              var c = un(),
                y = c.firstChild,
                b = y.nextSibling;
              return (
                b.nextSibling,
                (c.$$click = () => u(i)),
                o(b, i),
                o(c, l(k, { name: "Copy" }), null),
                c
              );
            })()
        ),
        l(J, {
          class: "w-full my-4",
          type: "brand",
          onClick: h,
          get children() {
            return f("I’ve Made Deposit");
          },
        }),
        N(
          () =>
            N(() => !!e.continueDeposit)() &&
            l(J, {
              class: "w-full my-5",
              type: "second",
              get onClick() {
                return e.continueDeposit;
              },
              get children() {
                return f("Continue Deposit Process");
              },
            })
        ),
      ];
    },
  });
}
z(["click"]);
var mn = v('<div class="add-btn cursor-pointer">'),
  fn = v('<div><img alt=""><div class=nums>'),
  gn = v("<div class=pending>"),
  hn = v("<div>"),
  vn = v('<div class=card><img alt=""><div class=nums>'),
  yn = v('<div class=mt-5><label class="mb-1 font-semibold text-secondary">');
function bn(e) {
  const t = q(),
    n = {
      label: "",
      value: {
        applyId: "",
        bindStatus: "BIND",
        cardAssociation: "",
        accountId: "",
        accountNumber: "",
        cardId: "",
        cardNumber: "",
        cardType: "DEBIT",
        firstName: "",
        lastName: "",
      },
    },
    a = () => {
      var d;
      return (d = e.item.mapInfo) == null ? void 0 : d.length;
    },
    [r] = he(() => Te()),
    s = P(() => {
      const d = e.item.mapInfo
          ? e.item.mapInfo.map((c) => ({ label: c.cardNumber, value: c }))
          : [],
        g = ve(
          d.filter((c) => c.value.cardType === "DEBIT"),
          [(c) => (c.value.bindStatus === "BIND" ? 0 : 1), "bindStatus"]
        );
      return g.push(n), g;
    }),
    m = P(() => {
      var d;
      return (d = s().find((g) => g.value.cardId === e.value)) != null ? d : n;
    });
  j(() => {
    m() && m().value.applyId
      ? e.setError("")
      : e.setError(f("You need to add payment method before making a deposit"));
  });
  function i(d) {
    var c, y;
    const g = d.cardId;
    g
      ? d.bindStatus === "BIND" && e.onChange(g)
      : ue(r())
      ? t("/wallet/card")
      : t(
          `/wallet/intercept?levelname=${
            (y = (c = r()) == null ? void 0 : c[0]) == null
              ? void 0
              : y.levelName
          }`
        );
  }
  const u = (d) => {
      const g = d().value.bindStatus === "PENDING";
      return l(_, {
        get when() {
          return !d().label;
        },
        get fallback() {
          return (() => {
            var c = fn(),
              y = c.firstChild,
              b = y.nextSibling;
            return (
              R(c, `card ${g && "disabled"}`),
              o(b, () => d().label),
              o(
                c,
                g &&
                  (() => {
                    var x = gn();
                    return o(x, () => f("Pending")), x;
                  })(),
                null
              ),
              E(() =>
                D(y, "src", d().value.cardAssociation === "VISA" ? Se : ke)
              ),
              c
            );
          })();
        },
        get children() {
          var c = mn();
          return (
            (c.$$click = () => {
              var y, b;
              ue(r())
                ? t("/wallet/card")
                : t(
                    `/wallet/intercept?levelname=${
                      (b = (y = r()) == null ? void 0 : y[0]) == null
                        ? void 0
                        : b.levelName
                    }`
                  );
            }),
            o(c, l(k, { name: "Close" }), null),
            o(
              c,
              (() => {
                var y = N(() => !!a());
                return () => (y() ? f("Add card") : f("Add new card"));
              })(),
              null
            ),
            c
          );
        },
      });
    },
    h = (d) =>
      l(_, {
        get when() {
          return !d().label;
        },
        get fallback() {
          return (() => {
            var g = vn(),
              c = g.firstChild,
              y = c.nextSibling;
            return (
              o(y, () => d().label),
              E(() =>
                D(c, "src", d().value.cardAssociation === "VISA" ? Se : ke)
              ),
              g
            );
          })();
        },
        get children() {
          var g = hn();
          return o(g, () => f("Please add card")), g;
        },
      });
  return (() => {
    var d = yn(),
      g = d.firstChild;
    return (
      o(g, () => f("Withdraw With")),
      o(
        d,
        l(ce, {
          class: "w-full bg-input_bright",
          get value() {
            return m();
          },
          get options() {
            return s();
          },
          onChange: (c) => i(c.value),
          labelRender: h,
          optionRender: u,
          children: (c) => N(() => c().label),
        }),
        null
      ),
      d
    );
  })();
}
z(["click"]);
var _n = v(
  '<div class=select-wrap><div class="mb-1 font-semibold text-secondary mt-5">'
);
function wn(e) {
  const t = P(() => {
      let a = [];
      return (
        e.item.type === "select" && e.item.options
          ? (a = e.item.options.map((r) => ({ label: r, value: r })))
          : e.item.type === "map_select" &&
            e.item.mapOptions &&
            (a = e.item.mapOptions.map((r) => {
              const s = Object.keys(r)[0];
              return { value: s, label: r[s] };
            })),
        a
      );
    }),
    n = () => t().find((a) => a.value === e.value);
  return (() => {
    var a = _n(),
      r = a.firstChild;
    return (
      o(r, () => e.label),
      o(
        a,
        l(ce, {
          class: "w-full bg-input_bright",
          get disabled() {
            return e.item.readOnly;
          },
          get value() {
            return n();
          },
          get options() {
            return t();
          },
          children: (s) =>
            N(() => {
              var m;
              return ((m = s()) == null ? void 0 : m.label) || "";
            }),
          onChange: (s) => e.onChange((s == null ? void 0 : s.value) || ""),
        }),
        null
      ),
      a
    );
  })();
}
var $n = v('<div class="mb-1 font-semibold text-secondary mt-5">'),
  pn = v("<div class=text-error>");
function An(e, t, n) {
  let a = "";
  const r = n.validPatterns;
  if (r.length > 0)
    if (n.parentValueKey) {
      const s = e[n.parentValueKey],
        m = r.find((i) => i.validKey === s);
      m && (a = new RegExp(m.validRule).test(t) ? "" : m.validMessage);
    } else {
      const s = r[0];
      a = new RegExp(s.validRule).test(t) ? "" : s.validMessage;
    }
  return a;
}
function xn(e) {
  const [t, n] = K("");
  Ee(() => {
    e.value && a(e.value);
  });
  const a = (r) => {
    const s = An(e.data, r, e.item);
    n(s), e.setError(s), e.onChange(r);
  };
  return [
    (() => {
      var r = $n();
      return o(r, () => e.item.label), r;
    })(),
    l(xe, {
      get type() {
        return e.item.valueKey === "vegaUserPassword" ? "password" : void 0;
      },
      class: "text-base font-semibold bg-input_bright",
      required: !0,
      get readOnly() {
        return e.item.readOnly;
      },
      get value() {
        return e.value;
      },
      onChange: a,
    }),
    l(_, {
      get when() {
        return t();
      },
      get children() {
        var r = pn();
        return o(r, t), r;
      },
    }),
  ];
}
var Cn = v(
    '<div><div class="mb-1 flex items-center mt-5 justify-end"><div class=ml-1></div></div><div>'
  ),
  In = v(
    '<div class="flex items-center justify-between"><img class=h-7 alt=""><div class=nums>'
  );
function Sn(e) {
  const t = () => (e.item.mapInfo ? e.item.mapInfo : []),
    n = q(),
    a = ve(
      t().filter((s) => s.bindStatus === "BIND"),
      [(s) => (s.cardType === "DEBIT" ? 0 : 1), "cardType"]
    ),
    r = () => a.length === 0;
  return (
    j(() => {
      r() &&
        e.setError(f("You need to add payment method before making a deposit"));
    }),
    (() => {
      var s = Cn(),
        m = s.firstChild,
        i = m.firstChild,
        u = m.nextSibling;
      return (
        o(
          s,
          l(I, {
            type: "info",
            class: "mt-5",
            get children() {
              return f(
                "Please make sure to pay with the cards you have on file, otherwise you may lose your money."
              );
            },
          }),
          m
        ),
        (m.$$click = () => n("/wallet/card")),
        o(m, l(k, { class: "!h-3 !w-3 rotate-45", name: "Close" }), i),
        o(
          i,
          (() => {
            var h = N(() => !!r());
            return () => (h() ? f("Add card") : f("Add new card"));
          })()
        ),
        o(
          u,
          l(Pe, {
            each: a,
            children: (h) =>
              (() => {
                var d = In(),
                  g = d.firstChild,
                  c = g.nextSibling;
                return (
                  o(c, () => h.cardNumber),
                  E(() => D(g, "src", h.cardAssociation === "VISA" ? Se : ke)),
                  d
                );
              })(),
          })
        ),
        E(() =>
          R(
            u,
            U(
              "overflow-y-auto rounded-lg p-2 max-h-24 min-h-12 bg-input_bright"
            )
          )
        ),
        s
      );
    })()
  );
}
z(["click"]);
const Ge =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAAKNyObAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgB7ZfhbYMwEIXPVf+XERihIzBCNyidoN2gI7QbpCO0Ezgj0AlggyQTXN4lRrKIEdaJxI7kT3qynbPRy8Ghg2glmLmBrFNLqYGJCvqEdnxJD22gmm6Jl6VY7FWzuZClWPpVs6nIUiyWNdnkdbIUS88x2eTrZSkWy142DRYVxnfoA6ooDwZoK+YaTCxlyANlzHhbX9z6FWooLb/Qn0yM/yufK0aevSdKwwH6NsYMsjBzuzhQ2uMhl+1p8ewR38+dXYqP115EDofq3Iu3odeAF7eBeOvFQ9RTH1kXRDGnpZjTUsxpKea0FHNaijkteXfC/sK1LV+QjM+B/Vs31k4+0qt1bi5np/1e5/YIDc1f+y3Y28HcD6dnM/p5nPgbvH+Qin+6B07PHJ9b7Jryoisf1VqkIKS8B8qQI0l9L+fXXd5UAAAAAElFTkSuQmCC";
var kn = v(
    '<div><img class="w-4 h-4 mr-2"alt=""><div class="text-primary font-semibold text-xs">'
  ),
  Nn = v('<div class="ml-2 text-warning_brighter">'),
  En = v("<div>"),
  Pn = v('<img class="w-4 h-4 mr-2.5"alt="">'),
  Dn = v('<div class="text-primary font-semibold text-xs">'),
  Tn = v('<div class=mt-5><div class="mb-2 font-semibold text-secondary">');
function Vn(e) {
  const t = q(),
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
    [a] = he(() => Te()),
    r = () => {
      var d;
      return (d = e.item.mapInfo) == null ? void 0 : d.length;
    },
    s = P(() => {
      const d = e.item.mapInfo
          ? e.item.mapInfo.map((c) => ({ label: c.accountNumber, value: c }))
          : [],
        g = ve(d, [
          (c) => (c.value.bindStatus === "BIND" ? 0 : 1),
          "bindStatus",
        ]);
      return g.push(n), g;
    }),
    m = P(() => {
      var d;
      return (d = s().find(
        (g) =>
          g.value.accountId === e.value &&
          g.value.bindStatus.toLocaleUpperCase() === "BIND"
      )) != null
        ? d
        : n;
    });
  j(() => {
    m() && m().value.applyId
      ? e.setError("")
      : e.setError(f("You need to add payment method before making a deposit"));
  });
  function i(d) {
    var c, y;
    const g = d.accountId;
    g
      ? d.bindStatus === "BIND" && e.onChange(g)
      : ue(a())
      ? t(`/wallet/bank?currency=${Ke.store.currency}`)
      : t(
          `/wallet/intercept?levelname=${
            (y = (c = a()) == null ? void 0 : c[0]) == null
              ? void 0
              : y.levelName
          }`
        );
  }
  const u = (d) => {
      const g = d().value.bindStatus.toLocaleUpperCase() === "PENDING";
      return l(_, {
        get when() {
          return !d().value.accountNumber;
        },
        get fallback() {
          return (() => {
            var c = kn(),
              y = c.firstChild,
              b = y.nextSibling;
            return (
              (c.$$click = (x) => {
                i(d().value), A.pop();
              }),
              R(c, `bg-layer4 mb-3 rounded-lg center h-12 ${g && "disabled"}`),
              D(y, "src", Ge),
              o(b, () => d().value.accountNumber),
              o(
                c,
                g &&
                  (() => {
                    var x = Nn();
                    return o(x, () => f("Pending")), x;
                  })(),
                null
              ),
              c
            );
          })();
        },
        get children() {
          return l(J, {
            type: "brand",
            onClick: () => {
              var c, y;
              ue(a())
                ? t(`/wallet/bank?currency=${Ke.store.currency}`)
                : t(
                    `/wallet/intercept?levelname=${
                      (y = (c = a()) == null ? void 0 : c[0]) == null
                        ? void 0
                        : y.levelName
                    }`
                  ),
                A.pop();
            },
            class: "w-full text-base font-semibold center",
            get children() {
              return N(() => !!r())()
                ? f("Add Bank Account")
                : f("Add New Bank Account");
            },
          });
        },
      });
    },
    h = (d) =>
      l(_, {
        get when() {
          return !d().label;
        },
        get fallback() {
          return [
            (() => {
              var g = Pn();
              return D(g, "src", Ge), g;
            })(),
            (() => {
              var g = Dn();
              return o(g, () => d().label), g;
            })(),
          ];
        },
        get children() {
          var g = En();
          return o(g, () => f("Please add bank account")), g;
        },
      });
  return (() => {
    var d = Tn(),
      g = d.firstChild;
    return (
      o(g, () => f("Pay With")),
      o(
        d,
        l(ce, {
          get value() {
            return m();
          },
          get options() {
            return s();
          },
          onChange: (c) => i(c.value),
          labelRender: h,
          optionRender: u,
          children: (c) => N(() => c().label),
          class: "w-full bg-input_bright",
        }),
        null
      ),
      d
    );
  })();
}
z(["click"]);
function On(e) {
  const t = {};
  for (const n in e)
    typeof e[n] == "string" ? (t[n] = e[n].trim()) : (t[n] = e[n]);
  return t;
}
function $e(e, t) {
  const n = {};
  return e.reduce(
    (a, r) => (
      (a[r.valueKey] = t ? "" : r.defaultValue),
      (a[r.commonKey] = t ? "" : r.defaultValue),
      a
    ),
    n
  );
}
function Bn(e, t) {
  return e && typeof e == "string" ? new RegExp(e).test(t) : !0;
}
function Rn(e) {
  const [t, n] = De({ todos: $e(e.list()) }),
    a = { selectErrorTxt: "", listErrorTxt: "" };
  let r = {};
  j(() => {
    n(S((i) => (i.todos = $e(e.list())))),
      (a.selectErrorTxt = ""),
      (a.listErrorTxt = "");
    for (const i in r) r.hasOwnProperty(i) && delete r[i];
  });
  function s() {
    n($e(e.list(), !0));
  }
  return {
    kycDom: () =>
      l(Pe, {
        get each() {
          return e.list();
        },
        children: (i) => {
          const u = Bn(i.scriptRuleStr, String(e.orderAmount));
          function h(d) {
            n(
              S((g) => {
                (g.todos[i.valueKey] = d), (g.todos[i.commonKey] = d);
              })
            );
          }
          return l(_, {
            when: u,
            get children() {
              return l(Ne, {
                get fallback() {
                  return l(xn, {
                    get data() {
                      return t.todos;
                    },
                    item: i,
                    get value() {
                      return t.todos[i.valueKey];
                    },
                    onChange: h,
                    setError: (d) => (r[i.valueKey] = d),
                  });
                },
                get children() {
                  return [
                    l(C, {
                      get when() {
                        return i.type === "bind_card_select";
                      },
                      get children() {
                        return l(bn, {
                          item: i,
                          get value() {
                            return t.todos[i.valueKey];
                          },
                          onChange: h,
                          setError: (d) => (a.selectErrorTxt = d),
                        });
                      },
                    }),
                    l(C, {
                      get when() {
                        return i.type === "bind_account_select";
                      },
                      get children() {
                        return l(Vn, {
                          item: i,
                          get value() {
                            return t.todos[i.valueKey];
                          },
                          onChange: h,
                          setError: (d) => (a.selectErrorTxt = d),
                        });
                      },
                    }),
                    l(C, {
                      get when() {
                        return i.type === "bind_card_list";
                      },
                      get children() {
                        return l(Sn, {
                          item: i,
                          setError: (d) => (a.listErrorTxt = d),
                        });
                      },
                    }),
                    l(C, {
                      get when() {
                        return (
                          (i.type === "select" && i.options) ||
                          (i.type === "map_select" && i.mapOptions)
                        );
                      },
                      get children() {
                        return l(wn, {
                          item: i,
                          get value() {
                            return t.todos[i.valueKey];
                          },
                          onChange: h,
                          get label() {
                            return i.label;
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
    kycData: () => On(t.todos),
    cardVerify: a,
    onClear: s,
    inputVerify: r,
  };
}
function Mn(e, t) {
  try {
    if (
      t.rechargeValidNum >= 4 ||
      (t.bonusItems.length === 0 && !t.specialDeposit)
    )
      return [];
    const n = [...t.bonusItems];
    return (
      t.fiatRecharge &&
        t.fiatRecharge[e] &&
        (n[0] = me(te({}, n[0]), { rechargeUsd: t.fiatRecharge[e] })),
      t.specialDeposit &&
        n.unshift({
          rechargeUsd: t.specialDeposit.minDeposit,
          bonusRatio: t.specialDeposit.maxBonusRatio,
          maximumBcd: t.specialDeposit.maxDeposit,
          bonusCurrencyName: t.specialDeposit.currency,
          count: 0,
          firstTimeLimitRatio: 0,
          firstTimeLimitTime: 0,
          freeSpin: 0,
          lottery: 0,
          minUsd: 0,
          weeks: [],
          userCurrency: "",
          maxUsd: 0,
        }),
      n
    );
  } catch (n) {
    return [];
  }
}
function tt(e) {
  const [t] = ft;
  return Mn(e, t())
    .map((r) => {
      const s = M.convertCurrency(new H(r.rechargeUsd), "USDFIAT", e),
        m = r.bonusRatio,
        i = r.maximumBcd;
      return { amount: s, ratio: m, maxUsd: i };
    })
    .reverse();
}
function Cr(e) {
  return e === 0 ? "1st" : e === 1 ? "2nd" : e === 2 ? "3rd" : "4th";
}
var Fn = v('<div class="font-extrabold text-success pl-2">');
function Un(e) {
  const t = () => tt(e.currency);
  return l(_, {
    get when() {
      return t().length > 0;
    },
    children: (n) => {
      const a = () => t().find((r) => Number(e.amount) >= r.amount.toNumber());
      return l(_, {
        get when() {
          return a();
        },
        children: (r) => {
          const s = M.convertCurrency(
              new H(r().maxUsd),
              "BCD",
              e.currency
            ).toNumber(),
            m = () => {
              const i = new H(e.amount).mul(r().ratio).toNumber();
              return i > s ? s.toFixed(1) : i.toFixed(1);
            };
          return (() => {
            var i = Fn();
            return o(i, () => f("Extra") + " +" + e.cs + m()), i;
          })();
        },
      });
    },
  });
}
const Kn = "/modules/wallet2/assets/bonusTag-7875e872.png";
var jn = v('<div class="grid mt-5 grid-cols-3 gap-2">'),
  Ln = v("<button type=button>"),
  Wn = v(
    '<div class="absolute font-semibold -right-[3px] -top-[2px] h-4.5 w-14"><img class="h-full w-full absolute left-0 top-0"alt=""><div class="relative ellipsis text-xs text-alw_white">+'
  );
function Yn(e, t, n, a, r) {
  const s = [e];
  t = Math.ceil(Math.max(t, a));
  for (let m = 1; m < String(e).length; m++) {
    const i = new H(e).div(Math.pow(10, m)).toNumber(),
      u = we(r)(i),
      h = we(r)(t);
    Number(u) > Number(h) + 10 && s.unshift(Number(u));
  }
  if ((s.unshift(Number(we(r)(t))), n)) {
    const m = s.findIndex((i) => i >= n);
    s.splice(m, 0, n);
  }
  return s;
}
const Hn = { BRLFIAT: { Pagsmile: 299 } };
function qn(e, t, n, a) {
  const r = Hn[e];
  if (r) {
    const s = r[t];
    return s && n <= s && a > s ? s : 0;
  }
  return 0;
}
function Xn(e) {
  const t = P(() => tt(e.currencyName)),
    n = () => {
      var r;
      return ((r = t()[0]) == null ? void 0 : r.amount.toNumber()) || 0;
    },
    a = () =>
      e.amountList
        ? e.amountList.map(Number)
        : Yn(
            e.max,
            e.min,
            qn(e.currencyName, e.method, e.min, e.max),
            n(),
            e.currencyName
          );
  return (
    j(() => {
      a().length > 0 && e.onChangeAmount(a()[0]);
    }),
    l(_, {
      get when() {
        return a().length > 0;
      },
      get children() {
        var r = jn();
        return (
          o(
            r,
            l(Pe, {
              get each() {
                return ve(a());
              },
              children: (s) => {
                const m = t().find((u) => s >= u.amount.toNumber()),
                  i = () => Number(e.amount) === s;
                return l(J, {
                  type: "second",
                  get class() {
                    return U(
                      "relative border bg-layer5",
                      i() ? "border-brand" : "border-white_alpha5"
                    );
                  },
                  onClick: (u) => {
                    u.preventDefault(), e.onChangeAmount(s);
                  },
                  get children() {
                    return [
                      (() => {
                        var u = Ln();
                        return (
                          o(
                            u,
                            (() => {
                              var h = N(
                                () =>
                                  M.getCurrency(e.currencyName).currencyType ===
                                  "FIAT"
                              );
                              return () =>
                                h()
                                  ? M.toFiatStr(new H(s), e.currencyName)
                                  : M.toCryptoStr(new H(s), e.currencyName);
                            })()
                          ),
                          u
                        );
                      })(),
                      l(_, {
                        when: m,
                        children: (u) =>
                          (() => {
                            var h = Wn(),
                              d = h.firstChild,
                              g = d.nextSibling;
                            return (
                              g.firstChild,
                              D(d, "src", Kn),
                              o(
                                g,
                                () =>
                                  new H(u().ratio).mul(100).toString() + "%",
                                null
                              ),
                              h
                            );
                          })(),
                      }),
                    ];
                  },
                });
              },
            })
          ),
          r
        );
      },
    })
  );
}
var Gn = v("<iframe>"),
  Qn = v(
    "<div>セキュリティ上の理由から、Vega wallet は入金する前にアカウントをホワイトリストに追加する必要があります。メールボックスを確認して、Vega からの電子メールのホワイトリスト リンクをクリックし、BC に戻って続行してください。ベガウォレットより確認メールが送信されました。"
  ),
  Jn = v(
    "<a class=text-brand href=https://vega-wallet.com/whitelist/ target=_blank>Vega walletのウェブサイトを開く"
  ),
  zn = v('<form><div class="mb-1 font-semibold text-secondary mt-5">'),
  Zn = v('<div class="mr-1 -order-1">');
function pe(e, t, n, a, r) {
  var s, m;
  n &&
    (e
      ? A.push(() =>
          l(ae, {
            get children() {
              var i = Gn(),
                u = t;
              return (
                typeof u == "function" ? dt(u, i) : (t = i), D(i, "src", n), i
              );
            },
          })
        )
      : window.Telegram
      ? (m = (s = window.Telegram) == null ? void 0 : s.WebApp) == null ||
        m.openLink(n, { try_instant_view: !1 })
      : r
      ? window.open(n)
      : a
      ? (a.location.href = n)
      : (window.location.href = n));
}
function er() {
  return l(ae, {
    title: "デポジット",
    get children() {
      return [
        Qn(),
        l(J, {
          onClick: () => A.pop(),
          type: "brand",
          get children() {
            return ["理解した", " "];
          },
        }),
        Jn(),
      ];
    },
  });
}
const ue = (e) => {
  var t, n;
  return !(
    e &&
    (((t = e == null ? void 0 : e[0]) == null ? void 0 : t.reviewStatus) !==
      "completed" ||
      ((n = e == null ? void 0 : e[0]) == null ? void 0 : n.reviewAnswer) !==
        "GREEN")
  );
};
function tr(e) {
  for (let t in e) if (e[t]) return e[t];
  return "";
}
const Te = () => ge().get("/account/kyc/status/"),
  nr = (e) =>
    e == null ? void 0 : e.some((t) => t.type === "bind_account_select");
function Ir(e) {
  const t = q();
  let n;
  const {
      view: a,
      data: r,
      onVerified: s,
    } = Kt(
      () => e.currencyName,
      () => e.method
    ),
    [m, i] = K(!1),
    [u, h] = K(e.defaultAmount),
    {
      kycDom: d,
      kycData: g,
      cardVerify: c,
      inputVerify: y,
    } = Rn({ list: () => e.item, orderAmount: u() }),
    [b] = he(() => Te());
  j(() => {
    e.currencyName && e.channel && i(!1);
  });
  const x = (w) =>
      _e(this, null, function* () {
        if ((w.preventDefault(), m() || !s())) return !1;
        i(!0), L(te(te({}, g()), r()));
      }),
    L = (w) => {
      var le, se;
      const T = c.listErrorTxt || c.selectErrorTxt,
        W = tr(y);
      if (W) return i(!1), Q.error(W);
      if (T)
        return (
          i(!1),
          ue(b())
            ? nr(e.item)
              ? t(`/wallet/bank?currency=${e.currencyName}`)
              : t("/wallet/card")
            : t(
                `/wallet/intercept?levelname=${
                  (se = (le = b()) == null ? void 0 : le[0]) == null
                    ? void 0
                    : se.levelName
                }`
              ),
          Q.error(T)
        );
      const ie = () => nn(e.currencyName)(Number(u())),
        de = window.Telegram;
      Ce.emit("sensorsTrack", {
        event: "deposit_fiatpayment_confirm",
        coin_type: e.currencyName,
        amount: ie(),
        payment_method: e.method,
        amount_fiat: M.amount2usd(new H(u()), e.currencyName).toFixed(4),
        user_name: F.name,
        user_mail: F.email,
        id_number: String(F.userId),
      });
      let V = null;
      e.needRedirect && !de && (V = window.open("", "_blank")),
        yt
          .deposit({
            currencyName: e.currencyName,
            method: e.method,
            wayName: e.wayName,
            channel: e.channel,
            amount: u().toString(),
            kycItem: w,
          })
          .then(($) =>
            _e(this, null, function* () {
              if ((i(!1), !en(me(te({}, $), { currency: e.currencyName }))))
                return V && V.close(), !1;
              if (e.callBack)
                return e.callBack(
                  me(te({}, $), { currencyName: e.currencyName, amount: ie() })
                );
              if (e.mode === 16) {
                const O = $.data.payToken;
                if (O)
                  A.push(() =>
                    l(an, {
                      paytoken: O,
                      get currency() {
                        return e.currencyName;
                      },
                      get orderId() {
                        return $.orderId;
                      },
                    })
                  );
                else return Q.error(f("paytoken is not defined."));
              } else if (
                e.mode === 3 ||
                e.mode === 2 ||
                e.mode === 4 ||
                e.mode === 6
              ) {
                if (e.mode === 6) {
                  const O = $.data.walletUrl;
                  pe(e.isIframe, n, O, V);
                }
                A.push(() =>
                  l(wt, {
                    get showUtr() {
                      return e.mode === 3 || e.mode === 6;
                    },
                    get showImadeDeposit() {
                      return e.mode === 4;
                    },
                    res: $,
                    get currency() {
                      return e.currencyName;
                    },
                    get icon() {
                      return e.icon;
                    },
                    get amount() {
                      return u();
                    },
                  })
                );
              } else {
                const O = $.data.walletUrl;
                try {
                  t(-1);
                  const G = $.orderId.startsWith("F-")
                    ? $.orderId
                    : `F-${$.orderId}`;
                  e.currencyName === "INRFIAT" && G.length && e.mode === 0
                    ? vt.getDepositDetail(G).then((B) => {
                        t(
                          `/wallet/draft?orderId=${
                            B.commonData.orderId
                          }&isSubmit=${!1}&isHasten=${!1}&isWithdraw=${!1}`
                        );
                      })
                    : A.push(() =>
                        l(
                          dn,
                          ut(
                            {
                              continueDeposit: () =>
                                pe(e.isIframe, n, O, V, !0),
                              get currency() {
                                return e.currencyName;
                              },
                              get amount() {
                                return u();
                              },
                              get icon() {
                                return e.icon;
                              },
                            },
                            $
                          )
                        )
                      ),
                    pe(e.isIframe, n, O, V);
                } catch (G) {
                  Q.error(f("Payment submission failed")), i(!1);
                }
              }
            })
          )
          .catch(($) => {
            i(!1),
              $.code === 5001 &&
              e.method === "VegaWallet" &&
              $.message.includes("MUID_UNREGISTERED")
                ? A.push(er)
                : (V && V.close(), Q($));
          });
    },
    X = () => Number(u()) > Number(e.max) || Number(u()) < Number(e.min);
  return (() => {
    var w = zn(),
      T = w.firstChild;
    return (
      w.addEventListener("submit", x),
      o(w, d, T),
      o(w, a, T),
      o(T, () => `${e.min} - ${e.max} ${M.getAlias(e.currencyName)}`),
      o(
        w,
        l(gt, {
          get disabled() {
            return e.diabledInput || !!e.amountList;
          },
          get min() {
            return Number(e.min);
          },
          get max() {
            return Number(e.max);
          },
          get value() {
            return Number(u());
          },
          onChange: h,
          class: "text-base font-semibold bg-input_bright",
          get children() {
            return l(ht, {
              fallback: null,
              get children() {
                return [
                  l(_, {
                    get when() {
                      return e.cs;
                    },
                    get children() {
                      var W = Zn();
                      return o(W, () => e.cs), W;
                    },
                  }),
                  l(Un, {
                    get currency() {
                      return e.currencyName;
                    },
                    get amount() {
                      return u();
                    },
                    get cs() {
                      return e.cs;
                    },
                  }),
                ];
              },
            });
          },
        }),
        null
      ),
      o(
        w,
        l(Xn, {
          get amountList() {
            return e.amountList;
          },
          get max() {
            return e.max;
          },
          get min() {
            return e.defaultAmount;
          },
          get method() {
            return e.method;
          },
          get amount() {
            return u();
          },
          get currencyName() {
            return e.currencyName;
          },
          get cs() {
            return e.cs;
          },
          onChangeAmount: h,
        }),
        null
      ),
      o(
        w,
        l(Xt, {
          get channel() {
            return e.channel;
          },
          get currency() {
            return e.currencyName;
          },
          get kycRequirement() {
            return e.kycRequirement;
          },
        }),
        null
      ),
      o(
        w,
        l(J, {
          get disabled() {
            return X();
          },
          submit: !0,
          class: "w-full my-5",
          type: "brand",
          get children() {
            return l(_, {
              get when() {
                return m();
              },
              get fallback() {
                return [
                  l(_, {
                    get when() {
                      return e.isNewOpen;
                    },
                    get fallback() {
                      return f("Deposit");
                    },
                    get children() {
                      return f("Deposit Via __name__", { name: e.name });
                    },
                  }),
                  l(_, {
                    get when() {
                      return e.isNewOpen;
                    },
                    get children() {
                      return l(k, { class: "ml-1", name: "NewWindow" });
                    },
                  }),
                ];
              },
              get children() {
                return l(Ze, {});
              },
            });
          },
        }),
        null
      ),
      o(
        w,
        l(qt, {
          get channel() {
            return e.channel;
          },
          get currency() {
            return e.currencyName;
          },
        }),
        null
      ),
      o(
        w,
        l(_, {
          get when() {
            return e.isNewOpen;
          },
          get children() {
            return l(Gt, {});
          },
        }),
        null
      ),
      w
    );
  })();
}
const Sr = "/modules/wallet2/assets/svip-5ea345ea.png";
var Qe = v('<span class="cursor-pointer ml-1 text-brand underline">contact us'),
  rr = v("<div>");
function kr(e) {
  const [t] = he(() => ge().get("/account/purview/list/")),
    [n, a] = K(!0),
    [r, s] = K(!1),
    [m, i] = K(!1);
  j(() => {
    var h, d, g, c;
    t() &&
      (a(
        (h = t().find((y) => y.purviewCode === e.purviewCode)) == null
          ? void 0
          : h.status
      ),
      i(
        (d = t().find((y) => y.purviewCode === "withdraw_crypto")) == null
          ? void 0
          : d.status
      ),
      s(
        (g = t().find((y) => y.purviewCode === "withdraw_fiat")) == null
          ? void 0
          : g.status
      ),
      e.cb(
        (c = t().find((y) => y.purviewCode === e.purviewCode)) == null
          ? void 0
          : c.status
      ));
  });
  const u = !r && !m ? "" : r() ? f("crypto") : f("fiat");
  return l(_, {
    get when() {
      return !n();
    },
    get children() {
      return l(I, {
        class: "mb-4",
        type: "warning",
        get children() {
          return l(_, {
            get when() {
              return e.isDeposit;
            },
            get fallback() {
              return (() => {
                var h = rr();
                return (
                  o(
                    h,
                    l(Ie, {
                      typename: u,
                      i18nKey: "wallet.trans.wallet.desc20",
                      get children() {
                        return [
                          "Your __typename__ withdraw and tip permission have been suspended. If you have any questions, please",
                          (() => {
                            var d = Qe();
                            return (
                              (d.$$click = () => {
                                Ce.emit("live_support", !0);
                              }),
                              d
                            );
                          })(),
                          ".",
                        ];
                      },
                    })
                  ),
                  h
                );
              })();
            },
            get children() {
              return l(Ie, {
                i18nKey: "wallet.trans.desc46",
                get children() {
                  return [
                    "Your deposit permission has been suspended. If you have any questions, please",
                    (() => {
                      var h = Qe();
                      return (h.$$click = () => Ce.emit("live_support")), h;
                    })(),
                  ];
                },
              });
            },
          });
        },
      });
    },
  });
}
z(["click"]);
var ar = v(
  '<div class="rounded-xl p-4 mt-5 bg-layer3"><div class=title></div><div class="content text-secondary mt-1"><p></p><p>'
);
function Nr() {
  return (() => {
    var e = ar(),
      t = e.firstChild,
      n = t.nextSibling,
      a = n.firstChild,
      r = a.nextSibling;
    return (
      o(t, () => f("About __ENV_JB__")),
      o(a, () =>
        f(
          "__ENV_JB__ is the proprietary game currency (in-house game currency) of __ENV_HOST__ platform. It can be acquired by VIP level-up, lucky spin and other event rewards."
        )
      ),
      o(r, () =>
        f("More amazing __ENV_JB__ functions coming soon... Stay Tuned!")
      ),
      e
    );
  })();
}
export {
  $r as A,
  Ir as D,
  xr as M,
  kr as P,
  Se as a,
  ke as b,
  Ge as c,
  Kt as d,
  nr as e,
  Sr as f,
  Te as g,
  Nr as h,
  ue as i,
  Mn as j,
  Cr as k,
  xt as l,
  pr as m,
  Ar as n,
  re as o,
  Bt as s,
  wr as u,
};
