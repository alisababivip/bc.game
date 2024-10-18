var x = Object.defineProperty;
var k = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty,
  I = Object.prototype.propertyIsEnumerable;
var _ = (t, s, e) =>
    s in t
      ? x(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[s] = e),
  L = (t, s) => {
    for (var e in s || (s = {})) C.call(s, e) && _(t, e, s[e]);
    if (k) for (var e of k(s)) I.call(s, e) && _(t, e, s[e]);
    return t;
  };
var f = (t, s, e) =>
  new Promise((h, u) => {
    var g = (o) => {
        try {
          n(e.next(o));
        } catch (i) {
          u(i);
        }
      },
      m = (o) => {
        try {
          n(e.throw(o));
        } catch (i) {
          u(i);
        }
      },
      n = (o) => (o.done ? h(o.value) : Promise.resolve(o.value).then(g, m));
    n((e = e.apply(t, s)).next());
  });
import {
  b as p,
  g as P,
  d as E,
  c,
  S as T,
  q as D,
  i as F,
  a as N,
  F as O,
  k as j,
  n as q,
  t as z,
} from "./solid-js-8ff414d5.js";
import {
  e as b,
  u as B,
  j as y,
  h as H,
  i as M,
  L as $,
  E as A,
  d as G,
  g as J,
  b as S,
} from "./manifest-987d6c36.js";
import { P as K } from "./PopularSectionItem-c3dc7aa1.js";
import { b as Q } from "./apis-5c7b35c7.js";
import { t as U } from "./i18n-9df4b53a.js";
var V = z("<div>");
const W = (t) => {
    let s;
    const [e, h] = p(b.mobile ? 2 : 6),
      [u, g] = p(t.search),
      m = B(),
      n = (a) =>
        f(void 0, null, function* () {
          const r = "/platform-lottery/lottery-info/list-lotteries/",
            l = yield J()
              .post(r, { distinctId: S.userId, sortBy: "letter_asc", name: a })
              .finally(() => {
                y.emit("sensorsTrack", {
                  event: "search_sent",
                  search_module: "explore search",
                  side_filter: "Lottery",
                  key_words: t.search,
                });
              });
          return t.onResult && t.onResult(l.list.length), l.list;
        }),
      [o, { refetch: i, mutate: w }] = P(u, n);
    E(() => {
      g(t.search),
        y.emit("search_sent", {
          search_module: "explore search",
          side_filter: "Lottery",
          key_words: t.search,
        });
    });
    const R = (a) =>
      f(void 0, null, function* () {
        if (!S.login) {
          m("/login/signin");
          return;
        }
        (a.hasLike = !a.hasLike),
          w(structuredClone(o())),
          yield Q(a.id, a.hasLike),
          i();
      });
    return (
      H(
        () => s,
        M(({ width: a }, r) => {
          if (r === s) {
            const l = Math.floor(a / 210);
            l !== e() && h(b.mobile ? 2 : l);
          }
        })
      ),
      c(T, {
        get fallback() {
          return c($, { class: "relative left-1/2 top-15" });
        },
        get children() {
          var a = V();
          return (
            D((r) => (s = r), a),
            F(
              a,
              c(N, {
                get when() {
                  var r;
                  return ((r = o()) == null ? void 0 : r.length) > 0;
                },
                get fallback() {
                  return c(A, {
                    get children() {
                      return U("There are no lotteries to display");
                    },
                  });
                },
                get children() {
                  return c(O, {
                    get each() {
                      return o();
                    },
                    children: (r, l) =>
                      c(K, {
                        data: r,
                        onClickLike: () => R(r),
                        get itemIndex() {
                          return l();
                        },
                        track: (d) => {
                          y.emit(
                            "sensorsTrack",
                            L(
                              {
                                event: "search_result_click",
                                side_filter: "Lottery",
                                is_filter_provder: !0,
                                key_words: t.search,
                              },
                              d
                            )
                          );
                        },
                      }),
                  });
                },
              })
            ),
            j(
              (r) => {
                var v;
                var l = e(),
                  d = G(
                    "mt-4 pb-10",
                    ((v = o()) == null ? void 0 : v.length) > 0 &&
                      "grid gap-2 grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))]"
                  );
                return (
                  l !== r.e &&
                    ((r.e = l) != null
                      ? a.style.setProperty("--grid-cols", l)
                      : a.style.removeProperty("--grid-cols")),
                  d !== r.t && q(a, (r.t = d)),
                  r
                );
              },
              { e: void 0, t: void 0 }
            ),
            a
          );
        },
      })
    );
  },
  se = W;
export { se as L };
