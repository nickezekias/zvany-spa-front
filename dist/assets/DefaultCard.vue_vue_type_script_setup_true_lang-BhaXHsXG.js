import{d as n,e,f as o,h as t,t as a}from"./index-BPrxbv2d.js";const i={class:"flex flex-col gap-2 cursor-pointer"},p=["src","alt"],d={key:1,class:"product-img bg-gray-50 h-48"},l={class:"product-tags text-gray-300 text-xs"},m={class:"product-name font-medium"},_={class:"product-price font-bold"},u=n({__name:"DefaultCard",props:{obj:{}},setup(c){const s=c;return(r,g)=>(e(),o("div",i,[s.obj.images&&typeof s.obj.images=="string"&&s.obj.images.length>0?(e(),o("img",{key:0,class:"product-img h-48 object-cover border",src:`${s.obj.images}`,alt:r.$t("labels.productImage")},null,8,p)):(e(),o("div",d)),t("div",l,a(s.obj.categories),1),t("span",m,a(s.obj.name),1),t("span",_,a(s.obj.price),1)]))}});export{u as _};
