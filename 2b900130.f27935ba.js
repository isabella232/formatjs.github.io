(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,u=m["".concat(i,".").concat(f)]||m[f]||b[f]||l;return r?n.a.createElement(u,o(o({ref:t},p),{},{components:r})):n.a.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),l=(r(0),r(104)),i={id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},o={unversionedId:"polyfills/intl-relativetimeformat",id:"polyfills/intl-relativetimeformat",isDocsHomePage:!1,title:"Intl.RelativeTimeFormat",description:"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-relativetimeformat.md",permalink:"/docs/polyfills/intl-relativetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-relativetimeformat.md",sidebar:"polyfills",previous:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"},next:{title:"Intl.ListFormat",permalink:"/docs/polyfills/intl-listformat"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Tests",id:"tests",children:[]}],p={rightToc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-relativetimeformat"}),Object(l.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-relativetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-relativetimeformat",alt:"size"}))),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @formatjs/intl-relativetimeformat\n")),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("p",null,"This package requires the following capabilities:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"}),"Intl.PluralRules"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(l.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),".")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"If you need ",Object(l.b)("inlineCode",{parentName:"p"},"formatToParts")," and have to support IE11- or Node 10-, you'd need to polyfill using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/polyfills/intl-numberformat"}),Object(l.b)("inlineCode",{parentName:"a"},"@formatjs/intl-numberformat")),"."))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,"To use the polyfill, just import it to make sure that a fully functional Intl.RelativeTimeFormat is available in your environment:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-relativetimeformat/polyfill';\nimport '@formatjs/intl-relativetimeformat/locale-data/de'; // Add locale data for de\n")),Object(l.b)("p",null,"If you want to polyfill all locales (e.g for Node):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-relativetimeformat/polyfill-locales';\n")),Object(l.b)("h2",{id:"tests"},"Tests"),Object(l.b)("p",null,"This library is fully ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/RelativeTimeFormat"}),"test262"),"-compliant."))}s.isMDXComponent=!0}}]);