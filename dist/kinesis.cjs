"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("vue");var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k="Expected a function",$=0/0,p="[object Symbol]",R=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,H=/^0o[0-7]+$/i,D=parseInt,F=typeof E=="object"&&E&&E.Object===Object&&E,K=typeof self=="object"&&self&&self.Object===Object&&self,N=F||K||Function("return this")(),V=Object.prototype,z=V.toString,G=Math.max,U=Math.min,Y=function(){return N.Date.now()};function q(e,n,t){var r,f,i,l,u,a,o=0,s=!1,d=!1,h=!0;if(typeof e!="function")throw new TypeError(k);n=P(n)||0,T(t)&&(s=!!t.leading,d="maxWait"in t,i=d?G(P(t.maxWait)||0,n):i,h="trailing"in t?!!t.trailing:h);function M(m){var b=r,x=f;return r=f=void 0,o=m,l=e.apply(x,b),l}function v(m){return o=m,u=setTimeout(w,n),s?M(m):l}function g(m){var b=m-a,x=m-o,O=n-b;return d?U(O,i-x):O}function y(m){var b=m-a,x=m-o;return a===void 0||b>=n||b<0||d&&x>=i}function w(){var m=Y();if(y(m))return X(m);u=setTimeout(w,g(m))}function X(m){return u=void 0,h&&r?M(m):(r=f=void 0,l)}function C(){u!==void 0&&clearTimeout(u),o=0,r=a=f=u=void 0}function B(){return u===void 0?l:X(Y())}function S(){var m=Y(),b=y(m);if(r=arguments,f=this,a=m,b){if(u===void 0)return v(a);if(d)return u=setTimeout(w,n),M(a)}return u===void 0&&(u=setTimeout(w,n)),l}return S.cancel=C,S.flush=B,S}function J(e,n,t){var r=!0,f=!0;if(typeof e!="function")throw new TypeError(k);return T(t)&&(r="leading"in t?!!t.leading:r,f="trailing"in t?!!t.trailing:f),q(e,n,{leading:r,maxWait:n,trailing:f})}function T(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Q(e){return!!e&&typeof e=="object"}function Z(e){return typeof e=="symbol"||Q(e)&&z.call(e)==p}function P(e){if(typeof e=="number")return e;if(Z(e))return $;if(T(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=T(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(R,"");var t=L.test(e);return t||H.test(e)?D(e.slice(2),t?2:8):A.test(e)?$:+e}var _=J;const ee=W(_),I=(e,n,t)=>t&&e>t?t:n&&e<n?n:e,te=e=>{const{referencePosition:n,shape:t,event:r,cycles:f,strength:i}=e,l=r==="scroll"?window.innerWidth:t.width,u=r==="scroll"?window.innerHeight:t.height,a=(n.x-t.left)*(Math.PI*2)/l,o=(n.y-t.top)*(Math.PI*2)/u,s=l*Math.sin(a*f),d=u*Math.sin(o*f);return{x:s*i/(l/2),y:d*i/(u/2)}},ne=({y:e,x:n,originX:t=50,originY:r=50,strength:f=10,event:i=null,minX:l,minY:u,maxX:a,maxY:o})=>{const s=I((n-t/50)*f,l,a),d=I((e-(i==="scroll"?-r/2:r)/50)*f,u,o);return{x:s,y:d}},ie=e=>({x:e?e.width/2:0,y:e?e.height/2:0}),oe=e=>e.bottom>=0&&e.right>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth),j=()=>{try{return/Mobi|Android/i.test(navigator.userAgent)}catch{return!0}},re=({target:e,event:n})=>{const t=n.clientX,r=n.clientY,f=t-e.left,i=r-e.top,l=ie(e),u=f/l.x,a=i/l.y;return{x:u,y:a,target:e}},ae=({event:e,target:n})=>{if(e.gamma===null||e.beta===null)return{x:0,y:0,target:n};const t=e.gamma/45,r=e.beta/90;return{x:t,y:r,target:n}},se=e=>{const n=(e.left-window.innerWidth)/(e.width+window.innerWidth),t=(e.top-window.innerHeight)/(e.height+window.innerHeight);return{x:n,y:t,target:e}},ce=c.defineComponent({__name:"KinesisContainer",props:{event:{default:"move"},disabled:{type:Boolean,default:!1},duration:{default:1e3},easing:{default:"cubic-bezier(0.23, 1, 0.32, 1)"},perspective:{default:1e3}},setup(e){const n=c.ref(),t=c.ref({width:0,height:0,top:0,right:0,bottom:0,left:0}),r=c.ref(!1),f=c.ref(!1),i=c.ref({x:1,y:1}),l={orientation:"deviceorientation",scroll:"scroll",move:j()?"deviceorientation":null},u=c.ref(),a=c.computed(()=>{var v;return{move:{action:(g,y)=>re({target:g,event:y}),condition:r.value&&!j(),type:l.move},scroll:{action:g=>se(g),condition:!!((v=t.value)!=null&&v.height),type:l.scroll},orientation:{action:(g,y)=>ae({target:g,event:y}),condition:e.event==="move"&&j(),type:l.orientation}}}),o=()=>{e.disabled||(r.value=!0)},s=()=>{e.disabled||(f.value=!0,r.value=!1)},d=ee(v=>{if(e.disabled||!n.value)return;const g=v;!r.value&&!f.value&&o(),t.value=n.value.getBoundingClientRect();const y=oe(t.value),w=a.value[e.event].condition,X=a.value[e.event].action;y&&w&&(i.value=X(t.value,g),u.value={x:g.clientX,y:g.clientY})},100),h=()=>{const v=l[e.event];v&&window.addEventListener(v,d,!0)},M=()=>{const v=l[e.event];v&&window.removeEventListener(v,d,!0)};return c.onMounted(h),c.onBeforeUnmount(M),c.provide("context",c.readonly(c.reactive({duration:e.duration,easing:e.easing,event:e.event,eventData:u,isMoving:r,movement:i,shape:t}))),(v,g)=>(c.openBlock(),c.createElementBlock("div",{ref_key:"container",ref:n,style:c.normalizeStyle({perspective:`${v.perspective}px`}),onMousemove:g[0]||(g[0]=(...y)=>c.unref(d)&&c.unref(d)(...y)),onMouseenter:o,onMouseleave:s},[c.renderSlot(v.$slots,"default")],36))}}),le=(e,n,t)=>{const r=(a,o)=>`translate3d(${-a}px, ${-o}px, 0)`,f=(a,o)=>{let s=0;return e.value?e.value==="x"?s=2*a:e.value==="y"&&(s=2*o):s=a+o,`rotate3d(0,0,1,${s}deg)`},i=(a,o,s)=>`rotateX(${-o}deg) rotateY(${a}deg) translate3d(0,0,${s*2}px)`,l=(a,o)=>{const s=Math.sign(n.value)*(Math.abs(a)+Math.abs(o))/10+1;return`scale3d(${t.value==="scaleX"||t.value==="scale"?s:1}, ${t.value==="scaleY"||t.value==="scale"?s:1}, 1)`};return{transformSwitch:(a,o,s,d)=>{switch(a==="scaleX"||a==="scaleY"?"scale":a){case"translate":return r(o,s);case"translate-inv":return r(-o,-s);case"rotate":return f(o,s);case"depth":return i(o,s,d);case"depth-inv":return i(-o,-s,d);case"scale":return l(o,s)}}}},ue=c.defineComponent({__name:"KinesisElement",props:{type:{default:"translate"},transformOrigin:{default:"center"},originX:{default:50},originY:{default:50},strength:{default:10},axis:{default:null},maxX:{default:null},maxY:{default:null},minX:{default:null},minY:{default:null},cycles:{default:0}},setup(e){const n=c.toRef(()=>e.axis),t=c.toRef(()=>e.strength),r=c.toRef(()=>e.type),{transformSwitch:f}=le(n,t,r),i=c.inject("context"),l=c.computed(()=>e.type==="depth"||e.type==="depth-inv"?Math.abs(e.strength):e.strength),u=c.computed(()=>{if(!i||!i.shape||!i.isMoving&&i.event==="move")return{};let o=0,s=0;const{x:d,y:h}=e.cycles<1?ne({...i.movement,originX:e.originX,originY:e.originY,strength:l.value,event:i.event,minX:e.minX,minY:e.minY,maxX:e.maxX,maxY:e.maxY}):te({referencePosition:i.event==="scroll"?{x:0,y:0}:i.eventData,shape:i.shape,event:i.event,cycles:e.cycles,strength:l.value});return i.event!=="scroll"?(o=e.axis==="y"?0:d,s=e.axis==="x"?0:h):i.event==="scroll"?(o=e.axis==="x"?h:0,s=e.axis==="y"||!e.axis?h:0):e.cycles>0&&(o=e.axis==="x"?d:0,s=e.axis==="y"?h:0),{transform:f(e.type,o,s,e.strength)}}),a=c.computed(()=>({transformOrigin:e.transformOrigin,willChange:"transform",transitionProperty:"transform",transitionDuration:`${(i==null?void 0:i.duration)??0}ms`,transitionTimingFunction:(i==null?void 0:i.easing)??"linear"}));return(o,s)=>(c.openBlock(),c.createElementBlock("div",{style:c.normalizeStyle({...u.value,...a.value})},[c.renderSlot(o.$slots,"default")],4))}}),fe={install(e){e.component("KinesisContainer",ce),e.component("KinesisElement",ue)}};exports.kinesisPlugin=fe;