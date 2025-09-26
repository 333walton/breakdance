(function(E,_){typeof exports=="object"&&typeof module<"u"?_(exports,require("react"),require("raf"),require("@juggle/resize-observer")):typeof define=="function"&&define.amd?define(["exports","react","raf","@juggle/resize-observer"],_):(E=typeof globalThis<"u"?globalThis:E||self,_(E.ReactFluidAnimation={},E.React,E.raf,E.ResizeObserver))})(this,function(E,_,N,Pe){"use strict";var Ve=Object.defineProperty;var Ye=(E,_,N)=>_ in E?Ve(E,_,{enumerable:!0,configurable:!0,writable:!0,value:N}):E[_]=N;var O=(E,_,N)=>Ye(E,typeof _!="symbol"?_+"":_,N);var J={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function Be(){if(le)return I;le=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function r(s,i,l){var n=null;if(l!==void 0&&(n=""+l),i.key!==void 0&&(n=""+i.key),"key"in i){l={};for(var c in i)c!=="key"&&(l[c]=i[c])}else l=i;return i=l.ref,{$$typeof:o,type:s,key:n,ref:i!==void 0?i:null,props:l}}return I.Fragment=e,I.jsx=r,I.jsxs=r,I}var G={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function ke(){return ce||(ce=1,process.env.NODE_ENV!=="production"&&function(){function o(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ze?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case g:return"Fragment";case $:return"Portal";case pe:return"Profiler";case m:return"StrictMode";case te:return"Suspense";case re:return"SuspenseList"}if(typeof t=="object")switch(typeof t.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),t.$$typeof){case ge:return(t.displayName||"Context")+".Provider";case _e:return(t._context.displayName||"Context")+".Consumer";case ee:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return a=t.displayName||null,a!==null?a:o(t.type)||"Memo";case oe:a=t._payload,t=t._init;try{return o(t(a))}catch{}}return null}function e(t){return""+t}function r(t){try{e(t);var a=!1}catch{a=!0}if(a){a=console;var u=a.error,p=typeof Symbol=="function"&&Symbol.toStringTag&&t[Symbol.toStringTag]||t.constructor.name||"Object";return u.call(a,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",p),e(t)}}function s(){}function i(){if(W===0){Ee=console.log,Te=console.info,be=console.warn,Re=console.error,we=console.group,Ae=console.groupCollapsed,Se=console.groupEnd;var t={configurable:!0,enumerable:!0,value:s,writable:!0};Object.defineProperties(console,{info:t,log:t,warn:t,error:t,group:t,groupCollapsed:t,groupEnd:t})}W++}function l(){if(W--,W===0){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},t,{value:Ee}),info:L({},t,{value:Te}),warn:L({},t,{value:be}),error:L({},t,{value:Re}),group:L({},t,{value:we}),groupCollapsed:L({},t,{value:Ae}),groupEnd:L({},t,{value:Se})})}0>W&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function n(t){if(se===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);se=a&&a[1]||"",Ce=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+t+Ce}function c(t,a){if(!t||ae)return"";var u=ue.get(t);if(u!==void 0)return u;ae=!0,u=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var p=null;p=j.H,j.H=null,i();try{var R={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(P){var Z=P}Reflect.construct(t,[],k)}else{try{k.call()}catch(P){Z=P}t.call(k.prototype)}}else{try{throw Error()}catch(P){Z=P}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(P){if(P&&Z&&typeof P.stack=="string")return[P.stack,Z.stack]}return[null,null]}};R.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var y=Object.getOwnPropertyDescriptor(R.DetermineComponentFrameRoot,"name");y&&y.configurable&&Object.defineProperty(R.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=R.DetermineComponentFrameRoot(),U=d[0],z=d[1];if(U&&z){var A=U.split(`
`),X=z.split(`
`);for(d=y=0;y<A.length&&!A[y].includes("DetermineComponentFrameRoot");)y++;for(;d<X.length&&!X[d].includes("DetermineComponentFrameRoot");)d++;if(y===A.length||d===X.length)for(y=A.length-1,d=X.length-1;1<=y&&0<=d&&A[y]!==X[d];)d--;for(;1<=y&&0<=d;y--,d--)if(A[y]!==X[d]){if(y!==1||d!==1)do if(y--,d--,0>d||A[y]!==X[d]){var H=`
`+A[y].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),typeof t=="function"&&ue.set(t,H),H}while(1<=y&&0<=d);break}}}finally{ae=!1,j.H=p,l(),Error.prepareStackTrace=u}return A=(A=t?t.displayName||t.name:"")?n(A):"",typeof t=="function"&&ue.set(t,A),A}function h(t){if(t==null)return"";if(typeof t=="function"){var a=t.prototype;return c(t,!(!a||!a.isReactComponent))}if(typeof t=="string")return n(t);switch(t){case te:return n("Suspense");case re:return n("SuspenseList")}if(typeof t=="object")switch(t.$$typeof){case ee:return t=c(t.render,!1),t;case ie:return h(t.type);case oe:a=t._payload,t=t._init;try{return h(t(a))}catch{}}return""}function v(){var t=j.A;return t===null?null:t.getOwner()}function f(t){if(xe.call(t,"key")){var a=Object.getOwnPropertyDescriptor(t,"key").get;if(a&&a.isReactWarning)return!1}return t.key!==void 0}function w(t,a){function u(){De||(De=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",a))}u.isReactWarning=!0,Object.defineProperty(t,"key",{get:u,configurable:!0})}function T(){var t=o(this.type);return Fe[t]||(Fe[t]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),t=this.props.ref,t!==void 0?t:null}function b(t,a,u,p,R,y){return u=y.ref,t={$$typeof:Y,type:t,key:a,props:y,_owner:R},(u!==void 0?u:null)!==null?Object.defineProperty(t,"ref",{enumerable:!1,get:T}):Object.defineProperty(t,"ref",{enumerable:!1,value:null}),t._store={},Object.defineProperty(t._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(t,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(t.props),Object.freeze(t)),t}function S(t,a,u,p,R,y){if(typeof t=="string"||typeof t=="function"||t===g||t===pe||t===m||t===te||t===re||t===Xe||typeof t=="object"&&t!==null&&(t.$$typeof===oe||t.$$typeof===ie||t.$$typeof===ge||t.$$typeof===_e||t.$$typeof===ee||t.$$typeof===Ie||t.getModuleId!==void 0)){var d=a.children;if(d!==void 0)if(p)if(ne(d)){for(p=0;p<d.length;p++)D(d[p],t);Object.freeze&&Object.freeze(d)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else D(d,t)}else d="",(t===void 0||typeof t=="object"&&t!==null&&Object.keys(t).length===0)&&(d+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),t===null?p="null":ne(t)?p="array":t!==void 0&&t.$$typeof===Y?(p="<"+(o(t.type)||"Unknown")+" />",d=" Did you accidentally export a JSX literal instead of a component?"):p=typeof t,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",p,d);if(xe.call(a,"key")){d=o(t);var U=Object.keys(a).filter(function(A){return A!=="key"});p=0<U.length?"{key: someKey, "+U.join(": ..., ")+": ...}":"{key: someKey}",Me[d+p]||(U=0<U.length?"{"+U.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,p,d,U,d),Me[d+p]=!0)}if(d=null,u!==void 0&&(r(u),d=""+u),f(a)&&(r(a.key),d=""+a.key),"key"in a){u={};for(var z in a)z!=="key"&&(u[z]=a[z])}else u=a;return d&&w(u,typeof t=="function"?t.displayName||t.name||"Unknown":t),b(t,d,y,R,v(),u)}function D(t,a){if(typeof t=="object"&&t&&t.$$typeof!==Ge){if(ne(t))for(var u=0;u<t.length;u++){var p=t[u];C(p)&&F(p,a)}else if(C(t))t._store&&(t._store.validated=1);else if(t===null||typeof t!="object"?u=null:(u=ye&&t[ye]||t["@@iterator"],u=typeof u=="function"?u:null),typeof u=="function"&&u!==t.entries&&(u=u.call(t),u!==t))for(;!(t=u.next()).done;)C(t.value)&&F(t.value,a)}}function C(t){return typeof t=="object"&&t!==null&&t.$$typeof===Y}function F(t,a){if(t._store&&!t._store.validated&&t.key==null&&(t._store.validated=1,a=V(a),!Ue[a])){Ue[a]=!0;var u="";t&&t._owner!=null&&t._owner!==v()&&(u=null,typeof t._owner.tag=="number"?u=o(t._owner.type):typeof t._owner.name=="string"&&(u=t._owner.name),u=" It was passed a child from "+u+".");var p=j.getCurrentStack;j.getCurrentStack=function(){var R=h(t.type);return p&&(R+=p()||""),R},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',a,u),j.getCurrentStack=p}}function V(t){var a="",u=v();return u&&(u=o(u.type))&&(a=`

Check the render method of \``+u+"`."),a||(t=o(t))&&(a=`

Check the top-level render call using <`+t+">."),a}var Q=_,Y=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),_e=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Xe=Symbol.for("react.offscreen"),ye=Symbol.iterator,ze=Symbol.for("react.client.reference"),j=Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe=Object.prototype.hasOwnProperty,L=Object.assign,Ie=Symbol.for("react.client.reference"),ne=Array.isArray,W=0,Ee,Te,be,Re,we,Ae,Se;s.__reactDisabledLog=!0;var se,Ce,ae=!1,ue=new(typeof WeakMap=="function"?WeakMap:Map),Ge=Symbol.for("react.client.reference"),De,Fe={},Me={},Ue={};G.Fragment=g,G.jsx=function(t,a,u,p,R){return S(t,a,u,!1,p,R)},G.jsxs=function(t,a,u,p,R){return S(t,a,u,!0,p,R)}}()),G}var fe;function Oe(){return fe||(fe=1,process.env.NODE_ENV==="production"?J.exports=Be():J.exports=ke()),J.exports}var de=Oe();function he(o,e,r){const s=o.createShader(e);if(o.shaderSource(s,r),o.compileShader(s),!o.getShaderParameter(s,o.COMPILE_STATUS))throw o.getShaderInfoLog(s);return s}class M{constructor(e,r,s){const i=he(e,e.VERTEX_SHADER,r),l=he(e,e.FRAGMENT_SHADER,s);if(this.uniforms={},this.program=e.createProgram(),this.gl=e,e.attachShader(this.program,i),e.attachShader(this.program,l),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS))throw e.getProgramInfoLog(this.program);const n=e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS);for(let c=0;c<n;c++){const h=e.getActiveUniform(this.program,c).name;this.uniforms[h]=e.getUniformLocation(this.program,h)}}bind(){this.gl.useProgram(this.program)}}function Ne(o){const e={alpha:!0,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!0};let r=o.getContext("webgl2",e);const s=!!r;s||(r=o.getContext("webgl",e)||o.getContext("experimental-webgl",e));let i,l;s?(r.getExtension("EXT_color_buffer_float"),l=r.getExtension("OES_texture_float_linear")):(i=r.getExtension("OES_texture_half_float"),l=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,0);const n=s?r.HALF_FLOAT:i.HALF_FLOAT_OES;let c,h,v;return s?(c=B(r,r.RGBA16F,r.RGBA,n),h=B(r,r.RG16F,r.RG,n),v=B(r,r.R16F,r.RED,n)):(c=B(r,r.RGBA,r.RGBA,n),h=B(r,r.RGBA,r.RGBA,n),v=B(r,r.RGBA,r.RGBA,n)),{gl:r,ext:{formatRGBA:c,formatRG:h,formatR:v,halfFloatTexType:n,supportLinearFiltering:l}}}function B(o,e,r,s){if(!je(o,e,r,s))switch(e){case o.R16F:return B(o,o.RG16F,o.RG,s);case o.RG16F:return B(o,o.RGBA16F,o.RGBA,s);default:return null}return{internalFormat:e,format:r}}function je(o,e,r,s){const i=o.createTexture();o.bindTexture(o.TEXTURE_2D,i),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,e,4,4,0,r,s,null);let l=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,l),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,i,0),o.checkFramebufferStatus(o.FRAMEBUFFER)===o.FRAMEBUFFER_COMPLETE}const x={advectionManualFiltering:`
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
`,advection:`
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
`,clear:`
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
  gl_FragColor = value * texture2D(uTexture, vUv);
}
`,curl:`
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
`,display:`
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
`,divergence:`
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
`,gradientSubtract:`
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
`,pressure:`
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
`,splat:`
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
`,vert:`
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
`,vorticity:`
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
`},q={textureDownsample:1,densityDissipation:.95,velocityDissipation:.98,pressureDissipation:.8,pressureIterations:25,curl:30,splatRadius:.005,additiveMode:!1,additiveThreshold:1,colorCycleSpeed:.1,colors:[[5,0,15],[0,13,5],[10,5,0],[0,5,15],[15,0,5]]};class K{constructor(){this.id=-1,this.x=0,this.y=0,this.dx=0,this.dy=0,this.down=!1,this.moved=!1,this.color=[30,0,300],this.prevX=0,this.prevY=0}}class ve{constructor(e){O(this,"onMouseMove",e=>{const r=this._pointers[0];r.prevX=r.x,r.prevY=r.y,r.x=e.offsetX,r.y=e.offsetY,r.dx=(r.x-r.prevX)*10,r.dy=(r.y-r.prevY)*10;const s=Math.sqrt(r.dx*r.dx+r.dy*r.dy);r.moved=s>this._movementThreshold,this._updatePointerColor(r)});O(this,"onMouseDown",e=>{this._pointers[0].down=!0,this._updatePointerColor(this._pointers[0])});O(this,"onMouseUp",e=>{this._pointers[0].down=!1});O(this,"onTouchStart",e=>{e.preventDefault();for(let r=0;r<e.touches.length;++r){const s=e.touches[r];r>=this._pointers.length&&this._pointers.push(new K);const i=this._pointers[r];i.id=s.identifier,i.down=!0;const l=this._canvas.getBoundingClientRect();i.x=s.clientX-l.left,i.y=s.clientY-l.top,i.prevX=i.x,i.prevY=i.y,this._updatePointerColor(i)}});O(this,"onTouchMove",e=>{e.preventDefault();for(let r=0;r<e.touches.length;++r){const s=e.touches[r];let i=null;for(let c=0;c<this._pointers.length;c++)if(this._pointers[c].id===s.identifier){i=this._pointers[c];break}if(!i)continue;i.prevX=i.x,i.prevY=i.y;const l=this._canvas.getBoundingClientRect();i.x=s.clientX-l.left,i.y=s.clientY-l.top,i.dx=(i.x-i.prevX)*10,i.dy=(i.y-i.prevY)*10;const n=Math.sqrt(i.dx*i.dx+i.dy*i.dy);i.moved=n>this._movementThreshold,this._updatePointerColor(i)}});O(this,"onTouchEnd",e=>{e.preventDefault();const r=Array.from(e.touches).map(s=>s.identifier);for(let s=0;s<this._pointers.length;s++){const i=this._pointers[s];i.id!==-1&&!r.includes(i.id)&&(i.down=!1,i.moved=!1)}});O(this,"_blit",e=>{const r=this._gl;r.bindFramebuffer(r.FRAMEBUFFER,e),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0)});const{canvas:r,config:s={...q,...e.config},disableRandomSplats:i=!0,movementThreshold:l=0}=e;this._canvas=r,this._config=s,this._disableRandomSplats=i,this._movementThreshold=l,this._pointers=[new K],this._splatStack=[];const{gl:n,ext:c}=Ne(r);this._gl=n,this._ext=c,this._initPrograms(),this._initBlit(),this.resize(),this._time=Date.now(),this._timer=0,this._colorCycle=0}get config(){return this._config}set config(e){const r=this._config;this._config={...this._config,...e},(r.additiveMode!==this._config.additiveMode||r.additiveThreshold!==this._config.additiveThreshold)&&this._gl&&this._programs&&(this._programs.display&&(this._programs.display.bind(),this._gl.uniform1f(this._programs.display.uniforms.uAdditiveMode,this._config.additiveMode?1:0),this._gl.uniform1f(this._programs.display.uniforms.uAdditiveThreshold,this._config.additiveThreshold||1)),this._programs.splat&&(this._programs.splat.bind(),this._gl.uniform1f(this._programs.splat.uniforms.uAdditiveMode,this._config.additiveMode?1:0),this._gl.uniform1f(this._programs.splat.uniforms.uAdditiveThreshold,this._config.additiveThreshold||1)))}get disableRandomSplats(){return this._disableRandomSplats}set disableRandomSplats(e){this._disableRandomSplats=e}get movementThreshold(){return this._movementThreshold}set movementThreshold(e){this._movementThreshold=e}get width(){return this._canvas.width}get height(){return this._canvas.height}addSplat(e){this._splatStack.push([e])}addSplats(e){this._splatStack.push(Array.isArray(e)?e:[e])}addRandomSplats(e){const r=[];for(let s=0;s<e;++s)r.push(this._getRandomSplat());this.addSplats(r)}resize(){const{width:e,height:r}=this._canvas;(this._width!==e||this._height!==r)&&(this._width=e,this._height=r,this._initFramebuffers())}_updatePointerColor(e){if(this._config.colors&&this._config.colors.length>0){const r=Date.now()*.001,s=this._config.colorCycleSpeed||.1,i=Math.floor(r*s%this._config.colors.length);e.color=this._config.colors[i].slice();const l=Math.sin(r*.3*s)*2;e.color=e.color.map(n=>Math.max(0,n+l))}else{const r=Date.now()*.001,s=this._config.colorCycleSpeed||.1,i=r*.15*s%1,l=.6,n=.6;let c,h,v;const f=Math.floor(i*6),w=i*6-f,T=n*(1-l),b=n*(1-w*l),S=n*(1-(1-w)*l);switch(f%6){case 0:c=n,h=S,v=T;break;case 1:c=b,h=n,v=T;break;case 2:c=T,h=n,v=S;break;case 3:c=T,h=b,v=n;break;case 4:c=S,h=T,v=n;break;case 5:c=n,h=T,v=b;break}e.color=[c*10,h*10,v*10]}}_initPrograms(){const e=this._gl,r=this._ext;this._programs={},this._programs.clear=new M(e,x.vert,x.clear),this._programs.display=new M(e,x.vert,x.display),this._programs.splat=new M(e,x.vert,x.splat),this._programs.advection=new M(e,x.vert,r.supportLinearFiltering?x.advection:x.advectionManualFiltering),this._programs.divergence=new M(e,x.vert,x.divergence),this._programs.curl=new M(e,x.vert,x.curl),this._programs.vorticity=new M(e,x.vert,x.vorticity),this._programs.pressure=new M(e,x.vert,x.pressure),this._programs.gradientSubtract=new M(e,x.vert,x.gradientSubtract)}_initFramebuffers(){const e=this._gl,r=this._ext;function s(v,f,w,T,b,S,D){e.activeTexture(e.TEXTURE0+v);const C=e.createTexture();e.bindTexture(e.TEXTURE_2D,C),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,T,f,w,0,b,S,null);const F=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,F),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0),e.viewport(0,0,f,w),e.clear(e.COLOR_BUFFER_BIT),[C,F,v]}function i(v,f,w,T,b,S,D){let C=s(v,f,w,T,b,S,D),F=s(v+1,f,w,T,b,S,D);return{get read(){return C},get write(){return F},swap(){const V=C;C=F,F=V}}}this._textureWidth=e.drawingBufferWidth>>this._config.textureDownsample,this._textureHeight=e.drawingBufferHeight>>this._config.textureDownsample;const l=r.halfFloatTexType,n=r.formatRGBA,c=r.formatRG,h=r.formatR;this._density=i(2,this._textureWidth,this._textureHeight,n.internalFormat,n.format,l,r.supportLinearFiltering?e.LINEAR:e.NEAREST),this._velocity=i(0,this._textureWidth,this._textureHeight,c.internalFormat,c.format,l,r.supportLinearFiltering?e.LINEAR:e.NEAREST),this._divergence=s(4,this._textureWidth,this._textureHeight,h.internalFormat,h.format,l,e.NEAREST),this._curl=s(5,this._textureWidth,this._textureHeight,h.internalFormat,h.format,l,e.NEAREST),this._pressure=i(6,this._textureWidth,this._textureHeight,h.internalFormat,h.format,l,e.NEAREST)}_initBlit(){const e=this._gl;e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0)}_splat(e,r,s,i,l){const n=this._gl;this._programs.splat.bind(),n.uniform1i(this._programs.splat.uniforms.uTarget,this._velocity.read[2]),n.uniform1f(this._programs.splat.uniforms.aspectRatio,this._canvas.width/this._canvas.height),n.uniform2f(this._programs.splat.uniforms.point,e/this._canvas.width,1-r/this._canvas.height),n.uniform3f(this._programs.splat.uniforms.color,s,-i,1),n.uniform1f(this._programs.splat.uniforms.radius,this._config.splatRadius),n.uniform1f(this._programs.splat.uniforms.uAdditiveMode,this._config.additiveMode?1:0),n.uniform1f(this._programs.splat.uniforms.uAdditiveThreshold,this._config.additiveThreshold||1),this._blit(this._velocity.write[1]),this._velocity.swap(),this._programs.splat.bind(),n.uniform1i(this._programs.splat.uniforms.uTarget,this._density.read[2]);const c=this._config.additiveMode?.12:.15;n.uniform3f(this._programs.splat.uniforms.color,l[0]*c,l[1]*c,l[2]*c),n.uniform1f(this._programs.splat.uniforms.uAdditiveMode,this._config.additiveMode?1:0),n.uniform1f(this._programs.splat.uniforms.uAdditiveThreshold,this._config.additiveThreshold||1),this._blit(this._density.write[1]),this._density.swap()}_addSplat(e){const{x:r,y:s,dx:i,dy:l,color:n}=e;r!==void 0&&s!==void 0&&i!==void 0&&l!==void 0&&n!==void 0&&this._splat(r,s,i,l,n)}_addSplats(e){for(const r of e)this._addSplat(r)}_getRandomSplat(){const e=new K;this._updatePointerColor(e);const r=e.color,s=this._canvas.width*Math.random(),i=this._canvas.height*Math.random(),l=1e3*(Math.random()-.5),n=1e3*(Math.random()-.5);return{x:s,y:i,dx:l,dy:n,color:r}}update(){const e=this._gl,r=Math.min((Date.now()-this._time)/1e3,.016);this._time=Date.now(),this._timer+=1e-4;const s=this._config.colorCycleSpeed||.1;this._colorCycle=(this._colorCycle+r*s*5)%1;const i=this._textureWidth,l=this._textureHeight,n=1/i,c=1/l;e.viewport(0,0,i,l),this._splatStack.length>0&&this._addSplats(this._splatStack.pop()),this._programs.advection.bind(),e.uniform2f(this._programs.advection.uniforms.texelSize,n,c),e.uniform1i(this._programs.advection.uniforms.uVelocity,this._velocity.read[2]),e.uniform1i(this._programs.advection.uniforms.uSource,this._velocity.read[2]),e.uniform1f(this._programs.advection.uniforms.dt,r),e.uniform1f(this._programs.advection.uniforms.dissipation,this._config.velocityDissipation),this._blit(this._velocity.write[1]),this._velocity.swap(),e.uniform1i(this._programs.advection.uniforms.uVelocity,this._velocity.read[2]),e.uniform1i(this._programs.advection.uniforms.uSource,this._density.read[2]),e.uniform1f(this._programs.advection.uniforms.dissipation,this._config.densityDissipation),this._blit(this._density.write[1]),this._density.swap();for(let v=0;v<this._pointers.length;v++){const f=this._pointers[v];f.moved&&(this._updatePointerColor(f),this._splat(f.x,f.y,f.dx,f.dy,f.color),f.down||(f.moved=!1))}this._programs.curl.bind(),e.uniform2f(this._programs.curl.uniforms.texelSize,n,c),e.uniform1i(this._programs.curl.uniforms.uVelocity,this._velocity.read[2]),this._blit(this._curl[1]),this._programs.vorticity.bind(),e.uniform2f(this._programs.vorticity.uniforms.texelSize,n,c),e.uniform1i(this._programs.vorticity.uniforms.uVelocity,this._velocity.read[2]),e.uniform1i(this._programs.vorticity.uniforms.uCurl,this._curl[2]),e.uniform1f(this._programs.vorticity.uniforms.curl,this._config.curl),e.uniform1f(this._programs.vorticity.uniforms.dt,r),this._blit(this._velocity.write[1]),this._velocity.swap(),this._programs.divergence.bind(),e.uniform2f(this._programs.divergence.uniforms.texelSize,n,c),e.uniform1i(this._programs.divergence.uniforms.uVelocity,this._velocity.read[2]),this._blit(this._divergence[1]),this._programs.clear.bind();let h=this._pressure.read[2];e.activeTexture(e.TEXTURE0+h),e.bindTexture(e.TEXTURE_2D,this._pressure.read[0]),e.uniform1i(this._programs.clear.uniforms.uTexture,h),e.uniform1f(this._programs.clear.uniforms.value,this._config.pressureDissipation),this._blit(this._pressure.write[1]),this._pressure.swap(),this._programs.pressure.bind(),e.uniform2f(this._programs.pressure.uniforms.texelSize,n,c),e.uniform1i(this._programs.pressure.uniforms.uDivergence,this._divergence[2]),h=this._pressure.read[2],e.uniform1i(this._programs.pressure.uniforms.uPressure,h),e.activeTexture(e.TEXTURE0+h);for(let v=0;v<this._config.pressureIterations;v++)e.bindTexture(e.TEXTURE_2D,this._pressure.read[0]),this._blit(this._pressure.write[1]),this._pressure.swap();this._programs.gradientSubtract.bind(),e.uniform2f(this._programs.gradientSubtract.uniforms.texelSize,n,c),e.uniform1i(this._programs.gradientSubtract.uniforms.uPressure,this._pressure.read[2]),e.uniform1i(this._programs.gradientSubtract.uniforms.uVelocity,this._velocity.read[2]),this._blit(this._velocity.write[1]),this._velocity.swap(),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),this._programs.display.bind(),e.uniform1i(this._programs.display.uniforms.uTexture,this._density.read[2]),e.uniform4f(this._programs.display.uniforms.uBackgroundColor,0,0,0,0),e.uniform1f(this._programs.display.uniforms.uAdditiveMode,this._config.additiveMode?1:0),e.uniform1f(this._programs.display.uniforms.uAdditiveThreshold,this._config.additiveThreshold||1),this._blit(null)}}const Le=o=>{const[e,r]=_.useState({width:0,height:0});return _.useEffect(()=>{if(!o||!o.current)return;const s=new Pe.ResizeObserver(i=>{const{width:l,height:n}=i[0].contentRect;r({width:l,height:n})});return s.observe(o.current),()=>{s.disconnect()}},[o]),e},me=o=>{const{content:e,config:r=q,style:s={},animationRef:i,disableRandomSplats:l=!0,movementThreshold:n=0,...c}=o,h=_.useRef(null),v=_.useRef(null),f=_.useRef(null),w=_.useRef(null),T=Le(h),b=_.useCallback(()=>{!h.current||!v.current||(v.current.width=h.current.clientWidth,v.current.height=h.current.clientHeight,f.current&&f.current.resize())},[]),S=_.useCallback(()=>{b(),v.current&&(f.current=new ve({canvas:v.current,content:e,config:r,disableRandomSplats:l,movementThreshold:n}),i&&i(f.current))},[e,r,l,n,i,b]),D=_.useCallback(()=>{f.current&&f.current.update(),w.current=N(D)},[]);_.useEffect(()=>(S(),D(),()=>{w.current&&(N.cancel(w.current),w.current=null)}),[S,D]),_.useEffect(()=>{if(b(),r&&f.current){f.current.config={...q,...r};const g=f.current._gl,m=f.current._programs;m!=null&&m.display&&(m.display.bind(),g.uniform1f(m.display.uniforms.uAdditiveMode,r.additiveMode?1:0),g.uniform1f(m.display.uniforms.uAdditiveThreshold,r.additiveThreshold||1)),m!=null&&m.splat&&(m.splat.bind(),g.uniform1f(m.splat.uniforms.uAdditiveMode,r.additiveMode?1:0),g.uniform1f(m.splat.uniforms.uAdditiveThreshold,r.additiveThreshold||1))}f.current&&(f.current.disableRandomSplats=!!l,typeof n=="number"&&(f.current.movementThreshold=n))},[r,l,n,b]),_.useEffect(()=>{T.width!==0&&T.height!==0&&b()},[T,b]);const C=g=>{var m;g.preventDefault(),(m=f.current)==null||m.onMouseDown(g.nativeEvent)},F=g=>{var m;g.preventDefault(),(m=f.current)==null||m.onMouseMove(g.nativeEvent)},V=g=>{var m;g.preventDefault(),(m=f.current)==null||m.onMouseUp(g.nativeEvent)},Q=g=>{var m;(m=f.current)==null||m.onTouchStart(g.nativeEvent)},Y=g=>{var m;(m=f.current)==null||m.onTouchMove(g.nativeEvent)},$=g=>{var m;(m=f.current)==null||m.onTouchEnd(g.nativeEvent)};return de.jsx("div",{style:{width:"100%",height:"100%",overflow:"hidden",...s},...c,ref:h,children:de.jsx("canvas",{ref:v,onMouseDown:C,onMouseMove:F,onMouseUp:V,onTouchStart:Q,onTouchMove:Y,onTouchEnd:$,style:{width:"100%",height:"100%",background:"transparent"}})})};me.displayName="ReactFluidAnimation",E.FluidAnimation=ve,E.default=me,E.defaultConfig=q,Object.defineProperties(E,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
