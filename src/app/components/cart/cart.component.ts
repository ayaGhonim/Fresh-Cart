
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  
  constructor(private _CartService:CartService,private _Renderer2: Renderer2){}
 cartDetails:any={}
 isLoading:boolean=false
 cartNum!:number



ngOnInit(): void {
  this._CartService.getUsserCart().subscribe({
    next:(response)=>{
      console.log(response.data);
      this.cartDetails=response.data
    }
  })

}


removeItem(id:string ,element: HTMLButtonElement):void{
  this._Renderer2.setAttribute(element,'disabled','true')

  this._CartService.removeItem(id).subscribe({
    next:(response)=>{
      this._Renderer2.removeAttribute(element,'disabled')        
      // console.log(response.data);
      this.cartDetails=response.data  
      this._CartService.cartNumber.next(response.numOfCartItems)
    },
    error:(err)=>{
      this._Renderer2.removeAttribute(element,'disabled')        
    }
  })
}


changeCount(count:number,id:string,element1:HTMLButtonElement,element2:HTMLButtonElement):void{
  if(count>=1){
    this._Renderer2.setAttribute(element1,'disabled','true')
    this._Renderer2.setAttribute(element2,'disabled','true')
    // console.log(count);
this._CartService.chaneCount(id,count).subscribe({
  next:(response)=>{
    this._Renderer2.removeAttribute(element1,'disabled')
    this._Renderer2.removeAttribute(element2,'disabled')
    // console.log(response);
    this.cartDetails=response.data  },

    error:(err)=>{
      console.log(err); 
      this._Renderer2.removeAttribute(element1,'disabled')
      this._Renderer2.removeAttribute(element2,'disabled')
    }
})

  }

}

clear():void{
  this.isLoading=true 
  this._CartService.removeCart().subscribe({
    next:(response)=>{  
      console.log(response); 
      if(response.message=='success'){
        this.isLoading=false
          this.cartDetails=''
          this._CartService.cartNumber.next(0)
      }     
    },
    error:(err)=>{
      this.isLoading=false
      console.log(err);    
    }
  })
}

}
