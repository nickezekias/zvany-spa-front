import{B as H,x as V,J as N,e as i,f as d,d as w,N as B,P as C,c as x,l as y,w as g,h as o,t as m,k as P,F as R,j as h,r as b,aU as F,o as T,g as S,a1 as $,M as I,ab as A,i as z,n as _}from"./index-D5Cyua4Z.js";import{s as E}from"./index-DpP2zLcQ.js";var D=function(a){var e=a.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding-block: `).concat(e("textarea.padding.y"),`;
    padding-inline: `).concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(e("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(e("textarea.sm.font.size"),`;
    padding-block: `).concat(e("textarea.sm.padding.y"),`;
    padding-inline: `).concat(e("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(e("textarea.lg.font.size"),`;
    padding-block: `).concat(e("textarea.lg.padding.y"),`;
    padding-inline: `).concat(e("textarea.lg.padding.x"),`;
}
`)},j={root:function(a){var e=a.instance,l=a.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},G=H.extend({name:"textarea",theme:D,classes:j}),O={name:"BaseTextarea",extends:N,props:{autoResize:Boolean},style:G,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},M={name:"Textarea",extends:O,inheritAttrs:!1,observer:null,mounted:function(){var a=this;this.autoResize&&(this.observer=new ResizeObserver(function(){a.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(a){this.autoResize&&this.resize(),this.writeValue(a.target.value,a)}},computed:{attrs:function(){return V(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},q=["value","disabled","aria-invalid"];function J(t,a,e,l,s,n){return i(),d("textarea",V({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:a[0]||(a[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},n.attrs),null,16,q)}M.render=J;const de=["simple","grouped","variable","virtual"],Y={class:"overflow-y-auto"},K={class:"font-bold text-lg"},Q={class:"content"},W={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},X={class:"actions"},Z={class:"flex justify-end"},ee=w({__name:"ImageGrid",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:B(["close","selectedImage"],["update:modelValue"]),setup(t,{emit:a}){const e=a,l=C(t,"modelValue");return(s,n)=>{const c=x("PrimeButton"),v=x("PrimeDialog");return i(),y(v,{class:"p-4",visible:l.value,"onUpdate:visible":n[1]||(n[1]=u=>l.value=u),modal:""},{container:g(()=>[o("div",Y,[o("h3",K,m(s.$t("labels.imageLibrary")),1),o("div",Q,[o("div",W,[(i(),d(R,null,P(5,u=>o("div",{key:u,class:"bg-gray-100 h-64"})),64))])]),o("div",X,[o("div",Z,[h(c,{onClick:n[0]||(n[0]=u=>e("selectedImage")),label:s.$t("labels.save"),size:"large"},null,8,["label"])])])])]),_:1},8,["visible"])}}}),te=["src"],ae={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-64 mx-auto",viewBox:"0 0 24 24"},ne={class:"action-buttons"},oe=w({__name:"NikkAvatarUpload",props:{rounded:{type:Boolean,default:!1},url:{type:String,default:""}},emits:["file-selected","file-cleared"],setup(t,{emit:a}){const e=t,l=a,s=b(!1),n=b(null),c=b(null),v=F(()=>e.rounded?"image-preview--rounded":"image-preview--square");T(()=>{e.url&&(n.value=e.url)});const u=f=>{var k;const p=(k=f.target.files)==null?void 0:k[0];p&&(n.value=URL.createObjectURL(p),l("file-selected",p))},L=()=>{var f;(f=c.value)==null||f.click()},U=()=>{n.value=null,l("file-cleared")};return(f,r)=>(i(),d("div",{class:$(["avatar-upload",v.value])},[o("div",{class:$(["image-preview",v.value])},[n.value?(i(),d("img",{key:0,src:n.value,alt:"Avatar"},null,8,te)):(i(),d("svg",ae,r[2]||(r[2]=[S('<g fill="none" stroke="#d0d7d5" stroke-width="1.5" data-v-d9da12fb><path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.947 1.024.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464c-.897.743-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743c-.897-.743-1.072-1.983-1.422-4.464z" data-v-d9da12fb></path><path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity="0.5" data-v-d9da12fb></path><circle cx="16.5" cy="11.5" r="1.5" opacity="0.5" data-v-d9da12fb></circle><path stroke-linecap="round" d="m20 20l-2.884-2.149c-.93-.692-2.316-.761-3.34-.166l-.266.155c-.712.414-1.68.345-2.294-.164l-3.839-3.177c-.766-.634-1.995-.668-2.81-.078l-1.324.96" opacity="0.5" data-v-d9da12fb></path></g>',1)])))],2),o("div",ne,[o("button",{onClick:L,class:"action-btn",title:"Change photo",type:"button"},r[3]||(r[3]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[o("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92.92L14.06 9.06l1.77 1.77L7.69 20.44H5.92v-1.77zM20.71 7.04a1.004 1.004 0 0 0 0-1.42l-2.34-2.34a1.004 1.004 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"})],-1)])),n.value?(i(),d("button",{key:0,onClick:U,class:"action-btn delete-btn",title:"Delete photo",type:"button"},r[4]||(r[4]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[o("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z"})],-1)]))):I("",!0),o("button",{onClick:r[0]||(r[0]=p=>s.value=!0),class:"action-btn",title:"Change photo with img library",type:"button"},r[5]||(r[5]=[o("i",{class:"pi pi-folder"},null,-1)]))]),o("input",{ref_key:"fileInput",ref:c,type:"file",accept:"image/*",onChange:u,class:"hidden"},null,544),h(ee,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=p=>s.value=p),class:"w-full mx-2 md:mx-0 md:w-8/12"},null,8,["modelValue"])],2))}}),ce=A(oe,[["__scopeId","data-v-d9da12fb"]]),le=["for"],re=["for"],ue=w({__name:"NikkTextArea",props:B({id:{},disabled:{type:Boolean},errorHelpLabel:{},filled:{type:Boolean},hint:{},label:{},literalLabel:{},name:{},readonly:{type:Boolean},rows:{},isError:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=C(t,"modelValue"),e=t;return(l,s)=>{const n=x("PrimeMessage");return i(),d("div",null,[h(z(E),{variant:"on"},{default:g(()=>[h(z(M),{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value=c),class:"w-full border shadow-none",disabled:e.disabled,invalid:e.isError,id:e.id,name:e.name,readonly:e.readonly,rows:e.rows,variant:e.filled?"filled":"outlined"},null,8,["modelValue","disabled","invalid","id","name","readonly","rows","variant"]),e.literalLabel?(i(),d("label",{key:1,for:e.id},m(e.literalLabel),9,re)):(i(),d("label",{key:0,for:e.id},m(l.$t(`${e.label}`)),9,le))]),_:1}),e.isError?(i(),y(n,{key:0,severity:"error",size:"small",variant:"simple"},{default:g(()=>[_(m(l.$t(`${e.errorHelpLabel}`)),1)]),_:1})):!e.isError&&e.hint?(i(),y(n,{key:1,size:"small",severity:"secondary",variant:"simple"},{default:g(()=>[_(m(l.$t(`${e.hint}`)),1)]),_:1})):I("",!0)])}}});export{ce as N,ue as _,de as p};
