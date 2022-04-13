"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8835],{44973:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(1799),a=r.n(t),o=r(82609),i=r.n(o)()(a());i.push([n.id,"/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-palenight.CodeMirror {\n  background-color: #292D3E;\n  color: #A6ACCD;\n}\n\n.cm-s-material-palenight .CodeMirror-gutters {\n  background: #292D3E;\n  color: #676E95;\n  border: none;\n}\n\n.cm-s-material-palenight .CodeMirror-guttermarker,\n.cm-s-material-palenight .CodeMirror-guttermarker-subtle,\n.cm-s-material-palenight .CodeMirror-linenumber {\n  color: #676E95;\n}\n\n.cm-s-material-palenight .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-palenight div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-palenight.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-line::selection,\n.cm-s-material-palenight .CodeMirror-line>span::selection,\n.cm-s-material-palenight .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-line::-moz-selection,\n.cm-s-material-palenight .CodeMirror-line>span::-moz-selection,\n.cm-s-material-palenight .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-palenight .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-palenight .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-palenight .cm-variable-3,\n.cm-s-material-palenight .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-palenight .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-palenight .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-palenight .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-palenight .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-palenight .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-comment {\n  color: #676E95;\n}\n\n.cm-s-material-palenight .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-palenight .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-palenight .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-palenight .cm-variable-3,\n.cm-s-material-palenight .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-palenight .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-palenight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/material-palenight.css"],names:[],mappings:"AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-palenight.CodeMirror {\n  background-color: #292D3E;\n  color: #A6ACCD;\n}\n\n.cm-s-material-palenight .CodeMirror-gutters {\n  background: #292D3E;\n  color: #676E95;\n  border: none;\n}\n\n.cm-s-material-palenight .CodeMirror-guttermarker,\n.cm-s-material-palenight .CodeMirror-guttermarker-subtle,\n.cm-s-material-palenight .CodeMirror-linenumber {\n  color: #676E95;\n}\n\n.cm-s-material-palenight .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-palenight div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-palenight.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-line::selection,\n.cm-s-material-palenight .CodeMirror-line>span::selection,\n.cm-s-material-palenight .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-line::-moz-selection,\n.cm-s-material-palenight .CodeMirror-line>span::-moz-selection,\n.cm-s-material-palenight .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-palenight .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-palenight .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-palenight .cm-variable-3,\n.cm-s-material-palenight .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-palenight .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-palenight .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-palenight .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-palenight .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-palenight .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-comment {\n  color: #676E95;\n}\n\n.cm-s-material-palenight .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-palenight .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-palenight .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-palenight .cm-variable-3,\n.cm-s-material-palenight .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-palenight .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-palenight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}"],sourceRoot:""}]);const c=i},82609:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&a[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),e.push(l))}},e}},1799:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}n.exports=function(n){var r,t,a=(t=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){var r=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=r){var t,a,o=[],i=!0,c=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);i=!0);}catch(n){c=!0,a=n}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}}(r,t)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[1],i=a[3];if(!i)return o;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),A="/*# ".concat(l," */"),m=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[o].concat(m).concat([A]).join("\n")}return[o].join("\n")}},98835:(n,e,r)=>{r.r(e),r.d(e,{default:()=>i});var t=r(46062),a=r.n(t),o=r(44973);a()(o.Z,{insert:"head",singleton:!1});const i=o.Z.locals||{}},46062:(n,e,r)=>{var t,a=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),o=[];function i(n){for(var e=-1,r=0;r<o.length;r++)if(o[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],a=0;a<n.length;a++){var c=n[a],l=e.base?c[0]+e.base:c[0],A=r[l]||0,m="".concat(l," ").concat(A);r[l]=A+1;var s=i(m),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(o[s].references++,o[s].updater(u)):o.push({identifier:m,updater:d(u,e),references:1}),t.push(m)}return t}function l(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var A,m=(A=[],function(n,e){return A[n]=e,A.filter(Boolean).join("\n")});function s(n,e,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=m(e,a);else{var o=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function u(n,e,r){var t=r.css,a=r.media,o=r.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,h=0;function d(n,e){var r,t,a;if(e.singleton){var o=h++;r=p||(p=l(e)),t=s.bind(null,r,o,!1),a=s.bind(null,r,o,!0)}else r=l(e),t=u.bind(null,r,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var a=i(r[t]);o[a].references--}for(var l=c(n,e),A=0;A<r.length;A++){var m=i(r[A]);0===o[m].references&&(o[m].updater(),o.splice(m,1))}r=l}}}}}]);
//# sourceMappingURL=8835.54f75889b4256ffe7d78.js.map