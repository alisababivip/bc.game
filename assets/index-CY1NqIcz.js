import { bi as t } from "./index-Cp-3lvCI.js";
import { b as J } from "./_basePropertyOf-BhSQSS-6.js";
function L(e, r, s) {
  var u = -1,
    a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r),
    (s = s > a ? a : s),
    s < 0 && (s += a),
    (a = r > s ? 0 : (s - r) >>> 0),
    (r >>>= 0);
  for (var n = Array(a); ++u < a; ) n[u] = e[u + r];
  return n;
}
function $(e, r, s) {
  var u = e.length;
  return (s = s === void 0 ? u : s), !r && s >= u ? e : L(e, r, s);
}
var V = "\\ud800-\\udfff",
  T = "\\u0300-\\u036f",
  Q = "\\ufe20-\\ufe2f",
  H = "\\u20d0-\\u20ff",
  K = T + Q + H,
  I = "\\ufe0e\\ufe0f",
  N = "\\u200d",
  P = RegExp("[" + N + V + K + I + "]");
function b(e) {
  return P.test(e);
}
function W(e) {
  return e.split("");
}
var A = "\\ud800-\\udfff",
  X = "\\u0300-\\u036f",
  Y = "\\ufe20-\\ufe2f",
  F = "\\u20d0-\\u20ff",
  q = X + Y + F,
  G = "\\ufe0e\\ufe0f",
  _ = "[" + A + "]",
  o = "[" + q + "]",
  i = "\\ud83c[\\udffb-\\udfff]",
  ee = "(?:" + o + "|" + i + ")",
  v = "[^" + A + "]",
  k = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  C = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  re = "\\u200d",
  m = ee + "?",
  y = "[" + G + "]?",
  se = "(?:" + re + "(?:" + [v, k, C].join("|") + ")" + y + m + ")*",
  ae = y + m + se,
  ue = "(?:" + [v + o + "?", o, k, C, _].join("|") + ")",
  ce = RegExp(i + "(?=" + i + ")|" + ue + ae, "g");
function ne(e) {
  return e.match(ce) || [];
}
function te(e) {
  return b(e) ? ne(e) : W(e);
}
function oe(e) {
  return function (r) {
    r = t(r);
    var s = b(r) ? te(r) : void 0,
      u = s ? s[0] : r.charAt(0),
      a = s ? $(s, 1).join("") : r.slice(1);
    return u[e]() + a;
  };
}
var ie = oe("toUpperCase");
function fe(e) {
  return ie(t(e).toLowerCase());
}
function ge(e, r, s, u) {
  for (var a = -1, n = e == null ? 0 : e.length; ++a < n; )
    s = r(s, e[a], a, e);
  return s;
}
var de = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s",
  },
  le = J(de),
  pe = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  xe = "\\u0300-\\u036f",
  be = "\\ufe20-\\ufe2f",
  Ae = "\\u20d0-\\u20ff",
  ve = xe + be + Ae,
  ke = "[" + ve + "]",
  Ce = RegExp(ke, "g");
function me(e) {
  return (e = t(e)), e && e.replace(pe, le).replace(Ce, "");
}
var ye = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function De(e) {
  return e.match(ye) || [];
}
var je = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Be(e) {
  return je.test(e);
}
var D = "\\ud800-\\udfff",
  Re = "\\u0300-\\u036f",
  Se = "\\ufe20-\\ufe2f",
  we = "\\u20d0-\\u20ff",
  he = Re + Se + we,
  j = "\\u2700-\\u27bf",
  B = "a-z\\xdf-\\xf6\\xf8-\\xff",
  ze = "\\xac\\xb1\\xd7\\xf7",
  Ue = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  Ee = "\\u2000-\\u206f",
  Ze =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  R = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  Oe = "\\ufe0e\\ufe0f",
  S = ze + Ue + Ee + Ze,
  w = "['’]",
  f = "[" + S + "]",
  Me = "[" + he + "]",
  h = "\\d+",
  Je = "[" + j + "]",
  z = "[" + B + "]",
  U = "[^" + D + S + h + j + B + R + "]",
  Le = "\\ud83c[\\udffb-\\udfff]",
  $e = "(?:" + Me + "|" + Le + ")",
  Ve = "[^" + D + "]",
  E = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Z = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  c = "[" + R + "]",
  Te = "\\u200d",
  g = "(?:" + z + "|" + U + ")",
  Qe = "(?:" + c + "|" + U + ")",
  d = "(?:" + w + "(?:d|ll|m|re|s|t|ve))?",
  l = "(?:" + w + "(?:D|LL|M|RE|S|T|VE))?",
  O = $e + "?",
  M = "[" + Oe + "]?",
  He = "(?:" + Te + "(?:" + [Ve, E, Z].join("|") + ")" + M + O + ")*",
  Ke = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  Ie = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  Ne = M + O + He,
  Pe = "(?:" + [Je, E, Z].join("|") + ")" + Ne,
  We = RegExp(
    [
      c + "?" + z + "+" + d + "(?=" + [f, c, "$"].join("|") + ")",
      Qe + "+" + l + "(?=" + [f, c + g, "$"].join("|") + ")",
      c + "?" + g + "+" + d,
      c + "+" + l,
      Ie,
      Ke,
      h,
      Pe,
    ].join("|"),
    "g"
  );
