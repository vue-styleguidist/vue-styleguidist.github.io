/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 60073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AppButton; }
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"43087a9c-vue-loader-template"}!../../node_modules/.pnpm/vue-loader@15.9.8_kje6jbonrwud63vsczpj55uqta/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!../../node_modules/.pnpm/vue-loader@15.9.8_kje6jbonrwud63vsczpj55uqta/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppButton.vue?vue&type=template&id=119ff6d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{style:(_vm.styles),on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/components/sizeMixin.js
var sizeMixin = __webpack_require__(89634);
var sizeMixin_default = /*#__PURE__*/__webpack_require__.n(sizeMixin);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/thread-loader@3.0.1_webpack@5.74.0/node_modules/thread-loader/dist/cjs.js!../../node_modules/.pnpm/babel-loader@8.2.5_m3opitmgss2x7fiy6klia7uvaa/node_modules/babel-loader/lib/index.js??clonedRuleSet-41[0].rules[0].use[1]!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!../../node_modules/.pnpm/vue-loader@15.9.8_kje6jbonrwud63vsczpj55uqta/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var AppButtonvue_type_script_lang_js_ = ({
  name: 'app-button',
  mixins: [(sizeMixin_default())],
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
;// CONCATENATED MODULE: ./src/components/AppButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppButtonvue_type_script_lang_js_ = (AppButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../../node_modules/.pnpm/vue-loader@15.9.8_kje6jbonrwud63vsczpj55uqta/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(35690);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/loaders/docs-loader.js!../../packages/vue-cli-plugin-styleguidist/empty-object-loader.js!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!../../node_modules/.pnpm/vue-loader@15.9.8_kje6jbonrwud63vsczpj55uqta/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md
/* harmony default export */ function AppButtonvue_type_custom_index_0_blockType_docs_lang_md(Component) {
        Component.options = Component.options || {}
        Component.options.__docs = "module.exports = {}"
      }
;// CONCATENATED MODULE: ./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md
 /* harmony default export */ var components_AppButtonvue_type_custom_index_0_blockType_docs_lang_md = (AppButtonvue_type_custom_index_0_blockType_docs_lang_md); 
;// CONCATENATED MODULE: ./src/components/AppButton.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  components_AppButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */
;
if (typeof components_AppButtonvue_type_custom_index_0_blockType_docs_lang_md === 'function') components_AppButtonvue_type_custom_index_0_blockType_docs_lang_md(component)

/* harmony default export */ var AppButton = (component.exports);

/***/ }),

/***/ 89634:
/***/ (function(module) {

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

/***/ 30251:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Vue2": function() { return /* reexport */ vue_runtime_esm/* default */.ZP; },
  "adaptCreateElement": function() { return /* binding */ adaptCreateElement; },
  "addScopedStyle": function() { return /* binding */ addScopedStyle; },
  "cleanName": function() { return /* binding */ cleanName; },
  "compileScript": function() { return /* reexport */ compileScript; },
  "compileTemplate": function() { return /* reexport */ compileTemplate; },
  "compileTemplateForEval": function() { return /* binding */ compileTemplateForEval; },
  "concatenate": function() { return /* binding */ concatenate; },
  "createApp": function() { return /* reexport */ createApp; },
  "getDefaultExample": function() { return /* binding */ getDefaultExample; },
  "h": function() { return /* reexport */ h; },
  "isCodeVueSfc": function() { return /* binding */ isCodeVueSfc; },
  "isVue3": function() { return /* reexport */ isVue3; },
  "parseComponent": function() { return /* binding */ parseComponent; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/vue@2.7.8_26fyyf7iv7yfd4w3hhy5cm2p24/node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(87089);
// EXTERNAL MODULE: ../../node_modules/.pnpm/vue-template-compiler@2.7.8/node_modules/vue-template-compiler/browser.js
var browser = __webpack_require__(64400);
;// CONCATENATED MODULE: ../../packages/vue-inbrowser-compiler-demi/index.esm.js

// eslint-disable-next-line import/no-unresolved


const h = () => {}
const createApp = () => {}
const isVue3 = false

const compileTemplate = ({ source: template }) => ({
	code: (0,browser.compile)(template).render
})
const compileScript = () => ({ type: 'script' })

// EXTERNAL MODULE: ../../node_modules/.pnpm/camelcase@5.3.1/node_modules/camelcase/index.js
var camelcase = __webpack_require__(42737);
var camelcase_default = /*#__PURE__*/__webpack_require__.n(camelcase);
;// CONCATENATED MODULE: ../../packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js




/* eslint-disable no-control-regex */
// used to make CSS selectors remain scoped properly
function scoper(css, suffix) {
    const re = /([^\r\n,{}]+)(,(?=[^}]*{)|s*{)/g;
    // `after` is going to contain eithe a comma or an opening curly bracket
    css = css.replace(re, function (full, selector, after) {
        // if non-rule delimiter
        if (selector.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
            return selector + after;
        }
        // don't scope the part of the selector after ::v-deep
        const arrayDeep = /(.*)(::v-deep|>>>|\/deep\/)(.*)/g.exec(selector);
        if (arrayDeep) {
            const [, beforeVDeep, , afterVDeep] = arrayDeep;
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
        selector = selector.split(/\s+/).filter(part => !!part).map(part => {
            // combinators
            if (/^[>~+]$/.test(part)) {
                return part;
            }
            // deal with other pseudo selectors
            const [main, ...rest] = part.split(/:{1,2}/);
            let pseudo = rest.map(piece => `:${piece}`).join('');
            return main + suffix + pseudo;
        }).join(' ');
        return selector + ' ' + after;
    });
    return css;
}

const noop = () => { };
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
    const head = document.head || document.getElementsByTagName('head')[0];
    const newstyle = document.createElement('style');
    newstyle.dataset.cssscoper = 'true';
    const csses = scoper(css, `[data-${suffix}]`);
    const styleany = newstyle;
    if (styleany.styleSheet) {
        styleany.styleSheet.cssText = csses;
    }
    else {
        newstyle.appendChild(document.createTextNode(csses));
    }
    head.appendChild(newstyle);
    return () => {
        head.removeChild(newstyle);
    };
}

/**
 * Groups attributes passed to a React pragma to the VueJS fashion
 * @param h the VueJS createElement function passed in render functions
 * @returns pragma usable in buble rendered JSX for VueJS
 */
function adaptCreateElement(h) {
    return (comp, attr, ...children) => {
        if (attr === undefined) {
            return h(comp);
        }
        else if (!children.length) {
            return h(comp, groupAttr(attr));
        }
        return h(comp, groupAttr(attr), children);
    };
}
const rootAttributes = [
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
const prefixedRE = /^(on|nativeOn|props|domProps|hook|v)([A-Z][a-zA-Z]+)?$/;
const getRawName = (name) => {
    return name.replace(/^(on|native(On|-on)|props|dom(Props|-props)|hook|v)-?/, '');
};
/**
 * Make sure an object is an array
 * and if it is not wrap it inside one
 * @param a
 */
const makeArray = (a) => {
    return Array.isArray(a) ? a : [a];
};
/**
 * Create a function out of two other
 * @param fn1
 * @param fn2
 */
const mergeFn = (fn1, fn2) => function (...argzMain) {
    fn1 && fn1.apply(this, argzMain);
    fn2 && fn2.apply(this, argzMain);
};
/**
 * Merge two members of the spread
 * @param a
 * @param b
 */
const merge = (a, b) => {
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
const concatenate = (src, ...otherObj) => {
    src = src || {};
    otherObj.forEach(obj => {
        Object.keys(obj).forEach((key) => {
            src[key] = merge(src[key], obj[key]);
        });
    });
    return src;
};
const groupAttr = (attrsIn) => {
    if (isVue3) {
        Object.keys(attrsIn)
            .filter(key => key.startsWith('vModel') || key.startsWith('v-model'))
            .forEach(key => {
            let valueRef = attrsIn[key];
            const rootKey = key.startsWith('vModel:')
                ? key.slice(7)
                : key.startsWith('v-model')
                    ? key.slice(8)
                    : 'modelValue';
            attrsIn[rootKey] = valueRef;
            attrsIn[`onUpdate:${rootKey}`] = ($event) => (valueRef = $event);
            delete attrsIn[key];
        });
        return attrsIn;
    }
    if (!attrsIn) {
        return undefined;
    }
    const attrsOut = {};
    Object.keys(attrsIn).forEach(name => {
        const value = attrsIn[name];
        const ccName = camelcase_default()(name);
        if (rootAttributes.indexOf(ccName) > 0) {
            attrsOut[ccName] = value;
        }
        else if (name === 'attrs') {
            attrsOut.attrs = concatenate(attrsOut.attrs, value);
        }
        else if (prefixedRE.test(ccName)) {
            const foundName = prefixedRE.exec(ccName);
            if (foundName) {
                const prefix = foundName[1];
                const rawName = getRawName(name);
                const camelCasedName = rawName.length ? rawName[0].toLowerCase() + rawName.slice(1) : '';
                if (prefix === 'v') {
                    if (!attrsOut.directives) {
                        attrsOut.directives = [];
                    }
                    attrsOut.directives.push({
                        name: camelCasedName,
                        value
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
            const finalName = /^data-/.test(name) ? name : ccName === 'xlinkHref' ? 'xlink:href' : ccName;
            attrsOut.attrs[finalName] = value;
        }
    });
    return attrsOut;
};

// highest priority first
const PARTS = ['script', 'template'];
function parseComponent(code) {
    // reinitialize regexp after each tour
    const partsRE = PARTS.reduce((ret, part) => {
        ret[part] = new RegExp(`<${part}[^>]*>((.|\\n|\\r)+)</${part}>`, 'g');
        return ret;
    }, {});
    const descriptor = {};
    let codeCleaned = `${code}`;
    // extract all parts
    PARTS.forEach(part => {
        const res = partsRE[part].exec(codeCleaned);
        if (res) {
            const partFound = res[0];
            const linesBeforePart = code.split(partFound)[0];
            const paddingLinesNumber = linesBeforePart.split('\n').length;
            descriptor[part] = Array(paddingLinesNumber).join('\n') + res[1];
            // once we have extracted one part,
            // remove it from the analyzed string
            const linesOfPart = partFound.split('\n').length;
            codeCleaned = codeCleaned.replace(partFound, Array(linesOfPart).join('\n'));
        }
    });
    // we assume that
    const styleRE = /<style[^>]*>((.|\n|\r)*?)<\/style>/g;
    let styleAnalyzed = '';
    const stylesWithWrapper = [];
    let stylePart = styleRE.exec(codeCleaned);
    let styles;
    while (stylePart) {
        styleAnalyzed += stylePart[1];
        if (!styles) {
            styles = [];
        }
        const styleWithWrapper = stylePart[0];
        stylesWithWrapper.push(styleWithWrapper);
        const linesBeforePart = code.split(styleWithWrapper)[0];
        const paddingLinesNumber = linesBeforePart.split('\n').length;
        styles.push(Array(paddingLinesNumber).join('\n') + styleAnalyzed);
        stylePart = styleRE.exec(codeCleaned);
    }
    if (styles) {
        descriptor.styles = styles;
        let j = styles.length;
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
    const parts = parseComponent(code);
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
var getDefaultExample = (doc) => {
    const { displayName, props, slots } = doc;
    const cleanedName = cleanName(displayName);
    const propsAttr = props
        ? props
            .filter(p => p.required)
            .map(p => ` ${!p || !p.type || p.type.name === 'string' ? '' : ':'}${p.name}="${getDefault(p)}"`)
        : [];
    return `<${cleanedName}${propsAttr.join(' ')}${!slots || !slots.filter(s => s.name === 'default')
        ? ' />'
        : `>${getDefaultText()}</${cleanedName}>`}`;
};

const EXAMPLE_FILENAME = 'example.vue';
function compileTemplateForEval(compiledComponent) {
    if (compiledComponent.template) {
        const { bindings } = compileScript({
            cssVars: [],
            script: {
                type: 'script',
                content: `export default (function () {${compiledComponent.script}})()`
            },
            scriptSetup: null
        }, {
            id: '-'
        });
        compiledComponent.script = `
${isVue3 ? 'const Vue = require("vue")' : ''}
const comp = (function() {${compiledComponent.script}})()
comp.render = function() {${compileTemplate({
            source: compiledComponent.template,
            filename: EXAMPLE_FILENAME,
            id: '-',
            compilerOptions: {
                bindingMetadata: bindings,
                prefixIdentifiers: true,
                mode: 'function'
            }
        }).code}}
${isVue3 ? `comp.render = comp.render()` : ``}
return comp`;
        delete compiledComponent.template;
    }
}




/***/ }),

/***/ 14124:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_styleguidist_lib_client_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9458);
/* harmony import */ var react_styleguidist_lib_client_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87809);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78520);
/* harmony import */ var react_styleguidist_lib_client_utils_handleHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46384);
/* harmony import */ var _utils_renderStyleguide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16154);
/* eslint-disable import/first */




 // Examples code revision to rerender only code examples (not the whole page) when code changes
// eslint-disable-next-line no-unused-vars

var codeRevision = 0; // Scrolls to origin when current window location hash points to an isolated view.

var scrollToOrigin = function scrollToOrigin() {
  var hash = window.location.hash;

  if ((0,react_styleguidist_lib_client_utils_handleHash__WEBPACK_IMPORTED_MODULE_3__/* .hasInHash */ .N5)(hash, '#/') || (0,react_styleguidist_lib_client_utils_handleHash__WEBPACK_IMPORTED_MODULE_3__/* .hasInHash */ .N5)(hash, '#!/')) {
    // Extracts the id param of hash
    var idHashParam = (0,react_styleguidist_lib_client_utils_handleHash__WEBPACK_IMPORTED_MODULE_3__/* .getParameterByName */ .ak)(hash, 'id'); // For default scroll scrollTop is the page top

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
  var styleguide = __webpack_require__(71996);

  var container = document.getElementById(styleguide.config.mountPointId);

  if (!container) {
    throw new Error("Could not find container with id \"".concat(styleguide.config.mountPointId, "\""));
  }

  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(container); // createRoot(container!) if you use TypeScript

  root.render((0,_utils_renderStyleguide__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)(styleguide, codeRevision));
};

window.addEventListener('hashchange', render);
window.addEventListener('hashchange', scrollToOrigin); // @ts-expect-error hot module replacement

if (false) {}

render();

/***/ }),

/***/ 39569:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* reexport */ Argument_ArgumentRenderer; }
});

// UNUSED EXPORTS: ArgumentRenderer, styles

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(30039);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(99301);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(33261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__(83700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__(28439);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Name/index.js + 1 modules
var Name = __webpack_require__(4041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Type/index.js + 1 modules
var Type = __webpack_require__(20908);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-group@3.0.2_react@18.2.0/node_modules/react-group/index.js
var react_group = __webpack_require__(44476);
var react_group_default = /*#__PURE__*/__webpack_require__.n(react_group);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Argument/ArgumentRenderer.js

var _excluded = ["classes", "name", "type", "description", "returns", "block"];










var styles = function styles(_ref) {
  var space = _ref.space;
  return {
    block: {
      marginBottom: space[2]
    }
  };
};
var ArgumentRenderer = function ArgumentRenderer(_ref2) {
  var classes = _ref2.classes,
      name = _ref2.name,
      type = _ref2.type,
      description = _ref2.description,
      returns = _ref2.returns,
      block = _ref2.block,
      props = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded);

  var isOptional = type && type.type === 'OptionalType';
  var defaultValue = props["default"];

  if (isOptional) {
    type = type.expression;
  }

  var content = /*#__PURE__*/react.createElement((react_group_default()), null, returns && 'Returns', name && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Name/* default */.Z, null, name), type && ':'), type && /*#__PURE__*/react.createElement(Type/* default */.Z, null, type.name, isOptional && '?', !!defaultValue && "=".concat(defaultValue)), type && description && "\u2014", description && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    text: "".concat(description),
    inline: true
  }));

  if (block) {
    return /*#__PURE__*/react.createElement("div", {
      className: classes.block
    }, content);
  }

  return content;
};
ArgumentRenderer.propTypes = {
  classes: prop_types_default().objectOf((prop_types_default()).string.isRequired).isRequired,
  name: (prop_types_default()).string.isRequired,
  type: (prop_types_default()).object,
  "default": (prop_types_default()).string,
  description: (prop_types_default()).string,
  returns: (prop_types_default()).bool,
  block: (prop_types_default()).bool
};
/* harmony default export */ var Argument_ArgumentRenderer = ((0,Styled/* default */.Z)(styles)(ArgumentRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Argument/index.js



/***/ }),

