import { g as E } from "./index-eff0ad24.js";
var w,
  p = { exports: {} },
  c = typeof Reflect == "object" ? Reflect : null,
  l =
    c && typeof c.apply == "function"
      ? c.apply
      : function (e, t, n) {
          return Function.prototype.apply.call(e, t, n);
        };
w =
  c && typeof c.ownKeys == "function"
    ? c.ownKeys
    : Object.getOwnPropertySymbols
    ? function (e) {
        return Object.getOwnPropertyNames(e).concat(
          Object.getOwnPropertySymbols(e)
        );
      }
    : function (e) {
        return Object.getOwnPropertyNames(e);
      };
var h =
  Number.isNaN ||
  function (e) {
    return e != e;
  };
function u() {
  u.init.call(this);
}
(p.exports = u),
  (p.exports.once = function (e, t) {
    return new Promise(function (n, r) {
      function o(s) {
        e.removeListener(t, i), r(s);
      }
      function i() {
        typeof e.removeListener == "function" && e.removeListener("error", o),
          n([].slice.call(arguments));
      }
      _(e, t, i, { once: !0 }),
        t !== "error" &&
          (function (s, f, a) {
            typeof s.on == "function" && _(s, "error", f, a);
          })(e, o, { once: !0 });
    });
  }),
  (u.EventEmitter = u),
  (u.prototype._events = void 0),
  (u.prototype._eventsCount = 0),
  (u.prototype._maxListeners = void 0);
