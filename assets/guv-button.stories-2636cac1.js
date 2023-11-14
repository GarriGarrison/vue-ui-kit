import{o as y,d as _,e as k,f as B,g as u,n as q,j as C,u as E,k as S,l as V,t as j}from"./vue.esm-bundler-d509a345.js";const D=e=>{y(()=>{e("mount")}),_(()=>{e("unmount")})},G=(e,n)=>{e("click",n)},M=["disabled"],f=k({__name:"guv-button",props:{title:{default:"Button"},disabled:{type:Boolean,default:!1},id:{},attrs:{},classes:{},style:{}},emits:["click","mount","unmount"],setup(e,{emit:n}){const s=n;return D(s),(t,r)=>(S(),B("button",{type:"button",class:q(["guv-button",{disabled:t.disabled}]),style:C(t.style),disabled:t.disabled,onClick:r[0]||(r[0]=v=>E(G)(s,v))},[u(t.$slots,"before",{},void 0,!0),u(t.$slots,"default",{},()=>[V(j(t.title),1)],!0),u(t.$slots,"after",{},void 0,!0)],14,M))}});const N=(e,n)=>{const s=e.__vccOpts||e;for(const[t,r]of n)s[t]=r;return s},g=N(f,[["__scopeId","data-v-f5e7f00f"]]);f.__docgenInfo={exportName:"default",displayName:"guv-button",description:"",tags:{},props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"},{name:"mount"},{name:"unmount"}],slots:[{name:"before"},{name:"default"},{name:"after"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/button/guv-button.vue"]};const T={title:"Example/Button",component:g,argTypes:{title:{type:"string",control:"text",value:"Button"},disabled:{control:{type:"boolean"},defaultValue:!1},onClick:{description:'emitted "click": MouseEvent',control:"() => void"}}},b=e=>({components:{GuvButton:g},setup(){return{args:e}},template:'<guv-button v-bind="args"> {{ args.title }} </guv-button>'}),a=b.bind({});a.args={title:"Click me"};const o=b.bind({});o.args={title:"Button",disabled:!0};var l,i,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    GuvButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<guv-button v-bind="args"> {{ args.title }} </guv-button>'
})`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    GuvButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<guv-button v-bind="args"> {{ args.title }} </guv-button>'
})`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const $=["Enabled","Disabled"];export{o as Disabled,a as Enabled,$ as __namedExportsOrder,T as default};
//# sourceMappingURL=guv-button.stories-2636cac1.js.map
