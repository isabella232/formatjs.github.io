(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(f,l(l({ref:t},s),{},{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},254:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/workflow-cfcf0fe32b9a2d1097fcf2f11ed8b384.svg"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(108)),a={id:"application-workflow",title:"Application Workflow"},l={unversionedId:"getting-started/application-workflow",id:"getting-started/application-workflow",isDocsHomePage:!1,title:"Application Workflow",description:"While our Installation guide can help you get started, most production-ready i18n applications require a translation pipeline and workflow. This guide will give you an idea of how to build one.",source:"@site/docs/getting-started/application-workflow.md",slug:"/getting-started/application-workflow",permalink:"/docs/getting-started/application-workflow",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/application-workflow.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Message Declaration",permalink:"/docs/getting-started/message-declaration"}},c=[{value:"Project Structure",id:"project-structure",children:[]},{value:"Pipeline",id:"pipeline",children:[]},{value:"Where formatjs comes in",id:"where-formatjs-comes-in",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"While our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/installation"}),"Installation")," guide can help you get started, most production-ready i18n applications require a translation pipeline and workflow. This guide will give you an idea of how to build one."),Object(i.b)("h2",{id:"project-structure"},"Project Structure"),Object(i.b)("p",null,"A minimal i18n-friendly project can have the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"projectRoot\n|-- src\n|   |-- App.js\n|-- lang\n|   |-- en-US.json\n|   |-- fr.json\n|-- package.json\n|-- .eslintrc.js\n")),Object(i.b)("p",null,"where ",Object(i.b)("inlineCode",{parentName:"p"},"lang")," folder is where the aggregated strings file from your application would live. Integration with 3rd-party translation vendor can consume the ",Object(i.b)("inlineCode",{parentName:"p"},"en-US.json")," file and produce ",Object(i.b)("inlineCode",{parentName:"p"},"fr.json")," or other locale files accordingly."),Object(i.b)("h2",{id:"pipeline"},"Pipeline"),Object(i.b)("p",null,"A generic translation pipeline looks something like this:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Pipeline",src:n(254).default})),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Extraction"),": This step aggregates all ",Object(i.b)("inlineCode",{parentName:"li"},"defaultMessage"),"s from your application into a single JSON file along with ",Object(i.b)("inlineCode",{parentName:"li"},"description"),", ready to be translated."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Upload Messages"),": This step uploads the JSON file to your translation vendor."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Download Translations"),": This step either polls your translation vendor or hook into your vendor to download translated messages in the set of locales that you configured."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Commit"),": This commits back translation messages to the codebase.")),Object(i.b)("h2",{id:"where-formatjs-comes-in"},"Where formatjs comes in"),Object(i.b)("p",null,"The goal of this project is not to provide a solution for the whole pipeline, but rather focus on Developer Experience via tooling and best practices so devs are i18n-aware. This includes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Declaring i18n-friendly messages"),Object(i.b)("li",{parentName:"ol"},"Linter that enforces such messages"),Object(i.b)("li",{parentName:"ol"},"CLI for extraction & compilation"),Object(i.b)("li",{parentName:"ol"},"Polyfills for a stable i18n runtime environments"),Object(i.b)("li",{parentName:"ol"},"Bundler plugin for compiling TypeScript/JavaScript")))}p.isMDXComponent=!0}}]);