(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/lodash/debounce.js
var debounce = __webpack_require__(230);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/react-codemirror2/index.js
var react_codemirror2 = __webpack_require__(966);

// EXTERNAL MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/codemirror/mode/jsx/jsx.js
var jsx = __webpack_require__(967);

// EXTERNAL MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/node_modules/react-styleguidist/lib/client/rsg-components/Styled/index.js + 3 modules
var Styled = __webpack_require__(3);

// CONCATENATED MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/rsg-components/VsgEditor/Editor.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved

__webpack_require__(970); // eslint-disable-next-line import/no-unresolved


__webpack_require__(972);

var UPDATE_DELAY = 10;

var styles = function styles(_ref) {
  var fontFamily = _ref.fontFamily,
      space = _ref.space,
      fontSize = _ref.fontSize;
  return {
    root: {
      '& .CodeMirror': {
        isolate: false,
        fontFamily: fontFamily.monospace,
        height: 'auto',
        padding: [[space[1], space[2]]],
        fontSize: fontSize.small
      },
      '& .CodeMirror pre': {
        isolate: false,
        padding: 0
      },
      '& .CodeMirror-scroll': {
        isolate: false,
        height: 'auto',
        overflowY: 'hidden',
        overflowX: 'auto'
      },
      '& .cm-error': {
        isolate: false,
        background: 'none'
      }
    }
  };
};

var Editor_Editor =
/*#__PURE__*/
function (_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this));

    _defineProperty(_assertThisInitialized(_this), "location", '');

    _this.handleChange = debounce_default()(_this.handleChange.bind(_assertThisInitialized(_this)), UPDATE_DELAY);
    _this.location = document.location.href;
    return _this;
  }

  _createClass(Editor, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var differentLocation = this.location !== document.location.href;

      if ((differentLocation || this.getEditorConfig(nextProps).readOnly) && nextProps.code !== this.props.code) {
        this.location = document.location.href;
        return true;
      }

      return false;
    }
  }, {
    key: "getEditorConfig",
    value: function getEditorConfig(props) {
      return _objectSpread({}, this.context.config.editorConfig, {}, props.editorConfig);
    }
  }, {
    key: "handleChange",
    value: function handleChange(editor, metadata, newCode) {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(newCode);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          code = _this$props.code,
          classes = _this$props.classes;
      return react_default.a.createElement(react_codemirror2["UnControlled"], {
        className: classes.root,
        value: code,
        onChange: this.handleChange,
        options: this.getEditorConfig(this.props)
      });
    }
  }]);

  return Editor;
}(react["Component"]);

_defineProperty(Editor_Editor, "propTypes", {
  code: prop_types_default.a.string.isRequired,
  onChange: prop_types_default.a.func,
  editorConfig: prop_types_default.a.object,
  classes: prop_types_default.a.object.isRequired
});

_defineProperty(Editor_Editor, "contextTypes", {
  config: prop_types_default.a.object.isRequired
});

/* harmony default export */ var VsgEditor_Editor = (Object(Styled["a" /* default */])(styles)(Editor_Editor));
// CONCATENATED MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/rsg-components/EditorPrecompiled/EditorPrecompiled.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/prop-types */


function EditorPrecompiled(props) {
  return react_default.a.createElement(VsgEditor_Editor, _extends({}, props, {
    code: props.code.raw,
    onChange: function onChange(code) {
      return props.onChange({
        raw: code
      });
    }
  }));
}
// CONCATENATED MODULE: /home/travis/build/vue-styleguidist/vue-styleguidist/packages/vue-styleguidist/lib/rsg-components/EditorPrecompiled/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return EditorPrecompiled; });


/***/ })

}]);