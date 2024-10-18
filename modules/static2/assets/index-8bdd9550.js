import { h as n } from "./manifest-6dedd536.js";
const t = "/activity/dig/coin";
function o() {
  return n().post(`${t}/join/`);
}
function r() {
  return n().get(`${t}/info/`);
}
function e() {
  return n().get(`${t}/login-info/`);
}
function a() {
  return n().get(`${t}/recent/wager/`);
}
function c() {
  return n().get(`${t}/daily/rank/`);
}
function f() {
  return n().get(`${t}/reward/history/`);
}
export { r as a, c as b, e as c, o as d, f as m, a as r };
