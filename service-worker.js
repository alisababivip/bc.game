try {
  self["workbox:core:6.6.0"] && _();
} catch {}
const x = (a, ...e) => {
    let t = a;
    return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
  },
  E = x;
class l extends Error {
  constructor(e, t) {
    const s = E(e, t);
    super(s), (this.name = e), (this.details = t);
  }
}
const f = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: typeof registration < "u" ? registration.scope : "",
  },
  b = (a) => [f.prefix, a, f.suffix].filter((e) => e && e.length > 0).join("-"),
  I = (a) => {
    for (const e of Object.keys(f)) a(e);
  },
  C = {
    updateDetails: (a) => {
      I((e) => {
        typeof a[e] == "string" && (f[e] = a[e]);
      });
    },
    getGoogleAnalyticsName: (a) => a || b(f.googleAnalytics),
    getPrecacheName: (a) => a || b(f.precache),
    getPrefix: () => f.prefix,
    getRuntimeName: (a) => a || b(f.runtime),
    getSuffix: () => f.suffix,
  };
function P(a, e) {
  const t = e();
  return a.waitUntil(t), t;
}
try {
  self["workbox:precaching:6.6.0"] && _();
} catch {}
const O = "__WB_REVISION__";
function M(a) {
  if (!a) throw new l("add-to-cache-list-unexpected-type", { entry: a });
  if (typeof a == "string") {
    const c = new URL(a, location.href);
    return { cacheKey: c.href, url: c.href };
  }
  const { revision: e, url: t } = a;
  if (!t) throw new l("add-to-cache-list-unexpected-type", { entry: a });
  if (!e) {
    const c = new URL(t, location.href);
    return { cacheKey: c.href, url: c.href };
  }
  const s = new URL(t, location.href),
    r = new URL(t, location.href);
  return s.searchParams.set(O, e), { cacheKey: s.href, url: r.href };
}
class W {
  constructor() {
    (this.updatedURLs = []),
      (this.notUpdatedURLs = []),
      (this.handlerWillStart = async ({ request: e, state: t }) => {
        t && (t.originalRequest = e);
      }),
      (this.cachedResponseWillBeUsed = async ({
        event: e,
        state: t,
        cachedResponse: s,
      }) => {
        if (
          e.type === "install" &&
          t &&
          t.originalRequest &&
          t.originalRequest instanceof Request
        ) {
          const r = t.originalRequest.url;
          s ? this.notUpdatedURLs.push(r) : this.updatedURLs.push(r);
        }
        return s;
      });
  }
}
class S {
  constructor({ precacheController: e }) {
    (this.cacheKeyWillBeUsed = async ({ request: t, params: s }) => {
      const r =
        s?.cacheKey || this._precacheController.getCacheKeyForURL(t.url);
      return r ? new Request(r, { headers: t.headers }) : t;
    }),
      (this._precacheController = e);
  }
}
let p;
function A() {
  if (p === void 0) {
    const a = new Response("");
    if ("body" in a)
      try {
        new Response(a.body), (p = !0);
      } catch {
        p = !1;
      }
    p = !1;
  }
  return p;
}
async function D(a, e) {
  let t = null;
  if ((a.url && (t = new URL(a.url).origin), t !== self.location.origin))
    throw new l("cross-origin-copy-response", { origin: t });
  const s = a.clone(),
    r = {
      headers: new Headers(s.headers),
      status: s.status,
      statusText: s.statusText,
    },
    c = e ? e(r) : r,
    n = A() ? s.body : await s.blob();
  return new Response(n, c);
}
const q = (a) =>
  new URL(String(a), location.href).href.replace(
    new RegExp(`^${location.origin}`),
    ""
  );