function Xe(e) {
  return e.match(We) || [];
}
function Ye(e, r, s) {
  return (
    (e = t(e)),
    (r = r),
    r === void 0 ? (Be(e) ? Xe(e) : De(e)) : e.match(r) || []
  );
}
var Fe = "['’]",
  qe = RegExp(Fe, "g");
function Ge(e) {
  return function (r) {
    return ge(Ye(me(r).replace(qe, "")), e, "");
  };
}
var _e = Ge(function (e, r, s) {
  return (r = r.toLowerCase()), e + (s ? fe(r) : r);
});
const er = "/assets/Baccarat-Cka4hTin.png",
  rr = "/assets/Bingo-DJr1jxyj.png",
  sr = "/assets/BlackJack-eZoANKaD.png",
  ar = "/assets/Cave-DBBDOwfi.png",
  ur = "/assets/ClassicDice-DDt36mv3.png",
  cr = "/assets/HashDice-BhE-Q7oi.png",
  nr = "/assets/Crash-CeU4S73_.png",
  tr = "/assets/HiLo-Dw7mOv-w.png",
  or = "/assets/KenoSingle-D-XPoM9A.png",
  ir = "/assets/Keno-Cr3BnMv3.png",
  fr = "/assets/Limbo-ijXB8ZlP.png",
  gr = "/assets/OrientalBeauties-D2vFZDxN.png",
  dr = "/assets/Plinko-BM7A_aH9.png",
  p = "/assets/Roulette-CKFJY2up.png",
  lr = "/assets/Slots-CcPRgzJJ.png",
  pr = "/assets/Swords-lat_iEju.png",
  xr = "/assets/VideoPoker-BcbvcvK9.png",
  br = "/assets/Wheel-Uv96X712.png",
  Ar = "/assets/EgyptianAdventure-D6RbfB_Q.png",
  vr = "/assets/UltimateDice-iYowbx-V.png",
  kr = "/assets/Mines-YKtf43D1.png",
  Cr = "/assets/RouletteSingle-BGlgvFVt.png",
  mr = "/assets/Coloring-CBlVDZpx.png",
  yr = "/assets/Tower-kVUxWyK5.png",
  Dr = "/assets/CoinFlip-k3X3F642.png",
  jr = "/assets/BaccaratSingle-5imDMlam.png",
  Br = "/assets/Twist-6_0YxdpY.png",
  Rr = "/assets/Double-DPGxNapL.png",
  Sr = "/assets/coinFlag-D09iYaKb.png",
  x = "/assets/Parity-DFsgrMZs.png",
  wr = "/assets/BlackJackA-C_KNouDc.png",
  hr = "/assets/BlackJackB-Cd-rSLxi.png",
  zr = "/assets/SpeedBlackjack-Cacog6YF.png",
  Ur = "/assets/VipBlackjack-CnSfZrs2.png",
  Er = "/assets/OneBlackjack-BLEJg1Rn.png",
  Zr = "/assets/SpeedBaccarat-DJz_CoCt.png",
  Or = "/assets/Academy-BxqDE1p5.png",
  Mr = "/assets/DeadliestSea-BHJmzpPU.png",
  Jr = "/assets/DragonSlayer-D7vQ9ohV.png",
  Lr = "/assets/DragonQuest-Cj6iQzRZ.png",
  $r = "/assets/DoggyMiner-DDYVq4V_.png",
  Vr = "/assets/Hunter-DxnQHgZB.png",
  Tr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAllBMVEUAAACiXADQqBCjXACpYACjWwCjXACzdACiXACjWwCjWwDuyiigXgD43DTQoADlvhnHkQDRnwDtzCXPnwC8ggD52TOjXAD32jHkvBrKlgCoZgDbsAb53DLcrgL32jHuyynuzCijXADXrQzYrwCiXgDz1TDsxy6jXADHkQC8ggDRoACycgCoYwDmvxrbrwf53DTvzSnbsAFbxQjXAAAAJ3RSTlMA3xC/EO/Pj29ff0Ag7+/f39e/v7evr29vQEDu39/Pz5+fgGBQMCBvUNrEAAAA2ElEQVRYw+3QxxKCMBSF4UsABey9996ivv/LaWQUcsGZy/58iyz+TCoBAAAAAEhUBr1p7Z6rNu8NdkW3az8Sy30cVTouKlTA8GZpKBNVw65DkptprZ86sTZxY6LJz8+oJySmzkyrU693WrwqkjpyzZFSo2Ymk9SJ65razWSSKl+Y8p8q5V2ZsaljXknOOVicuPp29Umuf7CEcQ3s6pJckL/SZcfIeX76wdVftr7CZLEodT8vyVU36REVUvr+fGD38HvJEhUUvLd0VluPuLBvZiICAAAAABB4Af6XSAfJPb0SAAAAAElFTkSuQmCC",
  Qr = "/assets/Zombies-C7j6aKZN.png",
  Hr = "/assets/detradetrading-TEdJNsvw.png",
  Kr = "/assets/bcgamehotmaniabyevoplay-BafjQbP0.png",
  Ir = "/assets/tbl671-BosRKnSt.png",
  Nr = "/assets/cro12125-CwzBKnis.png",
  Pr = "/assets/cro12126-CGazVAn8.png",
  Wr = "/assets/cro12127-CdX-0fk0.png",
  Xr = "/assets/cro12128-tvWM55XE.png",
  Yr = "/assets/cro12129-Dilejxp_.png",
  Fr = "/assets/cro12130-Cpi9oIsf.png",
  qr = "/assets/cro12132-B7_Y9XeY.png",
  Gr = "/assets/evo21blackjackr4da45gr47ryncsy-CqjQvtEl.png",
  _r = "/assets/evo21blackjackr4dbmfrt47rypvea-KrcIg2BO.png",
  es = "/assets/evo21blackjackr4dccjre47rytlgz-BIdq1TB2.png",
  rs = "/assets/evo21blackjackr4dcfcsu47rytz6v-BQuQkSEq.png",
  ss = "/assets/evo21classicfreebetbjr4ddcpxr47ryy22j-Cnwd3ql5.png";
