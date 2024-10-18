var p = (o, s, a) =>
  new Promise((r, n) => {
    var l = (t) => {
        try {
          e(a.next(t));
        } catch (u) {
          n(u);
        }
      },
      c = (t) => {
        try {
          e(a.throw(t));
        } catch (u) {
          n(u);
        }
      },
      e = (t) => (t.done ? r(t.value) : Promise.resolve(t.value).then(l, c));
    e((a = a.apply(o, s)).next());
  });
import { c as i, i as g, t as h } from "./i18n-961d0749.js";
import {
  u as v,
  a as m,
  b as w,
  g as S,
  e as f,
  B as d,
  c as C,
} from "./manifest-9a1a4b52.js";
import { u as b, I as k } from "./store-00ffcf83.js";
import { c as B, a as E, o as I, S as _ } from "./toString-486436aa.js";
import { u as N } from "./router-251b14d1.js";
import "./unescape-fec905cb.js";
var P = h('<div class="relative w-10 h-10 center">');
function O(o) {
  const { state: s } = b(),
    [a, r] = B(!1),
    n = v(),
    l = N();
  E(() => {
    console.log(l.pathname);
  }),
    I(() => {
      const e = localStorage.getItem("showPrivate");
      if (e) {
        const t = JSON.parse(e);
        r(t);
      }
      setTimeout(() => {
        c();
      }, 1e4);
    }),
    m.on("trigger_right", o.onClick);
  function c() {
    return p(this, null, function* () {
      yield w();
      const t =
        (!!(yield S().get("/game/support/vip/get/")).hostCard && !f.mobile) ||
        s.isHost;
      r(t), localStorage.setItem("showPrivate", JSON.stringify(t));
    });
  }
  return i(_, {
    get when() {
      return a();
    },
    get children() {
      var e = P();
      return (
        g(
          e,
          i(d, {
            class: "w-full h-full center p-0",
            onClick: () => {
              f.mobile ? n("/chat") : o.onClick(),
                m.emit("track", "upperbar_click");
            },
            get children() {
              return i(k, { class: "w-6", name: "Mail" });
            },
          }),
          null
        ),
        g(
          e,
          i(C, {
            class: "top-0 -right-2 absolute w-fit px-1.5",
            get value() {
              return s.totalUnread;
            },
          }),
          null
        ),
        e
      );
    },
  });
}
export { O as default };
