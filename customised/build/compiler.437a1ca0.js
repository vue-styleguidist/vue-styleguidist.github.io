(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{469:function(i,t,r){var n={"./Binary_Property/ASCII.js":470,"./Binary_Property/ASCII_Hex_Digit.js":471,"./Binary_Property/Alphabetic.js":472,"./Binary_Property/Any.js":473,"./Binary_Property/Assigned.js":474,"./Binary_Property/Bidi_Control.js":475,"./Binary_Property/Bidi_Mirrored.js":476,"./Binary_Property/Case_Ignorable.js":477,"./Binary_Property/Cased.js":478,"./Binary_Property/Changes_When_Casefolded.js":479,"./Binary_Property/Changes_When_Casemapped.js":480,"./Binary_Property/Changes_When_Lowercased.js":481,"./Binary_Property/Changes_When_NFKC_Casefolded.js":482,"./Binary_Property/Changes_When_Titlecased.js":483,"./Binary_Property/Changes_When_Uppercased.js":484,"./Binary_Property/Dash.js":485,"./Binary_Property/Default_Ignorable_Code_Point.js":486,"./Binary_Property/Deprecated.js":487,"./Binary_Property/Diacritic.js":488,"./Binary_Property/Emoji.js":489,"./Binary_Property/Emoji_Component.js":490,"./Binary_Property/Emoji_Modifier.js":491,"./Binary_Property/Emoji_Modifier_Base.js":492,"./Binary_Property/Emoji_Presentation.js":493,"./Binary_Property/Extended_Pictographic.js":494,"./Binary_Property/Extender.js":495,"./Binary_Property/Grapheme_Base.js":496,"./Binary_Property/Grapheme_Extend.js":497,"./Binary_Property/Hex_Digit.js":498,"./Binary_Property/IDS_Binary_Operator.js":499,"./Binary_Property/IDS_Trinary_Operator.js":500,"./Binary_Property/ID_Continue.js":501,"./Binary_Property/ID_Start.js":502,"./Binary_Property/Ideographic.js":503,"./Binary_Property/Join_Control.js":504,"./Binary_Property/Logical_Order_Exception.js":505,"./Binary_Property/Lowercase.js":506,"./Binary_Property/Math.js":507,"./Binary_Property/Noncharacter_Code_Point.js":508,"./Binary_Property/Pattern_Syntax.js":509,"./Binary_Property/Pattern_White_Space.js":510,"./Binary_Property/Quotation_Mark.js":511,"./Binary_Property/Radical.js":512,"./Binary_Property/Regional_Indicator.js":513,"./Binary_Property/Sentence_Terminal.js":514,"./Binary_Property/Soft_Dotted.js":515,"./Binary_Property/Terminal_Punctuation.js":516,"./Binary_Property/Unified_Ideograph.js":517,"./Binary_Property/Uppercase.js":518,"./Binary_Property/Variation_Selector.js":519,"./Binary_Property/White_Space.js":520,"./Binary_Property/XID_Continue.js":521,"./Binary_Property/XID_Start.js":522,"./General_Category/Cased_Letter.js":523,"./General_Category/Close_Punctuation.js":524,"./General_Category/Connector_Punctuation.js":525,"./General_Category/Control.js":526,"./General_Category/Currency_Symbol.js":527,"./General_Category/Dash_Punctuation.js":528,"./General_Category/Decimal_Number.js":529,"./General_Category/Enclosing_Mark.js":530,"./General_Category/Final_Punctuation.js":531,"./General_Category/Format.js":532,"./General_Category/Initial_Punctuation.js":533,"./General_Category/Letter.js":534,"./General_Category/Letter_Number.js":535,"./General_Category/Line_Separator.js":536,"./General_Category/Lowercase_Letter.js":537,"./General_Category/Mark.js":538,"./General_Category/Math_Symbol.js":539,"./General_Category/Modifier_Letter.js":540,"./General_Category/Modifier_Symbol.js":541,"./General_Category/Nonspacing_Mark.js":542,"./General_Category/Number.js":543,"./General_Category/Open_Punctuation.js":544,"./General_Category/Other.js":545,"./General_Category/Other_Letter.js":546,"./General_Category/Other_Number.js":547,"./General_Category/Other_Punctuation.js":548,"./General_Category/Other_Symbol.js":549,"./General_Category/Paragraph_Separator.js":550,"./General_Category/Private_Use.js":551,"./General_Category/Punctuation.js":552,"./General_Category/Separator.js":553,"./General_Category/Space_Separator.js":554,"./General_Category/Spacing_Mark.js":555,"./General_Category/Surrogate.js":556,"./General_Category/Symbol.js":557,"./General_Category/Titlecase_Letter.js":558,"./General_Category/Unassigned.js":559,"./General_Category/Uppercase_Letter.js":560,"./Script/Adlam.js":561,"./Script/Ahom.js":562,"./Script/Anatolian_Hieroglyphs.js":563,"./Script/Arabic.js":564,"./Script/Armenian.js":565,"./Script/Avestan.js":566,"./Script/Balinese.js":567,"./Script/Bamum.js":568,"./Script/Bassa_Vah.js":569,"./Script/Batak.js":570,"./Script/Bengali.js":571,"./Script/Bhaiksuki.js":572,"./Script/Bopomofo.js":573,"./Script/Brahmi.js":574,"./Script/Braille.js":575,"./Script/Buginese.js":576,"./Script/Buhid.js":577,"./Script/Canadian_Aboriginal.js":578,"./Script/Carian.js":579,"./Script/Caucasian_Albanian.js":580,"./Script/Chakma.js":581,"./Script/Cham.js":582,"./Script/Cherokee.js":583,"./Script/Chorasmian.js":584,"./Script/Common.js":585,"./Script/Coptic.js":586,"./Script/Cuneiform.js":587,"./Script/Cypriot.js":588,"./Script/Cyrillic.js":589,"./Script/Deseret.js":590,"./Script/Devanagari.js":591,"./Script/Dives_Akuru.js":592,"./Script/Dogra.js":593,"./Script/Duployan.js":594,"./Script/Egyptian_Hieroglyphs.js":595,"./Script/Elbasan.js":596,"./Script/Elymaic.js":597,"./Script/Ethiopic.js":598,"./Script/Georgian.js":599,"./Script/Glagolitic.js":600,"./Script/Gothic.js":601,"./Script/Grantha.js":602,"./Script/Greek.js":603,"./Script/Gujarati.js":604,"./Script/Gunjala_Gondi.js":605,"./Script/Gurmukhi.js":606,"./Script/Han.js":607,"./Script/Hangul.js":608,"./Script/Hanifi_Rohingya.js":609,"./Script/Hanunoo.js":610,"./Script/Hatran.js":611,"./Script/Hebrew.js":612,"./Script/Hiragana.js":613,"./Script/Imperial_Aramaic.js":614,"./Script/Inherited.js":615,"./Script/Inscriptional_Pahlavi.js":616,"./Script/Inscriptional_Parthian.js":617,"./Script/Javanese.js":618,"./Script/Kaithi.js":619,"./Script/Kannada.js":620,"./Script/Katakana.js":621,"./Script/Kayah_Li.js":622,"./Script/Kharoshthi.js":623,"./Script/Khitan_Small_Script.js":624,"./Script/Khmer.js":625,"./Script/Khojki.js":626,"./Script/Khudawadi.js":627,"./Script/Lao.js":628,"./Script/Latin.js":629,"./Script/Lepcha.js":630,"./Script/Limbu.js":631,"./Script/Linear_A.js":632,"./Script/Linear_B.js":633,"./Script/Lisu.js":634,"./Script/Lycian.js":635,"./Script/Lydian.js":636,"./Script/Mahajani.js":637,"./Script/Makasar.js":638,"./Script/Malayalam.js":639,"./Script/Mandaic.js":640,"./Script/Manichaean.js":641,"./Script/Marchen.js":642,"./Script/Masaram_Gondi.js":643,"./Script/Medefaidrin.js":644,"./Script/Meetei_Mayek.js":645,"./Script/Mende_Kikakui.js":646,"./Script/Meroitic_Cursive.js":647,"./Script/Meroitic_Hieroglyphs.js":648,"./Script/Miao.js":649,"./Script/Modi.js":650,"./Script/Mongolian.js":651,"./Script/Mro.js":652,"./Script/Multani.js":653,"./Script/Myanmar.js":654,"./Script/Nabataean.js":655,"./Script/Nandinagari.js":656,"./Script/New_Tai_Lue.js":657,"./Script/Newa.js":658,"./Script/Nko.js":659,"./Script/Nushu.js":660,"./Script/Nyiakeng_Puachue_Hmong.js":661,"./Script/Ogham.js":662,"./Script/Ol_Chiki.js":663,"./Script/Old_Hungarian.js":664,"./Script/Old_Italic.js":665,"./Script/Old_North_Arabian.js":666,"./Script/Old_Permic.js":667,"./Script/Old_Persian.js":668,"./Script/Old_Sogdian.js":669,"./Script/Old_South_Arabian.js":670,"./Script/Old_Turkic.js":671,"./Script/Oriya.js":672,"./Script/Osage.js":673,"./Script/Osmanya.js":674,"./Script/Pahawh_Hmong.js":675,"./Script/Palmyrene.js":676,"./Script/Pau_Cin_Hau.js":677,"./Script/Phags_Pa.js":678,"./Script/Phoenician.js":679,"./Script/Psalter_Pahlavi.js":680,"./Script/Rejang.js":681,"./Script/Runic.js":682,"./Script/Samaritan.js":683,"./Script/Saurashtra.js":684,"./Script/Sharada.js":685,"./Script/Shavian.js":686,"./Script/Siddham.js":687,"./Script/SignWriting.js":688,"./Script/Sinhala.js":689,"./Script/Sogdian.js":690,"./Script/Sora_Sompeng.js":691,"./Script/Soyombo.js":692,"./Script/Sundanese.js":693,"./Script/Syloti_Nagri.js":694,"./Script/Syriac.js":695,"./Script/Tagalog.js":696,"./Script/Tagbanwa.js":697,"./Script/Tai_Le.js":698,"./Script/Tai_Tham.js":699,"./Script/Tai_Viet.js":700,"./Script/Takri.js":701,"./Script/Tamil.js":702,"./Script/Tangut.js":703,"./Script/Telugu.js":704,"./Script/Thaana.js":705,"./Script/Thai.js":706,"./Script/Tibetan.js":707,"./Script/Tifinagh.js":708,"./Script/Tirhuta.js":709,"./Script/Ugaritic.js":710,"./Script/Vai.js":711,"./Script/Wancho.js":712,"./Script/Warang_Citi.js":713,"./Script/Yezidi.js":714,"./Script/Yi.js":715,"./Script/Zanabazar_Square.js":716,"./Script_Extensions/Adlam.js":717,"./Script_Extensions/Ahom.js":718,"./Script_Extensions/Anatolian_Hieroglyphs.js":719,"./Script_Extensions/Arabic.js":720,"./Script_Extensions/Armenian.js":721,"./Script_Extensions/Avestan.js":722,"./Script_Extensions/Balinese.js":723,"./Script_Extensions/Bamum.js":724,"./Script_Extensions/Bassa_Vah.js":725,"./Script_Extensions/Batak.js":726,"./Script_Extensions/Bengali.js":727,"./Script_Extensions/Bhaiksuki.js":728,"./Script_Extensions/Bopomofo.js":729,"./Script_Extensions/Brahmi.js":730,"./Script_Extensions/Braille.js":731,"./Script_Extensions/Buginese.js":732,"./Script_Extensions/Buhid.js":733,"./Script_Extensions/Canadian_Aboriginal.js":734,"./Script_Extensions/Carian.js":735,"./Script_Extensions/Caucasian_Albanian.js":736,"./Script_Extensions/Chakma.js":737,"./Script_Extensions/Cham.js":738,"./Script_Extensions/Cherokee.js":739,"./Script_Extensions/Chorasmian.js":740,"./Script_Extensions/Common.js":741,"./Script_Extensions/Coptic.js":742,"./Script_Extensions/Cuneiform.js":743,"./Script_Extensions/Cypriot.js":744,"./Script_Extensions/Cyrillic.js":745,"./Script_Extensions/Deseret.js":746,"./Script_Extensions/Devanagari.js":747,"./Script_Extensions/Dives_Akuru.js":748,"./Script_Extensions/Dogra.js":749,"./Script_Extensions/Duployan.js":750,"./Script_Extensions/Egyptian_Hieroglyphs.js":751,"./Script_Extensions/Elbasan.js":752,"./Script_Extensions/Elymaic.js":753,"./Script_Extensions/Ethiopic.js":754,"./Script_Extensions/Georgian.js":755,"./Script_Extensions/Glagolitic.js":756,"./Script_Extensions/Gothic.js":757,"./Script_Extensions/Grantha.js":758,"./Script_Extensions/Greek.js":759,"./Script_Extensions/Gujarati.js":760,"./Script_Extensions/Gunjala_Gondi.js":761,"./Script_Extensions/Gurmukhi.js":762,"./Script_Extensions/Han.js":763,"./Script_Extensions/Hangul.js":764,"./Script_Extensions/Hanifi_Rohingya.js":765,"./Script_Extensions/Hanunoo.js":766,"./Script_Extensions/Hatran.js":767,"./Script_Extensions/Hebrew.js":768,"./Script_Extensions/Hiragana.js":769,"./Script_Extensions/Imperial_Aramaic.js":770,"./Script_Extensions/Inherited.js":771,"./Script_Extensions/Inscriptional_Pahlavi.js":772,"./Script_Extensions/Inscriptional_Parthian.js":773,"./Script_Extensions/Javanese.js":774,"./Script_Extensions/Kaithi.js":775,"./Script_Extensions/Kannada.js":776,"./Script_Extensions/Katakana.js":777,"./Script_Extensions/Kayah_Li.js":778,"./Script_Extensions/Kharoshthi.js":779,"./Script_Extensions/Khitan_Small_Script.js":780,"./Script_Extensions/Khmer.js":781,"./Script_Extensions/Khojki.js":782,"./Script_Extensions/Khudawadi.js":783,"./Script_Extensions/Lao.js":784,"./Script_Extensions/Latin.js":785,"./Script_Extensions/Lepcha.js":786,"./Script_Extensions/Limbu.js":787,"./Script_Extensions/Linear_A.js":788,"./Script_Extensions/Linear_B.js":789,"./Script_Extensions/Lisu.js":790,"./Script_Extensions/Lycian.js":791,"./Script_Extensions/Lydian.js":792,"./Script_Extensions/Mahajani.js":793,"./Script_Extensions/Makasar.js":794,"./Script_Extensions/Malayalam.js":795,"./Script_Extensions/Mandaic.js":796,"./Script_Extensions/Manichaean.js":797,"./Script_Extensions/Marchen.js":798,"./Script_Extensions/Masaram_Gondi.js":799,"./Script_Extensions/Medefaidrin.js":800,"./Script_Extensions/Meetei_Mayek.js":801,"./Script_Extensions/Mende_Kikakui.js":802,"./Script_Extensions/Meroitic_Cursive.js":803,"./Script_Extensions/Meroitic_Hieroglyphs.js":804,"./Script_Extensions/Miao.js":805,"./Script_Extensions/Modi.js":806,"./Script_Extensions/Mongolian.js":807,"./Script_Extensions/Mro.js":808,"./Script_Extensions/Multani.js":809,"./Script_Extensions/Myanmar.js":810,"./Script_Extensions/Nabataean.js":811,"./Script_Extensions/Nandinagari.js":812,"./Script_Extensions/New_Tai_Lue.js":813,"./Script_Extensions/Newa.js":814,"./Script_Extensions/Nko.js":815,"./Script_Extensions/Nushu.js":816,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":817,"./Script_Extensions/Ogham.js":818,"./Script_Extensions/Ol_Chiki.js":819,"./Script_Extensions/Old_Hungarian.js":820,"./Script_Extensions/Old_Italic.js":821,"./Script_Extensions/Old_North_Arabian.js":822,"./Script_Extensions/Old_Permic.js":823,"./Script_Extensions/Old_Persian.js":824,"./Script_Extensions/Old_Sogdian.js":825,"./Script_Extensions/Old_South_Arabian.js":826,"./Script_Extensions/Old_Turkic.js":827,"./Script_Extensions/Oriya.js":828,"./Script_Extensions/Osage.js":829,"./Script_Extensions/Osmanya.js":830,"./Script_Extensions/Pahawh_Hmong.js":831,"./Script_Extensions/Palmyrene.js":832,"./Script_Extensions/Pau_Cin_Hau.js":833,"./Script_Extensions/Phags_Pa.js":834,"./Script_Extensions/Phoenician.js":835,"./Script_Extensions/Psalter_Pahlavi.js":836,"./Script_Extensions/Rejang.js":837,"./Script_Extensions/Runic.js":838,"./Script_Extensions/Samaritan.js":839,"./Script_Extensions/Saurashtra.js":840,"./Script_Extensions/Sharada.js":841,"./Script_Extensions/Shavian.js":842,"./Script_Extensions/Siddham.js":843,"./Script_Extensions/SignWriting.js":844,"./Script_Extensions/Sinhala.js":845,"./Script_Extensions/Sogdian.js":846,"./Script_Extensions/Sora_Sompeng.js":847,"./Script_Extensions/Soyombo.js":848,"./Script_Extensions/Sundanese.js":849,"./Script_Extensions/Syloti_Nagri.js":850,"./Script_Extensions/Syriac.js":851,"./Script_Extensions/Tagalog.js":852,"./Script_Extensions/Tagbanwa.js":853,"./Script_Extensions/Tai_Le.js":854,"./Script_Extensions/Tai_Tham.js":855,"./Script_Extensions/Tai_Viet.js":856,"./Script_Extensions/Takri.js":857,"./Script_Extensions/Tamil.js":858,"./Script_Extensions/Tangut.js":859,"./Script_Extensions/Telugu.js":860,"./Script_Extensions/Thaana.js":861,"./Script_Extensions/Thai.js":862,"./Script_Extensions/Tibetan.js":863,"./Script_Extensions/Tifinagh.js":864,"./Script_Extensions/Tirhuta.js":865,"./Script_Extensions/Ugaritic.js":866,"./Script_Extensions/Vai.js":867,"./Script_Extensions/Wancho.js":868,"./Script_Extensions/Warang_Citi.js":869,"./Script_Extensions/Yezidi.js":870,"./Script_Extensions/Yi.js":871,"./Script_Extensions/Zanabazar_Square.js":872,"./index.js":873,"./unicode-version.js":874};function webpackContext(i){var t=webpackContextResolve(i);return r(t)}function webpackContextResolve(i){if(!r.o(n,i)){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}return n[i]}webpackContext.keys=function webpackContextKeys(){return Object.keys(n)},webpackContext.resolve=webpackContextResolve,i.exports=webpackContext,webpackContext.id=469},885:function(i,t,r){"use strict";r.r(t),r.d(t,"compile",(function(){return compileVueCodeForEvalFunction}));var n=r(31);r.d(t,"adaptCreateElement",(function(){return n.adaptCreateElement})),r.d(t,"addScopedStyle",(function(){return n.addScopedStyle})),r.d(t,"concatenate",(function(){return n.concatenate})),r.d(t,"isCodeVueSfc",(function(){return n.isCodeVueSfc}));var e=r(458),s=r(883),a=r.n(s),o=r(456),c=r(884),__assign=function(){return(__assign=Object.assign||function __assign(i){for(var t,r=1,n=arguments.length;r<n;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e]);return i}).apply(this,arguments)},p=/import\s*['"]([^'"]+)['"];?/gi,j=/import\s*(\*\s*as)?\s*(\w*?)\s*,?\s*(?:\{([\s\S]*?)\})?\s*from\s*['"]([^'"]+)['"];?/gi;function alias(i){var t=i.trim(),r=t.split(" as ");return r.length>1&&(t=r.shift()||""),{key:t,name:r[0]}}function rewriteImports(i,t,r){return void 0===r&&(r="require"),i.replace(j,(function(i,n,e,s,a){return function generate(i,t,r,n,e){void 0===e&&(e=0);var s,a=t.split("/").pop(),o=a?a.replace(/\W/g,"_")+"$"+e:"",c="const "+alias(o).name+" = "+(t=n+"('"+t+"')")+";";return r&&(c+="const "+r+" = "+o+".default || "+o+";"),i.forEach((function(i){s=alias(i),c+="const "+s.name+" = "+o+"."+s.key+";"})),c}(s?s.split(",").filter((function(i){return i.trim()})):[],a,e,r,t)})).replace(p,(function(i,t){return r+"('"+t+"');"}))}function transformOneImport(i,t,r){var n=i.start+r,e=i.end+r,s=t.substring(n,e),a=rewriteImports(s,r);return{code:t=t.substring(0,n)+a+t.substring(e),offset:r+=a.length-s.length}}var _=r(457),S=o.Parser.extend(_());function getAst(i){return S.parse(i,{ecmaVersion:2019,sourceType:"module"})}var buildStyles=function(i){var t="";if(i&&i.forEach((function(i){i&&(t+=i)})),""!==t)return t.trim()};function parseScriptCode(i){var t="",r=-1,n=-1,e=0,s=-1;if(a()(getAst(i),{ExportNamedDeclaration:function(a){t=i.slice(0,a.start+e),r=a.declaration.declarations[0].init.start+e,n=a.declaration.declarations[0].init.end+e,a.declarations&&(s=getRenderFunctionStart(a.declarations[0]))},ExportDefaultDeclaration:function(a){t=i.slice(0,a.start+e),r=a.declaration.start+e,n=a.declaration.end+e,s=getRenderFunctionStart(a.declaration)},AssignmentExpression:function(s){(/exports/.test(s.left.name)||s.left.object&&/module/.test(s.left.object.name)&&/exports/.test(s.left.property.name))&&(t=i.slice(0,s.start+e),r=s.right.start+e,n=s.right.end+e)},ImportDeclaration:function(t){var r=transformOneImport(t,i,e);e=r.offset,i=r.code}}),-1===r)throw new Error("Failed to parse single file component: "+i);s>0&&(s+=e,i=insertCreateElementFunction(i.slice(0,s+1),i.slice(s+1)),n+=l);var o=i.slice(r+1,n-1);return{preprocessing:t,component:o,postprocessing:i.slice(n)}}var l=31;function getRenderFunctionStart(i){if(i&&i.properties){var t=i.properties.find((function(i){return i.key&&"Identifier"===i.key.type&&"render"===i.key.name}));if(t&&t.value.body)return t.value.body.start}return-1}function insertCreateElementFunction(i,t){return i+";const h = this.$createElement;"+t}function normalizeSfcComponent(i){var t=function getSingleFileComponentParts(i){var t=Object(n.parseComponent)(i);return t.script&&(t.script=t.script.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,"$1")),t}(i),r=function injectTemplateAndParseExport(i){var t=i.template?i.template.replace(/`/g,"\\`"):void 0;if(!i.script)return{component:"{template: `"+t+"` }"};var r=parseScriptCode(i.script);return r.component=t?"{template: `"+t+"`, "+r.component+"}":"{"+r.component+"}",r}(t);return{script:[r.preprocessing,"return "+r.component,r.postprocessing].join(";"),style:buildStyles(t.styles)}}var u=Object(c.a)(),y={chrome:71,firefox:64,safari:12,ie:11,edge:19};function getTargetFromBrowser(){var i;if((null==u?void 0:u.version)&&(null==u?void 0:u.name)&&function isBubleBrowser(i){return i in y}(u.name)){var t=parseInt(u.version,10);return(i={})[u.name]=t<=y[u.name]?t:y[u.name],i}return{}}function compileVueCodeForEvalFunction(i,t){void 0===t&&(t={});var r=function prepareVueCodeForEvalFunction(i,t){var r,e=!1;if(Object(n.isCodeVueSfc)(i))return normalizeSfcComponent(i);if(!/new Vue\(/.test(i)){if(t.jsx){var s=parseScriptCode(i),o=s.preprocessing,c=s.component,p=s.postprocessing;return{script:o+";return {"+c+"};"+p}}var j=/^\W*</.test(i)?{index:0}:i.match(/\n[\t ]*</),_=j&&void 0!==j.index?j.index:-1;r=_>-1?i.slice(_):void 0,i=_>-1?i.slice(0,_):i,e=!0}var S=getAst(i),u=0,y=[];a()(S,__assign({ExpressionStatement:function(t){if("NewExpression"===t.expression.type&&"Vue"===t.expression.callee.name){var r=i.slice(0,t.expression.start+u),n=t.expression.arguments&&t.expression.arguments.length?t.expression.arguments[0]:void 0,e=getRenderFunctionStart(n),s=n.end;e>0&&(i=insertCreateElementFunction(i.slice(0,e+1),i.slice(e+1)),s+=l);var a=n?i.slice(n.start+u,s+u):"";i=r+";return "+a}},ImportDeclaration:function(t){var r=transformOneImport(t,i,u);u=r.offset,i=r.code,e&&t.specifiers&&t.specifiers.forEach((function(i){return y.push(i.local.name)}))}},e?{VariableDeclaration:function(i){i.declarations.forEach((function(i){i.id.name?y.push(i.id.name):i.id.properties&&i.id.properties.forEach((function(i){y.push(i.value.name)}))}))},FunctionDeclaration:function(i){y.push(i.id.name)}}:{})),e&&(i+=";return {data:function(){return {"+y.map((function(i){return i+":"+i})).join(",")+"};}}");return{script:i,style:void 0,template:r}}(i,t),s="undefined"!=typeof window?getTargetFromBrowser():{};return __assign(__assign({},r),{script:Object(e.a)(r.script,__assign({target:s},t)).code})}}}]);