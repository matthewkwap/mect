(this["webpackJsonpmy-ap"]=this["webpackJsonpmy-ap"]||[]).push([[0],{21:function(f,e,t){f.exports=t(46)},45:function(f,e,t){},46:function(f,e,t){"use strict";t.r(e);var h=t(0),n=t.n(h),a=t(20),o=t.n(a),c=t(5),r=t(6),g=t(9),l=t(8),s=t(7),i=t(1),d=t.n(i),u=t(3),m=t(4),p=function(){var f=Object(h.useState)(""),e=Object(m.a)(f,2),t=e[0],a=e[1],o=function(){var f=Object(u.a)(d.a.mark((function f(e){var h,n,a;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(e.preventDefault(),0!=t.length){f.next=5;break}console.log("hello"),f.next=19;break;case 5:return f.prev=5,h=new Date,n=h.getHours()+":"+h.getMinutes()+":"+h.getSeconds(),a={info:{descript:t,Time:n}},f.next=12,fetch("https://ntodo.herokuapp.com/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 12:f.sent,window.location="/mect",f.next=19;break;case 16:f.prev=16,f.t0=f.catch(5),console.log(f.t0.message);case 19:case"end":return f.stop()}}),f,null,[[5,16]])})));return function(e){return f.apply(this,arguments)}}();return n.a.createElement(h.Fragment,null,n.a.createElement("h1",null,"pern todo list"),n.a.createElement("form",{onSubmit:o},n.a.createElement("textarea",{id:"text",type:"text",value:t,onChange:function(f){0!=f.target.value.length&&a(f.target.value)}}),n.a.createElement("button",{type:"submit",id:"addd"},"Add")))},b=t(10),v=function(f){var e,t=f.todo,a=Object(h.useState)(t.description),o=Object(m.a)(a,2),c=o[0],r=o[1],g=Object(h.useState)("none"),l=Object(m.a)(g,2),s=l[0],i=l[1],p=function(){var f=Object(u.a)(d.a.mark((function f(e){var t;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return t={des:c,idous:e},console.log(JSON.stringify("".concat(t))),f.prev=2,c,f.next=6,fetch("https://ntodo.herokuapp.com/todos/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 6:f.sent,window.location="/",f.next=13;break;case 10:f.prev=10,f.t0=f.catch(2),console.error(f.t0.message);case 13:case"end":return f.stop()}}),f,null,[[2,10]])})));return function(e){return f.apply(this,arguments)}}();return n.a.createElement(h.Fragment,null,n.a.createElement("button",{type:"button",id:"edittodo",class:"btn ","data-toggle":"model","data-target":"".concat(t.todo_id),onClick:function(){i("block")}},"Edit"),n.a.createElement("div",{class:"animate",id:"add2",onClick:function(){return r(t.description)},style:{display:s}},n.a.createElement("div",{class:"modal-dialog"},n.a.createElement("button",(e={type:"button",class:"close","data-dismiss":"modal",id:"deletebtn"},Object(b.a)(e,"data-dismiss","modal"),Object(b.a)(e,"onClick",(function(){r(t.description),i("none")})),e),"\xd7")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("input",{type:"text",className:"form-control",id:"tex",value:c,onChange:function(f){r(f.target.value)}})),n.a.createElement("div",{class:"modal-footer"},n.a.createElement("button",{className:"btn btn-danger",id:"deletebtn",onClick:function(){return p(t.todo_id)}},"edit"))))},E=function(){var f=Object(h.useState)([]),e=Object(m.a)(f,2),t=e[0],a=e[1],o=function(){var f=Object(u.a)(d.a.mark((function f(e){return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,fetch("https://ntodo.herokuapp.com/todos/".concat(e),{headers:{"Content-Type":"application/json"},url:"https://localhost:44346/Order/Order/GiveOrder",method:"DELETE"});case 3:f.sent,a(t.filter((function(f){return f.todo_id!==e}))),f.next=10;break;case 7:f.prev=7,f.t0=f.catch(0),console.error(f.t0.message);case 10:case"end":return f.stop()}}),f,null,[[0,7]])})));return function(e){return f.apply(this,arguments)}}(),c=function(){var f=Object(u.a)(d.a.mark((function f(){var e,t;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,fetch("https://ntodo.herokuapp.com/todos");case 3:return e=f.sent,f.next=6,e.json();case 6:t=f.sent,a(t),f.next=13;break;case 10:f.prev=10,f.t0=f.catch(0),console.error(f.t0.message);case 13:case"end":return f.stop()}}),f,null,[[0,10]])})));return function(){return f.apply(this,arguments)}}();return Object(h.useEffect)((function(){c()}),[]),console.log(t),n.a.createElement(h.Fragment,null," ",n.a.createElement("div",{className:"table"},t.map((function(f){return n.a.createElement("div",{key:f.todo_id,id:"tabl"},n.a.createElement("div",null,n.a.createElement(v,{todo:f})),n.a.createElement("h1",{id:"h11"},f.description),n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-danger",onClick:function(){return o(f.todo_id)},id:"deletebtn"},"Delete")))}))))},k=(t(27),n.a.Component,n.a.Component,t(45),function(f){Object(l.a)(t,f);var e=Object(s.a)(t);function t(f){var h;return Object(c.a)(this,t),(h=e.call(this,f)).validator=function(f){h.setState({count:h.state.count+1}),localStorage.setItem("rememberme",h.state.rememberMe)},h.onc=function(f){h.setState({s:f.target.value})},h.change=function(f){f.preventDefault(),"block"==h.state.e?h.setState({e:"none",le:"250px"}):h.setState({le:"250px"})},h.cha=function(f){f.preventDefault(),h.setState({le:"0px"})},h.add=function(){"250px"==h.state.le?h.setState({le:"0px",e:"block"}):h.setState({e:"block"})},h.ch=function(){h.setState({e:"none"})},h.state={count:0,le:"0px",sd:!1,items:[],text:"",e:"none",s:"",gi:[]},h.add=h.add.bind(Object(g.a)(h)),h}return Object(r.a)(t,[{key:"render",value:function(){var f=this.state,e=f.le,t=f.e;f.s;return n.a.createElement("div",null,n.a.createElement("div",{id:"modal",className:"animate",style:{width:e}},n.a.createElement("button",{onClick:this.cha,id:"sideclose"},"\xd7"),n.a.createElement("a",{href:"#"},"About"),n.a.createElement("a",{href:"#"},"Services"),n.a.createElement("a",{href:"#"},"Clients"),n.a.createElement("a",{href:"#"},"Contact")),n.a.createElement(p,null),n.a.createElement("div",{id:"add",className:"animat",style:{display:t}},n.a.createElement("div",{id:"closeadd"}," ",n.a.createElement("button",{onClick:this.ch,id:"addclose"},"+")),"ggggggggggggggggggggggggg] g gggggggggggggggggggggggg ggggggggggggggggggggggggg ggggggggggggggggggggggggggg gggggggggggggggggggggggggggg ggggggggggggggggggggggggggggggggg ggggggggfffffffffff ffffffffffffffffffff fffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ffffffffffffffffffff fffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ffffffffffffffffffff fffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ffffffffffffffffffff fffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"),n.a.createElement(E,null),n.a.createElement("form",null),n.a.createElement("button",{onClick:this.add,id:"a"}," +"),n.a.createElement("button",{onClick:this.change,id:"closebtn"},"\u2630"),n.a.createElement("div",{style:{display:e}}))}}]),t}(n.a.Component));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.95d94c6a.chunk.js.map
