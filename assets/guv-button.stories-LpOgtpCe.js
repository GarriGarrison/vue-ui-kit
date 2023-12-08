import{e as N,f as O,g as $,l,j as w,n as I,u as T,m as A,t as F}from"./vue.esm-bundler-k2GDAlvP.js";import{u as G,_ as M}from"./_plugin-vue_export-helper-3i1t_nbi.js";import{o as R}from"./emits-42cjFD5K.js";const x=["id","disabled"],_=N({__name:"guv-button",props:{title:{default:"Button"},disabled:{type:Boolean,default:!1},size:{default:"default"},id:{},attrs:{},classes:{type:[Boolean,null,String,Object,Array]},style:{}},emits:["click","mount","unmount"],setup(J,{emit:j}){const d=j;return G(d),(e,u)=>(O(),$("button",{id:e.id,type:"button",class:w(["guv-button",{disabled:e.disabled,standard:e.size==="standard",small:e.size==="small"}]),style:I(e.style),disabled:e.disabled,onClick:u[0]||(u[0]=h=>T(R)(d,h))},[l(e.$slots,"before",{},void 0,!0),l(e.$slots,"default",{},()=>[A(F(e.title),1)],!0),l(e.$slots,"after",{},void 0,!0)],14,x))}}),H=M(_,[["__scopeId","data-v-4dc05a98"]]);_.__docgenInfo={exportName:"default",displayName:"guv-button",description:"",tags:{},props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"standard"'},{name:'"small"'}]},defaultValue:{func:!1,value:"'default'"}}],events:[{name:"click"},{name:"mount"},{name:"unmount"}],slots:[{name:"before"},{name:"default"},{name:"after"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/button/guv-button.vue"]};const Q={component:H,title:"Components/Button",argTypes:{size:{description:"default | standard | small"}}},a={args:{title:"Click me",disabled:!1,style:{backgroundColor:"red"},size:"default"}},s={},t={args:{title:"Button",disabled:!0}},r={args:{title:"V",size:"standard"}},n={args:{title:"V",disabled:!0,size:"standard"}},o={args:{style:{backgroundColor:"red",width:"100px"}}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Click me',
    disabled: false,
    style: {
      backgroundColor: 'red'
    },
    size: 'default'
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,f,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,y,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Button',
    disabled: true
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,k,z;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'V',
    size: 'standard'
  }
}`,...(z=(k=r.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var C,D,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'V',
    disabled: true,
    size: 'standard'
  }
}`,...(B=(D=n.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var V,E,q;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: 'red',
      width: '100px'
    }
  }
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const U=["ExampleDefault","EnabledDefault","DisabledDefault","EnabledStandard","DisabledStandard","addStyle"];export{t as DisabledDefault,n as DisabledStandard,s as EnabledDefault,r as EnabledStandard,a as ExampleDefault,U as __namedExportsOrder,o as addStyle,Q as default};
