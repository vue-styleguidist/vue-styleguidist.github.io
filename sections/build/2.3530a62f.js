(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{392:function(t,i,r){var n={"./Binary_Property/ASCII.js":393,"./Binary_Property/ASCII_Hex_Digit.js":394,"./Binary_Property/Alphabetic.js":395,"./Binary_Property/Any.js":396,"./Binary_Property/Assigned.js":397,"./Binary_Property/Bidi_Control.js":398,"./Binary_Property/Bidi_Mirrored.js":399,"./Binary_Property/Case_Ignorable.js":400,"./Binary_Property/Cased.js":401,"./Binary_Property/Changes_When_Casefolded.js":402,"./Binary_Property/Changes_When_Casemapped.js":403,"./Binary_Property/Changes_When_Lowercased.js":404,"./Binary_Property/Changes_When_NFKC_Casefolded.js":405,"./Binary_Property/Changes_When_Titlecased.js":406,"./Binary_Property/Changes_When_Uppercased.js":407,"./Binary_Property/Dash.js":408,"./Binary_Property/Default_Ignorable_Code_Point.js":409,"./Binary_Property/Deprecated.js":410,"./Binary_Property/Diacritic.js":411,"./Binary_Property/Emoji.js":412,"./Binary_Property/Emoji_Component.js":413,"./Binary_Property/Emoji_Modifier.js":414,"./Binary_Property/Emoji_Modifier_Base.js":415,"./Binary_Property/Emoji_Presentation.js":416,"./Binary_Property/Extended_Pictographic.js":417,"./Binary_Property/Extender.js":418,"./Binary_Property/Grapheme_Base.js":419,"./Binary_Property/Grapheme_Extend.js":420,"./Binary_Property/Hex_Digit.js":421,"./Binary_Property/IDS_Binary_Operator.js":422,"./Binary_Property/IDS_Trinary_Operator.js":423,"./Binary_Property/ID_Continue.js":424,"./Binary_Property/ID_Start.js":425,"./Binary_Property/Ideographic.js":426,"./Binary_Property/Join_Control.js":427,"./Binary_Property/Logical_Order_Exception.js":428,"./Binary_Property/Lowercase.js":429,"./Binary_Property/Math.js":430,"./Binary_Property/Noncharacter_Code_Point.js":431,"./Binary_Property/Pattern_Syntax.js":432,"./Binary_Property/Pattern_White_Space.js":433,"./Binary_Property/Quotation_Mark.js":434,"./Binary_Property/Radical.js":435,"./Binary_Property/Regional_Indicator.js":436,"./Binary_Property/Sentence_Terminal.js":437,"./Binary_Property/Soft_Dotted.js":438,"./Binary_Property/Terminal_Punctuation.js":439,"./Binary_Property/Unified_Ideograph.js":440,"./Binary_Property/Uppercase.js":441,"./Binary_Property/Variation_Selector.js":442,"./Binary_Property/White_Space.js":443,"./Binary_Property/XID_Continue.js":444,"./Binary_Property/XID_Start.js":445,"./General_Category/Cased_Letter.js":446,"./General_Category/Close_Punctuation.js":447,"./General_Category/Connector_Punctuation.js":448,"./General_Category/Control.js":449,"./General_Category/Currency_Symbol.js":450,"./General_Category/Dash_Punctuation.js":451,"./General_Category/Decimal_Number.js":452,"./General_Category/Enclosing_Mark.js":453,"./General_Category/Final_Punctuation.js":454,"./General_Category/Format.js":455,"./General_Category/Initial_Punctuation.js":456,"./General_Category/Letter.js":457,"./General_Category/Letter_Number.js":458,"./General_Category/Line_Separator.js":459,"./General_Category/Lowercase_Letter.js":460,"./General_Category/Mark.js":461,"./General_Category/Math_Symbol.js":462,"./General_Category/Modifier_Letter.js":463,"./General_Category/Modifier_Symbol.js":464,"./General_Category/Nonspacing_Mark.js":465,"./General_Category/Number.js":466,"./General_Category/Open_Punctuation.js":467,"./General_Category/Other.js":468,"./General_Category/Other_Letter.js":469,"./General_Category/Other_Number.js":470,"./General_Category/Other_Punctuation.js":471,"./General_Category/Other_Symbol.js":472,"./General_Category/Paragraph_Separator.js":473,"./General_Category/Private_Use.js":474,"./General_Category/Punctuation.js":475,"./General_Category/Separator.js":476,"./General_Category/Space_Separator.js":477,"./General_Category/Spacing_Mark.js":478,"./General_Category/Surrogate.js":479,"./General_Category/Symbol.js":480,"./General_Category/Titlecase_Letter.js":481,"./General_Category/Unassigned.js":482,"./General_Category/Uppercase_Letter.js":483,"./Script/Adlam.js":484,"./Script/Ahom.js":485,"./Script/Anatolian_Hieroglyphs.js":486,"./Script/Arabic.js":487,"./Script/Armenian.js":488,"./Script/Avestan.js":489,"./Script/Balinese.js":490,"./Script/Bamum.js":491,"./Script/Bassa_Vah.js":492,"./Script/Batak.js":493,"./Script/Bengali.js":494,"./Script/Bhaiksuki.js":495,"./Script/Bopomofo.js":496,"./Script/Brahmi.js":497,"./Script/Braille.js":498,"./Script/Buginese.js":499,"./Script/Buhid.js":500,"./Script/Canadian_Aboriginal.js":501,"./Script/Carian.js":502,"./Script/Caucasian_Albanian.js":503,"./Script/Chakma.js":504,"./Script/Cham.js":505,"./Script/Cherokee.js":506,"./Script/Common.js":507,"./Script/Coptic.js":508,"./Script/Cuneiform.js":509,"./Script/Cypriot.js":510,"./Script/Cyrillic.js":511,"./Script/Deseret.js":512,"./Script/Devanagari.js":513,"./Script/Dogra.js":514,"./Script/Duployan.js":515,"./Script/Egyptian_Hieroglyphs.js":516,"./Script/Elbasan.js":517,"./Script/Elymaic.js":518,"./Script/Ethiopic.js":519,"./Script/Georgian.js":520,"./Script/Glagolitic.js":521,"./Script/Gothic.js":522,"./Script/Grantha.js":523,"./Script/Greek.js":524,"./Script/Gujarati.js":525,"./Script/Gunjala_Gondi.js":526,"./Script/Gurmukhi.js":527,"./Script/Han.js":528,"./Script/Hangul.js":529,"./Script/Hanifi_Rohingya.js":530,"./Script/Hanunoo.js":531,"./Script/Hatran.js":532,"./Script/Hebrew.js":533,"./Script/Hiragana.js":534,"./Script/Imperial_Aramaic.js":535,"./Script/Inherited.js":536,"./Script/Inscriptional_Pahlavi.js":537,"./Script/Inscriptional_Parthian.js":538,"./Script/Javanese.js":539,"./Script/Kaithi.js":540,"./Script/Kannada.js":541,"./Script/Katakana.js":542,"./Script/Kayah_Li.js":543,"./Script/Kharoshthi.js":544,"./Script/Khmer.js":545,"./Script/Khojki.js":546,"./Script/Khudawadi.js":547,"./Script/Lao.js":548,"./Script/Latin.js":549,"./Script/Lepcha.js":550,"./Script/Limbu.js":551,"./Script/Linear_A.js":552,"./Script/Linear_B.js":553,"./Script/Lisu.js":554,"./Script/Lycian.js":555,"./Script/Lydian.js":556,"./Script/Mahajani.js":557,"./Script/Makasar.js":558,"./Script/Malayalam.js":559,"./Script/Mandaic.js":560,"./Script/Manichaean.js":561,"./Script/Marchen.js":562,"./Script/Masaram_Gondi.js":563,"./Script/Medefaidrin.js":564,"./Script/Meetei_Mayek.js":565,"./Script/Mende_Kikakui.js":566,"./Script/Meroitic_Cursive.js":567,"./Script/Meroitic_Hieroglyphs.js":568,"./Script/Miao.js":569,"./Script/Modi.js":570,"./Script/Mongolian.js":571,"./Script/Mro.js":572,"./Script/Multani.js":573,"./Script/Myanmar.js":574,"./Script/Nabataean.js":575,"./Script/Nandinagari.js":576,"./Script/New_Tai_Lue.js":577,"./Script/Newa.js":578,"./Script/Nko.js":579,"./Script/Nushu.js":580,"./Script/Nyiakeng_Puachue_Hmong.js":581,"./Script/Ogham.js":582,"./Script/Ol_Chiki.js":583,"./Script/Old_Hungarian.js":584,"./Script/Old_Italic.js":585,"./Script/Old_North_Arabian.js":586,"./Script/Old_Permic.js":587,"./Script/Old_Persian.js":588,"./Script/Old_Sogdian.js":589,"./Script/Old_South_Arabian.js":590,"./Script/Old_Turkic.js":591,"./Script/Oriya.js":592,"./Script/Osage.js":593,"./Script/Osmanya.js":594,"./Script/Pahawh_Hmong.js":595,"./Script/Palmyrene.js":596,"./Script/Pau_Cin_Hau.js":597,"./Script/Phags_Pa.js":598,"./Script/Phoenician.js":599,"./Script/Psalter_Pahlavi.js":600,"./Script/Rejang.js":601,"./Script/Runic.js":602,"./Script/Samaritan.js":603,"./Script/Saurashtra.js":604,"./Script/Sharada.js":605,"./Script/Shavian.js":606,"./Script/Siddham.js":607,"./Script/SignWriting.js":608,"./Script/Sinhala.js":609,"./Script/Sogdian.js":610,"./Script/Sora_Sompeng.js":611,"./Script/Soyombo.js":612,"./Script/Sundanese.js":613,"./Script/Syloti_Nagri.js":614,"./Script/Syriac.js":615,"./Script/Tagalog.js":616,"./Script/Tagbanwa.js":617,"./Script/Tai_Le.js":618,"./Script/Tai_Tham.js":619,"./Script/Tai_Viet.js":620,"./Script/Takri.js":621,"./Script/Tamil.js":622,"./Script/Tangut.js":623,"./Script/Telugu.js":624,"./Script/Thaana.js":625,"./Script/Thai.js":626,"./Script/Tibetan.js":627,"./Script/Tifinagh.js":628,"./Script/Tirhuta.js":629,"./Script/Ugaritic.js":630,"./Script/Vai.js":631,"./Script/Wancho.js":632,"./Script/Warang_Citi.js":633,"./Script/Yi.js":634,"./Script/Zanabazar_Square.js":635,"./Script_Extensions/Adlam.js":636,"./Script_Extensions/Ahom.js":637,"./Script_Extensions/Anatolian_Hieroglyphs.js":638,"./Script_Extensions/Arabic.js":639,"./Script_Extensions/Armenian.js":640,"./Script_Extensions/Avestan.js":641,"./Script_Extensions/Balinese.js":642,"./Script_Extensions/Bamum.js":643,"./Script_Extensions/Bassa_Vah.js":644,"./Script_Extensions/Batak.js":645,"./Script_Extensions/Bengali.js":646,"./Script_Extensions/Bhaiksuki.js":647,"./Script_Extensions/Bopomofo.js":648,"./Script_Extensions/Brahmi.js":649,"./Script_Extensions/Braille.js":650,"./Script_Extensions/Buginese.js":651,"./Script_Extensions/Buhid.js":652,"./Script_Extensions/Canadian_Aboriginal.js":653,"./Script_Extensions/Carian.js":654,"./Script_Extensions/Caucasian_Albanian.js":655,"./Script_Extensions/Chakma.js":656,"./Script_Extensions/Cham.js":657,"./Script_Extensions/Cherokee.js":658,"./Script_Extensions/Common.js":659,"./Script_Extensions/Coptic.js":660,"./Script_Extensions/Cuneiform.js":661,"./Script_Extensions/Cypriot.js":662,"./Script_Extensions/Cyrillic.js":663,"./Script_Extensions/Deseret.js":664,"./Script_Extensions/Devanagari.js":665,"./Script_Extensions/Dogra.js":666,"./Script_Extensions/Duployan.js":667,"./Script_Extensions/Egyptian_Hieroglyphs.js":668,"./Script_Extensions/Elbasan.js":669,"./Script_Extensions/Elymaic.js":670,"./Script_Extensions/Ethiopic.js":671,"./Script_Extensions/Georgian.js":672,"./Script_Extensions/Glagolitic.js":673,"./Script_Extensions/Gothic.js":674,"./Script_Extensions/Grantha.js":675,"./Script_Extensions/Greek.js":676,"./Script_Extensions/Gujarati.js":677,"./Script_Extensions/Gunjala_Gondi.js":678,"./Script_Extensions/Gurmukhi.js":679,"./Script_Extensions/Han.js":680,"./Script_Extensions/Hangul.js":681,"./Script_Extensions/Hanifi_Rohingya.js":682,"./Script_Extensions/Hanunoo.js":683,"./Script_Extensions/Hatran.js":684,"./Script_Extensions/Hebrew.js":685,"./Script_Extensions/Hiragana.js":686,"./Script_Extensions/Imperial_Aramaic.js":687,"./Script_Extensions/Inherited.js":688,"./Script_Extensions/Inscriptional_Pahlavi.js":689,"./Script_Extensions/Inscriptional_Parthian.js":690,"./Script_Extensions/Javanese.js":691,"./Script_Extensions/Kaithi.js":692,"./Script_Extensions/Kannada.js":693,"./Script_Extensions/Katakana.js":694,"./Script_Extensions/Kayah_Li.js":695,"./Script_Extensions/Kharoshthi.js":696,"./Script_Extensions/Khmer.js":697,"./Script_Extensions/Khojki.js":698,"./Script_Extensions/Khudawadi.js":699,"./Script_Extensions/Lao.js":700,"./Script_Extensions/Latin.js":701,"./Script_Extensions/Lepcha.js":702,"./Script_Extensions/Limbu.js":703,"./Script_Extensions/Linear_A.js":704,"./Script_Extensions/Linear_B.js":705,"./Script_Extensions/Lisu.js":706,"./Script_Extensions/Lycian.js":707,"./Script_Extensions/Lydian.js":708,"./Script_Extensions/Mahajani.js":709,"./Script_Extensions/Makasar.js":710,"./Script_Extensions/Malayalam.js":711,"./Script_Extensions/Mandaic.js":712,"./Script_Extensions/Manichaean.js":713,"./Script_Extensions/Marchen.js":714,"./Script_Extensions/Masaram_Gondi.js":715,"./Script_Extensions/Medefaidrin.js":716,"./Script_Extensions/Meetei_Mayek.js":717,"./Script_Extensions/Mende_Kikakui.js":718,"./Script_Extensions/Meroitic_Cursive.js":719,"./Script_Extensions/Meroitic_Hieroglyphs.js":720,"./Script_Extensions/Miao.js":721,"./Script_Extensions/Modi.js":722,"./Script_Extensions/Mongolian.js":723,"./Script_Extensions/Mro.js":724,"./Script_Extensions/Multani.js":725,"./Script_Extensions/Myanmar.js":726,"./Script_Extensions/Nabataean.js":727,"./Script_Extensions/Nandinagari.js":728,"./Script_Extensions/New_Tai_Lue.js":729,"./Script_Extensions/Newa.js":730,"./Script_Extensions/Nko.js":731,"./Script_Extensions/Nushu.js":732,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":733,"./Script_Extensions/Ogham.js":734,"./Script_Extensions/Ol_Chiki.js":735,"./Script_Extensions/Old_Hungarian.js":736,"./Script_Extensions/Old_Italic.js":737,"./Script_Extensions/Old_North_Arabian.js":738,"./Script_Extensions/Old_Permic.js":739,"./Script_Extensions/Old_Persian.js":740,"./Script_Extensions/Old_Sogdian.js":741,"./Script_Extensions/Old_South_Arabian.js":742,"./Script_Extensions/Old_Turkic.js":743,"./Script_Extensions/Oriya.js":744,"./Script_Extensions/Osage.js":745,"./Script_Extensions/Osmanya.js":746,"./Script_Extensions/Pahawh_Hmong.js":747,"./Script_Extensions/Palmyrene.js":748,"./Script_Extensions/Pau_Cin_Hau.js":749,"./Script_Extensions/Phags_Pa.js":750,"./Script_Extensions/Phoenician.js":751,"./Script_Extensions/Psalter_Pahlavi.js":752,"./Script_Extensions/Rejang.js":753,"./Script_Extensions/Runic.js":754,"./Script_Extensions/Samaritan.js":755,"./Script_Extensions/Saurashtra.js":756,"./Script_Extensions/Sharada.js":757,"./Script_Extensions/Shavian.js":758,"./Script_Extensions/Siddham.js":759,"./Script_Extensions/SignWriting.js":760,"./Script_Extensions/Sinhala.js":761,"./Script_Extensions/Sogdian.js":762,"./Script_Extensions/Sora_Sompeng.js":763,"./Script_Extensions/Soyombo.js":764,"./Script_Extensions/Sundanese.js":765,"./Script_Extensions/Syloti_Nagri.js":766,"./Script_Extensions/Syriac.js":767,"./Script_Extensions/Tagalog.js":768,"./Script_Extensions/Tagbanwa.js":769,"./Script_Extensions/Tai_Le.js":770,"./Script_Extensions/Tai_Tham.js":771,"./Script_Extensions/Tai_Viet.js":772,"./Script_Extensions/Takri.js":773,"./Script_Extensions/Tamil.js":774,"./Script_Extensions/Tangut.js":775,"./Script_Extensions/Telugu.js":776,"./Script_Extensions/Thaana.js":777,"./Script_Extensions/Thai.js":778,"./Script_Extensions/Tibetan.js":779,"./Script_Extensions/Tifinagh.js":780,"./Script_Extensions/Tirhuta.js":781,"./Script_Extensions/Ugaritic.js":782,"./Script_Extensions/Vai.js":783,"./Script_Extensions/Wancho.js":784,"./Script_Extensions/Warang_Citi.js":785,"./Script_Extensions/Yi.js":786,"./Script_Extensions/Zanabazar_Square.js":787,"./index.js":788,"./unicode-version.js":789};function webpackContext(t){var i=webpackContextResolve(t);return r(i)}function webpackContextResolve(t){if(!r.o(n,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n[t]}webpackContext.keys=function webpackContextKeys(){return Object.keys(n)},webpackContext.resolve=webpackContextResolve,t.exports=webpackContext,webpackContext.id=392},799:function(t,i,r){"use strict";r.r(i),r.d(i,"compile",function(){return compileVueCodeForEvalFunction});var n=r(45);r.d(i,"adaptCreateElement",function(){return n.a}),r.d(i,"addScopedStyle",function(){return n.b}),r.d(i,"concatenate",function(){return n.c}),r.d(i,"isCodeVueSfc",function(){return n.d});var e=r(381),s=r(798),a=r.n(s),o=r(379),c=function __assign(){return(c=Object.assign||function __assign(t){for(var i,r=1,n=arguments.length;r<n;r++)for(var e in i=arguments[r])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t}).apply(this,arguments)},p=/import\s*['"]([^'"]+)['"];?/gi,j=/import\s*(\*\s*as)?\s*(\w*?)\s*,?\s*(?:\{([\s\S]*?)\})?\s*from\s*['"]([^'"]+)['"];?/gi;function alias(t){var i=t.trim(),r=i.split(" as ");return r.length>1&&(i=r.shift()||""),{key:i,name:r[0]}}function generate(t,i,r,n,e){void 0===e&&(e=0);var s,a=i.split("/").pop(),o=a?a.replace(/\W/g,"_")+"$"+e:"",c="const "+alias(o).name+" = "+(i=n+"('"+i+"')")+";";return r&&(c+="\nconst "+r+" = "+o+".default || "+o+";"),t.forEach(function(t){s=alias(t),c+="\nconst "+s.name+" = "+o+"."+s.key+";"}),c}function rewriteImports(t,i,r){return void 0===r&&(r="require"),t.replace(j,function(t,n,e,s,a){return generate(s?s.split(",").filter(function(t){return t.trim()}):[],a,e,r,i)}).replace(p,function(t,i){return r+"('"+i+"');"})}function transformOneImport(t,i,r){var n=t.start+r,e=t.end+r,s=i.substring(n,e),a=rewriteImports(s,r);return{code:i=i.substring(0,n)+a+i.substring(e),offset:r+=a.length-s.length}}var _=r(380),S=o.Parser.extend(_());function getAst(t){return S.parse(t,{ecmaVersion:2019,sourceType:"module"})}var l=function buildStyles(t){var i="";if(t&&t.forEach(function(t){t&&(i+=t)}),""!==i)return i.trim()};function getSingleFileComponentParts(t){var i=Object(n.e)(t);return i.script&&(i.script=i.script.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,"$1")),i}function injectTemplateAndParseExport(t){var i=t.template?t.template.replace(/`/g,"\\`"):void 0;if(!t.script)return{component:"{\ntemplate: `"+i+"` }"};var r=parseScriptCode(t.script);return r.component=i?"{\n  template: `"+i+"`,\n  "+r.component+"}":"{\n  "+r.component+"}",r}function parseScriptCode(t){var i="",r=-1,n=-1,e=0,s=-1;if(a()(getAst(t),{ExportNamedDeclaration:function ExportNamedDeclaration(a){i=t.slice(0,a.start+e),r=a.declaration.declarations[0].init.start+e,n=a.declaration.declarations[0].init.end+e,a.declarations&&(s=getRenderFunctionStart(a.declarations[0]))},ExportDefaultDeclaration:function ExportDefaultDeclaration(a){i=t.slice(0,a.start+e),r=a.declaration.start+e,n=a.declaration.end+e,s=getRenderFunctionStart(a.declaration)},AssignmentExpression:function AssignmentExpression(s){(/exports/.test(s.left.name)||s.left.object&&/module/.test(s.left.object.name)&&/exports/.test(s.left.property.name))&&(i=t.slice(0,s.start+e),r=s.right.start+e,n=s.right.end+e)},ImportDeclaration:function ImportDeclaration(i){var r=transformOneImport(i,t,e);e=r.offset,t=r.code}}),-1===r)throw new Error("Failed to parse single file component: "+t);s>0&&(s+=e,t=insertCreateElementFunction(t.slice(0,s+1),t.slice(s+1)),n+=u);var o=t.slice(r+1,n-1);return{preprocessing:i,component:o,postprocessing:t.slice(n)}}var u=31;function getRenderFunctionStart(t){if(t&&t.properties){var i=t.properties.find(function(t){return t.key&&"Identifier"===t.key.type&&"render"===t.key.name});if(i&&i.value.body)return i.value.body.start}return-1}function insertCreateElementFunction(t,i){return t+"\nconst h = this.$createElement;"+i}function normalizeSfcComponent(t){var i=getSingleFileComponentParts(t),r=injectTemplateAndParseExport(i);return{script:[r.preprocessing,";return "+r.component,r.postprocessing].join("\n"),style:l(i.styles)}}function compileVueCodeForEvalFunction(t,i){void 0===i&&(i={});var r=prepareVueCodeForEvalFunction(t,i);return c(c({},r),{script:Object(e.a)(r.script,i).code})}function prepareVueCodeForEvalFunction(t,i){var r,e=!1;if(Object(n.d)(t))return normalizeSfcComponent(t);if(!/new Vue\(/.test(t)){if(i.jsx){var s=parseScriptCode(t);return{script:s.preprocessing+";\nreturn {"+s.component+"};\n"+s.postprocessing}}var o=/^\W*</.test(t)?{index:0}:t.match(/\n[\t ]*</),p=o&&void 0!==o.index?o.index:-1;r=p>-1?t.slice(p):void 0,t=p>-1?t.slice(0,p):t,e=!0}var j=getAst(t),_=0,S=[];return a()(j,c({ExpressionStatement:function ExpressionStatement(i){if("NewExpression"===i.expression.type&&"Vue"===i.expression.callee.name){var r=t.slice(0,i.expression.start+_),n=i.expression.arguments&&i.expression.arguments.length?i.expression.arguments[0]:void 0,e=getRenderFunctionStart(n),s=n.end;e>0&&(t=insertCreateElementFunction(t.slice(0,e+1),t.slice(e+1)),s+=u);var a=n?t.slice(n.start+_,s+_):"";t=r+";return "+a}},ImportDeclaration:function ImportDeclaration(i){var r=transformOneImport(i,t,_);_=r.offset,t=r.code,e&&i.specifiers&&i.specifiers.forEach(function(t){return S.push(t.local.name)})}},e?{VariableDeclaration:function VariableDeclaration(t){t.declarations.forEach(function(t){t.id.name?S.push(t.id.name):t.id.properties&&t.id.properties.forEach(function(t){S.push(t.value.name)})})},FunctionDeclaration:function FunctionDeclaration(t){S.push(t.id.name)}}:{})),e&&(t+=";return {data:function(){return {"+S.map(function(t){return t+":"+t}).join(",")+"};}}"),{script:t,style:void 0,template:r}}}}]);