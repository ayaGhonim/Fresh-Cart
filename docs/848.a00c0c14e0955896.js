"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[848],{848:(h,u,c)=>{c.r(u),c.d(u,{AllordersComponent:()=>o});var l=c(6814),p=c(6726),e=c(4769),d=c(1132);function _(r,n){if(1&r&&(e.TgZ(0,"div",10)(1,"div",11),e._UZ(2,"img",12),e.qZA(),e.TgZ(3,"div",13)(4,"div")(5,"h2",14),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e._uU(10,"price : "),e.TgZ(11,"span",15),e._uU(12),e.ALo(13,"currency"),e.qZA()()()(),e._UZ(14,"hr"),e.qZA()),2&r){const t=n.$implicit;e.xp6(2),e.Q6J("src",t.product.imageCover,e.LSH)("alt",t.product.title),e.xp6(4),e.Oqu(t.product.title),e.xp6(2),e.hij("count : ",t.count,""),e.xp6(4),e.Oqu(e.xi3(13,5,t.price,"EGP"))}}const s=function(r,n){return{"bg-danger":r,"bg-success":n}};function i(r,n){if(1&r&&(e.TgZ(0,"div",2)(1,"div",3),e.YNc(2,_,15,8,"div",4),e.qZA(),e.TgZ(3,"div",5)(4,"div",6)(5,"p"),e._uU(6,"Is Deliverd : "),e.TgZ(7,"span",7),e._uU(8),e.qZA()(),e.TgZ(9,"p"),e._uU(10,"Is Paid : "),e.TgZ(11,"span",7),e._uU(12),e.qZA()(),e.TgZ(13,"p"),e._uU(14,"Payment Method : "),e.TgZ(15,"span",8),e._uU(16),e.qZA()(),e.TgZ(17,"p",9),e._uU(18,"Total Price : "),e.TgZ(19,"span",8),e._uU(20),e.ALo(21,"currency"),e.qZA()()()()()),2&r){const t=n.$implicit;e.xp6(2),e.Q6J("ngForOf",t.cartItems),e.xp6(5),e.Q6J("ngClass",e.WLB(10,s,0==t.isDelivered,1==t.isDelivered)),e.xp6(1),e.Oqu(t.isDelivered),e.xp6(3),e.Q6J("ngClass",e.WLB(13,s,0==t.isPaid,1==t.isPaid)),e.xp6(1),e.Oqu(t.isPaid),e.xp6(4),e.Oqu(t.paymentMethodType),e.xp6(4),e.Oqu(e.xi3(21,7,t.totalOrderPrice,"EGP"))}}let o=(()=>{class r{constructor(t){this._ProductsService=t}decodeUser(){const t=localStorage.getItem("etoken");if(null!=t){const a=(0,p.Z)(t);this.userId=a,console.log("user id",this.userId.id)}}ngOnInit(){this.decodeUser(),this._ProductsService.getUserOrders(this.userId.id).subscribe({next:t=>{console.log(t),this.allOrders=t}})}static#e=this.\u0275fac=function(a){return new(a||r)(e.Y36(d.s))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-allorders"]],standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[[1,"bg-main-light","rounded","p-4","shadow","w-75","m-auto"],["class","row my-2 ",4,"ngFor","ngForOf"],[1,"row","my-2"],[1,"col-md-8"],["class","row ",4,"ngFor","ngForOf"],[1,"col-md-4","d-flex","align-items-center"],[1,"border","py-4","px-5","rounded"],[1,"text-white","px-2","py-1","fw-semibold","rounded",3,"ngClass"],[1,"fw-bold"],[1,"mb-0"],[1,"row"],[1,"col-md-4"],[1,"w-100","my-2",3,"src","alt"],[1,"col-md-8","d-flex","align-items-center"],[1,"h5","text-main"],[1,"text-main"]],template:function(a,g){1&a&&(e.TgZ(0,"section",0),e.YNc(1,i,22,16,"div",1),e.qZA()),2&a&&(e.xp6(1),e.Q6J("ngForOf",g.allOrders))},dependencies:[l.ez,l.mk,l.sg,l.H9]})}return r})()},1132:(h,u,c)=>{c.d(u,{s:()=>e});var l=c(4769),p=c(9862);let e=(()=>{class d{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getAllCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getSpecificCategory(s){return this._HttpClient.get(this.baseUrl+`categories/${s}`)}getSubCategories(s){return this._HttpClient.get(this.baseUrl+`categories/${s}/subcategories`)}getProducts(s=1){return this._HttpClient.get(this.baseUrl+`products?page=${s}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}productDetails(s){return this._HttpClient.get(this.baseUrl+`products/${s}`)}getAllBrands(){return this._HttpClient.get(this.baseUrl+"brands")}getUserOrders(s){return this._HttpClient.get(this.baseUrl+`orders/user/${s}`)}static#e=this.\u0275fac=function(i){return new(i||d)(l.LFG(p.eN))};static#t=this.\u0275prov=l.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},6726:(h,u,c)=>{function l(i){this.message=i}c.d(u,{Z:()=>s}),(l.prototype=new Error).name="InvalidCharacterError";var p=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(i){var o=String(i).replace(/=+$/,"");if(o.length%4==1)throw new l("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n,t=0,a=0,g="";n=o.charAt(a++);~n&&(r=t%4?64*r+n:n,t++%4)?g+=String.fromCharCode(255&r>>(-2*t&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return g};function d(i){this.message=i}(d.prototype=new Error).name="InvalidTokenError";const s=function _(i,o){if("string"!=typeof i)throw new d("Invalid token specified");var r=!0===(o=o||{}).header?0:1;try{return JSON.parse(function e(i){var o=i.replace(/-/g,"+").replace(/_/g,"/");switch(o.length%4){case 0:break;case 2:o+="==";break;case 3:o+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(p(o).replace(/(.)/g,function(n,t){var a=t.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}catch{return p(o)}}(i.split(".")[r]))}catch(n){throw new d("Invalid token specified: "+n.message)}}}}]);