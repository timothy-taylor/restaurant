(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),d=t.n(c),s=new URL(t(66),t.b),l=i()(a()),p=d()(s);l.push([e.id,"body {\n    font-family: 'Overpass', sans-serif;\n    font-size: 100%;\n    color: whitesmoke;\n    background: url("+p+");\n    display: flex;\n    justify-content: center;\n}\n\n#container {\n    width: 100%;\n}\n\n@media only screen and (min-width: 992px) {\n    #container {\n        width: 80%;\n    }\n}\n\nbutton {\n    background: rgba(63,63,63,0.0);\n    padding: 12px;\n    border-style: none;\n    color: whitesmoke;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-size: 1em;\n}\n\nbutton:hover, button:focus {\n    background: rgba(63,63,63,0.8);\n    text-decoration: underline;\n}\n\nheader {\n    background: rgba(63,63,63,0.6);\n    text-align: center;\n}\n\n\nnav, footer {\n    background: rgba(63,63,63,0.5);\n    text-align: center;\n}\n\nmain p {\n    background: rgba(63,63,63,0.8);\n    text-align: justify;\n    font-weight: 100;\n    padding: 12px;\n}\n\n@media only screen and (min-width: 992px) {\n    main p {\n        padding: 64px 42px;\n    }\n}\n\nheader h1 {\n    font-family: 'Special Elite', cursive;\n    padding-top: 64px;\n}\n\nheader h2 {\n   padding-bottom: 64px;\n}\n\n\nfooter {\n    font-weight: 100;\n}\n\nnav ul {\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    padding-left: 0;\n}\n\n@media only screen and (min-width: 600px) {\n    nav ul {\n        flex-direction: row;\n        justify-content: space-around;\n    }\n}\n\n.content {\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgba(63,63,63,0.5); \n}\n\ntable {\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n}\n\nth {\n    font-size: 1.5em;\n    height: 3em;\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},66:(e,n,t)=>{e.exports=t.p+"d800b2175749d57a1f1b.jpeg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{const e=()=>{const e=document.createElement("P");return e.innerHTML="New Haven-style pizza is a style of thin-crust, coal-fired Neapolitan pizza common in and around New Haven, Connecticut. Locally known as apizza from Neapolitan ’a pizza, 'the pizza'), it originated at the Frank Pepe Pizzeria Napoletana and is now served in many other pizza restaurants in the area, most notably Sally's Apizza and Modern Apizza. This geographically limited pizza style has been favorably regarded by national critics.",e};var n=t(379),r=t.n(n),a=t(795),o=t.n(a),i=t(569),c=t.n(i),d=t(565),s=t.n(d),l=t(216),p=t.n(l),u=t(589),m=t.n(u),f=t(426),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,(()=>{const e=document.getElementById("container"),n=document.createElement("MAIN");n.id="content",e.appendChild((()=>{const e=document.createElement("NAV"),n=document.createElement("UL");return["Home","Menu","Contact","Reviews"].forEach((e=>{const t=document.createElement("LI"),r=document.createElement("BUTTON"),a=document.createTextNode(e);r.appendChild(a),r.id=e.toLowerCase(),t.appendChild(r),n.appendChild(t)})),e.appendChild(n),e})()),e.appendChild((()=>{const e=document.createElement("HEADER"),n=document.createElement("H1");n.innerHTML="Maplewood Pizza";const t=document.createElement("H2");return t.innerHTML="East-coast inspired, wood-fired pizza",e.appendChild(n),e.appendChild(t),e})()),e.appendChild(n),e.appendChild((()=>{const e=document.createElement("FOOTER"),n=document.createElement("DIV");return n.innerHTML="2021 Pizza",e.appendChild(n),e})())})();const g=document.getElementById("content");g.appendChild(e());const v=e=>{e.firstChild.remove()};document.getElementById("home").onclick=()=>{v(g),g.appendChild(e())},document.getElementById("menu").onclick=()=>{v(g),g.appendChild((()=>{const e=document.createElement("P"),n=document.createElement("TABLE"),t=document.createElement("TR"),r=document.createElement("TH");return r.innerHTML="Menu",t.appendChild(r),n.appendChild(t),[["House salad","8.99"],["Caesar salad","10.99"],["Soup of the day","6.99"],["Garlic bread","7.99"],["Arancini","8.99"],["Mozzarella sticks","8.99"],["Cheese pizza","14.99"],["Pepperoni pizza","16.99"],["Veggie pizza","18.99"],["Meatlovers' pizza","20.99"],["White pie with broccoli","17.99"]].forEach((e=>{const t=document.createElement("TR"),r=document.createElement("TD"),a=document.createElement("TD");r.innerHTML=e[0],a.innerHTML=e[1],t.appendChild(r),t.appendChild(a),n.appendChild(t)})),e.appendChild(n),e})())},document.getElementById("contact").onclick=()=>{v(g),g.appendChild((()=>{const e=document.createElement("P");return e.innerHTML="Give us a call",e})())},document.getElementById("reviews").onclick=()=>{v(g),g.appendChild((()=>{const e=document.createElement("P");return e.innerHTML="Some rave reviews!",e})())}})()})();