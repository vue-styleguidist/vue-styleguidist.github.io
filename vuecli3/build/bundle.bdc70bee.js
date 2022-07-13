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
/******/ 		return __webpack_require__.p + "build/" + ({"compiler":"compiler"}[chunkId]||chunkId) + "." + {"compiler":"8aafab51"}[chunkId] + ".js"
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("71ac");


/***/ }),

/***/ "1347":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ rsg_components_SectionHeading_SectionHeading; });

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("27b0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("6b86");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Slot/index.js + 1 modules
var Slot = __webpack_require__("30da");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("32cb");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("54c3");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Heading/index.js + 1 modules
var Heading = __webpack_require__("3c2f");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__("54e8");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/SectionHeading/SectionHeadingRenderer.js







var styles = function styles(_ref) {
  var color = _ref.color,
      space = _ref.space,
      fontSize = _ref.fontSize;
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: space[1]
    },
    toolbar: {
      marginLeft: 'auto'
    },
    sectionName: {
      'a&:hover, a&:active': {
        isolate: false,
        textDecoration: 'underline',
        cursor: 'pointer'
      }
    },
    isDeprecated: {
      color: color.light,
      '&, &:hover': {
        textDecoration: 'line-through'
      }
    },
    parentName: {
      cursor: 'pointer',
      fontSize: fontSize.h5,
      fontStyle: 'italic',
      margin: space[1]
    }
  };
};

var localPropTypes = {
  classes: prop_types_default.a.objectOf(prop_types_default.a.string.isRequired).isRequired,
  children: prop_types_default.a.node,
  toolbar: prop_types_default.a.node,
  id: prop_types_default.a.string.isRequired,
  href: prop_types_default.a.string,
  depth: prop_types_default.a.number.isRequired,
  deprecated: prop_types_default.a.bool,
  parentName: prop_types_default.a.string,
  parentHref: prop_types_default.a.string
};

var SectionHeadingRenderer_SectionHeadingRenderer = function SectionHeadingRenderer(_ref2) {
  var classes = _ref2.classes,
      children = _ref2.children,
      toolbar = _ref2.toolbar,
      id = _ref2.id,
      href = _ref2.href,
      depth = _ref2.depth,
      deprecated = _ref2.deprecated,
      parentName = _ref2.parentName,
      parentHref = _ref2.parentHref;
  var headingLevel = Math.min(6, depth);
  var sectionNameClasses = Object(clsx_m["a" /* default */])(classes.sectionName, defineProperty_default()({}, classes.isDeprecated, deprecated));
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react_default.a.createElement(Heading["a" /* default */], {
    level: headingLevel,
    id: id
  }, href ? /*#__PURE__*/react_default.a.createElement("a", {
    href: href,
    className: sectionNameClasses
  }, children) : /*#__PURE__*/react_default.a.createElement("span", {
    className: sectionNameClasses
  }, children), parentName && parentHref && /*#__PURE__*/react_default.a.createElement("a", {
    href: parentHref,
    className: classes.parentName
  }, parentName)), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.toolbar
  }, toolbar));
};

SectionHeadingRenderer_SectionHeadingRenderer.propTypes = localPropTypes;
/* harmony default export */ var SectionHeading_SectionHeadingRenderer = (Object(Styled["a" /* default */])(styles)(SectionHeadingRenderer_SectionHeadingRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/SectionHeading/SectionHeading.js


var _excluded = ["slotName", "slotProps", "children", "id"];




var SectionHeading_localPropTypes = {
  children: prop_types_default.a.node,
  id: prop_types_default.a.string.isRequired,
  slotName: prop_types_default.a.string.isRequired,
  slotProps: prop_types_default.a.shape({
    isolated: prop_types_default.a.bool.isRequired,
    parentComponent: prop_types_default.a.shape({
      href: prop_types_default.a.string.isRequired,
      visibleName: prop_types_default.a.string.isRequired
    })
  }).isRequired,
  href: prop_types_default.a.string,
  depth: prop_types_default.a.number.isRequired,
  deprecated: prop_types_default.a.bool,
  pagePerSection: prop_types_default.a.bool
};

var SectionHeading_SectionHeading = function SectionHeading(_ref) {
  var slotName = _ref.slotName,
      slotProps = _ref.slotProps,
      children = _ref.children,
      id = _ref.id,
      rest = objectWithoutProperties_default()(_ref, _excluded);

  var parentHref = slotProps.parentComponent && slotProps.parentComponent.href;
  return /*#__PURE__*/react_default.a.createElement(SectionHeading_SectionHeadingRenderer, extends_default()({
    toolbar: slotProps.parentComponent ? null : /*#__PURE__*/react_default.a.createElement(Slot["a" /* default */], {
      name: slotName,
      props: slotProps
    }),
    id: id
  }, rest, {
    parentName: slotProps.parentComponent && slotProps.parentComponent.visibleName,
    parentHref: parentHref
  }), children);
};

SectionHeading_SectionHeading.propTypes = SectionHeading_localPropTypes;
/* harmony default export */ var rsg_components_SectionHeading_SectionHeading = (SectionHeading_SectionHeading);
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/SectionHeading/index.js


/***/ }),

/***/ "1566":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Welcome_WelcomeRenderer; });

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("f736");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("40d2");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("ca86");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__("4023");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__("54e8");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/scripts/consts.js
var consts = __webpack_require__("b11e");
var consts_default = /*#__PURE__*/__webpack_require__.n(consts);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Welcome/WelcomeRenderer.js









var styles = function styles(_ref) {
  var space = _ref.space,
      maxWidth = _ref.maxWidth;
  return {
    root: {
      maxWidth: maxWidth,
      margin: [[0, 'auto']],
      padding: space[4]
    }
  };
};

function WelcomeRenderer(_ref2) {
  var classes = _ref2.classes,
      patterns = _ref2.patterns;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    text: "\n# Welcome to Vue Styleguidist!\n\n**We couldn\u2019t find any components** using these patterns:\n\n".concat(patterns.map(function (p) {
      return "- `".concat(p, "`");
    }).join('\n'), "\n\nCreate **styleguide.config.js** file in your project root directory like this:\n\n    module.exports = {\n      components: 'src/components/**/*.vue'\n    };\n\nRead more in the [locating components guide](").concat(consts_default.a.DOCS_COMPONENTS, ").\n\t\t\t\t")
  }));
}
WelcomeRenderer.propTypes = {
  classes: prop_types_default.a.object.isRequired,
  patterns: prop_types_default.a.array.isRequired
};
/* harmony default export */ var Welcome_WelcomeRenderer = (Object(Styled["a" /* default */])(styles)(WelcomeRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Welcome/index.js


/***/ }),

/***/ "1c23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _vueInbrowserCompilerUtils = __webpack_require__("a459");

function _default(code, jsxInExamples) {
  // In case we are loading a vue component as an example, extract script tag
  if ((0, _vueInbrowserCompilerUtils.isCodeVueSfc)(code)) {
    var _descriptor$script;

    var descriptor = (0, _vueInbrowserCompilerUtils.parseComponent)(code);
    return (_descriptor$script = descriptor === null || descriptor === void 0 ? void 0 : descriptor.script) !== null && _descriptor$script !== void 0 ? _descriptor$script : '';
  } // if in JSX mode or literal return examples code as is


  if (jsxInExamples || /new Vue\(/.test(code)) {
    return code;
  }

  if (/\n\W+?export\W+default\W/.test(code) || /\n\W+?module.exports(\W+)?=/.test(code)) {
    return code;
  } //else it could be the weird almost jsx of vue-styleguidist


  return /^</.test(code.trim()) ? '' : code.split(/\n[\t ]*</)[0];
}

/***/ }),

/***/ "2f05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("f39e");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6c4");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4e81");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("0ea6");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("5373");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("861a");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("6866");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("4f46");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("27b0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("be8f");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("f2a4");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("39ec");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("2683");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("876b");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("0d9f");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("32cb");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("cfee");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("f736");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js
var map = __webpack_require__("c67d");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js + 1 modules
var vue_inbrowser_compiler_utils_esm = __webpack_require__("a459");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__("54e8");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__("4023");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/scripts/consts.js
var consts = __webpack_require__("b11e");
var consts_default = /*#__PURE__*/__webpack_require__.n(consts);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/VsgReactComponent/ReactComponent.js
var ReactComponent = __webpack_require__("535b");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/ExamplePlaceholder/ExamplePlaceholderRenderer.js



















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var styles = function styles(_ref) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      color = _ref.color;
  return {
    button: {
      padding: 0,
      fontSize: fontSize.base,
      fontFamily: fontFamily.base,
      textDecoration: 'underline',
      color: color.light,
      border: 0,
      cursor: 'pointer',
      background: 'transparent',
      '&:hover, &:active': {
        isolate: false,
        color: color.lightest
      }
    }
  };
};

function propsToArray(props) {
  return map_default()(props, function (prop, name) {
    return _objectSpread(_objectSpread({}, prop), {}, {
      name: name
    });
  });
}
var ExamplePlaceholderRenderer_ExamplePlaceholderRendererWithDoc = /*#__PURE__*/function (_Component) {
  inherits_default()(ExamplePlaceholderRendererWithDoc, _Component);

  var _super = _createSuper(ExamplePlaceholderRendererWithDoc);

  function ExamplePlaceholderRendererWithDoc(props) {
    var _this;

    classCallCheck_default()(this, ExamplePlaceholderRendererWithDoc);

    _this = _super.call(this);
    _this.handleOpen = _this.handleOpen.bind(assertThisInitialized_default()(_this));
    var tags = props.component.props.tags;
    _this.state = {
      shouldDisplay: !tags || !tags.examples || !tags.examples.length || tags.examples[tags.examples.length - 1].content !== '[none]',
      isVisible: false
    };
    return _this;
  }

  createClass_default()(ExamplePlaceholderRendererWithDoc, [{
    key: "handleOpen",
    value: function handleOpen() {
      this.setState({
        isVisible: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          shouldDisplay = _this$state.shouldDisplay; // in case we have an ignored example file
      // do not display the helper text

      if (!shouldDisplay) {
        return /*#__PURE__*/react_default.a.createElement("div", null);
      }

      var _this$props = this.props,
          classes = _this$props.classes,
          name = _this$props.name,
          props = _this$props.component.props;

      if (isVisible) {
        return /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
          text: "\nCreate **Readme.md** or **".concat(name, ".md** file in the component\u2019s folder like this:\n\n    ").concat(name, " example:\n\n    ```vue\n    ").concat(Object(vue_inbrowser_compiler_utils_esm["getDefaultExample"])(_objectSpread(_objectSpread({}, props), {}, {
            props: propsToArray(props.props),
            slots: propsToArray(props.slots),
            events: propsToArray(props.events)
          })), "\n    ```\n\nYou can also add examples and documentation in the `<docs>` block of your `.vue` Single File Component.\n\nYou may need to **restart** the style guide server after adding an example file.\n\nRead more in the [documenting components guide](").concat(consts_default.a.DOCS_DOCUMENTING, ").\n\t\t\t\t\t")
        });
      }

      return /*#__PURE__*/react_default.a.createElement("button", {
        className: classes.button,
        onClick: this.handleOpen
      }, "Add examples to this component");
    }
  }]);

  return ExamplePlaceholderRendererWithDoc;
}(react["Component"]);

defineProperty_default()(ExamplePlaceholderRenderer_ExamplePlaceholderRendererWithDoc, "propTypes", {
  classes: prop_types_default.a.object.isRequired,
  name: prop_types_default.a.string,
  component: prop_types_default.a.object
});

function ExamplePlaceholderRenderer(props) {
  return /*#__PURE__*/react_default.a.createElement(ReactComponent["a" /* DocumentedComponentContext */].Consumer, null, function (component) {
    return /*#__PURE__*/react_default.a.createElement(ExamplePlaceholderRenderer_ExamplePlaceholderRendererWithDoc, extends_default()({}, props, {
      component: component
    }));
  });
}
/* harmony default export */ var ExamplePlaceholder_ExamplePlaceholderRenderer = (Object(Styled["a" /* default */])(styles)(ExamplePlaceholderRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/ExamplePlaceholder/index.js


/***/ }),

/***/ "3ffb":
/***/ (function(module, exports) {

module.exports = {
  props: {
    /**
     * Set size of the element
     */
    size: {
      type: String,
      default: '14px'
    }
  }
};

/***/ }),

/***/ "45c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"51cec61e-vue-loader-template"}!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.8_m6jvttnwtqqy6l4pi5vsxiehsy/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--2-0!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.8_m6jvttnwtqqy6l4pi5vsxiehsy/node_modules/vue-loader/lib??vue-loader-options!./src/components/AppButton.vue?vue&type=template&id=119ff6d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{style:(_vm.styles),on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppButton.vue?vue&type=template&id=119ff6d6&

