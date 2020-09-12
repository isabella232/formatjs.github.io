(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=m(a),p=n,g=b["".concat(i,".").concat(p)]||b[p]||d[p]||s;return a?r.a.createElement(g,o(o({ref:t},l),{},{components:a})):r.a.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),s=(a(0),a(108)),i={id:"message-declaration",title:"Message Declaration"},o={unversionedId:"getting-started/message-declaration",id:"getting-started/message-declaration",isDocsHomePage:!1,title:"Message Declaration",description:"While you can declare your messages using only ids, we highly recommend declaring defaultMessages inline along with their usages because of the following reasons:",source:"@site/docs/getting-started/message-declaration.md",slug:"/getting-started/message-declaration",permalink:"/docs/getting-started/message-declaration",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/message-declaration.md",version:"current",sidebar:"docs",previous:{title:"Application Workflow",permalink:"/docs/getting-started/application-workflow"},next:{title:"Message Extraction",permalink:"/docs/getting-started/message-extraction"}},c=[{value:"How to declare a message",id:"how-to-declare-a-message",children:[]}],l={rightToc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"While you can declare your messages using only ",Object(s.b)("inlineCode",{parentName:"p"},"id"),"s, we highly recommend declaring ",Object(s.b)("inlineCode",{parentName:"p"},"defaultMessage"),"s inline along with their usages because of the following reasons:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Messages colocated with their usages become self-managed, as their usages change/removed, so are the messages."),Object(s.b)("li",{parentName:"ol"},"Messages are highly contextual. We've seen a lot of cases where developers assume a certain grammar when they write their messages. Buttons/Call-To-Actions and labels are also translated differently."),Object(s.b)("li",{parentName:"ol"},"Text styling is also dependent on the message itself. Things like truncation, capitalization... certainly affect the messages themselves."),Object(s.b)("li",{parentName:"ol"},"Better integrations with toolchains. Most toolchains cannot verify cross-file references to validate syntax/usage.")),Object(s.b)("h2",{id:"how-to-declare-a-message"},"How to declare a message"),Object(s.b)("p",null,"At a high level, formatjs messages use ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/core-concepts/icu-syntax"}),"ICU Syntax")," with a couple of enhancements common in other message format such as ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/projectfluent/fluent.js/"}),"Fluent"),". This section focuses on the actual supported ways of calling ",Object(s.b)("inlineCode",{parentName:"p"},"formatjs")," APIs so messages can be extracted."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Using imperative API ",Object(s.b)("inlineCode",{parentName:"li"},"intl.formatMessage"))),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"// Method must be exactly `intl.formatMessage`\nintl.formatMessage(\n  {\n    description: 'A message', // Description should be a string literal\n    defaultMessage: 'My name is {name}', // Message should be a string literal\n  },\n  {\n    name: userName,\n  } // Values should be an object literal, but not necessarily every value inside\n)\n")),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"We rely on AST to extract messages from the codebase, thus calling ",Object(s.b)("inlineCode",{parentName:"p"},"intl.formatMessage()")," exactly is required (not ",Object(s.b)("inlineCode",{parentName:"p"},"formatMessage()")," or ",Object(s.b)("inlineCode",{parentName:"p"},"const {formatMessage: f} = intl; f()")," or the like)"))),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Using React API ",Object(s.b)("inlineCode",{parentName:"li"},"<FormattedMessage/>"))),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage\n  description="A message" // Description should be a string literal\n  defaultMessage="My name is {name}" // Message should be a string literal\n  values={\n    {\n      name: userName,\n    } // Values should be an object literal, but not necessarily every value inside\n  }\n/>\n')),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"We rely on AST to extract messages from the codebase, thus calling ",Object(s.b)("inlineCode",{parentName:"p"},"FormattedMessage")," exactly is required (not ",Object(s.b)("inlineCode",{parentName:"p"},"const F = FormattedMessage; <F />")," or the like)"))),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Pre-declaring using ",Object(s.b)("inlineCode",{parentName:"li"},"defineMessage")," for later consumption (less recommended)")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessage} from 'react-intl'\nconst message = defineMessage({\n  description: 'A message', // Description should be a string literal\n  defaultMessage: 'My name is {name}', // Message should be a string literal\n})\n\nintl.formatMessage(message, {name: 'John'}) // My name is John\n\n<FormattedMessage\n  {...message}\n  values={{\n    name: 'John',\n  }}\n/> // My name is John\n")),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"You can declare a message without immediately formatting it with ",Object(s.b)("inlineCode",{parentName:"p"},"defineMessage")," and our extractor would still be able to extract it. However, our ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tooling/linter#enforce-placeholders"}),"enforce-placeholders")," linter rule won't be able to analyze it."))))}m.isMDXComponent=!0}}]);