/***/ 95158:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ EditorPrecompiled; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(85993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(25022);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(63990);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(79500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(71603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(19231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(16085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(72866);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(99385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(27998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(46295);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(82203);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(81917);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(32818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27405);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(27763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__(44062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__(19082);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js + 1 modules
var vue_inbrowser_compiler_utils_esm = __webpack_require__(30251);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(93534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-simple-code-editor@0.11.2_biqbaboplfbrettd7655fr4n2y/node_modules/react-simple-code-editor/lib/index.js
var lib = __webpack_require__(87470);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/prism.js
var prism = __webpack_require__(16418);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-clike.js
var prism_clike = __webpack_require__(94354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-markup.js
var prism_markup = __webpack_require__(74913);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-javascript.js
var prism_javascript = __webpack_require__(87553);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-jsx.js
var prism_jsx = __webpack_require__(83833);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-typescript.js
var prism_typescript = __webpack_require__(17997);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-tsx.js
var prism_tsx = __webpack_require__(40839);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/styles/theme.js
var theme = __webpack_require__(77481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/styles/prismTheme.js
var prismTheme = __webpack_require__(38588);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__(83700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Context/Context.js
var Context = __webpack_require__(38255);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/loaders/utils/getScript.js
var getScript = __webpack_require__(94410);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/VsgEditor/EditorPrism.js















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



























var VSimpleEditor = (lib_default());

var highlight = function highlight(lang, jsxInExamples) {
  if (lang === 'vsg') {
    return function (code) {
      if (!code) {
        return '';
      }

      var scriptCode = (0,getScript/* default */.Z)(code, jsxInExamples);
      var scriptCodeHighlighted = (0,prism.highlight)(scriptCode, prism.languages[jsxInExamples ? 'tsx' : 'ts'], lang);

      if (code.length === scriptCode.length) {
        return scriptCodeHighlighted;
      }

      var templateCode = code.slice(scriptCode.length);
      return scriptCodeHighlighted + (0,prism.highlight)(templateCode, prism.languages.html, lang);
    };
  } else {
    var langScheme = prism.languages.html;
    return function (code) {
      var parser = new DOMParser();
      var SfcXMLDocument = parser.parseFromString("<body>".concat(code, "</body>"), 'text/html');
      var scriptNodes = SfcXMLDocument.querySelectorAll('script');
      var scriptBlocks = [];
      scriptNodes.forEach(function (scriptNode) {
        var lg = scriptNode.getAttribute('lang') || 'js';
        var text = scriptNode.textContent;

        if (text) {
          scriptBlocks.push({
            text: text,
            lg: lg
          });
        }

        scriptNode.textContent = ' ';
      });
      var htmlHighlighted = (0,prism.highlight)(SfcXMLDocument.body.innerHTML, langScheme, 'html');
      return htmlHighlighted.replace(/<span class="token language-javascript"> <\/span>/g, function () {
        var scriptBlock = scriptBlocks.shift();

        if (scriptBlock) {
          return "<span class=\"token language-typescript\">".concat((0,prism.highlight)(scriptBlock.text, prism.languages[scriptBlock.lg], scriptBlock.lg), "</span>");
        }

        return '';
      });
    };
  }
};

var styles = function styles(_ref) {
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
    }, (0,prismTheme/* default */.Z)({
      color: color
    }))
  };
};

var UnconfiguredEditor = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(UnconfiguredEditor, _Component);

  var _super = _createSuper(UnconfiguredEditor);

  function UnconfiguredEditor() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, UnconfiguredEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      code: _this.props.code,
      prevCode: _this.props.code
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "handleChange", function (code) {
      _this.setState({
        code: code
      });

      _this.props.onChange(code);
    });

    return _this;
  }

  (0,createClass/* default */.Z)(UnconfiguredEditor, [{
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
      var isVueSFC = (0,vue_inbrowser_compiler_utils_esm.isCodeVueSfc)(this.state.code);
      var _this$props = this.props,
          jssThemedEditor = _this$props.jssThemedEditor,
          jsxInExamples = _this$props.jsxInExamples,
          editorPadding = _this$props.editorPadding;
      var langClass = isVueSFC ? 'language-html' : 'language-jsx';
      return /*#__PURE__*/react.createElement(VSimpleEditor, {
        className: classnames_default()(root, jssThemedEditor ? jssEditor : langClass, 'prism-editor'),
        value: this.state.code,
        onValueChange: this.handleChange,
        highlight: highlight(isVueSFC ? 'vue-sfc' : 'vsg', jsxInExamples) // Padding should be passed via a prop (not CSS) for a proper
        // cursor position calculation
        ,
        padding: editorPadding || theme.space[2] // to make sure the css styles for prism are taken into account
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
}(react.Component);

(0,defineProperty/* default */.Z)(UnconfiguredEditor, "propTypes", {
  classes: prop_types_default().objectOf((prop_types_default()).string.isRequired).isRequired,
  code: (prop_types_default()).string.isRequired,
  jssThemedEditor: (prop_types_default()).bool.isRequired,
  jsxInExamples: (prop_types_default()).bool.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  editorPadding: (prop_types_default()).number
});

var PEditor = (0,react_lifecycles_compat_es/* polyfill */.O)(UnconfiguredEditor);

function Editor(props) {
  var _ref2 = (0,Context/* useStyleGuideContext */.E)(),
      _ref2$config = _ref2.config,
      jssThemedEditor = _ref2$config.jssThemedEditor,
      jsxInExamples = _ref2$config.jsxInExamples;

  return /*#__PURE__*/react.createElement(PEditor, (0,esm_extends/* default */.Z)({}, props, {
    jssThemedEditor: jssThemedEditor,
    jsxInExamples: jsxInExamples
  }));
}

/* harmony default export */ var EditorPrism = ((0,Styled/* default */.Z)(styles)(Editor));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/EditorPrecompiled/EditorPrecompiled.js


/* eslint-disable react/prop-types */
 // eslint-disable-next-line import/no-unresolved,import/extensions


function EditorPrecompiled(props) {
  return /*#__PURE__*/react.createElement(EditorPrism, (0,esm_extends/* default */.Z)({}, props, {
    code: props.code.raw,
    onChange: function onChange(code) {
      return props.onChange({
        raw: code
      });
    }
  }));
}
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/EditorPrecompiled/index.js


/***/ }),

/***/ 33280:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(85993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(25022);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(81917);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(63990);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(32818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(79500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(71603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(19231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(16085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(72866);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(99385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(27998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(46295);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(99301);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js
var map = __webpack_require__(69107);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ../../packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js + 1 modules
var vue_inbrowser_compiler_utils_esm = __webpack_require__(30251);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__(83700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__(28439);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/scripts/consts.js
var consts = __webpack_require__(29648);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/VsgReactComponent/ReactComponent.js
var ReactComponent = __webpack_require__(45007);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/ExamplePlaceholder/ExamplePlaceholderRenderer.js



















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










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
var ExamplePlaceholderRendererWithDoc = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(ExamplePlaceholderRendererWithDoc, _Component);

  var _super = _createSuper(ExamplePlaceholderRendererWithDoc);

  function ExamplePlaceholderRendererWithDoc(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ExamplePlaceholderRendererWithDoc);

    _this = _super.call(this);
    _this.handleOpen = _this.handleOpen.bind((0,assertThisInitialized/* default */.Z)(_this));
    var tags = props.component.props.tags;
    _this.state = {
      shouldDisplay: !tags || !tags.examples || !tags.examples.length || tags.examples[tags.examples.length - 1].content !== '[none]',
      isVisible: false
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ExamplePlaceholderRendererWithDoc, [{
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
        return /*#__PURE__*/react.createElement("div", null);
      }

      var _this$props = this.props,
          classes = _this$props.classes,
          name = _this$props.name,
          props = _this$props.component.props;

      if (isVisible) {
        return /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
          text: "\nCreate **Readme.md** or **".concat(name, ".md** file in the component\u2019s folder like this:\n\n    ").concat(name, " example:\n\n    ```vue\n    ").concat((0,vue_inbrowser_compiler_utils_esm.getDefaultExample)(_objectSpread(_objectSpread({}, props), {}, {
            props: propsToArray(props.props),
            slots: propsToArray(props.slots),
            events: propsToArray(props.events)
          })), "\n    ```\n\nYou can also add examples and documentation in the `<docs>` block of your `.vue` Single File Component.\n\nYou may need to **restart** the style guide server after adding an example file.\n\nRead more in the [documenting components guide](").concat(consts/* default.DOCS_DOCUMENTING */.Z.DOCS_DOCUMENTING, ").\n\t\t\t\t\t")
        });
      }

      return /*#__PURE__*/react.createElement("button", {
        className: classes.button,
        onClick: this.handleOpen
      }, "Add examples to this component");
    }
  }]);

  return ExamplePlaceholderRendererWithDoc;
}(react.Component);

(0,defineProperty/* default */.Z)(ExamplePlaceholderRendererWithDoc, "propTypes", {
  classes: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string,
  component: (prop_types_default()).object
});

function ExamplePlaceholderRenderer(props) {
  return /*#__PURE__*/react.createElement(ReactComponent/* DocumentedComponentContext.Consumer */.zt.Consumer, null, function (component) {
    return /*#__PURE__*/react.createElement(ExamplePlaceholderRendererWithDoc, (0,esm_extends/* default */.Z)({}, props, {
      component: component
    }));
  });
}
/* harmony default export */ var ExamplePlaceholder_ExamplePlaceholderRenderer = ((0,Styled/* default */.Z)(styles)(ExamplePlaceholderRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/ExamplePlaceholder/index.js


/***/ }),

/***/ 56938:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ JsDoc_JsDoc; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(30039);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(5334);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(83364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(33261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(99301);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(81917);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(86590);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js
var map = __webpack_require__(69107);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/capitalize.js
var capitalize = __webpack_require__(60844);
var capitalize_default = /*#__PURE__*/__webpack_require__.n(capitalize);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__(28439);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Argument/index.js + 1 modules
var Argument = __webpack_require__(39569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__(83700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(98950);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Link/index.js + 1 modules
var Link = __webpack_require__(75218);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/SubComponents/SubComponents.js


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

var SubComponents = function SubComponents(_ref2) {
  var classes = _ref2.classes,
      props = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded);

  // only collapse if there is more than 3 requires
  var collapsibleSubComponents = props.subComponents.length > 3;

  var _useState = (0,react.useState)(!collapsibleSubComponents),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(classes.root, open && classes.open)
  }, /*#__PURE__*/react.createElement("b", {
    onClick: function onClick() {
      return setOpen(!collapsibleSubComponents || !open);
    },
    className: (0,clsx_m/* default */.Z)(classes.title, collapsibleSubComponents && classes.toggler)
  }, collapsibleSubComponents ? open ? '-' : '+' : '', " Requires", collapsibleSubComponents ? " (".concat(props.subComponents.length, ")") : ''), props.subComponents.map(function (subComponent, i) {
    return /*#__PURE__*/react.createElement(Link/* default */.Z, {
      key: i,
      href: subComponent.url,
      className: classes.element
    }, subComponent.name);
  }));
};
SubComponents.propTypes = {
  classes: prop_types_default().objectOf((prop_types_default()).string.isRequired).isRequired,
  subComponents: prop_types_default().arrayOf(prop_types_default().shape({
    name: (prop_types_default()).string.isRequired,
    url: (prop_types_default()).string.isRequired
  }).isRequired).isRequired
};
/* harmony default export */ var SubComponents_SubComponents = ((0,Styled/* default */.Z)(styles)(SubComponents));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/SubComponents/index.js

;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/JsDoc/JsDoc.js


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

var JsDocRenderer = function JsDocRenderer(_ref2) {
  var classes = _ref2.classes,
      field = _ref2.field,
      children = _ref2.children;
  return /*#__PURE__*/react.createElement("div", {
    className: "vsg-jsdoc-tag ".concat(classes.wrapper),
    key: field
  }, /*#__PURE__*/react.createElement("span", {
    className: "vsg-tag-name ".concat(classes.name)
  }, capitalize_default()(field)), /*#__PURE__*/react.createElement("span", {
    className: "vsg-tag-value ".concat(classes.value)
  }, children));
};

var JsDoc = function JsDoc(_ref3) {
  var classes = _ref3.classes,
      props = (0,objectWithoutProperties/* default */.Z)(_ref3, JsDoc_excluded);

  return /*#__PURE__*/react.createElement(react.Fragment, null, props.subComponents && /*#__PURE__*/react.createElement(SubComponents_SubComponents, {
    subComponents: props.subComponents
  }), props["throws"] && props["throws"].map(function (_throws, i) {
    return /*#__PURE__*/react.createElement(JsDocRenderer, {
      key: i,
      field: "throws",
      classes: classes
    }, /*#__PURE__*/react.createElement(Argument/* default */.ZP, (0,esm_extends/* default */.Z)({
      name: ""
    }, _throws, {
      description: typeof _throws.description === 'boolean' ? _throws.description.toString() : _throws.description
    })));
  }), map_default()(fields, function (format, field) {
    var value = props[field];

    if (!value || !Array.isArray(value)) {
      return null;
    }

    return /*#__PURE__*/react.createElement(JsDocRenderer, {
      key: field,
      field: field,
      classes: classes
    }, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
      text: format(value) || '',
      inline: true
    }));
  }));
};
JsDoc.propTypes = {
  classes: prop_types_default().objectOf((prop_types_default()).string.isRequired).isRequired,
  subComponents: (prop_types_default()).array,
  deprecated: (prop_types_default()).array,
  see: (prop_types_default()).array,
  link: (prop_types_default()).array,
  author: (prop_types_default()).array,
  version: (prop_types_default()).array,
  since: (prop_types_default()).array,
  "throws": (prop_types_default()).array
};
/* harmony default export */ var JsDoc_JsDoc = ((0,Styled/* default */.Z)(JsDoc_styles)(JsDoc));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/JsDoc/index.js


/***/ }),

/***/ 68340:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81917);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71603);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85993);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5448);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25022);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63990);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32818);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79500);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19231);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16085);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1529);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72866);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99385);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27998);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46295);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52983);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93534);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var rsg_components_Context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(58575);
/* harmony import */ var react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19487);
















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var PlaygroundAsync = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(PlaygroundAsync, _Component);

  var _super = _createSuper(PlaygroundAsync);

  function PlaygroundAsync(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(this, PlaygroundAsync);

    _this = _super.call(this, props, context);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_this), "componentWillUnmount", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__/* ["default"].prototype.componentWillUnmount */ .Z.prototype.componentWillUnmount);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_this), "handleChange", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__/* ["default"].prototype.handleChange */ .Z.prototype.handleChange);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_this), "handleTabChange", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__/* ["default"].prototype.handleTabChange */ .Z.prototype.handleTabChange);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_this), "getInitialActiveTab", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__/* ["default"].prototype.getInitialActiveTab */ .Z.prototype.getInitialActiveTab);

    react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__/* ["default"].call */ .Z.call((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_this), props, context);
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(PlaygroundAsync, [{
    key: "render",
    value: function render() {
      return react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__/* ["default"].prototype.render.call */ .Z.prototype.render.call(this);
    }
  }]);

  return PlaygroundAsync;
}(react__WEBPACK_IMPORTED_MODULE_14__.Component);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(PlaygroundAsync, "propTypes", _objectSpread(_objectSpread({}, react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__/* ["default"].propTypes */ .Z.propTypes), {}, {
  code: prop_types__WEBPACK_IMPORTED_MODULE_16___default().shape({
    raw: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string.isRequired),
    compiled: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_16___default().shape({
      script: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
      template: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
      style: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string)
    }), (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool)])
  }).isRequired
}));

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(PlaygroundAsync, "contextType", rsg_components_Context__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(PlaygroundAsync, "getDerivedStateFromProps", react_styleguidist_lib_client_rsg_components_Playground_Playground__WEBPACK_IMPORTED_MODULE_18__/* ["default"].getDerivedStateFromProps */ .Z.getDerivedStateFromProps);

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_15__/* .polyfill */ .O)(PlaygroundAsync));

