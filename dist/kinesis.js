import { defineComponent as C, ref as M, computed as X, onMounted as K, onBeforeUnmount as N, provide as V, readonly as H, reactive as z, openBlock as B, createElementBlock as A, normalizeStyle as L, unref as I, renderSlot as W, toRef as j, inject as G } from "vue";
var T = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function U(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var D = "Expected a function", S = 0 / 0, q = "[object Symbol]", J = /^\s+|\s+$/g, Q = /^[-+]0x[0-9a-f]+$/i, Z = /^0b[01]+$/i, _ = /^0o[0-7]+$/i, ee = parseInt, te = typeof T == "object" && T && T.Object === Object && T, ne = typeof self == "object" && self && self.Object === Object && self, ie = te || ne || Function("return this")(), re = Object.prototype, oe = re.toString, ae = Math.max, se = Math.min, $ = function() {
  return ie.Date.now();
};
function ce(e, n, t) {
  var a, l, o, u, c, i, r = 0, s = !1, d = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(D);
  n = P(n) || 0, Y(t) && (s = !!t.leading, d = "maxWait" in t, o = d ? ae(P(t.maxWait) || 0, n) : o, h = "trailing" in t ? !!t.trailing : h);
  function p(f) {
    var g = a, w = l;
    return a = l = void 0, r = f, u = e.apply(w, g), u;
  }
  function v(f) {
    return r = f, c = setTimeout(b, n), s ? p(f) : u;
  }
  function m(f) {
    var g = f - i, w = f - r, O = n - g;
    return d ? se(O, o - w) : O;
  }
  function y(f) {
    var g = f - i, w = f - r;
    return i === void 0 || g >= n || g < 0 || d && w >= o;
  }
  function b() {
    var f = $();
    if (y(f))
      return x(f);
    c = setTimeout(b, m(f));
  }
  function x(f) {
    return c = void 0, h && a ? p(f) : (a = l = void 0, u);
  }
  function F() {
    c !== void 0 && clearTimeout(c), r = 0, a = i = l = c = void 0;
  }
  function R() {
    return c === void 0 ? u : x($());
  }
  function E() {
    var f = $(), g = y(f);
    if (a = arguments, l = this, i = f, g) {
      if (c === void 0)
        return v(i);
      if (d)
        return c = setTimeout(b, n), p(i);
    }
    return c === void 0 && (c = setTimeout(b, n)), u;
  }
  return E.cancel = F, E.flush = R, E;
}
function le(e, n, t) {
  var a = !0, l = !0;
  if (typeof e != "function")
    throw new TypeError(D);
  return Y(t) && (a = "leading" in t ? !!t.leading : a, l = "trailing" in t ? !!t.trailing : l), ce(e, n, {
    leading: a,
    maxWait: n,
    trailing: l
  });
}
function Y(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function ue(e) {
  return !!e && typeof e == "object";
}
function fe(e) {
  return typeof e == "symbol" || ue(e) && oe.call(e) == q;
}
function P(e) {
  if (typeof e == "number")
    return e;
  if (fe(e))
    return S;
  if (Y(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Y(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(J, "");
  var t = Z.test(e);
  return t || _.test(e) ? ee(e.slice(2), t ? 2 : 8) : Q.test(e) ? S : +e;
}
var de = le;
const me = /* @__PURE__ */ U(de), k = (e, n, t) => t && e > t ? t : n && e < n ? n : e, ve = (e) => {
  const { referencePosition: n, shape: t, cycles: a, strength: l } = e, o = (n.x - t.left) * (Math.PI * 2) / t.width, u = (n.y - t.top) * (Math.PI * 2) / t.height, c = t.width * Math.sin(o * a), i = t.height * Math.sin(u * a);
  return {
    x: c * l / (t.width / 2),
    y: i * l / (t.height / 2)
  };
}, ge = ({
  y: e,
  x: n,
  originX: t = 50,
  originY: a = 50,
  strength: l = 10,
  minX: o,
  minY: u,
  maxX: c,
  maxY: i
}) => {
  const r = k((n - t / 50) * l, o, c), s = k((e - a / 50) * l, u, i);
  return {
    x: r,
    y: s
  };
}, he = (e) => ({
  x: e ? e.width / 2 : 0,
  y: e ? e.height / 2 : 0
}), ye = (e) => e.bottom >= 0 && e.right >= 0 && e.top <= (window.innerHeight || document.documentElement.clientHeight) && e.left <= (window.innerWidth || document.documentElement.clientWidth), be = () => {
  try {
    return /Mobi|Android/i.test(navigator.userAgent);
  } catch {
    return !0;
  }
}, Me = ({ target: e, event: n }) => {
  const t = n.clientX, a = n.clientY, l = t - e.left, o = a - e.top, u = he(e), c = l / u.x, i = o / u.y;
  return {
    x: c,
    y: i,
    target: e
  };
}, pe = /* @__PURE__ */ C({
  __name: "KinesisContainer",
  props: {
    disabled: { type: Boolean, default: !1 },
    duration: { default: 1e3 },
    easing: { default: "cubic-bezier(0.23, 1, 0.32, 1)" },
    perspective: { default: 0 }
  },
  setup(e) {
    const n = M(), t = M({
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }), a = M(!1), l = M(!1), o = M({
      x: 1,
      y: 1
    }), u = M(), c = be(), i = X(() => ({
      move: {
        action: (v, m) => Me({ target: v, event: m }),
        condition: a.value && !c,
        type: c ? "deviceorientation" : null
      }
    })), r = () => {
      e.disabled || (a.value = !0);
    }, s = () => {
      e.disabled || (l.value = !0, a.value = !1);
    }, d = me((v) => {
      if (e.disabled || !n.value)
        return;
      const m = v;
      !a.value && !l.value && r(), t.value = n.value.getBoundingClientRect();
      const y = ye(t.value), b = i.value.move.condition, x = i.value.move.action;
      y && b && (o.value = x(t.value, m), u.value = {
        x: m.clientX,
        y: m.clientY
      });
    }, 100), h = () => {
      c && window.addEventListener("deviceorientation", d, !0);
    }, p = () => {
      c && window.removeEventListener("deviceorientation", d, !0);
    };
    return K(h), N(p), V(
      "context",
      H(
        z({
          duration: e.duration,
          easing: e.easing,
          eventData: u,
          isMoving: a,
          movement: o,
          shape: t
        })
      )
    ), (v, m) => (B(), A("div", {
      ref_key: "container",
      ref: n,
      style: L(v.perspective ? { perspective: `${v.perspective}px` } : void 0),
      onMousemove: m[0] || (m[0] = //@ts-ignore
      (...y) => I(d) && I(d)(...y)),
      onMouseenter: r,
      onMouseleave: s
    }, [
      W(v.$slots, "default")
    ], 36));
  }
}), we = (e, n, t) => {
  const a = (i, r) => `translate3d(${-i}px, ${-r}px, 0)`, l = (i, r) => {
    let s = 0;
    return e.value ? e.value === "x" ? s = 2 * i : e.value === "y" && (s = 2 * r) : s = i + r, `rotate3d(0,0,1,${s}deg)`;
  }, o = (i, r, s) => `rotateX(${-r}deg) rotateY(${i}deg) translate3d(0,0,${s * 2}px)`, u = (i, r) => {
    const s = Math.sign(n.value) * (Math.abs(i) + Math.abs(r)) / 10 + 1;
    return `scale3d(${t.value === "scaleX" || t.value === "scale" ? s : 1}, ${t.value === "scaleY" || t.value === "scale" ? s : 1}, 1)`;
  };
  return { transformSwitch: (i, r, s, d) => {
    switch (i === "scaleX" || i === "scaleY" ? "scale" : i) {
      case "translate":
        return a(r, s);
      case "translate-inv":
        return a(-r, -s);
      case "rotate":
        return l(r, s);
      case "depth":
        return o(r, s, d);
      case "depth-inv":
        return o(-r, -s, d);
      case "scale":
        return u(r, s);
    }
  } };
}, xe = /* @__PURE__ */ C({
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
    const n = j(() => e.axis), t = j(() => e.strength), a = j(() => e.type), { transformSwitch: l } = we(n, t, a), o = G("context"), u = X(
      () => e.type === "depth" || e.type === "depth-inv" ? Math.abs(e.strength) : e.strength
    ), c = X(() => {
      if (!o || !o.shape || !o.isMoving)
        return {};
      let r = 0, s = 0;
      const { x: d, y: h } = e.cycles < 1 ? ge({
        ...o.movement,
        originX: e.originX,
        originY: e.originY,
        strength: u.value,
        minX: e.minX,
        minY: e.minY,
        maxX: e.maxX,
        maxY: e.maxY
      }) : ve({
        referencePosition: o.eventData,
        shape: o.shape,
        cycles: e.cycles,
        strength: u.value
      });
      return r = e.axis === "y" ? 0 : d, s = e.axis === "x" ? 0 : h, {
        transform: l(e.type, r, s, e.strength)
      };
    }), i = X(() => ({
      transformOrigin: e.transformOrigin,
      transitionProperty: "transform",
      transitionDuration: `${(o == null ? void 0 : o.duration) ?? 0}ms`,
      transitionTimingFunction: (o == null ? void 0 : o.easing) ?? "linear"
    }));
    return (r, s) => (B(), A("div", {
      style: L({
        ...c.value,
        ...i.value
      })
    }, [
      W(r.$slots, "default")
    ], 4));
  }
}), Xe = {
  install(e) {
    e.component("KinesisContainer", pe), e.component("KinesisElement", xe);
  }
};
export {
  Xe as kinesisPlugin
};
