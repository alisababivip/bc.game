import {
  i as r,
  c as d,
  e as H,
  s as k,
  t as c,
  u as U,
  d as j,
} from "./web-13cf6287.js";
import { c as A } from "./servers-f129ff30.js";
import { a as O } from "./store-a43dfcbd.js";
import { o as Q, c as z, F as L } from "./solid-js-38561dfe.js";
import {
  t as Y,
  D as y,
  l as F,
  W as P,
  e as N,
  B as V,
  C as S,
  u as W,
  I as E,
  a as B,
  i as M,
} from "./manifest-cc1f4445.js";
import { t, T as I } from "./i18n-023baa0d.js";
import { a as K } from "./index-823e0b11.js";
import { c as G } from "./utils-55681fa2.js";
var J = c(
    '<div class="flex flex-col gap-3 rounded-xl bg-layer4 p-6 md:flex-row md:items-center md:gap-10"><div class="flex flex-none flex-col gap-3 sm:w-96"><div class="flex items-center"><b class=live-dot></b><p class=font-extrabold> </p></div><div class="flex items-center justify-between rounded-xl bg-layer5 p-3"><p></p><div class="text-xl font-extrabold text-brand">$</div></div></div><div class="mx-3 h-12 w-full overflow-hidden"><div class="live-container grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-3 lg:grid-cols-4">'
  ),
  X = c(
    '<div class="mx-3 flex items-center justify-start gap-3"><p></p><div class="center gap-1"><p class="font-extrabold text-brand">+</p><img class="h-4 w-4">'
  );
const _e = function () {
  const [s, n] = O({ commissionUsd: "", rewardUsd: "", list: [] });
  Q(() => {
    A()
      .then((a) => {
        a && n(a);
      })
      .catch(Y);
  });
  const i = z(() => new y(s.commissionUsd || 0).add(new y(s.rewardUsd || 0)));
  let e;
  return (() => {
    var a = J(),
      l = a.firstChild,
      u = l.firstChild,
      m = u.firstChild,
      b = m.nextSibling;
    b.firstChild;
    var h = u.nextSibling,
      $ = h.firstChild,
      x = $.nextSibling;
    x.firstChild;
    var w = l.nextSibling,
      p = w.firstChild;
    r(b, () => t("Live Rewards"), null),
      r($, () => t("Total Rewards Sent To-Date")),
      r(x, () => i().toFixed(2, y.ROUND_FLOOR), null);
    var f = e;
    return (
      typeof f == "function" ? U(f, p) : (e = p),
      r(
        p,
        d(L, {
          get each() {
            return s.list;
          },
          children: (g) =>
            (() => {
              var v = X(),
                T = v.firstChild,
                D = T.nextSibling,
                C = D.firstChild;
              C.firstChild;
              var R = C.nextSibling;
              return (
                r(T, () => g.userName),
                r(C, () => g.amount, null),
                H(() => k(R, "src", F.coinIcon(g.currencyName))),
                v
              );
            })(),
        })
      ),
      a
    );
  })();
};
var Z = c(
  `<div class="relative justify-end rounded-xl bg-layer4 bg-[url('src/features/affiliate/assets/program_bg.png')] bg-no-repeat font-semibold sm:flex"><div class="flex flex-col items-center justify-end p-6 sm:w-3/5"><p class="gap-3 text-center text-2xl font-extrabold sm:mb-3 sm:flex"></p><img alt=program class="left-20 h-full sm:absolute sm:bottom-0"><div class=text-secondary></div><div class=text-secondary></div><div class=w-full><div class=text-secondary><span></span></div><div class="mt-2 flex w-full items-center justify-between rounded-xl border border-input bg-layer3 px-3 py-2"><p class=l></p><a class=contacts-link-item target=_self>`
);
const ve = function () {
  const { isBzHost: s, isSpHost: n } = P.getHostType(N.host);
  return (() => {
    var i = Z(),
      e = i.firstChild,
      a = e.firstChild,
      l = a.nextSibling,
      u = l.nextSibling,
      m = u.nextSibling,
      b = m.nextSibling,
      h = b.firstChild,
      $ = h.firstChild,
      x = h.nextSibling,
      w = x.firstChild,
      p = w.nextSibling;
    return (
      r(u, () =>
        t(
          "If you have a large audience and followers. We have special conditions for you to customize your referral program!"
        )
      ),
      r(m, () =>
        t(
          "If you can invite players and their wager amount reaches a billion dollars and above, you will get your own customized casino! You can set up a casino website with your domain and design style."
        )
      ),
      r($, () => t("for more details, please contact Us")),
      r(
        w,
        s ? "business@bzjogos.com" : n ? "business@87.com" : "business@bc.game"
      ),
      k(
        p,
        "href",
        `mailto:${
          s
            ? "business@bzjogos.com"
            : n
            ? "business@87.com"
            : "business@bc.game"
        }`
      ),
      r(
        p,
        d(V, {
          type: "second",
          class: "h-10 p-2",
          get children() {
            return t("Send Now");
          },
        })
      ),
      H(
        (f) => {
          var g = t(
              'Learn more about our <p class="text-brand">Affiliate program</p>'
            ),
            v = K.program;
          return (
            g !== f.e && (a.innerHTML = f.e = g),
            v !== f.t && k(l, "src", (f.t = v)),
            f
          );
        },
        { e: void 0, t: void 0 }
      ),
      i
    );
  })();
};
var o = c("<span>"),
  q = c('<p><span></span><span class="ml-1 cursor-pointer text-brand">'),
  ee = c(
    '<a class="mx-1 inline-flex items-center text-brand"href=mailto:support@bc.game rel="noopener noreferrer"target=_blank>support@bc.game'
  ),
  re = c("<span>__ENV_HOST__"),
  te = c('<span class="ml-1 cursor-pointer text-brand">Affiliate Dashboard'),
  se = c(
    '<div class="flex flex-col gap-3 rounded-xl bg-layer4 p-6"><p class="text-xl font-extrabold"></p><div class="flex flex-col gap-4">'
  ),
  ae = c('<span class="cursor-pointer font-extrabold">'),
  ne = c('<div class="mt-1 font-semibold text-secondary">');
