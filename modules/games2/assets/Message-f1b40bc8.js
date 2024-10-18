class g extends Error {
  constructor() {
    super(...arguments), (this.name = "MessageError");
  }
}
class d {
  constructor(e, t = window) {
    (this.timeout = 5e3),
      (this.msgId = 0),
      (this.reqcbs = {}),
      (this.eventDict = {}),
      (this.target = e),
      (this.source = t),
      (this.onMessage = this.handleMessage.bind(this)),
      this.source.addEventListener("message", this.onMessage);
  }
  handleMessage(e) {
    const t = e.source;
    if (e.source && t !== this.target) return;
    const { msgid: s, event: i, payload: n } = e.data;
    if (!(n instanceof Array) || n.length !== 2) return;
    const [o, h] = n;
    if (i)
      try {
        const r = this.trigger(i, h);
        if (!s) return;
        r instanceof Promise
          ? r
              .then((a) => {
                this.sendMessage({ msgid: s, payload: [null, a] });
              })
              .catch((a) => {
                this.sendMessage({ msgid: s, payload: [a.message] });
              })
          : this.sendMessage({ msgid: s, payload: [null, r] });
      } catch (r) {
        this.sendMessage({ msgid: s, payload: [r.message] });
      }
    else if (s && n !== void 0) {
      if (!this.reqcbs[s]) return;
      o !== null ? this.reqcbs[s][1](new g(o)) : this.reqcbs[s][0](h);
    }
  }
  sendMessage(e) {
    this.target && this.target.postMessage(e, "*");
  }
  emit(e, t = null) {
    this.sendMessage({ event: e, payload: [null, t] });
  }
  request(e, t = null) {
    this.msgId++;
    const s = this.msgId;
    return new Promise((i, n) => {
      const o = (...a) => {
          h(), n(...a);
        },
        h = () => {
          this.timeout > 0 && clearTimeout(r), delete this.reqcbs[s];
        };
      let r = 0;
      this.timeout > 0 &&
        (r = window.setTimeout(o.bind(this, `TimeOut: ${e}`), this.timeout)),
        (this.reqcbs[s] = [
          (...a) => {
            h(), i(...a);
          },
          o,
        ]),
        this.sendMessage({ msgid: s, event: e, payload: [null, t] });
    });
  }
  on(e, t) {
    this.eventDict[e] || (this.eventDict[e] = []), this.eventDict[e].push(t);
  }
  off(e, t) {
    const s = this.eventDict[e];
    if (!s) return;
    const i = s.indexOf(t);
    i !== -1 && (s.splice(i, 1), s.length === 0 && delete this.eventDict[e]);
  }
  trigger(e, t = {}) {
    const s = this.eventDict[e];
    if (!s) throw new Error(`Request Not Found: ${e}`);
    if (s.length === 1) return s[0](t);
    {
      const i = [];
      for (let n = 0, o = s.length; n < o; n++) i.push(s[n](t));
      return i;
    }
  }
  destroy() {
    (this.eventDict = {}),
      (this.reqcbs = {}),
      this.source.removeEventListener("message", this.onMessage);
  }
}
class u extends d {
  constructor(e) {
    super(e, e);
  }
  sendMessage(e) {
    this.target.postMessage(e);
  }
  destroy() {
    super.destroy(), this.target.terminate();
  }
}
export { d as M, u as W };
