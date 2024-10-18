var h = (t, n, i) =>
  new Promise((a, s) => {
    var o = (r) => {
        try {
          u(i.next(r));
        } catch (e) {
          s(e);
        }
      },
      c = (r) => {
        try {
          u(i.throw(r));
        } catch (e) {
          s(e);
        }
      },
      u = (r) => (r.done ? a(r.value) : Promise.resolve(r.value).then(o, c));
    u((i = i.apply(t, n)).next());
  });
import {
  p as w,
  y as k,
  R as x,
  H as g,
  f as q,
  i as d,
  c as p,
  av as U,
  u as C,
  S as I,
  m as v,
  B as j,
  t as y,
} from "./manifest-a234c8a0.js";
import { G } from "./config-6b289bdb.js";
import { t as f } from "./i18n-611811a6.js";
import { G as S } from "./GameFairnessFile-649b25ea.js";
var _ = y(
    '<div class="p-2 ml-2 mt-2 pb-14"id=game2-provably-fair><section class="flex gap-6 sm:w-80 items-center"><p class="!text-primary font-extrabold"></p></section><p class="mt-4 mb-4 !text-primary font-extrabold">'
  ),
  D = y("<span class=font-extrabold>");
const L = /^http.*/,
  N = {
    crash: "crash",
    cave: "cave",
    "classic-dice": "classicdice",
    coinflip: "coinflip",
    "hash-dice": "hashdice",
    hilo: "hilo",
    "keno-multiplayer": "kemomultiplayer",
    keno: "general",
    mines: "mines",
    plinko: "plinko",
    limbo: "limbo",
    "roulette-single": "roulettesingle",
    "tower-legend": "tower",
    "ultimate-dice": "ultimatedice",
    "video-poker": "videopoker",
    wheel: "wheel",
    blackjack: "blackjack",
    egyptian: "egyptian",
    "oriental-beauties": "beauties",
    roulettemultiplayer: "roulettemultiplayer",
    sword: "sword",
    twist: "twist",
    double: "double",
    fastparity: "parity",
  };
function P() {
  return new Promise((t) => {
    w.emit("get_device_info", t);
  });
}
function z() {
  return h(this, null, function* () {
    const { areaCode: t, distinctId: n } = yield P();
    return k().post("/home/rec/entry/", {
      areaCode: t,
      sectionId: "casino_bc",
      distinctId: n,
      pageSize: 100,
    });
  });
}
const E = () => {
  const [t] = x(() => z()),
    n =
      g(() => {
        var e, l, m;
        return (m =
          (l = (e = t()) == null ? void 0 : e.pageList) == null
            ? void 0
            : l.list) == null
          ? void 0
          : m.filter(
              (b) =>
                !b.gameUnique.includes("trenball") &&
                !b.gameUnique.includes(":")
            );
      }) || [],
    [i, a] = q({ label: "", value: "" }),
    s = g(() => {
      var l;
      let e = [];
      return (
        (l = n()) != null &&
          l.length &&
          ((e =
            n().map((m) => ({ label: m.fullName, value: m.gameUnique })) || []),
          a(e[0])),
        e
      );
    });
  return (
    (o = _()),
    (c = o.firstChild),
    (u = c.firstChild),
    (r = c.nextSibling),
    d(u, () => f("Game")),
    d(
      c,
      p(U, {
        class: "flex-1 bg-layer3",
        get value() {
          return i();
        },
        onChange: a,
        get options() {
          return s();
        },
        children: (e) => {
          return (l = D()), d(l, () => e().label), l;
          var l;
        },
      }),
      null
    ),
    d(r, () => f("Fairness")),
    d(
      o,
      p(B, {
        get gameUnique() {
          return i().value;
        },
      }),
      null
    ),
    o
  );
  var o, c, u, r;
};
function B(t) {
  const n = C(),
    i = g(() => G.find((a) => a.key === t.gameUnique));
  return p(I, {
    get when() {
      return t.gameUnique;
    },
    get children() {
      return [
        p(S, {
          get htmlName() {
            return N[t.gameUnique] || "general";
          },
        }),
        v(
          () =>
            v(() => !!i())() &&
            p(j, {
              type: "brand",
              onClick: () => {
                var s;
                return (
                  (a = ((s = i()) == null ? void 0 : s.validateLink) || ""),
                  void (L.test(a) ? window.open(a) : n(a))
                );
                var a;
              },
              class: "w-full",
              get children() {
                return f("Validate");
              },
            })
        ),
      ];
    },
  });
}
export { E as default, P as getDeviceInfo, z as getProviderData };
