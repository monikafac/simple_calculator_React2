(this.webpackJsonpcalculator2=this.webpackJsonpcalculator2||[]).push([[0],[,function(e,t,a){e.exports={wrapper:"App_wrapper__2NpHS",listItemWrapper:"App_listItemWrapper__3ejKa",listActionWrapper:"App_listActionWrapper__I8ZQN",calculateReset:"App_calculateReset__3l94e",calculateButton:"App_calculateButton__1ugQj",cButton:"App_cButton__1CR4F",scoreWrapper:"App_scoreWrapper__trCAq"}},,,,,,function(e,t,a){e.exports={listItem:"Item_listItem__aPZhX"}},function(e,t,a){e.exports={listAction:"Actions_listAction__Faq5o"}},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),c=(a(16),a(4)),u=a(5),o=a(9),i=a(6),m=a(10),p=a(1),_=a.n(p),v=a(7),b=a.n(v),d=function(e){var t=e.value,a=e.submitFn;return r.a.createElement("button",{onClick:a,value:t,className:b.a.listItem},t)},h=a(8),f=a.n(h),E=function(e){var t=e.value,a=e.submitFn;return r.a.createElement("button",{onClick:a,value:t,className:f.a.listAction},t)},I=[{value:0},{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9}],N=[{value:"+"},{value:"-"},{value:"*"},{value:"/"}],A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={a_number:"",b_number:"",to_do:"",score:""},a.handleClick=function(e){e.preventDefault(),""===a.state.a_number&&""===a.state.b_number?a.setState({a_number:e.target.value}):""!==a.state.a_number&&""===a.state.b_number&&a.setState({b_number:e.target.value})},a.handleAction=function(e){e.preventDefault(),a.setState({to_do:e.target.value})},a.handleReset=function(e){e.preventDefault(),a.setState({a_number:"",b_number:"",to_do:"",score:""})},a.handleCalculate=function(e){e.preventDefault(),"+"===a.state.to_do?a.setState({score:parseInt(a.state.a_number)+parseInt(a.state.b_number)}):"-"===a.state.to_do?a.setState({score:parseInt(a.state.a_number)-parseInt(a.state.b_number)}):"*"===a.state.to_do?a.setState({score:parseInt(a.state.a_number)*parseInt(a.state.b_number)}):"/"===a.state.to_do&&a.setState({score:parseInt(a.state.a_number)/parseInt(a.state.b_number)})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("div",{className:_.a.listItemWrapper},I.map((function(t){var a=t.value;return r.a.createElement(d,{key:a,value:a,submitFn:e.handleClick,className:_.a.listItem})}))),r.a.createElement("div",{className:_.a.listActionWrapper},N.map((function(t){var a=t.value;return r.a.createElement(E,{key:a,value:a,submitFn:e.handleAction})}))),r.a.createElement("div",{className:_.a.calculateReset},r.a.createElement("button",{onClick:this.handleCalculate,className:_.a.calculateButton},"="),r.a.createElement("button",{onClick:this.handleReset,className:_.a.cButton},"C")),r.a.createElement("div",{className:_.a.scoreWrapper},r.a.createElement("div",null,r.a.createElement("p",{className:_.a.firstNumber},"Pierwsza liczba to: ",this.state.a_number)),r.a.createElement("div",null,r.a.createElement("p",{className:_.a.secondNumber},"Druga liczba to: ",this.state.b_number)),r.a.createElement("div",null,r.a.createElement("p",{className:_.a.action},"Dzia\u0142anie to:  ",this.state.to_do)),r.a.createElement("div",null,r.a.createElement("p",{className:_.a.score},"WYNIK:  ",this.state.score))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.5fb3d0eb.chunk.js.map