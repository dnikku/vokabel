import{d as g,c as u,a as n,b as h,w as c,u as z,F as w,e as l,o as d,R as k,f as x,r as A,S,g as j,h as C,i as v,j as L,k as $,t as m,l as b,m as y,p as N,n as T,q as W,s as D,v as F,x as O}from"./vendor.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();const _=(e,o)=>{const r=e.__vccOpts||e;for(const[a,s]of o)r[a]=s;return r},E={class:"menu"},R={id:"my-content"},U=n("div",null,"Loading...",-1),P=n("div",{id:"my-footer"},[n("span",{id:"my-copywrite"},[l("© 2022 - present "),n("a",{href:"https://github.com/dnikku/vokabel",title:"Source code"},"dnikku")])],-1),B=g({__name:"App",setup(e){return(o,r)=>(d(),u(w,null,[n("div",E,[h(z(k),{class:"menu-link",to:"/"},{default:c(()=>[l("VOKABEL")]),_:1}),h(z(k),{class:"menu-link",to:"/admin"},{default:c(()=>[l("Admin")]),_:1}),h(z(k),{class:"menu-link",to:"/settings"},{default:c(()=>[l("@you")]),_:1})]),n("div",R,[h(z(j),null,{default:c(({Component:a})=>[(d(),x(S,{timeout:"0"},{default:c(()=>[(d(),x(A(a)))]),fallback:c(()=>[U]),_:2},1024))]),_:1})]),P],64))}}),q=C("fetch",()=>{const e=v(!1),o=v(null);async function r(t){e.value=!0;try{let i=s(t);if(i)return i;let f=await fetch(t,{cache:"no-store"});if(f.status!=200)throw new Error(`Fetch ${t} failed (http ${f.status})`);return await f.text()}finally{e.value=!1}}function a(t,i){o.value=[...o.value||[],{matchUrl:t,content:i}]}function s(t){if(!o.value)return null;for(let i of o.value)if(t.match(i.matchUrl))return i.content;throw new Error(`Fetch '${t}' failed (HTTP 404)`)}return{fetching:e,fetchText:r,stubUrl:a}});function Y(e){const o=/\[([^\]]*)]\(([^\)]*)\)/,r=e.match(o);return r?{name:r[1],link:r[2]}:null}function G(e){let o=e.split(/\r?\n/).map(t=>t.trim()).filter(t=>t.length>0),r=o.find(t=>t.startsWith("##")),a=r?r.substring(2).trim():"",s=o.filter(t=>t.startsWith("|")).slice(2).map(t=>t.split("|").map(i=>i.trim()).slice(1)).filter(t=>t.length>0&&t[0].length>0).map(t=>Y(t[0])).filter(t=>t!=null);return{name:a,links:s}}function K(e){let o=e.split(/\r?\n/).map(t=>t.trim()).filter(t=>t.length>0),r=o.find(t=>t.startsWith("##")),a=r?r.substring(2).trim():"",s=o.filter(t=>t.startsWith("|")).slice(2).map(t=>t.split("|").map(i=>i.trim()).slice(1)).filter(t=>t.length>0&&t[0].length>0).map(t=>({text:t[0],text_tr:t.length>1?t[1]:"",ipa:t.length>2?t[2]:"",phrase:t.length>3?t[3]:"",phrase_tr:t.length>4?t[4]:""}));return{name:a,words:s}}const H="https://raw.githubusercontent.com/dnikku/vokabel/main/data",J="https://github.com/dnikku/vokabel/blob/main/data/";function Q(e){return`${J}/${e}`}async function X(e,o){if(e.isIndex){let r=await o(`${H}/${e.link}`),a=G(r);e.name=a.name,e.isFetched=!0;let s=e.link.replace("/index.md","");e.children=a.links.map(t=>({...t,link:`${s}/${t.link}`,isIndex:t.link.endsWith("/index.md"),isFetched:!1}))}else{let r=await o(`${H}/${e.link}`),a=K(r);e.name=a.name?a.name:e.name,e.words=a.words,e.isFetched=!0}}function Z(e){let o=[];function r(a){a.words&&(o=[...o,...a.words]),console.debug(`arr:  :node '${a.link}'`,o);for(let s of a.children||[])r(s)}return r(e),o}function ee(e,o){let r=null;function a(s){if(!r){if(s.link==o){r=s;return}for(let t of s.children||[])a(t)}}return a(e),r}const I=C("markdown",()=>{const e=q(),o=v({name:"",link:"07/index.md",isIndex:!0,isFetched:!1});async function r(s){if(s.isFetched){console.debug(`(fetchNode ${s.link}) => ignored(already fetched)`);return}await X(s,e.fetchText);for(let t of s.children||[])await r(t)}async function a(){return await r(o.value),o.value}return{root:o,getRoot:a,findNode:async s=>ee(await a(),s),getWords:Z,getAbsoluteUrl:Q}}),te=g({name:"MySelf",props:{node:Object},computed:{nodeTyped(){return this.node}}});const ne={class:"level-0"},oe={class:"level-0 level-1"};function se(e,o,r,a,s,t){const i=$("router-link"),f=$("MySelf");return d(),u("div",ne,[h(i,{to:"/words/"+e.nodeTyped.link},{default:c(()=>[l(m(e.nodeTyped.name),1)]),_:1},8,["to"]),n("div",oe,[(d(!0),u(w,null,L(e.nodeTyped.children,M=>(d(),x(f,{node:M},null,8,["node"]))),256))])])}const re=_(te,[["render",se],["__scopeId","data-v-ac2cbc55"]]),le={components:{WordsIndex:re},async setup(){return{root:await I().getRoot()}}};const ae={class:"home"};function ie(e,o,r,a,s,t){const i=$("WordsIndex");return d(),u("div",ae,[h(i,{node:a.root},null,8,["node"])])}const ce=_(le,[["render",ie]]);const de={},ue={class:"about"},he=n("h3",null,"TODO: Admin",-1),_e=n("h3",null,null,-1);function me(e,o){const r=$("router-link");return d(),u("div",ue,[he,_e,n("h3",null,[h(r,{to:"/vue-docs"},{default:c(()=>[l("Vue Docs")]),_:1})])])}const fe=_(de,[["render",me]]);const pe={},ve={class:"about"},ge=n("h3",null,"TODO: Settings",-1),ze=[ge];function $e(e,o){return d(),u("div",ve,ze)}const we=_(pe,[["render",$e]]);const ke={},be={class:"item"},ye={class:"details"};function xe(e,o){return d(),u("div",be,[n("i",null,[b(e.$slots,"icon",{},void 0,!0)]),n("div",ye,[n("h3",null,[b(e.$slots,"heading",{},void 0,!0)]),b(e.$slots,"default",{},void 0,!0)])])}const p=_(ke,[["render",xe],["__scopeId","data-v-2030f585"]]),Ve={},Me={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},He=n("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Ce=[He];function Le(e,o){return d(),u("svg",Me,Ce)}const Ie=_(Ve,[["render",Le]]),Ae={},Se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},je=n("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Ne=[je];function Te(e,o){return d(),u("svg",Se,Ne)}const We=_(Ae,[["render",Te]]),De={},Fe={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},Oe=n("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),Ee=[Oe];function Re(e,o){return d(),u("svg",Fe,Ee)}const Ue=_(De,[["render",Re]]),Pe={},Be={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},qe=n("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Ye=[qe];function Ge(e,o){return d(),u("svg",Be,Ye)}const Ke=_(Pe,[["render",Ge]]),Je={},Qe={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Xe=n("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),Ze=[Xe];function et(e,o){return d(),u("svg",Qe,Ze)}const tt=_(Je,[["render",et]]),nt=n("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),ot=n("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),st=n("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),rt=n("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),lt=n("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),at=n("a",{href:"https://on.cypress.io/component",target:"_blank"},"Cypress Component Testing",-1),it=n("br",null,null,-1),ct=n("code",null,"README.md",-1),dt=n("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),ut=n("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),ht=n("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),_t=n("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),mt=n("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),ft=n("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),pt=n("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),vt=n("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),gt=n("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),zt=n("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),$t=g({__name:"TheWelcome",setup(e){return(o,r)=>(d(),u(w,null,[h(p,null,{icon:c(()=>[h(Ie)]),heading:c(()=>[l("Documentation")]),default:c(()=>[l(" Vue’s "),nt,l(" provides you with all information you need to get started. ")]),_:1}),h(p,null,{icon:c(()=>[h(We)]),heading:c(()=>[l("Tooling")]),default:c(()=>[l(" This project is served and bundled with "),ot,l(". The recommended IDE setup is "),st,l(" + "),rt,l(". If you need to test your components and web pages, check out "),lt,l(" and "),at,l(". "),it,l(" More instructions are available in "),ct,l(". ")]),_:1}),h(p,null,{icon:c(()=>[h(Ue)]),heading:c(()=>[l("Ecosystem")]),default:c(()=>[l(" Get official tools and libraries for your project: "),dt,l(", "),ut,l(", "),ht,l(", and "),_t,l(". If you need more resources, we suggest paying "),mt,l(" a visit. ")]),_:1}),h(p,null,{icon:c(()=>[h(Ke)]),heading:c(()=>[l("Community")]),default:c(()=>[l(" Got stuck? Ask your question on "),ft,l(", our official Discord server, or "),pt,l(". You should also subscribe to "),vt,l(" and follow the official "),gt,l(" twitter account for latest news in the Vue world. ")]),_:1}),h(p,null,{icon:c(()=>[h(tt)]),heading:c(()=>[l("Support Vue")]),default:c(()=>[l(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),zt,l(". ")]),_:1})],64))}}),wt=n("br",null,null,-1),kt=n("a",{href:"https://purecss.io/start/"},"Pure.css",-1),bt=n("br",null,null,-1),yt=n("a",{href:"https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/#flex-basis-7"},"Flexbox",-1),xt=g({__name:"VueDocsView",setup(e){return(o,r)=>(d(),u("main",null,[h($t),wt,kt,bt,yt]))}}),Vt=g({props:{link:String},setup(){const e=I(),o=v("N/A"),r=v(null);return{name:o,words:r,findNode:e.findNode,getWords:e.getWords,getAbsoluteUrl:e.getAbsoluteUrl}},async mounted(){try{let e=await this.findNode(this.link);this.name=(e==null?void 0:e.name)||"N/A",e!=null&&(this.words=this.getWords(e))}catch(e){console.error(`(findNode '${this.link}) => failed(${e})'`)}},methods:{openLink(){let e=this.getAbsoluteUrl(this.link);window.open(e,"_blank").focus()}}});const Mt=e=>(N("data-v-bee2674b"),e=e(),T(),e),Ht={class:"words"},Ct={class:"name"},Lt=["title"],It=Mt(()=>n("thead",null,[n("tr",null,[n("th",null,"Text"),n("th",null,"Translation")])],-1)),At={class:"text"},St={key:0},jt={key:0},Nt={colspan:"2"},Tt={key:1},Wt={colspan:"2"};function Dt(e,o,r,a,s,t){return d(),u("div",Ht,[n("div",Ct,[n("h3",null,m(e.name),1),n("a",{href:"#",onClick:o[0]||(o[0]=(...i)=>e.openLink&&e.openLink(...i)),title:e.link}," open ",8,Lt)]),n("table",null,[It,(d(!0),u(w,null,L(e.words,i=>(d(),u("tbody",null,[n("tr",null,[n("td",At,[l(m(i.text)+" ",1),i.ipa?(d(),u("span",St,"["+m(i.ipa)+"]",1)):y("",!0)]),n("td",null,m(i.text_tr),1)]),i.phrase?(d(),u("tr",jt,[n("td",Nt,m(i.phrase),1)])):y("",!0),i.phrase_tr?(d(),u("tr",Tt,[n("td",Wt,m(i.phrase_tr),1)])):y("",!0)]))),256))])])}const Ft=_(Vt,[["render",Dt],["__scopeId","data-v-bee2674b"]]),Ot=W({history:D("/"),routes:[{path:"/",name:"home",component:ce},{path:"/words/:link(.*)",component:Ft,props:e=>({link:e.params.link})},{path:"/admin",name:"admin",component:fe},{path:"/settings",name:"settings",component:we},{path:"/vue-docs",name:"vue-docs",component:xt}]});const V=F(B);V.use(O());V.use(Ot);V.mount("#app");