// EXTERNAL MODULE: ./src/components/sizeMixin.js
var sizeMixin = __webpack_require__("3ffb");
var sizeMixin_default = /*#__PURE__*/__webpack_require__.n(sizeMixin);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--14-0!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/thread-loader@2.1.3_webpack@4.46.0/node_modules/thread-loader/dist/cjs.js!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/babel-loader@8.2.2_lzsemofhph6vepnub4bnemnm6m/node_modules/babel-loader/lib!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--2-0!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.8_m6jvttnwtqqy6l4pi5vsxiehsy/node_modules/vue-loader/lib??vue-loader-options!./src/components/AppButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var AppButtonvue_type_script_lang_js_ = ({
  name: 'app-button',
  mixins: [sizeMixin_default.a],
  props: {
    /**
     * Sets the button font color
     */
    color: {
      type: String,
      default: 'black'
    },

    /** Sets background color of the button
     * @since 1.2.0
     */
    background: {
      type: String,
      default: 'white'
    },

    /** @deprecated Use color instead */
    oldColor: String
  },
  computed: {
    styles: function styles() {
      return {
        'font-size': this.size,
        color: this.color,
        background: this.background
      };
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      /**
       * Triggered when button is clicked
       * @event click
       * @type {Event}
       */
      this.$emit('click', e);
      /**
       * Event for Alligator's example
       * @event gator
       * @type {Event}
       */

      this.$emit('gator', e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/AppButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppButtonvue_type_script_lang_js_ = (AppButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.8_m6jvttnwtqqy6l4pi5vsxiehsy/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("aab4");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/loaders/docs-loader.js!/home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-cli-plugin-styleguidist/empty-object-loader.js!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--2-0!/home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue-loader@15.9.8_m6jvttnwtqqy6l4pi5vsxiehsy/node_modules/vue-loader/lib??vue-loader-options!./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md
/* harmony default export */ var AppButtonvue_type_custom_index_0_blockType_docs_lang_md = (function (Component) {
        Component.options = Component.options || {}
        Component.options.__docs = "module.exports = {}"
      });
// CONCATENATED MODULE: ./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md
 /* harmony default export */ var components_AppButtonvue_type_custom_index_0_blockType_docs_lang_md = (AppButtonvue_type_custom_index_0_blockType_docs_lang_md); 
// CONCATENATED MODULE: ./src/components/AppButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof components_AppButtonvue_type_custom_index_0_blockType_docs_lang_md === 'function') components_AppButtonvue_type_custom_index_0_blockType_docs_lang_md(component)

/* harmony default export */ var AppButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4705":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f736");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("40d2");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a34e");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4699");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4e29");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rsg_components_TabButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("62ef");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("de34");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);








var UsageTabButton = function UsageTabButton(props) {
  var component = props.props;
  var words = [];

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(component.props)) {
    words.push('props');
  }

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(component.events)) {
    words.push('events');
  }

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(component.slots)) {
    words.push('slots');
  }

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(component.methods)) {
    words.push('methods');
  }

  var showButton = words.length > 0;
  return showButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rsg_components_TabButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], props, words.length === 1 ? words[0] : "".concat(words.slice(0, -1).join(', '), " & ").concat(words[words.length - 1])) : null;
};

UsageTabButton.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  props: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    props: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
    methods: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
  }).isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (UsageTabButton);

/***/ }),

/***/ "4dd7":
/***/ (function(module, exports, __webpack_require__) {


if (false) {}
var requireMap = {};
var requireInRuntimeBase = __webpack_require__("a822");
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__("fc18");
var evalInContext = evalInContextBase.bind(null, 
	"", 
	null, null)
module.exports = [
    {
        'type': 'markdown',
        'content': 'This button is amazing, use it responsibly.\n\n## Examples\n\nOrange button:'
    },
    {
        'type': 'code',
        'content': '<app-button color="orange">Push Me</app-button>',
        'settings': {},
        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),
        'compiled': {
            'script': ';return {data:function(){return {};}}',
            'style': void 0,
            'template': '<app-button color="orange">Push Me</app-button>'
        }
    },
    {
        'type': 'markdown',
        'content': 'Ugly button with pink font and blue background:'
    },
    {
        'type': 'code',
        'content': '<app-button color="pink" background="blue">\n\tUgly button\n</app-button>',
        'settings': {},
        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),
        'compiled': {
            'script': ';return {data:function(){return {};}}',
            'style': void 0,
            'template': '<app-button color="pink" background="blue">\n\tUgly button\n</app-button>'
        }
    },
    {
        'type': 'markdown',
        'content': 'with extra styling'
    },
    {
        'type': 'code',
        'content': '<template>\n\t<div class="LoadingPickle-wrap">\n\t\t<app-button>Loading...</app-button>\n\t</div>\n</template>\n\n<script>\nexport default {}\n</script>\n\n<style scoped>\n.LoadingPickle-wrap {\n\tpadding: 20px;\n\tbackground-color: red;\n}\n</style>',
        'settings': {},
        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),
        'compiled': {
            'script': '\n\n\n\n\n\n\n;return {template: "\\n\\t<div class=\\"LoadingPickle-wrap\\">\\n\\t\\t<app-button>Loading...</app-button>\\n\\t</div>\\n", };\n',
            'style': '.LoadingPickle-wrap {\n\tpadding: 20px;\n\tbackground-color: red;\n}'
        }
    },
    {
        'type': 'markdown',
        'content': 'Button containing custom tags:'
    },
    {
        'type': 'code',
        'content': '<app-button>\n\tText with <b>bold</b>\n</app-button>',
        'settings': {},
        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),
        'compiled': {
            'script': ';return {data:function(){return {};}}',
            'style': void 0,
            'template': '<app-button>\n\tText with <b>bold</b>\n</app-button>'
        }
    }
]

/***/ }),

/***/ "535b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentedComponentContext; });
/* unused harmony export VsgReactComponent */
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ea6");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4f46");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f39e");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d6c4");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4e81");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5373");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("861a");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("6866");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("27b0");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("be8f");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("f2a4");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("2683");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("876b");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("0d9f");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("32cb");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("f736");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ca86");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("4699");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("4e29");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var rsg_components_Styled__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("54e8");
/* harmony import */ var rsg_components_Context__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("f22a");
/* harmony import */ var react_styleguidist_lib_client_rsg_components_ReactComponent_ReactComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("4614");
/* harmony import */ var react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("0f75");
















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var styles = function styles(_ref) {
  var space = _ref.space;
  return {
    subComponents: {
      borderLeft: '1px solid #CCCCCC',
      padding: "".concat(space[2], "px 0 0 ").concat(space[3], "px"),
      marginBottom: space[4]
    }
  };
};

var DocumentedComponentContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createContext({});
var VsgReactComponent = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default()(VsgReactComponent, _Component);

  var _super = _createSuper(VsgReactComponent);

  function VsgReactComponent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default()(this, VsgReactComponent);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default()(VsgReactComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      var pagePerSection = this.context.config.pagePerSection;
      var _this$props = this.props,
          component = _this$props.component,
          classes = _this$props.classes;

      var getFinalUrl = function getFinalUrl(slug, depth) {
        return pagePerSection ? Object(react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"])({
          slug: slug,
          useSlugAsIdParam: depth !== 1,
          takeHash: true
        }) : Object(react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"])({
          slug: slug,
          anchor: true
        });
      };

      if (component.subComponents && component.props) {
        var links = component.subComponents.map(function (c) {
          return {
            name: c.visibleName,
            url: getFinalUrl(c.slug || '', _this.props.depth)
          };
        });
        component.props.tags = _objectSpread(_objectSpread({}, component.props.tags), {}, {
          subComponents: links
        });
      }

      var parentHref = component.props ? getFinalUrl(component.slug || '', this.props.depth) : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_17___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(DocumentedComponentContext.Provider, {
        value: component
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(react_styleguidist_lib_client_rsg_components_ReactComponent_ReactComponent__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], this.props)), component.subComponents ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: classes.subComponents
      }, component.subComponents.map(function (c, i) {
        c.parentComponent = {
          href: parentHref,
          visibleName: component.visibleName
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(DocumentedComponentContext.Provider, {
          key: c.props && c.props.displayName || i,
          value: c
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(react_styleguidist_lib_client_rsg_components_ReactComponent_ReactComponent__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({}, _this.props, {
          component: c,
          depth: _this.props.depth + 1
        })));
      })) : null);
    }
  }]);

  return VsgReactComponent;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(VsgReactComponent, "propTypes", _objectSpread(_objectSpread({}, react_styleguidist_lib_client_rsg_components_ReactComponent_ReactComponent__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].propTypes), {}, {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired).isRequired
}));

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(VsgReactComponent, "contextType", rsg_components_Context__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["b"] = (Object(rsg_components_Styled__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"])(styles)(VsgReactComponent));

/***/ }),

/***/ "53c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4699");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4e29");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rsg_components_TabButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("62ef");




var CodeTabButton = function CodeTabButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rsg_components_TabButton__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], props, "View Code");
};

CodeTabButton.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (CodeTabButton);

/***/ }),

/***/ "6b09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ rsg_components_JsDoc_JsDoc; });

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("27b0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("6b86");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("40d2");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("ca86");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6c4");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("7743");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("cfee");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("0ea6");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("b740");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js
var map = __webpack_require__("c67d");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/capitalize.js
var capitalize = __webpack_require__("7dc8");
var capitalize_default = /*#__PURE__*/__webpack_require__.n(capitalize);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__("4023");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Argument/index.js + 1 modules
var Argument = __webpack_require__("6f48");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__("54e8");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("71bf");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("54c3");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Link/index.js + 1 modules
var Link = __webpack_require__("47d0");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/SubComponents/SubComponents.js


var _excluded = ["classes"];








var styles = function styles(_ref) {
  var space = _ref.space,
      fontFamily = _ref.fontFamily;
  return {
    root: {
      isolate: false,
      fontFamily: fontFamily.base,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      marginBottom: space[3]
    },
    toggler: {
      isolate: false,
      cursor: 'pointer'
    },
    title: {
      isolate: false,
      marginRight: space[1]
    },
    open: {
      isolate: false,
      display: 'flex',
      flexWrap: 'wrap'
    },
    element: {
      // To override the isolation of link we need to wrap
      // this selector
      '$root &': {
        isolate: false,
        marginRight: space[1]
      }
    }
  };
};

var SubComponents_SubComponents = function SubComponents(_ref2) {
  var classes = _ref2.classes,
      props = objectWithoutProperties_default()(_ref2, _excluded);

  // only collapse if there is more than 3 requires
  var collapsibleSubComponents = props.subComponents.length > 3;

  var _useState = Object(react["useState"])(!collapsibleSubComponents),
      _useState2 = slicedToArray_default()(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: Object(clsx_m["a" /* default */])(classes.root, open && classes.open)
  }, /*#__PURE__*/react_default.a.createElement("b", {
    onClick: function onClick() {
      return setOpen(!collapsibleSubComponents || !open);
    },
    className: Object(clsx_m["a" /* default */])(classes.title, collapsibleSubComponents && classes.toggler)
  }, collapsibleSubComponents ? open ? '-' : '+' : '', " Requires", collapsibleSubComponents ? " (".concat(props.subComponents.length, ")") : ''), props.subComponents.map(function (subComponent, i) {
    return /*#__PURE__*/react_default.a.createElement(Link["a" /* default */], {
      key: i,
      href: subComponent.url,
      className: classes.element
    }, subComponent.name);
  }));
};
SubComponents_SubComponents.propTypes = {
  classes: prop_types_default.a.objectOf(prop_types_default.a.string.isRequired).isRequired,
  subComponents: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    name: prop_types_default.a.string.isRequired,
    url: prop_types_default.a.string.isRequired
  }).isRequired).isRequired
};
/* harmony default export */ var rsg_components_SubComponents_SubComponents = (Object(Styled["a" /* default */])(styles)(SubComponents_SubComponents));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/SubComponents/index.js

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/JsDoc/JsDoc.js


var JsDoc_excluded = ["classes"];
















var JsDoc_styles = function styles(_ref) {
  var space = _ref.space,
      color = _ref.color;
  return {
    wrapper: {
      color: color.base,
      fontSize: 'inherit',
      lineHeight: 1.5
    },
    name: {
      marginRight: space[1]
    }
  };
};

var list = function list(array) {
  return array.map(function (item) {
    return item.description;
  }).join(', ');
};

var paragraphs = function paragraphs(array) {
  return array.map(function (item) {
    return item.description;
  }).join('\n\n');
};

var fields = {
  deprecated: function deprecated(value) {
    return typeof value[0].description === 'string' ? "".concat(value[0].description) : '';
  },
  see: function see(value) {
    return paragraphs(value);
  },
  link: function link(value) {
    return paragraphs(value);
  },
  author: function author(value) {
    return "".concat(list(value));
  },
  version: function version(value) {
    return "".concat(value[0].description);
  },
  since: function since(value) {
    return "".concat(value[0].description);
  }
};

var JsDoc_JsDocRenderer = function JsDocRenderer(_ref2) {
  var classes = _ref2.classes,
      field = _ref2.field,
      children = _ref2.children;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "vsg-jsdoc-tag ".concat(classes.wrapper),
    key: field
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "vsg-tag-name ".concat(classes.name)
  }, capitalize_default()(field)), /*#__PURE__*/react_default.a.createElement("span", {
    className: "vsg-tag-value ".concat(classes.value)
  }, children));
};

var JsDoc_JsDoc = function JsDoc(_ref3) {
  var classes = _ref3.classes,
      props = objectWithoutProperties_default()(_ref3, JsDoc_excluded);

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, props.subComponents && /*#__PURE__*/react_default.a.createElement(rsg_components_SubComponents_SubComponents, {
    subComponents: props.subComponents
  }), props["throws"] && props["throws"].map(function (_throws, i) {
    return /*#__PURE__*/react_default.a.createElement(JsDoc_JsDocRenderer, {
      key: i,
      field: "throws",
      classes: classes
    }, /*#__PURE__*/react_default.a.createElement(Argument["a" /* default */], extends_default()({
      name: ""
    }, _throws, {
      description: typeof _throws.description === 'boolean' ? _throws.description.toString() : _throws.description
    })));
  }), map_default()(fields, function (format, field) {
    var value = props[field];

    if (!value || !Array.isArray(value)) {
      return null;
    }

    return /*#__PURE__*/react_default.a.createElement(JsDoc_JsDocRenderer, {
      key: field,
      field: field,
      classes: classes
    }, /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
      text: format(value) || '',
      inline: true
    }));
  }));
};
JsDoc_JsDoc.propTypes = {
  classes: prop_types_default.a.objectOf(prop_types_default.a.string.isRequired).isRequired,
  subComponents: prop_types_default.a.array,
  deprecated: prop_types_default.a.array,
  see: prop_types_default.a.array,
  link: prop_types_default.a.array,
  author: prop_types_default.a.array,
  version: prop_types_default.a.array,
  since: prop_types_default.a.array,
  "throws": prop_types_default.a.array
};
/* harmony default export */ var rsg_components_JsDoc_JsDoc = (Object(Styled["a" /* default */])(JsDoc_styles)(JsDoc_JsDoc));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/JsDoc/index.js


