"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[629],{6560:(I,h,m)=>{m.r(h),m.d(h,{default:()=>Y});var c=m(6814),i=m(95),e=m(4769),f=m(304),A=m(1120);function q(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"Name is required . "),e.qZA())}function a(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"MaxLenth is 15 . "),e.qZA())}function l(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"MinLenth is 3 . "),e.qZA())}function g(t,s){if(1&t&&(e.TgZ(0,"div",19),e.YNc(1,q,2,0,"p",17),e.YNc(2,a,2,0,"p",17),e.YNc(3,l,2,0,"p",17),e.qZA()),2&t){const o=e.oxw();let n,r,u;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("name"))?null:r.getError("maxlength")),e.xp6(1),e.Q6J("ngIf",null==(u=o.registerForm.get("name"))?null:u.getError("minlength"))}}function p(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"email is required . "),e.qZA())}function d(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"This email is invalid . "),e.qZA())}function _(t,s){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,p,2,0,"p",17),e.YNc(2,d,2,0,"p",17),e.qZA()),2&t){const o=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("email"))?null:r.getError("email"))}}function Z(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"password is required . "),e.qZA())}function C(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"password must be more than 6 . "),e.qZA())}function E(t,s){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,Z,2,0,"p",17),e.YNc(2,C,2,0,"p",17),e.qZA()),2&t){const o=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("password"))?null:r.getError("pattern"))}}function F(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"rePassword is required . "),e.qZA())}function U(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"This not match with password. "),e.qZA())}function R(t,s){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,F,2,0,"p",17),e.YNc(2,U,2,0,"p",17),e.qZA()),2&t){const o=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("rePassword"))?null:r.getError("mismatch"))}}function P(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"phone is required . "),e.qZA())}function N(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1,"This accept only egypt numbers . "),e.qZA())}function y(t,s){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,P,2,0,"p",17),e.YNc(2,N,2,0,"p",17),e.qZA()),2&t){const o=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("phone"))?null:r.getError("pattern"))}}function b(t,s){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",21),e.qZA())}function J(t,s){if(1&t&&(e.TgZ(0,"p",22),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.errorMsg)}}let Y=(()=>{class t{constructor(o,n,r){this._AuthService=o,this._Router=n,this._FormBuilder=r,this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:["",[i.kI.required,i.kI.maxLength(15),i.kI.minLength(3)]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9]{6,}$/)]],rePassword:[""],phone:["",[i.kI.required,i.kI.pattern(/^01[1250][0-9]{8}$/)]]},{validators:[this.confirmPassword]})}confirmPassword(o){const n=o.get("password"),r=o.get("rePassword");""==r?.value?r?.setErrors({required:!0}):n?.value!=r?.value&&r?.setErrors({mismatch:!0})}handelForm(){console.log(this.registerForm.value),this.isLoading=!0,!0===this.registerForm.valid&&this._AuthService.register(this.registerForm.value).subscribe({next:n=>{console.log(n),"success"==n.message&&(this.isLoading=!1,this._Router.navigate(["./login"]))},error:n=>{console.log(n),this.isLoading=!1,this.errorMsg=n.error.message}})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(f.e),e.Y36(A.F0),e.Y36(i.qu))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:33,vars:9,consts:[[1,"w-75","m-auto","shadow","rounded","p-3","my-5","bg-main-light","register"],[1,"fw-light","my-3"],[3,"formGroup","ngSubmit"],[1,"form-item","my-2"],["for","name"],["id","name","type","text","formControlName","name",1,"form-control","shadow-none"],["class","alert alert-danger p-1 small text-center pb-0",4,"ngIf"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control","shadow-none"],["class","alert alert-danger p-1 small text-center",4,"ngIf"],["for","password"],["id","password","type","password","formControlName","password",1,"form-control","shadow-none"],["for","rePassword"],["id","rePassword","type","password","formControlName","rePassword",1,"form-control","shadow-none"],["for","phone"],["id","phone","type","tel","formControlName","phone",1,"form-control","shadow-none"],[1,"main-btn","my-2","py-2","px-4",3,"disabled"],[4,"ngIf"],["class","alert alert-danger text-center p-1 my-1",4,"ngIf"],[1,"alert","alert-danger","p-1","small","text-center","pb-0"],[1,"alert","alert-danger","p-1","small","text-center"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","text-center","p-1","my-1"]],template:function(n,r){if(1&n&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Register Now :"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return r.handelForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Name:"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.YNc(8,g,4,3,"div",6),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"Email:"),e.qZA(),e._UZ(12,"input",8),e.qZA(),e.YNc(13,_,3,2,"div",9),e.TgZ(14,"div",3)(15,"label",10),e._uU(16,"Password:"),e.qZA(),e._UZ(17,"input",11),e.qZA(),e.YNc(18,E,3,2,"div",9),e.TgZ(19,"div",3)(20,"label",12),e._uU(21,"RePassword:"),e.qZA(),e._UZ(22,"input",13),e.qZA(),e.YNc(23,R,3,2,"div",9),e.TgZ(24,"div",3)(25,"label",14),e._uU(26,"Phone:"),e.qZA(),e._UZ(27,"input",15),e.qZA(),e.YNc(28,y,3,2,"div",9),e.TgZ(29,"button",16),e._uU(30,"Register "),e.YNc(31,b,2,0,"span",17),e.qZA()(),e.YNc(32,J,2,1,"p",18),e.qZA()),2&n){let u,w,v,T,x;e.xp6(3),e.Q6J("formGroup",r.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(u=r.registerForm.get("name"))?null:u.errors)&&(null==(u=r.registerForm.get("name"))?null:u.touched)),e.xp6(5),e.Q6J("ngIf",(null==(w=r.registerForm.get("email"))?null:w.errors)&&(null==(w=r.registerForm.get("email"))?null:w.touched)),e.xp6(5),e.Q6J("ngIf",(null==(v=r.registerForm.get("password"))?null:v.errors)&&(null==(v=r.registerForm.get("password"))?null:v.touched)),e.xp6(5),e.Q6J("ngIf",(null==(T=r.registerForm.get("rePassword"))?null:T.errors)&&(null==(T=r.registerForm.get("rePassword"))?null:T.touched)),e.xp6(5),e.Q6J("ngIf",(null==(x=r.registerForm.get("phone"))?null:x.errors)&&(null==(x=r.registerForm.get("phone"))?null:x.touched)),e.xp6(1),e.Q6J("disabled",r.registerForm.invalid),e.xp6(2),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("ngIf",r.errorMsg)}},dependencies:[c.ez,c.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:["@media all and (max-width: 575px){.register[_ngcontent-%COMP%]{width:95%!important;margin:50px auto auto!important}}"]})}return t})()},6726:(I,h,m)=>{function c(a){this.message=a}m.d(h,{Z:()=>q}),(c.prototype=new Error).name="InvalidCharacterError";var i=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(a){var l=String(a).replace(/=+$/,"");if(l.length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var g,p,d=0,_=0,Z="";p=l.charAt(_++);~p&&(g=d%4?64*g+p:p,d++%4)?Z+=String.fromCharCode(255&g>>(-2*d&6)):0)p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(p);return Z};function f(a){this.message=a}(f.prototype=new Error).name="InvalidTokenError";const q=function A(a,l){if("string"!=typeof a)throw new f("Invalid token specified");var g=!0===(l=l||{}).header?0:1;try{return JSON.parse(function e(a){var l=a.replace(/-/g,"+").replace(/_/g,"/");switch(l.length%4){case 0:break;case 2:l+="==";break;case 3:l+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(i(l).replace(/(.)/g,function(p,d){var _=d.charCodeAt(0).toString(16).toUpperCase();return _.length<2&&(_="0"+_),"%"+_}))}catch{return i(l)}}(a.split(".")[g]))}catch(p){throw new f("Invalid token specified: "+p.message)}}}}]);