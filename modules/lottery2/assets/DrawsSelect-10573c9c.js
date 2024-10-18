import {
  p as _,
  e as c,
  c as b,
  F as I,
  i as D,
  k as w,
  n as g,
  t as f,
  b as B,
} from "./solid-js-8ff414d5.js";
import { p as r } from "./store-de20ba30.js";
import { d as h, S as $ } from "./manifest-987d6c36.js";
import { p as u } from "./store-2ed2b91e.js";
var x = f("<div><div>");
const k = (l) => {
  const n = c(() => l.numbs.filter((t) => !!t)),
    d = function (t) {
      const e = l.selectMode === "normal" ? "normalBallList" : "bonusBallList";
      return r.state.BetItem.selectedDetailData[e].includes(t);
    },
    o = function (t) {
      l.inSelect && l.onSelectedChange && l.onSelectedChange(t);
    },
    i =
      l.selectMode === "normal"
        ? "bg-[url('/src/assets/lottery/ball-white.png')] text-primary_brand"
        : "bg-[url('/src/assets/lottery/jackpot_ball.png')] text-primary_brand";
  return b(I, {
    get each() {
      return n();
    },
    children: (t) =>
      (() => {
        var e = x(),
          a = e.firstChild;
        return (
          (e.$$click = () => o(Number(t))),
          D(a, t),
          w(
            (s) => {
              var v = h(
                  "w-10 h-10 center flex-none inline-flex rounded-full transition-all duration-500 ease-out cursor-pointer bg-layer3 bg-contain",
                  l.inSelect ? "hover:scale-125" : i,
                  l.selectMode,
                  l.class || "",
                  d(Number(t)) && i
                ),
                S = h("center rounded-full font-extrabold text-sm");
              return (
                v !== s.e && g(e, (s.e = v)), S !== s.t && g(a, (s.t = S)), s
              );
            },
            { e: void 0, t: void 0 }
          ),
          e
        );
      })(),
  });
};
_(["click"]);
const T = new Map([
    [1, 10],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
  ]),
  m = [
    { label: "$0.50", value: 0.5 },
    { label: "$1.00", value: 1 },
    { label: "$5.00", value: 5 },
    { label: "$10.00", value: 10 },
    { label: "$50.00", value: 50 },
    { label: "$100.00", value: 100 },
  ];
var A = f('<label class="text-primary text-base font-semibold">');
function E(l) {
  const n = c(
      () =>
        m.find((e) => {
          var a;
          return (
            e.value ===
            Number(
              (a = l.data) == null
                ? void 0
                : a.betItem.selectedDetailData.betAmount
            )
          );
        }) || m[3]
    ),
    [d, o] = B(n()),
    i = c(() =>
      l.data
        ? l.data.betItem.selectedDetailData.discount
        : r.state.BetItem.selectedDetailData.discount
    );
  return (
    c(() => i() > 0),
    b($, {
      class: "bg-input_bright",
      get value() {
        return d();
      },
      options: m,
      onChange: (t) => {
        o(t),
          l.data
            ? r.setState(
                "Betlist",
                (e) => {
                  var a;
                  return e.id === ((a = l.data) == null ? void 0 : a.id);
                },
                u((e) => {
                  e.betItem.selectedDetailData.betAmount = t.value;
                })
              )
            : r.setState(
                "BetItem",
                u((e) => {
                  e.selectedDetailData.betAmount = t.value;
                })
              );
      },
      children: (t) =>
        (() => {
          var e = A();
          return D(e, () => t().label), e;
        })(),
    })
  );
}
var L = f('<label class="text-primary text-base font-semibold">');
function O(l) {
  const n = c(() => (l.data ? l.data.totalDrawsList : r.state.TotalDrawsList));
  c(() =>
    l.data
      ? l.data.betItem.selectedDetailData.discount
      : r.state.BetItem.selectedDetailData.discount
  );
  const d = c(
      () =>
        n().find((e) => {
          var a;
          return (
            e.value ===
            ((a = l.data) == null ? void 0 : a.betItem.selectedDetailData.draws)
          );
        }) || n()[0]
    ),
    [o, i] = B(d());
  return b($, {
    class: "bg-input_bright",
    get value() {
      return o();
    },
    get options() {
      return n();
    },
    onChange: (t) => {
      const e = n().find((a) => a.value === t.value);
      i(t),
        l.data
          ? r.setState(
              "Betlist",
              (a) => {
                var s;
                return a.id === ((s = l.data) == null ? void 0 : s.id);
              },
              u((a) => {
                (a.betItem.selectedDetailData.draws = Number(t.value)),
                  (a.betItem.selectedDetailData.discount =
                    (e == null ? void 0 : e.discount) || 0);
              })
            )
          : r.setState(
              "BetItem",
              u((a) => {
                (a.selectedDetailData.draws = Number(t.value)),
                  (a.selectedDetailData.discount =
                    (e == null ? void 0 : e.discount) || 0);
              })
            );
    },
    children: (t) =>
      (() => {
        var e = L();
        return (
          D(e, () => {
            var a;
            return (a = t()) == null ? void 0 : a.label;
          }),
          e
        );
      })(),
  });
}
export { E as B, O as D, k as L, T as S };
