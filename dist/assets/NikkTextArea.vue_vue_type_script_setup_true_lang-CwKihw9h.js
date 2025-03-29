import{B as M,x as k,J as I,e as l,f as s,d as $,r as m,ah as L,o as H,h as i,g as N,a1 as x,M as z,ab as R,N as U,P as T,c as A,j as b,w as h,i as g,t as p,l as y,n as w}from"./index-DQbvB0nF.js";import{s as E}from"./index-Dl936OYq.js";var F=function(a){var e=a.dt;return`
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
`)},P={root:function(a){var e=a.instance,n=a.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size==="small","p-textarea-lg p-inputfield-lg":n.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},S=M.extend({name:"textarea",theme:F,classes:P}),j={name:"BaseTextarea",extends:I,props:{autoResize:Boolean},style:S,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},_={name:"Textarea",extends:j,inheritAttrs:!1,observer:null,mounted:function(){var a=this;this.autoResize&&(this.observer=new ResizeObserver(function(){a.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(a){this.autoResize&&this.resize(),this.writeValue(a.target.value,a)}},computed:{attrs:function(){return k(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},D=["value","disabled","aria-invalid"];function O(t,a,e,n,o,r){return l(),s("textarea",k({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:a[0]||(a[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,D)}_.render=O;const Z=["simple","grouped","variable","virtual"],q=["src"],J={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-64 mx-auto",viewBox:"0 0 24 24"},Y={class:"action-buttons"},G=$({__name:"NikkAvatarUpload",props:{rounded:{type:Boolean,default:!1},url:{type:String,default:""}},emits:["file-selected","file-cleared"],setup(t,{emit:a}){const e=t,n=a,o=m(null),r=m(null),u=L(()=>e.rounded?"image-preview--rounded":"image-preview--square");H(()=>{e.url&&(o.value=e.url)});const B=c=>{var v;const f=(v=c.target.files)==null?void 0:v[0];f&&(o.value=URL.createObjectURL(f),n("file-selected",f))},C=()=>{var c;(c=r.value)==null||c.click()},V=()=>{o.value=null,n("file-cleared")};return(c,d)=>(l(),s("div",{class:x(["avatar-upload",u.value])},[i("div",{class:x(["image-preview",u.value])},[o.value?(l(),s("img",{key:0,src:o.value,alt:"Avatar"},null,8,q)):(l(),s("svg",J,d[0]||(d[0]=[N('<g fill="none" stroke="#d0d7d5" stroke-width="1.5" data-v-b3d42500><path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.947 1.024.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464c-.897.743-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743c-.897-.743-1.072-1.983-1.422-4.464z" data-v-b3d42500></path><path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity="0.5" data-v-b3d42500></path><circle cx="16.5" cy="11.5" r="1.5" opacity="0.5" data-v-b3d42500></circle><path stroke-linecap="round" d="m20 20l-2.884-2.149c-.93-.692-2.316-.761-3.34-.166l-.266.155c-.712.414-1.68.345-2.294-.164l-3.839-3.177c-.766-.634-1.995-.668-2.81-.078l-1.324.96" opacity="0.5" data-v-b3d42500></path></g>',1)])))],2),i("div",Y,[i("button",{onClick:C,class:"action-btn",title:"Change photo",type:"button"},d[1]||(d[1]=[i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[i("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92.92L14.06 9.06l1.77 1.77L7.69 20.44H5.92v-1.77zM20.71 7.04a1.004 1.004 0 0 0 0-1.42l-2.34-2.34a1.004 1.004 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"})],-1)])),o.value?(l(),s("button",{key:0,onClick:V,class:"action-btn delete-btn",title:"Delete photo",type:"button"},d[2]||(d[2]=[i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[i("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z"})],-1)]))):z("",!0)]),i("input",{ref_key:"fileInput",ref:r,type:"file",accept:"image/*",capture:"environment",onChange:B,class:"hidden"},null,544)],2))}}),ee=R(G,[["__scopeId","data-v-b3d42500"]]),K=["for"],Q=["for"],te=$({__name:"NikkTextArea",props:U({id:{},disabled:{type:Boolean},errorHelpLabel:{},filled:{type:Boolean},hint:{},label:{},literalLabel:{},name:{},readonly:{type:Boolean},rows:{},isError:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=T(t,"modelValue"),e=t;return(n,o)=>{const r=A("PrimeMessage");return l(),s("div",null,[b(g(E),{variant:"on"},{default:h(()=>[b(g(_),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=u=>a.value=u),class:"w-full border shadow-none",disabled:e.disabled,invalid:e.isError,id:e.id,name:e.name,readonly:e.readonly,rows:e.rows,variant:e.filled?"filled":"outlined"},null,8,["modelValue","disabled","invalid","id","name","readonly","rows","variant"]),e.literalLabel?(l(),s("label",{key:1,for:e.id},p(e.literalLabel),9,Q)):(l(),s("label",{key:0,for:e.id},p(n.$t(`${e.label}`)),9,K))]),_:1}),e.isError?(l(),y(r,{key:0,severity:"error",size:"small",variant:"simple"},{default:h(()=>[w(p(n.$t(`${e.errorHelpLabel}`)),1)]),_:1})):!e.isError&&e.hint?(l(),y(r,{key:1,size:"small",severity:"secondary",variant:"simple"},{default:h(()=>[w(p(n.$t(`${e.hint}`)),1)]),_:1})):z("",!0)])}}});export{ee as N,te as _,Z as p};
