"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[937],{937:(_,a,o)=>{o.r(a),o.d(a,{CategoriesComponent:()=>m});var i=o(6814),l=o(1120),t=o(4769),n=o(1132);const p=function(e){return[e]},r=function(e){return["/categoryDetails",e]};function g(e,u){if(1&e&&(t.TgZ(0,"div",5)(1,"div",6),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"div",8)(4,"h3",9),t._uU(5),t.qZA()()()),2&e){const s=u.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,p,s._id+"/subcategories")),t.xp6(1),t.Q6J("src",s.image,t.LSH)("alt",s.name),t.xp6(1),t.Q6J("routerLink",t.VKq(7,r,s._id)),t.xp6(2),t.Oqu(s.name)}}function d(e,u){if(1&e&&(t.TgZ(0,"section")(1,"div",2)(2,"div",3),t.YNc(3,g,6,9,"div",4),t.qZA()()()),2&e){const s=t.oxw();t.xp6(3),t.Q6J("ngForOf",s.categoryData)}}function h(e,u){1&e&&(t.TgZ(0,"p",10),t._uU(1,"No Subcategories In This Category."),t.qZA())}let m=(()=>{class e{constructor(s){this._ProductsService=s,this.categoryData=[]}ngOnInit(){this._ProductsService.getAllCategories().subscribe({next:s=>{console.log("categories"),console.log(s),this.categoryData=s.data}})}static#t=this.\u0275fac=function(c){return new(c||e)(t.Y36(n.s))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["nothing",""],[1,"m-4"],[1,"row","g-4","d-flex","justify-content-center"],["class","col-sm-6 col-xl-3 col-md-4  ",4,"ngFor","ngForOf"],[1,"col-sm-6","col-xl-3","col-md-4"],["role","button",1,"border","rounded","shadow",3,"routerLink"],["height","430",1,"w-100","rounded",3,"src","alt"],["role","button",3,"routerLink"],[1,"text-center","text-main","mt-2"],[1,"alert","alert-danger","text-center","mt-5","py-3"]],template:function(c,C){if(1&c&&(t.YNc(0,d,4,1,"section",0),t.YNc(1,h,2,0,"ng-template",null,1,t.W1O)),2&c){const f=t.MAs(2);t.Q6J("ngIf",0!=C.categoryData.length)("ngIfElse",f)}},dependencies:[i.ez,i.sg,i.O5,l.rH]})}return e})()},1132:(_,a,o)=>{o.d(a,{s:()=>t});var i=o(4769),l=o(9862);let t=(()=>{class n{constructor(r){this._HttpClient=r,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getAllCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getSpecificCategory(r){return this._HttpClient.get(this.baseUrl+`categories/${r}`)}getSubCategories(r){return this._HttpClient.get(this.baseUrl+`categories/${r}/subcategories`)}getProducts(r=1){return this._HttpClient.get(this.baseUrl+`products?page=${r}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}productDetails(r){return this._HttpClient.get(this.baseUrl+`products/${r}`)}getAllBrands(){return this._HttpClient.get(this.baseUrl+"brands")}getUserOrders(r){return this._HttpClient.get(this.baseUrl+`orders/user/${r}`)}static#t=this.\u0275fac=function(g){return new(g||n)(i.LFG(l.eN))};static#e=this.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);