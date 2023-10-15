import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';

import { Product } from 'src/app/core/services/gaurd/pipe/interface/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/services/gaurd/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import jwtDecode from 'jwt-decode';

@Component({
    selector: 'app-wishlist',
    standalone: true,
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
    imports: [CommonModule, RouterLink, CuttextPipe]
})
export class WishlistComponent implements OnInit{
  
  userName: any;
  constructor(private _WishlistService:WishlistService,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,
    private _CartService:CartService
    ){}
  products: Product[] = []
  term:string=''
  wishListData:string[]=[]

  

  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
        console.log(response);
        this.products=response.data
        const newData=response.data.map((item:any)=>item._id)
        this.wishListData=newData
       this._WishlistService.wishNumber.next(response.count)

        
      }
    })
    this.decodeUser();

  }
  decodeUser(): void {
    const encode = localStorage.getItem('etoken')
    if (encode != null) {
      const decode = jwtDecode(encode)
      // this.userInfo=decode
      this.userName = decode
      // console.log(decode);

    }
  }



  addFav(id:string|undefined):void{
    this._WishlistService.addToWishList(id).subscribe({
      next:(response)=>{
        console.log("addfav",response);
        this._ToastrService.success(response.message, 'Hello ' + ' ' + this.userName.name) 
       this._WishlistService.wishNumber.next(response.data.length)

      }
    })
  }
  removeFav(id:string|undefined):void{
    this._WishlistService.removeFromWishList(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message, 'Hello ' + ' ' + this.userName.name)      
        this.wishListData=response.data
       const newProducts=this.products.filter((item:any)=>this.wishListData.includes(item._id))
       this.products=newProducts
       this._WishlistService.wishNumber.next(response.data.length)

      }
    })
  }
  
  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element,'disabled','true')
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response); 
        this._ToastrService.success(response.message, 'Hello ' + ' ' + this.userName.name)
        // console.log(this.userName.name);
        this._Renderer2.removeAttribute(element,'disabled')
        this._CartService.cartNumber.next(response.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        this._Renderer2.removeAttribute(element,'disabled')        
      }
    })
  }

 
}