/***/ }),

/***/ 34029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ PreviewWithComponent; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(71603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(85993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(25022);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(63990);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(32818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(79500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(19231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(16085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(72866);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(99385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(27998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(46295);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(81917);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(86590);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(46494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/PlaygroundError/index.js + 1 modules
var PlaygroundError = __webpack_require__(72185);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Context/index.js
var Context = __webpack_require__(58575);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/VsgReactComponent/ReactComponent.js
var ReactComponent = __webpack_require__(45007);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/utils/renderStyleguide.js + 6 modules
var renderStyleguide = __webpack_require__(16154);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(99301);
// EXTERNAL MODULE: ../../packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js + 1 modules
var vue_inbrowser_compiler_utils_esm = __webpack_require__(30251);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/utils/globalComponents.js
var globalComponents = __webpack_require__(31576);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Preview/getVueApp.js


function getVueApp(component, el) {
  return vue_inbrowser_compiler_utils_esm.isVue3 ? function () {
    var app = (0,vue_inbrowser_compiler_utils_esm.createApp)(component);
    (0,globalComponents/* registerGlobalComponents */.V)(app);
    app.mount(el);
    return app;
  }() : new vue_inbrowser_compiler_utils_esm.Vue2(component).$mount(el);
}
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Preview/getCompiledExampleComponent.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












function getCompiledExampleComponent(_ref) {
  var compiledExample = _ref.compiledExample,
      evalInContext = _ref.evalInContext,
      vuex = _ref.vuex,
      component = _ref.component,
      renderRootJsx = _ref.renderRootJsx,
      handleError = _ref.handleError,
      destroyVueInstance = _ref.destroyVueInstance,
      el = _ref.el,
      locallyRegisterComponents = _ref.locallyRegisterComponents;
  var style;
  var previewComponent = {};

  var calcOptions = function calcOptions() {
    try {
      style = compiledExample.style;

      if (compiledExample.script) {
        // compile and execute the script
        // it can be:
        // - a script setting up variables => we set up the data function of previewComponent
        // - a `new Vue()` script that will return a full config object
        previewComponent = evalInContext(compiledExample.script)() || {};

        if (previewComponent.render) {
          var originalRender = previewComponent.render;

          previewComponent.render = function () {
            try {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return originalRender.call.apply(originalRender, [this].concat(args));
            } catch (e) {
              handleError(e);
              return undefined;
            }
          };
        }
      }

      if (compiledExample.template) {
        // if this is a pure template or if we are in hybrid vsg mode,
        // we need to set the template up.
        previewComponent.template = "<div>".concat(compiledExample.template, "</div>");
      }
    } catch (err) {
      handleError(err);
      previewComponent.template = '<div/>';
    }
  };

  calcOptions(); // In case the template is inlined in the script,
  // we need to compile it

  if (previewComponent.template) {
    compiledExample.template = previewComponent.template;
    (0,vue_inbrowser_compiler_utils_esm.compileTemplateForEval)(compiledExample);
    calcOptions();
    delete previewComponent.template;
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

  if (component.module && locallyRegisterComponents && // NOTA: if the components member of the vue config object is
  // already set it should not be changed
  !previewComponent.components) {
    component.displayName = (0,vue_inbrowser_compiler_utils_esm.cleanName)(component.name); // register component locally

    previewComponent.components = (0,defineProperty/* default */.Z)({}, component.displayName, component.module["default"] || component.module);

    if (component.props.subComponents) {
      component.props.subComponents.forEach(function (c) {
        c.displayName = (0,vue_inbrowser_compiler_utils_esm.cleanName)(c.name);
        previewComponent.components[c.displayName] = c.module["default"] || c.module;
      });
    }
  } // then we just have to render the setup previewComponent in the prepared slot


  var rootComponent = renderRootJsx ? renderRootJsx["default"](previewComponent) : {
    render: function render(createElement) {
      return (vue_inbrowser_compiler_utils_esm.isVue3 ? vue_inbrowser_compiler_utils_esm.h : createElement)(previewComponent);
    }
  };

  try {
    destroyVueInstance();
    return {
      app: getVueApp(_objectSpread(_objectSpread({}, extendsComponent), rootComponent), el),
      style: style,
      moduleId: moduleId
    };
  } catch (err) {
    handleError(err);
    return {};
  }
}
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Preview/PreviewAsync.js
















function PreviewAsync_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PreviewAsync_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PreviewAsync_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PreviewAsync_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var PreviewAsync = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(PreviewAsync, _Component);

  var _super = _createSuper(PreviewAsync);

  function PreviewAsync() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, PreviewAsync);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      error: null
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "handleError", function (err) {
      _this.unmountPreview();

      _this.setState({
        error: err.toString()
      });

      console.error(err); // eslint-disable-line no-console
    });

    return _this;
  }

  (0,createClass/* default */.Z)(PreviewAsync, [{
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
      __webpack_require__.e(/* import() | compiler */ 79).then(__webpack_require__.bind(__webpack_require__, 48944)).then(function (_ref) {
        var compile = _ref.compile,
            addScopedStyle = _ref.addScopedStyle;

        try {
          var example = compile(newCode, PreviewAsync_objectSpread(PreviewAsync_objectSpread({}, _this2.context.config.compilerConfig), _this2.context.config.jsxInExamples ? {
            jsx: '__pragma__(h)',
            objectAssign: 'concatenate'
          } : {}));

          _this2.setCompiledPreview(example, addScopedStyle);
        } catch (err) {
          _this2.handleError(err);
        }
      });
    }
  }, {
    key: "setCompiledPreview",
    value: function setCompiledPreview(example, addScopedStyle) {
      var _this3 = this;

      var _this$props = this.props,
          vuex = _this$props.vuex,
          component = _this$props.component,
          renderRootJsx = _this$props.renderRootJsx;
      var el = this.mountNode.children[0];

      if (!el) {
        this.mountNode.innerHTML = ' ';
        this.mountNode.appendChild(document.createElement('div'));
        el = this.mountNode.children[0];
      }

      var _getCompiledExampleCo = getCompiledExampleComponent({
        compiledExample: example,
        evalInContext: this.props.evalInContext,
        vuex: vuex,
        component: component,
        renderRootJsx: renderRootJsx,
        destroyVueInstance: function destroyVueInstance() {
          return _this3.destroyVueInstance();
        },
        handleError: function handleError(e) {
          _this3.handleError(e);
        },
        el: el,
        locallyRegisterComponents: this.context.config.locallyRegisterComponents
      }),
          app = _getCompiledExampleCo.app,
          style = _getCompiledExampleCo.style,
          moduleId = _getCompiledExampleCo.moduleId;

      this.vueInstance = app;

      if (style) {
        addScopedStyle(style, moduleId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var error = this.state.error;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
        ref: function ref(_ref2) {
          return _this4.mountNode = _ref2;
        }
      }, /*#__PURE__*/react.createElement("div", null)), error && /*#__PURE__*/react.createElement(PlaygroundError/* default */.Z, {
        message: error
      }));
    }
  }]);

  return PreviewAsync;
}(react.Component);

(0,defineProperty/* default */.Z)(PreviewAsync, "propTypes", {
  code: prop_types_default().shape({
    raw: (prop_types_default()).string.isRequired,
    compiled: prop_types_default().oneOfType([prop_types_default().shape({
      script: (prop_types_default()).string,
      template: (prop_types_default()).string,
      style: (prop_types_default()).string
    }), (prop_types_default()).bool])
  }).isRequired,
  evalInContext: (prop_types_default()).func.isRequired,
  vuex: (prop_types_default()).object,
  component: (prop_types_default()).object,
  renderRootJsx: (prop_types_default()).object
});

(0,defineProperty/* default */.Z)(PreviewAsync, "contextType", Context/* default */.Z);

function PreviewWithComponent(props) {
  return /*#__PURE__*/react.createElement(renderStyleguide/* RenderJsxContext.Consumer */.e5.Consumer, null, function (renderRootJsx) {
    return /*#__PURE__*/react.createElement(ReactComponent/* DocumentedComponentContext.Consumer */.zt.Consumer, null, function (component) {
      return /*#__PURE__*/react.createElement(PreviewAsync, (0,esm_extends/* default */.Z)({}, props, {
        component: component,
        renderRootJsx: renderRootJsx
      }));
    });
  });
}

/***/ }),

/***/ 97277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ SectionHeading_SectionHeading; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(30039);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Slot/index.js + 1 modules
var Slot = __webpack_require__(46177);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(46295);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Heading/index.js + 1 modules
var Heading = __webpack_require__(76432);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__(83700);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/SectionHeading/SectionHeadingRenderer.js







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
  classes: prop_types_default().objectOf((prop_types_default()).string.isRequired).isRequired,
  children: (prop_types_default()).node,
  toolbar: (prop_types_default()).node,
  id: (prop_types_default()).string.isRequired,
  href: (prop_types_default()).string,
  depth: (prop_types_default()).number.isRequired,
  deprecated: (prop_types_default()).bool,
  parentName: (prop_types_default()).string,
  parentHref: (prop_types_default()).string
};

var SectionHeadingRenderer = function SectionHeadingRenderer(_ref2) {
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
  var sectionNameClasses = (0,clsx_m/* default */.Z)(classes.sectionName, (0,defineProperty/* default */.Z)({}, classes.isDeprecated, deprecated));
  return /*#__PURE__*/react.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react.createElement(Heading/* default */.Z, {
    level: headingLevel,
    id: id
  }, href ? /*#__PURE__*/react.createElement("a", {
    href: href,
    className: sectionNameClasses
  }, children) : /*#__PURE__*/react.createElement("span", {
    className: sectionNameClasses
  }, children), parentName && parentHref && /*#__PURE__*/react.createElement("a", {
    href: parentHref,
    className: classes.parentName
  }, parentName)), /*#__PURE__*/react.createElement("div", {
    className: classes.toolbar
  }, toolbar));
};

