var T = (s, g, l) =>
  new Promise((t, r) => {
    var d = (e) => {
        try {
          i(l.next(e));
        } catch (n) {
          r(n);
        }
      },
      a = (e) => {
        try {
          i(l.throw(e));
        } catch (n) {
          r(n);
        }
      },
      i = (e) => (e.done ? t(e.value) : Promise.resolve(e.value).then(d, a));
    i((l = l.apply(s, g)).next());
  });
import {
  C as R,
  f as S,
  v as N,
  ao as B,
  i as u,
  c as p,
  aw as _,
  ap as j,
  S as v,
  a as L,
  d as x,
  b as w,
  t as C,
  G as E,
  H as k,
  ak as I,
  h as m,
  l as f,
  R as $,
  o as z,
  A,
  m as J,
  E as G,
  L as H,
  a5 as K,
  y as U,
  ax as V,
} from "./manifest-a234c8a0.js";
import { a as Y } from "./router-b8d56046.js";
import { t as b } from "./i18n-611811a6.js";
import { d as q } from "./debounce-9aa0a06b.js";
import "./isObject-d5c4896e.js";
import "./isSymbol-0edd6b24.js";
const D = {
  "en-IN": "en-IN",
  en: "en",
  vi: "vi",
  id: "id",
  ja: "ja",
  ko: "ko",
  fr: "fr",
  es: "es-ES",
  tl: "fil",
  ar: "ar",
  hi: "hi",
  tr: "tr",
  fa: "fa",
  pt: "pt-PT",
  ru: "ru",
  de: "de",
  th: "th",
  fi: "fi",
  pl: "pl",
  it: "it",
  my: "my",
  nl: "nl",
  ur: "ur-PK",
  uk: "uk",
  ms: "ms",
  bn: "bn-IN",
  mr: "mr",
  ta: "ta",
  te: "te",
};
var F = C(
    '<div class="absolute top-8 ring-0 z-10 p-2 bg-layer5 rounded-lg text-sm font-semibold">'
  ),
  O = C(
    '<div class="relative flex items-center justify-end gap-1.5 mb-4 mx-auto sm:px-6"><span></span><span>'
  );
