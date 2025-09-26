var Oe = Object.defineProperty;
var Ne = (o, e, r) => e in o ? Oe(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r;
var P = (o, e, r) => Ne(o, typeof e != "symbol" ? e + "" : e, r);
import Le, { useRef as W, useCallback as se, useEffect as $, useState as je } from "react";
import Ae from "raf";
import { ResizeObserver as Xe } from "@juggle/resize-observer";
var H = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Ie() {
  if (Se) return G;
  Se = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(s, i, l) {
    var n = null;
    if (l !== void 0 && (n = "" + l), i.key !== void 0 && (n = "" + i.key), "key" in i) {
      l = {};
      for (var c in i)
        c !== "key" && (l[c] = i[c]);
    } else l = i;
    return i = l.ref, {
      $$typeof: o,
      type: s,
      key: n,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return G.Fragment = e, G.jsx = r, G.jsxs = r, G;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function ze() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    function o(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === Pe ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case _:
          return "Fragment";
        case J:
          return "Portal";
        case le:
          return "Profiler";
        case m:
          return "StrictMode";
        case K:
          return "Suspense";
        case Q:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case fe:
            return (t.displayName || "Context") + ".Provider";
          case ce:
            return (t._context.displayName || "Context") + ".Consumer";
          case Z:
            var a = t.render;
            return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ee:
            return a = t.displayName || null, a !== null ? a : o(t.type) || "Memo";
          case te:
            a = t._payload, t = t._init;
            try {
              return o(t(a));
            } catch {
            }
        }
      return null;
    }
    function e(t) {
      return "" + t;
    }
    function r(t) {
      try {
        e(t);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var u = a.error, p = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), e(t);
      }
    }
    function s() {
    }
    function i() {
      if (I === 0) {
        ve = console.log, me = console.info, pe = console.warn, _e = console.error, ge = console.group, ye = console.groupCollapsed, xe = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      I++;
    }
    function l() {
      if (I--, I === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: O({}, t, { value: ve }),
          info: O({}, t, { value: me }),
          warn: O({}, t, { value: pe }),
          error: O({}, t, { value: _e }),
          group: O({}, t, { value: ge }),
          groupCollapsed: O({}, t, { value: ye }),
          groupEnd: O({}, t, { value: xe })
        });
      }
      0 > I && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function n(t) {
      if (ie === void 0)
        try {
          throw Error();
        } catch (u) {
          var a = u.stack.trim().match(/\n( *(at )?)/);
          ie = a && a[1] || "", Ee = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ie + t + Ee;
    }
    function c(t, a) {
      if (!t || oe) return "";
      var u = ne.get(t);
      if (u !== void 0) return u;
      oe = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var p = null;
      p = k.H, k.H = null, i();
      try {
        var T = {
          DetermineComponentFrameRoot: function() {
            try {
              if (a) {
                var U = function() {
                  throw Error();
                };
                if (Object.defineProperty(U.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(U, []);
                  } catch (F) {
                    var Y = F;
                  }
                  Reflect.construct(t, [], U);
                } else {
                  try {
                    U.call();
                  } catch (F) {
                    Y = F;
                  }
                  t.call(U.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (F) {
                  Y = F;
                }
                (U = t()) && typeof U.catch == "function" && U.catch(function() {
                });
              }
            } catch (F) {
              if (F && Y && typeof F.stack == "string")
                return [F.stack, Y.stack];
            }
            return [null, null];
          }
        };
        T.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var g = Object.getOwnPropertyDescriptor(
          T.DetermineComponentFrameRoot,
          "name"
        );
        g && g.configurable && Object.defineProperty(
          T.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = T.DetermineComponentFrameRoot(), D = d[0], L = d[1];
        if (D && L) {
          var R = D.split(`
`), N = L.split(`
`);
          for (d = g = 0; g < R.length && !R[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          for (; d < N.length && !N[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (g === R.length || d === N.length)
            for (g = R.length - 1, d = N.length - 1; 1 <= g && 0 <= d && R[g] !== N[d]; )
              d--;
          for (; 1 <= g && 0 <= d; g--, d--)
            if (R[g] !== N[d]) {
              if (g !== 1 || d !== 1)
                do
                  if (g--, d--, 0 > d || R[g] !== N[d]) {
                    var z = `
` + R[g].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", t.displayName)), typeof t == "function" && ne.set(t, z), z;
                  }
                while (1 <= g && 0 <= d);
              break;
            }
        }
      } finally {
        oe = !1, k.H = p, l(), Error.prepareStackTrace = u;
      }
      return R = (R = t ? t.displayName || t.name : "") ? n(R) : "", typeof t == "function" && ne.set(t, R), R;
    }
    function h(t) {
      if (t == null) return "";
      if (typeof t == "function") {
        var a = t.prototype;
        return c(
          t,
          !(!a || !a.isReactComponent)
        );
      }
      if (typeof t == "string") return n(t);
      switch (t) {
        case K:
          return n("Suspense");
        case Q:
          return n("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Z:
            return t = c(t.render, !1), t;
          case ee:
            return h(t.type);
          case te:
            a = t._payload, t = t._init;
            try {
              return h(t(a));
            } catch {
            }
        }
      return "";
    }
    function v() {
      var t = k.A;
      return t === null ? null : t.getOwner();
    }
    function f(t) {
      if (he.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function b(t, a) {
      function u() {
        Te || (Te = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: u,
        configurable: !0
      });
    }
    function x() {
      var t = o(this.type);
      return be[t] || (be[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function E(t, a, u, p, T, g) {
      return u = g.ref, t = {
        $$typeof: X,
        type: t,
        key: a,
        props: g,
        _owner: T
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function w(t, a, u, p, T, g) {
      if (typeof t == "string" || typeof t == "function" || t === _ || t === le || t === m || t === K || t === Q || t === Ue || typeof t == "object" && t !== null && (t.$$typeof === te || t.$$typeof === ee || t.$$typeof === fe || t.$$typeof === ce || t.$$typeof === Z || t.$$typeof === Be || t.getModuleId !== void 0)) {
        var d = a.children;
        if (d !== void 0)
          if (p)
            if (re(d)) {
              for (p = 0; p < d.length; p++)
                S(d[p], t);
              Object.freeze && Object.freeze(d);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else S(d, t);
      } else
        d = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? p = "null" : re(t) ? p = "array" : t !== void 0 && t.$$typeof === X ? (p = "<" + (o(t.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : p = typeof t, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          p,
          d
        );
      if (he.call(a, "key")) {
        d = o(t);
        var D = Object.keys(a).filter(function(R) {
          return R !== "key";
        });
        p = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", Re[d + p] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          d,
          D,
          d
        ), Re[d + p] = !0);
      }
      if (d = null, u !== void 0 && (r(u), d = "" + u), f(a) && (r(a.key), d = "" + a.key), "key" in a) {
        u = {};
        for (var L in a)
          L !== "key" && (u[L] = a[L]);
      } else u = a;
      return d && b(
        u,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), E(t, d, g, T, v(), u);
    }
    function S(t, a) {
      if (typeof t == "object" && t && t.$$typeof !== ke) {
        if (re(t))
          for (var u = 0; u < t.length; u++) {
            var p = t[u];
            A(p) && C(p, a);
          }
        else if (A(t))
          t._store && (t._store.validated = 1);
        else if (t === null || typeof t != "object" ? u = null : (u = de && t[de] || t["@@iterator"], u = typeof u == "function" ? u : null), typeof u == "function" && u !== t.entries && (u = u.call(t), u !== t))
          for (; !(t = u.next()).done; )
            A(t.value) && C(t.value, a);
      }
    }
    function A(t) {
      return typeof t == "object" && t !== null && t.$$typeof === X;
    }
    function C(t, a) {
      if (t._store && !t._store.validated && t.key == null && (t._store.validated = 1, a = j(a), !we[a])) {
        we[a] = !0;
        var u = "";
        t && t._owner != null && t._owner !== v() && (u = null, typeof t._owner.tag == "number" ? u = o(t._owner.type) : typeof t._owner.name == "string" && (u = t._owner.name), u = " It was passed a child from " + u + ".");
        var p = k.getCurrentStack;
        k.getCurrentStack = function() {
          var T = h(t.type);
          return p && (T += p() || ""), T;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          a,
          u
        ), k.getCurrentStack = p;
      }
    }
    function j(t) {
      var a = "", u = v();
      return u && (u = o(u.type)) && (a = `

Check the render method of \`` + u + "`."), a || (t = o(t)) && (a = `

Check the top-level render call using <` + t + ">."), a;
    }
    var q = Le, X = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), fe = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), Ue = Symbol.for("react.offscreen"), de = Symbol.iterator, Pe = Symbol.for("react.client.reference"), k = q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, he = Object.prototype.hasOwnProperty, O = Object.assign, Be = Symbol.for("react.client.reference"), re = Array.isArray, I = 0, ve, me, pe, _e, ge, ye, xe;
    s.__reactDisabledLog = !0;
    var ie, Ee, oe = !1, ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), ke = Symbol.for("react.client.reference"), Te, be = {}, Re = {}, we = {};
    V.Fragment = _, V.jsx = function(t, a, u, p, T) {
      return w(t, a, u, !1, p, T);
    }, V.jsxs = function(t, a, u, p, T) {
      return w(t, a, u, !0, p, T);
    };
  }()), V;
}
var De;
function Ge() {
  return De || (De = 1, process.env.NODE_ENV === "production" ? H.exports = Ie() : H.exports = ze()), H.exports;
}
var Fe = Ge();
function Me(o, e, r) {
  const s = o.createShader(e);
  if (o.shaderSource(s, r), o.compileShader(s), !o.getShaderParameter(s, o.COMPILE_STATUS))
    throw o.getShaderInfoLog(s);
  return s;
}
class M {
  constructor(e, r, s) {
    const i = Me(e, e.VERTEX_SHADER, r), l = Me(e, e.FRAGMENT_SHADER, s);
    if (this.uniforms = {}, this.program = e.createProgram(), this.gl = e, e.attachShader(this.program, i), e.attachShader(this.program, l), e.linkProgram(this.program), !e.getProgramParameter(this.program, e.LINK_STATUS))
      throw e.getProgramInfoLog(this.program);
    const n = e.getProgramParameter(
      this.program,
      e.ACTIVE_UNIFORMS
    );
    for (let c = 0; c < n; c++) {
      const h = e.getActiveUniform(this.program, c).name;
      this.uniforms[h] = e.getUniformLocation(
        this.program,
        h
      );
    }
  }
  bind() {
    this.gl.useProgram(this.program);
  }
}
function Ve(o) {
  const e = {
    alpha: !0,
    depth: !1,
    stencil: !1,
    antialias: !1,
    premultipliedAlpha: !0
  };
  let r = o.getContext("webgl2", e);
  const s = !!r;
  s || (r = o.getContext("webgl", e) || o.getContext("experimental-webgl", e));
  let i, l;
  s ? (r.getExtension("EXT_color_buffer_float"), l = r.getExtension("OES_texture_float_linear")) : (i = r.getExtension("OES_texture_half_float"), l = r.getExtension("OES_texture_half_float_linear")), r.clearColor(0, 0, 0, 0);
  const n = s ? r.HALF_FLOAT : i.HALF_FLOAT_OES;
  let c, h, v;
  return s ? (c = B(r, r.RGBA16F, r.RGBA, n), h = B(r, r.RG16F, r.RG, n), v = B(r, r.R16F, r.RED, n)) : (c = B(r, r.RGBA, r.RGBA, n), h = B(r, r.RGBA, r.RGBA, n), v = B(r, r.RGBA, r.RGBA, n)), {
    gl: r,
    ext: {
      formatRGBA: c,
      formatRG: h,
      formatR: v,
      halfFloatTexType: n,
      supportLinearFiltering: l
    }
  };
}
function B(o, e, r, s) {
  if (!Ye(o, e, r, s))
    switch (e) {
      case o.R16F:
        return B(o, o.RG16F, o.RG, s);
      case o.RG16F:
        return B(o, o.RGBA16F, o.RGBA, s);
      default:
        return null;
    }
  return {
    internalFormat: e,
    format: r
  };
}
function Ye(o, e, r, s) {
  const i = o.createTexture();
  o.bindTexture(o.TEXTURE_2D, i), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.NEAREST), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, o.NEAREST), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), o.texImage2D(o.TEXTURE_2D, 0, e, 4, 4, 0, r, s, null);
  let l = o.createFramebuffer();
  return o.bindFramebuffer(o.FRAMEBUFFER, l), o.framebufferTexture2D(
    o.FRAMEBUFFER,
    o.COLOR_ATTACHMENT0,
    o.TEXTURE_2D,
    i,
    0
  ), o.checkFramebufferStatus(o.FRAMEBUFFER) === o.FRAMEBUFFER_COMPLETE;
}
const We = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;

vec4 bilerp (in sampler2D sam, in vec2 p) {
  vec4 st;
  st.xy = floor(p - 0.5) + 0.5;
  st.zw = st.xy + 1.0;
  vec4 uv = st * texelSize.xyxy;
  vec4 a = texture2D(sam, uv.xy);
  vec4 b = texture2D(sam, uv.zy);
  vec4 c = texture2D(sam, uv.xw);
  vec4 d = texture2D(sam, uv.zw);
  vec2 f = p - st.xy;
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main () {
  vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;
  gl_FragColor = dissipation * bilerp(uSource, coord);
  gl_FragColor.a = 1.0;
}
`, He = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;

void main () {
  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
  gl_FragColor = dissipation * texture2D(uSource, coord);
  gl_FragColor.a = 1.0;
}
`, $e = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
  gl_FragColor = value * texture2D(uTexture, vUv);
}
`, qe = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;

void main () {
  float L = texture2D(uVelocity, vL).y;
  float R = texture2D(uVelocity, vR).y;
  float T = texture2D(uVelocity, vT).x;
  float B = texture2D(uVelocity, vB).x;
  float vorticity = R - L - T + B;
  gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);
}
`, Je = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec4 uBackgroundColor;
uniform float uAdditiveMode;
uniform float uAdditiveThreshold; // Controls how much fluid is needed to turn fully white

void main () {
  vec4 color = texture2D(uTexture, vUv);
  
  // Regular mode (original behavior)
  if (uAdditiveMode < 0.5) {
    // Enhance color vibrancy (reduced from 0.85 to 1.0 - no enhancement)
    color.rgb = pow(color.rgb, vec3(1.0));
    
    // Calculate color intensity
    float colorIntensity = max(color.r, max(color.g, color.b));
    
    // Preserve saturation at high intensities
    if (colorIntensity > 0.0) {
      // Normalize the color to maintain its hue
      vec3 normalizedColor = color.rgb / colorIntensity;
      
      // Apply a curve to the intensity to prevent complete whitening
      // Reduced from 2.0 to 1.5 for less intensity
      float adjustedIntensity = 1.0 - exp(-colorIntensity * 1.5);
      
      // Scale down intensity to make it less saturated overall
      adjustedIntensity *= 0.8;
      
      // Mix with the background using the adjusted intensity
      vec3 finalColor = mix(uBackgroundColor.rgb, normalizedColor, adjustedIntensity);
      
      // Use the background's alpha, but increase it with fluid intensity
      // Multiply by 0.8 to make it more transparent
      float alpha = uBackgroundColor.a + (adjustedIntensity * 0.8) * (1.0 - uBackgroundColor.a);
      
      gl_FragColor = vec4(finalColor, alpha);
    } else {
      gl_FragColor = uBackgroundColor;
    }
  } 
  // Additive mode - simplified for stability with threshold control
  else {
    // Calculate color intensity 
    float colorIntensity = max(color.r, max(color.g, color.b));
    
    if (colorIntensity > 0.0) {
      // Base color with power curve for more vivid colors
      vec3 baseColor = color.rgb;
      
      // Normalized color for consistent hue
      vec3 normalizedColor = baseColor / colorIntensity;
      
      // Calculate white amount using the threshold to control when full white is reached
      // Higher threshold values require more fluid intensity to reach white
      float whiteAmount = 1.0 - exp(-colorIntensity / uAdditiveThreshold);
      
      // Mix original color with white based on intensity and threshold
      vec3 finalColor = mix(normalizedColor, vec3(1.0), whiteAmount * whiteAmount);
      
      // Scale the final color based on intensity for additive effect
      finalColor = finalColor * min(colorIntensity, 1.5);
      
      // Set alpha based on intensity for a nice glow effect
      float alpha = min(colorIntensity, 1.0);
      
      gl_FragColor = vec4(finalColor, alpha);
    } else {
      gl_FragColor = uBackgroundColor;
    }
  }
}
`, Ze = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;

vec2 sampleVelocity (in vec2 uv) {
  vec2 multiplier = vec2(1.0, 1.0);
  if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; };
  if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; };
  if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; };
  if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; };
  return multiplier * texture2D(uVelocity, uv).xy;
}

void main () {
  float L = sampleVelocity(vL).x;
  float R = sampleVelocity(vR).x;
  float T = sampleVelocity(vT).y;
  float B = sampleVelocity(vB).y;
  float div = 0.5 * (R - L + T - B);
  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}
`, Ke = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;

vec2 boundary (in vec2 uv) {
  uv = min(max(uv, 0.0), 1.0);
  return uv;
}

void main () {
  float L = texture2D(uPressure, boundary(vL)).x;
  float R = texture2D(uPressure, boundary(vR)).x;
  float T = texture2D(uPressure, boundary(vT)).x;
  float B = texture2D(uPressure, boundary(vB)).x;
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity.xy -= vec2(R - L, T - B);
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`, Qe = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;

vec2 boundary (in vec2 uv) {
  uv = min(max(uv, 0.0), 1.0);
  return uv;
}

void main () {
  float L = texture2D(uPressure, boundary(vL)).x;
  float R = texture2D(uPressure, boundary(vR)).x;
  float T = texture2D(uPressure, boundary(vT)).x;
  float B = texture2D(uPressure, boundary(vB)).x;
  float C = texture2D(uPressure, vUv).x;
  float divergence = texture2D(uDivergence, vUv).x;
  float pressure = (L + R + B + T - divergence) * 0.25;
  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}
`, et = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec2 point;
uniform float radius;
uniform float uAdditiveMode;
uniform float uAdditiveThreshold; // Controls how much fluid is needed to turn white

void main () {
  vec2 p = vUv - point.xy;
  p.x *= aspectRatio;
  vec3 splat = exp(-dot(p, p) / radius) * color;
  vec3 base = texture2D(uTarget, vUv).xyz;
  
  // In both modes, we use basic addition but with different handling
  vec3 result = base + splat;
  
  // Regular mode
  if (uAdditiveMode < 0.5) {
    gl_FragColor = vec4(result, 1.0);
  }
  // Additive mode
  else {
    // Ensure we don't exceed reasonable values to prevent rendering artifacts
    // This caps intensity while preserving color ratios for proper white blending
    // Scale the cap based on the threshold to allow more build-up for higher thresholds
    float maxCap = 50.0 * uAdditiveThreshold;
    float maxChannel = max(result.r, max(result.g, result.b));
    if (maxChannel > maxCap) {
      // Scale down while preserving color ratios
      result = result * (maxCap / maxChannel);
    }
    
    gl_FragColor = vec4(result, 1.0);
  }
}
`, tt = `
precision highp float;
precision mediump sampler2D;

attribute vec2 aPosition;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 texelSize;

void main () {
  vUv = aPosition * 0.5 + 0.5;
  vL = vUv - vec2(texelSize.x, 0.0);
  vR = vUv + vec2(texelSize.x, 0.0);
  vT = vUv + vec2(0.0, texelSize.y);
  vB = vUv - vec2(0.0, texelSize.y);
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, rt = `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;

void main () {
  float T = texture2D(uCurl, vT).x;
  float B = texture2D(uCurl, vB).x;
  float C = texture2D(uCurl, vUv).x;
  vec2 force = vec2(abs(T) - abs(B), 0.0);
  force *= 1.0 / length(force + 0.00001) * curl * C;
  vec2 vel = texture2D(uVelocity, vUv).xy;
  gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
}
`, y = {
  advectionManualFiltering: We,
  advection: He,
  clear: $e,
  curl: qe,
  display: Je,
  divergence: Ze,
  gradientSubtract: Ke,
  pressure: Qe,
  splat: et,
  vert: tt,
  vorticity: rt
}, ue = {
  textureDownsample: 1,
  densityDissipation: 0.95,
  velocityDissipation: 0.98,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 5e-3,
  additiveMode: !1,
  additiveThreshold: 1,
  // Higher values require more fluid to turn white (range: 0.5-3.0 recommended)
  colorCycleSpeed: 0.1,
  // Controls how quickly colors cycle (0.01-1.0, where higher is faster)
  colors: [
    [5, 0, 15],
    // Purple (reduced)
    [0, 13, 5],
    // Green (reduced)
    [10, 5, 0],
    // Orange (reduced)
    [0, 5, 15],
    // Blue (reduced)
    [15, 0, 5]
    // Red (reduced)
  ]
};
class ae {
  constructor() {
    this.id = -1, this.x = 0, this.y = 0, this.dx = 0, this.dy = 0, this.down = !1, this.moved = !1, this.color = [30, 0, 300], this.prevX = 0, this.prevY = 0;
  }
}
class it {
  constructor(e) {
    P(this, "onMouseMove", (e) => {
      const r = this._pointers[0];
      r.prevX = r.x, r.prevY = r.y, r.x = e.offsetX, r.y = e.offsetY, r.dx = (r.x - r.prevX) * 10, r.dy = (r.y - r.prevY) * 10;
      const s = Math.sqrt(r.dx * r.dx + r.dy * r.dy);
      r.moved = s > this._movementThreshold, this._updatePointerColor(r);
    });
    P(this, "onMouseDown", (e) => {
      this._pointers[0].down = !0, this._updatePointerColor(this._pointers[0]);
    });
    P(this, "onMouseUp", (e) => {
      this._pointers[0].down = !1;
    });
    P(this, "onTouchStart", (e) => {
      e.preventDefault();
      for (let r = 0; r < e.touches.length; ++r) {
        const s = e.touches[r];
        r >= this._pointers.length && this._pointers.push(new ae());
        const i = this._pointers[r];
        i.id = s.identifier, i.down = !0;
        const l = this._canvas.getBoundingClientRect();
        i.x = s.clientX - l.left, i.y = s.clientY - l.top, i.prevX = i.x, i.prevY = i.y, this._updatePointerColor(i);
      }
    });
    P(this, "onTouchMove", (e) => {
      e.preventDefault();
      for (let r = 0; r < e.touches.length; ++r) {
        const s = e.touches[r];
        let i = null;
        for (let c = 0; c < this._pointers.length; c++)
          if (this._pointers[c].id === s.identifier) {
            i = this._pointers[c];
            break;
          }
        if (!i)
          continue;
        i.prevX = i.x, i.prevY = i.y;
        const l = this._canvas.getBoundingClientRect();
        i.x = s.clientX - l.left, i.y = s.clientY - l.top, i.dx = (i.x - i.prevX) * 10, i.dy = (i.y - i.prevY) * 10;
        const n = Math.sqrt(i.dx * i.dx + i.dy * i.dy);
        i.moved = n > this._movementThreshold, this._updatePointerColor(i);
      }
    });
    P(this, "onTouchEnd", (e) => {
      e.preventDefault();
      const r = Array.from(e.touches).map((s) => s.identifier);
      for (let s = 0; s < this._pointers.length; s++) {
        const i = this._pointers[s];
        i.id !== -1 && !r.includes(i.id) && (i.down = !1, i.moved = !1);
      }
    });
    P(this, "_blit", (e) => {
      const r = this._gl;
      r.bindFramebuffer(r.FRAMEBUFFER, e), r.drawElements(r.TRIANGLES, 6, r.UNSIGNED_SHORT, 0);
    });
    const {
      canvas: r,
      config: s = {
        ...ue,
        ...e.config
      },
      disableRandomSplats: i = !0,
      movementThreshold: l = 0
    } = e;
    this._canvas = r, this._config = s, this._disableRandomSplats = i, this._movementThreshold = l, this._pointers = [new ae()], this._splatStack = [];
    const { gl: n, ext: c } = Ve(r);
    this._gl = n, this._ext = c, this._initPrograms(), this._initBlit(), this.resize(), this._time = Date.now(), this._timer = 0, this._colorCycle = 0;
  }
  get config() {
    return this._config;
  }
  set config(e) {
    const r = this._config;
    this._config = {
      ...this._config,
      ...e
    }, (r.additiveMode !== this._config.additiveMode || r.additiveThreshold !== this._config.additiveThreshold) && this._gl && this._programs && (this._programs.display && (this._programs.display.bind(), this._gl.uniform1f(this._programs.display.uniforms.uAdditiveMode, this._config.additiveMode ? 1 : 0), this._gl.uniform1f(this._programs.display.uniforms.uAdditiveThreshold, this._config.additiveThreshold || 1)), this._programs.splat && (this._programs.splat.bind(), this._gl.uniform1f(this._programs.splat.uniforms.uAdditiveMode, this._config.additiveMode ? 1 : 0), this._gl.uniform1f(this._programs.splat.uniforms.uAdditiveThreshold, this._config.additiveThreshold || 1)));
  }
  get disableRandomSplats() {
    return this._disableRandomSplats;
  }
  set disableRandomSplats(e) {
    this._disableRandomSplats = e;
  }
  get movementThreshold() {
    return this._movementThreshold;
  }
  set movementThreshold(e) {
    this._movementThreshold = e;
  }
  get width() {
    return this._canvas.width;
  }
  get height() {
    return this._canvas.height;
  }
  addSplat(e) {
    this._splatStack.push([e]);
  }
  addSplats(e) {
    this._splatStack.push(Array.isArray(e) ? e : [e]);
  }
  addRandomSplats(e) {
    const r = [];
    for (let s = 0; s < e; ++s)
      r.push(this._getRandomSplat());
    this.addSplats(r);
  }
  resize() {
    const {
      width: e,
      height: r
    } = this._canvas;
    (this._width !== e || this._height !== r) && (this._width = e, this._height = r, this._initFramebuffers());
  }
  _updatePointerColor(e) {
    if (this._config.colors && this._config.colors.length > 0) {
      const r = Date.now() * 1e-3, s = this._config.colorCycleSpeed || 0.1, i = Math.floor(r * s % this._config.colors.length);
      e.color = this._config.colors[i].slice();
      const l = Math.sin(r * 0.3 * s) * 2;
      e.color = e.color.map((n) => Math.max(0, n + l));
    } else {
      const r = Date.now() * 1e-3, s = this._config.colorCycleSpeed || 0.1, i = r * 0.15 * s % 1, l = 0.6, n = 0.6;
      let c, h, v;
      const f = Math.floor(i * 6), b = i * 6 - f, x = n * (1 - l), E = n * (1 - b * l), w = n * (1 - (1 - b) * l);
      switch (f % 6) {
        case 0:
          c = n, h = w, v = x;
          break;
        case 1:
          c = E, h = n, v = x;
          break;
        case 2:
          c = x, h = n, v = w;
          break;
        case 3:
          c = x, h = E, v = n;
          break;
        case 4:
          c = w, h = x, v = n;
          break;
        case 5:
          c = n, h = x, v = E;
          break;
      }
      e.color = [c * 10, h * 10, v * 10];
    }
  }
  _initPrograms() {
    const e = this._gl, r = this._ext;
    this._programs = {}, this._programs.clear = new M(e, y.vert, y.clear), this._programs.display = new M(e, y.vert, y.display), this._programs.splat = new M(e, y.vert, y.splat), this._programs.advection = new M(
      e,
      y.vert,
      r.supportLinearFiltering ? y.advection : y.advectionManualFiltering
    ), this._programs.divergence = new M(e, y.vert, y.divergence), this._programs.curl = new M(e, y.vert, y.curl), this._programs.vorticity = new M(e, y.vert, y.vorticity), this._programs.pressure = new M(e, y.vert, y.pressure), this._programs.gradientSubtract = new M(e, y.vert, y.gradientSubtract);
  }
  _initFramebuffers() {
    const e = this._gl, r = this._ext;
    function s(v, f, b, x, E, w, S) {
      e.activeTexture(e.TEXTURE0 + v);
      const A = e.createTexture();
      e.bindTexture(e.TEXTURE_2D, A), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, S), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, S), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, x, f, b, 0, E, w, null);
      const C = e.createFramebuffer();
      return e.bindFramebuffer(e.FRAMEBUFFER, C), e.framebufferTexture2D(
        e.FRAMEBUFFER,
        e.COLOR_ATTACHMENT0,
        e.TEXTURE_2D,
        A,
        0
      ), e.viewport(0, 0, f, b), e.clear(e.COLOR_BUFFER_BIT), [A, C, v];
    }
    function i(v, f, b, x, E, w, S) {
      let A = s(v, f, b, x, E, w, S), C = s(v + 1, f, b, x, E, w, S);
      return {
        get read() {
          return A;
        },
        get write() {
          return C;
        },
        swap() {
          const j = A;
          A = C, C = j;
        }
      };
    }
    this._textureWidth = e.drawingBufferWidth >> this._config.textureDownsample, this._textureHeight = e.drawingBufferHeight >> this._config.textureDownsample;
    const l = r.halfFloatTexType, n = r.formatRGBA, c = r.formatRG, h = r.formatR;
    this._density = i(
      2,
      this._textureWidth,
      this._textureHeight,
      n.internalFormat,
      n.format,
      l,
      r.supportLinearFiltering ? e.LINEAR : e.NEAREST
    ), this._velocity = i(
      0,
      this._textureWidth,
      this._textureHeight,
      c.internalFormat,
      c.format,
      l,
      r.supportLinearFiltering ? e.LINEAR : e.NEAREST
    ), this._divergence = s(
      4,
      this._textureWidth,
      this._textureHeight,
      h.internalFormat,
      h.format,
      l,
      e.NEAREST
    ), this._curl = s(
      5,
      this._textureWidth,
      this._textureHeight,
      h.internalFormat,
      h.format,
      l,
      e.NEAREST
    ), this._pressure = i(
      6,
      this._textureWidth,
      this._textureHeight,
      h.internalFormat,
      h.format,
      l,
      e.NEAREST
    );
  }
  _initBlit() {
    const e = this._gl;
    e.bindBuffer(e.ARRAY_BUFFER, e.createBuffer()), e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, e.createBuffer()), e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), e.STATIC_DRAW), e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(0);
  }
  _splat(e, r, s, i, l) {
    const n = this._gl;
    this._programs.splat.bind(), n.uniform1i(this._programs.splat.uniforms.uTarget, this._velocity.read[2]), n.uniform1f(this._programs.splat.uniforms.aspectRatio, this._canvas.width / this._canvas.height), n.uniform2f(this._programs.splat.uniforms.point, e / this._canvas.width, 1 - r / this._canvas.height), n.uniform3f(this._programs.splat.uniforms.color, s, -i, 1), n.uniform1f(this._programs.splat.uniforms.radius, this._config.splatRadius), n.uniform1f(this._programs.splat.uniforms.uAdditiveMode, this._config.additiveMode ? 1 : 0), n.uniform1f(this._programs.splat.uniforms.uAdditiveThreshold, this._config.additiveThreshold || 1), this._blit(this._velocity.write[1]), this._velocity.swap(), this._programs.splat.bind(), n.uniform1i(this._programs.splat.uniforms.uTarget, this._density.read[2]);
    const c = this._config.additiveMode ? 0.12 : 0.15;
    n.uniform3f(this._programs.splat.uniforms.color, l[0] * c, l[1] * c, l[2] * c), n.uniform1f(this._programs.splat.uniforms.uAdditiveMode, this._config.additiveMode ? 1 : 0), n.uniform1f(this._programs.splat.uniforms.uAdditiveThreshold, this._config.additiveThreshold || 1), this._blit(this._density.write[1]), this._density.swap();
  }
  _addSplat(e) {
    const { x: r, y: s, dx: i, dy: l, color: n } = e;
    r !== void 0 && s !== void 0 && i !== void 0 && l !== void 0 && n !== void 0 && this._splat(r, s, i, l, n);
  }
  _addSplats(e) {
    for (const r of e)
      this._addSplat(r);
  }
  _getRandomSplat() {
    const e = new ae();
    this._updatePointerColor(e);
    const r = e.color, s = this._canvas.width * Math.random(), i = this._canvas.height * Math.random(), l = 1e3 * (Math.random() - 0.5), n = 1e3 * (Math.random() - 0.5);
    return { x: s, y: i, dx: l, dy: n, color: r };
  }
  update() {
    const e = this._gl, r = Math.min((Date.now() - this._time) / 1e3, 0.016);
    this._time = Date.now(), this._timer += 1e-4;
    const s = this._config.colorCycleSpeed || 0.1;
    this._colorCycle = (this._colorCycle + r * s * 5) % 1;
    const i = this._textureWidth, l = this._textureHeight, n = 1 / i, c = 1 / l;
    e.viewport(0, 0, i, l), this._splatStack.length > 0 && this._addSplats(this._splatStack.pop()), this._programs.advection.bind(), e.uniform2f(this._programs.advection.uniforms.texelSize, n, c), e.uniform1i(this._programs.advection.uniforms.uVelocity, this._velocity.read[2]), e.uniform1i(this._programs.advection.uniforms.uSource, this._velocity.read[2]), e.uniform1f(this._programs.advection.uniforms.dt, r), e.uniform1f(
      this._programs.advection.uniforms.dissipation,
      this._config.velocityDissipation
    ), this._blit(this._velocity.write[1]), this._velocity.swap(), e.uniform1i(this._programs.advection.uniforms.uVelocity, this._velocity.read[2]), e.uniform1i(this._programs.advection.uniforms.uSource, this._density.read[2]), e.uniform1f(
      this._programs.advection.uniforms.dissipation,
      this._config.densityDissipation
    ), this._blit(this._density.write[1]), this._density.swap();
    for (let v = 0; v < this._pointers.length; v++) {
      const f = this._pointers[v];
      f.moved && (this._updatePointerColor(f), this._splat(f.x, f.y, f.dx, f.dy, f.color), f.down || (f.moved = !1));
    }
    this._programs.curl.bind(), e.uniform2f(this._programs.curl.uniforms.texelSize, n, c), e.uniform1i(this._programs.curl.uniforms.uVelocity, this._velocity.read[2]), this._blit(this._curl[1]), this._programs.vorticity.bind(), e.uniform2f(this._programs.vorticity.uniforms.texelSize, n, c), e.uniform1i(this._programs.vorticity.uniforms.uVelocity, this._velocity.read[2]), e.uniform1i(this._programs.vorticity.uniforms.uCurl, this._curl[2]), e.uniform1f(this._programs.vorticity.uniforms.curl, this._config.curl), e.uniform1f(this._programs.vorticity.uniforms.dt, r), this._blit(this._velocity.write[1]), this._velocity.swap(), this._programs.divergence.bind(), e.uniform2f(this._programs.divergence.uniforms.texelSize, n, c), e.uniform1i(this._programs.divergence.uniforms.uVelocity, this._velocity.read[2]), this._blit(this._divergence[1]), this._programs.clear.bind();
    let h = this._pressure.read[2];
    e.activeTexture(e.TEXTURE0 + h), e.bindTexture(e.TEXTURE_2D, this._pressure.read[0]), e.uniform1i(this._programs.clear.uniforms.uTexture, h), e.uniform1f(this._programs.clear.uniforms.value, this._config.pressureDissipation), this._blit(this._pressure.write[1]), this._pressure.swap(), this._programs.pressure.bind(), e.uniform2f(this._programs.pressure.uniforms.texelSize, n, c), e.uniform1i(this._programs.pressure.uniforms.uDivergence, this._divergence[2]), h = this._pressure.read[2], e.uniform1i(this._programs.pressure.uniforms.uPressure, h), e.activeTexture(e.TEXTURE0 + h);
    for (let v = 0; v < this._config.pressureIterations; v++)
      e.bindTexture(e.TEXTURE_2D, this._pressure.read[0]), this._blit(this._pressure.write[1]), this._pressure.swap();
    this._programs.gradientSubtract.bind(), e.uniform2f(this._programs.gradientSubtract.uniforms.texelSize, n, c), e.uniform1i(this._programs.gradientSubtract.uniforms.uPressure, this._pressure.read[2]), e.uniform1i(this._programs.gradientSubtract.uniforms.uVelocity, this._velocity.read[2]), this._blit(this._velocity.write[1]), this._velocity.swap(), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight), this._programs.display.bind(), e.uniform1i(this._programs.display.uniforms.uTexture, this._density.read[2]), e.uniform4f(this._programs.display.uniforms.uBackgroundColor, 0, 0, 0, 0), e.uniform1f(this._programs.display.uniforms.uAdditiveMode, this._config.additiveMode ? 1 : 0), e.uniform1f(this._programs.display.uniforms.uAdditiveThreshold, this._config.additiveThreshold || 1), this._blit(null);
  }
}
const ot = (o) => {
  const [e, r] = je({ width: 0, height: 0 });
  return $(() => {
    if (!o || !o.current) return;
    const s = new Xe((i) => {
      const { width: l, height: n } = i[0].contentRect;
      r({ width: l, height: n });
    });
    return s.observe(o.current), () => {
      s.disconnect();
    };
  }, [o]), e;
}, nt = (o) => {
  const {
    content: e,
    config: r = ue,
    style: s = {},
    animationRef: i,
    disableRandomSplats: l = !0,
    movementThreshold: n = 0,
    ...c
  } = o, h = W(null), v = W(null), f = W(null), b = W(null), x = ot(h), E = se(() => {
    !h.current || !v.current || (v.current.width = h.current.clientWidth, v.current.height = h.current.clientHeight, f.current && f.current.resize());
  }, []), w = se(() => {
    E(), v.current && (f.current = new it({
      canvas: v.current,
      content: e,
      config: r,
      disableRandomSplats: l,
      movementThreshold: n
    }), i && i(f.current));
  }, [e, r, l, n, i, E]), S = se(() => {
    f.current && f.current.update(), b.current = Ae(S);
  }, []);
  $(() => (w(), S(), () => {
    b.current && (Ae.cancel(b.current), b.current = null);
  }), [w, S]), $(() => {
    if (E(), r && f.current) {
      f.current.config = {
        ...ue,
        ...r
      };
      const _ = f.current._gl, m = f.current._programs;
      m != null && m.display && (m.display.bind(), _.uniform1f(m.display.uniforms.uAdditiveMode, r.additiveMode ? 1 : 0), _.uniform1f(m.display.uniforms.uAdditiveThreshold, r.additiveThreshold || 1)), m != null && m.splat && (m.splat.bind(), _.uniform1f(m.splat.uniforms.uAdditiveMode, r.additiveMode ? 1 : 0), _.uniform1f(m.splat.uniforms.uAdditiveThreshold, r.additiveThreshold || 1));
    }
    f.current && (f.current.disableRandomSplats = !!l, typeof n == "number" && (f.current.movementThreshold = n));
  }, [r, l, n, E]), $(() => {
    x.width !== 0 && x.height !== 0 && E();
  }, [x, E]);
  const A = (_) => {
    var m;
    _.preventDefault(), (m = f.current) == null || m.onMouseDown(_.nativeEvent);
  }, C = (_) => {
    var m;
    _.preventDefault(), (m = f.current) == null || m.onMouseMove(_.nativeEvent);
  }, j = (_) => {
    var m;
    _.preventDefault(), (m = f.current) == null || m.onMouseUp(_.nativeEvent);
  }, q = (_) => {
    var m;
    (m = f.current) == null || m.onTouchStart(_.nativeEvent);
  }, X = (_) => {
    var m;
    (m = f.current) == null || m.onTouchMove(_.nativeEvent);
  }, J = (_) => {
    var m;
    (m = f.current) == null || m.onTouchEnd(_.nativeEvent);
  };
  return /* @__PURE__ */ Fe.jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...s
      },
      ...c,
      ref: h,
      children: /* @__PURE__ */ Fe.jsx(
        "canvas",
        {
          ref: v,
          onMouseDown: A,
          onMouseMove: C,
          onMouseUp: j,
          onTouchStart: q,
          onTouchMove: X,
          onTouchEnd: J,
          style: {
            width: "100%",
            height: "100%",
            background: "transparent"
          }
        }
      )
    }
  );
};
nt.displayName = "ReactFluidAnimation";
export {
  it as FluidAnimation,
  nt as default,
  ue as defaultConfig
};
//# sourceMappingURL=index.es.js.map
