var h = Object.defineProperty,
  b = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable;
var c = (a, i, t) =>
    i in a
      ? h(a, i, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[i] = t),
  r = (a, i) => {
    for (var t in i || (i = {})) o.call(i, t) && c(a, t, i[t]);
    if (s) for (var t of s(i)) m.call(i, t) && c(a, t, i[t]);
    return a;
  },
  p = (a, i) => b(a, d(i));
var g = (a, i) => {
  var t = {};
  for (var l in a) o.call(a, l) && i.indexOf(l) < 0 && (t[l] = a[l]);
  if (a != null && s)
    for (var l of s(a)) i.indexOf(l) < 0 && m.call(a, l) && (t[l] = a[l]);
  return t;
};
const e = (l) => {
    var n = l,
      { id: a, namespace: i } = n,
      t = g(n, ["id", "namespace"]);
    return p(r({}, t), {
      id: a.replace("96", ""),
      namespace: i.replace("96", "main"),
    });
  },
  k = e({
    id: "BaccaratSingle96",
    key: "baccarat",
    name: "BaccaratSingle",
    namespace: "/g/baccarat-single/96",
    validateLink: "https://bcgame-project.github.io/verify/baccaratsingle.html",
  }),
  y = e({
    id: "ClassicDice96",
    key: "classic-dice",
    name: "ClassicDice",
    namespace: "/g/cd/96",
    validateLink:
      "https://bcgame-project.github.io/verify/classicdice_new.html",
  }),
  u = e({
    id: "CoinFlip96",
    key: "coinflip",
    name: "CoinFlip",
    namespace: "/g/coinflip/96",
    validateLink: "https://bcgame-project.github.io/verify/coinflip_new.html",
  }),
  v = e({
    id: "Coloring96",
    key: "ring-of-fortune",
    name: "Coloring",
    namespace: "/g/coloring/96",
    validateLink:
      "https://bcgame-project.github.io/verify/ringOfFortune_new.html",
  }),
  f = e({
    id: "Crash96",
    name: "crash",
    namespace: "/g/cm",
    salt: "000000000000000000030587dd9ded1fcc5d603652da58deb670319bd2e09445",
    key: "crash",
    validateLink: "https://bcgame-project.github.io/verify/crash.html",
  }),
  j = e({
    id: "FastParity96",
    key: "fastparity",
    name: "FastParity",
    namespace: "/g/fastParity/96",
    salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
    validateLink: "https://bcgame-project.github.io/verify/parity.html",
  }),
  L = e({
    id: "HashDice96",
    key: "hash-dice",
    name: "HashDice",
    namespace: "/g/hd/96",
    validateLink: "https://bcgame-project.github.io/verify/hashdice.html",
  }),
  w = e({
    id: "Hilo96",
    key: "hilo",
    name: "Hilo",
    namespace: "/g/hilo/96",
    validateLink: "https://bcgame-project.github.io/verify/hilo.html",
  }),
  S = e({
    id: "Keno96",
    key: "keno-multiplayer",
    name: "Keno",
    namespace: "/g/keno/96",
    salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
    validateLink: "https://bcgame-project.github.io/verify/keno.html",
  }),
  C = e({
    id: "KenoSingle96",
    key: "keno",
    name: "KenoSingle",
    namespace: "/g/kenos/96",
    validateLink: "https://bcgame-project.github.io/verify/keno_single.html",
  }),
  P = e({
    id: "Limbo96",
    key: "limbo",
    name: "Limbo",
    namespace: "/g/l/96",
    validateLink: "https://bcgame-project.github.io/verify/limbo.html",
  }),
  D = e({
    id: "Mines96",
    key: "mines",
    name: "Mines",
    namespace: "/g/mines/96",
    validateLink: "https://bcgame-project.github.io/verify/mines.html",
  }),
  _ = e({
    id: "Parity96",
    key: "parity",
    name: "Parity",
    namespace: "/g/parity/96",
    salt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
    validateLink: "https://bcgame-project.github.io/verify/parity.html",
  }),
  B = e({
    id: "Plinko96",
    key: "plinko",
    name: "Plinko",
    namespace: "/g/p/96",
    validateLink: "https://bcgame-project.github.io/verify/plinko.html",
  }),
  F = e({
    id: "RouletteSingle96",
    key: "roulette",
    name: "RouletteSingle",
    namespace: "/g/roulettes/96",
    validateLink:
      "https://bcgame-project.github.io/verify/roulettesingle_new.html",
  }),
  H = e({
    id: "Tower96",
    key: "tower-legend",
    name: "Tower",
    namespace: "/g/tower/96",
    validateLink: "https://bcgame-project.github.io/verify/tower.html",
  }),
  K = e({
    id: "Twist99",
    key: "twist",
    name: "Twist",
    namespace: "/g/twist/99",
    validateLink: "https://bcgame-project.github.io/verify/twist.html",
  }),
  R = e({
    id: "UltimateDice96",
    key: "ultimate-dice",
    name: "UltimateDice",
    namespace: "/g/ud/96",
    validateLink:
      "https://bcgame-project.github.io/verify/ultimatedice_new.html",
  }),
  T = e({
    id: "VideoPoker96",
    key: "video-poker",
    name: "VideoPoker",
    namespace: "/g/vp/96",
    validateLink: "https://bcgame-project.github.io/verify/videopoker.html",
  }),
  O = e({
    id: "Wheel96",
    key: "wheel",
    name: "Wheel",
    namespace: "/g/w/96",
    validateLink: "https://bcgame-project.github.io/verify/wheel.html",
  }),
  M = e({
    id: "Roulette96",
    key: "roulette-multiplayer",
    name: "Roulette",
    namespace: "/g/rl/96",
    validateLink: "https://bcgame-project.github.io/verify/roulettesingle.html",
  }),
  q = e({
    id: "money-coming-by-jili",
    key: "slots",
    name: "Slots",
    namespace: "/g/ps",
    validateLink: "https://bcgame-project.github.io/verify/slots.html",
  }),
  U = e({
    namespace: "/g/double/main",
    name: "Double",
    id: "Double",
    key: "double",
    validateLink: "https://bcgame-project.github.io/verify/double.html",
  }),
  V = {
    namespace: "/g/sc/main",
    name: "Cave",
    id: "SlotsCave",
    key: "cave",
    validateLink: "https://bcgame-project.github.io/verify/slots.html",
  },
  W = {
    namespace: "/g/ss/main",
    name: "SlotsSword",
    id: "SlotsSword",
    key: "sword",
    validateLink: "https://bcgame-project.github.io/verify/sword.html",
  },
  z = {
    name: "roulette-multiplayer",
    namespace: "/g/unknown",
    key: "roulette-multiplayer",
    id: "roulette-multiplayer",
    salt: "",
    validateLink: "https://bcgame-project.github.io/verify/roulette.html",
  },
  x = {
    name: "SlotsOrientalBeauties",
    namespace: "/g/sob/main",
    key: "oriental-beauties",
    id: "SlotsOrientalBeauties",
    salt: "",
    validateLink:
      "https://bcgame-project.github.io/verify/oriental-beauties.html",
  },
  A = {
    name: "blackjack",
    namespace: "/g/bj",
    key: "blackjack",
    id: "blackjack",
    salt: "",
    validateLink: "https://bcgame-project.github.io/verify/blackjack.html",
  },
  E = {
    name: "Baccarat",
    namespace: "/g/bj",
    key: "baccarat-multiplayer",
    id: "baccarat-multiplayer",
    salt: "",
    validateLink: "https://bcgame-project.github.io/verify/baccarat_multi.html",
  },
  I = [
    k,
    y,
    u,
    v,
    f,
    j,
    L,
    w,
    S,
    C,
    P,
    D,
    _,
    B,
    F,
    H,
    K,
    R,
    T,
    O,
    M,
    U,
    V,
    W,
    x,
  ];
export {
  k as B,
  y as C,
  U as D,
  j as F,
  I as G,
  w as H,
  C as K,
  P as L,
  D as M,
  x as O,
  B as P,
  F as R,
  q as S,
  K as T,
  R as U,
  T as V,
  O as W,
  u as a,
  f as b,
  V as c,
  v as d,
  L as e,
  S as f,
  H as g,
  E as h,
  A as i,
  z as j,
  W as k,
};
