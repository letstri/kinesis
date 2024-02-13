import { defineComponent as B, ref as w, computed as T, onMounted as K, onBeforeUnmount as N, provide as V, readonly as z, reactive as G, openBlock as p, createElementBlock as A, normalizeStyle as L, unref as P, renderSlot as R, toRef as $, inject as U } from "vue";
var E = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function q(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var H = "Expected a function", C = 0 / 0, J = "[object Symbol]", Q = /^\s+|\s+$/g, Z = /^[-+]0x[0-9a-f]+$/i, _ = /^0b[01]+$/i, ee = /^0o[0-7]+$/i, te = parseInt, ne = typeof E == "object" && E && E.Object === Object && E, ie = typeof self == "object" && self && self.Object === Object && self, oe = ne || ie || Function("return this")(), re = Object.prototype, ae = re.toString, se = Math.max, ce = Math.min, O = function() {
  return oe.Date.now();
};
function le(e, n, t) {
  var r, u, i, c, l, a, o = 0, s = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(H);
  n = k(n) || 0, Y(t) && (s = !!t.leading, f = "maxWait" in t, i = f ? se(k(t.maxWait) || 0, n) : i, g = "trailing" in t ? !!t.trailing : g);
  function M(d) {
    var y = r, x = u;
    return r = u = void 0, o = d, c = e.apply(x, y), c;
  }
  function m(d) {
    return o = d, l = setTimeout(b, n), s ? M(d) : c;
  }
  function v(d) {
    var y = d - a, x = d - o, S = n - y;
    return f ? ce(S, i - x) : S;
  }
  function h(d) {
    var y = d - a, x = d - o;
    return a === void 0 || y >= n || y < 0 || f && x >= i;
  }
  function b() {
    var d = O();
    if (h(d))
      return X(d);
    l = setTimeout(b, v(d));
  }
  function X(d) {
    return l = void 0, g && r ? M(d) : (r = u = void 0, c);
  }
  function D() {
    l !== void 0 && clearTimeout(l), o = 0, r = a = u = l = void 0;
  }
  function F() {
    return l === void 0 ? c : X(O());
  }
  function j() {
    var d = O(), y = h(d);
    if (r = arguments, u = this, a = d, y) {
      if (l === void 0)
        return m(a);
      if (f)
        return l = setTimeout(b, n), M(a);
    }
    return l === void 0 && (l = setTimeout(b, n)), c;
  }
  return j.cancel = D, j.flush = F, j;
}
function ue(e, n, t) {
  var r = !0, u = !0;
  if (typeof e != "function")
    throw new TypeError(H);
  return Y(t) && (r = "leading" in t ? !!t.leading : r, u = "trailing" in t ? !!t.trailing : u), le(e, n, {
    leading: r,
    maxWait: n,
    trailing: u
  });
}
function Y(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function fe(e) {
  return !!e && typeof e == "object";
}
function de(e) {
  return typeof e == "symbol" || fe(e) && ae.call(e) == J;
}
function k(e) {
  if (typeof e == "number")
    return e;
  if (de(e))
    return C;
  if (Y(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Y(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Q, "");
  var t = _.test(e);
  return t || ee.test(e) ? te(e.slice(2), t ? 2 : 8) : Z.test(e) ? C : +e;
}
var me = ue;
const ve = /* @__PURE__ */ q(me), W = (e, n, t) => t && e > t ? t : n && e < n ? n : e, ge = (e) => {
  const { referencePosition: n, shape: t, event: r, cycles: u, strength: i } = e, c = r === "scroll" ? window.innerWidth : t.width, l = r === "scroll" ? window.innerHeight : t.height, a = (n.x - t.left) * (Math.PI * 2) / c, o = (n.y - t.top) * (Math.PI * 2) / l, s = c * Math.sin(a * u), f = l * Math.sin(o * u);
  return {
    x: s * i / (c / 2),
    y: f * i / (l / 2)
  };
}, he = ({
  y: e,
  x: n,
  originX: t = 50,
  originY: r = 50,
  strength: u = 10,
  event: i = null,
  minX: c,
  minY: l,
  maxX: a,
  maxY: o
}) => {
  const s = W((n - t / 50) * u, c, a), f = W(
    (e - (i === "scroll" ? -r / 2 : r) / 50) * u,
    l,
    o
  );
  return {
    x: s,
    y: f
  };
}, ye = (e) => ({
  x: e ? e.width / 2 : 0,
  y: e ? e.height / 2 : 0
}), be = (e) => e.bottom >= 0 && e.right >= 0 && e.top <= (window.innerHeight || document.documentElement.clientHeight) && e.left <= (window.innerWidth || document.documentElement.clientWidth), I = () => {
  try {
    return /Mobi|Android/i.test(navigator.userAgent);
  } catch {
    return !0;
  }
}, we = ({ target: e, event: n }) => {
  const t = n.clientX, r = n.clientY, u = t - e.left, i = r - e.top, c = ye(e), l = u / c.x, a = i / c.y;
  return {
    x: l,
    y: a,
    target: e
  };
}, Me = ({
  event: e,
  target: n
}) => {
  if (e.gamma === null || e.beta === null)
    return { x: 0, y: 0, target: n };
  const t = e.gamma / 45, r = e.beta / 90;
  return {
    x: t,
    y: r,
    target: n
  };
}, xe = (e) => {
  const n = (e.left - window.innerWidth) / (e.width + window.innerWidth), t = (e.top - window.innerHeight) / (e.height + window.innerHeight);
  return { x: n, y: t, target: e };
}, Xe = /* @__PURE__ */ B({
  __name: "KinesisContainer",
  props: {
    event: { default: "move" },
    disabled: { type: Boolean, default: !1 },
    duration: { default: 1e3 },
    easing: { default: "cubic-bezier(0.23, 1, 0.32, 1)" },
    perspective: { default: 1e3 }
  },
  setup(e) {
    const n = w(), t = w({
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }), r = w(!1), u = w(!1), i = w({
      x: 1,
      y: 1
    }), c = {
      orientation: "deviceorientation",
      scroll: "scroll",
      move: I() ? "deviceorientation" : null
    }, l = w(), a = T(() => {
      var m;
      return {
        move: {
          action: (v, h) => we({ target: v, event: h }),
          condition: r.value && !I(),
          type: c.move
        },
        scroll: {
          action: (v) => xe(v),
          condition: !!((m = t.value) != null && m.height),
          type: c.scroll
        },
        orientation: {
          action: (v, h) => Me({
            target: v,
            event: h
          }),
          condition: e.event === "move" && I(),
          type: c.orientation
        }
      };
    }), o = () => {
      e.disabled || (r.value = !0);
    }, s = () => {
      e.disabled || (u.value = !0, r.value = !1);
    }, f = ve((m) => {
      if (e.disabled || !n.value)
        return;
      const v = m;
      !r.value && !u.value && o(), t.value = n.value.getBoundingClientRect();
      const h = be(t.value), b = a.value[e.event].condition, X = a.value[e.event].action;
      h && b && (i.value = X(t.value, v), l.value = {
        x: v.clientX,
        y: v.clientY
      });
    }, 100), g = () => {
      const m = c[e.event];
      m && window.addEventListener(m, f, !0);
    }, M = () => {
      const m = c[e.event];
      m && window.removeEventListener(m, f, !0);
    };
    return K(g), N(M), V(
      "context",
      z(
        G({
          duration: e.duration,
          easing: e.easing,
          event: e.event,
          eventData: l,
          isMoving: r,
          movement: i,
          shape: t
        })
      )
    ), (m, v) => (p(), A("div", {
      ref_key: "container",
      ref: n,
      style: L(m.perspective ? { perspective: `${m.perspective}px` } : void 0),
      onMousemove: v[0] || (v[0] = //@ts-ignore
      (...h) => P(f) && P(f)(...h)),
      onMouseenter: o,
      onMouseleave: s
    }, [
      R(m.$slots, "default")
    ], 36));
  }
}), Ee = (e, n, t) => {
  const r = (a, o) => `translate3d(${-a}px, ${-o}px, 0)`, u = (a, o) => {
    let s = 0;
    return e.value ? e.value === "x" ? s = 2 * a : e.value === "y" && (s = 2 * o) : s = a + o, `rotate3d(0,0,1,${s}deg)`;
  }, i = (a, o, s) => `rotateX(${-o}deg) rotateY(${a}deg) translate3d(0,0,${s * 2}px)`, c = (a, o) => {
    const s = Math.sign(n.value) * (Math.abs(a) + Math.abs(o)) / 10 + 1;
    return `scale3d(${t.value === "scaleX" || t.value === "scale" ? s : 1}, ${t.value === "scaleY" || t.value === "scale" ? s : 1}, 1)`;
  };
  return { transformSwitch: (a, o, s, f) => {
    switch (a === "scaleX" || a === "scaleY" ? "scale" : a) {
      case "translate":
        return r(o, s);
      case "translate-inv":
        return r(-o, -s);
      case "rotate":
        return u(o, s);
      case "depth":
        return i(o, s, f);
      case "depth-inv":
        return i(-o, -s, f);
      case "scale":
        return c(o, s);
    }
  } };
}, Te = /* @__PURE__ */ B({
  __name: "KinesisElement",
  props: {
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
    const n = $(() => e.axis), t = $(() => e.strength), r = $(() => e.type), { transformSwitch: u } = Ee(n, t, r), i = U("context"), c = T(
      () => e.type === "depth" || e.type === "depth-inv" ? Math.abs(e.strength) : e.strength
    ), l = T(() => {
      if (!i || !i.shape || !i.isMoving && i.event === "move")
        return {};
      let o = 0, s = 0;
      const { x: f, y: g } = e.cycles < 1 ? he({
        ...i.movement,
        originX: e.originX,
        originY: e.originY,
        strength: c.value,
        event: i.event,
        minX: e.minX,
        minY: e.minY,
        maxX: e.maxX,
        maxY: e.maxY
      }) : ge({
        referencePosition: i.event === "scroll" ? { x: 0, y: 0 } : i.eventData,
        shape: i.shape,
        event: i.event,
        cycles: e.cycles,
        strength: c.value
      });
      return i.event !== "scroll" ? (o = e.axis === "y" ? 0 : f, s = e.axis === "x" ? 0 : g) : i.event === "scroll" ? (o = e.axis === "x" ? g : 0, s = e.axis === "y" || !e.axis ? g : 0) : e.cycles > 0 && (o = e.axis === "x" ? f : 0, s = e.axis === "y" ? g : 0), {
        transform: u(e.type, o, s, e.strength)
      };
    }), a = T(() => ({
      transformOrigin: e.transformOrigin,
      willChange: "transform",
      transitionProperty: "transform",
      transitionDuration: `${(i == null ? void 0 : i.duration) ?? 0}ms`,
      transitionTimingFunction: (i == null ? void 0 : i.easing) ?? "linear"
    }));
    return (o, s) => (p(), A("div", {
      style: L({
        ...l.value,
        ...a.value
      })
    }, [
      R(o.$slots, "default")
    ], 4));
  }
}), je = {
  install(e) {
    e.component("KinesisContainer", Xe), e.component("KinesisElement", Te);
  }
};
export {
  je as kinesisPlugin
};