/***/ }),

/***/ "6f48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Argument_ArgumentRenderer; });

// UNUSED EXPORTS: styles, ArgumentRenderer

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("6b86");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("cfee");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6c4");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("7743");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__("54e8");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__("4023");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Name/index.js + 1 modules
var Name = __webpack_require__("1e72");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Type/index.js + 1 modules
var Type = __webpack_require__("4f10");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-group@3.0.2_react@18.2.0/node_modules/react-group/index.js
var react_group = __webpack_require__("997d");
var react_group_default = /*#__PURE__*/__webpack_require__.n(react_group);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Argument/ArgumentRenderer.js

var _excluded = ["classes", "name", "type", "description", "returns", "block"];










var styles = function styles(_ref) {
  var space = _ref.space;
  return {
    block: {
      marginBottom: space[2]
    }
  };
};
var ArgumentRenderer_ArgumentRenderer = function ArgumentRenderer(_ref2) {
  var classes = _ref2.classes,
      name = _ref2.name,
      type = _ref2.type,
      description = _ref2.description,
      returns = _ref2.returns,
      block = _ref2.block,
      props = objectWithoutProperties_default()(_ref2, _excluded);

  var isOptional = type && type.type === 'OptionalType';
  var defaultValue = props["default"];

  if (isOptional) {
    type = type.expression;
  }

  var content = /*#__PURE__*/react_default.a.createElement(react_group_default.a, null, returns && 'Returns', name && /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(Name["a" /* default */], null, name), type && ':'), type && /*#__PURE__*/react_default.a.createElement(Type["a" /* default */], null, type.name, isOptional && '?', !!defaultValue && "=".concat(defaultValue)), type && description && "\u2014", description && /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    text: "".concat(description),
    inline: true
  }));

  if (block) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.block
    }, content);
  }

  return content;
};
ArgumentRenderer_ArgumentRenderer.propTypes = {
  classes: prop_types_default.a.objectOf(prop_types_default.a.string.isRequired).isRequired,
  name: prop_types_default.a.string.isRequired,
  type: prop_types_default.a.object,
  "default": prop_types_default.a.string,
  description: prop_types_default.a.string,
  returns: prop_types_default.a.bool,
  block: prop_types_default.a.bool
};
/* harmony default export */ var Argument_ArgumentRenderer = (Object(Styled["a" /* default */])(styles)(ArgumentRenderer_ArgumentRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Argument/index.js



/***/ }),

/***/ "71ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_styleguidist_lib_client_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a6c6");
/* harmony import */ var react_styleguidist_lib_client_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2140");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4446");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_styleguidist_lib_client_utils_handleHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("de5e");
/* harmony import */ var _utils_renderStyleguide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9758");
/* eslint-disable import/first */




 // Examples code revision to rerender only code examples (not the whole page) when code changes
// eslint-disable-next-line no-unused-vars

var codeRevision = 0; // Scrolls to origin when current window location hash points to an isolated view.

var scrollToOrigin = function scrollToOrigin() {
  var hash = window.location.hash;

  if (Object(react_styleguidist_lib_client_utils_handleHash__WEBPACK_IMPORTED_MODULE_3__[/* hasInHash */ "d"])(hash, '#/') || Object(react_styleguidist_lib_client_utils_handleHash__WEBPACK_IMPORTED_MODULE_3__[/* hasInHash */ "d"])(hash, '#!/')) {
    // Extracts the id param of hash
    var idHashParam = Object(react_styleguidist_lib_client_utils_handleHash__WEBPACK_IMPORTED_MODULE_3__[/* getParameterByName */ "c"])(hash, 'id'); // For default scroll scrollTop is the page top

    var scrollTop = 0;

    if (idHashParam) {
      // Searches the node with the same id, takes his offsetTop
      // And with offsetTop, tries to scroll to node
      var idElement = document.getElementById(idHashParam);

      if (idElement && idElement.offsetTop) {
        scrollTop = idElement.offsetTop;
      }
    }

    window.scrollTo(0, scrollTop);
  }
};

var render = function render() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-unresolved,import/extensions
  var styleguide = __webpack_require__("7264");

  var container = document.getElementById(styleguide.config.mountPointId);

  if (!container) {
    throw new Error("Could not find container with id \"".concat(styleguide.config.mountPointId, "\""));
  }

  var root = Object(react_dom_client__WEBPACK_IMPORTED_MODULE_2__["createRoot"])(container); // createRoot(container!) if you use TypeScript

  root.render(Object(_utils_renderStyleguide__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"])(styleguide, codeRevision));
};

window.addEventListener('hashchange', render);
window.addEventListener('hashchange', scrollToOrigin); // @ts-expect-error hot module replacement

if (false) {}

render();

/***/ }),

/***/ "7218":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ea6");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4f46");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f39e");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d6c4");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4e81");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5373");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("861a");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("6866");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("be8f");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("f2a4");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("39ec");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("2683");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("876b");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("0d9f");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("32cb");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("4699");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("c3ee");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("4e29");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var rsg_components_Context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("f22a");
/* harmony import */ var react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("3ad0");
















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var PlaygroundAsync = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default()(PlaygroundAsync, _Component);

  var _super = _createSuper(PlaygroundAsync);

  function PlaygroundAsync(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, PlaygroundAsync);

    _this = _super.call(this, props, context);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this), "componentWillUnmount", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].prototype.componentWillUnmount);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this), "handleChange", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].prototype.handleChange);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this), "handleTabChange", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].prototype.handleTabChange);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this), "getInitialActiveTab", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].prototype.getInitialActiveTab);

    react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this), props, context);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(PlaygroundAsync, [{
    key: "render",
    value: function render() {
      return react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].prototype.render.call(this);
    }
  }]);

  return PlaygroundAsync;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(PlaygroundAsync, "propTypes", _objectSpread(_objectSpread({}, react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].propTypes), {}, {
  code: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.shape({
    raw: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    compiled: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.shape({
      script: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
      template: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
      style: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string
    }), prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.bool])
  }).isRequired
}));

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(PlaygroundAsync, "contextType", rsg_components_Context__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(PlaygroundAsync, "getDerivedStateFromProps", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].getDerivedStateFromProps);

/* harmony default export */ __webpack_exports__["a"] = (Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_16__[/* polyfill */ "a"])(PlaygroundAsync));

/***/ }),

/***/ "7264":
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'config': {
        'title': 'Default Style Guide',
        'tocMode': 'expand',
        'version': void 0,
        'showCode': false,
        'showUsage': false,
        'showSidebar': true,
        'previewDelay': 500,
        'theme': {},
        'styles': {},
        'compilerConfig': { 'objectAssign': 'Object.assign' },
        'editorConfig': {
            'theme': 'base16-light',
            'mode': 'jsx',
            'lineWrapping': true,
            'smartIndent': false,
            'matchBrackets': true,
            'viewportMargin': Infinity,
            'lineNumbers': false
        },
        'ribbon': {
            'text': 'Back to examples',
            'url': 'https://vue-styleguidist.github.io/Examples.html'
        },
        'pagePerSection': false,
        'mountPointId': 'rsg-root',
        'jsxInExamples': false,
        'jssThemedEditor': true,
        'locallyRegisterComponents': false
    },
    'welcomeScreen': false,
    'patterns': void 0,
    'sections': [{
            'name': '',
            'exampleMode': 'collapse',
            'usageMode': 'collapse',
            'sectionDepth': 0,
            'description': void 0,
            'slug': '',
            'sections': [],
            'href': void 0,
            'components': [{
                    'filepath': 'src/components/AppButton.vue',
                    'slug': 'appbutton',
                    'pathLine': 'src/components/AppButton.vue',
                    'module': __webpack_require__("45c2"),
                    'props': __webpack_require__("93ba"),
                    'hasExamples': true,
                    'metadata': {},
                    'subComponents': void 0
                }],
            'content': void 0,
            'external': void 0
        }],
    'renderRootJsx': void 0
}
	

/***/ }),

/***/ "8047":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Usage; });

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("f39e");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("27b0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("9a95");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6c4");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("7743");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("f736");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("cfee");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("00e3");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("0ea6");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("4e3e");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("5d4c");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("ca86");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__("54e8");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Argument/index.js + 1 modules
var Argument = __webpack_require__("6f48");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Heading/index.js + 1 modules
var Heading = __webpack_require__("3c2f");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Arguments/ArgumentsRenderer.js








