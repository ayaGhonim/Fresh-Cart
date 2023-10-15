import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'
// catrgories

getAllCategories():Observable<any>{
  return this._HttpClient.get(this.baseUrl+'categories')
}
// get specific category
getSpecificCategory(id:string|null):Observable<any>{
  return this._HttpClient.get(this.baseUrl+`categories/${id}`)
}
// sub categories
getSubCategories(id:string|null):Observable<any>{
  return this._HttpClient.get(this.baseUrl+`categories/${id}`+`/subcategories`)
}

// get products
  getProducts(pageNum:number=1):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`products?page=${pageNum}`)
  }
// get category in home
  getCategories():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'categories')
  }
  // product details
  productDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`products/${id}`)
  }
  // get brands
  getAllBrands():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'brands')
  }

  // get user orders
  getUserOrders(id:string):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`orders/user/${id}`)
  }
}
