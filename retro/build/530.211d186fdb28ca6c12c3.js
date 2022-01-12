(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[530],{76046:(r,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>s});var e=n(94015),o=n.n(e),c=n(23645),t=n.n(c)()(o());t.push([r.id,"/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-dark.CodeMirror { background: #0a0e14; color: #b3b1ad; }\n.cm-s-ayu-dark div.CodeMirror-selected { background: #273747; }\n.cm-s-ayu-dark .CodeMirror-line::selection, .cm-s-ayu-dark .CodeMirror-line > span::selection, .cm-s-ayu-dark .CodeMirror-line > span > span::selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-line::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-gutters { background: #0a0e14; border-right: 0px; }\n.cm-s-ayu-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-dark .CodeMirror-guttermarker-subtle { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-linenumber { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-cursor { border-left: 1px solid #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment { color: #626a73; }\n.cm-s-ayu-dark span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-dark span.cm-number { color: #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment.cm-attribute { color: #ffb454; }\n.cm-s-ayu-dark span.cm-comment.cm-def { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-comment.cm-tag { color: #39bae6; }\n.cm-s-ayu-dark span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-dark span.cm-property, .cm-s-ayu-dark span.cm-attribute { color: #ffb454; }  \n.cm-s-ayu-dark span.cm-keyword { color: #ff8f40; } \n.cm-s-ayu-dark span.cm-builtin { color: #e6b450; }\n.cm-s-ayu-dark span.cm-string { color: #c2d94c; }\n\n.cm-s-ayu-dark span.cm-variable { color: #b3b1ad; }\n.cm-s-ayu-dark span.cm-variable-2 { color: #f07178; }\n.cm-s-ayu-dark span.cm-variable-3 { color: #39bae6; }\n.cm-s-ayu-dark span.cm-type { color: #ff8f40; }\n.cm-s-ayu-dark span.cm-def { color: #ffee99; }\n.cm-s-ayu-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-ayu-dark span.cm-tag { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-header { color: #c2d94c; }\n.cm-s-ayu-dark span.cm-link { color: #39bae6; }\n.cm-s-ayu-dark span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-dark .CodeMirror-activeline-background { background: #01060e; }\n.cm-s-ayu-dark .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/ayu-dark.css"],names:[],mappings:"AAAA,2CAA2C;;AAE3C,4BAA4B,mBAAmB,EAAE,cAAc,EAAE;AACjE,yCAAyC,mBAAmB,EAAE;AAC9D,0JAA0J,gCAAgC,EAAE;AAC5L,yKAAyK,gCAAgC,EAAE;AAC3M,qCAAqC,mBAAmB,EAAE,iBAAiB,EAAE;AAC7E,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,cAAc,EAAE;AACjE,wCAAwC,cAAc,EAAE;AACxD,oCAAoC,8BAA8B,EAAE;;AAEpE,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;;AAEhD,8CAA8C,cAAc,EAAE;AAC9D,wCAAwC,6BAA6B,EAAE;AACvE,wCAAwC,cAAc,EAAE;AACxD,yCAAyC,cAAc,EAAE;;AAEzD,oEAAoE,cAAc,EAAE;AACpF,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;;AAEhD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,iCAAiC,cAAc,EAAE;AACjD,6BAA6B,6BAA6B,EAAE;AAC5D,gCAAgC,cAAc,EAAE;AAChD,8BAA8B,cAAc,EAAE;AAC9C,+BAA+B,cAAc,EAAE;;AAE/C,mDAAmD,mBAAmB,EAAE;AACxE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-dark.CodeMirror { background: #0a0e14; color: #b3b1ad; }\n.cm-s-ayu-dark div.CodeMirror-selected { background: #273747; }\n.cm-s-ayu-dark .CodeMirror-line::selection, .cm-s-ayu-dark .CodeMirror-line > span::selection, .cm-s-ayu-dark .CodeMirror-line > span > span::selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-line::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-gutters { background: #0a0e14; border-right: 0px; }\n.cm-s-ayu-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-dark .CodeMirror-guttermarker-subtle { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-linenumber { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-cursor { border-left: 1px solid #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment { color: #626a73; }\n.cm-s-ayu-dark span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-dark span.cm-number { color: #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment.cm-attribute { color: #ffb454; }\n.cm-s-ayu-dark span.cm-comment.cm-def { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-comment.cm-tag { color: #39bae6; }\n.cm-s-ayu-dark span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-dark span.cm-property, .cm-s-ayu-dark span.cm-attribute { color: #ffb454; }  \n.cm-s-ayu-dark span.cm-keyword { color: #ff8f40; } \n.cm-s-ayu-dark span.cm-builtin { color: #e6b450; }\n.cm-s-ayu-dark span.cm-string { color: #c2d94c; }\n\n.cm-s-ayu-dark span.cm-variable { color: #b3b1ad; }\n.cm-s-ayu-dark span.cm-variable-2 { color: #f07178; }\n.cm-s-ayu-dark span.cm-variable-3 { color: #39bae6; }\n.cm-s-ayu-dark span.cm-type { color: #ff8f40; }\n.cm-s-ayu-dark span.cm-def { color: #ffee99; }\n.cm-s-ayu-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-ayu-dark span.cm-tag { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-header { color: #c2d94c; }\n.cm-s-ayu-dark span.cm-link { color: #39bae6; }\n.cm-s-ayu-dark span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-dark .CodeMirror-activeline-background { background: #01060e; }\n.cm-s-ayu-dark .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const s=t},23645:r=>{"use strict";r.exports=function(r){var a=[];return a.toString=function(){return this.map((function(a){var n=r(a);return a[2]?"@media ".concat(a[2]," {").concat(n,"}"):n})).join("")},a.i=function(r,n,e){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(e)for(var c=0;c<this.length;c++){var t=this[c][0];null!=t&&(o[t]=!0)}for(var s=0;s<r.length;s++){var A=[].concat(r[s]);e&&o[A[0]]||(n&&(A[2]?A[2]="".concat(n," and ").concat(A[2]):A[2]=n),a.push(A))}},a}},94015:r=>{"use strict";function a(r,a){(null==a||a>r.length)&&(a=r.length);for(var n=0,e=new Array(a);n<a;n++)e[n]=r[n];return e}r.exports=function(r){var n,e,o=(e=4,function(r){if(Array.isArray(r))return r}(n=r)||function(r,a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var n=[],e=!0,o=!1,c=void 0;try{for(var t,s=r[Symbol.iterator]();!(e=(t=s.next()).done)&&(n.push(t.value),!a||n.length!==a);e=!0);}catch(r){o=!0,c=r}finally{try{e||null==s.return||s.return()}finally{if(o)throw c}}return n}}(n,e)||function(r,n){if(r){if("string"==typeof r)return a(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(r,n):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[1],t=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),i="/*# ".concat(A," */"),d=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[c].concat(d).concat([i]).join("\n")}return[c].join("\n")}},60530:(r,a,n)=>{var e=n(76046);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[r.id,e,""]]);n(93379)(e,{insert:"head",singleton:!1}),e.locals&&(r.exports=e.locals)},93379:(r,a,n)=>{"use strict";var e,o={},c=function(){var r={};return function(a){if(void 0===r[a]){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}r[a]=n}return r[a]}}();function t(r,a){for(var n=[],e={},o=0;o<r.length;o++){var c=r[o],t=a.base?c[0]+a.base:c[0],s={css:c[1],media:c[2],sourceMap:c[3]};e[t]?e[t].parts.push(s):n.push(e[t]={id:t,parts:[s]})}return n}function s(r,a){for(var n=0;n<r.length;n++){var e=r[n],c=o[e.id],t=0;if(c){for(c.refs++;t<c.parts.length;t++)c.parts[t](e.parts[t]);for(;t<e.parts.length;t++)c.parts.push(f(e.parts[t],a))}else{for(var s=[];t<e.parts.length;t++)s.push(f(e.parts[t],a));o[e.id]={id:e.id,refs:1,parts:s}}}}function A(r){var a=document.createElement("style");if(void 0===r.attributes.nonce){var e=n.nc;e&&(r.attributes.nonce=e)}if(Object.keys(r.attributes).forEach((function(n){a.setAttribute(n,r.attributes[n])})),"function"==typeof r.insert)r.insert(a);else{var o=c(r.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}return a}var i,d=(i=[],function(r,a){return i[r]=a,i.filter(Boolean).join("\n")});function u(r,a,n,e){var o=n?"":e.css;if(r.styleSheet)r.styleSheet.cssText=d(a,o);else{var c=document.createTextNode(o),t=r.childNodes;t[a]&&r.removeChild(t[a]),t.length?r.insertBefore(c,t[a]):r.appendChild(c)}}function m(r,a,n){var e=n.css,o=n.media,c=n.sourceMap;if(o&&r.setAttribute("media",o),c&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var l=null,p=0;function f(r,a){var n,e,o;if(a.singleton){var c=p++;n=l||(l=A(a)),e=u.bind(null,n,c,!1),o=u.bind(null,n,c,!0)}else n=A(a),e=m.bind(null,n,a),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)};return e(r),function(a){if(a){if(a.css===r.css&&a.media===r.media&&a.sourceMap===r.sourceMap)return;e(r=a)}else o()}}r.exports=function(r,a){(a=a||{}).attributes="object"==typeof a.attributes?a.attributes:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var n=t(r,a);return s(n,a),function(r){for(var e=[],c=0;c<n.length;c++){var A=n[c],i=o[A.id];i&&(i.refs--,e.push(i))}r&&s(t(r,a),a);for(var d=0;d<e.length;d++){var u=e[d];if(0===u.refs){for(var m=0;m<u.parts.length;m++)u.parts[m]();delete o[u.id]}}}}}}]);
//# sourceMappingURL=530.211d186fdb28ca6c12c3.js.map