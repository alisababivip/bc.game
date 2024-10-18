var c = (e, n, t) =>
  new Promise((s, o) => {
    var l = (i) => {
        try {
          a(t.next(i));
        } catch (d) {
          o(d);
        }
      },
      u = (i) => {
        try {
          a(t.throw(i));
        } catch (d) {
          o(d);
        }
      },
      a = (i) => (i.done ? s(i.value) : Promise.resolve(i.value).then(l, u));
    a((t = t.apply(e, n)).next());
  });
import {
  e as y,
  b as x,
  g as m,
  d as h,
  P as $,
  B as S,
  p as C,
} from "./manifest-2ae9efd4.js";
import { t as L } from "./toInteger-d3049371.js";
import { d as k, c as p, i as r, g as E, t as w } from "./web-170e0195.js";
import { t as g, T as U } from "./i18n-2703fd3b.js";
var T = "Expected a function";
function O(e, n) {
  var t;
  if (typeof n != "function") throw new TypeError(T);
  return (
    (e = L(e)),
    function () {
      return (
        --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = void 0), t
      );
    }
  );
}
function I(e) {
  return O(2, e);
}
const B =
    "36897522347-1antasd8i7pbd033gmrf2lreff59c754.apps.googleusercontent.com",
  R = I(() => x.loadScript("https://accounts.google.com/gsi/client")),
  K = () => {
    const e = document.querySelector(".custom-google-button");
    if (e)
      return {
        click: () => {
          e && e.click();
        },
      };
    const n = document.createElement("div");
    (n.style.display = "none"),
      n.classList.add("custom-google-button"),
      document.body.appendChild(n),
      window.google &&
        window.google.accounts.id.renderButton(n, { theme: "filled_blue" });
    const t = n.querySelector("div[role=button]");
    return {
      click: () => {
        t && t.click();
      },
    };
  };