SectionHeadingRenderer.propTypes = localPropTypes;
/* harmony default export */ var SectionHeading_SectionHeadingRenderer = ((0,Styled/* default */.Z)(styles)(SectionHeadingRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/SectionHeading/SectionHeading.js


var _excluded = ["slotName", "slotProps", "children", "id"];




var SectionHeading_localPropTypes = {
  children: (prop_types_default()).node,
  id: (prop_types_default()).string.isRequired,
  slotName: (prop_types_default()).string.isRequired,
  slotProps: prop_types_default().shape({
    isolated: (prop_types_default()).bool.isRequired,
    parentComponent: prop_types_default().shape({
      href: (prop_types_default()).string.isRequired,
      visibleName: (prop_types_default()).string.isRequired
    })
  }).isRequired,
  href: (prop_types_default()).string,
  depth: (prop_types_default()).number.isRequired,
  deprecated: (prop_types_default()).bool,
  pagePerSection: (prop_types_default()).bool
};

var SectionHeading = function SectionHeading(_ref) {
  var slotName = _ref.slotName,
      slotProps = _ref.slotProps,
      children = _ref.children,
      id = _ref.id,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var parentHref = slotProps.parentComponent && slotProps.parentComponent.href;
  return /*#__PURE__*/react.createElement(SectionHeading_SectionHeadingRenderer, (0,esm_extends/* default */.Z)({
    toolbar: slotProps.parentComponent ? null : /*#__PURE__*/react.createElement(Slot/* default */.Z, {
      name: slotName,
      props: slotProps
    }),
    id: id
  }, rest, {
    parentName: slotProps.parentComponent && slotProps.parentComponent.visibleName,
    parentHref: parentHref
  }), children);
};

SectionHeading.propTypes = SectionHeading_localPropTypes;
/* harmony default export */ var SectionHeading_SectionHeading = (SectionHeading);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/SectionHeading/index.js


/***/ }),

