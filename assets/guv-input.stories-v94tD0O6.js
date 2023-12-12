import{e as $,p as z,o as A,f as G,g as T,j as U,n as H,u as f}from"./vue.esm-bundler-uzTdkTmN.js";import{b as J,f as L,g as P,e as Q,d as W}from"./emits-SAnt5xuE.js";import{u as X,_ as Y}from"./_plugin-vue_export-helper-8hTrMoQz.js";const Z=["id","value","type","placeholder","step","min","max","disabled"],M=$({__name:"guv-input",props:{modelValue:{},type:{default:"text"},placeholder:{default:""},mask:{default:void 0},invalid:{type:Boolean,default:!1},integer:{type:Boolean,default:!1},min:{default:void 0},max:{default:void 0},step:{default:void 0},focus:{type:Boolean},disabled:{type:Boolean,default:!1},id:{},attrs:{},classes:{type:[Boolean,null,String,Object,Array]},style:{}},emits:["update:modelValue","keydown","input","focusin","focusout","mount","unmount"],setup(R,{expose:j,emit:N}){const r=R,n=N;X(n);const l=z(null),p=()=>{l.value&&l.value.focus()},K=e=>{e&&(J(n,e.value),L(n,e.value))},O=e=>{P(n,e),r.mask&&!r.mask.test(e.key)&&e.preventDefault(),r.integer&&!/^\d+$/.test(e.key)&&e.preventDefault()};return j({input:l,forceFocus:p}),A(()=>{r.focus&&p()}),(e,a)=>(G(),T("input",{id:e.id,ref_key:"inputRef",ref:l,value:e.modelValue,type:e.type,class:U(["guv-input",{error:e.invalid&&!e.modelValue,disabled:e.disabled}]),style:H(e.style),placeholder:e.placeholder,step:e.integer?"1":e.step,min:e.min,max:e.max,disabled:e.disabled,onInput:a[0]||(a[0]=s=>K(s.target)),onFocusin:a[1]||(a[1]=s=>f(Q)(n)),onFocusout:a[2]||(a[2]=s=>f(W)(n)),onKeydown:a[3]||(a[3]=s=>O(s))},null,46,Z))}}),_=Y(M,[["__scopeId","data-v-d9816ffa"]]);M.__docgenInfo={exportName:"default",displayName:"guv-input",description:"",tags:{},expose:[{name:"input"},{name:"forceFocus"}],props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"modelValue",required:!0,type:{name:"ValueInput"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"number"'},{name:'"password"'},{name:'"email"'},{name:'"tel"'},{name:'"url"'},{name:'"search"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"mask",required:!1,type:{name:"RegExp"},defaultValue:{func:!1,value:"undefined"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"integer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"focus",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"keydown"},{name:"input"},{name:"focusin"},{name:"focusout"},{name:"mount"},{name:"unmount"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/input/guv-input.vue"]};const se={component:_,title:"Components/Input",argTypes:{type:{description:"text | number | password | email | tel | url | search"},modelValue:{description:"string | number | null | undefined"}}},o={args:{disabled:!1,placeholder:"placeholder",style:{backgroundColor:"beige"},invalid:!1}},t={args:{type:"number"}},u={args:{mask:/[0-9]/,placeholder:"only number"}},d={args:{disabled:!0}},m={args:{invalid:!0}},i={args:{style:{backgroundColor:"beige"}}};var c,y,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    placeholder: 'placeholder',
    style: {
      backgroundColor: 'beige'
    },
    invalid: false
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,v,V;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'number'
  }
}`,...(V=(v=t.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var k,q,S;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    mask: (/[0-9]/ as RegExp),
    placeholder: 'only number'
  }
}`,...(S=(q=u.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var h,E,I;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var w,x,B;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var C,F,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: 'beige'
    }
  }
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const re=["ExampleDefault","Number","Mask","Disabled","ErrorValidate","addStyle"];export{d as Disabled,m as ErrorValidate,o as ExampleDefault,u as Mask,t as Number,re as __namedExportsOrder,i as addStyle,se as default};
