(function(e){function t(t){for(var o,a,u=t[0],l=t[1],i=t[2],f=0,s=[];f<u.length;f++)a=u[f],r[a]&&s.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(s.length)s.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-form",[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{ref:"text",attrs:{label:"Texto Completo","append-icon":"content_copy"},on:{"click:append":function(t){return e.copy("text")}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{ref:"key",attrs:{label:"Key text","append-icon":"content_copy"},on:{"click:append":function(t){return e.copy("key")}},model:{value:e.keytext,callback:function(t){e.keytext=t},expression:"keytext"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{ref:"complete",attrs:{label:"Complete Text","append-icon":"content_copy"},on:{"click:append":function(t){return e.copy("complete")}},model:{value:e.complete,callback:function(t){e.complete=t},expression:"complete"}})],1)],1)],1)],1)],1)},c=[],a=(n("a481"),{name:"app",data:function(){return{text:""}},methods:{copy:function(e){var t=this.$refs[e];t.focus(),document.execCommand("selectAll"),this.copied=document.execCommand("copy")}},computed:{keytext:function(){return this.text.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ /g,"_").toLowerCase()},complete:function(){return"".concat(this.keytext,": '").concat(this.text,"',")}}}),u=a,l=(n("034f"),n("2877")),i=Object(l["a"])(u,r,c,!1,null,null,null),p=i.exports,f=n("ce5b"),s=n.n(f);n("bf40");o["default"].use(s.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(p)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.70f0a839.js.map