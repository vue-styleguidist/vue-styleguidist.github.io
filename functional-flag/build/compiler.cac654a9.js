(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{549:function(t,i,r){var n={"./Binary_Property/ASCII.js":550,"./Binary_Property/ASCII_Hex_Digit.js":551,"./Binary_Property/Alphabetic.js":552,"./Binary_Property/Any.js":553,"./Binary_Property/Assigned.js":554,"./Binary_Property/Bidi_Control.js":555,"./Binary_Property/Bidi_Mirrored.js":556,"./Binary_Property/Case_Ignorable.js":557,"./Binary_Property/Cased.js":558,"./Binary_Property/Changes_When_Casefolded.js":559,"./Binary_Property/Changes_When_Casemapped.js":560,"./Binary_Property/Changes_When_Lowercased.js":561,"./Binary_Property/Changes_When_NFKC_Casefolded.js":562,"./Binary_Property/Changes_When_Titlecased.js":563,"./Binary_Property/Changes_When_Uppercased.js":564,"./Binary_Property/Dash.js":565,"./Binary_Property/Default_Ignorable_Code_Point.js":566,"./Binary_Property/Deprecated.js":567,"./Binary_Property/Diacritic.js":568,"./Binary_Property/Emoji.js":569,"./Binary_Property/Emoji_Component.js":570,"./Binary_Property/Emoji_Modifier.js":571,"./Binary_Property/Emoji_Modifier_Base.js":572,"./Binary_Property/Emoji_Presentation.js":573,"./Binary_Property/Extended_Pictographic.js":574,"./Binary_Property/Extender.js":575,"./Binary_Property/Grapheme_Base.js":576,"./Binary_Property/Grapheme_Extend.js":577,"./Binary_Property/Hex_Digit.js":578,"./Binary_Property/IDS_Binary_Operator.js":579,"./Binary_Property/IDS_Trinary_Operator.js":580,"./Binary_Property/ID_Continue.js":581,"./Binary_Property/ID_Start.js":582,"./Binary_Property/Ideographic.js":583,"./Binary_Property/Join_Control.js":584,"./Binary_Property/Logical_Order_Exception.js":585,"./Binary_Property/Lowercase.js":586,"./Binary_Property/Math.js":587,"./Binary_Property/Noncharacter_Code_Point.js":588,"./Binary_Property/Pattern_Syntax.js":589,"./Binary_Property/Pattern_White_Space.js":590,"./Binary_Property/Quotation_Mark.js":591,"./Binary_Property/Radical.js":592,"./Binary_Property/Regional_Indicator.js":593,"./Binary_Property/Sentence_Terminal.js":594,"./Binary_Property/Soft_Dotted.js":595,"./Binary_Property/Terminal_Punctuation.js":596,"./Binary_Property/Unified_Ideograph.js":597,"./Binary_Property/Uppercase.js":598,"./Binary_Property/Variation_Selector.js":599,"./Binary_Property/White_Space.js":600,"./Binary_Property/XID_Continue.js":601,"./Binary_Property/XID_Start.js":602,"./General_Category/Cased_Letter.js":603,"./General_Category/Close_Punctuation.js":604,"./General_Category/Connector_Punctuation.js":605,"./General_Category/Control.js":606,"./General_Category/Currency_Symbol.js":607,"./General_Category/Dash_Punctuation.js":608,"./General_Category/Decimal_Number.js":609,"./General_Category/Enclosing_Mark.js":610,"./General_Category/Final_Punctuation.js":611,"./General_Category/Format.js":612,"./General_Category/Initial_Punctuation.js":613,"./General_Category/Letter.js":614,"./General_Category/Letter_Number.js":615,"./General_Category/Line_Separator.js":616,"./General_Category/Lowercase_Letter.js":617,"./General_Category/Mark.js":618,"./General_Category/Math_Symbol.js":619,"./General_Category/Modifier_Letter.js":620,"./General_Category/Modifier_Symbol.js":621,"./General_Category/Nonspacing_Mark.js":622,"./General_Category/Number.js":623,"./General_Category/Open_Punctuation.js":624,"./General_Category/Other.js":625,"./General_Category/Other_Letter.js":626,"./General_Category/Other_Number.js":627,"./General_Category/Other_Punctuation.js":628,"./General_Category/Other_Symbol.js":629,"./General_Category/Paragraph_Separator.js":630,"./General_Category/Private_Use.js":631,"./General_Category/Punctuation.js":632,"./General_Category/Separator.js":633,"./General_Category/Space_Separator.js":634,"./General_Category/Spacing_Mark.js":635,"./General_Category/Surrogate.js":636,"./General_Category/Symbol.js":637,"./General_Category/Titlecase_Letter.js":638,"./General_Category/Unassigned.js":639,"./General_Category/Uppercase_Letter.js":640,"./Script/Adlam.js":641,"./Script/Ahom.js":642,"./Script/Anatolian_Hieroglyphs.js":643,"./Script/Arabic.js":644,"./Script/Armenian.js":645,"./Script/Avestan.js":646,"./Script/Balinese.js":647,"./Script/Bamum.js":648,"./Script/Bassa_Vah.js":649,"./Script/Batak.js":650,"./Script/Bengali.js":651,"./Script/Bhaiksuki.js":652,"./Script/Bopomofo.js":653,"./Script/Brahmi.js":654,"./Script/Braille.js":655,"./Script/Buginese.js":656,"./Script/Buhid.js":657,"./Script/Canadian_Aboriginal.js":658,"./Script/Carian.js":659,"./Script/Caucasian_Albanian.js":660,"./Script/Chakma.js":661,"./Script/Cham.js":662,"./Script/Cherokee.js":663,"./Script/Chorasmian.js":664,"./Script/Common.js":665,"./Script/Coptic.js":666,"./Script/Cuneiform.js":667,"./Script/Cypriot.js":668,"./Script/Cyrillic.js":669,"./Script/Deseret.js":670,"./Script/Devanagari.js":671,"./Script/Dives_Akuru.js":672,"./Script/Dogra.js":673,"./Script/Duployan.js":674,"./Script/Egyptian_Hieroglyphs.js":675,"./Script/Elbasan.js":676,"./Script/Elymaic.js":677,"./Script/Ethiopic.js":678,"./Script/Georgian.js":679,"./Script/Glagolitic.js":680,"./Script/Gothic.js":681,"./Script/Grantha.js":682,"./Script/Greek.js":683,"./Script/Gujarati.js":684,"./Script/Gunjala_Gondi.js":685,"./Script/Gurmukhi.js":686,"./Script/Han.js":687,"./Script/Hangul.js":688,"./Script/Hanifi_Rohingya.js":689,"./Script/Hanunoo.js":690,"./Script/Hatran.js":691,"./Script/Hebrew.js":692,"./Script/Hiragana.js":693,"./Script/Imperial_Aramaic.js":694,"./Script/Inherited.js":695,"./Script/Inscriptional_Pahlavi.js":696,"./Script/Inscriptional_Parthian.js":697,"./Script/Javanese.js":698,"./Script/Kaithi.js":699,"./Script/Kannada.js":700,"./Script/Katakana.js":701,"./Script/Kayah_Li.js":702,"./Script/Kharoshthi.js":703,"./Script/Khitan_Small_Script.js":704,"./Script/Khmer.js":705,"./Script/Khojki.js":706,"./Script/Khudawadi.js":707,"./Script/Lao.js":708,"./Script/Latin.js":709,"./Script/Lepcha.js":710,"./Script/Limbu.js":711,"./Script/Linear_A.js":712,"./Script/Linear_B.js":713,"./Script/Lisu.js":714,"./Script/Lycian.js":715,"./Script/Lydian.js":716,"./Script/Mahajani.js":717,"./Script/Makasar.js":718,"./Script/Malayalam.js":719,"./Script/Mandaic.js":720,"./Script/Manichaean.js":721,"./Script/Marchen.js":722,"./Script/Masaram_Gondi.js":723,"./Script/Medefaidrin.js":724,"./Script/Meetei_Mayek.js":725,"./Script/Mende_Kikakui.js":726,"./Script/Meroitic_Cursive.js":727,"./Script/Meroitic_Hieroglyphs.js":728,"./Script/Miao.js":729,"./Script/Modi.js":730,"./Script/Mongolian.js":731,"./Script/Mro.js":732,"./Script/Multani.js":733,"./Script/Myanmar.js":734,"./Script/Nabataean.js":735,"./Script/Nandinagari.js":736,"./Script/New_Tai_Lue.js":737,"./Script/Newa.js":738,"./Script/Nko.js":739,"./Script/Nushu.js":740,"./Script/Nyiakeng_Puachue_Hmong.js":741,"./Script/Ogham.js":742,"./Script/Ol_Chiki.js":743,"./Script/Old_Hungarian.js":744,"./Script/Old_Italic.js":745,"./Script/Old_North_Arabian.js":746,"./Script/Old_Permic.js":747,"./Script/Old_Persian.js":748,"./Script/Old_Sogdian.js":749,"./Script/Old_South_Arabian.js":750,"./Script/Old_Turkic.js":751,"./Script/Oriya.js":752,"./Script/Osage.js":753,"./Script/Osmanya.js":754,"./Script/Pahawh_Hmong.js":755,"./Script/Palmyrene.js":756,"./Script/Pau_Cin_Hau.js":757,"./Script/Phags_Pa.js":758,"./Script/Phoenician.js":759,"./Script/Psalter_Pahlavi.js":760,"./Script/Rejang.js":761,"./Script/Runic.js":762,"./Script/Samaritan.js":763,"./Script/Saurashtra.js":764,"./Script/Sharada.js":765,"./Script/Shavian.js":766,"./Script/Siddham.js":767,"./Script/SignWriting.js":768,"./Script/Sinhala.js":769,"./Script/Sogdian.js":770,"./Script/Sora_Sompeng.js":771,"./Script/Soyombo.js":772,"./Script/Sundanese.js":773,"./Script/Syloti_Nagri.js":774,"./Script/Syriac.js":775,"./Script/Tagalog.js":776,"./Script/Tagbanwa.js":777,"./Script/Tai_Le.js":778,"./Script/Tai_Tham.js":779,"./Script/Tai_Viet.js":780,"./Script/Takri.js":781,"./Script/Tamil.js":782,"./Script/Tangut.js":783,"./Script/Telugu.js":784,"./Script/Thaana.js":785,"./Script/Thai.js":786,"./Script/Tibetan.js":787,"./Script/Tifinagh.js":788,"./Script/Tirhuta.js":789,"./Script/Ugaritic.js":790,"./Script/Vai.js":791,"./Script/Wancho.js":792,"./Script/Warang_Citi.js":793,"./Script/Yezidi.js":794,"./Script/Yi.js":795,"./Script/Zanabazar_Square.js":796,"./Script_Extensions/Adlam.js":797,"./Script_Extensions/Ahom.js":798,"./Script_Extensions/Anatolian_Hieroglyphs.js":799,"./Script_Extensions/Arabic.js":800,"./Script_Extensions/Armenian.js":801,"./Script_Extensions/Avestan.js":802,"./Script_Extensions/Balinese.js":803,"./Script_Extensions/Bamum.js":804,"./Script_Extensions/Bassa_Vah.js":805,"./Script_Extensions/Batak.js":806,"./Script_Extensions/Bengali.js":807,"./Script_Extensions/Bhaiksuki.js":808,"./Script_Extensions/Bopomofo.js":809,"./Script_Extensions/Brahmi.js":810,"./Script_Extensions/Braille.js":811,"./Script_Extensions/Buginese.js":812,"./Script_Extensions/Buhid.js":813,"./Script_Extensions/Canadian_Aboriginal.js":814,"./Script_Extensions/Carian.js":815,"./Script_Extensions/Caucasian_Albanian.js":816,"./Script_Extensions/Chakma.js":817,"./Script_Extensions/Cham.js":818,"./Script_Extensions/Cherokee.js":819,"./Script_Extensions/Chorasmian.js":820,"./Script_Extensions/Common.js":821,"./Script_Extensions/Coptic.js":822,"./Script_Extensions/Cuneiform.js":823,"./Script_Extensions/Cypriot.js":824,"./Script_Extensions/Cyrillic.js":825,"./Script_Extensions/Deseret.js":826,"./Script_Extensions/Devanagari.js":827,"./Script_Extensions/Dives_Akuru.js":828,"./Script_Extensions/Dogra.js":829,"./Script_Extensions/Duployan.js":830,"./Script_Extensions/Egyptian_Hieroglyphs.js":831,"./Script_Extensions/Elbasan.js":832,"./Script_Extensions/Elymaic.js":833,"./Script_Extensions/Ethiopic.js":834,"./Script_Extensions/Georgian.js":835,"./Script_Extensions/Glagolitic.js":836,"./Script_Extensions/Gothic.js":837,"./Script_Extensions/Grantha.js":838,"./Script_Extensions/Greek.js":839,"./Script_Extensions/Gujarati.js":840,"./Script_Extensions/Gunjala_Gondi.js":841,"./Script_Extensions/Gurmukhi.js":842,"./Script_Extensions/Han.js":843,"./Script_Extensions/Hangul.js":844,"./Script_Extensions/Hanifi_Rohingya.js":845,"./Script_Extensions/Hanunoo.js":846,"./Script_Extensions/Hatran.js":847,"./Script_Extensions/Hebrew.js":848,"./Script_Extensions/Hiragana.js":849,"./Script_Extensions/Imperial_Aramaic.js":850,"./Script_Extensions/Inherited.js":851,"./Script_Extensions/Inscriptional_Pahlavi.js":852,"./Script_Extensions/Inscriptional_Parthian.js":853,"./Script_Extensions/Javanese.js":854,"./Script_Extensions/Kaithi.js":855,"./Script_Extensions/Kannada.js":856,"./Script_Extensions/Katakana.js":857,"./Script_Extensions/Kayah_Li.js":858,"./Script_Extensions/Kharoshthi.js":859,"./Script_Extensions/Khitan_Small_Script.js":860,"./Script_Extensions/Khmer.js":861,"./Script_Extensions/Khojki.js":862,"./Script_Extensions/Khudawadi.js":863,"./Script_Extensions/Lao.js":864,"./Script_Extensions/Latin.js":865,"./Script_Extensions/Lepcha.js":866,"./Script_Extensions/Limbu.js":867,"./Script_Extensions/Linear_A.js":868,"./Script_Extensions/Linear_B.js":869,"./Script_Extensions/Lisu.js":870,"./Script_Extensions/Lycian.js":871,"./Script_Extensions/Lydian.js":872,"./Script_Extensions/Mahajani.js":873,"./Script_Extensions/Makasar.js":874,"./Script_Extensions/Malayalam.js":875,"./Script_Extensions/Mandaic.js":876,"./Script_Extensions/Manichaean.js":877,"./Script_Extensions/Marchen.js":878,"./Script_Extensions/Masaram_Gondi.js":879,"./Script_Extensions/Medefaidrin.js":880,"./Script_Extensions/Meetei_Mayek.js":881,"./Script_Extensions/Mende_Kikakui.js":882,"./Script_Extensions/Meroitic_Cursive.js":883,"./Script_Extensions/Meroitic_Hieroglyphs.js":884,"./Script_Extensions/Miao.js":885,"./Script_Extensions/Modi.js":886,"./Script_Extensions/Mongolian.js":887,"./Script_Extensions/Mro.js":888,"./Script_Extensions/Multani.js":889,"./Script_Extensions/Myanmar.js":890,"./Script_Extensions/Nabataean.js":891,"./Script_Extensions/Nandinagari.js":892,"./Script_Extensions/New_Tai_Lue.js":893,"./Script_Extensions/Newa.js":894,"./Script_Extensions/Nko.js":895,"./Script_Extensions/Nushu.js":896,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":897,"./Script_Extensions/Ogham.js":898,"./Script_Extensions/Ol_Chiki.js":899,"./Script_Extensions/Old_Hungarian.js":900,"./Script_Extensions/Old_Italic.js":901,"./Script_Extensions/Old_North_Arabian.js":902,"./Script_Extensions/Old_Permic.js":903,"./Script_Extensions/Old_Persian.js":904,"./Script_Extensions/Old_Sogdian.js":905,"./Script_Extensions/Old_South_Arabian.js":906,"./Script_Extensions/Old_Turkic.js":907,"./Script_Extensions/Oriya.js":908,"./Script_Extensions/Osage.js":909,"./Script_Extensions/Osmanya.js":910,"./Script_Extensions/Pahawh_Hmong.js":911,"./Script_Extensions/Palmyrene.js":912,"./Script_Extensions/Pau_Cin_Hau.js":913,"./Script_Extensions/Phags_Pa.js":914,"./Script_Extensions/Phoenician.js":915,"./Script_Extensions/Psalter_Pahlavi.js":916,"./Script_Extensions/Rejang.js":917,"./Script_Extensions/Runic.js":918,"./Script_Extensions/Samaritan.js":919,"./Script_Extensions/Saurashtra.js":920,"./Script_Extensions/Sharada.js":921,"./Script_Extensions/Shavian.js":922,"./Script_Extensions/Siddham.js":923,"./Script_Extensions/SignWriting.js":924,"./Script_Extensions/Sinhala.js":925,"./Script_Extensions/Sogdian.js":926,"./Script_Extensions/Sora_Sompeng.js":927,"./Script_Extensions/Soyombo.js":928,"./Script_Extensions/Sundanese.js":929,"./Script_Extensions/Syloti_Nagri.js":930,"./Script_Extensions/Syriac.js":931,"./Script_Extensions/Tagalog.js":932,"./Script_Extensions/Tagbanwa.js":933,"./Script_Extensions/Tai_Le.js":934,"./Script_Extensions/Tai_Tham.js":935,"./Script_Extensions/Tai_Viet.js":936,"./Script_Extensions/Takri.js":937,"./Script_Extensions/Tamil.js":938,"./Script_Extensions/Tangut.js":939,"./Script_Extensions/Telugu.js":940,"./Script_Extensions/Thaana.js":941,"./Script_Extensions/Thai.js":942,"./Script_Extensions/Tibetan.js":943,"./Script_Extensions/Tifinagh.js":944,"./Script_Extensions/Tirhuta.js":945,"./Script_Extensions/Ugaritic.js":946,"./Script_Extensions/Vai.js":947,"./Script_Extensions/Wancho.js":948,"./Script_Extensions/Warang_Citi.js":949,"./Script_Extensions/Yezidi.js":950,"./Script_Extensions/Yi.js":951,"./Script_Extensions/Zanabazar_Square.js":952,"./index.js":953,"./unicode-version.js":954};function webpackContext(t){var i=webpackContextResolve(t);return r(i)}function webpackContextResolve(t){if(!r.o(n,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n[t]}webpackContext.keys=function webpackContextKeys(){return Object.keys(n)},webpackContext.resolve=webpackContextResolve,t.exports=webpackContext,webpackContext.id=549},957:function(t,i,r){"use strict";r.r(i),r.d(i,"compile",(function(){return compileVueCodeForEvalFunction}));var n=r(41);r.d(i,"adaptCreateElement",(function(){return n.adaptCreateElement})),r.d(i,"addScopedStyle",(function(){return n.addScopedStyle})),r.d(i,"concatenate",(function(){return n.concatenate})),r.d(i,"isCodeVueSfc",(function(){return n.isCodeVueSfc}));var e=r(530),s=r(955),a=r.n(s),o=r(528),c=r(956),__assign=function(){return(__assign=Object.assign||function __assign(t){for(var i,r=1,n=arguments.length;r<n;r++)for(var e in i=arguments[r])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t}).apply(this,arguments)},p=/import\s*['"]([^'"]+)['"];?/gi,j=/import\s*(\*\s*as)?\s*(\w*?)\s*,?\s*(?:\{([\s\S]*?)\})?\s*from\s*['"]([^'"]+)['"];?/gi;function alias(t){var i=t.trim(),r=i.split(" as ");return r.length>1&&(i=r.shift()||""),{key:i,name:r[0]}}function rewriteImports(t,i,r){return void 0===r&&(r="require"),t.replace(j,(function(t,n,e,s,a){return function generate(t,i,r,n,e){void 0===e&&(e=0);var s,a=i.split("/").pop(),o=a?a.replace(/\W/g,"_")+"$"+e:"",c=alias(o).name;i="".concat(n,"('").concat(i,"')");var p="const ".concat(c," = ").concat(i,";");return r&&(p+="const ".concat(r," = ").concat(o,".default || ").concat(o,";")),t.forEach((function(t){s=alias(t),p+="const ".concat(s.name," = ").concat(o,".").concat(s.key,";")})),p}(s?s.split(",").filter((function(t){return t.trim()})):[],a,e,r,i)})).replace(p,(function(t,i){return"".concat(r,"('").concat(i,"');")}))}function transformOneImport(t,i,r){var n=t.start+r,e=t.end+r,s=i.substring(n,e),a=rewriteImports(s,r);return{code:i=i.substring(0,n)+a+i.substring(e),offset:r+=a.length-s.length}}var _=r(529),S=o.Parser.extend(_());function getAst(t){return S.parse(t,{ecmaVersion:2019,sourceType:"module"})}var buildStyles=function(t){var i="";if(t&&t.forEach((function(t){t&&(i+=t)})),""!==i)return i.trim()};function parseScriptCode(t){var i="",r=-1,n=-1,e=0,s=-1;if(a()(getAst(t),{ExportNamedDeclaration:function(a){i=t.slice(0,a.start+e),r=a.declaration.declarations[0].init.start+e,n=a.declaration.declarations[0].init.end+e,a.declarations&&(s=getRenderFunctionStart(a.declarations[0]))},ExportDefaultDeclaration:function(a){i=t.slice(0,a.start+e),r=a.declaration.start+e,n=a.declaration.end+e,s=getRenderFunctionStart(a.declaration)},AssignmentExpression:function(s){(/exports/.test(s.left.name)||s.left.object&&/module/.test(s.left.object.name)&&/exports/.test(s.left.property.name))&&(i=t.slice(0,s.start+e),r=s.right.start+e,n=s.right.end+e)},ImportDeclaration:function(i){var r=transformOneImport(i,t,e);e=r.offset,t=r.code}}),-1===r)throw new Error("Failed to parse single file component: "+t);s>0&&(s+=e,t=insertCreateElementFunction(t.slice(0,s+1),t.slice(s+1)),n+=l);var o=t.slice(r+1,n-1);return{preprocessing:i,component:o,postprocessing:t.slice(n)}}var l=31;function getRenderFunctionStart(t){if(t&&t.properties){var i=t.properties.find((function(t){return t.key&&"Identifier"===t.key.type&&"render"===t.key.name}));if(i&&i.value.body)return i.value.body.start}return-1}function insertCreateElementFunction(t,i){return"".concat(t,";const h = this.$createElement;").concat(i)}function normalizeSfcComponent(t){var i=function getSingleFileComponentParts(t){var i=Object(n.parseComponent)(t);return i.script&&(i.script=i.script.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,"$1")),i}(t),r=function injectTemplateAndParseExport(t){var i=t.template?t.template.replace(/`/g,"\\`").replace(/\$\{/g,"\\${"):void 0;if(!t.script)return{component:"{template: `".concat(i,"` }")};var r=parseScriptCode(t.script);return r.component=i?"{template: `".concat(i,"`, ").concat(r.component,"}"):"{".concat(r.component,"}"),r}(i);return{script:[r.preprocessing,"return ".concat(r.component),r.postprocessing].join(";"),style:buildStyles(i.styles)}}var u=Object(c.a)(),y={chrome:71,firefox:64,safari:12,ie:11,edge:19};function getTargetFromBrowser(){var t;if((null==u?void 0:u.version)&&(null==u?void 0:u.name)&&function isBubleBrowser(t){return t in y}(u.name)){var i=parseInt(u.version,10);return(t={})[u.name]=i<=y[u.name]?i:y[u.name],t}return{}}function compileVueCodeForEvalFunction(t,i){void 0===i&&(i={});var r=function prepareVueCodeForEvalFunction(t,i){var r,e=!1;if(Object(n.isCodeVueSfc)(t))return normalizeSfcComponent(t);if(!/new Vue\(/.test(t)){if(i.jsx){var s=parseScriptCode(t),o=s.preprocessing,c=s.component,p=s.postprocessing;return{script:"".concat(o,";return {").concat(c,"};").concat(p)}}var j=/^\W*</.test(t)?{index:0}:t.match(/\n[\t ]*</),_=j&&void 0!==j.index?j.index:-1;r=_>-1?t.slice(_):void 0,t=_>-1?t.slice(0,_):t,e=!0}var S=getAst(t),u=0,y=[];a()(S,__assign({ExpressionStatement:function(i){if("NewExpression"===i.expression.type&&"Vue"===i.expression.callee.name){var r=t.slice(0,i.expression.start+u),n=i.expression.arguments&&i.expression.arguments.length?i.expression.arguments[0]:void 0,e=getRenderFunctionStart(n),s=n.end;e>0&&(t=insertCreateElementFunction(t.slice(0,e+1),t.slice(e+1)),s+=l);var a=n?t.slice(n.start+u,s+u):"";t=r+";return "+a}},ImportDeclaration:function(i){var r=transformOneImport(i,t,u);u=r.offset,t=r.code,e&&i.specifiers&&i.specifiers.forEach((function(t){return y.push(t.local.name)}))}},e?{VariableDeclaration:function(t){t.declarations.forEach((function(t){t.id.name?y.push(t.id.name):t.id.properties&&t.id.properties.forEach((function(t){y.push(t.value.name)}))}))},FunctionDeclaration:function(t){y.push(t.id.name)}}:{})),e&&(t+=";return {data:function(){return {".concat(y.map((function(t){return"".concat(t,":").concat(t)})).join(","),"};}}"));return{script:t,style:void 0,template:r}}(t,i),s="undefined"!=typeof window?getTargetFromBrowser():{};return __assign(__assign({},r),{script:Object(e.a)(r.script,__assign({target:s},i)).code})}}}]);