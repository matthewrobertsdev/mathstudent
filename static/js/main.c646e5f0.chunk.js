(this.webpackJsonpmathstudent=this.webpackJsonpmathstudent||[]).push([[1],{17:function(e,t,a){},20:function(e,t,a){"use strict";var n=a(16);t.a=function e(t,a){Object(n.a)(this,e),this.displayName=t,this.codeName=a}},33:function(e,t,a){e.exports=a(50)},43:function(e,t,a){var n={"./FractionTeacher":[52,5],"./LineIn2DTeacher":[53,4],"./MathTeacher":[51,6]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return a.e(t[1]).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=43,e.exports=l},44:function(e,t,a){var n={"./AboutFraction":[32,0],"./AboutFraction.js":[32,0]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return a.e(t[1]).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=44,e.exports=l},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r);console.log("12-31-2020");var o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){console.log("homeworker: should begin update"),localStorage.setItem("lastChecked",(new Date).toUTCString());var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(localStorage.setItem("lastUpdated",(new Date).toUTCString()),console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=a(6),s=a(1),u=a(5),h=a(31),d=Object(h.a)({name:"auth",initialState:{jwt:localStorage.getItem("jwt"),email:localStorage.getItem("email")},reducers:{storeJWT:function(e,t){console.log("storing jwt"),e.jwt=t.payload,localStorage.setItem("jwt",t.payload)},clearJWT:function(e,t){console.log("clearing jwt"),e.jwt=null,localStorage.setItem("jwt",null)},storeEmail:function(e,t){e.email=t.payload,localStorage.setItem("email",t.payload)},clearEmail:function(e,t){e.email=null,localStorage.setItem("email",null)}}}),g=d.actions,E=g.storeJWT,f=g.clearJWT,b=g.storeEmail,p=g.clearEmail,N=d.reducer,v=Object(u.h)((function(){var e=Object(i.c)((function(e){return e.auth.jwt})),t=Object(i.b)();return l.a.createElement("header",null,l.a.createElement("nav",{className:"nav-bar"},l.a.createElement(s.b,{className:a("/"),to:"/",key:0},"Math Teacher"),l.a.createElement(s.b,{className:a("/curriculum"),to:"/curriculum",key:2},"Curriculum"),l.a.createElement(s.b,{className:a("/version"),to:"/version",key:3},"Version"),l.a.createElement(s.b,{className:a("/recents"),to:"/recents",key:4},"Recents"),"undefined"===e||void 0===e||"null"===e||null==e?l.a.createElement(s.b,{className:n("/login"),to:"/login",key:5},"Login"):l.a.createElement(s.b,{onClick:function(){t(f()),t(p())},className:"nav-link float-right",to:"/logout",key:5},"Logout")));function a(e){return e===window.location.pathname?"selected-nav-link float-left":"nav-link float-left"}function n(e){return e===window.location.pathname?"selected-nav-link float-right":"nav-link float-right"}})),w=function(){var e=Object(u.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},y="center-text heading large-heading-size",j=function(){var e=localStorage.getItem("lastChecked");return e?l.a.createElement("h1",{className:"center-text large-heading-size"},"Update found on ",e,"."):null},x=function(){var e=localStorage.getItem("lastUpdated");return e?l.a.createElement("h1",{className:"center-text large-heading-size"},"Latest Cached Version: ",e,"."):l.a.createElement("h1",{className:"center-text large-heading-size"},"No version fully cached yet.")},O=function(){return Object(n.useEffect)((function(){document.title="Version"})),l.a.createElement("main",{className:"center-text"},l.a.createElement(j,null),l.a.createElement(x,null),l.a.createElement("h1",{className:y},"Reload the page to see if a new update has been found."),l.a.createElement("h1",{className:y},"Latest cached version only runs if you have closed every single page in your browser that has Math Teacher, so that none were open so that the new version could be launched when you next opened a Math Teacher page."))},k=function(){return Object(n.useEffect)((function(){document.title="Math Teacher"})),l.a.createElement("main",{className:"text-margins"},l.a.createElement("h1",{className:"large-heading-size center-text"},"Math Teacher is a website dedicated to helping you learn math, and teaching you math, all for free."),l.a.createElement("h2",null,"You can enter a problem to solve or let Math Teacher generate problems for you. Then, solve it, check your answer, or even let Math Teacher teach you how to solve the problem you are working on."),l.a.createElement("hr",null),l.a.createElement("h2",null,"Math Teacher makes money off advertsing when you are online, but, if you do not have internet available, many of our features--those that don't require login--are available while you are offline, provided you have let Math Teacher fully load one time with internet.  To access your past questions and results, you need to login and have internet available as it requires your web browser to communicate with our servers."),l.a.createElement("hr",null),l.a.createElement("h1",{className:"large-heading-size center-text"},"Create an Account"),l.a.createElement("h2",null,"To let Math Teacher save what problems you have completed so that you may refer back to them and view your progress, please create an account:"),l.a.createElement("div",{className:"center-text"},l.a.createElement(s.b,{to:"/createAccount",className:"link"},"Create Account")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},S=function(e){return l.a.createElement("div",null,l.a.createElement(s.b,{className:"link",to:"/".concat(e.type,"/").concat(e.topic.codeName)},e.topic.displayName))},P=function(e){return null==e.topics?null:e.topics.map((function(t,a){return l.a.createElement("div",{key:a,i:a},l.a.createElement(S,{topic:t,type:e.type}),l.a.createElement("br",null))}))},T=function(e){return l.a.createElement("span",null,l.a.createElement("h1",{className:"heading-text-size"},e.course.name),l.a.createElement(P,{topics:e.course.topics,type:e.type}))},I=(a(17),function(e){Object(n.useEffect)((function(){document.title="Curriculum"}));var t=Object(i.c)((function(e){return e.teaching.curriculum}));return null==t?null:l.a.createElement("main",{className:"subject-view"},t.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(T,{course:e,type:"teachings"}),l.a.createElement("br",null))})))}),C=function(){return Object(n.useEffect)((function(){document.title="Not Found"})),l.a.createElement("main",null,l.a.createElement("h1",{className:"center-text text-margins large-heading-size"},"Sorry, but the page you are looking for cannot be found."))},A=a(2),F=a(4),M=a(21),L=a(13),W=function(e){for(var t={},a=2;a<e.method.length;a++)a%2===1&&(t[a.toString()]="");var r=Object(n.useState)(t),c=Object(A.a)(r,2),o=c[0],m=c[1],i=Object(n.useState)(null),u=Object(A.a)(i,2),h=u[0],d=u[1];return Object(n.useEffect)((function(){e.params!==h&&(d(e.params),m(t))}),[e.params,h,t]),null==e.method?null:l.a.createElement("div",{className:"large-margins"},e.method.map((function(t,a){return a<2?null:a%2===0?l.a.createElement("label",{htmlFor:e.method[0]+"-"+e.method[a],className:"heading medium-line-height label small-right-margin",key:e.method[0]+"-"+e.method[a]+"label"},e.method[a],":"):l.a.createElement("span",{key:e.method[0]+"-"+e.method[a-1]+"input-and-span",className:"large-right-margin"},l.a.createElement("input",{id:e.method[0]+"-"+e.method[a-1],key:e.method[0]+"-"+e.method[a-1]+"input",value:o[a.toString()],onChange:function(e){m(Object(L.a)(Object(L.a)({},o),{},Object(M.a)({},a.toString(),e.target.value)))}}))})),l.a.createElement(s.b,{to:{pathname:function(){var t="";"teachings"===e.from?t+="../../teachings/":"EnterProblemsPage"===e.from&&(t+="../solve/");t+=e.teacher.teaching.objectName+"/",t+=e.method[1]+"/";for(var a=2;a<e.method.length;a++)t+=a%2===0?"@"+e.method[a].replace(" ","-"):"@"+o[a.toString()];return t}(),state:{from:e.from}},className:"create-button",tabIndex:0},"Solve"))},U=function(e){return void 0===e.method?null:l.a.createElement("span",null,l.a.createElement(F.b,null,l.a.createElement(F.d,{className:"heading-type-2"},l.a.createElement(F.c,null,e.number+") "+e.method[0])),l.a.createElement(F.e,null,l.a.createElement(W,{method:e.method,teacher:e.teacher,from:"EnterProblemsPage"}))))},z=function(e){return l.a.createElement("h1",{className:"large-left-margin"},l.a.createElement(s.b,{to:"/teachings/"+e.teacher.teaching.objectName,className:"link-heading"},"Go to "+e.teacher.teaching.displayNameSingular+"'s Page"))},J=function(){return l.a.createElement("div",{className:"ad center-text"},l.a.createElement("br",null),"There is an ad here when you are online.",l.a.createElement("br",null),"Ads help Math Teacher make money.",l.a.createElement("br",null),l.a.createElement("br",null))},G=function(e,t){a(43)("./".concat(e,"Teacher")).then((function(e){t(e.default)})).catch((function(e){t(!1)}))},R=function(e){var t=e.match.params;document.title="Enter ".concat(t.teachingName," Problems");var a=Object(n.useState)(void 0),r=Object(A.a)(a,2),c=r[0],o=r[1];return G(t.teachingName,o),c?l.a.createElement("main",null,l.a.createElement(F.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0},l.a.createElement(z,{teacher:c}),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)),l.a.createElement("h1",{className:"large-left-margin"},"Enter ",c.teaching.displayNameSingular," Problems"),c.teaching.methods.map((function(e,t){return l.a.createElement(U,{method:e,key:t,number:t+1,teacher:c})})))):void 0===c?null:void 0},D=function(e){return null==e.method?null:l.a.createElement("div",{className:"center-text"},l.a.createElement("h1",{className:"h1-2"},e.number+") "+e.method[0],":"),l.a.createElement("label",{className:"heading",htmlFor:e.method[0]},"Quantity:"),l.a.createElement("input",{id:e.method[0],defaultValue:0,min:0,type:"number",className:"small-left-margin"}))},_=function(){return document.title="Not Found",l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h1",{className:"heading-size text-margins"},"Sorry, but the teaching you are looking for cannot be found."))},$=function(e){var t=e.match.params;document.title="Generate ".concat(t.teachingName," Problems");var a=Object(n.useState)(!1),r=Object(A.a)(a,2),c=r[0],o=r[1];return G(t.teachingName,o),c?l.a.createElement("main",null,l.a.createElement(F.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0},l.a.createElement(z,{teacher:c}),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)),l.a.createElement("h1",{className:"large-left-margin"},"Generate ",c.teaching.displayNameSingular," Problems:"),l.a.createElement("div",{className:"center-text"},l.a.createElement(s.b,{to:"/",className:"link"},"Generate Problem Set")),l.a.createElement("h1",{className:"large-left-margin"},"Select Your Problems:"),l.a.createElement("div",{className:"center-text"},l.a.createElement(s.b,{to:"/",className:"link"},"Generate Problems from Selection")),c.teaching.methods.map((function(e,t){return l.a.createElement(D,{method:e,key:t,number:t+1})})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))):!1===c?l.a.createElement(_,null):void 0},Y=function(e){return l.a.createElement("div",{className:"full-width center-text"},l.a.createElement(s.b,{className:"link center-text",to:"/EnterProblems/".concat(e.teachingName)},"Enter Problem"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{className:"link center-text",to:"/GenerateProblems/".concat(e.teachingName)},"Generate Problems"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},V=function(e){return l.a.createElement("ol",{className:"large-left-margin"},e.methods.map((function(t,a){return l.a.createElement("li",{className:"link-heading",key:a},l.a.createElement(s.b,{className:"link-heading",to:"/teachings/".concat(e.teachingName,"/").concat(t[1])},t[0]),l.a.createElement("br",null),l.a.createElement("br",null))})))},Z=function(e){return l.a.createElement("span",null,l.a.createElement(F.b,{uuid:"table_of_contents"},l.a.createElement(F.d,{className:"heading large-heading-size"},l.a.createElement(F.c,null,e.teacher.teaching.displayNameSingular+" Teachings")),l.a.createElement(F.e,null,l.a.createElement(V,{methods:e.teacher.teaching.methods,teachingName:e.teacher.teaching.objectName}),l.a.createElement("br",null),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)),l.a.createElement("br",null))))},q=function(e){var t=Object(i.c)((function(e){return e.auth.jwt})),r=e.match.params,c=Object(n.useState)(void 0),o=Object(A.a)(c,2),m=o[0],u=o[1];G(r.teachingName,u),Object(n.useEffect)((function(){m&&"false"!==r.teachingName&&(console.log(),fetch("http://localhost:9000/teachings/".concat(r.teachingName),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})))}),[m,r.teachingName,t]);var h=l.a.lazy((function(){return a(44)("./About".concat(r.teachingName))}));return m?(document.title=r.teachingName,l.a.createElement("main",null,l.a.createElement("h1",{className:"large-left-margin"},m.teaching.displayNamePlural),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)),l.a.createElement(F.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0,preExpanded:[]},l.a.createElement("span",null,l.a.createElement(F.b,{uuid:"about"},l.a.createElement(F.d,{className:"heading large-heading-size"},l.a.createElement(F.c,null,"About "+m.teaching.displayNamePlural)),l.a.createElement(F.e,null,l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading ",m.teaching.displayNameSingular," Teaching...")},l.a.createElement(h,null)),l.a.createElement("div",{className:"text-margins float-right"},l.a.createElement(s.b,{to:"./".concat(m.teaching.objectName,"/").concat(m.teaching.methods[0][1]),className:"link-heading"},"Next")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)),l.a.createElement("br",null)))),l.a.createElement(Z,{teacher:m}),l.a.createElement("span",null,l.a.createElement(F.b,{uuid:"problems"},l.a.createElement(F.d,{className:"heading large-heading-size"},l.a.createElement(F.c,null,m.teaching.displayNameSingular+" Problems")),l.a.createElement(F.e,null,l.a.createElement(Y,{teachingName:r.teachingName}),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)))))),l.a.createElement("div",null,l.a.createElement(s.b,{to:"./".concat(m.teaching.objectName,"/").concat(m.teaching.methods[0][1]),className:"link-heading text-margins float-right"},"Next")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))):!1===m?l.a.createElement("main",null,l.a.createElement(_,{className:"center-text"})):null},B=a(12),H=a.n(B),Q=function(e){return l.a.createElement("div",null,function(){if(e.teacher)return l.a.createElement("div",null,l.a.createElement("h1",{className:"large-left-margin"},e.teacher.teaching.displayNameSingular," ",e.type,": ",function(){var t="";return e.teacher.teaching.methods.forEach((function(a){a[1]===e.params.method&&(t=a[0])})),t}()),l.a.createElement("div",{className:"text-margins"},function(){for(var a=[],n=0;n<e.lesson.length;n++)for(var l=0;l<e.lesson[n].length;l++)a.push(t(e.lesson[n][l],n+"-"+l));return a}()))}());function t(e,t){if(e.startsWith("{h}"))return l.a.createElement("h1",{key:t,className:"large-left-margin"},e.slice(3));if(e.startsWith("{br}"))return l.a.createElement("div",{key:t},l.a.createElement("br",null));if(e.startsWith("{str}"))return l.a.createElement("span",{key:t,className:"main-text-color heading"},e.slice(5));if(e.startsWith("{$il}")){var a=e.split("{$il}");return l.a.createElement("span",{"aria-label":a[2],key:t},l.a.createElement(H.a.Provider,{input:"tex"},l.a.createElement(H.a.Node,{inline:!0,"aria-hidden":"true",className:"heading",formula:"\\color{white}{".concat(a[1],"}")})))}if(e.startsWith("{$bl}")){var n=e.split("{$bl}");return l.a.createElement("span",{"aria-label":n[2],key:t},l.a.createElement(H.a.Provider,{input:"tex"},l.a.createElement(H.a.Node,{"aria-hidden":"true",className:"heading",formula:"\\color{white}{".concat(n[1],"}")})))}}},K=function(e){var t=Object(i.c)((function(e){return e.auth.jwt})),a=Object(n.useState)(void 0),r=Object(A.a)(a,2),c=r[0],o=r[1];G(e.params.teachingName,o);var m=Object(n.useState)([]),s=Object(A.a)(m,2),u=s[0],h=s[1];return Object(n.useEffect)((function(){void 0!==c&&"function"===typeof c[e.params.method]&&(c.goodInput=!1,h(c[e.params.method](e.params.parameters.split("@"))))}),[c,e.params.method,e.params.parameters]),Object(n.useEffect)((function(){if(void 0!==c&&c.goodInput&&"false"!==e.params.teachingName){var a=e.params.parameters;a=a.split("@");for(var n="",l=1;l<a.length;l++)n+="%40".concat(a[l]);fetch("http://localhost:9000/teachings/".concat(e.params.teachingName,"/").concat(e.params.method,"/").concat(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}}),[u,c,e.params,t]),l.a.createElement("div",null,l.a.createElement(Q,{params:e.params,teacher:c,lesson:u,type:"Solution"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},X=function(e){var t=e.match.params;return document.title=t.teachingName+" Problem",l.a.createElement("main",null,function(){if(e.location.state&&e.location.state.from){if("EnterProblemsPage"===e.location.state.from)return l.a.createElement("h1",{className:"large-left-margin"},l.a.createElement(s.b,{to:"../../../EnterProblems/".concat(t.teachingName),className:"link-heading"},"Go to ",t.teachingName,"'s Enter Problem Page"));if("teachings"===e.location.state.from)return l.a.createElement("h1",{className:"large-left-margin"},l.a.createElement(s.b,{to:"../../../teachings/".concat(t.teachingName,"/").concat(t.method),className:"link-heading"},"Back to Teaching"))}}(),function(){if(!e.location.state||!e.location.state.from)return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null))}(),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)),l.a.createElement(K,{params:t}))},ee=function(e){var t=Object(i.c)((function(e){return e.auth.jwt})),a=Object(n.useState)(void 0),r=Object(A.a)(a,2),c=r[0],o=r[1];G(e.params.teachingName,o);var m=Object(n.useState)([]),s=Object(A.a)(m,2),u=s[0],h=s[1];return Object(n.useEffect)((function(){void 0!==c&&!1!==c&&!1!==e.params.teachingName&&"function"===typeof c[e.params.method]&&(h(c[e.params.method]()),fetch("http://localhost:9000/teachings/".concat(e.params.teachingName,"/").concat(e.params.method),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})))}),[c,e.params.method,e.params.parameters,e.params.teachingName,t]),l.a.createElement("div",null,l.a.createElement(Q,{params:e.params,teacher:c,lesson:u,type:"Teaching"}),l.a.createElement("br",null))},te=function(e){var t=e.match.params;document.title=t.teachingName+" Problem Teaching";var a=Object(n.useState)(void 0),r=Object(A.a)(a,2),c=r[0],o=r[1];return G(t.teachingName,o),c&&-1!==m()?l.a.createElement("main",null,l.a.createElement("h1",{className:"large-left-margin"},l.a.createElement(s.b,{to:"../../teachings/".concat(t.teachingName),className:"link-heading"},"Go to ",t.teachingName,"'s  Page")),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)),l.a.createElement("div",null,l.a.createElement(ee,{params:t})),l.a.createElement("br",null),l.a.createElement("div",{className:"center-text text-margins"},l.a.createElement(J,null)),l.a.createElement("h1",{className:"large-left-margin"},"Try It Out:"),l.a.createElement(W,{teacher:c,method:c.teaching.methods.find((function(e){return e[1]===t.method})),from:"teachings",params:t}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,-1===m()?null:0===m()?l.a.createElement(s.b,{to:"../".concat(c.teaching.objectName),className:"text-margins link-heading float-left"},"Previous"):l.a.createElement(s.b,{to:"../".concat(c.teaching.objectName,"/").concat(c.teaching.methods[m()-1][1]),className:"text-margins link-heading float-left"},"Previous"),m()===c.teaching.methods.length-1?null:l.a.createElement(s.b,{to:"../".concat(c.teaching.objectName,"/").concat(c.teaching.methods[m()+1][1]),className:"text-margins link-heading float-right"},"Next")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(F.a,{allowZeroExpanded:!0},l.a.createElement(Z,{teacher:c})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)):!1===c||-1===m()?l.a.createElement("main",null,l.a.createElement(_,{className:"center-text"})):null;function m(){return void 0===c||!1===c?-1:c.teaching.methods.findIndex((function(e){return e[1]===t.method}))}},ae=function(e){return l.a.createElement("span",null,l.a.createElement("h1",{className:"heading text-margins"},"Teaching"),l.a.createElement("a",{href:"../teachings/".concat(e.teachingName),className:"link-heading text-margins"},e.teachingName," Teaching's Page"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",{className:"text-margins"}))},ne=function(e){var t=Object(n.useState)(void 0),a=Object(A.a)(t,2),r=a[0],c=a[1];return G(e.teachingName,c),r&&-1!==function(){if(void 0===r||!1===r)return-1;return r.teaching.methods.findIndex((function(t){return t[1]===e.method}))}?l.a.createElement("span",null,l.a.createElement("h1",{className:"heading text-margins"},"Teaching"),l.a.createElement("span",{className:"text-margins"},l.a.createElement("span",{className:"big-heading"},e.teachingName," Teaching: "),l.a.createElement("a",{href:"../teachings/".concat(e.teachingName,"/").concat(e.method),className:"link-heading"},r.teaching.methods.find((function(t){return t[1]===e.method}))[0])),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",{className:"text-margins"})):null},le=function(e){var t=Object(n.useState)(void 0),a=Object(A.a)(t,2),r=a[0],c=a[1];if(G(e.teachingName,c),r&&-1!==function(){if(void 0===r||!1===r)return-1;return r.teaching.methods.findIndex((function(t){return t[1]===e.method}))}){var o=r["".concat(e.method,"Problem")](e.arguments).split("{$bl}");return l.a.createElement("span",null,l.a.createElement("h1",{className:"heading text-margins"},"Problem"),l.a.createElement("span",{className:"text-margins"},l.a.createElement("span",{className:"big-heading"},e.teachingName," Problem: "),l.a.createElement("a",{href:"../teachings/".concat(e.teachingName,"/").concat(e.method,"/").concat(e.arguments),className:"link-heading"},r.teaching.methods.find((function(t){return t[1]===e.method}))[0])),l.a.createElement("span",{"aria-label":o[2]},l.a.createElement(H.a.Provider,{input:"tex"},l.a.createElement(H.a.Node,{"aria-hidden":"true",className:"heading",formula:"\\color{white}{".concat(o[1],"}")}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",{className:"text-margins"}))}return null},re=function(){document.title="Recents";var e=Object(i.c)((function(e){return e.auth.jwt})),t=Object(i.c)((function(e){return e.auth.email})),a=Object(n.useState)(!1),r=Object(A.a)(a,2),c=r[0],o=r[1],m=Object(n.useState)([]),s=Object(A.a)(m,2),u=s[0],h=s[1];return Object(n.useEffect)((function(){fetch("http://localhost:9000/recents",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})}).then((function(e){return e.json()})).then((function(e){e.error?o(!1):(console.log("logged in. should see recents"),o(!0),h(e.pages),console.log(e.pages))})).catch((function(e){return console.log(e)}))}),[e]),l.a.createElement("span",null,l.a.createElement("h1",{className:"large-left-margin"},"Recents ",c&&void 0!==t&&null!==t&&"null"!==t?"for ".concat(t):null),l.a.createElement("hr",{className:"text-margins"}),c?null==u||0===u.length?l.a.createElement("h1",{className:"heading text-margins"},"Please visit some teachings or problems to save them to recents."):u.map((function(e){return null==e.method&&null!==e.teachingName?l.a.createElement(ae,{teachingName:e.teachingName,key:e.teachingName}):null==e.arguments&&null!==e.teachingName&&null!==e.method?l.a.createElement(ne,{teachingName:e.teachingName,method:e.method,key:"".concat(e.teachingName,"-").concat(e.method)}):null!==e.arguments&&null!==e.teachingName&&null!==e.method?l.a.createElement(le,{teachingName:e.teachingName,method:e.method,arguments:e.arguments,key:"".concat(e.teachingName,"-").concat(e.method,"-").concat(e.arguments)}):l.a.createElement("span",null)})):l.a.createElement("h1",{className:"heading text-margins"},"You must login to see your recents."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},ce=function(){var e=Object(u.f)(),t=Object(i.b)(),a=Object(n.useState)(""),r=Object(A.a)(a,2),c=r[0],o=r[1],m=Object(n.useState)(""),s=Object(A.a)(m,2),h=s[0],d=s[1];return l.a.createElement("div",{className:"center-text"},l.a.createElement("label",{htmlFor:"Email Input",className:"heading"},"Email:"),l.a.createElement("input",{id:"Email Input",className:"userInfoInput small-left-margin",value:c,onChange:function(e){o(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Password Input",className:"heading"},"Password:"),l.a.createElement("input",{type:"password",id:"Password Input",className:"userInfoInput small-left-margin",value:h,onChange:function(e){d(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){if(null===c||void 0===c||""===c)return void window.alert("Email must not be blank");if(null===h||void 0===h||""===h)return void window.alert("Passwords must not be blank");fetch("http://localhost:9000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:h})}).then((function(e){return e.json()})).then((function(a){a.error?window.alert("Invalid email or password"):(t(E(a.jwt)),t(b(a.email)),e.push("/"))})).catch((function(e){return console.log(e)}))},className:"link"},"Login"))},oe=function(){return document.title="Login",l.a.createElement("main",null,l.a.createElement("h1",{className:"center-text"},"Returning User?  Log in to Math Teacher"),l.a.createElement(ce,null),l.a.createElement("h2",{className:"center-text"},"Or"),l.a.createElement("h1",{className:"center-text"},"New User? Create an Account"),l.a.createElement("h2",{className:"center-text"},"Don't have an account?  Click the link below to create one:"),l.a.createElement("div",{className:"center-text"},l.a.createElement(s.b,{to:"/createAccount",className:"link"},"Create Account")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},me=function(){var e=Object(u.f)();document.title="Create Account";var t=Object(n.useState)(""),a=Object(A.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),m=Object(A.a)(o,2),i=m[0],s=m[1],h=Object(n.useState)(""),d=Object(A.a)(h,2),g=d[0],E=d[1];return l.a.createElement("main",null,l.a.createElement("h1",{className:"center-text"},"Create an Account"),l.a.createElement("div",{className:"center-text"},l.a.createElement("label",{htmlFor:"Email Input",className:"heading"},"Email:"),l.a.createElement("input",{id:"Email Input",className:"userInfoInput small-left-margin",onChange:function(e){c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"heading"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Password Input",className:"heading"},"Password:"),l.a.createElement("input",{type:"password",id:"Password Input",className:"userInfoInput small-left-margin",onChange:function(e){s(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"heading"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Confirm Password Input",className:"heading"},"Confirm Password:"),l.a.createElement("input",{type:"password",id:"Confirm Password Input",className:"userInfoInput small-left-margin",onChange:function(e){E(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"heading"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){if(null===r||void 0===r||""===r)return void window.alert("Email must not be blank");if(null===i||void 0===i||""===i)return void window.alert("Passwords must not be blank");if(i!==g)return void window.alert("Passwords must match");fetch("http://localhost:9000/createAccount",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:i})}).then((function(e){return e.json()})).then((function(t){t.emailTaken?window.alert("Sorry, but that email is already taken."):e.push("/firstTimeLogin")})).catch((function(e){return console.log(e)}))},className:"link"},"Sign up")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},ie=function(){return document.title="Login",l.a.createElement("main",null,l.a.createElement("h1",{className:"center-text"},"Log in to Math Teacher with Your New Account!"),l.a.createElement(ce,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},se=function(){var e=Object(i.b)();return Object(n.useEffect)((function(){e(f()),e(p())}),[e]),l.a.createElement("span",null,l.a.createElement("h1",{className:"center-text"},"Thank you for using Math Teacher."),l.a.createElement("h2",{className:"center-text heading"},"You are now logged out"))},ue=function(){return l.a.createElement(s.a,null,l.a.createElement(v,null),l.a.createElement(w,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0,component:k}),l.a.createElement(u.a,{path:"/curriculum",exact:!0,component:I}),l.a.createElement(u.a,{path:"/version",exact:!0,component:O}),l.a.createElement(u.a,{path:"/solve/:teachingName/:method/:parameters",exact:!0,component:X}),l.a.createElement(u.a,{path:"/EnterProblems/:teachingName",exact:!0,component:R}),l.a.createElement(u.a,{path:"/GenerateProblems/:teachingName",exact:!0,component:$}),l.a.createElement(u.a,{path:"/teachings/:teachingName",exact:!0,component:q}),l.a.createElement(u.a,{path:"/teachings/:teachingName/:method",exact:!0,component:te}),l.a.createElement(u.a,{path:"/teachings/:teachingName/:method/:parameters",exact:!0,component:X}),l.a.createElement(u.a,{path:"/recents",exact:!0,component:re}),l.a.createElement(u.a,{path:"/login",exact:!0,component:oe}),l.a.createElement(u.a,{path:"/firstTimeLogin",exact:!0,component:ie}),l.a.createElement(u.a,{path:"/createAccount",exact:!0,component:me}),l.a.createElement(u.a,{path:"/logout",exact:!0,component:se}),l.a.createElement(u.a,{component:C})))},he=a(7),de=a(20),ge=[new de.a("Fractions","Fraction")],Ee=a(16),fe={topics:ge,curriculum:[new function e(t,a){Object(Ee.a)(this,e),this.name="",this.topics=[],this.name=t,this.topics=a}("Arithemetic",[new de.a("Fractions","Fraction")])],pageNotFound:!1,teacher:void 0};var be=Object(he.c)({auth:N,teaching:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEACHER":return void 0===t.payload?(console.log("teaching was null"),Object(L.a)(Object(L.a)({},e),{},{pageNotFound:!0})):Object(L.a)(Object(L.a)({},e),{},{teacher:t.payload,pageNotFound:!1});default:return e}}}),pe=a(30),Ne=a.n(pe),ve=function(){return Object(he.e)(be,Object(he.a)(Ne.a))},we=function(){return l.a.createElement(i.a,{store:ve()},l.a.createElement(ue,null))};a(49);c.a.render(l.a.createElement(we,null),document.getElementById("root")),function(e){if(console.log("registering homeworker"),"serviceWorker"in navigator){if(new URL("/mathstudent",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){console.log("homeworker: page loaded");var t="".concat("/mathstudent","/service-worker.js");o?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}},[[33,2,3]]]);
//# sourceMappingURL=main.c646e5f0.chunk.js.map