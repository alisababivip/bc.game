import {
  y as N,
  $ as w,
  b as u,
  a8 as C,
  c as s,
  i as I,
  af as j,
  E as B,
  ae as p,
  h as R,
  W as H,
  f as T,
  ag as x,
  x as g,
  z as f,
  C as m,
  g as _,
  a as $,
  F as q,
  o as v,
  ah as F,
  a1 as y,
  P as D,
} from "./index-Cp-3lvCI.js";
var P = T('<div id=betby class="-mx-4 min-h-[70vh] sm:mx-0">'),
  M = T('<div class="center -mt-4 h-[84vh] flex-auto sm:-mt-3">');
const U = N(async function () {
    return [];
  }),
  V = { pt: "pt-br", tl: "en-ph" };
function W(e) {
  const { isNgHost: t, isNg2Host: a } = D.getHostType(g.host);
  return t || a
    ? e
      ? "bc-game-dark-classic"
      : "bc-game-light-classic"
    : e
    ? "bc-game-dark-tile"
    : "bc-game-light-tile";
}
function S(e) {
  const t = document.documentElement,
    a = window.getComputedStyle(t),
    i = parseFloat(a.fontSize);
  return Number((e * (i / 16)).toFixed(2));
}
let k = !1;
async function Z(e) {
  k ||
    (await D.loadScript("https://bcgame.sptsportscdn.com/bt-renderer.min.js"),
    (k = !0));
}
async function E(e, t, a, i, c, r) {
  if ((await Z(), a && i)) {
    const { lang: n, jwtToken: l } = await _().post(
      "/platform-sports/v14/login",
      { device: e, lang: t, currency: a, brandId: r }
    );
    return { jwtToken: l, lng: n };
  } else return { jwtToken: "", lng: "" };
}
function A(e) {
  const [t] = x(),
    [a, i] = $(0),
    c = q(),
    r = g.mobile;
  let n;
  function l() {
    i((o) => o + 1);
  }
  const O = async () =>
    (await E(e.device, e.lng, e.currency, e.isLogin, e.isDev, f(t.brandId)))
      .jwtToken;
  return (
    u(() => {
      const o = t["bt-path"] || "/";
      n && n.updateOptions({ url: o });
    }),
    u(() => {
      console.log(a());
      const o = {
        token: e.token,
        brand_id: f(t.brandId),
        onTokenExpired: O,
        themeName: W(e.isDarken),
        lang: e.lng,
        target: document.getElementById("betby"),
        stickyTop: r ? S(56) : 60,
        betslipZIndex: 1,
        onLogin: function () {
          c("/login/signin");
        },
        onRegister: function () {
          c("/login/regist");
        },
        onRecharge: function () {
          c("/deposit");
        },
        betSlipOffsetTop: r ? S(56) : 60,
        betSlipOffsetBottom: r ? 70 : 0,
        betSlipOffsetRight: 0,
        onSessionRefresh: l,
      };
      e.token || delete o.token, n && n.kill();
      var d = new BTRenderer().initialize(o);
      n = d;
    }),
    v(() => {
      n && n.kill(), (n = void 0);
    }),
    u(() => {
      const o = document.querySelector("#root");
      if (o && !g.mobile) {
        const d = F((z) => {
            for (let L of z) {
              const h = getComputedStyle(L.target).marginRight.match(/\d+/);
              n && n.updateOptions({ betSlipOffsetRight: h ? h[0] : 0 });
            }
          }, 300),
          b = new ResizeObserver(d);
        b.observe(o),
          v(() => {
            b.disconnect();
          });
      }
    }),
    P()
  );
}
function G() {
  const [e] = x(),
    t = () => (g.mobile ? 1 : 2),
    a = () => y.login,
    i = g.isDevHost,
    c = () => y.setting.currencyName,
    r = () => V[m.lang] ?? m.lang,
    [n] = w(
      () => c() + a() + r(),
      () => E(t(), r(), c(), a(), i, f(e.brandId))
    );
  return s(R, {
    get when() {
      return n();
    },
    children: (l) =>
      s(A, {
        get token() {
          return l().jwtToken;
        },
        get isDarken() {
          return m.darken;
        },
        get lng() {
          return l().lng || r();
        },
        isDev: i,
        get device() {
          return t();
        },
        get currency() {
          return c();
        },
        get isLogin() {
          return a();
        },
      }),
  });
}
function Q() {
  const [e] = w(U, { initialValue: [] });
  return (
    u(() => {
      C.emit("change_chatroom", 14);
    }),
    s(H, {
      get fallback() {
        return (() => {
          var t = M();
          return I(t, s(j, {})), t;
        })();
      },
      get children() {
        return s(B, {
          fallback: (t) =>
            s(p, {
              class: "h-[84vh]",
              get children() {
                return t.message;
              },
            }),
          get children() {
            return s(R, {
              get when() {
                return e().every((t) => t.type !== "Sports");
              },
              get fallback() {
                return s(p, { class: "h-[84vh]" });
              },
              get children() {
                return s(G, {});
              },
            });
          },
        });
      },
    })
  );
}
export { Q as default };
