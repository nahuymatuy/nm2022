(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f905c88"],{7169:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("d4ec"),a=n("bee2"),s=n("dc59"),r=s["a"].database().ref("/Uploads"),l=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return r}},{key:"putST",value:function(e,t){return s["b"].ref(e).put(t)}},{key:"create",value:function(e){return r.push(e)}},{key:"update",value:function(e,t){return r.child(e).update(t)}},{key:"delete",value:function(e){return r.child(e).remove()}},{key:"deleteAll",value:function(){return r.remove()}}]),e}(),o=new l},a2f9:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("Navbar"),n("div",{staticClass:"m-20"},[n("div",{staticClass:"row"},[e._m(0),n("div",{staticClass:"col-md-5 offset-md-1"},[n("h5",[e._v("1. single file "+e._s(e.msg)+" // "+e._s(e.msg2))]),n("button",{staticClass:"text-gray-900 text-xl font-black \n                            m-1 px-1 py-0.5 rounded-full \n                            bg-green-500\n                            hover:bg-blue-700 hover:text-gray-100  ",on:{click:e.uploadFile}},[e._v("更新")]),n("button",{staticClass:"text-gray-900 text-xl font-black \n                            m-1 px-1 py-0.5 rounded-full \n                            bg-green-500\n                            hover:bg-blue-700 hover:text-gray-100  ",on:{click:function(t){return e.d()}}},[e._v("刪除")]),n("button",{staticClass:"text-gray-900 text-xl font-black \n                            m-1 px-1 py-0.5 rounded-full \n                            bg-green-500\n                            hover:bg-blue-700 hover:text-gray-100  ",on:{click:function(t){return e.g()}}},[e._v("get")]),n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"my-file"}},[e._v("Select Image")]),n("input",{staticClass:"form-control-file",attrs:{type:"file",accept:"image/*",id:"my-file"},on:{change:e.previewImage}}),n("div",{staticClass:"border p-2 mt-3"},[n("p",[e._v("Preview Here:")]),e.preview?[n("img",{staticClass:"img-fluid",attrs:{src:e.preview}}),n("p",{staticClass:"mb-0"},[e._v("file name: "+e._s(e.image.name))]),n("p",{staticClass:"mb-0"},[e._v("size: "+e._s(e.image.size/1024)+"KB")])]:e._e()],2)])])])])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-12 text-center"},[n("h1",{staticClass:"mb-3"},[e._v("Upload Image")])])}],s=(n("b0c0"),n("7169")),r=n("59ca"),l=n.n(r),o={name:"tutorials-list",components:{},data:function(){return{preview:null,image:null,preview_list:[],image_list:[],msg:"執行中",msg2:"檔案路徑"}},methods:{g:function(){l.a.storage().ref(this.msg2).getDownloadURL().then((function(e){console.log(".url=="+e)}))},d:function(){l.a.storage().ref(this.msg2).delete()},previewImage:function(e){var t=this,n=e.target;if(n.files){var i=new FileReader;i.onload=function(e){console.log(".Done...00"),t.preview=e.target.result;new Blob([e.target.result],{type:"image/jpeg"});var i="",a=l.a.storage().ref(i+n.files[0].name);l.a.storage().ref(i+n.files[0]);console.warn(n.files[0]),a.put(n.files[0]),t.msg2=i+n.files[0].name,console.log(".msg2..."+t.msg2),t.setTimeoutFun()},this.image=n.files[0],i.readAsDataURL(n.files[0]),console.log(".Done...2")}},setTimeoutFun:function(){var e=this;this.timeOutProcessId=setTimeout((function(){e.g()}),3e3)},previewMultiImage:function(e){var t=this,n=e.target,i=n.files.length,a=0;if(n.files)while(i--){var s=new FileReader;s.onload=function(e){t.preview_list.push(e.target.result)},this.image_list.push(n.files[a]),s.readAsDataURL(n.files[a]),a++}},reset:function(){this.image=null,this.preview=null,this.image_list=[],this.preview_list=[]},uploadFile:function(){console.log(".put() 方法把東西丟到該位置裡"+this.image.name);var e="/demo/"+this.image.name;s["a"].putST(e,this.image.name),console.log(".put() 方法把東西丟到該位置裡...."+e)}},watch:{}},u=o,c=n("2877"),f=Object(c["a"])(u,i,a,!1,null,"03e651c6",null);t["default"]=f.exports},b0c0:function(e,t,n){var i=n("83ab"),a=n("9bf2").f,s=Function.prototype,r=s.toString,l=/^\s*function ([^ (]*)/,o="name";i&&!(o in s)&&a(s,o,{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(e){return""}}})},bee2:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.d(t,"a",(function(){return a}))},d4ec:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return i}))}}]);