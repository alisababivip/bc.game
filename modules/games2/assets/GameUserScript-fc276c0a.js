var Zt = Object.defineProperty,
  rt = Object.defineProperties;
var pt = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var Xt = Object.prototype.hasOwnProperty,
  ht = Object.prototype.propertyIsEnumerable;
var _ = (e, l, i) =>
    l in e
      ? Zt(e, l, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[l] = i),
  y = (e, l) => {
    for (var i in l || (l = {})) Xt.call(l, i) && _(e, i, l[i]);
    if (q) for (var i of q(l)) ht.call(l, i) && _(e, i, l[i]);
    return e;
  },
  N = (e, l) => rt(e, pt(l));
var v = (e, l, i) =>
  new Promise((t, s) => {
    var a = (b) => {
        try {
          c(i.next(b));
        } catch (m) {
          s(m);
        }
      },
      n = (b) => {
        try {
          c(i.throw(b));
        } catch (m) {
          s(m);
        }
      },
      c = (b) => (b.done ? t(b.value) : Promise.resolve(b.value).then(a, n));
    c((i = i.apply(e, l)).next());
  });
import { g as st } from "./index-eff0ad24.js";
import { r as Gt } from "./enc-base64-43411dcf.js";
import { r as yt } from "./core-0e150ffe.js";
import { W as gt } from "./Message-f1b40bc8.js";
import { E as Wt } from "./events-853a5f82.js";
import {
  h as L,
  y as f,
  ak as Vt,
  a5 as Rt,
  f as ct,
  c as d,
  D as w,
  i as u,
  m as Lt,
  N as nt,
  B as p,
  t as o,
  u as It,
  l as P,
  S as g,
  E as xt,
  G as K,
  o as M,
  M as J,
  a as S,
  b as F,
  d as Q,
  n as vt,
  F as dt,
  K as $,
  at as Ht,
  X as at,
  v as Jt,
  Y as St,
} from "./manifest-a234c8a0.js";
import { B as Ct, a as Y } from "./game-a49e1f5b.js";
import { t as Z } from "./i18n-611811a6.js";
import { N as I, a as C, d as Kt, e as Yt } from "./number-field-a2716165.js";
import { b as tt } from "./Symbol-f22f521e.js";
import { a as H, M as zt } from "./payout-69d30c0d.js";
import { a as Nt } from "./game-adef0dc7.js";
import { u as ft } from "./currency-a0e3a368.js";
const lt = st(Gt());
var wt = { exports: {} };
const et = st((wt.exports = yt().enc.Utf8)),
  bt =
    "dmFyIFM9KGIsZCx2KT0+bmV3IFByb21pc2UoKGcsdyk9Pnt2YXIgXz1mPT57dHJ5e20odi5uZXh0KGYpKX1jYXRjaCh5KXt3KHkpfX0sdT1mPT57dHJ5e20odi50aHJvdyhmKSl9Y2F0Y2goeSl7dyh5KX19LG09Zj0+Zi5kb25lP2coZi52YWx1ZSk6UHJvbWlzZS5yZXNvbHZlKGYudmFsdWUpLnRoZW4oXyx1KTttKCh2PXYuYXBwbHkoYixkKSkubmV4dCgpKX0pOyhmdW5jdGlvbigpeyJ1c2Ugc3RyaWN0Ijt2YXIgYj17ZXhwb3J0czp7fX0sZD10eXBlb2YgUmVmbGVjdD09Im9iamVjdCI/UmVmbGVjdDpudWxsLHY9ZCYmdHlwZW9mIGQuYXBwbHk9PSJmdW5jdGlvbiI/ZC5hcHBseTpmdW5jdGlvbihlLG4scil7cmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGUsbixyKX0sZztkJiZ0eXBlb2YgZC5vd25LZXlzPT0iZnVuY3Rpb24iP2c9ZC5vd25LZXlzOk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM/Zz1mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSkuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSkpfTpnPWZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKX07ZnVuY3Rpb24gdyh0KXtjb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2Fybih0KX12YXIgXz1OdW1iZXIuaXNOYU58fGZ1bmN0aW9uKGUpe3JldHVybiBlIT09ZX07ZnVuY3Rpb24gdSgpe3UuaW5pdC5jYWxsKHRoaXMpfWIuZXhwb3J0cz11LGIuZXhwb3J0cy5vbmNlPXEsdS5FdmVudEVtaXR0ZXI9dSx1LnByb3RvdHlwZS5fZXZlbnRzPXZvaWQgMCx1LnByb3RvdHlwZS5fZXZlbnRzQ291bnQ9MCx1LnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzPXZvaWQgMDt2YXIgbT0xMDtmdW5jdGlvbiBmKHQpe2lmKHR5cGVvZiB0IT0iZnVuY3Rpb24iKXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSAibGlzdGVuZXIiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnK3R5cGVvZiB0KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodSwiZGVmYXVsdE1heExpc3RlbmVycyIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG19LHNldDpmdW5jdGlvbih0KXtpZih0eXBlb2YgdCE9Im51bWJlciJ8fHQ8MHx8Xyh0KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mICJkZWZhdWx0TWF4TGlzdGVuZXJzIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK3QrIi4iKTttPXR9fSksdS5pbml0PWZ1bmN0aW9uKCl7KHRoaXMuX2V2ZW50cz09PXZvaWQgMHx8dGhpcy5fZXZlbnRzPT09T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpJiYodGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCksdGhpcy5fbWF4TGlzdGVuZXJzPXRoaXMuX21heExpc3RlbmVyc3x8dm9pZCAwfSx1LnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7aWYodHlwZW9mIGUhPSJudW1iZXIifHxlPDB8fF8oZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiAibiIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJytlKyIuIik7cmV0dXJuIHRoaXMuX21heExpc3RlbmVycz1lLHRoaXN9O2Z1bmN0aW9uIHkodCl7cmV0dXJuIHQuX21heExpc3RlbmVycz09PXZvaWQgMD91LmRlZmF1bHRNYXhMaXN0ZW5lcnM6dC5fbWF4TGlzdGVuZXJzfXUucHJvdG90eXBlLmdldE1heExpc3RlbmVycz1mdW5jdGlvbigpe3JldHVybiB5KHRoaXMpfSx1LnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgbj1bXSxyPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyluLnB1c2goYXJndW1lbnRzW3JdKTt2YXIgcz1lPT09ImVycm9yIixvPXRoaXMuX2V2ZW50cztpZihvIT09dm9pZCAwKXM9cyYmby5lcnJvcj09PXZvaWQgMDtlbHNlIGlmKCFzKXJldHVybiExO2lmKHMpe3ZhciBpO2lmKG4ubGVuZ3RoPjAmJihpPW5bMF0pLGkgaW5zdGFuY2VvZiBFcnJvcil0aHJvdyBpO3ZhciBhPW5ldyBFcnJvcigiVW5oYW5kbGVkIGVycm9yLiIrKGk/IiAoIitpLm1lc3NhZ2UrIikiOiIiKSk7dGhyb3cgYS5jb250ZXh0PWksYX12YXIgYz1vW2VdO2lmKGM9PT12b2lkIDApcmV0dXJuITE7aWYodHlwZW9mIGM9PSJmdW5jdGlvbiIpdihjLHRoaXMsbik7ZWxzZSBmb3IodmFyIGg9Yy5sZW5ndGgsRT1BKGMsaCkscj0wO3I8aDsrK3IpdihFW3JdLHRoaXMsbik7cmV0dXJuITB9O2Z1bmN0aW9uIFIodCxlLG4scil7dmFyIHMsbyxpO2lmKGYobiksbz10Ll9ldmVudHMsbz09PXZvaWQgMD8obz10Ll9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0Ll9ldmVudHNDb3VudD0wKTooby5uZXdMaXN0ZW5lciE9PXZvaWQgMCYmKHQuZW1pdCgibmV3TGlzdGVuZXIiLGUsbi5saXN0ZW5lcj9uLmxpc3RlbmVyOm4pLG89dC5fZXZlbnRzKSxpPW9bZV0pLGk9PT12b2lkIDApaT1vW2VdPW4sKyt0Ll9ldmVudHNDb3VudDtlbHNlIGlmKHR5cGVvZiBpPT0iZnVuY3Rpb24iP2k9b1tlXT1yP1tuLGldOltpLG5dOnI/aS51bnNoaWZ0KG4pOmkucHVzaChuKSxzPXkodCkscz4wJiZpLmxlbmd0aD5zJiYhaS53YXJuZWQpe2kud2FybmVkPSEwO3ZhciBhPW5ldyBFcnJvcigiUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAiK2kubGVuZ3RoKyIgIitTdHJpbmcoZSkrIiBsaXN0ZW5lcnMgYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0Iik7YS5uYW1lPSJNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmciLGEuZW1pdHRlcj10LGEudHlwZT1lLGEuY291bnQ9aS5sZW5ndGgsdyhhKX1yZXR1cm4gdH11LnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbihlLG4pe3JldHVybiBSKHRoaXMsZSxuLCExKX0sdS5wcm90b3R5cGUub249dS5wcm90b3R5cGUuYWRkTGlzdGVuZXIsdS5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyPWZ1bmN0aW9uKGUsbil7cmV0dXJuIFIodGhpcyxlLG4sITApfTtmdW5jdGlvbiBUKCl7aWYoIXRoaXMuZmlyZWQpcmV0dXJuIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSx0aGlzLndyYXBGbiksdGhpcy5maXJlZD0hMCxhcmd1bWVudHMubGVuZ3RoPT09MD90aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpOnRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsYXJndW1lbnRzKX1mdW5jdGlvbiBOKHQsZSxuKXt2YXIgcj17ZmlyZWQ6ITEsd3JhcEZuOnZvaWQgMCx0YXJnZXQ6dCx0eXBlOmUsbGlzdGVuZXI6bn0scz1ULmJpbmQocik7cmV0dXJuIHMubGlzdGVuZXI9bixyLndyYXBGbj1zLHN9dS5wcm90b3R5cGUub25jZT1mdW5jdGlvbihlLG4pe3JldHVybiBmKG4pLHRoaXMub24oZSxOKHRoaXMsZSxuKSksdGhpc30sdS5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lcj1mdW5jdGlvbihlLG4pe3JldHVybiBmKG4pLHRoaXMucHJlcGVuZExpc3RlbmVyKGUsTih0aGlzLGUsbikpLHRoaXN9LHUucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKGUsbil7dmFyIHIscyxvLGksYTtpZihmKG4pLHM9dGhpcy5fZXZlbnRzLHM9PT12b2lkIDApcmV0dXJuIHRoaXM7aWYocj1zW2VdLHI9PT12b2lkIDApcmV0dXJuIHRoaXM7aWYocj09PW58fHIubGlzdGVuZXI9PT1uKS0tdGhpcy5fZXZlbnRzQ291bnQ9PT0wP3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpOihkZWxldGUgc1tlXSxzLnJlbW92ZUxpc3RlbmVyJiZ0aGlzLmVtaXQoInJlbW92ZUxpc3RlbmVyIixlLHIubGlzdGVuZXJ8fG4pKTtlbHNlIGlmKHR5cGVvZiByIT0iZnVuY3Rpb24iKXtmb3Iobz0tMSxpPXIubGVuZ3RoLTE7aT49MDtpLS0paWYocltpXT09PW58fHJbaV0ubGlzdGVuZXI9PT1uKXthPXJbaV0ubGlzdGVuZXIsbz1pO2JyZWFrfWlmKG88MClyZXR1cm4gdGhpcztvPT09MD9yLnNoaWZ0KCk6RChyLG8pLHIubGVuZ3RoPT09MSYmKHNbZV09clswXSkscy5yZW1vdmVMaXN0ZW5lciE9PXZvaWQgMCYmdGhpcy5lbWl0KCJyZW1vdmVMaXN0ZW5lciIsZSxhfHxuKX1yZXR1cm4gdGhpc30sdS5wcm90b3R5cGUub2ZmPXUucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyLHUucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycz1mdW5jdGlvbihlKXt2YXIgbixyLHM7aWYocj10aGlzLl9ldmVudHMscj09PXZvaWQgMClyZXR1cm4gdGhpcztpZihyLnJlbW92ZUxpc3RlbmVyPT09dm9pZCAwKXJldHVybiBhcmd1bWVudHMubGVuZ3RoPT09MD8odGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCk6cltlXSE9PXZvaWQgMCYmKC0tdGhpcy5fZXZlbnRzQ291bnQ9PT0wP3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpOmRlbGV0ZSByW2VdKSx0aGlzO2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0wKXt2YXIgbz1PYmplY3Qua2V5cyhyKSxpO2ZvcihzPTA7czxvLmxlbmd0aDsrK3MpaT1vW3NdLGkhPT0icmVtb3ZlTGlzdGVuZXIiJiZ0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhpKTtyZXR1cm4gdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoInJlbW92ZUxpc3RlbmVyIiksdGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCx0aGlzfWlmKG49cltlXSx0eXBlb2Ygbj09ImZ1bmN0aW9uIil0aGlzLnJlbW92ZUxpc3RlbmVyKGUsbik7ZWxzZSBpZihuIT09dm9pZCAwKWZvcihzPW4ubGVuZ3RoLTE7cz49MDtzLS0pdGhpcy5yZW1vdmVMaXN0ZW5lcihlLG5bc10pO3JldHVybiB0aGlzfTtmdW5jdGlvbiBqKHQsZSxuKXt2YXIgcj10Ll9ldmVudHM7aWYocj09PXZvaWQgMClyZXR1cm5bXTt2YXIgcz1yW2VdO3JldHVybiBzPT09dm9pZCAwP1tdOnR5cGVvZiBzPT0iZnVuY3Rpb24iP24/W3MubGlzdGVuZXJ8fHNdOltzXTpuP0Yocyk6QShzLHMubGVuZ3RoKX11LnByb3RvdHlwZS5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIGoodGhpcyxlLCEwKX0sdS5wcm90b3R5cGUucmF3TGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybiBqKHRoaXMsZSwhMSl9LHUubGlzdGVuZXJDb3VudD1mdW5jdGlvbih0LGUpe3JldHVybiB0eXBlb2YgdC5saXN0ZW5lckNvdW50PT0iZnVuY3Rpb24iP3QubGlzdGVuZXJDb3VudChlKTpDLmNhbGwodCxlKX0sdS5wcm90b3R5cGUubGlzdGVuZXJDb3VudD1DO2Z1bmN0aW9uIEModCl7dmFyIGU9dGhpcy5fZXZlbnRzO2lmKGUhPT12b2lkIDApe3ZhciBuPWVbdF07aWYodHlwZW9mIG49PSJmdW5jdGlvbiIpcmV0dXJuIDE7aWYobiE9PXZvaWQgMClyZXR1cm4gbi5sZW5ndGh9cmV0dXJuIDB9dS5wcm90b3R5cGUuZXZlbnROYW1lcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9ldmVudHNDb3VudD4wP2codGhpcy5fZXZlbnRzKTpbXX07ZnVuY3Rpb24gQSh0LGUpe2Zvcih2YXIgbj1uZXcgQXJyYXkoZSkscj0wO3I8ZTsrK3IpbltyXT10W3JdO3JldHVybiBufWZ1bmN0aW9uIEQodCxlKXtmb3IoO2UrMTx0Lmxlbmd0aDtlKyspdFtlXT10W2UrMV07dC5wb3AoKX1mdW5jdGlvbiBGKHQpe2Zvcih2YXIgZT1uZXcgQXJyYXkodC5sZW5ndGgpLG49MDtuPGUubGVuZ3RoOysrbillW25dPXRbbl0ubGlzdGVuZXJ8fHRbbl07cmV0dXJuIGV9ZnVuY3Rpb24gcSh0LGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe2Z1bmN0aW9uIHMoaSl7dC5yZW1vdmVMaXN0ZW5lcihlLG8pLHIoaSl9ZnVuY3Rpb24gbygpe3R5cGVvZiB0LnJlbW92ZUxpc3RlbmVyPT0iZnVuY3Rpb24iJiZ0LnJlbW92ZUxpc3RlbmVyKCJlcnJvciIscyksbihbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfUkodCxlLG8se29uY2U6ITB9KSxlIT09ImVycm9yIiYmRyh0LHMse29uY2U6ITB9KX0pfWZ1bmN0aW9uIEcodCxlLG4pe3R5cGVvZiB0Lm9uPT0iZnVuY3Rpb24iJiZJKHQsImVycm9yIixlLG4pfWZ1bmN0aW9uIEkodCxlLG4scil7aWYodHlwZW9mIHQub249PSJmdW5jdGlvbiIpci5vbmNlP3Qub25jZShlLG4pOnQub24oZSxuKTtlbHNlIGlmKHR5cGVvZiB0LmFkZEV2ZW50TGlzdGVuZXI9PSJmdW5jdGlvbiIpdC5hZGRFdmVudExpc3RlbmVyKGUsZnVuY3Rpb24gcyhvKXtyLm9uY2UmJnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHMpLG4obyl9KTtlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSAiZW1pdHRlciIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnK3R5cGVvZiB0KX12YXIgVz1iLmV4cG9ydHM7Y29uc3QgTz1zZWxmLFU9e3NlbGY6MSxvbm1lc3NhZ2U6MSxwb3N0TWVzc2FnZToxLGdsb2JhbDoxLHdsOjEsZXZhbDoxLEFycmF5OjEsQm9vbGVhbjoxLFJlZmxlY3Q6MSxQcm94eToxLFN5bWJvbDoxLERhdGU6MSxGdW5jdGlvbjoxLE51bWJlcjoxLE9iamVjdDoxLFJlZ0V4cDoxLFN0cmluZzoxLEVycm9yOjEsRXZhbEVycm9yOjEsUmFuZ2VFcnJvcjoxLFJlZmVyZW5jZUVycm9yOjEsU3ludGF4RXJyb3I6MSxUeXBlRXJyb3I6MSxVUklFcnJvcjoxLGRlY29kZVVSSToxLGRlY29kZVVSSUNvbXBvbmVudDoxLGVuY29kZVVSSToxLGVuY29kZVVSSUNvbXBvbmVudDoxLGlzRmluaXRlOjEsaXNOYU46MSxwYXJzZUZsb2F0OjEscGFyc2VJbnQ6MSxJbmZpbml0eToxLEpTT046MSxNYXRoOjEsTmFOOjEsdW5kZWZpbmVkOjEsY29uc29sZToxLFByb21pc2U6MX07T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTykuZm9yRWFjaChmdW5jdGlvbih0KXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFUsdCkpdHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eShPLHQse2dldDpmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcigiU2VjdXJpdHkgRXhjZXB0aW9uOiBjYW5ub3QgYWNjZXNzICIrdCl9LGNvbmZpZ3VyYWJsZTohMX0pfWNhdGNoKGUpe319KTtjbGFzcyBIIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMubmFtZT0iTWVzc2FnZUVycm9yIn19Y2xhc3MgS3tjb25zdHJ1Y3RvcihlLG49d2luZG93KXt0aGlzLnRpbWVvdXQ9NWUzLHRoaXMubXNnSWQ9MCx0aGlzLnJlcWNicz17fSx0aGlzLmV2ZW50RGljdD17fSx0aGlzLnRhcmdldD1lLHRoaXMuc291cmNlPW4sdGhpcy5vbk1lc3NhZ2U9dGhpcy5oYW5kbGVNZXNzYWdlLmJpbmQodGhpcyksdGhpcy5zb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsdGhpcy5vbk1lc3NhZ2UpfWhhbmRsZU1lc3NhZ2UoZSl7Y29uc3Qgbj1lLnNvdXJjZTtpZihlLnNvdXJjZSYmbiE9PXRoaXMudGFyZ2V0KXJldHVybjtjb25zdHttc2dpZDpyLGV2ZW50OnMscGF5bG9hZDpvfT1lLmRhdGE7aWYoIShvIGluc3RhbmNlb2YgQXJyYXkpfHxvLmxlbmd0aCE9PTIpcmV0dXJuO2NvbnN0W2ksYV09bztpZihzKXRyeXtjb25zdCBjPXRoaXMudHJpZ2dlcihzLGEpO2lmKCFyKXJldHVybjtjIGluc3RhbmNlb2YgUHJvbWlzZT9jLnRoZW4oaD0+e3RoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOnIscGF5bG9hZDpbbnVsbCxoXX0pfSkuY2F0Y2goaD0+e3RoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOnIscGF5bG9hZDpbaC5tZXNzYWdlXX0pfSk6dGhpcy5zZW5kTWVzc2FnZSh7bXNnaWQ6cixwYXlsb2FkOltudWxsLGNdfSl9Y2F0Y2goYyl7dGhpcy5zZW5kTWVzc2FnZSh7bXNnaWQ6cixwYXlsb2FkOltjLm1lc3NhZ2VdfSl9ZWxzZSBpZihyJiZvIT09dm9pZCAwKXtpZighdGhpcy5yZXFjYnNbcl0pcmV0dXJuO2khPT1udWxsP3RoaXMucmVxY2JzW3JdWzFdKG5ldyBIKGkpKTp0aGlzLnJlcWNic1tyXVswXShhKX19c2VuZE1lc3NhZ2UoZSl7dGhpcy50YXJnZXQmJnRoaXMudGFyZ2V0LnBvc3RNZXNzYWdlKGUsIioiKX1lbWl0KGUsbj1udWxsKXt0aGlzLnNlbmRNZXNzYWdlKHtldmVudDplLHBheWxvYWQ6W251bGwsbl19KX1yZXF1ZXN0KGUsbj1udWxsKXt0aGlzLm1zZ0lkKys7Y29uc3Qgcj10aGlzLm1zZ0lkO3JldHVybiBuZXcgUHJvbWlzZSgocyxvKT0+e2NvbnN0IGk9KC4uLkUpPT57YygpLHMoLi4uRSl9LGE9KC4uLkUpPT57YygpLG8oLi4uRSl9LGM9KCk9Pnt0aGlzLnRpbWVvdXQ+MCYmY2xlYXJUaW1lb3V0KGgpLGRlbGV0ZSB0aGlzLnJlcWNic1tyXX07bGV0IGg9MDt0aGlzLnRpbWVvdXQ+MCYmKGg9d2luZG93LnNldFRpbWVvdXQoYS5iaW5kKHRoaXMsYFRpbWVPdXQ6ICR7ZX1gKSx0aGlzLnRpbWVvdXQpKSx0aGlzLnJlcWNic1tyXT1baSxhXSx0aGlzLnNlbmRNZXNzYWdlKHttc2dpZDpyLGV2ZW50OmUscGF5bG9hZDpbbnVsbCxuXX0pfSl9b24oZSxuKXt0aGlzLmV2ZW50RGljdFtlXXx8KHRoaXMuZXZlbnREaWN0W2VdPVtdKSx0aGlzLmV2ZW50RGljdFtlXS5wdXNoKG4pfW9mZihlLG4pe2NvbnN0IHI9dGhpcy5ldmVudERpY3RbZV07aWYoIXIpcmV0dXJuO2NvbnN0IHM9ci5pbmRleE9mKG4pO3MhPT0tMSYmKHIuc3BsaWNlKHMsMSksci5sZW5ndGg9PT0wJiZkZWxldGUgdGhpcy5ldmVudERpY3RbZV0pfXRyaWdnZXIoZSxuPXt9KXtjb25zdCByPXRoaXMuZXZlbnREaWN0W2VdO2lmKCFyKXRocm93IG5ldyBFcnJvcihgUmVxdWVzdCBOb3QgRm91bmQ6ICR7ZX1gKTtpZihyLmxlbmd0aD09PTEpcmV0dXJuIHJbMF0obik7e2NvbnN0IHM9W107Zm9yKGxldCBvPTAsaT1yLmxlbmd0aDtvPGk7bysrKXMucHVzaChyW29dKG4pKTtyZXR1cm4gc319ZGVzdHJveSgpe3RoaXMuZXZlbnREaWN0PXt9LHRoaXMucmVxY2JzPXt9LHRoaXMuc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLHRoaXMub25NZXNzYWdlKX19Y2xhc3MgQiBleHRlbmRzIEt7Y29uc3RydWN0b3IoZSl7c3VwZXIoZSxlKX1zZW5kTWVzc2FnZShlKXt0aGlzLnRhcmdldC5wb3N0TWVzc2FnZShlKX1kZXN0cm95KCl7c3VwZXIuZGVzdHJveSgpLHRoaXMudGFyZ2V0LnRlcm1pbmF0ZSgpfX1jb25zdCBsPW5ldyBCKE8pO2wudGltZW91dD0wO2xldCBQLE07Y29uc3QgeD17bWF4QW1vdW50OjAsbWluQW1vdW50OjAsY3VycmVuY3lOYW1lOiIiLGFtb3VudDowfSxMPXtpbmZvKHQpe2wuZW1pdCgibG9nIix7dHlwZTowLG1lc3NhZ2U6dH0pfSxzdWNjZXNzKHQpe2wuZW1pdCgibG9nIix7dHlwZToxLG1lc3NhZ2U6dH0pfSxlcnJvcih0KXtsLmVtaXQoImxvZyIse3R5cGU6MixtZXNzYWdlOnR9KX19O2NsYXNzICQgZXh0ZW5kcyBXLkV2ZW50RW1pdHRlcntjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5oaXN0b3J5PVtdLHRoaXMuaXNIaXN0b3J5V2FybmluZz0hMSx0aGlzLm9uR2FtZUVuZD10aGlzLm9uR2FtZUVuZC5iaW5kKHRoaXMpfWJldChlLG4pe3JldHVybiBTKHRoaXMsbnVsbCxmdW5jdGlvbiooKXt0cnl7cmV0dXJuIHlpZWxkIGwucmVxdWVzdCgiYmV0Iix7YW1vdW50OmUscGF5b3V0Om4sY3VycmVuY3k6eH0pfWNhdGNoKHIpe3Rocm93IGNvbnNvbGUuZXJyb3IoImJldCBlcnJvcjogIixyKSxyfX0pfXN0b3AoKXtyZXR1cm4gbC5lbWl0KCJzdG9wIil9b25CZXQoKXt9b25HYW1lU3RhcnQoKXt0aGlzLmVtaXQoIkdBTUVfU1RBUlRJTkciKSxwLm9uQmV0KCl9b25HYW1lRW5kKGUpe3RoaXMuaGlzdG9yeT1lLHRoaXMuZW1pdCgiR0FNRV9FTkRFRCIsZVswXSl9Z2V0SGlzdG9yeSgpe3JldHVybiB0aGlzLmlzSGlzdG9yeVdhcm5pbmd8fChMLmluZm8oIlRoZSBoaXN0b3J5IEFQSSBpcyBkZXByZWNhdGVkLCB5b3Ugc2hvdWxkIHN0b3JlIGl0IHlvdXJzZWxmISIpLHRoaXMuaXNIaXN0b3J5V2FybmluZz0hMCksdGhpcy5oaXN0b3J5fX1jb25zdCBwPW5ldyAkO2wub24oInJlZ2lzdCIsdD0+e2xldCBlO3RyeXtlPW5ldyBGdW5jdGlvbigiZ2FtZSIsImVuZ2luZSIsImN1cnJlbmN5IiwibG9nIixgJHt0fTsgcmV0dXJuIFtjb25maWcsIG1haW5dO2ApfWNhdGNoKHMpe0wuZXJyb3Iocy5tZXNzYWdlKX1jb25zdFtuLHJdPWUocCxwLHgsTCk7cmV0dXJuIE09bixQPXIsTX0pLGwub24oInJ1biIsdD0+e09iamVjdC5hc3NpZ24oTSx0KTt0cnl7UCgpfWNhdGNoKGUpe0wuZXJyb3IoU3RyaW5nKGUpKSxwLnN0b3AoKX19KSxsLm9uKCJzeW5jQ3VycmVuY3kiLHQ9Pk9iamVjdC5hc3NpZ24oeCx0KSksbC5vbigiYmV0IiwoKT0+e3RyeXtwLm9uR2FtZVN0YXJ0KCl9Y2F0Y2godCl7TC5lcnJvcihTdHJpbmcodCkpLHAuc3RvcCgpfX0pLGwub24oImdhbWVFbmQiLHQ9PnAub25HYW1lRW5kKHQpKSxPLmFkZEV2ZW50TGlzdGVuZXIoInVuaGFuZGxlZHJlamVjdGlvbiIsdD0+e0wuZXJyb3IoU3RyaW5nKHQucmVhc29uKSkscC5zdG9wKCl9KX0pKCk7Cg==",
  it =
    typeof window != "undefined" &&
    window.Blob &&
    new Blob([atob(bt)], { type: "text/javascript;charset=utf-8" });
