var i = (n, t, r) =>
  new Promise((a, e) => {
    var d = (o) => {
        try {
          s(r.next(o));
        } catch (c) {
          e(c);
        }
      },
      p = (o) => {
        try {
          s(r.throw(o));
        } catch (c) {
          e(c);
        }
      },
      s = (o) => (o.done ? a(o.value) : Promise.resolve(o.value).then(d, p));
    s((r = r.apply(n, t)).next());
  });
import { v as S, r as y, g } from "./solid-js-8ff414d5.js";
import { p as u, c as m } from "./store-2ed2b91e.js";
import { a as v } from "./apis-5c7b35c7.js";
import { I as C } from "./Lottery.interface-46896b0b.js";
import { b as f, j as L } from "./manifest-987d6c36.js";
function l() {
  g(f.login, function () {
    return i(this, null, function* () {
      if (!f.login) return;
      const a = yield v();
      t(u((e) => (e.favourteLotteries = a)));
    });
  }),
    L.emit("get_device_info", (a) => {
      t(
        u((e) => {
          (e.areaCode = a.areaCode), (e.distinctId = a.distinctId);
        })
      );
    });
  const [n, t] = m({ favourteLotteries: [], areaCode: "", distinctId: "" });
  return { store: n, setStore: t };
}
const I = l(),
  x = S(I);
function N() {
  return y(x);
}
function _() {
  const [n, t] = m({ menu: C.Home });
  return { state: n, setState: t };
}
_();
export { N as u };
