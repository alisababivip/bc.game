import { S as o } from "./_baseGetTag-c2e287b9.js";
import { a as m } from "./_arrayMap-2bcec0e7.js";
import { i as s } from "./isArray-79a0be9c.js";
import { i as p } from "./isSymbol-269a4c68.js";
var y = 1 / 0,
  i = o ? o.prototype : void 0,
  n = i ? i.toString : void 0;
function f(r) {
  if (typeof r == "string") return r;
  if (s(r)) return m(r, f) + "";
  if (p(r)) return n ? n.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -y ? "-0" : t;
}
function g(r) {
  return r == null ? "" : f(r);
}
export { g as t };
