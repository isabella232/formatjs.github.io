(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=i.a.createContext({}),s=function(e){var t=i.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,d=p["".concat(r,".").concat(f)]||p[f]||b[f]||l;return a?i.a.createElement(d,o(o({ref:t},m),{},{components:a})):i.a.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(6),l=(a(0),a(104)),r={id:"intl-datetimeformat",title:"Intl.DateTimeFormat"},o={unversionedId:"polyfills/intl-datetimeformat",id:"polyfills/intl-datetimeformat",isDocsHomePage:!1,title:"Intl.DateTimeFormat",description:"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-datetimeformat.md",permalink:"/docs/polyfills/intl-datetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-datetimeformat.md",sidebar:"polyfills",previous:{title:"Intl.NumberFormat (ES2020)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.Locale",permalink:"/docs/polyfills/intl-locale"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",children:[]},{value:"Default Timezone",id:"default-timezone",children:[]}]},{value:"Tests",id:"tests",children:[]}],m={rightToc:c};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"}))),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @formatjs/intl-datetimeformat\n")),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("p",null,"This package requires the following capabilities:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(l.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),".")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),"Intl.NumberFormat")))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("h3",{id:"simple"},"Simple"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/locale-data/en' // locale-data for en\nimport '@formatjs/intl-datetimeformat/add-all-tz' // Add ALL tz data\n")),Object(l.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {shouldPolyfill} from '@formatjs/intl-datetimeformat/should-polyfill'\nfunction polyfill(locale: string): Promise<any> {\n  // This platform already supports Intl.PluralRules\n  if (!shouldPolyfill()) {\n    return Promise.resolve()\n  }\n  const polyfills = [\n    import('@formatjs/intl-datetimeformat/polyfill'),\n    import('@formatjs/intl-datetimeformat/add-all-tz'),\n  ]\n  switch (locale) {\n    default:\n      polyfills.push(import('@formatjs/intl-datetimeformat/locale-data/en'))\n      break\n    case 'fr':\n      polyfills.push(import('@formatjs/intl-datetimeformat/locale-data/fr'))\n      break\n  }\n  return Promise.all(polyfills)\n}\n")),Object(l.b)("h3",{id:"adding-iana-timezone-database"},"Adding IANA Timezone Database"),Object(l.b)("p",null,"We provide 2 pre-processed IANA Timezone:"),Object(l.b)("h4",{id:"full-contains-all-timezone-from-iana-database"},"Full: contains ALL Timezone from IANA database"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz'\n")),Object(l.b)("h4",{id:"golden-contains-popular-set-of-timezones-from-iana-database"},"Golden: contains popular set of timezones from IANA database"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-golden-tz'\n")),Object(l.b)("h3",{id:"default-timezone"},"Default Timezone"),Object(l.b)("p",null,"Since JS Engines do not expose default timezone, there's currently no way for us to detect local timezone that a browser is in. Therefore, the default timezone in this polyfill is ",Object(l.b)("inlineCode",{parentName:"p"},"UTC"),"."),Object(l.b)("p",null,"You can change this by either calling ",Object(l.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," or always explicitly pass in ",Object(l.b)("inlineCode",{parentName:"p"},"timeZone")," option for accurate date time calculation."),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," is not in the spec, you should make sure to check for its existence before calling it & after tz data has been loaded, e.g:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz.js'\n\nif ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n  Intl.DateTimeFormat.__setDefaultTimeZone('America/Los_Angeles')\n}\n")),Object(l.b)("h2",{id:"tests"},"Tests"),Object(l.b)("p",null,"This library is fully ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat"}),"test262"),"-compliant."))}s.isMDXComponent=!0}}]);