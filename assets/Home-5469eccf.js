import{Q as Wi,p as B,R as Tt,c as T,m as p,F as Mt,T as Qi,x as rt,l as Ee,z as It,B as Oh,y as Ve,g as wl,e as Hs,b as El,i as Cl,k as Fn,w as ke,a as Fh,H as $n,o as Rr,U as $h,V as pn,f as Bh,D as Uh,I as yn,W as jh,d as le,X as Ye,r as Le,Y as zh,Z as qh,s as Is,S as Gh,_ as Hh,$ as Kh,a0 as Zo,A as Mr,a1 as Wh,a2 as Qh,a3 as ea,q as ys,t as Tn,u as Tl,a4 as Ks,a5 as Lr,a6 as Il,a7 as Xh,a8 as Lt,v as Sl,a9 as Yh,aa as Jh,n as Zh,ab as ta,ac as ed,ad as td,ae as nd,C as sd,J as un,K as is,N as cn,af as id,L as Me,ag as rs,ah as rd,M as od,ai as ad,P as ld}from"./index-50561696.js";import{o as ud,f as Vr,m as be,g as Pr,h as Bn,e as ot,j as Or,k as Fr,l as Un,c as _e,p as jt,u as cd,i as Ss,a as bl,b as _l,V as _i,q as hd,d as Al,r as kl,M as Dl,I as dd}from"./color-bdd4b6b0.js";const fd=["top","bottom"],gd=["start","end","left","right"];function md(t,e){let[n,s]=t.split(" ");return s||(s=Wi(fd,n)?"start":Wi(gd,n)?"top":"center"),{side:na(n,e),align:na(s,e)}}function na(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}class Ai{constructor(e){let{x:n,y:s,width:i,height:r}=e;this.x=n,this.y=s,this.width=i,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function pd(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),s=n.transform;if(s){let i,r,o,a,l;if(s.startsWith("matrix3d("))i=s.slice(9,-1).split(/, /),r=+i[0],o=+i[5],a=+i[12],l=+i[13];else if(s.startsWith("matrix("))i=s.slice(7,-1).split(/, /),r=+i[0],o=+i[3],a=+i[4],l=+i[5];else return new Ai(e);const u=n.transformOrigin,c=e.x-a-(1-r)*parseFloat(u),d=e.y-l-(1-o)*parseFloat(u.slice(u.indexOf(" ")+1)),h=r?e.width/r:t.offsetWidth+1,f=o?e.height/o:t.offsetHeight+1;return new Ai({x:c,y:d,width:h,height:f})}else return new Ai(e)}function yd(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let s;try{s=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof s.finished>"u"&&(s.finished=new Promise(i=>{s.onfinish=()=>{i(s)}})),s}const vd="cubic-bezier(0.4, 0, 0.2, 1)";const wd=[null,"default","comfortable","compact"],$r=B({density:{type:String,default:"default",validator:t=>wd.includes(t)}},"density");function Br(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tt();return{densityClasses:T(()=>`${e}--density-${t.density}`)}}const Ed=["elevated","flat","tonal","outlined","text","plain"];function Cd(t,e){return p(Mt,null,[t&&p("span",{key:"overlay",class:`${e}__overlay`},null),p("span",{key:"underlay",class:`${e}__underlay`},null)])}const xl=B({color:String,variant:{type:String,default:"elevated",validator:t=>Ed.includes(t)}},"variant");function Td(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tt();const n=T(()=>{const{variant:r}=Qi(t);return`${e}--variant-${r}`}),{colorClasses:s,colorStyles:i}=ud(T(()=>{const{variant:r,color:o}=Qi(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const Nl=B({divided:Boolean,...Vr(),...be(),...$r(),...Pr(),...Bn(),...ot(),...rt(),...xl()},"v-btn-group"),sa=Ee()({name:"VBtnGroup",props:Nl(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=It(t),{densityClasses:i}=Br(t),{borderClasses:r}=Or(t),{elevationClasses:o}=Fr(t),{roundedClasses:a}=Un(t);Oh({VBtn:{height:"auto",color:Ve(t,"color"),density:Ve(t,"density"),flat:!0,variant:Ve(t,"variant")}}),_e(()=>p(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,r.value,i.value,o.value,a.value,t.class],style:t.style},n))}}),Id=B({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Sd=B({value:null,disabled:Boolean,selectedClass:String},"group-item");function bd(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=wl("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Hs();El(Symbol.for(`${e.description}:id`),i);const r=Cl(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Ve(t,"value"),a=T(()=>r.disabled.value||t.disabled);r.register({id:i,value:o,disabled:a},s),Fn(()=>{r.unregister(i)});const l=T(()=>r.isSelected(i)),u=T(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return ke(l,c=>{s.emit("group:selected",{value:c})}),{id:i,isSelected:l,toggle:()=>r.select(i,!l.value),select:c=>r.select(i,c),selectedClass:u,value:o,disabled:a,group:r}}function _d(t,e){let n=!1;const s=Fh([]),i=$n(t,"modelValue",[],h=>h==null?[]:Rl(s,pn(h)),h=>{const f=kd(s,h);return t.multiple?f:f[0]}),r=wl("useGroup");function o(h,f){const v=h,m=Symbol.for(`${e.description}:id`),b=Bh(m,r==null?void 0:r.vnode).indexOf(f);b>-1?s.splice(b,0,v):s.push(v)}function a(h){if(n)return;l();const f=s.findIndex(v=>v.id===h);s.splice(f,1)}function l(){const h=s.find(f=>!f.disabled);h&&t.mandatory==="force"&&!i.value.length&&(i.value=[h.id])}Rr(()=>{l()}),Fn(()=>{n=!0});function u(h,f){const v=s.find(m=>m.id===h);if(!(f&&(v!=null&&v.disabled)))if(t.multiple){const m=i.value.slice(),E=m.findIndex(I=>I===h),b=~E;if(f=f??!b,b&&t.mandatory&&m.length<=1||!b&&t.max!=null&&m.length+1>t.max)return;E<0&&f?m.push(h):E>=0&&!f&&m.splice(E,1),i.value=m}else{const m=i.value.includes(h);if(t.mandatory&&m)return;i.value=f??!m?[h]:[]}}function c(h){if(t.multiple&&Uh('This method is not supported when using "multiple" prop'),i.value.length){const f=i.value[0],v=s.findIndex(b=>b.id===f);let m=(v+h)%s.length,E=s[m];for(;E.disabled&&m!==v;)m=(m+h)%s.length,E=s[m];if(E.disabled)return;i.value=[s[m].id]}else{const f=s.find(v=>!v.disabled);f&&(i.value=[f.id])}}const d={register:o,unregister:a,selected:i,select:u,disabled:Ve(t,"disabled"),prev:()=>c(s.length-1),next:()=>c(1),isSelected:h=>i.value.includes(h),selectedClass:T(()=>t.selectedClass),items:T(()=>s),getItemIndex:h=>Ad(s,h)};return El(e,d),d}function Ad(t,e){const n=Rl(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function Rl(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];i.value!=null?e.find(r=>$h(r,i.value))!=null&&n.push(i.id):e.includes(s)&&n.push(i.id)}return n}function kd(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];e.includes(i.id)&&n.push(i.value!=null?i.value:s)}return n}const Ml=Symbol.for("vuetify:v-btn-toggle"),Dd=B({...Nl(),...Id()},"v-btn-toggle");Ee()({name:"VBtnToggle",props:Dd(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:i,prev:r,select:o,selected:a}=_d(t,Ml);return _e(()=>{const[l]=sa.filterProps(t);return p(sa,yn({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n,{isSelected:s,next:i,prev:r,select:o,selected:a})]}})}),{next:i,prev:r,select:o}}});const xd=["x-small","small","default","large","x-large"],Ur=B({size:{type:[String,Number],default:"default"}},"size");function jr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tt();return jh(()=>{let n,s;return Wi(xd,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:le(t.size),height:le(t.size)}),{sizeClasses:n,sizeStyles:s}})}const Nd=B({color:String,start:Boolean,end:Boolean,icon:Ye,...be(),...Ur(),...ot({tag:"i"}),...rt()},"v-icon"),Vt=Ee()({name:"VIcon",props:Nd(),setup(t,e){let{attrs:n,slots:s}=e;const i=Le(),{themeClasses:r}=It(t),{iconData:o}=zh(T(()=>i.value||t.icon)),{sizeClasses:a}=jr(t),{textColorClasses:l,textColorStyles:u}=jt(Ve(t,"color"));return _e(()=>{var d,h;const c=(d=s.default)==null?void 0:d.call(s);return c&&(i.value=(h=c.filter(f=>f.type===qh&&f.children&&typeof f.children=="string")[0])==null?void 0:h.children),p(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[a.value?void 0:{fontSize:le(t.size),height:le(t.size),width:le(t.size)},u.value,t.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[c]})}),{}}});function Ll(t,e){const n=Le(),s=Is(!1);if(Gh){const i=new IntersectionObserver(r=>{t==null||t(r,i),s.value=!!r.find(o=>o.isIntersecting)},e);Fn(()=>{i.disconnect()}),ke(n,(r,o)=>{o&&(i.unobserve(o),s.value=!1),r&&i.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const Rd=B({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...be(),...Ur(),...ot({tag:"div"}),...rt()},"v-progress-circular"),Vl=Ee()({name:"VProgressCircular",props:Rd(),setup(t,e){let{slots:n}=e;const s=20,i=2*Math.PI*s,r=Le(),{themeClasses:o}=It(t),{sizeClasses:a,sizeStyles:l}=jr(t),{textColorClasses:u,textColorStyles:c}=jt(Ve(t,"color")),{textColorClasses:d,textColorStyles:h}=jt(Ve(t,"bgColor")),{intersectionRef:f,isIntersecting:v}=Ll(),{resizeRef:m,contentRect:E}=cd(),b=T(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),I=T(()=>Number(t.width)),A=T(()=>l.value?Number(t.size):E.value?E.value.width:Math.max(I.value,32)),P=T(()=>s/(1-I.value/A.value)*2),L=T(()=>I.value/A.value*P.value),Q=T(()=>le((100-b.value)/100*i));return Hh(()=>{f.value=r.value,m.value=r.value}),_e(()=>p(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":v.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,u.value,t.class],style:[l.value,c.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:b.value},{default:()=>[p("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[p("circle",{class:["v-progress-circular__underlay",d.value],style:h.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":L.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),p("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":L.value,"stroke-dasharray":i,"stroke-dashoffset":Q.value},null)]),n.default&&p("div",{class:"v-progress-circular__content"},[n.default({value:b.value})])]})),{}}});const Xi=Symbol("rippleStop"),Md=80;function ia(t,e){t.style.transform=e,t.style.webkitTransform=e}function Yi(t){return t.constructor.name==="TouchEvent"}function Pl(t){return t.constructor.name==="KeyboardEvent"}const Ld=function(t,e){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!Pl(t)){const h=e.getBoundingClientRect(),f=Yi(t)?t.touches[t.touches.length-1]:t;s=f.clientX-h.left,i=f.clientY-h.top}let r=0,o=.3;(d=e._ripple)!=null&&d.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(i-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,u=n.center?a:`${s-r}px`,c=n.center?l:`${i-r}px`;return{radius:r,scale:o,x:u,y:c,centerX:a,centerY:l}},bs={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:u,centerY:c}=Ld(t,e,n),d=`${r*2}px`;i.className="v-ripple__animation",i.style.width=d,i.style.height=d,e.appendChild(s);const h=window.getComputedStyle(e);h&&h.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),ia(i,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),ia(i,`translate(${u}, ${c}) scale3d(1,1,1)`)},0)},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},i)}};function Ol(t){return typeof t>"u"||!!t}function In(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[Xi])){if(t[Xi]=!0,Yi(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Pl(t),n._ripple.class&&(e.class=n._ripple.class),Yi(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{bs.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Md)}else bs.show(t,n,e)}}function ra(t){t[Xi]=!0}function De(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{De(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),bs.hide(e)}}function Fl(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Sn=!1;function $l(t){!Sn&&(t.keyCode===Zo.enter||t.keyCode===Zo.space)&&(Sn=!0,In(t))}function Bl(t){Sn=!1,De(t)}function Ul(t){Sn&&(Sn=!1,De(t))}function jl(t,e,n){const{value:s,modifiers:i}=e,r=Ol(s);if(r||bs.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=r,t._ripple.centered=i.center,t._ripple.circle=i.circle,Kh(s)&&s.class&&(t._ripple.class=s.class),r&&!n){if(i.stop){t.addEventListener("touchstart",ra,{passive:!0}),t.addEventListener("mousedown",ra);return}t.addEventListener("touchstart",In,{passive:!0}),t.addEventListener("touchend",De,{passive:!0}),t.addEventListener("touchmove",Fl,{passive:!0}),t.addEventListener("touchcancel",De),t.addEventListener("mousedown",In),t.addEventListener("mouseup",De),t.addEventListener("mouseleave",De),t.addEventListener("keydown",$l),t.addEventListener("keyup",Bl),t.addEventListener("blur",Ul),t.addEventListener("dragstart",De,{passive:!0})}else!r&&n&&zl(t)}function zl(t){t.removeEventListener("mousedown",In),t.removeEventListener("touchstart",In),t.removeEventListener("touchend",De),t.removeEventListener("touchmove",Fl),t.removeEventListener("touchcancel",De),t.removeEventListener("mouseup",De),t.removeEventListener("mouseleave",De),t.removeEventListener("keydown",$l),t.removeEventListener("keyup",Bl),t.removeEventListener("dragstart",De),t.removeEventListener("blur",Ul)}function Vd(t,e){jl(t,e,!1)}function Pd(t){delete t._ripple,zl(t)}function Od(t,e){if(e.value===e.oldValue)return;const n=Ol(e.oldValue);jl(t,e,n)}const Fd={mounted:Vd,unmounted:Pd,updated:Od};const oa={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},zr=B({location:String},"location");function qr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Mr();return{locationStyles:T(()=>{if(!t.location)return{};const{side:r,align:o}=md(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(u){return n?n(u):0}const l={};return r!=="center"&&(e?l[oa[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[oa[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const $d=B({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...be(),...zr({location:"top"}),...Bn(),...ot(),...rt()},"v-progress-linear"),Bd=Ee()({name:"VProgressLinear",props:$d(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=$n(t,"modelValue"),{isRtl:i,rtlClasses:r}=Mr(),{themeClasses:o}=It(t),{locationStyles:a}=qr(t),{textColorClasses:l,textColorStyles:u}=jt(t,"color"),{backgroundColorClasses:c,backgroundColorStyles:d}=Ss(T(()=>t.bgColor||t.color)),{backgroundColorClasses:h,backgroundColorStyles:f}=Ss(t,"color"),{roundedClasses:v}=Un(t),{intersectionRef:m,isIntersecting:E}=Ll(),b=T(()=>parseInt(t.max,10)),I=T(()=>parseInt(t.height,10)),A=T(()=>parseFloat(t.bufferValue)/b.value*100),P=T(()=>parseFloat(s.value)/b.value*100),L=T(()=>i.value!==t.reverse),Q=T(()=>t.indeterminate?"fade-transition":"slide-x-transition"),K=T(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function Y(N){if(!m.value)return;const{left:q,right:X,width:U}=m.value.getBoundingClientRect(),J=L.value?U-N.clientX+(X-U):N.clientX-q;s.value=Math.round(J/U*b.value)}return _e(()=>p(t.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&E.value,"v-progress-linear--reverse":L.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},v.value,o.value,r.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?le(I.value):0,"--v-progress-linear-height":le(I.value),...a.value},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:P.value,onClick:t.clickable&&Y},{default:()=>[t.stream&&p("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...u.value,[L.value?"left":"right"]:le(-I.value),borderTop:`${le(I.value/2)} dotted`,opacity:K.value,top:`calc(50% - ${le(I.value/4)})`,width:le(100-A.value,"%"),"--v-progress-linear-stream-to":le(I.value*(L.value?1:-1))}},null),p("div",{class:["v-progress-linear__background",c.value],style:[d.value,{opacity:K.value,width:le(t.stream?A.value:100,"%")}]},null),p(Wh,{name:Q.value},{default:()=>[t.indeterminate?p("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(N=>p("div",{key:N,class:["v-progress-linear__indeterminate",N,h.value],style:f.value},null))]):p("div",{class:["v-progress-linear__determinate",h.value],style:[f.value,{width:le(P.value,"%")}]},null)]}),n.default&&p("div",{class:"v-progress-linear__content"},[n.default({value:P.value,buffer:A.value})])]})),{}}}),ql=B({loading:[Boolean,String]},"loader");function Gl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tt();return{loaderClasses:T(()=>({[`${e}--loading`]:t.loading}))}}function Ud(t,e){var s;let{slots:n}=e;return p("div",{class:`${t.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:t.color,isActive:t.active}))||p(Bd,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const jd=["static","relative","fixed","absolute","sticky"],Hl=B({position:{type:String,validator:t=>jd.includes(t)}},"position");function Kl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tt();return{positionClasses:T(()=>t.position?`${e}--${t.position}`:void 0)}}function zd(t,e){const n=Qh("RouterLink"),s=T(()=>!!(t.href||t.to)),i=T(()=>(s==null?void 0:s.value)||ea(e,"click")||ea(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:Ve(t,"href")};const r=t.to?n.useLink(t):void 0;return{isLink:s,isClickable:i,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&T(()=>{var o,a;return t.exact?(o=r.isExactActive)==null?void 0:o.value:(a=r.isActive)==null?void 0:a.value}),href:T(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const qd=B({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Gd(t,e){ke(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&ys(()=>{e(!0)})},{immediate:!0})}const Hd=B({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ml},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ye,appendIcon:Ye,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...Vr(),...be(),...$r(),...bl(),...Pr(),...Sd(),...ql(),...zr(),...Hl(),...Bn(),...qd(),...Ur(),...ot({tag:"button"}),...rt(),...xl({variant:"elevated"})},"v-btn"),ki=Ee()({name:"VBtn",directives:{Ripple:Fd},props:Hd(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=It(t),{borderClasses:r}=Or(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Td(t),{densityClasses:u}=Br(t),{dimensionStyles:c}=_l(t),{elevationClasses:d}=Fr(t),{loaderClasses:h}=Gl(t),{locationStyles:f}=qr(t),{positionClasses:v}=Kl(t),{roundedClasses:m}=Un(t),{sizeClasses:E,sizeStyles:b}=jr(t),I=bd(t,t.symbol,!1),A=zd(t,n),P=T(()=>{var N;return t.active!==void 0?t.active:A.isLink.value?(N=A.isActive)==null?void 0:N.value:I==null?void 0:I.isSelected.value}),L=T(()=>(I==null?void 0:I.disabled.value)||t.disabled),Q=T(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),K=T(()=>{if(t.value!==void 0)return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function Y(N){var q;L.value||((q=A.navigate)==null||q.call(A,N),I==null||I.toggle())}return Gd(A,I==null?void 0:I.select),_e(()=>{var ae,Te;const N=A.isLink.value?"a":t.tag,q=!!(t.prependIcon||s.prepend),X=!!(t.appendIcon||s.append),U=!!(t.icon&&t.icon!==!0),J=(I==null?void 0:I.isSelected.value)&&(!A.isLink.value||((ae=A.isActive)==null?void 0:ae.value))||!I||((Te=A.isActive)==null?void 0:Te.value);return Tn(p(N,{type:N==="a"?void 0:"button",class:["v-btn",I==null?void 0:I.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":t.block,"v-btn--disabled":L.value,"v-btn--elevated":Q.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},i.value,r.value,J?o.value:void 0,u.value,d.value,h.value,v.value,m.value,E.value,l.value,t.class],style:[J?a.value:void 0,c.value,f.value,b.value,t.style],disabled:L.value||void 0,href:A.href.value,onClick:Y,value:K.value},{default:()=>{var ne;return[Cd(!0,"v-btn"),!t.icon&&q&&p("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?p(_i,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},s.prepend):p(Vt,{key:"prepend-icon",icon:t.prependIcon},null)]),p("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&U?p(Vt,{key:"content-icon",icon:t.icon},null):p(_i,{key:"content-defaults",disabled:!U,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var Ae;return[((Ae=s.default)==null?void 0:Ae.call(s))??t.text]}})]),!t.icon&&X&&p("span",{key:"append",class:"v-btn__append"},[s.append?p(_i,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},s.append):p(Vt,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&p("span",{key:"loader",class:"v-btn__loader"},[((ne=s.loader)==null?void 0:ne.call(s))??p(Vl,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Tl("ripple"),!L.value&&t.ripple,null]])}),{}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ql={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),s.push(n[c],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new Wd;const h=r<<2|a>>4;if(s.push(h),u!==64){const f=a<<4&240|u>>2;if(s.push(f),d!==64){const v=u<<6&192|d;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qd=function(t){const e=Wl(t);return Ql.encodeByteArray(e,!0)},_s=function(t){return Qd(t).replace(/\./g,"")},Xd=function(t){try{return Ql.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=()=>Yd().__FIREBASE_DEFAULTS__,Zd=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ef=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xd(t[1]);return e&&JSON.parse(e)},Xl=()=>{try{return Jd()||Zd()||ef()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tf=t=>{var e,n;return(n=(e=Xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nf=t=>{const e=tf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sf=()=>{var t;return(t=Xl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_s(JSON.stringify(n)),_s(JSON.stringify(o)),a].join(".")}function af(){try{return typeof indexedDB=="object"}catch{return!1}}function lf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="FirebaseError";class Jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uf,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yl.prototype.create)}}class Yl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?cf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,s)}}function cf(t,e){return t.replace(hf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hf=/\{\$([^}]+)}/g;function Ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(aa(r)&&aa(o)){if(!Ji(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function aa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gf(e))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dt){return this.instances.has(e)}getOptions(e=dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ff(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dt){return this.component?this.component.multipleInstances?e:dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ff(t){return t===dt?void 0:t}function gf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new df(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const pf={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},yf=F.INFO,vf={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},wf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=vf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=yf,this._logHandler=wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Ef=(t,e)=>e.some(n=>t instanceof n);let la,ua;function Cf(){return la||(la=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tf(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zl=new WeakMap,Zi=new WeakMap,eu=new WeakMap,Di=new WeakMap,Gr=new WeakMap;function If(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Je(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zl.set(n,t)}).catch(()=>{}),Gr.set(e,t),e}function Sf(t){if(Zi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zi.set(t,e)}let er={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bf(t){er=t(er)}function _f(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xi(this),e,...n);return eu.set(s,e.sort?e.sort():[e]),Je(s)}:Tf().includes(t)?function(...e){return t.apply(xi(this),e),Je(Zl.get(this))}:function(...e){return Je(t.apply(xi(this),e))}}function Af(t){return typeof t=="function"?_f(t):(t instanceof IDBTransaction&&Sf(t),Ef(t,Cf())?new Proxy(t,er):t)}function Je(t){if(t instanceof IDBRequest)return If(t);if(Di.has(t))return Di.get(t);const e=Af(t);return e!==t&&(Di.set(t,e),Gr.set(e,t)),e}const xi=t=>Gr.get(t);function kf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Je(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Je(o.result),l.oldVersion,l.newVersion,Je(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Df=["get","getKey","getAll","getAllKeys","count"],xf=["put","add","delete","clear"],Ni=new Map;function ca(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ni.get(e))return Ni.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Df.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ni.set(e,r),r}bf(t=>({...t,get:(e,n,s)=>ca(e,n)||t.get(e,n,s),has:(e,n)=>!!ca(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tr="@firebase/app",ha="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Jl("@firebase/app"),Mf="@firebase/app-compat",Lf="@firebase/analytics-compat",Vf="@firebase/analytics",Pf="@firebase/app-check-compat",Of="@firebase/app-check",Ff="@firebase/auth",$f="@firebase/auth-compat",Bf="@firebase/database",Uf="@firebase/database-compat",jf="@firebase/functions",zf="@firebase/functions-compat",qf="@firebase/installations",Gf="@firebase/installations-compat",Hf="@firebase/messaging",Kf="@firebase/messaging-compat",Wf="@firebase/performance",Qf="@firebase/performance-compat",Xf="@firebase/remote-config",Yf="@firebase/remote-config-compat",Jf="@firebase/storage",Zf="@firebase/storage-compat",eg="@firebase/firestore",tg="@firebase/firestore-compat",ng="firebase",sg="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]",ig={[tr]:"fire-core",[Mf]:"fire-core-compat",[Vf]:"fire-analytics",[Lf]:"fire-analytics-compat",[Of]:"fire-app-check",[Pf]:"fire-app-check-compat",[Ff]:"fire-auth",[$f]:"fire-auth-compat",[Bf]:"fire-rtdb",[Uf]:"fire-rtdb-compat",[jf]:"fire-fn",[zf]:"fire-fn-compat",[qf]:"fire-iid",[Gf]:"fire-iid-compat",[Hf]:"fire-fcm",[Kf]:"fire-fcm-compat",[Wf]:"fire-perf",[Qf]:"fire-perf-compat",[Xf]:"fire-rc",[Yf]:"fire-rc-compat",[Jf]:"fire-gcs",[Zf]:"fire-gcs-compat",[eg]:"fire-fst",[tg]:"fire-fst-compat","fire-js":"fire-js",[ng]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Map,sr=new Map;function rg(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(sr.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;sr.set(e,t);for(const n of As.values())rg(n,t);return!0}function og(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ze=new Yl("app","Firebase",ag);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=sg;function tu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(n||(n=sf()),!n)throw Ze.create("no-options");const r=As.get(i);if(r){if(Ji(n,r.options)&&Ji(s,r.config))return r;throw Ze.create("duplicate-app",{appName:i})}const o=new mf(i);for(const l of sr.values())o.addComponent(l);const a=new lg(n,s,o);return As.set(i,a),a}function cg(t=nr){const e=As.get(t);if(!e&&t===nr)return tu();if(!e)throw Ze.create("no-app",{appName:t});return e}function Pt(t,e,n){var s;let i=(s=ig[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(a.join(" "));return}ks(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="firebase-heartbeat-database",dg=1,_n="firebase-heartbeat-store";let Ri=null;function nu(){return Ri||(Ri=kf(hg,dg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_n)}}}).catch(t=>{throw Ze.create("idb-open",{originalErrorMessage:t.message})})),Ri}async function fg(t){try{return(await nu()).transaction(_n).objectStore(_n).get(su(t))}catch(e){if(e instanceof Jt)vt.warn(e.message);else{const n=Ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(n.message)}}}async function da(t,e){try{const s=(await nu()).transaction(_n,"readwrite");return await s.objectStore(_n).put(e,su(t)),s.done}catch(n){if(n instanceof Jt)vt.warn(n.message);else{const s=Ze.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vt.warn(s.message)}}}function su(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=1024,mg=30*24*60*60*1e3;class pg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=mg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fa(),{heartbeatsToSend:n,unsentEntries:s}=yg(this._heartbeatsCache.heartbeats),i=_s(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fa(){return new Date().toISOString().substring(0,10)}function yg(t,e=gg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ga(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ga(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return af()?lf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return da(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return da(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ga(t){return _s(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){ks(new bn("platform-logger",e=>new Nf(e),"PRIVATE")),ks(new bn("heartbeat",e=>new pg(e),"PRIVATE")),Pt(tr,ha,t),Pt(tr,ha,"esm2017"),Pt("fire-js","")}wg("");var Eg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Hr=Hr||{},D=Eg||self;function Ds(){}function Ws(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Cg(t){return Object.prototype.hasOwnProperty.call(t,Mi)&&t[Mi]||(t[Mi]=++Tg)}var Mi="closure_uid_"+(1e9*Math.random()>>>0),Tg=0;function Ig(t,e,n){return t.call.apply(t.bind,arguments)}function Sg(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pe=Ig:pe=Sg,pe.apply(null,arguments)}function os(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function oe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function at(){this.s=this.s,this.o=this.o}var bg=0;at.prototype.s=!1;at.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),bg!=0)&&Cg(this)};at.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const iu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Kr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ma(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ws(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var _g=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{D.addEventListener("test",Ds,e),D.removeEventListener("test",Ds,e)}catch{}return t}();function xs(t){return/^[\s\xa0]*$/.test(t)}var pa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Li(t,e){return t<e?-1:t>e?1:0}function Qs(){var t=D.navigator;return t&&(t=t.userAgent)?t:""}function $e(t){return Qs().indexOf(t)!=-1}function Wr(t){return Wr[" "](t),t}Wr[" "]=Ds;function ru(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var Ag=$e("Opera"),zt=$e("Trident")||$e("MSIE"),ou=$e("Edge"),ir=ou||zt,au=$e("Gecko")&&!(Qs().toLowerCase().indexOf("webkit")!=-1&&!$e("Edge"))&&!($e("Trident")||$e("MSIE"))&&!$e("Edge"),kg=Qs().toLowerCase().indexOf("webkit")!=-1&&!$e("Edge");function lu(){var t=D.document;return t?t.documentMode:void 0}var Ns;e:{var Vi="",Pi=function(){var t=Qs();if(au)return/rv:([^\);]+)(\)|;)/.exec(t);if(ou)return/Edge\/([\d\.]+)/.exec(t);if(zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kg)return/WebKit\/(\S+)/.exec(t);if(Ag)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pi&&(Vi=Pi?Pi[1]:""),zt){var Oi=lu();if(Oi!=null&&Oi>parseFloat(Vi)){Ns=String(Oi);break e}}Ns=Vi}var Dg={};function xg(){return ru(Dg,9,function(){let t=0;const e=pa(String(Ns)).split("."),n=pa("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Li(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Li(i[2].length==0,r[2].length==0)||Li(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var rr;if(D.document&&zt){var ya=lu();rr=ya||parseInt(Ns,10)||void 0}else rr=void 0;var Ng=rr;function An(t,e){if(ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(au){e:{try{Wr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Rg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&An.$.h.call(this)}}oe(An,ye);var Rg={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zn="closure_listenable_"+(1e6*Math.random()|0),Mg=0;function Lg(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++Mg,this.fa=this.ia=!1}function Xs(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Qr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function uu(t){const e={};for(const n in t)e[n]=t[n];return e}const va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<va.length;r++)n=va[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ys(t){this.src=t,this.g={},this.h=0}Ys.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ar(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Lg(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function or(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=iu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Xs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ar(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Xr="closure_lm_"+(1e6*Math.random()|0),Fi={};function hu(t,e,n,s,i){if(s&&s.once)return fu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)hu(t,e[r],n,s,i);return null}return n=Zr(n),t&&t[zn]?t.O(e,n,jn(s)?!!s.capture:!!s,i):du(t,e,n,!1,s,i)}function du(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=jn(i)?!!i.capture:!!i,a=Jr(t);if(a||(t[Xr]=a=new Ys(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Vg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)_g||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(mu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Vg(){function t(n){return e.call(t.src,t.listener,n)}const e=Pg;return t}function fu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)fu(t,e[r],n,s,i);return null}return n=Zr(n),t&&t[zn]?t.P(e,n,jn(s)?!!s.capture:!!s,i):du(t,e,n,!0,s,i)}function gu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)gu(t,e[r],n,s,i);else s=jn(s)?!!s.capture:!!s,n=Zr(n),t&&t[zn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ar(r,n,s,i),-1<n&&(Xs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ar(e,n,s,i)),(n=-1<t?e[t]:null)&&Yr(n))}function Yr(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[zn])or(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(mu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Jr(e))?(or(n,t),n.h==0&&(n.src=null,e[Xr]=null)):Xs(t)}}}function mu(t){return t in Fi?Fi[t]:Fi[t]="on"+t}function Pg(t,e){if(t.fa)t=!0;else{e=new An(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Yr(t),t=n.call(s,e)}return t}function Jr(t){return t=t[Xr],t instanceof Ys?t:null}var $i="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zr(t){return typeof t=="function"?t:(t[$i]||(t[$i]=function(e){return t.handleEvent(e)}),t[$i])}function re(){at.call(this),this.i=new Ys(this),this.S=this,this.J=null}oe(re,at);re.prototype[zn]=!0;re.prototype.removeEventListener=function(t,e,n,s){gu(this,t,e,n,s)};function he(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ye(e,t);else if(e instanceof ye)e.target=e.target||t;else{var i=e;e=new ye(s,t),cu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=as(o,s,!0,e)&&i}if(o=e.g=t,i=as(o,s,!0,e)&&i,i=as(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=as(o,s,!1,e)&&i}re.prototype.N=function(){if(re.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Xs(n[s]);delete t.g[e],t.h--}}this.J=null};re.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};re.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function as(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&or(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var eo=D.JSON.stringify;function Og(){var t=vu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Fg{constructor(){this.h=this.g=null}add(e,n){const s=pu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var pu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $g,t=>t.reset());class $g{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Bg(t){D.setTimeout(()=>{throw t},0)}function yu(t,e){lr||Ug(),ur||(lr(),ur=!0),vu.add(t,e)}var lr;function Ug(){var t=D.Promise.resolve(void 0);lr=function(){t.then(jg)}}var ur=!1,vu=new Fg;function jg(){for(var t;t=Og();){try{t.h.call(t.g)}catch(n){Bg(n)}var e=pu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ur=!1}function Js(t,e){re.call(this),this.h=t||1,this.g=e||D,this.j=pe(this.qb,this),this.l=Date.now()}oe(Js,re);w=Js.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),he(this,"tick"),this.ga&&(to(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function to(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}w.N=function(){Js.$.N.call(this),to(this),delete this.g};function no(t,e,n){if(typeof t=="function")n&&(t=pe(t,n));else if(t&&typeof t.handleEvent=="function")t=pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:D.setTimeout(t,e||0)}function wu(t){t.g=no(()=>{t.g=null,t.i&&(t.i=!1,wu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zg extends at{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wu(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kn(t){at.call(this),this.h=t,this.g={}}oe(kn,at);var wa=[];function Eu(t,e,n,s){Array.isArray(n)||(n&&(wa[0]=n.toString()),n=wa);for(var i=0;i<n.length;i++){var r=hu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Cu(t){Qr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yr(e)},t),t.g={}}kn.prototype.N=function(){kn.$.N.call(this),Cu(this)};kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zs(){this.g=!0}Zs.prototype.Ea=function(){this.g=!1};function qg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Gg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Rt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Kg(t,n)+(s?" "+s:"")})}function Hg(t,e){t.info(function(){return"TIMEOUT: "+e})}Zs.prototype.info=function(){};function Kg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return eo(n)}catch{return e}}var St={},Ea=null;function ei(){return Ea=Ea||new re}St.Ta="serverreachability";function Tu(t){ye.call(this,St.Ta,t)}oe(Tu,ye);function Dn(t){const e=ei();he(e,new Tu(e))}St.STAT_EVENT="statevent";function Iu(t,e){ye.call(this,St.STAT_EVENT,t),this.stat=e}oe(Iu,ye);function Ce(t){const e=ei();he(e,new Iu(e,t))}St.Ua="timingevent";function Su(t,e){ye.call(this,St.Ua,t),this.size=e}oe(Su,ye);function qn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){t()},e)}var ti={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function so(){}so.prototype.h=null;function Ca(t){return t.h||(t.h=t.i())}function _u(){}var Gn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function io(){ye.call(this,"d")}oe(io,ye);function ro(){ye.call(this,"c")}oe(ro,ye);var cr;function ni(){}oe(ni,so);ni.prototype.g=function(){return new XMLHttpRequest};ni.prototype.i=function(){return{}};cr=new ni;function Hn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new kn(this),this.P=Wg,t=ir?125:void 0,this.V=new Js(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var Wg=45e3,hr={},Rs={};w=Hn.prototype;w.setTimeout=function(t){this.P=t};function dr(t,e,n){t.L=1,t.v=ii(He(e)),t.s=n,t.S=!0,ku(t,null)}function ku(t,e){t.G=Date.now(),Kn(t),t.A=He(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Pu(n.i,"t",s),t.C=0,n=t.l.I,t.h=new Au,t.g=sc(t.l,n?e:null,!t.s),0<t.O&&(t.M=new zg(pe(t.Pa,t,t.g),t.O)),Eu(t.U,t.g,"readystatechange",t.nb),e=t.I?uu(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Dn(),qg(t.j,t.u,t.A,t.m,t.W,t.s)}w.nb=function(t){t=t.target;const e=this.M;e&&qe(t)==3?e.l():this.Pa(t)};w.Pa=function(t){try{if(t==this.g)e:{const c=qe(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||ir||this.g&&(this.h.h||this.g.ja()||ba(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Dn(3):Dn(2)),si(this);var n=this.g.da();this.aa=n;t:if(Du(this)){var s=ba(this.g);t="";var i=s.length,r=qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ft(this),vn(this);var o="";break t}this.h.i=new D.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Gg(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xs(a)){var u=a;break t}}u=null}if(n=u)Rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fr(this,n);else{this.i=!1,this.o=3,Ce(12),ft(this),vn(this);break e}}this.S?(xu(this,c,o),ir&&this.i&&c==3&&(Eu(this.U,this.V,"tick",this.mb),this.V.start())):(Rt(this.j,this.m,o,null),fr(this,o)),c==4&&ft(this),this.i&&!this.J&&(c==4?Zu(this.l,this):(this.i=!1,Kn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ce(12)):(this.o=0,Ce(13)),ft(this),vn(this)}}}catch{}finally{}};function Du(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function xu(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=Qg(t,n),i==Rs){e==4&&(t.o=4,Ce(14),s=!1),Rt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hr){t.o=4,Ce(15),Rt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Rt(t.j,t.m,i,null),fr(t,i);Du(t)&&i!=Rs&&i!=hr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ce(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),fo(e),e.L=!0,Ce(11))):(Rt(t.j,t.m,n,"[Invalid Chunked Response]"),ft(t),vn(t))}w.mb=function(){if(this.g){var t=qe(this.g),e=this.g.ja();this.C<e.length&&(si(this),xu(this,t,e),this.i&&t!=4&&Kn(this))}};function Qg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Rs:(n=Number(e.substring(n,s)),isNaN(n)?hr:(s+=1,s+n>e.length?Rs:(e=e.substr(s,n),t.C=s+n,e)))}w.cancel=function(){this.J=!0,ft(this)};function Kn(t){t.Y=Date.now()+t.P,Nu(t,t.P)}function Nu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qn(pe(t.lb,t),e)}function si(t){t.B&&(D.clearTimeout(t.B),t.B=null)}w.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Hg(this.j,this.A),this.L!=2&&(Dn(),Ce(17)),ft(this),this.o=2,vn(this)):Nu(this,this.Y-t)};function vn(t){t.l.H==0||t.J||Zu(t.l,t)}function ft(t){si(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,to(t.V),Cu(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function fr(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gr(n.h,t))){if(!t.K&&gr(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Vs(n),ai(n);else break e;ho(n),Ce(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=qn(pe(n.ib,n),6e3));if(1>=$u(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else gt(n,11)}else if((t.K||n.g==t)&&Vs(n),!xs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const d=u[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(oo(r,r.h),r.h=null))}if(s.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,G(s.G,s.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=nc(s,s.I?s.oa:null,s.Y),o.K){Bu(s.h,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(si(a),Kn(a)),s.g=o}else Yu(s);0<n.i.length&&li(n)}else u[0]!="stop"&&u[0]!="close"||gt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gt(n,7):co(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Dn(4)}catch{}}function Xg(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ws(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Yg(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ws(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ru(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ws(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Yg(t),s=Xg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function pt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof pt){this.h=e!==void 0?e:t.h,Ms(this,t.j),this.s=t.s,this.g=t.g,Ls(this,t.m),this.l=t.l,e=t.i;var n=new xn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ta(this,n),this.o=t.o}else t&&(n=String(t).match(Mu))?(this.h=!!e,Ms(this,n[1]||"",!0),this.s=hn(n[2]||""),this.g=hn(n[3]||"",!0),Ls(this,n[4]),this.l=hn(n[5]||"",!0),Ta(this,n[6]||"",!0),this.o=hn(n[7]||"")):(this.h=!!e,this.i=new xn(null,this.h))}pt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(dn(e,Ia,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(dn(e,Ia,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(dn(n,n.charAt(0)=="/"?tm:em,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",dn(n,sm)),t.join("")};function He(t){return new pt(t)}function Ms(t,e,n){t.j=n?hn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ls(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ta(t,e,n){e instanceof xn?(t.i=e,im(t.i,t.h)):(n||(e=dn(e,nm)),t.i=new xn(e,t.h))}function G(t,e,n){t.i.set(e,n)}function ii(t){return G(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Zg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ia=/[#\/\?@]/g,em=/[#\?:]/g,tm=/[#\?]/g,nm=/[#\?@]/g,sm=/#/g;function xn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lt(t){t.g||(t.g=new Map,t.h=0,t.i&&Jg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}w=xn.prototype;w.add=function(t,e){lt(this),this.i=null,t=Zt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lu(t,e){lt(t),e=Zt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Vu(t,e){return lt(t),e=Zt(t,e),t.g.has(e)}w.forEach=function(t,e){lt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};w.sa=function(){lt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};w.Z=function(t){lt(this);let e=[];if(typeof t=="string")Vu(this,t)&&(e=e.concat(this.g.get(Zt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};w.set=function(t,e){return lt(this),this.i=null,t=Zt(this,t),Vu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};w.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Pu(t,e,n){Lu(t,e),0<n.length&&(t.i=null,t.g.set(Zt(t,e),Kr(n)),t.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Zt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function im(t,e){e&&!t.j&&(lt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Lu(this,s),Pu(this,i,n))},t)),t.j=e}var rm=class{constructor(t,e){this.h=t,this.g=e}};function Ou(t){this.l=t||om,D.PerformanceNavigationTiming?(t=D.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var om=10;function Fu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $u(t){return t.h?1:t.g?t.g.size:0}function gr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function oo(t,e){t.g?t.g.add(e):t.h=e}function Bu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ou.prototype.cancel=function(){if(this.i=Uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Uu(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Kr(t.i)}function ao(){}ao.prototype.stringify=function(t){return D.JSON.stringify(t,void 0)};ao.prototype.parse=function(t){return D.JSON.parse(t,void 0)};function am(){this.g=new ao}function lm(t,e,n){const s=n||"";try{Ru(t,function(i,r){let o=i;jn(i)&&(o=eo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function um(t,e){const n=new Zs;if(D.Image){const s=new Image;s.onload=os(ls,n,s,"TestLoadImage: loaded",!0,e),s.onerror=os(ls,n,s,"TestLoadImage: error",!1,e),s.onabort=os(ls,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=os(ls,n,s,"TestLoadImage: timeout",!1,e),D.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ls(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Wn(t){this.l=t.fc||null,this.j=t.ob||!1}oe(Wn,so);Wn.prototype.g=function(){return new ri(this.l,this.j)};Wn.prototype.i=function(t){return function(){return t}}({});function ri(t,e){re.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(ri,re);var lo=0;w=ri.prototype;w.open=function(t,e){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nn(this)};w.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||D).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=lo};w.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ju(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ju(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}w.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qn(this):Nn(this),this.readyState==3&&ju(this)}};w.Za=function(t){this.g&&(this.response=this.responseText=t,Qn(this))};w.Ya=function(t){this.g&&(this.response=t,Qn(this))};w.ka=function(){this.g&&Qn(this)};function Qn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nn(t)}w.setRequestHeader=function(t,e){this.v.append(t,e)};w.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Nn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var cm=D.JSON.parse;function W(t){re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=zu,this.L=this.M=!1}oe(W,re);var zu="",hm=/^https?$/i,dm=["POST","PUT"];w=W.prototype;w.Oa=function(t){this.M=t};w.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cr.g(),this.C=this.u?Ca(this.u):Ca(cr),this.g.onreadystatechange=pe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Sa(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=D.FormData&&t instanceof D.FormData,!(0<=iu(dm,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hu(this),0<this.B&&((this.L=fm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pe(this.ua,this)):this.A=no(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Sa(this,r)}};function fm(t){return zt&&xg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}w.ua=function(){typeof Hr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function Sa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qu(t),oi(t)}function qu(t){t.F||(t.F=!0,he(t,"complete"),he(t,"error"))}w.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,he(this,"complete"),he(this,"abort"),oi(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oi(this,!0)),W.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?Gu(this):this.kb())};w.kb=function(){Gu(this)};function Gu(t){if(t.h&&typeof Hr<"u"&&(!t.C[1]||qe(t)!=4||t.da()!=2)){if(t.v&&qe(t)==4)no(t.La,0,t);else if(he(t,"readystatechange"),qe(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.I).match(Mu)[1]||null;if(!i&&D.self&&D.self.location){var r=D.self.location.protocol;i=r.substr(0,r.length-1)}s=!hm.test(i?i.toLowerCase():"")}n=s}if(n)he(t,"complete"),he(t,"success");else{t.m=6;try{var o=2<qe(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",qu(t)}}finally{oi(t)}}}}function oi(t,e){if(t.g){Hu(t);const n=t.g,s=t.C[0]?Ds:null;t.g=null,t.C=null,e||he(t,"ready");try{n.onreadystatechange=s}catch{}}}function Hu(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(D.clearTimeout(t.A),t.A=null)}function qe(t){return t.g?t.g.readyState:0}w.da=function(){try{return 2<qe(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),cm(e)}};function ba(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case zu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ku(t){let e="";return Qr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function uo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ku(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):G(t,e,n))}function an(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wu(t){this.Ga=0,this.i=[],this.j=new Zs,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=an("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=an("baseRetryDelayMs",5e3,t),this.hb=an("retryDelaySeedMs",1e4,t),this.eb=an("forwardChannelMaxRetries",2,t),this.xa=an("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Ou(t&&t.concurrentRequestLimit),this.Ja=new am,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}w=Wu.prototype;w.qa=8;w.H=1;function co(t){if(Qu(t),t.H==3){var e=t.W++,n=He(t.G);G(n,"SID",t.J),G(n,"RID",e),G(n,"TYPE","terminate"),Xn(t,n),e=new Hn(t,t.j,e,void 0),e.L=2,e.v=ii(He(n)),n=!1,D.navigator&&D.navigator.sendBeacon&&(n=D.navigator.sendBeacon(e.v.toString(),"")),!n&&D.Image&&(new Image().src=e.v,n=!0),n||(e.g=sc(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Kn(e)}tc(t)}function ai(t){t.g&&(fo(t),t.g.cancel(),t.g=null)}function Qu(t){ai(t),t.u&&(D.clearTimeout(t.u),t.u=null),Vs(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&D.clearTimeout(t.m),t.m=null)}function li(t){Fu(t.h)||t.m||(t.m=!0,yu(t.Na,t),t.C=0)}function gm(t,e){return $u(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=qn(pe(t.Na,t,e),ec(t,t.C)),t.C++,!0)}w.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Hn(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=uu(r),cu(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xu(this,i,e),n=He(this.G),G(n,"RID",t),G(n,"CVER",22),this.F&&G(n,"X-HTTP-Session-Id",this.F),Xn(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Ku(r)))+"&"+e:this.o&&uo(n,this.o,r)),oo(this.h,i),this.bb&&G(n,"TYPE","init"),this.P?(G(n,"$req",e),G(n,"SID","null"),i.ba=!0,dr(i,n,null)):dr(i,n,e),this.H=2}}else this.H==3&&(t?_a(this,t):this.i.length==0||Fu(this.h)||_a(this))};function _a(t,e){var n;e?n=e.m:n=t.W++;const s=He(t.G);G(s,"SID",t.J),G(s,"RID",n),G(s,"AID",t.V),Xn(t,s),t.o&&t.s&&uo(s,t.o,t.s),n=new Hn(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Xu(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),oo(t.h,n),dr(n,s,e)}function Xn(t,e){t.ma&&Qr(t.ma,function(n,s){G(e,s,n)}),t.l&&Ru({},function(n,s){G(e,s,n)})}function Xu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?pe(t.l.Va,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=r,0>u)r=Math.max(0,i[l].h-100),a=!1;else try{lm(c,o,"req"+u+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Yu(t){t.g||t.u||(t.ba=1,yu(t.Ma,t),t.A=0)}function ho(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=qn(pe(t.Ma,t),ec(t,t.A)),t.A++,!0)}w.Ma=function(){if(this.u=null,Ju(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=qn(pe(this.jb,this),t)}};w.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ce(10),ai(this),Ju(this))};function fo(t){t.B!=null&&(D.clearTimeout(t.B),t.B=null)}function Ju(t){t.g=new Hn(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=He(t.wa);G(e,"RID","rpc"),G(e,"SID",t.J),G(e,"CI",t.M?"0":"1"),G(e,"AID",t.V),G(e,"TYPE","xmlhttp"),Xn(t,e),t.o&&t.s&&uo(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ii(He(e)),n.s=null,n.S=!0,ku(n,t)}w.ib=function(){this.v!=null&&(this.v=null,ai(this),ho(this),Ce(19))};function Vs(t){t.v!=null&&(D.clearTimeout(t.v),t.v=null)}function Zu(t,e){var n=null;if(t.g==e){Vs(t),fo(t),t.g=null;var s=2}else if(gr(t.h,e))n=e.F,Bu(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=ei(),he(s,new Su(s,n)),li(t)}else Yu(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(s==1&&gm(t,e)||s==2&&ho(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:gt(t,5);break;case 4:gt(t,10);break;case 3:gt(t,6);break;default:gt(t,2)}}}function ec(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function gt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=pe(t.pb,t);n||(n=new pt("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Ms(n,"https"),ii(n)),um(n.toString(),s)}else Ce(2);t.H=0,t.l&&t.l.za(e),tc(t),Qu(t)}w.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function tc(t){if(t.H=0,t.pa=[],t.l){const e=Uu(t.h);(e.length!=0||t.i.length!=0)&&(ma(t.pa,e),ma(t.pa,t.i),t.h.i.length=0,Kr(t.i),t.i.length=0),t.l.ya()}}function nc(t,e,n){var s=n instanceof pt?He(n):new pt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ls(s,s.m);else{var i=D.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new pt(null,void 0);s&&Ms(r,s),e&&(r.g=e),i&&Ls(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&G(s,n,e),G(s,"VER",t.qa),Xn(t,s),s}function sc(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new W(new Wn({ob:!0})):new W(t.va),e.Oa(t.I),e}function ic(){}w=ic.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.Va=function(){};function Ps(){if(zt&&!(10<=Number(Ng)))throw Error("Environmental error: no available transport.")}Ps.prototype.g=function(t,e){return new Ne(t,e)};function Ne(t,e){re.call(this),this.g=new Wu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!xs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new en(this)}oe(Ne,re);Ne.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Ce(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=nc(t,null,t.Y),li(t)};Ne.prototype.close=function(){co(this.g)};Ne.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=eo(t),t=n);e.i.push(new rm(e.fb++,t)),e.H==3&&li(e)};Ne.prototype.N=function(){this.g.l=null,delete this.j,co(this.g),delete this.g,Ne.$.N.call(this)};function rc(t){io.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}oe(rc,io);function oc(){ro.call(this),this.status=1}oe(oc,ro);function en(t){this.g=t}oe(en,ic);en.prototype.Ba=function(){he(this.g,"a")};en.prototype.Aa=function(t){he(this.g,new rc(t))};en.prototype.za=function(t){he(this.g,new oc)};en.prototype.ya=function(){he(this.g,"b")};function mm(){this.blockSize=-1}function Oe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(Oe,mm);Oe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bi(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}Oe.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Bi(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Bi(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Bi(this,s),i=0;break}}this.h=i,this.i+=e};Oe.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function $(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var pm={};function go(t){return-128<=t&&128>t?ru(pm,t,function(e){return new $([e|0],0>e?-1:0)}):new $([t|0],0>t?-1:0)}function Be(t){if(isNaN(t)||!isFinite(t))return Ot;if(0>t)return ce(Be(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=mr;return new $(e,0)}function ac(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ce(ac(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Be(Math.pow(e,8)),s=Ot,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Be(Math.pow(e,r)),s=s.R(r).add(Be(o))):(s=s.R(n),s=s.add(Be(o)))}return s}var mr=4294967296,Ot=go(0),pr=go(1),Aa=go(16777216);w=$.prototype;w.ea=function(){if(Re(this))return-ce(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:mr+s)*e,e*=mr}return t};w.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ge(this))return"0";if(Re(this))return"-"+ce(this).toString(t);for(var e=Be(Math.pow(t,6)),n=this,s="";;){var i=Fs(n,e).g;n=Os(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ge(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};w.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ge(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Re(t){return t.h==-1}w.X=function(t){return t=Os(this,t),Re(t)?-1:Ge(t)?0:1};function ce(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new $(n,~t.h).add(pr)}w.abs=function(){return Re(this)?ce(this):this};w.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new $(n,n[n.length-1]&-2147483648?-1:0)};function Os(t,e){return t.add(ce(e))}w.R=function(t){if(Ge(this)||Ge(t))return Ot;if(Re(this))return Re(t)?ce(this).R(ce(t)):ce(ce(this).R(t));if(Re(t))return ce(this.R(ce(t)));if(0>this.X(Aa)&&0>t.X(Aa))return Be(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,us(n,2*s+2*i),n[2*s+2*i+1]+=r*l,us(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,us(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,us(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new $(n,0)};function us(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ln(t,e){this.g=t,this.h=e}function Fs(t,e){if(Ge(e))throw Error("division by zero");if(Ge(t))return new ln(Ot,Ot);if(Re(t))return e=Fs(ce(t),e),new ln(ce(e.g),ce(e.h));if(Re(e))return e=Fs(t,ce(e)),new ln(ce(e.g),e.h);if(30<t.g.length){if(Re(t)||Re(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pr,s=e;0>=s.X(t);)n=ka(n),s=ka(s);var i=Dt(n,1),r=Dt(s,1);for(s=Dt(s,2),n=Dt(n,2);!Ge(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Dt(s,1),n=Dt(n,1)}return e=Os(t,i.R(e)),new ln(i,e)}for(i=Ot;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Be(n),o=r.R(e);Re(o)||0<o.X(t);)n-=s,r=Be(n),o=r.R(e);Ge(r)&&(r=pr),i=i.add(r),t=Os(t,o)}return new ln(i,t)}w.gb=function(t){return Fs(this,t).h};w.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new $(n,this.h&t.h)};w.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new $(n,this.h|t.h)};w.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new $(n,this.h^t.h)};function ka(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new $(n,t.h)}function Dt(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new $(i,t.h)}Ps.prototype.createWebChannel=Ps.prototype.g;Ne.prototype.send=Ne.prototype.u;Ne.prototype.open=Ne.prototype.m;Ne.prototype.close=Ne.prototype.close;ti.NO_ERROR=0;ti.TIMEOUT=8;ti.HTTP_ERROR=6;bu.COMPLETE="complete";_u.EventType=Gn;Gn.OPEN="a";Gn.CLOSE="b";Gn.ERROR="c";Gn.MESSAGE="d";re.prototype.listen=re.prototype.O;W.prototype.listenOnce=W.prototype.P;W.prototype.getLastError=W.prototype.Sa;W.prototype.getLastErrorCode=W.prototype.Ia;W.prototype.getStatus=W.prototype.da;W.prototype.getResponseJson=W.prototype.Wa;W.prototype.getResponseText=W.prototype.ja;W.prototype.send=W.prototype.ha;W.prototype.setWithCredentials=W.prototype.Oa;Oe.prototype.digest=Oe.prototype.l;Oe.prototype.reset=Oe.prototype.reset;Oe.prototype.update=Oe.prototype.j;$.prototype.add=$.prototype.add;$.prototype.multiply=$.prototype.R;$.prototype.modulo=$.prototype.gb;$.prototype.compare=$.prototype.X;$.prototype.toNumber=$.prototype.ea;$.prototype.toString=$.prototype.toString;$.prototype.getBits=$.prototype.D;$.fromNumber=Be;$.fromString=ac;var ym=function(){return new Ps},vm=function(){return ei()},Ui=ti,wm=bu,Em=St,Da={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Cm=Wn,cs=_u,Tm=W,Im=Oe,Ft=$;const xa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Jl("@firebase/firestore");function Na(){return wt.logLevel}function S(t,...e){if(wt.logLevel<=F.DEBUG){const n=e.map(mo);wt.debug(`Firestore (${tn}): ${t}`,...n)}}function Ke(t,...e){if(wt.logLevel<=F.ERROR){const n=e.map(mo);wt.error(`Firestore (${tn}): ${t}`,...n)}}function qt(t,...e){if(wt.logLevel<=F.WARN){const n=e.map(mo);wt.warn(`Firestore (${tn}): ${t}`,...n)}}function mo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t="Unexpected state"){const e=`FIRESTORE (${tn}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function z(t,e){t||k()}function R(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(fe.UNAUTHENTICATED))}shutdown(){}}class bm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _m{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new yt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new yt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(z(typeof s.accessToken=="string"),new lc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new fe(e)}}class Am{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class km{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Am(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xm{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.T=n.token,new Dm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Nm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function O(t,e){return t<e?-1:t>e?1:0}function Gt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new se(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new se(0,0))}static max(){return new x(new se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,s){n===void 0?n=0:n>e.length&&k(),s===void 0?s=e.length-n:s>e.length-n&&k(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class j extends Rn{construct(e,n,s){return new j(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new C(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new j(n)}static emptyPath(){return new j([])}}const Rm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Rn{construct(e,n,s){return new me(e,n,s)}static isValidIdentifier(e){return Rm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new C(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new C(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(n)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.path=e}static fromPath(e){return new _(j.fromString(e))}static fromName(e){return new _(j.fromString(e).popFirst(5))}static empty(){return new _(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&j.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return j.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new j(e.slice()))}}function Mm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new se(n+1,0):new se(n,s));return new nt(i,_.empty(),e)}function Lm(t){return new nt(t.readTime,t.key,-1)}class nt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new nt(x.min(),_.empty(),-1)}static max(){return new nt(x.max(),_.empty(),-1)}}function Vm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_.comparator(t.documentKey,e.documentKey),n!==0?n:O(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Om{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t){if(t.code!==g.FAILED_PRECONDITION||t.message!==Pm)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new y((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(e,n){return new y((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Jn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}po.ct=-1;function ui(t){return t==null}function $s(t){return t===0&&1/t==-1/0}function Fm(t){return typeof t=="number"&&Number.isInteger(t)&&!$s(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.comparator=e,this.root=n||ue.EMPTY}insert(e,n){return new H(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new H(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hs(this.root,e,this.comparator,!0)}}class hs{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ue.RED,this.left=i??ue.EMPTY,this.right=r??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const e=this.left.check();if(e!==this.right.check())throw k();return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new H(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ma(this.data.getIterator())}getIteratorFrom(e){return new Ma(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class Ma{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new xe([])}unionWith(e){let n=new ve(me.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new xe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hc("Invalid base64 string: "+i):i}}(e);return new we(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new we(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const $m=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function st(t){if(z(!!t),typeof t=="string"){let e=0;const n=$m.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ee(t.seconds),nanos:ee(t.nanos)}}function ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Et(t){return typeof t=="string"?we.fromBase64String(t):we.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vo(t){const e=t.mapValue.fields.__previous_value__;return yo(e)?vo(e):e}function Mn(t){const e=st(t.mapValue.fields.__local_write_time__.timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ln{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ct(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yo(t)?4:Um(t)?9007199254740991:10:k()}function ze(t,e){if(t===e)return!0;const n=Ct(t);if(n!==Ct(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mn(t).isEqual(Mn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=st(s.timestampValue),o=st(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Et(s.bytesValue).isEqual(Et(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ee(s.geoPointValue.latitude)===ee(i.geoPointValue.latitude)&&ee(s.geoPointValue.longitude)===ee(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ee(s.integerValue)===ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ee(s.doubleValue),o=ee(i.doubleValue);return r===o?$s(r)===$s(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Gt(t.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ra(r)!==Ra(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ze(r[a],o[a])))return!1;return!0}(t,e);default:return k()}}function Vn(t,e){return(t.values||[]).find(n=>ze(n,e))!==void 0}function Ht(t,e){if(t===e)return 0;const n=Ct(t),s=Ct(e);if(n!==s)return O(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ee(i.integerValue||i.doubleValue),a=ee(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return La(t.timestampValue,e.timestampValue);case 4:return La(Mn(t),Mn(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Et(i),a=Et(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=O(o[l],a[l]);if(u!==0)return u}return O(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=O(ee(i.latitude),ee(r.latitude));return o!==0?o:O(ee(i.longitude),ee(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ht(o[l],a[l]);if(u)return u}return O(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ds.mapValue&&r===ds.mapValue)return 0;if(i===ds.mapValue)return 1;if(r===ds.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=O(a[c],u[c]);if(d!==0)return d;const h=Ht(o[a[c]],l[u[c]]);if(h!==0)return h}return O(a.length,u.length)}(t.mapValue,e.mapValue);default:throw k()}}function La(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=st(t),s=st(e),i=O(n.seconds,s.seconds);return i!==0?i:O(n.nanos,s.nanos)}function Kt(t){return yr(t)}function yr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=st(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Et(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=yr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${yr(s.fields[a])}`;return r+"}"}(t.mapValue):k();var e,n}function Va(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vr(t){return!!t&&"integerValue"in t}function wo(t){return!!t&&"arrayValue"in t}function Pa(t){return!!t&&"nullValue"in t}function Oa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vs(t){return!!t&&"mapValue"in t}function wn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=wn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Um(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!vs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wn(n)}setAll(e){let n=me.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=wn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());vs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];vs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){bt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ie(wn(this.value))}}function dc(t){const e=[];return bt(t.fields,(n,s)=>{const i=new me([n]);if(vs(s)){const r=dc(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ge(e,0,x.min(),x.min(),x.min(),Ie.empty(),0)}static newFoundDocument(e,n,s,i){return new ge(e,1,n,x.min(),s,i,0)}static newNoDocument(e,n){return new ge(e,2,n,x.min(),x.min(),Ie.empty(),0)}static newUnknownDocument(e,n){return new ge(e,3,n,x.min(),x.min(),Ie.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.position=e,this.inclusive=n}}function Fa(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=Ht(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function $a(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ze(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n="asc"){this.field=e,this.dir=n}}function jm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{}class te extends fc{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qm(e,n,s):n==="array-contains"?new Km(e,s):n==="in"?new Wm(e,s):n==="not-in"?new Qm(e,s):n==="array-contains-any"?new Xm(e,s):new te(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Gm(e,s):new Hm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ht(n,this.value)):n!==null&&Ct(this.value)===Ct(n)&&this.matchesComparison(Ht(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fe extends fc{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Fe(e,n)}matches(e){return gc(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function gc(t){return t.op==="and"}function mc(t){return zm(t)&&gc(t)}function zm(t){for(const e of t.filters)if(e instanceof Fe)return!1;return!0}function wr(t){if(t instanceof te)return t.field.canonicalString()+t.op.toString()+Kt(t.value);if(mc(t))return t.filters.map(e=>wr(e)).join(",");{const e=t.filters.map(n=>wr(n)).join(",");return`${t.op}(${e})`}}function pc(t,e){return t instanceof te?function(n,s){return s instanceof te&&n.op===s.op&&n.field.isEqual(s.field)&&ze(n.value,s.value)}(t,e):t instanceof Fe?function(n,s){return s instanceof Fe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&pc(r,s.filters[o]),!0):!1}(t,e):void k()}function yc(t){return t instanceof te?function(e){return`${e.field.canonicalString()} ${e.op} ${Kt(e.value)}`}(t):t instanceof Fe?function(e){return e.op.toString()+" {"+e.getFilters().map(yc).join(" ,")+"}"}(t):"Filter"}class qm extends te{constructor(e,n,s){super(e,n,s),this.key=_.fromName(s.referenceValue)}matches(e){const n=_.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gm extends te{constructor(e,n){super(e,"in",n),this.keys=vc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hm extends te{constructor(e,n){super(e,"not-in",n),this.keys=vc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class Km extends te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wo(n)&&Vn(n.arrayValue,this.value)}}class Wm extends te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vn(this.value.arrayValue,n)}}class Qm extends te{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vn(this.value.arrayValue,n)}}class Xm extends te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Ba(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ym(t,e,n,s,i,r,o)}function Eo(t){const e=R(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>wr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ui(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Kt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Kt(s)).join(",")),e.ft=n}return e.ft}function Co(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$a(t.startAt,e.startAt)&&$a(t.endAt,e.endAt)}function Er(t){return _.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Jm(t,e,n,s,i,r,o,a){return new nn(t,e,n,s,i,r,o,a)}function To(t){return new nn(t)}function Ua(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Io(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ci(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function wc(t){return t.collectionGroup!==null}function Bt(t){const e=R(t);if(e.dt===null){e.dt=[];const n=ci(e),s=Io(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new $t(n)),e.dt.push(new $t(me.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new $t(me.keyField(),r))}}}return e.dt}function We(t){const e=R(t);if(!e._t)if(e.limitType==="F")e._t=Ba(e.path,e.collectionGroup,Bt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Bt(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new $t(r.field,o))}const s=e.endAt?new Bs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Bs(e.startAt.position,e.startAt.inclusive):null;e._t=Ba(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Cr(t,e){e.getFirstInequalityField(),ci(t);const n=t.filters.concat([e]);return new nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tr(t,e,n){return new nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hi(t,e){return Co(We(t),We(e))&&t.limitType===e.limitType}function Ec(t){return`${Eo(We(t))}|lt:${t.limitType}`}function Ir(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>yc(s)).join(", ")}]`),ui(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Kt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Kt(s)).join(",")),`Target(${n})`}(We(t))}; limitType=${t.limitType})`}function di(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):_.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Bt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Fa(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Bt(n),s)||n.endAt&&!function(i,r,o){const a=Fa(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Bt(n),s))}(t,e)}function Zm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cc(t){return(e,n)=>{let s=!1;for(const i of Bt(t)){const r=ep(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ep(t,e,n){const s=t.field.isKeyField()?_.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ht(a,l):k()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return k()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return cc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new H(_.comparator);function Qe(){return tp}const Tc=new H(_.comparator);function fn(...t){let e=Tc;for(const n of t)e=e.insert(n.key,n);return e}function Ic(t){let e=Tc;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function mt(){return En()}function Sc(){return En()}function En(){return new sn(t=>t.toString(),(t,e)=>t.isEqual(e))}const np=new H(_.comparator),sp=new ve(_.comparator);function M(...t){let e=sp;for(const n of t)e=e.add(n);return e}const ip=new ve(O);function rp(){return ip}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}function _c(t){return{integerValue:""+t}}function op(t,e){return Fm(e)?_c(e):bc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this._=void 0}}function ap(t,e,n){return t instanceof Us?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yo(i)&&(i=vo(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Pn?kc(t,e):t instanceof On?Dc(t,e):function(s,i){const r=Ac(s,i),o=ja(r)+ja(s.wt);return vr(r)&&vr(s.wt)?_c(o):bc(s.serializer,o)}(t,e)}function lp(t,e,n){return t instanceof Pn?kc(t,e):t instanceof On?Dc(t,e):n}function Ac(t,e){return t instanceof js?vr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Us extends fi{}class Pn extends fi{constructor(e){super(),this.elements=e}}function kc(t,e){const n=xc(e);for(const s of t.elements)n.some(i=>ze(i,s))||n.push(s);return{arrayValue:{values:n}}}class On extends fi{constructor(e){super(),this.elements=e}}function Dc(t,e){let n=xc(e);for(const s of t.elements)n=n.filter(i=>!ze(i,s));return{arrayValue:{values:n}}}class js extends fi{constructor(e,n){super(),this.serializer=e,this.wt=n}}function ja(t){return ee(t.integerValue||t.doubleValue)}function xc(t){return wo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function up(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Pn&&s instanceof Pn||n instanceof On&&s instanceof On?Gt(n.elements,s.elements,ze):n instanceof js&&s instanceof js?ze(n.wt,s.wt):n instanceof Us&&s instanceof Us}(t.transform,e.transform)}class cp{constructor(e,n){this.version=e,this.transformResults=n}}class Pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ws(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gi{}function Nc(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new So(t.key,Pe.none()):new Zn(t.key,t.data,Pe.none());{const n=t.data,s=Ie.empty();let i=new ve(me.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ut(t.key,s,new xe(i.toArray()),Pe.none())}}function hp(t,e,n){t instanceof Zn?function(s,i,r){const o=s.value.clone(),a=qa(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ut?function(s,i,r){if(!ws(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=qa(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Rc(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Cn(t,e,n,s){return t instanceof Zn?function(i,r,o,a){if(!ws(i.precondition,r))return o;const l=i.value.clone(),u=Ga(i.fieldTransforms,a,r);return l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof ut?function(i,r,o,a){if(!ws(i.precondition,r))return o;const l=Ga(i.fieldTransforms,a,r),u=r.data;return u.setAll(Rc(i)),u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(i,r,o){return ws(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function dp(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Ac(s.transform,i||null);r!=null&&(n===null&&(n=Ie.empty()),n.set(s.field,r))}return n||null}function za(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Gt(n,s,(i,r)=>up(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zn extends gi{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ut extends gi{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Rc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function qa(t,e,n){const s=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,lp(o,a,n[i]))}return s}function Ga(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ap(r,o,e))}return s}class So extends gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fp extends gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&hp(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Cn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Cn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Sc();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Nc(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),M())}isEqual(e){return this.batchId===e.batchId&&Gt(this.mutations,e.mutations,(n,s)=>za(n,s))&&Gt(this.baseMutations,e.baseMutations,(n,s)=>za(n,s))}}class bo{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){z(e.mutations.length===s.length);let i=np;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new bo(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,V;function yp(t){switch(t){default:return k();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Mc(t){if(t===void 0)return Ke("GRPC error has no .code"),g.UNKNOWN;switch(t){case Z.OK:return g.OK;case Z.CANCELLED:return g.CANCELLED;case Z.UNKNOWN:return g.UNKNOWN;case Z.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case Z.INTERNAL:return g.INTERNAL;case Z.UNAVAILABLE:return g.UNAVAILABLE;case Z.UNAUTHENTICATED:return g.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case Z.NOT_FOUND:return g.NOT_FOUND;case Z.ALREADY_EXISTS:return g.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return g.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case Z.ABORTED:return g.ABORTED;case Z.OUT_OF_RANGE:return g.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return g.UNIMPLEMENTED;case Z.DATA_LOSS:return g.DATA_LOSS;default:return k()}}(V=Z||(Z={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fs}static getOrCreateInstance(){return fs===null&&(fs=new _o),fs}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let fs=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Ft([4294967295,4294967295],0);function Ha(t){const e=vp().encode(t),n=new Im;return n.update(e),new Uint8Array(n.digest())}function Ka(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ft([n,s],0),new Ft([i,r],0)]}class Ao{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new gn(`Invalid padding: ${n}`);if(s<0)throw new gn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gn(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new gn(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Ft.fromNumber(this.yt)}Tt(e,n,s){let i=e.add(n.multiply(Ft.fromNumber(s)));return i.compare(wp)===1&&(i=new Ft([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Ha(e),[s,i]=Ka(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);if(!this.Et(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ao(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Ha(e),[s,i]=Ka(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,es.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new mi(x.min(),i,new H(O),Qe(),M())}}class es{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new es(s,n,M(),M(),M())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s,i){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=i}}class Lc{constructor(e,n){this.targetId=e,this.bt=n}}class Vc{constructor(e,n,s=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Wa{constructor(){this.Vt=0,this.St=Xa(),this.Dt=we.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=M(),n=M(),s=M();return this.St.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:k()}}),new es(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=Xa()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Ep{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Qe(),this.jt=Qa(),this.zt=new H(O)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:k()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const s=e.targetId,i=e.bt.count,r=this.ne(s);if(r){const o=r.target;if(Er(o))if(i===0){const a=new _(o.path);this.Jt(s,a,ge.newNoDocument(a,x.min()))}else z(i===1);else{const a=this.se(s);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(s);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,u)}(n=_o.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var h,f,v,m,E,b;const I={localCacheCount:c,existenceFilterCount:d.count},A=d.unchangedNames;return A&&(I.bloomFilter={applied:u===0,hashCount:(h=A==null?void 0:A.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(m=(v=(f=A==null?void 0:A.bits)===null||f===void 0?void 0:f.bitmap)===null||v===void 0?void 0:v.length)!==null&&m!==void 0?m:0,padding:(b=(E=A==null?void 0:A.bits)===null||E===void 0?void 0:E.padding)!==null&&b!==void 0?b:0}),I}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:i}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,u;try{l=Et(r).toUint8Array()}catch(c){if(c instanceof hc)return qt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Ao(l,o,a)}catch(c){return qt(c instanceof gn?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.At(a)||(this.Jt(e,r,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((r,o)=>{const a=this.ne(o);if(a){if(r.current&&Er(a.target)){const l=new _(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,ge.newNoDocument(l,e))}r.kt&&(n.set(o,r.Ot()),r.$t())}});let s=M();this.jt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Qt.forEach((r,o)=>o.setReadTime(e));const i=new mi(e,n,this.zt,this.Qt,s);return this.Qt=Qe(),this.jt=Qa(),this.zt=new H(O),i}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Wa,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ve(O),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Wa),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Qa(){return new H(_.comparator)}function Xa(){return new H(_.comparator)}const Cp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ip=(()=>({and:"AND",or:"OR"}))();class Sp{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sr(t,e){return t.useProto3Json||ui(e)?e:{value:e}}function zs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bp(t,e){return zs(t,e.toTimestamp())}function Ue(t){return z(!!t),x.fromTimestamp(function(e){const n=st(e);return new se(n.seconds,n.nanos)}(t))}function ko(t,e){return function(n){return new j(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Oc(t){const e=j.fromString(t);return z(Uc(e)),e}function br(t,e){return ko(t.databaseId,e.path)}function ji(t,e){const n=Oc(e);if(n.get(1)!==t.databaseId.projectId)throw new C(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _(Fc(n))}function _r(t,e){return ko(t.databaseId,e)}function _p(t){const e=Oc(t);return e.length===4?j.emptyPath():Fc(e)}function Ar(t){return new j(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fc(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ya(t,e,n){return{name:br(t,e),fields:n.value.mapValue.fields}}function Ap(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:k()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(z(u===void 0||typeof u=="string"),we.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),we.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?g.UNKNOWN:Mc(l.code);return new C(u,l.message||"")}(o);n=new Vc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ji(t,s.document.name),r=Ue(s.document.updateTime),o=s.document.createTime?Ue(s.document.createTime):x.min(),a=new Ie({mapValue:{fields:s.document.fields}}),l=ge.newFoundDocument(i,r,o,a),u=s.targetIds||[],c=s.removedTargetIds||[];n=new Es(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ji(t,s.document),r=s.readTime?Ue(s.readTime):x.min(),o=ge.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Es([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ji(t,s.document),r=s.removedTargetIds||[];n=new Es([],r,i,null)}else{if(!("filter"in e))return k();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new pp(i,r),a=s.targetId;n=new Lc(a,o)}}return n}function kp(t,e){let n;if(e instanceof Zn)n={update:Ya(t,e.key,e.value)};else if(e instanceof So)n={delete:br(t,e.key)};else if(e instanceof ut)n={update:Ya(t,e.key,e.data),updateMask:Op(e.fieldMask)};else{if(!(e instanceof fp))return k();n={verify:br(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Us)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof On)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof js)return{fieldPath:r.field.canonicalString(),increment:o.wt};throw k()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:k()}(t,e.precondition)),n}function Dp(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Ue(s.updateTime):Ue(i);return r.isEqual(x.min())&&(r=Ue(i)),new cp(r,s.transformResults||[])}(n,e))):[]}function xp(t,e){return{documents:[_r(t,e.path)]}}function Np(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=_r(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_r(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Bc(Fe.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xt(c.field),direction:Lp(c.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Sr(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Rp(t){let e=_p(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){z(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let r=[];n.where&&(r=function(c){const d=$c(c);return d instanceof Fe&&mc(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new $t(Nt(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,ui(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new Bs(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new Bs(h,d)}(n.endAt)),Jm(e,i,o,r,a,"F",l,u)}function Mp(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $c(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Nt(e.unaryFilter.field);return te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Nt(e.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nt(e.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Nt(e.unaryFilter.field);return te.create(r,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(t):t.fieldFilter!==void 0?function(e){return te.create(Nt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Fe.create(e.compositeFilter.filters.map(n=>$c(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return k()}}(e.compositeFilter.op))}(t):k()}function Lp(t){return Cp[t]}function Vp(t){return Tp[t]}function Pp(t){return Ip[t]}function xt(t){return{fieldPath:t.canonicalString()}}function Nt(t){return me.fromServerFormat(t.fieldPath)}function Bc(t){return t instanceof te?function(e){if(e.op==="=="){if(Oa(e.value))return{unaryFilter:{field:xt(e.field),op:"IS_NAN"}};if(Pa(e.value))return{unaryFilter:{field:xt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Oa(e.value))return{unaryFilter:{field:xt(e.field),op:"IS_NOT_NAN"}};if(Pa(e.value))return{unaryFilter:{field:xt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xt(e.field),op:Vp(e.op),value:e.value}}}(t):t instanceof Fe?function(e){const n=e.getFilters().map(s=>Bc(s));return n.length===1?n[0]:{compositeFilter:{op:Pp(e.op),filters:n}}}(t):k()}function Op(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,s,i,r=x.min(),o=x.min(),a=we.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Xe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.le=e}}function $p(t){const e=Rp({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.sn=new Up}addToCollectionParentIndex(e,n){return this.sn.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(nt.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(nt.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class Up{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ve(j.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ve(j.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Wt(0)}static kn(){return new Wt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.changes=new sn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Cn(s.mutation,i,xe.empty(),se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,M()).next(()=>s))}getLocalViewOfDocuments(e,n,s=M()){const i=mt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=fn();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=mt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,M()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Qe();const o=En(),a=En();return n.forEach((l,u)=>{const c=s.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ut)?r=r.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Cn(c.mutation,u,c.mutation.getFieldMask(),se.now())):o.set(u.key,xe.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new zp(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=En();let i=new H((o,a)=>o-a),r=M();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=s.get(l)||xe.empty();c=a.applyToLocalView(u,c),s.set(l,c);const d=(i.get(a.batchId)||M()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=Sc();c.forEach(h=>{if(!r.has(h)){const f=Nc(n.get(h),s.get(h));f!==null&&d.set(h,f),r=r.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return _.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wc(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):y.resolve(mt());let a=-1,l=r;return o.next(u=>y.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(c)?y.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,M())).next(c=>({batchId:a,changes:Ic(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _(n)).next(s=>{let i=fn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=fn();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const l=function(u,c){return new nn(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(u=>{u.forEach((c,d)=>{r=r.insert(c,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const u=l.getKey();r.get(u)===null&&(r=r.insert(u,ge.newInvalidDocument(u)))});let o=fn();return r.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Cn(u.mutation,l,xe.empty(),se.now()),di(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return y.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:Ue(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:$p(s.bundledQuery),readTime:Ue(s.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.overlays=new H(_.comparator),this.hs=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=mt();return y.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.de(e,n,r)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hs.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const i=mt(),r=n.length+1,o=new _(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new H((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let c=r.get(u.largestBatchId);c===null&&(c=mt(),r=r.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=mt(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return y.resolve(a)}de(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(s.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new mp(n,s));let r=this.hs.get(n);r===void 0&&(r=M(),this.hs.set(n,r)),this.hs.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.ls=new ve(ie.fs),this.ds=new ve(ie._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new ie(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new ie(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new _(new j([])),s=new ie(n,e),i=new ie(n,e+1),r=[];return this.ds.forEachInRange([s,i],o=>{this.gs(o),r.push(o.key)}),r}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new _(new j([])),s=new ie(n,e),i=new ie(n,e+1);let r=M();return this.ds.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ie(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ie{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return _.comparator(e.key,n.key)||O(e.Es,n.Es)}static _s(e,n){return O(e.Es,n.Es)||_.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ve(ie.fs)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gp(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ie(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ps(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ie(n,0),i=new ie(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.vs(o.Es);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(O);return n.forEach(i=>{const r=new ie(i,0),o=new ie(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.Es)})}),y.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;_.isDocumentKey(r)||(r=r.child(""));const o=new ie(new _(r),0);let a=new ve(O);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),y.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const i=this.vs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return y.forEach(n.mutations,i=>{const r=new ie(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new ie(n,0),i=this.Rs.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.Ss=e,this.docs=new H(_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():ge.newInvalidDocument(n))}getEntries(e,n){let s=Qe();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ge.newInvalidDocument(i))}),y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Qe();const o=n.path,a=new _(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Vm(Lm(c),s)<=0||(i.has(c.key)||di(n,c))&&(r=r.insert(c.key,c.mutableCopy()))}return y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){k()}Ds(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Qp(this)}getSize(e){return y.resolve(this.size)}}class Qp extends jp{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.persistence=e,this.Cs=new sn(n=>Eo(n),Co),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Do,this.targetCount=0,this.ks=Wt.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),y.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Wt(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.$n(n),y.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n){this.Ms={},this.overlays={},this.Os=new po(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new Xp(this),this.indexManager=new Bp,this.remoteDocumentCache=function(s){return new Wp(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new Fp(n),this.Ls=new Gp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hp,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new Kp(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){S("MemoryPersistence","Starting transaction:",e);const i=new Jp(this.Os.next());return this.referenceDelegate.qs(),s(i).next(r=>this.referenceDelegate.Us(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ks(e,n){return y.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class Jp extends Om{constructor(e){super(),this.currentSequenceNumber=e}}class xo{constructor(e){this.persistence=e,this.Gs=new Do,this.Qs=null}static js(e){return new xo(e)}get zs(){if(this.Qs)return this.Qs;throw k()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),y.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.zs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.zs,s=>{const i=_.fromPath(s);return this.Ws(e,i).next(r=>{r||n.removeEntry(i,x.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return y.or([()=>y.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=i}static Bi(e,n){let s=M(),i=M();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new No(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ui(e,n).next(r=>r||this.Ki(e,n,i,s)).next(r=>r||this.Gi(e,n))}Ui(e,n){if(Ua(n))return y.resolve(null);let s=We(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Tr(n,null,"F"),s=We(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=M(...r);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,Tr(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,s,i){return Ua(n)||i.isEqual(x.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(r=>{const o=this.Qi(n,r);return this.ji(n,o,s,i)?this.Gi(e,n):(Na()<=F.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ir(n)),this.zi(e,o,n,Mm(i,-1)))})}Qi(e,n){let s=new ve(Cc(e));return n.forEach((i,r)=>{di(e,r)&&(s=s.add(r))}),s}ji(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Gi(e,n){return Na()<=F.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Ir(n)),this.qi.getDocumentsMatchingQuery(e,n,nt.min())}zi(e,n,s,i){return this.qi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,s,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new H(O),this.Ji=new sn(r=>Eo(r),Co),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qp(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function ty(t,e,n,s){return new ey(t,e,n,s)}async function jc(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=M();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of r){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(s,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function ny(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=y.resolve();return d.forEach(f=>{h=h.next(()=>u.getEntry(a,f)).next(v=>{const m=l.docVersions.get(f);z(m!==null),v.version.compareTo(m)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=M();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function zc(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function sy(t,e){const n=R(t),s=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Fs.removeMatchingKeys(r,c.removedDocuments,d).next(()=>n.Fs.addMatchingKeys(r,c.addedDocuments,d)));let f=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(we.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,s)),i=i.insert(d,f),function(v,m,E){return v.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,f,c)&&a.push(n.Fs.updateTargetData(r,f))});let l=Qe(),u=M();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(iy(r,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!s.isEqual(x.min())){const c=n.Fs.getLastRemoteSnapshotVersion(r).next(d=>n.Fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.Hi=i,r))}function iy(t,e,n){let s=M(),i=M();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Qe();return n.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(x.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function ry(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function oy(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Fs.getTargetData(s,e).next(r=>r?(i=r,y.resolve(i)):n.Fs.allocateTargetId(s).next(o=>(i=new Xe(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Hi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function kr(t,e,n){const s=R(t),i=s.Hi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jn(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(i.target)}function Ja(t,e,n){const s=R(t);let i=x.min(),r=M();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=R(a),d=c.Ji.get(u);return d!==void 0?y.resolve(c.Hi.get(d)):c.Fs.getTargetData(l,u)}(s,o,We(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?i:x.min(),n?r:M())).next(a=>(ay(s,Zm(e),a),{documents:a,sr:r})))}function ay(t,e,n){let s=t.Yi.get(e)||x.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Yi.set(e,s)}class Za{constructor(){this.activeTargetIds=rp()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ly{constructor(){this.Wr=new Za,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Za,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs=null;function zi(){return gs===null?gs=268435456+Math.round(2147483648*Math.random()):gs++,"0x"+gs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="WebChannelConnection";class dy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,i,r){const o=zi(),a=this.Io(e,n);S("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.To(l,i,r),this.Eo(e,a,l,s).then(u=>(S("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw qt("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}Ao(e,n,s,i,r,o){return this.po(e,n,s,i,r)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+tn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}Io(e,n){const s=cy[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,i){const r=zi();return new Promise((o,a)=>{const l=new Tm;l.setWithCredentials(!0),l.listenOnce(wm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ui.NO_ERROR:const c=l.getResponseJson();S(de,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(c)),o(c);break;case Ui.TIMEOUT:S(de,`RPC '${e}' ${r} timed out`),a(new C(g.DEADLINE_EXCEEDED,"Request time out"));break;case Ui.HTTP_ERROR:const d=l.getStatus();if(S(de,`RPC '${e}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const v=function(m){const E=m.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(E)>=0?E:g.UNKNOWN}(f.status);a(new C(v,f.message))}else a(new C(g.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new C(g.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{S(de,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);S(de,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",u,s,15)})}Ro(e,n,s){const i=zi(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ym(),a=vm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Cm({})),this.To(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");S(de,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let d=!1,h=!1;const f=new hy({io:m=>{h?S(de,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(d||(S(de,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),S(de,`RPC '${e}' stream ${i} sending:`,m),c.send(m))},ro:()=>c.close()}),v=(m,E,b)=>{m.listen(E,I=>{try{b(I)}catch(A){setTimeout(()=>{throw A},0)}})};return v(c,cs.EventType.OPEN,()=>{h||S(de,`RPC '${e}' stream ${i} transport opened.`)}),v(c,cs.EventType.CLOSE,()=>{h||(h=!0,S(de,`RPC '${e}' stream ${i} transport closed`),f.fo())}),v(c,cs.EventType.ERROR,m=>{h||(h=!0,qt(de,`RPC '${e}' stream ${i} transport errored:`,m),f.fo(new C(g.UNAVAILABLE,"The operation could not be completed")))}),v(c,cs.EventType.MESSAGE,m=>{var E;if(!h){const b=m.data[0];z(!!b);const I=b,A=I.error||((E=I[0])===null||E===void 0?void 0:E.error);if(A){S(de,`RPC '${e}' stream ${i} received error:`,A);const P=A.status;let L=function(K){const Y=Z[K];if(Y!==void 0)return Mc(Y)}(P),Q=A.message;L===void 0&&(L=g.INTERNAL,Q="Unknown error status: "+P+" with message "+A.message),h=!0,f.fo(new C(L,Q)),c.close()}else S(de,`RPC '${e}' stream ${i} received:`,b),f._o(b)}}),v(a,Em.STAT_EVENT,m=>{m.stat===Da.PROXY?S(de,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===Da.NOPROXY&&S(de,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.lo()},0),f}}function qi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){return new Sp(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=i,this.bo=r,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-s);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Mo=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new qc(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.$o===n&&this.Xo(s,i)},s=>{e(()=>{const i=new C(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(i)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{s(()=>this.Zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fy extends Gc{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=Ap(this.serializer,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?Ue(r.readTime):x.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=Ar(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Er(a)?{documents:xp(i,a)}:{query:Np(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Pc(i,r.resumeToken);const l=Sr(i,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(x.min())>0){o.readTime=zs(i,r.snapshotVersion.toTimestamp());const l=Sr(i,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=Mp(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=Ar(this.serializer),n.removeTarget=e,this.zo(n)}}class gy extends Gc{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=Dp(e.writeResults,e.commitTime),s=Ue(e.commitTime);return this.listener.uu(s,n)}return z(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Ar(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>kp(this.serializer,s))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new C(g.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.po(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(g.UNKNOWN,i.toString())})}Ao(e,n,s,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new C(g.UNKNOWN,r.toString())})}terminate(){this.hu=!0}}class py{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Ke(n),this.wu=!1):S("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=r,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{_t(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=R(a);l.Au.add(4),await ts(l),l.Pu.set("Unknown"),l.Au.delete(4),await yi(l)}(this))})}),this.Pu=new py(s,i)}}async function yi(t){if(_t(t))for(const e of t.Ru)await e(!0)}async function ts(t){for(const e of t.Ru)await e(!1)}function Hc(t,e){const n=R(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Lo(n)?Mo(n):rn(n).Uo()&&Ro(n,e))}function Kc(t,e){const n=R(t),s=rn(n);n.Eu.delete(e),s.Uo()&&Wc(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():_t(n)&&n.Pu.set("Unknown"))}function Ro(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(x.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}rn(t).nu(e)}function Wc(t,e){t.bu.Lt(e),rn(t).su(e)}function Mo(t){t.bu=new Ep({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),rn(t).start(),t.Pu.mu()}function Lo(t){return _t(t)&&!rn(t).qo()&&t.Eu.size>0}function _t(t){return R(t).Au.size===0}function Qc(t){t.bu=void 0}async function vy(t){t.Eu.forEach((e,n)=>{Ro(t,e)})}async function wy(t,e){Qc(t),Lo(t)?(t.Pu.pu(e),Mo(t)):t.Pu.set("Unknown")}async function Ey(t,e,n){if(t.Pu.set("Online"),e instanceof Vc&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qs(t,s)}else if(e instanceof Es?t.bu.Wt(e):e instanceof Lc?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(x.min()))try{const s=await zc(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.bu.ue(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(we.EMPTY_BYTE_STRING,u.snapshotVersion)),Wc(i,a);const c=new Xe(u.target,a,l,u.sequenceNumber);Ro(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){S("RemoteStore","Failed to raise snapshot:",s),await qs(t,s)}}async function qs(t,e,n){if(!Jn(e))throw e;t.Au.add(1),await ts(t),t.Pu.set("Offline"),n||(n=()=>zc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await yi(t)})}function Xc(t,e){return e().catch(n=>qs(t,n,e))}async function vi(t){const e=R(t),n=it(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;Cy(e);)try{const i=await ry(e.localStore,s);if(i===null){e.Tu.length===0&&n.Qo();break}s=i.batchId,Ty(e,i)}catch(i){await qs(e,i)}Yc(e)&&Jc(e)}function Cy(t){return _t(t)&&t.Tu.length<10}function Ty(t,e){t.Tu.push(e);const n=it(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Yc(t){return _t(t)&&!it(t).qo()&&t.Tu.length>0}function Jc(t){it(t).start()}async function Iy(t){it(t).au()}async function Sy(t){const e=it(t);for(const n of t.Tu)e.ou(n.mutations)}async function by(t,e,n){const s=t.Tu.shift(),i=bo.from(s,e,n);await Xc(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vi(t)}async function _y(t,e){e&&it(t).ru&&await async function(n,s){if(i=s.code,yp(i)&&i!==g.ABORTED){const r=n.Tu.shift();it(n).Go(),await Xc(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await vi(n)}var i}(t,e),Yc(t)&&Jc(t)}async function tl(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const s=_t(n);n.Au.add(3),await ts(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await yi(n)}async function Ay(t,e){const n=R(t);e?(n.Au.delete(2),await yi(n)):e||(n.Au.add(2),await ts(n),n.Pu.set("Unknown"))}function rn(t){return t.Vu||(t.Vu=function(e,n,s){const i=R(e);return i.lu(),new fy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{oo:vy.bind(null,t),co:wy.bind(null,t),eu:Ey.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Lo(t)?Mo(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Qc(t))})),t.Vu}function it(t){return t.Su||(t.Su=function(e,n,s){const i=R(e);return i.lu(),new gy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{oo:Iy.bind(null,t),co:_y.bind(null,t),cu:Sy.bind(null,t),uu:by.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await vi(t)):(await t.Su.stop(),t.Tu.length>0&&(S("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Vo(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Po(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),Jn(t))return new C(g.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.comparator=e?(n,s)=>e(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=fn(),this.sortedSet=new H(this.comparator)}static emptySet(e){return new Ut(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ut;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.Du=new H(_.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):k():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class Qt{constructor(e,n,s,i,r,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qt(e,n,Ut.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.xu=void 0,this.listeners=[]}}class Dy{constructor(){this.queries=new sn(e=>Ec(e),hi),this.onlineState="Unknown",this.Nu=new Set}}async function xy(t,e){const n=R(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ky),i)try{r.xu=await n.onListen(s)}catch(o){const a=Po(o,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.ku(n.onlineState),r.xu&&e.Mu(r.xu)&&Oo(n)}async function Ny(t,e){const n=R(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ry(t,e){const n=R(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Mu(i)&&(s=!0);o.xu=i}}s&&Oo(n)}function My(t,e,n){const s=R(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Oo(t){t.Nu.forEach(e=>{e.next()})}class Ly{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Qt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Qt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.key=e}}class eh{constructor(e){this.key=e}}class Vy{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=M(),this.mutatedKeys=M(),this.Zu=Cc(e),this.tc=new Ut(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new nl,i=n?n.tc:this.tc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),f=di(this.query,d)?d:null,v=!!h&&this.mutatedKeys.has(h.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;h&&f?h.data.isEqual(f.data)?v!==m&&(s.track({type:3,doc:f}),E=!0):this.ic(h,f)||(s.track({type:2,doc:f}),E=!0,(l&&this.Zu(f,l)>0||u&&this.Zu(f,u)<0)&&(a=!0)):!h&&f?(s.track({type:0,doc:f}),E=!0):h&&!f&&(s.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),r=m?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{tc:o,sc:s,ji:a,mutatedKeys:r}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const r=e.sc.Cu();r.sort((u,c)=>function(d,h){const f=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return f(d)-f(h)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,r.length!==0||l?{snapshot:new Qt(this.query,e.tc,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new nl,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=M(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new eh(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new Zc(s))}),n}ac(e){this.Ju=e.sr,this.Xu=M();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Qt.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Py{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Oy{constructor(e){this.key=e,this.lc=!1}}class Fy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new sn(a=>Ec(a),hi),this._c=new Map,this.wc=new Set,this.mc=new H(_.comparator),this.gc=new Map,this.yc=new Do,this.Ic={},this.Tc=new Map,this.Ec=Wt.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function $y(t,e){const n=Qy(t);let s,i;const r=n.dc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.hc();else{const o=await oy(n.localStore,We(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await By(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Hc(n.remoteStore,o)}return i}async function By(t,e,n,s,i){t.Rc=(d,h,f)=>async function(v,m,E,b){let I=m.view.nc(E);I.ji&&(I=await Ja(v.localStore,m.query,!1).then(({documents:L})=>m.view.nc(L,I)));const A=b&&b.targetChanges.get(m.targetId),P=m.view.applyChanges(I,v.isPrimaryClient,A);return il(v,m.targetId,P.uc),P.snapshot}(t,d,h,f);const r=await Ja(t.localStore,e,!0),o=new Vy(e,r.sr),a=o.nc(r.documents),l=es.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);il(t,n,u.uc);const c=new Py(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Uy(t,e){const n=R(t),s=n.dc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!hi(r,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await kr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Kc(n.remoteStore,s.targetId),Dr(n,s.targetId)}).catch(Yn)):(Dr(n,s.targetId),await kr(n.localStore,s.targetId,!0))}async function jy(t,e,n){const s=Xy(t);try{const i=await function(r,o){const a=R(r),l=se.now(),u=o.reduce((h,f)=>h.add(f.key),M());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=Qe(),v=M();return a.Xi.getEntries(h,u).next(m=>{f=m,f.forEach((E,b)=>{b.isValidDocument()||(v=v.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(m=>{c=m;const E=[];for(const b of o){const I=dp(b,c.get(b.key).overlayedDocument);I!=null&&E.push(new ut(b.key,I,dc(I.value.mapValue),Pe.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,E,o)}).next(m=>{d=m;const E=m.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(h,m.batchId,E)})}).then(()=>({batchId:d.batchId,changes:Ic(c)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.Ic[r.currentUser.toKey()];l||(l=new H(O)),l=l.insert(o,a),r.Ic[r.currentUser.toKey()]=l}(s,i.batchId,n),await ns(s,i.changes),await vi(s.remoteStore)}catch(i){const r=Po(i,"Failed to persist write");n.reject(r)}}async function th(t,e){const n=R(t);try{const s=await sy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.gc.get(r);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?z(o.lc):i.removedDocuments.size>0&&(z(o.lc),o.lc=!1))}),await ns(n,s,e)}catch(s){await Yn(s)}}function sl(t,e,n){const s=R(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.dc.forEach((r,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=R(r);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.ku(o)&&(l=!0)}),l&&Oo(a)}(s.eventManager,e),i.length&&s.fc.eu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zy(t,e,n){const s=R(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.gc.get(e),r=i&&i.key;if(r){let o=new H(_.comparator);o=o.insert(r,ge.newNoDocument(r,x.min()));const a=M().add(r),l=new mi(x.min(),new Map,new H(O),o,a);await th(s,l),s.mc=s.mc.remove(r),s.gc.delete(e),Fo(s)}else await kr(s.localStore,e,!1).then(()=>Dr(s,e,n)).catch(Yn)}async function qy(t,e){const n=R(t),s=e.batch.batchId;try{const i=await ny(n.localStore,e);sh(n,s,null),nh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ns(n,i)}catch(i){await Yn(i)}}async function Gy(t,e,n){const s=R(t);try{const i=await function(r,o){const a=R(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(z(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(s.localStore,e);sh(s,e,n),nh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ns(s,i)}catch(i){await Yn(i)}}function nh(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function sh(t,e,n){const s=R(t);let i=s.Ic[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Ic[s.currentUser.toKey()]=i}}function Dr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||ih(t,s)})}function ih(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Kc(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Fo(t))}function il(t,e,n){for(const s of n)s instanceof Zc?(t.yc.addReference(s.key,e),Hy(t,s)):s instanceof eh?(S("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||ih(t,s.key)):k()}function Hy(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(S("SyncEngine","New document in limbo: "+n),t.wc.add(s),Fo(t))}function Fo(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new _(j.fromString(e)),s=t.Ec.next();t.gc.set(s,new Oy(n)),t.mc=t.mc.insert(n,s),Hc(t.remoteStore,new Xe(We(To(n.path)),s,"TargetPurposeLimboResolution",po.ct))}}async function ns(t,e,n){const s=R(t),i=[],r=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=No.Bi(l.targetId,u);r.push(c)}}))}),await Promise.all(o),s.fc.eu(i),await async function(a,l){const u=R(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>y.forEach(l,d=>y.forEach(d.$i,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>y.forEach(d.Fi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!Jn(c))throw c;S("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Hi.get(d),f=h.snapshotVersion,v=h.withLastLimboFreeSnapshotVersion(f);u.Hi=u.Hi.insert(d,v)}}}(s.localStore,r))}async function Ky(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const s=await jc(n.localStore,e);n.currentUser=e,function(i,r){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new C(g.CANCELLED,r))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ns(n,s.tr)}}function Wy(t,e){const n=R(t),s=n.gc.get(e);if(s&&s.lc)return M().add(s.key);{let i=M();const r=n._c.get(e);if(!r)return i;for(const o of r){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function Qy(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=th.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zy.bind(null,e),e.fc.eu=Ry.bind(null,e.eventManager),e.fc.vc=My.bind(null,e.eventManager),e}function Xy(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gy.bind(null,e),e}class rl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ty(this.persistence,new Zp,e.initialUser,this.serializer)}createPersistence(e){return new Yp(xo.js,this.serializer)}createSharedClientState(e){return new ly}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ky.bind(null,this.syncEngine),await Ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Dy}createDatastore(e){const n=pi(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new dy(i));var i;return function(r,o,a,l){return new my(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>sl(this.syncEngine,a,0),o=el.D()?new el:new uy,new yy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,u){const c=new Fy(s,i,r,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);S("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await ts(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=uc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{S("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(S("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Po(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gi(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await jc(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ol(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tv(t);S("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>tl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>tl(e.remoteStore,r)),t._onlineComponents=e}function ev(t){return t.name==="FirebaseError"?t.code===g.FAILED_PRECONDITION||t.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gi(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ev(n))throw n;qt("Error using user provided cache. Falling back to memory cache: "+n),await Gi(t,new rl)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await Gi(t,new rl);return t._offlineComponents}async function rh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await ol(t,t._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await ol(t,new Yy))),t._onlineComponents}function nv(t){return rh(t).then(e=>e.syncEngine)}async function al(t){const e=await rh(t),n=e.eventManager;return n.onListen=$y.bind(null,e.syncEngine),n.onUnlisten=Uy.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t,e,n){if(!n)throw new C(g.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sv(t,e,n,s){if(e===!0&&s===!0)throw new C(g.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ul(t){if(!_.isDocumentKey(t))throw new C(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cl(t){if(_.isDocumentKey(t))throw new C(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":k()}function et(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wi(t);throw new C(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sm;switch(n.type){case"firstParty":return new km(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ll.get(e);n&&(S("ComponentProvider","Removing Datastore"),ll.delete(e),n.terminate())}(this),Promise.resolve()}}function iv(t,e,n,s={}){var i;const r=(t=et(t,Ei))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&qt("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=fe.MOCK_USER;else{o=of(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new C(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new fe(l)}t._authCredentials=new bm(new lc(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}}class At{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new At(this.firestore,e,this._query)}}class tt extends At{constructor(e,n,s){super(e,n,To(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new _(e))}withConverter(e){return new tt(this.firestore,e,this._path)}}function rv(t,e,...n){if(t=je(t),oh("collection","path",e),t instanceof Ei){const s=j.fromString(e,...n);return cl(s),new tt(t,null,s)}{if(!(t instanceof Se||t instanceof tt))throw new C(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(j.fromString(e,...n));return cl(s),new tt(t.firestore,null,s)}}function xr(t,e,...n){if(t=je(t),arguments.length===1&&(e=uc.A()),oh("doc","path",e),t instanceof Ei){const s=j.fromString(e,...n);return ul(s),new Se(t,null,new _(s))}{if(!(t instanceof Se||t instanceof tt))throw new C(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(j.fromString(e,...n));return ul(s),new Se(t.firestore,t instanceof tt?t.converter:null,new _(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new qc(this,"async_queue_retry"),this.Yc=()=>{const n=qi();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=qi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=qi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new yt;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Jn(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ke("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Vo.createAndSchedule(this,e,n,s,r=>this.ea(r));return this.jc.push(i),i}Xc(){this.zc&&k()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function dl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Xt extends Ei{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new ov,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lh(this),this._firestoreClient.terminate()}}function av(t,e){const n=typeof t=="object"?t:cg(),s=typeof t=="string"?t:e||"(default)",i=og(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=nf("firestore");r&&iv(i,...r)}return i}function ah(t){return t._firestoreClient||lh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lh(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,u){return new Bm(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Zy(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(we.fromBase64String(e))}catch(n){throw new C(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=/^__.*__$/;class uv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ut(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zn(e,this.data,n,this.fieldTransforms)}}class uh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ut(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ch(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class Uo{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.oa(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Uo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:s,ha:!1});return i.la(e),i}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:s,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Gs(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ch(this.ua)&&lv.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class cv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||pi(e)}ga(e,n,s,i=!1){return new Uo({ua:e,methodName:n,ma:s,path:me.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jo(t){const e=t._freezeSettings(),n=pi(t._databaseId);return new cv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hv(t,e,n,s,i,r={}){const o=t.ga(r.merge||r.mergeFields?2:0,e,n,i);zo("Data must be an object, but it was:",o,s);const a=hh(s,o);let l,u;if(r.merge)l=new xe(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const d of r.mergeFields){const h=Nr(e,d,n);if(!o.contains(h))throw new C(g.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);fh(c,h)||c.push(h)}l=new xe(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new uv(new Ie(a),l,u)}class Ti extends $o{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ti}}function dv(t,e,n,s){const i=t.ga(1,e,n);zo("Data must be an object, but it was:",i,s);const r=[],o=Ie.empty();bt(s,(l,u)=>{const c=qo(e,l,n);u=je(u);const d=i.fa(c);if(u instanceof Ti)r.push(c);else{const h=ss(u,d);h!=null&&(r.push(c),o.set(c,h))}});const a=new xe(r);return new uh(o,a,i.fieldTransforms)}function fv(t,e,n,s,i,r){const o=t.ga(1,e,n),a=[Nr(e,s,n)],l=[i];if(r.length%2!=0)throw new C(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<r.length;h+=2)a.push(Nr(e,r[h])),l.push(r[h+1]);const u=[],c=Ie.empty();for(let h=a.length-1;h>=0;--h)if(!fh(u,a[h])){const f=a[h];let v=l[h];v=je(v);const m=o.fa(f);if(v instanceof Ti)u.push(f);else{const E=ss(v,m);E!=null&&(u.push(f),c.set(f,E))}}const d=new xe(u);return new uh(c,d,o.fieldTransforms)}function gv(t,e,n,s=!1){return ss(n,t.ga(s?4:3,e))}function ss(t,e){if(dh(t=je(t)))return zo("Unsupported field value:",e,t),hh(t,e);if(t instanceof $o)return function(n,s){if(!ch(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ss(o,s.da(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return op(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=se.fromDate(n);return{timestampValue:zs(s.serializer,i)}}if(n instanceof se){const i=new se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:zs(s.serializer,i)}}if(n instanceof Bo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Yt)return{bytesValue:Pc(s.serializer,n._byteString)};if(n instanceof Se){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ko(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${wi(n)}`)}(t,e)}function hh(t,e){const n={};return cc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bt(t,(s,i)=>{const r=ss(i,e.aa(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function dh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof se||t instanceof Bo||t instanceof Yt||t instanceof Se||t instanceof $o)}function zo(t,e,n){if(!dh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=wi(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Nr(t,e,n){if((e=je(e))instanceof Ci)return e._internalPath;if(typeof e=="string")return qo(t,e);throw Gs("Field path arguments must be of type string or ",t,!1,void 0,n)}const mv=new RegExp("[~\\*/\\[\\]]");function qo(t,e,n){if(e.search(mv)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ci(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gs(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new C(g.INVALID_ARGUMENT,a+t+l)}function fh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Go("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pv extends gh{data(){return super.data()}}function Go(t,e){return typeof e=="string"?qo(t,e):e instanceof Ci?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ho{}class mh extends Ho{}function vv(t,e,...n){let s=[];e instanceof Ho&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Wo).length,o=i.filter(a=>a instanceof Ko).length;if(r>1||r>0&&o>0)throw new C(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Ko extends mh{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ko(e,n,s)}_apply(e){const n=this._parse(e);return ph(e._query,n),new At(e.firestore,e.converter,Cr(e._query,n))}_parse(e){const n=jo(e.firestore);return function(i,r,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){gl(c,u);const h=[];for(const f of c)h.push(fl(a,i,f));d={arrayValue:{values:h}}}else d=fl(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||gl(c,u),d=gv(o,r,c,u==="in"||u==="not-in");return te.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Wo extends Ho{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wo(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Fe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)ph(r,a),r=Cr(r,a)}(e._query,n),new At(e.firestore,e.converter,Cr(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qo extends mh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qo(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new C(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new $t(i,r);return function(a,l){if(Io(a)===null){const u=ci(a);u!==null&&yh(a,u,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new At(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new nn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function wv(t,e="asc"){const n=e,s=Go("orderBy",t);return Qo._create(s,n)}function fl(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new C(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wc(e)&&n.indexOf("/")!==-1)throw new C(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(j.fromString(n));if(!_.isDocumentKey(s))throw new C(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Va(t,new _(s))}if(n instanceof Se)return Va(t,n._key);throw new C(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wi(n)}.`)}function gl(t,e){if(!Array.isArray(t)||t.length===0)throw new C(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ph(t,e){if(e.isInequality()){const s=ci(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new C(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Io(t);r!==null&&yh(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function yh(t,e,n){if(!n.isEqual(e))throw new C(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ev{convertValue(e,n="none"){switch(Ct(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw k()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return bt(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Bo(ee(e.latitude),ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=vo(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Mn(e));default:return null}}convertTimestamp(e){const n=st(e);return new se(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=j.fromString(e);z(Uc(s));const i=new Ln(s.get(1),s.get(3)),r=new _(s.popFirst(5));return i.isEqual(n)||Ke(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vh extends gh{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Go("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Cs extends vh{data(e={}){return super.data(e)}}class Tv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Cs(this._firestore,this._userDataWriter,s.key,s,new mn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Cs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Cs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Iv(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Iv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}class wh extends Ev{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,n)}}function Sv(t,e,n,...s){t=et(t,Se);const i=et(t.firestore,Xt),r=jo(i);let o;return o=typeof(e=je(e))=="string"||e instanceof Ci?fv(r,"updateDoc",t._key,e,n,s):dv(r,"updateDoc",t._key,e),Xo(i,[o.toMutation(t._key,Pe.exists(!0))])}function bv(t){return Xo(et(t.firestore,Xt),[new So(t._key,Pe.none())])}function _v(t,e){const n=et(t.firestore,Xt),s=xr(t),i=Cv(t.converter,e);return Xo(n,[hv(jo(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Pe.exists(!1))]).then(()=>s)}function Av(t,...e){var n,s,i;t=je(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||dl(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(dl(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Se)u=et(t.firestore,Xt),c=To(t._key.path),l={next:d=>{e[o]&&e[o](kv(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=et(t,At);u=et(d.firestore,Xt),c=d._query;const h=new wh(u);l={next:f=>{e[o]&&e[o](new Tv(u,h,d,f))},error:e[o+1],complete:e[o+2]},yv(t._query)}return function(d,h,f,v){const m=new Jy(v),E=new Ly(h,m,f);return d.asyncQueue.enqueueAndForget(async()=>xy(await al(d),E)),()=>{m.Sc(),d.asyncQueue.enqueueAndForget(async()=>Ny(await al(d),E))}}(ah(u),c,a,l)}function Xo(t,e){return function(n,s){const i=new yt;return n.asyncQueue.enqueueAndForget(async()=>jy(await nv(n),s,i)),i.promise}(ah(t),e)}function kv(t,e,n){const s=n.docs.get(e._key),i=new wh(t);return new vh(t,i,e._key,s,new mn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){tn=n})(ug),ks(new bn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Xt(new _m(n.getProvider("auth-internal")),new xm(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Pt(xa,"3.11.0",t),Pt(xa,"3.11.0","esm2017")})();var Dv="firebase",xv="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(Dv,xv,"app");const Nv={apiKey:"AIzaSyC9bchkYA6QezhATC60vBduzlvzmUUmKnM",authDomain:"twotter-fe042.firebaseapp.com",projectId:"twotter-fe042",storageBucket:"twotter-fe042.appspot.com",messagingSenderId:"525872482980",appId:"1:525872482980:web:18f397792736e873373431"},Rv=tu(Nv),Mv=av(Rv);const Lv=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const Eh=(()=>Ks.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),Ch=(()=>Ks.reduce((t,e)=>{const n="offset"+Lr(e);return t[n]={type:[String,Number],default:null},t},{}))(),Th=(()=>Ks.reduce((t,e)=>{const n="order"+Lr(e);return t[n]={type:[String,Number],default:null},t},{}))(),ml={col:Object.keys(Eh),offset:Object.keys(Ch),order:Object.keys(Th)};function Vv(t,e,n){let s=t;if(!(n==null||n===!1)){if(e){const i=e.replace(t,"");s+=`-${i}`}return t==="col"&&(s="v-"+s),t==="col"&&(n===""||n===!0)||(s+=`-${n}`),s.toLowerCase()}}const Pv=["auto","start","end","center","baseline","stretch"],Ov=B({cols:{type:[Boolean,String,Number],default:!1},...Eh,offset:{type:[String,Number],default:null},...Ch,order:{type:[String,Number],default:null},...Th,alignSelf:{type:String,default:null,validator:t=>Pv.includes(t)},...be(),...ot()},"v-col"),ms=Ee()({name:"VCol",props:Ov(),setup(t,e){let{slots:n}=e;const s=T(()=>{const i=[];let r;for(r in ml)ml[r].forEach(a=>{const l=t[a],u=Vv(r,a,l);u&&i.push(u)});const o=i.some(a=>a.startsWith("v-col-"));return i.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),i});return()=>{var i;return Il(t.tag,{class:[s.value,t.class],style:t.style},(i=n.default)==null?void 0:i.call(n))}}}),Yo=["start","end","center"],Ih=["space-between","space-around","space-evenly"];function Jo(t,e){return Ks.reduce((n,s)=>{const i=t+Lr(s);return n[i]=e(),n},{})}const Fv=[...Yo,"baseline","stretch"],Sh=t=>Fv.includes(t),bh=Jo("align",()=>({type:String,default:null,validator:Sh})),$v=[...Yo,...Ih],_h=t=>$v.includes(t),Ah=Jo("justify",()=>({type:String,default:null,validator:_h})),Bv=[...Yo,...Ih,"stretch"],kh=t=>Bv.includes(t),Dh=Jo("alignContent",()=>({type:String,default:null,validator:kh})),pl={align:Object.keys(bh),justify:Object.keys(Ah),alignContent:Object.keys(Dh)},Uv={align:"align",justify:"justify",alignContent:"align-content"};function jv(t,e,n){let s=Uv[t];if(n!=null){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${n}`,s.toLowerCase()}}const zv=B({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Sh},...bh,justify:{type:String,default:null,validator:_h},...Ah,alignContent:{type:String,default:null,validator:kh},...Dh,...be(),...ot()},"v-row"),yl=Ee()({name:"VRow",props:zv(),setup(t,e){let{slots:n}=e;const s=T(()=>{const i=[];let r;for(r in pl)pl[r].forEach(o=>{const a=t[o],l=jv(r,o,a);l&&i.push(l)});return i.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),i});return()=>{var i;return Il(t.tag,{class:["v-row",s.value,t.class],style:t.style},(i=n.default)==null?void 0:i.call(n))}}});const qv=B({color:String,...Vr(),...be(),...bl(),...Pr(),...zr(),...Hl(),...Bn(),...ot(),...rt()},"v-sheet"),Gv=Ee()({name:"VSheet",props:qv(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=It(t),{backgroundColorClasses:i,backgroundColorStyles:r}=Ss(Ve(t,"color")),{borderClasses:o}=Or(t),{dimensionStyles:a}=_l(t),{elevationClasses:l}=Fr(t),{locationStyles:u}=qr(t),{positionClasses:c}=Kl(t),{roundedClasses:d}=Un(t);return _e(()=>p(t.tag,{class:["v-sheet",s.value,i.value,o.value,l.value,c.value,d.value,t.class],style:[r.value,a.value,u.value,t.style]},n)),{}}});function xh(t){const{t:e}=Xh();function n(s){let{name:i}=s;const r={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],o=t[`onClick:${i}`],a=o&&r?e(`$vuetify.input.${r}`,t.label??""):void 0;return p(Vt,{icon:t[`${i}Icon`],"aria-label":a,onClick:o},null)}return{InputIcon:n}}const Hv=B({text:String,clickable:Boolean,...be(),...rt()},"v-label"),Kv=Ee()({name:"VLabel",props:Hv(),setup(t,e){let{slots:n}=e;return _e(()=>{var s;return p("label",{class:["v-label",{"v-label--clickable":t.clickable},t.class],style:t.style},[t.text,(s=n.default)==null?void 0:s.call(n)])}),{}}}),Wv=B({floating:Boolean,...be()},"v-field-label"),ps=Ee()({name:"VFieldLabel",props:Wv(),setup(t,e){let{slots:n}=e;return _e(()=>p(Kv,{class:["v-field-label",{"v-field-label--floating":t.floating},t.class],style:t.style,"aria-hidden":t.floating||void 0},n)),{}}}),Nh=B({focused:Boolean,"onUpdate:focused":Lt()},"focus");function Rh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tt();const n=$n(t,"focused"),s=T(()=>({[`${e}--focused`]:n.value}));function i(){n.value=!0}function r(){n.value=!1}return{focusClasses:s,isFocused:n,focus:i,blur:r}}const Qv=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Mh=B({appendInnerIcon:Ye,bgColor:String,clearable:Boolean,clearIcon:{type:Ye,default:"$clear"},active:Boolean,color:String,baseColor:String,dirty:Boolean,disabled:Boolean,error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Ye,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>Qv.includes(t)},"onClick:clear":Lt(),"onClick:appendInner":Lt(),"onClick:prependInner":Lt(),...be(),...ql(),...Bn(),...rt()},"v-field"),Lh=Ee()({name:"VField",inheritAttrs:!1,props:{id:String,...Nh(),...Mh()},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const{themeClasses:r}=It(t),{loaderClasses:o}=Gl(t),{focusClasses:a,isFocused:l,focus:u,blur:c}=Rh(t),{InputIcon:d}=xh(t),{roundedClasses:h}=Un(t),{rtlClasses:f}=Mr(),v=T(()=>t.dirty||t.active),m=T(()=>!t.singleLine&&!!(t.label||i.label)),E=Hs(),b=T(()=>t.id||`input-${E}`),I=T(()=>`${b.value}-messages`),A=Le(),P=Le(),L=Le(),{backgroundColorClasses:Q,backgroundColorStyles:K}=Ss(Ve(t,"bgColor")),{textColorClasses:Y,textColorStyles:N}=jt(T(()=>t.error||t.disabled?void 0:v.value&&l.value?t.color:t.baseColor));ke(v,U=>{if(m.value){const J=A.value.$el,ae=P.value.$el;requestAnimationFrame(()=>{const Te=pd(J),ne=ae.getBoundingClientRect(),Ae=ne.x-Te.x,ct=ne.y-Te.y-(Te.height/2-ne.height/2),ht=ne.width/.75,kt=Math.abs(ht-Te.width)>1?{maxWidth:le(ht)}:void 0,Ii=getComputedStyle(J),on=getComputedStyle(ae),Si=parseFloat(Ii.transitionDuration)*1e3||150,bi=parseFloat(on.getPropertyValue("--v-field-label-scale")),Ph=on.getPropertyValue("color");J.style.visibility="visible",ae.style.visibility="hidden",yd(J,{transform:`translate(${Ae}px, ${ct}px) scale(${bi})`,color:Ph,...kt},{duration:Si,easing:vd,direction:U?"normal":"reverse"}).finished.then(()=>{J.style.removeProperty("visibility"),ae.style.removeProperty("visibility")})})}},{flush:"post"});const q=T(()=>({isActive:v,isFocused:l,controlRef:L,blur:c,focus:u}));function X(U){U.target!==document.activeElement&&U.preventDefault()}return _e(()=>{var Ae,ct,ht;const U=t.variant==="outlined",J=i["prepend-inner"]||t.prependInnerIcon,ae=!!(t.clearable||i.clear),Te=!!(i["append-inner"]||t.appendInnerIcon||ae),ne=i.label?i.label({label:t.label,props:{for:b.value}}):t.label;return p("div",yn({class:["v-field",{"v-field--active":v.value,"v-field--appended":Te,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--flat":t.flat,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":J,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!ne,[`v-field--variant-${t.variant}`]:!0},r.value,Q.value,a.value,o.value,h.value,f.value,t.class],style:[K.value,N.value,t.style],onClick:X},n),[p("div",{class:"v-field__overlay"},null),p(Ud,{name:"v-field",active:!!t.loading,color:t.error?"error":t.color},{default:i.loader}),J&&p("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&p(d,{key:"prepend-icon",name:"prependInner"},null),(Ae=i["prepend-inner"])==null?void 0:Ae.call(i,q.value)]),p("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(t.variant)&&m.value&&p(ps,{key:"floating-label",ref:P,class:[Y.value],floating:!0,for:b.value},{default:()=>[ne]}),p(ps,{ref:A,for:b.value},{default:()=>[ne]}),(ct=i.default)==null?void 0:ct.call(i,{...q.value,props:{id:b.value,class:"v-field__input","aria-describedby":I.value},focus:u,blur:c})]),ae&&p(hd,{key:"clear"},{default:()=>[Tn(p("div",{class:"v-field__clearable",onMousedown:kt=>{kt.preventDefault(),kt.stopPropagation()}},[i.clear?i.clear():p(d,{name:"clear"},null)]),[[Sl,t.dirty]])]}),Te&&p("div",{key:"append",class:"v-field__append-inner"},[(ht=i["append-inner"])==null?void 0:ht.call(i,q.value),t.appendInnerIcon&&p(d,{key:"append-icon",name:"appendInner"},null)]),p("div",{class:["v-field__outline",Y.value]},[U&&p(Mt,null,[p("div",{class:"v-field__outline__start"},null),m.value&&p("div",{class:"v-field__outline__notch"},[p(ps,{ref:P,floating:!0,for:b.value},{default:()=>[ne]})]),p("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(t.variant)&&m.value&&p(ps,{ref:P,floating:!0,for:b.value},{default:()=>[ne]})])])}),{controlRef:L}}});function Xv(t){const e=Object.keys(Lh.props).filter(n=>!Yh(n)&&n!=="class"&&n!=="style");return Jh(t,e)}const Yv=B({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...be(),...Al({transition:{component:kl,leaveAbsolute:!0,group:!0}})},"v-messages"),Jv=Ee()({name:"VMessages",props:Yv(),setup(t,e){let{slots:n}=e;const s=T(()=>pn(t.messages)),{textColorClasses:i,textColorStyles:r}=jt(T(()=>t.color));return _e(()=>p(Dl,{transition:t.transition,tag:"div",class:["v-messages",i.value,t.class],style:[r.value,t.style],role:"alert","aria-live":"polite"},{default:()=>[t.active&&s.value.map((o,a)=>p("div",{class:"v-messages__message",key:`${a}-${s.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),Zv=Symbol.for("vuetify:form");function ew(){return Cl(Zv,null)}const tw=B({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Nh()},"validation");function nw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tt(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Hs();const s=$n(t,"modelValue"),i=T(()=>t.validationValue===void 0?s.value:t.validationValue),r=ew(),o=Le([]),a=Is(!0),l=T(()=>!!(pn(s.value===""?null:s.value).length||pn(i.value===""?null:i.value).length)),u=T(()=>!!(t.disabled||r!=null&&r.isDisabled.value)),c=T(()=>!!(t.readonly||r!=null&&r.isReadonly.value)),d=T(()=>t.errorMessages.length?pn(t.errorMessages).slice(0,Math.max(0,+t.maxErrors)):o.value),h=T(()=>t.error||d.value.length?!1:t.rules.length&&a.value?null:!0),f=Is(!1),v=T(()=>({[`${e}--error`]:h.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:u.value,[`${e}--readonly`]:c.value})),m=T(()=>t.name??Qi(n));Zh(()=>{r==null||r.register({id:m.value,validate:A,reset:b,resetValidation:I})}),Fn(()=>{r==null||r.unregister(m.value)});const E=T(()=>t.validateOn||(r==null?void 0:r.validateOn.value)||"input");Rr(()=>r==null?void 0:r.update(m.value,h.value,d.value)),ta(()=>E.value==="input",()=>{ke(i,()=>{if(i.value!=null)A();else if(t.focused){const P=ke(()=>t.focused,L=>{L||A(),P()})}})}),ta(()=>E.value==="blur",()=>{ke(()=>t.focused,P=>{P||A()})}),ke(h,()=>{r==null||r.update(m.value,h.value,d.value)});function b(){I(),s.value=null}function I(){a.value=!0,o.value=[]}async function A(){const P=[];f.value=!0;for(const L of t.rules){if(P.length>=+(t.maxErrors??1))break;const K=await(typeof L=="function"?L:()=>L)(i.value);if(K!==!0){if(typeof K!="string"){console.warn(`${K} is not a valid value. Rule functions must return boolean true or a string.`);continue}P.push(K)}}return o.value=P,f.value=!1,a.value=!1,o.value}return{errorMessages:d,isDirty:l,isDisabled:u,isReadonly:c,isPristine:a,isValid:h,isValidating:f,reset:b,resetValidation:I,validate:A,validationClasses:v}}const Vh=B({id:String,appendIcon:Ye,prependIcon:Ye,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":Lt(),"onClick:append":Lt(),...be(),...$r(),...tw()},"v-input"),vl=Ee()({name:"VInput",props:{...Vh()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:s,emit:i}=e;const{densityClasses:r}=Br(t),{InputIcon:o}=xh(t),a=Hs(),l=T(()=>t.id||`input-${a}`),u=T(()=>`${l.value}-messages`),{errorMessages:c,isDirty:d,isDisabled:h,isReadonly:f,isPristine:v,isValid:m,isValidating:E,reset:b,resetValidation:I,validate:A,validationClasses:P}=nw(t,"v-input",l),L=T(()=>({id:l,messagesId:u,isDirty:d,isDisabled:h,isReadonly:f,isPristine:v,isValid:m,isValidating:E,reset:b,resetValidation:I,validate:A})),Q=T(()=>c.value.length>0?c.value:t.hint&&(t.persistentHint||t.focused)?t.hint:t.messages);return _e(()=>{var X,U,J,ae;const K=!!(s.prepend||t.prependIcon),Y=!!(s.append||t.appendIcon),N=Q.value.length>0,q=!t.hideDetails||t.hideDetails==="auto"&&(N||!!s.details);return p("div",{class:["v-input",`v-input--${t.direction}`,r.value,P.value,t.class],style:t.style},[K&&p("div",{key:"prepend",class:"v-input__prepend"},[(X=s.prepend)==null?void 0:X.call(s,L.value),t.prependIcon&&p(o,{key:"prepend-icon",name:"prepend"},null)]),s.default&&p("div",{class:"v-input__control"},[(U=s.default)==null?void 0:U.call(s,L.value)]),Y&&p("div",{key:"append",class:"v-input__append"},[t.appendIcon&&p(o,{key:"append-icon",name:"append"},null),(J=s.append)==null?void 0:J.call(s,L.value)]),q&&p("div",{class:"v-input__details"},[p(Jv,{id:u.value,active:N,messages:Q.value},{message:s.message}),(ae=s.details)==null?void 0:ae.call(s,L.value)])])}),{reset:b,resetValidation:I,validate:A}}});const sw=B({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...be(),...Al({transition:{component:kl}})},"v-counter"),iw=Ee()({name:"VCounter",functional:!0,props:sw(),setup(t,e){let{slots:n}=e;const s=T(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return _e(()=>p(Dl,{transition:t.transition},{default:()=>[Tn(p("div",{class:["v-counter",t.class],style:t.style},[n.default?n.default({counter:s.value,max:t.max,value:t.value}):s.value]),[[Sl,t.active]])]})),{}}}),Hi=Symbol("Forwarded refs");function Ki(t,e){let n=t;for(;n;){const s=Reflect.getOwnPropertyDescriptor(n,e);if(s)return s;n=Object.getPrototypeOf(n)}}function rw(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];return t[Hi]=n,new Proxy(t,{get(i,r){if(Reflect.has(i,r))return Reflect.get(i,r);if(!(typeof r=="symbol"||r.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,r)){const a=Reflect.get(o.value,r);return typeof a=="function"?a.bind(o.value):a}}},has(i,r){if(Reflect.has(i,r))return!0;if(typeof r=="symbol"||r.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,r))return!0;return!1},getOwnPropertyDescriptor(i,r){var a;const o=Reflect.getOwnPropertyDescriptor(i,r);if(o)return o;if(!(typeof r=="symbol"||r.startsWith("__"))){for(const l of n){if(!l.value)continue;const u=Ki(l.value,r)??("_"in l.value?Ki((a=l.value._)==null?void 0:a.setupState,r):void 0);if(u)return u}for(const l of n){const u=l.value&&l.value[Hi];if(!u)continue;const c=u.slice();for(;c.length;){const d=c.shift(),h=Ki(d.value,r);if(h)return h;const f=d.value&&d.value[Hi];f&&c.push(...f)}}}}})}const ow=B({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseFloat(t))},maxRows:{type:[Number,String],validator:t=>!isNaN(parseFloat(t))},suffix:String,modelModifiers:Object,...Vh(),...Mh()},"v-textarea"),aw=Ee()({name:"VTextarea",directives:{Intersect:dd},inheritAttrs:!1,props:ow(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const r=$n(t,"modelValue"),{isFocused:o,focus:a,blur:l}=Rh(t),u=T(()=>typeof t.counterValue=="function"?t.counterValue(r.value):(r.value||"").toString().length),c=T(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter});function d(N,q){var X,U;!t.autofocus||!N||(U=(X=q[0].target)==null?void 0:X.focus)==null||U.call(X)}const h=Le(),f=Le(),v=Is(""),m=Le(),E=T(()=>t.persistentPlaceholder||o.value||t.active);function b(){var N;m.value!==document.activeElement&&((N=m.value)==null||N.focus()),o.value||a()}function I(N){b(),s("click:control",N)}function A(N){s("mousedown:control",N)}function P(N){N.stopPropagation(),b(),ys(()=>{r.value="",nd(t["onClick:clear"],N)})}function L(N){var X;const q=N.target;if(r.value=q.value,(X=t.modelModifiers)!=null&&X.trim){const U=[q.selectionStart,q.selectionEnd];ys(()=>{q.selectionStart=U[0],q.selectionEnd=U[1]})}}const Q=Le();function K(){t.autoGrow&&ys(()=>{if(!Q.value||!f.value)return;const N=getComputedStyle(Q.value),q=getComputedStyle(f.value.$el),X=parseFloat(N.getPropertyValue("--v-field-padding-top"))+parseFloat(N.getPropertyValue("--v-input-padding-top"))+parseFloat(N.getPropertyValue("--v-field-padding-bottom")),U=Q.value.scrollHeight,J=parseFloat(N.lineHeight),ae=Math.max(parseFloat(t.rows)*J+X,parseFloat(q.getPropertyValue("--v-input-control-height"))),Te=parseFloat(t.maxRows)*J+X||1/0;v.value=le(sd(U??0,ae,Te))})}Rr(K),ke(r,K),ke(()=>t.rows,K),ke(()=>t.maxRows,K),ke(()=>t.density,K);let Y;return ke(Q,N=>{N?(Y=new ResizeObserver(K),Y.observe(Q.value)):Y==null||Y.disconnect()}),Fn(()=>{Y==null||Y.disconnect()}),_e(()=>{const N=!!(i.counter||t.counter||t.counterValue),q=!!(N||i.details),[X,U]=ed(n),[{modelValue:J,...ae}]=vl.filterProps(t),[Te]=Xv(t);return p(vl,yn({ref:h,modelValue:r.value,"onUpdate:modelValue":ne=>r.value=ne,class:["v-textarea v-text-field",{"v-textarea--prefixed":t.prefix,"v-textarea--suffixed":t.suffix,"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-textarea--auto-grow":t.autoGrow,"v-textarea--no-resize":t.noResize||t.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(t.variant)},t.class],style:t.style},X,ae,{focused:o.value}),{...i,default:ne=>{let{isDisabled:Ae,isDirty:ct,isReadonly:ht,isValid:kt}=ne;return p(Lh,yn({ref:f,style:{"--v-textarea-control-height":v.value},onClick:I,onMousedown:A,"onClick:clear":P,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:"textbox"},Te,{active:E.value||ct.value,dirty:ct.value||t.dirty,disabled:Ae.value,focused:o.value,error:kt.value===!1}),{...i,default:Ii=>{let{props:{class:on,...Si}}=Ii;return p(Mt,null,[t.prefix&&p("span",{class:"v-text-field__prefix"},[t.prefix]),Tn(p("textarea",yn({ref:m,class:on,value:r.value,onInput:L,autofocus:t.autofocus,readonly:ht.value,disabled:Ae.value,placeholder:t.placeholder,rows:t.rows,name:t.name,onFocus:b,onBlur:l},Si,U),null),[[Tl("intersect"),{handler:d},null,{once:!0}]]),t.autoGrow&&Tn(p("textarea",{class:[on,"v-textarea__sizer"],"onUpdate:modelValue":bi=>r.value=bi,ref:Q,readonly:!0,"aria-hidden":"true"},null),[[td,r.value]]),t.suffix&&p("span",{class:"v-text-field__suffix"},[t.suffix])])}})},details:q?ne=>{var Ae;return p(Mt,null,[(Ae=i.details)==null?void 0:Ae.call(i,ne),N&&p(Mt,null,[p("span",null,null),p(iw,{active:t.persistentCounter||o.value,value:u.value,max:c.value},i.counter)])])}:void 0})}),rw({},h,f,m)}}),Ts=rv(Mv,"todos"),lw=vv(Ts,wv("date","desc")),uw={mounted(){console.log(new Date),Av(lw,e=>{const n=[];e.forEach(s=>{const i={id:s.id,content:s.data().content,favorited:s.data().favorited,date:s.data().date};n.push(i)}),this.twoots=n})},name:"CreateTwootPanel",data(){return{newTwootContent:"",newTwootSize:180,twoots:[]}},computed:{newTwootCharacterCount(){return 180-this.newTwootContent.length}},methods:{getDate(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),s=t.getFullYear();return t=s+"/"+n+"/"+e,t},TwootSize(){this.newTwootSize-=this.newTwootContent.length},getColor(t){if(t>21)return"primary";if(t<21&&t>0)return"yellow";if(t<1)return"error"},favoriteTwoot(t){const e=this.twoots.findIndex(n=>n.id===t);Sv(xr(Ts,t),{favorited:!this.twoots[e].favorited})},createNewTwoot(){this.newTwootContent&&(_v(Ts,{content:this.newTwootContent,favorited:!1,date:this.getDate()}),this.newTwootContent="")},deleteTwoot(t){bv(xr(Ts,t))}}},cw={class:"container"},hw={key:0},dw=cn("h4",{class:"font-weight-bold"},"@username",-1);function fw(t,e,n,s,i,r){return un(),is("div",cw,[cn("div",null,[cn("form",{class:"mb-4",onSubmit:e[1]||(e[1]=id((...o)=>r.createNewTwoot&&r.createNewTwoot(...o),["prevent"]))},[p(aw,{label:"What's happenning?","auto-grow":"",rows:"4",modelValue:i.newTwootContent,"onUpdate:modelValue":e[0]||(e[0]=o=>i.newTwootContent=o),flat:"","elevation-0":"",class:"no-border"},null,8,["modelValue"]),p(yl,{justify:"end",align:"center"},{default:Me(()=>[p(ms,{cols:"auto"},{default:Me(()=>[p(Vl,{size:"40","model-value":i.newTwootContent.length*.55555,color:r.getColor(r.newTwootCharacterCount)},{default:Me(()=>[r.newTwootCharacterCount<21?(un(),is("p",hw,rs(r.newTwootCharacterCount),1)):rd("",!0)]),_:1},8,["model-value","color"])]),_:1}),p(ms,{cols:"auto"},{default:Me(()=>[p(ki,{disabled:!i.newTwootContent,type:"submit",rounded:"xl",color:"primary","font-weight-bold":"",size:"x-large"},{default:Me(()=>[od(" Twoot")]),_:1},8,["disabled"])]),_:1})]),_:1})],32)]),(un(!0),is(Mt,null,ad(i.twoots,o=>(un(),is("div",null,[p(Gv,{border:"md",class:"pa-5"},{default:Me(()=>[dw,cn("h4",null,rs(o.date.substr(5,2))+"/"+rs(o.date.substr(8,2)),1),cn("p",null,rs(o.content),1),p(yl,{align:"center",justify:"start"},{default:Me(()=>[p(ms,{cols:"auto"},{default:Me(()=>[p(ki,{icon:"",size:"small",elevation:"0",onClick:a=>r.favoriteTwoot(o.id),class:"scale"},{default:Me(()=>[p(Vt,{icon:o.favorited?"mdi-heart":"mdi-heart-outline",color:o.favorited?"red":"black"},null,8,["icon","color"])]),_:2},1032,["onClick"])]),_:2},1024),p(ms,{cols:"auto"},{default:Me(()=>[p(ki,{icon:"",size:"small",elevation:"0",onClick:a=>r.deleteTwoot(o.id),class:"scale"},{default:Me(()=>[p(Vt,{icon:"mdi-trash-can-outline",size:"small"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),256))])}const gw=Lv(uw,[["render",fw]]),yw={__name:"Home",setup(t){return(e,n)=>(un(),ld(gw))}};export{yw as default};
