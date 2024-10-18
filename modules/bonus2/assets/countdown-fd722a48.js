import { j as M, i as p, c as _, t as d } from "./web-13cf6287.js";
import { M as g } from "./manifest-cc1f4445.js";
import { i as y, c as I, F as S } from "./solid-js-38561dfe.js";
var F = (a) => (typeof a == "function" && !a.length ? a() : a),
  P = d("<span class=text-primary>"),
  j = d("<span> ");
const W = (a) => {
  const [h, w] = y(a, ["expiresInMS"]),
    f = I(() => F(h.expiresInMS)),
    x = g(f);
  function $(e) {
    var r, s, o, i, m, l, c, u;
    const n = [
        {
          name: "d",
          value: (s = (r = e()) == null ? void 0 : r.days) != null ? s : 0,
        },
        {
          name: "h",
          value: (i = (o = e()) == null ? void 0 : o.hours) != null ? i : 0,
        },
        {
          name: "m",
          value: (l = (m = e()) == null ? void 0 : m.minutes) != null ? l : 0,
        },
        {
          name: "s",
          value: (u = (c = e()) == null ? void 0 : c.seconds) != null ? u : 0,
        },
      ],
      t = Math.min(
        1,
        Math.max(
          0,
          n.findIndex((C) => C.value > 0)
        )
      );
    return n.slice(t, t + 3);
  }
  const v = "​";
  return (() => {
    var e = P();
    return (
      M(e, a, !1, !0),
      p(
        e,
        _(S, {
          get each() {
            return $(x);
          },
          children: (n) =>
            (() => {
              var t = j(),
                r = t.firstChild;
              return p(t, () => `${String(n.value)}${v}${n.name}`, r), t;
            })(),
        })
      ),
      e
    );
  })();
};
export { W as C, F as a };