function le(_) {
  const s = () => B.printCurrency(new y(1e3)),
    n = W(),
    i = (e) => {
      if (!M.login) {
        n("/login/regist");
        return;
      }
      if (e === "dashboard") {
        G(_());
        return;
      }
      n(e, { replace: N.mobile });
    };
  return [
    {
      question: (() => {
        var e = o();
        return r(e, () => t("How does the referral system work?")), e;
      })(),
      answer: (() => {
        var e = o();
        return (
          r(e, () =>
            t(
              "When you share your referral link with any of your friends, family or advertise the link and a player signup at our site that player becomes your referral and they will earn you commissions & extra rewards by playing at __ENV_HOST__."
            )
          ),
          e
        );
      })(),
    },
    {
      question: (() => {
        var e = o();
        return r(e, () => t("How much can I earn from my referral?")), e;
      })(),
      answer: (() => {
        var e = o();
        return (
          r(e, () =>
            t(
              "You can earn 25% of their wager + __local_amount__ per referral.",
              { local_amount: s() }
            )
          ),
          e
        );
      })(),
    },
    {
      question: (() => {
        var e = o();
        return r(e, () => t("What is USD reward and how does it work?")), e;
      })(),
      answer: (() => {
        var e = o();
        return (
          r(e, () =>
            t(
              "There is  __local_amount__ USD reward for each referral you bring to __ENV_HOST__ This USD reward is given in 10 parts when your referral level up from VIP4 til VIP 70.",
              { local_amount: s() }
            )
          ),
          e
        );
      })(),
    },
    {
      question: (() => {
        var e = o();
        return (
          r(e, () => t("Are there any banners I can use to advertise?")), e
        );
      })(),
      answer: (() => {
        var e = q(),
          a = e.firstChild,
          l = a.nextSibling;
        return (
          r(a, () =>
            t("Yes, we offer multiple banner sizes for your convenience.")
          ),
          (l.$$click = () => i("/affiliate/banners")),
          r(l, () => t("Click here")),
          e
        );
      })(),
    },
    {
      question: (() => {
        var e = o();
        return (
          r(e, () => t("I have big audience how I can get special deals?")), e
        );
      })(),
      answer: d(I, {
        i18nKey: "bonus.mainpage.affiliate.desc2",
        get children() {
          return [
            "If you have a website with good traffic or social media account with big audience you can connect with us at",
            (() => {
              var e = ee();
              return (
                e.firstChild,
                r(
                  e,
                  d(E, { class: "ml-1 h-4 w-4 text-brand", name: "NewWindow" }),
                  null
                ),
                e
              );
            })(),
            "for special deals.",
          ];
        },
      }),
    },
    {
      question: (() => {
        var e = o();
        return (
          r(e, () =>
            t(
              "How many affiliate links can I create if I have different websites/accounts?"
            )
          ),
          e
        );
      })(),
      answer: (() => {
        var e = o();
        return (
          r(e, () =>
            t(
              "You can create up to 20 unique codes for different source of traffic."
            )
          ),
          e
        );
      })(),
    },
    {
      question: (() => {
        var e = o();
        return r(e, () => t("Can I see the data of my referral?")), e;
      })(),
      answer: d(I, {
        i18nKey: "bonus.mainpage.affiliate.desc3",
        get children() {
          return [
            "Yes, ",
            re(),
            " believes in total transparency and offer all data to the users like username, wager they have done, commissions you made, when they registered, which of your link they used. All in your",
            (() => {
              var e = te();
              return (e.$$click = () => i("dashboard")), e;
            })(),
          ];
        },
      }),
    },
    {
      question: (() => {
        var e = o();
        return r(e, () => t("Can I send tip or reward to my referrals?")), e;
      })(),
      answer: (() => {
        var e = q(),
          a = e.firstChild,
          l = a.nextSibling;
        return (
          r(a, () =>
            t("Yes, you can send your referrals tip in any supported coins.")
          ),
          (l.$$click = () => i("affiliate/referral/code")),
          r(l, () => t("Click here")),
          e
        );
      })(),
    },
  ];
}
const be = function () {
    let s;
    const n = le(() => s);
    return (() => {
      var i = se(),
        e = i.firstChild,
        a = e.nextSibling,
        l = s;
      return (
        typeof l == "function" ? U(l, i) : (s = i),
        r(e, () => t("Frequently Asked Questions")),
        r(
          a,
          d(L, {
            each: n,
            children: (u, m) =>
              d(ie, {
                get answer() {
                  return u.answer;
                },
                get question() {
                  return u.question;
                },
                get defaultOpen() {
                  return m() === 0;
                },
              }),
          })
        ),
        i
      );
    })();
  },
  ie = function (s) {
    return d(S, {
      get children() {
        return [
          d(S.Trigger, {
            get children() {
              var n = ae();
              return r(n, () => s.question), n;
            },
          }),
          d(S.Content, {
            get children() {
              var n = ne();
              return r(n, () => s.answer), n;
            },
          }),
        ];
      },
    });
  };
j(["click"]);
export { _e as L, ve as P, be as Q };
