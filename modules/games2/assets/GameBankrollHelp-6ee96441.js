var p1 = Object.defineProperty,
  v1 = Object.defineProperties;
var x1 = Object.getOwnPropertyDescriptors;
var J = Object.getOwnPropertySymbols;
var C1 = Object.prototype.hasOwnProperty,
  b1 = Object.prototype.propertyIsEnumerable;
var e1 = (e, t, a) =>
    t in e
      ? p1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a),
  T = (e, t) => {
    for (var a in t || (t = {})) C1.call(t, a) && e1(e, a, t[a]);
    if (J) for (var a of J(t)) b1.call(t, a) && e1(e, a, t[a]);
    return e;
  },
  $ = (e, t) => v1(e, x1(t));
import { a as y1, g as w1, c as L } from "./index-eff0ad24.js";
import {
  a1 as K,
  t as v,
  $ as d1,
  c as r,
  a0 as W,
  aV as k1,
  m as B,
  Y as u1,
  i as u,
  F as I,
  S,
  aW as L1,
  aX as j,
  u as M1,
  f as X,
  aY as H1,
  a8 as S1,
  y as g1,
  U as t1,
  B as H,
  a as E,
  b as z,
  M as A,
  e as z1,
  a7 as V1,
  h as D,
  d as E1,
  k as K1,
  l as r1,
  o as O,
  v as B1,
  w as N1,
  D as Q,
  aA as q1,
  ae as T1,
  H as h1,
  G as P1,
  K as U1,
} from "./manifest-a234c8a0.js";
import {
  B as Z1,
  c as j1,
  l as A1,
  u as D1,
  a as I1,
} from "./currency-a0e3a368.js";
import { c as F1 } from "./utils-65805dbc.js";
import {
  j as _1,
  g as $1,
  h as G1,
  i as R1,
  S as X1,
  L as O1,
  P as Q1,
  M as W1,
  b as Y1,
  d as J1,
  e as ee,
  f as te,
} from "./MoreLessBtn-6b8ac376.js";
import { _ as re, j as ne, f as ae } from "./index-4897b9da.js";
import { S as le } from "./Layout-b58c3f24.js";
import { t as p } from "./i18n-611811a6.js";
import {
  a1 as se,
  a as f1,
  a2 as n1,
  b as P,
  S as ie,
  g as oe,
} from "./game-a49e1f5b.js";
import { S as ce } from "./SeedSetting-b2f3d34e.js";
import { b as de } from "./router-b8d56046.js";
import { d as a1 } from "./debounce-9aa0a06b.js";
import { S as ue } from "./Symbol-f22f521e.js";
import {
  T as ge,
  f as he,
  a as fe,
  b as l1,
  c as G,
  d as me,
  e as R,
} from "./table-cbcb9a00.js";
import { u as pe } from "./use-coin-format-bfa33df5.js";
var ve = v(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M24.333 5.334a5 5 0 0 1 5 5v11.333a5 5 0 0 1-5 5H7.667a5 5 0 0 1-5-5V10.334a5 5 0 0 1 5-5zm-2.11 14.222H9.777a1.778 1.778 0 0 0 0 3.555h12.444a1.777 1.777 0 1 0 0-3.555m-11.556-5.334H7.11a.89.89 0 0 0-.889.89v1.777c0 .49.398.889.89.889h3.555a.89.89 0 0 0 .889-.889v-1.778a.89.89 0 0 0-.89-.889m7.11 0h-3.555a.89.89 0 0 0-.889.89v1.777c0 .49.399.889.89.889h3.555a.89.89 0 0 0 .889-.889v-1.778a.89.89 0 0 0-.89-.889m7.112 0h-3.556a.89.89 0 0 0-.889.89v1.777c0 .49.399.889.89.889h3.555a.89.89 0 0 0 .889-.889v-1.778a.89.89 0 0 0-.89-.889M10.667 8.89H7.11a.89.89 0 0 0-.889.889v1.778c0 .49.398.889.89.889h3.555a.89.89 0 0 0 .889-.89V9.779a.89.89 0 0 0-.89-.889m7.11 0h-3.555a.89.89 0 0 0-.889.889v1.778c0 .49.399.889.89.889h3.555a.89.89 0 0 0 .889-.89V9.779a.89.89 0 0 0-.89-.889m7.112 0h-3.556a.89.89 0 0 0-.889.889v1.778c0 .49.399.889.89.889h3.555a.89.89 0 0 0 .889-.89V9.779a.89.89 0 0 0-.89-.889"></path> '
);
const xe = (e) => {
  return (t = ve()), K(t, e, !0, !0), t;
  var t;
};
var Ce = v(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="m10.902 8.15 3.703 3.676-2.4 1.058a1.22 1.22 0 0 0-.746 1.12l.024 9.835c-.005 1.004-.543 1.85-1.305 2.44-.752.58-3.444 2.526-4.52 2.944-.854.33-1.853-.086-2.246-1.222-.365-1.058-.137-2.692 1.18-3.702.728-.561 1.863-.98 2.698-.615.28-.154.532-.3.723-.429.351-.237.595-.597.589-1.02l-.167-10.981c0-1.354.607-2.241 1.656-2.745l.812-.36M21.94 19.107l2.504 2.484a3.5 3.5 0 0 1-.588.607c-1.352 1.109-3.585 2.474-4.212 2.724-.9.359-1.834-.095-2.159-.88-.387-.937-.741-2.797 1.077-3.975 1.06-.686 1.803-.575 2.473-.427.347-.175.437-.221.681-.364q.124-.071.223-.168zM10.041 4.342 28.78 22.944a1.04 1.04 0 0 1 .005 1.471l-.005.005a1.055 1.055 0 0 1-1.487 0L8.553 5.818a1.04 1.04 0 0 1-.005-1.471l.006-.005a1.055 1.055 0 0 1 1.487 0m15.036-.251-.001 13.996-2.782-2.762v-6.11a.508.508 0 0 0-.697-.469l-4.107 1.809-3.703-3.676 9.277-4.087c.946-.418 2.014.27 2.014 1.299z"></path> '
);
const be = (e) => {
  return (t = Ce()), K(t, e, !0, !0), t;
  var t;
};
var ye = v(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M25.35 4.094v15.463c0 1.084-.378 1.954-1.214 2.643-1.342 1.109-3.558 2.474-4.18 2.723a1.64 1.64 0 0 1-2.144-.88c-.385-.937-.735-2.797 1.07-3.976 1.051-.687 1.789-.575 2.454-.427.344-.175.433-.22.677-.364a1.16 1.16 0 0 0 .575-.997V9.217a.505.505 0 0 0-.693-.47l-9.324 4.139a1.23 1.23 0 0 0-.741 1.12l.024 9.835c-.006 1.003-.54 1.85-1.297 2.439-.747.58-3.418 2.527-4.485 2.944-.848.33-1.84-.087-2.23-1.222-.362-1.058-.136-2.692 1.17-3.703.723-.56 1.85-.98 2.678-.616.28-.154.529-.3.718-.428.349-.237.591-.598.585-1.02l-.166-10.982c0-1.354.603-2.24 1.643-2.745l12.88-5.717c.94-.417 1.999.271 1.999 1.3z"></path> '
);
const we = (e) => {
  return (t = ye()), K(t, e, !0, !0), t;
  var t;
};
var ke = v(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M7.268 16.384c.094-1.48.873-1.978 2.469-1.679 1.668.314 4.11.454 6.263.454s4.75-.168 6.396-.424c1.648-.256 2.24.212 2.335 1.692.109 1.7-.07 6.525-2.812 9.56-1.399 1.55-3.764 2.505-5.92 2.505-1.975 0-4.36-.827-5.92-2.505-2.785-2.995-2.92-7.902-2.812-9.603m14.272 3.58c-.613 0-1.11.498-1.11 1.112s.497 1.114 1.11 1.114 1.11-.499 1.11-1.114c0-.614-.498-1.113-1.11-1.113m.351-3.188c-.701 0-1.27.57-1.27 1.274s.569 1.274 1.27 1.274 1.27-.57 1.27-1.274c0-.703-.568-1.274-1.27-1.274m-3.07.252a1.02 1.02 0 0 0-1.019 1.021 1.02 1.02 0 0 0 1.018 1.022 1.02 1.02 0 0 0 0-2.043M16 3.615c.892 0 1.614.725 1.614 1.62v1.723c5.117.336 8.416 2.22 8.416 4.21 0 1.479-3.46 2.11-7.12 2.31l-.49.024-.489.02c-.653.022-1.302.033-1.931.033h-.237a60 60 0 0 1-1.94-.04l-.489-.02-.487-.026c-3.57-.208-6.877-.832-6.877-2.3 0-1.99 3.3-3.875 8.416-4.211V5.234c0-.893.723-1.62 1.614-1.62"></path> '
);
const Le = (e) => {
  return (t = ke()), K(t, e, !0, !0), t;
  var t;
};
var Me = v(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="m10.609 8.551.008.009 17.26 17.474a.987.987 0 0 1 0 1.387.963.963 0 0 1-1.362.009l-.009-.01-2.247-2.273c-1.01 1.32-2.246 2.095-3.582 2.095-.965 0-1.878-.405-2.691-1.126l-6.82-6.068H6.67c-1.66 0-2.83-1.877-2.83-4.192 0-2.249 1.104-4.085 2.689-4.181l.141-.005h4.28L9.247 9.946a.987.987 0 0 1 0-1.386.963.963 0 0 1 1.362-.009m10.069-4.094c3.416 0 6.189 5.09 6.189 11.393 0 2.399-.401 4.623-1.086 6.456l-3.23-3.34a6.15 6.15 0 0 0 .722-3.103 6.1 6.1 0 0 0-1.209-3.868 1.075 1.075 0 0 0-1.508-.114 1.09 1.09 0 0 0-.14 1.52c.49.724.734 1.587.694 2.462.02.483-.045.962-.19 1.418l-7.432-7.682 4.498-4.016c.813-.721 1.726-1.126 2.69-1.126z"></path> '
);
const He = (e) => {
  return (t = Me()), K(t, e, !0, !0), t;
  var t;
};
var Se = v(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <g fill=currentColor> <path d="m11.729 11.736 6.959-6.213v20.955l-6.96-6.193-.557-4.284z"></path> <path d="M11.546 16.006a8.6 8.6 0 0 1 .74-3.68.39.39 0 0 0-.338-.59H7.14c-1.694-.007-2.889 1.908-2.889 4.27 0 2.363 1.195 4.279 2.89 4.279h4.815a.391.391 0 0 0 .338-.59 8.6 8.6 0 0 1-.747-3.689M21.434 4.374c3.485 0 6.316 5.193 6.316 11.626s-2.824 11.626-6.316 11.626S15.117 22.433 15.117 16s2.824-11.626 6.317-11.626m1.414 7.692a1.097 1.097 0 0 0-1.538-.117 1.11 1.11 0 0 0-.143 1.552c.5.74.748 1.62.707 2.512.036.89-.21 1.77-.701 2.513a1.095 1.095 0 0 0 .124 1.551c.199.17.452.264.714.266.325-.002.632-.144.844-.39a6.3 6.3 0 0 0 1.227-3.94 6.24 6.24 0 0 0-1.234-3.947"></path> </g> '
);
const ze = (e) => {
  return (t = Se()), K(t, e, !0, !0), t;
  var t;
};
var Ve = v(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M18.004 4.29 7.3 14.604c-.712.685-.651 1.743.137 2.363l.141.101q.22.142.477.226l4.62 1.498-2.004 7.412c-.243.9.398 1.8 1.43 2.012.675.139 1.384-.05 1.854-.494l10.73-10.137c.72-.68.67-1.739-.11-2.365l-.128-.094a2 2 0 0 0-.436-.221l-4.384-1.585 1.69-7.588c.203-.907-.478-1.785-1.52-1.961-.662-.111-1.341.086-1.792.52z"></path> '
);
const Ee = (e) => {
  return (t = Ve()), K(t, e, !0, !0), t;
  var t;
};
var Ke = v(
  '<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <path fill=currentColor d="M16 3.826c6.724 0 12.174 5.45 12.174 12.174S22.724 28.174 16 28.174 3.826 22.724 3.826 16 9.276 3.826 16 3.826m0 2.609a9.565 9.565 0 1 0 0 19.13 9.565 9.565 0 0 0 0-19.13m-.04 14.71a1.305 1.305 0 1 1-.001 2.61 1.305 1.305 0 0 1 .001-2.61m.23-12.252c1.356 0 2.462.355 3.297 1.106q1.252 1.095 1.252 3.005c0 1.044-.271 1.9-.772 2.567-.188.21-.793.773-1.795 1.65a3.2 3.2 0 0 0-.835 1.043c-.179.357-.28.73-.306 1.145l-.007.211v.292h-2.4v-.292c0-.793.126-1.482.418-2.045.256-.532.996-1.344 2.22-2.452l.221-.198.25-.293c.377-.459.564-.96.564-1.481 0-.69-.208-1.232-.584-1.628-.396-.397-.96-.585-1.67-.585-.918 0-1.565.272-1.961.856-.323.437-.49 1.045-.518 1.81l-.004.235h-2.38c0-1.544.44-2.754 1.357-3.631.898-.877 2.108-1.315 3.653-1.315"></path> '
);
const Be = (e) => {
  return (t = Ke()), K(t, e, !0, !0), t;
  var t;
};
var s1,
  m1 = { exports: {} };
