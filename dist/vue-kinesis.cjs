"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("vue");var T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function B(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I="Expected a function",$=0/0,W="[object Symbol]",R=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,D=/^0b[01]+$/i,L=/^0o[0-7]+$/i,H=parseInt,F=typeof T=="object"&&T&&T.Object===Object&&T,K=typeof self=="object"&&self&&self.Object===Object&&self,N=F||K||Function("return this")(),V=Object.prototype,z=V.toString,G=Math.max,U=Math.min,j=function(){return N.Date.now()};function q(e,n,t){var a,f,i,l,u,s,o=0,c=!1,d=!1,h=!0;if(typeof e!="function")throw new TypeError(I);n=C(n)||0,S(t)&&(c=!!t.leading,d="maxWait"in t,i=d?G(C(t.maxWait)||0,n):i,h="trailing"in t?!!t.trailing:h);function M(m){var b=a,x=f;return a=f=void 0,o=m,l=e.apply(x,b),l}function v(m){return o=m,u=setTimeout(w,n),c?M(m):l}function g(m){var b=m-s,x=m-o,O=n-b;return d?U(O,i-x):O}function y(m){var b=m-s,x=m-o;return s===void 0||b>=n||b<0||d&&x>=i}function w(){var m=j();if(y(m))return X(m);u=setTimeout(w,g(m))}function X(m){return u=void 0,h&&a?M(m):(a=f=void 0,l)}function k(){u!==void 0&&clearTimeout(u),o=0,a=s=f=u=void 0}function p(){return u===void 0?l:X(j())}function Y(){var m=j(),b=y(m);if(a=arguments,f=this,s=m,b){if(u===void 0)return v(s);if(d)return u=setTimeout(w,n),M(s)}return u===void 0&&(u=setTimeout(w,n)),l}return Y.cancel=k,Y.flush=p,Y}function J(e,n,t){var a=!0,f=!0;if(typeof e!="function")throw new TypeError(I);return S(t)&&(a="leading"in t?!!t.leading:a,f="trailing"in t?!!t.trailing:f),q(e,n,{leading:a,maxWait:n,trailing:f})}function S(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Q(e){return!!e&&typeof e=="object"}function Z(e){return typeof e=="symbol"||Q(e)&&z.call(e)==W}function C(e){if(typeof e=="number")return e;if(Z(e))return $;if(S(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=S(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(R,"");var t=D.test(e);return t||L.test(e)?H(e.slice(2),t?2:8):A.test(e)?$:+e}var _=J;const ee=B(_),P=(e,n,t)=>t&&e>t?t:n&&e<n?n:e,te=e=>{const{referencePosition:n,shape:t,event:a,cycles:f,strength:i}=e,l=a==="scroll"?window.innerWidth:t.width,u=a==="scroll"?window.innerHeight:t.height,s=(n.x-t.left)*(Math.PI*2)/l,o=(n.y-t.top)*(Math.PI*2)/u,c=l*Math.sin(s*f),d=u*Math.sin(o*f);return{x:c*i/(l/2),y:d*i/(u/2)}},ne=({y:e,x:n,originX:t=50,originY:a=50,strength:f=10,event:i=null,minX:l,minY:u,maxX:s,maxY:o})=>{const c=P((n-t/50)*f,l,s),d=P((e-(i==="scroll"?-a/2:a)/50)*f,u,o);return{x:c,y:d}},ie=e=>({x:e?e.width/2:0,y:e?e.height/2:0}),oe=e=>e.bottom>=0&&e.right>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth),E=()=>{try{return/Mobi|Android/i.test(navigator.userAgent)}catch{return!0}},re=({target:e,event:n})=>{const t=n.clientX,a=n.clientY,f=t-e.left,i=a-e.top,l=ie(e),u=f/l.x,s=i/l.y;return{x:u,y:s,target:e}},ae=({event:e,target:n})=>{if(e.gamma===null||e.beta===null)return{x:0,y:0,target:n};const t=e.gamma/45,a=e.beta/90;return{x:t,y:a,target:n}},se=e=>{const n=(e.left-window.innerWidth)/(e.width+window.innerWidth),t=(e.top-window.innerHeight)/(e.height+window.innerHeight);return{x:n,y:t,target:e}},ce=r.defineComponent({__name:"KinesisContainer",props:{tag:{default:"div"},event:{default:"move"},disabled:{type:Boolean,default:!1},duration:{default:1e3},easing:{default:"cubic-bezier(0.23, 1, 0.32, 1)"},perspective:{default:1e3}},setup(e){const n=r.ref(),t=r.ref({width:0,height:0,top:0,right:0,bottom:0,left:0}),a=r.ref(!1),f=r.ref(!1),i=r.ref({x:0,y:0}),l={orientation:"deviceorientation",scroll:"scroll",move:E()?"deviceorientation":null},u=r.ref(),s=r.computed(()=>{var v;return{move:{action:(g,y)=>re({target:g,event:y}),condition:a.value&&!E(),type:l.move},scroll:{action:g=>se(g),condition:!!((v=t.value)!=null&&v.height),type:l.scroll},orientation:{action:(g,y)=>ae({target:g,event:y}),condition:e.event==="move"&&E(),type:l.orientation}}}),o=()=>{e.disabled||(a.value=!0)},c=()=>{e.disabled||(f.value=!0,a.value=!1)},d=ee(v=>{if(e.disabled||!n.value)return;const g=v;!a.value&&!f.value&&o(),t.value=n.value.getBoundingClientRect();const y=oe(t.value),w=s.value[e.event].condition,X=s.value[e.event].action;y&&w&&(i.value=X(t.value,g),u.value={x:g.clientX,y:g.clientY})},100),h=()=>{const v=l[e.event];v&&window.addEventListener(v,d,!0)},M=()=>{const v=l[e.event];v&&window.removeEventListener(v,d,!0)};return r.onMounted(h),r.onBeforeUnmount(M),r.provide("context",r.readonly(r.reactive({duration:e.duration,easing:e.easing,event:e.event,eventData:u,isMoving:a,movement:i,shape:t}))),(v,g)=>(r.openBlock(),r.createBlock(r.resolveDynamicComponent(v.tag),{ref_key:"container",ref:n,style:r.normalizeStyle({perspective:`${v.perspective}px`}),onMousemove:r.unref(d),onMouseenter:o,onMouseleave:c},{default:r.withCtx(()=>[r.renderSlot(v.$slots,"default")]),_:3},40,["style","onMousemove"]))}}),le=(e,n,t)=>{const a=(s,o)=>`translate3d(${-s}px, ${-o}px, 0)`,f=(s,o)=>{let c=0;return e.value?e.value==="x"?c=2*s:e.value==="y"&&(c=2*o):c=s+o,`rotate3d(0,0,1,${c}deg)`},i=(s,o,c)=>`rotateX(${-o}deg) rotateY(${s}deg) translate3d(0,0,${c*2}px)`,l=(s,o)=>{const c=Math.sign(n.value)*(Math.abs(s)+Math.abs(o))/10+1;return`scale3d(${t.value==="scaleX"||t.value==="scale"?c:1}, ${t.value==="scaleY"||t.value==="scale"?c:1}, 1)`};return{transformSwitch:(s,o,c,d)=>{switch(s==="scaleX"||s==="scaleY"?"scale":s){case"translate":return a(o,c);case"translate-inv":return a(-o,-c);case"rotate":return f(o,c);case"depth":return i(o,c,d);case"depth-inv":return i(-o,-c,d);case"scale":return l(o,c)}}}},ue=r.defineComponent({__name:"KinesisElement",props:{tag:{default:"div"},type:{default:"translate"},transformOrigin:{default:"center"},originX:{default:50},originY:{default:50},strength:{default:10},axis:{default:null},maxX:{default:null},maxY:{default:null},minX:{default:null},minY:{default:null},cycle:{default:0}},setup(e){const n=r.toRef(()=>e.axis),t=r.toRef(()=>e.strength),a=r.toRef(()=>e.type),{transformSwitch:f}=le(n,t,a),i=r.inject("context"),l=r.computed(()=>e.type==="depth"||e.type==="depth-inv"?Math.abs(e.strength):e.strength),u=r.computed(()=>{if(!i||!i.shape||!i.isMoving&&i.event==="move")return{};let o=0,c=0;const{x:d,y:h}=e.cycle<1?ne({...i.movement,originX:e.originX,originY:e.originY,strength:l.value,event:i.event,minX:e.minX,minY:e.minY,maxX:e.maxX,maxY:e.maxY}):te({referencePosition:i.event==="scroll"?{x:0,y:0}:i.eventData,shape:i.shape,event:i.event,cycles:e.cycle,strength:l.value});return i.event!=="scroll"?(o=e.axis==="y"?0:d,c=e.axis==="x"?0:h):i.event==="scroll"?(o=e.axis==="x"?h:0,c=e.axis==="y"||!e.axis?h:0):e.cycle>0&&(o=e.axis==="x"?d:0,c=e.axis==="y"?h:0),{transform:f(e.type,o,c,e.strength)}}),s=r.computed(()=>({transformOrigin:e.transformOrigin,willChange:"transform",transitionProperty:"transform",transitionDuration:`${(i==null?void 0:i.duration)??0}ms`,transitionTimingFunction:(i==null?void 0:i.easing)??"linear"}));return(o,c)=>(r.openBlock(),r.createBlock(r.resolveDynamicComponent(o.tag),{style:r.normalizeStyle({...u.value,...s.value})},{default:r.withCtx(()=>[r.renderSlot(o.$slots,"default")]),_:3},8,["style"]))}}),fe=e=>{e.component("KinesisContainer",ce),e.component("KinesisElement",ue)};exports.kinesisPlugin=fe;