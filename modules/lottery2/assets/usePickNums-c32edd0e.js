var Y = Object.defineProperty,
  q = Object.defineProperties;
var z = Object.getOwnPropertyDescriptors;
var J = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty,
  G = Object.prototype.propertyIsEnumerable;
var M = (t, e, n) =>
    e in t
      ? Y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  g = (t, e) => {
    for (var n in e || (e = {})) E.call(e, n) && M(t, n, e[n]);
    if (J) for (var n of J(e)) G.call(e, n) && M(t, n, e[n]);
    return t;
  },
  v = (t, e) => q(t, z(e));
import {
  b as H,
  e as Q,
  i as d,
  c as u,
  m as F,
  a as K,
  F as I,
  k as L,
  n as j,
  t as S,
} from "./solid-js-8ff414d5.js";
import { B as C, d as x } from "./manifest-987d6c36.js";
import { t as _ } from "./i18n-9df4b53a.js";
import { I as N } from "./LocalIcon-84e2288f.js";
var O = S('<span class="w-6 h-6 center bg-layer5 rounded-md">'),
  U = S(
    '<div><div class="head-opt relative flex items-center justify-between px-1 rounded-t-xl bg-layer3 border border-solid border-layer2"><span>/6</span></div><div class="select-box p-4 bg-layer2 rounded-b-xl"><div class=nums><div class="mb-3 text-sm font-semibold text-secondary"></div><div class="box grid grid-cols-7 gap-1.5"></div></div><div class="jackpot mt-3 pb-3"><div class="mb-3 text-sm font-semibold text-secondary"></div><div class="box grid grid-cols-7 gap-1.5">'
  ),
  V = S(
    '<div class="pick-tips bg-[transparent] rounded text-primary text-sm font-semibold py-1 px-2">'
  ),
  W = S(
    '<div><div class="picks-head flex flex-col w-full mt-4"><div class="text-primary font-extrabold text-base"></div><div class="btns flex justify-between"></div></div><div class="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth mt-3∑"><div>'
  );