var m = 10;
function v(e) {
  if (typeof e != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof e
    );
}
function b(e) {
  return e._maxListeners === void 0 ? u.defaultMaxListeners : e._maxListeners;
}
function y(e, t, n, r) {
  var o, i, s;
  if (
    (v(n),
    (i = e._events) === void 0
      ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
      : (i.newListener !== void 0 &&
          (e.emit("newListener", t, n.listener ? n.listener : n),
          (i = e._events)),
        (s = i[t])),
    s === void 0)
  )
    (s = i[t] = n), ++e._eventsCount;
  else if (
    (typeof s == "function"
      ? (s = i[t] = r ? [n, s] : [s, n])
      : r
      ? s.unshift(n)
      : s.push(n),
    (o = b(e)) > 0 && s.length > o && !s.warned)
  ) {
    s.warned = !0;
    var f = new Error(
      "Possible EventEmitter memory leak detected. " +
        s.length +
        " " +
        String(t) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (f.name = "MaxListenersExceededWarning"),
      (f.emitter = e),
      (f.type = t),
      (f.count = s.length);
  }
  return e;
}
function j() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function d(e, t, n) {
  var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
    o = j.bind(r);
  return (o.listener = n), (r.wrapFn = o), o;
}
function g(e, t, n) {
  var r = e._events;
  if (r === void 0) return [];
  var o = r[t];
  return o === void 0
    ? []
    : typeof o == "function"
    ? n
      ? [o.listener || o]
      : [o]
    : n
    ? (function (i) {
        for (var s = new Array(i.length), f = 0; f < s.length; ++f)
          s[f] = i[f].listener || i[f];
        return s;
      })(o)
    : x(o, o.length);
}
function L(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function") return 1;
    if (n !== void 0) return n.length;
  }
  return 0;
}
function x(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n;
}
function _(e, t, n, r) {
  if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
  else {
    if (typeof e.addEventListener != "function")
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof e
      );
    e.addEventListener(t, function o(i) {
      r.once && e.removeEventListener(t, o), n(i);
    });
  }
}
Object.defineProperty(u, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return m;
  },
  set: function (e) {
    if (typeof e != "number" || e < 0 || h(e))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          e +
          "."
      );
    m = e;
  },
}),
  (u.init = function () {
    (this._events !== void 0 &&
      this._events !== Object.getPrototypeOf(this)._events) ||
      ((this._events = Object.create(null)), (this._eventsCount = 0)),
      (this._maxListeners = this._maxListeners || void 0);
  }),
  (u.prototype.setMaxListeners = function (e) {
    if (typeof e != "number" || e < 0 || h(e))
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' +
          e +
          "."
      );
    return (this._maxListeners = e), this;
  }),
  (u.prototype.getMaxListeners = function () {
    return b(this);
  }),
  (u.prototype.emit = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
    var r = e === "error",
      o = this._events;
    if (o !== void 0) r = r && o.error === void 0;
    else if (!r) return !1;
    if (r) {
      var i;
      if ((t.length > 0 && (i = t[0]), i instanceof Error)) throw i;
      var s = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
      throw ((s.context = i), s);
    }
    var f = o[e];
    if (f === void 0) return !1;
    if (typeof f == "function") l(f, this, t);
    else {
      var a = f.length,
        O = x(f, a);
      for (n = 0; n < a; ++n) l(O[n], this, t);
    }
    return !0;
  }),
  (u.prototype.addListener = function (e, t) {
    return y(this, e, t, !1);
  }),
  (u.prototype.on = u.prototype.addListener),
  (u.prototype.prependListener = function (e, t) {
    return y(this, e, t, !0);
  }),
  (u.prototype.once = function (e, t) {
    return v(t), this.on(e, d(this, e, t)), this;
  }),
  (u.prototype.prependOnceListener = function (e, t) {
    return v(t), this.prependListener(e, d(this, e, t)), this;
  }),
  (u.prototype.removeListener = function (e, t) {
    var n, r, o, i, s;
    if ((v(t), (r = this._events) === void 0)) return this;
    if ((n = r[e]) === void 0) return this;
    if (n === t || n.listener === t)
      --this._eventsCount == 0
        ? (this._events = Object.create(null))
        : (delete r[e],
          r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if (typeof n != "function") {
      for (o = -1, i = n.length - 1; i >= 0; i--)
        if (n[i] === t || n[i].listener === t) {
          (s = n[i].listener), (o = i);
          break;
        }
      if (o < 0) return this;
      o === 0
        ? n.shift()
        : (function (f, a) {
            for (; a + 1 < f.length; a++) f[a] = f[a + 1];
            f.pop();
          })(n, o),
        n.length === 1 && (r[e] = n[0]),
        r.removeListener !== void 0 && this.emit("removeListener", e, s || t);
    }
    return this;
  }),
  (u.prototype.off = u.prototype.removeListener),
  (u.prototype.removeAllListeners = function (e) {
    var t, n, r;
    if ((n = this._events) === void 0) return this;
    if (n.removeListener === void 0)
      return (
        arguments.length === 0
          ? ((this._events = Object.create(null)), (this._eventsCount = 0))
          : n[e] !== void 0 &&
            (--this._eventsCount == 0
              ? (this._events = Object.create(null))
              : delete n[e]),
        this
      );
    if (arguments.length === 0) {
      var o,
        i = Object.keys(n);
      for (r = 0; r < i.length; ++r)
        (o = i[r]) !== "removeListener" && this.removeAllListeners(o);
      return (
        this.removeAllListeners("removeListener"),
        (this._events = Object.create(null)),
        (this._eventsCount = 0),
        this
      );
    }
    if (typeof (t = n[e]) == "function") this.removeListener(e, t);
    else if (t !== void 0)
      for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
    return this;
  }),
  (u.prototype.listeners = function (e) {
    return g(this, e, !0);
  }),
  (u.prototype.rawListeners = function (e) {
    return g(this, e, !1);
  }),
  (u.listenerCount = function (e, t) {
    return typeof e.listenerCount == "function"
      ? e.listenerCount(t)
      : L.call(e, t);
  }),
  (u.prototype.listenerCount = L),
  (u.prototype.eventNames = function () {
    return this._eventsCount > 0 ? w(this._events) : [];
  });
var C = p.exports;
const R = E(C);
export { R as E, C as e };
