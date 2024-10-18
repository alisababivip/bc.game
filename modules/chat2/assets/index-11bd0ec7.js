var kr = Object.defineProperty;
var ct = Object.getOwnPropertySymbols;
var Ir = Object.prototype.hasOwnProperty,
  Br = Object.prototype.propertyIsEnumerable;
var ut = (e, t, r) =>
    t in e
      ? kr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ce = (e, t) => {
    for (var r in t || (t = {})) Ir.call(t, r) && ut(e, r, t[r]);
    if (ct) for (var r of ct(t)) Br.call(t, r) && ut(e, r, t[r]);
    return e;
  };
var ae = (e, t, r) =>
  new Promise((n, i) => {
    var c = (d) => {
        try {
          u(r.next(d));
        } catch (a) {
          i(a);
        }
      },
      o = (d) => {
        try {
          u(r.throw(d));
        } catch (a) {
          i(a);
        }
      },
      u = (d) => (d.done ? n(d.value) : Promise.resolve(d.value).then(c, o));
    u((r = r.apply(e, t)).next());
  });
import {
  a as Be,
  c as l,
  i as s,
  m as K,
  e as F,
  s as z,
  b as $,
  t as _,
  d as re,
  f as ee,
  u as ke,
  T as Xe,
  g as Mt,
  h as Nt,
  P as Er,
  D as Rr,
} from "./i18n-961d0749.js";
import {
  t as Oe,
  g as et,
  b as Ie,
  D as Dr,
  c as G,
  d as le,
  F as De,
  S as H,
  a as ue,
  e as He,
  o as _e,
  f as Tt,
  m as Ot,
  s as Ht,
  u as tt,
  h as Ur,
  i as Pt,
  j as Lr,
  E as Mr,
  k as Nr,
  l as Tr,
} from "./toString-486436aa.js";
import { p as me, d as Or, b as Hr } from "./index-105ff8da.js";
import {
  M as zt,
  t as Wt,
  G as Pr,
  E as zr,
  n as dt,
} from "./Emoji-4d44ab1c.js";
import {
  d as te,
  S as rt,
  A as pe,
  f as Z,
  s as xe,
  D as Ae,
  B as j,
  I as de,
  h as Q,
  u as J,
  e as X,
  p as V,
  i as Me,
  t as ge,
  g as oe,
  L as Ne,
  P as he,
  r as Wr,
  b as Ft,
  j as Fr,
  a as Te,
  k as Yr,
  T as Pe,
  l as nt,
  m as jr,
  n as Gr,
  o as Kr,
  q as Vr,
  v as We,
  w as Yt,
  U as Qr,
  x as Zr,
} from "./manifest-9a1a4b52.js";
import { b as qr, c as Ue, u as jt } from "./unescape-fec905cb.js";
import { I as q } from "./store-00ffcf83.js";
import { U as Jr } from "./User-d13a8923.js";
import "./router-251b14d1.js";
function Xr(e, t, r) {
  var n = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t),
    (r = r > i ? i : r),
    r < 0 && (r += i),
    (i = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0);
  for (var c = Array(i); ++n < i; ) c[n] = e[n + t];
  return c;
}
function en(e, t, r) {
  var n = e.length;
  return (r = r === void 0 ? n : r), !t && r >= n ? e : Xr(e, t, r);
}
var tn = "\\ud800-\\udfff",
  rn = "\\u0300-\\u036f",
  nn = "\\ufe20-\\ufe2f",
  sn = "\\u20d0-\\u20ff",
  an = rn + nn + sn,
  ln = "\\ufe0e\\ufe0f",
  on = "\\u200d",
  cn = RegExp("[" + on + tn + an + ln + "]");
function Gt(e) {
  return cn.test(e);
}
function un(e) {
  return e.split("");
}
var Kt = "\\ud800-\\udfff",
  dn = "\\u0300-\\u036f",
  fn = "\\ufe20-\\ufe2f",
  gn = "\\u20d0-\\u20ff",
  hn = dn + fn + gn,
  mn = "\\ufe0e\\ufe0f",
  vn = "[" + Kt + "]",
  Ze = "[" + hn + "]",
  qe = "\\ud83c[\\udffb-\\udfff]",
  bn = "(?:" + Ze + "|" + qe + ")",
  Vt = "[^" + Kt + "]",
  Qt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Zt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  pn = "\\u200d",
  qt = bn + "?",
  Jt = "[" + mn + "]?",
  xn = "(?:" + pn + "(?:" + [Vt, Qt, Zt].join("|") + ")" + Jt + qt + ")*",
  An = Jt + qt + xn,
  $n = "(?:" + [Vt + Ze + "?", Ze, Qt, Zt, vn].join("|") + ")",
  _n = RegExp(qe + "(?=" + qe + ")|" + $n + An, "g");
function Cn(e) {
  return e.match(_n) || [];
}
function wn(e) {
  return Gt(e) ? Cn(e) : un(e);
}
function yn(e) {
  return function (t) {
    t = Oe(t);
    var r = Gt(t) ? wn(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      i = r ? en(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var Sn = yn("toUpperCase");
const Xt = Sn;
function kn(e) {
  return Xt(Oe(e).toLowerCase());
}
function In(e, t, r, n) {
  var i = -1,
    c = e == null ? 0 : e.length;
  for (n && c && (r = e[++i]); ++i < c; ) r = t(r, e[i], i, e);
  return r;
}
var Bn = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s",
  },
  En = qr(Bn);
const Rn = En;
var Dn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  Un = "\\u0300-\\u036f",
  Ln = "\\ufe20-\\ufe2f",
  Mn = "\\u20d0-\\u20ff",
  Nn = Un + Ln + Mn,
  Tn = "[" + Nn + "]",
  On = RegExp(Tn, "g");
function Hn(e) {
  return (e = Oe(e)), e && e.replace(Dn, Rn).replace(On, "");
}
var Pn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function zn(e) {
  return e.match(Pn) || [];
}
var Wn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Fn(e) {
  return Wn.test(e);
}
var er = "\\ud800-\\udfff",
  Yn = "\\u0300-\\u036f",
  jn = "\\ufe20-\\ufe2f",
  Gn = "\\u20d0-\\u20ff",
  Kn = Yn + jn + Gn,
  tr = "\\u2700-\\u27bf",
  rr = "a-z\\xdf-\\xf6\\xf8-\\xff",
  Vn = "\\xac\\xb1\\xd7\\xf7",
  Qn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  Zn = "\\u2000-\\u206f",
  qn =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  nr = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  Jn = "\\ufe0e\\ufe0f",
  sr = Vn + Qn + Zn + qn,
  ar = "['’]",
  ft = "[" + sr + "]",
  Xn = "[" + Kn + "]",
  ir = "\\d+",
  es = "[" + tr + "]",
  lr = "[" + rr + "]",
  or = "[^" + er + sr + ir + tr + rr + nr + "]",
  ts = "\\ud83c[\\udffb-\\udfff]",
  rs = "(?:" + Xn + "|" + ts + ")",
  ns = "[^" + er + "]",
  cr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  ur = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  ye = "[" + nr + "]",
  ss = "\\u200d",
  gt = "(?:" + lr + "|" + or + ")",
  as = "(?:" + ye + "|" + or + ")",
  ht = "(?:" + ar + "(?:d|ll|m|re|s|t|ve))?",
  mt = "(?:" + ar + "(?:D|LL|M|RE|S|T|VE))?",
  dr = rs + "?",
  fr = "[" + Jn + "]?",
  is = "(?:" + ss + "(?:" + [ns, cr, ur].join("|") + ")" + fr + dr + ")*",
  ls = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  os = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  cs = fr + dr + is,
  us = "(?:" + [es, cr, ur].join("|") + ")" + cs,
  ds = RegExp(
    [
      ye + "?" + lr + "+" + ht + "(?=" + [ft, ye, "$"].join("|") + ")",
      as + "+" + mt + "(?=" + [ft, ye + gt, "$"].join("|") + ")",
      ye + "?" + gt + "+" + ht,
      ye + "+" + mt,
      os,
      ls,
      ir,
      us,
    ].join("|"),
    "g"
  );
function fs(e) {
  return e.match(ds) || [];
}
function gs(e, t, r) {
  return (
    (e = Oe(e)),
    (t = r ? void 0 : t),
    t === void 0 ? (Fn(e) ? fs(e) : zn(e)) : e.match(t) || []
  );
}
var hs = "['’]",
  ms = RegExp(hs, "g");
function vs(e) {
  return function (t) {
    return In(gs(Hn(t).replace(ms, "")), e, "");
  };
}
var bs = vs(function (e, t, r) {
  return (t = t.toLowerCase()), e + (r ? kn(t) : t);
});
const ps = bs;
var xs = !Be,
  As = xs && !!Dr,
  gr = () => {};
function $s(e) {
  return e !== null && (typeof e == "object" || typeof e == "function");
}
var _s = (e) => (typeof e == "function" && !e.length ? e() : e);
function vt(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
var Cs = As ? (e) => (et() ? Ie(e) : e) : Ie,
  ws = () => {
    let e = [];
    const t = () => (e = []);
    return {
      push: (...r) => e.push(...r),
      execute(r, n, i, c) {
        e.forEach((o) => o(r, n, i, c)), t();
      },
      clear: t,
    };
  };
function ys(e) {
  return l(zt, {
    get msg() {
      var t;
      return ((t = e.data) == null ? void 0 : t.chat) || [];
    },
    inPublic: !0,
  });
}
var Ss = _("<span>"),
  ks = _('<div class="center w-full">'),
  bt = _(
    '<div class=center><span class="font-extrabold mr-1"></span><img class="w-4 h-4">'
  ),
  Is = _('<div class="flex justify-between mb-1">'),
  Bs = _('<div class=spin><img src=src/public/assets/spin/png alt=""> 1 Spin');
function Es(e) {
  if (!Array.isArray(e.list)) return;
  const t = 3,
    [r, n] = G(!1),
    i = le(() => (r() ? e.list : e.list.slice(0, t))),
    c = le(() => te.bonusCurrencyName !== "BCD");
  return l(rt, {
    get class() {
      return e.limitHeight ? "max-h-20" : "max-h-44";
    },
    get children() {
      return [
        l(De, {
          get each() {
            return i();
          },
          children: (o) =>
            (() => {
              var u = Is();
              return (
                s(
                  u,
                  l(pe, {
                    class: "font-semibold text-brand ellipsis",
                    get href() {
                      return `/user/profile/${o.userId}`;
                    },
                    get children() {
                      return ["@", K(() => Z.userName(o.userName))];
                    },
                  }),
                  null
                ),
                s(
                  u,
                  l(H, {
                    get when() {
                      return o.currencyName;
                    },
                    get fallback() {
                      return Bs();
                    },
                    get children() {
                      return l(H, {
                        get when() {
                          return c();
                        },
                        get fallback() {
                          return (() => {
                            var d = bt(),
                              a = d.firstChild,
                              g = a.nextSibling;
                            return (
                              s(a, () => parseFloat(o.amount)),
                              F(() => z(g, "src", Z.coinIcon(o.currencyName))),
                              d
                            );
                          })();
                        },
                        get children() {
                          var d = bt(),
                            a = d.firstChild,
                            g = a.nextSibling;
                          return (
                            s(a, () =>
                              xe.printCurrency(
                                new Ae(o.amount),
                                te.bonusCurrencyName
                              )
                            ),
                            F(() =>
                              z(g, "src", Z.coinIcon(te.bonusCurrencyName))
                            ),
                            d
                          );
                        },
                      });
                    },
                  }),
                  null
                ),
                u
              );
            })(),
        }),
        l(H, {
          get when() {
            return e.list.length >= t;
          },
          get children() {
            var o = ks();
            return (
              s(
                o,
                l(j, {
                  size: "s",
                  type: "second",
                  onClick: () => n(!r()),
                  get children() {
                    return [
                      (() => {
                        var u = Ss();
                        return (
                          s(
                            u,
                            (() => {
                              var d = K(() => !!r());
                              return () =>
                                d() ? $("Show less") : $("Show more");
                            })()
                          ),
                          u
                        );
                      })(),
                      l(de, {
                        get class() {
                          return Q(
                            "w-4 transition-all",
                            r() ? "rotate-90" : "-rotate-90"
                          );
                        },
                        name: "Arrow",
                      }),
                    ];
                  },
                })
              ),
              o
            );
          },
        }),
      ];
    },
  });
}
const Rs = "/modules/chat2/assets/bg_star-3ef9fe60.png",
  Ds =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAABYBAMAAAA6ivxmAAAAJFBMVEUAAADX3Obj4+PY2+XZ3ubZ3ufa3ufb3enb4Orb4Ofb3ufa4Oeae7JkAAAADHRSTlMAMwMJLiAqDxcSJRu+UcGpAAACsUlEQVR42u3aP2/TQBjH8Z8cpcZk4QdpKGUJovwRXZIuiE64E38WggRixANCYmrEG8BCiJUM7I2AiYWy8e6I4lSK45g7c7nqeSx/3sH1+nXsuweNRqPRaDQchF9QH+MPqI2Qv1AbEz5DXUTkCbQw5T0hX0MLQ94RyYdQwpT3hOQlKGHIO+LMZeiwNu9WP7cxvAId1ubd7r06WNoYXoUK6/NukXzzsX+2MbwGFUrynnJmtj0R53agQVneY2YSzl2HWBZ5bzFnG2JZ5B0xZxdi2eQdc1kPclnknXJZF3JZ5L3HnD7Essi7w5xHcldjkXeLeY8hlkXeI+a9hVQWeQ+54huEssj7Ilc9h0wWeYcs+A2RbPJOuKor9PjMIu+UBT2ZJ5vFvA07I/nt2Zx3xKLdASQy573Hgm2Za7HIO9WzFmPegaK1GPNuc8VTNa+axbyHetZiznuq5hPAnHfInB3JazHknft8E3/WbMw75RLh9zOmvIOYy2RfA5ry7jBP6OuyIe/8zj15wcwx5DLmPSL57s8BcCr+pMmYd9j98XmQPSnEnwEW8i4/WQ+mwo+aK+V9W+43WfW8W7GfW8A7cFc976Gf+9nhMZxVzzv0M9MwdNhth7xTL6MzY4ffLoe8O/QxoZU6hOiS94gejstOz547fVTimvc9DrBxo+yP+ODlCapwzjtIAB+L4fuvCSum4573ITZv6nD165R3gM1L6DD74Sdv97u7I7gx5+3fLWZcn/rmvP27G3u6kz/EuYtiX0M5Ac5bmNWvacSwVGvKBU0D0yX2tZwuWtmPNQyyVX+YUe6lT4XV1CaaxcNZ05Dxv6UKZgytjTUcY9u6QbKXkDyCflvz+O9/+i75gNFWm+z1MXMT+l2oxz9YJmS3Br+XC0E9fmEWYpmza//nJ2qkPsU0qvsL7M6sMsHq3IoAAAAASUVORK5CYII=",
  Us = "/modules/chat2/assets/cat-e4584e44.png",
  Ls = "/modules/chat2/assets/crash_rain-c6c060d1.png",
  Ms = "/modules/chat2/assets/game_rain-59e1a595.png",
  Ns =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAWCAMAAACWh252AAAAZlBMVEUAAAAnteUpueooteYnteYptuonteUoteYnteYntecntugptecwt+gwwucr1f8otOZg//8otOYnteYnteYotOUnteYoteYotOYoteYntecptecoteUot+crt+YnteYpuegsu+wntOWb9tUnAAAAIXRSTlMA+CTpwSbPvKx9YkYVCgbKAvPx4trWpZqNdWlZQDw0KxrwSWxJAAAAyklEQVQoz5WRVxLDIAxEwRj33rut+18yIJExcYaZ5H3Y2tV+LMB+w4u/vdizRMjP5/7k/i0SgLJ6BHyA5D1nAgCWz/2iLJEZMYCiuez91WhvIJECEtmBiLyUGgIhrVMZi3rWRq13YDVWjaozatNi3/V3M1aHgYmEyNVc9H2hfrkgb8JAHuiZY6EYIMbiXHtBzpBiDssRL1Yqn0usOZbhXLAnPlV3kgCSuPZVS4G2cj06GDxHIANDxhwEtA+cJQ88PT+YExkJEUn2Fy/zyBb1BaTKgQAAAABJRU5ErkJggg==",
  Ts = "/modules/chat2/assets/ribbon-ea676df2.gif",
  Os = "/modules/chat2/assets/star-781a1f19.png",
  Ee = {
    bg_star: Rs,
    bg_star_w: Ds,
    cat: Us,
    crash_rain: Ls,
    game_rain: Ms,
    rain: Ns,
    ribbon: Ts,
    star: Os,
  };
var Hs = _(
    '<div class="flex flex-col gap-2"><div class="flex items-center gap-2"><img alt=img class="w-10 h-10"><div class=title-word><p class=font-extrabold></p><div class="flex text-brand"><span>@</span><span></span></div></div></div><div class="bg-layer4 rounded-lg p-2 center flex-col relative"><img class="absolute left-0 w-full h-16"><div class="i sp"><p class="center gap-1"><span class=flex>Won</span><span class="text-brand font-extrabold text-xl"></span></p><p class="center text-secondary gap-1"><span>in</span></p></div></div><div class=center><span class="text-[#43C8ED] font-semibold">💧 <!>💧 '
  ),
  Ps = _(
    '<div class="flex flex-col gap-2"><div class="flex items-center"><div class="w-10 h-10 mr-2"><img alt=img></div><div><p class=font-extrabold></p><p class="text-xl text-brand font-extrabold">100X!!</p></div></div><div class="bg-layer4 rounded-lg p-2 relative"><img class="absolute left-0 w-full h-16"><img class=w-4/5></div><div class=center><span class="text-[#43C8ED] font-semibold">💧 <!>💧 '
  );
const zs = (e) =>
    (() => {
      var t = Hs(),
        r = t.firstChild,
        n = r.firstChild,
        i = n.nextSibling,
        c = i.firstChild,
        o = c.nextSibling,
        u = o.firstChild,
        d = u.nextSibling,
        a = r.nextSibling,
        g = a.firstChild,
        x = g.nextSibling,
        A = x.firstChild,
        w = A.firstChild,
        v = w.nextSibling,
        p = A.nextSibling;
      p.firstChild;
      var S = a.nextSibling,
        M = S.firstChild,
        m = M.firstChild,
        f = m.nextSibling;
      return (
        f.nextSibling,
        s(c, () => $("Congratulations!")),
        s(d, () => e.userName),
        s(v, () => `$${new Ae(e.amount).toFixed(2)}`),
        s(
          p,
          l(pe, {
            class: "text-brand_alt",
            get href() {
              return e.gameUrl;
            },
            get children() {
              return e.fullName;
            },
          }),
          null
        ),
        s(M, () => $("Here comes the lucky rain"), f),
        F(
          (h) => {
            var C = Ee.crash_rain,
              k = Ee.ribbon;
            return (
              C !== h.e && z(n, "src", (h.e = C)),
              k !== h.t && z(g, "src", (h.t = k)),
              h
            );
          },
          { e: void 0, t: void 0 }
        ),
        t
      );
    })(),
  Ws = (e) => {
    const t = J();
    return (() => {
      var r = Ps(),
        n = r.firstChild,
        i = n.firstChild,
        c = i.firstChild,
        o = i.nextSibling,
        u = o.firstChild,
        d = n.nextSibling,
        a = d.firstChild,
        g = a.nextSibling,
        x = d.nextSibling,
        A = x.firstChild,
        w = A.firstChild,
        v = w.nextSibling;
      return (
        v.nextSibling,
        s(u, () => $("The Crash reaches")),
        (g.$$click = () => t(e.gameUrl)),
        s(A, () => $("Here comes the lucky rain"), v),
        F(
          (p) => {
            var S = Ee.crash_rain,
              M = Ee.ribbon,
              m = Ee.cat;
            return (
              S !== p.e && z(c, "src", (p.e = S)),
              M !== p.t && z(a, "src", (p.t = M)),
              m !== p.a && z(g, "src", (p.a = m)),
              p
            );
          },
          { e: void 0, t: void 0, a: void 0 }
        ),
        r
      );
    })();
  };
re(["click"]);
var Le = _("<div>"),
  Fs = _(
    "<div><span class=cl-primary> </span><span></span><span class=level-message>"
  ),
  Ys = _(
    '<div class="bg-layer5 p-3 rounded-lg h-64"><div class=mb-2></div><div class=h-fit>'
  ),
  js = _("<button class=center>: <p class=mx-1>"),
  Gs = _("<button class=center>: <p class=w>"),
  Ks = _("<div class=congratulations>"),
  Vs = _('<div class="flex justify-end text-secondary font-semibold mt-1">'),
  Qs = _(
    '<div class=text-secondary><span class=text-primary></span><span class=ml-1></span><span>"<!>"'
  );
function Zs(e) {
  const t = J(),
    r = () => e.data.chat.message,
    [n, i] = G([]),
    [c, o] = G([]),
    [u, d] = G(!1),
    [a, g] = G(!1),
    [x, A] = G({});
  ue(() => {
    switch ((d(!1), g(!1), A({}), o([]), e.data.chat.subType)) {
      case "2":
        o(
          (() => {
            var v = Le();
            return s(v, () => $("Who hit __ENV_COCO__:")), v;
          })()
        ),
          i(r());
        break;
      case "3":
        o(
          (() => {
            var v = Le();
            return s(v, () => $("Rained And Left a Message: ")), v;
          })()
        ),
          i(r());
        break;
      case "4":
        o(
          (() => {
            var v = Le();
            return s(v, () => $("The leaderboard bonus has been granted!")), v;
          })()
        ),
          i(r());
        break;
      case "5":
        o(
          (() => {
            var v = Le();
            return s(v, () => $("The roll bonus has been awarded:")), v;
          })()
        ),
          i(r());
        break;
      case "6":
        o(
          l(qs, {
            get userId() {
              return r().userId;
            },
            get userName() {
              return r().userName;
            },
            get remark() {
              return r().remark;
            },
          })
        ),
          i(r().winnerInfo);
        break;
      case "11":
        o(
          (() => {
            var v = Fs(),
              p = v.firstChild,
              S = p.firstChild,
              M = p.nextSibling,
              m = M.nextSibling;
            return (
              s(p, () => X.host, S),
              s(M, () => $("Rained And Left a Message: ")),
              s(
                m,
                (() => {
                  var f = K(() => !!r().remark);
                  return () =>
                    f() ? r().remark : $("Rainer Rainer, Chicken Dinner");
                })()
              ),
              v
            );
          })()
        ),
          i(r().users);
        break;
      case "16":
        o(
          l(Ws, {
            get gameUrl() {
              return r().info.gameUrl;
            },
          })
        ),
          i(r().winnerInfoList),
          d(!0),
          A({ gameId: r().info.gameId, gameUnique: r().info.gameUnique });
        break;
      case "17":
        o(
          l(zs, {
            get userName() {
              return r().info.userName || "";
            },
            get userId() {
              return r().info.userId || 0;
            },
            get amount() {
              return r().info.profitAmountUsd || "";
            },
            get fullName() {
              return r().info.fullName || "";
            },
            get gameUrl() {
              return r().info.gameUrl || "";
            },
          })
        ),
          i(r().winnerInfoList),
          g(!0),
          A(Ce({}, r().info));
        break;
    }
  });
  const w = () => a() || u();
  return [
    (() => {
      var v = Ys(),
        p = v.firstChild,
        S = p.nextSibling;
      return (
        s(
          p,
          l(He, {
            get children() {
              return c();
            },
          })
        ),
        s(
          S,
          l(Es, {
            get list() {
              return n();
            },
            get limitHeight() {
              return (
                e.data.chat.subType === "16" || e.data.chat.subType === "17"
              );
            },
          })
        ),
        v
      );
    })(),
    (() => {
      var v = Vs();
      return (
        s(
          v,
          l(H, {
            get when() {
              return u();
            },
            get children() {
              var p = js(),
                S = p.firstChild,
                M = S.nextSibling;
              return (
                (p.$$click = () => {
                  t(`/allplayers/${x().gameUnique}/${x().gameId}`);
                }),
                s(p, () => $("Game ID"), S),
                s(M, () => x().gameId),
                s(
                  p,
                  l(de, { name: "Arrow", class: "rotate-180 text-sm w-4" }),
                  null
                ),
                p
              );
            },
          }),
          null
        ),
        s(
          v,
          l(H, {
            get when() {
              return a();
            },
            get children() {
              var p = Gs(),
                S = p.firstChild,
                M = S.nextSibling;
              return (
                (p.$$click = () => {
                  t(`/game-detail/${x().distributedId}`);
                }),
                s(p, () => $("Bet ID"), S),
                s(M, () => x().distributedId),
                s(
                  p,
                  l(de, { name: "Arrow", class: "rotate-180 text-sm w-4" }),
                  null
                ),
                p
              );
            },
          }),
          null
        ),
        s(
          v,
          l(H, {
            get when() {
              return !w();
            },
            get children() {
              var p = Ks();
              return s(p, () => $("Congratulations!")), p;
            },
          }),
          null
        ),
        v
      );
    })(),
  ];
}
const qs = (e) =>
  (() => {
    var t = Qs(),
      r = t.firstChild,
      n = r.nextSibling,
      i = n.nextSibling,
      c = i.firstChild,
      o = c.nextSibling;
    return (
      o.nextSibling,
      s(r, () => e.userName),
      s(n, () => $("Rained And Left a Message: ")),
      s(
        i,
        (() => {
          var u = K(() => !!e.remark);
          return () => (u() ? e.remark : $("Rainer Rainer, Chicken Dinner"));
        })(),
        o
      ),
      t
    );
  })();
re(["click"]);
var ce =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function hr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Js(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var i = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    r
  );
}
function Xs(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var mr = { exports: {} };
const ea = {},
  ta = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ea },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ra = Js(ta);
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(ce, function () {
    var r =
      r ||
      (function (n, i) {
        var c;
        if (
          (typeof window != "undefined" && window.crypto && (c = window.crypto),
          typeof self != "undefined" && self.crypto && (c = self.crypto),
          typeof globalThis != "undefined" &&
            globalThis.crypto &&
            (c = globalThis.crypto),
          !c &&
            typeof window != "undefined" &&
            window.msCrypto &&
            (c = window.msCrypto),
          !c && typeof ce != "undefined" && ce.crypto && (c = ce.crypto),
          !c && typeof Xs == "function")
        )
          try {
            c = ra;
          } catch (m) {}
        var o = function () {
            if (c) {
              if (typeof c.getRandomValues == "function")
                try {
                  return c.getRandomValues(new Uint32Array(1))[0];
                } catch (m) {}
              if (typeof c.randomBytes == "function")
                try {
                  return c.randomBytes(4).readInt32LE();
                } catch (m) {}
            }
            throw new Error(
              "Native crypto module could not be used to get secure random number."
            );
          },
          u =
            Object.create ||
            (function () {
              function m() {}
              return function (f) {
                var h;
                return (
                  (m.prototype = f), (h = new m()), (m.prototype = null), h
                );
              };
            })(),
          d = {},
          a = (d.lib = {}),
          g = (a.Base = (function () {
            return {
              extend: function (m) {
                var f = u(this);
                return (
                  m && f.mixIn(m),
                  (!f.hasOwnProperty("init") || this.init === f.init) &&
                    (f.init = function () {
                      f.$super.init.apply(this, arguments);
                    }),
                  (f.init.prototype = f),
                  (f.$super = this),
                  f
                );
              },
              create: function () {
                var m = this.extend();
                return m.init.apply(m, arguments), m;
              },
              init: function () {},
              mixIn: function (m) {
                for (var f in m) m.hasOwnProperty(f) && (this[f] = m[f]);
                m.hasOwnProperty("toString") && (this.toString = m.toString);
              },
              clone: function () {
                return this.init.prototype.extend(this);
              },
            };
          })()),
          x = (a.WordArray = g.extend({
            init: function (m, f) {
              (m = this.words = m || []),
                f != i ? (this.sigBytes = f) : (this.sigBytes = m.length * 4);
            },
            toString: function (m) {
              return (m || w).stringify(this);
            },
            concat: function (m) {
              var f = this.words,
                h = m.words,
                C = this.sigBytes,
                k = m.sigBytes;
              if ((this.clamp(), C % 4))
                for (var B = 0; B < k; B++) {
                  var N = (h[B >>> 2] >>> (24 - (B % 4) * 8)) & 255;
                  f[(C + B) >>> 2] |= N << (24 - ((C + B) % 4) * 8);
                }
              else for (var W = 0; W < k; W += 4) f[(C + W) >>> 2] = h[W >>> 2];
              return (this.sigBytes += k), this;
            },
            clamp: function () {
              var m = this.words,
                f = this.sigBytes;
              (m[f >>> 2] &= 4294967295 << (32 - (f % 4) * 8)),
                (m.length = n.ceil(f / 4));
            },
            clone: function () {
              var m = g.clone.call(this);
              return (m.words = this.words.slice(0)), m;
            },
            random: function (m) {
              for (var f = [], h = 0; h < m; h += 4) f.push(o());
              return new x.init(f, m);
            },
          })),
          A = (d.enc = {}),
          w = (A.Hex = {
            stringify: function (m) {
              for (var f = m.words, h = m.sigBytes, C = [], k = 0; k < h; k++) {
                var B = (f[k >>> 2] >>> (24 - (k % 4) * 8)) & 255;
                C.push((B >>> 4).toString(16)), C.push((B & 15).toString(16));
              }
              return C.join("");
            },
            parse: function (m) {
              for (var f = m.length, h = [], C = 0; C < f; C += 2)
                h[C >>> 3] |=
                  parseInt(m.substr(C, 2), 16) << (24 - (C % 8) * 4);
              return new x.init(h, f / 2);
            },
          }),
          v = (A.Latin1 = {
            stringify: function (m) {
              for (var f = m.words, h = m.sigBytes, C = [], k = 0; k < h; k++) {
                var B = (f[k >>> 2] >>> (24 - (k % 4) * 8)) & 255;
                C.push(String.fromCharCode(B));
              }
              return C.join("");
            },
            parse: function (m) {
              for (var f = m.length, h = [], C = 0; C < f; C++)
                h[C >>> 2] |= (m.charCodeAt(C) & 255) << (24 - (C % 4) * 8);
              return new x.init(h, f);
            },
          }),
          p = (A.Utf8 = {
            stringify: function (m) {
              try {
                return decodeURIComponent(escape(v.stringify(m)));
              } catch (f) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function (m) {
              return v.parse(unescape(encodeURIComponent(m)));
            },
          }),
          S = (a.BufferedBlockAlgorithm = g.extend({
            reset: function () {
              (this._data = new x.init()), (this._nDataBytes = 0);
            },
            _append: function (m) {
              typeof m == "string" && (m = p.parse(m)),
                this._data.concat(m),
                (this._nDataBytes += m.sigBytes);
            },
            _process: function (m) {
              var f,
                h = this._data,
                C = h.words,
                k = h.sigBytes,
                B = this.blockSize,
                N = B * 4,
                W = k / N;
              m
                ? (W = n.ceil(W))
                : (W = n.max((W | 0) - this._minBufferSize, 0));
              var b = W * B,
                y = n.min(b * 4, k);
              if (b) {
                for (var E = 0; E < b; E += B) this._doProcessBlock(C, E);
                (f = C.splice(0, b)), (h.sigBytes -= y);
              }
              return new x.init(f, y);
            },
            clone: function () {
              var m = g.clone.call(this);
              return (m._data = this._data.clone()), m;
            },
            _minBufferSize: 0,
          }));
        a.Hasher = S.extend({
          cfg: g.extend(),
          init: function (m) {
            (this.cfg = this.cfg.extend(m)), this.reset();
          },
          reset: function () {
            S.reset.call(this), this._doReset();
          },
          update: function (m) {
            return this._append(m), this._process(), this;
          },
          finalize: function (m) {
            m && this._append(m);
            var f = this._doFinalize();
            return f;
          },
          blockSize: 16,
          _createHelper: function (m) {
            return function (f, h) {
              return new m.init(h).finalize(f);
            };
          },
          _createHmacHelper: function (m) {
            return function (f, h) {
              return new M.HMAC.init(m, h).finalize(f);
            };
          },
        });
        var M = (d.algo = {});
        return d;
      })(Math);
    return r;
  });
})(mr);
var fe = mr.exports,
  vr = { exports: {} },
  Fe = { exports: {} },
  pt;
function na() {
  return (
    pt ||
      ((pt = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(fe);
        })(ce, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                c = i.WordArray,
                o = n.enc;
              o.Base64 = {
                stringify: function (d) {
                  var a = d.words,
                    g = d.sigBytes,
                    x = this._map;
                  d.clamp();
                  for (var A = [], w = 0; w < g; w += 3)
                    for (
                      var v = (a[w >>> 2] >>> (24 - (w % 4) * 8)) & 255,
                        p =
                          (a[(w + 1) >>> 2] >>> (24 - ((w + 1) % 4) * 8)) & 255,
                        S =
                          (a[(w + 2) >>> 2] >>> (24 - ((w + 2) % 4) * 8)) & 255,
                        M = (v << 16) | (p << 8) | S,
                        m = 0;
                      m < 4 && w + m * 0.75 < g;
                      m++
                    )
                      A.push(x.charAt((M >>> (6 * (3 - m))) & 63));
                  var f = x.charAt(64);
                  if (f) for (; A.length % 4; ) A.push(f);
                  return A.join("");
                },
                parse: function (d) {
                  var a = d.length,
                    g = this._map,
                    x = this._reverseMap;
                  if (!x) {
                    x = this._reverseMap = [];
                    for (var A = 0; A < g.length; A++) x[g.charCodeAt(A)] = A;
                  }
                  var w = g.charAt(64);
                  if (w) {
                    var v = d.indexOf(w);
                    v !== -1 && (a = v);
                  }
                  return u(d, a, x);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function u(d, a, g) {
                for (var x = [], A = 0, w = 0; w < a; w++)
                  if (w % 4) {
                    var v = g[d.charCodeAt(w - 1)] << ((w % 4) * 2),
                      p = g[d.charCodeAt(w)] >>> (6 - (w % 4) * 2),
                      S = v | p;
                    (x[A >>> 2] |= S << (24 - (A % 4) * 8)), A++;
                  }
                return c.create(x, A);
              }
            })(),
            r.enc.Base64
          );
        });
      })(Fe)),
    Fe.exports
  );
}
var Ye = { exports: {} },
  xt;
