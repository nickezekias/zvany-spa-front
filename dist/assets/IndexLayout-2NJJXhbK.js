import{d as _,q as g,g as o,o as d,l as x,w as s,a as t,c as f,k as w,j as e,i as r,a1 as y,t as p,F as B,a8 as C,a9 as $,u as k,p as z,aa as M,ab as N,ac as A}from"./index-BAwMGmj-.js";const L={class:"flex justify-between w-screen h-full px-3"},P={class:"flex flex-col justify-items-center items-center gap-[0.1rem]"},H=["innerHTML"],S=_({__name:"BottomBar",setup(u){const n=g(),l=[{name:"vendors-dashboard",icon:`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .945 0 1.186.123c.211.107.384.28.491.491c.123.24.123.556.123 1.186v2.7a4.5 4.5 0 1 1-9 0m11-11a4.5 4.5 0 1 1 4.5 4.5h-3.214c-.15 0-.224 0-.287-.007a1.125 1.125 0 0 1-.992-.992C13 9.938 13 9.864 13 9.714z"/><path fill="currentColor" d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .349 0 .523-.038.666a1.13 1.13 0 0 1-.796.796C10.023 11 9.85 11 9.5 11h-3A4.5 4.5 0 0 1 2 6.5m11 8c0-.349 0-.523.038-.666c.104-.388.408-.692.796-.796c.143-.038.317-.038.666-.038h3a4.5 4.5 0 1 1-4.5 4.5z" opacity="0.5"/></svg>    `,routeName:"vendors.index",label:"labels.dashboard"},{name:"catalog",icon:`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786l.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096l8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296l-.33.102c-.006 1.27-.883 2.432-2.21 2.776c-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"/><path fill="currentColor" d="m9.564 8.73l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324" opacity="0.5"/></svg>    `,routeName:"vendors.products.index",label:"labels.catalog"},{name:"sales",icon:`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2" opacity="0.5"/><path fill="currentColor" d="M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"/></svg>    `,label:"labels.sales"},{name:"more",icon:`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>    `,label:"labels.more"}];return(c,v)=>{const i=o("PrimeButton"),m=o("router-link");return d(),x(r(C),{class:"app-bottom-bar shadow-none border-0 border-t rounded-none p-0 pb-4 gap-0 bg-white dark:bg-surface-950"},{center:s(()=>[t("div",L,[(d(),f(B,null,w(l,a=>e(m,{key:a.name,to:a.routeName?{name:a.routeName}:"#",class:"py-1"},{default:s(()=>[e(i,{size:"small",class:"py-[0.05rem]",severity:r(n).name==a.routeName?"primary":"secondary",text:"","aria-label":a.name},{default:s(()=>[t("div",P,[t("span",{innerHTML:a.icon},null,8,H),t("span",{class:y(["text-xs",r(n).name==a.routeName?"text-primary":"text-secondary"])},p(c.$t(`${a.label}`)),3)])]),_:2},1032,["severity","aria-label"])]),_:2},1032,["to"])),64))])]),_:1})}}}),T=$(S,[["__scopeId","data-v-85addcb2"]]),j={class:"logo"},V={class:"font-bold text-xl"},q={class:"flex align-items-center items-center gap-2"},F={class:"font-medium text-sm md:text-lg"},I=_({__name:"TopBar",setup(u){const n=k(),l=z();return(c,v)=>{const i=o("router-link"),m=o("PrimeButton"),a=o("PrimeToolbar");return d(),x(a,{class:"py-0 px-4 md:px-[3rem] border-0 border-b rounded-none"},{start:s(()=>[t("div",j,[e(i,{to:"/"},{default:s(()=>[t("span",V,p(r(l).appName),1)]),_:1})])]),center:s(()=>[e(i,{to:{name:"vendors.products.index"},exactActiveClass:"border-b border-primary",class:"hidden md:flex py-2"},{default:s(()=>[e(m,{text:"",plain:"",label:c.$t("labels.product",2)},null,8,["label"])]),_:1})]),end:s(()=>{var h,b;return[t("div",q,[e(M),t("span",F,p((b=(h=r(n).user)==null?void 0:h.business)==null?void 0:b.name),1)])]}),_:1})}}}),D={class:"min-h-screen flex flex-col bg-surface-50 dark:bg-[#121212]"},E={class:"flex flex-grow"},R={class:"flex-grow max-w-screen pb-[100vh] md:pb-32 overflow-x-hidden"},J=_({__name:"IndexLayout",setup(u){return(n,l)=>{const c=o("router-view");return d(),f("div",D,[e(r(N)),e(I),t("div",E,[t("main",R,[e(c)])]),e(A,{class:"mb-32 md:mb-0"}),e(T,{class:"md:hidden"})])}}});export{J as default};
