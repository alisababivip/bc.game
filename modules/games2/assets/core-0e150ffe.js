import { a as w } from "./index-eff0ad24.js";
import { r as A } from "./___vite-browser-external_commonjs-proxy-82985b1e.js";
var _,
  x = { exports: {} };
function k() {
  return (
    _ ||
      ((_ = 1),
      (x.exports =
        ((l =
          l ||
          (function (p, S) {
            var s;
            if (
              (typeof window != "undefined" &&
                window.crypto &&
                (s = window.crypto),
              typeof self != "undefined" && self.crypto && (s = self.crypto),
              typeof globalThis != "undefined" &&
                globalThis.crypto &&
                (s = globalThis.crypto),
              !s &&
                typeof window != "undefined" &&
                window.msCrypto &&
                (s = window.msCrypto),
              !s && w !== void 0 && w.crypto && (s = w.crypto),
              !s)
            )
              try {
                s = A;
              } catch (t) {}
            var b = function () {
                if (s) {
                  if (typeof s.getRandomValues == "function")
                    try {
                      return s.getRandomValues(new Uint32Array(1))[0];
                    } catch (t) {}
                  if (typeof s.randomBytes == "function")
                    try {
                      return s.randomBytes(4).readInt32LE();
                    } catch (t) {}
                }
                throw new Error(
                  "Native crypto module could not be used to get secure random number."
                );
              },
              z =
                Object.create ||
                (function () {
                  function t() {}
                  return function (n) {
                    var r;
                    return (
                      (t.prototype = n), (r = new t()), (t.prototype = null), r
                    );
                  };
                })(),
              h = {},
              d = (h.lib = {}),
              c = (d.Base = {
                extend: function (t) {
                  var n = z(this);
                  return (
                    t && n.mixIn(t),
                    (n.hasOwnProperty("init") && this.init !== n.init) ||
                      (n.init = function () {
                        n.$super.init.apply(this, arguments);
                      }),
                    (n.init.prototype = n),
                    (n.$super = this),
                    n
                  );
                },
                create: function () {
                  var t = this.extend();
                  return t.init.apply(t, arguments), t;
                },
                init: function () {},
                mixIn: function (t) {
                  for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
                  t.hasOwnProperty("toString") && (this.toString = t.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              u = (d.WordArray = c.extend({
                init: function (t, n) {
                  (t = this.words = t || []),
                    (this.sigBytes = n != S ? n : 4 * t.length);
                },
                toString: function (t) {
                  return (t || C).stringify(this);
                },
                concat: function (t) {
                  var n = this.words,
                    r = t.words,
                    i = this.sigBytes,
                    e = t.sigBytes;
                  if ((this.clamp(), i % 4))
                    for (var o = 0; o < e; o++) {
                      var f = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                      n[(i + o) >>> 2] |= f << (24 - ((i + o) % 4) * 8);
                    }
                  else
                    for (var a = 0; a < e; a += 4)
                      n[(i + a) >>> 2] = r[a >>> 2];
                  return (this.sigBytes += e), this;
                },
                clamp: function () {
                  var t = this.words,
                    n = this.sigBytes;
                  (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                    (t.length = p.ceil(n / 4));
                },
                clone: function () {
                  var t = c.clone.call(this);
                  return (t.words = this.words.slice(0)), t;
                },
                random: function (t) {
                  for (var n = [], r = 0; r < t; r += 4) n.push(b());
                  return new u.init(n, t);
                },
              })),
              y = (h.enc = {}),
              C = (y.Hex = {
                stringify: function (t) {
                  for (
                    var n = t.words, r = t.sigBytes, i = [], e = 0;
                    e < r;
                    e++
                  ) {
                    var o = (n[e >>> 2] >>> (24 - (e % 4) * 8)) & 255;
                    i.push((o >>> 4).toString(16)),
                      i.push((15 & o).toString(16));
                  }
                  return i.join("");
                },
                parse: function (t) {
                  for (var n = t.length, r = [], i = 0; i < n; i += 2)
                    r[i >>> 3] |=
                      parseInt(t.substr(i, 2), 16) << (24 - (i % 8) * 4);
                  return new u.init(r, n / 2);
                },
              }),
              m = (y.Latin1 = {
                stringify: function (t) {
                  for (
                    var n = t.words, r = t.sigBytes, i = [], e = 0;
                    e < r;
                    e++
                  ) {
                    var o = (n[e >>> 2] >>> (24 - (e % 4) * 8)) & 255;
                    i.push(String.fromCharCode(o));
                  }
                  return i.join("");
                },
                parse: function (t) {
                  for (var n = t.length, r = [], i = 0; i < n; i++)
                    r[i >>> 2] |= (255 & t.charCodeAt(i)) << (24 - (i % 4) * 8);
                  return new u.init(r, n);
                },
              }),
              H = (y.Utf8 = {
                stringify: function (t) {
                  try {
                    return decodeURIComponent(escape(m.stringify(t)));
                  } catch (n) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function (t) {
                  return m.parse(unescape(encodeURIComponent(t)));
                },
              }),
              v = (d.BufferedBlockAlgorithm = c.extend({
                reset: function () {
                  (this._data = new u.init()), (this._nDataBytes = 0);
                },
                _append: function (t) {
                  typeof t == "string" && (t = H.parse(t)),
                    this._data.concat(t),
                    (this._nDataBytes += t.sigBytes);
                },
                _process: function (t) {
                  var n,
                    r = this._data,
                    i = r.words,
                    e = r.sigBytes,
                    o = this.blockSize,
                    f = e / (4 * o),
                    a =
                      (f = t
                        ? p.ceil(f)
                        : p.max((0 | f) - this._minBufferSize, 0)) * o,
                    B = p.min(4 * a, e);
                  if (a) {
                    for (var g = 0; g < a; g += o) this._doProcessBlock(i, g);
                    (n = i.splice(0, a)), (r.sigBytes -= B);
                  }
                  return new u.init(n, B);
                },
                clone: function () {
                  var t = c.clone.call(this);
                  return (t._data = this._data.clone()), t;
                },
                _minBufferSize: 0,
              }));
            d.Hasher = v.extend({
              cfg: c.extend(),
              init: function (t) {
                (this.cfg = this.cfg.extend(t)), this.reset();
              },
              reset: function () {
                v.reset.call(this), this._doReset();
              },
              update: function (t) {
                return this._append(t), this._process(), this;
              },
              finalize: function (t) {
                return t && this._append(t), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (t) {
                return function (n, r) {
                  return new t.init(r).finalize(n);
                };
              },
              _createHmacHelper: function (t) {
                return function (n, r) {
                  return new I.HMAC.init(t, r).finalize(n);
                };
              },
            });
            var I = (h.algo = {});
            return h;
          })(Math)),
        l))),
    x.exports
  );
  var l;
}
export { k as r };