/***/ 55837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ Usage; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(85993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(45650);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(33261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(99301);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12269);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(81917);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(88739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(56378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(83364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__(83700);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Argument/index.js + 1 modules
var Argument = __webpack_require__(39569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Heading/index.js + 1 modules
var Heading = __webpack_require__(76432);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Arguments/ArgumentsRenderer.js








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
var ArgumentsRenderer = function ArgumentsRenderer(_ref2) {
  var classes = _ref2.classes,
      args = _ref2.args,
      heading = _ref2.heading;

  if (args.length === 0) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, heading && /*#__PURE__*/react.createElement("div", {
    className: classes.headingWrapper
  }, /*#__PURE__*/react.createElement(Heading/* default */.Z, {
    level: 5
  }, "Arguments")), args.map(function (arg) {
    return /*#__PURE__*/react.createElement(Argument/* default */.ZP, (0,esm_extends/* default */.Z)({
      key: arg.name
    }, arg));
  }));
};
ArgumentsRenderer.propTypes = {
  classes: prop_types_default().objectOf((prop_types_default()).string.isRequired).isRequired,
  args: prop_types_default().arrayOf(prop_types_default().shape({
    name: (prop_types_default()).string.isRequired,
    type: (prop_types_default()).object,
    description: (prop_types_default()).string
  }).isRequired).isRequired,
  heading: (prop_types_default()).bool
};
/* harmony default export */ var Arguments_ArgumentsRenderer = ((0,Styled/* default */.Z)(styles)(ArgumentsRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Arguments/index.js

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Code/index.js + 1 modules
var Code = __webpack_require__(7023);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/JsDoc/index.js + 3 modules
var JsDoc = __webpack_require__(56938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__(28439);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Name/index.js + 1 modules
var Name = __webpack_require__(4041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__(44062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Table/TableRenderer.js






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
  return /*#__PURE__*/react.createElement("table", {
    className: classes.table
  }, /*#__PURE__*/react.createElement("thead", {
    className: classes.tableHead
  }, /*#__PURE__*/react.createElement("tr", null, columns.map(function (_ref3) {
    var caption = _ref3.caption;
    return /*#__PURE__*/react.createElement("th", {
      key: caption,
      className: classes.cellHeading
    }, caption);
  }))), /*#__PURE__*/react.createElement("tbody", null, rows.map(function (row) {
    return /*#__PURE__*/react.createElement("tr", {
      key: getRowKey(row),
      className: classes.dataRow
    }, columns.map(function (_ref4, index) {
      var render = _ref4.render,
          className = _ref4.className;
      return /*#__PURE__*/react.createElement("td", {
        key: index,
        className: classnames_default()(classes.cell, className)
      }, render(row));
    }));
  })));
}
TableRenderer.propTypes = {
  classes: (prop_types_default()).object.isRequired,
  columns: prop_types_default().arrayOf(prop_types_default().shape({
    caption: (prop_types_default()).string.isRequired,
    render: (prop_types_default()).func.isRequired
  })).isRequired,
  rows: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  getRowKey: (prop_types_default()).func.isRequired
};
/* harmony default export */ var Table_TableRenderer = ((0,Styled/* default */.Z)(TableRenderer_styles)(TableRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Table/index.js

;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/OriginColumn/OriginColumn.js




function renderOrigin(prop) {
  var ext = prop["extends"],
      mixin = prop.mixin;
  return ext ? /*#__PURE__*/react.createElement("span", {
    title: "extends: ".concat(ext.path)
  }, "E: ", ext.name) : mixin && /*#__PURE__*/react.createElement("span", {
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
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/OriginColumn/index.js

;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/utils/propStyles.js
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27405);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(27763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Text/index.js + 1 modules
var Text = __webpack_require__(95223);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(25022);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(63990);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(32818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(79500);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Props/util.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












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
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Props/renderDefault.js






 // to keep showing those vluei insead of empty, we treat them separaty

var defaultValueBlacklist = ['null', 'undefined', "''", '""'];
function renderDefaultHoc(classes) {
  return function renderDefault(prop) {
    return /*#__PURE__*/react.createElement("p", {
      className: classes["default"]
    }, function () {
      // Workaround for issue https://github.com/reactjs/react-docgen/issues/221
      // If prop has defaultValue it can not be required
      if (prop.defaultValue) {
        if (prop.type) {
          var propName = prop.type.name;

          if (defaultValueBlacklist.indexOf(prop.defaultValue.value) > -1) {
            return /*#__PURE__*/react.createElement(Code/* default */.Z, null, prop.defaultValue.value);
          } else if (propName === 'func' || propName === 'function' || /^\(\s*\)\s*=>\s*\(?\s*\{(?!^(?:\s*\}\s*\)?))/.test(prop.defaultValue.value)) {
            return /*#__PURE__*/react.createElement(Text/* default */.Z, {
              size: "small",
              color: "light",
              underlined: true,
              title: showSpaces(unquote(prop.defaultValue.value))
            }, "Function");
          }
        }

        return /*#__PURE__*/react.createElement(Code/* default */.Z, null, showSpaces(unquote(prop.defaultValue.value.replace(/^\(\s*\)\s*=>\s*/, ''))));
      }

      return '-';
    }());
  };
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Type/index.js + 1 modules
var Type = __webpack_require__(20908);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(5334);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/utils/renderTypeString.js




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
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Props/renderType.js



function renderTypeBox(prop, classes) {
  return /*#__PURE__*/react.createElement(Type/* default */.Z, null, /*#__PURE__*/react.createElement("pre", null, renderTypeString(prop.type), prop.required ? /*#__PURE__*/react.createElement("span", {
    className: classes.required
  }, " - required") : null));
}
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Props/PropsRenderer.js


























function renderDescription(classes) {
  return function renderDesc(prop) {
    var description = prop.description,
        _prop$tags = prop.tags,
        tags = _prop$tags === void 0 ? {} : _prop$tags;
    var args = [].concat((0,toConsumableArray/* default */.Z)(tags.arg || []), (0,toConsumableArray/* default */.Z)(tags.argument || []), (0,toConsumableArray/* default */.Z)(tags.param || []));
    var returnDocumentation = tags["return"] && tags["return"][0] || tags.returns && tags.returns[0];
    return /*#__PURE__*/react.createElement("div", null, description && /*#__PURE__*/react.createElement("div", {
      className: classes.descriptionWrapper
    }, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
      text: description
    })), /*#__PURE__*/react.createElement(JsDoc/* default */.Z, tags), args.length > 0 && /*#__PURE__*/react.createElement(Arguments_ArgumentsRenderer, {
      args: args,
      heading: true
    }), returnDocumentation && /*#__PURE__*/react.createElement(Argument/* default */.ZP, (0,esm_extends/* default */.Z)({}, returnDocumentation, {
      returns: true
    })), /*#__PURE__*/react.createElement("div", {
      className: classes.type
    }, renderTypeBox(prop, classes)));
  };
}

function renderName(prop) {
  var name = prop.name,
      _prop$tags2 = prop.tags,
      tags = _prop$tags2 === void 0 ? {} : _prop$tags2;
  return /*#__PURE__*/react.createElement(Name/* default */.Z, {
    deprecated: !!tags.deprecated
  }, name);
}

function getRowKey(row) {
  return row.name;
}

function renderValuesHoc(classes) {
  return function renderValues(prop) {
    return /*#__PURE__*/react.createElement("p", {
      className: classes.values
    }, prop.values ? prop.values.map(function (v) {
      return /*#__PURE__*/react.createElement(Code/* default */.Z, {
        key: v
      }, v);
    }).reduce(function (prev, curr) {
      return [prev, ', ', curr];
    }) : '-');
  };
}

var columns = function columns(props, classes) {
  return [{
    caption: 'Prop name',
    render: renderName,
    className: classes.name
  }, {
    caption: 'Description',
    render: renderDescription(classes),
    className: classes.description
  }].concat((0,toConsumableArray/* default */.Z)(props.some(function (p) {
    return p.values;
  }) ? [{
    caption: 'Values',
    render: renderValuesHoc(classes)
  }] : []), [{
    caption: 'Default',
    render: renderDefaultHoc(classes)
  }], (0,toConsumableArray/* default */.Z)(getOriginColumn(props)));
};

function PropsRenderer(_ref) {
  var props = _ref.props,
      classes = _ref.classes;
  return /*#__PURE__*/react.createElement(Table_TableRenderer, {
    columns: columns(props, classes),
    rows: props,
    getRowKey: getRowKey
  });
}

PropsRenderer.propTypes = {
  props: (prop_types_default()).array.isRequired,
  classes: (prop_types_default()).object.isRequired
};
/* harmony default export */ var Props_PropsRenderer = ((0,Styled/* default */.Z)(propStyles)(PropsRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Props/index.js

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(46295);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Methods/MethodsRenderer.js










function MethodsRenderer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MethodsRenderer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MethodsRenderer_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MethodsRenderer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



















var MethodsRenderer_getRowKey = function getRowKey(row) {
  return row.name;
};

function renderMethodName(_ref) {
  var name = _ref.name,
      _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? {} : _ref$tags;
  return /*#__PURE__*/react.createElement(Name/* default */.Z, {
    deprecated: !!tags.deprecated
  }, "".concat(name, "()"));
}

function MethodsRenderer_renderDescription(myClasses) {
  return function renderDesc(_ref2) {
    var description = _ref2.description,
        returns = _ref2.returns,
        _ref2$tags = _ref2.tags,
        tags = _ref2$tags === void 0 ? {} : _ref2$tags;
    return /*#__PURE__*/react.createElement(react.Fragment, null, description && /*#__PURE__*/react.createElement("div", {
      className: myClasses.descriptionWrapper
    }, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
      text: description
    })), returns && /*#__PURE__*/react.createElement("div", null, "Returns:", ' ', /*#__PURE__*/react.createElement(Argument/* default */.ZP, (0,esm_extends/* default */.Z)({
      name: ""
    }, returns, {
      type: returns.type ? {
        name: renderTypeString(returns.type)
      } : undefined,
      description: returns.description
    }))), /*#__PURE__*/react.createElement(JsDoc/* default */.Z, tags));
  };
}

function renderParameters(_ref3) {
  var _ref3$params = _ref3.params,
      params = _ref3$params === void 0 ? [] : _ref3$params;
  return /*#__PURE__*/react.createElement(Arguments_ArgumentsRenderer, {
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
  }].concat((0,toConsumableArray/* default */.Z)(getOriginColumn(methods)));
};
var MethodsRenderer = function MethodsRenderer(_ref4) {
  var methods = _ref4.methods,
      classes = _ref4.classes;
  return /*#__PURE__*/react.createElement(Table_TableRenderer, {
    columns: MethodsRenderer_columns(methods, classes),
    rows: methods,
    getRowKey: MethodsRenderer_getRowKey
  });
};
MethodsRenderer.propTypes = {
  classes: prop_types_default().objectOf((prop_types_default()).string.isRequired).isRequired,
  methods: (prop_types_default()).array.isRequired
};
/* harmony default export */ var Methods_MethodsRenderer = ((0,Styled/* default */.Z)(propStyles)(MethodsRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Methods/index.js

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js
var map = __webpack_require__(69107);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Events/EventsRenderer.js








function EventsRenderer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EventsRenderer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EventsRenderer_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EventsRenderer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















function EventsRenderer_renderDescription(myClasses) {
  return function renderDesc(prop) {
    var description = prop.description,
        _prop$tags = prop.tags,
        tags = _prop$tags === void 0 ? {} : _prop$tags;
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      className: myClasses.descriptionWrapper
    }, description && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
      text: description
    })), /*#__PURE__*/react.createElement(JsDoc/* default */.Z, tags));
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

  return properties && properties.length > 0 ? /*#__PURE__*/react.createElement(Arguments_ArgumentsRenderer, {
    args: properties
  }) : null;
}

function EventsRenderer_renderName(prop) {
  var name = prop.name,
      _prop$tags2 = prop.tags,
      tags = _prop$tags2 === void 0 ? {} : _prop$tags2;
  return /*#__PURE__*/react.createElement(Name/* default */.Z, {
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
  }].concat((0,toConsumableArray/* default */.Z)(events.some(function (p) {
    return p.properties || p.type;
  }) ? [{
    caption: 'Properties',
    render: renderProperties
  }] : []), (0,toConsumableArray/* default */.Z)(getOriginColumn(events)));
};

function EventsRenderer(_ref) {
  var props = _ref.props,
      classes = _ref.classes;
  var evts = propsToArray(props);
  return /*#__PURE__*/react.createElement(Table_TableRenderer, {
    columns: EventsRenderer_columns(evts, classes),
    rows: evts,
    getRowKey: EventsRenderer_getRowKey
  });
}

EventsRenderer.propTypes = {
  props: (prop_types_default()).object.isRequired,
  classes: (prop_types_default()).object.isRequired
};
/* harmony default export */ var Events_EventsRenderer = ((0,Styled/* default */.Z)(propStyles)(EventsRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Events/index.js

;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/SlotsTable/SlotsTableRenderer.js








function SlotsTableRenderer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SlotsTableRenderer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SlotsTableRenderer_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SlotsTableRenderer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








/* eslint-disable react/prop-types */











function SlotsTableRenderer_renderDescription(myClasses) {
  return function renderDesc(prop) {
    var description = prop.description;
    return /*#__PURE__*/react.createElement("div", {
      className: myClasses.descriptionWrapper
    }, description ? /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
      text: description
    }) : '-');
  };
}

function SlotsTableRenderer_renderName(prop) {
  var name = prop.name,
      _prop$tags = prop.tags,
      tags = _prop$tags === void 0 ? {} : _prop$tags;
  return /*#__PURE__*/react.createElement(Name/* default */.Z, {
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
  return bindings && bindings.length ? /*#__PURE__*/react.createElement(Arguments_ArgumentsRenderer, {
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
  }].concat((0,toConsumableArray/* default */.Z)(slots.some(function (s) {
    return s.bindings;
  }) ? [{
    caption: 'Bindings',
    render: renderBindings
  }] : []), (0,toConsumableArray/* default */.Z)(getOriginColumn(slots)));
};

function SlotsTableRenderer(_ref2) {
  var slots = _ref2.props,
      classes = _ref2.classes;
  var slotsArray = SlotsTableRenderer_propsToArray(slots);
  return /*#__PURE__*/react.createElement(Table_TableRenderer, {
    columns: SlotsTableRenderer_columns(slotsArray, classes),
    rows: slotsArray,
    getRowKey: SlotsTableRenderer_getRowKey
  });
}

SlotsTableRenderer.propTypes = {
  props: (prop_types_default()).object.isRequired,
  classes: (prop_types_default()).object.isRequired
};
/* harmony default export */ var SlotsTable_SlotsTableRenderer = ((0,Styled/* default */.Z)(propStyles)(SlotsTableRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/SlotsTable/index.js

;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Usage/Usage.js







function Usage(_ref) {
  var _ref$props = _ref.props,
      props = _ref$props.props,
      methods = _ref$props.methods,
      events = _ref$props.events,
      slots = _ref$props.slots;
  var slotsNode;

  if (slots && Object.keys(slots).length > 0) {
    slotsNode = slots && /*#__PURE__*/react.createElement(SlotsTable_SlotsTableRenderer, {
      props: slots
    });
  }

  var propsNode = props && /*#__PURE__*/react.createElement(Props_PropsRenderer, {
    props: props
  });
  var eventsNode;

  if (events && Object.keys(events).length > 0) {
    eventsNode = events && /*#__PURE__*/react.createElement(Events_EventsRenderer, {
      props: events
    });
  }

  var methodsNode = methods && methods.length > 0 && /*#__PURE__*/react.createElement(Methods_MethodsRenderer, {
    methods: methods
  });

  if (!propsNode && !methodsNode && !slotsNode && !eventsNode) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", null, propsNode, methodsNode, eventsNode, slotsNode);
}
Usage.propTypes = {
  props: prop_types_default().shape({
    props: (prop_types_default()).array,
    methods: (prop_types_default()).array,
    events: (prop_types_default()).object,
    slots: (prop_types_default()).object
  }).isRequired
};
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Usage/index.js


/***/ }),

/***/ 45007:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zt": function() { return /* binding */ DocumentedComponentContext; }
/* harmony export */ });
/* unused harmony export VsgReactComponent */
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81917);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71603);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85993);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5448);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25022);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63990);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32818);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79500);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(13937);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19231);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(16085);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72866);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99385);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27998);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46295);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22683);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(83364);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52983);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var rsg_components_Styled__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(83700);
/* harmony import */ var rsg_components_Context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(58575);
/* harmony import */ var react_styleguidist_lib_client_rsg_components_ReactComponent_ReactComponent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(44562);
/* harmony import */ var react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(47844);
















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var FinalRsgReactComponent = react_styleguidist_lib_client_rsg_components_ReactComponent_ReactComponent__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z;

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

var DocumentedComponentContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createContext({});
var VsgReactComponent = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(VsgReactComponent, _Component);

  var _super = _createSuper(VsgReactComponent);

  function VsgReactComponent() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(this, VsgReactComponent);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(VsgReactComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _ref2 = this.context,
          pagePerSection = _ref2.config.pagePerSection;
      var _this$props = this.props,
          component = _this$props.component,
          classes = _this$props.classes;

      var getFinalUrl = function getFinalUrl(slug, depth) {
        return pagePerSection ? (0,react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)({
          slug: slug,
          useSlugAsIdParam: depth !== 1,
          takeHash: true
        }) : (0,react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)({
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(DocumentedComponentContext.Provider, {
        value: component
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(FinalRsgReactComponent, this.props)), component.subComponents ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: classes.subComponents
      }, component.subComponents.map(function (c, i) {
        c.parentComponent = {
          href: parentHref,
          visibleName: component.visibleName
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(DocumentedComponentContext.Provider, {
          key: c.props && c.props.displayName || i,
          value: c
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(FinalRsgReactComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)({}, _this.props, {
          component: c,
          depth: _this.props.depth + 1
        })));
      })) : null);
    }
  }]);

  return VsgReactComponent;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(VsgReactComponent, "propTypes", _objectSpread(_objectSpread({}, react_styleguidist_lib_client_rsg_components_ReactComponent_ReactComponent__WEBPACK_IMPORTED_MODULE_19__/* ["default"].propTypes */ .Z.propTypes), {}, {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_16___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_16___default().string.isRequired)).isRequired
}));

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(VsgReactComponent, "contextType", rsg_components_Context__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z);

