/*! For license information please see cloud-town.481c71820567800b0811.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{10:function(e,t,n){"use strict";e.exports=n(5)},11:function(e,t,n){var r=n(2),a=n(12);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},12:function(e,t,n){(t=n(3)(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_header.scss"}]),e.exports=t},173:function(e,t,n){var r=n(2),a=n(174);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},174:function(e,t,n){(t=n(3)(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_base.scss"}]),e.exports=t},175:function(e,t,n){var r=n(2),a=n(176);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},176:function(e,t,n){(t=n(3)(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_cloud-town.scss"}]),e.exports=t},2:function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function l(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],s=t.base?o[0]+t.base:o[0],i=n[s]||0,u="".concat(s," ").concat(i);n[s]=i+1;var d=l(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(c[d].references++,c[d].updater(p)):c.push({identifier:u,updater:b(p,t),references:1}),r.push(u)}return r}function i(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(o,c[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,g=0;function b(e,t){var n,r,a;if(t.singleton){var o=g++;n=f||(f=i(t)),r=p.bind(null,n,o,!1),a=p.bind(null,n,o,!0)}else n=i(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=l(n[r]);c[a].references--}for(var o=s(e,t),i=0;i<n.length;i++){var u=l(n[i]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}n=o}}}},205:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),o=n(0),c=n.n(o);n(173),n(175);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(e){var t=e.onHover,n=u(Object(o.useState)({width:Math.round(Math.random()*window.innerWidth/10)+120,height:Math.round(Math.random()*window.innerHeight/6)+250,transition:!1,bgPos:Array.apply(null,Array(10)).map((function(){return 100*Math.random()})),img:e.img}),2),r=n[0],a=n[1],l=r.width,i=r.height,d=r.bgPos,p=r.transition,m=r.img,f=function(e){r.transition||t(e)};Object(o.useEffect)((function(){if(e.img!==r.img){var t=500*Math.random();a(s(s({},r),{},{transition:!0})),setTimeout((function(){a(s(s({},r),{},{img:e.img,transition:!1}))}),1200+t)}}),[e.img]);var g={back:180,right:90,front:0,left:-90},b={top:90},y={top:90},h=function(e,t){return{height:"top"===e?l:p?0:i,width:l,backgroundImage:m,transform:"rotateY(".concat(g[e]||0,"deg) rotateX(").concat(y[e]||0,"deg) rotate(").concat(b[e]||0,"deg) translateZ(").concat(l/2,"px)"),backgroundPosition:"".concat(d[2*t],"% ").concat(d[2*t+1],"%")}};return c.a.createElement("div",{className:"cloud-block".concat(p?"--locked":""),style:{width:l,height:i},onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)}},c.a.createElement("div",{className:"cube",style:{transform:"rotateX(-15deg) rotateY(60deg) ".concat(p?"translateY(100%)":"")}},c.a.createElement("div",{className:"cube-label",style:{left:l/4+20,opacity:p?0:1}},c.a.createElement("div",{className:"cube-label-circle"})),["back","right","front","left","top"].map((function(e,t){return c.a.createElement("div",{key:e,style:h(e,t),className:"cube__face cube__face--".concat(e)})}))))},m=n(9);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(e){var t=Object.keys(m.a).sort((function(e,t){return m.a[t].date.localeCompare(m.a[e].date)})),n=window.location.search.replace("_no-header","").replace("/","").replace("?",""),r=n[n.length-1],a=e.cloudIndex||-1;r>-1&&(a=parseInt(r,10)-1)>t.length&&(a=-1);var l=function(){return a>-1?m.a[t[a]]:m.a[t[Math.floor(Math.random()*t.length)]]},s=y(Object(o.useState)({cloud:l(),bgVisible:!1,row1:Math.floor(3*Math.random())+2,row2:Math.floor(3*Math.random())+2}),2),i=s[0],u=s[1],d=function(e){return u((function(t){return g(g({},t),{},{bgVisible:e})}))},f=function(e){return Array.apply(null,Array(e)).map((function(){}))},b=window.innerWidth<800,h=i.cloud[b?"src_small":"src"];return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{className:"cloud-town__bg",src:h,alt:"clouds",style:{opacity:i.bgVisible?1:0}}),c.a.createElement("div",{className:"cloud-town__container"},c.a.createElement("div",{className:"cloud-town"},f(i.row1).map((function(e,t){return c.a.createElement(p,{key:t,img:"url(".concat(h,")"),onHover:d,delay:3/(t+1)*100,triggerReset:i.triggerReset})}))),c.a.createElement("div",{className:"cloud-town",style:{marginTop:"-40vh"}},f(i.row2).map((function(e,t){return c.a.createElement(p,{key:t,img:"url(".concat(h,")"),onHover:d,delay:100*t+300,triggerReset:i.triggerReset})})))),-1===a?c.a.createElement("button",{onClick:function(){u((function(e){return g(g({},e),{},{cloud:l(),bgVisible:!1})}))},className:"cloud-town__reset"}):null,-1!==a?c.a.createElement("p",{className:"cloud-town__label"},i.cloud.city,c.a.createElement("br",null),i.cloud.date," ",i.cloud.time):null)},w=(n(11),n(6));a.a.render(c.a.createElement(o.Fragment,null,c.a.createElement(w.a,{url:"/#/cloud-town"}),c.a.createElement(v,null)),document.getElementById("root"))},3:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(c=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var c,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},5:function(e,t,n){"use strict";var r,a,o,c,l;if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,i=null,u=function(){if(null!==s)try{var e=t.unstable_now();s(!0,e),s=null}catch(e){throw setTimeout(u,0),e}},d=Date.now();t.unstable_now=function(){return Date.now()-d},r=function(e){null!==s?setTimeout(r,0,e):(s=e,setTimeout(u,0))},a=function(e,t){i=setTimeout(e,t)},o=function(){clearTimeout(i)},c=function(){return!1},l=t.unstable_forceFrameRate=function(){}}else{var p=window.performance,m=window.Date,f=window.setTimeout,g=window.clearTimeout;if("undefined"!=typeof console){var b=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof b&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof p&&"function"==typeof p.now)t.unstable_now=function(){return p.now()};else{var y=m.now();t.unstable_now=function(){return m.now()-y}}var h=!1,v=null,w=-1,j=5,_=0;c=function(){return t.unstable_now()>=_},l=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):j=0<e?Math.floor(1e3/e):5};var T=new MessageChannel,O=T.port2;T.port1.onmessage=function(){if(null!==v){var e=t.unstable_now();_=e+j;try{v(!0,e)?O.postMessage(null):(h=!1,v=null)}catch(e){throw O.postMessage(null),e}}else h=!1},r=function(e){v=e,h||(h=!0,O.postMessage(null))},a=function(e,n){w=f((function(){e(t.unstable_now())}),n)},o=function(){g(w),w=-1}}function E(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,a=e[r];if(!(void 0!==a&&0<S(a,t)))break e;e[r]=t,e[n]=a,n=r}}function C(e){return void 0===(e=e[0])?null:e}function k(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,c=e[o],l=o+1,s=e[l];if(void 0!==c&&0>S(c,n))void 0!==s&&0>S(s,c)?(e[r]=s,e[l]=n,r=l):(e[r]=c,e[o]=n,r=o);else{if(!(void 0!==s&&0>S(s,n)))break e;e[r]=s,e[l]=n,r=l}}}return t}return null}function S(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var A=[],M=[],P=1,x=null,D=3,I=!1,N=!1,X=!1;function R(e){for(var t=C(M);null!==t;){if(null===t.callback)k(M);else{if(!(t.startTime<=e))break;k(M),t.sortIndex=t.expirationTime,E(A,t)}t=C(M)}}function F(e){if(X=!1,R(e),!N)if(null!==C(A))N=!0,r(L);else{var t=C(M);null!==t&&a(F,t.startTime-e)}}function L(e,n){N=!1,X&&(X=!1,o()),I=!0;var r=D;try{for(R(n),x=C(A);null!==x&&(!(x.expirationTime>n)||e&&!c());){var l=x.callback;if(null!==l){x.callback=null,D=x.priorityLevel;var s=l(x.expirationTime<=n);n=t.unstable_now(),"function"==typeof s?x.callback=s:x===C(A)&&k(A),R(n)}else k(A);x=C(A)}if(null!==x)var i=!0;else{var u=C(M);null!==u&&a(F,u.startTime-n),i=!1}return i}finally{x=null,D=r,I=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var W=l;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){N||I||(N=!0,r(L))},t.unstable_getCurrentPriorityLevel=function(){return D},t.unstable_getFirstCallbackNode=function(){return C(A)},t.unstable_next=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=W,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},t.unstable_scheduleCallback=function(e,n,c){var l=t.unstable_now();if("object"==typeof c&&null!==c){var s=c.delay;s="number"==typeof s&&0<s?l+s:l,c="number"==typeof c.timeout?c.timeout:U(e)}else c=U(e),s=l;return e={id:P++,callback:n,priorityLevel:e,startTime:s,expirationTime:c=s+c,sortIndex:-1},s>l?(e.sortIndex=s,E(M,e),null===C(A)&&e===C(M)&&(X?o():X=!0,a(F,s-l))):(e.sortIndex=c,E(A,e),N||I||(N=!0,r(L))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();R(e);var n=C(A);return n!==x&&null!==x&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<x.expirationTime||c()},t.unstable_wrapCallback=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}},6:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return window.location.search.indexOf("_no-header")>-1?null:a.a.createElement("header",null,a.a.createElement("a",{href:e.url||"/#",onClick:function(){return e.onClick?e.onClick():null}},a.a.createElement("h1",null,a.a.createElement("span",null,"S"),a.a.createElement("span",null,"h"),a.a.createElement("span",null,"e"),a.a.createElement("span",null,"l"),a.a.createElement("span",null,"b"),a.a.createElement("span",null,"y")," ",a.a.createElement("span",null,"W"),a.a.createElement("span",null,"i"),a.a.createElement("span",null,"l"),a.a.createElement("span",null,"s"),a.a.createElement("span",null,"o"),a.a.createElement("span",null,"n"))))}},8:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,s=c(e),i=1;i<arguments.length;i++){for(var u in n=Object(arguments[i]))a.call(n,u)&&(s[u]=n[u]);if(r){l=r(n);for(var d=0;d<l.length;d++)o.call(n,l[d])&&(s[l[d]]=n[l[d]])}}return s}},9:function(e,t,n){"use strict";var r=n.p+"images/clouds/clouds01.jpg",a=n.p+"images/clouds/clouds01_small.jpg",o=n.p+"images/clouds/clouds02.jpg",c=n.p+"images/clouds/clouds02_small.jpg",l=n.p+"images/clouds/clouds03.jpg",s=n.p+"images/clouds/clouds03_small.jpg",i=n.p+"images/clouds/clouds04.jpg",u=n.p+"images/clouds/clouds04_small.jpg",d=n.p+"images/clouds/clouds05.jpg",p=n.p+"images/clouds/clouds05_small.jpg",m=n.p+"images/clouds/clouds06.jpg",f=n.p+"images/clouds/clouds06_small.jpg",g=n.p+"images/clouds/clouds07.jpg",b=n.p+"images/clouds/clouds07_small.jpg",y=n.p+"images/clouds/clouds08.jpg",h=n.p+"images/clouds/clouds08_small.jpg",v=n.p+"images/clouds/clouds09.jpg",w=n.p+"images/clouds/clouds09_small.jpg",j=n.p+"images/clouds/clouds10.jpg",_=n.p+"images/clouds/clouds10_small.jpg",T=n.p+"images/clouds/clouds11.jpg",O=n.p+"images/clouds/clouds11_small.jpg",E=n.p+"images/clouds/clouds12.jpg",C=n.p+"images/clouds/clouds12_small.jpg",k=n.p+"images/clouds/clouds13.jpg",S=n.p+"images/clouds/clouds13_small.jpg",A=n.p+"images/clouds/clouds14.jpg",M=n.p+"images/clouds/clouds14_small.jpg",P=n.p+"images/clouds/clouds15.jpg",x=n.p+"images/clouds/clouds15_small.jpg",D=n.p+"images/clouds/clouds16.jpg",I=n.p+"images/clouds/clouds16_small.jpg",N=n.p+"images/clouds/clouds17.jpg",X=n.p+"images/clouds/clouds17_small.jpg",R=n.p+"images/clouds/clouds18.jpg",F=n.p+"images/clouds/clouds18_small.jpg",L=n.p+"images/clouds/clouds19.jpg",U=n.p+"images/clouds/clouds19_small.jpg",W=n.p+"images/clouds/clouds20.jpg",J=n.p+"images/clouds/clouds20_small.jpg",V=n.p+"images/clouds/clouds22.jpg",q=n.p+"images/clouds/clouds22_small.jpg",H=n.p+"images/clouds/clouds23.jpg",B=n.p+"images/clouds/clouds24.jpg",Y=n.p+"images/clouds/clouds25.jpg",K=n.p+"images/clouds/clouds26.jpg",$=n.p+"images/clouds/clouds27.jpg",Z=n.p+"images/clouds/clouds28.jpg",z=n.p+"images/clouds/clouds29.jpg",G=n.p+"images/clouds/clouds30.jpg",Q=n.p+"images/clouds/clouds31.jpg";t.a={clouds31:{src:Q,src_small:Q,caption:"",city:"Austin, TX",date:"2020-06-24",time:"20:50 CDT"},clouds30:{src:G,src_small:G,caption:"",city:"Austin, TX",date:"2020-12-25",time:"17:54 CST"},clouds29:{src:z,src_small:z,caption:"",city:"Austin, TX",date:"2020-06-25",time:"20:43 CDT"},clouds28:{src:Z,src_small:Z,caption:"",city:"Austin, TX",date:"2020-12-23",time:"17:38 CST"},clouds27:{src:$,src_small:$,caption:"",city:"Austin, TX",date:"2020-12-25",time:"17:47 CST"},clouds26:{src:K,src_small:K,caption:"",city:"Austin, TX",date:"2020-12-11",time:"17:43 CST"},clouds01:{src:r,src_small:a,caption:"at home",city:"Austin, TX",date:"2020-05-12",time:"20:23 CDT"},clouds02:{src:o,src_small:c,caption:"at home",city:"Austin, TX",date:"2020-03-19",time:"19:41 CDT"},clouds03:{src:l,src_small:s,caption:"at home",city:"Austin, TX",date:"2019-09-09",time:"17:08 CST"},clouds04:{src:i,src_small:u,caption:"on the roof",city:"Washington, DC",date:"2019-09-02",time:"19:47 EST"},clouds05:{src:d,src_small:p,caption:"at home",city:"Austin, TX",date:"2020-05-29",time:"20:33 CDT"},clouds06:{src:m,src_small:f,caption:"at home",city:"Austin, TX",date:"2019-12-23",time:"17:49 CDT"},clouds07:{src:g,src_small:b,caption:"at the ferry terminal",city:"Naoshima, Japan",date:"2019-08-10",time:"19:06 JST"},clouds08:{src:y,src_small:h,caption:"flying",city:"Washington, DC",date:"2019-09-03",time:"21:00 EST"},clouds09:{src:v,src_small:w,caption:"in the neighborhood",city:"Austin, TX",date:"2020-04-28",time:"20:11 CDT"},clouds10:{src:j,src_small:_,caption:"above the lake",city:"Austin, TX",date:"2020-05-31",time:"17:00 CDT"},clouds11:{src:T,src_small:O,caption:"",city:"Red Oak, TX",date:"2020-05-31",time:"20:31 CST"},clouds12:{src:E,src_small:C,caption:"at home",city:"Austin, TX",date:"2020-02-20",time:"18:27 CST"},clouds13:{src:k,src_small:S,caption:"at the train station",city:"Kitahira, Japan",date:"2019-08-12",time:"19:00 JST"},clouds14:{src:A,src_small:M,caption:"by the water",city:"Austin, TX",date:"2020-06-01",time:"20:04 CDT"},clouds15:{src:P,src_small:x,caption:"",city:"Vashon, WA",date:"2020-08-31",time:"19:56 PDT"},clouds16:{src:D,src_small:I,caption:"",city:"Kuna, ID",date:"2020-08-18",time:"20:41 MDT"},clouds17:{src:N,src_small:X,caption:"",city:"Vashon, WA",date:"2020-08-21",time:"20:03 PDT"},clouds18:{src:R,src_small:F,caption:"",city:"Moab, UT",date:"2020-08-16",time:"20:01 MDT"},clouds19:{src:L,src_small:U,caption:"",city:"Moab, UT",date:"2020-08-15",time:"20:13 MDT"},clouds20:{src:W,src_small:J,caption:"",city:"Santa Fe, NM",date:"2020-08-14",time:"19:48 MDT"},clouds22:{src:V,src_small:q,caption:"",city:"Red Oak, TX",date:"2020-09-06",time:"19:54 CDT"},clouds23:{src:H,src_small:H,caption:"",city:"Vashon, WA",date:"2020-09-25",time:"18:50 PDT"},clouds24:{src:B,src_small:B,caption:"",city:"Vashon, WA",date:"2020-09-30",time:"08:01 PDT"},clouds25:{src:Y,src_small:Y,caption:"",city:"San Francisco, CA",date:"2015-08-30",time:"18:58 PST"}}}},[[205,0,1]]]);