import { $ as r, a1 as e, a0 as c, t as l } from "./manifest-a234c8a0.js";
import { c as n } from "./utils-65805dbc.js";
var i = l('<div class="relative w-full overflow-auto max-h-[39rem]"><table>'),
  d = l("<thead>"),
  u = l("<tbody>"),
  m = l("<tr>"),
  h = l("<th>"),
  v = l("<td>"),
  g = l("<caption>");
const f = (s) => {
    const [, a] = r(s, ["class"]);
    return (
      (t = i()),
      (o = t.firstChild),
      e(
        o,
        c(
          {
            get class() {
              return n("w-full caption-bottom text-sm", s.class);
            },
          },
          a,
          { style: { "overflow-anchor": "none" } }
        ),
        !1,
        !1
      ),
      t
    );
    var t, o;
  },
  p = (s) => {
    const [, a] = r(s, ["class"]);
    return (
      (t = d()),
      e(
        t,
        c(
          {
            get class() {
              return n("[&_tr]:border-1", s.class);
            },
          },
          a
        ),
        !1,
        !1
      ),
      t
    );
    var t;
  },
  z = (s) => {
    const [, a] = r(s, ["class"]);
    return (
      (t = u()),
      e(
        t,
        c(
          {
            get class() {
              return n("[&_tr:last-child]:border-0", s.class);
            },
          },
          a
        ),
        !1,
        !1
      ),
      t
    );
    var t;
  },
  k = (s) => {
    const [, a] = r(s, ["class"]);
    return (
      (t = m()),
      e(
        t,
        c(
          {
            get class() {
              return n(
                "border-0 transition-colors hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 data-[state=selected]:bg-zinc-100 dark:data-[state=selected]:bg-zinc-800",
                s.class
              );
            },
          },
          a
        ),
        !1,
        !1
      ),
      t
    );
    var t;
  },
  w = (s) => {
    const [, a] = r(s, ["class"]);
    return (
      (t = h()),
      e(
        t,
        c(
          {
            get class() {
              return n(
                "h-12 px-2 text-left align-middle font-medium text-zinc-500 dark:text-zinc-400 [&:has([role=checkbox])]:pr-0",
                s.class
              );
            },
          },
          a
        ),
        !1,
        !1
      ),
      t
    );
    var t;
  },
  y = (s) => {
    const [, a] = r(s, ["class"]);
    return (
      (t = v()),
      e(
        t,
        c(
          {
            get class() {
              return n(
                "min-h-[3rem] p-2 align-middle [&:has([role=checkbox])]:pr-0 dark:text-zinc-50",
                s.class
              );
            },
          },
          a
        ),
        !1,
        !1
      ),
      t
    );
    var t;
  },
  _ = (s) => {
    const [, a] = r(s, ["class"]);
    return (
      (t = g()),
      e(
        t,
        c(
          {
            get class() {
              return n(
                "mt-4 text-sm text-zinc-500 dark:text-zinc-400",
                s.class
              );
            },
          },
          a
        ),
        !1,
        !1
      ),
      t
    );
    var t;
  };
export { f as T, p as a, k as b, w as c, z as d, y as e, _ as f };