function sa() {
  return (
    xt ||
      ((xt = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(fe);
        })(ce, function (r) {
          return (
            (function (n) {
              var i = r,
                c = i.lib,
                o = c.WordArray,
                u = c.Hasher,
                d = i.algo,
                a = [];
              (function () {
                for (var p = 0; p < 64; p++)
                  a[p] = (n.abs(n.sin(p + 1)) * 4294967296) | 0;
              })();
              var g = (d.MD5 = u.extend({
                _doReset: function () {
                  this._hash = new o.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (p, S) {
                  for (var M = 0; M < 16; M++) {
                    var m = S + M,
                      f = p[m];
                    p[m] =
                      (((f << 8) | (f >>> 24)) & 16711935) |
                      (((f << 24) | (f >>> 8)) & 4278255360);
                  }
                  var h = this._hash.words,
                    C = p[S + 0],
                    k = p[S + 1],
                    B = p[S + 2],
                    N = p[S + 3],
                    W = p[S + 4],
                    b = p[S + 5],
                    y = p[S + 6],
                    E = p[S + 7],
                    I = p[S + 8],
                    T = p[S + 9],
                    P = p[S + 10],
                    Y = p[S + 11],
                    O = p[S + 12],
                    ne = p[S + 13],
                    se = p[S + 14],
                    ve = p[S + 15],
                    R = h[0],
                    D = h[1],
                    U = h[2],
                    L = h[3];
                  (R = x(R, D, U, L, C, 7, a[0])),
                    (L = x(L, R, D, U, k, 12, a[1])),
                    (U = x(U, L, R, D, B, 17, a[2])),
                    (D = x(D, U, L, R, N, 22, a[3])),
                    (R = x(R, D, U, L, W, 7, a[4])),
                    (L = x(L, R, D, U, b, 12, a[5])),
                    (U = x(U, L, R, D, y, 17, a[6])),
                    (D = x(D, U, L, R, E, 22, a[7])),
                    (R = x(R, D, U, L, I, 7, a[8])),
                    (L = x(L, R, D, U, T, 12, a[9])),
                    (U = x(U, L, R, D, P, 17, a[10])),
                    (D = x(D, U, L, R, Y, 22, a[11])),
                    (R = x(R, D, U, L, O, 7, a[12])),
                    (L = x(L, R, D, U, ne, 12, a[13])),
                    (U = x(U, L, R, D, se, 17, a[14])),
                    (D = x(D, U, L, R, ve, 22, a[15])),
                    (R = A(R, D, U, L, k, 5, a[16])),
                    (L = A(L, R, D, U, y, 9, a[17])),
                    (U = A(U, L, R, D, Y, 14, a[18])),
                    (D = A(D, U, L, R, C, 20, a[19])),
                    (R = A(R, D, U, L, b, 5, a[20])),
                    (L = A(L, R, D, U, P, 9, a[21])),
                    (U = A(U, L, R, D, ve, 14, a[22])),
                    (D = A(D, U, L, R, W, 20, a[23])),
                    (R = A(R, D, U, L, T, 5, a[24])),
                    (L = A(L, R, D, U, se, 9, a[25])),
                    (U = A(U, L, R, D, N, 14, a[26])),
                    (D = A(D, U, L, R, I, 20, a[27])),
                    (R = A(R, D, U, L, ne, 5, a[28])),
                    (L = A(L, R, D, U, B, 9, a[29])),
                    (U = A(U, L, R, D, E, 14, a[30])),
                    (D = A(D, U, L, R, O, 20, a[31])),
                    (R = w(R, D, U, L, b, 4, a[32])),
                    (L = w(L, R, D, U, I, 11, a[33])),
                    (U = w(U, L, R, D, Y, 16, a[34])),
                    (D = w(D, U, L, R, se, 23, a[35])),
                    (R = w(R, D, U, L, k, 4, a[36])),
                    (L = w(L, R, D, U, W, 11, a[37])),
                    (U = w(U, L, R, D, E, 16, a[38])),
                    (D = w(D, U, L, R, P, 23, a[39])),
                    (R = w(R, D, U, L, ne, 4, a[40])),
                    (L = w(L, R, D, U, C, 11, a[41])),
                    (U = w(U, L, R, D, N, 16, a[42])),
                    (D = w(D, U, L, R, y, 23, a[43])),
                    (R = w(R, D, U, L, T, 4, a[44])),
                    (L = w(L, R, D, U, O, 11, a[45])),
                    (U = w(U, L, R, D, ve, 16, a[46])),
                    (D = w(D, U, L, R, B, 23, a[47])),
                    (R = v(R, D, U, L, C, 6, a[48])),
                    (L = v(L, R, D, U, E, 10, a[49])),
                    (U = v(U, L, R, D, se, 15, a[50])),
                    (D = v(D, U, L, R, b, 21, a[51])),
                    (R = v(R, D, U, L, O, 6, a[52])),
                    (L = v(L, R, D, U, N, 10, a[53])),
                    (U = v(U, L, R, D, P, 15, a[54])),
                    (D = v(D, U, L, R, k, 21, a[55])),
                    (R = v(R, D, U, L, I, 6, a[56])),
                    (L = v(L, R, D, U, ve, 10, a[57])),
                    (U = v(U, L, R, D, y, 15, a[58])),
                    (D = v(D, U, L, R, ne, 21, a[59])),
                    (R = v(R, D, U, L, W, 6, a[60])),
                    (L = v(L, R, D, U, Y, 10, a[61])),
                    (U = v(U, L, R, D, B, 15, a[62])),
                    (D = v(D, U, L, R, T, 21, a[63])),
                    (h[0] = (h[0] + R) | 0),
                    (h[1] = (h[1] + D) | 0),
                    (h[2] = (h[2] + U) | 0),
                    (h[3] = (h[3] + L) | 0);
                },
                _doFinalize: function () {
                  var p = this._data,
                    S = p.words,
                    M = this._nDataBytes * 8,
                    m = p.sigBytes * 8;
                  S[m >>> 5] |= 128 << (24 - (m % 32));
                  var f = n.floor(M / 4294967296),
                    h = M;
                  (S[(((m + 64) >>> 9) << 4) + 15] =
                    (((f << 8) | (f >>> 24)) & 16711935) |
                    (((f << 24) | (f >>> 8)) & 4278255360)),
                    (S[(((m + 64) >>> 9) << 4) + 14] =
                      (((h << 8) | (h >>> 24)) & 16711935) |
                      (((h << 24) | (h >>> 8)) & 4278255360)),
                    (p.sigBytes = (S.length + 1) * 4),
                    this._process();
                  for (var C = this._hash, k = C.words, B = 0; B < 4; B++) {
                    var N = k[B];
                    k[B] =
                      (((N << 8) | (N >>> 24)) & 16711935) |
                      (((N << 24) | (N >>> 8)) & 4278255360);
                  }
                  return C;
                },
                clone: function () {
                  var p = u.clone.call(this);
                  return (p._hash = this._hash.clone()), p;
                },
              }));
              function x(p, S, M, m, f, h, C) {
                var k = p + ((S & M) | (~S & m)) + f + C;
                return ((k << h) | (k >>> (32 - h))) + S;
              }
              function A(p, S, M, m, f, h, C) {
                var k = p + ((S & m) | (M & ~m)) + f + C;
                return ((k << h) | (k >>> (32 - h))) + S;
              }
              function w(p, S, M, m, f, h, C) {
                var k = p + (S ^ M ^ m) + f + C;
                return ((k << h) | (k >>> (32 - h))) + S;
              }
              function v(p, S, M, m, f, h, C) {
                var k = p + (M ^ (S | ~m)) + f + C;
                return ((k << h) | (k >>> (32 - h))) + S;
              }
              (i.MD5 = u._createHelper(g)),
                (i.HmacMD5 = u._createHmacHelper(g));
            })(Math),
            r.MD5
          );
        });
      })(Ye)),
    Ye.exports
  );
}
var je = { exports: {} },
  Ge = { exports: {} },
  At;
function aa() {
  return (
    At ||
      ((At = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(fe);
        })(ce, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                c = i.WordArray,
                o = i.Hasher,
                u = n.algo,
                d = [],
                a = (u.SHA1 = o.extend({
                  _doReset: function () {
                    this._hash = new c.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (g, x) {
                    for (
                      var A = this._hash.words,
                        w = A[0],
                        v = A[1],
                        p = A[2],
                        S = A[3],
                        M = A[4],
                        m = 0;
                      m < 80;
                      m++
                    ) {
                      if (m < 16) d[m] = g[x + m] | 0;
                      else {
                        var f = d[m - 3] ^ d[m - 8] ^ d[m - 14] ^ d[m - 16];
                        d[m] = (f << 1) | (f >>> 31);
                      }
                      var h = ((w << 5) | (w >>> 27)) + M + d[m];
                      m < 20
                        ? (h += ((v & p) | (~v & S)) + 1518500249)
                        : m < 40
                        ? (h += (v ^ p ^ S) + 1859775393)
                        : m < 60
                        ? (h += ((v & p) | (v & S) | (p & S)) - 1894007588)
                        : (h += (v ^ p ^ S) - 899497514),
                        (M = S),
                        (S = p),
                        (p = (v << 30) | (v >>> 2)),
                        (v = w),
                        (w = h);
                    }
                    (A[0] = (A[0] + w) | 0),
                      (A[1] = (A[1] + v) | 0),
                      (A[2] = (A[2] + p) | 0),
                      (A[3] = (A[3] + S) | 0),
                      (A[4] = (A[4] + M) | 0);
                  },
                  _doFinalize: function () {
                    var g = this._data,
                      x = g.words,
                      A = this._nDataBytes * 8,
                      w = g.sigBytes * 8;
                    return (
                      (x[w >>> 5] |= 128 << (24 - (w % 32))),
                      (x[(((w + 64) >>> 9) << 4) + 14] = Math.floor(
                        A / 4294967296
                      )),
                      (x[(((w + 64) >>> 9) << 4) + 15] = A),
                      (g.sigBytes = x.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var g = o.clone.call(this);
                    return (g._hash = this._hash.clone()), g;
                  },
                }));
              (n.SHA1 = o._createHelper(a)),
                (n.HmacSHA1 = o._createHmacHelper(a));
            })(),
            r.SHA1
          );
        });
      })(Ge)),
    Ge.exports
  );
}
var Ke = { exports: {} },
  $t;
function ia() {
  return (
    $t ||
      (($t = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(fe);
        })(ce, function (r) {
          (function () {
            var n = r,
              i = n.lib,
              c = i.Base,
              o = n.enc,
              u = o.Utf8,
              d = n.algo;
            d.HMAC = c.extend({
              init: function (a, g) {
                (a = this._hasher = new a.init()),
                  typeof g == "string" && (g = u.parse(g));
                var x = a.blockSize,
                  A = x * 4;
                g.sigBytes > A && (g = a.finalize(g)), g.clamp();
                for (
                  var w = (this._oKey = g.clone()),
                    v = (this._iKey = g.clone()),
                    p = w.words,
                    S = v.words,
                    M = 0;
                  M < x;
                  M++
                )
                  (p[M] ^= 1549556828), (S[M] ^= 909522486);
                (w.sigBytes = v.sigBytes = A), this.reset();
              },
              reset: function () {
                var a = this._hasher;
                a.reset(), a.update(this._iKey);
              },
              update: function (a) {
                return this._hasher.update(a), this;
              },
              finalize: function (a) {
                var g = this._hasher,
                  x = g.finalize(a);
                g.reset();
                var A = g.finalize(this._oKey.clone().concat(x));
                return A;
              },
            });
          })();
        });
      })(Ke)),
    Ke.exports
  );
}
var _t;
function br() {
  return (
    _t ||
      ((_t = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(fe, aa(), ia());
        })(ce, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                c = i.Base,
                o = i.WordArray,
                u = n.algo,
                d = u.MD5,
                a = (u.EvpKDF = c.extend({
                  cfg: c.extend({
                    keySize: 128 / 32,
                    hasher: d,
                    iterations: 1,
                  }),
                  init: function (g) {
                    this.cfg = this.cfg.extend(g);
                  },
                  compute: function (g, x) {
                    for (
                      var A,
                        w = this.cfg,
                        v = w.hasher.create(),
                        p = o.create(),
                        S = p.words,
                        M = w.keySize,
                        m = w.iterations;
                      S.length < M;

                    ) {
                      A && v.update(A),
                        (A = v.update(g).finalize(x)),
                        v.reset();
                      for (var f = 1; f < m; f++)
                        (A = v.finalize(A)), v.reset();
                      p.concat(A);
                    }
                    return (p.sigBytes = M * 4), p;
                  },
                }));
              n.EvpKDF = function (g, x, A) {
                return a.create(A).compute(g, x);
              };
            })(),
            r.EvpKDF
          );
        });
      })(je)),
    je.exports
  );
}
var Ve = { exports: {} },
  Ct;
