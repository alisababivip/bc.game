var _n,
  s = {};
function P(e) {
  if (!e) return !1;
  var t = Object.prototype.toString.call(e);
  return t == "[object Function]" || t == "[object AsyncFunction]";
}
function _e() {
  return Date.now && P(Date.now) ? Date.now() : new Date().getTime();
}
(function () {
  var e = { function: !0, object: !0 },
    t = (e[typeof window] && window) || this,
    r = t.JSON,
    n = t.JSON3,
    i = !1,
    a = (function u(c, f) {
      c || (c = t.Object()), f || (f = t.Object());
      var _ = c.Number || t.Number,
        y = c.String || t.String,
        I = c.Object || t.Object,
        x = c.Date || t.Date,
        le = c.SyntaxError || t.SyntaxError,
        M = c.TypeError || t.TypeError,
        be = c.Math || t.Math,
        je = c.JSON || t.JSON;
      if (typeof je == "object" && je)
        return (
          (f.stringify = je.stringify),
          (f.parse = je.parse),
          (f.runInContext = u),
          f
        );
      var de,
        cn = I.prototype,
        ke = cn.toString,
        Ft = cn.hasOwnProperty;
      function Ke(h, S) {
        try {
          h();
        } catch {
          S && S();
        }
      }
      var Te = new x(-0xc782b5b800cec);
      function z(h) {
        if (z[h] != null) return z[h];
        var S;
        if (h == "bug-string-char-index") S = !1;
        else if (h == "json")
          S = z("json-stringify") && z("date-serialization") && z("json-parse");
        else if (h == "date-serialization") {
          if ((S = z("json-stringify") && Te)) {
            var p = f.stringify;
            Ke(function () {
              S =
                p(new x(-864e13)) == '"-271821-04-20T00:00:00.000Z"' &&
                p(new x(864e13)) == '"+275760-09-13T00:00:00.000Z"' &&
                p(new x(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                p(new x(-1)) == '"1969-12-31T23:59:59.999Z"';
            });
          }
        } else {
          var C,
            g = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
          if (h == "json-stringify") {
            var k = typeof (p = f.stringify) == "function";
            k &&
              (((C = function () {
                return 1;
              }).toJSON = C),
              Ke(
                function () {
                  k =
                    p(0) === "0" &&
                    p(new _()) === "0" &&
                    p(new y()) == '""' &&
                    p(ke) === de &&
                    p(de) === de &&
                    p() === de &&
                    p(C) === "1" &&
                    p([C]) == "[1]" &&
                    p([de]) == "[null]" &&
                    p(null) == "null" &&
                    p([de, ke, null]) == "[null,null,null]" &&
                    p({
                      a: [
                        C,
                        !0,
                        !1,
                        null,
                        `\0\b
\f\r	`,
                      ],
                    }) == g &&
                    p(null, C) === "1" &&
                    p([1, 2], null, 1) ==
                      `[
 1,
 2
]`;
                },
                function () {
                  k = !1;
                }
              )),
              (S = k);
          }
          if (h == "json-parse") {
            var j,
              w = f.parse;
            typeof w == "function" &&
              Ke(
                function () {
                  w("0") !== 0 ||
                    w(!1) ||
                    ((C = w(g)),
                    (j = C.a.length == 5 && C.a[0] === 1) &&
                      (Ke(function () {
                        j = !w('"	"');
                      }),
                      j &&
                        Ke(function () {
                          j = w("01") !== 1;
                        }),
                      j &&
                        Ke(function () {
                          j = w("1.") !== 1;
                        })));
                },
                function () {
                  j = !1;
                }
              ),
              (S = j);
          }
        }
        return (z[h] = !!S);
      }
      if (
        (Ke(function () {
          Te =
            Te.getUTCFullYear() == -109252 &&
            Te.getUTCMonth() === 0 &&
            Te.getUTCDate() === 1 &&
            Te.getUTCHours() == 10 &&
            Te.getUTCMinutes() == 37 &&
            Te.getUTCSeconds() == 6 &&
            Te.getUTCMilliseconds() == 708;
        }),
        (z["bug-string-char-index"] =
          z["date-serialization"] =
          z.json =
          z["json-stringify"] =
          z["json-parse"] =
            null),
        !z("json"))
      ) {
        var fr = z("bug-string-char-index"),
          pt = function (h, S) {
            var p,
              C,
              g,
              k = 0;
            for (g in (((p = function () {
              this.valueOf = 0;
            }).prototype.valueOf = 0),
            (C = new p())))
              Ft.call(C, g) && k++;
            return (
              (p = C = null),
              k
                ? (pt = function (j, w) {
                    var R,
                      ne,
                      H = ke.call(j) == "[object Function]";
                    for (R in j)
                      (H && R == "prototype") ||
                        !Ft.call(j, R) ||
                        (ne = R === "constructor") ||
                        w(R);
                    (ne || Ft.call(j, (R = "constructor"))) && w(R);
                  })
                : ((C = [
                    "valueOf",
                    "toString",
                    "toLocaleString",
                    "propertyIsEnumerable",
                    "isPrototypeOf",
                    "hasOwnProperty",
                    "constructor",
                  ]),
                  (pt = function (j, w) {
                    var R,
                      ne,
                      H = ke.call(j) == "[object Function]",
                      We =
                        (!H &&
                          typeof j.constructor != "function" &&
                          e[typeof j.hasOwnProperty] &&
                          j.hasOwnProperty) ||
                        Ft;
                    for (R in j)
                      (H && R == "prototype") || !We.call(j, R) || w(R);
                    for (ne = C.length; (R = C[--ne]); ) We.call(j, R) && w(R);
                  })),
              pt(h, S)
            );
          };
        if (!z("json-stringify") && !z("date-serialization")) {
          var da = {
              92: "\\\\",
              34: '\\"',
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t",
            },
            Re = function (h, S) {
              return ("000000" + (S || 0)).slice(-h);
            },
            pr = function (h) {
              var S, p, C, g, k, j, w, R, ne;
              if (Te)
                S = function (U) {
                  (p = U.getUTCFullYear()),
                    (C = U.getUTCMonth()),
                    (g = U.getUTCDate()),
                    (j = U.getUTCHours()),
                    (w = U.getUTCMinutes()),
                    (R = U.getUTCSeconds()),
                    (ne = U.getUTCMilliseconds());
                };
              else {
                var H = be.floor,
                  We = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                  Be = function (U, He) {
                    return (
                      We[He] +
                      365 * (U - 1970) +
                      H((U - 1969 + (He = +(He > 1))) / 4) -
                      H((U - 1901 + He) / 100) +
                      H((U - 1601 + He) / 400)
                    );
                  };
                S = function (U) {
                  for (
                    g = H(U / 864e5), p = H(g / 365.2425) + 1970 - 1;
                    Be(p + 1, 0) <= g;
                    p++
                  );
                  for (C = H((g - Be(p, 0)) / 30.42); Be(p, C + 1) <= g; C++);
                  (g = 1 + g - Be(p, C)),
                    (j = H((k = ((U % 864e5) + 864e5) % 864e5) / 36e5) % 24),
                    (w = H(k / 6e4) % 60),
                    (R = H(k / 1e3) % 60),
                    (ne = k % 1e3);
                };
              }
              return (pr = function (U) {
                return (
                  U > -1 / 0 && U < 1 / 0
                    ? (S(U),
                      (U =
                        (p <= 0 || p >= 1e4
                          ? (p < 0 ? "-" : "+") + Re(6, p < 0 ? -p : p)
                          : Re(4, p)) +
                        "-" +
                        Re(2, C + 1) +
                        "-" +
                        Re(2, g) +
                        "T" +
                        Re(2, j) +
                        ":" +
                        Re(2, w) +
                        ":" +
                        Re(2, R) +
                        "." +
                        Re(3, ne) +
                        "Z"),
                      (p = C = g = j = w = R = ne = null))
                    : (U = null),
                  U
                );
              })(h);
            };
          if (z("json-stringify") && !z("date-serialization")) {
            let h = function (S) {
              return pr(this);
            };
            var fa = f.stringify;
            f.stringify = function (S, p, C) {
              var g = x.prototype.toJSON;
              x.prototype.toJSON = h;
              var k = fa(S, p, C);
              return (x.prototype.toJSON = g), k;
            };
          } else {
            var pa = function (h) {
                var S = h.charCodeAt(0),
                  p = da[S];
                return p || "\\u00" + Re(2, S.toString(16));
              },
              gr = /[\x00-\x1f\x22\x5c]/g,
              ln = function (h) {
                return (
                  (gr.lastIndex = 0),
                  '"' + (gr.test(h) ? h.replace(gr, pa) : h) + '"'
                );
              },
              _r = function (h, S, p, C, g, k, j) {
                var w, R, ne, H, We, Be, U, He, mr;
                if (
                  (Ke(function () {
                    w = S[h];
                  }),
                  typeof w == "object" &&
                    w &&
                    (w.getUTCFullYear &&
                    ke.call(w) == "[object Date]" &&
                    w.toJSON === x.prototype.toJSON
                      ? (w = pr(w))
                      : typeof w.toJSON == "function" && (w = w.toJSON(h))),
                  p && (w = p.call(S, h, w)),
                  w == de)
                )
                  return w === de ? w : "null";
                switch (
                  ((R = typeof w) == "object" && (ne = ke.call(w)), ne || R)
                ) {
                  case "boolean":
                  case "[object Boolean]":
                    return "" + w;
                  case "number":
                  case "[object Number]":
                    return w > -1 / 0 && w < 1 / 0 ? "" + w : "null";
                  case "string":
                  case "[object String]":
                    return ln("" + w);
                }
                if (typeof w == "object") {
                  for (U = j.length; U--; ) if (j[U] === w) throw M();
                  if (
                    (j.push(w),
                    (H = []),
                    (He = k),
                    (k += g),
                    ne == "[object Array]")
                  ) {
                    for (Be = 0, U = w.length; Be < U; Be++)
                      (We = _r(Be, w, p, C, g, k, j)),
                        H.push(We === de ? "null" : We);
                    mr = H.length
                      ? g
                        ? `[
` +
                          k +
                          H.join(
                            `,
` + k
                          ) +
                          `
` +
                          He +
                          "]"
                        : "[" + H.join(",") + "]"
                      : "[]";
                  } else
                    pt(C || w, function (pn) {
                      var gn = _r(pn, w, p, C, g, k, j);
                      gn !== de && H.push(ln(pn) + ":" + (g ? " " : "") + gn);
                    }),
                      (mr = H.length
                        ? g
                          ? `{
` +
                            k +
                            H.join(
                              `,
` + k
                            ) +
                            `
` +
                            He +
                            "}"
                          : "{" + H.join(",") + "}"
                        : "{}");
                  return j.pop(), mr;
                }
              };
            f.stringify = function (h, S, p) {
              var C, g, k, j;
              if (e[typeof S] && S) {
                if ((j = ke.call(S)) == "[object Function]") g = S;
                else if (j == "[object Array]") {
                  k = {};
                  for (var w, R = 0, ne = S.length; R < ne; )
                    (w = S[R++]),
                      ((j = ke.call(w)) != "[object String]" &&
                        j != "[object Number]") ||
                        (k[w] = 1);
                }
              }
              if (p)
                if ((j = ke.call(p)) == "[object Number]") {
                  if ((p -= p % 1) > 0)
                    for (p > 10 && (p = 10), C = ""; C.length < p; ) C += " ";
                } else
                  j == "[object String]" &&
                    (C = p.length <= 10 ? p : p.slice(0, 10));
              return _r("", (((w = {})[""] = h), w), g, k, C, "", []);
            };
          }
        }
        if (!z("json-parse")) {
          var $,
            Mt,
            ga = y.fromCharCode,
            _a = {
              92: "\\",
              34: '"',
              47: "/",
              98: "\b",
              116: "	",
              110: `
`,
              102: "\f",
              114: "\r",
            },
            Z = function () {
              throw (($ = Mt = null), le());
            },
            Ve = function () {
              for (var h, S, p, C, g, k = Mt, j = k.length; $ < j; )
                switch ((g = k.charCodeAt($))) {
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    $++;
                    break;
                  case 123:
                  case 125:
                  case 91:
                  case 93:
                  case 58:
                  case 44:
                    return (h = fr ? k.charAt($) : k[$]), $++, h;
                  case 34:
                    for (h = "@", $++; $ < j; )
                      if ((g = k.charCodeAt($)) < 32) Z();
                      else if (g == 92)
                        switch ((g = k.charCodeAt(++$))) {
                          case 92:
                          case 34:
                          case 47:
                          case 98:
                          case 116:
                          case 110:
                          case 102:
                          case 114:
                            (h += _a[g]), $++;
                            break;
                          case 117:
                            for (S = ++$, p = $ + 4; $ < p; $++)
                              ((g = k.charCodeAt($)) >= 48 && g <= 57) ||
                                (g >= 97 && g <= 102) ||
                                (g >= 65 && g <= 70) ||
                                Z();
                            h += ga("0x" + k.slice(S, $));
                            break;
                          default:
                            Z();
                        }
                      else {
                        if (g == 34) break;
                        for (
                          g = k.charCodeAt($), S = $;
                          g >= 32 && g != 92 && g != 34;

                        )
                          g = k.charCodeAt(++$);
                        h += k.slice(S, $);
                      }
                    if (k.charCodeAt($) == 34) return $++, h;
                    Z();
                  default:
                    if (
                      ((S = $),
                      g == 45 && ((C = !0), (g = k.charCodeAt(++$))),
                      g >= 48 && g <= 57)
                    ) {
                      for (
                        g == 48 &&
                          (g = k.charCodeAt($ + 1)) >= 48 &&
                          g <= 57 &&
                          Z(),
                          C = !1;
                        $ < j && (g = k.charCodeAt($)) >= 48 && g <= 57;
                        $++
                      );
                      if (k.charCodeAt($) == 46) {
                        for (
                          p = ++$;
                          p < j && !((g = k.charCodeAt(p)) < 48 || g > 57);
                          p++
                        );
                        p == $ && Z(), ($ = p);
                      }
                      if ((g = k.charCodeAt($)) == 101 || g == 69) {
                        for (
                          ((g = k.charCodeAt(++$)) != 43 && g != 45) || $++,
                            p = $;
                          p < j && !((g = k.charCodeAt(p)) < 48 || g > 57);
                          p++
                        );
                        p == $ && Z(), ($ = p);
                      }
                      return +k.slice(S, $);
                    }
                    C && Z();
                    var w = k.slice($, $ + 4);
                    if (w == "true") return ($ += 4), !0;
                    if (w == "fals" && k.charCodeAt($ + 4) == 101)
                      return ($ += 5), !1;
                    if (w == "null") return ($ += 4), null;
                    Z();
                }
              return "$";
            },
            hr = function (h) {
              var S, p;
              if ((h == "$" && Z(), typeof h == "string")) {
                if ((fr ? h.charAt(0) : h[0]) == "@") return h.slice(1);
                if (h == "[") {
                  for (S = []; (h = Ve()) != "]"; )
                    p ? (h == "," ? (h = Ve()) == "]" && Z() : Z()) : (p = !0),
                      h == "," && Z(),
                      S.push(hr(h));
                  return S;
                }
                if (h == "{") {
                  for (S = {}; (h = Ve()) != "}"; )
                    p ? (h == "," ? (h = Ve()) == "}" && Z() : Z()) : (p = !0),
                      (h != "," &&
                        typeof h == "string" &&
                        (fr ? h.charAt(0) : h[0]) == "@" &&
                        Ve() == ":") ||
                        Z(),
                      (S[h.slice(1)] = hr(Ve()));
                  return S;
                }
                Z();
              }
              return h;
            },
            dn = function (h, S, p) {
              var C = fn(h, S, p);
              C === de ? delete h[S] : (h[S] = C);
            },
            fn = function (h, S, p) {
              var C,
                g = h[S];
              if (typeof g == "object" && g)
                if (ke.call(g) == "[object Array]")
                  for (C = g.length; C--; ) dn(ke, pt, g);
                else
                  pt(g, function (k) {
                    dn(g, k, p);
                  });
              return p.call(h, S, g);
            };
          f.parse = function (h, S) {
            var p, C;
            return (
              ($ = 0),
              (Mt = "" + h),
              (p = hr(Ve())),
              Ve() != "$" && Z(),
              ($ = Mt = null),
              S && ke.call(S) == "[object Function]"
                ? fn((((C = {})[""] = p), C), "", S)
                : p
            );
          };
        }
      }
      return (f.runInContext = u), f;
    })(
      t,
      (t.JSON3 = {
        noConflict: function () {
          return (
            i || ((i = !0), (t.JSON = r), (t.JSON3 = n), (r = n = null)), a
          );
        },
      })
    );
  t.JSON
    ? ((t.JSON.parse = a.parse), (t.JSON.stringify = a.stringify))
    : (t.JSON = { parse: a.parse, stringify: a.stringify });
}.call(window),
  (function (e) {
    if (e.atob)
      try {
        e.atob(" ");
      } catch {
        e.atob =
          ((t = e.atob),
          ((r = function (u) {
            return t(String(u).replace(/[\t\n\f\r ]+/g, ""));
          }).original = t),
          r);
      }
    else {
      var t,
        r,
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        i =
          /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
      (e.btoa = function (a) {
        a = String(a);
        for (var u, c, f, _, y = "", I = 0, x = a.length % 3; I < a.length; ) {
          if (
            (c = a.charCodeAt(I++)) > 255 ||
            (f = a.charCodeAt(I++)) > 255 ||
            (_ = a.charCodeAt(I++)) > 255
          )
            return "";
          y +=
            n.charAt(((u = (c << 16) | (f << 8) | _) >> 18) & 63) +
            n.charAt((u >> 12) & 63) +
            n.charAt((u >> 6) & 63) +
            n.charAt(63 & u);
        }
        return x ? y.slice(0, x - 3) + "===".substring(x) : y;
      }),
        (e.atob = function (a) {
          if (((a = String(a).replace(/[\t\n\f\r ]+/g, "")), !i.test(a)))
            return "";
          a += "==".slice(2 - (3 & a.length));
          for (var u, c, f, _ = "", y = 0; y < a.length; )
            (u =
              (n.indexOf(a.charAt(y++)) << 18) |
              (n.indexOf(a.charAt(y++)) << 12) |
              ((c = n.indexOf(a.charAt(y++))) << 6) |
              (f = n.indexOf(a.charAt(y++)))),
              (_ +=
                c === 64
                  ? String.fromCharCode((u >> 16) & 255)
                  : f === 64
                  ? String.fromCharCode((u >> 16) & 255, (u >> 8) & 255)
                  : String.fromCharCode(
                      (u >> 16) & 255,
                      (u >> 8) & 255,
                      255 & u
                    ));
          return _;
        });
    }
  })(window));
var Y = {
    setup: function (e) {
      _n = e;
    },
    log: function () {
      (_n || (console && console.log) || function () {}).apply(null, arguments);
    },
  },
  L = {
    get: function (e) {
      return window.localStorage.getItem(e);
    },
    parse: function (e) {
      var t;
      try {
        t = JSON.parse(L.get(e)) || null;
      } catch {
        Y.log("parse localStorage failed");
      }
      return t;
    },
    set: function (e, t) {
      try {
        window.localStorage.setItem(e, t);
      } catch {
        Y.log("localStorage is not support");
      }
    },
    remove: function (e) {
      window.localStorage.removeItem(e);
    },
    isSupport: function () {
      var e = !0;
      try {
        var t = "__local_store_support__",
          r = "testIsSupportStorage";
        L.set(t, r), L.get(t) !== r && (e = !1), L.remove(t);
      } catch {
        e = !1;
      }
      return e;
    },
  };
function d(e) {
  return e != null && Object.prototype.toString.call(e) == "[object Object]";
}
var ri = (function () {
  var e = new Date().getTime();
  return function (t) {
    return Math.ceil(((e = (9301 * e + 49297) % 233280) / 233280) * t);
  };
})();
function me() {
  if (typeof Uint32Array == "function") {
    var e = "";
    if (
      (typeof crypto < "u"
        ? (e = crypto)
        : typeof msCrypto < "u" && (e = msCrypto),
      d(e) && e.getRandomValues)
    ) {
      var t = new Uint32Array(1);
      return e.getRandomValues(t)[0] / Math.pow(2, 32);
    }
  }
  return ri(1e19) / 1e19;
}
function G(e) {
  var t = null;
  try {
    t = JSON.parse(e);
  } catch {}
  return t;
}
function rr(e, t) {
  (this.lockGetPrefix = e || "lock-get-prefix"),
    (this.lockSetPrefix = t || "lock-set-prefix");
}
function jr(e) {
  return (
    typeof e == "function" || (!(!e || typeof e != "object") && jr(e.listener))
  );
}
function Pe() {
  this._events = {};
}
function dt(e) {
  var t = e;
  try {
    t = decodeURIComponent(e);
  } catch {
    t = e;
  }
  return t;
}
function nr(e) {
  for (
    var t = {}, r = (e = e || "").substring(1).split("&"), n = 0;
    n < r.length;
    n++
  ) {
    var i = r[n].indexOf("=");
    if (i !== -1) {
      var a = r[n].substring(0, i),
        u = r[n].substring(i + 1);
      (a = dt(a)), (u = dt(u)), (t[a] = u);
    }
  }
  return t;
}
function b(e) {
  return Object.prototype.toString.call(e) == "[object String]";
}
function we(e) {
  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
function qr(e) {
  var t = function (r) {
    (this._fields = {
      Username: 4,
      Password: 5,
      Port: 7,
      Protocol: 2,
      Host: 6,
      Path: 8,
      URL: 0,
      QueryString: 9,
      Fragment: 10,
    }),
      (this._values = {}),
      (this._regex =
        /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/),
      r !== void 0 && this._parse(r);
  };
  return (
    (t.prototype.setUrl = function (r) {
      this._parse(r);
    }),
    (t.prototype._initValues = function () {
      for (var r in this._fields) this._values[r] = "";
    }),
    (t.prototype.addQueryString = function (r) {
      if (typeof r != "object") return !1;
      var n = this._values.QueryString || "";
      for (var i in r)
        n = new RegExp(i + "[^&]+").test(n)
          ? n.replace(new RegExp(i + "[^&]+"), i + "=" + r[i])
          : n.slice(-1) === "&"
          ? n + i + "=" + r[i]
          : n === ""
          ? i + "=" + r[i]
          : n + "&" + i + "=" + r[i];
      this._values.QueryString = n;
    }),
    (t.prototype.getUrl = function () {
      var r = "";
      return (
        (r += this._values.Origin),
        (r += this._values.Port ? ":" + this._values.Port : ""),
        (r += this._values.Path),
        (r += this._values.QueryString ? "?" + this._values.QueryString : ""),
        (r += this._values.Fragment ? "#" + this._values.Fragment : "")
      );
    }),
    (t.prototype._parse = function (r) {
      this._initValues();
      var n = this._regex.exec(r);
      n || Y.log("URLParser::_parse -> Invalid URL");
      var i = r.split("#"),
        a = i[0],
        u = i.slice(1).join("#");
      for (var c in ((n = this._regex.exec(a)), this._fields))
        typeof n[this._fields[c]] < "u" &&
          (this._values[c] = n[this._fields[c]]);
      (this._values.Hostname = this._values.Host.replace(/:\d+$/, "")),
        (this._values.Origin =
          this._values.Protocol + "://" + this._values.Hostname),
        (this._values.Fragment = u);
    }),
    new t(e)
  );
}
function Ae(e) {
  var t,
    r = {};
  if (
    typeof window.URL == "function" &&
    (function () {
      try {
        return (
          new URL("https://www.sensorsdata.cn/").href ===
          "https://www.sensorsdata.cn/"
        );
      } catch {
        return !1;
      }
    })()
  )
    (r = new URL(e)).searchParams ||
      (r.searchParams =
        ((t = nr(r.search)),
        {
          get: function (i) {
            return t[i];
          },
        }));
  else {
    if ((b(e) || (e = String(e)), (e = we(e)), /^https?:\/\/.+/.test(e) === !1))
      return void Y.log("Invalid URL");
    var n = qr(e);
    (r.hash = n._values.Fragment),
      (r.host = n._values.Host
        ? n._values.Host + (n._values.Port ? ":" + n._values.Port : "")
        : ""),
      (r.href = n._values.URL),
      (r.password = n._values.Password),
      (r.pathname = n._values.Path),
      (r.port = n._values.Port),
      (r.search = n._values.QueryString ? "?" + n._values.QueryString : ""),
      (r.username = n._values.Username),
      (r.hostname = n._values.Hostname),
      (r.protocol = n._values.Protocol ? n._values.Protocol + ":" : ""),
      (r.origin = n._values.Origin
        ? n._values.Origin + (n._values.Port ? ":" + n._values.Port : "")
        : ""),
      (r.searchParams = (function () {
        var i = nr("?" + n._values.QueryString);
        return {
          get: function (a) {
            return i[a];
          },
        };
      })());
  }
  return r;
}
(rr.prototype.get = function (e, t, r, n) {
  if (!e) throw new Error("key is must");
  (t = t || 1e4), (r = r || 1e3), (n = n || function () {});
  var i = this.lockGetPrefix + e,
    a = L.get(i),
    u = String(me());
  if (a && (a = G(a) || { randomNum: 0, expireTime: 0 }).expireTime > _e())
    return n(null);
  L.set(i, JSON.stringify({ randomNum: u, expireTime: _e() + t })),
    setTimeout(function () {
      (a = G(L.get(i)) || { randomNum: 0, expireTime: 0 }) && a.randomNum === u
        ? (n(L.get(e)), L.remove(e), L.remove(i))
        : n(null);
    }, r);
}),
  (rr.prototype.set = function (e, t, r, n, i) {
    if (!e || !t) throw new Error("key and val is must");
    (r = r || 1e4), (n = n || 1e3), (i = i || function () {});
    var a = this.lockSetPrefix + e,
      u = L.get(a),
      c = String(me());
    if (u && (u = G(u) || { randomNum: 0, expireTime: 0 }).expireTime > _e())
      return i({ status: "fail", reason: "This key is locked" });
    L.set(a, JSON.stringify({ randomNum: c, expireTime: _e() + r })),
      setTimeout(function () {
        (u = G(L.get(a)) || { randomNum: 0, expireTime: 0 }).randomNum === c
          ? L.set(e, t) && i({ status: "success" })
          : i({ status: "fail", reason: "This key is locked" });
      }, n);
  }),
  (Pe.prototype.on = function (e, t) {
    if (!e || !t) return !1;
    if (!jr(t)) throw new Error("listener must be a function");
    this._events[e] = this._events[e] || [];
    var r = typeof t == "object";
    return this._events[e].push(r ? t : { listener: t, once: !1 }), this;
  }),
  (Pe.prototype.prepend = function (e, t) {
    if (!e || !t) return !1;
    if (!jr(t)) throw new Error("listener must be a function");
    this._events[e] = this._events[e] || [];
    var r = typeof t == "object";
    return this._events[e].unshift(r ? t : { listener: t, once: !1 }), this;
  }),
  (Pe.prototype.prependOnce = function (e, t) {
    return this.prepend(e, { listener: t, once: !0 });
  }),
  (Pe.prototype.once = function (e, t) {
    return this.on(e, { listener: t, once: !0 });
  }),
  (Pe.prototype.off = function (e, t) {
    var r = this._events[e];
    if (!r) return !1;
    if (typeof t == "number") r.splice(t, 1);
    else if (typeof t == "function")
      for (var n = 0, i = r.length; n < i; n++)
        r[n] && r[n].listener === t && r.splice(n, 1);
    return this;
  }),
  (Pe.prototype.emit = function (e, t) {
    var r = this._events[e];
    if (!r) return !1;
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i && (i.listener.call(this, t || {}), i.once && this.off(e, n));
    }
    return this;
  }),
  (Pe.prototype.removeAllListeners = function (e) {
    e && this._events[e] ? (this._events[e] = []) : (this._events = {});
  }),
  (Pe.prototype.listeners = function (e) {
    return e && typeof e == "string" ? this._events[e] : this._events;
  });
var et = (function () {
  var e = function () {
    for (var t = 1 * new Date(), r = 0; t == 1 * new Date(); ) r++;
    return t.toString(16) + r.toString(16);
  };
  return function () {
    var t = String(screen.height * screen.width);
    t =
      t && /\d{5,}/.test(t)
        ? t.toString(16)
        : String(31242 * me())
            .replace(".", "")
            .slice(0, 8);
    var r =
      e() +
      "-" +
      me().toString(16).replace(".", "") +
      "-" +
      (function () {
        var n,
          i,
          a = navigator.userAgent,
          u = [],
          c = 0;
        function f(_, y) {
          var I,
            x = 0;
          for (I = 0; I < y.length; I++) x |= u[I] << (8 * I);
          return _ ^ x;
        }
        for (n = 0; n < a.length; n++)
          (i = a.charCodeAt(n)),
            u.unshift(255 & i),
            u.length >= 4 && ((c = f(c, u)), (u = []));
        return u.length > 0 && (c = f(c, u)), c.toString(16);
      })() +
      "-" +
      t +
      "-" +
      e();
    return r || (String(me()) + String(me()) + String(me())).slice(2, 15);
  };
})();
function ve(e) {
  return !(!e || e.nodeType !== 1);
}
function Ne(e) {
  return e === void 0;
}
function A(e) {
  return Array.isArray && P(A)
    ? Array.isArray(e)
    : Object.prototype.toString.call(e) === "[object Array]";
}
function he(e) {
  return new ni(e);
}
var ni = function (e) {
    this.ele = e;
  },
  hn = function (e, t) {
    for (var r = []; e; e = e.nextSibling)
      e.nodeType === 1 && e !== t && r.push(e);
    return r;
  };
function ot(e, t, r, n) {
  function i(a) {
    return (
      a &&
        ((a.preventDefault = i.preventDefault),
        (a.stopPropagation = i.stopPropagation),
        (a._getPath = i._getPath)),
      a
    );
  }
  (i._getPath = function () {
    return (
      this.path ||
      (this.composedPath && this.composedPath()) ||
      he(this.target).getParents()
    );
  }),
    (i.preventDefault = function () {
      this.returnValue = !1;
    }),
    (i.stopPropagation = function () {
      this.cancelBubble = !0;
    }),
    function (a, u, c) {
      if ((n === void 0 && u === "click" && (n = !0), a && a.addEventListener))
        a.addEventListener(
          u,
          function (y) {
            (y._getPath = i._getPath), c.call(this, y);
          },
          n
        );
      else {
        var f = "on" + u,
          _ = a[f];
        a[f] = (function (y, I, x, le) {
          return function (M) {
            if ((M = M || i(window.event))) {
              M.target = M.srcElement || M.target;
              var be,
                je,
                de = !0;
              return (
                typeof x == "function" && (be = x(M)),
                (je = I.call(y, M)),
                le !== "beforeunload"
                  ? ((be !== !1 && je !== !1) || (de = !1), de)
                  : void 0
              );
            }
          };
        })(a, c, _, u);
      }
    }.apply(null, arguments);
}
function ii(e) {
  var t = "pushState" in window.history ? "popstate" : "hashchange";
  ot(window, t, e);
}
function ai(e) {
  if (e)
    return typeof window.XMLHttpRequest < "u" &&
      "withCredentials" in new XMLHttpRequest()
      ? new XMLHttpRequest()
      : typeof XDomainRequest < "u"
      ? new XDomainRequest()
      : null;
  if (typeof window.XMLHttpRequest < "u") return new XMLHttpRequest();
  if (window.ActiveXObject)
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (r) {
        Y.log(r);
      }
    }
}
ni.prototype = {
  addClass: function (e) {
    return (
      (" " + this.ele.className + " ").indexOf(" " + e + " ") === -1 &&
        (this.ele.className =
          this.ele.className + (this.ele.className === "" ? "" : " ") + e),
      this
    );
  },
  removeClass: function (e) {
    var t = " " + this.ele.className + " ";
    return (
      t.indexOf(" " + e + " ") !== -1 &&
        (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)),
      this
    );
  },
  hasClass: function (e) {
    return (" " + this.ele.className + " ").indexOf(" " + e + " ") !== -1;
  },
  attr: function (e, t) {
    return typeof e == "string" && Ne(t)
      ? this.ele.getAttribute(e)
      : (typeof e == "string" && ((t = String(t)), this.ele.setAttribute(e, t)),
        this);
  },
  offset: function () {
    try {
      var e = this.ele.getBoundingClientRect(),
        t = this.ele.ownerDocument.documentElement;
      return {
        top: e.top + window.pageYOffset - t.clientTop,
        left: e.left + window.pageXOffset - t.clientLeft,
      };
    } catch {
      return { top: 0, left: 0 };
    }
  },
  getSize: function () {
    if (!window.getComputedStyle)
      return { width: this.ele.offsetWidth, height: this.ele.offsetHeight };
    try {
      var e = this.ele.getBoundingClientRect();
      return { width: e.width, height: e.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  getStyle: function (e) {
    return this.ele.currentStyle
      ? this.ele.currentStyle[e]
      : this.ele.ownerDocument.defaultView
          .getComputedStyle(this.ele, null)
          .getPropertyValue(e);
  },
  wrap: function (e) {
    var t = document.createElement(e);
    return (
      this.ele.parentNode.insertBefore(t, this.ele),
      t.appendChild(this.ele),
      he(t)
    );
  },
  getCssStyle: function (e) {
    var t = this.ele.style.getPropertyValue(e);
    if (t) return t;
    var r = null;
    if (
      (typeof window.getMatchedCSSRules == "function" &&
        (r = window.getMatchedCSSRules(this.ele)),
      !r || !A(r))
    )
      return null;
    for (var n = r.length - 1; n >= 0; n--)
      if ((t = r[n].style.getPropertyValue(e))) return t;
  },
  sibling: function (e, t) {
    for (; (e = e[t]) && e.nodeType !== 1; );
    return e;
  },
  next: function () {
    return this.sibling(this.ele, "nextSibling");
  },
  prev: function () {
    return this.sibling(this.ele, "previousSibling");
  },
  siblings: function () {
    return hn((this.ele.parentNode || {}).firstChild, this.ele);
  },
  children: function () {
    return hn(this.ele.firstChild);
  },
  parent: function () {
    var e = this.ele.parentNode;
    return he((e = e && e.nodeType !== 11 ? e : null));
  },
  previousElementSibling: function () {
    var e = this.ele;
    if ("previousElementSibling" in document.documentElement)
      return he(e.previousElementSibling);
    for (; (e = e.previousSibling); ) if (e.nodeType === 1) return he(e);
    return he(null);
  },
  getSameTypeSiblings: function () {
    for (
      var e = this.ele,
        t = e.parentNode,
        r = e.tagName.toLowerCase(),
        n = [],
        i = 0;
      i < t.children.length;
      i++
    ) {
      var a = t.children[i];
      a.nodeType === 1 &&
        a.tagName.toLowerCase() === r &&
        n.push(t.children[i]);
    }
    return n;
  },
  getParents: function () {
    try {
      var e = this.ele;
      if (!ve(e)) return [];
      var t = [e];
      if (e === null || e.parentElement === null) return [];
      for (; e.parentElement !== null; ) (e = e.parentElement), t.push(e);
      return t;
    } catch {
      return [];
    }
  },
};
var mn = Array.prototype.forEach,
  ha = Object.prototype.hasOwnProperty;
function T(e, t, r) {
  if (e == null) return !1;
  if (mn && e.forEach === mn) e.forEach(t, r);
  else if (A(e))
    for (var n = 0, i = e.length; n < i; n++) n in e && t.call(r, e[n], n, e);
  else for (var a in e) ha.call(e, a) && t.call(r, e[a], a, e);
}
var ma = Object.prototype.hasOwnProperty;
function D(e) {
  return (
    T(Array.prototype.slice.call(arguments, 1), function (t) {
      for (var r in t) ma.call(t, r) && t[r] !== void 0 && (e[r] = t[r]);
    }),
    e
  );
}
function si(e) {
  function t(u) {
    if (!u) return "";
    try {
      return JSON.parse(u);
    } catch {
      return {};
    }
  }
  (e.timeout = e.timeout || 2e4),
    (e.credentials = typeof e.credentials > "u" || e.credentials);
  var r = ai(e.cors);
  if (!r) return !1;
  e.type || (e.type = e.data ? "POST" : "GET");
  var n,
    i = (e = D({ success: function () {}, error: function () {} }, e)).success,
    a = e.error;
  (e.success = function (u, c) {
    i(u, c), n && (clearTimeout(n), (n = null));
  }),
    (e.error = function (u, c) {
      a(u, c), n && (clearTimeout(n), (n = null));
    }),
    (n = setTimeout(function () {
      (function () {
        try {
          r && typeof r == "object" && r.abort && r.abort();
        } catch (u) {
          Y.log(u);
        }
        n &&
          (clearTimeout(n),
          (n = null),
          e.error && e.error(),
          (r.onreadystatechange = null),
          (r.onload = null),
          (r.onerror = null));
      })();
    }, e.timeout)),
    typeof XDomainRequest < "u" &&
      r instanceof XDomainRequest &&
      ((r.onload = function () {
        e.success && e.success(t(r.responseText), r.status),
          (r.onreadystatechange = null),
          (r.onload = null),
          (r.onerror = null);
      }),
      (r.onerror = function () {
        e.error && e.error(t(r.responseText), r.status),
          (r.onreadystatechange = null),
          (r.onerror = null),
          (r.onload = null);
      })),
    (r.onreadystatechange = function () {
      try {
        r.readyState == 4 &&
          ((r.status >= 200 && r.status < 300) || r.status == 304
            ? e.success(t(r.responseText), r.status)
            : e.error(t(r.responseText), r.status),
          (r.onreadystatechange = null),
          (r.onload = null));
      } catch {
        (r.onreadystatechange = null), (r.onload = null);
      }
    }),
    r.open(e.type, e.url, !0);
  try {
    e.credentials && (r.withCredentials = !0),
      d(e.header) &&
        T(e.header, function (u, c) {
          r.setRequestHeader && r.setRequestHeader(c, u);
        }),
      e.data &&
        (e.cors ||
          (r.setRequestHeader &&
            r.setRequestHeader("X-Requested-With", "XMLHttpRequest")),
        e.contentType === "application/json"
          ? r.setRequestHeader &&
            r.setRequestHeader(
              "Content-type",
              "application/json; charset=UTF-8"
            )
          : r.setRequestHeader &&
            r.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ));
  } catch (u) {
    Y.log(u);
  }
  r.send(e.data || null);
}
function oi(e, t) {
  var r = [];
  return e == null
    ? r
    : Array.prototype.map && e.map === Array.prototype.map
    ? e.map(t)
    : (T(e, function (n, i, a) {
        r.push(t(n, i, a));
      }),
      r);
}
function bt(e) {
  var t = [];
  try {
    t = oi(atob(e).split(""), function (r) {
      return "%" + ("00" + r.charCodeAt(0).toString(16)).slice(-2);
    });
  } catch {
    t = [];
  }
  try {
    return decodeURIComponent(t.join(""));
  } catch {
    return t.join("");
  }
}
function Ht(e) {
  var t = "";
  try {
    t = btoa(
      encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (r, n) {
        return String.fromCharCode("0x" + n);
      })
    );
  } catch {
    t = e;
  }
  return t;
}
function va(e, t) {
  t = t || window;
  var r = !1,
    n = !0,
    i = t.document,
    a = i.documentElement,
    u = i.addEventListener,
    c = u ? "addEventListener" : "attachEvent",
    f = u ? "removeEventListener" : "detachEvent",
    _ = u ? "" : "on",
    y = function (x) {
      (x.type == "readystatechange" && i.readyState != "complete") ||
        ((x.type == "load" ? t : i)[f](_ + x.type, y, !1),
        !r && (r = !0) && e.call(t, x.type || x));
    },
    I = function () {
      try {
        a.doScroll("left");
      } catch {
        return void setTimeout(I, 50);
      }
      y("poll");
    };
  if (i.readyState == "complete") e.call(t, "lazy");
  else {
    if (!u && a.doScroll) {
      try {
        n = !t.frameElement;
      } catch (x) {
        Y.log(x);
      }
      n && I();
    }
    i[c](_ + "DOMContentLoaded", y, !1),
      i[c](_ + "readystatechange", y, !1),
      t[c](_ + "load", y, !1);
  }
}
var kt = {
  get: function (e) {
    for (
      var t = e + "=", r = document.cookie.split(";"), n = 0;
      n < r.length;
      n++
    ) {
      for (var i = r[n]; i.charAt(0) == " "; ) i = i.substring(1, i.length);
      if (i.indexOf(t) == 0) return dt(i.substring(t.length, i.length));
    }
    return null;
  },
  set: function (e, t, r, n, i, a, u) {
    var c = u,
      f = "",
      _ = "",
      y = "";
    if ((r = r ?? 73e3) !== 0) {
      var I = new Date();
      String(r).slice(-1) === "s"
        ? I.setTime(I.getTime() + 1e3 * Number(String(r).slice(0, -1)))
        : I.setTime(I.getTime() + 24 * r * 60 * 60 * 1e3),
        (f = "; expires=" + I.toGMTString());
    }
    function x(je) {
      return !!je && je.replace(/\r\n/g, "");
    }
    b(i) && i !== "" && (y = "; SameSite=" + i), a && (_ = "; secure");
    var le = "",
      M = "",
      be = "";
    e && (le = x(e)),
      t && (M = x(t)),
      c && (be = x(c)),
      le &&
        M &&
        (document.cookie =
          le + "=" + encodeURIComponent(M) + f + "; path=/" + be + y + _);
  },
  remove: function (e, t) {
    this.set(e, "1", -1, t);
  },
  isSupport: function (e, t) {
    (e = e || "cookie_support_test"), (t = t || "1");
    var r = this;
    return (
      navigator.cookieEnabled &&
      (r.set(e, t), r.get(e) === t && (r.remove(e), !0))
    );
  },
};
function Tr(e) {
  return (
    T(Array.prototype.slice.call(arguments, 1), function (t) {
      for (var r in t) t[r] !== void 0 && e[r] === void 0 && (e[r] = t[r]);
    }),
    e
  );
}
function St(e) {
  var t = e;
  try {
    t = decodeURI(e);
  } catch {
    t = e;
  }
  return t;
}
function ya(e) {
  var t = "t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8",
    r = t.length - 1,
    n = {},
    i = 0;
  for (i = 0; i < t.length; i++) n[t.charAt(i)] = t.charAt(r - i);
  var a = "";
  for (i = 0; i < e.length; i++)
    e.charAt(i) in n ? (a += n[e.charAt(i)]) : (a += e.charAt(i));
  return a;
}
function Jt(e) {
  return Object.prototype.toString.call(e) == "[object Date]";
}
function Kr(e) {
  function t(r) {
    return r < 10 ? "0" + r : r;
  }
  return (
    e.getFullYear() +
    "-" +
    t(e.getMonth() + 1) +
    "-" +
    t(e.getDate()) +
    " " +
    t(e.getHours()) +
    ":" +
    t(e.getMinutes()) +
    ":" +
    t(e.getSeconds()) +
    "." +
    t(e.getMilliseconds())
  );
}
function ui(e) {
  return (
    T(e, function (t, r) {
      Jt(t) ? (e[r] = Kr(t)) : d(t) && (e[r] = ui(t));
    }),
    e
  );
}
function ci(e) {
  return (
    T(Array.prototype.slice.call(arguments, 1), function (t) {
      for (var r in t)
        t[r] !== void 0 && (d(t[r]) && d(e[r]) ? D(e[r], t[r]) : (e[r] = t[r]));
    }),
    e
  );
}
function li(e, t, r) {
  var n = Object.prototype.hasOwnProperty;
  if (e.filter) return e.filter(t);
  for (var i = [], a = 0; a < e.length; a++)
    if (n.call(e, a)) {
      var u = e[a];
      t.call(r, u, a, e) && i.push(u);
    }
  return i;
}
function ba(e) {
  try {
    return JSON.stringify(e, null, "  ");
  } catch {
    return JSON.stringify(e);
  }
}
function Sa(e) {
  return typeof e == "string" && e.match(/^[a-zA-Z0-9\u4e00-\u9fa5\-\.]+$/)
    ? e
    : "";
}
function Vr(e, t) {
  t = t || "domain_test";
  var r = Sa((e = e || location.hostname)),
    n = r.split(".");
  if (A(n) && n.length >= 2 && !/^(\d+\.)+\d+$/.test(r)) {
    for (var i = "." + n.splice(n.length - 1, 1); n.length > 0; )
      if (
        ((i = "." + n.splice(n.length - 1, 1) + i),
        (document.cookie = t + "=true; path=/; domain=" + i),
        document.cookie.indexOf(t + "=true") !== -1)
      ) {
        var a = new Date();
        return (
          a.setTime(a.getTime() - 1e3),
          (document.cookie =
            t +
            "=true; expires=" +
            a.toGMTString() +
            "; path=/; SameSite=Lax; domain=" +
            i),
          i
        );
      }
  }
  return "";
}
function Wt(e) {
  if (!b(e)) return null;
  var t,
    r = e.split(">");
  return (t = (function n(i) {
    var a,
      u = r.shift();
    if (!u) return i;
    try {
      a = (function (c, f) {
        var _;
        if ((c = we(c)) === "body")
          return document.getElementsByTagName("body")[0];
        if (c.indexOf("#") === 0)
          (c = c.slice(1)), (_ = document.getElementById(c));
        else if (c.indexOf(":nth-of-type") > -1) {
          var y = c.split(":nth-of-type");
          if (!y[0] || !y[1]) return null;
          var I = y[0],
            x = y[1].match(/\(([0-9]+)\)/);
          if (!x || !x[1]) return null;
          var le = Number(x[1]);
          if (!(ve(f) && f.children && f.children.length > 0)) return null;
          for (var M = f.children, be = 0; be < M.length; be++)
            if (ve(M[be]) && M[be].tagName.toLowerCase() === I && --le == 0) {
              _ = M[be];
              break;
            }
          if (le > 0) return null;
        }
        return _ || null;
      })(u, i);
    } catch (c) {
      Y.log(c);
    }
    return a && ve(a) ? n(a) : null;
  })()) && ve(t)
    ? t
    : null;
}
function di(e, t) {
  var r = "",
    n = "";
  return (
    e.textContent
      ? (r = we(e.textContent))
      : e.innerText && (r = we(e.innerText)),
    r &&
      (r = r
        .replace(/[\r\n]/g, " ")
        .replace(/[ ]+/g, " ")
        .substring(0, 255)),
    (n = r || ""),
    (t !== "input" && t !== "INPUT") || (n = e.value || ""),
    n
  );
}
function xe(e, t) {
  (t && typeof t == "string") || (t = "hostname解析异常");
  var r = null;
  try {
    r = Ae(e).hostname;
  } catch {
    Y.log("getHostname传入的url参数不合法！");
  }
  return r || t;
}
function Ar() {
  try {
    var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
    return e && e[1] ? Number.parseInt(e[1], 10) : "";
  } catch {
    return "";
  }
}
function wt(e) {
  var t = {},
    r = e.split("?")[1] || "";
  return r && (t = nr("?" + r)), t;
}
function Fe(e, t) {
  var r = Ae(e),
    n = r.searchParams.get(t) || "";
  if (!n) {
    var i = r.hash;
    i && (n = wt(i)[t] || "");
  }
  return n;
}
function fi() {
  return typeof window.matchMedia < "u" || typeof window.msMatchMedia < "u";
}
function wa() {
  var e =
      screen.msOrientation ||
      screen.mozOrientation ||
      (screen.orientation || {}).type,
    t = "未取到值";
  if (e) t = e.indexOf("landscape") > -1 ? "landscape" : "portrait";
  else if (fi()) {
    var r = window.matchMedia || window.msMatchMedia;
    r("(orientation: landscape)").matches
      ? (t = "landscape")
      : r("(orientation: portrait)").matches && (t = "portrait");
  }
  return t;
}
function Wr() {
  var e,
    t = {},
    r = navigator.userAgent.toLowerCase();
  return (
    (e = r.match(/ qq\/([\d.]+)/))
      ? (t.qqBuildinBrowser = Number(e[1].split(".")[0]))
      : (e = r.match(/mqqbrowser\/([\d.]+)/))
      ? (t.qqBrowser = Number(e[1].split(".")[0]))
      : (e = r.match(/opera.([\d.]+)/))
      ? (t.opera = Number(e[1].split(".")[0]))
      : (e = r.match(/msie ([\d.]+)/))
      ? (t.ie = Number(e[1].split(".")[0]))
      : (e = r.match(/edge.([\d.]+)/))
      ? (t.edge = Number(e[1].split(".")[0]))
      : (e = r.match(/firefox\/([\d.]+)/))
      ? (t.firefox = Number(e[1].split(".")[0]))
      : (e = r.match(/chrome\/([\d.]+)/))
      ? (t.chrome = Number(e[1].split(".")[0]))
      : (e = r.match(/version\/([\d.]+).*safari/))
      ? (t.safari = Number(e[1].match(/^\d*.\d*/)))
      : (e = r.match(/trident\/([\d.]+)/)) && (t.ie = 11),
    t
  );
}
function ae(e) {
  return b(e) ? St((e = we(e))) : St(location.href);
}
function ut(e) {
  return b(e) ? St((e = we(e))) : St(location.pathname);
}
function Nr(e, t) {
  return e.hasAttribute
    ? e.hasAttribute(t)
    : e.attributes
    ? !(!e.attributes[t] || !e.attributes[t].specified)
    : void 0;
}
function zr(e, t) {
  if (typeof t == "string") return Nr(e, t);
  if (A(t)) {
    for (var r = !1, n = 0; n < t.length; n++)
      if (Nr(e, t[n])) {
        r = !0;
        break;
      }
    return r;
  }
}
function pi(e) {
  if (typeof e != "string") return 0;
  var t = 0;
  if (e.length == 0) return t;
  for (var r = 0; r < e.length; r++)
    (t = (t << 5) - t + e.charCodeAt(r)), (t &= t);
  return t;
}
function Xr(e) {
  var t = 9007199254740992,
    r = -9007199254740992,
    n = 0;
  if (e.length > 0)
    for (var i = e.split(""), a = 0; a < i.length; a++) {
      var u = i[a].charCodeAt(),
        c = 31 * n + u;
      if (c > t) for (n = r + n; (c = 31 * n + u) < r; ) n = n / 2 + u;
      if (c < r) for (n = t + n; (c = 31 * n + u) > t; ) n = n / 2 + u;
      n = 31 * n + u;
    }
  return n;
}
function te(e, t) {
  var r = e.indexOf;
  if (r) return r.call(e, t);
  for (var n = 0; n < e.length; n++) if (t === e[n]) return n;
  return -1;
}
function ka(e, t) {
  return (
    (e.prototype = new t()),
    (e.prototype.constructor = e),
    (e.superclass = t.prototype),
    e
  );
}
var Pa = Object.prototype.hasOwnProperty;
function gi(e) {
  return !(!e || !Pa.call(e, "callee"));
}
function _i(e) {
  return Object.prototype.toString.call(e) == "[object Boolean]";
}
function re(e) {
  if (d(e)) {
    for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
    return !0;
  }
  return !1;
}
function hi(e) {
  return typeof e != "string"
    ? !1
    : /^https?:\/\/.+/.test(e) !== !1 || (Y.log("Invalid URL"), !1);
}
function mi() {
  return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
}
function Dt(e) {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}
function De(e) {
  return (
    Object.prototype.toString.call(e) == "[object Number]" &&
    /[\d\.]+/.test(String(e))
  );
}
function $a() {
  var e = !1;
  if (typeof navigator != "object" || typeof navigator.sendBeacon != "function")
    return e;
  var t = Wr(),
    r = navigator.userAgent.toLowerCase();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var n = (r.match(/os [\d._]*/gi) + "")
      .replace(/[^0-9|_.]/gi, "")
      .replace(/_/gi, ".")
      .split(".");
    typeof t.safari > "u" && (t.safari = n[0]),
      n[0] && (t.qqBuildinBrowser || t.qqBrowser)
        ? (e = !1)
        : n[0] && n[0] < 13
        ? (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) &&
          (e = !0)
        : (t.chrome > 41 ||
            t.firefox > 30 ||
            t.opera > 25 ||
            t.safari > 11.3) &&
          (e = !0);
  } else
    (t.chrome > 38 ||
      t.edge > 13 ||
      t.firefox > 30 ||
      t.opera > 25 ||
      t.safari > 11) &&
      (e = !0);
  return e;
}
function Ca() {
  return (
    typeof window.XMLHttpRequest < "u" &&
    ("withCredentials" in new XMLHttpRequest() || typeof XDomainRequest < "u")
  );
}
function vi(e) {
  if (!d(e) || !b(e.callbackName))
    return Y.log("JSONP 请求缺少 callbackName"), !1;
  (e.success = P(e.success) ? e.success : function () {}),
    (e.error = P(e.error) ? e.error : function () {}),
    (e.data = e.data || "");
  var t = document.createElement("script"),
    r = document.getElementsByTagName("head")[0],
    n = null,
    i = !1;
  if (((t.defer = "defer"), r.appendChild(t), De(e.timeout))) {
    var a = Math.min(e.timeout, 3e5);
    n = setTimeout(function () {
      if (i) return !1;
      e.error("timeout"),
        (window[e.callbackName] = function () {
          Y.log("call jsonp error");
        }),
        (n = null),
        r.removeChild(t),
        (i = !0);
    }, a);
  }
  if (
    ((window[e.callbackName] = function () {
      clearTimeout(n),
        (n = null),
        e.success.apply(null, arguments),
        (window[e.callbackName] = function () {
          Y.log("call jsonp error");
        }),
        r.removeChild(t);
    }),
    e.url.indexOf("?") > -1
      ? (e.url += "&callbackName=" + e.callbackName)
      : (e.url += "?callbackName=" + e.callbackName),
    d(e.data))
  ) {
    var u = [];
    T(e.data, function (c, f) {
      u.push(f + "=" + c);
    }),
      (e.data = u.join("&")),
      (e.url += "&" + e.data);
  }
  (t.onerror = function (c) {
    if (i) return !1;
    (window[e.callbackName] = function () {
      Y.log("call jsonp error");
    }),
      clearTimeout(n),
      (n = null),
      r.removeChild(t),
      e.error(c),
      (i = !0);
  }),
    (t.src = encodeURI(e.url));
}
function yi(e) {
  ({
    visibleHandler: P(e.visible) ? e.visible : function () {},
    hiddenHandler: P(e.hidden) ? e.hidden : function () {},
    visibilityChange: null,
    hidden: null,
    isSupport: function () {
      return typeof document[this.hidden] < "u";
    },
    init: function () {
      typeof document.hidden < "u"
        ? ((this.hidden = "hidden"),
          (this.visibilityChange = "visibilitychange"))
        : typeof document.mozHidden < "u"
        ? ((this.hidden = "mozHidden"),
          (this.visibilityChange = "mozvisibilitychange"))
        : typeof document.msHidden < "u"
        ? ((this.hidden = "msHidden"),
          (this.visibilityChange = "msvisibilitychange"))
        : typeof document.webkitHidden < "u" &&
          ((this.hidden = "webkitHidden"),
          (this.visibilityChange = "webkitvisibilitychange")),
        this.listen();
    },
    listen: function () {
      if (this.isSupport()) {
        var t = this;
        ot(
          document,
          this.visibilityChange,
          function () {
            document[t.hidden] ? t.hiddenHandler() : t.visibleHandler();
          },
          1
        );
      } else
        ot(window, "focus", this.visibleHandler),
          ot(window, "blur", this.hiddenHandler);
    },
  }.init());
}
function lr(e) {
  e = D(
    {
      success: function () {},
      error: function () {},
      appendCall: function (r) {
        document.getElementsByTagName("head")[0].appendChild(r);
      },
    },
    e
  );
  var t = null;
  e.type === "css" &&
    (((t = document.createElement("link")).rel = "stylesheet"),
    (t.href = e.url)),
    e.type === "js" &&
      (((t = document.createElement("script")).async = "async"),
      t.setAttribute("charset", "UTF-8"),
      (t.src = e.url),
      (t.type = "text/javascript")),
    (t.onload = t.onreadystatechange =
      function () {
        (this.readyState &&
          this.readyState !== "loaded" &&
          this.readyState !== "complete") ||
          (e.success(), (t.onload = t.onreadystatechange = null));
      }),
    (t.onerror = function () {
      e.error(), (t.onerror = null);
    }),
    e.appendCall(t);
}
function Ia(e) {
  if (typeof e != "string") return "";
  for (var t = /^\s*javascript/i; t.test(e); ) e = e.replace(t, "");
  return e;
}
function bi(e, t) {
  t = typeof t == "number" ? t : 13;
  for (var r = (e = String(e)).split(""), n = 0, i = r.length; n < i; n++)
    r[n].charCodeAt(0) < 126 &&
      (r[n] = String.fromCharCode((r[n].charCodeAt(0) + t) % 126));
  return r.join("");
}
function Si(e) {
  return bi((e = String(e)), 113);
}
function Zr(e) {
  (d(e) || A(e)) &&
    T(e, function (t, r) {
      d(t) || A(t) ? Zr(e[r]) : Jt(t) && (e[r] = Kr(t));
    });
}
var mt = {
  isSupport: function () {
    var e = !0,
      t = "testIsSupportStorage";
    try {
      sessionStorage && sessionStorage.setItem
        ? (sessionStorage.setItem("__session_storage_support__", t),
          sessionStorage.removeItem("__session_storage_support__", t),
          (e = !0))
        : (e = !1);
    } catch {
      e = !1;
    }
    return e;
  },
};
function zt(e) {
  var t = document.createElement("style");
  t.type = "text/css";
  try {
    t.appendChild(document.createTextNode(e));
  } catch {
    t.styleSheet.cssText = e;
  }
  var r = document.getElementsByTagName("head")[0],
    n = document.getElementsByTagName("script")[0];
  r
    ? r.children.length
      ? r.insertBefore(t, r.children[0])
      : r.appendChild(t)
    : n.parentNode.insertBefore(t, n);
}
function Oa(e) {
  if (typeof e != "string") return Y.log("转换unicode错误", e), e;
  for (var t = "", r = 0; r < e.length; r++)
    t += "\\" + e.charCodeAt(r).toString(16);
  return t;
}
function ja(e, t, r) {
  var n,
    i,
    a,
    u = null,
    c = 0;
  r || (r = {});
  var f = function () {
    (c = r.leading === !1 ? 0 : _e()),
      (u = null),
      (a = e.apply(n, i)),
      u || (n = i = null);
  };
  return function () {
    var _ = _e();
    c || r.leading !== !1 || (c = _);
    var y = t - (_ - c);
    return (
      (n = this),
      (i = arguments),
      y <= 0 || y > t
        ? (u && (clearTimeout(u), (u = null)),
          (c = _),
          (a = e.apply(n, i)),
          u || (n = i = null))
        : u || r.trailing === !1 || (u = setTimeout(f, y)),
      a
    );
  };
}
function wi(e) {
  var t = [];
  return (
    e == null ||
      T(e, function (r) {
        t[t.length] = r;
      }),
    t
  );
}
function Ta(e) {
  return e
    ? e.toArray
      ? e.toArray()
      : A(e) || gi(e)
      ? Array.prototype.slice.call(e)
      : wi(e)
    : [];
}
function Xt(e) {
  for (var t, r = [], n = {}, i = 0; i < e.length; i++)
    (t = e[i]) in n || ((n[t] = !0), r.push(t));
  return r;
}
var Aa = { "+": "-", "/": "_", "=": "." },
  Na = { "-": "+", _: "/", ".": "=" },
  xa = {
    encode: function (e) {
      return e.replace(/[+\/=]/g, function (t) {
        return Aa[t];
      });
    },
    decode: function (e) {
      return e.replace(/[-_.]/g, function (t) {
        return Na[t];
      });
    },
    trim: function (e) {
      return e.replace(/[.=]{1,2}$/, "");
    },
    isBase64: function (e) {
      return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e);
    },
    isUrlSafeBase64: function (e) {
      return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e);
    },
  },
  Da = {
    __proto__: null,
    ConcurrentStorage: rr,
    EventEmitter: Pe,
    URL: Ae,
    UUID: et,
    addEvent: ot,
    addHashEvent: ii,
    ajax: si,
    base64Decode: bt,
    base64Encode: Ht,
    bindReady: va,
    cookie: kt,
    coverExtend: Tr,
    decodeURI: St,
    decodeURIComponent: dt,
    dfmapping: ya,
    each: T,
    encodeDates: ui,
    extend: D,
    extend2Lev: ci,
    filter: li,
    formatDate: Kr,
    formatJsonString: ba,
    getCookieTopLevelDomain: Vr,
    getDomBySelector: Wt,
    getElementContent: di,
    getHostname: xe,
    getIOSVersion: Ar,
    getQueryParam: Fe,
    getQueryParamsFromUrl: wt,
    getRandom: me,
    getRandomBasic: ri,
    getScreenOrientation: wa,
    getUA: Wr,
    getURL: ae,
    getURLPath: ut,
    getURLSearchParams: nr,
    hasAttribute: Nr,
    hasAttributes: zr,
    hashCode: pi,
    hashCode53: Xr,
    indexOf: te,
    inherit: ka,
    isArguments: gi,
    isArray: A,
    isBoolean: _i,
    isDate: Jt,
    isElement: ve,
    isEmptyObject: re,
    isFunction: P,
    isHttpUrl: hi,
    isIOS: mi,
    isJSONString: Dt,
    isNumber: De,
    isObject: d,
    isString: b,
    isSupportBeaconSend: $a,
    isSupportCors: Ca,
    isUndefined: Ne,
    jsonp: vi,
    listenPageState: yi,
    loadScript: lr,
    localStorage: L,
    logger: Y,
    map: oi,
    mediaQueriesSupported: fi,
    now: _e,
    removeScriptProtocol: Ia,
    rot13defs: Si,
    rot13obfs: bi,
    ry: he,
    safeJSONParse: G,
    searchObjDate: Zr,
    sessionStorage: mt,
    setCssStyle: zt,
    strToUnicode: Oa,
    throttle: ja,
    toArray: Ta,
    trim: we,
    unique: Xt,
    urlParse: qr,
    urlSafeBase64: xa,
    values: wi,
    xhr: ai,
  },
  qt = [],
  ft = {
    appendWriter: function (e) {
      qt.push(e);
    },
    msg: function () {
      var e = { module: "", level: "log", brand: "web-sdk", content: null };
      return (
        (e.content = Array.prototype.slice.call(arguments)),
        {
          module: function (t) {
            return b(t) && (e.module = t), this;
          },
          level: function (t) {
            return b(t) && (e.level = t), this;
          },
          brand: function (t) {
            return b(t) && (e.brand = t), this;
          },
          log: function () {
            if (e.content && e.content.length) {
              for (var t = 0; t < qt.length; t++)
                if (typeof qt[t] == "function")
                  try {
                    qt[t].call(null, e);
                  } catch {}
            }
            return this;
          },
        }
      );
    },
  };
