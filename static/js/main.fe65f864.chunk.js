(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{40:function(e,t,a){e.exports=a(52)},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),m=a(28),u=a(10),o=a(72),i=a(30),s=a.n(i),E=a(24),d=a.n(E),b=a(71),f=a(34),v=a.n(f),O=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todo_divv"},l.a.createElement("span",{onClick:function(){r(!0)}},l.a.createElement(d.a,{className:"dlticon"})),l.a.createElement("li",{style:{textDecoration:c?"red line-through":"none"}},e.arrList)))},j=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(u.a)(r,2),E=i[0],f=i[1],j=Object(n.useState)(0),N=Object(u.a)(j,2),h=N[0],p=N[1],g=new Date,_=g.toLocaleDateString(),k=g.getDate(),S=g.getMonth(),C=g.getFullYear(),w=Object(n.useState)(k),y=Object(u.a)(w,2),D=y[0],I=y[1],L=Object(n.useState)(S+1),x=Object(u.a)(L,2),F=x[0],T=x[1],A=Object(n.useState)(C),J=Object(u.a)(A,2),B=J[0],M=J[1],Y=Object(n.useState)(""),q=Object(u.a)(Y,2),z=q[0],G=q[1],H=Object(n.useState)([]),K=Object(u.a)(H,2),P=K[0],Q=K[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_div"},l.a.createElement(v.a,null),";",l.a.createElement("div",{className:"center_div"},l.a.createElement("br",null),l.a.createElement("h1",null," Todo List "),l.a.createElement("br",null),l.a.createElement("div",{className:"two_div"},l.a.createElement("input",{type:"text",placeholder:"Add a Iteam",onChange:function(e){c(e.target.value)},value:a}),l.a.createElement("button",{onClick:function(){f(""===a?function(e){return Object(m.a)(e)}:function(e){return[].concat(Object(m.a)(e),[a])}),c("")},className:"add_button"}," + ")),l.a.createElement("br",null),l.a.createElement("ol",{className:"style_todo"},E.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todo_list"},l.a.createElement("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){!function(e){f((function(t){return t.filter((function(t,a){return e!==a}))}))}(t)}}),l.a.createElement("li",null," ",e," ")))})))),l.a.createElement("div",{className:"new_div"},l.a.createElement("h2",{className:"num"}," ",h," "),l.a.createElement("br",null),l.a.createElement("button",{className:"increment",onClick:function(){p(h+1)}}," Increment "),l.a.createElement("button",{className:"increment",onClick:function(){if(p(h-1),0===h)return p(0),alert("The number below 0 can not be fetched")}}," Decrement "),l.a.createElement("h2",{className:"num"}," ",D," / ",F," / ",B," "),l.a.createElement("br",null),l.a.createElement(b.a,{title:"Add"},l.a.createElement(o.a,{className:"addbutton",onClick:function(){D>=1&&D<31?I(D+1):31===D&&F>=1&&F<12?(I(1),T(F+1)):12===F&&31===D?(I(1),T(1),M(B+1)):I(_)}},l.a.createElement(s.a,null))),l.a.createElement(b.a,{title:"Delete"},l.a.createElement(o.a,{className:"deletebutton",onClick:function(){D>1&&D<=31?I(D-1):1===D&&F>1&&F<12?(I(31),T(F-1)):1===D&&1===F?(I(31),T(12),M(B-1)):I(_)}},l.a.createElement(d.a,null)))),l.a.createElement("div",{className:"center_div"},l.a.createElement("br",null),l.a.createElement("h3",null," TODO LIST "),l.a.createElement("br",null),l.a.createElement("div",{className:"two_div"},l.a.createElement("input",{type:"text",placeholder:"Add a Iteam",onChange:function(e){var t=e.target.value;G(t)},value:z}),l.a.createElement("button",{className:"add_button",onClick:function(){Q((function(e){return[].concat(Object(m.a)(e),[z])})),G("")}},l.a.createElement(s.a,null))),l.a.createElement("br",null),l.a.createElement("ol",{className:"style_todo"},P.map((function(e,t){return l.a.createElement(O,{arrList:e,key:t})}))))))};a(51);r.a.render(l.a.createElement(j,null," "),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.fe65f864.chunk.js.map