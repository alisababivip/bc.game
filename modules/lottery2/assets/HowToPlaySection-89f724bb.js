import {
  b as p,
  i as t,
  k as b,
  h as d,
  c as i,
  S as ue,
  p as he,
  t as g,
} from "./solid-js-8ff414d5.js";
import { s as c, n as m } from "./manifest-987d6c36.js";
import { t as n } from "./i18n-9df4b53a.js";
import { A as u } from "./ArrowIcon-28af983a.js";
const Ae =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAPFBMVEUAAAAo74cl7okl7okg74Mk74kk7ool7Ykk7ogk7ook7okk7okl74ok7okj74kj7ogl74ok7Yok74kk7om5Fa86AAAAE3RSTlMAIN9gEEDvoIC/cM8wr1CQn4+vUFXoBwAAAhZJREFUWMPtl9l2gyAQhmUZFgWimfd/15aGShShQLnpqf9VNPox+xynW7du/V8RtlkqEHGx7Pc02Ci+iZJf0gSeRHk/jmm8kOrFzQIvJTqd9ZHTyhkCTtIDsSeK3CLiaqLz70jXZx6Fwy0Vge2lo67Kg3UD+brz+GwpXSQcidDYFsseeCYO1fwIV6aN9xX+9RQ26iE88HlTOsReGSzpD/X6WWUXIWAI+YY8/b1j8W27ic8yis9ySVqC7QbuEt7Er1acyxVygsWw2+SQkBZTzmiqEPbzXypYTTvaH2MIU+CagQUH6i2cvQWlsuYWszIXx8HrHm0MX7QG8E0BpPMeE4oF6fD2KcmkMAw1FsXPZz7CeNDZBJeBMniRXEO+BGWBF17k6oXUbppiSgrIJI7p+oVZMROdck17Mio3sW3FeAaRI7LDc4/qfSfzmYE4kmj9igfMi24MwM3y5cUy1UlgnSipXpp1guq1WcdTU7XkYN5EiqTYeyNN1FOT+E+JXngZ0Dp7RBPPVI3HBi3g81J2mjSlmPrzYRiQhRJjQ4AheuanDmzxOH7LOJHNcpPHXrq8WpdGj2Nnqd4+SSeN5YVd+GjyOI7PLHKuB1qM2khuvUI9UFxvJWc7kwyH0CtIY+G11gPNboRkxwHgOvvEJqYFkd4PbhZMS7Qn5jmNkYyfUGPEYnmOEY+8QdKDeZMLvHF6fvJu3fob+gA6tXma8nwc7gAAAABJRU5ErkJggg==",
  ye =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAP1BMVEUAAAAk7ooo74cl7ool7Iok74sl7okg74Ak7ook7okl8Igj74gl74ok7Ykg748k7ooj7okk74ck7okl74ok7onDAfSjAAAAFHRSTlMAvyCfYEDfEO+AYFAwcBDPkECvb/hEWbQAAAGjSURBVFjD7ZfrcoQgDEYFFAJe1rZ5/2dtx7HL7n5csowzbbeev8ajBJJod3Jy8q/Q+kib88RsV3eY78Ib9iij4R1zUPr4yjGvOEZh33K7eURFoYKL1Ues/CRemC85U1HYSzXSvL49Lxy6IupZn+rKLLNKsFeKQnzb0Sxl6weELow6J8S4OhMxc6gLAzHbSSC0/AW5mlDTtk8ZCR5tXxN6OIUZ9mZKriK0cAwrpTKXhT0USoZ33rFloRVWioYaTQt7abcx90WKQiz5VdwOBxBCpnH78AUjKi80wp69WL5FgzDZ18lJ+/WaExrpWLEMj0YhDh6qDOCITwt76RQw0N5BmB4TJlvGj6SFEGYzQoJIjcKYwnoSWSoEKpsccSnhIl6ygsB0Dkk6mz3sHgjTp2EGVWYtQ1r4hqnOsOJKUIi5McLmQPnmQHeZjnGAvjWO+fYVwFc32qnUsadr3EV3ZYLa0udrYzRctrjQ1XGTjjYQQtwrfM79IaEbvuENP+zoNt8HNfw+tf5UDQ3CuSScf4NwoYKwaVtGm9PR2LWhM3QnJycvzyf5fW1pneDy8AAAAABJRU5ErkJggg==",
  fe =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAQlBMVEUAAAAo74cl7okk7oog74Ql7ook7ook74ck7ogj74kk74kl7Iok7ook74sk7ooj7okl74kk74sl74ol74ck74gk7oncbu5/AAAAFXRSTlMAIN/vEJ+/QIBQr2Bwf8+QMEBgYHAvjKUaAAADCUlEQVRYw+2X25arIAyGIRARtZ6q7/+qu2UXEo1Cnc7NrNX/ygp8hhwgVV999adk7e9gpq6B8OTWtW/q6TPaXJn1oQgMatof426BRsAoQP0T3JAACUi6juzMKoBc0F3C6WolcSBHXjDSm7UMXMG/y7utJA4Uuv2IB8P8Ghj90AviRZ6p9c67CBeJtw3OKqk7XCH6lTREnPZzV8/TGH8OK6kQGQ1kngtvrEeTXsWy82xaPnsqnmZUfiS46d2HqxyvTdN6K+olIttApHh3hQ2TfbZZD4X2OZjmGnsKROJFvBANJ+vrUwPTirvkSaKLTjzfs3tlLaYtxTXVw6sVJz63OTxHlsLNMA7w//vIlz+NV2plaoKPiZZlOoq3AOZjW463BBZiW65oAwCV0gBKQYyriO0hfGzZazJw2kQNDkzUXUWzmLpHyFodKybJS1fwEX2rzjwayuLFbE7vDkcDGKyIz1I9S2qzzxCdzj4aMmwrvZIy5LRx5apSEdng3SRNM42SWoPCKpcBmo0TbXzOFHLciATW4YHUMjN0FlgLoHXOhTUDL5a3gZ0AJtmepTYHXt0yPNR7yhux5WxQ/ElQzDYqUy4oNHEkaxkwjoV8pZkukzY924gRQEpfc5TYVeZCQXqm0rHzQy6cIZsKQnoWiqGFbf9QaXlz04cgc9w67mtzdOxtb1bg5k4qE5Vhk9qAiIOyiEoh9mabhZiJCRu1wcTCFQCanY54CHT828s5kDx4K7Rghh/uTR6I/PiGYx45bthd9AYf+Ab3Fz2WehFynH+nFWnZSVsy0bzTLAHbUNFECD/xmNdY0fqdadl55Q4SZ7rdfXovt8RUmrpmSP7HQJtiS/yaJzZxbwxF26fuwtOGs3IsT1ud+rG5XmZPS9nt4lRBS3JgG1p+Ift6aXtydlY1sDYGcNyOToOJXtOGeFnZ7QkO2E42AMYZgZ9+i+CVO0Qpfvz5C7xJUnal/ElLLIXqqu4FYneZqAcBEfVyGQkf4qQ8GkFDpz6SW5rKvFg9LkT7TPoh9dVXf0b/APZHpUkdNL19AAAAAElFTkSuQmCC",
  ke =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAPFBMVEUAAAAo74cl7okl7Yol7ook74kk7oog74Ik7okk7ool74oj74kk7ook7okk7osk74kk7ooj7Ygk74kk7okdfZi2AAAAE3RSTlMAIN9gn0C/EIDvMFCvz3Bwz5CPOlrx8wAAAl5JREFUWMPtmNuO4yAMhgsYc8z5/d91pylqCA5uEFppR9v/kphvjG1spo+vvvpfZUSS6eR4ZQGl2zK5AcEG3U72I8iN0RBHf5+mV7fdkIRwhyYsoXFM8QmHZM8cAewuAEQSCBZp7AkFU0jW8ilI4dVTnHM7W3dvOLIJKs/kvoa5aciSJkWF9zZBfS5Dva/O+lyIGt5Ez/IWk8HK8hmiDeK9BTgf00bMvxUZpw6JmHZRnkru5WtrIuCyJxnnC3dSHhUBIuU9Es8dIfXBxuLe2WsXzeuPn43jO+m4jkFnntFYldf7lUgoVq3cypRoApz2T+V6qNSotjifoQ7EVfTVZU5iGYiUSx2mJc6VQgYGuJ1N1w3H7ChiubpsQnLAwdCbOESrgtZarXKjNWKSFQHS4yyVPuYmcv8rQGKuLbqSFqe8QEa3McAkefpmngl5HX1S51I0KsWgBjyQcK4qQYqUDAoKJEdTvg4UIyQaDyyhCK8LZ/RT4knyaoThgHFARjKJG1+B3OVOadJtOmVoP+wSFrjuM6sHEfY5SBV6gNPlFO2RJ0DoTcpfKRuaZN3sKPiNGVLb83nREExnfxxj77Levb3HdMvLmgEesfUqzvzTdRLHnK8ASRf1wQLO8gSSEazy5kgm1NoX93oUSfSLlnw/5F/NFAc3Gywq85lmFLZ0bBw9/48RuoYRcLzhdIk1Iozr4HpmipOICD+KOEhCagJSfYfUbx9SPUPlaACU2M/rJw71bmK3djn7YCSgEfe52bUPKV6NQ+q2/PRxSPlHq4zeh5Qretk+pP6NH9O++ur36g9A0MFd9OI75gAAAABJRU5ErkJggg==",
  we = "/modules/lottery2/assets/step1-desc-f0154595.png",
  xe = "/modules/lottery2/assets/step2-desc-5b2ba750.png",
  ve = "/modules/lottery2/assets/step3-desc-c451d606.png",
  Se = "/modules/lottery2/assets/step4-desc-d5475af9.png",
  Ce = "/modules/lottery2/assets/step1-desc-white-e59a693a.png",
  Ee = "/modules/lottery2/assets/step2-desc-white-a5e6b7ff.png",
  Fe = "/modules/lottery2/assets/step3-desc-white-565e0ba8.png",
  Qe = "/modules/lottery2/assets/step4-desc-white-98b32257.png";
