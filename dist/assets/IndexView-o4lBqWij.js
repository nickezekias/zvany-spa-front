import{v as rt,e as u,f as p,h as v,x as o,B as y,R as B,S,V as it,W as q,X as G,Y as T,$ as X,a0 as L,l as N,w as b,K as h,L as P,a1 as Y,a2 as V,a3 as W,a4 as ot,a5 as k,C as lt,a6 as ct,M as A,F as U,a7 as ut,y as M,d as Z,u as dt,r as bt,U as j,o as pt,c as _,j as l,t as J,i as m,n as ft}from"./index-CUdbKpy-.js";import{s as ht}from"./index-D-FHRK8s.js";import{_ as vt}from"./AppPageTitle.vue_vue_type_script_setup_true_lang-XQFfaxOd.js";import{_ as C}from"./NikkInputText.vue_vue_type_script_setup_true_lang-CDwJQJel.js";import{_ as mt}from"./NikkSelect.vue_vue_type_script_setup_true_lang-BGmyFhOW.js";import"./index-CVzfU9bk.js";import"./index-DU0dyZH4.js";var Q={name:"ChevronLeftIcon",extends:rt};function gt(a,t,e,s,r,n){return u(),p("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.pti()),t[0]||(t[0]=[v("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}Q.render=gt;var $t={root:function(t){var e=t.instance,s=t.props;return["p-tab",{"p-tab-active":e.active,"p-disabled":s.disabled}]}},yt=y.extend({name:"tab",classes:$t}),Tt={name:"BaseTab",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:yt,provide:function(){return{$pcTab:this,$parentInstance:this}}},tt={name:"Tab",extends:Tt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var e=this.findNextTab(t.currentTarget);e?this.changeFocusedTab(t,e):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var e=this.findPrevTab(t.currentTarget);e?this.changeFocusedTab(t,e):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var e=this.findFirstTab();this.changeFocusedTab(t,e),t.preventDefault()},onEndKey:function(t){var e=this.findLastTab();this.changeFocusedTab(t,e),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=e?t:t.nextElementSibling;return s?B(s,"data-p-disabled")||B(s,"data-pc-section")==="inkbar"?this.findNextTab(s):S(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=e?t:t.previousElementSibling;return s?B(s,"data-p-disabled")||B(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):S(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,e){it(e),this.scrollInView(e)},scrollInView:function(t){var e;t==null||(e=t.scrollIntoView)===null||e===void 0||e.call(t,{block:"nearest"})}},computed:{active:function(){var t;return q((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return o(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:G}};function wt(a,t,e,s,r,n){var i=X("ripple");return a.asChild?h(a.$slots,"default",{key:1,class:Y(a.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):L((u(),N(P(a.as),o({key:0,class:a.cx("root"),onClick:n.onClick},n.attrs),{default:b(function(){return[h(a.$slots,"default")]}),_:3},16,["class","onClick"])),[[i]])}tt.render=wt;var xt={root:"p-tablist",content:function(t){var e=t.instance;return["p-tablist-content",{"p-tablist-viewport":e.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Bt=y.extend({name:"tablist",classes:xt}),kt={name:"BaseTabList",extends:T,props:{},style:Bt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},et={name:"TabList",extends:kt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,e=this.getVisibleButtonWidths(),s=V(t)-e,r=Math.abs(t.scrollLeft),n=s*.8,i=r-n,d=Math.max(i,0);t.scrollLeft=W(t)?-1*d:d},onNextButtonClick:function(){var t=this.$refs.content,e=this.getVisibleButtonWidths(),s=V(t)-e,r=Math.abs(t.scrollLeft),n=s*.8,i=r+n,d=t.scrollWidth-s,c=Math.min(i,d);t.scrollLeft=W(t)?-1*c:c},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,e=t.content,s=t.inkbar,r=t.tabs,n=S(e,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=ot(n)+"px",s.style.top=k(n).top-k(r).top+"px"):(s.style.width=lt(n)+"px",s.style.left=k(n).left-k(r).left+"px")},updateButtonState:function(){var t=this.$refs,e=t.list,s=t.content,r=s.scrollTop,n=s.scrollWidth,i=s.scrollHeight,d=s.offsetWidth,c=s.offsetHeight,g=Math.abs(s.scrollLeft),$=[V(s),ct(s)],w=$[0],x=$[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=e.offsetHeight>=c&&parseInt(r)!==i-x):(this.isPrevButtonEnabled=g!==0,this.isNextButtonEnabled=e.offsetWidth>=d&&parseInt(g)!==n-w)},getVisibleButtonWidths:function(){var t=this.$refs,e=t.prevButton,s=t.nextButton,r=0;return this.showNavigators&&(r=((e==null?void 0:e.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:Q,ChevronRightIcon:ht},directives:{ripple:G}},Ct=["aria-label","tabindex"],Lt=["aria-orientation"],Nt=["aria-label","tabindex"];function Pt(a,t,e,s,r,n){var i=X("ripple");return u(),p("div",o({ref:"list",class:a.cx("root")},a.ptmi("root")),[n.showNavigators&&r.isPrevButtonEnabled?L((u(),p("button",o({key:0,ref:"prevButton",class:a.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},a.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(u(),N(P(n.templates.previcon||"ChevronLeftIcon"),o({"aria-hidden":"true"},a.ptm("prevIcon")),null,16))],16,Ct)),[[i]]):A("",!0),v("div",o({ref:"content",class:a.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},a.ptm("content")),[v("div",o({ref:"tabs",class:a.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},a.ptm("tabList")),[h(a.$slots,"default"),v("span",o({ref:"inkbar",class:a.cx("activeBar"),role:"presentation","aria-hidden":"true"},a.ptm("activeBar")),null,16)],16,Lt)],16),n.showNavigators&&r.isNextButtonEnabled?L((u(),p("button",o({key:1,ref:"nextButton",class:a.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},a.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(u(),N(P(n.templates.nexticon||"ChevronRightIcon"),o({"aria-hidden":"true"},a.ptm("nextIcon")),null,16))],16,Nt)),[[i]]):A("",!0)],16)}et.render=Pt;var Vt={root:function(t){var e=t.instance;return["p-tabpanel",{"p-tabpanel-active":e.active}]}},_t=y.extend({name:"tabpanel",classes:Vt}),St={name:"BaseTabPanel",extends:T,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:_t,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},at={name:"TabPanel",extends:St,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return q((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return o(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function At(a,t,e,s,r,n){var i,d;return n.$pcTabs?(u(),p(U,{key:1},[a.asChild?h(a.$slots,"default",{key:1,class:Y(a.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(u(),p(U,{key:0},[!((i=n.$pcTabs)!==null&&i!==void 0&&i.lazy)||n.active?L((u(),N(P(a.as),o({key:0,class:a.cx("root")},n.attrs),{default:b(function(){return[h(a.$slots,"default")]}),_:3},16,["class"])),[[ut,(d=n.$pcTabs)!==null&&d!==void 0&&d.lazy?!0:n.active]]):A("",!0)],64))],64)):h(a.$slots,"default",{key:0})}at.render=At;var Et={root:"p-tabpanels"},It=y.extend({name:"tabpanels",classes:Et}),Kt={name:"BaseTabPanels",extends:T,props:{},style:It,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},nt={name:"TabPanels",extends:Kt,inheritAttrs:!1};function zt(a,t,e,s,r,n){return u(),p("div",o({class:a.cx("root"),role:"presentation"},a.ptmi("root")),[h(a.$slots,"default")],16)}nt.render=zt;var Ot=function(t){var e=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(e("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(e("tabs.tablist.border.color"),`;
    border-width: `).concat(e("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    inset-block-start: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(e("tabs.nav.button.background"),`;
    color: `).concat(e("tabs.nav.button.color"),`;
    width: `).concat(e("tabs.nav.button.width"),`;
    transition: color `).concat(e("tabs.transition.duration"),", outline-color ").concat(e("tabs.transition.duration"),", box-shadow ").concat(e("tabs.transition.duration"),`;
    box-shadow: `).concat(e("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(e("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.nav.button.focus.ring.width")," ").concat(e("tabs.nav.button.focus.ring.style")," ").concat(e("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(e("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    inset-inline-start: 0;
}

.p-tablist-next-button {
    inset-inline-end: 0;
}

.p-tablist-prev-button:dir(rtl),
.p-tablist-next-button:dir(rtl) {
    transform: rotate(180deg);
}


.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(e("tabs.tab.background"),`;
    border-width: `).concat(e("tabs.tab.border.width"),`;
    border-color: `).concat(e("tabs.tab.border.color"),`;
    color: `).concat(e("tabs.tab.color"),`;
    padding: `).concat(e("tabs.tab.padding"),`;
    font-weight: `).concat(e("tabs.tab.font.weight"),`;
    transition: background `).concat(e("tabs.transition.duration"),", border-color ").concat(e("tabs.transition.duration"),", color ").concat(e("tabs.transition.duration"),", outline-color ").concat(e("tabs.transition.duration"),", box-shadow ").concat(e("tabs.transition.duration"),`;
    margin: `).concat(e("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(e("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.tab.focus.ring.width")," ").concat(e("tabs.tab.focus.ring.style")," ").concat(e("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(e("tabs.tab.hover.background"),`;
    border-color: `).concat(e("tabs.tab.hover.border.color"),`;
    color: `).concat(e("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(e("tabs.tab.active.background"),`;
    border-color: `).concat(e("tabs.tab.active.border.color"),`;
    color: `).concat(e("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(e("tabs.tabpanel.background"),`;
    color: `).concat(e("tabs.tabpanel.color"),`;
    padding: `).concat(e("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(e("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.tabpanel.focus.ring.width")," ").concat(e("tabs.tabpanel.focus.ring.style")," ").concat(e("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: `).concat(e("tabs.active.bar.bottom"),`;
    height: `).concat(e("tabs.active.bar.height"),`;
    background: `).concat(e("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},Ft={root:function(t){var e=t.props;return["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]}},Dt=y.extend({name:"tabs",theme:Ot,classes:Ft}),Ht={name:"BaseTabs",extends:T,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Dt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},st={name:"Tabs",extends:Ht,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||M()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||M()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Rt(a,t,e,s,r,n){return u(),p("div",o({class:a.cx("root")},a.ptmi("root")),[h(a.$slots,"default")],16)}st.render=Rt;const Wt={class:"flex flex-col gap-4"},Ut=Z({__name:"ProfileComponent",setup(a){const t=dt(),e=bt(j.initEmpty());return pt(()=>{t.userModel&&(e.value=t.userModel)}),(s,r)=>{const n=_("PrimeForm"),i=_("PrimeButton"),d=_("PrimeCard");return u(),p("div",Wt,[l(d,{class:"border"},{title:b(()=>[v("span",null,J(s.$t("labels.profileDetails")),1)]),content:b(()=>[v("div",null,[l(n,{initialValues:e.value,class:"flex flex-col gap-5"},{default:b(c=>{var g,$,w,x,E,I,K,z,O,F,D,H,R;return[l(C,{modelValue:e.value.firstName,"onUpdate:modelValue":r[0]||(r[0]=f=>e.value.firstName=f),errorHelpLabel:($=(g=c.firstName)==null?void 0:g.error)==null?void 0:$.message,id:"first-name",isError:(w=c.firstName)==null?void 0:w.invalid,label:"labels.firstName",name:"firstName",type:"text"},null,8,["modelValue","errorHelpLabel","isError"]),l(C,{modelValue:e.value.lastName,"onUpdate:modelValue":r[1]||(r[1]=f=>e.value.lastName=f),errorHelpLabel:(E=(x=c.lastName)==null?void 0:x.error)==null?void 0:E.message,id:"last-name",isError:(I=c.lastName)==null?void 0:I.invalid,label:"labels.lastName",name:"lastName",type:"text"},null,8,["modelValue","errorHelpLabel","isError"]),l(mt,{id:"type",modelValue:e.value.gender,"onUpdate:modelValue":r[2]||(r[2]=f=>e.value.gender=f),"error-help-label":"errors.validation.requiredField","is-error":(K=c.gender)==null?void 0:K.invalid,name:"gender",options:Object.values(m(j).GENDERS),placeholder:"labels.selectGender"},null,8,["modelValue","is-error","options"]),l(C,{modelValue:e.value.email,"onUpdate:modelValue":r[3]||(r[3]=f=>e.value.email=f),errorHelpLabel:(O=(z=c.email)==null?void 0:z.error)==null?void 0:O.message,id:"email",isError:(F=c.email)==null?void 0:F.invalid,label:"labels.email",name:"email",type:"email"},null,8,["modelValue","errorHelpLabel","isError"]),l(C,{modelValue:e.value.phone,"onUpdate:modelValue":r[4]||(r[4]=f=>e.value.phone=f),errorHelpLabel:(H=(D=c.phone)==null?void 0:D.error)==null?void 0:H.message,id:"phone",isError:(R=c.phone)==null?void 0:R.invalid,label:"labels.phone",name:"phone",type:"text"},null,8,["modelValue","errorHelpLabel","isError"])]}),_:1},8,["initialValues"])])]),footer:b(()=>[l(i,{class:"mt-6",fluid:"",type:"submit",label:s.$t("labels.edit")},null,8,["label"])]),_:1})])}}}),Mt={class:"flex flex-col"},jt={class:"nikk-container"},te=Z({__name:"IndexView",setup(a){return(t,e)=>(u(),p("div",Mt,[l(m(st),{value:"0",scrollable:"",class:"min-h-screen"},{default:b(()=>[l(m(et),null,{default:b(()=>[l(m(tt),{class:"ms-4 md:ms-12",value:"0"},{default:b(()=>[ft(J(t.$t("labels.account")),1)]),_:1})]),_:1}),l(m(nt),{class:"p-0"},{default:b(()=>[l(m(at),{value:"0"},{default:b(()=>[v("div",jt,[l(vt,{title:"features.profile.userProfile",subtitle:"features.profile.userProfileDesc"}),l(Ut,{class:"w-full md:w-5/12 lg:w-4/12 md:mx-auto"})])]),_:1})]),_:1})]),_:1})]))}});export{te as default};
