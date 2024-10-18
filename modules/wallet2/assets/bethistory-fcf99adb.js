var v = Object.defineProperty;
var w = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty,
  b = Object.prototype.propertyIsEnumerable;
var f = (t, r, n) =>
    r in t
      ? v(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[r] = n),
  h = (t, r) => {
    for (var n in r || (r = {})) $.call(r, n) && f(t, n, r[n]);
    if (w) for (var n of w(r)) b.call(r, n) && f(t, n, r[n]);
    return t;
  };
var o = (t, r, n) =>
  new Promise((g, s) => {
    var a = (e) => {
        try {
          i(n.next(e));
        } catch (c) {
          s(c);
        }
      },
      y = (e) => {
        try {
          i(n.throw(e));
        } catch (c) {
          s(c);
        }
      },
      i = (e) => (e.done ? g(e.value) : Promise.resolve(e.value).then(a, y));
    i((n = n.apply(t, r)).next());
  });
import { j as u } from "./manifest-e0f0ba59.js";
var m;
((t) => {
  function r(s, a, y, i) {
    return o(this, null, function* () {
      return u().post(`/payment/deposit/crypto/${s}/address/`, {
        addrType: y,
        chain: a,
        extendParam: i,
      });
    });
  }
  t.getAddress = r;
  function n() {
    return o(this, null, function* () {
      return u().post("/payment/lnurl/pay/");
    });
  }
  t.satsPay = n;
  function g(s) {
    return o(this, null, function* () {
      return u().post("/payment/deposit/crypto/create-sats/", { amount: s });
    });
  }
  t.satsCreat = g;
})(m || (m = {}));
var l;
((t) => {
  function r(e, c) {
    return o(this, null, function* () {
      return u().post(`/payment/withdraw/fee/range/${e}/`, {
        chain: c,
        currencyName: e,
      });
    });
  }
  t.getRange = r;
  function n(e, c, p) {
    return o(this, null, function* () {
      return u().post("/payment/lnurl/", {
        code: e,
        withdrawVerifyType: c,
        timestamp: p,
      });
    });
  }
  t.satsCreate = n;
  function g(e, c) {
    return o(this, null, function* () {
      return u().post("/payment/withdraw/fee/deduction/", {
        withdrawCurrencyName: e,
        withdrawChain: c,
      });
    });
  }
  t.deduction = g;
  function s(e) {
    return o(this, null, function* () {
      return u().post("/payment/withdraw/create/", h({}, e));
    });
  }
  t.withdraw = s;
  function a(e, c, p, d) {
    return o(this, null, function* () {
      return u().post("/payment/withdraw/create-sats/", {
        receipts: e,
        code: c,
        withdrawVerifyType: p,
        timestamp: d,
      });
    });
  }
  t.withdrawSats = a;
  function y(e, c, p, d) {
    return o(this, null, function* () {
      return u().post("/payment/withdraw/cancel/", {
        withdrawId: e,
        chain: c,
        currencyName: p,
        fiatProvider: d,
      });
    });
  }
  t.withdrawCancel = y;
  function i() {
    return o(this, null, function* () {
      return u().get("/payment/withdraw/right/");
    });
  }
  t.createSats = i;
})(l || (l = {}));
var H;
((t) => {
  function r(s, a, y, i, e, c) {
    return o(this, null, function* () {
      return u().post("/user/amount/change/record/", {
        page: s,
        pageSize: a,
        beginTime: y,
        endTime: i,
        currencyName: e,
        changeTypeName: c,
      });
    });
  }
  t.getBill = r;
  function n(s, a, y, i, e) {
    return o(this, null, function* () {
      return u().post("/user/buy-crypto/history/", {
        page: s,
        pageSize: a,
        beginTime: y,
        endTime: i,
        targetCoin: e,
      });
    });
  }
  t.getBuyHistory = n;
  function g() {
    return o(this, null, function* () {
      return u().get("/user/amount/change/config/");
    });
  }
  t.getBillType = g;
})(H || (H = {}));
var D;
((t) => {
  function r(a) {
    return o(this, null, function* () {
      return u().get(`/payment/deposit/order/${a}/`);
    });
  }
  t.getDepositDetail = r;
  function n(a, y, i, e, c, p) {
    return o(this, null, function* () {
      return u().post("/payment/deposit/history/", {
        page: a,
        pageSize: y,
        status: i,
        beginTime: e,
        endTime: c,
        currencyName: p,
      });
    });
  }
  t.getDepositHistory = n;
  function g(a) {
    return o(this, null, function* () {
      return u().get(`/payment/withdraw/order/${a}/`);
    });
  }
  t.getWithdrawDetail = g;
  function s(a, y, i, e, c, p) {
    return o(this, null, function* () {
      return u().post("/payment/withdraw/history/", {
        page: a,
        pageSize: y,
        status: i,
        beginTime: e,
        endTime: c,
        currencyName: p,
      });
    });
  }
  t.getWithdrawHistory = s;
})(D || (D = {}));
var B;
((t) => {
  function r(g, s, a, y, i) {
    return o(this, null, function* () {
      return u().post("/game/support/swap/history/", {
        page: g,
        pageSize: s,
        beginTime: a,
        endTime: y,
        fromCurrencyName: i,
      });
    });
  }
  t.getSwap = r;
  function n(g, s) {
    return `/api/game/support/qrcode/${g}/?text=${s}`;
  }
  t.getQrcode = n;
})(B || (B = {}));
var S;
((t) => {
  function r(n, g, s, a, y, i) {
    return o(this, null, function* () {
      return u().post("/game/bet/history/user-bet", {
        page: n,
        pageSize: g,
        beginTime: s,
        endTime: a,
        currencyName: y,
        type: i,
      });
    });
  }
  t.getHistory = r;
})(S || (S = {}));
export { H as B, m as D, B as S, D as T, l as W };
