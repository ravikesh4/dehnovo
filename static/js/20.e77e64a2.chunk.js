/*! For license information please see 20.e77e64a2.chunk.js.LICENSE.txt */
(this.webpackJsonpdehnovo=this.webpackJsonpdehnovo||[]).push([[20],{108:function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"a",(function(){return o}))},30:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return a})),t.d(n,"e",(function(){return f}));var o=t(34),r=t.n(o),i=function(e){if("undefined"!==window)return r.a.get(e)},c=function(e,n){var t,o;console.log("Authenticate helper on signin response",e),t="token",o=e.data.token,"undefined"!==window&&r.a.set(t,o,{expires:1}),function(e,n){"undefined"!==window&&localStorage.setItem(e,JSON.stringify(n))}("user",e.data.user),n()},u=function(){if("undefined"!==window&&i("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},a=function(e){var n;n="token","undefined"!==window&&r.a.remove(n,{expires:1}),function(e){"undefined"!==window&&localStorage.removeItem(e)}("user"),e()},f=function(e,n){if(console.log("Update user in LS Helpers",e),"undefined"!==typeof window){var t=JSON.parse(localStorage.getItem("user"));t=e.data,localStorage.setItem("user",JSON.stringify(t))}n()}},34:function(e,n,t){var o,r;!function(i){if(void 0===(r="function"===typeof(o=i)?o.call(n,t,n,e):o)||(e.exports=r),!0,e.exports=i(),!!0){var c=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=c,u}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(f){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var a in i)i[a]&&(u+="; "+a,!0!==i[a]&&(u+="="+i[a].split(";")[0]));return document.cookie=n+"="+t+u}}function c(e,t){if("undefined"!==typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var u=i[c].split("="),a=u.slice(1).join("=");t||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var f=n(u[0]);if(a=(o.read||o)(a,f)||n(a),t)try{a=JSON.parse(a)}catch(s){}if(r[f]=a,e===f)break}catch(s){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}((function(){}))}))},346:function(e,n,t){"use strict";t.r(n);var o=t(108),r=t(0),i=t.n(r),c=t(1),u=t(30);n.default=function(e){var n=e.component,t=Object(o.a)(e,["component"]);return i.a.createElement(c.b,Object.assign({},t,{render:function(e){return Object(u.c)()&&"client"===Object(u.c)().role?i.a.createElement(n,e):i.a.createElement(c.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}}}]);
//# sourceMappingURL=20.e77e64a2.chunk.js.map