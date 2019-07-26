(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var rewriteImports_1 = __importDefault(__webpack_require__(970));

function transformOneImport(node, code, offset) {
  var start = node.start + offset;
  var end = node.end + offset;
  var statement = code.substring(start, end);
  var transpiledStatement = rewriteImports_1.default(statement, offset);
  code = code.substring(0, start) + transpiledStatement + code.substring(end);
  offset += transpiledStatement.length - statement.length;
  return {
    code: code,
    offset: offset
  };
}

exports.default = transformOneImport;

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var acorn_1 = __webpack_require__(529);

var jsx = __webpack_require__(534);

var extendedParser = acorn_1.Parser.extend(jsx());

function getAst(code) {
  return extendedParser.parse(code, {
    ecmaVersion: 2019,
    sourceType: 'module'
  });
}

exports.default = getAst;

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(170);

__webpack_require__(271);

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PARTS = ['template', 'script'];

function parseComponent(code) {
  var partsRE = PARTS.reduce(function (ret, part) {
    ret[part] = new RegExp("<" + part + "[^>]*>((.|\\n|\\r)+)</" + part + ">", 'g');
    return ret;
  }, {});
  var descriptor = {};
  var partsWithWrapper = {};
  PARTS.forEach(function (part) {
    var res = partsRE[part].exec(code);

    if (res) {
      partsWithWrapper[part] = res[0];
      descriptor[part] = res[1];
    }
  });
  var check = code;
  var i = PARTS.length;

  while (i-- && check.length) {
    var withWrapper = partsWithWrapper[PARTS[i]];

    if (withWrapper) {
      check = check.replace(withWrapper, '').trim();
    }
  }

  var styleRE = /(<style[^>]*>)([^<]+)(<.......)/g;
  var styleFollowUpRE = /()([^<]+)(<.......)/g;
  var styleAnalyzed = '';
  var stylesWithWrapper = [];
  var stylePart = styleRE.exec(check);
  var styleHeader = stylePart ? stylePart[1] : '';
  var styles;

  while (stylePart) {
    styleAnalyzed += stylePart[2];

    if (stylePart[3] === '</style>') {
      if (!styles) {
        styles = [];
      }

      styles.push(styleAnalyzed);
      stylesWithWrapper.push("" + styleHeader + styleAnalyzed + "</style>");
      styleAnalyzed = '';
      styleHeader = '';
      stylePart = styleRE.exec(check);
      styleHeader = stylePart ? stylePart[1] : '';
    } else {
      styleAnalyzed += stylePart[3];
      styleFollowUpRE.lastIndex = styleRE.lastIndex;
      stylePart = styleFollowUpRE.exec(check);
    }
  }

  if (styles) {
    descriptor.styles = styles;
    var i_1 = styles.length;

    while (i_1--) {
      check = check.replace(stylesWithWrapper[i_1], '').trim();
    }
  }

  return check.length ? {} : descriptor;
}

exports.default = parseComponent;

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var parseComponent_1 = __importDefault(__webpack_require__(538));

function isCodeVueSfc(code) {
  var parts = parseComponent_1.default(code);
  return !!parts.script || !!parts.template;
}

exports.default = isCodeVueSfc;

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(527);

__webpack_require__(268);

__webpack_require__(531);

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var buble_1 = __webpack_require__(550);

var walkes_1 = __importDefault(__webpack_require__(535));

var transformOneImport_1 = __importDefault(__webpack_require__(536));

var normalizeSfcComponent_1 = __importStar(__webpack_require__(971));

var isCodeVueSfc_1 = __importDefault(__webpack_require__(539));

var getAst_1 = __importDefault(__webpack_require__(537));

function compileVueCodeForEvalFunction(code, config) {
  if (config === void 0) {
    config = {};
  }

  var nonCompiledComponent = prepareVueCodeForEvalFunction(code, config);
  return __assign({}, nonCompiledComponent, {
    script: buble_1.transform(nonCompiledComponent.script, config).code
  });
}

exports.default = compileVueCodeForEvalFunction;

function prepareVueCodeForEvalFunction(code, config) {
  var style,
      vsgMode = false,
      template;

  if (isCodeVueSfc_1.default(code)) {
    return normalizeSfcComponent_1.default(code);
  }

  if (!/new Vue\(/.test(code)) {
    if (config.jsx) {
      var _a = normalizeSfcComponent_1.parseScriptCode(code),
          preprocessing = _a.preprocessing,
          component = _a.component,
          postprocessing = _a.postprocessing;

      return {
        script: preprocessing + ";\nreturn {" + component + "};\n" + postprocessing
      };
    }

    var findStartTemplateMatch = /^\W*</.test(code) ? {
      index: 0
    } : code.match(/\n[\t ]*</);
    var limitScript = findStartTemplateMatch && findStartTemplateMatch.index !== undefined ? findStartTemplateMatch.index : -1;
    template = limitScript > -1 ? code.slice(limitScript) : undefined;
    code = limitScript > -1 ? code.slice(0, limitScript) : code;
    vsgMode = true;
  }

  var ast = getAst_1.default(code);
  var offset = 0;
  var varNames = [];
  walkes_1.default(ast, __assign({
    ExpressionStatement: function ExpressionStatement(node) {
      if (node.expression.type === 'NewExpression' && node.expression.callee.name === 'Vue') {
        var before = code.slice(0, node.expression.start);
        var optionsNode = node.expression.arguments && node.expression.arguments.length ? node.expression.arguments[0] : undefined;
        var renderIndex = normalizeSfcComponent_1.getRenderFunctionStart(optionsNode);
        var endIndex = optionsNode.end;

        if (renderIndex > 0) {
          code = normalizeSfcComponent_1.insertCreateElementFunction(code.slice(0, renderIndex + 1), code.slice(renderIndex + 1));
          endIndex += normalizeSfcComponent_1.JSX_ADDON_LENGTH;
        }

        var after = optionsNode ? code.slice(optionsNode.start, endIndex) : '';
        code = before + ';return ' + after;
      }
    },
    ImportDeclaration: function ImportDeclaration(node) {
      var ret = transformOneImport_1.default(node, code, offset);
      offset = ret.offset;
      code = ret.code;

      if (vsgMode && node.specifiers) {
        node.specifiers.forEach(function (s) {
          return varNames.push(s.local.name);
        });
      }
    }
  }, vsgMode ? {
    VariableDeclaration: function VariableDeclaration(node) {
      node.declarations.forEach(function (declaration) {
        if (declaration.id.name) {
          varNames.push(declaration.id.name);
        } else if (declaration.id.properties) {
          declaration.id.properties.forEach(function (p) {
            varNames.push(p.value.name);
          });
        }
      });
    },
    FunctionDeclaration: function FunctionDeclaration(node) {
      varNames.push(node.id.name);
    }
  } : {}));

  if (vsgMode) {
    code += ";return {data:function(){return {" + varNames.map(function (varName) {
      return varName + ":" + varName;
    }).join(',') + "};}}";
  }

  return {
    script: code,
    style: style,
    template: template
  };
}

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Binary_Property/ASCII.js": 564,
	"./Binary_Property/ASCII_Hex_Digit.js": 565,
	"./Binary_Property/Alphabetic.js": 566,
	"./Binary_Property/Any.js": 567,
	"./Binary_Property/Assigned.js": 568,
	"./Binary_Property/Bidi_Control.js": 569,
	"./Binary_Property/Bidi_Mirrored.js": 570,
	"./Binary_Property/Case_Ignorable.js": 571,
	"./Binary_Property/Cased.js": 572,
	"./Binary_Property/Changes_When_Casefolded.js": 573,
	"./Binary_Property/Changes_When_Casemapped.js": 574,
	"./Binary_Property/Changes_When_Lowercased.js": 575,
	"./Binary_Property/Changes_When_NFKC_Casefolded.js": 576,
	"./Binary_Property/Changes_When_Titlecased.js": 577,
	"./Binary_Property/Changes_When_Uppercased.js": 578,
	"./Binary_Property/Dash.js": 579,
	"./Binary_Property/Default_Ignorable_Code_Point.js": 580,
	"./Binary_Property/Deprecated.js": 581,
	"./Binary_Property/Diacritic.js": 582,
	"./Binary_Property/Emoji.js": 583,
	"./Binary_Property/Emoji_Component.js": 584,
	"./Binary_Property/Emoji_Modifier.js": 585,
	"./Binary_Property/Emoji_Modifier_Base.js": 586,
	"./Binary_Property/Emoji_Presentation.js": 587,
	"./Binary_Property/Extended_Pictographic.js": 588,
	"./Binary_Property/Extender.js": 589,
	"./Binary_Property/Grapheme_Base.js": 590,
	"./Binary_Property/Grapheme_Extend.js": 591,
	"./Binary_Property/Hex_Digit.js": 592,
	"./Binary_Property/IDS_Binary_Operator.js": 593,
	"./Binary_Property/IDS_Trinary_Operator.js": 594,
	"./Binary_Property/ID_Continue.js": 595,
	"./Binary_Property/ID_Start.js": 596,
	"./Binary_Property/Ideographic.js": 597,
	"./Binary_Property/Join_Control.js": 598,
	"./Binary_Property/Logical_Order_Exception.js": 599,
	"./Binary_Property/Lowercase.js": 600,
	"./Binary_Property/Math.js": 601,
	"./Binary_Property/Noncharacter_Code_Point.js": 602,
	"./Binary_Property/Pattern_Syntax.js": 603,
	"./Binary_Property/Pattern_White_Space.js": 604,
	"./Binary_Property/Quotation_Mark.js": 605,
	"./Binary_Property/Radical.js": 606,
	"./Binary_Property/Regional_Indicator.js": 607,
	"./Binary_Property/Sentence_Terminal.js": 608,
	"./Binary_Property/Soft_Dotted.js": 609,
	"./Binary_Property/Terminal_Punctuation.js": 610,
	"./Binary_Property/Unified_Ideograph.js": 611,
	"./Binary_Property/Uppercase.js": 612,
	"./Binary_Property/Variation_Selector.js": 613,
	"./Binary_Property/White_Space.js": 614,
	"./Binary_Property/XID_Continue.js": 615,
	"./Binary_Property/XID_Start.js": 616,
	"./General_Category/Cased_Letter.js": 617,
	"./General_Category/Close_Punctuation.js": 618,
	"./General_Category/Connector_Punctuation.js": 619,
	"./General_Category/Control.js": 620,
	"./General_Category/Currency_Symbol.js": 621,
	"./General_Category/Dash_Punctuation.js": 622,
	"./General_Category/Decimal_Number.js": 623,
	"./General_Category/Enclosing_Mark.js": 624,
	"./General_Category/Final_Punctuation.js": 625,
	"./General_Category/Format.js": 626,
	"./General_Category/Initial_Punctuation.js": 627,
	"./General_Category/Letter.js": 628,
	"./General_Category/Letter_Number.js": 629,
	"./General_Category/Line_Separator.js": 630,
	"./General_Category/Lowercase_Letter.js": 631,
	"./General_Category/Mark.js": 632,
	"./General_Category/Math_Symbol.js": 633,
	"./General_Category/Modifier_Letter.js": 634,
	"./General_Category/Modifier_Symbol.js": 635,
	"./General_Category/Nonspacing_Mark.js": 636,
	"./General_Category/Number.js": 637,
	"./General_Category/Open_Punctuation.js": 638,
	"./General_Category/Other.js": 639,
	"./General_Category/Other_Letter.js": 640,
	"./General_Category/Other_Number.js": 641,
	"./General_Category/Other_Punctuation.js": 642,
	"./General_Category/Other_Symbol.js": 643,
	"./General_Category/Paragraph_Separator.js": 644,
	"./General_Category/Private_Use.js": 645,
	"./General_Category/Punctuation.js": 646,
	"./General_Category/Separator.js": 647,
	"./General_Category/Space_Separator.js": 648,
	"./General_Category/Spacing_Mark.js": 649,
	"./General_Category/Surrogate.js": 650,
	"./General_Category/Symbol.js": 651,
	"./General_Category/Titlecase_Letter.js": 652,
	"./General_Category/Unassigned.js": 653,
	"./General_Category/Uppercase_Letter.js": 654,
	"./Script/Adlam.js": 655,
	"./Script/Ahom.js": 656,
	"./Script/Anatolian_Hieroglyphs.js": 657,
	"./Script/Arabic.js": 658,
	"./Script/Armenian.js": 659,
	"./Script/Avestan.js": 660,
	"./Script/Balinese.js": 661,
	"./Script/Bamum.js": 662,
	"./Script/Bassa_Vah.js": 663,
	"./Script/Batak.js": 664,
	"./Script/Bengali.js": 665,
	"./Script/Bhaiksuki.js": 666,
	"./Script/Bopomofo.js": 667,
	"./Script/Brahmi.js": 668,
	"./Script/Braille.js": 669,
	"./Script/Buginese.js": 670,
	"./Script/Buhid.js": 671,
	"./Script/Canadian_Aboriginal.js": 672,
	"./Script/Carian.js": 673,
	"./Script/Caucasian_Albanian.js": 674,
	"./Script/Chakma.js": 675,
	"./Script/Cham.js": 676,
	"./Script/Cherokee.js": 677,
	"./Script/Common.js": 678,
	"./Script/Coptic.js": 679,
	"./Script/Cuneiform.js": 680,
	"./Script/Cypriot.js": 681,
	"./Script/Cyrillic.js": 682,
	"./Script/Deseret.js": 683,
	"./Script/Devanagari.js": 684,
	"./Script/Dogra.js": 685,
	"./Script/Duployan.js": 686,
	"./Script/Egyptian_Hieroglyphs.js": 687,
	"./Script/Elbasan.js": 688,
	"./Script/Elymaic.js": 689,
	"./Script/Ethiopic.js": 690,
	"./Script/Georgian.js": 691,
	"./Script/Glagolitic.js": 692,
	"./Script/Gothic.js": 693,
	"./Script/Grantha.js": 694,
	"./Script/Greek.js": 695,
	"./Script/Gujarati.js": 696,
	"./Script/Gunjala_Gondi.js": 697,
	"./Script/Gurmukhi.js": 698,
	"./Script/Han.js": 699,
	"./Script/Hangul.js": 700,
	"./Script/Hanifi_Rohingya.js": 701,
	"./Script/Hanunoo.js": 702,
	"./Script/Hatran.js": 703,
	"./Script/Hebrew.js": 704,
	"./Script/Hiragana.js": 705,
	"./Script/Imperial_Aramaic.js": 706,
	"./Script/Inherited.js": 707,
	"./Script/Inscriptional_Pahlavi.js": 708,
	"./Script/Inscriptional_Parthian.js": 709,
	"./Script/Javanese.js": 710,
	"./Script/Kaithi.js": 711,
	"./Script/Kannada.js": 712,
	"./Script/Katakana.js": 713,
	"./Script/Kayah_Li.js": 714,
	"./Script/Kharoshthi.js": 715,
	"./Script/Khmer.js": 716,
	"./Script/Khojki.js": 717,
	"./Script/Khudawadi.js": 718,
	"./Script/Lao.js": 719,
	"./Script/Latin.js": 720,
	"./Script/Lepcha.js": 721,
	"./Script/Limbu.js": 722,
	"./Script/Linear_A.js": 723,
	"./Script/Linear_B.js": 724,
	"./Script/Lisu.js": 725,
	"./Script/Lycian.js": 726,
	"./Script/Lydian.js": 727,
	"./Script/Mahajani.js": 728,
	"./Script/Makasar.js": 729,
	"./Script/Malayalam.js": 730,
	"./Script/Mandaic.js": 731,
	"./Script/Manichaean.js": 732,
	"./Script/Marchen.js": 733,
	"./Script/Masaram_Gondi.js": 734,
	"./Script/Medefaidrin.js": 735,
	"./Script/Meetei_Mayek.js": 736,
	"./Script/Mende_Kikakui.js": 737,
	"./Script/Meroitic_Cursive.js": 738,
	"./Script/Meroitic_Hieroglyphs.js": 739,
	"./Script/Miao.js": 740,
	"./Script/Modi.js": 741,
	"./Script/Mongolian.js": 742,
	"./Script/Mro.js": 743,
	"./Script/Multani.js": 744,
	"./Script/Myanmar.js": 745,
	"./Script/Nabataean.js": 746,
	"./Script/Nandinagari.js": 747,
	"./Script/New_Tai_Lue.js": 748,
	"./Script/Newa.js": 749,
	"./Script/Nko.js": 750,
	"./Script/Nushu.js": 751,
	"./Script/Nyiakeng_Puachue_Hmong.js": 752,
	"./Script/Ogham.js": 753,
	"./Script/Ol_Chiki.js": 754,
	"./Script/Old_Hungarian.js": 755,
	"./Script/Old_Italic.js": 756,
	"./Script/Old_North_Arabian.js": 757,
	"./Script/Old_Permic.js": 758,
	"./Script/Old_Persian.js": 759,
	"./Script/Old_Sogdian.js": 760,
	"./Script/Old_South_Arabian.js": 761,
	"./Script/Old_Turkic.js": 762,
	"./Script/Oriya.js": 763,
	"./Script/Osage.js": 764,
	"./Script/Osmanya.js": 765,
	"./Script/Pahawh_Hmong.js": 766,
	"./Script/Palmyrene.js": 767,
	"./Script/Pau_Cin_Hau.js": 768,
	"./Script/Phags_Pa.js": 769,
	"./Script/Phoenician.js": 770,
	"./Script/Psalter_Pahlavi.js": 771,
	"./Script/Rejang.js": 772,
	"./Script/Runic.js": 773,
	"./Script/Samaritan.js": 774,
	"./Script/Saurashtra.js": 775,
	"./Script/Sharada.js": 776,
	"./Script/Shavian.js": 777,
	"./Script/Siddham.js": 778,
	"./Script/SignWriting.js": 779,
	"./Script/Sinhala.js": 780,
	"./Script/Sogdian.js": 781,
	"./Script/Sora_Sompeng.js": 782,
	"./Script/Soyombo.js": 783,
	"./Script/Sundanese.js": 784,
	"./Script/Syloti_Nagri.js": 785,
	"./Script/Syriac.js": 786,
	"./Script/Tagalog.js": 787,
	"./Script/Tagbanwa.js": 788,
	"./Script/Tai_Le.js": 789,
	"./Script/Tai_Tham.js": 790,
	"./Script/Tai_Viet.js": 791,
	"./Script/Takri.js": 792,
	"./Script/Tamil.js": 793,
	"./Script/Tangut.js": 794,
	"./Script/Telugu.js": 795,
	"./Script/Thaana.js": 796,
	"./Script/Thai.js": 797,
	"./Script/Tibetan.js": 798,
	"./Script/Tifinagh.js": 799,
	"./Script/Tirhuta.js": 800,
	"./Script/Ugaritic.js": 801,
	"./Script/Vai.js": 802,
	"./Script/Wancho.js": 803,
	"./Script/Warang_Citi.js": 804,
	"./Script/Yi.js": 805,
	"./Script/Zanabazar_Square.js": 806,
	"./Script_Extensions/Adlam.js": 807,
	"./Script_Extensions/Ahom.js": 808,
	"./Script_Extensions/Anatolian_Hieroglyphs.js": 809,
	"./Script_Extensions/Arabic.js": 810,
	"./Script_Extensions/Armenian.js": 811,
	"./Script_Extensions/Avestan.js": 812,
	"./Script_Extensions/Balinese.js": 813,
	"./Script_Extensions/Bamum.js": 814,
	"./Script_Extensions/Bassa_Vah.js": 815,
	"./Script_Extensions/Batak.js": 816,
	"./Script_Extensions/Bengali.js": 817,
	"./Script_Extensions/Bhaiksuki.js": 818,
	"./Script_Extensions/Bopomofo.js": 819,
	"./Script_Extensions/Brahmi.js": 820,
	"./Script_Extensions/Braille.js": 821,
	"./Script_Extensions/Buginese.js": 822,
	"./Script_Extensions/Buhid.js": 823,
	"./Script_Extensions/Canadian_Aboriginal.js": 824,
	"./Script_Extensions/Carian.js": 825,
	"./Script_Extensions/Caucasian_Albanian.js": 826,
	"./Script_Extensions/Chakma.js": 827,
	"./Script_Extensions/Cham.js": 828,
	"./Script_Extensions/Cherokee.js": 829,
	"./Script_Extensions/Common.js": 830,
	"./Script_Extensions/Coptic.js": 831,
	"./Script_Extensions/Cuneiform.js": 832,
	"./Script_Extensions/Cypriot.js": 833,
	"./Script_Extensions/Cyrillic.js": 834,
	"./Script_Extensions/Deseret.js": 835,
	"./Script_Extensions/Devanagari.js": 836,
	"./Script_Extensions/Dogra.js": 837,
	"./Script_Extensions/Duployan.js": 838,
	"./Script_Extensions/Egyptian_Hieroglyphs.js": 839,
	"./Script_Extensions/Elbasan.js": 840,
	"./Script_Extensions/Elymaic.js": 841,
	"./Script_Extensions/Ethiopic.js": 842,
	"./Script_Extensions/Georgian.js": 843,
	"./Script_Extensions/Glagolitic.js": 844,
	"./Script_Extensions/Gothic.js": 845,
	"./Script_Extensions/Grantha.js": 846,
	"./Script_Extensions/Greek.js": 847,
	"./Script_Extensions/Gujarati.js": 848,
	"./Script_Extensions/Gunjala_Gondi.js": 849,
	"./Script_Extensions/Gurmukhi.js": 850,
	"./Script_Extensions/Han.js": 851,
	"./Script_Extensions/Hangul.js": 852,
	"./Script_Extensions/Hanifi_Rohingya.js": 853,
	"./Script_Extensions/Hanunoo.js": 854,
	"./Script_Extensions/Hatran.js": 855,
	"./Script_Extensions/Hebrew.js": 856,
	"./Script_Extensions/Hiragana.js": 857,
	"./Script_Extensions/Imperial_Aramaic.js": 858,
	"./Script_Extensions/Inherited.js": 859,
	"./Script_Extensions/Inscriptional_Pahlavi.js": 860,
	"./Script_Extensions/Inscriptional_Parthian.js": 861,
	"./Script_Extensions/Javanese.js": 862,
	"./Script_Extensions/Kaithi.js": 863,
	"./Script_Extensions/Kannada.js": 864,
	"./Script_Extensions/Katakana.js": 865,
	"./Script_Extensions/Kayah_Li.js": 866,
	"./Script_Extensions/Kharoshthi.js": 867,
	"./Script_Extensions/Khmer.js": 868,
	"./Script_Extensions/Khojki.js": 869,
	"./Script_Extensions/Khudawadi.js": 870,
	"./Script_Extensions/Lao.js": 871,
	"./Script_Extensions/Latin.js": 872,
	"./Script_Extensions/Lepcha.js": 873,
	"./Script_Extensions/Limbu.js": 874,
	"./Script_Extensions/Linear_A.js": 875,
	"./Script_Extensions/Linear_B.js": 876,
	"./Script_Extensions/Lisu.js": 877,
	"./Script_Extensions/Lycian.js": 878,
	"./Script_Extensions/Lydian.js": 879,
	"./Script_Extensions/Mahajani.js": 880,
	"./Script_Extensions/Makasar.js": 881,
	"./Script_Extensions/Malayalam.js": 882,
	"./Script_Extensions/Mandaic.js": 883,
	"./Script_Extensions/Manichaean.js": 884,
	"./Script_Extensions/Marchen.js": 885,
	"./Script_Extensions/Masaram_Gondi.js": 886,
	"./Script_Extensions/Medefaidrin.js": 887,
	"./Script_Extensions/Meetei_Mayek.js": 888,
	"./Script_Extensions/Mende_Kikakui.js": 889,
	"./Script_Extensions/Meroitic_Cursive.js": 890,
	"./Script_Extensions/Meroitic_Hieroglyphs.js": 891,
	"./Script_Extensions/Miao.js": 892,
	"./Script_Extensions/Modi.js": 893,
	"./Script_Extensions/Mongolian.js": 894,
	"./Script_Extensions/Mro.js": 895,
	"./Script_Extensions/Multani.js": 896,
	"./Script_Extensions/Myanmar.js": 897,
	"./Script_Extensions/Nabataean.js": 898,
	"./Script_Extensions/Nandinagari.js": 899,
	"./Script_Extensions/New_Tai_Lue.js": 900,
	"./Script_Extensions/Newa.js": 901,
	"./Script_Extensions/Nko.js": 902,
	"./Script_Extensions/Nushu.js": 903,
	"./Script_Extensions/Nyiakeng_Puachue_Hmong.js": 904,
	"./Script_Extensions/Ogham.js": 905,
	"./Script_Extensions/Ol_Chiki.js": 906,
	"./Script_Extensions/Old_Hungarian.js": 907,
	"./Script_Extensions/Old_Italic.js": 908,
	"./Script_Extensions/Old_North_Arabian.js": 909,
	"./Script_Extensions/Old_Permic.js": 910,
	"./Script_Extensions/Old_Persian.js": 911,
	"./Script_Extensions/Old_Sogdian.js": 912,
	"./Script_Extensions/Old_South_Arabian.js": 913,
	"./Script_Extensions/Old_Turkic.js": 914,
	"./Script_Extensions/Oriya.js": 915,
	"./Script_Extensions/Osage.js": 916,
	"./Script_Extensions/Osmanya.js": 917,
	"./Script_Extensions/Pahawh_Hmong.js": 918,
	"./Script_Extensions/Palmyrene.js": 919,
	"./Script_Extensions/Pau_Cin_Hau.js": 920,
	"./Script_Extensions/Phags_Pa.js": 921,
	"./Script_Extensions/Phoenician.js": 922,
	"./Script_Extensions/Psalter_Pahlavi.js": 923,
	"./Script_Extensions/Rejang.js": 924,
	"./Script_Extensions/Runic.js": 925,
	"./Script_Extensions/Samaritan.js": 926,
	"./Script_Extensions/Saurashtra.js": 927,
	"./Script_Extensions/Sharada.js": 928,
	"./Script_Extensions/Shavian.js": 929,
	"./Script_Extensions/Siddham.js": 930,
	"./Script_Extensions/SignWriting.js": 931,
	"./Script_Extensions/Sinhala.js": 932,
	"./Script_Extensions/Sogdian.js": 933,
	"./Script_Extensions/Sora_Sompeng.js": 934,
	"./Script_Extensions/Soyombo.js": 935,
	"./Script_Extensions/Sundanese.js": 936,
	"./Script_Extensions/Syloti_Nagri.js": 937,
	"./Script_Extensions/Syriac.js": 938,
	"./Script_Extensions/Tagalog.js": 939,
	"./Script_Extensions/Tagbanwa.js": 940,
	"./Script_Extensions/Tai_Le.js": 941,
	"./Script_Extensions/Tai_Tham.js": 942,
	"./Script_Extensions/Tai_Viet.js": 943,
	"./Script_Extensions/Takri.js": 944,
	"./Script_Extensions/Tamil.js": 945,
	"./Script_Extensions/Tangut.js": 946,
	"./Script_Extensions/Telugu.js": 947,
	"./Script_Extensions/Thaana.js": 948,
	"./Script_Extensions/Thai.js": 949,
	"./Script_Extensions/Tibetan.js": 950,
	"./Script_Extensions/Tifinagh.js": 951,
	"./Script_Extensions/Tirhuta.js": 952,
	"./Script_Extensions/Ugaritic.js": 953,
	"./Script_Extensions/Vai.js": 954,
	"./Script_Extensions/Wancho.js": 955,
	"./Script_Extensions/Warang_Citi.js": 956,
	"./Script_Extensions/Yi.js": 957,
	"./Script_Extensions/Zanabazar_Square.js": 958,
	"./index.js": 959,
	"./unicode-version.js": 960
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 563;

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(527);

__webpack_require__(170);

__webpack_require__(267);

Object.defineProperty(exports, "__esModule", {
  value: true
});
var UNNAMED = /import\s*['"]([^'"]+)['"];?/gi;
var NAMED = /import\s*(\*\s*as)?\s*(\w*?)\s*,?\s*(?:\{([\s\S]*?)\})?\s*from\s*['"]([^'"]+)['"];?/gi;

function alias(previousKey) {
  var key = previousKey.trim();
  var name = key.split(' as ');

  if (name.length > 1) {
    key = name.shift() || '';
  }

  return {
    key: key,
    name: name[0]
  };
}

function generate(keys, dep, base, fn, offset) {
  if (offset === void 0) {
    offset = 0;
  }

  var depEnd = dep.split('/').pop();
  var tmp = depEnd ? depEnd.replace(/\W/g, '_') + '$' + offset : '';
  var name = alias(tmp).name;
  dep = fn + "('" + dep + "')";
  var obj;
  var out = "const " + name + " = " + dep + ";";

  if (base) {
    out += "\nconst " + base + " = " + tmp + ".default || " + tmp + ";";
  }

  keys.forEach(function (key) {
    obj = alias(key);
    out += "\nconst " + obj.name + " = " + tmp + "." + obj.key + ";";
  });
  return out;
}

function default_1(str, offset, fn) {
  if (fn === void 0) {
    fn = 'require';
  }

  return str.replace(NAMED, function (_, asterisk, base, req, dep) {
    return generate(req ? req.split(',').filter(function (d) {
      return d.trim();
    }) : [], dep, base, fn, offset);
  }).replace(UNNAMED, function (_, dep) {
    return fn + "('" + dep + "');";
  });
}

exports.default = default_1;

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(972);

__webpack_require__(527);

__webpack_require__(170);

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var walkes_1 = __importDefault(__webpack_require__(535));

var getAst_1 = __importDefault(__webpack_require__(537));

var parseComponent_1 = __importDefault(__webpack_require__(538));

var transformOneImport_1 = __importDefault(__webpack_require__(536));

var buildStyles = function buildStyles(styles) {
  var _styles = '';

  if (styles) {
    styles.forEach(function (it) {
      if (it) {
        _styles += it;
      }
    });
  }

  if (_styles !== '') {
    return _styles.trim();
  }

  return undefined;
};

function getSingleFileComponentParts(code) {
  var parts = parseComponent_1.default(code);
  if (parts.script) parts.script = parts.script.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '$1');
  return parts;
}

function injectTemplateAndParseExport(parts) {
  var templateString = parts.template ? parts.template.replace(/`/g, '\\`') : undefined;
  if (!parts.script) return {
    component: "{\ntemplate: `" + templateString + "` }"
  };
  var comp = parseScriptCode(parts.script);

  if (templateString) {
    comp.component = "{\n  template: `" + templateString + "`,\n  " + comp.component + "}";
  } else {
    comp.component = "{\n  " + comp.component + "}";
  }

  return comp;
}

function parseScriptCode(code) {
  var preprocessing = '';
  var startIndex = -1;
  var endIndex = -1;
  var offset = 0;
  var renderFunctionStart = -1;
  walkes_1.default(getAst_1.default(code), {
    ExportNamedDeclaration: function ExportNamedDeclaration(node) {
      preprocessing = code.slice(0, node.start + offset);
      startIndex = node.declaration.declarations[0].init.start + offset;
      endIndex = node.declaration.declarations[0].init.end + offset;

      if (node.declarations) {
        renderFunctionStart = getRenderFunctionStart(node.declarations[0]);
      }
    },
    ExportDefaultDeclaration: function ExportDefaultDeclaration(node) {
      preprocessing = code.slice(0, node.start + offset);
      startIndex = node.declaration.start + offset;
      endIndex = node.declaration.end + offset;
      renderFunctionStart = getRenderFunctionStart(node.declaration);
    },
    AssignmentExpression: function AssignmentExpression(node) {
      if (/exports/.test(node.left.name) || node.left.object && /module/.test(node.left.object.name) && /exports/.test(node.left.property.name)) {
        preprocessing = code.slice(0, node.start + offset);
        startIndex = node.right.start + offset;
        endIndex = node.right.end + offset;
      }
    },
    ImportDeclaration: function ImportDeclaration(node) {
      var ret = transformOneImport_1.default(node, code, offset);
      offset = ret.offset;
      code = ret.code;
    }
  });

  if (startIndex === -1) {
    throw new Error('Failed to parse single file component: ' + code);
  }

  if (renderFunctionStart > 0) {
    renderFunctionStart += offset;
    code = insertCreateElementFunction(code.slice(0, renderFunctionStart + 1), code.slice(renderFunctionStart + 1));
    endIndex += exports.JSX_ADDON_LENGTH;
  }

  var component = code.slice(startIndex + 1, endIndex - 1);
  return {
    preprocessing: preprocessing,
    component: component,
    postprocessing: code.slice(endIndex)
  };
}

exports.parseScriptCode = parseScriptCode;
exports.JSX_ADDON_LENGTH = 31;

function getRenderFunctionStart(objectExpression) {
  if (objectExpression && objectExpression.properties) {
    var nodeProperties = objectExpression.properties;
    var renderFunctionObj = nodeProperties.find(function (p) {
      return p.key && p.key.type === 'Identifier' && p.key.name === 'render';
    });

    if (renderFunctionObj && renderFunctionObj.value.body) {
      return renderFunctionObj.value.body.start;
    }
  }

  return -1;
}

exports.getRenderFunctionStart = getRenderFunctionStart;

function insertCreateElementFunction(before, after) {
  return before + "\nconst h = this.$createElement;" + after;
}

exports.insertCreateElementFunction = insertCreateElementFunction;

function normalizeSfcComponent(code) {
  var parts = getSingleFileComponentParts(code);
  var extractedComponent = injectTemplateAndParseExport(parts);
  return {
    script: [extractedComponent.preprocessing, ";return " + extractedComponent.component, extractedComponent.postprocessing].join('\n'),
    style: buildStyles(parts.styles)
  };
}

exports.default = normalizeSfcComponent;

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(527);

__webpack_require__(263);

__webpack_require__(169);

__webpack_require__(168);

__webpack_require__(532);

__webpack_require__(170);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var camelCase = __webpack_require__(977);

function adaptCreateElement(h) {
  return function (comp, attr) {
    var children = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }

    if (attr === undefined) {
      return h(comp);
    } else if (!children.length) {
      return h(comp, groupAttr(attr));
    }

    return h(comp, groupAttr(attr), children);
  };
}

exports.default = adaptCreateElement;
var rootAttributes = ['staticClass', 'class', 'style', 'key', 'ref', 'refInFor', 'slot', 'scopedSlots', 'model'];
var prefixedRE = /^(on|nativeOn|props|domProps|hook|v)([A-Z][a-zA-Z]+)?$/;

var getRawName = function getRawName(name) {
  return name.replace(/^(on|native(On|-on)|props|dom(Props|-props)|hook|v)-?/, '');
};

var makeArray = function makeArray(a) {
  return Array.isArray(a) ? a : [a];
};

var mergeFn = function mergeFn(fn1, fn2) {
  return function () {
    var argzMain = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      argzMain[_i] = arguments[_i];
    }

    fn1 && fn1.apply(this, argzMain);
    fn2 && fn2.apply(this, argzMain);
  };
};

