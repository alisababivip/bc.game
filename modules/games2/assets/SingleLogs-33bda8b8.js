import {
  c as e,
  h as U,
  f as F,
  aZ as V,
  i as t,
  m as x,
  aL as N,
  aJ as Z,
  E as D,
  u as E,
  S as q,
  z as P,
  ar as K,
  D as v,
  F as O,
  t as d,
} from "./manifest-a234c8a0.js";
import { c as L } from "./index-eff0ad24.js";
import { P as M, a as T } from "./MoreLessBtn-6b8ac376.js";
import { l as g, u as $ } from "./game-a49e1f5b.js";
import { u as j } from "./currency-a0e3a368.js";
import {
  T as A,
  a as z,
  b as h,
  c as i,
  d as G,
  e as a,
} from "./table-cbcb9a00.js";
import { S as C } from "./Symbol-f22f521e.js";
import { t as s } from "./i18n-611811a6.js";
import { u as J } from "./use-coin-format-bfa33df5.js";
import { G as Q } from "./Layout-b58c3f24.js";
var W = d('<div class=w-full><div class="w-full flex justify-center">'),
  X = d("<div>logs parse failed"),
  Y = d('<span class="inline-flex items-center"><span></span><span> '),
  _ = d(
    '<span class="max-w-[5rem] inline-block whitespace-nowrap overflow-hidden overflow-ellipsis">'
  ),
  ee = d('<div class=min-h-[18rem]><div class="w-full flex justify-center">'),
  re = d('<span class="inline-flex items-center"><span>'),
  te = d('<span class="inline-flex items-center"><span></span><span>');
