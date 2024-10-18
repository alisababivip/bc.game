var H = Object.defineProperty,
  J = Object.defineProperties;
var K = Object.getOwnPropertyDescriptors;
var z = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty,
  U = Object.prototype.propertyIsEnumerable;
var A = (e, l, a) =>
    l in e
      ? H(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[l] = a),
  v = (e, l) => {
    for (var a in l || (l = {})) Q.call(l, a) && A(e, a, l[a]);
    if (z) for (var a of z(l)) U.call(l, a) && A(e, a, l[a]);
    return e;
  },
  C = (e, l) => J(e, K(l));
import {
  d as X,
  q as Y,
  i as n,
  c as s,
  a as D,
  h as G,
  m as ee,
  k as te,
  n as ie,
  t as p,
  p as le,
} from "./solid-js-8ff414d5.js";
import { r as O, c as w } from "./index-4d3ecff0.js";
import { u as ae } from "./currency-1e153f43.js";
import { a as re } from "./CountryAvatar-9bf00e0a.js";
import {
  u as ne,
  c as se,
  y as de,
  j as V,
  B as $,
  d as u,
  s as d,
} from "./manifest-987d6c36.js";
import { b as oe } from "./logo-a74fb622.js";
import { t as o } from "./i18n-9df4b53a.js";
var ce = p(
    '<label class="center h-6 leading-6 -mr-3 text-primary text-xs font-extrabold border-l border-t border-b border-brand rounded-tl-3xl rounded-bl-3xl pl-2.5 pr-5 whitespace-nowrap">'
  ),
  me = p('<img class="relative w-6 min-w-6 h-6 overflow-hidden"loading=lazy>'),
  _e = p(
    '<section><div class="flex justify-between"><span class="inline-flex items-center justify-center w-6 h-6 cursor-pointer rounded-lg like_layer"><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"><path d="M7.59192 13.0004L4.86962 14.4953C4.44121 14.7301 3.91174 14.5587 3.68686 14.1113C3.59719 13.9334 3.56635 13.7292 3.59861 13.531L4.11859 10.3648C4.16746 10.068 4.07305 9.76527 3.86667 9.55518L1.66435 7.31305C1.31802 6.96026 1.3109 6.38102 1.64869 6.01931C1.78343 5.87512 1.95945 5.78147 2.15017 5.75273L5.19366 5.29093C5.47879 5.24782 5.7255 5.06053 5.85312 4.79048L7.21427 1.91016C7.42824 1.45727 7.95344 1.27097 8.38754 1.49444C8.56024 1.58363 8.70019 1.7293 8.78559 1.91016L10.1467 4.79048C10.2744 5.06053 10.5211 5.24782 10.8062 5.29093L13.8497 5.75273C14.3284 5.82557 14.66 6.28985 14.5908 6.78981C14.5632 6.989 14.4731 7.17283 14.3355 7.31355L12.1332 9.55567C11.9268 9.76576 11.8324 10.0685 11.8813 10.3653L12.4012 13.5315C12.4828 14.0295 12.1626 14.5022 11.6858 14.5879C11.496 14.6221 11.3006 14.5894 11.1302 14.4958L8.40794 13.0009C8.1527 12.8606 7.84811 12.8606 7.59287 13.0009L7.59192 13.0004Z"></path></svg></span><div class="flex items-center"></div></div><div class="draw-time text-xs font-semibold text-secondary mt-2 flex justify-start break-keep truncate"><span class=ml-0.5><span>h</span><span>m</span><span>s</span></span></div><div class="draw-titledraw-title text-primary text-sm font-extrabold my-2 flex justify-start"><label class=line-clamp-2></label></div><div class="prize-box flex justify-between"><label class="prize-desc font-semibold text-secondary text-xs"></label><label class="text-primary text-sm italic font-extrabold"></label></div><div class="btn-box mt-2 flex gap-2">'
  );
