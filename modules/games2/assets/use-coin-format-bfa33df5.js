import { K as r, a5 as i, D as o } from "./manifest-a234c8a0.js";
function c() {
  return {
    coinFormat: r.printCurrency.bind(r),
    coinFormatWithPrecision: (n, e) =>
      i.clearFloatZero(
        new o(n).todp(r.getPrecision(e) + 1, o.ROUND_DOWN).toFixed()
      ),
    coinPureNumber: r.convertCurrency.bind(r),
  };
}
export { c as u };