function L(a, e) {
  const t = new URL(a);
  for (const s of e) t.searchParams.delete(s);
  return t.href;
}
async function F(a, e, t, s) {
  const r = L(e.url, t);
  if (e.url === r) return a.match(e, s);
  const c = Object.assign(Object.assign({}, s), { ignoreSearch: !0 }),
    n = await a.keys(e, c);
  for (const i of n) {
    const o = L(i.url, t);
    if (r === o) return a.match(i, s);
  }
}
class j {
  constructor() {
    this.promise = new Promise((e, t) => {
      (this.resolve = e), (this.reject = t);
    });
  }
}
const H = new Set();
async function B() {
  for (const a of H) await a();
}
function $(a) {
  return new Promise((e) => setTimeout(e, a));
}
try {
  self["workbox:strategies:6.6.0"] && _();
} catch {}
function m(a) {
  return typeof a == "string" ? new Request(a) : a;
}
class G {
  constructor(e, t) {
    (this._cacheKeys = {}),
      Object.assign(this, t),
      (this.event = t.event),
      (this._strategy = e),
      (this._handlerDeferred = new j()),
      (this._extendLifetimePromises = []),
      (this._plugins = [...e.plugins]),
      (this._pluginStateMap = new Map());
    for (const s of this._plugins) this._pluginStateMap.set(s, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  async fetch(e) {
    const { event: t } = this;
    let s = m(e);
    if (s.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const n = await t.preloadResponse;
      if (n) return n;
    }
    const r = this.hasCallback("fetchDidFail") ? s.clone() : null;
    try {
      for (const n of this.iterateCallbacks("requestWillFetch"))
        s = await n({ request: s.clone(), event: t });
    } catch (n) {
      if (n instanceof Error)
        throw new l("plugin-error-request-will-fetch", {
          thrownErrorMessage: n.message,
        });
    }
    const c = s.clone();
    try {
      let n;
      n = await fetch(
        s,
        s.mode === "navigate" ? void 0 : this._strategy.fetchOptions
      );
      for (const i of this.iterateCallbacks("fetchDidSucceed"))
        n = await i({ event: t, request: c, response: n });
      return n;
    } catch (n) {
      throw (
        (r &&
          (await this.runCallbacks("fetchDidFail", {
            error: n,
            event: t,
            originalRequest: r.clone(),
            request: c.clone(),
          })),
        n)
      );
    }
  }
  async fetchAndCachePut(e) {
    const t = await this.fetch(e),
      s = t.clone();
    return this.waitUntil(this.cachePut(e, s)), t;
  }
  async cacheMatch(e) {
    const t = m(e);
    let s;
    const { cacheName: r, matchOptions: c } = this._strategy,
      n = await this.getCacheKey(t, "read"),
      i = Object.assign(Object.assign({}, c), { cacheName: r });
    s = await caches.match(n, i);
    for (const o of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s =
        (await o({
          cacheName: r,
          matchOptions: c,
          cachedResponse: s,
          request: n,
          event: this.event,
        })) || void 0;
    return s;
  }
  async cachePut(e, t) {
    const s = m(e);
    await $(0);
    const r = await this.getCacheKey(s, "write");
    if (!t) throw new l("cache-put-with-no-response", { url: q(r.url) });
    const c = await this._ensureResponseSafeToCache(t);
    if (!c) return !1;
    const { cacheName: n, matchOptions: i } = this._strategy,
      o = await self.caches.open(n),
      h = this.hasCallback("cacheDidUpdate"),
      g = h ? await F(o, r.clone(), ["__WB_REVISION__"], i) : null;
    try {
      await o.put(r, h ? c.clone() : c);
    } catch (u) {
      if (u instanceof Error)
        throw (u.name === "QuotaExceededError" && (await B()), u);
    }
    for (const u of this.iterateCallbacks("cacheDidUpdate"))
      await u({
        cacheName: n,
        oldResponse: g,
        newResponse: c.clone(),
        request: r,
        event: this.event,
      });
    return !0;
  }
  async getCacheKey(e, t) {
    const s = `${e.url} | ${t}`;
    if (!this._cacheKeys[s]) {
      let r = e;
      for (const c of this.iterateCallbacks("cacheKeyWillBeUsed"))
        r = m(
          await c({
            mode: t,
            request: r,
            event: this.event,
            params: this.params,
          })
        );
      this._cacheKeys[s] = r;
    }
    return this._cacheKeys[s];
  }
  hasCallback(e) {
    for (const t of this._strategy.plugins) if (e in t) return !0;
    return !1;
  }
  async runCallbacks(e, t) {
    for (const s of this.iterateCallbacks(e)) await s(t);
  }
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const s = this._pluginStateMap.get(t);
        yield (c) => {
          const n = Object.assign(Object.assign({}, c), { state: s });
          return t[e](n);
        };
      }
  }
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  async doneWaiting() {
    let e;
    for (; (e = this._extendLifetimePromises.shift()); ) await e;
  }
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  async _ensureResponseSafeToCache(e) {
    let t = e,
      s = !1;
    for (const r of this.iterateCallbacks("cacheWillUpdate"))
      if (
        ((t =
          (await r({
            request: this.request,
            response: t,
            event: this.event,
          })) || void 0),
        (s = !0),
        !t)
      )
        break;
    return s || (t && t.status !== 200 && (t = void 0)), t;
  }
}
class T {
  constructor(e = {}) {
    (this.cacheName = C.getRuntimeName(e.cacheName)),
      (this.plugins = e.plugins || []),
      (this.fetchOptions = e.fetchOptions),
      (this.matchOptions = e.matchOptions);
  }
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  handleAll(e) {
    e instanceof FetchEvent && (e = { event: e, request: e.request });
    const t = e.event,
      s = typeof e.request == "string" ? new Request(e.request) : e.request,
      r = "params" in e ? e.params : void 0,
      c = new G(this, { event: t, request: s, params: r }),
      n = this._getResponse(c, s, t),
      i = this._awaitComplete(n, c, s, t);
    return [n, i];
  }
  async _getResponse(e, t, s) {
    await e.runCallbacks("handlerWillStart", { event: s, request: t });
    let r;
    try {
      if (((r = await this._handle(t, e)), !r || r.type === "error"))
        throw new l("no-response", { url: t.url });
    } catch (c) {
      if (c instanceof Error) {
        for (const n of e.iterateCallbacks("handlerDidError"))
          if (((r = await n({ error: c, event: s, request: t })), r)) break;
      }
      if (!r) throw c;
    }
    for (const c of e.iterateCallbacks("handlerWillRespond"))
      r = await c({ event: s, request: t, response: r });
    return r;
  }
  async _awaitComplete(e, t, s, r) {
    let c, n;
    try {
      c = await e;
    } catch {}
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: r,
        request: s,
        response: c,
      }),
        await t.doneWaiting();
    } catch (i) {
      i instanceof Error && (n = i);
    }
    if (
      (await t.runCallbacks("handlerDidComplete", {
        event: r,
        request: s,
        response: c,
        error: n,
      }),
      t.destroy(),
      n)
    )
      throw n;
  }
}
class d extends T {
  constructor(e = {}) {
    (e.cacheName = C.getPrecacheName(e.cacheName)),
      super(e),
      (this._fallbackToNetwork = e.fallbackToNetwork !== !1),
      this.plugins.push(d.copyRedirectedCacheableResponsesPlugin);
  }
  async _handle(e, t) {
    const s = await t.cacheMatch(e);
    return (
      s ||
      (t.event && t.event.type === "install"
        ? await this._handleInstall(e, t)
        : await this._handleFetch(e, t))
    );
  }
  async _handleFetch(e, t) {
    let s;
    const r = t.params || {};
    if (this._fallbackToNetwork) {
      const c = r.integrity,
        n = e.integrity,
        i = !n || n === c;
      (s = await t.fetch(
        new Request(e, { integrity: e.mode !== "no-cors" ? n || c : void 0 })
      )),
        c &&
          i &&
          e.mode !== "no-cors" &&
          (this._useDefaultCacheabilityPluginIfNeeded(),
          await t.cachePut(e, s.clone()));
    } else
      throw new l("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url,
      });
    return s;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const s = await t.fetch(e);
    if (!(await t.cachePut(e, s.clone())))
      throw new l("bad-precaching-response", { url: e.url, status: s.status });
    return s;
  }
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null,
      t = 0;
    for (const [s, r] of this.plugins.entries())
      r !== d.copyRedirectedCacheableResponsesPlugin &&
        (r === d.defaultPrecacheCacheabilityPlugin && (e = s),
        r.cacheWillUpdate && t++);
    t === 0
      ? this.plugins.push(d.defaultPrecacheCacheabilityPlugin)
      : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