/* harmony default export */ __webpack_exports__["ZP"] = ((0,rsg_components_Styled__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(styles)(VsgReactComponent));

/***/ }),

/***/ 22386:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ VsgStyleGuide_StyleGuideRenderer; }
});

// UNUSED EXPORTS: StyleGuideRenderer

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(46295);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__(44062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Logo/index.js + 1 modules
var Logo = __webpack_require__(37285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__(28439);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__(83700);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/StyleguideFooter/StyleguideFooterRenderer.js






var styles = function styles(_ref) {
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

var StyleguideFooterRenderer = function StyleguideFooterRenderer(_ref2) {
  var classes = _ref2.classes,
      homepageUrl = _ref2.homepageUrl;
  return /*#__PURE__*/react.createElement("footer", {
    className: classes.root
  }, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    text: "Generated with [Vue Styleguidist](".concat(homepageUrl, ")")
  }));
};
StyleguideFooterRenderer.propTypes = {
  classes: prop_types_default().objectOf((prop_types_default()).string.isRequired).isRequired,
  homepageUrl: (prop_types_default()).string.isRequired
};
/* harmony default export */ var StyleguideFooter_StyleguideFooterRenderer = ((0,Styled/* default */.Z)(styles)(StyleguideFooterRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/StyleguideFooter/index.js

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Ribbon/index.js + 2 modules
var Ribbon = __webpack_require__(80735);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Version/index.js + 1 modules
var Version = __webpack_require__(98706);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/scripts/consts.js
var consts = __webpack_require__(29648);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/VsgStyleGuide/StyleGuideRenderer.js












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
    hasSidebar: (0,defineProperty/* default */.Z)({
      paddingLeft: sidebarWidth
    }, mq.small, {
      paddingLeft: 0
    }),
    content: (_content = {
      maxWidth: maxWidth,
      padding: [[space[2], space[4]]],
      margin: [[0, 'auto']]
    }, (0,defineProperty/* default */.Z)(_content, mq.small, {
      padding: space[2]
    }), (0,defineProperty/* default */.Z)(_content, "display", 'block'), _content),
    sidebar: (0,defineProperty/* default */.Z)({
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
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(classes.root, hasSidebar && classes.hasSidebar)
  }, /*#__PURE__*/react.createElement("main", {
    className: classes.content
  }, children, /*#__PURE__*/react.createElement(StyleguideFooter_StyleguideFooterRenderer, {
    homepageUrl: consts/* default.HOMEPAGE */.Z.HOMEPAGE
  })), hasSidebar && /*#__PURE__*/react.createElement("div", {
    className: classes.sidebar
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.logo
  }, /*#__PURE__*/react.createElement(Logo/* default */.Z, null, title), version && /*#__PURE__*/react.createElement(Version/* default */.Z, null, version)), toc), /*#__PURE__*/react.createElement(Ribbon/* default */.Z, null));
}
StyleGuideRenderer.propTypes = {
  classes: (prop_types_default()).object.isRequired,
  title: (prop_types_default()).string.isRequired,
  version: (prop_types_default()).string,
  homepageUrl: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).node.isRequired,
  toc: (prop_types_default()).node.isRequired,
  hasSidebar: (prop_types_default()).bool
};
/* harmony default export */ var VsgStyleGuide_StyleGuideRenderer = ((0,Styled/* default */.Z)(StyleGuideRenderer_styles)(StyleGuideRenderer));

/***/ }),

/***/ 76348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ Welcome_WelcomeRenderer; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(5334);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(83364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Markdown/index.js + 23 modules
var Markdown = __webpack_require__(28439);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 2 modules
var Styled = __webpack_require__(83700);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/scripts/consts.js
var consts = __webpack_require__(29648);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Welcome/WelcomeRenderer.js









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
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    text: "\n# Welcome to Vue Styleguidist!\n\n**We couldn\u2019t find any components** using these patterns:\n\n".concat(patterns.map(function (p) {
      return "- `".concat(p, "`");
    }).join('\n'), "\n\nCreate **styleguide.config.js** file in your project root directory like this:\n\n    module.exports = {\n      components: 'src/components/**/*.vue'\n    };\n\nRead more in the [locating components guide](").concat(consts/* default.DOCS_COMPONENTS */.Z.DOCS_COMPONENTS, ").\n\t\t\t\t")
  }));
}
WelcomeRenderer.propTypes = {
  classes: (prop_types_default()).object.isRequired,
  patterns: (prop_types_default()).array.isRequired
};
/* harmony default export */ var Welcome_WelcomeRenderer = ((0,Styled/* default */.Z)(styles)(WelcomeRenderer));
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Welcome/index.js


/***/ }),

/***/ 29949:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52983);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rsg_components_TabButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45822);




var CodeTabButton = function CodeTabButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rsg_components_TabButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, props, "View Code");
};

CodeTabButton.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ __webpack_exports__["Z"] = (CodeTabButton);

/***/ }),

/***/ 38929:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99301);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22683);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52983);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38837);
/* harmony import */ var rsg_components_ToolbarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90241);
/* harmony import */ var react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47844);








var IsolateButton = function IsolateButton(_ref) {
  var name = _ref.name,
      example = _ref.example,
      isolated = _ref.isolated;
  var testID = example ? "".concat(name, "-").concat(example, "-isolate-button") : "".concat(name, "-isolate-button");
  return isolated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(rsg_components_ToolbarButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    href: (0,react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
      anchor: true,
      slug: name.toLowerCase()
    }),
    title: "Show all components",
    testId: testID
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_6__/* .MdFullscreenExit */ .I_n, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(rsg_components_ToolbarButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    href: (0,react_styleguidist_lib_client_utils_getUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
      name: name,
      example: example,
      isolated: true
    }),
    title: "Open isolated",
    testId: testID
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_6__/* .MdFullscreen */ .Nms, null));
};

IsolateButton.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  example: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  isolated: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ __webpack_exports__["Z"] = (IsolateButton);

/***/ }),

/***/ 63539:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22683);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5334);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82203);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52983);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rsg_components_TabButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45822);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29787);
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
  return showButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(rsg_components_TabButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, props, words.length === 1 ? words[0] : "".concat(words.slice(0, -1).join(', '), " & ").concat(words[words.length - 1])) : null;
};

UsageTabButton.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  props: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    props: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
    methods: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
  }).isRequired,
  active: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
/* harmony default export */ __webpack_exports__["Z"] = (UsageTabButton);

/***/ }),

/***/ 31576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ addGlobalComponentToRegistration; },
/* harmony export */   "V": function() { return /* binding */ registerGlobalComponents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98950);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81917);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32818);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64784);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);




var globalComponents = {};
function registerGlobalComponents(app) {
  Object.entries(globalComponents).forEach(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_ref, 2),
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

/***/ 16154:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e5": function() { return /* binding */ RenderJsxContext; },
  "ZP": function() { return /* binding */ renderStyleguide; }
});