var styles = function styles(_ref) {
  var space = _ref.space;
  return {
    root: {
      marginBottom: space[2],
      fontSize: 'inherit'
    },
    headingWrapper: {
      marginBottom: space[0]
    }
  };
};
var ArgumentsRenderer_ArgumentsRenderer = function ArgumentsRenderer(_ref2) {
  var classes = _ref2.classes,
      args = _ref2.args,
      heading = _ref2.heading;

  if (args.length === 0) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, heading && /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.headingWrapper
  }, /*#__PURE__*/react_default.a.createElement(Heading["a" /* default */], {
    level: 5
  }, "Arguments")), args.map(function (arg) {
    return /*#__PURE__*/react_default.a.createElement(Argument["a" /* default */], extends_default()({
      key: arg.name
    }, arg));
  }));
};
ArgumentsRenderer_ArgumentsRenderer.propTypes = {
  classes: prop_types_default.a.objectOf(prop_types_default.a.string.isRequired).isRequired,
  args: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    name: prop_types_default.a.string.isRequired,
    type: prop_types_default.a.object,
    description: prop_types_default.a.string
  }).isRequired).isRequired,
  heading: prop_types_default.a.bool
};
/* harmony default export */ var Arguments_ArgumentsRenderer = (Object(Styled["a" /* default */])(styles)(ArgumentsRenderer_ArgumentsRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Arguments/index.js

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Code/index.js + 1 modules
var Code = __webpack_require__("90f5");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/JsDoc/index.js + 3 modules
var JsDoc = __webpack_require__("6b09");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__("4023");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Name/index.js + 1 modules
var Name = __webpack_require__("1e72");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__("4bac");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__("d4f0");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Table/TableRenderer.js






var TableRenderer_styles = function styles(_ref) {
  var space = _ref.space,
      color = _ref.color,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize;
  return {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: space[6]
    },
    tableHead: {
      borderBottom: [[1, color.border, 'solid']]
    },
    cellHeading: {
      color: color.base,
      paddingRight: space[2],
      paddingBottom: space[1],
      textAlign: 'left',
      fontFamily: fontFamily.base,
      fontWeight: 'bold',
      fontSize: fontSize.small,
      whiteSpace: 'nowrap'
    },
    dataRow: {
      '&:hover': {
        background: '#fbfbfb'
      }
    },
    cell: {
      color: color.base,
      paddingRight: space[2],
      paddingTop: space[1],
      paddingBottom: space[1],
      verticalAlign: 'top',
      fontFamily: fontFamily.base,
      fontSize: fontSize.small,
      borderBottom: [[1, color.border, 'solid']],
      '& div': {
        isolate: false,
        minWidth: 300
      }
    }
  };
};
function TableRenderer(_ref2) {
  var classes = _ref2.classes,
      columns = _ref2.columns,
      rows = _ref2.rows,
      getRowKey = _ref2.getRowKey;
  return /*#__PURE__*/react_default.a.createElement("table", {
    className: classes.table
  }, /*#__PURE__*/react_default.a.createElement("thead", {
    className: classes.tableHead
  }, /*#__PURE__*/react_default.a.createElement("tr", null, columns.map(function (_ref3) {
    var caption = _ref3.caption;
    return /*#__PURE__*/react_default.a.createElement("th", {
      key: caption,
      className: classes.cellHeading
    }, caption);
  }))), /*#__PURE__*/react_default.a.createElement("tbody", null, rows.map(function (row) {
    return /*#__PURE__*/react_default.a.createElement("tr", {
      key: getRowKey(row),
      className: classes.dataRow
    }, columns.map(function (_ref4, index) {
      var render = _ref4.render,
          className = _ref4.className;
      return /*#__PURE__*/react_default.a.createElement("td", {
        key: index,
        className: classnames_default()(classes.cell, className)
      }, render(row));
    }));
  })));
}
TableRenderer.propTypes = {
  classes: prop_types_default.a.object.isRequired,
  columns: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    caption: prop_types_default.a.string.isRequired,
    render: prop_types_default.a.func.isRequired
  })).isRequired,
  rows: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
  getRowKey: prop_types_default.a.func.isRequired
};
/* harmony default export */ var Table_TableRenderer = (Object(Styled["a" /* default */])(TableRenderer_styles)(TableRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Table/index.js

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/OriginColumn/OriginColumn.js




function renderOrigin(prop) {
  var ext = prop["extends"],
      mixin = prop.mixin;
  return ext ? /*#__PURE__*/react_default.a.createElement("span", {
    title: "extends: ".concat(ext.path)
  }, "E: ", ext.name) : mixin && /*#__PURE__*/react_default.a.createElement("span", {
    title: "mixin: ".concat(mixin.path)
  }, "M: ", mixin.name);
}

function getOriginColumn(props) {
  return props && props.some(function (p) {
    return p.mixin || p["extends"];
  }) ? [{
    caption: 'Origin',
    render: renderOrigin
  }] : [];
}
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/OriginColumn/index.js

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/propStyles.js
var methodStyles = function methodStyles(_ref) {
  var space = _ref.space;
  return {
    name: {
      '& code': {
        isolate: false,
        minWidth: 110,
        display: 'block'
      }
    },
    type: {
      isolate: false,
      marginLeft: space[1],
      opacity: 0.5,
      '& pre': {
        margin: 0
      }
    },
    descriptionWrapper: {
      // remove bottom margin from description
      '& p': {
        margin: 0,
        minWidth: 350
      },
      // add space before any next sibling
      '& + *': {
        marginTop: space[1]
      }
    },
    description: {
      isolate: false,
      width: '90%'
    },
    required: {
      isolate: false,
      fontWeight: 'bold'
    },
    values: {
      isolate: false,
      width: 150,
      margin: 0
    },
    "default": {
      isolate: false,
      width: 150,
      margin: 0
    }
  };
};

/* harmony default export */ var propStyles = (methodStyles);
// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("c892");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("caeb");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Text/index.js + 1 modules
var Text = __webpack_require__("be22");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("32cb");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4e81");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("5373");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("861a");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("6866");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Props/util.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












/**
 * Remove quotes around given string.
 *
 * @param {string} string
 * @returns {string}
 */
function unquote(string) {
  return string && string.replace(/^['"]|['"]$/g, '');
}
/**
 * Return prop type object.
 *
 * @param {object} prop
 * @returns {object}
 */

function getType(prop) {
  if (prop.flowType) {
    if (prop.flowType.name === 'union' && prop.flowType.elements.every(function (elem) {
      return elem.name === 'literal';
    })) {
      return _objectSpread(_objectSpread({}, prop.flowType), {}, {
        name: 'enum',
        value: prop.flowType.elements
      });
    }

    return prop.flowType;
  }

  return prop.type;
}
/**
 * Show starting and ending whitespace around given string.
 *
 * @param {string} string
 * @returns {string}
 */

function showSpaces(string) {
  return string && string.replace(/^\s|\s$/g, '␣');
}
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Props/renderDefault.js






 // to keep showing those vluei insead of empty, we treat them separaty

var defaultValueBlacklist = ['null', 'undefined', "''", '""'];
function renderDefaultHoc(classes) {
  return function renderDefault(prop) {
    return /*#__PURE__*/react_default.a.createElement("p", {
      className: classes["default"]
    }, function () {
      // Workaround for issue https://github.com/reactjs/react-docgen/issues/221
      // If prop has defaultValue it can not be required
      if (prop.defaultValue) {
        if (prop.type) {
          var propName = prop.type.name;

          if (defaultValueBlacklist.indexOf(prop.defaultValue.value) > -1) {
            return /*#__PURE__*/react_default.a.createElement(Code["a" /* default */], null, prop.defaultValue.value);
          } else if (propName === 'func' || propName === 'function' || /^\(\s*\)\s*=>\s*\(?\s*\{(?!^(?:\s*\}\s*\)?))/.test(prop.defaultValue.value)) {
            return /*#__PURE__*/react_default.a.createElement(Text["a" /* default */], {
              size: "small",
              color: "light",
              underlined: true,
              title: showSpaces(unquote(prop.defaultValue.value))
            }, "Function");
          }
        }

        return /*#__PURE__*/react_default.a.createElement(Code["a" /* default */], null, showSpaces(unquote(prop.defaultValue.value.replace(/^\(\s*\)\s*=>\s*/, ''))));
      }

      return '-';
    }());
  };
}
// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Type/index.js + 1 modules
var Type = __webpack_require__("4f10");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("40d2");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/renderTypeString.js




function renderTypeString(type) {
  if (!type) {
    return 'unknown';
  }

  var name = type.name,
      elements = type.elements;

  switch (name) {
    case 'Array':
      return elements ? "".concat(renderTypeString(elements[0]), "[]") : name;

    case 'union':
      return (elements || []).map(renderTypeString).join(' | ');

    case 'intersection':
      return (elements || []).map(renderTypeString).join(' & ');

    case 'undefined':
      return '-';

    default:
      return "".concat(name).concat(elements ? "<".concat(elements.map(renderTypeString).join(', '), ">") : '');
  }
}
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Props/renderType.js



function renderTypeBox(prop, classes) {
  return /*#__PURE__*/react_default.a.createElement(Type["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("pre", null, renderTypeString(prop.type), prop.required ? /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.required
  }, " - required") : null));
}
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Props/PropsRenderer.js


























function renderDescription(classes) {
  return function renderDesc(prop) {
    var description = prop.description,
        _prop$tags = prop.tags,
        tags = _prop$tags === void 0 ? {} : _prop$tags;
    var args = [].concat(toConsumableArray_default()(tags.arg || []), toConsumableArray_default()(tags.argument || []), toConsumableArray_default()(tags.param || []));
    var returnDocumentation = tags["return"] && tags["return"][0] || tags.returns && tags.returns[0];
    return /*#__PURE__*/react_default.a.createElement("div", null, description && /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.descriptionWrapper
    }, /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
      text: description
    })), /*#__PURE__*/react_default.a.createElement(JsDoc["a" /* default */], tags), args.length > 0 && /*#__PURE__*/react_default.a.createElement(Arguments_ArgumentsRenderer, {
      args: args,
      heading: true
    }), returnDocumentation && /*#__PURE__*/react_default.a.createElement(Argument["a" /* default */], extends_default()({}, returnDocumentation, {
      returns: true
    })), /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.type
    }, renderTypeBox(prop, classes)));
  };
}

function renderName(prop) {
  var name = prop.name,
      _prop$tags2 = prop.tags,
      tags = _prop$tags2 === void 0 ? {} : _prop$tags2;
  return /*#__PURE__*/react_default.a.createElement(Name["a" /* default */], {
    deprecated: !!tags.deprecated
  }, name);
}

function PropsRenderer_getRowKey(row) {
  return row.name;
}

function renderValuesHoc(classes) {
  return function renderValues(prop) {
    return /*#__PURE__*/react_default.a.createElement("p", {
      className: classes.values
    }, prop.values ? prop.values.map(function (v) {
      return /*#__PURE__*/react_default.a.createElement(Code["a" /* default */], {
        key: v
      }, v);
    }).reduce(function (prev, curr) {
      return [prev, ', ', curr];
    }) : '-');
  };
}

var PropsRenderer_columns = function columns(props, classes) {
  return [{
    caption: 'Prop name',
    render: renderName,
    className: classes.name
  }, {
    caption: 'Description',
    render: renderDescription(classes),
    className: classes.description
  }].concat(toConsumableArray_default()(props.some(function (p) {
    return p.values;
  }) ? [{
    caption: 'Values',
    render: renderValuesHoc(classes)
  }] : []), [{
    caption: 'Default',
    render: renderDefaultHoc(classes)
  }], toConsumableArray_default()(getOriginColumn(props)));
};

function PropsRenderer(_ref) {
  var props = _ref.props,
      classes = _ref.classes;
  return /*#__PURE__*/react_default.a.createElement(Table_TableRenderer, {
    columns: PropsRenderer_columns(props, classes),
    rows: props,
    getRowKey: PropsRenderer_getRowKey
  });
}

PropsRenderer.propTypes = {
  props: prop_types_default.a.array.isRequired,
  classes: prop_types_default.a.object.isRequired
};
/* harmony default export */ var Props_PropsRenderer = (Object(Styled["a" /* default */])(propStyles)(PropsRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Props/index.js

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Methods/MethodsRenderer.js










function MethodsRenderer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MethodsRenderer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MethodsRenderer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MethodsRenderer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



















var MethodsRenderer_getRowKey = function getRowKey(row) {
  return row.name;
};

function renderMethodName(_ref) {
  var name = _ref.name,
      _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? {} : _ref$tags;
  return /*#__PURE__*/react_default.a.createElement(Name["a" /* default */], {
    deprecated: !!tags.deprecated
  }, "".concat(name, "()"));
}

function MethodsRenderer_renderDescription(myClasses) {
  return function renderDesc(_ref2) {
    var description = _ref2.description,
        returns = _ref2.returns,
        _ref2$tags = _ref2.tags,
        tags = _ref2$tags === void 0 ? {} : _ref2$tags;
    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, description && /*#__PURE__*/react_default.a.createElement("div", {
      className: myClasses.descriptionWrapper
    }, /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
      text: description
    })), returns && /*#__PURE__*/react_default.a.createElement("div", null, "Returns:", ' ', /*#__PURE__*/react_default.a.createElement(Argument["a" /* default */], extends_default()({
      name: ""
    }, returns, {
      type: returns.type ? {
        name: renderTypeString(returns.type)
      } : undefined,
      description: returns.description
    }))), /*#__PURE__*/react_default.a.createElement(JsDoc["a" /* default */], tags));
  };
}

function renderParameters(_ref3) {
  var _ref3$params = _ref3.params,
      params = _ref3$params === void 0 ? [] : _ref3$params;
  return /*#__PURE__*/react_default.a.createElement(Arguments_ArgumentsRenderer, {
    args: params.map(function (p) {
      return MethodsRenderer_objectSpread(MethodsRenderer_objectSpread({
        block: true
      }, p), {}, {
        type: p.type ? {
          name: renderTypeString(p.type)
        } : undefined,
        name: p.name || '',
        description: p.description
      });
    })
  });
}

var MethodsRenderer_columns = function columns(methods, classes) {
  return [{
    caption: 'Method name',
    render: renderMethodName,
    className: classes.name
  }, {
    caption: 'Description',
    render: MethodsRenderer_renderDescription(classes),
    className: classes.description
  }, {
    caption: 'Parameters',
    render: renderParameters
  }].concat(toConsumableArray_default()(getOriginColumn(methods)));
};
var MethodsRenderer_MethodsRenderer = function MethodsRenderer(_ref4) {
  var methods = _ref4.methods,
      classes = _ref4.classes;
  return /*#__PURE__*/react_default.a.createElement(Table_TableRenderer, {
    columns: MethodsRenderer_columns(methods, classes),
    rows: methods,
    getRowKey: MethodsRenderer_getRowKey
  });
};
MethodsRenderer_MethodsRenderer.propTypes = {
  classes: prop_types_default.a.objectOf(prop_types_default.a.string.isRequired).isRequired,
  methods: prop_types_default.a.array.isRequired
};
/* harmony default export */ var Methods_MethodsRenderer = (Object(Styled["a" /* default */])(propStyles)(MethodsRenderer_MethodsRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Methods/index.js

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js
var map = __webpack_require__("c67d");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Events/EventsRenderer.js








function EventsRenderer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EventsRenderer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EventsRenderer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EventsRenderer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















function EventsRenderer_renderDescription(myClasses) {
  return function renderDesc(prop) {
    var description = prop.description,
        _prop$tags = prop.tags,
        tags = _prop$tags === void 0 ? {} : _prop$tags;
    return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
      className: myClasses.descriptionWrapper
    }, description && /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
      text: description
    })), /*#__PURE__*/react_default.a.createElement(JsDoc["a" /* default */], tags));
  };
}

function renderProperties(prop) {
  var properties = prop.properties;

  if (Array.isArray(properties)) {
    properties = properties.reduce(function (total, current) {
      total.push({
        name: current.name,
        type: {
          name: total.length || current.type.names[0] !== 'undefined' ? current.type.names.join(' | ') : prop.type.names.join(' | ')
        },
        description: current.description,
        // make each arguments display on its own line
        block: true
      });
      return total;
    }, []);
  } else if (prop.type) {
    properties = [{
      name: '<anonymous>',
      type: {
        name: prop.type.names.join(' | ')
      }
    }];
  }

  return properties && properties.length > 0 ? /*#__PURE__*/react_default.a.createElement(Arguments_ArgumentsRenderer, {
    args: properties
  }) : null;
}

function EventsRenderer_renderName(prop) {
  var name = prop.name,
      _prop$tags2 = prop.tags,
      tags = _prop$tags2 === void 0 ? {} : _prop$tags2;
  return /*#__PURE__*/react_default.a.createElement(Name["a" /* default */], {
    deprecated: !!tags.deprecated
  }, name);
}

function EventsRenderer_getRowKey(row) {
  return row.name;
}
function propsToArray(props) {
  return map_default()(props, function (prop, name) {
    return EventsRenderer_objectSpread(EventsRenderer_objectSpread({}, prop), {}, {
      name: name
    });
  });
}
var EventsRenderer_columns = function columns(events, classes) {
  return [{
    caption: 'Event name',
    render: EventsRenderer_renderName,
    className: classes.name
  }, {
    caption: 'Description',
    render: EventsRenderer_renderDescription(classes),
    className: classes.description
  }].concat(toConsumableArray_default()(events.some(function (p) {
    return p.properties || p.type;
  }) ? [{
    caption: 'Properties',
    render: renderProperties
  }] : []), toConsumableArray_default()(getOriginColumn(events)));
};

function EventsRenderer(_ref) {
  var props = _ref.props,
      classes = _ref.classes;
  var evts = propsToArray(props);
  return /*#__PURE__*/react_default.a.createElement(Table_TableRenderer, {
    columns: EventsRenderer_columns(evts, classes),
    rows: evts,
    getRowKey: EventsRenderer_getRowKey
  });
}

