var E = (l, _, i) =>
  new Promise((d, a) => {
    var t = (s) => {
        try {
          n(i.next(s));
        } catch (r) {
          a(r);
        }
      },
      o = (s) => {
        try {
          n(i.throw(s));
        } catch (r) {
          a(r);
        }
      },
      n = (s) => (s.done ? d(s.value) : Promise.resolve(s.value).then(t, o));
    n((i = i.apply(l, _)).next());
  });
const L = "modulepreload",
  v = function (l) {
    return "/modules/lottery2/" + l;
  },
  m = {},
  e = function (_, i, d) {
    if (!i || i.length === 0) return _();
    const a = document.getElementsByTagName("link");
    return Promise.all(
      i.map((t) => {
        if (((t = v(t)), t in m)) return;
        m[t] = !0;
        const o = t.endsWith(".css"),
          n = o ? '[rel="stylesheet"]' : "";
        if (!!d)
          for (let c = a.length - 1; c >= 0; c--) {
            const u = a[c];
            if (u.href === t && (!o || u.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${t}"]${n}`)) return;
        const r = document.createElement("link");
        if (
          ((r.rel = o ? "stylesheet" : L),
          o || ((r.as = "script"), (r.crossOrigin = "")),
          (r.href = t),
          document.head.appendChild(r),
          o)
        )
          return new Promise((c, u) => {
            r.addEventListener("load", c),
              r.addEventListener("error", () =>
                u(new Error(`Unable to preload CSS for ${t}`))
              );
          });
      })
    )
      .then(() => _())
      .catch((t) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = t), window.dispatchEvent(o), !o.defaultPrevented))
          throw t;
      });
  },
  p = globalThis._bc,
  {
    A: q,
    Accordion: K,
    ActiveProvider: $,
    App: W,
    Badge: Q,
    Breadcrumb: j,
    Button: J,
    Carousel: X,
    Checkbox: Y,
    Collapsible: Z,
    DatePicker: ee,
    Decimal: te,
    Dialog: oe,
    DropDown: re,
    Each: ie,
    Empty: se,
    FlatList: ae,
    GridScrollList: ne,
    Icon: ce,
    Input: le,
    KeepScroll: _e,
    Layout: ue,
    LazyList: de,
    ListView: Ee,
    Loading: me,
    Long: Le,
    Meta: ve,
    MetaProvider: pe,
    MultiSelect: ge,
    Notice: De,
    NumberInput: Pe,
    Occurrence: Re,
    PQuery: ye,
    Pagination: Te,
    Pop: Se,
    PopProvider: Ae,
    Radio: Ie,
    Ref: he,
    Refs: Oe,
    ScrollView: fe,
    Scrollbar: Ve,
    Select: be,
    Slider: we,
    SmoothList: Be,
    SmoothListController: Ce,
    Sticky: ke,
    Switch: Me,
    TMCLayout: Ne,
    Tabs: Ge,
    Teleport: Ue,
    ToastProvider: xe,
    Toggle: Fe,
    ToggleView: ze,
    Tooltip: He,
    Transition: qe,
    UserTitle: Ke,
    access: $e,
    account: We,
    addUserReceiptEvent: Qe,
    app: je,
    asyncQueue: Je,
    authGuard: Xe,
    batchRouteDefinition: Ye,
    bc: Ze,
    bcdResource: et,
    createCallback: tt,
    createClickOutside: ot,
    createControllableSignal: rt,
    createCountdown: it,
    createCss: st,
    createElementSize: at,
    createEmitter: nt,
    createEventListener: ct,
    createEventListenerMap: lt,
    createI18n: _t,
    createImgix: ut,
    createIntersectionObserver: dt,
    createIsMounted: Et,
    createKeyHold: mt,
    createListTransition: Lt,
    createNoSuspense: vt,
    createRemote: g,
    createResizeObserver: pt,
    createRootPool: gt,
    createScheduled: Dt,
    createSingletonRoot: Pt,
    createSmoothList: Rt,
    createSubRoot: yt,
    createSwitchTransition: Tt,
    createTimer: St,
    createTween: At,
    createViewportObserver: It,
    createVisibilityObserver: ht,
    createWindowSize: Ot,
    cx: ft,
    debounce: Vt,
    deduction: bt,
    env: wt,
    getHttp: Bt,
    getShareLinks: Ct,
    getSocket: kt,
    gsap: Mt,
    leading: Nt,
    leadingAndTrailing: Gt,
    makePersisted: Ut,
    mergeRefs: xt,
    pop: Ft,
    protobuf: zt,
    requestRecaptcha: Ht,
    resolveElements: qt,
    resolveFirst: Kt,
    resolveRemote: $t,
    setAccount: Wt,
    setEnv: Qt,
    setLang: jt,
    setSetting: Jt,
    setSystem: Xt,
    setWallet: Yt,
    setting: Zt,
    syncAccount: eo,
    system: to,
    systemUtils: oo,
    throttle: ro,
    toast: io,
    until: so,
    untilLogin: ao,
    useActiveMemo: no,
    useFlatItem: co,
    useGlobalComponent: lo,
    useIsActive: _o,
    useKeyDownEvent: uo,
    useLoginCallback: Eo,
    useMeta: mo,
    useNavigate: Lo,
    useNavigatePromise: vo,
    useNavigatePromiseEnter: po,
    useRouterStack: go,
    useScrollElement: Do,
    user: Po,
    utils: Ro,
    wallet: yo,
    withDirection: To,
    withOccurrence: So,
    wrUtils: Ao,
  } = p.fcsy,
  D = () =>
    e(
      () => import("./Layout-e41fbfba.js"),
      [
        "assets/Layout-e41fbfba.js",
        "assets/solid-js-8ff414d5.js",
        "assets/router-290e090e.js",
        "assets/lottery-40ce25b9.js",
      ]
    ),
  P = () =>
    e(
      () => import("./index-52b83fd7.js"),
      [
        "assets/index-52b83fd7.js",
        "assets/solid-js-8ff414d5.js",
        "assets/store-c334f12e.js",
        "assets/store-2ed2b91e.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/Lottery.interface-46896b0b.js",
        "assets/LotterySearchResult-3c6a8f21.js",
        "assets/PopularSectionItem-c3dc7aa1.js",
        "assets/index-4d3ecff0.js",
        "assets/currency-1e153f43.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/logo-a74fb622.js",
        "assets/i18n-9df4b53a.js",
        "assets/throttle-e4f3954e.js",
        "assets/debounce-f7740f4e.js",
      ]
    ),
  R = () =>
    e(
      () => import("./index-b286bb5e.js"),
      [
        "assets/index-b286bb5e.js",
        "assets/solid-js-8ff414d5.js",
        "assets/i18n-9df4b53a.js",
        "assets/usePickNums-c32edd0e.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/router-290e090e.js",
        "assets/store-de20ba30.js",
        "assets/store-2ed2b91e.js",
        "assets/lottery-40ce25b9.js",
        "assets/_Uint8Array-7783c8b7.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/isObject-909534d5.js",
        "assets/warning-2b742604.js",
        "assets/UserInfo-66f81f79.js",
        "assets/AwardBall-40040934.js",
        "assets/ball-lose-white-4200dda1.js",
        "assets/currency-1e153f43.js",
        "assets/total-tickets-8b01aef3.js",
        "assets/winner-tickets-4d09dec4.js",
      ]
    ),
  y = () =>
    e(
      () => import("./index-dc888769.js"),
      [
        "assets/index-dc888769.js",
        "assets/solid-js-8ff414d5.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/i18n-9df4b53a.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/total-tickets-8b01aef3.js",
        "assets/winner-tickets-4d09dec4.js",
        "assets/currency-1e153f43.js",
        "assets/index-4d3ecff0.js",
        "assets/gift-box-black-closed-1c721cc7.js",
        "assets/router-290e090e.js",
        "assets/debounce-f7740f4e.js",
      ]
    ),
  T = () =>
    e(
      () => import("./index-1c7dc356.js"),
      [
        "assets/index-1c7dc356.js",
        "assets/solid-js-8ff414d5.js",
        "assets/store-c334f12e.js",
        "assets/store-2ed2b91e.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/Lottery.interface-46896b0b.js",
        "assets/LikeLotteryItem-30e8754e.js",
        "assets/index-4d3ecff0.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/i18n-9df4b53a.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/throttle-e4f3954e.js",
        "assets/debounce-f7740f4e.js",
      ]
    ),
  S = () =>
    e(
      () => import("./index-8588aa8a.js"),
      [
        "assets/index-8588aa8a.js",
        "assets/solid-js-8ff414d5.js",
        "assets/PopularSectionItem-c3dc7aa1.js",
        "assets/index-4d3ecff0.js",
        "assets/currency-1e153f43.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/logo-a74fb622.js",
        "assets/i18n-9df4b53a.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/router-290e090e.js",
        "assets/store-c334f12e.js",
        "assets/store-2ed2b91e.js",
        "assets/Lottery.interface-46896b0b.js",
      ]
    ),
  A = () =>
    e(
      () => import("./index-e1965f80.js"),
      [
        "assets/index-e1965f80.js",
        "assets/solid-js-8ff414d5.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/router-290e090e.js",
        "assets/store-de20ba30.js",
        "assets/store-2ed2b91e.js",
        "assets/lottery-40ce25b9.js",
        "assets/_Uint8Array-7783c8b7.js",
        "assets/index-4d3ecff0.js",
        "assets/i18n-9df4b53a.js",
        "assets/store-c334f12e.js",
        "assets/Lottery.interface-46896b0b.js",
        "assets/warning-2b742604.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/DrawsSelect-10573c9c.js",
        "assets/ArrowIcon-28af983a.js",
        "assets/SelectCartContent-26bc614e.js",
        "assets/index-b286bb5e.js",
        "assets/usePickNums-c32edd0e.js",
        "assets/UserInfo-66f81f79.js",
        "assets/AwardBall-40040934.js",
        "assets/ball-lose-white-4200dda1.js",
        "assets/currency-1e153f43.js",
        "assets/total-tickets-8b01aef3.js",
        "assets/winner-tickets-4d09dec4.js",
        "assets/BetSlip-1e41f091.js",
        "assets/BetSlipContent-999f128e.js",
        "assets/logo-a74fb622.js",
        "assets/createSettle-6ac4bfbf.js",
        "assets/toString-9093e562.js",
      ]
    ),
  I = () =>
    e(
      () => import("./RecentWinnerDetailDialog-90f4360e.js"),
      [
        "assets/RecentWinnerDetailDialog-90f4360e.js",
        "assets/solid-js-8ff414d5.js",
        "assets/index-4d3ecff0.js",
        "assets/router-290e090e.js",
        "assets/currency-1e153f43.js",
        "assets/lottery-40ce25b9.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/store-de20ba30.js",
        "assets/store-2ed2b91e.js",
        "assets/_Uint8Array-7783c8b7.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/i18n-9df4b53a.js",
      ]
    ),
  h = () =>
    e(
      () => import("./MybetsDetailDialog-8426f444.js"),
      [
        "assets/MybetsDetailDialog-8426f444.js",
        "assets/solid-js-8ff414d5.js",
        "assets/router-290e090e.js",
        "assets/currency-1e153f43.js",
        "assets/ball-lose-white-4200dda1.js",
        "assets/lottery-40ce25b9.js",
        "assets/store-de20ba30.js",
        "assets/store-2ed2b91e.js",
        "assets/_Uint8Array-7783c8b7.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/isObject-909534d5.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/i18n-9df4b53a.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/CoinFormat-308b3ef5.js",
        "assets/total-tickets-8b01aef3.js",
        "assets/toString-9093e562.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/ArrowIcon-28af983a.js",
      ]
    ),
  O = () =>
    e(
      () => import("./SendGift-f47da4be.js"),
      [
        "assets/SendGift-f47da4be.js",
        "assets/solid-js-8ff414d5.js",
        "assets/index-4d3ecff0.js",
        "assets/warning-2b742604.js",
        "assets/store-2ed2b91e.js",
        "assets/i18n-9df4b53a.js",
        "assets/createSettle-6ac4bfbf.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/toString-9093e562.js",
        "assets/_Uint8Array-7783c8b7.js",
        "assets/ShareGift-76476cb4.js",
        "assets/Share-a5fa11aa.js",
        "assets/LocalIcon-84e2288f.js",
      ]
    ),
  f = () =>
    e(
      () => import("./newUserGift-52849dde.js"),
      [
        "assets/newUserGift-52849dde.js",
        "assets/solid-js-8ff414d5.js",
        "assets/recive_bonus-f7de831f.js",
        "assets/AwardBall-40040934.js",
        "assets/ball-lose-white-4200dda1.js",
        "assets/i18n-9df4b53a.js",
        "assets/router-290e090e.js",
      ]
    ),
  V = () =>
    e(
      () => import("./TicketGiftHistory-277b6d98.js"),
      [
        "assets/TicketGiftHistory-277b6d98.js",
        "assets/solid-js-8ff414d5.js",
        "assets/index-4d3ecff0.js",
        "assets/ShareGift-76476cb4.js",
        "assets/Share-a5fa11aa.js",
        "assets/i18n-9df4b53a.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/CoinFormat-308b3ef5.js",
      ]
    ),
  b = () =>
    e(
      () => import("./Seed-ada34429.js"),
      [
        "assets/Seed-ada34429.js",
        "assets/solid-js-8ff414d5.js",
        "assets/router-290e090e.js",
        "assets/Share-a5fa11aa.js",
        "assets/i18n-9df4b53a.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/index-4d3ecff0.js",
      ]
    ),
  w = () =>
    e(
      () => import("./Faq-213808f4.js"),
      [
        "assets/Faq-213808f4.js",
        "assets/solid-js-8ff414d5.js",
        "assets/i18n-9df4b53a.js",
        "assets/router-290e090e.js",
      ]
    ),
  B = () =>
    e(
      () => import("./Fariness-b3a4afa0.js"),
      [
        "assets/Fariness-b3a4afa0.js",
        "assets/solid-js-8ff414d5.js",
        "assets/router-290e090e.js",
        "assets/i18n-9df4b53a.js",
        "assets/LocalIcon-84e2288f.js",
      ]
    ),
  C = () =>
    e(
      () => import("./ClaimGift-42b05cf4.js"),
      [
        "assets/ClaimGift-42b05cf4.js",
        "assets/solid-js-8ff414d5.js",
        "assets/usePickNums-c32edd0e.js",
        "assets/i18n-9df4b53a.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/router-290e090e.js",
      ]
    ),
  k = () =>
    e(
      () => import("./ReceiveGift-112f89f0.js"),
      [
        "assets/ReceiveGift-112f89f0.js",
        "assets/solid-js-8ff414d5.js",
        "assets/router-290e090e.js",
        "assets/recive_bonus-f7de831f.js",
        "assets/UserInfo-66f81f79.js",
        "assets/index-4d3ecff0.js",
        "assets/i18n-9df4b53a.js",
      ]
    ),
  M = () =>
    e(
      () => import("./AwardInformDetailDialog-6bbadf8f.js"),
      [
        "assets/AwardInformDetailDialog-6bbadf8f.js",
        "assets/solid-js-8ff414d5.js",
        "assets/gift-box-black-closed-1c721cc7.js",
        "assets/currency-1e153f43.js",
        "assets/i18n-9df4b53a.js",
      ]
    ),
  N = () =>
    e(
      () => import("./BetSlipContent-999f128e.js"),
      [
        "assets/BetSlipContent-999f128e.js",
        "assets/solid-js-8ff414d5.js",
        "assets/store-de20ba30.js",
        "assets/store-2ed2b91e.js",
        "assets/lottery-40ce25b9.js",
        "assets/_Uint8Array-7783c8b7.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/isObject-909534d5.js",
        "assets/index-4d3ecff0.js",
        "assets/DrawsSelect-10573c9c.js",
        "assets/LocalIcon-84e2288f.js",
        "assets/i18n-9df4b53a.js",
        "assets/countries-18533370.js",
        "assets/Lottery.interface-46896b0b.js",
        "assets/logo-a74fb622.js",
        "assets/createSettle-6ac4bfbf.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/toString-9093e562.js",
      ]
    ),
  G = () =>
    e(
      () => import("./SelectCartContent-26bc614e.js"),
      [
        "assets/SelectCartContent-26bc614e.js",
        "assets/solid-js-8ff414d5.js",
        "assets/store-de20ba30.js",
        "assets/store-2ed2b91e.js",
        "assets/lottery-40ce25b9.js",
        "assets/_Uint8Array-7783c8b7.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/isObject-909534d5.js",
        "assets/DrawsSelect-10573c9c.js",
        "assets/router-290e090e.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/i18n-9df4b53a.js",
        "assets/index-4d3ecff0.js",
        "assets/Lottery.interface-46896b0b.js",
      ]
    ),
  U = () =>
    e(
      () => import("./ExploreLottery-b515d84f.js"),
      [
        "assets/ExploreLottery-b515d84f.js",
        "assets/solid-js-8ff414d5.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/i18n-9df4b53a.js",
        "assets/LotterySearchResult-3c6a8f21.js",
        "assets/PopularSectionItem-c3dc7aa1.js",
        "assets/index-4d3ecff0.js",
        "assets/currency-1e153f43.js",
        "assets/logo-a74fb622.js",
      ]
    ),
  x = () =>
    e(
      () => import("./LotterySearchBoxDialog-f6996b78.js"),
      [
        "assets/LotterySearchBoxDialog-f6996b78.js",
        "assets/solid-js-8ff414d5.js",
        "assets/LotterySearchResult-3c6a8f21.js",
        "assets/PopularSectionItem-c3dc7aa1.js",
        "assets/index-4d3ecff0.js",
        "assets/currency-1e153f43.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/logo-a74fb622.js",
        "assets/i18n-9df4b53a.js",
        "assets/apis-5c7b35c7.js",
        "assets/once-e92576f3.js",
        "assets/toNumber-e58af95e.js",
        "assets/isObject-909534d5.js",
        "assets/_MapCache-9c96b8d5.js",
      ]
    ),
  F = () =>
    e(
      () => import("./UpcomingDrawSection-94e1ebcd.js"),
      [
        "assets/UpcomingDrawSection-94e1ebcd.js",
        "assets/solid-js-8ff414d5.js",
        "assets/currency-1e153f43.js",
        "assets/index-4d3ecff0.js",
        "assets/CountryAvatar-9bf00e0a.js",
        "assets/countries-18533370.js",
        "assets/lottery-40ce25b9.js",
        "assets/i18n-9df4b53a.js",
        "assets/throttle-e4f3954e.js",
        "assets/debounce-f7740f4e.js",
        "assets/isObject-909534d5.js",
        "assets/toNumber-e58af95e.js",
      ]
    ),
  z = () =>
    E(void 0, null, function* () {
      return { default: () => {} };
    }),
  Io = g({
    init: () => e(() => import("./init-a8917b7d.js"), []),
    addEvent: z,
    Layout: D,
    LotteryHome: P,
    BcLottery: R,
    Mybets: y,
    LikePage: T,
    AllLotteryPage: S,
    DetailPage: A,
    RecentDetailDialog: I,
    MyBetsDetailDialog: h,
    BcLotterySendGiftDialog: O,
    BcLotteryNewUserGift: f,
    BcLotteryGiftHistoryDialog: V,
    BcLotterySeedDialog: b,
    BcLotteryFaqDialog: w,
    BcLotteryFarinessDialog: B,
    BcLotteryClaimDialog: C,
    BcLotteryReceiveGiftDialog: k,
    AwardInfoDetailDialog: M,
    BetSlipDialog: N,
    SelectCartContentDialog: G,
    ExploreLotteryPortal: U,
    LotterySearchBoxDialog: x,
    UpcomingDrawSection: F,
  });
export {
  q as A,
  J as B,
  at as C,
  ee as D,
  se as E,
  qe as F,
  fe as G,
  yo as H,
  ce as I,
  _t as J,
  Ce as K,
  me as L,
  Be as M,
  Pe as N,
  Io as O,
  Te as P,
  be as S,
  Ge as T,
  e as _,
  le as a,
  We as b,
  it as c,
  ft as d,
  wt as e,
  oe as f,
  Bt as g,
  pt as h,
  Vt as i,
  je as j,
  Ro as k,
  oo as l,
  te as m,
  ze as n,
  Ze as o,
  Ft as p,
  Se as q,
  He as r,
  Zt as s,
  io as t,
  Lo as u,
  kt as v,
  ot as w,
  _o as x,
  ht as y,
  st as z,
};
