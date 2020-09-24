/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "build/" + ({"compiler":"compiler"}[chunkId]||chunkId) + "." + {"compiler":"e0e54767"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?!../../node_modules/.pnpm/babel-loader@8.1.0_7e7526731d462686de4308c8ba1cfd85/node_modules/babel-loader/lib/index.js!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?!../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/index.js?!./src/components/AppButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--13-0!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/babel-loader@8.1.0_7e7526731d462686de4308c8ba1cfd85/node_modules/babel-loader/lib!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options!./src/components/AppButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sizeMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizeMixin */ \"./src/components/sizeMixin.js\");\n/* harmony import */ var _sizeMixin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sizeMixin__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app-button',\n  mixins: [_sizeMixin__WEBPACK_IMPORTED_MODULE_0___default.a],\n  props: {\n    /**\n     * Sets the button font color\n     */\n    color: {\n      type: String,\n      default: 'black'\n    },\n\n    /** Sets background color of the button\n     * @since 1.2.0\n     */\n    background: {\n      type: String,\n      default: 'white'\n    },\n\n    /** @deprecated Use color instead */\n    oldColor: String\n  },\n  computed: {\n    styles: function styles() {\n      return {\n        'font-size': this.size,\n        color: this.color,\n        background: this.background\n      };\n    }\n  },\n  methods: {\n    handleClick: function handleClick(e) {\n      /**\n       * Triggered when button is clicked\n       * @event click\n       * @type {Event}\n       */\n      this.$emit('click', e);\n      /**\n       * Event for Alligator's example\n       * @event gator\n       * @type {Event}\n       */\n\n      this.$emit('gator', e);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/AppButton.vue?/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--13-0!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/babel-loader@8.1.0_7e7526731d462686de4308c8ba1cfd85/node_modules/babel-loader/lib!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"08a86698-vue-loader-template\"}!../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?!../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/index.js?!./src/components/AppButton.vue?vue&type=template&id=4bcee96e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"08a86698-vue-loader-template"}!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options!./src/components/AppButton.vue?vue&type=template&id=4bcee96e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{style:(_vm.styles),on:{\"click\":_vm.handleClick}},[_vm._t(\"default\")],2)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/components/AppButton.vue?/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2208a86698-vue-loader-template%22%7D!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/docs-loader.js!../../node_modules/.pnpm/vue-cli-plugin-styleguidist@4.32.3_99b30fedf1b9a6ca472b54c91e0cd9e5/node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?!../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/index.js?!./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/docs-loader.js!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-cli-plugin-styleguidist@4.32.3_99b30fedf1b9a6ca472b54c91e0cd9e5/node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options!./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n\t\tComponent.options.__docs = \"module.exports = {}\"\n\t  });\n\n//# sourceURL=webpack:///./src/components/AppButton.vue?/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/docs-loader.js!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-cli-plugin-styleguidist@4.32.3_99b30fedf1b9a6ca472b54c91e0cd9e5/node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/AppButton.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/AppButton.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = {};\nvar requireInRuntimeBase = __webpack_require__(/*! /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': 'This button is amazing, use it responsibly.\\n\\n## Examples\\n\\nOrange button:'\n    },\n    {\n        'type': 'code',\n        'content': '<app-button color=\"orange\">Push Me</app-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': ';return {data:function(){return {};}}',\n            'style': void 0,\n            'template': '<app-button color=\"orange\">Push Me</app-button>'\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': 'Ugly button with pink font and blue background:'\n    },\n    {\n        'type': 'code',\n        'content': '<app-button color=\"pink\" background=\"blue\">\\n  Ugly button\\n</app-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': ';return {data:function(){return {};}}',\n            'style': void 0,\n            'template': '<app-button color=\"pink\" background=\"blue\">\\n  Ugly button\\n</app-button>'\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': 'with extra styling'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n  <div class=\"LoadingPickle-wrap\">\\n    <app-button>Loading...</app-button>\\n  </div>\\n</template>\\n\\n<script>\\nexport default {}\\n</script>\\n\\n<style scoped>\\n.LoadingPickle-wrap {\\n\\tpadding: 20px;\\n\\tbackground-color: red;\\n}\\n</style>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n\\n;return {\\n  template: \"\\\\n  <div class=\\\\\"LoadingPickle-wrap\\\\\">\\\\n    <app-button>Loading...</app-button>\\\\n  </div>\\\\n\",\\n  }\\n\\n',\n            'style': '.LoadingPickle-wrap {\\n\\tpadding: 20px;\\n\\tbackground-color: red;\\n}'\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': 'Button containing custom tags:'\n    },\n    {\n        'type': 'code',\n        'content': '<app-button>\\n  Text with <b>bold</b>\\n</app-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': ';return {data:function(){return {};}}',\n            'style': void 0,\n            'template': '<app-button>\\n  Text with <b>bold</b>\\n</app-button>'\n        }\n    }\n]\n\n//# sourceURL=webpack:///./src/components/AppButton.vue?/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue%7Cjs%7Cjsx");

