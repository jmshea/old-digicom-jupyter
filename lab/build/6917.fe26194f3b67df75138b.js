"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6917],{46165:(r,o,c)=>{c.d(o,{Z:()=>A});var e=c(1799),n=c.n(e),a=c(82609),t=c.n(a)()(n());t.push([r.id,"/* Port of TextMate's Blackboard theme */\n\n.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }\n.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }\n.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }\n.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }\n.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }\n.cm-s-blackboard .CodeMirror-linenumber { color: #888; }\n.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n\n.cm-s-blackboard .cm-keyword { color: #FBDE2D; }\n.cm-s-blackboard .cm-atom { color: #D8FA3C; }\n.cm-s-blackboard .cm-number { color: #D8FA3C; }\n.cm-s-blackboard .cm-def { color: #8DA6CE; }\n.cm-s-blackboard .cm-variable { color: #FF6400; }\n.cm-s-blackboard .cm-operator { color: #FBDE2D; }\n.cm-s-blackboard .cm-comment { color: #AEAEAE; }\n.cm-s-blackboard .cm-string { color: #61CE3C; }\n.cm-s-blackboard .cm-string-2 { color: #61CE3C; }\n.cm-s-blackboard .cm-meta { color: #D8FA3C; }\n.cm-s-blackboard .cm-builtin { color: #8DA6CE; }\n.cm-s-blackboard .cm-tag { color: #8DA6CE; }\n.cm-s-blackboard .cm-attribute { color: #8DA6CE; }\n.cm-s-blackboard .cm-header { color: #FF6400; }\n.cm-s-blackboard .cm-hr { color: #AEAEAE; }\n.cm-s-blackboard .cm-link { color: #8DA6CE; }\n.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }\n\n.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }\n.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/blackboard.css"],names:[],mappings:"AAAA,wCAAwC;;AAExC,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,2CAA2C,mBAAmB,EAAE;AAChE,gKAAgK,kCAAkC,EAAE;AACpM,+KAA+K,kCAAkC,EAAE;AACnN,uCAAuC,mBAAmB,EAAE,eAAe,EAAE;AAC7E,4CAA4C,cAAc,EAAE;AAC5D,mDAAmD,WAAW,EAAE;AAChE,0CAA0C,WAAW,EAAE;AACvD,sCAAsC,8BAA8B,EAAE;;AAEtE,+BAA+B,cAAc,EAAE;AAC/C,4BAA4B,cAAc,EAAE;AAC5C,8BAA8B,cAAc,EAAE;AAC9C,2BAA2B,cAAc,EAAE;AAC3C,gCAAgC,cAAc,EAAE;AAChD,gCAAgC,cAAc,EAAE;AAChD,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,+BAA+B,cAAc,EAAE;AAC/C,2BAA2B,cAAc,EAAE;AAC3C,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,0BAA0B,cAAc,EAAE;AAC1C,4BAA4B,cAAc,EAAE;AAC5C,6BAA6B,mBAAmB,EAAE,cAAc,EAAE;;AAElE,qDAAqD,mBAAmB,EAAE;AAC1E,+CAA+C,sBAAsB,CAAC,sBAAsB,EAAE",sourcesContent:["/* Port of TextMate's Blackboard theme */\n\n.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }\n.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }\n.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }\n.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }\n.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }\n.cm-s-blackboard .CodeMirror-linenumber { color: #888; }\n.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n\n.cm-s-blackboard .cm-keyword { color: #FBDE2D; }\n.cm-s-blackboard .cm-atom { color: #D8FA3C; }\n.cm-s-blackboard .cm-number { color: #D8FA3C; }\n.cm-s-blackboard .cm-def { color: #8DA6CE; }\n.cm-s-blackboard .cm-variable { color: #FF6400; }\n.cm-s-blackboard .cm-operator { color: #FBDE2D; }\n.cm-s-blackboard .cm-comment { color: #AEAEAE; }\n.cm-s-blackboard .cm-string { color: #61CE3C; }\n.cm-s-blackboard .cm-string-2 { color: #61CE3C; }\n.cm-s-blackboard .cm-meta { color: #D8FA3C; }\n.cm-s-blackboard .cm-builtin { color: #8DA6CE; }\n.cm-s-blackboard .cm-tag { color: #8DA6CE; }\n.cm-s-blackboard .cm-attribute { color: #8DA6CE; }\n.cm-s-blackboard .cm-header { color: #FF6400; }\n.cm-s-blackboard .cm-hr { color: #AEAEAE; }\n.cm-s-blackboard .cm-link { color: #8DA6CE; }\n.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }\n\n.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }\n.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n"],sourceRoot:""}]);const A=t},82609:r=>{r.exports=function(r){var o=[];return o.toString=function(){return this.map((function(o){var c=r(o);return o[2]?"@media ".concat(o[2]," {").concat(c,"}"):c})).join("")},o.i=function(r,c,e){"string"==typeof r&&(r=[[null,r,""]]);var n={};if(e)for(var a=0;a<this.length;a++){var t=this[a][0];null!=t&&(n[t]=!0)}for(var A=0;A<r.length;A++){var l=[].concat(r[A]);e&&n[l[0]]||(c&&(l[2]?l[2]="".concat(c," and ").concat(l[2]):l[2]=c),o.push(l))}},o}},1799:r=>{function o(r,o){(null==o||o>r.length)&&(o=r.length);for(var c=0,e=new Array(o);c<o;c++)e[c]=r[c];return e}r.exports=function(r){var c,e,n=(e=4,function(r){if(Array.isArray(r))return r}(c=r)||function(r,o){var c=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=c){var e,n,a=[],t=!0,A=!1;try{for(c=c.call(r);!(t=(e=c.next()).done)&&(a.push(e.value),!o||a.length!==o);t=!0);}catch(r){A=!0,n=r}finally{try{t||null==c.return||c.return()}finally{if(A)throw n}}return a}}(c,e)||function(r,c){if(r){if("string"==typeof r)return o(r,c);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(r,c):void 0}}(c,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[1],t=n[3];if(!t)return a;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),i="/*# ".concat(l," */"),s=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[a].concat(s).concat([i]).join("\n")}return[a].join("\n")}},36917:(r,o,c)=>{c.r(o),c.d(o,{default:()=>t});var e=c(46062),n=c.n(e),a=c(46165);n()(a.Z,{insert:"head",singleton:!1});const t=a.Z.locals||{}},46062:(r,o,c)=>{var e,n=function(){var r={};return function(o){if(void 0===r[o]){var c=document.querySelector(o);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(r){c=null}r[o]=c}return r[o]}}(),a=[];function t(r){for(var o=-1,c=0;c<a.length;c++)if(a[c].identifier===r){o=c;break}return o}function A(r,o){for(var c={},e=[],n=0;n<r.length;n++){var A=r[n],l=o.base?A[0]+o.base:A[0],i=c[l]||0,s="".concat(l," ").concat(i);c[l]=i+1;var d=t(s),b={css:A[1],media:A[2],sourceMap:A[3]};-1!==d?(a[d].references++,a[d].updater(b)):a.push({identifier:s,updater:C(b,o),references:1}),e.push(s)}return e}function l(r){var o=document.createElement("style"),e=r.attributes||{};if(void 0===e.nonce){var a=c.nc;a&&(e.nonce=a)}if(Object.keys(e).forEach((function(r){o.setAttribute(r,e[r])})),"function"==typeof r.insert)r.insert(o);else{var t=n(r.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}return o}var i,s=(i=[],function(r,o){return i[r]=o,i.filter(Boolean).join("\n")});function d(r,o,c,e){var n=c?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(r.styleSheet)r.styleSheet.cssText=s(o,n);else{var a=document.createTextNode(n),t=r.childNodes;t[o]&&r.removeChild(t[o]),t.length?r.insertBefore(a,t[o]):r.appendChild(a)}}function b(r,o,c){var e=c.css,n=c.media,a=c.sourceMap;if(n?r.setAttribute("media",n):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var m=null,u=0;function C(r,o){var c,e,n;if(o.singleton){var a=u++;c=m||(m=l(o)),e=d.bind(null,c,a,!1),n=d.bind(null,c,a,!0)}else c=l(o),e=b.bind(null,c,o),n=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(c)};return e(r),function(o){if(o){if(o.css===r.css&&o.media===r.media&&o.sourceMap===r.sourceMap)return;e(r=o)}else n()}}r.exports=function(r,o){(o=o||{}).singleton||"boolean"==typeof o.singleton||(o.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var c=A(r=r||[],o);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var e=0;e<c.length;e++){var n=t(c[e]);a[n].references--}for(var l=A(r,o),i=0;i<c.length;i++){var s=t(c[i]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}c=l}}}}}]);
//# sourceMappingURL=6917.fe26194f3b67df75138b.js.map