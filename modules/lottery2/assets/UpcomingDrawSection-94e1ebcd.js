var H = Object.defineProperty,
  M = Object.defineProperties;
var W = Object.getOwnPropertyDescriptors;
var T = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty,
  K = Object.prototype.propertyIsEnumerable;
var B = (e, r, a) =>
    r in e
      ? H(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[r] = a),
  _ = (e, r) => {
    for (var a in r || (r = {})) J.call(r, a) && B(e, a, r[a]);
    if (T) for (var a of T(r)) K.call(r, a) && B(e, a, r[a]);
    return e;
  },
  w = (e, r) => M(e, W(r));
var N = (e, r, a) =>
  new Promise((l, u) => {
    var n = (d) => {
        try {
          g(a.next(d));
        } catch (t) {
          u(t);
        }
      },
      b = (d) => {
        try {
          g(a.throw(d));
        } catch (t) {
          u(t);
        }
      },
      g = (d) => (d.done ? l(d.value) : Promise.resolve(d.value).then(n, b));
    g((a = a.apply(e, r)).next());
  });
import {
  g as Q,
  c as m,
  S as A,
  i as s,
  a as S,
  t as y,
  d as D,
  q as X,
  k as Y,
  n as Z,
  h as ee,
  p as te,
} from "./solid-js-8ff414d5.js";
import { u as ae } from "./currency-1e153f43.js";
import { r as P, c as $ } from "./index-4d3ecff0.js";
import { c as re } from "./CountryAvatar-9bf00e0a.js";
import {
  g as ie,
  M as ne,
  e as F,
  u as le,
  c as se,
  y as de,
  j as z,
  B as oe,
  d as ce,
  s as me,
} from "./manifest-987d6c36.js";
import { d as f } from "./lottery-40ce25b9.js";
import { t as k } from "./i18n-9df4b53a.js";
import { t as ge } from "./throttle-e4f3954e.js";
import "./countries-18533370.js";
import "./debounce-f7740f4e.js";
import "./isObject-909534d5.js";
import "./toNumber-e58af95e.js";
var ue = y(
    '<div class="bet-closed text-primary text-sm font-semibold text-center">Closed'
  ),
  be = y(
    '<section><div class="upcoming-draw-item-logo-box w-20 h-20 absolute top-0 right-0 flex items-center justify-center rounded-[50%] translate-x-1/4 -translate-y-1/4 bg-layer2"></div><div class="bet-address h-10 text-primary text-sm font-semibold w-8/12 line-clamp-2 text-ellipsis"></div><div class="text-primary text-lg italic font-extrabold mt-1"></div><div class="h-px bg-[rgba(153,164,176,0.2)] m-0 my-2"></div><div class="text-secondary text-xs font-semibold"></div><div class="bet-next-draw-date mt-2 mb-3 flex justify-between"><span class="w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10">h</span><label class="w-3 flex items-center justify-center">:</label><span class="bet-date w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10 ">m</span><label class="w-3 flex items-center justify-center">:</label><span class="w-[calc(33.3%-8px)] h-6 inline-flex items-center justify-center rounded text-sm font-semibold bg-black_alpha10">s'
  ),
  fe = y("<div class=size-full>"),
  ye = y("<div>");
