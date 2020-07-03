(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{201:function(e,t,a){e.exports=a(357)},206:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(40),o=a.n(c),r=(a(206),a(190)),i=a(16),u=a(79),m=a(54),s=a(42),p=a(372),d=a(366),h=a(370),E=function(e){var t=e.cancelCreateOpen,a=e.createProject,c=Object(n.useState)({title:"",date:"",description:"",skills:"",hostedBy:""}),o=Object(s.a)(c,2),r=o[0],i=o[1],E=function(e){var t=e.target,a=t.name,n=t.value;i(Object(m.a)(Object(m.a)({},r),{},Object(u.a)({},a,n)))};return l.a.createElement(p.a,null,l.a.createElement(d.a,{onSubmit:function(e){e.preventDefault(),a(r)},autoComplete:"off"},l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Project Title"),l.a.createElement("input",{name:"title",value:r.title,onChange:E,placeholder:"Project Title"})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Date"),l.a.createElement("input",{name:"date",value:r.date,onChange:E,type:"date",placeholder:"Date"})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Skills"),l.a.createElement("input",{name:"skills",value:r.skills,onChange:E,placeholder:"Required Skills"})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Desciption"),l.a.createElement("input",{name:"description",value:r.description,onChange:E,placeholder:"Enter the Desciption of the project"})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Hosted By"),l.a.createElement("input",{name:"hostedBy",value:r.hostedBy,onChange:E,placeholder:"Enter the name of company hosting"})),l.a.createElement(h.a,{positive:!0,type:"submit"},"Submit"),l.a.createElement(h.a,{onClick:t,type:"button"},"Cancel")))},g=a(86),f=a.n(g),b=a(371),j=a(365),v=a(185),w=a.n(v),C=function(e){var t,a=f()().history,c=Object(n.useState)({user:{},error:null,authenticated:!1}),o=Object(s.a)(c,2),r=o[0],i=o[1],u=function(){a.push("/")};return Object(n.useEffect)((function(){w.a.get("http://localhost:8080/auth/login/success",{withCredentials:!0}).then((function(e){return console.log(e),e.data})).then((function(e){i(Object(m.a)(Object(m.a)({},r),{},{user:e.user,authenticated:e.authenticated}))})).catch((function(e){console.log(e)}))}),[]),t=r.authenticated?l.a.createElement(h.a,{onClick:function(){window.open("http://localhost:8080/auth/logout","_self")},as:"a",inverted:!0},"Sign out"):l.a.createElement(h.a,{onClick:function(){window.open("auth/login","_self")},as:"a",inverted:!0},"Login"),l.a.createElement(n.Fragment,null,l.a.createElement(b.a,{fixed:"top",inverted:!0},l.a.createElement(j.a,null,l.a.createElement(b.a.Item,{as:"a",onClick:u,header:!0},"Professional Development Club"),l.a.createElement(b.a.Item,{as:"a",onClick:u},"Home"),l.a.createElement(b.a.Item,{as:"a",onClick:function(){r.authenticated?a.push("/project-list"):alert("You need to login!")}},"Project List"),l.a.createElement(b.a.Item,{position:"right"},t),l.a.createElement(b.a.Item,null,r.authenticated?"Welcome "+r.user.name:""))))},y=a(189),k=a(373),F=a(368),O=a(34),P=a(369),S=a(188),L=function(e){var t=e.user;return l.a.createElement(P.a.Item,null,l.a.createElement(S.a,{as:"a",size:"mini",circular:!0,src:t.photoURL}))},B=function(e){var t=e.project,a=t.hostPhotoURL,c=t.title,o=t.date,r=t.description,i=t.hostedBy,u=t.user;return l.a.createElement(n.Fragment,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a,null,l.a.createElement(F.a.Group,null,l.a.createElement(F.a,null,l.a.createElement(F.a.Image,{size:"tiny",circular:!0,src:a}),l.a.createElement(F.a.Content,null,l.a.createElement(F.a.Header,{as:"a"},c),l.a.createElement(F.a.Description,null,"Hosted by ",l.a.createElement("a",null,i)))))),l.a.createElement(p.a,null,l.a.createElement("span",null,l.a.createElement(O.a,{name:"clock"})," ",o)),l.a.createElement(p.a,{secondary:!0},l.a.createElement(P.a,{horizontal:!0},u&&u.map((function(e){return l.a.createElement(L,{key:e.id,user:e})})))),l.a.createElement(p.a,{clearing:!0},l.a.createElement("span",null,r),l.a.createElement(h.a,{as:"a",color:"teal",floated:"right",content:"View"}))))},R=function(e){var t=e.projectsInfo;return l.a.createElement(n.Fragment,null,t.map((function(e){return l.a.createElement(B,{key:e.id,project:e})})))},I=[{id:"1",title:"Web Development",date:"2020-03-27",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",hostedBy:"Apple",hostPhotoURL:"https://imageog.flaticon.com/icons/png/512/37/37150.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",user:[{id:"a",name:"Bob",photoURL:"https://randomuser.me/api/portraits/men/20.jpg"}]},{id:"2",title:"Game Development",date:"2020-05-28",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",hostedBy:"Ubisoft",hostPhotoURL:"https://www.logo-designer.co/wp-content/uploads/2017/06/2017-new-ubisoft-logo-2.png",user:[{id:"a",name:"Tom",photoURL:"https://randomuser.me/api/portraits/men/30.jpg"},{id:"b",name:"Bob",photoURL:"https://randomuser.me/api/portraits/men/29.jpg"}]}],D=function(){var e=Object(n.useState)(I),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),r=Object(s.a)(o,2),i=r[0],u=r[1],m=function(){u((function(e){return!e}))};return l.a.createElement(n.Fragment,null,l.a.createElement(k.a,null,l.a.createElement(k.a.Column,{width:10},l.a.createElement(R,{projectsInfo:a})),l.a.createElement(k.a.Column,{width:6},l.a.createElement(h.a,{onClick:m,positive:!0,content:"Create New Project"}),i&&l.a.createElement(E,{createProject:function(e){e.id=9,e.hostPhotoURL="https://img.icons8.com/carbon-copy/2x/company.png",c([].concat(Object(y.a)(a),[e])),u(!1)},cancelCreateOpen:m}))))},U=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(r.a,null,l.a.createElement(C,null),l.a.createElement(i.Switch,null,l.a.createElement(j.a,{className:"main"},l.a.createElement(i.Route,{exact:!0,path:"/create-project",component:E}),l.a.createElement(i.Route,{exact:!0,path:"/project-list",component:D})))))},x=(a(356),function(){return l.a.createElement(n.Fragment,null,l.a.createElement(U,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[201,1,2]]]);
//# sourceMappingURL=main.5b49a33b.chunk.js.map