(function(t){function e(e){for(var n,u,c=e[0],i=e[1],a=e[2],f=0,p=[];f<c.length;f++)u=c[f],o[u]&&p.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,a||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},s=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"33a8":function(t,e,r){"use strict";var n=r("f6d3"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("Super Quiz")]),r("transition",{attrs:{name:"flip",mode:"out-in"}},[t.questionMode?r("Question",{attrs:{question:t.questions[t.currentQuestion]},on:{answered:t.showResult}}):r("Result",{attrs:{result:t.result},on:{confirmed:t.nextQuestion}})],1)],1)},s=[],u=[{text:"Qual é o coletivo de cães?",answers:[{text:"MATILHA",correct:!0},{text:"REBANHO",correct:!1},{text:"CARDUME",correct:!1},{text:"MANADA",correct:!1}]},{text:"Qual é a maior floresta do planeta?",answers:[{text:"NEGRA",correct:!1},{text:"DE SHERWOOD",correct:!1},{text:"DA TIJUCA",correct:!1},{text:"AMAZÔNICA",correct:!0}]},{text:"Quem é o primeiro substituto do Presidente?",answers:[{text:"VEREADOR",correct:!1},{text:"VICE-PRESIDENTE",correct:!0},{text:"SENADOR",correct:!1},{text:"DEPUTADO",correct:!1}]},{text:"Segundo o romance, que animal era “Moby Dick”?",answers:[{text:"TUBARÃO",correct:!1},{text:"GOLFINHO",correct:!1},{text:"POLVO",correct:!1},{text:"BALEIA",correct:!0}]},{text:"Que animal é o Pateta?",answers:[{text:"CAVALO",correct:!1},{text:"BURRO",correct:!1},{text:"CACHORRO",correct:!0},{text:"RAPOSA",correct:!1}]},{text:"Qual destes personagens não veste uma capa?",answers:[{text:"SUPER-HOMEM",correct:!1},{text:"BATMAN",correct:!1},{text:"WOLVERINE",correct:!0},{text:"ZORRO",correct:!1}]}],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"question"},[r("span",[t._v(t._s(t.question.text))]),r("ul",{staticClass:"answers"},t._l(t.question.answers,function(e,n){return r("li",{key:e.text,on:{click:function(r){t.$emit("answered",e.correct)}}},[r("span",{staticClass:"number"},[t._v(t._s(n+1))]),r("span",{staticClass:"text"},[t._v(t._s(e.text))])])}))])},i=[],a={props:{question:{type:Object,required:!0}}},l=a,f=(r("33a8"),r("2877")),p=Object(f["a"])(l,c,i,!1,null,null,null);p.options.__file="Question.vue";var d=p.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"result",class:{wrong:!t.result}},[t.result?r("span",[t._v("Resposta Certa! :)")]):r("span",[t._v("Resposta Errada! :(")]),r("hr"),r("button",{on:{click:function(e){t.$emit("confirmed")}}},[t._v("Próxima Pergunta")])])},v=[],O={props:{result:{type:Boolean,required:!0}}},h=O,_=(r("d7c3"),Object(f["a"])(h,x,v,!1,null,null,null));_.options.__file="Result.vue";var m=_.exports,A={components:{Question:d,Result:m},data:function(){return{result:!1,questionMode:!0,questions:u,currentQuestion:0}},methods:{showResult:function(t){this.result=t,this.questionMode=!1},nextQuestion:function(){var t=Math.random()*this.questions.length;this.currentQuestion=parseInt(t),this.questionMode=!0}}},b=A,R=(r("034f"),Object(f["a"])(b,o,s,!1,null,null,null));R.options.__file="App.vue";var w=R.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,r){},d7c3:function(t,e,r){"use strict";var n=r("fe61"),o=r.n(n);o.a},f6d3:function(t,e,r){},fe61:function(t,e,r){}});
//# sourceMappingURL=app.e3b73f7b.js.map