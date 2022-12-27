import{d as J,c as A,a as v,b as _,w as S,u as zt,e as b,F as lt,o as k,R as Kt,f as ne,r as Hn,S as Vn,g as Yn,h as K,i as on,j as ht,k as F,l as Wn,m as sn,n as he,t as jt,p as qt,q as Un,s as Qt,v as Bn,x as Gn,y as Xn,z as Kn,A as qn,B as Qn}from"./vendor.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Zn={class:"menu"},Jn={id:"my-content"},ta=v("div",null,"Loading...",-1),ea={id:"my-footer"},na={id:"my-copywrite"},aa={href:"https://github.com/dnikku/vokabel",title:"Source code"},ra=J({__name:"App",setup(t){return(e,n)=>{const a=K("font-icon");return k(),A(lt,null,[v("div",Zn,[_(zt(Kt),{class:"menu-link",to:"/"},{default:S(()=>[_(a,{icon:"fa-solid fa-house"}),b(" VOKABEL")]),_:1}),_(zt(Kt),{class:"menu-link",to:"/admin"},{default:S(()=>[_(a,{icon:"fa-solid fa-gear"}),b(" Admin")]),_:1}),_(zt(Kt),{class:"menu-link",to:"/settings"},{default:S(()=>[_(a,{icon:"fa-solid fa-user"}),b(" me")]),_:1})]),v("div",Jn,[_(zt(Yn),null,{default:S(({Component:r})=>[(k(),ne(Vn,{timeout:"0"},{default:S(()=>[(k(),ne(Hn(r)))]),fallback:S(()=>[ta]),_:2},1024))]),_:1})]),v("div",ea,[v("span",na,[b("© 2022 - present dnikku "),v("a",aa,[_(a,{icon:"fa-brands fa-github"})])])])],64)}}}),ia=on("fetch",()=>{const t=ht(!1),e=ht(null);async function n(i){t.value=!0;try{let o=r(i);if(o)return o;let s=await fetch(i,{cache:"no-store"});if(s.status!=200)throw new Error(`Fetch ${i} failed (http ${s.status})`);return await s.text()}finally{t.value=!1}}function a(i,o){e.value=[...e.value||[],{matchUrl:i,content:o}]}function r(i){if(!e.value)return null;for(let o of e.value)if(i.match(o.matchUrl))return o.content;throw new Error(`Fetch '${i}' failed (HTTP 404)`)}return{fetching:t,fetchText:n,stubUrl:a}});function oa(t){const e=/\[([^\]]*)]\(([^\)]*)\)/,n=t.match(e);return n?{name:n[1],link:n[2]}:null}function sa(t){let e=t.split(/\r?\n/).map(i=>i.trim()).filter(i=>i.length>0),n=e.find(i=>i.startsWith("##")),a=n?n.substring(2).trim():"",r=e.filter(i=>i.startsWith("|")).slice(2).map(i=>i.split("|").map(o=>o.trim()).slice(1)).filter(i=>i.length>0&&i[0].length>0).map(i=>oa(i[0])).filter(i=>i!=null);return{name:a,links:r}}function la(t){let e=t.split(/\r?\n/).map(i=>i.trim()).filter(i=>i.length>0),n=e.find(i=>i.startsWith("##")),a=n?n.substring(2).trim():"",r=e.filter(i=>i.startsWith("|")).slice(2).map(i=>i.split("|").map(o=>o.trim()).slice(1)).filter(i=>i.length>0&&i[0].length>0).map(i=>({text:i[0],text_tr:i.length>1?i[1]:"",ipa:i.length>2?i[2]:"",phrase:i.length>3?i[3]:"",phrase_tr:i.length>4?i[4]:""}));return{name:a,words:r}}function fa(t){var e=[];let n=t.split(/<br\s*\/>/).map(r=>r.trim()).filter(r=>r.length>0);function a(r,i){r=r.trim(),r.length>0&&(i?e.push({bold:!0,text:r}):e.push({text:r}))}for(const r of n){e.length>0&&e.push({br:!0});let i=0;for(;i<r.length;){let o=r.indexOf("*",i);if(o==-1)break;let s=r.indexOf("*",o+1);s==-1&&(s=r.length),i<o-1&&a(r.substring(i,o-1),!1),a(r.substring(o+1,s),!0),i=s+1}i<r.length&&a(r.substring(i,r.length),!1)}return console.debug("result",e),e}const Ee="https://raw.githubusercontent.com/dnikku/vokabel/main/data",ca="https://github.com/dnikku/vokabel/blob/main/data/";function ua(t){return`${ca}/${t}`}async function ma(t,e){if(t.isIndex){let n=await e(`${Ee}/${t.link}`),a=sa(n);t.name=a.name,t.isFetched=!0;let r=t.link.replace("/index.md","");t.children=a.links.map(i=>({...i,link:`${r}/${i.link}`,isIndex:i.link.endsWith("/index.md"),isFetched:!1}))}else{let n=await e(`${Ee}/${t.link}`),a=la(n);t.name=a.name?a.name:t.name,t.words=a.words,t.isFetched=!0}}function da(t){let e=[];function n(a){a.words&&(e=[...e,...a.words]),console.debug(`arr:  :node '${a.link}'`,e);for(let r of a.children||[])n(r)}return n(t),e}function va(t,e){let n=null;function a(r){if(!n){if(r.link==e){n=r;return}for(let i of r.children||[])a(i)}}return a(t),n}const ln=on("markdown",()=>{const t=ia(),e=ht({name:"",link:"07/index.md",isIndex:!0,isFetched:!1});async function n(r){if(r.isFetched){console.debug(`(fetchNode ${r.link}) => ignored(already fetched)`);return}await ma(r,t.fetchText);for(let i of r.children||[])await n(i)}async function a(){return await n(e.value),e.value}return{root:e,getRoot:a,findNode:async r=>va(await a(),r),getWords:da,getAbsoluteUrl:ua}});function Ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ne(Object(n),!0).forEach(function(a){I(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ft(t){return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(t)}function pa(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ha(t,e,n){return e&&$e(t.prototype,e),n&&$e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ge(t,e){return ba(t)||_a(t,e)||fn(t,e)||wa()}function wt(t){return ga(t)||ya(t)||fn(t)||ka()}function ga(t){if(Array.isArray(t))return ae(t)}function ba(t){if(Array.isArray(t))return t}function ya(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _a(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function fn(t,e){if(t){if(typeof t=="string")return ae(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(t,e)}}function ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ka(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Me=function(){},be={},cn={},un=null,mn={mark:Me,measure:Me};try{typeof window<"u"&&(be=window),typeof document<"u"&&(cn=document),typeof MutationObserver<"u"&&(un=MutationObserver),typeof performance<"u"&&(mn=performance)}catch{}var xa=be.navigator||{},Te=xa.userAgent,Le=Te===void 0?"":Te,q=be,z=cn,je=un,St=mn;q.document;var B=!!z.documentElement&&!!z.head&&typeof z.addEventListener=="function"&&typeof z.createElement=="function",dn=~Le.indexOf("MSIE")||~Le.indexOf("Trident/"),Ot,Ct,Pt,It,Et,Y="___FONT_AWESOME___",re=16,vn="fa",pn="svg-inline--fa",nt="data-fa-i2svg",ie="data-fa-pseudo-element",Aa="data-fa-pseudo-element-pending",ye="data-prefix",_e="data-icon",Fe="fontawesome-i2svg",za="async",Sa=["HTML","HEAD","STYLE","SCRIPT"],hn=function(){try{return!0}catch{return!1}}(),x="classic",O="sharp",ke=[x,O];function xt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[x]}})}var gt=xt((Ot={},I(Ot,x,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),I(Ot,O,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ot)),bt=xt((Ct={},I(Ct,x,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),I(Ct,O,{solid:"fass"}),Ct)),yt=xt((Pt={},I(Pt,x,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),I(Pt,O,{fass:"fa-solid"}),Pt)),Oa=xt((It={},I(It,x,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),I(It,O,{"fa-solid":"fass"}),It)),Ca=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,gn="fa-layers-text",Pa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ia=xt((Et={},I(Et,x,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),I(Et,O,{900:"fass"}),Et)),bn=[1,2,3,4,5,6,7,8,9,10],Ea=bn.concat([11,12,13,14,15,16,17,18,19,20]),Na=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_t=new Set;Object.keys(bt[x]).map(_t.add.bind(_t));Object.keys(bt[O]).map(_t.add.bind(_t));var $a=[].concat(ke,wt(_t),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY]).concat(bn.map(function(t){return"".concat(t,"x")})).concat(Ea.map(function(t){return"w-".concat(t)})),dt=q.FontAwesomeConfig||{};function Ma(t){var e=z.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(z&&typeof z.querySelector=="function"){var La=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];La.forEach(function(t){var e=ge(t,2),n=e[0],a=e[1],r=Ta(Ma(n));r!=null&&(dt[a]=r)})}var yn={styleDefault:"solid",familyDefault:"classic",cssPrefix:vn,replacementClass:pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dt.familyPrefix&&(dt.cssPrefix=dt.familyPrefix);var ft=u(u({},yn),dt);ft.autoReplaceSvg||(ft.observeMutations=!1);var m={};Object.keys(yn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(n){ft[t]=n,vt.forEach(function(a){return a(m)})},get:function(){return ft[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){ft.cssPrefix=e,vt.forEach(function(n){return n(m)})},get:function(){return ft.cssPrefix}});q.FontAwesomeConfig=m;var vt=[];function ja(t){return vt.push(t),function(){vt.splice(vt.indexOf(t),1)}}var X=re,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fa(t){if(!(!t||!B)){var e=z.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=z.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return z.head.insertBefore(e,a),t}}var Ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){for(var t=12,e="";t-- >0;)e+=Ra[Math.random()*62|0];return e}function ct(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function we(t){return t.classList?ct(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function _n(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Da(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(_n(t[n]),'" ')},"").trim()}function Yt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function xe(t){return t.size!==V.size||t.x!==V.x||t.y!==V.y||t.rotate!==V.rotate||t.flipX||t.flipY}function Ha(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Va(t){var e=t.transform,n=t.width,a=n===void 0?re:n,r=t.height,i=r===void 0?re:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&dn?l+="translate(".concat(e.x/X-a/2,"em, ").concat(e.y/X-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/X,"em), calc(-50% + ").concat(e.y/X,"em)) "):l+="translate(".concat(e.x/X,"em, ").concat(e.y/X,"em) "),l+="scale(".concat(e.size/X*(e.flipX?-1:1),", ").concat(e.size/X*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Ya=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function kn(){var t=vn,e=pn,n=m.cssPrefix,a=m.replacementClass,r=Ya;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Re=!1;function Zt(){m.autoAddCss&&!Re&&(Fa(kn()),Re=!0)}var Wa={mixout:function(){return{dom:{css:kn,insertCss:Zt}}},hooks:function(){return{beforeDOMElementCreation:function(){Zt()},beforeI2svg:function(){Zt()}}}},W=q||{};W[Y]||(W[Y]={});W[Y].styles||(W[Y].styles={});W[Y].hooks||(W[Y].hooks={});W[Y].shims||(W[Y].shims=[]);var D=W[Y],wn=[],Ua=function t(){z.removeEventListener("DOMContentLoaded",t),Rt=1,wn.map(function(e){return e()})},Rt=!1;B&&(Rt=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),Rt||z.addEventListener("DOMContentLoaded",Ua));function Ba(t){B&&(Rt?setTimeout(t,0):wn.push(t))}function At(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?_n(t):"<".concat(e," ").concat(Da(a),">").concat(i.map(At).join(""),"</").concat(e,">")}function De(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ga=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Jt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Ga(n,r):n,l,c,f;for(a===void 0?(l=1,f=e[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,e[c],c,e);return f};function Xa(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function oe(t){var e=Xa(t);return e.length===1?e[0].toString(16):null}function Ka(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function He(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function se(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=He(e);typeof D.hooks.addPack=="function"&&!r?D.hooks.addPack(t,He(e)):D.styles[t]=u(u({},D.styles[t]||{}),i),t==="fas"&&se("fa",e)}var Nt,$t,Mt,it=D.styles,qa=D.shims,Qa=(Nt={},I(Nt,x,Object.values(yt[x])),I(Nt,O,Object.values(yt[O])),Nt),Ae=null,xn={},An={},zn={},Sn={},On={},Za=($t={},I($t,x,Object.keys(gt[x])),I($t,O,Object.keys(gt[O])),$t);function Ja(t){return~$a.indexOf(t)}function tr(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ja(r)?r:null}var Cn=function(){var e=function(i){return Jt(it,function(o,s,l){return o[l]=Jt(s,i,{}),o},{})};xn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),An=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),On=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in it||m.autoFetchSvg,a=Jt(qa,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});zn=a.names,Sn=a.unicodes,Ae=Wt(m.styleDefault,{family:m.familyDefault})};ja(function(t){Ae=Wt(t.styleDefault,{family:m.familyDefault})});Cn();function ze(t,e){return(xn[t]||{})[e]}function er(t,e){return(An[t]||{})[e]}function et(t,e){return(On[t]||{})[e]}function Pn(t){return zn[t]||{prefix:null,iconName:null}}function nr(t){var e=Sn[t],n=ze("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Q(){return Ae}var Se=function(){return{prefix:null,iconName:null,rest:[]}};function Wt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?x:n,r=gt[a][t],i=bt[a][t]||bt[a][r],o=t in D.styles?t:null;return i||o||null}var Ve=(Mt={},I(Mt,x,Object.keys(yt[x])),I(Mt,O,Object.keys(yt[O])),Mt);function Ut(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},I(e,x,"".concat(m.cssPrefix,"-").concat(x)),I(e,O,"".concat(m.cssPrefix,"-").concat(O)),e),o=null,s=x;(t.includes(i[x])||t.some(function(c){return Ve[x].includes(c)}))&&(s=x),(t.includes(i[O])||t.some(function(c){return Ve[O].includes(c)}))&&(s=O);var l=t.reduce(function(c,f){var d=tr(m.cssPrefix,f);if(it[f]?(f=Qa[s].includes(f)?Oa[s][f]:f,o=f,c.prefix=f):Za[s].indexOf(f)>-1?(o=f,c.prefix=Wt(f,{family:s})):d?c.iconName=d:f!==m.replacementClass&&f!==i[x]&&f!==i[O]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var g=o==="fa"?Pn(c.iconName):{},y=et(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||y||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!it.far&&it.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},Se());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===O&&(it.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=et(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Q()||"fas"),l}var ar=function(){function t(){pa(this,t),this.definitions={}}return ha(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),se(s,o[s]);var l=yt[x][s];l&&se(l,o[s]),Cn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),t}(),Ye=[],ot={},st={},rr=Object.keys(st);function ir(t,e){var n=e.mixoutsTo;return Ye=t,ot={},Object.keys(st).forEach(function(a){rr.indexOf(a)===-1&&delete st[a]}),Ye.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ft(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ot[o]||(ot[o]=[]),ot[o].push(i[o])})}a.provides&&a.provides(st)}),n}function le(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ot[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function at(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=ot[t]||[];r.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return st[t]?st[t].apply(null,e):void 0}function fe(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Q();if(e)return e=et(n,e)||e,De(In.definitions,n,e)||De(D.styles,n,e)}var In=new ar,or=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,at("noAuto")},sr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(at("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ba(function(){fr({autoReplaceSvgRoot:n}),at("watch",e)})}},lr={icon:function(e){if(e===null)return null;if(Ft(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:et(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Wt(e[0]);return{prefix:a,iconName:et(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Ca))){var r=Ut(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Q(),iconName:et(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Q();return{prefix:i,iconName:et(i,e)||e}}}},T={noAuto:or,config:m,dom:sr,parse:lr,library:In,findIconDefinition:fe,toHtml:At},fr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?z:n;(Object.keys(D.styles).length>0||m.autoFetchSvg)&&B&&m.autoReplaceSvg&&T.dom.i2svg({node:a})};function Bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return At(a)})}}),Object.defineProperty(t,"node",{get:function(){if(B){var a=z.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function cr(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(xe(o)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=Yt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ur(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function Oe(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,d=t.extra,g=t.watchable,y=g===void 0?!1:g,E=a.found?a:n,N=E.width,$=E.height,p=r==="fak",h=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(G){return d.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(d.classes).join(" "),w={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat($)})},C=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(N/$*16*.0625,"em")}:{};y&&(w.attributes[nt]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||kt())},children:[l]}),delete w.attributes.title);var P=u(u({},w),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},C),d.styles)}),H=a.found&&n.found?U("generateAbstractMask",P)||{children:[],attributes:{}}:U("generateAbstractIcon",P)||{children:[],attributes:{}},j=H.children,Xt=H.attributes;return P.children=j,P.attributes=Xt,s?ur(P):cr(P)}function We(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[nt]="");var f=u({},o.styles);xe(r)&&(f.transform=Va({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var d=Yt(f);d.length>0&&(c.style=d);var g=[];return g.push({tag:"span",attributes:c,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function mr(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Yt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var te=D.styles;function ce(t){var e=t[0],n=t[1],a=t.slice(4),r=ge(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(tt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(tt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var dr={found:!1,width:512,height:512};function vr(t,e){!hn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ue(t,e){var n=e;return e==="fa"&&m.styleDefault!==null&&(e=Q()),new Promise(function(a,r){if(U("missingIconAbstract"),n==="fa"){var i=Pn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&te[e]&&te[e][t]){var o=te[e][t];return a(ce(o))}vr(t,e),a(u(u({},dr),{},{icon:m.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var Ue=function(){},me=m.measurePerformance&&St&&St.mark&&St.measure?St:{mark:Ue,measure:Ue},mt='FA "6.2.1"',pr=function(e){return me.mark("".concat(mt," ").concat(e," begins")),function(){return En(e)}},En=function(e){me.mark("".concat(mt," ").concat(e," ends")),me.measure("".concat(mt," ").concat(e),"".concat(mt," ").concat(e," begins"),"".concat(mt," ").concat(e," ends"))},Ce={begin:pr,end:En},Tt=function(){};function Be(t){var e=t.getAttribute?t.getAttribute(nt):null;return typeof e=="string"}function hr(t){var e=t.getAttribute?t.getAttribute(ye):null,n=t.getAttribute?t.getAttribute(_e):null;return e&&n}function gr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function br(){if(m.autoReplaceSvg===!0)return Lt.replace;var t=Lt[m.autoReplaceSvg];return t||Lt.replace}function yr(t){return z.createElementNS("http://www.w3.org/2000/svg",t)}function _r(t){return z.createElement(t)}function Nn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?yr:_r:n;if(typeof t=="string")return z.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Nn(o,{ceFn:a}))}),r}function kr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Lt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Nn(r),n)}),n.getAttribute(nt)===null&&m.keepOriginalSource){var a=z.createComment(kr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~we(n).indexOf(m.replacementClass))return Lt.replace(e);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return At(s)}).join(`
`);n.setAttribute(nt,""),n.innerHTML=o}};function Ge(t){t()}function $n(t,e){var n=typeof e=="function"?e:Tt;if(t.length===0)n();else{var a=Ge;m.mutateApproach===za&&(a=q.requestAnimationFrame||Ge),a(function(){var r=br(),i=Ce.begin("mutate");t.map(r),i(),n()})}}var Pe=!1;function Mn(){Pe=!0}function de(){Pe=!1}var Dt=null;function Xe(t){if(je&&m.observeMutations){var e=t.treeCallback,n=e===void 0?Tt:e,a=t.nodeCallback,r=a===void 0?Tt:a,i=t.pseudoElementsCallback,o=i===void 0?Tt:i,s=t.observeMutationsRoot,l=s===void 0?z:s;Dt=new je(function(c){if(!Pe){var f=Q();ct(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Be(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Be(d.target)&&~Na.indexOf(d.attributeName))if(d.attributeName==="class"&&hr(d.target)){var g=Ut(we(d.target)),y=g.prefix,E=g.iconName;d.target.setAttribute(ye,y||f),E&&d.target.setAttribute(_e,E)}else gr(d.target)&&r(d.target)})}}),B&&Dt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wr(){Dt&&Dt.disconnect()}function xr(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ar(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ut(we(t));return r.prefix||(r.prefix=Q()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=er(r.prefix,t.innerText)||ze(r.prefix,oe(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function zr(t){var e=ct(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||kt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Sr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ke(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ar(t),a=n.iconName,r=n.prefix,i=n.rest,o=zr(t),s=le("parseNodeAttributes",{},t),l=e.styleParser?xr(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Or=D.styles;function Tn(t){var e=m.autoReplaceSvg==="nest"?Ke(t,{styleParser:!1}):Ke(t);return~e.extra.classes.indexOf(gn)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var Z=new Set;ke.map(function(t){Z.add("fa-".concat(t))});Object.keys(gt[x]).map(Z.add.bind(Z));Object.keys(gt[O]).map(Z.add.bind(Z));Z=wt(Z);function qe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var n=z.documentElement.classList,a=function(d){return n.add("".concat(Fe,"-").concat(d))},r=function(d){return n.remove("".concat(Fe,"-").concat(d))},i=m.autoFetchSvg?Z:ke.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Or));i.includes("fa")||i.push("fa");var o=[".".concat(gn,":not([").concat(nt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(nt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ct(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Ce.begin("onTree"),c=s.reduce(function(f,d){try{var g=Tn(d);g&&f.push(g)}catch(y){hn||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(g){$n(g,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(g){l(),d(g)})})}function Cr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Tn(t).then(function(n){n&&$n([n],e)})}function Pr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:fe(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:fe(r||{})),t(a,u(u({},n),{},{mask:r}))}}var Ir=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?V:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,g=d===void 0?null:d,y=n.titleId,E=y===void 0?null:y,N=n.classes,$=N===void 0?[]:N,p=n.attributes,h=p===void 0?{}:p,w=n.styles,C=w===void 0?{}:w;if(e){var P=e.prefix,H=e.iconName,j=e.icon;return Bt(u({type:"icon"},e),function(){return at("beforeDOMElementCreation",{iconDefinition:e,params:n}),m.autoA11y&&(g?h["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(E||kt()):(h["aria-hidden"]="true",h.focusable="false")),Oe({icons:{main:ce(j),mask:l?ce(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:H,transform:u(u({},V),r),symbol:o,title:g,maskId:f,titleId:E,extra:{attributes:h,styles:C,classes:$}})})}},Er={mixout:function(){return{icon:Pr(Ir)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qe,n.nodeCallback=Cr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?z:a,i=n.callback,o=i===void 0?function(){}:i;return qe(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,d=a.maskId,g=a.extra;return new Promise(function(y,E){Promise.all([ue(r,s),f.iconName?ue(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var $=ge(N,2),p=$[0],h=$[1];y([n,Oe({icons:{main:p,mask:h},prefix:s,iconName:r,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Yt(s);l.length>0&&(r.style=l);var c;return xe(o)&&(c=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Nr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Bt({type:"layer"},function(){at("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(wt(i)).join(" ")},children:o}]})}}}},$r={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,d=f===void 0?{}:f;return Bt({type:"counter",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:a}),mr({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(wt(s))}})})}}}},Mr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?V:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,d=f===void 0?{}:f,g=a.styles,y=g===void 0?{}:g;return Bt({type:"text",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:a}),We({content:n,transform:u(u({},V),i),title:s,extra:{attributes:d,styles:y,classes:["".concat(m.cssPrefix,"-layers-text")].concat(wt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(dn){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,We({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Tr=new RegExp('"',"ug"),Qe=[1105920,1112319];function Lr(t){var e=t.replace(Tr,""),n=Ka(e,0),a=n>=Qe[0]&&n<=Qe[1],r=e.length===2?e[0]===e[1]:!1;return{value:oe(r?e[0]:e),isSecondary:a||r}}function Ze(t,e){var n="".concat(Aa).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=ct(t.children),o=i.filter(function(j){return j.getAttribute(ie)===e})[0],s=q.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Pa),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?O:x,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?bt[g][l[2].toLowerCase()]:Ia[g][c],E=Lr(d),N=E.value,$=E.isSecondary,p=l[0].startsWith("FontAwesome"),h=ze(y,N),w=h;if(p){var C=nr(N);C.iconName&&C.prefix&&(h=C.iconName,y=C.prefix)}if(h&&!$&&(!o||o.getAttribute(ye)!==y||o.getAttribute(_e)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var P=Sr(),H=P.extra;H.attributes[ie]=e,ue(h,y).then(function(j){var Xt=Oe(u(u({},P),{},{icons:{main:j,mask:Se()},prefix:y,iconName:w,extra:H,watchable:!0})),G=z.createElement("svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=Xt.map(function(Dn){return At(Dn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function jr(t){return Promise.all([Ze(t,"::before"),Ze(t,"::after")])}function Fr(t){return t.parentNode!==document.head&&!~Sa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ie)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Je(t){if(B)return new Promise(function(e,n){var a=ct(t.querySelectorAll("*")).filter(Fr).map(jr),r=Ce.begin("searchPseudoElements");Mn(),Promise.all(a).then(function(){r(),de(),e()}).catch(function(){r(),de(),n()})})}var Rr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Je,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?z:a;m.searchPseudoElements&&Je(r)}}},tn=!1,Dr={mixout:function(){return{dom:{unwatch:function(){Mn(),tn=!0}}}},hooks:function(){return{bootstrap:function(){Xe(le("mutationObserverCallbacks",{}))},noAuto:function(){wr()},watch:function(n){var a=n.observeMutationsRoot;tn?de():Xe(le("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},en=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Hr={mixout:function(){return{parse:{transform:function(n){return en(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=en(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:d,path:g};return{tag:"g",attributes:u({},y.outer),children:[{tag:"g",attributes:u({},y.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),y.path)}]}]}}}},ee={x:0,y:0,width:"100%",height:"100%"};function nn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Vr(t){return t.tag==="g"?t.children:[t]}var Yr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Ut(r.split(" ").map(function(o){return o.trim()})):Se();return i.prefix||(i.prefix=Q()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,g=o.icon,y=Ha({transform:l,containerWidth:d,iconWidth:c}),E={tag:"rect",attributes:u(u({},ee),{},{fill:"white"})},N=f.children?{children:f.children.map(nn)}:{},$={tag:"g",attributes:u({},y.inner),children:[nn(u({tag:f.tag,attributes:u(u({},f.attributes),y.path)},N))]},p={tag:"g",attributes:u({},y.outer),children:[$]},h="mask-".concat(s||kt()),w="clip-".concat(s||kt()),C={tag:"mask",attributes:u(u({},ee),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,p]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Vr(g)},C]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(h,")")},ee)}),{children:a,attributes:r}}}},Wr={provides:function(e){var n=!1;q.matchMedia&&(n=q.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ur={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Br=[Wa,Er,Nr,$r,Mr,Rr,Dr,Hr,Yr,Wr,Ur];ir(Br,{mixoutsTo:T});T.noAuto;var Ln=T.config,rt=T.library;T.dom;var Ht=T.parse;T.findIconDefinition;T.toHtml;var Gr=T.icon;T.layer;var Xr=T.text;T.counter;function an(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?an(Object(n),!0).forEach(function(a){M(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):an(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Vt(t){return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vt(t)}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Kr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function qr(t,e){if(t==null)return{};var n=Kr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ve(t){return Qr(t)||Zr(t)||Jr(t)||ti()}function Qr(t){if(Array.isArray(t))return pe(t)}function Zr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Jr(t,e){if(t){if(typeof t=="string")return pe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pe(t,e)}}function pe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ti(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jn={exports:{}};(function(t){(function(e){var n=function(p,h,w){if(!c(h)||d(h)||g(h)||y(h)||l(h))return h;var C,P=0,H=0;if(f(h))for(C=[],H=h.length;P<H;P++)C.push(n(p,h[P],w));else{C={};for(var j in h)Object.prototype.hasOwnProperty.call(h,j)&&(C[p(j,w)]=n(p,h[j],w))}return C},a=function(p,h){h=h||{};var w=h.separator||"_",C=h.split||/(?=[A-Z])/;return p.split(C).join(w)},r=function(p){return E(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(h,w){return w?w.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},i=function(p){var h=r(p);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(p,h){return a(p,h).toLowerCase()},s=Object.prototype.toString,l=function(p){return typeof p=="function"},c=function(p){return p===Object(p)},f=function(p){return s.call(p)=="[object Array]"},d=function(p){return s.call(p)=="[object Date]"},g=function(p){return s.call(p)=="[object RegExp]"},y=function(p){return s.call(p)=="[object Boolean]"},E=function(p){return p=p-0,p===p},N=function(p,h){var w=h&&"process"in h?h.process:h;return typeof w!="function"?p:function(C,P){return w(C,p,P)}},$={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(p,h){return n(N(r,h),p)},decamelizeKeys:function(p,h){return n(N(o,h),p,h)},pascalizeKeys:function(p,h){return n(N(i,h),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=$:e.humps=$})(ei)})(jn);var ni=jn.exports,ai=["class","style"];function ri(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=ni.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function ii(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ie(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return Ie(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.class=ii(f);break;case"style":l.style=ri(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=qr(n,ai);return sn(t.tag,R(R(R({},e),{},{class:r.class,style:R(R({},r.style),o)},r.attrs),s),a)}var Fn=!1;try{Fn=!0}catch{}function oi(){if(!Fn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function pt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?M({},t,e):{}}function si(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},M(e,"fa-".concat(t.size),t.size!==null),M(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),M(e,"fa-pull-".concat(t.pull),t.pull!==null),M(e,"fa-swap-opacity",t.swapOpacity),M(e,"fa-bounce",t.bounce),M(e,"fa-shake",t.shake),M(e,"fa-beat",t.beat),M(e,"fa-fade",t.fade),M(e,"fa-beat-fade",t.beatFade),M(e,"fa-flash",t.flash),M(e,"fa-spin-pulse",t.spinPulse),M(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function rn(t){if(t&&Vt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ht.icon)return Ht.icon(t);if(t===null)return null;if(Vt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var li=J({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=F(function(){return rn(e.icon)}),i=F(function(){return pt("classes",si(e))}),o=F(function(){return pt("transform",typeof e.transform=="string"?Ht.transform(e.transform):e.transform)}),s=F(function(){return pt("mask",rn(e.mask))}),l=F(function(){return Gr(r.value,R(R(R(R({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});Wn(l,function(f){if(!f)return oi("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=F(function(){return l.value?Ie(l.value.abstract[0],{},a):null});return function(){return c.value}}});J({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=Ln.familyPrefix,i=F(function(){return["".concat(r,"-layers")].concat(ve(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return sn("div",{class:i.value},a.default?a.default():[])}}});J({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=Ln.familyPrefix,i=F(function(){return pt("classes",[].concat(ve(e.counter?["".concat(r,"-layers-counter")]:[]),ve(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=F(function(){return pt("transform",typeof e.transform=="string"?Ht.transform(e.transform):e.transform)}),s=F(function(){var c=Xr(e.value.toString(),R(R({},o.value),i.value)),f=c.abstract;return e.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=F(function(){return Ie(s.value,{},a)});return function(){return l.value}}});var fi={prefix:"fab",iconName:"markdown",icon:[640,512,[],"f60f","M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"]},ci={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ui={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},mi={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},di={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"]},vi={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},pi={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};rt.add(ci);rt.add(fi);rt.add(vi);rt.add(di);rt.add(mi);rt.add(ui);rt.add(pi);const Rn=li,hi=J({name:"MySelf",components:{FontIcon:Rn},props:{node:Object},computed:{nodeTyped(){return this.node}}});const L=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},gi={class:"level-0"},bi={class:"line"},yi={class:"level-0 level-1"};function _i(t,e,n,a,r,i){const o=K("font-icon"),s=K("router-link"),l=K("MySelf");return k(),A("div",gi,[v("div",bi,[_(s,{to:"/words/"+t.nodeTyped.link},{default:S(()=>[_(o,{icon:"fa-solid fa-graduation-cap"}),b(" "+jt(t.nodeTyped.name),1)]),_:1},8,["to"]),_(s,{to:"/words/"+t.nodeTyped.link},{default:S(()=>[_(o,{icon:"fa-solid fa-list"})]),_:1},8,["to"])]),v("div",yi,[(k(!0),A(lt,null,he(t.nodeTyped.children,c=>(k(),ne(l,{node:c},null,8,["node"]))),256))])])}const ki=L(hi,[["render",_i],["__scopeId","data-v-edacd8f1"]]),wi={components:{WordsIndex:ki},async setup(){return{root:await ln().getRoot()}}};const xi={class:"home"};function Ai(t,e,n,a,r,i){const o=K("WordsIndex");return k(),A("div",xi,[_(o,{node:a.root},null,8,["node"])])}const zi=L(wi,[["render",Ai]]);const Si={},Oi={class:"about"},Ci=v("h3",null,"TODO: Admin",-1),Pi=v("h3",null,null,-1);function Ii(t,e){const n=K("router-link");return k(),A("div",Oi,[Ci,Pi,v("h3",null,[_(n,{to:"/vue-docs"},{default:S(()=>[b("Vue Docs")]),_:1})])])}const Ei=L(Si,[["render",Ii]]);const Ni={},$i={class:"about"},Mi=v("h3",null,"TODO: Settings",-1),Ti=[Mi];function Li(t,e){return k(),A("div",$i,Ti)}const ji=L(Ni,[["render",Li]]);const Fi={},Ri={class:"item"},Di={class:"details"};function Hi(t,e){return k(),A("div",Ri,[v("i",null,[qt(t.$slots,"icon",{},void 0,!0)]),v("div",Di,[v("h3",null,[qt(t.$slots,"heading",{},void 0,!0)]),qt(t.$slots,"default",{},void 0,!0)])])}const ut=L(Fi,[["render",Hi],["__scopeId","data-v-2030f585"]]),Vi={},Yi={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Wi=v("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Ui=[Wi];function Bi(t,e){return k(),A("svg",Yi,Ui)}const Gi=L(Vi,[["render",Bi]]),Xi={},Ki={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},qi=v("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Qi=[qi];function Zi(t,e){return k(),A("svg",Ki,Qi)}const Ji=L(Xi,[["render",Zi]]),to={},eo={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},no=v("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),ao=[no];function ro(t,e){return k(),A("svg",eo,ao)}const io=L(to,[["render",ro]]),oo={},so={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},lo=v("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),fo=[lo];function co(t,e){return k(),A("svg",so,fo)}const uo=L(oo,[["render",co]]),mo={},vo={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},po=v("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),ho=[po];function go(t,e){return k(),A("svg",vo,ho)}const bo=L(mo,[["render",go]]),yo=v("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),_o=v("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),ko=v("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),wo=v("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),xo=v("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),Ao=v("a",{href:"https://on.cypress.io/component",target:"_blank"},"Cypress Component Testing",-1),zo=v("br",null,null,-1),So=v("code",null,"README.md",-1),Oo=v("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),Co=v("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Po=v("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),Io=v("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),Eo=v("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),No=v("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),$o=v("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),Mo=v("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),To=v("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),Lo=v("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),jo=J({__name:"TheWelcome",setup(t){return(e,n)=>(k(),A(lt,null,[_(ut,null,{icon:S(()=>[_(Gi)]),heading:S(()=>[b("Documentation")]),default:S(()=>[b(" Vue’s "),yo,b(" provides you with all information you need to get started. ")]),_:1}),_(ut,null,{icon:S(()=>[_(Ji)]),heading:S(()=>[b("Tooling")]),default:S(()=>[b(" This project is served and bundled with "),_o,b(". The recommended IDE setup is "),ko,b(" + "),wo,b(". If you need to test your components and web pages, check out "),xo,b(" and "),Ao,b(". "),zo,b(" More instructions are available in "),So,b(". ")]),_:1}),_(ut,null,{icon:S(()=>[_(io)]),heading:S(()=>[b("Ecosystem")]),default:S(()=>[b(" Get official tools and libraries for your project: "),Oo,b(", "),Co,b(", "),Po,b(", and "),Io,b(". If you need more resources, we suggest paying "),Eo,b(" a visit. ")]),_:1}),_(ut,null,{icon:S(()=>[_(uo)]),heading:S(()=>[b("Community")]),default:S(()=>[b(" Got stuck? Ask your question on "),No,b(", our official Discord server, or "),$o,b(". You should also subscribe to "),Mo,b(" and follow the official "),To,b(" twitter account for latest news in the Vue world. ")]),_:1}),_(ut,null,{icon:S(()=>[_(bo)]),heading:S(()=>[b("Support Vue")]),default:S(()=>[b(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),Lo,b(". ")]),_:1})],64))}}),Fo=v("br",null,null,-1),Ro=v("a",{href:"https://purecss.io/start/"},"Pure.css",-1),Do=v("br",null,null,-1),Ho=v("a",{href:"https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/#flex-basis-7"},"Flexbox",-1),Vo=J({__name:"VueDocsView",setup(t){return(e,n)=>(k(),A("main",null,[_(jo),Fo,Ro,Do,Ho]))}}),Yo={props:{value:String},computed:{textChops(){const t=this.value||"";return fa(t)}}};const Wo={key:0};function Uo(t,e,n,a,r,i){return k(),A("div",null,[(k(!0),A(lt,null,he(i.textChops,o=>(k(),A(lt,null,[o.br?(k(),A("br",Wo)):(k(),A("span",{key:1,class:Un({bold:o.bold})}," "+jt(o.text)+" ",3))],64))),256))])}const Bo=L(Yo,[["render",Uo],["__scopeId","data-v-9cdb74e7"]]),Go=J({components:{DecorateText:Bo},props:{link:String},setup(){const t=ln(),e=ht("N/A"),n=ht(null);return{name:e,words:n,findNode:t.findNode,getWords:t.getWords,getAbsoluteUrl:t.getAbsoluteUrl}},async mounted(){try{let t=await this.findNode(this.link);this.name=(t==null?void 0:t.name)||"N/A",t!=null&&(this.words=this.getWords(t))}catch(t){console.error(`(findNode '${this.link}) => failed(${t})'`)}},methods:{openLink(){let t=this.getAbsoluteUrl(this.link);window.open(t,"_blank").focus()}}});const Xo=t=>(Bn("data-v-aa4b6bd2"),t=t(),Gn(),t),Ko={class:"words"},qo={class:"name"},Qo=["title"],Zo=Xo(()=>v("thead",null,[v("tr",null,[v("th",null,"Text"),v("th",null,"Translation")])],-1)),Jo={class:"text"},ts={key:0},es={key:0},ns={colspan:"2"},as={key:1},rs={colspan:"2"};function is(t,e,n,a,r,i){const o=K("font-icon"),s=K("decorate-text");return k(),A("div",Ko,[v("div",qo,[v("h3",null,jt(t.name),1),v("a",{href:"#",onClick:e[0]||(e[0]=(...l)=>t.openLink&&t.openLink(...l)),title:t.link},[_(o,{icon:"fa-brands fa-markdown",size:"2x"})],8,Qo)]),v("table",null,[Zo,(k(!0),A(lt,null,he(t.words,l=>(k(),A("tbody",null,[v("tr",null,[v("td",Jo,[_(s,{value:l.text},null,8,["value"]),l.ipa?(k(),A("span",ts,"["+jt(l.ipa)+"]",1)):Qt("",!0)]),v("td",null,[_(s,{value:l.text_tr},null,8,["value"])])]),l.phrase?(k(),A("tr",es,[v("td",ns,[_(s,{value:l.phrase},null,8,["value"])])])):Qt("",!0),l.phrase_tr?(k(),A("tr",as,[v("td",rs,[_(s,{value:l.phrase_tr},null,8,["value"])])])):Qt("",!0)]))),256))])])}const os=L(Go,[["render",is],["__scopeId","data-v-aa4b6bd2"]]),ss=Xn({history:Kn("/"),routes:[{path:"/",name:"home",component:zi},{path:"/words/:link(.*)",component:os,props:t=>({link:t.params.link})},{path:"/admin",name:"admin",component:Ei},{path:"/settings",name:"settings",component:ji},{path:"/vue-docs",name:"vue-docs",component:Vo}]});const Gt=qn(ra);Gt.component("font-icon",Rn);Gt.use(Qn());Gt.use(ss);Gt.mount("#app");
