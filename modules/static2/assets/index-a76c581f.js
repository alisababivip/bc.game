import { c as e, i, t as m } from "./web-5c332740.js";
import { c as y, a as S, u as w, S as C, b as _ } from "./solid-js-9508438e.js";
import { t } from "./i18n-2889c705.js";
import l from "./HelpPage-c2d4cc92.js";
import { A as h } from "./files-02c31782.js";
import {
  u as L,
  e as c,
  a as d,
  s as P,
  D as A,
  S as M,
  T as $,
  L as T,
} from "./manifest-6dedd536.js";
import { u as k, a as N } from "./router-d36109eb.js";
import { I as a } from "./LocalIcon-31e78911.js";
import "./index-f52ccf1b.js";
import "./request-a00594b6.js";
import "./OneDollarCheck-6dd4da0a.js";
var x = m('<section class="top-0 bg-layer2 py-4 sticky z-20">'),
  O = m('<div class="page-info mb-4 rounded-xl bg-layer4">'),
  F = m("<label>"),
  H = m('<section class="flex gap-1">'),
  B = m('<div class="rounded-xl bg-layer4">'),
  E = m('<label class="block w-60 bg-layer2 -mt-8 pb-4 pt-8">');
function Y(v) {
  const { isSportsHost: s, isBrAuditHost: u } = L.getHostType(c.host),
    p = d(),
    n = k(),
    r = ["privacy", "terms-service", "terms-sports", "responsible-gambling"],
    o = y(() => {
      const f = [
        "provably-fair",
        "privacy",
        "terms-service",
        "terms-sports",
        "blockdance",
        "bonus",
        "law-enforcement",
        "coinlimit",
        "contactus",
        "fee",
        "googlecheck",
        "faq",
        "passcurrency",
        "reglog",
        "swappolicy",
        "gameble-aware",
        "protect-minors",
        "providers",
        "aml",
        "self-exclusion",
        "responsible-gambling",
      ];
      return (
        h.includes(c.host) && f.push("announcement"),
        P.license !== "bc" ? f.filter((z) => z !== "blockdance") : f
      );
    }),
    b = y(() => ({
      contact_us: {
        label: () => t("Contact Us"),
        element: () => e(l, { htmlName: "contact_us" }),
        icon: () => e(a, { name: "announcement", class: "size-5" }),
      },
      about_us: {
        label: () => t("About Us"),
        element: () => e(l, { htmlName: "about_us" }),
        icon: () => e(a, { name: "ProvablyFair", class: "size-5" }),
      },
      "provably-fair": {
        label: () => t("Provably Fair"),
        element: () => v.remoteComponent,
        icon: () => e(a, { name: "ProvablyFair", class: "size-5" }),
      },
      privacy: {
        label: () => t("Privacy Policy"),
        element: () =>
          e(l, {
            get htmlName() {
              return h.includes(c.host) ? "privacy_update" : "privacy";
            },
          }),
        icon: () => e(a, { name: "PrivacyPolicy", class: "size-5" }),
      },
      "terms-service": {
        label: () => t("Terms Of Service"),
        element: () =>
          e(l, {
            get htmlName() {
              return h.includes(c.host)
                ? "terms_of_service_new"
                : "terms_of_service";
            },
          }),
        icon: () => e(a, { name: "TermsOfService", class: "size-5" }),
      },
      "terms-sports": {
        label: () => t("Terms Of Sports"),
        element: () => e(l, { htmlName: "terms_of_sports" }),
        icon: () => e(a, { name: "TermsOfSports", class: "size-5" }),
      },
      blockdance: {
        label: () => t("BlockDance B.V."),
        element: () => e(l, { htmlName: "blockdance" }),
        icon: () => e(a, { name: "CoinAccuracyLimit", class: "size-5" }),
      },
      bonus: {
        label: () => t("Bonus Terms"),
        element: () => e(l, { htmlName: "bonus_terms", isBonusTC: !0 }),
        icon: () => e(a, { name: "BonusTerms", class: "size-5" }),
      },
      "law-enforcement": {
        label: () => t("Law Enforcement"),
        element: () => e(l, { htmlName: "law_enforcement" }),
        icon: () => e(a, { name: "CoinAccuracyLimit", class: "size-5" }),
      },
      coinlimit: {
        label: () => t("Coin Accuracy Limit"),
        element: () => e(l, { htmlName: "coin_limit", isCoinlimit: !0 }),
        icon: () => e(a, { name: "CoinAccuracyLimit", class: "size-5" }),
      },
      contactus: {
        label: () => t("Support"),
        element: () => e(l, { htmlName: "contact_us", isSuport: !0 }),
        icon: () => e(a, { name: "Support", class: "size-5" }),
      },
      fee: {
        label: () => t("Fee"),
        element: () => e(l, { htmlName: "fee" }),
        icon: () => e(a, { name: "Fee", class: "size-5" }),
      },
      googlecheck: {
        label: () => t("Google Authenticator"),
        element: () => e(l, { htmlName: "google_authenticator" }),
        icon: () => e(a, { name: "GoogleAuthenticator", class: "size-5" }),
      },
      faq: {
        label: () => t("FAQs"),
        element: () => e(l, { htmlName: "faq" }),
        icon: () => e(a, { name: "Faq", class: "size-5" }),
      },
      passcurrency: {
        label: () => t("Currency"),
        element: () => e(l, { htmlName: "currency" }),
        icon: () => e(a, { name: "Currency", class: "size-5" }),
      },
      reglog: {
        label: () => t("Registration and Login"),
        element: () => e(l, { htmlName: "registration_login" }),
        icon: () => e(a, { name: "RegistrationandLogin", class: "size-5" }),
      },
      swappolicy: {
        label: () => t("Swap Policy"),
        element: () => e(l, { htmlName: "swap_policy" }),
        icon: () => e(a, { name: "SwapPolicy", class: "size-5" }),
      },
      "gameble-aware": {
        label: () => t("Gamble Aware"),
        element: () => e(l, { htmlName: "gamble_minors" }),
        icon: () => e(a, { name: "GambleAware", class: "size-5" }),
      },
      "protect-minors": {
        label: () => t("Protecting Minors"),
        element: () => e(l, { htmlName: "gamble_minors" }),
        icon: () => e(a, { name: "ProtectingMinors", class: "size-5" }),
      },
      providers: {
        label: () => t("Providers"),
        element: () => e(l, { htmlName: "providers" }),
        icon: () => e(a, { name: "Providers", class: "size-5" }),
      },
      aml: {
        label: () => t("AML"),
        element: () =>
          e(l, {
            get htmlName() {
              return h.includes(c.host) ? "aml" : "aml_update";
            },
          }),
        icon: () => e(a, { name: "Aml", class: "size-5" }),
      },
      "self-exclusion": {
        label: () => t("Self-exclusion"),
        element: () =>
          e(l, { htmlName: "self_exclusion", isSelfExclusion: !0 }),
        icon: () => e(a, { name: "SelfExclusion", class: "size-5" }),
      },
      "responsible-gambling": {
        label: () => t("Responsible Gambling"),
        element: () => e(l, { htmlName: "responsible_gambling" }),
        icon: () => e(a, { name: "ResponsibleGambling", class: "size-5" }),
      },
      announcement: {
        label: () => t("Important Announcement"),
        element: () => e(l, { htmlName: "announcement" }),
        icon: () => e(a, { name: "announcement", class: "size-5" }),
      },
    })),
    g = y(() =>
      u
        ? [
            "privacy",
            "terms-service",
            "terms-sports",
            "responsible-gambling",
            "faq",
            "contact_us",
            "about_us",
          ]
        : s
        ? r
        : o()
    );
  return (
    S(() => {
      w(() => {
        n.pathname === "/help" && p("/help/provably-fair", { replace: !0 });
      });
    }),
    e(C, {
      get when() {
        return c.mobile;
      },
      get fallback() {
        return e(I, {
          get routes() {
            return g();
          },
          get routesMap() {
            return b();
          },
        });
      },
      get children() {
        return e(G, {
          get routes() {
            return g();
          },
          get routesMap() {
            return b();
          },
        });
      },
    })
  );
}
const G = function (s) {
    const u = N(),
      p = d(),
      n = () => s.routes.find((o) => o === u.helpId) || s.routes[0];
    return e(A, {
      get title() {
        return t("Help Center");
      },
      get children() {
        return [
          (() => {
            var r = x();
            return (
              i(
                r,
                e(M, {
                  class: "w-full",
                  get value() {
                    return n();
                  },
                  get options() {
                    return s.routes;
                  },
                  onChange: (o) => {
                    p(`/help/${o}`, { replace: !0 });
                  },
                  children: (o) =>
                    (() => {
                      var b = F();
                      return (
                        i(b, () => {
                          var g;
                          return (g = s.routesMap[o()]) == null
                            ? void 0
                            : g.label();
                        }),
                        b
                      );
                    })(),
                })
              ),
              r
            );
          })(),
          (() => {
            var r = O();
            return (
              i(
                r,
                e(_, {
                  get children() {
                    var o;
                    return (o = s.routesMap[n()]) == null
                      ? void 0
                      : o.element();
                  },
                })
              ),
              r
            );
          })(),
        ];
      },
    });
  },
  I = function (s) {
    const u = N(),
      p = y(() =>
        s.routes.map((n) => ({
          href: `/help/${n}`,
          title: (() => {
            var r = H();
            return (
              i(r, () => s.routesMap[n].icon(), null),
              i(r, () => s.routesMap[n].label(), null),
              r
            );
          })(),
        }))
      );
    return e($, {
      get title() {
        return (() => {
          var n = E();
          return i(n, () => t("Help Center")), n;
        })();
      },
      get menu() {
        return p();
      },
      get children() {
        return e(_, {
          get fallback() {
            return e(T, { class: "relative left-1/2 top-60" });
          },
          get children() {
            var n = B();
            return (
              i(n, () => s.routesMap[u.helpId || "provably-fair"].element()), n
            );
          },
        });
      },
    });
  };
export { Y as default };
