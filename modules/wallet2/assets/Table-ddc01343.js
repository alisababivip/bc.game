var u = (t, e, r) =>
  new Promise((a, d) => {
    var f = (n) => {
        try {
          l(r.next(n));
        } catch (s) {
          d(s);
        }
      },
      x = (n) => {
        try {
          l(r.throw(n));
        } catch (s) {
          d(s);
        }
      },
      l = (n) => (n.done ? a(n.value) : Promise.resolve(n.value).then(f, x));
    l((r = r.apply(t, e)).next());
  });
import { c as i, i as c, t as o, e as g, a as b } from "./web-da7da7e5.js";
import { O as h, k as m, L as v } from "./manifest-e0f0ba59.js";
import { E as y } from "./ErrorRest-1a0f0516.js";
var _ = o("<div>"),
  $ = o(
    '<div class="flex font-semibold flex-none justify-between rounded-xl px-4 mt-3 bg-layer3 py-3">'
  ),
  L = o('<div class="center col-span-full h-72">');
function E(t) {
  return (() => {
    var e = _();
    return (
      c(e, () => t.children),
      g(() =>
        b(
          e,
          m(
            "flex flex-1 p-4 text-base font-extrabold items-center ellipsis",
            t.class
          )
        )
      ),
      e
    );
  })();
}
function N(t) {
  return i(y, {
    get children() {
      return [
        (() => {
          var e = $();
          return c(e, () => t.headerRender), e;
        })(),
        i(h, {
          get class() {
            return m("grid-cols-1", t.class);
          },
          load: (e) =>
            u(this, null, function* () {
              return t.onLoad(e).then((r) => {
                const a = r.next ? r.next : Number(r.totalPage) > e;
                return { res: r.list, next: a };
              });
            }),
          get init() {
            return (() => {
              var e = L();
              return c(e, i(v, {})), e;
            })();
          },
          get children() {
            return t.children;
          },
          get key() {
            return t.key;
          },
        }),
      ];
    },
  });
}
export { N as T, E as a };
