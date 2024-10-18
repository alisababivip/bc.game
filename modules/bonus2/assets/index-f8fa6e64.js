import {
  d as M,
  c as l,
  u,
  k as w,
  e as B,
  s as g,
  t as k,
  r as T,
} from "./web-13cf6287.js";
import {
  k as z,
  v as J,
  c as Q,
  h as D,
  M as A,
  o as y,
  a as G,
  u as N,
  w as W,
  d as K,
  x as L,
} from "./solid-js-38561dfe.js";
import {
  a7 as S,
  e as b,
  u as Y,
  g as F,
  i as q,
  t as I,
} from "./manifest-cc1f4445.js";
import { h as $ } from "./http-7cc13238.js";
import { t as j } from "./toast-unhandle-error-afca6f15.js";
const C = z(() => {
    const o = S("/game-support").connect();
    return J((t) => {
      const e = S();
      return (
        o.on(
          "bonus-crocodile",
          e.decodeBind((n) => {
            t(n);
          }, "json")
        ),
        () => {
          o.off("bonus-crocodile"), o.disconnect();
        }
      );
    });
  }),
  V =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACoUExURUdwTPW0CPm9B/a2B//MBv7JBvm9CfOyBvvEDP/MBv/NB/CpBvCoB/CpBv/LBv/NBv/FT/CoB/i8Bu+oBvCsB++oB//OB//OB//NB/+9C//MM++oBv+qK/+zBv/MBv/////LBu+oBv7GBv+2B//ABv+5Bv/KBve7BvrCBv++K//kpv/Vdf/qu//otf+9Bv/FQP/13v/ah/+4F//flP/x0v/KU//DO//564N2FJwAAAAddFJOUwA7Ikbd7zP+FPeU6JWjwqUDYeb32L5sUIL4BXQGxzxp6QAAAcJJREFUOMt9VIlygyAQxXhEY0zNNEenrRyixkRjzrb//2dFFgwkTd8wjgOPt28XFoRu+HSThV/nOPK9ifuO/sIoGdcUV1iAUoz9l9EDJZyOa2wjmoQ2x4k3FD/AC0zO/HWD/0K0Njisxk8wsJybDs27kvOyywctFTGMx3qq4JkC1zQP3E+ZmqjKzECnMnmT9WFKqJIyfNuPHiWwol4qUUIUdHZkKwZoweaJOItXJVRAlD1pruQA/7DbQ8hlkFoF89sjETiCFIftwWAbhM4/5Nr+ELIzpd7QkskzxeCoIeQrOxDSZoarF7RgoJkp2+TStD0TEpRLMxQz01JLJPZnk+QhlVylcyO7k/hcM8O5dxfuIiOJDLdWuCWjhvFvodQIY+RsGU+sEvTp9bjYJZjbxRSu9kfSKEsQxEGhPt9Okw4t+Yb/Qi74KRqqCZcgO5z6YV4DccDD4eE8s8FhcyRba6kvXc5NTlkNN0Ug0K5w1d04hZrzVfN9sKERcnnLeVlUuhFc3S5Tq6Wo2aar20uRPGu8ldnCRkQD/tp+DNzFOL/nPL4r6Ty2aTMHpY8PVOpM402dC9vUn61C9BTpKHCCf9b/wS/bE3V5CjyCfQAAAABJRU5ErkJggg==",
  X = "/modules/bonus2/assets/activity_castle-521dc8c1.png",
  Z = "/modules/bonus2/assets/activity_coomary-7bfaadb5.png",
  H = "/modules/bonus2/assets/activity_light-30aa378d.png",
  tt = "/modules/bonus2/assets/coco-web_part1-2d684169.png",
  ot = "/modules/bonus2/assets/coco-web_part2-35519dc4.png",
  et = "/modules/bonus2/assets/coomary-e14e3a40.png",
  at = "/modules/bonus2/assets/coomary_2-b78fd14c.png",
  rt = "/modules/bonus2/assets/warp-pipe_part1-78a7d987.png",
  nt = "/modules/bonus2/assets/warp-pipe_part2-fd774635.png",
  h = {
    activity_bitCoin: V,
    activity_castle: X,
    activity_coomary: Z,
    activity_light: H,
    cocoWeb_part1: tt,
    cocoWeb_part2: ot,
    coomary: et,
    coomary_2: at,
    warpPipe_part1: rt,
    warpPipe_part2: nt,
  };
