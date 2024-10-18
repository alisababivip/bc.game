import { d as e } from "./debounce-9aa0a06b.js";
import { i as a } from "./isObject-d5c4896e.js";
function l(t, o, i) {
  var n = !0,
    r = !0;
  if (typeof t != "function") throw new TypeError("Expected a function");
  return (
    a(i) &&
      ((n = "leading" in i ? !!i.leading : n),
      (r = "trailing" in i ? !!i.trailing : r)),
    e(t, o, { leading: n, maxWait: o, trailing: r })
  );
}
export { l as t };