function pr() {
  return (
    Ct ||
      ((Ct = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(fe, br());
        })(ce, function (r) {
          r.lib.Cipher ||
            (function (n) {
              var i = r,
                c = i.lib,
                o = c.Base,
                u = c.WordArray,
                d = c.BufferedBlockAlgorithm,
                a = i.enc;
              a.Utf8;
              var g = a.Base64,
                x = i.algo,
                A = x.EvpKDF,
                w = (c.Cipher = d.extend({
                  cfg: o.extend(),
                  createEncryptor: function (b, y) {
                    return this.create(this._ENC_XFORM_MODE, b, y);
                  },
                  createDecryptor: function (b, y) {
                    return this.create(this._DEC_XFORM_MODE, b, y);
                  },
                  init: function (b, y, E) {
                    (this.cfg = this.cfg.extend(E)),
                      (this._xformMode = b),
                      (this._key = y),
                      this.reset();
                  },
                  reset: function () {
                    d.reset.call(this), this._doReset();
                  },
                  process: function (b) {
                    return this._append(b), this._process();
                  },
                  finalize: function (b) {
                    b && this._append(b);
                    var y = this._doFinalize();
                    return y;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function b(y) {
                      return typeof y == "string" ? W : k;
                    }
                    return function (y) {
                      return {
                        encrypt: function (E, I, T) {
                          return b(I).encrypt(y, E, I, T);
                        },
                        decrypt: function (E, I, T) {
                          return b(I).decrypt(y, E, I, T);
                        },
                      };
                    };
                  })(),
                }));
              c.StreamCipher = w.extend({
                _doFinalize: function () {
                  var b = this._process(!0);
                  return b;
                },
                blockSize: 1,
              });
              var v = (i.mode = {}),
                p = (c.BlockCipherMode = o.extend({
                  createEncryptor: function (b, y) {
                    return this.Encryptor.create(b, y);
                  },
                  createDecryptor: function (b, y) {
                    return this.Decryptor.create(b, y);
                  },
                  init: function (b, y) {
                    (this._cipher = b), (this._iv = y);
                  },
                })),
                S = (v.CBC = (function () {
                  var b = p.extend();
                  (b.Encryptor = b.extend({
                    processBlock: function (E, I) {
                      var T = this._cipher,
                        P = T.blockSize;
                      y.call(this, E, I, P),
                        T.encryptBlock(E, I),
                        (this._prevBlock = E.slice(I, I + P));
                    },
                  })),
                    (b.Decryptor = b.extend({
                      processBlock: function (E, I) {
                        var T = this._cipher,
                          P = T.blockSize,
                          Y = E.slice(I, I + P);
                        T.decryptBlock(E, I),
                          y.call(this, E, I, P),
                          (this._prevBlock = Y);
                      },
                    }));
                  function y(E, I, T) {
                    var P,
                      Y = this._iv;
                    Y ? ((P = Y), (this._iv = n)) : (P = this._prevBlock);
                    for (var O = 0; O < T; O++) E[I + O] ^= P[O];
                  }
                  return b;
                })()),
                M = (i.pad = {}),
                m = (M.Pkcs7 = {
                  pad: function (b, y) {
                    for (
                      var E = y * 4,
                        I = E - (b.sigBytes % E),
                        T = (I << 24) | (I << 16) | (I << 8) | I,
                        P = [],
                        Y = 0;
                      Y < I;
                      Y += 4
                    )
                      P.push(T);
                    var O = u.create(P, I);
                    b.concat(O);
                  },
                  unpad: function (b) {
                    var y = b.words[(b.sigBytes - 1) >>> 2] & 255;
                    b.sigBytes -= y;
                  },
                });
              c.BlockCipher = w.extend({
                cfg: w.cfg.extend({ mode: S, padding: m }),
                reset: function () {
                  var b;
                  w.reset.call(this);
                  var y = this.cfg,
                    E = y.iv,
                    I = y.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (b = I.createEncryptor)
                    : ((b = I.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == b
                      ? this._mode.init(this, E && E.words)
                      : ((this._mode = b.call(I, this, E && E.words)),
                        (this._mode.__creator = b));
                },
                _doProcessBlock: function (b, y) {
                  this._mode.processBlock(b, y);
                },
                _doFinalize: function () {
                  var b,
                    y = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (y.pad(this._data, this.blockSize),
                        (b = this._process(!0)))
                      : ((b = this._process(!0)), y.unpad(b)),
                    b
                  );
                },
                blockSize: 128 / 32,
              });
              var f = (c.CipherParams = o.extend({
                  init: function (b) {
                    this.mixIn(b);
                  },
                  toString: function (b) {
                    return (b || this.formatter).stringify(this);
                  },
                })),
                h = (i.format = {}),
                C = (h.OpenSSL = {
                  stringify: function (b) {
                    var y,
                      E = b.ciphertext,
                      I = b.salt;
                    return (
                      I
                        ? (y = u
                            .create([1398893684, 1701076831])
                            .concat(I)
                            .concat(E))
                        : (y = E),
                      y.toString(g)
                    );
                  },
                  parse: function (b) {
                    var y,
                      E = g.parse(b),
                      I = E.words;
                    return (
                      I[0] == 1398893684 &&
                        I[1] == 1701076831 &&
                        ((y = u.create(I.slice(2, 4))),
                        I.splice(0, 4),
                        (E.sigBytes -= 16)),
                      f.create({ ciphertext: E, salt: y })
                    );
                  },
                }),
                k = (c.SerializableCipher = o.extend({
                  cfg: o.extend({ format: C }),
                  encrypt: function (b, y, E, I) {
                    I = this.cfg.extend(I);
                    var T = b.createEncryptor(E, I),
                      P = T.finalize(y),
                      Y = T.cfg;
                    return f.create({
                      ciphertext: P,
                      key: E,
                      iv: Y.iv,
                      algorithm: b,
                      mode: Y.mode,
                      padding: Y.padding,
                      blockSize: b.blockSize,
                      formatter: I.format,
                    });
                  },
                  decrypt: function (b, y, E, I) {
                    (I = this.cfg.extend(I)), (y = this._parse(y, I.format));
                    var T = b.createDecryptor(E, I).finalize(y.ciphertext);
                    return T;
                  },
                  _parse: function (b, y) {
                    return typeof b == "string" ? y.parse(b, this) : b;
                  },
                })),
                B = (i.kdf = {}),
                N = (B.OpenSSL = {
                  execute: function (b, y, E, I, T) {
                    if ((I || (I = u.random(64 / 8)), T))
                      var P = A.create({ keySize: y + E, hasher: T }).compute(
                        b,
                        I
                      );
                    else var P = A.create({ keySize: y + E }).compute(b, I);
                    var Y = u.create(P.words.slice(y), E * 4);
                    return (
                      (P.sigBytes = y * 4), f.create({ key: P, iv: Y, salt: I })
                    );
                  },
                }),
                W = (c.PasswordBasedCipher = k.extend({
                  cfg: k.cfg.extend({ kdf: N }),
                  encrypt: function (b, y, E, I) {
                    I = this.cfg.extend(I);
                    var T = I.kdf.execute(
                      E,
                      b.keySize,
                      b.ivSize,
                      I.salt,
                      I.hasher
                    );
                    I.iv = T.iv;
                    var P = k.encrypt.call(this, b, y, T.key, I);
                    return P.mixIn(T), P;
                  },
                  decrypt: function (b, y, E, I) {
                    (I = this.cfg.extend(I)), (y = this._parse(y, I.format));
                    var T = I.kdf.execute(
                      E,
                      b.keySize,
                      b.ivSize,
                      y.salt,
                      I.hasher
                    );
                    I.iv = T.iv;
                    var P = k.decrypt.call(this, b, y, T.key, I);
                    return P;
                  },
                }));
            })();
        });
      })(Ve)),
    Ve.exports
  );
}
(function (e, t) {
  (function (r, n, i) {
    e.exports = n(fe, na(), sa(), br(), pr());
  })(ce, function (r) {
    return (
      (function () {
        var n = r,
          i = n.lib,
          c = i.BlockCipher,
          o = n.algo,
          u = [],
          d = [],
          a = [],
          g = [],
          x = [],
          A = [],
          w = [],
          v = [],
          p = [],
          S = [];
        (function () {
          for (var f = [], h = 0; h < 256; h++)
            h < 128 ? (f[h] = h << 1) : (f[h] = (h << 1) ^ 283);
          for (var C = 0, k = 0, h = 0; h < 256; h++) {
            var B = k ^ (k << 1) ^ (k << 2) ^ (k << 3) ^ (k << 4);
            (B = (B >>> 8) ^ (B & 255) ^ 99), (u[C] = B), (d[B] = C);
            var N = f[C],
              W = f[N],
              b = f[W],
              y = (f[B] * 257) ^ (B * 16843008);
            (a[C] = (y << 24) | (y >>> 8)),
              (g[C] = (y << 16) | (y >>> 16)),
              (x[C] = (y << 8) | (y >>> 24)),
              (A[C] = y);
            var y = (b * 16843009) ^ (W * 65537) ^ (N * 257) ^ (C * 16843008);
            (w[B] = (y << 24) | (y >>> 8)),
              (v[B] = (y << 16) | (y >>> 16)),
              (p[B] = (y << 8) | (y >>> 24)),
              (S[B] = y),
              C ? ((C = N ^ f[f[f[b ^ N]]]), (k ^= f[f[k]])) : (C = k = 1);
          }
        })();
        var M = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
          m = (o.AES = c.extend({
            _doReset: function () {
              var f;
              if (!(this._nRounds && this._keyPriorReset === this._key)) {
                for (
                  var h = (this._keyPriorReset = this._key),
                    C = h.words,
                    k = h.sigBytes / 4,
                    B = (this._nRounds = k + 6),
                    N = (B + 1) * 4,
                    W = (this._keySchedule = []),
                    b = 0;
                  b < N;
                  b++
                )
                  b < k
                    ? (W[b] = C[b])
                    : ((f = W[b - 1]),
                      b % k
                        ? k > 6 &&
                          b % k == 4 &&
                          (f =
                            (u[f >>> 24] << 24) |
                            (u[(f >>> 16) & 255] << 16) |
                            (u[(f >>> 8) & 255] << 8) |
                            u[f & 255])
                        : ((f = (f << 8) | (f >>> 24)),
                          (f =
                            (u[f >>> 24] << 24) |
                            (u[(f >>> 16) & 255] << 16) |
                            (u[(f >>> 8) & 255] << 8) |
                            u[f & 255]),
                          (f ^= M[(b / k) | 0] << 24)),
                      (W[b] = W[b - k] ^ f));
                for (var y = (this._invKeySchedule = []), E = 0; E < N; E++) {
                  var b = N - E;
                  if (E % 4) var f = W[b];
                  else var f = W[b - 4];
                  E < 4 || b <= 4
                    ? (y[E] = f)
                    : (y[E] =
                        w[u[f >>> 24]] ^
                        v[u[(f >>> 16) & 255]] ^
                        p[u[(f >>> 8) & 255]] ^
                        S[u[f & 255]]);
                }
              }
            },
            encryptBlock: function (f, h) {
              this._doCryptBlock(f, h, this._keySchedule, a, g, x, A, u);
            },
            decryptBlock: function (f, h) {
              var C = f[h + 1];
              (f[h + 1] = f[h + 3]),
                (f[h + 3] = C),
                this._doCryptBlock(f, h, this._invKeySchedule, w, v, p, S, d);
              var C = f[h + 1];
              (f[h + 1] = f[h + 3]), (f[h + 3] = C);
            },
            _doCryptBlock: function (f, h, C, k, B, N, W, b) {
              for (
                var y = this._nRounds,
                  E = f[h] ^ C[0],
                  I = f[h + 1] ^ C[1],
                  T = f[h + 2] ^ C[2],
                  P = f[h + 3] ^ C[3],
                  Y = 4,
                  O = 1;
                O < y;
                O++
              ) {
                var ne =
                    k[E >>> 24] ^
                    B[(I >>> 16) & 255] ^
                    N[(T >>> 8) & 255] ^
                    W[P & 255] ^
                    C[Y++],
                  se =
                    k[I >>> 24] ^
                    B[(T >>> 16) & 255] ^
                    N[(P >>> 8) & 255] ^
                    W[E & 255] ^
                    C[Y++],
                  ve =
                    k[T >>> 24] ^
                    B[(P >>> 16) & 255] ^
                    N[(E >>> 8) & 255] ^
                    W[I & 255] ^
                    C[Y++],
                  R =
                    k[P >>> 24] ^
                    B[(E >>> 16) & 255] ^
                    N[(I >>> 8) & 255] ^
                    W[T & 255] ^
                    C[Y++];
                (E = ne), (I = se), (T = ve), (P = R);
              }
              var ne =
                  ((b[E >>> 24] << 24) |
                    (b[(I >>> 16) & 255] << 16) |
                    (b[(T >>> 8) & 255] << 8) |
                    b[P & 255]) ^
                  C[Y++],
                se =
                  ((b[I >>> 24] << 24) |
                    (b[(T >>> 16) & 255] << 16) |
                    (b[(P >>> 8) & 255] << 8) |
                    b[E & 255]) ^
                  C[Y++],
                ve =
                  ((b[T >>> 24] << 24) |
                    (b[(P >>> 16) & 255] << 16) |
                    (b[(E >>> 8) & 255] << 8) |
                    b[I & 255]) ^
                  C[Y++],
                R =
                  ((b[P >>> 24] << 24) |
                    (b[(E >>> 16) & 255] << 16) |
                    (b[(I >>> 8) & 255] << 8) |
                    b[T & 255]) ^
                  C[Y++];
              (f[h] = ne), (f[h + 1] = se), (f[h + 2] = ve), (f[h + 3] = R);
            },
            keySize: 256 / 32,
          }));
        n.AES = c._createHelper(m);
      })(),
      r.AES
    );
  });
})(vr);
var la = vr.exports;
const oa = hr(la);
var xr = { exports: {} };
(function (e, t) {
  (function (r, n, i) {
    e.exports = n(fe, pr());
  })(ce, function (r) {
    return (
      (r.mode.ECB = (function () {
        var n = r.lib.BlockCipherMode.extend();
        return (
          (n.Encryptor = n.extend({
            processBlock: function (i, c) {
              this._cipher.encryptBlock(i, c);
            },
          })),
          (n.Decryptor = n.extend({
            processBlock: function (i, c) {
              this._cipher.decryptBlock(i, c);
            },
          })),
          n
        );
      })()),
      r.mode.ECB
    );
  });
})(xr);
var ca = xr.exports;
const ua = hr(ca),
  da = "/modules/chat2/assets/get-7393a193.png",
  fa =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAMAAABBJv+bAAAASFBMVEUAAAD/5lP/9Gv/5FH/5FH/5FH/5VL/5VL/5FH/5FL/5FH/5FL/5FH/5FL/5FH/51b/5lj/41L/5FH/5lL/5FL/41P/5VP/41E1sYyuAAAAF3RSTlMAOQbk6dpVLcO8ta2fhnUlHt7PZF1KMff9ccsAAACmSURBVCjPfdDbCoAgEATQdTW1NLvn//9pGCHskO6T7GF0kOQoRb0Zx56qnFUvnPPYDffiU+GpE4Y4hiEO4d84O5uiN7mO8TFZx68FnRujAxM502LjiNBRiRb9p3ohEo5aZ91Qt7Vi8UHqsDb+5P9jrWQLPEuegYPkAIzVpPK39v47sOD73e0X0bW/x1vwWS786try0AnF9cH1pUND9ZhYVElRcEVYPFrgHLEPmWLQAAAAAElFTkSuQmCC",
  ga =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAACyCAMAAAD237ObAAAANlBMVEUAAAA1EHk0EHk6E3tNOY7Dw8M2E3s7Fnw4Fns2EXo2E3o2EHo5F302EXo9GYI4EXs3E3o4EXvPRwE8AAAAEnRSTlMAP04aBAE0ECI6MD0WSAosKB+1DNi0AAACjUlEQVR42u3bW5rbIAxAYWQw93DZ/2bbmYe2L22xPTEhc/6HLEAfAslSFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx+3Fuax79963WmuM1toYa23Ne9+7zq6YXeEzUrq3aJOMCDa2nl35prHbi/bVJjkj2drztwrc7nSzclmKXn+HuBnnY5Kvk2p37xy20qM8QaraqHfkfJDnsb2o91K8lWez/X3O2p6j3CJVp97BroPcx+blH4OPgN3LLn7SnJX7xYVfgt3LFEmvmp3Gyix1zcezBJknrhizEmQmu15uGitzNbWaLrNltRYTZLao1pJlvsXKs/l5KbJYG+BlvsUuMy3zLXbKnEyXVqtmo8zm1WKmH7PlDtn8N3Oxy//D3mSmrha0e5km6SOjVd1bjTaEJJJCsLG2rt2cvNZJ5ghudG7fY5C/CHHGVLlEmaGZscFXTf+fWQ2NX9aelojYPJSOo5Po4O9OUdODDLh5Krfr9MqjBKOt3CXm/RmvedsPvSb+c2Pu8dO2ffxKsrF57czLjctTc2qMf04nUXQNj+0fHqHqMn7Unh21mo0aFeSgMJJLj23Iww4vKhUdkww4vy41L2T5V7wGo5bVIJObla8W/e/yaU5iZtkOO9LQmfx1e4wp9oE79dnXf9tOaUd3i6/GLUQ/sGF8R5Hht5P8mb3ZM0vZwdaB9/rGUvaxnfRQZ5mStf/si+WvUrCx+q5dOR6r6w3Ty4XsD7sxpRTnXM5a55ydK6UYY3Z1yfW2/FUS80UMffyZfv2/mTNFxopfja+4Xsp+94AdbZje9J8dA8615Yttilxy/eMPhwsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4ZT8APDArvdp4GQYAAAAASUVORK5CYII=",
  ha = "/modules/chat2/assets/cloud-right-2c1ecf48.png",
  ma = "/modules/chat2/assets/cloud-left-7f3eeefd.png",
  va = "/modules/chat2/assets/unb-btc-10668151.png",
  ba = "/modules/chat2/assets/unb-btc-side-e6de062c.png",
  pa = "/modules/chat2/assets/parachute-fall-193a2437.png",
  xa = "/modules/chat2/assets/coindrop-more-ff14c8e3.png",
  Aa = "/modules/chat2/assets/parachute-4e1157e3.png",
  $a = "/modules/chat2/assets/fall-btc-3dba744c.png",
  _a = "/modules/chat2/assets/btc-c2b90634.png",
  Ca = "/modules/chat2/assets/share-bg-887cfaf1.png",
  wa = "/modules/chat2/assets/coindrop-wrap-dc3aaa4f.png",
  be = {
    get: da,
    btc: _a,
    star: fa,
    shadow: ga,
    cloudLeft: ma,
    cloudRight: ha,
    parachuteBtc: va,
    parachuteBtcSide: ba,
    parachuteFall: pa,
    parachute: Aa,
    fallBtc: $a,
    parachuteMore: xa,
    shareBg: Ca,
    coindropWrap: wa,
  };
var ya = _('<button class="flex-1 open-view">'),
  Sa = _(
    '<div class=coin-invite-img><img alt=""class="w-full h-full"><div class=coindrop-close></div><div class="absolute w-full h-16 px-8 bottom-8 center gap-4"><button class="flex-1 open-view">'
  ),
  ka = _(
    '<a class=flex-1 target=_blank rel="noopener noreferrer"download=invite.png><button class="w-full open-view">'
  );
function Ia() {
  const [e, t] = Ue({ url: "", dataURL: "", blobURL: "", link: "" }),
    r = () => {
      Me.copyToClipboard(e.link), ge($("Copied"));
    },
    n = () =>
      ae(this, null, function* () {
        const i = yield oe().post("/account/invitation/code/");
        t({ link: i.invitationUrl });
      });
  return (
    _e(() => {
      n();
    }),
    (() => {
      var i = Sa(),
        c = i.firstChild,
        o = c.nextSibling,
        u = o.nextSibling,
        d = u.firstChild;
      return (
        (o.$$click = () => V.pop()),
        s(o, l(de, { name: "Close" })),
        (u.$$click = () => V.pop()),
        (d.$$click = r),
        s(d, () => $("Copy link")),
        s(
          u,
          l(H, {
            get when() {
              return Me.isIos();
            },
            get fallback() {
              return (() => {
                var a = ka(),
                  g = a.firstChild;
                return (
                  s(g, () => $("Download image")),
                  F(() => z(a, "href", be.shareBg)),
                  a
                );
              })();
            },
            get children() {
              var a = ya();
              return (
                (a.$$click = () => window.open(be.shareBg)),
                s(a, () => $("Download image")),
                a
              );
            },
          }),
          null
        ),
        F(() => z(c, "src", be.shareBg)),
        i
      );
    })()
  );
}
re(["click"]);
var Ba = _(
  '<div><div class="w-40 relative"><img class=w-full><img class="w-10 h-10 rounded-full border-brand border-2 absolute right-7 bottom-5"></div><div class="text-xl font-extrabold"></div><div class="center gap-2"><img class="w-4 h-4"alt=star><div class="text-[#ffdb00] text-xl font-extrabold"></div><img class="w-4 h-4"alt=star>'
);
function Ar(e) {
  return (() => {
    var t = Ba(),
      r = t.firstChild,
      n = r.firstChild,
      i = n.nextSibling,
      c = r.nextSibling,
      o = c.nextSibling,
      u = o.firstChild,
      d = u.nextSibling,
      a = d.nextSibling;
    return (
      s(c, () => e.state.username),
      s(d, () => {
        var g;
        return (g = e.state.info) == null ? void 0 : g.content;
      }),
      F(
        (g) => {
          var x = Q("flex flex-col gap-1 items-center", e.class),
            A = be.coindropWrap,
            w = Z.avatar(e.state.userId),
            v = be.star,
            p = be.star;
          return (
            x !== g.e && ee(t, (g.e = x)),
            A !== g.t && z(n, "src", (g.t = A)),
            w !== g.a && z(i, "src", (g.a = w)),
            v !== g.o && z(u, "src", (g.o = v)),
            p !== g.i && z(a, "src", (g.i = p)),
            g
          );
        },
        { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }
      ),
      t
    );
  })();
}
var Ea = _(
    "<table><thead><tr><th class=text-left></th><th class=text-center></th><th class=text-right>"
  ),
  Ra = _(
    '<div class="mt-4 text-secondary bg-layer1/60 rounded-lg p-3"><div class="border-b border-third pb-3 mb-3">Opend <!>/'
  ),
  Da = _(
    '<tr><td class="flex items-center justify-start gap-1 py-2"><img class="w-5 h-5 rounded-full"><div class="font-semibold text-primary"></div></td><td class="text-center py-2"></td><td class="flex items-center justify-end gap-1 py-2"><img class="w-5 h-5"><span class="text-brand font-extrabold">+'
  ),
  Ua = _(
    '<div class="bg-layer1/60 rounded-xl w-full p-4 text-center"><div class="center text-3xl gap-2 font-extrabold h-12"><span class=text-brand>+</span><img class="w-7 h-7"alt=""></div><div class="cursor-pointer text-secondary"> &gt;&gt;'
  ),
  La = _('<div class=relative><div class="flex flex-col items-center gap-4">'),
  wt = _("<p>."),
  Se = ((e) => (
    (e[(e.INIT = 0)] = "INIT"),
    (e[(e.UNGRABB = 1)] = "UNGRABB"),
    (e[(e.COMPLETED = 2)] = "COMPLETED"),
    (e[(e.EXPIRED = 3)] = "EXPIRED"),
    (e[(e.ISSUS = 4)] = "ISSUS"),
    (e[(e.GRABBED = 5)] = "GRABBED"),
    e
  ))(Se || {});
function Ma(e) {
  return oe()
    .post("/game/support/red-packet/get-log/", {
      page: 1,
      pageSize: 100,
      id: e,
    })
    .then((t) => t.list.map((r) => ((r.amount = Number(r.amount)), r)));
}
function Na(e) {
  const [t, r] = G(null);
  return (
    _e(() => {
      Ma(e.info.id)
        .then((n) => {
          r(n);
        })
        .catch(ge);
    }),
    l(H, {
      get when() {
        return t();
      },
      get fallback() {
        return l(Ne, { class: "w-full text-brand" });
      },
      children: (n) =>
        (() => {
          var i = Ra(),
            c = i.firstChild,
            o = c.firstChild,
            u = o.nextSibling;
          return (
            u.nextSibling,
            s(c, () => n().length, u),
            s(c, () => e.total, null),
            s(
              i,
              l(rt, {
                class: "flex flex-col gap-2 mt-2 max-h-60",
                get children() {
                  var d = Ea(),
                    a = d.firstChild,
                    g = a.firstChild,
                    x = g.firstChild,
                    A = x.nextSibling,
                    w = A.nextSibling;
                  return (
                    s(x, () => $("Player")),
                    s(A, () => $("Time")),
                    s(w, () => $("Coindrop")),
                    s(
                      d,
                      l(De, {
                        get each() {
                          return n();
                        },
                        children: (v) =>
                          (() => {
                            var p = Da(),
                              S = p.firstChild,
                              M = S.firstChild,
                              m = M.nextSibling,
                              f = S.nextSibling,
                              h = f.nextSibling,
                              C = h.firstChild,
                              k = C.nextSibling;
                            return (
                              k.firstChild,
                              s(m, () => v.userName),
                              s(f, () =>
                                new Date(v.createTime).toLocaleString()
                              ),
                              s(k, () => v.amount, null),
                              F(
                                (B) => {
                                  var N = Z.avatar(v.userId),
                                    W = Z.coinIcon(v.currencyName);
                                  return (
                                    N !== B.e && z(M, "src", (B.e = N)),
                                    W !== B.t && z(C, "src", (B.t = W)),
                                    B
                                  );
                                },
                                { e: void 0, t: void 0 }
                              ),
                              p
                            );
                          })(),
                      }),
                      null
                    ),
                    d
                  );
                },
              }),
              null
            ),
            i
          );
        })(),
    })
  );
}
const Ta = ({ state: e }) => {
  const t = J(),
    r = e.info;
  return r
    ? (() => {
        var n = La(),
          i = n.firstChild;
        return (
          s(i, l(Ar, { state: e }), null),
          s(
            i,
            l(H, {
              get when() {
                return r.receiverAmount > 0;
              },
              get children() {
                var c = Ua(),
                  o = c.firstChild,
                  u = o.firstChild;
                u.firstChild;
                var d = u.nextSibling,
                  a = o.nextSibling,
                  g = a.firstChild;
                return (
                  s(u, () => r.receiverAmount, null),
                  (a.$$click = () => {
                    V.pop(),
                      t(
                        `/wallet/transaction?type=bill&assets=${r.currencyName}`
                      );
                  }),
                  s(a, () => $("Coindrop have transferred to your wallet"), g),
                  F(() => z(d, "src", Z.coinIcon(r.currencyName))),
                  c
                );
              },
            }),
            null
          ),
          s(
            i,
            (() => {
              var c = K(() => e.status === 2);
              return () =>
                c() &&
                (() => {
                  var o = wt(),
                    u = o.firstChild;
                  return s(o, () => $("Coindrop is completed"), u), o;
                })();
            })(),
            null
          ),
          s(
            i,
            (() => {
              var c = K(() => e.status === 3 || e.status === 4);
              return () =>
                c() &&
                (() => {
                  var o = wt(),
                    u = o.firstChild;
                  return s(o, () => $("Coindrop is expired"), u), o;
                })();
            })(),
            null
          ),
          s(
            n,
            l(Na, {
              info: r,
              get total() {
                return r.number;
              },
              get totalamount() {
                return r.amount;
              },
            }),
            null
          ),
          s(
            n,
            l(j, {
              class: "w-full mt-4 font-extrabold",
              type: "brand",
              size: "l",
              onClick: () => V.push(() => l(Ia, {})),
              get children() {
                return $("Invite friends to grab Coindrop!");
              },
            }),
            null
          ),
          n
        );
      })()
    : null;
};
re(["click"]);
var Oa = _("<div>"),
  Ha = _('<div class="flex-auto h-80 center">'),
  Pa = _("<div class=relative>");
function za({
  info: e,
  packageKey: t,
  username: r,
  status: n,
  onReceive: i,
  userId: c,
  level: o,
}) {
  const [u, d] = G(!0),
    [a, g] = Ue({
      userId: c,
      username: r,
      status: n,
      level: o,
      loading: !1,
      showList: !1,
      opened: !1,
      info: void 0,
    });
  _e(() => {
    d(!1),
      oe()
        .post("/game/support/red-packet/get-info/", { info: e, key: t })
        .then((v) => {
          (v.amount = Number(v.amount)),
            (v.receiverAmount = Number(v.receiverAmount)),
            g({
              info: v,
              status: v.receiverStatus == 1 ? Se.GRABBED : v.status,
            });
        });
  });
  const x = (v, p) =>
      ae(this, null, function* () {
        const S = new Date().getTime();
        try {
          const M = Math.round(Math.random() * 1e4),
            m = yield Wr("login");
          let f = Wa(v + "_" + p, t),
            h = yield oe().post(
              "/game/support/red-packet/get-base/",
              { info: e, key: t, token: m, cid: M },
              { headers: { "Content-Origin": f } }
            );
          const C = Object.assign(a.info, {
              receiverAmount: Number(h.receiverAmount),
            }),
            k = new Date().getTime(),
            B = k - S > 1e3 ? 0 : 1e3 - k + S;
          yield Me.delay(B),
            Tt(() => {
              g("loading", !1),
                g("showList", !0),
                g("info", C),
                g("status", h.receiverStatus == 1 ? Se.GRABBED : h.status);
            }),
            i();
        } catch (M) {
          V.pop(), ge(M);
        }
      }),
    A = (v) =>
      l(H, {
        get when() {
          return a.info;
        },
        get fallback() {
          return l(Ne, {});
        },
        get children() {
          var p = Oa();
          return (
            s(
              p,
              l(H, {
                when: v,
                get fallback() {
                  return l(Fa, {
                    state: a,
                    onClick: x,
                    onDetail: () => g("showList", !0),
                  });
                },
                get children() {
                  return l(Ta, { state: a });
                },
              })
            ),
            p
          );
        },
      }),
    w = le(() => {
      var v;
      return (
        a.showList ||
        (a.status !== Se.UNGRABB &&
          ((v = a.info) == null ? void 0 : v.receiverAmount) !== 0)
      );
    });
  return l(he, {
    class: "coindrop-bg",
    get title() {
      return K(() => !!w())()
        ? $("Coindrop From Someone")
        : $("Someone Send a Coindrop");
    },
    get children() {
      return l(H, {
        get when() {
          return a.info;
        },
        get fallback() {
          return (() => {
            var v = Ha();
            return s(v, l(Ne, { class: "ml-4 h-14 w-14 text-brand" })), v;
          })();
        },
        get children() {
          return K(() => A(w()));
        },
      });
    },
  });
}
function Wa(e, t) {
  const r = fe.enc.Utf8.parse(t);
  let n = fe.enc.Utf8.parse(e);
  var i = oa.encrypt(n, r, { mode: ua, padding: fe.pad.Pkcs7 });
  return i.toString();
}
const Fa = ({ onClick: e, state: t, onDetail: r }) =>
  (() => {
    var n = Pa();
    return (
      s(n, l(Ar, { state: t, class: "my-6" }), null),
      s(
        n,
        l(j, {
          class: "w-full font-extrabold",
          size: "l",
          type: "brand",
          onClick: (i) => {
            t.status === Se.UNGRABB ? e(i.clientX, i.clientY) : r();
          },
          get children() {
            return K(() => t.status === Se.UNGRABB)()
              ? $("Tap to Open")
              : $("View History");
          },
        }),
        null
      ),
      n
    );
  })();
