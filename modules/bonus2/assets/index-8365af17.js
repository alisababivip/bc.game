import { i as e, c as s, s as U, e as re, t as l } from "./web-13cf6287.js";
import {
  a1 as Ae,
  B as Be,
  e as Oe,
  p as Fe,
  I as Ke,
  a2 as ae,
  S as Ne,
  l as Ye,
  P as Ee,
  D as h,
} from "./manifest-cc1f4445.js";
import { b as qe } from "./router-3828f409.js";
import { F as ze, b as p, d as Je, S as ne } from "./solid-js-38561dfe.js";
import { a as Qe } from "./store-a43dfcbd.js";
import { t, T as W } from "./i18n-023baa0d.js";
import { c as Xe, l as m, a as w, b as e1 } from "./level3-2267c79e.js";
var t1 = l(
    '<table class="mt-4 w-full rounded-lg bg-layer3 text-center"><thead class=text-secondary><tr><th class="px-3 py-2 text-left"></th><th class="px-3 py-2"></th><th class="px-3 py-2 text-right"></th></tr></thead><tbody>'
  ),
  s1 = l(
    '<tr><td class="flex items-center justify-start gap-1 p-3"><img class="h-5 w-4"><span></span></td><td class=p-3></td><td class="flex items-center justify-end gap-1 p-3"><img class="h-4 w-4"><span class="font-extrabold text-brand">'
  );
