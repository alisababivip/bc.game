var o = (e, i, n) =>
  new Promise((r, c) => {
    var u = (t) => {
        try {
          a(n.next(t));
        } catch (g) {
          c(g);
        }
      },
      l = (t) => {
        try {
          a(n.throw(t));
        } catch (g) {
          c(g);
        }
      },
      a = (t) => (t.done ? r(t.value) : Promise.resolve(t.value).then(u, l));
    a((n = n.apply(e, i)).next());
  });
import { h as s } from "./manifest-6dedd536.js";
function f(e) {
  return o(this, null, function* () {
    return yield s().post("/account/open/login-callback/", e);
  });
}
function m(e, i) {
  return o(this, null, function* () {
    const n = window.open(
      "",
      "_blank",
      "resizable=no,scrollbars=no,status=no,width=420,height=680,location=no"
    );
    let r = yield d(e);
    return (
      e === "line" && (r += `?invitationCode=${i}`),
      new Promise((c, u) => {
        if (!n) return;
        const l = (a) => {
          if (a.source === n)
            try {
              let t;
              e === "steam" || e === "line"
                ? (t = a.data)
                : ((t = JSON.parse(a.data)),
                  e === "telegram" &&
                    ((t = t.result),
                    (t.id = String(t.id)),
                    (t.auth_date = String(t.auth_date)))),
                c(t),
                n == null || n.close();
            } catch (t) {
              u(t);
            } finally {
              window.removeEventListener("message", l);
            }
        };
        window.addEventListener("message", l), (n.location.href = r);
      })
    );
  });
}
function d(e) {
  return o(this, null, function* () {
    return e === "steam"
      ? yield s().get("/account/steam/login/url/")
      : e === "telegram"
      ? `https://oauth.telegram.org/auth?bot_id=${yield s().post(
          "/account/open/telegram/botid/"
        )}&origin=${encodeURIComponent(location.origin)}&request_access=write`
      : e === "line"
      ? `${location.origin}/api/account/open/line/oauth/`
      : "";
  });
}
function b() {
  return o(this, null, function* () {
    return s().get("/account/wallet/login/message/");
  });
}
function p(e) {
  return o(this, null, function* () {
    return yield s().post("/account/wallet/login/varify/", e);
  });
}
export { f as a, m as b, b as g, p as h };