var Ya = _(
  '<div class=font-semibold><div class="drop-bg1 flex h-20 justify-start items-center px-4 rounded-xl"><img class=w-20><div class=ml-3><p class="text-base font-extrabold"></p><p class=text-[#FFDB00]>'
);
function ja(e) {
  const t = e.data.chat.message,
    r = (o) => {
      switch (o) {
        case 1:
          return $("Claim ");
        case 3:
          return $("Expired");
        default:
          return $("Completed");
      }
    },
    n = () =>
      ae(this, null, function* () {
        yield Ft();
        const o = {
          info: t.message,
          packageKey: t.packageKey,
          username: e.data.name,
          userId: e.data.userId,
          level: e.data.level,
          status: t.status,
          onReceive: () => {
            t.status = 2;
          },
        };
        V.push(() => l(za, o));
      }),
    i = t.status == 1,
    c = t.status !== 1;
  return (() => {
    var o = Ya(),
      u = o.firstChild,
      d = u.firstChild,
      a = d.nextSibling,
      g = a.firstChild,
      x = g.nextSibling;
    return (
      s(g, () => $("CoinDrops")),
      s(x, () => $("Good Luck!")),
      s(
        o,
        l(j, {
          get class() {
            return Q(
              "w-full h-10 font-extrabold text-base mt-2",
              c ? "opacity-35" : ""
            );
          },
          type: "brand",
          onClick: n,
          get children() {
            return r(t.status);
          },
        }),
        null
      ),
      F(() => z(d, "src", i ? be.parachuteMore : be.parachuteFall)),
      o
    );
  })();
}
var Ga = _(
  '<div class=animation-win><div class="star-item item-1"></div><div class="star-item item-2"></div><div class="star-item item-3"></div><div class="star-item item-4">'
);
const st = (e) =>
    l(H, {
      get when() {
        return e.show;
      },
      get children() {
        return Ga();
      },
    }),
  Ka = "/modules/chat2/assets/crown-ff2f0026.png",
  Va = "/modules/chat2/assets/roulette-40ddfd43.png",
  Qa = "/modules/chat2/assets/roulette_w-c387349b.png",
  Za = "/modules/chat2/assets/heartbreak1-c01c0368.png",
  qa = "/modules/chat2/assets/heartbreak2-d251ca90.png",
  Ja = "/modules/chat2/assets/bigwin-562a3883.png",
  Xa = "/modules/chat2/assets/ribbon-6e084f22.png",
  ei = "/modules/chat2/assets/ribbon-ea676df2.gif",
  ti = "/modules/chat2/assets/ribbon-ea676df2.gif",
  yt = "/modules/chat2/assets/star-781a1f19.png",
  ri = "/modules/chat2/assets/heart_left-8d369dc0.png",
  ni = "/modules/chat2/assets/heart_right-9692699e.png",
  si =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAAXNSR0IArs4c6QAAAWpJREFUKBVlkL9OAkEQxmeW5fgjChH/EAsjYuABLCi18gEkWJlopZXvYGdlYWJlqZGI8ASWNvbGRAOJ2hhz4WJEBURub5xdOYPyFZfdb3/zzcwhDKheTE2S5xVIUEIAXS2cNy4RkTSCPldbmyp4io4BKOp7gHiRiIjV1IndEtq8K06nSdGphkbDCpKxHsgABxGtvHbUvmYMCKTWCSgUj7owM96FibEezCY/TTsE3HjYnAsbkC95XRXjNF9BSRDgVCIKU7cdNyARZDVg6XZ9tbsBcBVHINppd8kRtLsseZi03ioY9AzWbEl4egn5NQdYqSh5f3szz440wzP33LTgrcO1LM47zFUbe/oslfppixz56ETgy+UD4odAsZ2t2CUNaUlCBnk0A7DBM11zejFTtmuG6H+Ev4i+c9aRFRvJZ8rOH0i/SU7TG79z661c1TkDcLQ/JMmt2tKCxUypUR96HTTqOwu//2HQ/3/+Bvh2fIyfHFHnAAAAAElFTkSuQmCC",
  ai =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAAXNSR0IArs4c6QAAAXBJREFUKBWFUr1KA0EQntnbhBMDEY0GBRshP7WCiK9gqShBC8FC8AEsrNLYWdn4BAmYnyew8wHExiL+gIqFJgFJxJiYuxtn53LhRCEDu/vt9813s7ezCKGo5eay0HfWCDzXIn2Rqr7ehGSBGBC1jeljIjoK9iwQAZxkq83DgDOrGG7XEzkPoKiYiI87orc6Gjx2KGVtp8tvRSF5MjngIe6bNTnxDTNxfyR5NUHk7gkYTGJAoqTZj0XdoRazfUyAy0OSgRiYlJ9rf+mhphSB5sElYo87idlAEIOy4JQJp/kRgXorCpwmEdE+6nd1ZkD5FdKlxqWFahcBe++fGp4bNt8uQlTzVXAQOulfBrNJVeoFpWmVTQ/dvoInY3LlAOZ+/xrEdN68UnZ8ERFLLiF0eiMMYirctzOVxhY34MAc0XDcrf8riDiYsuX6GSpY4ew7phb4FUiT/ZrhzBBOlxvXU/HJJa5Ufdmct0PSaEj5vHz8B/ZXd/2WUqBBAAAAAElFTkSuQmCC",
  ii =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAXVBMVEUnYv8AAAAtZv8wZf89c/8nYv8rbP8oYP8rZP8lYP8lX/8zbf8lX/8mYP8lX/8mXv8mYf8mYP8lX/8mYv8kYP8lY/8jZP8lX/8mZf8mYP8lX/8lXv8kYf8lX/8lX/80wmdAAAAAHnRSTlMaABYPCEYLUhO3dgeegK5kPjqPUV8xIdIs59rYoZm9Xwm/AAABxUlEQVRYw83Z626DMAyG4Q/bzbJCu9H1tBP3f5kLPRC1E4kDrrZX/f0oVApKDKpM4tgTIUTk2UmVCUmMCb8ilmlgzRiN62LQEZKR04GRy+fUoBBUkehAD3VeAQqKkhzIKIzToEdxlAIJE6JxEBMbAwkGIiw80A0YPQMxgoxZ8T0omJncgZjdLeih6Pja17b71L6G8oHbzUd37SX10FA98H4TnBxIEXTI9NwpQLgBRKZNpwLPlmKBbacE3QWk3AK1IJ3BGpk+tSDqE8hIt4/UYd23SG1AhJ/6L1wjVw8KMi0GcItcEkDWg2/IxQEkS5ACCEswcLUtKHBItV2tVt8D2KxO7TCeA2vfCrEFxmP4cjC1Qg8qB5GIJoDvaRDF4AGq9OCzNfiFGS2bplnHtTV9WySjgp3yhGxkD3pb0INtQYazBR3EFqxR2YIVKrIEKYBsCXIAxRKUAFaWYDyK2IB8Ams7sI7HOROQ4oHTBnQXsLIC46HdBnQDWJEJqLv46EFRXc30oNddHvWg7nqrB0V/AT8ur+0wGluPCB45xIjN8IwHQQ8eVc0VvfW4z3ogaTwy/ZuhbshpOGc8GDce3f+HjwsTP3/8AN5TSg3doGXGAAAAAElFTkSuQmCC",
  li =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAflBMVEX1sQAAAAD4tgD0sQD5uAD/twD3tQDzuQD4swD4swD2swD7uADzrQDfnwD3tQD4tgD4tQD6tgD4tgD3tQD7twD3tQD4tQD4tgD4tgD4tQD4tgD4tQD6tgD3swD7tQD4tgD5tQD5tgD4tQD3tgD6tQD5tgD3tgD4tQD2tAD3tQDsa+XXAAAAKXRSTlMaAIsXDwjpFgtbEyIVCDv69jLbllAd7tTMtqx7R0Ip46CGgHNpxGPyVdQLj50AAAIySURBVFjDzdnZetowEAXgk0pGisA2+xIIS7ZW7/+C9UfsTguaMaC56LlN+PHIki0NeOpJ6W1wBk2MC9aXff8vgoV1uIqzhQgKGtgwpgR6AzHGy6DMyWQ/WBAnk8VtYMDNCTeABe5K0Qda3BkrgyPcnZEEOjwQx4MGD8UwIHk5IjLqpbgUOEJGRtegRVbsJVggM8UFiOz8C4Z8MBBIBWcWTaDRAA2BHirxf0CjA5oO9IDeJYK5wOHbDzGv3CWCu8XVNPKpt+yNBrvohi+sN5jzCxDCInmv0956IiwXSJN6d0h5x4U0uZGueIhz9psrbvyOcyZVumakn6vrHb5zuij70P5hPnhOP2mRHsJBvUX3yb+9zz3O2dYxCTZcmQZj3Azb2j7Jmy1oAqTBEp4D47SdvItZN3wf7VesIgt6WA6k8cfzMtIX4Ncy8qBFYMEmL13Z6xg37fC91VEAA5wExmnV3ZsdrR8JdDAsSONGqVZRBIljwCbHtmwaTAlEPxhXFdqcYtQA48+v7+HbRAWQJjQ9IGXQCCDlMDuO4y2gYaeNEHnaBF0wwOqCFl4X9Ch1wRJPuiC9AnRA14BWE7Tca3TdD1ZIpOBe9LNeb4lU2K3Ivrfmj2TF/GbpdSVy4y27WeL2m4s5v6E7fU2SnlHfcGpvidU37drHCvWDj/7RTP/wqH+81T+A67cI9JsY+m2WfNFot6q0m2na7T7thqRyy1S7qavcdlZujCu37v+HHxce/PnjNxRojhkWKpMTAAAAAElFTkSuQmCC",
  oi =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAkFBMVEX4InIAAAD4I3T6JnP3KHP4KXz5HnL6LnXnHmntHm3/MXboH2n7JnT5JHXmHmj0InLmHmjmHmjoHmn/MHrqHWrsHmv1Hm7mHmjrH2vxIG/mHWjnHmnnH2nnHmnpHmvtHm3uIW3zH2/mH2joHmnnHmnnHWnoH2nqH2rvH27wIm3xH2zoH2noHmnsIGrvIGvlHmitsL8/AAAAL3RSTlMmACMhIAwrEMpWBZ4WHPoW8+eOCoZeM+1wN93Vv7l8ZEw70MWyq6VqSENBnJd3T517QyMAAAK+SURBVFjDzdnpbuIwFAXgM3Ec0zQLgbAvhQIF2jJ+/7cbC00gML6+UCfSnD9dhD4RX8exb/CLiVRJGooACESYJkpyn4cTy0P8kzCXPwP7SQAiQdJ/GlQCzgj1FKgCsAnUw6AUeChCPgTGKR5OGvOgDPBEAsmBCZ5M4gZDPJ3QAcaEx4gxBcYCP4qoi7B4XiIs4+c1jrB4PuIVTOCV5B6U8Iy8BePAFwziGzCFd9I6KNFAZA0UTYDiCio0EnUBqYp8lrt55y6Lj/2QqksFKoLbanu6vYj+iiBHcNDVZN7X5CgasG/3Mu3I1H7ZfQMSN91kpJ1ZUDcgiJK8UlK26Jx/vhBlgX1SR+QADoBvbbKFLdKAOSx5o7wRgNW51FYwN2AIS8pbZbfcj8v5uUxHYHn+p7XQoQFhy1eNK5ZVoV4NWfS+MnoQDSfB1KQzgUkEmAyq2pOghGLAd0OtPwqdzUoAv7sMqJC7we4aGI/+2gfgxIA5UjfYq1e8GAIzN5gidILZEMNCX7IFTm4whHCCG6Cnazli4gYFAif4AWzq4BIYOUHDOcFeNWjXv6dOEAz4CnTqYAkUbpC55EX160WJMvclM0XpRjhkV28GvDFFYaaNHtfLnK2ABTNtuIk9jYBd9XWN/qK5iZ1T4HXiYH8uxOYTGE4ZMGEXB/0Nk8PbYA1g0tHs4iDZ9XB+vKzjheZASSywN/dbtt1/RsNV+a7rOcIW6hEw1lyyyFpk6iE1YcEN+ZCSsGXOgSfYIskH/YrxZlYvoLciKJ1ed+XYivRhzbfLG4DcLNEb4nFBeZ0DrBHuDSei5bzI7rFsuhuAiCK3xHX1LqATNL5pb/pY0fjBp+mjWeOHx3aPt/4H8FZbBP5i2HKbxb8R1Hqryr+Z1n67z78h2X7L1L+p6992brMx7t+6/x9eLlSoyq+vP3L+9ccfh26+Ox+5m9sAAAAASUVORK5CYII=",
  ci = "/modules/chat2/assets/line-dd912364.png",
  ui =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAflBMVEVFgM4AAABKgtBTiNNMhdJIg8uAgP9JhM9Cgs9Egs1FgstDg85GiNBGgstGgspLh8dDgs5EgsxEgstFgspIgslHgclHgshJhMpFgsxIhMpHgclHgspHgchHgshIg8lHgcpJg81Kh85CiM5HgslJgspEhdFHgspIgclJgshBgtCd5W+MAAAAKXRSTlMaABYIDwsEE/726Pwr3NcR+vHt4bJpWVLloMS9mox1X0A0JKdIH82Uhak7S2wAAAJ8SURBVFjDzZnplqIwEEa/qYCILIqKuLZ7T8/7v+CcxiaBBBKQmnPm/mpauFaqoklK/HIgfC8gAgCiwPOF635YZR7BgDzxnlDM0clcDBb6BCvkdwldOrfSLRSEXpDoJZwE6E0wcQsFBiFcQg8D8exCwmDIIpwQ3oAmplD5Rhuh+UYbMSZ/ytgmDAAOI9R8GYWnCwVGIprCCUYzaQgDjCaoCwUYEDUhgQFSQh8s+FJIAFuIkAEyhQi+AAF6CQXYEKVwDjbmpRCMfAsFwDlmuL5mzuskC8Nwlt6fvb50oNf4kc5K0qK8/P1HsscP6zRJktVqtf28mnWGnsJ19fwiBoB4N63+keHFUb3Hzkwi9BRe5N0HlOyq6xAvQiXcmEmED420uju6oYxRE56UbwkDH0ZNCnn/GiVRc8iZLUB4CKCz0kJcNOL5UL5PmAQgc6JoIYYN4VK+Gt5gQi1CJNUj02tdONOm0RkmUtdR6OQ1ZCW8RvK1O/qzl099AajXdFt7rwHECznoAhtZI+CgEhhjCGquRfeZ/DtN9RnjzqKaOnYOnboO4WVqFz66hQFaOdqFR3QQwEM7iVU4zdGOB7+r0qHd+IFWfAh0sHGksd0o0L1G7cywGhdfaEEuAd0fGMX2uVnUr3MYkH2RWjeFBXCpGxexWRPHMnqKas9HAFDUh70yU+ha6OO9EoT4Jp/aCtNjK3I9bn8UKUrOtahPrVsRARe3R57nxbOK+jALsyxbLrc7Y8Tc2zn2DSf/lph/085/rOA/+PAfzfgPj/zHW/4D+PhKE3cTg7/Nwt8I+vetqrcnOHG3+7gbktwtU+amLnPbmbkxzty6/x9+XHjz54+/Ojh4g6mTuzIAAAAASUVORK5CYII=",
  di =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAjVBMVEUduusAAAAhvOwfuesguukewvUsveoovOgfve4fvO8evfAjuOgiu94dve4fve8eve8evO4cvvAZvvEfve8fve8fvO8fve8eve8eve8dve4fve8fu+8evu8ave8ms+Yfve8fvO8evO8eve8eve8gvfAevvAeve8fve4fve8fve8fvu4fve4gvPAgv+4fvO7u5xQkAAAALnRSTlMaABYYDwgLE/acdxUHNtLLRS0g8OPdx7uQa1BNPCYU+ujBhoFYMCrYqe7msWRfExrw6wAAAnNJREFUWMPNmdeSozAQRa+VCA6Dw3ic7XWepP//vPVsrQ0WNEgIqua8c0pI3ZK6hU4FUomAMQ5wxgKhZKcClMoEQw4mZD1hT3AQcNFzFiqGUphyEiqOSriyFkoGK5i0EwawJrAQSg4HuKwSCjgiyoVdONMtEzLUgNFCjlpwSsgBfyM8/jeFFQm78KCbFwp4IUyhhCfSEHJ4wp+FAbwJskKJBpAZIUMDsFSo0AjqIeRoBH4XKqC5IaLWDB6j2ZmYxZuwB0e+Blrrywh5ejeha9KN4lf9j0VxAsJtSdaHnf7PV/GywCWoh7OxfpAUBzfs/7gfhTrDunjTge0ar65bnWVCZAs6sGH5pg3+oJAOpE3YTXWOCIVIKFQxH6Sa7WOkMZEsENVhlzJYPsa6QCECm9Kw2+90Srg/v+g7QxSyAasIu5SX1Tr1jVEMA7MMu/CA8yBjJ4VE4iWfz2E3XT359BWFULqFEXZhDAwvOsMBDiQvZhD3gdOrzvIN2I/R8I1j5Hx6ReoYcnw/ffzWB9CfGHMAt1VOZnfBeI7Ul3IhhWRgL6OPn+GdcGP1oQ0+QRBAgGQRL/HDcKdNZiAQUKhkr3PMQaAgUUmUFyYgkDYb7DEvHIHA7gg4mL4JCJjlIXV8N/d/AmF7jPYHxv5PIK0P+tE1K4ypxHO5isTbVLig/tjpsrTcVe3/6Lld5073E+qdWmPnC2dUvsjK/Uo8D0sSj9e5tCdTHe6pAdYrK9ZU2rHGC5+mS7Omi8eWy1v/ArzdFoF/E6PVNou/kbffqvJvprXf7vNvSLbfMvVv6vq3ndtsjPu37n/D40L6/LG5P39sLJ4//gKvbHY2wumW7QAAAABJRU5ErkJggg==",
  fi =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAhFBMVEUUiesAAAAWjeoUi+shkesVi+ofi+Aai+ggn/8XiO4YiO4YiO4WivAQi+8eh+EYie4XiO4Zie4Wiu8SivIXie4YiO4Tiu4Yie4YiO4YiO4Xiu8Xhu4WiO8VjO4UjO8Yie0Xie4XiO0Wie4YiO8Xiu8Yie4Xiu4Yie8UifAYiO4Xiu4YiO2a7cAvAAAAK3RSTlMaABYYDwsIEwih+PJZHhHcsoVSI8VyKu3WzmFMPzo256iblX5sZ0iLMeO8lzIrkgAAAm1JREFUWMPN2dmSojAYhuHPbOyCqLhru9vN/d/fWM7oCOQPYKCqn2N5KxjUJGJQQ0nhMIY7xhwhVd3rjUFXMFQw4X4WVEMOAh+q1kHJYMRkq6DkqMVl46DL0AhzmwUdNOY0CCqOFriqCwq0JMxBhtaYKcjwAUYHOT7CqSAH7Iuo3K/lXaOLHsCqQQErohxUsKRKQQ5LvBh0YM15D7rogPsWZOgA+x+U6IR8BTk6wZ9BCXQ3RLR7B6PwkCT785h+F0E909prprv8IRhFADbeEkXqERxqe/GlOrwkf5mk10U+j1A0fAS5dix5sELJV140W2umBcRDfb84SFGwLPXm280orTzcIL5mJvcr/FHhlual4GKWe9UvHRBz/PN3EG+3vckrkqg6zxhAa//vGi8j7vjuiqoBFLTC51X+1+o5TSUeNBQk9OL8ZeedNkBYDh6gISGgt/ILV/vf83LwCA0BB1oXTP3c7AwNBwxai9j7qQmm0GBU8CuvtdUHCcvaXox2JnXBPdpZ181JiJbSmbE3i6DHQNka73pE5EzBLFzQAxxTQQeUwwcDhAMBShbQve8x9AQkSCE50f4FBAkFQ5Ea4xEUhQEMsoM2mYD0/AkgRWuv2hsbFkyoWQtnXqvPnHj8jNLWXkA8MASX+KHPNrd1evLivGKxggEnlyLnONfZnWA0NCyWTtVPcjwaw0wZl3O3Y7J7xYLJ9YI6rH7BeUuX0+P0HG7RhOx6Sdz5or3rbUXnG5+ut2Zdbx573t7ab8B7PSKwL7Jej1nsi7znoyrbIuv7uM/+QLL/I1P7Q93+j53tD8btj+5/w58LH/798Qe9Mo7tjKe2QgAAAABJRU5ErkJggg==",
  ie = {
    crown: Ka,
    roulette: Va,
    roulette_w: Qa,
    heartbreak1: Za,
    heartbreak2: qa,
    bigwin: Ja,
    star: yt,
    ribbon: Xa,
    ribbongif: ei,
    ribbongif_o: ti,
    animation: {
      heart_left: ri,
      heart_right: ni,
      block: si,
      block_two: ai,
      star: yt,
    },
    icons: {
      facebook: ii,
      email: li,
      ins: oi,
      line: ci,
      nothing: ui,
      telegram: di,
      twitter: fi,
    },
  };
var gi = _(
  '<div class=animation-lose><img class=left alt=""><img class=block_one alt=""><img class=block_two alt=""><img class=right alt="">'
);
const at = () => (
  (Math.random() * 2).toFixed(1) + "",
  (() => {
    var e = gi(),
      t = e.firstChild,
      r = t.nextSibling,
      n = r.nextSibling,
      i = n.nextSibling;
    return (
      F(
        (c) => {
          var o = ie.animation.heart_left,
            u = ie.animation.block_two,
            d = ie.animation.block,
            a = ie.animation.heart_right;
          return (
            o !== c.e && z(t, "src", (c.e = o)),
            u !== c.t && z(r, "src", (c.t = u)),
            d !== c.a && z(n, "src", (c.a = d)),
            a !== c.o && z(i, "src", (c.o = a)),
            c
          );
        },
        { e: void 0, t: void 0, a: void 0, o: void 0 }
      ),
      e
    );
  })()
);
var hi = _(
  '<div class="flex w-full justify-center items-center mb-2"><div class="flex-1 flex justify-center"><a target=_blank rel="noopener noreferrer"><img class="w-9 h-9"></a></div><div class="flex-1 flex justify-center"><a target=_blank rel="noopener noreferrer"><img class="w-9 h-9"></a></div><div class="flex-1 flex justify-center"><img class="w-9 h-9"></div><div class="flex-1 flex justify-center"><img class="w-9 h-9"></div><div class="flex-1 flex justify-center"><img class="w-9 h-9"></div><div class="flex-1 flex justify-center"><img class="w-9 h-9"></div><div class="flex-1 flex justify-center"><img class="w-9 h-9">'
);
const mi = Ot(() => oe().get("/agent/invitation/code/custom/")),
  $r = (e) => {
    const [t, r] = G({}),
      n = e.isWin
        ? "Guess who just landed on a mega win 😆"
        : "I'm heartbroken and needs love 🥺",
      i = {
        facebook: "https://www.facebook.com/sharer.php?u=",
        twitter: "https://twitter.com/share?url=",
      },
      c = (u, d) => {
        const a = [],
          g = `${location.protocol}//${X.host}/game-detail/${d}&bd=${
            e.shareObj.betId
          }&gn=${e.shareObj.gameUnique}&gd=${e.shareObj.gameId}&ud=${
            e.shareObj.userId
          }&un=${e.shareObj.userName}&sg=${e.shareObj.isSingle ? "1" : "0"}`;
        return (
          a.push(`title=${encodeURIComponent(X.host)}`),
          a.push(`description=${encodeURIComponent(n)}`),
          a.push(`image=${encodeURIComponent(u)}`),
          a.push(`url=${encodeURIComponent(g)}`),
          a.push(`site_name=${encodeURIComponent(X.host)}`),
          encodeURIComponent(
            `${location.protocol}//webapi.${
              X.host
            }/game/support/share/friend/?${a.join("&")}`
          )
        );
      };
    _e(() =>
      ae(void 0, null, function* () {
        const u = yield mi();
        r(u);
      })
    );
    const o = (u) => {
      const d = `${location.protocol}//${X.host}/api/game/support/share-v3/info/${e.shareId}/`;
      return e.shortUrl && e.shortUrl !== ""
        ? u + e.shortUrl
        : u + c(d, t().invitationCode);
    };
    return (() => {
      var u = hi(),
        d = u.firstChild,
        a = d.firstChild,
        g = a.firstChild,
        x = d.nextSibling,
        A = x.firstChild,
        w = A.firstChild,
        v = x.nextSibling,
        p = v.firstChild,
        S = v.nextSibling,
        M = S.firstChild,
        m = S.nextSibling,
        f = m.firstChild,
        h = m.nextSibling,
        C = h.firstChild,
        k = h.nextSibling,
        B = k.firstChild;
      return (
        (a.$$click = () => {
          e.onShare && e.onShare("facebook", o(i.facebook));
        }),
        (A.$$click = () => {
          e.onShare && e.onShare("twitter", o(i.twitter));
        }),
        F(
          (N) => {
            var W = o(i.facebook),
              b = ie.icons.facebook,
              y = o(i.twitter),
              E = ie.icons.twitter,
              I = ie.icons.email,
              T = ie.icons.telegram,
              P = ie.icons.nothing,
              Y = ie.icons.line,
              O = ie.icons.ins;
            return (
              W !== N.e && z(a, "href", (N.e = W)),
              b !== N.t && z(g, "src", (N.t = b)),
              y !== N.a && z(A, "href", (N.a = y)),
              E !== N.o && z(w, "src", (N.o = E)),
              I !== N.i && z(p, "src", (N.i = I)),
              T !== N.n && z(M, "src", (N.n = T)),
              P !== N.s && z(f, "src", (N.s = P)),
              Y !== N.h && z(C, "src", (N.h = Y)),
              O !== N.r && z(B, "src", (N.r = O)),
              N
            );
          },
          {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0,
            r: void 0,
          }
        ),
        u
      );
    })();
  };
