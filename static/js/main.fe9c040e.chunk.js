(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],{13:function(e,a,n){e.exports=n(24)},18:function(e,a,n){},19:function(e,a,n){},24:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(10),c=n.n(r),i=(n(18),n(5)),u=(n(19),n(26)),o=n(27),m=n(28),E=n(12),s=n(30),f=n(29);var v=function(){return[function(e,a,n){var t;switch(n){case"+":t=e+a;break;case"-":t=e-a;break;case"/":t=e/a;break;case"*":t=e*a;break;default:t=0}return t},function(e,a){return"0"!==e&&null!==e||(e=""),"."===a&&""===e?"0.":"."===a&&e.indexOf(".")>-1?e:e+a},"+","-","/","*"]};var g=function(){var e=v(),a=Object(i.a)(e,6),n=a[0],r=a[1],c=a[2],g=a[3],k=a[4],h=a[5],d=Object(t.useState)("0"),C=Object(i.a)(d,2),b=C[0],p=C[1],w=Object(t.useState)("0"),O=Object(i.a)(w,2),x=O[0],j=O[1],y=Object(t.useState)(null),S=Object(i.a)(y,2),F=S[0],B=S[1],J=Object(t.useState)(null),N=Object(i.a)(J,2),W=N[0],I=N[1];function $(e){var a;null===W?(a=r(x,e),j(a)):(a=r(F,e),B(a)),p(a)}function q(e){if(null!==W){if(null!==F){var a=n(parseFloat(x),parseFloat(F),W);I(e),j(a.toString()),B(null),p(a.toString())}}else I(e)}return l.a.createElement("div",null,l.a.createElement("h1",{name:"nome"},"Calculadora"),l.a.createElement(u.a,{style:{background:"transparent !important",backgroundColor:"#101321",padding:"5px",margin:"5px",width:"400px"}},l.a.createElement(o.a,null,l.a.createElement(m.a,null,l.a.createElement(E.a,{xs:"3"},l.a.createElement(s.a,{variant:"danger",onClick:function(){p("0"),j("0"),B(null),I(null)}},"C")),l.a.createElement(E.a,{xs:"9"},l.a.createElement(f.a.Control,{type:"text",name:"txtNumeros",className:"text-right",readOnly:"readonly",value:b}))),l.a.createElement(m.a,null,l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("7")}},"7")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("8")}},"8")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("9")}},"9")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"warning",onClick:function(){return q(k)}},"/"))),l.a.createElement(m.a,null,l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("4")}},"4")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("5")}},"5")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("6")}},"6")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"warning",onClick:function(){return q(h)}},"*"))),l.a.createElement(m.a,null,l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("1")}},"1")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("2")}},"2")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("3")}},"3")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"warning",onClick:function(){return q(g)}},"-"))),l.a.createElement(m.a,null,l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $("0")}},"0")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"light",onClick:function(){return $(".")}},".")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"success",onClick:function(){if(null!==F){var e=n(parseFloat(x),parseFloat(F),W);p(e)}}},"=")),l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"warning",onClick:function(){return q(c)}},"+"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.fe9c040e.chunk.js.map