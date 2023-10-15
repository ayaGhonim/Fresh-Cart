import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './core/services/gaurd/auth.guard';

const routes: Routes = [
  // auth
  {path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component')
  .then((m)=>m.AuthLayoutComponent),children:[
    {path:'',redirectTo:'login',pathMatch:'full',title:'Login' },
    {path:'login' ,loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'Login'},
    {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.default),title:'Register'},
    {path:'forget',loadComponent:()=>import('./components/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent),title:'Forget Password' }

  ]},
// blank
  {path:'',canActivate:[authGuard],loadComponent:()=>import('./layouts/blank-layout/blank-layout.component')
  .then((m)=>m.BlankLayoutComponent),children:[
      {path:'', redirectTo:'home' , pathMatch:'full',title:'Home' },
      {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:'Home' },
      {path:'productDetails/:id',loadComponent:()=>import('./components/details/details.component').then((m)=>m.DetailsComponent),title:'Details' },
      {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:'Cart' },
      {path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent),title:'Payment' },
      {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:'Products' },
      {path:'allorders',loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent),title:'All Orders' },
      {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:'Categories' },
      {path:'categoryDetails/:id',loadComponent:()=>import('./components/catrgorydetails/catrgorydetails.component').then((m)=>m.CatrgorydetailsComponent),title:'Category Details' },
      {path:'categories/:id/subcategories',loadComponent:()=>import('./components/subcategories/subcategories.component').then((m)=>m.SubcategoriesComponent),title:'Sub Categories' },
      {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent),title:'Brands' },
      {path:'forgetpassword',loadComponent:()=>import('./components/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent),title:'Forget Password' },
      {path:'wishlist',loadComponent:()=>import('./components/wishlist/wishlist.component').then((m)=>m.WishlistComponent),title:'Wish List' }
     

  ]},

  
   {path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
