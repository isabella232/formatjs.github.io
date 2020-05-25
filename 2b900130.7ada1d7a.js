(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var l=a(1),r=a(9),n=(a(0),a(175)),i={id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},o={id:"polyfills/intl-relativetimeformat",title:"Intl.RelativeTimeFormat",description:"A spec-compliant polyfill/ponyfill for Intl.RelativeTimeFormat fully tested by the [official ECMAScript Conformance test suite](https://github.com/tc39/test262)",source:"@site/docs/polyfills/intl-relativetimeformat.md",permalink:"/docs/polyfills/intl-relativetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/polyfills/intl-relativetimeformat.md",sidebar:"docs",previous:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"},next:{title:"Intl.ListFormat",permalink:"/docs/polyfills/intl-listformat"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Ponyfill",id:"ponyfill",children:[]},{value:"Polyfill",id:"polyfill",children:[]}]},{value:"Tests",id:"tests",children:[]}],p={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(l.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A spec-compliant polyfill/ponyfill for Intl.RelativeTimeFormat fully tested by the ",Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(n.b)("p",null,Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-relativetimeformat"}),Object(n.b)("img",Object(l.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-relativetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-relativetimeformat",alt:"size"}))),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{}),"npm install @formatjs/intl-relativetimeformat\n")),Object(n.b)("h2",{id:"requirements"},"Requirements"),Object(n.b)("p",null,"This package requires the following capabilities:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"}),"Intl.PluralRules"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(n.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If you need ",Object(n.b)("inlineCode",{parentName:"p"},"formatToParts")," and have to support IE11- or Node 10-, you'd need to polyfill using ",Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/polyfills/intl-numberformat"}),Object(n.b)("inlineCode",{parentName:"a"},"@formatjs/intl-numberformat")),"."))),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("h3",{id:"ponyfill"},"Ponyfill"),Object(n.b)("p",null,"To use the ponyfill, import it along with its data:"),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import IntlRelativeTimeFormat from '@formatjs/intl-relativetimeformat';\n// locale-data for zh\nIntlRelativeTimeFormat.__addLocaleData(\n  require('@formatjs/intl-relativetimeformat/dist/locale-data/zh.json')\n);\n\n// locale-data for zh\nIntlRelativeTimeFormat.__addLocaleData(\n  require('@formatjs/intl-relativetimeformat/dist/locale-data/en.json')\n);\n\nnew IntlRelativeTimeFormat('zh-CN').format(-1, 'second'); // '1\u79d2\u949f\u524d'\n")),Object(n.b)("h3",{id:"polyfill"},"Polyfill"),Object(n.b)("p",null,"To use the polyfill, just import it to make sure that a fully functional Intl.RelativeTimeFormat is available in your environment:"),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-relativetimeformat/polyfill';\nimport '@formatjs/intl-relativetimeformat/dist/locale-data/de'; // Add locale data for de\n")),Object(n.b)("p",null,"If you want to polyfill all locales (e.g for Node):"),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-relativetimeformat/polyfill-locales';\n")),Object(n.b)("h2",{id:"tests"},"Tests"),Object(n.b)("p",null,"This library is fully ",Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/RelativeTimeFormat"}),"test262"),"-compliant."))}s.isMDXComponent=!0},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var l=a(0),r=a.n(l);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(l.forwardRef)((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(a),f=l,u=m["".concat(i,".").concat(f)]||m[f]||b[f]||n;return a?r.a.createElement(u,o({ref:t},p,{components:a})):r.a.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);