var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
  N = Object.prototype.propertyIsEnumerable;
var L = (n, a, e) =>
    a in n
      ? M(n, a, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[a] = e),
  h = (n, a) => {
    for (var e in a || (a = {})) K.call(a, e) && L(n, e, a[e]);
    if (m) for (var e of m(a)) N.call(a, e) && L(n, e, a[e]);
    return n;
  };
var d = (n, a, e) =>
  new Promise((i, _) => {
    var f = (c) => {
        try {
          r(e.next(c));
        } catch (s) {
          _(s);
        }
      },
      y = (c) => {
        try {
          r(e.throw(c));
        } catch (s) {
          _(s);
        }
      },
      r = (c) => (c.done ? i(c.value) : Promise.resolve(c.value).then(f, y));
    r((e = e.apply(n, a)).next());
  });
import { j as o } from "./manifest-e0f0ba59.js";
var g;
((n) => {
  function a(t, w, p, B) {
    return d(this, null, function* () {
      return o().post("/payment/deposit/fiat/kyc/", {
        currencyName: t,
        wayName: w,
        method: p,
        channel: B,
      });
    });
  }
  n.depositKyc = a;
  let e;
  ((t) => {
    (t[(t.PASS = 0)] = "PASS"),
      (t[(t.PASS_ALL = 1)] = "PASS_ALL"),
      (t[(t.BLOCK_BY_CHANNEL_AMOUNT_15_MIN = 2)] =
        "BLOCK_BY_CHANNEL_AMOUNT_15_MIN"),
      (t[(t.BLOCK_BY_3_TIMES_15_MIN = 3)] = "BLOCK_BY_3_TIMES_15_MIN"),
      (t[(t.BLOCK_BY_5_TIMES_1_H = 4)] = "BLOCK_BY_5_TIMES_1_H");
  })(e || (e = {}));
  function i(t) {
    return d(this, null, function* () {
      return o().post("/payment/deposit/fiat/create/", h({}, t));
    });
  }
  n.deposit = i;
  function _(t) {
    return d(this, null, function* () {
      return o().get(`/payment/deposit/fiat/${t}/methods/`);
    });
  }
  n.depositMethods = _;
  function f(t) {
    return d(this, null, function* () {
      return o().get(`/payment/deposit/fiat/history/${t}/`);
    });
  }
  n.getOrderBase = f;
  function y(t) {
    return d(this, null, function* () {
      return o().get(`/payment/deposit/fiat/order/${t}/`);
    });
  }
  n.getFiatOrder = y;
  function r(t) {
    return d(this, null, function* () {
      return o().post("/payment/deposit/fiat/order/cancel/", { orderId: t });
    });
  }
  n.cancelOrder = r;
  function c() {
    return d(this, null, function* () {
      return o().get("/payment/deposit/fiat/list/");
    });
  }
  n.getDepositList = c;
  function s(t, w) {
    return d(this, null, function* () {
      return o().post("/payment/deposit/fiat/order/updateUTR/", {
        orderId: t,
        utr: w,
      });
    });
  }
  n.updateUtr = s;
})(g || (g = {}));
var u;
((n) => {
  function a(r, c, s, t) {
    return d(this, null, function* () {
      return o().post("/payment/withdraw/fiat/kyc/", {
        currencyName: r,
        wayName: c,
        method: s,
        channel: t,
      });
    });
  }
  n.withdrawKyc = a;
  function e(r, c, s, t, w, p) {
    return d(this, null, function* () {
      return o().post("/payment/withdraw/fiat/fee/", {
        currencyName: r,
        wayName: c,
        method: s,
        channel: t,
        amount: w,
        provider: p,
      });
    });
  }
  n.withdrawFee = e;
  function i(r) {
    return d(this, null, function* () {
      return o().post("/payment/withdraw/fiat/create/", h({}, r));
    });
  }
  n.withdraw = i;
  function _(r) {
    return d(this, null, function* () {
      return o().get(`/payment/withdraw/fiat/${r}/methods/`);
    });
  }
  n.withdrawMethods = _;
  function f() {
    return d(this, null, function* () {
      return o().get("/payment/withdraw/fiat/list/");
    });
  }
  n.getWithdrawList = f;
  function y(r, c, s, t) {
    return d(this, null, function* () {
      return o().post("/payment/withdraw/cancel/", {
        withdrawId: r,
        currencyName: c,
        withdrawWay: s,
        chain: t,
      });
    });
  }
  n.cancelOrder = y;
})(u || (u = {}));
export { g as D, u as W };
