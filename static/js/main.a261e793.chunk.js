(this["webpackJsonpquadb-assignment"]=this["webpackJsonpquadb-assignment"]||[]).push([[0],{33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(25),r=n.n(c),o=n(5),i=n(3),l=n(10),j=n(12),h=n(13),b=n(17),u=n(14),m=n(16),d=(n(33),n(1)),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",errorMsg:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onSuccessLogin=function(){e.props.history.replace("/")},e.submitForm=function(){var t=Object(j.a)(Object(l.a)().mark((function t(n){var s,a,c,r,o,i,j,h;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s=e.state,a=s.username,c=s.password,"https://apis.ccbp.in/login",r={username:a,password:c},o={method:"POST",body:JSON.stringify(r)},t.next=7,fetch("https://apis.ccbp.in/login",o);case 7:return i=t.sent,t.next=10,i.json();case 10:j=t.sent,!0===i.ok?(h=j.jwt_token,localStorage.setItem("jwt_token",h),e.onSuccessLogin()):e.setState({errorMsg:j.error_msg});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,s=e.errorMsg,a=""!==s;return Object(d.jsx)("div",{className:"login-box-container",children:Object(d.jsxs)("div",{className:"login-container",children:[Object(d.jsxs)("div",{className:"login-logo-container",children:[Object(d.jsx)("img",{src:"https://images.app.goo.gl/Ltfu93fv4sKDTTWLA",alt:"website logo"}),Object(d.jsx)("h1",{className:"login-logo",children:"Login"})]}),Object(d.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(d.jsx)("label",{htmlFor:"username",className:"label",children:"USERNAME"}),Object(d.jsx)("input",{type:"text",id:"username",className:"input",placeholder:"Username",onChange:this.onChangeUsername,value:t}),Object(d.jsx)("label",{htmlFor:"password",className:"label",children:"PASSWORD"}),Object(d.jsx)("input",{type:"password",id:"password",className:"input",placeholder:"Password",onChange:this.onChangePassword,value:n}),Object(d.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),a&&Object(d.jsxs)("p",{className:"error-msg",children:["*",s]}),Object(d.jsx)(o.b,{to:"/signup",className:"link",children:Object(d.jsx)("h1",{className:"new-user",children:"New User: Signup Here!"})})]})]})})}}]),n}(s.Component),g=p,O=(n(40),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",email:"",password:"",confirmPassword:"",errorMsg:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangeEmail=function(t){e.setState({email:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onChangeConfirmPassword=function(t){e.setState({confirmPassword:t.target.value})},e.onSuccessSignup=function(){e.props.history.replace("/")},e.submitForm=function(){var t=Object(j.a)(Object(l.a)().mark((function t(n){var s,a,c,r,o,i,j,h,b,u;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s=e.state,a=s.username,c=s.email,r=s.password,o=s.confirmPassword,"https://apis.ccbp.in/login",i={username:a,email:c,password:r,confirmPassword:o},j={method:"POST",body:JSON.stringify(i)},t.next=7,fetch("https://apis.ccbp.in/login",j);case 7:return h=t.sent,t.next=10,h.json();case 10:b=t.sent,!0===h.ok?(u=b.jwt_token,localStorage.setItem("jwt_token",u),e.onSuccessSignup()):e.setState({errorMsg:b.error_msg});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,s=e.password,a=e.confirmPassword,c=e.errorMsg,r=""!==c;return Object(d.jsx)("div",{className:"login-box-container",children:Object(d.jsxs)("div",{className:"login-container",children:[Object(d.jsx)("div",{className:"login-logo-container",children:Object(d.jsx)("h1",{className:"login-logo",children:"Signup"})}),Object(d.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(d.jsx)("label",{htmlFor:"username",className:"label",children:"USERNAME"}),Object(d.jsx)("input",{type:"text",id:"username",className:"input",placeholder:"Username",onChange:this.onChangeUsername,value:t}),Object(d.jsx)("label",{htmlFor:"email",className:"label",children:"EMAIL"}),Object(d.jsx)("input",{type:"text",id:"email",className:"input",placeholder:"Email",onChange:this.onChangeEmail,value:n}),Object(d.jsx)("label",{htmlFor:"password",className:"label",children:"NEW PASSWORD"}),Object(d.jsx)("input",{type:"password",id:"password",className:"input",placeholder:"New Password",onChange:this.onChangePassword,value:s}),Object(d.jsx)("label",{htmlFor:"confirmPassword",className:"label",children:"CONFIRM PASSWORD"}),Object(d.jsx)("input",{type:"password",id:"confirmPassword",className:"input",placeholder:"Confirm Password",onChange:this.onChangeConfirmPassword,value:a}),Object(d.jsx)("button",{type:"submit",className:"login-button",children:"Signup"}),r&&Object(d.jsxs)("p",{className:"error-msg",children:["*",c]})]})]})})}}]),n}(s.Component)),x=O,f=n(28),w=n(15),v=n(27),N=(n(41),Object(i.f)((function(e){var t=Object(s.useState)(!1),n=Object(f.a)(t,2),a=n[0],c=n[1],r=e.history,i=function(){a?(localStorage.removeItem("jwt_token"),r.replace("/"),c(!1)):(r.replace("/login"),c(!0))};return Object(d.jsx)("nav",{className:"nav-container",children:Object(d.jsxs)("div",{className:"nav-content",children:[Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/",className:"link",children:Object(d.jsx)("h1",{className:"header-logo",children:"QuadB Tech"})})}),Object(d.jsxs)("ul",{className:"icons-container",children:[Object(d.jsx)(o.b,{to:"/",className:"link",children:Object(d.jsx)("li",{children:Object(d.jsx)(w.a,{color:"white",size:20})})}),Object(d.jsx)(o.b,{to:"/jobs",className:"link",children:Object(d.jsx)("li",{children:Object(d.jsx)(v.a,{color:"white",size:20})})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:"logout-icon",onClick:i,children:a?Object(d.jsx)(w.c,{color:"white",size:20}):Object(d.jsx)(w.b,{color:"white",size:20})})})]}),Object(d.jsxs)("div",{className:"buttons-container",children:[Object(d.jsxs)("div",{className:"menu-container",children:[Object(d.jsx)(o.b,{to:"/",className:"link",children:Object(d.jsx)("p",{className:"header-heading",children:"Home"})}),Object(d.jsx)(o.b,{to:"/jobs",className:"link",children:Object(d.jsx)("p",{className:"header-heading",children:"Jobs"})})]}),Object(d.jsx)("button",{type:"button",className:"logout-btn",onClick:i,children:a?"Logout":"Login/Signup"})]})]})})}))),y=(n(42),function(e){var t=e.history;console.log(e);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{}),Object(d.jsxs)("div",{className:"home-container",children:[Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsx)("h1",{className:"search-heading",children:"What programming language you\u2019re looking for a job in"}),Object(d.jsx)("input",{type:"search",placeholder:"Programming Language",className:"search-input"}),Object(d.jsx)(o.b,{to:"/jobs",className:"link",children:Object(d.jsx)("button",{type:"button",className:"home-button",onClick:function(){t.push("/jobs")},children:"Find Jobs"})})]}),Object(d.jsxs)("div",{className:"home-content",children:[Object(d.jsx)("h1",{className:"home-heading",children:"Find The Job That Fits Your Life"}),Object(d.jsx)("p",{className:"home-description",children:"Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential."})]})]})]})}),S=(n(43),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={jobsData:"",searchInput:""},e.getJobsApi=Object(j.a)(Object(l.a)().mark((function t(){var n,s;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchInput,s="https://en-in.whatjobs.com/jobs/".concat(n),t.prev=2,t.next=5,fetch(s);case 5:if(t.sent.ok){t.next=8;break}throw new Error("Network response was not ok");case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error("Error fetching or parsing XML data:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getJobsApi()}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{}),Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:"I did not find correct URL to fetch to the required data."})})]})}}]),n}(s.Component)),k=S,C=(n(44),function(){return Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:y}),Object(d.jsx)(i.a,{exact:!0,path:"/login",component:g}),Object(d.jsx)(i.a,{exact:!0,path:"/signup",component:x}),Object(d.jsx)(i.a,{exact:!0,path:"/jobs",component:k})]})});r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(C,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a261e793.chunk.js.map