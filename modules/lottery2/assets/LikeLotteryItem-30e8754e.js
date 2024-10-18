import {
  i as r,
  c as a,
  a as f,
  m as S,
  k as B,
  n as j,
  t as c,
  p as E,
} from "./solid-js-8ff414d5.js";
import { c as g } from "./index-4d3ecff0.js";
import { u as P, c as T, B as y, d as D, j as V } from "./manifest-987d6c36.js";
import { a as v } from "./CountryAvatar-9bf00e0a.js";
import { t as n } from "./i18n-9df4b53a.js";
var A = c(
    '<label class="center h-6 leading-6 -mr-3 text-primary text-xs font-extrabold border-l border-t border-b border-brand rounded-tl-3xl rounded-bl-3xl pl-2.5 pr-5 whitespace-nowrap">'
  ),
  M = c("<span>"),
  W = c(
    '<section class="favouriteSectionItemWrap flex flex-col justify-between h-[188px] p-3 rounded-xl bg-layer4 overflow-hidden cursor-pointer"><div class="relative grid grid-cols-2"><span class="inline-flex items-center justify-center w-6 h-6 cursor-pointer rounded-lg like_layer"><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"class=fill-brand><path d="M7.59192 13.0004L4.86962 14.4953C4.44121 14.7301 3.91174 14.5587 3.68686 14.1113C3.59719 13.9334 3.56635 13.7292 3.59861 13.531L4.11859 10.3648C4.16746 10.068 4.07305 9.76527 3.86667 9.55518L1.66435 7.31305C1.31802 6.96026 1.3109 6.38102 1.64869 6.01931C1.78343 5.87512 1.95945 5.78147 2.15017 5.75273L5.19366 5.29093C5.47879 5.24782 5.7255 5.06053 5.85312 4.79048L7.21427 1.91016C7.42824 1.45727 7.95344 1.27097 8.38754 1.49444C8.56024 1.58363 8.70019 1.7293 8.78559 1.91016L10.1467 4.79048C10.2744 5.06053 10.5211 5.24782 10.8062 5.29093L13.8497 5.75273C14.3284 5.82557 14.66 6.28985 14.5908 6.78981C14.5632 6.989 14.4731 7.17283 14.3355 7.31355L12.1332 9.55567C11.9268 9.76576 11.8324 10.0685 11.8813 10.3653L12.4012 13.5315C12.4828 14.0295 12.1626 14.5022 11.6858 14.5879C11.496 14.6221 11.3006 14.5894 11.1302 14.4958L8.40794 13.0009C8.1527 12.8606 7.84811 12.8606 7.59287 13.0009L7.59192 13.0004Z"></path></svg></span><div></div></div><div class="draw-title text-primary text-sm font-extrabold flex justify-center text-center"><label class=line-clamp-2></label></div><div class="draw-time text-xs font-semibold text-secondary flex justify-center break-keep border-t border-solid border-third pt-3"><span class=ml-0.5><span>h</span><span>m</span><span>s</span></span></div><div class="btn-box flex gap-2 ">'
  ),
  Z = c("<span class=-translate-x-1/2>");
function J(e) {
  const w = P(),
    m = T(() => e.data.drawTime),
    o = (l, i) => {
      const d = i
        ? `/lottery/detail/${l.lotteryId}?type=${i}`
        : `/lottery/detail/${l.lotteryId}`;
      w(d),
        V.emit("sensorsTrack", {
          event: "lottery_click",
          lottery_id: l.lotteryId,
          lottery_name: l.lotteryName,
          item_type: "lottery",
          item_id: l.lotteryId,
        });
    };
  return (() => {
    var l = W(),
      i = l.firstChild,
      d = i.firstChild,
      _ = d.nextSibling,
      h = i.nextSibling,
      k = h.firstChild,
      u = h.nextSibling,
      p = u.firstChild,
      x = p.firstChild,
      L = x.firstChild,
      b = x.nextSibling,
      I = b.firstChild,
      C = b.nextSibling,
      N = C.firstChild,
      $ = u.nextSibling;
    return (
      (l.$$click = (t) => {
        t.stopPropagation(), o(e.data);
      }),
      (d.$$click = (t) => {
        t.stopPropagation(), e.onClickLike(e.data);
      }),
      r(
        _,
        a(f, {
          get when() {
            return e.data.lotteryId === "0";
          },
          get fallback() {
            return (() => {
              var t = Z();
              return (
                r(
                  t,
                  a(v, {
                    get country() {
                      return e.data.lotteryCountry;
                    },
                  })
                ),
                t
              );
            })();
          },
          get children() {
            return [
              (() => {
                var t = A();
                return r(t, () => n("__ENV_SITE__ Exclusive")), t;
              })(),
              (() => {
                var t = M();
                return r(t, a(v, { country: "Bc" })), t;
              })(),
            ];
          },
        })
      ),
      r(
        k,
        (() => {
          var t = S(() => {
            var s;
            return ((s = e.data) == null ? void 0 : s.lotteryId) === "0";
          });
          return () => {
            var s;
            return t()
              ? n("__ENV_SITE__ Lottery")
              : e.data.lotteryName ||
                  ((s = e.data) == null ? void 0 : s.name) ||
                  "";
          };
        })()
      ),
      r(u, () => n("Next Draw in"), p),
      r(
        x,
        () => {
          var t;
          return g((t = m()) == null ? void 0 : t.hours);
        },
        L
      ),
      r(
        b,
        () => {
          var t;
          return g((t = m()) == null ? void 0 : t.minutes);
        },
        I
      ),
      r(
        C,
        () => {
          var t;
          return g((t = m()) == null ? void 0 : t.seconds);
        },
        N
      ),
      r(
        $,
        a(f, {
          get when() {
            return e.data.lotteryId === "0";
          },
          get children() {
            return a(y, {
              class:
                "min-h-8 h-fit bg-black_alpha5 dark:bg-layer6 w-full text-primary text-sm font-extrabold p-0",
              onClick: (t) => {
                t.stopPropagation(), o(e.data);
              },
              get children() {
                return n("Bet Now");
              },
            });
          },
        }),
        null
      ),
      r(
        $,
        a(f, {
          get when() {
            return e.data.lotteryId !== "0";
          },
          get children() {
            return [
              a(y, {
                class:
                  "min-h-8 h-fit w-1/2 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold p-0",
                onClick: (t) => {
                  t.stopPropagation(), o(e.data, "2");
                },
                get children() {
                  return n("Bet 2 balls");
                },
              }),
              a(y, {
                class:
                  "min-h-8 h-fit w-1/2 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold p-0",
                onClick: (t) => {
                  t.stopPropagation(), o(e.data, "3");
                },
                get children() {
                  return n("Bet 3 balls");
                },
              }),
            ];
          },
        }),
        null
      ),
      B(() =>
        j(
          _,
          D("flex", e.data.lotteryId === "0" ? "justify-end" : "justify-start")
        )
      ),
      l
    );
  })();
}
E(["click"]);
export { J as L };
