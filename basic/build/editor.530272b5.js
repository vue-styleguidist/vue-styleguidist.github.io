(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rsg_components_Styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(214);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(537);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(538);
/* harmony import */ var codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

__webpack_require__(541); // eslint-disable-next-line import/no-unresolved


__webpack_require__(543);

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

var Editor =
/*#__PURE__*/
function (_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this));

    _defineProperty(_assertThisInitialized(_this), "location", '');

    _this.handleChange = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(_this.handleChange.bind(_assertThisInitialized(_this)), UPDATE_DELAY);
    _this.location = document.location.href;
    return _this;
  }

  _createClass(Editor, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var differentLocation = this.location !== document.location.href;
      return !!((differentLocation || this.getEditorConfig(nextProps).readOnly) && nextProps.code !== this.props.code);
    }
  }, {
    key: "getEditorConfig",
    value: function getEditorConfig(props) {
      return _objectSpread({}, this.context.config.editorConfig, props.editorConfig);
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_codemirror2__WEBPACK_IMPORTED_MODULE_4__["UnControlled"], {
        className: classes.root,
        value: code,
        onChange: this.handleChange,
        options: this.getEditorConfig(this.props)
      });
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Editor, "propTypes", {
  code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  editorConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

_defineProperty(Editor, "contextTypes", {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(rsg_components_Styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(styles)(Editor));

/***/ })

}]);