re(["click"]);
var vi = _(
    '<div class="flex flex-col gap-3 share-bg1 rounded-lg px-4 py-2"><div class="flex items-center rounded-l gap-3 font-semibold"><p class="text-base font-extrabold"></p></div><div class="share-bg2 flex flex-col rounded-lg p-4"><div class="center gap-1.5 border-b border-third pb-2 mb-2"><img class="w-5 h-5"><span></span><span></span></div><div class="center gap-1.5"><span class=text-secondary></span><span class="text-primary font-extrabold text-xl">x</span></div></div><div class="flex items-center justify-between"><p><span class=text-secondary></span><span class="ml-1 font-extrabold"></span></p><p><span class=text-secondary></span><span class="ml-1 font-extrabold">'
  ),
  bi = _('<div class="center flex-col gap-2 mt-3"><p class=text-secondary>');
const pi = (e) => {
  const t = () => e.thirdProps.odds >= 1e4,
    [r, n] = G(),
    [i, c] = G({ precisionUnit: 2, aliasCurrencyName: "USDT" }),
    [o, u] = G(""),
    [d, a] = G(!1),
    [g, x] = G(0);
  _e(() => {
    A(e.thirdProps.betId);
  });
  const A = Ot((w) =>
    ae(void 0, null, function* () {
      const v = yield oe().get(`/game/support/share-v3/info/detail/${w}/`);
      n(v),
        c(xe.getCurrency(v.gameData.betLog.currencyName)),
        u(
          v.gameData.betLog ? v.gameData.betLog.betId : e.thirdProps.originBetId
        ),
        a(!!v.gameData.betLog),
        x(d() ? 0 : v.gameData.betLog.gv);
    })
  );
  return l(H, {
    get when() {
      return r();
    },
    children: (w) =>
      l(he, {
        get title() {
          return $("Share");
        },
        class: "bg-layer2",
        get children() {
          return [
            (() => {
              var v = vi(),
                p = v.firstChild,
                S = p.firstChild,
                M = p.nextSibling,
                m = M.firstChild,
                f = m.firstChild,
                h = f.nextSibling,
                C = h.nextSibling,
                k = m.nextSibling,
                B = k.firstChild,
                N = B.nextSibling,
                W = N.firstChild,
                b = M.nextSibling,
                y = b.firstChild,
                E = y.firstChild,
                I = E.nextSibling,
                T = y.nextSibling,
                P = T.firstChild,
                Y = P.nextSibling;
              return (
                s(
                  p,
                  l(H, {
                    get when() {
                      return t();
                    },
                    get fallback() {
                      return l(at, {});
                    },
                    get children() {
                      return l(st, { show: !0 });
                    },
                  }),
                  S
                ),
                s(
                  S,
                  (() => {
                    var O = K(() => !!t());
                    return () =>
                      O()
                        ? $("Winning tastes sweet!")
                        : $("__ENV_COCO__ took it all! 🥺");
                  })()
                ),
                s(h, () =>
                  Wt(
                    new Ae(e.thirdProps.winAmount).sub(e.thirdProps.betAmount),
                    i().precisionUnit
                  )
                ),
                s(C, () => i().aliasCurrencyName),
                s(B, () => $("Payout")),
                s(N, () => Number(e.thirdProps.odds) / 1e4, W),
                s(E, () => $("User Name")),
                s(I, () => w().nickName),
                s(P, () => $("Game")),
                s(Y, () =>
                  e.thirdProps.fullName && e.thirdProps.fullName !== ""
                    ? e.thirdProps.fullName
                    : e.thirdProps.gameUnique
                ),
                F(
                  (O) => {
                    var ne = Z.coinIcon(i().aliasCurrencyName),
                      se = Q(
                        "text-xl font-extrabold",
                        t() ? "text-brand" : "text-error"
                      );
                    return (
                      ne !== O.e && z(f, "src", (O.e = ne)),
                      se !== O.t && ee(h, (O.t = se)),
                      O
                    );
                  },
                  { e: void 0, t: void 0 }
                ),
                v
              );
            })(),
            (() => {
              var v = bi(),
                p = v.firstChild;
              return (
                s(p, () => $("Share on social media")),
                s(
                  v,
                  l($r, {
                    third: !0,
                    get isWin() {
                      return t();
                    },
                    get shareId() {
                      return e.thirdProps.betId;
                    },
                    get shortUrl() {
                      return w().shortUrl;
                    },
                    get shareObj() {
                      return {
                        betId: o(),
                        gameUnique:
                          w().gameType === 3 ? "bestslots" : w().gameUnique,
                        userId: w().userId,
                        userName: w().nickName,
                        gameId: g().toString(),
                        isSingle: d(),
                      };
                    },
                  }),
                  null
                ),
                v
              );
            })(),
          ];
        },
      }),
  });
};
var Re = ((e) => (
    (e[(e.Pending = 0)] = "Pending"),
    (e[(e.Lose = 10)] = "Lose"),
    (e[(e.Win = 20)] = "Win"),
    (e[(e.Cancel = 30)] = "Cancel"),
    e
  ))(Re || {}),
  xi = _(
    '<div class="relative overflow-hidden"><img class="absolute top-0 left-0">'
  ),
  Ai = _("<div>");
const $i = (e) =>
  (() => {
    var t = Ai();
    return (
      s(
        t,
        l(H, {
          get when() {
            return e.isWin;
          },
          get fallback() {
            return e.children;
          },
          get children() {
            var r = xi(),
              n = r.firstChild;
            return (
              s(r, () => e.children, null),
              F(() => z(n, "src", e.delay ? ie.ribbongif_o : ie.ribbongif)),
              r
            );
          },
        })
      ),
      F(() => ee(t, "animation-card " + (e.isWin ? "win" : "lose"))),
      t
    );
  })();
var _i = _(
    '<div class="flex items-center chat-bg3 rounded-lg mb-2 p-4 gap-4"><div class=icon-wrap></div><p class="text-base font-extrabold">'
  ),
  Ci = _(
    '<div class="center gap-2 leading-6"><img class="w-6 h-6"><span class="text-xl text-brand"></span><span>'
  ),
  wi = _('<div class="bg-layer5 center p-4 rounded-lg">'),
  yi = _(
    '<div class="center gap-2 mt-3"><p class=text-secondary></p><p class="text-base font-extrabold"> x'
  ),
  Si = _("<div>"),
  ki = _(
    '<div class="flex items-center chat-bg3 rounded-lg mb-2 p-4 gap-4"><p class="text-base font-extrabold"> '
  ),
  Ii = _('<p class="text-base font-extrabold"> '),
  Bi = _(
    '<div class="bg-layer5 rounded-lg p-3 flex flex-col items-center gap-3"><div class="center gap-1 font-extrabold text-2xl p-3 border-b border-third"><img class="w-6 h-6"><span></span><span class=text-secondary></span></div><div class="center gap-2">'
  ),
  Ei = _("<p class=text-secondary>"),
  Ri = _('<p class="text-base font-extrabold"> x');
const Di = function (e) {
  const t = J(),
    r = () =>
      e.isLottery
        ? e.open
          ? e.betLog.lotteryStatus === Re.Win
          : e.betLog.odds > 0
        : e.betLog.odds >= 1e4,
    n = () =>
      e.open ? e.betLog.lotteryStatus === Re.Pending : e.betLog.isPending,
    [i, c] = G(!1),
    o = le(() => (e.fullName ? e.fullName : e.gameUnique));
  Xt(ps(e.gameUnique)), e.gameType;
  const u = le(() =>
      e.betLog.currencyName ? xe.getAlias(e.betLog.currencyName) : ""
    ),
    d = n()
      ? Number(e.betLog.betAmount)
      : new Ae(e.betLog.winAmount).sub(e.betLog.betAmount).toNumber();
  return (() => {
    var a = Si();
    return (
      s(
        a,
        l(H, {
          get when() {
            return n();
          },
          get fallback() {
            return (() => {
              var g = ki(),
                x = g.firstChild,
                A = x.firstChild;
              return (
                s(
                  g,
                  l(H, {
                    get when() {
                      return r();
                    },
                    get fallback() {
                      return l(at, {});
                    },
                    get children() {
                      return l(st, { show: !0 });
                    },
                  }),
                  x
                ),
                s(
                  x,
                  (() => {
                    var w = K(() => !!e.isLottery);
                    return () => (w() ? $("Lottery") : o());
                  })(),
                  A
                ),
                s(
                  x,
                  (() => {
                    var w = K(() => !!r());
                    return () => (w() ? $("Wow Moment") : $("Damn Moment"));
                  })(),
                  null
                ),
                g
              );
            })();
          },
          get children() {
            var g = _i(),
              x = g.firstChild,
              A = x.nextSibling;
            return (
              s(x, l(q, { name: "Lottery" })),
              s(A, () => $("Lottery Anticipation Moment")),
              g
            );
          },
        }),
        null
      ),
      s(
        a,
        l(H, {
          get when() {
            return e.open;
          },
          get fallback() {
            return (() => {
              var g = Bi(),
                x = g.firstChild,
                A = x.firstChild,
                w = A.nextSibling,
                v = w.nextSibling,
                p = x.nextSibling;
              return (
                s(w, d),
                s(v, u),
                s(
                  p,
                  l(H, {
                    get when() {
                      return n();
                    },
                    get fallback() {
                      return [
                        (() => {
                          var S = Ei();
                          return s(S, () => $("Payout")), S;
                        })(),
                        (() => {
                          var S = Ri(),
                            M = S.firstChild;
                          return (
                            s(
                              S,
                              () =>
                                e.isLottery
                                  ? e.betLog.odds
                                  : e.betLog.odds / 1e4,
                              M
                            ),
                            S
                          );
                        })(),
                      ];
                    },
                    get children() {
                      var S = Ii();
                      return (
                        S.firstChild, s(S, () => e.betLog.fullName, null), S
                      );
                    },
                  })
                ),
                F(() => z(A, "src", Z.coinIcon(e.betLog.currencyName))),
                g
              );
            })();
          },
          get children() {
            return [
              (() => {
                var g = wi();
                return (
                  (g.$$click = () => {
                    if (i()) return !1;
                    e.open &&
                      (c(!0),
                      setTimeout(() => {
                        c(!1);
                      }, 2e3),
                      t(
                        e.isLottery
                          ? `/lottery/bet_detail/${e.betLog.originBetId}`
                          : `/game-detail/${e.betLog.distributedId}`
                      ));
                  }),
                  s(
                    g,
                    l($i, {
                      get show() {
                        return K(() => !e.chatroom)() && r();
                      },
                      class: "",
                      get isWin() {
                        return r();
                      },
                      get children() {
                        var x = Ci(),
                          A = x.firstChild,
                          w = A.nextSibling,
                          v = w.nextSibling;
                        return (
                          s(w, d),
                          s(v, u),
                          s(
                            x,
                            l(de, {
                              name: "Arrow",
                              class: "w-5 rotate-180 ml-4",
                            }),
                            null
                          ),
                          F(() =>
                            z(A, "src", Z.coinIcon(e.betLog.currencyName))
                          ),
                          x
                        );
                      },
                    })
                  ),
                  g
                );
              })(),
              (() => {
                var g = yi(),
                  x = g.firstChild,
                  A = x.nextSibling,
                  w = A.firstChild;
                return (
                  s(x, () => $("Payout")),
                  s(
                    A,
                    () => (e.isLottery ? e.betLog.odds : e.betLog.odds / 1e4),
                    w
                  ),
                  g
                );
              })(),
            ];
          },
        }),
        null
      ),
      a
    );
  })();
};
re(["click"]);
var Ui = _(
  '<div class="center gap-1 cursor-pointer"><div class=like-dom></div><span class=text-secondary>'
);
const Li = (e) =>
    oe().post("/game/support/system-like/like-event/", {
      likeItem: e,
      sceneType: 2,
    }),
  Mi = (e) => {
    const t = J(),
      [r, n] = Ue({ count: 0, isLike: !1 }),
      [i, c] = G(!1);
    let o;
    const u = (d) => (d > 0 && d < 10 ? "0" + d : d);
    return (
      Ie(() => {
        c(!1);
      }),
      (() => {
        var d = Ui(),
          a = d.firstChild,
          g = a.nextSibling;
        (d.$$click = () => {
          te.login
            ? (c(!0),
              Li(e.shareId).then((A) => {
                A &&
                  (n("count", A.clickCount),
                  n("isLike", A.hasSelfClick),
                  c(!1));
              }))
            : t("/login/signin");
        }),
          s(
            d,
            l(q, {
              get class() {
                return r.isLike || i() ? "fill-[#eb4926]" : "common";
              },
              name: "Like",
            }),
            a
          );
        var x = o;
        return (
          typeof x == "function" ? ke(x, a) : (o = a),
          s(
            g,
            (() => {
              var A = K(() => r.count > 0);
              return () => A() && u(r.count);
            })()
          ),
          d
        );
      })()
    );
  };
re(["click"]);
var St = _(
    '<div class="flex items-center gap-3 font-semibold"><p class="text-base font-extrabold">'
  ),
  Ni = _('<img class="w-5 h-5">'),
  kt = _("<span>"),
  Ti = _('<span class="text-primary font-extrabold text-xl">x'),
  Oi = _(
    '<div class="flex flex-col gap-3 share-bg1 rounded-lg px-4 py-2"><div class="share-bg2 flex flex-col rounded-lg p-4"><div class="center gap-1.5 border-b border-third pb-2 mb-2"></div><div class="center gap-1.5"><span class=text-secondary></span></div></div><div class="flex items-center justify-between"><p><span class=text-secondary></span><span class="ml-1 font-extrabold"></span></p><p><span class=text-secondary></span><span class="ml-1 font-extrabold">'
  ),
  Hi = _('<div class="center flex-col gap-2 mt-3"><p class=text-secondary>'),
  Pi = _("<div><span class=font-extrabold>"),
  zi = _("<span>--");
const Wi = (e) => {
  const t = () => e.thirdProps.chat.message,
    r = () => t().lotteryStatus === Re.Win,
    n = () => t().lotteryStatus === Re.Pending,
    i = () => e.thirdProps.name,
    c = () => e.thirdProps.userId,
    o = () => "",
    u = xe.getCurrency(t().currencyName);
  return (
    console.log(e.thirdProps),
    l(he, {
      get title() {
        return $("Share");
      },
      class: "bg-layer2",
      get children() {
        return [
          (() => {
            var d = Oi(),
              a = d.firstChild,
              g = a.firstChild,
              x = g.nextSibling,
              A = x.firstChild,
              w = a.nextSibling,
              v = w.firstChild,
              p = v.firstChild,
              S = p.nextSibling,
              M = v.nextSibling,
              m = M.firstChild,
              f = m.nextSibling;
            return (
              s(
                d,
                l(H, {
                  get when() {
                    return !n();
                  },
                  get fallback() {
                    return (() => {
                      var h = St(),
                        C = h.firstChild;
                      return (
                        s(h, l(q, { class: "w-10 h-10", name: "Lottery" }), C),
                        s(C, () => $("Lottery Anticipation Moment")),
                        h
                      );
                    })();
                  },
                  get children() {
                    var h = St(),
                      C = h.firstChild;
                    return (
                      s(
                        h,
                        l(H, {
                          get when() {
                            return r();
                          },
                          get fallback() {
                            return l(at, {});
                          },
                          get children() {
                            return l(st, { show: !0 });
                          },
                        }),
                        C
                      ),
                      s(
                        C,
                        (() => {
                          var k = K(() => !!r());
                          return () =>
                            k()
                              ? $("Winning tastes sweet!")
                              : $("__ENV_COCO__ took it all! 🥺");
                        })()
                      ),
                      h
                    );
                  },
                }),
                a
              ),
              s(
                g,
                l(H, {
                  get when() {
                    return !n();
                  },
                  get fallback() {
                    return (() => {
                      var h = Pi(),
                        C = h.firstChild;
                      return s(C, () => t().fullName), h;
                    })();
                  },
                  get children() {
                    return [
                      (() => {
                        var h = Ni();
                        return (
                          F(() => z(h, "src", Z.coinIcon(u.aliasCurrencyName))),
                          h
                        );
                      })(),
                      (() => {
                        var h = kt();
                        return (
                          s(h, () =>
                            Wt(
                              new Ae(t().winAmount).sub(t().betAmount),
                              u.precisionUnit
                            )
                          ),
                          F(() =>
                            ee(
                              h,
                              Q(
                                "text-xl font-extrabold",
                                r() ? "text-brand" : "text-error"
                              )
                            )
                          ),
                          h
                        );
                      })(),
                      (() => {
                        var h = kt();
                        return s(h, () => u.aliasCurrencyName), h;
                      })(),
                    ];
                  },
                })
              ),
              s(A, () => $("BigWin (Payout)")),
              s(
                x,
                l(H, {
                  get when() {
                    return !n();
                  },
                  get fallback() {
                    return zi();
                  },
                  get children() {
                    var h = Ti(),
                      C = h.firstChild;
                    return (
                      s(
                        h,
                        (() => {
                          var k = K(() => !!r());
                          return () => (k() ? t().odds : 0);
                        })(),
                        C
                      ),
                      h
                    );
                  },
                }),
                null
              ),
              s(p, () => $("User Name")),
              s(S, i),
              s(m, () => $("Game")),
              s(f, () => $("Lottery")),
              d
            );
          })(),
          (() => {
            var d = Hi(),
              a = d.firstChild;
            return (
              s(a, () => $("Share on social media")),
              s(
                d,
                l($r, {
                  third: !0,
                  get isWin() {
                    return r();
                  },
                  get shareId() {
                    return t().betId;
                  },
                  get shortUrl() {
                    return o();
                  },
                  get shareObj() {
                    return {
                      betId: t().originBetId,
                      gameUnique:
                        t().gameType === 3 ? "bestslots" : t().gameUnique,
                      userId: c(),
                      userName: i(),
                      gameId: t().originBetId,
                      isSingle: !0,
                    };
                  },
                }),
                null
              ),
              d
            );
          })(),
        ];
      },
    })
  );
};
var Fi = _(
  '<div><div class=mid-area></div><div class="flex gap-4 items-center mt-2"><div class=cursor-pointer>'
);
function Yi(e) {
  const t = J(),
    r = () => e.data.chat.subType === "21";
  return (() => {
    var n = Fi(),
      i = n.firstChild,
      c = i.nextSibling,
      o = c.firstChild;
    return (
      s(
        i,
        l(Di, {
          name: "msg",
          get gameUnique() {
            return e.data.chat.message.gameUnique;
          },
          get betLog() {
            return e.data.chat.message;
          },
          open: !0,
          get isLottery() {
            return r();
          },
          chatroom: !0,
          get gameType() {
            return e.data.chat.message.gameType;
          },
          get fullName() {
            return e.data.chat.message.fullName;
          },
        })
      ),
      s(
        c,
        l(Mi, {
          get shareId() {
            return e.data.chat.message.betId;
          },
        }),
        o
      ),
      (o.$$click = () => {
        te.userId > 0
          ? V.push(() =>
              e.data.chat.message.distributedId
                ? l(pi, {
                    get thirdProps() {
                      return e.data.chat.message;
                    },
                  })
                : l(Wi, {
                    get thirdProps() {
                      return e.data;
                    },
                  })
            )
          : t("/login/signin");
      }),
      s(o, l(q, { name: "Share" })),
      n
    );
  })();
}
re(["click"]);
var ji = _("<div class=wrap>");
function Gi(e) {
  return (() => {
    var t = ji();
    return (
      s(
        t,
        l(He, {
          fallback: null,
          get children() {
            return l(Yi, {
              get data() {
                return e.data;
              },
            });
          },
        })
      ),
      t
    );
  })();
}
var Ki = _(
    '<svg xmlns=http://www.w3.org/2000/svg class="sc-jcVebW XXWmM icon"viewBox="0 0 32 32"><path fill="var(--color1, #455a64)"d="M15.778 15.808H3.911a11.867 11.867 0 1023.735 0 11.868 11.868 0 10-23.735 0h11.867z"opacity=.002></path><path fill="var(--color2, #6300d8)"d="M3.911 15.749a11.8 11.8 0 01.902-4.484l10.965 4.542-10.965 4.542a11.822 11.822 0 01-.902-4.542z"></path><path fill="var(--color3, #f8c32f)"d="M7.429 7.371a11.911 11.911 0 013.81-2.537l4.539 10.973-10.965-4.542a11.915 11.915 0 012.575-3.854z"></path><path fill="var(--color4, #c201cc)"d="M15.837 3.932c1.54.007 3.057.31 4.481.902l-4.539 10.973L11.24 4.834a11.79 11.79 0 014.539-.903z"></path><path fill="var(--color3, #f8c32f)"d="M20.317 4.834c1.442.6 2.747 1.473 3.851 2.577l.04.041a11.902 11.902 0 012.535 3.813l-10.965 4.542z"></path><path fill="var(--color5, #ce2e41)"d="M26.743 11.265c.599 1.443.902 2.981.902 4.542v.059a11.8 11.8 0 01-.902 4.484l-10.965-4.542z"></path><path fill="var(--color6, #3b4a53)"d="M26.743 20.35a11.915 11.915 0 01-2.575 3.854l-.041.04a11.911 11.911 0 01-3.81 2.537l-4.539-10.973z"></path><path fill="var(--color7, #7ee452)"d="M20.317 26.781a11.79 11.79 0 01-4.539.903h-.059a11.79 11.79 0 01-4.481-.902l4.539-10.973z"></path><path fill="var(--color8, #44bde8)"d="M7.348 24.163a11.902 11.902 0 01-2.535-3.813l10.965-4.542-4.539 10.973a11.908 11.908 0 01-3.851-2.577z"></path><path fill="var(--color9, #fcd049)"d="M15.973 2.01c7.731 0 13.999 6.263 13.999 13.99s-6.268 13.99-13.999 13.99C8.242 29.99 1.974 23.727 1.974 16S8.242 2.01 15.973 2.01zm0 2.423C9.58 4.433 4.398 9.612 4.398 16S9.58 27.567 15.973 27.567c6.393 0 11.575-5.179 11.575-11.567S22.366 4.433 15.973 4.433z"></path><path fill="var(--color9, #fcd049)"d="M19.979 16.042a3.946 3.946 0 11-7.893 0 3.946 3.946 0 017.893 0z">'
  ),
  Vi = _(
    '<div class=font-semibold><div class=flex><span class=text-brand></span><span class="flex items-center ">&nbsp;sent to&nbsp;</span></div><div class="bg-layer3 rounded-lg flex items-center py-2 px-4 mt-2">&nbsp; 1 SPIN'
  );
const Qi = () => Ki();
function Zi(e) {
  return (() => {
    var t = Vi(),
      r = t.firstChild,
      n = r.firstChild;
    n.nextSibling;
    var i = r.nextSibling,
      c = i.firstChild;
    return (
      s(n, () => X.host),
      s(
        r,
        l(pe, {
          get href() {
            return `/user/profile/${e.data.userId}`;
          },
          class: "text-brand",
          get children() {
            return ["@", K(() => e.data.name)];
          },
        }),
        null
      ),
      s(i, l(Qi, {}), c),
      t
    );
  })();
}
var qi = _("<span class=text-secondary>"),
  Ji = _(
    '<div class=font-semibold><span class="text-secondary mb-1"></span><div class="bg-layer5 rounded-lg flex items-center py-2 px-4"><img class="w-5 h-5 mr-2"><span></span><span>'
  );
const Xi = (e) =>
  (() => {
    var t = Ji(),
      r = t.firstChild,
      n = r.nextSibling,
      i = n.firstChild,
      c = i.nextSibling,
      o = c.nextSibling;
    return (
      s(r, () => $("I tipped")),
      s(
        t,
        l(pe, {
          class: "text-brand mx-1",
          get href() {
            return `/user/profile/${e.data.chat.message.toUserId}`;
          },
          get children() {
            return ["@", K(() => e.data.chat.message.toUserName)];
          },
        }),
        n
      ),
      s(
        t,
        l(H, {
          get when() {
            return e.data.chat.message.remark;
          },
          get children() {
            var u = qi();
            return s(u, () => e.data.chat.message.remark), u;
          },
        }),
        n
      ),
      s(c, () => e.data.chat.message.tip),
      s(o, () => xe.getAlias(e.data.chat.message.currencyName)),
      F(() => z(i, "src", Z.coinIcon(e.data.chat.message.currencyName))),
      t
    );
  })();
var el = _(
    `<div class="bg-no-repeat bg-contain flex-none w-10 h-10 relative bg-[url('src/public/coms/msgs/assets/tost.png')]">`
  ),
  tl = _(
    '<div class="bg-layer5 mb-3 p-3 rounded-lg"><div class="flex items-center gap-2 mb-2"><div></div></div><div>'
  ),
  rl = _('<div class="text-warning_brighter font-extrabold">'),
  nl = _('<div class="text-brand text-xl font-extrabold">'),
  sl = _('<div class="text-xs leading-4 text-secondary">');
