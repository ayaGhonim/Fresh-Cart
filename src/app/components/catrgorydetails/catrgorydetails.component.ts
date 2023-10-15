import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Category } from 'src/app/core/services/gaurd/pipe/interface/category';

@Component({
  selector: 'app-catrgorydetails',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './catrgorydetails.component.html',
  styleUrls: ['./catrgorydetails.component.scss']
})
export class CatrgorydetailsComponent implements OnInit {
  constructor(private _ProductsService:ProductsService, private _ActivatedRoute:ActivatedRoute){}
  categoryId:string|null=''
  categoryDetails:Category={
    image: '',
    name: ''
  }
ngOnInit(): void {

this._ActivatedRoute.paramMap.subscribe({
  next:(prams)=>{
    this.categoryId=prams.get('id')
  }
})


  this._ProductsService.getSpecificCategory(this.categoryId).subscribe({
    next:(Response)=>{
      console.log(Response);
      this.categoryDetails=Response.data
      
    }
  })
}
}
