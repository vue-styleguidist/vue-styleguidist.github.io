(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{426:function(i,t,r){var n={"./Binary_Property/ASCII.js":427,"./Binary_Property/ASCII_Hex_Digit.js":428,"./Binary_Property/Alphabetic.js":429,"./Binary_Property/Any.js":430,"./Binary_Property/Assigned.js":431,"./Binary_Property/Bidi_Control.js":432,"./Binary_Property/Bidi_Mirrored.js":433,"./Binary_Property/Case_Ignorable.js":434,"./Binary_Property/Cased.js":435,"./Binary_Property/Changes_When_Casefolded.js":436,"./Binary_Property/Changes_When_Casemapped.js":437,"./Binary_Property/Changes_When_Lowercased.js":438,"./Binary_Property/Changes_When_NFKC_Casefolded.js":439,"./Binary_Property/Changes_When_Titlecased.js":440,"./Binary_Property/Changes_When_Uppercased.js":441,"./Binary_Property/Dash.js":442,"./Binary_Property/Default_Ignorable_Code_Point.js":443,"./Binary_Property/Deprecated.js":444,"./Binary_Property/Diacritic.js":445,"./Binary_Property/Emoji.js":446,"./Binary_Property/Emoji_Component.js":447,"./Binary_Property/Emoji_Modifier.js":448,"./Binary_Property/Emoji_Modifier_Base.js":449,"./Binary_Property/Emoji_Presentation.js":450,"./Binary_Property/Extended_Pictographic.js":451,"./Binary_Property/Extender.js":452,"./Binary_Property/Grapheme_Base.js":453,"./Binary_Property/Grapheme_Extend.js":454,"./Binary_Property/Hex_Digit.js":455,"./Binary_Property/IDS_Binary_Operator.js":456,"./Binary_Property/IDS_Trinary_Operator.js":457,"./Binary_Property/ID_Continue.js":458,"./Binary_Property/ID_Start.js":459,"./Binary_Property/Ideographic.js":460,"./Binary_Property/Join_Control.js":461,"./Binary_Property/Logical_Order_Exception.js":462,"./Binary_Property/Lowercase.js":463,"./Binary_Property/Math.js":464,"./Binary_Property/Noncharacter_Code_Point.js":465,"./Binary_Property/Pattern_Syntax.js":466,"./Binary_Property/Pattern_White_Space.js":467,"./Binary_Property/Quotation_Mark.js":468,"./Binary_Property/Radical.js":469,"./Binary_Property/Regional_Indicator.js":470,"./Binary_Property/Sentence_Terminal.js":471,"./Binary_Property/Soft_Dotted.js":472,"./Binary_Property/Terminal_Punctuation.js":473,"./Binary_Property/Unified_Ideograph.js":474,"./Binary_Property/Uppercase.js":475,"./Binary_Property/Variation_Selector.js":476,"./Binary_Property/White_Space.js":477,"./Binary_Property/XID_Continue.js":478,"./Binary_Property/XID_Start.js":479,"./General_Category/Cased_Letter.js":480,"./General_Category/Close_Punctuation.js":481,"./General_Category/Connector_Punctuation.js":482,"./General_Category/Control.js":483,"./General_Category/Currency_Symbol.js":484,"./General_Category/Dash_Punctuation.js":485,"./General_Category/Decimal_Number.js":486,"./General_Category/Enclosing_Mark.js":487,"./General_Category/Final_Punctuation.js":488,"./General_Category/Format.js":489,"./General_Category/Initial_Punctuation.js":490,"./General_Category/Letter.js":491,"./General_Category/Letter_Number.js":492,"./General_Category/Line_Separator.js":493,"./General_Category/Lowercase_Letter.js":494,"./General_Category/Mark.js":495,"./General_Category/Math_Symbol.js":496,"./General_Category/Modifier_Letter.js":497,"./General_Category/Modifier_Symbol.js":498,"./General_Category/Nonspacing_Mark.js":499,"./General_Category/Number.js":500,"./General_Category/Open_Punctuation.js":501,"./General_Category/Other.js":502,"./General_Category/Other_Letter.js":503,"./General_Category/Other_Number.js":504,"./General_Category/Other_Punctuation.js":505,"./General_Category/Other_Symbol.js":506,"./General_Category/Paragraph_Separator.js":507,"./General_Category/Private_Use.js":508,"./General_Category/Punctuation.js":509,"./General_Category/Separator.js":510,"./General_Category/Space_Separator.js":511,"./General_Category/Spacing_Mark.js":512,"./General_Category/Surrogate.js":513,"./General_Category/Symbol.js":514,"./General_Category/Titlecase_Letter.js":515,"./General_Category/Unassigned.js":516,"./General_Category/Uppercase_Letter.js":517,"./Script/Adlam.js":518,"./Script/Ahom.js":519,"./Script/Anatolian_Hieroglyphs.js":520,"./Script/Arabic.js":521,"./Script/Armenian.js":522,"./Script/Avestan.js":523,"./Script/Balinese.js":524,"./Script/Bamum.js":525,"./Script/Bassa_Vah.js":526,"./Script/Batak.js":527,"./Script/Bengali.js":528,"./Script/Bhaiksuki.js":529,"./Script/Bopomofo.js":530,"./Script/Brahmi.js":531,"./Script/Braille.js":532,"./Script/Buginese.js":533,"./Script/Buhid.js":534,"./Script/Canadian_Aboriginal.js":535,"./Script/Carian.js":536,"./Script/Caucasian_Albanian.js":537,"./Script/Chakma.js":538,"./Script/Cham.js":539,"./Script/Cherokee.js":540,"./Script/Chorasmian.js":541,"./Script/Common.js":542,"./Script/Coptic.js":543,"./Script/Cuneiform.js":544,"./Script/Cypriot.js":545,"./Script/Cyrillic.js":546,"./Script/Deseret.js":547,"./Script/Devanagari.js":548,"./Script/Dives_Akuru.js":549,"./Script/Dogra.js":550,"./Script/Duployan.js":551,"./Script/Egyptian_Hieroglyphs.js":552,"./Script/Elbasan.js":553,"./Script/Elymaic.js":554,"./Script/Ethiopic.js":555,"./Script/Georgian.js":556,"./Script/Glagolitic.js":557,"./Script/Gothic.js":558,"./Script/Grantha.js":559,"./Script/Greek.js":560,"./Script/Gujarati.js":561,"./Script/Gunjala_Gondi.js":562,"./Script/Gurmukhi.js":563,"./Script/Han.js":564,"./Script/Hangul.js":565,"./Script/Hanifi_Rohingya.js":566,"./Script/Hanunoo.js":567,"./Script/Hatran.js":568,"./Script/Hebrew.js":569,"./Script/Hiragana.js":570,"./Script/Imperial_Aramaic.js":571,"./Script/Inherited.js":572,"./Script/Inscriptional_Pahlavi.js":573,"./Script/Inscriptional_Parthian.js":574,"./Script/Javanese.js":575,"./Script/Kaithi.js":576,"./Script/Kannada.js":577,"./Script/Katakana.js":578,"./Script/Kayah_Li.js":579,"./Script/Kharoshthi.js":580,"./Script/Khitan_Small_Script.js":581,"./Script/Khmer.js":582,"./Script/Khojki.js":583,"./Script/Khudawadi.js":584,"./Script/Lao.js":585,"./Script/Latin.js":586,"./Script/Lepcha.js":587,"./Script/Limbu.js":588,"./Script/Linear_A.js":589,"./Script/Linear_B.js":590,"./Script/Lisu.js":591,"./Script/Lycian.js":592,"./Script/Lydian.js":593,"./Script/Mahajani.js":594,"./Script/Makasar.js":595,"./Script/Malayalam.js":596,"./Script/Mandaic.js":597,"./Script/Manichaean.js":598,"./Script/Marchen.js":599,"./Script/Masaram_Gondi.js":600,"./Script/Medefaidrin.js":601,"./Script/Meetei_Mayek.js":602,"./Script/Mende_Kikakui.js":603,"./Script/Meroitic_Cursive.js":604,"./Script/Meroitic_Hieroglyphs.js":605,"./Script/Miao.js":606,"./Script/Modi.js":607,"./Script/Mongolian.js":608,"./Script/Mro.js":609,"./Script/Multani.js":610,"./Script/Myanmar.js":611,"./Script/Nabataean.js":612,"./Script/Nandinagari.js":613,"./Script/New_Tai_Lue.js":614,"./Script/Newa.js":615,"./Script/Nko.js":616,"./Script/Nushu.js":617,"./Script/Nyiakeng_Puachue_Hmong.js":618,"./Script/Ogham.js":619,"./Script/Ol_Chiki.js":620,"./Script/Old_Hungarian.js":621,"./Script/Old_Italic.js":622,"./Script/Old_North_Arabian.js":623,"./Script/Old_Permic.js":624,"./Script/Old_Persian.js":625,"./Script/Old_Sogdian.js":626,"./Script/Old_South_Arabian.js":627,"./Script/Old_Turkic.js":628,"./Script/Oriya.js":629,"./Script/Osage.js":630,"./Script/Osmanya.js":631,"./Script/Pahawh_Hmong.js":632,"./Script/Palmyrene.js":633,"./Script/Pau_Cin_Hau.js":634,"./Script/Phags_Pa.js":635,"./Script/Phoenician.js":636,"./Script/Psalter_Pahlavi.js":637,"./Script/Rejang.js":638,"./Script/Runic.js":639,"./Script/Samaritan.js":640,"./Script/Saurashtra.js":641,"./Script/Sharada.js":642,"./Script/Shavian.js":643,"./Script/Siddham.js":644,"./Script/SignWriting.js":645,"./Script/Sinhala.js":646,"./Script/Sogdian.js":647,"./Script/Sora_Sompeng.js":648,"./Script/Soyombo.js":649,"./Script/Sundanese.js":650,"./Script/Syloti_Nagri.js":651,"./Script/Syriac.js":652,"./Script/Tagalog.js":653,"./Script/Tagbanwa.js":654,"./Script/Tai_Le.js":655,"./Script/Tai_Tham.js":656,"./Script/Tai_Viet.js":657,"./Script/Takri.js":658,"./Script/Tamil.js":659,"./Script/Tangut.js":660,"./Script/Telugu.js":661,"./Script/Thaana.js":662,"./Script/Thai.js":663,"./Script/Tibetan.js":664,"./Script/Tifinagh.js":665,"./Script/Tirhuta.js":666,"./Script/Ugaritic.js":667,"./Script/Vai.js":668,"./Script/Wancho.js":669,"./Script/Warang_Citi.js":670,"./Script/Yezidi.js":671,"./Script/Yi.js":672,"./Script/Zanabazar_Square.js":673,"./Script_Extensions/Adlam.js":674,"./Script_Extensions/Ahom.js":675,"./Script_Extensions/Anatolian_Hieroglyphs.js":676,"./Script_Extensions/Arabic.js":677,"./Script_Extensions/Armenian.js":678,"./Script_Extensions/Avestan.js":679,"./Script_Extensions/Balinese.js":680,"./Script_Extensions/Bamum.js":681,"./Script_Extensions/Bassa_Vah.js":682,"./Script_Extensions/Batak.js":683,"./Script_Extensions/Bengali.js":684,"./Script_Extensions/Bhaiksuki.js":685,"./Script_Extensions/Bopomofo.js":686,"./Script_Extensions/Brahmi.js":687,"./Script_Extensions/Braille.js":688,"./Script_Extensions/Buginese.js":689,"./Script_Extensions/Buhid.js":690,"./Script_Extensions/Canadian_Aboriginal.js":691,"./Script_Extensions/Carian.js":692,"./Script_Extensions/Caucasian_Albanian.js":693,"./Script_Extensions/Chakma.js":694,"./Script_Extensions/Cham.js":695,"./Script_Extensions/Cherokee.js":696,"./Script_Extensions/Chorasmian.js":697,"./Script_Extensions/Common.js":698,"./Script_Extensions/Coptic.js":699,"./Script_Extensions/Cuneiform.js":700,"./Script_Extensions/Cypriot.js":701,"./Script_Extensions/Cyrillic.js":702,"./Script_Extensions/Deseret.js":703,"./Script_Extensions/Devanagari.js":704,"./Script_Extensions/Dives_Akuru.js":705,"./Script_Extensions/Dogra.js":706,"./Script_Extensions/Duployan.js":707,"./Script_Extensions/Egyptian_Hieroglyphs.js":708,"./Script_Extensions/Elbasan.js":709,"./Script_Extensions/Elymaic.js":710,"./Script_Extensions/Ethiopic.js":711,"./Script_Extensions/Georgian.js":712,"./Script_Extensions/Glagolitic.js":713,"./Script_Extensions/Gothic.js":714,"./Script_Extensions/Grantha.js":715,"./Script_Extensions/Greek.js":716,"./Script_Extensions/Gujarati.js":717,"./Script_Extensions/Gunjala_Gondi.js":718,"./Script_Extensions/Gurmukhi.js":719,"./Script_Extensions/Han.js":720,"./Script_Extensions/Hangul.js":721,"./Script_Extensions/Hanifi_Rohingya.js":722,"./Script_Extensions/Hanunoo.js":723,"./Script_Extensions/Hatran.js":724,"./Script_Extensions/Hebrew.js":725,"./Script_Extensions/Hiragana.js":726,"./Script_Extensions/Imperial_Aramaic.js":727,"./Script_Extensions/Inherited.js":728,"./Script_Extensions/Inscriptional_Pahlavi.js":729,"./Script_Extensions/Inscriptional_Parthian.js":730,"./Script_Extensions/Javanese.js":731,"./Script_Extensions/Kaithi.js":732,"./Script_Extensions/Kannada.js":733,"./Script_Extensions/Katakana.js":734,"./Script_Extensions/Kayah_Li.js":735,"./Script_Extensions/Kharoshthi.js":736,"./Script_Extensions/Khitan_Small_Script.js":737,"./Script_Extensions/Khmer.js":738,"./Script_Extensions/Khojki.js":739,"./Script_Extensions/Khudawadi.js":740,"./Script_Extensions/Lao.js":741,"./Script_Extensions/Latin.js":742,"./Script_Extensions/Lepcha.js":743,"./Script_Extensions/Limbu.js":744,"./Script_Extensions/Linear_A.js":745,"./Script_Extensions/Linear_B.js":746,"./Script_Extensions/Lisu.js":747,"./Script_Extensions/Lycian.js":748,"./Script_Extensions/Lydian.js":749,"./Script_Extensions/Mahajani.js":750,"./Script_Extensions/Makasar.js":751,"./Script_Extensions/Malayalam.js":752,"./Script_Extensions/Mandaic.js":753,"./Script_Extensions/Manichaean.js":754,"./Script_Extensions/Marchen.js":755,"./Script_Extensions/Masaram_Gondi.js":756,"./Script_Extensions/Medefaidrin.js":757,"./Script_Extensions/Meetei_Mayek.js":758,"./Script_Extensions/Mende_Kikakui.js":759,"./Script_Extensions/Meroitic_Cursive.js":760,"./Script_Extensions/Meroitic_Hieroglyphs.js":761,"./Script_Extensions/Miao.js":762,"./Script_Extensions/Modi.js":763,"./Script_Extensions/Mongolian.js":764,"./Script_Extensions/Mro.js":765,"./Script_Extensions/Multani.js":766,"./Script_Extensions/Myanmar.js":767,"./Script_Extensions/Nabataean.js":768,"./Script_Extensions/Nandinagari.js":769,"./Script_Extensions/New_Tai_Lue.js":770,"./Script_Extensions/Newa.js":771,"./Script_Extensions/Nko.js":772,"./Script_Extensions/Nushu.js":773,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":774,"./Script_Extensions/Ogham.js":775,"./Script_Extensions/Ol_Chiki.js":776,"./Script_Extensions/Old_Hungarian.js":777,"./Script_Extensions/Old_Italic.js":778,"./Script_Extensions/Old_North_Arabian.js":779,"./Script_Extensions/Old_Permic.js":780,"./Script_Extensions/Old_Persian.js":781,"./Script_Extensions/Old_Sogdian.js":782,"./Script_Extensions/Old_South_Arabian.js":783,"./Script_Extensions/Old_Turkic.js":784,"./Script_Extensions/Oriya.js":785,"./Script_Extensions/Osage.js":786,"./Script_Extensions/Osmanya.js":787,"./Script_Extensions/Pahawh_Hmong.js":788,"./Script_Extensions/Palmyrene.js":789,"./Script_Extensions/Pau_Cin_Hau.js":790,"./Script_Extensions/Phags_Pa.js":791,"./Script_Extensions/Phoenician.js":792,"./Script_Extensions/Psalter_Pahlavi.js":793,"./Script_Extensions/Rejang.js":794,"./Script_Extensions/Runic.js":795,"./Script_Extensions/Samaritan.js":796,"./Script_Extensions/Saurashtra.js":797,"./Script_Extensions/Sharada.js":798,"./Script_Extensions/Shavian.js":799,"./Script_Extensions/Siddham.js":800,"./Script_Extensions/SignWriting.js":801,"./Script_Extensions/Sinhala.js":802,"./Script_Extensions/Sogdian.js":803,"./Script_Extensions/Sora_Sompeng.js":804,"./Script_Extensions/Soyombo.js":805,"./Script_Extensions/Sundanese.js":806,"./Script_Extensions/Syloti_Nagri.js":807,"./Script_Extensions/Syriac.js":808,"./Script_Extensions/Tagalog.js":809,"./Script_Extensions/Tagbanwa.js":810,"./Script_Extensions/Tai_Le.js":811,"./Script_Extensions/Tai_Tham.js":812,"./Script_Extensions/Tai_Viet.js":813,"./Script_Extensions/Takri.js":814,"./Script_Extensions/Tamil.js":815,"./Script_Extensions/Tangut.js":816,"./Script_Extensions/Telugu.js":817,"./Script_Extensions/Thaana.js":818,"./Script_Extensions/Thai.js":819,"./Script_Extensions/Tibetan.js":820,"./Script_Extensions/Tifinagh.js":821,"./Script_Extensions/Tirhuta.js":822,"./Script_Extensions/Ugaritic.js":823,"./Script_Extensions/Vai.js":824,"./Script_Extensions/Wancho.js":825,"./Script_Extensions/Warang_Citi.js":826,"./Script_Extensions/Yezidi.js":827,"./Script_Extensions/Yi.js":828,"./Script_Extensions/Zanabazar_Square.js":829,"./index.js":830,"./unicode-version.js":831};function webpackContext(i){var t=webpackContextResolve(i);return r(t)}function webpackContextResolve(i){if(!r.o(n,i)){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}return n[i]}webpackContext.keys=function webpackContextKeys(){return Object.keys(n)},webpackContext.resolve=webpackContextResolve,i.exports=webpackContext,webpackContext.id=426},842:function(i,t,r){"use strict";r.r(t),r.d(t,"compile",(function(){return compileVueCodeForEvalFunction}));var n=r(34);r.d(t,"adaptCreateElement",(function(){return n.adaptCreateElement})),r.d(t,"addScopedStyle",(function(){return n.addScopedStyle})),r.d(t,"concatenate",(function(){return n.concatenate})),r.d(t,"isCodeVueSfc",(function(){return n.isCodeVueSfc}));var e=r(415),s=r(840),a=r.n(s),o=r(413),c=r(841),__assign=function(){return(__assign=Object.assign||function __assign(i){for(var t,r=1,n=arguments.length;r<n;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e]);return i}).apply(this,arguments)},p=/import\s*['"]([^'"]+)['"];?/gi,j=/import\s*(\*\s*as)?\s*(\w*?)\s*,?\s*(?:\{([\s\S]*?)\})?\s*from\s*['"]([^'"]+)['"];?/gi;function alias(i){var t=i.trim(),r=t.split(" as ");return r.length>1&&(t=r.shift()||""),{key:t,name:r[0]}}function rewriteImports(i,t,r){return void 0===r&&(r="require"),i.replace(j,(function(i,n,e,s,a){return function generate(i,t,r,n,e){void 0===e&&(e=0);var s,a=t.split("/").pop(),o=a?a.replace(/\W/g,"_")+"$"+e:"",c="const "+alias(o).name+" = "+(t=n+"('"+t+"')")+";";return r&&(c+="const "+r+" = "+o+".default || "+o+";"),i.forEach((function(i){s=alias(i),c+="const "+s.name+" = "+o+"."+s.key+";"})),c}(s?s.split(",").filter((function(i){return i.trim()})):[],a,e,r,t)})).replace(p,(function(i,t){return r+"('"+t+"');"}))}function transformOneImport(i,t,r){var n=i.start+r,e=i.end+r,s=t.substring(n,e),a=rewriteImports(s,r);return{code:t=t.substring(0,n)+a+t.substring(e),offset:r+=a.length-s.length}}var _=r(414),S=o.Parser.extend(_());function getAst(i){return S.parse(i,{ecmaVersion:2019,sourceType:"module"})}var buildStyles=function(i){var t="";if(i&&i.forEach((function(i){i&&(t+=i)})),""!==t)return t.trim()};function parseScriptCode(i){var t="",r=-1,n=-1,e=0,s=-1;if(a()(getAst(i),{ExportNamedDeclaration:function(a){t=i.slice(0,a.start+e),r=a.declaration.declarations[0].init.start+e,n=a.declaration.declarations[0].init.end+e,a.declarations&&(s=getRenderFunctionStart(a.declarations[0]))},ExportDefaultDeclaration:function(a){t=i.slice(0,a.start+e),r=a.declaration.start+e,n=a.declaration.end+e,s=getRenderFunctionStart(a.declaration)},AssignmentExpression:function(s){(/exports/.test(s.left.name)||s.left.object&&/module/.test(s.left.object.name)&&/exports/.test(s.left.property.name))&&(t=i.slice(0,s.start+e),r=s.right.start+e,n=s.right.end+e)},ImportDeclaration:function(t){var r=transformOneImport(t,i,e);e=r.offset,i=r.code}}),-1===r)throw new Error("Failed to parse single file component: "+i);s>0&&(s+=e,i=insertCreateElementFunction(i.slice(0,s+1),i.slice(s+1)),n+=l);var o=i.slice(r+1,n-1);return{preprocessing:t,component:o,postprocessing:i.slice(n)}}var l=31;function getRenderFunctionStart(i){if(i&&i.properties){var t=i.properties.find((function(i){return i.key&&"Identifier"===i.key.type&&"render"===i.key.name}));if(t&&t.value.body)return t.value.body.start}return-1}function insertCreateElementFunction(i,t){return i+";const h = this.$createElement;"+t}function normalizeSfcComponent(i){var t=function getSingleFileComponentParts(i){var t=Object(n.parseComponent)(i);return t.script&&(t.script=t.script.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,"$1")),t}(i),r=function injectTemplateAndParseExport(i){var t=i.template?i.template.replace(/`/g,"\\`"):void 0;if(!i.script)return{component:"{template: `"+t+"` }"};var r=parseScriptCode(i.script);return r.component=t?"{template: `"+t+"`, "+r.component+"}":"{"+r.component+"}",r}(t);return{script:[r.preprocessing,"return "+r.component,r.postprocessing].join(";"),style:buildStyles(t.styles)}}var u=Object(c.a)(),y={chrome:71,firefox:64,safari:12,ie:11,edge:19};function getTargetFromBrowser(){var i;if((null==u?void 0:u.version)&&(null==u?void 0:u.name)&&function isBubleBrowser(i){return i in y}(u.name)){var t=parseInt(u.version,10);return(i={})[u.name]=t<=y[u.name]?t:y[u.name],i}return{}}function compileVueCodeForEvalFunction(i,t){void 0===t&&(t={});var r=function prepareVueCodeForEvalFunction(i,t){var r,e=!1;if(Object(n.isCodeVueSfc)(i))return normalizeSfcComponent(i);if(!/new Vue\(/.test(i)){if(t.jsx){var s=parseScriptCode(i),o=s.preprocessing,c=s.component,p=s.postprocessing;return{script:o+";return {"+c+"};"+p}}var j=/^\W*</.test(i)?{index:0}:i.match(/\n[\t ]*</),_=j&&void 0!==j.index?j.index:-1;r=_>-1?i.slice(_):void 0,i=_>-1?i.slice(0,_):i,e=!0}var S=getAst(i),u=0,y=[];a()(S,__assign({ExpressionStatement:function(t){if("NewExpression"===t.expression.type&&"Vue"===t.expression.callee.name){var r=i.slice(0,t.expression.start+u),n=t.expression.arguments&&t.expression.arguments.length?t.expression.arguments[0]:void 0,e=getRenderFunctionStart(n),s=n.end;e>0&&(i=insertCreateElementFunction(i.slice(0,e+1),i.slice(e+1)),s+=l);var a=n?i.slice(n.start+u,s+u):"";i=r+";return "+a}},ImportDeclaration:function(t){var r=transformOneImport(t,i,u);u=r.offset,i=r.code,e&&t.specifiers&&t.specifiers.forEach((function(i){return y.push(i.local.name)}))}},e?{VariableDeclaration:function(i){i.declarations.forEach((function(i){i.id.name?y.push(i.id.name):i.id.properties&&i.id.properties.forEach((function(i){y.push(i.value.name)}))}))},FunctionDeclaration:function(i){y.push(i.id.name)}}:{})),e&&(i+=";return {data:function(){return {"+y.map((function(i){return i+":"+i})).join(",")+"};}}");return{script:i,style:void 0,template:r}}(i,t),s="undefined"!=typeof window?getTargetFromBrowser():{};return __assign(__assign({},r),{script:Object(e.a)(r.script,__assign({target:s},t)).code})}}}]);