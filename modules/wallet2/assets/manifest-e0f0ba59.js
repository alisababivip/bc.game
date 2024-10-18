const D = "modulepreload",
  d = function (e) {
    return "/modules/wallet2/" + e;
  },
  l = {},
  t = function (n, s, u) {
    if (!s || s.length === 0) return n();
    const c = document.getElementsByTagName("link");
    return Promise.all(
      s.map((o) => {
        if (((o = d(o)), o in l)) return;
        l[o] = !0;
        const i = o.endsWith(".css"),
          E = i ? '[rel="stylesheet"]' : "";
        if (!!u)
          for (let a = c.length - 1; a >= 0; a--) {
            const _ = c[a];
            if (_.href === o && (!i || _.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${E}`)) return;
        const r = document.createElement("link");
        if (
          ((r.rel = i ? "stylesheet" : D),
          i || ((r.as = "script"), (r.crossOrigin = "")),
          (r.href = o),
          document.head.appendChild(r),
          i)
        )
          return new Promise((a, _) => {
            r.addEventListener("load", a),
              r.addEventListener("error", () =>
                _(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    )
      .then(() => n())
      .catch((o) => {
        const i = new Event("vite:preloadError", { cancelable: !0 });
        if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
          throw o;
      });
  },
  m = globalThis._bc,
  {
    A: Dt,
    Accordion: dt,
    ActiveProvider: mt,
    App: pt,
    Badge: vt,
    Breadcrumb: Lt,
    Button: gt,
    Carousel: Tt,
    Checkbox: Rt,
    Collapsible: Pt,
    DatePicker: At,
    Decimal: It,
    Dialog: Vt,
    DropDown: Ot,
    Each: ht,
    Empty: ft,
    FlatList: St,
    GridScrollList: yt,
    Icon: bt,
    Input: Ct,
    KeepScroll: wt,
    Layout: kt,
    LazyList: Bt,
    ListView: Nt,
    Loading: Wt,
    Long: Mt,
    Meta: zt,
    MetaProvider: Ut,
    MultiSelect: xt,
    Notice: Gt,
    NumberInput: Ht,
    Occurrence: Ft,
    Pagination: Kt,
    Pop: $t,
    PopProvider: qt,
    Radio: Qt,
    Ref: jt,
    Refs: Jt,
    ScrollView: Xt,
    Scrollbar: Yt,
    Select: Zt,
    Slider: te,
    SmoothList: ee,
    SmoothListController: oe,
    Sticky: ie,
    Switch: re,
    TMCLayout: ae,
    Tabs: _e,
    Teleport: se,
    ToastProvider: ne,
    Toggle: ce,
    ToggleView: le,
    Tooltip: ue,
    Transition: Ee,
    access: De,
    account: de,
    addUserReceiptEvent: me,
    app: pe,
    asyncQueue: ve,
    authGuard: Le,
    batchRouteDefinition: ge,
    bc: Te,
    bcdResource: Re,
    createCallback: Pe,
    createClickOutside: Ae,
    createControllableSignal: Ie,
    createCountdown: Ve,
    createCss: Oe,
    createElementSize: he,
    createEmitter: fe,
    createEventListener: Se,
    createEventListenerMap: ye,
    createI18n: be,
    createImgix: Ce,
    createIntersectionObserver: we,
    createIsMounted: ke,
    createKeyHold: Be,
    createListTransition: Ne,
    createNoSuspense: We,
    createRemote: p,
    createResizeObserver: Me,
    createRootPool: ze,
    createSingletonRoot: Ue,
    createSmoothList: xe,
    createSubRoot: Ge,
    createSwitchTransition: He,
    createTimer: Fe,
    createTween: Ke,
    createViewportObserver: $e,
    createVisibilityObserver: qe,
    createWindowSize: Qe,
    cx: je,
    debounce: Je,
    deduction: Xe,
    env: Ye,
    getHttp: Ze,
    getShareLinks: to,
    getSocket: eo,
    gsap: oo,
    localization: io,
    makePersisted: ro,
    mergeRefs: ao,
    pop: _o,
    protobuf: so,
    requestRecaptcha: no,
    resolveElements: co,
    resolveFirst: lo,
    resolveRemote: uo,
    setAccount: Eo,
    setEnv: Do,
    setLang: mo,
    setSetting: po,
    setSystem: vo,
    setWallet: Lo,
    setting: go,
    syncAccount: To,
    system: Ro,
    systemUtils: Po,
    throttle: Ao,
    toast: Io,
    until: Vo,
    untilLogin: Oo,
    useActiveMemo: ho,
    useFlatItem: fo,
    useGlobalComponent: So,
    useIsActive: yo,
    useKeyDownEvent: bo,
    useLoginCallback: Co,
    useMeta: wo,
    useNavigate: ko,
    useNavigatePromise: Bo,
    useNavigatePromiseEnter: No,
    useRouterStack: Wo,
    useScrollElement: Mo,
    user: zo,
    utils: Uo,
    wallet: xo,
    withDirection: Go,
    withOccurrence: Ho,
    wrUtils: Fo,
  } = m.fcsy,
  v = () =>
    t(
      () => import("./index-8fafa265.js"),
      [
        "assets/index-8fafa265.js",
        "assets/web-da7da7e5.js",
        "assets/SelectCurrency-0ef42d5c.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/orderBy-fc8ca101.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/memoize-ff109130.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/groupBy-5d1dee29.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/store-eb5336a3.js",
        "assets/store-2ed2b91e.js",
        "assets/_baseFlatten-f0777715.js",
        "assets/_baseFindIndex-15a8234c.js",
      ]
    ),
  L = () =>
    t(
      () => import("./Layout-a35690aa.js"),
      [
        "assets/Layout-a35690aa.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/Icon-b6e375d0.js",
        "assets/i18n-9b1e4bd8.js",
      ]
    ),
  g = () =>
    t(
      () => import("./AboutBcd-62bb6d10.js"),
      [
        "assets/AboutBcd-62bb6d10.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
      ]
    ),
  T = () =>
    t(
      () => import("./AboutBc-af40c556.js"),
      [
        "assets/AboutBc-af40c556.js",
        "assets/web-da7da7e5.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
      ]
    ),
  R = () =>
    t(
      () => import("./AboutBcl-bcb4cc45.js"),
      [
        "assets/AboutBcl-bcb4cc45.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
      ]
    ),
  P = () =>
    t(
      () => import("./ManageAssets-56f702ad.js"),
      [
        "assets/ManageAssets-56f702ad.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/Icon-b6e375d0.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/groupBy-5d1dee29.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/memoize-ff109130.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/sortBy-6b2810fa.js",
        "assets/_baseFlatten-f0777715.js",
      ]
    ),
  A = () =>
    t(
      () => import("./AboutBonus-b1a221e5.js"),
      [
        "assets/AboutBonus-b1a221e5.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
      ]
    ),
  I = () =>
    t(
      () => import("./index-5ae89d10.js").then((e) => e.i),
      [
        "assets/index-5ae89d10.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/store-2ed2b91e.js",
        "assets/Loading-72a9f35e.js",
        "assets/Icon-b6e375d0.js",
        "assets/AboutJb-13924d78.js",
        "assets/CopyInput-441aca40.js",
        "assets/lib-6879580e.js",
        "assets/memoize-ff109130.js",
        "assets/sortBy-6b2810fa.js",
        "assets/_baseFlatten-f0777715.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/Utr-adf02821.js",
        "assets/Qrcode-20508360.js",
        "assets/Icon-603169e7.js",
        "assets/store-eb5336a3.js",
        "assets/_baseFindIndex-15a8234c.js",
        "assets/CircleCountdown-885da069.js",
        "assets/debounce-2947036d.js",
        "assets/toNumber-d93b0850.js",
        "assets/groupBy-5d1dee29.js",
        "assets/AboutBcl-bcb4cc45.js",
        "assets/SelectCurrency-0ef42d5c.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/orderBy-fc8ca101.js",
        "assets/ErrorRest-1a0f0516.js",
      ]
    ),
  V = () =>
    t(
      () => import("./index-a6471790.js"),
      [
        "assets/index-a6471790.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/Icon-b6e375d0.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/store-eb5336a3.js",
        "assets/store-2ed2b91e.js",
        "assets/memoize-ff109130.js",
        "assets/_baseFlatten-f0777715.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/_baseFindIndex-15a8234c.js",
        "assets/Qrcode-20508360.js",
        "assets/index-35fef608.js",
        "assets/AboutJb-13924d78.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/CopyInput-441aca40.js",
        "assets/Loading-72a9f35e.js",
        "assets/lib-6879580e.js",
        "assets/sortBy-6b2810fa.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/Utr-adf02821.js",
        "assets/Icon-603169e7.js",
        "assets/toInteger-112c6978.js",
        "assets/toNumber-d93b0850.js",
        "assets/router-5691abb0.js",
        "assets/AboutBcl-bcb4cc45.js",
        "assets/groupBy-5d1dee29.js",
        "assets/orderBy-fc8ca101.js",
        "assets/ErrorRest-1a0f0516.js",
        "assets/SelectCurrency-0ef42d5c.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/index-903d6228.css",
        "assets/index-5ae89d10.js",
        "assets/CircleCountdown-885da069.js",
        "assets/debounce-2947036d.js",
      ]
    ),
  O = () =>
    t(
      () => import("./index-35fef608.js").then((e) => e.i),
      [
        "assets/index-35fef608.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/AboutJb-13924d78.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/Icon-b6e375d0.js",
        "assets/CopyInput-441aca40.js",
        "assets/store-2ed2b91e.js",
        "assets/Loading-72a9f35e.js",
        "assets/lib-6879580e.js",
        "assets/memoize-ff109130.js",
        "assets/sortBy-6b2810fa.js",
        "assets/_baseFlatten-f0777715.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/Utr-adf02821.js",
        "assets/Qrcode-20508360.js",
        "assets/Icon-603169e7.js",
        "assets/store-eb5336a3.js",
        "assets/_baseFindIndex-15a8234c.js",
        "assets/toInteger-112c6978.js",
        "assets/toNumber-d93b0850.js",
        "assets/router-5691abb0.js",
        "assets/AboutBcl-bcb4cc45.js",
        "assets/groupBy-5d1dee29.js",
        "assets/orderBy-fc8ca101.js",
        "assets/ErrorRest-1a0f0516.js",
        "assets/SelectCurrency-0ef42d5c.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/index-903d6228.css",
      ]
    ),
  h = () =>
    t(
      () => import("./index-094594b3.js"),
      [
        "assets/index-094594b3.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/store-2ed2b91e.js",
        "assets/solid-js-2e15682c.js",
        "assets/Loading-72a9f35e.js",
        "assets/Icon-b6e375d0.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/router-5691abb0.js",
        "assets/ErrorRest-1a0f0516.js",
      ]
    ),
  f = () =>
    t(
      () => import("./index-fb6e2b08.js"),
      [
        "assets/index-fb6e2b08.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/store-2ed2b91e.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/SuccessSvg-b1aa9a4e.js",
        "assets/store-eb5336a3.js",
        "assets/memoize-ff109130.js",
        "assets/_baseFlatten-f0777715.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/_baseFindIndex-15a8234c.js",
        "assets/CircleCountdown-885da069.js",
        "assets/router-5691abb0.js",
        "assets/Loading-72a9f35e.js",
      ]
    ),
  S = () =>
    t(
      () => import("./index-59d7def5.js"),
      [
        "assets/index-59d7def5.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/store-2ed2b91e.js",
        "assets/Form-c418ae6e.js",
        "assets/lib-6879580e.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/memoize-ff109130.js",
        "assets/store-eb5336a3.js",
        "assets/_baseFlatten-f0777715.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/_baseFindIndex-15a8234c.js",
        "assets/SelectCurrency-0ef42d5c.js",
        "assets/Icon-b6e375d0.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/orderBy-fc8ca101.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/groupBy-5d1dee29.js",
      ]
    ),
  y = () =>
    t(
      () => import("./Transfer-93618e97.js"),
      [
        "assets/Transfer-93618e97.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/Form-c418ae6e.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/lib-6879580e.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/memoize-ff109130.js",
        "assets/store-2ed2b91e.js",
        "assets/store-eb5336a3.js",
        "assets/_baseFlatten-f0777715.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/_baseFindIndex-15a8234c.js",
        "assets/SelectCurrency-0ef42d5c.js",
        "assets/Icon-b6e375d0.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/orderBy-fc8ca101.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/groupBy-5d1dee29.js",
        "assets/router-5691abb0.js",
      ]
    ),
  b = () =>
    t(
      () => import("./Interests-1a634dc6.js"),
      [
        "assets/Interests-1a634dc6.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Table-ddc01343.js",
        "assets/ErrorRest-1a0f0516.js",
        "assets/Icon-b6e375d0.js",
      ]
    ),
  C = () =>
    t(
      () => import("./AddCard-cf8bd228.js").then((e) => e.A),
      [
        "assets/AddCard-cf8bd228.js",
        "assets/web-da7da7e5.js",
        "assets/WalletNotice-7fa67b92.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
      ]
    ),
  w = () =>
    t(
      () => import("./AddBank-405d7ba9.js"),
      [
        "assets/AddBank-405d7ba9.js",
        "assets/web-da7da7e5.js",
        "assets/AddCard-cf8bd228.js",
        "assets/WalletNotice-7fa67b92.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/router-5691abb0.js",
      ]
    ),
  k = () =>
    t(
      () => import("./CurrencyConfig-60cba1a6.js"),
      [
        "assets/CurrencyConfig-60cba1a6.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/router-5691abb0.js",
      ]
    ),
  B = () =>
    t(
      () => import("./index-ef7ccba0.js"),
      [
        "assets/index-ef7ccba0.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/Loading-72a9f35e.js",
      ]
    ),
  N = () =>
    t(
      () => import("./BetHistory-c73a47ef.js"),
      [
        "assets/BetHistory-c73a47ef.js",
        "assets/web-da7da7e5.js",
        "assets/index-9d4dea27.js",
        "assets/lib-bd7b0cad.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/solid-js-2e15682c.js",
        "assets/memoize-ff109130.js",
        "assets/orderBy-fc8ca101.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/debounce-2947036d.js",
        "assets/toNumber-d93b0850.js",
        "assets/Icon-b6e375d0.js",
        "assets/Table-ddc01343.js",
        "assets/ErrorRest-1a0f0516.js",
        "assets/Buy-970eb3c1.js",
        "assets/Loading-72a9f35e.js",
        "assets/CopyInput-441aca40.js",
        "assets/router-5691abb0.js",
        "assets/Utr-adf02821.js",
        "assets/Qrcode-20508360.js",
        "assets/Icon-603169e7.js",
        "assets/store-2ed2b91e.js",
      ]
    ),
  W = () =>
    t(
      () => import("./index-9d4dea27.js"),
      [
        "assets/index-9d4dea27.js",
        "assets/web-da7da7e5.js",
        "assets/lib-bd7b0cad.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/solid-js-2e15682c.js",
        "assets/memoize-ff109130.js",
        "assets/orderBy-fc8ca101.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/debounce-2947036d.js",
        "assets/toNumber-d93b0850.js",
        "assets/Icon-b6e375d0.js",
        "assets/Table-ddc01343.js",
        "assets/ErrorRest-1a0f0516.js",
        "assets/Buy-970eb3c1.js",
        "assets/Loading-72a9f35e.js",
        "assets/CopyInput-441aca40.js",
        "assets/router-5691abb0.js",
        "assets/Utr-adf02821.js",
        "assets/Qrcode-20508360.js",
        "assets/Icon-603169e7.js",
        "assets/store-2ed2b91e.js",
      ]
    ),
  M = () =>
    t(
      () => import("./index-ddfa5a14.js"),
      [
        "assets/index-ddfa5a14.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Cancel-6c4525d6.js",
        "assets/solid-js-2e15682c.js",
        "assets/Details-ca9fab10.js",
        "assets/Icon-b6e375d0.js",
        "assets/router-5691abb0.js",
        "assets/Table-ddc01343.js",
        "assets/ErrorRest-1a0f0516.js",
        "assets/store-2ed2b91e.js",
        "assets/Loading-72a9f35e.js",
      ]
    ),
  z = () =>
    t(
      () => import("./Dialog-4227484f.js"),
      [
        "assets/Dialog-4227484f.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/index-ddfa5a14.js",
        "assets/Cancel-6c4525d6.js",
        "assets/solid-js-2e15682c.js",
        "assets/Details-ca9fab10.js",
        "assets/Icon-b6e375d0.js",
        "assets/router-5691abb0.js",
        "assets/Table-ddc01343.js",
        "assets/ErrorRest-1a0f0516.js",
        "assets/store-2ed2b91e.js",
        "assets/Loading-72a9f35e.js",
      ]
    ),
  U = () =>
    t(
      () => import("./History-2b4c7b3c.js"),
      [
        "assets/History-2b4c7b3c.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Table-ddc01343.js",
        "assets/ErrorRest-1a0f0516.js",
        "assets/solid-js-2e15682c.js",
        "assets/Icon-b6e375d0.js",
      ]
    ),
  x = () =>
    t(
      () => import("./Deposit-e4f3c293.js"),
      [
        "assets/Deposit-e4f3c293.js",
        "assets/web-da7da7e5.js",
        "assets/memoize-ff109130.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Qrcode-20508360.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/router-5691abb0.js",
      ]
    ),
  G = () =>
    t(
      () => import("./Withdraw-6edd21ac.js"),
      [
        "assets/Withdraw-6edd21ac.js",
        "assets/web-da7da7e5.js",
        "assets/router-5691abb0.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/solid-js-2e15682c.js",
        "assets/Loading-72a9f35e.js",
        "assets/Info-1a7e42d9.js",
        "assets/Icon-b6e375d0.js",
      ]
    ),
  H = () =>
    t(
      () => import("./Split-9a65abb5.js"),
      [
        "assets/Split-9a65abb5.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/router-5691abb0.js",
        "assets/Info-1a7e42d9.js",
        "assets/SuccessSvg-b1aa9a4e.js",
      ]
    ),
  F = () =>
    t(
      () => import("./Merge-80351ded.js"),
      [
        "assets/Merge-80351ded.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/router-5691abb0.js",
        "assets/SuccessSvg-b1aa9a4e.js",
      ]
    ),
  K = () =>
    t(
      () => import("./Detail-1613973c.js"),
      [
        "assets/Detail-1613973c.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/router-5691abb0.js",
        "assets/solid-js-2e15682c.js",
        "assets/Info-1a7e42d9.js",
        "assets/Icon-b6e375d0.js",
      ]
    ),
  $ = () =>
    t(
      () => import("./index-78c43514.js").then((e) => e.i),
      [
        "assets/index-78c43514.js",
        "assets/web-da7da7e5.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/lib-bd7b0cad.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/WalletNotice-7fa67b92.js",
        "assets/store-2ed2b91e.js",
        "assets/Qrcode-20508360.js",
        "assets/router-5691abb0.js",
        "assets/Loading-72a9f35e.js",
        "assets/index-384ea03f.js",
        "assets/Lib-1f9ea743.js",
      ]
    ),
  q = () =>
    t(
      () => import("./Buy-970eb3c1.js"),
      [
        "assets/Buy-970eb3c1.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/solid-js-2e15682c.js",
        "assets/Icon-b6e375d0.js",
        "assets/Loading-72a9f35e.js",
        "assets/CopyInput-441aca40.js",
        "assets/router-5691abb0.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
      ]
    ),
  Q = () =>
    t(
      () => import("./index-acc70dbd.js"),
      [
        "assets/index-acc70dbd.js",
        "assets/web-da7da7e5.js",
        "assets/lib-bd7b0cad.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/index-78c43514.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/WalletNotice-7fa67b92.js",
        "assets/store-2ed2b91e.js",
        "assets/Qrcode-20508360.js",
        "assets/router-5691abb0.js",
        "assets/Loading-72a9f35e.js",
        "assets/index-384ea03f.js",
        "assets/Lib-1f9ea743.js",
      ]
    ),
  j = () =>
    t(
      () => import("./Rate-d2aebb8a.js"),
      [
        "assets/Rate-d2aebb8a.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/router-5691abb0.js",
      ]
    ),
  J = () =>
    t(
      () => import("./index-7f242d45.js"),
      [
        "assets/index-7f242d45.js",
        "assets/web-da7da7e5.js",
        "assets/Icon-b6e375d0.js",
        "assets/solid-js-2e15682c.js",
        "assets/arrow-123a9d3b.js",
        "assets/_baseFindIndex-15a8234c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/memoize-ff109130.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/toInteger-112c6978.js",
        "assets/toNumber-d93b0850.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/lib-bd7b0cad.js",
        "assets/WalletNotice-7fa67b92.js",
        "assets/index-78c43514.js",
        "assets/bethistory-fcf99adb.js",
        "assets/withdrawFiat-1254e3b3.js",
        "assets/store-2ed2b91e.js",
        "assets/Qrcode-20508360.js",
        "assets/router-5691abb0.js",
        "assets/Loading-72a9f35e.js",
        "assets/index-384ea03f.js",
        "assets/Lib-1f9ea743.js",
      ]
    ),
  X = () =>
    t(
      () => import("./TableCont-e33e9b63.js"),
      [
        "assets/TableCont-e33e9b63.js",
        "assets/web-da7da7e5.js",
        "assets/Lib-1f9ea743.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/lib-bd7b0cad.js",
        "assets/solid-js-2e15682c.js",
        "assets/WalletNotice-7fa67b92.js",
        "assets/Icon-b6e375d0.js",
        "assets/arrow-123a9d3b.js",
        "assets/_baseFindIndex-15a8234c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/memoize-ff109130.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/toInteger-112c6978.js",
        "assets/toNumber-d93b0850.js",
        "assets/router-5691abb0.js",
      ]
    ),
  Y = () =>
    t(
      () => import("./Details-ca9fab10.js"),
      [
        "assets/Details-ca9fab10.js",
        "assets/web-da7da7e5.js",
        "assets/Cancel-6c4525d6.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/router-5691abb0.js",
      ]
    ),
  Z = () =>
    t(
      () => import("./GameList-90aa423b.js"),
      [
        "assets/GameList-90aa423b.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/router-5691abb0.js",
      ]
    ),
  tt = () =>
    t(
      () => import("./LinkDetail-21aafdbe.js"),
      [
        "assets/LinkDetail-21aafdbe.js",
        "assets/web-da7da7e5.js",
        "assets/Cancel-6c4525d6.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/router-5691abb0.js",
      ]
    ),
  et = () =>
    t(
      () => import("./index-384ea03f.js"),
      [
        "assets/index-384ea03f.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Lib-1f9ea743.js",
        "assets/solid-js-2e15682c.js",
        "assets/Icon-b6e375d0.js",
      ]
    ),
  ot = () =>
    t(
      () => import("./index-6dfd9a3f.js"),
      [
        "assets/index-6dfd9a3f.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/router-5691abb0.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Table-360a63c7.js",
        "assets/index-90397c53.js",
        "assets/store-2ed2b91e.js",
        "assets/Icon-603169e7.js",
      ]
    ),
  it = () =>
    t(
      () => import("./Overview-2f0ecdbb.js"),
      [
        "assets/Overview-2f0ecdbb.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Card-c0bcede6.js",
        "assets/Icon-603169e7.js",
        "assets/Table-360a63c7.js",
        "assets/index-90397c53.js",
        "assets/store-2ed2b91e.js",
      ]
    ),
  rt = () =>
    t(
      () => import("./index-0ae977d7.js"),
      [
        "assets/index-0ae977d7.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/store-2ed2b91e.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Card-c0bcede6.js",
        "assets/Icon-603169e7.js",
        "assets/Table-360a63c7.js",
        "assets/index-90397c53.js",
      ]
    ),
  at = () =>
    t(
      () => import("./Entry-55fd13d6.js"),
      [
        "assets/Entry-55fd13d6.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-603169e7.js",
        "assets/index-90397c53.js",
        "assets/store-2ed2b91e.js",
      ]
    ),
  _t = () =>
    t(
      () => import("./SelectCurrency-0ef42d5c.js").then((e) => e.b),
      [
        "assets/SelectCurrency-0ef42d5c.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/Icon-b6e375d0.js",
        "assets/LocalAmountItem-390b01c4.js",
        "assets/orderBy-fc8ca101.js",
        "assets/_baseOrderBy-d3b5242c.js",
        "assets/_baseIteratee-dc3e9bea.js",
        "assets/memoize-ff109130.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/groupBy-5d1dee29.js",
        "assets/_defineProperty-3c705e3e.js",
      ]
    ),
  st = () =>
    t(
      () => import("./Intercept-8f2a64d1.js"),
      [
        "assets/Intercept-8f2a64d1.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/router-5691abb0.js",
      ]
    ),
  nt = () =>
    t(
      () => import("./Verify-fc9c5ff9.js").then((e) => e.V),
      [
        "assets/Verify-fc9c5ff9.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/solid-js-2e15682c.js",
      ]
    ),
  ct = () =>
    t(
      () => import("./AccountVerify-98cee83c.js"),
      [
        "assets/AccountVerify-98cee83c.js",
        "assets/web-da7da7e5.js",
        "assets/Verify-fc9c5ff9.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/solid-js-2e15682c.js",
      ]
    ),
  lt = () =>
    t(
      () => import("./WhatDeposit-01f8848a.js"),
      [
        "assets/WhatDeposit-01f8848a.js",
        "assets/web-da7da7e5.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/solid-js-2e15682c.js",
        "assets/router-5691abb0.js",
      ]
    ),
  ut = () =>
    t(
      () => import("./WhatWithdraw-7c94b43a.js"),
      [
        "assets/WhatWithdraw-7c94b43a.js",
        "assets/web-da7da7e5.js",
        "assets/solid-js-2e15682c.js",
        "assets/i18n-9b1e4bd8.js",
        "assets/store-eb5336a3.js",
        "assets/store-2ed2b91e.js",
        "assets/memoize-ff109130.js",
        "assets/_baseFlatten-f0777715.js",
        "assets/_setToArray-f7a05dc1.js",
        "assets/_defineProperty-3c705e3e.js",
        "assets/_baseFindIndex-15a8234c.js",
      ]
    ),
  Ko = p({
    init: () => t(() => import("./init-7a16444c.js"), []),
    Balance: v,
    WalletLayout: L,
    DialogAboutBonusCoin: A,
    DialogAboutBCD: g,
    DialogAboutBCL: R,
    DialogAboutBC: T,
    DialogWithdraw: I,
    DialogDeposit: O,
    DialogChannelDeposit: V,
    DialogBuyCrypto: h,
    DialogSwap: f,
    DialogVault: S,
    DialogVaultTransfer: y,
    DialogTurnover: M,
    DialogTurnover2: z,
    DialogNft: B,
    DialogTransaction: W,
    DialogBetHistory: N,
    DialogNftHistory: U,
    DialogNftDeposit: x,
    DialogNftWithdraw: G,
    DialogNftMerge: F,
    DialogNftSplit: H,
    DialogNftDetail: K,
    DialogManageAssets: P,
    BcTokenLayout: ot,
    BCTokenOverview: it,
    BCTokenSwap: rt,
    BCTokenEntry: at,
    DialogCard: C,
    DialogTransactionDepositDetail: $,
    DialogTransactionWithDrawDetail: Q,
    DialogRate: j,
    DialogDraft: J,
    DialogTicket: et,
    DialogInterests: b,
    openSelectCurrency: _t,
    DialogTableCont: X,
    DialogRollDetail: Y,
    DialogRollLinkDetail: tt,
    DialogBuyDetail: q,
    DialogRollGameList: Z,
    DialogBank: w,
    DialogIntercept: st,
    DialogCurrencyConfig: k,
    DialogWhatDeposit: lt,
    DialogWhatWithDraw: ut,
    DialogBankVerify: ct,
    DialogCardVerify: nt,
  });
export {
  Oe as $,
  Dt as A,
  gt as B,
  Rt as C,
  It as D,
  ft as E,
  Wo as F,
  Ve as G,
  Eo as H,
  Ct as I,
  dt as J,
  yo as K,
  Wt as L,
  At as M,
  Ht as N,
  Nt as O,
  $t as P,
  ue as Q,
  Qt as R,
  ie as S,
  ae as T,
  ce as U,
  Mo as V,
  Ro as W,
  be as X,
  Pt as Y,
  oo as Z,
  t as _,
  ko as a,
  Ko as a0,
  Vt as b,
  go as c,
  _e as d,
  Ye as e,
  re as f,
  Lo as g,
  Te as h,
  Re as i,
  Ze as j,
  je as k,
  eo as l,
  de as m,
  Gt as n,
  pe as o,
  _o as p,
  Zt as q,
  le as r,
  Po as s,
  Io as t,
  Uo as u,
  Ot as v,
  xo as w,
  bt as x,
  Xt as y,
  me as z,
};
