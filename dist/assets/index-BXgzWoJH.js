import{l as P,o as l,c as u,h as b,m as r,B as p,as as v,ah as w,L as R,an as S,a9 as N,Y as h,_ as I,$,D as m,w as K,A as d,E as y,a1 as V,af as T,at as C,au as D,av as g,v as W,ag as H,F as x,a0 as L,aw as _,n as A}from"./index-BZJQ1lxK.js";var z={name:"ChevronRightIcon",extends:P};function U(e,t,n,s,i,a){return l(),u("svg",r({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[b("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}z.render=U;var O={name:"ChevronLeftIcon",extends:P};function M(e,t,n,s,i,a){return l(),u("svg",r({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[b("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}O.render=M;var j={root:function(t){var n=t.instance,s=t.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":s.disabled}]}},q=p.extend({name:"tab",classes:j}),Z={name:"BaseTab",extends:h,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:q,provide:function(){return{$pcTab:this,$parentInstance:this}}},Y={name:"Tab",extends:Z,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var n=this.findNextTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var n=this.findPrevTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstTab();this.changeFocusedTab(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastTab();this.changeFocusedTab(t,n),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?t:t.nextElementSibling;return s?v(s,"data-p-disabled")||v(s,"data-pc-section")==="inkbar"?this.findNextTab(s):w(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?t:t.previousElementSibling;return s?v(s,"data-p-disabled")||v(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):w(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,n){R(n),this.scrollInView(n)},scrollInView:function(t){var n;t==null||(n=t.scrollIntoView)===null||n===void 0||n.call(t,{block:"nearest"})}},computed:{active:function(){var t;return S((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:N}};function G(e,t,n,s,i,a){var o=I("ripple");return e.asChild?d(e.$slots,"default",{key:1,class:V(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):$((l(),m(y(e.as),r({key:0,class:e.cx("root"),onClick:a.onClick},a.attrs),{default:K(function(){return[d(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[o]])}Y.render=G;var J={root:"p-tablist",content:function(t){var n=t.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Q=p.extend({name:"tablist",classes:J}),X={name:"BaseTabList",extends:h,props:{},style:Q,provide:function(){return{$pcTabList:this,$parentInstance:this}}},tt={name:"TabList",extends:X,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),s=T(t)-n,i=Math.abs(t.scrollLeft),a=s*.8,o=i-a,c=Math.max(o,0);t.scrollLeft=C(t)?-1*c:c},onNextButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),s=T(t)-n,i=Math.abs(t.scrollLeft),a=s*.8,o=i+a,c=t.scrollWidth-s,f=Math.min(o,c);t.scrollLeft=C(t)?-1*f:f},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,n=t.content,s=t.inkbar,i=t.tabs,a=w(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=D(a)+"px",s.style.top=g(a).top-g(i).top+"px"):(s.style.width=W(a)+"px",s.style.left=g(a).left-g(i).left+"px")},updateButtonState:function(){var t=this.$refs,n=t.list,s=t.content,i=s.scrollTop,a=s.scrollWidth,o=s.scrollHeight,c=s.offsetWidth,f=s.offsetHeight,B=Math.abs(s.scrollLeft),k=[T(s),H(s)],E=k[0],F=k[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=n.offsetHeight>=f&&parseInt(i)!==o-F):(this.isPrevButtonEnabled=B!==0,this.isNextButtonEnabled=n.offsetWidth>=c&&parseInt(B)!==a-E)},getVisibleButtonWidths:function(){var t=this.$refs,n=t.prevButton,s=t.nextButton,i=0;return this.showNavigators&&(i=((n==null?void 0:n.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),i}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:O,ChevronRightIcon:z},directives:{ripple:N}},et=["aria-label","tabindex"],nt=["aria-orientation"],at=["aria-label","tabindex"];function st(e,t,n,s,i,a){var o=I("ripple");return l(),u("div",r({ref:"list",class:e.cx("root")},e.ptmi("root")),[a.showNavigators&&i.isPrevButtonEnabled?$((l(),u("button",r({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(l(),m(y(a.templates.previcon||"ChevronLeftIcon"),r({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,et)),[[o]]):x("",!0),b("div",r({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)})},e.ptm("content")),[b("div",r({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[d(e.$slots,"default"),b("span",r({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,nt)],16),a.showNavigators&&i.isNextButtonEnabled?$((l(),u("button",r({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(l(),m(y(a.templates.nexticon||"ChevronRightIcon"),r({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,at)),[[o]]):x("",!0)],16)}tt.render=st;var it={root:function(t){var n=t.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},rt=p.extend({name:"tabpanel",classes:it}),ot={name:"BaseTabPanel",extends:h,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:rt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},lt={name:"TabPanel",extends:ot,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return S((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ct(e,t,n,s,i,a){var o,c;return a.$pcTabs?(l(),u(L,{key:1},[e.asChild?d(e.$slots,"default",{key:1,class:V(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(l(),u(L,{key:0},[!((o=a.$pcTabs)!==null&&o!==void 0&&o.lazy)||a.active?$((l(),m(y(e.as),r({key:0,class:e.cx("root")},a.attrs),{default:K(function(){return[d(e.$slots,"default")]}),_:3},16,["class"])),[[_,(c=a.$pcTabs)!==null&&c!==void 0&&c.lazy?!0:a.active]]):x("",!0)],64))],64)):d(e.$slots,"default",{key:0})}lt.render=ct;var ut={root:"p-tabpanels"},dt=p.extend({name:"tabpanels",classes:ut}),bt={name:"BaseTabPanels",extends:h,props:{},style:dt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},pt={name:"TabPanels",extends:bt,inheritAttrs:!1};function ht(e,t,n,s,i,a){return l(),u("div",r({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[d(e.$slots,"default")],16)}pt.render=ht;var ft=function(t){var n=t.dt;return`
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
    background: `.concat(n("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(n("tabs.tablist.border.color"),`;
    border-width: `).concat(n("tabs.tablist.border.width"),`;
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
    background: `).concat(n("tabs.nav.button.background"),`;
    color: `).concat(n("tabs.nav.button.color"),`;
    width: `).concat(n("tabs.nav.button.width"),`;
    transition: color `).concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    box-shadow: `).concat(n("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.nav.button.focus.ring.width")," ").concat(n("tabs.nav.button.focus.ring.style")," ").concat(n("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(n("tabs.nav.button.hover.color"),`;
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
    background: `).concat(n("tabs.tab.background"),`;
    border-width: `).concat(n("tabs.tab.border.width"),`;
    border-color: `).concat(n("tabs.tab.border.color"),`;
    color: `).concat(n("tabs.tab.color"),`;
    padding: `).concat(n("tabs.tab.padding"),`;
    font-weight: `).concat(n("tabs.tab.font.weight"),`;
    transition: background `).concat(n("tabs.transition.duration"),", border-color ").concat(n("tabs.transition.duration"),", color ").concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    margin: `).concat(n("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tab.focus.ring.width")," ").concat(n("tabs.tab.focus.ring.style")," ").concat(n("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(n("tabs.tab.hover.background"),`;
    border-color: `).concat(n("tabs.tab.hover.border.color"),`;
    color: `).concat(n("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(n("tabs.tab.active.background"),`;
    border-color: `).concat(n("tabs.tab.active.border.color"),`;
    color: `).concat(n("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(n("tabs.tabpanel.background"),`;
    color: `).concat(n("tabs.tabpanel.color"),`;
    padding: `).concat(n("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(n("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tabpanel.focus.ring.width")," ").concat(n("tabs.tabpanel.focus.ring.style")," ").concat(n("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: `).concat(n("tabs.active.bar.bottom"),`;
    height: `).concat(n("tabs.active.bar.height"),`;
    background: `).concat(n("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},vt={root:function(t){var n=t.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},gt=p.extend({name:"tabs",theme:ft,classes:vt}),$t={name:"BaseTabs",extends:h,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:gt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},mt={name:"Tabs",extends:$t,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||A()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||A()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function yt(e,t,n,s,i,a){return l(),u("div",r({class:e.cx("root")},e.ptmi("root")),[d(e.$slots,"default")],16)}mt.render=yt;export{tt as a,lt as b,pt as c,mt as d,Y as s};
