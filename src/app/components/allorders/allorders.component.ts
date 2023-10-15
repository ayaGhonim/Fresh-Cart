import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){}
  userId!: any
  allOrders!:any
  decodeUser(): void {
    const encode = localStorage.getItem('etoken')
    if (encode != null) {
      const decode = jwtDecode(encode)
      // this.userInfo=decode
      this.userId = decode
      console.log("user id",this.userId.id);

    }
  }
  
ngOnInit(): void {
  this.decodeUser()
  this._ProductsService.getUserOrders(this.userId.id).subscribe({
    next:(response)=>{    
      console.log(response);
      this.allOrders=response
      
    }
  })
}
}