var merge = function merge(a, b) {
  if (a === undefined) {
    return b;
  }

  if (typeof a === 'function' && typeof b === 'function') {
    return mergeFn(a, b);
  }

  return makeArray(a).concat(b);
};

exports.concatenate = function (src) {
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

var groupAttr = function groupAttr(attrsIn) {
  if (!attrsIn) {
    return undefined;
  }

  var attrsOut = {};
  Object.keys(attrsIn).forEach(function (name) {
    var value = attrsIn[name];
    var ccName = camelCase(name);

    if (rootAttributes.indexOf(ccName) > 0) {
      attrsOut[ccName] = value;
    } else if (name === 'attrs') {
      attrsOut.attrs = exports.concatenate(attrsOut.attrs, value);
    } else if (prefixedRE.test(ccName)) {
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
        } else {
          if (!attrsOut[prefix]) {
            attrsOut[prefix] = {};
          }

          if (camelCasedName.length) {
            attrsOut[prefix][camelCasedName] = merge(attrsOut[prefix][camelCasedName], value);
          } else {
            exports.concatenate(attrsOut[prefix], value);
          }
        }
      }
    } else {
      attrsOut.attrs = attrsOut.attrs || {};
      var finalName = /^data-/.test(name) ? name : ccName === 'xlinkHref' ? 'xlink:href' : ccName;
      attrsOut.attrs[finalName] = value;
    }
  });
  return attrsOut;
};

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var addScopedStyle_1 = __webpack_require__(220);

exports.addScopedStyle = addScopedStyle_1.default;

var compileVueCodeForEvalFunction_1 = __webpack_require__(548);

exports.compile = compileVueCodeForEvalFunction_1.default;

var adaptCreateElement_1 = __webpack_require__(976);

exports.adaptCreateElement = adaptCreateElement_1.default;

var isCodeVueSfc_1 = __webpack_require__(539);

exports.isCodeVueSfc = isCodeVueSfc_1.default;

/***/ })

}]);