function it() {
  return el();
}
const lt = function ({ tit: t, subTit: r, desc: n }) {
    return (() => {
      var i = tl(),
        c = i.firstChild,
        o = c.firstChild,
        u = c.nextSibling;
      return (
        s(c, l(it, {}), o),
        s(
          o,
          t &&
            (() => {
              var d = rl();
              return s(d, t), d;
            })(),
          null
        ),
        s(
          o,
          r &&
            (() => {
              var d = nl();
              return s(d, r), d;
            })(),
          null
        ),
        s(
          u,
          n &&
            (() => {
              var d = sl();
              return s(d, n), d;
            })()
        ),
        i
      );
    })();
  },
  al = "/modules/chat2/assets/bonus_tag-34ec657b.png";
var il = _('<img class="absolute w-7 -right-[2px] -top-[2px]">'),
  ll = _("<div><div>"),
  ol = _("<div>");
const _r = function (t) {
  function r(n) {
    return t.matchNumbers && t.matchNumbers.findIndex((i) => i === n) > -1;
  }
  return (() => {
    var n = ll(),
      i = n.firstChild;
    return (
      s(
        n,
        l(H, {
          get when() {
            return t.lastTicketId > 0;
          },
          get children() {
            var c = il();
            return z(c, "src", al), c;
          },
        }),
        i
      ),
      s(
        n,
        l(De, {
          get each() {
            return t.numbers;
          },
          children: (c) =>
            (() => {
              var o = ol();
              return (
                s(o, c), F(() => ee(o, Q("ball", r(c) && "!opacity-100"))), o
              );
            })(),
        }),
        i
      ),
      s(i, () => t.jackpotBallNumber),
      F(
        (c) => {
          var o = Q(
              "flex px-3 items-center w-60 h-10 bg-no-repeat bg-cover bg-[100%] relative py-1",
              Fr.darken
                ? "bg-[url('src/public/coms/msgs/assets/ball_bg.png')]"
                : "bg-[url('src/public/coms/msgs/assets/ball_bg_white.png')]"
            ),
            u = Q(
              "ball",
              "!jackpot_ball",
              t.matchJackpotBallNumber
                ? t.matchJackpotBallNumber > 0 && "!opacity-100"
                : ""
            );
          return (
            o !== c.e && ee(n, (c.e = o)), u !== c.t && ee(i, (c.t = u)), c
          );
        },
        { e: void 0, t: void 0 }
      ),
      n
    );
  })();
};
var cl = _(
    '<div class="font-semibold w-full h-64"><div class="flex items-center gap-2 mb-2 chat-bg1 p-3 rounded-lg"><div><div class="text-brand font-extrabold text-base"></div><div><span class="text-secondary mr-1">:</span><span class=font-semibold></span></div></div></div><div class="bg-layer5 p-3 my-2 flex flex-col items-center gap-2 rounded-lg"><p class=text-secondary> :</p><p>🎊 <!> 🎊</p><ul class=w-full>'
  ),
  ul = _(
    '<li class="flex justify-between"><div class=center><img class="w-4 h-4 mr-1"><span class=font-extrabold>'
  ),
  dl = _('<div class="font-semibold w-full h-64">');
function fl(e) {
  const t = e.data.chat.message,
    r =
      typeof t.matchNumbers == "string"
        ? t.matchNumbers.split(",").map((i) => Number(i))
        : t.matchNumbers,
    n = Number(t.jackpotBallNumber);
  return (() => {
    var i = cl(),
      c = i.firstChild,
      o = c.firstChild,
      u = o.firstChild,
      d = u.nextSibling,
      a = d.firstChild,
      g = a.firstChild,
      x = a.nextSibling,
      A = c.nextSibling,
      w = A.firstChild,
      v = w.firstChild,
      p = w.nextSibling,
      S = p.firstChild,
      M = S.nextSibling;
    M.nextSibling;
    var m = p.nextSibling;
    return (
      s(c, l(it, {}), o),
      s(u, () => $("LOTTERY DRAW RESULT")),
      s(a, () => $("Game ID"), g),
      s(x, () => t.periodId),
      s(w, () => $("The lucky numbers are"), v),
      s(
        A,
        l(_r, {
          numbers: r,
          jackpotBallNumber: n,
          matchNumbers: r,
          matchJackpotBallNumber: n,
          lastTicketId: 0,
        }),
        p
      ),
      s(p, () => $("Winners List"), M),
      s(
        m,
        l(De, {
          get each() {
            return t.winnerParamList.slice(0, 10);
          },
          children: (f) =>
            (() => {
              var h = ul(),
                C = h.firstChild,
                k = C.firstChild,
                B = k.nextSibling;
              return (
                s(
                  h,
                  l(pe, {
                    class: "text-brand ellipsis",
                    get href() {
                      return `/user/profile/${f.userId}`;
                    },
                    get children() {
                      return ["@", K(() => f.userName)];
                    },
                  }),
                  C
                ),
                s(B, () => f.amount),
                F(() => z(k, "src", Z.coinIcon(f.currencyName))),
                h
              );
            })(),
        })
      ),
      s(
        i,
        l(pe, {
          href: "/lottery/allLotteries",
          class: "flex items-center justify-end text-brand",
          get children() {
            return [
              K(() => $("View all")),
              l(de, { name: "Arrow", class: "rotate-180 text-sm w-4 ml-1" }),
            ];
          },
        }),
        null
      ),
      i
    );
  })();
}
function gl(e) {
  return (() => {
    var t = dl();
    return (
      s(
        t,
        l(H, {
          get when() {
            return e.data;
          },
          get children() {
            return l(fl, {
              get data() {
                return e.data;
              },
            });
          },
        })
      ),
      t
    );
  })();
}
var hl = _("<span class=cl-primary>5"),
  ml = _("<div class=h-40>");
const ot = "w-full h-10 font-extrabold text-base";
function vl() {
  const e = J();
  return [
    l(lt, {
      get tit() {
        return $("LOTTERY JACKPOT");
      },
      get subTit() {
        return `${xe.printCurrency(new Ae(1e5))}!`;
      },
      get desc() {
        return $("Lucky-Winner-Now");
      },
    }),
    l(j, {
      class: ot,
      type: "brand",
      onClick: () => e("/lottery"),
      get children() {
        return $("Buy Ticket");
      },
    }),
  ];
}
function bl() {
  const e = J();
  return [
    l(lt, {
      get tit() {
        return $("NEW LOTTERY DRAW");
      },
      get desc() {
        return l(Xe, {
          i18nKey: "chat.mainpage.lottery.countdown",
          get children() {
            return ["Lottery Draw Countdown ", hl(), " Minutes"];
          },
        });
      },
    }),
    l(j, {
      class: ot,
      type: "brand",
      onClick: () => e("/lottery"),
      get children() {
        return $("Buy Ticket");
      },
    }),
  ];
}
const pl = function () {
  const t = J();
  return [
    l(lt, {
      get tit() {
        return $("NEW LOTTERY ROUND");
      },
      get desc() {
        return $("A new lottery round just begun! Don’t miss your chance!");
      },
    }),
    l(j, {
      class: ot,
      type: "brand",
      onClick: () => t("/lottery"),
      get children() {
        return $("Buy Ticket");
      },
    }),
  ];
};
function xl(e) {
  return (() => {
    var t = ml();
    return (
      s(
        t,
        l(H, {
          get when() {
            return e.data;
          },
          children: (r) => {
            switch (r().chat.message.type) {
              case 3:
                return l(vl, {});
              case 2:
                return l(bl, {});
              default:
                return l(pl, {});
            }
          },
        })
      ),
      t
    );
  })();
}
var Al = _(
  '<div><div class="flex items-center gap-2 mb-2 chat-bg1 p-3 rounded-lg"><div class="text-brand_alt font-extrabold text-base"></div></div><div class="bg-layer3 flex flex-col gap-2 items-center rounded-lg my-2 p-3"><p class="text-secondary font-semibold">:</p><div class="center gap-2"> <div class="font-2xl font-extrabold">x</div></div><p class=font-semibold>🎊 <!> 🎊</p><div class="w-full center font-extrabold text-brand rounded-lg bg-layer4 py-2">'
);
function $l(e) {
  const t = le(() => e.data.chat.message),
    r = t().quantity > 9999 ? (1450 / 1e3).toFixed(1) + "k" : t().quantity,
    n = J();
  return (() => {
    var i = Al(),
      c = i.firstChild,
      o = c.firstChild,
      u = c.nextSibling,
      d = u.firstChild,
      a = d.firstChild,
      g = d.nextSibling,
      x = g.firstChild,
      A = x.nextSibling;
    A.firstChild;
    var w = g.nextSibling,
      v = w.firstChild,
      p = v.nextSibling;
    p.nextSibling;
    var S = w.nextSibling;
    return (
      s(c, l(it, {}), o),
      s(o, () => $("TODAY IS A LUCKY DAY")),
      s(d, () => $("My Winning Numbers"), a),
      s(g, l(_r, Mt(t)), x),
      s(A, r, null),
      s(w, () => $("Prize"), p),
      s(S, () => xe.printCurrency(new Ae(t().rewardAmount))),
      s(
        i,
        l(j, {
          class: "w-full h-10 font-extrabold text-base",
          type: "brand",
          onClick: () => n("/lottery"),
          get children() {
            return $("Buy Ticket");
          },
        }),
        null
      ),
      i
    );
  })();
}
const _l = "/modules/chat2/assets/spin-93e7ba58.png";
var Cl = _(
  '<div><div class="flex items-center bonus-bg1 rounded-lg mb-2.5 p-1"><img class=w-24 alt=""><div><div class="font-semibold mb-2"></div><div class="center bg-layer1/20 rounded-lg p-1"><img class="w-4 h-4"><span class="font-semibold text-brand text-base">+'
);
function wl(e) {
  const t = e.data.chat.message,
    r = J(),
    n = () => {
      r("/spin");
    };
  return (() => {
    var i = Cl(),
      c = i.firstChild,
      o = c.firstChild,
      u = o.nextSibling,
      d = u.firstChild,
      a = d.nextSibling,
      g = a.firstChild,
      x = g.nextSibling;
    return (
      x.firstChild,
      z(o, "src", _l),
      s(d, () => $("CHECK MY SPIN BONUS!")),
      s(x, () => Number(t.amount), null),
      s(
        i,
        l(j, {
          class: "w-full h-10 font-extrabold text-base",
          onClick: n,
          type: "brand",
          get children() {
            return [K(() => $("Spin Now")), "!"];
          },
        }),
        null
      ),
      F(() => z(g, "src", Z.coinIcon(t.currencyName))),
      i
    );
  })();
}
const yl = "/modules/chat2/assets/stars-57d9cb5b.png";
var Sl = _(
  '<div class="w-full p-2"><div class="flex bg-layer3 rounded-lg mb-2.5 p-2"><div class=mr-3><img alt="w-full h-auto"></div><div class=""><p class=font-semibold></p><p class=text-secondary>'
);
function kl() {
  const e = J();
  return (() => {
    var t = Sl(),
      r = t.firstChild,
      n = r.firstChild,
      i = n.firstChild,
      c = n.nextSibling,
      o = c.firstChild,
      u = o.nextSibling;
    return (
      z(i, "src", yl),
      s(o, () => $("Weekly Raffle Is Live!")),
      s(u, () => $("Check Your Ticket Now For The Extra Bonus!")),
      s(
        t,
        l(j, {
          class: "w-full h-10 font-extrabold text-base",
          type: "brand",
          onClick: () => e("/promotions/weekly-raffle"),
          get children() {
            return $("View ticket");
          },
        }),
        null
      ),
      t
    );
  })();
}
var Il = _("<p>"),
  Bl = _("<div><div class=cont><div class=img-wraps><img alt=img>"),
  El = _("<div class=btn-link>");
function Rl(e) {
  return !e.startsWith("/");
}
function Dl(e) {
  const t = e.data.chat.message,
    r = J(),
    n = t.link || "",
    i = Rl(n),
    c = jt(t.content);
  return (() => {
    var o = Bl(),
      u = o.firstChild,
      d = u.firstChild,
      a = d.firstChild;
    return (
      s(
        u,
        l(H, {
          get when() {
            return t.content;
          },
          get children() {
            var g = Il();
            return F(() => (g.innerHTML = c.replace(/\n/g, "<br />"))), g;
          },
        }),
        null
      ),
      s(
        o,
        n &&
          (() => {
            var g = El();
            return (
              s(
                g,
                l(j, {
                  type: "brand",
                  onClick: () => {
                    i ? window.open(n) : r(n);
                  },
                  get children() {
                    return t.linkText || "";
                  },
                })
              ),
              g
            );
          })(),
        null
      ),
      F(() => z(a, "src", t.imgUrl)),
      o
    );
  })();
}
var Ul = _('<span class="text-brand mx-1">Live Support'),
  Ll = _(
    '<div class="text-primary font-semibold"><div class="flex items-center gap-2 border-b border-third pb-2 mb-2"><span class="font-extrabold text-base">'
  );
function Ml() {
  return (() => {
    var e = Ll(),
      t = e.firstChild,
      r = t.firstChild;
    return (
      s(t, l(q, { name: "Info", class: "fill-warning" }), r),
      s(r, () => $("Warning")),
      s(
        e,
        l(Xe, {
          i18nKey: "chat.trans.warning",
          get children() {
            return [
              "please do not believe those who contact you from other webs/apps. If you encounter problems, please contact",
              (() => {
                var n = Ul();
                return (
                  (n.$$click = () => {
                    Te.emit("live_support", !0);
                  }),
                  n
                );
              })(),
              "on BC website and be careful of scams.",
            ];
          },
        }),
        null
      ),
      e
    );
  })();
}
re(["click"]);
const Je = {
  T0: ys,
  T2: Zs,
  T8: ja,
  T9: Gi,
  T10: Zi,
  T12: Xi,
  T13: gl,
  T14: xl,
  T15: $l,
  T18: wl,
  T19: kl,
  T20: Dl,
  T22: Ml,
};
var Nl = _("<div>");
function Tl(e) {
  const [t, r] = Ht(e, ["name", "class"]);
  return (() => {
    var n = Nl();
    return (
      Nt(
        n,
        Mt(
          {
            get class() {
              return Q("chat-icon", t.name, t.class);
            },
          },
          r
        ),
        !1,
        !1
      ),
      n
    );
  })();
}
var Ol = _("<div>"),
  Hl = _(
    '<div class="center h-8 leading-8"><span class=" mx-1 font-bold text-primary font-semibold"></span><span class=text-tertiary>'
  ),
  Pl = _("<span class=cl-primary>__amountInfo__"),
  zl = _("<div><div class=font-bold>");
const Wl = /^\/[^\s]+$|^\/$/,
  Fl = /^\/([^\s]+)[\s]?(.*)/;
function Yl(e) {
  const { state: t } = me(),
    r = Gl(),
    n = le(() => {
      let u = e.value.toLowerCase();
      return u.startsWith("/")
        ? ((u = u.slice(1)),
          t.current.permissions.canPinAndUnpin || r.splice(5, 1),
          r.filter((d) => d.label.indexOf(u) !== -1))
        : [];
    }),
    i = () => Wl.test(e.value),
    c = Yr();
  ue(() => {
    const u = c();
    tt(() => {
      if (!i() && u && u.key === "Enter") {
        const d = e.value.match(Fl);
        if (d) {
          const a = r.find((g) => g.label === d[1].toLowerCase());
          if (a) {
            if (a.label === "pinmsg") return;
            a.handler(d[2]), e.onChange(""), u.preventDefault();
          } else e.onChange(""), u.preventDefault();
        }
      }
    });
  });
  const o = (u) => {
    let d;
    u.complete ? (d = `/${u.complete}`) : (d = `/${u.label} `), e.onChange(d);
  };
  return l(Pe, {
    get when() {
      return n().length > 0;
    },
    get children() {
      return l(nt.SelectOptions, {
        class: "absolute left-0 bottom-full w-full !h-auto py-2 px-3 bg-layer2",
        get options() {
          return n();
        },
        get value() {
          return n()[0];
        },
        onChange: o,
        optionRender: (u) =>
          (() => {
            var d = Ol();
            return (
              s(d, () => u().labelNode),
              F(() =>
                ee(
                  d,
                  Q(
                    "h-9 cursor-pointer rounded mt-1 flex items-center hover:bg-layer4"
                  )
                )
              ),
              d
            );
          })(),
      });
    },
  });
}
function we(e) {
  return (() => {
    var t = Hl(),
      r = t.firstChild,
      n = r.nextSibling;
    return (
      s(
        t,
        l(Tl, {
          get name() {
            return e.icon;
          },
        }),
        r
      ),
      s(r, () => e.command),
      s(n, () => e.desc),
      t
    );
  })();
}
function It(e) {
  const t = e.match(/\@(.+?)(\s|$)/);
  if (t) return Z.User.findByName(t[1]);
}
function jl(e) {
  const t = `${e.stringAmount} ${e.locked ? $("Locked") + " " : ""}${
    jr.currency[e.currencyName].aliasCurrencyName
  }`;
  return (() => {
    var r = zl(),
      n = r.firstChild;
    return (
      s(n, () => $("The bonus code worked!")),
      s(
        r,
        l(Xe, {
          i18nKey: "chat.bonuslink.code.desc",
          amountInfo: t,
          get children() {
            return ["You have got ", Pl(), " from __ENV_COCO_'s cave."];
          },
        }),
        null
      ),
      r
    );
  })();
}
function Gl() {
  const e = J();
  return [
    {
      label: "coindrop",
      labelNode: l(we, {
        icon: "coindrop",
        command: "/Coindrop",
        get desc() {
          return $("Tip group");
        },
      }),
      handler: () => {
        e("/send-coindrop");
      },
    },
    {
      label: "user",
      labelNode: l(we, {
        icon: "user",
        command: "/User",
        get desc() {
          return $("@User view user");
        },
      }),
      handler: (t) => {
        const r = It(t);
        r && e(`/user/profile/${r.userId}`);
      },
      complete: "user @",
    },
    {
      label: "tip",
      labelNode: l(we, {
        icon: "tip",
        command: "/Tip",
        get desc() {
          return $("@User tip user");
        },
      }),
      handler: (t) => {
        const r = It(t);
        r && e(`/send-tip/${r.userId}/${r.name}`);
      },
      complete: "tip @",
    },
    {
      label: "rain",
      labelNode: l(we, {
        icon: "rain",
        command: "/Rain",
        get desc() {
          return $("Make it rain");
        },
      }),
      handler: (t) => {
        e("/send-rain");
      },
    },
    {
      label: "shitcode",
      labelNode: l(we, {
        icon: "shitcode",
        command: "/ShitCode",
        get desc() {
          return $("Redeem your bonus code");
        },
      }),
      handler: (t) =>
        ae(this, null, function* () {
          if ((yield Ft(), !t)) return e("/sweetcodes"), !1;
          oe()
            .post("/activity/redeemCode/useCode/", { redeemCode: t })
            .then((r) => {
              ge(() => l(jl, r), { duration: 0 });
            })
            .catch(ge);
        }),
    },
    {
      label: "pinmsg",
      labelNode: l(we, {
        icon: "pin",
        command: "/PinMsg",
        get desc() {
          return $("Pin your message");
        },
      }),
      handler: (t) => {},
    },
  ];
}
var Kl = _(
    '<div class="flex flex-col items-center gap-4"><p class="text-secondary text-center">'
  ),
  Bt = _("<span>"),
  Vl = _(
    '<div class="flex flex-col items-center gap-4"><p class=text-secondary></p><div class="center gap-4 w-full">'
  );
const Ql = () => {
    const e = J();
    return l(he, {
      get title() {
        return $("Unlock Chat Features");
      },
      get children() {
        var t = Kl(),
          r = t.firstChild;
        return (
          s(t, l(q, { class: "!w-12 !h-12 text-secondary", name: "Send" }), r),
          s(r, () =>
            $(
              "Deposit and bet more to access a wider range of chat functions and contribute to our community's vibrancy."
            )
          ),
          s(
            t,
            l(j, {
              class: "w-48 mb-3",
              type: "brand",
              onClick: () => {
                V.pop(), e("/wallet/deposit");
              },
              get children() {
                return $("Deposit");
              },
            }),
            null
          ),
          t
        );
      },
    });
  },
  Zl = () => {
    const e = J();
    return l(he, {
      get title() {
        return $("Unlock Chat Features");
      },
      get children() {
        var t = Vl(),
          r = t.firstChild,
          n = r.nextSibling;
        return (
          s(t, l(q, { class: "!w-12 !h-12 text-secondary", name: "Send" }), r),
          s(r, () => $("You haven't placed any bets yet, start betting now.")),
          s(
            n,
            l(j, {
              class: "w-full",
              type: "brand",
              onClick: () => {
                V.pop(), e("/casino");
              },
              get children() {
                return [
                  l(q, { name: "Casino" }),
                  (() => {
                    var i = Bt();
                    return s(i, () => $("Casino")), i;
                  })(),
                ];
              },
            }),
            null
          ),
          s(
            n,
            l(j, {
              class: "w-full",
              type: "brand",
              onClick: () => {
                V.pop(), e("/sports");
              },
              get children() {
                return [
                  l(q, { name: "Sports" }),
                  (() => {
                    var i = Bt();
                    return s(i, () => $("Sports")), i;
                  })(),
                ];
              },
            }),
            null
          ),
          t
        );
      },
    });
  };
var ql = _('<div class="w-full p-2 cursor-pointer">');
const Et = /\@([^\s]*)$/,
  Jl = (e) => {
    const t = le(() => e.value.match(Et)),
      r = le(() => {
        var i;
        return t() ? ((i = t()) == null ? void 0 : i[1]) : "";
      }),
      n = () => {
        const i = Z.User.search(r())
          .slice(0, 50)
          .map((c) => c.name);
        return r() ? i.concat([r()]) : i;
      };
    return l(Pe, {
      get when() {
        return t();
      },
      get children() {
        return l(nt.SelectOptions, {
          class:
            "absolute left-0 bottom-full w-full !h-auto py-2 px-3 bg-layer2 p-4 text-secondary font-semibold",
          get value() {
            return e.value;
          },
          get options() {
            return n();
          },
          onChange: (i) => e.onChange(e.value.replace(Et, `@${i} `)),
          optionRender: (i) =>
            (() => {
              var c = ql();
              return s(c, i), c;
            })(),
        });
      },
    });
  },
  Xl = Jl;
var eo = _("<span>"),
  to = _(
    '<div class="w-full bg-layer1 font-semibold text-secondary p-3 fixed top-14 z-10"><div class="border-l-2 border-brand pl-2"><div class="flex items-center justify-between"><div><span></span><span class="font-extrabold text-base text-primary ml-1"></span></div></div><div><div><p class=h-fit>'
  ),
  ro = _("<div>"),
  ze = _(
    '<div class="flex flex-col items-center gap-3 text-secondary"><p></p><div class="w-full flex flex-col items-center">'
  );
const no = function () {
    const { state: t, getPinnedMsg: r } = me(),
      [n, i] = Ue({ showMoreTag: !1, showMore: !1 });
    let c;
    const o = () => {
        oe()
          .post(`/chat/room/${t.current.roomId}/unpin/`, {
            msgId: t.current.pinMsg.msgId,
            msgContent: t.current.pinMsg.msgContent,
          })
          .then((d) => {
            r(), V.pop();
          })
          .catch(ge);
      },
      u = le(() => uo(t.current.pinMsg.msgContent));
    return (
      ue(() => {
        c &&
          t.current.pinMsg.msgContent &&
          (c.offsetHeight > 22 ? i("showMoreTag", !0) : i("showMoreTag", !1));
      }),
      (() => {
        var d = to(),
          a = d.firstChild,
          g = a.firstChild,
          x = g.firstChild,
          A = x.firstChild,
          w = A.nextSibling,
          v = g.nextSibling,
          p = v.firstChild,
          S = p.firstChild;
        s(A, () => $("Pinned by")),
          s(w, () => t.current.pinMsg.userName),
          s(
            g,
            l(H, {
              get when() {
                return t.current.permissions.canPinAndUnpin;
              },
              get fallback() {
                return (() => {
                  var m = ro();
                  return (
                    (m.$$click = () => {
                      V.push(() => l(lo, {}));
                    }),
                    s(m, l(de, { class: "w-5 h-5", name: "Close" })),
                    m
                  );
                })();
              },
              get children() {
                return l(j, {
                  class: "unpin-btn",
                  onClick: () => {
                    V.push(() => l(so, { unpinFn: o }));
                  },
                  get children() {
                    return $("Unpin");
                  },
                });
              },
            }),
            null
          );
        var M = c;
        return (
          typeof M == "function" ? ke(M, S) : (c = S),
          s(
            S,
            l(zt, {
              get msg() {
                return u();
              },
            })
          ),
          s(
            v,
            l(H, {
              get when() {
                return n.showMoreTag;
              },
              get children() {
                return l(j, {
                  class: "text-brand h-auto p-0 flex-none",
                  onClick: () => i("showMore", (m) => !m),
                  get children() {
                    return [
                      (() => {
                        var m = eo();
                        return (
                          s(
                            m,
                            (() => {
                              var f = K(() => !!n.showMore);
                              return () =>
                                f() ? $("Show Less") : $("Show More");
                            })()
                          ),
                          m
                        );
                      })(),
                      l(de, {
                        name: "Arrow",
                        get class() {
                          return Q(
                            "w-4 ml-1 transition-all fill-brand",
                            n.showMore ? "rotate-90" : "-rotate-90"
                          );
                        },
                      }),
                    ];
                  },
                });
              },
            }),
            null
          ),
          F(
            (m) => {
              var f = Q(
                  "mt-2 flex items-center justify-between",
                  n.showMore ? "flex-col" : ""
                ),
                h = Q(
                  "w-full max-h-[22px] overflow-hidden transition-all",
                  n.showMore ? "!max-h-[500px]" : ""
                );
              return (
                f !== m.e && ee(v, (m.e = f)), h !== m.t && ee(p, (m.t = h)), m
              );
            },
            { e: void 0, t: void 0 }
          ),
          d
        );
      })()
    );
  },
  so = function ({ unpinFn: e }) {
    return l(he, {
      get title() {
        return $("Unpin Your Message");
      },
      get children() {
        var t = ze(),
          r = t.firstChild,
          n = r.nextSibling;
        return (
          s(r, () =>
            $(
              "Are you sure to unpin your message, it will be removed for all users in this channel?"
            )
          ),
          s(
            n,
            l(j, {
              type: "brand",
              class: "w-full",
              onClick: e,
              get children() {
                return $("Unpin");
              },
            }),
            null
          ),
          s(
            n,
            l(j, {
              onClick: () => V.pop(),
              get children() {
                return $("Cancel");
              },
            }),
            null
          ),
          t
        );
      },
    });
  },
  ao = function ({ sendFn: e }) {
    return l(he, {
      get title() {
        return $("Are you Sure to Pin your Message?");
      },
      class: "h-fit",
      get children() {
        var t = ze(),
          r = t.firstChild,
          n = r.nextSibling;
        return (
          s(r, () =>
            $(
              "Ensure you review your message thoroughly before sending, as it will be visible to all users in this channel."
            )
          ),
          s(
            n,
            l(j, {
              type: "brand",
              class: "w-full",
              onClick: e,
              get children() {
                return $("Send");
              },
            }),
            null
          ),
          s(
            n,
            l(j, {
              onClick: () => V.pop(),
              get children() {
                return $("Cancel");
              },
            }),
            null
          ),
          t
        );
      },
    });
  },
  io = function () {
    return l(he, {
      get title() {
        return $("Unable to proceed");
      },
      class: "h-fit",
      get children() {
        var e = ze(),
          t = e.firstChild,
          r = t.nextSibling;
        return (
          s(t, () => $("You can only send maximum 1 pin message.")),
          s(
            r,
            l(j, {
              type: "brand",
              class: "understand-btn",
              onClick: () => V.pop(),
              get children() {
                return $("Ok, I understand");
              },
            })
          ),
          e
        );
      },
    });
  },
  lo = function () {
    const { delPinedMsg: t } = me();
    return l(he, {
      get title() {
        return $("Don’t show again");
      },
      class: "h-fit",
      get children() {
        var r = ze(),
          n = r.firstChild,
          i = n.nextSibling;
        return (
          s(n, () => $("Message will not be displayed at the top.")),
          s(
            i,
            l(j, {
              type: "brand",
              class: "w-full",
              onClick: () => {
                V.pop(), t();
              },
              get children() {
                return $("OK");
              },
            }),
            null
          ),
          s(
            i,
            l(j, {
              class: "cancel-btn",
              onClick: () => V.pop(),
              get children() {
                return $("Cancel");
              },
            }),
            null
          ),
          r
        );
      },
    });
  },
  oo = /(\[\w+=.+?\])/,
  co = /(\[(\w+=.+?)\])/;
