import {
  i as l,
  c as e,
  t as u,
  Q as b,
  al as M,
  C as R,
  l as k,
  s as I,
  p as G,
  am as q,
  m as P,
  e as y,
  f as d,
  a as S,
  h as _,
  af as Q,
  ae as L,
  an as U,
  a9 as Y,
  ao as J,
  ap as j,
  G as z,
  a7 as K,
  ah as X,
  a1 as Z,
  g as ee,
  aq as te,
  ar as re,
  b as E,
  v as ae,
  as as F,
  ag as B,
  ai as m,
  at as ne,
  au as le,
  av as se,
  aw as ie,
  aj as A,
  W as ce,
  a6 as N,
  B as ue,
  ax as oe,
  ay as ge,
  r as C,
  az as de,
  $ as he,
  aA as me,
  a3 as ve,
  x as H,
  w as T,
} from "./index-Cp-3lvCI.js";
import { B as fe, R as be } from "./index-DAEqJMkH.js";
import { S as V } from "./index-CPRFYrHB.js";
import f from "./GameEntryWrap-CbskW7lq.js";
import { ProviderView as we } from "./Providers.page--3v3ntvo.js";
import { TagSimple as x } from "./Tag.page-BD9fXFvy.js";
import { ThemesView as _e } from "./Themes.page-k81lx3Dk.js";
var pe = d("<div>"),
  $e = d('<span class="mr-1 text-secondary">'),
  xe = d("<span>"),
  ye = d(
    '<div class="flex h-10 overflow-hidden center"><img class="w-24 h-auto"alt=provider>'
  );
const ke = function (r) {
  return (() => {
    var t = pe();
    return (
      l(
        t,
        e(q, {
          class: "flex-1 bg-layer3",
          get value() {
            return r.selectProvider;
          },
          get options() {
            return r.providers;
          },
          get disabled() {
            return r.providers.length <= 0;
          },
          onChange: (s) => s && r.changeSelectProvider(s),
          labelFormat: (s) => [
            (() => {
              var a = $e();
              return l(a, () => u("Providers") + ":"), a;
            })(),
            (() => {
              var a = xe();
              return (
                l(
                  a,
                  (() => {
                    var o = b(() => s().length > 0);
                    return () => (o() ? "+" + s().length : u("All"));
                  })()
                ),
                a
              );
            })(),
          ],
          children: (s) => {
            const a = s().providerName.includes("BC Originals"),
              o = M(() => (R.darken ? s().logo : s().logoWhite), "w=200");
            return (() => {
              var i = ye(),
                g = i.firstChild;
              return (
                k(() =>
                  I(
                    g,
                    "src",
                    a
                      ? R.darken
                        ? G.assets("/logo/logo.png")
                        : G.assets("/logo/logo_w.png")
                      : o()
                  )
                ),
                i
              );
            })();
          },
        })
      ),
      k(() =>
        P(
          t,
          y(
            "flex w-full items-center mt-3 gap-2 sm:w-1/4 sm:flex-none",
            r.class
          )
        )
      ),
      t
    );
  })();
};
var Se = d('<div class="mt-4 w-full sm:mt-0">'),
  Pe = d(
    '<div class="mt-4 flex w-full items-center justify-center h-16 sm:mt-0"><span class="text-center font-semibold text-error">'
  ),
  Re = d(
    '<div class="mt-4 flex h-40 w-full items-center justify-center sm:mt-0">'
  ),
  Ce = d(
    '<div class="mt-4 flex h-64 w-full items-center justify-center sm:mt-0">'
  );
