(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),m=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},f=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),f=n,d=p["".concat(r,".").concat(f)]||p[f]||b[f]||i;return a?l.a.createElement(d,o(o({ref:t},s),{},{components:a})):l.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},109:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},110:function(e,t,a){"use strict";var n=a(0);const l=Object(n.createContext)(void 0);t.a=l},111:function(e,t,a){"use strict";var n=a(0),l=a(110);t.a=function(){const e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(111),r=a(109),o=a(48),c=a.n(o);const s=37,m=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:p,groupId:b}=e,{tabGroupChoices:f,setTabGroupChoices:d}=Object(i.a)(),[u,j]=Object(n.useState)(o),[y,O]=Object(n.useState)(!1);if(null!=b){const e=f[b];null!=e&&e!==u&&p.some(t=>t.value===e)&&j(e)}const h=e=>{j(e),null!=b&&d(b,e)},g=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},N=()=>{O(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",N)},[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":u===e,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":u===e}),style:y?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),v(e)},onFocus:()=>h(e),onClick:()=>{h(e),O(!1)},onPointerDown:()=>O(!1)},t))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===u)[0]))}},113:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a(2),l=a(6),i=(a(0),a(108)),r=a(112),o=a(113),c={id:"intl-datetimeformat",title:"Intl.DateTimeFormat (ES2020)"},s={unversionedId:"polyfills/intl-datetimeformat",id:"polyfills/intl-datetimeformat",isDocsHomePage:!1,title:"Intl.DateTimeFormat (ES2020)",description:"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-datetimeformat.md",slug:"/polyfills/intl-datetimeformat",permalink:"/docs/polyfills/intl-datetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-datetimeformat.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.NumberFormat (ES2020)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.Locale",permalink:"/docs/polyfills/intl-locale"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",children:[]},{value:"Default Timezone",id:"default-timezone",children:[]}]},{value:"Tests",id:"tests",children:[]}],p={rightToc:m};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"}))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(r.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm i @formatjs/intl-datetimeformat\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @formatjs/intl-datetimeformat\n")))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"This package requires the following capabilities:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(i.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),"Intl.NumberFormat")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"simple"},"Simple"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/locale-data/en' // locale-data for en\nimport '@formatjs/intl-datetimeformat/add-all-tz' // Add ALL tz data\n")),Object(i.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {shouldPolyfill} from '@formatjs/intl-datetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-datetimeformat/polyfill')\n  }\n\n  if (Intl.DateTimeFormat.polyfilled) {\n    // Parallelize CLDR data loading\n    const dataPolyfills = [import('@formatjs/intl-datetimeformat/add-all-tz')]\n\n    switch (locale) {\n      default:\n        dataPolyfills.push(\n          import('@formatjs/intl-datetimeformat/locale-data/en')\n        )\n        break\n      case 'fr':\n        dataPolyfills.push(\n          import('@formatjs/intl-datetimeformat/locale-data/fr')\n        )\n        break\n    }\n    await Promise.all(polyfills)\n  }\n}\n")),Object(i.b)("h3",{id:"adding-iana-timezone-database"},"Adding IANA Timezone Database"),Object(i.b)("p",null,"We provide 2 pre-processed IANA Timezone:"),Object(i.b)("h4",{id:"full-contains-all-timezone-from-iana-database"},"Full: contains ALL Timezone from IANA database"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz'\n")),Object(i.b)("h4",{id:"golden-contains-popular-set-of-timezones-from-iana-database"},"Golden: contains popular set of timezones from IANA database"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-golden-tz'\n")),Object(i.b)("h3",{id:"default-timezone"},"Default Timezone"),Object(i.b)("p",null,"Since JS Engines do not expose default timezone, there's currently no way for us to detect local timezone that a browser is in. Therefore, the default timezone in this polyfill is ",Object(i.b)("inlineCode",{parentName:"p"},"UTC"),"."),Object(i.b)("p",null,"You can change this by either calling ",Object(i.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," or always explicitly pass in ",Object(i.b)("inlineCode",{parentName:"p"},"timeZone")," option for accurate date time calculation."),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," is not in the spec, you should make sure to check for its existence before calling it & after tz data has been loaded, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz.js'\n\nif ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n  Intl.DateTimeFormat.__setDefaultTimeZone('America/Los_Angeles')\n}\n")),Object(i.b)("h2",{id:"tests"},"Tests"),Object(i.b)("p",null,"This library is fully ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat"}),"test262"),"-compliant."))}b.isMDXComponent=!0}}]);