var S = g(
    '<section class="paragraph text-sm font-semibold text-secondary mt-3 w-full"><p></p><p></p><p></p><p>'
  ),
  h = g(
    '<section class="flex justify-center bg-layer4 mt-4 w-full rounded-xl"><img class=w-60 loading=lazy>'
  ),
  Ie = g(
    '<section class="paragraph text-sm font-semibold text-secondary mt-3 w-full"><p></p><p>'
  ),
  A = g("<div class=step-box-content>"),
  Ue = g(
    '<section class="howToPlaySectionWrap mt-4 scroll-mt-12"id=how-to-play><h2 class="how-to-play-section-title my-3 ml-0 text-primary text-base font-extrabold"></h2><div class="step-mobile mb-24"><section class="step-mobile-section p-3 mb-2 rounded-xl bg-layer4"><div class="step-box-header flex items-center justify-between"><div class="step-header-name-box flex gap-2"><label class="center w-8 h-8 rounded-full text-sm font-semibold text-primary bg-layer5">1</label><span class="step-header-name-content-box flex items-center gap-2"><label class="step-header-name-logo text-[0]"><img class="w-5 h-5"loading=lazy></label><label class="step-header-name-content text-base font-extrabold text-primary"></label></span></div><div class="inline-flex items-center justify-center rounded-md bg-layer5 w-6 h-6"></div></div></section><section class="step-mobile-section p-3 mb-2 rounded-xl bg-layer4"><div class="step-box-header flex items-center justify-between"><div class="step-header-name-box flex gap-2"><label class="center w-8 h-8 rounded-full text-sm font-semibold text-primary bg-layer5">2</label><span class="step-header-name-content-box flex items-center gap-2"><label class="step-header-name-logo text-[0]"><img class="w-5 h-5"loading=lazy></label><label class="step-header-name-content text-base font-extrabold text-primary"></label></span></div><div class="inline-flex items-center justify-center rounded-md bg-layer5 w-6 h-6"></div></div></section><section class="step-mobile-section p-3 mb-2 rounded-xl bg-layer4"><div class="step-box-header flex items-center justify-between"><div class="step-header-name-box flex gap-2"><label class="center w-8 h-8 rounded-full text-sm font-semibold text-primary bg-layer5">3</label><span class="step-header-name-content-box flex items-center gap-2"><label class="step-header-name-logo text-[0]"><img class="w-5 h-5"loading=lazy></label><label class="step-header-name-content text-base font-extrabold text-primary"></label></span></div><div class="inline-flex items-center justify-center rounded-md bg-layer5 w-6 h-6"></div></div></section><section class="step-mobile-section p-3 mb-2 rounded-xl bg-layer4"><div class="step-box-header flex items-center justify-between"><div class="step-header-name-box flex gap-2"><label class="center w-8 h-8 rounded-full text-sm font-semibold text-primary bg-layer5">4</label><span class="step-header-name-content-box flex items-center gap-2"><label class="step-header-name-logo text-[0]"><img class="w-5 h-5"loading=lazy></label><label class="step-header-name-content text-base font-extrabold text-primary"></label></span></div><div class="inline-flex items-center justify-center rounded-md bg-layer5 w-6 h-6">'
  );