const Ge = function (r) {
  const [t, s] = S([]),
    a = b(() => {
      if (!r.searchResult || r.searchResult.length <= 0) return [];
      if (!r.providers || r.providers.length <= 0) return [];
      let i = [];
      return (
        r.searchResult.map((g) => {
          const v = r.providers.find((w) => w.providerName == g.providerName);
          v &&
            i.findIndex((c) => c.providerName === v.providerName) < 0 &&
            i.push(v);
        }),
        i
      );
    }),
    o = b(() => {
      if (t().length <= 0) return r.searchResult;
      const i = t().map((g) => g.providerName);
      return r.searchResult.filter((g) => i.includes(g.providerName));
    });
  return [
    e(ke, {
      get selectProvider() {
        return t();
      },
      changeSelectProvider: s,
      get providers() {
        return a();
      },
    }),
    e(_, {
      get when() {
        return r.search && r.search.length > 2;
      },
      get fallback() {
        return (() => {
          var i = Pe(),
            g = i.firstChild;
          return l(g, () => u("Search requires at least 3 characters")), i;
        })();
      },
      get children() {
        return e(_, {
          get when() {
            return !r.searching;
          },
          get fallback() {
            return (() => {
              var i = Re();
              return l(i, e(Q, {})), i;
            })();
          },
          get children() {
            return e(_, {
              get when() {
                return r.searchResult.length > 0;
              },
              get fallback() {
                return (() => {
                  var i = Ce();
                  return l(i, e(L, {})), i;
                })();
              },
              get children() {
                var i = Se();
                return (
                  l(
                    i,
                    e(U, {
                      get list() {
                        return o();
                      },
                      get track() {
                        return {
                          search_module: "casino search",
                          key_words: r.search,
                          is_filter_provder: t().length === 0,
                        };
                      },
                    })
                  ),
                  i
                );
              },
            });
          },
        });
      },
    }),
  ];
};
var h = ((n) => (
  (n.brand = "brand"),
  (n.favorites = "favorites"),
  (n.recent = "recent"),
  (n.live = "live"),
  (n.slots = "slots"),
  (n.hot = "hot"),
  (n.new = "new"),
  (n.pick = "picks"),
  (n.tablegame = "table-game"),
  (n.gameshows = "game-shows"),
  (n.provider = "provider"),
  (n.featurebuyin = "feature-buy-in"),
  (n.themes = "themes"),
  (n.all = ""),
  n
))(h || {});
const W = () => [
  { label: u("All Games"), value: "", iconname: "Home" },
  {
    label: u("__ENV_SITE__ Originals"),
    value: "brand",
    iconname: "Classicdice",
  },
  { label: u("Top Picks"), value: "picks", iconname: "Toppicks" },
  { label: u("Hot Games"), value: "hot", iconname: "Hot" },
  { label: u("New Releases"), value: "new", iconname: "Newreleases" },
  { label: u("Slots"), value: "slots", iconname: "Slots" },
  { label: u("Live Casino"), value: "live", iconname: "Live" },
  {
    label: u("Feature Buy-in"),
    value: "feature-buy-in",
    iconname: "Featurebuyin",
  },
  { label: u("Game Shows"), value: "game-shows", iconname: "GameShows" },
  { label: u("Providers"), value: "provider", iconname: "Favorites" },
  { label: u("Table Game"), value: "table-game", iconname: "Tablegame" },
  { label: u("Themes"), value: "themes", iconname: "Themes" },
];
var Ne = d(
    '<div class="hidden-scroll-bar w-full overflow-x-auto"><div class="flex flex-nowrap items-center gap-1 p-0">'
  ),
  Ie = d("<button><span>");
const Le = function (r) {
  const t = b(() => W()),
    s = b(() => t().find((o) => o.value === r.tab) || t()[0]),
    a = J(() => s().value);
  return (() => {
    var o = Ne(),
      i = o.firstChild;
    return (
      l(
        i,
        e(z, {
          get each() {
            return t();
          },
          children: (g) =>
            (() => {
              var v = Ie(),
                w = v.firstChild;
              return (
                (v.$$click = (c) => {
                  c.preventDefault(), r.setTab(g.value);
                }),
                l(
                  v,
                  e(j, {
                    get name() {
                      return g.iconname;
                    },
                    get class() {
                      return `flex-none h-4.5 w-4.5 ${
                        a(g.value) ? "text-brand" : "text-secondary"
                      }`;
                    },
                  }),
                  w
                ),
                l(w, () => g.label),
                k(
                  (c) => {
                    var p = y(
                        "flex h-10 items-center justify-center rounded-lg px-2 py-0 hover:bg-layer3",
                        a(g.value) && "bg-tab_selected"
                      ),
                      $ = `ml-1 whitespace-nowrap ${
                        a(g.value) ? "font-extrabold" : "text-secondary"
                      }`;
                    return (
                      p !== c.e && P(v, (c.e = p)),
                      $ !== c.t && P(w, (c.t = $)),
                      c
                    );
                  },
                  { e: void 0, t: void 0 }
                ),
                v
              );
            })(),
        })
      ),
      o
    );
  })();
};
Y(["click"]);
var je = d("<div class=mt-4>"),
  ze = d("<div class=w-full>");