function Le() {
  ft.msg.apply(ft, arguments).log();
}
function O() {
  ft.msg.apply(ft, arguments).level("warn").log();
}
function N() {
  ft.msg.apply(ft, arguments).level("error").log();
}
var v = {},
  Zt = {
    preset_properties: {
      search_keyword_baidu: !1,
      latest_utm: !0,
      latest_traffic_source_type: !0,
      latest_search_keyword: !0,
      latest_referrer: !0,
      latest_referrer_host: !1,
      latest_landing_page: !1,
      latest_wx_ad_click_id: void 0,
      url: !0,
      title: !0,
    },
    encrypt_cookie: !1,
    enc_cookie: !1,
    img_use_crossorigin: !1,
    name: "sa",
    max_referrer_string_length: 200,
    max_string_length: 500,
    max_id_length: 255,
    max_key_length: 100,
    cross_subdomain: !0,
    show_log: !1,
    is_debug: !1,
    source_channel: [],
    sdk_id: "",
    vtrack_ignore: {},
    auto_init: !0,
    is_track_single_page: !1,
    is_single_page: !1,
    batch_send: !1,
    source_type: {},
    callback_timeout: 200,
    datasend_timeout: 8e3,
    is_track_device_id: !1,
    ignore_oom: !0,
    app_js_bridge: !1,
    white_list: {},
  };
Zt.white_list[location.host] = Ae(location.href).hostname;
var ki = "utm_source utm_medium utm_campaign utm_content utm_term",
  dr = "1.26.3",
  Pi = "sensorsdata_domain_test",
  Lt = {
    EMAIL: "$identity_email",
    MOBILE: "$identity_mobile",
    LOGIN: "$identity_login_id",
  };
