!function e(t,n,r){function o(i,a){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var n=t[i][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";e("./router")},{"./router":3}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(){r(this,e)}return o(e,[{key:"getNid",value:function(e){this.node=this.get("https://service.nanosmid.nl/node/"+e+"?_format=api_json")}},{key:"get",value:function(e){var t=this;fetch(e).then(this.status).then(this.json).then(function(e){return t.showNid(e)}).catch(function(e){return console.log(e)})}},{key:"status",value:function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error("Looks like there was a problem. Status Code: "+e.status))}},{key:"json",value:function(e){return e.json()}},{key:"showNid",value:function(e){var t=document.createElement("h1"),n=document.createTextNode(e.attributes.title),r=document.createTextNode(e.attributes.body.value);t.appendChild(n),document.getElementById("content").innerHTML="",document.getElementById("content").appendChild(t),document.getElementById("content").appendChild(r)}}]),e}();n.drupal=new u},{}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("./drupal"),i=function(){function e(){var t=this;r(this,e);var n=[];this.root="/",this.add=function(e,t){var r={nid:t,route:e};n.push(r)},this.getRoutes=function(){return n},this.scan(),this.loadCurrent(),window.addEventListener("popstate",function(e){return t.loadCurrent()})}return o(e,[{key:"loadCurrent",value:function(){var e=this.check(location.pathname);e!==!1&&this.navigate(e)}},{key:"check",value:function(e){for(var e=this.clearSlashes(e),t=this.getRoutes(),n=0;n<t.length;n++)if(t[n].route==e)return t[n];return!1}},{key:"scan",value:function(){for(var e=this,t=document.querySelectorAll("[data-nanorouter]"),n=function(){var n=e.clearSlashes(t[r].getAttribute("href")),o=t[r].getAttribute("data-nanorouter");e.add(n,o),t[r].addEventListener("click",function(t){return e.click(t,n)})},r=0;r<t.length;r++)n()}},{key:"clearSlashes",value:function(e){return e.toString().replace(/\/$/,"").replace(/^\//,"")}},{key:"click",value:function(e,t){var n=this.check(t);n!==!1&&(this.navigate(n),history.pushState(null,null,this.root+n.route),e.preventDefault())}},{key:"navigate",value:function(e){e.nid?u.drupal.getNid(e.nid):console.log("I do not recognize this route")}}]),e}();n.router=new i},{"./drupal":2}]},{},[1]);