function ne() {
  const [r, f] = F(g),
    { logs: l } = $();
  return e(V, {
    get children() {
      return e(M, {
        exitBeforeEnter: !0,
        get children() {
          var m,
            c = W(),
            n = c.firstChild;
          return (
            t(
              c,
              e(A, {
                get children() {
                  return [
                    e(z, {
                      get children() {
                        return e(h, {
                          class: "text-secondary",
                          get children() {
                            return [
                              e(i, {
                                class: "!font-normal",
                                get children() {
                                  return s("Bet ID");
                                },
                              }),
                              e(i, {
                                class: "!font-normal",
                                get children() {
                                  return s("User");
                                },
                              }),
                              e(i, {
                                class: "!font-normal",
                                get children() {
                                  return s("Payout");
                                },
                              }),
                              e(i, {
                                class: "!font-normal text-right",
                                get children() {
                                  return s("Profit");
                                },
                              }),
                            ];
                          },
                        });
                      },
                    }),
                    e(G, {
                      get children() {
                        return x(() => !!l().length)()
                          ? e(N, {
                              fallback: () => X(),
                              get children() {
                                return e(Z, {
                                  get each() {
                                    return l().slice(0, r());
                                  },
                                  component: ae,
                                });
                              },
                            })
                          : e(h, {
                              class: "text-center",
                              get children() {
                                return e(a, {
                                  colSpan: 4,
                                  class: "py-2",
                                  get children() {
                                    return e(D, {});
                                  },
                                });
                              },
                            });
                      },
                    }),
                  ];
                },
              }),
              n
            ),
            t(
              n,
              ((m = x(() => l().length > g)),
              () =>
                m() && e(T, { isMore: !r, onClick: () => f(r() ? void 0 : g) }))
            ),
            c
          );
        },
      });
    },
  });
}
function ae(r) {
  const { findToken: f, isViewInFiat: l } = j(),
    { coinFormat: m } = J(),
    c = E();
  return e(h, {
    onClick: () => {
      c(`/game-detail/${r.data.distributeId}`);
    },
    get children() {
      return [
        e(a, {
          class: "truncate text-secondary max-w-[6rem]",
          get children() {
            return r.data.distributeId;
          },
        }),
        e(a, {
          class: "py-2 truncate text-primary flex items-center",
          get children() {
            return e(q, {
              get when() {
                return r.data.nickName !== "****";
              },
              get fallback() {
                return (n = _()), t(n, () => P.userName(r.data.nickName)), n;
                var n;
              },
              get children() {
                return e(K, {
                  get href() {
                    return `/user/profile/${r.data.userId}`;
                  },
                  class:
                    "max-w-[5rem] inline-block whitespace-nowrap overflow-hidden overflow-ellipsis",
                  get children() {
                    return P.userName(r.data.nickName);
                  },
                });
              },
            });
          },
        }),
        e(a, {
          class: "text-secondary",
          get children() {
            return e(N, {
              fallback: () => [],
              get children() {
                return [x(() => r.data.payout), "x"];
              },
            });
          },
        }),
        e(a, {
          get class() {
            return L(
              "text-right truncate text-secondary",
              r.data.profit >= 0 ? "!text-brand" : "!text-error"
            );
          },
          get children() {
            var n = Y(),
              y = n.firstChild,
              p = y.nextSibling;
            return (
              p.firstChild,
              t(y, () => (r.data.profit > 0 ? "+" : "")),
              t(p, () => m(new v(r.data.profit), r.data.currencyName), null),
              t(
                n,
                e(C, {
                  get token() {
                    return f(r.data.currencyName);
                  },
                  class: "text-sm",
                }),
                null
              ),
              n
            );
          },
        }),
      ];
    },
  });
}
function se() {
  const [r, f] = F(g),
    { myLogs: l, game: m } = $(),
    { findToken: c, store: n } = j(),
    y = E(),
    { coinFormat: p } = J();
  return e(M, {
    exitBeforeEnter: !0,
    get children() {
      var I,
        b = ee(),
        S = b.firstChild;
      return (
        t(
          b,
          e(A, {
            get children() {
              return [
                e(z, {
                  get children() {
                    return e(h, {
                      class: "text-secondary",
                      get children() {
                        return [
                          e(i, {
                            class: "!font-normal",
                            get children() {
                              return s("Bet ID");
                            },
                          }),
                          e(i, {
                            class: "!font-normal",
                            get children() {
                              return s("Bet");
                            },
                          }),
                          e(i, {
                            class: "!font-normal",
                            get children() {
                              return s("Payout");
                            },
                          }),
                          e(i, {
                            class: "!font-normal text-right",
                            get children() {
                              return s("Profit");
                            },
                          }),
                        ];
                      },
                    });
                  },
                }),
                e(G, {
                  get children() {
                    return x(() => !!l().length)()
                      ? e(O, {
                          get each() {
                            return l().slice(0, r());
                          },
                          children: (o) => {
                            const { profit: k, payout: R } = m.getResult(o),
                              B = c(o.currencyName);
                            return e(h, {
                              onClick: () => {
                                y(`/game-detail/${o.distributeId}`);
                              },
                              get children() {
                                return [
                                  e(a, {
                                    class:
                                      "text-secondary max-w-[6rem] truncate",
                                    get children() {
                                      return o.distributeId;
                                    },
                                  }),
                                  e(a, {
                                    class: "text-secondary truncate",
                                    get children() {
                                      var u = re(),
                                        w = u.firstChild;
                                      return (
                                        t(w, () =>
                                          p(new v(o.betAmount), o.currencyName)
                                        ),
                                        t(
                                          u,
                                          e(C, { token: B, class: "text-sm" }),
                                          null
                                        ),
                                        u
                                      );
                                    },
                                  }),
                                  e(a, {
                                    class: "text-secondary",
                                    get children() {
                                      return e(N, {
                                        fallback: () => [],
                                        get children() {
                                          return [R, "x"];
                                        },
                                      });
                                    },
                                  }),
                                  e(a, {
                                    get class() {
                                      return L(
                                        "text-right truncate text-secondary",
                                        k >= 0 ? "!text-brand" : "!text-error"
                                      );
                                    },
                                    get children() {
                                      var u = te(),
                                        w = u.firstChild,
                                        H = w.nextSibling;
                                      return (
                                        t(w, k > 0 ? "+" : ""),
                                        t(H, () => p(new v(k), o.currencyName)),
                                        t(
                                          u,
                                          e(C, { token: B, class: "text-sm" }),
                                          null
                                        ),
                                        u
                                      );
                                    },
                                  }),
                                ];
                              },
                            });
                          },
                        })
                      : e(h, {
                          class: "text-center",
                          get children() {
                            return e(a, {
                              colSpan: 4,
                              class: "py-2",
                              get children() {
                                return e(D, {});
                              },
                            });
                          },
                        });
                  },
                }),
              ];
            },
          }),
          S
        ),
        t(
          S,
          ((I = x(() => l().length > g)),
          () => I() && e(T, { isMore: !r, onClick: () => f(r() ? void 0 : g) }))
        ),
        b
      );
    },
  });
}
function pe() {
  return e(Q, {
    get tabs() {
      return (() => {
        const r = [{ title: s("All bets"), content: ne }];
        return U.login && r.push({ title: s("My bets"), content: se }), r;
      })();
    },
  });
}
export { pe as S };
