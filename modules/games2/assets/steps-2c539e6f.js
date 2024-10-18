import { c as n } from "./clamp-f5b668c4.js";
const c =
  (o, a = "end") =>
  (t) => {
    const r = (t = a === "end" ? Math.min(t, 0.999) : Math.max(t, 0.001)) * o,
      e = a === "end" ? Math.floor(r) : Math.ceil(r);
    return n(0, 1, e / o);
  };
export { c as s };