function R(t) {
  return Math.ceil(Math.random() * (t || 36));
}
function T(t) {
  const e = R();
  t.find((n) => n === e) ? T(t) : t.push(e);
}
const X = function (e) {
  const n = (l) => {
      const i = e.props.nums.findIndex((p) => p === l);
      i != -1
        ? (e.props.nums.splice(i, 1),
          e.onChange({ nums: [...e.props.nums] }, e.props.index))
        : e.props.nums.length < 5 &&
          e.onChange({ nums: [...e.props.nums, l] }, e.props.index);
    },
    o = (l) => {
      e.onChange({ jackpot: l }, e.props.index);
    },
    y = e.props.nums.length + (e.props.jackpot > 0 ? 1 : 0),
    A = () => {
      e.onChange({ nums: [], jackpot: 0 }, e.props.index);
    },
    w = () => {
      const l = [];
      for (let i = 0; i < 5; i++) T(l);
      e.onChange({ nums: l, jackpot: R(10) }, e.props.index);
    },
    B = (l) => {
      const i = e.props.nums.findIndex((p) => p === l) !== -1;
      return x(
        i &&
          "active bg-[url('src/assets/lottery/ball-white.png')] text-primary_brand bg-[length:100%]"
      );
    },
    P = (l) =>
      x(
        l === e.props.jackpot &&
          "active bg-[url('src/assets/lottery/jackpot_ball.png')] bg-[length:100%] text-primary_brand"
      );
  return (() => {
    var l = U(),
      i = l.firstChild,
      p = i.firstChild,
      s = p.firstChild,
      r = i.nextSibling,
      c = r.firstChild,
      m = c.firstChild,
      b = m.nextSibling,
      k = c.nextSibling,
      a = k.firstChild,
      $ = a.nextSibling;
    return (
      d(
        i,
        u(C, {
          class: "text-secondary text-sm font-semibold",
          onClick: A,
          get children() {
            return _("Clear");
          },
        }),
        p
      ),
      d(p, y, s),
      d(
        i,
        u(C, {
          onClick: w,
          get children() {
            var f = O();
            return (
              d(
                f,
                u(N, {
                  viewBox: "0 0 16 16",
                  get class() {
                    return x(
                      "w-4 h-4",
                      !e.props.error &&
                        e.props.jackpot &&
                        e.props.nums.length >= 5
                        ? "fill-brand"
                        : "fill-primary"
                    );
                  },
                  name: "QuickPick",
                })
              ),
              f
            );
          },
        }),
        null
      ),
      d(m, () => _("Choose __num__ numbers", { num: 5 })),
      d(
        b,
        u(I, {
          get each() {
            return new Array(36).fill(null);
          },
          children: (f, h) =>
            u(C, {
              get class() {
                return x(
                  B(h() + 1),
                  "w-10 h-10 text-center rounded-full bg-layer3 text-base font-extrabold"
                );
              },
              onClick: () => n(h() + 1),
              get children() {
                return h() + 1;
              },
            }),
        })
      ),
      d(a, () => _("Choose __num__ Jackpot Ball", { num: 1 })),
      d(
        $,
        u(I, {
          get each() {
            return new Array(10).fill(null);
          },
          children: (f, h) =>
            u(C, {
              get class() {
                return x(
                  P(h() + 1),
                  "w-10 h-10 text-center rounded-full bg-layer3 text-base font-extrabold"
                );
              },
              onClick: () => o(h() + 1),
              get children() {
                return h() + 1;
              },
            }),
        })
      ),
      L(
        (f) => {
          var h = x(
              "min-w-[320px] bg-layer3 rounded-xl",
              e.className,
              !e.props.check && "disabled",
              !e.props.check &&
                "after:cursor-not-allowed after:absolute after:left-0 after:block"
            ),
            D = x(e.props.error && "text-error");
          return h !== f.e && j(l, (f.e = h)), D !== f.t && j(p, (f.t = D)), f;
        },
        { e: void 0, t: void 0 }
      ),
      l
    );
  })();
};
function Z(t) {
  return new Array(10)
    .fill(null)
    .map((e, n) => ({
      nums: [],
      jackpot: 0,
      index: n,
      check: n <= t - 1,
      error: !1,
    }));
}
function le(t, e) {
  let n = t();
  const [o, y] = H({ list: Z(t()), error: !1 });
  Q(() => {
    if (n !== t()) {
      n = t();
      const s = o().list.map((r) => v(g({}, r), { check: r.index <= t() - 1 }));
      y({ list: s, error: !1 });
    }
  });
  function A(s, r) {
    const c = o().list.find((m) => m.index === r);
    if (c && c.check) {
      const m = [...o().list],
        b = g(g({}, c), s),
        k = b.nums.length + (b.jackpot > 0 ? 1 : 0),
        a = k > 0 && k < 6;
      m.splice(r, 1, v(g({}, b), { error: a })), y(v(g({}, o()), { list: m }));
    }
  }
  function w() {
    const s = o().list.map((r) => {
      if (r.check) {
        const c = [];
        for (let m = 0; m < 5; m++) T(c);
        return v(g({}, r), { nums: c, jackpot: R(10), error: !1 });
      } else return r;
    });
    y(v(g({}, o()), { list: s }));
  }
  function B() {
    const s = o().list.map((r) =>
      v(g({}, r), { nums: [], jackpot: 0, error: !1 })
    );
    y(v(g({}, o()), { list: s }));
  }
  const P = Q(() =>
      o().list.reduce(
        (s, r) => (r.check && r.jackpot && !r.error ? s + 1 : s),
        0
      )
    ),
    l = (s) => s.reduce((r, c) => (c.check ? r + 1 : r), 0),
    i = (() => {
      var s = W(),
        r = s.firstChild,
        c = r.firstChild,
        m = c.nextSibling,
        b = r.nextSibling,
        k = b.firstChild;
      return (
        d(c, () =>
          _("Completed __num__ / __total__ Ticket(s)", {
            num: P(),
            total: l(o().list),
          })
        ),
        d(
          m,
          u(C, {
            class: "text-secondary font-semibold text-sm px-0",
            onClick: B,
            get children() {
              return [
                u(N, {
                  name: "Trash",
                  class: "fill-secondary w-4 mr-1",
                  viewBox: "0 0 16 16",
                }),
                F(() => _("Clear All")),
              ];
            },
          }),
          null
        ),
        d(
          m,
          u(C, {
            class: "text-brand font-extrabold text-sm px-0",
            onClick: w,
            get children() {
              return [
                u(N, {
                  viewBox: "0 0 16 16",
                  class: "w-4 h-4 mr-1",
                  name: "QuickPick",
                }),
                " ",
                F(() => _("Quick Pick")),
              ];
            },
          }),
          null
        ),
        d(
          s,
          u(K, {
            get when() {
              return l(o().list) >= 10;
            },
            get children() {
              var a = V();
              return (
                d(a, () =>
                  _(
                    "You can only handpick __num__ tickets of your own numbers, we will automatically generate the rest of the tickets.",
                    { num: 10 }
                  )
                ),
                a
              );
            },
          }),
          b
        ),
        d(
          k,
          u(I, {
            get each() {
              return o().list;
            },
            children: (a) => (a.check ? u(X, { props: a, onChange: A }) : null),
          })
        ),
        L(
          (a) => {
            var $ = x(
                "pick-nums-wrap",
                "flex items-center justify-between flex-wrap"
              ),
              f = x(
                "picks-list pb-5 flex justify-start gap-4 sm:grid sm:grid-cols-2 sm:gap-2",
                e
              );
            return (
              $ !== a.e && j(s, (a.e = $)), f !== a.t && j(k, (a.t = f)), a
            );
          },
          { e: void 0, t: void 0 }
        ),
        s
      );
    })(),
    p = o().list.find((s) => s.check && s.error);
  return { setRandom: w, view: i, data: o, error: !!p };
}
export { le as u };
