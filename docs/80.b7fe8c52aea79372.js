"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[80],{5080:(O,f,c)=>{c.r(f),c.d(f,{WishlistComponent:()=>w});var _=c(6814),p=c(1120),v=c(1797),u=c(6726),t=c(4769),x=c(9196),r=c(2425),s=c(6286);function l(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"i",19),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,d=t.oxw(2);return t.KtG(d.removeFav(o._id))}),t.qZA()}}function a(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,d=t.oxw(2);return t.KtG(d.addFav(o._id))}),t.qZA()}}function m(n,g){if(1&n&&t._UZ(0,"i",21),2&n){const e=g.$implicit,i=t.oxw().$implicit;t.ekj("rating-color",i.ratingsAverage>=e)}}const h=function(n){return["/productDetails",n]},C=function(){return[1,2,3,4,5]};function E(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5),t.YNc(2,l,1,0,"i",6),t.YNc(3,a,1,0,"i",7),t.TgZ(4,"header",8)(5,"div",9),t._UZ(6,"img",10),t.qZA(),t.TgZ(7,"p",11),t._uU(8),t.qZA(),t.TgZ(9,"h3",12),t._uU(10),t.ALo(11,"cuttext"),t.qZA(),t.TgZ(12,"div",13)(13,"p",14),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"p",15),t.YNc(17,m,1,2,"i",16),t._uU(18),t.qZA()()(),t.TgZ(19,"footer")(20,"button",17,18),t.NdJ("click",function(){const d=t.CHM(e).$implicit,b=t.MAs(21),M=t.oxw(2);return t.KtG(M.addProduct(d._id,b))}),t._uU(22,"+ Add To Cart"),t.qZA()()()()}if(2&n){const e=g.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("ngIf",i.wishListData.includes(e._id)),t.xp6(1),t.Q6J("ngIf",!i.wishListData.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(17,h,e._id)),t.xp6(2),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(e.category.name),t.xp6(2),t.Oqu(t.xi3(11,11,e.title,3)),t.xp6(4),t.Oqu(t.xi3(15,14,e.price,"EGP")),t.xp6(3),t.Q6J("ngForOf",t.DdM(19,C)),t.xp6(1),t.Oqu(e.ratingsAverage)}}function T(n,g){if(1&n&&(t.TgZ(0,"section",1)(1,"div",2),t.YNc(2,E,23,20,"div",3),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.products)}}let w=(()=>{class n{constructor(e,i,o,d){this._WishlistService=e,this._ToastrService=i,this._Renderer2=o,this._CartService=d,this.products=[],this.term="",this.wishListData=[]}ngOnInit(){this._WishlistService.getWishList().subscribe({next:e=>{console.log(e),this.products=e.data;const i=e.data.map(o=>o._id);this.wishListData=i,this._WishlistService.wishNumber.next(e.count)}}),this.decodeUser()}decodeUser(){const e=localStorage.getItem("etoken");if(null!=e){const i=(0,u.Z)(e);this.userName=i}}addFav(e){this._WishlistService.addToWishList(e).subscribe({next:i=>{console.log("addfav",i),this._ToastrService.success(i.message,"Hello  "+this.userName.name),this._WishlistService.wishNumber.next(i.data.length)}})}removeFav(e){this._WishlistService.removeFromWishList(e).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message,"Hello  "+this.userName.name),this.wishListData=i.data;const o=this.products.filter(d=>this.wishListData.includes(d._id));this.products=o,this._WishlistService.wishNumber.next(i.data.length)}})}addProduct(e,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.addToCart(e).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message,"Hello  "+this.userName.name),this._Renderer2.removeAttribute(i,"disabled"),this._CartService.cartNumber.next(o.numOfCartItems)},error:o=>{console.log(o),this._Renderer2.removeAttribute(i,"disabled")}})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(x.M),t.Y36(r._W),t.Y36(t.Qsj),t.Y36(s.N))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"row","d-flex","justify-content-center"],["class","col-lg-2 col-md-4 col-sm-6 my-3 cursor-pointer",4,"ngFor","ngForOf"],[1,"col-lg-2","col-md-4","col-sm-6","my-3","cursor-pointer"],[1,"product","h-100"],["class","fa-solid fa-heart cursor-pointer fa-2x heart text-main",3,"click",4,"ngIf"],["class","fa-regular fa-heart text-main cursor-pointer fa-2x heart",3,"click",4,"ngIf"],[3,"routerLink"],[1,"overflow-hidden"],[1,"w-100",3,"src","title","alt"],[1,"text-main","small","mx-2","my-1"],[1,"h6","mx-2","my-1"],[1,"d-flex","justify-content-between","mt-3","mx-2"],[1,"text-secondary","mb-0","small"],[1,"small"],["class","small mb-0 fa-solid fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"active-link","add-btn","border-0","w-100","py-2","cursor-pointer","button",3,"click"],["addBtn",""],[1,"fa-solid","fa-heart","cursor-pointer","fa-2x","heart","text-main",3,"click"],[1,"fa-regular","fa-heart","text-main","cursor-pointer","fa-2x","heart",3,"click"],[1,"small","mb-0","fa-solid","fa-star"]],template:function(i,o){1&i&&t.YNc(0,T,3,1,"section",0),2&i&&t.Q6J("ngIf",o.products.length>0)},dependencies:[_.ez,_.sg,_.O5,_.H9,p.rH,v.r],styles:[".product[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:all 1s}.col-md-2[_ngcontent-%COMP%]:hover   .product[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.2)}.button[_ngcontent-%COMP%]:disabled{background-color:#067a065b!important;color:#ffffff8e!important;cursor:not-allowed}"]})}return n})()},6286:(O,f,c)=>{c.d(f,{N:()=>u});var _=c(5619),p=c(4769),v=c(9862);let u=(()=>{class t{constructor(r){this._HttpClient=r,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new _.X(0)}addToCart(r){return this._HttpClient.post(this.baseUrl+"cart",{productId:r})}getUsserCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeItem(r){return this._HttpClient.delete(this.baseUrl+`cart/${r}`)}chaneCount(r,s){return this._HttpClient.put(this.baseUrl+`cart/${r}`,{count:s})}removeCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(r,s){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${r}?url=http://localhost:4200`,{shippingAddress:s})}static#t=this.\u0275fac=function(s){return new(s||t)(p.LFG(v.eN))};static#e=this.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},6726:(O,f,c)=>{function _(r){this.message=r}c.d(f,{Z:()=>x}),(_.prototype=new Error).name="InvalidCharacterError";var p=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(r){var s=String(r).replace(/=+$/,"");if(s.length%4==1)throw new _("'atob' failed: The string to be decoded is not correctly encoded.");for(var l,a,m=0,h=0,C="";a=s.charAt(h++);~a&&(l=m%4?64*l+a:a,m++%4)?C+=String.fromCharCode(255&l>>(-2*m&6)):0)a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);return C};function u(r){this.message=r}(u.prototype=new Error).name="InvalidTokenError";const x=function t(r,s){if("string"!=typeof r)throw new u("Invalid token specified");var l=!0===(s=s||{}).header?0:1;try{return JSON.parse(function v(r){var s=r.replace(/-/g,"+").replace(/_/g,"/");switch(s.length%4){case 0:break;case 2:s+="==";break;case 3:s+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(p(s).replace(/(.)/g,function(a,m){var h=m.charCodeAt(0).toString(16).toUpperCase();return h.length<2&&(h="0"+h),"%"+h}))}catch{return p(s)}}(r.split(".")[l]))}catch(a){throw new u("Invalid token specified: "+a.message)}}}}]);