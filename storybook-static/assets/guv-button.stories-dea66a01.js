import{o as q,d as j,e as N,f as O,g as $,j as i,n as I,k as M,u as T,l as h,t as F}from"./vue.esm-bundler-eeb701c4.js";const G=a=>{q(()=>{a("mount")}),j(()=>{a("unmount")})},R=(a,t)=>{a("click",t)},U=["disabled"],V=N({__name:"guv-button",props:{title:{default:"Button"},disabled:{type:Boolean,default:!1},size:{default:"default"},id:{},attrs:{},classes:{},style:{}},emits:["click","mount","unmount"],setup(a,{emit:t}){const s=t;return G(s),(e,n)=>(O(),$("button",{type:"button",class:I(["guv-button",{disabled:e.disabled,standard:e.size==="standard",small:e.size==="small"}]),style:M(e.style),disabled:e.disabled,onClick:n[0]||(n[0]=E=>T(R)(s,E))},[i(e.$slots,"before",{},void 0,!0),i(e.$slots,"default",{},()=>[h(F(e.title),1)],!0),i(e.$slots,"after",{},void 0,!0)],14,U))}});const w=(a,t)=>{const s=a.__vccOpts||a;for(const[e,n]of t)s[e]=n;return s},x=w(V,[["__scopeId","data-v-a48a0fc7"]]);V.__docgenInfo={exportName:"default",displayName:"guv-button",description:"",tags:{},props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"standard"'},{name:'"small"'}]},defaultValue:{func:!1,value:"'default'"}}],events:[{name:"click"},{name:"mount"},{name:"unmount"}],slots:[{name:"before"},{name:"default"},{name:"after"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/button/guv-button.vue"]};const H={component:x,title:"Components/Button",argTypes:{size:{description:"default | standard | small"}}},r={args:{title:"Click me",disabled:!1,style:{backgroundColor:"red"},size:"default"}},o={},l={args:{title:"Button",disabled:!0}},d={args:{title:"V",size:"standard"}},u={args:{title:"V",disabled:!0,size:"standard"}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Click me',
    disabled: false,
    style: {
      backgroundColor: 'red'
    },
    size: 'default'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,b,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,v,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Button',
    disabled: true
  }
}`,...(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var k,z,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'V',
    size: 'standard'
  }
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var D,B,C;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'V',
    disabled: true,
    size: 'standard'
  }
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const J=["ExampleDefault","EnabledDefault","DisabledDefault","EnabledStandard","DisabledStandard"];export{l as DisabledDefault,u as DisabledStandard,o as EnabledDefault,d as EnabledStandard,r as ExampleDefault,J as __namedExportsOrder,H as default};
//# sourceMappingURL=guv-button.stories-dea66a01.js.map