EventsRenderer.propTypes = {
  props: prop_types_default.a.object.isRequired,
  classes: prop_types_default.a.object.isRequired
};
/* harmony default export */ var Events_EventsRenderer = (Object(Styled["a" /* default */])(propStyles)(EventsRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Events/index.js

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/SlotsTable/SlotsTableRenderer.js








function SlotsTableRenderer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SlotsTableRenderer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SlotsTableRenderer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SlotsTableRenderer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








/* eslint-disable react/prop-types */











function SlotsTableRenderer_renderDescription(myClasses) {
  return function renderDesc(prop) {
    var description = prop.description;
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: myClasses.descriptionWrapper
    }, description ? /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
      text: description
    }) : '-');
  };
}

function SlotsTableRenderer_renderName(prop) {
  var name = prop.name,
      _prop$tags = prop.tags,
      tags = _prop$tags === void 0 ? {} : _prop$tags;
  return /*#__PURE__*/react_default.a.createElement(Name["a" /* default */], {
    deprecated: !!tags.deprecated
  }, name);
}

function SlotsTableRenderer_getRowKey(row) {
  return row.name;
}
function SlotsTableRenderer_propsToArray(props) {
  return map_default()(props, function (prop, name) {
    return SlotsTableRenderer_objectSpread(SlotsTableRenderer_objectSpread({}, prop), {}, {
      name: name
    });
  });
}
function renderBindings(_ref) {
  var bindings = _ref.bindings;
  return bindings && bindings.length ? /*#__PURE__*/react_default.a.createElement(Arguments_ArgumentsRenderer, {
    args: bindings.map(function (b) {
      return SlotsTableRenderer_objectSpread({
        block: true
      }, b);
    })
  }) : '-';
}
var SlotsTableRenderer_columns = function columns(slots, classes) {
  return [{
    caption: 'Slot',
    render: SlotsTableRenderer_renderName,
    className: classes.name
  }, {
    caption: 'Description',
    render: SlotsTableRenderer_renderDescription(classes),
    className: classes.description
  }].concat(toConsumableArray_default()(slots.some(function (s) {
    return s.bindings;
  }) ? [{
    caption: 'Bindings',
    render: renderBindings
  }] : []), toConsumableArray_default()(getOriginColumn(slots)));
};

function SlotsTableRenderer(_ref2) {
  var slots = _ref2.props,
      classes = _ref2.classes;
  var slotsArray = SlotsTableRenderer_propsToArray(slots);
  return /*#__PURE__*/react_default.a.createElement(Table_TableRenderer, {
    columns: SlotsTableRenderer_columns(slotsArray, classes),
    rows: slotsArray,
    getRowKey: SlotsTableRenderer_getRowKey
  });
}

SlotsTableRenderer.propTypes = {
  props: prop_types_default.a.object.isRequired,
  classes: prop_types_default.a.object.isRequired
};
/* harmony default export */ var SlotsTable_SlotsTableRenderer = (Object(Styled["a" /* default */])(propStyles)(SlotsTableRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/SlotsTable/index.js

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Usage/Usage.js







function Usage(_ref) {
  var _ref$props = _ref.props,
      props = _ref$props.props,
      methods = _ref$props.methods,
      events = _ref$props.events,
      slots = _ref$props.slots;
  var slotsNode;

  if (slots && Object.keys(slots).length > 0) {
    slotsNode = slots && /*#__PURE__*/react_default.a.createElement(SlotsTable_SlotsTableRenderer, {
      props: slots
    });
  }

  var propsNode = props && /*#__PURE__*/react_default.a.createElement(Props_PropsRenderer, {
    props: props
  });
  var eventsNode;

  if (events && Object.keys(events).length > 0) {
    eventsNode = events && /*#__PURE__*/react_default.a.createElement(Events_EventsRenderer, {
      props: events
    });
  }

  var methodsNode = methods && methods.length > 0 && /*#__PURE__*/react_default.a.createElement(Methods_MethodsRenderer, {
    methods: methods
  });

  if (!propsNode && !methodsNode && !slotsNode && !eventsNode) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("div", null, propsNode, methodsNode, eventsNode, slotsNode);
}
Usage.propTypes = {
  props: prop_types_default.a.shape({
    props: prop_types_default.a.array,
    methods: prop_types_default.a.array,
    events: prop_types_default.a.object,
    slots: prop_types_default.a.object
  }).isRequired
};
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Usage/index.js


/***/ }),

/***/ "8ab4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ EditorPrecompiled; });

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("27b0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("f39e");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6c4");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4e81");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("0ea6");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("5373");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("861a");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("6866");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("4f46");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("be8f");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("f2a4");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("39ec");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("2683");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("876b");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("0d9f");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("32cb");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("a34e");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__("4bac");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9b30");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("f736");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__("d4f0");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js + 1 modules
var vue_inbrowser_compiler_utils_esm = __webpack_require__("a459");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("c3ee");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-simple-code-editor@0.11.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-simple-code-editor/lib/index.js
var lib = __webpack_require__("bc7e");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/prism.js
var prism = __webpack_require__("6aa6");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-clike.js
var prism_clike = __webpack_require__("c18d");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-markup.js
var prism_markup = __webpack_require__("d7c1");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-javascript.js
var prism_javascript = __webpack_require__("288c");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-jsx.js
var prism_jsx = __webpack_require__("0ce8");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/styles/theme.js
var theme = __webpack_require__("855e");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/styles/prismTheme.js
var prismTheme = __webpack_require__("0d15");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__("54e8");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Context/index.js + 1 modules
var Context = __webpack_require__("f22a");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/loaders/utils/getScript.js
var getScript = __webpack_require__("1c23");
var getScript_default = /*#__PURE__*/__webpack_require__.n(getScript);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/VsgEditor/EditorPrism.js

















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






















var EditorPrism_highlight = function highlight(lang, jsxInExamples) {
  if (lang === 'vsg') {
    return function (code) {
      if (!code) {
        return '';
      }

      var scriptCode = getScript_default()(code, jsxInExamples);
      var scriptCodeHighlighted = Object(prism["highlight"])(scriptCode, prism["languages"][jsxInExamples ? 'jsx' : 'js'], lang);

      if (code.length === scriptCode.length) {
        return scriptCodeHighlighted;
      }

      var templateCode = code.slice(scriptCode.length);
      return scriptCodeHighlighted + Object(prism["highlight"])(templateCode, prism["languages"].html, lang);
    };
  } else {
    var langScheme = prism["languages"][lang];
    return function (code) {
      return Object(prism["highlight"])(code, langScheme, lang);
    };
  }
};

var EditorPrism_styles = function styles(_ref) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      color = _ref.color,
      borderRadius = _ref.borderRadius;
  return {
    root: {
      fontFamily: fontFamily.monospace,
      fontSize: fontSize.small,
      borderRadius: borderRadius,
      '& textarea': {
        isolate: false,
        transition: 'all ease-in-out .1s',
        // important to override inline styles in react-simple-code-editor
        border: "1px ".concat(color.border, " solid !important"),
        borderRadius: borderRadius
      },
      '& textarea:focus': {
        isolate: false,
        outline: 0,
        borderColor: "".concat(color.link, " !important"),
        boxShadow: [[0, 0, 0, 2, color.focus]]
      }
    },
    jssEditor: _objectSpread({
      background: color.codeBackground
    }, Object(prismTheme["a" /* default */])({
      color: color
    }))
  };
};

var EditorPrism_UnconfiguredEditor = /*#__PURE__*/function (_Component) {
  inherits_default()(UnconfiguredEditor, _Component);

  var _super = _createSuper(UnconfiguredEditor);

  function UnconfiguredEditor() {
    var _this;

    classCallCheck_default()(this, UnconfiguredEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      code: _this.props.code,
      prevCode: _this.props.code
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChange", function (code) {
      _this.setState({
        code: code
      });

      _this.props.onChange(code);
    });

    return _this;
  }

  createClass_default()(UnconfiguredEditor, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.code !== this.state.code;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$classes = this.props.classes,
          root = _this$props$classes.root,
          jssEditor = _this$props$classes.jssEditor;
      var isVueSFC = Object(vue_inbrowser_compiler_utils_esm["isCodeVueSfc"])(this.state.code);
      var _this$props = this.props,
          jssThemedEditor = _this$props.jssThemedEditor,
          jsxInExamples = _this$props.jsxInExamples,
          editorPadding = _this$props.editorPadding;
      var langClass = isVueSFC ? 'language-html' : 'language-jsx';
      return /*#__PURE__*/react_default.a.createElement(lib_default.a, {
        className: classnames_default()(root, jssThemedEditor ? jssEditor : langClass, 'prism-editor'),
        value: this.state.code,
        onValueChange: this.handleChange,
        highlight: EditorPrism_highlight(isVueSFC ? 'html' : 'vsg', jsxInExamples) // Padding should be passed via a prop (not CSS) for a proper
        // cursor position calculation
        ,
        padding: editorPadding || theme["space"][2] // to make sure the css styles for prism are taken into account
        ,
        preClassName: classnames_default()(!jssThemedEditor && langClass)
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var code = nextProps.code;

      if (prevState.prevCode !== code) {
        return {
          prevCode: code,
          code: code
        };
      }

      return null;
    }
  }]);

  return UnconfiguredEditor;
}(react["Component"]);

defineProperty_default()(EditorPrism_UnconfiguredEditor, "propTypes", {
  classes: prop_types_default.a.objectOf(prop_types_default.a.string.isRequired).isRequired,
  code: prop_types_default.a.string.isRequired,
  jssThemedEditor: prop_types_default.a.bool.isRequired,
  jsxInExamples: prop_types_default.a.bool.isRequired,
  onChange: prop_types_default.a.func.isRequired,
  editorPadding: prop_types_default.a.number
});

var PEditor = Object(react_lifecycles_compat_es["a" /* polyfill */])(EditorPrism_UnconfiguredEditor);

function Editor(props) {
  var _ref2 = Object(Context["b" /* useStyleGuideContext */])(),
      _ref2$config = _ref2.config,
      jssThemedEditor = _ref2$config.jssThemedEditor,
      jsxInExamples = _ref2$config.jsxInExamples;

  return /*#__PURE__*/react_default.a.createElement(PEditor, extends_default()({}, props, {
    jssThemedEditor: jssThemedEditor,
    jsxInExamples: jsxInExamples
  }));
}

/* harmony default export */ var EditorPrism = (Object(Styled["a" /* default */])(EditorPrism_styles)(Editor));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/EditorPrecompiled/EditorPrecompiled.js


/* eslint-disable react/prop-types */
 // eslint-disable-next-line import/no-unresolved,import/extensions


function EditorPrecompiled(props) {
  return /*#__PURE__*/react_default.a.createElement(EditorPrism, extends_default()({}, props, {
    code: props.code.raw,
    onChange: function onChange(code) {
      return props.onChange({
        raw: code
      });
    }
  }));
}
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/EditorPrecompiled/index.js


/***/ }),

/***/ "93ba":
/***/ (function(module, exports, __webpack_require__) {


		if (false) {}

		module.exports = {
    'exportName': 'default',
    'displayName': 'app-button',
    'docsBlocks': ['This button is amazing, use it responsibly.\n\n## Examples\n\nOrange button:\n\n```jsx\n<app-button color="orange">Push Me</app-button>\n```\n\nUgly button with pink font and blue background:\n\n```jsx\n<app-button color="pink" background="blue">\n\tUgly button\n</app-button>\n```\n\nwith extra styling\n\n```vue\n<template>\n\t<div class="LoadingPickle-wrap">\n\t\t<app-button>Loading...</app-button>\n\t</div>\n</template>\n\n<script>\nexport default {}\n</script>\n\n<style scoped>\n.LoadingPickle-wrap {\n\tpadding: 20px;\n\tbackground-color: red;\n}\n</style>\n```\n\nButton containing custom tags:\n\n```jsx\n<app-button>\n\tText with <b>bold</b>\n</app-button>\n```'],
    'description': '',
    'tags': {},
    'props': [
        {
            'name': 'background',
            'description': 'Sets background color of the button',
            'tags': {
                'since': [{
                        'description': '1.2.0',
                        'title': 'since'
                    }]
            },
            'type': { 'name': 'string' },
            'defaultValue': {
                'func': false,
                'value': '\'white\''
            }
        },
        {
            'name': 'color',
            'description': 'Sets the button font color',
            'type': { 'name': 'string' },
            'defaultValue': {
                'func': false,
                'value': '\'black\''
            }
        },
        {
            'name': 'oldColor',
            'tags': {
                'deprecated': [{
                        'description': 'Use color instead',
                        'title': 'deprecated'
                    }]
            },
            'type': { 'name': 'string' }
        },
        {
            'name': 'size',
            'description': 'Set size of the element',
            'type': { 'name': 'string' },
            'defaultValue': {
                'func': false,
                'value': '\'14px\''
            }
        }
    ],
    'events': {
        'click': {
            'name': 'click',
            'description': 'Triggered when button is clicked',
            'type': { 'names': ['Event'] }
        },
        'gator': {
            'name': 'gator',
            'description': 'Event for Alligator\'s example',
            'type': { 'names': ['Event'] }
        }
    },
    'methods': void 0,
    'slots': {
        'default': {
            'name': 'default',
            'description': 'Use this slot to place the button content'
        }
    },
    'example': __webpack_require__("4dd7"),
    'examples': null
}
	

/***/ }),

/***/ "9758":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ RenderJsxContext; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ renderStyleguide; });

// UNUSED EXPORTS: VueComponentMapContext

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("0ea6");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("861a");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("c892");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("8ac2");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/EditorPrecompiled/index.js + 2 modules
var EditorPrecompiled = __webpack_require__("8ab4");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Usage/index.js + 20 modules
var Usage = __webpack_require__("8047");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/slots/IsolateButton.js
var IsolateButton = __webpack_require__("c0e8");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/slots/CodeTabButton.js
var CodeTabButton = __webpack_require__("53c5");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/slots/UsageTabButton.js
var UsageTabButton = __webpack_require__("4705");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/slots/index.js





