import{s as m}from"./index-U2ik_GpQ.js";import{B as v,x,c as o,e as l,M as g,d as y,N as $,P as z,i as c,w as d,h as p,t as i,l as u,m as f,L as k,k as w}from"./index-DRnyeG6s.js";var B=function(t){var e=t.dt;return`
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
`)},V={root:function(t){var e=t.instance,n=t.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size==="small","p-textarea-lg p-inputfield-lg":n.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},_=v.extend({name:"textarea",theme:B,classes:V}),T={name:"BaseTextarea",extends:g,props:{autoResize:Boolean},style:_,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},h={name:"Textarea",extends:T,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){t.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return x(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},I=["value","disabled","aria-invalid"];function L(a,t,e,n,s,r){return o(),l("textarea",x({class:a.cx("root"),value:a.d_value,disabled:a.disabled,"aria-invalid":a.invalid||void 0,onInput:t[0]||(t[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,I)}h.render=L;const N=["simple","grouped","variable","virtual"],M=["for"],R=["for"],P=y({__name:"NikkTextArea",props:$({id:{},disabled:{type:Boolean},errorHelpLabel:{},filled:{type:Boolean},hint:{},label:{},literalLabel:{},name:{},readonly:{type:Boolean},rows:{},isError:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const t=z(a,"modelValue"),e=a;return(n,s)=>{const r=w("PrimeMessage");return o(),l("div",null,[c(p(m),{variant:"on"},{default:d(()=>[c(p(h),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=b=>t.value=b),class:"w-full border shadow-none",disabled:e.disabled,invalid:e.isError,id:e.id,name:e.name,readonly:e.readonly,rows:e.rows,variant:e.filled?"filled":"outlined"},null,8,["modelValue","disabled","invalid","id","name","readonly","rows","variant"]),e.literalLabel?(o(),l("label",{key:1,for:e.id},i(e.literalLabel),9,R)):(o(),l("label",{key:0,for:e.id},i(n.$t(`${e.label}`)),9,M))]),_:1}),e.isError?(o(),u(r,{key:0,severity:"error",size:"small",variant:"simple"},{default:d(()=>[f(i(n.$t(`${e.errorHelpLabel}`)),1)]),_:1})):!e.isError&&e.hint?(o(),u(r,{key:1,size:"small",severity:"secondary",variant:"simple"},{default:d(()=>[f(i(n.$t(`${e.hint}`)),1)]),_:1})):k("",!0)])}}});export{P as _,N as p};
