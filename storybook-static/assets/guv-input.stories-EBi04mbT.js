import{e as z,f as O,o as G,g as T,j as U,n as A,k as H,u as f}from"./vue.esm-bundler-sBLqQYms.js";import{o as J,a as L,b as P,c as Q,d as W}from"./emits-Dwx8EwDB.js";import{u as X,_ as Y}from"./_plugin-vue_export-helper-YUmjDdsf.js";const Z=["value","type","placeholder","step","min","max","disabled"],M=z({__name:"guv-input",props:{modelValue:{},type:{default:"text"},placeholder:{default:""},mask:{default:void 0},invalid:{type:Boolean,default:!1},integer:{type:Boolean,default:!1},min:{default:void 0},max:{default:void 0},step:{default:void 0},focus:{type:Boolean},disabled:{type:Boolean,default:!1},id:{},attrs:{},classes:{},style:{}},emits:["update:modelValue","keydown","input","focusin","focusout","mount","unmount"],setup(R,{expose:N,emit:j}){const r=R,n=j;X(n);const l=O(null),p=()=>{l.value&&l.value.focus()},K=e=>{e&&(J(n,e.value),L(n,e.value))},$=e=>{P(n,e),!(e.key==="Backspace"||e.key=="Delete")&&(r.mask&&!r.mask.test(e.key)&&e.preventDefault(),r.integer&&!/^\d+$/.test(e.key)&&e.preventDefault())};return N({input:l,forceFocus:p}),G(()=>{r.focus&&p()}),(e,a)=>(T(),U("input",{ref_key:"inputRef",ref:l,value:e.modelValue,type:e.type,class:A(["guv-input",{error:e.invalid&&!e.modelValue,disabled:e.disabled}]),style:H(e.style),placeholder:e.placeholder,step:e.integer?"1":e.step,min:e.min,max:e.max,disabled:e.disabled,onInput:a[0]||(a[0]=s=>K(s.target)),onFocusin:a[1]||(a[1]=s=>f(Q)(n)),onFocusout:a[2]||(a[2]=s=>f(W)(n)),onKeydown:a[3]||(a[3]=s=>$(s))},null,46,Z))}}),_=Y(M,[["__scopeId","data-v-05da60c9"]]);M.__docgenInfo={exportName:"default",displayName:"guv-input",description:"",tags:{},expose:[{name:"input"},{name:"forceFocus"}],props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"modelValue",required:!0,type:{name:"ValueInput"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"number"'},{name:'"password"'},{name:'"email"'},{name:'"tel"'},{name:'"url"'},{name:'"search"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"mask",required:!1,type:{name:"RegExp"},defaultValue:{func:!1,value:"undefined"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"integer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"focus",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"keydown"},{name:"input"},{name:"focusin"},{name:"focusout"},{name:"mount"},{name:"unmount"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/input/guv-input.vue"]};const se={component:_,title:"Components/Input",argTypes:{type:{description:"text | number | password | email | tel | url | search"},modelValue:{description:"string | number | null | undefined"}}},o={args:{disabled:!1,placeholder:"placeholder",style:{backgroundColor:"beige"},invalid:!1}},t={args:{type:"number"}},u={args:{mask:/[0-9]/,placeholder:"only number"}},d={args:{disabled:!0}},m={args:{invalid:!0}},i={args:{style:{backgroundColor:"beige"}}};var c,y,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    placeholder: 'placeholder',
    style: {
      backgroundColor: 'beige'
    },
    invalid: false
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,v,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'number'
  }
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var V,q,h;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    mask: (/[0-9]/ as RegExp),
    placeholder: 'only number'
  }
}`,...(h=(q=u.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var S,x,E;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(E=(x=d.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var I,w,B;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,D,F;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: 'beige'
    }
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const re=["ExampleDefault","Number","Mask","Disabled","ErrorValidate","addStyle"];export{d as Disabled,m as ErrorValidate,o as ExampleDefault,u as Mask,t as Number,re as __namedExportsOrder,i as addStyle,se as default};
//# sourceMappingURL=guv-input.stories-EBi04mbT.js.map
