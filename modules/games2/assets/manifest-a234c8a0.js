var Ms = Object.defineProperty,
  xs = Object.defineProperties;
var Qs = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var Ne = Object.prototype.hasOwnProperty,
  Be = Object.prototype.propertyIsEnumerable;
var ze = Math.pow,
  Ve = (s, t, e) =>
    t in s
      ? Ms(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (s[t] = e),
  d = (s, t) => {
    for (var e in t || (t = {})) Ne.call(t, e) && Ve(s, e, t[e]);
    if (ne) for (var e of ne(t)) Be.call(t, e) && Ve(s, e, t[e]);
    return s;
  },
  R = (s, t) => xs(s, Qs(t));
var Kt = (s, t) => {
  var e = {};
  for (var r in s) Ne.call(s, r) && t.indexOf(r) < 0 && (e[r] = s[r]);
  if (s != null && ne)
    for (var r of ne(s)) t.indexOf(r) < 0 && Be.call(s, r) && (e[r] = s[r]);
  return e;
};
var me = (s, t, e) => {
  if (!t.has(s)) throw TypeError("Cannot " + e);
};
var i = (s, t, e) => (
    me(s, t, "read from private field"), e ? e.call(s) : t.get(s)
  ),
  f = (s, t, e) => {
    if (t.has(s))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(s) : t.set(s, e);
  },
  c = (s, t, e, r) => (
    me(s, t, "write to private field"), r ? r.call(s, e) : t.set(s, e), e
  );
var ae = (s, t, e, r) => ({
    set _(n) {
      c(s, t, n, e);
    },
    get _() {
      return i(s, t, r);
    },
  }),
  v = (s, t, e) => (me(s, t, "access private method"), e);
var lt = (s, t, e) =>
  new Promise((r, n) => {
    var a = (l) => {
        try {
          o(e.next(l));
        } catch (m) {
          n(m);
        }
      },
      h = (l) => {
        try {
          o(e.throw(l));
        } catch (m) {
          n(m);
        }
      },
      o = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(a, h));
    o((e = e.apply(s, t)).next());
  });
const We = {},
  Q = function (s, t, e) {
    if (!t || t.length === 0) return s();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      t.map((n) => {
        if (
          (n = (function (l) {
            return "/modules/games2/" + l;
          })(n)) in We
        )
          return;
        We[n] = !0;
        const a = n.endsWith(".css"),
          h = a ? '[rel="stylesheet"]' : "";
        if (e)
          for (let l = r.length - 1; l >= 0; l--) {
            const m = r[l];
            if (m.href === n && (!a || m.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${n}"]${h}`)) return;
        const o = document.createElement("link");
        return (
          (o.rel = a ? "stylesheet" : "modulepreload"),
          a || ((o.as = "script"), (o.crossOrigin = "")),
          (o.href = n),
          document.head.appendChild(o),
          a
            ? new Promise((l, m) => {
                o.addEventListener("load", l),
                  o.addEventListener("error", () =>
                    m(new Error(`Unable to preload CSS for ${n}`))
                  );
              })
            : void 0
        );
      })
    )
      .then(() => s())
      .catch((n) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = n), window.dispatchEvent(a), !a.defaultPrevented))
          throw n;
      });
  },
  Is = globalThis._bc,
  {
    A: li,
    Accordion: di,
    ActiveProvider: fi,
    App: pi,
    Badge: yi,
    Breadcrumb: mi,
    Button: vi,
    Carousel: gi,
    Checkbox: bi,
    Collapsible: Oi,
    DatePicker: wi,
    Decimal: Si,
    Dialog: Ei,
    DropDown: Pi,
    Each: Ri,
    Empty: Ci,
    FlatList: Di,
    GridScrollList: Ai,
    Icon: _i,
    Input: qi,
    KeepScroll: Ti,
    Layout: Fi,
    LazyList: Li,
    ListView: Mi,
    Loading: xi,
    Long: Qi,
    Meta: Ii,
    MetaProvider: Ui,
    MultiSelect: ki,
    Notice: Ki,
    NumberInput: Hi,
    Occurrence: Gi,
    PQuery: ji,
    Pagination: Vi,
    Pop: Ni,
    PopProvider: Bi,
    Radio: zi,
    Ref: Wi,
    Refs: $i,
    ScrollView: Ji,
    Scrollbar: Xi,
    Select: Yi,
    Slider: Zi,
    SmoothList: tr,
    SmoothListController: er,
    Sticky: sr,
    Switch: ir,
    TMCLayout: rr,
    Tabs: nr,
    Teleport: ar,
    ToastProvider: or,
    Toggle: ur,
    ToggleView: hr,
    Tooltip: cr,
    Transition: lr,
    UserTitle: dr,
    access: fr,
    account: pr,
    addUserReceiptEvent: yr,
    app: mr,
    asyncQueue: vr,
    authGuard: gr,
    batchRouteDefinition: br,
    bc: Or,
    bcdResource: wr,
    createCallback: Sr,
    createClickOutside: Er,
    createControllableSignal: Pr,
    createCountdown: Rr,
    createCss: Cr,
    createElementSize: Dr,
    createEmitter: Ar,
    createEventListener: _r,
    createEventListenerMap: qr,
    createI18n: Tr,
    createImgix: Fr,
    createIntersectionObserver: Lr,
    createIsMounted: Mr,
    createKeyHold: xr,
    createListTransition: Qr,
    createNoSuspense: Ir,
    createRemote: Us,
    createResizeObserver: Ur,
    createRootPool: kr,
    createScheduled: Kr,
    createSingletonRoot: Hr,
    createSmoothList: Gr,
    createSubRoot: jr,
    createSwitchTransition: Vr,
    createTimer: Nr,
    createTween: Br,
    createViewportObserver: zr,
    createVisibilityObserver: Wr,
    createWindowSize: $r,
    cx: Jr,
    debounce: Xr,
    deduction: Yr,
    env: Zr,
    getHttp: tn,
    getShareLinks: en,
    getSocket: sn,
    gsap: rn,
    leading: nn,
    leadingAndTrailing: an,
    makePersisted: on,
    mergeRefs: un,
    pop: hn,
    protobuf: cn,
    requestRecaptcha: ln,
    resolveElements: dn,
    resolveFirst: fn,
    resolveRemote: pn,
    setAccount: yn,
    setEnv: mn,
    setLang: vn,
    setSetting: gn,
    setSystem: bn,
    setWallet: On,
    setting: wn,
    syncAccount: Sn,
    system: En,
    systemUtils: Pn,
    throttle: Rn,
    toast: Cn,
    until: Dn,
    untilLogin: An,
    useActiveMemo: _n,
    useFlatItem: qn,
    useGlobalComponent: Tn,
    useIsActive: Fn,
    useKeyDownEvent: Ln,
    useLoginCallback: Mn,
    useMeta: xn,
    useNavigate: Qn,
    useNavigatePromise: In,
    useNavigatePromiseEnter: Un,
    useRouterStack: kn,
    useScrollElement: Kn,
    user: Hn,
    utils: Gn,
    wallet: jn,
    withDirection: Vn,
    withOccurrence: Nn,
    wrUtils: Bn,
  } = Is.fcsy,
  ks = globalThis._bc,
  {
    Aliases: zn,
    Assets: Wn,
    ChildProperties: $n,
    DOMElements: Jn,
    DelegatedEvents: Xn,
    Dynamic: Yn,
    ErrorBoundary: Zn,
    For: ta,
    Hydration: ea,
    HydrationScript: sa,
    Index: ia,
    Match: ra,
    NoHydration: na,
    Portal: aa,
    Properties: oa,
    RequestContext: ua,
    SVGElements: ha,
    SVGNamespace: ca,
    Show: la,
    Suspense: da,
    SuspenseList: fa,
    Switch: pa,
    addEventListener: ya,
    assign: ma,
    classList: va,
    className: ga,
    clearDelegatedEvents: ba,
    createComponent: ge,
    delegateEvents: Oa,
    dynamicProperty: wa,
    effect: Sa,
    escape: Ea,
    generateHydrationScript: Pa,
    getAssets: Ra,
    getHydrationKey: Ca,
    getNextElement: Da,
    getNextMarker: Aa,
    getNextMatch: _a,
    getOwner: qa,
    getPropAlias: Ta,
    getRequestEvent: Fa,
    hydrate: La,
    innerHTML: Ma,
    insert: xa,
    isDev: Qa,
    isServer: wt,
    memo: Ia,
    mergeProps: Ua,
    render: ka,
    renderToStream: Ka,
    renderToString: Ha,
    renderToStringAsync: Ga,
    resolveSSRNode: ja,
    runHydrationEvents: Va,
    setAttribute: Na,
    setAttributeNS: Ba,
    setProperty: za,
    spread: Wa,
    ssr: $a,
    ssrAttribute: Ja,
    ssrClassList: Xa,
    ssrElement: Ya,
    ssrHydrationKey: Za,
    ssrSpread: to,
    ssrStyle: eo,
    style: so,
    template: io,
    untrack: ro,
    use: no,
    useAssets: ao,
  } = ks.h0lnfr;