(s1 = m1),
  (function (e) {
    var t,
      a = {},
      c = { 16: !1, 18: !1, 17: !1, 91: !1 },
      m = "all",
      h = {
        "⇧": 16,
        shift: 16,
        "⌥": 18,
        alt: 18,
        option: 18,
        "⌃": 17,
        ctrl: 17,
        control: 17,
        "⌘": 91,
        command: 91,
      },
      k = {
        backspace: 8,
        tab: 9,
        clear: 12,
        enter: 13,
        return: 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        delete: 46,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        ",": 188,
        ".": 190,
        "/": 191,
        "`": 192,
        "-": 189,
        "=": 187,
        ";": 186,
        "'": 222,
        "[": 219,
        "]": 221,
        "\\": 220,
      },
      x = function (l) {
        return k[l] || l.toUpperCase().charCodeAt(0);
      },
      b = [];
    for (t = 1; t < 20; t++) k["f" + t] = 111 + t;
    function y(l, i) {
      for (var s = l.length; s--; ) if (l[s] === i) return s;
      return -1;
    }
    function C(l, i) {
      if (l.length != i.length) return !1;
      for (var s = 0; s < l.length; s++) if (l[s] !== i[s]) return !1;
      return !0;
    }
    var V = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey" };
    function g(l) {
      for (t in c) c[t] = l[V[t]];
    }
    function f(l, i, s) {
      var d, n;
      (d = U(l)), s === void 0 && ((s = i), (i = "all"));
      for (var o = 0; o < d.length; o++)
        (n = []),
          (l = d[o].split("+")).length > 1 &&
            ((n = Z(l)), (l = [l[l.length - 1]])),
          (l = l[0]),
          (l = x(l)) in a || (a[l] = []),
          a[l].push({
            shortcut: d[o],
            scope: i,
            method: s,
            key: d[o],
            mods: n,
          });
    }
    for (t in h) f[t] = !1;
    function M() {
      return m || "all";
    }
    function U(l) {
      var i;
      return (
        (i = (l = l.replace(/\s/g, "")).split(","))[i.length - 1] == "" &&
          (i[i.length - 2] += ","),
        i
      );
    }
    function Z(l) {
      for (var i = l.slice(0, l.length - 1), s = 0; s < i.length; s++)
        i[s] = h[i[s]];
      return i;
    }
    function N(l, i, s) {
      l.addEventListener
        ? l.addEventListener(i, s, !1)
        : l.attachEvent &&
          l.attachEvent("on" + i, function () {
            s(window.event);
          });
    }
    N(document, "keydown", function (l) {
      (function (i) {
        var s, d, n, o, w, q;
        if (
          ((s = i.keyCode),
          y(b, s) == -1 && b.push(s),
          (s != 93 && s != 224) || (s = 91),
          s in c)
        )
          for (n in ((c[s] = !0), h)) h[n] == s && (f[n] = !0);
        else if ((g(i), f.filter.call(this, i) && s in a)) {
          for (q = M(), o = 0; o < a[s].length; o++)
            if ((d = a[s][o]).scope == q || d.scope == "all") {
              for (n in ((w = d.mods.length > 0), c))
                ((!c[n] && y(d.mods, +n) > -1) ||
                  (c[n] && y(d.mods, +n) == -1)) &&
                  (w = !1);
              ((d.mods.length != 0 || c[16] || c[18] || c[17] || c[91]) &&
                !w) ||
                (d.method(i, d) === !1 &&
                  (i.preventDefault ? i.preventDefault() : (i.returnValue = !1),
                  i.stopPropagation && i.stopPropagation(),
                  i.cancelBubble && (i.cancelBubble = !0)));
            }
        }
      })(l);
    }),
      N(document, "keyup", function (l) {
        var i,
          s = l.keyCode,
          d = y(b, s);
        if (
          (d >= 0 && b.splice(d, 1), (s != 93 && s != 224) || (s = 91), s in c)
        )
          for (i in ((c[s] = !1), h)) h[i] == s && (f[i] = !1);
      }),
      N(window, "focus", function () {
        for (t in c) c[t] = !1;
        for (t in h) f[t] = !1;
      });
    var _ = e.key;
    (e.key = f),
      (e.key.setScope = function (l) {
        m = l || "all";
      }),
      (e.key.getScope = M),
      (e.key.deleteScope = function (l) {
        var i, s, d;
        for (i in a)
          for (s = a[i], d = 0; d < s.length; )
            s[d].scope === l ? s.splice(d, 1) : d++;
      }),
      (e.key.filter = function (l) {
        var i = (l.target || l.srcElement).tagName;
        return !(i == "INPUT" || i == "SELECT" || i == "TEXTAREA");
      }),
      (e.key.isPressed = function (l) {
        return typeof l == "string" && (l = x(l)), y(b, l) != -1;
      }),
      (e.key.getPressedKeyCodes = function () {
        return b.slice(0);
      }),
      (e.key.noConflict = function () {
        var l = e.key;
        return (e.key = _), l;
      }),
      (e.key.unbind = function (l, i) {
        var s,
          d,
          n,
          o,
          w,
          q = [];
        for (s = U(l), o = 0; o < s.length; o++) {
          if (
            ((d = s[o].split("+")).length > 1 &&
              ((q = Z(d)), (l = d[d.length - 1])),
            (l = x(l)),
            i === void 0 && (i = M()),
            !a[l])
          )
            return;
          for (n = 0; n < a[l].length; n++)
            (w = a[l][n]).scope === i && C(w.mods, q) && (a[l][n] = {});
        }
      }),
      (s1.exports = f);
  })(y1);
