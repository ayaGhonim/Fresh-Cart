import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router:Router, private _CartService:CartService,
    private _Renderer2:Renderer2,private _WishlistService:WishlistService){}
@ViewChild('navBar ')navElement!:ElementRef
@HostListener('window:scroll')
onScroll():void{
if(scrollY>300){

  this._Renderer2.addClass(this.navElement.nativeElement,'shadow');
}else{

  this._Renderer2.removeClass(this.navElement.nativeElement,'shadow');
}
}


  cartNum!:number
  wishNum!:number
ngOnInit(): void {
  this._CartService.cartNumber.subscribe({
    next:(data)=>{
      console.log("cart",data);
      this.cartNum=data
    }
  })

  this._WishlistService.wishNumber.subscribe({
    next:(data)=>{
      console.log("wish",data);
      this.wishNum=data
    }
  })

  this._WishlistService.getWishList().subscribe({
    next:(data)=>{
      console.log("wish",data);
      this.wishNum=data.count      
    }
  })

  this._CartService.getUsserCart().subscribe({
    next:(data)=>{
      console.log("cart",data);
      this.cartNum=data.numOfCartItems
      
    }
  })
}



  signOut():void{
    localStorage.removeItem('etoken')
    this._Router.navigate(['/login'])
  }

}
