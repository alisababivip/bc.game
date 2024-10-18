var Y = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty,
  A = Object.prototype.propertyIsEnumerable;
var w = (e, t, s) =>
    t in e
      ? Y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  b = (e, t) => {
    for (var s in t || (t = {})) $.call(t, s) && w(e, s, t[s]);
    if (y) for (var s of y(t)) A.call(t, s) && w(e, s, t[s]);
    return e;
  };
import {
  $ as B,
  c as r,
  a0 as v,
  S as m,
  i as n,
  t as o,
  f as D,
  k as j,
  a8 as E,
  y as U,
  x as f,
  M as G,
  n as L,
  a7 as M,
  L as P,
  B as I,
  Y as Z,
} from "./manifest-a234c8a0.js";
import { t as c } from "./i18n-611811a6.js";
import {
  N as _,
  a as J,
  f as O,
  T as C,
  b as z,
  c as N,
} from "./number-field-a2716165.js";
import { c as k } from "./utils-65805dbc.js";
import { a as Q } from "./Close-4ee839c4.js";
import { G as q } from "./config-6b289bdb.js";
import { g as K } from "./amount-af49bfc0.js";
var R = o('<div class="absolute left-2 top-1/2 -translate-y-1/2">'),
  V = o(
    '<div class="flex items-center gap-1 absolute right-1 top-1/2 -translate-y-1/2">'
  ),
  W = o("<div class=relative>");
function X(e) {
  const [t, s] = B(e, ["label", "prefix", "suffix", "size", "class"]);
  return r(
    _,
    v(s, {
      get class() {
        return k("space-y-1", t.class);
      },
      get children() {
        return [
          r(m, {
            get when() {
              return t.label;
            },
            get children() {
              return r(J, {
                get children() {
                  return t.label;
                },
              });
            },
          }),
          ((l = W()),
          n(
            l,
            r(m, {
              get when() {
                return t.prefix;
              },
              get children() {
                var i = R();
                return n(i, () => e.prefix), i;
              },
            }),
            null
          ),
          n(
            l,
            r(O, {
              get size() {
                var i;
                return (i = e.size) != null ? i : "default";
              },
              get class() {
                return k({ "pl-9 h-12 bg-input_bright sm:h-10": e.prefix });
              },
            }),
            null
          ),
          n(
            l,
            r(m, {
              get when() {
                return t.suffix;
              },
              get children() {
                var i = V();
                return n(i, () => e.suffix), i;
              },
            }),
            null
          ),
          l),
        ];
        var l;
      },
    })
  );
}
var ee = o("<div class=relative>"),
  te = o('<div class="flex items-center gap-4 text-sm">'),
  re = o(
    '<div class=mt-4><div><div class="flex items-center"><div class="flex-grow border-b border-border"></div><span class=mx-2></span><div class="flex-grow border-b border-border"></div></div></div><div class=mt-4><div class="flex items-center"><div class="flex-grow border-b border-border"></div><span class=mx-2></span><div class="flex-grow border-b border-border">'
  ),
  se = o(
    '<div class=p-2><p class="px-4 py-4 bg-layer6 rounded-lg text-brand text-sm sm:rounded-sm md:rounded-lg lg:rounded-xl">'
  );
const H = (e) => {
    return [
      r(C, {
        disabled: !0,
        get value() {
          return e.serverSeedHash;
        },
        class: "space-y-1 mb-4",
        get children() {
          return [
            r(z, {
              get children() {
                return c("Server Seed(hash)");
              },
            }),
            r(N, { type: "text", size: "lg" }),
          ];
        },
      }),
      ((t = te()),
      n(
        t,
        r(C, {
          get disabled() {
            return !e.editable;
          },
          get value() {
            return e.clientSeed;
          },
          onChange: (s) => {
            var l;
            return (l = e == null ? void 0 : e.onChange) == null
              ? void 0
              : l.call(e, { clientSeed: s });
          },
          class: "space-y-1",
          get children() {
            return [
              r(z, {
                get children() {
                  return c("Client Seed");
                },
              }),
              ((s = ee()),
              n(s, r(N, { size: "lg", type: "text", class: "pr-6" }), null),
              n(
                s,
                r(m, {
                  get when() {
                    return e.editable;
                  },
                  get children() {
                    return r(I, {
                      onClick: () => {
                        var l;
                        return (l = e.onChange) == null
                          ? void 0
                          : l.call(e, { clientSeed: K() });
                      },
                      class: "absolute -right-1 top-0 h-12",
                      get children() {
                        return r(Q, {
                          class: "w-4 h-4 text-secondary",
                          fill: "gray",
                        });
                      },
                    });
                  },
                }),
                null
              ),
              s),
            ];
            var s;
          },
        }),
        null
      ),
      n(
        t,
        r(X, {
          disabled: !0,
          get value() {
            return e.maxNonce;
          },
          get label() {
            return c("Nonce");
          },
          size: "lg",
          class: "w-1/2",
        }),
        null
      ),
      t),
    ];
    var t;
  },
  ne = ({ queryKey: e }) => U().get(`/single-v2/game/seed/${e[1]}/next-hash/`);