function W(e, n = !0) {
  return c(this, null, function* () {
    try {
      yield R(),
        window.google &&
          (window.google.accounts.id.initialize({
            client_id: y.isDev ? B : y.GOOGLE_KEY,
            cancel_on_tap_outside: !1,
            callback: (t) => {
              let s = t.credential.split(".");
              const o = JSON.parse(
                decodeURIComponent(
                  encodeURI(
                    window.atob(s[1].replace(/-/g, "+").replace(/_/g, "/"))
                  )
                )
              );
              e &&
                e({
                  fullName: o.name,
                  idToken: t.credential,
                  openUserId: o.sub,
                  picture: o.picture,
                });
            },
          }),
          n || window.google.accounts.id.prompt());
    } catch (t) {
      console.log(t);
    }
  });
}
function F(e) {
  return c(this, null, function* () {
    const n = yield m().post("/account/open/login-callback/", e);
    return h.emit("signin-success"), n;
  });
}
function J(e, n) {
  return c(this, null, function* () {
    const t = window.open(
      "",
      "_blank",
      "resizable=no,scrollbars=no,status=no,width=420,height=680,location=no"
    );
    let s = yield G(e);
    return (
      e === "line" && (s += `?invitationCode=${n}`),
      new Promise((o, l) => {
        if (!t) return;
        const u = (a) => {
          if (a.source === t)
            try {
              let i;
              e === "steam" || e === "line"
                ? (i = a.data)
                : ((i = JSON.parse(a.data)),
                  e === "telegram" &&
                    ((i = i.result),
                    (i.id = String(i.id)),
                    (i.auth_date = String(i.auth_date)))),
                o(i),
                t == null || t.close();
            } catch (i) {
              l(i);
            } finally {
              window.removeEventListener("message", u);
            }
        };
        window.addEventListener("message", u), (t.location.href = s);
      })
    );
  });
}
function G(e) {
  return c(this, null, function* () {
    return e === "steam"
      ? yield m().get("/account/steam/login/url/")
      : e === "telegram"
      ? `https://oauth.telegram.org/auth?bot_id=${yield m().post(
          "/account/open/telegram/botid/"
        )}&origin=${encodeURIComponent(location.origin)}&request_access=write`
      : e === "line"
      ? `${location.origin}/api/account/open/line/oauth/`
      : "";
  });
}
function V() {
  return c(this, null, function* () {
    return m().get("/account/wallet/login/message/");
  });
}
function Y(e) {
  return c(this, null, function* () {
    const n = yield m().post("/account/wallet/login/varify/", e);
    return h.emit("signin-success"), n;
  });
}
var P = w('<span class="text-brand ml-1">contact us'),
  D = w(
    '<div class="w-full -mt-1"><div class="bg-layer3 py-4 rounded -mx-1 px-5"><div class="flex items-center h-4.5"><span class="text-tertiary ml-1"></span><span class="text-primary font-semibold ml-auto"></span></div><div class="flex items-center h-4.5 mt-6"><span class="text-tertiary ml-1"></span><span class="text-primary font-semibold ml-auto"></span></div></div><p class="text-secondary mt-3 text-center"></p><p class="mt-4 mb-2 text-center text-tertiary">'
  ),
  M = w(
    '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 12 12"class="size-3 fill-tertiary"><g clip-path=url(#clip0_793_19303)><path d="M6 0.5C4.91221 0.5 3.84884 0.822569 2.94437 1.42692C2.0399 2.03126 1.33495 2.89025 0.918665 3.89524C0.502383 4.90023 0.393465 6.0061 0.605683 7.073C0.817902 8.13989 1.34173 9.1199 2.11092 9.88909C2.8801 10.6583 3.86011 11.1821 4.92701 11.3943C5.9939 11.6065 7.09977 11.4976 8.10476 11.0813C9.10976 10.6651 9.96874 9.96011 10.5731 9.05564C11.1774 8.15117 11.5 7.0878 11.5 6C11.5 4.54131 10.9205 3.14236 9.88909 2.11091C8.85764 1.07946 7.45869 0.5 6 0.5ZM8 6.5H6C5.86739 6.5 5.74022 6.44732 5.64645 6.35355C5.55268 6.25979 5.5 6.13261 5.5 6V3C5.5 2.86739 5.55268 2.74021 5.64645 2.64645C5.74022 2.55268 5.86739 2.5 6 2.5C6.13261 2.5 6.25979 2.55268 6.35356 2.64645C6.44732 2.74021 6.5 2.86739 6.5 3V5.5H8C8.13261 5.5 8.25979 5.55268 8.35356 5.64645C8.44732 5.74021 8.5 5.86739 8.5 6C8.5 6.13261 8.44732 6.25979 8.35356 6.35355C8.25979 6.44732 8.13261 6.5 8 6.5Z"></path></g><defs><clipPath id=clip0_793_19303><rect width=12 height=12 fill=white>'
  );
const Z = function (n) {
    return p($, {
      class: "w-full !max-w-[95%]",
      get title() {
        return g("Unable to login");
      },
      type: "center",
      get children() {
        var t = D(),
          s = t.firstChild,
          o = s.firstChild,
          l = o.firstChild,
          u = l.nextSibling,
          a = o.nextSibling,
          i = a.firstChild,
          d = i.nextSibling,
          _ = s.nextSibling,
          b = _.nextSibling;
        return (
          r(o, p(v, {}), l),
          r(l, () => g("Start time")),
          r(u, () => new Date(n.startTime).toLocaleString()),
          r(a, p(v, {}), i),
          r(i, () => g("End time")),
          r(
            d,
            (() => {
              var f = E(() => n.endTime > 0);
              return () =>
                f() ? new Date(n.endTime).toLocaleString() : g("Permanent");
            })()
          ),
          r(_, () =>
            g(
              "Your Self-Exclusion has began, you are unable to signin right now."
            )
          ),
          r(
            t,
            p(S, {
              class: "w-full mt-4",
              type: "brand",
              onClick: () => C.pop(),
              get children() {
                return g("OK");
              },
            }),
            b
          ),
          r(
            b,
            p(U, {
              i18nKey: "account.exclusion.desc",
              get children() {
                return [
                  "If you did not make this change, please",
                  (() => {
                    var f = P();
                    return (
                      (f.$$click = () => {
                        h.emit("live_support", !0), C.pop();
                      }),
                      f
                    );
                  })(),
                  ".",
                ];
              },
            })
          ),
          t
        );
      },
    });
  },
  v = function () {
    return M();
  };
k(["click"]);
export { Z as U, J as a, V as b, K as c, Y as d, W as g, F as h, I as o };
