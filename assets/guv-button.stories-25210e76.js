import{o as S,d as q,e as C,f as E,g as l,n as D,j as V,u as G,k as j,l as M,t as N}from"./vue.esm-bundler-d509a345.js";const O=e=>{S(()=>{e("mount")}),q(()=>{e("unmount")})},T=(e,n)=>{e("click",n)},$=["disabled"],_=C({__name:"guv-button",props:{title:{default:"Button"},disabled:{type:Boolean,default:!1},id:{},attrs:{},classes:{},style:{}},emits:["click","mount","unmount"],setup(e,{emit:n}){const s=n;return O(s),(t,r)=>(j(),E("button",{type:"button",class:D(["guv-button",{disabled:t.disabled}]),style:V(t.style),disabled:t.disabled,onClick:r[0]||(r[0]=k=>G(T)(s,k))},[l(t.$slots,"before",{},void 0,!0),l(t.$slots,"default",{},()=>[M(N(t.title),1)],!0),l(t.$slots,"after",{},void 0,!0)],14,$))}});const x=(e,n)=>{const s=e.__vccOpts||e;for(const[t,r]of n)s[t]=r;return s},i=x(_,[["__scopeId","data-v-f5e7f00f"]]);_.__docgenInfo={exportName:"default",displayName:"guv-button",description:"",tags:{},props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"},{name:"mount"},{name:"unmount"}],slots:[{name:"before"},{name:"default"},{name:"after"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/button/guv-button.vue"]};const I={title:"Example/Button",component:i,argTypes:{title:{type:"string",control:"text",value:"Button"},disabled:{control:{type:"boolean"},defaultValue:!1},onClick:{description:'emitted "click": MouseEvent',control:"() => void"}}},B=e=>({components:{GuvButton:i},setup(){return{args:e}},template:'<guv-button v-bind="args"> {{ args.title }} </guv-button>'}),u=e=>({components:{GuvButton:i},setup(){return{args:e}},template:'<guv-button v-bind="args">Button!</guv-button>'}),o=B.bind({});o.args={title:"Click me"};const a=B.bind({});a.args={title:"Button",disabled:!0};var d,c,m;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    GuvButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<guv-button v-bind="args">Button!</guv-button>'
})`,...(m=(c=u.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    GuvButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<guv-button v-bind="args"> {{ args.title }} </guv-button>'
})`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    GuvButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<guv-button v-bind="args"> {{ args.title }} </guv-button>'
})`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const h=["DefaultButton","Enabled","Disabled"];export{u as DefaultButton,a as Disabled,o as Enabled,h as __namedExportsOrder,I as default};
//# sourceMappingURL=guv-button.stories-25210e76.js.map
