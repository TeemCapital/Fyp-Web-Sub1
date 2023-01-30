import { ProductsModel } from './../Services/products.model';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:ProductsModel[]=[]
  constructor(private productSer:ProductsServiceService) { }

  ngOnInit(): void {
    this.products=this.productSer.getAllMensProducts()
  }

}
