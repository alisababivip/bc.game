import { c as s, i, t as _ } from "./web-5c332740.js";
import { D as $ } from "./manifest-6dedd536.js";
import { u as f } from "./router-d36109eb.js";
import { S as m } from "./solid-js-9508438e.js";
import { t as e } from "./i18n-2889c705.js";
var x = _(
    '<section class=my-3><h2 class="text-lg font-semibold text-primary"></h2><ul class="text-lg font-semibold text-secondary list-inside list-disc"><li></li><li>'
  ),
  p = _(
    '<section class=my-3><h2 class="text-lg font-semibold text-primary"></h2><ul class="text-lg font-semibold text-secondary list-inside list-disc"><li></li><li></li><li>'
  ),
  S = _(
    '<section class=my-3><h2 class="text-lg font-semibold text-primary"></h2><ul class="text-lg font-semibold text-secondary list-inside list-disc"><li></li><li></li><li></li><li></li><li></li><li>'
  ),
  w = _(
    '<section class=my-3><h2 class="text-lg font-semibold text-primary"></h2><ul class="text-lg font-semibold text-secondary list-inside list-decimal"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li>'
  );
const k = () => {
  const d = f(),
    c = "/events/mining/eventdetail/twitter";
  return s($, {
    get title() {
      return e("Event Details");
    },
    get children() {
      return [
        (() => {
          var t = x(),
            l = t.firstChild,
            a = l.nextSibling,
            n = a.firstChild,
            r = n.nextSibling;
          return (
            i(l, () => e("Promotion Schedule")),
            i(n, () =>
              e(
                "Event registration time：September 24, 2024, 00:00 UTC - October 20, 2024, 23:59 UTC"
              )
            ),
            i(r, () =>
              e(
                "Event Duration: October 1, 2024, 00:00 UTC - October 20, 2024, 23:59 UTC"
              )
            ),
            t
          );
        })(),
        (() => {
          var t = p(),
            l = t.firstChild,
            a = l.nextSibling,
            n = a.firstChild,
            r = n.nextSibling,
            o = r.nextSibling;
          return (
            i(l, () => e("How to Participate")),
            i(n, () => e("Register for the event to become eligible!")),
            i(
              r,
              s(m, {
                get when() {
                  return d.pathname.includes(c);
                },
                get fallback() {
                  return e(
                    "Wager at least $1 daily to qualify for the $BC sharing ranking"
                  );
                },
                get children() {
                  return e(
                    "Place at least $1 daily to qualify for the $BC sharing ranking"
                  );
                },
              })
            ),
            i(
              o,
              s(m, {
                get when() {
                  return d.pathname.includes(c);
                },
                get fallback() {
                  return e(
                    "Share in the daily 50 million $BC pool based on your wager proportion"
                  );
                },
                get children() {
                  return e(
                    "Share in the daily 50 million $BC prize pool based on your participation proportion"
                  );
                },
              })
            ),
            t
          );
        })(),
        (() => {
          var t = p(),
            l = t.firstChild,
            a = l.nextSibling,
            n = a.firstChild,
            r = n.nextSibling,
            o = r.nextSibling;
          return (
            i(l, () => e("Prize Distribution")),
            i(n, () => e("Total Prize Pool: 1 billion $BC")),
            i(r, () => e("Daily Prize: 50 million $BC")),
            i(o, () =>
              e(
                "Rewards distributed proportionally among qualifying participants"
              )
            ),
            t
          );
        })(),
        (() => {
          var t = S(),
            l = t.firstChild,
            a = l.nextSibling,
            n = a.firstChild,
            r = n.nextSibling,
            o = r.nextSibling,
            u = o.nextSibling,
            g = u.nextSibling,
            h = g.nextSibling;
          return (
            i(l, () => e("General Rules")),
            i(n, () => e("Registration is required to participate")),
            i(
              r,
              s(m, {
                get when() {
                  return d.pathname.includes(c);
                },
                get fallback() {
                  return e("Minimum daily wager - $1 or currency equivalent");
                },
                get children() {
                  return e("Minimum daily amount - $1 or currency equivalent");
                },
              })
            ),
            i(
              o,
              s(m, {
                get when() {
                  return d.pathname.includes(c);
                },
                get fallback() {
                  return e(
                    "Daily rewards calculated based on your wager proportion"
                  );
                },
                get children() {
                  return e(
                    "Daily rewards calculated based on your participation proportion"
                  );
                },
              })
            ),
            i(u, () => e("Daily rewards calculated the following day.")),
            i(g, () =>
              e(
                "Final rewards will be fully distributed within 7 working days after the event concludes."
              )
            ),
            i(h, () => e("Daily results announced on the activity page")),
            t
          );
        })(),
        (() => {
          var t = w(),
            l = t.firstChild,
            a = l.nextSibling,
            n = a.firstChild,
            r = n.nextSibling,
            o = r.nextSibling,
            u = o.nextSibling,
            g = u.nextSibling,
            h = g.nextSibling,
            b = h.nextSibling,
            y = b.nextSibling;
          return (
            i(l, () => e("Terms and Conditions:")),
            i(n, () => e("Open to all registered __ENV_HOST__ players")),
            i(r, () => e("Daily qualification period: 00:00 UTC to 23:59 UTC")),
            i(o, () =>
              e(
                "The $BC reward obtained from this event will be distributed to the user's account within 7 working days after the event ends"
              )
            ),
            i(
              u,
              s(m, {
                get when() {
                  return d.pathname.includes(c);
                },
                get fallback() {
                  return e(
                    "Only real money wagers count towards the daily total"
                  );
                },
                get children() {
                  return e(
                    "Only real money amount count towards the daily total"
                  );
                },
              })
            ),
            i(g, () =>
              e(
                "__ENV_HOST__ reserves the right to modify or cancel the promotion at any time"
              )
            ),
            i(h, () =>
              e(
                "Any attempt to manipulate the system will result in disqualification"
              )
            ),
            i(b, () =>
              e("In case of technical issues, __ENV_HOST__ will resolve fairly")
            ),
            i(y, () => e("__ENV_HOST__’s decision is final in any disputes")),
            t
          );
        })(),
      ];
    },
  });
};
export { k as default };
