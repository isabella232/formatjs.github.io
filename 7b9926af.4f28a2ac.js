(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(a),f=n,b=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return a?r.a.createElement(b,o(o({ref:t},s),{},{components:a})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},109:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},110:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},111:function(e,t,a){"use strict";var n=a(0),r=a(110);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(111),l=a(109),o=a(48),c=a.n(o),s=37,m=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,u=e.values,p=e.groupId,f=Object(i.a)(),b=f.tabGroupChoices,d=f.setTabGroupChoices,j=Object(n.useState)(o),y=j[0],O=j[1],h=Object(n.useState)(!1),g=h[0],v=h[1];if(null!=p){var N=b[p];null!=N&&N!==y&&u.some((function(e){return e.value===N}))&&O(N)}var w=function(e){O(e),null!=p&&d(p,e)},T=[],D=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},z=function(){v(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",D),window.addEventListener("mousedown",z)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),D(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===y}))[0]))}},113:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(108)),l=a(112),o=a(113),c={id:"intl-datetimeformat",title:"Intl.DateTimeFormat (ES2020)"},s={unversionedId:"polyfills/intl-datetimeformat",id:"polyfills/intl-datetimeformat",isDocsHomePage:!1,title:"Intl.DateTimeFormat (ES2020)",description:"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-datetimeformat.md",slug:"/polyfills/intl-datetimeformat",permalink:"/docs/polyfills/intl-datetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-datetimeformat.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.NumberFormat (ES2020)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.Locale",permalink:"/docs/polyfills/intl-locale"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",children:[]},{value:"Default Timezone",id:"default-timezone",children:[]}]},{value:"Tests",id:"tests",children:[]}],u={rightToc:m};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"}))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(l.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm i @formatjs/intl-datetimeformat\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @formatjs/intl-datetimeformat\n")))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"This package requires the following capabilities:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(i.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),"Intl.NumberFormat")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"simple"},"Simple"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/locale-data/en' // locale-data for en\nimport '@formatjs/intl-datetimeformat/add-all-tz' // Add ALL tz data\n")),Object(i.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {shouldPolyfill} from '@formatjs/intl-datetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-datetimeformat/polyfill')\n  }\n\n  if (Intl.DateTimeFormat.polyfilled) {\n    // Parallelize CLDR data loading\n    const dataPolyfills = [import('@formatjs/intl-datetimeformat/add-all-tz')]\n\n    switch (locale) {\n      default:\n        dataPolyfills.push(\n          import('@formatjs/intl-datetimeformat/locale-data/en')\n        )\n        break\n      case 'fr':\n        dataPolyfills.push(\n          import('@formatjs/intl-datetimeformat/locale-data/fr')\n        )\n        break\n    }\n    await Promise.all(polyfills)\n  }\n}\n")),Object(i.b)("h3",{id:"adding-iana-timezone-database"},"Adding IANA Timezone Database"),Object(i.b)("p",null,"We provide 2 pre-processed IANA Timezone:"),Object(i.b)("h4",{id:"full-contains-all-timezone-from-iana-database"},"Full: contains ALL Timezone from IANA database"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz'\n")),Object(i.b)("h4",{id:"golden-contains-popular-set-of-timezones-from-iana-database"},"Golden: contains popular set of timezones from IANA database"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-golden-tz'\n")),Object(i.b)("h3",{id:"default-timezone"},"Default Timezone"),Object(i.b)("p",null,"Since JS Engines do not expose default timezone, there's currently no way for us to detect local timezone that a browser is in. Therefore, the default timezone in this polyfill is ",Object(i.b)("inlineCode",{parentName:"p"},"UTC"),"."),Object(i.b)("p",null,"You can change this by either calling ",Object(i.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," or always explicitly pass in ",Object(i.b)("inlineCode",{parentName:"p"},"timeZone")," option for accurate date time calculation."),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," is not in the spec, you should make sure to check for its existence before calling it & after tz data has been loaded, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz.js'\n\nif ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n  Intl.DateTimeFormat.__setDefaultTimeZone('America/Los_Angeles')\n}\n")),Object(i.b)("h2",{id:"tests"},"Tests"),Object(i.b)("p",null,"This library is fully ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat"}),"test262"),"-compliant."))}p.isMDXComponent=!0}}]);