const Ee = function (r) {
    const [t, s] = S([]),
      [a, o] = S(h.all),
      [i, g] = K({ searching: !1, searchResult: [] }),
      v = X(async (c) => {
        const p = {
          keyword: c,
          page: 1,
          device: 1,
          pageSize: 100,
          areaCode: Z.areaCode,
        };
        ee()
          .post("/home/search/game/", p)
          .then(($) => {
            $ && g({ searching: !1, searchResult: $.list || [] });
          })
          .catch(($) => {
            te($), g({ searching: !1 });
          })
          .finally(() => {
            re.trackEvent("search_sent", {
              search_module: "casino search",
              key_words: c,
            });
          });
      }, 1e3);
    E(() => {
      r.search && r.search.length > 2 && (g({ searching: !0 }), v(r.search));
    });
    const w = b(() => {
      switch (a()) {
        case h.all:
          return i.searchResult;
        case h.brand:
          return i.searchResult.filter((c) =>
            c.categoryName.includes("Original")
          );
        case h.slots:
          return i.searchResult.filter((c) => c.categoryName.includes("Slots"));
        case h.live:
          return i.searchResult.filter((c) => c.categoryName.includes("Live"));
        case h.hot:
          return i.searchResult.filter((c) => c.retrieveId.includes("hot"));
        case h.new:
          return i.searchResult.filter((c) =>
            c.retrieveId.includes("new_game")
          );
        default:
          return [];
      }
    });
    return (
      ae(() => {
        F()
          .then((c) => s(c.pageList.list || []))
          .catch(console.log);
      }),
      (() => {
        var c = ze();
        return (
          l(
            c,
            e(Le, {
              get tab() {
                return a();
              },
              setTab: o,
            }),
            null
          ),
          l(
            c,
            e(_, {
              get when() {
                return a() === h.pick || a() === h.provider || a() === h.themes;
              },
              get fallback() {
                return e(Ge, {
                  get providers() {
                    return t();
                  },
                  get search() {
                    return r.search;
                  },
                  get searching() {
                    return i.searching;
                  },
                  get searchResult() {
                    return w();
                  },
                });
              },
              get children() {
                var p = je();
                return l(p, e(L, {})), p;
              },
            }),
            null
          ),
          c
        );
      })()
    );
  },
  Fe = Ee;
var Be = d('<div class="w-full py-4">');
const Ae = function () {
  const [r] = B(),
    [t, s] = S(r.tab || "");
  return (
    E(() => {
      const a = r.tab || "";
      s(a);
    }),
    (() => {
      var a = Be();
      return (
        l(
          a,
          e(A, {
            get children() {
              return [
                e(m, {
                  get when() {
                    return t() === "brand";
                  },
                  get children() {
                    return e(ne, {});
                  },
                }),
                e(m, {
                  get when() {
                    return t() === "picks";
                  },
                  get children() {
                    return e(le, {});
                  },
                }),
                e(m, {
                  get when() {
                    return t() === "slots";
                  },
                  get children() {
                    return e(se, { isCasinoPage: !0 });
                  },
                }),
                e(m, {
                  get when() {
                    return t() === "live";
                  },
                  get children() {
                    return e(ie, { isCasinoPage: !0 });
                  },
                }),
                e(m, {
                  get when() {
                    return t() === "hot";
                  },
                  get children() {
                    return e(x, { isCasinoPage: !0, tag: "Hot Games" });
                  },
                }),
                e(m, {
                  get when() {
                    return t() === "game-shows";
                  },
                  get children() {
                    return e(x, { isCasinoPage: !0, tag: "Game shows" });
                  },
                }),
                e(m, {
                  get when() {
                    return t() === "new";
                  },
                  get children() {
                    return e(x, { isCasinoPage: !0, tag: "New Releases" });
                  },
                }),
                e(m, {
                  get when() {
                    return t() === "feature-buy-in";
                  },
                  get children() {
                    return e(x, { isCasinoPage: !0, tag: "Feature buy-in" });
                  },
                }),
                e(m, {
                  get when() {
                    return t() === "table-game";
                  },
                  get children() {
                    return e(x, { isCasinoPage: !0, tag: "Table games" });
                  },
                }),
              ];
            },
          })
        ),
        a
      );
    })()
  );
};
var O = d("<div class=mb-4>"),
  He = d('<img alt=""class="h-full w-full object-contain">'),
  Te = d(
    '<div class="flex items-center justify-center rounded-lg px-4 text-center font-extrabold h-12 bg-layerx">'
  ),
  D = d("<span>"),
  Ve = d('<div><div class="flex gap-2 py-3">'),
  We = d(
    '<div><div class="hid flex snap-x snap-mandatory scroll-smooth px-4 smooth-scroll -mx-4 gap-0.5 overflow-auto hide-scroll">'
  ),
  Oe = d("<div class=text-white>");