/***/ }),

/***/ "../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/AppButton.vue":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/AppButton.vue ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'exportName': 'default',\n    'displayName': 'app-button',\n    'docsBlocks': ['This button is amazing, use it responsibly.\\n\\n## Examples\\n\\nOrange button:\\n\\n```jsx\\n<app-button color=\"orange\">Push Me</app-button>\\n```\\n\\nUgly button with pink font and blue background:\\n\\n```jsx\\n<app-button color=\"pink\" background=\"blue\">\\n  Ugly button\\n</app-button>\\n```\\n\\nwith extra styling\\n\\n```vue\\n<template>\\n  <div class=\"LoadingPickle-wrap\">\\n    <app-button>Loading...</app-button>\\n  </div>\\n</template>\\n\\n<script>\\nexport default {}\\n</script>\\n\\n<style scoped>\\n.LoadingPickle-wrap {\\n\\tpadding: 20px;\\n\\tbackground-color: red;\\n}\\n</style>\\n```\\n\\nButton containing custom tags:\\n\\n```jsx\\n<app-button>\\n  Text with <b>bold</b>\\n</app-button>\\n```'],\n    'description': '',\n    'tags': {},\n    'props': [\n        {\n            'name': 'background',\n            'description': 'Sets background color of the button',\n            'tags': {\n                'since': [{\n                        'description': '1.2.0',\n                        'title': 'since'\n                    }]\n            },\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'white\\''\n            }\n        },\n        {\n            'name': 'color',\n            'description': 'Sets the button font color',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'black\\''\n            }\n        },\n        {\n            'name': 'oldColor',\n            'tags': {\n                'deprecated': [{\n                        'description': 'Use color instead',\n                        'title': 'deprecated'\n                    }]\n            },\n            'type': { 'name': 'string' }\n        },\n        {\n            'name': 'size',\n            'description': 'Set size of the element',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'14px\\''\n            }\n        }\n    ],\n    'events': {\n        'click': {\n            'name': 'click',\n            'description': 'Triggered when button is clicked',\n            'type': { 'names': ['Event'] }\n        },\n        'gator': {\n            'name': 'gator',\n            'description': 'Event for Alligator\\'s example',\n            'type': { 'names': ['Event'] }\n        }\n    },\n    'methods': void 0,\n    'slots': {\n        'default': {\n            'name': 'default',\n            'description': 'Use this slot to place the button content'\n        }\n    },\n    'example': __webpack_require__(/*! !/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/AppButton.vue */ \"../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/AppButton.vue\"),\n    'examples': null\n}\n\t\n\n//# sourceURL=webpack:///./src/components/AppButton.vue?/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./src/components/AppButton.vue":
/*!**************************************!*\
  !*** ./src/components/AppButton.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppButton_vue_vue_type_template_id_4bcee96e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppButton.vue?vue&type=template&id=4bcee96e& */ \"./src/components/AppButton.vue?vue&type=template&id=4bcee96e&\");\n/* harmony import */ var _AppButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppButton.vue?vue&type=script&lang=js& */ \"./src/components/AppButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _AppButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppButton.vue?vue&type=custom&index=0&blockType=docs */ \"./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AppButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AppButton_vue_vue_type_template_id_4bcee96e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AppButton_vue_vue_type_template_id_4bcee96e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _AppButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_AppButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/AppButton.vue?");

