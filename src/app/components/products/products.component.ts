
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/services/gaurd/pipe/interface/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/services/gaurd/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import jwtDecode from 'jwt-decode';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from 'src/app/core/services/gaurd/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe,NgxPaginationModule,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(private _ProductsService:ProductsService,
    private _Renderer2:Renderer2,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _WishlistService:WishlistService){}
  products: Product[] = []
  pageSize:number=0
  current:number=0
  total:number=0
  term:string=''
  wishListData: string[] = []
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.products = response.data
        this.pageSize=response.metadata.limit
        this.current=response.metadata.currentPage
        this.total=response.results
      },
      error: (err) => {
        console.log(err);

      }

    })
    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        console.log("home wish",response.count);
        this._WishlistService.wishNumber.next(response.count)
        const newData = response.data.map((item: any) => item._id)
        this.wishListData = newData

      }
    })
    this.decodeUser()


    
  }




  addFav(id: string | undefined): void {
    this._WishlistService.addToWishList(id).subscribe({
      next: (response) => {
        console.log("addfav",response.data.length);
        this._WishlistService.wishNumber.next(response.data.length)
        this._ToastrService.success(response.message, 'Hello ' + ' ' + this.userName.name)
        this.wishListData = response.data


      }
    })
  }


  removeFav(id: string | undefined): void {
    this._WishlistService.removeFromWishList(id).subscribe({
      next: (response) => {
        console.log("remove",response);
        this._WishlistService.wishNumber.next(response.data.length)
        this._ToastrService.success(response.message, 'Hello ' + ' ' + this.userName.name)
        this.wishListData = response.data
  
      }
    })
  }
// pagination .......
  pageChanged(event:any):void{
    this._ProductsService.getProducts(event).subscribe({
      next: (response) => {
        console.log(response.data);
        this.products = response.data
        this.pageSize=response.metadata.limit
        this.current=response.metadata.currentPage
        this.total=response.results
      },
      error: (err) => {
        console.log(err);

      }

    })
  }
// user data convert token
  userName!: any
  decodeUser(): void {
    const encode = localStorage.getItem('etoken')
    if (encode != null) {
      const decode = jwtDecode(encode)
      // this.userInfo=decode
      this.userName = decode
      // console.log(decode);

    }
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
