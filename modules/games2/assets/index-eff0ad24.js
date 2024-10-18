var c =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function s(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function l(t) {
  if (t.__esModule) return t;
  var o = t.default;
  if (typeof o == "function") {
    var u = function r() {
      return this instanceof r
        ? Reflect.construct(o, arguments, this.constructor)
        : o.apply(this, arguments);
    };
    u.prototype = o.prototype;
  } else u = {};
  return (
    Object.defineProperty(u, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (r) {
      var e = Object.getOwnPropertyDescriptor(t, r);
      Object.defineProperty(
        u,
        r,
        e.get
          ? e
          : {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }
      );
    }),
    u
  );
}
var f,
  i = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (f = i),
  (function () {
    var t = {}.hasOwnProperty;
    function o() {
      for (var e = "", n = 0; n < arguments.length; n++) {
        var a = arguments[n];
        a && (e = r(e, u(a)));
      }
      return e;
    }
    function u(e) {
      if (typeof e == "string" || typeof e == "number") return e;
      if (typeof e != "object") return "";
      if (Array.isArray(e)) return o.apply(null, e);
      if (
        e.toString !== Object.prototype.toString &&
        !e.toString.toString().includes("[native code]")
      )
        return e.toString();
      var n = "";
      for (var a in e) t.call(e, a) && e[a] && (n = r(n, a));
      return n;
    }
    function r(e, n) {
      return n ? (e ? e + " " + n : e + n) : e;
    }
    f.exports ? ((o.default = o), (f.exports = o)) : (window.classNames = o);
  })();
const p = s(i.exports);
export { c as a, l as b, p as c, s as g };