function Q(s) {
  const [g, l] = S(!1);
  return (
    (t = O()),
    (r = t.firstChild),
    (d = r.nextSibling),
    (t.$$click = () => {
      s.bonusAmount === 0 ? l((a) => !a) : s.onTypeChange(s.type === 1 ? 2 : 1);
    }),
    N(
      (a) =>
        B(
          () => a,
          () => l(!1)
        ),
      t
    ),
    t.style.setProperty("max-width", "1830px"),
    u(r, () => b("Real Money")),
    u(
      t,
      p(_, {
        size: "small",
        get value() {
          return s.bonusAmount !== 0 && s.type === 2;
        },
        onChange: (a) => s.bonusAmount > 0 && s.onTypeChange(a ? 1 : 2),
      }),
      d
    ),
    u(d, () => b("Bonus Money")),
    u(
      t,
      p(j, {
        name: "fade",
        get children() {
          return p(v, {
            get when() {
              return g();
            },
            get children() {
              var a = F();
              return (
                a.style.setProperty(
                  "box-shadow",
                  "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                ),
                u(a, () => b("You don't have any bonus money")),
                a
              );
            },
          });
        },
      }),
      null
    ),
    L(
      (a) => {
        var i = x(
            "text-xs font-semibold",
            s.type === 1 ? "text-primary" : "text-secondary"
          ),
          e = x("label", s.type === 2 ? "text-primary" : "text-secondary");
        return i !== a.e && w(r, (a.e = i)), e !== a.t && w(d, (a.t = e)), a;
      },
      { e: void 0, t: void 0 }
    ),
    t
  );
  var t, r, d;
}
R(["click"]);
var W = C(
    '<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">'
  ),
  X = C(
    "<div><style>#trade-app-root{ max-width: 1830px; margin: auto; }</style><div>"
  );
function oe(s) {
  let g;
  const l = Y(),
    [t, r] = E({
      entry: "",
      accessCode: "",
      appReady: !1,
      errorMessage: "",
      balanceType: 1,
      tradeApp: void 0,
    }),
    d = k(() => {
      const [e = "trading"] = l.pathname
        .replace(/\/$/, "")
        .split("/")
        .slice(-1);
      return e;
    }),
    a = k(() => {
      try {
        return I[m.setting.currencyName].bonusAmount.toNumber();
      } catch (e) {
        return 0;
      }
    });
  f(() => {
    (d() === "trading" && m.login && a() !== 0) || r("balanceType", 1);
  }),
    $(
      () =>
        m.setting.currencyName !== "JB" && [
          m.setting.currencyName,
          t.balanceType,
          m.login,
        ],
      q(
        (e) =>
          T(this, null, function* () {
            const [n, o] = e;
            try {
              const { url: c } = yield U().post(
                  "/platform-trading/tradingLogin/tradingLogin",
                  { currency: n, balanceType: o }
                ),
                [y, P] = c.split("?"),
                M = new URLSearchParams(P).get("accessCode") || "";
              n === m.setting.currencyName &&
                V(() => {
                  r("entry", y), r("accessCode", M), r("errorMessage", "");
                });
            } catch (c) {
              const y = c == null ? void 0 : c.code;
              r(
                "errorMessage",
                y === 4001
                  ? b(
                      "Sorry, the game does not exist or is currently unavailable."
                    )
                  : c.message
              );
            }
          }),
        100
      )
    ),
    f(() => {
      const e = t.entry;
      e &&
        (h(e).then((n) => {
          r("tradeApp", new n({ entry: e, container: g }));
        }),
        z(() => {
          var n;
          (n = t.tradeApp) == null || n.unmount();
        }));
    }),
    f(() => {
      var e;
      (e = t.tradeApp) == null ||
        e.render({
          accessCode: t.accessCode,
          lang: D[A.lang] || "en",
          type: d(),
          onLoad: () => r("appReady", !0),
          theme: A.darken ? "darken" : "lighten",
        });
    }),
    f(() => {
      t.appReady &&
        document.getElementById("trade-app-root").classList.add("sm:px-6");
    });
  const i = k(() => m.setting.currencyName === "JB" || !!t.errorMessage);
  return (() => {
    var e = X(),
      n = e.firstChild.nextSibling;
    return (
      u(
        e,
        p(v, {
          get when() {
            return J(() => !(!m.login || d() !== "trading"))() && !i();
          },
          get children() {
            return p(Q, {
              get type() {
                return t.balanceType;
              },
              onTypeChange: (o) => r("balanceType", o),
              get bonusAmount() {
                return a();
              },
            });
          },
        }),
        n
      ),
      typeof g == "function" ? N(g, n) : (g = n),
      u(
        e,
        p(v, {
          get when() {
            return i();
          },
          get children() {
            return p(G, {
              get children() {
                return (
                  t.errorMessage ||
                  b(
                    "__ENV_JB__ cannot be used in this game. Please switch to other assets."
                  )
                );
              },
            });
          },
        }),
        null
      ),
      u(
        e,
        p(v, {
          get when() {
            return !t.appReady;
          },
          get children() {
            var o = W();
            return u(o, p(H, {})), o;
          },
        }),
        null
      ),
      L(
        (o) => {
          var c = x(
              "relative min-h-[80vh] pt-4 sm:pt-6",
              s.class,
              i() && "center"
            ),
            y = x(i() && "hidden");
          return c !== o.e && w(e, (o.e = c)), y !== o.t && w(n, (o.t = y)), o;
        },
        { e: void 0, t: void 0 }
      ),
      e
    );
  })();
}
function h(s) {
  return T(this, null, function* () {
    return (
      window.Trading ||
        (h.LoadingPromise ||
          (h.LoadingPromise = K.loadScript(
            `${s}/trading.js`,
            "Trading",
            "trading-sdk"
          )),
        yield h.LoadingPromise),
      window.Trading
    );
  });
}
h || (h = {});
export { oe as default };