const l1 = function () {
  const a = [
    { icon: m, Level: "VIP 04", wager: "1000", amount: "+0.50" },
    { icon: m, Level: "VIP 08", wager: "5000", amount: "+2.50" },
    { icon: m, Level: "VIP 14", wager: "17000", amount: "+5.00" },
    { icon: m, Level: "VIP 22", wager: "49000", amount: "+12.00" },
    { icon: m, Level: "VIP 30", wager: "129000", amount: "+25.00" },
    { icon: w, Level: "VIP 38", wager: "321000", amount: "+50.00" },
    { icon: w, Level: "VIP 46", wager: "769000", amount: "+80.00" },
    { icon: w, Level: "VIP 54", wager: "1793000", amount: "+120.00" },
    { icon: w, Level: "VIP 62", wager: "4097000", amount: "+205.00" },
    { icon: e1, Level: "VIP 70", wager: "9217000", amount: "+500.00" },
  ];
  return (() => {
    var c = t1(),
      g = c.firstChild,
      C = g.firstChild,
      d = C.firstChild,
      f = d.nextSibling,
      b = f.nextSibling,
      S = g.nextSibling;
    return (
      e(d, () => t("Friend’s Level")),
      e(f, () => t("Total Wager")),
      e(b, () => t("Unlock Amount")),
      e(
        S,
        s(ze, {
          each: a,
          children: (r) =>
            (() => {
              var u = s1(),
                n = u.firstChild,
                R = n.firstChild,
                M = R.nextSibling,
                x = n.nextSibling,
                L = x.nextSibling,
                v = L.firstChild,
                V = v.nextSibling;
              return (
                e(M, () => r.Level),
                e(x, () => r.wager),
                U(v, "src", Xe),
                e(V, () => r.amount),
                re(() => U(R, "src", r.icon)),
                u
              );
            })(),
        })
      ),
      c
    );
  })();
};
var a1 = l("<span class=font-extrabold>"),
  ie = l("<span class=error-message>"),
  n1 = l('<span class="mr-1 text-xl font-extrabold text-brand">Share'),
  i1 = l('<span class="text-xl font-extrabold">to friends'),
  D = l("<br>"),
  r1 = l(
    "<p class=text-secondary>Share your referral link or code to your friends"
  ),
  o1 = l('<span class="mr-1 text-xl font-extrabold">Get'),
  c1 = l('<span class="text-xl font-extrabold text-brand">$1000'),
  d1 = l("<p class=text-secondary>Your awards will be locked for now"),
  x1 = l('<span class="mr-1 text-xl font-extrabold">Level Up &'),
  p1 = l('<span class="text-xl font-extrabold text-brand">Receive'),
  m1 = l(
    "<p class=text-secondary>Your friend’s VIP level will unlock your awards (see rules below)"
  ),
  g1 = l(
    '<div class="flex flex-col gap-4 bg-layer2 font-semibold"><div class="flex flex-col gap-4 md:flex-row"><section class="relative rounded-xl bg-layer4 px-4 py-3 md:w-3/5"><h2 class="mb-4 border-b border-input pb-2 text-base font-extrabold text-secondary"></h2><div class="flex flex-col gap-3"><h2 class="text-base font-extrabold"></h2><div class="flex flex-col gap-3 lg:flex-row"><div class=flex-1><p class="mb-2 text-secondary"></p><div class="center gap-1 rounded-lg border border-input bg-layer5 p-3 text-xs"><span class=text-secondary></span><span class=text-secondary>&times; 1% &times;</span><span></span><span class=text-secondary>&times;</span><span>28%</span></div></div><div class=flex-1><p class="mb-2 text-secondary"></p><div class="center gap-1 rounded-lg border border-input bg-layer5 p-3 text-xs"><span class=text-secondary></span><span class=text-secondary>&times; 1% &times;</span><span class=w></span><span class=text-secondary>&times;</span><span class=w>60%</span></div></div></div><div class=data><p class="text-base font-extrabold"></p><div class="center gap-1 rounded-lg border border-input bg-layer5 p-3 text-xs"><span class=text-secondary></span><span class=text-secondary>&times; 1% &times;</span><span></span><span class=text-secondary>&times;</span><span class=w>100%</span></div></div></div><div class="center mt-4 w-full flex-col text-secondary"></div></section><section class="relative rounded-xl bg-layer4 px-4 py-3 md:w-2/5"><div class="mb-4 flex items-center justify-between border-b border-input pb-2"><div class="center gap-2 text-base font-extrabold text-secondary"><p></p></div><div class="flex gap-2"><img class="h-4 w-4"><span class=w>USDT</span></div></div><div class="flex flex-col gap-4"><div class="flex items-center justify-between gap-4"><div class="flex w-10 flex-auto flex-col gap-1"><span class=text-secondary></span></div><span class="mt-5 flex-none text-nowrap text-secondary">&times; 1% &times;</span><div class="flex w-10 flex-auto flex-col gap-1"><span class=text-secondary></span></div></div><div class=w-full><span class=text-secondary></span></div><div class="flex items-center gap-2"><span class=text-secondary>=</span><span class="text-xl font-extrabold"> USDT</span></div></div></section></div><section class="relative rounded-xl bg-layer4 px-4 py-3"><h2 class="mb-4 border-b border-input pb-2 text-base font-extrabold text-secondary"></h2><div class="flex flex-col gap-3 md:flex-row"><div class="flex flex-1 gap-4 rounded-lg bg-layer5 p-4"><div class="text-5xl text-brand">1</div><div class=text></div></div><div class="flex flex-1 gap-4 rounded-lg bg-layer5 p-4"><div class="text-5xl text-brand">2</div><div class=text></div></div><div class="flex flex-1 gap-4 rounded-lg bg-layer5 p-4"><div class="text-5xl text-brand">3</div><div class=text>'
  ),
  y = l("<p>"),
  C1 = l('<div class="flex flex-col gap-5 font-semibold text-secondary">'),
  f1 = l(
    '<svg width=12 height=16 viewBox="0 0 16 18"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.4369 0H13.5663C14.25 0.0639844 14.7785 0.369492 15.1519 0.916523C15.2927 1.12254 15.3916 1.35117 15.4486 1.60242C15.4837 1.75805 15.5012 1.96617 15.501 2.2268C15.4972 6.71625 15.4973 11.2311 15.5013 15.7714C15.5015 16.0253 15.4843 16.2302 15.4496 16.3863C15.2485 17.287 14.4849 17.9251 13.5603 18H2.43444C1.9017 17.9536 1.45615 17.7495 1.0978 17.3876C0.699358 16.9854 0.500256 16.4825 0.500491 15.879C0.501194 11.3474 0.500725 6.81293 0.499084 2.27566C0.499084 1.98059 0.516428 1.75605 0.551116 1.60207C0.608069 1.35059 0.706975 1.12195 0.847835 0.916172C1.2226 0.368906 1.75229 0.0635156 2.4369 0ZM4.06533 2.25C3.89258 2.25 3.72151 2.28404 3.56192 2.35019C3.40233 2.41633 3.25733 2.51328 3.13523 2.63548C3.01312 2.75769 2.91629 2.90276 2.85027 3.06241C2.78426 3.22205 2.75035 3.39314 2.75049 3.5659L2.75119 4.68633C2.75147 5.03486 2.89012 5.36903 3.13668 5.61538C3.38323 5.86173 3.7175 6.00012 4.06604 6.00012L11.9344 6.00047C12.2831 6.00047 12.6175 5.86194 12.8641 5.61536C13.1107 5.36878 13.2492 5.03434 13.2492 4.68563V3.56484C13.2492 3.21613 13.1107 2.88169 12.8641 2.63511C12.6175 2.38853 12.2831 2.25 11.9344 2.25H4.06533ZM4.4401 9.58852C4.43448 9.89965 4.39088 10.1981 4.68408 10.3989C5.02053 10.6291 5.45401 10.4453 5.54647 10.0593C5.58092 9.91687 5.55947 9.73687 5.56299 9.58219C5.56322 9.56812 5.57049 9.56121 5.58479 9.56145C5.71323 9.56355 5.83733 9.56344 5.95709 9.56109C6.34908 9.55266 6.62541 9.12094 6.44365 8.75883C6.32658 8.52574 6.11916 8.42801 5.86639 8.43574C5.77194 8.43879 5.67678 8.43926 5.58092 8.43715C5.56826 8.43668 5.56205 8.43012 5.56229 8.41746C5.56334 8.30988 5.56053 8.20406 5.56334 8.09789C5.57951 7.46508 4.75018 7.26891 4.48475 7.83914C4.40916 8.00156 4.44115 8.23957 4.43799 8.42168C4.4379 8.42538 4.43639 8.42891 4.43377 8.43152C4.43115 8.43414 4.42763 8.43565 4.42393 8.43574C4.13951 8.44594 3.821 8.38125 3.62237 8.6509C3.33865 9.03621 3.58967 9.56883 4.08432 9.5632C4.19213 9.56203 4.30217 9.5618 4.41444 9.5625C4.43178 9.5625 4.44033 9.57117 4.4401 9.58852ZM12.4947 9.16594C12.4947 9.02281 12.4379 8.88555 12.3367 8.78435C12.2355 8.68314 12.0982 8.62629 11.9551 8.62629H10.0454C9.97454 8.62629 9.90437 8.64025 9.8389 8.66737C9.77343 8.69449 9.71393 8.73424 9.66382 8.78435C9.61371 8.83446 9.57396 8.89395 9.54684 8.95942C9.51972 9.0249 9.50576 9.09507 9.50576 9.16594V9.20742C9.50576 9.27829 9.51972 9.34846 9.54684 9.41394C9.57396 9.47941 9.61371 9.5389 9.66382 9.58901C9.71393 9.63912 9.77343 9.67887 9.8389 9.70599C9.90437 9.73311 9.97454 9.74707 10.0454 9.74707H11.9551C12.0982 9.74707 12.2355 9.69022 12.3367 9.58901C12.4379 9.48781 12.4947 9.35054 12.4947 9.20742V9.16594ZM4.18733 13.5162C4.05045 13.6584 3.91088 13.7978 3.76862 13.9342C3.66291 14.0352 3.59436 14.117 3.56295 14.1796C3.32705 14.6496 3.79041 15.1457 4.2724 14.9583C4.36006 14.9241 4.46658 14.841 4.59198 14.709C4.72416 14.5693 4.85694 14.4356 4.9903 14.3079C4.99826 14.3004 5.006 14.3005 5.0135 14.3082C5.1853 14.4803 5.35826 14.6529 5.5324 14.8261C5.85197 15.1439 6.34416 15.0068 6.47776 14.5874C6.53612 14.4032 6.47565 14.1824 6.33573 14.0411C6.16674 13.87 5.99026 13.6929 5.80627 13.5098C5.80376 13.5073 5.80235 13.5039 5.80235 13.5003C5.80235 13.4967 5.80376 13.4932 5.80627 13.4905C5.98065 13.3164 6.15479 13.1419 6.32869 12.967C6.75901 12.535 6.31463 11.8318 5.74229 12.035C5.66119 12.0639 5.58139 12.1187 5.50287 12.1996C5.34631 12.3608 5.18248 12.525 5.01139 12.6921C5.00812 12.6953 5.00373 12.697 4.99919 12.6969C4.99464 12.6969 4.99031 12.695 4.98713 12.6918C4.78346 12.4857 4.60533 12.3079 4.45276 12.1581C4.22987 11.9398 3.86811 11.9507 3.6526 12.1778C3.44061 12.4014 3.45362 12.7487 3.67053 12.9656C3.8517 13.1463 4.02385 13.3181 4.18698 13.481C4.19846 13.4927 4.19858 13.5045 4.18733 13.5162ZM12.4947 12.5409C12.4947 12.3978 12.4379 12.2606 12.3367 12.1593C12.2355 12.0581 12.0982 12.0013 11.9551 12.0013H10.0454C9.97454 12.0013 9.90437 12.0152 9.8389 12.0424C9.77343 12.0695 9.71393 12.1092 9.66382 12.1593C9.61371 12.2095 9.57396 12.2689 9.54684 12.3344C9.51972 12.3999 9.50576 12.4701 9.50576 12.5409V12.5824C9.50576 12.6533 9.51972 12.7235 9.54684 12.7889C9.57396 12.8544 9.61371 12.9139 9.66382 12.964C9.71393 13.0141 9.77343 13.0539 9.8389 13.081C9.90437 13.1081 9.97454 13.1221 10.0454 13.1221H11.9551C12.0982 13.1221 12.2355 13.0652 12.3367 12.964C12.4379 12.8628 12.4947 12.7255 12.4947 12.5824V12.5409ZM12.4938 14.4217C12.494 14.3509 12.4803 14.2806 12.4534 14.2151C12.4265 14.1495 12.387 14.0899 12.337 14.0396C12.2871 13.9893 12.2277 13.9494 12.1624 13.922C12.097 13.8947 12.0269 13.8805 11.956 13.8802L10.0484 13.8735C9.90531 13.873 9.76785 13.9294 9.66629 14.0303C9.56474 14.1311 9.5074 14.2682 9.5069 14.4113L9.50675 14.4542C9.5065 14.5251 9.52022 14.5953 9.54711 14.6609C9.574 14.7264 9.61354 14.7861 9.66348 14.8363C9.71342 14.8866 9.77277 14.9266 9.83815 14.9539C9.90352 14.9813 9.97365 14.9955 10.0445 14.9957L11.9521 15.0024C12.0952 15.0029 12.2327 14.9465 12.3342 14.8457C12.4358 14.7448 12.4931 14.6077 12.4936 14.4646L12.4938 14.4217Z"fill=#98A7B5>'
  );
