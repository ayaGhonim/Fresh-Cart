import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){}
  allBrands:any=[]
ngOnInit(): void {
  this._ProductsService.getAllBrands().subscribe({
    next:(response)=>{
      console.log('brands');
      console.log(response);
      this.allBrands=response.data

    },
  })
}

}
