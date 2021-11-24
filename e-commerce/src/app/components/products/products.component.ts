import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProductsService } from 'src/app/service/data-products.service';
import { ProductsService } from '../../service/products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category : string ="";
  textFilter : string ="";
  productsShow: Array<any> = [];
  products: Array<any> = [];

  constructor(public router: Router, 
              private ProductsService: ProductsService,
              private ComunicacionProducts : DataProductsService) { }

  ngOnInit(): void {
    this.category ="all";
    this.ProductsService.products().subscribe(element =>{
      this.products = element
      this.productsShow = element
      this.ComunicacionProducts.setArrayCategories(element)
      console.log(this.productsShow)}
    )
      this.ComunicacionProducts.categorySelectedObservable.subscribe(response => {
         this.category = response;
         this.listProductsByFilters();
     });
     this.ComunicacionProducts.textFilterObservable.subscribe(response => {
        this.textFilter=response;
        this.listProductsByFilters();
    });


  }

  listProductsByFilters(){
    if(this.textFilter.trim()==""){  //si NO HAY  texto de buskeda
      if(this.category.trim()=="all"){  //si la categoria es All (todos)
        this.productsShow = this.products;
      }
      else this.productsShow = this.products.filter((items) => items.category === this.category)
    }
    else{ //si HAY  texto de buskeda 
      if(this.category.trim()=="all"){  //si la categoria es All (todos)
         this.productsShow = this.products.filter((items) =>
          items.title.toLowerCase().includes(this.textFilter.toLowerCase().trim())  )
      }
      else{
        this.productsShow = this.products.filter((items) => items.category === this.category &&
        (items.title.toLowerCase().includes(this.textFilter.toLowerCase().trim()) ) ) 
      }
    }
  }

  //function agregar(){}
  //  
  //       this.ComunicacionProducts.setArrayCategories(arrayProductosSeleccionados) }

}
