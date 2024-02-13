var kinesis=function(E,i){"use strict";var T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function k(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j="Expected a function",O=0/0,C="[object Symbol]",B=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,R=/^0o[0-7]+$/i,W=parseInt,D=typeof T=="object"&&T&&T.Object===Object&&T,F=typeof self=="object"&&self&&self.Object===Object&&self,V=D||F||Function("return this")(),K=Object.prototype,N=K.toString,z=Math.max,H=Math.min,S=function(){return V.Date.now()};function G(e,n,t){var s,f,a,u,l,r,o=0,c=!1,m=!1,y=!0;if(typeof e!="function")throw new TypeError(j);n=$(n)||0,X(t)&&(c=!!t.leading,m="maxWait"in t,a=m?z($(t.maxWait)||0,n):a,y="trailing"in t?!!t.trailing:y);function p(d){var v=s,w=f;return s=f=void 0,o=d,u=e.apply(w,v),u}function h(d){return o=d,l=setTimeout(M,n),c?p(d):u}function g(d){var v=d-r,w=d-o,I=n-v;return m?H(I,a-w):I}function b(d){var v=d-r,w=d-o;return r===void 0||v>=n||v<0||m&&w>=a}function M(){var d=S();if(b(d))return x(d);l=setTimeout(M,g(d))}function x(d){return l=void 0,y&&s?p(d):(s=f=void 0,u)}function le(){l!==void 0&&clearTimeout(l),o=0,s=r=f=l=void 0}function fe(){return l===void 0?u:x(S())}function Y(){var d=S(),v=b(d);if(s=arguments,f=this,r=d,v){if(l===void 0)return h(r);if(m)return l=setTimeout(M,n),p(r)}return l===void 0&&(l=setTimeout(M,n)),u}return Y.cancel=le,Y.flush=fe,Y}function U(e,n,t){var s=!0,f=!0;if(typeof e!="function")throw new TypeError(j);return X(t)&&(s="leading"in t?!!t.leading:s,f="trailing"in t?!!t.trailing:f),G(e,n,{leading:s,maxWait:n,trailing:f})}function X(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function q(e){return!!e&&typeof e=="object"}function J(e){return typeof e=="symbol"||q(e)&&N.call(e)==C}function $(e){if(typeof e=="number")return e;if(J(e))return O;if(X(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=X(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(B,"");var t=L.test(e);return t||R.test(e)?W(e.slice(2),t?2:8):A.test(e)?O:+e}var Q=U;const Z=k(Q),P=(e,n,t)=>t&&e>t?t:n&&e<n?n:e,_=e=>{const{referencePosition:n,shape:t,cycles:s,strength:f}=e,a=(n.x-t.left)*(Math.PI*2)/t.width,u=(n.y-t.top)*(Math.PI*2)/t.height,l=t.width*Math.sin(a*s),r=t.height*Math.sin(u*s);return{x:l*f/(t.width/2),y:r*f/(t.height/2)}},ee=({y:e,x:n,originX:t=50,originY:s=50,strength:f=10,minX:a,minY:u,maxX:l,maxY:r})=>{const o=P((n-t/50)*f,a,l),c=P((e-s/50)*f,u,r);return{x:o,y:c}},te=e=>({x:e?e.width/2:0,y:e?e.height/2:0}),ne=e=>e.bottom>=0&&e.right>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth),ie=()=>{try{return/Mobi|Android/i.test(navigator.userAgent)}catch{return!0}},re=({target:e,event:n})=>{const t=n.clientX,s=n.clientY,f=t-e.left,a=s-e.top,u=te(e),l=f/u.x,r=a/u.y;return{x:l,y:r,target:e}},oe=i.defineComponent({__name:"KinesisContainer",props:{disabled:{type:Boolean,default:!1},duration:{default:1e3},easing:{default:"cubic-bezier(0.23, 1, 0.32, 1)"},perspective:{default:0}},setup(e){const n=i.ref(),t=i.ref({width:0,height:0,top:0,right:0,bottom:0,left:0}),s=i.ref(!1),f=i.ref(!1),a=i.ref({x:1,y:1}),u=i.ref(),l=ie(),r=i.computed(()=>({move:{action:(h,g)=>re({target:h,event:g}),condition:s.value&&!l,type:l?"deviceorientation":null}})),o=()=>{e.disabled||(s.value=!0)},c=()=>{e.disabled||(f.value=!0,s.value=!1)},m=Z(h=>{if(e.disabled||!n.value)return;const g=h;!s.value&&!f.value&&o(),t.value=n.value.getBoundingClientRect();const b=ne(t.value),M=r.value.move.condition,x=r.value.move.action;b&&M&&(a.value=x(t.value,g),u.value={x:g.clientX,y:g.clientY})},100),y=()=>{l&&window.addEventListener("deviceorientation",m,!0)},p=()=>{l&&window.removeEventListener("deviceorientation",m,!0)};return i.onMounted(y),i.onBeforeUnmount(p),i.provide("context",i.readonly(i.reactive({duration:e.duration,easing:e.easing,eventData:u,isMoving:s,movement:a,shape:t}))),(h,g)=>(i.openBlock(),i.createElementBlock("div",{ref_key:"container",ref:n,style:i.normalizeStyle(h.perspective?{perspective:`${h.perspective}px`}:void 0),onMousemove:g[0]||(g[0]=(...b)=>i.unref(m)&&i.unref(m)(...b)),onMouseenter:o,onMouseleave:c},[i.renderSlot(h.$slots,"default")],36))}}),ae=(e,n,t)=>{const s=(r,o)=>`translate3d(${-r}px, ${-o}px, 0)`,f=(r,o)=>{let c=0;return e.value?e.value==="x"?c=2*r:e.value==="y"&&(c=2*o):c=r+o,`rotate3d(0,0,1,${c}deg)`},a=(r,o,c)=>`rotateX(${-o}deg) rotateY(${r}deg) translate3d(0,0,${c*2}px)`,u=(r,o)=>{const c=Math.sign(n.value)*(Math.abs(r)+Math.abs(o))/10+1;return`scale3d(${t.value==="scaleX"||t.value==="scale"?c:1}, ${t.value==="scaleY"||t.value==="scale"?c:1}, 1)`};return{transformSwitch:(r,o,c,m)=>{switch(r==="scaleX"||r==="scaleY"?"scale":r){case"translate":return s(o,c);case"translate-inv":return s(-o,-c);case"rotate":return f(o,c);case"depth":return a(o,c,m);case"depth-inv":return a(-o,-c,m);case"scale":return u(o,c)}}}},se=i.defineComponent({__name:"KinesisElement",props:{type:{default:"translate"},transformOrigin:{default:"center"},originX:{default:50},originY:{default:50},strength:{default:10},axis:{default:null},maxX:{default:null},maxY:{default:null},minX:{default:null},minY:{default:null},cycles:{default:0}},setup(e){const n=i.toRef(()=>e.axis),t=i.toRef(()=>e.strength),s=i.toRef(()=>e.type),{transformSwitch:f}=ae(n,t,s),a=i.inject("context"),u=i.computed(()=>e.type==="depth"||e.type==="depth-inv"?Math.abs(e.strength):e.strength),l=i.computed(()=>{if(!a||!a.shape||!a.isMoving)return{};let o=0,c=0;const{x:m,y}=e.cycles<1?ee({...a.movement,originX:e.originX,originY:e.originY,strength:u.value,minX:e.minX,minY:e.minY,maxX:e.maxX,maxY:e.maxY}):_({referencePosition:a.eventData,shape:a.shape,cycles:e.cycles,strength:u.value});return o=e.axis==="y"?0:m,c=e.axis==="x"?0:y,{transform:f(e.type,o,c,e.strength)}}),r=i.computed(()=>({transformOrigin:e.transformOrigin,transitionProperty:"transform",transitionDuration:`${(a==null?void 0:a.duration)??0}ms`,transitionTimingFunction:(a==null?void 0:a.easing)??"linear"}));return(o,c)=>(i.openBlock(),i.createElementBlock("div",{style:i.normalizeStyle({...l.value,...r.value})},[i.renderSlot(o.$slots,"default")],4))}}),ce={install(e){e.component("KinesisContainer",oe),e.component("KinesisElement",se)}};return E.kinesisPlugin=ce,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),E}({},Vue);
