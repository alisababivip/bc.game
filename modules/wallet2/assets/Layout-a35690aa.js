import { c as t, m as l } from "./web-da7da7e5.js";
import { u as d, e as s, T as H } from "./manifest-e0f0ba59.js";
import { S as b } from "./solid-js-2e15682c.js";
import { W as r } from "./Icon-b6e375d0.js";
import { t as e } from "./i18n-9b1e4bd8.js";
function S(o) {
  var i;
  const {
      isKenyaHost: n,
      isNgHost: m,
      isBrHost: c,
      isIdHost: f,
      isSportsHost: u,
      isNg2Host: h,
      isBrAuditHost: w,
    } = d.getHostType(s.host),
    p =
      ((i = s.disableModule) == null ? void 0 : i.indexOf("buyCrypto")) === -1,
    y = () => {
      let a = [];
      return (
        !c && !m && !n && !f && !h && !u && !w
          ? ((a = [
              {
                title: [
                  t(r, { class: "mr-2", name: "Wallet" }),
                  " ",
                  l(() => e("Balance")),
                ],
                href: "/wallet/balance",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "Deposit" }),
                  " ",
                  l(() => e("Deposit")),
                ],
                href: "/wallet/deposit",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "Withdraw" }),
                  " ",
                  l(() => e("Withdraw")),
                ],
                href: "/wallet/withdraw",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "Swap" }),
                  " ",
                  l(() => e("Swap")),
                ],
                href: "/wallet/swap",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "Vault" }),
                  " ",
                  l(() => e("Vault")),
                ],
                href: "/wallet/vault",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "Nft" }),
                  " ",
                  l(() => e("NFT")),
                ],
                href: "/wallet/nft",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "Transaction" }),
                  " ",
                  l(() => e("Transaction")),
                ],
                href: "/wallet/transaction",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "Rollover" }),
                  " ",
                  l(() => e("Rollover")),
                ],
                href: "/wallet/rollover",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "History" }),
                  " ",
                  l(() => e("Bet History")),
                ],
                href: "/wallet/bet-history",
              },
            ]),
            p &&
              a.splice(3, 0, {
                title: [
                  t(r, { class: "mr-2", name: "BuyCrypto" }),
                  " ",
                  l(() => e("Buy")),
                ],
                href: "/wallet/buy",
              }))
          : (a = [
              {
                title: [
                  t(r, { class: "mr-2", name: "Transaction" }),
                  " ",
                  l(() => e("Transaction")),
                ],
                href: "/wallet/transaction",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "Rollover" }),
                  " ",
                  l(() => e("Rollover")),
                ],
                href: "/wallet/rollover",
              },
              {
                title: [
                  t(r, { class: "mr-2", name: "History" }),
                  " ",
                  l(() => e("Bet History")),
                ],
                href: "/wallet/bet-history",
              },
            ]),
        a
      );
    };
  return t(b, {
    get when() {
      return !s.mobile;
    },
    get fallback() {
      return o.children;
    },
    get children() {
      return t(H, {
        get title() {
          return e("wallet").toLocaleUpperCase();
        },
        get menu() {
          return y();
        },
        get children() {
          return o.children;
        },
      });
    },
  });
}
export { S as default };
