
import { CuttextPipe } from './../../core/services/gaurd/pipe/cuttext.pipe';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/services/gaurd/pipe/interface/product';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/services/gaurd/pipe/interface/category';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

import jwtDecode from 'jwt-decode';
import { SearchPipe } from 'src/app/core/services/gaurd/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CuttextPipe, CarouselModule, RouterLink, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService: ProductsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService

  ) { }
  products: Product[] = []

  categories: Category[] = []
  term: string = ''
  wishListData: string[] = []

  ngOnInit(): void {


    
    // api products
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        // console.log(response.data);
        this.products = response.data
      },
      error: (err) => {
        console.log(err);

      }
    })
    // api categories
    this._ProductsService.getCategories().subscribe({
      next: (response) => {
        // console.log(response.data); 
        this.categories = response.data
      },
      error: (err) => {
        console.log(err);

      }
    })
    // api wish list
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
  // decode token to get user name
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


  // add product to cart
  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true')
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message, 'Hello ' + ' ' + this.userName.name)
        // console.log(this.userName.name);
        this._Renderer2.removeAttribute(element, 'disabled')
        this._CartService.cartNumber.next(response.numOfCartItems)
      },
      error: (err) => {
        console.log(err);
        this._Renderer2.removeAttribute(element, 'disabled')
      }
    })
  }

  // category owl curosol
  catrgoryOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  //static courosol
  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true
  }


}