const Pe = function () {
  const [y, _] = p(!0),
    [f, j] = p(!1),
    [k, B] = p(!1),
    [w, N] = p(!1),
    Z = (() => {
      var l = S(),
        s = l.firstChild,
        e = s.nextSibling,
        a = e.nextSibling,
        r = a.nextSibling;
      return (
        t(s, () =>
          n(
            "To begin wagering select your preferred Lucky Numbers game by clicking on the 'BET' button."
          )
        ),
        t(e, () =>
          n(
            "Choose from our extensive list of international Lucky Numbers draws by searching available draws on the Lucky Numbers page or find the most recent upcoming draws on the home page carousel."
          )
        ),
        t(a, () =>
          n(
            "Numerous Lucky Numbers draws take place regularly offering you the chance to win every day of the week."
          )
        ),
        t(r, () =>
          n(
            "Once you have selected the Lucky Numbers you will be provided with betting market types available for your selected game."
          )
        ),
        l
      );
    })(),
    O = (() => {
      var l = h(),
        s = l.firstChild;
      return (
        b(
          (e) => {
            var a = c.darken
                ? "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), #292D2E"
                : "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), #FFF",
              r = c.darken ? we : Ce;
            return (
              a !== e.e &&
                ((e.e = a) != null
                  ? l.style.setProperty("background", a)
                  : l.style.removeProperty("background")),
              r !== e.t && d(s, "src", (e.t = r)),
              e
            );
          },
          { e: void 0, t: void 0 }
        ),
        l
      );
    })(),
    H = (() => {
      var l = S(),
        s = l.firstChild,
        e = s.nextSibling,
        a = e.nextSibling,
        r = a.nextSibling;
      return (
        t(s, () =>
          n(
            "Varying selection ranges, above or below predicted sums and odd or even options are easy and quick to choose."
          )
        ),
        t(e, () =>
          n(
            "On completion of choosing your market, your wager will be added to the betslip. Finalise your wager by selecting the “BET” button."
          )
        ),
        t(a, () =>
          n(
            "By selecting the Regular Draw option you can choose your own numbers. If your pick matches the Lucky Numbers results exactly you will win your wager. The prize will be the multiple of the stake and the odds within the wagered market."
          )
        ),
        t(r, () =>
          n(
            "Other markets types, such as Draw Sum, allow wagering on the outcome of Lucky Numbers e.g. whether, for a particular draw, the sum of balls drawn will be odd or even. Remember, there can be only one unique bet per outcome, per wager, for the side markets."
          )
        ),
        l
      );
    })(),
    K = (() => {
      var l = h(),
        s = l.firstChild;
      return (
        b(
          (e) => {
            var a = c.darken
                ? "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), #292D2E"
                : "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), #FFF",
              r = c.darken ? xe : Ee;
            return (
              a !== e.e &&
                ((e.e = a) != null
                  ? l.style.setProperty("background", a)
                  : l.style.removeProperty("background")),
              r !== e.t && d(s, "src", (e.t = r)),
              e
            );
          },
          { e: void 0, t: void 0 }
        ),
        l
      );
    })(),
    J = (() => {
      var l = S(),
        s = l.firstChild,
        e = s.nextSibling,
        a = e.nextSibling,
        r = a.nextSibling;
      return (
        t(s, () =>
          n(
            "You may wager on multiple draws by changing the draws option. The draws available are limited to draws within a week period. Rapid Lucky Numbers, which occur in a very short space of time, will have a maximum of 10 draws available."
          )
        ),
        t(e, () => n("Similarly, you can change your stake per wager.")),
        t(a, () =>
          n(
            "Each wager entry will display the possible winnings for all your selected draws. This amount is the total sum of all your wagers as if you had won every wager."
          )
        ),
        t(r, () =>
          n(
            "Once you have verified your wager information, complete your transaction by pressing the 'BET' button."
          )
        ),
        l
      );
    })(),
    L = (() => {
      var l = h(),
        s = l.firstChild;
      return (
        b(
          (e) => {
            var a = c.darken
                ? "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), #292D2E"
                : "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), #FFF",
              r = c.darken ? ve : Fe;
            return (
              a !== e.e &&
                ((e.e = a) != null
                  ? l.style.setProperty("background", a)
                  : l.style.removeProperty("background")),
              r !== e.t && d(s, "src", (e.t = r)),
              e
            );
          },
          { e: void 0, t: void 0 }
        ),
        l
      );
    })(),
    M = (() => {
      var l = Ie(),
        s = l.firstChild,
        e = s.nextSibling;
      return (
        t(s, () =>
          n(
            "The wager page will summarise all transactions with the date,description, status, total stake and total payouts made."
          )
        ),
        t(e, () =>
          n(
            "In addition, we provide a full breakdown of your wager in the wager details section including important information such as transaction date, Lucky Numbers details, wager stake, odds, Lucky Numbers results, draw ID, wagered market type and payouts."
          )
        ),
        l
      );
    })(),
    W = (() => {
      var l = h(),
        s = l.firstChild;
      return (
        b(
          (e) => {
            var a = c.darken
                ? "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), #292D2E"
                : "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), #FFF",
              r = c.darken ? Se : Qe;
            return (
              a !== e.e &&
                ((e.e = a) != null
                  ? l.style.setProperty("background", a)
                  : l.style.removeProperty("background")),
              r !== e.t && d(s, "src", (e.t = r)),
              e
            );
          },
          { e: void 0, t: void 0 }
        ),
        l
      );
    })();
  return i(ue, {
    get children() {
      var l = Ue(),
        s = l.firstChild,
        e = s.nextSibling,
        a = e.firstChild,
        r = a.firstChild,
        C = r.firstChild,
        V = C.firstChild,
        D = V.nextSibling,
        E = D.firstChild,
        X = E.firstChild,
        G = E.nextSibling,
        q = C.nextSibling,
        x = a.nextSibling,
        F = x.firstChild,
        Q = F.firstChild,
        ee = Q.firstChild,
        te = ee.nextSibling,
        I = te.firstChild,
        le = I.firstChild,
        ae = I.nextSibling,
        se = Q.nextSibling,
        v = x.nextSibling,
        U = v.firstChild,
        $ = U.firstChild,
        re = $.firstChild,
        ne = re.nextSibling,
        R = ne.firstChild,
        oe = R.firstChild,
        ie = R.nextSibling,
        de = $.nextSibling,
        z = v.nextSibling,
        T = z.firstChild,
        P = T.firstChild,
        ce = P.firstChild,
        ge = ce.nextSibling,
        Y = ge.firstChild,
        pe = Y.firstChild,
        be = Y.nextSibling,
        me = P.nextSibling;
      return (
        t(s, () => n("How to play")),
        (r.$$click = () => _(!y())),
        d(X, "src", Ae),
        t(G, () => n("Select your Game")),
        t(
          q,
          i(u, {
            get isRotate() {
              return y();
            },
          })
        ),
        t(
          a,
          i(m, {
            get when() {
              return y();
            },
            get children() {
              var o = A();
              return t(o, O, null), t(o, Z, null), o;
            },
          }),
          null
        ),
        (F.$$click = () => j(!f())),
        d(le, "src", ye),
        t(ae, () => n("Select your Market")),
        t(
          se,
          i(u, {
            get isRotate() {
              return f();
            },
          })
        ),
        t(
          x,
          i(m, {
            get when() {
              return f();
            },
            get children() {
              var o = A();
              return t(o, K, null), t(o, H, null), o;
            },
          }),
          null
        ),
        (U.$$click = () => B(!k())),
        d(oe, "src", fe),
        t(ie, () => n("Make your Wager")),
        t(
          de,
          i(u, {
            get isRotate() {
              return k();
            },
          })
        ),
        t(
          v,
          i(m, {
            get when() {
              return k();
            },
            get children() {
              var o = A();
              return t(o, L, null), t(o, J, null), o;
            },
          }),
          null
        ),
        (T.$$click = () => N(!w())),
        d(pe, "src", ke),
        t(be, () => n("View your Wagers")),
        t(
          me,
          i(u, {
            get isRotate() {
              return w();
            },
          })
        ),
        t(
          z,
          i(m, {
            get when() {
              return w();
            },
            get children() {
              var o = A();
              return t(o, W, null), t(o, M, null), o;
            },
          }),
          null
        ),
        l
      );
    },
  });
};
he(["click"]);
export { Pe as HowToPlaySection, Pe as default };