d.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: a }) {
    return !a || a.status >= 400 ? null : a;
  },
};
d.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: a }) {
    return a.redirected ? await D(a) : a;
  },
};
class V {
  constructor({
    cacheName: e,
    plugins: t = [],
    fallbackToNetwork: s = !0,
  } = {}) {
    (this._urlsToCacheKeys = new Map()),
      (this._urlsToCacheModes = new Map()),
      (this._cacheKeysToIntegrities = new Map()),
      (this._strategy = new d({
        cacheName: C.getPrecacheName(e),
        plugins: [...t, new S({ precacheController: this })],
        fallbackToNetwork: s,
      })),
      (this.install = this.install.bind(this)),
      (this.activate = this.activate.bind(this));
  }
  get strategy() {
    return this._strategy;
  }
  precache(e) {
    this.addToCacheList(e),
      this._installAndActiveListenersAdded ||
        (self.addEventListener("install", this.install),
        self.addEventListener("activate", this.activate),
        (this._installAndActiveListenersAdded = !0));
  }
  addToCacheList(e) {
    const t = [];
    for (const s of e) {
      typeof s == "string"
        ? t.push(s)
        : s && s.revision === void 0 && t.push(s.url);
      const { cacheKey: r, url: c } = M(s),
        n = typeof s != "string" && s.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(c) && this._urlsToCacheKeys.get(c) !== r)
        throw new l("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(c),
          secondEntry: r,
        });
      if (typeof s != "string" && s.integrity) {
        if (
          this._cacheKeysToIntegrities.has(r) &&
          this._cacheKeysToIntegrities.get(r) !== s.integrity
        )
          throw new l("add-to-cache-list-conflicting-integrities", { url: c });
        this._cacheKeysToIntegrities.set(r, s.integrity);
      }
      if (
        (this._urlsToCacheKeys.set(c, r),
        this._urlsToCacheModes.set(c, n),
        t.length > 0)
      ) {
        const i = `Workbox is precaching URLs without revision info: ${t.join(
          ", "
        )}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(i);
      }
    }
  }
  install(e) {
    return P(e, async () => {
      const t = new W();
      this.strategy.plugins.push(t);
      for (const [c, n] of this._urlsToCacheKeys) {
        const i = this._cacheKeysToIntegrities.get(n),
          o = this._urlsToCacheModes.get(c),
          h = new Request(c, {
            integrity: i,
            cache: o,
            credentials: "same-origin",
          });
        await Promise.all(
          this.strategy.handleAll({
            params: { cacheKey: n },
            request: h,
            event: e,
          })
        );
      }
      const { updatedURLs: s, notUpdatedURLs: r } = t;
      return { updatedURLs: s, notUpdatedURLs: r };
    });
  }
  activate(e) {
    return P(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName),
        s = await t.keys(),
        r = new Set(this._urlsToCacheKeys.values()),
        c = [];
      for (const n of s) r.has(n.url) || (await t.delete(n), c.push(n.url));
      return { deletedURLs: c };
    });
  }
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e,
      s = this.getCacheKeyForURL(t);
    if (s) return (await self.caches.open(this.strategy.cacheName)).match(s);
  }
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t) throw new l("non-precached-url", { url: e });
    return (s) => (
      (s.request = new Request(e)),
      (s.params = Object.assign({ cacheKey: t }, s.params)),
      this.strategy.handle(s)
    );
  }
}
let U;
const K = () => (U || (U = new V()), U);
try {
  self["workbox:routing:6.6.0"] && _();
} catch {}
const N = "GET",
  R = (a) => (a && typeof a == "object" ? a : { handle: a });
class w {
  constructor(e, t, s = N) {
    (this.handler = R(t)), (this.match = e), (this.method = s);
  }
  setCatchHandler(e) {
    this.catchHandler = R(e);
  }
}
class Q extends w {
  constructor(e, t, s) {
    const r = ({ url: c }) => {
      const n = e.exec(c.href);
      if (n && !(c.origin !== location.origin && n.index !== 0))
        return n.slice(1);
    };
    super(r, t, s);
  }
}
class z {
  constructor() {
    (this._routes = new Map()), (this._defaultHandlerMap = new Map());
  }
  get routes() {
    return this._routes;
  }
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e,
        s = this.handleRequest({ request: t, event: e });
      s && e.respondWith(s);
    });
  }
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data,
          s = Promise.all(
            t.urlsToCache.map((r) => {
              typeof r == "string" && (r = [r]);
              const c = new Request(...r);
              return this.handleRequest({ request: c, event: e });
            })
          );
        e.waitUntil(s),
          e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  handleRequest({ request: e, event: t }) {
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith("http")) return;
    const r = s.origin === location.origin,
      { params: c, route: n } = this.findMatchingRoute({
        event: t,
        request: e,
        sameOrigin: r,
        url: s,
      });
    let i = n && n.handler;
    const o = e.method;
    if (
      (!i &&
        this._defaultHandlerMap.has(o) &&
        (i = this._defaultHandlerMap.get(o)),
      !i)
    )
      return;
    let h;
    try {
      h = i.handle({ url: s, request: e, event: t, params: c });
    } catch (u) {
      h = Promise.reject(u);
    }
    const g = n && n.catchHandler;
    return (
      h instanceof Promise &&
        (this._catchHandler || g) &&
        (h = h.catch(async (u) => {
          if (g)
            try {
              return await g.handle({
                url: s,
                request: e,
                event: t,
                params: c,
              });
            } catch (k) {
              k instanceof Error && (u = k);
            }
          if (this._catchHandler)
            return this._catchHandler.handle({ url: s, request: e, event: t });
          throw u;
        })),
      h
    );
  }
  findMatchingRoute({ url: e, sameOrigin: t, request: s, event: r }) {
    const c = this._routes.get(s.method) || [];
    for (const n of c) {
      let i;
      const o = n.match({ url: e, sameOrigin: t, request: s, event: r });
      if (o)
        return (
          (i = o),
          ((Array.isArray(i) && i.length === 0) ||
            (o.constructor === Object && Object.keys(o).length === 0) ||
            typeof o == "boolean") &&
            (i = void 0),
          { route: n, params: i }
        );
    }
    return {};
  }
  setDefaultHandler(e, t = N) {
    this._defaultHandlerMap.set(t, R(e));
  }
  setCatchHandler(e) {
    this._catchHandler = R(e);
  }
  registerRoute(e) {
    this._routes.has(e.method) || this._routes.set(e.method, []),
      this._routes.get(e.method).push(e);
  }
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new l("unregister-route-but-not-found-with-method", {
        method: e.method,
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1) this._routes.get(e.method).splice(t, 1);
    else throw new l("unregister-route-route-not-registered");
  }
}
let y;
const J = () => (
  y || ((y = new z()), y.addFetchListener(), y.addCacheListener()), y
);
function v(a, e, t) {
  let s;
  if (typeof a == "string") {
    const c = new URL(a, location.href),
      n = ({ url: i }) => i.href === c.href;
    s = new w(n, e, t);
  } else if (a instanceof RegExp) s = new Q(a, e, t);
  else if (typeof a == "function") s = new w(a, e, t);
  else if (a instanceof w) s = a;
  else
    throw new l("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture",
    });
  return J().registerRoute(s), s;
}
function X(a, e = []) {
  for (const t of [...a.searchParams.keys()])
    e.some((s) => s.test(t)) && a.searchParams.delete(t);
  return a;
}
function* Y(
  a,
  {
    ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/],
    directoryIndex: t = "index.html",
    cleanURLs: s = !0,
    urlManipulation: r,
  } = {}
) {
  const c = new URL(a, location.href);
  (c.hash = ""), yield c.href;
  const n = X(c, e);
  if ((yield n.href, t && n.pathname.endsWith("/"))) {
    const i = new URL(n.href);
    (i.pathname += t), yield i.href;
  }
  if (s) {
    const i = new URL(n.href);
    (i.pathname += ".html"), yield i.href;
  }
  if (r) {
    const i = r({ url: c });
    for (const o of i) yield o.href;
  }
}
class Z extends w {
  constructor(e, t) {
    const s = ({ request: r }) => {
      const c = e.getURLsToCacheKeys();
      for (const n of Y(r.url, t)) {
        const i = c.get(n);
        if (i) {
          const o = e.getIntegrityForCacheKey(i);
          return { cacheKey: i, integrity: o };
        }
      }
    };
    super(s, e.strategy);
  }
}
function ee(a) {
  const e = K(),
    t = new Z(e, a);
  v(t);
}
const te = "-precache-",
  se = async (a, e = te) => {
    const s = (await self.caches.keys()).filter(
      (r) => r.includes(e) && r.includes(self.registration.scope) && r !== a
    );
    return await Promise.all(s.map((r) => self.caches.delete(r))), s;
  };
function ae() {
  self.addEventListener("activate", (a) => {
    const e = C.getPrecacheName();
    a.waitUntil(se(e).then((t) => {}));
  });
}
function re(a) {
  K().precache(a);
}
function ne(a, e) {
  re(a), ee(e);
}
const ce = {
  cacheWillUpdate: async ({ response: a }) =>
    a.status === 200 || a.status === 0 ? a : null,
};
class ie extends T {
  constructor(e = {}) {
    super(e),
      this.plugins.some((t) => "cacheWillUpdate" in t) ||
        this.plugins.unshift(ce),
      (this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0);
  }
  async _handle(e, t) {
    const s = [],
      r = [];
    let c;
    if (this._networkTimeoutSeconds) {
      const { id: o, promise: h } = this._getTimeoutPromise({
        request: e,
        logs: s,
        handler: t,
      });
      (c = o), r.push(h);
    }
    const n = this._getNetworkPromise({
      timeoutId: c,
      request: e,
      logs: s,
      handler: t,
    });
    r.push(n);
    const i = await t.waitUntil(
      (async () => (await t.waitUntil(Promise.race(r))) || (await n))()
    );
    if (!i) throw new l("no-response", { url: e.url });
    return i;
  }
  _getTimeoutPromise({ request: e, logs: t, handler: s }) {
    let r;
    return {
      promise: new Promise((n) => {
        r = setTimeout(async () => {
          n(await s.cacheMatch(e));
        }, this._networkTimeoutSeconds * 1e3);
      }),
      id: r,
    };
  }
  async _getNetworkPromise({ timeoutId: e, request: t, logs: s, handler: r }) {
    let c, n;
    try {
      n = await r.fetchAndCachePut(t);
    } catch (i) {
      i instanceof Error && (c = i);
    }
    return e && clearTimeout(e), (c || !n) && (n = await r.cacheMatch(t)), n;
  }
}
try {
  const a = [
    {
      revision: "0706f9a4af62e45fe10ba424b571d291",
      url: "assets/_basePropertyOf-BhSQSS-6.js",
    },
    {
      revision: "431f4cf145ec9c86aa7e7074f154bd3a",
      url: "assets/Bingo.page-C7XIIdhW.js",
    },
    {
      revision: "1eaa11b5850ef414f70f03d60385c73d",
      url: "assets/Block-Dmp1bPJq.js",
    },
    {
      revision: "c03546fa4d53abaf4372c4343974b037",
      url: "assets/Casino.page-7IHBxIHa.js",
    },
    {
      revision: "c047edd1277b7db89efdb60d34cbf325",
      url: "assets/common-Dpx_AU6F.js",
    },
    {
      revision: "e0b1bef6a34e33f2b6db1f117c90e5a8",
      url: "assets/Contest-PUAnZXx-.js",
    },
    {
      revision: "9200ca0577f02501cf8d9ebe0aa332b3",
      url: "assets/ContestList-BAhZQcZ1.js",
    },
    {
      revision: "5514cf1edcee9aa5b2b396bf714d2d61",
      url: "assets/ContestRules-BcwpZlTd.js",
    },
    {
      revision: "4ba217e7279dc33e2d57b88644ecfcfe",
      url: "assets/cryptoonlinecasino-B_jcKQ4S.js",
    },
    {
      revision: "085a8af47e18981ed57c7ba912a948ad",
      url: "assets/cryptoonlinecasino-B8XA0kSA.js",
    },
    {
      revision: "e604ad08c5a06885f04af7325362af6c",
      url: "assets/cryptoonlinecasino-BCUTjiq2.js",
    },
    {
      revision: "1791af48d8645fc8ea7ecb5f9a10b100",
      url: "assets/cryptoonlinecasino-Bi242g1i.js",
    },
    {
      revision: "0cb9ca15d7117da3d12d3c50db50c41b",
      url: "assets/cryptoonlinecasino-BNazf07S.js",
    },
    {
      revision: "6aa42f12901c06ea6c512f251827e9c7",
      url: "assets/cryptoonlinecasino-BOkYvszm.js",
    },
    {
      revision: "390e35ecb0f931a3ffd21524756f0019",
      url: "assets/cryptoonlinecasino-BSAtOS-4.js",
    },
    {
      revision: "6afec4c4058be3321e9c3840e2e1437d",
      url: "assets/cryptoonlinecasino-BuVa8Fr4.js",
    },
    {
      revision: "a2d75f0289a988a9d9444e45f9569b6c",
      url: "assets/cryptoonlinecasino-C9KD-C5a.js",
    },
    {
      revision: "05b84657989fcf46a389258544cce8ff",
      url: "assets/cryptoonlinecasino-CCkrphJb.js",
    },
    {
      revision: "cd033aa8270912cdbd316838819c87fb",
      url: "assets/cryptoonlinecasino-CDL8XuyM.js",
    },
    {
      revision: "d4511d16c6986978c33aff510ff77771",
      url: "assets/cryptoonlinecasino-CiqLDzY9.js",
    },
    {
      revision: "cba4b4ac552a4f0f64073f93427e84cd",
      url: "assets/cryptoonlinecasino-CpgyZN0y.js",
    },
    {
      revision: "fbcc4b955375dc9026c3656db4c7c7be",
      url: "assets/cryptoonlinecasino-CRbwAqaA.js",
    },
    {
      revision: "3666c6aec931591e91d36e4fa2b10e57",
      url: "assets/cryptoonlinecasino-CVzmZjc0.js",
    },
    {
      revision: "54c901e29855bfcffeb5aa39ddb8f79f",
      url: "assets/cryptoonlinecasino-D3exVik-.js",
    },
    {
      revision: "4cbefd6ddb678f7ad39cf925cf9dbc70",
      url: "assets/cryptoonlinecasino-DRw7fEOM.js",
    },
    {
      revision: "4fb74c502f1015869590013162678bdb",
      url: "assets/cryptoonlinecasino-DX1zlQXc.js",
    },
    {
      revision: "d920aac43190781d95126ff68751b165",
      url: "assets/cryptoonlinecasino-F-3Erhtw.js",
    },
    {
      revision: "b866b813aefd2cc3fd3f0598c4fef56a",
      url: "assets/cryptoonlinecasino-hw8A1ZbP.js",
    },
    {
      revision: "6fc2ecc6d4c604d644cb55ac7f861d18",
      url: "assets/cryptoonlinecasino-Oery4vgg.js",
    },
    {
      revision: "7cbb06cde65c20ab00d6260f9b071614",
      url: "assets/cryptoonlinecasino-qINeEHV1.js",
    },
    {
      revision: "496e54bc56da2372e24784e11de65c21",
      url: "assets/cryptoonlinecasino-RwMk4n40.js",
    },
    {
      revision: "1d728a4ffe74bcc70d14903e40f1724f",
      url: "assets/cryptoonlinecasino-u9nyWi14.js",
    },
    {
      revision: "7ff6101b945ea94b8e05bf165a11b952",
      url: "assets/discord-3fjpJq_P.js",
    },
    {
      revision: "916deac47fee37b2fdbebc9d0150ad88",
      url: "assets/Favorite.page-Ce6WGJ7B.js",
    },
    {
      revision: "5e2d9234dbdee4a922e90c19ea05d050",
      url: "assets/GameEntryWrap-CbskW7lq.js",
    },
    {
      revision: "6d24e9e9b604e8e6bd47b1a6da2403ee",
      url: "assets/index-B0hqtAgk.js",
    },
    {
      revision: "7a6024077f9f8f282b9bf52bd356e31e",
      url: "assets/index-BAHDS55-.js",
    },
    {
      revision: "3578b0f02c0a12da0f69cf1e3b01e530",
      url: "assets/index-BALuS3Z1.js",
    },
    {
      revision: "f072bd19a4e6f03cfa8920f711537872",
      url: "assets/index-BerZ-Pwo.js",
    },
    {
      revision: "82c0d5ba7331f5cbd466dddcca84fa74",
      url: "assets/index-BhEqdHA7.js",
    },
    {
      revision: "15ad827e8986a7da0aa3f8c44e0f51a6",
      url: "assets/index-Bk3mZofm.js",
    },
    {
      revision: "295c98d41bf9ca0d4bf41a92538e0ea0",
      url: "assets/index-Bmvrs5V2.js",
    },
    {
      revision: "bcd0cec5314b0e4618ef21435f52ad44",
      url: "assets/index-BOm7ngKm.js",
    },
    {
      revision: "b92447de201797f4e5c47d44cd0941fb",
      url: "assets/index-BPJ2mQ91.js",
    },
    {
      revision: "c53fca96575241839f823dfb76dbcaba",
      url: "assets/index-BRi9AjjG.js",
    },
    {
      revision: "789999b3e707628d7b11e27010808064",
      url: "assets/index-BUB5SDD8.js",
    },
    {
      revision: "e2fdff8fce8d8890d830c58cb3e22ae8",
      url: "assets/index-BuHMWotw.js",
    },
    {
      revision: "31318b5782a3de2d2f06df2bb608bf22",
      url: "assets/index-BZIG8zuw.js",
    },
    {
      revision: "1ea1e787feb83e566377fd7dff795cc1",
      url: "assets/index-C2mwTJQ9.css",
    },
    {
      revision: "cfb713bd463d6ffcccc71a9de1c66c80",
      url: "assets/index-C5iQrjYA.js",
    },
    {
      revision: "308e12d4ec32f9ae58d82c99d2f365e9",
      url: "assets/index-C68EXjGN.js",
    },
    {
      revision: "14780c02547fd8afa11ae6f3d81e25bf",
      url: "assets/index-Cd37bTDS.js",
    },
    {
      revision: "4383f26b536f7b4fd8f0c1ab867712d8",
      url: "assets/index-CDNrQPXg.js",
    },
    {
      revision: "04d6b77ea28d4c6b2b1a97888f6122ac",
      url: "assets/index-CEirntkD.js",
    },
    {
      revision: "308e12d4ec32f9ae58d82c99d2f365e9",
      url: "assets/index-CfhvFe7M.js",
    },
    {
      revision: "aaee42e7df49a2ab95ff527307f7b941",
      url: "assets/index-CikYoHEt.js",
    },
    {
      revision: "014a54772ba02f7197989b55def91a94",
      url: "assets/index-CK9u4lu_.js",
    },
    {
      revision: "680fe03cf0ecfc982513b6cbab81cd7b",
      url: "assets/index-Cp-3lvCI.js",
    },
    {
      revision: "586c9988562a9941012d024b2c4d2214",
      url: "assets/index-CPRFYrHB.js",
    },
    {
      revision: "5bbc158effce7045c3696925dd1a4ee9",
      url: "assets/index-CSqi4AR7.css",
    },
    {
      revision: "89ba7d45369d011b33d7d771e0a6bd4b",
      url: "assets/index-CY1NqIcz.js",
    },
    {
      revision: "bf419907eab7204dedcf43d1cc975291",
      url: "assets/index-CYmkmeYk.js",
    },
    {
      revision: "bd8ea5ea629cee27c4d4ebb7f56e4ad8",
      url: "assets/index-D0l-h3m5.js",
    },
    {
      revision: "24dc8fb6f1b4eef0eb4122a7f47854dc",
      url: "assets/index-D8V9pVF7.js",
    },
    {
      revision: "a2d8fd05e47a357b96857ccd98cb7258",
      url: "assets/index-DAEqJMkH.js",
    },
    {
      revision: "746811d9ec97189d444091a2c92aa232",
      url: "assets/index-DfEpDsPM.js",
    },
    {
      revision: "425285a886d99849c7b6eb668a691ff7",
      url: "assets/index-DI9ERVup.js",
    },
    {
      revision: "392e7e44a6c75dfad4a1b6fadacda4ee",
      url: "assets/index-Dkj0gplf.js",
    },
    {
      revision: "0e39f4e2fabf3cf3647a8a3bb2ffa350",
      url: "assets/index-DpBdlZgQ.js",
    },
    {
      revision: "11331597f928113ddfd15e4c1f5dc9c1",
      url: "assets/index-DpRTSkBv.js",
    },
    {
      revision: "17efc346dd4fa8f38aadc8a9498bfb65",
      url: "assets/index-DqLUfN9A.js",
    },
    {
      revision: "82ccb74485a7b224a94658169c3127a3",
      url: "assets/index-Dr_oG6RI.js",
    },
    {
      revision: "649e320a16ab68be2a6166c52cf85b48",
      url: "assets/index-DTvakJvj.js",
    },
    {
      revision: "fababff700b7dfcdc7b3fa0f789470d0",
      url: "assets/index-DTyOMKhy.js",
    },
    {
      revision: "fc53a2630a547e1b595eb552abd7bb84",
      url: "assets/index-DuAFbZnD.js",
    },
    {
      revision: "c3354b61f875c49f5acc21a39420beb5",
      url: "assets/index-DyzvZ7nZ.js",
    },
    {
      revision: "627e930234c51c342882cb490aab7e24",
      url: "assets/index-M-MvzLxu.js",
    },
    {
      revision: "dd7806519d78668b442f3ea175e64498",
      url: "assets/index-N7UJx-7T.js",
    },
    {
      revision: "8d820d4f3e8613a9777c00a3d1ca7d57",
      url: "assets/index-VCgRmrWf.js",
    },
    {
      revision: "9de3c76658beededa159a01498c6353c",
      url: "assets/js/fp.min.js",
    },
    {
      revision: "5e917bf873959259bc9ff88cf1c6427e",
      url: "assets/license-COT4m57t.js",
    },
    {
      revision: "4abe47051f028302ef76c0f868df8b3a",
      url: "assets/notfound-CDS_QcmH.js",
    },
    {
      revision: "e556c3b84b5531dffa916d7eab2676c5",
      url: "assets/NoticeComment-COHO33o0.js",
    },
    {
      revision: "75f6e18a7450a6d0e536d9d1ab103809",
      url: "assets/OriginalsGames-BdG_MoCp.js",
    },
    {
      revision: "a4c80253f2c81f8b425e2c0d88020415",
      url: "assets/Provider.page-Mw-M9L94.js",
    },
    {
      revision: "72b9699df6f8fbae650d8ba0cb0d7eb9",
      url: "assets/Providers.page--3v3ntvo.js",
    },
    {
      revision: "0c8b728f40dbaf44b02c1f973635c6f0",
      url: "assets/Recent.page-BK9k8NxV.js",
    },
    {
      revision: "81d3c44861c6de2eef6c1362d012f3f3",
      url: "assets/Sports.page-DrVxSkAX.js",
    },
    {
      revision: "3143d16e02d03bb73be6d734b13e656e",
      url: "assets/Tag.page-BD9fXFvy.js",
    },
    {
      revision: "38325fe7c3c7c7e8907327c7b765f37c",
      url: "assets/Themes.page-k81lx3Dk.js",
    },
    {
      revision: "e1b79c7b02854435a8b5bffc6e15756b",
      url: "assets/ThrowAndHighRolles-DLvg88_G.js",
    },
    {
      revision: "463de4f6b7bd6725e46fb46f93b97dc1",
      url: "assets/Update-BkkxtFJy.js",
    },
    {
      revision: "8159a15cb8648baed35579a71df0dafe",
      url: "assets/workbox-window.prod.es5-Cr_0OO2S.js",
    },
    {
      revision: "b8e6925257193d93b862ddb73e4d164d",
      url: "assets/wr_utils.dist-DvgtdgCy-CUXsbV0Z.js",
    },
    { revision: "23cb1015eb36e426e0dc72cfaf8c71fa", url: "forum_script.js" },
    { revision: "946661cf0e35f42436dbb4a28b802cab", url: "index.html" },
    { revision: "88f8513a7b1dd3bcf81c2d44ec8ffa0e", url: "softswiss.html" },
    {
      revision: "11ebbae215b0f07cb508af5aa51e8278",
      url: "android-chrome-192x192.png",
    },
    {
      revision: "9d71d9e23a4bd85f9e4c8776a73ed90a",
      url: "android-chrome-512x512.png",
    },
    {
      revision: "34f2d328564d8408bc8f538c39395b17",
      url: "manifest.webmanifest",
    },
  ].filter((e) => !e.url.endsWith(".html"));
  ae(),
    ne(a),
    v(
      ({ request: e }) => e.mode === "navigate",
      new ie({ cacheName: "pages-cache" })
    ),
    self.addEventListener("message", (e) => {
      e.data && e.data.type === "SKIP_WAITING" && self.skipWaiting();
    });
} catch (a) {
  console.info("Service Worker encountered an error:", a);
}
