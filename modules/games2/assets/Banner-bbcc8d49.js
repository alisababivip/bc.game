import {
  C as _,
  f as g,
  u as q,
  l as p,
  e as y,
  o as H,
  i as l,
  c as d,
  S as F,
  F as J,
  w as K,
  a as C,
  b as I,
  d as B,
  A as Q,
  t as b,
} from "./manifest-a234c8a0.js";
import { c as U, M as S } from "./MoreLessBtn-6b8ac376.js";
import { d as V } from "./config-6b289bdb.js";
import { a as Y, u as Z, j as tt, a0 as et, S as rt } from "./game-a49e1f5b.js";
import { t as at } from "./i18n-611811a6.js";
import { o as nt } from "./amount-af49bfc0.js";
import { t as j, d as it } from "./debounce-9aa0a06b.js";
var A;
const st =
  ((A = function (e, r) {
    return e < r;
  }),
  function (e, r) {
    return (
      (typeof e == "string" && typeof r == "string") ||
        ((e = j(e)), (r = j(r))),
      A(e, r)
    );
  });
var ot = b('<div class="w-full overflow-hidden relative mt-2 mb-4 md:my-3 ">'),
  lt = b("<div id=game-banner>"),
  dt = b("<div> <span>");
const bt = (e) => {
  const { game: r } = Y(),
    L = Z(),
    R = tt(),
    h = r instanceof rt,
    v = h ? L.myLogs : R.myLogs,
    [c, X] = g([]),
    [z, D] = g(0),
    [n, E] = g(0),
    [M, T] = g(null),
    G = q();
  return (
    p(() => {
      const a = z();
      if (!a) return;
      const t =
        Math.round(nt([390, 1280], [4, 10], !0)(a)) + (y.mobile ? 2 : 3);
      E(t), X(et(v(), "distributeId").slice(0, t).reverse());
    }),
    p(() => {
      const a = c(),
        t = M();
      a.length > 0 &&
        t &&
        v().length > n() &&
        U(t, {
          initial: { transform: "translateX(0)" },
          animate: {
            transform: `translateX(-${(y.mobile ? 120 : 130) / n()}%)`,
          },
          transition: { duration: 0.1 },
        });
    }),
    p(() => {
      const a = new ResizeObserver(
          it(
            (m) => {
              const o = m[0];
              o && D(o.contentRect.width);
            },
            500,
            { leading: !0 }
          )
        ),
        t = document.getElementById("game-banner");
      t && a.observe(t),
        H(() => {
          a.disconnect();
        });
    }),
    (s = lt()),
    l(
      s,
      d(F, {
        get when() {
          return !c().length;
        },
        get children() {
          return d(S.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.1 },
            class:
              "flex-1 my-2 md:my-3 truncate rounded-lg text-center leading-10 bg-layer4 text-secondary sm:hover:opacity-80",
            get children() {
              return at("Game result will be displayed");
            },
          });
        },
      }),
      null
    ),
    l(
      s,
      d(F, {
        get when() {
          return c().length;
        },
        get children() {
          var a = ot();
          return (
            a.style.setProperty(
              "mask-image",
              "linear-gradient(to right, transparent 0%, black 5%)"
            ),
            l(
              a,
              d(S.div, {
                ref: (t) => T(t),
                get class() {
                  return (
                    "grid grid-auto-flow-column gap-1 overflow-x-visible " +
                    (n() ? "grid-cols-" + (n() - 1) : "grid-cols-9")
                  );
                },
                get style() {
                  return {
                    "grid-template-columns": `${Array.from(
                      { length: n() },
                      () =>
                        `calc((100% - ${n()} * ${
                          y.mobile ? "0.2rem" : "0.1rem"
                        })  / ${n() - 1})`
                    ).join(" ")}`,
                  };
                },
                get children() {
                  return d(J, {
                    get each() {
                      return c();
                    },
                    children: (t) => {
                      var $;
                      const m = r.isWin(t),
                        o = r.getResult(t),
                        N = r.config.name,
                        O = st(o.payout, 1),
                        x = e.showType || "payout",
                        u = o[x],
                        P =
                          (($ = e.getClassName) == null
                            ? void 0
                            : $.call(e, u)) || "",
                        W = h ? t.distributeId.toString() : t.distributeId;
                      return (
                        (i = dt()),
                        (f = i.firstChild),
                        (w = f.nextSibling),
                        (i.$$click = () => {
                          G(`/game-detail/${t.distributeId}`);
                        }),
                        K(i, "id", W),
                        l(
                          i,
                          () => {
                            var k;
                            return (k = e.prefix) == null
                              ? void 0
                              : k.call(e, t);
                          },
                          f
                        ),
                        l(w, () =>
                          x === "payout" || e.forceTailX ? `${u}x` : u
                        ),
                        C(() =>
                          I(
                            i,
                            B(
                              "h-8 w-[4.25rem] md:h-10 md:w-20 btn-like flex items-center justify-center rounded-lg text-center leading-10 text-primary font-semibold cursor-pointer",
                              P,
                              m === void 0 || O || N === V.name
                                ? Q.darken
                                  ? "text-[#B3BEC1] bg-[#4A5354]"
                                  : "text-[#5F6D6D] bg-[#F0F0F0]"
                                : m
                                ? "bg-brand_secondary text-primary"
                                : "bg-error"
                            )
                          )
                        ),
                        i
                      );
                      var i, f, w;
                    },
                  });
                },
              })
            ),
            a
          );
        },
      }),
      null
    ),
    C(() => I(s, B("px-2 z-10 lg:block", e.cls))),
    s
  );
  var s;
};
_(["click"]);
export { bt as B };