function Gr(e) {
  var t = v.current_domain;
  switch (typeof t) {
    case "function":
      var r = t();
      return r === "" || we(r) === ""
        ? "url解析失败"
        : r.indexOf(".") !== -1
        ? r
        : "url解析失败";
    case "string":
      return t === "" || we(t) === ""
        ? "url解析失败"
        : t.indexOf(".") !== -1
        ? t
        : "url解析失败";
    default:
      var n = Vr(null, Pi);
      return e === "" || n === "" ? "url解析失败" : n;
  }
}
var oe = {
  get: function (e) {
    return kt.get(e);
  },
  set: function (e, t, r, n) {
    var i = "";
    if ((n = Ne(n) ? v.cross_subdomain : n)) {
      var a = Gr(location.href);
      a === "url解析失败" && (a = ""), (i = a ? "; domain=" + a : "");
    }
    return kt.set(e, t, r, n, v.set_cookie_samesite, v.is_secure_cookie, i);
  },
  remove: function (e, t) {
    return (t = Ne(t) ? v.cross_subdomain : t), kt.remove(e, t);
  },
  isSupport: function (e, t) {
    return (
      (e = e || "sajssdk_2015_cookie_access_test"),
      (t = t || "1"),
      kt.isSupport(e, t)
    );
  },
};
function Et() {
  var e = document.referrer;
  if (!e) return !1;
  try {
    var t = Ae(e).hostname;
    return t && t.substring(t.length - 9) === "baidu.com";
  } catch {
    return !1;
  }
}
var Ut = {
  data: {},
  id: function () {
    return this.data.id ? this.data.id : ((this.data.id = Ci()), this.data.id);
  },
  type: function () {
    return this.data.type
      ? this.data.type
      : ((this.data.type = $i()), this.data.type);
  },
};
function $i() {
  var e = wt(document.referrer);
  if (re(e) || !e.eqid) {
    var t = wt(location.href);
    return e.ck || t.utm_source
      ? "baidu_sem_keyword_id"
      : "baidu_other_keyword_id";
  }
  return "baidu_seo_keyword_id";
}
function Ci() {
  var e = wt(document.referrer);
  return re(e) || !e.eqid ? et().replace(/-/g, "") : e.eqid;
}
function Xe(e, t) {
  return b((e = e || document.referrer))
    ? ((e = St((e = we(e)))).indexOf("https://www.baidu.com/") !== 0 ||
        t ||
        (e = e.split("?")[0]),
      b((e = e.slice(0, v.max_referrer_string_length))) ? e : "")
    : "取值异常_referrer异常_" + String(e);
}
function ir(e) {
  if ((e = e || document.referrer) === "") return !0;
  var t = Vr(null, Pi);
  return xe(e).indexOf(t) === -1 && t !== "";
}
function It(e, t) {
  e = e || document.referrer;
  var r = v.source_type.keyword;
  if (document && b(e)) {
    if (e.indexOf("http") === 0) {
      var n = Ii(e),
        i = wt(e);
      if (re(i))
        return v.preset_properties.search_keyword_baidu && Et()
          ? void 0
          : "未取到值";
      var a = null;
      for (var u in r)
        if (n === u && d(i)) {
          if (A((a = r[u])))
            for (u = 0; u < a.length; u++) {
              var c = i[a[u]];
              if (c) return t ? { active: c } : c;
            }
          else if (i[a]) return t ? { active: i[a] } : i[a];
        }
      return v.preset_properties.search_keyword_baidu && Et()
        ? void 0
        : "未取到值";
    }
    return e === "" ? "未取到值_直接打开" : "未取到值_非http的url";
  }
  return "取值异常_referrer异常_" + String(e);
}
function Ii(e) {
  var t = xe(e);
  if (!t || t === "hostname解析异常") return "";
  var r = {
    baidu: [/^.*\.baidu\.com$/],
    bing: [/^.*\.bing\.com$/],
    google: [
      /^www\.google\.com$/,
      /^www\.google\.com\.[a-z]{2}$/,
      /^www\.google\.[a-z]{2}$/,
    ],
    sm: [/^m\.sm\.cn$/],
    so: [/^.+\.so\.com$/],
    sogou: [/^.*\.sogou\.com$/],
    yahoo: [/^.*\.yahoo\.com$/],
  };
  for (var n in r)
    for (var i = r[n], a = 0, u = i.length; a < u; a++)
      if (i[a].test(t)) return n;
  return "未知搜索引擎";
}
var Qe = {
    distinct_id: function () {},
    jssdkDebug: function () {},
    _sendDebug: function (e) {},
    apph5: function (e) {
      var t = "app_h5打通失败-",
        r = {
          1: t + "use_app_track为false",
          2: t + "Android或者iOS，没有暴露相应方法",
          3.1: t + "Android校验server_url失败",
          3.2: t + "iOS校验server_url失败",
          4.1: t + "H5 校验 iOS server_url 失败",
          4.2: t + "H5 校验 Android server_url 失败",
        },
        n = e.output,
        i = e.step,
        a = e.data || "";
      (n !== "all" && n !== "console") || Le(r[i]),
        (n === "all" || n === "code") &&
          d(v.is_debug) &&
          v.is_debug.apph5 &&
          ((a.type && a.type.slice(0, 7) === "profile") ||
            (a.properties._jssdk_debug_info = "apph5-" + String(i)));
    },
    defineMode: function (e) {
      var t = {
        1: {
          title: "当前页面无法进行可视化全埋点",
          message:
            "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 App SDK 的配置，详细信息请查看文档。",
          link_text: "配置文档",
          link_url:
            "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html",
        },
        2: {
          title: "当前页面无法进行可视化全埋点",
          message:
            "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 Web JS SDK 的配置，详细信息请查看文档。",
          link_text: "配置文档",
          link_url:
            "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html",
        },
        3: {
          title: "当前页面无法进行可视化全埋点",
          message:
            "Web JS SDK 没有开启全埋点配置，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
          link_text: "配置文档",
          link_url:
            "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html",
        },
        4: {
          title: "当前页面无法进行可视化全埋点",
          message:
            "Web JS SDK 配置的数据校验地址与 App SDK 配置的数据校验地址不一致，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
          link_text: "配置文档",
          link_url:
            "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html",
        },
      };
      return !(!e || !t[e]) && t[e];
    },
    protocol: {
      protocolIsSame: function (e, t) {
        try {
          if (Ae(e).protocol !== Ae(t).protocol) return !1;
        } catch {
          return O("不支持 _.URL 方法"), !1;
        }
        return !0;
      },
      serverUrl: function () {
        b(v.server_url) &&
          v.server_url !== "" &&
          !this.protocolIsSame(v.server_url, location.href) &&
          O(`SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。
因为：1、https 下面发送 http 的图片请求会失败。2、http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。`);
      },
      ajax: function (e) {
        if (e === v.server_url) return !1;
        b(e) &&
          e !== "" &&
          !this.protocolIsSame(e, location.href) &&
          O(
            "SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。因为 http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。"
          );
      },
    },
  },
  E = {
    initPage: function () {
      var e = Xe(),
        t = ae(),
        r = Gr(t);
      r || Qe.jssdkDebug("url_domain异常_" + t + "_" + r),
        (this.pageProp = {
          referrer: e,
          referrer_host: e ? xe(e) : "",
          url: t,
          url_host: xe(t, "url_host取值异常"),
          url_domain: r,
        });
    },
    pageProp: {},
    campaignParams: function () {
      return s.kit.getUtmData();
    },
    campaignParamsStandard: function (e, t) {
      (e = e || ""), (t = t || "");
      var r = E.campaignParams(),
        n = {},
        i = {};
      return (
        T(r, function (a, u, c) {
          (" " + ki + " ").indexOf(" " + u + " ") !== -1
            ? (n[e + u] = c[u])
            : (i[t + u] = c[u]);
        }),
        { $utms: n, otherUtms: i }
      );
    },
    properties: function () {
      var e =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          (document.body && document.body.clientHeight) ||
          0,
        t =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          (document.body && document.body.clientWidth) ||
          0;
      return {
        $timezone_offset: new Date().getTimezoneOffset(),
        $screen_height: Number(screen.height) || 0,
        $screen_width: Number(screen.width) || 0,
        $viewport_height: e,
        $viewport_width: t,
        $lib: "js",
        $lib_version: dr,
      };
    },
    currentProps: {},
    register: function (e) {
      D(E.currentProps, e);
    },
  };
