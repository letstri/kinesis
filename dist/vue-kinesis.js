import { defineComponent as A, ref as w, watch as L, computed as X, onMounted as P, onBeforeUnmount as G, provide as U, readonly as q, reactive as J, openBlock as R, createBlock as D, resolveDynamicComponent as H, normalizeStyle as F, unref as Q, withCtx as K, renderSlot as N, toRef as O, inject as Z } from "vue";
var T = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function p(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var V = "Expected a function", k = 0 / 0, _ = "[object Symbol]", ee = /^\s+|\s+$/g, te = /^[-+]0x[0-9a-f]+$/i, ne = /^0b[01]+$/i, ie = /^0o[0-7]+$/i, oe = parseInt, re = typeof T == "object" && T && T.Object === Object && T, ae = typeof self == "object" && self && self.Object === Object && self, se = re || ae || Function("return this")(), le = Object.prototype, ce = le.toString, ue = Math.max, fe = Math.min, I = function() {
  return se.Date.now();
};
function de(e, t, n) {
  var r, l, f, i, c, a, s = 0, o = !1, u = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(V);
  t = W(t) || 0, Y(n) && (o = !!n.leading, u = "maxWait" in n, f = u ? ue(W(n.maxWait) || 0, t) : f, g = "trailing" in n ? !!n.trailing : g);
  function h(d) {
    var b = r, x = l;
    return r = l = void 0, s = d, i = e.apply(x, b), i;
  }
  function E(d) {
    return s = d, c = setTimeout(y, t), o ? h(d) : i;
  }
  function v(d) {
    var b = d - a, x = d - s, C = t - b;
    return u ? fe(C, f - x) : C;
  }
  function m(d) {
    var b = d - a, x = d - s;
    return a === void 0 || b >= t || b < 0 || u && x >= f;
  }
  function y() {
    var d = I();
    if (m(d))
      return M(d);
    c = setTimeout(y, v(d));
  }
  function M(d) {
    return c = void 0, g && r ? h(d) : (r = l = void 0, i);
  }
  function j() {
    c !== void 0 && clearTimeout(c), s = 0, r = a = l = c = void 0;
  }
  function z() {
    return c === void 0 ? i : M(I());
  }
  function $() {
    var d = I(), b = m(d);
    if (r = arguments, l = this, a = d, b) {
      if (c === void 0)
        return E(a);
      if (u)
        return c = setTimeout(y, t), h(a);
    }
    return c === void 0 && (c = setTimeout(y, t)), i;
  }
  return $.cancel = j, $.flush = z, $;
}
function ve(e, t, n) {
  var r = !0, l = !0;
  if (typeof e != "function")
    throw new TypeError(V);
  return Y(n) && (r = "leading" in n ? !!n.leading : r, l = "trailing" in n ? !!n.trailing : l), de(e, t, {
    leading: r,
    maxWait: t,
    trailing: l
  });
}
function Y(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function me(e) {
  return !!e && typeof e == "object";
}
function ge(e) {
  return typeof e == "symbol" || me(e) && ce.call(e) == _;
}
function W(e) {
  if (typeof e == "number")
    return e;
  if (ge(e))
    return k;
  if (Y(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Y(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ee, "");
  var n = ne.test(e);
  return n || ie.test(e) ? oe(e.slice(2), n ? 2 : 8) : te.test(e) ? k : +e;
}
var he = ve;
const ye = /* @__PURE__ */ p(he), B = (e, t, n) => n && e > n ? n : t && e < t ? t : e, be = (e) => {
  const { referencePosition: t, shape: n, event: r, cycles: l, strength: f } = e, i = r === "scroll" ? window.innerWidth : n.width, c = r === "scroll" ? window.innerHeight : n.height, a = (t.x - n.left) * (Math.PI * 2) / i, s = (t.y - n.top) * (Math.PI * 2) / c, o = i * Math.sin(a * l), u = c * Math.sin(s * l);
  return {
    x: o * f / (i / 2),
    y: u * f / (c / 2)
  };
}, we = ({
  y: e,
  x: t,
  originX: n = 50,
  originY: r = 50,
  strength: l = 10,
  event: f = null,
  minX: i,
  minY: c,
  maxX: a,
  maxY: s
}) => {
  const o = B((t - n / 50) * l, i, a), u = B(
    (e - (f === "scroll" ? -r / 2 : r) / 50) * l,
    c,
    s
  );
  return {
    x: o,
    y: u
  };
}, xe = (e) => ({
  x: e ? e.width / 2 : 0,
  y: e ? e.height / 2 : 0
}), Me = (e) => e.bottom >= 0 && e.right >= 0 && e.top <= (window.innerHeight || document.documentElement.clientHeight) && e.left <= (window.innerWidth || document.documentElement.clientWidth), S = () => {
  try {
    return /Mobi|Android/i.test(navigator.userAgent);
  } catch {
    return !0;
  }
}, Te = ({ target: e, event: t }) => {
  const n = t.clientX, r = t.clientY, l = n - e.left, f = r - e.top, i = xe(e), c = l / i.x, a = f / i.y;
  return {
    x: c,
    y: a,
    target: e
  };
}, Xe = ({
  event: e,
  target: t
}) => {
  if (e.gamma === null || e.beta === null)
    return { x: 0, y: 0, target: t };
  const n = e.gamma / 45, r = e.beta / 90;
  return {
    x: n,
    y: r,
    target: t
  };
}, Ye = (e) => {
  const t = (e.left - window.innerWidth) / (e.width + window.innerWidth), n = (e.top - window.innerHeight) / (e.height + window.innerHeight);
  return { x: t, y: n, target: e };
}, Ee = /* @__PURE__ */ A({
  __name: "KinesisContainer",
  props: {
    tag: { default: "div" },
    event: { default: "move" },
    disabled: { type: Boolean, default: !1 },
    duration: { default: 1e3 },
    easing: { default: "cubic-bezier(0.23, 1, 0.32, 1)" },
    perspective: { default: 1e3 }
  },
  setup(e) {
    const t = w("div"), n = w(), r = w({
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }), l = w(!1), f = w(!1), i = w({
      x: 0,
      y: 0
    }), c = {
      orientation: "deviceorientation",
      scroll: "scroll",
      move: S() ? "deviceorientation" : null
    }, a = w();
    L(
      () => e.tag,
      () => {
        t.value = e.tag;
      }
    );
    const s = X(() => {
      var v;
      return {
        move: {
          action: (m, y) => Te({ target: m, event: y }),
          condition: l.value && !S(),
          type: c.move
        },
        scroll: {
          action: (m) => Ye(m),
          condition: !!((v = r.value) != null && v.height),
          type: c.scroll
        },
        orientation: {
          action: (m, y) => Xe({
            target: m,
            event: y
          }),
          condition: e.event === "move" && S(),
          type: c.orientation
        }
      };
    }), o = () => {
      e.disabled || (l.value = !0);
    }, u = () => {
      e.disabled || (f.value = !0, l.value = !1);
    }, g = ye((v) => {
      if (e.disabled || !n.value)
        return;
      const m = v;
      !l.value && !f.value && o(), r.value = n.value.getBoundingClientRect();
      const y = Me(r.value), M = s.value[e.event].condition, j = s.value[e.event].action;
      y && M && (i.value = j(r.value, m), a.value = {
        x: m.clientX,
        y: m.clientY
      });
    }, 100), h = () => {
      const v = c[e.event];
      v && window.addEventListener(v, g, !0);
    }, E = () => {
      const v = c[e.event];
      v && window.removeEventListener(v, g, !0);
    };
    return P(() => {
      t.value = e.tag;
    }), P(h), G(E), U(
      "context",
      q(
        J({
          duration: e.duration,
          easing: e.easing,
          event: e.event,
          eventData: a,
          isMoving: l,
          movement: i,
          shape: r
        })
      )
    ), (v, m) => (R(), D(H(t.value), {
      ref_key: "container",
      ref: n,
      style: F({ perspective: `${v.perspective}px` }),
      onMousemove: Q(g),
      onMouseenter: o,
      onMouseleave: u
    }, {
      default: K(() => [
        N(v.$slots, "default")
      ]),
      _: 3
    }, 40, ["style", "onMousemove"]));
  }
}), je = (e, t, n) => {
  const r = (a, s) => `translate3d(${-a}px, ${-s}px, 0)`, l = (a, s) => {
    let o = 0;
    return e.value ? e.value === "x" ? o = 2 * a : e.value === "y" && (o = 2 * s) : o = a + s, `rotate3d(0,0,1,${o}deg)`;
  }, f = (a, s, o) => `rotateX(${-s}deg) rotateY(${a}deg) translate3d(0,0,${o * 2}px)`, i = (a, s) => {
    const o = Math.sign(t.value) * (Math.abs(a) + Math.abs(s)) / 10 + 1;
    return `scale3d(${n.value === "scaleX" || n.value === "scale" ? o : 1}, ${n.value === "scaleY" || n.value === "scale" ? o : 1}, 1)`;
  };
  return { transformSwitch: (a, s, o, u) => {
    switch (a === "scaleX" || a === "scaleY" ? "scale" : a) {
      case "translate":
        return r(s, o);
      case "translate-inv":
        return r(-s, -o);
      case "rotate":
        return l(s, o);
      case "depth":
        return f(s, o, u);
      case "depth-inv":
        return f(-s, -o, u);
      case "scale":
        return i(s, o);
    }
  } };
}, $e = /* @__PURE__ */ A({
  __name: "KinesisElement",
  props: {
    tag: { default: "div" },
    type: { default: "translate" },
    transformOrigin: { default: "center" },
    originX: { default: 50 },
    originY: { default: 50 },
    strength: { default: 10 },
    axis: { default: null },
    maxX: { default: null },
    maxY: { default: null },
    minX: { default: null },
    minY: { default: null },
    cycles: { default: 0 }
  },
  setup(e) {
    const t = O(() => e.axis), n = O(() => e.strength), r = O(() => e.type), l = w("div");
    L(
      () => e.tag,
      () => {
        l.value = e.tag;
      }
    ), P(() => {
      l.value = e.tag;
    });
    const { transformSwitch: f } = je(t, n, r), i = Z("context"), c = X(
      () => e.type === "depth" || e.type === "depth-inv" ? Math.abs(e.strength) : e.strength
    ), a = X(() => {
      if (!i || !i.shape || !i.isMoving && i.event === "move")
        return {};
      let o = 0, u = 0;
      const { x: g, y: h } = e.cycles < 1 ? we({
        ...i.movement,
        originX: e.originX,
        originY: e.originY,
        strength: c.value,
        event: i.event,
        minX: e.minX,
        minY: e.minY,
        maxX: e.maxX,
        maxY: e.maxY
      }) : be({
        referencePosition: i.event === "scroll" ? { x: 0, y: 0 } : i.eventData,
        shape: i.shape,
        event: i.event,
        cycles: e.cycles,
        strength: c.value
      });
      return i.event !== "scroll" ? (o = e.axis === "y" ? 0 : g, u = e.axis === "x" ? 0 : h) : i.event === "scroll" ? (o = e.axis === "x" ? h : 0, u = e.axis === "y" || !e.axis ? h : 0) : e.cycles > 0 && (o = e.axis === "x" ? g : 0, u = e.axis === "y" ? h : 0), {
        transform: f(e.type, o, u, e.strength)
      };
    }), s = X(() => ({
      transformOrigin: e.transformOrigin,
      willChange: "transform",
      transitionProperty: "transform",
      transitionDuration: `${(i == null ? void 0 : i.duration) ?? 0}ms`,
      transitionTimingFunction: (i == null ? void 0 : i.easing) ?? "linear"
    }));
    return (o, u) => (R(), D(H(l.value), {
      style: F({
        ...a.value,
        ...s.value
      })
    }, {
      default: K(() => [
        N(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), Ie = {
  install(e) {
    e.component("KinesisContainer", Ee), e.component("KinesisElement", $e);
  }
};
export {
  Ie as kinesisPlugin
};