/***/ }),

/***/ "./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs":
/*!*****************************************************************************!*\
  !*** ./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_pnpm_vue_styleguidist_4_32_3_d81dac297579cfd5597855dabf60f13b_node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_pnpm_vue_cli_plugin_styleguidist_4_32_3_99b30fedf1b9a6ca472b54c91e0cd9e5_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/docs-loader.js!../../../../node_modules/.pnpm/vue-cli-plugin-styleguidist@4.32.3_99b30fedf1b9a6ca472b54c91e0cd9e5/node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!../../../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options!./AppButton.vue?vue&type=custom&index=0&blockType=docs */ \"../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/loaders/docs-loader.js!../../node_modules/.pnpm/vue-cli-plugin-styleguidist@4.32.3_99b30fedf1b9a6ca472b54c91e0cd9e5/node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?!../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/index.js?!./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_pnpm_vue_styleguidist_4_32_3_d81dac297579cfd5597855dabf60f13b_node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_pnpm_vue_cli_plugin_styleguidist_4_32_3_99b30fedf1b9a6ca472b54c91e0cd9e5_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/AppButton.vue?");

/***/ }),

/***/ "./src/components/AppButton.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/AppButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_pnpm_babel_loader_8_1_0_7e7526731d462686de4308c8ba1cfd85_node_modules_babel_loader_lib_index_js_node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/.pnpm/babel-loader@8.1.0_7e7526731d462686de4308c8ba1cfd85/node_modules/babel-loader/lib!../../../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options!./AppButton.vue?vue&type=script&lang=js& */ \"../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?!../../node_modules/.pnpm/babel-loader@8.1.0_7e7526731d462686de4308c8ba1cfd85/node_modules/babel-loader/lib/index.js!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?!../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/index.js?!./src/components/AppButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_pnpm_babel_loader_8_1_0_7e7526731d462686de4308c8ba1cfd85_node_modules_babel_loader_lib_index_js_node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/AppButton.vue?");

/***/ }),

/***/ "./src/components/AppButton.vue?vue&type=template&id=4bcee96e&":
/*!*********************************************************************!*\
  !*** ./src/components/AppButton.vue?vue&type=template&id=4bcee96e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_08a86698_vue_loader_template_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_template_id_4bcee96e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"08a86698-vue-loader-template\"}!../../../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib??vue-loader-options!./AppButton.vue?vue&type=template&id=4bcee96e& */ \"../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"08a86698-vue-loader-template\\\"}!../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.44.1/node_modules/cache-loader/dist/cjs.js?!../../node_modules/.pnpm/vue-loader@15.9.3_5301d49b91a5273e67d0261daf815cc2/node_modules/vue-loader/lib/index.js?!./src/components/AppButton.vue?vue&type=template&id=4bcee96e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_08a86698_vue_loader_template_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_template_id_4bcee96e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_08a86698_vue_loader_template_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pnpm_cache_loader_4_1_0_webpack_4_44_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_9_3_5301d49b91a5273e67d0261daf815cc2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_template_id_4bcee96e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/AppButton.vue?");

/***/ }),

/***/ "./src/components/sizeMixin.js":
/*!*************************************!*\
  !*** ./src/components/sizeMixin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  props: {\n    /**\n     * Set size of the element\n     */\n    size: {\n      type: String,\n      default: '14px'\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/components/sizeMixin.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** multi /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/client/index ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/client/index */\"../../node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/client/index.js\");\n\n\n//# sourceURL=webpack:///multi_/home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-styleguidist@4.32.3_d81dac297579cfd5597855dabf60f13b/node_modules/vue-styleguidist/lib/client/index?");

/***/ })

/******/ });