function Ce(e) {
  const l = ne(),
    a = ae(),
    b = se(() => e.data.drawTime),
    g = ["ja", "tl", "ar", "pl", "it", "my", "te"],
    _ = (i, c) => {
      const m = c
        ? `/lottery/detail/${i.id}?type=${c}`
        : `/lottery/detail/${i.id}`;
      l(m), e.onGameClick && e.onGameClick();
      const x = {
        exp_id: i.exp_id,
        item_id: i.item_id,
        item_type: i.item_type,
        log_id: i.log_id,
        retrieve_id: i.retrieve_id,
        section_id: i.section_id,
        strategy_id: i.strategy_id,
      };
      V.emit(
        "sensorsTrack",
        C(v({ event: "lottery_click" }, O(x)), {
          lottery_id: i.id,
          lottery_name: i.name,
          item_id: i.item_id || i.id || i.lotteryId,
          item_type: i.item_type || "lottery",
        })
      ),
        e.track &&
          e.track({
            game_id: i.id,
            game_name: i.name,
            item_id: i.item_id || i.id || i.lotteryId,
            item_type: i.item_type || "lottery",
          });
    };
  let k;
  const L = {},
    S = de({ threshold: 0.5 })(() => k);
  return (
    X(() => {
      S() &&
        !L[e.data.id] &&
        (V.emit(
          "sensorsTrack",
          C(v({ event: "lottery_show" }, O(e.data, ["id"])), {
            item_type: "lottery",
            item_id: e.data.id,
            module_sort: e.itemIndex,
            lottery_id: e.data.id,
            lottery_name: e.data.name,
          })
        ),
        (L[e.data.id] = e.data.id));
    }, S()),
    (() => {
      var i = _e(),
        c = i.firstChild,
        m = c.firstChild,
        x = m.firstChild,
        j = m.nextSibling,
        y = c.nextSibling,
        P = y.firstChild,
        f = P.firstChild,
        q = f.firstChild,
        h = f.nextSibling,
        F = h.firstChild,
        B = h.nextSibling,
        M = B.firstChild,
        I = y.nextSibling,
        R = I.firstChild,
        N = I.nextSibling,
        E = N.firstChild,
        W = E.nextSibling,
        Z = N.nextSibling;
      return (
        (i.$$click = (t) => {
          t.stopPropagation(), _(e.data);
        }),
        Y((t) => (k = t), i),
        (m.$$click = (t) => {
          t.stopPropagation(), e.onClickLike(e.data);
        }),
        n(
          j,
          s(D, {
            get when() {
              var t;
              return ((t = e.data) == null ? void 0 : t.id) === "0";
            },
            get children() {
              return [
                (() => {
                  var t = ce();
                  return n(t, () => o("__ENV_SITE__ Exclusive")), t;
                })(),
                (() => {
                  var t = me();
                  return G(t, "src", oe), t;
                })(),
              ];
            },
          }),
          null
        ),
        n(
          j,
          s(D, {
            get when() {
              var t;
              return ((t = e.data) == null ? void 0 : t.id) !== "0";
            },
            get children() {
              return s(re, {
                get country() {
                  return e.data.country;
                },
              });
            },
          }),
          null
        ),
        n(y, () => o("Next Draw in"), P),
        n(
          f,
          () => {
            var t;
            return w((t = b()) == null ? void 0 : t.hours);
          },
          q
        ),
        n(
          h,
          () => {
            var t;
            return w((t = b()) == null ? void 0 : t.minutes);
          },
          F
        ),
        n(
          B,
          () => {
            var t;
            return w((t = b()) == null ? void 0 : t.seconds);
          },
          M
        ),
        n(R, () => e.data.name),
        n(E, () => o("Top prize")),
        n(W, () => a(e.data.topPrize)),
        n(
          Z,
          (() => {
            var t = ee(() => {
              var r;
              return ((r = e.data) == null ? void 0 : r.id) === "0";
            });
            return () =>
              t()
                ? s($, {
                    get class() {
                      return u(
                        "min-h-8 h-fit w-full text-primary text-sm font-extrabold p-0 bg-black_alpha5 dark:bg-layer6",
                        g.includes(d.lang) && "!h-12",
                        d.lang === "ta" && "!h-16"
                      );
                    },
                    onClick: (r) => {
                      r.stopPropagation(), _(e.data);
                    },
                    get children() {
                      return o("Bet Now");
                    },
                  })
                : [
                    s($, {
                      get class() {
                        return u(
                          "min-h-8 h-fit w-1/2  bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold py-1 px-0",
                          g.includes(d.lang) && "!h-12",
                          d.lang === "ta" && "!h-16"
                        );
                      },
                      onClick: (r) => {
                        r.stopPropagation(), _(e.data, "2");
                      },
                      get children() {
                        return o("Bet 2 balls");
                      },
                    }),
                    s($, {
                      get class() {
                        return u(
                          "min-h-8 h-fit w-1/2 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold py-1 px-0",
                          g.includes(d.lang) && "!h-12",
                          d.lang === "ta" && "!h-16"
                        );
                      },
                      onClick: (r) => {
                        r.stopPropagation(), _(e.data, "3");
                      },
                      get children() {
                        return o("Bet 3 balls");
                      },
                    }),
                  ];
          })()
        ),
        te(
          (t) => {
            var r = u(
                "popularSectionItemWrap h-52 p-3 rounded-xl bg-layer4 flex flex-col justify-between cursor-pointer",
                e.class
              ),
              T = e.data.hasLike ? "fill-brand" : "fill-tertiary";
            return (
              r !== t.e && ie(i, (t.e = r)),
              T !== t.t && G(x, "class", (t.t = T)),
              t
            );
          },
          { e: void 0, t: void 0 }
        ),
        i
      );
    })()
  );
}
le(["click"]);
export { Ce as P };
