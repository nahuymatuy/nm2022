(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13e9717a"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var c in o){var u=r[c],f=u&&u.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(s){f.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=n("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),c="toString",u=RegExp.prototype,f=u[c],s=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=c;(s||l)&&r(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,o=n("69f3"),i=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=n("ae40"),c=i("filter"),u=a("filter");r({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),a=n("e95a"),c=n("50c4"),u=n("8418"),f=n("35a1");t.exports=function(t){var e,n,s,l,d,p,v=o(t),h="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,y=void 0!==b,m=f(v),S=0;if(y&&(b=r(b,g>2?arguments[2]:void 0,2)),void 0==m||h==Array&&a(m))for(e=c(v.length),n=new h(e);e>S;S++)p=y?b(v[S],S):v[S],u(n,S,p);else for(l=m.call(v),d=l.next,n=new h;!(s=d.call(l)).done;S++)p=y?i(l,b,[s.value,S],!0):s.value,u(n,S,p);return n.length=S,n}},"5a2f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("Navbar"),n("div",{staticClass:"m-20"},[n("h2",[t._v("Here-Here ")]),n("progress",{attrs:{value:"0",max:"100",id:"uploader"}},[t._v("0%")]),n("br"),n("input",{attrs:{type:"file",value:"upload",id:"uploadBtn"}}),n("br"),n("button",{staticClass:"bg-gray-200 p-2 m-2 rounded-full ",attrs:{id:"downloadBtn"}},[t._v("download")]),n("br"),n("button",{staticClass:"bg-red-200  p-2 m-2 rounded-full ",attrs:{id:"deleteBtn"}},[t._v("delete")]),n("br"),n("div",{staticClass:"bg-gary-200 ",attrs:{id:"fileImg"}},[t._v("fileImg")]),n("br"),n("div",{attrs:{id:"msg"}}),n("hr"),n("input",{attrs:{type:"file"},on:{change:t.imageLoaded}}),t.image?n("img",{attrs:{src:t.image,width:"200"}}):t._e(),n("button",{on:{click:t.upload}},[t._v(" Upload ")]),n("hr"),t._v(" "+t._s(t.image)+" ")])],1)},o=[];n("a4d3"),n("e01a"),n("4de4"),n("4160"),n("a434"),n("b0c0"),n("159b"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("a630"),n("fb6a"),n("25f0");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function c(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=a(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw i}}}}var u=n("7169"),f={name:"tutorials-list",components:{},data:function(){return{preview:null,image:null,preview_list:[],image_list:[],files:[],input:null,getIMG_name:"null",showModal:!1,todos:[],newTodo:{text:""},tempDt:{temp_key:"",temp_text:""},currentDt:[]}},methods:{fileSelected:function(t){console.log("event")},imageLoaded:function(t){this.image=t.target.result},removeFile:function(t){this.files.splice(t,1)},showUpload:function(){console.log("event")},onFileSelection:function(){var t,e=c(this.input.files);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.files.push({name:n.name})}}catch(r){e.e(r)}finally{e.f()}this.input.value=null},previewImage:function(t){var e=this,n=t.target;if(n.files){var r=new FileReader;r.onload=function(t){e.preview=t.target.result},this.image=n.files[0],r.readAsDataURL(n.files[0])}},uploadFile:function(){var t=event.target.files[0];fullPath=t.name,name=t.name;var e=u["a"].getST().ref(fullPath),n=e.put(t);n.on("state_changed",(function(t){var e=t.bytesTransferred/t.totalBytes*100;uploader.value=e}),(function(t){msg.textContent="上傳失敗"}),(function(){msg.textContent="上傳成功"}))},addTodo:function(){u["a"].create(this.newTodo),this.newTodo.text=""},updateTodo:function(t,e){u["a"].getAll().child(t).update(e),Swal.fire({position:"top",icon:"success",title:"更新成功",showConfirmButton:!1,timer:1500})},removeTodo:function(t){Swal.fire({title:"真的嗎?",text:"請確認是否移除資料!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"執行刪除!",cancelButtonText:"取消"}).then((function(e){e.isConfirmed&&(Swal.fire("刪除成功!","你的資料，已完成刪除.","success"),u["a"].getAll().child(t).remove())}))},updateTutorial:function(){var t=this,e={title:this.currentTutorial.title,description:this.currentTutorial.description};u["a"].update(this.currentTutorial.key,e).then((function(){t.message="更新成功!"})).catch((function(t){console.log(t)}))},onDataChange:function(t){var e=[];t.forEach((function(t){var n=t.key,r=t.val();e.push({key:n,text:r.text,spell_tayal:r.spell_tayal,spell_zh_tw:r.spell_zh_tw,description:r.description,description2:r.description2,season:r.season,topic:r.topic,temp_sort:r.temp_sort,field:r.field})})),this.todos=e}},computed:{famous:function(){return this.stories.filter((function(t){return t.upvotes>30}))},poschker:function(t){return this.odrList.filter((function(e){return e.NowPos==t}))},topic_1:function(){return this.todos.filter((function(t){return 1==t.NowPos}))},poschker_2:function(){return this.odrList.filter((function(t){return 2==t.NowPos}))},poschker_3:function(){return this.odrList.filter((function(t){return 3==t.NowPos}))}},watch:{},mounted:function(){u["a"].getAll().on("value",this.onDataChange)},beforeDestroy:function(){}},s=f,l=n("2877"),d=Object(l["a"])(s,r,o,!1,null,"d2be59ca",null);e["default"]=d.exports},7169:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("d4ec"),o=n("bee2"),i=n("dc59"),a=i["a"].database().ref("/Uploads"),c=function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,[{key:"getAll",value:function(){return a}},{key:"putST",value:function(t,e){return i["b"].ref(t).put(e)}},{key:"create",value:function(t){return a.push(t)}},{key:"update",value:function(t,e){return a.child(t).update(e)}},{key:"delete",value:function(t){return a.child(t).remove()}},{key:"deleteAll",value:function(){return a.remove()}}]),t}(),u=new c},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},a434:function(t,e,n){"use strict";var r=n("23e7"),o=n("23cb"),i=n("a691"),a=n("50c4"),c=n("7b0b"),u=n("65f0"),f=n("8418"),s=n("1dde"),l=n("ae40"),d=s("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,e){var n,r,s,l,d,p,y=c(this),m=a(y.length),S=o(t,m),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=m-S):(n=w-2,r=h(v(i(e),0),m-S)),m+n-r>g)throw TypeError(b);for(s=u(y,r),l=0;l<r;l++)d=S+l,d in y&&f(s,l,y[d]);if(s.length=r,n<r){for(l=S;l<m-r;l++)d=l+r,p=l+n,d in y?y[p]=y[d]:delete y[p];for(l=m;l>m-r+n;l--)delete y[l-1]}else if(n>r)for(l=m-r;l>S;l--)d=l+r-1,p=l+n-1,d in y?y[p]=y[d]:delete y[p];for(l=0;l<n;l++)y[l+S]=arguments[l+2];return y.length=m-r+n,s}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),v=n("825a"),h=n("7b0b"),g=n("fc6a"),b=n("c04e"),y=n("5c6c"),m=n("7c73"),S=n("df75"),w=n("241c"),T=n("057f"),x=n("7418"),L=n("06cf"),O=n("9bf2"),A=n("d1e7"),C=n("9112"),_=n("6eeb"),E=n("5692"),k=n("f772"),P=n("d012"),j=n("90e3"),M=n("b622"),N=n("e538"),B=n("746f"),D=n("d44e"),R=n("69f3"),F=n("b727").forEach,I=k("hidden"),G="Symbol",V="prototype",H=M("toPrimitive"),U=R.set,J=R.getterFor(G),$=Object[V],z=o.Symbol,q=i("JSON","stringify"),Q=L.f,W=O.f,K=T.f,X=A.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),rt=o.QObject,ot=!rt||!rt[V]||!rt[V].findChild,it=c&&s((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q($,e);r&&delete $[e],W(t,e,n),r&&t!==$&&W($,e,r)}:W,at=function(t,e){var n=Y[t]=m(z[V]);return U(n,{type:G,tag:t,description:e}),c||(n.description=e),n},ct=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ut=function(t,e,n){t===$&&ut(Z,e,n),v(t);var r=b(e,!0);return v(n),l(Y,r)?(n.enumerable?(l(t,I)&&t[I][r]&&(t[I][r]=!1),n=m(n,{enumerable:y(0,!1)})):(l(t,I)||W(t,I,y(1,{})),t[I][r]=!0),it(t,r,n)):W(t,r,n)},ft=function(t,e){v(t);var n=g(e),r=S(n).concat(vt(n));return F(r,(function(e){c&&!lt.call(n,e)||ut(t,e,n[e])})),t},st=function(t,e){return void 0===e?m(t):ft(m(t),e)},lt=function(t){var e=b(t,!0),n=X.call(this,e);return!(this===$&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,I)&&this[I][e])||n)},dt=function(t,e){var n=g(t),r=b(e,!0);if(n!==$||!l(Y,r)||l(Z,r)){var o=Q(n,r);return!o||!l(Y,r)||l(n,I)&&n[I][r]||(o.enumerable=!0),o}},pt=function(t){var e=K(g(t)),n=[];return F(e,(function(t){l(Y,t)||l(P,t)||n.push(t)})),n},vt=function(t){var e=t===$,n=K(e?Z:g(t)),r=[];return F(n,(function(t){!l(Y,t)||e&&!l($,t)||r.push(Y[t])})),r};if(u||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),n=function(t){this===$&&n.call(Z,t),l(this,I)&&l(this[I],e)&&(this[I][e]=!1),it(this,e,y(1,t))};return c&&ot&&it($,e,{configurable:!0,set:n}),at(e,t)},_(z[V],"toString",(function(){return J(this).tag})),_(z,"withoutSetter",(function(t){return at(j(t),t)})),A.f=lt,O.f=ut,L.f=dt,w.f=T.f=pt,x.f=vt,N.f=function(t){return at(M(t),t)},c&&(W(z[V],"description",{configurable:!0,get:function(){return J(this).description}}),a||_($,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),F(S(nt),(function(t){B(t)})),r({target:G,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=z(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:s((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(h(t))}}),q){var ht=!u||s((function(){var t=z();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),o[1]=e,q.apply(null,o)}})}z[V][H]||C(z[V],H,z[V].valueOf),D(z,G),P[I]=!0},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:o})},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},bee2:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},d28b:function(t,e,n){var r=n("746f");r("iterator")},d4ec:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},ddb0:function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),f=c("toStringTag"),s=i.values;for(var l in o){var d=r[l],p=d&&d.prototype;if(p){if(p[u]!==s)try{a(p,u,s)}catch(h){p[u]=s}if(p[f]||a(p,f,l),o[l])for(var v in i)if(p[v]!==i[v])try{a(p,v,i[v])}catch(h){p[v]=i[v]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),a=n("5135"),c=n("861d"),u=n("9bf2").f,f=n("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(d,s);var p=d.prototype=s.prototype;p.constructor=d;var v=p.toString,h="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=v.call(t);if(a(l,t))return"";var n=h?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),a=n("23cb"),c=n("50c4"),u=n("fc6a"),f=n("8418"),s=n("b622"),l=n("1dde"),d=n("ae40"),p=l("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),g=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var n,r,s,l=u(this),d=c(l.length),p=a(t,d),v=a(void 0===e?d:e,d);if(i(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(l,p,v);for(r=new(void 0===n?Array:n)(b(v-p,0)),s=0;p<v;p++,s++)p in l&&f(r,s,l[p]);return r.length=s,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);