import{p as d,g as T,r as x,aj as k,k as I,w as N,G as R,l as b,ak as E,B as O,al as A,a1 as p,a6 as S,am as L,c as v,d as m,S as H,I as W,R as _,an as y,W as j,ao as C}from"./index-50561696.js";const G=d({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function U(e){const o=T("useRender");o.render=e}function M(e){const o=x(),n=x();if(k){const t=new ResizeObserver(i=>{e==null||e(i,t),i.length&&(n.value=i[0].contentRect)});I(()=>{t.disconnect()}),N(o,(i,a)=>{a&&(t.unobserve(a),n.value=void 0),i&&t.observe(i)},{flush:"post"})}return{resizeRef:o,contentRect:R(n)}}const z=d({defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},"v-defaults-provider"),J=b(!1)({name:"VDefaultsProvider",props:z(),setup(e,o){let{slots:n}=o;const{defaults:t,disabled:i,reset:a,root:s,scoped:r}=E(e);return O(t,{reset:a,root:s,scoped:r,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),D=d({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function u(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",n=arguments.length>2?arguments[2]:void 0;return b()({name:e,props:D({mode:n,origin:o}),setup(t,i){let{slots:a}=i;const s={onBeforeEnter(r){r.style.transformOrigin=t.origin},onLeave(r){if(t.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:f,offsetHeight:g}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${l}px`,r.style.left=`${c}px`,r.style.width=`${f}px`,r.style.height=`${g}px`}t.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(t.leaveAbsolute&&(r!=null&&r._transitionInitialStyles)){const{position:l,top:c,left:f,width:g,height:h}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=l||"",r.style.top=c||"",r.style.left=f||"",r.style.width=g||"",r.style.height=h||""}}};return()=>{const r=t.group?A:p;return S(r,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:s},a.default)}}})}function P(e,o){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return b()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,i){let{slots:a}=i;return()=>S(p,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:o},a.default)}})}function w(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=L(`offset-${n}`);return{onBeforeEnter(s){s._parent=s.parentNode,s._initialStyle={transition:s.style.transition,overflow:s.style.overflow,[n]:s.style[n]}},onEnter(s){const r=s._initialStyle;s.style.setProperty("transition","none","important"),s.style.overflow="hidden";const l=`${s[t]}px`;s.style[n]="0",s.offsetHeight,s.style.transition=r.transition,e&&s._parent&&s._parent.classList.add(e),requestAnimationFrame(()=>{s.style[n]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(s){s._initialStyle={transition:"",overflow:s.style.overflow,[n]:s.style[n]},s.style.overflow="hidden",s.style[n]=`${s[t]}px`,s.offsetHeight,requestAnimationFrame(()=>s.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(s){e&&s._parent&&s._parent.classList.remove(e),a(s)}function a(s){const r=s._initialStyle[n];s.style.overflow=s._initialStyle.overflow,r!=null&&(s.style[n]=r),delete s._initialStyle}}u("fab-transition","center center","out-in");u("dialog-bottom-transition");u("dialog-top-transition");u("fade-transition");u("scale-transition");u("scroll-x-transition");u("scroll-x-reverse-transition");u("scroll-y-transition");u("scroll-y-reverse-transition");u("slide-x-transition");u("slide-x-reverse-transition");const X=u("slide-y-transition");u("slide-y-reverse-transition");const Y=P("expand-transition",w()),K=P("expand-x-transition",w("",!0)),Q=d({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Z(e){return{dimensionStyles:v(()=>({height:m(e.height),maxHeight:m(e.maxHeight),maxWidth:m(e.maxWidth),minHeight:m(e.minHeight),minWidth:m(e.minWidth),width:m(e.width)}))}}function q(e,o){if(!H)return;const n=o.modifiers||{},t=o.value,{handler:i,options:a}=typeof t=="object"?t:{handler:t,options:{}},s=new IntersectionObserver(function(){var g;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(g=e._observe)==null?void 0:g[o.instance.$.uid];if(!c)return;const f=r.some(h=>h.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||f||c.init)&&i(f,r,l),f&&n.once?$(e,o):c.init=!0},a);e._observe=Object(e._observe),e._observe[o.instance.$.uid]={init:!1,observer:s},s.observe(e)}function $(e,o){var t;const n=(t=e._observe)==null?void 0:t[o.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[o.instance.$.uid])}const V={mounted:q,unmounted:$},ee=V,te=d({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ne=(e,o)=>{let{slots:n}=o;const{transition:t,disabled:i,...a}=e,{component:s=p,...r}=typeof t=="object"?t:{};return S(s,W(typeof t=="string"?{name:i?"":t}:r,a,{disabled:i}),n)},se=d({tag:{type:String,default:"div"}},"tag"),oe=d({border:[Boolean,Number,String]},"border");function re(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_();return{borderClasses:v(()=>{const t=y(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${o}--border`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))i.push(`border-${a}`);return i})}}const ie=d({elevation:{type:[Number,String],validator(e){const o=parseInt(e);return!isNaN(o)&&o>=0&&o<=24}}},"elevation");function ae(e){return{elevationClasses:v(()=>{const n=y(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const ue=d({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function le(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_();return{roundedClasses:v(()=>{const t=y(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${o}--rounded`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))i.push(`rounded-${a}`);return i})}}function B(e){return j(()=>{const o=[],n={};return e.value.background&&(C(e.value.background)?n.backgroundColor=e.value.background:o.push(`bg-${e.value.background}`)),e.value.text&&(C(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):o.push(`text-${e.value.text}`)),{colorClasses:o,colorStyles:n}})}function de(e,o){const n=v(()=>({text:y(e)?e.value:o?e[o]:null})),{colorClasses:t,colorStyles:i}=B(n);return{textColorClasses:t,textColorStyles:i}}function ce(e,o){const n=v(()=>({background:y(e)?e.value:o?e[o]:null})),{colorClasses:t,colorStyles:i}=B(n);return{backgroundColorClasses:t,backgroundColorStyles:i}}export{ee as I,ne as M,J as V,Q as a,Z as b,U as c,te as d,se as e,oe as f,ie as g,ue as h,ce as i,re as j,ae as k,le as l,G as m,Y as n,B as o,de as p,K as q,X as r,M as u};