const De = (n) =>
    (() => {
      var r = O();
      return (
        l(
          r,
          e(V, {
            get title() {
              return n.title;
            },
            get href() {
              return n.link;
            },
            showController: !0,
          }),
          null
        ),
        l(
          r,
          e(T, {
            class: "-mx-4 sm:mx-0",
            get data() {
              return n.data || Array(8).fill(void 0);
            },
            rows: 1,
            get scrollPadding() {
              return H.mobile ? 16 : 0;
            },
            width: 128,
            height: 48,
            gap: 8,
            children: (t) =>
              e(_, {
                get when() {
                  return t();
                },
                get fallback() {
                  return Te();
                },
                get children() {
                  return e(C, {
                    get href() {
                      return `/provider/${t()?.providerName}`;
                    },
                    class:
                      "flex items-center justify-center rounded-lg px-4 text-center font-extrabold h-12 bg-layerx",
                    get children() {
                      return e(_, {
                        get when() {
                          return t().logo;
                        },
                        get fallback() {
                          return (() => {
                            var s = D();
                            return l(s, () => t().providerName), s;
                          })();
                        },
                        get children() {
                          var s = He();
                          return (
                            s.addEventListener("error", (a) => {
                              (a.currentTarget.style.display = "none"),
                                a.currentTarget.nextElementSibling &&
                                  (a.currentTarget.nextElementSibling.style.display =
                                    "block");
                            }),
                            k(() =>
                              I(s, "src", R.darken ? t().logo : t().logoWhite)
                            ),
                            s
                          );
                        },
                      });
                    },
                  });
                },
              }),
          }),
          null
        ),
        r
      );
    })(),
  Me = (n) =>
    (() => {
      var r = O();
      return (
        l(
          r,
          e(V, {
            get title() {
              return n.title;
            },
            get href() {
              return n.link;
            },
            showController: !0,
          }),
          null
        ),
        l(
          r,
          e(T, {
            class: "-mx-4 sm:mx-0",
            get data() {
              return n.data || Array(8).fill(void 0);
            },
            rows: 1,
            get scrollPadding() {
              return H.mobile ? 16 : 0;
            },
            gap: 8,
            width: 128,
            height: 48,
            children: (t) =>
              e(C, {
                get href() {
                  return b(() => !!t())() ? `/tagname/${t()}` : "";
                },
                class:
                  "flex h-full w-full items-center justify-center rounded-xl bg-layer4 text-center font-semibold px-1",
                get children() {
                  return t();
                },
              }),
          }),
          null
        ),
        r
      );
    })();
