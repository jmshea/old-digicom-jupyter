(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6134],{7888:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var r=t(94015),o=t.n(r),a=t(23645),i=t.n(a)()(o());i.push([e.id,".cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/neat.css"],names:[],mappings:"AAAA,6BAA6B,WAAW,EAAE;AAC1C,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,4BAA4B,WAAW,EAAE;AACzC,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,8BAA8B,YAAY,EAAE;AAC5C,qDAAqD,WAAW,EAAE;AAClE,0BAA0B,WAAW,EAAE;AACvC,0BAA0B,WAAW,EAAE;;AAEvC,+CAA+C,mBAAmB,EAAE;AACpE,yCAAyC,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:[".cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n"],sourceRoot:""}]);const c=i},23645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},94015:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(s," */"),u=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(u).concat([l]).join("\n")}return[a].join("\n")}},86134:(e,n,t)=>{var r=t(7888);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);t(93379)(r,{insert:"head",singleton:!1}),r.locals&&(e.exports=r.locals)},93379:(e,n,t)=>{"use strict";var r,o={},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function i(e,n){for(var t=[],r={},o=0;o<e.length;o++){var a=e[o],i=n.base?a[0]+n.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):t.push(r[i]={id:i,parts:[c]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var r=e[t],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(d(r.parts[i],n))}else{for(var c=[];i<r.parts.length;i++)c.push(d(r.parts[i],n));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function A(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function d(e,n){var t,r,o;if(n.singleton){var a=p++;t=f||(f=s(n)),r=A.bind(null,t,a,!1),o=A.bind(null,t,a,!0)}else t=s(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=i(e,n);return c(t,n),function(e){for(var r=[],a=0;a<t.length;a++){var s=t[a],l=o[s.id];l&&(l.refs--,r.push(l))}e&&c(i(e,n),n);for(var u=0;u<r.length;u++){var A=r[u];if(0===A.refs){for(var m=0;m<A.parts.length;m++)A.parts[m]();delete o[A.id]}}}}}}]);
//# sourceMappingURL=6134.59266f35045b656e50ee.js.map