function Oi(e, t) {
  var r = "";
  if (v.cross_subdomain === !1) {
    try {
      if (!t) {
        var n = location.host;
        Ne(s.para.white_list[n]) || (r = s.para.white_list[n]);
      }
    } catch (i) {
      N(i);
    }
    r =
      typeof r == "string" && r !== ""
        ? "sajssdk_2015_" + v.sdk_id + e + "_" + r.replace(/\./g, "_")
        : "sajssdk_2015_root_" + v.sdk_id + e;
  } else r = "sajssdk_2015_cross_" + v.sdk_id + e;
  return r;
}
function ar() {
  return oe.isSupport()
    ? oe.get("sensorsdata_is_new_user") !== null ||
        oe.get(Oi("new_user")) !== null
    : sr.get(sr.getNewUserFlagMemoryKey("new_user")) !== null;
}
oe.getNewUser = ar;
var sr = {
    data: {},
    get: function (e) {
      var t = this.data[e];
      return t === void 0
        ? null
        : t._expirationTimestamp_ !== void 0
        ? new Date().getTime() > t._expirationTimestamp_
          ? null
          : t.value
        : t;
    },
    set: function (e, t, r) {
      if (r) {
        var n = new Date();
        t = {
          value: t,
          _expirationTimestamp_:
            String(r).slice(-1) === "s"
              ? n.getTime() + 1e3 * Number(String(r).slice(0, -1))
              : n.getTime() + 24 * r * 60 * 60 * 1e3,
        };
      }
      this.data[e] = t;
    },
    getNewUserFlagMemoryKey: function (e) {
      return "sajssdk_2015_" + v.sdk_id + e;
    },
  },
  Rt = {
    checkIsAddSign: function (e) {
      e.type === "track" &&
        (ar()
          ? (e.properties.$is_first_day = !0)
          : (e.properties.$is_first_day = !1));
    },
    is_first_visit_time: !1,
    is_page_first_visited: !1,
    checkIsFirstTime: function (e) {
      e.type === "track" &&
        e.event === "$pageview" &&
        (this.is_first_visit_time
          ? ((e.properties.$is_first_time = !0),
            (this.is_first_visit_time = !1))
          : (e.properties.$is_first_time = !1));
    },
    setDeviceId: function (e, t) {
      var r = null,
        n = oe.get("sensorsdata2015jssdkcross" + s.para.sdk_id),
        i = {};
      (n = s.kit.userDecryptIfNeeded(n)) != null &&
        Dt(n) &&
        (i = JSON.parse(n)).$device_id &&
        (r = i.$device_id),
        (r = r || e),
        s.para.cross_subdomain === !0
          ? t.set("$device_id", r)
          : ((i.$device_id = r),
            (i = JSON.stringify(i)),
            s.para.encrypt_cookie && (i = s.kit.userEncrypt(i)),
            oe.set("sensorsdata2015jssdkcross" + s.para.sdk_id, i, null, !0)),
        s.para.is_track_device_id && (E.currentProps.$device_id = r);
    },
    storeInitCheck: function () {
      if (s.is_first_visitor) {
        var e = new Date(),
          t = {
            h: 23 - e.getHours(),
            m: 59 - e.getMinutes(),
            s: 59 - e.getSeconds(),
          };
        oe.isSupport()
          ? oe.set(Oi("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s")
          : sr.set(
              sr.getNewUserFlagMemoryKey("new_user"),
              "1",
              3600 * t.h + 60 * t.m + t.s + "s"
            ),
          (this.is_first_visit_time = !0),
          (this.is_page_first_visited = !0);
      } else
        ar() ||
          (this.checkIsAddSign = function (r) {
            r.type === "track" && (r.properties.$is_first_day = !1);
          }),
          (this.checkIsFirstTime = function (r) {
            r.type === "track" &&
              r.event === "$pageview" &&
              (r.properties.$is_first_time = !1);
          });
    },
  };
function nt(e, t, r) {
  var n = !(!d(v.heatmap) || !v.heatmap.useCapture);
  return (
    d(v.heatmap) && Ne(v.heatmap.useCapture) && t === "click" && (n = !0),
    ot(e, t, r, n)
  );
}
var Qr = function () {
  (this._events = []), (this.pendingEvents = []);
};
function Yr() {
  function e(c, f) {
    for (var _ = 0; _ < c.length; _++)
      if (f.split("?")[0].indexOf(c[_]) !== -1) return !0;
  }
  var t = "(" + v.source_type.utm.join("|") + ")\\=[^&]+",
    r = v.source_type.search,
    n = v.source_type.social,
    i = document.referrer || "",
    a = E.pageProp.url;
  if (a) {
    var u = a.match(new RegExp(t));
    return u && u[0]
      ? "付费广告流量"
      : e(r, i)
      ? "自然搜索流量"
      : e(n, i)
      ? "社交网站流量"
      : i === ""
      ? "直接流量"
      : "引荐流量";
  }
  return "获取url异常";
}
function ji(e) {
  var t = Fe(e, "gdt_vid"),
    r = Fe(e, "hash_key"),
    n = Fe(e, "callbacks"),
    i = { click_id: "", hash_key: "", callbacks: "" };
  return (
    b(t) &&
      t.length &&
      ((i.click_id = t.length == 16 || t.length == 18 ? t : "参数解析不合法"),
      b(r) && r.length && (i.hash_key = r),
      b(n) && n.length && (i.callbacks = n)),
    i
  );
}
function Ti(e) {
  var t = e.properties,
    r = JSON.parse(JSON.stringify(e));
  d(t) &&
    T(t, function (n, i) {
      if (P(n))
        try {
          (t[i] = n(r)),
            P(t[i]) &&
              (O("您的属性- " + i + " 格式不满足要求，我们已经将其删除"),
              delete t[i]);
        } catch {
          delete t[i], O("您的属性- " + i + " 抛出了异常，我们已经将其删除");
        }
    });
}
function Ai(e) {
  if (d(e) && e.$option) {
    var t = e.$option;
    return delete e.$option, t;
  }
  return {};
}
function Ni(e) {
  var t = {};
  return (
    T(e, function (r, n) {
      r != null && (t[n] = r);
    }),
    t
  );
}
function La(e) {
  var t = !e.type || e.type.slice(0, 7) !== "profile";
  d(e.properties) &&
    t &&
    ("$referrer" in e.properties &&
      (e.properties.$referrer_host =
        e.properties.$referrer === ""
          ? ""
          : xe(e.properties.$referrer, "取值异常")),
    v.preset_properties.latest_referrer &&
      v.preset_properties.latest_referrer_host &&
      (e.properties.$latest_referrer_host =
        e.properties.$latest_referrer === ""
          ? ""
          : xe(e.properties.$latest_referrer, "取值异常")));
}
function Ea(e) {
  var t = !e.type || e.type.slice(0, 7) !== "profile",
    r = v.preset_properties && t;
  r &&
    v.preset_properties.url &&
    Ne(e.properties.$url) &&
    (e.properties.$url = ae()),
    r &&
      v.preset_properties.title &&
      Ne(e.properties.$title) &&
      (e.properties.$title = document.title);
}
function xi(e) {
  if (!ve(e.target)) return !1;
  var t = e.target,
    r = t.tagName.toLowerCase(),
    n = {};
  return (
    (n.$element_type = r),
    (n.$element_name = t.getAttribute("name")),
    (n.$element_id = t.getAttribute("id")),
    (n.$element_class_name = b(t.className) ? t.className : null),
    (n.$element_target_url = t.getAttribute("href")),
    (n.$element_content = or(t, r)),
    ((n = Ni(n)).$url = ae()),
    (n.$url_path = ut()),
    (n.$title = document.title),
    n
  );
}
function Ua(e) {
  var t = v.heatmap && P(v.heatmap.collect_input) && v.heatmap.collect_input(e);
  return ((e.type === "button" || e.type === "submit" || t) && e.value) || "";
}
function or(e, t) {
  return b(t) && t.toLowerCase() === "input" ? Ua(e) : di(e, t);
}
function en(e) {
  return Qe.protocol.ajax(e.url), si(e);
}
function Di(e) {
  if (
    (typeof e == "string" &&
      (e = we(e)) &&
      (e.slice(0, 3) === "://"
        ? (e = location.protocol.slice(0, -1) + e)
        : e.slice(0, 2) === "//"
        ? (e = location.protocol + e)
        : e.slice(0, 4) !== "http" && (e = "")),
    A(e) && e.length)
  )
    for (var t = 0; t < e.length; t++)
      /sa\.gif[^\/]*$/.test(e[t]) ||
        (e[t] = e[t]
          .replace(/\/sa$/, "/sa.gif")
          .replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
  else
    /sa\.gif[^\/]*$/.test(e) ||
      typeof e != "string" ||
      (e = e
        .replace(/\/sa$/, "/sa.gif")
        .replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
  return e;
}
function Li(e) {
  b(e) || (e = JSON.stringify(e));
  var t = Ht(e),
    r = "crc=" + pi(t);
  return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(r);
}
function Ra(e) {
  var t,
    r = location.href,
    n = window.history.pushState,
    i = window.history.replaceState;
  P(window.history.pushState) &&
    (window.history.pushState = function () {
      n.apply(window.history, arguments), e(r), (r = location.href);
    }),
    P(window.history.replaceState) &&
      (window.history.replaceState = function () {
        i.apply(window.history, arguments), e(r), (r = location.href);
      }),
    (t = window.document.documentMode
      ? "hashchange"
      : n
      ? "popstate"
      : "hashchange"),
    ot(window, t, function () {
      e(r), (r = location.href);
    });
}
Qr.prototype = {
  emit: function (e) {
    var t = [].slice.call(arguments, 1);
    T(this._events, function (r) {
      r.type === e && r.callback.apply(r.context, t);
    }),
      this.pendingEvents.push({ type: e, data: t }),
      this.pendingEvents.length > 20 && this.pendingEvents.shift();
  },
  on: function (e, t, r, n) {
    P(t) &&
      (this._events.push({ type: e, callback: t, context: r || this }),
      (n = n !== !1),
      this.pendingEvents.length > 0 &&
        n &&
        T(this.pendingEvents, function (i) {
          i.type === e && t.apply(r, i.data);
        }));
  },
  tempAdd: function (e, t) {
    if (t && e) return this.emit(e, t);
  },
  isReady: function () {},
};
var K = {},
  xr = new Pe();
function Ei(e, t) {
  var r = [];
  typeof e == "string" &&
    e in K.EVENT_LIST &&
    ((r = K.EVENT_LIST[e]), K[r[0]].on(r[1], t));
}
(K.spa = xr),
  (K.sdk = new Pe()),
  (K.data = new Pe()),
  (K.initSystemEvent = function () {
    Ra(function (e) {
      xr.emit("switch", e);
    });
  }),
  (K.EVENT_LIST = {
    spaSwitch: ["spa", "switch"],
    sdkBeforeInit: ["sdk", "beforeInit"],
    sdkInitPara: ["sdk", "initPara"],
    sdkAfterInitPara: ["sdk", "afterInitPara"],
    sdkInitAPI: ["sdk", "initAPI"],
    sdkAfterInitAPI: ["sdk", "afterInitAPI"],
    sdkAfterInit: ["sdk", "afterInit"],
    sdkReady: ["sdk", "ready"],
    dataSendSuccess: ["data", "sendSuccess"],
    dataSendFail: ["data", "sendFail"],
  });
var Dr = function (e) {
  (this.callback = e.callback),
    (this.server_url = e.server_url),
    (this.data = e.data),
    (this.origin_data = e.origin_data);
};
(Dr.prototype.start = function () {
  var e = this,
    t = new Date();
  en({
    url: this.server_url,
    type: "POST",
    data: e.data,
    credentials: !1,
    timeout: v.datasend_timeout,
    cors: !0,
    success: function (r, n) {
      K.data.emit("sendSuccess", {
        status: String(n),
        resText: r,
        type: "ajax_single",
        timeout_config: v.datasend_timeout,
        request_timeout: new Date() - t,
        data: e.origin_data,
      }),
        e.end();
    },
    error: function (r, n) {
      K.data.emit("sendFail", {
        status: String(n),
        resText: r,
        type: "ajax_single",
        timeout_config: v.datasend_timeout,
        request_timeout: new Date() - t,
        data: e.origin_data,
      }),
        e.end();
    },
  });
}),
  (Dr.prototype.end = function () {
    if (this.callback) {
      if ((Le("warning: sdk callback is deprecated."), !P(this.callback)))
        return void Le("error: sdk callback must be function.");
      this.callback();
    }
  });
var vn = "sawebjssdk-",
  vr = "tab-sawebjssdk-";
function Ui() {
  (this.sendTimeStamp = 0),
    (this.timer = null),
    (this.serverUrl = ""),
    (this.hasTabStorage = !1);
}
Ui.prototype = {
  batchInterval: function () {
    this.serverUrl === "" && this.getServerUrl(),
      this.hasTabStorage ||
        (this.generateTabStorage(), (this.hasTabStorage = !0));
    var e = this;
    e.timer = setTimeout(function () {
      e.updateExpireTime(),
        e.recycle(),
        e.send(),
        clearTimeout(e.timer),
        e.batchInterval();
    }, v.batch_send.send_interval);
  },
  getServerUrl: function () {
    if (
      !(
        (b(v.server_url) && v.server_url !== "") ||
        (A(v.server_url) && v.server_url.length)
      )
    )
      return N(
        "当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"
      );
    this.serverUrl = A(v.server_url) ? v.server_url[0] : v.server_url;
  },
  send: function () {
    if (
      this.sendTimeStamp &&
      _e() - this.sendTimeStamp < v.batch_send.send_interval
    )
      return !1;
    var e = L.get(this.tabKey);
    if (e) {
      this.sendTimeStamp = _e();
      var t = Xt((e = G(e) || this.generateTabStorageVal()).data);
      if (t.length) {
        for (var r = [], n = 0; n < t.length; n++) {
          var i = s.store.readObjectVal(t[n]);
          i && ((i._flush_time = new Date().getTime()), r.push(i));
        }
        r.length && this.request(r, e.data);
      }
    }
  },
  updateExpireTime: function () {
    var e = L.get(this.tabKey);
    e &&
      (((e = G(e) || this.generateTabStorageVal()).expireTime =
        _e() + 2 * v.batch_send.send_interval),
      (e.serverUrl = this.serverUrl),
      L.set(this.tabKey, JSON.stringify(e)));
  },
  request: function (e, t) {
    var r = this,
      n = new Date();
    en({
      url: this.serverUrl,
      type: "POST",
      data: "data_list=" + encodeURIComponent(Ht(JSON.stringify(e))),
      credentials: !1,
      timeout: v.batch_send.datasend_timeout,
      cors: !0,
      success: function (i, a) {
        K.data.emit("sendSuccess", {
          status: String(a),
          resText: i,
          type: "ajax_batch",
          timeout_config: v.batch_send.datasend_timeout,
          request_timeout: new Date() - n,
          data: e,
        }),
          r.remove(t),
          (r.sendTimeStamp = 0);
      },
      error: function (i, a) {
        K.data.emit("sendFail", {
          status: String(a),
          resText: i,
          type: "ajax_batch",
          timeout_config: v.batch_send.datasend_timeout,
          request_timeout: new Date() - n,
          data: e,
        }),
          (r.sendTimeStamp = 0);
      },
    });
  },
  remove: function (e) {
    var t = L.get(this.tabKey);
    if (t) {
      for (
        var r = (G(t) || this.generateTabStorageVal()).data, n = 0;
        n < e.length;
        n++
      ) {
        var i = te(r, e[n]);
        i > -1 && r.splice(i, 1), L.remove(e[n]);
      }
      (r = Xt(r)),
        L.set(this.tabKey, JSON.stringify(this.generateTabStorageVal(r)));
    }
  },
  add: function (e) {
    var t = vn + String(me()),
      r = L.get(this.tabKey);
    r === null
      ? ((this.tabKey = vr + String(me())), (r = this.generateTabStorageVal()))
      : (r = G(r) || this.generateTabStorageVal()),
      r.data.push(t),
      (r.expireTime = _e() + 2 * v.batch_send.send_interval),
      L.set(this.tabKey, JSON.stringify(r)),
      s.store.saveObjectVal(t, e),
      (e.type !== "track_signup" && e.event !== "$pageview") ||
        this.sendImmediately();
  },
  generateTabStorage: function () {
    (this.tabKey = vr + String(me())),
      L.set(this.tabKey, JSON.stringify(this.generateTabStorageVal()));
  },
  generateTabStorageVal: function (e) {
    return {
      data: (e = e || []),
      expireTime: _e() + 2 * v.batch_send.send_interval,
      serverUrl: this.serverUrl,
    };
  },
  sendImmediately: function () {
    this.send();
  },
  recycle: function () {
    for (var e = {}, t = 0; t < localStorage.length; t++) {
      var r = localStorage.key(t),
        n = this;
      if (r.indexOf(vr) === 0) {
        for (
          var i = G(L.get(r)) || this.generateTabStorageVal(), a = 0;
          a < i.data.length;
          a++
        )
          e[i.data[a]] = !0;
        r !== n.tabKey &&
          _e() > i.expireTime &&
          this.serverUrl === i.serverUrl &&
          new rr("sajssdk-lock-get-").get(r, 1e4, 1e3, function (_) {
            if (_) {
              L.get(n.tabKey) === null && n.generateTabStorage();
              var y = G(_) || n.generateTabStorageVal(),
                I = G(L.get(n.tabKey)) || n.generateTabStorageVal();
              (I.data = Xt(I.data.concat(y.data))),
                L.set(n.tabKey, JSON.stringify(I));
            }
          });
      } else if (r.indexOf("sajssdk-lock-get-") === 0) {
        var u = G(L.get(r)) || { expireTime: 0 };
        _e() - u.expireTime > 1e4 && L.remove(r);
      }
    }
    for (var c = 0; c < localStorage.length; c++) {
      var f = localStorage.key(c);
      f.indexOf(vn) !== 0 || e[f] || L.remove(f);
    }
  },
};
var Lr = function (e) {
  (this.callback = e.callback),
    (this.server_url = e.server_url),
    (this.data = e.data);
};
(Lr.prototype.start = function () {
  var e = this;
  typeof navigator == "object" &&
    typeof navigator.sendBeacon == "function" &&
    navigator.sendBeacon(this.server_url, this.data),
    setTimeout(function () {
      e.end();
    }, 40);
}),
  (Lr.prototype.end = function () {
    if (this.callback) {
      if ((Le("warning: sdk callback is deprecated."), !P(this.callback)))
        return void Le("error: sdk callback must be function.");
      this.callback();
    }
  });
var Gt = function (e) {
  (this.callback = e.callback),
    (this.img = document.createElement("img")),
    (this.img.width = 1),
    (this.img.height = 1),
    v.img_use_crossorigin && (this.img.crossOrigin = "anonymous"),
    (this.server_url = e.data);
};
(Gt.prototype.start = function () {
  var e = this;
  v.ignore_oom &&
    ((this.img.onload = function () {
      (this.onload = null),
        (this.onerror = null),
        (this.onabort = null),
        e.end();
    }),
    (this.img.onerror = function () {
      (this.onload = null),
        (this.onerror = null),
        (this.onabort = null),
        e.end();
    }),
    (this.img.onabort = function () {
      (this.onload = null),
        (this.onerror = null),
        (this.onabort = null),
        e.end();
    })),
    (this.img.src = this.server_url);
}),
  (Gt.prototype.lastClear = function () {
    Wr().ie !== void 0 ? (this.img.src = "about:blank") : (this.img.src = "");
  }),
  (Gt.prototype.end = function () {
    if (this.callback) {
      if ((Le("warning: sdk callback is deprecated."), !P(this.callback)))
        return void Le("error: sdk callback must be function.");
      this.callback();
    }
    var e = this;
    setTimeout(function () {
      e.lastClear && e.lastClear();
    }, v.datasend_timeout - v.callback_timeout);
  });
var Ba = {
    __proto__: null,
    addEvent: nt,
    EventEmitterSa: Qr,
    cookie: oe,
    info: E,
    getReferrer: Xe,
    getCurrentDomain: Gr,
    isBaiduTraffic: Et,
    getReferrerEqid: Ci,
    getReferrerEqidType: $i,
    getBaiduKeyword: Ut,
    isReferralTraffic: ir,
    getKeywordFromReferrer: It,
    getReferSearchEngine: Ii,
    getSourceFromReferrer: Yr,
    getWxAdIdFromUrl: ji,
    parseSuperProperties: Ti,
    searchConfigData: Ai,
    strip_empty_properties: Ni,
    getEleInfo: xi,
    getElementContent: or,
    ajax: en,
    optimizeServerUrl: Di,
    encodeTrackData: Li,
    AjaxSend: Dr,
    BatchSend: Ui,
    BeaconSend: Lr,
    ImageSend: Gt,
  },
  Ri = new Qr(),
  l = {
    requests: [],
    _sessionState: {},
    _state: { distinct_id: "", first_id: "", props: {}, identities: {} },
    getProps: function () {
      return this._state.props || {};
    },
    getSessionProps: function () {
      return this._sessionState;
    },
    getOriginDistinctId: function () {
      return this._state._distinct_id || this._state.distinct_id;
    },
    getOriginUnionId: function (e) {
      var t = {},
        r = (e = e || this._state)._first_id || e.first_id,
        n = e._distinct_id || e.distinct_id;
      return (
        r && n
          ? ((t.login_id = n), (t.anonymous_id = r))
          : (t.anonymous_id = n),
        t
      );
    },
    getDistinctId: function () {
      var e = this.getUnionId();
      return e.login_id || e.anonymous_id;
    },
    getUnionId: function (e) {
      var t = this.getOriginUnionId(e);
      return (
        t.login_id &&
          this._state.history_login_id &&
          this._state.history_login_id.name &&
          this._state.history_login_id.name !== Lt.LOGIN &&
          (t.login_id = this._state.history_login_id.name + "+" + t.login_id),
        t
      );
    },
    getFirstId: function () {
      return this._state._first_id || this._state.first_id;
    },
    initSessionState: function () {
      var e = oe.get("sensorsdata2015session"),
        t = null;
      (e = s.kit.userDecryptIfNeeded(e)) !== null &&
        typeof (t = G(e)) == "object" &&
        (this._sessionState = t || {});
    },
    setOnce: function (e, t) {
      e in this._state || this.set(e, t);
    },
    set: function (e, t) {
      this._state = this._state || {};
      var r = this._state.distinct_id;
      (this._state[e] = t),
        e === "first_id"
          ? delete this._state._first_id
          : e === "distinct_id" && delete this._state._distinct_id,
        this.save(),
        e === "distinct_id" && r && Ri.tempAdd("changeDistinctId", t);
    },
    change: function (e, t) {
      this._state["_" + e] = t;
    },
    setSessionProps: function (e) {
      s.log(
        "initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问"
      );
      var t = this._sessionState;
      D(t, e), this.sessionSave(t);
    },
    setSessionPropsOnce: function (e) {
      s.log(
        "initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问"
      );
      var t = this._sessionState;
      Tr(t, e), this.sessionSave(t);
    },
    setProps: function (e, t) {
      var r = {};
      for (var n in (r = t ? e : D(this._state.props || {}, e)))
        typeof r[n] == "string" &&
          (r[n] = r[n].slice(0, s.para.max_referrer_string_length));
      this.set("props", r);
    },
    setPropsOnce: function (e) {
      var t = this._state.props || {};
      Tr(t, e), this.set("props", t);
    },
    clearAllProps: function (e) {
      var t;
      if (((this._sessionState = {}), A(e) && e.length > 0))
        for (t = 0; t < e.length; t++)
          b(e[t]) &&
            e[t].indexOf("latest_") === -1 &&
            d(this._state.props) &&
            e[t] in this._state.props &&
            delete this._state.props[e[t]];
      else if (d(this._state.props))
        for (t in this._state.props)
          t.indexOf("latest_") !== 1 && delete this._state.props[t];
      this.sessionSave({}), this.save();
    },
    sessionSave: function (e) {
      s.log(
        "initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问"
      ),
        (this._sessionState = e);
      var t = JSON.stringify(this._sessionState);
      s.para.encrypt_cookie && (t = s.kit.userEncrypt(t)),
        oe.set("sensorsdata2015session", t, 0);
    },
    save: function () {
      var e = JSON.parse(JSON.stringify(this._state));
      delete e._first_id,
        delete e._distinct_id,
        e.identities && (e.identities = Ht(JSON.stringify(e.identities)));
      var t = JSON.stringify(e);
      s.para.encrypt_cookie && (t = s.kit.userEncrypt(t)),
        oe.set(this.getCookieName(), t, 730, s.para.cross_subdomain);
    },
    getCookieName: function () {
      var e = "";
      if (s.para.cross_subdomain === !1) {
        try {
          var t = location.host;
          Ne(s.para.white_list[t]) || (e = s.para.white_list[t]);
        } catch (r) {
          O(r);
        }
        e =
          typeof e == "string" && e !== ""
            ? "sa_jssdk_2015_" + s.para.sdk_id + e.replace(/\./g, "_")
            : "sa_jssdk_2015_root" + s.para.sdk_id;
      } else e = "sensorsdata2015jssdkcross" + s.para.sdk_id;
      return e;
    },
    init: function () {
      this.initSessionState();
      var e,
        t,
        r = et();
      oe.isSupport() &&
        ((e = oe.get(this.getCookieName())),
        (t = G((e = s.kit.userDecryptIfNeeded(e))))),
        oe.isSupport() &&
        e !== null &&
        Dt(e) &&
        d(t) &&
        (!d(t) || t.distinct_id)
          ? ((l._state = D(
              (function (n) {
                var i;
                n.identities &&
                  (n.identities.indexOf(`
/`) === 0
                    ? (n.identities = G(Si(n.identities)))
                    : (n.identities = G(bt(n.identities))));
                var a = l.getOriginUnionId(n);
                (n.identities && d(n.identities) && !re(n.identities)) ||
                  ((n.identities = {}),
                  (n.identities.$identity_cookie_id = et())),
                  (n.history_login_id = n.history_login_id || {});
                var u = n.history_login_id.name;
                if (a.login_id)
                  if (u && n.identities.hasOwnProperty(u)) {
                    if (n.identities[u] !== a.login_id) {
                      for (i in ((n.identities[u] = a.login_id), n.identities))
                        n.identities.hasOwnProperty(i) &&
                          i !== "$identity_cookie_id" &&
                          i !== u &&
                          delete n.identities[i];
                      n.history_login_id.value = a.login_id;
                    }
                  } else {
                    var c = u || Lt.LOGIN;
                    for (i in ((n.identities[c] = a.login_id), n.identities))
                      n.identities.hasOwnProperty(i) &&
                        i !== "$identity_cookie_id" &&
                        i !== c &&
                        delete n.identities[i];
                    n.history_login_id = { name: c, value: a.login_id };
                  }
                else {
                  if (
                    n.identities.hasOwnProperty("$identity_login_id") ||
                    n.identities.hasOwnProperty(u)
                  )
                    for (i in n.identities)
                      n.identities.hasOwnProperty(i) &&
                        i !== "$identity_cookie_id" &&
                        i !== "$identity_anonymous_id" &&
                        delete n.identities[i];
                  n.history_login_id = { name: "", value: "" };
                }
                return n;
              })(t)
            )),
            l.save())
          : ((s.is_first_visitor = !0),
            (function (n) {
              l.set("distinct_id", n),
                l.set("identities", { $identity_cookie_id: n }),
                l.set("history_login_id", { name: "", value: "" });
            })(r)),
        Rt.setDeviceId(r, this),
        Rt.storeInitCheck();
    },
    saveObjectVal: function (e, t) {
      b(t) || (t = JSON.stringify(t)),
        s.para.encrypt_cookie == 1 && (t = s.kit.userEncrypt(t)),
        L.set(e, t);
    },
    readObjectVal: function (e) {
      var t = L.get(e);
      return t ? G((t = s.kit.userDecryptIfNeeded(t))) : null;
    },
  },
  F = {
    string: function (e) {
      O(e + " must be string");
    },
    emptyString: function (e) {
      O(e + "'s is empty");
    },
    regexTest: function (e) {
      O(e + " is invalid");
    },
    idLength: function (e) {
      O(e + " length is longer than " + v.max_id_length);
    },
    keyLength: function (e) {
      O(e + " length is longer than " + v.max_key_length);
    },
    stringLength: function (e) {
      O(e + " length is longer than " + v.max_string_length);
    },
    voidZero: function (e) {
      O(e + "'s is undefined");
    },
    reservedLoginId: function (e) {
      O(e + " is invalid");
    },
    reservedBind: function (e) {
      O(e + " is invalid");
    },
    reservedUnbind: function (e) {
      O(e + " is invalid");
    },
  },
  yn = {
    regName:
      /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-zA-Z_$][a-zA-Z\d_$]*)$/i,
    loginIDReservedNames: ["$identity_anonymous_id", "$identity_cookie_id"],
    bindReservedNames: [
      "$identity_login_id",
      "$identity_anonymous_id",
      "$identity_cookie_id",
    ],
    unbindReservedNames: ["$identity_anonymous_id", Lt.LOGIN],
    string: function (e) {
      return !!b(e);
    },
    emptyString: function (e) {
      return !(!b(e) || we(e).length === 0);
    },
    regexTest: function (e) {
      return !(!b(e) || !this.regName.test(e));
    },
    idLength: function (e) {
      return !(!b(e) || e.length > v.max_id_length);
    },
    keyLength: function (e) {
      return !(!b(e) || e.length > v.max_key_length);
    },
    stringLength: function (e) {
      return !(!b(e) || e.length > v.max_string_length);
    },
    voidZero: function (e) {
      return e !== void 0;
    },
    reservedLoginId: function (e) {
      return !(te(this.loginIDReservedNames, e) > -1);
    },
    reservedUnbind: function (e) {
      return !(te(this.unbindReservedNames, e) > -1);
    },
    reservedBind: function (e) {
      var t = l._state.history_login_id;
      return (
        (!t || !t.name || t.name !== e) && !(te(this.bindReservedNames, e) > -1)
      );
    },
  },
  Ha = {
    distinct_id: {
      rules: ["string", "emptyString", "idLength"],
      onComplete: function (e, t, r) {
        return (
          (!e &&
            (r === "emptyString" && (t = "Id"),
            P(F[r]) && F[r](t),
            r === "idLength")) ||
          e
        );
      },
    },
    event: {
      rules: ["string", "emptyString", "keyLength", "regexTest"],
      onComplete: function (e, t, r) {
        return (
          e || (r === "emptyString" && (t = "eventName"), P(F[r]) && F[r](t)),
          !0
        );
      },
    },
    propertyKey: {
      rules: ["string", "emptyString", "keyLength", "regexTest"],
      onComplete: function (e, t, r) {
        return (
          e ||
            (r === "emptyString" && (t = "Property key"), P(F[r]) && F[r](t)),
          !0
        );
      },
    },
    propertyValue: {
      rules: ["voidZero"],
      onComplete: function (e, t, r) {
        return e || (P(F[r]) && F[r]("Property Value")), !0;
      },
    },
    properties: function (e) {
      return (
        d(e)
          ? T(e, function (t, r) {
              B({ propertyKey: r }),
                B({ propertyValue: t }, function (n, i, a) {
                  return n || ((i = r + "'s Value"), P(F[a]) && F[a](i)), !0;
                });
            })
          : yn.voidZero(e) && O("properties可以没有，但有的话必须是对象"),
        !0
      );
    },
    propertiesMust: function (e) {
      return (
        e !== void 0 && d(e) && !re(e)
          ? this.properties.call(this, e)
          : O("properties必须是对象"),
        !0
      );
    },
    item_type: {
      rules: ["string", "emptyString", "keyLength", "regexTest"],
      onComplete: function (e, t, r) {
        return (
          e || (r === "emptyString" && (t = "item_type"), P(F[r]) && F[r](t)),
          !0
        );
      },
    },
    item_id: {
      rules: ["string", "emptyString", "stringLength"],
      onComplete: function (e, t, r) {
        return (
          e || (r === "emptyString" && (t = "item_id"), P(F[r]) && F[r](t)), !0
        );
      },
    },
    loginIdKey: {
      rules: [
        "string",
        "emptyString",
        "keyLength",
        "regexTest",
        "reservedLoginId",
      ],
      onComplete: function (e, t, r) {
        return (
          (!e &&
            (r === "emptyString" && (t = "login_id_key"),
            P(F[r]) && F[r](t),
            r === "keyLength")) ||
          e
        );
      },
    },
    bindKey: {
      rules: [
        "string",
        "emptyString",
        "keyLength",
        "regexTest",
        "reservedBind",
      ],
      onComplete: function (e, t, r) {
        return (
          (!e &&
            (r === "emptyString" && (t = "Key"),
            P(F[r]) && F[r](t),
            r === "keyLength")) ||
          e
        );
      },
    },
    unbindKey: {
      rules: [
        "string",
        "emptyString",
        "keyLength",
        "regexTest",
        "reservedUnbind",
      ],
      onComplete: function (e, t, r) {
        return (
          (!e &&
            (r === "emptyString" && (t = "Key"),
            P(F[r]) && F[r](t),
            r === "keyLength")) ||
          e
        );
      },
    },
    bindValue: {
      rules: ["string", "emptyString", "idLength"],
      onComplete: function (e, t, r) {
        return (
          (!e &&
            (r === "emptyString" && (t = "Value"),
            P(F[r]) && F[r](t),
            r === "idLength")) ||
          e
        );
      },
    },
    check: function (e, t, r) {
      var n = this[e];
      if (P(n)) return n.call(this, t);
      if (!n) return !1;
      for (var i = 0; i < n.rules.length; i++) {
        var a = n.rules[i],
          u = yn[a](t),
          c = P(r) ? r(u, t, a) : n.onComplete(u, t, a);
        if (!u) return c;
      }
      return !0;
    },
  };
function B(e, t) {
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && !Ha.check(r, e[r], t))
      return !1;
  return !0;
}
function Ja(e, t) {
  return (
    d(e) &&
      T(e, function (r, n) {
        if (A(r)) {
          var i = [];
          T(r, function (u) {
            if (b(u)) i.push(u);
            else if (Ne(u)) i.push("null");
            else
              try {
                i.push(JSON.stringify(u));
              } catch {
                O("您的数据-", n, r, "数组里值有错误,已将其删除");
              }
          }),
            (e[n] = i);
        }
        var a = te([], n) > -1;
        if (d(r) && n !== "$option" && !a)
          try {
            e[n] = JSON.stringify(r);
          } catch {
            delete e[n], O("您的数据-", n, r, "数据值有错误，已将其删除");
          }
        else
          b(r) ||
            De(r) ||
            Jt(r) ||
            _i(r) ||
            A(r) ||
            P(r) ||
            n === "$option" ||
            a ||
            (O("您的数据-", n, r, "-格式不满足要求，我们已经将其删除"),
            delete e[n]);
      }),
    e
  );
}
function Fa(e, t) {
  return De(t) && e.length > t
    ? (O("字符串长度超过限制，已经做截取--" + e), e.slice(0, t))
    : e;
}
function Ma(e, t) {
  d(e) &&
    T(
      [
        "distinct_id",
        "user_id",
        "id",
        "date",
        "datetime",
        "event",
        "events",
        "first_id",
        "original_id",
        "device_id",
        "properties",
        "second_id",
        "time",
        "users",
      ],
      function (r, n) {
        r in e &&
          (te([], r) > -1 ||
            (n < 3
              ? (delete e[r],
                O("您的属性- " + r + "是保留字段，我们已经将其删除"))
              : O("您的属性- " + r + "是保留字段，请避免其作为属性名")));
      }
    );
}
function Bi(e) {
  var t = ["$element_selector", "$element_path"],
    r = ["sensorsdata_app_visual_properties"];
  d(e) &&
    T(e, function (n, i) {
      if (d(n)) Bi(e[i]);
      else if (b(n)) {
        if (te(r, i) > -1) return;
        e[i] = Fa(n, te(t, i) > -1 ? 1024 : v.max_string_length);
      }
    });
}
function qa(e) {
  typeof e.properties.$project < "u" &&
    ((e.project = e.properties.$project), delete e.properties.$project),
    typeof e.properties.$token < "u" &&
      ((e.token = e.properties.$token), delete e.properties.$token);
}
function Ka(e) {
  "item_type" in e &&
    B({ item_type: e.item_type }, function (t) {
      return t || delete e.item_type, !0;
    }),
    "item_id" in e &&
      B({ item_id: e.item_id }, function (t, r, n) {
        return t || n !== "string" || delete e.item_id, !0;
      });
}
function Va(e, t) {
  T(e, function (r, n) {
    te([], n) === -1 &&
      B({ propertyKey: n }, function (i, a, u) {
        return i || u === "keyLength" || delete e[n], !0;
      });
  });
}
function Wa(e) {
  var t = e.properties;
  Zr(e),
    d(t)
      ? (Ja(t), Ma(t), qa(e), Va(t), Bi(t))
      : "properties" in e && (e.properties = {}),
    Ka(e);
}
function za(e, t) {
  var r = t.sensors;
  return (
    (e._track_id = Number(
      String(me()).slice(2, 5) +
        String(me()).slice(2, 4) +
        String(new Date().getTime()).slice(-4)
    )),
    (e._flush_time = new Date().getTime()),
    r.events.tempAdd("send", e),
    e
  );
}
var X = {
    initUrl: function () {
      var e,
        t,
        r = {
          server_url: { project: "", host: "" },
          page_url: { host: "", pathname: "" },
        };
      if (!hi(s.para.server_url))
        return N("----vcollect---server_url必须为有效 URL 字符串"), !1;
      try {
        (e = Ae(s.para.server_url)),
          (r.server_url.project = e.searchParams.get("project") || "default"),
          (r.server_url.host = e.host);
      } catch (n) {
        return N("----vcollect---server_url解析异常", n), !1;
      }
      try {
        (t = Ae(location.href)),
          (r.page_url.host = t.hostname),
          (r.page_url.pathname = t.pathname);
      } catch (n) {
        return N("----vcollect---页面地址解析异常", n), !1;
      }
      return r;
    },
    isDiv: function (e) {
      return !(
        e.element_path &&
        we(e.element_path.split(">").pop()).slice(0, 3) !== "div"
      );
    },
    configIsMatchNew: function (e, t) {
      if (b(e.$element_selector) && b(t.element_selector)) {
        if (t.element_field === "element_selector" && t.function === "equal")
          return e.$element_selector === t.element_selector;
        if (t.element_field === "element_selector" && t.function === "contain")
          return e.$element_selector.indexOf(t.element_selector) > -1;
      }
      if (b(e.$element_path) && b(t.element_path)) {
        if (t.element_field === "element_path" && t.function === "equal")
          return e.$element_path === t.element_path;
        if (t.element_field === "element_path" && t.function === "contain")
          return e.$element_path.indexOf(t.element_path) > -1;
      }
      return !1;
    },
    configIsMatch: function (e, t) {
      return (
        (!t.limit_element_content ||
          t.element_content === e.$element_content) &&
        (!t.limit_element_position ||
          t.element_position === String(e.$element_position)) &&
        (t.element_field && t.function
          ? X.configIsMatchNew(e, t)
          : X.configIsMatchOldVersion(e, t))
      );
    },
    configIsMatchOldVersion: function (e, t) {
      if (!t.element_path) return !1;
      if (e.$element_position !== void 0) {
        if (t.element_path !== e.$element_path) return !1;
      } else if (X.isDiv({ element_path: t.element_path })) {
        if (e.$element_path.indexOf(t.element_path) < 0) return !1;
      } else if (t.element_path !== e.$element_path) return !1;
      return !0;
    },
    filterConfig: function (e, t, r) {
      var n = [];
      if (!r) {
        var i = X.initUrl();
        if (!i) return [];
        r = i.page_url;
      }
      return (
        e.event === "$WebClick" &&
          T(t, function (a) {
            d(a) &&
              (a.event_type === "webclick" || a.event_type === "appclick") &&
              d(a.event) &&
              a.event.url_host === r.host &&
              a.event.url_path === r.pathname &&
              X.configIsMatch(e.properties, a.event) &&
              n.push(a);
          }),
        n
      );
    },
    getPropElInLi: function (e, t) {
      if (!(e && ve(e) && b(t)) || e.tagName.toLowerCase() !== "li")
        return null;
      var r = s.heatmap.getDomSelector(e);
      if (r) {
        var n = Wt(r + t);
        return n || null;
      }
      return (
        O("----custom---获取同级属性元素失败，selector信息异常", r, t), null
      );
    },
    getProp: function (e, t) {
      if (!d(e)) return !1;
      if (!(b(e.name) && e.name.length > 0))
        return O("----vcustom----属性名不合法,属性抛弃", e.name), !1;
      var r,
        n,
        i = {};
      if (e.method === "content") {
        var a;
        if (b(e.element_selector) && e.element_selector.length > 0)
          a = Wt(e.element_selector);
        else {
          if (!t || !b(e.list_selector))
            return O("----vcustom----属性配置异常，属性抛弃", e.name), !1;
          var u = Wt(t.properties.$element_selector);
          if (!u)
            return O("----vcustom----点击元素获取异常，属性抛弃", e.name), !1;
          var c = s.heatmap.getClosestLi(u);
          a = X.getPropElInLi(c, e.list_selector);
        }
        if (!a || !ve(a))
          return O("----vcustom----属性元素获取失败，属性抛弃", e.name), !1;
        if (a.tagName.toLowerCase() === "input") r = a.value || "";
        else if (a.tagName.toLowerCase() === "select") {
          var f = a.selectedIndex;
          De(f) && ve(a[f]) && (r = or(a[f], "select"));
        } else r = or(a, a.tagName.toLowerCase());
        if (e.regular) {
          try {
            n = new RegExp(e.regular).exec(r);
          } catch {
            return O("----vcustom----正则处理失败，属性抛弃", e.name), !1;
          }
          if (n === null)
            return (
              O("----vcustom----属性规则处理，未匹配到结果,属性抛弃", e.name),
              !1
            );
          if (!A(n) || !b(n[0]))
            return O("----vcustom----正则处理异常，属性抛弃", e.name, n), !1;
          r = n[0];
        }
        if (e.type === "STRING") i[e.name] = r;
        else if (e.type === "NUMBER") {
          if (r.length < 1)
            return (
              O("----vcustom----未获取到数字内容，属性抛弃", e.name, r), !1
            );
          if (isNaN(Number(r)))
            return (
              O("----vcustom----数字类型属性转换失败，属性抛弃", e.name, r), !1
            );
          i[e.name] = Number(r);
        }
        return i;
      }
      return N("----vcustom----属性不支持此获取方式", e.name, e.method), !1;
    },
    getAssignConfigs: function (e, t) {
      var r = X.initUrl();
      if (!r || !r.page_url) return [];
      if (!d(t)) return [];
      var n = [];
      return (
        (t.events = t.events || t.eventList),
        A(t.events) && t.events.length > 0
          ? (T(t.events, function (i) {
              d(i) &&
                d(i.event) &&
                i.event.url_host === r.page_url.host &&
                i.event.url_path === r.page_url.pathname &&
                e(i) &&
                n.push(i);
            }),
            n)
          : []
      );
    },
  },
  Xa = {
    events: [],
    getAssignConfigs: X.getAssignConfigs,
    filterConfig: X.filterConfig,
    getProp: X.getProp,
    initUrl: X.initUrl,
    updateEvents: function (e) {
      A(e) && (this.events = e);
    },
    init: function () {
      this.initAppGetPropsBridge();
    },
    geth5Props: function (e) {
      var t = {},
        r = [],
        n = this;
      if (!this.events.length) return {};
      if (e.event === "$WebClick") {
        var i = this.filterConfig(e, this.events);
        if (!i.length) return {};
        T(i, function (a) {
          d(a) &&
            (A(a.properties) &&
              a.properties.length > 0 &&
              T(a.properties, function (u) {
                if (d(u))
                  if (u.h5 === !1)
                    A(t.sensorsdata_app_visual_properties) ||
                      (t.sensorsdata_app_visual_properties = []),
                      t.sensorsdata_app_visual_properties.push(u);
                  else {
                    var c = n.getProp(u, e);
                    d(c) && (t = D(t, c));
                  }
              }),
            b(a.event_name) && r.push(a.event_name));
        }),
          s.bridge.hasVisualModeBridge() &&
            (t.sensorsdata_web_visual_eventName = r);
      }
      return (
        t.sensorsdata_app_visual_properties &&
          (t.sensorsdata_app_visual_properties = Ht(
            JSON.stringify(t.sensorsdata_app_visual_properties)
          )),
        t
      );
    },
    initAppGetPropsBridge: function () {
      var e = this,
        t = new s.SDKJSBridge("getJSVisualProperties");
      return (
        t.onAppNotify(function (r) {
          var n = {};
          try {
            r = JSON.parse(bt(r));
          } catch {
            N("getJSVisualProperties data parse error!");
          }
          if (d(r)) {
            var i = r.sensorsdata_js_visual_properties,
              a = e.initUrl();
            a &&
              ((a = a.page_url),
              A(i) &&
                i.length > 0 &&
                T(i, function (u) {
                  if (
                    d(u) &&
                    u.url_host === a.host &&
                    u.url_path === a.pathname &&
                    u.h5
                  ) {
                    var c = e.getProp(u);
                    d(c) && (n = D(n, c));
                  }
                }));
          }
          return (
            s.bridge.bridge_info.platform === "android" &&
              t.notifyApp({ data: n }, r.message_id),
            n
          );
        }),
        t
      );
    },
  },
  tn = {
    events: [],
    customProp: Xa,
    getAssignConfigs: X.getAssignConfigs,
    initUrl: X.initUrl,
    init: function () {
      if (this.initUrl()) {
        var e = this.getConfigFromApp();
        e && this.updateConfigs(e),
          this.customProp.init(),
          this.initAppUpdateConfigBridge();
      }
    },
    initAppUpdateConfigBridge: function () {
      var e = this;
      return new s.SDKJSBridge("updateH5VisualConfig").onAppNotify(function (
        t
      ) {
        if (t) {
          try {
            t = JSON.parse(bt(t));
          } catch {
            return void N("updateH5VisualConfig result parse error！");
          }
          e.updateConfigs(t);
        }
      });
    },
    getConfigFromApp: function () {
      var e = new s.SDKJSBridge(
        "sensorsdata_get_app_visual_config"
      ).notifyApp();
      if (e)
        try {
          e = JSON.parse(bt(e));
        } catch {
          (e = null), N("getAppVisualConfig result parse error！");
        }
      return e;
    },
    updateConfigs: function (e) {
      (this.events = this.filterConfigs(e)),
        this.customProp.updateEvents(this.events);
    },
    filterConfigs: function (e) {
      return this.getAssignConfigs(function (t) {
        return !(!d(t) || t.h5 === !1);
      }, e);
    },
  },
  ur = {
    events: [],
    init: function (e) {
      this.filterWebClickEvents(e);
    },
    filterWebClickEvents: function (e) {
      this.events = tt.getAssignConfigs(function (t) {
        return !(
          !d(t) ||
          t.event.unlimited_div !== !0 ||
          t.event_type !== "webclick"
        );
      }, e);
    },
    isTargetEle: function (e) {
      var t = s.heatmap.getEleDetail(e);
      if (!d(t) || !b(t.$element_path)) return !1;
      for (var r = 0; r < this.events.length; r++)
        if (
          d(this.events[r]) &&
          d(this.events[r].event) &&
          tt.configIsMatch(t, this.events[r].event)
        )
          return !0;
      return !1;
    },
  },
  Hi = {
    events: [],
    configSwitch: !1,
    collectAble: function () {
      return (
        this.configSwitch &&
        d(s.para.heatmap) &&
        s.para.heatmap.get_vtrack_config
      );
    },
    updateEvents: function (e) {
      (this.events = tt.getAssignConfigs(function (t) {
        return !!(d(t) && A(t.properties) && t.properties.length > 0);
      }, e)),
        this.events.length
          ? (this.configSwitch = !0)
          : (this.configSwitch = !1);
    },
    getVtrackProps: function (e) {
      var t = {};
      return this.collectAble()
        ? (e.event === "$WebClick" &&
            (t = this.clickCustomPropMaker(e, this.events)),
          t)
        : {};
    },
    clickCustomPropMaker: function (e, t, r) {
      var n = this;
      r = r || this.filterConfig(e, t, tt.url_info.page_url);
      var i = {};
      return r.length
        ? (T(r, function (a) {
            A(a.properties) &&
              a.properties.length > 0 &&
              T(a.properties, function (u) {
                var c = n.getProp(u, e);
                d(c) && D(i, c);
              });
          }),
          i)
        : {};
    },
    getProp: X.getProp,
    getPropElInLi: X.getPropElInLi,
    filterConfig: X.filterConfig,
  },
  tt = {
    unlimitedDiv: ur,
    config: {},
    storageEnable: !0,
    storage_name: "webjssdkvtrackcollect",
    para: { session_time: 18e5, timeout: 5e3, update_interval: 18e5 },
    url_info: {},
    timer: null,
    update_time: null,
    customProp: Hi,
    initUrl: function () {
      var e = X.initUrl();
      if (e) {
        var t;
        try {
          ((t = new qr(s.para.server_url))._values.Path =
            "/config/visualized/Web.conf"),
            (e.api_url = t.getUrl());
        } catch (r) {
          return N("----vtrackcollect---API地址解析异常", r), !1;
        }
        this.url_info = e;
      }
      return e;
    },
    init: function () {
      if (!d(s.para.heatmap) || !s.para.heatmap.get_vtrack_config) return !1;
      if ((L.isSupport() || (this.storageEnable = !1), !this.initUrl()))
        return N("----vtrackcustom----初始化失败，url信息解析失败"), !1;
      if (this.storageEnable) {
        var e = l.readObjectVal(this.storage_name);
        if (d(e) && d(e.data))
          if (this.serverUrlIsSame(e.serverUrl)) {
            (this.config = e.data),
              (this.update_time = e.updateTime),
              this.updateConfig(e.data);
            var t = new Date().getTime() - this.update_time;
            if (De(t) && t > 0 && t < this.para.session_time) {
              var r = this.para.update_interval - t;
              this.setNextFetch(r);
            } else this.getConfigFromServer();
          } else this.getConfigFromServer();
        else this.getConfigFromServer();
      } else this.getConfigFromServer();
      this.pageStateListenner();
    },
    serverUrlIsSame: function (e) {
      return (
        !!d(e) &&
        e.host === this.url_info.server_url.host &&
        e.project === this.url_info.server_url.project
      );
    },
    getConfigFromServer: function () {
      var e = this;
      this.sendRequest(
        function (t, r) {
          e.update_time = new Date().getTime();
          var n = {};
          t === 200
            ? r && d(r) && r.os === "Web" && ((n = r), e.updateConfig(n))
            : t === 205
            ? e.updateConfig(n)
            : t === 304
            ? (n = e.config)
            : (N("----vtrackcustom----数据异常", t), e.updateConfig(n)),
            e.updateStorage(n),
            e.setNextFetch();
        },
        function (t) {
          (e.update_time = new Date().getTime()),
            N("----vtrackcustom----配置拉取失败", t),
            e.setNextFetch();
        }
      );
    },
    setNextFetch: function (e) {
      var t = this;
      this.timer && (clearTimeout(this.timer), (this.timer = null)),
        (e = e || this.para.update_interval),
        (this.timer = setTimeout(function () {
          t.getConfigFromServer();
        }, e));
    },
    pageStateListenner: function () {
      var e = this;
      yi({
        visible: function () {
          var t = new Date().getTime() - e.update_time;
          if (De(t) && t > 0 && t < e.para.update_interval) {
            var r = e.para.update_interval - t;
            e.setNextFetch(r);
          } else e.getConfigFromServer();
        },
        hidden: function () {
          e.timer && (clearTimeout(e.timer), (e.timer = null));
        },
      });
    },
    updateConfig: function (e) {
      if (!d(e)) return !1;
      (this.config = e),
        this.customProp.updateEvents(e),
        this.unlimitedDiv.init(e);
    },
    updateStorage: function (e) {
      if (!this.storageEnable || !d(e)) return !1;
      var t;
      if (this.url_info.server_url) t = this.url_info.server_url;
      else {
        var r = tt.initUrl();
        if (!r) return !1;
        t = r.server_url;
      }
      var n = { updateTime: new Date().getTime(), data: e, serverUrl: t };
      l.saveObjectVal(this.storage_name, n);
    },
    sendRequest: function (e, t) {
      var r = { app_id: this.url_info.page_url.host };
      this.config.version && (r.v = this.config.version),
        vi({
          url: this.url_info.api_url,
          callbackName: "saJSSDKVtrackCollectConfig",
          data: r,
          timeout: this.para.timeout,
          success: function (n, i) {
            e(n, i);
          },
          error: function (n) {
            t(n);
          },
        });
    },
    getAssignConfigs: X.getAssignConfigs,
    configIsMatch: X.configIsMatch,
  };
function Za(e, t) {
  try {
    var r = t.sensors,
      n = {};
    d(e) && d(e.identities) && !re(e.identities)
      ? D(n, e.identities)
      : D(n, l._state.identities);
    var i = {
      identities: n,
      distinct_id: l.getDistinctId(),
      lib: {
        $lib: "js",
        $lib_method: "code",
        $lib_version: String(r.lib_version),
      },
      properties: {},
    };
    return (
      d(e) &&
        d(e.properties) &&
        !re(e.properties) &&
        (e.properties.$lib_detail &&
          ((i.lib.$lib_detail = e.properties.$lib_detail),
          delete e.properties.$lib_detail),
        e.properties.$lib_method &&
          ((i.lib.$lib_method = e.properties.$lib_method),
          delete e.properties.$lib_method)),
      ci(i, l.getUnionId(), e),
      d(e.properties) && !re(e.properties) && D(i.properties, e.properties),
      (e.type && e.type.slice(0, 7) === "profile") ||
        ((i.properties = D(
          {},
          E.properties(),
          l.getProps(),
          l.getSessionProps(),
          E.currentProps,
          i.properties
        )),
        r.para.preset_properties.latest_referrer &&
          !b(i.properties.$latest_referrer) &&
          (i.properties.$latest_referrer = "取值异常"),
        r.para.preset_properties.latest_search_keyword &&
          !b(i.properties.$latest_search_keyword) &&
          ((r.para.preset_properties.search_keyword_baidu &&
            b(i.properties.$search_keyword_id) &&
            De(i.properties.$search_keyword_id_hash) &&
            b(i.properties.$search_keyword_id_type)) ||
            (i.properties.$latest_search_keyword = "取值异常")),
        r.para.preset_properties.latest_traffic_source_type &&
          !b(i.properties.$latest_traffic_source_type) &&
          (i.properties.$latest_traffic_source_type = "取值异常"),
        r.para.preset_properties.latest_landing_page &&
          !b(i.properties.$latest_landing_page) &&
          (i.properties.$latest_landing_page = "取值异常"),
        r.para.preset_properties.latest_wx_ad_click_id === "not_collect"
          ? (delete i.properties._latest_wx_ad_click_id,
            delete i.properties._latest_wx_ad_hash_key,
            delete i.properties._latest_wx_ad_callbacks)
          : r.para.preset_properties.latest_wx_ad_click_id &&
            !b(i.properties._latest_wx_ad_click_id) &&
            ((i.properties._latest_wx_ad_click_id = "取值异常"),
            (i.properties._latest_wx_ad_hash_key = "取值异常"),
            (i.properties._latest_wx_ad_callbacks = "取值异常")),
        b(i.properties._latest_wx_ad_click_id) && (i.properties.$url = ae())),
      i.properties.$time && Jt(i.properties.$time)
        ? ((i.time = 1 * i.properties.$time), delete i.properties.$time)
        : (i.time = 1 * new Date()),
      (function (a) {
        if (r.bridge && r.bridge.bridge_info.verify_success === "success") {
          var u = tn.customProp.geth5Props(JSON.parse(JSON.stringify(a)));
          d(u) && !re(u) && (a.properties = D(a.properties, u));
        }
        var c = tt.customProp.getVtrackProps(JSON.parse(JSON.stringify(a)));
        d(c) && !re(c) && (a.properties = D(a.properties, c));
      })(i),
      Ti(i),
      Rt.checkIsAddSign(i),
      Rt.checkIsFirstTime(i),
      La(i),
      Ea(i),
      i
    );
  } catch (a) {
    return { _debug_web_msg: String(a) };
  }
}
var Ga = {
    basicProps: { priority: 0, entry: Za },
    formatData: { priority: 0, entry: Wa },
    finalAdjustData: { priority: 0, entry: za },
  },
  rn = {
    stage: null,
    init: function (e) {
      this.stage = e;
    },
    interceptor: Ga,
  };
