(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-13e9717a":"088304ca","chunk-1ee25486":"275b4337","chunk-1f905c88":"cb23caa9","chunk-2d0c8f6e":"59af0948","chunk-2d0ced63":"081547fe","chunk-2d2261a6":"756b9d3c","chunk-2d22d746":"7239d28e","chunk-4d01ccc6":"c1d7c665","chunk-6694131a":"83cfc394","chunk-ce3da378":"096ad00d"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-1ee25486":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-13e9717a":"31d6cfe0","chunk-1ee25486":"8f9bc625","chunk-1f905c88":"31d6cfe0","chunk-2d0c8f6e":"31d6cfe0","chunk-2d0ced63":"31d6cfe0","chunk-2d2261a6":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-4d01ccc6":"31d6cfe0","chunk-6694131a":"31d6cfe0","chunk-ce3da378":"31d6cfe0"}[t]+".css",r=l.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],m.parentNode.removeChild(m),a(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/nm2022/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"10ab":function(t,e,a){},1146:function(t,e,a){"use strict";var n=a("570e"),s=a.n(n);s.a},"12fc":function(t,e,a){},"2daa":function(t,e,a){},"501a":function(t,e,a){"use strict";var n=a("2daa"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("5c0b"),a("2877")),o={},l=Object(i["a"])(o,s,r,!1,null,null,null),c=l.exports,u=(a("45fc"),a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Navbar"),a("Login"),a("Header"),a("Footer")],1)},m=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"container h-auto"},[n("div",{staticClass:"row h-auto justify-content-center align-items-center"},[n("div",{staticClass:"col-sm-12 col-md-3"},[n("div",{staticClass:"header-content"},[n("img",{attrs:{src:a("df93"),width:"200"}}),n("p",[t._v("嘉興＆義興 一同傳承，新竹尖石地區的泰雅文化，點點滴滴將記錄於此.")]),n("div",{staticClass:"header-btn mt-3"},[n("button",{staticClass:"btn custom-btn btn-info mr-4",on:{click:t.goabout}},[t._v(" 進入教室 ")])])])]),t._m(0)])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 col-md-8 mt-3"},[a("div",{staticClass:"graphic"},[a("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/nm-tayal.appspot.com/o/PDF%2F20191126%E5%9B%9B%E5%B9%B4%E7%B4%9A%E5%8C%97%E5%BE%97%E6%8B%89%E6%9B%BC%E9%81%8A%E8%A8%98_200809_3-1140x570.jpeg?alt=media&token=86be97de-e950-4b0f-8a93-d6570809e899",alt:"",width:"1200"}})])])}],v=(a("ac1f"),a("5319"),{name:"Header",props:{msg:String},methods:{goabout:function(){this.$router.replace("about")},goproducts:function(){this.$router.replace("products")}}}),h=v,g=(a("1146"),Object(i["a"])(h,p,f,!1,null,"1490ca8e",null)),b=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("div",{staticClass:"container h-100"},[a("div",{staticClass:"row p-6 h-100 justify-content-center align-items-center"},[t._m(0),a("div",{staticClass:"col-sm-12 col-md-5 m-3"},[a("h3",[t._v("Latest News")]),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")]),a("button",{staticClass:"btn custom-btn btn-outline-primary mr-4",on:{click:t.gonews}},[t._v(" More News ")])])])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 col-md-5"},[a("img",{attrs:{src:"/img/layout/banner.jpg",alt:"",width:"300"}})])}],_={name:"Banner",props:{msg:String},methods:{gonews:function(){this.$router.replace("news")}}},y=_,k=(a("501a"),Object(i["a"])(y,C,w,!1,null,"39ee75d8",null)),x=k.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"h-auto"},[a("div",{staticClass:"row h-auto justify-content-center align-items-center"},[t._m(0),a("div",{staticClass:"col-sm-12 col-md-2"},[a("h3",[t._v("盤點各校資源")]),a("p",[t._v("新竹尖石地區的 泰雅核心素養，逐漸成形，1L.2S.3T 將是我們重要的願景")]),a("button",{staticClass:"btn custom-btn btn-outline-primary",on:{click:t.gostores}},[t._v(" 瞭解更多 ")])])])])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 col-md-8 m-2"},[a("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/nm-tayal.appspot.com/o/PDF%2Ffirefish.jpeg?alt=media&token=af06762c-aa4e-433d-8c81-5d6058afc102",alt:"",width:"1300"}})])}],j={name:"Footer",props:{msg:String},methods:{gostores:function(){this.$router.replace("stores")}}},S=j,P=(a("d3979"),Object(i["a"])(S,E,L,!1,null,"025cd21e",null)),O=P.exports,B={name:"Home",components:{Header:b,Banner:x,Footer:O}},N=B,A=Object(i["a"])(N,d,m,!1,null,null,null),F=A.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user"},[a("div",{staticClass:"page-wrapper default-theme sidebar-bg bg1 toggled"},[a("a",{staticClass:"btn btn-sm btn-dark",attrs:{id:"show-sidebar",href:"#"},on:{click:t.closeMenu}},[a("i",{staticClass:"fas fa-bars"})]),a("nav",{staticClass:"sidebar-wrapper",attrs:{id:"sidebar"}},[a("div",{staticClass:"sidebar-content"},[a("div",{staticClass:"sidebar-item sidebar-brand"},[a("a",{attrs:{href:"#"}},[t._v("會員中心")]),a("div",{attrs:{id:"close-sidebar"},on:{click:t.closeMenu}},[a("i",{staticClass:"fas fa-times"})])]),t._m(0),a("div",{staticClass:" sidebar-item sidebar-menu"},[a("ul",[t._m(1),a("li",[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fa fa-home"}),a("span",[t._v("Home")])])],1),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-sign-out-alt"}),a("span",{staticClass:"menu-text",on:{click:function(e){return t.logout()}}},[t._v("Logout")])])])])])])]),a("main",{staticClass:"page-content"},[a("a",{staticClass:"m-10 text-3xl"},[t._v("內部共享資源列表 建置中...")]),a("router-view")],1)])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-item sidebar-header d-flex flex-nowrap"},[a("div",{staticClass:"user-pic"},[a("img",{staticClass:"img-responsive img-rounded",attrs:{src:"/img/user.jpg",alt:"User picture"}})]),a("div",{staticClass:"user-info"},[a("span",{staticClass:"user-name"},[t._v("使用者")]),a("span",{staticClass:"user-role"},[t._v("信箱資訊")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"header-menu"},[a("span",[t._v("MEAU")])])}],U=a("dc59"),M={name:"user",data:function(){return{email:null}},methods:{closeMenu:function(){$(".page-wrapper").toggleClass("toggled")},logout:function(){var t=this;U["a"].auth().signOut().then((function(){t.$router.replace("/")})).catch((function(t){console.log(t)}))}},created:function(){var t=U["a"].auth().currentUser;this.email=t.email}},H=M,R=Object(i["a"])(H,T,I,!1,null,"6a66fb86",null),D=R.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[a("div",{staticClass:"container h-100"},[a("div",{staticClass:"intro h-100"},[a("div",{staticClass:"row h-100 justify-content-center align-items-center"},[a("div",{staticClass:"col-md-6"},[a("h3",[t._v("Profile settings")]),a("p",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit.")])]),a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-fluid",attrs:{src:"/img/layout/profile.png",width:"100",alt:""}})])])])])])}],z={name:"profile",props:{msg:String}},J=z,K=Object(i["a"])(J,W,q,!1,null,null,null),Y=K.exports;n["default"].use(u["a"]);var Z=new u["a"]({base:"/nm2022/",routes:[{path:"/",name:"home",component:F},{path:"/user",name:"user",component:D,meta:{requiresAuth:!0},children:[{path:"profile",name:"profile",component:Y}]},{path:"/wordList",name:"wordList",component:function(){return a.e("chunk-1ee25486").then(a.bind(null,"7440"))}},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/products",name:"products",component:function(){return a.e("chunk-2d2261a6").then(a.bind(null,"e6dc"))}},{path:"/stores",name:"stores",component:function(){return a.e("chunk-2d0ced63").then(a.bind(null,"60c6"))}},{path:"/news",name:"news",component:function(){return a.e("chunk-1f905c88").then(a.bind(null,"a2f9"))}},{path:"/todoList",name:"todoList",component:function(){return a.e("chunk-6694131a").then(a.bind(null,"7db3"))}},{path:"/imgList",name:"imgList",component:function(){return a.e("chunk-13e9717a").then(a.bind(null,"5a2f"))}},{path:"/FileZone",name:"FileZone",component:function(){return a.e("chunk-4d01ccc6").then(a.bind(null,"57e1"))}},{path:"/FileNameRule",name:"FileNameRule",component:function(){return a.e("chunk-2d0c8f6e").then(a.bind(null,"56b9"))}},{path:"/UpLoadFile",name:"UpLoadFile",component:function(){return a.e("chunk-ce3da378").then(a.bind(null,"b21a"))}}]});Z.beforeEach((function(t,e,a){var n=t.matched.some((function(t){return t.meta.requiresAuth})),s=U["a"].auth().currentUser;n&&!s?a("/"):a()}));var G=Z,Q=a("1157"),X=a.n(Q),V=(a("4989"),a("a89b"),a("3d20")),tt=a.n(V),et=a("5c96"),at=a.n(et);a("0fae");window.$=window.jQuery=X.a,window.Swal=tt.a,n["default"].config.productionTip=!1,n["default"].use(at.a),n["default"].component("Navbar",a("d178").default),n["default"].component("Login",a("578a").default);var nt="";U["a"].auth().onAuthStateChanged((function(t){nt||new n["default"]({router:G,render:function(t){return t(c)}}).$mount("#app")}))},"570e":function(t,e,a){},"578a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"modal fade",attrs:{id:"login",tabindex:"-1",role:"dialog","aria-labelledby":"loginTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[t._m(0),a("div",{staticClass:"tab-content",attrs:{id:"pills-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"pills-login",role:"tabpanel","aria-labelledby":"pills-login-tab"}},[a("h5",{staticClass:"text-center"},[t._v("Login Please")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("small",{staticClass:"form-text text-muted"},[t._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("Login")])])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"pills-register",role:"tabpanel","aria-labelledby":"pills-register-tab"}},[a("h5",{staticClass:"text-center"},[t._v("Create New Account")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",on:{click:t.register}},[t._v("Register")])])])])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-fill nav-pills mb-3",attrs:{id:"pills-tab",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"pills-home-tab","data-toggle":"pill",href:"#pills-login",role:"tab","aria-controls":"pills-login","aria-selected":"true"}},[t._v("Login")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"pills-register-tab","data-toggle":"pill",href:"#pills-register",role:"tab","aria-controls":"pills-register","aria-selected":"false"}},[t._v("Register")])])])}],r=a("dc59"),i={name:"Login",props:{msg:String},data:function(){return{email:null,password:null}},methods:{login:function(){r["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(){$("#login").modal("hide")})).catch((function(t){var e=t.code;t.message;"auth/wrong-password"===e?Swal.fire({position:"top",icon:"error",title:"Wrong password.",showConfirmButton:!1,timer:5e3}):Swal.fire({position:"top",icon:"error",title:"Wrong email or not registered yet.",showConfirmButton:!1,timer:5e3}),console.log(t)}))},register:function(){r["a"].auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){$("#login").modal("hide")})).catch((function(t){var e=t.code,a=t.message;"auth/weak-password"==e?Swal.fire({position:"top",icon:"error",title:"The password is too weak.",showConfirmButton:!1,timer:5e3}):Swal.fire({position:"top",icon:"error",title:a,showConfirmButton:!1,timer:5e3}),console.log(t)}))}}},o=i,l=a("2877"),c=Object(l["a"])(o,n,s,!1,null,"7664d7ac",null);e["default"]=c.exports},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"998b":function(t,e,a){"use strict";var n=a("12fc"),s=a.n(n);s.a},"9c0c":function(t,e,a){},a89b:function(t,e,a){},d178:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("nav",{staticClass:"navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/wordList"}},[t._v("尖石.泰雅族語")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/wordList"}},[t._v("文化課程札記")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/todoList"}},[t._v("文化素養")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/UpLoadFile"}},[t._v("教案列表")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/FileZone"}},[t._v("檔案上傳")])],1),t._m(1),t._m(2),t._m(3)]),a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("a",{directives:[{name:"show",rawName:"v-show",value:"no"==t.isLogin,expression:"isLogin == 'no'"}],staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit","data-toggle":"modal","data-target":"#login"}},[t._v("登入/註冊")]),a("a",{directives:[{name:"show",rawName:"v-show",value:"yes"==t.isLogin,expression:"isLogin == 'yes'"}],staticClass:"btn btn-outline-success my-2 my-sm-0",on:{click:function(e){return t.logout()}}},[t._v("登出")])]),a("a",{staticClass:"nav-link",on:{click:t.gomenber}},[a("span",[t._v("會員中心")])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"bg-blue-500 hover:bg-blue-400 \n                       text-white font-bold py-2 px-2 mx-2\n                       border-b-4 border-blue-700 \n                       hover:border-blue-500 rounded",attrs:{href:"https://www.facebook.com/Nahuy5841004"}},[t._v(" FaceBook.粉專 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"bg-yellow-500 hover:bg-yellow-400 \n                       text-black font-bold py-2 px-2 mx-2\n                       border-b-4 border-yellow-700 \n                       hover:border-yellow-500 rounded",attrs:{href:"https://www.facebook.com/Nahuy5841004"}},[t._v(" 尖石.泰雅實驗教育.成功專案 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"bg-red-500 hover:bg-red-400 \n                       text-white font-bold py-2 px-2 mx-2\n                       border-b-4 border-red-700 \n                       hover:border-red-500 rounded",attrs:{href:"https://www.nahuymatuy.com/about-me-2"}},[t._v(" 近期課表動態 ")])])}],r=(a("ac1f"),a("5319"),a("dc59")),i={name:"Navbar",props:{msg:String},data:function(){return{name:null,level:null,isLogin:"no"}},methods:{logout:function(){r["a"].auth().signOut().then((function(){Swal.fire({position:"top-end",icon:"info",title:"you are already logged out",showConfirmButton:!1,timer:1500})})).catch((function(t){console.log(t)}))},gomenber:function(){var t=r["a"].auth().currentUser;null!==t?this.$router.replace("user"):Swal.fire({position:"center",icon:"warning",title:"Please Login or Register!",showConfirmButton:!1,timer:2e3})}},created:function(){var t=this;r["a"].auth().onAuthStateChanged((function(e){e&&(t.isLogin="yes")}))}},o=i,l=(a("998b"),a("2877")),c=Object(l["a"])(o,n,s,!1,null,"b404ed74",null);e["default"]=c.exports},d3979:function(t,e,a){"use strict";var n=a("10ab"),s=a.n(n);s.a},dc59:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var n=a("59ca"),s=a.n(n),r=(a("66ce"),a("e71f"),a("1247"),a("588e"),{apiKey:"AIzaSyBfGRf3rz_p6R21JDLYjpYjXjwKrLaHb8c",authDomain:"nm-tayal.firebaseapp.com",databaseURL:"https://nm-tayal-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"nm-tayal",storageBucket:"nm-tayal.appspot.com",messagingSenderId:"816237299811",appId:"1:816237299811:web:507e570a2200ce90dd1056",measurementId:"G-FD3QSMYTP3"}),i=s.a.initializeApp(r),o=(s.a.firestore(),s.a.database(),s.a.storage())},df93:function(t,e,a){t.exports=a.p+"img/Logo_N2.c47fcdec.png"}});