import{c as m,Z as x,R as B,h as r,E as _,g as M}from"./index.7058e7a8.js";const k={xs:18,sm:24,md:32,lg:38,xl:46},j={size:String};function D(e,n=k){return m(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const F=e=>x(B(e)),A=e=>x(e);function q(e,n){return e!==void 0&&e()||n}function G(e,n){if(e!==void 0){const a=e();if(a!=null)return a.slice()}return n}function c(e,n){return e!==void 0?n.concat(e()):n}function H(e,n){return e===void 0?n:n!==void 0?n.concat(e()):e()}function J(e,n,a,l,u,o){n.key=l+u;const s=r(e,n,a);return u===!0?_(s,o()):s}const h="0 0 24 24",b=e=>e,d=e=>`ionicons ${e}`,p={"mdi-":e=>`mdi ${e}`,"icon-":b,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":b,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},S={o_:"-outlined",r_:"-round",s_:"-sharp"},R={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},C=new RegExp("^("+Object.keys(p).join("|")+")"),I=new RegExp("^("+Object.keys(S).join("|")+")"),y=new RegExp("^("+Object.keys(R).join("|")+")"),O=/^[Mm]\s?[-+]?\.?\d/,Q=/^img:/,U=/^svguse:/,P=/^ion-/,V=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var K=F({name:"QIcon",props:{...j,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=M(),l=D(e),u=m(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=m(()=>{let s,t=e.name;if(t==="none"||!t)return{none:!0};if(a.iconMapFn!==null){const i=a.iconMapFn(t);if(i!==void 0)if(i.icon!==void 0){if(t=i.icon,t==="none"||!t)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(O.test(t)===!0){const[i,v=h]=t.split("|");return{svg:!0,viewBox:v,nodes:i.split("&&").map(E=>{const[w,$,z]=E.split("@@");return r("path",{style:$,d:w,transform:z})})}}if(Q.test(t)===!0)return{img:!0,src:t.substring(4)};if(U.test(t)===!0){const[i,v=h]=t.split("|");return{svguse:!0,src:i.substring(7),viewBox:v}}let f=" ";const g=t.match(C);if(g!==null)s=p[g[1]](t);else if(V.test(t)===!0)s=t;else if(P.test(t)===!0)s=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(y.test(t)===!0){s="notranslate material-symbols";const i=t.match(y);i!==null&&(t=t.substring(6),s+=R[i[1]]),f=t}else{s="notranslate material-icons";const i=t.match(I);i!==null&&(t=t.substring(2),s+=S[i[1]]),f=t}return{cls:s,content:f}});return()=>{const s={class:u.value,style:l.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?r(e.tag,s,q(n.default)):o.value.img===!0?r("span",s,c(n.default,[r("img",{src:o.value.src})])):o.value.svg===!0?r("span",s,c(n.default,[r("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?r("span",s,c(n.default,[r("svg",{viewBox:o.value.viewBox},[r("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),r(e.tag,s,c(n.default,[o.value.content])))}}});export{K as Q,G as a,A as b,F as c,J as d,c as e,j as f,D as g,q as h,H as i,k as u};
