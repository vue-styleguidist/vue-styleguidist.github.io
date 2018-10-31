(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("Vue styleguidist uses "),n("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),n("OutboundLink")],1),t._v(" under the hood and it needs to know how to load your project’s files.")]),t._v(" "),t._m(1),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note:")]),t._v(" See "),n("router-link",{attrs:{to:"./Cookbook.html"}},[t._v("cookbook")]),t._v(" for more examples.")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),n("p",[t._v("Or if you want to merge it with other options:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note:")]),t._v(" Babelified webpack configs (like "),n("code",[t._v("webpack.config.babel.js")]),t._v(") are not supported. We recommend to convert your config to native Node — Node 6 supports "),n("a",{attrs:{href:"http://node.green/",target:"_blank",rel:"noopener noreferrer"}},[t._v("many ES6 features"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note:")]),t._v(" Use "),n("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-merge"),n("OutboundLink")],1),t._v(" for easier config merging.")])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),n("p",[t._v("In very rare cases, like using legacy or third-party libraries, you may need to change webpack options that Styleguidist doesn’t allow you to change via "),n("code",[t._v("webpackConfig")]),t._v(" options. In this case you can use "),n("router-link",{attrs:{to:"./Configuration.html#dangerouslyupdatewebpackconfig"}},[t._v("dangerouslyUpdateWebpackConfig")]),t._v(" option.")],1),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"configuring-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring webpack")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("Webpack is required to run Vue styleguidist but your project doesn’t have to use it.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"#reusing-your-projects-webpack-config"}},[this._v("Reusing your project’s webpack config")])]),this._v(" "),s("li",[s("a",{attrs:{href:"#custom-webpack-config"}},[this._v("Custom webpack config")])]),this._v(" "),s("li",[s("a",{attrs:{href:"#when-nothing-else-works"}},[this._v("When nothing else works")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"reusing-your-project’s-webpack-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reusing-your-project’s-webpack-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Reusing your project’s webpack config")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("By default Styleguidist will try to find "),s("code",[this._v("webpack.config.js")]),this._v(" in your project’s root directory and use it.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If your webpack config is located somewhere else, you need to load it manually from your "),s("code",[this._v("styleguide.config.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// ./styleguide.config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  webpackConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./configs/webpack.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// ./styleguide.config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  webpackConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("assign")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./configs/webpack.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("/* Custom config options */")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[n("strong",[t._v("Note:")]),t._v(" "),n("code",[t._v("entry")]),t._v(", "),n("code",[t._v("externals")]),t._v(", "),n("code",[t._v("output")]),t._v(", "),n("code",[t._v("watch")]),t._v(", and "),n("code",[t._v("stats")]),t._v(" options will be ignored. For production builds, "),n("code",[t._v("devtool")]),t._v(" will also be ignored.")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[n("strong",[t._v("Note:")]),t._v(" "),n("code",[t._v("CommonsChunkPlugins")]),t._v(", "),n("code",[t._v("HtmlWebpackPlugin")]),t._v(", "),n("code",[t._v("UglifyJsPlugin")]),t._v(", "),n("code",[t._v("HotModuleReplacementPlugin")]),t._v(" plugins will be ignored because Styleguidist already includes them or they may break Styleguidist.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("Note:")]),this._v(" If your loaders don’t work with Styleguidist try to make "),s("code",[this._v("include")]),this._v(" and "),s("code",[this._v("exclude")]),this._v(" absolute paths.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"custom-webpack-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-webpack-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom webpack config")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Add a "),s("code",[this._v("webpackConfig")]),this._v(" section to your "),s("code",[this._v("styleguide.config.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// ./styleguide.config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  webpackConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// Vue loader")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.vue$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          exclude"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/node_modules/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          loader"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue-loader'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// Babel loader, will use your project’s .babelrc")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.js?$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          exclude"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/node_modules/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          loader"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'babel-loader'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// Other loaders that are needed for your components")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          loader"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'style-loader!css-loader'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("Warning:")]),this._v(" This option disables config load from "),s("code",[this._v("webpack.config.js")]),this._v(", see above how to load your config manually.")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[n("strong",[t._v("Note:")]),t._v(" "),n("code",[t._v("entry")]),t._v(", "),n("code",[t._v("externals")]),t._v(", "),n("code",[t._v("output")]),t._v(", "),n("code",[t._v("watch")]),t._v(", and "),n("code",[t._v("stats")]),t._v(" options will be ignored. For production builds, "),n("code",[t._v("devtool")]),t._v(" will also be ignored.")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[n("strong",[t._v("Note:")]),t._v(" "),n("code",[t._v("CommonsChunkPlugins")]),t._v(", "),n("code",[t._v("HtmlWebpackPlugin")]),t._v(", "),n("code",[t._v("UglifyJsPlugin")]),t._v(", "),n("code",[t._v("HotModuleReplacementPlugin")]),t._v(" plugins will be ignored because Styleguidist already includes them or they may break Styleguidist.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"when-nothing-else-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-nothing-else-works","aria-hidden":"true"}},[this._v("#")]),this._v(" When nothing else works")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("Warning:")]),this._v(" You may easily break Vue styleguidist using this options, use it at your own risk.")])])}],!1,null,null,null);s.default=a.exports}}]);