var EXAMPLE_TAB_CODE_EDITOR = 'rsg-code-editor';
var DOCS_TAB_USAGE = 'rsg-usage';
var toolbar = [IsolateButton["a" /* default */]]; // eslint-disable-next-line @typescript-eslint/no-unused-vars

/* harmony default export */ var slots = (function (config) {
  return {
    sectionToolbar: toolbar,
    componentToolbar: toolbar,
    exampleToolbar: toolbar,
    exampleTabButtons: [{
      id: EXAMPLE_TAB_CODE_EDITOR,
      render: CodeTabButton["a" /* default */]
    }],
    exampleTabs: [{
      id: EXAMPLE_TAB_CODE_EDITOR,
      render: EditorPrecompiled["a" /* default */]
    }],
    docsTabButtons: [{
      id: DOCS_TAB_USAGE,
      render: UsageTabButton["a" /* default */]
    }],
    docsTabs: [{
      id: DOCS_TAB_USAGE,
      render: Usage["a" /* default */]
    }]
  };
});
// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/StyleGuide/index.js + 24 modules
var StyleGuide = __webpack_require__("dd76");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/hash-sum@1.0.2/node_modules/hash-sum/hash-sum.js
var hash_sum = __webpack_require__("7174");
var hash_sum_default = /*#__PURE__*/__webpack_require__.n(hash_sum);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/utils/getRouteData.js + 6 modules
var getRouteData = __webpack_require__("d928");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/utils/getPageTitle.js
var getPageTitle = __webpack_require__("7152");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("9a95");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("5d4c");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("f736");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/getComponentsFromSections.js





/**
 * Get all components in all sections
 *
 * @param {array} sections
 */
function getComponentsFromSections(sections) {
  return sections.reduce(function (allComponent, section) {
    var sectionComponents = [];
    var subSectionComponents = [];

    if (section.components) {
      sectionComponents = section.components;
    }

    if (section.sections) {
      subSectionComponents = getComponentsFromSections(section.sections);
    }

    return [].concat(toConsumableArray_default()(allComponent), toConsumableArray_default()(sectionComponents), toConsumableArray_default()(subSectionComponents));
  }, []);
}
// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("cfee");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js + 1 modules
var vue_inbrowser_compiler_utils_esm = __webpack_require__("a459");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/globalComponents.js
var globalComponents = __webpack_require__("effc");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/globalizeComponent.js






var isEs6Export = function isEs6Export(module) {
  return !!module["default"];
};
/**
 * Expose component as global variables.
 *
 * @param {Object} component
 */


function globalizeComponent(component) {
  var displayName = component.props.displayName || '';

  if (!component.name) {
    return;
  }

  var configComponent = isEs6Export(component.module) ? component.module["default"] : component.module;

  if (configComponent) {
    if (vue_inbrowser_compiler_utils_esm["isVue3"]) {
      Object(globalComponents["a" /* addGlobalComponentToRegistration */])(Object(vue_inbrowser_compiler_utils_esm["cleanName"])(displayName), configComponent);
    } else {
      // @ts-ignore this is to keep vue 2 compatibility
      vue_inbrowser_compiler_utils_esm["Vue2"].component(Object(vue_inbrowser_compiler_utils_esm["cleanName"])(displayName), configComponent);
    }
  }

  if (component.subComponents) {
    component.subComponents.forEach(function (c) {
      return globalizeComponent(c);
    });
  }
}
// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("32cb");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("ca86");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("f39e");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6c4");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4e81");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("5373");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("6866");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/utils/getUrl.js
var getUrl = __webpack_require__("0f75");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatten.js
var flatten = __webpack_require__("d088");
var flatten_default = /*#__PURE__*/__webpack_require__.n(flatten);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/compileExamples.js


/* harmony default export */ var compileExamples = (function (examples) {
  examples.forEach(function (ex) {
    if (ex.type === 'code') {
      if (ex.compiled !== undefined && typeof ex.content === 'string') {
        var content = {
          raw: ex.content,
          compiled: ex.compiled
        };
        ex.content = content;
      }
    }
  });
});
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/processComponents.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










/**
 * Do things that are hard or impossible to do in a loader: we don’t have access to component name
 * and props in the styleguide-loader because we’re using `require` to load the component module.
 *
 * @param {Array} components
 * @return {Array}
 */
function processComponents(_ref, _ref2) {
  var exampleFileNames = _ref.exampleFileNames,
      components = _ref.components;
  var useRouterLinks = _ref2.useRouterLinks,
      useHashId = _ref2.useHashId,
      hashPath = _ref2.hashPath;
  return components.map(function (component) {
    var props = component.props;

    var newComponent = _objectSpread(_objectSpread({}, component), {}, {
      // Add .name shortcuts for names instead of .props.displayName.
      name: component.props.displayName,
      visibleName: component.props.visibleName || component.props.displayName,
      href: component.href || Object(getUrl["a" /* default */])({
        name: component.props.displayName,
        slug: component.slug,
        anchor: !useRouterLinks,
        hashPath: useRouterLinks ? hashPath : false,
        useSlugAsIdParam: useRouterLinks ? useHashId : false
      }),
      props: _objectSpread(_objectSpread({}, props), {}, {
        // Append @example doclet to all examples
        examples: [].concat(toConsumableArray_default()(props.examples || []), toConsumableArray_default()(flatten_default()(props.example)))
      })
    });

    if (component.subComponents) {
      component.subComponents.forEach(function (c) {
        // Add .name shortcuts for names instead of .props.displayName.
        c.name = c.props.displayName;
        c.visibleName = c.props.visibleName || c.props.displayName;
      });
    }

    newComponent.props && compileExamples(newComponent.props.examples || []);

    if (component.props && component.props.examplesFile) {
      var examplesFile = component.props.examplesFile;
      exampleFileNames.push(examplesFile);
    }

    return newComponent;
  });
}
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/processSections.js



function processSections_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function processSections_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? processSections_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : processSections_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















/**
 * Recursively process each component in all sections.
 *
 * @param {Array} sections
 * @return {Array}
 */
function processSections(_ref, _ref2) {
  var sections = _ref.sections,
      exampleFileNames = _ref.exampleFileNames;
  var useRouterLinks = _ref2.useRouterLinks,
      _ref2$useHashId = _ref2.useHashId,
      useHashId = _ref2$useHashId === void 0 ? false : _ref2$useHashId,
      _ref2$hashPath = _ref2.hashPath,
      hashPath = _ref2$hashPath === void 0 ? [] : _ref2$hashPath;
  return sections.map(function (section) {
    var options = {
      useRouterLinks: Boolean(useRouterLinks && section.name),
      useHashId: section.sectionDepth === 0,
      hashPath: [].concat(toConsumableArray_default()(hashPath), [section.name ? section.name : '-'])
    };
    compileExamples(section.content || []);
    var _section$components = section.components,
        components = _section$components === void 0 ? [] : _section$components,
        sectionsInside = section.sections;
    var href = section.href || Object(getUrl["a" /* default */])({
      name: section.name,
      slug: section.slug,
      anchor: !useRouterLinks,
      hashPath: useRouterLinks ? hashPath : false,
      useSlugAsIdParam: useRouterLinks ? useHashId : false
    });
    return processSections_objectSpread(processSections_objectSpread({}, section), {}, {
      visibleName: section.name,
      href: href,
      components: processComponents({
        components: components,
        exampleFileNames: exampleFileNames
      }, options),
      sections: processSections({
        sections: sectionsInside,
        exampleFileNames: exampleFileNames
      }, options)
    });
  });
}
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/renderStyleguide.js













var RenderJsxContext = /*#__PURE__*/react["createContext"]( /*#__PURE__*/react["createElement"]("div", null));
var VueComponentMapContext = /*#__PURE__*/react["createContext"]({});
/**
 * @param {object} styleguide An object returned by styleguide-loader
 * @param {number} codeRevision
 * @param {Location} [loc]
 * @param {Document} [doc]
 * @param {History} [hist]
 * @return {React.ReactElement}
 */

function renderStyleguide(styleguide, codeRevision) {
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location;
  var doc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;
  var hist = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : window.history;
  var exampleFileNames = [];
  var allSections = processSections({
    sections: styleguide.sections,
    exampleFileNames: exampleFileNames
  }, {
    useRouterLinks: !!styleguide.config.pagePerSection
  });

  if (!styleguide.config.locallyRegisterComponents) {
    // Globalize all components, not just ones we see on the screen, to make
    // all components accessible to all examples
    var components = getComponentsFromSections(allSections);
    components.forEach(function (component) {
      return globalizeComponent(component);
    });
  }

  var _styleguide$config = styleguide.config,
      title = _styleguide$config.title,
      pagePerSection = _styleguide$config.pagePerSection,
      theme = _styleguide$config.theme,
      styles = _styleguide$config.styles;

  var _getRouteData = Object(getRouteData["a" /* default */])(allSections, loc.hash, pagePerSection),
      sections = _getRouteData.sections,
      displayMode = _getRouteData.displayMode; // Update page title


  doc.title = Object(getPageTitle["a" /* default */])(sections, title || '', displayMode); // If the current hash location was set to just `/` (e.g. when navigating back from isolated view to overview)
  // replace the URL with one without hash, to present the user with a single address of the overview screen

  if (loc.hash === '#/') {
    var url = loc.pathname + loc.search;
    hist.replaceState('', doc.title, url);
  }

  return /*#__PURE__*/react["createElement"](RenderJsxContext.Provider, {
    value: styleguide.renderRootJsx
  }, /*#__PURE__*/react["createElement"](StyleGuide["a" /* default */], {
    codeRevision: codeRevision // only caclulate css revisions in dev when hot is on to avoid
    // stringifying the styles in production
    ,
    cssRevision: hash_sum_default()({
      theme: theme,
      styles: styles
    }),
    config: styleguide.config,
    slots: slots(styleguide.config),
    welcomeScreen: styleguide.welcomeScreen,
    patterns: styleguide.patterns,
    sections: sections,
    allSections: allSections,
    displayMode: displayMode,
    pagePerSection: pagePerSection
  }));
}

/***/ }),