var Ut = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(s) {
      return (
        this.listeners.add(s),
        this.onSubscribe(),
        () => {
          this.listeners.delete(s), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  It = typeof window == "undefined" || "Deno" in globalThis;
function V() {}
function be(s) {
  return typeof s == "number" && s >= 0 && s !== 1 / 0;
}
function ps(s, t) {
  return Math.max(s + (t || 0) - Date.now(), 0);
}
function St(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function B(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function $e(s, t) {
  const {
    type: e = "all",
    exact: r,
    fetchStatus: n,
    predicate: a,
    queryKey: h,
    stale: o,
  } = s;
  if (h) {
    if (r) {
      if (t.queryHash !== Te(h, t.options)) return !1;
    } else if (!jt(t.queryKey, h)) return !1;
  }
  if (e !== "all") {
    const l = t.isActive();
    if ((e === "active" && !l) || (e === "inactive" && l)) return !1;
  }
  return (
    (typeof o != "boolean" || t.isStale() === o) &&
    (!n || n === t.state.fetchStatus) &&
    !(a && !a(t))
  );
}
function Je(s, t) {
  const { exact: e, status: r, predicate: n, mutationKey: a } = s;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (e) {
      if (Ot(t.options.mutationKey) !== Ot(a)) return !1;
    } else if (!jt(t.options.mutationKey, a)) return !1;
  }
  return (!r || t.state.status === r) && !(n && !n(t));
}
function Te(s, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ot)(s);
}
function Ot(s) {
  return JSON.stringify(s, (t, e) =>
    Oe(e)
      ? Object.keys(e)
          .sort()
          .reduce((r, n) => ((r[n] = e[n]), r), {})
      : e
  );
}
function jt(s, t) {
  return (
    s === t ||
    (typeof s == typeof t &&
      !(!s || !t || typeof s != "object" || typeof t != "object") &&
      !Object.keys(t).some((e) => !jt(s[e], t[e])))
  );
}
function ys(s, t) {
  if (s === t) return s;
  const e = Xe(s) && Xe(t);
  if (e || (Oe(s) && Oe(t))) {
    const r = e ? s : Object.keys(s),
      n = r.length,
      a = e ? t : Object.keys(t),
      h = a.length,
      o = e ? [] : {};
    let l = 0;
    for (let m = 0; m < h; m++) {
      const u = e ? m : a[m];
      ((!e && r.includes(u)) || e) && s[u] === void 0 && t[u] === void 0
        ? ((o[u] = void 0), l++)
        : ((o[u] = ys(s[u], t[u])), o[u] === s[u] && s[u] !== void 0 && l++);
    }
    return n === h && l === n ? s : o;
  }
  return t;
}
function ue(s, t) {
  if (!t || Object.keys(s).length !== Object.keys(t).length) return !1;
  for (const e in s) if (s[e] !== t[e]) return !1;
  return !0;
}
function Xe(s) {
  return Array.isArray(s) && s.length === Object.keys(s).length;
}
function Oe(s) {
  if (!Ye(s)) return !1;
  const t = s.constructor;
  if (t === void 0) return !0;
  const e = t.prototype;
  return (
    !!Ye(e) &&
    !!e.hasOwnProperty("isPrototypeOf") &&
    Object.getPrototypeOf(s) === Object.prototype
  );
}
function Ye(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function we(s, t, e) {
  return typeof e.structuralSharing == "function"
    ? e.structuralSharing(s, t)
    : e.structuralSharing !== !1
    ? ys(s, t)
    : t;
}
function Ks(s, t, e = 0) {
  const r = [...s, t];
  return e && r.length > e ? r.slice(1) : r;
}
function Hs(s, t, e = 0) {
  const r = [t, ...s];
  return e && r.length > e ? r.slice(0, -1) : r;
}
var ms = Symbol(),
  vs = (s, t) =>
    !s.queryFn && t != null && t.initialPromise
      ? () => t.initialPromise
      : s.queryFn && s.queryFn !== ms
      ? s.queryFn
      : () => Promise.reject(new Error(`Missing queryFn: '${s.queryHash}'`)),
  dt,
  it,
  Et,
  rs,
  Fe = new ((rs = class extends Ut {
    constructor() {
      super();
      f(this, dt, void 0);
      f(this, it, void 0);
      f(this, Et, void 0);
      c(this, Et, (t) => {
        if (!It && window.addEventListener) {
          const e = () => t();
          return (
            window.addEventListener("visibilitychange", e, !1),
            () => {
              window.removeEventListener("visibilitychange", e);
            }
          );
        }
      });
    }
    onSubscribe() {
      i(this, it) || this.setEventListener(i(this, Et));
    }
    onUnsubscribe() {
      var t;
      this.hasListeners() ||
        ((t = i(this, it)) == null || t.call(this), c(this, it, void 0));
    }
    setEventListener(t) {
      var e;
      c(this, Et, t),
        (e = i(this, it)) == null || e.call(this),
        c(
          this,
          it,
          t((r) => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
          })
        );
    }
    setFocused(t) {
      i(this, dt) !== t && (c(this, dt, t), this.onFocus());
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach((e) => {
        e(t);
      });
    }
    isFocused() {
      var t;
      return typeof i(this, dt) == "boolean"
        ? i(this, dt)
        : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
            "hidden";
    }
  }),
  (dt = new WeakMap()),
  (it = new WeakMap()),
  (Et = new WeakMap()),
  rs)(),
  Pt,
  rt,
  Rt,
  ns,
  le = new ((ns = class extends Ut {
    constructor() {
      super();
      f(this, Pt, !0);
      f(this, rt, void 0);
      f(this, Rt, void 0);
      c(this, Rt, (t) => {
        if (!It && window.addEventListener) {
          const e = () => t(!0),
            r = () => t(!1);
          return (
            window.addEventListener("online", e, !1),
            window.addEventListener("offline", r, !1),
            () => {
              window.removeEventListener("online", e),
                window.removeEventListener("offline", r);
            }
          );
        }
      });
    }
    onSubscribe() {
      i(this, rt) || this.setEventListener(i(this, Rt));
    }
    onUnsubscribe() {
      var t;
      this.hasListeners() ||
        ((t = i(this, rt)) == null || t.call(this), c(this, rt, void 0));
    }
    setEventListener(t) {
      var e;
      c(this, Rt, t),
        (e = i(this, rt)) == null || e.call(this),
        c(this, rt, t(this.setOnline.bind(this)));
    }
    setOnline(t) {
      i(this, Pt) !== t &&
        (c(this, Pt, t),
        this.listeners.forEach((e) => {
          e(t);
        }));
    }
    isOnline() {
      return i(this, Pt);
    }
  }),
  (Pt = new WeakMap()),
  (rt = new WeakMap()),
  (Rt = new WeakMap()),
  ns)();
function Gs(s) {
  return Math.min(1e3 * ze(2, s), 3e4);
}
function gs(s) {
  return (s != null ? s : "online") !== "online" || le.isOnline();
}
var bs = class {
  constructor(s) {
    (this.revert = s == null ? void 0 : s.revert),
      (this.silent = s == null ? void 0 : s.silent);
  }
};
function ve(s) {
  return s instanceof bs;
}
function Os(s) {
  let t,
    e,
    r,
    n = !1,
    a = 0,
    h = !1;
  const o = new Promise((b, O) => {
      (e = b), (r = O);
    }),
    l = () =>
      Fe.isFocused() &&
      (s.networkMode === "always" || le.isOnline()) &&
      s.canRun(),
    m = () => gs(s.networkMode) && s.canRun(),
    u = (b) => {
      var O;
      h ||
        ((h = !0),
        (O = s.onSuccess) == null || O.call(s, b),
        t == null || t(),
        e(b));
    },
    p = (b) => {
      var O;
      h ||
        ((h = !0),
        (O = s.onError) == null || O.call(s, b),
        t == null || t(),
        r(b));
    },
    D = () =>
      new Promise((b) => {
        var O;
        (t = (P) => {
          (h || l()) && b(P);
        }),
          (O = s.onPause) == null || O.call(s);
      }).then(() => {
        var b;
        (t = void 0), h || (b = s.onContinue) == null || b.call(s);
      }),
    _ = () => {
      if (h) return;
      let b;
      const O = a === 0 ? s.initialPromise : void 0;
      try {
        b = O != null ? O : s.fn();
      } catch (P) {
        b = Promise.reject(P);
      }
      Promise.resolve(b)
        .then(u)
        .catch((P) => {
          var S, C, F;
          if (h) return;
          const q = (S = s.retry) != null ? S : It ? 0 : 3,
            M = (C = s.retryDelay) != null ? C : Gs,
            T = typeof M == "function" ? M(a, P) : M,
            y =
              q === !0 ||
              (typeof q == "number" && a < q) ||
              (typeof q == "function" && q(a, P));
          var w;
          !n && y
            ? (a++,
              (F = s.onFail) == null || F.call(s, a, P),
              ((w = T),
              new Promise((g) => {
                setTimeout(g, w);
              }))
                .then(() => (l() ? void 0 : D()))
                .then(() => {
                  n ? p(P) : _();
                }))
            : p(P);
        });
    };
  return {
    promise: o,
    cancel: (b) => {
      var O;
      h || (p(new bs(b)), (O = s.abort) == null || O.call(s));
    },
    continue: () => (t == null || t(), o),
    cancelRetry: () => {
      n = !0;
    },
    continueRetry: () => {
      n = !1;
    },
    canStart: m,
    start: () => (m() ? _() : D().then(_), o),
  };
}
var L = (function () {
    let s = [],
      t = 0,
      e = (o) => {
        o();
      },
      r = (o) => {
        o();
      },
      n = (o) => setTimeout(o, 0);
    const a = (o) => {
        t
          ? s.push(o)
          : n(() => {
              e(o);
            });
      },
      h = () => {
        const o = s;
        (s = []),
          o.length &&
            n(() => {
              r(() => {
                o.forEach((l) => {
                  e(l);
                });
              });
            });
      };
    return {
      batch: (o) => {
        let l;
        t++;
        try {
          l = o();
        } finally {
          t--, t || h();
        }
        return l;
      },
      batchCalls:
        (o) =>
        (...l) => {
          a(() => {
            o(...l);
          });
        },
      schedule: a,
      setNotifyFunction: (o) => {
        e = o;
      },
      setBatchNotifyFunction: (o) => {
        r = o;
      },
      setScheduler: (o) => {
        n = o;
      },
    };
  })(),
  ft,
  as,
  ws =
    ((as = class {
      constructor() {
        f(this, ft, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          be(this.gcTime) &&
            c(
              this,
              ft,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(s) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          s != null ? s : It ? 1 / 0 : 3e5
        );
      }
      clearGcTimeout() {
        i(this, ft) && (clearTimeout(i(this, ft)), c(this, ft, void 0));
      }
    }),
    (ft = new WeakMap()),
    as),
  Ct,
  Dt,
  j,
  I,
  Vt,
  pt,
  N,
  Y,
  os,
  js =
    ((os = class extends ws {
      constructor(t) {
        super();
        f(this, N);
        f(this, Ct, void 0);
        f(this, Dt, void 0);
        f(this, j, void 0);
        f(this, I, void 0);
        f(this, Vt, void 0);
        f(this, pt, void 0);
        c(this, pt, !1),
          c(this, Vt, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          c(this, j, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          c(
            this,
            Ct,
            t.state ||
              (function (e) {
                const r =
                    typeof e.initialData == "function"
                      ? e.initialData()
                      : e.initialData,
                  n = r !== void 0,
                  a = n
                    ? typeof e.initialDataUpdatedAt == "function"
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: r,
                  dataUpdateCount: 0,
                  dataUpdatedAt: n ? (a != null ? a : Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: n ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)
          ),
          (this.state = i(this, Ct)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = i(this, I)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = d(d({}, i(this, Vt)), t)),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        this.observers.length ||
          this.state.fetchStatus !== "idle" ||
          i(this, j).remove(this);
      }
      setData(t, e) {
        const r = we(this.state.data, t, this.options);
        return (
          v(this, N, Y).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: e == null ? void 0 : e.updatedAt,
            manual: e == null ? void 0 : e.manual,
          }),
          r
        );
      }
      setState(t, e) {
        v(this, N, Y).call(this, {
          type: "setState",
          state: t,
          setStateOptions: e,
        });
      }
      cancel(t) {
        var r, n;
        const e = (r = i(this, I)) == null ? void 0 : r.promise;
        return (
          (n = i(this, I)) == null || n.cancel(t),
          e ? e.then(V).catch(V) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(i(this, Ct));
      }
      isActive() {
        return this.observers.some((t) => B(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return (
          !!this.state.isInvalidated ||
          (this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0)
        );
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !ps(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var e;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (e = i(this, I)) == null || e.continue();
      }
      onOnline() {
        var e;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (e = i(this, I)) == null || e.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          i(this, j).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((e) => e !== t)),
          this.observers.length ||
            (i(this, I) &&
              (i(this, pt)
                ? i(this, I).cancel({ revert: !0 })
                : i(this, I).cancelRetry()),
            this.scheduleGc()),
          i(this, j).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          v(this, N, Y).call(this, { type: "invalidate" });
      }
      fetch(t, e) {
        var o, l, m;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && e != null && e.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (i(this, I))
            return i(this, I).continueRetry(), i(this, I).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const u = this.observers.find((p) => p.options.queryFn);
          u && this.setOptions(u.options);
        }
        const r = new AbortController(),
          n = (u) => {
            Object.defineProperty(u, "signal", {
              enumerable: !0,
              get: () => (c(this, pt, !0), r.signal),
            });
          },
          a = {
            fetchOptions: e,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: () => {
              const u = vs(this.options, e),
                p = { queryKey: this.queryKey, meta: this.meta };
              return (
                n(p),
                c(this, pt, !1),
                this.options.persister
                  ? this.options.persister(u, p, this)
                  : u(p)
              );
            },
          };
        n(a),
          (o = this.options.behavior) == null || o.onFetch(a, this),
          c(this, Dt, this.state),
          (this.state.fetchStatus !== "idle" &&
            this.state.fetchMeta ===
              ((l = a.fetchOptions) == null ? void 0 : l.meta)) ||
            v(this, N, Y).call(this, {
              type: "fetch",
              meta: (m = a.fetchOptions) == null ? void 0 : m.meta,
            });
        const h = (u) => {
          var p, D, _, b;
          (ve(u) && u.silent) ||
            v(this, N, Y).call(this, { type: "error", error: u }),
            ve(u) ||
              ((D = (p = i(this, j).config).onError) == null ||
                D.call(p, u, this),
              (b = (_ = i(this, j).config).onSettled) == null ||
                b.call(_, this.state.data, u, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          c(
            this,
            I,
            Os({
              initialPromise: e == null ? void 0 : e.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (u) => {
                var p, D, _, b;
                u !== void 0
                  ? (this.setData(u),
                    (D = (p = i(this, j).config).onSuccess) == null ||
                      D.call(p, u, this),
                    (b = (_ = i(this, j).config).onSettled) == null ||
                      b.call(_, u, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1))
                  : h(new Error(`${this.queryHash} data is undefined`));
              },
              onError: h,
              onFail: (u, p) => {
                v(this, N, Y).call(this, {
                  type: "failed",
                  failureCount: u,
                  error: p,
                });
              },
              onPause: () => {
                v(this, N, Y).call(this, { type: "pause" });
              },
              onContinue: () => {
                v(this, N, Y).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          i(this, I).start()
        );
      }
    }),
    (Ct = new WeakMap()),
    (Dt = new WeakMap()),
    (j = new WeakMap()),
    (I = new WeakMap()),
    (Vt = new WeakMap()),
    (pt = new WeakMap()),
    (N = new WeakSet()),
    (Y = function (t) {
      (this.state = ((e) => {
        var r, n;
        switch (t.type) {
          case "failed":
            return R(d({}, e), {
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            });
          case "pause":
            return R(d({}, e), { fetchStatus: "paused" });
          case "continue":
            return R(d({}, e), { fetchStatus: "fetching" });
          case "fetch":
            return R(d(d({}, e), Ss(e.data, this.options)), {
              fetchMeta: (r = t.meta) != null ? r : null,
            });
          case "success":
            return d(
              R(d({}, e), {
                data: t.data,
                dataUpdateCount: e.dataUpdateCount + 1,
                dataUpdatedAt: (n = t.dataUpdatedAt) != null ? n : Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
              }),
              !t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }
            );
          case "error":
            const a = t.error;
            return ve(a) && a.revert && i(this, Dt)
              ? R(d({}, i(this, Dt)), { fetchStatus: "idle" })
              : R(d({}, e), {
                  error: a,
                  errorUpdateCount: e.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: e.fetchFailureCount + 1,
                  fetchFailureReason: a,
                  fetchStatus: "idle",
                  status: "error",
                });
          case "invalidate":
            return R(d({}, e), { isInvalidated: !0 });
          case "setState":
            return d(d({}, e), t.state);
        }
      })(this.state)),
        L.batch(() => {
          this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            i(this, j).notify({ query: this, type: "updated", action: t });
        });
    }),
    os);
function Ss(s, t) {
  return d(
    {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: gs(t.networkMode) ? "fetching" : "paused",
    },
    s === void 0 && { error: null, status: "pending" }
  );
}
var W,
  us,
  Vs =
    ((us = class extends Ut {
      constructor(t = {}) {
        super();
        f(this, W, void 0);
        (this.config = t), c(this, W, new Map());
      }
      build(t, e, r) {
        var o;
        const n = e.queryKey,
          a = (o = e.queryHash) != null ? o : Te(n, e);
        let h = this.get(a);
        return (
          h ||
            ((h = new js({
              cache: this,
              queryKey: n,
              queryHash: a,
              options: t.defaultQueryOptions(e),
              state: r,
              defaultOptions: t.getQueryDefaults(n),
            })),
            this.add(h)),
          h
        );
      }
      add(t) {
        i(this, W).has(t.queryHash) ||
          (i(this, W).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const e = i(this, W).get(t.queryHash);
        e &&
          (t.destroy(),
          e === t && i(this, W).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        L.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return i(this, W).get(t);
      }
      getAll() {
        return [...i(this, W).values()];
      }
      find(t) {
        const e = d({ exact: !0 }, t);
        return this.getAll().find((r) => $e(e, r));
      }
      findAll(t = {}) {
        const e = this.getAll();
        return Object.keys(t).length > 0 ? e.filter((r) => $e(t, r)) : e;
      }
      notify(t) {
        L.batch(() => {
          this.listeners.forEach((e) => {
            e(t);
          });
        });
      }
      onFocus() {
        L.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        L.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (W = new WeakMap()),
    us),
  $,
  U,
  yt,
  J,
  st,
  hs,
  Ns =
    ((hs = class extends ws {
      constructor(t) {
        super();
        f(this, J);
        f(this, $, void 0);
        f(this, U, void 0);
        f(this, yt, void 0);
        (this.mutationId = t.mutationId),
          c(this, U, t.mutationCache),
          c(this, $, []),
          (this.state = t.state || {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: "idle",
            variables: void 0,
            submittedAt: 0,
          }),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        i(this, $).includes(t) ||
          (i(this, $).push(t),
          this.clearGcTimeout(),
          i(this, U).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        c(
          this,
          $,
          i(this, $).filter((e) => e !== t)
        ),
          this.scheduleGc(),
          i(this, U).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        i(this, $).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : i(this, U).remove(this));
      }
      continue() {
        var t, e;
        return (e = (t = i(this, yt)) == null ? void 0 : t.continue()) != null
          ? e
          : this.execute(this.state.variables);
      }
      execute(t) {
        return lt(this, null, function* () {
          var n, a, h, o, l, m, u, p, D, _, b, O, P, q, M, T, y, w, S, C, F;
          c(
            this,
            yt,
            Os({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (g, x) => {
                v(this, J, st).call(this, {
                  type: "failed",
                  failureCount: g,
                  error: x,
                });
              },
              onPause: () => {
                v(this, J, st).call(this, { type: "pause" });
              },
              onContinue: () => {
                v(this, J, st).call(this, { type: "continue" });
              },
              retry: (n = this.options.retry) != null ? n : 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => i(this, U).canRun(this),
            })
          );
          const e = this.state.status === "pending",
            r = !i(this, yt).canStart();
          try {
            if (!e) {
              v(this, J, st).call(this, {
                type: "pending",
                variables: t,
                isPaused: r,
              }),
                yield (h = (a = i(this, U).config).onMutate) == null
                  ? void 0
                  : h.call(a, t, this);
              const x = yield (l = (o = this.options).onMutate) == null
                ? void 0
                : l.call(o, t);
              x !== this.state.context &&
                v(this, J, st).call(this, {
                  type: "pending",
                  context: x,
                  variables: t,
                  isPaused: r,
                });
            }
            const g = yield i(this, yt).start();
            return (
              yield (u = (m = i(this, U).config).onSuccess) == null
                ? void 0
                : u.call(m, g, t, this.state.context, this),
              yield (D = (p = this.options).onSuccess) == null
                ? void 0
                : D.call(p, g, t, this.state.context),
              yield (b = (_ = i(this, U).config).onSettled) == null
                ? void 0
                : b.call(
                    _,
                    g,
                    null,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
              yield (P = (O = this.options).onSettled) == null
                ? void 0
                : P.call(O, g, null, t, this.state.context),
              v(this, J, st).call(this, { type: "success", data: g }),
              g
            );
          } catch (g) {
            try {
              throw (
                (yield (M = (q = i(this, U).config).onError) == null
                  ? void 0
                  : M.call(q, g, t, this.state.context, this),
                yield (y = (T = this.options).onError) == null
                  ? void 0
                  : y.call(T, g, t, this.state.context),
                yield (S = (w = i(this, U).config).onSettled) == null
                  ? void 0
                  : S.call(
                      w,
                      void 0,
                      g,
                      this.state.variables,
                      this.state.context,
                      this
                    ),
                yield (F = (C = this.options).onSettled) == null
                  ? void 0
                  : F.call(C, void 0, g, t, this.state.context),
                g)
              );
            } finally {
              v(this, J, st).call(this, { type: "error", error: g });
            }
          } finally {
            i(this, U).runNext(this);
          }
        });
      }
    }),
    ($ = new WeakMap()),
    (U = new WeakMap()),
    (yt = new WeakMap()),
    (J = new WeakSet()),
    (st = function (t) {
      (this.state = ((e) => {
        switch (t.type) {
          case "failed":
            return R(d({}, e), {
              failureCount: t.failureCount,
              failureReason: t.error,
            });
          case "pause":
            return R(d({}, e), { isPaused: !0 });
          case "continue":
            return R(d({}, e), { isPaused: !1 });
          case "pending":
            return R(d({}, e), {
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            });
          case "success":
            return R(d({}, e), {
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            });
          case "error":
            return R(d({}, e), {
              data: void 0,
              error: t.error,
              failureCount: e.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            });
        }
      })(this.state)),
        L.batch(() => {
          i(this, $).forEach((e) => {
            e.onMutationUpdate(t);
          }),
            i(this, U).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    hs),
  G,
  Nt,
  cs,
  Bs =
    ((cs = class extends Ut {
      constructor(t = {}) {
        super();
        f(this, G, void 0);
        f(this, Nt, void 0);
        (this.config = t), c(this, G, new Map()), c(this, Nt, Date.now());
      }
      build(t, e, r) {
        const n = new Ns({
          mutationCache: this,
          mutationId: ++ae(this, Nt)._,
          options: t.defaultMutationOptions(e),
          state: r,
        });
        return this.add(n), n;
      }
      add(t) {
        var n;
        const e = oe(t),
          r = (n = i(this, G).get(e)) != null ? n : [];
        r.push(t),
          i(this, G).set(e, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const e = oe(t);
        if (i(this, G).has(e)) {
          const n =
            (r = i(this, G).get(e)) == null ? void 0 : r.filter((a) => a !== t);
          n && (n.length === 0 ? i(this, G).delete(e) : i(this, G).set(e, n));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const e =
          (r = i(this, G).get(oe(t))) == null
            ? void 0
            : r.find((n) => n.state.status === "pending");
        return !e || e === t;
      }
      runNext(t) {
        var r, n;
        const e =
          (r = i(this, G).get(oe(t))) == null
            ? void 0
            : r.find((a) => a !== t && a.state.isPaused);
        return (n = e == null ? void 0 : e.continue()) != null
          ? n
          : Promise.resolve();
      }
      clear() {
        L.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...i(this, G).values()].flat();
      }
      find(t) {
        const e = d({ exact: !0 }, t);
        return this.getAll().find((r) => Je(e, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((e) => Je(t, e));
      }
      notify(t) {
        L.batch(() => {
          this.listeners.forEach((e) => {
            e(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((e) => e.state.isPaused);
        return L.batch(() => Promise.all(t.map((e) => e.continue().catch(V))));
      }
    }),
    (G = new WeakMap()),
    (Nt = new WeakMap()),
    cs);
function oe(s) {
  var t, e;
  return (e = (t = s.options.scope) == null ? void 0 : t.id) != null
    ? e
    : String(s.mutationId);
}
function zs(s) {
  return {
    onFetch: (t, e) => {
      const r = () =>
        lt(this, null, function* () {
          var _, b, O, P, q, M;
          const n = t.options,
            a =
              (O =
                (b = (_ = t.fetchOptions) == null ? void 0 : _.meta) == null
                  ? void 0
                  : b.fetchMore) == null
                ? void 0
                : O.direction,
            h = ((P = t.state.data) == null ? void 0 : P.pages) || [],
            o = ((q = t.state.data) == null ? void 0 : q.pageParams) || [],
            l = { pages: [], pageParams: [] };
          let m = !1;
          const u = vs(t.options, t.fetchOptions),
            p = (T, y, w) =>
              lt(this, null, function* () {
                if (m) return Promise.reject();
                if (y == null && T.pages.length) return Promise.resolve(T);
                const S = {
                  queryKey: t.queryKey,
                  pageParam: y,
                  direction: w ? "backward" : "forward",
                  meta: t.options.meta,
                };
                var C;
                (C = S),
                  Object.defineProperty(C, "signal", {
                    enumerable: !0,
                    get: () => (
                      t.signal.aborted
                        ? (m = !0)
                        : t.signal.addEventListener("abort", () => {
                            m = !0;
                          }),
                      t.signal
                    ),
                  });
                const F = yield u(S),
                  { maxPages: g } = t.options,
                  x = w ? Hs : Ks;
                return {
                  pages: x(T.pages, F, g),
                  pageParams: x(T.pageParams, y, g),
                };
              });
          let D;
          if (a && h.length) {
            const T = a === "backward",
              y = { pages: h, pageParams: o },
              w = (T ? Ws : Ze)(n, y);
            D = yield p(y, w, T);
          } else {
            D = yield p(l, (M = o[0]) != null ? M : n.initialPageParam);
            const T = s != null ? s : h.length;
            for (let y = 1; y < T; y++) {
              const w = Ze(n, D);
              D = yield p(D, w);
            }
          }
          return D;
        });
      t.options.persister
        ? (t.fetchFn = () => {
            var n, a;
            return (a = (n = t.options).persister) == null
              ? void 0
              : a.call(
                  n,
                  r,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  e
                );
          })
        : (t.fetchFn = r);
    },
  };
}
function Ze(s, { pages: t, pageParams: e }) {
  const r = t.length - 1;
  return s.getNextPageParam(t[r], t, e[r], e);
}
function Ws(s, { pages: t, pageParams: e }) {
  var r;
  return (r = s.getPreviousPageParam) == null
    ? void 0
    : r.call(s, t[0], t, e[0], e);
}
var A,
  nt,
  at,
  At,
  _t,
  ot,
  qt,
  Tt,
  ls,
  $s =
    ((ls = class {
      constructor(s = {}) {
        f(this, A, void 0);
        f(this, nt, void 0);
        f(this, at, void 0);
        f(this, At, void 0);
        f(this, _t, void 0);
        f(this, ot, void 0);
        f(this, qt, void 0);
        f(this, Tt, void 0);
        c(this, A, s.queryCache || new Vs()),
          c(this, nt, s.mutationCache || new Bs()),
          c(this, at, s.defaultOptions || {}),
          c(this, At, new Map()),
          c(this, _t, new Map()),
          c(this, ot, 0);
      }
      mount() {
        ae(this, ot)._++,
          i(this, ot) === 1 &&
            (c(
              this,
              qt,
              Fe.subscribe((s) =>
                lt(this, null, function* () {
                  s &&
                    (yield this.resumePausedMutations(), i(this, A).onFocus());
                })
              )
            ),
            c(
              this,
              Tt,
              le.subscribe((s) =>
                lt(this, null, function* () {
                  s &&
                    (yield this.resumePausedMutations(), i(this, A).onOnline());
                })
              )
            ));
      }
      unmount() {
        var s, t;
        ae(this, ot)._--,
          i(this, ot) === 0 &&
            ((s = i(this, qt)) == null || s.call(this),
            c(this, qt, void 0),
            (t = i(this, Tt)) == null || t.call(this),
            c(this, Tt, void 0));
      }
      isFetching(s) {
        return i(this, A).findAll(R(d({}, s), { fetchStatus: "fetching" }))
          .length;
      }
      isMutating(s) {
        return i(this, nt).findAll(R(d({}, s), { status: "pending" })).length;
      }
      getQueryData(s) {
        var e;
        const t = this.defaultQueryOptions({ queryKey: s });
        return (e = i(this, A).get(t.queryHash)) == null
          ? void 0
          : e.state.data;
      }
      ensureQueryData(s) {
        const t = this.getQueryData(s.queryKey);
        if (t === void 0) return this.fetchQuery(s);
        {
          const e = this.defaultQueryOptions(s),
            r = i(this, A).build(this, e);
          return (
            s.revalidateIfStale &&
              r.isStaleByTime(St(e.staleTime, r)) &&
              this.prefetchQuery(e),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(s) {
        return i(this, A)
          .findAll(s)
          .map(({ queryKey: t, state: e }) => [t, e.data]);
      }
      setQueryData(s, t, e) {
        const r = this.defaultQueryOptions({ queryKey: s }),
          n = i(this, A).get(r.queryHash),
          a = n == null ? void 0 : n.state.data,
          h = (function (o, l) {
            return typeof o == "function" ? o(l) : o;
          })(t, a);
        if (h !== void 0)
          return i(this, A)
            .build(this, r)
            .setData(h, R(d({}, e), { manual: !0 }));
      }
      setQueriesData(s, t, e) {
        return L.batch(() =>
          i(this, A)
            .findAll(s)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, e)])
        );
      }
      getQueryState(s) {
        var e;
        const t = this.defaultQueryOptions({ queryKey: s });
        return (e = i(this, A).get(t.queryHash)) == null ? void 0 : e.state;
      }
      removeQueries(s) {
        const t = i(this, A);
        L.batch(() => {
          t.findAll(s).forEach((e) => {
            t.remove(e);
          });
        });
      }
      resetQueries(s, t) {
        const e = i(this, A),
          r = d({ type: "active" }, s);
        return L.batch(
          () => (
            e.findAll(s).forEach((n) => {
              n.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(s = {}, t = {}) {
        const e = d({ revert: !0 }, t),
          r = L.batch(() =>
            i(this, A)
              .findAll(s)
              .map((n) => n.cancel(e))
          );
        return Promise.all(r).then(V).catch(V);
      }
      invalidateQueries(s = {}, t = {}) {
        return L.batch(() => {
          var r, n;
          if (
            (i(this, A)
              .findAll(s)
              .forEach((a) => {
                a.invalidate();
              }),
            s.refetchType === "none")
          )
            return Promise.resolve();
          const e = R(d({}, s), {
            type:
              (n = (r = s.refetchType) != null ? r : s.type) != null
                ? n
                : "active",
          });
          return this.refetchQueries(e, t);
        });
      }
      refetchQueries(s = {}, t) {
        var n;
        const e = R(d({}, t), {
            cancelRefetch:
              (n = t == null ? void 0 : t.cancelRefetch) != null ? n : !0,
          }),
          r = L.batch(() =>
            i(this, A)
              .findAll(s)
              .filter((a) => !a.isDisabled())
              .map((a) => {
                let h = a.fetch(void 0, e);
                return (
                  e.throwOnError || (h = h.catch(V)),
                  a.state.fetchStatus === "paused" ? Promise.resolve() : h
                );
              })
          );
        return Promise.all(r).then(V);
      }
      fetchQuery(s) {
        const t = this.defaultQueryOptions(s);
        t.retry === void 0 && (t.retry = !1);
        const e = i(this, A).build(this, t);
        return e.isStaleByTime(St(t.staleTime, e))
          ? e.fetch(t)
          : Promise.resolve(e.state.data);
      }
      prefetchQuery(s) {
        return this.fetchQuery(s).then(V).catch(V);
      }
      fetchInfiniteQuery(s) {
        return (s.behavior = zs(s.pages)), this.fetchQuery(s);
      }
      prefetchInfiniteQuery(s) {
        return this.fetchInfiniteQuery(s).then(V).catch(V);
      }
      resumePausedMutations() {
        return le.isOnline()
          ? i(this, nt).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return i(this, A);
      }
      getMutationCache() {
        return i(this, nt);
      }
      getDefaultOptions() {
        return i(this, at);
      }
      setDefaultOptions(s) {
        c(this, at, s);
      }
      setQueryDefaults(s, t) {
        i(this, At).set(Ot(s), { queryKey: s, defaultOptions: t });
      }
      getQueryDefaults(s) {
        const t = [...i(this, At).values()];
        let e = {};
        return (
          t.forEach((r) => {
            jt(s, r.queryKey) && (e = d(d({}, e), r.defaultOptions));
          }),
          e
        );
      }
      setMutationDefaults(s, t) {
        i(this, _t).set(Ot(s), { mutationKey: s, defaultOptions: t });
      }
      getMutationDefaults(s) {
        const t = [...i(this, _t).values()];
        let e = {};
        return (
          t.forEach((r) => {
            jt(s, r.mutationKey) && (e = d(d({}, e), r.defaultOptions));
          }),
          e
        );
      }
      defaultQueryOptions(s) {
        if (s._defaulted) return s;
        const t = R(
          d(
            d(d({}, i(this, at).queries), this.getQueryDefaults(s.queryKey)),
            s
          ),
          { _defaulted: !0 }
        );
        return (
          t.queryHash || (t.queryHash = Te(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === ms && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(s) {
        return s != null && s._defaulted
          ? s
          : R(
              d(
                d(
                  d({}, i(this, at).mutations),
                  (s == null ? void 0 : s.mutationKey) &&
                    this.getMutationDefaults(s.mutationKey)
                ),
                s
              ),
              { _defaulted: !0 }
            );
      }
      clear() {
        i(this, A).clear(), i(this, nt).clear();
      }
    }),
    (A = new WeakMap()),
    (nt = new WeakMap()),
    (at = new WeakMap()),
    (At = new WeakMap()),
    (_t = new WeakMap()),
    (ot = new WeakMap()),
    (qt = new WeakMap()),
    (Tt = new WeakMap()),
    ls),
  K,
  E,
  Bt,
  k,
  mt,
  Ft,
  X,
  zt,
  Lt,
  Mt,
  vt,
  gt,
  ut,
  xt,
  bt,
  Ht,
  Wt,
  Se,
  $t,
  Ee,
  Jt,
  Pe,
  Xt,
  Re,
  Yt,
  Ce,
  Zt,
  De,
  te,
  Ae,
  fe,
  Es,
  ds,
  Js =
    ((ds = class extends Ut {
      constructor(t, e) {
        super();
        f(this, bt);
        f(this, Wt);
        f(this, $t);
        f(this, Jt);
        f(this, Xt);
        f(this, Yt);
        f(this, Zt);
        f(this, te);
        f(this, fe);
        f(this, K, void 0);
        f(this, E, void 0);
        f(this, Bt, void 0);
        f(this, k, void 0);
        f(this, mt, void 0);
        f(this, Ft, void 0);
        f(this, X, void 0);
        f(this, zt, void 0);
        f(this, Lt, void 0);
        f(this, Mt, void 0);
        f(this, vt, void 0);
        f(this, gt, void 0);
        f(this, ut, void 0);
        f(this, xt, new Set());
        (this.options = e),
          c(this, K, t),
          c(this, X, null),
          this.bindMethods(),
          this.setOptions(e);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (i(this, E).addObserver(this),
          ts(i(this, E), this.options)
            ? v(this, bt, Ht).call(this)
            : this.updateResult(),
          v(this, Xt, Re).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return _e(i(this, E), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return _e(i(this, E), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          v(this, Yt, Ce).call(this),
          v(this, Zt, De).call(this),
          i(this, E).removeObserver(this);
      }
      setOptions(t, e) {
        const r = this.options,
          n = i(this, E);
        if (
          ((this.options = i(this, K).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof B(this.options.enabled, i(this, E)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        v(this, te, Ae).call(this),
          i(this, E).setOptions(this.options),
          r._defaulted &&
            !ue(this.options, r) &&
            i(this, K)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: i(this, E),
                observer: this,
              });
        const a = this.hasListeners();
        a && es(i(this, E), n, this.options, r) && v(this, bt, Ht).call(this),
          this.updateResult(e),
          !a ||
            (i(this, E) === n &&
              B(this.options.enabled, i(this, E)) ===
                B(r.enabled, i(this, E)) &&
              St(this.options.staleTime, i(this, E)) ===
                St(r.staleTime, i(this, E))) ||
            v(this, Wt, Se).call(this);
        const h = v(this, $t, Ee).call(this);
        !a ||
          (i(this, E) === n &&
            B(this.options.enabled, i(this, E)) === B(r.enabled, i(this, E)) &&
            h === i(this, ut)) ||
          v(this, Jt, Pe).call(this, h);
      }
      getOptimisticResult(t) {
        const e = i(this, K).getQueryCache().build(i(this, K), t),
          r = this.createResult(e, t);
        return (
          (function (n, a) {
            return !ue(n.getCurrentResult(), a);
          })(this, r) &&
            (c(this, k, r),
            c(this, Ft, this.options),
            c(this, mt, i(this, E).state)),
          r
        );
      }
      getCurrentResult() {
        return i(this, k);
      }
      trackResult(t, e) {
        const r = {};
        return (
          Object.keys(t).forEach((n) => {
            Object.defineProperty(r, n, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(n), e == null || e(n), t[n]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        i(this, xt).add(t);
      }
      getCurrentQuery() {
        return i(this, E);
      }
      refetch(e = {}) {
        var t = Kt(e, []);
        return this.fetch(d({}, t));
      }
      fetchOptimistic(t) {
        const e = i(this, K).defaultQueryOptions(t),
          r = i(this, K).getQueryCache().build(i(this, K), e);
        return (
          (r.isFetchingOptimistic = !0),
          r.fetch().then(() => this.createResult(r, e))
        );
      }
      fetch(t) {
        var e;
        return v(this, bt, Ht)
          .call(
            this,
            R(d({}, t), {
              cancelRefetch: (e = t.cancelRefetch) != null ? e : !0,
            })
          )
          .then(() => (this.updateResult(), i(this, k)));
      }
      createResult(t, e) {
        var w;
        const r = i(this, E),
          n = this.options,
          a = i(this, k),
          h = i(this, mt),
          o = i(this, Ft),
          l = t !== r ? t.state : i(this, Bt),
          { state: m } = t;
        let u,
          p = d({}, m),
          D = !1;
        if (e._optimisticResults) {
          const S = this.hasListeners(),
            C = !S && ts(t, e),
            F = S && es(t, r, e, n);
          (C || F) && (p = d(d({}, p), Ss(m.data, t.options))),
            e._optimisticResults === "isRestoring" && (p.fetchStatus = "idle");
        }
        let { error: _, errorUpdatedAt: b, status: O } = p;
        if (e.select && p.data !== void 0)
          if (
            a &&
            p.data === (h == null ? void 0 : h.data) &&
            e.select === i(this, zt)
          )
            u = i(this, Lt);
          else
            try {
              c(this, zt, e.select),
                (u = e.select(p.data)),
                (u = we(a == null ? void 0 : a.data, u, e)),
                c(this, Lt, u),
                c(this, X, null);
            } catch (S) {
              c(this, X, S);
            }
        else u = p.data;
        if (e.placeholderData !== void 0 && u === void 0 && O === "pending") {
          let S;
          if (
            a != null &&
            a.isPlaceholderData &&
            e.placeholderData === (o == null ? void 0 : o.placeholderData)
          )
            S = a.data;
          else if (
            ((S =
              typeof e.placeholderData == "function"
                ? e.placeholderData(
                    (w = i(this, Mt)) == null ? void 0 : w.state.data,
                    i(this, Mt)
                  )
                : e.placeholderData),
            e.select && S !== void 0)
          )
            try {
              (S = e.select(S)), c(this, X, null);
            } catch (C) {
              c(this, X, C);
            }
          S !== void 0 &&
            ((O = "success"),
            (u = we(a == null ? void 0 : a.data, S, e)),
            (D = !0));
        }
        i(this, X) &&
          ((_ = i(this, X)),
          (u = i(this, Lt)),
          (b = Date.now()),
          (O = "error"));
        const P = p.fetchStatus === "fetching",
          q = O === "pending",
          M = O === "error",
          T = q && P,
          y = u !== void 0;
        return {
          status: O,
          fetchStatus: p.fetchStatus,
          isPending: q,
          isSuccess: O === "success",
          isError: M,
          isInitialLoading: T,
          isLoading: T,
          data: u,
          dataUpdatedAt: p.dataUpdatedAt,
          error: _,
          errorUpdatedAt: b,
          failureCount: p.fetchFailureCount,
          failureReason: p.fetchFailureReason,
          errorUpdateCount: p.errorUpdateCount,
          isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
          isFetchedAfterMount:
            p.dataUpdateCount > l.dataUpdateCount ||
            p.errorUpdateCount > l.errorUpdateCount,
          isFetching: P,
          isRefetching: P && !q,
          isLoadingError: M && !y,
          isPaused: p.fetchStatus === "paused",
          isPlaceholderData: D,
          isRefetchError: M && y,
          isStale: Le(t, e),
          refetch: this.refetch,
        };
      }
      updateResult(t) {
        const e = i(this, k),
          r = this.createResult(i(this, E), this.options);
        if (
          (c(this, mt, i(this, E).state),
          c(this, Ft, this.options),
          i(this, mt).data !== void 0 && c(this, Mt, i(this, E)),
          ue(r, e))
        )
          return;
        c(this, k, r);
        const n = {};
        (t == null ? void 0 : t.listeners) !== !1 &&
          (() => {
            if (!e) return !0;
            const { notifyOnChangeProps: a } = this.options,
              h = typeof a == "function" ? a() : a;
            if (h === "all" || (!h && !i(this, xt).size)) return !0;
            const o = new Set(h != null ? h : i(this, xt));
            return (
              this.options.throwOnError && o.add("error"),
              Object.keys(i(this, k)).some((l) => {
                const m = l;
                return i(this, k)[m] !== e[m] && o.has(m);
              })
            );
          })() &&
          (n.listeners = !0),
          v(this, fe, Es).call(this, d(d({}, n), t));
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && v(this, Xt, Re).call(this);
      }
    }),
    (K = new WeakMap()),
    (E = new WeakMap()),
    (Bt = new WeakMap()),
    (k = new WeakMap()),
    (mt = new WeakMap()),
    (Ft = new WeakMap()),
    (X = new WeakMap()),
    (zt = new WeakMap()),
    (Lt = new WeakMap()),
    (Mt = new WeakMap()),
    (vt = new WeakMap()),
    (gt = new WeakMap()),
    (ut = new WeakMap()),
    (xt = new WeakMap()),
    (bt = new WeakSet()),
    (Ht = function (t) {
      v(this, te, Ae).call(this);
      let e = i(this, E).fetch(this.options, t);
      return (t != null && t.throwOnError) || (e = e.catch(V)), e;
    }),
    (Wt = new WeakSet()),
    (Se = function () {
      v(this, Yt, Ce).call(this);
      const t = St(this.options.staleTime, i(this, E));
      if (It || i(this, k).isStale || !be(t)) return;
      const e = ps(i(this, k).dataUpdatedAt, t) + 1;
      c(
        this,
        vt,
        setTimeout(() => {
          i(this, k).isStale || this.updateResult();
        }, e)
      );
    }),
    ($t = new WeakSet()),
    (Ee = function () {
      var t;
      return (t =
        typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(i(this, E))
          : this.options.refetchInterval) != null
        ? t
        : !1;
    }),
    (Jt = new WeakSet()),
    (Pe = function (t) {
      v(this, Zt, De).call(this),
        c(this, ut, t),
        !It &&
          B(this.options.enabled, i(this, E)) !== !1 &&
          be(i(this, ut)) &&
          i(this, ut) !== 0 &&
          c(
            this,
            gt,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || Fe.isFocused()) &&
                v(this, bt, Ht).call(this);
            }, i(this, ut))
          );
    }),
    (Xt = new WeakSet()),
    (Re = function () {
      v(this, Wt, Se).call(this),
        v(this, Jt, Pe).call(this, v(this, $t, Ee).call(this));
    }),
    (Yt = new WeakSet()),
    (Ce = function () {
      i(this, vt) && (clearTimeout(i(this, vt)), c(this, vt, void 0));
    }),
    (Zt = new WeakSet()),
    (De = function () {
      i(this, gt) && (clearInterval(i(this, gt)), c(this, gt, void 0));
    }),
    (te = new WeakSet()),
    (Ae = function () {
      const t = i(this, K).getQueryCache().build(i(this, K), this.options);
      if (t === i(this, E)) return;
      const e = i(this, E);
      c(this, E, t),
        c(this, Bt, t.state),
        this.hasListeners() &&
          (e == null || e.removeObserver(this), t.addObserver(this));
    }),
    (fe = new WeakSet()),
    (Es = function (t) {
      L.batch(() => {
        t.listeners &&
          this.listeners.forEach((e) => {
            e(i(this, k));
          }),
          i(this, K)
            .getQueryCache()
            .notify({ query: i(this, E), type: "observerResultsUpdated" });
      });
    }),
    ds);
function ts(s, t) {
  return (
    (function (e, r) {
      return (
        B(r.enabled, e) !== !1 &&
        e.state.data === void 0 &&
        !(e.state.status === "error" && r.retryOnMount === !1)
      );
    })(s, t) ||
    (s.state.data !== void 0 && _e(s, t, t.refetchOnMount))
  );
}
function _e(s, t, e) {
  if (B(t.enabled, s) !== !1) {
    const r = typeof e == "function" ? e(s) : e;
    return r === "always" || (r !== !1 && Le(s, t));
  }
  return !1;
}
function es(s, t, e, r) {
  return (
    (s !== t || B(r.enabled, s) === !1) &&
    (!e.suspense || s.state.status !== "error") &&
    Le(s, e)
  );
}
function Le(s, t) {
  return B(t.enabled, s) !== !1 && s.isStaleByTime(St(t.staleTime, s));
}
var ht,
  ct,
  H,
  Z,
  Qt,
  he,
  ee,
  qe,
  fs,
  Xs =
    ((fs = class extends Ut {
      constructor(t, e) {
        super();
        f(this, Qt);
        f(this, ee);
        f(this, ht, void 0);
        f(this, ct, void 0);
        f(this, H, void 0);
        f(this, Z, void 0);
        c(this, ht, t),
          this.setOptions(e),
          this.bindMethods(),
          v(this, Qt, he).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(t) {
        var r;
        const e = this.options;
        (this.options = i(this, ht).defaultMutationOptions(t)),
          ue(this.options, e) ||
            i(this, ht)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: i(this, H),
                observer: this,
              }),
          e != null &&
          e.mutationKey &&
          this.options.mutationKey &&
          Ot(e.mutationKey) !== Ot(this.options.mutationKey)
            ? this.reset()
            : ((r = i(this, H)) == null ? void 0 : r.state.status) ===
                "pending" && i(this, H).setOptions(this.options);
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          (t = i(this, H)) == null ||
          t.removeObserver(this);
      }
      onMutationUpdate(t) {
        v(this, Qt, he).call(this), v(this, ee, qe).call(this, t);
      }
      getCurrentResult() {
        return i(this, ct);
      }
      reset() {
        var t;
        (t = i(this, H)) == null || t.removeObserver(this),
          c(this, H, void 0),
          v(this, Qt, he).call(this),
          v(this, ee, qe).call(this);
      }
      mutate(t, e) {
        var r;
        return (
          c(this, Z, e),
          (r = i(this, H)) == null || r.removeObserver(this),
          c(
            this,
            H,
            i(this, ht).getMutationCache().build(i(this, ht), this.options)
          ),
          i(this, H).addObserver(this),
          i(this, H).execute(t)
        );
      }
    }),
    (ht = new WeakMap()),
    (ct = new WeakMap()),
    (H = new WeakMap()),
    (Z = new WeakMap()),
    (Qt = new WeakSet()),
    (he = function () {
      var e, r;
      const t =
        (r = (e = i(this, H)) == null ? void 0 : e.state) != null
          ? r
          : {
              context: void 0,
              data: void 0,
              error: null,
              failureCount: 0,
              failureReason: null,
              isPaused: !1,
              status: "idle",
              variables: void 0,
              submittedAt: 0,
            };
      c(
        this,
        ct,
        R(d({}, t), {
          isPending: t.status === "pending",
          isSuccess: t.status === "success",
          isError: t.status === "error",
          isIdle: t.status === "idle",
          mutate: this.mutate,
          reset: this.reset,
        })
      );
    }),
    (ee = new WeakSet()),
    (qe = function (t) {
      L.batch(() => {
        var e, r, n, a, h, o, l, m;
        if (i(this, Z) && this.hasListeners()) {
          const u = i(this, ct).variables,
            p = i(this, ct).context;
          (t == null ? void 0 : t.type) === "success"
            ? ((r = (e = i(this, Z)).onSuccess) == null ||
                r.call(e, t.data, u, p),
              (a = (n = i(this, Z)).onSettled) == null ||
                a.call(n, t.data, null, u, p))
            : (t == null ? void 0 : t.type) === "error" &&
              ((o = (h = i(this, Z)).onError) == null ||
                o.call(h, t.error, u, p),
              (m = (l = i(this, Z)).onSettled) == null ||
                m.call(l, void 0, t.error, u, p));
        }
        this.listeners.forEach((u) => {
          u(i(this, ct));
        });
      });
    }),
    fs);
function Ys(s) {
  return s;
}
const Zs = globalThis._bc,
  {
    $DEVCOMP: oo,
    $PROXY: uo,
    $TRACK: ho,
    DEV: co,
    ErrorBoundary: lo,
    For: fo,
    Index: po,
    Match: yo,
    Show: mo,
    Suspense: vo,
    SuspenseList: go,
    Switch: bo,
    batch: Oo,
    cancelCallback: wo,
    catchError: So,
    children: Eo,
    createComponent: Po,
    createComputed: Gt,
    createContext: Ps,
    createDeferred: Ro,
    createEffect: Co,
    createMemo: de,
    createReaction: Do,
    createRenderEffect: ti,
    createResource: ei,
    createRoot: Ao,
    createSelector: _o,
    createSignal: si,
    createUniqueId: qo,
    enableExternalSource: To,
    enableHydration: Fo,
    enableScheduling: Lo,
    equalFn: Mo,
    from: xo,
    getListener: Qo,
    getOwner: Io,
    indexArray: Uo,
    lazy: ko,
    mapArray: Ko,
    mergeProps: Ho,
    observable: Go,
    on: ce,
    onCleanup: Me,
    onError: jo,
    onMount: Vo,
    requestCallback: No,
    resetErrorBoundaries: Bo,
    runWithOwner: zo,
    sharedConfig: Wo,
    splitProps: $o,
    startTransition: Jo,
    untrack: Xo,
    useContext: Rs,
    useTransition: Yo,
  } = Zs.dxzurp,
  ii = globalThis._bc,
  {
    $RAW: Zo,
    DEV: tu,
    createMutable: eu,
    createStore: Cs,
    modifyMutable: su,
    produce: iu,
    reconcile: ri,
    unwrap: Ds,
  } = ii.inqq9w;
var As = Ps(void 0),
  _s = (s) => {
    if (s) return s;
    const t = Rs(As);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t();
  },
  ni = (s) => (
    ti(
      (t) => (
        t == null || t(), s.client.mount(), s.client.unmount.bind(s.client)
      )
    ),
    Me(() => s.client.unmount()),
    ge(As.Provider, {
      value: () => s.client,
      get children() {
        return s.children;
      },
    })
  );
function qs(s, t) {
  return typeof s == "function" ? s(...t) : !!s;
}
function ai() {}
var Ts = Ps(() => !1),
  oi = () => Rs(Ts);
Ts.Provider;
var ss = (s, t) => {
  if (!wt) return t;
  const e = R(d({}, Ds(t)), { refetch: void 0 });
  return (
    "fetchNextPage" in t &&
      ((e.fetchNextPage = void 0), (e.fetchPreviousPage = void 0)),
    (e.hydrationData = d(
      { state: s.state, queryKey: s.queryKey, queryHash: s.queryHash },
      s.meta && { meta: s.meta }
    )),
    e
  );
};
function ui(s, t, e) {
  const r = de(() => _s(e == null ? void 0 : e())),
    n = oi();
  let a = !1;
  const h = de(() => {
      const y = r().defaultQueryOptions(s());
      return (
        (y._optimisticResults = n() ? "isRestoring" : "optimistic"),
        (y.structuralSharing = !1),
        wt && ((y.retry = !1), (y.throwOnError = !0)),
        y
      );
    }),
    o = h(),
    [l, m] = si(new t(r(), h()));
  let u = l().getOptimisticResult(h());
  const [p, D] = Cs(u),
    _ = () => {
      a && (P == null || P(), (a = !1));
    },
    b = () =>
      l().subscribe((y) => {
        (u = y), queueMicrotask(() => T());
      });
  function O(y) {
    const w = l().options,
      S = w.reconcile;
    D((C) =>
      (function (F, g, x) {
        if (x === !1) return g;
        if (typeof x == "function") {
          const ie = x(F.data, g.data);
          return R(d({}, g), { data: ie });
        }
        let z = g.data;
        if (F.data === void 0)
          try {
            z = structuredClone(z);
          } catch (ie) {}
        const se = ri(z, { key: x })(F.data);
        return R(d({}, g), { data: se });
      })(C, y, S !== void 0 && S, w.queryHash)
    );
  }
  let P = null,
    q = null;
  const [M, { refetch: T }] = ei(
    () => {
      const y = l();
      return new Promise(
        (w, S) => (
          (q = w),
          wt
            ? (P = ((C, F) =>
                l().subscribe((g) => {
                  L.batchCalls(() => {
                    const x = l().getCurrentQuery(),
                      z = ss(x, g);
                    z.isError ? (F(z.error), _()) : (C(z), _());
                  })();
                }))(w, S))
            : P || n() || (P = b()),
          y.updateResult(),
          u.isError &&
          !u.isFetching &&
          !n() &&
          qs(y.options.throwOnError, [u.error, y.getCurrentQuery()])
            ? (O(u), S(u.error))
            : u.isLoading
            ? void O(u)
            : ((q = null), w(ss(y.getCurrentQuery(), u)))
        )
      );
    },
    {
      storage: function () {
        return [
          () => p,
          (y) => {
            const w = Ds(p);
            if (
              (typeof y == "function" && (y = y(w)),
              y == null ? void 0 : y.hydrationData)
            ) {
              const S = y,
                { hydrationData: C } = S;
              y = Kt(S, ["hydrationData"]);
            }
            O(y);
          },
        ];
      },
      get deferStream() {
        return s().deferStream;
      },
      onHydrated(y, w) {
        if (
          (w.value &&
            "hydrationData" in w.value &&
            (function (C, F, g) {
              var xe, Qe, Ie, Ue;
              if (typeof F != "object" || F === null) return;
              const x = C.getMutationCache(),
                z = C.getQueryCache(),
                se =
                  (Ue =
                    (Ie =
                      (xe = g == null ? void 0 : g.defaultOptions) == null
                        ? void 0
                        : xe.deserializeData) != null
                      ? Ie
                      : (Qe = C.getDefaultOptions().hydrate) == null
                      ? void 0
                      : Qe.deserializeData) != null
                    ? Ue
                    : Ys,
                ie = F.mutations || [],
                Fs = F.queries || [];
              ie.forEach((ye) => {
                var re = ye,
                  { state: pe } = re,
                  tt = Kt(re, ["state"]);
                var kt, et;
                x.build(
                  C,
                  d(
                    d(
                      d(
                        {},
                        (kt = C.getDefaultOptions().hydrate) == null
                          ? void 0
                          : kt.mutations
                      ),
                      (et = g == null ? void 0 : g.defaultOptions) == null
                        ? void 0
                        : et.mutations
                    ),
                    tt
                  ),
                  pe
                );
              }),
                Fs.forEach(
                  ({
                    queryKey: pe,
                    state: tt,
                    queryHash: ye,
                    meta: re,
                    promise: kt,
                  }) => {
                    var He, Ge;
                    let et = z.get(ye);
                    const ke = tt.data === void 0 ? tt.data : se(tt.data);
                    if (et) {
                      if (et.state.dataUpdatedAt < tt.dataUpdatedAt) {
                        const Ke = tt,
                          { fetchStatus: je } = Ke,
                          Ls = Kt(Ke, ["fetchStatus"]);
                        et.setState(R(d({}, Ls), { data: ke }));
                      }
                    } else
                      et = z.build(
                        C,
                        R(
                          d(
                            d(
                              {},
                              (He = C.getDefaultOptions().hydrate) == null
                                ? void 0
                                : He.queries
                            ),
                            (Ge = g == null ? void 0 : g.defaultOptions) == null
                              ? void 0
                              : Ge.queries
                          ),
                          { queryKey: pe, queryHash: ye, meta: re }
                        ),
                        R(d({}, tt), { data: ke, fetchStatus: "idle" })
                      );
                    if (kt) {
                      const je = Promise.resolve(kt).then(se);
                      et.fetch(void 0, { initialPromise: je });
                    }
                  }
                );
            })(r(), { queries: [d({}, w.value.hydrationData)] }),
          P)
        )
          return;
        const S = d({}, o);
        (!o.staleTime && o.initialData) || !w.value || (S.refetchOnMount = !1),
          l().setOptions(S),
          O(l().getOptimisticResult(S)),
          (P = b());
      },
    }
  );
  return (
    Gt(
      ce(
        r,
        (y) => {
          P && P();
          const w = new t(y, h());
          (P = b()), m(w);
        },
        { defer: !0 }
      )
    ),
    Gt(
      ce(
        n,
        (y) => {
          y || wt || T();
        },
        { defer: !0 }
      )
    ),
    Me(() => {
      wt && M.loading
        ? (a = !0)
        : (P && (P(), (P = null)), q && !wt && (q(u), (q = null)));
    }),
    Gt(
      ce(
        [l, h],
        ([y, w]) => {
          y.setOptions(w), O(y.getOptimisticResult(w)), T();
        },
        { defer: !0 }
      )
    ),
    new Proxy(p, {
      get: (y, w) => {
        var S, C;
        return w === "data"
          ? p.data !== void 0
            ? (S = M.latest) == null
              ? void 0
              : S.data
            : (C = M()) == null
            ? void 0
            : C.data
          : Reflect.get(y, w);
      },
    })
  );
}
function ru(s, t) {
  return ui(
    de(() => s()),
    Js,
    t
  );
}
function nu(s, t) {
  const e = de(() => _s(t == null ? void 0 : t())),
    r = new Xs(e(), s()),
    n = (l, m) => {
      r.mutate(l, m).catch(ai);
    },
    [a, h] = Cs(
      R(d({}, r.getCurrentResult()), {
        mutate: n,
        mutateAsync: r.getCurrentResult().mutate,
      })
    );
  Gt(() => {
    r.setOptions(s());
  }),
    Gt(
      ce(
        () => a.status,
        () => {
          if (a.isError && qs(r.options.throwOnError, [a.error])) throw a.error;
        }
      )
    );
  const o = r.subscribe((l) => {
    h(R(d({}, l), { mutate: n, mutateAsync: l.mutate }));
  });
  return Me(o), a;
}
const hi = new (class extends $s {
    constructor(s = {}) {
      super(s);
    }
  })({
    defaultOptions: {
      queries: { retry: !1, staleTime: 6e5, refetchOnWindowFocus: !0 },
    },
  }),
  au = Us(
    d(
      {
        init: () => Q(() => import("./init-be6dd53e.js"), []),
        Trading: () =>
          Q(
            () => import("./index-fdb73082.js"),
            [
              "assets/index-fdb73082.js",
              "assets/router-b8d56046.js",
              "assets/i18n-611811a6.js",
              "assets/debounce-9aa0a06b.js",
              "assets/isObject-d5c4896e.js",
              "assets/isSymbol-0edd6b24.js",
            ]
          ),
        TradingLayout: () =>
          Q(
            () => import("./Layout-b9b80a18.js"),
            [
              "assets/Layout-b9b80a18.js",
              "assets/LayoutTitle-870a6463.js",
              "assets/i18n-611811a6.js",
            ]
          ),
      },
      ((is = {
        GameLayout: () =>
          Q(
            () => import("./Layout-b58c3f24.js").then((s) => s.L),
            [
              "assets/Layout-b58c3f24.js",
              "assets/router-b8d56046.js",
              "assets/LayoutTitle-870a6463.js",
              "assets/i18n-611811a6.js",
              "assets/currency-a0e3a368.js",
              "assets/index-4897b9da.js",
              "assets/isSymbol-0edd6b24.js",
              "assets/isObject-d5c4896e.js",
              "assets/amount-af49bfc0.js",
              "assets/utils-65805dbc.js",
              "assets/Symbol-f22f521e.js",
              "assets/index-eff0ad24.js",
              "assets/LR7LBJN3-fced4fb5.js",
              "assets/index-f5a6b566.js",
              "assets/user-dc7ef1f4.js",
              "assets/game-a49e1f5b.js",
              "assets/use-coin-format-bfa33df5.js",
              "assets/config-6b289bdb.js",
            ]
          ),
        SlotsGameIframe: () =>
          Q(
            () => import("./MobileSlotsGameIframe-eecdf4ef.js"),
            [
              "assets/MobileSlotsGameIframe-eecdf4ef.js",
              "assets/LayoutTitle-870a6463.js",
              "assets/i18n-611811a6.js",
              "assets/router-b8d56046.js",
              "assets/Message-f1b40bc8.js",
              "assets/deduction-99b6c8dd.js",
              "assets/amount-af49bfc0.js",
              "assets/isObject-d5c4896e.js",
              "assets/currency-a0e3a368.js",
              "assets/index-4897b9da.js",
              "assets/isSymbol-0edd6b24.js",
              "assets/game-a49e1f5b.js",
              "assets/user-dc7ef1f4.js",
              "assets/use-coin-format-bfa33df5.js",
              "assets/utils-65805dbc.js",
              "assets/config-6b289bdb.js",
            ]
          ),
        CreatorDetail: () =>
          Q(
            () => import("./CreatorDetail-061d47e0.js"),
            [
              "assets/CreatorDetail-061d47e0.js",
              "assets/LabelWithTooltip-6c5ed111.js",
              "assets/i18n-611811a6.js",
              "assets/index-ea788ee8.js",
              "assets/tooltip-f54a9090.js",
              "assets/utils-65805dbc.js",
              "assets/index-eff0ad24.js",
              "assets/NNGMRY2O-be25bda0.js",
              "assets/LR7LBJN3-fced4fb5.js",
              "assets/index-4897b9da.js",
              "assets/E53DB7BS-1e802908.js",
              "assets/FN6EICGO-b0e5a495.js",
              "assets/Tag-c6cb9793.js",
              "assets/utils-e1e0b898.js",
              "assets/router-b8d56046.js",
              "assets/use-coin-format-bfa33df5.js",
            ]
          ),
        History: () =>
          Q(
            () => import("./History-176596b8.js"),
            [
              "assets/History-176596b8.js",
              "assets/table-cbcb9a00.js",
              "assets/utils-65805dbc.js",
              "assets/Tag-c6cb9793.js",
              "assets/i18n-611811a6.js",
              "assets/use-coin-format-bfa33df5.js",
              "assets/utils-e1e0b898.js",
            ]
          ),
        CopyStrategy: () =>
          Q(
            () => import("./CopyStrategy-f5f88e63.js"),
            [
              "assets/CopyStrategy-f5f88e63.js",
              "assets/LabelWithTooltip-6c5ed111.js",
              "assets/i18n-611811a6.js",
              "assets/index-ea788ee8.js",
              "assets/tooltip-f54a9090.js",
              "assets/utils-65805dbc.js",
              "assets/index-eff0ad24.js",
              "assets/NNGMRY2O-be25bda0.js",
              "assets/LR7LBJN3-fced4fb5.js",
              "assets/index-4897b9da.js",
              "assets/E53DB7BS-1e802908.js",
              "assets/FN6EICGO-b0e5a495.js",
              "assets/utils-e1e0b898.js",
              "assets/currency-a0e3a368.js",
              "assets/isSymbol-0edd6b24.js",
              "assets/isObject-d5c4896e.js",
              "assets/amount-af49bfc0.js",
              "assets/number-field-a2716165.js",
              "assets/QJIB6BDF-1dee7631.js",
              "assets/slider-b2a7fa20.js",
              "assets/index-15f8a785.js",
              "assets/resolve-elements.es-b931549e.js",
              "assets/Symbol-f22f521e.js",
              "assets/animate.es-01baad02.js",
              "assets/index.es-088fd7a9.js",
              "assets/router-b8d56046.js",
              "assets/use-coin-format-bfa33df5.js",
            ]
          ),
        HistoryDetail: () =>
          Q(
            () => import("./HistoryDetail-78564bca.js"),
            [
              "assets/HistoryDetail-78564bca.js",
              "assets/i18n-611811a6.js",
              "assets/LabelWithTooltip-6c5ed111.js",
              "assets/index-ea788ee8.js",
              "assets/tooltip-f54a9090.js",
              "assets/utils-65805dbc.js",
              "assets/index-eff0ad24.js",
              "assets/NNGMRY2O-be25bda0.js",
              "assets/LR7LBJN3-fced4fb5.js",
              "assets/index-4897b9da.js",
              "assets/E53DB7BS-1e802908.js",
              "assets/FN6EICGO-b0e5a495.js",
              "assets/Tag-c6cb9793.js",
              "assets/utils-e1e0b898.js",
              "assets/router-b8d56046.js",
              "assets/use-coin-format-bfa33df5.js",
            ]
          ),
        StrategyDetail: () =>
          Q(
            () => import("./StrategyDetail-96fac465.js"),
            [
              "assets/StrategyDetail-96fac465.js",
              "assets/i18n-611811a6.js",
              "assets/LabelWithTooltip-6c5ed111.js",
              "assets/index-ea788ee8.js",
              "assets/tooltip-f54a9090.js",
              "assets/utils-65805dbc.js",
              "assets/index-eff0ad24.js",
              "assets/NNGMRY2O-be25bda0.js",
              "assets/LR7LBJN3-fced4fb5.js",
              "assets/index-4897b9da.js",
              "assets/E53DB7BS-1e802908.js",
              "assets/FN6EICGO-b0e5a495.js",
              "assets/Tag-c6cb9793.js",
              "assets/utils-e1e0b898.js",
              "assets/router-b8d56046.js",
              "assets/use-coin-format-bfa33df5.js",
            ]
          ),
        CrashStrategyGuide: () =>
          Q(
            () => import("./Guide-529ac7fa.js"),
            [
              "assets/Guide-529ac7fa.js",
              "assets/index-ea788ee8.js",
              "assets/i18n-611811a6.js",
            ]
          ),
        AllPlayers: () =>
          Q(
            () => import("./AllPlayers-eade3fc7.js"),
            [
              "assets/AllPlayers-eade3fc7.js",
              "assets/i18n-611811a6.js",
              "assets/router-b8d56046.js",
              "assets/use-coin-format-bfa33df5.js",
              "assets/index-eff0ad24.js",
            ]
          ),
        Comments: () =>
          Q(
            () => import("./index-f5a6b566.js"),
            [
              "assets/index-f5a6b566.js",
              "assets/i18n-611811a6.js",
              "assets/user-dc7ef1f4.js",
              "assets/amount-af49bfc0.js",
              "assets/isObject-d5c4896e.js",
            ]
          ),
        GameDetail: () =>
          Q(
            () => import("./GameDetail-62f8a4ff.js"),
            [
              "assets/GameDetail-62f8a4ff.js",
              "assets/Symbol-f22f521e.js",
              "assets/index-eff0ad24.js",
              "assets/currency-a0e3a368.js",
              "assets/index-4897b9da.js",
              "assets/isSymbol-0edd6b24.js",
              "assets/isObject-d5c4896e.js",
              "assets/amount-af49bfc0.js",
              "assets/Verified-217e2916.js",
              "assets/i18n-611811a6.js",
              "assets/router-b8d56046.js",
              "assets/Layout-b58c3f24.js",
              "assets/LayoutTitle-870a6463.js",
              "assets/utils-65805dbc.js",
              "assets/LR7LBJN3-fced4fb5.js",
              "assets/index-f5a6b566.js",
              "assets/user-dc7ef1f4.js",
              "assets/game-a49e1f5b.js",
              "assets/use-coin-format-bfa33df5.js",
              "assets/config-6b289bdb.js",
              "assets/number-field-a2716165.js",
              "assets/QJIB6BDF-1dee7631.js",
              "assets/FN6EICGO-b0e5a495.js",
              "assets/SeedSetting-b2f3d34e.js",
              "assets/Close-4ee839c4.js",
              "assets/use-mounted-state-39a546bf.js",
              "assets/capitalize-f590c9ec.js",
              "assets/throttle-267ea383.js",
              "assets/debounce-9aa0a06b.js",
              "assets/imgX-9d9be5da.js",
            ]
          ),
        ProvablyFair: () =>
          Q(
            () => import("./ProvablyFair-65b9b71f.js"),
            [
              "assets/ProvablyFair-65b9b71f.js",
              "assets/config-6b289bdb.js",
              "assets/i18n-611811a6.js",
              "assets/GameFairnessFile-649b25ea.js",
              "assets/GameFairnessFile-e17ba143.css",
            ]
          ),
        GameDetailRedirect: () =>
          Q(
            () => import("./GameDetailRedirect-b8936ac3.js"),
            [
              "assets/GameDetailRedirect-b8936ac3.js",
              "assets/router-b8d56046.js",
            ]
          ),
      }),
      Object.entries(is).reduce((s, [t, e]) => {
        var r;
        return (
          /^[A-Z]/.test(t) &&
            (s[t] =
              ((r = e),
              () =>
                lt(void 0, null, function* () {
                  const n = (yield r()).default;
                  return {
                    default: (a) =>
                      ge(ni, {
                        client: hi,
                        get children() {
                          return ge(n, a);
                        },
                      }),
                  };
                }))),
          s
        );
      }, {}))
    )
  );
var is;
export {
  $o as $,
  wn as A,
  vi as B,
  Oa as C,
  Si as D,
  Ci as E,
  fo as F,
  Cs as G,
  de as H,
  _i as I,
  Gt as J,
  Pn as K,
  xi as L,
  hn as M,
  Hi as N,
  Ji as O,
  Vi as P,
  en as Q,
  ei as R,
  mo as S,
  cr as T,
  Sr as U,
  hr as V,
  Yn as W,
  qi as X,
  Ni as Y,
  Ir as Z,
  Q as _,
  Sa as a,
  ya as a$,
  Ua as a0,
  Wa as a1,
  Ps as a2,
  qo as a3,
  Rs as a4,
  Gn as a5,
  nr as a6,
  vo as a7,
  nu as a8,
  Tn as a9,
  so as aA,
  po as aB,
  Yr as aC,
  Kr as aD,
  nn as aE,
  Rn as aF,
  Ln as aG,
  Dr as aH,
  rn as aI,
  Ri as aJ,
  ro as aK,
  lo as aL,
  hi as aM,
  Fr as aN,
  bo as aO,
  yo as aP,
  Po as aQ,
  ti as aR,
  Yo as aS,
  un as aT,
  Ds as aU,
  Eo as aV,
  bi as aW,
  di as aX,
  _s as aY,
  fi as aZ,
  ho as a_,
  sn as aa,
  cn as ab,
  Ao as ac,
  An as ad,
  Ho as ae,
  xo as af,
  ce as ag,
  wt as ah,
  aa as ai,
  En as aj,
  jn as ak,
  Io as al,
  co as am,
  Xo as an,
  Er as ao,
  lr as ap,
  ur as aq,
  li as ar,
  dr as as,
  zi as at,
  Qi as au,
  Yi as av,
  ir as aw,
  Oo as ax,
  Tr as ay,
  Cr as az,
  ga as b,
  au as b0,
  ge as c,
  Jr as d,
  Zr as e,
  si as f,
  Fn as g,
  pr as h,
  xa as i,
  Mr as j,
  ru as k,
  Co as l,
  Ia as m,
  Vo as n,
  Me as o,
  mr as p,
  Mn as q,
  Ei as r,
  yn as s,
  io as t,
  Qn as u,
  no as v,
  Na as w,
  Cn as x,
  tn as y,
  Or as z,
};
