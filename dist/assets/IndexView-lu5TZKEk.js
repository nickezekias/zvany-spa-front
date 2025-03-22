import{d as h,o as a,c as r,a as e,t as _,u as k,b as j,e as B,r as S,f as P,g as p,h as I,i as x,j as s,w as u,F as w,k as $,l as z}from"./index-BAwMGmj-.js";import{u as D}from"./product.store-BRFkygxF.js";import{N}from"./NikkToast-DqqY_v2-.js";const M={class:"flex flex-col gap-2 cursor-pointer"},V=["src","alt"],A={key:1,class:"product-img bg-gray-50 h-48"},T={class:"product-tags text-gray-300 text-xs"},E={class:"product-name font-medium"},F={class:"product-price font-bold"},C=h({__name:"DefaultCard",props:{obj:{}},setup(v){const n=v;return(o,t)=>(a(),r("div",M,[n.obj.images&&typeof n.obj.images=="string"&&n.obj.images.length>0?(a(),r("img",{key:0,class:"product-img h-48 object-cover border",src:`${n.obj.images}`,alt:o.$t("labels.productImage")},null,8,V)):(a(),r("div",A)),e("div",T,_(n.obj.categories),1),e("span",E,_(n.obj.name),1),e("span",F,_(n.obj.price),1)]))}}),Z={class:"flex flex-col gap-8"},L={class:"px-4"},O={key:0,class:"account border border-primary p-2 border-dashed text-center"},H={class:"font-semibold text-lg uppercase"},q={class:"flex flex-col mt-2 gap-4"},G={key:1,class:"account border border-primary p-2 border-dashed text-center"},J={class:"font-semibold text-lg uppercase"},K={class:"flex justify-center"},Q={class:"px-4"},R={class:"font-semibold mb-4"},U={class:"grid grid-cols-2 gap-2"},W=h({__name:"MobileIndexContent",setup(v){const n=k(),o=D(),{t}=j(),i=B(),d=new N(i,t),c=S(!1);return P(async()=>{c.value=!0;try{await o.getAll()}catch(l){d.httpError(l)}finally{c.value=!1}}),(l,g)=>{var m;const f=p("PrimeButton"),b=p("router-link");return a(),r("div",Z,[g[0]||(g[0]=I('<div class="hero h-64 bg-primary flex justify-center items-center"><div class="hero-content text-center text-white"><div class="max-w-md"><p class="py-6">Best iPhone Deals</p><h1 class="text-5xl font-bold">60% Off</h1></div></div></div>',1)),e("section",L,[x(n).isAuthenticated?(a(),r("div",G,[e("h3",J,_(l.$t("features.products.index.welcomeVendor",{name:(m=x(n).user)==null?void 0:m.fullName})),1),e("div",K,[s(b,{to:"/vendors"},{default:u(()=>[s(f,{icon:"pi pi-th-large",text:"",fluid:"",rounded:"",class:"",label:l.$t("labels.vendorDashboard")},null,8,["label"])]),_:1})])])):(a(),r("div",O,[e("h3",H,_(l.$t("features.products.index.signInForBestExperience")),1),e("div",q,[s(b,{to:"/login"},{default:u(()=>[s(f,{class:"",fluid:"",label:l.$t("labels.login")},null,8,["label"])]),_:1}),s(b,{to:"/register"},{default:u(()=>[s(f,{text:"",class:"",fluid:"",label:l.$t("labels.register")},null,8,["label"])]),_:1})])]))]),e("section",Q,[e("h3",R,_(l.$t("labels.moreToLove")),1),e("div",U,[(a(!0),r(w,null,$(x(o).objects,y=>(a(),z(b,{key:y.id,class:"w-full",to:`/p/${y.id}`},{default:u(()=>[s(C,{obj:y},null,8,["obj"])]),_:2},1032,["to"]))),128))])])])}}}),X={class:"flex gap-8"},Y={class:"w-[14rem]"},ee={class:"auth-card border p-4"},te={key:0,class:"flex justify-between w-full mt-8"},se={key:1,class:"flex justify-center"},le={class:"zen-card relative p-4 py-6 border border-t-0"},oe={class:"flex flex-col items-center h-100 w-100"},ne={class:"flex justify-between w-full mt-8"},ae={class:"some-zen-card relative mt-8 p-4 py-12 border"},re={class:"flex flex-col items-center h-100 w-100"},ie={class:"flex justify-between w-full mt-8"},de={class:"flex-grow"},ce={class:"flex mt-8 justify-between gap-8"},ue={class:"flex flex-col items-center h-100 w-100"},pe={class:"flex justify-between w-full mt-8"},fe=h({__name:"HeroComponent",setup(v){const n=k();return(o,t)=>{const i=p("PrimeButton"),d=p("router-link");return a(),r("div",X,[e("div",Y,[e("div",ee,[t[0]||(t[0]=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"w-24 h-24 mx-auto"},[e("circle",{cx:"12",cy:"6",r:"4",fill:"currentColor"}),e("path",{fill:"currentColor",d:"M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5",opacity:"0.5"})],-1)),x(n).isAuthenticated?(a(),r("div",se,[s(d,{to:"/vendors"},{default:u(()=>[s(i,{icon:"pi pi-th-large",text:"",fluid:"",rounded:"",class:"",label:o.$t("labels.vendorDashboard")},null,8,["label"])]),_:1})])):(a(),r("div",te,[s(d,{to:"/register"},{default:u(()=>[s(i,{rounded:"",class:"",label:o.$t("labels.register")},null,8,["label"])]),_:1}),s(d,{to:"/login"},{default:u(()=>[s(i,{text:"",rounded:"",class:"",label:o.$t("labels.login")},null,8,["label"])]),_:1})]))]),e("div",le,[t[3]||(t[3]=e("div",{class:"absolute top-0 left-0 h-100 w-100 bg-black opacity-45"},null,-1)),e("div",oe,[t[1]||(t[1]=e("span",{class:"font-thin"}," Discover ",-1)),t[2]||(t[2]=e("span",{class:"text-2xl font-bold"}," Zen Shopping ",-1)),e("div",ne,[s(i,{size:"small",rounded:"",severity:"contrast",label:o.$t("labels.shopNow")},null,8,["label"]),s(i,{size:"small",text:"",rounded:"",severity:"contrast",label:o.$t("labels.learnMore")},null,8,["label"])])])]),e("div",ae,[t[6]||(t[6]=e("div",{class:"absolute top-0 left-0 h-100 w-100 bg-black opacity-45"},null,-1)),e("div",re,[t[4]||(t[4]=e("span",{class:"font-thin"}," Discover ",-1)),t[5]||(t[5]=e("span",{class:"text-2xl font-bold"}," Zen Shopping ",-1)),e("div",ie,[s(i,{size:"small",rounded:"",severity:"contrast",label:o.$t("labels.shopNow")},null,8,["label"]),s(i,{size:"small",text:"",rounded:"",severity:"contrast",label:o.$t("labels.learnMore")},null,8,["label"])])])])]),e("div",de,[t[10]||(t[10]=e("div",{id:"app-carousel",class:"min-h-[32rem] flex flex-col justify-center p-8 bg-primary text-white"},[e("div",null,[e("div",{class:"font-light text-4xl"},"iPhone Season"),e("div",{class:"font-bold text-7xl"},"60% Off")])],-1)),e("div",ce,[(a(),r(w,null,$(3,c=>e("div",{key:c,class:"zen-card relative p-4 py-6 w-full border"},[t[9]||(t[9]=e("div",{class:"absolute top-0 left-0 h-100 w-100 bg-black opacity-45"},null,-1)),e("div",ue,[t[7]||(t[7]=e("span",{class:"font-thin"}," Discover ",-1)),t[8]||(t[8]=e("span",{class:"text-2xl font-bold"}," Zen Shopping ",-1)),e("div",pe,[s(i,{size:"small",rounded:"",severity:"contrast",label:o.$t("labels.shopNow")},null,8,["label"]),s(i,{size:"small",text:"",rounded:"",severity:"contrast",label:o.$t("labels.learnMore")},null,8,["label"])])])])),64))])])])}}}),be={class:"flex flex-col gap-24 px-12 lg:px-24 py-16"},me={class:"flex gap-8 product-section"},_e={class:"min-w-[14rem] max-w-[14rem]"},ve={class:"zvany-vintage-card p-4 py-6 border"},xe={class:"flex flex-col items-center h-100 w-100"},he={class:"flex justify-between w-full mt-8"},ge={class:"flex-grow"},ye={class:"grid grid-cols-4 gap-6"},we=h({__name:"DesktopIndexContent",setup(v){const n=D(),{t:o}=j(),t=B(),i=new N(t,o),d=S(!1);return P(async()=>{d.value=!0;try{await n.getAll()}catch(c){i.httpError(c)}finally{d.value=!1}}),(c,l)=>{const g=p("PrimeButton"),f=p("PrimeDivider"),b=p("router-link");return a(),r("div",be,[s(fe),e("div",me,[e("div",_e,[e("div",ve,[l[3]||(l[3]=e("div",{class:"absolute top-0 left-0 h-100 w-100 bg-black opacity-45"},null,-1)),e("div",xe,[l[0]||(l[0]=e("span",{class:"text-2xl font-bold"}," Zvany Vinted ",-1)),l[1]||(l[1]=e("div",{class:"flex justify-center items-center p-8 rounded-full mt-6 bg-green-500"},[e("span",{class:"pi pi-camera text-6xl text-white"})],-1)),l[2]||(l[2]=e("span",{class:"mt-4 font-light text-center"}," Buy and sell your used items here ",-1)),e("div",he,[s(g,{size:"small",rounded:"",severity:"contrast",label:c.$t("labels.shopNow"),fluid:""},null,8,["label"])])])])]),e("div",ge,[s(f,{class:"mt-0"}),l[4]||(l[4]=e("h3",{class:"text-xl font-medium mb-4"},"Featured Phones",-1)),e("div",ye,[(a(!0),r(w,null,$(x(n).objects,m=>(a(),z(b,{key:m.id,class:"w-full",to:`/p/${m.id}`},{default:u(()=>[s(C,{obj:m},null,8,["obj"])]),_:2},1032,["to"]))),128))]),s(f,{class:"mb-0"})])])])}}}),Be=h({__name:"IndexView",setup(v){return(n,o)=>(a(),r("div",null,[s(W,{class:"md:hidden"}),s(we,{class:"hidden md:flex"})]))}});export{Be as default};
