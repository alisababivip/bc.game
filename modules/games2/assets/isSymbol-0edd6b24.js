import { b as t } from "./isObject-d5c4896e.js";
function n(o) {
  return o != null && typeof o == "object";
}
function e(o) {
  return typeof o == "symbol" || (n(o) && t(o) == "[object Symbol]");
}
export { e as a, n as i };
