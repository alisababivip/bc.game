import {
  c as e,
  S as l,
  h as m,
  m as r,
  i as c,
  k as p,
  n as g,
  a as u,
  t as a,
} from "./solid-js-8ff414d5.js";
import {
  u as d,
  C as B,
  B as h,
  b,
  e as s,
  j as w,
  d as C,
} from "./manifest-987d6c36.js";
import { p as A } from "./store-de20ba30.js";
import S from "./BetSlipContent-999f128e.js";
import "./store-2ed2b91e.js";
import "./lottery-40ce25b9.js";
import "./_Uint8Array-7783c8b7.js";
import "./_MapCache-9c96b8d5.js";
import "./isObject-909534d5.js";
import "./index-4d3ecff0.js";
import "./DrawsSelect-10573c9c.js";
import "./LocalIcon-84e2288f.js";
import "./i18n-9df4b53a.js";
import "./countries-18533370.js";
import "./Lottery.interface-46896b0b.js";
import "./logo-a74fb622.js";
import "./createSettle-6ac4bfbf.js";
import "./apis-5c7b35c7.js";
import "./once-e92576f3.js";
import "./toNumber-e58af95e.js";
import "./toString-9093e562.js";
const f =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMAIN+AYBC/70BwkM+vUJ8woHCnQIcAAAMDSURBVHja7ZrbcuMgDEARRlwMOOb/f3Zn2u7QjcC4IJKZLee1dnSMQciiYrFYLBaLxWKxaGIPmToxWsFoeNBpCOnG4j9MGmUbev4c/z0GPnFg++dfYkF3CxyJB+x/AzzEXoHEhFoCS2AJLIElsASWAK+A1BX8SwQC1q+Hc7JAu74L0wUeje+I6QKtW+S7BcxsAXt9B/z/kzAFqF+P4TWJqMpvScVLoInxu4vwMVnhYd2uXypgdouCi57ogpOfht9QiPkCet/KuBx+poATL2S858YvAIIL/nogg9YdXn4WsMFZVgFsR4/aPK2OoPgEVCv8Zoo76AFMAhJa4WtswLMMpbLwHRSZKNMFUs3IhDIL4J4a7MguYPK4gr+hC9wCLseXKXEbtAUCid82YBUAEp/X4PZhDMpCoA8SwSObQH6YvfDH6k/sXAJ5AFT6iUCKQwJme+QcVJ8AWv3dl9QpSe5gTsVbK+PYkwwd52YEZJAsveYfSYOs2/FBs2MBR4aArSCRdJBaVxlkHAFVmv6tq2K3AF3EobY94MPmlpZ+WiSMZbmpNHFQflZjWDoENjjwYbJ9YGvny/C0OMwBhdaN7RSgI+GIAM3Ph+38vrlzJh/qrcwYUpVjUCDH0VfPhvGs7NN+WADy+r6e4LboIIcF6tfEizycmShgaEMb5FyB9hQH81KBJBU2Enbin4TkgxSuEqZkE/A0VaYv/PeW1d6zGdz5x5ST1kwbKaBoxgyMqZjul3DSJ1XcqXi/3Izs+ZzxFO9mlH8ZTTnJg9ImJRnLlasRowJ5R9f1LhaiqFQkYVggD2K8tctBV//ctCYBfQcHiiK6Iwvku4qY8tuVxXpz66gG8m0VbG0aks0Ij852J16/g6qnV0BaZ339XndrHaBMBP8VRDltRnoU563P81gveYaPkPbLIeBvUFCUv9Oi8fdbNBLFD4G4VXCit0nFD8g3xWdtVM438DPi9zer+VHX7foopgNb41RzPnDKRvj5qGCeouuI4rVYF/TnsZ0/nEWxWCwWF/wBB9p6KmoXPgAAAAAASUVORK5CYII=";
var M = a('<img class="w-8 h-8 slip-icon"alt=""loading=lazy>'),
  v = a('<div><label class="text-xs font-extrabold text-primary_brand">');
function Q() {
  const o = d(),
    n = B(() => document.querySelector(".chat-notice"));
  return e(l, {
    get children() {
      return [
        e(h, {
          type: "brand",
          class: "fixed z-10 bottom-28 right-3 center w-14 h-14 !rounded-full",
          get style() {
            return { "margin-right": n.width + "px" };
          },
          onClick: () => {
            if (!b.login) {
              o("/login/signin");
              return;
            }
            if (s.mobile) o("/lottery/betslip");
            else {
              const i = document.body.classList.contains("lottery-fold");
              w.emit("lottery-toggle", !i);
            }
          },
          get children() {
            return [
              (() => {
                var t = M();
                return m(t, "src", f), t;
              })(),
              r(
                () =>
                  r(
                    () => A.state.Betlist.length + A.state.betBc.ticketNum > 0
                  )() &&
                  (() => {
                    var t = v(),
                      i = t.firstChild;
                    return (
                      c(
                        i,
                        () => A.state.Betlist.length + A.state.betBc.ticketNum
                      ),
                      p(() =>
                        g(
                          t,
                          C(
                            "absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 p-1 center bg-alw_white rounded-full",
                            A.state.Betlist.length + A.state.betBc.ticketNum > 9
                              ? "min-w-8 min-h-6"
                              : "min-w-6 min-h-6"
                          )
                        )
                      ),
                      t
                    );
                  })()
              ),
            ];
          },
        }),
        e(u, {
          get when() {
            return !s.mobile;
          },
          get children() {
            return e(S, {});
          },
        }),
      ];
    },
  });
}
export { Q as default };
