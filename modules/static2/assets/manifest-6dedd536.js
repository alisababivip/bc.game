const d = "modulepreload",
  p = function (r) {
    return "/modules/static2/" + r;
  },
  l = {},
  e = function (_, a, u) {
    if (!a || a.length === 0) return _();
    const c = document.getElementsByTagName("link");
    return Promise.all(
      a.map((t) => {
        if (((t = p(t)), t in l)) return;
        l[t] = !0;
        const o = t.endsWith(".css"),
          E = o ? '[rel="stylesheet"]' : "";
        if (!!u)
          for (let s = c.length - 1; s >= 0; s--) {
            const n = c[s];
            if (n.href === t && (!o || n.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${t}"]${E}`)) return;
        const i = document.createElement("link");
        if (
          ((i.rel = o ? "stylesheet" : d),
          o || ((i.as = "script"), (i.crossOrigin = "")),
          (i.href = t),
          document.head.appendChild(i),
          o)
        )
          return new Promise((s, n) => {
            i.addEventListener("load", s),
              i.addEventListener("error", () =>
                n(new Error(`Unable to preload CSS for ${t}`))
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
  m = globalThis._bc,
  {
    A: te,
    Accordion: oe,
    ActiveProvider: ie,
    App: re,
    Badge: se,
    Breadcrumb: ne,
    Button: ae,
    Carousel: _e,
    Checkbox: ce,
    Collapsible: le,
    DatePicker: ue,
    Decimal: Ee,
    Dialog: de,
    DropDown: pe,
    Each: me,
    Empty: ve,
    FlatList: Le,
    GridScrollList: Pe,
    Icon: Re,
    Input: Te,
    KeepScroll: De,
    Layout: ge,
    LazyList: Ie,
    ListView: Ae,
    Loading: Oe,
    Long: Ve,
    Meta: Se,
    MetaProvider: he,
    MultiSelect: ye,
    Notice: fe,
    NumberInput: be,
    Occurrence: we,
    PQuery: Ce,
    Pagination: ke,
    Pop: Be,
    PopProvider: Me,
    Radio: ze,
    Ref: Ue,
    Refs: Ne,
    ScrollView: He,
    Scrollbar: xe,
    Select: We,
    Slider: Fe,
    SmoothList: Ge,
    SmoothListController: $e,
    Sticky: qe,
    Switch: Ke,
    TMCLayout: Je,
    Tabs: Qe,
    Teleport: je,
    ToastProvider: Xe,
    Toggle: Ye,
    ToggleView: Ze,
    Tooltip: et,
    Transition: tt,
    UserTitle: ot,
    access: it,
    account: rt,
    addUserReceiptEvent: st,
    app: nt,
    asyncQueue: at,
    authGuard: _t,
    batchRouteDefinition: ct,
    bc: lt,
    bcdResource: ut,
    createCallback: Et,
    createClickOutside: dt,
    createControllableSignal: pt,
    createCountdown: mt,
    createCss: vt,
    createElementSize: Lt,
    createEmitter: Pt,
    createEventListener: Rt,
    createEventListenerMap: Tt,
    createI18n: Dt,
    createImgix: gt,
    createIntersectionObserver: It,
    createIsMounted: At,
    createKeyHold: Ot,
    createListTransition: Vt,
    createNoSuspense: St,
    createRemote: v,
    createResizeObserver: ht,
    createRootPool: yt,
    createScheduled: ft,
    createSingletonRoot: bt,
    createSmoothList: wt,
    createSubRoot: Ct,
    createSwitchTransition: kt,
    createTimer: Bt,
    createTween: Mt,
    createViewportObserver: zt,
    createVisibilityObserver: Ut,
    createWindowSize: Nt,
    cx: Ht,
    debounce: xt,
    deduction: Wt,
    env: Ft,
    getHttp: Gt,
    getShareLinks: $t,
    getSocket: qt,
    gsap: Kt,
    leading: Jt,
    leadingAndTrailing: Qt,
    makePersisted: jt,
    mergeRefs: Xt,
    pop: Yt,
    protobuf: Zt,
    requestRecaptcha: eo,
    resolveElements: to,
    resolveFirst: oo,
    resolveRemote: io,
    setAccount: ro,
    setEnv: so,
    setLang: no,
    setSetting: ao,
    setSystem: _o,
    setWallet: co,
    setting: lo,
    syncAccount: uo,
    system: Eo,
    systemUtils: po,
    throttle: mo,
    toast: vo,
    until: Lo,
    untilLogin: Po,
    useActiveMemo: Ro,
    useFlatItem: To,
    useGlobalComponent: Do,
    useIsActive: go,
    useKeyDownEvent: Io,
    useLoginCallback: Ao,
    useMeta: Oo,
    useNavigate: Vo,
    useNavigatePromise: So,
    useNavigatePromiseEnter: ho,
    useRouterStack: yo,
    useScrollElement: fo,
    user: bo,
    utils: wo,
    wallet: Co,
    withDirection: ko,
    withOccurrence: Bo,
    wrUtils: Mo,
  } = m.fcsy,
  L = () => e(() => import("./Layout-462900b2.js"), []),
  P = () =>
    e(
      () => import("./index-a76c581f.js"),
      [
        "assets/index-a76c581f.js",
        "assets/web-5c332740.js",
        "assets/solid-js-9508438e.js",
        "assets/i18n-2889c705.js",
        "assets/HelpPage-c2d4cc92.js",
        "assets/files-02c31782.js",
        "assets/LocalIcon-31e78911.js",
        "assets/index-f52ccf1b.js",
        "assets/router-d36109eb.js",
        "assets/request-a00594b6.js",
        "assets/OneDollarCheck-6dd4da0a.js",
      ]
    ),
  R = () =>
    e(
      () => import("./index-a8cea71c.js"),
      [
        "assets/index-a8cea71c.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/LocalIcon-31e78911.js",
        "assets/router-d36109eb.js",
      ]
    ),
  T = () =>
    e(
      () => import("./OneDollarCheck-6dd4da0a.js"),
      [
        "assets/OneDollarCheck-6dd4da0a.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
      ]
    ),
  D = () =>
    e(
      () => import("./WalletType-efa9c609.js").then((r) => r.W),
      [
        "assets/WalletType-efa9c609.js",
        "assets/web-5c332740.js",
        "assets/request-a00594b6.js",
        "assets/___vite-browser-external_commonjs-proxy-b7934932.js",
        "assets/solid-js-9508438e.js",
        "assets/router-d36109eb.js",
        "assets/i18n-2889c705.js",
      ]
    ),
  g = () =>
    e(
      () => import("./PrivacyDialog-ed3092a6.js"),
      [
        "assets/PrivacyDialog-ed3092a6.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/files-02c31782.js",
        "assets/solid-js-9508438e.js",
      ]
    ),
  I = () =>
    e(
      () => import("./BonusTCDialog-c982cac3.js"),
      [
        "assets/BonusTCDialog-c982cac3.js",
        "assets/web-5c332740.js",
        "assets/HelpPage-c2d4cc92.js",
        "assets/files-02c31782.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/LocalIcon-31e78911.js",
        "assets/index-f52ccf1b.js",
        "assets/router-d36109eb.js",
        "assets/request-a00594b6.js",
        "assets/OneDollarCheck-6dd4da0a.js",
      ]
    ),
  A = () =>
    e(
      () => import("./index-f970ab46.js"),
      [
        "assets/index-f970ab46.js",
        "assets/web-5c332740.js",
        "assets/solid-js-9508438e.js",
        "assets/i18n-2889c705.js",
      ]
    ),
  O = () =>
    e(
      () => import("./HelpPage-c2d4cc92.js"),
      [
        "assets/HelpPage-c2d4cc92.js",
        "assets/web-5c332740.js",
        "assets/files-02c31782.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/LocalIcon-31e78911.js",
        "assets/index-f52ccf1b.js",
        "assets/router-d36109eb.js",
        "assets/request-a00594b6.js",
        "assets/OneDollarCheck-6dd4da0a.js",
      ]
    ),
  V = () =>
    e(
      () => import("./index-af605d84.js"),
      [
        "assets/index-af605d84.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/store-2ed2b91e.js",
        "assets/index-27e2239a.css",
      ]
    ),
  S = () =>
    e(
      () => import("./index-42290b35.js"),
      [
        "assets/index-42290b35.js",
        "assets/web-5c332740.js",
        "assets/solid-js-9508438e.js",
        "assets/i18n-2889c705.js",
        "assets/LHeader-e2b476f1.js",
        "assets/store-2ed2b91e.js",
        "assets/LHeader-08159b7a.css",
      ]
    ),
  h = () =>
    e(
      () => import("./winner-list-0a638b0e.js"),
      [
        "assets/winner-list-0a638b0e.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/LHeader-e2b476f1.js",
        "assets/store-2ed2b91e.js",
        "assets/LHeader-08159b7a.css",
        "assets/router-d36109eb.js",
      ]
    ),
  y = () =>
    e(
      () => import("./index-4525ac62.js"),
      [
        "assets/index-4525ac62.js",
        "assets/web-5c332740.js",
        "assets/solid-js-9508438e.js",
        "assets/i18n-2889c705.js",
        "assets/index-c0595e9a.js",
        "assets/store-2ed2b91e.js",
        "assets/SpineAnimation-e5072b92.js",
        "assets/runtime-3.8.es-2052f4fe.js",
        "assets/___vite-browser-external_commonjs-proxy-b7934932.js",
      ]
    ),
  f = () =>
    e(
      () => import("./s-detail-9fb84516.js"),
      [
        "assets/s-detail-9fb84516.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
      ]
    ),
  b = () =>
    e(
      () => import("./s-detail-cb583948.js"),
      [
        "assets/s-detail-cb583948.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
      ]
    ),
  w = () =>
    e(
      () => import("./verify-787f3a47.js"),
      [
        "assets/verify-787f3a47.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/index-c0595e9a.js",
        "assets/store-2ed2b91e.js",
      ]
    ),
  C = () =>
    e(
      () => import("./invite-23ee2177.js"),
      [
        "assets/invite-23ee2177.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/index-c0595e9a.js",
        "assets/solid-js-9508438e.js",
        "assets/store-2ed2b91e.js",
      ]
    ),
  k = () =>
    e(
      () => import("./Layout-aa4364b8.js"),
      [
        "assets/Layout-aa4364b8.js",
        "assets/web-5c332740.js",
        "assets/solid-js-9508438e.js",
        "assets/router-d36109eb.js",
        "assets/assetsLogo-7a927bc4.js",
        "assets/i18n-2889c705.js",
        "assets/Layout-5aec7f38.css",
      ]
    ),
  B = () =>
    e(
      () => import("./index-df4b0418.js"),
      [
        "assets/index-df4b0418.js",
        "assets/web-5c332740.js",
        "assets/assetsLogo-7a927bc4.js",
        "assets/router-d36109eb.js",
        "assets/index-76184800.css",
      ]
    ),
  M = () =>
    e(
      () => import("./index-842fb452.js"),
      [
        "assets/index-842fb452.js",
        "assets/web-5c332740.js",
        "assets/index-df4b0418.js",
        "assets/assetsLogo-7a927bc4.js",
        "assets/router-d36109eb.js",
        "assets/index-76184800.css",
      ]
    ),
  z = () =>
    e(
      () => import("./index-91174c7e.js"),
      [
        "assets/index-91174c7e.js",
        "assets/web-5c332740.js",
        "assets/index-3fd48be3.js",
        "assets/banner3-99046d11.js",
        "assets/solid-js-9508438e.js",
        "assets/runtime-3.8.es-2052f4fe.js",
        "assets/___vite-browser-external_commonjs-proxy-b7934932.js",
        "assets/router-d36109eb.js",
        "assets/index-11fab1b3.css",
      ]
    ),
  U = () =>
    e(
      () => import("./index-724cc748.js"),
      [
        "assets/index-724cc748.js",
        "assets/web-5c332740.js",
        "assets/index-91174c7e.js",
        "assets/index-3fd48be3.js",
        "assets/banner3-99046d11.js",
        "assets/solid-js-9508438e.js",
        "assets/runtime-3.8.es-2052f4fe.js",
        "assets/___vite-browser-external_commonjs-proxy-b7934932.js",
        "assets/router-d36109eb.js",
        "assets/index-11fab1b3.css",
      ]
    ),
  N = () =>
    e(
      () => import("./index-5b8e9e27.js"),
      [
        "assets/index-5b8e9e27.js",
        "assets/web-5c332740.js",
        "assets/index-91174c7e.js",
        "assets/index-3fd48be3.js",
        "assets/banner3-99046d11.js",
        "assets/solid-js-9508438e.js",
        "assets/runtime-3.8.es-2052f4fe.js",
        "assets/___vite-browser-external_commonjs-proxy-b7934932.js",
        "assets/router-d36109eb.js",
        "assets/index-11fab1b3.css",
      ]
    ),
  H = () =>
    e(
      () => import("./index-6a099f16.js"),
      [
        "assets/index-6a099f16.js",
        "assets/web-5c332740.js",
        "assets/index-91174c7e.js",
        "assets/index-3fd48be3.js",
        "assets/banner3-99046d11.js",
        "assets/solid-js-9508438e.js",
        "assets/runtime-3.8.es-2052f4fe.js",
        "assets/___vite-browser-external_commonjs-proxy-b7934932.js",
        "assets/router-d36109eb.js",
        "assets/index-11fab1b3.css",
      ]
    ),
  x = () =>
    e(
      () => import("./index-4be7dc51.js"),
      [
        "assets/index-4be7dc51.js",
        "assets/web-5c332740.js",
        "assets/useIsMobile-5b7dceba.js",
        "assets/solid-js-9508438e.js",
        "assets/index-8f447f36.css",
      ]
    ),
  W = () =>
    e(
      () => import("./index-d5848be9.js").then((r) => r.c),
      [
        "assets/index-d5848be9.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/useIsMobile-5b7dceba.js",
        "assets/solid-js-9508438e.js",
        "assets/index-09f8aade.css",
      ]
    ),
  F = () =>
    e(
      () => import("./index-92e535a0.js"),
      [
        "assets/index-92e535a0.js",
        "assets/web-5c332740.js",
        "assets/banner3-99046d11.js",
        "assets/solid-js-9508438e.js",
        "assets/runtime-3.8.es-2052f4fe.js",
        "assets/___vite-browser-external_commonjs-proxy-b7934932.js",
        "assets/SpineAnimation-e5072b92.js",
        "assets/index-9233fb2c.css",
      ]
    ),
  G = () =>
    e(
      () => import("./index-c529527c.js"),
      [
        "assets/index-c529527c.js",
        "assets/web-5c332740.js",
        "assets/index-3fd48be3.js",
        "assets/solid-js-9508438e.js",
        "assets/i18n-2889c705.js",
        "assets/assetsLogo-7a927bc4.js",
        "assets/index-bc333512.css",
      ]
    ),
  $ = () =>
    e(
      () => import("./index-fcd1fe26.js"),
      [
        "assets/index-fcd1fe26.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/index-d5848be9.js",
        "assets/useIsMobile-5b7dceba.js",
        "assets/index-09f8aade.css",
        "assets/router-d36109eb.js",
        "assets/index-c43a80ca.css",
      ]
    ),
  q = () =>
    e(
      () => import("./Brazil-c9029510.js"),
      [
        "assets/Brazil-c9029510.js",
        "assets/web-5c332740.js",
        "assets/SignUp-280978b6.js",
        "assets/store-2ed2b91e.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/SignUp-064a32ae.css",
      ]
    ),
  K = () =>
    e(
      () => import("./Sports-5cc0eece.js"),
      [
        "assets/Sports-5cc0eece.js",
        "assets/web-5c332740.js",
        "assets/SignUp-280978b6.js",
        "assets/store-2ed2b91e.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/SignUp-064a32ae.css",
      ]
    ),
  J = () =>
    e(
      () => import("./index-e9d5ecad.js"),
      [
        "assets/index-e9d5ecad.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/index-a8ab0dc8.css",
      ]
    ),
  Q = () =>
    e(
      () => import("./index-1396c00b.js"),
      [
        "assets/index-1396c00b.js",
        "assets/web-5c332740.js",
        "assets/index-e9d5ecad.js",
        "assets/i18n-2889c705.js",
        "assets/solid-js-9508438e.js",
        "assets/index-a8ab0dc8.css",
      ]
    ),
  j = () =>
    e(
      () => import("./index-56add84b.js"),
      [
        "assets/index-56add84b.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/index-b50c6100.js",
        "assets/solid-js-9508438e.js",
        "assets/index-8bdd9550.js",
        "assets/assetsLogo-7a927bc4.js",
        "assets/index-f52ccf1b.js",
        "assets/router-d36109eb.js",
      ]
    ),
  X = () =>
    e(
      () => import("./eventDetail-6af6ad35.js"),
      [
        "assets/eventDetail-6af6ad35.js",
        "assets/web-5c332740.js",
        "assets/router-d36109eb.js",
        "assets/solid-js-9508438e.js",
        "assets/i18n-2889c705.js",
      ]
    ),
  Y = () =>
    e(
      () => import("./Entery-d4dea8e8.js"),
      [
        "assets/Entery-d4dea8e8.js",
        "assets/web-5c332740.js",
        "assets/i18n-2889c705.js",
        "assets/index-b50c6100.js",
      ]
    ),
  Z = () =>
    e(
      () => import("./mydetails-2523032e.js"),
      [
        "assets/mydetails-2523032e.js",
        "assets/web-5c332740.js",
        "assets/router-d36109eb.js",
        "assets/solid-js-9508438e.js",
        "assets/i18n-2889c705.js",
        "assets/index-8bdd9550.js",
      ]
    ),
  zo = v({
    init: () => e(() => import("./init-beebf5a3.js"), []),
    Layout: L,
    HelpCenter: P,
    OneDollarCheck: T,
    WalletType: D,
    PrivacyDialog: g,
    BonusTCDialog: I,
    Sponsorship: R,
    VerifyRepresentative: A,
    HelpPage: O,
    Premier: V,
    PremierEventDetail: f,
    Brazil: y,
    BrazilEventDetail: b,
    BrazilVerify: w,
    BrazilInvite: C,
    LandingIndia: B,
    LandingJapan: z,
    LandingIndiaSports: M,
    Landing50tilt50: U,
    LandingCasinoOnLine: N,
    LandingJpcasino: H,
    LandingAff: x,
    LandingCryptoSpin: W,
    LandingLayout: k,
    Payment: G,
    Luckyspin: $,
    LandingSpineDemo: F,
    BrazilSports: q,
    Sports: K,
    Sport: J,
    Esport: Q,
    Mining: j,
    MiningEventDetail: X,
    MiningMyBetDetail: Z,
    MiningEnter: Y,
    Ucl: S,
    UclHistory: h,
  });
export {
  te as A,
  ae as B,
  ce as C,
  de as D,
  Dt as E,
  ke as F,
  vt as G,
  zo as H,
  Te as I,
  Oe as L,
  Be as P,
  We as S,
  Je as T,
  e as _,
  Vo as a,
  lo as b,
  go as c,
  nt as d,
  Ft as e,
  He as f,
  Re as g,
  Gt as h,
  Ht as i,
  Ze as j,
  po as k,
  Ee as l,
  rt as m,
  mt as n,
  _e as o,
  Yt as p,
  lt as q,
  eo as r,
  Eo as s,
  vo as t,
  wo as u,
  ao as v,
  Co as w,
  at as x,
  pe as y,
  et as z,
};