function uo(e) {
  let t = [];
  return (
    jt(e)
      .split(oo)
      .forEach((n) => {
        if (n === "") return;
        let i = n.match(co);
        if (i) {
          let [c, o] = i[2].split("="),
            u = o.split(","),
            d = { type: c, args: u };
          t.push(d);
        } else t.push(n);
      }),
    t
  );
}
const fo = no;
re(["click"]);
const go = "/modules/chat2/assets/copyrigt-24adedf8.png",
  ho = "/modules/chat2/assets/copyrigtw-fbd81b2a.png",
  mo = "/modules/chat2/assets/bubble-9b2b2288.png",
  vo = "/modules/chat2/assets/coindrop-ad3b7ef4.png",
  bo = "/modules/chat2/assets/rain-213941fe.png",
  po = "/modules/chat2/assets/shitcode-43fea72a.png",
  xo = "/modules/chat2/assets/tip-ec183a75.png",
  Ao = "/modules/chat2/assets/pin-6f8374df.png",
  $o = "/modules/chat2/assets/user-2760b5b6.png",
  _o = "/modules/chat2/assets/spin-8e9ae5f5.png",
  Co =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA6CAMAAADIrIqpAAAAQlBMVEUAAAC0vsKvv7+zvsG0v7+zvsKzv8GzvsK0vsGzvsGzvsC1v7+0vsO0v7+yv8C0vsKzvcG1v8Wzvb+yv8K0v8KzvsH0biF1AAAAFXRSTlMAnxDPIL9AYN/vgDBwcFCvkDCQj48fpgHqAAABrUlEQVRIx53VWXLDIAwAUIPF7i1tuf9VOwEmAgTVUH2KPBwLJG//C/l6jZJaw9yAjfG7E17Fd1gxc2ld1JnDxU9MmI2tkirWYcMIPbFVd2zDjZTcGxViH1ayCvL2PkAw5Y9+b4zKhbnL5j4vSF4ZcX5WzpT3G6vogahtTR0pva2pK2VhTWlErKKIVxTxikGsoogqi4pHeJaoFhCqBYRqDdFOkTxCVTJfG4/uuvLSiGFngNqFrJCY3d7D7uYzj7BlRG6fsTLvlK4LJKv2CWOlyPzR1QZqQ9VPyKfcnbR61OUTslNY/WswB3SZdeZFlGnO2ecXwVJg1CptYttL6bE9iMJfPW1ZXHkwTJTqbqGJzXTzVOFvMGwpYAkQOeHEtRcFOaMrdJGPCujrCuQVxeB2O9o3qOg6uJy9/lRnt6RL3s+mzbCtzrJiTd849/CNsNCFAT5Fk16mzyqxi8MYc/woh7mJAhtn4exUST8xCminYIAYEd3Necoe2wgn3oQoEuG8VQa315L9wmKkZcN9iXiEyvOIKssjqhSLqHKaQTTMCUwhVmId4WSERRQsHgeNXy8tTRWeBBkbAAAAAElFTkSuQmCC",
  wo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA3hJREFUSA29VltLVUEUXjN7eyvCEhN7CR+ioh4Seg3K7CExswgOpRmEt78Q9B96jaMGYSpxIkrNLCjooZ4qsILo9tRDhYiXIPDk2bNa35wzx63ufTqSuWEzs9f61vfN7LmspaiIJzk4vlspU08e7SFDO4hUZTaMF0jTHAX0hVlP9V5q+fo3OlUI0D9877Ah3aqYFLGZUiUl78kEs356dgFxmbKqStJeFS8tHSCl61lQmsxod/vZ13G8kYLJkfFqIe6SIE8I7/a2tXyIIwjbJW6/xJ0TWyBxAxI3E/ajv0aw7/bEXs5kesQz0dN2+plSMr91PMys+kbGjhFTs/L9vp7zzZ/C4SsEIaZETHNpf2dH08cwcL39G7cm9xn1u5tXiWpHhN+ImW2EGDgxYHCB0y5RTigvaNdMfmMxMxscfLwVrxtsXGu5hDO3HyzMCmI3ypeHNYsLDtvTXvoE3rAtrp/j9HIacorkwdbHbixmgyTHx7cYpuNM3IB+nJCzW07hthpi1DjUcBa79XkuaCTmcjZUYfuOuUALbpxlaGncIMqYNwXweRdmJAGNzoB+MbO0eFwcouXjulK6ZNKRuDaVSnnzmfIjMptdinSNtDVmPqiWgeaPkhzQCpoPrvUPjc2IeZrJTEv7fbu/+DyRSASOCy1uKTZBk9xEcjfKdRV2oo8AT/EvOcBHjTEHDfNOCcuLLeNl3OIDBljErBazWGiIlmwaVenuxmWSbK/zQusrUn5SvlaMdjUu9x0Aa2MiAFkNVZk7h3URkKypp715qlT512W3ZeJA8AEDbByGqE5csleJeCFT9jOXbqLhly82vxNcATKeymKi42HNaqgFbfOZpJh4aNYj27o2DlPIl4+BhuRObZMn8lmBRzKAZqXygvIL03hdCHzAuO+o1uZMSdQamZq1PhQFcrabdx7WCKGPtVKknnrb+Cpe9GGDDxiHj2yRoEXLR1mQHB4lJM+422ZpiWo18QtVWvagK3EyfIRSA6lHTzi9eAoYEfoRJQZuZsPQsr8BZQEytYw04pwRffv88m13x5nBVWKWGzb4gIkSs5zCbTXCgOTQ/Ssy04awbSP64AS341peaKlBUBYgUzvnv7aWSzhR3ziuvCAKHtQgKAs2QtSVGOAEtxNcs2abWkS5UdgaZLPKRCeK1hXC6CNn/rdCGALhZyNL/T/qV+Xauim0PgAAAABJRU5ErkJggg==",
  yo = "/modules/chat2/assets/rich-8786d13b.png",
  So =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMpSURBVHgBvZa/bhNBEMZn7+LYTpzEiIaOS0mVo0M0cUuXvAG0IKQUtMEnEkiDCAUCIYGSN0jS0WVdUxA6OvwGOZE4ju3dHWbn9v45EbJTsNZoT9Zpf/d98+3eAfynISa9ER9s/oZFun3Ouy8OoximHN4kN+HDKIQ6BFATAczBLtxgTASCuiIAqalzPcZnrzb+dTt+2gn05+1dO08HmpsJGFKj6yrYuY1RvkgJshc1ja+PjcaNwXD4fjrQLNsGXBZUFU3w1QFGUfMKSFf2CBIYhWBGuDodqAYrmZqqsGCAGQhhYaZdgnx93UZt1lATxIKG2DzdiYJpQE0G2KqAK2FhG/hxay2B7LRJSWQUgFPDpc90C/i5JhkVESZKnJoEQkWzDwf4ZfvEGB2aVMmI1YC+RIBLHTII75A0MTimHXVCe6QDt1CK729OMjueUrRTQAqpuEf0kD1BhDCzi0EAemDA2LowK4kiMSDpIqAFbITXoOoBPnrZhSVPQsP7SYvfZUDRNt8WqwG0P0Olc8sSiFVkYNRHViQwoOSMhqe865fo8ey8QNWwp4CrLNpZEJxttDCJSvphQLnFdR9BnWsq+u/MzqNlT3TpOGkIWVq0XopyuS+pGrIN0anQeV9SJVwXBOlp0D1oJamb945gvqAgBYxDUpCF0F+JZc6uNAAW1DdJXVD1DAx7JkxAi/5+poZ3vpttCIrN576IJADGqoEsxgmEenOZQ5QtstCcqlUGCUn21cm+WgopRhkKapDVcF+0s8yGwCnJIKka6o+mPpG9Qb5h50Wn1JfKWF88wWX7gqX9YpIaGN43mZrzpCycRpyDGrBfgswWlDg1KPIooypbVlLCidP2OqZeHmpfrZdefPhi6xhq2Mrsq0CpPwYLR4tdnOziPvRclP8omlGqWHdUrOS9Xx9kunb5CJo1Hah4LbbMLwSAo+x64na/TZmNsBnorh6aI+wbqVRDLn+7/u07BsJ9CkH72igTxNpFtsUEkrRBO6j9w9vvtrowwbjyzYBvt3+QXWF+1PBZJrXCjlIg6883JdxgXD29fX8dfB2Rkpggkq6l92T6j5Hx8RcE5T6eHizslgAAAABJRU5ErkJggg==",
  ko = "/modules/chat2/assets/rich-close-4d046450.png",
  Io = "/modules/chat2/assets/top1-577ee061.png",
  Bo = "/modules/chat2/assets/top2-c64bf40a.png",
  Eo = "/modules/chat2/assets/top3-01ab7585.png",
  $e = {
    top1: Io,
    top2: Bo,
    top3: Eo,
    copyrigt: go,
    crown: So,
    copyrigtw: ho,
    bubble: mo,
    coindrop: vo,
    rain: bo,
    shitcode: po,
    tip: xo,
    pin: Ao,
    user: $o,
    spin: _o,
    mute: Co,
    star: wo,
    rich: yo,
    rich_close: ko,
  };
var Ro = _("<span class=text-primary>"),
  Do = _("<span> ");
const Rt = (e) => {
  const [t, r] = Ht(e, ["expiresInMS"]),
    n = le(() => _s(t.expiresInMS)),
    i = Gr(n);
  function c(u) {
    var g, x, A, w, v, p, S, M;
    const d = [
        {
          name: "d",
          value: (x = (g = u()) == null ? void 0 : g.days) != null ? x : 0,
        },
        {
          name: "h",
          value: (w = (A = u()) == null ? void 0 : A.hours) != null ? w : 0,
        },
        {
          name: "m",
          value: (p = (v = u()) == null ? void 0 : v.minutes) != null ? p : 0,
        },
        {
          name: "s",
          value: (M = (S = u()) == null ? void 0 : S.seconds) != null ? M : 0,
        },
      ],
      a = Math.min(
        1,
        Math.max(
          0,
          d.findIndex((m) => m.value > 0)
        )
      );
    return d.slice(a, a + 3);
  }
  const o = "​";
  return (() => {
    var u = Ro();
    return (
      Nt(u, e, !1, !0),
      s(
        u,
        l(De, {
          get each() {
            return c(i);
          },
          children: (d) =>
            (() => {
              var a = Do(),
                g = a.firstChild;
              return s(a, () => `${String(d.value)}${o}${d.name}`, g), a;
            })(),
        })
      ),
      u
    );
  })();
};
var Uo = _('<div><span class="text-secondary mr-1">'),
  Lo = _("<div><p class=font-semibold>"),
  Mo = _('<div><img class="w-5 h-5">');
const No = function (t) {
    const { state: r } = me(),
      [n, i] = Ue({ purviewStatus: 2, blockType: "", blockTime: Date.now() }),
      c = () => n.blockType === "permanent";
    return (
      ue(() => {
        te.login &&
          oe()
            .post(`/chat/room/${r.currentRoomId}/purview/`)
            .then((o) => {
              i(o);
            })
            .catch(console.log);
      }, [r.currentRoomId, te.login, t.ban]),
      l(H, {
        get when() {
          return (
            K(() => n.purviewStatus === 0)() &&
            n.blockTime > new Date().getTime()
          );
        },
        get children() {
          var o = Mo(),
            u = o.firstChild;
          return (
            s(
              o,
              l(H, {
                get when() {
                  return K(() => !t.showSend)() && !c();
                },
                get children() {
                  return l(Rt, {
                    class: "text-base",
                    get expiresInMS() {
                      return n.blockTime;
                    },
                  });
                },
              }),
              null
            ),
            s(
              o,
              l(H, {
                get when() {
                  return t.showSend;
                },
                get children() {
                  var d = Lo(),
                    a = d.firstChild;
                  return (
                    s(a, () => $("You have been muted")),
                    s(
                      d,
                      l(H, {
                        get when() {
                          return !c();
                        },
                        get children() {
                          var g = Uo(),
                            x = g.firstChild;
                          return (
                            s(x, () =>
                              $(
                                "Due to suspicious behavior, you will be unmuted in:"
                              )
                            ),
                            s(
                              g,
                              l(Rt, {
                                get expiresInMS() {
                                  return n.blockTime;
                                },
                              }),
                              null
                            ),
                            g
                          );
                        },
                      }),
                      null
                    ),
                    d
                  );
                },
              }),
              null
            ),
            F(
              (d) => {
                var a = Q(
                    "absolute rounded-xl bg-layer5 flex gap-2 p-2 z-90 drop-shadow-md bottom-16",
                    t.showSend
                      ? "left-0 w-72"
                      : "right-0 w-36 justify-center items-center",
                    c() && "permanent"
                  ),
                  g = $e.mute;
                return (
                  a !== d.e && ee(o, (d.e = a)),
                  g !== d.t && z(u, "src", (d.t = g)),
                  d
                );
              },
              { e: void 0, t: void 0 }
            ),
            o
          );
        },
      })
    );
  },
  To = No;
var Oo = _("<div class=forbid_tip>"),
  Ho = _('<div class="center gap-1.5 mt-3">'),
  Po = _('<div class="absolute w-full bg-layer3 h-4">'),
  zo = _(
    '<div class="sticky sm:static bottom-18 sm:bottom-0"style="box-shadow:rgba(0, 0, 0, 0.14) 0px -8px 20px 0px;"><div class="p-3 bg-layer3 relative font-semibold h-fit"><div class="flex items-end relative gap-2.5"><div><textarea class="bg-transparent block w-full py-2 resize-none outline-none placeholder-quarterary text-primary"enterkeyhint=send rows=1></textarea><div class="flex items-start h-full">'
  );
const Wo = /https?:\/\/[\S]+/,
  Fo = 1e3;
function Yo() {
  const e = oe(),
    t = J(),
    { state: r, getPinnedMsg: n, setAppendMessage: i } = me(),
    [c, o] = G(""),
    [u, d] = G(!1),
    [a, g] = G(""),
    [x, A] = G(!1),
    [w, v] = G(!X.mobile),
    [p, S] = G(!1),
    [M, m] = G(""),
    f = () =>
      ae(this, null, function* () {
        if (p()) return;
        if (!te.login) {
          A(!1), t("/login/signin");
          return;
        }
        const b = a();
        if (b.trim().length === 0) {
          o($("Please enter a chat message.")), setTimeout(() => o(""), 3e3);
          return;
        }
        if (b.length > Fo) {
          o($("Maximum 1000 Characters.")), setTimeout(() => o(""), 3e3);
          return;
        }
        const E = b.startsWith("/pinmsg");
        try {
          E
            ? (g(""),
              n(),
              (r.current.pinMsg.msgId ? r.current.pinMsg.msgId > 0 : !1)
                ? V.push(() => l(io, {}))
                : V.push(() =>
                    l(ao, {
                      sendFn: () => {
                        h(b), V.pop();
                      },
                    })
                  ))
            : (yield h(b)) &&
              (g(""),
              Te.emit("chatroom_message", { chatroom_type: r.current.label }));
        } catch (I) {
          S(!1);
          const T = I.code === 6001,
            P = I.code === 7001,
            Y = I.code === 7002;
          P
            ? V.push(() => l(Ql, {}))
            : Y
            ? V.push(() => l(Zl, {}))
            : (o(I.message), T ? d(!0) : P && setTimeout(() => o(""), 5e3));
        }
      }),
    h = Kr(function (y) {
      return ae(this, null, function* () {
        const E = y.startsWith("/pinmsg");
        return (
          (y = jo(y)),
          (y = y.replace(Wo, (I) => `[link=${encodeURIComponent(I)}]`)),
          (y = y.replace("/pinmsg ", "")),
          y.startsWith("/")
            ? !1
            : (S(!0),
              yield e.post(`/chat/room/${r.current.roomId}/send/`, {
                name: te.name,
                chat: y,
                needPin: E,
              }),
              S(!1),
              !0)
        );
      });
    }),
    C = (b) => {
      if (!te.login) {
        t("/login/signin");
        return;
      }
      h(`[gif=${b}]`);
    },
    k = (b) => {
      const y = b + " ";
      B &&
        (B.setRangeText(y),
        g(B.value),
        B.focus(),
        (B.selectionStart = B.selectionEnd =
          (B.selectionStart || 0) + y.length));
    };
  let B,
    N = 0;
  ue((b) => {
    const y = a();
    if (y !== b) {
      let E = B.style.height;
      y.length < b.length && (B.style.height = ""),
        N !== B.scrollHeight
          ? ((N = B.scrollHeight),
            (B.style.height = Math.min(B.scrollHeight, 200) + "px"))
          : (B.style.height = E);
    }
    return y;
  }, a());
  function W(b) {
    g((y) => (y.includes(b) ? y : y + b)), B.focus();
  }
  return (
    ue(() => {
      x() && X.mobile && v(!1);
    }),
    _e(() => {
      i({ msg: W });
    }),
    (() => {
      var b = zo(),
        y = b.firstChild,
        E = y.firstChild,
        I = E.firstChild,
        T = I.firstChild,
        P = T.nextSibling;
      ke(
        (O) =>
          Vr(
            () => O,
            () => {
              A(!1), m("");
            }
          ),
        b
      ),
        (T.$$keydown = (O) => {
          !O.shiftKey && O.key === "Enter" && (O.preventDefault(), f());
        }),
        (T.$$input = (O) => g(O.target.value)),
        T.addEventListener("focus", () => A(!0));
      var Y = B;
      return (
        typeof Y == "function" ? ke(Y, T) : (B = T),
        s(
          I,
          l(H, {
            get when() {
              return c();
            },
            get children() {
              var O = Oo();
              return s(O, c), O;
            },
          }),
          P
        ),
        s(
          I,
          l(To, {
            get ban() {
              return u();
            },
            get showSend() {
              return x();
            },
          }),
          P
        ),
        s(
          P,
          l(j, {
            class: "w-8 h-10 text-secondary !center",
            onClick: () => m((O) => (O === "gif" ? "" : "gif")),
            get children() {
              return l(q, { name: "GIF" });
            },
          }),
          null
        ),
        s(
          P,
          l(j, {
            class: "w-8 h-10 text-secondary !center",
            onClick: () => m((O) => (O === "emoji" ? "" : "emoji")),
            get children() {
              return l(q, { name: "Emoji" });
            },
          }),
          null
        ),
        s(
          E,
          l(Pe, {
            get when() {
              return x();
            },
            get fallback() {
              return l(H, {
                get when() {
                  return X.mobile;
                },
                get children() {
                  return l(j, {
                    class: "h-[2.625rem] w-[2.625rem] transition-all bg-layer5",
                    onClick: () => v(!w()),
                    type: "second",
                    get children() {
                      return l(q, { name: "Add", class: "fill-secondary" });
                    },
                  });
                },
              });
            },
            get children() {
              return l(j, {
                class: "h-[2.625rem] w-[2.625rem] transition-all sliding",
                onClick: () => {
                  f();
                },
                type: "brand",
                get children() {
                  return l(q, { name: "Send", class: "!fill-primary_brand" });
                },
              });
            },
          }),
          null
        ),
        s(
          y,
          l(Xl, {
            get value() {
              return a();
            },
            onChange: (O) => {
              g(O), B.focus();
            },
          }),
          null
        ),
        s(
          y,
          l(Yl, {
            get value() {
              return a();
            },
            onChange: (O) => {
              g(O), B.focus();
            },
          }),
          null
        ),
        s(
          y,
          l(We, {
            get when() {
              return w();
            },
            class: "flex justify-between",
            get children() {
              var O = Ho();
              return (
                s(
                  O,
                  l(j, {
                    class: "center w-10 h-10 rounded-lg bg-layer5",
                    onClick: () => t("/send-rain"),
                    get children() {
                      return l(q, { name: "Rain", class: "text-secondary" });
                    },
                  }),
                  null
                ),
                s(
                  O,
                  l(j, {
                    class: "center w-10 h-10 rounded-lg bg-layer5",
                    onClick: () => t("/send-coindrop"),
                    get children() {
                      return l(q, {
                        name: "Coindrop",
                        class: "text-secondary",
                      });
                    },
                  }),
                  null
                ),
                s(
                  O,
                  l(j, {
                    class: "center w-10 h-10 rounded-lg bg-layer5",
                    onClick: () => {
                      g(a() === "/" ? "" : "/"), A(a() === "/");
                    },
                    get children() {
                      return l(q, {
                        name: "Command",
                        get class() {
                          return a() === "/" ? "fill-brand" : "text-secondary";
                        },
                      });
                    },
                  }),
                  null
                ),
                O
              );
            },
          }),
          null
        ),
        s(
          y,
          l(We, {
            get when() {
              return M() === "gif";
            },
            get children() {
              return l(Pr, { onChange: C });
            },
          }),
          null
        ),
        s(
          y,
          l(We, {
            get when() {
              return M() === "emoji";
            },
            get children() {
              return l(zr, { onChange: k });
            },
          }),
          null
        ),
        s(
          b,
          l(H, {
            get when() {
              return X.mobile;
            },
            get children() {
              return Po();
            },
          }),
          null
        ),
        F(
          (O) => {
            var ne = Q(
                "center flex-1 pl-3 pr-1 rounded-lg border bg-layer5 transition-all",
                x() ? "border-brand" : "border-transparent"
              ),
              se = $("Your message...");
            return (
              ne !== O.e && ee(I, (O.e = ne)),
              se !== O.t && z(T, "placeholder", (O.t = se)),
              O
            );
          },
          { e: void 0, t: void 0 }
        ),
        F(() => (T.value = a())),
        b
      );
    })()
  );
}
function jo(e) {
  return (
    (e = e + " "),
    /\@(.+?)\:/.test(e)
      ? e
      : e.replace(/\@(.+?)\s/g, (t, r) => {
          const n = Z.User.findByKey(r);
          return n && (r = n.name), `@${r}: `;
        })
  );
}
re(["input", "keydown"]);
var Go = _("<div>"),
  Ko = _("<div><div>");
const Vo = (e) => {
  const { state: t } = me(),
    r = t.current,
    n = J(),
    i = (o) => {
      o.stopPropagation(),
        r.onAppendMessage && r.onAppendMessage.msg(`@${e.name} `);
    },
    c = (o) => {
      o.stopPropagation(), n(`/send-tip/${e.userId}/${e.name}`);
    };
  return (() => {
    var o = Ko(),
      u = o.firstChild;
    return (
      s(
        o,
        l(Yt, {
          get title() {
            return $("Tip");
          },
          get children() {
            var d = Go();
            return (
              (d.$$click = c),
              s(
                d,
                l(q, {
                  class: "mr-4 cursor-pointer text-secondary",
                  name: "Tip",
                })
              ),
              d
            );
          },
        }),
        u
      ),
      (u.$$click = i),
      s(u, l(q, { class: "cursor-pointer  text-secondary", name: "At" })),
      F(() =>
        ee(
          o,
          Q(
            "flex h-full transition-all",
            e.isShow ? " opacity-100" : "opacity-0"
          )
        )
      ),
      o
    );
  })();
};
re(["click"]);
var Qo = _(
    '<div class="text-base flex w-full gap-4 justify-center leading-5 pt-10 pb-8">'
  ),
  Zo = _(
    '<div class="w-8 h-8 rounded-full mx-0.5 text-white bg-layer3 bg-opacity-50 text-center leading-8 cursor-pointer">D'
  ),
  qo = _(
    '<div class="w-8 h-8 rounded-full mx-0.5 text-white bg-layer3 bg-opacity-50 text-center leading-8 cursor-pointer">B'
  ),
  Jo = _(
    '<div class="w-16 flex justify-between h-fit absolute right-2 top-1">'
  );