// UNUSED EXPORTS: VueComponentMapContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(81917);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(32818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27405);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(31429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/EditorPrecompiled/index.js + 2 modules
var EditorPrecompiled = __webpack_require__(95158);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/Usage/index.js + 20 modules
var Usage = __webpack_require__(55837);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/slots/IsolateButton.js
var IsolateButton = __webpack_require__(38929);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/slots/CodeTabButton.js
var CodeTabButton = __webpack_require__(29949);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/slots/UsageTabButton.js
var UsageTabButton = __webpack_require__(63539);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/rsg-components/slots/index.js





var EXAMPLE_TAB_CODE_EDITOR = 'rsg-code-editor';
var DOCS_TAB_USAGE = 'rsg-usage';
var toolbar = [IsolateButton/* default */.Z]; // eslint-disable-next-line @typescript-eslint/no-unused-vars

/* harmony default export */ var slots = (function (config) {
  return {
    sectionToolbar: toolbar,
    componentToolbar: toolbar,
    exampleToolbar: toolbar,
    exampleTabButtons: [{
      id: EXAMPLE_TAB_CODE_EDITOR,
      render: CodeTabButton/* default */.Z
    }],
    exampleTabs: [{
      id: EXAMPLE_TAB_CODE_EDITOR,
      render: EditorPrecompiled/* default */.Z
    }],
    docsTabButtons: [{
      id: DOCS_TAB_USAGE,
      render: UsageTabButton/* default */.Z
    }],
    docsTabs: [{
      id: DOCS_TAB_USAGE,
      render: Usage/* default */.Z
    }]
  };
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/rsg-components/StyleGuide/index.js + 24 modules
var StyleGuide = __webpack_require__(10076);
// EXTERNAL MODULE: ../../node_modules/.pnpm/hash-sum@1.0.2/node_modules/hash-sum/hash-sum.js
var hash_sum = __webpack_require__(18811);
var hash_sum_default = /*#__PURE__*/__webpack_require__.n(hash_sum);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/utils/getRouteData.js + 6 modules
var getRouteData = __webpack_require__(39995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/utils/getPageTitle.js
var getPageTitle = __webpack_require__(32960);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(45650);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(56378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22683);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/utils/getComponentsFromSections.js





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

    return [].concat((0,toConsumableArray/* default */.Z)(allComponent), (0,toConsumableArray/* default */.Z)(sectionComponents), (0,toConsumableArray/* default */.Z)(subSectionComponents));
  }, []);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(99301);
// EXTERNAL MODULE: ../../packages/vue-inbrowser-compiler-utils/lib/vue-inbrowser-compiler-utils.esm.js + 1 modules
var vue_inbrowser_compiler_utils_esm = __webpack_require__(30251);
// EXTERNAL MODULE: ../../packages/vue-styleguidist/lib/client/utils/globalComponents.js
var globalComponents = __webpack_require__(31576);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/utils/globalizeComponent.js






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
    if (vue_inbrowser_compiler_utils_esm.isVue3) {
      (0,globalComponents/* addGlobalComponentToRegistration */.R)((0,vue_inbrowser_compiler_utils_esm.cleanName)(displayName), configComponent);
    } else {
      // @ts-ignore this is to keep vue 2 compatibility
      vue_inbrowser_compiler_utils_esm.Vue2.component((0,vue_inbrowser_compiler_utils_esm.cleanName)(displayName), configComponent);
    }
  }

  if (component.subComponents) {
    component.subComponents.forEach(function (c) {
      return globalizeComponent(c);
    });
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(46295);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(83364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(85993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(25022);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(63990);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.9.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(79500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-styleguidist@11.1.6_g7suj3gxcxhpjlureigxs2xjaq/node_modules/react-styleguidist/lib/client/utils/getUrl.js
var getUrl = __webpack_require__(47844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatten.js
var flatten = __webpack_require__(62923);
var flatten_default = /*#__PURE__*/__webpack_require__.n(flatten);
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/utils/compileExamples.js


/* harmony default export */ function compileExamples(examples) {
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
}
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/utils/processComponents.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










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
      href: component.href || (0,getUrl/* default */.Z)({
        name: component.props.displayName,
        slug: component.slug,
        anchor: !useRouterLinks,
        hashPath: useRouterLinks ? hashPath : false,
        useSlugAsIdParam: useRouterLinks ? useHashId : false
      }),
      props: _objectSpread(_objectSpread({}, props), {}, {
        // Append @example doclet to all examples
        examples: [].concat((0,toConsumableArray/* default */.Z)(props.examples || []), (0,toConsumableArray/* default */.Z)(flatten_default()(props.example)))
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
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/utils/processSections.js



function processSections_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function processSections_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? processSections_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : processSections_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















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
      hashPath: [].concat((0,toConsumableArray/* default */.Z)(hashPath), [section.name ? section.name : '-'])
    };
    compileExamples(section.content || []);
    var _section$components = section.components,
        components = _section$components === void 0 ? [] : _section$components,
        sectionsInside = section.sections;
    var href = section.href || (0,getUrl/* default */.Z)({
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
;// CONCATENATED MODULE: ../../packages/vue-styleguidist/lib/client/utils/renderStyleguide.js













var RenderJsxContext = /*#__PURE__*/react.createContext( /*#__PURE__*/react.createElement("div", null));
var VueComponentMapContext = /*#__PURE__*/react.createContext({});
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

  var _getRouteData = (0,getRouteData/* default */.Z)(allSections, loc.hash, pagePerSection),
      sections = _getRouteData.sections,
      displayMode = _getRouteData.displayMode; // Update page title


  doc.title = (0,getPageTitle/* default */.Z)(sections, title || '', displayMode); // If the current hash location was set to just `/` (e.g. when navigating back from isolated view to overview)
  // replace the URL with one without hash, to present the user with a single address of the overview screen

  if (loc.hash === '#/') {
    var url = loc.pathname + loc.search;
    hist.replaceState('', doc.title, url);
  }

  return /*#__PURE__*/react.createElement(RenderJsxContext.Provider, {
    value: styleguide.renderRootJsx
  }, /*#__PURE__*/react.createElement(StyleGuide/* default */.Z, {
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

/***/ 30050:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


if (false) {}
var requireMap = {};
var requireInRuntimeBase = __webpack_require__(37526);
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(18189);
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
            'script': '\n\nconst comp = (function() {;return {data:function(){return {};}}})()\ncomp.render = function() {with(this){return _c(\'app-button\',{attrs:{"color":"orange"}},[_v("Push Me")])}}\n\nreturn comp',
            'style': void 0,
            'raw': {
                'script': ';return {data:function(){return {};}}',
                'style': void 0,
                'template': '<app-button color="orange">Push Me</app-button>'
            }
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
            'script': '\n\nconst comp = (function() {;return {data:function(){return {};}}})()\ncomp.render = function() {with(this){return _c(\'app-button\',{attrs:{"color":"pink","background":"blue"}},[_v("\\n\\tUgly button\\n")])}}\n\nreturn comp',
            'style': void 0,
            'raw': {
                'script': ';return {data:function(){return {};}}',
                'style': void 0,
                'template': '<app-button color="pink" background="blue">\n\tUgly button\n</app-button>'
            }
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
            'script': '\n\nconst comp = (function() {\n\n\n\n\n\n\n\nreturn {}\n\n})()\ncomp.render = function() {with(this){return _c(\'div\',{staticClass:"LoadingPickle-wrap"},[_c(\'app-button\',[_v("Loading...")])],1)}}\n\nreturn comp',
            'style': '.LoadingPickle-wrap {\n\tpadding: 20px;\n\tbackground-color: red;\n}',
            'raw': {
                'template': '\n\t<div class="LoadingPickle-wrap">\n\t\t<app-button>Loading...</app-button>\n\t</div>\n',
                'script': '\n\n\n\n\n\n\n\nreturn {}\n\n',
                'style': '.LoadingPickle-wrap {\n\tpadding: 20px;\n\tbackground-color: red;\n}'
            }
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
            'script': '\n\nconst comp = (function() {;return {data:function(){return {};}}})()\ncomp.render = function() {with(this){return _c(\'app-button\',[_v("\\n\\tText with "),_c(\'b\',[_v("bold")])])}}\n\nreturn comp',
            'style': void 0,
            'raw': {
                'script': ';return {data:function(){return {};}}',
                'style': void 0,
                'template': '<app-button>\n\tText with <b>bold</b>\n</app-button>'
            }
        }
    }
]

/***/ }),

/***/ 71996:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


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
                    'module': __webpack_require__(60073),
                    'props': __webpack_require__(39181),
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

/***/ 18189:
/***/ (function(module) {

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

/***/ }),

/***/ 37526:
/***/ (function(module) {

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

/***/ 94410:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = _default;

var _vueInbrowserCompilerUtils = __webpack_require__(30251);

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

/***/ 39181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


		if (false) {}

		module.exports = {
    'exportName': 'default',
    'displayName': 'app-button',
    'docsBlocks': ['This button is amazing, use it responsibly.\n\n## Examples\n\nOrange button:\n\n```jsx\n<app-button color="orange">Push Me</app-button>\n```\n\nUgly button with pink font and blue background:\n\n```jsx\n<app-button color="pink" background="blue">\n\tUgly button\n</app-button>\n```\n\nwith extra styling\n\n```vue\n<template>\n\t<div class="LoadingPickle-wrap">\n\t\t<app-button>Loading...</app-button>\n\t</div>\n</template>\n\n<script>\nexport default {}\n</script>\n\n<style scoped>\n.LoadingPickle-wrap {\n\tpadding: 20px;\n\tbackground-color: red;\n}\n</style>\n```\n\nButton containing custom tags:\n\n```jsx\n<app-button>\n\tText with <b>bold</b>\n</app-button>\n```'],
    'description': '',
    'tags': {},
    'expose': void 0,
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
    'example': __webpack_require__(30050),
    'examples': null
}
	

/***/ }),

/***/ 29648:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
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
exports.Z = _default;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "build/" + "compiler" + "." + "5e1259f9" + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "vue-styleguidist-example-vuecli3:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue_styleguidist_example_vuecli3"] = self["webpackChunkvue_styleguidist_example_vuecli3"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(14124); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;