var $ = Object.defineProperty,
  C = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty,
  W = Object.prototype.propertyIsEnumerable;
var L = (p, a, o) =>
    a in p
      ? $(p, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (p[a] = o),
  k = (p, a) => {
    for (var o in a || (a = {})) q.call(a, o) && L(p, o, a[o]);
    if (F) for (var o of F(a)) W.call(a, o) && L(p, o, a[o]);
    return p;
  },
  I = (p, a) => C(p, X(a));
import { f as G, o as D } from "./manifest-a234c8a0.js";
import { a as T } from "./index-eff0ad24.js";
import { a4 as M } from "./game-a49e1f5b.js";
function j(p) {
  const [a, o] = G(p.mute);
  return (
    D(() => {
      p.stopAll();
    }),
    {
      playSound: (d, s) => p.play(d, s),
      mute: a,
      toggleMute: (d) => {
        o(d),
          p.toggleMute(d),
          d &&
            Object.keys(p.sounds).forEach((s) => {
              p.stop(s);
            });
      },
      stopSound: (d) => {
        p.stop(d);
      },
    }
  );
}
function J(p) {
  const [a, o] = G(!p.bgSoundEnable),
    d = (s) => p.playBackground(s);
  return (
    D(() => {
      p.stopAll();
    }),
    {
      playBackgroundMusic: d,
      bgMute: a,
      toggleBgMute: (s) => {
        o(s), p.toggleBgMute(s), s ? p.stopBackground() : d();
      },
    }
  );
}
var B,
  V = {};
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (B = V),
  (function () {
    var p = function () {
      this.init();
    };
    p.prototype = {
      init: function () {
        var e = this || a;
        return (
          (e._counter = 1e3),
          (e._html5AudioPool = []),
          (e.html5PoolSize = 10),
          (e._codecs = {}),
          (e._howls = []),
          (e._muted = !1),
          (e._volume = 1),
          (e._canPlayEvent = "canplaythrough"),
          (e._navigator =
            typeof window != "undefined" && window.navigator
              ? window.navigator
              : null),
          (e.masterGain = null),
          (e.noAudio = !1),
          (e.usingWebAudio = !0),
          (e.autoSuspend = !0),
          (e.ctx = null),
          (e.autoUnlock = !0),
          e._setup(),
          e
        );
      },
      volume: function (e) {
        var n = this || a;
        if (
          ((e = parseFloat(e)), n.ctx || c(), e !== void 0 && e >= 0 && e <= 1)
        ) {
          if (((n._volume = e), n._muted)) return n;
          n.usingWebAudio &&
            n.masterGain.gain.setValueAtTime(e, a.ctx.currentTime);
          for (var t = 0; t < n._howls.length; t++)
            if (!n._howls[t]._webAudio)
              for (
                var r = n._howls[t]._getSoundIds(), i = 0;
                i < r.length;
                i++
              ) {
                var u = n._howls[t]._soundById(r[i]);
                u && u._node && (u._node.volume = u._volume * e);
              }
          return n;
        }
        return n._volume;
      },
      mute: function (e) {
        var n = this || a;
        n.ctx || c(),
          (n._muted = e),
          n.usingWebAudio &&
            n.masterGain.gain.setValueAtTime(
              e ? 0 : n._volume,
              a.ctx.currentTime
            );
        for (var t = 0; t < n._howls.length; t++)
          if (!n._howls[t]._webAudio)
            for (var r = n._howls[t]._getSoundIds(), i = 0; i < r.length; i++) {
              var u = n._howls[t]._soundById(r[i]);
              u && u._node && (u._node.muted = !!e || u._muted);
            }
        return n;
      },
      stop: function () {
        for (var e = this || a, n = 0; n < e._howls.length; n++)
          e._howls[n].stop();
        return e;
      },
      unload: function () {
        for (var e = this || a, n = e._howls.length - 1; n >= 0; n--)
          e._howls[n].unload();
        return (
          e.usingWebAudio &&
            e.ctx &&
            e.ctx.close !== void 0 &&
            (e.ctx.close(), (e.ctx = null), c()),
          e
        );
      },
      codecs: function (e) {
        return (this || a)._codecs[e.replace(/^x-/, "")];
      },
      _setup: function () {
        var e = this || a;
        if (
          ((e.state = (e.ctx && e.ctx.state) || "suspended"),
          e._autoSuspend(),
          !e.usingWebAudio)
        )
          if (typeof Audio != "undefined")
            try {
              new Audio().oncanplaythrough === void 0 &&
                (e._canPlayEvent = "canplay");
            } catch (n) {
              e.noAudio = !0;
            }
          else e.noAudio = !0;
        try {
          new Audio().muted && (e.noAudio = !0);
        } catch (n) {}
        return e.noAudio || e._setupCodecs(), e;
      },
      _setupCodecs: function () {
        var e = this || a,
          n = null;
        try {
          n = typeof Audio != "undefined" ? new Audio() : null;
        } catch (y) {
          return e;
        }
        if (!n || typeof n.canPlayType != "function") return e;
        var t = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          r = e._navigator ? e._navigator.userAgent : "",
          i = r.match(/OPR\/(\d+)/g),
          u = i && parseInt(i[0].split("/")[1], 10) < 33,
          _ = r.indexOf("Safari") !== -1 && r.indexOf("Chrome") === -1,
          v = r.match(/Version\/(.*?) /),
          h = _ && v && parseInt(v[1], 10) < 15;
        return (
          (e._codecs = {
            mp3: !(
              u ||
              (!t && !n.canPlayType("audio/mp3;").replace(/^no$/, ""))
            ),
            mpeg: !!t,
            opus: !!n
              .canPlayType('audio/ogg; codecs="opus"')
              .replace(/^no$/, ""),
            ogg: !!n
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            oga: !!n
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            wav: !!(
              n.canPlayType('audio/wav; codecs="1"') ||
              n.canPlayType("audio/wav")
            ).replace(/^no$/, ""),
            aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(
              n.canPlayType("audio/x-m4a;") ||
              n.canPlayType("audio/m4a;") ||
              n.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            m4b: !!(
              n.canPlayType("audio/x-m4b;") ||
              n.canPlayType("audio/m4b;") ||
              n.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            mp4: !!(
              n.canPlayType("audio/x-mp4;") ||
              n.canPlayType("audio/mp4;") ||
              n.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            weba: !(
              h ||
              !n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            ),
            webm: !(
              h ||
              !n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            ),
            dolby: !!n
              .canPlayType('audio/mp4; codecs="ec-3"')
              .replace(/^no$/, ""),
            flac: !!(
              n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")
            ).replace(/^no$/, ""),
          }),
          e
        );
      },
      _unlockAudio: function () {
        var e = this || a;
        if (!e._audioUnlocked && e.ctx) {
          (e._audioUnlocked = !1),
            (e.autoUnlock = !1),
            e._mobileUnloaded ||
              e.ctx.sampleRate === 44100 ||
              ((e._mobileUnloaded = !0), e.unload()),
            (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
          var n = function (t) {
            for (; e._html5AudioPool.length < e.html5PoolSize; )
              try {
                var r = new Audio();
                (r._unlocked = !0), e._releaseHtml5Audio(r);
              } catch (y) {
                e.noAudio = !0;
                break;
              }
            for (var i = 0; i < e._howls.length; i++)
              if (!e._howls[i]._webAudio)
                for (
                  var u = e._howls[i]._getSoundIds(), _ = 0;
                  _ < u.length;
                  _++
                ) {
                  var v = e._howls[i]._soundById(u[_]);
                  v &&
                    v._node &&
                    !v._node._unlocked &&
                    ((v._node._unlocked = !0), v._node.load());
                }
            e._autoResume();
            var h = e.ctx.createBufferSource();
            (h.buffer = e._scratchBuffer),
              h.connect(e.ctx.destination),
              h.start === void 0 ? h.noteOn(0) : h.start(0),
              typeof e.ctx.resume == "function" && e.ctx.resume(),
              (h.onended = function () {
                h.disconnect(0),
                  (e._audioUnlocked = !0),
                  document.removeEventListener("touchstart", n, !0),
                  document.removeEventListener("touchend", n, !0),
                  document.removeEventListener("click", n, !0),
                  document.removeEventListener("keydown", n, !0);
                for (var y = 0; y < e._howls.length; y++)
                  e._howls[y]._emit("unlock");
              });
          };
          return (
            document.addEventListener("touchstart", n, !0),
            document.addEventListener("touchend", n, !0),
            document.addEventListener("click", n, !0),
            document.addEventListener("keydown", n, !0),
            e
          );
        }
      },
      _obtainHtml5Audio: function () {
        var e = this || a;
        if (e._html5AudioPool.length) return e._html5AudioPool.pop();
        var n = new Audio().play();
        return (
          n &&
            typeof Promise != "undefined" &&
            (n instanceof Promise || typeof n.then == "function") &&
            n.catch(function () {}),
          new Audio()
        );
      },
      _releaseHtml5Audio: function (e) {
        var n = this || a;
        return e._unlocked && n._html5AudioPool.push(e), n;
      },
      _autoSuspend: function () {
        var e = this;
        if (
          e.autoSuspend &&
          e.ctx &&
          e.ctx.suspend !== void 0 &&
          a.usingWebAudio
        ) {
          for (var n = 0; n < e._howls.length; n++)
            if (e._howls[n]._webAudio) {
              for (var t = 0; t < e._howls[n]._sounds.length; t++)
                if (!e._howls[n]._sounds[t]._paused) return e;
            }
          return (
            e._suspendTimer && clearTimeout(e._suspendTimer),
            (e._suspendTimer = setTimeout(function () {
              if (e.autoSuspend) {
                (e._suspendTimer = null), (e.state = "suspending");
                var r = function () {
                  (e.state = "suspended"),
                    e._resumeAfterSuspend &&
                      (delete e._resumeAfterSuspend, e._autoResume());
                };
                e.ctx.suspend().then(r, r);
              }
            }, 3e4)),
            e
          );
        }
      },
      _autoResume: function () {
        var e = this;
        if (e.ctx && e.ctx.resume !== void 0 && a.usingWebAudio)
          return (
            e.state === "running" &&
            e.ctx.state !== "interrupted" &&
            e._suspendTimer
              ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
              : e.state === "suspended" ||
                (e.state === "running" && e.ctx.state === "interrupted")
              ? (e.ctx.resume().then(function () {
                  e.state = "running";
                  for (var n = 0; n < e._howls.length; n++)
                    e._howls[n]._emit("resume");
                }),
                e._suspendTimer &&
                  (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
              : e.state === "suspending" && (e._resumeAfterSuspend = !0),
            e
          );
      },
    };
    var a = new p(),
      o = function (e) {
        e.src && e.src.length !== 0 && this.init(e);
      };
    o.prototype = {
      init: function (e) {
        var n = this;
        return (
          a.ctx || c(),
          (n._autoplay = e.autoplay || !1),
          (n._format = typeof e.format != "string" ? e.format : [e.format]),
          (n._html5 = e.html5 || !1),
          (n._muted = e.mute || !1),
          (n._loop = e.loop || !1),
          (n._pool = e.pool || 5),
          (n._preload =
            (typeof e.preload != "boolean" && e.preload !== "metadata") ||
            e.preload),
          (n._rate = e.rate || 1),
          (n._sprite = e.sprite || {}),
          (n._src = typeof e.src != "string" ? e.src : [e.src]),
          (n._volume = e.volume !== void 0 ? e.volume : 1),
          (n._xhr = {
            method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
            headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
            withCredentials:
              !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
          }),
          (n._duration = 0),
          (n._state = "unloaded"),
          (n._sounds = []),
          (n._endTimers = {}),
          (n._queue = []),
          (n._playLock = !1),
          (n._onend = e.onend ? [{ fn: e.onend }] : []),
          (n._onfade = e.onfade ? [{ fn: e.onfade }] : []),
          (n._onload = e.onload ? [{ fn: e.onload }] : []),
          (n._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
          (n._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
          (n._onpause = e.onpause ? [{ fn: e.onpause }] : []),
          (n._onplay = e.onplay ? [{ fn: e.onplay }] : []),
          (n._onstop = e.onstop ? [{ fn: e.onstop }] : []),
          (n._onmute = e.onmute ? [{ fn: e.onmute }] : []),
          (n._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
          (n._onrate = e.onrate ? [{ fn: e.onrate }] : []),
          (n._onseek = e.onseek ? [{ fn: e.onseek }] : []),
          (n._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
          (n._onresume = []),
          (n._webAudio = a.usingWebAudio && !n._html5),
          a.ctx !== void 0 && a.ctx && a.autoUnlock && a._unlockAudio(),
          a._howls.push(n),
          n._autoplay &&
            n._queue.push({
              event: "play",
              action: function () {
                n.play();
              },
            }),
          n._preload && n._preload !== "none" && n.load(),
          n
        );
      },
      load: function () {
        var e = this,
          n = null;
        if (a.noAudio) e._emit("loaderror", null, "No audio support.");
        else {
          typeof e._src == "string" && (e._src = [e._src]);
          for (var t = 0; t < e._src.length; t++) {
            var r, i;
            if (e._format && e._format[t]) r = e._format[t];
            else {
              if (typeof (i = e._src[t]) != "string") {
                e._emit(
                  "loaderror",
                  null,
                  "Non-string found in selected audio sources - ignoring."
                );
                continue;
              }
              (r = /^data:audio\/([^;,]+);/i.exec(i)) ||
                (r = /\.([^.]+)$/.exec(i.split("?", 1)[0])),
                r && (r = r[1].toLowerCase());
            }
            if (r && a.codecs(r)) {
              n = e._src[t];
              break;
            }
          }
          if (n)
            return (
              (e._src = n),
              (e._state = "loading"),
              window.location.protocol === "https:" &&
                n.slice(0, 5) === "http:" &&
                ((e._html5 = !0), (e._webAudio = !1)),
              new d(e),
              e._webAudio && l(e),
              e
            );
          e._emit(
            "loaderror",
            null,
            "No codec support for selected audio sources."
          );
        }
      },
      play: function (e, n) {
        var t = this,
          r = null;
        if (typeof e == "number") (r = e), (e = null);
        else {
          if (typeof e == "string" && t._state === "loaded" && !t._sprite[e])
            return null;
          if (e === void 0 && ((e = "__default"), !t._playLock)) {
            for (var i = 0, u = 0; u < t._sounds.length; u++)
              t._sounds[u]._paused &&
                !t._sounds[u]._ended &&
                (i++, (r = t._sounds[u]._id));
            i === 1 ? (e = null) : (r = null);
          }
        }
        var _ = r ? t._soundById(r) : t._inactiveSound();
        if (!_) return null;
        if (
          (r && !e && (e = _._sprite || "__default"), t._state !== "loaded")
        ) {
          (_._sprite = e), (_._ended = !1);
          var v = _._id;
          return (
            t._queue.push({
              event: "play",
              action: function () {
                t.play(v);
              },
            }),
            v
          );
        }
        if (r && !_._paused) return n || t._loadQueue("play"), _._id;
        t._webAudio && a._autoResume();
        var h = Math.max(0, _._seek > 0 ? _._seek : t._sprite[e][0] / 1e3),
          y = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - h),
          w = (1e3 * y) / Math.abs(_._rate),
          x = t._sprite[e][0] / 1e3,
          S = (t._sprite[e][0] + t._sprite[e][1]) / 1e3;
        (_._sprite = e), (_._ended = !1);
        var O = function () {
          (_._paused = !1),
            (_._seek = h),
            (_._start = x),
            (_._stop = S),
            (_._loop = !(!_._loop && !t._sprite[e][2]));
        };
        if (!(h >= S)) {
          var g = _._node;
          if (t._webAudio) {
            var H = function () {
              (t._playLock = !1), O(), t._refreshBuffer(_);
              var b = _._muted || t._muted ? 0 : _._volume;
              g.gain.setValueAtTime(b, a.ctx.currentTime),
                (_._playStart = a.ctx.currentTime),
                g.bufferSource.start === void 0
                  ? _._loop
                    ? g.bufferSource.noteGrainOn(0, h, 86400)
                    : g.bufferSource.noteGrainOn(0, h, y)
                  : _._loop
                  ? g.bufferSource.start(0, h, 86400)
                  : g.bufferSource.start(0, h, y),
                w !== 1 / 0 &&
                  (t._endTimers[_._id] = setTimeout(t._ended.bind(t, _), w)),
                n ||
                  setTimeout(function () {
                    t._emit("play", _._id), t._loadQueue();
                  }, 0);
            };
            a.state === "running" && a.ctx.state !== "interrupted"
              ? H()
              : ((t._playLock = !0), t.once("resume", H), t._clearTimer(_._id));
          } else {
            var E = function () {
              (g.currentTime = h),
                (g.muted = _._muted || t._muted || a._muted || g.muted),
                (g.volume = _._volume * a.volume()),
                (g.playbackRate = _._rate);
              try {
                var b = g.play();
                if (
                  (b &&
                  typeof Promise != "undefined" &&
                  (b instanceof Promise || typeof b.then == "function")
                    ? ((t._playLock = !0),
                      O(),
                      b
                        .then(function () {
                          (t._playLock = !1),
                            (g._unlocked = !0),
                            n ? t._loadQueue() : t._emit("play", _._id);
                        })
                        .catch(function () {
                          (t._playLock = !1),
                            t._emit(
                              "playerror",
                              _._id,
                              "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                            ),
                            (_._ended = !0),
                            (_._paused = !0);
                        }))
                    : n || ((t._playLock = !1), O(), t._emit("play", _._id)),
                  (g.playbackRate = _._rate),
                  g.paused)
                )
                  return void t._emit(
                    "playerror",
                    _._id,
                    "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                  );
                e !== "__default" || _._loop
                  ? (t._endTimers[_._id] = setTimeout(t._ended.bind(t, _), w))
                  : ((t._endTimers[_._id] = function () {
                      t._ended(_),
                        g.removeEventListener("ended", t._endTimers[_._id], !1);
                    }),
                    g.addEventListener("ended", t._endTimers[_._id], !1));
              } catch (R) {
                t._emit("playerror", _._id, R);
              }
            };
            g.src ===
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" &&
              ((g.src = t._src), g.load());
            var N =
              (window && window.ejecta) ||
              (!g.readyState && a._navigator.isCocoonJS);
            if (g.readyState >= 3 || N) E();
            else {
              (t._playLock = !0), (t._state = "loading");
              var P = function () {
                (t._state = "loaded"),
                  E(),
                  g.removeEventListener(a._canPlayEvent, P, !1);
              };
              g.addEventListener(a._canPlayEvent, P, !1), t._clearTimer(_._id);
            }
          }
          return _._id;
        }
        t._ended(_);
      },
      pause: function (e) {
        var n = this;
        if (n._state !== "loaded" || n._playLock)
          return (
            n._queue.push({
              event: "pause",
              action: function () {
                n.pause(e);
              },
            }),
            n
          );
        for (var t = n._getSoundIds(e), r = 0; r < t.length; r++) {
          n._clearTimer(t[r]);
          var i = n._soundById(t[r]);
          if (
            i &&
            !i._paused &&
            ((i._seek = n.seek(t[r])),
            (i._rateSeek = 0),
            (i._paused = !0),
            n._stopFade(t[r]),
            i._node)
          )
            if (n._webAudio) {
              if (!i._node.bufferSource) continue;
              i._node.bufferSource.stop === void 0
                ? i._node.bufferSource.noteOff(0)
                : i._node.bufferSource.stop(0),
                n._cleanBuffer(i._node);
            } else
              (isNaN(i._node.duration) && i._node.duration !== 1 / 0) ||
                i._node.pause();
          arguments[1] || n._emit("pause", i ? i._id : null);
        }
        return n;
      },
      stop: function (e, n) {
        var t = this;
        if (t._state !== "loaded" || t._playLock)
          return (
            t._queue.push({
              event: "stop",
              action: function () {
                t.stop(e);
              },
            }),
            t
          );
        for (var r = t._getSoundIds(e), i = 0; i < r.length; i++) {
          t._clearTimer(r[i]);
          var u = t._soundById(r[i]);
          u &&
            ((u._seek = u._start || 0),
            (u._rateSeek = 0),
            (u._paused = !0),
            (u._ended = !0),
            t._stopFade(r[i]),
            u._node &&
              (t._webAudio
                ? u._node.bufferSource &&
                  (u._node.bufferSource.stop === void 0
                    ? u._node.bufferSource.noteOff(0)
                    : u._node.bufferSource.stop(0),
                  t._cleanBuffer(u._node))
                : (isNaN(u._node.duration) && u._node.duration !== 1 / 0) ||
                  ((u._node.currentTime = u._start || 0),
                  u._node.pause(),
                  u._node.duration === 1 / 0 && t._clearSound(u._node))),
            n || t._emit("stop", u._id));
        }
        return t;
      },
      mute: function (e, n) {
        var t = this;
        if (t._state !== "loaded" || t._playLock)
          return (
            t._queue.push({
              event: "mute",
              action: function () {
                t.mute(e, n);
              },
            }),
            t
          );
        if (n === void 0) {
          if (typeof e != "boolean") return t._muted;
          t._muted = e;
        }
        for (var r = t._getSoundIds(n), i = 0; i < r.length; i++) {
          var u = t._soundById(r[i]);
          u &&
            ((u._muted = e),
            u._interval && t._stopFade(u._id),
            t._webAudio && u._node
              ? u._node.gain.setValueAtTime(
                  e ? 0 : u._volume,
                  a.ctx.currentTime
                )
              : u._node && (u._node.muted = !!a._muted || e),
            t._emit("mute", u._id));
        }
        return t;
      },
      volume: function () {
        var e,
          n,
          t,
          r = this,
          i = arguments;
        if (i.length === 0) return r._volume;
        if (
          (i.length === 1 || (i.length === 2 && i[1] === void 0)
            ? r._getSoundIds().indexOf(i[0]) >= 0
              ? (n = parseInt(i[0], 10))
              : (e = parseFloat(i[0]))
            : i.length >= 2 &&
              ((e = parseFloat(i[0])), (n = parseInt(i[1], 10))),
          !(e !== void 0 && e >= 0 && e <= 1))
        )
          return (t = n ? r._soundById(n) : r._sounds[0]) ? t._volume : 0;
        if (r._state !== "loaded" || r._playLock)
          return (
            r._queue.push({
              event: "volume",
              action: function () {
                r.volume.apply(r, i);
              },
            }),
            r
          );
        n === void 0 && (r._volume = e), (n = r._getSoundIds(n));
        for (var u = 0; u < n.length; u++)
          (t = r._soundById(n[u])) &&
            ((t._volume = e),
            i[2] || r._stopFade(n[u]),
            r._webAudio && t._node && !t._muted
              ? t._node.gain.setValueAtTime(e, a.ctx.currentTime)
              : t._node && !t._muted && (t._node.volume = e * a.volume()),
            r._emit("volume", t._id));
        return r;
      },
      fade: function (e, n, t, r) {
        var i = this;
        if (i._state !== "loaded" || i._playLock)
          return (
            i._queue.push({
              event: "fade",
              action: function () {
                i.fade(e, n, t, r);
              },
            }),
            i
          );
        (e = Math.min(Math.max(0, parseFloat(e)), 1)),
          (n = Math.min(Math.max(0, parseFloat(n)), 1)),
          (t = parseFloat(t)),
          i.volume(e, r);
        for (var u = i._getSoundIds(r), _ = 0; _ < u.length; _++) {
          var v = i._soundById(u[_]);
          if (v) {
            if ((r || i._stopFade(u[_]), i._webAudio && !v._muted)) {
              var h = a.ctx.currentTime,
                y = h + t / 1e3;
              (v._volume = e),
                v._node.gain.setValueAtTime(e, h),
                v._node.gain.linearRampToValueAtTime(n, y);
            }
            i._startFadeInterval(v, e, n, t, u[_], r === void 0);
          }
        }
        return i;
      },
      _startFadeInterval: function (e, n, t, r, i, u) {
        var _ = this,
          v = n,
          h = t - n,
          y = Math.abs(h / 0.01),
          w = Math.max(4, y > 0 ? r / y : r),
          x = Date.now();
        (e._fadeTo = t),
          (e._interval = setInterval(function () {
            var S = (Date.now() - x) / r;
            (x = Date.now()),
              (v += h * S),
              (v = Math.round(100 * v) / 100),
              (v = h < 0 ? Math.max(t, v) : Math.min(t, v)),
              _._webAudio ? (e._volume = v) : _.volume(v, e._id, !0),
              u && (_._volume = v),
              ((t < n && v <= t) || (t > n && v >= t)) &&
                (clearInterval(e._interval),
                (e._interval = null),
                (e._fadeTo = null),
                _.volume(t, e._id),
                _._emit("fade", e._id));
          }, w));
      },
      _stopFade: function (e) {
        var n = this,
          t = n._soundById(e);
        return (
          t &&
            t._interval &&
            (n._webAudio &&
              t._node.gain.cancelScheduledValues(a.ctx.currentTime),
            clearInterval(t._interval),
            (t._interval = null),
            n.volume(t._fadeTo, e),
            (t._fadeTo = null),
            n._emit("fade", e)),
          n
        );
      },
      loop: function () {
        var e,
          n,
          t,
          r = this,
          i = arguments;
        if (i.length === 0) return r._loop;
        if (i.length === 1) {
          if (typeof i[0] != "boolean")
            return !!(t = r._soundById(parseInt(i[0], 10))) && t._loop;
          (e = i[0]), (r._loop = e);
        } else i.length === 2 && ((e = i[0]), (n = parseInt(i[1], 10)));
        for (var u = r._getSoundIds(n), _ = 0; _ < u.length; _++)
          (t = r._soundById(u[_])) &&
            ((t._loop = e),
            r._webAudio &&
              t._node &&
              t._node.bufferSource &&
              ((t._node.bufferSource.loop = e),
              e &&
                ((t._node.bufferSource.loopStart = t._start || 0),
                (t._node.bufferSource.loopEnd = t._stop),
                r.playing(u[_]) && (r.pause(u[_], !0), r.play(u[_], !0)))));
        return r;
      },
      rate: function () {
        var e,
          n,
          t,
          r = this,
          i = arguments;
        if (
          (i.length === 0
            ? (n = r._sounds[0]._id)
            : i.length === 1
            ? r._getSoundIds().indexOf(i[0]) >= 0
              ? (n = parseInt(i[0], 10))
              : (e = parseFloat(i[0]))
            : i.length === 2 &&
              ((e = parseFloat(i[0])), (n = parseInt(i[1], 10))),
          typeof e != "number")
        )
          return (t = r._soundById(n)) ? t._rate : r._rate;
        if (r._state !== "loaded" || r._playLock)
          return (
            r._queue.push({
              event: "rate",
              action: function () {
                r.rate.apply(r, i);
              },
            }),
            r
          );
        n === void 0 && (r._rate = e), (n = r._getSoundIds(n));
        for (var u = 0; u < n.length; u++)
          if ((t = r._soundById(n[u]))) {
            r.playing(n[u]) &&
              ((t._rateSeek = r.seek(n[u])),
              (t._playStart = r._webAudio ? a.ctx.currentTime : t._playStart)),
              (t._rate = e),
              r._webAudio && t._node && t._node.bufferSource
                ? t._node.bufferSource.playbackRate.setValueAtTime(
                    e,
                    a.ctx.currentTime
                  )
                : t._node && (t._node.playbackRate = e);
            var _ = r.seek(n[u]),
              v =
                (1e3 *
                  ((r._sprite[t._sprite][0] + r._sprite[t._sprite][1]) / 1e3 -
                    _)) /
                Math.abs(t._rate);
            (!r._endTimers[n[u]] && t._paused) ||
              (r._clearTimer(n[u]),
              (r._endTimers[n[u]] = setTimeout(r._ended.bind(r, t), v))),
              r._emit("rate", t._id);
          }
        return r;
      },
      seek: function () {
        var e,
          n,
          t = this,
          r = arguments;
        if (
          (r.length === 0
            ? t._sounds.length && (n = t._sounds[0]._id)
            : r.length === 1
            ? t._getSoundIds().indexOf(r[0]) >= 0
              ? (n = parseInt(r[0], 10))
              : t._sounds.length &&
                ((n = t._sounds[0]._id), (e = parseFloat(r[0])))
            : r.length === 2 &&
              ((e = parseFloat(r[0])), (n = parseInt(r[1], 10))),
          n === void 0)
        )
          return 0;
        if (typeof e == "number" && (t._state !== "loaded" || t._playLock))
          return (
            t._queue.push({
              event: "seek",
              action: function () {
                t.seek.apply(t, r);
              },
            }),
            t
          );
        var i = t._soundById(n);
        if (i) {
          if (!(typeof e == "number" && e >= 0)) {
            if (t._webAudio) {
              var u = t.playing(n) ? a.ctx.currentTime - i._playStart : 0,
                _ = i._rateSeek ? i._rateSeek - i._seek : 0;
              return i._seek + (_ + u * Math.abs(i._rate));
            }
            return i._node.currentTime;
          }
          var v = t.playing(n);
          v && t.pause(n, !0),
            (i._seek = e),
            (i._ended = !1),
            t._clearTimer(n),
            t._webAudio ||
              !i._node ||
              isNaN(i._node.duration) ||
              (i._node.currentTime = e);
          var h = function () {
            v && t.play(n, !0), t._emit("seek", n);
          };
          if (v && !t._webAudio) {
            var y = function () {
              t._playLock ? setTimeout(y, 0) : h();
            };
            setTimeout(y, 0);
          } else h();
        }
        return t;
      },
      playing: function (e) {
        var n = this;
        if (typeof e == "number") {
          var t = n._soundById(e);
          return !!t && !t._paused;
        }
        for (var r = 0; r < n._sounds.length; r++)
          if (!n._sounds[r]._paused) return !0;
        return !1;
      },
      duration: function (e) {
        var n = this,
          t = n._duration,
          r = n._soundById(e);
        return r && (t = n._sprite[r._sprite][1] / 1e3), t;
      },
      state: function () {
        return this._state;
      },
      unload: function () {
        for (var e = this, n = e._sounds, t = 0; t < n.length; t++)
          n[t]._paused || e.stop(n[t]._id),
            e._webAudio ||
              (e._clearSound(n[t]._node),
              n[t]._node.removeEventListener("error", n[t]._errorFn, !1),
              n[t]._node.removeEventListener(a._canPlayEvent, n[t]._loadFn, !1),
              n[t]._node.removeEventListener("ended", n[t]._endFn, !1),
              a._releaseHtml5Audio(n[t]._node)),
            delete n[t]._node,
            e._clearTimer(n[t]._id);
        var r = a._howls.indexOf(e);
        r >= 0 && a._howls.splice(r, 1);
        var i = !0;
        for (t = 0; t < a._howls.length; t++)
          if (
            a._howls[t]._src === e._src ||
            e._src.indexOf(a._howls[t]._src) >= 0
          ) {
            i = !1;
            break;
          }
        return (
          s && i && delete s[e._src],
          (a.noAudio = !1),
          (e._state = "unloaded"),
          (e._sounds = []),
          (e = null),
          null
        );
      },
      on: function (e, n, t, r) {
        var i = this["_on" + e];
        return (
          typeof n == "function" &&
            i.push(r ? { id: t, fn: n, once: r } : { id: t, fn: n }),
          this
        );
      },
      off: function (e, n, t) {
        var r = this,
          i = r["_on" + e],
          u = 0;
        if ((typeof n == "number" && ((t = n), (n = null)), n || t))
          for (u = 0; u < i.length; u++) {
            var _ = t === i[u].id;
            if ((n === i[u].fn && _) || (!n && _)) {
              i.splice(u, 1);
              break;
            }
          }
        else if (e) r["_on" + e] = [];
        else {
          var v = Object.keys(r);
          for (u = 0; u < v.length; u++)
            v[u].indexOf("_on") === 0 &&
              Array.isArray(r[v[u]]) &&
              (r[v[u]] = []);
        }
        return r;
      },
      once: function (e, n, t) {
        return this.on(e, n, t, 1), this;
      },
      _emit: function (e, n, t) {
        for (var r = this, i = r["_on" + e], u = i.length - 1; u >= 0; u--)
          (i[u].id && i[u].id !== n && e !== "load") ||
            (setTimeout(
              function (_) {
                _.call(this, n, t);
              }.bind(r, i[u].fn),
              0
            ),
            i[u].once && r.off(e, i[u].fn, i[u].id));
        return r._loadQueue(e), r;
      },
      _loadQueue: function (e) {
        var n = this;
        if (n._queue.length > 0) {
          var t = n._queue[0];
          t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action();
        }
        return n;
      },
      _ended: function (e) {
        var n = this,
          t = e._sprite;
        if (
          !n._webAudio &&
          e._node &&
          !e._node.paused &&
          !e._node.ended &&
          e._node.currentTime < e._stop
        )
          return setTimeout(n._ended.bind(n, e), 100), n;
        var r = !(!e._loop && !n._sprite[t][2]);
        if (
          (n._emit("end", e._id),
          !n._webAudio && r && n.stop(e._id, !0).play(e._id),
          n._webAudio && r)
        ) {
          n._emit("play", e._id),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            (e._playStart = a.ctx.currentTime);
          var i = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
          n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), i);
        }
        return (
          n._webAudio &&
            !r &&
            ((e._paused = !0),
            (e._ended = !0),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            n._clearTimer(e._id),
            n._cleanBuffer(e._node),
            a._autoSuspend()),
          n._webAudio || r || n.stop(e._id, !0),
          n
        );
      },
      _clearTimer: function (e) {
        var n = this;
        if (n._endTimers[e]) {
          if (typeof n._endTimers[e] != "function")
            clearTimeout(n._endTimers[e]);
          else {
            var t = n._soundById(e);
            t &&
              t._node &&
              t._node.removeEventListener("ended", n._endTimers[e], !1);
          }
          delete n._endTimers[e];
        }
        return n;
      },
      _soundById: function (e) {
        for (var n = this, t = 0; t < n._sounds.length; t++)
          if (e === n._sounds[t]._id) return n._sounds[t];
        return null;
      },
      _inactiveSound: function () {
        var e = this;
        e._drain();
        for (var n = 0; n < e._sounds.length; n++)
          if (e._sounds[n]._ended) return e._sounds[n].reset();
        return new d(e);
      },
      _drain: function () {
        var e = this,
          n = e._pool,
          t = 0,
          r = 0;
        if (!(e._sounds.length < n)) {
          for (r = 0; r < e._sounds.length; r++) e._sounds[r]._ended && t++;
          for (r = e._sounds.length - 1; r >= 0; r--) {
            if (t <= n) return;
            e._sounds[r]._ended &&
              (e._webAudio &&
                e._sounds[r]._node &&
                e._sounds[r]._node.disconnect(0),
              e._sounds.splice(r, 1),
              t--);
          }
        }
      },
      _getSoundIds: function (e) {
        if (e === void 0) {
          for (var n = [], t = 0; t < this._sounds.length; t++)
            n.push(this._sounds[t]._id);
          return n;
        }
        return [e];
      },
      _refreshBuffer: function (e) {
        return (
          (e._node.bufferSource = a.ctx.createBufferSource()),
          (e._node.bufferSource.buffer = s[this._src]),
          e._panner
            ? e._node.bufferSource.connect(e._panner)
            : e._node.bufferSource.connect(e._node),
          (e._node.bufferSource.loop = e._loop),
          e._loop &&
            ((e._node.bufferSource.loopStart = e._start || 0),
            (e._node.bufferSource.loopEnd = e._stop || 0)),
          e._node.bufferSource.playbackRate.setValueAtTime(
            e._rate,
            a.ctx.currentTime
          ),
          this
        );
      },
      _cleanBuffer: function (e) {
        var n = a._navigator && a._navigator.vendor.indexOf("Apple") >= 0;
        if (!e.bufferSource) return this;
        if (
          a._scratchBuffer &&
          e.bufferSource &&
          ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), n)
        )
          try {
            e.bufferSource.buffer = a._scratchBuffer;
          } catch (t) {}
        return (e.bufferSource = null), this;
      },
      _clearSound: function (e) {
        /MSIE |Trident\//.test(a._navigator && a._navigator.userAgent) ||
          (e.src =
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
      },
    };
    var d = function (e) {
      (this._parent = e), this.init();
    };
    d.prototype = {
      init: function () {
        var e = this,
          n = e._parent;
        return (
          (e._muted = n._muted),
          (e._loop = n._loop),
          (e._volume = n._volume),
          (e._rate = n._rate),
          (e._seek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = ++a._counter),
          n._sounds.push(e),
          e.create(),
          e
        );
      },
      create: function () {
        var e = this,
          n = e._parent,
          t = a._muted || e._muted || e._parent._muted ? 0 : e._volume;
        return (
          n._webAudio
            ? ((e._node =
                a.ctx.createGain === void 0
                  ? a.ctx.createGainNode()
                  : a.ctx.createGain()),
              e._node.gain.setValueAtTime(t, a.ctx.currentTime),
              (e._node.paused = !0),
              e._node.connect(a.masterGain))
            : a.noAudio ||
              ((e._node = a._obtainHtml5Audio()),
              (e._errorFn = e._errorListener.bind(e)),
              e._node.addEventListener("error", e._errorFn, !1),
              (e._loadFn = e._loadListener.bind(e)),
              e._node.addEventListener(a._canPlayEvent, e._loadFn, !1),
              (e._endFn = e._endListener.bind(e)),
              e._node.addEventListener("ended", e._endFn, !1),
              (e._node.src = n._src),
              (e._node.preload = n._preload === !0 ? "auto" : n._preload),
              (e._node.volume = t * a.volume()),
              e._node.load()),
          e
        );
      },
      reset: function () {
        var e = this,
          n = e._parent;
        return (
          (e._muted = n._muted),
          (e._loop = n._loop),
          (e._volume = n._volume),
          (e._rate = n._rate),
          (e._seek = 0),
          (e._rateSeek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = ++a._counter),
          e
        );
      },
      _errorListener: function () {
        var e = this;
        e._parent._emit(
          "loaderror",
          e._id,
          e._node.error ? e._node.error.code : 0
        ),
          e._node.removeEventListener("error", e._errorFn, !1);
      },
      _loadListener: function () {
        var e = this,
          n = e._parent;
        (n._duration = Math.ceil(10 * e._node.duration) / 10),
          Object.keys(n._sprite).length === 0 &&
            (n._sprite = { __default: [0, 1e3 * n._duration] }),
          n._state !== "loaded" &&
            ((n._state = "loaded"), n._emit("load"), n._loadQueue()),
          e._node.removeEventListener(a._canPlayEvent, e._loadFn, !1);
      },
      _endListener: function () {
        var e = this,
          n = e._parent;
        n._duration === 1 / 0 &&
          ((n._duration = Math.ceil(10 * e._node.duration) / 10),
          n._sprite.__default[1] === 1 / 0 &&
            (n._sprite.__default[1] = 1e3 * n._duration),
          n._ended(e)),
          e._node.removeEventListener("ended", e._endFn, !1);
      },
    };
    var s = {},
      l = function (e) {
        var n = e._src;
        if (s[n]) return (e._duration = s[n].duration), void m(e);
        if (/^data:[^;]+;base64,/.test(n)) {
          for (
            var t = atob(n.split(",")[1]), r = new Uint8Array(t.length), i = 0;
            i < t.length;
            ++i
          )
            r[i] = t.charCodeAt(i);
          A(r.buffer, e);
        } else {
          var u = new XMLHttpRequest();
          u.open(e._xhr.method, n, !0),
            (u.withCredentials = e._xhr.withCredentials),
            (u.responseType = "arraybuffer"),
            e._xhr.headers &&
              Object.keys(e._xhr.headers).forEach(function (_) {
                u.setRequestHeader(_, e._xhr.headers[_]);
              }),
            (u.onload = function () {
              var _ = (u.status + "")[0];
              _ === "0" || _ === "2" || _ === "3"
                ? A(u.response, e)
                : e._emit(
                    "loaderror",
                    null,
                    "Failed loading audio file with status: " + u.status + "."
                  );
            }),
            (u.onerror = function () {
              e._webAudio &&
                ((e._html5 = !0),
                (e._webAudio = !1),
                (e._sounds = []),
                delete s[n],
                e.load());
            }),
            f(u);
        }
      },
      f = function (e) {
        try {
          e.send();
        } catch (n) {
          e.onerror();
        }
      },
      A = function (e, n) {
        var t = function () {
            n._emit("loaderror", null, "Decoding audio data failed.");
          },
          r = function (i) {
            i && n._sounds.length > 0 ? ((s[n._src] = i), m(n, i)) : t();
          };
        typeof Promise != "undefined" && a.ctx.decodeAudioData.length === 1
          ? a.ctx.decodeAudioData(e).then(r).catch(t)
          : a.ctx.decodeAudioData(e, r, t);
      },
      m = function (e, n) {
        n && !e._duration && (e._duration = n.duration),
          Object.keys(e._sprite).length === 0 &&
            (e._sprite = { __default: [0, 1e3 * e._duration] }),
          e._state !== "loaded" &&
            ((e._state = "loaded"), e._emit("load"), e._loadQueue());
      },
      c = function () {
        if (a.usingWebAudio) {
          try {
            typeof AudioContext != "undefined"
              ? (a.ctx = new AudioContext())
              : typeof webkitAudioContext != "undefined"
              ? (a.ctx = new webkitAudioContext())
              : (a.usingWebAudio = !1);
          } catch (i) {
            a.usingWebAudio = !1;
          }
          a.ctx || (a.usingWebAudio = !1);
          var e = /iP(hone|od|ad)/.test(a._navigator && a._navigator.platform),
            n =
              a._navigator &&
              a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
            t = n ? parseInt(n[1], 10) : null;
          if (e && t && t < 9) {
            var r = /safari/.test(
              a._navigator && a._navigator.userAgent.toLowerCase()
            );
            a._navigator && !r && (a.usingWebAudio = !1);
          }
          a.usingWebAudio &&
            ((a.masterGain =
              a.ctx.createGain === void 0
                ? a.ctx.createGainNode()
                : a.ctx.createGain()),
            a.masterGain.gain.setValueAtTime(
              a._muted ? 0 : a._volume,
              a.ctx.currentTime
            ),
            a.masterGain.connect(a.ctx.destination)),
            a._setup();
        }
      };
    (B.Howler = a),
      (B.Howl = o),
      T !== void 0
        ? ((T.HowlerGlobal = p), (T.Howler = a), (T.Howl = o), (T.Sound = d))
        : typeof window != "undefined" &&
          ((window.HowlerGlobal = p),
          (window.Howler = a),
          (window.Howl = o),
          (window.Sound = d));
  })(),
  (function () {
    var p;
    (HowlerGlobal.prototype._pos = [0, 0, 0]),
      (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
      (HowlerGlobal.prototype.stereo = function (o) {
        var d = this;
        if (!d.ctx || !d.ctx.listener) return d;
        for (var s = d._howls.length - 1; s >= 0; s--) d._howls[s].stereo(o);
        return d;
      }),
      (HowlerGlobal.prototype.pos = function (o, d, s) {
        var l = this;
        return l.ctx && l.ctx.listener
          ? ((d = typeof d != "number" ? l._pos[1] : d),
            (s = typeof s != "number" ? l._pos[2] : s),
            typeof o != "number"
              ? l._pos
              : ((l._pos = [o, d, s]),
                l.ctx.listener.positionX !== void 0
                  ? (l.ctx.listener.positionX.setTargetAtTime(
                      l._pos[0],
                      Howler.ctx.currentTime,
                      0.1
                    ),
                    l.ctx.listener.positionY.setTargetAtTime(
                      l._pos[1],
                      Howler.ctx.currentTime,
                      0.1
                    ),
                    l.ctx.listener.positionZ.setTargetAtTime(
                      l._pos[2],
                      Howler.ctx.currentTime,
                      0.1
                    ))
                  : l.ctx.listener.setPosition(l._pos[0], l._pos[1], l._pos[2]),
                l))
          : l;
      }),
      (HowlerGlobal.prototype.orientation = function (o, d, s, l, f, A) {
        var m = this;
        if (!m.ctx || !m.ctx.listener) return m;
        var c = m._orientation;
        return (
          (d = typeof d != "number" ? c[1] : d),
          (s = typeof s != "number" ? c[2] : s),
          (l = typeof l != "number" ? c[3] : l),
          (f = typeof f != "number" ? c[4] : f),
          (A = typeof A != "number" ? c[5] : A),
          typeof o != "number"
            ? c
            : ((m._orientation = [o, d, s, l, f, A]),
              m.ctx.listener.forwardX !== void 0
                ? (m.ctx.listener.forwardX.setTargetAtTime(
                    o,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  m.ctx.listener.forwardY.setTargetAtTime(
                    d,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  m.ctx.listener.forwardZ.setTargetAtTime(
                    s,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  m.ctx.listener.upX.setTargetAtTime(
                    l,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  m.ctx.listener.upY.setTargetAtTime(
                    f,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  m.ctx.listener.upZ.setTargetAtTime(
                    A,
                    Howler.ctx.currentTime,
                    0.1
                  ))
                : m.ctx.listener.setOrientation(o, d, s, l, f, A),
              m)
        );
      }),
      (Howl.prototype.init =
        ((p = Howl.prototype.init),
        function (o) {
          var d = this;
          return (
            (d._orientation = o.orientation || [1, 0, 0]),
            (d._stereo = o.stereo || null),
            (d._pos = o.pos || null),
            (d._pannerAttr = {
              coneInnerAngle:
                o.coneInnerAngle !== void 0 ? o.coneInnerAngle : 360,
              coneOuterAngle:
                o.coneOuterAngle !== void 0 ? o.coneOuterAngle : 360,
              coneOuterGain: o.coneOuterGain !== void 0 ? o.coneOuterGain : 0,
              distanceModel:
                o.distanceModel !== void 0 ? o.distanceModel : "inverse",
              maxDistance: o.maxDistance !== void 0 ? o.maxDistance : 1e4,
              panningModel: o.panningModel !== void 0 ? o.panningModel : "HRTF",
              refDistance: o.refDistance !== void 0 ? o.refDistance : 1,
              rolloffFactor: o.rolloffFactor !== void 0 ? o.rolloffFactor : 1,
            }),
            (d._onstereo = o.onstereo ? [{ fn: o.onstereo }] : []),
            (d._onpos = o.onpos ? [{ fn: o.onpos }] : []),
            (d._onorientation = o.onorientation
              ? [{ fn: o.onorientation }]
              : []),
            p.call(this, o)
          );
        })),
      (Howl.prototype.stereo = function (o, d) {
        var s = this;
        if (!s._webAudio) return s;
        if (s._state !== "loaded")
          return (
            s._queue.push({
              event: "stereo",
              action: function () {
                s.stereo(o, d);
              },
            }),
            s
          );
        var l = Howler.ctx.createStereoPanner === void 0 ? "spatial" : "stereo";
        if (d === void 0) {
          if (typeof o != "number") return s._stereo;
          (s._stereo = o), (s._pos = [o, 0, 0]);
        }
        for (var f = s._getSoundIds(d), A = 0; A < f.length; A++) {
          var m = s._soundById(f[A]);
          if (m) {
            if (typeof o != "number") return m._stereo;
            (m._stereo = o),
              (m._pos = [o, 0, 0]),
              m._node &&
                ((m._pannerAttr.panningModel = "equalpower"),
                (m._panner && m._panner.pan) || a(m, l),
                l === "spatial"
                  ? m._panner.positionX !== void 0
                    ? (m._panner.positionX.setValueAtTime(
                        o,
                        Howler.ctx.currentTime
                      ),
                      m._panner.positionY.setValueAtTime(
                        0,
                        Howler.ctx.currentTime
                      ),
                      m._panner.positionZ.setValueAtTime(
                        0,
                        Howler.ctx.currentTime
                      ))
                    : m._panner.setPosition(o, 0, 0)
                  : m._panner.pan.setValueAtTime(o, Howler.ctx.currentTime)),
              s._emit("stereo", m._id);
          }
        }
        return s;
      }),
      (Howl.prototype.pos = function (o, d, s, l) {
        var f = this;
        if (!f._webAudio) return f;
        if (f._state !== "loaded")
          return (
            f._queue.push({
              event: "pos",
              action: function () {
                f.pos(o, d, s, l);
              },
            }),
            f
          );
        if (
          ((d = typeof d != "number" ? 0 : d),
          (s = typeof s != "number" ? -0.5 : s),
          l === void 0)
        ) {
          if (typeof o != "number") return f._pos;
          f._pos = [o, d, s];
        }
        for (var A = f._getSoundIds(l), m = 0; m < A.length; m++) {
          var c = f._soundById(A[m]);
          if (c) {
            if (typeof o != "number") return c._pos;
            (c._pos = [o, d, s]),
              c._node &&
                ((c._panner && !c._panner.pan) || a(c, "spatial"),
                c._panner.positionX !== void 0
                  ? (c._panner.positionX.setValueAtTime(
                      o,
                      Howler.ctx.currentTime
                    ),
                    c._panner.positionY.setValueAtTime(
                      d,
                      Howler.ctx.currentTime
                    ),
                    c._panner.positionZ.setValueAtTime(
                      s,
                      Howler.ctx.currentTime
                    ))
                  : c._panner.setPosition(o, d, s)),
              f._emit("pos", c._id);
          }
        }
        return f;
      }),
      (Howl.prototype.orientation = function (o, d, s, l) {
        var f = this;
        if (!f._webAudio) return f;
        if (f._state !== "loaded")
          return (
            f._queue.push({
              event: "orientation",
              action: function () {
                f.orientation(o, d, s, l);
              },
            }),
            f
          );
        if (
          ((d = typeof d != "number" ? f._orientation[1] : d),
          (s = typeof s != "number" ? f._orientation[2] : s),
          l === void 0)
        ) {
          if (typeof o != "number") return f._orientation;
          f._orientation = [o, d, s];
        }
        for (var A = f._getSoundIds(l), m = 0; m < A.length; m++) {
          var c = f._soundById(A[m]);
          if (c) {
            if (typeof o != "number") return c._orientation;
            (c._orientation = [o, d, s]),
              c._node &&
                (c._panner ||
                  (c._pos || (c._pos = f._pos || [0, 0, -0.5]),
                  a(c, "spatial")),
                c._panner.orientationX !== void 0
                  ? (c._panner.orientationX.setValueAtTime(
                      o,
                      Howler.ctx.currentTime
                    ),
                    c._panner.orientationY.setValueAtTime(
                      d,
                      Howler.ctx.currentTime
                    ),
                    c._panner.orientationZ.setValueAtTime(
                      s,
                      Howler.ctx.currentTime
                    ))
                  : c._panner.setOrientation(o, d, s)),
              f._emit("orientation", c._id);
          }
        }
        return f;
      }),
      (Howl.prototype.pannerAttr = function () {
        var o,
          d,
          s,
          l = this,
          f = arguments;
        if (!l._webAudio) return l;
        if (f.length === 0) return l._pannerAttr;
        if (f.length === 1) {
          if (typeof f[0] != "object")
            return (s = l._soundById(parseInt(f[0], 10)))
              ? s._pannerAttr
              : l._pannerAttr;
          (o = f[0]),
            d === void 0 &&
              (o.pannerAttr ||
                (o.pannerAttr = {
                  coneInnerAngle: o.coneInnerAngle,
                  coneOuterAngle: o.coneOuterAngle,
                  coneOuterGain: o.coneOuterGain,
                  distanceModel: o.distanceModel,
                  maxDistance: o.maxDistance,
                  refDistance: o.refDistance,
                  rolloffFactor: o.rolloffFactor,
                  panningModel: o.panningModel,
                }),
              (l._pannerAttr = {
                coneInnerAngle:
                  o.pannerAttr.coneInnerAngle !== void 0
                    ? o.pannerAttr.coneInnerAngle
                    : l._coneInnerAngle,
                coneOuterAngle:
                  o.pannerAttr.coneOuterAngle !== void 0
                    ? o.pannerAttr.coneOuterAngle
                    : l._coneOuterAngle,
                coneOuterGain:
                  o.pannerAttr.coneOuterGain !== void 0
                    ? o.pannerAttr.coneOuterGain
                    : l._coneOuterGain,
                distanceModel:
                  o.pannerAttr.distanceModel !== void 0
                    ? o.pannerAttr.distanceModel
                    : l._distanceModel,
                maxDistance:
                  o.pannerAttr.maxDistance !== void 0
                    ? o.pannerAttr.maxDistance
                    : l._maxDistance,
                refDistance:
                  o.pannerAttr.refDistance !== void 0
                    ? o.pannerAttr.refDistance
                    : l._refDistance,
                rolloffFactor:
                  o.pannerAttr.rolloffFactor !== void 0
                    ? o.pannerAttr.rolloffFactor
                    : l._rolloffFactor,
                panningModel:
                  o.pannerAttr.panningModel !== void 0
                    ? o.pannerAttr.panningModel
                    : l._panningModel,
              }));
        } else f.length === 2 && ((o = f[0]), (d = parseInt(f[1], 10)));
        for (var A = l._getSoundIds(d), m = 0; m < A.length; m++)
          if ((s = l._soundById(A[m]))) {
            var c = s._pannerAttr;
            c = {
              coneInnerAngle:
                o.coneInnerAngle !== void 0
                  ? o.coneInnerAngle
                  : c.coneInnerAngle,
              coneOuterAngle:
                o.coneOuterAngle !== void 0
                  ? o.coneOuterAngle
                  : c.coneOuterAngle,
              coneOuterGain:
                o.coneOuterGain !== void 0 ? o.coneOuterGain : c.coneOuterGain,
              distanceModel:
                o.distanceModel !== void 0 ? o.distanceModel : c.distanceModel,
              maxDistance:
                o.maxDistance !== void 0 ? o.maxDistance : c.maxDistance,
              refDistance:
                o.refDistance !== void 0 ? o.refDistance : c.refDistance,
              rolloffFactor:
                o.rolloffFactor !== void 0 ? o.rolloffFactor : c.rolloffFactor,
              panningModel:
                o.panningModel !== void 0 ? o.panningModel : c.panningModel,
            };
            var e = s._panner;
            e ||
              (s._pos || (s._pos = l._pos || [0, 0, -0.5]),
              a(s, "spatial"),
              (e = s._panner)),
              (e.coneInnerAngle = c.coneInnerAngle),
              (e.coneOuterAngle = c.coneOuterAngle),
              (e.coneOuterGain = c.coneOuterGain),
              (e.distanceModel = c.distanceModel),
              (e.maxDistance = c.maxDistance),
              (e.refDistance = c.refDistance),
              (e.rolloffFactor = c.rolloffFactor),
              (e.panningModel = c.panningModel);
          }
        return l;
      }),
      (Sound.prototype.init = (function (o) {
        return function () {
          var d = this,
            s = d._parent;
          (d._orientation = s._orientation),
            (d._stereo = s._stereo),
            (d._pos = s._pos),
            (d._pannerAttr = s._pannerAttr),
            o.call(this),
            d._stereo
              ? s.stereo(d._stereo)
              : d._pos && s.pos(d._pos[0], d._pos[1], d._pos[2], d._id);
        };
      })(Sound.prototype.init)),
      (Sound.prototype.reset = (function (o) {
        return function () {
          var d = this,
            s = d._parent;
          return (
            (d._orientation = s._orientation),
            (d._stereo = s._stereo),
            (d._pos = s._pos),
            (d._pannerAttr = s._pannerAttr),
            d._stereo
              ? s.stereo(d._stereo)
              : d._pos
              ? s.pos(d._pos[0], d._pos[1], d._pos[2], d._id)
              : d._panner &&
                (d._panner.disconnect(0),
                (d._panner = void 0),
                s._refreshBuffer(d)),
            o.call(this)
          );
        };
      })(Sound.prototype.reset));
    var a = function (o, d) {
      (d = d || "spatial") === "spatial"
        ? ((o._panner = Howler.ctx.createPanner()),
          (o._panner.coneInnerAngle = o._pannerAttr.coneInnerAngle),
          (o._panner.coneOuterAngle = o._pannerAttr.coneOuterAngle),
          (o._panner.coneOuterGain = o._pannerAttr.coneOuterGain),
          (o._panner.distanceModel = o._pannerAttr.distanceModel),
          (o._panner.maxDistance = o._pannerAttr.maxDistance),
          (o._panner.refDistance = o._pannerAttr.refDistance),
          (o._panner.rolloffFactor = o._pannerAttr.rolloffFactor),
          (o._panner.panningModel = o._pannerAttr.panningModel),
          o._panner.positionX !== void 0
            ? (o._panner.positionX.setValueAtTime(
                o._pos[0],
                Howler.ctx.currentTime
              ),
              o._panner.positionY.setValueAtTime(
                o._pos[1],
                Howler.ctx.currentTime
              ),
              o._panner.positionZ.setValueAtTime(
                o._pos[2],
                Howler.ctx.currentTime
              ))
            : o._panner.setPosition(o._pos[0], o._pos[1], o._pos[2]),
          o._panner.orientationX !== void 0
            ? (o._panner.orientationX.setValueAtTime(
                o._orientation[0],
                Howler.ctx.currentTime
              ),
              o._panner.orientationY.setValueAtTime(
                o._orientation[1],
                Howler.ctx.currentTime
              ),
              o._panner.orientationZ.setValueAtTime(
                o._orientation[2],
                Howler.ctx.currentTime
              ))
            : o._panner.setOrientation(
                o._orientation[0],
                o._orientation[1],
                o._orientation[2]
              ))
        : ((o._panner = Howler.ctx.createStereoPanner()),
          o._panner.pan.setValueAtTime(o._stereo, Howler.ctx.currentTime)),
        o._panner.connect(o._node),
        o._paused || o._parent.pause(o._id, !0).play(o._id, !0);
    };
  })();
let z = class {
  constructor(p, a) {
    (this.sounds = {}),
      (this.backgrounds = new Set()),
      (this.bgSoundEnable = !1),
      (this._active = !1),
      (this._mute = !1);
    for (const d in p) {
      const s = p[d];
      let l;
      l = typeof s == "string" ? { src: s } : s;
      const f = new V.Howl(I(k({}, l), { preload: !0 }));
      (this.sounds[d] = f), l.isBackground && this.backgrounds.add(f);
    }
    this.game = a;
    const o = JSON.parse(localStorage.getItem(`ns-${a.gameName}`)) || M;
    (this._mute = !o.soundEnable), (this.bgSoundEnable = o.bgSoundEnable);
  }
  get mute() {
    return this._mute;
  }
  get active() {
    return this._active;
  }
  set active(p) {
    (this._active = p),
      this._active && this.bgSoundEnable
        ? this.backgrounds.forEach((a) => a.play())
        : this.backgrounds.forEach((a) => a.stop());
  }
  play(p, a) {
    if (this._mute) return;
    const o = this.sounds[p];
    return !this.backgrounds.has(o) || this.bgSoundEnable
      ? (a &&
          (a.volume !== void 0 && o.volume(a.volume),
          a.loop !== void 0 && o.loop(a.loop)),
        o && o.play())
      : void 0;
  }
  stop(p) {
    const a = this.sounds[p];
    this.backgrounds.has(a) || a.stop();
  }
  stopAll() {
    Object.keys(this.sounds).forEach((p) => {
      this.sounds[p].stop();
    }),
      this.stopBackground();
  }
  playBackground(p) {
    this.bgSoundEnable &&
      this.backgrounds.forEach((a) => {
        p &&
          (p.volume !== void 0 && a.volume(p.volume),
          p.loop !== void 0 && a.loop(p.loop)),
          a.play();
      });
  }
  stopBackground() {
    this.backgrounds.forEach((p) => p.stop());
  }
  toggleBgMute(p) {
    const a = typeof p == "boolean" ? !p : !this.bgSoundEnable;
    this.bgSoundEnable = a;
    const o = JSON.parse(localStorage.getItem(`ns-${this.game.gameName}`)) || M;
    localStorage.setItem(
      `ns-${this.game.gameName}`,
      JSON.stringify(I(k({}, o), { bgSoundEnable: a }))
    );
  }
  toggleMute(p) {
    const a = typeof p == "boolean" ? p : !this._mute;
    this._mute = a;
    const o = JSON.parse(localStorage.getItem(`ns-${this.game.gameName}`)) || M;
    localStorage.setItem(
      `ns-${this.game.gameName}`,
      JSON.stringify(I(k({}, o), { soundEnable: !a }))
    );
  }
};
export { z as S, J as a, V as h, j as u };