function Xo() {
  const e = [
      { time: 864e5, txt: $("1 day") },
      { time: 6048e5, txt: $("1 week") },
      { time: 220063324e4, txt: $("forever") },
    ],
    t = te.chatRoomPermission.blockLevel,
    r = t <= 0 ? 1 : t;
  return e.slice(0, r);
}
const ec = (e) => {
    let [t, r] = G(0);
    const n = Xo();
    ue(() => {
      e.onChange(n[0].time);
    });
    const i = n.map((c, o) =>
      l(j, {
        type: "second",
        get class() {
          return Q(
            "flex-1 text-center",
            o === t() ? "border border-primary" : ""
          );
        },
        onClick: () => {
          e.onChange(c.time), r(o);
        },
        get children() {
          return c.txt;
        },
      })
    );
    return (() => {
      var c = Qo();
      return s(c, i), c;
    })();
  },
  tc = (e) => {
    const t = te.chatRoomPermission,
      r = t.deleteable,
      n = t.blockable;
    if (!r && !n) return null;
    const i = () =>
        ae(void 0, null, function* () {
          if (yield V.confirm(() => $("Are you sure to delete this post?")))
            try {
              yield Or(e.chat.id), ge($("Successfully deleted!"));
            } catch (u) {
              ge(u);
            }
        }),
      c = () =>
        ae(void 0, null, function* () {
          try {
            const [o, u] = G(0);
            if (!(yield V.confirm(() => l(ec, { onChange: u })))) return;
            yield Hr(e.chat.userId, Number(o()), e.chat.id),
              ge($("__name__ has been banned.", { name: e.chat.name }));
          } catch (o) {
            ge(o);
          }
        });
    return (() => {
      var o = Jo();
      return (
        s(
          o,
          l(H, {
            when: r,
            get children() {
              var u = Zo();
              return (u.$$click = i), u;
            },
          }),
          null
        ),
        s(
          o,
          l(H, {
            when: n,
            get children() {
              var u = qo();
              return (u.$$click = c), u;
            },
          }),
          null
        ),
        o
      );
    })();
  };
re(["click"]);
function rc(e, t, r, n) {
  return (
    e.addEventListener(t, r, n), Cs(e.removeEventListener.bind(e, t, r, n))
  );
}
function Cr(e, t) {
  if (Be) return [() => () => {}, () => {}];
  const { push: r, execute: n } = ws();
  return [
    (i, c, o) => {
      const u = rc(e, i, c, o != null ? o : t);
      return r(u), u;
    },
    Ie(n),
  ];
}
function nc(e, t = et()) {
  let r = 0,
    n,
    i;
  return () => (
    r++,
    Ie(() => {
      r--,
        queueMicrotask(() => {
          !r && i && (i(), (i = n = void 0));
        });
    }),
    i || Pt((c) => (n = e((i = c))), t),
    n
  );
}
function sc(e) {
  const t = et(),
    r = nc(e, t);
  return () => (Be || Ur.context ? Pt(e, t) : r());
}
function ac(e) {
  const t = Ce({}, e),
    r = Ce({}, e),
    n = {},
    i = (o) => {
      let u = n[o];
      if (!u) {
        if (!Lr()) return t[o];
        (n[o] = u = G(t[o], { internal: !0 })), delete t[o];
      }
      return u[0]();
    };
  for (const o in e)
    Object.defineProperty(r, o, { get: () => i(o), enumerable: !0 });
  const c = (o, u) => {
    const d = n[o];
    if (d) return d[1](u);
    o in t && (t[o] = vt(u, [t[o]]));
  };
  return [
    r,
    (o, u) => {
      if ($s(o)) {
        const d = tt(() => Object.entries(vt(o, r)));
        Tt(() => {
          for (const [a, g] of d) c(a, () => g);
        });
      } else c(o, u);
      return r;
    },
  ];
}
var wr = { passive: !0 },
  ic = { x: 0, y: 0, isInside: !1, sourceType: null };
function lc(e = window, t, r = {}) {
  if (Be) return gr;
  const { touch: n = !0, followTouch: i = !0 } = r,
    [c, o] = Cr(e, wr),
    u = (d) => t({ x: d.pageX, y: d.pageY, sourceType: "mouse" });
  if ((c("mousemove", u), c("dragover", u), n)) {
    const d = (a) => {
      a.touches.length &&
        t({
          x: a.touches[0].clientX,
          y: a.touches[0].clientY,
          sourceType: "touch",
        });
    };
    c("touchstart", d), i && c("touchmove", d);
  }
  return o;
}
function yr(e = window, t, r = {}) {
  if (Be) return gr;
  const { touch: n = !0 } = r,
    [i, c] = Cr(e, wr);
  let o = !1,
    u = !n;
  function d(a) {
    this === "mouse" ? (o = a) : (u = a), t(o || u);
  }
  return (
    i("mouseover", d.bind("mouse", !0)),
    i("mouseout", d.bind("mouse", !1)),
    i("mousemove", d.bind("mouse", !0), { passive: !0, once: !0 }),
    n &&
      (i("touchstart", d.bind("touch", !0)),
      i("touchend", d.bind("touch", !1))),
    c
  );
}
function oc(e, t = {}) {
  const r = Ce(Ce({}, ic), t.initialValue);
  if (Be) return r;
  const [n, i] = ac(r),
    c = (o) => {
      lc(o, i, t), yr(o, i.bind(void 0, "isInside"), t);
    };
  return typeof e != "function" ? c(e) : ue(() => c(e())), n;
}
oc.bind(void 0, void 0, void 0);
class cc {
  constructor() {
    (this.state = []), this.init();
  }
  init() {
    return ae(this, null, function* () {
      const t = yield oe().get("/activity/contest/daily/list/");
      this.state = t;
    });
  }
  getRank(t) {
    for (const r of this.state) if (r.userId === t) return r.rank;
    return 0;
  }
}
const Sr = new cc();
var uc = _(
    '<div><div class="w-12 h-full flex-none mr-1.5"></div><div class="flex-auto w-3/4"><div>'
  ),
  dc = _('<img class="absolute -top-2.5 left-0 w-4">'),
  fc = _("<div><img>"),
  gc = _('<div class="text-red-600 p-2 rounded-lg text-sm bg-layer4">'),
  hc = _(
    '<span class="max-52 overflow-hidden text-ellipsis whitespace-nowrap text-secondary font-semibold">'
  ),
  mc = _("<div>top"),
  vc = _(
    '<div class="flex justify-between items-center h-5 mb-1"><div class="flex items-center h-full gap-1.5"><div class="text-xs text-secondary font-semibold">'
  );
function bc(e) {
  let t;
  const [r, n] = G(!1),
    [i, c] = G(!1);
  return (
    e.data &&
      _e(() => {
        const o = yr(t, (u) => {
          u !== i() && c(u);
        });
        e.data.userId > 0 &&
          new Z.User({ userId: e.data.userId, name: e.data.name }),
          Ie(() => {
            o();
          });
      }),
    (() => {
      var o = uc(),
        u = o.firstChild,
        d = u.nextSibling,
        a = d.firstChild;
      o.$$click = () => {
        te.chatRoomPermission.deleteable && n(!r());
      };
      var g = t;
      return (
        typeof g == "function" ? ke(g, o) : (t = o),
        s(
          u,
          l(H, {
            get when() {
              return e.isFirst && e.data;
            },
            get children() {
              return l(pc, {
                get data() {
                  return e.data;
                },
              });
            },
          })
        ),
        s(
          d,
          l(H, {
            get when() {
              return e.isFirst && e.data;
            },
            get children() {
              return l(Ac, {
                get data() {
                  return e.data;
                },
                get showAction() {
                  return i();
                },
              });
            },
          }),
          a
        ),
        s(
          a,
          l(Mr, {
            fallback: xc,
            get children() {
              return e.children;
            },
          })
        ),
        s(
          o,
          l(H, {
            get when() {
              return K(() => !!(e.data && e.data.userId > 0))() && r();
            },
            get children() {
              return l(tc, {
                get chat() {
                  return e.data;
                },
              });
            },
          }),
          null
        ),
        F(
          (x) => {
            var A = e.id,
              w = Q(
                "flex flex-row px-3 font-semibold relative",
                e.isFirst && "pt-4"
              ),
              v = Q(
                "flex-1 mb-2 p-2 rounded-lg text-sm relative bg-layer4 w-full",
                e.class
              );
            return (
              A !== x.e && z(o, "id", (x.e = A)),
              w !== x.t && ee(o, (x.t = w)),
              v !== x.a && ee(a, (x.a = v)),
              x
            );
          },
          { e: void 0, t: void 0, a: void 0 }
        ),
        o
      );
    })()
  );
}
function pc(e) {
  const t = le(() => Sr.getRank(e.data.userId));
  return l(pe, {
    class: "flex w-12 h-auto relative",
    get href() {
      return `/user/profile/${e.data.userId}`;
    },
    get children() {
      return [
        (() => {
          var r = fc(),
            n = r.firstChild;
          return (
            s(
              r,
              l(H, {
                get when() {
                  return t() === 1;
                },
                get children() {
                  var i = dc();
                  return F(() => z(i, "src", $e.crown)), i;
                },
              }),
              n
            ),
            F(
              (i) => {
                var c = Q(
                    "w-12 h-12 rounded-full border-[3px] border-layer4",
                    t() > 3 && "!border-brand",
                    t() === 1 && "!border-[#ff5a81]"
                  ),
                  o =
                    e.data.userId === 0
                      ? Z.assets("/logo/black.png")
                      : Z.avatar(e.data.userId);
                return (
                  c !== i.e && ee(n, (i.e = c)),
                  o !== i.t && z(n, "src", (i.t = o)),
                  i
                );
              },
              { e: void 0, t: void 0 }
            ),
            r
          );
        })(),
        l(H, {
          get when() {
            return e.data.userId > 0;
          },
          get children() {
            return l(Jr, {
              class: "absolute left-1/2 -bottom-2 -translate-x-1/2",
              get level() {
                return e.data.level;
              },
            });
          },
        }),
      ];
    },
  });
}
function xc(e) {
  return (() => {
    var t = gc();
    return s(t, () => e.msg), t;
  })();
}
function Ac(e) {
  const t = e.data.userId != 0 ? `/user/profile/${e.data.userId}` : "",
    r = new Date(e.data.createTime),
    n = () => Sr.getRank(e.data.userId);
  return (() => {
    var i = vc(),
      c = i.firstChild,
      o = c.firstChild;
    return (
      s(
        c,
        l(pe, {
          href: t,
          class: "flex items-center justify-start leading-5 font-semibold",
          get children() {
            var u = hc();
            return s(u, () => Z.userName(e.data.name || X.host)), u;
          },
        }),
        o
      ),
      s(
        c,
        l(H, {
          get when() {
            return n() > 0;
          },
          get children() {
            return l(Yt, {
              get title() {
                return $("Daily Wager Contest Top __rank__", { rank: n() });
              },
              get children() {
                var u = mc();
                return (
                  u.firstChild,
                  s(u, n, null),
                  F(() =>
                    ee(
                      u,
                      Q(
                        "px-1 inline-block min-w-9 max-w-28 text-center h-4 leading-4 rounded-md text-xs",
                        n() > 3 ? "bg-[#24ee8966]" : "bg-[#f6519666]"
                      )
                    )
                  ),
                  u
                );
              },
            });
          },
        }),
        o
      ),
      s(
        c,
        l(Qr, {
          get code() {
            return e.data.titles;
          },
          get desc() {
            return e.data.titleDesc;
          },
        }),
        o
      ),
      s(o, () => dt(r.getHours()) + ":" + dt(r.getMinutes())),
      s(
        i,
        l(H, {
          get when() {
            return e.data.userId != te.userId && e.data.userId != 0;
          },
          get children() {
            return l(Vo, {
              get name() {
                return e.data.name;
              },
              get userId() {
                return e.data.userId;
              },
              get isShow() {
                return e.showAction;
              },
            });
          },
        }),
        null
      ),
      i
    );
  })();
}
re(["click"]);
var $c = _("<p class=rule-item><span>. </span><span>"),
  _c = _("<p class=more-rule>");
function Cc() {
  const e = () =>
    [
      $(
        "Don't spam, harass or be offensive to other users. Also, avoid using CAPS! No one likes to be screamed at!"
      ),
      $("Don't beg or ask for loans, rains, tips and doubling coins."),
      $("No suspicious behavior that can be seen as potential scams."),
      $(
        "Don't engage in any forms of advertising/ trading/ selling/ buying or offering services."
      ),
      $("Don't use URL shortener. Always submit the original link."),
      $("Use the designated language chatrooms accordingly."),
    ].map((r, n) =>
      (() => {
        var i = $c(),
          c = i.firstChild,
          o = c.firstChild,
          u = c.nextSibling;
        return s(c, n + 1, o), s(u, r), i;
      })()
    );
  return l(he, {
    get title() {
      return $("Chat Rules");
    },
    class: "text-secondary font-semibold",
    get children() {
      return [
        K(() => e()),
        (() => {
          var t = _c();
          return (
            s(t, () => $("List of our full rules can be found on our forum.")),
            t
          );
        })(),
      ];
    },
  });
}
var wc = _(
    '<div class="absolute z-50 left-0 top-15 w-full !h-auto py-2 px-3 bg-layer2"><div class=w-full><div class="center text-secondary font-extrabold gap-2"><img class="w-4 h-4"alt=star><img class="w-4 h-4"alt=star></div><div class=rich-item-wrap>'
  ),
  yc = _(
    '<div><div class="center gap-2.5"><img class=w-4><img class="w-6 h-6 rounded-full"><span class=font-semibold></span></div><div class="center w-36 h-8 bg-layer1 rounded-lg text-brand font-semibold">'
  ),
  Sc = _("<div class=top-winner>");
function kc() {
  const e = oe(),
    [t] = Nr(() =>
      ae(this, null, function* () {
        return yield e.post("/game/support/rich-list/get/");
      })
    );
  return l(He, {
    get children() {
      return l(H, {
        get when() {
          return t();
        },
        children: (r) =>
          (() => {
            var n = wc(),
              i = n.firstChild,
              c = i.firstChild,
              o = c.firstChild,
              u = o.nextSibling,
              d = c.nextSibling;
            return (
              s(c, () => $("BIGGEST WINNER TODAY"), u),
              s(
                d,
                (() => {
                  var a = K(() => !!r()[0]);
                  return () =>
                    a() &&
                    l(Qe, {
                      get ritem() {
                        return r()[0];
                      },
                      rindex: 0,
                    });
                })(),
                null
              ),
              s(
                d,
                (() => {
                  var a = K(() => !!r()[1]);
                  return () =>
                    a() &&
                    l(Qe, {
                      get ritem() {
                        return r()[1];
                      },
                      rindex: 1,
                    });
                })(),
                null
              ),
              s(
                d,
                (() => {
                  var a = K(() => !!r()[2]);
                  return () =>
                    a() &&
                    l(Qe, {
                      get ritem() {
                        return r()[2];
                      },
                      rindex: 2,
                    });
                })(),
                null
              ),
              F(
                (a) => {
                  var g = $e.star,
                    x = $e.star;
                  return (
                    g !== a.e && z(o, "src", (a.e = g)),
                    x !== a.t && z(u, "src", (a.t = x)),
                    a
                  );
                },
                { e: void 0, t: void 0 }
              ),
              n
            );
          })(),
      });
    },
  });
}
const Qe = function (t) {
  return (() => {
    var r = yc(),
      n = r.firstChild,
      i = n.firstChild,
      c = i.nextSibling,
      o = c.nextSibling,
      u = n.nextSibling;
    return (
      s(o, () => t.ritem.userName),
      s(
        r,
        (() => {
          var d = K(() => !!t.word);
          return () =>
            d() &&
            (() => {
              var a = Sc();
              return s(a, () => $("Top Winner")), a;
            })();
        })(),
        u
      ),
      s(u, () => xe.printCurrency(new Ae(t.ritem.upAmount))),
      F(
        (d) => {
          var a = Q("flex items-center justify-between m-4", t.class),
            g = $e[`top${t.rindex + 1}`],
            x = Z.avatar(t.ritem.userId);
          return (
            a !== d.e && ee(r, (d.e = a)),
            g !== d.t && z(i, "src", (d.t = g)),
            x !== d.a && z(c, "src", (d.a = x)),
            d
          );
        },
        { e: void 0, t: void 0, a: void 0 }
      ),
      r
    );
  })();
};
var Ic = _("<img class=h-4>"),
  Bc = _(
    '<div class="header-layer w-full flex-none h-15 bg-layer4 flex items-center justify-between px-4 fixed top-0 sm:static"><div class="center gap-1 sm:absolute z-10 sm:left-[268px]">'
  ),
  Ec = _('<div class="center gap-1 font-semibold"><span> ');
function Dt() {
  const { state: e, setState: t, clearChats: r } = me(),
    [n, i] = G(!1),
    c = J();
  Te.on("change_chatroom", (u) => {
    o(u);
  }),
    Te.on("getPublicChatRoomId", (u) => {
      u(e.currentRoomId);
    });
  function o(u) {
    r(),
      t("currentRoomId", u),
      localStorage.setItem("publicRoomId", u.toString());
  }
  return (() => {
    var u = Bc(),
      d = u.firstChild;
    return (
      s(
        u,
        l(nt, {
          class: "bg-transparent border-none text-base font-extrabold",
          get options() {
            return e.rooms;
          },
          get value() {
            return e.current;
          },
          onChange: (a) => {
            o(a.roomId);
          },
          labelRender: (a) =>
            (() => {
              var g = Ec(),
                x = g.firstChild;
              return (
                x.firstChild,
                s(x, () => a().label, null),
                s(g, l(de, { class: "w-4 -rotate-90", name: "Arrow" }), null),
                g
              );
            })(),
          children: (a) => a().label,
        }),
        d
      ),
      s(
        d,
        l(j, {
          class: "w-8 h-8 bg-layer5",
          onClick: () => {
            V.push(() => l(Cc, {}));
          },
          get children() {
            return l(de, { name: "Info", class: "text-secondary w-5 h-5" });
          },
        }),
        null
      ),
      s(
        d,
        l(j, {
          class: "center w-8 h-8 rounded-lg bg-layer5",
          onClick: () => {
            i(!n());
          },
          get children() {
            var a = Ic();
            return F(() => z(a, "src", n() ? $e.rich_close : $e.rich)), a;
          },
        }),
        null
      ),
      s(
        d,
        l(H, {
          get when() {
            return X.mobile;
          },
          get children() {
            return l(j, {
              class: "center w-8 h-8 rounded-lg bg-layer5",
              onClick: () => {
                c(-1);
              },
              get children() {
                return l(de, {
                  name: "Close",
                  class: "text-secondary w-5 h-5",
                });
              },
            });
          },
        }),
        null
      ),
      s(
        u,
        l(Pe, {
          get when() {
            return n();
          },
          get children() {
            return l(kc, {});
          },
        }),
        null
      ),
      u
    );
  })();
}
var Rc = _(
    '<button class="rounded-xl h-8 px-2 bg-brand btn-like text-primary_brand center font-extrabold"><span>'
  ),
  Dc = _("<span>@"),
  Uc = _(
    '<span class="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-error center text-xs">'
  ),
  Lc = _(
    '<div class="center gap-4 sticky bottom-36 sm:absolute sm:left-1/2 sm:-translate-x-1/2">'
  ),
  Mc = _(
    '<div class="relative mb:bg-layer2 -mx-4 sm:m-0 sm:mx-0 sm:h-screen flex flex-col">'
  ),
  Nc = _('<div class="flex-auto h-screen center">');
const Tc = new Set([Je.T14, Je.T13]);
function Oc() {
  let e,
    t,
    r = !0;
  const { atDict: n, state: i, initRoom: c } = me(),
    [o, u] = G(0),
    [d, a] = G([]);
  function g(f) {
    return !(
      f.type === 1 ||
      !f.chat.find((C) => C.type == "user" && C.args[0] == te.userId)
    );
  }
  const x = w();
  Tr(() => {
    const f = x(i.current.chats);
    for (let h = 0; h < f.length; h++) {
      const C = f[h];
      g(C) &&
        !n.has(String(C.id)) &&
        (a((k) => [...k, i.current.chats.indexOf(C)]),
        setTimeout(() => {
          v(h, function () {
            a((k) => k.filter((B) => B !== h));
          });
        }, 1e3));
    }
  }),
    ue(() => {
      i.currentRoomId, a([]);
    });
  function A() {
    const f = d().concat();
    let h = f.pop();
    if (!i.current.chats[h]) {
      a(f);
      return;
    }
    n.add(String(i.current.chats[h].id)),
      h &&
        (a(f),
        document
          .querySelector(`#box-${h}`)
          .scrollIntoView({ behavior: "smooth", block: "center" }));
  }
  function w() {
    let f = 0;
    return function (C) {
      const k = C.slice(f);
      return (f = C.length), k;
    };
  }
  function v(f, h) {
    const C = document.querySelector(`#box-${f}`);
    if (!C) return !1;
    const k = new IntersectionObserver((B) => {
      B.forEach((N) => {
        N.isIntersecting && (k.disconnect(), h());
      });
    });
    k.observe(C);
  }
  ue(() => {
    c() && r && ((r = !1), p());
  }),
    ue((f) => {
      const h = i.current.chats;
      return (
        h.length > 0 &&
          h.length > f.length &&
          (Hc(X.mobile ? document.body : e)
            ? p()
            : u((C) => C + h.length - f.length),
          h[h.length - 1].userId === te.userId && te.userId !== 0 && p()),
        h
      );
    }, i.current.chats);
  function p() {
    i.current.chats.length > 0 &&
      (X.mobile
        ? window.scroll({ top: document.body.scrollHeight })
        : e && setTimeout(() => (e.scrollTop = e.scrollHeight), 16),
      u(0));
  }
  const S = (() => {
      var f = Rc(),
        h = f.firstChild;
      return (
        (f.$$click = p),
        s(h, () => $("__number__ new messages", { number: o() })),
        s(
          f,
          l(q, {
            name: "DoubleArrow",
            class: "-rotate-90 ml-1 !w-4 !fill-primary_brand",
          }),
          null
        ),
        f
      );
    })(),
    M = le(() => {
      const f = i.current.pinMsg.msgId
        ? `chatroom-${i.currentRoomId}-close-pinmsg-${i.current.pinMsg.msgId}`
        : "";
      if (f) {
        const h = window.localStorage.getItem(f);
        return !(h && h === "1");
      } else return !0;
    }),
    { isBzHost: m } = Me.getHostType(X.host);
  return (() => {
    var f = Mc(),
      h = t;
    return (
      typeof h == "function" ? ke(h, f) : (t = f),
      s(
        f,
        l(H, {
          get when() {
            return X.mobile;
          },
          get fallback() {
            return l(Dt, {});
          },
          get children() {
            return l(Er, {
              get children() {
                return l(Dt, {});
              },
            });
          },
        }),
        null
      ),
      s(
        f,
        l(He, {
          get fallback() {
            return (() => {
              var C = Nc();
              return s(C, l(Ne, { class: "ml-4 h-14 w-14 text-brand" })), C;
            })();
          },
          get children() {
            return l(H, {
              get when() {
                return c();
              },
              get children() {
                return [
                  l(H, {
                    get when() {
                      return !m && M() && i.current.pinMsg.msgId;
                    },
                    get children() {
                      return l(fo, {});
                    },
                  }),
                  l(H, {
                    get when() {
                      return X.mobile;
                    },
                    get fallback() {
                      return l(rt, {
                        class: "scroll-layer",
                        ref(C) {
                          var k = e;
                          typeof k == "function" ? k(C) : (e = C);
                        },
                        get children() {
                          return l(Ut, {});
                        },
                      });
                    },
                    get children() {
                      return l(Ut, {});
                    },
                  }),
                  (() => {
                    var C = Lc();
                    return (
                      s(
                        C,
                        l(H, {
                          get when() {
                            return o() > 0;
                          },
                          children: S,
                        }),
                        null
                      ),
                      s(
                        C,
                        l(H, {
                          get when() {
                            return d().length > 0;
                          },
                          get children() {
                            return l(j, {
                              class:
                                "w-8 h-8 center bg-red-100 rounded-full bg-brand_alt",
                              onClick: A,
                              get children() {
                                return [
                                  Dc(),
                                  (() => {
                                    var k = Uc();
                                    return s(k, () => d().length), k;
                                  })(),
                                ];
                              },
                            });
                          },
                        }),
                        null
                      ),
                      C
                    );
                  })(),
                ];
              },
            });
          },
        }),
        null
      ),
      s(f, l(Yo, {}), null),
      f
    );
  })();
}
function Ut() {
  const { state: e } = me();
  return l(Zr, {
    get each() {
      return e.current.chats;
    },
    lazy: (t) => Tc.has(Lt(t)),
    children: (t, r) => {
      const n = () => e.current.chats[r()],
        i = () => {
          const c = r();
          return c === 0
            ? !0
            : tt(() => {
                const o = e.current.chats;
                return o[c - 1].userId !== o[c].userId;
              });
        };
      return l(bc, {
        get id() {
          return `box-${r()}`;
        },
        get data() {
          return t();
        },
        get isFirst() {
          return i();
        },
        get class() {
          return Q(n().type !== 1 && "!inline-flex !w-fit");
        },
        get children() {
          return l(Rr, {
            get component() {
              return Lt(n());
            },
            get data() {
              return t();
            },
          });
        },
      });
    },
  });
}
function Lt(e) {
  let t = e.type == 1 ? e.chat.subType : "0";
  const r = ["2", "3", "4", "5", "6", "16", "17"],
    n = ["9", "21"];
  return r.includes(t) && (t = "2"), n.includes(t) && (t = "9"), Je[`T${t}`];
}
function Hc(e) {
  if (!e) return !1;
  let t = e === document.body;
  const r = 400,
    n = t ? window.screen.height : e.clientHeight,
    i = t ? window.scrollY : e.scrollTop,
    c = e.scrollHeight;
  return n + i + r >= c;
}
re(["click"]);
function Zc() {
  return l(Oc, {});
}
export { Zc as default };
