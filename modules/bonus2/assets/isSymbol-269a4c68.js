import { b as t } from "./_baseGetTag-c2e287b9.js";
import { a as b } from "./isArray-79a0be9c.js";
var m = "[object Symbol]";
function i(o) {
  return typeof o == "symbol" || (b(o) && t(o) == m);
}
export { i };
