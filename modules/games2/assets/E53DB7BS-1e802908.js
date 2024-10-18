import { c as r } from "./FN6EICGO-b0e5a495.js";
import { l as o } from "./index-4897b9da.js";
function f(e = {}) {
  const [t, n] = r({
      value: () => o(e.open),
      defaultValue: () => !!o(e.defaultOpen),
      onChange: (l) => {
        var s;
        return (s = e.onOpenChange) == null ? void 0 : s.call(e, l);
      },
    }),
    a = () => {
      n(!0);
    },
    p = () => {
      n(!1);
    };
  return {
    isOpen: t,
    setIsOpen: n,
    open: a,
    close: p,
    toggle: () => {
      t() ? p() : a();
    },
  };
}
export { f as c };
