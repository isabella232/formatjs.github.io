(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{108:function(e,t,l){"use strict";l.d(t,"a",(function(){return f})),l.d(t,"b",(function(){return m}));var r=l(0),n=l.n(r);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},f=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(l),b=r,m=f["".concat(o,".").concat(b)]||f[b]||u[b]||a;return l?n.a.createElement(m,i(i({ref:t},s),{},{components:l})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=l[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,l)}b.displayName="MDXCreateElement"},253:function(e,t,l){"use strict";l.r(t),t.default=l.p+"assets/images/polyfills-8d883309f323a0f6628700878ed6bf20.svg"},78:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return o})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return c})),l.d(t,"default",(function(){return p}));var r=l(2),n=l(6),a=(l(0),l(108)),o={id:"polyfills",title:"Polyfills"},i={unversionedId:"polyfills",id:"polyfills",isDocsHomePage:!1,title:"Polyfills",description:"One of our goals is to provide developers with access to newest ECMA-402 Intl APIs. Therefore, FormatJS suite also provide multiple high quality polyfills that are fully tested using the Official ECMAScript Conformance Test Suite.",source:"@site/docs/polyfills.md",slug:"/polyfills",permalink:"/docs/polyfills",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills.md",version:"current",sidebar:"polyfills",next:{title:"Intl.getCanonicalLocales",permalink:"/docs/polyfills/intl-getcanonicallocales"}},c=[],s={rightToc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One of our goals is to provide developers with access to newest ECMA-402 Intl APIs. Therefore, FormatJS suite also provide multiple high quality polyfills that are fully tested using the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"Official ECMAScript Conformance Test Suite"),"."),Object(a.b)("p",null,"Our current list of polyfills includes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/polyfills/intl-pluralrules"}),"Intl.PluralRules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/polyfills/intl-relativetimeformat"}),"Intl.RelativeTimeFormat")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/polyfills/intl-listformat"}),"Intl.ListFormat")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/polyfills/intl-displaynames"}),"Intl.DisplayNames")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/polyfills/intl-numberformat"}),"Intl.NumberFormat")," (ES2020)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/polyfills/intl-locale"}),"Intl.Locale")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/polyfills/intl-getcanonicallocales"}),"Intl.getCanonicalLocales")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/polyfills/intl-datetimeformat"}),"Intl.DateTimeFormat")," (ES2020)")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Polyfill Hierarchy",src:l(253).default})))}p.isMDXComponent=!0}}]);