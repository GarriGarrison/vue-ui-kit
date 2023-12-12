import{e as D,f as L,v as F,x as j,j as B,n as E,u as l,y as O,l as V}from"./vue.esm-bundler-uzTdkTmN.js";import{u as _,_ as $}from"./_plugin-vue_export-helper-8hTrMoQz.js";import{o as z,e as I,d as N}from"./emits-SAnt5xuE.js";const k=D({__name:"guv-view",props:{element:{},ariaLabel:{},disabled:{type:Boolean},id:{},attrs:{},classes:{type:[Boolean,null,String,Object,Array]},style:{}},emits:["click","focusin","focusout","mount","unmount"],setup(w,{emit:C}){const S=w,s=C;_(s);const q=(e,a)=>{S.disabled||z(e,a)};return(e,a)=>(L(),F(O(e.element),{id:e.id,"aria-label":e.ariaLabel,class:B(["guv-view",{disabled:e.disabled}]),style:E(e.style),disabled:e.disabled,onClick:a[0]||(a[0]=i=>q(s,i)),onFocusin:a[1]||(a[1]=i=>l(I)(s)),onFocusout:a[2]||(a[2]=i=>l(N)(s))},{default:j(()=>[V(e.$slots,"default",{},void 0,!0)]),_:3},40,["id","aria-label","style","class","disabled"]))}}),A=$(k,[["__scopeId","data-v-9783881d"]]);k.__docgenInfo={exportName:"default",displayName:"guv-view",description:"",tags:{},props:[{name:"style",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"classes",required:!1,type:{name:"StyleValue"}},{name:"attrs",required:!1,type:{name:"object"}},{name:"id",required:!1,type:{name:"string"}},{name:"element",required:!0,type:{name:"string"}},{name:"ariaLabel",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"focusin"},{name:"focusout"},{name:"mount"},{name:"unmount"}],slots:[{name:"default"}],sourceFiles:["/home/garrison/projects/vue-ui-kit/src/components/view/guv-view.vue"]};const T={component:A,title:"Components/View",argTypes:{element:{description:"div | span | ..."},ariaLabel:{description:"string"}}},r={args:{element:"div",ariaLabel:"aria-tag",disabled:!1,style:{backgroundColor:"gray",height:"50px"}}},n={args:{element:"div",style:{border:"1px solid black",height:"50px",width:"100px"}}},t={args:{element:"div",style:{border:"1px solid gray",height:"50px",width:"100px"},disabled:!0}},o={args:{element:"div",style:{backgroundColor:"beige",border:"1px solid gray",height:"50px",width:"100px"}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    element: 'div',
    ariaLabel: 'aria-tag',
    disabled: false,
    style: {
      backgroundColor: 'gray',
      height: '50px'
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,c,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    element: 'div',
    style: {
      border: '1px solid black',
      height: '50px',
      width: '100px'
    }
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var b,y,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    element: 'div',
    style: {
      border: '1px solid gray',
      height: '50px',
      width: '100px'
    },
    disabled: true
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    element: 'div',
    style: {
      backgroundColor: 'beige',
      border: '1px solid gray',
      height: '50px',
      width: '100px'
    }
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const H=["ExampleDefault","Div","Disabled","addStyle"];export{t as Disabled,n as Div,r as ExampleDefault,H as __namedExportsOrder,o as addStyle,T as default};
