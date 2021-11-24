import { Component, OnInit } from '@angular/core';
import { DataProductsService } from 'src/app/service/data-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ComunicacionProducts : DataProductsService) { }

  ngOnInit(): void {
  }
  cambiarTextoFiltro(text : any){
    // alert("Usando el servicio DataProductsService, mandamos el valor mediante el metodo setFilterByText, dicho valor será leido por el subscribe del componente products.component puesto en el ngOnInit 'textFilterObservable'")
    this.ComunicacionProducts.setFilterByText(text.target.value);
  }

}
