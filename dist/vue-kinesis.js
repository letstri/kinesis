import { openBlock as d, createBlock as p, resolveDynamicComponent as g, normalizeStyle as y, withCtx as v, renderSlot as M, createElementBlock as N, createElementVNode as P, createCommentVNode as D } from "vue";
function u(t, e) {
  return { x: t, y: e };
}
function _(t) {
  return u(
    t ? t.width / 2 : 0,
    t ? t.height / 2 : 0
  );
}
function A(t) {
  const { target: e, event: n } = t, i = n.clientX, s = n.clientY, r = i - e.left, o = s - e.top, a = _(e), l = r / a.x, c = o / a.y;
  return {
    ...u(l, c),
    target: e
  };
}
function C(t) {
  const { target: e } = t, n = (e.left - window.innerWidth) / (e.width + window.innerWidth), i = (e.top - window.innerHeight) / (e.height + window.innerHeight);
  return { ...u(n, i), target: e };
}
function E(t) {
  const { event: e, target: n } = t, i = e.gamma / 45, s = e.beta / 90;
  return {
    ...u(i, s),
    target: n
  };
}
function S(t) {
  return t.bottom >= 0 && t.right >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.left <= (window.innerWidth || document.documentElement.clientWidth);
}
function f() {
  try {
    return /Mobi|Android/i.test(navigator.userAgent);
  } catch {
    return !0;
  }
}
function w(t, e, n) {
  let i, s;
  return function() {
    const r = this;
    let o;
    n === "scroll" ? o = e : o = r.duration > 1e3 ? e : r.duration / 10;
    const a = +/* @__PURE__ */ new Date(), l = arguments;
    i && a < i + o ? (clearTimeout(s), s = setTimeout(() => {
      requestAnimationFrame(() => {
        i = a, t.apply(r, l);
      });
    }, o)) : requestAnimationFrame(() => {
      i = a, t.apply(r, l);
    });
  };
}
const B = {
  props: {
    audio: {
      type: String,
      required: !1
    },
    playAudio: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      analyser: null,
      audioArray: null,
      audioData: null,
      audioRef: null,
      wasPlayed: !1,
      isPlaying: !1
    };
  },
  watch: {
    audio() {
      this.wasPlayed = !1, this.isPlaying = !1;
    },
    playAudio(t) {
      t ? this.play() : this.stop();
    }
  },
  methods: {
    play() {
      this.active && (this.wasPlayed || (this.handleAudio(), this.wasPlayed = !0), this.isPlaying = !0, this.audioRef.play(), this.getSongData());
    },
    stop() {
      this.isPlaying = !1, this.audioRef.pause();
    },
    handleAudio() {
      const { audio: t } = this.$refs;
      this.audioRef = t;
      const e = new AudioContext(), n = e.createMediaElementSource(t), i = e.createAnalyser();
      n.connect(i), i.connect(e.destination), i.fftSize = 256;
      const s = i.frequencyBinCount, r = new Uint8Array(s);
      this.audioArray = r, this.analyser = i;
    },
    getSongData() {
      this.isPlaying && (this.analyser.getByteFrequencyData(this.audioArray), this.audioData = new Array(this.audioArray), requestAnimationFrame(this.getSongData));
    }
  }
}, x = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, s] of e)
    n[i] = s;
  return n;
}, O = {
  name: "KinesisContainer",
  mixins: [B],
  props: {
    tag: {
      type: String,
      default: "div"
    },
    event: {
      type: String,
      default: "move"
    },
    active: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 1e3
    },
    easing: {
      type: String,
      default: "cubic-bezier(0.23, 1, 0.32, 1)"
    },
    perspective: {
      type: Number,
      default: 1e3
    }
  },
  provide() {
    const t = {};
    return [
      "audioData",
      "duration",
      "easing",
      "event",
      "eventData",
      "isMoving",
      "movement",
      "shape"
    ].forEach(
      (n) => Object.defineProperty(t, n, {
        enumerable: !0,
        get: () => this[n]
      })
    ), { context: t };
  },
  data() {
    var t;
    return {
      shape: (t = this.$el) == null ? void 0 : t.getBoundingClientRect(),
      isMoving: !1,
      leftOnce: !1,
      movement: {
        x: 0,
        y: 0
      },
      eventMap: {
        orientation: "deviceorientation",
        scroll: "scroll",
        move: f() ? "deviceorientation" : null
      }
    };
  },
  computed: {
    eventActions() {
      var t;
      return {
        move: {
          action: A,
          condition: this.isMoving && !f(),
          type: f() ? "deviceorientation" : null
        },
        scroll: {
          action: C,
          condition: !!((t = this.shape) != null && t.height),
          type: "scroll"
        },
        orientation: {
          action: E,
          condition: this.event === "move" && f(),
          type: "deviceorientation"
        }
      };
    },
    style() {
      return { perspective: `${this.perspective}px` };
    }
  },
  mounted() {
    this.addEvents();
  },
  beforeDestroy() {
    this.removeEvents();
  },
  methods: {
    handleMovementStart() {
      this.active && (this.isMoving = !0);
    },
    handleMovementStop() {
      this.active && (this.leftOnce = !0, this.isMoving = !1);
    },
    // eslint-disable-next-line func-names
    handleMovement: w(function(t) {
      if (!this.active)
        return;
      !this.isMoving && !this.leftOnce && this.handleMovementStart(), this.shape = this.$el.getBoundingClientRect();
      const e = S(this.shape), n = this.eventActions[this.event].condition, i = this.eventActions[this.event].action;
      e && n && (this.movement = i({
        target: this.shape,
        event: t
      }), this.eventData = u(t.clientX, t.clientY));
    }, 100),
    addEvents() {
      this.eventMap[this.event] && window.addEventListener(
        this.eventMap[this.event],
        this.handleMovement,
        !0
      );
    },
    removeEvents() {
      this.eventMap[this.event] && window.removeEventListener(
        this.eventMap[this.event],
        this.handleMovement,
        !0
      );
    }
  }
}, K = ["src"];
function k(t, e, n, i, s, r) {
  return d(), p(g(n.tag), {
    style: y(r.style),
    onMousemove: r.handleMovement,
    onMouseenter: r.handleMovementStart,
    onMouseleave: r.handleMovementStop
  }, {
    default: v(() => [
      M(t.$slots, "default"),
      t.audio ? (d(), N("audio", {
        key: 0,
        ref: "audio",
        type: "audio/mpeg",
        onEnded: e[0] || (e[0] = (...o) => t.stop && t.stop(...o))
      }, [
        P("source", { src: t.audio }, null, 8, K)
      ], 544)) : D("", !0)
    ]),
    _: 3
  }, 40, ["style", "onMousemove", "onMouseenter", "onMouseleave"]);
}
const R = /* @__PURE__ */ x(O, [["render", k]]);
function b(t, e, n) {
  return n && t > n ? n : e && t < e ? e : t;
}
function I(t) {
  const {
    y: e,
    x: n,
    target: i,
    originX: s = 50,
    strength: r = 10,
    event: o = null,
    minX: a,
    minY: l,
    maxX: c,
    maxY: m
  } = t;
  let { originY: h = 50 } = t;
  o === "scroll" && (h = -h / 2);
  const Y = b((n - s / 50) * r, a, c), $ = b((e - h / 50) * r, l, m);
  return {
    ...u(Y, $),
    target: i
  };
}
const X = {
  methods: {
    transformSwitch(t, e, n, i) {
      t = t === "scaleX" || t === "scaleY" ? "scale" : t;
      let s;
      switch (t) {
        case "translate":
          s = this.translateMovement(e, n);
          break;
        case "rotate":
          s = this.rotateMovement(e, n);
          break;
        case "depth":
          s = this.depthMovement(e, n, i);
          break;
        case "depth_inv":
          s = this.depthMovement(-e, -n, i);
          break;
        case "scale":
          s = this.scaleMovement(e, n);
          break;
      }
      return s;
    },
    translateMovement(t, e) {
      return `translate3d(${-t}px, ${-e}px, 0)`;
    },
    rotateMovement(t, e) {
      let n;
      return this.axis ? this.axis === "x" ? n = 2 * t : this.axis === "y" && (n = 2 * e) : n = t + e, `rotate3d(0,0,1,${n}deg)`;
    },
    depthMovement(t, e, n) {
      return `rotateX(${-e}deg) rotateY(${t}deg) translate3d(0,0,${n * 2}px)`;
    },
    scaleMovement(t, e) {
      const { type: n } = this, i = Math.sign(this.strength) * (Math.abs(t) + Math.abs(e)) / 10 + 1;
      return `scale3d(${n === "scaleX" || n === "scale" ? i : 1},
            ${n === "scaleY" || n === "scale" ? i : 1},
            1)`;
    }
  }
};
function F(t) {
  const { referencePosition: e, shape: n, event: i, cycles: s, strength: r } = t, o = i === "scroll" ? window.innerWidth : n.width, a = i === "scroll" ? window.innerHeight : n.height, l = (e.x - n.left) * (Math.PI * 2) / o, c = (e.y - n.top) * (Math.PI * 2) / a, m = o * Math.sin(l * s), h = a * Math.sin(c * s);
  return u(
    m * r / (o / 2),
    h * r / (a / 2)
  );
}
const T = {
  name: "KinesisElement",
  mixins: [X],
  props: {
    tag: {
      type: String,
      default: "div"
    },
    type: {
      type: String,
      default: "translate"
      // translate, rotate, scale, scaleX, scaleY, depth, depth_inv, custom
    },
    transformOrigin: {
      type: String,
      default: "center"
    },
    originX: {
      type: Number,
      default: 50
    },
    originY: {
      type: Number,
      default: 50
    },
    strength: {
      type: Number,
      default: 10
    },
    axis: {
      type: String,
      default: null
    },
    maxX: {
      type: Number,
      default: null
    },
    maxY: {
      type: Number,
      default: null
    },
    minX: {
      type: Number,
      default: null
    },
    minY: {
      type: Number,
      default: null
    },
    cycle: {
      type: Number,
      default: 0
    }
  },
  inject: ["context"],
  computed: {
    transform() {
      return this.transformCalculation();
    },
    transformParameters() {
      return {
        transitionProperty: "transform",
        transitionDuration: this.transitionDuration,
        transformOrigin: this.transformOrigin,
        transitionTimingFunction: this.transitionTimingFunction
      };
    },
    transitionDuration() {
      const { duration: t } = this.context;
      return `${t}ms`;
    },
    transitionTimingFunction() {
      return this.context.easing;
    }
  },
  methods: {
    transformCalculation() {
      const { context: t } = this;
      if (!t.shape || !t.isMoving && t.event === "move")
        return {};
      let e, n;
      const { x: i, y: s } = this.cycle < 1 ? I({
        ...t.movement,
        originX: this.originX,
        originY: this.originY,
        strength: this.strengthManager(),
        event: t.event,
        minX: this.minX,
        minY: this.minY,
        maxX: this.maxX,
        maxY: this.maxY
      }) : F({
        referencePosition: t.event === "scroll" ? { x: 0, y: 0 } : t.eventData,
        shape: t.shape,
        event: t.event,
        cycles: this.cycle,
        strength: this.strengthManager()
      });
      return t.event !== "scroll" ? (e = this.axis === "y" ? 0 : i, n = this.axis === "x" ? 0 : s) : t.event === "scroll" ? (e = this.axis === "x" ? s : 0, n = this.axis === "y" || !this.axis ? s : 0) : this.cycle > 0 && (e = this.axis === "x" ? i : 0, n = this.axis === "y" ? s : 0), {
        transform: this.transformSwitch(
          this.type,
          e,
          n,
          this.strength
        )
      };
    },
    strengthManager() {
      return this.type === "depth" || this.type === "depth_inv" ? Math.abs(this.strength) : this.strength;
    }
  }
};
function H(t, e, n, i, s, r) {
  return d(), p(g(n.tag), {
    style: y({
      ...r.transform,
      ...r.transformParameters
    })
  }, {
    default: v(() => [
      M(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["style"]);
}
const L = /* @__PURE__ */ x(T, [["render", H]]), V = {
  props: {
    active: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 1e3
    },
    easing: {
      type: String,
      default: "cubic-bezier(0.23, 1, 0.32, 1)"
    },
    tag: {
      type: String,
      default: "div"
    }
  }
}, q = {
  props: {
    perspective: {
      type: Number,
      default: 1e3
    }
  },
  computed: {
    style() {
      return { perspective: `${this.perspective}px` };
    }
  }
}, W = {
  props: {
    type: {
      type: String,
      default: "translate"
      // translate, rotate, scale, scaleX, scaleY, depth, depth_inv, custom
    },
    transformOrigin: {
      type: String,
      default: "center"
    },
    originX: {
      type: Number,
      default: 50
    },
    originY: {
      type: Number,
      default: 50
    },
    strength: {
      type: Number,
      default: 10
    },
    audioIndex: {
      type: Number,
      default: 50
    },
    axis: {
      type: String,
      default: null
    },
    maxX: {
      type: Number,
      default: null
    },
    maxY: {
      type: Number,
      default: null
    },
    minX: {
      type: Number,
      default: null
    },
    minY: {
      type: Number,
      default: null
    },
    cycle: {
      type: Number,
      default: 0
    }
  },
  methods: {
    strengthManager() {
      return this.type === "depth" || this.type === "depth_inv" ? Math.abs(this.strength) : this.strength;
    }
  }
}, z = {
  name: "KinesisScroll",
  mixins: [V, q, W, X],
  data() {
    return {
      transform: {}
    };
  },
  computed: {
    transformParameters() {
      return {
        transitionProperty: "transform",
        transitionDuration: this.transitionDuration,
        transformOrigin: this.transformOrigin,
        transitionTimingFunction: this.easing
      };
    },
    transitionDuration() {
      return `${this.duration}ms`;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: !0 });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, { passive: !0 });
  },
  methods: {
    getCycleMovement(t, e, n, i, s) {
      const r = (t - s.left) * (Math.PI * 2) / n, o = (e - s.top) * (Math.PI * 2) / i;
      this.cycleMovement = {
        x: r,
        y: o,
        width: n,
        height: i
      };
    },
    handleScroll: w(
      // eslint-disable-next-line func-names
      function() {
        if (!this.active)
          return;
        const t = this.$el.getBoundingClientRect();
        S(t) && t.height && this.transformBehavior(t);
      },
      19,
      "scroll"
    ),
    transformBehavior(t) {
      let e, n;
      const i = (t.top - window.innerHeight) / (t.height + window.innerHeight);
      if (this.cycle <= 0) {
        const o = i * this.strength;
        e = this.axis === "x" ? o : 0, n = this.axis === "y" || !this.axis ? o : 0, this.maxX && (e = Math.min(e, this.maxX)), this.minX && (e = Math.max(e, this.minX)), this.maxY && (n = Math.min(n, this.maxY)), this.minY && (n = Math.max(n, this.minY));
      } else if (this.cycle > 0) {
        const {
          x: o,
          y: a,
          width: l,
          height: c
        } = this.getCycleMovement(
          0,
          0,
          window.innerWidth,
          window.innerHeight,
          t
        ), m = l * Math.sin(o * this.cycle), h = c * Math.sin(a * this.cycle);
        e = this.axis === "x" ? m / (l / 2) * this.strength : 0, n = this.axis === "y" || !this.axis ? h / (c / 2) * this.strength : 0;
      }
      let s = this.type;
      s = s === "scaleX" || s === "scaleY" ? "scale" : s;
      const r = this.transformSwitch(
        s,
        e,
        n,
        this.strength
      );
      this.transform = { transform: r };
    }
  }
};
function j(t, e, n, i, s, r) {
  return d(), p(g(t.tag), {
    style: y({ ...s.transform, ...r.transformParameters })
  }, {
    default: v(() => [
      M(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["style"]);
}
const U = /* @__PURE__ */ x(z, [["render", j]]), G = {
  name: "KinesisDistance",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    type: {
      type: String,
      default: "translate"
      // translate, rotate, scale, scaleX, scaleY, depth, custom
    },
    transformOrigin: {
      type: String,
      default: "center"
    },
    originX: {
      type: Number,
      default: 50
    },
    originY: {
      type: Number,
      default: 50
    },
    strength: {
      type: Number,
      default: 10
    },
    axis: {
      type: String,
      default: null
    },
    maxX: {
      type: Number,
      default: null
    },
    maxY: {
      type: Number,
      default: null
    },
    minX: {
      type: Number,
      default: null
    },
    minY: {
      type: Number,
      default: null
    },
    distance: {
      type: Number,
      default: 100
    },
    cycle: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 1001
    },
    easing: {
      type: String,
      default: "cubic-bezier(0.23, 1, 0.32, 1)"
    },
    perspective: {
      type: Number,
      default: 1e3
    }
  },
  data() {
    return {
      pointer: {
        x: 0,
        y: 0
      },
      transform: {},
      component: "kidistance",
      throttle: 500
    };
  },
  computed: {
    style() {
      return { perspective: `${this.perspective}px` };
    },
    transformParameters() {
      return {
        position: "relative",
        transitionProperty: "transform",
        transitionDuration: this.transitionDuration,
        transformOrigin: this.transformOrigin,
        transitionTimingFunction: this.easing
      };
    },
    transitionDuration() {
      return `${this.duration}ms`;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleMovement);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleMovement);
  },
  methods: {
    getCoordinates(t, e) {
      const n = this.$el.getBoundingClientRect();
      return { x: t + n.left, y: e + n.top };
    },
    getDistance(t, e, n, i) {
      return Math.floor(Math.hypot(e - t, i - n));
    },
    // eslint-disable-next-line func-names
    handleMovement: w(function(t) {
      window.addEventListener("mousemove", this.handleMovement);
      const { pointer: e } = this;
      e.x = t.clientX, e.y = t.clientY, this.transformBehavior();
    }, 50),
    transformBehavior() {
      const t = this.$el.getBoundingClientRect(), e = this.getCoordinates(t.width / 2, t.height / 2), n = this.getDistance(
        this.pointer.x,
        e.x,
        this.pointer.y,
        e.y
      );
      if (n > this.distance) {
        this.transform = {}, this.throttle = 500;
        return;
      }
      this.throttle = 50;
      const i = `scale(${n / this.distance})`;
      this.transform = { transform: i };
    },
    scaleMovement(t, e) {
      const { type: n } = this, i = Math.sign(this.strength) * (Math.abs(t) + Math.abs(e)) / 10 + 1;
      return `scale3d(${n === "scaleX" || n === "scale" ? i : 1},
      ${n === "scaleY" || n === "scale" ? i : 1},
      1)`;
    }
  }
};
function J(t, e, n, i, s, r) {
  return d(), p(g(n.tag), {
    style: y({ ...s.transform, ...r.transformParameters })
  }, {
    default: v(() => [
      M(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["style"]);
}
const Q = /* @__PURE__ */ x(G, [["render", J]]), tt = (t) => {
  t.component("KinesisContainer", R), t.component("KinesisElement", L), t.component("KinesisScroll", U), t.component("KinesisDistance", Q);
};
export {
  R as KinesisContainer,
  Q as KinesisDistance,
  L as KinesisElement,
  U as KinesisScroll,
  tt as kinesisPlugin
};
