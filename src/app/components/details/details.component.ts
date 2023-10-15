
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Details } from 'src/app/core/services/gaurd/pipe/interface/details';
import { CartService } from 'src/app/core/services/cart.service';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
 
  
  constructor(private _ActivatedRoute:ActivatedRoute , 
    private _ProductsService:ProductsService,
    private _Renderer2:Renderer2,
    private __CartService:CartService,
    private _ToastrService:ToastrService
    
    ){}
  productId!:string|null;
  productDetails!:Details
  ngOnInit(): void {
    // id
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId=params.get('id')
      }
    })
    // api details
    this._ProductsService.productDetails(this.productId).subscribe({
      next:(response)=>{
        console.log(response.data);
        this.productDetails=response.data
      }
      // destructing data
      // next:({data})=>{
      //   console.log(data); 
      // }
    })
    this.decodeUser()

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
  addProduct(id: any, el1:HTMLButtonElement): void {
   this._Renderer2.setAttribute(el1,'disabled','true')
    this.__CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response); 
        this._ToastrService.success(response.message, 'Hello ' + '  '+ this.userName.name)
        // console.log(this.userName.name);
        this._Renderer2.removeAttribute(el1,'disabled')
        this.__CartService.cartNumber.next(response.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        this._Renderer2.removeAttribute(el1,'disabled')        
      }
    })
  }







  detailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1500,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
     items:1,
    nav: true
  }

}
