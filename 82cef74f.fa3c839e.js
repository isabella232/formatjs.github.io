(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),s=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=s.a.createContext({}),b=function(e){var n=s.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return s.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},u=s.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||l;return t?s.a.createElement(m,o(o({ref:n},c),{},{components:t})):s.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(2),s=t(6),l=(t(0),t(104)),r={id:"linter",title:"eslint-plugin-formatjs"},o={unversionedId:"tooling/linter",id:"tooling/linter",isDocsHomePage:!1,title:"eslint-plugin-formatjs",description:"This eslint plugin allows you to enforce certain rules in your ICU message. This is currently under development",source:"@site/docs/tooling/linter.md",permalink:"/docs/tooling/linter",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/linter.md",sidebar:"tooling",previous:{title:"CLI",permalink:"/docs/tooling/cli"},next:{title:"babel-plugin-react-intl",permalink:"/docs/tooling/babel-plugin"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Available Rules",id:"available-rules",children:[{value:"<code>blacklist-elements</code>",id:"blacklist-elements",children:[]},{value:"<code>enforce-description</code>",id:"enforce-description",children:[]},{value:"<code>enforce-default-message</code>",id:"enforce-default-message",children:[]},{value:"<code>enforce-placeholders</code>",id:"enforce-placeholders",children:[]},{value:"<code>enforce-plural-rules</code>",id:"enforce-plural-rules",children:[]},{value:"<code>no-camel-case</code>",id:"no-camel-case",children:[]},{value:"<code>no-emoji</code>",id:"no-emoji",children:[]},{value:"<code>no-multiple-whitespaces</code>",id:"no-multiple-whitespaces",children:[]},{value:"<code>no-multiple-plurals</code>",id:"no-multiple-plurals",children:[]},{value:"<code>no-offset</code>",id:"no-offset",children:[]},{value:"<code>supported-datetime-skeleton</code>",id:"supported-datetime-skeleton",children:[]},{value:"<code>no-id</code>",id:"no-id",children:[]},{value:"<code>enforce-id</code>",id:"enforce-id",children:[]}]}],c={rightToc:i};function b(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This eslint plugin allows you to enforce certain rules in your ICU message. This is currently under development"),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install eslint-plugin-formatjs\n")),Object(l.b)("p",null,"Then in your eslint config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/no-offset": "error"\n  }\n}\n')),Object(l.b)("p",null,"Currently this uses ",Object(l.b)("inlineCode",{parentName:"p"},"intl.formatMessage"),", ",Object(l.b)("inlineCode",{parentName:"p"},"defineMessage"),", ",Object(l.b)("inlineCode",{parentName:"p"},"defineMessages"),", ",Object(l.b)("inlineCode",{parentName:"p"},"<FormattedMessage>")," from ",Object(l.b)("inlineCode",{parentName:"p"},"react-intl")," as hooks to verify the message. Therefore, in your code use 1 of the following mechanisms:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages, defineMessage} from 'react-intl'\n\nconst messages = defineMessages({\n  foo: {\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n})\n\ndefineMessage({\n  defaultMessage: 'single message',\n})\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" description="bar" />\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"function foo() {\n  intl.formatMessage({\n    defaultMessage: 'foo',\n  })\n}\n")),Object(l.b)("h2",{id:"available-rules"},"Available Rules"),Object(l.b)("h3",{id:"blacklist-elements"},Object(l.b)("inlineCode",{parentName:"h3"},"blacklist-elements")),Object(l.b)("p",null,"This blacklists usage of specific elements in ICU message."),Object(l.b)("h4",{id:"why"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Certain translation vendors cannot handle things like ",Object(l.b)("inlineCode",{parentName:"li"},"selectordinal"))),Object(l.b)("h4",{id:"available-elements"},"Available elements"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"enum Element {\n  // literal text, like `defaultMessage: 'some text'`\n  literal = 'literal',\n  // placeholder, like `defaultMessage: '{placeholder} var'`\n  argument = 'argument',\n  // number, like `defaultMessage: '{placeholder, number} var'`\n  number = 'number',\n  // date, like `defaultMessage: '{placeholder, date} var'`\n  date = 'date',\n  // time, like `defaultMessage: '{placeholder, time} var'`\n  time = 'time',\n  // select, like `defaultMessage: '{var, select, foo{one} bar{two}} var'`\n  select = 'select',\n  // selectordinal, like `defaultMessage: '{var, selectordinal, one{one} other{two}} var'`\n  selectordinal = 'selectordinal',\n  // plural, like `defaultMessage: '{var, plural, one{one} other{two}} var'`\n  plural = 'plural',\n}\n")),Object(l.b)("h4",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/blacklist-elements": [2, ["selectordinal"]]\n  }\n}\n')),Object(l.b)("h3",{id:"enforce-description"},Object(l.b)("inlineCode",{parentName:"h3"},"enforce-description")),Object(l.b)("p",null,"This enforces ",Object(l.b)("inlineCode",{parentName:"p"},"description")," in the message descriptor."),Object(l.b)("h4",{id:"why-1"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Description provides helpful context for translators")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: 'bar',\n  },\n})\n")),Object(l.b)("h4",{id:"options"},"Options"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/enforce-description": ["error", "literal"]\n  }\n}\n')),Object(l.b)("p",null,"Setting ",Object(l.b)("inlineCode",{parentName:"p"},"literal")," forces ",Object(l.b)("inlineCode",{parentName:"p"},"description")," to always be a string literal instead of function calls or variables. This is helpful for extraction tools that expects ",Object(l.b)("inlineCode",{parentName:"p"},"description")," to always be a literal"),Object(l.b)("h3",{id:"enforce-default-message"},Object(l.b)("inlineCode",{parentName:"h3"},"enforce-default-message")),Object(l.b)("p",null,"This enforces ",Object(l.b)("inlineCode",{parentName:"p"},"defaultMessage")," in the message descriptor."),Object(l.b)("h4",{id:"why-2"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Can be useful in case we want to extract messages for translations from source code. This way can make sure people won't forget about defaultMessage")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'This is default message',\n    description: 'bar',\n  },\n  // FAILS\n  bar: {\n    description: 'bar',\n  },\n})\n")),Object(l.b)("h4",{id:"options-1"},"Options"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/enforce-default-message": ["error", "literal"]\n  }\n}\n')),Object(l.b)("p",null,"Setting ",Object(l.b)("inlineCode",{parentName:"p"},"literal")," forces ",Object(l.b)("inlineCode",{parentName:"p"},"defaultMessage")," to always be a string literal instead of function calls or variables. This is helpful for extraction tools that expects ",Object(l.b)("inlineCode",{parentName:"p"},"defaultMessage")," to always be a literal"),Object(l.b)("h3",{id:"enforce-placeholders"},Object(l.b)("inlineCode",{parentName:"h3"},"enforce-placeholders")),Object(l.b)("p",null,"Makes sure all values are passed in if message has placeholders (number/date/time/plural/select/selectordinal). This requires values to be passed in as literal object (not a variable)."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// WORKS, no error\n<FormattedMessage\n  defaultMessage=\"this is a {placeholder}\"\n  values={{placeholder: 'dog'}}\n/>\n\n// WORKS, no error\nintl.formatMessage({\n  defaultMessage: 'this is a {placeholder}'\n}, {placeholder: 'dog'})\n\n// WORKS, error bc no values were provided\n<FormattedMessage\n  defaultMessage=\"this is a {placeholder}\"\n/>\n\n// WORKS, error bc no values were provided\nintl.formatMessage({\n  defaultMessage: 'this is a {placeholder}'\n})\n\n// WORKS, error bc `placeholder` is not passed in\n<FormattedMessage\n  defaultMessage=\"this is a {placeholder}\"\n  values={{foo: 1}}\n/>\n\n// WORKS, error bc `placeholder` is not passed in\nintl.formatMessage({\n  defaultMessage: 'this is a {placeholder}'\n}, {foo: 1})\n\n// DOESN'T WORK\n<FormattedMessage\n  defaultMessage=\"this is a {placeholder}\"\n  values={someVar}\n/>\n\n// DOESN'T WORK\nintl.formatMessage({\n  defaultMessage: 'this is a {placeholder}'\n}, values)\n")),Object(l.b)("h3",{id:"enforce-plural-rules"},Object(l.b)("inlineCode",{parentName:"h3"},"enforce-plural-rules")),Object(l.b)("p",null,"Enforce certain plural rules to always be specified/forbidden in a message."),Object(l.b)("h4",{id:"why-3"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"It is recommended to always specify ",Object(l.b)("inlineCode",{parentName:"li"},"other")," as fallback in the message."),Object(l.b)("li",{parentName:"ul"},"Some translation vendors only accept certain rules.")),Object(l.b)("h4",{id:"available-rules-1"},"Available rules"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"enum LDML {\n  zero = 'zero',\n  one = 'one',\n  two = 'two',\n  few = 'few',\n  many = 'many',\n  other = 'other',\n}\n")),Object(l.b)("h4",{id:"example-1"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/enforce-plural-rules": [\n      2,\n      {\n        "one": true,\n        "other": true,\n        "zero": false\n      }\n    ]\n  }\n}\n')),Object(l.b)("h3",{id:"no-camel-case"},Object(l.b)("inlineCode",{parentName:"h3"},"no-camel-case")),Object(l.b)("p",null,"This make sure placeholders are not camel-case."),Object(l.b)("h4",{id:"why-4"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This is to prevent case-sensitivity issue in certain translation vendors.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'foo {snake_case} {nothing}',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: 'foo {camelCase}',\n  },\n})\n")),Object(l.b)("h3",{id:"no-emoji"},Object(l.b)("inlineCode",{parentName:"h3"},"no-emoji")),Object(l.b)("p",null,"This prevents usage of emoji in message."),Object(l.b)("h4",{id:"why-5"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Certain translation vendors cannot handle emojis."),Object(l.b)("li",{parentName:"ul"},"Cross-platform encoding for emojis are faulty.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'Smileys & People',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: '\ud83d\ude03 Smileys & People',\n  },\n})\n")),Object(l.b)("h3",{id:"no-multiple-whitespaces"},Object(l.b)("inlineCode",{parentName:"h3"},"no-multiple-whitespaces")),Object(l.b)("p",null,"This prevents usage of multiple consecutive whitespaces in message."),Object(l.b)("h4",{id:"why-6"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Consecutive whitespaces are handled differently in different locales."),Object(l.b)("li",{parentName:"ul"},"Prevents ",Object(l.b)("inlineCode",{parentName:"li"},"\\")," linebreaks in JS string which results in awkward whitespaces.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'Smileys & People',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: 'Smileys &   People',\n  },\n  // FAILS\n  baz: {\n    defaultMessage: 'this message is too long \\\n    so I wanna line break it.',\n  },\n})\n")),Object(l.b)("h3",{id:"no-multiple-plurals"},Object(l.b)("inlineCode",{parentName:"h3"},"no-multiple-plurals")),Object(l.b)("p",null,"This prevents specifying multiple plurals in your message."),Object(l.b)("h4",{id:"why-7"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Nested plurals are hard to translate across languages so some translation vendors don't allow it.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n    // WORKS\n    foo: {\n        defaultMessage: '{p1, plural, one{one}}',\n    },\n    // FAILS\n    bar: {\n        defaultMessage: '{p1, plural, one{one}} {p2, plural, one{two}}',\n    }\n    // ALSO FAILS\n    bar2: {\n        defaultMessage: '{p1, plural, one{{p2, plural, one{two}}}}',\n    }\n})\n")),Object(l.b)("h3",{id:"no-offset"},Object(l.b)("inlineCode",{parentName:"h3"},"no-offset")),Object(l.b)("p",null,"This prevents specifying offset in plural rules in your message."),Object(l.b)("h4",{id:"why-8"},"Why"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Offset has complicated logic implication so some translation vendors don't allow it.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // PASS\n  foo: {\n    defaultMessage: '{var, plural, one{one} other{other}}',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: '{var, plural, offset:1 one{one} other{other}}',\n  },\n})\n")),Object(l.b)("h3",{id:"supported-datetime-skeleton"},Object(l.b)("inlineCode",{parentName:"h3"},"supported-datetime-skeleton")),Object(l.b)("p",null,"Since formatjs only supports a subset of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/intl-messageformat-parser#Supported-DateTime-Skeleton"}),"DateTime Skeleton"),". This rule exists to make sure you don't use a unsupported pattern."),Object(l.b)("h3",{id:"no-id"},Object(l.b)("inlineCode",{parentName:"h3"},"no-id")),Object(l.b)("p",null,"This prevents specifying manual ID in ",Object(l.b)("inlineCode",{parentName:"p"},"MessageDescriptor"),"."),Object(l.b)("h4",{id:"why-9"},"Why"),Object(l.b)("p",null,"Some pipelines enforces automatic ID generation during transpilation using ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-react-intl")," or ",Object(l.b)("inlineCode",{parentName:"p"},"@formatjs/ts-transformer")," so manual IDs cause issues of mismatching during runtime."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // PASS\n  foo: {\n    defaultMessage: '{var, plural, one{one} other{other}}',\n  },\n  // FAILS\n  bar: {\n    id: 'something',\n    defaultMessage: '{var, plural, offset:1 one{one} other{other}}',\n  },\n})\n")),Object(l.b)("h3",{id:"enforce-id"},Object(l.b)("inlineCode",{parentName:"h3"},"enforce-id")),Object(l.b)("p",null,"This enforces generated ID to be set in ",Object(l.b)("inlineCode",{parentName:"p"},"MessageDescriptor"),"."),Object(l.b)("h4",{id:"why-10"},"Why"),Object(l.b)("p",null,"Pipelines can enforce automatic ID generation at the linter level (autofix to insert autogen ID) so this guarantees that."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages} from 'react-intl';\n\nconst messages = defineMessages({\n  // PASS\n  foo: {\n    id: '19shaf'\n    defaultMessage: '{var, plural, one{one} other{other}}',\n  },\n  // FAILS\n  bar: {\n    id: 'something',\n    defaultMessage: '{var, plural, offset:1 one{one} other{other}}',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: '{var, plural, offset:1 one{one} other{other}}',\n  },\n});\n")),Object(l.b)("h4",{id:"options-2"},"Options"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/enforce-id": [\n      "error",\n      {\n        // THIS IS REQUIRED\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]"\n      }\n    ]\n  }\n}\n')))}b.isMDXComponent=!0}}]);