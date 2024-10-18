var g = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty,
  P = Object.prototype.propertyIsEnumerable;
var E = (e, _, l) =>
    _ in e
      ? g(e, _, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[_] = l),
  c = (e, _) => {
    for (var l in _ || (_ = {})) T.call(_, l) && E(e, l, _[l]);
    if (d) for (var l of d(_)) P.call(_, l) && E(e, l, _[l]);
    return e;
  };
import {
  _ as t,
  f as v,
  l as D,
  A,
  H as L,
  e as V,
  c as O,
  a as I,
  i as k,
  b as N,
  d as b,
  t as y,
} from "./manifest-a234c8a0.js";
const s = {
    "en-US": "en",
    "vi-VN": "vi",
    "id-ID": "id",
    "ja-JP": "ja",
    "ko-KR": "ko",
    "fr-FR": "fr",
    "es-ES": "es",
    "fil-PH": "tl",
    "ar-SA": "ar",
    "hi-IN": "hi",
    "tr-TR": "tr",
    "fa-IR": "fa",
    "pt-BR": "pt",
    "ru-RU": "ru",
    "de-DE": "de",
    "th-TH": "th",
    "fi-FI": "fi",
    "pl-PL": "pl",
    "it-IT": "it",
    "my-MM": "my",
    "nl-NL": "nl",
    "ur-PK": "ur",
    "uk-UA": "uk",
    "ms-MY": "ms",
    "bn-BD": "bn",
    "mr-IN": "mr",
    "ta-IN": "ta",
    "te-IN": "te",
    "en-IN": "en-IN",
    "zh-TW": "zh",
  },
  n = Object.assign({
    "../../locales/ar-SA/game/beauties.html": () =>
      t(() => import("./beauties-2a0e5140.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/blackjack.html": () =>
      t(() => import("./blackjack-eba68f91.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/cave.html": () =>
      t(() => import("./cave-ee94e132.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/classicdice.html": () =>
      t(() => import("./classicdice-aa16ec3b.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/coinflip.html": () =>
      t(() => import("./coinflip-eeda59f1.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/crash.html": () =>
      t(() => import("./crash-fbd1d6f2.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/egyptian.html": () =>
      t(() => import("./egyptian-dae03a80.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/general.html": () =>
      t(() => import("./general-9419f666.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/hashdice.html": () =>
      t(() => import("./hashdice-241b4d19.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/hilo.html": () =>
      t(() => import("./hilo-a28b0519.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-6d6dd624.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ar-SA/game/limbo.html": () =>
      t(() => import("./limbo-0ae68b03.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/mines.html": () =>
      t(() => import("./mines-313f1311.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/plinko.html": () =>
      t(() => import("./plinko-dd58b3ed.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-9f843ff4.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ar-SA/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-f3206f48.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ar-SA/game/sword.html": () =>
      t(() => import("./sword-06a8ce73.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/tower.html": () =>
      t(() => import("./tower-1470d75b.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-8b11cf0f.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/videopoker.html": () =>
      t(() => import("./videopoker-1384c53c.js"), []).then((e) => e.default),
    "../../locales/ar-SA/game/wheel.html": () =>
      t(() => import("./wheel-da6c5cf6.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/beauties.html": () =>
      t(() => import("./beauties-21228d99.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/blackjack.html": () =>
      t(() => import("./blackjack-90824ed9.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/cave.html": () =>
      t(() => import("./cave-90162869.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/classicdice.html": () =>
      t(() => import("./classicdice-0ecc5e96.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/coinflip.html": () =>
      t(() => import("./coinflip-f6566018.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/crash.html": () =>
      t(() => import("./crash-2ef2331e.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/egyptian.html": () =>
      t(() => import("./egyptian-073ef8f2.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/general.html": () =>
      t(() => import("./general-f087ea3d.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/hashdice.html": () =>
      t(() => import("./hashdice-458a76a3.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/hilo.html": () =>
      t(() => import("./hilo-8fd97cf4.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-c6547968.js"), []).then(
        (e) => e.default
      ),
    "../../locales/bn-BD/game/limbo.html": () =>
      t(() => import("./limbo-ee48b76b.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/mines.html": () =>
      t(() => import("./mines-05fccb40.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/plinko.html": () =>
      t(() => import("./plinko-466dfce4.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-ef04128b.js"), []).then(
        (e) => e.default
      ),
    "../../locales/bn-BD/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-e6ee7bfa.js"), []).then(
        (e) => e.default
      ),
    "../../locales/bn-BD/game/sword.html": () =>
      t(() => import("./sword-da32288b.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/tower.html": () =>
      t(() => import("./tower-57dc665f.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-832625a7.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/videopoker.html": () =>
      t(() => import("./videopoker-b058f55d.js"), []).then((e) => e.default),
    "../../locales/bn-BD/game/wheel.html": () =>
      t(() => import("./wheel-194a7d4f.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/beauties.html": () =>
      t(() => import("./beauties-564a074f.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/blackjack.html": () =>
      t(() => import("./blackjack-70ae5be5.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/cave.html": () =>
      t(() => import("./cave-378af31a.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/classicdice.html": () =>
      t(() => import("./classicdice-eb3553ef.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/coinflip.html": () =>
      t(() => import("./coinflip-f734aa1c.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/crash.html": () =>
      t(() => import("./crash-09e45c8f.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/egyptian.html": () =>
      t(() => import("./egyptian-99b7c2ff.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/general.html": () =>
      t(() => import("./general-aedc10a5.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/hashdice.html": () =>
      t(() => import("./hashdice-d7ea8125.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/hilo.html": () =>
      t(() => import("./hilo-31d3c712.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-7a8f1f47.js"), []).then(
        (e) => e.default
      ),
    "../../locales/de-DE/game/limbo.html": () =>
      t(() => import("./limbo-78a469d0.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/mines.html": () =>
      t(() => import("./mines-e39334d0.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/plinko.html": () =>
      t(() => import("./plinko-53462240.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-22fbe159.js"), []).then(
        (e) => e.default
      ),
    "../../locales/de-DE/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-c2723226.js"), []).then(
        (e) => e.default
      ),
    "../../locales/de-DE/game/sword.html": () =>
      t(() => import("./sword-4b43878d.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/tower.html": () =>
      t(() => import("./tower-3b040842.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-b03ed5aa.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/videopoker.html": () =>
      t(() => import("./videopoker-0a407ff4.js"), []).then((e) => e.default),
    "../../locales/de-DE/game/wheel.html": () =>
      t(() => import("./wheel-a5a5d2bb.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/beauties.html": () =>
      t(() => import("./beauties-56737854.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/blackjack.html": () =>
      t(() => import("./blackjack-74e923ca.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/cave.html": () =>
      t(() => import("./cave-25c99bf0.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/classicdice.html": () =>
      t(() => import("./classicdice-dd75f1d0.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/coinflip.html": () =>
      t(() => import("./coinflip-f2266aee.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/crash.html": () =>
      t(() => import("./crash-19d67588.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/double.html": () =>
      t(() => import("./double-40dd0e25.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/egyptian.html": () =>
      t(() => import("./egyptian-f21b0b5c.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/general.html": () =>
      t(() => import("./general-df878fc0.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/hashdice.html": () =>
      t(() => import("./hashdice-95080306.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/hilo.html": () =>
      t(() => import("./hilo-7d59d2f9.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-e47542f1.js"), []).then(
        (e) => e.default
      ),
    "../../locales/en-IN/game/limbo.html": () =>
      t(() => import("./limbo-5b700e47.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/mines.html": () =>
      t(() => import("./mines-f9ed23fc.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/parity.html": () =>
      t(() => import("./parity-96b78dfc.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/plinko.html": () =>
      t(() => import("./plinko-cbdd7839.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-d9229348.js"), []).then(
        (e) => e.default
      ),
    "../../locales/en-IN/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-48dcadd1.js"), []).then(
        (e) => e.default
      ),
    "../../locales/en-IN/game/sword.html": () =>
      t(() => import("./sword-f55afd71.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/tower.html": () =>
      t(() => import("./tower-244a6e8f.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/twist.html": () =>
      t(() => import("./twist-44c8e84d.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-9c59fea9.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/videopoker.html": () =>
      t(() => import("./videopoker-99411b60.js"), []).then((e) => e.default),
    "../../locales/en-IN/game/wheel.html": () =>
      t(() => import("./wheel-f454214c.js"), []).then((e) => e.default),
    "../../locales/en-US/game/beauties.html": () =>
      t(() => import("./beauties-e7e772f5.js"), []).then((e) => e.default),
    "../../locales/en-US/game/blackjack.html": () =>
      t(() => import("./blackjack-b699a277.js"), []).then((e) => e.default),
    "../../locales/en-US/game/cave.html": () =>
      t(() => import("./cave-39f9deb2.js"), []).then((e) => e.default),
    "../../locales/en-US/game/classicdice.html": () =>
      t(() => import("./classicdice-115b78f0.js"), []).then((e) => e.default),
    "../../locales/en-US/game/coinflip.html": () =>
      t(() => import("./coinflip-40a668d6.js"), []).then((e) => e.default),
    "../../locales/en-US/game/crash.html": () =>
      t(() => import("./crash-7c26b67d.js"), []).then((e) => e.default),
    "../../locales/en-US/game/double.html": () =>
      t(() => import("./double-14e57e07.js"), []).then((e) => e.default),
    "../../locales/en-US/game/egyptian.html": () =>
      t(() => import("./egyptian-55ec6c97.js"), []).then((e) => e.default),
    "../../locales/en-US/game/general.html": () =>
      t(() => import("./general-082d0379.js"), []).then((e) => e.default),
    "../../locales/en-US/game/hashdice.html": () =>
      t(() => import("./hashdice-b3d34c2e.js"), []).then((e) => e.default),
    "../../locales/en-US/game/hilo.html": () =>
      t(() => import("./hilo-1035c22f.js"), []).then((e) => e.default),
    "../../locales/en-US/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-2fe2c05e.js"), []).then(
        (e) => e.default
      ),
    "../../locales/en-US/game/limbo.html": () =>
      t(() => import("./limbo-f887ec78.js"), []).then((e) => e.default),
    "../../locales/en-US/game/mines.html": () =>
      t(() => import("./mines-e667f929.js"), []).then((e) => e.default),
    "../../locales/en-US/game/parity.html": () =>
      t(() => import("./parity-4067f6b7.js"), []).then((e) => e.default),
    "../../locales/en-US/game/plinko.html": () =>
      t(() => import("./plinko-1ab92cda.js"), []).then((e) => e.default),
    "../../locales/en-US/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-d6af4f10.js"), []).then(
        (e) => e.default
      ),
    "../../locales/en-US/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-027d3138.js"), []).then(
        (e) => e.default
      ),
    "../../locales/en-US/game/sword.html": () =>
      t(() => import("./sword-92fd26db.js"), []).then((e) => e.default),
    "../../locales/en-US/game/tower.html": () =>
      t(() => import("./tower-0423d69a.js"), []).then((e) => e.default),
    "../../locales/en-US/game/twist.html": () =>
      t(() => import("./twist-22009383.js"), []).then((e) => e.default),
    "../../locales/en-US/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-0a903664.js"), []).then((e) => e.default),
    "../../locales/en-US/game/videopoker.html": () =>
      t(() => import("./videopoker-8b82510f.js"), []).then((e) => e.default),
    "../../locales/en-US/game/wheel.html": () =>
      t(() => import("./wheel-58b37a12.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/beauties.html": () =>
      t(() => import("./beauties-ec06062f.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/blackjack.html": () =>
      t(() => import("./blackjack-daa163f5.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/cave.html": () =>
      t(() => import("./cave-ce8b3039.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/classicdice.html": () =>
      t(() => import("./classicdice-cf133c1d.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/coinflip.html": () =>
      t(() => import("./coinflip-8b01df56.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/crash.html": () =>
      t(() => import("./crash-bade816f.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/egyptian.html": () =>
      t(() => import("./egyptian-cb0cbab5.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/general.html": () =>
      t(() => import("./general-674d45a8.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/hashdice.html": () =>
      t(() => import("./hashdice-ba06759b.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/hilo.html": () =>
      t(() => import("./hilo-66a169fa.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-c93a4cd4.js"), []).then(
        (e) => e.default
      ),
    "../../locales/es-ES/game/limbo.html": () =>
      t(() => import("./limbo-11c94d53.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/mines.html": () =>
      t(() => import("./mines-39814af5.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/plinko.html": () =>
      t(() => import("./plinko-328a98be.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-cafc6b40.js"), []).then(
        (e) => e.default
      ),
    "../../locales/es-ES/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-6e9b1acb.js"), []).then(
        (e) => e.default
      ),
    "../../locales/es-ES/game/sword.html": () =>
      t(() => import("./sword-e1072206.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/tower.html": () =>
      t(() => import("./tower-9ee63d35.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-cf133c1d.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/videopoker.html": () =>
      t(() => import("./videopoker-6e3f487c.js"), []).then((e) => e.default),
    "../../locales/es-ES/game/wheel.html": () =>
      t(() => import("./wheel-947a870f.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/beauties.html": () =>
      t(() => import("./beauties-8cc9d1ad.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/blackjack.html": () =>
      t(() => import("./blackjack-00c784ba.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/cave.html": () =>
      t(() => import("./cave-1fdb5519.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/classicdice.html": () =>
      t(() => import("./classicdice-b191dff6.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/coinflip.html": () =>
      t(() => import("./coinflip-da6c0f81.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/crash.html": () =>
      t(() => import("./crash-3ea9cc30.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/egyptian.html": () =>
      t(() => import("./egyptian-8f3943d5.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/general.html": () =>
      t(() => import("./general-59aff8d4.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/hashdice.html": () =>
      t(() => import("./hashdice-ccd6fed5.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/hilo.html": () =>
      t(() => import("./hilo-38208366.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-732cbca6.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fa-IR/game/limbo.html": () =>
      t(() => import("./limbo-7b022123.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/mines.html": () =>
      t(() => import("./mines-ed803988.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/plinko.html": () =>
      t(() => import("./plinko-e74205c1.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-5b0ae2ab.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fa-IR/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-202d16fa.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fa-IR/game/sword.html": () =>
      t(() => import("./sword-f4c20e4c.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/tower.html": () =>
      t(() => import("./tower-449e3d46.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-e2ab492b.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/videopoker.html": () =>
      t(() => import("./videopoker-191236a2.js"), []).then((e) => e.default),
    "../../locales/fa-IR/game/wheel.html": () =>
      t(() => import("./wheel-e7f54eb1.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/beauties.html": () =>
      t(() => import("./beauties-847ad6ea.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/blackjack.html": () =>
      t(() => import("./blackjack-24722d21.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/cave.html": () =>
      t(() => import("./cave-563c5362.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/classicdice.html": () =>
      t(() => import("./classicdice-e8f473fa.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/coinflip.html": () =>
      t(() => import("./coinflip-0a067c04.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/crash.html": () =>
      t(() => import("./crash-67bc3cee.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/egyptian.html": () =>
      t(() => import("./egyptian-1e31a881.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/general.html": () =>
      t(() => import("./general-e95ad5ea.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/hashdice.html": () =>
      t(() => import("./hashdice-87a115e4.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/hilo.html": () =>
      t(() => import("./hilo-aaf063af.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-8f7a111a.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fi-FI/game/limbo.html": () =>
      t(() => import("./limbo-13921624.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/mines.html": () =>
      t(() => import("./mines-d4cdebf5.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/plinko.html": () =>
      t(() => import("./plinko-764a032a.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-bad585e7.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fi-FI/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-db72bf5c.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fi-FI/game/sword.html": () =>
      t(() => import("./sword-b5ff1a1f.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/tower.html": () =>
      t(() => import("./tower-3f97ac8d.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-0aa51f38.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/videopoker.html": () =>
      t(() => import("./videopoker-2131374f.js"), []).then((e) => e.default),
    "../../locales/fi-FI/game/wheel.html": () =>
      t(() => import("./wheel-3cc69ccc.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/beauties.html": () =>
      t(() => import("./beauties-08e4b029.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/blackjack.html": () =>
      t(() => import("./blackjack-5eb62c22.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/cave.html": () =>
      t(() => import("./cave-86e186bd.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/classicdice.html": () =>
      t(() => import("./classicdice-3504e3b2.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/coinflip.html": () =>
      t(() => import("./coinflip-4ce07b05.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/crash.html": () =>
      t(() => import("./crash-bd4ea0b5.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/egyptian.html": () =>
      t(() => import("./egyptian-5e04f971.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/general.html": () =>
      t(() => import("./general-c9666a91.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/hashdice.html": () =>
      t(() => import("./hashdice-fcacfa71.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/hilo.html": () =>
      t(() => import("./hilo-301a0162.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-b4aa8efc.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fil-PH/game/limbo.html": () =>
      t(() => import("./limbo-6165413c.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/mines.html": () =>
      t(() => import("./mines-d7d4bf00.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/plinko.html": () =>
      t(() => import("./plinko-07452c25.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-e87774e6.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fil-PH/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-fdc84c45.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fil-PH/game/sword.html": () =>
      t(() => import("./sword-5e42d272.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/tower.html": () =>
      t(() => import("./tower-c41a2758.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-ca459cfa.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/videopoker.html": () =>
      t(() => import("./videopoker-685cb105.js"), []).then((e) => e.default),
    "../../locales/fil-PH/game/wheel.html": () =>
      t(() => import("./wheel-041a9bd0.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/beauties.html": () =>
      t(() => import("./beauties-eb2a7bbd.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/blackjack.html": () =>
      t(() => import("./blackjack-9dbbabdf.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/cave.html": () =>
      t(() => import("./cave-648a246c.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/classicdice.html": () =>
      t(() => import("./classicdice-d880fd19.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/coinflip.html": () =>
      t(() => import("./coinflip-48e1d01e.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/crash.html": () =>
      t(() => import("./crash-c2567a4c.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/egyptian.html": () =>
      t(() => import("./egyptian-aa948fff.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/general.html": () =>
      t(() => import("./general-c0bce9ef.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/hashdice.html": () =>
      t(() => import("./hashdice-ca1b5cf3.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/hilo.html": () =>
      t(() => import("./hilo-bae72ff8.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-c7c90200.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fr-FR/game/limbo.html": () =>
      t(() => import("./limbo-bc780c4d.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/mines.html": () =>
      t(() => import("./mines-96fd07d7.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/plinko.html": () =>
      t(() => import("./plinko-c6ee6d9a.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-4e2289ea.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fr-FR/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-087dc316.js"), []).then(
        (e) => e.default
      ),
    "../../locales/fr-FR/game/sword.html": () =>
      t(() => import("./sword-33791a54.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/tower.html": () =>
      t(() => import("./tower-4fb01816.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-8465161b.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/videopoker.html": () =>
      t(() => import("./videopoker-3315ad48.js"), []).then((e) => e.default),
    "../../locales/fr-FR/game/wheel.html": () =>
      t(() => import("./wheel-11f0628d.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/beauties.html": () =>
      t(() => import("./beauties-fd1d6800.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/blackjack.html": () =>
      t(() => import("./blackjack-57952341.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/cave.html": () =>
      t(() => import("./cave-1dc3000d.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/classicdice.html": () =>
      t(() => import("./classicdice-4eaaf9b2.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/coinflip.html": () =>
      t(() => import("./coinflip-89bb698c.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/crash.html": () =>
      t(() => import("./crash-d85ef9e4.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/egyptian.html": () =>
      t(() => import("./egyptian-d124a247.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/general.html": () =>
      t(() => import("./general-b262e68a.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/hashdice.html": () =>
      t(() => import("./hashdice-ce539a60.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/hilo.html": () =>
      t(() => import("./hilo-3c016c90.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-f1ba06b0.js"), []).then(
        (e) => e.default
      ),
    "../../locales/hi-IN/game/limbo.html": () =>
      t(() => import("./limbo-877884ef.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/mines.html": () =>
      t(() => import("./mines-c0e687bb.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/plinko.html": () =>
      t(() => import("./plinko-e77aa030.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-e05c3cba.js"), []).then(
        (e) => e.default
      ),
    "../../locales/hi-IN/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-7d7ab2fa.js"), []).then(
        (e) => e.default
      ),
    "../../locales/hi-IN/game/sword.html": () =>
      t(() => import("./sword-aa92baef.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/tower.html": () =>
      t(() => import("./tower-bbdabe81.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-87df375e.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/videopoker.html": () =>
      t(() => import("./videopoker-81af38f7.js"), []).then((e) => e.default),
    "../../locales/hi-IN/game/wheel.html": () =>
      t(() => import("./wheel-e2bfbab3.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/beauties.html": () =>
      t(() => import("./beauties-9add69b8.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/blackjack.html": () =>
      t(() => import("./blackjack-6283e53f.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/cave.html": () =>
      t(() => import("./cave-b24218ca.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/classicdice.html": () =>
      t(() => import("./classicdice-beac2114.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/coinflip.html": () =>
      t(() => import("./coinflip-7972d1c2.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/crash.html": () =>
      t(() => import("./crash-3687797b.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/egyptian.html": () =>
      t(() => import("./egyptian-9753ccd6.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/general.html": () =>
      t(() => import("./general-7a7cb8e1.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/hashdice.html": () =>
      t(() => import("./hashdice-abfbd0c2.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/hilo.html": () =>
      t(() => import("./hilo-b6f71801.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-4666019f.js"), []).then(
        (e) => e.default
      ),
    "../../locales/id-ID/game/limbo.html": () =>
      t(() => import("./limbo-29d5559b.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/mines.html": () =>
      t(() => import("./mines-da80e8cd.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/plinko.html": () =>
      t(() => import("./plinko-504bf047.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-9f6ec669.js"), []).then(
        (e) => e.default
      ),
    "../../locales/id-ID/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-1706f315.js"), []).then(
        (e) => e.default
      ),
    "../../locales/id-ID/game/sword.html": () =>
      t(() => import("./sword-bc17782e.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/tower.html": () =>
      t(() => import("./tower-73feb7fa.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-641a21f8.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/videopoker.html": () =>
      t(() => import("./videopoker-b862b01e.js"), []).then((e) => e.default),
    "../../locales/id-ID/game/wheel.html": () =>
      t(() => import("./wheel-19cc54e7.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/beauties.html": () =>
      t(() => import("./beauties-e41d4794.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/blackjack.html": () =>
      t(() => import("./blackjack-e683fbdb.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/cave.html": () =>
      t(() => import("./cave-8a1066a9.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/classicdice.html": () =>
      t(() => import("./classicdice-07e0d7e3.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/coinflip.html": () =>
      t(() => import("./coinflip-d48280ac.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/crash.html": () =>
      t(() => import("./crash-2e6fe0f8.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/egyptian.html": () =>
      t(() => import("./egyptian-90ca5f90.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/general.html": () =>
      t(() => import("./general-68ba0b16.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/hashdice.html": () =>
      t(() => import("./hashdice-422d9f6c.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/hilo.html": () =>
      t(() => import("./hilo-4d70da18.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-14fcb9c5.js"), []).then(
        (e) => e.default
      ),
    "../../locales/it-IT/game/limbo.html": () =>
      t(() => import("./limbo-17697a7c.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/mines.html": () =>
      t(() => import("./mines-e95f7c96.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/plinko.html": () =>
      t(() => import("./plinko-4582ff2e.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-320083e3.js"), []).then(
        (e) => e.default
      ),
    "../../locales/it-IT/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-977612e8.js"), []).then(
        (e) => e.default
      ),
    "../../locales/it-IT/game/sword.html": () =>
      t(() => import("./sword-449a4d06.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/tower.html": () =>
      t(() => import("./tower-b630a7a5.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-85a8370d.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/videopoker.html": () =>
      t(() => import("./videopoker-13d6c30a.js"), []).then((e) => e.default),
    "../../locales/it-IT/game/wheel.html": () =>
      t(() => import("./wheel-889969bb.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/beauties.html": () =>
      t(() => import("./beauties-96664f18.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/blackjack.html": () =>
      t(() => import("./blackjack-3ceba2bf.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/cave.html": () =>
      t(() => import("./cave-7a9a40bb.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/classicdice.html": () =>
      t(() => import("./classicdice-60b2cd74.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/coinflip.html": () =>
      t(() => import("./coinflip-eaede76c.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/crash.html": () =>
      t(() => import("./crash-31bb3924.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/egyptian.html": () =>
      t(() => import("./egyptian-52e54ce3.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/general.html": () =>
      t(() => import("./general-74904467.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/hashdice.html": () =>
      t(() => import("./hashdice-46a57da8.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/hilo.html": () =>
      t(() => import("./hilo-da6e7955.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-849efd88.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ja-JP/game/limbo.html": () =>
      t(() => import("./limbo-8aa078a5.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/mines.html": () =>
      t(() => import("./mines-12dc6c98.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/plinko.html": () =>
      t(() => import("./plinko-364c6bbd.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-035f37b3.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ja-JP/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-94a83764.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ja-JP/game/sword.html": () =>
      t(() => import("./sword-53be7e4f.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/tower.html": () =>
      t(() => import("./tower-db35ce6f.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-8ff1d773.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/videopoker.html": () =>
      t(() => import("./videopoker-28592e11.js"), []).then((e) => e.default),
    "../../locales/ja-JP/game/wheel.html": () =>
      t(() => import("./wheel-52b74c4e.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/beauties.html": () =>
      t(() => import("./beauties-5b2019ca.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/blackjack.html": () =>
      t(() => import("./blackjack-78ad03b1.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/cave.html": () =>
      t(() => import("./cave-e6d80256.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/classicdice.html": () =>
      t(() => import("./classicdice-0b14ea02.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/coinflip.html": () =>
      t(() => import("./coinflip-279d0489.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/crash.html": () =>
      t(() => import("./crash-a567f062.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/egyptian.html": () =>
      t(() => import("./egyptian-43351171.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/general.html": () =>
      t(() => import("./general-73462e27.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/hashdice.html": () =>
      t(() => import("./hashdice-81ff3282.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/hilo.html": () =>
      t(() => import("./hilo-c60fdba3.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-ecceed0f.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ko-KR/game/limbo.html": () =>
      t(() => import("./limbo-7987a5f2.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/mines.html": () =>
      t(() => import("./mines-2a9f5ede.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/plinko.html": () =>
      t(() => import("./plinko-2e5c9148.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-5654f5c9.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ko-KR/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-11c8b2b6.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ko-KR/game/sword.html": () =>
      t(() => import("./sword-e5ab0a66.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/tower.html": () =>
      t(() => import("./tower-b57f74b6.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-9a1c0149.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/videopoker.html": () =>
      t(() => import("./videopoker-a8347dbb.js"), []).then((e) => e.default),
    "../../locales/ko-KR/game/wheel.html": () =>
      t(() => import("./wheel-e3298403.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/beauties.html": () =>
      t(() => import("./beauties-e327e98f.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/blackjack.html": () =>
      t(() => import("./blackjack-2da9659a.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/cave.html": () =>
      t(() => import("./cave-3d9e0cf2.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/classicdice.html": () =>
      t(() => import("./classicdice-e0911915.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/coinflip.html": () =>
      t(() => import("./coinflip-d5ec08ed.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/crash.html": () =>
      t(() => import("./crash-83a586dc.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/egyptian.html": () =>
      t(() => import("./egyptian-ea44cf6b.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/general.html": () =>
      t(() => import("./general-281affaa.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/hashdice.html": () =>
      t(() => import("./hashdice-72f3e15e.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/hilo.html": () =>
      t(() => import("./hilo-a2894882.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-0793e15c.js"), []).then(
        (e) => e.default
      ),
    "../../locales/mr-IN/game/limbo.html": () =>
      t(() => import("./limbo-110607c0.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/mines.html": () =>
      t(() => import("./mines-6766745b.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/plinko.html": () =>
      t(() => import("./plinko-35532cbf.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-59f7090a.js"), []).then(
        (e) => e.default
      ),
    "../../locales/mr-IN/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-484e7b37.js"), []).then(
        (e) => e.default
      ),
    "../../locales/mr-IN/game/sword.html": () =>
      t(() => import("./sword-e47fa3e9.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/tower.html": () =>
      t(() => import("./tower-e33e4c14.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-2d65e460.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/videopoker.html": () =>
      t(() => import("./videopoker-fbf02686.js"), []).then((e) => e.default),
    "../../locales/mr-IN/game/wheel.html": () =>
      t(() => import("./wheel-c2b5f930.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/beauties.html": () =>
      t(() => import("./beauties-913d4af7.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/blackjack.html": () =>
      t(() => import("./blackjack-103d66e9.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/cave.html": () =>
      t(() => import("./cave-be88de3a.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/classicdice.html": () =>
      t(() => import("./classicdice-22953a67.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/coinflip.html": () =>
      t(() => import("./coinflip-d6065858.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/crash.html": () =>
      t(() => import("./crash-7f8f5df0.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/egyptian.html": () =>
      t(() => import("./egyptian-5e28c058.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/general.html": () =>
      t(() => import("./general-9bc6337e.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/hashdice.html": () =>
      t(() => import("./hashdice-7765ffc8.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/hilo.html": () =>
      t(() => import("./hilo-e5f0901b.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-f1e4ea52.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ms-MY/game/limbo.html": () =>
      t(() => import("./limbo-0e742f79.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/mines.html": () =>
      t(() => import("./mines-38cb0537.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/plinko.html": () =>
      t(() => import("./plinko-59c17539.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-04818f14.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ms-MY/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-3930b50b.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ms-MY/game/sword.html": () =>
      t(() => import("./sword-01896eb1.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/tower.html": () =>
      t(() => import("./tower-fe62a6d5.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-0fba9054.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/videopoker.html": () =>
      t(() => import("./videopoker-c59b370f.js"), []).then((e) => e.default),
    "../../locales/ms-MY/game/wheel.html": () =>
      t(() => import("./wheel-d454fc40.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/beauties.html": () =>
      t(() => import("./beauties-9ad05604.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/blackjack.html": () =>
      t(() => import("./blackjack-66495cc7.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/cave.html": () =>
      t(() => import("./cave-637f1c06.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/classicdice.html": () =>
      t(() => import("./classicdice-e96b2492.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/coinflip.html": () =>
      t(() => import("./coinflip-13eeac6b.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/crash.html": () =>
      t(() => import("./crash-c12cfaf3.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/egyptian.html": () =>
      t(() => import("./egyptian-e222dc97.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/general.html": () =>
      t(() => import("./general-2b48cc1c.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/hashdice.html": () =>
      t(() => import("./hashdice-9ec471ed.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/hilo.html": () =>
      t(() => import("./hilo-ddd07554.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-014aac29.js"), []).then(
        (e) => e.default
      ),
    "../../locales/my-MM/game/limbo.html": () =>
      t(() => import("./limbo-b3f400b9.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/mines.html": () =>
      t(() => import("./mines-855a78e1.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/plinko.html": () =>
      t(() => import("./plinko-9c394eb2.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-162e7d90.js"), []).then(
        (e) => e.default
      ),
    "../../locales/my-MM/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-18c61ae7.js"), []).then(
        (e) => e.default
      ),
    "../../locales/my-MM/game/sword.html": () =>
      t(() => import("./sword-29663a43.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/tower.html": () =>
      t(() => import("./tower-fef10c18.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-d1b165fe.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/videopoker.html": () =>
      t(() => import("./videopoker-b89506bf.js"), []).then((e) => e.default),
    "../../locales/my-MM/game/wheel.html": () =>
      t(() => import("./wheel-45babacc.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/beauties.html": () =>
      t(() => import("./beauties-b49a9b6c.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/blackjack.html": () =>
      t(() => import("./blackjack-2a7f7d67.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/cave.html": () =>
      t(() => import("./cave-8bd1a933.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/classicdice.html": () =>
      t(() => import("./classicdice-fa9515b1.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/coinflip.html": () =>
      t(() => import("./coinflip-6d715e4d.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/crash.html": () =>
      t(() => import("./crash-e3ca968d.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/egyptian.html": () =>
      t(() => import("./egyptian-803a398a.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/general.html": () =>
      t(() => import("./general-a7c9d39c.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/hashdice.html": () =>
      t(() => import("./hashdice-b69a144f.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/hilo.html": () =>
      t(() => import("./hilo-5bd91ca7.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-6d4f4c36.js"), []).then(
        (e) => e.default
      ),
    "../../locales/pl-PL/game/limbo.html": () =>
      t(() => import("./limbo-b0c621db.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/mines.html": () =>
      t(() => import("./mines-086356a9.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/plinko.html": () =>
      t(() => import("./plinko-02e67cfe.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-c306e03f.js"), []).then(
        (e) => e.default
      ),
    "../../locales/pl-PL/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-6e80c473.js"), []).then(
        (e) => e.default
      ),
    "../../locales/pl-PL/game/sword.html": () =>
      t(() => import("./sword-f3e5b908.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/tower.html": () =>
      t(() => import("./tower-4fd1f087.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-eb78de08.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/videopoker.html": () =>
      t(() => import("./videopoker-760669d1.js"), []).then((e) => e.default),
    "../../locales/pl-PL/game/wheel.html": () =>
      t(() => import("./wheel-aad2f253.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/beauties.html": () =>
      t(() => import("./beauties-0adb1f2d.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/blackjack.html": () =>
      t(() => import("./blackjack-cf3fbe18.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/cave.html": () =>
      t(() => import("./cave-0f7925d2.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/classicdice.html": () =>
      t(() => import("./classicdice-9e45e2d5.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/coinflip.html": () =>
      t(() => import("./coinflip-7fdfcbd3.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/crash.html": () =>
      t(() => import("./crash-2e990c48.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/egyptian.html": () =>
      t(() => import("./egyptian-89dceffe.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/general.html": () =>
      t(() => import("./general-472db7c3.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/hashdice.html": () =>
      t(() => import("./hashdice-6f819dc6.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/hilo.html": () =>
      t(() => import("./hilo-957854e8.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-19747850.js"), []).then(
        (e) => e.default
      ),
    "../../locales/pt-BR/game/limbo.html": () =>
      t(() => import("./limbo-5e884d9a.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/mines.html": () =>
      t(() => import("./mines-d7a1fdf9.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/plinko.html": () =>
      t(() => import("./plinko-f3773d2b.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-bc31af8f.js"), []).then(
        (e) => e.default
      ),
    "../../locales/pt-BR/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-e2602de0.js"), []).then(
        (e) => e.default
      ),
    "../../locales/pt-BR/game/sword.html": () =>
      t(() => import("./sword-b97654ce.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/tower.html": () =>
      t(() => import("./tower-d6ec4219.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-cf6a0903.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/videopoker.html": () =>
      t(() => import("./videopoker-bdb871dd.js"), []).then((e) => e.default),
    "../../locales/pt-BR/game/wheel.html": () =>
      t(() => import("./wheel-28d0283d.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/beauties.html": () =>
      t(() => import("./beauties-aba56392.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/blackjack.html": () =>
      t(() => import("./blackjack-deff125c.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/cave.html": () =>
      t(() => import("./cave-e08646df.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/classicdice.html": () =>
      t(() => import("./classicdice-d3f255e8.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/coinflip.html": () =>
      t(() => import("./coinflip-5b40f3d9.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/crash.html": () =>
      t(() => import("./crash-a2e526bf.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/egyptian.html": () =>
      t(() => import("./egyptian-63edc466.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/general.html": () =>
      t(() => import("./general-3c7b5edf.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/hashdice.html": () =>
      t(() => import("./hashdice-14fd4687.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/hilo.html": () =>
      t(() => import("./hilo-60827fa2.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-265dbcb1.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ru-RU/game/limbo.html": () =>
      t(() => import("./limbo-a7f697e3.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/mines.html": () =>
      t(() => import("./mines-2375ba90.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/plinko.html": () =>
      t(() => import("./plinko-afa7feca.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-12ce4fc1.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ru-RU/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-3cc27dd0.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ru-RU/game/sword.html": () =>
      t(() => import("./sword-65a1b867.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/tower.html": () =>
      t(() => import("./tower-91ece724.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-44c1bb25.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/videopoker.html": () =>
      t(() => import("./videopoker-37fcff27.js"), []).then((e) => e.default),
    "../../locales/ru-RU/game/wheel.html": () =>
      t(() => import("./wheel-d357641c.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/beauties.html": () =>
      t(() => import("./beauties-56fc2188.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/blackjack.html": () =>
      t(() => import("./blackjack-e2b32619.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/cave.html": () =>
      t(() => import("./cave-a9f72b45.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/classicdice.html": () =>
      t(() => import("./classicdice-960bb52d.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/coinflip.html": () =>
      t(() => import("./coinflip-a7723744.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/crash.html": () =>
      t(() => import("./crash-3bde934a.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/egyptian.html": () =>
      t(() => import("./egyptian-438b46da.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/general.html": () =>
      t(() => import("./general-67be7f65.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/hashdice.html": () =>
      t(() => import("./hashdice-6eb4ca93.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/hilo.html": () =>
      t(() => import("./hilo-e6357514.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-4092286c.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ta-IN/game/limbo.html": () =>
      t(() => import("./limbo-c0e8a050.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/mines.html": () =>
      t(() => import("./mines-b4e136ca.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/plinko.html": () =>
      t(() => import("./plinko-3cf7e6f9.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-716278e7.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ta-IN/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-19a303b9.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ta-IN/game/sword.html": () =>
      t(() => import("./sword-d14acff3.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/tower.html": () =>
      t(() => import("./tower-f5b5eae0.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-48af2b27.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/videopoker.html": () =>
      t(() => import("./videopoker-acc3a39b.js"), []).then((e) => e.default),
    "../../locales/ta-IN/game/wheel.html": () =>
      t(() => import("./wheel-b4490b30.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/beauties.html": () =>
      t(() => import("./beauties-0e64538e.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/blackjack.html": () =>
      t(() => import("./blackjack-7a8c648d.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/cave.html": () =>
      t(() => import("./cave-148fbfd8.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/classicdice.html": () =>
      t(() => import("./classicdice-e3c0c9dc.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/coinflip.html": () =>
      t(() => import("./coinflip-fc1bc246.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/crash.html": () =>
      t(() => import("./crash-de37d9cd.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/egyptian.html": () =>
      t(() => import("./egyptian-64499d4f.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/general.html": () =>
      t(() => import("./general-dbe48f42.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/hashdice.html": () =>
      t(() => import("./hashdice-1a22a95d.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/hilo.html": () =>
      t(() => import("./hilo-6c0f769d.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-5d69f29f.js"), []).then(
        (e) => e.default
      ),
    "../../locales/te-IN/game/limbo.html": () =>
      t(() => import("./limbo-18d4e0fc.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/mines.html": () =>
      t(() => import("./mines-567b8032.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/plinko.html": () =>
      t(() => import("./plinko-994c5f59.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-58dc8105.js"), []).then(
        (e) => e.default
      ),
    "../../locales/te-IN/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-fb488a49.js"), []).then(
        (e) => e.default
      ),
    "../../locales/te-IN/game/sword.html": () =>
      t(() => import("./sword-c914d20e.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/tower.html": () =>
      t(() => import("./tower-9eb9d15f.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-309568dd.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/videopoker.html": () =>
      t(() => import("./videopoker-36b641ea.js"), []).then((e) => e.default),
    "../../locales/te-IN/game/wheel.html": () =>
      t(() => import("./wheel-6900ae5c.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/beauties.html": () =>
      t(() => import("./beauties-d8b2d76c.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/blackjack.html": () =>
      t(() => import("./blackjack-19a44587.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/cave.html": () =>
      t(() => import("./cave-b67fbb11.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/classicdice.html": () =>
      t(() => import("./classicdice-f28381cc.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/coinflip.html": () =>
      t(() => import("./coinflip-573db5d5.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/crash.html": () =>
      t(() => import("./crash-4a9bbc81.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/egyptian.html": () =>
      t(() => import("./egyptian-2bc41bb7.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/general.html": () =>
      t(() => import("./general-281ad32d.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/hashdice.html": () =>
      t(() => import("./hashdice-9e82b5f0.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/hilo.html": () =>
      t(() => import("./hilo-bfab892e.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-ae018ccc.js"), []).then(
        (e) => e.default
      ),
    "../../locales/th-TH/game/limbo.html": () =>
      t(() => import("./limbo-4e411ffd.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/mines.html": () =>
      t(() => import("./mines-d363f5bc.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/plinko.html": () =>
      t(() => import("./plinko-c4ca361e.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-6968745b.js"), []).then(
        (e) => e.default
      ),
    "../../locales/th-TH/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-ae4b0801.js"), []).then(
        (e) => e.default
      ),
    "../../locales/th-TH/game/sword.html": () =>
      t(() => import("./sword-f53688c9.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/tower.html": () =>
      t(() => import("./tower-3ce986e5.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-fef36965.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/videopoker.html": () =>
      t(() => import("./videopoker-f9fde065.js"), []).then((e) => e.default),
    "../../locales/th-TH/game/wheel.html": () =>
      t(() => import("./wheel-b17dce5a.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/beauties.html": () =>
      t(() => import("./beauties-ec6d5523.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/blackjack.html": () =>
      t(() => import("./blackjack-b12e480f.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/cave.html": () =>
      t(() => import("./cave-f1f61ef3.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/classicdice.html": () =>
      t(() => import("./classicdice-bfef45cf.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/coinflip.html": () =>
      t(() => import("./coinflip-96c9be0f.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/crash.html": () =>
      t(() => import("./crash-ab3db6e5.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/egyptian.html": () =>
      t(() => import("./egyptian-196671e0.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/general.html": () =>
      t(() => import("./general-a8350913.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/hashdice.html": () =>
      t(() => import("./hashdice-ca6e4c52.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/hilo.html": () =>
      t(() => import("./hilo-82ea6f42.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-ea718e3b.js"), []).then(
        (e) => e.default
      ),
    "../../locales/tr-TR/game/limbo.html": () =>
      t(() => import("./limbo-87babc81.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/mines.html": () =>
      t(() => import("./mines-939c3e46.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/plinko.html": () =>
      t(() => import("./plinko-69fb6b7a.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-c81abade.js"), []).then(
        (e) => e.default
      ),
    "../../locales/tr-TR/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-35a5581b.js"), []).then(
        (e) => e.default
      ),
    "../../locales/tr-TR/game/sword.html": () =>
      t(() => import("./sword-c65ab9ff.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/tower.html": () =>
      t(() => import("./tower-4fafebb5.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-77d1a06e.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/videopoker.html": () =>
      t(() => import("./videopoker-d6eb6a5d.js"), []).then((e) => e.default),
    "../../locales/tr-TR/game/wheel.html": () =>
      t(() => import("./wheel-3e8e5322.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/beauties.html": () =>
      t(() => import("./beauties-1764e11e.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/blackjack.html": () =>
      t(() => import("./blackjack-165ab0cf.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/cave.html": () =>
      t(() => import("./cave-a0cf25f0.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/classicdice.html": () =>
      t(() => import("./classicdice-1384ea02.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/coinflip.html": () =>
      t(() => import("./coinflip-fc6abf44.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/crash.html": () =>
      t(() => import("./crash-516a7b82.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/egyptian.html": () =>
      t(() => import("./egyptian-af825abd.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/general.html": () =>
      t(() => import("./general-0eb86766.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/hashdice.html": () =>
      t(() => import("./hashdice-18ca812c.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/hilo.html": () =>
      t(() => import("./hilo-947508aa.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-f8a2bcd7.js"), []).then(
        (e) => e.default
      ),
    "../../locales/uk-UA/game/limbo.html": () =>
      t(() => import("./limbo-b7efd086.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/mines.html": () =>
      t(() => import("./mines-8989bf38.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/plinko.html": () =>
      t(() => import("./plinko-bbd6ed8f.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-38e09063.js"), []).then(
        (e) => e.default
      ),
    "../../locales/uk-UA/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-53757b78.js"), []).then(
        (e) => e.default
      ),
    "../../locales/uk-UA/game/sword.html": () =>
      t(() => import("./sword-1c04e889.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/tower.html": () =>
      t(() => import("./tower-53c9f5b7.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-6a148c5e.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/videopoker.html": () =>
      t(() => import("./videopoker-2783eb2f.js"), []).then((e) => e.default),
    "../../locales/uk-UA/game/wheel.html": () =>
      t(() => import("./wheel-6e706578.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/beauties.html": () =>
      t(() => import("./beauties-9c5684ec.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/blackjack.html": () =>
      t(() => import("./blackjack-4d3d12cd.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/cave.html": () =>
      t(() => import("./cave-dc41b667.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/classicdice.html": () =>
      t(() => import("./classicdice-ef00dd2c.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/coinflip.html": () =>
      t(() => import("./coinflip-90e6e60b.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/crash.html": () =>
      t(() => import("./crash-e914efca.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/egyptian.html": () =>
      t(() => import("./egyptian-dbcf441e.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/general.html": () =>
      t(() => import("./general-398ed60d.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/hashdice.html": () =>
      t(() => import("./hashdice-7929d29e.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/hilo.html": () =>
      t(() => import("./hilo-9e30a0a3.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-24d326f2.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ur-PK/game/limbo.html": () =>
      t(() => import("./limbo-4bfc4d6a.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/mines.html": () =>
      t(() => import("./mines-8198aa25.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/plinko.html": () =>
      t(() => import("./plinko-8283c6c7.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-4c8353dd.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ur-PK/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-dc9d0655.js"), []).then(
        (e) => e.default
      ),
    "../../locales/ur-PK/game/sword.html": () =>
      t(() => import("./sword-b8843369.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/tower.html": () =>
      t(() => import("./tower-7ddab528.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-e375e4d6.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/videopoker.html": () =>
      t(() => import("./videopoker-50756410.js"), []).then((e) => e.default),
    "../../locales/ur-PK/game/wheel.html": () =>
      t(() => import("./wheel-c1508977.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/beauties.html": () =>
      t(() => import("./beauties-2204d209.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/blackjack.html": () =>
      t(() => import("./blackjack-05f86207.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/cave.html": () =>
      t(() => import("./cave-e944599c.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/classicdice.html": () =>
      t(() => import("./classicdice-c76d51c3.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/coinflip.html": () =>
      t(() => import("./coinflip-04d70c84.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/crash.html": () =>
      t(() => import("./crash-822811a4.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/egyptian.html": () =>
      t(() => import("./egyptian-fc0cd452.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/general.html": () =>
      t(() => import("./general-48c9acd6.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/hashdice.html": () =>
      t(() => import("./hashdice-e16e6c31.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/hilo.html": () =>
      t(() => import("./hilo-f8b03f67.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-99f5b9a2.js"), []).then(
        (e) => e.default
      ),
    "../../locales/vi-VN/game/limbo.html": () =>
      t(() => import("./limbo-d5ba84a9.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/mines.html": () =>
      t(() => import("./mines-292a1c68.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/plinko.html": () =>
      t(() => import("./plinko-37648039.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-f2ad7954.js"), []).then(
        (e) => e.default
      ),
    "../../locales/vi-VN/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-1c9246d7.js"), []).then(
        (e) => e.default
      ),
    "../../locales/vi-VN/game/sword.html": () =>
      t(() => import("./sword-97590ba1.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/tower.html": () =>
      t(() => import("./tower-5823bd0d.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-8176c86e.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/videopoker.html": () =>
      t(() => import("./videopoker-3a42b02d.js"), []).then((e) => e.default),
    "../../locales/vi-VN/game/wheel.html": () =>
      t(() => import("./wheel-48004783.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/beauties.html": () =>
      t(() => import("./beauties-e652bcd4.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/blackjack.html": () =>
      t(() => import("./blackjack-3100afc9.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/cave.html": () =>
      t(() => import("./cave-043b3f48.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/classicdice.html": () =>
      t(() => import("./classicdice-7ec14057.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/coinflip.html": () =>
      t(() => import("./coinflip-755db089.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/crash.html": () =>
      t(() => import("./crash-0937cb55.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/double.html": () =>
      t(() => import("./double-2cb7196d.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/egyptian.html": () =>
      t(() => import("./egyptian-d346e39a.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/general.html": () =>
      t(() => import("./general-416e2e09.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/hashdice.html": () =>
      t(() => import("./hashdice-c4c277c8.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/hilo.html": () =>
      t(() => import("./hilo-90b3472d.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/kemomultiplayer.html": () =>
      t(() => import("./kemomultiplayer-dd4428fa.js"), []).then(
        (e) => e.default
      ),
    "../../locales/zh-TW/game/limbo.html": () =>
      t(() => import("./limbo-8fb77b98.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/mines.html": () =>
      t(() => import("./mines-cbb1d1e6.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/parity.html": () =>
      t(() => import("./parity-8b124406.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/plinko.html": () =>
      t(() => import("./plinko-68178a6a.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/roulettemultiplayer.html": () =>
      t(() => import("./roulettemultiplayer-ece9751b.js"), []).then(
        (e) => e.default
      ),
    "../../locales/zh-TW/game/roulettesingle.html": () =>
      t(() => import("./roulettesingle-28689335.js"), []).then(
        (e) => e.default
      ),
    "../../locales/zh-TW/game/sword.html": () =>
      t(() => import("./sword-77b7ac60.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/tower.html": () =>
      t(() => import("./tower-d9498918.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/twist.html": () =>
      t(() => import("./twist-8c201478.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/ultimatedice.html": () =>
      t(() => import("./ultimatedice-c328af4d.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/videopoker.html": () =>
      t(() => import("./videopoker-6778dbbe.js"), []).then((e) => e.default),
    "../../locales/zh-TW/game/wheel.html": () =>
      t(() => import("./wheel-c435d829.js"), []).then((e) => e.default),
  }),
  m = {};
for (const e in n) {
  const _ = e.match(/locales\/(\S*)\/game/);
  if (_ && _.length > 0) {
    const l = _[1],
      o = e.match(/\/game\/(\S*)\.html/);
    if ((m[l] || (m[l] = {}), o && o.length > 0)) {
      const a = o[1];
      m[l][a] = n[e];
    }
  }
}
const p = c({}, m);
var f = y("<div>");
const M = (e) => {
    const [_, l] = v("");
    D(() => {
      const { fileInfo: a, enfile: R } = (function (r) {
          let u = "en-US";
          return (
            Object.keys(s).map((h) => {
              s[h] === r && (u = h);
            }),
            { fileInfo: p[u], enfile: p["en-US"] }
          );
        })(A.lang),
        i = a[e.htmlName] || R[e.htmlName];
      typeof i == "function"
        ? i()
            .then((r) => {
              l(r);
            })
            .catch(console.error)
        : l(i);
    });
    const o = L(() => _().replace(/__BC_GITHUB__/g, V.GITHUB));
    return O(w, {
      get children() {
        var a = f();
        return I(() => (a.innerHTML = o())), a;
      },
    });
  },
  w = (e) => {
    return (
      (_ = f()),
      k(_, () => e.children),
      I(() =>
        N(
          _,
          b(
            "leading-normal select-text text-[rgba(95, 105, 117, 0.8)] dark:text-[#99a4b0] pb-6 game-fairness"
          )
        )
      ),
      _
    );
    var _;
  };
export { M as G };
