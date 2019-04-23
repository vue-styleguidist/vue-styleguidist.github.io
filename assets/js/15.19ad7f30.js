(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{234:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment","aria-hidden":"true"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),s("p",[t._v("Vue-Styleguidist generates a static website. It is now time to deploy it.")]),t._v(" "),s("p",[t._v("First, you can specify the location where the styleguide site is going to be built using the "),s("router-link",{attrs:{to:"/Configuration.html#styleguidedir"}},[t._v("styledguideDir")]),t._v(" option. It will default to a "),s("code",[t._v("styleguide")]),t._v(" folder besides your "),s("code",[t._v("styleguide.config.js")]),t._v(".")],1),t._v(" "),s("p",[t._v("Check the results by running")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" styleguide:build\n")])])]),s("p",[t._v("Now that you have a directory containing html and javascript. Let's publish it.")]),t._v(" "),s("h2",{attrs:{id:"deploy-on-netlify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-on-netlify","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploy on Netlify")]),t._v(" "),s("ol",[s("li",[t._v("Connect Netlify to your github account")]),t._v(" "),s("li",[t._v("Select the repo to deploy")]),t._v(" "),s("li",[t._v("Set the build command as "),s("code",[t._v("styleguidist build")])]),t._v(" "),s("li",[t._v("The build folder will be "),s("code",[t._v("styleguide")]),t._v(" if you have "),s("code",[t._v("styleguide.config.js")]),t._v(" at the root of your repository and left out the option. If you changed the "),s("code",[t._v("styleguideDir")]),t._v(" option, pick the new path chosen.")])]),t._v(" "),s("h2",{attrs:{id:"deploy-on-zeit-now"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-on-zeit-now","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploy on Zeit Now")]),t._v(" "),s("p",[t._v("Create a "),s("code",[t._v("now.json")]),t._v(" file at the root of your repository containing")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vsg-example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"builds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"use"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@now/static-build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"distDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"styleguide"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("And make sure to prepare a "),s("code",[t._v('"build-now"')]),t._v(" script in your "),s("code",[t._v("package.json")]),t._v(" that builds the styleguide")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build-now"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"styleguidist build"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Adjust the "),s("code",[t._v("distDir")]),t._v(" config according to your "),s("router-link",{attrs:{to:"/Configuration.html#styleguidedir"}},[t._v("styledguideDir")]),t._v(" option.")],1),t._v(" "),s("h2",{attrs:{id:"deploy-on-github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-on-github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploy on GitHub Pages")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Pages"),s("OutboundLink")],1),t._v(" can be very useful to host static websites. It needs a little more effort than Netlify. It uses your repository files as the static pages themselves.")]),t._v(" "),s("ol",[s("li",[t._v("Create a repo called "),s("code",[t._v("yourgithubid.github.io")]),t._v(". Replace yourgithubid by your github id.")]),t._v(" "),s("li",[t._v("Enable github pages on it. "),s("code",[t._v("Settings > Options > Github Pages")])]),t._v(" "),s("li",[t._v("Add an index.html in it. Whatever the content is, it does not matter.")]),t._v(" "),s("li",[t._v("Check that you can access the created page at https://yourgithubid.github.io/")]),t._v(" "),s("li",[t._v("Next, back on your library, run "),s("code",[t._v("styleguidist build")]),t._v(".")]),t._v(" "),s("li",[t._v("Upload (commit) in the "),s("code",[t._v("yourgithubid.github.io")]),t._v(" repository the contents of your "),s("code",[t._v("styleguide")]),t._v(" folder.")]),t._v(" "),s("li",[t._v("Go to the url and see the styleguide live.")])]),t._v(" "),s("h2",{attrs:{id:"automate-deployment-on-travisci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automate-deployment-on-travisci","aria-hidden":"true"}},[t._v("#")]),t._v(" Automate deployment on travisCI")]),t._v(" "),s("p",[t._v("Zeit and Netlify make it easy for your website publication to be automated. If you are going with GitHub pages though, because it is free for instance, you might want to build automation yourself.")]),t._v(" "),s("p",[t._v("This is how the very documentation you are reading is deployed automatically")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local-dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" styleguide\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target-branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yourgithubid/yourgithubid.github.io\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set in the settings page of your repository, as a secure variable")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# only deploy when a commit or a merge is pushed to master")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read More"),s("OutboundLink")],1)])])},[],!1,null,null,null);e.default=n.exports}}]);