function cs(e) {
  switch (_e(e).toLowerCase()) {
    case "baccaratmultiplayer":
      return er;
    case "bingo":
      return rr;
    case "blackjack":
      return sr;
    case "cave":
      return ar;
    case "classicdice":
      return ur;
    case "crash":
      return nr;
    case "hilo":
      return tr;
    case "keno":
      return or;
    case "kenomultiplayer":
      return ir;
    case "orientalbeauties":
      return gr;
    case "plinko":
      return dr;
    case "roulettemultiplayer":
      return p;
    case "slots":
      return lr;
    case "limbo":
      return fr;
    case "sword":
      return pr;
    case "videopoker":
      return xr;
    case "wheel":
      return br;
    case "hashdice":
      return cr;
    case "egyptian":
      return Ar;
    case "ultimatedice":
      return vr;
    case "mines":
      return kr;
    case "roulette":
      return Cr;
    case "baccarat":
      return jr;
    case "ringoffortune":
      return mr;
    case "towerlegend":
      return yr;
    case "coinflip":
      return Dr;
    case "twist":
      return Br;
    case "double":
      return Rr;
    case "coinflag":
      return Sr;
    case "fastparity":
      return x;
    case "parity":
      return x;
    case "evo21blackjackreyd5odmlwpfzjdw":
      return wr;
    case "evo21blackjackreyezjtolwpf37px":
      return hr;
    case "evo21blackjackrgea7vnq54ehg2fs":
      return zr;
    case "evo21blackjackrgdzue7v4xaga5s5":
      return Ur;
    case "pp23902a13":
      return Er;
    case "pp23424i":
      return Zr;
    case "cro12124":
      return Qr;
    case "cro12123":
      return Tr;
    case "cro12122":
      return Lr;
    case "cro12120":
      return Mr;
    case "cro12111":
      return Jr;
    case "cro12121":
      return Or;
    case "cro12109":
      return $r;
    case "cro12110":
      return Vr;
    case "detradetrading":
      return Hr;
    case "bcgamehotmaniabyevoplay":
      return Kr;
    case "tbl671":
      return Ir;
    case "cro12125":
      return Nr;
    case "cro12126":
      return Pr;
    case "cro12127":
      return Wr;
    case "cro12128":
      return Xr;
    case "cro12129":
      return Yr;
    case "cro12130":
      return Fr;
    case "cro12132":
      return qr;
    case "evo21rouletter4dcwwxx47rywy5n":
      return p;
    case "evo21blackjackr4da45gr47ryncsy":
      return Gr;
    case "evo21blackjackr4dbmfrt47rypvea":
      return _r;
    case "evo21blackjackr4dccjre47rytlgz":
      return es;
    case "evo21blackjackr4dcfcsu47rytz6v":
      return rs;
    case "evo21classicfreebetbjr4ddcpxr47ryy22j":
      return ss;
    default:
      return "Default";
  }
}
export { sr as b, _e as c, cs as g };
