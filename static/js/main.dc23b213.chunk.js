(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,a){e.exports=a(370)},224:function(e,t,a){},369:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),l=(a(224),a(65)),s=a(32),o=a(23),m=a(96),u=a.n(m),d=a(141),p=a.n(d),v=a(97),h=a.n(v),E=Object(o.createMuiTheme)({palette:{primary:u.a,secondary:p.a,error:h.a,contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),f=a(9),g=a(12),b=a(10),y=a(13),N=a(14);function _(e){var t=document.getElementById(e);if(e&&t){var a=function(){if(window)return window.pageYOffset?window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}(),n=function(e){for(var t=e.offsetTop,a=e;a.offsetParent&&a.offsetParent!==document.body;)t+=(a=a.offsetParent).offsetTop;return t}(t),r=n>a?n-a:a-n;if(r<100)_(0);else{var i=Math.round(r/50);i>=20&&(i=20);var c=Math.round(r/25),l=n>a?a+c:a-c,s=0;if(!(n>a)){for(var o=a;o>n;o-=c)setTimeout(function(e){return function(){window.scrollTo(0,e)}}(l),s*i),(l-=c)<n&&(l=n),s++;return!1}for(var m=a;m<n;m+=c)setTimeout(function(e){return function(){window.scrollTo(0,e)}}(l),s*i),(l+=c)>n&&(l=n),s++}}}var j=a(26),O=a.n(j),x=a(31),w=a.n(x),C=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section section-cta2 light-gray",id:"cta2"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h2",{className:"mb-32"},"Subscribe & Request a demo"),r.a.createElement("div",{className:"subscribe-input"},r.a.createElement("input",{className:"email-input",type:"text",placeholder:"Your email"}),r.a.createElement(w.a,{variant:"extended",size:"large",color:"primary","aria-label":"Buy",className:"btn-action m-8"},r.a.createElement(O.a,{className:"mr-16"},"flight_takeoff"),"Subscribe"))))}}]),t}(n.Component),k=a(148),S=a(2),L=a(143),q=a.n(L),T=a(142),A=a.n(T),M=(n.Component,a(64)),U=a(42),V=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",subject:"",message:""},a.handleSubmit=function(e){console.log("submitted"),console.log(e)},a.handleChange=function(e){e.persist(),a.setState(Object(M.a)({},e.target.name,e.target.value))},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.subject,i=e.message;return r.a.createElement("div",{className:"section section-contact1 light-gray",id:"contact1"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section__header"},r.a.createElement("h2",null,"Send Us an Email"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, error.")),r.a.createElement(U.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,onError:function(e){return null}},r.a.createElement(U.TextValidator,{className:"mb-16 w-100",label:"Name",onChange:this.handleChange,name:"name",value:t,validators:["required"],errorMessages:["this field is required"]}),r.a.createElement(U.TextValidator,{className:"my-16 w-100",label:"Email",onChange:this.handleChange,name:"email",multiline:!0,value:a,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),r.a.createElement(U.TextValidator,{className:"my-16 w-100",label:"Subject",onChange:this.handleChange,name:"subject",value:n,validators:["required"],errorMessages:["this field is required"]}),r.a.createElement(U.TextValidator,{className:"my-16 mb-32 w-100",label:"Message",onChange:this.handleChange,name:"message",multiline:!0,value:i,validators:["required"],errorMessages:["this field is required"]}),r.a.createElement(S.f,{className:"beePrimary",type:"submit"},r.a.createElement(S.i,null,"send")))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section-footer1 light-dark",id:"footer1"},r.a.createElement("div",{className:"container"},r.a.createElement(S.h,{container:!0},r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:12},r.a.createElement("div",{className:"footer1__about"},r.a.createElement("h4",null,"About Us"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut aliquam."),r.a.createElement(S.a,{variant:"contained",color:"secondary"},"Contact Us"))),r.a.createElement(S.h,{item:!0,lg:3,md:3,sm:12},r.a.createElement("div",{className:"footer1__contact"},r.a.createElement("h4",null,"Contact"),r.a.createElement("div",{className:"px-16 my-32"},r.a.createElement(S.i,{className:"footer1__contact__icon"},"mail"),r.a.createElement("div",{className:"pl-16"},r.a.createElement("h5",{className:"m-0 p-0"},"Email"),r.a.createElement("p",{className:"m-0 p-0"},"info@astrahive.com"))),r.a.createElement("div",{className:"px-16 mt-32"},r.a.createElement(S.i,{className:"footer1__contact__icon"},"location_on"),r.a.createElement("div",{className:"pl-16"},r.a.createElement("h5",{className:"m-0 p-0"},"Address"),r.a.createElement("p",{className:"m-0 p-0"},"Winston-Salem, NC 27101"))))),r.a.createElement(S.h,{item:!0,lg:3,md:3,sm:12},r.a.createElement("div",{className:"footer1__disclaimer"},r.a.createElement("h4",null,"Disclaimer"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?"),r.a.createElement("div",{className:"mt-32 footer1__disclaimer__link"},r.a.createElement("a",{href:"#linkedin",className:"px-8"},r.a.createElement("img",{src:"./assets/images/social-linkedin.png",alt:""})),r.a.createElement("a",{href:"#twitter",className:"px-8"},r.a.createElement("img",{src:"./assets/images/social-twitter.png",alt:""})),r.a.createElement("a",{href:"#facebook",className:"px-8"},r.a.createElement("img",{src:"./assets/images/social-facebook.png",alt:""}))))))))}}]),t}(n.Component),D=a(48),B=a.n(D),Y=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={isTop:!0,isClosed:!0},a.close=function(){a.setState({isClosed:!0})},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window&&(this.handleScrollRef=this.handleScroll(),window.addEventListener("scroll",this.handleScrollRef))}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("scroll",this.handleScrollRef)}},{key:"handleScroll",value:function(){var e=this;return function(e,t,a){var n;return function(){var r=this,i=arguments;clearTimeout(n),n=setTimeout(function(){n=null,a||e.apply(r,i)},t),a&&!n&&e.apply(r,i)}}(function(){if(window){var t=window.scrollY<100;t!==e.state.isTop&&e.setState({isTop:t})}},20)}},{key:"render",value:function(){var e,t=this,a=this.state.isClosed?"menu":"close";return r.a.createElement("section",{className:(e={header:!0,"header-fixed":!this.state.isTop,closed:this.state.isClosed},Object.entries(e).filter(function(e){return e[1]}).map(function(e){return e[0]}).join(" "))},r.a.createElement("div",{className:"container header-container"},r.a.createElement(l.b,{to:"/",className:"brand"},r.a.createElement("img",{src:"./assets/images/AstraHiveLogo.png",alt:"AstraHive Logo"})),r.a.createElement("ul",{className:"navigation"},r.a.createElement("li",null,r.a.createElement(G,{to:"intro3",onScroll:this.close},"Intro")),r.a.createElement("li",null,r.a.createElement(G,{to:"service3",onScroll:this.close},"Service")),r.a.createElement("li",null,r.a.createElement(G,{to:"service5",onScroll:this.close},"Features"))),r.a.createElement("div",{className:"m-auto"}),r.a.createElement(w.a,{variant:"extended",size:"medium",color:"secondary","aria-label":"Buy",className:""},r.a.createElement(O.a,{className:"mr-16"},"flight_takeoff"),"Sign Up"),r.a.createElement(B.a,{className:"header__toggle",onClick:function(){t.setState({isClosed:!t.state.isClosed})}},r.a.createElement(O.a,null,a))))}}]),t}(n.Component),P=a(40),W=a.n(P),z=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section section-intro1 section-intro3",id:"intro3"},r.a.createElement("div",{className:"container"},r.a.createElement(W.a,{container:!0,spacing:24,justify:"center"},r.a.createElement(W.a,{item:!0,md:6},r.a.createElement("h1",{className:"section-intro1__title"},"The Dashboard for Creatives"),r.a.createElement("div",{className:"section-intro1__subtitle"},"Coming Soon -- Sign up to join the Beta Trial"),r.a.createElement("div",{className:"section-intro1__list"},r.a.createElement("div",{className:"section-intro1__list__item text-muted"},r.a.createElement(O.a,{color:"secondary"},"check")," Syncs to your Etsy shop."),r.a.createElement("div",{className:"section-intro1__list__item text-muted"},r.a.createElement(O.a,{color:"secondary"},"check")," Syncs to your calendar."),r.a.createElement("div",{className:"section-intro1__list__item text-muted"},r.a.createElement(O.a,{color:"secondary"},"check")," Syncs to your Xero account.")),r.a.createElement("div",{className:"subscribe-input"},r.a.createElement("input",{className:"email-input",type:"text",placeholder:"Your email"}),r.a.createElement(w.a,{variant:"extended",size:"large",color:"secondary","aria-label":"Buy",className:"btn-action m-8"},r.a.createElement(O.a,{className:"mr-16"},"flight_takeoff"),"Subscribe"))),r.a.createElement(W.a,{item:!0,md:6},r.a.createElement("div",{className:"intro3__product"},r.a.createElement("img",{src:"./assets/images/illustrations/2.svg",alt:""}))))))}}]),t}(n.Component),R=a(146),F=a(147),G=(n.Component,function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.to,a=e.onScroll;return r.a.createElement("a",{href:"#".concat(t),onClick:function(e){_(t),a&&(e.preventDefault(),a(e))}},this.props.children)}}]),t}(n.Component)),H=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a.cardList=[{icon:"account_balance",text:"Invoicing"},{icon:"payment",text:"Payment Gateway"},{icon:"receipt",text:"Customer Records"},{icon:"cloud_done",text:"Cloud Sync"}],a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section section-service3 light-gray",id:"service3"},r.a.createElement("div",{className:"container"},r.a.createElement(S.h,{container:!0,spacing:40,alignItems:"center"},r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:12},r.a.createElement(S.h,{container:!0,spacing:32},this.cardList.map(function(e,t){return r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:6,xs:12,key:t},r.a.createElement(S.b,{className:"service__card p-24 card text-center h-100"},r.a.createElement("div",{className:"rounded-icon secondary mb-16"},r.a.createElement(S.i,null,e.icon)),r.a.createElement("p",{className:"m-0 text-uppercase"},e.text," ")))}))),r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:12},r.a.createElement("h2",{className:""},"Made by business people for business people"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Lorem ipsum dolor sit amet,",r.a.createElement("br",null),r.a.createElement("br",null),"vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."),r.a.createElement(S.a,{variant:"contained",color:"secondary"},"Try it free")))))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a.cardList=[{icon:"alarm",title:"Choose Technology",text:"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte."},{icon:"settings",title:"Setup Workflows",text:"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte."},{icon:"dvr",title:"Learn from Data",text:"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte."},{icon:"multiline_chart",title:"Scale Up",text:"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte."}],a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section section-service4",id:"service4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section__header"},r.a.createElement("h2",null,"Integrate Your Process"),r.a.createElement("p",null,"Access integrations and new features in a matter of seconds")),r.a.createElement("div",{className:"text-center"},r.a.createElement(S.h,{container:!0,spacing:40},this.cardList.map(function(e,t){return r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:12,xs:12,key:t},r.a.createElement(S.b,{className:"service4__card card"},r.a.createElement(S.i,{className:"service4__card__icon"},e.icon),r.a.createElement("div",{className:"service4__card__description"},r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:"m-0"},e.text))))})),r.a.createElement(S.a,{className:"mt-32",size:"large",variant:"contained",color:"secondary"},"Start Your Free Trial"))))}}]),t}(n.Component),X=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.featureList=[{imageUrl:"./assets/images/screenshots/login.jpg",title:"Clean & minimal login UI",text:"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n\nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."},{imageUrl:"./assets/images/screenshots/dashboard.jpg",title:"Minimal & smart dashboard",text:"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n\nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."},{imageUrl:"./assets/images/screenshots/calendar.jpg",title:"Manage your tasks & project efficiently",text:"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n\nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."}],a.handleChange=function(e,t){a.setState({value:t})},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state.value,t=this.featureList[e];return r.a.createElement("div",{className:"section section-service5 light-gray",id:"service5"},r.a.createElement("div",{className:"container"},r.a.createElement(S.l,{value:e,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"standard",scrollButtons:"auto"},r.a.createElement(S.k,{label:"Login"}),r.a.createElement(S.k,{label:"Dashboard"}),r.a.createElement(S.k,{label:"Calendar"})),r.a.createElement(S.h,{container:!0,spacing:32,className:"mt-16 fade-in",alignItems:"center"},r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement("div",{className:"service5__image-holder"},r.a.createElement("img",{className:"elevation-3",src:t.imageUrl,alt:"building"}))),r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement("div",{className:"service5__details"},r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.text),r.a.createElement("a",{className:"text-brand",href:"#details"},"View details",r.a.createElement(S.i,{className:"service5__link-icon"},"navigate_next")))))))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).cardList=[{icon:"account_balance",text:"Sell everywhere"},{icon:"security",text:"Secured payments"},{icon:"language",text:"Smart pricing"},{icon:"fastfood",text:"Go beyond"}],a.state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section section-service6",id:"service6"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section__header mb-48"},r.a.createElement("h2",null,"Grow Your Business"),r.a.createElement("p",null,"Access integrations and new features in a matter of seconds")),r.a.createElement(S.h,{container:!0,justify:"center",alignItems:"center",spacing:32},this.cardList.map(function(e,t){return r.a.createElement(S.h,{item:!0,lg:3,md:3,sm:12,xs:12,key:t,className:"text-center"},r.a.createElement("div",{className:"sevice6__circle service__card p-24 card"},r.a.createElement(S.i,{className:"card__icon-64"}," ",e.icon," ")),r.a.createElement("p",{className:"text-uppercase"},e.text))}))))}}]),t}(n.Component),K=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).itemList=[{icon:"store_mall_directory",text:"Online stores"},{icon:"account_balance",text:"Finance services"},{icon:"home",text:"Industry"},{icon:"fastfood",text:"Churches"},{icon:"category",text:"Logistics"}],a.state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section section-service7 light-gray",id:"service7"},r.a.createElement("div",{className:"container"},r.a.createElement(S.h,{container:!0,alignItems:"center",spacing:40},r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement("div",{className:"service7__card__description"},r.a.createElement("h2",null,"Every business matters. We give you tools to succeed."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n              \nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea."),r.a.createElement(S.a,{variant:"contained",color:"secondary",className:"mt-16"},"Try it free"))),r.a.createElement(S.h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement("img",{src:"./assets/images/illustrations/1.svg",alt:"analyze"})))))}}]),t}(n.Component),Q=(n.Component,function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentWillUnmount",value:function(){_("root")}},{key:"render",value:function(){return r.a.createElement("div",{className:"landing"},r.a.createElement(Y,null),r.a.createElement(z,null),r.a.createElement(H,null),r.a.createElement(J,null),r.a.createElement(X,null),r.a.createElement($,null),r.a.createElement(K,null),r.a.createElement(C,null),r.a.createElement(V,null),r.a.createElement(I,null))}}]),t}(n.Component));a(369);var Z=function(){return r.a.createElement(o.MuiThemeProvider,{theme:E},r.a.createElement(l.a,{basename:"/"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:Q,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[219,1,2]]]);
//# sourceMappingURL=main.dc23b213.chunk.js.map