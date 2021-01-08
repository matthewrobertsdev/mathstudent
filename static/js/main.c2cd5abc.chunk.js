(this.webpackJsonpmathstudent=this.webpackJsonpmathstudent||[]).push([[1],{17:function(e,t,a){},20:function(e,t,a){"use strict";var n=a(16);t.a=function e(t,a){Object(n.a)(this,e),this.displayName=t,this.codeName=a}},33:function(e,t,a){e.exports=a(50)},43:function(e,t,a){var n={"./FractionTeacher":[52,5],"./LineIn2DTeacher":[53,4],"./MathTeacher":[51,6]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return a.e(t[1]).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=43,e.exports=l},44:function(e,t,a){var n={"./AboutFraction":[32,0],"./AboutFraction.js":[32,0]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return a.e(t[1]).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=44,e.exports=l},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),m=a(6),o=a(1),i=a(5),u=a(31),s=Object(u.a)({name:"auth",initialState:{jwt:localStorage.getItem("jwt"),email:localStorage.getItem("email")},reducers:{storeJWT:function(e,t){console.log("storing jwt"),e.jwt=t.payload,localStorage.setItem("jwt",t.payload)},clearJWT:function(e,t){console.log("clearing jwt"),e.jwt=null,localStorage.setItem("jwt",null)},storeEmail:function(e,t){e.email=t.payload,localStorage.setItem("email",t.payload)},clearEmail:function(e,t){e.email=null,localStorage.setItem("email",null)}}}),h=s.actions,E=h.storeJWT,d=h.clearJWT,g=h.storeEmail,b=h.clearEmail,f=s.reducer,p=Object(i.h)((function(){var e=Object(m.c)((function(e){return e.auth.jwt})),t=Object(i.g)(),a=Object(m.b)();return l.a.createElement("header",null,l.a.createElement("nav",{className:"nav-bar"},l.a.createElement(o.b,{className:n("/"),to:"/",key:0},"Math Student"),l.a.createElement(o.b,{className:n("/curriculum"),to:"/curriculum",key:2},"Curriculum"),l.a.createElement(o.b,{className:n("/recents"),to:"/recents",key:4},"Recents"),"undefined"===e||void 0===e||"null"===e||null==e?l.a.createElement(o.b,{className:r("/login"),to:"/login",key:5},"Login"):l.a.createElement(o.b,{onClick:function(){a(d()),a(b())},className:"nav-link float-right",to:"/logout",key:5},"Logout")));function n(e){return console.log(window.location.pathname),console.log(t.pathname),e===t.pathname?"selected-nav-link float-left":"nav-link float-left"}function r(e){return e===t.pathname?"selected-nav-link float-right":"nav-link float-right"}})),N=function(){var e=Object(i.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(){return Object(n.useEffect)((function(){document.title="Math Student"})),l.a.createElement("main",{className:"text-margins"},l.a.createElement("h1",{className:"large-heading-size center-text"},"Math Student is a website dedicated to helping you learn math, and teaching you math, all for free."),l.a.createElement("h2",null,"You can enter a problem to solve or let Math Student's programtic Math Teachers generate problems for you. Then, solve it, check your answer, or even let the Math Teachers teach you how to solve the problem you are working on."),l.a.createElement("hr",null),l.a.createElement("h2",null,"Math Student makes money off advertsing when you are online, but, if you do not have internet available, many of our features--those that don't require login--are available while you are offline, provided you have let Math Teacher fully load one time with internet.  To access your past questions and results, you need to login and have internet available as it requires your web browser to communicate with our servers."),l.a.createElement("hr",null),l.a.createElement("h1",{className:"large-heading-size center-text"},"Create an Account"),l.a.createElement("h2",null,"To let Math Student save what problems you have completed so that you may refer back to them and view your progress, please create an account:"),l.a.createElement("div",{className:"center-text"},l.a.createElement(o.b,{to:"/createAccount",className:"link"},"Create Account")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},j=function(e){return l.a.createElement("div",null,l.a.createElement(o.b,{className:"link",to:"/".concat(e.type,"/").concat(e.topic.codeName)},e.topic.displayName))},y=function(e){return null==e.topics?null:e.topics.map((function(t,a){return l.a.createElement("div",{key:a,i:a},l.a.createElement(j,{topic:t,type:e.type}),l.a.createElement("br",null))}))},x=function(e){return l.a.createElement("span",null,l.a.createElement("h1",{className:"heading-text-size"},e.course.name),l.a.createElement(y,{topics:e.course.topics,type:e.type}))},O=(a(17),function(e){Object(n.useEffect)((function(){document.title="Curriculum"}));var t=Object(m.c)((function(e){return e.teaching.curriculum}));return null==t?null:l.a.createElement("main",{className:"subject-view"},t.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(x,{course:e,type:"teachings"}),l.a.createElement("br",null))})))}),w=function(){return Object(n.useEffect)((function(){document.title="Not Found"})),l.a.createElement("main",null,l.a.createElement("h1",{className:"center-text text-margins large-heading-size"},"Sorry, but the page you are looking for cannot be found."))},k=a(2),S=a(4),P=a(21),T=a(13),I=function(e){for(var t={},a=2;a<e.method.length;a++)a%2===1&&(t[a.toString()]="");var r=Object(n.useState)(t),c=Object(k.a)(r,2),m=c[0],i=c[1],u=Object(n.useState)(null),s=Object(k.a)(u,2),h=s[0],E=s[1];return Object(n.useEffect)((function(){e.params!==h&&(E(e.params),i(t))}),[e.params,h,t]),null==e.method?null:l.a.createElement("div",{className:"large-margins"},e.method.map((function(t,a){return a<2?null:a%2===0?l.a.createElement("label",{htmlFor:e.method[0]+"-"+e.method[a],className:"heading medium-line-height label small-right-margin",key:e.method[0]+"-"+e.method[a]+"label"},e.method[a],":"):l.a.createElement("span",{key:e.method[0]+"-"+e.method[a-1]+"input-and-span",className:"large-right-margin"},l.a.createElement("input",{id:e.method[0]+"-"+e.method[a-1],key:e.method[0]+"-"+e.method[a-1]+"input",value:m[a.toString()],onChange:function(e){i(Object(T.a)(Object(T.a)({},m),{},Object(P.a)({},a.toString(),e.target.value)))}}))})),l.a.createElement(o.b,{to:{pathname:function(){var t="";"teachings"===e.from?t+="../../teachings/":"EnterProblemsPage"===e.from&&(t+="../solve/");t+=e.teacher.teaching.objectName+"/",t+=e.method[1]+"/";for(var a=2;a<e.method.length;a++)t+=a%2===0?"@"+e.method[a].replace(" ","-"):"@"+m[a.toString()];return t}(),state:{from:e.from}},className:"create-button",tabIndex:0},"Solve"))},C=function(e){return void 0===e.method?null:l.a.createElement("span",null,l.a.createElement(S.b,null,l.a.createElement(S.d,{className:"heading-type-2"},l.a.createElement(S.c,null,e.number+") "+e.method[0])),l.a.createElement(S.e,null,l.a.createElement(I,{method:e.method,teacher:e.teacher,from:"EnterProblemsPage"}))))},F=function(e){return l.a.createElement("h1",{className:"large-left-margin"},l.a.createElement(o.b,{to:"/teachings/"+e.teacher.teaching.objectName,className:"link-heading"},"Go to "+e.teacher.teaching.displayNameSingular+"'s Page"))},M=function(){return l.a.createElement("div",{className:"ad center-text"},l.a.createElement("br",null),"There is an ad here when you are online.",l.a.createElement("br",null),"Ads help Math Teacher make money.",l.a.createElement("br",null),l.a.createElement("br",null))},A=function(e,t){a(43)("./".concat(e,"Teacher")).then((function(e){t(e.default)})).catch((function(e){t(!1)}))},L=function(e){var t=e.match.params;document.title="Enter ".concat(t.teachingName," Problems");var a=Object(n.useState)(void 0),r=Object(k.a)(a,2),c=r[0],m=r[1];return A(t.teachingName,m),c?l.a.createElement("main",null,l.a.createElement(S.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0},l.a.createElement(F,{teacher:c}),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)),l.a.createElement("h1",{className:"large-left-margin"},"Enter ",c.teaching.displayNameSingular," Problems"),c.teaching.methods.map((function(e,t){return l.a.createElement(C,{method:e,key:t,number:t+1,teacher:c})})))):void 0===c?null:void 0},J=function(e){return null==e.method?null:l.a.createElement("div",{className:"center-text"},l.a.createElement("h1",{className:"h1-2"},e.number+") "+e.method[0],":"),l.a.createElement("label",{className:"heading",htmlFor:e.method[0]},"Quantity:"),l.a.createElement("input",{id:e.method[0],defaultValue:0,min:0,type:"number",className:"small-left-margin"}))},G=function(){return document.title="Not Found",l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h1",{className:"heading-size text-margins"},"Sorry, but the teaching you are looking for cannot be found."))},z=function(e){var t=e.match.params;document.title="Generate ".concat(t.teachingName," Problems");var a=Object(n.useState)(!1),r=Object(k.a)(a,2),c=r[0],m=r[1];return A(t.teachingName,m),c?l.a.createElement("main",null,l.a.createElement(S.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0},l.a.createElement(F,{teacher:c}),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)),l.a.createElement("h1",{className:"large-left-margin"},"Generate ",c.teaching.displayNameSingular," Problems:"),l.a.createElement("div",{className:"center-text"},l.a.createElement(o.b,{to:"/",className:"link"},"Generate Problem Set")),l.a.createElement("h1",{className:"large-left-margin"},"Select Your Problems:"),l.a.createElement("div",{className:"center-text"},l.a.createElement(o.b,{to:"/",className:"link"},"Generate Problems from Selection")),c.teaching.methods.map((function(e,t){return l.a.createElement(J,{method:e,key:t,number:t+1})})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))):!1===c?l.a.createElement(G,null):void 0},W=function(e){return l.a.createElement("div",{className:"full-width center-text"},l.a.createElement(o.b,{className:"link center-text",to:"/EnterProblems/".concat(e.teachingName)},"Enter Problem"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{className:"link center-text",to:"/GenerateProblems/".concat(e.teachingName)},"Generate Problems"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},_=function(e){return l.a.createElement("ol",{className:"large-left-margin"},e.methods.map((function(t,a){return l.a.createElement("li",{className:"link-heading",key:a},l.a.createElement(o.b,{className:"link-heading",to:"/teachings/".concat(e.teachingName,"/").concat(t[1])},t[0]),l.a.createElement("br",null),l.a.createElement("br",null))})))},D=function(e){return l.a.createElement("span",null,l.a.createElement(S.b,{uuid:"table_of_contents"},l.a.createElement(S.d,{className:"heading large-heading-size"},l.a.createElement(S.c,null,e.teacher.teaching.displayNameSingular+" Teachings")),l.a.createElement(S.e,null,l.a.createElement(_,{methods:e.teacher.teaching.methods,teachingName:e.teacher.teaching.objectName}),l.a.createElement("br",null),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)),l.a.createElement("br",null))))},U=function(e){var t=Object(m.c)((function(e){return e.auth.jwt})),r=e.match.params,c=Object(n.useState)(void 0),i=Object(k.a)(c,2),u=i[0],s=i[1];A(r.teachingName,s),Object(n.useEffect)((function(){u&&"false"!==r.teachingName&&(console.log(),fetch("http://localhost:9000/teachings/".concat(r.teachingName),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})))}),[u,r.teachingName,t]);var h=l.a.lazy((function(){return a(44)("./About".concat(r.teachingName))}));return u?(document.title=r.teachingName,l.a.createElement("main",null,l.a.createElement("h1",{className:"large-left-margin"},u.teaching.displayNamePlural),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)),l.a.createElement(S.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0,preExpanded:[]},l.a.createElement("span",null,l.a.createElement(S.b,{uuid:"about"},l.a.createElement(S.d,{className:"heading large-heading-size"},l.a.createElement(S.c,null,"About "+u.teaching.displayNamePlural)),l.a.createElement(S.e,null,l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading ",u.teaching.displayNameSingular," Teaching...")},l.a.createElement(h,null)),l.a.createElement("div",{className:"text-margins float-right"},l.a.createElement(o.b,{to:"./".concat(u.teaching.objectName,"/").concat(u.teaching.methods[0][1]),className:"link-heading"},"Next")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)),l.a.createElement("br",null)))),l.a.createElement(D,{teacher:u}),l.a.createElement("span",null,l.a.createElement(S.b,{uuid:"problems"},l.a.createElement(S.d,{className:"heading large-heading-size"},l.a.createElement(S.c,null,u.teaching.displayNameSingular+" Problems")),l.a.createElement(S.e,null,l.a.createElement(W,{teachingName:r.teachingName}),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)))))),l.a.createElement("div",null,l.a.createElement(o.b,{to:"./".concat(u.teaching.objectName,"/").concat(u.teaching.methods[0][1]),className:"link-heading text-margins float-right"},"Next")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))):!1===u?l.a.createElement("main",null,l.a.createElement(G,{className:"center-text"})):null},R=a(12),Y=a.n(R),$=function(e){return l.a.createElement("div",null,function(){if(e.teacher)return l.a.createElement("div",null,l.a.createElement("h1",{className:"large-left-margin"},e.teacher.teaching.displayNameSingular," ",e.type,": ",function(){var t="";return e.teacher.teaching.methods.forEach((function(a){a[1]===e.params.method&&(t=a[0])})),t}()),l.a.createElement("div",{className:"text-margins"},function(){for(var a=[],n=0;n<e.lesson.length;n++)for(var l=0;l<e.lesson[n].length;l++)a.push(t(e.lesson[n][l],n+"-"+l));return a}()))}());function t(e,t){if(e.startsWith("{h}"))return l.a.createElement("span",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h1",{key:t,className:"large-left-margin"},e.slice(3)));if(e.startsWith("{br}"))return l.a.createElement("div",{key:t},l.a.createElement("br",null));if(e.startsWith("{str}"))return l.a.createElement("span",{key:t,className:"main-text-color heading"},e.slice(5));if(e.startsWith("{$il}")){var a=e.split("{$il}");return l.a.createElement("span",{"aria-label":a[2],key:t},l.a.createElement(Y.a.Provider,{input:"tex"},l.a.createElement(Y.a.Node,{inline:!0,"aria-hidden":"true",className:"heading",formula:"\\color{white}{".concat(a[1],"}")})))}if(e.startsWith("{$bl}")){var n=e.split("{$bl}");return l.a.createElement("span",{"aria-label":n[2],key:t},l.a.createElement(Y.a.Provider,{input:"tex"},l.a.createElement(Y.a.Node,{"aria-hidden":"true",className:"heading",formula:"\\color{white}{".concat(n[1],"}")})))}}},Z=function(e){var t=Object(m.c)((function(e){return e.auth.jwt})),a=Object(n.useState)(void 0),r=Object(k.a)(a,2),c=r[0],o=r[1];A(e.params.teachingName,o);var i=Object(n.useState)([]),u=Object(k.a)(i,2),s=u[0],h=u[1];return Object(n.useEffect)((function(){void 0!==c&&"function"===typeof c[e.params.method]&&(c.goodInput=!1,h(c[e.params.method](e.params.parameters.split("@"))))}),[c,e.params.method,e.params.parameters]),Object(n.useEffect)((function(){if(void 0!==c&&c.goodInput&&"false"!==e.params.teachingName){var a=e.params.parameters;a=a.split("@");for(var n="",l=1;l<a.length;l++)n+="%40".concat(a[l]);fetch("http://localhost:9000/teachings/".concat(e.params.teachingName,"/").concat(e.params.method,"/").concat(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}}),[s,c,e.params,t]),l.a.createElement("div",null,l.a.createElement($,{params:e.params,teacher:c,lesson:s,type:"Solution"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},q=function(e){var t=e.match.params;return document.title=t.teachingName+" Problem",l.a.createElement("main",null,function(){if(e.location.state&&e.location.state.from){if("EnterProblemsPage"===e.location.state.from)return l.a.createElement("h1",{className:"large-left-margin"},l.a.createElement(o.b,{to:"../../../EnterProblems/".concat(t.teachingName),className:"link-heading"},"Go to ",t.teachingName,"'s Enter Problem Page"));if("teachings"===e.location.state.from)return l.a.createElement("h1",{className:"large-left-margin"},l.a.createElement(o.b,{to:"../../../teachings/".concat(t.teachingName,"/").concat(t.method),className:"link-heading"},"Back to Teaching"))}}(),function(){if(!e.location.state||!e.location.state.from)return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null))}(),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)),l.a.createElement(Z,{params:t}))},B=function(e){var t=Object(m.c)((function(e){return e.auth.jwt})),a=Object(n.useState)(void 0),r=Object(k.a)(a,2),c=r[0],o=r[1];A(e.params.teachingName,o);var i=Object(n.useState)([]),u=Object(k.a)(i,2),s=u[0],h=u[1];return Object(n.useEffect)((function(){void 0!==c&&!1!==c&&!1!==e.params.teachingName&&"function"===typeof c[e.params.method]&&(h(c[e.params.method]()),fetch("http://localhost:9000/teachings/".concat(e.params.teachingName,"/").concat(e.params.method),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})))}),[c,e.params.method,e.params.parameters,e.params.teachingName,t]),l.a.createElement("div",null,l.a.createElement($,{params:e.params,teacher:c,lesson:s,type:"Teaching"}),l.a.createElement("br",null))},H=function(e){var t=e.match.params;document.title=t.teachingName+" Problem Teaching";var a=Object(n.useState)(void 0),r=Object(k.a)(a,2),c=r[0],m=r[1];return A(t.teachingName,m),c&&-1!==i()?l.a.createElement("main",null,l.a.createElement("h1",{className:"large-left-margin"},l.a.createElement(o.b,{to:"../../teachings/".concat(t.teachingName),className:"link-heading"},"Go to ",t.teachingName,"'s  Page")),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)),l.a.createElement("div",null,l.a.createElement(B,{params:t})),l.a.createElement("br",null),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(M,null)),l.a.createElement("h1",{className:"large-left-margin"},"Try It Out:"),l.a.createElement(I,{teacher:c,method:c.teaching.methods.find((function(e){return e[1]===t.method})),from:"teachings",params:t}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,-1===i()?null:0===i()?l.a.createElement(o.b,{to:"../".concat(c.teaching.objectName),className:"text-margins link-heading float-left"},"Previous"):l.a.createElement(o.b,{to:"../".concat(c.teaching.objectName,"/").concat(c.teaching.methods[i()-1][1]),className:"text-margins link-heading float-left"},"Previous"),i()===c.teaching.methods.length-1?null:l.a.createElement(o.b,{to:"../".concat(c.teaching.objectName,"/").concat(c.teaching.methods[i()+1][1]),className:"text-margins link-heading float-right"},"Next")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(S.a,{allowZeroExpanded:!0},l.a.createElement(D,{teacher:c})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)):!1===c||-1===i()?l.a.createElement("main",null,l.a.createElement(G,{className:"center-text"})):null;function i(){return void 0===c||!1===c?-1:c.teaching.methods.findIndex((function(e){return e[1]===t.method}))}},Q=function(e){return l.a.createElement("span",null,l.a.createElement("h1",{className:"heading text-margins"},"Teaching"),l.a.createElement("a",{href:"../teachings/".concat(e.teachingName),className:"link-heading text-margins"},e.teachingName," Teaching's Page"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",{className:"text-margins"}))},V=function(e){var t=Object(n.useState)(void 0),a=Object(k.a)(t,2),r=a[0],c=a[1];return A(e.teachingName,c),r&&-1!==function(){if(void 0===r||!1===r)return-1;return r.teaching.methods.findIndex((function(t){return t[1]===e.method}))}?l.a.createElement("span",null,l.a.createElement("h1",{className:"heading text-margins"},"Teaching"),l.a.createElement("span",{className:"text-margins"},l.a.createElement("span",{className:"big-heading"},e.teachingName," Teaching: "),l.a.createElement("a",{href:"../teachings/".concat(e.teachingName,"/").concat(e.method),className:"link-heading"},r.teaching.methods.find((function(t){return t[1]===e.method}))[0])),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",{className:"text-margins"})):null},K=function(e){var t=Object(n.useState)(void 0),a=Object(k.a)(t,2),r=a[0],c=a[1];if(A(e.teachingName,c),r&&-1!==function(){if(void 0===r||!1===r)return-1;return r.teaching.methods.findIndex((function(t){return t[1]===e.method}))}){var m=r["".concat(e.method,"Problem")](e.arguments).split("{$bl}");return l.a.createElement("span",null,l.a.createElement("h1",{className:"heading text-margins"},"Problem"),l.a.createElement("span",{className:"text-margins"},l.a.createElement("span",{className:"big-heading"},e.teachingName," Problem: "),l.a.createElement("a",{href:"../teachings/".concat(e.teachingName,"/").concat(e.method,"/").concat(e.arguments),className:"link-heading"},r.teaching.methods.find((function(t){return t[1]===e.method}))[0])),l.a.createElement("span",{"aria-label":m[2]},l.a.createElement(Y.a.Provider,{input:"tex"},l.a.createElement(Y.a.Node,{"aria-hidden":"true",className:"heading",formula:"\\color{white}{".concat(m[1],"}")}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",{className:"text-margins"}))}return null},X=function(){document.title="Recents";var e=Object(m.c)((function(e){return e.auth.jwt})),t=Object(m.c)((function(e){return e.auth.email})),a=Object(n.useState)(!1),r=Object(k.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)([]),u=Object(k.a)(i,2),s=u[0],h=u[1];return Object(n.useEffect)((function(){fetch("http://localhost:9000/recents",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})}).then((function(e){return e.json()})).then((function(e){e.error?o(!1):(console.log("logged in. should see recents"),o(!0),h(e.pages),console.log(e.pages))})).catch((function(e){return console.log(e)}))}),[e]),l.a.createElement("span",null,l.a.createElement("h1",{className:"large-left-margin"},"Recents ",c&&void 0!==t&&null!==t&&"null"!==t?"for ".concat(t):null),l.a.createElement("hr",{className:"text-margins"}),c?null==s||0===s.length?l.a.createElement("h1",{className:"heading text-margins"},"Please visit some teachings or problems to save them to recents."):s.map((function(e){return null==e.method&&null!==e.teachingName?l.a.createElement(Q,{teachingName:e.teachingName,key:e.teachingName}):null==e.arguments&&null!==e.teachingName&&null!==e.method?l.a.createElement(V,{teachingName:e.teachingName,method:e.method,key:"".concat(e.teachingName,"-").concat(e.method)}):null!==e.arguments&&null!==e.teachingName&&null!==e.method?l.a.createElement(K,{teachingName:e.teachingName,method:e.method,arguments:e.arguments,key:"".concat(e.teachingName,"-").concat(e.method,"-").concat(e.arguments)}):l.a.createElement("span",null)})):l.a.createElement("h1",{className:"heading text-margins"},"You must login to see your recents."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},ee=function(){var e=Object(i.f)(),t=Object(m.b)(),a=Object(n.useState)(""),r=Object(k.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(""),s=Object(k.a)(u,2),h=s[0],d=s[1];return l.a.createElement("div",{className:"center-text"},l.a.createElement("label",{htmlFor:"Email Input",className:"heading"},"Email:"),l.a.createElement("input",{id:"Email Input",className:"userInfoInput small-left-margin",value:c,onChange:function(e){o(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Password Input",className:"heading"},"Password:"),l.a.createElement("input",{type:"password",id:"Password Input",className:"userInfoInput small-left-margin",value:h,onChange:function(e){d(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){if(null===c||void 0===c||""===c)return void window.alert("Email must not be blank");if(null===h||void 0===h||""===h)return void window.alert("Passwords must not be blank");fetch("http://localhost:9000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:h})}).then((function(e){return e.json()})).then((function(a){a.error?window.alert("Invalid email or password"):(t(E(a.jwt)),t(g(a.email)),e.push("/"))})).catch((function(e){return console.log(e)}))},className:"link"},"Login"))},te=function(){return document.title="Login",l.a.createElement("main",null,l.a.createElement("h1",{className:"center-text"},"Returning User?  Log in to Math Student"),l.a.createElement(ee,null),l.a.createElement("h2",{className:"center-text"},"Or"),l.a.createElement("h1",{className:"center-text"},"New User? Create an Account"),l.a.createElement("h2",{className:"center-text"},"Don't have an account?  Click the link below to create one:"),l.a.createElement("div",{className:"center-text"},l.a.createElement(o.b,{to:"/createAccount",className:"link"},"Create Account")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},ae=function(){var e=Object(i.f)();document.title="Create Account";var t=Object(n.useState)(""),a=Object(k.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(""),o=Object(k.a)(m,2),u=o[0],s=o[1],h=Object(n.useState)(""),E=Object(k.a)(h,2),d=E[0],g=E[1];return l.a.createElement("main",null,l.a.createElement("h1",{className:"center-text"},"Create an Account"),l.a.createElement("div",{className:"center-text"},l.a.createElement("label",{htmlFor:"Email Input",className:"heading"},"Email:"),l.a.createElement("input",{id:"Email Input",className:"userInfoInput small-left-margin",onChange:function(e){c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"heading"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Password Input",className:"heading"},"Password:"),l.a.createElement("input",{type:"password",id:"Password Input",className:"userInfoInput small-left-margin",onChange:function(e){s(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"heading"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Confirm Password Input",className:"heading"},"Confirm Password:"),l.a.createElement("input",{type:"password",id:"Confirm Password Input",className:"userInfoInput small-left-margin",onChange:function(e){g(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"heading"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){if(null===r||void 0===r||""===r)return void window.alert("Email must not be blank");if(null===u||void 0===u||""===u)return void window.alert("Passwords must not be blank");if(u!==d)return void window.alert("Passwords must match");fetch("http://localhost:9000/createAccount",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:u})}).then((function(e){return e.json()})).then((function(t){t.emailTaken?window.alert("Sorry, but that email is already taken."):e.push("/firstTimeLogin")})).catch((function(e){return console.log(e)}))},className:"link"},"Sign up")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},ne=function(){return document.title="Login",l.a.createElement("main",null,l.a.createElement("h1",{className:"center-text"},"Log in to Math Teacher with Your New Account!"),l.a.createElement(ee,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},le=function(){var e=Object(m.b)();return Object(n.useEffect)((function(){e(d()),e(b())}),[e]),l.a.createElement("span",null,l.a.createElement("h1",{className:"center-text"},"Thank you for using Math Teacher."),l.a.createElement("h2",{className:"center-text heading"},"You are now logged out"))},re=function(){return l.a.createElement(o.a,null,l.a.createElement(p,null),l.a.createElement(N,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:v}),l.a.createElement(i.a,{path:"/curriculum",exact:!0,component:O}),l.a.createElement(i.a,{path:"/solve/:teachingName/:method/:parameters",exact:!0,component:q}),l.a.createElement(i.a,{path:"/EnterProblems/:teachingName",exact:!0,component:L}),l.a.createElement(i.a,{path:"/GenerateProblems/:teachingName",exact:!0,component:z}),l.a.createElement(i.a,{path:"/teachings/:teachingName",exact:!0,component:U}),l.a.createElement(i.a,{path:"/teachings/:teachingName/:method",exact:!0,component:H}),l.a.createElement(i.a,{path:"/teachings/:teachingName/:method/:parameters",exact:!0,component:q}),l.a.createElement(i.a,{path:"/recents",exact:!0,component:X}),l.a.createElement(i.a,{path:"/login",exact:!0,component:te}),l.a.createElement(i.a,{path:"/firstTimeLogin",exact:!0,component:ne}),l.a.createElement(i.a,{path:"/createAccount",exact:!0,component:ae}),l.a.createElement(i.a,{path:"/logout",exact:!0,component:le}),l.a.createElement(i.a,{component:w})))},ce=a(7),me=a(20),oe=[new me.a("Fractions","Fraction")],ie=a(16),ue={topics:oe,curriculum:[new function e(t,a){Object(ie.a)(this,e),this.name="",this.topics=[],this.name=t,this.topics=a}("Arithemetic",[new me.a("Fractions","Fraction")])],pageNotFound:!1,teacher:void 0};var se=Object(ce.c)({auth:f,teaching:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEACHER":return void 0===t.payload?(console.log("teaching was null"),Object(T.a)(Object(T.a)({},e),{},{pageNotFound:!0})):Object(T.a)(Object(T.a)({},e),{},{teacher:t.payload,pageNotFound:!1});default:return e}}}),he=a(30),Ee=a.n(he),de=function(){return Object(ce.e)(se,Object(ce.a)(Ee.a))},ge=function(){return l.a.createElement(m.a,{store:de()},l.a.createElement(re,null))};a(49);c.a.render(l.a.createElement(ge,null),document.getElementById("root"))}},[[33,2,3]]]);
//# sourceMappingURL=main.c2cd5abc.chunk.js.map