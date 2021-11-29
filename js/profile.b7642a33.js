(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"3b73":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-field",{staticClass:"file"},[a("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[a("a",{staticClass:"button is-primary"},[a("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),a("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?a("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},r=[],i={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Pick another file":"Pick a file"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},o=i,n=a("2877"),l=Object(n["a"])(o,s,r,!1,null,null,null);e["a"]=l.exports},c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" Profile "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("profile-update-form",{staticClass:"tile is-child"}),a("card-component",{staticClass:"tile is-child",attrs:{title:"Profile",icon:"account"}},[a("user-avatar",{staticClass:"image has-max-width is-aligned-center"}),a("hr"),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:t.userName,"custom-class":"is-static",readonly:""}})],1),a("hr"),a("b-field",{attrs:{label:"E-mail"}},[a("b-input",{attrs:{value:t.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1),a("password-update-form")],1)],1)},r=[],i=a("5530"),o=a("2f62"),n=a("6df7"),l=a("1e1d"),u=a("503b"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-field",{attrs:{horizontal:"",label:"Avatar"}},[a("file-picker")],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[a("b-input",{attrs:{name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[a("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Submit ")])])])],1)])},m=[],d=(a("b0c0"),a("3b73")),p={name:"ProfileUpdateForm",components:{CardComponent:n["a"],FilePicker:d["a"]},data:function(){return{isFileUploaded:!1,isLoading:!1,form:{name:null,email:null}}},computed:Object(i["a"])({},Object(o["b"])(["userName","userEmail"])),watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}},mounted:function(){this.form.name=this.userName,this.form.email=this.userEmail},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$store.commit("user",t.form),t.$buefy.snackbar.open({message:"Updated",queue:!1})}),500)}}},f=p,b=a("2877"),h=Object(b["a"])(f,c,m,!1,null,null,null),w=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Change Password",icon:"lock"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[a("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:t.form.password_current,callback:function(e){t.$set(t.form,"password_current",e)},expression:"form.password_current"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[a("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[a("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Submit ")])])])],1)])},_=[],g={name:"PasswordUpdateForm",components:{CardComponent:n["a"]},data:function(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Updated",queue:!1},500)}))}}},C=g,k=Object(b["a"])(C,v,_,!1,null,null,null),y=k.exports,P=a("9e7c"),E=a("808f"),$={name:"Profile",components:{UserAvatar:E["a"],Tiles:P["a"],PasswordUpdateForm:y,ProfileUpdateForm:w,HeroBar:u["a"],TitleBar:l["a"],CardComponent:n["a"]},computed:Object(i["a"])({titleStack:function(){return["Admin","Profile"]}},Object(o["b"])(["userName","userEmail"]))},q=$,x=Object(b["a"])(q,s,r,!1,null,null,null);e["default"]=x.exports}}]);
//# sourceMappingURL=profile.b7642a33.js.map