function Mt() {
  let e;
  try {
    if (((e = it && (window.URL || window.webkitURL).createObjectURL(it)), !e))
      throw "";
    return new Worker(e);
  } catch (l) {
    return new Worker("data:application/javascript;base64," + bt);
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const ut = class T extends Wt {
  constructor(l) {
    super(),
      (this.interval = 500),
      (this.id = Math.random()),
      (this.initPms = null),
      (this.logid = 0),
      (this.prevBetTime = Date.now()),
      (this.isAutoStep = !0),
      (this.messager = null),
      (this.handleBet = () => {
        throw new Error("no bet handle");
      }),
      (this.game = l),
      (this.state = {
        script: null,
        isRunning: !1,
        config: null,
        scriptList: [],
        logs: [],
      }),
      (this.stateSubject = new Ct(this.state)),
      (this.start = this.start.bind(this)),
      (this.stop = this.stop.bind(this)),
      (this.unRegist = this.unRegist.bind(this)),
      (this.step = this.step.bind(this)),
      this.enableAutoStep(!0);
  }
  initScript() {
    return (
      this.initPms ||
        (L.login &&
          (this.initPms = f()
            .post("/game/manage/scripts/list/", {
              gameName: this.game.config.name,
            })
            .then((l) => {
              (this.state.scriptList = l.map(
                ({ name: i, content: t, id: s, userId: a }) => ({
                  name: i,
                  content: t,
                  id: s,
                  userId: a,
                })
              )),
                this.stateSubject.next(this.state);
            })
            .catch(() => {
              this.initPms = null;
            }))),
      this.initPms
    );
  }
  delScript(i) {
    return v(this, arguments, function* ({ id: l }) {
      yield f().post("/game/manage/scripts/delete/", { id: l });
      const t = this.state.scriptList.findIndex((s) => s.id === l);
      this.state.scriptList.splice(t, 1),
        this.stateSubject.next(y({}, this.state));
    });
  }
  updateScript(l) {
    return v(this, null, function* () {
      const { id: i, name: t, content: s } = l;
      if (i === 0) {
        const { id: a, userId: n } = yield f().post(
          "/game/manage/scripts/add/",
          {
            gameName: this.game.gameName || "crash",
            name: t,
            content: lt.stringify(et.parse(s)),
          }
        );
        this.state.scriptList.push({ id: a, userId: n, name: t, content: s });
      } else {
        yield f().post("/game/manage/scripts/update/", {
          id: i,
          name: t,
          content: lt.stringify(et.parse(s)),
        }),
          (l.userId = L.userId);
        const a = this.state.scriptList.findIndex((n) => n.id === i);
        this.state.scriptList.splice(a, 1, l);
      }
      this.stateSubject.next(this.state);
    });
  }
  regist(l) {
    return v(this, null, function* () {
      (this.messager = new gt(new Mt())),
        this.messager.on("bet", this.handleBet),
        this.messager.on("log", (t) => this.addLog(t.message, t.type)),
        this.messager.on("stop", () => this.stop()),
        this.messager.on("getHistory", () => this.emit("getHistory")),
        this.syncCurrency();
      let i = null;
      try {
        i = yield this.messager.request("regist", l.content);
      } catch (t) {
        this.addLog(t.message, 2);
      } finally {
        (this.state.script = l),
          this.state.config || (this.state.config = y({}, i)),
          this.stateSubject.next(this.state);
      }
    });
  }
  unRegist() {
    this.stop(),
      (this.state.script = null),
      (this.state.logs = []),
      (this.state.config = null),
      this.stateSubject.next(this.state);
  }
  syncCurrency() {
    var s;
    const l = this.game.jackpot$.getValue(),
      i = L.setting.currencyName,
      t = l.find((a) => a.currencyName === L.setting.currencyName);
    i &&
      t &&
      ((s = this.messager) == null ||
        s.emit("syncCurrency", {
          maxAmount: t.maxBetAmount,
          minAmount: t.minBetAmount,
          currencyName: i,
          amount: Number(Vt[i].amount),
        }));
  }
  onGameEnd(l) {
    var i;
    (i = this.messager) == null || i.emit("gameEnd", l);
  }
  start() {
    var l;
    (this.state.isRunning = !0),
      !this.messager && this.state.script && this.regist(this.state.script),
      (l = this.messager) == null ||
        l.emit("run", JSON.parse(JSON.stringify(this.state.config))),
      this.addLog("Script is running!"),
      this.isAutoStep && this.step(),
      this.stateSubject.next(this.state);
  }
  step() {
    var l;
    this.state.isRunning && ((l = this.messager) == null || l.emit("bet"));
  }
  stop() {
    (this.state.isRunning = !1),
      this.addLog("Script is stopped!"),
      this.messager && (this.messager.destroy(), (this.messager = null)),
      this.stateSubject.next(this.state);
  }
  addLog(l, i = 0) {
    const t = ++this.logid;
    let s = [...this.state.logs, { message: l, type: i, id: t }];
    s.length > T.MAX_LOG && (s = s.slice(-T.MAX_LOG)),
      (this.state.logs = s),
      this.stateSubject.next(this.state);
  }
  enableAutoStep(l = !0) {
    this.isAutoStep = l;
    const i = this.game;
    this.handleBet = l
      ? ({ amount: t, payout: s, currency: a }) =>
          i
            .handleScriptBet(t, { payout: s, currencyName: a.currencyName })
            .then(
              ([n, c]) => (
                this.delay().then(() => this.step()), this.onGameEnd(c || n), n
              )
            )
            .catch((n) => {
              this.addLog(n, 2), this.stop();
            })
      : ({ amount: t, payout: s, currency: a }) =>
          i
            .handleScriptBet(t, { payout: s, currencyName: a.currencyName })
            .then(([n, c]) => (this.onGameEnd(c || n), n))
            .catch((n) => {
              this.addLog(n, 2), this.stop();
            });
  }
  delay() {
    return v(this, null, function* () {
      const l = Date.now(),
        i = this.interval - (l - this.prevBetTime);
      yield Rt.delay(Math.max(i, 0)), (this.prevBetTime = Date.now());
    });
  }
};
ut.MAX_LOG = 1e3;
let Wl = ut;
var Bt = o("<span class=font-semibold>"),
  kt = o("<span> <!>%"),
  jt = o(
    '<div class="relative font-extrabold"><div class="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1"><b class="text-primary mr-1">×'
  );
function Vl(e) {
  const [l, i] = ct(e.defaultValue);
  return d(I, {
    minValue: H,
    get maxValue() {
      return e.max || zt;
    },
    get rawValue() {
      return l();
    },
    onRawValueChange: (t) => {
      var a;
      const s = Number(
        new w(t).toFixed(e.decimals !== void 0 ? e.decimals : 2, w.ROUND_DOWN)
      );
      i(s), (a = e.onChange) == null || a.call(e, s);
    },
    get formatOptions() {
      return { maximumFractionDigits: e.decimals !== void 0 ? e.decimals : 2 };
    },
    get children() {
      return [
        d(C, {
          class: "flex w-full items-center justify-between mb-1 text-sm",
          get children() {
            return [
              ((m = Bt()), u(m, () => Z(e.labelText || "") || Z("Payout")), m),
              ((n = kt()),
              (c = n.firstChild),
              (b = c.nextSibling),
              b.nextSibling,
              u(n, () => Z("Chance"), c),
              u(
                n,
                ((a = Lt(() => !!l())),
                () => a() && Nt(l(), e.game.rtp$.value)),
                b
              ),
              n),
            ];
            var a, n, c, b, m;
          },
        }),
        ((t = jt()),
        (s = t.firstChild),
        s.firstChild,
        u(
          t,
          d(nt, {
            class: "rounded-lg",
            get value() {
              return l();
            },
            get disabled() {
              return e.disabled;
            },
            onChange: (a) => {
              var c;
              a < H && (a = H);
              const n = Number(
                new w(a).toFixed(
                  e.decimals !== void 0 ? e.decimals : 2,
                  w.ROUND_DOWN
                )
              );
              i(n), (c = e.onChange) == null || c.call(e, n);
            },
            onBlur: () => {
              l() < H && i(H);
            },
          }),
          s
        ),
        u(
          s,
          d(Kt, {
            as: "div",
            class: "static size-auto opacity-100",
            get children() {
              return d(p, {
                type: "second",
                class: "text-primary h-10 sm:h-8 rounded-md",
                get disabled() {
                  return e.disabled;
                },
                get children() {
                  return d(tt, {});
                },
              });
            },
          }),
          null
        ),
        u(
          s,
          d(Yt, {
            as: "div",
            class: "static size-auto opacity-100",
            get children() {
              return d(p, {
                type: "second",
                class: "text-primary h-10 sm:h-8 rounded-md",
                get disabled() {
                  return e.disabled;
                },
                get children() {
                  return d(tt, { class: "rotate-180" });
                },
              });
            },
          }),
          null
        ),
        t),
      ];
      var t, s;
    },
  });
}
var E = o("<div>"),
  Tt = o(
    '<svg xmlns=http://www.w3.org/2000/svg width=26 height=26 viewBox="0 0 26 26"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M2.60742 13.002C2.60742 11.0364 7.25936 6.70386 12.9999 6.70386C18.7404 6.70386 23.3923 10.9546 23.3923 13.002C23.3923 15.0495 18.7404 19.2952 12.9999 19.2952C7.25936 19.2952 2.60742 14.9677 2.60742 13.002ZM12.9948 17.633H12.9999H13.0006C15.558 17.633 17.6308 15.5601 17.6308 13.0028V12.997C17.6308 10.4367 15.5551 8.36097 12.9948 8.36097C10.4345 8.36097 8.3588 10.4367 8.3588 12.997C8.3588 15.5572 10.4345 17.633 12.9948 17.633ZM13.4862 10.515C13.3518 10.7269 13.2732 10.9783 13.272 11.2477L13.2714 11.2567C13.272 12.0171 13.8889 12.6334 14.6492 12.6334C15.0339 12.6334 15.382 12.4755 15.6322 12.2211L15.6268 12.2031C15.7132 12.4563 15.7612 12.7282 15.7624 13.0108C15.7624 14.3863 14.6474 15.5013 13.272 15.5013C11.8966 15.5013 10.7816 14.3863 10.7816 13.0108C10.7816 11.6354 11.8966 10.5204 13.272 10.5204H13.4826L13.4862 10.515Z"fill=#B3BEC1>'
  ),
  Ut = o(
    '<svg xmlns=http://www.w3.org/2000/svg width=26 height=26 viewBox="0 0 26 26"fill=none><path d="M19.3218 10.2865C20.0345 10.2865 20.6119 10.8639 20.6119 11.5765C20.6119 11.6681 20.6023 11.7589 20.5831 11.8476L18.8241 20.0236C18.4276 21.8675 16.7971 23.1849 14.9104 23.1849H10.1592C8.27247 23.1849 6.64272 21.8683 6.24543 20.0236L4.48645 11.8476C4.33655 11.1512 4.77962 10.4652 5.47597 10.3153C5.56533 10.2961 5.65615 10.2865 5.74698 10.2865H19.3211H19.3218ZM14.6083 2.91383C17.0873 3.35099 18.3611 4.9069 18.2984 7.29946L21.9455 7.94265C22.4898 8.03865 22.8531 8.55778 22.7571 9.10201L22.6567 9.67135C22.5607 10.2156 22.0415 10.5789 21.4973 10.4829L4.41483 7.47078C3.87059 7.37478 3.50727 6.85566 3.60327 6.31142L3.7037 5.74208C3.7997 5.19784 4.31883 4.83453 4.86306 4.93053L9.64229 5.77236C10.4014 3.50311 12.1301 2.47667 14.6091 2.91309L14.6083 2.91383ZM11.5689 6.11278L16.3695 6.95904C16.326 5.70663 15.6599 5.06345 14.2716 4.81902C12.8833 4.57459 12.0378 4.95046 11.5682 6.11278H11.5689Z"fill=#B3BEC1>'
  ),
  Pt = o(
    '<svg xmlns=http://www.w3.org/2000/svg width=26 height=26 viewBox="0 0 26 26"fill=none><path d="M16.7443 6.72507C17.3667 6.80557 17.9557 7.10531 18.5133 7.62233C19.0919 8.15898 19.4008 8.75519 19.4407 9.4103C19.4682 9.86449 19.2987 10.3076 18.9747 10.6276L9.15527 20.3462L4.82802 21.841C4.5538 21.9359 4.25471 21.7906 4.15982 21.5164C4.12186 21.4052 4.12186 21.2847 4.15982 21.1728L5.65459 16.8456L15.4341 7.16683C15.7797 6.82586 16.2633 6.66224 16.7443 6.72507ZM20.0637 4.23356C20.8353 4.47178 21.4492 5.05686 21.7254 5.8108L21.7679 5.93776C22.016 6.74012 21.8007 7.61448 21.2071 8.20937L21.122 8.29445L20.9669 8.45021L20.7758 8.64132L20.6743 8.74145C20.5696 8.84485 20.5088 8.90375 20.4917 8.91815C20.4073 8.99014 20.2732 8.94695 20.2673 8.85598C20.2123 7.9849 19.8982 7.26696 19.3222 6.70282C18.7607 6.15242 18.0572 5.8337 17.211 5.74797C17.0984 5.73619 16.9132 5.69103 17.1036 5.4888C17.1671 5.4214 17.3366 5.24993 17.6128 4.97375L17.7915 4.79574C18.3857 4.20215 19.2601 3.98618 20.0631 4.23421L20.0637 4.23356Z"fill=#B3BEC1>'
  ),
  Ft = o(
    '<div class="h-12 sm:h-10 bg-layer3 light-darkness flex items-center justify-between pl-4 pr-1 my-1.5 md:my-0 rounded-lg"><div class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-secondary">'
  ),
  Qt = o('<div class="text-brand px-1 py-2 font-semibold ">'),
  Et = o('<div class="bg-layer3 rounded-md p-2">'),
  Ot = o("<span>"),
  Dt = o(
    '<div><div class="text-secondary px-1"><span></span><span class="text-brand ml-2"></span></div><div class="flex justify-between gap-4 py-4">'
  ),
  At = o("<div class=forms>"),
  qt = o(
    '<div class="border bg-layer3 rounded-md p-2 border-brand mx-1 my-4 min-h-40 overflow-auto max-h-60">'
  ),
  _t = o(
    '<textarea rows=20 class="w-[calc(100%-4px)] mx-[2px] bg-layer4 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-brand resize-none box-border">'
  ),
  $t = o("<div class=space-y-2>"),
  tl = o('<div class="w-full flex justify-between gap-4">');
function mt() {
  const { game: e } = Y();
  return e.script;
}
const U = ["Simple", "Martingale", "Payout Martingale"],
  ll = (e) => {
    const { game: l } = Y(),
      [i, t] = K({ list: l.script.state.scriptList || [] }),
      s = mt(),
      a = (c, b, m) => {
        J.push(
          () => d(cl, { script: c != null ? c : void 0, game: b, disabled: m }),
          { close: !0 }
        );
      };
    return (
      vt(() => {
        var b;
        s.initScript();
        const c =
          (b = l.script) == null
            ? void 0
            : b.stateSubject.subscribe((m) => {
                t("list", [...m.scriptList]);
              });
        M(() => {
          c == null || c.unsubscribe();
        });
      }),
      (n = E()),
      u(
        n,
        d(dt, {
          get each() {
            return i.list;
          },
          children: (c) => {
            return (
              (b = Ft()),
              (m = b.firstChild),
              u(m, () => c.name),
              u(
                b,
                d(g, {
                  get when() {
                    return U.includes(c.name);
                  },
                  get children() {
                    return d(p, {
                      class: "script-view",
                      onClick: () => a(c, l, !0),
                      get children() {
                        return Tt();
                      },
                    });
                  },
                }),
                null
              ),
              u(
                b,
                d(g, {
                  get when() {
                    return !U.includes(c.name);
                  },
                  get children() {
                    return [
                      d(g, {
                        get when() {
                          return c.userId !== 0;
                        },
                        get children() {
                          return d(p, {
                            class: "script-del",
                            onClick: () => {
                              s == null || s.delScript(c);
                            },
                            get children() {
                              return Ut();
                            },
                          });
                        },
                      }),
                      d(p, {
                        class: "script-edit",
                        onClick: () => a(c, l),
                        get children() {
                          return Pt();
                        },
                      }),
                    ];
                  },
                }),
                null
              ),
              u(
                b,
                d(p, {
                  type: "second",
                  class: "h-10 sm:h-8 ml-2 px-4 text-primary rounded-md",
                  onClick: () => (s == null ? void 0 : s.regist(c)),
                  get children() {
                    return Z("Run");
                  },
                }),
                null
              ),
              b
            );
            var b, m;
          },
        }),
        null
      ),
      u(
        n,
        d(p, {
          type: "second",
          class: "w-full font-extrabold mt-1.5 lg:mt-0",
          onClick: () => a(null, l),
          get children() {
            return Z("Add a script");
          },
        }),
        null
      ),
      S(() =>
        F(
          n,
          Q(
            "grid grid-cols-1 mt-3",
            e.row === 1 ? "gap-1" : "md:grid-cols-2 md:gap-2 md:mb-2"
          )
        )
      ),
      n
    );
    var n;
  },
  el = function () {
    var D;
    const e = mt(),
      { game: l } = Y(),
      { store: i } = ft(),
      [t, s] = K({ script: {} }),
      [a, n] = ct($.getAlias(i.activeCurrency.currencyName));
    let c = null;
    const b =
      (D = l.script) == null
        ? void 0
        : D.stateSubject.subscribe((z) => {
            s("script", y({}, z));
          });
    M(() => {
      b == null || b.unsubscribe();
    }),
      P(() => {
        (e != null && e.state.isRunning) ||
          n($.getAlias(i.activeCurrency.currencyName));
      }),
      t.script.config &&
        ((c = Object.keys(t.script.config).map((G) => {
          const r = t.script.config[G];
          if (r.type === "title") return (j = Qt()), u(j, () => r.label), j;
          switch (r.type) {
            case "number":
              return d(I, {
                class: "space-y-1",
                get children() {
                  return [
                    d(C, {
                      class: "py-2",
                      get children() {
                        return r.label;
                      },
                    }),
                    d(nt, {
                      size: "small",
                      get value() {
                        return r.value;
                      },
                      get min() {
                        return r.label === "payout" ? 1.0102 : 0;
                      },
                      get max() {
                        return r.label, 1e6;
                      },
                      onChange: (V) => {
                        if (t != null && t.script.config) {
                          const X = t.script.config[G];
                          X.type !== "title" &&
                            s("script", "config", G, N(y({}, X), { value: V }));
                        }
                      },
                      get disabled() {
                        return t == null ? void 0 : t.script.isRunning;
                      },
                    }),
                  ];
                },
              });
            case "text":
              return d(I, {
                class: "space-y-1",
                get children() {
                  return [
                    d(C, {
                      class: "py-2",
                      get children() {
                        return r.label;
                      },
                    }),
                    d(at, {
                      size: "small",
                      get value() {
                        return r.value;
                      },
                      onChange: (V) => {
                        if (t != null && t.script.config) {
                          const X = t.script.config[G];
                          X.type !== "title" &&
                            s("script", "config", G, N(y({}, X), { value: V }));
                        }
                      },
                      get disabled() {
                        return t == null ? void 0 : t.script.isRunning;
                      },
                    }),
                  ];
                },
              });
            case "radio":
              return d(I, {
                class: "space-y-1",
                get children() {
                  var V = Et();
                  return (
                    u(
                      V,
                      d(Ht, {
                        get value() {
                          return r.value;
                        },
                        get options() {
                          return r.options.map((X) => X.value);
                        },
                        get disabled() {
                          return t == null ? void 0 : t.script.isRunning;
                        },
                        onChange: (X) => {
                          if (t != null && t.script.config) {
                            const R = t.script.config[G];
                            R.type !== "title" &&
                              s(
                                "script",
                                "config",
                                G,
                                N(y({}, R), { value: X })
                              );
                          }
                        },
                        children: (X) => {
                          return (
                            (R = Ot()),
                            u(R, () => {
                              var A;
                              return (A = r.options.find(
                                (ot) => ot.value === X()
                              )) == null
                                ? void 0
                                : A.label;
                            }),
                            R
                          );
                          var R;
                        },
                      })
                    ),
                    V
                  );
                },
              });
            default:
              return null;
          }
          var j;
        })),
        c.length === 0 && (c = null));
    function m() {
      J.confirm(() =>
        Z(
          "Please note that enabling computer sleep mode, shutdown and switching mobile phone to the background may affect normal functioning of the script."
        )
      ).then((z) => {
        z && (e == null || e.start());
      });
    }
    return (
      (h = Dt()),
      (B = h.firstChild),
      (k = B.firstChild),
      (O = k.nextSibling),
      (x = B.nextSibling),
      u(k, () => Z("Currency")),
      u(O, a),
      u(h, d(il, {}), x),
      u(h, c && ((W = At()), u(W, c), W), x),
      u(
        x,
        d(p, {
          type: "second",
          get class() {
            return Q("w-1/2", c ? "" : "!w-full");
          },
          onClick: () => {
            e == null || e.unRegist();
          },
          get children() {
            return Z("Close");
          },
        }),
        null
      ),
      u(
        x,
        c &&
          d(g, {
            get when() {
              return t == null ? void 0 : t.script.isRunning;
            },
            get fallback() {
              return d(p, {
                type: "brand",
                class: "w-1/2",
                onClick: m,
                get children() {
                  return Z("Run Script");
                },
              });
            },
            get children() {
              return d(p, {
                type: "second",
                class: "w-1/2",
                onClick: () => {
                  e == null || e.stop();
                },
                get children() {
                  return Z("Stop");
                },
              });
            },
          }),
        null
      ),
      h
    );
    var W, h, B, k, O, x;
  },
  il = function () {
    var n;
    const { game: e } = Y(),
      [l, i] = K({}),
      t =
        (n = e.script) == null
          ? void 0
          : n.stateSubject.subscribe((c) => {
              i(c);
            });
    let s;
    return (
      M(() => {
        t == null || t.unsubscribe();
      }),
      P(() => {
        const c = s;
        if (c) {
          const { clientHeight: b, scrollTop: m, scrollHeight: W } = c,
            h = W - b;
          h > 0 && h >= m && Math.abs(h - m) < 40 && c.scrollTo(0, W);
        }
      }),
      (a = qt()),
      typeof s == "function" ? Jt(s, a) : (s = a),
      u(
        a,
        d(dt, {
          get each() {
            return l == null ? void 0 : l.logs;
          },
          children: (c) => {
            return (
              (b = E()),
              u(b, () => c.message),
              S(() => F(b, `text-secondary text-${c.type}`)),
              b
            );
            var b;
          },
        })
      ),
      a
    );
    var a;
  },
  sl = {
    id: 0,
    name: "Script name",
    content: `
  var config = {
    bet: { label: 'bet', value: currency.minAmount * 1.2, type: 'number' },
    payout: { label: 'payout', value: 2, type: 'number' }
  }
  
  function main () {
    game.onBet = function () {
      game.bet(config.bet.value, config.payout.value).then(function(payout) {
        if (payout > 1) {
          log.success("We won, payout " + payout + "X!");
        } else {
          log.error("We lost, payout " + payout + "X!");
        }
      });
    }
  }
  `,
  },
  cl = (e) => {
    const { script: l = sl } = e,
      [i, t] = K(l),
      s = U.includes(l.name);
    return d(St, {
      get title() {
        return Z("Preview the script");
      },
      get children() {
        return [
          ((a = $t()),
          u(
            a,
            d(I, {
              class: "space-y-1",
              get children() {
                return [
                  d(C, {
                    get children() {
                      return Z("Script Name");
                    },
                  }),
                  d(at, {
                    get value() {
                      return i.name;
                    },
                    onChange: (n) => t({ name: n }),
                    class: "bg-layer4",
                  }),
                ];
              },
            }),
            null
          ),
          u(
            a,
            d(I, {
              class: "space-y-1",
              get children() {
                return [
                  d(C, {
                    get children() {
                      return Z("Script Content");
                    },
                  }),
                  ((n = _t()),
                  n.addEventListener("change", (c) =>
                    t({ content: c.target.value })
                  ),
                  S(() => (n.disabled = e.disabled)),
                  S(() => (n.value = i.content)),
                  n),
                ];
                var n;
              },
            }),
            null
          ),
          a),
          d(g, {
            when: !s,
            get children() {
              var n = tl();
              return (
                u(
                  n,
                  d(p, {
                    type: "brand",
                    class: "w-1/2",
                    onClick: () => {
                      var c;
                      return (c = e.game.script) == null
                        ? void 0
                        : c.updateScript(i).then(() => J.pop());
                    },
                    get children() {
                      return Z("Save");
                    },
                  }),
                  null
                ),
                u(
                  n,
                  d(p, {
                    type: "second",
                    class: "w-1/2",
                    onClick: () => J.pop(),
                    get children() {
                      return Z("Cancel");
                    },
                  }),
                  null
                ),
                n
              );
            },
          }),
        ];
        var a;
      },
    });
  },
  Rl = (function (e, l = !1) {
    return function (i) {
      const t = It();
      return (
        P(() => {
          l && !L.login && t("/login/signin");
        }),
        d(g, {
          get when() {
            return L.login;
          },
          get fallback() {
            return d(xt, {});
          },
          get children() {
            return d(e, i);
          },
        })
      );
    };
  })((e) => {
    var n;
    const { game: l } = Y(),
      [i, t] = K({}),
      s =
        (n = l.script) == null
          ? void 0
          : n.stateSubject.subscribe((c) => {
              t(c);
            });
    return (
      M(() => {
        s == null || s.unsubscribe(), J.pop();
      }),
      (a = E()),
      u(a, () => e.children, null),
      u(
        a,
        d(g, {
          get when() {
            return i == null ? void 0 : i.script;
          },
          get fallback() {
            return d(ll, {
              get row() {
                return e.row || 2;
              },
            });
          },
          get children() {
            return d(el, {});
          },
        }),
        null
      ),
      S(() => F(a, Q(e.className))),
      a
    );
    var a;
  }, !0);
export { Wl as G, Vl as P, Rl as a };
