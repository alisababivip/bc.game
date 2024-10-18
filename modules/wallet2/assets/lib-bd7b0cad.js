import { t as r } from "./i18n-9b1e4bd8.js";
var o;
((t) => {
  ((e) => {
    (e.Deposit = "deposit"),
      (e.Withdraw = "withdraw"),
      (e.Swap = "swap"),
      (e.Buy = "buy_crypto"),
      (e.Bill = "bill"),
      (e.Bonus = "Bonus"),
      (e.Game = "Game"),
      (e.All = "");
  })(t.TransactionsType || (t.TransactionsType = {}));
})(o || (o = {}));
function k(t) {
  return t === 4 ? "text-success" : t >= -1 ? "text-warning" : "text-error";
}
function h(t) {
  return [1, 5, 6, 7].some((e) => e === t)
    ? "Withdraw Order Submitted"
    : [2, 3].some((e) => e === t)
    ? "Order Review"
    : [4, -11, -12].some((e) => e === t)
    ? "Transaction Completed"
    : "Withdraw Order Submitted";
}
function B(t) {
  let e = r("Deposit Failed"),
    l = !1,
    c = !1,
    s = !1,
    u = !1,
    a = "text-error";
  switch (t) {
    case 1:
      (e = r("Processing")), (l = !0), (a = "text-warning");
      break;
    case 2:
      (e = r("Processing")), (l = !0), (a = "text-warning");
      break;
    case 3:
      (e = r("Success")), (u = !0), (a = "text-success");
      break;
    case 4:
      (e = r("Success")), (u = !0), (a = "text-success");
      break;
    case -1:
      (e = r("Failed")), (s = !0);
      break;
    case -2:
      (e = r("Canceled")), (c = !0);
      break;
    case -3:
      (e = r("Failed")), (s = !0);
      break;
    case -99:
      (e = r("Expired")), (s = !0);
      break;
    default:
      (e = r("Failed")), (s = !0);
      break;
  }
  return {
    txt: e,
    isProgress: l,
    isSuccess: u,
    isCanceled: c,
    isFail: s,
    orderclass: a,
  };
}
function D(t) {
  var d, b, g, f;
  const e = o.TransactionsType,
    l = (d = t.type) != null ? d : t.isBetHistory ? "" : e.Deposit;
  t.page && Number(t.page);
  const c = t.pageSize ? Number(t.pageSize) : 20,
    s = (b = t.status) != null ? b : "",
    u = (g = t.assets) != null ? g : "",
    a = (f = t.billtype) != null ? f : "";
  let n = 0,
    m = 0;
  if (t.time) {
    const i = t.time.split("-");
    if (i.length === 2) (n = Number(i[0])), (m = Number(i[1]));
    else {
      const w = new Date().getTime();
      (n = w - Number(i[0])), (m = w);
    }
  } else {
    const i = new Date().getTime();
    (n = i - (t.isBetHistory || l === e.Bill ? 864e5 : 5184e6)), (m = i);
  }
  return {
    type: l,
    pageSize: c,
    status: s,
    currencyName: u,
    startTime: n,
    endTime: m,
    billtype: a,
  };
}
export { o as T, k as a, h as b, D as f, B as g };
