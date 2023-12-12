import{e as O,f as c,g as m,t as d,n as i,u as a,j as z,k as E}from"./vue.esm-bundler-uzTdkTmN.js";import{u as I,_ as V}from"./_plugin-vue_export-helper-8hTrMoQz.js";const A=["id"],D=["id"],N=O({__name:"guv-badge",props:{counter:{},id:{},attrs:{},classes:{type:[Boolean,null,String,Object,Array]},style:{}},emits:["mount","unmount"],setup(j,{emit:q}){const u=j,h=typeof u.counter=="number",s=u.counter;return I(q),(e,M)=>h&&e.counter?(c(),m("div",{key:0,id:e.id,class:"guv-badge",style:i(e.style)},d(e.counter),13,A)):a(s).count?(c(),m("div",{key:1,id:e.id,class:z(["guv-badge",{pulse:a(s).mode===1}]),style:i(e.style)},d(a(s).count),15,D)):E("",!0)}}),F=V(N,[["__scopeId","data-v-ce956815"]]);N.__docgenInfo={exportName:"default",displayName:"guv-badge",description:"",tags:{},props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"counter",required:!0,type:{name:"union",elements:[{name:"Counter"},{name:"number"}]}}],events:[{name:"mount"},{name:"unmount"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/badge/guv-badge.vue"]};const w={component:F,title:"Components/Badge",argTypes:{counter:{description:"number | {count: number, mode: 0 | 1}"}}},n={args:{counter:5}},r={args:{counter:{count:5,mode:0}}},o={args:{counter:{count:5,mode:1}}},t={args:{counter:5,style:{backgroundColor:"blue"}}};var l,p,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    counter: 5
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,b,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    counter: {
      count: 5,
      mode: 0
    }
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,B,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    counter: {
      count: 5,
      mode: 1
    }
  }
}`,...(_=(B=o.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var k,v,S;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    counter: 5,
    style: {
      backgroundColor: 'blue'
    }
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const H=["CounterNumber","CounterBurn","CounterBlink","CounterBackgroundBlue"];export{t as CounterBackgroundBlue,o as CounterBlink,r as CounterBurn,n as CounterNumber,H as __namedExportsOrder,w as default};