function Qa(e) {
  return rn.stage.process("basicProps", e);
}
function Ya(e) {
  return rn.stage.process("formatData", e);
}
var se = {};
function bn(e, t, r, n) {
  var i = null;
  if (
    ((e = e || {}).ele && (i = e.ele),
    e.event && (i = e.target ? e.target : e.event.target),
    (r = r || {}),
    !i || typeof i != "object")
  )
    return !1;
  if (
    !i.href ||
    /^javascript/.test(i.href) ||
    i.target ||
    i.download ||
    i.onclick
  )
    return n(t, r), !1;
  function a(u) {
    u.stopPropagation(), u.preventDefault();
    var c = !1;
    function f() {
      c || ((c = !0), (location.href = i.href));
    }
    setTimeout(f, 1e3), n(t, r, f);
  }
  e.event && a(e.event),
    e.ele &&
      nt(e.ele, "click", function (u) {
        a(u);
      });
}
function Ji() {
  var e = location.protocol;
  return e === "http:" || e === "https:" ? e : "http:";
}
(se.check = B),
  (se.sendItem = function (e) {
    var t = {
      lib: {
        $lib: "js",
        $lib_method: "code",
        $lib_version: String(s.lib_version),
      },
      time: 1 * new Date(),
    };
    D(t, e), Ya(t), s.kit.sendData(t);
  }),
  (se.send = function (e, t) {
    var r = s.kit.buildData(e);
    s.kit.sendData(r, t);
  });
var nn = {
  stage: null,
  init: function (e) {
    this.stage = e;
  },
};
function es(e) {
  return nn.stage.process("webClickEvent", e);
}
function ts(e) {
  return nn.stage.process("webStayEvent", e);
}
var yr = { label: !1, li: !1, a: !0, button: !0 },
  $e = {
    otherTags: [],
    initUnlimitedTags: function () {
      T($e.otherTags, function (e) {
        e in yr && (yr[e] = !0);
      });
    },
    isUnlimitedTag: function (e) {
      if (!e || e.nodeType !== 1) return !1;
      var t = e.nodeName.toLowerCase();
      return yr[t] || zr(e, s.para.heatmap.track_attr);
    },
    getTargetElement: function (e, t) {
      var r = this,
        n = e;
      if (typeof n != "object" || typeof n.tagName != "string") return null;
      var i = n.tagName.toLowerCase();
      if (
        i.toLowerCase() === "body" ||
        i.toLowerCase() === "html" ||
        !n ||
        !n.parentNode ||
        !n.parentNode.children
      )
        return null;
      var a = n.parentNode,
        u = r.otherTags;
      if (
        i === "a" ||
        i === "button" ||
        i === "input" ||
        i === "textarea" ||
        te(u, i) > -1
      )
        return n;
      if (
        i === "area" &&
        a.tagName.toLowerCase() === "map" &&
        he(a).prev().tagName &&
        he(a).prev().tagName.toLowerCase() === "img"
      )
        return he(a).prev();
      if (
        i === "div" &&
        s.para.heatmap.collect_tags.div &&
        r.isDivLevelValid(n) &&
        (((s.para.heatmap &&
          s.para.heatmap.collect_tags &&
          s.para.heatmap.collect_tags.div &&
          s.para.heatmap.collect_tags.div.max_level) ||
          1) > 1 ||
          r.isCollectableDiv(n))
      )
        return n;
      if (r.isStyleTag(i) && s.para.heatmap.collect_tags.div) {
        var c = r.getCollectableParent(n);
        if (c && r.isDivLevelValid(c)) return c;
      }
      return (
        r.hasElement(
          { event: (t && t.originalEvent) || t, element: e },
          function (f) {
            return r.isUnlimitedTag(f);
          }
        ) || null
      );
    },
    getDivLevels: function (e, t) {
      var r = $e.getElementPath(e, !0, t).split(" > "),
        n = 0;
      return (
        T(r, function (i) {
          i === "div" && n++;
        }),
        n
      );
    },
    isDivLevelValid: function (e) {
      for (
        var t =
            (s.para.heatmap &&
              s.para.heatmap.collect_tags &&
              s.para.heatmap.collect_tags.div &&
              s.para.heatmap.collect_tags.div.max_level) ||
            1,
          r = e.getElementsByTagName("div"),
          n = r.length - 1;
        n >= 0;
        n--
      )
        if ($e.getDivLevels(r[n], e) > t) return !1;
      return !0;
    },
    getElementPath: function (e, t, r) {
      for (var n = []; e.parentNode && ve(e); ) {
        if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
          n.unshift(e.tagName.toLowerCase() + "#" + e.id);
          break;
        }
        if (r && e === r) {
          n.unshift(e.tagName.toLowerCase());
          break;
        }
        if (e === document.body) {
          n.unshift("body");
          break;
        }
        n.unshift(e.tagName.toLowerCase()), (e = e.parentNode);
      }
      return n.join(" > ");
    },
    getClosestLi: function (e) {
      return (function (t, r) {
        for (; t && t !== document && t.nodeType === 1; t = t.parentNode)
          if (
            t.tagName &&
            P(t.tagName.toLowerCase) &&
            t.tagName.toLowerCase() === r
          )
            return t;
        return null;
      })(e, "li");
    },
    getElementPosition: function (e, t, r) {
      var n = s.heatmap.getClosestLi(e);
      if (!n || !ve(e)) return null;
      var i = e.tagName.toLowerCase(),
        a = n.getElementsByTagName(i),
        u = a.length,
        c = [];
      if (u > 1) {
        for (var f = 0; f < u; f++)
          s.heatmap.getElementPath(a[f], r) === t && c.push(a[f]);
        if (c.length > 1) return te(c, e);
      }
      return (function (_) {
        if (!_.parentNode) return "";
        if (he(_).getSameTypeSiblings().length === 1) return 0;
        for (
          var y = 0, I = _;
          he(I).previousElementSibling().ele;
          I = he(I).previousElementSibling().ele, y++
        );
        return y;
      })(n);
    },
    setNotice: function (e) {
      (s.is_heatmap_render_mode = !0),
        s.para.heatmap ||
          (s.errorMsg = "您SDK没有配置开启点击图，可能没有数据！"),
        e &&
          e.slice(0, 5) === "http:" &&
          location.protocol === "https:" &&
          (s.errorMsg =
            "您的当前页面是https的地址，神策分析环境也必须是https！"),
        s.para.heatmap_url ||
          (s.para.heatmap_url =
            Ji() +
            "//static.sensorsdata.cn/sdk/" +
            s.lib_version +
            "/heatmap.min.js");
    },
    getDomIndex: function (e) {
      if (!e.parentNode) return -1;
      for (
        var t = 0, r = e.tagName, n = e.parentNode.children, i = 0;
        i < n.length;
        i++
      )
        if (n[i].tagName === r) {
          if (e === n[i]) return t;
          t++;
        }
      return -1;
    },
    selector: function (e, t) {
      var r =
        e.parentNode && e.parentNode.nodeType == 9 ? -1 : this.getDomIndex(e);
      return e.getAttribute &&
        e.getAttribute("id") &&
        /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) &&
        (!s.para.heatmap ||
          (s.para.heatmap &&
            s.para.heatmap.element_selector !== "not_use_id")) &&
        !t
        ? "#" + e.getAttribute("id")
        : e.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "");
    },
    getDomSelector: function (e, t, r) {
      if (!e || !e.parentNode || !e.parentNode.children) return !1;
      t = t && t.join ? t : [];
      var n = e.nodeName.toLowerCase();
      return e && n !== "body" && e.nodeType == 1
        ? (t.unshift(this.selector(e, r)),
          e.getAttribute &&
          e.getAttribute("id") &&
          /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) &&
          s.para.heatmap &&
          s.para.heatmap.element_selector !== "not_use_id" &&
          !r
            ? t.join(" > ")
            : this.getDomSelector(e.parentNode, t, r))
        : (t.unshift("body"), t.join(" > "));
    },
    na: function () {
      var e = document.documentElement.scrollLeft || window.pageXOffset;
      return parseInt(isNaN(e) ? 0 : e, 10);
    },
    i: function () {
      var e = 0;
      try {
        (e =
          (o.documentElement && o.documentElement.scrollTop) || m.pageYOffset),
          (e = isNaN(e) ? 0 : e);
      } catch {
        e = 0;
      }
      return parseInt(e, 10);
    },
    getBrowserWidth: function () {
      var e = window.innerWidth || document.body.clientWidth;
      return isNaN(e) ? 0 : parseInt(e, 10);
    },
    getBrowserHeight: function () {
      var e = window.innerHeight || document.body.clientHeight;
      return isNaN(e) ? 0 : parseInt(e, 10);
    },
    getScrollWidth: function () {
      var e = parseInt(document.body.scrollWidth, 10);
      return isNaN(e) ? 0 : e;
    },
    getEleDetail: function (e) {
      var t = this.getDomSelector(e),
        r = xi({ target: e });
      (r.$element_selector = t || ""),
        (r.$element_path = s.heatmap.getElementPath(
          e,
          s.para.heatmap && s.para.heatmap.element_selector === "not_use_id"
        ));
      var n = s.heatmap.getElementPosition(
        e,
        r.$element_path,
        s.para.heatmap && s.para.heatmap.element_selector === "not_use_id"
      );
      return De(n) && (r.$element_position = n), r;
    },
    getPointerEventProp: function (e, t) {
      if (!e) return {};
      function r() {
        return {
          scrollLeft:
            document.body.scrollLeft ||
            document.documentElement.scrollLeft ||
            0,
          scrollTop:
            document.body.scrollTop || document.documentElement.scrollTop || 0,
        };
      }
      function n(a) {
        if (document.documentElement.getBoundingClientRect) {
          var u = a.getBoundingClientRect();
          return {
            targetEleX: u.left + r().scrollLeft || 0,
            targetEleY: u.top + r().scrollTop || 0,
          };
        }
      }
      function i(a) {
        return Number(Number(a).toFixed(3));
      }
      return (function (a) {
        var u =
            a.pageX ||
            a.clientX + r().scrollLeft ||
            a.offsetX + n(t).targetEleX ||
            0,
          c =
            a.pageY ||
            a.clientY + r().scrollTop ||
            a.offsetY + n(t).targetEleY ||
            0;
        return { $page_x: i(u), $page_y: i(c) };
      })(e);
    },
    start: function (e, t, r, n, i) {
      if (
        d(s.para.heatmap) &&
        P(s.para.heatmap.collect_element) &&
        !s.para.heatmap.collect_element(t)
      )
        return !1;
      es($e.getBasicEleInfo(e, t, r, n, i));
    },
    getBasicEleInfo: function (e, t, r, n, i) {
      var a = d(n) ? n : {},
        u = P(i) ? i : P(n) ? n : void 0,
        c = this.getEleDetail(t);
      if (s.para.heatmap && s.para.heatmap.custom_property) {
        var f = s.para.heatmap.custom_property(t);
        d(f) && (c = D(c, f));
      }
      return {
        event: e,
        target: t,
        props: (c = D(c, this.getPointerEventProp(e, t), a)),
        tagName: r,
        callback: u,
      };
    },
    hasElement: function (e, t) {
      var r;
      if (e.event) {
        var n = e.event;
        r = n.path || (n._getPath && n._getPath());
      } else e.element && (r = he(e.element).getParents());
      if (r && A(r) && r.length > 0) {
        for (var i = 0; i < r.length; i++)
          if (typeof r[i] == "object" && r[i].nodeType === 1 && t(r[i]))
            return r[i];
      }
    },
    isStyleTag: function (e, t) {
      return (
        !(te(["a", "div", "input", "button", "textarea"], e) > -1) &&
        (!t ||
        (s.para.heatmap &&
          s.para.heatmap.collect_tags &&
          s.para.heatmap.collect_tags.div)
          ? !!(
              d(s.para.heatmap) &&
              d(s.para.heatmap.collect_tags) &&
              d(s.para.heatmap.collect_tags.div) &&
              A(s.para.heatmap.collect_tags.div.ignore_tags) &&
              te(s.para.heatmap.collect_tags.div.ignore_tags, e) > -1
            )
          : te(
              [
                "mark",
                "/mark",
                "strong",
                "b",
                "em",
                "i",
                "u",
                "abbr",
                "ins",
                "del",
                "s",
                "sup",
              ],
              e
            ) > -1)
      );
    },
    isCollectableDiv: function (e, t) {
      try {
        if (e.children.length === 0) return !0;
        for (var r = 0; r < e.children.length; r++)
          if (e.children[r].nodeType === 1) {
            var n = e.children[r].tagName.toLowerCase(),
              i =
                s.para &&
                s.para.heatmap &&
                s.para.heatmap.collect_tags &&
                s.para.heatmap.collect_tags.div &&
                s.para.heatmap.collect_tags.div.max_level;
            if (
              !((n === "div" && i > 1) || this.isStyleTag(n, t)) ||
              !this.isCollectableDiv(e.children[r], t)
            )
              return !1;
          }
        return !0;
      } catch (a) {
        N("isCollectableDiv:" + a);
      }
      return !1;
    },
    getCollectableParent: function (e, t) {
      try {
        var r = e.parentNode,
          n = r ? r.tagName.toLowerCase() : "";
        if (n === "body") return !1;
        var i =
          s.para &&
          s.para.heatmap &&
          s.para.heatmap.collect_tags &&
          s.para.heatmap.collect_tags.div &&
          s.para.heatmap.collect_tags.div.max_level;
        if (n && n === "div" && (i > 1 || this.isCollectableDiv(r, t)))
          return r;
        if (r && this.isStyleTag(n, t)) return this.getCollectableParent(r, t);
      } catch (a) {
        N("getCollectableParent:" + a);
      }
      return !1;
    },
    listenUrlChange: function (e) {
      e(),
        s.ee.spa.on("switch", function () {
          e();
        });
    },
    initScrollmap: function () {
      if (!d(s.para.heatmap) || s.para.heatmap.scroll_notice_map !== "default")
        return !1;
      var e = !0;
      s.para.scrollmap &&
        P(s.para.scrollmap.collect_url) &&
        this.listenUrlChange(function () {
          e = !!s.para.scrollmap.collect_url();
        });
      var t = (function (r) {
        var n = {};
        return (
          (n.timeout = r.timeout || 1e3),
          (n.func = r.func),
          (n.hasInit = !1),
          (n.inter = null),
          (n.main = function (i, a) {
            this.func(i, a), (this.inter = null);
          }),
          (n.go = function (i) {
            var a = {};
            this.inter ||
              ((a.$viewport_position =
                (document.documentElement &&
                  document.documentElement.scrollTop) ||
                window.pageYOffset ||
                document.body.scrollTop ||
                0),
              (a.$viewport_position = Math.round(a.$viewport_position) || 0),
              i
                ? n.main(a, !0)
                : (this.inter = setTimeout(function () {
                    n.main(a);
                  }, this.timeout)));
          }),
          n
        );
      })({
        timeout: 1e3,
        func: function (r, n) {
          var i =
              (document.documentElement &&
                document.documentElement.scrollTop) ||
              window.pageYOffset ||
              document.body.scrollTop ||
              0,
            a = new Date(),
            u = a - this.current_time;
          ((u > s.para.heatmap.scroll_delay_time &&
            i - r.$viewport_position != 0) ||
            n) &&
            ((r.$url = ae()),
            (r.$title = document.title),
            (r.$url_path = ut()),
            (r.event_duration = Math.min(
              s.para.heatmap.scroll_event_duration,
              parseInt(u) / 1e3
            )),
            (r.event_duration = r.event_duration < 0 ? 0 : r.event_duration),
            ts(r)),
            (this.current_time = a);
        },
      });
      (t.current_time = new Date()),
        nt(window, "scroll", function () {
          if (!e) return !1;
          t.go();
        }),
        nt(window, "unload", function () {
          if (!e) return !1;
          t.go("notime");
        });
    },
    initHeatmap: function () {
      var e = this,
        t = !0;
      if (!d(s.para.heatmap) || s.para.heatmap.clickmap !== "default")
        return !1;
      P(s.para.heatmap.collect_url) &&
        this.listenUrlChange(function () {
          t = !!s.para.heatmap.collect_url();
        }),
        s.para.heatmap.collect_elements === "all"
          ? (s.para.heatmap.collect_elements = "all")
          : (s.para.heatmap.collect_elements = "interact"),
        s.para.heatmap.collect_elements === "all"
          ? nt(document, "click", function (r) {
              if (!t) return !1;
              var n = r || window.event;
              if (!n) return !1;
              var i = n.target || n.srcElement;
              if (typeof i != "object" || typeof i.tagName != "string")
                return !1;
              var a = i.tagName.toLowerCase();
              if (
                a === "body" ||
                a === "html" ||
                !i ||
                !i.parentNode ||
                !i.parentNode.children
              )
                return !1;
              var u = i.parentNode.tagName.toLowerCase();
              u === "a" || u === "button"
                ? e.start(n, i.parentNode, u)
                : e.start(n, i, a);
            })
          : nt(document, "click", function (r) {
              if (!t) return !1;
              var n = r || window.event;
              if (!n) return !1;
              var i = n.target || n.srcElement,
                a = s.heatmap.getTargetElement(i, r);
              a
                ? e.start(n, a, a.tagName.toLowerCase())
                : ve(i) &&
                  i.tagName.toLowerCase() === "div" &&
                  d(s.para.heatmap) &&
                  s.para.heatmap.get_vtrack_config &&
                  ur.events.length > 0 &&
                  ur.isTargetEle(i) &&
                  e.start(n, i, i.tagName.toLowerCase(), {
                    $lib_method: "vtrack",
                  });
            });
    },
  };
