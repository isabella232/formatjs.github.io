(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(6),r=(a(0),a(134)),o={id:"upgrade-guide-2x",title:"Upgrade Guide (v1 -> v2)"},l={id:"react-intl/upgrade-guide-2x",title:"Upgrade Guide (v1 -> v2)",description:"## Use React 0.14 or 15",source:"@site/docs/react-intl/upgrade-guide-2.x.md",permalink:"/docs/react-intl/upgrade-guide-2x",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/react-intl/upgrade-guide-2.x.md",sidebar:"docs",previous:{title:"Upgrade Guide (v2 -> v3)",permalink:"/docs/react-intl/upgrade-guide-3x"},next:{title:"CLI",permalink:"/docs/tooling/cli"}},c=[{value:"Use React 0.14 or 15",id:"use-react-014-or-15",children:[]},{value:"Update How Locale Data is Added",id:"update-how-locale-data-is-added",children:[{value:"Add Call to <code>addLocaleData()</code> in Browser",id:"add-call-to-addlocaledata-in-browser",children:[]}]},{value:"Remove Intl Mixin",id:"remove-intl-mixin",children:[{value:"Update to <code>IntlProvider</code>",id:"update-to-intlprovider",children:[]},{value:"Update to <code>injectIntl()</code>",id:"update-to-injectintl",children:[]}]},{value:"Change How Messages are Formatted",id:"change-how-messages-are-formatted",children:[{value:"Flatten <code>messages</code> Object",id:"flatten-messages-object",children:[]},{value:"Replace <code>getIntlMessage()</code> Calls with Message Descriptors",id:"replace-getintlmessage-calls-with-message-descriptors",children:[]},{value:"Update <code>formatMessage()</code> Calls",id:"update-formatmessage-calls",children:[]},{value:"Update <code>FormattedMessage</code> and <code>FormattedHTMLMessage</code> Instances",id:"update-formattedmessage-and-formattedhtmlmessage-instances",children:[]}]},{value:"Update How Relative Times are Formatted",id:"update-how-relative-times-are-formatted",children:[{value:"Rename <code>FormattedRelative</code>&#39;s <code>now</code> Prop to <code>initialNow</code>",id:"rename-formattedrelatives-now-prop-to-initialnow",children:[]},{value:"Merge <code>formatRelative()</code>&#39;s Second and Third Arguments",id:"merge-formatrelatives-second-and-third-arguments",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"use-react-014-or-15"},"Use React 0.14 or 15"),Object(r.b)("p",null,"React Intl v2 has a peer dependency on ",Object(r.b)("inlineCode",{parentName:"p"},"react@^0.14.0 || ^15.0.0-0")," and now takes advantage of features and changes in React 0.14 and also works with React 15."),Object(r.b)("h2",{id:"update-how-locale-data-is-added"},"Update How Locale Data is Added"),Object(r.b)("p",null,"The locale data modules in React Intl v2 have been refactored to ",Object(r.b)("em",{parentName:"p"},"provide")," data, instead of mutating React Intl's internal locale data registry. The ",Object(r.b)("inlineCode",{parentName:"p"},"react-intl/locale-data/*")," files are also decoupled from the ",Object(r.b)("inlineCode",{parentName:"p"},"ReactIntl")," global and instead provide UMD modules with a new ",Object(r.b)("inlineCode",{parentName:"p"},"ReactIntlLocaleData")," global. These changes, mean apps need update how they are registering the locale data they need in the browser."),Object(r.b)("h3",{id:"add-call-to-addlocaledata-in-browser"},"Add Call to ",Object(r.b)("inlineCode",{parentName:"h3"},"addLocaleData()")," in Browser"),Object(r.b)("p",null,"There is now an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#addlocaledata"}),Object(r.b)("inlineCode",{parentName:"a"},"addLocaleData()"))," function that needs to be called with the locale data that has been loaded. You can do the following in your main client JavaScript entry point:"),Object(r.b)("p",null,"This assumes a locale data ",Object(r.b)("inlineCode",{parentName:"p"},"<script>")," is added based on the request; e.g., for French speaking users:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="react-intl/locale-data/fr.js"><\/script>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Using ",Object(r.b)("inlineCode",{parentName:"strong"},'<script src="react-intl/dist/react-intl.js>'),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"if ('ReactIntl' in window && 'ReactIntlLocaleData' in window) {\n  Object.keys(ReactIntlLocaleData).forEach(lang => {\n    ReactIntl.addLocaleData(ReactIntlLocaleData[lang]);\n  });\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Using Browserify/Webpack to Load React Intl:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {addLocaleData} from 'react-intl';\n\nif ('ReactIntlLocaleData' in window) {\n  Object.keys(ReactIntlLocaleData).forEach(lang => {\n    addLocaleData(ReactIntlLocaleData[lang]);\n  });\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," This decoupling of the library from the locale data, allows for the files to be loaded via ",Object(r.b)("inlineCode",{parentName:"p"},"<script async>"),". When using async scripts, your client bootstrapping code will need to wait for the ",Object(r.b)("inlineCode",{parentName:"p"},"load")," event, including the code above."),Object(r.b)("h2",{id:"remove-intl-mixin"},"Remove Intl Mixin"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The ",Object(r.b)("inlineCode",{parentName:"strong"},"IntlMixin")," has been removed from React Intl v2.")," The mixin did two things: it automatically propagated ",Object(r.b)("inlineCode",{parentName:"p"},"locales"),", ",Object(r.b)("inlineCode",{parentName:"p"},"formats"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," throughout an app's hierarchy, and it provided an imperative API via ",Object(r.b)("inlineCode",{parentName:"p"},"format*()")," functions. These jobs are now handled by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"Components#intlprovider"}),Object(r.b)("inlineCode",{parentName:"a"},"<IntlProvider>"))," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#injection-api"}),Object(r.b)("inlineCode",{parentName:"a"},"injectIntl()")),", respectively:"),Object(r.b)("h3",{id:"update-to-intlprovider"},"Update to ",Object(r.b)("inlineCode",{parentName:"h3"},"IntlProvider")),Object(r.b)("p",null,"In React Intl v1, you would add the ",Object(r.b)("inlineCode",{parentName:"p"},"IntlMixin")," to your root component; e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"<App>"),". Remove the ",Object(r.b)("inlineCode",{parentName:"p"},"IntlMixin")," and instead wrap your root component with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"Components#intlprovider"}),Object(r.b)("inlineCode",{parentName:"a"},"<IntlProvider>")),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import ReactDOM from 'react-dom';\nimport {IntlProvider} from 'react-intl';\n\nReactDOM.render(\n  <IntlProvider locale=\"en\">\n    <App />\n  </IntlProvider>,\n  document.getElementById('container')\n);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," The ",Object(r.b)("inlineCode",{parentName:"p"},"locale")," prop is ",Object(r.b)("strong",{parentName:"p"},"singular"),", required, and only accepts a string value. This is a simplification of the plural ",Object(r.b)("inlineCode",{parentName:"p"},"locales")," prop used by the ",Object(r.b)("inlineCode",{parentName:"p"},"IntlMixin"),"."),Object(r.b)("h3",{id:"update-to-injectintl"},"Update to ",Object(r.b)("inlineCode",{parentName:"h3"},"injectIntl()")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"IntlMixin")," also provided the imperative API for custom components to use the ",Object(r.b)("inlineCode",{parentName:"p"},"format*()")," methods; e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"formatDate()")," to get formatted strings for using in places like ",Object(r.b)("inlineCode",{parentName:"p"},"title")," and ",Object(r.b)("inlineCode",{parentName:"p"},"aria")," attribute. Remove the ",Object(r.b)("inlineCode",{parentName:"p"},"IntlMixin")," and instead use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#injectintl"}),Object(r.b)("inlineCode",{parentName:"a"},"injectIntl()"))," Hight Order Component (HOC) factory function to inject the imperative API via ",Object(r.b)("inlineCode",{parentName:"p"},"props"),"."),Object(r.b)("p",null,"Here's an example of a custom ",Object(r.b)("inlineCode",{parentName:"p"},"<RelativeTime>")," stateless component which uses ",Object(r.b)("inlineCode",{parentName:"p"},"injectIntl()")," and the imperative ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#formatdate"}),Object(r.b)("inlineCode",{parentName:"a"},"formatDate()"))," API:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport {injectIntl, FormattedRelative} from 'react-intl';\n\nconst to2Digits = num => `${num < 10 ? `0${num}` : num}`;\n\nconst RelativeTime = ({date, intl}) => {\n  date = new Date(date);\n\n  let year = date.getFullYear();\n  let month = date.getMonth() + 1;\n  let day = date.getDate();\n\n  let formattedDate = intl.formatDate(date, {\n    year: 'long',\n    month: 'numeric',\n    day: 'numeric',\n  });\n\n  return (\n    <time\n      dateTime={`${year}-${to2Digits(month)}-${to2Digits(day)}`}\n      title={formattedDate}\n    >\n      <FormattedRelative value={date} />\n    </time>\n  );\n};\n\nexport default injectIntl(RelativeTime);\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"injectIntl()")," is similar to a ",Object(r.b)("inlineCode",{parentName:"p"},"connect()")," HOC factory function you might find in a Flux framework to connect a component to a store."),Object(r.b)("h2",{id:"change-how-messages-are-formatted"},"Change How Messages are Formatted"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The way string messages are formatted in React Intl v2 has changed significantly!")," This is the most disruptive set of change when upgrading from v1 to v2; but it enables many great new features."),Object(r.b)("p",null,"React Intl v2 introduces a new ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#message-descriptor"}),Object(r.b)("strong",{parentName:"a"},"Message Descriptor"))," concept which can be used to define an app's default string messages. A Message Descriptor is an object with the following properties, ",Object(r.b)("inlineCode",{parentName:"p"},"id")," is the only required prop:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"id")),": A unique, stable identifier for the message"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"description")),": Context for the translator about how it's used in the UI"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"defaultMessage")),": The default message (probably in English)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," This upgrade guide will focus on using Message Descriptors that only contain an ",Object(r.b)("inlineCode",{parentName:"p"},"id")," property."),Object(r.b)("h3",{id:"flatten-messages-object"},"Flatten ",Object(r.b)("inlineCode",{parentName:"h3"},"messages")," Object"),Object(r.b)("p",null,"React Intl v2 no longer supports nested ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," objects, instead the collection of translated string messages passed to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"Components#intlprovider"}),Object(r.b)("inlineCode",{parentName:"a"},"<IntlProvider>"))," must be flat. This is an explicit design choice which simplifies while increasing flexibility. React Intl v2 does not apply any special semantics to strings with dots; e.g., ",Object(r.b)("inlineCode",{parentName:"p"},'"namespaced.string_id"'),"."),Object(r.b)("p",null,"Apps using a nested ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," object structure could use the following function to flatten their object according to React Intl v1's semantics:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"function flattenMessages(nestedMessages, prefix = '') {\n  return Object.keys(nestedMessages).reduce((messages, key) => {\n    let value = nestedMessages[key];\n    let prefixedKey = prefix ? `${prefix}.${key}` : key;\n\n    if (typeof value === 'string') {\n      messages[prefixedKey] = value;\n    } else {\n      Object.assign(messages, flattenMessages(value, prefixedKey));\n    }\n\n    return messages;\n  }, {});\n}\n\nlet messages = flattenMessages(nestedMessages);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Message ids can still contain ",Object(r.b)("inlineCode",{parentName:"p"},'"."'),"s, so the ids themselves remain the same, it's only the ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," object structure that needs to change."),Object(r.b)("h3",{id:"replace-getintlmessage-calls-with-message-descriptors"},"Replace ",Object(r.b)("inlineCode",{parentName:"h3"},"getIntlMessage()")," Calls with Message Descriptors"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"getIntlMessage()")," method that was provided by the ",Object(r.b)("inlineCode",{parentName:"p"},"IntlMixin")," has been removed in React Intl v2. It was simply a helper that interpreted a message id string with ",Object(r.b)("inlineCode",{parentName:"p"},'"."'),"s by looking up the translated message in a nested ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," object. With the removal of ",Object(r.b)("inlineCode",{parentName:"p"},"IntlMixin")," and the change to a flat ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," object, this method has been removed."),Object(r.b)("p",null,"All calls to ",Object(r.b)("inlineCode",{parentName:"p"},"getIntlMessage()")," need to be replaced with a Message Descriptor."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Replace:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"this.getIntlMessage('some.message.id');\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"With:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"{\n  id: 'some.message.id';\n}\n")),Object(r.b)("h3",{id:"update-formatmessage-calls"},"Update ",Object(r.b)("inlineCode",{parentName:"h3"},"formatMessage()")," Calls"),Object(r.b)("p",null,"A typical pattern when calling ",Object(r.b)("inlineCode",{parentName:"p"},"formatMessage()")," is to nest a call to ",Object(r.b)("inlineCode",{parentName:"p"},"getIntlMessage()"),". These can be easily updated:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1.0:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"let message = this.formatMessage(\n  this.getIntlMessage('some.message.id'),\n  values\n);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.0:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"let message = this.props.intl.formatMessage({id: 'some.message.id'}, values);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," In React Intl v2, the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#formatmessage"}),Object(r.b)("inlineCode",{parentName:"a"},"formatMessage()"))," function is injected via ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#injectintl"}),Object(r.b)("inlineCode",{parentName:"a"},"injectIntl()")),"."),Object(r.b)("h3",{id:"update-formattedmessage-and-formattedhtmlmessage-instances"},"Update ",Object(r.b)("inlineCode",{parentName:"h3"},"FormattedMessage")," and ",Object(r.b)("inlineCode",{parentName:"h3"},"FormattedHTMLMessage")," Instances"),Object(r.b)("p",null,"The props for these two components have completely changed in React Intl v2. Instead of taking a ",Object(r.b)("inlineCode",{parentName:"p"},"message")," prop and treating all other props as values to fill in placeholders in a message, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"Components#formattedmessage"}),Object(r.b)("inlineCode",{parentName:"a"},"<FormattedMessage>"))," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"Components#formattedhtmlmessage"}),Object(r.b)("inlineCode",{parentName:"a"},"<FormattedHTMLMessage>"))," now the same props as a Message Descriptor plus a new ",Object(r.b)("inlineCode",{parentName:"p"},"values")," prop."),Object(r.b)("p",null,"The new ",Object(r.b)("inlineCode",{parentName:"p"},"values")," prop groups all of the message's placeholder values together into an object."),Object(r.b)("p",null,"The following example shows up to update a ",Object(r.b)("inlineCode",{parentName:"p"},"<FormattedMessage>")," instance to use the new props and remove the call to ",Object(r.b)("inlineCode",{parentName:"p"},"getIntlMessage()"),":"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1.0:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"<FormattedMessage message={this.getIntlMessage('greeting')} name=\"Eric\" />\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.0:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"<FormattedMessage id=\"greeting\" values={{name: 'Eric'}} />\n")),Object(r.b)("h2",{id:"update-how-relative-times-are-formatted"},"Update How Relative Times are Formatted"),Object(r.b)("p",null,'Minor changes have been made to how the "now" reference time is specified when formatting relative times in React Intl v2. It\'s uncommon to specify this value outside of test code, so it might not exist in your app.'),Object(r.b)("h3",{id:"rename-formattedrelatives-now-prop-to-initialnow"},"Rename ",Object(r.b)("inlineCode",{parentName:"h3"},"FormattedRelative"),"'s ",Object(r.b)("inlineCode",{parentName:"h3"},"now")," Prop to ",Object(r.b)("inlineCode",{parentName:"h3"},"initialNow")),Object(r.b)("p",null,"A new feature has been added to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"Components#formattedrelative"}),Object(r.b)("inlineCode",{parentName:"a"},"<FormattedRelative>")),' instances in React Intl v2, they now "tick" and stay up to date. Since time moves forward, it was confusing to have a prop named ',Object(r.b)("inlineCode",{parentName:"p"},"now"),", so it has been renamed to ",Object(r.b)("inlineCode",{parentName:"p"},"initialNow"),". Any ",Object(r.b)("inlineCode",{parentName:"p"},"<FormattedRelative>")," instances that use ",Object(r.b)("inlineCode",{parentName:"p"},"now")," should update to prop name to ",Object(r.b)("inlineCode",{parentName:"p"},"initialNow"),":"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1.0:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"<FormattedRelative value={date} now={otherDate} />\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.0:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"<FormattedRelative value={date} initialNow={otherDate} />\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"Components#intlprovider"}),Object(r.b)("inlineCode",{parentName:"a"},"<IntlProvider>"))," component also has a ",Object(r.b)("inlineCode",{parentName:"p"},"initialNow"),' prop which can be assigned a value to stabilize the "now" reference time for ',Object(r.b)("em",{parentName:"p"},"all")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"Components#formattedrelative"}),Object(r.b)("inlineCode",{parentName:"a"},"<FormattedRelative>"))," instances. This is useful for universal/isomorphic apps to proper React checksums between the server and client initial render."),Object(r.b)("h3",{id:"merge-formatrelatives-second-and-third-arguments"},"Merge ",Object(r.b)("inlineCode",{parentName:"h3"},"formatRelative()"),"'s Second and Third Arguments"),Object(r.b)("p",null,"The signature of the ",Object(r.b)("inlineCode",{parentName:"p"},"formatRelative()")," function has been aligned with the other ",Object(r.b)("inlineCode",{parentName:"p"},"format*()")," functions and in React Intl v2, it only accepts two arguments: ",Object(r.b)("inlineCode",{parentName:"p"},"value")," and ",Object(r.b)("inlineCode",{parentName:"p"},"options"),'. To specify a "now" reference time, add it to the ',Object(r.b)("inlineCode",{parentName:"p"},"options")," argument, and remove the third ",Object(r.b)("inlineCode",{parentName:"p"},"formatOptions")," argument:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1.0:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"let relative = this.formatRelative(date, {units: 'hour'}, {now: otherDate});\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.0:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"let relative = this.props.intl.formatRelative(date, {\n  units: 'hour',\n  now: otherDate,\n});\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," In React Intl v2, the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#formatrelative"}),Object(r.b)("inlineCode",{parentName:"a"},"formatRelative()"))," function is injected via ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/react-intl/api#injectintl"}),Object(r.b)("inlineCode",{parentName:"a"},"injectIntl()")),"."))}p.isMDXComponent=!0},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return j}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,j=b["".concat(o,".").concat(m)]||b[m]||d[m]||r;return a?i.a.createElement(j,l({ref:t},s,{components:a})):i.a.createElement(j,l({ref:t},s))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);