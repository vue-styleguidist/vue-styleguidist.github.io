(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{546:function(t,e,s){"use strict";s.r(e);var a=s(71),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuring-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-webpack"}},[t._v("#")]),t._v(" Configuring Webpack")]),t._v(" "),s("p",[t._v("Vue styleguidist uses "),s("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),s("OutboundLink")],1),t._v(" under the hood and it needs to know how to load your project’s files.")]),t._v(" "),s("p",[s("em",[t._v("Webpack is required to run Vue styleguidist but your project doesn’t have to use it.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" See "),s("RouterLink",{attrs:{to:"/docs/Cookbook.html"}},[t._v("cookbook")]),t._v(" for more examples.")],1)]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#reusing-your-projects-webpack-config"}},[t._v("Reusing your project’s webpack config")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#custom-webpack-config"}},[t._v("Custom webpack config")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#when-nothing-else-works"}},[t._v("When nothing else works")])])]),t._v(" "),s("h2",{attrs:{id:"reusing-your-project-s-webpack-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reusing-your-project-s-webpack-config"}},[t._v("#")]),t._v(" Reusing your project’s webpack config")]),t._v(" "),s("p",[t._v("By default, Styleguidist will try to find "),s("code",[t._v("webpack.config.js")]),t._v(" in your project’s root directory and use it.")]),t._v(" "),s("p",[t._v("If your webpack config is located somewhere else, you need to load it manually from your "),s("code",[t._v("styleguide.config.js")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./styleguide.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("webpackConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./configs/webpack.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Or if you want to merge it with other options:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./styleguide.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("webpackConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./configs/webpack.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Custom config options */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" "),s("code",[t._v("entry")]),t._v(", "),s("code",[t._v("externals")]),t._v(", "),s("code",[t._v("output")]),t._v(", "),s("code",[t._v("watch")]),t._v(", and "),s("code",[t._v("stats")]),t._v(" options will be ignored. For production builds, "),s("code",[t._v("devtool")]),t._v(" will also be ignored.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" "),s("code",[t._v("CommonsChunkPlugins")]),t._v(", "),s("code",[t._v("HtmlWebpackPlugin")]),t._v(", "),s("code",[t._v("UglifyJsPlugin")]),t._v(", "),s("code",[t._v("HotModuleReplacementPlugin")]),t._v(" plugins will be ignored because Styleguidist already includes them or they may break Styleguidist.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" If your loaders don’t work with Styleguidist try to make "),s("code",[t._v("include")]),t._v(" and "),s("code",[t._v("exclude")]),t._v(" absolute paths.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" Babelified webpack configs (like "),s("code",[t._v("webpack.config.babel.js")]),t._v(") are not supported. We recommend converting your config to native Node — Node 6 supports "),s("a",{attrs:{href:"http://node.green/",target:"_blank",rel:"noopener noreferrer"}},[t._v("many ES6 features"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" Use "),s("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-merge"),s("OutboundLink")],1),t._v(" for easier config merging.")])]),t._v(" "),s("h2",{attrs:{id:"custom-webpack-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-webpack-config"}},[t._v("#")]),t._v(" Custom webpack config")]),t._v(" "),s("p",[t._v("Add a "),s("code",[t._v("webpackConfig")]),t._v(" section to your "),s("code",[t._v("styleguide.config.js")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./styleguide.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" VueLoaderPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader/lib/plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("webpackConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue loader")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.vue$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Babel loader, will use your project’s .babelrc")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js?$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other loaders that are needed for your components")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.css$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader!css-loader'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add vue-loader plugin")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueLoaderPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("Warning:")]),t._v(" This option disables config load from "),s("code",[t._v("webpack.config.js")]),t._v(", see above how to load your config manually.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" "),s("code",[t._v("entry")]),t._v(", "),s("code",[t._v("externals")]),t._v(", "),s("code",[t._v("output")]),t._v(", "),s("code",[t._v("watch")]),t._v(", and "),s("code",[t._v("stats")]),t._v(" options will be ignored. For production builds, "),s("code",[t._v("devtool")]),t._v(" will also be ignored.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" "),s("code",[t._v("CommonsChunkPlugins")]),t._v(", "),s("code",[t._v("HtmlWebpackPlugin")]),t._v(", "),s("code",[t._v("UglifyJsPlugin")]),t._v(", "),s("code",[t._v("HotModuleReplacementPlugin")]),t._v(" plugins will be ignored because Styleguidist already includes them or they may break Styleguidist.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" it's expected that you already have a "),s("code",[t._v("vue-loader")]),t._v(" dependency in your project.")])]),t._v(" "),s("h2",{attrs:{id:"when-nothing-else-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-nothing-else-works"}},[t._v("#")]),t._v(" When nothing else works")]),t._v(" "),s("p",[t._v("In very rare cases, like using legacy or third-party libraries, you may need to change webpack options that Styleguidist doesn’t allow you to change via "),s("code",[t._v("webpackConfig")]),t._v(" options. In this case you can use "),s("RouterLink",{attrs:{to:"/Configuration.html#dangerouslyupdatewebpackconfig"}},[t._v("dangerouslyUpdateWebpackConfig")]),t._v(" option.")],1),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Warning:")]),t._v(" You are likely to break Vue styleguidist using these options, if you are not ready to spend the time, prefer the use of the "),s("code",[t._v("webpackConfig")]),t._v(" option.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);