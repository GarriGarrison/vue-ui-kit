import{e as h,g as c,j as m,t as d,k as p,u as a,n as z,p as E}from"./vue.esm-bundler-sBLqQYms.js";import{u as I,_ as V}from"./_plugin-vue_export-helper-YUmjDdsf.js";const N=h({__name:"guv-badge",props:{counter:{},id:{},attrs:{},classes:{},style:{}},emits:["mount","unmount"],setup(q,{emit:j}){const u=q,O=typeof u.counter=="number",s=u.counter;return I(j),(e,F)=>O&&e.counter?(c(),m("div",{key:0,class:"guv-badge",style:p(e.style)},d(e.counter),5)):a(s).count?(c(),m("div",{key:1,class:z(["guv-badge",{pulse:a(s).mode===1}]),style:p(e.style)},d(a(s).count),7)):E("",!0)}}),x=V(N,[["__scopeId","data-v-a946f2d2"]]);N.__docgenInfo={exportName:"default",displayName:"guv-badge",description:"",tags:{},props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"counter",required:!0,type:{name:"union",elements:[{name:"Counter"},{name:"number"}]}}],events:[{name:"mount"},{name:"unmount"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/badge/guv-badge.vue"]};const R={component:x,title:"Components/Badge",argTypes:{counter:{description:"number | {count: number, mode: 0 | 1}"}}},n={args:{counter:5}},r={args:{counter:{count:5,mode:0}}},o={args:{counter:{count:5,mode:1}}},t={args:{counter:5,style:{backgroundColor:"blue"}}};var i,l,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    counter: 5
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var y,b,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    counter: {
      count: 5,
      mode: 0
    }
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,k,v;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    counter: {
      count: 5,
      mode: 1
    }
  }
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var B,_,S;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    counter: 5,
    style: {
      backgroundColor: 'blue'
    }
  }
}`,...(S=(_=t.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const T=["CounterNumber","CounterBurn","CounterBlink","CounterBackgroundBlue"];export{t as CounterBackgroundBlue,o as CounterBlink,r as CounterBurn,n as CounterNumber,T as __namedExportsOrder,R as default};
//# sourceMappingURL=guv-badge.stories-Hyf4pGrM.js.map
