(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{262:function(t,n,s){"use strict";s.r(n);var a=s(33),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"locating-your-components-and-organizing-your-style-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locating-your-components-and-organizing-your-style-guide","aria-hidden":"true"}},[t._v("#")]),t._v(" Locating your components and organizing your style guide")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#finding-components"}},[t._v("Finding components")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#loading-and-exposing-components"}},[t._v("Loading and exposing components")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#sections"}},[t._v("Sections")])])]),t._v(" "),s("h2",{attrs:{id:"finding-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finding-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Finding components")]),t._v(" "),s("p",[t._v("By default Styleguidist will search components using this "),s("a",{attrs:{href:"https://github.com/isaacs/node-glob#glob-primer",target:"_blank",rel:"noopener noreferrer"}},[t._v("glob pattern"),s("OutboundLink")],1),t._v(": "),s("code",[t._v("src/components/**/*.vue")]),t._v(".")]),t._v(" "),s("p",[t._v("For example, if your components look like "),s("code",[t._v("components/Button/Button.vue")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/components/**/[A-Z]*.vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("But will ignore tests:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("__tests__")]),t._v(" folder")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" All paths are relative to the folder where the config file is.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Pro Tip:")]),t._v(" Use "),s("router-link",{attrs:{to:"/Configuration.html#ignore"}},[t._v("ignore")]),t._v(" option to exclude some files from the style guide.")],1)]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" Use "),s("router-link",{attrs:{to:"/Configuration.html#getcomponentpathline"}},[t._v("getComponentPathLine")]),t._v(" option to change a path you see below a component name.")],1)]),t._v(" "),s("h2",{attrs:{id:"loading-and-exposing-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-and-exposing-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Loading and exposing components")]),t._v(" "),s("p",[t._v("Styleguidist, by default, "),s("em",[t._v("loads")]),t._v(" your components and "),s("em",[t._v("exposes")]),t._v(" them globally for your examples to consume. You can use "),s("router-link",{attrs:{to:"/Configuration.html#locallyRegisterComponents"}},[t._v("locallyRegisterComponents")]),t._v(" to avoid global registration. This loads a documented component only in the examples that are in its attached "),s("code",[t._v("ReadMe.md")]),t._v(" file or "),s("code",[t._v("<docs>")]),t._v(" block.")],1),t._v(" "),s("h2",{attrs:{id:"sections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sections","aria-hidden":"true"}},[t._v("#")]),t._v(" Sections")]),t._v(" "),s("p",[t._v("Group components into sections or add extra Markdown documents to your style guide.")]),t._v(" "),s("p",[t._v("Each section consists of (all fields are optional):")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("name")]),t._v(" — section title.")]),t._v(" "),s("li",[s("code",[t._v("content")]),t._v(" — location of a Markdown file containing the overview content.")]),t._v(" "),s("li",[s("code",[t._v("components")]),t._v(" — a glob pattern string, an array of component paths or glob pattern strings, or a function returning a list of components or glob pattern strings. The same rules apply as for the root "),s("code",[t._v("components")]),t._v(" option.")]),t._v(" "),s("li",[s("code",[t._v("sections")]),t._v(" — an array of subsections (can be nested).")]),t._v(" "),s("li",[s("code",[t._v("description")]),t._v(" — A small description of this section.")]),t._v(" "),s("li",[s("code",[t._v("sectionDepth")]),t._v(" — Number of subsections with single pages, only available with "),s("router-link",{attrs:{to:"/Configuration.html#pagepersection"}},[t._v("pagePerSection")]),t._v(" is enabled.")],1),t._v(" "),s("li",[s("code",[t._v("exampleMode")]),t._v(" — Initial state of the code example tab, uses "),s("router-link",{attrs:{to:"/Configuration.html#examplemode"}},[t._v("exampleMode")]),t._v(".")],1),t._v(" "),s("li",[s("code",[t._v("usageMode")]),t._v(" — Initial state of the props and methods tab, uses "),s("router-link",{attrs:{to:"/Configuration.html#usagemode"}},[t._v("usageMode")]),t._v(".")],1),t._v(" "),s("li",[s("code",[t._v("ignore")]),t._v(" — string/array of globs that should not be included in the section.")]),t._v(" "),s("li",[s("code",[t._v("href")]),t._v(" - an URL to navigate to instead of navigating to the section content")]),t._v(" "),s("li",[s("code",[t._v("external")]),t._v(" - if set, the link will open in a new window")])]),t._v(" "),s("p",[t._v("Configuring a style guide with textual documentation section and a list of components would look like:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sections"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Introduction'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs/introduction.md'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Documentation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sections"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Installation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs/installation.md'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The description for the installation section'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Configuration'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs/configuration.md'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Live Demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          href"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UI Components'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs/ui.md'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lib/components/ui/*.vue'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);n.default=e.exports}}]);