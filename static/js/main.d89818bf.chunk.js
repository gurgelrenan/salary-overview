(this["webpackJsonpnomes-brasil"]=this["webpackJsonpnomes-brasil"]||[]).push([[0],{21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(14),s=n.n(a),o=(n(21),n(5)),i=n.n(o),u=n(15),l=n(3),d=n(16),j=n.n(d),b=n(0),p=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({nome:"",sexo:null,localidade:"",res:[]}),s=Object(l.a)(a,2),o=s[0],d=s[1],p=Object(r.useState)(""),h=Object(l.a)(p,2),x=h[0],O=h[1],f=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,j()("https://servicodados.ibge.gov.br/api/v2/censos/nomes/".concat(n));case 5:t=e.sent,Array.isArray(t.data)&&t.data.length?d(t.data[0]):(O("N\xe3o existe resultados para o nome: ".concat(n)),d({nome:"",sexo:null,localidade:"",res:[]})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("error:",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Nomes do Brasil"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:x}),Object(b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),f()}(e)},children:[Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Digite o nome",value:n,onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("input",{type:"submit",value:"Buscar"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Localidade: ",o.localidade]}),Object(b.jsxs)("p",{children:["Nome: ",o.nome]}),o.res.map((function(e){var t=e.periodo,n=e.frequencia;return Object(b.jsxs)("p",{children:[t," - ",n]})}))]})]})},h=function(){return Object(b.jsx)(p,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),x()}},[[42,1,2]]]);
//# sourceMappingURL=main.d89818bf.chunk.js.map