const R1 = function () {
    const a = qe(),
      [c, g] = p(a.rule === "open"),
      C = [
        [() => t("Original Games (28%)"), 0.28],
        [() => t("Live Casino (60%)"), 0.6],
        [() => t("3rd Party Slots (60%)"), 0.6],
        [() => t("Sport Games (100%)"), 1],
      ],
      [d, f] = p(1e3),
      [b, S] = p(25),
      [r, u] = p(C[0]),
      [n, R] = Qe({
        wager: 0,
        MinWagerMessage: "Minimum 1 USDT",
        MaxWagerMessage: "Maximum 10,000,000 USDT",
        commissionRate: 0,
        MinCommissionRateMessage: "Minimum 1%",
        MaxCommissionRateMessage: "Range 1% - 100%",
      }),
      [M, x] = p(""),
      L = () => {
        if (n.wager || n.commissionRate) {
          x("--");
          return;
        }
        const _ = r()[1];
        x(
          new h(d())
            .times(new h(b()))
            .div(1e4)
            .times(new h(_))
            .toFixed(2, h.ROUND_DOWN)
        );
      };
    Je(() => {
      L();
    });
    const v = 1,
      V = 1e7,
      ce = 1,
      de = 100;
    return (() => {
      var _ = g1(),
        H = _.firstChild,
        G = H.firstChild,
        Z = G.firstChild,
        k = Z.nextSibling,
        j = k.firstChild,
        A = j.nextSibling,
        B = A.firstChild,
        O = B.firstChild,
        xe = O.nextSibling,
        F = xe.firstChild,
        pe = F.nextSibling,
        me = pe.nextSibling,
        ge = B.nextSibling,
        K = ge.firstChild,
        Ce = K.nextSibling,
        N = Ce.firstChild,
        fe = N.nextSibling,
        be = fe.nextSibling,
        ue = A.nextSibling,
        Y = ue.firstChild,
        ve = Y.nextSibling,
        E = ve.firstChild,
        _e = E.nextSibling,
        $e = _e.nextSibling,
        q = k.nextSibling,
        he = G.nextSibling,
        z = he.firstChild,
        I = z.firstChild,
        J = I.firstChild,
        we = I.nextSibling,
        ye = we.firstChild,
        Se = z.nextSibling,
        Q = Se.firstChild,
        $ = Q.firstChild,
        Re = $.firstChild,
        Me = $.nextSibling,
        P = Me.nextSibling,
        Le = P.firstChild,
        T = Q.nextSibling,
        Ve = T.firstChild,
        Ie = T.nextSibling,
        Pe = Ie.firstChild,
        X = Pe.nextSibling,
        Te = X.firstChild,
        ee = H.nextSibling,
        te = ee.firstChild,
        We = te.nextSibling,
        se = We.firstChild,
        De = se.firstChild,
        Ue = De.nextSibling,
        le = se.nextSibling,
        He = le.firstChild,
        Ge = He.nextSibling,
        Ze = le.nextSibling,
        ke = Ze.firstChild,
        je = ke.nextSibling;
      return (
        e(Z, () => t("Commission Reward Rate")),
        e(j, () => t("Casino")),
        e(O, () => t("The Original Games")),
        e(F, () => t("Wager")),
        e(me, () => t("Commission Rate")),
        e(K, () => t("3rd Party Slots, Live Casino")),
        e(N, () => t("Wager")),
        e(be, () => t("Commission Rate")),
        e(Y, () => t("All Sports")),
        e(E, () => t("Wager")),
        e($e, () => t("Commission Rate")),
        e(
          q,
          s(Ae, {
            get when() {
              return c();
            },
            get children() {
              return s(oe, {});
            },
          }),
          null
        ),
        e(
          q,
          s(Be, {
            class: "right-4 top-2 h-8 sm:absolute",
            type: "second",
            onClick: () => {
              Oe.mobile ? g((i) => !i) : Fe.push(() => s(b1, {}));
            },
            get children() {
              return [
                (() => {
                  var i = a1();
                  return e(i, () => t("View Rules")), i;
                })(),
                s(Ke, {
                  name: "Arrow",
                  get class() {
                    return `ml-1 w-4 -rotate-90 text-secondary transition-all ${
                      c() ? "rotate-90" : ""
                    }`;
                  },
                }),
              ];
            },
          }),
          null
        ),
        e(I, s(u1, {}), J),
        e(J, () => t("Commission Calculator")),
        e(Re, () => t("Wager (USDT)")),
        e(
          $,
          s(ae, {
            min: v,
            max: V,
            get value() {
              return d();
            },
            onChange: f,
            class: "bg-layer3",
          }),
          null
        ),
        e(
          $,
          s(ne, {
            get when() {
              return !!n.wager;
            },
            get children() {
              var i = ie();
              return (
                e(i, () =>
                  n.wager === 1 ? n.MinWagerMessage : n.MaxWagerMessage
                ),
                i
              );
            },
          }),
          null
        ),
        e(Le, () => t("Commission Rate")),
        e(
          P,
          s(ae, {
            min: ce,
            max: de,
            get value() {
              return b();
            },
            onChange: S,
            class: "bg-layer3",
          }),
          null
        ),
        e(
          P,
          s(ne, {
            get when() {
              return !!n.commissionRate;
            },
            get children() {
              var i = ie();
              return (
                e(i, () =>
                  n.commissionRate === 1
                    ? n.MinCommissionRateMessage
                    : n.MaxCommissionRateMessage
                ),
                i
              );
            },
          }),
          null
        ),
        e(Ve, () => t("Game")),
        e(
          T,
          s(Ne, {
            class: "w-full !bg-layer3",
            get value() {
              return r();
            },
            onChange: u,
            options: C,
            children: (i) => i()[0](),
          }),
          null
        ),
        e(X, M, Te),
        e(te, () => t("How to Get your Referral Reward")),
        e(
          Ue,
          s(W, {
            i18nKey: "bonus.affiliate.step1",
            get children() {
              return [n1(), i1(), D(), r1()];
            },
          })
        ),
        e(
          Ge,
          s(W, {
            i18nKey: "bonus.affiliate.step2",
            get children() {
              return [o1(), c1(), D(), d1()];
            },
          })
        ),
        e(
          je,
          s(W, {
            i18nKey: "bonus.affiliate.step3",
            get children() {
              return [x1(), p1(), D(), m1()];
            },
          })
        ),
        e(ee, s(l1, {}), null),
        re(() => U(ye, "src", Ye.coinIcon("USDT"))),
        _
      );
    })();
  },
  oe = function () {
    return [
      (() => {
        var a = y();
        return (
          e(a, () =>
            t(
              "In any public environment (eg, universities, schools, libraries, and office spaces), only one commission can be paid to each user, IP address, electronic device, home, phone number, billing method, email address, and computer and IP address shared with others."
            )
          ),
          a
        );
      })(),
      (() => {
        var a = y();
        return (
          e(a, () =>
            t(
              "Our decision to draw a bet will be based entirely on our discretion after a deposit is made and a bet is successfully placed."
            )
          ),
          a
        );
      })(),
      (() => {
        var a = y();
        return (
          e(a, () =>
            t(
              "We support the majority of currencies on the market. Commissions can be withdrawn into our internal BCgame wallet at anytime. (View your commission extraction in the dashboard and view the balance in the wallet)."
            )
          ),
          a
        );
      })(),
      (() => {
        var a = y();
        return (
          e(a, () => t("The system calculates the commission every 24 hours.")),
          a
        );
      })(),
    ];
  };
function b1() {
  return s(Ee, {
    get title() {
      return t("Rules");
    },
    get children() {
      var o = C1();
      return e(o, s(oe, {})), o;
    },
  });
}
const u1 = () => f1();
export { R1 as default };
