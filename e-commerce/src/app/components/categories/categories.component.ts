import { Component, OnInit } from '@angular/core';
import { DataProductsService } from '../../service/data-products.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  constructor(public ComunicacionProducts : DataProductsService) { }

  ngOnInit(): void {
  }
  clickTabCategory(category : string){
    this.ComunicacionProducts.setCategorySelected(category);
    //  alert("Usando el servicio DataProductsService, mandamos el valor mediante el metodo setCategorySelected, dicho valor será leido por el subscribe del componente products.component puesto en el ngOnInit 'categorySelectedObservable'")
  }
}