function ae(e) {
  const [t, s] = D({ clientSeed: K() }),
    l =
      e.gameUnique === "Twist99"
        ? q.find((a) => a.key === "twist")
        : q.find((a) => a.key === e.gameUnique || a.name === e.gameUnique),
    i = j(() => ({
      queryKey: ["/single-v2/game/seed/{gameId}/next-hash/", l.id],
      queryFn: ne,
    })),
    p = E(() => ({
      mutationKey: ["/single-v2/game/seed/change/"],
      mutationFn: (a) => U().post("/single-v2/game/seed/change/", a),
      onSuccess() {
        f.success(c("Done!")),
          i.refetch(),
          G.pop(),
          e.onChangeSeed && e.onChangeSeed();
      },
      onError(a) {
        var u;
        f.error(
          (u = a == null ? void 0 : a.message) != null ? u : a.toString()
        );
      },
    }));
  return (
    L(() => {
      i.refetch();
    }),
    (h = se()),
    (x = h.firstChild),
    n(x, () =>
      c(
        "You may use this function to set a new server seed + a new client seed, they can be randomly generated or customized (at least 10 characters), and the number of bets will be reset to zero."
      )
    ),
    n(
      h,
      r(M, {
        get fallback() {
          return r(P, { class: "text-brand mx-auto" });
        },
        get children() {
          var a = re(),
            u = a.firstChild,
            F = u.firstChild.firstChild.nextSibling,
            S = u.nextSibling,
            T = S.firstChild.firstChild.nextSibling;
          return (
            n(F, () => c("Current seeds")),
            n(
              u,
              r(
                H,
                v(() => {
                  var d, g;
                  return (g =
                    (d = i.data) == null ? void 0 : d.currentSeedHash) != null
                    ? g
                    : {};
                })
              ),
              null
            ),
            n(T, () => c("New seeds")),
            n(
              S,
              r(
                H,
                v(
                  () => {
                    var d, g;
                    return (g =
                      (d = i.data) == null ? void 0 : d.nextSeedHash) != null
                      ? g
                      : {};
                  },
                  {
                    get clientSeed() {
                      return t().clientSeed;
                    },
                    editable: !0,
                    onChange: (d) => s(d),
                  }
                )
              ),
              null
            ),
            n(
              a,
              r(I, {
                type: "second",
                get disabled() {
                  return p.isPending;
                },
                onClick: () => {
                  const { clientSeed: d, seedId: g } = b(
                    b({}, i.data.nextSeedHash),
                    t()
                  );
                  /[^a-zA-Z0-9]/.test(d) || d.length > 32 || d.length < 10
                    ? f.error(
                        c(
                          "Seeds are mixed characters containing 10-32 digits, uppercase and lowercase letters."
                        )
                      )
                    : p.mutate({
                        clientSeed: d,
                        gameName: l.id,
                        nextSeedId: g,
                      });
                },
                class: "w-full mt-8",
                get children() {
                  return c("Use New Seeds");
                },
              }),
              null
            ),
            a
          );
        },
      }),
      null
    ),
    h
  );
  var h, x;
}
const me = (e) =>
  r(Z, {
    get title() {
      return c("Seed Setting");
    },
    get children() {
      return r(ae, e);
    },
  });
export { X as N, me as S };
