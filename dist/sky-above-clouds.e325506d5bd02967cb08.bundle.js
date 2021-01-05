/*! For license information please see sky-above-clouds.e325506d5bd02967cb08.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{10:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,l,u=i(e),c=1;c<arguments.length;c++){for(var s in t=Object(arguments[c]))a.call(t,s)&&(u[s]=t[s]);if(r){l=r(t);for(var f=0;f<l.length;f++)o.call(t,l[f])&&(u[l[f]]=t[l[f]])}}return u}},12:function(e,n,t){"use strict";e.exports=t(5)},13:function(e,n,t){"use strict";var r=t(0),a=t.n(r);t(14);n.a=function(){return a.a.createElement("div",{className:"sky-above-clouds"},a.a.createElement("div",{className:"above"}),a.a.createElement("div",{className:"below"},a.a.createElement("div",{className:"cloud-container"},a.a.createElement("div",{className:"clouds"},function(){for(var e,n,t=0,r=[],o=22,i=0,l=0;t<139;)(i+=(e=80/o+35*Math.random()/o)+4/o)>=99&&(o>3&&(o>14&&(o-=2),o-=1),i=e+4/o,l=0,r.push(a.a.createElement("span",{className:"spacer",key:"spacer"+t}))),l+=1,4===o&&2===l||(n=null),r.push(a.a.createElement("div",{key:t,style:{flex:"1 1 ".concat(e,"%"),height:"".concat(420*Math.pow(1/o,2.32),"vh"),margin:"".concat(1/o,"% ").concat(2/o,"%"),borderBottomRightRadius:"".concat(Math.round(60+20*Math.random()),"%"),borderBottomLeftRadius:"".concat(Math.round(60+20*Math.random()),"%"),borderTopRightRadius:"".concat(Math.round(60+20*Math.random()),"%"),borderTopLeftRadius:"".concat(Math.round(60+20*Math.random()),"%")}},n)),t+=1;return r}()))))}},14:function(e,n,t){var r=t(2),a=t(16);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},16:function(e,n,t){(n=t(3)(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_sky-above-clouds.scss"}]),e.exports=n},174:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t.n(r),o=t(0),i=t.n(o),l=(t(14),t(13)),u=(t(8),t(6));a.a.render(i.a.createElement(o.Fragment,null,i.a.createElement(u.a,{url:"/#/sky-above-clouds"}),i.a.createElement(l.a,null)),document.getElementById("root"))},2:function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function l(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],u=n.base?o[0]+n.base:o[0],c=t[u]||0,s="".concat(u," ").concat(c);t[u]=c+1;var f=l(s),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:b(d,n),references:1}),r.push(s)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,f=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function b(e,n){var t,r,a;if(n.singleton){var o=v++;t=m||(m=c(n)),r=d.bind(null,t,o,!1),a=d.bind(null,t,o,!0)}else t=c(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=l(t[r]);i[a].references--}for(var o=u(e,n),c=0;c<t.length;c++){var s=l(t[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=o}}}},3:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,l,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},5:function(e,n,t){"use strict";var r,a,o,i,l;if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,c=null,s=function(){if(null!==u)try{var e=n.unstable_now();u(!0,e),u=null}catch(e){throw setTimeout(s,0),e}},f=Date.now();n.unstable_now=function(){return Date.now()-f},r=function(e){null!==u?setTimeout(r,0,e):(u=e,setTimeout(s,0))},a=function(e,n){c=setTimeout(e,n)},o=function(){clearTimeout(c)},i=function(){return!1},l=n.unstable_forceFrameRate=function(){}}else{var d=window.performance,p=window.Date,m=window.setTimeout,v=window.clearTimeout;if("undefined"!=typeof console){var b=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof b&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof d&&"function"==typeof d.now)n.unstable_now=function(){return d.now()};else{var h=p.now();n.unstable_now=function(){return p.now()-h}}var y=!1,w=null,g=-1,_=5,E=0;i=function(){return n.unstable_now()>=E},l=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):_=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,T=k.port2;k.port1.onmessage=function(){if(null!==w){var e=n.unstable_now();E=e+_;try{w(!0,e)?T.postMessage(null):(y=!1,w=null)}catch(e){throw T.postMessage(null),e}}else y=!1},r=function(e){w=e,y||(y=!0,T.postMessage(null))},a=function(e,t){g=m((function(){e(n.unstable_now())}),t)},o=function(){v(g),g=-1}}function x(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,a=e[r];if(!(void 0!==a&&0<C(a,n)))break e;e[r]=n,e[t]=a,t=r}}function M(e){return void 0===(e=e[0])?null:e}function j(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,i=e[o],l=o+1,u=e[l];if(void 0!==i&&0>C(i,t))void 0!==u&&0>C(u,i)?(e[r]=u,e[l]=t,r=l):(e[r]=i,e[o]=t,r=o);else{if(!(void 0!==u&&0>C(u,t)))break e;e[r]=u,e[l]=t,r=l}}}return n}return null}function C(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var O=[],N=[],R=1,I=null,P=3,S=!1,F=!1,L=!1;function A(e){for(var n=M(N);null!==n;){if(null===n.callback)j(N);else{if(!(n.startTime<=e))break;j(N),n.sortIndex=n.expirationTime,x(O,n)}n=M(N)}}function B(e){if(L=!1,A(e),!F)if(null!==M(O))F=!0,r(q);else{var n=M(N);null!==n&&a(B,n.startTime-e)}}function q(e,t){F=!1,L&&(L=!1,o()),S=!0;var r=P;try{for(A(t),I=M(O);null!==I&&(!(I.expirationTime>t)||e&&!i());){var l=I.callback;if(null!==l){I.callback=null,P=I.priorityLevel;var u=l(I.expirationTime<=t);t=n.unstable_now(),"function"==typeof u?I.callback=u:I===M(O)&&j(O),A(t)}else j(O);I=M(O)}if(null!==I)var c=!0;else{var s=M(N);null!==s&&a(B,s.startTime-t),c=!1}return c}finally{I=null,P=r,S=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var D=l;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){F||S||(F=!0,r(q))},n.unstable_getCurrentPriorityLevel=function(){return P},n.unstable_getFirstCallbackNode=function(){return M(O)},n.unstable_next=function(e){switch(P){case 1:case 2:case 3:var n=3;break;default:n=P}var t=P;P=n;try{return e()}finally{P=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=D,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=P;P=e;try{return n()}finally{P=t}},n.unstable_scheduleCallback=function(e,t,i){var l=n.unstable_now();if("object"==typeof i&&null!==i){var u=i.delay;u="number"==typeof u&&0<u?l+u:l,i="number"==typeof i.timeout?i.timeout:U(e)}else i=U(e),u=l;return e={id:R++,callback:t,priorityLevel:e,startTime:u,expirationTime:i=u+i,sortIndex:-1},u>l?(e.sortIndex=u,x(N,e),null===M(O)&&e===M(N)&&(L?o():L=!0,a(B,u-l))):(e.sortIndex=i,x(O,e),F||S||(F=!0,r(q))),e},n.unstable_shouldYield=function(){var e=n.unstable_now();A(e);var t=M(O);return t!==I&&null!==I&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<I.expirationTime||i()},n.unstable_wrapCallback=function(e){var n=P;return function(){var t=P;P=n;try{return e.apply(this,arguments)}finally{P=t}}}},6:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return window.location.search.indexOf("_no-header")>-1?null:a.a.createElement("header",null,a.a.createElement("a",{href:e.url||"/#",onClick:function(){return e.onClick?e.onClick():null}},a.a.createElement("h1",null,a.a.createElement("span",null,"S"),a.a.createElement("span",null,"h"),a.a.createElement("span",null,"e"),a.a.createElement("span",null,"l"),a.a.createElement("span",null,"b"),a.a.createElement("span",null,"y")," ",a.a.createElement("span",null,"W"),a.a.createElement("span",null,"i"),a.a.createElement("span",null,"l"),a.a.createElement("span",null,"s"),a.a.createElement("span",null,"o"),a.a.createElement("span",null,"n"))))}},8:function(e,n,t){var r=t(2),a=t(9);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},9:function(e,n,t){(n=t(3)(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_header.scss"}]),e.exports=n}},[[174,0,1]]]);