/***/ "9f03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PreviewWithComponent; });

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("4f46");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("f39e");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6c4");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4e81");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("5373");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("6866");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("27b0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("be8f");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("f2a4");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("39ec");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("2683");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("876b");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("0d9f");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("32cb");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("f736");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("0ea6");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("b740");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("5cce");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("cfee");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("861a");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js + 1 modules
var vue_inbrowser_compiler_utils_esm = __webpack_require__("a459");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/PlaygroundError/index.js + 1 modules
var PlaygroundError = __webpack_require__("785b");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Context/index.js + 1 modules
var Context = __webpack_require__("f22a");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/VsgReactComponent/ReactComponent.js
var ReactComponent = __webpack_require__("535b");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/renderStyleguide.js + 6 modules
var renderStyleguide = __webpack_require__("9758");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/utils/globalComponents.js
var globalComponents = __webpack_require__("effc");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Preview/getVueApp.js


function getVueApp(component, el) {
  return vue_inbrowser_compiler_utils_esm["isVue3"] ? function () {
    var app = Object(vue_inbrowser_compiler_utils_esm["createApp"])(component);
    Object(globalComponents["b" /* registerGlobalComponents */])(app);
    app.mount(el);
    return app;
  }() : new vue_inbrowser_compiler_utils_esm["Vue2"](component).$mount(el);
}
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/Preview/PreviewAsync.js















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var PreviewAsync_PreviewAsync = /*#__PURE__*/function (_Component) {
  inherits_default()(PreviewAsync, _Component);

  var _super = _createSuper(PreviewAsync);

  function PreviewAsync() {
    var _this;

    classCallCheck_default()(this, PreviewAsync);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      error: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleError", function (err) {
      _this.unmountPreview();

      _this.setState({
        error: err.toString()
      });

      console.error(err); // eslint-disable-line no-console
    });

    return _this;
  }

  createClass_default()(PreviewAsync, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Clear console after hot reload, do not clear on the first load
      // to keep any warnings
      if (this.context.codeRevision > 0) {
        // eslint-disable-next-line no-console
        console.clear();
      }

      if (this.props.code.compiled) {
        this.setCompiledPreview(this.props.code.compiled);
      } else {
        this.executeCode(this.props.code.raw);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.error !== nextState.error || this.props.code !== nextProps.code;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.code.raw !== prevProps.code.raw) {
        this.executeCode(this.props.code.raw);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmountPreview();
    }
  }, {
    key: "unmountPreview",
    value: function unmountPreview() {
      this.destroyVueInstance();

      if (this.mountNode) {
        var _this$vueInstance, _this$vueInstance$unm;

        var el = this.mountNode.children[0];

        if (!el) {
          this.mountNode.innerHTML = ' ';
          this.mountNode.appendChild(document.createElement('div'));
          el = this.mountNode.children[0];
        }

        (_this$vueInstance = this.vueInstance) === null || _this$vueInstance === void 0 ? void 0 : (_this$vueInstance$unm = _this$vueInstance.unmount) === null || _this$vueInstance$unm === void 0 ? void 0 : _this$vueInstance$unm.call(_this$vueInstance);
        el = getVueApp({
          data: function data() {
            return {};
          },
          template: '<div></div>'
        }, el);
      }
    }
  }, {
    key: "destroyVueInstance",
    value: function destroyVueInstance() {
      if (this.vueInstance) {
        try {
          var _this$vueInstance$unm2, _this$vueInstance2, _this$vueInstance$$de, _this$vueInstance3;

          (_this$vueInstance$unm2 = (_this$vueInstance2 = this.vueInstance).unmount) === null || _this$vueInstance$unm2 === void 0 ? void 0 : _this$vueInstance$unm2.call(_this$vueInstance2);
          (_this$vueInstance$$de = (_this$vueInstance3 = this.vueInstance).$destroy) === null || _this$vueInstance$$de === void 0 ? void 0 : _this$vueInstance$$de.call(_this$vueInstance3);
        } catch (err) {// eat the error
        }

        this.vueInstance = null;
      }
    }
  }, {
    key: "executeCode",
    value: function executeCode(newCode) {
      var _this2 = this;

      this.setState({
        error: null
      });
      __webpack_require__.e(/* import() | compiler */ "compiler").then(__webpack_require__.bind(null, "b25d")).then(function (_ref) {
        var compile = _ref.compile;

        try {
          var example = compile(newCode, _objectSpread(_objectSpread({}, _this2.context.config.compilerConfig), _this2.context.config.jsxInExamples ? {
            jsx: '__pragma__(h)',
            objectAssign: 'concatenate'
          } : {}));

          _this2.setCompiledPreview(example);
        } catch (err) {
          _this2.handleError(err);
        }
      });
    }
  }, {
    key: "setCompiledPreview",
    value: function setCompiledPreview(example) {
      var _this$props = this.props,
          vuex = _this$props.vuex,
          component = _this$props.component,
          renderRootJsx = _this$props.renderRootJsx;
      var style;
      var previewComponent = {};

      try {
        style = example.style;

        if (example.script) {
          // compile and execute the script
          // it can be:
          // - a script setting up variables => we set up the data function of previewComponent
          // - a `new Vue()` script that will return a full config object
          previewComponent = this.props.evalInContext(example.script)() || {};
        }

        if (example.template) {
          // if this is a pure template or if we are in hybrid vsg mode,
          // we need to set the template up.
          previewComponent.template = "<div>".concat(example.template, "</div>");
        }
      } catch (err) {
        this.handleError(err);
        previewComponent.template = '<div/>';
      }

      var el = this.mountNode.children[0];

      if (!el) {
        this.mountNode.innerHTML = ' ';
        this.mountNode.appendChild(document.createElement('div'));
        el = this.mountNode.children[0];
      }

      var extendsComponent = {};

      if (vuex) {
        extendsComponent = {
          store: vuex["default"]
        };
      }

      var moduleId = 'v-' + Math.floor(Math.random() * 1000) + 1;
      previewComponent._scopeId = 'data-' + moduleId; // if we are in local component registration, register current component
      // NOTA: on independent md files, component.module is undefined

      if (component.module && this.context.config.locallyRegisterComponents && // NOTA: if the components member of the vue config object is
      // already set it should not be changed
      !previewComponent.components) {
        component.displayName = Object(vue_inbrowser_compiler_utils_esm["cleanName"])(component.name); // register component locally

        previewComponent.components = defineProperty_default()({}, component.displayName, component.module["default"] || component.module);

        if (component.props.subComponents) {
          component.props.subComponents.forEach(function (c) {
            c.displayName = Object(vue_inbrowser_compiler_utils_esm["cleanName"])(c.name);
            previewComponent.components[c.displayName] = c.module["default"] || c.module;
          });
        }
      } // then we just have to render the setup previewComponent in the prepared slot


      var rootComponent = renderRootJsx ? renderRootJsx["default"](previewComponent) : {
        render: function render(createElement) {
          return (vue_inbrowser_compiler_utils_esm["isVue3"] ? vue_inbrowser_compiler_utils_esm["h"] : createElement)(previewComponent);
        }
      };

      try {
        this.destroyVueInstance();
        this.vueInstance = getVueApp(_objectSpread(_objectSpread({}, extendsComponent), rootComponent), el);
      } catch (err) {
        this.handleError(err);
      } // Add the scoped style if there is any


      if (style) {
        Object(vue_inbrowser_compiler_utils_esm["addScopedStyle"])(style, moduleId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var error = this.state.error;
      return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
        ref: function ref(_ref2) {
          return _this3.mountNode = _ref2;
        }
      }, /*#__PURE__*/react_default.a.createElement("div", null)), error && /*#__PURE__*/react_default.a.createElement(PlaygroundError["a" /* default */], {
        message: error
      }));
    }
  }]);

  return PreviewAsync;
}(react["Component"]);

defineProperty_default()(PreviewAsync_PreviewAsync, "propTypes", {
  code: prop_types_default.a.shape({
    raw: prop_types_default.a.string.isRequired,
    compiled: prop_types_default.a.oneOfType([prop_types_default.a.shape({
      script: prop_types_default.a.string,
      template: prop_types_default.a.string,
      style: prop_types_default.a.string
    }), prop_types_default.a.bool])
  }).isRequired,
  evalInContext: prop_types_default.a.func.isRequired,
  vuex: prop_types_default.a.object,
  component: prop_types_default.a.object,
  renderRootJsx: prop_types_default.a.object
});

defineProperty_default()(PreviewAsync_PreviewAsync, "contextType", Context["a" /* default */]);

function PreviewWithComponent(props) {
  return /*#__PURE__*/react_default.a.createElement(renderStyleguide["a" /* RenderJsxContext */].Consumer, null, function (renderRootJsx) {
    return /*#__PURE__*/react_default.a.createElement(ReactComponent["a" /* DocumentedComponentContext */].Consumer, null, function (component) {
      return /*#__PURE__*/react_default.a.createElement(PreviewAsync_PreviewAsync, extends_default()({}, props, {
        component: component,
        renderRootJsx: renderRootJsx
      }));
    });
  });
}

/***/ }),

/***/ "a459":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Vue2", function() { return /* reexport */ vue_esm["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "createApp", function() { return /* reexport */ createApp; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ index_esm_h; });
__webpack_require__.d(__webpack_exports__, "isVue3", function() { return /* reexport */ isVue3; });
__webpack_require__.d(__webpack_exports__, "resolveComponent", function() { return /* reexport */ resolveComponent; });
__webpack_require__.d(__webpack_exports__, "adaptCreateElement", function() { return /* binding */ adaptCreateElement; });
__webpack_require__.d(__webpack_exports__, "addScopedStyle", function() { return /* binding */ addScopedStyle; });
__webpack_require__.d(__webpack_exports__, "cleanName", function() { return /* binding */ cleanName; });
__webpack_require__.d(__webpack_exports__, "concatenate", function() { return /* binding */ concatenate; });
__webpack_require__.d(__webpack_exports__, "getDefaultExample", function() { return /* binding */ getDefaultExample; });
__webpack_require__.d(__webpack_exports__, "isCodeVueSfc", function() { return /* binding */ isCodeVueSfc; });
__webpack_require__.d(__webpack_exports__, "parseComponent", function() { return /* binding */ parseComponent; });

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/vue@2.6.14/node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("6a20");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-inbrowser-compiler-demi/index.esm.js


const index_esm_h = () => {}
const createApp = () => {}
const resolveComponent = name => name
const isVue3 = false


// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/camelcase@5.3.1/node_modules/camelcase/index.js
var camelcase = __webpack_require__("692d");
var camelcase_default = /*#__PURE__*/__webpack_require__.n(camelcase);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js




/* eslint-disable no-control-regex */
// used to make CSS selectors remain scoped properly
function scoper(css, suffix) {
    var re = /([^\r\n,{}]+)(,(?=[^}]*{)|s*{)/g;
    // `after` is going to contain eithe a comma or an opening curly bracket
    css = css.replace(re, function (full, selector, after) {
        // if non-rule delimiter
        if (selector.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
            return selector + after;
        }
        // don't scope the part of the selector after ::v-deep
        var arrayDeep = /(.*)(::v-deep|>>>|\/deep\/)(.*)/g.exec(selector);
        if (arrayDeep) {
            var beforeVDeep = arrayDeep[1], afterVDeep = arrayDeep[3];
            selector = beforeVDeep;
            after = (afterVDeep + after).trim();
        }
        // deal with :scope pseudo selectors
        if (selector && selector.match(/:scope/)) {
            selector = selector.replace(/([^\s]*):scope/, function (ful, cutSelector) {
                if (cutSelector === '') {
                    return '> *';
                }
                return '> ' + cutSelector;
            });
        }
        selector = selector.split(/\s+/).filter(function (part) { return !!part; }).map(function (part) {
            // combinators
            if (/^[>~+]$/.test(part)) {
                return part;
            }
            // deal with other pseudo selectors
            var _a = part.split(/:{1,2}/), main = _a[0], rest = _a.slice(1);
            var pseudo = rest.map(function (piece) { return ":".concat(piece); }).join('');
            return main + suffix + pseudo;
        }).join(' ');
        return selector + ' ' + after;
    });
    return css;
}

var noop = function () { };
/**
 * Adds a style block to the head to load the styles.
 * uses the suffix to scope the styles
 * @param {string} css css code to add the the head
 * @param {string} suffix string to add to each selector as a scoped style to avoid conflicts
 * @returns a function that discard the added style element (if there is one)
 */
function addScopedStyle(css, suffix) {
    // protect server side rendering
    if (typeof document === 'undefined') {
        return noop;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var newstyle = document.createElement('style');
    newstyle.dataset.cssscoper = 'true';
    var csses = scoper(css, "[data-".concat(suffix, "]"));
    var styleany = newstyle;
    if (styleany.styleSheet) {
        styleany.styleSheet.cssText = csses;
    }
    else {
        newstyle.appendChild(document.createTextNode(csses));
    }
    head.appendChild(newstyle);
    return function () {
        head.removeChild(newstyle);
    };
}

/**
 * Groups attributes passed to a React pragma to the VueJS fashion
 * @param h the VueJS createElement function passed in render functions
 * @returns pragma usable in buble rendered JSX for VueJS
 */
function adaptCreateElement(h) {
    return function (comp, attr) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var resolvedComponent = resolveComponent(comp);
        if (attr === undefined) {
            return h(resolvedComponent);
        }
        else if (!children.length) {
            return h(resolvedComponent, groupAttr(attr));
        }
        return h(resolvedComponent, groupAttr(attr), children);
    };
}
var rootAttributes = [
    'staticClass',
    'class',
    'style',
    'key',
    'ref',
    'refInFor',
    'slot',
    'scopedSlots',
    'model'
];
var prefixedRE = /^(on|nativeOn|props|domProps|hook|v)([A-Z][a-zA-Z]+)?$/;
var getRawName = function (name) {
    return name.replace(/^(on|native(On|-on)|props|dom(Props|-props)|hook|v)-?/, '');
};
/**
 * Make sure an object is an array
 * and if it is not wrap it inside one
 * @param a
 */
var makeArray = function (a) {
    return Array.isArray(a) ? a : [a];
};
/**
 * Create a function out of two other
 * @param fn1
 * @param fn2
 */
var mergeFn = function (fn1, fn2) {
    return function () {
        var argzMain = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argzMain[_i] = arguments[_i];
        }
        fn1 && fn1.apply(this, argzMain);
        fn2 && fn2.apply(this, argzMain);
    };
};
/**
 * Merge two members of the spread
 * @param a
 * @param b
 */
var merge = function (a, b) {
    // initialization case
    if (a === undefined) {
        return b;
    }
    // merge of functions
    if (typeof a === 'function' && typeof b === 'function') {
        return mergeFn(a, b);
    }
    // merge of other options (like class)
    return makeArray(a).concat(b);
};
var concatenate = function (src) {
    var otherObj = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherObj[_i - 1] = arguments[_i];
    }
    src = src || {};
    otherObj.forEach(function (obj) {
        Object.keys(obj).forEach(function (key) {
            src[key] = merge(src[key], obj[key]);
        });
    });
    return src;
};
var groupAttr = function (attrsIn) {
    if (isVue3) {
        Object.keys(attrsIn)
            .filter(function (key) { return key.startsWith('vModel') || key.startsWith('v-model'); })
            .forEach(function (key) {
            var valueRef = attrsIn[key];
            var rootKey = key.startsWith('vModel:')
                ? key.slice(7)
                : key.startsWith('v-model')
                    ? key.slice(8)
                    : 'modelValue';
            attrsIn[rootKey] = valueRef;
            attrsIn["onUpdate:".concat(rootKey)] = function ($event) { return (valueRef = $event); };
            delete attrsIn[key];
        });
        return attrsIn;
    }
    if (!attrsIn) {
        return undefined;
    }
    var attrsOut = {};
    Object.keys(attrsIn).forEach(function (name) {
        var value = attrsIn[name];
        var ccName = camelcase_default()(name);
        if (rootAttributes.indexOf(ccName) > 0) {
            attrsOut[ccName] = value;
        }
        else if (name === 'attrs') {
            attrsOut.attrs = concatenate(attrsOut.attrs, value);
        }
        else if (prefixedRE.test(ccName)) {
            var foundName = prefixedRE.exec(ccName);
            if (foundName) {
                var prefix = foundName[1];
                var rawName = getRawName(name);
                var camelCasedName = rawName.length ? rawName[0].toLowerCase() + rawName.slice(1) : '';
                if (prefix === 'v') {
                    if (!attrsOut.directives) {
                        attrsOut.directives = [];
                    }
                    attrsOut.directives.push({
                        name: camelCasedName,
                        value: value
                    });
                }
                else {
                    if (!attrsOut[prefix]) {
                        attrsOut[prefix] = {};
                    }
                    if (camelCasedName.length) {
                        // if it is a literal prefixed attribute
                        attrsOut[prefix][camelCasedName] = merge(attrsOut[prefix][camelCasedName], value);
                    }
                    else {
                        // if it is a spread
                        concatenate(attrsOut[prefix], value);
                    }
                }
            }
        }
        else {
            attrsOut.attrs = attrsOut.attrs || {};
            var finalName = /^data-/.test(name) ? name : ccName === 'xlinkHref' ? 'xlink:href' : ccName;
            attrsOut.attrs[finalName] = value;
        }
    });
    return attrsOut;
};

