(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{153:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("blockquote",[s("p",[t._v("Vue Styleguidist created from "),s("a",{attrs:{href:"https://github.com/styleguidist/react-styleguidist",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Styleguidist"),s("OutboundLink")],1),t._v(", implement additional support to read and compile .vue files.")])]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Styleguidist isn’t an ordinary single page app and some design decisions may look confusing to an outsider. In this guide we’ll explain these decisions to un-confuse potential contributors.")]),t._v(" "),s("p",[t._v("The main thing is that we’re running two apps at the same time: user’s components and Styleguidist UI. They share a webpack configuration and have styles in the same scope (there’s only one scope in CSS). And we can control only one of these two apps: Styleguidist UI. That puts us under some restrictions:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Vue Styleguidist uses "),s("a",{attrs:{href:"https://github.com/vue-styleguidist/vue-docgen-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-docgen-api"),s("OutboundLink")],1),t._v(" to parse "),s("em",[t._v("source")]),t._v(" files (not transpiled). vue-docgen-api finds exported Vue components and generates documentation.")]),t._v(" "),s("p",[t._v("Styleguidist uses Markdown for documentation: each JavaScript code block is rendered as an interactive playground with "),s("a",{attrs:{href:"http://codemirror.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeMirror"),s("OutboundLink")],1),t._v(". To do that we extract all these code blocks using "),s("a",{attrs:{href:"http://remark.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remark"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Webpack loaders (see below) generate JavaScript modules with all user components, their documentation and examples and pass that to a React app which renders a style guide.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("We use webpack loaders to hot reload the style guide on changes in user components, styles and Markdown documentation. We have three loaders ("),s("a",{attrs:{href:"https://github.com/vue-styleguidist/vue-styleguidist/tree/master/loaders",target:"_blank",rel:"noopener noreferrer"}},[t._v("loaders"),s("OutboundLink")],1),t._v(" folder):")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("Styleguidist tries to load and reuse user’s webpack config ("),s("code",[t._v("webpack.config.js")]),t._v(" in project root folder). It works most of the time but has some restrictions: Styleguidist "),s("a",{attrs:{href:"https://github.com/vue-styleguidist/vue-styleguidist/blob/master/scripts/utils/mergeWebpackConfig.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("ignores"),s("OutboundLink")],1),t._v(" some fields and plugins because they are already included (like "),s("code",[t._v("webpack.HotModuleReplacementPlugin")]),t._v("), don’t make sense for a style guide (like "),s("code",[t._v("output")]),t._v(") or may break Styleguidist (like "),s("code",[t._v("entry")]),t._v(").")]),t._v(" "),s("p",[t._v("We’re trying to keep Styleguidist’s own "),s("a",{attrs:{href:"https://github.com/vue-styleguidist/vue-styleguidist/blob/master/scripts/make-webpack-config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack config"),s("OutboundLink")],1),t._v(" minimal to reduce clashes with user’s configuration.")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Most of StyleGuidist UI components consist of two parts: "),s("code",[t._v("Foo/Foo.js")]),t._v(" that contains all logic and "),s("code",[t._v("Foo/FooRenderer.js")]),t._v(" that contains all markup and styles. This allows users to customize rendering by overriding "),s("code",[t._v("*Renderer")]),t._v(" component using webpack aliases (or "),s("router-link",{attrs:{to:"./Configuration.html#styleguidecomponents"}},[t._v("styleguideComponents")]),t._v(" config option):")],1),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("Each component folder usually has several files:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("For styles we use "),s("a",{attrs:{href:"http://cssinjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSS"),s("OutboundLink")],1),t._v(", it allows users to customize their style guide and allows us to ensure styles isolations (thanks to "),s("a",{attrs:{href:"http://cssinjs.org/jss-isolate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jss-isolate"),s("OutboundLink")],1),t._v("). No user styles should affect Styleguidist UI and no Styleguidist styles should affect user components.")]),t._v(" "),s("p",[t._v("Use "),s("a",{attrs:{href:"https://github.com/JedWatson/classnames",target:"_blank",rel:"noopener noreferrer"}},[t._v("classnames"),s("OutboundLink")],1),t._v(" to merge several class names or for conditional class names, import it as "),s("code",[t._v("cx")]),t._v(" ("),s("code",[t._v("import cx from 'classnames'")]),t._v(").")]),t._v(" "),s("p",[t._v("We use "),s("code",[t._v("Styled")]),t._v(" higher-order component to allow theming (see "),s("router-link",{attrs:{to:"./Configuration.html#theme"}},[t._v("theme")]),t._v(" and "),s("router-link",{attrs:{to:"./Configuration.html#style"}},[t._v("style")]),t._v(" style guide config options). Use it like this:")],1),t._v(" "),t._m(14),s("p",[t._v("Check available theme variables in "),s("a",{attrs:{href:"https://github.com/styleguidist/react-styleguidist/blob/master/src/styles/theme.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/styles/theme.js"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("(Documentation in progress)")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"developer-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#developer-guide","aria-hidden":"true"}},[this._v("#")]),this._v(" Developer guide")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"#how-it-works"}},[t._v("How it works")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#webpack-loaders-and-webpack-configuration"}},[t._v("Webpack loaders and webpack configuration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#react-components"}},[t._v("React components")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#styles"}},[t._v("Styles")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#render-components-vue"}},[t._v("Render components vue")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Our styles should not affect user component styles.")]),t._v(" "),s("li",[t._v("User styles (especially global like Bootstrap) should not affect Styleguidist UI.")]),t._v(" "),s("li",[s("code",[t._v("body")]),t._v(" styles (like "),s("code",[t._v("font-family")]),t._v(") should affect user components as the user expects but not Styleguidist UI.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-it-works"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[this._v("#")]),this._v(" How it works")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"webpack-loaders-and-webpack-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-loaders-and-webpack-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack loaders and webpack configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("styleguide-loader")]),t._v(": loads components and sections;")]),t._v(" "),s("li",[s("code",[t._v("vuedoc-loader")]),t._v(": loads props documentation using vue-docgen-api;")]),t._v(" "),s("li",[s("code",[t._v("examples-loader")]),t._v(": loads examples from Markdown files;")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There are two more loaders — "),e("code",[this._v("css-loader")]),this._v(" and "),e("code",[this._v("styles-loader")]),this._v(" but they are just one-line aliases to corresponding webpack loaders. We don’t want to rely on webpack loader resolver because its behavior can be changed by user’s webpack config (Create React App does that for example). This way we can bypass webpack resolver and use Node resolver instead. These loaders are used like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'!!../../../loaders/style-loader!../../../loaders/css-loader!codemirror/lib/codemirror.css'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("!!")]),this._v(" prefix tells webpack not to use any other loaders that may be listed in a webpack configuration to load this module. This ensures that user’s webpack configuration won’t affect Styleguidist.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"react-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-components","aria-hidden":"true"}},[this._v("#")]),this._v(" React components")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// styleguide.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  webpackConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rsg-components/Wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          __dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lib/styleguide/Wrapper'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All Styleguidist components should be imported like this: "),e("code",[this._v("import Foo from 'rsg-components/Foo'")]),this._v(" to make aliases work.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("Foo/Foo.js")]),t._v(" (optional for simple components);")]),t._v(" "),s("li",[s("code",[t._v("Foo/FooRenderer.js")]),t._v(";")]),t._v(" "),s("li",[s("code",[t._v("Foo/Foo.spec.js")]),t._v(" — tests;")]),t._v(" "),s("li",[s("code",[t._v("Foo/index.js")]),t._v(" — reexport of "),s("code",[t._v("Foo.js")]),t._v(" or "),s("code",[t._v("FooRenderer.js")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"styles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styles","aria-hidden":"true"}},[this._v("#")]),this._v(" Styles")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Styled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rsg-components/Styled'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("styles")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fontFamily"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fontSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fontSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fontSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fontFamily"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fontFamily"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("light"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&:hover, &:active'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isolate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lightest\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExamplePlaceholderRenderer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" classes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("classes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("I am a styled button")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Because of isolation and theming you need to explicitly declare "),s("code",[t._v("fontFamily")]),t._v(", "),s("code",[t._v("fontSize")]),t._v(" and "),s("code",[t._v("color")]),t._v(". Add "),s("code",[t._v("isolate: false")]),t._v(" to your hover styles, otherwise you’ll have to repeat base non-hover styles.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"render-components-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render-components-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" Render components vue")])}],!1,null,null,null);e.default=n.exports}}]);