(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/wallet.fea8b2be.png"},34:function(e,t,a){e.exports=a.p+"static/media/walletWhite.4d2397ea.svg"},38:function(e,t,a){e.exports=a(59)},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=a(22),o=(a(43),a(5)),s=a(3),u=a(17),m=a(9),d=a(10),p=a(14),h=a(12),E=a(11),v=a(15),b=a.n(v),f=a(18),g=function(){var e=Object(f.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://economia.awesomeapi.com.br/json/all",e.next=3,fetch("https://economia.awesomeapi.com.br/json/all");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){return{type:"GET_CURRENCIES",currencies:e}},x=a(33),j=a.n(x),N=(a(30),a(49),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={email:"",inputPassword:""},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"disabledButton",value:function(e,t){var a=/\S+@\S+\.\S+/.test(e),n=t.length>=6;return a&&n}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.inputPassword,n=this.props,c=n.getEmail,l=n.history;return r.a.createElement("div",{className:"div-form"},r.a.createElement("section",{className:"div-logo"},r.a.createElement("h1",null,"My Wallet"),r.a.createElement("img",{src:j.a,alt:"Wallet Logo"})),r.a.createElement("section",{className:"section-form"},r.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email",r.a.createElement("input",{className:"form-control",name:"email",type:"email",id:"email","data-testid":"email-input",value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"password",className:"form-label"},"Password",r.a.createElement("input",{className:"form-control",name:"inputPassword",type:"password",id:"password","data-testid":"password-input",value:a,onChange:this.handleChange})),r.a.createElement("button",{className:"btn btn-primary",type:"button",disabled:!this.disabledButton(t,a),onClick:function(){sessionStorage.setItem("email",t),c(t),l.push("/carteira")}},"Entrar")))}}]),a}(r.a.Component)),O=Object(o.b)(null,(function(e){return{getEmail:function(t){return e(function(e){return{type:"LOGIN_USER",email:e}}(t))}}}))(N),C=a(34),S=a.n(C),w=(a(50),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.expenses,t=e?e.reduce((function(e,t){var a=t.exchangeRates[t.currency].ask,n=(Number(t.value)*a).toFixed(2);return e+=Number(Number(n).toFixed(2))}),0):"";return r.a.createElement("div",{className:"container-header"},r.a.createElement("div",{className:"div-header"},r.a.createElement("section",{className:"div-logo logo"},r.a.createElement("h1",null,"My Wallet"),r.a.createElement("img",{src:S.a,alt:"Wallet Logo"})),r.a.createElement("section",{className:"section-info"},r.a.createElement("p",{"data-testid":"email-field",className:"email"},sessionStorage.getItem("email")),r.a.createElement("section",{className:"info"},r.a.createElement("p",{"data-testid":"total-field",className:"despesa"},"Total:"),r.a.createElement("p",null,"R$"),r.a.createElement("span",null,t),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL")))))}}]),a}(r.a.Component)),k=Object(o.b)((function(e){return{email:e.user.email,expenses:e.wallet.expenses}}))(w),I=(a(51),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={value:"",description:"",currency:"USD",method:"",tag:"",id:0},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleInitialState=e.handleInitialState.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.getCurrencie,e.next=3,g();case 3:a=e.sent,t(Object.keys(a));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInitialState",value:function(){this.setState((function(e){return{id:e.id+1,value:"",description:"",method:""}}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"render",value:function(){var e=this,t=this.props,a=t.getInfo,n=t.currencies,c=this.state,l=c.id,i=c.value,o=c.description,s=c.tag,u=c.currency,m=c.method;return r.a.createElement("div",{className:"div-putInfo"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("span",{html:"description",className:"input-group-text"},"Descri\xe7\xe3o"),r.a.createElement("input",{name:"description",id:"description",type:"text",value:o,onChange:this.handleChange,"data-testid":"description-input"})),r.a.createElement("div",{className:"input-group input-group-sm mb-3"},r.a.createElement("span",{html:"valor",className:"input-group-text"},"Valor"),r.a.createElement("input",{name:"value",id:"valor",type:"number","data-testid":"value-input",value:i,onChange:this.handleChange})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("span",{htmlFor:"method",className:"input-group-text"},"Pagamento"),r.a.createElement("select",{className:"form-select",name:"method",value:m,id:"method",onChange:this.handleChange,"data-testid":"method-input"},r.a.createElement("option",null," "),r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("span",{htmlFor:"tag",className:"input-group-text"},"Tag"),r.a.createElement("select",{className:"form-select",name:"tag",value:s,id:"tag",onChange:this.handleChange,"data-testid":"tag-input"},r.a.createElement("option",null," "),r.a.createElement("option",{value:"Aliment\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("label",{htmlFor:"currency",className:"label-coin"},r.a.createElement("span",{className:"input-group-text"},"Moeda"),r.a.createElement("select",{className:"form-select",name:"currency",id:"currency",value:u,onChange:this.handleChange,"data-testid":"currency-input"},n?n.map((function(e,t){return"USDT"===e||"BRLT"===e?"":r.a.createElement("option",{key:t,value:e,"data-testid":e},e)})):""))),r.a.createElement("button",{className:"btn btn-primary btn-sm",type:"button",onClick:function(){a({id:l,value:i,description:o,currency:u,method:m,tag:s}),e.handleInitialState()}},"Adicionar despesa"))}}]),a}(r.a.Component)),T=Object(o.b)((function(e){return{currencies:e.wallet.currencies}}),(function(e){return{getInfo:function(t){return e((a=t,function(e){return e({type:"REQUEST_API"}),g().then((function(t){return e(function(e,t){return{type:"CHANGE_WALLET",expense:e,exchangeRates:t}}(a,t))}),(function(t){return e(function(e){return{type:"REQUEST_FAIL",error:e}}(t.message))}))}));var a},getCurrencie:function(t){return e(y(t))}}}))(I),R=a(27),D=a(24),L=(a(54),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.expenses,a=e.deleteButton,n=e.getEditExp;return r.a.createElement("div",{className:"table-div"},r.a.createElement("table",{className:"table table-dark table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,t?t.map((function(e,t){var c=e.value,l=e.description,i=e.currency,o=e.method,s=e.tag,u=e.exchangeRates,m=Number(u[i].ask).toFixed(2),d=Number(c).toFixed(2),p=(d*u[i].ask).toFixed(2),h=u[i].name.split("/");return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,t),r.a.createElement("td",null,l),r.a.createElement("td",null,s),r.a.createElement("td",null,o),r.a.createElement("td",null,d),r.a.createElement("td",null,h[0]),r.a.createElement("td",null,m),r.a.createElement("td",null,p),r.a.createElement("td",null,"Real"),r.a.createElement("td",{className:"buttons"},r.a.createElement(R.a,{type:"button","data-testid":"edit-btn",onClick:function(){return n(e)},icon:D.a}),r.a.createElement(R.a,{type:"button","data-testid":"delete-btn",onClick:function(){return a(e)},icon:D.b})))})):"ola")))}}]),a}(r.a.Component)),_=Object(o.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{deleteButton:function(t){return e(function(e){return{type:"DELETE_EXPENSE",expense:e}}(t))},getEditExp:function(t){return e(function(e){return{type:"EDIT_EXPENSE",expense:e}}(t))}}}))(L),F=(a(55),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={value:"",description:"",currency:"USD",method:"",tag:"",exchangeRates:"",moedas:[],id:0},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleInitialState=e.handleInitialState.bind(Object(p.a)(e)),e.handleStateWithInfo=e.handleStateWithInfo.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.handleStateWithInfo(),t=this.props.getCurrencie,e.next=4,g();case 4:a=e.sent,t(Object.keys(a));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleStateWithInfo",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.editInfo,e.next=3,g();case 3:a=e.sent,this.setState({value:void 0!==t?Number(t.value):"",description:void 0!==t?t.description:"",currency:void 0!==t?t.currency:"",method:void 0!==t?t.method:"",tag:void 0!==t?t.tag:"",exchangeRates:void 0!==t?t.exchangeRates:"",moedas:void 0!==t?Object.values(a):"",id:void 0!==t?t.id:""});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInitialState",value:function(){this.setState({value:"",description:"",method:""})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"render",value:function(){var e=this,t=this.props.editedExpense,a=this.state,n=a.id,c=a.value,l=a.description,i=a.tag,o=a.currency,s=a.method,u=a.exchangeRates,m=a.moedas;return r.a.createElement("div",{className:"div-Info"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("span",{html:"description",className:"input-group-text"},"Descri\xe7\xe3o"),r.a.createElement("input",{name:"description",id:"description",type:"text",value:l,onChange:this.handleChange,"data-testid":"description-input"})),r.a.createElement("div",{className:"input-group input-group-sm mb-3"},r.a.createElement("span",{html:"valor",className:"input-group-text"},"Valor"),r.a.createElement("input",{name:"value",id:"valor",type:"number","data-testid":"value-input",value:c,onChange:this.handleChange})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("span",{htmlFor:"method",className:"input-group-text"},"Pagamento"),r.a.createElement("select",{className:"form-select",name:"method",value:s,id:"method",onChange:this.handleChange,"data-testid":"method-input"},r.a.createElement("option",null," "),r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("span",{htmlFor:"tag",className:"input-group-text"},"Tag"),r.a.createElement("select",{className:"form-select",name:"tag",value:i,id:"tag",onChange:this.handleChange,"data-testid":"tag-input"},r.a.createElement("option",null," "),r.a.createElement("option",{value:"Aliment\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("label",{htmlFor:"currency",className:"label-coin"},r.a.createElement("span",{className:"input-group-text"},"Moeda"),r.a.createElement("select",{className:"form-select",name:"currency",id:"currency",value:o,onChange:this.handleChange,"data-testid":"currency-input"},m?m.map((function(e,t){return"USDT"===e.code||"BRLT"===e.codein?"":r.a.createElement("option",{key:t,value:e.code,"data-testid":e.code},e.code)})):""))),r.a.createElement("button",{className:"btn btn-primary btn-sm",type:"button",onClick:function(){t({id:n,value:c,description:l,currency:o,method:s,tag:i,exchangeRates:u}),e.handleInitialState()}},"Editar despesa"))}}]),a}(r.a.Component)),P=Object(o.b)((function(e){return{editInfo:e.wallet.editExpense}}),(function(e){return{editedExpense:function(t){return e(function(e){return{type:"GET_EDIT_EXPENSE",expense:e}}(t))},getCurrencie:function(t){return e(y(t))}}}))(F),W=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.editInfo;return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("section",null,void 0!==e&&e.value>0?r.a.createElement(P,null):r.a.createElement(T,null)),r.a.createElement(_,null))}}]),a}(r.a.Component),A=Object(o.b)((function(e){return{editInfo:e.wallet.editExpense}}))(W);var U=function(){return r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:O}),r.a.createElement(s.a,{exact:!0,path:"/carteira",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(16),B=a(35),G=a(36),X=a(4),z={email:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":return Object(X.a)(Object(X.a)({},e),{},{email:t.email});default:return e}},Q=a(37),H={currencies:[],expenses:[],editExpense:{}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_API":return e;case"GET_CURRENCIES":return Object(X.a)(Object(X.a)({},e),{},{currencies:t.currencies});case"CHANGE_WALLET":return Object(X.a)(Object(X.a)({},e),{},{expenses:[].concat(Object(Q.a)(e.expenses),[Object(X.a)(Object(X.a)({},t.expense),{},{exchangeRates:t.exchangeRates})]),currencies:Object.keys(t.exchangeRates)});case"DELETE_EXPENSE":return Object(X.a)(Object(X.a)({},e),{},{expenses:e.expenses.filter((function(e){return e!==t.expense}))});case"EDIT_EXPENSE":return Object(X.a)(Object(X.a)({},e),{},{editExpense:t.expense});case"GET_EDIT_EXPENSE":return Object(X.a)(Object(X.a)({},e),{},{expenses:e.expenses.map((function(e){return e.id===t.expense.id?t.expense:e})),editExpense:{}});default:return e}},$=Object(M.combineReducers)({user:V,wallet:J}),q=Object(M.createStore)($,Object(G.composeWithDevTools)(Object(M.applyMiddleware)(B.a)));l.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:q},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8c101ec6.chunk.js.map