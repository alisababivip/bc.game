var f = (e, r, t) =>
  new Promise((o, i) => {
    var a = (n) => {
        try {
          g(t.next(n));
        } catch (p) {
          i(p);
        }
      },
      m = (n) => {
        try {
          g(t.throw(n));
        } catch (p) {
          i(p);
        }
      },
      g = (n) => (n.done ? o(n.value) : Promise.resolve(n.value).then(a, m));
    g((t = t.apply(e, r)).next());
  });
import { D as l, W as F } from "./withdrawFiat-1254e3b3.js";
import { j as A } from "./manifest-e0f0ba59.js";
import { m as s } from "./memoize-ff109130.js";
s(l.getDepositList);
s(F.getWithdrawList);
var u;
((e) => {
  (e.getOpt = function (t) {
    return t.map((o) => o.label);
  }),
    (e.getLabel = function (t, o) {
      var i;
      return (i = t.find((a) => a.value === o)) != null ? i : t[0];
    }),
    (e.getVal = function (t, o) {
      var i;
      return (i = t.find((a) => a.value === o)) != null ? i : t[0];
    });
})(u || (u = {}));
function I() {
  return globalThis.innerWidth <= 640;
}
s(() =>
  f(void 0, null, function* () {
    return A().post("/home/rec/crypto/", {
      pageSize: 5,
      page: 1,
      sectionId: "deposit_crypto_recommend",
    });
  })
);
function S(e, r) {
  return (t) =>
    e === "KRWFIAT"
      ? (Math.ceil(t / 1e4) * 1e4).toString()
      : (e === "XOFFIAT" && r === "EnovePay_XOF") ||
        (e === "XAFFIAT" && r === "EnovePay_XAF")
      ? (Math.ceil(t / 5) * 5).toString()
      : String(e === "CADFIAT" ? t : Math.floor(t));
}
export { S as g, I as i };