function tt() {
  const [n, r] = S("");
  return (() => {
    var t = Ve(),
      s = t.firstChild;
    return (
      l(
        t,
        e(ce, {
          get children() {
            return e(fe, {});
          },
        }),
        s
      ),
      l(
        s,
        e(oe, {
          get placeholder() {
            return u("Search games");
          },
          get value() {
            return n();
          },
          class: "px-2 flex-3 bg-layer3",
          onChange: (a) => {
            r(a);
          },
          get children() {
            return [
              e(N, {
                name: "Search",
                class: "order-first text-secondary size-6",
              }),
              e(_, {
                get when() {
                  return !!n();
                },
                get children() {
                  return e(ue, {
                    class:
                      "flex items-center justify-center rounded-md bg-layer6 size-6 p-0",
                    onClick: (a) => {
                      a.preventDefault(), r("");
                    },
                    get children() {
                      return e(N, {
                        name: "Close",
                        class: "text-secondary size-4",
                      });
                    },
                  });
                },
              }),
            ];
          },
        })
      ),
      l(
        t,
        e(ge.TabSelect, {
          get value() {
            return n().length < 1 ? 0 : 1;
          },
          tabs: [0, 1],
          children: (a) =>
            a() === 0
              ? e(qe, {})
              : e(Fe, {
                  get search() {
                    return n();
                  },
                }),
        }),
        null
      ),
      t
    );
  })();
}
function qe() {
  const [n] = B(),
    r = b(() => W()),
    t = b(() => {
      const s = r().find((a) => a.value === n.tab);
      return s ? s.value : h.all;
    });
  return (() => {
    var s = We(),
      a = s.firstChild;
    return (
      a.style.setProperty("scroll-padding-inline", "1rem"),
      l(
        a,
        e(z, {
          get each() {
            return r();
          },
          children: (o) =>
            e(C, {
              get class() {
                return y(
                  "casino-nav-item flex h-10 items-center justify-center rounded-lg px-2 py-0 hover:bg-layer3",
                  t() === o.value && "bg-tab_selected"
                );
              },
              get href() {
                return `/casino${o.value ? "?tab=" + o.value : ""}`;
              },
              get children() {
                return [
                  e(j, {
                    get name() {
                      return o.iconname;
                    },
                    get class() {
                      return y(
                        "flex-none h-4.5 w-4.5",
                        t() === o.value ? "text-brand" : "text-secondary"
                      );
                    },
                  }),
                  (() => {
                    var i = D();
                    return (
                      l(
                        i,
                        e(_, {
                          get when() {
                            return o.value === h.all;
                          },
                          get fallback() {
                            return o.label;
                          },
                          get children() {
                            return u("Lobby");
                          },
                        })
                      ),
                      k(() =>
                        P(
                          i,
                          y(
                            "ml-1 whitespace-nowrap",
                            t() === o.value
                              ? "font-extrabold"
                              : "text-secondary"
                          )
                        )
                      ),
                      i
                    );
                  })(),
                ];
              },
            }),
        })
      ),
      l(
        s,
        e(de, {
          name: "fadeUp2",
          get children() {
            return e(A, {
              get fallback() {
                return e(Ae, {});
              },
              get children() {
                return [
                  e(m, {
                    get when() {
                      return t() === h.all;
                    },
                    get children() {
                      return e(Qe, {});
                    },
                  }),
                  e(m, {
                    get when() {
                      return t() === h.provider;
                    },
                    get children() {
                      return e(we, {});
                    },
                  }),
                  e(m, {
                    get when() {
                      return t() === h.themes;
                    },
                    get children() {
                      return e(_e, {});
                    },
                  }),
                ];
              },
            });
          },
        }),
        null
      ),
      s
    );
  })();
}
function Qe() {
  const [n] = he(async () => {
      const [t, s, a] = await Promise.all([
        F(),
        me(),
        ve([
          { pageSize: 20, sectionId: "casino_hot" },
          { pageSize: 20, sectionId: "casino_slots" },
          { pageSize: 20, sectionId: "casino_live" },
          { pageSize: 20, sectionId: "casino_bc" },
          { pageSize: 20, sectionId: "casino_tag", tag: "Feature buy-in" },
          { pageSize: 20, sectionId: "casino_tag", tag: "Blackjack" },
          { pageSize: 20, sectionId: "casino_tag", tag: "Game shows" },
          { pageSize: 20, sectionId: "casino_tag", tag: "Table games" },
          { pageSize: 20, sectionId: "casino_new" },
        ]),
      ]);
      return { provider: t, themes: s, list: a };
    }),
    r = (t) => n()?.list[t];
  return (() => {
    var t = Oe();
    return (
      l(
        t,
        e(f, {
          get title() {
            return u("__ENV_SITE__ Originals");
          },
          link: "/gamelist/brand",
          get data() {
            return r(3);
          },
        }),
        null
      ),
      l(
        t,
        e(f, {
          get title() {
            return u("Hot Games");
          },
          link: "/tagname/hot",
          get data() {
            return r(0);
          },
        }),
        null
      ),
      l(
        t,
        e(f, {
          get title() {
            return u("New Releases");
          },
          link: "/tagname/new-releases",
          get data() {
            return r(8);
          },
        }),
        null
      ),
      l(
        t,
        e(f, {
          get title() {
            return u("Slots");
          },
          link: "/gamelist/slots",
          get data() {
            return r(1);
          },
        }),
        null
      ),
      l(
        t,
        e(f, {
          get title() {
            return u("Live Casino");
          },
          link: "/gamelist/live",
          get data() {
            return r(2);
          },
        }),
        null
      ),
      l(
        t,
        e(De, {
          get title() {
            return u("Game Providers");
          },
          link: "/providers",
          get data() {
            return n()?.provider.pageList.list;
          },
        }),
        null
      ),
      l(
        t,
        e(f, {
          get title() {
            return u("Feature Buy-in");
          },
          link: "/tagname/feature-buy-in",
          get data() {
            return r(4);
          },
        }),
        null
      ),
      l(
        t,
        e(f, {
          get title() {
            return u("Blackjack");
          },
          link: "/tagname/blackjack",
          get data() {
            return r(5);
          },
        }),
        null
      ),
      l(
        t,
        e(Me, {
          get title() {
            return u("Themes");
          },
          link: "/themes",
          get data() {
            return n()?.themes.tags;
          },
        }),
        null
      ),
      l(
        t,
        e(f, {
          get title() {
            return u("Table Games");
          },
          link: "/tagname/table-games",
          get data() {
            return r(7);
          },
        }),
        null
      ),
      l(
        t,
        e(f, {
          get title() {
            return u("Game Shows");
          },
          link: "/tagname/Game shows",
          get data() {
            return r(6);
          },
        }),
        null
      ),
      l(t, e(be, {}), null),
      t
    );
  })();
}
export { tt as default };
