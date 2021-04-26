(function(e){function t(t){for(var s,i,o=t[0],u=t[1],c=t[2],f=0,h=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},a=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("5f5b"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("b-container",{staticStyle:{"max-width":"570px"},attrs:{align:"center",fluid:"sm"}},[n("h1",[e._v("Who's that Pokémon? 🤔")]),n("small",[e._v("All images © Nintendo")]),n("b-form-checkbox-group",{staticClass:"py-2",attrs:{state:e.state},model:{value:e.chosenGens,callback:function(t){e.chosenGens=t},expression:"chosenGens"}},[n("b-row",{attrs:{"align-h":"center"}},e._l(e.options,(function(t){return n("b-col",{key:t.id,staticClass:"px-0",attrs:{cols:"4",sm:"3"}},[n("b-form-checkbox",{attrs:{value:t.value,disabled:e.isDisabled(t)}},[e._v(" "+e._s(t.text)+" ")])],1)})),1),n("b-form-invalid-feedback",{attrs:{state:e.state}},[e._v("Please select at least 1")])],1),n("div",{staticClass:"py-2"},[0===e.streak?n("p",[e._v("Streak : ❌")]):1===e.streak?n("p",[e._v("Streak : 🔥")]):n("p",[e._v("Streak : "+e._s(e.streak)+" 🔥")])]),""!==e.imgSrc?n("b-img",{staticClass:"my-3",attrs:{src:e.imgSrc}}):n("p",[e._v("WHERE IS IMAGE")]),n("b-form-input",{ref:"pokeguess",staticClass:"my-2",attrs:{id:"input",placeholder:"Type the name"},model:{value:e.guess,callback:function(t){e.guess=t},expression:"guess"}}),n("b-button",{staticClass:"my-2",on:{click:e.fetchPokemon}},[e._v("New Pokémon")]),e.guessedRight?n("p",[e._v("You did it!")]):e._e(),e.failed?n("p",[e._v("Not in time...")]):e._e()],1)],1)},i=[],o=n("1da1"),u=n("b85c"),c=(n("96cf"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),{name:"App",data:function(){return{chosenGens:["gen1","gen2","gen3","gen4","gen5","gen6","gen7","gen8"],options:[{id:0,text:"Gen 1",value:"gen1"},{id:1,text:"Gen 2",value:"gen2"},{id:2,text:"Gen 3",value:"gen3"},{id:3,text:"Gen 4",value:"gen4"},{id:4,text:"Gen 5",value:"gen5"},{id:5,text:"Gen 6",value:"gen6"},{id:6,text:"Gen 7",value:"gen7"},{id:7,text:"Gen 8",value:"gen8"}],guess:"",pokeid:null,obf:null,pokenames:null,filenames:null,startTime:null,streak:0,userGuessedRight:!1}},computed:{state:function(){return this.chosenGens.length>0},fetchLink:function(){var e,t="http://localhost:3000/pokemon/",n=Object(u["a"])(this.chosenGens);try{for(n.s();!(e=n.n()).done;){var s=e.value;t+=s+"&"}}catch(r){n.e(r)}finally{n.f()}return t},imgSrc:function(){var e=this.obf<9?"filename"+this.obf:"filename";return this.filenames?"http://localhost:3000/"+this.filenames[e]:""},guessedRight:function(){return!!this.pokenames&&this.pokenames.has(this.guess.toLowerCase())},failed:function(){return this.obf>=9&&!this.guessedRight}},watch:{chosenGens:function(){this.fetchPokemon()},guessedRight:function(){this.guessedRight&&(this.failed||this.streak++,this.obf=9)},failed:function(){this.streak=0}},methods:{isDisabled:function(e){return 1===this.chosenGens.length&&this.chosenGens[0]===e.value},fetchPokemon:regeneratorRuntime.mark((function e(){var t,n,s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$refs.pokeguess.$el.focus(),this.obf=1,this.guess="",e.next=5,fetch(this.fetchLink);case 5:if(t=e.sent,t.ok){e.next=9;break}throw n=new Error(s.message||"Failed to fetch!"),n;case 9:return e.next=11,t.json();case 11:for(r in s=e.sent,this.pokenames=new Set,s["pokenames"])this.pokenames.add(s["pokenames"][r].toLowerCase());for(a in this.filenames={},s["filenames"])this.filenames[a]=s["filenames"][a];case 16:if(!(this.obf<10)){e.next=23;break}if(this.obf++,!(this.obf<9)){e.next=21;break}return e.next=21,new Promise((function(e){return setTimeout(e,2e3)}));case 21:e.next=16;break;case 23:case"end":return e.stop()}}),e,this)})),makeSingle:function(e){var t;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s,r,a,i,o=arguments;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=t=new Object,r=e.apply(void 0,o);case 2:if(i=r.next(a),!i.done){n.next=5;break}return n.abrupt("return",i.value);case 5:return n.next=7,i.value;case 7:if(a=n.sent,s===t){n.next=10;break}return n.abrupt("return");case 10:n.next=2;break;case 12:case"end":return n.stop()}}),n)})))}},mounted:function(){this.fetchPokemon=this.makeSingle(this.fetchPokemon),this.fetchPokemon()}}),l=c,f=(n("034f"),n("2877")),h=Object(f["a"])(l,a,i,!1,null,null,null),p=h.exports;n("f9e3"),n("2dd8");s["default"].use(r["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.f482e40a.js.map