const gt = w1(m1.exports);
function Y(e) {
  const [t, a] = d1(e, [
      "children",
      "pressed",
      "defaultPressed",
      "onChange",
      "onClick",
    ]),
    c = _1({
      isSelected: () => t.pressed,
      defaultIsSelected: () => t.defaultPressed,
      onSelectedChange: (m) => {
        var h;
        return (h = t.onChange) == null ? void 0 : h.call(t, m);
      },
      isDisabled: () => a.disabled,
    });
  return r(
    Z1,
    W(
      {
        get "aria-pressed"() {
          return c.isSelected();
        },
        get "data-pressed"() {
          return c.isSelected() ? "" : void 0;
        },
        onClick: (m) => {
          ae(m, t.onClick), c.toggle();
        },
      },
      a,
      {
        get children() {
          return r(Ne, {
            get state() {
              return { pressed: c.isSelected };
            },
            get children() {
              return t.children;
            },
          });
        },
      }
    )
  );
}
function Ne(e) {
  const t = k1(() => {
    const a = e.children;
    return ne(a) ? a(e.state) : a;
  });
  return B(t);
}
re({}, { Root: () => Y, ToggleButton: () => qe });
var qe = Y;
const Te = j1(
    "inline-flex items-center justify-center font-extrabold transition-colors disabled:pointer-events-none disabled:opacity-40",
    {
      variants: {
        variant: {
          default: "text-primary bg-layer4 data-[pressed]:text-brand",
          outline:
            "border-2 border-third text-primary data-[pressed]:text-brand hover:bg-black/10",
        },
        size: {
          xs: "h-6 px-1 text-xs rounded-lg",
          sm: "h-8 px-2 text-sm rounded-lg",
          default: "h-10 px-4 rounded-xl",
          lg: "h-12 px-8 text-lg rounded-xl",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  i1 = (e) => {
    const [t, a] = d1(e, ["class", "variant", "size"]);
    return r(
      Y,
      W(
        {
          get class() {
            return F1(Te({ variant: t.variant, size: t.size }), t.class);
          },
        },
        a
      )
    );
  };
var Pe = v('<div class="flex flex-col gap-4">'),
  Ue = v(
    '<div class="flex items-center justify-between p-2 bg-layer4 light-darkness text-primary rounded-md pl-4 relative"><span class="flex w-3/4"></span><span class="absolute right-1/4 inset-y-2 border-r border-third w-px"></span><span class="font-bold w-1/4 text-center text-secondary">'
  );
const Ze = (e) =>
  r(u1, {
    get title() {
      return p("HotKeys");
    },
    get children() {
      var t = Pe();
      return (
        u(
          t,
          r(I, {
            get each() {
              return Object.entries(T(T({}, se), e.hotKeyList));
            },
            children: ([a, c]) =>
              r(S, {
                when: c,
                get children() {
                  var m = Ue(),
                    h = m.firstChild,
                    k = h.nextSibling.nextSibling;
                  return u(h, c), u(k, () => a.toUpperCase()), m;
                },
              }),
          }),
          null
        ),
        u(
          t,
          r(L1, {
            class: "mx-auto focus:outline-none",
            get value() {
              return !!e.hotKeysEnable;
            },
            get onChange() {
              return e.setHotKeysEnable;
            },
            get children() {
              return p("Hotkeys Enabled");
            },
          }),
          null
        ),
        t
      );
    },
  });
var je = v("<div>");
const Ae = (e) =>
  r(u1, {
    get title() {
      return p("Help");
    },
    get children() {
      var t = je();
      return (
        u(
          t,
          r(j, {
            multiple: !1,
            class: "w-full",
            get children() {
              return r(I, {
                get each() {
                  return e.helpList;
                },
                children: (a) =>
                  r(j.Item, {
                    get value() {
                      return a.title;
                    },
                    get children() {
                      return [
                        r(j.ItemTrigger, {
                          class: "bg-layer3 dark:bg-layer5 !py-3",
                          get children() {
                            return a.title;
                          },
                        }),
                        r(j.ItemContent, {
                          get children() {
                            return a.node();
                          },
                        }),
                      ];
                    },
                  }),
              });
            },
          })
        ),
        t
      );
    },
  });
var o1 = v("<span>"),
  De = v(
    '<div><div class="flex items-center md:gap-2 flex-1"></div><div class="hidden md:block"><svg class="relative top-1/2 -translate-y-1/2 text-layer5 opacity-50"xmlns=http://www.w3.org/2000/svg width=146 height=31 viewBox="0 0 146 31"fill=none><g clip-path=url(#clip0_4310_22607)><path fill-rule=evenodd clip-rule=evenodd d="M9.00892 5.4247C8.91436 1.30205 7.47078 0 2.9951 0H1.43607C0.395825 0 0.341374 0.161295 0.700715 1.00155C0.997471 1.69564 1.02384 2.23634 1.02531 3.07131L1.02682 17.8746C1.06799 24.0186 1.91327 25.4054 7.6735 28.5632C10.6328 30.1855 12.3715 31.004 14.2007 31C16.0298 31.004 17.7686 30.1855 20.7279 28.5632C26.6467 25.3184 27.3762 23.9435 27.3762 17.3561C27.3762 10.7687 26.6137 9.49025 20.926 6.26071C18.1915 4.70814 16.2806 3.88613 14.4218 3.80302L14.2005 3.79631L13.9796 3.80302C12.4889 3.86968 10.9646 4.41158 9.00892 5.4247ZM15.013 9.07771C10.3012 9.07771 6.48111 12.8027 6.48111 17.3976C6.48111 21.9925 10.3012 25.7176 15.013 25.7176C17.2597 25.7176 19.4401 24.624 20.9638 23.2399C21.0388 23.1717 21.1167 22.9646 20.9943 22.8455C20.262 22.1318 17.5261 19.6736 16.0978 18.3902C15.5926 17.9363 15.251 17.6293 15.2195 17.5986C15.0843 17.4668 15.0877 17.3223 15.2195 17.1887C16.0076 16.3909 18.958 13.6609 20.2811 12.4366C20.6544 12.0913 20.8981 11.8657 20.9273 11.8372C21.0775 11.6908 20.9924 11.5252 20.9273 11.4678C19.4131 10.1285 17.2186 9.07771 15.013 9.07771Z"fill=currentColor></path><path fill-rule=evenodd clip-rule=evenodd d="M13.6412 14.9453C13.6412 15.6845 13.0277 16.2836 12.271 16.2836C11.5142 16.2836 10.9009 15.6845 10.9009 14.9453C10.9009 14.2062 11.5142 13.6069 12.271 13.6069C13.0277 13.6069 13.6412 14.2062 13.6412 14.9453Z"fill=currentColor></path><path fill-rule=evenodd clip-rule=evenodd d="M45.1999 21.8974C44.8449 22.2492 44.24 22.4535 43.4354 22.4535H40.439V17.9897H43.5702C44.3446 17.9897 44.9031 18.2177 45.23 18.5696C45.5601 18.9263 45.7282 19.5668 45.7282 20.273C45.7282 20.8759 45.5704 21.5301 45.1999 21.8974ZM40.439 10.9198H42.5516C43.5732 10.9198 44.1179 11.0674 44.5367 11.4295C44.8916 11.737 45.0899 12.3191 45.0899 13.0373C45.0899 13.6648 44.8976 14.1897 44.5417 14.492C44.0434 14.9154 43.5848 15.0258 42.6375 15.0258H40.439V10.9198ZM47.3018 16.4106C48.074 16.1109 48.7088 15.5528 49.0884 14.9704C49.562 14.2434 49.8094 13.4399 49.8094 12.5258C49.8094 10.7421 49.1984 9.43177 47.9598 8.54508C46.6821 7.63033 45.3031 7.25663 42.6792 7.14558C40.1301 7.03747 35.9629 7.58078 35.9629 7.58078V26.0306C35.9629 26.0306 40.8502 26.2619 43.8829 26.0649C46.4652 25.897 47.662 25.5153 48.6858 24.6737C49.8402 23.7246 50.4381 22.1909 50.4381 20.3227C50.4381 19.3213 50.1882 18.5388 49.6811 17.7919C49.2574 17.1673 48.3296 16.5703 47.3018 16.4106ZM99.7989 18.0831L101.493 12.9177L103.236 18.0651L99.7989 18.0831ZM99.3373 7.60448L92.3755 25.7017L97.1475 25.7215L98.5679 21.8137L104.22 21.7974L105.719 25.7057H110.553L103.812 7.60448H99.3373ZM137.818 18.2706L137.789 21.7305H145.5V25.6702H133.278V14.5743V7.59669H145.288V11.5364H137.781L137.81 14.8108H144.624V18.2713L137.818 18.2706ZM63.7052 22.0078C62.2638 22.2828 60.192 22.5849 58.6581 21.7277C57.2449 20.938 56.6266 19.3803 56.4929 18.2473C56.3813 17.3017 56.373 15.8171 56.4929 14.9776C56.6754 13.6995 57.2449 12.216 58.6581 11.4261C60.192 10.5689 62.2638 10.8712 63.7052 11.1462C64.6438 11.3251 66.5086 11.8842 66.5086 11.8842L66.5365 8.3714C66.5365 8.3714 65.0534 7.60114 62.4624 7.29518C60.0162 7.00603 56.8384 7.25637 54.7155 9.07514C52.5926 10.8939 52.1116 13.1371 51.9069 14.8396C51.784 15.8615 51.7947 17.445 51.9069 18.3852C52.0907 19.9252 52.5926 22.3309 54.7155 24.1497C56.8384 25.9685 60.0162 26.2188 62.4624 25.9297C65.0534 25.6237 66.7594 24.7429 66.7594 24.7429L66.7316 21.0974C66.7316 21.0974 64.6438 21.8289 63.7052 22.0078ZM72.3673 26.0276C73.5977 26.0276 74.595 25.0534 74.595 23.8516C74.595 22.6498 73.5977 21.6756 72.3673 21.6756C71.1371 21.6756 70.1396 22.6498 70.1396 23.8516C70.1396 25.0534 71.1371 26.0276 72.3673 26.0276ZM131.025 25.6986L130.762 7.58112H125.433L121.365 18.083L117.054 7.58112H111.83C111.812 7.58112 111.797 7.5962 111.797 7.61404V25.6952C111.797 25.6961 111.798 25.6971 111.798 25.6977C111.799 25.6983 111.799 25.6986 111.8 25.6986H116.274L116.273 14.6346L120.441 24.0614L122.29 24.0514L126.456 14.2997V25.6986H131.025ZM87.967 16.682H91.5208V20.7272L91.5238 20.726V24.3817C90.7117 24.903 89.5592 25.474 87.4994 25.8482C85.6307 26.1878 82.0762 26.3153 79.7082 24.6816C77.1617 22.9245 76.4908 20.2755 76.3556 18.618C76.26 17.4509 76.2524 16.2511 76.3556 14.9589C76.4801 13.3946 77.0406 10.9513 79.1635 9.11066C81.2864 7.26989 84.4642 7.01678 86.9104 7.3094C89.5014 7.61882 90.9846 8.39827 90.9846 8.39827L90.9566 11.994C90.9566 11.994 89.0918 11.428 88.1532 11.247C86.7118 10.9686 84.64 10.663 83.1059 11.5304C81.6929 12.3296 81.0368 14.0198 80.9416 15.0981C80.8447 16.1946 80.8479 17.4095 80.9258 18.3171C81.0531 19.8019 81.7372 20.9654 82.797 21.6832C83.8672 22.4079 85.9262 22.4429 87.4824 21.8692C87.4824 21.8692 87.4535 18.9585 87.4535 18.3428C87.4535 18.0356 87.3904 17.7935 87.3334 17.5749C87.3018 17.4537 87.2721 17.3398 87.2561 17.226C87.1977 16.8114 87.3318 16.682 87.967 16.682Z"fill=currentColor></path></g><defs><clipPath id=clip0_4310_22607><rect width=145 height=31 fill=white transform=translate(0.5)></rect></clipPath></defs></svg></div><div class="flex items-center md:gap-2 flex-1 justify-end">'
  );
function Ie({ queryKey: e }) {
  return g1().post("/home/game/game-opt/", { gameUnique: e[1] });
}
const ht = (e) => {
    const t = M1(),
      a = de(),
      [c, m] = X(!1),
      [h, k] = X(null),
      x = H1(),
      { hotKeysEnable: b, setHotKeysEnable: y } = f1(),
      C =
        ((V = a.gameUnique),
        K1(() => ({ queryKey: ["/home/game/game-opt/", V], queryFn: Ie })));
    var V;
    const g = S1(() => ({
        mutationKey: ["/home/game/{action}"],
        mutationFn: (n) =>
          g1().post(
            `/home/game/${A1(n, "favorite") ? "favorite" : "like"}/`,
            n
          ),
        onSuccess() {
          C.refetch();
        },
      })),
      f = () => {
        var n;
        if (D.login) {
          const o = (n = C.data) != null && n.favorite ? 0 : 1;
          g.mutate({ gameUnique: a.gameUnique, favorite: o }),
            x.setQueryData(["/home/game/game-opt/", a.gameUnique], (w) =>
              $(T({}, w), {
                favorite: o,
                favoriteNum: w ? w.favoriteNum + (o ? 1 : -1) : o ? 1 : -1,
              })
            );
        } else t("/login/signin");
      },
      M = () => {
        var n;
        if (D.login) {
          const o = (n = C.data) != null && n.like ? 0 : 1;
          g.mutate({ gameUnique: a.gameUnique, op: o }),
            x.setQueryData(["/home/game/game-opt/", a.gameUnique], (w) =>
              $(T({}, w), {
                like: o,
                likeNum: w ? w.likeNum + (o ? 1 : -1) : o ? 1 : -1,
              })
            );
        } else t("/login/signin");
      },
      U = (n) => {
        if (D.login) {
          const o = n.target.getBoundingClientRect();
          k({ top: o.top, left: o.left }), m(!c());
        } else t("/login/signin");
      },
      Z = t1(() =>
        r(ce, {
          get gameUnique() {
            return a.gameUnique;
          },
        })
      ),
      N = t1(() =>
        r(Ae, {
          get helpList() {
            return e.helpList;
          },
        })
      ),
      _ = a1((n) => {
        var o;
        (o = e.onBgMuteChange) == null || o.call(e, !n.pressed());
      }, n1),
      l = a1((n) => {
        var o;
        (o = e.onMuteChange) == null || o.call(e, !n.pressed());
      }, n1);
    return (
      (i = De()),
      (s = i.firstChild),
      (d = s.nextSibling.nextSibling),
      u(
        s,
        r(H, {
          class: "text-secondary",
          onClick: f,
          get children() {
            return [
              r(le, {
                get class() {
                  var o;
                  return L("size-6", {
                    "text-warning": (o = C.data) == null ? void 0 : o.favorite,
                  });
                },
              }),
              ((n = o1()),
              u(n, () => {
                var o;
                return (o = C.data) == null ? void 0 : o.favoriteNum;
              }),
              E(() => {
                var o;
                return z(
                  n,
                  L("hidden md:block ml-1", {
                    "text-warning": (o = C.data) == null ? void 0 : o.favorite,
                  })
                );
              }),
              n),
            ];
            var n;
          },
        }),
        null
      ),
      u(
        s,
        r(H, {
          class: "text-secondary",
          onClick: M,
          get children() {
            return [
              r($1, {
                get class() {
                  var o;
                  return L("size-6", {
                    "text-error": (o = C.data) == null ? void 0 : o.like,
                  });
                },
              }),
              ((n = o1()),
              u(n, () => {
                var o;
                return (o = C.data) == null ? void 0 : o.likeNum;
              }),
              E(() => {
                var o;
                return z(
                  n,
                  L("hidden md:block ml-1", {
                    "text-error": (o = C.data) == null ? void 0 : o.like,
                  })
                );
              }),
              n),
            ];
            var n;
          },
        }),
        null
      ),
      u(
        s,
        r(H, {
          class: "text-secondary",
          onClick: () => {
            A.push(() => r(G1, {}), { close: !0 });
          },
          get children() {
            return r(R1, { class: "size-6" });
          },
        }),
        null
      ),
      u(
        d,
        r(S, {
          get when() {
            var n;
            return (n = e.actions) == null ? void 0 : n.includes("bgmute");
          },
          get children() {
            return r(i1, {
              class: "!p-0 bg-transparent",
              as: "div",
              get pressed() {
                return e.bgMute;
              },
              children: (n) =>
                r(H, {
                  class: "text-secondary",
                  get title() {
                    return p("Background Sound");
                  },
                  onClick: () => _(n),
                  get children() {
                    return r(S, {
                      get when() {
                        return !n.pressed();
                      },
                      get fallback() {
                        return r(be, {
                          class: "size-6 transition-transform duration-300",
                        });
                      },
                      get children() {
                        return r(we, {
                          class:
                            "size-6 transition-transform duration-300 hover:scale-125 text-brand",
                        });
                      },
                    });
                  },
                }),
            });
          },
        }),
        null
      ),
      u(
        d,
        r(S, {
          get when() {
            var n;
            return (n = e.actions) == null ? void 0 : n.includes("mute");
          },
          get children() {
            return r(i1, {
              class: "!p-0 bg-transparent",
              as: "div",
              get pressed() {
                return e.mute;
              },
              children: (n) =>
                r(H, {
                  class: "text-secondary",
                  get title() {
                    return p("Sound");
                  },
                  onClick: () => l(n),
                  get children() {
                    return r(S, {
                      get when() {
                        return !n.pressed();
                      },
                      get fallback() {
                        return r(He, {
                          class: "size-6 transition-transform duration-300",
                        });
                      },
                      get children() {
                        return r(ze, {
                          class:
                            "size-6 transition-transform duration-300 hover:scale-125 text-brand",
                        });
                      },
                    });
                  },
                }),
            });
          },
        }),
        null
      ),
      u(
        d,
        r(S, {
          get when() {
            var n;
            return (n = e.actions) == null ? void 0 : n.includes("turbo");
          },
          get children() {
            return r(H, {
              class: "text-secondary",
              get title() {
                return p("Turbo");
              },
              onClick: () => {
                var n;
                return (n = e.onTurboChange) == null
                  ? void 0
                  : n.call(e, !e.isTurboEnable);
              },
              get children() {
                return r(Ee, {
                  get class() {
                    return (
                      "size-6 transition-transform duration-300 hover:scale-125 " +
                      (e.isTurboEnable ? "text-brand" : "")
                    );
                  },
                });
              },
            });
          },
        }),
        null
      ),
      u(
        d,
        r(S, {
          get when() {
            var n;
            return (
              ((n = e.actions) == null ? void 0 : n.includes("hotKeys")) &&
              !z1.mobile
            );
          },
          get children() {
            return r(H, {
              get title() {
                return p("HotKeys");
              },
              class: "text-secondary",
              onClick: () => {
                A.push(
                  () =>
                    r(Ze, {
                      get hotKeyList() {
                        return e.hotKeyList;
                      },
                      get hotKeysEnable() {
                        return b();
                      },
                      setHotKeysEnable: y,
                    }),
                  { close: !0 }
                );
              },
              get children() {
                return r(xe, {
                  get class() {
                    return (
                      "size-6 transition-transform duration-300 hover:scale-125 " +
                      (b() ? "text-brand" : "")
                    );
                  },
                });
              },
            });
          },
        }),
        null
      ),
      u(
        d,
        r(S, {
          get when() {
            var n;
            return (n = e.actions) == null ? void 0 : n.includes("liveStats");
          },
          get children() {
            return r(H, {
              class: "text-secondary",
              onClick: U,
              get children() {
                return r(X1, {
                  class:
                    "transition-transform duration-300 hover:scale-125 size-6",
                });
              },
            });
          },
        }),
        null
      ),
      u(
        d,
        r(V1, {
          get children() {
            return r(S, {
              get when() {
                return c();
              },
              fallback: null,
              get children() {
                return r(O1, {
                  onClose: () => m(!1),
                  get position() {
                    return h();
                  },
                });
              },
            });
          },
        }),
        null
      ),
      u(
        d,
        r(S, {
          get when() {
            var n;
            return (n = e.actions) == null ? void 0 : n.includes("seedSetting");
          },
          get children() {
            return r(H, {
              get title() {
                return p("Seed");
              },
              class: "text-secondary",
              onClick: () => {
                D.login ? A.push(Z, { close: !0 }) : t("/login/signin");
              },
              get children() {
                return r(Le, {
                  class:
                    "size-6 transition-transform duration-300 hover:scale-125",
                });
              },
            });
          },
        }),
        null
      ),
      u(
        d,
        r(H, {
          get title() {
            return p("Help");
          },
          class: "transition-transform duration-300 text-secondary",
          onClick: () => {
            A.push(N, { close: !0 });
          },
          get children() {
            return r(Be, {
              class: "size-6 transition-transform duration-300 hover:scale-125",
            });
          },
        }),
        null
      ),
      u(d, () => e.children, null),
      E(() =>
        z(
          i,
          E1(
            "relative justify-between bg-layer3 h-12 md:justify-self-end md:static w-full md:px-5 px-1 flex border-t border-third rounded-b-xl z-[100]",
            e.class
          )
        )
      ),
      i
    );
    var i, s, d;
  },
  Fe = "/modules/games2/assets/profit-79add662.png";
var _e = v(
    '<div><img alt=""class="w-56 -mb-5"><span><div class="flex items-center"><span>'
  ),
  $e = v('<span class="text-2xl font-extrabold text-brand relative">X'),
  Ge = v(
    '<span class="text-[1rem] text-black mb-[0.5rem] inline-block max-w-full text-ellipsis whitespace-nowrap overflow-hidden"> '
  );
function Re(e) {
  const [t, a] = X(!1),
    { findToken: c } = D1();
  let m = null;
  return (
    r1(() => {
      const h = setTimeout(() => {
        a(!1);
      }, e.duration || 3e3);
      a(e.odds !== void 0 && Number(e.odds) > 1 && !!e.currency),
        O(() => {
          h && clearTimeout(h);
        });
    }),
    r1(() => {
      function h(k) {
        m && !m.contains(k.target) && a(!1);
      }
      document.addEventListener("mousedown", h),
        O(() => {
          document.removeEventListener("mousedown", h);
        });
    }),
    r(Q1, {
      get children() {
        return (
          B(() => !!t())() &&
          r(W1.div, {
            initial: { opacity: 0, y: "-50%", x: "-50%" },
            animate: {
              opacity: 1,
              y: "-50%",
              x: "-50%",
              transition: { duration: 0.3 },
            },
            exit: { opacity: 0, y: "-50%", x: "-50%" },
            class:
              "absolute top-1/4 lg:top-1/2 z-50 left-1/2 box-content border-2 border-solid border-secondary/[0.1] rounded-xl",
            get children() {
              var h,
                k,
                x = _e(),
                b = x.firstChild,
                y = b.nextSibling,
                C = y.firstChild,
                V = C.firstChild;
              return (
                B1((g) => {
                  m = g;
                }, x),
                N1(b, "src", Fe),
                u(
                  x,
                  ((h = B(() => !(!e.odds || e.bets))),
                  () => {
                    return (
                      h() &&
                      ((f = $e()),
                      (M = f.firstChild),
                      u(
                        f,
                        ((g = B(
                          () => Math.floor(100 * Number(e.odds)) / 100 > 1
                        )),
                        () =>
                          g() ? Math.floor(100 * Number(e.odds)) / 100 : 0),
                        M
                      ),
                      f)
                    );
                    var g, f, M;
                  }),
                  y
                ),
                u(V, () =>
                  new Q(e.currency.amount).toFixed(e.currency.decimal)
                ),
                u(
                  C,
                  r(ue, {
                    get token() {
                      return c(e.currency.symbol);
                    },
                  }),
                  null
                ),
                u(
                  x,
                  ((k = B(() => !!e.bets)),
                  () => {
                    return (
                      k() &&
                      ((g = Ge()),
                      (f = g.firstChild),
                      u(g, () => p("Select"), f),
                      u(g, () => e.bets, null),
                      g)
                    );
                    var g, f;
                  }),
                  null
                ),
                E(
                  (g) => {
                    var f = L(
                        "min-h-[110px] w-full bg-layer3 shadow-lg rounded-xl flex items-center flex-col justify-center p-[0.5rem] pb-4 text-center",
                        e.containerClassName
                      ),
                      M = L(
                        "font-semibold text-[1.125rem] my-1 leading-[1.125rem] whitespace-nowrap px-4.5 py-2 bg-layer4 rounded flex flex-col gap-2 items-center text-secondary",
                        e.textClassName
                      );
                    return (
                      f !== g.e && z(x, (g.e = f)),
                      M !== g.t && z(y, (g.t = M)),
                      g
                    );
                  },
                  { e: void 0, t: void 0 }
                ),
                x
              );
            },
          })
        );
      },
    })
  );
}
var Xe = v('<div class="flex flex-col"><div>'),
  F = v("<div>");
function ft(e) {
  return (
    (t = Xe()),
    (a = t.firstChild),
    u(a, () => e.children),
    u(t, () => e.action, null),
    E(() =>
      z(
        a,
        L(
          "grid grid-cols-8 lg:grid-cols-12 bg-layer2 relative md:pb-0 rounded-lg",
          e.class
        )
      )
    ),
    t
  );
  var t, a;
}
function mt(e) {
  return (
    (a = F()),
    u(a, () => e.children, null),
    u(
      a,
      ((t = B(() => !!e.profit)),
      () =>
        t() &&
        r(
          Re,
          W(() => e.profit)
        )),
      null
    ),
    E(
      (c) => {
        var m = L(
            "order-1 lg:order-2 col-span-8 bg-layer4 dark:bg-[#292D2E] md:relative md:pt-2 flex flex-col rounded-t-xl lg:rounded-tl-none lg:rounded-bl-none lg:rounded-br-none lg:rounded-tr-xl lg:h-[37.5rem]",
            !e.removeContainerBackground && "light-game-view",
            e.class
          ),
          h = e.style;
        return m !== c.e && z(a, (c.e = m)), (c.t = q1(a, h, c.t)), c;
      },
      { e: void 0, t: void 0 }
    ),
    a
  );
  var t, a;
}
function pt(e) {
  return (
    (t = F()),
    u(t, () => e.children),
    E(() => z(t, L("flex-1 rounded-lg", e.class))),
    t
  );
  var t;
}
function vt(e) {
  const t = T1({ modes: [P.manual, P.auto] }, e),
    a = h1(() => ({
      [P.manual]: p("Manual"),
      [P.auto]: p("Auto"),
      [P.advance]: p("Advance"),
    }));
  return (
    (c = F()),
    u(
      c,
      r(Y1, {
        get defaultValue() {
          return t.defaultValue;
        },
        get onChange() {
          return t.onChange;
        },
        get disabled() {
          return t.disabled;
        },
        class: "flex flex-col relative lg:h-full",
        get children() {
          return [
            B(() => t.children),
            r(J1, {
              get class() {
                return L(
                  "w-full py-1 bg-layer4 overflow-hidden flex-shrink-0 rounded-none h-12",
                  "lg:order-first lg:border-b lg:border-input lg:sticky top-0 z-10 lg:rounded-t-xl lg:rounded-b-none",
                  { hidden: !t.modes.length || t.modes.length === 1 }
                );
              },
              get children() {
                return [
                  r(I, {
                    get each() {
                      return t.modes;
                    },
                    children: (m) =>
                      r(ee, {
                        value: m,
                        class: "flex-1",
                        get children() {
                          return a()[m];
                        },
                      }),
                  }),
                  r(te, {}),
                ];
              },
            }),
          ];
        },
      })
    ),
    E(() =>
      z(
        c,
        L(
          "col-span-8 lg:col-span-4 order-2 lg:order-none flex md:rounded-tl-xl flex-col gap-3 bg-layer4 rounded-t-none pt-1 lg:pt-0.5 lg:max-h-[37.5rem] lg:overflow-hidden",
          t.isMultiGame ? "" : "md:border-r border-input",
          t.class
        )
      )
    ),
    c
  );
  var c;
}
function xt(e) {
  return (
    (t = F()),
    u(t, () => e.children),
    E(() => z(t, L("order-3 lg:order-2 col-span-8 lg:col-span-4", e.class))),
    t
  );
  var t;
}
var Oe = v(
    '<div class="p-2 text-secondary"><h2 class="text-lg font-semibold"> ?</h2><p></p><p>'
  ),
  c1 = v("<span>");
const Ct = () => {
  const e = f1(),
    { system: t } = I1(),
    { coinFormat: a } = pe(),
    [c, m] = P1({});
  let h;
  e.game instanceof ie &&
    (h = e.game.betInfo$.subscribe((g) => {
      m(g);
    })),
    e.game instanceof oe &&
      (h = e.game.jackpot$.subscribe((g) => {
        m(g);
      })),
    O(() => {
      h && h.unsubscribe();
    });
  const k = h1(() =>
    Object.values(c).filter(
      (g) => g.maxProfitAmount > 0 && t.usdPrice[g.currencyName]
    )
  );
  return (
    (x = Oe()),
    (b = x.firstChild),
    (y = b.firstChild),
    (C = b.nextSibling),
    (V = C.nextSibling),
    u(b, () => p("Max Profits"), y),
    u(C, () =>
      p(
        "When your betting profit exceeds the maximum profit, the system will automatically settle to the maximum profit"
      )
    ),
    u(V, () =>
      p("Different currencies have different max profits as follows:")
    ),
    u(
      x,
      r(ge, {
        class: "text-[14px]",
        get children() {
          return [
            r(he, {
              get children() {
                return p("Maximum betting limits and profits by currency");
              },
            }),
            r(fe, {
              get children() {
                return r(l1, {
                  get children() {
                    return [
                      r(G, {
                        class: "text-left text-xs",
                        get children() {
                          return p("Currency");
                        },
                      }),
                      r(G, {
                        class: "text-center text-xs",
                        get children() {
                          return p("Max bet");
                        },
                      }),
                      r(G, {
                        class: "text-center text-xs",
                        get children() {
                          return p("Max profit");
                        },
                      }),
                    ];
                  },
                });
              },
            }),
            r(me, {
              get children() {
                return r(I, {
                  get each() {
                    return k();
                  },
                  children: (g) =>
                    r(l1, {
                      get children() {
                        return [
                          r(R, {
                            class: "text-left text-xs p-1",
                            get children() {
                              return U1.getAlias(g.currencyName);
                            },
                          }),
                          r(R, {
                            class: "text-center text-xs p-1",
                            get children() {
                              var f = c1();
                              return (
                                u(f, () =>
                                  a(new Q(g.maxBetAmount), g.currencyName)
                                ),
                                f
                              );
                            },
                          }),
                          r(R, {
                            class: "text-center text-xs p-1",
                            get children() {
                              var f = c1();
                              return (
                                u(f, () =>
                                  a(new Q(g.maxProfitAmount), g.currencyName)
                                ),
                                f
                              );
                            },
                          }),
                        ];
                      },
                    }),
                });
              },
            }),
          ];
        },
      }),
      null
    ),
    x
  );
  var x, b, y, C, V;
};
export {
  Ct as G,
  Y as T,
  ft as a,
  ht as b,
  vt as c,
  mt as d,
  pt as e,
  xt as f,
  gt as k,
  Fe as p,
  Te as t,
};
