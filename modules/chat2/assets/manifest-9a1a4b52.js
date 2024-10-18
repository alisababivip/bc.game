var _ = (o, u, r) =>
  new Promise((m, n) => {
    var e = (i) => {
        try {
          c(r.next(i));
        } catch (a) {
          n(a);
        }
      },
      s = (i) => {
        try {
          c(r.throw(i));
        } catch (a) {
          n(a);
        }
      },
      c = (i) => (i.done ? m(i.value) : Promise.resolve(i.value).then(e, s));
    c((r = r.apply(o, u)).next());
  });
const E = "modulepreload",
  g = function (o) {
    return "/modules/chat2/" + o;
  },
  v = {},
  t = function (u, r, m) {
    if (!r || r.length === 0) return u();
    const n = document.getElementsByTagName("link");
    return Promise.all(
      r.map((e) => {
        if (((e = g(e)), e in v)) return;
        v[e] = !0;
        const s = e.endsWith(".css"),
          c = s ? '[rel="stylesheet"]' : "";
        if (!!m)
          for (let l = n.length - 1; l >= 0; l--) {
            const d = n[l];
            if (d.href === e && (!s || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${e}"]${c}`)) return;
        const a = document.createElement("link");
        if (
          ((a.rel = s ? "stylesheet" : E),
          s || ((a.as = "script"), (a.crossOrigin = "")),
          (a.href = e),
          document.head.appendChild(a),
          s)
        )
          return new Promise((l, d) => {
            a.addEventListener("load", l),
              a.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${e}`))
              );
          });
      })
    )
      .then(() => u())
      .catch((e) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = e), window.dispatchEvent(s), !s.defaultPrevented))
          throw e;
      });
  },
  p = globalThis._bc,
  {
    A,
    Accordion: C,
    ActiveProvider: O,
    App: k,
    Badge: M,
    Breadcrumb: N,
    Button: B,
    Carousel: U,
    Checkbox: x,
    Collapsible: z,
    DatePicker: F,
    Decimal: G,
    Dialog: K,
    DropDown: W,
    Each: q,
    Empty: H,
    FlatList: Q,
    GridScrollList: $,
    Icon: j,
    Input: J,
    KeepScroll: X,
    Layout: Y,
    LazyList: Z,
    ListView: ee,
    Loading: te,
    Long: se,
    Meta: ae,
    MetaProvider: oe,
    MultiSelect: re,
    Notice: ie,
    NumberInput: ne,
    Occurrence: ce,
    PQuery: le,
    Pagination: ue,
    Pop: de,
    PopProvider: _e,
    Radio: me,
    Ref: ve,
    Refs: Ee,
    ScrollView: ge,
    Scrollbar: pe,
    Select: Re,
    Slider: he,
    SmoothList: Le,
    SmoothListController: Pe,
    Sticky: Se,
    Switch: we,
    TMCLayout: Te,
    Tabs: be,
    Teleport: fe,
    ToastProvider: ye,
    Toggle: De,
    ToggleView: Ie,
    Tooltip: Ve,
    Transition: Ae,
    UserTitle: Ce,
    access: Oe,
    account: ke,
    addUserReceiptEvent: Me,
    app: Ne,
    asyncQueue: Be,
    authGuard: Ue,
    batchRouteDefinition: xe,
    bc: ze,
    bcdResource: Fe,
    createCallback: Ge,
    createClickOutside: Ke,
    createControllableSignal: We,
    createCountdown: qe,
    createCss: He,
    createElementSize: Qe,
    createEmitter: $e,
    createEventListener: je,
    createEventListenerMap: Je,
    createI18n: Xe,
    createImgix: Ye,
    createIntersectionObserver: Ze,
    createIsMounted: et,
    createKeyHold: tt,
    createListTransition: st,
    createNoSuspense: at,
    createRemote: R,
    createResizeObserver: ot,
    createRootPool: rt,
    createScheduled: it,
    createSingletonRoot: nt,
    createSmoothList: ct,
    createSubRoot: lt,
    createSwitchTransition: ut,
    createTimer: dt,
    createTween: _t,
    createViewportObserver: mt,
    createVisibilityObserver: vt,
    createWindowSize: Et,
    cx: gt,
    debounce: pt,
    deduction: Rt,
    env: ht,
    getHttp: Lt,
    getShareLinks: Pt,
    getSocket: St,
    gsap: wt,
    leading: Tt,
    leadingAndTrailing: bt,
    makePersisted: ft,
    mergeRefs: yt,
    pop: Dt,
    protobuf: It,
    requestRecaptcha: Vt,
    resolveElements: At,
    resolveFirst: Ct,
    resolveRemote: Ot,
    setAccount: kt,
    setEnv: Mt,
    setLang: Nt,
    setSetting: Bt,
    setSystem: Ut,
    setWallet: xt,
    setting: zt,
    syncAccount: Ft,
    system: Gt,
    systemUtils: Kt,
    throttle: Wt,
    toast: qt,
    until: Ht,
    untilLogin: Qt,
    useActiveMemo: $t,
    useFlatItem: jt,
    useGlobalComponent: Jt,
    useIsActive: Xt,
    useKeyDownEvent: Yt,
    useLoginCallback: Zt,
    useMeta: es,
    useNavigate: ts,
    useNavigatePromise: ss,
    useNavigatePromiseEnter: as,
    useRouterStack: os,
    useScrollElement: rs,
    user: is,
    utils: ns,
    wallet: cs,
    withDirection: ls,
    withOccurrence: us,
    wrUtils: ds,
  } = p.fcsy,
  h = () =>
    t(
      () => import("./Enter-6e37e8cc.js"),
      [
        "assets/Enter-6e37e8cc.js",
        "assets/i18n-961d0749.js",
        "assets/toString-486436aa.js",
        "assets/store-00ffcf83.js",
        "assets/unescape-fec905cb.js",
        "assets/router-251b14d1.js",
      ]
    ),
  L = () =>
    t(
      () => import("./index-11bd0ec7.js"),
      [
        "assets/index-11bd0ec7.js",
        "assets/i18n-961d0749.js",
        "assets/toString-486436aa.js",
        "assets/index-105ff8da.js",
        "assets/unescape-fec905cb.js",
        "assets/Emoji-4d44ab1c.js",
        "assets/router-251b14d1.js",
        "assets/store-00ffcf83.js",
        "assets/User-d13a8923.js",
      ]
    ),
  P = () =>
    t(
      () => import("./RoomView-037a2ec1.js"),
      [
        "assets/RoomView-037a2ec1.js",
        "assets/i18n-961d0749.js",
        "assets/toString-486436aa.js",
        "assets/store-00ffcf83.js",
        "assets/unescape-fec905cb.js",
        "assets/User-d13a8923.js",
        "assets/ListView-369c03d3.js",
        "assets/Search-316cf45a.js",
        "assets/Emoji-4d44ab1c.js",
        "assets/router-251b14d1.js",
      ]
    ),
  S = () =>
    t(
      () => import("./ListView-369c03d3.js").then((o) => o.a),
      [
        "assets/ListView-369c03d3.js",
        "assets/i18n-961d0749.js",
        "assets/toString-486436aa.js",
        "assets/store-00ffcf83.js",
        "assets/unescape-fec905cb.js",
        "assets/User-d13a8923.js",
        "assets/Search-316cf45a.js",
      ]
    ),
  w = () =>
    t(
      () => import("./GroupMessage-5f7e145c.js"),
      [
        "assets/GroupMessage-5f7e145c.js",
        "assets/i18n-961d0749.js",
        "assets/toString-486436aa.js",
        "assets/store-00ffcf83.js",
        "assets/unescape-fec905cb.js",
        "assets/User-d13a8923.js",
        "assets/Search-316cf45a.js",
      ]
    ),
  T = () =>
    _(void 0, null, function* () {
      return {
        default: (yield t(
          () => import("./RoomView-037a2ec1.js"),
          [
            "assets/RoomView-037a2ec1.js",
            "assets/i18n-961d0749.js",
            "assets/toString-486436aa.js",
            "assets/store-00ffcf83.js",
            "assets/unescape-fec905cb.js",
            "assets/User-d13a8923.js",
            "assets/ListView-369c03d3.js",
            "assets/Search-316cf45a.js",
            "assets/Emoji-4d44ab1c.js",
            "assets/router-251b14d1.js",
          ]
        )).RoomViewFullScreen,
      };
    }),
  b = () =>
    _(void 0, null, function* () {
      return {
        default: (yield t(
          () => import("./RoomView-037a2ec1.js"),
          [
            "assets/RoomView-037a2ec1.js",
            "assets/i18n-961d0749.js",
            "assets/toString-486436aa.js",
            "assets/store-00ffcf83.js",
            "assets/unescape-fec905cb.js",
            "assets/User-d13a8923.js",
            "assets/ListView-369c03d3.js",
            "assets/Search-316cf45a.js",
            "assets/Emoji-4d44ab1c.js",
            "assets/router-251b14d1.js",
          ]
        )).RoomViewRight,
      };
    }),
  f = () =>
    t(
      () => import("./SendRain-08034019.js"),
      [
        "assets/SendRain-08034019.js",
        "assets/i18n-961d0749.js",
        "assets/toString-486436aa.js",
        "assets/SelectInput-b284b87b.js",
      ]
    ),
  y = () =>
    t(
      () => import("./Send-27c1b76b.js"),
      [
        "assets/Send-27c1b76b.js",
        "assets/i18n-961d0749.js",
        "assets/toString-486436aa.js",
        "assets/SelectInput-b284b87b.js",
      ]
    ),
  D = () =>
    t(
      () => import("./SendTip-533d603d.js"),
      [
        "assets/SendTip-533d603d.js",
        "assets/i18n-961d0749.js",
        "assets/toString-486436aa.js",
        "assets/SelectInput-b284b87b.js",
        "assets/router-251b14d1.js",
      ]
    ),
  I = () =>
    _(void 0, null, function* () {
      return {
        default: (yield t(
          () => import("./index-105ff8da.js").then((o) => o.i),
          [
            "assets/index-105ff8da.js",
            "assets/toString-486436aa.js",
            "assets/unescape-fec905cb.js",
          ]
        )).getPublicChatRoomId,
      };
    }),
  _s = R({
    init: () => t(() => import("./init-2175a764.js"), []),
    PrivateChatEnter: h,
    PublicChat: L,
    DialogRoomView: P,
    DialogListView: S,
    DialogGroupMessage: w,
    PageRoomView: T,
    SendRain: f,
    SendCoindrop: y,
    SendTip: D,
    getPublicChatRoomId: I,
    RightRoomView: b,
  });
export {
  A,
  B,
  be as C,
  G as D,
  x as E,
  H as F,
  pt as G,
  Ae as H,
  j as I,
  Xt as J,
  J as K,
  te as L,
  re as M,
  is as N,
  It as O,
  de as P,
  St as Q,
  ne as R,
  ge as S,
  De as T,
  Ce as U,
  cs as V,
  Xe as W,
  He as X,
  _s as Y,
  t as _,
  Ne as a,
  Qt as b,
  M as c,
  ke as d,
  ht as e,
  ze as f,
  Lt as g,
  gt as h,
  ns as i,
  zt as j,
  Yt as k,
  Re as l,
  Gt as m,
  qe as n,
  Zt as o,
  Dt as p,
  Ke as q,
  Vt as r,
  Kt as s,
  qt as t,
  ts as u,
  Ie as v,
  Ve as w,
  Z as x,
  K as y,
  W as z,
};
