(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{416:function(t,i,r){var n={"./Binary_Property/ASCII.js":417,"./Binary_Property/ASCII_Hex_Digit.js":418,"./Binary_Property/Alphabetic.js":419,"./Binary_Property/Any.js":420,"./Binary_Property/Assigned.js":421,"./Binary_Property/Bidi_Control.js":422,"./Binary_Property/Bidi_Mirrored.js":423,"./Binary_Property/Case_Ignorable.js":424,"./Binary_Property/Cased.js":425,"./Binary_Property/Changes_When_Casefolded.js":426,"./Binary_Property/Changes_When_Casemapped.js":427,"./Binary_Property/Changes_When_Lowercased.js":428,"./Binary_Property/Changes_When_NFKC_Casefolded.js":429,"./Binary_Property/Changes_When_Titlecased.js":430,"./Binary_Property/Changes_When_Uppercased.js":431,"./Binary_Property/Dash.js":432,"./Binary_Property/Default_Ignorable_Code_Point.js":433,"./Binary_Property/Deprecated.js":434,"./Binary_Property/Diacritic.js":435,"./Binary_Property/Emoji.js":436,"./Binary_Property/Emoji_Component.js":437,"./Binary_Property/Emoji_Modifier.js":438,"./Binary_Property/Emoji_Modifier_Base.js":439,"./Binary_Property/Emoji_Presentation.js":440,"./Binary_Property/Extended_Pictographic.js":441,"./Binary_Property/Extender.js":442,"./Binary_Property/Grapheme_Base.js":443,"./Binary_Property/Grapheme_Extend.js":444,"./Binary_Property/Hex_Digit.js":445,"./Binary_Property/IDS_Binary_Operator.js":446,"./Binary_Property/IDS_Trinary_Operator.js":447,"./Binary_Property/ID_Continue.js":448,"./Binary_Property/ID_Start.js":449,"./Binary_Property/Ideographic.js":450,"./Binary_Property/Join_Control.js":451,"./Binary_Property/Logical_Order_Exception.js":452,"./Binary_Property/Lowercase.js":453,"./Binary_Property/Math.js":454,"./Binary_Property/Noncharacter_Code_Point.js":455,"./Binary_Property/Pattern_Syntax.js":456,"./Binary_Property/Pattern_White_Space.js":457,"./Binary_Property/Quotation_Mark.js":458,"./Binary_Property/Radical.js":459,"./Binary_Property/Regional_Indicator.js":460,"./Binary_Property/Sentence_Terminal.js":461,"./Binary_Property/Soft_Dotted.js":462,"./Binary_Property/Terminal_Punctuation.js":463,"./Binary_Property/Unified_Ideograph.js":464,"./Binary_Property/Uppercase.js":465,"./Binary_Property/Variation_Selector.js":466,"./Binary_Property/White_Space.js":467,"./Binary_Property/XID_Continue.js":468,"./Binary_Property/XID_Start.js":469,"./General_Category/Cased_Letter.js":470,"./General_Category/Close_Punctuation.js":471,"./General_Category/Connector_Punctuation.js":472,"./General_Category/Control.js":473,"./General_Category/Currency_Symbol.js":474,"./General_Category/Dash_Punctuation.js":475,"./General_Category/Decimal_Number.js":476,"./General_Category/Enclosing_Mark.js":477,"./General_Category/Final_Punctuation.js":478,"./General_Category/Format.js":479,"./General_Category/Initial_Punctuation.js":480,"./General_Category/Letter.js":481,"./General_Category/Letter_Number.js":482,"./General_Category/Line_Separator.js":483,"./General_Category/Lowercase_Letter.js":484,"./General_Category/Mark.js":485,"./General_Category/Math_Symbol.js":486,"./General_Category/Modifier_Letter.js":487,"./General_Category/Modifier_Symbol.js":488,"./General_Category/Nonspacing_Mark.js":489,"./General_Category/Number.js":490,"./General_Category/Open_Punctuation.js":491,"./General_Category/Other.js":492,"./General_Category/Other_Letter.js":493,"./General_Category/Other_Number.js":494,"./General_Category/Other_Punctuation.js":495,"./General_Category/Other_Symbol.js":496,"./General_Category/Paragraph_Separator.js":497,"./General_Category/Private_Use.js":498,"./General_Category/Punctuation.js":499,"./General_Category/Separator.js":500,"./General_Category/Space_Separator.js":501,"./General_Category/Spacing_Mark.js":502,"./General_Category/Surrogate.js":503,"./General_Category/Symbol.js":504,"./General_Category/Titlecase_Letter.js":505,"./General_Category/Unassigned.js":506,"./General_Category/Uppercase_Letter.js":507,"./Script/Adlam.js":508,"./Script/Ahom.js":509,"./Script/Anatolian_Hieroglyphs.js":510,"./Script/Arabic.js":511,"./Script/Armenian.js":512,"./Script/Avestan.js":513,"./Script/Balinese.js":514,"./Script/Bamum.js":515,"./Script/Bassa_Vah.js":516,"./Script/Batak.js":517,"./Script/Bengali.js":518,"./Script/Bhaiksuki.js":519,"./Script/Bopomofo.js":520,"./Script/Brahmi.js":521,"./Script/Braille.js":522,"./Script/Buginese.js":523,"./Script/Buhid.js":524,"./Script/Canadian_Aboriginal.js":525,"./Script/Carian.js":526,"./Script/Caucasian_Albanian.js":527,"./Script/Chakma.js":528,"./Script/Cham.js":529,"./Script/Cherokee.js":530,"./Script/Chorasmian.js":531,"./Script/Common.js":532,"./Script/Coptic.js":533,"./Script/Cuneiform.js":534,"./Script/Cypriot.js":535,"./Script/Cyrillic.js":536,"./Script/Deseret.js":537,"./Script/Devanagari.js":538,"./Script/Dives_Akuru.js":539,"./Script/Dogra.js":540,"./Script/Duployan.js":541,"./Script/Egyptian_Hieroglyphs.js":542,"./Script/Elbasan.js":543,"./Script/Elymaic.js":544,"./Script/Ethiopic.js":545,"./Script/Georgian.js":546,"./Script/Glagolitic.js":547,"./Script/Gothic.js":548,"./Script/Grantha.js":549,"./Script/Greek.js":550,"./Script/Gujarati.js":551,"./Script/Gunjala_Gondi.js":552,"./Script/Gurmukhi.js":553,"./Script/Han.js":554,"./Script/Hangul.js":555,"./Script/Hanifi_Rohingya.js":556,"./Script/Hanunoo.js":557,"./Script/Hatran.js":558,"./Script/Hebrew.js":559,"./Script/Hiragana.js":560,"./Script/Imperial_Aramaic.js":561,"./Script/Inherited.js":562,"./Script/Inscriptional_Pahlavi.js":563,"./Script/Inscriptional_Parthian.js":564,"./Script/Javanese.js":565,"./Script/Kaithi.js":566,"./Script/Kannada.js":567,"./Script/Katakana.js":568,"./Script/Kayah_Li.js":569,"./Script/Kharoshthi.js":570,"./Script/Khitan_Small_Script.js":571,"./Script/Khmer.js":572,"./Script/Khojki.js":573,"./Script/Khudawadi.js":574,"./Script/Lao.js":575,"./Script/Latin.js":576,"./Script/Lepcha.js":577,"./Script/Limbu.js":578,"./Script/Linear_A.js":579,"./Script/Linear_B.js":580,"./Script/Lisu.js":581,"./Script/Lycian.js":582,"./Script/Lydian.js":583,"./Script/Mahajani.js":584,"./Script/Makasar.js":585,"./Script/Malayalam.js":586,"./Script/Mandaic.js":587,"./Script/Manichaean.js":588,"./Script/Marchen.js":589,"./Script/Masaram_Gondi.js":590,"./Script/Medefaidrin.js":591,"./Script/Meetei_Mayek.js":592,"./Script/Mende_Kikakui.js":593,"./Script/Meroitic_Cursive.js":594,"./Script/Meroitic_Hieroglyphs.js":595,"./Script/Miao.js":596,"./Script/Modi.js":597,"./Script/Mongolian.js":598,"./Script/Mro.js":599,"./Script/Multani.js":600,"./Script/Myanmar.js":601,"./Script/Nabataean.js":602,"./Script/Nandinagari.js":603,"./Script/New_Tai_Lue.js":604,"./Script/Newa.js":605,"./Script/Nko.js":606,"./Script/Nushu.js":607,"./Script/Nyiakeng_Puachue_Hmong.js":608,"./Script/Ogham.js":609,"./Script/Ol_Chiki.js":610,"./Script/Old_Hungarian.js":611,"./Script/Old_Italic.js":612,"./Script/Old_North_Arabian.js":613,"./Script/Old_Permic.js":614,"./Script/Old_Persian.js":615,"./Script/Old_Sogdian.js":616,"./Script/Old_South_Arabian.js":617,"./Script/Old_Turkic.js":618,"./Script/Oriya.js":619,"./Script/Osage.js":620,"./Script/Osmanya.js":621,"./Script/Pahawh_Hmong.js":622,"./Script/Palmyrene.js":623,"./Script/Pau_Cin_Hau.js":624,"./Script/Phags_Pa.js":625,"./Script/Phoenician.js":626,"./Script/Psalter_Pahlavi.js":627,"./Script/Rejang.js":628,"./Script/Runic.js":629,"./Script/Samaritan.js":630,"./Script/Saurashtra.js":631,"./Script/Sharada.js":632,"./Script/Shavian.js":633,"./Script/Siddham.js":634,"./Script/SignWriting.js":635,"./Script/Sinhala.js":636,"./Script/Sogdian.js":637,"./Script/Sora_Sompeng.js":638,"./Script/Soyombo.js":639,"./Script/Sundanese.js":640,"./Script/Syloti_Nagri.js":641,"./Script/Syriac.js":642,"./Script/Tagalog.js":643,"./Script/Tagbanwa.js":644,"./Script/Tai_Le.js":645,"./Script/Tai_Tham.js":646,"./Script/Tai_Viet.js":647,"./Script/Takri.js":648,"./Script/Tamil.js":649,"./Script/Tangut.js":650,"./Script/Telugu.js":651,"./Script/Thaana.js":652,"./Script/Thai.js":653,"./Script/Tibetan.js":654,"./Script/Tifinagh.js":655,"./Script/Tirhuta.js":656,"./Script/Ugaritic.js":657,"./Script/Vai.js":658,"./Script/Wancho.js":659,"./Script/Warang_Citi.js":660,"./Script/Yezidi.js":661,"./Script/Yi.js":662,"./Script/Zanabazar_Square.js":663,"./Script_Extensions/Adlam.js":664,"./Script_Extensions/Ahom.js":665,"./Script_Extensions/Anatolian_Hieroglyphs.js":666,"./Script_Extensions/Arabic.js":667,"./Script_Extensions/Armenian.js":668,"./Script_Extensions/Avestan.js":669,"./Script_Extensions/Balinese.js":670,"./Script_Extensions/Bamum.js":671,"./Script_Extensions/Bassa_Vah.js":672,"./Script_Extensions/Batak.js":673,"./Script_Extensions/Bengali.js":674,"./Script_Extensions/Bhaiksuki.js":675,"./Script_Extensions/Bopomofo.js":676,"./Script_Extensions/Brahmi.js":677,"./Script_Extensions/Braille.js":678,"./Script_Extensions/Buginese.js":679,"./Script_Extensions/Buhid.js":680,"./Script_Extensions/Canadian_Aboriginal.js":681,"./Script_Extensions/Carian.js":682,"./Script_Extensions/Caucasian_Albanian.js":683,"./Script_Extensions/Chakma.js":684,"./Script_Extensions/Cham.js":685,"./Script_Extensions/Cherokee.js":686,"./Script_Extensions/Chorasmian.js":687,"./Script_Extensions/Common.js":688,"./Script_Extensions/Coptic.js":689,"./Script_Extensions/Cuneiform.js":690,"./Script_Extensions/Cypriot.js":691,"./Script_Extensions/Cyrillic.js":692,"./Script_Extensions/Deseret.js":693,"./Script_Extensions/Devanagari.js":694,"./Script_Extensions/Dives_Akuru.js":695,"./Script_Extensions/Dogra.js":696,"./Script_Extensions/Duployan.js":697,"./Script_Extensions/Egyptian_Hieroglyphs.js":698,"./Script_Extensions/Elbasan.js":699,"./Script_Extensions/Elymaic.js":700,"./Script_Extensions/Ethiopic.js":701,"./Script_Extensions/Georgian.js":702,"./Script_Extensions/Glagolitic.js":703,"./Script_Extensions/Gothic.js":704,"./Script_Extensions/Grantha.js":705,"./Script_Extensions/Greek.js":706,"./Script_Extensions/Gujarati.js":707,"./Script_Extensions/Gunjala_Gondi.js":708,"./Script_Extensions/Gurmukhi.js":709,"./Script_Extensions/Han.js":710,"./Script_Extensions/Hangul.js":711,"./Script_Extensions/Hanifi_Rohingya.js":712,"./Script_Extensions/Hanunoo.js":713,"./Script_Extensions/Hatran.js":714,"./Script_Extensions/Hebrew.js":715,"./Script_Extensions/Hiragana.js":716,"./Script_Extensions/Imperial_Aramaic.js":717,"./Script_Extensions/Inherited.js":718,"./Script_Extensions/Inscriptional_Pahlavi.js":719,"./Script_Extensions/Inscriptional_Parthian.js":720,"./Script_Extensions/Javanese.js":721,"./Script_Extensions/Kaithi.js":722,"./Script_Extensions/Kannada.js":723,"./Script_Extensions/Katakana.js":724,"./Script_Extensions/Kayah_Li.js":725,"./Script_Extensions/Kharoshthi.js":726,"./Script_Extensions/Khitan_Small_Script.js":727,"./Script_Extensions/Khmer.js":728,"./Script_Extensions/Khojki.js":729,"./Script_Extensions/Khudawadi.js":730,"./Script_Extensions/Lao.js":731,"./Script_Extensions/Latin.js":732,"./Script_Extensions/Lepcha.js":733,"./Script_Extensions/Limbu.js":734,"./Script_Extensions/Linear_A.js":735,"./Script_Extensions/Linear_B.js":736,"./Script_Extensions/Lisu.js":737,"./Script_Extensions/Lycian.js":738,"./Script_Extensions/Lydian.js":739,"./Script_Extensions/Mahajani.js":740,"./Script_Extensions/Makasar.js":741,"./Script_Extensions/Malayalam.js":742,"./Script_Extensions/Mandaic.js":743,"./Script_Extensions/Manichaean.js":744,"./Script_Extensions/Marchen.js":745,"./Script_Extensions/Masaram_Gondi.js":746,"./Script_Extensions/Medefaidrin.js":747,"./Script_Extensions/Meetei_Mayek.js":748,"./Script_Extensions/Mende_Kikakui.js":749,"./Script_Extensions/Meroitic_Cursive.js":750,"./Script_Extensions/Meroitic_Hieroglyphs.js":751,"./Script_Extensions/Miao.js":752,"./Script_Extensions/Modi.js":753,"./Script_Extensions/Mongolian.js":754,"./Script_Extensions/Mro.js":755,"./Script_Extensions/Multani.js":756,"./Script_Extensions/Myanmar.js":757,"./Script_Extensions/Nabataean.js":758,"./Script_Extensions/Nandinagari.js":759,"./Script_Extensions/New_Tai_Lue.js":760,"./Script_Extensions/Newa.js":761,"./Script_Extensions/Nko.js":762,"./Script_Extensions/Nushu.js":763,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":764,"./Script_Extensions/Ogham.js":765,"./Script_Extensions/Ol_Chiki.js":766,"./Script_Extensions/Old_Hungarian.js":767,"./Script_Extensions/Old_Italic.js":768,"./Script_Extensions/Old_North_Arabian.js":769,"./Script_Extensions/Old_Permic.js":770,"./Script_Extensions/Old_Persian.js":771,"./Script_Extensions/Old_Sogdian.js":772,"./Script_Extensions/Old_South_Arabian.js":773,"./Script_Extensions/Old_Turkic.js":774,"./Script_Extensions/Oriya.js":775,"./Script_Extensions/Osage.js":776,"./Script_Extensions/Osmanya.js":777,"./Script_Extensions/Pahawh_Hmong.js":778,"./Script_Extensions/Palmyrene.js":779,"./Script_Extensions/Pau_Cin_Hau.js":780,"./Script_Extensions/Phags_Pa.js":781,"./Script_Extensions/Phoenician.js":782,"./Script_Extensions/Psalter_Pahlavi.js":783,"./Script_Extensions/Rejang.js":784,"./Script_Extensions/Runic.js":785,"./Script_Extensions/Samaritan.js":786,"./Script_Extensions/Saurashtra.js":787,"./Script_Extensions/Sharada.js":788,"./Script_Extensions/Shavian.js":789,"./Script_Extensions/Siddham.js":790,"./Script_Extensions/SignWriting.js":791,"./Script_Extensions/Sinhala.js":792,"./Script_Extensions/Sogdian.js":793,"./Script_Extensions/Sora_Sompeng.js":794,"./Script_Extensions/Soyombo.js":795,"./Script_Extensions/Sundanese.js":796,"./Script_Extensions/Syloti_Nagri.js":797,"./Script_Extensions/Syriac.js":798,"./Script_Extensions/Tagalog.js":799,"./Script_Extensions/Tagbanwa.js":800,"./Script_Extensions/Tai_Le.js":801,"./Script_Extensions/Tai_Tham.js":802,"./Script_Extensions/Tai_Viet.js":803,"./Script_Extensions/Takri.js":804,"./Script_Extensions/Tamil.js":805,"./Script_Extensions/Tangut.js":806,"./Script_Extensions/Telugu.js":807,"./Script_Extensions/Thaana.js":808,"./Script_Extensions/Thai.js":809,"./Script_Extensions/Tibetan.js":810,"./Script_Extensions/Tifinagh.js":811,"./Script_Extensions/Tirhuta.js":812,"./Script_Extensions/Ugaritic.js":813,"./Script_Extensions/Vai.js":814,"./Script_Extensions/Wancho.js":815,"./Script_Extensions/Warang_Citi.js":816,"./Script_Extensions/Yezidi.js":817,"./Script_Extensions/Yi.js":818,"./Script_Extensions/Zanabazar_Square.js":819,"./index.js":820,"./unicode-version.js":821};function webpackContext(t){var i=webpackContextResolve(t);return r(i)}function webpackContextResolve(t){if(!r.o(n,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n[t]}webpackContext.keys=function webpackContextKeys(){return Object.keys(n)},webpackContext.resolve=webpackContextResolve,t.exports=webpackContext,webpackContext.id=416},832:function(t,i,r){"use strict";r.r(i),r.d(i,"compile",(function(){return compileVueCodeForEvalFunction}));var n=r(30);r.d(i,"adaptCreateElement",(function(){return n.adaptCreateElement})),r.d(i,"addScopedStyle",(function(){return n.addScopedStyle})),r.d(i,"concatenate",(function(){return n.concatenate})),r.d(i,"isCodeVueSfc",(function(){return n.isCodeVueSfc}));var e=r(405),s=r(830),a=r.n(s),o=r(403),c=r(831),p=function __assign(){return(p=Object.assign||function __assign(t){for(var i,r=1,n=arguments.length;r<n;r++)for(var e in i=arguments[r])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t}).apply(this,arguments)},j=/import\s*['"]([^'"]+)['"];?/gi,_=/import\s*(\*\s*as)?\s*(\w*?)\s*,?\s*(?:\{([\s\S]*?)\})?\s*from\s*['"]([^'"]+)['"];?/gi;function alias(t){var i=t.trim(),r=i.split(" as ");return r.length>1&&(i=r.shift()||""),{key:i,name:r[0]}}function rewriteImports(t,i,r){return void 0===r&&(r="require"),t.replace(_,(function(t,n,e,s,a){return function generate(t,i,r,n,e){void 0===e&&(e=0);var s,a=i.split("/").pop(),o=a?a.replace(/\W/g,"_")+"$"+e:"",c="const "+alias(o).name+" = "+(i=n+"('"+i+"')")+";";return r&&(c+="const "+r+" = "+o+".default || "+o+";"),t.forEach((function(t){s=alias(t),c+="const "+s.name+" = "+o+"."+s.key+";"})),c}(s?s.split(",").filter((function(t){return t.trim()})):[],a,e,r,i)})).replace(j,(function(t,i){return r+"('"+i+"');"}))}function transformOneImport(t,i,r){var n=t.start+r,e=t.end+r,s=i.substring(n,e),a=rewriteImports(s,r);return{code:i=i.substring(0,n)+a+i.substring(e),offset:r+=a.length-s.length}}var S=r(404),l=o.Parser.extend(S());function getAst(t){return l.parse(t,{ecmaVersion:2019,sourceType:"module"})}var u=function buildStyles(t){var i="";if(t&&t.forEach((function(t){t&&(i+=t)})),""!==i)return i.trim()};function parseScriptCode(t){var i="",r=-1,n=-1,e=0,s=-1;if(a()(getAst(t),{ExportNamedDeclaration:function ExportNamedDeclaration(a){i=t.slice(0,a.start+e),r=a.declaration.declarations[0].init.start+e,n=a.declaration.declarations[0].init.end+e,a.declarations&&(s=getRenderFunctionStart(a.declarations[0]))},ExportDefaultDeclaration:function ExportDefaultDeclaration(a){i=t.slice(0,a.start+e),r=a.declaration.start+e,n=a.declaration.end+e,s=getRenderFunctionStart(a.declaration)},AssignmentExpression:function AssignmentExpression(s){(/exports/.test(s.left.name)||s.left.object&&/module/.test(s.left.object.name)&&/exports/.test(s.left.property.name))&&(i=t.slice(0,s.start+e),r=s.right.start+e,n=s.right.end+e)},ImportDeclaration:function ImportDeclaration(i){var r=transformOneImport(i,t,e);e=r.offset,t=r.code}}),-1===r)throw new Error("Failed to parse single file component: "+t);s>0&&(s+=e,t=insertCreateElementFunction(t.slice(0,s+1),t.slice(s+1)),n+=y);var o=t.slice(r+1,n-1);return{preprocessing:i,component:o,postprocessing:t.slice(n)}}var y=31;function getRenderFunctionStart(t){if(t&&t.properties){var i=t.properties.find((function(t){return t.key&&"Identifier"===t.key.type&&"render"===t.key.name}));if(i&&i.value.body)return i.value.body.start}return-1}function insertCreateElementFunction(t,i){return t+";const h = this.$createElement;"+i}function normalizeSfcComponent(t){var i=function getSingleFileComponentParts(t){var i=Object(n.parseComponent)(t);return i.script&&(i.script=i.script.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,"$1")),i}(t),r=function injectTemplateAndParseExport(t){var i=t.template?t.template.replace(/`/g,"\\`"):void 0;if(!t.script)return{component:"{template: `"+i+"` }"};var r=parseScriptCode(t.script);return r.component=i?"{template: `"+i+"`, "+r.component+"}":"{"+r.component+"}",r}(i);return{script:[r.preprocessing,"return "+r.component,r.postprocessing].join(";"),style:u(i.styles)}}var E=Object(c.a)(),x={chrome:71,firefox:64,safari:12,ie:11,edge:19};function getTargetFromBrowser(){var t;if((null==E?void 0:E.version)&&(null==E?void 0:E.name)&&function isBubleBrowser(t){return t in x}(E.name)){var i=parseInt(E.version,10);return(t={})[E.name]=i<=x[E.name]?i:x[E.name],t}return{}}function compileVueCodeForEvalFunction(t,i){void 0===i&&(i={});var r=function prepareVueCodeForEvalFunction(t,i){var r,e=!1;if(Object(n.isCodeVueSfc)(t))return normalizeSfcComponent(t);if(!/new Vue\(/.test(t)){if(i.jsx){var s=parseScriptCode(t),o=s.preprocessing,c=s.component,j=s.postprocessing;return{script:o+";return {"+c+"};"+j}}var _=/^\W*</.test(t)?{index:0}:t.match(/\n[\t ]*</),S=_&&void 0!==_.index?_.index:-1;r=S>-1?t.slice(S):void 0,t=S>-1?t.slice(0,S):t,e=!0}var l=getAst(t),u=0,E=[];a()(l,p({ExpressionStatement:function ExpressionStatement(i){if("NewExpression"===i.expression.type&&"Vue"===i.expression.callee.name){var r=t.slice(0,i.expression.start+u),n=i.expression.arguments&&i.expression.arguments.length?i.expression.arguments[0]:void 0,e=getRenderFunctionStart(n),s=n.end;e>0&&(t=insertCreateElementFunction(t.slice(0,e+1),t.slice(e+1)),s+=y);var a=n?t.slice(n.start+u,s+u):"";t=r+";return "+a}},ImportDeclaration:function ImportDeclaration(i){var r=transformOneImport(i,t,u);u=r.offset,t=r.code,e&&i.specifiers&&i.specifiers.forEach((function(t){return E.push(t.local.name)}))}},e?{VariableDeclaration:function VariableDeclaration(t){t.declarations.forEach((function(t){t.id.name?E.push(t.id.name):t.id.properties&&t.id.properties.forEach((function(t){E.push(t.value.name)}))}))},FunctionDeclaration:function FunctionDeclaration(t){E.push(t.id.name)}}:{})),e&&(t+=";return {data:function(){return {"+E.map((function(t){return t+":"+t})).join(",")+"};}}");return{script:t,style:void 0,template:r}}(t,i),s="undefined"!=typeof window?getTargetFromBrowser():{};return p(p({},r),{script:Object(e.a)(r.script,p({target:s},i)).code})}}}]);