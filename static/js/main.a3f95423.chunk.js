(window.webpackJsonpmyfirstreact=window.webpackJsonpmyfirstreact||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/home-avatar.a63b4c5a.PNG"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=a(1),s=a(2),o=a(4),m=a(3),u=a(5),f=(a(15),a(9)),d=a.n(f),h=function(){return l.a.createElement("section",{id:"home",className:"home"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"black-container"}),l.a.createElement("div",{className:"home-container"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:d.a,alt:"avatar"})),l.a.createElement("h1",null,"hi, i'm john doe"),l.a.createElement("p",null,"let's service together"),l.a.createElement("a",{href:"#contact"},l.a.createElement("input",{className:"contact-me",type:"button",value:"contact me"})))))},E=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).showNavbar=function(){return document.getElementsByClassName("hidden-list")[0].style.display="block"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("navbar")[0],t=document.getElementsByClassName("navbar-list")[0].children,a=document.getElementsByClassName("logo")[0];window.addEventListener("scroll",function(){if(0===document.scrollingElement.scrollTop){e.classList.remove("navbareffect"),e.classList.add("navbareffectUp");for(var n=0;n<t.length;n++)t[n].style.color="#fff";a.style.color="#FFF"}else{e.classList.add("navbareffect"),e.classList.remove("navbareffectUp");for(var l=0;l<t.length;l++)t[l].style.color="#000";a.style.color="#000"}})}},{key:"render",value:function(){return l.a.createElement("section",{className:"navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement("div",{className:"logo"},l.a.createElement("p",null,"logo")),l.a.createElement("div",{className:"navbar-list"},l.a.createElement("a",{href:"#home"},"home"),l.a.createElement("a",{href:"#profile"},"profile"),l.a.createElement("a",{href:"#service"},"service"),l.a.createElement("a",{href:"#portfolio"},"portfolio"),l.a.createElement("a",{href:"#contact"},"contact")),l.a.createElement("span",{onClick:this.showNavbar,className:"three-bars fa fa-bars"}))))}}]),t}(l.a.Component)),v=a(6),p=(a(17),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).imagesFilter=function(e,t){a.setState({filteredArray:"all"===t?a.state.images:e.filter(function(e){return e.field===t})})},a.active=function(e){Array.from(e.target.parentNode.children).forEach(function(e){return e.classList.remove("active")}),e.target.classList.add("active")},a.handlFilter=function(e,t,n){a.imagesFilter(t,n),a.active(e)},a.state={images:[],filteredArray:[]},a.imagesFilter=a.imagesFilter.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("js/Data.json").then(function(e){return e.json()}).then(function(t){e.setState({images:t.portfolio}),e.setState({filteredArray:t.portfolio})})}},{key:"render",value:function(){var e=this,t=this.state.images;return l.a.createElement("section",{id:"portfolio",className:"portfolio"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"section-header"},"portfolio")),l.a.createElement("ul",{className:"portfolio-list"},l.a.createElement("li",{className:"active",onClick:function(a){e.handlFilter(a,t,"all")}},"all"),l.a.createElement("li",{onClick:function(a){e.handlFilter(a,t,"web")}},"web"),l.a.createElement("li",{onClick:function(a){e.handlFilter(a,t,"mobile")}},"mobile"),l.a.createElement("li",{onClick:function(a){e.handlFilter(a,t,"desktop")}},"desktop")),l.a.createElement("div",{className:"porfolio-row"},this.state.filteredArray.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("img",{src:e.image,alt:"img"+e.id}))})))}}]),t}(l.a.Component)),b=(a(18),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleValidation=function(){var e=a.state.fields,t={},n=!0;if(e.name?"undefined"!==typeof e.name&&(e.name.match(/^[a-zA-Z]+$/)||(n=!1,t.name="Only letters")):(n=!1,t.name="Cannot be empty"),e.email){if("undefined"!==typeof e.email){var l=e.email.lastIndexOf("@"),r=e.email.lastIndexOf(".");l<r&&l>0&&-1===e.email.indexOf("@@")&&r>2&&e.email.length-r>2||(n=!1,t.email="Email is not valid")}}else n=!1,t.email="Cannot be empty";return e.textarea||(n=!1,t.textarea="Cannot be empty"),a.setState({errors:t}),n},a.contactSubmit=function(e){e.preventDefault(),a.handleValidation()?alert("Form submitted"):alert("Form has errors.")},a.state={fields:{name:"",email:"",textarea:""},errors:{name:"",email:"",textarea:""}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"render",value:function(){return l.a.createElement("section",{id:"contact",className:"contact"},l.a.createElement("div",{className:"container-contact"},l.a.createElement("h1",{className:"section-header"},"Drop Me A line"),l.a.createElement("form",{name:"myForm",action:"",onSubmit:this.contactSubmit},l.a.createElement("div",{className:"form-input"},l.a.createElement("div",null,l.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Your Name",onChange:this.handleChange.bind(this,"name"),value:this.state.fields.name}),l.a.createElement("div",{className:"error"},this.state.errors.name)),l.a.createElement("div",null,l.a.createElement("input",{id:"email",type:"text",name:"email",placeholder:"Your Email",onChange:this.handleChange.bind(this,"email"),value:this.state.fields.gmail}),l.a.createElement("div",{className:"error"},this.state.errors.email))),l.a.createElement("textarea",{name:"textarea",placeholder:"Your Message",onChange:this.handleChange.bind(this,"textarea"),value:""===this.state.fields.textarea?this.state.errors.textarea:this.state.fields.textarea}),l.a.createElement("input",{id:"submit",type:"submit",value:"Send Message"}))))}}]),t}(l.a.Component)),y=(a(19),a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).barEffect=function(){var e=document.scrollingElement.scrollTop;try{if(e>300&&e<810)for(var t=0;t<4;t++)document.getElementsByClassName("bar")[t].children[0].style.width=a.state.skills[t].percentage}catch(n){console.log(n)}},a.state={info:[],social:[],skills:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("js/Data.json").then(function(e){return e.json()}).then(function(t){return e.setState({info:t.profile.info,social:t.profile.social,skills:t.profile.skills})}),window.addEventListener("scroll",this.barEffect)}},{key:"render",value:function(){var e=this.state,t=e.info,a=e.social,n=e.skills;return l.a.createElement("section",{id:"profile",className:"profile"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"profile-container"},l.a.createElement("div",{className:"profile-left"},l.a.createElement("h4",null,"hi there! i'm john doe"),l.a.createElement("p",null,"I am a professional web designer from NYC, USA. I create beautiful professional websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs."),t.map(function(e){return l.a.createElement("ul",{key:e.id},l.a.createElement("li",null,l.a.createElement("i",{className:e.icon}),l.a.createElement("span",null," ",e.title,": "),e.data))}),l.a.createElement("ul",{className:"socialRow"},a.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.link,target:"_blank",className:"icons",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.icon})))}))),l.a.createElement("div",{className:"profile-right"},l.a.createElement("ul",null,n.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("div",{className:"skill1"},l.a.createElement("span",{className:"skill"},e.skill),l.a.createElement("span",{className:"percentage"},e.percentage),l.a.createElement("div",{className:"bar"},l.a.createElement("div",{className:"bar1"}))))}))))))}}]),t}(l.a.Component)),N=(a(21),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={services:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("js/Data.json").then(function(e){return e.json()}).then(function(t){return e.setState({services:t.services})})}},{key:"render",value:function(){return l.a.createElement("section",{id:"service",className:"service"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"section-header"},"my services"),l.a.createElement("div",{className:"service-row"},this.state.services.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("div",null,l.a.createElement("span",{className:e.icon})),l.a.createElement("div",null,l.a.createElement("h2",null,e.title)),l.a.createElement("hr",{className:"line"}),l.a.createElement("div",null,l.a.createElement("p",null,e.body)))}))))}}]),t}(l.a.Component)),g=(a(22),function(){return l.a.createElement("section",{className:"footer"},l.a.createElement("p",null,"copyright \xa9 2019 by abdallah laasri"))}),j=(a(23),function(){return Object(n.useEffect)(function(){var e=document.getElementsByClassName("scrollUp")[0];window.addEventListener("scroll",function(){0===document.scrollingElement.scrollTop?e.classList.add("hideIt"):e.classList.remove("hideIt")})},[]),l.a.createElement("div",null,l.a.createElement("a",{href:"#home",className:"scrollUp"},l.a.createElement("i",{className:"fa fa-angle-up"})))}),O=(a(24),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).showNavbar=function(){return document.getElementsByClassName("hidden-list")[0].style.display="none"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"hidden-list"},l.a.createElement("span",{onClick:this.showNavbar,className:"close fa fa-times"}),l.a.createElement("a",{href:"#home"},"home"),l.a.createElement("a",{href:"#profile"},"profile"),l.a.createElement("a",{href:"#service"},"service"),l.a.createElement("a",{href:"#portfolio"},"portfolio"),l.a.createElement("a",{href:"#contact"},"contact"))}}]),t}(l.a.Component)),k=(a(25),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(O,null),l.a.createElement(h,null),l.a.createElement(y,null),l.a.createElement(N,null),l.a.createElement(p,null),l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(j,null))}}]),t}(l.a.Component));a(26);c.a.render(l.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.a3f95423.chunk.js.map