function Er() {
  var e = E.campaignParams(),
    t = {};
  return (
    T(e, function (r, n, i) {
      (" " + s.source_channel_standard + " ").indexOf(" " + n + " ") !== -1
        ? (t["$" + n] = i[n])
        : (t[n] = i[n]);
    }),
    t
  );
}
function Sn(e, t, r) {
  if (s.is_first_visitor && r) {
    var n = {};
    s.para.preset_properties.search_keyword_baidu &&
      ir(document.referrer) &&
      Et() &&
      ((n.$search_keyword_id = Ut.id()),
      (n.$search_keyword_id_type = Ut.type()),
      (n.$search_keyword_id_hash = Xr(n.$search_keyword_id)));
    var i = Xe(null, t);
    e(
      D(
        {
          $first_visit_time: new Date(),
          $first_referrer: i,
          $first_referrer_host: i ? xe(i, "取值异常") : "",
          $first_browser_language: b(navigator.language)
            ? navigator.language.toLowerCase()
            : "取值异常",
          $first_browser_charset: b(document.charset)
            ? document.charset.toUpperCase()
            : "取值异常",
          $first_traffic_source_type: Yr(),
          $first_search_keyword: It(),
        },
        Er(),
        n
      )
    ),
      (s.is_first_visitor = !1);
  }
}
var Qt = {
  autoTrackIsUsed: !1,
  isReady: function (e) {
    P(e) ? e() : s.log("error: isReady callback must be function");
  },
  getUtm: function () {
    return E.campaignParams();
  },
  getStayTime: function () {
    return (new Date() - s._t) / 1e3;
  },
  setProfileLocal: function (e) {
    if (!L.isSupport()) return s.setProfile(e), !1;
    if (!d(e) || re(e)) return !1;
    var t = l.readObjectVal("sensorsdata_2015_jssdk_profile"),
      r = !1;
    if (d(t) && !re(t)) {
      for (var n in e)
        (!(n in t && t[n] !== e[n]) && n in t) || ((t[n] = e[n]), (r = !0));
      r &&
        (l.saveObjectVal("sensorsdata_2015_jssdk_profile", t), s.setProfile(e));
    } else
      l.saveObjectVal("sensorsdata_2015_jssdk_profile", e), s.setProfile(e);
  },
  setInitReferrer: function () {
    var e = Xe();
    s.setOnceProfile({
      _init_referrer: e,
      _init_referrer_host: E.pageProp.referrer_host,
    });
  },
  setSessionReferrer: function () {
    var e = Xe();
    l.setSessionPropsOnce({
      _session_referrer: e,
      _session_referrer_host: E.pageProp.referrer_host,
    });
  },
  setDefaultAttr: function () {
    E.register({
      _current_url: location.href,
      _referrer: Xe(),
      _referring_host: E.pageProp.referrer_host,
    });
  },
  trackHeatMap: function (e, t, r) {
    if (typeof e == "object" && e.tagName && ve(e.parentNode)) {
      var n = e.tagName.toLowerCase(),
        i = e.parentNode.tagName.toLowerCase(),
        a =
          s.para.heatmap && s.para.heatmap.track_attr
            ? s.para.heatmap.track_attr
            : ["data-sensors-click"];
      n === "button" ||
        n === "a" ||
        i === "a" ||
        i === "button" ||
        n === "input" ||
        n === "textarea" ||
        zr(e, a) ||
        $e.start(null, e, n, t, r);
    }
  },
  trackAllHeatMap: function (e, t, r) {
    if (typeof e == "object" && e.tagName) {
      var n = e.tagName.toLowerCase();
      $e.start(null, e, n, t, r);
    }
  },
  autoTrackSinglePage: function (e, t) {
    var r;
    r = this.autoTrackIsUsed ? E.pageProp.url : E.pageProp.referrer;
    var n = !(e = d(e) ? e : {}).not_set_profile;
    function i(a, u) {
      s.track(
        "$pageview",
        D(
          { $referrer: r, $url: ae(), $url_path: ut(), $title: document.title },
          a,
          Er()
        ),
        u
      ),
        (r = ae());
    }
    e.not_set_profile && delete e.not_set_profile,
      i(e, t),
      (this.autoTrackSinglePage = i),
      Sn(s.setOnceProfile, !1, n);
  },
  autoTrackWithoutProfile: function (e, t) {
    (e = d(e) ? e : {}), this.autoTrack(D(e, { not_set_profile: !0 }), t);
  },
  autoTrack: function (e, t) {
    e = d(e) ? e : {};
    var r = Er(),
      n = !e.not_set_profile;
    e.not_set_profile && delete e.not_set_profile;
    var i = location.href;
    s.para.is_single_page &&
      ii(function () {
        var a = Xe(i, !0);
        s.track(
          "$pageview",
          D(
            {
              $referrer: a,
              $url: ae(),
              $url_path: ut(),
              $title: document.title,
            },
            r,
            e
          ),
          t
        ),
          (i = ae());
      }),
      s.track(
        "$pageview",
        D(
          {
            $referrer: Xe(null, !0),
            $url: ae(),
            $url_path: ut(),
            $title: document.title,
          },
          r,
          e
        ),
        t
      ),
      Sn(s.setOnceProfile, !0, n),
      (this.autoTrackIsUsed = !0);
  },
  getAnonymousID: function () {
    return re(l._state)
      ? "SDK is not initialized."
      : l._state._first_id ||
          l._state.first_id ||
          l._state._distinct_id ||
          l._state.distinct_id;
  },
  setPlugin: function (e) {
    if (!d(e)) return !1;
    T(e, function (t, r) {
      P(t) &&
        ((d(window.SensorsDataWebJSSDKPlugin) &&
          window.SensorsDataWebJSSDKPlugin[r]) ||
        (d(s.modules) && s.modules[r])
          ? t(window.SensorsDataWebJSSDKPlugin[r])
          : O(r + "is not found,please check sensorsdata documents."));
    });
  },
  useModulePlugin: function () {
    s.use.apply(s, arguments);
  },
  useAppPlugin: function () {
    this.setPlugin.apply(this, arguments);
  },
};
function Fi(e, t) {
  var r = e.id,
    n = e.callback,
    i = e.name,
    a = l.getFirstId(),
    u = l.getOriginDistinctId();
  if (!B({ distinct_id: r })) return N("login id is invalid"), !1;
  if (r === l.getOriginDistinctId() && !a)
    return N("login id is equal to distinct_id"), !1;
  if (
    d(l._state.identities) &&
    l._state.identities.hasOwnProperty(i) &&
    r === l._state.first_id
  )
    return !1;
  if (
    l._state.history_login_id.name !== i ||
    r !== l._state.history_login_id.value
  ) {
    (l._state.identities[i] = r),
      l.set("history_login_id", { name: i, value: r }),
      a || l.set("first_id", u),
      t(r, "$SignUp", {}, n);
    var c = { $identity_cookie_id: l._state.identities.$identity_cookie_id };
    return (c[i] = r), Mi(c), !0;
  }
  return !1;
}
function Mi(e) {
  var t = {};
  for (var r in e) t[r] = e[r];
  (l._state.identities = t), l.save();
}
function rs(e, t) {
  if (!B({ unbindKey: e, bindValue: t })) return !1;
  if (
    d(l._state.identities) &&
    l._state.identities.hasOwnProperty(e) &&
    l._state.identities[e] === t
  ) {
    var r = l.getUnionId().login_id;
    r &&
      e + "+" + t === r &&
      ((l._state.distinct_id = l._state.first_id),
      (l._state.first_id = ""),
      l.set("history_login_id", { name: "", value: "" })),
      e !== "$identity_cookie_id" && (delete l._state.identities[e], l.save());
  }
  var n = {};
  return (n[e] = t), n;
}
function ns() {
  (s._t = s._t || 1 * new Date()),
    (s.is_first_visitor = !1),
    (s.source_channel_standard = ki);
}
function is(e) {
  D(v, e || s.para || {}), (s.para = v);
  var t,
    r = {};
  if (d(s.para.is_track_latest))
    for (var n in s.para.is_track_latest)
      r["latest_" + n] = s.para.is_track_latest[n];
  for (t in ((s.para.preset_properties = D(
    {},
    Zt.preset_properties,
    r,
    s.para.preset_properties || {}
  )),
  Zt))
    s.para[t] === void 0 && (s.para[t] = Zt[t]);
  typeof s.para.web_url != "string" ||
    (s.para.web_url.slice(0, 3) !== "://" &&
      s.para.web_url.slice(0, 2) !== "//") ||
    (s.para.web_url.slice(0, 3) === "://"
      ? (s.para.web_url = location.protocol.slice(0, -1) + s.para.web_url)
      : (s.para.web_url = location.protocol + s.para.web_url)),
    Qe.protocol.serverUrl(),
    s.bridge && s.bridge.initPara();
  var i = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ],
    a = [
      "www.baidu.",
      "m.baidu.",
      "m.sm.cn",
      "so.com",
      "sogou.com",
      "youdao.com",
      "google.",
      "yahoo.com/",
      "bing.com/",
      "ask.com/",
    ],
    u = [
      "weibo.com",
      "renren.com",
      "kaixin001.com",
      "douban.com",
      "qzone.qq.com",
      "zhihu.com",
      "tieba.baidu.com",
      "weixin.qq.com",
    ],
    c = {
      baidu: ["wd", "word", "kw", "keyword"],
      google: "q",
      bing: "q",
      yahoo: "p",
      sogou: ["query", "keyword"],
      so: "q",
      sm: "q",
    };
  typeof s.para.source_type == "object" &&
    ((s.para.source_type.utm = A(s.para.source_type.utm)
      ? s.para.source_type.utm.concat(i)
      : i),
    (s.para.source_type.search = A(s.para.source_type.search)
      ? s.para.source_type.search.concat(a)
      : a),
    (s.para.source_type.social = A(s.para.source_type.social)
      ? s.para.source_type.social.concat(u)
      : u),
    (s.para.source_type.keyword = d(s.para.source_type.keyword)
      ? D(c, s.para.source_type.keyword)
      : c));
  var f = [
    "mark",
    "/mark",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "abbr",
    "ins",
    "del",
    "s",
    "sup",
  ];
  if (
    (s.para.heatmap && !d(s.para.heatmap) && (s.para.heatmap = {}),
    d(s.para.heatmap))
  ) {
    (s.para.heatmap.clickmap = s.para.heatmap.clickmap || "default"),
      (s.para.heatmap.scroll_notice_map =
        s.para.heatmap.scroll_notice_map || "default"),
      (s.para.heatmap.scroll_delay_time =
        s.para.heatmap.scroll_delay_time || 4e3),
      (s.para.heatmap.scroll_event_duration =
        s.para.heatmap.scroll_event_duration || 18e3),
      (s.para.heatmap.renderRefreshTime =
        s.para.heatmap.renderRefreshTime || 1e3),
      (s.para.heatmap.loadTimeout = s.para.heatmap.loadTimeout || 1e3),
      s.para.heatmap.get_vtrack_config !== !0 &&
        (s.para.heatmap.get_vtrack_config = !1);
    var _ = A(s.para.heatmap.track_attr)
      ? li(s.para.heatmap.track_attr, function (y) {
          return y && typeof y == "string";
        })
      : [];
    _.push("data-sensors-click"),
      (s.para.heatmap.track_attr = _),
      d(s.para.heatmap.collect_tags)
        ? s.para.heatmap.collect_tags.div === !0
          ? (s.para.heatmap.collect_tags.div = { ignore_tags: f, max_level: 1 })
          : d(s.para.heatmap.collect_tags.div)
          ? (s.para.heatmap.collect_tags.div.ignore_tags
              ? A(s.para.heatmap.collect_tags.div.ignore_tags) ||
                (O("ignore_tags 参数必须是数组格式"),
                (s.para.heatmap.collect_tags.div.ignore_tags = f))
              : (s.para.heatmap.collect_tags.div.ignore_tags = f),
            s.para.heatmap.collect_tags.div.max_level &&
              te([1, 2, 3], s.para.heatmap.collect_tags.div.max_level) === -1 &&
              (s.para.heatmap.collect_tags.div.max_level = 1))
          : (s.para.heatmap.collect_tags.div = !1)
        : (s.para.heatmap.collect_tags = { div: !1 });
  }
  (s.para.server_url = Di(s.para.server_url)),
    s.para.noCache === !0
      ? (s.para.noCache = "?" + new Date().getTime())
      : (s.para.noCache = ""),
    s.para.callback_timeout > s.para.datasend_timeout &&
      (s.para.datasend_timeout = s.para.callback_timeout),
    s.para.heatmap &&
      s.para.heatmap.collect_tags &&
      d(s.para.heatmap.collect_tags) &&
      T(s.para.heatmap.collect_tags, function (y, I) {
        I !== "div" && y && s.heatmap.otherTags.push(I);
      }),
    s.para.heatmap &&
      s.para.heatmap.clickmap === "default" &&
      s.heatmap.initUnlimitedTags();
}
var as = {
  state: 0,
  historyState: [],
  stateType: { 1: "1-init未开始", 2: "2-init开始", 3: "3-store完成" },
  getState: function () {
    return this.historyState.join(`
`);
  },
  setState: function (e) {
    String(e) in this.stateType && (this.state = e),
      this.historyState.push(this.stateType[e]);
  },
};
function ss() {
  var e = Array.prototype.slice.call(arguments),
    t = e[0],
    r = e.slice(1);
  if (typeof t == "string" && Qt[t]) return Qt[t].apply(Qt, r);
  typeof t == "function" ? t.apply(s, r) : O("quick方法中没有这个功能" + e[0]);
}
var os = 1;
function qi(e, t) {
  if (b(e) || d(e)) {
    var r;
    if (d(e)) {
      var n = s.modules && s.modules[e.plugin_name];
      n &&
        n !== e &&
        O(
          e.name +
            " is conflict with builtin plugin, and sdk uses builtin plugin."
        ),
        (r = n || e);
    }
    return (
      b(e) &&
        (d(s.modules) && d(s.modules[e])
          ? (r = s.modules[e])
          : d(window.SensorsDataWebJSSDKPlugin) &&
            d(window.SensorsDataWebJSSDKPlugin[e])
          ? (r = window.SensorsDataWebJSSDKPlugin[e])
          : window.sensorsDataAnalytic201505 &&
            window.sensorsDataAnalytic201505.modules[e] &&
            (r = window.sensorsDataAnalytic201505.modules[e])),
      r && P(r.init)
        ? (r.plugin_is_init ||
            (r.plugin_name ||
              O("warning: invalid plugin, plugin_name required."),
            r.plugin_version
              ? r.plugin_version !== s.lib_version &&
                O(
                  "warning: plugin version not match SDK version. plugin may not work correctly. "
                )
              : O("warning: invalid plugin, plugin version required."),
            !r.plugin_is_init && r.init(s, t),
            (r.plugin_is_init = !0),
            (s.modules = s.modules || {}),
            (s.modules[r.plugin_name || "unnamed_" + os++] = r)),
          r)
        : (O(
            (e.plugin_name || e) +
              " is not found or it's not a standard plugin. Please check sensorsdata official documents."
          ),
          r)
    );
  }
  N("use's first arguments must be string or object.");
}
function us(e, t, r) {
  B({ event: e, properties: t }) &&
    se.send({ type: "track", event: e, properties: t }, r);
}
function cs(e, t) {
  if (!B({ bindKey: e, bindValue: t })) return !1;
  (l._state.identities[e] = t),
    l.save(),
    se.send({ type: "track_id_bind", event: "$BindID", properties: {} });
}
function ls(e, t) {
  var r = rs(e, t);
  r &&
    se.send({
      identities: r,
      type: "track_id_unbind",
      event: "$UnbindID",
      properties: {},
    });
}
function ds(e, t, r) {
  typeof e == "object" && e.tagName
    ? bn({ ele: e }, t, r, s.track)
    : typeof e == "object" && e.target && e.event && bn(e, t, r, s.track);
}
function fs(e, t, r) {
  return (
    (r = r || {}),
    !(!e || typeof e != "object") &&
      !(!e.href || /^javascript/.test(e.href) || e.target) &&
      void nt(e, "click", function (n) {
        n.preventDefault();
        var i = !1;
        function a() {
          i || ((i = !0), (location.href = e.href));
        }
        setTimeout(a, 1e3), s.track(t, r, a);
      })
  );
}
function ps(e, t, r) {
  B({ item_type: e, item_id: t, properties: r }) &&
    se.sendItem({
      type: "item_set",
      item_type: e,
      item_id: t,
      properties: r || {},
    });
}
function gs(e, t) {
  B({ item_type: e, item_id: t }) &&
    se.sendItem({ type: "item_delete", item_type: e, item_id: t });
}
function _s(e, t) {
  B({ propertiesMust: e }) &&
    se.send({ type: "profile_set", properties: e }, t);
}
function hs(e, t) {
  B({ propertiesMust: e }) &&
    se.send({ type: "profile_set_once", properties: e }, t);
}
function ms(e, t) {
  B({ propertiesMust: e }) &&
    (T(e, function (r, n) {
      b(r)
        ? (e[n] = [r])
        : A(r)
        ? (e[n] = r)
        : (delete e[n], O("appendProfile属性的值必须是字符串或者数组"));
    }),
    re(e) || se.send({ type: "profile_append", properties: e }, t));
}
function vs(e, t) {
  var r = e;
  b(e) && ((e = {})[r] = 1),
    B({ propertiesMust: e }) &&
      ((function (n) {
        for (var i in n)
          if (
            Object.prototype.hasOwnProperty.call(n, i) &&
            !/-*\d+/.test(String(n[i]))
          )
            return !1;
        return !0;
      })(e)
        ? se.send({ type: "profile_increment", properties: e }, t)
        : N("profile_increment的值只能是数字"));
}
function ys(e) {
  se.send({ type: "profile_delete" }, e),
    l.set("distinct_id", et()),
    l.set("first_id", "");
}
function bs(e, t) {
  var r = e,
    n = {};
  b(e) && (e = []).push(r),
    A(e)
      ? (T(e, function (i) {
          b(i)
            ? (n[i] = !0)
            : O("profile_unset给的数组里面的值必须时string,已经过滤掉", i);
        }),
        se.send({ type: "profile_unset", properties: n }, t))
      : N("profile_unset的参数必须是数组");
}
function Ss(e, t) {
  typeof e == "number" && (e = String(e));
  var r = l.getFirstId();
  if (e === void 0) {
    var n = et();
    r ? l.set("first_id", n) : l.set("distinct_id", n);
  } else
    B({ distinct_id: e }) &&
      (t === !0
        ? r
          ? l.set("first_id", e)
          : l.set("distinct_id", e)
        : r
        ? l.change("first_id", e)
        : l.change("distinct_id", e));
}
function ws(e) {
  if (l.getFirstId())
    return N("resetAnonymousIdentity must be used in a logout state ！"), !1;
  if ((typeof e == "number" && (e = String(e)), e === void 0)) {
    var t = et();
    (l._state.identities.$identity_cookie_id = t), l.set("distinct_id", t);
  } else
    B({ distinct_id: e }) &&
      ((l._state.identities.$identity_cookie_id = e), l.set("distinct_id", e));
}
function an(e, t, r, n) {
  var i = l.getFirstId() || l.getDistinctId();
  l.set("distinct_id", e),
    se.send(
      {
        original_id: i,
        distinct_id: l.getDistinctId(),
        type: "track_signup",
        event: t,
        properties: r,
      },
      n
    );
}
function ks(e, t, r, n) {
  typeof e == "number" && (e = String(e)),
    B({ distinct_id: e, event: t, properties: r }) && an(e, t, r, n);
}
function Ps(e) {
  B({ properties: e }) ? D(E.currentProps, e) : N("register输入的参数有误");
}
function $s(e) {
  l.clearAllProps(e);
}
function Cs(e) {
  var t;
  if (A(e) && e.length > 0)
    for (t = 0; t < e.length; t++)
      b(e[t]) && e[t] in E.currentProps && delete E.currentProps[e[t]];
  else if (e === !0) for (t in E.currentProps) delete E.currentProps[t];
}
function Ki(e) {
  B({ properties: e }) ? l.setProps(e) : N("register输入的参数有误");
}
function Is(e) {
  B({ properties: e }) ? l.setPropsOnce(e) : N("registerOnce输入的参数有误");
}
function Os(e) {
  s.log("registerSession 方法已经弃用，有问题联系技术顾问"),
    B({ properties: e })
      ? l.setSessionProps(e)
      : N("registerSession输入的参数有误");
}
function js(e) {
  s.log("registerSessionOnce 方法已经弃用，有问题联系技术顾问"),
    B({ properties: e })
      ? l.setSessionPropsOnce(e)
      : N("registerSessionOnce输入的参数有误");
}
function Vi(e, t) {
  typeof e == "number" && (e = String(e)),
    !Fi({ id: e, callback: t, name: Lt.LOGIN }, an) && P(t) && t();
}
function Ts(e, t) {
  return (
    typeof t == "number" && (t = String(t)),
    typeof e == "number" && (e = String(e)),
    !!B({ loginIdKey: e }) &&
      (Lt.LOGIN === e
        ? (Vi(t), !1)
        : void Fi({ id: t, callback: null, name: e }, an))
  );
}
function As(e) {
  var t = l.getFirstId();
  if (t)
    if ((l.set("first_id", ""), e === !0)) {
      var r = et();
      l.set("distinct_id", r);
    } else l.set("distinct_id", t);
  Mi({ $identity_cookie_id: l._state.identities.$identity_cookie_id }),
    l.set("history_login_id", { name: "", value: "" });
}
function Ns() {
  var e,
    t,
    r = {
      $is_first_day: ar(),
      $is_first_time: Rt.is_page_first_visited,
      $referrer: E.pageProp.referrer || "",
      $referrer_host: E.pageProp.referrer ? xe(E.pageProp.referrer) : "",
      $url: ae(),
      $url_path: ut(),
      $title: document.title || "",
      _distinct_id: l.getDistinctId(),
      identities: JSON.parse(JSON.stringify(l._state.identities)),
    },
    n = D(
      {},
      E.properties(),
      l.getProps(),
      ((e = E.campaignParams()),
      (t = {}),
      T(e, function (i, a, u) {
        (" " + s.source_channel_standard + " ").indexOf(" " + a + " ") !== -1
          ? (t["$" + a] = u[a])
          : (t[a] = u[a]);
      }),
      t),
      r
    );
  return (
    s.para.preset_properties.latest_referrer &&
      s.para.preset_properties.latest_referrer_host &&
      (n.$latest_referrer_host =
        n.$latest_referrer === "" ? "" : xe(n.$latest_referrer)),
    n
  );
}
var xs = {
  __proto__: null,
  setInitVar: ns,
  initPara: is,
  quick: ss,
  use: qi,
  track: us,
  bind: cs,
  unbind: ls,
  trackLink: ds,
  trackLinks: fs,
  setItem: ps,
  deleteItem: gs,
  setProfile: _s,
  setOnceProfile: hs,
  appendProfile: ms,
  incrementProfile: vs,
  deleteProfile: ys,
  unsetProfile: bs,
  identify: Ss,
  resetAnonymousIdentity: ws,
  trackSignup: ks,
  registerPage: Ps,
  clearAllRegister: $s,
  clearPageRegister: Cs,
  register: Ki,
  registerOnce: Is,
  registerSession: Os,
  registerSessionOnce: js,
  login: Vi,
  loginWithKey: Ts,
  logout: As,
  getPresetProperties: Ns,
  readyState: as,
  debug: Qe,
  on: Ei,
  log: Le,
};
Y.setup(Le);
var Wi = D({}, Da, Ba);
function Ds() {
  var e = "",
    t = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
  s.heatmap &&
    A(s.heatmap.otherTags) &&
    T(s.heatmap.otherTags, function (r) {
      e += r + t;
    }),
    mi() &&
      Ar() &&
      Ar() < 13 &&
      (s.para.heatmap &&
        s.para.heatmap.collect_tags &&
        s.para.heatmap.collect_tags.div &&
        zt("div, [data-sensors-click]" + t),
      s.para.heatmap &&
        s.para.heatmap.track_attr &&
        zt("[" + s.para.heatmap.track_attr.join("], [") + "]" + t),
      e !== "" && zt(e));
}
var Ls = {
  bridge_info: {
    touch_app_bridge: !1,
    verify_success: !1,
    platform: "",
    support_two_way_call: !1,
  },
  is_verify_success: !1,
  initPara: function () {
    var e = {
      is_send:
        s.para.use_app_track_is_send !== !1 && s.para.use_app_track !== "only",
      white_list: [],
      is_mui: s.para.use_app_track === "mui",
    };
    typeof s.para.app_js_bridge == "object"
      ? (s.para.app_js_bridge = D({}, e, s.para.app_js_bridge))
      : (s.para.use_app_track !== !0 &&
          s.para.app_js_bridge !== !0 &&
          s.para.use_app_track !== "only" &&
          s.para.use_app_track !== "mui") ||
        (s.para.app_js_bridge = D({}, e)),
      s.para.app_js_bridge.is_send === !1 &&
        O("设置了 is_send:false,如果打通失败，数据将被丢弃!");
  },
  app_js_bridge_v1: function () {
    var e = null,
      t = null;
    (window.sensorsdata_app_js_bridge_call_js = function (r) {
      (function (n) {
        Dt((e = n)) && (e = JSON.parse(e)), t && (t(e), (t = null), (e = null));
      })(r);
    }),
      (s.getAppStatus = function (r) {
        if (
          ((function () {
            if (
              /iPad|iPhone|iPod/.test(navigator.userAgent) &&
              !window.MSStream
            ) {
              var n = document.createElement("iframe");
              n.setAttribute("src", "sensorsanalytics://getAppInfo"),
                document.documentElement.appendChild(n),
                n.parentNode.removeChild(n),
                (n = null);
            }
          })(),
          typeof window.SensorsData_APP_JS_Bridge == "object" &&
            window.SensorsData_APP_JS_Bridge.sensorsdata_call_app &&
            Dt((e = window.SensorsData_APP_JS_Bridge.sensorsdata_call_app())) &&
            (e = JSON.parse(e)),
          !r)
        )
          return e;
        e === null ? (t = r) : (r(e), (e = null));
      });
  },
  hasVisualModeBridge: function () {
    var e = window.SensorsData_App_Visual_Bridge,
      t = "sensorsdata_visualized_mode";
    return d(e) && e[t] && (e[t] === !0 || e[t]());
  },
  validateAppUrl: Es,
};
function Ot(e) {
  var t = this;
  (this.type = e),
    (this.resultCbs = {}),
    (this.timeoutCbs = {}),
    (this.timerId = null),
    (this.appCallJsCallback = null),
    window.sensorsdata_app_call_js ||
      (window.sensorsdata_app_call_js = function (r, n) {
        if (r in window.sensorsdata_app_call_js.modules)
          return window.sensorsdata_app_call_js.modules[r](n);
      }),
    (window.sensorsdata_app_call_js.modules =
      window.sensorsdata_app_call_js.modules || {}),
    (window.sensorsdata_app_call_js.modules[this.type] = function (r) {
      try {
        var n = bt(r) || r;
        try {
          n = JSON.parse(n);
        } catch {}
        var i = n && n.message_id;
        if (i && t.resultCbs[i]) {
          if (((r = n), t.timeoutCbs[i] && t.timeoutCbs[i].isTimeout))
            return void (t.resultCbs[i].callbacks.length = 0);
          if (t.resultCbs[i])
            for (var a in ((t.resultCbs[i].result = r),
            clearTimeout(t.timerId),
            (t.timeoutCbs[i].callbacks.length = 0),
            t.resultCbs[i].callbacks))
              t.resultCbs[i].callbacks[a].call(null, r),
                t.resultCbs[i].callbacks.splice(a, 1);
          return;
        }
        return t.appCallJsCallback && t.appCallJsCallback.call(null, r);
      } catch {
        N("app 回调 js 异常", r);
      }
    });
}
function wn(e) {
  try {
    if (s.bridge.activeBridge && P(s.bridge.activeBridge.handleCommand))
      return s.bridge.activeBridge.handleCommand(e);
  } catch (t) {
    N("Error: handle command exception:" + t);
  }
  return N("数据发往App失败，App没有暴露bridge,type:" + e.callType), !1;
}
function Es(e) {
  function t(u) {
    var c = { hostname: "", project: "" };
    try {
      (u = Ae(u)),
        (c.hostname = u.hostname),
        (c.project = u.searchParams.get("project") || "default");
    } catch (f) {
      N("validateAppUrl:" + f);
    }
    return c;
  }
  var r = t(e),
    n = t(s.para.server_url);
  if (r.hostname === n.hostname && r.project === n.project) return !0;
  if (A(s.para.app_js_bridge.white_list))
    for (var i = 0; i < s.para.app_js_bridge.white_list.length; i++) {
      var a = t(s.para.app_js_bridge.white_list[i]);
      if (a.hostname === r.hostname && a.project === r.project) return !0;
    }
  return !1;
}
function zi(e) {
  this.bridge = new Ot(e.type);
}
function Us() {
  var e = E.pageProp.url_domain,
    t = {};
  e === "" && (e = "url解析失败");
  var r = It(document.referrer, !0);
  if (
    (v.preset_properties.search_keyword_baidu
      ? ir(document.referrer) &&
        (!Et() || (d(r) && r.active)
          ? l._state &&
            l._state.props &&
            (l._state.props.$search_keyword_id &&
              delete l._state.props.$search_keyword_id,
            l._state.props.$search_keyword_id_type &&
              delete l._state.props.$search_keyword_id_type,
            l._state.props.$search_keyword_id_hash &&
              delete l._state.props.$search_keyword_id_hash)
          : ((t.$search_keyword_id = Ut.id()),
            (t.$search_keyword_id_type = Ut.type()),
            (t.$search_keyword_id_hash = Xr(t.$search_keyword_id))))
      : l._state &&
        l._state.props &&
        (l._state.props.$search_keyword_id &&
          delete l._state.props.$search_keyword_id,
        l._state.props.$search_keyword_id_type &&
          delete l._state.props.$search_keyword_id_type,
        l._state.props.$search_keyword_id_hash &&
          delete l._state.props.$search_keyword_id_hash),
    l.save(),
    T(v.preset_properties, function (u, c) {
      if (c.indexOf("latest_") === -1) return !1;
      if (((c = c.slice(7)), u)) {
        if (c === "wx_ad_click_id" && u === "not_collect") return !1;
        if (c !== "utm" && e === "url解析失败")
          c === "wx_ad_click_id"
            ? ((t._latest_wx_ad_click_id = "url的domain解析失败"),
              (t._latest_wx_ad_hash_key = "url的domain解析失败"),
              (t._latest_wx_ad_callbacks = "url的domain解析失败"))
            : (t["$latest_" + c] = "url的domain解析失败");
        else if (ir(document.referrer))
          switch (c) {
            case "traffic_source_type":
              t.$latest_traffic_source_type = Yr();
              break;
            case "referrer":
              t.$latest_referrer = E.pageProp.referrer;
              break;
            case "search_keyword":
              It()
                ? (t.$latest_search_keyword = It())
                : d(l._state) &&
                  d(l._state.props) &&
                  l._state.props.$latest_search_keyword &&
                  delete l._state.props.$latest_search_keyword;
              break;
            case "landing_page":
              t.$latest_landing_page = ae();
              break;
            case "wx_ad_click_id":
              var f = ji(location.href);
              (t._latest_wx_ad_click_id = f.click_id),
                (t._latest_wx_ad_hash_key = f.hash_key),
                (t._latest_wx_ad_callbacks = f.callbacks);
          }
      } else if (c === "utm" && l._state && l._state.props)
        for (var _ in l._state.props)
          (_.indexOf("$latest_utm") === 0 ||
            (_.indexOf("_latest_") === 0 && _.indexOf("_latest_wx_ad_") < 0)) &&
            delete l._state.props[_];
      else
        l._state && l._state.props && "$latest_" + c in l._state.props
          ? delete l._state.props["$latest_" + c]
          : c == "wx_ad_click_id" &&
            l._state &&
            l._state.props &&
            u === !1 &&
            T(
              [
                "_latest_wx_ad_click_id",
                "_latest_wx_ad_hash_key",
                "_latest_wx_ad_callbacks",
              ],
              function (y) {
                y in l._state.props && delete l._state.props[y];
              }
            );
    }),
    v.preset_properties.latest_utm)
  ) {
    var n = E.campaignParamsStandard("$latest_", "_latest_"),
      i = n.$utms,
      a = n.otherUtms;
    re(i) || D(t, i), re(a) || D(t, a);
  }
  Ki(t);
}
function kn(e) {
  var t = null;
  try {
    var r = JSON.parse(window.name);
    t = r[e] ? dt(r[e]) : null;
  } catch {
    t = null;
  }
  return t === null && (t = Fe(location.href, e) || null), t;
}
(Ot.prototype.call = function (e, t) {
  var r = this,
    n =
      new Date().getTime().toString(16) +
      String(me()).replace(".", "").slice(1, 8);
  (this.resultCbs[n] = r.resultCbs[n] || { result: null, callbacks: [] }),
    (this.timeoutCbs[n] = r.timeoutCbs[n] || { isTimeout: !1, callbacks: [] }),
    ((e = e.data ? e : { data: e }).data.message_id = n);
  var i = D({ callType: this.type }, e);
  return (
    t &&
      (this.timerId = setTimeout(function () {
        for (var a in ((r.timeoutCbs[n].isTimeout = !0),
        r.timeoutCbs[n].callbacks))
          r.timeoutCbs[n].callbacks[a].call(null),
            r.timeoutCbs[n].callbacks.splice(a, 1);
      }, t)),
    wn(i),
    {
      onResult: function (a) {
        return r.resultCbs[n].result
          ? (a(r.resultCbs[n].result), this)
          : (!r.timeoutCbs[n].isTimeout && r.resultCbs[n].callbacks.push(a),
            this);
      },
      onTimeout: function (a) {
        return r.timeoutCbs[n].isTimeout
          ? (a(), this)
          : (!r.resultCbs[n].result && r.timeoutCbs[n].callbacks.push(a), this);
      },
    }
  );
}),
  (Ot.prototype.onAppNotify = function (e) {
    this.appCallJsCallback = e;
  }),
  (Ot.prototype.notifyApp = function (e, t) {
    var r = D({ callType: this.type }, e);
    return t && (r.message_id = t), wn(r);
  }),
  (zi.prototype = {
    double: function () {},
    getAppData: function () {},
    hasAppBridge: function () {
      return s.bridge.bridge_info.support_two_way_call;
    },
    init: function () {},
    jsCallApp: function () {},
    requestToApp: function (e) {
      this.bridge
        .call(e, e.timeout.time)
        .onResult(function (t) {
          P(e.callback) && e.callback(t);
        })
        .onTimeout(function () {
          P(e.timeout.callback) && e.timeout.callback();
        });
    },
  });
var ze = {
    isSeachHasKeyword: function () {
      return (
        Fe(location.href, "sa-request-id") !== "" &&
        (typeof sessionStorage.getItem("sensors-visual-mode") == "string" &&
          sessionStorage.removeItem("sensors-visual-mode"),
        !0)
      );
    },
    hasKeywordHandle: function () {
      var e = location.href,
        t = Fe(e, "sa-request-id") || null,
        r = Fe(e, "sa-request-type") || null,
        n = Fe(e, "sa-request-url") || null;
      if (($e.setNotice(n), mt.isSupport()))
        if (
          (n !== null && sessionStorage.setItem("sensors_heatmap_url", n),
          sessionStorage.setItem("sensors_heatmap_id", t),
          r !== null)
        )
          r === "1" || r === "2" || r === "3"
            ? sessionStorage.setItem("sensors_heatmap_type", r)
            : (r = null);
        else {
          var i = sessionStorage.getItem("sensors_heatmap_type");
          r = i !== null ? i : null;
        }
      this.isReady(t, r);
    },
    isReady: function (e, t, r) {
      s.para.heatmap_url
        ? lr({
            success: function () {
              setTimeout(function () {
                typeof sa_jssdk_heatmap_render < "u" &&
                  (sa_jssdk_heatmap_render(s, e, t, r),
                  typeof console == "object" &&
                    typeof console.log == "function" &&
                    ((s.heatmap_version &&
                      s.heatmap_version === s.lib_version) ||
                      O(
                        "heatmap.js与sensorsdata.js版本号不一致，可能存在风险!"
                      )));
              }, 0);
            },
            error: function () {},
            type: "js",
            url: s.para.heatmap_url,
          })
        : N("没有指定heatmap_url的路径");
    },
    isStorageHasKeyword: function () {
      return (
        mt.isSupport() &&
        typeof sessionStorage.getItem("sensors_heatmap_id") == "string"
      );
    },
    storageHasKeywordHandle: function () {
      $e.setNotice(),
        ze.isReady(
          sessionStorage.getItem("sensors_heatmap_id"),
          sessionStorage.getItem("sensors_heatmap_type"),
          location.href
        );
    },
    isWindowNameHasKeyword: function () {
      try {
        var e = JSON.parse(window.name),
          t = b(e["sa-request-page-url"]) ? dt(e["sa-request-page-url"]) : null;
        return (
          e["sa-request-id"] && b(e["sa-request-id"]) && t === location.href
        );
      } catch {
        return !1;
      }
    },
    windowNameHasKeywordHandle: function () {
      var e = JSON.parse(window.name);
      function t(a) {
        var u = e[a];
        return b(u) ? dt(u) : null;
      }
      var r = t("sa-request-id"),
        n = t("sa-request-type"),
        i = t("sa-request-url");
      $e.setNotice(i),
        mt.isSupport() &&
          (i !== null && sessionStorage.setItem("sensors_heatmap_url", i),
          sessionStorage.setItem("sensors_heatmap_id", r),
          n !== null
            ? n === "1" || n === "2" || n === "3"
              ? sessionStorage.setItem("sensors_heatmap_type", n)
              : (n = null)
            : (n =
                sessionStorage.getItem("sensors_heatmap_type") !== null
                  ? sessionStorage.getItem("sensors_heatmap_type")
                  : null)),
        ze.isReady(r, n);
    },
  },
  Ce = {
    isStorageHasKeyword: function () {
      return (
        mt.isSupport() &&
        typeof sessionStorage.getItem("sensors-visual-mode") == "string"
      );
    },
    isSearchHasKeyword: function () {
      return (
        (kn("sa-visual-mode") === !0 || kn("sa-visual-mode") === "true") &&
        (typeof sessionStorage.getItem("sensors_heatmap_id") == "string" &&
          sessionStorage.removeItem("sensors_heatmap_id"),
        !0)
      );
    },
    loadVtrack: function () {
      lr({
        success: function () {},
        error: function () {},
        type: "js",
        url: s.para.vtrack_url
          ? s.para.vtrack_url
          : Ji() +
            "//static.sensorsdata.cn/sdk/" +
            s.lib_version +
            "/vtrack.min.js",
      });
    },
    messageListener: function (e) {
      if (!e || !e.data || e.data.source !== "sa-fe") return !1;
      if (e.data.type === "v-track-mode") {
        if (e.data.data && e.data.data.isVtrack)
          if (
            (mt.isSupport() &&
              sessionStorage.setItem("sensors-visual-mode", "true"),
            e.data.data.userURL && location.href.match(/sa-visual-mode=true/))
          ) {
            var t = e.data.data.userURL;
            t && (window.location.href = encodeURI(t));
          } else Ce.loadVtrack();
        window.removeEventListener("message", Ce.messageListener, !1);
      }
    },
    removeMessageHandle: function () {
      window.removeEventListener &&
        window.removeEventListener("message", Ce.messageListener, !1);
    },
    verifyVtrackMode: function () {
      window.addEventListener &&
        window.addEventListener("message", Ce.messageListener, !1),
        Ce.postMessage();
    },
    postMessage: function () {
      try {
        window.parent &&
          window.parent.postMessage &&
          window.parent.postMessage(
            {
              source: "sa-web-sdk",
              type: "v-is-vtrack",
              data: { sdkversion: dr },
            },
            "*"
          );
      } catch {
        N("浏览器版本过低，不支持 postMessage API");
      }
    },
    notifyUser: function () {
      var e = function (t) {
        if (!t || !t.data || t.data.source !== "sa-fe") return !1;
        t.data.type === "v-track-mode" &&
          (t.data.data &&
            t.data.data.isVtrack &&
            alert("当前版本不支持，请升级部署神策数据治理"),
          window.removeEventListener("message", e, !1));
      };
      window.addEventListener && window.addEventListener("message", e, !1),
        Ce.postMessage();
    },
  };
function br(e) {
  var t = s.bridge.bridge_info;
  function r() {
    var i = [];
    t.touch_app_bridge || i.push(Qe.defineMode("1")),
      d(s.para.app_js_bridge) ||
        (i.push(Qe.defineMode("2")), (t.verify_success = !1)),
      (d(s.para.heatmap) && s.para.heatmap.clickmap == "default") ||
        i.push(Qe.defineMode("3")),
      t.verify_success === "fail" && i.push(Qe.defineMode("4")),
      new s.SDKJSBridge("app_alert").notifyApp({ data: i });
  }
  if (s.bridge.hasVisualModeBridge())
    if (d(s.para.heatmap) && s.para.heatmap.clickmap == "default")
      if (d(s.para.app_js_bridge) && t.verify_success === "success")
        if (e) window.sa_jssdk_app_define_mode(s, e);
        else {
          var n = location.protocol;
          lr({
            success: function () {
              setTimeout(function () {
                typeof sa_jssdk_app_define_mode < "u" &&
                  window.sa_jssdk_app_define_mode(s, e);
              }, 0);
            },
            error: function () {},
            type: "js",
            url:
              (n = te(["http:", "https:"], n) > -1 ? n : "https:") +
              "//static.sensorsdata.cn/sdk/" +
              s.lib_version +
              "/vapph5define.min.js",
          });
        }
      else r();
    else r();
}
function Rs(e) {
  s.para.is_track_single_page &&
    xr.on("switch", function (t) {
      var r = function (i) {
        if (((i = i || {}), t !== location.href)) {
          E.pageProp.referrer = ae(t);
          var a = D({ $url: ae(), $referrer: ae(t) }, i);
          P(e) ? e(a) : s.quick && s.quick("autoTrack", a);
        }
      };
      if (typeof s.para.is_track_single_page == "boolean") r();
      else if (typeof s.para.is_track_single_page == "function") {
        var n = s.para.is_track_single_page();
        d(n) ? r(n) : n === !0 && r();
      }
    });
}
function Bs() {
  s._q &&
    A(s._q) &&
    s._q.length > 0 &&
    T(s._q, function (e) {
      s[e[0]].apply(s, Array.prototype.slice.call(e[1]));
    }),
    d(s.para.heatmap) && ($e.initHeatmap(), $e.initScrollmap());
}
function Hs() {
  s.readyState.setState(3),
    new s.SDKJSBridge("visualized").onAppNotify(function () {
      br(typeof sa_jssdk_app_define_mode < "u");
    }),
    br(!1),
    s.bridge.app_js_bridge_v1(),
    E.initPage(),
    Rs(),
    l.init(),
    Us(),
    Fs(),
    s.readyState.setState(4),
    Bs();
}
function Js() {
  ze.isSeachHasKeyword()
    ? ze.hasKeywordHandle()
    : window.parent !== self && Ce.isSearchHasKeyword()
    ? Ce.verifyVtrackMode()
    : ze.isWindowNameHasKeyword()
    ? ze.windowNameHasKeywordHandle()
    : ze.isStorageHasKeyword()
    ? ze.storageHasKeywordHandle()
    : window.parent !== self && Ce.isStorageHasKeyword()
    ? Ce.verifyVtrackMode()
    : (Hs(), Ce.notifyUser());
}
function Fs() {
  tt.init(), s.bridge.bridge_info.verify_success === "success" && tn.init();
}
var Ms = [
  "setItem",
  "deleteItem",
  "getAppStatus",
  "track",
  "quick",
  "register",
  "registerPage",
  "registerOnce",
  "trackSignup",
  "setProfile",
  "setOnceProfile",
  "appendProfile",
  "incrementProfile",
  "deleteProfile",
  "unsetProfile",
  "identify",
  "resetAnonymousIdentity",
  "login",
  "logout",
  "trackLink",
  "clearAllRegister",
  "clearPageRegister",
  "bind",
  "unbind",
  "loginWithKey",
];
function Pn() {
  T(Ms, function (e) {
    var t = s[e];
    s[e] = function () {
      if (s.readyState.state < 3)
        return (
          A(s._q) || (s._q = []),
          O("calling sdk api before init is deprecated."),
          s._q.push([e, arguments]),
          !1
        );
      if (!P(s.getDisabled) || !s.getDisabled()) {
        if (s.readyState.getState()) return t.apply(s, arguments);
        N("请先初始化神策JS SDK");
      }
    };
  });
}
var qs = {
  track: function (e, t, r) {},
  quick: function (e, t, r, n) {},
  register: function (e) {},
  registerPage: function (e) {},
  registerOnce: function (e) {},
  clearAllRegister: function (e) {},
  trackSignup: function (e, t, r, n) {},
  setProfile: function (e, t) {},
  setOnceProfile: function (e, t) {},
  appendProfile: function (e, t) {},
  incrementProfile: function (e, t) {},
  deleteProfile: function (e) {},
  unsetProfile: function (e, t) {},
  identify: function (e, t) {},
  resetAnonymousIdentity: function (e) {},
  login: function (e, t) {},
  logout: function (e) {},
  trackLink: function (e, t, r) {},
  deleteItem: function (e, t) {},
  setItem: function (e, t, r) {},
  getAppStatus: function (e) {},
  clearPageRegister: function (e) {},
};
function Ks(e, t) {
  (this.cancel = function () {
    e = !0;
  }),
    (this.getCanceled = function () {
      return e || !1;
    }),
    (this.stop = function () {
      t = !0;
    }),
    (this.getStopped = function () {
      return t || !1;
    });
}
function Vs(e, t, r) {
  var n = null;
  try {
    n = JSON.parse(JSON.stringify(e || null));
  } catch {}
  (this.getOriginalData = function () {
    return n;
  }),
    (this.getPosition = function () {
      return t;
    }),
    (this.cancellationToken = new Ks()),
    (this.sensors = r);
}
function ct(e) {
  if (!d(e)) throw "error: Stage constructor requires arguments.";
  (this.processDef = e), (this.registeredInterceptors = {});
}
(ct.prototype.process = function (e, t) {
  if (e && e in this.processDef) {
    var r = this.registeredInterceptors[e];
    if (r && A(r) && r.length > 0)
      for (
        var n = { current: 0, total: r.length }, i = new Vs(t, n, s), a = 0;
        a < r.length;
        a++
      )
        try {
          if (
            ((n.current = a + 1),
            (t = r[a].call(null, t, i) || t),
            i.cancellationToken.getCanceled())
          )
            break;
          if (i.cancellationToken.getStopped()) return;
        } catch (u) {
          N("interceptor error:" + u);
        }
    return (
      this.processDef[e] &&
        this.processDef[e] in this.processDef &&
        (t = this.process(this.processDef[e], t)),
      t
    );
  }
  N("process [" + e + "] is not supported");
}),
  (ct.prototype.registerStageImplementation = function (e) {
    e &&
      e.init &&
      P(e.init) &&
      (e.init(this), e.interceptor && this.registerInterceptor(e.interceptor));
  }),
  (ct.prototype.registerInterceptor = function (e) {
    if (e)
      for (var t in e) {
        var r = e[t];
        if (r && d(r) && P(r.entry)) {
          De(r.priority) || (r.priority = Number.MAX_VALUE),
            this.registeredInterceptors[t] ||
              (this.registeredInterceptors[t] = []);
          var n = this.registeredInterceptors[t];
          (r.entry.priority = r.priority),
            n.push(r.entry),
            n.sort(function (i, a) {
              return i.priority - a.priority;
            });
        }
      }
  });
