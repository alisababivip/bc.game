var b = (c, o, t) =>
  new Promise((n, s) => {
    var e = (f) => {
        try {
          h(t.next(f));
        } catch (l) {
          s(l);
        }
      },
      a = (f) => {
        try {
          h(t.throw(f));
        } catch (l) {
          s(l);
        }
      },
      h = (f) => (f.done ? n(f.value) : Promise.resolve(f.value).then(e, a));
    h((t = t.apply(c, o)).next());
  });
import {
  i as N,
  d as H,
  l as _,
  b as w,
  g as q,
  m as $,
  k as U,
  a as A,
} from "./toString-486436aa.js";
import { u as W, o as z, c as F } from "./unescape-fec905cb.js";
import { O as P, g as j, d as G, Q as k, e as J } from "./manifest-9a1a4b52.js";
const y = P.Reader,
  v = P.Writer,
  g = P.util,
  d = P.roots.chatHall || (P.roots.chatHall = {});
d.RoomIdParam = (() => {
  function c(o) {
    if (o)
      for (let t = Object.keys(o), n = 0; n < t.length; ++n)
        o[t[n]] != null && (this[t[n]] = o[t[n]]);
  }
  return (
    (c.prototype.roomId = 0),
    (c.encode = function (t, n) {
      return (
        n || (n = v.create()),
        t.roomId != null &&
          Object.hasOwnProperty.call(t, "roomId") &&
          n.uint32(8).int32(t.roomId),
        n
      );
    }),
    (c.decode = function (t, n) {
      t instanceof y || (t = y.create(t));
      let s = n === void 0 ? t.len : t.pos + n,
        e = new d.RoomIdParam();
      for (; t.pos < s; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1:
            e.roomId = t.int32();
            break;
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return e;
    }),
    c
  );
})();
d.ChatHistory = (() => {
  function c(o) {
    if (((this.chats = []), o))
      for (let t = Object.keys(o), n = 0; n < t.length; ++n)
        o[t[n]] != null && (this[t[n]] = o[t[n]]);
  }
  return (
    (c.prototype.chats = g.emptyArray),
    (c.encode = function (t, n) {
      if ((n || (n = v.create()), t.chats != null && t.chats.length))
        for (let s = 0; s < t.chats.length; ++s)
          d.Chat.encode(t.chats[s], n.uint32(10).fork()).ldelim();
      return n;
    }),
    (c.decode = function (t, n) {
      t instanceof y || (t = y.create(t));
      let s = n === void 0 ? t.len : t.pos + n,
        e = new d.ChatHistory();
      for (; t.pos < s; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1:
            (e.chats && e.chats.length) || (e.chats = []),
              e.chats.push(d.Chat.decode(t, t.uint32()));
            break;
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return e;
    }),
    c
  );
})();
d.SendChatParam = (() => {
  function c(o) {
    if (o)
      for (let t = Object.keys(o), n = 0; n < t.length; ++n)
        o[t[n]] != null && (this[t[n]] = o[t[n]]);
  }
  return (
    (c.prototype.roomId = 0),
    (c.prototype.message = ""),
    (c.encode = function (t, n) {
      return (
        n || (n = v.create()),
        t.roomId != null &&
          Object.hasOwnProperty.call(t, "roomId") &&
          n.uint32(8).int32(t.roomId),
        t.message != null &&
          Object.hasOwnProperty.call(t, "message") &&
          n.uint32(18).string(t.message),
        n
      );
    }),
    (c.decode = function (t, n) {
      t instanceof y || (t = y.create(t));
      let s = n === void 0 ? t.len : t.pos + n,
        e = new d.SendChatParam();
      for (; t.pos < s; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1:
            e.roomId = t.int32();
            break;
          case 2:
            e.message = t.string();
            break;
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return e;
    }),
    c
  );
})();
d.Chat = (() => {
  function c(o) {
    if (((this.titles = []), (this.titleDesc = []), o))
      for (let t = Object.keys(o), n = 0; n < t.length; ++n)
        o[t[n]] != null && (this[t[n]] = o[t[n]]);
  }
  return (
    (c.prototype.id = g.Long ? g.Long.fromBits(0, 0, !1) : 0),
    (c.prototype.roomId = 0),
    (c.prototype.userId = 0),
    (c.prototype.name = ""),
    (c.prototype.type = 0),
    (c.prototype.createTime = g.Long ? g.Long.fromBits(0, 0, !1) : 0),
    (c.prototype.chat = ""),
    (c.prototype.level = 0),
    (c.prototype.titles = g.emptyArray),
    (c.prototype.titleDesc = g.emptyArray),
    (c.encode = function (t, n) {
      if (
        (n || (n = v.create()),
        t.id != null &&
          Object.hasOwnProperty.call(t, "id") &&
          n.uint32(8).int64(t.id),
        t.roomId != null &&
          Object.hasOwnProperty.call(t, "roomId") &&
          n.uint32(16).int32(t.roomId),
        t.userId != null &&
          Object.hasOwnProperty.call(t, "userId") &&
          n.uint32(24).int32(t.userId),
        t.name != null &&
          Object.hasOwnProperty.call(t, "name") &&
          n.uint32(34).string(t.name),
        t.type != null &&
          Object.hasOwnProperty.call(t, "type") &&
          n.uint32(48).int32(t.type),
        t.createTime != null &&
          Object.hasOwnProperty.call(t, "createTime") &&
          n.uint32(56).int64(t.createTime),
        t.chat != null &&
          Object.hasOwnProperty.call(t, "chat") &&
          n.uint32(66).string(t.chat),
        t.level != null &&
          Object.hasOwnProperty.call(t, "level") &&
          n.uint32(72).int32(t.level),
        t.titles != null && t.titles.length)
      ) {
        n.uint32(82).fork();
        for (let s = 0; s < t.titles.length; ++s) n.int32(t.titles[s]);
        n.ldelim();
      }
      if (t.titleDesc != null && t.titleDesc.length)
        for (let s = 0; s < t.titleDesc.length; ++s)
          n.uint32(90).string(t.titleDesc[s]);
      return n;
    }),
    (c.decode = function (t, n) {
      t instanceof y || (t = y.create(t));
      let s = n === void 0 ? t.len : t.pos + n,
        e = new d.Chat();
      for (; t.pos < s; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1:
            e.id = t.int64();
            break;
          case 2:
            e.roomId = t.int32();
            break;
          case 3:
            e.userId = t.int32();
            break;
          case 4:
            e.name = t.string();
            break;
          case 6:
            e.type = t.int32();
            break;
          case 7:
            e.createTime = t.int64();
            break;
          case 8:
            e.chat = t.string();
            break;
          case 9:
            e.level = t.int32();
            break;
          case 10:
            if (
              ((e.titles && e.titles.length) || (e.titles = []), (a & 7) === 2)
            ) {
              let h = t.uint32() + t.pos;
              for (; t.pos < h; ) e.titles.push(t.int32());
            } else e.titles.push(t.int32());
            break;
          case 11:
            (e.titleDesc && e.titleDesc.length) || (e.titleDesc = []),
              e.titleDesc.push(t.string());
            break;
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return e;
    }),
    c
  );
})();
var Q = (c) => {
  const o = N((t) => {
    const n = H(c),
      s = new Promise((e, a) => {
        _(() => {
          n() && (e(n()), t());
        }),
          w(a);
      });
    return (s.dispose = t), s;
  });
  return q() && w(o.dispose), o;
};
function K(c) {
  return b(this, null, function* () {
    const o = k(),
      t = k("/chat/hall"),
      n = o.socketRequestBind(t),
      s = o.encode(d.RoomIdParam)({ roomId: c }),
      { chats: e } = yield n("join", s).then(o.decode(d.ChatHistory));
    return e.map(B);
  });
}
const V = /(\[\w+=.+?\])/,
  X = /(\[(\w+=.+?)\])/;
function B(c) {
  let {
    id: o,
    roomId: t,
    userId: n,
    name: s,
    type: e,
    createTime: a,
    chat: h,
    level: f,
    titles: l,
    titleDesc: u,
  } = c;
  const p = {
    id: o ? String(o) : `vid${++tt}`,
    roomId: t,
    userId: n,
    name: s,
    type: e,
    createTime: Number(a),
    chat: h,
    source: h,
    level: f,
    titles: l || [],
    titleDesc: u || [],
  };
  if (
    (n === 0 && ((p.name = J.siteName), p.titles.push(-1), (p.level = 0)),
    e === 1)
  )
    p.chat = JSON.parse(h);
  else {
    let O = [];
    W(h)
      .split(V)
      .forEach((I) => {
        if (I === "") return;
        let R = I.match(X);
        if (R) {
          let [S, D] = R[2].split("="),
            M = D.split(","),
            i = { type: S, args: M };
          O.push(i);
        } else O.push(I);
      }),
      (p.chat = O);
  }
  return p;
}
function Y([c, o]) {
  return {
    roomId: c,
    label: o,
    permissions: { canPinAndUnpin: !1 },
    chats: [],
    pinMsg: { userName: "", msgId: 0, msgContent: "" },
    onAppendMessage: { msg() {} },
  };
}
const Z = $((c) =>
    b(void 0, null, function* () {
      return (
        yield Q(() => G.login),
        {
          canPinAndUnpin: !!(yield j().get(
            `/account/chatroom-permissions/?roomId=${c}`
          )).canPinAndUnpin,
        }
      );
    })
  ),
  st = $((c) =>
    b(void 0, null, function* () {
      return j().post(`/chat/remove/${c}/`);
    })
  ),
  lt = $((c, o, t) =>
    b(void 0, null, function* () {
      return j().post(`/chat/block/${c}/`, { blockTime: o, chatId: t });
    })
  );
let tt = 0;
const E = z(() =>
  N(() => {
    const c = k(),
      o = k("/chat/hall"),
      t = j(),
      n = c.socketRequestBind(o),
      s = [
        [0, "Global"],
        [14, "Sports"],
        [9, "English"],
        [1, "繁體中文"],
        [8, "Português"],
        [2, "Indonesian"],
        [19, "বাংলা"],
        [4, "Руccкий"],
        [11, "فارسی"],
        [6, "Español"],
        [3, "Tiếng việt"],
        [5, "Filipino"],
        [13, "Deutsch"],
        [12, "हिन्दी"],
        [7, "မြန်မာ"],
        [10, "Français"],
        [15, "한국어"],
        [16, "ภาษาไทย"],
        [17, "اردو"],
        [18, "日本語"],
      ],
      e = s.reduce((i, r, m) => ((i[r[0]] = m), i), {}),
      a = s.map((i) => Y(i));
    let h;
    const f = new Set(),
      [l, u] = F({
        currentRoomId: Number(localStorage.getItem("publicRoomId")) || 0,
        rooms: a,
        get current() {
          return h();
        },
        connected: o.connected,
      });
    h = H(() => l.rooms[e[l.currentRoomId]]);
    const [p] = U(
      () => (l.connected ? l.currentRoomId : void 0),
      (i) =>
        b(void 0, null, function* () {
          const r = yield K(i),
            m = e[i];
          return (
            u("rooms", m, "chats", r),
            Z(i).then((C) => {
              u("rooms", m, "permissions", C);
            }),
            R(),
            l.rooms[m]
          );
        })
    );
    function O() {
      const i = e[l.currentRoomId];
      u("rooms", i, "chats", []);
    }
    A(() => {
      const i = e[l.currentRoomId];
      l.rooms[i].chats.length > 300 &&
        u("rooms", i, "chats", (r) => r.slice(-200));
    }),
      A(() => {
        const i = l.current.roomId;
        w(() => {
          n("leave", c.encode(d.RoomIdParam)({ roomId: i })),
            u("rooms", e[i], "chats", []);
        });
      });
    function x(i) {
      u("rooms", e[i.roomId], "chats", (r) => [...r, i]);
    }
    T("chat", x);
    function I(i) {
      const r = l.rooms[e[i.roomId]].chats.findIndex((m) => m.id === i.id);
      return (
        r !== -1 &&
          u("rooms", e[i.roomId], "chats", (m) => m.filter((C, L) => L !== r)),
        r
      );
    }
    function R() {
      t.get(`/chat/room/${l.currentRoomId}/pinned-msg/`)
        .then((i) => {
          if (i) {
            const { msgContent: r, msgId: m, userName: C } = i;
            u("rooms", e[l.currentRoomId], "pinMsg", {
              msgContent: r || "",
              msgId: m || 0,
              userName: C || "",
            });
          }
        })
        .catch(console.log);
    }
    function S(i) {
      u("rooms", e[l.currentRoomId], "onAppendMessage", i);
    }
    function D() {
      const i = l.current.pinMsg.msgId
        ? `chatroom-${l.currentRoomId}-close-pinmsg-${l.current.pinMsg.msgId}`
        : "";
      i && window.localStorage.setItem(i, "1"),
        u("rooms", e[l.currentRoomId], "pinMsg", "msgId", 0);
    }
    T("chat-delete", I),
      T("chat-update", (i) => {
        const r = I(i);
        r !== -1 &&
          u("rooms", e[i.roomId], "chats", (m) => [...m].splice(r, 0, i));
      });
    const M = {
      state: l,
      atDict: f,
      setState: u,
      initRoom: p,
      delChat: I,
      getPinnedMsg: R,
      delPinedMsg: D,
      setAppendMessage: S,
      clearChats: O,
    };
    return (
      o.on("connect", () => u("connected", !0)),
      o.on("disconnect", () => u("connected", !1)),
      o.connect(),
      M
    );
  })
);
function nt(c) {
  const { state: o } = E();
  c(o.currentRoomId);
}
function T(c, o) {
  const t = k();
  k("/chat/hall").on(
    c,
    t.decodeBind((s) => o(B(s)), d.Chat)
  );
}
const at = Object.freeze(
  Object.defineProperty(
    { __proto__: null, getPublicChatRoomId: nt, publicChat: E },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { lt as b, st as d, at as i, E as p };
