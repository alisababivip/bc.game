var nn = Object.defineProperty;
var Zt = Object.getOwnPropertySymbols;
var rn = Object.prototype.hasOwnProperty,
  on = Object.prototype.propertyIsEnumerable;
var te = (t, e, n) =>
    e in t
      ? nn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  et = (t, e) => {
    for (var n in e || (e = {})) rn.call(e, n) && te(t, n, e[n]);
    if (Zt) for (var n of Zt(e)) on.call(e, n) && te(t, n, e[n]);
    return t;
  };
var St = (t, e, n) =>
  new Promise((r, o) => {
    var s = (c) => {
        try {
          a(n.next(c));
        } catch (f) {
          o(f);
        }
      },
      i = (c) => {
        try {
          a(n.throw(c));
        } catch (f) {
          o(f);
        }
      },
      a = (c) => (c.done ? r(c.value) : Promise.resolve(c.value).then(s, i));
    a((n = n.apply(t, e)).next());
  });
import {
  i as ot,
  c as st,
  b as sn,
  t as dt,
  e as ee,
  s as an,
  a as cn,
} from "./web-da7da7e5.js";
import { B as un, e as ln, L as fn, k as dn } from "./manifest-e0f0ba59.js";
import { W as hn } from "./Icon-b6e375d0.js";
import { t as ne } from "./i18n-9b1e4bd8.js";
import { b as ye, d as gn } from "./solid-js-2e15682c.js";
function Ee(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: mn } = Object.prototype,
  { getPrototypeOf: $t } = Object,
  ht = ((t) => (e) => {
    const n = mn.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _ = (t) => ((t = t.toLowerCase()), (e) => ht(e) === t),
  gt = (t) => (e) => typeof e === t,
  { isArray: V } = Array,
  Y = gt("undefined");
function pn(t) {
  return (
    t !== null &&
    !Y(t) &&
    t.constructor !== null &&
    !Y(t.constructor) &&
    P(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const Ae = _("ArrayBuffer");
function wn(t) {
  let e;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && Ae(t.buffer)),
    e
  );
}
const yn = gt("string"),
  P = gt("function"),
  be = gt("number"),
  mt = (t) => t !== null && typeof t == "object",
  En = (t) => t === !0 || t === !1,
  it = (t) => {
    if (ht(t) !== "object") return !1;
    const e = $t(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  An = _("Date"),
  bn = _("File"),
  Cn = _("Blob"),
  Sn = _("FileList"),
  Rn = (t) => mt(t) && P(t.pipe),
  Tn = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (P(t.append) &&
          ((e = ht(t)) === "formdata" ||
            (e === "object" &&
              P(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  Bn = _("URLSearchParams"),
  Nn = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Q(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t == "undefined") return;
  let r, o;
  if ((typeof t != "object" && (t = [t]), V(t)))
    for (r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      i = s.length;
    let a;
    for (r = 0; r < i; r++) (a = s[r]), e.call(null, t[a], a, t);
  }
}
function Ce(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), e === o.toLowerCase())) return o;
  return null;
}
const Se = (() =>
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : global)(),
  Re = (t) => !Y(t) && t !== Se;
function Ft() {
  const { caseless: t } = (Re(this) && this) || {},
    e = {},
    n = (r, o) => {
      const s = (t && Ce(e, o)) || o;
      it(e[s]) && it(r)
        ? (e[s] = Ft(e[s], r))
        : it(r)
        ? (e[s] = Ft({}, r))
        : V(r)
        ? (e[s] = r.slice())
        : (e[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Q(arguments[r], n);
  return e;
}
const Pn = (t, e, n, { allOwnKeys: r } = {}) => (
    Q(
      e,
      (o, s) => {
        n && P(o) ? (t[s] = Ee(o, n)) : (t[s] = o);
      },
      { allOwnKeys: r }
    ),
    t
  ),
  On = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  In = (t, e, n, r) => {
    (t.prototype = Object.create(e.prototype, r)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  Ln = (t, e, n, r) => {
    let o, s, i;
    const a = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (o = Object.getOwnPropertyNames(t), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, t, e)) && !a[i] && ((e[i] = t[i]), (a[i] = !0));
      t = n !== !1 && $t(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  _n = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const r = t.indexOf(e, n);
    return r !== -1 && r === n;
  },
  Fn = (t) => {
    if (!t) return null;
    if (V(t)) return t;
    let e = t.length;
    if (!be(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  Mn = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array != "undefined" && $t(Uint8Array)),
  Dn = (t, e) => {
    const r = (t && t[Symbol.iterator]).call(t);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      e.call(t, s[0], s[1]);
    }
  },
  Un = (t, e) => {
    let n;
    const r = [];
    for (; (n = t.exec(e)) !== null; ) r.push(n);
    return r;
  },
  kn = _("HTMLFormElement"),
  xn = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  re = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  jn = _("RegExp"),
  Te = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      r = {};
    Q(n, (o, s) => {
      let i;
      (i = e(o, s, t)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(t, r);
  },
  Hn = (t) => {
    Te(t, (e, n) => {
      if (P(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = t[n];
      if (P(r)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  zn = (t, e) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return V(t) ? r(t) : r(String(t).split(e)), n;
  },
  $n = () => {},
  qn = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
  Rt = "abcdefghijklmnopqrstuvwxyz",
  oe = "0123456789",
  Be = { DIGIT: oe, ALPHA: Rt, ALPHA_DIGIT: Rt + Rt.toUpperCase() + oe },
  Jn = (t = 16, e = Be.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = e;
    for (; t--; ) n += e[(Math.random() * r) | 0];
    return n;
  };
function Vn(t) {
  return !!(
    t &&
    P(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const vn = (t) => {
    const e = new Array(10),
      n = (r, o) => {
        if (mt(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[o] = r;
            const s = V(r) ? [] : {};
            return (
              Q(r, (i, a) => {
                const c = n(i, o + 1);
                !Y(c) && (s[a] = c);
              }),
              (e[o] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(t, 0);
  },
  Kn = _("AsyncFunction"),
  Wn = (t) => t && (mt(t) || P(t)) && P(t.then) && P(t.catch),
  u = {
    isArray: V,
    isArrayBuffer: Ae,
    isBuffer: pn,
    isFormData: Tn,
    isArrayBufferView: wn,
    isString: yn,
    isNumber: be,
    isBoolean: En,
    isObject: mt,
    isPlainObject: it,
    isUndefined: Y,
    isDate: An,
    isFile: bn,
    isBlob: Cn,
    isRegExp: jn,
    isFunction: P,
    isStream: Rn,
    isURLSearchParams: Bn,
    isTypedArray: Mn,
    isFileList: Sn,
    forEach: Q,
    merge: Ft,
    extend: Pn,
    trim: Nn,
    stripBOM: On,
    inherits: In,
    toFlatObject: Ln,
    kindOf: ht,
    kindOfTest: _,
    endsWith: _n,
    toArray: Fn,
    forEachEntry: Dn,
    matchAll: Un,
    isHTMLForm: kn,
    hasOwnProperty: re,
    hasOwnProp: re,
    reduceDescriptors: Te,
    freezeMethods: Hn,
    toObjectSet: zn,
    toCamelCase: xn,
    noop: $n,
    toFiniteNumber: qn,
    findKey: Ce,
    global: Se,
    isContextDefined: Re,
    ALPHABET: Be,
    generateString: Jn,
    isSpecCompliantForm: Vn,
    toJSONObject: vn,
    isAsyncFn: Kn,
    isThenable: Wn,
  };
function C(t, e, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
u.inherits(C, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: u.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Ne = C.prototype,
  Pe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  Pe[t] = { value: t };
});
Object.defineProperties(C, Pe);
Object.defineProperty(Ne, "isAxiosError", { value: !0 });
C.from = (t, e, n, r, o, s) => {
  const i = Object.create(Ne);
  return (
    u.toFlatObject(
      t,
      i,
      function (c) {
        return c !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    C.call(i, t.message, e, n, r, o),
    (i.cause = t),
    (i.name = t.name),
    s && Object.assign(i, s),
    i
  );
};
const Yn = null;
function Mt(t) {
  return u.isPlainObject(t) || u.isArray(t);
}
function Oe(t) {
  return u.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function se(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (o, s) {
          return (o = Oe(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : e;
}
function Gn(t) {
  return u.isArray(t) && !t.some(Mt);
}
const Qn = u.toFlatObject(u, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function pt(t, e, n) {
  if (!u.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (n = u.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, b) {
        return !u.isUndefined(b[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || l,
    s = n.dots,
    i = n.indexes,
    c =
      (n.Blob || (typeof Blob != "undefined" && Blob)) &&
      u.isSpecCompliantForm(e);
  if (!u.isFunction(o)) throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (u.isDate(h)) return h.toISOString();
    if (!c && u.isBlob(h))
      throw new C("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(h) || u.isTypedArray(h)
      ? c && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function l(h, g, b) {
    let w = h;
    if (h && !b && typeof h == "object") {
      if (u.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (u.isArray(h) && Gn(h)) ||
        ((u.isFileList(h) || u.endsWith(g, "[]")) && (w = u.toArray(h)))
      )
        return (
          (g = Oe(g)),
          w.forEach(function (y, E) {
            !(u.isUndefined(y) || y === null) &&
              e.append(
                i === !0 ? se([g], E, s) : i === null ? g : g + "[]",
                f(y)
              );
          }),
          !1
        );
    }
    return Mt(h) ? !0 : (e.append(se(b, g, s), f(h)), !1);
  }
  const d = [],
    m = Object.assign(Qn, {
      defaultVisitor: l,
      convertValue: f,
      isVisitable: Mt,
    });
  function p(h, g) {
    if (!u.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(h),
        u.forEach(h, function (w, A) {
          (!(u.isUndefined(w) || w === null) &&
            o.call(e, w, u.isString(A) ? A.trim() : A, g, m)) === !0 &&
            p(w, g ? g.concat(A) : [A]);
        }),
        d.pop();
    }
  }
  if (!u.isObject(t)) throw new TypeError("data must be an object");
  return p(t), e;
}
function ie(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function qt(t, e) {
  (this._pairs = []), t && pt(t, this, e);
}
const Ie = qt.prototype;
Ie.append = function (e, n) {
  this._pairs.push([e, n]);
};
Ie.toString = function (e) {
  const n = e
    ? function (r) {
        return e.call(this, r, ie);
      }
    : ie;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Xn(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Le(t, e, n) {
  if (!e) return t;
  const r = (n && n.encode) || Xn,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(e, n))
      : (s = u.isURLSearchParams(e) ? e.toString() : new qt(e, n).toString(r)),
    s)
  ) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return t;
}
class Zn {
  constructor() {
    this.handlers = [];
  }
  use(e, n, r) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    u.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const ae = Zn,
  _e = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  tr = typeof URLSearchParams != "undefined" ? URLSearchParams : qt,
  er = typeof FormData != "undefined" ? FormData : null,
  nr = typeof Blob != "undefined" ? Blob : null,
  rr = {
    isBrowser: !0,
    classes: { URLSearchParams: tr, FormData: er, Blob: nr },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Fe = typeof window != "undefined" && typeof document != "undefined",
  or = ((t) => Fe && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(
    typeof navigator != "undefined" && navigator.product
  ),
  sr = (() =>
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  ir = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Fe,
        hasStandardBrowserEnv: or,
        hasStandardBrowserWebWorkerEnv: sr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  L = et(et({}, ir), rr);
function ar(t, e) {
  return pt(
    t,
    new L.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return L.isNode && u.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function cr(t) {
  return u
    .matchAll(/\w+|\[(\w*)]/g, t)
    .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function ur(t) {
  const e = {},
    n = Object.keys(t);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (e[s] = t[s]);
  return e;
}
function Me(t) {
  function e(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      c = s >= n.length;
    return (
      (i = !i && u.isArray(o) ? o.length : i),
      c
        ? (u.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !u.isObject(o[i])) && (o[i] = []),
          e(n, r, o[i], s) && u.isArray(o[i]) && (o[i] = ur(o[i])),
          !a)
    );
  }
  if (u.isFormData(t) && u.isFunction(t.entries)) {
    const n = {};
    return (
      u.forEachEntry(t, (r, o) => {
        e(cr(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function lr(t, e, n) {
  if (u.isString(t))
    try {
      return (e || JSON.parse)(t), u.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(t);
}
const Jt = {
  transitional: _e,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (e, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = u.isObject(e);
      if ((s && u.isHTMLForm(e) && (e = new FormData(e)), u.isFormData(e)))
        return o ? JSON.stringify(Me(e)) : e;
      if (
        u.isArrayBuffer(e) ||
        u.isBuffer(e) ||
        u.isStream(e) ||
        u.isFile(e) ||
        u.isBlob(e)
      )
        return e;
      if (u.isArrayBufferView(e)) return e.buffer;
      if (u.isURLSearchParams(e))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ar(e, this.formSerializer).toString();
        if ((a = u.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return pt(
            a ? { "files[]": e } : e,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), lr(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || Jt.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (e && u.isString(e) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(e);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? C.from(a, C.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: L.classes.FormData, Blob: L.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
u.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Jt.headers[t] = {};
});
const Vt = Jt,
  fr = u.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  dr = (t) => {
    const e = {};
    let n, r, o;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (e[n] && fr[n])) &&
                (n === "set-cookie"
                  ? e[n]
                    ? e[n].push(r)
                    : (e[n] = [r])
                  : (e[n] = e[n] ? e[n] + ", " + r : r));
          }),
      e
    );
  },
  ce = Symbol("internals");
function K(t) {
  return t && String(t).trim().toLowerCase();
}
function at(t) {
  return t === !1 || t == null ? t : u.isArray(t) ? t.map(at) : String(t);
}
function hr(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(t)); ) e[r[1]] = r[2];
  return e;
}
const gr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Tt(t, e, n, r, o) {
  if (u.isFunction(r)) return r.call(this, e, n);
  if ((o && (e = n), !!u.isString(e))) {
    if (u.isString(r)) return e.indexOf(r) !== -1;
    if (u.isRegExp(r)) return r.test(e);
  }
}
function mr(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function pr(t, e) {
  const n = u.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, e, o, s, i);
      },
      configurable: !0,
    });
  });
}
class wt {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function s(a, c, f) {
      const l = K(c);
      if (!l) throw new Error("header name must be a non-empty string");
      const d = u.findKey(o, l);
      (!d || o[d] === void 0 || f === !0 || (f === void 0 && o[d] !== !1)) &&
        (o[d || c] = at(a));
    }
    const i = (a, c) => u.forEach(a, (f, l) => s(f, l, c));
    return (
      u.isPlainObject(e) || e instanceof this.constructor
        ? i(e, n)
        : u.isString(e) && (e = e.trim()) && !gr(e)
        ? i(dr(e), n)
        : e != null && s(n, e, r),
      this
    );
  }
  get(e, n) {
    if (((e = K(e)), e)) {
      const r = u.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return hr(o);
        if (u.isFunction(n)) return n.call(this, o, r);
        if (u.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (((e = K(e)), e)) {
      const r = u.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Tt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = K(i)), i)) {
        const a = u.findKey(r, i);
        a && (!n || Tt(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return u.isArray(e) ? e.forEach(s) : s(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || Tt(this, this[s], s, e, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(e) {
    const n = this,
      r = {};
    return (
      u.forEach(this, (o, s) => {
        const i = u.findKey(r, s);
        if (i) {
          (n[i] = at(o)), delete n[s];
          return;
        }
        const a = e ? mr(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = at(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      u.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = e && u.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[ce] = this[ce] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const a = K(i);
      r[a] || (pr(o, i), (r[a] = !0));
    }
    return u.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
wt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
u.reduceDescriptors(wt.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    },
  };
});
u.freezeMethods(wt);
const D = wt;
function Bt(t, e) {
  const n = this || Vt,
    r = e || n,
    o = D.from(r.headers);
  let s = r.data;
  return (
    u.forEach(t, function (a) {
      s = a.call(n, s, o.normalize(), e ? e.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function De(t) {
  return !!(t && t.__CANCEL__);
}
function X(t, e, n) {
  C.call(this, t == null ? "canceled" : t, C.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
u.inherits(X, C, { __CANCEL__: !0 });
function wr(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? t(n)
    : e(
        new C(
          "Request failed with status code " + n.status,
          [C.ERR_BAD_REQUEST, C.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const yr = L.hasStandardBrowserEnv
  ? {
      write(t, e, n, r, o, s) {
        const i = [t + "=" + encodeURIComponent(e)];
        u.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          u.isString(r) && i.push("path=" + r),
          u.isString(o) && i.push("domain=" + o),
          s === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(t) {
        const e = document.cookie.match(
          new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
        );
        return e ? decodeURIComponent(e[3]) : null;
      },
      remove(t) {
        this.write(t, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Er(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ar(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ue(t, e) {
  return t && !Er(e) ? Ar(t, e) : e;
}
const br = L.hasStandardBrowserEnv
  ? (function () {
      const e = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(s) {
        let i = s;
        return (
          e && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (i) {
          const a = u.isString(i) ? o(i) : i;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Cr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function Sr(t, e) {
  t = t || 10;
  const n = new Array(t),
    r = new Array(t);
  let o = 0,
    s = 0,
    i;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (c) {
      const f = Date.now(),
        l = r[s];
      i || (i = f), (n[o] = c), (r[o] = f);
      let d = s,
        m = 0;
      for (; d !== o; ) (m += n[d++]), (d = d % t);
      if (((o = (o + 1) % t), o === s && (s = (s + 1) % t), f - i < e)) return;
      const p = l && f - l;
      return p ? Math.round((m * 1e3) / p) : void 0;
    }
  );
}
function ue(t, e) {
  let n = 0;
  const r = Sr(50, 250);
  return (o) => {
    const s = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      a = s - n,
      c = r(a),
      f = s <= i;
    n = s;
    const l = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && i && f ? (i - s) / c : void 0,
      event: o,
    };
    (l[e ? "download" : "upload"] = !0), t(l);
  };
}
const Rr = typeof XMLHttpRequest != "undefined",
  Tr =
    Rr &&
    function (t) {
      return new Promise(function (n, r) {
        let o = t.data;
        const s = D.from(t.headers).normalize();
        let { responseType: i, withXSRFToken: a } = t,
          c;
        function f() {
          t.cancelToken && t.cancelToken.unsubscribe(c),
            t.signal && t.signal.removeEventListener("abort", c);
        }
        let l;
        if (u.isFormData(o)) {
          if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1);
          else if ((l = s.getContentType()) !== !1) {
            const [g, ...b] = l
              ? l
                  .split(";")
                  .map((w) => w.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([g || "multipart/form-data", ...b].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (t.auth) {
          const g = t.auth.username || "",
            b = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(g + ":" + b));
        }
        const m = Ue(t.baseURL, t.url);
        d.open(t.method.toUpperCase(), Le(m, t.params, t.paramsSerializer), !0),
          (d.timeout = t.timeout);
        function p() {
          if (!d) return;
          const g = D.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            w = {
              data:
                !i || i === "text" || i === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: g,
              config: t,
              request: d,
            };
          wr(
            function (y) {
              n(y), f();
            },
            function (y) {
              r(y), f();
            },
            w
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = p)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (d.onabort = function () {
            d &&
              (r(new C("Request aborted", C.ECONNABORTED, t, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new C("Network Error", C.ERR_NETWORK, t, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let b = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = t.transitional || _e;
            t.timeoutErrorMessage && (b = t.timeoutErrorMessage),
              r(
                new C(
                  b,
                  w.clarifyTimeoutError ? C.ETIMEDOUT : C.ECONNABORTED,
                  t,
                  d
                )
              ),
              (d = null);
          }),
          L.hasStandardBrowserEnv &&
            (a && u.isFunction(a) && (a = a(t)), a || (a !== !1 && br(m))))
        ) {
          const g =
            t.xsrfHeaderName && t.xsrfCookieName && yr.read(t.xsrfCookieName);
          g && s.set(t.xsrfHeaderName, g);
        }
        o === void 0 && s.setContentType(null),
          "setRequestHeader" in d &&
            u.forEach(s.toJSON(), function (b, w) {
              d.setRequestHeader(w, b);
            }),
          u.isUndefined(t.withCredentials) ||
            (d.withCredentials = !!t.withCredentials),
          i && i !== "json" && (d.responseType = t.responseType),
          typeof t.onDownloadProgress == "function" &&
            d.addEventListener("progress", ue(t.onDownloadProgress, !0)),
          typeof t.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", ue(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((c = (g) => {
              d &&
                (r(!g || g.type ? new X(null, t, d) : g),
                d.abort(),
                (d = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(c),
            t.signal &&
              (t.signal.aborted ? c() : t.signal.addEventListener("abort", c)));
        const h = Cr(m);
        if (h && L.protocols.indexOf(h) === -1) {
          r(new C("Unsupported protocol " + h + ":", C.ERR_BAD_REQUEST, t));
          return;
        }
        d.send(o || null);
      });
    },
  Dt = { http: Yn, xhr: Tr };
u.forEach(Dt, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch (n) {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const le = (t) => `- ${t}`,
  Br = (t) => u.isFunction(t) || t === null || t === !1,
  ke = {
    getAdapter: (t) => {
      t = u.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, r;
      const o = {};
      for (let s = 0; s < e; s++) {
        n = t[s];
        let i;
        if (
          ((r = n),
          !Br(n) && ((r = Dt[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new C(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([a, c]) =>
            `adapter ${a} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = e
          ? s.length > 1
            ? `since :
` +
              s.map(le).join(`
`)
            : " " + le(s[0])
          : "as no adapter specified";
        throw new C(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Dt,
  };
function Nt(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new X(null, t);
}
function fe(t) {
  return (
    Nt(t),
    (t.headers = D.from(t.headers)),
    (t.data = Bt.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    ke
      .getAdapter(t.adapter || Vt.adapter)(t)
      .then(
        function (r) {
          return (
            Nt(t),
            (r.data = Bt.call(t, t.transformResponse, r)),
            (r.headers = D.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            De(r) ||
              (Nt(t),
              r &&
                r.response &&
                ((r.response.data = Bt.call(
                  t,
                  t.transformResponse,
                  r.response
                )),
                (r.response.headers = D.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const de = (t) => (t instanceof D ? et({}, t) : t);
function H(t, e) {
  e = e || {};
  const n = {};
  function r(f, l, d) {
    return u.isPlainObject(f) && u.isPlainObject(l)
      ? u.merge.call({ caseless: d }, f, l)
      : u.isPlainObject(l)
      ? u.merge({}, l)
      : u.isArray(l)
      ? l.slice()
      : l;
  }
  function o(f, l, d) {
    if (u.isUndefined(l)) {
      if (!u.isUndefined(f)) return r(void 0, f, d);
    } else return r(f, l, d);
  }
  function s(f, l) {
    if (!u.isUndefined(l)) return r(void 0, l);
  }
  function i(f, l) {
    if (u.isUndefined(l)) {
      if (!u.isUndefined(f)) return r(void 0, f);
    } else return r(void 0, l);
  }
  function a(f, l, d) {
    if (d in e) return r(f, l);
    if (d in t) return r(void 0, f);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (f, l) => o(de(f), de(l), !0),
  };
  return (
    u.forEach(Object.keys(Object.assign({}, t, e)), function (l) {
      const d = c[l] || o,
        m = d(t[l], e[l], l);
      (u.isUndefined(m) && d !== a) || (n[l] = m);
    }),
    n
  );
}
const xe = "1.6.8",
  vt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    vt[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const he = {};
vt.transitional = function (e, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      xe +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, a) => {
    if (e === !1)
      throw new C(
        o(i, " has been removed" + (n ? " in " + n : "")),
        C.ERR_DEPRECATED
      );
    return (
      n &&
        !he[i] &&
        ((he[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      e ? e(s, i, a) : !0
    );
  };
};
function Nr(t, e, n) {
  if (typeof t != "object")
    throw new C("options must be an object", C.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = e[s];
    if (i) {
      const a = t[s],
        c = a === void 0 || i(a, s, t);
      if (c !== !0)
        throw new C("option " + s + " must be " + c, C.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new C("Unknown option " + s, C.ERR_BAD_OPTION);
  }
}
const Ut = { assertOptions: Nr, validators: vt },
  k = Ut.validators;
class ut {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new ae(), response: new ae() });
  }
  request(e, n) {
    return St(this, null, function* () {
      try {
        return yield this._request(e, n);
      } catch (r) {
        if (r instanceof Error) {
          let o;
          Error.captureStackTrace
            ? Error.captureStackTrace((o = {}))
            : (o = new Error());
          const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        }
        throw r;
      }
    });
  }
  _request(e, n) {
    typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = H(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      Ut.assertOptions(
        r,
        {
          silentJSONParsing: k.transitional(k.boolean),
          forcedJSONParsing: k.transitional(k.boolean),
          clarifyTimeoutError: k.transitional(k.boolean),
        },
        !1
      ),
      o != null &&
        (u.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ut.assertOptions(
              o,
              { encode: k.function, serialize: k.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = s && u.merge(s.common, s[n.method]);
    s &&
      u.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete s[h];
        }
      ),
      (n.headers = D.concat(i, s));
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((c = c && g.synchronous), a.unshift(g.fulfilled, g.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (g) {
      f.push(g.fulfilled, g.rejected);
    });
    let l,
      d = 0,
      m;
    if (!c) {
      const h = [fe.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, f),
          m = h.length,
          l = Promise.resolve(n);
        d < m;

      )
        l = l.then(h[d++], h[d++]);
      return l;
    }
    m = a.length;
    let p = n;
    for (d = 0; d < m; ) {
      const h = a[d++],
        g = a[d++];
      try {
        p = h(p);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      l = fe.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, m = f.length; d < m; ) l = l.then(f[d++], f[d++]);
    return l;
  }
  getUri(e) {
    e = H(this.defaults, e);
    const n = Ue(e.baseURL, e.url);
    return Le(n, e.params, e.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function (e) {
  ut.prototype[e] = function (n, r) {
    return this.request(
      H(r || {}, { method: e, url: n, data: (r || {}).data })
    );
  };
});
u.forEach(["post", "put", "patch"], function (e) {
  function n(r) {
    return function (s, i, a) {
      return this.request(
        H(a || {}, {
          method: e,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (ut.prototype[e] = n()), (ut.prototype[e + "Form"] = n(!0));
});
const ct = ut;
class Kt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let s;
        const i = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(s);
          }),
          i
        );
      }),
      e(function (s, i, a) {
        r.reason || ((r.reason = new X(s, i, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let e;
    return {
      token: new Kt(function (o) {
        e = o;
      }),
      cancel: e,
    };
  }
}
const Pr = Kt;
function Or(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function Ir(t) {
  return u.isObject(t) && t.isAxiosError === !0;
}
const kt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(kt).forEach(([t, e]) => {
  kt[e] = t;
});
const Lr = kt;
function je(t) {
  const e = new ct(t),
    n = Ee(ct.prototype.request, e);
  return (
    u.extend(n, ct.prototype, e, { allOwnKeys: !0 }),
    u.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return je(H(t, o));
    }),
    n
  );
}
const T = je(Vt);
T.Axios = ct;
T.CanceledError = X;
T.CancelToken = Pr;
T.isCancel = De;
T.VERSION = xe;
T.toFormData = pt;
T.AxiosError = C;
T.Cancel = T.CanceledError;
T.all = function (e) {
  return Promise.all(e);
};
T.spread = Or;
T.isAxiosError = Ir;
T.mergeConfig = H;
T.AxiosHeaders = D;
T.formToJSON = (t) => Me(u.isHTMLForm(t) ? new FormData(t) : t);
T.getAdapter = ke.getAdapter;
T.HttpStatusCode = Lr;
T.default = T;
const _r = T;
var Z = {},
  Fr = function () {
    return (
      typeof Promise == "function" &&
      Promise.prototype &&
      Promise.prototype.then
    );
  },
  He = {},
  N = {};
let Wt;
const Mr = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
  2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
];
N.getSymbolSize = function (e) {
  if (!e) throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
N.getSymbolTotalCodewords = function (e) {
  return Mr[e];
};
N.getBCHDigit = function (t) {
  let e = 0;
  for (; t !== 0; ) e++, (t >>>= 1);
  return e;
};
N.setToSJISFunction = function (e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Wt = e;
};
N.isKanjiModeEnabled = function () {
  return typeof Wt != "undefined";
};
N.toSJIS = function (e) {
  return Wt(e);
};
var yt = {};
(function (t) {
  (t.L = { bit: 1 }),
    (t.M = { bit: 0 }),
    (t.Q = { bit: 3 }),
    (t.H = { bit: 2 });
  function e(n) {
    if (typeof n != "string") throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  (t.isValid = function (r) {
    return r && typeof r.bit != "undefined" && r.bit >= 0 && r.bit < 4;
  }),
    (t.from = function (r, o) {
      if (t.isValid(r)) return r;
      try {
        return e(r);
      } catch (s) {
        return o;
      }
    });
})(yt);
function ze() {
  (this.buffer = []), (this.length = 0);
}
ze.prototype = {
  get: function (t) {
    const e = Math.floor(t / 8);
    return ((this.buffer[e] >>> (7 - (t % 8))) & 1) === 1;
  },
  put: function (t, e) {
    for (let n = 0; n < e; n++) this.putBit(((t >>> (e - n - 1)) & 1) === 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (t) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0),
      t && (this.buffer[e] |= 128 >>> this.length % 8),
      this.length++;
  },
};
var Dr = ze;
function tt(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  (this.size = t),
    (this.data = new Uint8Array(t * t)),
    (this.reservedBit = new Uint8Array(t * t));
}
tt.prototype.set = function (t, e, n, r) {
  const o = t * this.size + e;
  (this.data[o] = n), r && (this.reservedBit[o] = !0);
};
tt.prototype.get = function (t, e) {
  return this.data[t * this.size + e];
};
tt.prototype.xor = function (t, e, n) {
  this.data[t * this.size + e] ^= n;
};
tt.prototype.isReserved = function (t, e) {
  return this.reservedBit[t * this.size + e];
};
var Ur = tt,
  $e = {};
(function (t) {
  const e = N.getSymbolSize;
  (t.getRowColCoords = function (r) {
    if (r === 1) return [];
    const o = Math.floor(r / 7) + 2,
      s = e(r),
      i = s === 145 ? 26 : Math.ceil((s - 13) / (2 * o - 2)) * 2,
      a = [s - 7];
    for (let c = 1; c < o - 1; c++) a[c] = a[c - 1] - i;
    return a.push(6), a.reverse();
  }),
    (t.getPositions = function (r) {
      const o = [],
        s = t.getRowColCoords(r),
        i = s.length;
      for (let a = 0; a < i; a++)
        for (let c = 0; c < i; c++)
          (a === 0 && c === 0) ||
            (a === 0 && c === i - 1) ||
            (a === i - 1 && c === 0) ||
            o.push([s[a], s[c]]);
      return o;
    });
})($e);
var qe = {};
const kr = N.getSymbolSize,
  ge = 7;
qe.getPositions = function (e) {
  const n = kr(e);
  return [
    [0, 0],
    [n - ge, 0],
    [0, n - ge],
  ];
};
var Je = {};
(function (t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
  const e = { N1: 3, N2: 3, N3: 40, N4: 10 };
  (t.isValid = function (o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }),
    (t.from = function (o) {
      return t.isValid(o) ? parseInt(o, 10) : void 0;
    }),
    (t.getPenaltyN1 = function (o) {
      const s = o.size;
      let i = 0,
        a = 0,
        c = 0,
        f = null,
        l = null;
      for (let d = 0; d < s; d++) {
        (a = c = 0), (f = l = null);
        for (let m = 0; m < s; m++) {
          let p = o.get(d, m);
          p === f ? a++ : (a >= 5 && (i += e.N1 + (a - 5)), (f = p), (a = 1)),
            (p = o.get(m, d)),
            p === l ? c++ : (c >= 5 && (i += e.N1 + (c - 5)), (l = p), (c = 1));
        }
        a >= 5 && (i += e.N1 + (a - 5)), c >= 5 && (i += e.N1 + (c - 5));
      }
      return i;
    }),
    (t.getPenaltyN2 = function (o) {
      const s = o.size;
      let i = 0;
      for (let a = 0; a < s - 1; a++)
        for (let c = 0; c < s - 1; c++) {
          const f =
            o.get(a, c) +
            o.get(a, c + 1) +
            o.get(a + 1, c) +
            o.get(a + 1, c + 1);
          (f === 4 || f === 0) && i++;
        }
      return i * e.N2;
    }),
    (t.getPenaltyN3 = function (o) {
      const s = o.size;
      let i = 0,
        a = 0,
        c = 0;
      for (let f = 0; f < s; f++) {
        a = c = 0;
        for (let l = 0; l < s; l++)
          (a = ((a << 1) & 2047) | o.get(f, l)),
            l >= 10 && (a === 1488 || a === 93) && i++,
            (c = ((c << 1) & 2047) | o.get(l, f)),
            l >= 10 && (c === 1488 || c === 93) && i++;
      }
      return i * e.N3;
    }),
    (t.getPenaltyN4 = function (o) {
      let s = 0;
      const i = o.data.length;
      for (let c = 0; c < i; c++) s += o.data[c];
      return Math.abs(Math.ceil((s * 100) / i / 5) - 10) * e.N4;
    });
  function n(r, o, s) {
    switch (r) {
      case t.Patterns.PATTERN000:
        return (o + s) % 2 === 0;
      case t.Patterns.PATTERN001:
        return o % 2 === 0;
      case t.Patterns.PATTERN010:
        return s % 3 === 0;
      case t.Patterns.PATTERN011:
        return (o + s) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(s / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return ((o * s) % 2) + ((o * s) % 3) === 0;
      case t.Patterns.PATTERN110:
        return (((o * s) % 2) + ((o * s) % 3)) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (((o * s) % 3) + ((o + s) % 2)) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  (t.applyMask = function (o, s) {
    const i = s.size;
    for (let a = 0; a < i; a++)
      for (let c = 0; c < i; c++) s.isReserved(c, a) || s.xor(c, a, n(o, c, a));
  }),
    (t.getBestMask = function (o, s) {
      const i = Object.keys(t.Patterns).length;
      let a = 0,
        c = 1 / 0;
      for (let f = 0; f < i; f++) {
        s(f), t.applyMask(f, o);
        const l =
          t.getPenaltyN1(o) +
          t.getPenaltyN2(o) +
          t.getPenaltyN3(o) +
          t.getPenaltyN4(o);
        t.applyMask(f, o), l < c && ((c = l), (a = f));
      }
      return a;
    });
})(Je);
var Et = {};
const x = yt,
  nt = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
  ],
  rt = [
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
    88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
    72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352,
    120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
    532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442,
    644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
    588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
    1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
    924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064,
    1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
    2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
  ];
Et.getBlocksCount = function (e, n) {
  switch (n) {
    case x.L:
      return nt[(e - 1) * 4 + 0];
    case x.M:
      return nt[(e - 1) * 4 + 1];
    case x.Q:
      return nt[(e - 1) * 4 + 2];
    case x.H:
      return nt[(e - 1) * 4 + 3];
    default:
      return;
  }
};
Et.getTotalCodewordsCount = function (e, n) {
  switch (n) {
    case x.L:
      return rt[(e - 1) * 4 + 0];
    case x.M:
      return rt[(e - 1) * 4 + 1];
    case x.Q:
      return rt[(e - 1) * 4 + 2];
    case x.H:
      return rt[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var Ve = {},
  At = {};
const W = new Uint8Array(512),
  lt = new Uint8Array(256);
(function () {
  let e = 1;
  for (let n = 0; n < 255; n++)
    (W[n] = e), (lt[e] = n), (e <<= 1), e & 256 && (e ^= 285);
  for (let n = 255; n < 512; n++) W[n] = W[n - 255];
})();
At.log = function (e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return lt[e];
};
At.exp = function (e) {
  return W[e];
};
At.mul = function (e, n) {
  return e === 0 || n === 0 ? 0 : W[lt[e] + lt[n]];
};
(function (t) {
  const e = At;
  (t.mul = function (r, o) {
    const s = new Uint8Array(r.length + o.length - 1);
    for (let i = 0; i < r.length; i++)
      for (let a = 0; a < o.length; a++) s[i + a] ^= e.mul(r[i], o[a]);
    return s;
  }),
    (t.mod = function (r, o) {
      let s = new Uint8Array(r);
      for (; s.length - o.length >= 0; ) {
        const i = s[0];
        for (let c = 0; c < o.length; c++) s[c] ^= e.mul(o[c], i);
        let a = 0;
        for (; a < s.length && s[a] === 0; ) a++;
        s = s.slice(a);
      }
      return s;
    }),
    (t.generateECPolynomial = function (r) {
      let o = new Uint8Array([1]);
      for (let s = 0; s < r; s++) o = t.mul(o, new Uint8Array([1, e.exp(s)]));
      return o;
    });
})(Ve);
const ve = Ve;
function Yt(t) {
  (this.genPoly = void 0),
    (this.degree = t),
    this.degree && this.initialize(this.degree);
}
Yt.prototype.initialize = function (e) {
  (this.degree = e), (this.genPoly = ve.generateECPolynomial(this.degree));
};
Yt.prototype.encode = function (e) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  const n = new Uint8Array(e.length + this.degree);
  n.set(e);
  const r = ve.mod(n, this.genPoly),
    o = this.degree - r.length;
  if (o > 0) {
    const s = new Uint8Array(this.degree);
    return s.set(r, o), s;
  }
  return r;
};
var xr = Yt,
  Ke = {},
  j = {},
  Gt = {};
Gt.isValid = function (e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var F = {};
const We = "[0-9]+",
  jr = "[A-Z $%*+\\-./:]+";
let G =
  "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
G = G.replace(/u/g, "\\u");
const Hr =
  "(?:(?![A-Z0-9 $%*+\\-./:]|" +
  G +
  `)(?:.|[\r
]))+`;
F.KANJI = new RegExp(G, "g");
F.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
F.BYTE = new RegExp(Hr, "g");
F.NUMERIC = new RegExp(We, "g");
F.ALPHANUMERIC = new RegExp(jr, "g");
const zr = new RegExp("^" + G + "$"),
  $r = new RegExp("^" + We + "$"),
  qr = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
F.testKanji = function (e) {
  return zr.test(e);
};
F.testNumeric = function (e) {
  return $r.test(e);
};
F.testAlphanumeric = function (e) {
  return qr.test(e);
};
(function (t) {
  const e = Gt,
    n = F;
  (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
    (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
    (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
    (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
    (t.MIXED = { bit: -1 }),
    (t.getCharCountIndicator = function (s, i) {
      if (!s.ccBits) throw new Error("Invalid mode: " + s);
      if (!e.isValid(i)) throw new Error("Invalid version: " + i);
      return i >= 1 && i < 10
        ? s.ccBits[0]
        : i < 27
        ? s.ccBits[1]
        : s.ccBits[2];
    }),
    (t.getBestModeForData = function (s) {
      return n.testNumeric(s)
        ? t.NUMERIC
        : n.testAlphanumeric(s)
        ? t.ALPHANUMERIC
        : n.testKanji(s)
        ? t.KANJI
        : t.BYTE;
    }),
    (t.toString = function (s) {
      if (s && s.id) return s.id;
      throw new Error("Invalid mode");
    }),
    (t.isValid = function (s) {
      return s && s.bit && s.ccBits;
    });
  function r(o) {
    if (typeof o != "string") throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  t.from = function (s, i) {
    if (t.isValid(s)) return s;
    try {
      return r(s);
    } catch (a) {
      return i;
    }
  };
})(j);
(function (t) {
  const e = N,
    n = Et,
    r = yt,
    o = j,
    s = Gt,
    i = 7973,
    a = e.getBCHDigit(i);
  function c(m, p, h) {
    for (let g = 1; g <= 40; g++) if (p <= t.getCapacity(g, h, m)) return g;
  }
  function f(m, p) {
    return o.getCharCountIndicator(m, p) + 4;
  }
  function l(m, p) {
    let h = 0;
    return (
      m.forEach(function (g) {
        const b = f(g.mode, p);
        h += b + g.getBitsLength();
      }),
      h
    );
  }
  function d(m, p) {
    for (let h = 1; h <= 40; h++)
      if (l(m, h) <= t.getCapacity(h, p, o.MIXED)) return h;
  }
  (t.from = function (p, h) {
    return s.isValid(p) ? parseInt(p, 10) : h;
  }),
    (t.getCapacity = function (p, h, g) {
      if (!s.isValid(p)) throw new Error("Invalid QR Code version");
      typeof g == "undefined" && (g = o.BYTE);
      const b = e.getSymbolTotalCodewords(p),
        w = n.getTotalCodewordsCount(p, h),
        A = (b - w) * 8;
      if (g === o.MIXED) return A;
      const y = A - f(g, p);
      switch (g) {
        case o.NUMERIC:
          return Math.floor((y / 10) * 3);
        case o.ALPHANUMERIC:
          return Math.floor((y / 11) * 2);
        case o.KANJI:
          return Math.floor(y / 13);
        case o.BYTE:
        default:
          return Math.floor(y / 8);
      }
    }),
    (t.getBestVersionForData = function (p, h) {
      let g;
      const b = r.from(h, r.M);
      if (Array.isArray(p)) {
        if (p.length > 1) return d(p, b);
        if (p.length === 0) return 1;
        g = p[0];
      } else g = p;
      return c(g.mode, g.getLength(), b);
    }),
    (t.getEncodedBits = function (p) {
      if (!s.isValid(p) || p < 7) throw new Error("Invalid QR Code version");
      let h = p << 12;
      for (; e.getBCHDigit(h) - a >= 0; ) h ^= i << (e.getBCHDigit(h) - a);
      return (p << 12) | h;
    });
})(Ke);
var Ye = {};
const xt = N,
  Ge = 1335,
  Jr = 21522,
  me = xt.getBCHDigit(Ge);
Ye.getEncodedBits = function (e, n) {
  const r = (e.bit << 3) | n;
  let o = r << 10;
  for (; xt.getBCHDigit(o) - me >= 0; ) o ^= Ge << (xt.getBCHDigit(o) - me);
  return ((r << 10) | o) ^ Jr;
};
var Qe = {};
const Vr = j;
function z(t) {
  (this.mode = Vr.NUMERIC), (this.data = t.toString());
}
z.getBitsLength = function (e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
};
z.prototype.getLength = function () {
  return this.data.length;
};
z.prototype.getBitsLength = function () {
  return z.getBitsLength(this.data.length);
};
z.prototype.write = function (e) {
  let n, r, o;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    (r = this.data.substr(n, 3)), (o = parseInt(r, 10)), e.put(o, 10);
  const s = this.data.length - n;
  s > 0 &&
    ((r = this.data.substr(n)), (o = parseInt(r, 10)), e.put(o, s * 3 + 1));
};
var vr = z;
const Kr = j,
  Pt = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
  ];
function $(t) {
  (this.mode = Kr.ALPHANUMERIC), (this.data = t);
}
$.getBitsLength = function (e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
$.prototype.getLength = function () {
  return this.data.length;
};
$.prototype.getBitsLength = function () {
  return $.getBitsLength(this.data.length);
};
$.prototype.write = function (e) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = Pt.indexOf(this.data[n]) * 45;
    (r += Pt.indexOf(this.data[n + 1])), e.put(r, 11);
  }
  this.data.length % 2 && e.put(Pt.indexOf(this.data[n]), 6);
};
var Wr = $,
  Yr = function (e) {
    for (var n = [], r = e.length, o = 0; o < r; o++) {
      var s = e.charCodeAt(o);
      if (s >= 55296 && s <= 56319 && r > o + 1) {
        var i = e.charCodeAt(o + 1);
        i >= 56320 &&
          i <= 57343 &&
          ((s = (s - 55296) * 1024 + i - 56320 + 65536), (o += 1));
      }
      if (s < 128) {
        n.push(s);
        continue;
      }
      if (s < 2048) {
        n.push((s >> 6) | 192), n.push((s & 63) | 128);
        continue;
      }
      if (s < 55296 || (s >= 57344 && s < 65536)) {
        n.push((s >> 12) | 224),
          n.push(((s >> 6) & 63) | 128),
          n.push((s & 63) | 128);
        continue;
      }
      if (s >= 65536 && s <= 1114111) {
        n.push((s >> 18) | 240),
          n.push(((s >> 12) & 63) | 128),
          n.push(((s >> 6) & 63) | 128),
          n.push((s & 63) | 128);
        continue;
      }
      n.push(239, 191, 189);
    }
    return new Uint8Array(n).buffer;
  };
const Gr = Yr,
  Qr = j;
function q(t) {
  (this.mode = Qr.BYTE),
    typeof t == "string" && (t = Gr(t)),
    (this.data = new Uint8Array(t));
}
q.getBitsLength = function (e) {
  return e * 8;
};
q.prototype.getLength = function () {
  return this.data.length;
};
q.prototype.getBitsLength = function () {
  return q.getBitsLength(this.data.length);
};
q.prototype.write = function (t) {
  for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8);
};
var Xr = q;
const Zr = j,
  to = N;
function J(t) {
  (this.mode = Zr.KANJI), (this.data = t);
}
J.getBitsLength = function (e) {
  return e * 13;
};
J.prototype.getLength = function () {
  return this.data.length;
};
J.prototype.getBitsLength = function () {
  return J.getBitsLength(this.data.length);
};
J.prototype.write = function (t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let n = to.toSJIS(this.data[e]);
    if (n >= 33088 && n <= 40956) n -= 33088;
    else if (n >= 57408 && n <= 60351) n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " +
          this.data[e] +
          `
Make sure your charset is UTF-8`
      );
    (n = ((n >>> 8) & 255) * 192 + (n & 255)), t.put(n, 13);
  }
};
var eo = J,
  Xe = { exports: {} };
(function (t) {
  var e = {
    single_source_shortest_paths: function (n, r, o) {
      var s = {},
        i = {};
      i[r] = 0;
      var a = e.PriorityQueue.make();
      a.push(r, 0);
      for (var c, f, l, d, m, p, h, g, b; !a.empty(); ) {
        (c = a.pop()), (f = c.value), (d = c.cost), (m = n[f] || {});
        for (l in m)
          m.hasOwnProperty(l) &&
            ((p = m[l]),
            (h = d + p),
            (g = i[l]),
            (b = typeof i[l] == "undefined"),
            (b || g > h) && ((i[l] = h), a.push(l, h), (s[l] = f)));
      }
      if (typeof o != "undefined" && typeof i[o] == "undefined") {
        var w = ["Could not find a path from ", r, " to ", o, "."].join("");
        throw new Error(w);
      }
      return s;
    },
    extract_shortest_path_from_predecessor_list: function (n, r) {
      for (var o = [], s = r; s; ) o.push(s), n[s], (s = n[s]);
      return o.reverse(), o;
    },
    find_path: function (n, r, o) {
      var s = e.single_source_shortest_paths(n, r, o);
      return e.extract_shortest_path_from_predecessor_list(s, o);
    },
    PriorityQueue: {
      make: function (n) {
        var r = e.PriorityQueue,
          o = {},
          s;
        n = n || {};
        for (s in r) r.hasOwnProperty(s) && (o[s] = r[s]);
        return (o.queue = []), (o.sorter = n.sorter || r.default_sorter), o;
      },
      default_sorter: function (n, r) {
        return n.cost - r.cost;
      },
      push: function (n, r) {
        var o = { value: n, cost: r };
        this.queue.push(o), this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return this.queue.length === 0;
      },
    },
  };
  t.exports = e;
})(Xe);
var no = Xe.exports;
(function (t) {
  const e = j,
    n = vr,
    r = Wr,
    o = Xr,
    s = eo,
    i = F,
    a = N,
    c = no;
  function f(w) {
    return unescape(encodeURIComponent(w)).length;
  }
  function l(w, A, y) {
    const E = [];
    let S;
    for (; (S = w.exec(y)) !== null; )
      E.push({ data: S[0], index: S.index, mode: A, length: S[0].length });
    return E;
  }
  function d(w) {
    const A = l(i.NUMERIC, e.NUMERIC, w),
      y = l(i.ALPHANUMERIC, e.ALPHANUMERIC, w);
    let E, S;
    return (
      a.isKanjiModeEnabled()
        ? ((E = l(i.BYTE, e.BYTE, w)), (S = l(i.KANJI, e.KANJI, w)))
        : ((E = l(i.BYTE_KANJI, e.BYTE, w)), (S = [])),
      A.concat(y, E, S)
        .sort(function (B, O) {
          return B.index - O.index;
        })
        .map(function (B) {
          return { data: B.data, mode: B.mode, length: B.length };
        })
    );
  }
  function m(w, A) {
    switch (A) {
      case e.NUMERIC:
        return n.getBitsLength(w);
      case e.ALPHANUMERIC:
        return r.getBitsLength(w);
      case e.KANJI:
        return s.getBitsLength(w);
      case e.BYTE:
        return o.getBitsLength(w);
    }
  }
  function p(w) {
    return w.reduce(function (A, y) {
      const E = A.length - 1 >= 0 ? A[A.length - 1] : null;
      return E && E.mode === y.mode
        ? ((A[A.length - 1].data += y.data), A)
        : (A.push(y), A);
    }, []);
  }
  function h(w) {
    const A = [];
    for (let y = 0; y < w.length; y++) {
      const E = w[y];
      switch (E.mode) {
        case e.NUMERIC:
          A.push([
            E,
            { data: E.data, mode: e.ALPHANUMERIC, length: E.length },
            { data: E.data, mode: e.BYTE, length: E.length },
          ]);
          break;
        case e.ALPHANUMERIC:
          A.push([E, { data: E.data, mode: e.BYTE, length: E.length }]);
          break;
        case e.KANJI:
          A.push([E, { data: E.data, mode: e.BYTE, length: f(E.data) }]);
          break;
        case e.BYTE:
          A.push([{ data: E.data, mode: e.BYTE, length: f(E.data) }]);
      }
    }
    return A;
  }
  function g(w, A) {
    const y = {},
      E = { start: {} };
    let S = ["start"];
    for (let R = 0; R < w.length; R++) {
      const B = w[R],
        O = [];
      for (let U = 0; U < B.length; U++) {
        const I = B[U],
          v = "" + R + U;
        O.push(v), (y[v] = { node: I, lastCount: 0 }), (E[v] = {});
        for (let Ct = 0; Ct < S.length; Ct++) {
          const M = S[Ct];
          y[M] && y[M].node.mode === I.mode
            ? ((E[M][v] =
                m(y[M].lastCount + I.length, I.mode) -
                m(y[M].lastCount, I.mode)),
              (y[M].lastCount += I.length))
            : (y[M] && (y[M].lastCount = I.length),
              (E[M][v] =
                m(I.length, I.mode) + 4 + e.getCharCountIndicator(I.mode, A)));
        }
      }
      S = O;
    }
    for (let R = 0; R < S.length; R++) E[S[R]].end = 0;
    return { map: E, table: y };
  }
  function b(w, A) {
    let y;
    const E = e.getBestModeForData(w);
    if (((y = e.from(A, E)), y !== e.BYTE && y.bit < E.bit))
      throw new Error(
        '"' +
          w +
          '" cannot be encoded with mode ' +
          e.toString(y) +
          `.
 Suggested mode is: ` +
          e.toString(E)
      );
    switch ((y === e.KANJI && !a.isKanjiModeEnabled() && (y = e.BYTE), y)) {
      case e.NUMERIC:
        return new n(w);
      case e.ALPHANUMERIC:
        return new r(w);
      case e.KANJI:
        return new s(w);
      case e.BYTE:
        return new o(w);
    }
  }
  (t.fromArray = function (A) {
    return A.reduce(function (y, E) {
      return (
        typeof E == "string"
          ? y.push(b(E, null))
          : E.data && y.push(b(E.data, E.mode)),
        y
      );
    }, []);
  }),
    (t.fromString = function (A, y) {
      const E = d(A, a.isKanjiModeEnabled()),
        S = h(E),
        R = g(S, y),
        B = c.find_path(R.map, "start", "end"),
        O = [];
      for (let U = 1; U < B.length - 1; U++) O.push(R.table[B[U]].node);
      return t.fromArray(p(O));
    }),
    (t.rawSplit = function (A) {
      return t.fromArray(d(A, a.isKanjiModeEnabled()));
    });
})(Qe);
const bt = N,
  Ot = yt,
  ro = Dr,
  oo = Ur,
  so = $e,
  io = qe,
  jt = Je,
  Ht = Et,
  ao = xr,
  ft = Ke,
  co = Ye,
  uo = j,
  It = Qe;
function lo(t, e) {
  const n = t.size,
    r = io.getPositions(e);
  for (let o = 0; o < r.length; o++) {
    const s = r[o][0],
      i = r[o][1];
    for (let a = -1; a <= 7; a++)
      if (!(s + a <= -1 || n <= s + a))
        for (let c = -1; c <= 7; c++)
          i + c <= -1 ||
            n <= i + c ||
            ((a >= 0 && a <= 6 && (c === 0 || c === 6)) ||
            (c >= 0 && c <= 6 && (a === 0 || a === 6)) ||
            (a >= 2 && a <= 4 && c >= 2 && c <= 4)
              ? t.set(s + a, i + c, !0, !0)
              : t.set(s + a, i + c, !1, !0));
  }
}
function fo(t) {
  const e = t.size;
  for (let n = 8; n < e - 8; n++) {
    const r = n % 2 === 0;
    t.set(n, 6, r, !0), t.set(6, n, r, !0);
  }
}
function ho(t, e) {
  const n = so.getPositions(e);
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0],
      s = n[r][1];
    for (let i = -2; i <= 2; i++)
      for (let a = -2; a <= 2; a++)
        i === -2 || i === 2 || a === -2 || a === 2 || (i === 0 && a === 0)
          ? t.set(o + i, s + a, !0, !0)
          : t.set(o + i, s + a, !1, !0);
  }
}
function go(t, e) {
  const n = t.size,
    r = ft.getEncodedBits(e);
  let o, s, i;
  for (let a = 0; a < 18; a++)
    (o = Math.floor(a / 3)),
      (s = (a % 3) + n - 8 - 3),
      (i = ((r >> a) & 1) === 1),
      t.set(o, s, i, !0),
      t.set(s, o, i, !0);
}
function Lt(t, e, n) {
  const r = t.size,
    o = co.getEncodedBits(e, n);
  let s, i;
  for (s = 0; s < 15; s++)
    (i = ((o >> s) & 1) === 1),
      s < 6
        ? t.set(s, 8, i, !0)
        : s < 8
        ? t.set(s + 1, 8, i, !0)
        : t.set(r - 15 + s, 8, i, !0),
      s < 8
        ? t.set(8, r - s - 1, i, !0)
        : s < 9
        ? t.set(8, 15 - s - 1 + 1, i, !0)
        : t.set(8, 15 - s - 1, i, !0);
  t.set(r - 8, 8, 1, !0);
}
function mo(t, e) {
  const n = t.size;
  let r = -1,
    o = n - 1,
    s = 7,
    i = 0;
  for (let a = n - 1; a > 0; a -= 2)
    for (a === 6 && a--; ; ) {
      for (let c = 0; c < 2; c++)
        if (!t.isReserved(o, a - c)) {
          let f = !1;
          i < e.length && (f = ((e[i] >>> s) & 1) === 1),
            t.set(o, a - c, f),
            s--,
            s === -1 && (i++, (s = 7));
        }
      if (((o += r), o < 0 || n <= o)) {
        (o -= r), (r = -r);
        break;
      }
    }
}
function po(t, e, n) {
  const r = new ro();
  n.forEach(function (c) {
    r.put(c.mode.bit, 4),
      r.put(c.getLength(), uo.getCharCountIndicator(c.mode, t)),
      c.write(r);
  });
  const o = bt.getSymbolTotalCodewords(t),
    s = Ht.getTotalCodewordsCount(t, e),
    i = (o - s) * 8;
  for (
    r.getLengthInBits() + 4 <= i && r.put(0, 4);
    r.getLengthInBits() % 8 !== 0;

  )
    r.putBit(0);
  const a = (i - r.getLengthInBits()) / 8;
  for (let c = 0; c < a; c++) r.put(c % 2 ? 17 : 236, 8);
  return wo(r, t, e);
}
function wo(t, e, n) {
  const r = bt.getSymbolTotalCodewords(e),
    o = Ht.getTotalCodewordsCount(e, n),
    s = r - o,
    i = Ht.getBlocksCount(e, n),
    a = r % i,
    c = i - a,
    f = Math.floor(r / i),
    l = Math.floor(s / i),
    d = l + 1,
    m = f - l,
    p = new ao(m);
  let h = 0;
  const g = new Array(i),
    b = new Array(i);
  let w = 0;
  const A = new Uint8Array(t.buffer);
  for (let B = 0; B < i; B++) {
    const O = B < c ? l : d;
    (g[B] = A.slice(h, h + O)),
      (b[B] = p.encode(g[B])),
      (h += O),
      (w = Math.max(w, O));
  }
  const y = new Uint8Array(r);
  let E = 0,
    S,
    R;
  for (S = 0; S < w; S++)
    for (R = 0; R < i; R++) S < g[R].length && (y[E++] = g[R][S]);
  for (S = 0; S < m; S++) for (R = 0; R < i; R++) y[E++] = b[R][S];
  return y;
}
function yo(t, e, n, r) {
  let o;
  if (Array.isArray(t)) o = It.fromArray(t);
  else if (typeof t == "string") {
    let f = e;
    if (!f) {
      const l = It.rawSplit(t);
      f = ft.getBestVersionForData(l, n);
    }
    o = It.fromString(t, f || 40);
  } else throw new Error("Invalid data");
  const s = ft.getBestVersionForData(o, n);
  if (!s)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e) e = s;
  else if (e < s)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
        s +
        `.
`
    );
  const i = po(e, n, o),
    a = bt.getSymbolSize(e),
    c = new oo(a);
  return (
    lo(c, e),
    fo(c),
    ho(c, e),
    Lt(c, n, 0),
    e >= 7 && go(c, e),
    mo(c, i),
    isNaN(r) && (r = jt.getBestMask(c, Lt.bind(null, c, n))),
    jt.applyMask(r, c),
    Lt(c, n, r),
    {
      modules: c,
      version: e,
      errorCorrectionLevel: n,
      maskPattern: r,
      segments: o,
    }
  );
}
He.create = function (e, n) {
  if (typeof e == "undefined" || e === "") throw new Error("No input text");
  let r = Ot.M,
    o,
    s;
  return (
    typeof n != "undefined" &&
      ((r = Ot.from(n.errorCorrectionLevel, Ot.M)),
      (o = ft.from(n.version)),
      (s = jt.from(n.maskPattern)),
      n.toSJISFunc && bt.setToSJISFunction(n.toSJISFunc)),
    yo(e, o, r, s)
  );
};
var Ze = {},
  Qt = {};
(function (t) {
  function e(n) {
    if ((typeof n == "number" && (n = n.toString()), typeof n != "string"))
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) &&
      (r = Array.prototype.concat.apply(
        [],
        r.map(function (s) {
          return [s, s];
        })
      )),
      r.length === 6 && r.push("F", "F");
    const o = parseInt(r.join(""), 16);
    return {
      r: (o >> 24) & 255,
      g: (o >> 16) & 255,
      b: (o >> 8) & 255,
      a: o & 255,
      hex: "#" + r.slice(0, 6).join(""),
    };
  }
  (t.getOptions = function (r) {
    r || (r = {}), r.color || (r.color = {});
    const o =
        typeof r.margin == "undefined" || r.margin === null || r.margin < 0
          ? 4
          : r.margin,
      s = r.width && r.width >= 21 ? r.width : void 0,
      i = r.scale || 4;
    return {
      width: s,
      scale: s ? 4 : i,
      margin: o,
      color: {
        dark: e(r.color.dark || "#000000ff"),
        light: e(r.color.light || "#ffffffff"),
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {},
    };
  }),
    (t.getScale = function (r, o) {
      return o.width && o.width >= r + o.margin * 2
        ? o.width / (r + o.margin * 2)
        : o.scale;
    }),
    (t.getImageWidth = function (r, o) {
      const s = t.getScale(r, o);
      return Math.floor((r + o.margin * 2) * s);
    }),
    (t.qrToImageData = function (r, o, s) {
      const i = o.modules.size,
        a = o.modules.data,
        c = t.getScale(i, s),
        f = Math.floor((i + s.margin * 2) * c),
        l = s.margin * c,
        d = [s.color.light, s.color.dark];
      for (let m = 0; m < f; m++)
        for (let p = 0; p < f; p++) {
          let h = (m * f + p) * 4,
            g = s.color.light;
          if (m >= l && p >= l && m < f - l && p < f - l) {
            const b = Math.floor((m - l) / c),
              w = Math.floor((p - l) / c);
            g = d[a[b * i + w] ? 1 : 0];
          }
          (r[h++] = g.r), (r[h++] = g.g), (r[h++] = g.b), (r[h] = g.a);
        }
    });
})(Qt);
(function (t) {
  const e = Qt;
  function n(o, s, i) {
    o.clearRect(0, 0, s.width, s.height),
      s.style || (s.style = {}),
      (s.height = i),
      (s.width = i),
      (s.style.height = i + "px"),
      (s.style.width = i + "px");
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch (o) {
      throw new Error("You need to specify a canvas element");
    }
  }
  (t.render = function (s, i, a) {
    let c = a,
      f = i;
    typeof c == "undefined" && (!i || !i.getContext) && ((c = i), (i = void 0)),
      i || (f = r()),
      (c = e.getOptions(c));
    const l = e.getImageWidth(s.modules.size, c),
      d = f.getContext("2d"),
      m = d.createImageData(l, l);
    return (
      e.qrToImageData(m.data, s, c), n(d, f, l), d.putImageData(m, 0, 0), f
    );
  }),
    (t.renderToDataURL = function (s, i, a) {
      let c = a;
      typeof c == "undefined" &&
        (!i || !i.getContext) &&
        ((c = i), (i = void 0)),
        c || (c = {});
      const f = t.render(s, i, c),
        l = c.type || "image/png",
        d = c.rendererOpts || {};
      return f.toDataURL(l, d.quality);
    });
})(Ze);
var tn = {};
const Eo = Qt;
function pe(t, e) {
  const n = t.a / 255,
    r = e + '="' + t.hex + '"';
  return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function _t(t, e, n) {
  let r = t + e;
  return typeof n != "undefined" && (r += " " + n), r;
}
function Ao(t, e, n) {
  let r = "",
    o = 0,
    s = !1,
    i = 0;
  for (let a = 0; a < t.length; a++) {
    const c = Math.floor(a % e),
      f = Math.floor(a / e);
    !c && !s && (s = !0),
      t[a]
        ? (i++,
          (a > 0 && c > 0 && t[a - 1]) ||
            ((r += s ? _t("M", c + n, 0.5 + f + n) : _t("m", o, 0)),
            (o = 0),
            (s = !1)),
          (c + 1 < e && t[a + 1]) || ((r += _t("h", i)), (i = 0)))
        : o++;
  }
  return r;
}
tn.render = function (e, n, r) {
  const o = Eo.getOptions(n),
    s = e.modules.size,
    i = e.modules.data,
    a = s + o.margin * 2,
    c = o.color.light.a
      ? "<path " +
        pe(o.color.light, "fill") +
        ' d="M0 0h' +
        a +
        "v" +
        a +
        'H0z"/>'
      : "",
    f =
      "<path " +
      pe(o.color.dark, "stroke") +
      ' d="' +
      Ao(i, s, o.margin) +
      '"/>',
    l = 'viewBox="0 0 ' + a + " " + a + '"',
    m =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") +
      l +
      ' shape-rendering="crispEdges">' +
      c +
      f +
      `</svg>
`;
  return typeof r == "function" && r(null, m), m;
};
const bo = Fr,
  zt = He,
  en = Ze,
  Co = tn;
function Xt(t, e, n, r, o) {
  const s = [].slice.call(arguments, 1),
    i = s.length,
    a = typeof s[i - 1] == "function";
  if (!a && !bo()) throw new Error("Callback required as last argument");
  if (a) {
    if (i < 2) throw new Error("Too few arguments provided");
    i === 2
      ? ((o = n), (n = e), (e = r = void 0))
      : i === 3 &&
        (e.getContext && typeof o == "undefined"
          ? ((o = r), (r = void 0))
          : ((o = r), (r = n), (n = e), (e = void 0)));
  } else {
    if (i < 1) throw new Error("Too few arguments provided");
    return (
      i === 1
        ? ((n = e), (e = r = void 0))
        : i === 2 && !e.getContext && ((r = n), (n = e), (e = void 0)),
      new Promise(function (c, f) {
        try {
          const l = zt.create(n, r);
          c(t(l, e, r));
        } catch (l) {
          f(l);
        }
      })
    );
  }
  try {
    const c = zt.create(n, r);
    o(null, t(c, e, r));
  } catch (c) {
    o(c);
  }
}
Z.create = zt.create;
Z.toCanvas = Xt.bind(null, en.render);
Z.toDataURL = Xt.bind(null, en.renderToDataURL);
Z.toString = Xt.bind(null, function (t, e, n) {
  return Co.render(t, n);
});
var So = dt("<div>"),
  Ro = dt("<img class=rounded alt=qrcode>"),
  To = dt(
    '<div class="flex flex-col center"><div class="text-secondary mt-1 text-xs">'
  ),
  Bo = dt("<span class=font-extrabold>");
const No =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";
function Po(t) {
  var r;
  const [e, n] = ye((r = t.qrimg) != null ? r : "");
  return (
    gn(() => {
      var o, s;
      Z.toDataURL(
        t.url,
        {
          margin: (o = t.options) == null ? void 0 : o.margin,
          width: (s = t.options) == null ? void 0 : s.width,
          errorCorrectionLevel: "L",
        },
        (i, a) => {
          i != null
            ? (console.error(i), n(No))
            : (n(a), t.setImg && t.setImg(a));
        }
      );
    }),
    (() => {
      var o = So();
      return (
        ot(
          o,
          e
            ? (() => {
                var s = Ro();
                return ee(() => an(s, "src", e())), s;
              })()
            : st(fn, {})
        ),
        ee(() => cn(o, dn("flex center", t.clsas))),
        o
      );
    })()
  );
}
function we(t, e) {
  return St(this, null, function* () {
    const n = document.createElement("a");
    (n.href = t),
      n.setAttribute("download", `${e}.png`),
      document.body.appendChild(n),
      n.click(),
      n.remove();
  });
}
function Oo(t, e, n) {
  return e
    ? _r.get(t, { responseType: "blob" }).then((r) => {
        const o = window.URL.createObjectURL(new Blob([r.data]));
        we(o, n);
      })
    : we(t, n);
}
function Uo(t) {
  const e = !!/http/.exec(t.url),
    [n, r] = ye("");
  return [
    (() => {
      var o = To(),
        s = o.firstChild;
      return (
        ot(
          o,
          st(
            Po,
            sn(t, {
              get qrimg() {
                return t.checkedUrl && e ? t.url : void 0;
              },
              setImg: r,
              options: { margin: 1, width: 138 },
            })
          ),
          s
        ),
        ot(s, () => {
          var i;
          return (i = t.txt) != null ? i : ne("Scan QR code to deposit");
        }),
        o
      );
    })(),
    st(un, {
      class: "mt-4 h-8 cursor-pointer bg-layer5 mb-2 mx-auto",
      onClick: () => {
        var o;
        return Oo(n(), e, (o = t.fileName) != null ? o : `${ln.host}-qrcode`);
      },
      get children() {
        return [
          st(hn, { class: "mr-1", name: "Download" }),
          (() => {
            var o = Bo();
            return ot(o, () => ne("Save QR Code")), o;
          })(),
        ];
      },
    }),
  ];
}
export { Uo as Q, Po as a, Z as b };