const xe = function (e) {
  if (!e.data) return "";
  const r = le(),
    a = ae(),
    l = se(() => e.data.drawTime);
  let u;
  const n = {},
    b = de({ threshold: 0.5 })(() => u);
  D(() => {
    b() &&
      !n[e.data.id] &&
      (z.emit(
        "sensorsTrack",
        w(_({ event: "lottery_show" }, P(e.data, ["id"])), {
          item_type: "lottery",
          item_id: e.data.id,
          module_sort: e.itemIndex,
          lottery_id: e.data.id,
          lottery_name: e.data.name,
        })
      ),
      (n[e.data.id] = e.data.id));
  }, b());
  const g = (t) => {
      r(`/lottery/detail/${t.id}`),
        z.emit(
          "sensorsTrack",
          w(_({ event: "lottery_click" }, P(t, ["id"])), {
            lottery_id: t.id,
            lottery_name: t.name,
            item_type: "lottery",
            item_id: t.id,
          })
        );
    },
    d = (t) => {
      const o = me.darken ? "#323738" : "#FFF";
      let c = `linear-gradient(180deg, rgba(244, 62, 139, 0.00) 0%, rgba(244, 62, 139, 0.60) 100%), ${o}`;
      return (
        t % 5 === 0
          ? (c = `linear-gradient(180deg, rgba(244, 62, 139, 0.00) 0%, rgba(244, 62, 139, 0.60) 100%), ${o}`)
          : t % 5 === 1
          ? (c = `linear-gradient(180deg, rgba(244, 182, 62, 0.00) 0%, rgba(244, 182, 62, 0.60) 100%), ${o}`)
          : t % 5 === 2
          ? (c = `linear-gradient(180deg, rgba(230, 246, 44, 0.00) 0%, rgba(230, 246, 44, 0.60) 100%), ${o}`)
          : t % 5 === 3
          ? (c = `linear-gradient(180deg, rgba(44, 246, 89, 0.00) 0%, rgba(44, 246, 89, 0.60) 100%), ${o}`)
          : t % 5 === 4 &&
            (c = `linear-gradient(180deg, rgba(44, 125, 246, 0.00) 0%, rgba(44, 125, 246, 0.60) 100%), ${o}`),
        c
      );
    };
  return (
    D(() => {
      f(l()) && e.timeBack();
    }),
    m(A, {
      get children() {
        var t = be(),
          o = t.firstChild,
          c = o.nextSibling,
          p = c.nextSibling,
          L = p.nextSibling,
          C = L.nextSibling,
          V = C.nextSibling,
          x = V.firstChild,
          O = x.firstChild,
          R = x.nextSibling,
          h = R.nextSibling,
          U = h.firstChild,
          q = h.nextSibling,
          j = q.nextSibling,
          G = j.firstChild;
        return (
          (t.$$click = () => g(e.data)),
          X((i) => (u = i), t),
          s(
            o,
            m(re, {
              get country() {
                return e.data.id === "0" ? "Bc" : e.data.country;
              },
            })
          ),
          s(c, () => e.data.name),
          s(p, () => a(e.data.topPrize)),
          s(C, () => k("Next Draw Starts in")),
          s(
            x,
            () => {
              var i;
              return $((i = l()) == null ? void 0 : i.hours);
            },
            O
          ),
          s(
            h,
            () => {
              var i;
              return $((i = l()) == null ? void 0 : i.minutes);
            },
            U
          ),
          s(
            j,
            () => {
              var i;
              return $((i = l()) == null ? void 0 : i.seconds);
            },
            G
          ),
          s(
            t,
            m(S, {
              get when() {
                return !f(l());
              },
              get children() {
                return m(oe, {
                  type: "brand",
                  class: "bet-btn text-white rounded-lg w-full h-9",
                  get children() {
                    return k("Bet Now");
                  },
                });
              },
            }),
            null
          ),
          s(
            t,
            m(S, {
              get when() {
                return f(l());
              },
              get children() {
                return ue();
              },
            }),
            null
          ),
          Y(
            (i) => {
              var E = ce(
                  "lotterySectionItemStyleWrap min-h-52 relative flex flex-col justify-between to w-full rounded-xl p-3 text-primary overflow-hidden cursor-pointer",
                  f(l()) && "grayscale"
                ),
                v = d(e.itemIndex || 0),
                I = e.data.id;
              return (
                E !== i.e && Z(t, (i.e = E)),
                v !== i.t &&
                  ((i.t = v) != null
                    ? t.style.setProperty("background", v)
                    : t.style.removeProperty("background")),
                I !== i.a && ee(t, "id", (i.a = I)),
                i
              );
            },
            { e: void 0, t: void 0, a: void 0 }
          ),
          t
        );
      },
    })
  );
};
function Be(e) {
  const r = Array(6).fill({
      id: "0",
      name: k("__ENV_SITE__ Lottery"),
      topPrize: 1e5,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }),
    [a, { refetch: l }] = Q(
      () =>
        N(this, null, function* () {
          const n = "/platform-lottery/lottery-info/list-upcoming";
          return ie()
            .get(n)
            .catch((b) => console.log);
        }),
      { initialValue: r }
    ),
    u = ge(function () {
      l();
    }, 3e3);
  return m(A, {
    get children() {
      return m(ne, {
        class: "-mx-4 sm:mx-0",
        get scrollPadding() {
          return F.mobile ? 16 : 0;
        },
        ref: (n) => {
          e.callback && e.callback(n);
        },
        get width() {
          return F.mobile ? 210 : 240;
        },
        height: 210,
        get data() {
          return a();
        },
        rows: 1,
        children: (n, b) =>
          (() => {
            var g = fe();
            return (
              s(
                g,
                m(S, {
                  get when() {
                    return n();
                  },
                  get fallback() {
                    return ye();
                  },
                  get children() {
                    return m(xe, {
                      get data() {
                        return n();
                      },
                      timeBack: u,
                      get itemIndex() {
                        return b();
                      },
                    });
                  },
                })
              ),
              g
            );
          })(),
      });
    },
  });
}
te(["click"]);
export { Be as default };
