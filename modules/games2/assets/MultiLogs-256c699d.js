import { c as U } from "./index-eff0ad24.js";
import { r as $ } from "./core-0e150ffe.js";
import {
  H as ce,
  c as e,
  f as j,
  u as L,
  m as D,
  F as T,
  i as w,
  a as le,
  b as oe,
  E as W,
  D as P,
  aL as ue,
  t as z,
} from "./manifest-a234c8a0.js";
import { l as F, j as J } from "./game-a49e1f5b.js";
import { u as he } from "./currency-a0e3a368.js";
import { P as O, M as Q, a as V } from "./MoreLessBtn-6b8ac376.js";
import { S as R } from "./Symbol-f22f521e.js";
import {
  T as X,
  a as Y,
  b as M,
  c as k,
  d as Z,
  e as B,
} from "./table-cbcb9a00.js";
import { t as H } from "./i18n-611811a6.js";
import { u as de } from "./use-coin-format-bfa33df5.js";
import { b as ee } from "./router-b8d56046.js";
import { G as me } from "./Layout-b58c3f24.js";
var q,
  E = { exports: {} };
function De() {
  return q
    ? E.exports
    : ((q = 1),
      (E.exports =
        ((f = $()),
        (function (l) {
          var h = f,
            d = h.lib,
            i = d.WordArray,
            n = d.Hasher,
            g = h.algo,
            x = [],
            y = [];
          (function () {
            function c(m) {
              for (var _ = l.sqrt(m), v = 2; v <= _; v++)
                if (!(m % v)) return !1;
              return !0;
            }
            function a(m) {
              return (4294967296 * (m - (0 | m))) | 0;
            }
            for (var t = 2, r = 0; r < 64; )
              c(t) &&
                (r < 8 && (x[r] = a(l.pow(t, 0.5))),
                (y[r] = a(l.pow(t, 1 / 3))),
                r++),
                t++;
          })();
          var o = [],
            u = (g.SHA256 = n.extend({
              _doReset: function () {
                this._hash = new i.init(x.slice(0));
              },
              _doProcessBlock: function (c, a) {
                for (
                  var t = this._hash.words,
                    r = t[0],
                    m = t[1],
                    _ = t[2],
                    v = t[3],
                    s = t[4],
                    b = t[5],
                    C = t[6],
                    I = t[7],
                    p = 0;
                  p < 64;
                  p++
                ) {
                  if (p < 16) o[p] = 0 | c[a + p];
                  else {
                    var S = o[p - 15],
                      ne =
                        ((S << 25) | (S >>> 7)) ^
                        ((S << 14) | (S >>> 18)) ^
                        (S >>> 3),
                      A = o[p - 2],
                      se =
                        ((A << 15) | (A >>> 17)) ^
                        ((A << 13) | (A >>> 19)) ^
                        (A >>> 10);
                    o[p] = ne + o[p - 7] + se + o[p - 16];
                  }
                  var ae = (r & m) ^ (r & _) ^ (m & _),
                    ie =
                      ((r << 30) | (r >>> 2)) ^
                      ((r << 19) | (r >>> 13)) ^
                      ((r << 10) | (r >>> 22)),
                    K =
                      I +
                      (((s << 26) | (s >>> 6)) ^
                        ((s << 21) | (s >>> 11)) ^
                        ((s << 7) | (s >>> 25))) +
                      ((s & b) ^ (~s & C)) +
                      y[p] +
                      o[p];
                  (I = C),
                    (C = b),
                    (b = s),
                    (s = (v + K) | 0),
                    (v = _),
                    (_ = m),
                    (m = r),
                    (r = (K + (ie + ae)) | 0);
                }
                (t[0] = (t[0] + r) | 0),
                  (t[1] = (t[1] + m) | 0),
                  (t[2] = (t[2] + _) | 0),
                  (t[3] = (t[3] + v) | 0),
                  (t[4] = (t[4] + s) | 0),
                  (t[5] = (t[5] + b) | 0),
                  (t[6] = (t[6] + C) | 0),
                  (t[7] = (t[7] + I) | 0);
              },
              _doFinalize: function () {
                var c = this._data,
                  a = c.words,
                  t = 8 * this._nDataBytes,
                  r = 8 * c.sigBytes;
                return (
                  (a[r >>> 5] |= 128 << (24 - (r % 32))),
                  (a[14 + (((r + 64) >>> 9) << 4)] = l.floor(t / 4294967296)),
                  (a[15 + (((r + 64) >>> 9) << 4)] = t),
                  (c.sigBytes = 4 * a.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var c = n.clone.call(this);
                return (c._hash = this._hash.clone()), c;
              },
            }));
          (h.SHA256 = n._createHelper(u)),
            (h.HmacSHA256 = n._createHmacHelper(u));
        })(Math),
        f.SHA256)));
  var f;
}
var G,
  N = { exports: {} };
function Ie() {
  return G
    ? N.exports
    : ((G = 1),
      (N.exports =
        ((f = $()),
        (h = (l = f).lib.Base),
        (d = l.enc.Utf8),
        void (l.algo.HMAC = h.extend({
          init: function (i, n) {
            (i = this._hasher = new i.init()),
              typeof n == "string" && (n = d.parse(n));
            var g = i.blockSize,
              x = 4 * g;
            n.sigBytes > x && (n = i.finalize(n)), n.clamp();
            for (
              var y = (this._oKey = n.clone()),
                o = (this._iKey = n.clone()),
                u = y.words,
                c = o.words,
                a = 0;
              a < g;
              a++
            )
              (u[a] ^= 1549556828), (c[a] ^= 909522486);
            (y.sigBytes = o.sigBytes = x), this.reset();
          },
          reset: function () {
            var i = this._hasher;
            i.reset(), i.update(this._iKey);
          },
          update: function (i) {
            return this._hasher.update(i), this;
          },
          finalize: function (i) {
            var n = this._hasher,
              g = n.finalize(i);
            return n.reset(), n.finalize(this._oKey.clone().concat(g));
          },
        })))));
  var f, l, h, d;
}
var te = z('<div class="w-full flex justify-center">'),
  fe = z('<span class="inline-flex items-center gap-1"><span>'),
  re = z("<span>"),
  ge = z(
    '<span class="inline-flex items-center gap-0 whitespace-nowrap"><span>'
  ),
  pe = z(
    '<span class="inline-flex items-center gap-0 whitespace-nowrap"><span></span><span>'
  );
function xe() {
  const [f, l] = j(F),
    { logs: h } = J(),
    d = L(),
    i = ee();
  return e(O, {
    exitBeforeEnter: !0,
    get children() {
      return e(Q.div, {
        class: "min-h-[18rem]",
        get children() {
          return [
            e(X, {
              get children() {
                return [
                  e(Y, {
                    get children() {
                      return e(M, {
                        class: "text-secondary ",
                        get children() {
                          return [
                            e(k, {
                              class: "!font-normal",
                              get children() {
                                return H("Game ID");
                              },
                            }),
                            e(k, {
                              class: "!font-normal text-center",
                              get children() {
                                return H("Result");
                              },
                            }),
                            e(k, {
                              class: "!font-normal text-center",
                              get children() {
                                return H("Hash");
                              },
                            }),
                          ];
                        },
                      });
                    },
                  }),
                  e(Z, {
                    get children() {
                      return D(() => !!h().length)()
                        ? e(T, {
                            get each() {
                              return h().slice(0, f());
                            },
                            children: (x) => {
                              const {
                                gameId: y,
                                hash: o,
                                maxRate: u,
                                value: c,
                              } = x;
                              return e(M, {
                                onClick: () => {
                                  d(`/allplayers/${i.gameUnique}/${x.gameId}`);
                                },
                                get children() {
                                  return [
                                    e(B, {
                                      class: "text-secondary",
                                      get children() {
                                        var a,
                                          t = fe(),
                                          r = t.firstChild;
                                        return (
                                          w(
                                            t,
                                            u > 0 &&
                                              ((a = re()),
                                              le(() =>
                                                oe(
                                                  a,
                                                  U(
                                                    "w-2 h-2 rounded-full",
                                                    u > 10
                                                      ? "bg-[#FBFF24]"
                                                      : u >= 2
                                                      ? "bg-brand"
                                                      : "bg-warning"
                                                  )
                                                )
                                              ),
                                              a),
                                            r
                                          ),
                                          w(r, y),
                                          t
                                        );
                                      },
                                    }),
                                    e(B, {
                                      class: "text-center text-secondary",
                                      get children() {
                                        return c !== void 0
                                          ? c
                                          : (Math.round(100 * u) / 100).toFixed(
                                              2
                                            );
                                      },
                                    }),
                                    e(B, {
                                      class:
                                        "text-center text-secondary max-w-[10rem] truncate",
                                      children: o,
                                    }),
                                  ];
                                },
                              });
                            },
                          })
                        : e(M, {
                            class: "text-center",
                            get children() {
                              return e(B, {
                                colSpan: 3,
                                class: "py-2",
                                get children() {
                                  return e(W, {});
                                },
                              });
                            },
                          });
                    },
                  }),
                ];
              },
            }),
            ((g = te()),
            w(
              g,
              ((n = D(() => h().length > F)),
              () =>
                n() &&
                e(V, { isMore: !f, onClick: () => l(f() ? void 0 : 10) }))
            ),
            g),
          ];
          var n, g;
        },
      });
    },
  });
}
function ye(f) {
  const [l, h] = j(F),
    { myLogs: d, game: i } = J(),
    { findToken: n } = he(),
    g = L(),
    { coinFormat: x } = de();
  return e(O, {
    exitBeforeEnter: !0,
    get children() {
      return e(Q.div, {
        class: "min-h-[18rem]",
        get children() {
          return [
            e(X, {
              class: "w-full",
              get children() {
                return [
                  e(Y, {
                    get children() {
                      return e(M, {
                        class: "text-secondary !font-normal",
                        get children() {
                          return [
                            e(k, {
                              class: "!font-normal",
                              get children() {
                                return H("Bet ID");
                              },
                            }),
                            e(k, {
                              class: "!font-normal w-4/12 text-center",
                              get children() {
                                return H("Bet");
                              },
                            }),
                            e(k, {
                              class: "!font-normal",
                              get children() {
                                return H("Payout");
                              },
                            }),
                            e(k, {
                              class: "!font-normal text-right",
                              get children() {
                                return H("Profit");
                              },
                            }),
                          ];
                        },
                      });
                    },
                  }),
                  e(Z, {
                    get children() {
                      return D(() => !!d().length)()
                        ? e(T, {
                            get each() {
                              return d().slice(0, l());
                            },
                            children: (u) => {
                              const {
                                  winAmount: c,
                                  betAmount: a,
                                  distributeId: t,
                                } = u,
                                r = new P(c).sub(a),
                                m = r.gte(0),
                                _ =
                                  Math.floor(100 * i.getResult(u).payout) / 100,
                                v = n(u.currencyName);
                              return e(M, {
                                onClick: () => {
                                  g(`/game-detail/${u.distributeId}`);
                                },
                                get children() {
                                  return [
                                    e(B, {
                                      class:
                                        "text-secondary max-w-[5rem] ellipsis overflow-hidden",
                                      get children() {
                                        var s = re();
                                        return w(s, t), s;
                                      },
                                    }),
                                    e(B, {
                                      class: "text-center text-secondary",
                                      get children() {
                                        var s = ge(),
                                          b = s.firstChild;
                                        return (
                                          w(b, () =>
                                            x(new P(a), u.currencyName)
                                          ),
                                          w(
                                            s,
                                            e(R, {
                                              token: v,
                                              class:
                                                "!w-4 !h-4 !leading-4 text-xs !ml-1",
                                            }),
                                            null
                                          ),
                                          s
                                        );
                                      },
                                    }),
                                    e(B, {
                                      class: "text-secondary",
                                      get children() {
                                        return e(ue, {
                                          fallback: () => [],
                                          get children() {
                                            return [_, "x"];
                                          },
                                        });
                                      },
                                    }),
                                    e(B, {
                                      get class() {
                                        return U(
                                          "text-right text-secondary",
                                          m ? "!text-brand" : "!text-error"
                                        );
                                      },
                                      get children() {
                                        var s = pe(),
                                          b = s.firstChild,
                                          C = b.nextSibling;
                                        return (
                                          w(b, m ? "+" : ""),
                                          w(C, () => x(r, u.currencyName)),
                                          w(
                                            s,
                                            e(R, {
                                              token: v,
                                              class: "text-sm",
                                            }),
                                            null
                                          ),
                                          s
                                        );
                                      },
                                    }),
                                  ];
                                },
                              });
                            },
                          })
                        : e(M, {
                            class: "text-center",
                            get children() {
                              return e(B, {
                                colSpan: 4,
                                class: "py-2",
                                get children() {
                                  return e(W, {});
                                },
                              });
                            },
                          });
                    },
                  }),
                ];
              },
            }),
            ((o = te()),
            w(
              o,
              ((y = D(() => d().length > F)),
              () =>
                y() && e(V, { isMore: !l, onClick: () => h(l() ? void 0 : F) }))
            ),
            o),
          ];
          var y, o;
        },
      });
    },
  });
}
function Ke(f) {
  const l = ee(),
    h = ce(() => {
      const d = [
        {
          title: H("My Bets"),
          content: () =>
            e(ye, {
              get gameDetails() {
                return f.GameDetailComponent;
              },
            }),
        },
      ];
      return (
        l.gameUnique !== "fastparity" &&
          d.push({ title: H("History"), content: xe }),
        d
      );
    });
  return e(me, {
    get tabs() {
      return h();
    },
  });
}
export { Ke as M, Ie as a, De as r };