var Ws = {
    basicProps: "extendProps",
    extendProps: "formatData",
    formatData: "finalAdjustData",
    finalAdjustData: null,
  },
  Xi = new ct(Ws),
  zs = { send: null },
  Zi = new ct(zs),
  Xs = { getUtmData: null, callSchema: null },
  Gi = new ct(Xs),
  Zs = { webClickEvent: null, webStayEvent: null },
  Qi = new ct(Zs);
function Sr(e) {
  e && e.buildDataStage && Xi.registerStageImplementation(e.buildDataStage),
    e && e.businessStage && Gi.registerStageImplementation(e.businessStage),
    e && e.sendDataStage && Zi.registerStageImplementation(e.sendDataStage),
    e && e.viewStage && Qi.registerStageImplementation(e.viewStage);
}
var $n = {
  buildDataStage: function (e) {
    e && Xi.registerInterceptor(e);
  },
  businessStage: function (e) {
    e && Gi.registerInterceptor(e);
  },
  sendDataStage: function (e) {
    e && Zi.registerInterceptor(e);
  },
  viewStage: function (e) {
    e && Qi.registerInterceptor(e);
  },
};
function Ur(e, t) {
  $n[e] && $n[e](t);
}
var Rr = {
  stage: null,
  init: function (e) {
    this.stage = e;
  },
};
function Gs() {
  return Rr.stage && Rr.stage.process("getUtmData");
}
var Yi = {
  stage: null,
  init: function (e) {
    this.stage = e;
  },
  interceptor: {
    send: {
      entry: function (e) {
        return e;
      },
    },
  },
};
function Qs(e) {
  return Yi.stage.process("send", e);
}
var Pt = {};
function Ys(e) {
  (e.kit = Pt),
    (e.saEvent = se),
    (this.buildDataStage = rn),
    (this.sendDataStage = Yi),
    (this.businessStage = Rr);
}
function eo(e) {
  (e.heatmap = $e), (this.viewStage = nn);
}
(Pt.buildData = function (e) {
  return Qa(e);
}),
  (Pt.sendData = function (e, t) {
    var r = Ai(e.properties);
    Qs({
      origin_data: e,
      server_url: s.para.server_url,
      data: e,
      config: r || {},
      callback: t,
    }),
      s.log(e);
  }),
  (Pt.encodeTrackData = function (e) {
    return Li(e);
  }),
  (Pt.getUtmData = function () {
    return Gs();
  });
var to = {
  webClickEvent: {
    entry: function (e, t) {
      var r = t.sensors;
      e.tagName === "a" && r.para.heatmap && r.para.heatmap.isTrackLink === !0
        ? r.trackLink(
            { event: e.event, target: e.target },
            "$WebClick",
            e.props
          )
        : r.track("$WebClick", e.props, e.callback);
    },
  },
  webStayEvent: {
    entry: function (e, t) {
      t.sensors.track("$WebStay", e);
    },
  },
};
function ro(e) {
  P(e.properties)
    ? !e.isMatchedWithFilter || P(e.isMatchedWithFilter)
      ? Ur("buildDataStage", {
          finalAdjustData: {
            priority: 100,
            entry: function (t) {
              try {
                if (P(e.isMatchedWithFilter))
                  return e.isMatchedWithFilter(t) && e.properties(t);
                e.properties(t);
              } catch (r) {
                N("execute registerPropertyPlugin callback error:" + r);
              }
            },
          },
        })
      : N(
          "registerPropertyPlugin arguments error, isMatchedWithFilter must be function"
        )
    : N("registerPropertyPlugin arguments error, properties must be function");
}
var Cn = window.sensors_data_pre_config,
  In = !!Wi.isObject(Cn) && Cn.is_compliance_enabled;
function wr(e) {
  e &&
    ((s.events = Ri),
    (s.bridge = Ls),
    (s.SDKJSBridge = Ot),
    (s.JSBridge = zi),
    (s.store = l),
    (s.unlimitedDiv = ur),
    (s.customProp = Hi),
    (s.vtrackcollect = tt),
    (s.vapph5collect = tn),
    (s.detectMode = Js),
    (s.registerFeature = Sr),
    (s.registerInterceptor = Ur),
    (s.commonWays = Qt),
    Sr(new Ys(s)),
    Sr(new eo(s)),
    Ur("viewStage", to));
  var t = e ? xs : qs;
  for (var r in t) s[r] = t[r];
  (s.logger = ft),
    (s.log = Le),
    (s._ = Wi),
    (s.on = Ei),
    (s.ee = K),
    (s.use = qi),
    (s.lib_version = dr),
    (s.registerPropertyPlugin = ro);
}
(s.init = function (e) {
  if (
    (K.sdk.emit("beforeInit"),
    s.readyState && s.readyState.state && s.readyState.state >= 2)
  )
    return !1;
  In && (wr(!0), Pn()),
    K.initSystemEvent(),
    s.setInitVar(),
    s.readyState.setState(2),
    s.initPara(e),
    K.sdk.emit("initPara"),
    K.sdk.emit("afterInitPara"),
    K.sdk.emit("initAPI"),
    K.sdk.emit("afterInitAPI"),
    s.detectMode(),
    Ds(),
    K.sdk.emit("afterInit"),
    K.sdk.emit("ready");
}),
  In ? wr(!1) : (wr(!0), Pn());
var no = "1.26.3";
function io(e, t, r) {
  return (e.plugin_version = no), e;
}
var ao = {
    init: function (e) {
      var t = e._.isString,
        r = e._.rot13defs,
        n = e._.dfmapping,
        i = "data:enc;";
      e.ee.sdk.on("afterInitPara", function () {
        (e.kit.userEncrypt = function (a) {
          return "dfm-enc-" + n(a);
        }),
          (e.kit.userDecrypt = function (a) {
            return (
              a.indexOf(i) === 0
                ? ((a = a.substring(i.length)), (a = r(a)))
                : a.indexOf("dfm-enc-") === 0 &&
                  ((a = a.substring(8)), (a = n(a))),
              a
            );
          }),
          (e.kit.userDecryptIfNeeded = function (a) {
            return (
              !t(a) ||
                (a.indexOf(i) !== 0 && a.indexOf("dfm-enc-") !== 0) ||
                (a = e.kit.userDecrypt(a)),
              a
            );
          });
      });
    },
    plugin_name: "UserEncryptDefault",
  },
  so = io(ao),
  oo = "1.26.3";
