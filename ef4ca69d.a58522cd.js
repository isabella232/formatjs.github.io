(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),i=(n(0),n(134)),o={id:"intl-numberformat",title:"Intl.NumberFormat (ES2020)"},l={id:"polyfills/intl-numberformat",title:"Intl.NumberFormat (ES2020)",description:"A ponyfill/polyfill for [`intl-unified-numberformat`](https://github.com/tc39/proposal-unified-intl-numberformat). This wraps `Intl.NumberFormat` and has the exact same APIs.",source:"@site/docs/polyfills/intl-numberformat.md",permalink:"/docs/polyfills/intl-numberformat",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/polyfills/intl-numberformat.md",sidebar:"docs",previous:{title:"Intl.DisplayNames",permalink:"/docs/polyfills/intl-displaynames"},next:{title:"Intl MessageFormat",permalink:"/docs/intl-messageformat"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Caveats",id:"caveats",children:[]},{value:"Supported Units",id:"supported-units",children:[]}],u={rightToc:c};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A ponyfill/polyfill for ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tc39/proposal-unified-intl-numberformat"}),Object(i.b)("inlineCode",{parentName:"a"},"intl-unified-numberformat")),". This wraps ",Object(i.b)("inlineCode",{parentName:"p"},"Intl.NumberFormat")," and has the exact same APIs."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @formatjs/intl-unified-numberformat\n")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"This package requires the following capabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"}),"Intl.PluralRules"))),Object(i.b)("h1",{id:"features"},"Features"),Object(i.b)("p",null,"Everything in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tc39/proposal-unified-intl-numberformat"}),"https://github.com/tc39/proposal-unified-intl-numberformat")," proposal with the caveats below."),Object(i.b)("h2",{id:"caveats"},"Caveats"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"compact")," notation is currently buggy in certain locales with special compact rules (such as ",Object(i.b)("inlineCode",{parentName:"li"},"zh-Hant")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Somali"),") See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-unified-intl-numberformat/issues/26"}),"https://github.com/tc39/proposal-unified-intl-numberformat/issues/26")," for more details.")),Object(i.b)("h1",{id:"usage"},"Usage"),Object(i.b)("p",null,"To use the ponyfill, import it along with its data:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import {UnifiedNumberFormat} from '@formatjs/intl-unified-numberformat';\nUnifiedNumberFormat.__addLocaleData(\n  require('@formatjs/intl-unified-numberformat/dist/locale-data/zh.json') // locale-data for zh\n);\nUnifiedNumberFormat.__addLocaleData(\n  require('@formatjs/intl-unified-numberformat/dist/locale-data/en.json') // locale-data for en\n);\n\nnew UnifiedNumberFormat('zh', {\n  style: 'unit',\n  unit: 'bit',\n  unitDisplay: 'long',\n}).format(1000); // 1,000\u6bd4\u7279\n")),Object(i.b)("p",null,"To use this as a polyfill, override ",Object(i.b)("inlineCode",{parentName:"p"},"Intl.NumberFormat")," as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-unified-numberformat/polyfill';\nif (typeof Intl.NumberFormat.__addLocaleData === 'function') {\n  Intl.NumberFormat.__addLocaleData(\n    require('@formatjs/intl-unified-numberformat/dist/locale-data/zh.json') // locale-data for zh\n  );\n  Intl.NumberFormat.__addLocaleData(\n    require('@formatjs/intl-unified-numberformat/dist/locale-data/en.json') // locale-data for en\n  );\n}\n\nnew Intl.NumberFormat('zh', {\n  style: 'unit',\n  unit: 'bit',\n  unitDisplay: 'long',\n}).format(1000); // 1,000\u6bd4\u7279\n\nnew Intl.NumberFormat('en-US', {\n  notation: 'engineering',\n}).format(987654321); // 987.7E6\n\nnew Intl.NumberFormat('zh', {\n  style: 'currency',\n  currency: 'EUR',\n  currencySign: 'accounting',\n}).format(-100); // (\u20ac100.00)\n")),Object(i.b)("h2",{id:"supported-units"},"Supported Units"),Object(i.b)("p",null,"Currently ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_diff_out.html#sec-issanctionedsimpleunitidentifier"}),"intl-unified-numberformat")," has a list of sanctioned units as below"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"type Unit =\n  | 'acre'\n  | 'bit'\n  | 'byte'\n  | 'celsius'\n  | 'centimeter'\n  | 'day'\n  | 'degree'\n  | 'fahrenheit'\n  | 'fluid-ounce'\n  | 'foot'\n  | 'gallon'\n  | 'gigabit'\n  | 'gigabyte'\n  | 'gram'\n  | 'hectare'\n  | 'hour'\n  | 'inch'\n  | 'kilobit'\n  | 'kilobyte'\n  | 'kilogram'\n  | 'kilometer'\n  | 'liter'\n  | 'megabit'\n  | 'megabyte'\n  | 'meter'\n  | 'mile'\n  | 'mile-scandinavian'\n  | 'millimeter'\n  | 'milliliter'\n  | 'millisecond'\n  | 'minute'\n  | 'month'\n  | 'ounce'\n  | 'percent'\n  | 'petabyte'\n  | 'pound'\n  | 'second'\n  | 'stone'\n  | 'terabit'\n  | 'terabyte'\n  | 'week'\n  | 'yard'\n  | 'year';\n")))}m.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),m=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=m(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=m(n),p=r,f=s["".concat(o,".").concat(p)]||s[p]||b[p]||i;return n?a.a.createElement(f,l({ref:t},u,{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);