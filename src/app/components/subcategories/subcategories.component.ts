import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit{
  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute){}
  categoryId:string|null=''
  subCategory!:any

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(prams)=>{
     
      this.categoryId= prams.get('id')
    }
  })


  this._ProductsService.getSubCategories(this.categoryId).subscribe({
    next:(response)=>{
      // console.log(response);
      this.subCategory=response.data
      console.log('sub');
      console.log(this.subCategory);
      

      
    }
  })
}
}