var ct = k(
    '<div class="fixed right-12 top-15 z-100 hidden w-24"><img class="absolute -top-[16rem] w-4/5 cursor-pointer"><img class="absolute -top-[16rem] w-4/5 cursor-pointer">'
  ),
  st = k(
    '<div class="fixed bottom-0 left-20 z-100 hidden w-20 cursor-pointer"><img class="absolute -bottom-72 left-1 h-40 w-20 scale-125"><img class="absolute -bottom-24 left-0 -z-10 w-20"><img class="absolute -bottom-72 left-1 h-40 w-20 scale-125">'
  ),
  it = k(
    '<div class="fixed bottom-5 right-0 hidden w-24 cursor-pointer"><img class="absolute -bottom-28">'
  );
const _ = (o) => {
    const t = Y();
    let e = !1;
    const n = () => {
      e ||
        N(() => {
          (e = !0),
            o.cocoGotCaught
              .restart()
              .then(() => {
                var a, c;
                return q.login
                  ? $.post("/game/support/bonus/crocodile/", {
                      currencyName: (a = C()) == null ? void 0 : a.currencyName,
                      dataSign: (c = C()) == null ? void 0 : c.dataSign,
                    })
                      .then(I.success)
                      .catch(j)
                  : t("/login/regist");
              })
              .finally(() => {
                o.cocoAppear.reverse(), (e = !1);
              });
        });
    };
    return (
      y(() => {
        let a = setTimeout(() => {
          o.cocoAppear.reverse();
        }, 6e4);
        G(() => clearTimeout(a));
      }),
      { handleCocoGotCaught: n }
    );
  },
  v = (o) => {
    const t = F.timeline(o);
    return (
      G(() => {
        F.killTweensOf(t);
      }),
      t
    );
  },
  ut = () => {
    let o, t, e;
    const n = {
        cocoAppear: v({ paused: !0 }),
        cocoGotCaught: v({ paused: !0 }),
      },
      { handleCocoGotCaught: a } = _(n);
    return (
      y(() => {
        n.cocoAppear
          .to(e, { duration: 0.5, height: 246 * b.remScale, display: "block" })
          .to([o, t], { duration: 1.5, top: 0, ease: "Power1.easeIn" })
          .play(),
          n.cocoGotCaught
            .to(t, { scale: 0.9, rotation: -3, duration: 0.1 })
            .to(t, { scale: 0.9, rotation: -3, duration: 0.1 })
            .to(t, { scale: 1.1, rotation: 3, duration: 0.1 })
            .to(t, { scale: 1.1, rotation: -3, duration: 0.1 })
            .to(t, { scale: 1.1, rotation: 3, duration: 0.1 })
            .to(t, { scale: 1.1, rotation: -3, duration: 0.1 })
            .to(t, { scale: 1.1, rotation: 3, duration: 0.1 })
            .to(t, { scale: 1.1, rotation: -3, duration: 0.1 })
            .to(t, { scale: 1.1, rotation: 3, duration: 0.1 })
            .to(t, { scale: 1, rotation: 0, duration: 0.1 });
      }),
      (() => {
        var c = ct(),
          s = c.firstChild,
          i = s.nextSibling;
        return (
          u((r) => (e = r), c),
          w(c, "click", a, !0),
          u((r) => (o = r), s),
          u((r) => (t = r), i),
          B(
            (r) => {
              var m = h.cocoWeb_part1,
                f = h.cocoWeb_part2;
              return (
                m !== r.e && g(s, "src", (r.e = m)),
                f !== r.t && g(i, "src", (r.t = f)),
                r
              );
            },
            { e: void 0, t: void 0 }
          ),
          c
        );
      })()
    );
  },
  lt = () => {
    let o = null,
      t = null,
      e = null,
      n = null;
    const a = {
        cocoAppear: v({ paused: !0 }),
        cocoGotCaught: v({ paused: !0 }),
      },
      { handleCocoGotCaught: c } = _(a);
    return (
      y(() => {
        a.cocoAppear
          .to(o, { height: 270 * b.remScale, display: "block" })
          .to([e, n], { duration: 1, bottom: 0 })
          .to(t, { duration: 1, bottom: 176 * b.remScale })
          .play(),
          a.cocoGotCaught
            .to(t, { y: 0, scaleY: 1, duration: 0.2 })
            .to(t, { y: -30, scaleY: 1.1, duration: 0.1 })
            .to(t, { y: 0, scaleY: 1, duration: 0.07 })
            .to(t, { y: -15, scaleY: 1.05, duration: 0.17 })
            .to(t, { y: 0, scaleY: 0.95, duration: 0.1 })
            .to(t, { y: -4, scaleY: 1.02, duration: 0.1 })
            .to(t, { y: 0, scaleY: 1, duration: 0.1 });
      }),
      (() => {
        var s = st(),
          i = s.firstChild,
          r = i.nextSibling,
          m = r.nextSibling,
          f = o;
        typeof f == "function" ? u(f, s) : (o = s), w(s, "click", c, !0);
        var P = e;
        typeof P == "function" ? u(P, i) : (e = i);
        var O = t;
        typeof O == "function" ? u(O, r) : (t = r);
        var E = n;
        return (
          typeof E == "function" ? u(E, m) : (n = m),
          B(
            (d) => {
              var x = h.warpPipe_part1,
                U = h.coomary,
                R = h.warpPipe_part2;
              return (
                x !== d.e && g(i, "src", (d.e = x)),
                U !== d.t && g(r, "src", (d.t = U)),
                R !== d.a && g(m, "src", (d.a = R)),
                d
              );
            },
            { e: void 0, t: void 0, a: void 0 }
          ),
          s
        );
      })()
    );
  },
  dt = () => {
    let o = null,
      t = null;
    const e = {
        cocoAppear: v({ paused: !0 }),
        cocoGotCaught: v({ paused: !0 }),
      },
      { handleCocoGotCaught: n } = _(e);
    return (
      y(() => {
        e.cocoAppear
          .to(o, { duration: 0.2, height: 271 * b.remScale, display: "block" })
          .to(t, {
            duration: 1.5,
            bottom: 143 * b.remScale,
            ease: "easeOutBack",
          })
          .play(),
          e.cocoGotCaught
            .to(t, { y: 0, rotationX: 0, duration: 0 })
            .to(t, { y: -6, rotationX: -9, duration: 0.065 })
            .to(t, { y: 5, rotationX: 7, duration: 0.12 })
            .to(t, { y: -3, rotationX: -5, duration: 0.13 })
            .to(t, { y: 2, rotationX: 3, duration: 0.12 })
            .to(t, { y: 0, rotationX: 0, duration: 0.065 });
      }),
      (() => {
        var a = it(),
          c = a.firstChild,
          s = o;
        typeof s == "function" ? u(s, a) : (o = a), w(a, "click", n, !0);
        var i = t;
        return (
          typeof i == "function" ? u(i, c) : (t = c),
          B(() => g(c, "src", h.coomary_2)),
          a
        );
      })()
    );
  },
  pt = () => {
    const o = ["top-right", "left-bottom", "right-bottom"];
    return o[Math.floor(Math.random() * o.length)];
  },
  mt = (o) => {
    const t = Q(() => o.position || pt());
    return l(D, {
      get children() {
        return [
          l(A, {
            get when() {
              return t() === "top-right";
            },
            get children() {
              return l(ut, {});
            },
          }),
          l(A, {
            get when() {
              return t() === "left-bottom";
            },
            get children() {
              return l(lt, {});
            },
          }),
          l(A, {
            get when() {
              return t() === "right-bottom";
            },
            get children() {
              return l(dt, {});
            },
          }),
        ];
      },
    });
  };
M(["click"]);
let p;
const gt = () =>
    p ||
    ((p = document.createElement("div")),
    p.style.setProperty("z-index", "9999"),
    p.classList.add("absolute", "top-0", "left-0"),
    document.body.appendChild(p),
    p),
  At = () => {
    const o = W();
    K(() => {
      var t;
      (t = C()) != null &&
        t.dataSign &&
        L(o, () => {
          T(() => l(mt, {}), gt());
        });
    });
  };
export { At as cocoRegister, At as default };
