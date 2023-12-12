import{r as g,M as f}from"./chunk-HLWAVYOI-vsxBJSVo.js";import{u as d}from"./index-xGWgsZ4v.js";import"./iframe-T1mqB5rq.js";import"../sb-preview/runtime.js";import"./index-X7M4SV1m.js";import"./index-ogXoivrg.js";import"./index-PPLHz8o0.js";var x={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=g,h=Symbol.for("react.element"),_=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,k=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var r,i={},p=null,l=null;a!==void 0&&(p=""+a),t.key!==void 0&&(p=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)b.call(t,r)&&!y.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:h,type:e,key:p,ref:l,props:i,_owner:k.current}}s.Fragment=_;s.jsx=c;s.jsxs=c;x.exports=s;var o=x.exports;function m(e){const t=Object.assign({h1:"h1",p:"p"},d(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(f,{title:"About/Introduction"}),`
`,o.jsx("style",{children:`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
  `}),`
`,o.jsx(t.h1,{id:"welcome-to-vue-ui-kit",children:"Welcome to VUE UI-kit"}),`
`,o.jsx(t.p,{children:"This ui-kit is designed for the framework VUE3. Contains the main components."})]})}function w(e={}){const{wrapper:t}=Object.assign({},d(),e.components);return t?o.jsx(t,{...e,children:o.jsx(m,{...e})}):m(e)}const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const n={title:"About/Introduction",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:w};const M=["__page"];export{M as __namedExportsOrder,E as __page,n as default};