function uo(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((co(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function co(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function lo(e, t, r) {
  return uo(e, t, r), (e.plugin_version = oo), e;
}
var fo = {
    sd: null,
    init: function (e) {
      if (this.sd || ((this.sd = e), !this.sd || !this.sd._)) return !1;
      var t = this.sd._.cookie.get("sensors_amp_id"),
        r = this.sd.store._state.distinct_id;
      if (t && t.length > 0) {
        var n = t.slice(0, 4) === "amp-";
        if (t !== r) {
          if (!n) return !1;
          this.sd.store._state.first_id
            ? (this.sd.identify(t, !0),
              this.sd.saEvent.send(
                {
                  original_id: t,
                  distinct_id: r,
                  type: "track_signup",
                  event: "$SignUp",
                  properties: {},
                },
                null
              ),
              this.setAmpId(r))
            : this.sd.identify(t, !0);
        }
      } else this.setAmpId(r);
      this.addListener();
    },
    addListener: function () {
      var e = this;
      this.sd.events.on("changeDistinctId", function (t) {
        e.setAmpId(t);
      }),
        this.sd.events.isReady();
    },
    setAmpId: function (e) {
      this.sd._.cookie.set("sensors_amp_id", e);
    },
  },
  po = lo(fo, "Amp", "sdkReady"),
  Ee = window.SensorsData_App_Visual_Bridge,
  Yt = Ee && Ee.sensorsdata_visualized_mode,
  On = Ee && Ee.sensorsdata_visualized_alert_info,
  jn = Ee && Ee.sensorsdata_hover_web_nodes;
function go(e) {
  return On && On.call(Ee, JSON.stringify(e));
}
function Tn(e) {
  return Yt.call(Ee) && jn && jn.call(Ee, JSON.stringify(e));
}
function _o(e, t) {
  return t && typeof t[e.callType] == "function" && t[e.callType]();
}
var Ie,
  cr,
  Kt,
  W,
  jt,
  Br,
  An = {
    isVerify: function () {
      return Yt && (Yt === !0 || Yt.call(Ee));
    },
    commands: {
      app_alert: go,
      visualized_track: Tn,
      page_info: Tn,
      sensorsdata_get_app_visual_config: _o,
    },
  },
  ho = "1.26.3";
function mo(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((vo(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function vo(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function yo(e, t, r) {
  return mo(e, t, r), (e.plugin_version = ho), e;
}
var ea = {
  init: function (e) {
    (jt = (W = e) && W._),
      (Br = (W && W.log) || (console && console.log) || function () {}),
      bo();
  },
  handleCommand: wo,
};
function bo() {
  (Ie = window.SensorsData_APP_New_H5_Bridge),
    (cr = Ie && Ie.sensorsdata_track),
    (Kt =
      cr && Ie.sensorsdata_get_server_url && Ie.sensorsdata_get_server_url()),
    W &&
      !W.bridge.activeBridge &&
      Kt &&
      ((W.bridge.activeBridge = ea),
      W.para.app_js_bridge &&
        !W.para.app_js_bridge.is_mui &&
        (W.bridge.is_verify_success = Kt && W.bridge.validateAppUrl(Kt)),
      (W.bridge.bridge_info = {
        touch_app_bridge: !0,
        platform: "android",
        verify_success: W.bridge.is_verify_success ? "success" : "fail",
        support_two_way_call: !!Ie.sensorsdata_js_call_app,
      }),
      W.para.app_js_bridge
        ? (W.registerInterceptor("sendDataStage", {
            send: { priority: 60, entry: So },
          }),
          Br("Android bridge inits succeed."))
        : Br(
            "app_js_bridge is not configured, data will not be sent by android bridge."
          ));
}
function So(e, t) {
  if (
    W.para.app_js_bridge.is_mui ||
    e.data.type === "item_set" ||
    e.data.type === "item_delete"
  )
    return e;
  var r = e.callback;
  return W.bridge.is_verify_success
    ? (cr &&
        cr.call(
          Ie,
          JSON.stringify(jt.extend({ server_url: W.para.server_url }, e.data))
        ),
      jt.isFunction(r) && r(),
      t.cancellationToken.cancel(),
      e)
    : W.para.app_js_bridge.is_send
    ? (W.debug.apph5({ data: e.data, step: "4.2", output: "all" }), e)
    : (jt.isFunction(r) && r(), t.cancellationToken.cancel(), e);
}
function wo(e) {
  var t = e.callType;
  if (t in An.commands) return An.commands[t](e, Ie);
  Ie &&
    jt.isFunction(Ie.sensorsdata_js_call_app) &&
    Ie.sensorsdata_js_call_app(JSON.stringify(e));
}
var Nn = yo(ea, "AndroidBridge", "sdkAfterInitPara"),
  Ue = window.SensorsData_App_Visual_Bridge,
  er = Ue && Ue.sensorsdata_visualized_mode,
  xn = Ue && Ue.sensorsdata_visualized_alert_info,
  Dn = Ue && Ue.sensorsdata_hover_web_nodes;
function ko(e) {
  return xn && xn.call(Ue, JSON.stringify(e));
}
function Ln(e) {
  return er.call(Ue) && Dn && Dn.call(Ue, JSON.stringify(e));
}
function Po(e, t) {
  return t && typeof t[e.callType] == "function" && t[e.callType]();
}
var ge,
  Tt,
  vt,
  Vt,
  ie,
  rt,
  Hr,
  En = {
    isVerify: function () {
      return er && (er === !0 || er.call(Ue));
    },
    commands: {
      app_alert: ko,
      visualized_track: Ln,
      page_info: Ln,
      sensorsdata_get_app_visual_config: Po,
    },
  },
  $o = "1.26.3";
function Co(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((Io(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function Io(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function Oo(e, t, r) {
  return Co(e, t, r), (e.plugin_version = $o), e;
}
var ta = {
  init: function (e) {
    (rt = (ie = e) && ie._),
      (Hr = (ie && ie.log) || (console && console.log) || function () {}),
      jo();
  },
  handleCommand: Ao,
};
function jo() {
  if (
    ((ge = window.SensorsData_APP_JS_Bridge),
    (Tt = ge && ge.sensorsdata_track),
    (vt = ge && ge.sensorsdata_verify),
    (Vt = ge && ge.sensorsdata_visual_verify),
    ie && !ie.bridge.activeBridge && (vt || Tt || Vt))
  ) {
    ie.bridge.activeBridge = ta;
    var e = vt || Tt;
    Vt &&
      (e = !!Vt.call(ge, JSON.stringify({ server_url: ie.para.server_url }))),
      (ie.bridge.bridge_info = {
        touch_app_bridge: !0,
        platform: "android",
        verify_success: e ? "success" : "fail",
      }),
      ie.para.app_js_bridge
        ? (ie.registerInterceptor("sendDataStage", {
            send: { priority: 80, entry: To },
          }),
          Hr("Android obsolete bridge inits succeed."))
        : Hr(
            "app_js_bridge is not configured, data will not be sent by android obsolete bridge."
          );
  }
}
function To(e, t) {
  if (
    ie.para.app_js_bridge.is_mui ||
    e.data.type === "item_set" ||
    e.data.type === "item_delete"
  )
    return e;
  var r = e.callback;
  return vt
    ? vt &&
      vt.call(
        ge,
        JSON.stringify(rt.extend({ server_url: ie.para.server_url }, e.data))
      )
      ? (rt.isFunction(r) && r(), t.cancellationToken.cancel(), e)
      : ie.para.app_js_bridge.is_send
      ? (ie.debug.apph5({ data: e.data, step: "3.1", output: "all" }), e)
      : (rt.isFunction(r) && r(), t.cancellationToken.cancel(), e)
    : (Tt &&
        Tt.call(
          ge,
          JSON.stringify(rt.extend({ server_url: ie.para.server_url }, e.data))
        ),
      rt.isFunction(r) && r(),
      t.cancellationToken.cancel(),
      e);
}
function Ao(e) {
  var t = e.callType;
  return t in En.commands
    ? En.commands[t](e, ge)
    : ge && rt.isFunction(ge.sensorsdata_js_call_app)
    ? ge.sensorsdata_js_call_app(JSON.stringify(e))
    : void 0;
}
var fe,
  pe,
  kr,
  Pr,
  Un = Oo(ta, "AndroidObsoleteBridge", "sdkAfterInitPara"),
  No = "1.26.3";
function xo(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((Do(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function Do(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function Lo(e, t, r) {
  return xo(e, t, r), (e.plugin_version = No), e;
}
var Bt,
  Se = {
    event_list: [],
    latest_event_initial_time: null,
    max_save_time: 2592e6,
    init: function (e, t) {
      if (pe || !e) return !1;
      (Pr = (t = t || {}).cookie_name || "sensorsdata2015jssdkchannel"),
        (pe = e);
      var r = this;
      (function () {
        if (((fe = pe._), (kr = pe.store), !fe.localStorage.isSupport()))
          return !1;
        (pe.para.max_string_length = 1024),
          r.eventList.init(),
          r.addLatestChannelUrl(),
          r.addIsChannelCallbackEvent();
      })();
    },
    addIsChannelCallbackEvent: function () {
      pe.registerPage({
        $is_channel_callback_event: function (e) {
          if (
            fe.isObject(e) &&
            e.event &&
            e.event !== "$WebClick" &&
            e.event !== "$pageview" &&
            e.event !== "$WebStay" &&
            e.event !== "$SignUp"
          )
            return (
              !Se.eventList.hasEvent(e.event) && (Se.eventList.add(e.event), !0)
            );
        },
      });
    },
    addLatestChannelUrl: function () {
      var e = this.getUrlDomain(),
        t = this.cookie.getChannel();
      if (e === "url解析失败")
        this.registerAndSave({
          _sa_channel_landing_url: "",
          _sa_channel_landing_url_error: "url的domain解析失败",
        });
      else if (fe.isReferralTraffic(document.referrer)) {
        var r = fe.getQueryParam(location.href, "sat_cf");
        fe.isString(r) && r.length > 0
          ? (this.registerAndSave({ _sa_channel_landing_url: location.href }),
            Se.channelLinkHandler())
          : this.registerAndSave({ _sa_channel_landing_url: "" });
      } else
        t
          ? pe.registerPage(t)
          : pe.registerPage({
              _sa_channel_landing_url: "",
              _sa_channel_landing_url_error: "取值异常",
            });
    },
    registerAndSave: function (e) {
      pe.registerPage(e), this.cookie.saveChannel(e);
    },
    cookie: {
      getChannel: function () {
        var e = pe.kit.userDecryptIfNeeded(fe.cookie.get(Pr));
        return (
          (e = fe.safeJSONParse(e)), !(!fe.isObject(e) || !e.prop) && e.prop
        );
      },
      saveChannel: function (e) {
        var t = { prop: e },
          r = JSON.stringify(t);
        pe.para.encrypt_cookie && (r = pe.kit.userEncrypt(r)),
          fe.cookie.set(Pr, r);
      },
    },
    channelLinkHandler: function () {
      this.eventList.reset(), pe.track("$ChannelLinkReaching");
    },
    getUrlDomain: function () {
      var e = fe.info.pageProp.url_domain;
      return e === "" && (e = "url解析失败"), e;
    },
    eventList: {
      init: function () {
        var e = this.get(),
          t = new Date().getTime();
        if (
          e &&
          fe.isNumber(e.latest_event_initial_time) &&
          fe.isArray(e.eventList)
        ) {
          var r = t - e.latest_event_initial_time;
          r > 0 && r < Se.max_save_time
            ? ((Se.event_list = e.eventList),
              (Se.latest_event_initial_time = e.latest_event_initial_time))
            : this.reset();
        } else this.reset();
      },
      get: function () {
        var e = {};
        try {
          e = kr.readObjectVal("sawebjssdkchannel");
        } catch (t) {
          pe.log(t);
        }
        return e;
      },
      add: function (e) {
        Se.event_list.push(e), this.save();
      },
      save: function () {
        var e = {
          latest_event_initial_time: Se.latest_event_initial_time,
          eventList: Se.event_list,
        };
        kr.saveObjectVal("sawebjssdkchannel", e);
      },
      reset: function () {
        (Se.event_list = []),
          (Se.latest_event_initial_time = new Date().getTime()),
          this.save();
      },
      hasEvent: function (e) {
        var t = !1;
        return (
          fe.each(Se.event_list, function (r) {
            r === e && (t = !0);
          }),
          t
        );
      },
    },
  },
  Eo = Lo(Se, "SensorsChannel", "sdkAfterInitAPI"),
  Uo = "1.26.3";
function Ro(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((Bo(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function Bo(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function Ho(e, t, r) {
  return Ro(e, t, r), (e.plugin_version = Uo), e;
}
var ra = function () {
  var e = {};
  return (
    typeof document.hidden < "u"
      ? ((e.hidden = "hidden"), (e.visibilityChange = "visibilitychange"))
      : typeof document.msHidden < "u"
      ? ((e.hidden = "msHidden"), (e.visibilityChange = "msvisibilitychange"))
      : typeof document.webkitHidden < "u" &&
        ((e.hidden = "webkitHidden"),
        (e.visibilityChange = "webkitvisibilitychange")),
    e
  );
};
function na() {
  return Bt !== void 0 && document[Bt];
}
Bt = ra().hidden;
var $r,
  lt,
  q,
  At,
  Jr,
  Fr = { android: /Android/i, iOS: /iPhone|iPad|iPod/i },
  Jo = function () {
    for (var e in Fr) if (navigator.userAgent.match(Fr[e])) return e;
    return "";
  },
  ia = Jo(),
  Fo = function () {
    return Fr.hasOwnProperty(ia);
  },
  Cr = function (e) {
    return e != null && Object.prototype.toString.call(e) == "[object Object]";
  },
  Mo = function (e) {
    return e.match(/\/sd\/(\w+)\/(\w+)$/);
  },
  qo = function (e) {
    var t = e._.URL(e.para.server_url);
    return {
      origin: t.origin,
      project: t.searchParams.get("project") || "default",
    };
  },
  Ko = function (e, t, r) {
    e.log("尝试唤起 android app");
    var n = t;
    e.log("唤起APP的地址：" + n),
      (window.location = n),
      (e.timer = setTimeout(function () {
        var i = na();
        if ((e.log("hide:" + Bt + ":" + document[Bt]), i))
          return (
            e.log("The page is hidden, stop navigating to download page"), !1
          );
        e.log("App可能未安装，跳转到下载地址"), (window.location = r);
      }, e.timeout));
  },
  Vo = function (e, t, r) {
    e.log("尝试唤起 iOS app:" + t),
      (window.location.href = t),
      (e.timer = setTimeout(function () {
        if (na())
          return (
            e.log("The page is hidden, stop navigating to download page"), !1
          );
        e.log("App可能未安装，跳转到下载地址"), (window.location.href = r);
      }, e.timeout)),
      e.log("new timer:" + e.timer);
  },
  $t = {
    key: null,
    timer: null,
    sd: null,
    data: null,
    timeout: 2500,
    apiURL:
      "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
    init: function (e) {
      if (this.sd) return this.log("deeplink已经初始化"), !1;
      if (((this.sd = e), this.log("deeplink init called"), this.sd === null))
        return this.log("神策JS SDK未成功引入"), !1;
      var t = {};
      if (
        (arguments.length > 0 &&
          (arguments.length === 1 && Cr(arguments[0])
            ? (t = arguments[0])
            : arguments.length >= 2 && Cr(arguments[1]) && (t = arguments[1])),
        !Fo())
      )
        return this.log("不支持当前系统，目前只支持Android和iOS"), !1;
      if (
        (Cr(t) &&
          this.sd._.isNumber(t.timeout) &&
          t.timeout >= 2500 &&
          (this.timeout = t.timeout),
        !this.sd.para.server_url)
      )
        return this.log("神策JS SDK配置项server_url未正确配置"), !1;
      var r = qo(this.sd);
      this.apiURL = this.apiURL
        .replace("{origin}", r.origin)
        .replace("{project}", r.project);
      var n = this.sd._.getQueryParam(window.location.href, "deeplink");
      if (!n) return this.log("当前页面缺少deeplink参数"), !1;
      n = window.decodeURIComponent(n);
      var i = Mo(n);
      if (!i) return this.log("当前页面的deeplink参数无效"), !1;
      (this.key = i[2]),
        (this.apiURL = this.apiURL.replace(
          "{key}",
          window.encodeURIComponent(i[2])
        )),
        this.sd._.ajax({
          url: this.apiURL,
          type: "GET",
          cors: !0,
          credentials: !1,
          success: function (a) {
            if (a.errorMsg) return $t.log("API报错：" + a.errorMsg), !1;
            ($t.data = a),
              $t.log("API查询成功，数据：" + JSON.stringify(a, null, "  ")),
              this.data.app_key &&
                (this.data.android_info &&
                  this.data.android_info.url_schemes &&
                  (this.data.android_info.url_schemes +=
                    "://sensorsdata/sd/" + this.data.app_key + "/" + this.key),
                this.data.ios_info &&
                  this.data.ios_info.url_schemes &&
                  (this.data.ios_info.url_schemes +=
                    "://sensorsdata/sd/" + this.data.app_key + "/" + this.key));
          }.bind(this),
          error: function () {
            $t.log("API查询出错");
          },
        }),
        this.addListeners();
    },
    openDeepLink: function () {
      if ((this.log("openDeeplink()"), !this.data))
        return this.log("没有Deep link数据!"), !1;
      if (ia === "iOS") {
        this.log("当前系统是iOS");
        var e =
          this.sd &&
          this.sd._ &&
          this.sd._.getIOSVersion() >= 9 &&
          this.data.ios_info.ios_wake_url
            ? this.data.ios_info.ios_wake_url
            : this.data.ios_info.url_schemes;
        this.log("唤起APP的地址：" + e),
          Vo(this, e, this.data.ios_info.download_url);
      } else
        this.log("当前系统是 android"),
          Ko(
            this,
            this.data.android_info.url_schemes,
            this.data.android_info.download_url
          );
    },
    log: function (e) {
      this.sd && this.sd.log(e);
    },
    addListeners: function () {
      var e = ra().visibilityChange,
        t = this;
      e &&
        document.addEventListener(
          e,
          function () {
            clearTimeout(t.timer),
              t.log("visibilitychange, clear timeout:" + t.timer);
          },
          !1
        ),
        window.addEventListener(
          "pagehide",
          function () {
            t.log("page hide, clear timeout:" + t.timer), clearTimeout(t.timer);
          },
          !1
        );
    },
  },
  Wo = Ho($t, "Deeplink", "sdkReady"),
  zo = "1.26.3";
function Xo(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((Zo(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function Zo(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function Go(e, t, r) {
  return Xo(e, t, r), (e.plugin_version = zo), e;
}
var aa = {
  init: function (e) {
    (At = (q = e) && q._),
      (Jr = (q && q.log) || (console && console.log) || function () {}),
      Qo();
  },
  handleCommand: eu,
};
function Qo() {
  ($r =
    window.SensorsData_iOS_JS_Bridge &&
    window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url),
    (lt = function () {
      return (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.sensorsdataNativeTracker
      );
    }),
    q &&
      !q.bridge.activeBridge &&
      lt() &&
      lt().postMessage &&
      ((q.bridge.activeBridge = aa),
      q.para.app_js_bridge &&
        !q.para.app_js_bridge.is_mui &&
        (q.bridge.is_verify_success = $r && q.bridge.validateAppUrl($r)),
      (q.bridge.bridge_info = {
        touch_app_bridge: !0,
        platform: "ios",
        verify_success: q.bridge.is_verify_success ? "success" : "fail",
        support_two_way_call: !0,
      }),
      q.para.app_js_bridge
        ? (q.registerInterceptor("sendDataStage", {
            send: { priority: 70, entry: Yo },
          }),
          Jr("IOS bridge inits succeed."))
        : Jr(
            "app_js_bridge is not configured, data will not be sent by iOS bridge."
          ));
}
function Yo(e, t) {
  if (
    q.para.app_js_bridge.is_mui ||
    e.data.type === "item_set" ||
    e.data.type === "item_delete"
  )
    return e;
  var r = e.callback;
  return q.bridge.is_verify_success
    ? (lt() &&
        lt().postMessage(
          JSON.stringify({
            callType: "app_h5_track",
            data: At.extend({ server_url: q.para.server_url }, e.data),
          })
        ),
      At.isFunction(r) && r(),
      t.cancellationToken.cancel(),
      e)
    : q.para.app_js_bridge.is_send
    ? (q.debug.apph5({ data: e.data, step: "4.1", output: "all" }), e)
    : (At.isFunction(r) && r(), t.cancellationToken.cancel(), e);
}
function eu(e) {
  var t = e.callType;
  return (t !== "page_info" && t !== "visualized_track") ||
    q.bridge.hasVisualModeBridge()
    ? t === "sensorsdata_get_app_visual_config"
      ? At.isObject(window.SensorsData_APP_New_H5_Bridge) &&
        window.SensorsData_APP_New_H5_Bridge[t]
      : lt() && lt().postMessage(JSON.stringify(e))
    : null;
}
var Q,
  yt,
  Mr,
  Rn = Go(aa, "IOSBridge", "sdkAfterInitPara"),
  tu = "1.26.3";
function ru(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((nu(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function nu(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function iu(e, t, r) {
  return ru(e, t, r), (e.plugin_version = tu), e;
}
var sa = {
  init: function (e) {
    (yt = (Q = e) && Q._),
      (Mr = (Q && Q.log) || (console && console.log) || function () {}),
      au();
  },
};
function au() {
  Q &&
    !Q.bridge.activeBridge &&
    su() &&
    ((Q.bridge.activeBridge = sa),
    (Q.bridge.bridge_info = {
      touch_app_bridge: !0,
      platform: "ios",
      verify_success: ou() ? "success" : "fail",
    }),
    Q.para.app_js_bridge
      ? (Q.registerInterceptor("sendDataStage", {
          send: { priority: 90, entry: uu },
        }),
        Mr("IOS obsolete bridge inits succeed."))
      : Mr(
          "app_js_bridge is not configured, data will not be sent by iOS obsolete bridge."
        ));
}
function su() {
  return (
    (/sensors-verify/.test(navigator.userAgent) ||
      /sa-sdk-ios/.test(navigator.userAgent)) &&
    !window.MSStream
  );
}
function ou() {
  if (/sensors-verify/.test(navigator.userAgent)) {
    var e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
    if (e && e[0] && typeof e[1] == "string" && e[1].split("?").length === 2) {
      e = e[1].split("?");
      var t = null,
        r = null;
      try {
        (t = yt.URL(Q.para.server_url).hostname),
          (r =
            yt.URL(Q.para.server_url).searchParams.get("project") || "default");
      } catch (n) {
        Q.log(n);
      }
      return !(!t || t !== e[0] || !r || r !== e[1]);
    }
    return !1;
  }
  return !!/sa-sdk-ios/.test(navigator.userAgent);
}
function uu(e, t) {
  if (
    Q.para.app_js_bridge.is_mui ||
    e.data.type === "item_set" ||
    e.data.type === "item_delete"
  )
    return e;
  var r,
    n,
    i = e.callback;
  if (Q.bridge.bridge_info.verify_success) {
    var a = document.createElement("iframe"),
      u =
        ((r = e.data),
        (n = (n = JSON.stringify(
          yt.extend({ server_url: Q.para.server_url }, r)
        )).replace(/\r\n/g, "")),
        "sensorsanalytics://trackEvent?event=" + (n = encodeURIComponent(n)));
    return (
      a.setAttribute("src", u),
      document.documentElement.appendChild(a),
      a.parentNode.removeChild(a),
      (a = null),
      yt.isFunction(i) && i(),
      t.cancellationToken.cancel(),
      !0
    );
  }
  return Q.para.app_js_bridge.is_send
    ? (Q.debug.apph5({ data: e.data, step: "3.2", output: "all" }), e)
    : (yt.isFunction(i) && i(), t.cancellationToken.cancel(), e);
}
var Bn = iu(sa, "IOSObsoleteBridge", "sdkAfterInitPara"),
  cu = "1.26.3";
function lu(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((du(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function du(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function fu(e, t, r) {
  return lu(e, t, r), (e.plugin_version = cu), e;
}
var pu = 5e3,
  gu = 432e3;
function V() {
  (this.sd = null),
    (this.start_time = +new Date()),
    (this.page_show_status = !0),
    (this.page_hidden_status = !1),
    (this._ = {}),
    (this.timer = null),
    (this.current_page_url = document.referrer),
    (this.url = location.href),
    (this.title = document.title || ""),
    (this.option = {}),
    (this.heartbeat_interval_time = 5e3),
    (this.heartbeat_interval_timer = null),
    (this.page_id = null),
    (this.storage_name = "sawebjssdkpageleave"),
    (this.max_duration = gu);
}
(V.prototype.init = function (e, t) {
  if (e) {
    if (((this.sd = e), (this._ = this.sd._), t)) {
      this.option = t;
      var r = t.heartbeat_interval_time;
      r &&
        (this._.isNumber(r) || this._.isNumber(1 * r)) &&
        1 * r > 0 &&
        (this.heartbeat_interval_time = 1e3 * r);
      var n = t.max_duration;
      n &&
        (this._.isNumber(n) || this._.isNumber(1 * n)) &&
        1 * n > 0 &&
        (this.max_duration = n);
    }
    (this.page_id = Number(
      String(this._.getRandom()).slice(2, 5) +
        String(this._.getRandom()).slice(2, 4) +
        String(new Date().getTime()).slice(-4)
    )),
      this.addEventListener(),
      document.hidden === !0
        ? (this.page_show_status = !1)
        : this.addHeartBeatInterval(),
      this.log("PageLeave初始化完毕");
  } else this.log("神策JS SDK未成功引入");
}),
  (V.prototype.log = function (e) {
    this.sd && this.sd.log(e);
  }),
  (V.prototype.refreshPageEndTimer = function () {
    var e = this;
    this.timer && (clearTimeout(this.timer), (this.timer = null)),
      (this.timer = setTimeout(function () {
        e.page_hidden_status = !1;
      }, pu));
  }),
  (V.prototype.hiddenStatusHandler = function () {
    clearTimeout(this.timer),
      (this.timer = null),
      (this.page_hidden_status = !1);
  }),
  (V.prototype.pageStartHandler = function () {
    (this.start_time = +new Date()),
      document.hidden
        ? (this.page_show_status = !1)
        : (this.page_show_status = !0),
      (this.url = location.href),
      (this.title = document.title);
  }),
  (V.prototype.pageEndHandler = function () {
    if (this.page_hidden_status !== !0) {
      var e = this.getPageLeaveProperties();
      this.page_show_status === !1 && delete e.event_duration,
        (this.page_show_status = !1),
        (this.page_hidden_status = !0),
        this.isCollectUrl(this.url) && this.sd.track("$WebPageLeave", e),
        this.refreshPageEndTimer(),
        this.delHeartBeatData();
    }
  }),
  (V.prototype.addEventListener = function () {
    this.addPageStartListener(),
      this.addPageSwitchListener(),
      this.addSinglePageListener(),
      this.addPageEndListener();
  }),
  (V.prototype.addPageStartListener = function () {
    var e = this;
    "onpageshow" in window &&
      this._.addEvent(window, "pageshow", function () {
        e.pageStartHandler(), e.hiddenStatusHandler();
      });
  }),
  (V.prototype.isCollectUrl = function (e) {
    return (
      typeof this.option.isCollectUrl != "function" ||
      typeof e != "string" ||
      e === "" ||
      this.option.isCollectUrl(e)
    );
  }),
  (V.prototype.addSinglePageListener = function () {
    var e = this;
    this.sd.ee &&
      this.sd.ee.spa.prepend("switch", function (t) {
        t !== location.href &&
          ((e.url = t),
          e.pageEndHandler(),
          e.stopHeartBeatInterval(),
          (e.current_page_url = e.url),
          e.pageStartHandler(),
          e.hiddenStatusHandler(),
          e.addHeartBeatInterval());
      });
  }),
  (V.prototype.addPageEndListener = function () {
    var e = this;
    this._.each(["pagehide", "beforeunload", "unload"], function (t) {
      "on" + t in window &&
        e._.addEvent(window, t, function () {
          e.pageEndHandler(), e.stopHeartBeatInterval();
        });
    });
  }),
  (V.prototype.addPageSwitchListener = function () {
    var e = this;
    this._.listenPageState({
      visible: function () {
        e.pageStartHandler(), e.hiddenStatusHandler(), e.addHeartBeatInterval();
      },
      hidden: function () {
        (e.url = location.href),
          (e.title = document.title),
          e.pageEndHandler(),
          e.stopHeartBeatInterval();
      },
    });
  }),
  (V.prototype.addHeartBeatInterval = function () {
    this._.localStorage.isSupport() && this.startHeartBeatInterval();
  }),
  (V.prototype.startHeartBeatInterval = function () {
    var e = this;
    this.heartbeat_interval_timer && this.stopHeartBeatInterval();
    var t = !0;
    this.isCollectUrl(this.url) || (t = !1),
      (this.heartbeat_interval_timer = setInterval(function () {
        t && e.saveHeartBeatData();
      }, this.heartbeat_interval_time)),
      t && this.saveHeartBeatData("is_first_heartbeat"),
      this.reissueHeartBeatData();
  }),
  (V.prototype.stopHeartBeatInterval = function () {
    clearInterval(this.heartbeat_interval_timer),
      (this.heartbeat_interval_timer = null);
  }),
  (V.prototype.saveHeartBeatData = function (e) {
    var t = this.getPageLeaveProperties(),
      r = new Date();
    (t.$time = r), e === "is_first_heartbeat" && (t.event_duration = 3.14);
    var n = this.sd.kit.buildData({
      type: "track",
      event: "$WebPageLeave",
      properties: t,
    });
    (n.heartbeat_interval_time = this.heartbeat_interval_time),
      this.sd.store.saveObjectVal(this.storage_name + "-" + this.page_id, n);
  }),
  (V.prototype.delHeartBeatData = function (e) {
    this._.localStorage.isSupport() &&
      this._.localStorage.remove(e || this.storage_name + "-" + this.page_id);
  }),
  (V.prototype.reissueHeartBeatData = function () {
    for (var e = window.localStorage.length - 1; e >= 0; e--) {
      var t = window.localStorage.key(e);
      if (
        t &&
        t !== this.storage_name + "-" + this.page_id &&
        t.indexOf(this.storage_name + "-") === 0
      ) {
        var r = this.sd.store.readObjectVal(t);
        this._.isObject(r) &&
          1 * new Date() - r.time > r.heartbeat_interval_time + 5e3 &&
          (delete r.heartbeat_interval_time,
          (r._flush_time = new Date().getTime()),
          this.sd.kit.sendData(r),
          this.delHeartBeatData(t));
      }
    }
  }),
  (V.prototype.getPageLeaveProperties = function () {
    var e = (+new Date() - this.start_time) / 1e3;
    (isNaN(e) || e < 0 || e > this.max_duration) && (e = 0),
      (e = Number(e.toFixed(3)));
    var t = this._.getReferrer(this.current_page_url),
      r =
        (document.documentElement && document.documentElement.scrollTop) ||
        window.pageYOffset ||
        (document.body && document.body.scrollTop) ||
        0;
    r = Math.round(r) || 0;
    var n = {
      $title: this.title,
      $url: this._.getURL(this.url),
      $url_path: this._.getURLPath(this._.URL(this.url).pathname),
      $referrer_host: t ? this._.getHostname(t) : "",
      $referrer: t,
      $viewport_position: r,
    };
    return (
      e !== 0 && (n.event_duration = e),
      (n = this._.extend(n, this.option.custom_props))
    );
  });
var _u = new V(),
  hu = fu(_u, "PageLeave", "sdkReady"),
  mu = "1.26.3";
function vu(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((yu(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function yu(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function bu(e, t, r) {
  return vu(e, t, r), (e.plugin_version = mu), e;
}
var Hn = !1,
  Su = {
    init: function (e, t) {
      function r() {
        var n = 0,
          i =
            window.performance ||
            window.webkitPerformance ||
            window.msPerformance ||
            window.mozPerformance,
          a = {
            $url: e._.getURL(),
            $title: document.title,
            $url_path: e._.getURLPath(),
            $referrer: e._.getReferrer(null, !0),
          };
        if (
          (i
            ? ((n =
                (function (c) {
                  var f = 0;
                  return (
                    e._.isFunction(c.getEntriesByType) &&
                      (f =
                        ((c.getEntriesByType("navigation") || [{}])[0] || {})
                          .domContentLoadedEventEnd || 0),
                    f
                  );
                })(i) ||
                (function (c) {
                  var f = 0;
                  if (c.timing) {
                    var _ = c.timing;
                    _.fetchStart !== 0 &&
                    e._.isNumber(_.fetchStart) &&
                    _.domContentLoadedEventEnd !== 0 &&
                    e._.isNumber(_.domContentLoadedEventEnd)
                      ? (f = _.domContentLoadedEventEnd - _.fetchStart)
                      : e.log("performance 数据获取异常");
                  }
                  return f;
                })(i)),
              (function (c, f) {
                if (c.getEntries && typeof c.getEntries == "function") {
                  for (
                    var _ = c.getEntries(), y = null, I = 0;
                    I < _.length;
                    I++
                  )
                    "transferSize" in _[I] && (y += _[I].transferSize);
                  e._.isNumber(y) &&
                    y >= 0 &&
                    y < 10737418240 &&
                    (f.$page_resource_size = Number((y / 1024).toFixed(3)));
                }
              })(i, a))
            : e.log("浏览器未支持 performance API."),
          n > 0)
        ) {
          var u = (e._.isObject(t) && t.max_duration) || 1800;
          (n = Number((n / 1e3).toFixed(3))),
            (!e._.isNumber(u) || u <= 0 || n <= u) && (a.event_duration = n);
        }
        Hn || (e.track("$WebPageLoad", a), (Hn = !0)),
          window.removeEventListener
            ? window.removeEventListener("load", r)
            : window.detachEvent && window.detachEvent("onload", r);
      }
      document.readyState == "complete"
        ? r()
        : window.addEventListener
        ? window.addEventListener("load", r)
        : window.attachEvent && window.attachEvent("onload", r);
    },
  },
  wu = bu(Su, "PageLoad", "sdkReady");
function ku(e, t) {
  if (e.type !== "track") return e;
  var r = t.sd,
    n = r._,
    i = r.saEvent.check,
    a = n.extend2Lev({ properties: {} }, e),
    u = t.customRegister,
    c = a.properties,
    f = a.event,
    _ = {};
  return (
    n.each(u, function (y) {
      if (n.isObject(y))
        n.indexOf(y.events, f) > -1 &&
          i({ properties: y.properties }) &&
          (_ = n.extend(_, y.properties));
      else if (n.isFunction(y)) {
        var I = y({ event: f, properties: c, data: a });
        n.isObject(I) &&
          !n.isEmptyObject(I) &&
          i({ properties: I }) &&
          (_ = n.extend(_, I));
      }
    }),
    (e.properties = n.extend(c, _)),
    e
  );
}
function Nt() {
  (this.sd = null),
    (this.log = (window.console && window.console.log) || function () {}),
    (this.customRegister = []);
}
(Nt.prototype.init = function (e) {
  if (e) {
    (this.sd = e), (this._ = e._), (this.log = e.log);
    var t = this;
    e.registerInterceptor("buildDataStage", {
      extendProps: {
        priority: 0,
        entry: function (r) {
          return ku(r, t);
        },
      },
    });
  } else this.log("神策JS SDK未成功引入");
}),
  (Nt.prototype.register = function (e) {
    this.sd
      ? this._.isObject(e) &&
        this._.isArray(e.events) &&
        e.events.length > 0 &&
        this._.isObject(e.properties) &&
        !this._.isEmptyObject(e.properties)
        ? this.customRegister.push(e)
        : this.log("RegisterProperties: register 参数错误")
      : this.log("神策JS SDK未成功引入");
  }),
  (Nt.prototype.hookRegister = function (e) {
    this.sd
      ? this._.isFunction(e)
        ? this.customRegister.push(e)
        : this.log("RegisterProperties: hookRegister 参数错误")
      : this.log("神策JS SDK未成功引入");
  });
var Pu = "1.26.3";
function $u(e, t, r) {
  return (e.plugin_version = Pu), e;
}
Nt.prototype.plugin_name = "RegisterProperties";
var Cu = new Nt(),
  Iu = $u(Cu),
  Ou = "1.26.3";
function ju(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((Tu(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function Tu(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function Au(e, t, r) {
  return ju(e, t, r), (e.plugin_version = Ou), e;
}
var _t,
  oa,
  Ct = (window.console && window.console.log) || function () {};
function Nu(e) {
  try {
    if (
      e.event !== "$pageview" &&
      (!e.type || e.type.slice(0, 7) !== "profile")
    ) {
      var t =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight ||
          0,
        r = document.documentElement.scrollHeight || 0,
        n = { $page_height: Math.max(t, r) || 0 };
      e.properties = _t._.extend(e.properties || {}, n);
    }
  } catch {
    Ct("页面高度获取异常。");
  }
  return oa.call(_t.kit, e);
}
var xu = {
    init: function (e) {
      (Ct = ((_t = e) && _t.log) || Ct),
        e && e.kit && e.kit.buildData
          ? ((oa = _t.kit.buildData),
            (_t.kit.buildData = Nu),
            Ct("RegisterPropertyPageHeight 插件初始化完成"))
          : Ct(
              "RegisterPropertyPageHeight 插件初始化失败,当前主sdk不支持 RegisterPropertyPageHeight 插件，请升级主sdk"
            );
    },
  },
  Du = Au(xu, "RegisterPropertyPageHeight", "sdkReady"),
  Lu = "1.26.3";
function Eu(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((Uu(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function Uu(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function Ru(e, t, r) {
  return Eu(e, t, r), (e.plugin_version = Lu), e;
}
var Je,
  Bu = {
    getPart: function (e) {
      var t = this.option.length;
      if (t) {
        for (var r = 0; r < t; r++)
          if (e.indexOf(this.option[r].part_url) > -1) return !0;
      }
      return !1;
    },
    getPartHash: function (e) {
      var t = this.option.length;
      if (t) {
        for (var r = 0; r < t; r++)
          if (e.indexOf(this.option[r].part_url) > -1)
            return this.option[r].after_hash;
      }
      return !1;
    },
    getCurrenId: function () {
      var e = this.store.getDistinctId() || "",
        t = this.store.getFirstId() || "";
      return (
        this._.urlSafeBase64 && this._.urlSafeBase64.encode
          ? (e = e
              ? this._.urlSafeBase64.trim(
                  this._.urlSafeBase64.encode(this._.base64Encode(e))
                )
              : "")
          : this._.rot13obfs && (e = e ? this._.rot13obfs(e) : ""),
        encodeURIComponent(t ? "f" + e : "d" + e)
      );
    },
    rewriteUrl: function (e, t) {
      var r = this,
        n = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e),
        i = "";
      if (n) {
        var a,
          u = n[1] || "",
          c = n[2] || "",
          f = n[3] || "",
          _ = "_sasdk=" + this.getCurrenId(),
          y = function (I) {
            var x = I.split("&"),
              le = [];
            return (
              r._.each(x, function (M) {
                M.indexOf("_sasdk=") > -1 ? le.push(_) : le.push(M);
              }),
              le.join("&")
            );
          };
        return (
          this.getPartHash(e)
            ? ((a = f.indexOf("_sasdk")),
              (i =
                f.indexOf("?") > -1
                  ? a > -1
                    ? u +
                      c +
                      "#" +
                      f.substring(1, a) +
                      y(f.substring(a, f.length))
                    : u + c + f + "&" + _
                  : u + c + "#" + f.substring(1) + "?" + _))
            : ((a = c.indexOf("_sasdk")),
              (i = /^\?(\w)+/.test(c)
                ? a > -1
                  ? u + "?" + y(c.substring(1)) + f
                  : u + c + "&" + _ + f
                : u + "?" + _ + f)),
          t && (t.href = i),
          i
        );
      }
    },
    getUrlId: function () {
      var e = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
      if (this._.isArray(e) && e[1]) {
        var t = decodeURIComponent(e[1]);
        return (
          !t ||
            (t.substring(0, 1) !== "f" && t.substring(0, 1) !== "d") ||
            (this._.urlSafeBase64 &&
            this._.urlSafeBase64.isUrlSafeBase64 &&
            this._.urlSafeBase64.isUrlSafeBase64(t)
              ? (t =
                  t.substring(0, 1) +
                  this._.base64Decode(
                    this._.urlSafeBase64.decode(t.substring(1))
                  ))
              : this._.rot13defs &&
                (t = t.substring(0, 1) + this._.rot13defs(t.substring(1)))),
          t
        );
      }
      return "";
    },
    setRefferId: function (e) {
      var t = this.store.getDistinctId(),
        r = this.getUrlId();
      if (r && r !== "") {
        var n = r.substring(0, 1) === "a" || r.substring(0, 1) === "d";
        (r = r.substring(1)) !== t &&
          (n
            ? (this.sd.identify(r, !0),
              this.store.getFirstId() &&
                this.sd.saEvent.send(
                  {
                    original_id: r,
                    distinct_id: t,
                    type: "track_signup",
                    event: "$SignUp",
                    properties: {},
                  },
                  null
                ))
            : (this.store.getFirstId() && !e.re_login) || this.sd.login(r));
      }
    },
    addListen: function () {
      var e = this,
        t = function (r) {
          var n,
            i,
            a = r.target,
            u = a.tagName.toLowerCase(),
            c = a.parentNode;
          if (
            (u === "a" && a.href) ||
            (c && c.tagName && c.tagName.toLowerCase() === "a" && c.href)
          ) {
            u === "a" && a.href
              ? ((n = a.href), (i = a))
              : ((n = c.href), (i = c));
            var f = e._.URL(n).protocol;
            (f !== "http:" && f !== "https:") ||
              (e.getPart(n) && e.rewriteUrl(n, i));
          }
        };
      e._.addEvent(document, "mousedown", t),
        window.PointerEvent &&
          "maxTouchPoints" in window.navigator &&
          window.navigator.maxTouchPoints >= 0 &&
          e._.addEvent(document, "pointerdown", t);
    },
    init: function (e, t) {
      (this.sd = e),
        (this._ = e._),
        (this.store = e.store),
        (this.para = e.para),
        this._.isObject(t) && this._.isArray(t.linker) && t.linker.length > 0
          ? (this.setRefferId(t),
            this.addListen(),
            (this.option = t.linker),
            (this.option = (function (r) {
              for (var n = r.length, i = [], a = 0; a < n; a++)
                /[A-Za-z0-9]+\./.test(r[a].part_url) &&
                Object.prototype.toString.call(r[a].after_hash) ==
                  "[object Boolean]"
                  ? i.push(r[a])
                  : e.log(
                      "linker 配置的第 " +
                        (a + 1) +
                        " 项格式不正确，请检查参数格式！"
                    );
              return i;
            })(this.option)))
          : e.log("请配置打通域名参数！");
    },
  },
  Hu = Ru(Bu, "SiteLinker", "sdkReady"),
  Ju = "utm_source utm_medium utm_campaign utm_content utm_term",
  Fu = "1.26.3";
function Mu(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((qu(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function qu(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function Ku(e, t, r) {
  return Mu(e, t, r), (e.plugin_version = Fu), e;
}
var Vu = {
    init: function (e) {
      e &&
        !Je &&
        (Je = e).registerInterceptor("businessStage", {
          getUtmData: {
            priority: 0,
            entry: function () {
              return (function () {
                var t = Ju.split(" "),
                  r = "",
                  n = {};
                return (
                  Je._.isArray(Je.para.source_channel) &&
                    Je.para.source_channel.length > 0 &&
                    ((t = t.concat(Je.para.source_channel)),
                    (t = Je._.unique(t))),
                  Je._.each(t, function (i) {
                    (r = Je._.getQueryParam(location.href, i)).length &&
                      (n[i] = r);
                  }),
                  n
                );
              })();
            },
          },
        });
    },
  },
  Jn = Ku(Vu, "Utm", "sdkAfterInitPara"),
  Wu = "1.26.3";
function zu(e, t, r) {
  if (((e.plugin_name = t), e.init)) {
    var n = e.init;
    e.init = function (i, a) {
      if ((Xu(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on))
        return u();
      function u() {
        n.call(e, i, a);
      }
      i.on(r, u);
    };
  }
  return e;
}
function Xu(e, t, r) {
  function n(i, a) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, a)
          .module(r + "")
          .level(i)
          .log()
      : e.log && e.log.apply(e, a);
  }
  (t.log = function () {
    n("log", arguments);
  }),
    (t.warn = function () {
      n("warn", arguments);
    }),
    (t.error = function () {
      n("error", arguments);
    });
}
function Zu(e, t, r) {
  return zu(e, t, r), (e.plugin_version = Wu), e;
}
var sn = !1,
  Ir = null,
  Gu = {
    init: function (e) {
      ((Ir = e).disableSDK = Qu), (Ir.enableSDK = Yu), (Ir.getDisabled = ec);
    },
  };
function Qu() {
  sn = !0;
}
function Yu() {
  sn = !1;
}
function ec() {
  return sn;
}
var J,
  it,
  Fn = Zu(Gu, "DisableSDK", "sdkInitAPI"),
  tc = "1.26.3";
function rc(e, t, r) {
  return (e.plugin_version = tc), e;
}
function nc(e) {
  var t = e,
    r = "";
  (r =
    J.para.debug_mode_url.indexOf("?") !== -1
      ? J.para.debug_mode_url + "&" + J.kit.encodeTrackData(e)
      : J.para.debug_mode_url + "?" + J.kit.encodeTrackData(e)),
    it.ajax({
      url: r,
      type: "GET",
      cors: !0,
      header: { "Dry-Run": String(J.para.debug_mode_upload) },
      success: function (n) {
        it.isEmptyObject(n) === !0
          ? alert("debug数据发送成功" + t)
          : alert("debug失败 错误原因" + JSON.stringify(n));
      },
    });
}
function ic(e, t) {
  if (J.para.debug_mode === !0) {
    var r = e.data;
    e.callback, nc(JSON.stringify(r)), t.cancellationToken.stop();
  }
  return e;
}
function ac() {
  J.para.debug_mode === !0 &&
    ((J.para.debug_mode_upload = J.para.debug_mode_upload || !1),
    it.isString(J.para.debug_mode_url) ||
      (it.isString(J.para.server_url)
        ? (J.para.debug_mode_url = J.para.server_url.replace("sa.gif", "debug"))
        : it.isArray(J.para.server_url) && it.isString(J.para.server_url[0])
        ? (J.para.debug_mode_url = J.para.server_url[0].replace(
            "sa.gif",
            "debug"
          ))
        : (J.para.debug_mode = !1)));
}
function sc() {
  J.on("sdkInitPara", function () {
    ac();
  }),
    J.on("sdkAfterInitPara", function () {
      J.registerInterceptor("sendDataStage", {
        send: { priority: 30, entry: ic },
      });
    });
}
var ue,
  at,
  oc = {
    plugin_name: "DebugSender",
    init: function (e) {
      (it = (J = e)._), sc();
    },
  },
  Mn = rc(oc),
  uc = "1.26.3";
function cc(e, t, r) {
  return (e.plugin_version = uc), e;
}
function lc(e, t) {
  if (
    at.isObject(ue.para.jsapp) &&
    !ue.para.jsapp.isOnline &&
    typeof ue.para.jsapp.setData == "function"
  ) {
    var r = e;
    delete r.callback,
      (r = JSON.stringify(r)),
      ue.para.jsapp.setData(r),
      t.cancellationToken.stop();
  }
  return e;
}
function dc() {
  ue.on("sdkAfterInitAPI", function () {
    at.isObject(ue.commonWays) && (ue.commonWays.setOnlineState = fc),
      ue.registerInterceptor("sendDataStage", {
        send: { priority: 40, entry: lc },
      });
  });
}
function fc(e) {
  if (
    e === !0 &&
    at.isObject(ue.para.jsapp) &&
    typeof ue.para.jsapp.getData == "function"
  ) {
    ue.para.jsapp.isOnline = !0;
    var t = ue.para.jsapp.getData();
    at.isArray(t) &&
      t.length > 0 &&
      at.each(t, function (r) {
        at.isJSONString(r) && ue.kit.sendData(JSON.parse(r));
      });
  } else ue.para.jsapp.isOnline = !1;
}
var ce,
  Ye,
  pc = {
    plugin_name: "JsappSender",
    init: function (e) {
      (at = (ue = e)._), dc();
    },
  },
  qn = cc(pc),
  gc = "1.26.3";
function _c(e, t, r) {
  return (e.plugin_version = gc), e;
}
var tr = null;
function hc(e, t) {
  return (
    !ce.para.app_js_bridge &&
      ce.para.batch_send &&
      Ye.localStorage.isSupport() &&
      localStorage.length < ce.para.batch_send.storage_length &&
      (tr.add(e.data), t.cancellationToken.stop()),
    e
  );
}
function mc() {
  var e = { datasend_timeout: 6e3, send_interval: 6e3, storage_length: 200 };
  Ye.localStorage.isSupport() &&
  Ye.isSupportCors() &&
  typeof localStorage == "object"
    ? ce.para.batch_send === !0
      ? (ce.para.batch_send = Ye.extend({}, e))
      : typeof ce.para.batch_send == "object" &&
        (ce.para.batch_send = Ye.extend({}, e, ce.para.batch_send))
    : (ce.para.batch_send = !1);
}
function vc() {
  ce.on("sdkInitPara", function () {
    mc();
  }),
    ce.on("sdkAfterInitPara", function () {
      !ce.para.app_js_bridge &&
        ce.para.batch_send &&
        Ye.localStorage.isSupport() &&
        (tr || (tr = new Ye.BatchSend()),
        tr.batchInterval(),
        ce.registerInterceptor("sendDataStage", {
          send: { priority: 100, entry: hc },
        }));
    });
}
var Me,
  Ze,
  yc = {
    plugin_name: "BatchSender",
    init: function (e) {
      (Ye = (ce = e)._), vc();
    },
  },
  Kn = _c(yc),
  bc = "1.26.3";
function Sc(e, t, r) {
  return (e.plugin_version = bc), e;
}
function Vn(e) {
  new Ze.BeaconSend(e).start();
}
function wc(e, t) {
  var r = null,
    n = null;
  if (
    (Ze.isObject(e.config) &&
      ((r = e.config.send_type),
      (n = Ze.optimizeServerUrl(e.config.server_url))),
    (r === "beacon" || (!r && Me.para.send_type === "beacon")) &&
      Ze.isSupportBeaconSend())
  ) {
    var i = n || e.server_url;
    (e.server_url = i),
      (e.data = Me.kit.encodeTrackData(e.data)),
      Ze.isArray(i) && i.length
        ? Ze.each(i, function (a) {
            (e.callback = null), (e.server_url = a), Vn(e);
          })
        : typeof i == "string" && i !== ""
        ? Vn(e)
        : Me.log(
            "当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"
          ),
      t.cancellationToken.stop();
  }
  return e;
}
function kc() {
  Me.para.send_type !== "beacon" ||
    Ze.isSupportBeaconSend() ||
    (Me.para.send_type = "image");
}
function Pc() {
  Me.on("sdkInitPara", function () {
    kc();
  }),
    Me.on("sdkAfterInitPara", function () {
      Me.registerInterceptor("sendDataStage", {
        send: { priority: 110, entry: wc },
      });
    });
}
var qe,
  Ge,
  $c = {
    plugin_name: "BeaconSender",
    init: function (e) {
      (Ze = (Me = e)._), Pc();
    },
  },
  Wn = Sc($c),
  Cc = "1.26.3";
function Ic(e, t, r) {
  return (e.plugin_version = Cc), e;
}
function zn(e) {
  new Ge.AjaxSend(e).start();
}
function Oc(e, t) {
  var r = null,
    n = null;
  if (
    (Ge.isObject(e.config) &&
      ((r = e.config.send_type),
      (n = Ge.optimizeServerUrl(e.config.server_url))),
    (r === "ajax" || (!r && qe.para.send_type === "ajax")) &&
      Ge.isSupportCors())
  ) {
    var i = n || e.server_url;
    (e.server_url = i),
      (e.data = qe.kit.encodeTrackData(e.data)),
      Ge.isArray(i) && i.length
        ? Ge.each(i, function (a) {
            (e.callback = null), (e.server_url = a), zn(e);
          })
        : typeof i == "string" && i !== ""
        ? zn(e)
        : qe.log(
            "当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"
          ),
      t.cancellationToken.stop();
  }
  return e;
}
function jc() {
  qe.para.send_type !== "ajax" ||
    Ge.isSupportCors() ||
    (qe.para.send_type = "image");
}
function Tc() {
  qe.on("sdkInitPara", function () {
    jc();
  }),
    qe.on("sdkAfterInitPara", function () {
      qe.registerInterceptor("sendDataStage", {
        send: { priority: 120, entry: Oc },
      });
    });
}
var Oe,
  ht,
  Ac = {
    plugin_name: "AjaxSender",
    init: function (e) {
      (Ge = (qe = e)._), Tc();
    },
  },
  Xn = Ic(Ac),
  Nc = "1.26.3";
function xc(e, t, r) {
  return (e.plugin_version = Nc), e;
}
function Zn(e, t) {
  var r = Oe.kit.encodeTrackData(t);
  return e.indexOf("?") !== -1 ? e + "&" + r : e + "?" + r;
}
function Gn(e) {
  new ht.ImageSend(e).start();
}
function Dc(e, t) {
  var r = null;
  ht.isObject(e.config) && (r = ht.optimizeServerUrl(e.config.server_url));
  var n = r || e.server_url,
    i = e.data;
  (e.server_url = n),
    ht.isArray(n) && n.length
      ? ht.each(n, function (a) {
          a &&
            ((e.data = Zn(a, i)),
            (e.callback = null),
            (e.server_url = a),
            Gn(e));
        })
      : typeof n == "string" && n !== ""
      ? ((e.data = Zn(n, i)), Gn(e))
      : Oe.logger &&
        Oe.logger
          .msg(
            "当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"
          )
          .level("warn")
          .log(),
    t.cancellationToken.stop();
}
function Lc() {
  Oe.para.send_type !== "image" &&
    Oe.para.send_type !== "ajax" &&
    Oe.para.send_type !== "beacon" &&
    (Oe.para.send_type = "image");
}
function Ec() {
  Oe.on("sdkInitPara", function () {
    Lc();
  }),
    Oe.on("sdkAfterInitPara", function () {
      Oe.registerInterceptor("sendDataStage", {
        send: { priority: 130, entry: Dc },
      });
    });
}
var Uc = {
    plugin_name: "ImageSender",
    init: function (e) {
      (ht = (Oe = e)._), Ec();
    },
  },
  Qn = xc(Uc);
function Rc(e, t, r) {
  return (e.plugin_name = t), e;
}
function Bc(e, t, r) {
  return Rc(e, t, r), (e.plugin_version = dr), e;
}
var ee = null,
  ye = null,
  xt = [],
  Hc = {
    init: function (e) {
      e &&
        ((ye = (ee = e)._),
        ee.logger && ee.logger.appendWriter(Jc),
        ee.on &&
          ee.on("sdkAfterInitPara", function () {
            for (var t = 0; t < xt.length; t++) ua(xt[t]);
            xt = null;
          }),
        ee.on &&
          ee.on("sdkInitAPI", function () {
            (ee.enableLocalLog = Kc), (ee.disableLocalLog = Vc);
          }));
    },
  },
  Yn = Bc(Hc, "ConsoleLogger");
function Jc(e) {
  xt !== null ? xt.push(e) : ua(e);
}
function ua(e) {
  try {
    if (
      (e.level === "log" && ca()) ||
      (e.level === "warn" && Fc()) ||
      (e.level === "error" && Mc())
    )
      return void Or(e);
  } catch {}
}
function ca() {
  return (
    !!un() ||
    ee.para.show_log === !0 ||
    (ye.isObject(ee.para.show_log) && ee.para.show_log.level === "log")
  );
}
function Fc() {
  return (
    !!un() ||
    ca() ||
    (ye.isObject(ee.para.show_log) && ee.para.show_log.level === "warn")
  );
}
function Mc() {
  return (
    !!un() ||
    !ye.isObject(ee.para.show_log) ||
    ee.para.show_log.level !== "none"
  );
}
function Or(e) {
  var t = e.content,
    r = ye.isObject(t[0]) ? ye.formatJsonString(t[0]) : t[0],
    n = qc(e);
  t[0] = n + (n.length > 0 ? ": " : "") + r;
  try {
    console &&
      (ye.isFunction(console[e.level])
        ? console[e.level].apply(console, t)
        : ye.isObject(console[e.level]) && console[e.level](t[0]));
  } catch {}
}
function qc(e) {
  var t = "",
    r = "",
    n = ee.para.show_log;
  return (
    (ye.isObject(n) && n.show_brand === !1) || (t += e.brand),
    (ye.isObject(n) && n.show_level === !1) ||
      (t += (t.length > 0 ? "-" : "") + e.level),
    t.length > 0 && (t = "[" + t + "]"),
    (ye.isObject(n) && n.show_module === !1) || (r = e.module),
    t + r
  );
}
var on = "sensorsdata_jssdk_debug";
function Kc() {
  ye.sessionStorage.isSupport() && sessionStorage.setItem(on, "true");
}
function Vc() {
  ye.sessionStorage.isSupport() && sessionStorage.removeItem(on);
}
function un() {
  return ye.sessionStorage.isSupport() && sessionStorage.getItem(on) === "true";
}
s.modules = s.modules || {};
for (
  var ei = [
      Yn,
      po,
      Nn,
      Un,
      Eo,
      Wo,
      Rn,
      Bn,
      hu,
      wu,
      Iu,
      Du,
      Hu,
      Jn,
      Fn,
      Mn,
      qn,
      Kn,
      Wn,
      Xn,
      Qn,
    ],
    ti = [Yn, so, Jn, Fn, qn, Mn, Nn, Rn, Un, Bn, Kn, Wn, Xn, Qn],
    st = 0;
  st < ei.length;
  st++
) {
  var gt = ei[st];
  s._.isString(gt.plugin_name)
    ? (s.modules[gt.plugin_name] = gt)
    : s._.isArray(gt.plugin_name) &&
      s._.each(gt.plugin_name, function (e) {
        s.modules[e] = gt;
      });
}
for (st = 0; st < ti.length; st++) s.use(ti[st]);
var la = s;
try {
  typeof window.sensorsDataAnalytic201505 == "string"
    ? ((s.para = window[sensorsDataAnalytic201505].para),
      (s._q = window[sensorsDataAnalytic201505]._q),
      (window[sensorsDataAnalytic201505] = s),
      (window.sensorsDataAnalytic201505 = s),
      s.init())
    : typeof window.sensorsDataAnalytic201505 > "u"
    ? (window.sensorsDataAnalytic201505 = s)
    : (la = window.sensorsDataAnalytic201505);
} catch (e) {
  N(e);
}
var Wc = la;
export { Wc as default };
