(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"a":"Abhinav","c":"","b":"Korpal","f":"| Engineer | Programmer | DevOps | Infrastructure as Code | SRE | Security ","j":[{"id":0,"image":"fa-github","url":"https://github.com/abhinavkorpal","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/thesupermankorpal/","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/thesupermankorpal/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/abhinavkorpal/","style":"socialicons"},{"id":4,"image":"fa-twitter","url":"https://twitter.com/abhinavkorpal","style":"socialicons"},{"id":5,"image":"fa-medium","url":"https://medium.com/@abhinavkorpal","style":"socialicons"}],"e":"About Me","q":true,"k":"https://www.instagram.com/","m":"thesupermankorpal","l":"/?__a=1","d":"A Computer Engineer from India with 4+ years experience in DevOps Practice, Infrastructure as Code, SRE and Security. Digital native, programmer and Back-end developer and Web Programmer. Working on AI & NLP, DevOps practice and building spaCy . \u26a1 Requests: HTTP for Humans.","n":"Recent Projects","g":"https://api.github.com/users/","i":"abhinavkorpal","h":"/repos?sort=updated&direction=desc","o":4,"r":true,"p":false}')},14:function(e,a,t){e.exports=t.p+"static/media/resume.206d2929.pdf"},36:function(e,a,t){e.exports=t(67)},41:function(e,a,t){},45:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(30),l=t.n(i),c=(t(41),t(11)),s=t(8),o=(t(42),t(43),t(45),t(1)),m=t(35),u=t(3),d=t(31),p=t.n(d),g=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],i=a[1],l=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",i(a)):"leave"===e.event?(a[e.icon.id]="socialicons",i(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),r.a.createElement(p.a,{className:"lead"}," ",o.f),r.a.createElement("div",{className:"p-5"},o.j.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return l({icon:e,event:"enter"})},onMouseOut:function(){return l({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},b=t(10),h=t.n(b),f=t(14),v=t.n(f),E=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(o.q),c=Object(u.a)(l,2),s=c[0],m=c[1],d=Object(n.useState)(v.a),p=Object(u.a)(d,1)[0];Object(n.useEffect)((function(){s&&g()}),[s]);var g=function(e){h.a.get(o.k+o.m+o.l).then((function(e){return i(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return m(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},s&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:t,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),r.a.createElement("p",{className:"lead text-center"},o.d),p&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:v.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},N=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/abhinavkorpal","aria-label":"My GitHub"},"Abhinav Korpal")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}," ","Project code is open source. Feel free to fork and make your own version.")))},k=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),i=t[0],l=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==i&&l(e)}))}),[i]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(i?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/home/#home"},"<".concat(o.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.p&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link lead",to:"/home/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/home/#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:v.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"Resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/home/#aboutme"},r.a.createElement("b",null,"About"))))))},q=t(34),w=function e(a){var t=this,i=a.title,l=a.image,c=a.description;Object(q.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=i,this.image=l,this.description=c},y=[],x=new w({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),j=new w({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");y.push(j),y.push(x);var O=y,P=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),O.map((function(e,a){return r.a.createElement(S,{key:a,title:e.title,description:e.description,index:a})})))},S=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(c.b,{to:"".concat("/home","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},A=function(e){var a=e.match.params.id,t=O[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},H=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(E,null))},L=function(){return r.a.createElement(c.a,{basename:"/home/"},o.r&&r.a.createElement(k,null),r.a.createElement(s.a,{path:"/",exact:!0,component:H}),o.p&&r.a.createElement(s.a,{path:"/blog",exact:!0,component:P}),o.p&&r.a.createElement(s.a,{path:"/blog/:id",component:A}),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.73e815ff.chunk.js.map