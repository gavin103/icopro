webpackJsonp([4],{174:function(t,e,n){"use strict";function r(t){return"[object Array]"===b.call(t)}function o(t){return"[object ArrayBuffer]"===b.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===b.call(t)}function l(t){return"[object File]"===b.call(t)}function d(t){return"[object Blob]"===b.call(t)}function h(t){return"[object Function]"===b.call(t)}function A(t){return f(t)&&h(t.pipe)}function m(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function C(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function x(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function v(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=v(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)x(arguments[n],t);return e}function w(t,e,n){return x(e,function(e,r){t[r]=n&&"function"==typeof e?B(e,n):e}),t}var B=n(180),y=n(201),b=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:y,isFormData:i,isArrayBufferView:s,isString:a,isNumber:c,isObject:f,isUndefined:u,isDate:p,isFile:l,isBlob:d,isFunction:h,isStream:A,isURLSearchParams:m,isStandardBrowserEnv:C,forEach:x,merge:v,extend:w,trim:g}},175:function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(174),i=n(196),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(176):void 0!==e&&(t=n(176)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){a.headers[t]={}}),o.forEach(["post","put","patch"],function(t){a.headers[t]=o.merge(s)}),t.exports=a}).call(e,n(73))},176:function(t,e,n){"use strict";var r=n(174),o=n(188),i=n(191),s=n(197),a=n(195),c=n(179),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(190);t.exports=function(t){return new Promise(function(e,f){var p=t.data,l=t.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",A=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,h="onload",A=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var m=t.auth.username||"",g=t.auth.password||"";l.Authorization="Basic "+u(m+":"+g)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||A)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,i),d=null}},d.onerror=function(){f(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var C=n(193),x=(t.withCredentials||a(t.url))&&t.xsrfCookieName?C.read(t.xsrfCookieName):void 0;x&&(l[t.xsrfHeaderName]=x)}if("setRequestHeader"in d&&r.forEach(l,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===p&&(p=null),d.send(p)})}},177:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},178:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},179:function(t,e,n){"use strict";var r=n(187);t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},180:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},181:function(t,e,n){t.exports=n(182)},182:function(t,e,n){"use strict";function r(t){var e=new s(t),n=i(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var o=n(174),i=n(180),s=n(184),a=n(175),c=r(a);c.Axios=s,c.create=function(t){return r(o.merge(a,t))},c.Cancel=n(177),c.CancelToken=n(183),c.isCancel=n(178),c.all=function(t){return Promise.all(t)},c.spread=n(198),t.exports=c,t.exports.default=c},183:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(177);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},184:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=n(175),i=n(174),s=n(185),a=n(186),c=n(194),u=n(192);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url));var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},185:function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(174);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},186:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(174),i=n(189),s=n(178),a=n(175);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},187:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},188:function(t,e,n){"use strict";var r=n(179);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},189:function(t,e,n){"use strict";var r=n(174);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},190:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),s="",a=0,c=i;o.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;e=e<<8|n}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},191:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(174);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},192:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},193:function(t,e,n){"use strict";var r=n(174);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},194:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},195:function(t,e,n){"use strict";var r=n(174);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},196:function(t,e,n){"use strict";var r=n(174);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},197:function(t,e,n){"use strict";var r=n(174);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},198:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},201:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},232:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(181),o=n.n(r);e.default={name:"home",components:{},data:function(){return{banners:["http://47.104.31.231/image/static/Banner1.png","http://47.104.31.231/image/static/Banner2.png","http://47.104.31.231/image/static/banner3.png","http://47.104.31.231/image/static/banner4.jpg"],hotList:[]}},mounted:function(){this.getIcoList()},methods:{getIcoList:function(){var t=this;this.loading=!0;o.a.get("http://gavin.frpgz1.idcfengye.com/api/getlist").then(function(t){return t.data}).then(function(e){t.loading=!1,1==e.code?(console.log(e),e.datas&&e.datas.icosList&&(t.hotList=e.datas.icosList,t.hotList.length>4&&(t.hotList.length=4))):Message.error({message:e.msg||"请求失败",center:!0})})}}}},260:function(t,e,n){e=t.exports=n(171)(!0),e.push([t.i,".el-carousel__item h3{color:#475669;font-size:58px;opacity:.75;line-height:300px;margin:0;text-align:center}.el-carousel__item:nth-child(2n){background-color:#99a9bf}.el-carousel__item:nth-child(odd){background-color:#d3dce6}.home{background-color:#fff;padding-bottom:36px;margin-bottom:72px}.home-banner img{width:100%}.title{padding-top:18px;font-size:30px;text-align:center;padding-bottom:18px}.hot-list{width:1120px;min-width:1120px;margin:0 auto}.hot-list .ico-img{width:100%;height:153px}.hot-list .ico-band{height:30px;line-height:30px;margin-left:8px}.hot-list .ico-dis{margin:0 8px;font-size:14px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;text-align:justify}","",{version:3,sources:["/Users/gavin/Documents/best/icopro/src/components/Home/Home.vue"],names:[],mappings:"AACA,sBACE,cAAe,AACf,eAAgB,AAChB,YAAc,AACd,kBAAmB,AACnB,SAAU,AACV,iBAAmB,CACpB,AACD,iCACE,wBAA0B,CAC3B,AACD,kCACE,wBAA0B,CAC3B,AACD,MACI,sBAAuB,AACvB,oBAAqB,AACrB,kBAAoB,CACvB,AACD,iBACE,UAAY,CACb,AACD,OACE,iBAAkB,AAClB,eAAgB,AAChB,kBAAmB,AACnB,mBAAqB,CACtB,AACD,UACE,aAAc,AACd,iBAAkB,AAClB,aAAe,CAChB,AACD,mBACE,WAAY,AACZ,YAAc,CACf,AACD,oBACE,YAAa,AACb,iBAAkB,AAClB,eAAiB,CAClB,AACD,mBACE,aAAc,AACd,eAAgB,AAChB,gBAAkB,AAClB,uBAAwB,AACxB,oBAAqB,AACrB,qBAAsB,AACtB,kBAAoB,CACrB",file:"Home.vue",sourcesContent:["\n.el-carousel__item h3 {\n  color: #475669;\n  font-size: 58px;\n  opacity: 0.75;\n  line-height: 300px;\n  margin: 0;\n  text-align: center;\n}\n.el-carousel__item:nth-child(2n) {\n  background-color: #99a9bf;\n}\n.el-carousel__item:nth-child(2n+1) {\n  background-color: #d3dce6;\n}\n.home{\n    background-color: #fff;\n    padding-bottom: 36px;\n    margin-bottom: 72px;\n}\n.home-banner img{\n  width: 100%;\n}\n.title{\n  padding-top: 18px;\n  font-size: 30px;\n  text-align: center;\n  padding-bottom: 18px;\n}\n.hot-list{\n  width: 1120px;\n  min-width: 1120px;\n  margin: 0 auto;\n}\n.hot-list .ico-img{\n  width: 100%;\n  height: 153px;\n}\n.hot-list .ico-band{\n  height: 30px;\n  line-height: 30px;\n  margin-left: 8px;\n}\n.hot-list .ico-dis{\n  margin: 0 8px;\n  font-size: 14px;\n  overflow : hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  text-align: justify;\n}\n"],sourceRoot:""}])},267:function(t,e,n){var r=n(260);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(172)("47b4d804",r,!0)},274:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("el-carousel",{attrs:{"indicator-position":"outside"}},t._l(t.banners,function(t){return n("el-carousel-item",{key:t.index,staticClass:"home-banner"},[n("img",{attrs:{src:t,alt:""}})])})),t._v(" "),n("div",{staticClass:"hot-list"},[n("h2",{staticClass:"title"},[t._v("\n      热门ICO推荐\n    ")]),t._v(" "),n("el-row",{attrs:{gutter:12}},t._l(t.hotList,function(e,r){return n("el-col",{key:r,attrs:{span:8}},[n("el-card",{attrs:{shadow:"hover","body-style":{height:"291px",padding:"0px"}}},[n("router-link",{attrs:{to:{name:"Detail",params:{id:e.icoId}}}},[n("img",{staticClass:"ico-img",attrs:{src:e.largeImg,alt:e.icoTitle}})]),t._v(" "),n("h3",{staticClass:"ico-band"},[t._v(t._s(e.icoTitle))]),t._v(" "),n("p",{staticClass:"ico-dis"},[t._v(t._s(e.icoDescription))])],1)],1)}))],1),t._v(" "),n("div",{staticClass:"policy-list"})],1)},staticRenderFns:[]}},83:function(t,e,n){n(267);var r=n(45)(n(232),n(274),null,null);t.exports=r.exports}});
//# sourceMappingURL=4.015e1c1f3910b0059ccd.js.map