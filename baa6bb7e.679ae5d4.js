(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),i=(a(0),a(134)),l={id:"react-intl",title:"Overview"},o={id:"react-intl",title:"Overview",description:"[![npm Version](https://img.shields.io/npm/v/react-intl.svg?style=flat-square)](https://www.npmjs.org/package/react-intl)",source:"@site/docs/react-intl.md",permalink:"/docs/react-intl",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/react-intl.md",sidebar:"docs",previous:{title:"Intl MessageFormat Parser",permalink:"/docs/intl-messageformat-parser"},next:{title:"Components",permalink:"/docs/react-intl/components"}},c=[{value:"Runtime Requirements",id:"runtime-requirements",children:[{value:"Browser",id:"browser",children:[]},{value:"Node.js",id:"nodejs",children:[]},{value:"React Native",id:"react-native",children:[]}]},{value:"Stage-3 Intl Features",id:"stage-3-intl-features",children:[]},{value:"The <code>react-intl</code> Package",id:"the-react-intl-package",children:[{value:"Module Bundlers",id:"module-bundlers",children:[]}]},{value:"The React Intl Module",id:"the-react-intl-module",children:[]},{value:"Creating an I18n Context",id:"creating-an-i18n-context",children:[]},{value:"Formatting Data",id:"formatting-data",children:[{value:"Jest",id:"jest",children:[]},{value:"webpack",id:"webpack",children:[]}]},{value:"Message extraction",id:"message-extraction",children:[]},{value:"ESLint Plugin",id:"eslint-plugin",children:[]}],b={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/react-intl"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/react-intl.svg?style=flat-square",alt:"npm Version"})))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Welcome to React Intl's docs! This is the place to find React Intl's docs"),". Feel free to open a pull request and contribute to the docs to make them better."),Object(i.b)("h2",{id:"runtime-requirements"},"Runtime Requirements"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"We support IE11 & 2 most recent versions of Edge, Chrome & Firefox.")),Object(i.b)("p",null,"React Intl relies on these ",Object(i.b)("inlineCode",{parentName:"p"},"Intl")," APIs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),"Intl.NumberFormat"),": Available on IE11+")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"}),"Intl.DateTimeFormat"),": Available on IE11+")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"}),"Intl.PluralRules"),": This can be polyfilled using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-pluralrules"}),"this package"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"}),"Intl.RelativeTimeFormat"),": This can be polyfilled using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-relativetimeformat"}),"this package"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"(Optional) ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tc39.es/proposal-intl-displaynames/"}),"Intl.DisplayNames"),": Required if you use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#formatdisplayname"}),Object(i.b)("inlineCode",{parentName:"a"},"formatDisplayName")),"\nor ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/components#formatteddisplayname"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedDisplayName")),". This can be polyfilled using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-displaynames"}),"this package"),"."))),Object(i.b)("p",null,"If you need to support older browsers, we recommend you do the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Polyfill ",Object(i.b)("inlineCode",{parentName:"li"},"Intl.NumberFormat")," with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/andyearnshaw/Intl.js"}),"https://github.com/andyearnshaw/Intl.js")),Object(i.b)("li",{parentName:"ol"},"Polyfill ",Object(i.b)("inlineCode",{parentName:"li"},"Intl.DateTimeFormat")," with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/formatjs/date-time-format-timezone"}),"https://github.com/formatjs/date-time-format-timezone")),Object(i.b)("li",{parentName:"ol"},"If you're supporting browsers that do not have ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"}),"Intl.PluralRules")," (e.g IE11 & Safari 12-), include this ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-pluralrules"}),"polyfill")," in your build.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"if (!Intl.PluralRules) {\n  require('@formatjs/intl-pluralrules/polyfill');\n  require('@formatjs/intl-pluralrules/dist/locale-data/de'); // Add locale data for de\n}\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"If you're supporting browsers that do not have ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"}),"Intl.RelativeTimeFormat")," (e.g IE11, Edge, Safari 12-), include this ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"tooling/intl-relativetimeformat.md"}),"polyfill")," in your build along with individual CLDR data for each locale you support.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"if (!Intl.RelativeTimeFormat) {\n  require('@formatjs/intl-relativetimeformat/polyfill');\n  require('@formatjs/intl-relativetimeformat/dist/locale-data/de'); // Add locale data for de\n}\n")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"If you need ",Object(i.b)("inlineCode",{parentName:"li"},"Intl.DisplayNames"),", include this ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-displaynames"}),"polyfill")," in your build along\nwith individual CLDR data for each locale you support.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"if (!Intl.DisplayNames) {\n  require('@formatjs/intl-displaynames/polyfill');\n  require('@formatjs/intl-displaynames/dist/locale-data/de'); // Add locale data for de\n}\n")),Object(i.b)("h3",{id:"browser"},"Browser"),Object(i.b)("p",null,"We officially support IE11 along with 2 most recent versions of Edge, Chrome & Firefox."),Object(i.b)("h3",{id:"nodejs"},"Node.js"),Object(i.b)("h4",{id:"full-icu"},"full-icu"),Object(i.b)("p",null,"Starting with Node.js 13.0.0 full-icu is supported by default."),Object(i.b)("p",null,"If using React Intl in an earlier version of Node.js, your ",Object(i.b)("inlineCode",{parentName:"p"},"node")," binary has to either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get compiled with ",Object(i.b)("inlineCode",{parentName:"li"},"full-icu")," using these ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/api/intl.html"}),"instructions"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OR")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Uses ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/full-icu"}),Object(i.b)("inlineCode",{parentName:"a"},"full-icu")," npm package"))),Object(i.b)("p",null,"If your ",Object(i.b)("inlineCode",{parentName:"p"},"node")," version is missing any of the ",Object(i.b)("inlineCode",{parentName:"p"},"Intl")," APIs above, you'd have to polyfill them accordingly."),Object(i.b)("h3",{id:"react-native"},"React Native"),Object(i.b)("p",null,"If you're using ",Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," in React Native, make sure your runtime has built-in ",Object(i.b)("inlineCode",{parentName:"p"},"Intl")," support (similar to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/jsc-android-buildscripts#international-variant"}),"JSC International variant"),"). See these issues for more details:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/formatjs/formatjs/issues/1356"}),"https://github.com/formatjs/formatjs/issues/1356")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/formatjs/formatjs/issues/992"}),"https://github.com/formatjs/formatjs/issues/992"))),Object(i.b)("h4",{id:"react-native-on-ios"},"React Native on iOS"),Object(i.b)("p",null,"If you cannot use the Intl variant of JSC (e.g on iOS), follow the instructions in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#runtime-requirements"}),"Runtime Requirements")," to polyfill those APIs accordingly."),Object(i.b)("h2",{id:"stage-3-intl-features"},"Stage-3 Intl Features"),Object(i.b)("p",null,"FormatJS also provides types & polyfill for the following Stage 3 Intl APIs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unified NumberFormat: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"polyfills/intl-unified-numberformat.md"}),"polyfill")," & ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-unified-intl-numberformat"}),"spec")),Object(i.b)("li",{parentName:"ul"},"DisplayNames: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-displaynames"}),"polyfill")," & ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://tc39.es/proposal-intl-displaynames/"}),"spec"))),Object(i.b)("h2",{id:"the-react-intl-package"},"The ",Object(i.b)("inlineCode",{parentName:"h2"},"react-intl")," Package"),Object(i.b)("p",null,"Install the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-intl"}),Object(i.b)("inlineCode",{parentName:"a"},"react-intl")," npm package")," via npm:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install react-intl --save\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," npm package distributes the following modules (links from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/"}),"unpkg"),"):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://unpkg.com/react-intl@latest/dist/index.js"}),Object(i.b)("strong",{parentName:"a"},"CommonJS")),":\nunbundled dependencies, ",Object(i.b)("inlineCode",{parentName:"li"},'"main"')," in ",Object(i.b)("inlineCode",{parentName:"li"},"package.json"),", warnings in dev."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://unpkg.com/react-intl@latest/lib/index.js"}),Object(i.b)("strong",{parentName:"a"},"ES6")),":\nunbundled dependencies, ",Object(i.b)("inlineCode",{parentName:"li"},'"module"')," in ",Object(i.b)("inlineCode",{parentName:"li"},"package.json"),", warnings in dev."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://unpkg.com/react-intl@latest/dist/react-intl.js"}),Object(i.b)("strong",{parentName:"a"},"UMD dev")),":\nbundled dependencies (except ",Object(i.b)("inlineCode",{parentName:"li"},"react"),"), browser or Node, warnings."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://unpkg.com/react-intl@latest/dist/react-intl.min.js"}),Object(i.b)("strong",{parentName:"a"},"UMD prod")),":\nminified, bundled dependencies (except ",Object(i.b)("inlineCode",{parentName:"li"},"react"),"), browser or Node, no warnings.")),Object(i.b)("h3",{id:"module-bundlers"},"Module Bundlers"),Object(i.b)("p",null,"We've made React Intl work well with module bundlers like: Browserify, Webpack, or Rollup which can be used to bundle React Intl for the browser:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},'"browser"')," field in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," is specified so that only basic English locale data is included when bundling. This way when using the ",Object(i.b)("inlineCode",{parentName:"p"},'"main"')," module in Node all locale data is loaded, but ignored when bundled for the browser.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"An ES6 version of React Intl is provided as ",Object(i.b)("inlineCode",{parentName:"p"},'"jsnext:main"')," and ",Object(i.b)("inlineCode",{parentName:"p"},'"module"')," in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and can be used with Rollup.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Development-time warnings are wrapped with ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'"),", this allows you to specify ",Object(i.b)("inlineCode",{parentName:"p"},"NODE_ENV")," when bundling and minifying to have these code blocks removed."))),Object(i.b)("h2",{id:"the-react-intl-module"},"The React Intl Module"),Object(i.b)("p",null,"Whether you use the ES6, CommonJS, or UMD version of React Intl, they all provide the same named exports:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/api#injectintl"}),Object(i.b)("inlineCode",{parentName:"a"},"injectIntl"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/api#definemessages"}),Object(i.b)("inlineCode",{parentName:"a"},"defineMessages"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#intlprovider"}),Object(i.b)("inlineCode",{parentName:"a"},"IntlProvider"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#formatteddate"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedDate"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#formattedtime"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedTime"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#formattedrelativetime"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedRelativeTime"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#formattednumber"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedNumber"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#formattedplural"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedPlural"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#formattedmessage"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedMessage")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," When using the UMD version of React Intl ",Object(i.b)("em",{parentName:"p"},"without")," a module system, it will expect ",Object(i.b)("inlineCode",{parentName:"p"},"react")," to exist on the global variable: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"React")),", and put the above named exports on the global variable: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"ReactIntl")),"."),Object(i.b)("h2",{id:"creating-an-i18n-context"},"Creating an I18n Context"),Object(i.b)("p",null,"Now with React Intl and its locale data loaded an i18n context can be created for your React app."),Object(i.b)("p",null,"React Intl uses the provider pattern to scope an i18n context to a tree of components. This allows configuration like the current locale and set of translated strings/messages to be provided at the root of a component tree and made available to the ",Object(i.b)("inlineCode",{parentName:"p"},"<Formatted*>")," components. This is the same concept as what Flux frameworks like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://redux.js.org/"}),"Redux")," use to provide access to a store within a component tree."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"All apps using React Intl must use the ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"/docs/react-intl/components#intlprovider"}),Object(i.b)("inlineCode",{parentName:"a"},"<IntlProvider>")," component"),".")),Object(i.b)("p",null,"The most common usage is to wrap your root React component with ",Object(i.b)("inlineCode",{parentName:"p"},"<IntlProvider>")," and configure it with the user's current locale and the corresponding translated strings/messages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ReactDOM.render(\n  <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}>\n    <App />\n  </IntlProvider>,\n  document.getElementById('container')\n);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"See:")," The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/components#intlprovider"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"<IntlProvider>")," docs"))," for more details."),Object(i.b)("h2",{id:"formatting-data"},"Formatting Data"),Object(i.b)("p",null,"React Intl has two ways to format data, through ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/components"}),"React components")," and its ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api"}),"API"),". The components provide an idiomatic-React way of integrating internationalization into a React app, and the ",Object(i.b)("inlineCode",{parentName:"p"},"<Formatted*>")," components have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/components#why-components"}),"benefits")," over always using the imperative API directly. The API should be used when your React component needs to format data to a string value where a React element is not suitable; e.g., a ",Object(i.b)("inlineCode",{parentName:"p"},"title")," or ",Object(i.b)("inlineCode",{parentName:"p"},"aria")," attribute, or for side-effect in ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidMount"),"."),Object(i.b)("p",null,"React Intl's imperative API is accessed via ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#injectintl"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"injectIntl"))),", a High-Order Component (HOC) factory. It will wrap the passed-in React component with another React component which provides the imperative formatting API into the wrapped component via its ",Object(i.b)("inlineCode",{parentName:"p"},"props"),". (This is similar to the connect-to-stores pattern found in many Flux implementations.)"),Object(i.b)("p",null,"Here's an example using ",Object(i.b)("inlineCode",{parentName:"p"},"<IntlProvider>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<Formatted*>")," components, and the imperative API to setup an i18n context and format data:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {injectIntl, IntlProvider, FormattedRelative} from 'react-intl';\n\nconst MS_IN_DAY = 1e3 * 3600 * 24\n\nconst PostDate = ({date, intl}) => {\n  const intl = useIntl()\n  return (\n    <span title={intl.formatDate(date)}>\n      <FormattedRelativeTime value={(Date.now() - date)/MS_IN_DAY} unit=\"day\"/>\n    </span>\n  )\n});\n\nconst App = ({post}) => (\n  <div>\n    <h1>{post.title}</h1>\n    <p>\n      <PostDate date={post.date} />\n    </p>\n    <div>{post.body}</div>\n  </div>\n);\n\nReactDOM.render(\n  <IntlProvider locale={navigator.language}>\n    <App\n      post={{\n        title: 'Hello, World!',\n        date: new Date(1459913574887),\n        body: 'Amazing content.',\n      }}\n    />\n  </IntlProvider>,\n  document.getElementById('container')\n);\n")),Object(i.b)("p",null,"Assuming ",Object(i.b)("inlineCode",{parentName:"p"},"navigator.language")," is ",Object(i.b)("inlineCode",{parentName:"p"},'"en-us"'),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<div>\n  <h1>Hello, World!</h1>\n  <p><span title="4/5/2016">yesterday</span></p>\n  <div>\n    Amazing content.\n  </div>\n</div>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"See:")," The ","[",Object(i.b)("strong",{parentName:"p"},"API docs"),"][api]"," and ","[",Object(i.b)("strong",{parentName:"p"},"Component docs"),"][components]"," for more details."),Object(i.b)("h1",{id:"esm-build"},"ESM Build"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," and its underlying libraries (",Object(i.b)("inlineCode",{parentName:"p"},"intl-messageformat-parser"),", ",Object(i.b)("inlineCode",{parentName:"p"},"intl-messageformat"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@formatjs/intl-relativetimeformat"),", ",Object(i.b)("inlineCode",{parentName:"p"},"intl-format-cache"),", ",Object(i.b)("inlineCode",{parentName:"p"},"intl-utils"),") export ESM artifacts. This means you should configure your build toolchain to transpile those libraries."),Object(i.b)("h3",{id:"jest"},"Jest"),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," to always include those libraries, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"{\n  transformIgnorePatterns: [\n    '/node_modules/(?!intl-messageformat|intl-messageformat-parser).+\\\\.js$',\n  ],\n}\n")),Object(i.b)("h3",{id:"webpack"},"webpack"),Object(i.b)("p",null,"If you're using ",Object(i.b)("inlineCode",{parentName:"p"},"babel-loader"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"ts-loader"),", you can do 1 of the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add those libraries in ",Object(i.b)("inlineCode",{parentName:"li"},"include"),":")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'include: [\n  path.join(__dirname, "node_modules/react-intl"),\n  path.join(__dirname, "node_modules/intl-messageformat"),\n  path.join(__dirname, "node_modules/intl-messageformat-parser"),\n],\n')),Object(i.b)("p",null,"OR"),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add those libraries in ",Object(i.b)("inlineCode",{parentName:"li"},"exclude"),":")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"exclude: /node_modules\\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,\n")),Object(i.b)("h1",{id:"core-concepts"},"Core Concepts"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Formatters (Date, Number, Message, Relative)"),Object(i.b)("li",{parentName:"ul"},"Provider and Injector"),Object(i.b)("li",{parentName:"ul"},"API and Components"),Object(i.b)("li",{parentName:"ul"},"Message Descriptor"),Object(i.b)("li",{parentName:"ul"},"Message Syntax"),Object(i.b)("li",{parentName:"ul"},"Defining default messages for extraction"),Object(i.b)("li",{parentName:"ul"},"Custom, named formats")),Object(i.b)("h1",{id:"example-apps"},"Example Apps"),Object(i.b)("p",null,"There are several ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/formatjs/react-intl/tree/master/examples"}),Object(i.b)("strong",{parentName:"a"},"runnable example apps"))," in this Git repo. These are a great way to see React Intl's ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#core-concepts"}),"core concepts")," in action in simplified applications."),Object(i.b)("h1",{id:"api-reference"},"API Reference"),Object(i.b)("p",null,"There are a few API layers that React Intl provides and is built on. When using React Intl you'll be interacting with ",Object(i.b)("inlineCode",{parentName:"p"},"Intl")," built-ins, React Intl's API, and its React components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),"ECMAScript Internationalization API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/api"}),"React Intl API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components"}),"React Intl Components"))),Object(i.b)("h1",{id:"typescript-usage"},"TypeScript Usage"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," is written in TypeScript, thus having 1st-class TS support."),Object(i.b)("p",null,"In order to use ",Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," in TypeScript, make sure your ",Object(i.b)("inlineCode",{parentName:"p"},"compilerOptions"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"lib")," config include ",Object(i.b)("inlineCode",{parentName:"p"},'["esnext.intl", "es2017.intl", "es2018.intl"]'),"."),Object(i.b)("h1",{id:"advanced-usage"},"Advanced Usage"),Object(i.b)("p",null,"Our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/advanced-usage"}),"Advanced Usage")," has further guides for production setup in environments where performance is important."),Object(i.b)("h1",{id:"supported-tooling"},"Supported Tooling"),Object(i.b)("h2",{id:"message-extraction"},"Message extraction"),Object(i.b)("p",null,"We've built ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tooling/cli"}),"@formatjs/cli")," that helps you extract messages from a list of files. It uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"tooling/babel-plugin-react-intl.md"}),"babel-plugin-react-intl")," under the hood and should be able to extract messages if you're declaring using 1 of the mechanisms below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl';\n\ndefineMessages({\n  foo: {\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n});\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import {FormattedMessage} from \'react-intl\';\n\n<FormattedMessage id="foo" defaultMessage="foo" description="bar" />;\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"function Comp(props) {\n  const {intl} = props;\n  return intl.formatMessage({\n    // The whole `intl.formatMessage` is required so we can extract\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  });\n}\n")),Object(i.b)("h2",{id:"eslint-plugin"},"ESLint Plugin"),Object(i.b)("p",null,"We've also built ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tooling/linter"}),"eslint-plugin-formatjs")," that helps enforcing specific rules on your messages if your translation vendor has restrictions."))}s.isMDXComponent=!0},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(u,o({ref:t},b,{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);