(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{226:function(r,t,i){var n={"./Binary_Property/ASCII.js":227,"./Binary_Property/ASCII_Hex_Digit.js":228,"./Binary_Property/Alphabetic.js":229,"./Binary_Property/Any.js":230,"./Binary_Property/Assigned.js":231,"./Binary_Property/Bidi_Control.js":232,"./Binary_Property/Bidi_Mirrored.js":233,"./Binary_Property/Case_Ignorable.js":234,"./Binary_Property/Cased.js":235,"./Binary_Property/Changes_When_Casefolded.js":236,"./Binary_Property/Changes_When_Casemapped.js":237,"./Binary_Property/Changes_When_Lowercased.js":238,"./Binary_Property/Changes_When_NFKC_Casefolded.js":239,"./Binary_Property/Changes_When_Titlecased.js":240,"./Binary_Property/Changes_When_Uppercased.js":241,"./Binary_Property/Dash.js":242,"./Binary_Property/Default_Ignorable_Code_Point.js":243,"./Binary_Property/Deprecated.js":244,"./Binary_Property/Diacritic.js":245,"./Binary_Property/Emoji.js":246,"./Binary_Property/Emoji_Component.js":247,"./Binary_Property/Emoji_Modifier.js":248,"./Binary_Property/Emoji_Modifier_Base.js":249,"./Binary_Property/Emoji_Presentation.js":250,"./Binary_Property/Extended_Pictographic.js":251,"./Binary_Property/Extender.js":252,"./Binary_Property/Grapheme_Base.js":253,"./Binary_Property/Grapheme_Extend.js":254,"./Binary_Property/Hex_Digit.js":255,"./Binary_Property/IDS_Binary_Operator.js":256,"./Binary_Property/IDS_Trinary_Operator.js":257,"./Binary_Property/ID_Continue.js":258,"./Binary_Property/ID_Start.js":259,"./Binary_Property/Ideographic.js":260,"./Binary_Property/Join_Control.js":261,"./Binary_Property/Logical_Order_Exception.js":262,"./Binary_Property/Lowercase.js":263,"./Binary_Property/Math.js":264,"./Binary_Property/Noncharacter_Code_Point.js":265,"./Binary_Property/Pattern_Syntax.js":266,"./Binary_Property/Pattern_White_Space.js":267,"./Binary_Property/Quotation_Mark.js":268,"./Binary_Property/Radical.js":269,"./Binary_Property/Regional_Indicator.js":270,"./Binary_Property/Sentence_Terminal.js":271,"./Binary_Property/Soft_Dotted.js":272,"./Binary_Property/Terminal_Punctuation.js":273,"./Binary_Property/Unified_Ideograph.js":274,"./Binary_Property/Uppercase.js":275,"./Binary_Property/Variation_Selector.js":276,"./Binary_Property/White_Space.js":277,"./Binary_Property/XID_Continue.js":278,"./Binary_Property/XID_Start.js":279,"./General_Category/Cased_Letter.js":280,"./General_Category/Close_Punctuation.js":281,"./General_Category/Connector_Punctuation.js":282,"./General_Category/Control.js":283,"./General_Category/Currency_Symbol.js":284,"./General_Category/Dash_Punctuation.js":285,"./General_Category/Decimal_Number.js":286,"./General_Category/Enclosing_Mark.js":287,"./General_Category/Final_Punctuation.js":288,"./General_Category/Format.js":289,"./General_Category/Initial_Punctuation.js":290,"./General_Category/Letter.js":291,"./General_Category/Letter_Number.js":292,"./General_Category/Line_Separator.js":293,"./General_Category/Lowercase_Letter.js":294,"./General_Category/Mark.js":295,"./General_Category/Math_Symbol.js":296,"./General_Category/Modifier_Letter.js":297,"./General_Category/Modifier_Symbol.js":298,"./General_Category/Nonspacing_Mark.js":299,"./General_Category/Number.js":300,"./General_Category/Open_Punctuation.js":301,"./General_Category/Other.js":302,"./General_Category/Other_Letter.js":303,"./General_Category/Other_Number.js":304,"./General_Category/Other_Punctuation.js":305,"./General_Category/Other_Symbol.js":306,"./General_Category/Paragraph_Separator.js":307,"./General_Category/Private_Use.js":308,"./General_Category/Punctuation.js":309,"./General_Category/Separator.js":310,"./General_Category/Space_Separator.js":311,"./General_Category/Spacing_Mark.js":312,"./General_Category/Surrogate.js":313,"./General_Category/Symbol.js":314,"./General_Category/Titlecase_Letter.js":315,"./General_Category/Unassigned.js":316,"./General_Category/Uppercase_Letter.js":317,"./Script/Adlam.js":318,"./Script/Ahom.js":319,"./Script/Anatolian_Hieroglyphs.js":320,"./Script/Arabic.js":321,"./Script/Armenian.js":322,"./Script/Avestan.js":323,"./Script/Balinese.js":324,"./Script/Bamum.js":325,"./Script/Bassa_Vah.js":326,"./Script/Batak.js":327,"./Script/Bengali.js":328,"./Script/Bhaiksuki.js":329,"./Script/Bopomofo.js":330,"./Script/Brahmi.js":331,"./Script/Braille.js":332,"./Script/Buginese.js":333,"./Script/Buhid.js":334,"./Script/Canadian_Aboriginal.js":335,"./Script/Carian.js":336,"./Script/Caucasian_Albanian.js":337,"./Script/Chakma.js":338,"./Script/Cham.js":339,"./Script/Cherokee.js":340,"./Script/Common.js":341,"./Script/Coptic.js":342,"./Script/Cuneiform.js":343,"./Script/Cypriot.js":344,"./Script/Cyrillic.js":345,"./Script/Deseret.js":346,"./Script/Devanagari.js":347,"./Script/Dogra.js":348,"./Script/Duployan.js":349,"./Script/Egyptian_Hieroglyphs.js":350,"./Script/Elbasan.js":351,"./Script/Elymaic.js":352,"./Script/Ethiopic.js":353,"./Script/Georgian.js":354,"./Script/Glagolitic.js":355,"./Script/Gothic.js":356,"./Script/Grantha.js":357,"./Script/Greek.js":358,"./Script/Gujarati.js":359,"./Script/Gunjala_Gondi.js":360,"./Script/Gurmukhi.js":361,"./Script/Han.js":362,"./Script/Hangul.js":363,"./Script/Hanifi_Rohingya.js":364,"./Script/Hanunoo.js":365,"./Script/Hatran.js":366,"./Script/Hebrew.js":367,"./Script/Hiragana.js":368,"./Script/Imperial_Aramaic.js":369,"./Script/Inherited.js":370,"./Script/Inscriptional_Pahlavi.js":371,"./Script/Inscriptional_Parthian.js":372,"./Script/Javanese.js":373,"./Script/Kaithi.js":374,"./Script/Kannada.js":375,"./Script/Katakana.js":376,"./Script/Kayah_Li.js":377,"./Script/Kharoshthi.js":378,"./Script/Khmer.js":379,"./Script/Khojki.js":380,"./Script/Khudawadi.js":381,"./Script/Lao.js":382,"./Script/Latin.js":383,"./Script/Lepcha.js":384,"./Script/Limbu.js":385,"./Script/Linear_A.js":386,"./Script/Linear_B.js":387,"./Script/Lisu.js":388,"./Script/Lycian.js":389,"./Script/Lydian.js":390,"./Script/Mahajani.js":391,"./Script/Makasar.js":392,"./Script/Malayalam.js":393,"./Script/Mandaic.js":394,"./Script/Manichaean.js":395,"./Script/Marchen.js":396,"./Script/Masaram_Gondi.js":397,"./Script/Medefaidrin.js":398,"./Script/Meetei_Mayek.js":399,"./Script/Mende_Kikakui.js":400,"./Script/Meroitic_Cursive.js":401,"./Script/Meroitic_Hieroglyphs.js":402,"./Script/Miao.js":403,"./Script/Modi.js":404,"./Script/Mongolian.js":405,"./Script/Mro.js":406,"./Script/Multani.js":407,"./Script/Myanmar.js":408,"./Script/Nabataean.js":409,"./Script/Nandinagari.js":410,"./Script/New_Tai_Lue.js":411,"./Script/Newa.js":412,"./Script/Nko.js":413,"./Script/Nushu.js":414,"./Script/Nyiakeng_Puachue_Hmong.js":415,"./Script/Ogham.js":416,"./Script/Ol_Chiki.js":417,"./Script/Old_Hungarian.js":418,"./Script/Old_Italic.js":419,"./Script/Old_North_Arabian.js":420,"./Script/Old_Permic.js":421,"./Script/Old_Persian.js":422,"./Script/Old_Sogdian.js":423,"./Script/Old_South_Arabian.js":424,"./Script/Old_Turkic.js":425,"./Script/Oriya.js":426,"./Script/Osage.js":427,"./Script/Osmanya.js":428,"./Script/Pahawh_Hmong.js":429,"./Script/Palmyrene.js":430,"./Script/Pau_Cin_Hau.js":431,"./Script/Phags_Pa.js":432,"./Script/Phoenician.js":433,"./Script/Psalter_Pahlavi.js":434,"./Script/Rejang.js":435,"./Script/Runic.js":436,"./Script/Samaritan.js":437,"./Script/Saurashtra.js":438,"./Script/Sharada.js":439,"./Script/Shavian.js":440,"./Script/Siddham.js":441,"./Script/SignWriting.js":442,"./Script/Sinhala.js":443,"./Script/Sogdian.js":444,"./Script/Sora_Sompeng.js":445,"./Script/Soyombo.js":446,"./Script/Sundanese.js":447,"./Script/Syloti_Nagri.js":448,"./Script/Syriac.js":449,"./Script/Tagalog.js":450,"./Script/Tagbanwa.js":451,"./Script/Tai_Le.js":452,"./Script/Tai_Tham.js":453,"./Script/Tai_Viet.js":454,"./Script/Takri.js":455,"./Script/Tamil.js":456,"./Script/Tangut.js":457,"./Script/Telugu.js":458,"./Script/Thaana.js":459,"./Script/Thai.js":460,"./Script/Tibetan.js":461,"./Script/Tifinagh.js":462,"./Script/Tirhuta.js":463,"./Script/Ugaritic.js":464,"./Script/Vai.js":465,"./Script/Wancho.js":466,"./Script/Warang_Citi.js":467,"./Script/Yi.js":468,"./Script/Zanabazar_Square.js":469,"./Script_Extensions/Adlam.js":470,"./Script_Extensions/Ahom.js":471,"./Script_Extensions/Anatolian_Hieroglyphs.js":472,"./Script_Extensions/Arabic.js":473,"./Script_Extensions/Armenian.js":474,"./Script_Extensions/Avestan.js":475,"./Script_Extensions/Balinese.js":476,"./Script_Extensions/Bamum.js":477,"./Script_Extensions/Bassa_Vah.js":478,"./Script_Extensions/Batak.js":479,"./Script_Extensions/Bengali.js":480,"./Script_Extensions/Bhaiksuki.js":481,"./Script_Extensions/Bopomofo.js":482,"./Script_Extensions/Brahmi.js":483,"./Script_Extensions/Braille.js":484,"./Script_Extensions/Buginese.js":485,"./Script_Extensions/Buhid.js":486,"./Script_Extensions/Canadian_Aboriginal.js":487,"./Script_Extensions/Carian.js":488,"./Script_Extensions/Caucasian_Albanian.js":489,"./Script_Extensions/Chakma.js":490,"./Script_Extensions/Cham.js":491,"./Script_Extensions/Cherokee.js":492,"./Script_Extensions/Common.js":493,"./Script_Extensions/Coptic.js":494,"./Script_Extensions/Cuneiform.js":495,"./Script_Extensions/Cypriot.js":496,"./Script_Extensions/Cyrillic.js":497,"./Script_Extensions/Deseret.js":498,"./Script_Extensions/Devanagari.js":499,"./Script_Extensions/Dogra.js":500,"./Script_Extensions/Duployan.js":501,"./Script_Extensions/Egyptian_Hieroglyphs.js":502,"./Script_Extensions/Elbasan.js":503,"./Script_Extensions/Elymaic.js":504,"./Script_Extensions/Ethiopic.js":505,"./Script_Extensions/Georgian.js":506,"./Script_Extensions/Glagolitic.js":507,"./Script_Extensions/Gothic.js":508,"./Script_Extensions/Grantha.js":509,"./Script_Extensions/Greek.js":510,"./Script_Extensions/Gujarati.js":511,"./Script_Extensions/Gunjala_Gondi.js":512,"./Script_Extensions/Gurmukhi.js":513,"./Script_Extensions/Han.js":514,"./Script_Extensions/Hangul.js":515,"./Script_Extensions/Hanifi_Rohingya.js":516,"./Script_Extensions/Hanunoo.js":517,"./Script_Extensions/Hatran.js":518,"./Script_Extensions/Hebrew.js":519,"./Script_Extensions/Hiragana.js":520,"./Script_Extensions/Imperial_Aramaic.js":521,"./Script_Extensions/Inherited.js":522,"./Script_Extensions/Inscriptional_Pahlavi.js":523,"./Script_Extensions/Inscriptional_Parthian.js":524,"./Script_Extensions/Javanese.js":525,"./Script_Extensions/Kaithi.js":526,"./Script_Extensions/Kannada.js":527,"./Script_Extensions/Katakana.js":528,"./Script_Extensions/Kayah_Li.js":529,"./Script_Extensions/Kharoshthi.js":530,"./Script_Extensions/Khmer.js":531,"./Script_Extensions/Khojki.js":532,"./Script_Extensions/Khudawadi.js":533,"./Script_Extensions/Lao.js":534,"./Script_Extensions/Latin.js":535,"./Script_Extensions/Lepcha.js":536,"./Script_Extensions/Limbu.js":537,"./Script_Extensions/Linear_A.js":538,"./Script_Extensions/Linear_B.js":539,"./Script_Extensions/Lisu.js":540,"./Script_Extensions/Lycian.js":541,"./Script_Extensions/Lydian.js":542,"./Script_Extensions/Mahajani.js":543,"./Script_Extensions/Makasar.js":544,"./Script_Extensions/Malayalam.js":545,"./Script_Extensions/Mandaic.js":546,"./Script_Extensions/Manichaean.js":547,"./Script_Extensions/Marchen.js":548,"./Script_Extensions/Masaram_Gondi.js":549,"./Script_Extensions/Medefaidrin.js":550,"./Script_Extensions/Meetei_Mayek.js":551,"./Script_Extensions/Mende_Kikakui.js":552,"./Script_Extensions/Meroitic_Cursive.js":553,"./Script_Extensions/Meroitic_Hieroglyphs.js":554,"./Script_Extensions/Miao.js":555,"./Script_Extensions/Modi.js":556,"./Script_Extensions/Mongolian.js":557,"./Script_Extensions/Mro.js":558,"./Script_Extensions/Multani.js":559,"./Script_Extensions/Myanmar.js":560,"./Script_Extensions/Nabataean.js":561,"./Script_Extensions/Nandinagari.js":562,"./Script_Extensions/New_Tai_Lue.js":563,"./Script_Extensions/Newa.js":564,"./Script_Extensions/Nko.js":565,"./Script_Extensions/Nushu.js":566,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":567,"./Script_Extensions/Ogham.js":568,"./Script_Extensions/Ol_Chiki.js":569,"./Script_Extensions/Old_Hungarian.js":570,"./Script_Extensions/Old_Italic.js":571,"./Script_Extensions/Old_North_Arabian.js":572,"./Script_Extensions/Old_Permic.js":573,"./Script_Extensions/Old_Persian.js":574,"./Script_Extensions/Old_Sogdian.js":575,"./Script_Extensions/Old_South_Arabian.js":576,"./Script_Extensions/Old_Turkic.js":577,"./Script_Extensions/Oriya.js":578,"./Script_Extensions/Osage.js":579,"./Script_Extensions/Osmanya.js":580,"./Script_Extensions/Pahawh_Hmong.js":581,"./Script_Extensions/Palmyrene.js":582,"./Script_Extensions/Pau_Cin_Hau.js":583,"./Script_Extensions/Phags_Pa.js":584,"./Script_Extensions/Phoenician.js":585,"./Script_Extensions/Psalter_Pahlavi.js":586,"./Script_Extensions/Rejang.js":587,"./Script_Extensions/Runic.js":588,"./Script_Extensions/Samaritan.js":589,"./Script_Extensions/Saurashtra.js":590,"./Script_Extensions/Sharada.js":591,"./Script_Extensions/Shavian.js":592,"./Script_Extensions/Siddham.js":593,"./Script_Extensions/SignWriting.js":594,"./Script_Extensions/Sinhala.js":595,"./Script_Extensions/Sogdian.js":596,"./Script_Extensions/Sora_Sompeng.js":597,"./Script_Extensions/Soyombo.js":598,"./Script_Extensions/Sundanese.js":599,"./Script_Extensions/Syloti_Nagri.js":600,"./Script_Extensions/Syriac.js":601,"./Script_Extensions/Tagalog.js":602,"./Script_Extensions/Tagbanwa.js":603,"./Script_Extensions/Tai_Le.js":604,"./Script_Extensions/Tai_Tham.js":605,"./Script_Extensions/Tai_Viet.js":606,"./Script_Extensions/Takri.js":607,"./Script_Extensions/Tamil.js":608,"./Script_Extensions/Tangut.js":609,"./Script_Extensions/Telugu.js":610,"./Script_Extensions/Thaana.js":611,"./Script_Extensions/Thai.js":612,"./Script_Extensions/Tibetan.js":613,"./Script_Extensions/Tifinagh.js":614,"./Script_Extensions/Tirhuta.js":615,"./Script_Extensions/Ugaritic.js":616,"./Script_Extensions/Vai.js":617,"./Script_Extensions/Wancho.js":618,"./Script_Extensions/Warang_Citi.js":619,"./Script_Extensions/Yi.js":620,"./Script_Extensions/Zanabazar_Square.js":621,"./index.js":622,"./unicode-version.js":623};function s(r){var t=e(r);return i(t)}function e(r){if(!i.o(n,r)){var t=new Error("Cannot find module '"+r+"'");throw t.code="MODULE_NOT_FOUND",t}return n[r]}s.keys=function(){return Object.keys(n)},s.resolve=e,r.exports=s,s.id=226},636:function(r,t,i){"use strict";i(37),i(108),i(31),i(109),i(42),i(110),i(92),i(52);function n(r,t){if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.dataset.cssscoper="true";var s=function(r,t){return r=r.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|s*{)/g,(function(r,i,n){if(i.match(/^\s*(@media|@keyframes|to|from|@font-face)/))return i+n;var s=/(.*)(::v-deep|>>>|\/deep\/)(.*)/g.exec(i);s&&(i=s[1],n=s[3]+n);i&&i.match(/:scope/)&&(i=i.replace(/([^\s]*):scope/,(function(r,t){return""===t?"> *":"> "+t})));var e="";if(i&&i.match(/:/)){var a=i.split(/:/);i=a[0],e=":"+a[1]}return(i=(i=i.trim()+" ").replace(/ /g,t+e+" "))+n}))}(r,"[data-"+t+"]"),e=n;e.styleSheet?e.styleSheet.cssText=s:n.appendChild(document.createTextNode(s)),i.appendChild(n)}}var s=i(214);function e(r){return function(t,i){for(var n=[],s=2;s<arguments.length;s++)n[s-2]=arguments[s];return void 0===i?r(t):n.length?r(t,j(i),n):r(t,j(i))}}var a=["staticClass","class","style","key","ref","refInFor","slot","scopedSlots","model"],o=/^(on|nativeOn|props|domProps|hook|v)([A-Z][a-zA-Z]+)?$/,c=function(r,t){return void 0===r?t:"function"==typeof r&&"function"==typeof t?(i=r,n=t,function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];i&&i.apply(this,r),n&&n.apply(this,r)}):function(r){return Array.isArray(r)?r:[r]}(r).concat(t);var i,n},p=function(r){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return r=r||{},t.forEach((function(t){Object.keys(t).forEach((function(i){r[i]=c(r[i],t[i])}))})),r},j=function(r){if(r){var t={};return Object.keys(r).forEach((function(i){var n=r[i],e=s(i);if(a.indexOf(e)>0)t[e]=n;else if("attrs"===i)t.attrs=p(t.attrs,n);else if(o.test(e)){var j=o.exec(e);if(j){var _=j[1],S=function(r){return r.replace(/^(on|native(On|-on)|props|dom(Props|-props)|hook|v)-?/,"")}(i),l=S.length?S[0].toLowerCase()+S.slice(1):"";"v"===_?(t.directives||(t.directives=[]),t.directives.push({name:l,value:n})):(t[_]||(t[_]={}),l.length?t[_][l]=c(t[_][l],n):p(t[_],n))}}else{t.attrs=t.attrs||{};var u=/^data-/.test(i)?i:"xlinkHref"===e?"xlink:href":e;t.attrs[u]=n}})),t}},_=["template","script"];function S(r){var t=_.reduce((function(r,t){return r[t]=new RegExp("<"+t+"[^>]*>((.|\\n|\\r)+)</"+t+">","g"),r}),{}),i={},n={};_.forEach((function(s){var e=t[s].exec(r);e&&(n[s]=e[0],i[s]=e[1])}));for(var s=r,e=_.length;e--&&s.length;){var a=n[_[e]];a&&(s=s.replace(a,"").trim())}for(var o,c=/(<style[^>]*>)([^<]+)(<.......)/g,p=/()([^<]+)(<.......)/g,j="",S=[],l=c.exec(s),u=l?l[1]:"";l;)j+=l[2],"</style>"===l[3]?(o||(o=[]),o.push(j),S.push(""+u+j+"</style>"),j="",u="",u=(l=c.exec(s))?l[1]:""):(j+=l[3],p.lastIndex=c.lastIndex,l=p.exec(s));if(o){i.styles=o;for(var y=o.length;y--;)s=s.replace(S[y],"").trim()}return s.length?{}:i}function l(r){var t=S(r);return!!t.script||!!t.template}var u=i(215),y=i(632),h=i.n(y),x=i(30);i.d(t,"c",(function(){return L})),i.d(t,"a",(function(){return e})),i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return p})),i.d(t,"e",(function(){return l}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var E=function(){return(E=Object.assign||function(r){for(var t,i=1,n=arguments.length;i<n;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s]);return r}).apply(this,arguments)},d=/import\s*['"]([^'"]+)['"];?/gi,g=/import\s*(\*\s*as)?\s*(\w*?)\s*,?\s*(?:\{([\s\S]*?)\})?\s*from\s*['"]([^'"]+)['"];?/gi;function m(r){var t=r.trim(),i=t.split(" as ");return i.length>1&&(t=i.shift()||""),{key:t,name:i[0]}}function f(r,t,i){return void 0===i&&(i="require"),r.replace(g,(function(r,n,s,e,a){return function(r,t,i,n,s){void 0===s&&(s=0);var e,a=t.split("/").pop(),o=a?a.replace(/\W/g,"_")+"$"+s:"",c="const "+m(o).name+" = "+(t=n+"('"+t+"')")+";";return i&&(c+="\nconst "+i+" = "+o+".default || "+o+";"),r.forEach((function(r){e=m(r),c+="\nconst "+e.name+" = "+o+"."+e.key+";"})),c}(e?e.split(",").filter((function(r){return r.trim()})):[],a,s,i,t)})).replace(d,(function(r,t){return i+"('"+t+"');"}))}function P(r,t,i){var n=r.start+i,s=r.end+i,e=t.substring(n,s),a=f(e,i);return{code:t=t.substring(0,n)+a+t.substring(s),offset:i+=a.length-e.length}}var C=i(112),v=x.Parser.extend(C());function B(r){return v.parse(r,{ecmaVersion:2019,sourceType:"module"})}var G=function(r){var t="";if(r&&r.forEach((function(r){r&&(t+=r)})),""!==t)return t.trim()};function k(r){var t="",i=-1,n=-1,s=0,e=-1;if(h()(B(r),{ExportNamedDeclaration:function(a){t=r.slice(0,a.start+s),i=a.declaration.declarations[0].init.start+s,n=a.declaration.declarations[0].init.end+s,a.declarations&&(e=M(a.declarations[0]))},ExportDefaultDeclaration:function(a){t=r.slice(0,a.start+s),i=a.declaration.start+s,n=a.declaration.end+s,e=M(a.declaration)},AssignmentExpression:function(e){(/exports/.test(e.left.name)||e.left.object&&/module/.test(e.left.object.name)&&/exports/.test(e.left.property.name))&&(t=r.slice(0,e.start+s),i=e.right.start+s,n=e.right.end+s)},ImportDeclaration:function(t){var i=P(t,r,s);s=i.offset,r=i.code}}),-1===i)throw new Error("Failed to parse single file component: "+r);e>0&&(e+=s,r=O(r.slice(0,e+1),r.slice(e+1)),n+=b);var a=r.slice(i+1,n-1);return{preprocessing:t,component:a,postprocessing:r.slice(n)}}var b=31;function M(r){if(r&&r.properties){var t=r.properties.find((function(r){return r.key&&"Identifier"===r.key.type&&"render"===r.key.name}));if(t&&t.value.body)return t.value.body.start}return-1}function O(r,t){return r+"\nconst h = this.$createElement;"+t}function T(r){var t=function(r){var t=S(r);return t.script&&(t.script=t.script.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,"$1")),t}(r),i=function(r){var t=r.template?r.template.replace(/`/g,"\\`"):void 0;if(!r.script)return{component:"{\ntemplate: `"+t+"` }"};var i=k(r.script);return i.component=t?"{\n  template: `"+t+"`,\n  "+i.component+"}":"{\n  "+i.component+"}",i}(t);return{script:[i.preprocessing,";return "+i.component,i.postprocessing].join("\n"),style:G(t.styles)}}function L(r,t){void 0===t&&(t={});var i=function(r,t){var i,n=!1;if(l(r))return T(r);if(!/new Vue\(/.test(r)){if(t.jsx){var s=k(r),e=s.preprocessing,a=s.component,o=s.postprocessing;return{script:e+";\nreturn {"+a+"};\n"+o}}var c=/^\W*</.test(r)?{index:0}:r.match(/\n[\t ]*</),p=c&&void 0!==c.index?c.index:-1;i=p>-1?r.slice(p):void 0,r=p>-1?r.slice(0,p):r,n=!0}var j=B(r),_=0,S=[];h()(j,E({ExpressionStatement:function(t){if("NewExpression"===t.expression.type&&"Vue"===t.expression.callee.name){var i=r.slice(0,t.expression.start+_),n=t.expression.arguments&&t.expression.arguments.length?t.expression.arguments[0]:void 0,s=M(n),e=n.end;s>0&&(r=O(r.slice(0,s+1),r.slice(s+1)),e+=b);var a=n?r.slice(n.start+_,e+_):"";r=i+";return "+a}},ImportDeclaration:function(t){var i=P(t,r,_);_=i.offset,r=i.code,n&&t.specifiers&&t.specifiers.forEach((function(r){return S.push(r.local.name)}))}},n?{VariableDeclaration:function(r){r.declarations.forEach((function(r){r.id.name?S.push(r.id.name):r.id.properties&&r.id.properties.forEach((function(r){S.push(r.value.name)}))}))},FunctionDeclaration:function(r){S.push(r.id.name)}}:{})),n&&(r+=";return {data:function(){return {"+S.map((function(r){return r+":"+r})).join(",")+"};}}");return{script:r,style:void 0,template:i}}(r,t);return E(E({},i),{script:Object(u.a)(i.script,t).code})}}}]);