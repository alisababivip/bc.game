import { t as e } from "./toNumber-e58af95e.js";
var o = 1 / 0,
  i = 17976931348623157e292;
function f(r) {
  if (!r) return r === 0 ? r : 0;
  if (((r = e(r)), r === o || r === -o)) {
    var t = r < 0 ? -1 : 1;
    return t * i;
  }
  return r === r ? r : 0;
}
function c(r) {
  var t = f(r),
    n = t % 1;
  return t === t ? (n ? t - n : t) : 0;
}
var p = "Expected a function";
function u(r, t) {
  var n;
  if (typeof t != "function") throw new TypeError(p);
  return (
    (r = c(r)),
    function () {
      return (
        --r > 0 && (n = t.apply(this, arguments)), r <= 1 && (t = void 0), n
      );
    }
  );
}
function E(r) {
  return u(2, r);
}
export { E as o };
