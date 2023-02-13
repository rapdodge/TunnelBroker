import{M as Oe,N as U,F as D,O as Z,P as ee,d as $,p as de,Q as H,j as O,R as K,q as me,S as je,o as P,e as E,a,c as ae,w as B,b as j,h as A,L as fe,g as se,T as Ae,i as ie,t as V,H as Fe,U as Ie}from"./app-c69a2d8c.js";function L(e,t,...r){if(e in t){let n=t[e];return typeof n=="function"?n(...r):n}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,L),l}var q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(q||{}),Me=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Me||{});function z({visible:e=!0,features:t=0,ourProps:r,theirProps:l,...n}){var o;let c=we(l,r),s=Object.assign(n,{props:c});if(e||t&2&&c.static)return re(s);if(t&1){let _=(o=c.unmount)==null||o?0:1;return L(_,{[0](){return null},[1](){return re({...n,props:{...c,hidden:!0,style:{display:"none"}}})}})}return re(s)}function re({props:e,attrs:t,slots:r,slot:l,name:n}){var o,c;let{as:s,..._}=Le(e,["unmount","static"]),v=(o=r.default)==null?void 0:o.call(r,l),f={};if(l){let h=!1,w=[];for(let[p,x]of Object.entries(l))typeof x=="boolean"&&(h=!0),x===!0&&w.push(p);h&&(f["data-headlessui-state"]=w.join(" "))}if(s==="template"){if(v=ge(v??[]),Object.keys(_).length>0||Object.keys(t).length>0){let[h,...w]=v??[];if(!Ne(h)||w.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(_).concat(Object.keys(t)).map(b=>b.trim()).filter((b,y,d)=>d.indexOf(b)===y).sort((b,y)=>b.localeCompare(y)).map(b=>`  - ${b}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(b=>`  - ${b}`).join(`
`)].join(`
`));let p=we((c=h.props)!=null?c:{},_),x=Oe(h,p);for(let b in p)b.startsWith("on")&&(x.props||(x.props={}),x.props[b]=p[b]);return x}return Array.isArray(v)&&v.length===1?v[0]:v}return U(s,Object.assign({},_,f),{default:()=>v})}function ge(e){return e.flatMap(t=>t.type===D?ge(t.children):[t])}function we(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let l of e)for(let n in l)n.startsWith("on")&&typeof l[n]=="function"?(r[n]!=null||(r[n]=[]),r[n].push(l[n])):t[n]=l[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(l=>[l,void 0])));for(let l in r)Object.assign(t,{[l](n,...o){let c=r[l];for(let s of c){if(n instanceof Event&&n.defaultPrevented)return;s(n,...o)}}});return t}function Le(e,t=[]){let r=Object.assign({},e);for(let l of t)l in r&&delete r[l];return r}function Ne(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Be=0;function Ce(){return++Be}function W(){return Ce()}var C=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(C||{});function u(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let ye=Symbol("Context");var X=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(X||{});function be(){return Z(ye,null)}function Te(e){ee(ye,e)}function ve(e,t){if(e)return e;let r=t??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function De(e,t){let r=$(ve(e.value.type,e.value.as));return de(()=>{r.value=ve(e.value.type,e.value.as)}),H(()=>{var l;r.value||!u(t)||u(t)instanceof HTMLButtonElement&&!((l=u(t))!=null&&l.hasAttribute("type"))&&(r.value="button")}),r}class He{constructor(){this.current=this.detect(),this.currentId=0}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let te=new He;function Y(e){if(te.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=u(e);if(t)return t.ownerDocument}return document}let ue=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var I=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(I||{}),Q=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Q||{}),Ge=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ge||{});function ne(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ue)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var pe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(pe||{});function xe(e,t=0){var r;return e===((r=Y(e))==null?void 0:r.body)?!1:L(t,{[0](){return e.matches(ue)},[1](){let l=e;for(;l!==null;){if(l.matches(ue))return!0;l=l.parentElement}return!1}})}let Re=["textarea","input"].join(",");function Ue(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Re))!=null?r:!1}function We(e,t=r=>r){return e.slice().sort((r,l)=>{let n=t(r),o=t(l);if(n===null||o===null)return 0;let c=n.compareDocumentPosition(o);return c&Node.DOCUMENT_POSITION_FOLLOWING?-1:c&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function T(e,t,{sorted:r=!0,relativeTo:l=null,skipElements:n=[]}={}){var o;let c=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,s=Array.isArray(e)?r?We(e):e:ne(e);n.length>0&&s.length>1&&(s=s.filter(x=>!n.includes(x))),l=l??c.activeElement;let _=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(l))-1;if(t&4)return Math.max(0,s.indexOf(l))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},h=0,w=s.length,p;do{if(h>=w||h+w<=0)return 0;let x=v+h;if(t&16)x=(x+w)%w;else{if(x<0)return 3;if(x>=w)return 1}p=s[x],p==null||p.focus(f),h+=_}while(p!==c.activeElement);return t&6&&Ue(p)&&p.select(),p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),2}function le(e,t,r){te.isServer||H(l=>{document.addEventListener(e,t,r),l(()=>document.removeEventListener(e,t,r))})}function Ve(e,t,r=O(()=>!0)){function l(o,c){if(!r.value||o.defaultPrevented)return;let s=c(o);if(s===null||!s.getRootNode().contains(s))return;let _=function v(f){return typeof f=="function"?v(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let v of _){if(v===null)continue;let f=v instanceof HTMLElement?v:u(v);if(f!=null&&f.contains(s)||o.composed&&o.composedPath().includes(f))return}return!xe(s,pe.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let n=$(null);le("mousedown",o=>{var c,s;r.value&&(n.value=((s=(c=o.composedPath)==null?void 0:c.call(o))==null?void 0:s[0])||o.target)},!0),le("click",o=>{!n.value||(l(o,()=>n.value),n.value=null)},!0),le("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});let ce=K({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{let{features:l,...n}=e,o={"aria-hidden":(l&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return z({ourProps:o,theirProps:n,slot:{},attrs:r,slots:t,name:"Hidden"})}}});function Ke(e,t,r){te.isServer||H(l=>{window.addEventListener(e,t,r),l(()=>window.removeEventListener(e,t,r))})}var M=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(M||{});function _e(){let e=$(0);return Ke("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function ze(e,t,r,l){te.isServer||H(n=>{e=e??window,e.addEventListener(t,r,l),n(()=>e.removeEventListener(t,r,l))})}var qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qe||{});let Pe=Symbol("PopoverContext");function oe(e){let t=Z(Pe,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <${$e.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,oe),r}return t}let ke=Symbol("PopoverGroupContext");function Se(){return Z(ke,null)}let Ee=Symbol("PopoverPanelContext");function Xe(){return Z(Ee,null)}let $e=K({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:r,expose:l}){var n;let o=$(null);l({el:o,$el:o});let c=$(1),s=$(null),_=$(null),v=$(null),f=$(null),h=O(()=>Y(o)),w=O(()=>{var i,g;if(!u(s)||!u(f))return!1;for(let R of document.querySelectorAll("body > *"))if(Number(R==null?void 0:R.contains(u(s)))^Number(R==null?void 0:R.contains(u(f))))return!0;let m=ne(),k=m.indexOf(u(s)),S=(k+m.length-1)%m.length,N=(k+1)%m.length,F=m[S],G=m[N];return!((i=u(f))!=null&&i.contains(F))&&!((g=u(f))!=null&&g.contains(G))}),p={popoverState:c,buttonId:$(null),panelId:$(null),panel:f,button:s,isPortalled:w,beforePanelSentinel:_,afterPanelSentinel:v,togglePopover(){c.value=L(c.value,{[0]:1,[1]:0})},closePopover(){c.value!==1&&(c.value=1)},close(i){p.closePopover();let g=(()=>i?i instanceof HTMLElement?i:i.value instanceof HTMLElement?u(i):u(p.button):u(p.button))();g==null||g.focus()}};ee(Pe,p),Te(O(()=>L(c.value,{[0]:X.Open,[1]:X.Closed})));let x={buttonId:p.buttonId,panelId:p.panelId,close(){p.closePopover()}},b=Se(),y=b==null?void 0:b.registerPopover;function d(){var i,g,m,k;return(k=b==null?void 0:b.isFocusWithinPopoverGroup())!=null?k:((i=h.value)==null?void 0:i.activeElement)&&(((g=u(s))==null?void 0:g.contains(h.value.activeElement))||((m=u(f))==null?void 0:m.contains(h.value.activeElement)))}return H(()=>y==null?void 0:y(x)),ze((n=h.value)==null?void 0:n.defaultView,"focus",i=>{var g,m;c.value===0&&(d()||!s||!f||i.target!==window&&((g=u(p.beforePanelSentinel))!=null&&g.contains(i.target)||(m=u(p.afterPanelSentinel))!=null&&m.contains(i.target)||p.closePopover()))},!0),Ve([s,f],(i,g)=>{var m;p.closePopover(),xe(g,pe.Loose)||(i.preventDefault(),(m=u(s))==null||m.focus())},O(()=>c.value===0)),()=>{let i={open:c.value===0,close:p.close};return z({theirProps:e,ourProps:{ref:o},slot:i,slots:t,attrs:r,name:"Popover"})}}}),he=K({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${W()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,expose:l}){let n=oe("PopoverButton"),o=O(()=>Y(n.button));l({el:n.button,$el:n.button}),de(()=>{n.buttonId.value=e.id}),me(()=>{n.buttonId.value=null});let c=Se(),s=c==null?void 0:c.closeOthers,_=Xe(),v=O(()=>_===null?!1:_.value===n.panelId.value),f=$(null),h=`headlessui-focus-sentinel-${W()}`;v.value||H(()=>{n.button.value=f.value});let w=De(O(()=>({as:e.as,type:t.type})),f);function p(d){var i,g,m,k,S;if(v.value){if(n.popoverState.value===1)return;switch(d.key){case C.Space:case C.Enter:d.preventDefault(),(g=(i=d.target).click)==null||g.call(i),n.closePopover(),(m=u(n.button))==null||m.focus();break}}else switch(d.key){case C.Space:case C.Enter:d.preventDefault(),d.stopPropagation(),n.popoverState.value===1&&(s==null||s(n.buttonId.value)),n.togglePopover();break;case C.Escape:if(n.popoverState.value!==0)return s==null?void 0:s(n.buttonId.value);if(!u(n.button)||(k=o.value)!=null&&k.activeElement&&!((S=u(n.button))!=null&&S.contains(o.value.activeElement)))return;d.preventDefault(),d.stopPropagation(),n.closePopover();break}}function x(d){v.value||d.key===C.Space&&d.preventDefault()}function b(d){var i,g;e.disabled||(v.value?(n.closePopover(),(i=u(n.button))==null||i.focus()):(d.preventDefault(),d.stopPropagation(),n.popoverState.value===1&&(s==null||s(n.buttonId.value)),n.togglePopover(),(g=u(n.button))==null||g.focus()))}function y(d){d.preventDefault(),d.stopPropagation()}return()=>{let d=n.popoverState.value===0,i={open:d},{id:g,...m}=e,k=v.value?{ref:f,type:w.value,onKeydown:p,onClick:b}:{ref:f,id:g,type:w.value,"aria-expanded":e.disabled?void 0:n.popoverState.value===0,"aria-controls":u(n.panel)?n.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:p,onKeyup:x,onClick:b,onMousedown:y},S=_e();function N(){let F=u(n.panel);if(!F)return;function G(){L(S.value,{[M.Forwards]:()=>T(F,I.First),[M.Backwards]:()=>T(F,I.Last)})===Q.Error&&T(ne().filter(R=>R.dataset.headlessuiFocusGuard!=="true"),L(S.value,{[M.Forwards]:I.Next,[M.Backwards]:I.Previous}),{relativeTo:u(n.button)})}G()}return U(D,[z({ourProps:k,theirProps:{...t,...m},slot:i,attrs:t,slots:r,name:"PopoverButton"}),d&&!v.value&&n.isPortalled.value&&U(ce,{id:h,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:N})])}}});K({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:r}){let l=oe("PopoverOverlay"),n=`headlessui-popover-overlay-${W()}`,o=be(),c=O(()=>o!==null?o.value===X.Open:l.popoverState.value===0);function s(){l.closePopover()}return()=>{let _={open:l.popoverState.value===0};return z({ourProps:{id:n,"aria-hidden":!0,onClick:s},theirProps:e,slot:_,attrs:t,slots:r,features:q.RenderStrategy|q.Static,visible:c.value,name:"PopoverOverlay"})}}});let Ye=K({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${W()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,expose:l}){let{focus:n}=e,o=oe("PopoverPanel"),c=O(()=>Y(o.panel)),s=`headlessui-focus-sentinel-before-${W()}`,_=`headlessui-focus-sentinel-after-${W()}`;l({el:o.panel,$el:o.panel}),de(()=>{o.panelId.value=e.id}),me(()=>{o.panelId.value=null}),ee(Ee,o.panelId),H(()=>{var y,d;if(!n||o.popoverState.value!==0||!o.panel)return;let i=(y=c.value)==null?void 0:y.activeElement;(d=u(o.panel))!=null&&d.contains(i)||T(u(o.panel),I.First)});let v=be(),f=O(()=>v!==null?v.value===X.Open:o.popoverState.value===0);function h(y){var d,i;switch(y.key){case C.Escape:if(o.popoverState.value!==0||!u(o.panel)||c.value&&!((d=u(o.panel))!=null&&d.contains(c.value.activeElement)))return;y.preventDefault(),y.stopPropagation(),o.closePopover(),(i=u(o.button))==null||i.focus();break}}function w(y){var d,i,g,m,k;let S=y.relatedTarget;!S||!u(o.panel)||(d=u(o.panel))!=null&&d.contains(S)||(o.closePopover(),((g=(i=u(o.beforePanelSentinel))==null?void 0:i.contains)!=null&&g.call(i,S)||(k=(m=u(o.afterPanelSentinel))==null?void 0:m.contains)!=null&&k.call(m,S))&&S.focus({preventScroll:!0}))}let p=_e();function x(){let y=u(o.panel);if(!y)return;function d(){L(p.value,{[M.Forwards]:()=>{var i;T(y,I.First)===Q.Error&&((i=u(o.afterPanelSentinel))==null||i.focus())},[M.Backwards]:()=>{var i;(i=u(o.button))==null||i.focus({preventScroll:!0})}})}d()}function b(){let y=u(o.panel);if(!y)return;function d(){L(p.value,{[M.Forwards]:()=>{let i=u(o.button),g=u(o.panel);if(!i)return;let m=ne(),k=m.indexOf(i),S=m.slice(0,k+1),N=[...m.slice(k+1),...S];for(let F of N.slice())if(F.dataset.headlessuiFocusGuard==="true"||g!=null&&g.contains(F)){let G=N.indexOf(F);G!==-1&&N.splice(G,1)}T(N,I.First,{sorted:!1})},[M.Backwards]:()=>{var i;T(y,I.Previous)===Q.Error&&((i=u(o.button))==null||i.focus())}})}d()}return()=>{let y={open:o.popoverState.value===0,close:o.close},{id:d,focus:i,...g}=e,m={ref:o.panel,id:d,onKeydown:h,onFocusout:n&&o.popoverState.value===0?w:void 0,tabIndex:-1};return z({ourProps:m,theirProps:{...t,...g},attrs:t,slot:y,slots:{...r,default:(...k)=>{var S;return[U(D,[f.value&&o.isPortalled.value&&U(ce,{id:s,ref:o.beforePanelSentinel,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:x}),(S=r.default)==null?void 0:S.call(r,...k),f.value&&o.isPortalled.value&&U(ce,{id:_,ref:o.afterPanelSentinel,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:b})])]}},features:q.RenderStrategy|q.Static,visible:f.value,name:"PopoverPanel"})}}}),Qe=K({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:r,expose:l}){let n=$(null),o=je([]),c=O(()=>Y(n));l({el:n,$el:n});function s(h){let w=o.value.indexOf(h);w!==-1&&o.value.splice(w,1)}function _(h){return o.value.push(h),()=>{s(h)}}function v(){var h;let w=c.value;if(!w)return!1;let p=w.activeElement;return(h=u(n))!=null&&h.contains(p)?!0:o.value.some(x=>{var b,y;return((b=w.getElementById(x.buttonId.value))==null?void 0:b.contains(p))||((y=w.getElementById(x.panelId.value))==null?void 0:y.contains(p))})}function f(h){for(let w of o.value)w.buttonId.value!==h&&w.close()}return ee(ke,{registerPopover:_,unregisterPopover:s,isFocusWithinPopoverGroup:v,closeOthers:f}),()=>z({ourProps:{ref:n},theirProps:e,slot:{},attrs:t,slots:r,name:"PopoverGroup"})}});function Je(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Ze(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"})])}function et(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"})])}function tt(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})])}function nt(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"})])}function ot(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})])}function rt(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"})])}function lt(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"})])}function at(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})])}function st(e,t){return P(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const it={class:"mx-auto max-w-7xl px-6"},ut={class:"flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},ct=a("div",{class:"flex justify-start lg:w-0 lg:flex-1"},[a("a",{href:"#"},[a("span",{class:"sr-only"},"Your Company")])],-1),dt={class:"-my-2 -mr-2 md:hidden"},pt=a("span",{class:"sr-only"},"Open menu",-1),ft=a("a",{href:"/",class:"text-base font-medium text-gray-500 hover:text-gray-900"},"Home",-1),vt=a("a",{href:"#",class:"text-base font-medium text-gray-500 hover:text-gray-900"},"Sponsors",-1),ht=a("a",{href:"#",class:"text-base font-medium text-gray-500 hover:text-gray-900"},"Docs",-1),mt={key:0,class:"hidden items-center justify-end md:flex md:flex-1 lg:w-0"},gt={class:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},wt={class:"px-5 pt-5 pb-6"},yt={class:"flex items-center justify-between"},bt=a("div",null,null,-1),xt={class:"-mr-2"},_t=a("span",{class:"sr-only"},"Close menu",-1),Pt={class:"space-y-6 py-6 px-5"},kt={class:"grid grid-cols-2 gap-y-4 gap-x-8"},St=a("a",{href:"#",class:"text-base font-medium text-gray-900 hover:text-gray-700"},"Pricing",-1),Et=a("a",{href:"#",class:"text-base font-medium text-gray-900 hover:text-gray-700"},"Docs",-1),$t=["href"],Ot=a("div",null,[a("a",{href:"#",class:"flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"},"Sign up"),a("p",{class:"mt-6 text-center text-base font-medium text-gray-500"},[se(" Existing customer? "+V(" ")+" "),a("a",{href:"#",class:"text-indigo-600 hover:text-indigo-500"},"Sign in")])],-1),jt={__name:"Header",setup(e){const t=[{name:"Help Center",description:"Get all of your questions answered in our forums or contact support.",href:"#",icon:rt},{name:"Guides",description:"Learn how to maximize our platform to get the most out of it.",href:"#",icon:et},{name:"Events",description:"See what meet-ups and other events we might be planning near you.",href:"#",icon:tt},{name:"Security",description:"Understand how we take your privacy seriously.",href:"#",icon:at}];return(r,l)=>(P(),ae(A($e),{class:"relative bg-white"},{default:B(()=>[a("div",it,[a("div",ut,[ct,a("div",dt,[j(A(he),{class:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},{default:B(()=>[pt,j(A(Je),{class:"h-6 w-6","aria-hidden":"true"})]),_:1})]),j(A(Qe),{as:"nav",class:"hidden space-x-10 md:flex"},{default:B(()=>[ft,vt,ht]),_:1}),(P(),E("div",mt,[j(A(fe),{href:r.route("login"),class:"whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"},{default:B(()=>[se("Log in")]),_:1},8,["href"]),j(A(fe),{href:r.route("register"),class:"ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"},{default:B(()=>[se("Sign up")]),_:1},8,["href"])]))])]),j(Ae,{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:B(()=>[j(A(Ye),{focus:"",class:"absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"},{default:B(()=>[a("div",gt,[a("div",wt,[a("div",yt,[bt,a("div",xt,[j(A(he),{class:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},{default:B(()=>[_t,j(A(st),{class:"h-6 w-6","aria-hidden":"true"})]),_:1})])])]),a("div",Pt,[a("div",kt,[St,Et,(P(),E(D,null,ie(t,n=>a("a",{key:n.name,href:n.href,class:"text-base font-medium text-gray-900 hover:text-gray-700"},V(n.name),9,$t)),64))]),Ot])])]),_:1})]),_:1})]),_:1}))}},At={href:"#",class:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100"},Ft={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900"},It={class:"font-normal text-gray-700"},Mt={__name:"NodeCard",props:{node:Object},setup(e){function t(r){switch(r){case 1:return"Online"}}return(r,l)=>(P(),E("a",At,[a("h5",Ft,V(e.node.title),1),a("p",It,V(t(e.node.status)),1)]))}},Lt={class:"bg-white py-24 sm:py-32 lg:py-40"},Nt={class:"mx-auto max-w-7xl px-6 lg:px-8"},Bt=a("div",{class:"sm:text-center"},[a("h2",{class:"text-lg font-semibold leading-8 text-indigo-600"},"TunnelBroker"),a("p",{class:"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},"A better open source TunnelBroker project"),a("p",{class:"mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"},"An open source, support for multiple access protocols, feature-rich TunnelBroker project.")],-1),Ct={class:"mt-20 max-w-lg sm:mx-auto md:max-w-none"},Tt={class:"grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"},Dt={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"},Ht={class:"sm:min-w-0 sm:flex-1"},Gt={class:"text-lg font-semibold leading-8 text-gray-900"},Rt={class:"mt-2 text-base leading-7 text-gray-600"},Ut={class:"bg-gray-100 py-24 sm:py-32 lg:py-40"},Wt={class:"mx-auto max-w-7xl px-6 lg:px-8"},zt={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,nodes:Array},setup(e){const t=[{name:"Global Nodes",description:"Multiple network nodes around the world for comfortable access to the Internet.",icon:ot},{name:"Fair price",description:`Our free plans are basically enough to satisfy most of our clients.
At the same time we offer paid plans in a very cost effective way`,icon:lt},{name:"Fast network",description:"High-speed network, fast, very fast, ultra-fast access to server nodes",icon:Ze},{name:"Multi-protocol support",description:"We support WireGuard, SIT, GRE, VXLAN, IPIP and other access protocols",icon:nt}];return(r,l)=>(P(),E(D,null,[j(A(Fe),{title:"Welcome"}),j(jt),a("div",Lt,[a("div",Nt,[Bt,a("div",Ct,[a("div",Tt,[(P(),E(D,null,ie(t,n=>a("div",{key:n.name,class:"relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"},[a("div",Dt,[(P(),ae(Ie(n.icon),{class:"h-8 w-8","aria-hidden":"true"}))]),a("div",Ht,[a("p",Gt,V(n.name),1),a("p",Rt,V(n.description),1)])])),64))])])])]),a("div",Ut,[a("div",Wt,[(P(!0),E(D,null,ie(e.nodes,n=>(P(),ae(Mt,{key:n.id,node:n},null,8,["node"]))),128))])])],64))}};export{zt as default};