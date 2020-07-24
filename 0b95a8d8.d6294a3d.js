(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=l,m=u["".concat(o,".").concat(f)]||u[f]||b[f]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var l=n(2),a=n(6),r=(n(0),n(146)),o={id:"intl-getcanonicallocales",title:"Intl.getCanonicalLocales"},c={id:"polyfills/intl-getcanonicallocales",isDocsHomePage:!1,title:"Intl.getCanonicalLocales",description:"A spec-compliant polyfill/ponyfill for Intl.getCanonicalLocales tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-getcanonicallocales.md",permalink:"/docs/polyfills/intl-getcanonicallocales",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/polyfills/intl-getcanonicallocales.md",sidebar:"polyfills",previous:{title:"Polyfills",permalink:"/docs/polyfills"},next:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Tests",id:"tests",children:[]}],s={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A spec-compliant polyfill/ponyfill for ",Object(r.b)("inlineCode",{parentName:"p"},"Intl.getCanonicalLocales")," tested by the ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(r.b)("p",null,Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-getcanonicallocales"}),Object(r.b)("img",Object(l.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-getcanonicallocales.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(r.b)("img",Object(l.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-getcanonicallocales",alt:"size"}))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"npm install @formatjs/intl-getcanonicallocales\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"To use the polyfill, just import it to make sure that a fully functional Intl.Locale is available in your environment:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-getcanonicallocales/polyfill';\n")),Object(r.b)("p",null,"If Intl.Locale already exists, the polyfill will not be loaded."),Object(r.b)("p",null,"To use this as a ponyfill:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import getCanonicalLocales from '@formatjs/intl-getcanonicallocales';\n")),Object(r.b)("h2",{id:"tests"},"Tests"),Object(r.b)("p",null,"This library is ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/Intl/getCanonicalLocales"}),"test262"),"-compliant."))}p.isMDXComponent=!0}}]);