// highest priority first
var PARTS = ['script', 'template'];
function parseComponent(code) {
    // reinintialize regexp after each tour
    var partsRE = PARTS.reduce(function (ret, part) {
        ret[part] = new RegExp("<".concat(part, "[^>]*>((.|\\n|\\r)+)</").concat(part, ">"), 'g');
        return ret;
    }, {});
    var descriptor = {};
    var codeCleaned = code;
    // extract all parts
    PARTS.forEach(function (part) {
        var res = partsRE[part].exec(codeCleaned);
        if (res) {
            var partFound = res[0];
            var linesBeforePart = code.split(partFound)[0];
            var paddingLinesNumber = linesBeforePart.split('\n').length;
            descriptor[part] = Array(paddingLinesNumber).join('\n') + res[1];
            // once we have extracted one part,
            // remove it from the analyzed blob
            var linesOfPart = partFound.split('\n').length;
            codeCleaned = codeCleaned.replace(partFound, Array(linesOfPart).join('\n'));
        }
    });
    // we assume that
    var styleRE = /<style[^>]*>((.|\n|\r)*?)<\/style>/g;
    var styleAnalyzed = '';
    var stylesWithWrapper = [];
    var stylePart = styleRE.exec(codeCleaned);
    var styles;
    while (stylePart) {
        styleAnalyzed += stylePart[1];
        if (!styles) {
            styles = [];
        }
        var styleWithWrapper = stylePart[0];
        stylesWithWrapper.push(styleWithWrapper);
        var linesBeforePart = code.split(styleWithWrapper)[0];
        var paddingLinesNumber = linesBeforePart.split('\n').length;
        styles.push(Array(paddingLinesNumber).join('\n') + styleAnalyzed);
        stylePart = styleRE.exec(codeCleaned);
    }
    if (styles) {
        descriptor.styles = styles;
        var j = styles.length;
        while (j--) {
            codeCleaned = codeCleaned.replace(stylesWithWrapper[j], '').trim();
        }
    }
    return codeCleaned.trim().length ? {} : descriptor;
}

/**
 * Determines if the given code is a VueSfc file
 * It does not throw if the code is invalid, just returns `false`
 * @param code JavaScript or vue code to analyze
 */
function isCodeVueSfc(code) {
    var parts = parseComponent(code);
    return !!parts.script || !!parts.template;
}

function cleanName(name) {
    return name.replace(/[^A-Za-z0-9-]/g, '');
}

function getDefaultText() {
    return 'Default Example Usage';
}
function getDefaultNumber() {
    return '42';
}
function getDefaultBoolean() {
    return 'true';
}
function getDefaultArray() {
    return '[1, 2, 3]';
}
function getDefaultFunction() {
    return '() => void';
}
function getDefaultDate() {
    return 'new Date(\'2012-12-12\')';
}
function getDefaultObject() {
    return '{}';
}
function getDefault(prop) {
    if (!prop || !prop.type) {
        return getDefaultText();
    }
    else if (prop.values && prop.values.length) {
        return prop.values[0];
    }
    else if (prop.type.name === 'string') {
        return getDefaultText();
    }
    else if (prop.type.name === 'number') {
        return getDefaultNumber();
    }
    else if (prop.type.name === 'boolean') {
        return getDefaultBoolean();
    }
    else if (prop.type.name === 'object') {
        return getDefaultObject();
    }
    else if (prop.type.name === 'array') {
        return getDefaultArray();
    }
    else if (prop.type.name === 'func') {
        return getDefaultFunction();
    }
    else if (prop.type.name === 'date') {
        return getDefaultDate();
    }
    return getDefaultText();
}
var getDefaultExample = (function (doc) {
    var displayName = doc.displayName, props = doc.props, slots = doc.slots;
    var cleanedName = cleanName(displayName);
    var propsAttr = props
        ? props
            .filter(function (p) { return p.required; })
            .map(function (p) {
            return " ".concat(!p || !p.type || p.type.name === 'string' ? '' : ':').concat(p.name, "=\"").concat(getDefault(p), "\"");
        })
        : [];
    return "<".concat(cleanedName).concat(propsAttr.join(' ')).concat(!slots || !slots.filter(function (s) { return s.name === 'default'; })
        ? ' />'
        : ">".concat(getDefaultText(), "</").concat(cleanedName, ">"));
});




/***/ }),

/***/ "a822":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// WARNING: This function’s source is returned by a loader without transpilation.
// Do not use any unsupported by IE11+ features.

/**
 * Return module from a given map (like {react: require('react')}) or throw.
 * We alllow to require modules only from Markdown examples (won’t work dinamically becasue we need to know all required
 * modules in advance to be able to bundle them with the code).
 *
 * @param {object} requireMap
 * @param {string} importPath
 * @param {string} filepath
 * @return {object}
 */
module.exports = function requireInRuntime(requireMap, importPath, filepath) {
  // since the require can be done in a remote file
  var requireLocalMap = (importPath ? requireMap[importPath] : requireMap) || {};

  if (!(filepath in requireLocalMap)) {
    throw new Error('require() statements can be added only by editing a Markdown example file: require("' + filepath + '")');
  }

  return requireLocalMap[filepath];
};

/***/ }),

/***/ "b11e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var GITHUB_HOMEPAGE = 'https://github.com/vue-styleguidist/vue-styleguidist/';
var DOCS_HOMEPAGE = 'https://vue-styleguidist.github.io/';
var _default = {
  HOMEPAGE: DOCS_HOMEPAGE,
  BUGS: GITHUB_HOMEPAGE + '/issues',
  DOCS_CONFIG: DOCS_HOMEPAGE + 'docs/Configuration',
  DOCS_COMPONENTS: DOCS_HOMEPAGE + 'docs/Components',
  DOCS_WEBPACK: DOCS_HOMEPAGE + 'docs/Webpack',
  DOCS_DOCUMENTING: DOCS_HOMEPAGE + 'docs/Documenting',
  DOCS_COOKBOOK: DOCS_HOMEPAGE + 'docs/Cookbook'
};
exports["default"] = _default;

/***/ }),

/***/ "c0e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cfee");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f736");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4699");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4e29");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e20a");
/* harmony import */ var rsg_components_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("299e");
/* harmony import */ var react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0f75");








var IsolateButton = function IsolateButton(_ref) {
  var name = _ref.name,
      example = _ref.example,
      isolated = _ref.isolated;
  var testID = example ? "".concat(name, "-").concat(example, "-isolate-button") : "".concat(name, "-isolate-button");
  return isolated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rsg_components_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: Object(react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
      anchor: true,
      slug: name.toLowerCase()
    }),
    title: "Show all components",
    testId: testID
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[/* MdFullscreenExit */ "c"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rsg_components_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: Object(react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
      name: name,
      example: example,
      isolated: true
    }),
    title: "Open isolated",
    testId: testID
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[/* MdFullscreen */ "b"], null));
};

IsolateButton.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  example: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  isolated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (IsolateButton);

/***/ }),

/***/ "ee73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: StyleGuideRenderer

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("32cb");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__("4bac");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("4699");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__("4e29");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Logo/index.js + 1 modules
var Logo = __webpack_require__("dd6b");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__("4023");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__("54e8");

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/StyleguideFooter/StyleguideFooterRenderer.js






var StyleguideFooterRenderer_styles = function styles(_ref) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      color = _ref.color;
  return {
    root: {
      display: 'block',
      color: color.light,
      fontFamily: fontFamily.base,
      fontSize: fontSize.small
    }
  };
};

var StyleguideFooterRenderer_StyleguideFooterRenderer = function StyleguideFooterRenderer(_ref2) {
  var classes = _ref2.classes,
      homepageUrl = _ref2.homepageUrl;
  return /*#__PURE__*/react_default.a.createElement("footer", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    text: "Generated with [Vue Styleguidist](".concat(homepageUrl, ")")
  }));
};
StyleguideFooterRenderer_StyleguideFooterRenderer.propTypes = {
  classes: prop_types_default.a.objectOf(prop_types_default.a.string.isRequired).isRequired,
  homepageUrl: prop_types_default.a.string.isRequired
};
/* harmony default export */ var StyleguideFooter_StyleguideFooterRenderer = (Object(Styled["a" /* default */])(StyleguideFooterRenderer_styles)(StyleguideFooterRenderer_StyleguideFooterRenderer));
// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/StyleguideFooter/index.js

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__("d4f0");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Ribbon/index.js + 2 modules
var Ribbon = __webpack_require__("a7b3");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/node_modules/.pnpm/react-styleguidist@11.1.6_ijjrode3jdh4fw33genzoxgwse/node_modules/react-styleguidist/lib/client/rsg-components/Version/index.js + 1 modules
var Version = __webpack_require__("8a44");

// EXTERNAL MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/scripts/consts.js
var consts = __webpack_require__("b11e");
var consts_default = /*#__PURE__*/__webpack_require__.n(consts);

// CONCATENATED MODULE: /home/runner/work/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/client/rsg-components/VsgStyleGuide/StyleGuideRenderer.js












var StyleGuideRenderer_styles = function styles(_ref) {
  var _content;

  var color = _ref.color,
      sidebarWidth = _ref.sidebarWidth,
      mq = _ref.mq,
      space = _ref.space,
      maxWidth = _ref.maxWidth;
  return {
    root: {
      minHeight: '100vh',
      backgroundColor: color.baseBackground
    },
    hasSidebar: defineProperty_default()({
      paddingLeft: sidebarWidth
    }, mq.small, {
      paddingLeft: 0
    }),
    content: (_content = {
      maxWidth: maxWidth,
      padding: [[space[2], space[4]]],
      margin: [[0, 'auto']]
    }, defineProperty_default()(_content, mq.small, {
      padding: space[2]
    }), defineProperty_default()(_content, "display", 'block'), _content),
    sidebar: defineProperty_default()({
      backgroundColor: color.sidebarBackground,
      border: [[color.border, 'solid']],
      borderWidth: [[0, 1, 0, 0]],
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: sidebarWidth,
      overflow: 'auto',
      '-webkit-overflow-scrolling': 'touch'
    }, mq.small, {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0]
    }),
    logo: {
      padding: space[2],
      borderBottom: [[1, color.border, 'solid']]
    }
  };
};

function StyleGuideRenderer(_ref2) {
  var classes = _ref2.classes,
      title = _ref2.title,
      version = _ref2.version,
      children = _ref2.children,
      toc = _ref2.toc,
      hasSidebar = _ref2.hasSidebar;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(classes.root, hasSidebar && classes.hasSidebar)
  }, /*#__PURE__*/react_default.a.createElement("main", {
    className: classes.content
  }, children, /*#__PURE__*/react_default.a.createElement(StyleguideFooter_StyleguideFooterRenderer, {
    homepageUrl: consts_default.a.HOMEPAGE
  })), hasSidebar && /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.sidebar
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.logo
  }, /*#__PURE__*/react_default.a.createElement(Logo["a" /* default */], null, title), version && /*#__PURE__*/react_default.a.createElement(Version["a" /* default */], null, version)), toc), /*#__PURE__*/react_default.a.createElement(Ribbon["a" /* default */], null));
}
StyleGuideRenderer.propTypes = {
  classes: prop_types_default.a.object.isRequired,
  title: prop_types_default.a.string.isRequired,
  version: prop_types_default.a.string,
  homepageUrl: prop_types_default.a.string.isRequired,
  children: prop_types_default.a.node.isRequired,
  toc: prop_types_default.a.node.isRequired,
  hasSidebar: prop_types_default.a.bool
};
/* harmony default export */ var VsgStyleGuide_StyleGuideRenderer = __webpack_exports__["a"] = (Object(Styled["a" /* default */])(StyleGuideRenderer_styles)(StyleGuideRenderer));

/***/ }),

/***/ "effc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registerGlobalComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addGlobalComponentToRegistration; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("71bf");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0ea6");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("861a");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3fc1");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);




var globalComponents = {};
function registerGlobalComponents(app) {
  Object.entries(globalComponents).forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        name = _ref2[0],
        component = _ref2[1];

    app.component(name, component);
  });
  return app;
}
function addGlobalComponentToRegistration(name, component) {
  globalComponents[name] = component;
}

/***/ }),

/***/ "fc18":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// WARNING: This function’s source is returned by a loader without transpilation.
// Do not use any unsupported by IE11+ features.

/**
 * Eval example code in a custom context:
 * - `require()` that allows you to require modules from Markdown examples (won’t work dinamically becasue we need
 *   to know all required modules in advance to be able to bundle them with the code).
 * - `state` variable, `setState` function that will be binded to a React component
 *   that manages example’s state on the frontend.
 *
 * Also prepends a given `code` with a `header` (maps required context modules to local variables).
 *
 * @param {string} header
 * @param {Function} __pragma__
 * @param {Function} __concatenate__
 * @param {Function} require
 * @param {string} code
 * @return {Function}
 */
module.exports = function evalInContext(header, __pragma__, __concatenate__, require, code) {
  var func = new Function('require', '__pragma__', '__concatenate__', header + code); // eslint-disable-line no-new-func

  var requireScoped = require; // Bind the `require` function, other context arguments will be passed from the frontend

  return func.bind(null, requireScoped, __pragma__, __concatenate__);
};

/***/ })

/******/ });