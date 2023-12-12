import{e as E,p as m,w as $,f as O,g as z,q as p,t as A,j as G,n as R,s as T,u as f}from"./vue.esm-bundler-uzTdkTmN.js";import{a as U,b as H,c as J,d as K,e as L}from"./emits-SAnt5xuE.js";import{u as P,_ as Q}from"./_plugin-vue_export-helper-8hTrMoQz.js";import{v as W}from"./v4-yQnnJER4.js";const X=["id"],Y=["id","checked","value","disabled"],Z=["for"],F=E({__name:"guv-checkbox",props:{modelValue:{type:Boolean},checked:{type:Boolean,default:!1},title:{default:""},valueField:{default:"value"},minusIcon:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{},attrs:{},classes:{type:[Boolean,null,String,Object,Array]},style:{}},emits:["update:modelValue","change","click","focusin","focusout","mount","unmount"],setup(M,{emit:N}){const e=M,o=N;P(o);const n=m(!1),t=m(),j=m(e.modelValue===void 0?e.checked:e.modelValue);$(()=>e.modelValue,()=>{!e.modelValue&&e.minusIcon?n.value=!0:n.value=!1});const w=a=>{a&&(H(o,a.checked),J(o,a.checked))};return U(()=>{!e.modelValue&&e.minusIcon?n.value=!0:n.value=!1,t.value=e.id?e.id:W()}),(a,s)=>(O(),z("div",{id:t.value,class:"guv-checkbox",style:R(a.style),onClick:s[1]||(s[1]=T(()=>{},["stop"])),onFocusout:s[2]||(s[2]=i=>f(K)(o)),onFocusin:s[3]||(s[3]=i=>f(L)(o))},[p("input",{id:`guv-checkbox-${t.value}`,checked:j.value,value:a.modelValue,class:"guv-checkbox__input",tabindex:"0",type:"checkbox",disabled:a.disabled,onChange:s[0]||(s[0]=i=>w(i.target))},null,40,Y),p("label",{for:`guv-checkbox-${t.value}`,class:G({minus:n.value,disabled:a.disabled})},A(a.title),11,Z)],44,X))}}),ee=Q(F,[["__scopeId","data-v-11e9a251"]]);F.__docgenInfo={exportName:"default",displayName:"guv-checkbox",description:"",tags:{},props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"boolean"}},{name:"checked",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"valueField",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'value'"}},{name:"minusIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"click"},{name:"focusin"},{name:"focusout"},{name:"mount"},{name:"unmount"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/checkbox/guv-checkbox.vue"]};const te={component:ee,title:"Components/Checkbox",argTypes:{modelValue:{description:"boolean | undefined"}}},l={args:{title:"Check me",disabled:!1,minusIcon:!0,checked:!0,style:{backgroundColor:"beige"}}},r={args:{title:"Check me",minusIcon:!0}},u={args:{title:"Not check me, Disabled",disabled:!0}},c={args:{title:"Checked",checked:!0}},d={args:{title:"Background Color",style:{backgroundColor:"beige"}}};var g,k,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Check me',
    disabled: false,
    minusIcon: true,
    checked: true,
    style: {
      backgroundColor: 'beige'
    }
  }
}`,...(b=(k=l.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var v,h,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Check me',
    minusIcon: true
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,V,x;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Not check me, Disabled',
    disabled: true
  }
}`,...(x=(V=u.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var I,q,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Checked',
    checked: true
  }
}`,...(S=(q=c.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var B,_,D;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Background Color',
    style: {
      backgroundColor: 'beige'
    }
  }
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const le=["ExampleDefault","MinusIcon","Disabled","Checked","addStyle"];export{c as Checked,u as Disabled,l as ExampleDefault,r as MinusIcon,le as __namedExportsOrder,d as addStyle,te as default};
