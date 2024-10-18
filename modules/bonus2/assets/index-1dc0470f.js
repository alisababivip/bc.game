import { c as s, i as l, e as y, s as c, t as u } from "./web-13cf6287.js";
import { h as _ } from "./manifest-cc1f4445.js";
import { C as o } from "./currency-format-e71c6b76.js";
import { T as $ } from "./table-e9d87985.js";
import { t as r } from "./i18n-023baa0d.js";
import { s as p } from "./index-96ed660e.js";
import { s as b } from "./index-66557316.js";
import "./solid-js-38561dfe.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./http-7cc13238.js";
import "./baseService-e38bce40.js";
import "./_baseFor-3fee30d6.js";
import "./_MapCache-1fb5cc44.js";
var h = u('<span class="w-24 overflow-hidden text-ellipsis font-extrabold">'),
  C = u("<span class=uppercase>"),
  L = u('<span class="font-semibold text-brand">'),
  w = u(
    '<div class="flex flex-col items-center justify-center pt-3"><img class=h-12><div class="flex gap-x-1"><img class=size-5><span class="font-extrabold text-primary"></span><img class=size-5>'
  );
const E = () =>
    s(_, {
      get children() {
        return s(I, {});
      },
    }),
  I = () => {
    const [g] = b.spinFeedResource(),
      x = () => [
        {
          title: r("User Name"),
          dataIndex: "username",
          class: "w-24",
          render(t) {
            return (() => {
              var e = h();
              return l(e, t), e;
            })();
          },
        },
        {
          title: r("Spin Level"),
          dataIndex: "level",
          render(t, e) {
            const a = () => [
              r("Lucky Spin"),
              r("Lucky Spin"),
              r("Lucky Spin"),
              r("Super Spin"),
              r("Super Spin"),
              r("Mega Spin"),
            ];
            return (() => {
              var i = C();
              return l(i, () => a()[e.level]), i;
            })();
          },
        },
        {
          title: r("Prize"),
          dataIndex: "amount",
          render(t, e) {
            return s(o, {
              get currencyName() {
                return e.currencyName;
              },
              toCurrency: !0,
              get children() {
                return s(o.Content, {
                  get children() {
                    return [
                      (() => {
                        var a = L();
                        return (
                          l(
                            a,
                            s(o.Amount, {
                              get amount() {
                                return e.amount;
                              },
                            })
                          ),
                          a
                        );
                      })(),
                      s(o.Icon, {
                        get forceToCurrency() {
                          return e.currencyName;
                        },
                      }),
                    ];
                  },
                });
              },
            });
          },
        },
      ];
    return (() => {
      var t = w(),
        e = t.firstChild,
        a = e.nextSibling,
        i = a.firstChild,
        m = i.nextSibling,
        S = m.nextSibling;
      return (
        l(m, () => r("Spin Bonus")),
        l(
          t,
          s($, {
            get columns() {
              return x();
            },
            get data() {
              return g().updates;
            },
          }),
          null
        ),
        y(
          (n) => {
            var d = p.crown,
              f = p.laurel,
              v = p.laurel;
            return (
              d !== n.e && c(e, "src", (n.e = d)),
              f !== n.t && c(i, "src", (n.t = f)),
              v !== n.a && c(S, "src", (n.a = v)),
              n
            );
          },
          { e: void 0, t: void 0, a: void 0 }
        ),
        t
      );
    })();
  };
export { I as SpinLeaderBoard, E as SpinLeaderBoardDialog, E as default };
