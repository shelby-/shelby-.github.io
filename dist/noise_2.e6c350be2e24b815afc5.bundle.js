/*! For license information please see noise_2.e6c350be2e24b815afc5.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{11:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return window.location.search.indexOf("_no-header")>-1?null:a.a.createElement("header",null,a.a.createElement("a",{href:e.url||"/#"},a.a.createElement("h1",null,a.a.createElement("span",null,"S"),a.a.createElement("span",null,"h"),a.a.createElement("span",null,"e"),a.a.createElement("span",null,"l"),a.a.createElement("span",null,"b"),a.a.createElement("span",null,"y")," ",a.a.createElement("span",null,"W"),a.a.createElement("span",null,"i"),a.a.createElement("span",null,"l"),a.a.createElement("span",null,"s"),a.a.createElement("span",null,"o"),a.a.createElement("span",null,"n"))))}},197:function(e,n,t){var r,a;void 0===(a="function"==typeof(r=function(){var e={};function n(e,n,t){this.x=e,this.y=n,this.z=t}n.prototype.dot2=function(e,n){return this.x*e+this.y*n},n.prototype.dot3=function(e,n,t){return this.x*e+this.y*n+this.z*t};var t=[new n(1,1,0),new n(-1,1,0),new n(1,-1,0),new n(-1,-1,0),new n(1,0,1),new n(-1,0,1),new n(1,0,-1),new n(-1,0,-1),new n(0,1,1),new n(0,-1,1),new n(0,1,-1),new n(0,-1,-1)],r=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],a=new Array(512),o=new Array(512);e.seed=function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var n=0;n<256;n++){var i;i=1&n?r[n]^255&e:r[n]^e>>8&255,a[n]=a[n+256]=i,o[n]=o[n+256]=t[i%12]}},e.seed(0);var i=.5*(Math.sqrt(3)-1),l=(3-Math.sqrt(3))/6,u=1/6;function c(e){return e*e*e*(e*(6*e-15)+10)}function s(e,n,t){return(1-t)*e+t*n}return e.simplex2=function(e,n){var t,r,u=(e+n)*i,c=Math.floor(e+u),s=Math.floor(n+u),f=(c+s)*l,d=e-c+f,p=n-s+f;d>p?(t=1,r=0):(t=0,r=1);var m=d-t+l,v=p-r+l,h=d-1+2*l,b=p-1+2*l,y=o[(c&=255)+a[s&=255]],w=o[c+t+a[s+r]],g=o[c+1+a[s+1]],x=.5-d*d-p*p,_=.5-m*m-v*v,M=.5-h*h-b*b;return 70*((x<0?0:(x*=x)*x*y.dot2(d,p))+(_<0?0:(_*=_)*_*w.dot2(m,v))+(M<0?0:(M*=M)*M*g.dot2(h,b)))},e.simplex3=function(e,n,t){var r,i,l,c,s,f,d=(e+n+t)*(1/3),p=Math.floor(e+d),m=Math.floor(n+d),v=Math.floor(t+d),h=(p+m+v)*u,b=e-p+h,y=n-m+h,w=t-v+h;b>=y?y>=w?(r=1,i=0,l=0,c=1,s=1,f=0):b>=w?(r=1,i=0,l=0,c=1,s=0,f=1):(r=0,i=0,l=1,c=1,s=0,f=1):y<w?(r=0,i=0,l=1,c=0,s=1,f=1):b<w?(r=0,i=1,l=0,c=0,s=1,f=1):(r=0,i=1,l=0,c=1,s=1,f=0);var g=b-r+u,x=y-i+u,_=w-l+u,M=b-c+2*u,j=y-s+2*u,E=w-f+2*u,k=b-1+.5,T=y-1+.5,O=w-1+.5,C=o[(p&=255)+a[(m&=255)+a[v&=255]]],I=o[p+r+a[m+i+a[v+l]]],S=o[p+c+a[m+s+a[v+f]]],A=o[p+1+a[m+1+a[v+1]]],F=.6-b*b-y*y-w*w,P=.6-g*g-x*x-_*_,N=.6-M*M-j*j-E*E,q=.6-k*k-T*T-O*O;return 32*((F<0?0:(F*=F)*F*C.dot3(b,y,w))+(P<0?0:(P*=P)*P*I.dot3(g,x,_))+(N<0?0:(N*=N)*N*S.dot3(M,j,E))+(q<0?0:(q*=q)*q*A.dot3(k,T,O)))},e.perlin2=function(e,n){var t=Math.floor(e),r=Math.floor(n);e-=t,n-=r;var i=o[(t&=255)+a[r&=255]].dot2(e,n),l=o[t+a[r+1]].dot2(e,n-1),u=o[t+1+a[r]].dot2(e-1,n),f=o[t+1+a[r+1]].dot2(e-1,n-1),d=c(e);return s(s(i,u,d),s(l,f,d),c(n))},e.perlin3=function(e,n,t){var r=Math.floor(e),i=Math.floor(n),l=Math.floor(t);e-=r,n-=i,t-=l;var u=o[(r&=255)+a[(i&=255)+a[l&=255]]].dot3(e,n,t),f=o[r+a[i+a[l+1]]].dot3(e,n,t-1),d=o[r+a[i+1+a[l]]].dot3(e,n-1,t),p=o[r+a[i+1+a[l+1]]].dot3(e,n-1,t-1),m=o[r+1+a[i+a[l]]].dot3(e-1,n,t),v=o[r+1+a[i+a[l+1]]].dot3(e-1,n,t-1),h=o[r+1+a[i+1+a[l]]].dot3(e-1,n-1,t),b=o[r+1+a[i+1+a[l+1]]].dot3(e-1,n-1,t-1),y=c(e),w=c(n),g=c(t);return s(s(s(u,m,y),s(f,v,y),g),s(s(d,h,y),s(p,b,y),g),w)},e})?r.call(n,t,n,e):r)||(e.exports=a)},215:function(e,n,t){var r=t(6),a=t(216);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},216:function(e,n,t){(n=t(7)(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_noise.scss"}]),e.exports=n},29:function(e,n,t){"use strict";var r,a,o,i,l;if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,c=null,s=function(){if(null!==u)try{var e=n.unstable_now();u(!0,e),u=null}catch(e){throw setTimeout(s,0),e}},f=Date.now();n.unstable_now=function(){return Date.now()-f},r=function(e){null!==u?setTimeout(r,0,e):(u=e,setTimeout(s,0))},a=function(e,n){c=setTimeout(e,n)},o=function(){clearTimeout(c)},i=function(){return!1},l=n.unstable_forceFrameRate=function(){}}else{var d=window.performance,p=window.Date,m=window.setTimeout,v=window.clearTimeout;if("undefined"!=typeof console){var h=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof d&&"function"==typeof d.now)n.unstable_now=function(){return d.now()};else{var b=p.now();n.unstable_now=function(){return p.now()-b}}var y=!1,w=null,g=-1,x=5,_=0;i=function(){return n.unstable_now()>=_},l=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):x=0<e?Math.floor(1e3/e):5};var M=new MessageChannel,j=M.port2;M.port1.onmessage=function(){if(null!==w){var e=n.unstable_now();_=e+x;try{w(!0,e)?j.postMessage(null):(y=!1,w=null)}catch(e){throw j.postMessage(null),e}}else y=!1},r=function(e){w=e,y||(y=!0,j.postMessage(null))},a=function(e,t){g=m((function(){e(n.unstable_now())}),t)},o=function(){v(g),g=-1}}function E(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,a=e[r];if(!(void 0!==a&&0<O(a,n)))break e;e[r]=n,e[t]=a,t=r}}function k(e){return void 0===(e=e[0])?null:e}function T(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,i=e[o],l=o+1,u=e[l];if(void 0!==i&&0>O(i,t))void 0!==u&&0>O(u,i)?(e[r]=u,e[l]=t,r=l):(e[r]=i,e[o]=t,r=o);else{if(!(void 0!==u&&0>O(u,t)))break e;e[r]=u,e[l]=t,r=l}}}return n}return null}function O(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var C=[],I=[],S=1,A=null,F=3,P=!1,N=!1,q=!1;function R(e){for(var n=k(I);null!==n;){if(null===n.callback)T(I);else{if(!(n.startTime<=e))break;T(I),n.sortIndex=n.expirationTime,E(C,n)}n=k(I)}}function L(e){if(q=!1,R(e),!N)if(null!==k(C))N=!0,r(U);else{var n=k(I);null!==n&&a(L,n.startTime-e)}}function U(e,t){N=!1,q&&(q=!1,o()),P=!0;var r=F;try{for(R(t),A=k(C);null!==A&&(!(A.expirationTime>t)||e&&!i());){var l=A.callback;if(null!==l){A.callback=null,F=A.priorityLevel;var u=l(A.expirationTime<=t);t=n.unstable_now(),"function"==typeof u?A.callback=u:A===k(C)&&T(C),R(t)}else T(C);A=k(C)}if(null!==A)var c=!0;else{var s=k(I);null!==s&&a(L,s.startTime-t),c=!1}return c}finally{A=null,F=r,P=!1}}function D(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var B=l;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){N||P||(N=!0,r(U))},n.unstable_getCurrentPriorityLevel=function(){return F},n.unstable_getFirstCallbackNode=function(){return k(C)},n.unstable_next=function(e){switch(F){case 1:case 2:case 3:var n=3;break;default:n=F}var t=F;F=n;try{return e()}finally{F=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=B,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=F;F=e;try{return n()}finally{F=t}},n.unstable_scheduleCallback=function(e,t,i){var l=n.unstable_now();if("object"==typeof i&&null!==i){var u=i.delay;u="number"==typeof u&&0<u?l+u:l,i="number"==typeof i.timeout?i.timeout:D(e)}else i=D(e),u=l;return e={id:S++,callback:t,priorityLevel:e,startTime:u,expirationTime:i=u+i,sortIndex:-1},u>l?(e.sortIndex=u,E(I,e),null===k(C)&&e===k(I)&&(q?o():q=!0,a(L,u-l))):(e.sortIndex=i,E(C,e),N||P||(N=!0,r(U))),e},n.unstable_shouldYield=function(){var e=n.unstable_now();R(e);var t=k(C);return t!==A&&null!==A&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<A.expirationTime||i()},n.unstable_wrapCallback=function(e){var n=F;return function(){var t=F;F=n;try{return e.apply(this,arguments)}finally{F=t}}}},35:function(e,n,t){var r=t(6),a=t(36);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},36:function(e,n,t){(n=t(7)(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_header.scss"}]),e.exports=n},406:function(e,n,t){"use strict";t.r(n);var r=t(20),a=t.n(r),o=t(0),i=t.n(o),l=t(197),u=t.n(l);t(215);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var f=function(){var e=Object(o.useRef)(null),n=c(Object(o.useState)(!1),2),t=n[0],r=n[1],a=Math.min(window.innerWidth-40,400),l=function(e,n,t,r,a,o){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:255,l=4*(n+t*e.width);e.data[l+0]=r,e.data[l+1]=a,e.data[l+2]=o,e.data[l+3]=i},s=function(e,n,t){return 156*Math.abs(u.a.simplex2(n/500+e,t/500+e))+100};return Object(o.useEffect)((function(){e.current&&!t&&(!function n(t,r,o){var i,u=e.current.getContext("2d"),c=u.createImageData(a,400);if(o%2==0){for(var f=0;f<a;f+=1)for(var d=0;d<400;d+=1)i=s(r,f,d),140,140,o<400&&(i=s(t,f,d)+(s(r,f,d)-s(t,f,d))*(o+1)/400),l(c,f,d,i,140,140);u.putImageData(c,0,0)}o<400?window.requestAnimationFrame((function(){return n(t,r,o+1)})):window.requestAnimationFrame((function(){return n(r,1e3*Math.random(),0)}))}(0,1e3*Math.random(),0),r(!0))}),[e.current]),i.a.createElement("div",{className:"noise-canvas"},i.a.createElement("canvas",{width:a,height:400,ref:e,style:{display:"block",margin:"0 auto"}}))},d=t(11);t(35);a.a.render(i.a.createElement(o.Fragment,null,i.a.createElement(d.a,{url:"/#/sketches"}),i.a.createElement(f,null)),document.getElementById("root"))},56:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,l,u=i(e),c=1;c<arguments.length;c++){for(var s in t=Object(arguments[c]))a.call(t,s)&&(u[s]=t[s]);if(r){l=r(t);for(var f=0;f<l.length;f++)o.call(t,l[f])&&(u[l[f]]=t[l[f]])}}return u}},57:function(e,n,t){"use strict";e.exports=t(29)},6:function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function l(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],u=n.base?o[0]+n.base:o[0],c=t[u]||0,s="".concat(u," ").concat(c);t[u]=c+1;var f=l(s),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:h(d,n),references:1}),r.push(s)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,f=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function h(e,n){var t,r,a;if(n.singleton){var o=v++;t=m||(m=c(n)),r=d.bind(null,t,o,!1),a=d.bind(null,t,o,!0)}else t=c(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=l(t[r]);i[a].references--}for(var o=u(e,n),c=0;c<t.length;c++){var s=l(t[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=o}}}},7:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,l,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}}},[[406,0,1]]]);