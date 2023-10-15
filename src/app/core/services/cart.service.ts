import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'
//  myToken:any={ token:localStorage.getItem('etoken') }
 cartNumber:BehaviorSubject<number>=new BehaviorSubject(0)

addToCart(prodid:string):Observable<any>{
  return this._HttpClient.post(this.baseUrl+'cart',
  {
    productId: prodid
    // 
}
  )
}
getUsserCart():Observable<any>{
  return this._HttpClient.get(this.baseUrl+"cart",
  // 
  )
}


removeItem(id:string):Observable<any>{
  return this._HttpClient.delete(this.baseUrl+`cart/${id}`, 
  // 
  )
}


chaneCount(id:string,prodQuntity:number):Observable<any>{
  return this._HttpClient.put(this.baseUrl+`cart/${id}`,{
    count:prodQuntity
  },
  // 
  )
}

removeCart():Observable<any>{
  return this._HttpClient.delete(this.baseUrl+'cart' ,
  // 
  )
}

checkOut(id:string,orderInfo:object):Observable<any>{
  return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${id}?url=http://localhost:4200`,{
    
      shippingAddress:orderInfo
  },
  )
}
}
